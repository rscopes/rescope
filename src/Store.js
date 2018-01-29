/*
 * Copyright (c)  2018 Wise Wild Web .
 *
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the "Software"), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in all
 *  copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 *  SOFTWARE.
 *
 * @author : Nathanael Braun
 * @contact : caipilabs@gmail.com
 */

/**
 * Ultra scalable state-aware store
 *
 * @todo : lot of optims...
 */

var is            = require('is'),
    Scope         = require('./Scope'),
    EventEmitter  = require('./Emitter'),
    TaskSequencer = require('./TaskSequencer'),
    shortid       = require('shortid'),
    objProto      = Object.getPrototypeOf({});

/**
 * @class Store
 */
class Store extends EventEmitter {
    
    static use                  = [];// overridable list of source stores
    static follow;// overridable list of store that will allow push if updated
    static require;
    static staticScope          = new Scope({}, { id: "static" });
    static state                = undefined;// default state
    /**
     * if retain goes to 0 :
     * false to not destroy,
     * 0 to sync auto destroy
     * Ms to autodestroy after tm ms if no retain has been called
     * @type {boolean|Int}
     */
           static persistenceTm = false;
    
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
     * @param object {Object} target state aware object (React.Component|Store|...)
     * @param keys {Array} Ex : ["session", "otherStaticNamedStore:key", store.as('anotherKey')]
     */
    static map( component, keys, scope, origin, setInitial = false ) {
        var targetRevs     = component._revs || {};
        var targetScope    = component.stores || (component.stores = {});
        var initialOutputs = {};
        keys               = is.array(keys) ? [...keys] : [keys];
        
        
        scope = scope || Store.staticScope;
        
        keys = keys.filter(
            // @todo : use query refs
            // (store)(\.store)*(\[(\*|(props)\w+)+)\])?(\:alias)
            ( key ) => {
                if ( !key ) {
                    console.error("Not a mappable store item '" + key + "' in " + origin + ' !!');
                    return false;
                }
                let name,
                    alias,
                    path,
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
                    key   = key.match(/([\w_]+)((?:\.[\w_]+)*)(?:\:([\w_]+))?/);
                    name  = key[1];
                    path  = key[2] && key[2].substr(1);
                    store = scope.stores[key[1]];
                    alias = key[3] || path && path.match(/([^\.]*)$/)[0] || key[1];
                }
                
                if ( targetRevs[name] ) return false;// ignore dbl uses for now
                
                if ( !store ) {
                    console.error("Not a mappable store item '" + name + "/" + alias + "' in " + origin + ' !!', store);
                    return false;
                }
                else if ( is.fn(store) ) {
                    scope._mount(name)
                    
                    scope.stores[name].bind(component, alias, setInitial, path);
                    
                }
                else {
                    store.bind(component, alias, setInitial, path);
                }
                
                // give initial store weight basing sources
                component._sources.push(...scope.stores[name]._sources);
                
                targetRevs[alias] = targetRevs[alias] || true;
                !targetScope[name] && (targetScope[name] = scope.stores[name]);
                if ( scope.stores[name].hasOwnProperty('data') )
                    initialOutputs[name] = scope.data[name];
                return true;
            }
        );
        
        // ...
        var mixedCWUnmount,
            unMountKey = component.isReactComponent ? "componentWillUnmount" : "destroy";
        
        if ( component.hasOwnProperty(unMountKey) ) {
            mixedCWUnmount = component[unMountKey];
        }
        
        component[unMountKey] = ( ...argz ) => {
            delete component[unMountKey];
            if ( mixedCWUnmount )
                component[unMountKey] = mixedCWUnmount;
            
            keys.map(
                ( key ) => {
                    let name,
                        alias, path,
                        store;
                    if ( key.store && key.name ) {
                        alias = name = key.name;
                        store = key.store;
                    }
                    else if ( is.fn(key) ) {
                        name = alias = key.name || key.defaultName;
                        store = scope.stores[name];
                    }
                    else {
                        key   = key.match(/([\w_]+)((?:\.[\w_]+)*)(?:\:([\w_]+))?/);
                        name  = key[1];
                        path  = key[2] && key[2].substr(1);
                        store = scope.stores[key[1]];
                        alias = key[3] || path && path.match(/([^\.]*)$/)[0] || key[1];
                    }
                    
                    store && !is.fn(store) && store.unBind(component, alias, path)
                }
            );
            return component[unMountKey] && component[unMountKey](...argz);
        }
        
        return initialOutputs;
    }
    
    /**
     * Constructor, will build a rescope store
     *
     * (scope, {require,use,apply,state, data})
     * (scope)
     *
     * @param scope {object} scope where to find the other stores (default : static staticScope )
     * @param keys {Array} (passed to Store::map) Ex : ["session", "otherNamedStore:key", otherStore.as("otherKey")]
     */
    constructor() {
        super();
        var argz         = [...arguments],
            _static      = this.constructor,
            scope        = argz[0] instanceof Scope
                ? argz.shift()
                : _static.scope ? Scope.getScope(_static.scope)
                               : is.string(argz[0])
                      ? Scope.getScope(argz.shift())
                      : _static.staticScope,
            cfg          = argz[0] && !is.array(argz[0]) && !is.string(argz[0]) ? argz.shift() : {},
            name         = is.string(argz[0]) ? argz[0] : cfg.name || _static.name,
            watchs       = is.array(argz[0]) ? argz.shift() : cfg.use || [],// watchs need to be defined after all the
                                                                            // store are registered : so we can't deal
                                                                            // with any "static use" automaticly
            apply        = is.fn(argz[0]) ? argz.shift() : cfg.apply || null,
            initialState = _static.state || _static.initialState,
            applied;
        
        this._uid = cfg._uid || shortid.generate();
        
        this.__retains    = { all: 0 };
        this.__locks      = { all: 0 };
        this._onStabilize = [];
        
        // autoDestroyTm
        this._autoDestroy   = !!this._persistenceTm;
        this._persistenceTm = cfg.persistenceTm || _static.persistenceTm || (cfg.autoDestroy || _static.autoDestroy) && 5;
        //
        //if ( is.string(argz[0]) ) {
        //    if ( scope.__scope[name] )
        //        console.warn("ReScope: Overwriting an existing static named store ( %s ) !!", name);
        //    scope.__scope[name] = this;
        //}
        
        if ( cfg && cfg.on ) {
            this.on(cfg.on);
        }
        
        this.name = name;
        
        if ( scope.stores ) {
            this.scopeObj = scope;
            this.scope    = scope.stores;
        }
        else {
            this.scopeObj = new Scope(scope);
            this.scope    = scope.stores;
        }
        
        
        this._rev     = this.constructor._rev || 0;
        this._revs    = {};
        this.stores   = {};
        this._require = [];
        this._sources = [name];
        
        if ( is.array(_static.use) ) {
            this._use = [...watchs, ...(_static.use || []).map(
                key => {
                    let ref = key.match(/^(\!?)([^\:]*)(?:\:(.*))?$/);
                    if ( ref[1] ) {
                        let ref2 = ref[2].split('.');
                        this._require.push(ref[3] || ref2[ref2.length - 1]);
                    }
                    return ref[2];
                }
            )];
        }
        else {
            this._use = [...watchs, ...(
                _static.use ? Object.keys(_static.use)
                                    .map(
                                        key => {
                                            let ref = key.match(/^(\!?)(.*)$/);
                                            ref[1] && this._require.push(_static.use[key]);
                                            return ref[2] + ((_static.use[key] === true)
                                                ? ''
                                                : ':' + _static.use[key]);
                                        }
                                    ) : []
            )];
        }
        
        if ( _static.require )
            this._require.push(..._static.require);
        if ( cfg.require )
            this._require.push(...cfg.require);
        
        this._followers = [];
        
        if ( apply )
            this.apply = apply;
        
        if ( cfg.snapshot && cfg.snapshot[this.scopeObj._id + '/' + name] ) {
            this.restore(cfg.snapshot);
            this._stable = true;
            scope.bind(this, this._use, false);
        }
        else {
            
            if ( _static.data !== undefined )
                this.data = { ..._static.data };
            if ( cfg.hasOwnProperty("data") && cfg.data !== undefined )
                this.data = cfg.data;
            if ( cfg.hasOwnProperty("state") && cfg.state !== undefined )
                initialState = { ...initialState, ...cfg.state };
            
            
            if ( initialState || this._use.length ) {// sync apply
                this.state = {
                    ...(initialState || {}),
                    ...scope.map(this, this._use)
                };
                if ( this.shouldApply(this.state) && this.data === undefined ) {
                    this.data = this.apply(this.data, this.state, this.state);
                    applied   = true;
                }
            }
        }
        if ( (this.data !== undefined || applied) && !this.__locks.all ) {
            this._stable = true;
            this._rev++;
        }
        else {
            this._stable = false;
            if ( !_static.managed && !this.state && (!this._use || !this._use.length) ) {
                console.warn("Rescope store '", this.name, "' have no initial data, state or use. It can't stabilize...");
            }
        }
        !this._stable && this.emit('unstable', this.state);
    }
    
    /**
     * @deprecated
     * @returns {*}
     */
    get contextObj() {
        return this.scopeObj;
    }
    
    /**
     * @deprecated
     * @returns {*}
     */
    get context() {
        return this.scope;
    }
    
    /**
     * @deprecated
     * @returns {*}
     */
    get datas() {
        return this.data;
    }
    
    /**
     * @deprecated
     * @returns {*}
     */
    set datas( v ) {
        //console.groupCollapsed("Rescope store : Setting datas is depreciated, use data");
        //console.log("Rescope store : Setting datas is depreciated, use data", (new Error()).stack);
        //console.groupEnd();
        
        this.data = v;
    }
    
    /**
     * Overridable method to know if a data change should be propag to the listening stores & components
     */
    shouldPropag( nDatas ) {
        
        return true;
    }
    
    hasDataChange( nDatas ) {
        var _static = this.constructor, r,
            cDatas  = this.data;
        r           = !cDatas && nDatas || cDatas !== nDatas;
        !r && cDatas && Object.keys(cDatas).forEach(
            ( key ) => {
                r = r || (nDatas ? cDatas[key] !== nDatas[key] : cDatas && cDatas[key])
            }
        );
        !r && nDatas && Object.keys(nDatas).forEach(
            ( key ) => {
                r = r || (nDatas ? cDatas[key] !== nDatas[key] : cDatas && cDatas[key])
            }
        );
        return r;
    }
    
    /**
     * Overridable method to know if a state change should be applied
     */
    shouldApply( state = this.state ) {
        var _static = this.constructor;
        
        return (
            !!this.isComplete(state)
        ) && (is.array(_static.follow)
                ? _static.follow
                         .reduce(( r, i ) => (r || state && state[i]), false)
                : _static.follow
                  ? Object.keys(_static.follow)
                          .reduce(( r, i ) => (
                              r
                              || state && is.fn(_static.follow[i]) && _static.follow[i].call(this, state[i])
                              || _static.follow[i] && state[i] !== this.state[i]
                          ), false) : true
        );
    }
    
    /**
     * Overridable applier / remapper
     * If state or lastPublicState are simple hash maps apply will return {...data, ...state}
     * if not it will return the last private state
     * @param data
     * @param state
     * @returns {*}
     */
    apply( data, state, changes ) {
        state = state || this.state;
        
        if ( this.refine )
            return this.refine(...arguments);
        
        if ( !data || data.__proto__ !== objProto || state.__proto__ !== objProto )
            return state;
        else
            return { ...data, ...state }
    }
    
    /**
     * @depreciated
     * @param data
     * @param state
     * @param changes
     * @returns {*}
     */
    refine( data, state, changes ) {
        state = state || this.state;
        
        if ( !data || data.__proto__ !== objProto || state.__proto__ !== objProto )
            return state;
        else
            return { ...data, ...state }
    }
    
    /**
     * Debounce this store propagation ( & reducing )
     * @param cb
     */
    stabilize( cb ) {
        cb && this.once('stable', cb);
        this._stable && this.emit('unstable', this.state, this.data);
        
        this._stable = false;
        
        if ( this._stabilizer )
            return;//clearTimeout(this._stabilizer);
        
        this._stabilizer = TaskSequencer.pushTask(this, 'push');
        //this._stabilizer = setTimeout(
        //    this.push.bind(
        //        this,
        //        null,
        //        () => {//@todo
        //
        //            let stable   = this._stable;
        //            this._stable = true;
        //            !stable && this.emit('stable', this.state, this.data);
        //            this._stabilizer = null;
        //            // this.release();
        //        }
        //    ));
    }
    
    retrieve( path, i = 0, obj = this.data ) {
        path = is.string(path) ? path.split('.') : path;
        return !obj || !path || !path.length
            ? obj
            : path.length == i + 1
                   ? obj[path[i]]
                   : this.retrieve(path, i + 1, obj[path[i]]);
    }
    
    dispatch( action, ...argz ) {
        this.scopeObj.dispatch(action, ...argz);
    }
    
    trigger( action, ...argz ) {
        let { actions } = this.constructor;
        if ( actions && actions[action] ) {
            let ns = actions[action].call(this, ...argz);
            ns && this.setState(ns);
        }
    }
    
    /**
     * Pull stores in the private state
     * @param stores  {Array} (passed to Store::map) Ex : ["session", "otherNamedStore:key", otherStore.as("otherKey")]
     */
    pull( stores, doWait, origin ) {
        let initialOutputs = this.scopeObj.map(this, stores);
        if ( doWait ) {
            this.wait();
            stores.forEach(( s ) => this.scope[s] && this.wait(this.scope[s]));
            this.release();
        }
        return initialOutputs;
    }
    
    /**
     * Apply apply/remap on the private state & push the resulting "public" state to followers
     * @param cb
     */
    push( data, force, cb ) {
        cb            = force === true ? cb : force;
        force         = force === true;
        var i         = 0,
            nextState = !data && { ...this.state, ...this._changesSW } || this.state,
            nextDatas = data || this.apply(this.data, nextState, this._changesSW);
        
        this._stabilizer = null;
        this.state       = nextState;
        this._changesSW  = {};
        if ( !force &&
            (
                !this.hasDataChange(nextDatas)
            )
        ) {
            cb && cb();
            if ( !this.__locks.all ) {
                let stable   = this._stable;
                this._stable = true;
                !stable && this.emit('stable', this.state, this.data);
                this._stabilizer = null;
            }
            return false;
        }
        
        //
        this.data = nextDatas;
        this.wait();
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
        
        if ( !this.shouldApply({ ...this.state, ...changes }) ) {
            return;
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
        this.shouldApply({ ...(this.state || {}), ...changes }) && this.push();
        return this.data;
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
        let scope   = this.scopeObj,
            _static = this.constructor;
        if ( _static.use ) {
            //todo unlink
            this.pull(_static.use, false, from);
        }
        
        if ( this._require ) {
            this._require.forEach(
                store => (
                    this.wait(scope.__scope[store])
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
     * is stable
     * @returns bool
     */
    serialize( output = {}, completeState ) {
        let refs                                    =
                this._use.reduce(
                    ( map, key ) => {//todo
                        let name,
                            alias, path,
                            store;
                        if ( key.store && key.name ) {
                            alias = name = key.name;
                        }
                        else if ( is.fn(key) ) {
                            name = alias = key.name || key.defaultName;
                        }
                        else {
                            key   = key.match(/([\w_]+)((?:\.[\w_]+)*)(?:\:([\w_]+))?/);
                            name  = key[1];
                            path  = key[2] && key[2].substr(1);
                            alias = key[3] || path && path.match(/([^\.]*)$/)[0] || key[1];
                        }
                    
                        if ( !this.scopeObj.stores[name].scopeObj._isLocalId )
                            map[alias] = this.scopeObj.stores[name].scopeObj._id + '/' + name;
                    
                        return map;
                    }, {}
                ) || {};
        output[this.scopeObj._id + '/' + this.name] = {
            state: completeState
                ? { ...this.state }
                : Object.keys(this.state).reduce(( h, k ) => (!refs[k] && (h[k] = this.state[k]), h), {}),
            data : this.data,
            refs
        };
        return output;
    }
    
    /**
     * is stable
     * @returns bool
     */
    restore( snapshot ) {
        let snap = snapshot[this.scopeObj._id + '/' + this.name];
        if ( snap ) {
            this.state = snap.state;
            Object.keys(snap.refs).forEach(
                ( key ) => {//todo
                    if ( snapshot[snap.refs[key]] )
                        snap.state[key] = snapshot[snap.refs[key]].data;
                    else
                        console.warn('not found : ', key, snap.refs[key])
                }
            )
            
            this.data = snap.data;
        }
    }
    
    /**
     * Un bind this store off the given component-key
     * @param obj
     * @param key
     * @returns {Array.<*>}
     */
    unBind( obj, key, path ) {
        var followers = this._followers,
            i         = followers && followers.length;
        while ( followers && i-- )
            if ( followers[i][0] === obj && followers[i][1] === key && followers[i][2] === path )
                return followers.splice(i, 1);
    }
    
    /**
     * Bind this store changes to the given component-key
     * @param obj {React.Component|Store|function)
     * @param key {string} optional key where to map the public state
     */
    bind( obj, key, setInitial = true, path ) {
        this._followers.push([obj, key, path]);
        if ( setInitial && this.data && this._stable ) {
            let data = path ? this.retrieve(path) : this.data;
            if ( typeof obj != "function" ) {
                if ( key ) obj.setState({ [key]: data });
                else obj.setState(data);
            }
            else {
                obj(data);
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
            return cb(null, this.data);
        this.once('stable', e => cb(null, this.data));
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
        
        this._stable && this.emit('unstable', this.state, this.data);
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
        var _static = this.constructor, me = this;
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
        
        if ( !--this.__locks.all && this.isComplete() ) {
            let propag   = this.shouldPropag(this.data);
            this._stable = true;
            propag && this._rev++;//
            if ( propag && this._followers.length )
                this._followers.forEach(function propag( follower ) {
                    let data = follower[2] ? me.retrieve(follower[2]) : me.data;
                    //if ( !data ) return;
                    
                    if ( typeof follower[0] == "function" ) {
                        follower[0](data);
                    }
                    else {
                        //cb && i++;
                        follower[0].setState(
                            (follower[1]) ? { [follower[1]]: data }
                                : data
                            //,
                            //cb && (
                            //    () => (!(--i) && cb())
                            //)
                        );
                    }
                });
            //else
            !wasStable && this.emit('stable', this.data);
            propag && this.emit('update', this.data);
            cb && cb()
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
                throw new Error("Dispose more than retaining : " + reason);
            
            this.__retains[reason]--;
        }
        if ( this.__retains.all == 0 )
            throw new Error("Dispose more than retaining !");
        
        this.__retains.all--;
        
        if ( !this.__retains.all ) {
            if ( this._persistenceTm ) {
                this._destroyTM && clearTimeout(this._destroyTM);
                this._destroyTM = setTimeout(
                    e => {
                        this._destroyTM = null;
                        this.then(s => {
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
        this.constructor._rev  = this.rev;
        this.dead              = true;
        this._revs             = this.data = this.state = this.scope = null;
        this.removeAllListeners();
    }
}


Store.Seed = class SeedStore extends Store {
    static SEED = true;
}

export default Store;