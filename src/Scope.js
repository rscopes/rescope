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


var is                                               = require('./utils/is'),
    { walknSet, walknGet, keyWalknSet, keyWalknGet } = require('./utils/utils'),
    EventEmitter                                     = require('./utils/Emitter'),
    shortid                                          = require('shortid')
	, __proto__push                                  = ( target, id, parent ) => {
	    let fn       = function () {
	    };
	    fn.prototype = parent ? new parent._[id]() : target[id] || {};
	    target[id]   = new fn();
	    target._[id] = fn;
    },
	openScopes                                       = {},
	SimpleObjectProto                                = ({}).constructor;

/**
 * Base Scope object
 */
class Scope extends EventEmitter {
	static getScope( scopes ) {
		let skey = is.array(scopes) ? scopes.sort(( a, b ) => {
			if ( a.firstname < b.firstname ) return -1;
			if ( a.firstname > b.firstname ) return 1;
			return 0;
		}).join('+') : scopes;
		return openScopes[skey] = openScopes[skey] || new Scope({}, { id: skey });
	};
	
	
	/**
	 * get a parsed reference list from stateMap
	 * @param _ref
	 * @returns {{storeId, path, alias: *, ref: *}}
	 */
	static stateMapToRefList( sm, state = {}, _refs = [], actions = {}, path = "" ) {
		Object.keys(sm).forEach(
			key => {
				let cpath = path ? path + '.' + key : key;
				sm[key] instanceof Scope.scopeRef
				? _refs.push(sm[key].path + ':' + cpath)
				: (sm[key] && sm[key] instanceof Function)
				  ? actions[key] = sm[key]
				  : (sm[key] && sm[key].prototype instanceof Scope.Store)
				    ? _refs.push(sm[key].as(cpath))
				    : state[cpath] = sm[key]
				//: this.stateMapToRefList(sm[key], _refs, path + '.' + key)
			}
		)
		return _refs;
	}
	
	static persistenceTm = 1;// if > 0, will wait 'persistenceTm' ms before destroy
	// when
	// dispose reach 0
	static Store    = null;
	static scopeRef = function scopeRef( path ) {
		this.path = path;
	};
	static scopes   = openScopes;// all active scopes
	
	
	/**
	 * Init a ReScope scope
	 *
	 * @param storesMap {Object} Object with the initial stores definition / instances
	 * @param config {Object} Scope config
	 * {
	 *  parent {scope} @optional parent scope
	 *
	 *  id {string} @optional id ( if this id exist storesMap will be merge on the 'id'
	 *     scope) key {string} @optional key of the scope ( if no id is set, the scope id
	 *     will be (parent.id+'>'+key) incrementId {bool} @optional true to add a suffix
	 *     id, if the provided key or id globally exist
	 *
	 *  state {Object} @optional initial state by store alias
	 *  data {Object} @optional initial data by store alias
	 *
	 *  rootEmitter {bool} @optional true to not being destabilized by parent
	 *  boundedActions {array | regexp} @optional list or regexp of actions not
	 *     propagated to the parent
	 *
	 *  persistenceTm {number) if > 0, will wait 'persistenceTm' ms before destroy when
	 *     dispose reach 0 autoDestroy  {bool} will trigger retain & dispose after start
	 *  }
	 * @returns {Scope}
	 */
	constructor( storesMap, { parent, key, id, snapshot, state, data, incrementId = !!key, persistenceTm, autoDestroy, rootEmitter, boundedActions } = {} ) {
		super();
		var _ = {
			keyPID: (parent && parent._id || shortid.generate()),
			key,
			incrementId
		}, keyIndex;
		
		id = id || key && (_.keyPID + '>' + key);
		
		_.isLocalId = !id;
		
		//if ( parent && key ) {
		//    keyIndex = parent._.childScopes.find(ctx=>(ctx._id==id));
		//    if ( keyIndex == -1 ) keyIndex = parent._.seenChilds;
		//    keyIndex++;
		//    if ( keyIndex )
		//        id = id + '[' + keyIndex + ']';
		//}
		
		id = id || ("_____" + shortid.generate());
		
		
		if ( openScopes[id] && !incrementId ) {// overwrite existing scope
			this._id = id;
			openScopes[id].register(storesMap);
			return openScopes[id]
		}
		else if ( openScopes[id] && incrementId ) {// generate key id
			let i = -1;
			while ( openScopes[id + '[' + (++i) + ']'] ) ;
			id = id + '[' + i + ']';
		}
		
		this._id        = id;
		this._rev       = 0;
		openScopes[id]  = this;
		_.persistenceTm = persistenceTm || this.constructor.persistenceTm;
		
		this.actions = {};
		this.stores  = {};
		this.state   = {};
		this.data    = {};
		
		this.parent       = parent;
		this._            = _;
		this._autoDestroy = autoDestroy;
		
		if ( parent && parent.dead )
			throw new Error("Can't use a dead scope as parent !");
		
		__proto__push(this, 'actions', parent);
		__proto__push(this, 'stores', parent);
		__proto__push(this, 'state', parent);
		__proto__push(this, 'data', parent);
		
		this.sources      = [];
		_.childScopes     = [];
		_.childScopesList = [];
		_.unStableChilds  = 0;
		_.seenChilds      = 0;
		
		this.__retains = { all: 0 };
		this.__locks   = { all: 1 };
		
		//_.snapshot        = snapshot;
		//_.snapshot        = snapshot;
		_._boundedActions = is.array(boundedActions)
		                    ? { test: boundedActions.includes.bind(boundedActions) }
		                    : boundedActions;
		_._listening      = {};
		_._scope          = {};
		_._mixed          = [];
		_._mixedList      = [];
		_.followers       = [];
		if ( parent ) {
			parent.retain("isMyParent");
			if ( !rootEmitter ) {
				!parent._stable && this.wait("waitingParent");
				parent.on(_._parentList = {
					'stable'  : s => this.release("waitingParent"),
					'unstable': s => this.wait("waitingParent"),
					'update'  : s => this._propag()
				});
			}
			else {
				parent.on(_._parentList = {
					'update': s => this._propag()
				});
			}
			// this.register(parent.__scope, state, data);
		}
		
		
		this.register(storesMap, state, data);
		this.__locks.all--;
		this._stable = !this.__locks.all;
		
		if ( parent ) {
			parent._addChild(this);
		}
		
		this.restore(snapshot);
		
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
	 * Mount the stores in storesList, in this scope or in its parents or mixed scopes
	 *
	 * @param storesList {string|storeRef} Store name, Array of Store names, or Rescope
	 *     store ref from Store::as or Store:as
	 * @param state
	 * @param data
	 * @returns {Scope}
	 */
	mount( storesList, snapshot, state, data ) {
		if ( is.array(storesList) ) {
			storesList.forEach(k => this._mount(k, snapshot, state, data));
		}
		else {
			this._mount(...arguments);
		}
		return this;
	}
	
	_mount( id, snapshot, state, data ) {
		let ref, snap;
		
		ref = this.parseRef(id)
		
		if ( id == "$parent" ) return;
		if ( !this._._scope[ref.storeId] ) {//ask mixed || parent
			if ( this._._mixed.reduceRight(( mounted, ctx ) => (mounted || ctx._mount(id, snapshot, state, data)), false) ||
				!this.parent )
				return;
			return this.parent._mount(...arguments);
		}
		else {
			let store = this._._scope[ref.storeId], taskQueue = [];
			if ( is.rsStoreClass(store) ) {
				this._._scope[ref.storeId] = new store(this, {
					//snapshot,
					name: ref.storeId,
					state,
					data
				}, taskQueue);
				while ( taskQueue.length ) taskQueue.shift()();
			}
			else if ( is.rsScopeClass(store) ) {
				store = this._._scope[ref.storeId] = new store({ $parent: this }, {
					id: this._id + '/' + ref.storeId,
					//autoDestroy: true
					//parent: this
				});
				//this._._scope[ ref.storeId ].retain("scopedChildScope");
				//this._watchStore(ref.storeId);
				if ( ref.path.length > 1 )
					this._._scope[ref.storeId].mount(ref.path.slice(1).join('.'), snapshot, state, data)
				//else return this._._scope[ ref.storeId ];
			}
			if ( is.rsStore(store) ) {
				if ( state !== undefined && data === undefined )
					store.setState(state);
				else if ( state !== undefined )
					store.state = state;
				
				if ( data !== undefined )
					store.push(data);
			}
			this._watchStore(ref.storeId);
		}
		
		
		return this._._scope[ref.storeId];
	}
	
	_watchStore( id, state, data ) {
		if ( !this._._listening[id] && !is.fn(this._._scope[id]) ) {
			//if ( is.rsStore(this._._scope[ id ]) ) {
			!this._._scope[id]._autoDestroy && this._._scope[id].retain("scoped");
			!this._._scope[id].isStable() && this.wait(id);
			this._._scope[id].on(
				this._._listening[id] = {
					'destroy' : s => {
						delete this._._listening[id];
						this._._scope[id] = this._._scope[id].constructor;
					},
					'update'  : s => this.propag(),
					'stable'  : s => this.release(id),
					'unstable': s => this.wait(id)
				});
		}
		return true;
	}
	
	/**
	 * Mix targetCtx on this scope
	 * Mixed scope parents are NOT mapped
	 * @param targetCtx
	 */
	mixin( targetCtx ) {
		let parent = this.parent, lists;
		
		this._._mixed.push(targetCtx)
		targetCtx.retain("mixedTo");
		if ( !targetCtx._stable )
			this.wait(targetCtx._id);
		this._._mixedList.push(lists = {
			'stable'  : s => this.release(targetCtx._id),
			'unstable': s => this.wait(targetCtx._id),
			'update'  : s => this._propag()
		});
		
		//this.actions = {};
		//this.stores  = {};
		//this.state   = {};
		//this.data    = {};
		targetCtx.on(lists);
		
		// reset protos
		// push new proto with parent
		__proto__push(this, 'actions', parent);
		__proto__push(this, 'stores', parent);
		__proto__push(this, 'state', parent);
		__proto__push(this, 'data', parent);
		// print localz accessors
		this.relink(this._._scope, this, false, true);
		
		this._._mixed.forEach(
			ctx => {
				// push protos
				__proto__push(this, 'actions');
				__proto__push(this, 'stores');
				__proto__push(this, 'state');
				__proto__push(this, 'data');
				this.stores.__origin = "mixed " + ctx._id;
				// write mixed accessors
				ctx.relink(ctx._._scope, this, true, true)
			}
		)
	}
	
	/**
	 * Register stores in storesMap & link them in the protos
	 * @param storesMap
	 * @param state
	 * @param data
	 */
	register( storesMap, state = {}, data = {} ) {
		this.relink(storesMap, this, false, false);
		Object.keys(storesMap).forEach(
			id => {
				if ( id == "$parent" ) return;
				if ( storesMap[id].singleton || (is.fn(storesMap[id]) && (state[id] || data[id])) ) {
					this._mount(id, undefined, state[id], data[id])
				}
				else if ( state[id] || data[id] ) {
					if ( data[id] ) {
						if ( state[id] )
							this.stores[id].state = state[id];
						this.stores[id].push(data[id]);
					}
					else if ( state[id] ) {
						this.stores[id].setState(state[id]);
					}
				}
				else {
					this._watchStore(id);
				}
			}
		)
		
	}
	
	/**
	 * Map srcCtx store's on targetCtx headers proto's
	 * @param srcCtx
	 * @param targetCtx
	 * @param state
	 * @param data
	 */
	relink( srcCtx, targetCtx = this, external, force ) {
		let lctx = targetCtx._.stores.prototype;
		Object.keys(srcCtx)
		      .forEach(
			      id => {
				      if ( !force && targetCtx._._scope[id] === srcCtx[id] ||
					      targetCtx._._scope[id] && (targetCtx._._scope[id].constructor === srcCtx[id]) )
					      return;
				
				      if ( !force && targetCtx._._scope[id] ) {
					      if ( !external && !is.fn(targetCtx._._scope[id]) ) {
						      console.info("Rescope Store : ", id, " already exist in this scope ! ( Hot switching the store )");
						      let tmp                = targetCtx._._scope[id];
						      targetCtx._._scope[id] = targetCtx._._scope[id].constructor;
						      this._mount(id, null, tmp.state);
						      tmp.destroy();
						      //targetCtx._._scope[ id ].__proto__ = tmp.__proto__;
					      }
					      if ( !external && is.fn(targetCtx._._scope[id]) )
						      targetCtx._._scope[id] = srcCtx[id];
					
					      return;
				      }
				      else if ( !force && !external )
					      this._._scope[id] = srcCtx[id];
				
				      Object.defineProperty(
					      lctx,
					      id,
					      {
						      enumerable  : true,
						      configurable: true,
						      get         : () => this._._scope[id]
					      }
				      );
				      if ( id == "$parent" ) return;
				      Object.defineProperty(
					      targetCtx._.state.prototype,
					      id,
					      {
						      enumerable  : true,
						      configurable: true,
						      get         : () => (this._._scope[id] && this._._scope[id].state),
						      set         : ( v ) => (this._mount(id, undefined, v))
					      }
				      );
				      Object.defineProperty(
					      targetCtx._.data.prototype,
					      id,
					      {
						      enumerable  : true,
						      configurable: true,
						      get         : () => (this._._scope[id] && this._._scope[id].data),
						      set         : ( v ) => (this._mount(id, undefined, undefined, v))
					      }
				      );
				
				      let actions       = srcCtx[id] instanceof Scope.Store
				                          ? srcCtx[id].constructor.actions
				                          : srcCtx[id].actions,
				          activeActions = targetCtx._.actions.prototype;
				      if ( is.rsScope(this._._scope[id].prototype) )
					      this._mount(id);
				      if ( is.rsScope(this._._scope[id]) ) {
					      activeActions[id] = this._._scope[id].actions;
				      }
				      if ( !is.rsStore(this._._scope[id]) && !is.rsStoreClass(this._._scope[id]) )
					      return;
				
				      actions &&
				      Object.keys(actions)
				            .forEach(
					            ( act ) => {
						            if ( activeActions.hasOwnProperty(act) )
							            activeActions[act].__targetStores++;
						            else {
							            activeActions[act]                = this.dispatch.bind(this, act);
							            activeActions[act].__targetStores = 1;
						            }
					            }
				            )
			      }
		      )
	}
	
	/**
	 * Bind stores from this scope, his parents and mixed scope
	 *
	 * @param obj {React.Component|Store|function}
	 * @param key {string} stores keys to bind updates
	 * @param as
	 * @param setInitial {bool} false to not propag initial value (default : true)
	 */
	bind( obj, key, as, setInitial = true, revMap = {} ) {
		let lastRevs, data, refKeys;
		if ( key && !is.array(key) )
			key = [key];
		
		if ( as === false || as === true ) {
			setInitial = as;
			as         = null;
		}
		
		refKeys = key
			.map(id => (is.string(id) ? id : id.name))
			.map(id => (this.parseRef(id)));
		
		
		this._.followers.push(
			[
				obj,
				key,
				as || undefined,
				lastRevs = refKeys.reduce(( revs, ref ) => {
					revs[ref.storeId] = revs[ref.storeId] || {
						rev : 0,
						refs: []
					};
					revs[ref.storeId].refs.push(ref);
					return revs;
				}, revMap)
			]);
		
		this.mount(key);
		this.retainStores(Object.keys(lastRevs), 'listeners');
		
		if ( setInitial && this._stable ) {
			data = this.getUpdates(lastRevs);
			if ( !data ) return this;
			if ( typeof obj != "function" ) {
				if ( as ) obj.setState({ [as]: data });
				else obj.setState(data);
			}
			else {
				obj(data);
			}
		}
		return this;
	}
	
	/**
	 * Un bind this scope off the given component-keys
	 * @param obj
	 * @param key
	 * @returns {Array.<*>}
	 */
	unBind( obj, key, as ) {
		var followers = this._.followers,
		    i         = followers && followers.length;
		while ( followers && i-- )
			if ( followers[i][0] === obj &&
				('' + followers[i][1]) == ('' + key) &&
				followers[i][2] == as ) {
				this.disposeStores(Object.keys(followers[i][3]), 'listeners');
				return followers.splice(i, 1);
			}
	}
	
	/**
	 * Mount the stores in storesList from this scope, its parents and mixed scope
	 * Bind them to 'to'
	 * Hook 'to' so it will auto unbind on 'destroy' or 'componentWillUnmount'
	 * @param to
	 * @param storesList
	 * @param bind
	 * @returns {Object} Initial outputs of the stores in 'storesList'
	 */
	map( to, storesList, bind = true, revMap ) {
		let Store   = this.constructor.Store;
		storesList  = is.array(storesList) ? storesList : [storesList];
		let refList = storesList.map(this.parseRef);
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
		return revMap && this.getUpdates(revMap) || refList.reduce(( data, ref ) => {
			walknSet(data, ref.alias || ref.path, this.retrieve(ref.path))
			return data;
		}, {});
	}
	
	/**
	 * Get current data value from json path
	 * @param path
	 * @returns {string|*}
	 */
	retrieve( path = "" ) {
		path = is.string(path) ? path.split('.') : path;
		return path &&
			this.stores[path[0]] &&
			this.stores[path[0]].retrieve &&
			this.stores[path[0]].retrieve(path.slice(1));
	}
	
	/**
	 * Get current store from json path
	 * @param path
	 * @returns {string|*}
	 */
	retrieveStore( path = "" ) {
		path = is.string(path) ? path.split('.') : path;
		return path
			&& path.length
			&& (
				path.length != 1 && this.stores[path[0]].retrieveStore
				? this.stores[path[0]].retrieveStore(path.slice(1))
				: path.length == 1 && this.stores[path[0]]
			);
	}
	
	/**
	 * Get or update storesRevMap's revisions
	 * @param storesRevMap
	 * @param local
	 * @returns {{}}
	 */
	getStoresRevs( storesRevMap = {}, local ) {
		let ctx = this._._scope;
		if ( !storesRevMap ) {
			storesRevMap = {};
		}
		Object.keys(ctx).forEach(
			id => {
				if ( id == "$parent" ) return;
				if ( !is.fn(ctx[id])
				) {
					storesRevMap[id] = ctx[id]._rev;
				}
				else if ( !storesRevMap.hasOwnProperty(id) )
					storesRevMap[id] = false
			}
		);
		if ( !local ) {
			this._._mixed.reduce(( updated, ctx ) => (ctx.getStoresRevs(storesRevMap), storesRevMap), storesRevMap);
			this.parent && this.parent.getStoresRevs(storesRevMap);
		}
		return storesRevMap;
	}
	
	/**
	 * Get updated output basing storesRevMap's revisions.
	 * If a store in 'storesRevMap' was updated; add it to 'output' & update storesRevMap
	 * @param storesRevMap
	 * @param output
	 * @param updated
	 * @returns {*|{}}
	 */
	getRefsUpdates( refs, revMap, output ) {
		
		revMap = revMap || refs
			.map(id => (is.string(id) ? id : id.name))
			.map(id => (this.parseRef(id)))
			.reduce(( revs, ref ) => {
				revs[ref.storeId] = revs[ref.storeId] || {
					rev : 0,
					refs: []
				};
				revs[ref.storeId].refs.push(ref);
				return revs;
			}, {});
		
		return this.getUpdates(revMap, output)
		
	}
	
	/**
	 * Get or update output basing storesRevMap's revisions.
	 * If a store in 'storesRevMap' was updated; add it to 'output' & update storesRevMap
	 * @param storesRevMap
	 * @param output
	 * @param updated
	 * @returns {*|{}}
	 */
	getUpdates( storesRevMap, output, updated ) {
		let ctx = this._._scope;
		
		output = output || {};
		Object.keys(ctx).forEach(
			id => {
				if ( id == "$parent" ) return;
				if ( !output.hasOwnProperty(id) && !is.fn(ctx[id])
					&& (!storesRevMap
						|| (storesRevMap.hasOwnProperty(id) && storesRevMap[id] === undefined)
						|| !(!storesRevMap.hasOwnProperty(id) || ctx[id]._rev <= storesRevMap[id].rev))
				) {
					
					updated    = true;
					output[id] = this.data[id];
					
					if ( storesRevMap && storesRevMap.hasOwnProperty(id) ) {
						storesRevMap[id]     = storesRevMap[id] || { rev: 0, refs: [] };
						storesRevMap[id].rev = ctx[id]._rev;
						storesRevMap[id].refs.forEach(
							ref => {
								//console.warn("update ref ", ref.ref,
								// this.retrieve(ref.path));
								output[ref.alias] = this.retrieve(ref.path)
								
							}
						)
					}
					else {
						//console.warn("update ", id, this.data[id]);
						output[id] = this.data[id];
					}
					
				}
			}
		);
		updated = this._._mixed.reduceRight(( updated, ctx ) => (ctx.getUpdates(storesRevMap, output, updated) || updated), updated);
		updated = this.parent && this.parent.getUpdates(storesRevMap, output, updated) || updated;
		return updated && output;
	}
	
	/**
	 * Recursively get all child scopes
	 * @param childs
	 * @returns {Array}
	 * @private
	 */
	_getAllChilds( childs = [] ) {
		childs.push(...this._.childScopes);
		this._.childScopes.forEach(
			ctx => {
				ctx._getAllChilds(childs);
			}
		);
		return childs;
	}
	
	/**
	 * Serialize all active stores state & data in every childs & mixed scopes
	 *
	 * Scopes without key or id are ignored
	 * @param output
	 * @returns {{}}
	 */
	serialize( cfg = {}, output = {} ) {
		let ctx                                  = this._._scope,
		    { baseId, key, keyPID, incrementId } = this._,
		    {
			    alias,
			    withChilds  = true,
			    withParents,
			    withMixed   = true,
			    norefs,
			    parentAlias = keyPID,
			    aliases     = {}
		    }                                    = cfg,
		    sid                                  = key ? parentAlias + '>' + key : alias || this._id;
		
		delete cfg.alias;
		
		//alias = alias || baseId;
		
		if ( keyWalknGet(output, sid) ) {
			if ( !incrementId )// done
				return output;
			else if ( incrementId ) {// generate key id
				let i = -1;
				while ( keyWalknGet(output, sid + '[' + (++i) + ']') ) ;
				sid = sid + '[' + i + ']';
			}
		}
		
		//@todo : better serialize method
		keyWalknSet(output, sid, {});
		
		Object.keys(ctx).forEach(
			id => {
				if ( id == "$parent" || is.fn(ctx[id]) )
					return;
				
				ctx[id].serialize({ ...cfg, scopeAlias: sid }, output);
			}
		)
		
		//withParents && this.parent && this.parent.serialize({
		//	                                                    withChild  : false,
		//	                                                    withParents: true,
		//	                                                    withMixed,
		//	                                                    norefs
		//                                                    }, output);
		
		withChilds && this._.childScopes.forEach(
			ctx => {
				!ctx._.isLocalId && ctx.serialize({
					                                  withChild  : true,
					                                  withParents: false,
					                                  parentAlias: sid,
					                                  withMixed,
					                                  norefs,
				                                  }, output);
			}
		);
		
		withMixed && this._._mixed.forEach(
			ctx => {
				!ctx._.isLocalId && ctx.serialize({
					                                  withChild  : false,
					                                  withParents: false,
					                                  withMixed,
					                                  norefs
				                                  }, output);
			}
		);
		
		if ( alias ) {
			output = Object.keys(output)
			               .reduce(
				               ( h, k ) => (
					               h[k === this._id
					                 ? alias
					                 : k] = output[k],
						               h
				               ),
				               {}
			               )
		}
		return output;
	}
	
	/**
	 * Restore state & data from the serialize fn
	 * @param snapshot
	 * @param force
	 */
	restore( snapshot, cfg = {}, force = is.bool(cfg) && cfg ) {
		let ctx = this._._scope, snap;
		
		if ( snapshot && cfg && cfg.alias && cfg.alias != this._id ) {
			snap = {
				...snapshot,
				[this._id]: snapshot[cfg.alias]
			}
			delete snap[cfg.alias];
			snapshot = snap;
		}
		snapshot = snapshot
			&& keyWalknGet(snapshot, this._id)
			|| this.takeSnapshotByKey(this._id);
		
		
		if ( !snapshot )
			return;
		
		this._.snapshot = { ...snapshot };
		
		snap          = snapshot['/'];
		snapshot['/'] = { ...snap };
		snap && Object.keys(snap).forEach(
			name => {
				if ( name == "$parent" ) return;
				
				if ( ctx[name] ) {
					
					if ( force && !is.fn(ctx[name]) )
						ctx[name].destroy();
					
					this._mount(name);// quiet
				}
				
			}
		)
		
		this._._mixed.forEach(
			ctx => {
				!ctx._.isLocalId && ctx.restore(undefined, force);
			}
		);
		
		this._.childScopes.forEach(
			ctx => {
				!ctx._.isLocalId && ctx.restore(undefined, force);
			}
		);
	}
	
	getSnapshotByKey( key, local ) {
		// only have the local snap
		if ( this._.snapshot && key.startsWith(this._id) ) {
			let obj = keyWalknGet(this._.snapshot, key.substr(this._id.length))
			//if ( obj ) {
			//    this.deleteSnapshotByKey(key);
			//}
			return obj;
		}
		else return !local
			&& this.parent
			&& this.parent.getSnapshotByKey(key)
			||
			this.stores.$parent
			&& this.stores.$parent.getSnapshotByKey(key);
		
	}
	
	getSnapshotByKeyExt( snapshot, key, local ) {
		// only have the local snap
		if ( snapshot ) {
			let obj = keyWalknGet(snapshot, key)
			return obj;
		}
		
	}
	
	takeSnapshotByKey( key, local ) {
		if ( this._.snapshot && key.startsWith(this._id) ) {
			let obj = keyWalknGet(this._.snapshot, key.substr(this._id.length))
			if ( obj ) {
				this.deleteSnapshotByKey(key, true);
			}
			return obj;
		}
		else return !local
			&& this.parent
			&& this.parent.takeSnapshotByKey(key)
			||
			this.stores.$parent
			&& this.stores.$parent.takeSnapshotByKey(key);
	}
	
	deleteSnapshotByKey( key, local ) {
		if ( this._.snapshot && key.startsWith(this._id) ) {
			let obj = keyWalknGet(this._.snapshot, key.substr(this._id.length).replace(/^(.*[\>|\/])[^\>|\/]+$/ig, '$1'))
			if ( obj )
				delete obj[key.replace(/^.*[\>|\/]([^\>|\/]+)$/ig, '$1')]
		}
		return !local
			&& this.parent
			&& this.parent.deleteSnapshotByKey(key)
			||
			this.stores.$parent
			&& this.stores.$parent.deleteSnapshotByKey(key);
	}
	
	setState( pState ) {
		Object.keys(pState)
		      .forEach(k => (this.state[k] = pState[k]))
	}
	
	/**
	 * get a parsed reference
	 * @param _ref
	 * @returns {{storeId, path, alias: *, ref: *}}
	 */
	parseRef( _ref ) {
		if ( typeof _ref !== 'string' ) {
			this.register({ [_ref.name]: _ref.store });
			_ref = _ref.name;
		}
		let ref = _ref.split(':');
		ref[0]  = ref[0].split('.');
		return {
			storeId: ref[0][0],
			path   : ref[0],
			alias  : ref[1] || ref[0][ref[0].length - 1],
			ref    : _ref
		};
	}
	
	/**
	 * Dispatch an action to the top parent & mixed scopes, in all stores
	 *
	 * @param action
	 * @param data
	 * @returns {Scope}
	 */
	dispatch( action, ...argz ) {
		if ( this.dead ) {
			console.warn("Dispatch was called on a dead scope, check you're async functions in this stack...", (new Error()).stack);
			return;
		}
		let bActs = this._._boundedActions;
		Object.keys(this._._scope)
		      .forEach(
			      id => {
				      if ( id == "$parent" ) return;
				      if ( !is.fn(this._._scope[id]) )
					      this._._scope[id].trigger(action, ...argz);
			      }
		      );
		
		if ( bActs && bActs.test(action) )
			return;
		
		this._._mixed.forEach(( ctx ) => (ctx.dispatch(action, ...argz)));
		this.parent && this.parent.dispatch(action, ...argz);
		return this;
	}
	
	//
	trigger() {
		this.dispatch(...arguments);
	}
	
	/**
	 * once('stable', cb)
	 * @param obj {React.Component|Store|function)
	 * @param key {string} optional key where to map the public state
	 */
	then( cb ) {
		if ( this._stable )
			return cb(this.data);
		this.once('stable', e => cb(this.data));
	}
	
	/**
	 * Call retain on the scoped stores basing given
	 *
	 * @param stores
	 * @param reason
	 */
	retainStores( stores = [], reason ) {
		//stores.forEach(
		//    id => ( ( !this.stores[ id ] || !this.stores[ id ].retain ) && console.warn(id, reason) )
		//)
		stores.forEach(
			id => (this.stores[id] && this.stores[id].retain && this.stores[id].retain(reason))
		)
	}
	
	/**
	 * Call retain on the scoped stores
	 *
	 * @param stores
	 * @param reason
	 */
	disposeStores( stores = [], reason ) {
		stores.forEach(
			id => (this.stores[id] && this.stores[id].dispose && this.stores[id].dispose(reason))
		)
	}
	
	/**
	 * Keep the scope unstable until release is called
	 * @param reason
	 */
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
	
	
	/**
	 * Stabilize the scope if no more locks remain (wait fn)
	 * @param reason
	 */
	release( reason ) {
		
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
			this._.stabilizerTM && clearTimeout(this._.stabilizerTM);
			
			this._.stabilizerTM = setTimeout(
				e => {
					this._.stabilizerTM = null;
					if ( this.__locks.all )
						return;
					
					this._.propagTM && clearTimeout(this._.propagTM);
					this._rev++;
					this._stable = true;
					this.emit("stable", this);
					
					!this.dead && this._propag();// stability can induce destroy
				}
			);
		}
		
	}
	
	/**
	 * Propag stores updates basing theirs last updates
	 */
	propag() {
		this._.propagTM && clearTimeout(this._.propagTM);
		this._.propagTM = setTimeout(
			e => {
				this._.propagTM = null;
				this._propag()
			}, 2
		);
	}
	
	_propag() {
		if ( this._.followers.length )
			this._.followers.forEach(( { 0: obj, 1: key, 2: as, 3: lastRevs, 3: remaps } ) => {
				let data = this.getUpdates(lastRevs);
				if ( !data ) return;
				if ( typeof obj != "function" ) {
					//console.log("setState ",obj, Object.keys(data))
					if ( as ) obj.setState({ [as]: data });
					else obj.setState(data);
				}
				else {
					obj(data, lastRevs && [...lastRevs] || "no revs");
				}
				// lastRevs &&
				// key.forEach(id => (lastRevs[id] = this.stores[id] &&
				// this.stores[id]._rev || 0));
			});
		this.emit("update", this.getUpdates());
	}
	
	/**
	 * is stable
	 * @returns bool
	 */
	isStable() {
		return this._stable;
	}
	
	_addChild( ctx ) {
		this._.childScopes.push(ctx);
		this._.seenChilds++;
		let lists     = {
			    'stable'      : s => {
				    this._.unStableChilds--;
				    if ( !this._.unStableChilds )
					    this.emit("stableTree", this)
			    },
			    'unstable'    : s => {
				    this._.unStableChilds++;
				    if ( 1 == this._.unStableChilds )
					    this.emit("unstableTree", this)
			    },
			    'stableTree'  : s => {
				    this._.unStableChilds--;
				    if ( !this._.unStableChilds )
					    this.emit("stableTree", this)
			    },
			    'unstableTree': s => {
				    this._.unStableChilds++;
				    if ( 1 == this._.unStableChilds )
					    this.emit("unstableTree", this)
			    },
			    'destroy'     : ctx => {
				    if ( ctx._.unStableChilds )
					    this._.unStableChilds--;
				    if ( !ctx.isStable() )
					    this._.unStableChilds--;
				
				    if ( !this._.unStableChilds )
					    this.emit("stableTree", this)
			    }
		    },
		    wasStable = this._.unStableChilds;
		//!ctx.isStable() && console.warn('add unstable child');
		!ctx.isStable() && this._.unStableChilds++;
		ctx._.unStableChilds && this._.unStableChilds++;
		this._.childScopesList.push(lists);
		if ( !wasStable && this._.unStableChilds )
			this.emit("unstableTree", this)
		ctx.on(lists);
	}
	
	_rmChild( ctx ) {
		let i         = this._.childScopes.indexOf(ctx),
		    wasStable = this._.unStableChilds;
		if ( i != -1 ) {
			this._.childScopes.splice(i, 1);
			!ctx.isStable() && this._.unStableChilds--;
			ctx._.unStableChilds && this._.unStableChilds--;
			ctx.un(this._.childScopesList.splice(i, 1)[0]);
			if ( wasStable && !this._.unStableChilds )
				this.emit("stableTree")
		}
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
			if ( !this.__retains[reason] )
				throw new Error("Dispose more than retaining : " + reason);
			this.__retains[reason]--;
		}
		
		if ( !this.__retains.all )
			throw new Error("Dispose more than retaining !");
		
		this.__retains.all--;
		
		if ( !this.__retains.all ) {
			//console.log("dispose do destroy ", this._id, this._persistenceTm);
			if ( this._.persistenceTm ) {
				this._.destroyTM && clearTimeout(this._.destroyTM);
				this._.destroyTM = setTimeout(
					e => {
						//this.then(s => {
						!this.__retains.all && !this.dead && this.destroy()
						//});
					},
					this._.persistenceTm
				);
			}
			else {
				//this.then(s =>
				(!this.__retains.all && !this.dead && this.destroy())
				//);
			}
		}
	}
	
	/**
	 * order destroy of local stores
	 */
	destroy() {
		let ctx = this._._scope;
		//console.warn("destroy", this._id);
		this._.stabilizerTM && clearTimeout(this._.stabilizerTM);
		this._.propagTM && clearTimeout(this._.propagTM);
		Object.keys(
			this._._listening
		).forEach(
			id => ((id !== "$parent") && this._._scope[id].removeListener(this._._listening[id]))
		);
		while ( this._._mixedList.length ) {
			this._._mixed[0].removeListener(this._._mixedList.shift());
			this._._mixed.shift().dispose("mixedTo");
		}
		[...this._.followers].map(follower => this.unBind(...follower));
		for ( let key in ctx )
			if ( !is.fn(ctx[key]) ) {
				if ( key == "$parent" ) continue;
				!ctx[key]._autoDestroy && ctx[key].dispose("scoped");
			}
		if ( this._._parentList ) {
			this.parent._rmChild(this);
			this.parent.removeListener(this._._parentList);
			this.parent.dispose("isMyParent");
			this._._parentList = null;
		}
		this.dead = true;
		this.emit("destroy", this);
		
		
		//if ( !this._.isLocalId )
		delete openScopes[this._id];
		
		//this._ = null;
		
	}
}


is.rsScope = function ( obj ) {
	return obj instanceof Scope
}

is.rsScopeClass = function ( obj ) {
	return Scope.isPrototypeOf(obj) || obj === Scope
}
export default Scope;