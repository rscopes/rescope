/*
 * Copyright (c)  2017 Caipi Labs .
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

/**
 * Ultra scalable state-aware store
 *
 * @todo : lot of optims...
 */

var isString     = require('isstring')
    , isArray    = require('isarray')
    , isFunction = require('isfunction')
    ,
    Context      = require('./Context'),
    EventEmitter = require('events'),
    shortid      = require('shortid'),
    objProto     = Object.getPrototypeOf({}),
    openContexts = {};


export default class Store extends EventEmitter {

    static use                        = [];// overridable list of source stores
    static follow;// overridable list of store that will allow push if updated
    static require;
    static staticContext              = new Context({}, {id : "static"});
    static initialState               = undefined;// default state
    /**
     *
     * @type {number}
     */
           static defaultMaxListeners = 100;
    /**
     * if retain goes to 0 :
     * false to not destroy,
     * 0 to sync auto destroy
     * Ms to autodestroy after tm ms if no retain has been called
     * @type {boolean|Int}
     */
           static persistenceTm       = false;

    /**
     * Constructor, will build a rescope store
     *
     * (context, {require,use,refine,state, datas})
     * (context)
     *
     * @param context {object} context where to find the other stores (default : static staticContext )
     * @param keys {Array} (passed to Store::map) Ex : ["session", "otherNamedStore:key", otherStore.as("otherKey")]
     */
    constructor() {
        super();
        var argz         = [...arguments],
            _static      = this.constructor,
            context      = !isArray(argz[0]) && !isString(argz[0]) ? argz.shift() : _static.staticContext,
            cfg          = argz[0] && !isArray(argz[0]) && !isString(argz[0]) ? argz.shift() : {},
            name         = isString(argz[0]) ? argz[0] : cfg.name || _static.name,
            watchs       = isArray(argz[0]) ? argz.shift() : cfg.use || [],// watchs need to be defined after all the store are registered : so we can't deal with any "static use" automaticly
            refine       = isFunction(argz[0]) ? argz.shift() : cfg.refine || null,
            initialState = _static.initialState;

        this._uid          = cfg._uid || shortid.generate();
        this._maxListeners = cfg.defaultMaxListeners || Store.defaultMaxListeners;
        this.locks         = 0;
        this._onStabilize  = [];

        this._persistenceTm = cfg.persistenceTm || this.constructor.persistenceTm;
        if ( isString(argz[0]) ) {
            if ( context.__context[name] )
                console.warn("ReScope: Overwriting an existing static named store ( %s ) !!", name);
            context.__context[name] = this;
        }

        if ( cfg && cfg.on ) {
            this.on(cfg.on);
        }
        // this.state      = this.state || {};

        this._use = watchs;
        this.name = name;

        if ( context.stores ) {
            this.contextObj = context;
            this.context    = context.stores;
        } else {
            this.contextObj = new Context(context);
            this.context    = context.stores;
        }


        this._stable       = true;
        this._rev          = 1;
        this._revs         = {};
        this.stores        = {};
        this.__retainLocks = {all : 0};
        this._require      = [];

        if ( _static.require )
            this._require.push(..._static.require);
        if ( cfg.require )
            this._require.push(...cfg.require);

        this._followers = [];

        if ( cfg.hasOwnProperty("datas") && cfg.datas !== undefined )
            this.datas = cfg.datas;
        if ( cfg.hasOwnProperty("state") && cfg.state !== undefined )
            initialState = cfg.state;

        if ( refine )
            this.refine = refine;

        if ( !!this._use && this._use.length ) {// if there initial watchs anyway
            this.pull(this._use);
        }

        if ( initialState ) {// sync refine
            this.state = {...initialState};
            if ( this.isComplete() && this.datas === undefined )
                this.datas = this.refine(this.datas, this.state, this.state);
        }
        this._stable = this.datas !== undefined;// stable if it have initial result datas
        !this._stable && this.emit('unstable', this.state);
    }

    /**
     * get a Builder-key pair for Store::map
     * @param {string} name
     * @returns {{store: Store, name: *}}
     */
    static as( name ) {
        return {store : this, name};
    }

    /**
     * Map all named stores in {keys} to the {object}'s state
     * Hook componentWillUnmount (for react comp) or destroy to unBind them automatically
     * @static
     * @param object {React.Component|Store|...} target state aware object
     * @param keys {Array} Ex : ["session", "otherStaticNamedStore:key", store.as('anotherKey')]
     */
    static map( component, keys, context, origin, setInitial = false ) {
        var targetRevs     = component._revs || {};
        // var targetContext  = component.stores || (component.stores = new Context({}));
        var initialOutputs = {};
        keys               = isArray(keys) ? [...keys] : [keys];


        context = context || Store.staticContext;

        // if (!targetContext.__context)
        //     debugger;

        keys           = keys.filter(
            // @todo : use query refs
            // (store)(\.store)*(\[(\*|(props)\w+)+)\])?(\:alias)
            ( key ) => {
                if ( !key ) {
                    console.error("Not a mappable store item '" + key + "' in " + origin + ' !!');
                    return false;
                }
                let name,
                    alias,
                    store;
                if ( key.store && key.name ) {
                    alias = name = key.name;
                    store = key.store;
                } else if ( isFunction(key) ) {
                    name = alias = key.name || key.defaultName;
                    store = key;
                } else {
                    key   = key.match(/([\w_]+)(?:\:\[(\*)\])?(?:\:(\*))?/);
                    name  = key[0];
                    store = context.__context[key[0]];
                    alias = key[1] == '*' ? null : key[2] || key[0];// allow binding props  ([*])
                }

                if ( targetRevs[name] ) return false;// ignore dbl uses for now
                if ( !store ) {
                    console.error("Not a mappable store item '" + name + "/" + alias + "' in " + origin + ' !!', store);
                    return false;
                } else if ( isFunction(store) ) {
                    this.mountStore(name, context)

                    context.__context[name].bind(component, alias, setInitial);
                    // if ( context.__context[key[0]].state ) {// do sync push after constructor
                    //     context.__context[key[0]].push();
                    // }
                } else {
                    store.bind(component, alias, setInitial);
                }
                targetRevs[alias] = targetRevs[alias] || true;
                // !targetContext.__context[alias] && targetContext.register({[alias] : context.__context[name]});
                if ( context.__context[name].hasOwnProperty('datas') )
                    initialOutputs[alias] = context.datas[name];
                return true;
            }
        );
        var mixedCWUnmount,
            unMountKey = component.isReactComponent ? "componentWillUnmount" : "destroy";

        if ( component.hasOwnProperty(unMountKey) ) {
            mixedCWUnmount = component[unMountKey];
        }

        component[unMountKey] = function () {// todo hop
            delete this[unMountKey];
            if ( mixedCWUnmount )
                this[unMountKey] = mixedCWUnmount;
            keys.map(
                ( key ) => {
                    let name,
                        alias,
                        store;
                    if ( key.store && key.name ) {
                        alias = name = key.name;
                        store = key.store;
                    } else if ( isFunction(key) ) {
                        name = alias = key.name || key.defaultName;
                        store = context.__context[name];
                    } else {
                        key   = key.split(':');
                        name  = key[0];
                        store = context.__context[key[0]];
                        alias = key[1] || key[0];
                    }

                    store && !isFunction(store) && store.unBind(component, alias)
                }
            );
            return this[unMountKey] && this[unMountKey].apply(this, arguments);
        }

        return initialOutputs;
    }

    static getContext( contexts ) {
        let skey = isArray(contexts) ? contexts.sort(( a, b ) => {
            if ( a.firstname < b.firstname ) return -1;
            if ( a.firstname > b.firstname ) return 1;
            return 0;
        }).join('::') : contexts;
        return Context.contexts[skey] = Context.contexts[skey] || new Context({}, {id : skey});
    }

    static mountStore( name, context, store, state, datas ) {
        let ctx, contextMap = context.__context;
        contextMap[name]    = store = store || contextMap[name];
        if ( !store ) {
            console.error("Not a mappable store item '" + name + ' !!', store);
            return false;
        } else if ( isFunction(store) ) {
            //
            if ( store && (store.contexts || store.context) ) {
                ctx = this.getContext(store.contexts || [store.context]);

                ctx.register({[name] : ctx.__context[name] || store});

                contextMap[name] = ctx[name] = new store(context, {state, datas});
                ctx._watchStore(name);
                return ctx[name];
            } else
                store = contextMap[name] = new store(context, {state, datas});
            contextMap[name].relink(name);
        } else {
            if ( state !== undefined && datas === undefined )
                store.setState(state);
            else if ( state !== undefined )
                store.state = state;

            if ( datas !== undefined )
                store.push(datas);
        }
        return store;
    }

    /**
     * Overridable method to know if a state change should be propag to the listening stores & components
     * If static follow is defined, shouldPropag will return true if any of the "follow" keys was updated
     * If not it will always return true
     */
    shouldPropag( nDatas ) {
        var _static = this.constructor, r,
            cDatas  = this.datas;

        // if ( !cState )
        //     return true;
        if ( !cDatas && (!_static.follow || !_static.follow.length ||
                _static.follow && _static.follow.reduce(( r, i ) => (r || nDatas && nDatas[i]), false)) )
            return true;

        if ( isArray(_static.follow) )
            _static.follow.forEach(
                ( key ) => {
                    r = r || (nDatas ? cDatas[key] !== nDatas[key] : cDatas && cDatas[key])
                }
            );
        else if ( _static.follow === 'strict' )
            r = nDatas === cDatas;
        else {
            cDatas && Object.keys(cDatas).forEach(
                ( key ) => {
                    r = r || (nDatas ? cDatas[key] !== nDatas[key] : cDatas && cDatas[key])
                }
            );
            nDatas && Object.keys(nDatas).forEach(
                ( key ) => {
                    r = r || (nDatas ? cDatas[key] !== nDatas[key] : cDatas && cDatas[key])
                }
            );
        }

        return !!r;
    }

    /**
     * Overridable refiner / remapper
     * If state or lastPublicState are simple hash maps refine will return {...datas, ...state}
     * if not it will return the last private state
     * @param datas
     * @param state
     * @returns {*}
     */
    refine( datas, state, changes ) {
        state = state || this.state;

        if ( !datas || datas.__proto__ !== objProto || state.__proto__ !== objProto )
            return state;
        else
            return {...datas, ...state}
    }

    /**
     * Debounce this store propagation ( & reducing )
     * @param cb
     */
    stabilize( cb ) {
        var me = this;
        cb && me.once('stable', cb);
        this._stable && this.emit('unstable', this.state, this.datas);

        me._stable = false;

        if ( this._stabilizer )
            clearTimeout(this._stabilizer);

        this._stabilizer = setTimeout(
            this.push.bind(
                this,
                null,
                () => {//@todo
                    // me._stable       = true;
                    this._stabilizer = null;
                    // this.release();
                }
            ));
    }

    dispatch( event ) {
        return;
    }

    /**
     * Pull stores in the private state
     * @param stores  {Array} (passed to Store::map) Ex : ["session", "otherNamedStore:key", otherStore.as("otherKey")]
     */
    pull( stores, doWait, origin ) {
        let initialOutputs = Store.map(this, stores, this.contextObj, origin, true);
        if ( doWait ) {
            this.wait();
            stores.forEach(( s ) => this.context[s] && this.wait(this.context[s]));
            this.release();
        }
        return initialOutputs;
    }

    /**
     * Apply refine/remap on the private state & push the resulting "public" state to followers
     * @param cb
     */
    push( datas, force, cb ) {
        cb            = force === true ? cb : force;
        force         = force === true;
        var i         = 0,
            me        = this,
            nextState = !datas && {...this.state, ...this._changesSW} || this.state,
            nextDatas = datas ||
                (this.isComplete(nextState) ? this.refine(this.datas, nextState, this._changesSW) : this.datas);


        this.state = nextState;
        if ( !force &&
            (
                (!this.datas && this.datas === nextDatas) || !this.shouldPropag(nextDatas)
            )
        ) {
            cb && cb();
            return false;
        }

        this.datas = nextDatas;
        this.locks++;
        this.release(cb);

    }

    /**
     * Update the current private state & push it once the store is stable
     * @param pState
     * @param cb
     */
    setState( pState, cb, sync ) {
        var i       = 0, change,
            changes = this._changesSW = this._changesSW || {};
        for ( var k in pState )
            if ( !this.state || pState.hasOwnProperty(k)
                && (
                    pState[k] != this.state[k]
                    ||
                    (this.state[k] && pState[k] && (pState[k]._rev != this._revs[k]))// rev/hash update
                ) ) {
                change        = true;
                this._revs[k] = pState[k] && pState[k]._rev || true;
                changes[k]    = pState[k];
            }

        if ( sync ) {
            this.push();
            cb && cb();

        } else {
            if ( change ) {
                this.stabilize(cb);
            } else cb && cb();
        }
        return this;
    }

    /**
     * Update the current private state & push it once the store is stable
     * @param pState
     * @param cb
     */
    setStateSync( pState ) {
        var i       = 0, change,
            changes = this._changesSW = this._changesSW || {};
        for ( var k in pState )
            if ( !this.state || pState.hasOwnProperty(k)
                && (
                    pState[k] != this.state[k]
                    ||
                    (this.state[k] && pState[k] && (pState[k]._rev != this._revs[k]))// rev/hash update
                ) ) {
                change        = true;
                this._revs[k] = pState[k] && pState[k]._rev || true;
                changes[k]    = pState[k];
            }
        this.push();
        return this.datas;
    }

    /**
     * Replace the current private state & push it once the store is stable
     * @param pState
     * @param cb
     */
    replaceState( pState, cb ) {
        var i      = 0, me = this;
        this.state = pState;

        this.stabilize(cb);
    }

    /**
     * get a store-key pair for Store::map
     * @param {string} name
     * @returns {{store: Store, name: *}}
     */
    as( name ) {
        return {store : this, name};
    }

    on( lists ) {
        if ( !isString(lists) && lists )
            Object.keys(lists).forEach(k => super.on(k, lists[k]));
        else super.on(...arguments);
    }

    removeListener( lists ) {
        if ( !isString(lists) && lists )
            Object.keys(lists).forEach(k => super.removeListener(k, lists[k]));
        else super.removeListener(...arguments);
    }

    /**
     * relink bindings & requires
     * @param {string} name
     * @returns {{store: Store, name: *}}
     */
    relink( from ) {
        let context = this.contextObj,
            _static = this.constructor;
        if ( _static.use ) {
            //todo unlink
            this.pull(_static.use, false, from);
        }

        if ( this._require ) {
            this._require.forEach(
                store => (
                    this.wait(context.__context[store])
                )
            );
        }
    }

    /**
     * is complete (all requiered keys are here)
     * @returns bool
     */
    isComplete( state = this.state ) {
        var _static = this.constructor;
        return (
            !this._require
            || !this._require.length
            || state && this._require.reduce(
                ( r, key ) => (r && state[key]),
                true
            )
        );
    }

    /**
     * is stable
     * @returns bool
     */
    isStable() {
        return this._stable;
    }

    /**
     * Un bind this store off the given component-key
     * @param obj
     * @param key
     * @returns {Array.<*>}
     */
    unBind( obj, key ) {
        var followers = this._followers,
            i         = followers && followers.length;
        while (followers && i--)
            if ( followers[i][0] == obj && followers[i][1] == key )
                return followers.splice(i, 1);
    }

    /**
     * Bind this store changes to the given component-key
     * @param obj {React.Component|Store|function)
     * @param key {string} optional key where to map the public state
     */
    bind( obj, key, setInitial = true ) {
        this._followers.push([obj, key]);
        if ( setInitial && this.datas && this._stable ) {
            if ( typeof obj != "function" ) {
                if ( key ) obj.setState({[key] : this.datas});
                else obj.setState(this.datas);
            } else {
                obj(this.datas);
            }
        }
    }

    /**
     * once('stable', cb)
     * @param obj {React.Component|Store|function)
     * @param key {string} optional key where to map the public state
     */
    then( cb ) {
        if ( this._stable )
            return cb(null, this.datas);
        this.once('stable', e => cb(null, this.datas));
    }

    /**
     * Add a lock so the store will not propag it state untill release() is call
     * @param previous {Store|number|Array} @optional wf to wait, releases to wait or array of stuff to wait
     * @returns {TaskFlow}
     */
    wait( previous ) {
        if ( typeof previous == "number" )
            return this.locks += previous;
        if ( isArray(previous) )
            return previous.map(this.wait.bind(this));

        this._stable && this.emit('unstable', this.state, this.datas);
        this._stable = false;
        this.locks++;
        if ( previous && isFunction(previous.then) ) {
            previous.then(this.release.bind(this, null));
        }
        return this;
    }

    /**
     * Decrease locks for this store, if it reach 0 & it have a public state,
     * it will be propagated to the followers,
     * then, all stuff passed to "then" call back will be exec / released
     * @param desync
     * @returns {*}
     */
    release( cb ) {
        var _static = this.constructor;
        let i       = 0;

     //   if (this.locks == 0)
       //     throw new Error("Release more than locking !");



        if ( !--this.locks && this.datas && this.isComplete() ) {
            this._stable = true;


            this._rev = 1 + (this._rev + 1) % 1000000;//
            if ( this._followers.length )
                this._followers.forEach(( follower ) => {
                    if ( !this.datas ) return;
                    if ( typeof follower[0] == "function" ) {
                        follower[0](this.datas);
                    } else {
                        // cb && i++;
                        follower[0].setState(
                            (follower[1]) ?
                            {[follower[1]] : this.datas}
                                :
                            this.datas
                            // ,
                            // cb && (
                            //     () => (!(--i) && cb())
                            // )
                        );
                    }
                });

            this.emit('stable', this.datas);
            this.emit('update', this.datas);
            cb && cb()
        } else cb && this.then(cb);
        return this;
    }

    retain( reason ) {
    //    console.log("retain", this._uid, reason);
        this.__retainLocks.all++;
        if ( reason ) {
            this.__retainLocks[reason] = this.__retainLocks[reason] || 0;
            this.__retainLocks[reason]++;
        }
    }

    dispose( reason ) {
        //console.log("dispose", this._uid, reason);
       // if (this.__retainLocks.all == 0)
         //   throw new Error("Dispose more than retaining ! : "+reason);
        this.__retainLocks.all--;
        if ( reason ) {
            this.__retainLocks[reason] = this.__retainLocks[reason] || 0;
            this.__retainLocks[reason]--;
        }
        if ( !this.__retainLocks.all ) {
            if ( this._persistenceTm ) {
                this._destroyTM && clearTimeout(this._destroyTM);
                this._destroyTM = setTimeout(
                    e => {
                        this.then(s => {
                          //  console.log("wtf   ", reason, !this.__retainLocks.all);

                            !this.__retainLocks.all && this.destroy()
                        });
                    },
                    this._persistenceTm
                );
            } else {
                this.then(s => (!this.__retainLocks.all && this.destroy()));
            }
        }
    }

    destroy() {
      //  console.log("destroy", this._uid);

        this.emit('destroy', this);
        if ( this._stabilizer )
            clearTimeout(this._stabilizer);
        this._followers.length = 0;
        this.dead              = true;
        this._revs             = this.datas = this.state = this.context = null;
        this.removeAllListeners();
    }
}