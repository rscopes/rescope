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
 * @author Nathanael BRAUN
 *
 * Date: 13/08/2017
 * Time: 17:15
 */


var is              = require('is'),
    EventEmitter    = require('events'),
    shortid         = require('shortid')
    , __proto__push = ( target, id, parent ) => {
    let here           = {
        [id]: function () {
        }
    };
    here[id].prototype = parent ? new parent["_" + id]() : target[id] || {};
    target[id]         = new here[id]();
    target['_' + id]   = here[id];
},
    openContexts    = {};


export default class Context extends EventEmitter {
    static defaultMaxListeners = 100;
    static persistenceTm       = 0;// if > 0, will wait 'persistenceTm' ms before destroy when dispose reach 0
    static Store               = null;
    static contexts            = openContexts;// all active contexts
    
    static getContext( contexts ) {
        let skey = is.array(contexts) ? contexts.sort(( a, b ) => {
            if ( a.firstname < b.firstname ) return -1;
            if ( a.firstname > b.firstname ) return 1;
            return 0;
        }).join('::') : contexts;
        return openContexts[skey] = openContexts[skey] || new Context({}, { id: skey });
    };
    
    /**
     * Init a Rescope context
     *
     * @param storesMap {Object} Object with the origin stores
     * @param id {string} @optional id ( if this id exist storesMap will be merge on the 'id' context)
     * @param parent
     * @param state
     * @param datas
     * @param name
     * @param defaultMaxListeners
     * @param persistenceTm {number) if > 0, will wait 'persistenceTm' ms before destroy when dispose reach 0
     * @param autoDestroy  {bool} will trigger retain & dispose after start
     * @returns {Context}
     */
    constructor( storesMap, { id, parent, state, datas, name, defaultMaxListeners, persistenceTm, autoDestroy } = {} ) {
        super();
        
        this._maxListeners = defaultMaxListeners || this.constructor.defaultMaxListeners;
        this._id           = id = id || ("_____" + shortid.generate());
        
        if ( openContexts[id] ) {
            openContexts[id].register(storesMap);
            return openContexts[id]
        }
        
        openContexts[id]    = this;
        this._isLocalId     = true;
        this._persistenceTm = persistenceTm || this.constructor.persistenceTm;
        
        this.stores = {};
        this.state  = {};
        this.datas  = {};
        __proto__push(this, 'stores', parent);
        __proto__push(this, 'state', parent);
        __proto__push(this, 'datas', parent);
        this.parent = parent;
        
        if ( parent ) {
            parent._addChild(this);
            
        }
        
        this.sources        = [];
        this._childContexts = [];
        
        this.__retains   = { all: 0 };
        this.__locks     = { all: 1 };
        this.__listening = {};
        this.__context   = {};
        this.__mixed     = [];
        this.__mixedList = [];
        this._followers  = [];
        if ( parent ) {
            parent.retain("isMyParent");
            !parent._stable && this.wait("waitingParent");
            parent.on(this.__parentList = {
                'stable'  : s => this.release("waitingParent"),
                'unstable': s => this.wait("waitingParent"),
                'update'  : s => this._propag()
            });
            // this.register(parent.__context, state, datas);
        }
        
        
        this.register(storesMap, state, datas);
        this.__locks.all--;
        this._stable = !this.__locks.all;
        
        if ( autoDestroy )
            setTimeout(
                tm => {
                    this.retain("autoDestroy");
                    this.dispose("autoDestroy");
                }
            )
    }
    
    /**
     *
     * Mount the stores in storesList, in this context or in its parents or mixed contexts
     *
     * @param storesList {string|storeRef} Store name, Array of Store names, or Rescope store ref from Store::as or
     *     Store:as
     * @param state
     * @param datas
     * @returns {Context}
     */
    mount( storesList, state, datas ) {
        if ( is.array(storesList) ) {
            storesList.forEach(k => this._mount(k, state && state[k], datas && datas[k]));
        }
        else {
            this._mount(...arguments);
        }
        return this;
    }
    
    _mount( id, state, datas ) {
        if ( typeof id !== 'string' ) {
            this.register({ [id.name]: id.store });
            id = id.name;
        }
        
        if ( !this.__context[id] ) {//ask mixed || parent
            if ( this.__mixed.reduce(( mounted, ctx ) => (mounted || ctx._mount(id, state, datas)), false) ||
                !this.parent )
                return;
            return this.parent._mount(...arguments);
        }
        //this.constructor.Store.mountStore(id, this, null, state, datas);
        let store = this.__context[id], ctx;
        //console.warn("mount on ", this._id, ' ', id, is.fn(store));
        if ( is.fn(store) ) {
            this.__context[id] = new store(this, { state, datas });
        }
        else {
            if ( state !== undefined && datas === undefined )
                store.setState(state);
            else if ( state !== undefined )
                store.state = state;
            
            if ( datas !== undefined )
                store.push(datas);
        }
        
        
        //console.warn("mount on ", this.stores[id]);
        this._watchStore(id);
        
        return this.__context[id];
    }
    
    _watchStore( id, state, datas ) {
        if ( !this.__context[id] ) {//ask mixed || parent
            if ( this.__mixed.reduce(( mounted, ctx ) => (mounted || ctx._watchStore(id, state, datas)), false) ||
                !this.parent )
                return;
            return this.parent._watchStore(...arguments);
        }
        if ( !this.__listening[id] && !is.fn(this.__context[id]) ) {
            !this.__context[id].isStable() && this.wait(id);
            this.__context[id].on(
                this.__listening[id] = {
                    'destroy' : s => {
                        delete this.__listening[id];
                        this.__context[id] = this.__context[id].constructor;
                    },
                    'update'  : s => this.propag(),
                    'stable'  : s => this.release(id),
                    'unstable': s => this.wait(id)
                });
        }
        return true;
    }
    
    /**
     * Mix targetCtx on this context
     * Mixed context parents are NOT mapped
     * @param targetCtx
     */
    mixin( targetCtx ) {
        let parent = this.parent, lists;
        this.__mixed.push(targetCtx)
        targetCtx.retain();
        if ( !targetCtx._stable )
            this.wait(targetCtx._id);
        
        this.__mixedList.push(lists = {
            'stable'  : s => this.release(targetCtx._id),
            'unstable': s => this.wait(targetCtx._id),
            'update'  : s => this._propag()
        })
        this.stores = {};
        this.state  = {};
        this.datas  = {};
        targetCtx.on(lists);
        __proto__push(this, 'stores', parent);
        __proto__push(this, 'state', parent);
        __proto__push(this, 'datas', parent);
        
        this.relink(this.__context, this, false, true);
        this.__mixed.forEach(
            ctx => {
                __proto__push(this, 'stores');
                __proto__push(this, 'state');
                __proto__push(this, 'datas');
                ctx.relink(ctx.__context, this, true, true)
            }
        )
    }
    
    /**
     * Register stores in storesMap & link them in the protos
     * @param storesMap
     * @param state
     * @param datas
     */
    register( storesMap, state = {}, datas = {} ) {
        this.relink(storesMap, this, false, false, state, datas);
        Object.keys(storesMap).forEach(
            id => (is.fn(storesMap[id]) && storesMap[id].singleton && this._mount(id, state[id], datas[id])))
    }
    
    /**
     * Map srcCtx store's on targetCtx headers proto's
     * @param srcCtx
     * @param targetCtx
     * @param state
     * @param datas
     */
    relink( srcCtx, targetCtx = this, external, force, state = {}, datas = {} ) {
        let lctx = targetCtx._stores.prototype;
        Object.keys(srcCtx)
              .forEach(
                  id => {
                      if ( !force && targetCtx.__context[id] === srcCtx[id] ||
                          targetCtx.__context[id] && (targetCtx.__context[id].constructor === srcCtx[id] ) )
                          return;
                
                      if ( !force && targetCtx.__context[id] ) {
                          if ( !external && !is.fn(targetCtx.__context[id]) ) {
                              console.info("Rescope Store : ", id, " already exist in this context ! ( try __proto__ hot patch )");
                              targetCtx.__context[id].__proto__ = srcCtx[id].prototype;
                        
                          }
                          if ( !external && is.fn(targetCtx.__context[id]) )
                              targetCtx.__context[id] = srcCtx[id];
                    
                          return;
                      }
                      else if ( !force && !external )
                          this.__context[id] = srcCtx[id];
                
                      Object.defineProperty(
                          lctx,
                          id,
                          {
                              get: () => this.__context[id]
                          }
                      );
                      Object.defineProperty(
                          targetCtx._state.prototype,
                          id,
                          {
                              get: () => (this.__context[id] && this.__context[id].state),
                              set: ( v ) => (this._mount(id, v))
                          }
                      );
                      Object.defineProperty(
                          targetCtx._datas.prototype,
                          id,
                          {
                              get: () => (this.__context[id] && this.__context[id].datas),
                              set: ( v ) => (this._mount(id, undefined, v))
                          }
                      );
                  }
              )
    }
    
    /**
     * Bind stores from this context, his parents and mixed context
     *
     * @param obj {React.Component|Store|function}
     * @param key {string*} stores keys to bind updates
     * @param as
     * @param setInitial=true {bool} false to not propag initial value
     */
    bind( obj, key, as, setInitial = true ) {
        let lastRevs, datas, reKey;
        if ( key && !is.array(key) )
            key = [key];
        
        if ( as === false || as === true ) {
            setInitial = as;
            as         = null;
        }
        
        reKey = key.map(id => (is.string(id) ? id : id.name));
        
        this._followers.push(
            [
                obj,
                key,
                as || undefined,
                lastRevs = reKey && reKey.reduce(( revs, id ) => (revs[id] = 0, revs), {})
            ]);
        
        this.mount(key);
        
        if ( setInitial && this._stable ) {
            datas = this.getUpdates(lastRevs);
            if ( !datas ) return;
            if ( typeof obj != "function" ) {
                if ( as ) obj.setState({ [as]: datas });
                else obj.setState(datas);
            }
            else {
                obj(datas);
            }
        }
    }
    
    /**
     * Un bind this context off the given component-keys
     * @param obj
     * @param key
     * @returns {Array.<*>}
     */
    unBind( obj, key, as ) {
        var followers = this._followers,
            i         = followers && followers.length;
        while ( followers && i-- )
            if ( followers[i][0] === obj && ('' + followers[i][1]) == ('' + key) &&
                followers[i][2] == as )
                return followers.splice(i, 1);
    }
    
    /**
     * Mount the stores in storesList from this context, its parents and mixed context
     * Bind them to 'to'
     * Hook 'to' so it will auto unbind on 'destroy' or 'componentWillUnmount'
     * @param to
     * @param storesList
     * @param bind
     * @returns {Object} Initial outputs of the stores in 'storesList'
     */
    map( to, storesList, bind = true ) {
        let Store  = this.constructor.Store;
        storesList = is.array(storesList) ? storesList : [storesList];
        this.mount(storesList);
        if ( bind && to instanceof Store ) {
            Store.map(to, storesList, this, this, false)
        }
        else if ( bind ) {
            this.bind(to, storesList, undefined, false);
            
            let mixedCWUnmount,
                unMountKey = to.isReactComponent ? "componentWillUnmount" : "destroy";
            
            if ( to.hasOwnProperty(unMountKey) ) {
                mixedCWUnmount = to[unMountKey];
            }
            
            to[unMountKey] = ( ...argz ) => {
                delete to[unMountKey];
                if ( mixedCWUnmount )
                    to[unMountKey] = mixedCWUnmount;
                
                this.unBind(to, storesList);
                return to[unMountKey] && to[unMountKey](...argz);
            }
            
        }
        return storesList.reduce(( datas, id ) => (datas[id] = this.stores[id] && this.stores[id].datas, datas), {});
    }
    
    /**
     * Get or update storesRevMap's revisions
     * @param storesRevMap
     * @param local
     * @returns {{}}
     */
    getStoresRevs( storesRevMap = {}, local ) {
        let ctx = this.__context;
        if ( !storesRevMap ) {
            storesRevMap = {};
        }
        Object.keys(ctx).forEach(
            id => {
                if ( !is.fn(ctx[id])
                ) {
                    storesRevMap[id] = ctx[id]._rev;
                }
                else if ( !storesRevMap.hasOwnProperty(id) )
                    storesRevMap[id] = false
            }
        );
        if ( !local ) {
            this.__mixed.reduce(( updated, ctx ) => (ctx.getStoresRevs(storesRevMap), storesRevMap), storesRevMap);
            this.parent && this.parent.getStoresRevs(storesRevMap);
        }
        return storesRevMap;
    }
    
    /**
     * Get or update output basing storesRevMap's revisions.
     * If a store in 'storesRevMap' is updated; add it to 'output'
     * @param storesRevMap
     * @param output
     * @param updated
     * @returns {*|{}}
     */
    getUpdates( storesRevMap, output, updated ) {
        let ctx = this.__context;
        
        output = output || {};
        Object.keys(ctx).forEach(
            id => {
                if ( !output[id]
                    && ( !storesRevMap
                        || (storesRevMap.hasOwnProperty(id) && storesRevMap[id] === undefined)
                        || !( !storesRevMap.hasOwnProperty(id) || ctx[id]._rev <= storesRevMap[id] ))
                ) {
                    
                    updated = true;
                    
                    output[id] = this.datas[id];
                    if ( storesRevMap && storesRevMap[id] !== undefined )
                        storesRevMap[id] = ctx[id]._rev;
                    
                }
            }
        );
        updated = this.__mixed.reduce(( updated, ctx ) => (ctx.getUpdates(storesRevMap, output, updated) || updated), updated);
        updated = this.parent && this.parent.getUpdates(storesRevMap, output, updated) || updated;
        return updated && output;
    }
    
    /**
     *
     * @param flags_states
     * @param flags_datas
     * @returns {{state: {}, datas: {}}}
     */
    serialize( flags_states = /.*/, flags_datas = /.*/ ) {
        let ctx = this.__context, output = { state: {}, datas: {} },
            _flags_states,
            _flags_datas;
        if ( is.array(flags_states) )
            flags_states.forEach(id => (output.state[id] = this.state[id]));
        
        if ( is.array(flags_datas) )
            flags_datas.forEach(id => (output.datas[id] = this.datas[id]));
        
        if ( !is.array(flags_datas) && !is.array(flags_states) )
            Object.keys(ctx).forEach(
                id => {
                    if ( is.fn(ctx[id]) )
                        return;
                    
                    let flags = ctx[id].constructor.flags;
                    
                    flags = is.array(flags) ? flags : [flags || ""];
                    
                    if ( flags.reduce(( r, flag ) => (r || _flags_states.test(flag)), false) )
                        output.state[id] = this.state[id];
                    
                    if ( flags.reduce(( r, flag ) => (r || _flags_datas.test(flag)), false) )
                        output.datas[id] = this.datas[id];
                }
            )
        return output;
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
     * once('stable', cb)
     * @param obj {React.Component|Store|function)
     * @param key {string} optional key where to map the public state
     */
    then( cb ) {
        if ( this._stable )
            return cb(null, this.datas);
        this.once('stable', e => cb(null, this.datas));
    }
    
    restore( { state, datas }, quiet ) {
        let ctx = this.__context;
        Object.keys(datas).forEach(
            id => {
                quiet ? ctx.datas = datas[id]
                    : ctx.push(datas[id]);
            }
        );
        Object.keys(state).forEach(
            id => {
                quiet ? ctx.state = state[id]
                    : ctx.setState(state[id]);
            }
        );
    }
    
    retainStores( stores = [], reason ) {
        stores.forEach(
            id => (this.stores[id] && this.stores[id].retain && this.stores[id].retain(reason))
        )
    }
    
    disposeStores( stores = [], reason ) {
        stores.forEach(
            id => (this.stores[id] && this.stores[id].dispose && this.stores[id].dispose(reason))
        )
    }
    
    wait( reason ) {
        //console.log("wait", reason);
        this._stable && !this.__locks.all && this.emit("unstable", this);
        this._stable = false;
        this.__locks.all++;
        if ( reason ) {
            this.__locks[reason] = this.__locks[reason] || 0;
            this.__locks[reason]++;
        }
    }
    
    release( reason ) {
        //console.log("release", reason);
        if ( reason ) {
            if ( this.__locks[reason] == 0 )
                console.error("Release more than locking !", reason);
            this.__locks[reason] = this.__locks[reason] || 0;
            this.__locks[reason]--;
        }
        if ( !reason && this.__locks.all == 0 )
            console.error("Release more than locking !");
        
        this.__locks.all--;
        if ( !this.__locks.all ) {
            this._stabilizerTM && clearTimeout(this._stabilizerTM);
            this._propagTM && clearTimeout(this._propagTM);
            
            this._stabilizerTM = setTimeout(
                e => {
                    if ( this.__locks.all )
                        return this._stabilizerTM = null;
                    
                    this._stable = true;
                    this.emit("stable", this);
                    
                    this._propag()
                }
            );
        }
        
    }
    
    propag() {
        this._propagTM && clearTimeout(this._propagTM);
        this._propagTM = setTimeout(
            e => {
                this._propag()
            }, 2
        );
    }
    
    _propag() {
        if ( this._followers.length )
            this._followers.forEach(( { 0: obj, 1: key, 2: as, 3: lastRevs } ) => {
                let datas = this.getUpdates(lastRevs);
                if ( !datas ) return;
                if ( typeof obj != "function" ) {
                    if ( as ) obj.setState({ [as]: datas });
                    else obj.setState(datas);
                }
                else {
                    obj(datas, lastRevs && [...lastRevs] || "no revs");
                }
                // lastRevs &&
                // key.forEach(id => (lastRevs[id] = this.stores[id] && this.stores[id]._rev || 0));
            });
        this.emit("update", this.getUpdates());
    }
    
    _getAllChilds( childs = [] ) {
        childs.push(...this._childContexts)
        this._childContexts.forEach(
            ctx => {
                ctx._getAllChilds(childs);
            }
        );
        return childs;
    }
    
    _addChild( ctx ) {
        this._childContexts.push(ctx);
    }
    
    _rmChild( ctx ) {
        let i = this._childContexts.indexOf(ctx);
        if ( i != -1 )
            this._childContexts.splice(i, 1);
    }
    
    retain( reason ) {
        this.__retains.all++;
        //console.log("retain", this._id, reason);
        if ( reason ) {
            this.__retains[reason] = this.__retains[reason] || 0;
            this.__retains[reason]++;
        }
    }
    
    dispose( reason ) {
        //console.log("dispose", this._id, reason);
        if ( reason ) {
            
            if ( this.__retains[reason] == 0 )
                throw new Error("Dispose more than retaining !");
            
            this.__retains[reason] = this.__retains[reason] || 0;
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
                        //console.log("wtf ctx", this._id, reason, this.__locks, this._stable);
                        this.then(s => {
                            //console.log("wtf ctx then", this._id, reason, this.__locks);
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
    
    /**
     * order destroy of local stores
     */
    destroy() {
        let ctx = this.__context;
        
        //console.warn("destroy", this._id);
        this.emit("destroy");
        Object.keys(
            this.__listening
        ).forEach(
            id => this.__context[id].removeListener(this.__listening[id])
        );
        
        
        this.__listening = {};
        
        if ( this._isLocalId )
            delete openContexts[this._id];
        this._followers.length = 0;
        
        for ( let key in ctx )
            if ( !is.fn(ctx[key]) ) {
                if ( ctx[key].contextObj === this )
                    ctx[key].destroy();
                
                ctx[key] = ctx[key].constructor;
            }
        while ( this.__mixedList.length ) {
            this.__mixed[0].removeListener(this.__mixedList.shift());
            this.__mixed.shift().dispose();
        }
        if ( this.parent ) {
            this.parent.removeListener(this.__parentList);
            this.parent.dispose("isMyParent");
            this.parent._rmChild(this);
        }
         this.datas = this.state = this.context = this.stores = null;
         this._datas = this._state = this._stores = null;
        
        
    }
}