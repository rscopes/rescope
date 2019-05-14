/*
 * The MIT License (MIT)
 * Copyright (c) 2019. Wise Wild Web
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 *  @author : Nathanael Braun
 *  @contact : n8tz.js@gmail.com
 */

const is                           = require('is'),
      Scope                        = require('./Scope'),
      { keyWalknSet, keyWalknGet } = require('./utils/utils'),
      EventEmitter                 = require('./utils/Emitter'),
      TaskSequencer                = require('./utils/TaskSequencer'),
      shortid                      = require('shortid'),
      objProto                     = Object.getPrototypeOf({});

class Store extends EventEmitter {
	//static use                  = [];// overridable list of source stores
	static follow;// overridable list of store that will allow push if updated
	static require;
	static staticScope   = new Scope({}, { id: "static" });
	static state         = undefined;// default state
	/**
	 * if retain goes to 0 :
	 * false to not destroy,
	 * 0 to sync auto destroy
	 * Ms to autodestroy after tm ms if no retain has been called
	 * @type {boolean|Int}
	 */
	static persistenceTm = false;
	
	/**
	 * Constructor, will build a rescope store
	 *
	 * (scope, {require,use,apply,state, data})
	 * (scope)
	 *
	 * @param scope {object} scope where to find the other stores (default : static
	 *     staticScope )
	 * @param keys {Array} (passed to Store::map) Ex : ["session", "otherNamedStore:key",
	 *     otherStore.as("otherKey")]
	 */
	constructor() {
		super();
		let argz         = [...arguments],
		    _static      = this.constructor,
		    scope        = argz[0] instanceof Scope
		                   ? argz.shift()
		                   : _static.scope ? Scope.getScope(_static.scope)
		                                   : is.string(argz[0])
		                                     ? Scope.getScope(argz.shift())
		                                     : _static.staticScope,
		    cfg          = argz[0] && !is.array(argz[0]) && !is.string(argz[0])
		                   ? argz.shift()
		                   : {},
		    taskQueue    = is.array(argz[0]) ? argz.shift() : null,
		    name         = cfg.name || _static.name,
		    watchs       = cfg.use || [],
		    apply        = cfg.apply || null,
		    initialState = _static.state || _static.initialState || _static.defaultState;
		
		this._uid = cfg._uid || shortid.generate();
		
		this.__retains    = { all: 0 };
		this.__locks      = { all: 0 };
		this._onStabilize = [];
		
		// autoDestroyTm
		this._autoDestroy   = !!this._persistenceTm;
		this._persistenceTm = cfg.persistenceTm || _static.persistenceTm || (cfg.autoDestroy || _static.autoDestroy) && 5;
		this._cfg           = cfg;
		
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
		
		// standardized scope access
		this.$scope    = this.scopeObj;
		this.$stores   = this.scopeObj.stores;
		this.$actions  = this.scopeObj.actions;
		this.$dispatch = this.scopeObj.dispatch.bind(this.scopeObj);
		
		this._rev     = this.constructor._rev || 0;
		this._revs    = {};
		this.stores   = {};
		this._require = [];
		this._sources = [name];
		
		// register source stores
		if ( is.array(_static.use) ) {
			this._use = [...watchs, ...(_static.use || []).map(
				key => {
					let ref = key.match(/^(\!?)([^\:]*)(?:\:(.*))?$/);
					if ( ref[1] ) {
						let ref2 = ref[2].split('.');
						this._require.push(ref[3] || ref2[ref2.length - 1]);// require check value of the aliased
					                                                        // imported value
						return key.substr(1);
					}
					return key;
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
		this._changesSW = initialState || {};
		this.state      = initialState && {};
		
		if ( apply )
			this.apply = apply;
		
		/**
		 * Initial state isn't fully initialized ( childs constructors can set it )
		 * Scope based instance have taskQueue to delay init synchronously, if not
		 * present we use setTimeout
		 */
		if ( taskQueue ) {
			taskQueue.push(this._afterConstructor.bind(this))
		}
		else
			setTimeout(this._afterConstructor.bind(this))
	}
	
	/**
	 * Get the incoming state ( for immediate state relative actions )
	 * @returns {{}|*}
	 */
	get nextState() {
		return this._changesSW && { ...this.state, ...this._changesSW } || this.state;
	}
	
	_afterConstructor() {
		let cfg          = this._cfg,
		    _static      = this.constructor,
		    snapshot     = this.restore(undefined, true),
		    initialState = this.state,
		    initialData  = this.data,
		    applied;
		{
			
			if ( initialData )
				this.data = initialData;
			else if ( _static.data !== undefined )
				this.data = { ..._static.data };
			else if ( cfg.hasOwnProperty("data") )
				this.data = cfg.data;
			
			if ( cfg.hasOwnProperty("state") && cfg.state !== undefined )
				initialState = { ...initialState, ...cfg.state };
			
			if ( this.data === undefined ) {
				if ( initialState || this._use.length ) {// sync apply
					this._changesSW = {
						...this._changesSW,
						...(initialState || {}),
						...this.$scope.map(this, this._use)
					};
					this.state      = {};
					if ( this.shouldApply(this._changesSW) && this.data === undefined ) {
						this.data       = this.apply(this.data, this._changesSW, this._changesSW);
						applied         = true;
						this.state      = this._changesSW;
						this._changesSW = {};
					}
				}
			}
			else {
				applied         = true;
				this.state      = {// assume this state is sync with initial data
					...this._changesSW,
					...(initialState || {}),
					...this.$scope.map(this, this._use)
				}
				this._changesSW = {};
			}
		}
		if ( (this.data !== undefined || applied) && !this.__locks.all ) {
			this._stable = true;
			this._rev++;
		}
		else {
			this._stable = false;
			if ( !_static.managed && !this.state && (!this._use || !this._use.length) ) {
				console.warn("ReScope store '", this.name, "' have no initial data, state or use. It can't stabilize...");
			}
		}
		!this._stable && this.emit('unstable', this.state);
		
	}
	
	/**
	 * Overridable method to know if a data change should be propag to the listening
	 * stores & components
	 */
	shouldPropag( nDatas ) {
		return true;
	}
	
	/**
	 * Overridable method to choose if this store should be serialized,
	 * If not it will be applied normally when restoring
	 * @returns {boolean}
	 */
	shouldSerialize() {
		return true;
	}
	
	hasDataChange( nDatas ) {
		let _static = this.constructor, r,
		    cDatas  = this.data;
		r           = !cDatas && nDatas || cDatas !== nDatas;
		!r && cDatas && Object.keys(cDatas).forEach(
			( key ) => {
				r = r || (nDatas
				          ? cDatas[key] !== nDatas[key]
				          : cDatas && cDatas[key])
			}
		);
		!r && nDatas && Object.keys(nDatas).forEach(
			( key ) => {
				r = r || (nDatas
				          ? cDatas[key] !== nDatas[key]
				          : cDatas && cDatas[key])
			}
		);
		return r;
	}
	
	/**
	 * Overridable method to know if a state change should be applied
	 */
	shouldApply( state = this.state ) {
		let _static = this.constructor;
		
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
	 * If state or lastPublicState are simple hash maps apply will return {...data,
	 * ...state} if not it will return the last private state
	 * @param data
	 * @param state
	 * @returns {*}
	 */
	apply( data, state, changes ) {
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
			return;
		
		this._stabilizer = TaskSequencer.pushTask(this, 'pushState');
	}
	
	/**
	 * Walk n get
	 * @param path
	 * @param i
	 * @param obj
	 * @returns {*|{}}
	 */
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
	 * Set & Push the result data to followers if stable
	 * @param cb
	 */
	push( data, force, cb ) {
		cb    = force === true ? cb : force;
		force = force === true;
		if ( !force &&
			(
				!this.hasDataChange(data)
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
		
		this.data = data;
		this.wait();
		this.release(cb);
		
	}
	
	/**
	 * Call the apply fn using the current accumulated state update then, push the
	 * resulting data if stable
	 * @param force
	 */
	pushState( force ) {
		
		if ( !force && !this._changesSW && this.data )
			return;
		
		let nextState = this._nextState || { ...this.state, ...(this._changesSW || {}) },
		    nextData  = this.apply(this.data, nextState, this._changesSW);
		
		this._stabilizer = null;
		this.state       = nextState;
		this._changesSW  = null;
		
		if ( !force &&
			(
				!this.hasDataChange(nextData)
			)
		) {
			if ( !this.__locks.all ) {
				let stable   = this._stable;
				this._stable = true;
				!stable && this.emit('stable', this.state, this.data);
				this._stabilizer = null;
			}
			return false;
		}
		
		this.data = nextData;
		this.wait();
		this.release();
		
	}
	
	/**
	 * Add 'pState' to the current accumulated state updates
	 * & wait source stores stabilization before pushing these state updates
	 * @param pState
	 * @param cb
	 */
	setState( pState, cb, sync ) {
		let i       = 0, change,
		    changes = this._changesSW = this._changesSW || {};
		for ( let k in pState )
			if ( !this.state
				|| changes.hasOwnProperty(k)// todo
				&& (
					pState[k] !== changes[k]
				) || pState.hasOwnProperty(k)
				&& (
					pState[k] !== this.state[k]
					//||
					//(this.state[k] && pState[k] && (pState[k]._rev != this._revs[k]))// rev/hash update
				) ) {
				change        = true;
				//this._revs[k] = pState[k] && pState[k]._rev || true;
				changes[k]    = pState[k];
			}
		
		this._nextState = { ...this.state, ...changes };
		if ( !this.shouldApply(this._nextState) ) {
			return;
		}
		
		if ( sync ) {
			this.pushState();
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
	 * Update the current state & push it
	 * @param pState
	 * @param cb
	 */
	setStateSync( pState ) {
		let i       = 0, change,
		    changes = this._changesSW = this._changesSW || {};
		for ( let k in pState )
			if ( !this.state || pState.hasOwnProperty(k)
				&& (
					pState[k] !== this.state[k]
					//||
					//(this.state[k] && pState[k] && (pState[k]._rev != this._revs[k]))// rev/hash update
				) ) {
				change        = true;
				this._revs[k] = pState[k] && pState[k]._rev || true;
				changes[k]    = pState[k];
			}
		this.shouldApply({ ...(this.state || {}), ...changes }) && this.pushState();
		return this.data;
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
	 * is complete (all requiered keys are here)
	 * @returns bool
	 */
	isComplete( state = this.state ) {
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
	 * Serialize state & data with sources refs
	 * @returns bool
	 */
	serialize( cfg = {}, output = {} ) {
		
		let sId        = cfg.parentAlias || this.scopeObj._id,
		    refsCount  = 0,
		    refs       =
			    !cfg.norefs && is.array(this._use) && this._use.reduce(
			    ( map, key ) => {
				    let ref   = this.$scope.parseRef(key),
				        store = this.$stores[ref.storeId];
				    if ( store && Store.isStore(store) && !store.scopeObj._.isLocalId )
					    refsCount++, map[ref.alias] = ref.path;
				
				    return map;
			    }, {}
			    ),
		    state      = this.state || {},
		    persistent = this.shouldSerialize();
		
		if ( !persistent ) {
			keyWalknSet(
				output,
				(sId + '/' + this.name),
				{
					dataRefs: cfg.dataRefs,
					refs
				}
			);
			return output;
		}
		
		let
			stateKeys   = Object.keys(state) || [],
			stateRefs   = stateKeys.map(k => state[k]),
			inRefsCount = 0,
			dataRefs    = cfg.dataRefs || {},
			inRefs      =
				!cfg.norefs && this.data && (Object.keys(this.data).reduce(
				( map, key ) => {
					let ref = stateRefs.indexOf(this.data[key])
					if ( ref != -1 )
						inRefsCount++, map[key] = stateKeys[ref];
					return map;
				}, {}
				)),
			snap        = {
				dataRefs: cfg.dataRefs,
				state   : state &&
					(
						cfg.norefs
						? { ...state }
						: Object.keys(state).reduce(( h, k ) => (!refs[k] && (h[k] = state[k]), h), {})
					),
				data    : (
						this.data &&
						this.data.__proto__ === objProto ?
						Object
							.keys(this.data)
							.reduce(
								( h, k ) => {
									if ( !inRefs[k] && !dataRefs[k] ) {
										h[k] = this.data[k];
										inRefsCount++;
									}
									return h
								},
								{}
							)
						                                 :
						(is.bool(this.data)
							|| is.number(this.data)
							|| is.string(this.data)) && this.data
					)
					|| undefined
				
			};
		
		refs && refsCount && (snap.refs = refs);
		inRefs && inRefsCount && (
			snap.inRefs = inRefs);
		
		
		keyWalknSet(
			output,
			(sId + '/' + this.name),
			snap
		);
		return output;
	}
	
	/**
	 * restore state & data
	 * @returns bool
	 */
	restore( snapshot, immediate ) {
		snapshot = snapshot
			&& keyWalknGet(snapshot, this.scopeObj._id + '/' + this.name)
			|| this.$scope.takeSnapshotByKey(this.scopeObj._id + '/' + this.name);
		
		if ( !snapshot )
			return;
		
		if ( snapshot ) {
			
			if ( !this.isStable() && !immediate )
				this.then(() => restore(snapshot));
			
			this.state = { ...snapshot.state };
			snapshot.refs && Object.keys(snapshot.refs).forEach(
				( key ) => {//todo
					this.state[key] = this.$scope.retrieve(snapshot.refs[key]);
				}
			)
			
			
			if ( snapshot.inRefs === true ) {
				this.data = { ...this.state };
			}
			else {
				this.data = snapshot.data;
				snapshot.inRefs && Object.keys(snapshot.inRefs).forEach(
					( key ) => {//todo
						this.data[key] = this.state[snapshot.inRefs[key]];
						//else
						//    console.warn('not found : ', key, snap && snap.refs[ key ])
					}
				)
			}
			if ( snapshot.dataRefs ) {
				this.data = this.data || {};
				Object.keys(snapshot.dataRefs).forEach(
					( key ) => {//todo
						this.$scope.restoreRefPath(snapshot.dataRefs[key]);
						this.data[key] = this.$scope.retrieve(snapshot.dataRefs[key]);
					}
				)
			}
			
			
		}
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
	 * Un bind this store off the given component-key
	 * @param obj
	 * @param key
	 * @returns {Array.<*>}
	 */
	unBind( obj, key, path ) {
		let followers = this._followers,
		    i         = followers && followers.length;
		while ( followers && i-- )
			if ( followers[i][0] === obj && followers[i][1] === key && followers[i][2] === path )
				return followers.splice(i, 1);
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
	 * Add a lock so the store will not propag it data untill release() is call
	 * @param previous {Store|number|Array} @optional wf to wait, releases to wait or
	 *     array of stuff to wait
	 * @returns {this}
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
	 * Decrease locks for this store, if it reach 0 ,
	 * it will be propagated to the followers,
	 * then, all stuff passed to "then" call back will be exec / released
	 * @param desync
	 * @returns {*}
	 */
	release( reason, cb ) {
		let _static = this.constructor, me = this;
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
	
	propag( data ) {
		this.emit('update', data);
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
				throw new Error("RS : Dispose more than retaining on store '" + this.name + "' : " + reason);
			
			this.__retains[reason]--;
		}
		if ( this.__retains.all == 0 )
			throw new Error("RS : Dispose more than retaining on store " + this.name);
		
		this.__retains.all--;
		
		if ( !this.__retains.all ) {
			if ( this._persistenceTm ) {
				this._destroyTM && clearTimeout(this._destroyTM);
				this._destroyTM = setTimeout(
					e => {
						this._destroyTM = null;
						//this.then(s => {
						!this.__retains.all && !this.dead && this.destroy()
						//});
					},
					this._persistenceTm
				);
			}
			else {
				//this.then(s =>
				(!this.__retains.all && !this.dead && this.destroy())
				//);
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

/**
 * get a static aliased reference of a store
 * @param {string} name
 * @returns {{store: Store, name: *}}
 */
Store.as = function ( name ) {
	return { store: this, name };
}

/**
 * @todo
 * Map all named stores in {keys} to the {object}'s state
 * Hook componentWillUnmount (for react comp) or destroy to unBind them automatically
 * @static
 * @param object {Object} target state aware object (React.Component|Store|...)
 * @param keys {Array} Ex : ["session", "otherStaticNamedStore:key",
 *     store.as('anotherKey')]
 */
Store.map = function ( cStore, keys, scope, origin, setInitial = false ) {
	let targetRevs     = cStore._revs || {};
	let targetScope    = cStore.stores || (cStore.stores = {});
	let initialOutputs = {};
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
			    store, _key;
			if ( key.store && key.name ) {
				alias = name = key.name;
				store = key.store;
			}
			else if ( is.fn(key) ) {
				name  = alias = key.name || key.defaultName;
				store = key;
			}
			else {
				_key  = key.match(/([^\.\:]+)((?:\.[^\.\:]+)*)(?:\:([^\.\:]+))?/);
				name  = _key[1];
				path  = _key[2] && _key[2].substr(1);
				store = scope.stores[_key[1]];
				alias = _key[3] || path && path.match(/([^\.]*)$/)[0] || _key[1];
			}
			if ( !store ) {
				let i = [];
				for ( let o in scope.stores )
					i.push(o)
				console.error("Not a mappable store item '" + name + "/" + alias + "' in " + (cStore.name || cStore) + ' !!', store, _key, scope.stores, i);
				return false;
			}
			if ( Scope.isScopeClass(store) ) scope._mount(name);
			if ( Scope.isScope(store) ) {
				store = scope._mount(key);
			}
			else if ( targetRevs[name] ) return false;// ignore dbl uses for now
			
			
			if ( is.fn(store) ) {
				scope._mount(name)
				scope.stores[name].bind(cStore, alias, setInitial, path);
			}
			else {
				store.bind(cStore, alias, setInitial, path);
			}
			
			// give initial store weight basing sources
			scope.stores[name]._sources && cStore._sources.push(...scope.stores[name]._sources);
			
			targetRevs[alias] = targetRevs[alias] || true;
			!targetScope[name] && (targetScope[name] = scope.stores[name]);
			if ( scope.stores[name].hasOwnProperty('data') )
				initialOutputs[name] = scope.data[name];
			return true;
		}
	);
	
	// ... @todo
	cStore.once('destroy', ( ...argz ) => {
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
					name  = alias = key.name || key.defaultName;
					store = scope.stores[name];
				}
				else {
					key   = key.match(/([^\.\:]+)((?:\.[^\.\:]+)*)(?:\:([^\.\:]+))?/);
					name  = key[1];
					path  = key[2] && key[2].substr(1);
					store = scope.stores[key[1]];
					alias = key[3] || path && path.match(/([^\.]*)$/)[0] || key[1];
				}
				
				store && !is.fn(store) && store.unBind(cStore, alias, path)
			}
		);
	})
	
	return initialOutputs;
};


Store.isStore      = Scope.isStore = function ( obj ) {
	return obj instanceof Store
}
Store.isStoreClass = Scope.isStoreClass = function ( obj ) {
	return Store.isPrototypeOf(obj) || obj === Store
}

export default Store;