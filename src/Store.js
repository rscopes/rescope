/**
 * Ultra scalable state-aware store
 *
 * @todo : optims? bugs?
 */

var isString     = require('isstring')
    , isArray    = require('isarray')
    , isFunction = require('isfunction')
    ,
    EventEmitter = require('events'),
    objProto     = Object.getPrototypeOf({});


export default class Store extends EventEmitter {

    static use    = [];// overridable list of source stores
    static follow = [];// overridable list of store that will allow push if updated
    static staticContext  = {};
    static defaultMaxListeners = 20;

    /**
     * Map all nammed stores in {keys} to the {object}'s state
     * Hook componentWillUnmount (for react comp) or destroy to unBind them automatically
     * @static
     * @param object {React.Component|Store|...} target state aware object
     * @param keys {Array} Ex : ["session", "otherStaticNamedStore:key", store.as('anotherKey')]
     */
    static map( component, keys, context, origin ) {
        var targetRevs    = component._revs || {};
        var targetContext = component.stores || {};
        keys              = isArray(keys) ? [...keys] : [keys];

        context        = context || Store.staticContext;
        keys           = keys.filter(
            ( key ) => {

                if ( key.store && key.name ) {
                    if ( targetRevs[key.name] ) return false;// no dbl binds
                    key.store.bind(component, key.name);
                    targetRevs[key.name]    = targetRevs[key.name] || true;
                    targetContext[key.name] = targetContext[key.name] || key.store;
                } else if ( isString(key) ) {
                    key = key.split(':');
                    if ( targetRevs[key[1] || key[0]] ) return false;// no dbl binds
                    if ( isFunction(context[key[0]]) ) {
                        context[key[0]] = new context[key[0]](context);
                        if ( context[key[0]].constructor.use ) {
                            context[key[0]].pull(context[key[0]].constructor.use, key[0]);
                        }
                    }
                    if ( !context[key[0]] ) {
                        console.error("Not a mappable store item '" + key[0] + "' in " + origin + ' !!');
                    }
                    context[key[0]]
                    && context[key[0]].bind
                    && context[key[0]].bind(component, key[1] || key[0]);
                    targetRevs[key[1] || key[0]]    = targetRevs[key[1] || key[0]] || true;
                    targetContext[key[1] || key[0]] = targetContext[key[1] || key[0]] || context[key[0]];
                } else {
                    console.error("Not a mappable store item '" + key + "' in " + origin + ' !!');
                }

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
                    if ( key.store && key.name ) {
                        key.store.unBind(component, key.name);
                    } else {
                        key = key.split(':');
                        context[key[0]]
                        && context[key[0]].unBind(component, key[1] || key[0]);
                    }
                }
            );
            return this[unMountKey] && this[unMountKey].apply(this, arguments);
        }
    }

    /**
     * Constructor, will build a store/refiner/reducer
     *
     * (context, keys, name)
     * (context, name)
     * (context)
     *
     * @param context {object} context where to find the other stores
     * @param keys {Array} (passed to Store::map) Ex : ["session", "otherNamedStore:key", otherStore.as("otherKey")]
     */
    constructor() {
        super();
        var argz    = [...arguments],
            _static = this.constructor,
            context = !isArray(argz[0]) && !isString(argz[0]) ? argz.shift() : _static.staticContext,
            watchs  = isArray(argz[0]) ? argz.shift() : [],// watchs need to be defined after all the store are registered : so we can't deal with any "static use" automaticly
            name    = isString(argz[0]) ? argz[0] : _static.name;
        this.setMaxListeners(Store.defaultMaxListeners);
        this.locks        = 0;
        this._onStabilize = [];

        if ( isString(argz[0]) ) {
            if ( context[name] )
                console.warn("TorrentStore: Overwriting an existing static named store ( %s ) !!", name);
            context[name] = this;
        }

        this._state = {};
        this._watchs    = watchs;
        this.name       = name;
        this.context    = context;
        this._stable    = true;
        this._rev       = 1;
        this._revs      = {};
        this.stores     = {};
        this._followers = [];
        if ( !!this._watchs ) {// if there initial watchs anyway
            this.pull(this._watchs);
        }

    }

    /**
     * get a store-key pair for Store::map
     * @param {string} name
     * @returns {{store: Store, name: *}}
     */
    as( name ) {
        return {store : this, name};
    }

    /**
     * get a comparable value
     * @param {string} name
     * @returns {{store: Store, name: *}}
     */
    toValue() {
        return this.toString();
    }

    toString() {
        return this.name + "[" + this._rev + "]";
    }

    /**
     * Un bind this store off the given component-key
     * @param obj
     * @param key
     * @returns {Array.<*>}
     */
    unBind( obj, key ) {
        var followers = this._followers,
            i         = this._followers.length;
        while (i--)
            if ( followers[i][0] == obj && followers[i][1] == key )
                return followers.splice(i, 1);
    }

    /**
     * Bind this store changes to the given component-key
     * @param obj {React.Component|Store|function)
     * @param key {string} optional key where to map the public state
     */
    bind( obj, key ) {
        this._followers.push([obj, key]);
        if ( this.state && this._stable ) {
            if ( typeof obj != "function" ) {
                if ( key ) obj.setState({[key] : this.state});
                else obj.setState(this.state);
            } else {
                obj(this.state);
            }
        }
    }

    /**
     * once('stable', cb)
     * @param obj {React.Component|Store|function)
     * @param key {string} optional key where to map the public state
     */
    then( cb ) {
        this.once('stable', cb);
    }

    /**
     * Overridable method to know if a state change should be propag to the listening stores & components
     * If static follow is defined, shouldPropag will return true if any of the "follow" keys was updated
     * If not it will always return true
     */
    shouldPropag( ns ) {
        var _static = this.constructor, r,
            cState  = this.state;

        // if ( !cState )
        //     return true;
        if ( !cState && (!_static.follow || !_static.follow.length || _static.follow && _static.follow.reduce(( r, i ) => (r || ns[i]), false)) )
            return true;

        _static.follow && _static.follow.forEach(
            ( key ) => {
                r = r || (cState[key] !== ns[key])
            }
        );

        return !_static.follow || !_static.follow.length || !!r;
    }

    /**
     * Overridable refiner / remapper
     * If privateState or lastPublicState are simple hash maps refine will return {...lastPublicState, ...privateState}
     * if not it will return the last private state
     * @param lastPublicState
     * @param privateState
     * @returns {*}
     */
    refine( lastPublicState, privateState ) {
        privateState = privateState || this._state;
        if ( !lastPublicState || lastPublicState.__proto__ !== objProto || privateState.__proto__ !== objProto )
            return privateState;
        else
            return {...lastPublicState, ...privateState}
    }

    /**
     * Debounce this store propagation ( & reducing )
     * @param cb
     */
    stabilize( cb ) {
        var me = this;
        cb && me.once('stable', cb);
        me._stable = false;

        if ( this._stabilizer )
            clearTimeout(this._stabilizer);

        this._stabilizer = setTimeout(
            this.push.bind(
                this,
                null,
                () => {//@todo
                    me._stable       = true;
                    this._stabilizer = null;
                    // this.release();
                }
            ));
    }


    /**
     * Pull stores in the private state
     * @param stores  {Array} (passed to Store::map) Ex : ["session", "otherNamedStore:key", otherStore.as("otherKey")]
     */
    pull( stores, origin ) {
        return Store.map(this, stores, this.context, origin);
    }

    /**
     * Apply refine/remap on the private state & push the resulting "public" state to followers
     * @param cb
     */
    push( state, force, cb ) {
        cb         = force === true ? cb : force;
        var i      = 0,
            me     = this,
            nState = state || this.refine(this.state, this._state);


        if ( !force && !this.shouldPropag(nState) ) {
            cb && cb();
            return false;
        }

        this.state = nState;
        this.locks++;
        this.release(cb);

    }

    /**
     * Update the current private state & push it once the store is stable
     * @param pState
     * @param cb
     */
    setState( pState, cb ) {
        var i = 0, me = this, change;
        for ( var k in pState )
            if ( pState.hasOwnProperty(k)
                && (
                    pState[k] != this._state[k]
                    ||
                    (this._state[k] && pState[k] && (pState[k]._rev != this._revs[k]))// rev/hash update
                ) ) {
                change         = true;
                this._revs[k]  = pState[k] && pState[k]._rev || true;
                this._state[k] = pState[k];
            }
        if ( change ) {
            this.stabilize(cb);
        } else cb && cb();
        return this;
    }

    /**
     * Replace the current private state & push it once the store is stable
     * @param pState
     * @param cb
     */
    replaceState( pState, cb ) {
        var i       = 0, me = this;
        this._state = pState;

        this.stabilize(cb);
    }

    /**
     * Add a lock so the store will not propag it state untill release() is call
     * @param previous {Taskflow|number|Array} @optional wf to wait, releases to wait or array of stuff to wait
     * @returns {TaskFlow}
     */
    wait( previous ) {
        if ( typeof previous == "number" )
            return this.locks += previous;
        if ( isArray(previous) )
            return previous.map(this.wait.bind(this));
        // if ( previous && previous.then )
        //     return previous.then(this.release.bind(this));

        this.locks++;
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
        var me = this, i = 0;
        // if ( desync && this.locks > 0 ) return setTimeout(this.success) && this;
        var tmp;

        if ( !--this.locks && this.state ) {
            this._complete = true;


            this._rev = 1 + (this._rev + 1) % 1000000;//
            if ( this._followers.length )
                this._followers.forEach(( follower ) => {
                    if ( !me.state ) return;
                    if ( typeof follower[0] == "function" ) {
                        follower[0](me.state);
                    } else {
                        cb && i++;
                        follower[0].setState(
                            (follower[1]) ?
                            {[follower[1]] : me.state}
                                :
                            me.state,
                            cb && (
                                () => (!(--i) && cb())
                            )
                        );
                    }
                });

            me.emit('stable', this.state);
            !i && cb && cb()
        } else cb && this.then(cb)
        return this;
    }

    destroy() {

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
        this._followers = null;
        this.dead       = true;
        if ( this.name && this.context[this.name] === this )
            delete this.context[this.name];
        this._revs = this.state = this._state = this.context = null;
    }
}