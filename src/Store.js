/*
 * Copyright (c)  2017 Caipi Labs .
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 * @author : Nathanael Braun
 * @contact : caipilabs@gmail.com
 */

/**
 * Ultra scalable state-aware store
 *
 * @todo : lot of optims...
 */

var is           = require('is'),
    Context      = require('./Context'),
    EventEmitter = require('events'),
    shortid      = require('shortid'),
    objProto     = Object.getPrototypeOf({}),
    openContexts = {};


export default class Store extends EventEmitter {
    
    static use                        = [];// overridable list of source stores
    static follow;// overridable list of store that will allow push if updated
    static require;
    static staticContext              = new Context({}, { id: "static" });
    static initialState               = undefined;// default state @depreciated
    static state                      = undefined;// default state
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
     * (context, {require,use,apply,state, datas})
     * (context)
     *
     * @param context {object} context where to find the other stores (default : static staticContext )
     * @param keys {Array} (passed to Store::map) Ex : ["session", "otherNamedStore:key", otherStore.as("otherKey")]
     */
    constructor() {
        super();
        var argz         = [...arguments],
            _static      = this.constructor,
            context      = !is.array(argz[0]) && !is.string(argz[0]) ? argz.shift() : _static.staticContext,
            cfg          = argz[0] && !is.array(argz[0]) && !is.string(argz[0]) ? argz.shift() : {},
            name         = is.string(argz[0]) ? argz[0] : cfg.name || _static.name,
            watchs       = is.array(argz[0]) ? argz.shift() : cfg.use || [],// watchs need to be defined after all the
                                                                            // store are registered : so we can't deal
                                                                            // with any "static use" automaticly
            apply        = is.fn(argz[0]) ? argz.shift() : cfg.apply || null,
            initialState = _static.state || _static.initialState;
        
        this._uid          = cfg._uid || shortid.generate();
        this._maxListeners = cfg.defaultMaxListeners || Store.defaultMaxListeners;
        
        this.__retains    = { all: 0 };
        this.__locks      = { all: 0 };
        this._onStabilize = [];
        
        this._persistenceTm = cfg.persistenceTm || this.constructor.persistenceTm;
        if ( is.string(argz[0]) ) {
            if ( context.__context[name] )
                console.warn("ReScope: Overwriting an existing static named store ( %s ) !!", name);
            context.__context[name] = this;
        }
        
        if ( cfg && cfg.on ) {
            this.on(cfg.on);
        }
        // this.state      = this.state || {};
        
        this._use = [...watchs, ...(_static.use || [])];
        this.name = name;
        
        if ( context.stores ) {
            this.contextObj = context;
            this.context    = context.stores;
        }
        else {
            this.contextObj = new Context(context);
            this.context    = context.stores;
        }
        
        
        this._stable  = true;
        this._rev     = 1;
        this._revs    = {};
        this.stores   = {};
        this._require = [];
        
        if ( _static.require )
            this._require.push(..._static.require);
        if ( cfg.require )
            this._require.push(...cfg.require);
        
        this._followers = [];
        
        if ( _static.datas !== undefined )
            this.datas = { ..._static.datas };
        if ( cfg.hasOwnProperty("datas") && cfg.datas !== undefined )
            this.datas = cfg.datas;
        if ( cfg.hasOwnProperty("state") && cfg.state !== undefined )
            initialState = { ...initialState, ...cfg.state };
        
        if ( apply )
            this.apply = apply;
        
        
        if ( initialState || this._use.length ) {// sync apply
            this.state = {
                ...(initialState || {}),
                ...context.map(this, this._use)
            };
            if ( this.isComplete() && this.datas === undefined )
                this.datas = this.apply(this.datas, this.state, this.state);
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
        return { store: this, name };
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
        var targetContext  = component.stores || (component.stores = {});
        var initialOutputs = {};
        keys               = is.array(keys) ? [...keys] : [keys];
        
        
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
                }
                else if ( is.fn(key) ) {
                    name = alias = key.name || key.defaultName;
                    store = key;
                }
                else {
                    key   = key.match(/([\w_]+)(?:\:\[(\*)\])?(?:\:(\*))?/);
                    name  = key[0];
                    store = context.stores[key[0]];
                    alias = key[1] == '*' ? null : key[2] || key[0];// allow binding props  ([*])
                }
                
                if ( targetRevs[name] ) return false;// ignore dbl uses for now
                if ( !store ) {
                    console.error("Not a mappable store item '" + name + "/" + alias + "' in " + origin + ' !!', store);
                    return false;
                }
                else if ( is.fn(store) ) {
                    context._mount(name)
                    
                    context.stores[name].bind(component, alias, setInitial);
                    // if ( context.__context[key[0]].state ) {// do sync push after constructor
                    //     context.__context[key[0]].push();
                    // }
                }
                else {
                    store.bind(component, alias, setInitial);
                }
                targetRevs[alias] = targetRevs[alias] || true;
                !targetContext[name] && (targetContext[name] = context.stores[name]);
                if ( context.stores[name].hasOwnProperty('datas') )
                    initialOutputs[name] = context.datas[name];
                return true;
            }
        );
        var mixedCWUnmount,
            unMountKey = component.isReactComponent ? "componentWillUnmount" : "destroy";
        
        if ( component.hasOwnProperty(unMountKey) ) {
            mixedCWUnmount = component[unMountKey];
        }
    
        component[unMountKey] = (...argz) => {
            delete component[unMountKey];
            if ( mixedCWUnmount )
                component[unMountKey] = mixedCWUnmount;
    
            keys.map(
                ( key ) => {
                    let name,
                        alias,
                        store;
                    if ( key.store && key.name ) {
                        alias = name = key.name;
                        store = key.store;
                    }
                    else if ( is.fn(key) ) {
                        name = alias = key.name || key.defaultName;
                        store = context.stores[name];
                    }
                    else {
                        key   = key.split(':');
                        name  = key[0];
                        store = context.stores[key[0]];
                        alias = key[1] || key[0];
                    }
            
                    store && !is.fn(store) && store.unBind(component, alias)
                }
            );
            return component[unMountKey] && component[unMountKey](...argz);
        }
        
        return initialOutputs;
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
        
        if ( is.array(_static.follow) )
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
     * Overridable applier / remapper
     * If state or lastPublicState are simple hash maps apply will return {...datas, ...state}
     * if not it will return the last private state
     * @param datas
     * @param state
     * @returns {*}
     */
    apply( datas, state, changes ) {
        state = state || this.state;
        
        if ( this.refine )
            return this.refine(...arguments);
        
        if ( !datas || datas.__proto__ !== objProto || state.__proto__ !== objProto )
            return state;
        else
            return { ...datas, ...state }
    }
    
    /**
     * @depreciated
     * @param datas
     * @param state
     * @param changes
     * @returns {*}
     */
    refine( datas, state, changes ) {
        state = state || this.state;
        
        if ( !datas || datas.__proto__ !== objProto || state.__proto__ !== objProto )
            return state;
        else
            return { ...datas, ...state }
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
        let initialOutputs = this.contextObj.map(this, stores);
        if ( doWait ) {
            this.wait();
            stores.forEach(( s ) => this.context[s] && this.wait(this.context[s]));
            this.release();
        }
        return initialOutputs;
    }
    
    /**
     * Apply apply/remap on the private state & push the resulting "public" state to followers
     * @param cb
     */
    push( datas, force, cb ) {
        cb            = force === true ? cb : force;
        force         = force === true;
        var i         = 0,
            me        = this,
            nextState = !datas && { ...this.state, ...this._changesSW } || this.state,
            nextDatas = datas ||
                (this.isComplete(nextState) ? this.apply(this.datas, nextState, this._changesSW) : this.datas);
        
        
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
        this.__locks.all++;
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
            
        }
        else {
            if ( change ) {
                this.stabilize(cb);
            }
            else cb && cb();
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
        return { store: this, name };
    }
    
    on( lists ) {
        if ( !is.string(lists) && lists )
            Object.keys(lists).forEach(k => super.on(k, lists[k]));
        else super.on(...arguments);
    }
    
    removeListener( lists ) {
        if ( !is.string(lists) && lists )
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
        while ( followers && i-- )
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
                if ( key ) obj.setState({ [key]: this.datas });
                else obj.setState(this.datas);
            }
            else {
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
            return this.__locks.all += previous;
        if ( is.array(previous) )
            return previous.map(this.wait.bind(this));
        
        this._stable && this.emit('unstable', this.state, this.datas);
        this._stable = false;
        this.__locks.all++;
        
        let reason = is.string(previous) ? previous : null;
        if ( reason ) {
            this.__locks[reason] = this.__locks[reason] || 0;
            this.__locks[reason]++;
        }
        if ( previous && is.fn(previous.then) ) {
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
    release( reason, cb ) {
        var _static = this.constructor;
        let i       = 0, wasStable = this._stable;
        
        if ( is.fn(reason) ) {
            cb     = reason;
            reason = null;
        }
        
        if ( reason ) {
            if ( this.__locks[reason] == 0 )
                console.error("Release more than locking !", reason);
            this.__locks[reason] = this.__locks[reason] || 0;
            this.__locks[reason]--;
        }
        
        if ( !reason && this.__locks.all == 0 )
            console.error("Release more than locking !");
        
        if ( !--this.__locks.all && this.datas && this.isComplete() ) {
            this._stable = true;
            this._rev    = 1 + (this._rev + 1) % 1000000;//
            if ( this._followers.length )
                this._followers.forEach(( follower ) => {
                    if ( !this.datas ) return;
                    if ( typeof follower[0] == "function" ) {
                        follower[0](this.datas);
                    }
                    else {
                        //cb && i++;
                        follower[0].setState(
                            (follower[1]) ? { [follower[1]]: this.datas }
                                : this.datas
                            //,
                            //cb && (
                            //    () => (!(--i) && cb())
                            //)
                        );
                    }
                });
            //else
            !wasStable && this.emit('stable', this.datas);
            this.emit('update', this.datas);
            cb && cb()
            //
        }
        else cb && this.then(cb);
        return this;
    }
    
    retain( reason ) {
        this.__retains.all++;
        if ( reason ) {
            this.__retains[reason] = this.__retains[reason] || 0;
            this.__retains[reason]++;
        }
    }
    
    dispose( reason ) {
        //console.warn("dispose", reason, this.__retains);
        if ( reason ) {
            
            if ( !this.__retains[reason] )
                throw new Error("Dispose more than retaining !");
            
            this.__retains[reason] = this.__retains[reason] || 0;
            this.__retains[reason]--;
        }
        if ( this.__retains.all == 0 )
            throw new Error("Dispose more than retaining !");
        
        this.__retains.all--;
        
        //console.warn("disposed", reason, this.__retains);
        
        if ( !this.__retains.all ) {
            if ( this._persistenceTm ) {
                this._destroyTM && clearTimeout(this._destroyTM);
                this._destroyTM = setTimeout(
                    e => {
                        this.then(s => {
                            //  console.log("wtf   ", reason, !this.__retains.all);
                            
                            !this.__retains.all && this.destroy()
                        });
                    },
                    this._persistenceTm
                );
            }
            else {
                this.then(s => (!this.__retains.all && this.destroy()));
            }
        }
    }
    
    destroy() {
        //  console.log("destroy", this._uid);
        
        this.emit('destroy', this);
        if ( this._stabilizer )
            clearTimeout(this._stabilizer);
        
        if ( this._followers.length )
            this._followers.forEach(
                ( follower ) => {
                    if ( typeof follower[0] !== "function" ) {
                        if ( follower[0].stores )
                            delete follower[0].stores[follower[1]];
                    }
                }
            );
        this._followers.length = 0;
        this.dead              = true;
        this._revs             = this.datas = this.state = this.context = null;
        this.removeAllListeners();
    }
}