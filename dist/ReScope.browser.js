/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _Scope = __webpack_require__(1);
	
	var _Scope2 = _interopRequireDefault(_Scope);
	
	var _Store = __webpack_require__(16);
	
	var _Store2 = _interopRequireDefault(_Store);
	
	var _scopable = __webpack_require__(19);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
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
	
	var $global = typeof window !== 'undefined' ? window : global;
	
	var RS = $global.___rescope || {};
	if ($global.___rescope) {
	    console.warn("ReScope is defined multiple times !! \nCheck you're packaging");
	} else {
	
	    $global.___rescope = RS;
	    _Scope2.default.Store = _Store2.default;
	    //RS.console         = console;
	    RS.Scope = _Scope2.default;
	    RS.Context = _Scope2.default;
	    RS.Store = _Store2.default;
	    RS.reScope = _scopable.reScope;
	    RS.scopeToState = _scopable.scopeToState;
	    RS.reScopeState = _scopable.scopeToState;
	    RS.addScopableType = _scopable.addScopableType;
	    RS.scopeRef = function scopeRef(map, key) {
	        map[key] = new _Scope2.default.scopeRef(map[key]);
	        return map;
	    };
	}
	exports.default = RS;
	module.exports = exports["default"];
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
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
	
	var is = __webpack_require__(2),
	    _require = __webpack_require__(4),
	    walknSet = _require.walknSet,
	    walknGet = _require.walknGet,
	    keyWalknSet = _require.keyWalknSet,
	    keyWalknGet = _require.keyWalknGet,
	    EventEmitter = __webpack_require__(5),
	    shortid = __webpack_require__(6),
	    __proto__push = function __proto__push(target, id, parent) {
		var fn = function fn() {};
		fn.prototype = parent ? new parent._[id]() : target[id] || {};
		target[id] = new fn();
		target._[id] = fn;
	},
	    openScopes = {},
	    SimpleObjectProto = {}.constructor;
	
	/**
	 * Base Scope object
	 */
	
	var Scope = function (_EventEmitter) {
		_inherits(Scope, _EventEmitter);
	
		_createClass(Scope, null, [{
			key: 'getScope',
			value: function getScope(scopes) {
				var skey = is.array(scopes) ? scopes.sort(function (a, b) {
					if (a.firstname < b.firstname) return -1;
					if (a.firstname > b.firstname) return 1;
					return 0;
				}).join('+') : scopes;
				return openScopes[skey] = openScopes[skey] || new Scope({}, { id: skey });
			}
		}, {
			key: 'stateMapToRefList',
	
	
			/**
	   * get a parsed reference list from stateMap
	   * @param _ref
	   * @returns {{storeId, path, alias: *, ref: *}}
	   */
			value: function stateMapToRefList(sm) {
				var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
				var _refs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
	
				var actions = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
				var path = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "";
	
				Object.keys(sm).forEach(function (key) {
					var cpath = path ? path + '.' + key : key;
					sm[key] instanceof Scope.scopeRef ? _refs.push(sm[key].path + ':' + cpath) : sm[key] && sm[key] instanceof Function ? actions[key] = sm[key] : sm[key] && sm[key].prototype instanceof Scope.Store ? _refs.push(sm[key].as(cpath)) : state[cpath] = sm[key];
					//: this.stateMapToRefList(sm[key], _refs, path + '.' + key)
				});
				return _refs;
			} // if > 0, will wait 'persistenceTm' ms before destroy
			// when
			// dispose reach 0
	
		}]);
	
		// all active scopes
	
	
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
		function Scope(storesMap) {
			var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
			    parent = _ref2.parent,
			    upperScope = _ref2.upperScope,
			    key = _ref2.key,
			    id = _ref2.id,
			    snapshot = _ref2.snapshot,
			    state = _ref2.state,
			    data = _ref2.data,
			    _ref2$incrementId = _ref2.incrementId,
			    incrementId = _ref2$incrementId === undefined ? !!key : _ref2$incrementId,
			    persistenceTm = _ref2.persistenceTm,
			    autoDestroy = _ref2.autoDestroy,
			    rootEmitter = _ref2.rootEmitter,
			    boundedActions = _ref2.boundedActions;
	
			_classCallCheck(this, Scope);
	
			var _this = _possibleConstructorReturn(this, (Scope.__proto__ || Object.getPrototypeOf(Scope)).call(this));
	
			var _ = {
				keyPID: upperScope && upperScope._id || parent && parent._id || shortid.generate(),
				key: key,
				incrementId: incrementId,
				baseId: id
			},
			    keyIndex;
	
			id = id || key && _.keyPID + '>' + key;
	
			_.isLocalId = !id;
	
			//if ( parent && key ) {
			//    keyIndex = parent._.childScopes.find(ctx=>(ctx._id==id));
			//    if ( keyIndex == -1 ) keyIndex = parent._.seenChilds;
			//    keyIndex++;
			//    if ( keyIndex )
			//        id = id + '[' + keyIndex + ']';
			//}
	
			id = id || "_____" + shortid.generate();
	
			if (openScopes[id] && !incrementId) {
				var _ret;
	
				// overwrite existing scope
				_this._id = id;
				openScopes[id].register(storesMap);
				return _ret = openScopes[id], _possibleConstructorReturn(_this, _ret);
			} else if (openScopes[id] && incrementId) {
				// generate key id
				var i = -1;
				while (openScopes[id + '[' + ++i + ']']) {}
				id = id + '[' + i + ']';
			}
	
			_this._id = id;
			_this._rev = 0;
			openScopes[id] = _this;
			_.persistenceTm = persistenceTm || _this.constructor.persistenceTm;
	
			_this.actions = {};
			_this.stores = {};
			_this.state = {};
			_this.data = {};
	
			_this.parent = parent;
			_this._ = _;
			_this._autoDestroy = autoDestroy;
	
			if (parent && parent.dead) throw new Error("Can't use a dead scope as parent !");
	
			__proto__push(_this, 'actions', parent);
			__proto__push(_this, 'stores', parent);
			__proto__push(_this, 'state', parent);
			__proto__push(_this, 'data', parent);
	
			_this.sources = [];
			_.childScopes = [];
			_.childScopesList = [];
			_.unStableChilds = 0;
			_.seenChilds = 0;
	
			_this.__retains = { all: 0 };
			_this.__locks = { all: 1 };
	
			//_.snapshot        = snapshot;
			//_.snapshot        = snapshot;
			_._boundedActions = is.array(boundedActions) ? { test: boundedActions.includes.bind(boundedActions) } : boundedActions;
			_._listening = {};
			_._scope = {};
			_._mixed = [];
			_._mixedList = [];
			_.followers = [];
			if (parent) {
				parent.retain("isMyParent");
				if (!rootEmitter) {
					!parent._stable && _this.wait("waitingParent");
					parent.on(_._parentList = {
						'stable': function stable(s) {
							return _this.release("waitingParent");
						},
						'unstable': function unstable(s) {
							return _this.wait("waitingParent");
						},
						'update': function update(s) {
							return _this._propag();
						}
					});
				} else {
					parent.on(_._parentList = {
						'update': function update(s) {
							return _this._propag();
						}
					});
				}
				// this.register(parent.__scope, state, data);
			}
	
			_this.register(storesMap, state, data);
			_this.__locks.all--;
			_this._stable = !_this.__locks.all;
	
			if (parent) {
				parent._addChild(_this);
			}
	
			_this.restore(snapshot);
	
			if (autoDestroy) setTimeout(function (tm) {
				_this.retain("autoDestroy");
				_this.dispose("autoDestroy");
			});
	
			return _this;
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
	
	
		_createClass(Scope, [{
			key: 'mount',
			value: function mount(storesList, snapshot, state, data) {
				var _this2 = this;
	
				if (is.array(storesList)) {
					storesList.forEach(function (k) {
						return _this2._mount(k, snapshot, state, data);
					});
				} else {
					this._mount.apply(this, arguments);
				}
				return this;
			}
		}, {
			key: '_mount',
			value: function _mount(id, snapshot, state, data) {
				var ref = void 0,
				    snap = void 0;
	
				ref = this.parseRef(id);
	
				if (id == "$parent") return;
				if (!this._._scope[ref.storeId]) {
					var _parent;
	
					//ask mixed || parent
					if (this._._mixed.reduceRight(function (mounted, ctx) {
						return mounted || ctx._mount(id, snapshot, state, data);
					}, false) || !this.parent) return;
					return (_parent = this.parent)._mount.apply(_parent, arguments);
				} else {
					var store = this._._scope[ref.storeId],
					    taskQueue = [];
					if (is.rsStoreClass(store)) {
						this._._scope[ref.storeId] = new store(this, {
							//snapshot,
							name: ref.storeId,
							state: state,
							data: data
						}, taskQueue);
						while (taskQueue.length) {
							taskQueue.shift()();
						}
					} else if (is.rsScopeClass(store)) {
						store = this._._scope[ref.storeId] = new store({ $parent: this }, {
							key: ref.storeId,
							incrementId: true,
							upperScope: this
							//autoDestroy: true
							//parent: this
						});
						//this._._scope[ ref.storeId ].retain("scopedChildScope");
						//this._watchStore(ref.storeId);
						if (ref.path.length > 1) this._._scope[ref.storeId].mount(ref.path.slice(1).join('.'), snapshot, state, data);
						//else return this._._scope[ ref.storeId ];
					}
					if (is.rsStore(store)) {
						if (state !== undefined && data === undefined) store.setState(state);else if (state !== undefined) store.state = state;
	
						if (data !== undefined) store.push(data);
					}
					this._watchStore(ref.storeId);
				}
	
				return this._._scope[ref.storeId];
			}
		}, {
			key: '_watchStore',
			value: function _watchStore(id, state, data) {
				var _this3 = this;
	
				if (!this._._listening[id] && !is.fn(this._._scope[id])) {
					//if ( is.rsStore(this._._scope[ id ]) ) {
					!this._._scope[id]._autoDestroy && this._._scope[id].retain("scoped");
					!this._._scope[id].isStable() && this.wait(id);
					this._._scope[id].on(this._._listening[id] = {
						'destroy': function destroy(s) {
							delete _this3._._listening[id];
							_this3._._scope[id] = _this3._._scope[id].constructor;
						},
						'update': function update(s) {
							return _this3.propag();
						},
						'stable': function stable(s) {
							return _this3.release(id);
						},
						'unstable': function unstable(s) {
							return _this3.wait(id);
						}
					});
				}
				return true;
			}
	
			/**
	   * Mix targetCtx on this scope
	   * Mixed scope parents are NOT mapped
	   * @param targetCtx
	   */
	
		}, {
			key: 'mixin',
			value: function mixin(targetCtx) {
				var _this4 = this;
	
				var parent = this.parent,
				    lists = void 0;
	
				this._._mixed.push(targetCtx);
				targetCtx.retain("mixedTo");
				if (!targetCtx._stable) this.wait(targetCtx._id);
				this._._mixedList.push(lists = {
					'stable': function stable(s) {
						return _this4.release(targetCtx._id);
					},
					'unstable': function unstable(s) {
						return _this4.wait(targetCtx._id);
					},
					'update': function update(s) {
						return _this4._propag();
					}
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
	
				this._._mixed.forEach(function (ctx) {
					// push protos
					__proto__push(_this4, 'actions');
					__proto__push(_this4, 'stores');
					__proto__push(_this4, 'state');
					__proto__push(_this4, 'data');
					_this4.stores.__origin = "mixed " + ctx._id;
					// write mixed accessors
					ctx.relink(ctx._._scope, _this4, true, true);
				});
			}
	
			/**
	   * Register stores in storesMap & link them in the protos
	   * @param storesMap
	   * @param state
	   * @param data
	   */
	
		}, {
			key: 'register',
			value: function register(storesMap) {
				var _this5 = this;
	
				var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
				var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	
				this.relink(storesMap, this, false, false);
				Object.keys(storesMap).forEach(function (id) {
					if (id == "$parent") return;
					if (storesMap[id].singleton || is.fn(storesMap[id]) && (state[id] || data[id])) {
						_this5._mount(id, undefined, state[id], data[id]);
					} else if (state[id] || data[id]) {
						if (data[id]) {
							if (state[id]) _this5.stores[id].state = state[id];
							_this5.stores[id].push(data[id]);
						} else if (state[id]) {
							_this5.stores[id].setState(state[id]);
						}
					} else {
						_this5._watchStore(id);
					}
				});
			}
	
			/**
	   * Map srcCtx store's on targetCtx headers proto's
	   * @param srcCtx
	   * @param targetCtx
	   * @param state
	   * @param data
	   */
	
		}, {
			key: 'relink',
			value: function relink(srcCtx) {
				var targetCtx = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this;
	
				var _this6 = this;
	
				var external = arguments[2];
				var force = arguments[3];
	
				var lctx = targetCtx._.stores.prototype;
				Object.keys(srcCtx).forEach(function (id) {
					if (!force && targetCtx._._scope[id] === srcCtx[id] || targetCtx._._scope[id] && targetCtx._._scope[id].constructor === srcCtx[id]) return;
	
					if (!force && targetCtx._._scope[id]) {
						if (!external && !is.fn(targetCtx._._scope[id])) {
							console.info("Rescope Store : ", id, " already exist in this scope ! ( Hot switching the store )");
							var tmp = targetCtx._._scope[id];
							targetCtx._._scope[id] = targetCtx._._scope[id].constructor;
							_this6._mount(id, null, tmp.state);
							tmp.destroy();
							//targetCtx._._scope[ id ].__proto__ = tmp.__proto__;
						}
						if (!external && is.fn(targetCtx._._scope[id])) targetCtx._._scope[id] = srcCtx[id];
	
						return;
					} else if (!force && !external) _this6._._scope[id] = srcCtx[id];
	
					Object.defineProperty(lctx, id, {
						enumerable: true,
						configurable: true,
						get: function get() {
							return _this6._._scope[id];
						}
					});
					if (id == "$parent") return;
					Object.defineProperty(targetCtx._.state.prototype, id, {
						enumerable: true,
						configurable: true,
						get: function get() {
							return _this6._._scope[id] && _this6._._scope[id].state;
						},
						set: function set(v) {
							return _this6._mount(id, undefined, v);
						}
					});
					Object.defineProperty(targetCtx._.data.prototype, id, {
						enumerable: true,
						configurable: true,
						get: function get() {
							return _this6._._scope[id] && _this6._._scope[id].data;
						},
						set: function set(v) {
							return _this6._mount(id, undefined, undefined, v);
						}
					});
	
					var actions = srcCtx[id] instanceof Scope.Store ? srcCtx[id].constructor.actions : srcCtx[id].actions,
					    activeActions = targetCtx._.actions.prototype;
					if (is.rsScope(_this6._._scope[id].prototype)) _this6._mount(id);
					if (is.rsScope(_this6._._scope[id])) {
						activeActions[id] = _this6._._scope[id].actions;
					}
					if (!is.rsStore(_this6._._scope[id]) && !is.rsStoreClass(_this6._._scope[id])) return;
	
					actions && Object.keys(actions).forEach(function (act) {
						if (activeActions.hasOwnProperty(act)) activeActions[act].__targetStores++;else {
							activeActions[act] = _this6.dispatch.bind(_this6, act);
							activeActions[act].__targetStores = 1;
						}
					});
				});
			}
	
			/**
	   * Bind stores from this scope, his parents and mixed scope
	   *
	   * @param obj {React.Component|Store|function}
	   * @param key {string} stores keys to bind updates
	   * @param as
	   * @param setInitial {bool} false to not propag initial value (default : true)
	   */
	
		}, {
			key: 'bind',
			value: function bind(obj, key, as) {
				var _this7 = this;
	
				var setInitial = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
				var revMap = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
	
				var lastRevs = void 0,
				    data = void 0,
				    refKeys = void 0;
				if (key && !is.array(key)) key = [key];
	
				if (as === false || as === true) {
					setInitial = as;
					as = null;
				}
	
				refKeys = key.map(function (id) {
					return is.string(id) ? id : id.name;
				}).map(function (id) {
					return _this7.parseRef(id);
				});
	
				this._.followers.push([obj, key, as || undefined, lastRevs = refKeys.reduce(function (revs, ref) {
					revs[ref.storeId] = revs[ref.storeId] || {
						rev: 0,
						refs: []
					};
					revs[ref.storeId].refs.push(ref);
					return revs;
				}, revMap)]);
	
				this.mount(key);
				this.retainStores(Object.keys(lastRevs), 'listeners');
	
				if (setInitial && this._stable) {
					data = this.getUpdates(lastRevs);
					if (!data) return this;
					if (typeof obj != "function") {
						if (as) obj.setState(_defineProperty({}, as, data));else obj.setState(data);
					} else {
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
	
		}, {
			key: 'unBind',
			value: function unBind(obj, key, as) {
				var followers = this._.followers,
				    i = followers && followers.length;
				while (followers && i--) {
					if (followers[i][0] === obj && '' + followers[i][1] == '' + key && followers[i][2] == as) {
						this.disposeStores(Object.keys(followers[i][3]), 'listeners');
						return followers.splice(i, 1);
					}
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
	
		}, {
			key: 'map',
			value: function map(to, storesList) {
				var _this8 = this;
	
				var bind = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
				var revMap = arguments[3];
	
				var Store = this.constructor.Store;
				storesList = is.array(storesList) ? storesList : [storesList];
				var refList = storesList.map(this.parseRef);
				this.mount(storesList);
				if (bind && to instanceof Store) {
					Store.map(to, storesList, this, this, false);
				} else if (bind) {
					this.bind(to, storesList, undefined, false);
	
					var mixedCWUnmount = void 0,
					    unMountKey = to.isReactComponent ? "componentWillUnmount" : "destroy";
	
					if (to.hasOwnProperty(unMountKey)) {
						mixedCWUnmount = to[unMountKey];
					}
	
					to[unMountKey] = function () {
						delete to[unMountKey];
						if (mixedCWUnmount) to[unMountKey] = mixedCWUnmount;
	
						_this8.unBind(to, storesList);
						return to[unMountKey] && to[unMountKey].apply(to, arguments);
					};
				}
				return revMap && this.getUpdates(revMap) || refList.reduce(function (data, ref) {
					walknSet(data, ref.alias || ref.path, _this8.retrieve(ref.path));
					return data;
				}, {});
			}
	
			/**
	   * Get current data value from json path
	   * @param path
	   * @returns {string|*}
	   */
	
		}, {
			key: 'retrieve',
			value: function retrieve() {
				var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
	
				path = is.string(path) ? path.split('.') : path;
				return path && this.stores[path[0]] && this.stores[path[0]].retrieve && this.stores[path[0]].retrieve(path.slice(1));
			}
	
			/**
	   * Get current store from json path
	   * @param path
	   * @returns {string|*}
	   */
	
		}, {
			key: 'retrieveStore',
			value: function retrieveStore() {
				var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
	
				path = is.string(path) ? path.split('.') : path;
				return path && path.length && (path.length != 1 && this.stores[path[0]].retrieveStore ? this.stores[path[0]].retrieveStore(path.slice(1)) : path.length == 1 && this.stores[path[0]]);
			}
	
			/**
	   * Get or update storesRevMap's revisions
	   * @param storesRevMap
	   * @param local
	   * @returns {{}}
	   */
	
		}, {
			key: 'getStoresRevs',
			value: function getStoresRevs() {
				var storesRevMap = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
				var local = arguments[1];
	
				var ctx = this._._scope;
				if (!storesRevMap) {
					storesRevMap = {};
				}
				Object.keys(ctx).forEach(function (id) {
					if (id == "$parent") return;
					if (!is.fn(ctx[id])) {
						storesRevMap[id] = ctx[id]._rev;
					} else if (!storesRevMap.hasOwnProperty(id)) storesRevMap[id] = false;
				});
				if (!local) {
					this._._mixed.reduce(function (updated, ctx) {
						return ctx.getStoresRevs(storesRevMap), storesRevMap;
					}, storesRevMap);
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
	
		}, {
			key: 'getRefsUpdates',
			value: function getRefsUpdates(refs, revMap, output) {
				var _this9 = this;
	
				revMap = revMap || refs.map(function (id) {
					return is.string(id) ? id : id.name;
				}).map(function (id) {
					return _this9.parseRef(id);
				}).reduce(function (revs, ref) {
					revs[ref.storeId] = revs[ref.storeId] || {
						rev: 0,
						refs: []
					};
					revs[ref.storeId].refs.push(ref);
					return revs;
				}, {});
	
				return this.getUpdates(revMap, output);
			}
	
			/**
	   * Get or update output basing storesRevMap's revisions.
	   * If a store in 'storesRevMap' was updated; add it to 'output' & update storesRevMap
	   * @todo: optim / use protos
	   * @param storesRevMap
	   * @param output
	   * @param updated
	   * @returns {*|{}}
	   */
	
		}, {
			key: 'getUpdates',
			value: function getUpdates(storesRevMap, output, updated) {
				var _this10 = this;
	
				output = output || {};
				storesRevMap = storesRevMap || this._getRevMap();
				Object.keys(storesRevMap).forEach(function (id) {
					var store = _this10.stores[id];
					storesRevMap[id] = storesRevMap[id] || { rev: 0, refs: [] };
	
					if (store && is.fn(store)) {
						updated = true;
						output[id] = undefined;
					} else if (store && store._rev > storesRevMap[id].rev) {
						storesRevMap[id].rev = store._rev;
						output[id] = store.data;
						updated = true;
					}
				});
				return updated && output;
			}
	
			/**
	   * Recursively get all stores revs
	   * @param childs
	   * @returns {Array}
	   * @private
	   */
	
		}, {
			key: '_getRevMap',
			value: function _getRevMap() {
				var storesRevMap = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
				var ctx = this._._scope;
				Object.keys(ctx).forEach(function (id) {
					if (id == "$parent" || storesRevMap[id]) return;
					storesRevMap[id] = { rev: ctx[id]._rev, refs: [] };
				});
				this._._mixed.reduceRight(function (storesRevMap, ctx) {
					return ctx._getRevMap(storesRevMap);
				}, storesRevMap);
				this.parent && this.parent._getRevMap(storesRevMap);
				return storesRevMap;
			}
	
			/**
	   * Recursively get all child scopes
	   * @param childs
	   * @returns {Array}
	   * @private
	   */
	
		}, {
			key: '_getAllChilds',
			value: function _getAllChilds() {
				var childs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	
				childs.push.apply(childs, _toConsumableArray(this._.childScopes));
				this._.childScopes.forEach(function (ctx) {
					ctx._getAllChilds(childs);
				});
				return childs;
			}
	
			/**
	   * Serialize all active stores state & data in every childs & mixed scopes
	   *
	   * Scopes without key or id are ignored
	   * @param output
	   * @returns {{}}
	   */
	
		}, {
			key: 'serialize',
			value: function serialize() {
				var cfg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
				var output = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
				var ctx = this._._scope,
				    _ref3 = this._,
				    baseId = _ref3.baseId,
				    key = _ref3.key,
				    keyPID = _ref3.keyPID,
				    incrementId = _ref3.incrementId,
				    alias = cfg.alias,
				    parentAlias = cfg.parentAlias,
				    sid = key ? (parentAlias || keyPID) + '>' + key : alias || parentAlias && parentAlias + '/' + baseId || this._id;
	
				//alias = alias || baseId;
				return this.serialize_ex(cfg, output, sid, alias, ["$parent"]);
			}
		}, {
			key: 'serialize_ex',
			value: function serialize_ex() {
				var cfg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
				var output = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
				var sid = arguments[2];
	
				var _this11 = this;
	
				var alias = arguments[3];
				var exclude = arguments[4];
				var ctx = this._._scope,
				    _ref4 = this._,
				    baseId = _ref4.baseId,
				    key = _ref4.key,
				    keyPID = _ref4.keyPID,
				    incrementId = _ref4.incrementId,
				    _cfg$withChilds = cfg.withChilds,
				    withChilds = _cfg$withChilds === undefined ? true : _cfg$withChilds,
				    withParents = cfg.withParents,
				    _cfg$withMixed = cfg.withMixed,
				    withMixed = _cfg$withMixed === undefined ? true : _cfg$withMixed,
				    norefs = cfg.norefs,
				    parentAlias = cfg.parentAlias,
				    _cfg$aliases = cfg.aliases,
				    aliases = _cfg$aliases === undefined ? {} : _cfg$aliases;
	
	
				if (keyWalknGet(output, sid)) {
					if (!incrementId) // done
						return output;else if (incrementId) {
						// generate key id
						var i = -1;
						while (keyWalknGet(output, sid + '[' + ++i + ']')) {}
						sid = sid + '[' + i + ']';
					}
				}
				//@todo : better serialize method
				keyWalknSet(output, sid, {});
	
				Object.keys(ctx).forEach(function (id) {
					if (exclude.includes(id) || is.rsStoreClass(ctx[id]) || is.rsScopeClass(ctx[id])) return;
	
					ctx[id].serialize(_extends({}, cfg, { parentAlias: sid }), output);
				});
	
				//withParents && this.parent && this.parent.serialize({
				//	                                                    withChild  : false,
				//	                                                    withParents: true,
				//	                                                    withMixed,
				//	                                                    norefs
				//                                                    }, output);
	
				withChilds && this._.childScopes.forEach(function (ctx) {
					!ctx._.isLocalId && ctx.serialize({
						withChild: true,
						withParents: false,
						parentAlias: sid,
						withMixed: withMixed,
						norefs: norefs
					}, output);
				});
	
				withMixed && this._._mixed.forEach(function (ctx) {
					!ctx._.isLocalId && ctx.serialize({
						withChild: false,
						withParents: false,
						withMixed: withMixed,
						norefs: norefs
					}, output);
				});
	
				if (alias) {
					output = Object.keys(output).reduce(function (h, k) {
						return h[k === _this11._id ? alias : k] = output[k], h;
					}, {});
				}
				return output;
			}
	
			/**
	   * Restore state & data from the serialize fn
	   * @param snapshot
	   * @param force
	   */
	
		}, {
			key: 'restore',
			value: function restore(snapshot) {
				var _this12 = this;
	
				var cfg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
				var force = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : is.bool(cfg) && cfg;
	
				var ctx = this._._scope,
				    snap = void 0;
	
				if (snapshot && cfg && cfg.alias && cfg.alias != this._id) {
					snap = _extends({}, snapshot, _defineProperty({}, this._id, snapshot[cfg.alias]));
					delete snap[cfg.alias];
					snapshot = snap;
				}
				snapshot = snapshot && keyWalknGet(snapshot, this._id) || this.takeSnapshotByKey(this._id);
	
				if (!snapshot) return;
	
				this._.snapshot = _extends({}, snapshot);
	
				snap = snapshot['/'];
				snapshot['/'] = _extends({}, snap);
				snap && Object.keys(snap).forEach(function (name) {
					if (name == "$parent") return;
	
					if (ctx[name]) {
	
						if (force && !is.fn(ctx[name])) ctx[name].destroy();
	
						_this12._mount(name); // quiet
					}
				});
	
				this._._mixed.forEach(function (ctx) {
					!ctx._.isLocalId && ctx.restore(undefined, force);
				});
	
				this._.childScopes.forEach(function (ctx) {
					!ctx._.isLocalId && ctx.restore(undefined, force);
				});
			}
		}, {
			key: 'getSnapshotByKey',
			value: function getSnapshotByKey(key, local) {
				// only have the local snap
				if (this._.snapshot && key.startsWith(this._id)) {
					var obj = keyWalknGet(this._.snapshot, key.substr(this._id.length));
					//if ( obj ) {
					//    this.deleteSnapshotByKey(key);
					//}
					return obj;
				} else return !local && this.parent && this.parent.getSnapshotByKey(key) || this.stores.$parent && this.stores.$parent.getSnapshotByKey(key);
			}
		}, {
			key: 'getSnapshotByKeyExt',
			value: function getSnapshotByKeyExt(snapshot, key, local) {
				// only have the local snap
				if (snapshot) {
					var obj = keyWalknGet(snapshot, key);
					return obj;
				}
			}
		}, {
			key: 'takeSnapshotByKey',
			value: function takeSnapshotByKey(key, local) {
				if (this._.snapshot && key.startsWith(this._id)) {
					var obj = keyWalknGet(this._.snapshot, key.substr(this._id.length));
					if (obj) {
						this.deleteSnapshotByKey(key, true);
					}
					return obj;
				} else return !local && this.parent && this.parent.takeSnapshotByKey(key) || this.stores.$parent && this.stores.$parent.takeSnapshotByKey(key);
			}
		}, {
			key: 'deleteSnapshotByKey',
			value: function deleteSnapshotByKey(key, local) {
				if (this._.snapshot && key.startsWith(this._id)) {
					var obj = keyWalknGet(this._.snapshot, key.substr(this._id.length).replace(/^(.*[\>|\/])[^\>|\/]+$/ig, '$1'));
					if (obj) delete obj[key.replace(/^.*[\>|\/]([^\>|\/]+)$/ig, '$1')];
				}
				return !local && this.parent && this.parent.deleteSnapshotByKey(key) || this.stores.$parent && this.stores.$parent.deleteSnapshotByKey(key);
			}
		}, {
			key: 'setState',
			value: function setState(pState) {
				var _this13 = this;
	
				Object.keys(pState).forEach(function (k) {
					return _this13.state[k] = pState[k];
				});
			}
	
			/**
	   * get a parsed reference
	   * @param _ref
	   * @returns {{storeId, path, alias: *, ref: *}}
	   */
	
		}, {
			key: 'parseRef',
			value: function parseRef(_ref) {
				if (typeof _ref !== 'string') {
					this.register(_defineProperty({}, _ref.name, _ref.store));
					_ref = _ref.name;
				}
				var ref = _ref.split(':');
				ref[0] = ref[0].split('.');
				return {
					storeId: ref[0][0],
					path: ref[0],
					alias: ref[1] || ref[0][ref[0].length - 1],
					ref: _ref
				};
			}
	
			/**
	   * Dispatch an action to the top parent & mixed scopes, in all stores
	   *
	   * @param action
	   * @param data
	   * @returns {Scope}
	   */
	
		}, {
			key: 'dispatch',
			value: function dispatch(action) {
				var _this14 = this,
				    _parent2;
	
				for (var _len = arguments.length, argz = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
					argz[_key - 1] = arguments[_key];
				}
	
				if (this.dead) {
					console.warn("Dispatch was called on a dead scope, check you're async functions in this stack...", new Error().stack);
					return;
				}
				var bActs = this._._boundedActions;
				Object.keys(this._._scope).forEach(function (id) {
					var _$_scope$id;
	
					if (id == "$parent") return;
					if (!is.fn(_this14._._scope[id])) (_$_scope$id = _this14._._scope[id]).trigger.apply(_$_scope$id, [action].concat(argz));
				});
	
				if (bActs && bActs.test(action)) return;
	
				this._._mixed.forEach(function (ctx) {
					return ctx.dispatch.apply(ctx, [action].concat(argz));
				});
				this.parent && (_parent2 = this.parent).dispatch.apply(_parent2, [action].concat(argz));
				return this;
			}
	
			//
	
		}, {
			key: 'trigger',
			value: function trigger() {
				this.dispatch.apply(this, arguments);
			}
	
			/**
	   * once('stable', cb)
	   * @param obj {React.Component|Store|function)
	   * @param key {string} optional key where to map the public state
	   */
	
		}, {
			key: 'then',
			value: function then(cb) {
				var _this15 = this;
	
				if (this._stable) return cb(this.data);
				this.once('stable', function (e) {
					return cb(_this15.data);
				});
			}
	
			/**
	   * Call retain on the scoped stores basing given
	   *
	   * @param stores
	   * @param reason
	   */
	
		}, {
			key: 'retainStores',
			value: function retainStores() {
				var _this16 = this;
	
				var stores = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
				var reason = arguments[1];
	
				//stores.forEach(
				//    id => ( ( !this.stores[ id ] || !this.stores[ id ].retain ) && console.warn(id, reason) )
				//)
				stores.forEach(function (id) {
					return _this16.stores[id] && _this16.stores[id].retain && _this16.stores[id].retain(reason);
				});
			}
	
			/**
	   * Call retain on the scoped stores
	   *
	   * @param stores
	   * @param reason
	   */
	
		}, {
			key: 'disposeStores',
			value: function disposeStores() {
				var _this17 = this;
	
				var stores = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
				var reason = arguments[1];
	
				stores.forEach(function (id) {
					return _this17.stores[id] && _this17.stores[id].dispose && _this17.stores[id].dispose(reason);
				});
			}
	
			/**
	   * Keep the scope unstable until release is called
	   * @param reason
	   */
	
		}, {
			key: 'wait',
			value: function wait(reason) {
				//console.log("wait", reason);
				this._stable && !this.__locks.all && this.emit("unstable", this);
				this._stable = false;
				this.__locks.all++;
				if (reason) {
					this.__locks[reason] = this.__locks[reason] || 0;
					this.__locks[reason]++;
				}
			}
	
			/**
	   * Stabilize the scope if no more locks remain (wait fn)
	   * @param reason
	   */
	
		}, {
			key: 'release',
			value: function release(reason) {
				var _this18 = this;
	
				if (reason) {
					if (this.__locks[reason] == 0) console.error("Release more than locking !", reason);
					this.__locks[reason] = this.__locks[reason] || 0;
					this.__locks[reason]--;
				}
				if (!reason && this.__locks.all == 0) console.error("Release more than locking !");
	
				this.__locks.all--;
				if (!this.__locks.all) {
					this._.stabilizerTM && clearTimeout(this._.stabilizerTM);
	
					this._.stabilizerTM = setTimeout(function (e) {
						_this18._.stabilizerTM = null;
						if (_this18.__locks.all) return;
	
						_this18._.propagTM && clearTimeout(_this18._.propagTM);
						_this18._rev++;
						_this18._stable = true;
						_this18.emit("stable", _this18);
	
						!_this18.dead && _this18._propag(); // stability can induce destroy
					});
				}
			}
	
			/**
	   * Propag stores updates basing theirs last updates
	   */
	
		}, {
			key: 'propag',
			value: function propag() {
				var _this19 = this;
	
				this._.propagTM && clearTimeout(this._.propagTM);
				this._.propagTM = setTimeout(function (e) {
					_this19._.propagTM = null;
					_this19._propag();
				}, 2);
			}
		}, {
			key: '_propag',
			value: function _propag() {
				var _this20 = this;
	
				if (this._.followers.length) this._.followers.forEach(function (_ref5) {
					var obj = _ref5[0],
					    key = _ref5[1],
					    as = _ref5[2],
					    lastRevs = _ref5[3],
					    remaps = _ref5[3];
	
					var data = _this20.getUpdates(lastRevs);
					if (!data) return;
					//console.log(data, lastRevs)
					if (typeof obj != "function") {
						//console.log("setState ",obj, Object.keys(data))
						if (as) obj.setState(_defineProperty({}, as, data));else obj.setState(data);
					} else {
						obj(data, lastRevs && [].concat(_toConsumableArray(lastRevs)) || "no revs");
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
	
		}, {
			key: 'isStable',
			value: function isStable() {
				return this._stable;
			}
		}, {
			key: '_addChild',
			value: function _addChild(ctx) {
				var _this21 = this;
	
				this._.childScopes.push(ctx);
				this._.seenChilds++;
				var lists = {
					'stable': function stable(s) {
						_this21._.unStableChilds--;
						if (!_this21._.unStableChilds) _this21.emit("stableTree", _this21);
					},
					'unstable': function unstable(s) {
						_this21._.unStableChilds++;
						if (1 == _this21._.unStableChilds) _this21.emit("unstableTree", _this21);
					},
					'stableTree': function stableTree(s) {
						_this21._.unStableChilds--;
						if (!_this21._.unStableChilds) _this21.emit("stableTree", _this21);
					},
					'unstableTree': function unstableTree(s) {
						_this21._.unStableChilds++;
						if (1 == _this21._.unStableChilds) _this21.emit("unstableTree", _this21);
					},
					'destroy': function destroy(ctx) {
						if (ctx._.unStableChilds) _this21._.unStableChilds--;
						if (!ctx.isStable()) _this21._.unStableChilds--;
	
						if (!_this21._.unStableChilds) _this21.emit("stableTree", _this21);
					}
				},
				    wasStable = this._.unStableChilds;
				//!ctx.isStable() && console.warn('add unstable child');
				!ctx.isStable() && this._.unStableChilds++;
				ctx._.unStableChilds && this._.unStableChilds++;
				this._.childScopesList.push(lists);
				if (!wasStable && this._.unStableChilds) this.emit("unstableTree", this);
				ctx.on(lists);
			}
		}, {
			key: '_rmChild',
			value: function _rmChild(ctx) {
				var i = this._.childScopes.indexOf(ctx),
				    wasStable = this._.unStableChilds;
				if (i != -1) {
					this._.childScopes.splice(i, 1);
					!ctx.isStable() && this._.unStableChilds--;
					ctx._.unStableChilds && this._.unStableChilds--;
					ctx.un(this._.childScopesList.splice(i, 1)[0]);
					if (wasStable && !this._.unStableChilds) this.emit("stableTree");
				}
			}
		}, {
			key: 'retain',
			value: function retain(reason) {
				this.__retains.all++;
				//console.log("retain", this._id, reason);
				if (reason) {
					this.__retains[reason] = this.__retains[reason] || 0;
					this.__retains[reason]++;
				}
			}
		}, {
			key: 'dispose',
			value: function dispose(reason) {
				var _this22 = this;
	
				//console.log("dispose", this._id, reason);
				if (reason) {
					if (!this.__retains[reason]) throw new Error("Dispose more than retaining : " + reason);
					this.__retains[reason]--;
				}
	
				if (!this.__retains.all) throw new Error("Dispose more than retaining !");
	
				this.__retains.all--;
	
				if (!this.__retains.all) {
					//console.log("dispose do destroy ", this._id, this._persistenceTm);
					if (this._.persistenceTm) {
						this._.destroyTM && clearTimeout(this._.destroyTM);
						this._.destroyTM = setTimeout(function (e) {
							//this.then(s => {
							!_this22.__retains.all && !_this22.dead && _this22.destroy();
							//});
						}, this._.persistenceTm);
					} else {
						//this.then(s =>
						!this.__retains.all && !this.dead && this.destroy();
						//);
					}
				}
			}
	
			/**
	   * order destroy of local stores
	   */
	
		}, {
			key: 'destroy',
			value: function destroy() {
				var _this23 = this;
	
				var ctx = this._._scope;
				//console.warn("destroy", this._id);
				this._.stabilizerTM && clearTimeout(this._.stabilizerTM);
				this._.propagTM && clearTimeout(this._.propagTM);
				Object.keys(this._._listening).forEach(function (id) {
					return id !== "$parent" && _this23._._scope[id].removeListener(_this23._._listening[id]);
				});
				while (this._._mixedList.length) {
					this._._mixed[0].removeListener(this._._mixedList.shift());
					this._._mixed.shift().dispose("mixedTo");
				}
				[].concat(_toConsumableArray(this._.followers)).map(function (follower) {
					return _this23.unBind.apply(_this23, _toConsumableArray(follower));
				});
				for (var key in ctx) {
					if (!is.fn(ctx[key])) {
						if (key == "$parent") continue;
						!ctx[key]._autoDestroy && ctx[key].dispose("scoped");
					}
				}if (this._._parentList) {
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
		}]);
	
		return Scope;
	}(EventEmitter);
	
	Scope.persistenceTm = 1;
	Scope.Store = null;
	
	Scope.scopeRef = function scopeRef(path) {
		this.path = path;
	};
	
	Scope.scopes = openScopes;
	
	
	is.rsScope = function (obj) {
		return obj instanceof Scope;
	};
	
	is.rsScopeClass = function (obj) {
		return Scope.isPrototypeOf(obj) || obj === Scope;
	};
	exports.default = Scope;
	module.exports = exports['default'];

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var is = __webpack_require__(3);
	
	exports.default = _extends({}, is);
	module.exports = exports['default'];

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	/* globals window, HTMLElement */
	
	'use strict';
	
	/**!
	 * is
	 * the definitive JavaScript type testing library
	 *
	 * @copyright 2013-2014 Enrico Marino / Jordan Harband
	 * @license MIT
	 */
	
	var objProto = Object.prototype;
	var owns = objProto.hasOwnProperty;
	var toStr = objProto.toString;
	var symbolValueOf;
	if (typeof Symbol === 'function') {
	  symbolValueOf = Symbol.prototype.valueOf;
	}
	var isActualNaN = function (value) {
	  return value !== value;
	};
	var NON_HOST_TYPES = {
	  'boolean': 1,
	  number: 1,
	  string: 1,
	  undefined: 1
	};
	
	var base64Regex = /^([A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{4}|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{2}==)$/;
	var hexRegex = /^[A-Fa-f0-9]+$/;
	
	/**
	 * Expose `is`
	 */
	
	var is = {};
	
	/**
	 * Test general.
	 */
	
	/**
	 * is.type
	 * Test if `value` is a type of `type`.
	 *
	 * @param {Mixed} value value to test
	 * @param {String} type type
	 * @return {Boolean} true if `value` is a type of `type`, false otherwise
	 * @api public
	 */
	
	is.a = is.type = function (value, type) {
	  return typeof value === type;
	};
	
	/**
	 * is.defined
	 * Test if `value` is defined.
	 *
	 * @param {Mixed} value value to test
	 * @return {Boolean} true if 'value' is defined, false otherwise
	 * @api public
	 */
	
	is.defined = function (value) {
	  return typeof value !== 'undefined';
	};
	
	/**
	 * is.empty
	 * Test if `value` is empty.
	 *
	 * @param {Mixed} value value to test
	 * @return {Boolean} true if `value` is empty, false otherwise
	 * @api public
	 */
	
	is.empty = function (value) {
	  var type = toStr.call(value);
	  var key;
	
	  if (type === '[object Array]' || type === '[object Arguments]' || type === '[object String]') {
	    return value.length === 0;
	  }
	
	  if (type === '[object Object]') {
	    for (key in value) {
	      if (owns.call(value, key)) {
	        return false;
	      }
	    }
	    return true;
	  }
	
	  return !value;
	};
	
	/**
	 * is.equal
	 * Test if `value` is equal to `other`.
	 *
	 * @param {Mixed} value value to test
	 * @param {Mixed} other value to compare with
	 * @return {Boolean} true if `value` is equal to `other`, false otherwise
	 */
	
	is.equal = function equal(value, other) {
	  if (value === other) {
	    return true;
	  }
	
	  var type = toStr.call(value);
	  var key;
	
	  if (type !== toStr.call(other)) {
	    return false;
	  }
	
	  if (type === '[object Object]') {
	    for (key in value) {
	      if (!is.equal(value[key], other[key]) || !(key in other)) {
	        return false;
	      }
	    }
	    for (key in other) {
	      if (!is.equal(value[key], other[key]) || !(key in value)) {
	        return false;
	      }
	    }
	    return true;
	  }
	
	  if (type === '[object Array]') {
	    key = value.length;
	    if (key !== other.length) {
	      return false;
	    }
	    while (key--) {
	      if (!is.equal(value[key], other[key])) {
	        return false;
	      }
	    }
	    return true;
	  }
	
	  if (type === '[object Function]') {
	    return value.prototype === other.prototype;
	  }
	
	  if (type === '[object Date]') {
	    return value.getTime() === other.getTime();
	  }
	
	  return false;
	};
	
	/**
	 * is.hosted
	 * Test if `value` is hosted by `host`.
	 *
	 * @param {Mixed} value to test
	 * @param {Mixed} host host to test with
	 * @return {Boolean} true if `value` is hosted by `host`, false otherwise
	 * @api public
	 */
	
	is.hosted = function (value, host) {
	  var type = typeof host[value];
	  return type === 'object' ? !!host[value] : !NON_HOST_TYPES[type];
	};
	
	/**
	 * is.instance
	 * Test if `value` is an instance of `constructor`.
	 *
	 * @param {Mixed} value value to test
	 * @return {Boolean} true if `value` is an instance of `constructor`
	 * @api public
	 */
	
	is.instance = is['instanceof'] = function (value, constructor) {
	  return value instanceof constructor;
	};
	
	/**
	 * is.nil / is.null
	 * Test if `value` is null.
	 *
	 * @param {Mixed} value value to test
	 * @return {Boolean} true if `value` is null, false otherwise
	 * @api public
	 */
	
	is.nil = is['null'] = function (value) {
	  return value === null;
	};
	
	/**
	 * is.undef / is.undefined
	 * Test if `value` is undefined.
	 *
	 * @param {Mixed} value value to test
	 * @return {Boolean} true if `value` is undefined, false otherwise
	 * @api public
	 */
	
	is.undef = is.undefined = function (value) {
	  return typeof value === 'undefined';
	};
	
	/**
	 * Test arguments.
	 */
	
	/**
	 * is.args
	 * Test if `value` is an arguments object.
	 *
	 * @param {Mixed} value value to test
	 * @return {Boolean} true if `value` is an arguments object, false otherwise
	 * @api public
	 */
	
	is.args = is.arguments = function (value) {
	  var isStandardArguments = toStr.call(value) === '[object Arguments]';
	  var isOldArguments = !is.array(value) && is.arraylike(value) && is.object(value) && is.fn(value.callee);
	  return isStandardArguments || isOldArguments;
	};
	
	/**
	 * Test array.
	 */
	
	/**
	 * is.array
	 * Test if 'value' is an array.
	 *
	 * @param {Mixed} value value to test
	 * @return {Boolean} true if `value` is an array, false otherwise
	 * @api public
	 */
	
	is.array = Array.isArray || function (value) {
	  return toStr.call(value) === '[object Array]';
	};
	
	/**
	 * is.arguments.empty
	 * Test if `value` is an empty arguments object.
	 *
	 * @param {Mixed} value value to test
	 * @return {Boolean} true if `value` is an empty arguments object, false otherwise
	 * @api public
	 */
	is.args.empty = function (value) {
	  return is.args(value) && value.length === 0;
	};
	
	/**
	 * is.array.empty
	 * Test if `value` is an empty array.
	 *
	 * @param {Mixed} value value to test
	 * @return {Boolean} true if `value` is an empty array, false otherwise
	 * @api public
	 */
	is.array.empty = function (value) {
	  return is.array(value) && value.length === 0;
	};
	
	/**
	 * is.arraylike
	 * Test if `value` is an arraylike object.
	 *
	 * @param {Mixed} value value to test
	 * @return {Boolean} true if `value` is an arguments object, false otherwise
	 * @api public
	 */
	
	is.arraylike = function (value) {
	  return !!value && !is.bool(value)
	    && owns.call(value, 'length')
	    && isFinite(value.length)
	    && is.number(value.length)
	    && value.length >= 0;
	};
	
	/**
	 * Test boolean.
	 */
	
	/**
	 * is.bool
	 * Test if `value` is a boolean.
	 *
	 * @param {Mixed} value value to test
	 * @return {Boolean} true if `value` is a boolean, false otherwise
	 * @api public
	 */
	
	is.bool = is['boolean'] = function (value) {
	  return toStr.call(value) === '[object Boolean]';
	};
	
	/**
	 * is.false
	 * Test if `value` is false.
	 *
	 * @param {Mixed} value value to test
	 * @return {Boolean} true if `value` is false, false otherwise
	 * @api public
	 */
	
	is['false'] = function (value) {
	  return is.bool(value) && Boolean(Number(value)) === false;
	};
	
	/**
	 * is.true
	 * Test if `value` is true.
	 *
	 * @param {Mixed} value value to test
	 * @return {Boolean} true if `value` is true, false otherwise
	 * @api public
	 */
	
	is['true'] = function (value) {
	  return is.bool(value) && Boolean(Number(value)) === true;
	};
	
	/**
	 * Test date.
	 */
	
	/**
	 * is.date
	 * Test if `value` is a date.
	 *
	 * @param {Mixed} value value to test
	 * @return {Boolean} true if `value` is a date, false otherwise
	 * @api public
	 */
	
	is.date = function (value) {
	  return toStr.call(value) === '[object Date]';
	};
	
	/**
	 * is.date.valid
	 * Test if `value` is a valid date.
	 *
	 * @param {Mixed} value value to test
	 * @returns {Boolean} true if `value` is a valid date, false otherwise
	 */
	is.date.valid = function (value) {
	  return is.date(value) && !isNaN(Number(value));
	};
	
	/**
	 * Test element.
	 */
	
	/**
	 * is.element
	 * Test if `value` is an html element.
	 *
	 * @param {Mixed} value value to test
	 * @return {Boolean} true if `value` is an HTML Element, false otherwise
	 * @api public
	 */
	
	is.element = function (value) {
	  return value !== undefined
	    && typeof HTMLElement !== 'undefined'
	    && value instanceof HTMLElement
	    && value.nodeType === 1;
	};
	
	/**
	 * Test error.
	 */
	
	/**
	 * is.error
	 * Test if `value` is an error object.
	 *
	 * @param {Mixed} value value to test
	 * @return {Boolean} true if `value` is an error object, false otherwise
	 * @api public
	 */
	
	is.error = function (value) {
	  return toStr.call(value) === '[object Error]';
	};
	
	/**
	 * Test function.
	 */
	
	/**
	 * is.fn / is.function (deprecated)
	 * Test if `value` is a function.
	 *
	 * @param {Mixed} value value to test
	 * @return {Boolean} true if `value` is a function, false otherwise
	 * @api public
	 */
	
	is.fn = is['function'] = function (value) {
	  var isAlert = typeof window !== 'undefined' && value === window.alert;
	  if (isAlert) {
	    return true;
	  }
	  var str = toStr.call(value);
	  return str === '[object Function]' || str === '[object GeneratorFunction]' || str === '[object AsyncFunction]';
	};
	
	/**
	 * Test number.
	 */
	
	/**
	 * is.number
	 * Test if `value` is a number.
	 *
	 * @param {Mixed} value value to test
	 * @return {Boolean} true if `value` is a number, false otherwise
	 * @api public
	 */
	
	is.number = function (value) {
	  return toStr.call(value) === '[object Number]';
	};
	
	/**
	 * is.infinite
	 * Test if `value` is positive or negative infinity.
	 *
	 * @param {Mixed} value value to test
	 * @return {Boolean} true if `value` is positive or negative Infinity, false otherwise
	 * @api public
	 */
	is.infinite = function (value) {
	  return value === Infinity || value === -Infinity;
	};
	
	/**
	 * is.decimal
	 * Test if `value` is a decimal number.
	 *
	 * @param {Mixed} value value to test
	 * @return {Boolean} true if `value` is a decimal number, false otherwise
	 * @api public
	 */
	
	is.decimal = function (value) {
	  return is.number(value) && !isActualNaN(value) && !is.infinite(value) && value % 1 !== 0;
	};
	
	/**
	 * is.divisibleBy
	 * Test if `value` is divisible by `n`.
	 *
	 * @param {Number} value value to test
	 * @param {Number} n dividend
	 * @return {Boolean} true if `value` is divisible by `n`, false otherwise
	 * @api public
	 */
	
	is.divisibleBy = function (value, n) {
	  var isDividendInfinite = is.infinite(value);
	  var isDivisorInfinite = is.infinite(n);
	  var isNonZeroNumber = is.number(value) && !isActualNaN(value) && is.number(n) && !isActualNaN(n) && n !== 0;
	  return isDividendInfinite || isDivisorInfinite || (isNonZeroNumber && value % n === 0);
	};
	
	/**
	 * is.integer
	 * Test if `value` is an integer.
	 *
	 * @param value to test
	 * @return {Boolean} true if `value` is an integer, false otherwise
	 * @api public
	 */
	
	is.integer = is['int'] = function (value) {
	  return is.number(value) && !isActualNaN(value) && value % 1 === 0;
	};
	
	/**
	 * is.maximum
	 * Test if `value` is greater than 'others' values.
	 *
	 * @param {Number} value value to test
	 * @param {Array} others values to compare with
	 * @return {Boolean} true if `value` is greater than `others` values
	 * @api public
	 */
	
	is.maximum = function (value, others) {
	  if (isActualNaN(value)) {
	    throw new TypeError('NaN is not a valid value');
	  } else if (!is.arraylike(others)) {
	    throw new TypeError('second argument must be array-like');
	  }
	  var len = others.length;
	
	  while (--len >= 0) {
	    if (value < others[len]) {
	      return false;
	    }
	  }
	
	  return true;
	};
	
	/**
	 * is.minimum
	 * Test if `value` is less than `others` values.
	 *
	 * @param {Number} value value to test
	 * @param {Array} others values to compare with
	 * @return {Boolean} true if `value` is less than `others` values
	 * @api public
	 */
	
	is.minimum = function (value, others) {
	  if (isActualNaN(value)) {
	    throw new TypeError('NaN is not a valid value');
	  } else if (!is.arraylike(others)) {
	    throw new TypeError('second argument must be array-like');
	  }
	  var len = others.length;
	
	  while (--len >= 0) {
	    if (value > others[len]) {
	      return false;
	    }
	  }
	
	  return true;
	};
	
	/**
	 * is.nan
	 * Test if `value` is not a number.
	 *
	 * @param {Mixed} value value to test
	 * @return {Boolean} true if `value` is not a number, false otherwise
	 * @api public
	 */
	
	is.nan = function (value) {
	  return !is.number(value) || value !== value;
	};
	
	/**
	 * is.even
	 * Test if `value` is an even number.
	 *
	 * @param {Number} value value to test
	 * @return {Boolean} true if `value` is an even number, false otherwise
	 * @api public
	 */
	
	is.even = function (value) {
	  return is.infinite(value) || (is.number(value) && value === value && value % 2 === 0);
	};
	
	/**
	 * is.odd
	 * Test if `value` is an odd number.
	 *
	 * @param {Number} value value to test
	 * @return {Boolean} true if `value` is an odd number, false otherwise
	 * @api public
	 */
	
	is.odd = function (value) {
	  return is.infinite(value) || (is.number(value) && value === value && value % 2 !== 0);
	};
	
	/**
	 * is.ge
	 * Test if `value` is greater than or equal to `other`.
	 *
	 * @param {Number} value value to test
	 * @param {Number} other value to compare with
	 * @return {Boolean}
	 * @api public
	 */
	
	is.ge = function (value, other) {
	  if (isActualNaN(value) || isActualNaN(other)) {
	    throw new TypeError('NaN is not a valid value');
	  }
	  return !is.infinite(value) && !is.infinite(other) && value >= other;
	};
	
	/**
	 * is.gt
	 * Test if `value` is greater than `other`.
	 *
	 * @param {Number} value value to test
	 * @param {Number} other value to compare with
	 * @return {Boolean}
	 * @api public
	 */
	
	is.gt = function (value, other) {
	  if (isActualNaN(value) || isActualNaN(other)) {
	    throw new TypeError('NaN is not a valid value');
	  }
	  return !is.infinite(value) && !is.infinite(other) && value > other;
	};
	
	/**
	 * is.le
	 * Test if `value` is less than or equal to `other`.
	 *
	 * @param {Number} value value to test
	 * @param {Number} other value to compare with
	 * @return {Boolean} if 'value' is less than or equal to 'other'
	 * @api public
	 */
	
	is.le = function (value, other) {
	  if (isActualNaN(value) || isActualNaN(other)) {
	    throw new TypeError('NaN is not a valid value');
	  }
	  return !is.infinite(value) && !is.infinite(other) && value <= other;
	};
	
	/**
	 * is.lt
	 * Test if `value` is less than `other`.
	 *
	 * @param {Number} value value to test
	 * @param {Number} other value to compare with
	 * @return {Boolean} if `value` is less than `other`
	 * @api public
	 */
	
	is.lt = function (value, other) {
	  if (isActualNaN(value) || isActualNaN(other)) {
	    throw new TypeError('NaN is not a valid value');
	  }
	  return !is.infinite(value) && !is.infinite(other) && value < other;
	};
	
	/**
	 * is.within
	 * Test if `value` is within `start` and `finish`.
	 *
	 * @param {Number} value value to test
	 * @param {Number} start lower bound
	 * @param {Number} finish upper bound
	 * @return {Boolean} true if 'value' is is within 'start' and 'finish'
	 * @api public
	 */
	is.within = function (value, start, finish) {
	  if (isActualNaN(value) || isActualNaN(start) || isActualNaN(finish)) {
	    throw new TypeError('NaN is not a valid value');
	  } else if (!is.number(value) || !is.number(start) || !is.number(finish)) {
	    throw new TypeError('all arguments must be numbers');
	  }
	  var isAnyInfinite = is.infinite(value) || is.infinite(start) || is.infinite(finish);
	  return isAnyInfinite || (value >= start && value <= finish);
	};
	
	/**
	 * Test object.
	 */
	
	/**
	 * is.object
	 * Test if `value` is an object.
	 *
	 * @param {Mixed} value value to test
	 * @return {Boolean} true if `value` is an object, false otherwise
	 * @api public
	 */
	is.object = function (value) {
	  return toStr.call(value) === '[object Object]';
	};
	
	/**
	 * is.primitive
	 * Test if `value` is a primitive.
	 *
	 * @param {Mixed} value value to test
	 * @return {Boolean} true if `value` is a primitive, false otherwise
	 * @api public
	 */
	is.primitive = function isPrimitive(value) {
	  if (!value) {
	    return true;
	  }
	  if (typeof value === 'object' || is.object(value) || is.fn(value) || is.array(value)) {
	    return false;
	  }
	  return true;
	};
	
	/**
	 * is.hash
	 * Test if `value` is a hash - a plain object literal.
	 *
	 * @param {Mixed} value value to test
	 * @return {Boolean} true if `value` is a hash, false otherwise
	 * @api public
	 */
	
	is.hash = function (value) {
	  return is.object(value) && value.constructor === Object && !value.nodeType && !value.setInterval;
	};
	
	/**
	 * Test regexp.
	 */
	
	/**
	 * is.regexp
	 * Test if `value` is a regular expression.
	 *
	 * @param {Mixed} value value to test
	 * @return {Boolean} true if `value` is a regexp, false otherwise
	 * @api public
	 */
	
	is.regexp = function (value) {
	  return toStr.call(value) === '[object RegExp]';
	};
	
	/**
	 * Test string.
	 */
	
	/**
	 * is.string
	 * Test if `value` is a string.
	 *
	 * @param {Mixed} value value to test
	 * @return {Boolean} true if 'value' is a string, false otherwise
	 * @api public
	 */
	
	is.string = function (value) {
	  return toStr.call(value) === '[object String]';
	};
	
	/**
	 * Test base64 string.
	 */
	
	/**
	 * is.base64
	 * Test if `value` is a valid base64 encoded string.
	 *
	 * @param {Mixed} value value to test
	 * @return {Boolean} true if 'value' is a base64 encoded string, false otherwise
	 * @api public
	 */
	
	is.base64 = function (value) {
	  return is.string(value) && (!value.length || base64Regex.test(value));
	};
	
	/**
	 * Test base64 string.
	 */
	
	/**
	 * is.hex
	 * Test if `value` is a valid hex encoded string.
	 *
	 * @param {Mixed} value value to test
	 * @return {Boolean} true if 'value' is a hex encoded string, false otherwise
	 * @api public
	 */
	
	is.hex = function (value) {
	  return is.string(value) && (!value.length || hexRegex.test(value));
	};
	
	/**
	 * is.symbol
	 * Test if `value` is an ES6 Symbol
	 *
	 * @param {Mixed} value value to test
	 * @return {Boolean} true if `value` is a Symbol, false otherise
	 * @api public
	 */
	
	is.symbol = function (value) {
	  return typeof Symbol === 'function' && toStr.call(value) === '[object Symbol]' && typeof symbolValueOf.call(value) === 'symbol';
	};
	
	module.exports = is;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.walknSet = walknSet;
	exports.walknGet = walknGet;
	exports.keyWalknSet = keyWalknSet;
	exports.keyWalknGet = keyWalknGet;
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	var is = __webpack_require__(2);
	
	function walknSet(obj, path, value, stack) {
	    if (is.string(path)) path = path.split('.');
	    if (!path.length) return false;else if (path.length == 1) return obj[path[0]] = stack ? [].concat(_toConsumableArray(obj[path[0]] || []), [value]) : value;else return walknSet(obj[path[0]] = obj[path[0]] || {}, path.slice(1), value, stack);
	}
	
	function walknGet(obj, path, isKey) {
	    if (is.string(path)) path = path.split('.');
	    return path.length ? obj[path[0]] && walknGet(obj[path[0]], path.slice(1)) : obj;
	}
	
	//@todo
	function keyWalknSet(obj, path, value, stack) {
	    if (is.string(path)) path = path.split(/(\>|\/)/ig).filter(function (v) {
	        return v !== '>' && v;
	    });
	    return walknSet(obj, path, value);
	}
	
	function keyWalknGet(obj, path, isKey) {
	    if (is.string(path)) path = path.split(/(\>|\/)/ig).filter(function (v) {
	        return v !== '>' && v;
	    });
	    return path.length ? obj[path[0]] && walknGet(obj[path[0]], path.slice(1)) : obj;
	}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
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
	var is = __webpack_require__(3);
	
	var Emitter = function () {
	    function Emitter() {
	        _classCallCheck(this, Emitter);
	
	        this._events = {};
	    }
	
	    _createClass(Emitter, [{
	        key: 'on',
	        value: function on(evt, cb) {
	            var _this = this;
	
	            if (!is.string(evt) && evt) return Object.keys(evt).forEach(function (k) {
	                return _this.on(k, evt[k]);
	            });
	
	            this._events[evt] = this._events[evt] || [];
	            this._events[evt].push(cb);
	        }
	    }, {
	        key: 'un',
	        value: function un(evt, cb) {
	            var _this2 = this;
	
	            if (!is.string(evt) && evt) return Object.keys(evt).forEach(function (k) {
	                return _this2.un(k, evt[k]);
	            });
	
	            if (!this._events[evt]) return;
	            var i = this._events[evt].indexOf(cb);
	            this._events[evt].splice(i, 1);
	        }
	    }, {
	        key: 'emit',
	        value: function emit(evt) {
	            if (!this._events[evt]) return;
	            var lists = [].concat(_toConsumableArray(this._events[evt]));
	
	            for (var _len = arguments.length, argz = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	                argz[_key - 1] = arguments[_key];
	            }
	
	            for (var i = 0; i < lists.length; i++) {
	                lists[i].apply(lists, argz);
	            }
	        }
	    }, {
	        key: 'addListener',
	        value: function addListener() {
	            this.on.apply(this, arguments);
	        }
	    }, {
	        key: 'removeListener',
	        value: function removeListener() {
	            this.un.apply(this, arguments);
	        }
	    }, {
	        key: 'removeAllListeners',
	        value: function removeAllListeners() {
	            this._events = {};
	        }
	    }, {
	        key: 'once',
	        value: function once(evt, cb) {
	            var _this3 = this;
	
	            var _fn = void 0;
	            this.on(evt, _fn = function fn() {
	                _this3.un(evt, _fn);
	                cb.apply(undefined, arguments);
	            });
	        }
	    }]);
	
	    return Emitter;
	}();
	
	exports.default = Emitter;
	module.exports = exports['default'];

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	module.exports = __webpack_require__(7);


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var alphabet = __webpack_require__(8);
	var encode = __webpack_require__(10);
	var decode = __webpack_require__(12);
	var build = __webpack_require__(13);
	var isValid = __webpack_require__(14);
	
	// if you are using cluster or multiple servers use this to make each instance
	// has a unique value for worker
	// Note: I don't know if this is automatically set when using third
	// party cluster solutions such as pm2.
	var clusterWorkerId = __webpack_require__(15) || 0;
	
	/**
	 * Set the seed.
	 * Highly recommended if you don't want people to try to figure out your id schema.
	 * exposed as shortid.seed(int)
	 * @param seed Integer value to seed the random alphabet.  ALWAYS USE THE SAME SEED or you might get overlaps.
	 */
	function seed(seedValue) {
	    alphabet.seed(seedValue);
	    return module.exports;
	}
	
	/**
	 * Set the cluster worker or machine id
	 * exposed as shortid.worker(int)
	 * @param workerId worker must be positive integer.  Number less than 16 is recommended.
	 * returns shortid module so it can be chained.
	 */
	function worker(workerId) {
	    clusterWorkerId = workerId;
	    return module.exports;
	}
	
	/**
	 *
	 * sets new characters to use in the alphabet
	 * returns the shuffled alphabet
	 */
	function characters(newCharacters) {
	    if (newCharacters !== undefined) {
	        alphabet.characters(newCharacters);
	    }
	
	    return alphabet.shuffled();
	}
	
	/**
	 * Generate unique id
	 * Returns string id
	 */
	function generate() {
	  return build(clusterWorkerId);
	}
	
	// Export all other functions as properties of the generate function
	module.exports = generate;
	module.exports.generate = generate;
	module.exports.seed = seed;
	module.exports.worker = worker;
	module.exports.characters = characters;
	module.exports.decode = decode;
	module.exports.isValid = isValid;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var randomFromSeed = __webpack_require__(9);
	
	var ORIGINAL = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-';
	var alphabet;
	var previousSeed;
	
	var shuffled;
	
	function reset() {
	    shuffled = false;
	}
	
	function setCharacters(_alphabet_) {
	    if (!_alphabet_) {
	        if (alphabet !== ORIGINAL) {
	            alphabet = ORIGINAL;
	            reset();
	        }
	        return;
	    }
	
	    if (_alphabet_ === alphabet) {
	        return;
	    }
	
	    if (_alphabet_.length !== ORIGINAL.length) {
	        throw new Error('Custom alphabet for shortid must be ' + ORIGINAL.length + ' unique characters. You submitted ' + _alphabet_.length + ' characters: ' + _alphabet_);
	    }
	
	    var unique = _alphabet_.split('').filter(function(item, ind, arr){
	       return ind !== arr.lastIndexOf(item);
	    });
	
	    if (unique.length) {
	        throw new Error('Custom alphabet for shortid must be ' + ORIGINAL.length + ' unique characters. These characters were not unique: ' + unique.join(', '));
	    }
	
	    alphabet = _alphabet_;
	    reset();
	}
	
	function characters(_alphabet_) {
	    setCharacters(_alphabet_);
	    return alphabet;
	}
	
	function setSeed(seed) {
	    randomFromSeed.seed(seed);
	    if (previousSeed !== seed) {
	        reset();
	        previousSeed = seed;
	    }
	}
	
	function shuffle() {
	    if (!alphabet) {
	        setCharacters(ORIGINAL);
	    }
	
	    var sourceArray = alphabet.split('');
	    var targetArray = [];
	    var r = randomFromSeed.nextValue();
	    var characterIndex;
	
	    while (sourceArray.length > 0) {
	        r = randomFromSeed.nextValue();
	        characterIndex = Math.floor(r * sourceArray.length);
	        targetArray.push(sourceArray.splice(characterIndex, 1)[0]);
	    }
	    return targetArray.join('');
	}
	
	function getShuffled() {
	    if (shuffled) {
	        return shuffled;
	    }
	    shuffled = shuffle();
	    return shuffled;
	}
	
	/**
	 * lookup shuffled letter
	 * @param index
	 * @returns {string}
	 */
	function lookup(index) {
	    var alphabetShuffled = getShuffled();
	    return alphabetShuffled[index];
	}
	
	module.exports = {
	    characters: characters,
	    seed: setSeed,
	    lookup: lookup,
	    shuffled: getShuffled
	};


/***/ }),
/* 9 */
/***/ (function(module, exports) {

	'use strict';
	
	// Found this seed-based random generator somewhere
	// Based on The Central Randomizer 1.3 (C) 1997 by Paul Houle (houle@msc.cornell.edu)
	
	var seed = 1;
	
	/**
	 * return a random number based on a seed
	 * @param seed
	 * @returns {number}
	 */
	function getNextValue() {
	    seed = (seed * 9301 + 49297) % 233280;
	    return seed/(233280.0);
	}
	
	function setSeed(_seed_) {
	    seed = _seed_;
	}
	
	module.exports = {
	    nextValue: getNextValue,
	    seed: setSeed
	};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var randomByte = __webpack_require__(11);
	
	function encode(lookup, number) {
	    var loopCounter = 0;
	    var done;
	
	    var str = '';
	
	    while (!done) {
	        str = str + lookup( ( (number >> (4 * loopCounter)) & 0x0f ) | randomByte() );
	        done = number < (Math.pow(16, loopCounter + 1 ) );
	        loopCounter++;
	    }
	    return str;
	}
	
	module.exports = encode;


/***/ }),
/* 11 */
/***/ (function(module, exports) {

	'use strict';
	
	var crypto = typeof window === 'object' && (window.crypto || window.msCrypto); // IE 11 uses window.msCrypto
	
	function randomByte() {
	    if (!crypto || !crypto.getRandomValues) {
	        return Math.floor(Math.random() * 256) & 0x30;
	    }
	    var dest = new Uint8Array(1);
	    crypto.getRandomValues(dest);
	    return dest[0] & 0x30;
	}
	
	module.exports = randomByte;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var alphabet = __webpack_require__(8);
	
	/**
	 * Decode the id to get the version and worker
	 * Mainly for debugging and testing.
	 * @param id - the shortid-generated id.
	 */
	function decode(id) {
	    var characters = alphabet.shuffled();
	    return {
	        version: characters.indexOf(id.substr(0, 1)) & 0x0f,
	        worker: characters.indexOf(id.substr(1, 1)) & 0x0f
	    };
	}
	
	module.exports = decode;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var encode = __webpack_require__(10);
	var alphabet = __webpack_require__(8);
	
	// Ignore all milliseconds before a certain time to reduce the size of the date entropy without sacrificing uniqueness.
	// This number should be updated every year or so to keep the generated id short.
	// To regenerate `new Date() - 0` and bump the version. Always bump the version!
	var REDUCE_TIME = 1459707606518;
	
	// don't change unless we change the algos or REDUCE_TIME
	// must be an integer and less than 16
	var version = 6;
	
	// Counter is used when shortid is called multiple times in one second.
	var counter;
	
	// Remember the last time shortid was called in case counter is needed.
	var previousSeconds;
	
	/**
	 * Generate unique id
	 * Returns string id
	 */
	function build(clusterWorkerId) {
	
	    var str = '';
	
	    var seconds = Math.floor((Date.now() - REDUCE_TIME) * 0.001);
	
	    if (seconds === previousSeconds) {
	        counter++;
	    } else {
	        counter = 0;
	        previousSeconds = seconds;
	    }
	
	    str = str + encode(alphabet.lookup, version);
	    str = str + encode(alphabet.lookup, clusterWorkerId);
	    if (counter > 0) {
	        str = str + encode(alphabet.lookup, counter);
	    }
	    str = str + encode(alphabet.lookup, seconds);
	
	    return str;
	}
	
	module.exports = build;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var alphabet = __webpack_require__(8);
	
	function isShortId(id) {
	    if (!id || typeof id !== 'string' || id.length < 6 ) {
	        return false;
	    }
	
	    var characters = alphabet.characters();
	    var len = id.length;
	    for(var i = 0; i < len;i++) {
	        if (characters.indexOf(id[i]) === -1) {
	            return false;
	        }
	    }
	    return true;
	}
	
	module.exports = isShortId;


/***/ }),
/* 15 */
/***/ (function(module, exports) {

	'use strict';
	
	module.exports = 0;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
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
	
	var is = __webpack_require__(2),
	    Scope = __webpack_require__(1),
	    _require = __webpack_require__(4),
	    keyWalknSet = _require.keyWalknSet,
	    keyWalknGet = _require.keyWalknGet,
	    EventEmitter = __webpack_require__(5),
	    TaskSequencer = __webpack_require__(17),
	    shortid = __webpack_require__(6),
	    objProto = Object.getPrototypeOf({});
	
	var Store = function (_EventEmitter) {
		_inherits(Store, _EventEmitter);
	
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
		// overridable list of store that will allow push if updated
		function Store() {
			var _this$_require, _this$_require2;
	
			_classCallCheck(this, Store);
	
			var _this = _possibleConstructorReturn(this, (Store.__proto__ || Object.getPrototypeOf(Store)).call(this));
	
			var argz = [].concat(Array.prototype.slice.call(arguments)),
			    _static = _this.constructor,
			    scope = argz[0] instanceof Scope ? argz.shift() : _static.scope ? Scope.getScope(_static.scope) : is.string(argz[0]) ? Scope.getScope(argz.shift()) : _static.staticScope,
			    cfg = argz[0] && !is.array(argz[0]) && !is.string(argz[0]) ? argz.shift() : {},
			    taskQueue = is.array(argz[0]) ? argz.shift() : null,
			    name = cfg.name || _static.name,
			    watchs = cfg.use || [],
			    apply = cfg.apply || null,
			    initialState = _static.state || _static.initialState || _static.defaultState,
			    applied;
	
			_this._uid = cfg._uid || shortid.generate();
	
			_this.__retains = { all: 0 };
			_this.__locks = { all: 0 };
			_this._onStabilize = [];
	
			// autoDestroyTm
			_this._autoDestroy = !!_this._persistenceTm;
			_this._persistenceTm = cfg.persistenceTm || _static.persistenceTm || (cfg.autoDestroy || _static.autoDestroy) && 5;
			_this._cfg = cfg;
			if (cfg && cfg.on) {
				_this.on(cfg.on);
			}
	
			_this.name = name;
	
			if (scope.stores) {
				_this.scopeObj = scope;
				_this.scope = scope.stores;
			} else {
				_this.scopeObj = new Scope(scope);
				_this.scope = scope.stores;
			}
	
			// standardized scope access
			_this.$scope = _this.scopeObj;
			_this.$stores = _this.scopeObj.stores;
			_this.$actions = _this.scopeObj.actions;
			_this.$dispatch = _this.scopeObj.dispatch.bind(_this.scopeObj);
	
			_this._rev = _this.constructor._rev || 0;
			_this._revs = {};
			_this.stores = {};
			_this._require = [];
			_this._sources = [name];
	
			if (is.array(_static.use)) {
				_this._use = [].concat(_toConsumableArray(watchs), _toConsumableArray((_static.use || []).map(function (key) {
					var ref = key.match(/^(\!?)([^\:]*)(?:\:(.*))?$/);
					if (ref[1]) {
						var ref2 = ref[2].split('.');
						_this._require.push(ref[3] || ref2[ref2.length - 1]);
					}
					return ref[2];
				})));
			} else {
				_this._use = [].concat(_toConsumableArray(watchs), _toConsumableArray(_static.use ? Object.keys(_static.use).map(function (key) {
					var ref = key.match(/^(\!?)(.*)$/);
					ref[1] && _this._require.push(_static.use[key]);
					return ref[2] + (_static.use[key] === true ? '' : ':' + _static.use[key]);
				}) : []));
			}
	
			if (_static.require) (_this$_require = _this._require).push.apply(_this$_require, _toConsumableArray(_static.require));
			if (cfg.require) (_this$_require2 = _this._require).push.apply(_this$_require2, _toConsumableArray(cfg.require));
	
			_this._followers = [];
			_this._changesSW = initialState || {};
			_this.state = initialState && {};
			if (apply) _this.apply = apply;
	
			/**
	   * Initial state isn't fully initialized ( childs constructors can set it )
	   * Scope based instance have taskQueue to delay init synchronously, if not
	   * present we use setTimeout
	   */
			if (taskQueue) {
				taskQueue.push(_this._afterConstructor.bind(_this));
			} else setTimeout(_this._afterConstructor.bind(_this));
			return _this;
		}
	
		/**
	  * Get the incoming state ( for immediate state relative actions )
	  * @returns {{}|*}
	  */
		// default state
		/**
	  * if retain goes to 0 :
	  * false to not destroy,
	  * 0 to sync auto destroy
	  * Ms to autodestroy after tm ms if no retain has been called
	  * @type {boolean|Int}
	  */
	
		//static use                  = [];// overridable list of source stores
	
	
		_createClass(Store, [{
			key: '_afterConstructor',
			value: function _afterConstructor() {
				var cfg = this._cfg,
				    _static = this.constructor,
				    snapshot = this.restore(undefined, true),
				    initialState = this.state,
				    initialData = this.data,
				    applied = void 0;
				{
	
					if (initialData) this.data = initialData;else if (_static.data !== undefined) this.data = _extends({}, _static.data);else if (cfg.hasOwnProperty("data")) this.data = cfg.data;
	
					if (cfg.hasOwnProperty("state") && cfg.state !== undefined) initialState = _extends({}, initialState, cfg.state);
	
					if (this.data === undefined) {
						if (initialState || this._use.length) {
							// sync apply
							this._changesSW = _extends({}, this._changesSW, initialState || {}, this.$scope.map(this, this._use));
							this.state = {};
							if (this.shouldApply(this._changesSW) && this.data === undefined) {
								this.data = this.apply(this.data, this._changesSW, this._changesSW);
								applied = true;
								this.state = this._changesSW;
								this._changesSW = {};
							}
						}
					} else {
						applied = true;
						this.state = _extends({}, this._changesSW, initialState || {}, this.$scope.map(this, this._use));
						this._changesSW = {};
					}
				}
				if ((this.data !== undefined || applied) && !this.__locks.all) {
					this._stable = true;
					this._rev++;
				} else {
					this._stable = false;
					if (!_static.managed && !this.state && (!this._use || !this._use.length)) {
						console.warn("ReScope store '", this.name, "' have no initial data, state or use. It can't stabilize...");
					}
				}
				!this._stable && this.emit('unstable', this.state);
			}
	
			/**
	   * Overridable method to know if a data change should be propag to the listening
	   * stores & components
	   */
	
		}, {
			key: 'shouldPropag',
			value: function shouldPropag(nDatas) {
				return true;
			}
		}, {
			key: 'hasDataChange',
			value: function hasDataChange(nDatas) {
				var _static = this.constructor,
				    r,
				    cDatas = this.data;
				r = !cDatas && nDatas || cDatas !== nDatas;
				!r && cDatas && Object.keys(cDatas).forEach(function (key) {
					r = r || (nDatas ? cDatas[key] !== nDatas[key] : cDatas && cDatas[key]);
				});
				!r && nDatas && Object.keys(nDatas).forEach(function (key) {
					r = r || (nDatas ? cDatas[key] !== nDatas[key] : cDatas && cDatas[key]);
				});
				return r;
			}
	
			/**
	   * Overridable method to know if a state change should be applied
	   */
	
		}, {
			key: 'shouldApply',
			value: function shouldApply() {
				var _this2 = this;
	
				var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state;
	
				var _static = this.constructor;
	
				return !!this.isComplete(state) && (is.array(_static.follow) ? _static.follow.reduce(function (r, i) {
					return r || state && state[i];
				}, false) : _static.follow ? Object.keys(_static.follow).reduce(function (r, i) {
					return r || state && is.fn(_static.follow[i]) && _static.follow[i].call(_this2, state[i]) || _static.follow[i] && state[i] !== _this2.state[i];
				}, false) : true);
			}
	
			/**
	   * Overridable applier / remapper
	   * If state or lastPublicState are simple hash maps apply will return {...data,
	   * ...state} if not it will return the last private state
	   * @param data
	   * @param state
	   * @returns {*}
	   */
	
		}, {
			key: 'apply',
			value: function apply(data, state, changes) {
				state = state || this.state;
	
				if (this.refine) return this.refine.apply(this, arguments);
	
				if (!data || data.__proto__ !== objProto || state.__proto__ !== objProto) return state;else return _extends({}, data, state);
			}
	
			/**
	   * @depreciated
	   * @param data
	   * @param state
	   * @param changes
	   * @returns {*}
	   */
	
		}, {
			key: 'refine',
			value: function refine(data, state, changes) {
				state = state || this.state;
	
				if (!data || data.__proto__ !== objProto || state.__proto__ !== objProto) return state;else return _extends({}, data, state);
			}
	
			/**
	   * Debounce this store propagation ( & reducing )
	   * @param cb
	   */
	
		}, {
			key: 'stabilize',
			value: function stabilize(cb) {
				cb && this.once('stable', cb);
				this._stable && this.emit('unstable', this.state, this.data);
	
				this._stable = false;
	
				if (this._stabilizer) return;
	
				this._stabilizer = TaskSequencer.pushTask(this, 'pushState');
			}
		}, {
			key: 'retrieve',
			value: function retrieve(path) {
				var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
				var obj = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.data;
	
				path = is.string(path) ? path.split('.') : path;
				return !obj || !path || !path.length ? obj : path.length == i + 1 ? obj[path[i]] : this.retrieve(path, i + 1, obj[path[i]]);
			}
		}, {
			key: 'dispatch',
			value: function dispatch(action) {
				var _scopeObj;
	
				for (var _len = arguments.length, argz = Array(_len > 1 ? _len - 1 : 0), _key2 = 1; _key2 < _len; _key2++) {
					argz[_key2 - 1] = arguments[_key2];
				}
	
				(_scopeObj = this.scopeObj).dispatch.apply(_scopeObj, [action].concat(argz));
			}
		}, {
			key: 'trigger',
			value: function trigger(action) {
				var actions = this.constructor.actions;
	
				if (actions && actions[action]) {
					var _actions$action;
	
					for (var _len2 = arguments.length, argz = Array(_len2 > 1 ? _len2 - 1 : 0), _key3 = 1; _key3 < _len2; _key3++) {
						argz[_key3 - 1] = arguments[_key3];
					}
	
					var ns = (_actions$action = actions[action]).call.apply(_actions$action, [this].concat(argz));
					ns && this.setState(ns);
				}
			}
	
			/**
	   * Pull stores in the private state
	   * @param stores  {Array} (passed to Store::map) Ex : ["session",
	   *     "otherNamedStore:key", otherStore.as("otherKey")]
	   */
	
		}, {
			key: 'pull',
			value: function pull(stores, doWait, origin) {
				var _this3 = this;
	
				var initialOutputs = this.scopeObj.map(this, stores);
				if (doWait) {
					this.wait();
					stores.forEach(function (s) {
						return _this3.scope[s] && _this3.wait(_this3.scope[s]);
					});
					this.release();
				}
				return initialOutputs;
			}
	
			/**
	   * Set & Push the result data to followers if stable
	   * @param cb
	   */
	
		}, {
			key: 'push',
			value: function push(data, force, cb) {
				cb = force === true ? cb : force;
				force = force === true;
				if (!force && !this.hasDataChange(data)) {
					cb && cb();
					if (!this.__locks.all) {
						var stable = this._stable;
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
	   * @returns {boolean}
	   */
	
		}, {
			key: 'pushState',
			value: function pushState(force) {
	
				if (!force && !this._changesSW && this.data) return;
	
				var nextState = this._nextState || _extends({}, this.state, this._changesSW || {}),
				    nextData = this.apply(this.data, nextState, this._changesSW);
	
				this._stabilizer = null;
				this.state = nextState;
				this._changesSW = null;
	
				if (!force && !this.hasDataChange(nextData)) {
					if (!this.__locks.all) {
						var stable = this._stable;
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
	
		}, {
			key: 'setState',
			value: function setState(pState, cb, sync) {
				var i = 0,
				    change,
				    changes = this._changesSW = this._changesSW || {};
				for (var k in pState) {
					if (!this.state || changes.hasOwnProperty(k) // todo
					&& pState[k] !== changes[k] || pState.hasOwnProperty(k) && (pState[k] !== this.state[k] || this.state[k] && pState[k] && pState[k]._rev != this._revs[k] // rev/hash update
					)) {
						change = true;
						this._revs[k] = pState[k] && pState[k]._rev || true;
						changes[k] = pState[k];
					}
				}this._nextState = _extends({}, this.state, changes);
				if (!this.shouldApply(this._nextState)) {
					return;
				}
	
				if (sync) {
					this.pushState();
					cb && cb();
				} else {
					if (change) {
						this.stabilize(cb);
					} else cb && cb();
				}
				return this;
			}
	
			/**
	   * Update the current state & push it
	   * @param pState
	   * @param cb
	   */
	
		}, {
			key: 'setStateSync',
			value: function setStateSync(pState) {
				var i = 0,
				    change,
				    changes = this._changesSW = this._changesSW || {};
				for (var k in pState) {
					if (!this.state || pState.hasOwnProperty(k) && (pState[k] != this.state[k] || this.state[k] && pState[k] && pState[k]._rev != this._revs[k] // rev/hash update
					)) {
						change = true;
						this._revs[k] = pState[k] && pState[k]._rev || true;
						changes[k] = pState[k];
					}
				}this.shouldApply(_extends({}, this.state || {}, changes)) && this.pushState();
				return this.data;
			}
	
			/**
	   * get a store-key pair for Store::map
	   * @param {string} name
	   * @returns {{store: Store, name: *}}
	   */
	
		}, {
			key: 'as',
			value: function as(name) {
				return { store: this, name: name };
			}
		}, {
			key: 'on',
			value: function on(lists) {
				var _this4 = this;
	
				if (!is.string(lists) && lists) Object.keys(lists).forEach(function (k) {
					return _get(Store.prototype.__proto__ || Object.getPrototypeOf(Store.prototype), 'on', _this4).call(_this4, k, lists[k]);
				});else _get(Store.prototype.__proto__ || Object.getPrototypeOf(Store.prototype), 'on', this).apply(this, arguments);
			}
		}, {
			key: 'removeListener',
			value: function removeListener(lists) {
				var _this5 = this;
	
				if (!is.string(lists) && lists) Object.keys(lists).forEach(function (k) {
					return _get(Store.prototype.__proto__ || Object.getPrototypeOf(Store.prototype), 'removeListener', _this5).call(_this5, k, lists[k]);
				});else _get(Store.prototype.__proto__ || Object.getPrototypeOf(Store.prototype), 'removeListener', this).apply(this, arguments);
			}
	
			/**
	   * is complete (all requiered keys are here)
	   * @returns bool
	   */
	
		}, {
			key: 'isComplete',
			value: function isComplete() {
				var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state;
	
				var _static = this.constructor;
				return !this._require || !this._require.length || state && this._require.reduce(function (r, key) {
					return r && state[key];
				}, true);
			}
	
			/**
	   * is stable
	   * @returns bool
	   */
	
		}, {
			key: 'isStable',
			value: function isStable() {
				return this._stable;
			}
	
			/**
	   * Serialize state & data with sources refs
	   * @returns bool
	   */
	
		}, {
			key: 'serialize',
			value: function serialize() {
				var _this6 = this;
	
				var cfg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
				var output = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
				var sId = cfg.parentAlias || this.scopeObj._id,
				    refs = !cfg.norefs && is.array(this._use) && this._use.reduce(function (map, key) {
					//todo
					var name = void 0,
					    alias = void 0,
					    path = void 0,
					    _key = void 0,
					    store = void 0;
					if (key.store && key.name) {
						alias = name = key.name;
						store = key.store;
					} else if (is.fn(key)) {
						name = alias = key.name || key.defaultName;
						store = key;
					} else {
						_key = key.match(/([^\.\:]+)((?:\.[^\.\:]+)*)(?:\:([^\.\:]+))?/);
						name = _key[1];
						path = _key[2] && _key[2].substr(1);
						store = _this6.scopeObj.stores[_key[1]];
						alias = _key[3] || path && path.match(/([^\.]*)$/)[0] || _key[1];
					}
					if (store && is.rsStore(store) && !store.scopeObj._.isLocalId) map[alias] = store.scopeObj._id + '/' + name;
	
					return map;
				}, {}) || {};
	
				keyWalknSet(output, sId + '/' + this.name, {
					state: this.state && (cfg.norefs ? _extends({}, this.state) : Object.keys(this.state).reduce(function (h, k) {
						return !refs[k] && (h[k] = _this6.state[k]), h;
					}, {})),
					data: (this.data && this.data.__proto__ === objProto ? this.data : (is.bool(this.data) || is.number(this.data) || is.string(this.data)) && this.data) || undefined,
	
					refs: refs
				});
				return output;
			}
	
			/**
	   * restore state & data
	   * @returns bool
	   */
	
		}, {
			key: 'restore',
			value: function (_restore) {
				function restore(_x, _x2) {
					return _restore.apply(this, arguments);
				}
	
				restore.toString = function () {
					return _restore.toString();
				};
	
				return restore;
			}(function (snapshot, immediate) {
				var _this7 = this;
	
				snapshot = snapshot && keyWalknGet(snapshot, this.scopeObj._id + '/' + this.name) || this.$scope.takeSnapshotByKey(this.scopeObj._id + '/' + this.name);
	
				if (!snapshot) return;
	
				if (snapshot) {
					if (!this.isStable() && !immediate) this.then(function () {
						return restore(snapshot);
					});
					var snap = void 0;
					this.state = _extends({}, snapshot.state);
					Object.keys(snapshot.refs).forEach(function (key) {
						//todo
						if (snap = _this7.$scope.getSnapshotByKey(snapshot.refs[key])) _this7.state[key] = snap.data;
						//else
						//    console.warn('not found : ', key, snap && snap.refs[ key ])
					});
	
					this.data = snapshot.data;
				}
			})
	
			/**
	   * Un bind this store off the given component-key
	   * @param obj
	   * @param key
	   * @returns {Array.<*>}
	   */
	
		}, {
			key: 'unBind',
			value: function unBind(obj, key, path) {
				var followers = this._followers,
				    i = followers && followers.length;
				while (followers && i--) {
					if (followers[i][0] === obj && followers[i][1] === key && followers[i][2] === path) return followers.splice(i, 1);
				}
			}
	
			/**
	   * Bind this store changes to the given component-key
	   * @param obj {React.Component|Store|function)
	   * @param key {string} optional key where to map the public state
	   */
	
		}, {
			key: 'bind',
			value: function bind(obj, key) {
				var setInitial = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
				var path = arguments[3];
	
				this._followers.push([obj, key, path]);
				if (setInitial && this.data && this._stable) {
					var data = path ? this.retrieve(path) : this.data;
					if (typeof obj != "function") {
						if (key) obj.setState(_defineProperty({}, key, data));else obj.setState(data);
					} else {
						obj(data);
					}
				}
			}
	
			/**
	   * once('stable', cb)
	   * @param obj {React.Component|Store|function)
	   * @param key {string} optional key where to map the public state
	   */
	
		}, {
			key: 'then',
			value: function then(cb) {
				var _this8 = this;
	
				if (this._stable) return cb(this.data);
				this.once('stable', function (e) {
					return cb(_this8.data);
				});
			}
	
			/**
	   * Add a lock so the store will not propag it data untill release() is call
	   * @param previous {Store|number|Array} @optional wf to wait, releases to wait or
	   *     array of stuff to wait
	   * @returns {this}
	   */
	
		}, {
			key: 'wait',
			value: function wait(previous) {
				if (typeof previous == "number") return this.__locks.all += previous;
				if (is.array(previous)) return previous.map(this.wait.bind(this));
	
				this._stable && this.emit('unstable', this.state, this.data);
				this._stable = false;
				this.__locks.all++;
	
				var reason = is.string(previous) ? previous : null;
				if (reason) {
					this.__locks[reason] = this.__locks[reason] || 0;
					this.__locks[reason]++;
				}
				if (previous && is.fn(previous.then)) {
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
	
		}, {
			key: 'release',
			value: function release(reason, cb) {
				var _static = this.constructor,
				    me = this;
				var i = 0,
				    wasStable = this._stable;
	
				if (is.fn(reason)) {
					cb = reason;
					reason = null;
				}
	
				if (reason) {
					if (this.__locks[reason] == 0) console.error("Release more than locking !", reason);
					this.__locks[reason] = this.__locks[reason] || 0;
					this.__locks[reason]--;
				}
	
				if (!reason && this.__locks.all == 0) console.error("Release more than locking !");
	
				if (! --this.__locks.all && this.isComplete()) {
					var propag = this.shouldPropag(this.data);
					this._stable = true;
					propag && this._rev++; //
					if (propag && this._followers.length) this._followers.forEach(function propag(follower) {
						var data = follower[2] ? me.retrieve(follower[2]) : me.data;
						//if ( !data ) return;
	
						if (typeof follower[0] == "function") {
							follower[0](data);
						} else {
							//cb && i++;
							follower[0].setState(follower[1] ? _defineProperty({}, follower[1], data) : data
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
					cb && cb();
				} else cb && this.then(cb);
				return this;
			}
		}, {
			key: 'propag',
			value: function propag(data) {
				this.emit('update', data);
			}
		}, {
			key: 'retain',
			value: function retain(reason) {
				this.__retains.all++;
				if (reason) {
					this.__retains[reason] = this.__retains[reason] || 0;
					this.__retains[reason]++;
				}
			}
		}, {
			key: 'dispose',
			value: function dispose(reason) {
				var _this9 = this;
	
				//console.warn("dispose", reason, this.__retains);
				if (reason) {
					if (!this.__retains[reason]) throw new Error("RS : Dispose more than retaining on store '" + this.name + "' : " + reason);
	
					this.__retains[reason]--;
				}
				if (this.__retains.all == 0) throw new Error("RS : Dispose more than retaining on store " + this.name);
	
				this.__retains.all--;
	
				if (!this.__retains.all) {
					if (this._persistenceTm) {
						this._destroyTM && clearTimeout(this._destroyTM);
						this._destroyTM = setTimeout(function (e) {
							_this9._destroyTM = null;
							//this.then(s => {
							!_this9.__retains.all && !_this9.dead && _this9.destroy();
							//});
						}, this._persistenceTm);
					} else {
						//this.then(s =>
						!this.__retains.all && !this.dead && this.destroy();
						//);
					}
				}
			}
		}, {
			key: 'destroy',
			value: function destroy() {
				//  console.log("destroy", this._uid);
	
				this.emit('destroy', this);
				if (this._stabilizer) clearTimeout(this._stabilizer);
	
				if (this._followers.length) this._followers.forEach(function (follower) {
					if (typeof follower[0] !== "function") {
						if (follower[0].stores) delete follower[0].stores[follower[1]];
					}
				});
				this._followers.length = 0;
				this.constructor._rev = this.rev;
				this.dead = true;
				this._revs = this.data = this.state = this.scope = null;
				this.removeAllListeners();
			}
		}, {
			key: 'nextState',
			get: function get() {
				return this._changesSW && _extends({}, this.state, this._changesSW) || this.state;
			}
		}]);
	
		return Store;
	}(EventEmitter);
	
	/**
	 * get a static aliased reference of a store
	 * @param {string} name
	 * @returns {{store: Store, name: *}}
	 */
	
	
	Store.staticScope = new Scope({}, { id: "static" });
	Store.state = undefined;
	Store.persistenceTm = false;
	Store.as = function (name) {
		return { store: this, name: name };
	};
	
	/**
	 * Map all named stores in {keys} to the {object}'s state
	 * Hook componentWillUnmount (for react comp) or destroy to unBind them automatically
	 * @static
	 * @param object {Object} target state aware object (React.Component|Store|...)
	 * @param keys {Array} Ex : ["session", "otherStaticNamedStore:key",
	 *     store.as('anotherKey')]
	 */
	Store.map = function (cStore, keys, scope, origin) {
		var setInitial = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
	
		var targetRevs = cStore._revs || {};
		var targetScope = cStore.stores || (cStore.stores = {});
		var initialOutputs = {};
		keys = is.array(keys) ? [].concat(_toConsumableArray(keys)) : [keys];
	
		scope = scope || Store.staticScope;
	
		keys = keys.filter(
		// @todo : use query refs
		// (store)(\.store)*(\[(\*|(props)\w+)+)\])?(\:alias)
		function (key) {
			var _cStore$_sources;
	
			if (!key) {
				console.error("Not a mappable store item '" + key + "' in " + origin + ' !!');
				return false;
			}
			var name = void 0,
			    alias = void 0,
			    path = void 0,
			    store = void 0,
			    _key = void 0;
			if (key.store && key.name) {
				alias = name = key.name;
				store = key.store;
			} else if (is.fn(key)) {
				name = alias = key.name || key.defaultName;
				store = key;
			} else {
				_key = key.match(/([^\.\:]+)((?:\.[^\.\:]+)*)(?:\:([^\.\:]+))?/);
				name = _key[1];
				path = _key[2] && _key[2].substr(1);
				store = scope.stores[_key[1]];
				alias = _key[3] || path && path.match(/([^\.]*)$/)[0] || _key[1];
			}
			if (!store) {
				var i = [];
				for (var o in scope.stores) {
					i.push(o);
				}console.error("Not a mappable store item '" + name + "/" + alias + "' in " + (cStore.name || cStore) + ' !!', store, _key, scope.stores, i);
				return false;
			}
			if (is.rsScopeClass(store)) scope._mount(name);
			if (is.rsScope(store)) {
				store = scope._mount(key);
			} else if (targetRevs[name]) return false; // ignore dbl uses for now
	
	
			if (is.fn(store)) {
				scope._mount(name);
				scope.stores[name].bind(cStore, alias, setInitial, path);
			} else {
				store.bind(cStore, alias, setInitial, path);
			}
	
			// give initial store weight basing sources
			scope.stores[name]._sources && (_cStore$_sources = cStore._sources).push.apply(_cStore$_sources, _toConsumableArray(scope.stores[name]._sources));
	
			targetRevs[alias] = targetRevs[alias] || true;
			!targetScope[name] && (targetScope[name] = scope.stores[name]);
			if (scope.stores[name].hasOwnProperty('data')) initialOutputs[name] = scope.data[name];
			return true;
		});
	
		// ... @todo
		cStore.once('destroy', function () {
			keys.map(function (key) {
				var name = void 0,
				    alias = void 0,
				    path = void 0,
				    store = void 0;
				if (key.store && key.name) {
					alias = name = key.name;
					store = key.store;
				} else if (is.fn(key)) {
					name = alias = key.name || key.defaultName;
					store = scope.stores[name];
				} else {
					key = key.match(/([^\.\:]+)((?:\.[^\.\:]+)*)(?:\:([^\.\:]+))?/);
					name = key[1];
					path = key[2] && key[2].substr(1);
					store = scope.stores[key[1]];
					alias = key[3] || path && path.match(/([^\.]*)$/)[0] || key[1];
				}
	
				store && !is.fn(store) && store.unBind(cStore, alias, path);
			});
		});
	
		return initialOutputs;
	};
	
	is.rsStore = function (obj) {
		return obj instanceof Store;
	};
	is.rsStoreClass = function (obj) {
		return Store.isPrototypeOf(obj) || obj === Store;
	};
	
	exports.default = Store;
	module.exports = exports['default'];

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _is = __webpack_require__(3);
	
	var _is2 = _interopRequireDefault(_is);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Minimal push sequencer, apply stores specific task in the right order (root stores
	 * first)
	 */
	var taskQueue = [],
	    curWeight = 0,
	    maxWeight = 0,
	    minWeight = 0,
	    taskCount = 0,
	    deSync = false,
	    deSyncMaxTasks = 10,
	    task = void 0,
	    isRunning = void 0,
	    errorCatcher = {
	    lastError: null,
	    dispatch: function dispatch(error) {
	        errorCatcher.disable();
	        if (task && task[0].handleError) {
	            task[0].handleError(error, task);
	        } else if (task) console.error("ReScope : An apply task has failed !!", task[1], " on ", task[0].name || task[0].constructor.name);
	
	        isRunning = false;
	        task = null;
	        runNow();
	    },
	    enable: typeof window !== 'undefined' ? function () {
	        window.addEventListener('error', errorCatcher.dispatch);
	    } : function () {
	        process.on('uncaughtException', errorCatcher.dispatch);
	    },
	    disable: typeof window !== 'undefined' ? function () {
	        window.removeEventListener('error', errorCatcher.dispatch);
	    } : function () {
	        process.removeListener('uncaughtException', errorCatcher.dispatch);
	    }
	}; /*
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
	
	//import index from "./index";// will use as external the index in dist
	
	
	function runNow() {
	    if (!isRunning) {
	        run();
	    }
	}
	
	function run() {
	    var from = Date.now();
	    isRunning = true;
	    errorCatcher.enable();
	    while (taskCount) {
	
	        // try for the current weight
	        while (!(taskQueue[curWeight] && taskQueue[curWeight].length)) {
	            curWeight++;
	        }taskCount--;
	        task = taskQueue[curWeight].shift();
	        //console.log("Task : ", task[1], " on ", task[0].name);
	        task[0][task[1]].apply(task[0], task[2]);
	    }
	    task = undefined;
	    errorCatcher.disable();
	
	    isRunning = false;
	    if (taskCount) {
	        setTimeout(runNow);
	    }
	}
	
	//
	//index.setTaskDeSync = ( nb ) => {
	//    if ( nb === false )
	//        return deSync = false;
	//    else if ( nb === true ) {
	//        deSync         = true;
	//        deSyncMaxTasks = 10;
	//    }
	//    else (is.int(nb))
	//    {
	//        deSync         = true;
	//        deSyncMaxTasks = nb;
	//    }
	//};
	
	exports.default = {
	    pushTask: function pushTask(obj, fn, argz) {
	        /**
	         * The more a store have sources, the more it should be processed first
	         * So leafs stores stay sync, and root stores receive merged state updates;
	         * global state stay coherent
	         *
	         * This mean whatever the number of stores & the complexity of the deps,
	         * updating a store state will update its synchrone child stores immediately
	         *
	         *
	         * @type {*|number}
	         */
	        var weight = obj._sources && obj._sources.length || 1,
	            stack = taskQueue[weight] = taskQueue[weight] || [];
	
	        maxWeight = Math.max(maxWeight, weight);
	        curWeight = Math.min(curWeight, weight);
	        taskCount++;
	
	        //console.log("Push Task : ", fn, " on ", obj.name, weight);
	        stack.push([obj, fn, argz]);
	        setTimeout(runNow, 0);
	        return stack.length;
	    }
	};
	module.exports = exports["default"];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(18)))

/***/ }),
/* 18 */
/***/ (function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	
	
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	
	
	
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	process.prependListener = noop;
	process.prependOnceListener = noop;
	
	process.listeners = function (name) { return [] }
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.scopeToState = exports.reScope = exports.addScopableType = undefined;
	
	var _is = __webpack_require__(3);
	
	var _is2 = _interopRequireDefault(_is);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } /*
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
	
	var SimpleObjectProto = {}.constructor;
	
	var scopables = [];
	
	function addScopableType(test, handle) {
	    var member = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
	    var stateScope = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
	
	    scopables.push({
	        test: test,
	        member: member,
	        stateScope: stateScope,
	        handle: handle
	    });
	}
	
	//
	function isScopableType(Comp, member, stateScope) {
	
	    for (var i = 0; i < scopables.length; i++) {
	        if ((member === undefined || member == scopables[i].member) && stateScope == scopables[i].stateScope && scopables[i].test(Comp)) return true;
	    }return false;
	}
	
	function applyScopableType(Comp, argz, member, stateScope) {
	
	    for (var i = 0; i < scopables.length; i++) {
	        var _scopables$i;
	
	        if (member == scopables[i].member && stateScope == scopables[i].stateScope && scopables[i].test(Comp)) return (_scopables$i = scopables[i]).handle.apply(_scopables$i, [Comp].concat(_toConsumableArray(argz)));
	    }console.warn("reScope : Unknown type", Comp);
	
	    return false;
	}
	
	function reScope() {
	    for (var _len = arguments.length, argz = Array(_len), _key = 0; _key < _len; _key++) {
	        argz[_key] = arguments[_key];
	    }
	
	    // are we decorating a member / without argz
	    if (argz[0] instanceof SimpleObjectProto && argz[2] instanceof SimpleObjectProto && argz[0].hasOwnProperty(argz[1])) {
	        argz[2].value = applyScopableType(argz[0], [], true, false);
	        return argz[0];
	    } else if (!isScopableType(argz[0], undefined, false)) {
	        return function () {
	            for (var _len2 = arguments.length, argz2 = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	                argz2[_key2] = arguments[_key2];
	            }
	
	            // are we decorating a member / with argz
	            if (argz2[0] instanceof SimpleObjectProto && argz2[2] instanceof SimpleObjectProto && argz2[0].hasOwnProperty(argz2[1])) {
	                argz2[2].value = applyScopableType(argz2[0], argz, true, false);
	                return argz2[0];
	            } else return reScope.apply(undefined, [argz2[0]].concat(argz));
	        };
	    }
	    return applyScopableType(argz[0], argz.slice(1), false, false);
	}
	
	function scopeToState() {
	    for (var _len3 = arguments.length, argz = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
	        argz[_key3] = arguments[_key3];
	    }
	
	    // are we decorating a member / without argz
	    if (argz[0] instanceof SimpleObjectProto && argz[2] instanceof SimpleObjectProto && argz[0].hasOwnProperty(argz[1])) {
	        argz[2].value = applyScopableType(argz[0], [], true, true);
	        return argz[0];
	    } else if (!isScopableType(argz[0], undefined, true)) {
	        return function () {
	            for (var _len4 = arguments.length, argz2 = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
	                argz2[_key4] = arguments[_key4];
	            }
	
	            // are we decorating a member / with argz
	            if (argz2[0] instanceof SimpleObjectProto && argz2[2] instanceof SimpleObjectProto && argz2[0].hasOwnProperty(argz2[1])) {
	                argz2[2].value = applyScopableType(argz2[0], argz, true, true);
	                return argz2[0];
	            } else return scopeToState.apply(undefined, [argz2[0]].concat(argz));
	        };
	    }
	    return applyScopableType(argz[0], argz.slice(1), false, true);
	}
	
	//
	//addScopableType(
	//    ( Comp ) => (Comp && Comp.prototype instanceof Store),
	//    function reScope( ...argz ) {
	//        let BaseStore    = (!argz[0] || argz[0].prototype instanceof Store) &&
	// argz.shift(), scope        = (!argz[0] || argz[0] instanceof Scope || is.fn(argz[0]))
	// && argz.shift(), use          = (is.array(argz[0])) && argz.shift(), stateMap     =
	// !use && (!argz[0] || argz[0] instanceof SimpleObjectProto) && argz.shift(),
	// initialState = {};  let compName = BaseStore.displayName || BaseStore.name;  use =
	// [...(BaseStore.use || []), ...(use || [])]; stateMap &&
	// Scope.stateMapToRefList(stateMap, initialState, use);  class StateScopedStore extends
	// BaseStore { static use         = use; static displayName = "stateScoped(" + compName +
	// ")";  constructor( ...argz ) { super(scope, argz.slice(argz[0] instanceof Scope ? 1 :
	// 0)) } }  return StateScopedStore; }, false, true )
	
	
	exports.addScopableType = addScopableType;
	exports.reScope = reScope;
	exports.scopeToState = scopeToState;

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNDBmZTU5YzFkNGJmMDE1ZDYwODYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9TY29wZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvaXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9pcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL0VtaXR0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9zaG9ydGlkL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vc2hvcnRpZC9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9zaG9ydGlkL2xpYi9hbHBoYWJldC5qcyIsIndlYnBhY2s6Ly8vLi9+L3Nob3J0aWQvbGliL3JhbmRvbS9yYW5kb20tZnJvbS1zZWVkLmpzIiwid2VicGFjazovLy8uL34vc2hvcnRpZC9saWIvZW5jb2RlLmpzIiwid2VicGFjazovLy8uL34vc2hvcnRpZC9saWIvcmFuZG9tL3JhbmRvbS1ieXRlLWJyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9zaG9ydGlkL2xpYi9kZWNvZGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9zaG9ydGlkL2xpYi9idWlsZC5qcyIsIndlYnBhY2s6Ly8vLi9+L3Nob3J0aWQvbGliL2lzLXZhbGlkLmpzIiwid2VicGFjazovLy8uL34vc2hvcnRpZC9saWIvdXRpbC9jbHVzdGVyLXdvcmtlci1pZC1icm93c2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9TdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvVGFza1NlcXVlbmNlci5qcyIsIndlYnBhY2s6Ly8vLi9+L3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvc2NvcGFibGUuanMiXSwibmFtZXMiOlsiJGdsb2JhbCIsIndpbmRvdyIsImdsb2JhbCIsIlJTIiwiX19fcmVzY29wZSIsImNvbnNvbGUiLCJ3YXJuIiwiU3RvcmUiLCJTY29wZSIsIkNvbnRleHQiLCJyZVNjb3BlIiwic2NvcGVUb1N0YXRlIiwicmVTY29wZVN0YXRlIiwiYWRkU2NvcGFibGVUeXBlIiwic2NvcGVSZWYiLCJtYXAiLCJrZXkiLCJyZXF1aXJlIiwid2Fsa25TZXQiLCJ3YWxrbkdldCIsImtleVdhbGtuU2V0Iiwia2V5V2Fsa25HZXQiLCJFdmVudEVtaXR0ZXIiLCJzaG9ydGlkIiwiX19wcm90b19fcHVzaCIsInRhcmdldCIsImlkIiwicGFyZW50IiwiZm4iLCJwcm90b3R5cGUiLCJfIiwib3BlblNjb3BlcyIsIlNpbXBsZU9iamVjdFByb3RvIiwiY29uc3RydWN0b3IiLCJzY29wZXMiLCJza2V5IiwiaXMiLCJhcnJheSIsInNvcnQiLCJhIiwiYiIsImZpcnN0bmFtZSIsImpvaW4iLCJzbSIsInN0YXRlIiwiX3JlZnMiLCJhY3Rpb25zIiwicGF0aCIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwiY3BhdGgiLCJwdXNoIiwiRnVuY3Rpb24iLCJhcyIsInN0b3Jlc01hcCIsInVwcGVyU2NvcGUiLCJzbmFwc2hvdCIsImRhdGEiLCJpbmNyZW1lbnRJZCIsInBlcnNpc3RlbmNlVG0iLCJhdXRvRGVzdHJveSIsInJvb3RFbWl0dGVyIiwiYm91bmRlZEFjdGlvbnMiLCJrZXlQSUQiLCJfaWQiLCJnZW5lcmF0ZSIsImJhc2VJZCIsImtleUluZGV4IiwiaXNMb2NhbElkIiwicmVnaXN0ZXIiLCJpIiwiX3JldiIsInN0b3JlcyIsIl9hdXRvRGVzdHJveSIsImRlYWQiLCJFcnJvciIsInNvdXJjZXMiLCJjaGlsZFNjb3BlcyIsImNoaWxkU2NvcGVzTGlzdCIsInVuU3RhYmxlQ2hpbGRzIiwic2VlbkNoaWxkcyIsIl9fcmV0YWlucyIsImFsbCIsIl9fbG9ja3MiLCJfYm91bmRlZEFjdGlvbnMiLCJ0ZXN0IiwiaW5jbHVkZXMiLCJiaW5kIiwiX2xpc3RlbmluZyIsIl9zY29wZSIsIl9taXhlZCIsIl9taXhlZExpc3QiLCJmb2xsb3dlcnMiLCJyZXRhaW4iLCJfc3RhYmxlIiwid2FpdCIsIm9uIiwiX3BhcmVudExpc3QiLCJyZWxlYXNlIiwiX3Byb3BhZyIsIl9hZGRDaGlsZCIsInJlc3RvcmUiLCJzZXRUaW1lb3V0IiwiZGlzcG9zZSIsInN0b3Jlc0xpc3QiLCJfbW91bnQiLCJrIiwiYXJndW1lbnRzIiwicmVmIiwic25hcCIsInBhcnNlUmVmIiwic3RvcmVJZCIsInJlZHVjZVJpZ2h0IiwibW91bnRlZCIsImN0eCIsInN0b3JlIiwidGFza1F1ZXVlIiwicnNTdG9yZUNsYXNzIiwibmFtZSIsImxlbmd0aCIsInNoaWZ0IiwicnNTY29wZUNsYXNzIiwiJHBhcmVudCIsIm1vdW50Iiwic2xpY2UiLCJyc1N0b3JlIiwidW5kZWZpbmVkIiwic2V0U3RhdGUiLCJfd2F0Y2hTdG9yZSIsImlzU3RhYmxlIiwicHJvcGFnIiwidGFyZ2V0Q3R4IiwibGlzdHMiLCJyZWxpbmsiLCJfX29yaWdpbiIsInNpbmdsZXRvbiIsInNyY0N0eCIsImV4dGVybmFsIiwiZm9yY2UiLCJsY3R4IiwiaW5mbyIsInRtcCIsImRlc3Ryb3kiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJnZXQiLCJzZXQiLCJ2IiwiYWN0aXZlQWN0aW9ucyIsInJzU2NvcGUiLCJhY3QiLCJoYXNPd25Qcm9wZXJ0eSIsIl9fdGFyZ2V0U3RvcmVzIiwiZGlzcGF0Y2giLCJvYmoiLCJzZXRJbml0aWFsIiwicmV2TWFwIiwibGFzdFJldnMiLCJyZWZLZXlzIiwic3RyaW5nIiwicmVkdWNlIiwicmV2cyIsInJldiIsInJlZnMiLCJyZXRhaW5TdG9yZXMiLCJnZXRVcGRhdGVzIiwiZGlzcG9zZVN0b3JlcyIsInNwbGljZSIsInRvIiwicmVmTGlzdCIsIm1peGVkQ1dVbm1vdW50IiwidW5Nb3VudEtleSIsImlzUmVhY3RDb21wb25lbnQiLCJ1bkJpbmQiLCJhbGlhcyIsInJldHJpZXZlIiwic3BsaXQiLCJyZXRyaWV2ZVN0b3JlIiwic3RvcmVzUmV2TWFwIiwibG9jYWwiLCJ1cGRhdGVkIiwiZ2V0U3RvcmVzUmV2cyIsIm91dHB1dCIsIl9nZXRSZXZNYXAiLCJjaGlsZHMiLCJfZ2V0QWxsQ2hpbGRzIiwiY2ZnIiwicGFyZW50QWxpYXMiLCJzaWQiLCJzZXJpYWxpemVfZXgiLCJleGNsdWRlIiwid2l0aENoaWxkcyIsIndpdGhQYXJlbnRzIiwid2l0aE1peGVkIiwibm9yZWZzIiwiYWxpYXNlcyIsInNlcmlhbGl6ZSIsIndpdGhDaGlsZCIsImgiLCJib29sIiwidGFrZVNuYXBzaG90QnlLZXkiLCJzdGFydHNXaXRoIiwic3Vic3RyIiwiZ2V0U25hcHNob3RCeUtleSIsImRlbGV0ZVNuYXBzaG90QnlLZXkiLCJyZXBsYWNlIiwicFN0YXRlIiwiX3JlZiIsImFjdGlvbiIsImFyZ3oiLCJzdGFjayIsImJBY3RzIiwidHJpZ2dlciIsImNiIiwib25jZSIsInJlYXNvbiIsImVtaXQiLCJlcnJvciIsInN0YWJpbGl6ZXJUTSIsImNsZWFyVGltZW91dCIsInByb3BhZ1RNIiwicmVtYXBzIiwid2FzU3RhYmxlIiwiaW5kZXhPZiIsInVuIiwiZGVzdHJveVRNIiwicmVtb3ZlTGlzdGVuZXIiLCJmb2xsb3dlciIsIl9ybUNoaWxkIiwiaXNQcm90b3R5cGVPZiIsInZhbHVlIiwiaXNLZXkiLCJmaWx0ZXIiLCJFbWl0dGVyIiwiX2V2ZW50cyIsImV2dCIsIlRhc2tTZXF1ZW5jZXIiLCJvYmpQcm90byIsImdldFByb3RvdHlwZU9mIiwiX3N0YXRpYyIsInNjb3BlIiwiZ2V0U2NvcGUiLCJzdGF0aWNTY29wZSIsIndhdGNocyIsInVzZSIsImFwcGx5IiwiaW5pdGlhbFN0YXRlIiwiZGVmYXVsdFN0YXRlIiwiYXBwbGllZCIsIl91aWQiLCJfb25TdGFiaWxpemUiLCJfcGVyc2lzdGVuY2VUbSIsIl9jZmciLCJzY29wZU9iaiIsIiRzY29wZSIsIiRzdG9yZXMiLCIkYWN0aW9ucyIsIiRkaXNwYXRjaCIsIl9yZXZzIiwiX3JlcXVpcmUiLCJfc291cmNlcyIsIl91c2UiLCJtYXRjaCIsInJlZjIiLCJfZm9sbG93ZXJzIiwiX2NoYW5nZXNTVyIsIl9hZnRlckNvbnN0cnVjdG9yIiwiaW5pdGlhbERhdGEiLCJzaG91bGRBcHBseSIsIm1hbmFnZWQiLCJuRGF0YXMiLCJyIiwiY0RhdGFzIiwiaXNDb21wbGV0ZSIsImZvbGxvdyIsImNhbGwiLCJjaGFuZ2VzIiwicmVmaW5lIiwiX19wcm90b19fIiwiX3N0YWJpbGl6ZXIiLCJwdXNoVGFzayIsIm5zIiwiZG9XYWl0Iiwib3JpZ2luIiwiaW5pdGlhbE91dHB1dHMiLCJzIiwiaGFzRGF0YUNoYW5nZSIsInN0YWJsZSIsIm5leHRTdGF0ZSIsIl9uZXh0U3RhdGUiLCJuZXh0RGF0YSIsInN5bmMiLCJjaGFuZ2UiLCJwdXNoU3RhdGUiLCJzdGFiaWxpemUiLCJzSWQiLCJfa2V5IiwiZGVmYXVsdE5hbWUiLCJudW1iZXIiLCJpbW1lZGlhdGUiLCJ0aGVuIiwicHJldmlvdXMiLCJtZSIsInNob3VsZFByb3BhZyIsIl9kZXN0cm95VE0iLCJyZW1vdmVBbGxMaXN0ZW5lcnMiLCJjU3RvcmUiLCJ0YXJnZXRSZXZzIiwidGFyZ2V0U2NvcGUiLCJvIiwiY3VyV2VpZ2h0IiwibWF4V2VpZ2h0IiwibWluV2VpZ2h0IiwidGFza0NvdW50IiwiZGVTeW5jIiwiZGVTeW5jTWF4VGFza3MiLCJ0YXNrIiwiaXNSdW5uaW5nIiwiZXJyb3JDYXRjaGVyIiwibGFzdEVycm9yIiwiZGlzYWJsZSIsImhhbmRsZUVycm9yIiwicnVuTm93IiwiZW5hYmxlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInByb2Nlc3MiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicnVuIiwiZnJvbSIsIkRhdGUiLCJub3ciLCJ3ZWlnaHQiLCJNYXRoIiwibWF4IiwibWluIiwic2NvcGFibGVzIiwiaGFuZGxlIiwibWVtYmVyIiwic3RhdGVTY29wZSIsImlzU2NvcGFibGVUeXBlIiwiQ29tcCIsImFwcGx5U2NvcGFibGVUeXBlIiwiYXJnejIiXSwibWFwcGluZ3MiOiI7QUFB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TUFBTTtBQUNqQixhQUFZLFFBQVE7QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxNQUFNO0FBQ2pCLGFBQVksUUFBUTtBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxNQUFNO0FBQ2pCLGFBQVksUUFBUTtBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsTUFBTTtBQUNqQixhQUFZLFFBQVE7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsTUFBTTtBQUNqQixhQUFZLFFBQVE7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsTUFBTTtBQUNqQixhQUFZLFFBQVE7QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLE1BQU07QUFDakIsYUFBWSxRQUFRO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxNQUFNO0FBQ2pCLGFBQVksUUFBUTtBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsTUFBTTtBQUNqQixhQUFZLFFBQVE7QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxNQUFNO0FBQ2pCLGFBQVksUUFBUTtBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsTUFBTTtBQUNqQixjQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxNQUFNO0FBQ2pCLGFBQVksUUFBUTtBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLE1BQU07QUFDakIsYUFBWSxRQUFRO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsTUFBTTtBQUNqQixhQUFZLFFBQVE7QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsTUFBTTtBQUNqQixhQUFZLFFBQVE7QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLE1BQU07QUFDakIsYUFBWSxRQUFRO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLE1BQU07QUFDakIsYUFBWSxRQUFRO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxPQUFPO0FBQ2xCLFlBQVcsT0FBTztBQUNsQixhQUFZLFFBQVE7QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQVksUUFBUTtBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsT0FBTztBQUNsQixZQUFXLE1BQU07QUFDakIsYUFBWSxRQUFRO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLE9BQU87QUFDbEIsWUFBVyxNQUFNO0FBQ2pCLGFBQVksUUFBUTtBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxNQUFNO0FBQ2pCLGFBQVksUUFBUTtBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsT0FBTztBQUNsQixhQUFZLFFBQVE7QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLE9BQU87QUFDbEIsYUFBWSxRQUFRO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxPQUFPO0FBQ2xCLFlBQVcsT0FBTztBQUNsQixhQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLE9BQU87QUFDbEIsWUFBVyxPQUFPO0FBQ2xCLGFBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsT0FBTztBQUNsQixZQUFXLE9BQU87QUFDbEIsYUFBWSxRQUFRO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxPQUFPO0FBQ2xCLFlBQVcsT0FBTztBQUNsQixhQUFZLFFBQVE7QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLE9BQU87QUFDbEIsWUFBVyxPQUFPO0FBQ2xCLFlBQVcsT0FBTztBQUNsQixhQUFZLFFBQVE7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsTUFBTTtBQUNqQixhQUFZLFFBQVE7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsTUFBTTtBQUNqQixhQUFZLFFBQVE7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsTUFBTTtBQUNqQixhQUFZLFFBQVE7QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxNQUFNO0FBQ2pCLGFBQVksUUFBUTtBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLE1BQU07QUFDakIsYUFBWSxRQUFRO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsTUFBTTtBQUNqQixhQUFZLFFBQVE7QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxNQUFNO0FBQ2pCLGFBQVksUUFBUTtBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsTUFBTTtBQUNqQixhQUFZLFFBQVE7QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7OztTQzd4QmdCbEIsUSxHQUFBQSxRO1NBa0JBQyxRLEdBQUFBLFE7U0FTQUMsVyxHQUFBQSxXO1NBTUFDLFcsR0FBQUEsVzs7OztBQW5DaEIsS0FBSWUsS0FBSyxtQkFBQW5CLENBQVEsQ0FBUixDQUFUOztBQUVPLFVBQVNDLFFBQVQsQ0FBbUIwSSxHQUFuQixFQUF3QjdHLElBQXhCLEVBQThCeUwsS0FBOUIsRUFBcUNwQixLQUFyQyxFQUE2QztBQUNoRCxTQUFLaEwsR0FBRzZILE1BQUgsQ0FBVWxILElBQVYsQ0FBTCxFQUNJQSxPQUFPQSxLQUFLbUksS0FBTCxDQUFXLEdBQVgsQ0FBUDtBQUNKLFNBQUssQ0FBQ25JLEtBQUt5RSxNQUFYLEVBQ0ksT0FBTyxLQUFQLENBREosS0FFSyxJQUFLekUsS0FBS3lFLE1BQUwsSUFBZSxDQUFwQixFQUNELE9BQU9vQyxJQUFLN0csS0FBTSxDQUFOLENBQUwsSUFBbUJxSyxxQ0FDU3hELElBQUs3RyxLQUFNLENBQU4sQ0FBTCxLQUFvQixFQUQ3QixJQUNtQ3lMLEtBRG5DLEtBRUVBLEtBRjVCLENBREMsS0FLRCxPQUFPdE4sU0FDSDBJLElBQUs3RyxLQUFNLENBQU4sQ0FBTCxJQUNJNkcsSUFBSzdHLEtBQU0sQ0FBTixDQUFMLEtBQW9CLEVBRnJCLEVBR0hBLEtBQUs4RSxLQUFMLENBQVcsQ0FBWCxDQUhHLEVBSUgyRyxLQUpHLEVBSUlwQixLQUpKLENBQVA7QUFNUDs7QUFFTSxVQUFTak0sUUFBVCxDQUFtQnlJLEdBQW5CLEVBQXdCN0csSUFBeEIsRUFBOEIwTCxLQUE5QixFQUFzQztBQUN6QyxTQUFLck0sR0FBRzZILE1BQUgsQ0FBVWxILElBQVYsQ0FBTCxFQUNJQSxPQUFPQSxLQUFLbUksS0FBTCxDQUFXLEdBQVgsQ0FBUDtBQUNKLFlBQU9uSSxLQUFLeUUsTUFBTCxHQUNFb0MsSUFBSzdHLEtBQU0sQ0FBTixDQUFMLEtBQW9CNUIsU0FBU3lJLElBQUs3RyxLQUFNLENBQU4sQ0FBTCxDQUFULEVBQTJCQSxLQUFLOEUsS0FBTCxDQUFXLENBQVgsQ0FBM0IsQ0FEdEIsR0FFRStCLEdBRlQ7QUFHSDs7QUFFRDtBQUNPLFVBQVN4SSxXQUFULENBQXNCd0ksR0FBdEIsRUFBMkI3RyxJQUEzQixFQUFpQ3lMLEtBQWpDLEVBQXdDcEIsS0FBeEMsRUFBZ0Q7QUFDbkQsU0FBS2hMLEdBQUc2SCxNQUFILENBQVVsSCxJQUFWLENBQUwsRUFDSUEsT0FBT0EsS0FBS21JLEtBQUwsQ0FBVyxXQUFYLEVBQXdCd0QsTUFBeEIsQ0FBK0I7QUFBQSxnQkFBT3JGLE1BQU0sR0FBTixJQUFhQSxDQUFwQjtBQUFBLE1BQS9CLENBQVA7QUFDSixZQUFPbkksU0FBUzBJLEdBQVQsRUFBYzdHLElBQWQsRUFBb0J5TCxLQUFwQixDQUFQO0FBQ0g7O0FBRU0sVUFBU25OLFdBQVQsQ0FBc0J1SSxHQUF0QixFQUEyQjdHLElBQTNCLEVBQWlDMEwsS0FBakMsRUFBeUM7QUFDNUMsU0FBS3JNLEdBQUc2SCxNQUFILENBQVVsSCxJQUFWLENBQUwsRUFDSUEsT0FBT0EsS0FBS21JLEtBQUwsQ0FBVyxXQUFYLEVBQXdCd0QsTUFBeEIsQ0FBK0I7QUFBQSxnQkFBT3JGLE1BQU0sR0FBTixJQUFhQSxDQUFwQjtBQUFBLE1BQS9CLENBQVA7QUFDSixZQUFPdEcsS0FBS3lFLE1BQUwsR0FDRW9DLElBQUs3RyxLQUFNLENBQU4sQ0FBTCxLQUFvQjVCLFNBQVN5SSxJQUFLN0csS0FBTSxDQUFOLENBQUwsQ0FBVCxFQUEyQkEsS0FBSzhFLEtBQUwsQ0FBVyxDQUFYLENBQTNCLENBRHRCLEdBRUUrQixHQUZUO0FBR0gsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTBCQSxLQUFJeEgsS0FBSyxtQkFBQW5CLENBQVEsQ0FBUixDQUFUOztLQUNxQjBOLE87Ozs7Y0FDakJDLE8sR0FBVSxFOzs7Ozs0QkFFTkMsRyxFQUFLdEIsRSxFQUFLO0FBQUE7O0FBQ1YsaUJBQUssQ0FBQ25MLEdBQUc2SCxNQUFILENBQVU0RSxHQUFWLENBQUQsSUFBbUJBLEdBQXhCLEVBQ0ksT0FBTzdMLE9BQU9DLElBQVAsQ0FBWTRMLEdBQVosRUFBaUIzTCxPQUFqQixDQUF5QjtBQUFBLHdCQUFLLE1BQUsrQyxFQUFMLENBQVFVLENBQVIsRUFBV2tJLElBQUlsSSxDQUFKLENBQVgsQ0FBTDtBQUFBLGNBQXpCLENBQVA7O0FBRUosa0JBQUtpSSxPQUFMLENBQWFDLEdBQWIsSUFBb0IsS0FBS0QsT0FBTCxDQUFhQyxHQUFiLEtBQXFCLEVBQXpDO0FBQ0Esa0JBQUtELE9BQUwsQ0FBYUMsR0FBYixFQUFrQnpMLElBQWxCLENBQXVCbUssRUFBdkI7QUFFSDs7OzRCQUVHc0IsRyxFQUFLdEIsRSxFQUFLO0FBQUE7O0FBQ1YsaUJBQUssQ0FBQ25MLEdBQUc2SCxNQUFILENBQVU0RSxHQUFWLENBQUQsSUFBbUJBLEdBQXhCLEVBQ0ksT0FBTzdMLE9BQU9DLElBQVAsQ0FBWTRMLEdBQVosRUFBaUIzTCxPQUFqQixDQUF5QjtBQUFBLHdCQUFLLE9BQUtnTCxFQUFMLENBQVF2SCxDQUFSLEVBQVdrSSxJQUFJbEksQ0FBSixDQUFYLENBQUw7QUFBQSxjQUF6QixDQUFQOztBQUVKLGlCQUFLLENBQUMsS0FBS2lJLE9BQUwsQ0FBYUMsR0FBYixDQUFOLEVBQTBCO0FBQzFCLGlCQUFJdEssSUFBSSxLQUFLcUssT0FBTCxDQUFhQyxHQUFiLEVBQWtCWixPQUFsQixDQUEwQlYsRUFBMUIsQ0FBUjtBQUNBLGtCQUFLcUIsT0FBTCxDQUFhQyxHQUFiLEVBQWtCcEUsTUFBbEIsQ0FBeUJsRyxDQUF6QixFQUE0QixDQUE1QjtBQUNIOzs7OEJBRUtzSyxHLEVBQWU7QUFDakIsaUJBQUssQ0FBQyxLQUFLRCxPQUFMLENBQWFDLEdBQWIsQ0FBTixFQUEwQjtBQUMxQixpQkFBSXhHLHFDQUFZLEtBQUt1RyxPQUFMLENBQWFDLEdBQWIsQ0FBWixFQUFKOztBQUZpQiwrQ0FBUDFCLElBQU87QUFBUEEscUJBQU87QUFBQTs7QUFJakIsa0JBQU0sSUFBSTVJLElBQUksQ0FBZCxFQUFpQkEsSUFBSThELE1BQU1iLE1BQTNCLEVBQW1DakQsR0FBbkM7QUFDSThELHVCQUFNOUQsQ0FBTixlQUFZNEksSUFBWjtBQURKO0FBRUg7Ozt1Q0FFYTtBQUNWLGtCQUFLbEgsRUFBTCxhQUFXVyxTQUFYO0FBQ0g7OzswQ0FFZ0I7QUFDYixrQkFBS3NILEVBQUwsYUFBV3RILFNBQVg7QUFDSDs7OzhDQUVvQjtBQUNqQixrQkFBS2dJLE9BQUwsR0FBZSxFQUFmO0FBQ0g7Ozs4QkFFS0MsRyxFQUFLdEIsRSxFQUFLO0FBQUE7O0FBQ1osaUJBQUkzTCxZQUFKO0FBQ0Esa0JBQUtxRSxFQUFMLENBQVE0SSxHQUFSLEVBQWFqTixNQUFLLGNBQWU7QUFDN0Isd0JBQUtzTSxFQUFMLENBQVFXLEdBQVIsRUFBYWpOLEdBQWI7QUFDQTJMO0FBQ0gsY0FIRDtBQUlIOzs7Ozs7bUJBL0NnQm9CLE87Ozs7Ozs7QUMzQnJCO0FBQ0E7Ozs7Ozs7QUNEQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ2hFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ2pHQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ3hCQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUNsQkE7O0FBRUEsK0VBQThFOztBQUU5RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDYkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUNoQkE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUMvQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUJBQWtCLFNBQVM7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDbEJBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7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Ii4uLy4uL2Rpc3QvUmVTY29wZS5icm93c2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDQwZmU1OWMxZDRiZjAxNWQ2MDg2IiwiLypcbiAqIENvcHlyaWdodCAoYykgIDIwMTggV2lzZSBXaWxkIFdlYiAuXG4gKlxuICogIE1JVCBMaWNlbnNlXG4gKlxuICogIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqICBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiAgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqICBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqICBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqICBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcbiAqICBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqICBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiAgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiAgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiAgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiAgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcbiAqICBTT0ZUV0FSRS5cbiAqXG4gKiBAYXV0aG9yIDogTmF0aGFuYWVsIEJyYXVuXG4gKiBAY29udGFjdCA6IGNhaXBpbGFic0BnbWFpbC5jb21cbiAqL1xuXG5sZXQgJGdsb2JhbCA9ICggdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgKSA/IHdpbmRvdyA6IGdsb2JhbDtcblxuaW1wb3J0IFNjb3BlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tIFwiLi9TY29wZVwiO1xuaW1wb3J0IFN0b3JlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tIFwiLi9TdG9yZVwiO1xuaW1wb3J0IHsgYWRkU2NvcGFibGVUeXBlLCByZVNjb3BlLCBzY29wZVRvU3RhdGUgfSBmcm9tIFwiLi91dGlscy9zY29wYWJsZVwiO1xuXG5jb25zdCBSUyA9ICRnbG9iYWwuX19fcmVzY29wZSB8fCB7fTtcbmlmICggJGdsb2JhbC5fX19yZXNjb3BlICkge1xuICAgIGNvbnNvbGUud2FybihcIlJlU2NvcGUgaXMgZGVmaW5lZCBtdWx0aXBsZSB0aW1lcyAhISBcXG5DaGVjayB5b3UncmUgcGFja2FnaW5nXCIpXG59XG5lbHNlIHtcbiAgICBcbiAgICAkZ2xvYmFsLl9fX3Jlc2NvcGUgPSBSUztcbiAgICBTY29wZS5TdG9yZSAgICAgICAgPSBTdG9yZTtcbiAgICAvL1JTLmNvbnNvbGUgICAgICAgICA9IGNvbnNvbGU7XG4gICAgUlMuU2NvcGUgICAgICAgICAgID0gU2NvcGU7XG4gICAgUlMuQ29udGV4dCAgICAgICAgID0gU2NvcGU7XG4gICAgUlMuU3RvcmUgICAgICAgICAgID0gU3RvcmU7XG4gICAgUlMucmVTY29wZSAgICAgICAgID0gcmVTY29wZTtcbiAgICBSUy5zY29wZVRvU3RhdGUgICAgPSBzY29wZVRvU3RhdGU7XG4gICAgUlMucmVTY29wZVN0YXRlICAgID0gc2NvcGVUb1N0YXRlO1xuICAgIFJTLmFkZFNjb3BhYmxlVHlwZSA9IGFkZFNjb3BhYmxlVHlwZTtcbiAgICBSUy5zY29wZVJlZiAgICAgICAgPVxuICAgICAgICBmdW5jdGlvbiBzY29wZVJlZiggbWFwLCBrZXkgKSB7XG4gICAgICAgICAgICBtYXBbIGtleSBdID0gbmV3IFNjb3BlLnNjb3BlUmVmKG1hcFsga2V5IF0pO1xuICAgICAgICAgICAgcmV0dXJuIG1hcDtcbiAgICAgICAgfTtcbiAgICBcbn1cbmV4cG9ydCBkZWZhdWx0IFJTO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC5qcyIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpICAyMDE4IFdpc2UgV2lsZCBXZWIgLlxuICpcbiAqICBNSVQgTGljZW5zZVxuICpcbiAqICBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiAgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqICB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiAgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiAgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiAgVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG4gKiAgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqICBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG4gKiAgU09GVFdBUkUuXG4gKlxuICogQGF1dGhvciA6IE5hdGhhbmFlbCBCcmF1blxuICogQGNvbnRhY3QgOiBjYWlwaWxhYnNAZ21haWwuY29tXG4gKi9cblxuXG52YXIgaXMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi91dGlscy9pcycpLFxuICAgIHsgd2Fsa25TZXQsIHdhbGtuR2V0LCBrZXlXYWxrblNldCwga2V5V2Fsa25HZXQgfSA9IHJlcXVpcmUoJy4vdXRpbHMvdXRpbHMnKSxcbiAgICBFdmVudEVtaXR0ZXIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL3V0aWxzL0VtaXR0ZXInKSxcbiAgICBzaG9ydGlkICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlKCdzaG9ydGlkJylcblx0LCBfX3Byb3RvX19wdXNoICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID0gKCB0YXJnZXQsIGlkLCBwYXJlbnQgKSA9PiB7XG5cdCAgICBsZXQgZm4gICAgICAgPSBmdW5jdGlvbiAoKSB7XG5cdCAgICB9O1xuXHQgICAgZm4ucHJvdG90eXBlID0gcGFyZW50ID8gbmV3IHBhcmVudC5fW2lkXSgpIDogdGFyZ2V0W2lkXSB8fCB7fTtcblx0ICAgIHRhcmdldFtpZF0gICA9IG5ldyBmbigpO1xuXHQgICAgdGFyZ2V0Ll9baWRdID0gZm47XG4gICAgfSxcblx0b3BlblNjb3BlcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID0ge30sXG5cdFNpbXBsZU9iamVjdFByb3RvICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA9ICh7fSkuY29uc3RydWN0b3I7XG5cbi8qKlxuICogQmFzZSBTY29wZSBvYmplY3RcbiAqL1xuY2xhc3MgU2NvcGUgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuXHRzdGF0aWMgZ2V0U2NvcGUoIHNjb3BlcyApIHtcblx0XHRsZXQgc2tleSA9IGlzLmFycmF5KHNjb3BlcykgPyBzY29wZXMuc29ydCgoIGEsIGIgKSA9PiB7XG5cdFx0XHRpZiAoIGEuZmlyc3RuYW1lIDwgYi5maXJzdG5hbWUgKSByZXR1cm4gLTE7XG5cdFx0XHRpZiAoIGEuZmlyc3RuYW1lID4gYi5maXJzdG5hbWUgKSByZXR1cm4gMTtcblx0XHRcdHJldHVybiAwO1xuXHRcdH0pLmpvaW4oJysnKSA6IHNjb3Blcztcblx0XHRyZXR1cm4gb3BlblNjb3Blc1tza2V5XSA9IG9wZW5TY29wZXNbc2tleV0gfHwgbmV3IFNjb3BlKHt9LCB7IGlkOiBza2V5IH0pO1xuXHR9O1xuXHRcblx0XG5cdC8qKlxuXHQgKiBnZXQgYSBwYXJzZWQgcmVmZXJlbmNlIGxpc3QgZnJvbSBzdGF0ZU1hcFxuXHQgKiBAcGFyYW0gX3JlZlxuXHQgKiBAcmV0dXJucyB7e3N0b3JlSWQsIHBhdGgsIGFsaWFzOiAqLCByZWY6ICp9fVxuXHQgKi9cblx0c3RhdGljIHN0YXRlTWFwVG9SZWZMaXN0KCBzbSwgc3RhdGUgPSB7fSwgX3JlZnMgPSBbXSwgYWN0aW9ucyA9IHt9LCBwYXRoID0gXCJcIiApIHtcblx0XHRPYmplY3Qua2V5cyhzbSkuZm9yRWFjaChcblx0XHRcdGtleSA9PiB7XG5cdFx0XHRcdGxldCBjcGF0aCA9IHBhdGggPyBwYXRoICsgJy4nICsga2V5IDoga2V5O1xuXHRcdFx0XHRzbVtrZXldIGluc3RhbmNlb2YgU2NvcGUuc2NvcGVSZWZcblx0XHRcdFx0PyBfcmVmcy5wdXNoKHNtW2tleV0ucGF0aCArICc6JyArIGNwYXRoKVxuXHRcdFx0XHQ6IChzbVtrZXldICYmIHNtW2tleV0gaW5zdGFuY2VvZiBGdW5jdGlvbilcblx0XHRcdFx0ICA/IGFjdGlvbnNba2V5XSA9IHNtW2tleV1cblx0XHRcdFx0ICA6IChzbVtrZXldICYmIHNtW2tleV0ucHJvdG90eXBlIGluc3RhbmNlb2YgU2NvcGUuU3RvcmUpXG5cdFx0XHRcdCAgICA/IF9yZWZzLnB1c2goc21ba2V5XS5hcyhjcGF0aCkpXG5cdFx0XHRcdCAgICA6IHN0YXRlW2NwYXRoXSA9IHNtW2tleV1cblx0XHRcdFx0Ly86IHRoaXMuc3RhdGVNYXBUb1JlZkxpc3Qoc21ba2V5XSwgX3JlZnMsIHBhdGggKyAnLicgKyBrZXkpXG5cdFx0XHR9XG5cdFx0KVxuXHRcdHJldHVybiBfcmVmcztcblx0fVxuXHRcblx0c3RhdGljIHBlcnNpc3RlbmNlVG0gPSAxOy8vIGlmID4gMCwgd2lsbCB3YWl0ICdwZXJzaXN0ZW5jZVRtJyBtcyBiZWZvcmUgZGVzdHJveVxuXHQvLyB3aGVuXG5cdC8vIGRpc3Bvc2UgcmVhY2ggMFxuXHRzdGF0aWMgU3RvcmUgICAgPSBudWxsO1xuXHRzdGF0aWMgc2NvcGVSZWYgPSBmdW5jdGlvbiBzY29wZVJlZiggcGF0aCApIHtcblx0XHR0aGlzLnBhdGggPSBwYXRoO1xuXHR9O1xuXHRzdGF0aWMgc2NvcGVzICAgPSBvcGVuU2NvcGVzOy8vIGFsbCBhY3RpdmUgc2NvcGVzXG5cdFxuXHRcblx0LyoqXG5cdCAqIEluaXQgYSBSZVNjb3BlIHNjb3BlXG5cdCAqXG5cdCAqIEBwYXJhbSBzdG9yZXNNYXAge09iamVjdH0gT2JqZWN0IHdpdGggdGhlIGluaXRpYWwgc3RvcmVzIGRlZmluaXRpb24gLyBpbnN0YW5jZXNcblx0ICogQHBhcmFtIGNvbmZpZyB7T2JqZWN0fSBTY29wZSBjb25maWdcblx0ICoge1xuXHQgKiAgcGFyZW50IHtzY29wZX0gQG9wdGlvbmFsIHBhcmVudCBzY29wZVxuXHQgKlxuXHQgKiAgaWQge3N0cmluZ30gQG9wdGlvbmFsIGlkICggaWYgdGhpcyBpZCBleGlzdCBzdG9yZXNNYXAgd2lsbCBiZSBtZXJnZSBvbiB0aGUgJ2lkJ1xuXHQgKiAgICAgc2NvcGUpIGtleSB7c3RyaW5nfSBAb3B0aW9uYWwga2V5IG9mIHRoZSBzY29wZSAoIGlmIG5vIGlkIGlzIHNldCwgdGhlIHNjb3BlIGlkXG5cdCAqICAgICB3aWxsIGJlIChwYXJlbnQuaWQrJz4nK2tleSkgaW5jcmVtZW50SWQge2Jvb2x9IEBvcHRpb25hbCB0cnVlIHRvIGFkZCBhIHN1ZmZpeFxuXHQgKiAgICAgaWQsIGlmIHRoZSBwcm92aWRlZCBrZXkgb3IgaWQgZ2xvYmFsbHkgZXhpc3Rcblx0ICpcblx0ICogIHN0YXRlIHtPYmplY3R9IEBvcHRpb25hbCBpbml0aWFsIHN0YXRlIGJ5IHN0b3JlIGFsaWFzXG5cdCAqICBkYXRhIHtPYmplY3R9IEBvcHRpb25hbCBpbml0aWFsIGRhdGEgYnkgc3RvcmUgYWxpYXNcblx0ICpcblx0ICogIHJvb3RFbWl0dGVyIHtib29sfSBAb3B0aW9uYWwgdHJ1ZSB0byBub3QgYmVpbmcgZGVzdGFiaWxpemVkIGJ5IHBhcmVudFxuXHQgKiAgYm91bmRlZEFjdGlvbnMge2FycmF5IHwgcmVnZXhwfSBAb3B0aW9uYWwgbGlzdCBvciByZWdleHAgb2YgYWN0aW9ucyBub3Rcblx0ICogICAgIHByb3BhZ2F0ZWQgdG8gdGhlIHBhcmVudFxuXHQgKlxuXHQgKiAgcGVyc2lzdGVuY2VUbSB7bnVtYmVyKSBpZiA+IDAsIHdpbGwgd2FpdCAncGVyc2lzdGVuY2VUbScgbXMgYmVmb3JlIGRlc3Ryb3kgd2hlblxuXHQgKiAgICAgZGlzcG9zZSByZWFjaCAwIGF1dG9EZXN0cm95ICB7Ym9vbH0gd2lsbCB0cmlnZ2VyIHJldGFpbiAmIGRpc3Bvc2UgYWZ0ZXIgc3RhcnRcblx0ICogIH1cblx0ICogQHJldHVybnMge1Njb3BlfVxuXHQgKi9cblx0Y29uc3RydWN0b3IoIHN0b3Jlc01hcCwgeyBwYXJlbnQsIHVwcGVyU2NvcGUsIGtleSwgaWQsIHNuYXBzaG90LCBzdGF0ZSwgZGF0YSwgaW5jcmVtZW50SWQgPSAhIWtleSwgcGVyc2lzdGVuY2VUbSwgYXV0b0Rlc3Ryb3ksIHJvb3RFbWl0dGVyLCBib3VuZGVkQWN0aW9ucyB9ID0ge30gKSB7XG5cdFx0c3VwZXIoKTtcblx0XHR2YXIgXyA9IHtcblx0XHRcdGtleVBJRDogKHVwcGVyU2NvcGUgJiYgdXBwZXJTY29wZS5faWQgfHwgcGFyZW50ICYmIHBhcmVudC5faWQgfHwgc2hvcnRpZC5nZW5lcmF0ZSgpKSxcblx0XHRcdGtleSxcblx0XHRcdGluY3JlbWVudElkLFxuXHRcdFx0YmFzZUlkOiBpZFxuXHRcdH0sIGtleUluZGV4O1xuXHRcdFxuXHRcdGlkID0gaWQgfHwga2V5ICYmIChfLmtleVBJRCArICc+JyArIGtleSk7XG5cdFx0XG5cdFx0Xy5pc0xvY2FsSWQgPSAhaWQ7XG5cdFx0XG5cdFx0Ly9pZiAoIHBhcmVudCAmJiBrZXkgKSB7XG5cdFx0Ly8gICAga2V5SW5kZXggPSBwYXJlbnQuXy5jaGlsZFNjb3Blcy5maW5kKGN0eD0+KGN0eC5faWQ9PWlkKSk7XG5cdFx0Ly8gICAgaWYgKCBrZXlJbmRleCA9PSAtMSApIGtleUluZGV4ID0gcGFyZW50Ll8uc2VlbkNoaWxkcztcblx0XHQvLyAgICBrZXlJbmRleCsrO1xuXHRcdC8vICAgIGlmICgga2V5SW5kZXggKVxuXHRcdC8vICAgICAgICBpZCA9IGlkICsgJ1snICsga2V5SW5kZXggKyAnXSc7XG5cdFx0Ly99XG5cdFx0XG5cdFx0aWQgPSBpZCB8fCAoXCJfX19fX1wiICsgc2hvcnRpZC5nZW5lcmF0ZSgpKTtcblx0XHRcblx0XHRcblx0XHRpZiAoIG9wZW5TY29wZXNbaWRdICYmICFpbmNyZW1lbnRJZCApIHsvLyBvdmVyd3JpdGUgZXhpc3Rpbmcgc2NvcGVcblx0XHRcdHRoaXMuX2lkID0gaWQ7XG5cdFx0XHRvcGVuU2NvcGVzW2lkXS5yZWdpc3RlcihzdG9yZXNNYXApO1xuXHRcdFx0cmV0dXJuIG9wZW5TY29wZXNbaWRdXG5cdFx0fVxuXHRcdGVsc2UgaWYgKCBvcGVuU2NvcGVzW2lkXSAmJiBpbmNyZW1lbnRJZCApIHsvLyBnZW5lcmF0ZSBrZXkgaWRcblx0XHRcdGxldCBpID0gLTE7XG5cdFx0XHR3aGlsZSAoIG9wZW5TY29wZXNbaWQgKyAnWycgKyAoKytpKSArICddJ10gKSA7XG5cdFx0XHRpZCA9IGlkICsgJ1snICsgaSArICddJztcblx0XHR9XG5cdFx0XG5cdFx0dGhpcy5faWQgICAgICAgID0gaWQ7XG5cdFx0dGhpcy5fcmV2ICAgICAgID0gMDtcblx0XHRvcGVuU2NvcGVzW2lkXSAgPSB0aGlzO1xuXHRcdF8ucGVyc2lzdGVuY2VUbSA9IHBlcnNpc3RlbmNlVG0gfHwgdGhpcy5jb25zdHJ1Y3Rvci5wZXJzaXN0ZW5jZVRtO1xuXHRcdFxuXHRcdHRoaXMuYWN0aW9ucyA9IHt9O1xuXHRcdHRoaXMuc3RvcmVzICA9IHt9O1xuXHRcdHRoaXMuc3RhdGUgICA9IHt9O1xuXHRcdHRoaXMuZGF0YSAgICA9IHt9O1xuXHRcdFxuXHRcdHRoaXMucGFyZW50ICAgICAgID0gcGFyZW50O1xuXHRcdHRoaXMuXyAgICAgICAgICAgID0gXztcblx0XHR0aGlzLl9hdXRvRGVzdHJveSA9IGF1dG9EZXN0cm95O1xuXHRcdFxuXHRcdGlmICggcGFyZW50ICYmIHBhcmVudC5kZWFkIClcblx0XHRcdHRocm93IG5ldyBFcnJvcihcIkNhbid0IHVzZSBhIGRlYWQgc2NvcGUgYXMgcGFyZW50ICFcIik7XG5cdFx0XG5cdFx0X19wcm90b19fcHVzaCh0aGlzLCAnYWN0aW9ucycsIHBhcmVudCk7XG5cdFx0X19wcm90b19fcHVzaCh0aGlzLCAnc3RvcmVzJywgcGFyZW50KTtcblx0XHRfX3Byb3RvX19wdXNoKHRoaXMsICdzdGF0ZScsIHBhcmVudCk7XG5cdFx0X19wcm90b19fcHVzaCh0aGlzLCAnZGF0YScsIHBhcmVudCk7XG5cdFx0XG5cdFx0dGhpcy5zb3VyY2VzICAgICAgPSBbXTtcblx0XHRfLmNoaWxkU2NvcGVzICAgICA9IFtdO1xuXHRcdF8uY2hpbGRTY29wZXNMaXN0ID0gW107XG5cdFx0Xy51blN0YWJsZUNoaWxkcyAgPSAwO1xuXHRcdF8uc2VlbkNoaWxkcyAgICAgID0gMDtcblx0XHRcblx0XHR0aGlzLl9fcmV0YWlucyA9IHsgYWxsOiAwIH07XG5cdFx0dGhpcy5fX2xvY2tzICAgPSB7IGFsbDogMSB9O1xuXHRcdFxuXHRcdC8vXy5zbmFwc2hvdCAgICAgICAgPSBzbmFwc2hvdDtcblx0XHQvL18uc25hcHNob3QgICAgICAgID0gc25hcHNob3Q7XG5cdFx0Xy5fYm91bmRlZEFjdGlvbnMgPSBpcy5hcnJheShib3VuZGVkQWN0aW9ucylcblx0XHQgICAgICAgICAgICAgICAgICAgID8geyB0ZXN0OiBib3VuZGVkQWN0aW9ucy5pbmNsdWRlcy5iaW5kKGJvdW5kZWRBY3Rpb25zKSB9XG5cdFx0ICAgICAgICAgICAgICAgICAgICA6IGJvdW5kZWRBY3Rpb25zO1xuXHRcdF8uX2xpc3RlbmluZyAgICAgID0ge307XG5cdFx0Xy5fc2NvcGUgICAgICAgICAgPSB7fTtcblx0XHRfLl9taXhlZCAgICAgICAgICA9IFtdO1xuXHRcdF8uX21peGVkTGlzdCAgICAgID0gW107XG5cdFx0Xy5mb2xsb3dlcnMgICAgICAgPSBbXTtcblx0XHRpZiAoIHBhcmVudCApIHtcblx0XHRcdHBhcmVudC5yZXRhaW4oXCJpc015UGFyZW50XCIpO1xuXHRcdFx0aWYgKCAhcm9vdEVtaXR0ZXIgKSB7XG5cdFx0XHRcdCFwYXJlbnQuX3N0YWJsZSAmJiB0aGlzLndhaXQoXCJ3YWl0aW5nUGFyZW50XCIpO1xuXHRcdFx0XHRwYXJlbnQub24oXy5fcGFyZW50TGlzdCA9IHtcblx0XHRcdFx0XHQnc3RhYmxlJyAgOiBzID0+IHRoaXMucmVsZWFzZShcIndhaXRpbmdQYXJlbnRcIiksXG5cdFx0XHRcdFx0J3Vuc3RhYmxlJzogcyA9PiB0aGlzLndhaXQoXCJ3YWl0aW5nUGFyZW50XCIpLFxuXHRcdFx0XHRcdCd1cGRhdGUnICA6IHMgPT4gdGhpcy5fcHJvcGFnKClcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0cGFyZW50Lm9uKF8uX3BhcmVudExpc3QgPSB7XG5cdFx0XHRcdFx0J3VwZGF0ZSc6IHMgPT4gdGhpcy5fcHJvcGFnKClcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0XHQvLyB0aGlzLnJlZ2lzdGVyKHBhcmVudC5fX3Njb3BlLCBzdGF0ZSwgZGF0YSk7XG5cdFx0fVxuXHRcdFxuXHRcdFxuXHRcdHRoaXMucmVnaXN0ZXIoc3RvcmVzTWFwLCBzdGF0ZSwgZGF0YSk7XG5cdFx0dGhpcy5fX2xvY2tzLmFsbC0tO1xuXHRcdHRoaXMuX3N0YWJsZSA9ICF0aGlzLl9fbG9ja3MuYWxsO1xuXHRcdFxuXHRcdGlmICggcGFyZW50ICkge1xuXHRcdFx0cGFyZW50Ll9hZGRDaGlsZCh0aGlzKTtcblx0XHR9XG5cdFx0XG5cdFx0dGhpcy5yZXN0b3JlKHNuYXBzaG90KTtcblx0XHRcblx0XHRpZiAoIGF1dG9EZXN0cm95IClcblx0XHRcdHNldFRpbWVvdXQoXG5cdFx0XHRcdHRtID0+IHtcblx0XHRcdFx0XHR0aGlzLnJldGFpbihcImF1dG9EZXN0cm95XCIpO1xuXHRcdFx0XHRcdHRoaXMuZGlzcG9zZShcImF1dG9EZXN0cm95XCIpO1xuXHRcdFx0XHR9XG5cdFx0XHQpXG5cdFx0XG5cdH1cblx0XG5cdC8qKlxuXHQgKlxuXHQgKiBNb3VudCB0aGUgc3RvcmVzIGluIHN0b3Jlc0xpc3QsIGluIHRoaXMgc2NvcGUgb3IgaW4gaXRzIHBhcmVudHMgb3IgbWl4ZWQgc2NvcGVzXG5cdCAqXG5cdCAqIEBwYXJhbSBzdG9yZXNMaXN0IHtzdHJpbmd8c3RvcmVSZWZ9IFN0b3JlIG5hbWUsIEFycmF5IG9mIFN0b3JlIG5hbWVzLCBvciBSZXNjb3BlXG5cdCAqICAgICBzdG9yZSByZWYgZnJvbSBTdG9yZTo6YXMgb3IgU3RvcmU6YXNcblx0ICogQHBhcmFtIHN0YXRlXG5cdCAqIEBwYXJhbSBkYXRhXG5cdCAqIEByZXR1cm5zIHtTY29wZX1cblx0ICovXG5cdG1vdW50KCBzdG9yZXNMaXN0LCBzbmFwc2hvdCwgc3RhdGUsIGRhdGEgKSB7XG5cdFx0aWYgKCBpcy5hcnJheShzdG9yZXNMaXN0KSApIHtcblx0XHRcdHN0b3Jlc0xpc3QuZm9yRWFjaChrID0+IHRoaXMuX21vdW50KGssIHNuYXBzaG90LCBzdGF0ZSwgZGF0YSkpO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdHRoaXMuX21vdW50KC4uLmFyZ3VtZW50cyk7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cdFxuXHRfbW91bnQoIGlkLCBzbmFwc2hvdCwgc3RhdGUsIGRhdGEgKSB7XG5cdFx0bGV0IHJlZiwgc25hcDtcblx0XHRcblx0XHRyZWYgPSB0aGlzLnBhcnNlUmVmKGlkKVxuXHRcdFxuXHRcdGlmICggaWQgPT0gXCIkcGFyZW50XCIgKSByZXR1cm47XG5cdFx0aWYgKCAhdGhpcy5fLl9zY29wZVtyZWYuc3RvcmVJZF0gKSB7Ly9hc2sgbWl4ZWQgfHwgcGFyZW50XG5cdFx0XHRpZiAoIHRoaXMuXy5fbWl4ZWQucmVkdWNlUmlnaHQoKCBtb3VudGVkLCBjdHggKSA9PiAobW91bnRlZCB8fCBjdHguX21vdW50KGlkLCBzbmFwc2hvdCwgc3RhdGUsIGRhdGEpKSwgZmFsc2UpIHx8XG5cdFx0XHRcdCF0aGlzLnBhcmVudCApXG5cdFx0XHRcdHJldHVybjtcblx0XHRcdHJldHVybiB0aGlzLnBhcmVudC5fbW91bnQoLi4uYXJndW1lbnRzKTtcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHRsZXQgc3RvcmUgPSB0aGlzLl8uX3Njb3BlW3JlZi5zdG9yZUlkXSwgdGFza1F1ZXVlID0gW107XG5cdFx0XHRpZiAoIGlzLnJzU3RvcmVDbGFzcyhzdG9yZSkgKSB7XG5cdFx0XHRcdHRoaXMuXy5fc2NvcGVbcmVmLnN0b3JlSWRdID0gbmV3IHN0b3JlKHRoaXMsIHtcblx0XHRcdFx0XHQvL3NuYXBzaG90LFxuXHRcdFx0XHRcdG5hbWU6IHJlZi5zdG9yZUlkLFxuXHRcdFx0XHRcdHN0YXRlLFxuXHRcdFx0XHRcdGRhdGFcblx0XHRcdFx0fSwgdGFza1F1ZXVlKTtcblx0XHRcdFx0d2hpbGUgKCB0YXNrUXVldWUubGVuZ3RoICkgdGFza1F1ZXVlLnNoaWZ0KCkoKTtcblx0XHRcdH1cblx0XHRcdGVsc2UgaWYgKCBpcy5yc1Njb3BlQ2xhc3Moc3RvcmUpICkge1xuXHRcdFx0XHRzdG9yZSA9IHRoaXMuXy5fc2NvcGVbcmVmLnN0b3JlSWRdID0gbmV3IHN0b3JlKHsgJHBhcmVudDogdGhpcyB9LCB7XG5cdFx0XHRcdFx0a2V5ICAgICAgICA6IHJlZi5zdG9yZUlkLFxuXHRcdFx0XHRcdGluY3JlbWVudElkOiB0cnVlLFxuXHRcdFx0XHRcdHVwcGVyU2NvcGUgOiB0aGlzXG5cdFx0XHRcdFx0Ly9hdXRvRGVzdHJveTogdHJ1ZVxuXHRcdFx0XHRcdC8vcGFyZW50OiB0aGlzXG5cdFx0XHRcdH0pO1xuXHRcdFx0XHQvL3RoaXMuXy5fc2NvcGVbIHJlZi5zdG9yZUlkIF0ucmV0YWluKFwic2NvcGVkQ2hpbGRTY29wZVwiKTtcblx0XHRcdFx0Ly90aGlzLl93YXRjaFN0b3JlKHJlZi5zdG9yZUlkKTtcblx0XHRcdFx0aWYgKCByZWYucGF0aC5sZW5ndGggPiAxIClcblx0XHRcdFx0XHR0aGlzLl8uX3Njb3BlW3JlZi5zdG9yZUlkXS5tb3VudChyZWYucGF0aC5zbGljZSgxKS5qb2luKCcuJyksIHNuYXBzaG90LCBzdGF0ZSwgZGF0YSlcblx0XHRcdFx0Ly9lbHNlIHJldHVybiB0aGlzLl8uX3Njb3BlWyByZWYuc3RvcmVJZCBdO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCBpcy5yc1N0b3JlKHN0b3JlKSApIHtcblx0XHRcdFx0aWYgKCBzdGF0ZSAhPT0gdW5kZWZpbmVkICYmIGRhdGEgPT09IHVuZGVmaW5lZCApXG5cdFx0XHRcdFx0c3RvcmUuc2V0U3RhdGUoc3RhdGUpO1xuXHRcdFx0XHRlbHNlIGlmICggc3RhdGUgIT09IHVuZGVmaW5lZCApXG5cdFx0XHRcdFx0c3RvcmUuc3RhdGUgPSBzdGF0ZTtcblx0XHRcdFx0XG5cdFx0XHRcdGlmICggZGF0YSAhPT0gdW5kZWZpbmVkIClcblx0XHRcdFx0XHRzdG9yZS5wdXNoKGRhdGEpO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5fd2F0Y2hTdG9yZShyZWYuc3RvcmVJZCk7XG5cdFx0fVxuXHRcdFxuXHRcdFxuXHRcdHJldHVybiB0aGlzLl8uX3Njb3BlW3JlZi5zdG9yZUlkXTtcblx0fVxuXHRcblx0X3dhdGNoU3RvcmUoIGlkLCBzdGF0ZSwgZGF0YSApIHtcblx0XHRpZiAoICF0aGlzLl8uX2xpc3RlbmluZ1tpZF0gJiYgIWlzLmZuKHRoaXMuXy5fc2NvcGVbaWRdKSApIHtcblx0XHRcdC8vaWYgKCBpcy5yc1N0b3JlKHRoaXMuXy5fc2NvcGVbIGlkIF0pICkge1xuXHRcdFx0IXRoaXMuXy5fc2NvcGVbaWRdLl9hdXRvRGVzdHJveSAmJiB0aGlzLl8uX3Njb3BlW2lkXS5yZXRhaW4oXCJzY29wZWRcIik7XG5cdFx0XHQhdGhpcy5fLl9zY29wZVtpZF0uaXNTdGFibGUoKSAmJiB0aGlzLndhaXQoaWQpO1xuXHRcdFx0dGhpcy5fLl9zY29wZVtpZF0ub24oXG5cdFx0XHRcdHRoaXMuXy5fbGlzdGVuaW5nW2lkXSA9IHtcblx0XHRcdFx0XHQnZGVzdHJveScgOiBzID0+IHtcblx0XHRcdFx0XHRcdGRlbGV0ZSB0aGlzLl8uX2xpc3RlbmluZ1tpZF07XG5cdFx0XHRcdFx0XHR0aGlzLl8uX3Njb3BlW2lkXSA9IHRoaXMuXy5fc2NvcGVbaWRdLmNvbnN0cnVjdG9yO1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0J3VwZGF0ZScgIDogcyA9PiB0aGlzLnByb3BhZygpLFxuXHRcdFx0XHRcdCdzdGFibGUnICA6IHMgPT4gdGhpcy5yZWxlYXNlKGlkKSxcblx0XHRcdFx0XHQndW5zdGFibGUnOiBzID0+IHRoaXMud2FpdChpZClcblx0XHRcdFx0fSk7XG5cdFx0fVxuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cdFxuXHQvKipcblx0ICogTWl4IHRhcmdldEN0eCBvbiB0aGlzIHNjb3BlXG5cdCAqIE1peGVkIHNjb3BlIHBhcmVudHMgYXJlIE5PVCBtYXBwZWRcblx0ICogQHBhcmFtIHRhcmdldEN0eFxuXHQgKi9cblx0bWl4aW4oIHRhcmdldEN0eCApIHtcblx0XHRsZXQgcGFyZW50ID0gdGhpcy5wYXJlbnQsIGxpc3RzO1xuXHRcdFxuXHRcdHRoaXMuXy5fbWl4ZWQucHVzaCh0YXJnZXRDdHgpXG5cdFx0dGFyZ2V0Q3R4LnJldGFpbihcIm1peGVkVG9cIik7XG5cdFx0aWYgKCAhdGFyZ2V0Q3R4Ll9zdGFibGUgKVxuXHRcdFx0dGhpcy53YWl0KHRhcmdldEN0eC5faWQpO1xuXHRcdHRoaXMuXy5fbWl4ZWRMaXN0LnB1c2gobGlzdHMgPSB7XG5cdFx0XHQnc3RhYmxlJyAgOiBzID0+IHRoaXMucmVsZWFzZSh0YXJnZXRDdHguX2lkKSxcblx0XHRcdCd1bnN0YWJsZSc6IHMgPT4gdGhpcy53YWl0KHRhcmdldEN0eC5faWQpLFxuXHRcdFx0J3VwZGF0ZScgIDogcyA9PiB0aGlzLl9wcm9wYWcoKVxuXHRcdH0pO1xuXHRcdFxuXHRcdC8vdGhpcy5hY3Rpb25zID0ge307XG5cdFx0Ly90aGlzLnN0b3JlcyAgPSB7fTtcblx0XHQvL3RoaXMuc3RhdGUgICA9IHt9O1xuXHRcdC8vdGhpcy5kYXRhICAgID0ge307XG5cdFx0dGFyZ2V0Q3R4Lm9uKGxpc3RzKTtcblx0XHRcblx0XHQvLyByZXNldCBwcm90b3Ncblx0XHQvLyBwdXNoIG5ldyBwcm90byB3aXRoIHBhcmVudFxuXHRcdF9fcHJvdG9fX3B1c2godGhpcywgJ2FjdGlvbnMnLCBwYXJlbnQpO1xuXHRcdF9fcHJvdG9fX3B1c2godGhpcywgJ3N0b3JlcycsIHBhcmVudCk7XG5cdFx0X19wcm90b19fcHVzaCh0aGlzLCAnc3RhdGUnLCBwYXJlbnQpO1xuXHRcdF9fcHJvdG9fX3B1c2godGhpcywgJ2RhdGEnLCBwYXJlbnQpO1xuXHRcdC8vIHByaW50IGxvY2FseiBhY2Nlc3NvcnNcblx0XHR0aGlzLnJlbGluayh0aGlzLl8uX3Njb3BlLCB0aGlzLCBmYWxzZSwgdHJ1ZSk7XG5cdFx0XG5cdFx0dGhpcy5fLl9taXhlZC5mb3JFYWNoKFxuXHRcdFx0Y3R4ID0+IHtcblx0XHRcdFx0Ly8gcHVzaCBwcm90b3Ncblx0XHRcdFx0X19wcm90b19fcHVzaCh0aGlzLCAnYWN0aW9ucycpO1xuXHRcdFx0XHRfX3Byb3RvX19wdXNoKHRoaXMsICdzdG9yZXMnKTtcblx0XHRcdFx0X19wcm90b19fcHVzaCh0aGlzLCAnc3RhdGUnKTtcblx0XHRcdFx0X19wcm90b19fcHVzaCh0aGlzLCAnZGF0YScpO1xuXHRcdFx0XHR0aGlzLnN0b3Jlcy5fX29yaWdpbiA9IFwibWl4ZWQgXCIgKyBjdHguX2lkO1xuXHRcdFx0XHQvLyB3cml0ZSBtaXhlZCBhY2Nlc3NvcnNcblx0XHRcdFx0Y3R4LnJlbGluayhjdHguXy5fc2NvcGUsIHRoaXMsIHRydWUsIHRydWUpXG5cdFx0XHR9XG5cdFx0KVxuXHR9XG5cdFxuXHQvKipcblx0ICogUmVnaXN0ZXIgc3RvcmVzIGluIHN0b3Jlc01hcCAmIGxpbmsgdGhlbSBpbiB0aGUgcHJvdG9zXG5cdCAqIEBwYXJhbSBzdG9yZXNNYXBcblx0ICogQHBhcmFtIHN0YXRlXG5cdCAqIEBwYXJhbSBkYXRhXG5cdCAqL1xuXHRyZWdpc3Rlciggc3RvcmVzTWFwLCBzdGF0ZSA9IHt9LCBkYXRhID0ge30gKSB7XG5cdFx0dGhpcy5yZWxpbmsoc3RvcmVzTWFwLCB0aGlzLCBmYWxzZSwgZmFsc2UpO1xuXHRcdE9iamVjdC5rZXlzKHN0b3Jlc01hcCkuZm9yRWFjaChcblx0XHRcdGlkID0+IHtcblx0XHRcdFx0aWYgKCBpZCA9PSBcIiRwYXJlbnRcIiApIHJldHVybjtcblx0XHRcdFx0aWYgKCBzdG9yZXNNYXBbaWRdLnNpbmdsZXRvbiB8fCAoaXMuZm4oc3RvcmVzTWFwW2lkXSkgJiYgKHN0YXRlW2lkXSB8fCBkYXRhW2lkXSkpICkge1xuXHRcdFx0XHRcdHRoaXMuX21vdW50KGlkLCB1bmRlZmluZWQsIHN0YXRlW2lkXSwgZGF0YVtpZF0pXG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZSBpZiAoIHN0YXRlW2lkXSB8fCBkYXRhW2lkXSApIHtcblx0XHRcdFx0XHRpZiAoIGRhdGFbaWRdICkge1xuXHRcdFx0XHRcdFx0aWYgKCBzdGF0ZVtpZF0gKVxuXHRcdFx0XHRcdFx0XHR0aGlzLnN0b3Jlc1tpZF0uc3RhdGUgPSBzdGF0ZVtpZF07XG5cdFx0XHRcdFx0XHR0aGlzLnN0b3Jlc1tpZF0ucHVzaChkYXRhW2lkXSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGVsc2UgaWYgKCBzdGF0ZVtpZF0gKSB7XG5cdFx0XHRcdFx0XHR0aGlzLnN0b3Jlc1tpZF0uc2V0U3RhdGUoc3RhdGVbaWRdKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5fd2F0Y2hTdG9yZShpZCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHQpXG5cdFx0XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBNYXAgc3JjQ3R4IHN0b3JlJ3Mgb24gdGFyZ2V0Q3R4IGhlYWRlcnMgcHJvdG8nc1xuXHQgKiBAcGFyYW0gc3JjQ3R4XG5cdCAqIEBwYXJhbSB0YXJnZXRDdHhcblx0ICogQHBhcmFtIHN0YXRlXG5cdCAqIEBwYXJhbSBkYXRhXG5cdCAqL1xuXHRyZWxpbmsoIHNyY0N0eCwgdGFyZ2V0Q3R4ID0gdGhpcywgZXh0ZXJuYWwsIGZvcmNlICkge1xuXHRcdGxldCBsY3R4ID0gdGFyZ2V0Q3R4Ll8uc3RvcmVzLnByb3RvdHlwZTtcblx0XHRPYmplY3Qua2V5cyhzcmNDdHgpXG5cdFx0ICAgICAgLmZvckVhY2goXG5cdFx0XHQgICAgICBpZCA9PiB7XG5cdFx0XHRcdCAgICAgIGlmICggIWZvcmNlICYmIHRhcmdldEN0eC5fLl9zY29wZVtpZF0gPT09IHNyY0N0eFtpZF0gfHxcblx0XHRcdFx0XHQgICAgICB0YXJnZXRDdHguXy5fc2NvcGVbaWRdICYmICh0YXJnZXRDdHguXy5fc2NvcGVbaWRdLmNvbnN0cnVjdG9yID09PSBzcmNDdHhbaWRdKSApXG5cdFx0XHRcdFx0ICAgICAgcmV0dXJuO1xuXHRcdFx0XHRcblx0XHRcdFx0ICAgICAgaWYgKCAhZm9yY2UgJiYgdGFyZ2V0Q3R4Ll8uX3Njb3BlW2lkXSApIHtcblx0XHRcdFx0XHQgICAgICBpZiAoICFleHRlcm5hbCAmJiAhaXMuZm4odGFyZ2V0Q3R4Ll8uX3Njb3BlW2lkXSkgKSB7XG5cdFx0XHRcdFx0XHQgICAgICBjb25zb2xlLmluZm8oXCJSZXNjb3BlIFN0b3JlIDogXCIsIGlkLCBcIiBhbHJlYWR5IGV4aXN0IGluIHRoaXMgc2NvcGUgISAoIEhvdCBzd2l0Y2hpbmcgdGhlIHN0b3JlIClcIik7XG5cdFx0XHRcdFx0XHQgICAgICBsZXQgdG1wICAgICAgICAgICAgICAgID0gdGFyZ2V0Q3R4Ll8uX3Njb3BlW2lkXTtcblx0XHRcdFx0XHRcdCAgICAgIHRhcmdldEN0eC5fLl9zY29wZVtpZF0gPSB0YXJnZXRDdHguXy5fc2NvcGVbaWRdLmNvbnN0cnVjdG9yO1xuXHRcdFx0XHRcdFx0ICAgICAgdGhpcy5fbW91bnQoaWQsIG51bGwsIHRtcC5zdGF0ZSk7XG5cdFx0XHRcdFx0XHQgICAgICB0bXAuZGVzdHJveSgpO1xuXHRcdFx0XHRcdFx0ICAgICAgLy90YXJnZXRDdHguXy5fc2NvcGVbIGlkIF0uX19wcm90b19fID0gdG1wLl9fcHJvdG9fXztcblx0XHRcdFx0XHQgICAgICB9XG5cdFx0XHRcdFx0ICAgICAgaWYgKCAhZXh0ZXJuYWwgJiYgaXMuZm4odGFyZ2V0Q3R4Ll8uX3Njb3BlW2lkXSkgKVxuXHRcdFx0XHRcdFx0ICAgICAgdGFyZ2V0Q3R4Ll8uX3Njb3BlW2lkXSA9IHNyY0N0eFtpZF07XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0ICAgICAgcmV0dXJuO1xuXHRcdFx0XHQgICAgICB9XG5cdFx0XHRcdCAgICAgIGVsc2UgaWYgKCAhZm9yY2UgJiYgIWV4dGVybmFsIClcblx0XHRcdFx0XHQgICAgICB0aGlzLl8uX3Njb3BlW2lkXSA9IHNyY0N0eFtpZF07XG5cdFx0XHRcdFxuXHRcdFx0XHQgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoXG5cdFx0XHRcdFx0ICAgICAgbGN0eCxcblx0XHRcdFx0XHQgICAgICBpZCxcblx0XHRcdFx0XHQgICAgICB7XG5cdFx0XHRcdFx0XHQgICAgICBlbnVtZXJhYmxlICA6IHRydWUsXG5cdFx0XHRcdFx0XHQgICAgICBjb25maWd1cmFibGU6IHRydWUsXG5cdFx0XHRcdFx0XHQgICAgICBnZXQgICAgICAgICA6ICgpID0+IHRoaXMuXy5fc2NvcGVbaWRdXG5cdFx0XHRcdFx0ICAgICAgfVxuXHRcdFx0XHQgICAgICApO1xuXHRcdFx0XHQgICAgICBpZiAoIGlkID09IFwiJHBhcmVudFwiICkgcmV0dXJuO1xuXHRcdFx0XHQgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoXG5cdFx0XHRcdFx0ICAgICAgdGFyZ2V0Q3R4Ll8uc3RhdGUucHJvdG90eXBlLFxuXHRcdFx0XHRcdCAgICAgIGlkLFxuXHRcdFx0XHRcdCAgICAgIHtcblx0XHRcdFx0XHRcdCAgICAgIGVudW1lcmFibGUgIDogdHJ1ZSxcblx0XHRcdFx0XHRcdCAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcblx0XHRcdFx0XHRcdCAgICAgIGdldCAgICAgICAgIDogKCkgPT4gKHRoaXMuXy5fc2NvcGVbaWRdICYmIHRoaXMuXy5fc2NvcGVbaWRdLnN0YXRlKSxcblx0XHRcdFx0XHRcdCAgICAgIHNldCAgICAgICAgIDogKCB2ICkgPT4gKHRoaXMuX21vdW50KGlkLCB1bmRlZmluZWQsIHYpKVxuXHRcdFx0XHRcdCAgICAgIH1cblx0XHRcdFx0ICAgICAgKTtcblx0XHRcdFx0ICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFxuXHRcdFx0XHRcdCAgICAgIHRhcmdldEN0eC5fLmRhdGEucHJvdG90eXBlLFxuXHRcdFx0XHRcdCAgICAgIGlkLFxuXHRcdFx0XHRcdCAgICAgIHtcblx0XHRcdFx0XHRcdCAgICAgIGVudW1lcmFibGUgIDogdHJ1ZSxcblx0XHRcdFx0XHRcdCAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcblx0XHRcdFx0XHRcdCAgICAgIGdldCAgICAgICAgIDogKCkgPT4gKHRoaXMuXy5fc2NvcGVbaWRdICYmIHRoaXMuXy5fc2NvcGVbaWRdLmRhdGEpLFxuXHRcdFx0XHRcdFx0ICAgICAgc2V0ICAgICAgICAgOiAoIHYgKSA9PiAodGhpcy5fbW91bnQoaWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB2KSlcblx0XHRcdFx0XHQgICAgICB9XG5cdFx0XHRcdCAgICAgICk7XG5cdFx0XHRcdFxuXHRcdFx0XHQgICAgICBsZXQgYWN0aW9ucyAgICAgICA9IHNyY0N0eFtpZF0gaW5zdGFuY2VvZiBTY29wZS5TdG9yZVxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgID8gc3JjQ3R4W2lkXS5jb25zdHJ1Y3Rvci5hY3Rpb25zXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgOiBzcmNDdHhbaWRdLmFjdGlvbnMsXG5cdFx0XHRcdCAgICAgICAgICBhY3RpdmVBY3Rpb25zID0gdGFyZ2V0Q3R4Ll8uYWN0aW9ucy5wcm90b3R5cGU7XG5cdFx0XHRcdCAgICAgIGlmICggaXMucnNTY29wZSh0aGlzLl8uX3Njb3BlW2lkXS5wcm90b3R5cGUpIClcblx0XHRcdFx0XHQgICAgICB0aGlzLl9tb3VudChpZCk7XG5cdFx0XHRcdCAgICAgIGlmICggaXMucnNTY29wZSh0aGlzLl8uX3Njb3BlW2lkXSkgKSB7XG5cdFx0XHRcdFx0ICAgICAgYWN0aXZlQWN0aW9uc1tpZF0gPSB0aGlzLl8uX3Njb3BlW2lkXS5hY3Rpb25zO1xuXHRcdFx0XHQgICAgICB9XG5cdFx0XHRcdCAgICAgIGlmICggIWlzLnJzU3RvcmUodGhpcy5fLl9zY29wZVtpZF0pICYmICFpcy5yc1N0b3JlQ2xhc3ModGhpcy5fLl9zY29wZVtpZF0pIClcblx0XHRcdFx0XHQgICAgICByZXR1cm47XG5cdFx0XHRcdFxuXHRcdFx0XHQgICAgICBhY3Rpb25zICYmXG5cdFx0XHRcdCAgICAgIE9iamVjdC5rZXlzKGFjdGlvbnMpXG5cdFx0XHRcdCAgICAgICAgICAgIC5mb3JFYWNoKFxuXHRcdFx0XHRcdCAgICAgICAgICAgICggYWN0ICkgPT4ge1xuXHRcdFx0XHRcdFx0ICAgICAgICAgICAgaWYgKCBhY3RpdmVBY3Rpb25zLmhhc093blByb3BlcnR5KGFjdCkgKVxuXHRcdFx0XHRcdFx0XHQgICAgICAgICAgICBhY3RpdmVBY3Rpb25zW2FjdF0uX190YXJnZXRTdG9yZXMrKztcblx0XHRcdFx0XHRcdCAgICAgICAgICAgIGVsc2Uge1xuXHRcdFx0XHRcdFx0XHQgICAgICAgICAgICBhY3RpdmVBY3Rpb25zW2FjdF0gICAgICAgICAgICAgICAgPSB0aGlzLmRpc3BhdGNoLmJpbmQodGhpcywgYWN0KTtcblx0XHRcdFx0XHRcdFx0ICAgICAgICAgICAgYWN0aXZlQWN0aW9uc1thY3RdLl9fdGFyZ2V0U3RvcmVzID0gMTtcblx0XHRcdFx0XHRcdCAgICAgICAgICAgIH1cblx0XHRcdFx0XHQgICAgICAgICAgICB9XG5cdFx0XHRcdCAgICAgICAgICAgIClcblx0XHRcdCAgICAgIH1cblx0XHQgICAgICApXG5cdH1cblx0XG5cdC8qKlxuXHQgKiBCaW5kIHN0b3JlcyBmcm9tIHRoaXMgc2NvcGUsIGhpcyBwYXJlbnRzIGFuZCBtaXhlZCBzY29wZVxuXHQgKlxuXHQgKiBAcGFyYW0gb2JqIHtSZWFjdC5Db21wb25lbnR8U3RvcmV8ZnVuY3Rpb259XG5cdCAqIEBwYXJhbSBrZXkge3N0cmluZ30gc3RvcmVzIGtleXMgdG8gYmluZCB1cGRhdGVzXG5cdCAqIEBwYXJhbSBhc1xuXHQgKiBAcGFyYW0gc2V0SW5pdGlhbCB7Ym9vbH0gZmFsc2UgdG8gbm90IHByb3BhZyBpbml0aWFsIHZhbHVlIChkZWZhdWx0IDogdHJ1ZSlcblx0ICovXG5cdGJpbmQoIG9iaiwga2V5LCBhcywgc2V0SW5pdGlhbCA9IHRydWUsIHJldk1hcCA9IHt9ICkge1xuXHRcdGxldCBsYXN0UmV2cywgZGF0YSwgcmVmS2V5cztcblx0XHRpZiAoIGtleSAmJiAhaXMuYXJyYXkoa2V5KSApXG5cdFx0XHRrZXkgPSBba2V5XTtcblx0XHRcblx0XHRpZiAoIGFzID09PSBmYWxzZSB8fCBhcyA9PT0gdHJ1ZSApIHtcblx0XHRcdHNldEluaXRpYWwgPSBhcztcblx0XHRcdGFzICAgICAgICAgPSBudWxsO1xuXHRcdH1cblx0XHRcblx0XHRyZWZLZXlzID0ga2V5XG5cdFx0XHQubWFwKGlkID0+IChpcy5zdHJpbmcoaWQpID8gaWQgOiBpZC5uYW1lKSlcblx0XHRcdC5tYXAoaWQgPT4gKHRoaXMucGFyc2VSZWYoaWQpKSk7XG5cdFx0XG5cdFx0XG5cdFx0dGhpcy5fLmZvbGxvd2Vycy5wdXNoKFxuXHRcdFx0W1xuXHRcdFx0XHRvYmosXG5cdFx0XHRcdGtleSxcblx0XHRcdFx0YXMgfHwgdW5kZWZpbmVkLFxuXHRcdFx0XHRsYXN0UmV2cyA9IHJlZktleXMucmVkdWNlKCggcmV2cywgcmVmICkgPT4ge1xuXHRcdFx0XHRcdHJldnNbcmVmLnN0b3JlSWRdID0gcmV2c1tyZWYuc3RvcmVJZF0gfHwge1xuXHRcdFx0XHRcdFx0cmV2IDogMCxcblx0XHRcdFx0XHRcdHJlZnM6IFtdXG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRyZXZzW3JlZi5zdG9yZUlkXS5yZWZzLnB1c2gocmVmKTtcblx0XHRcdFx0XHRyZXR1cm4gcmV2cztcblx0XHRcdFx0fSwgcmV2TWFwKVxuXHRcdFx0XSk7XG5cdFx0XG5cdFx0dGhpcy5tb3VudChrZXkpO1xuXHRcdHRoaXMucmV0YWluU3RvcmVzKE9iamVjdC5rZXlzKGxhc3RSZXZzKSwgJ2xpc3RlbmVycycpO1xuXHRcdFxuXHRcdGlmICggc2V0SW5pdGlhbCAmJiB0aGlzLl9zdGFibGUgKSB7XG5cdFx0XHRkYXRhID0gdGhpcy5nZXRVcGRhdGVzKGxhc3RSZXZzKTtcblx0XHRcdGlmICggIWRhdGEgKSByZXR1cm4gdGhpcztcblx0XHRcdGlmICggdHlwZW9mIG9iaiAhPSBcImZ1bmN0aW9uXCIgKSB7XG5cdFx0XHRcdGlmICggYXMgKSBvYmouc2V0U3RhdGUoeyBbYXNdOiBkYXRhIH0pO1xuXHRcdFx0XHRlbHNlIG9iai5zZXRTdGF0ZShkYXRhKTtcblx0XHRcdH1cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHRvYmooZGF0YSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cdFxuXHQvKipcblx0ICogVW4gYmluZCB0aGlzIHNjb3BlIG9mZiB0aGUgZ2l2ZW4gY29tcG9uZW50LWtleXNcblx0ICogQHBhcmFtIG9ialxuXHQgKiBAcGFyYW0ga2V5XG5cdCAqIEByZXR1cm5zIHtBcnJheS48Kj59XG5cdCAqL1xuXHR1bkJpbmQoIG9iaiwga2V5LCBhcyApIHtcblx0XHR2YXIgZm9sbG93ZXJzID0gdGhpcy5fLmZvbGxvd2Vycyxcblx0XHQgICAgaSAgICAgICAgID0gZm9sbG93ZXJzICYmIGZvbGxvd2Vycy5sZW5ndGg7XG5cdFx0d2hpbGUgKCBmb2xsb3dlcnMgJiYgaS0tIClcblx0XHRcdGlmICggZm9sbG93ZXJzW2ldWzBdID09PSBvYmogJiZcblx0XHRcdFx0KCcnICsgZm9sbG93ZXJzW2ldWzFdKSA9PSAoJycgKyBrZXkpICYmXG5cdFx0XHRcdGZvbGxvd2Vyc1tpXVsyXSA9PSBhcyApIHtcblx0XHRcdFx0dGhpcy5kaXNwb3NlU3RvcmVzKE9iamVjdC5rZXlzKGZvbGxvd2Vyc1tpXVszXSksICdsaXN0ZW5lcnMnKTtcblx0XHRcdFx0cmV0dXJuIGZvbGxvd2Vycy5zcGxpY2UoaSwgMSk7XG5cdFx0XHR9XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBNb3VudCB0aGUgc3RvcmVzIGluIHN0b3Jlc0xpc3QgZnJvbSB0aGlzIHNjb3BlLCBpdHMgcGFyZW50cyBhbmQgbWl4ZWQgc2NvcGVcblx0ICogQmluZCB0aGVtIHRvICd0bydcblx0ICogSG9vayAndG8nIHNvIGl0IHdpbGwgYXV0byB1bmJpbmQgb24gJ2Rlc3Ryb3knIG9yICdjb21wb25lbnRXaWxsVW5tb3VudCdcblx0ICogQHBhcmFtIHRvXG5cdCAqIEBwYXJhbSBzdG9yZXNMaXN0XG5cdCAqIEBwYXJhbSBiaW5kXG5cdCAqIEByZXR1cm5zIHtPYmplY3R9IEluaXRpYWwgb3V0cHV0cyBvZiB0aGUgc3RvcmVzIGluICdzdG9yZXNMaXN0J1xuXHQgKi9cblx0bWFwKCB0bywgc3RvcmVzTGlzdCwgYmluZCA9IHRydWUsIHJldk1hcCApIHtcblx0XHRsZXQgU3RvcmUgICA9IHRoaXMuY29uc3RydWN0b3IuU3RvcmU7XG5cdFx0c3RvcmVzTGlzdCAgPSBpcy5hcnJheShzdG9yZXNMaXN0KSA/IHN0b3Jlc0xpc3QgOiBbc3RvcmVzTGlzdF07XG5cdFx0bGV0IHJlZkxpc3QgPSBzdG9yZXNMaXN0Lm1hcCh0aGlzLnBhcnNlUmVmKTtcblx0XHR0aGlzLm1vdW50KHN0b3Jlc0xpc3QpO1xuXHRcdGlmICggYmluZCAmJiB0byBpbnN0YW5jZW9mIFN0b3JlICkge1xuXHRcdFx0U3RvcmUubWFwKHRvLCBzdG9yZXNMaXN0LCB0aGlzLCB0aGlzLCBmYWxzZSlcblx0XHR9XG5cdFx0ZWxzZSBpZiAoIGJpbmQgKSB7XG5cdFx0XHR0aGlzLmJpbmQodG8sIHN0b3Jlc0xpc3QsIHVuZGVmaW5lZCwgZmFsc2UpO1xuXHRcdFx0XG5cdFx0XHRsZXQgbWl4ZWRDV1VubW91bnQsXG5cdFx0XHQgICAgdW5Nb3VudEtleSA9IHRvLmlzUmVhY3RDb21wb25lbnQgPyBcImNvbXBvbmVudFdpbGxVbm1vdW50XCIgOiBcImRlc3Ryb3lcIjtcblx0XHRcdFxuXHRcdFx0aWYgKCB0by5oYXNPd25Qcm9wZXJ0eSh1bk1vdW50S2V5KSApIHtcblx0XHRcdFx0bWl4ZWRDV1VubW91bnQgPSB0b1t1bk1vdW50S2V5XTtcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0dG9bdW5Nb3VudEtleV0gPSAoIC4uLmFyZ3ogKSA9PiB7XG5cdFx0XHRcdGRlbGV0ZSB0b1t1bk1vdW50S2V5XTtcblx0XHRcdFx0aWYgKCBtaXhlZENXVW5tb3VudCApXG5cdFx0XHRcdFx0dG9bdW5Nb3VudEtleV0gPSBtaXhlZENXVW5tb3VudDtcblx0XHRcdFx0XG5cdFx0XHRcdHRoaXMudW5CaW5kKHRvLCBzdG9yZXNMaXN0KTtcblx0XHRcdFx0cmV0dXJuIHRvW3VuTW91bnRLZXldICYmIHRvW3VuTW91bnRLZXldKC4uLmFyZ3opO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0fVxuXHRcdHJldHVybiByZXZNYXAgJiYgdGhpcy5nZXRVcGRhdGVzKHJldk1hcCkgfHwgcmVmTGlzdC5yZWR1Y2UoKCBkYXRhLCByZWYgKSA9PiB7XG5cdFx0XHR3YWxrblNldChkYXRhLCByZWYuYWxpYXMgfHwgcmVmLnBhdGgsIHRoaXMucmV0cmlldmUocmVmLnBhdGgpKVxuXHRcdFx0cmV0dXJuIGRhdGE7XG5cdFx0fSwge30pO1xuXHR9XG5cdFxuXHQvKipcblx0ICogR2V0IGN1cnJlbnQgZGF0YSB2YWx1ZSBmcm9tIGpzb24gcGF0aFxuXHQgKiBAcGFyYW0gcGF0aFxuXHQgKiBAcmV0dXJucyB7c3RyaW5nfCp9XG5cdCAqL1xuXHRyZXRyaWV2ZSggcGF0aCA9IFwiXCIgKSB7XG5cdFx0cGF0aCA9IGlzLnN0cmluZyhwYXRoKSA/IHBhdGguc3BsaXQoJy4nKSA6IHBhdGg7XG5cdFx0cmV0dXJuIHBhdGggJiZcblx0XHRcdHRoaXMuc3RvcmVzW3BhdGhbMF1dICYmXG5cdFx0XHR0aGlzLnN0b3Jlc1twYXRoWzBdXS5yZXRyaWV2ZSAmJlxuXHRcdFx0dGhpcy5zdG9yZXNbcGF0aFswXV0ucmV0cmlldmUocGF0aC5zbGljZSgxKSk7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBHZXQgY3VycmVudCBzdG9yZSBmcm9tIGpzb24gcGF0aFxuXHQgKiBAcGFyYW0gcGF0aFxuXHQgKiBAcmV0dXJucyB7c3RyaW5nfCp9XG5cdCAqL1xuXHRyZXRyaWV2ZVN0b3JlKCBwYXRoID0gXCJcIiApIHtcblx0XHRwYXRoID0gaXMuc3RyaW5nKHBhdGgpID8gcGF0aC5zcGxpdCgnLicpIDogcGF0aDtcblx0XHRyZXR1cm4gcGF0aFxuXHRcdFx0JiYgcGF0aC5sZW5ndGhcblx0XHRcdCYmIChcblx0XHRcdFx0cGF0aC5sZW5ndGggIT0gMSAmJiB0aGlzLnN0b3Jlc1twYXRoWzBdXS5yZXRyaWV2ZVN0b3JlXG5cdFx0XHRcdD8gdGhpcy5zdG9yZXNbcGF0aFswXV0ucmV0cmlldmVTdG9yZShwYXRoLnNsaWNlKDEpKVxuXHRcdFx0XHQ6IHBhdGgubGVuZ3RoID09IDEgJiYgdGhpcy5zdG9yZXNbcGF0aFswXV1cblx0XHRcdCk7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBHZXQgb3IgdXBkYXRlIHN0b3Jlc1Jldk1hcCdzIHJldmlzaW9uc1xuXHQgKiBAcGFyYW0gc3RvcmVzUmV2TWFwXG5cdCAqIEBwYXJhbSBsb2NhbFxuXHQgKiBAcmV0dXJucyB7e319XG5cdCAqL1xuXHRnZXRTdG9yZXNSZXZzKCBzdG9yZXNSZXZNYXAgPSB7fSwgbG9jYWwgKSB7XG5cdFx0bGV0IGN0eCA9IHRoaXMuXy5fc2NvcGU7XG5cdFx0aWYgKCAhc3RvcmVzUmV2TWFwICkge1xuXHRcdFx0c3RvcmVzUmV2TWFwID0ge307XG5cdFx0fVxuXHRcdE9iamVjdC5rZXlzKGN0eCkuZm9yRWFjaChcblx0XHRcdGlkID0+IHtcblx0XHRcdFx0aWYgKCBpZCA9PSBcIiRwYXJlbnRcIiApIHJldHVybjtcblx0XHRcdFx0aWYgKCAhaXMuZm4oY3R4W2lkXSlcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0c3RvcmVzUmV2TWFwW2lkXSA9IGN0eFtpZF0uX3Jldjtcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlIGlmICggIXN0b3Jlc1Jldk1hcC5oYXNPd25Qcm9wZXJ0eShpZCkgKVxuXHRcdFx0XHRcdHN0b3Jlc1Jldk1hcFtpZF0gPSBmYWxzZVxuXHRcdFx0fVxuXHRcdCk7XG5cdFx0aWYgKCAhbG9jYWwgKSB7XG5cdFx0XHR0aGlzLl8uX21peGVkLnJlZHVjZSgoIHVwZGF0ZWQsIGN0eCApID0+IChjdHguZ2V0U3RvcmVzUmV2cyhzdG9yZXNSZXZNYXApLCBzdG9yZXNSZXZNYXApLCBzdG9yZXNSZXZNYXApO1xuXHRcdFx0dGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuZ2V0U3RvcmVzUmV2cyhzdG9yZXNSZXZNYXApO1xuXHRcdH1cblx0XHRyZXR1cm4gc3RvcmVzUmV2TWFwO1xuXHR9XG5cdFxuXHQvKipcblx0ICogR2V0IHVwZGF0ZWQgb3V0cHV0IGJhc2luZyBzdG9yZXNSZXZNYXAncyByZXZpc2lvbnMuXG5cdCAqIElmIGEgc3RvcmUgaW4gJ3N0b3Jlc1Jldk1hcCcgd2FzIHVwZGF0ZWQ7IGFkZCBpdCB0byAnb3V0cHV0JyAmIHVwZGF0ZSBzdG9yZXNSZXZNYXBcblx0ICogQHBhcmFtIHN0b3Jlc1Jldk1hcFxuXHQgKiBAcGFyYW0gb3V0cHV0XG5cdCAqIEBwYXJhbSB1cGRhdGVkXG5cdCAqIEByZXR1cm5zIHsqfHt9fVxuXHQgKi9cblx0Z2V0UmVmc1VwZGF0ZXMoIHJlZnMsIHJldk1hcCwgb3V0cHV0ICkge1xuXHRcdFxuXHRcdHJldk1hcCA9IHJldk1hcCB8fCByZWZzXG5cdFx0XHQubWFwKGlkID0+IChpcy5zdHJpbmcoaWQpID8gaWQgOiBpZC5uYW1lKSlcblx0XHRcdC5tYXAoaWQgPT4gKHRoaXMucGFyc2VSZWYoaWQpKSlcblx0XHRcdC5yZWR1Y2UoKCByZXZzLCByZWYgKSA9PiB7XG5cdFx0XHRcdHJldnNbcmVmLnN0b3JlSWRdID0gcmV2c1tyZWYuc3RvcmVJZF0gfHwge1xuXHRcdFx0XHRcdHJldiA6IDAsXG5cdFx0XHRcdFx0cmVmczogW11cblx0XHRcdFx0fTtcblx0XHRcdFx0cmV2c1tyZWYuc3RvcmVJZF0ucmVmcy5wdXNoKHJlZik7XG5cdFx0XHRcdHJldHVybiByZXZzO1xuXHRcdFx0fSwge30pO1xuXHRcdFxuXHRcdHJldHVybiB0aGlzLmdldFVwZGF0ZXMocmV2TWFwLCBvdXRwdXQpXG5cdFx0XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBHZXQgb3IgdXBkYXRlIG91dHB1dCBiYXNpbmcgc3RvcmVzUmV2TWFwJ3MgcmV2aXNpb25zLlxuXHQgKiBJZiBhIHN0b3JlIGluICdzdG9yZXNSZXZNYXAnIHdhcyB1cGRhdGVkOyBhZGQgaXQgdG8gJ291dHB1dCcgJiB1cGRhdGUgc3RvcmVzUmV2TWFwXG5cdCAqIEB0b2RvOiBvcHRpbSAvIHVzZSBwcm90b3Ncblx0ICogQHBhcmFtIHN0b3Jlc1Jldk1hcFxuXHQgKiBAcGFyYW0gb3V0cHV0XG5cdCAqIEBwYXJhbSB1cGRhdGVkXG5cdCAqIEByZXR1cm5zIHsqfHt9fVxuXHQgKi9cblx0Z2V0VXBkYXRlcyggc3RvcmVzUmV2TWFwLCBvdXRwdXQsIHVwZGF0ZWQgKSB7XG5cdFx0XG5cdFx0b3V0cHV0ICAgICAgID0gb3V0cHV0IHx8IHt9O1xuXHRcdHN0b3Jlc1Jldk1hcCA9IHN0b3Jlc1Jldk1hcCB8fCB0aGlzLl9nZXRSZXZNYXAoKTtcblx0XHRPYmplY3Qua2V5cyhzdG9yZXNSZXZNYXApLmZvckVhY2goXG5cdFx0XHRpZCA9PiB7XG5cdFx0XHRcdGxldCBzdG9yZSAgICAgICAgPSB0aGlzLnN0b3Jlc1tpZF07XG5cdFx0XHRcdHN0b3Jlc1Jldk1hcFtpZF0gPSBzdG9yZXNSZXZNYXBbaWRdIHx8IHsgcmV2OiAwLCByZWZzOiBbXSB9O1xuXHRcdFx0XHRcblx0XHRcdFx0aWYgKCBzdG9yZSAmJiBpcy5mbihzdG9yZSkgKSB7XG5cdFx0XHRcdFx0dXBkYXRlZCAgICA9IHRydWU7XG5cdFx0XHRcdFx0b3V0cHV0W2lkXSA9IHVuZGVmaW5lZDtcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlIGlmICggc3RvcmUgJiYgc3RvcmUuX3JldiA+IHN0b3Jlc1Jldk1hcFtpZF0ucmV2ICkge1xuXHRcdFx0XHRcdHN0b3Jlc1Jldk1hcFtpZF0ucmV2ID0gc3RvcmUuX3Jldjtcblx0XHRcdFx0XHRvdXRwdXRbaWRdICAgICAgICAgICA9IHN0b3JlLmRhdGE7XG5cdFx0XHRcdFx0dXBkYXRlZCAgICAgICAgICAgICAgPSB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0KVxuXHRcdHJldHVybiB1cGRhdGVkICYmIG91dHB1dDtcblx0fVxuXHRcblx0LyoqXG5cdCAqIFJlY3Vyc2l2ZWx5IGdldCBhbGwgc3RvcmVzIHJldnNcblx0ICogQHBhcmFtIGNoaWxkc1xuXHQgKiBAcmV0dXJucyB7QXJyYXl9XG5cdCAqIEBwcml2YXRlXG5cdCAqL1xuXHRfZ2V0UmV2TWFwKCBzdG9yZXNSZXZNYXAgPSB7fSApIHtcblx0XHRsZXQgY3R4ID0gdGhpcy5fLl9zY29wZTtcblx0XHRPYmplY3Qua2V5cyhjdHgpLmZvckVhY2goXG5cdFx0XHRpZCA9PiB7XG5cdFx0XHRcdGlmICggaWQgPT0gXCIkcGFyZW50XCIgfHwgc3RvcmVzUmV2TWFwW2lkXSApIHJldHVybjtcblx0XHRcdFx0c3RvcmVzUmV2TWFwW2lkXSA9IHsgcmV2OiBjdHhbaWRdLl9yZXYsIHJlZnM6IFtdIH07XG5cdFx0XHRcdFxuXHRcdFx0fSk7XG5cdFx0dGhpcy5fLl9taXhlZC5yZWR1Y2VSaWdodChcblx0XHRcdCggc3RvcmVzUmV2TWFwLCBjdHggKSA9PiAoY3R4Ll9nZXRSZXZNYXAoc3RvcmVzUmV2TWFwKSksIHN0b3Jlc1Jldk1hcCk7XG5cdFx0dGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuX2dldFJldk1hcChzdG9yZXNSZXZNYXApO1xuXHRcdHJldHVybiBzdG9yZXNSZXZNYXA7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBSZWN1cnNpdmVseSBnZXQgYWxsIGNoaWxkIHNjb3Blc1xuXHQgKiBAcGFyYW0gY2hpbGRzXG5cdCAqIEByZXR1cm5zIHtBcnJheX1cblx0ICogQHByaXZhdGVcblx0ICovXG5cdF9nZXRBbGxDaGlsZHMoIGNoaWxkcyA9IFtdICkge1xuXHRcdGNoaWxkcy5wdXNoKC4uLnRoaXMuXy5jaGlsZFNjb3Blcyk7XG5cdFx0dGhpcy5fLmNoaWxkU2NvcGVzLmZvckVhY2goXG5cdFx0XHRjdHggPT4ge1xuXHRcdFx0XHRjdHguX2dldEFsbENoaWxkcyhjaGlsZHMpO1xuXHRcdFx0fVxuXHRcdCk7XG5cdFx0cmV0dXJuIGNoaWxkcztcblx0fVxuXHRcblx0LyoqXG5cdCAqIFNlcmlhbGl6ZSBhbGwgYWN0aXZlIHN0b3JlcyBzdGF0ZSAmIGRhdGEgaW4gZXZlcnkgY2hpbGRzICYgbWl4ZWQgc2NvcGVzXG5cdCAqXG5cdCAqIFNjb3BlcyB3aXRob3V0IGtleSBvciBpZCBhcmUgaWdub3JlZFxuXHQgKiBAcGFyYW0gb3V0cHV0XG5cdCAqIEByZXR1cm5zIHt7fX1cblx0ICovXG5cdHNlcmlhbGl6ZSggY2ZnID0ge30sIG91dHB1dCA9IHt9ICkge1xuXHRcdGxldCBjdHggICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSB0aGlzLl8uX3Njb3BlLFxuXHRcdCAgICB7IGJhc2VJZCwga2V5LCBrZXlQSUQsIGluY3JlbWVudElkIH0gPSB0aGlzLl8sXG5cdFx0ICAgIHtcblx0XHRcdCAgICBhbGlhcyxcblx0XHRcdCAgICBwYXJlbnRBbGlhcyxcblx0XHQgICAgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID0gY2ZnLFxuXHRcdCAgICBzaWQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSBrZXlcblx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAocGFyZW50QWxpYXMgfHwga2V5UElEKSArICc+JyArIGtleVxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGFsaWFzIHx8IHBhcmVudEFsaWFzICYmIChwYXJlbnRBbGlhcyArICcvJyArIGJhc2VJZCkgfHwgdGhpcy5faWQ7XG5cdFx0XG5cdFx0XG5cdFx0Ly9hbGlhcyA9IGFsaWFzIHx8IGJhc2VJZDtcblx0XHRyZXR1cm4gdGhpcy5zZXJpYWxpemVfZXgoY2ZnLCBvdXRwdXQsIHNpZCwgYWxpYXMsIFtcIiRwYXJlbnRcIl0pXG5cdH1cblx0XG5cdHNlcmlhbGl6ZV9leCggY2ZnID0ge30sIG91dHB1dCA9IHt9LCBzaWQsIGFsaWFzLCBleGNsdWRlICkge1xuXHRcdGxldCBjdHggICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSB0aGlzLl8uX3Njb3BlLFxuXHRcdCAgICB7IGJhc2VJZCwga2V5LCBrZXlQSUQsIGluY3JlbWVudElkIH0gPSB0aGlzLl8sXG5cdFx0ICAgIHtcblx0XHRcdCAgICB3aXRoQ2hpbGRzID0gdHJ1ZSxcblx0XHRcdCAgICB3aXRoUGFyZW50cyxcblx0XHRcdCAgICB3aXRoTWl4ZWQgID0gdHJ1ZSxcblx0XHRcdCAgICBub3JlZnMsXG5cdFx0XHQgICAgcGFyZW50QWxpYXMsXG5cdFx0XHQgICAgYWxpYXNlcyAgICA9IHt9XG5cdFx0ICAgIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA9IGNmZztcblx0XHRcblx0XHRpZiAoIGtleVdhbGtuR2V0KG91dHB1dCwgc2lkKSApIHtcblx0XHRcdGlmICggIWluY3JlbWVudElkICkvLyBkb25lXG5cdFx0XHRcdHJldHVybiBvdXRwdXQ7XG5cdFx0XHRlbHNlIGlmICggaW5jcmVtZW50SWQgKSB7Ly8gZ2VuZXJhdGUga2V5IGlkXG5cdFx0XHRcdGxldCBpID0gLTE7XG5cdFx0XHRcdHdoaWxlICgga2V5V2Fsa25HZXQob3V0cHV0LCBzaWQgKyAnWycgKyAoKytpKSArICddJykgKSA7XG5cdFx0XHRcdHNpZCA9IHNpZCArICdbJyArIGkgKyAnXSc7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdC8vQHRvZG8gOiBiZXR0ZXIgc2VyaWFsaXplIG1ldGhvZFxuXHRcdGtleVdhbGtuU2V0KG91dHB1dCwgc2lkLCB7fSk7XG5cdFx0XG5cdFx0T2JqZWN0LmtleXMoY3R4KS5mb3JFYWNoKFxuXHRcdFx0aWQgPT4ge1xuXHRcdFx0XHRpZiAoIGV4Y2x1ZGUuaW5jbHVkZXMoaWQpIHx8IGlzLnJzU3RvcmVDbGFzcyhjdHhbaWRdKSB8fCBpcy5yc1Njb3BlQ2xhc3MoY3R4W2lkXSkgKVxuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XG5cdFx0XHRcdGN0eFtpZF0uc2VyaWFsaXplKHsgLi4uY2ZnLCBwYXJlbnRBbGlhczogc2lkIH0sIG91dHB1dCk7XG5cdFx0XHR9XG5cdFx0KVxuXHRcdFxuXHRcdC8vd2l0aFBhcmVudHMgJiYgdGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuc2VyaWFsaXplKHtcblx0XHQvL1x0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpdGhDaGlsZCAgOiBmYWxzZSxcblx0XHQvL1x0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpdGhQYXJlbnRzOiB0cnVlLFxuXHRcdC8vXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aE1peGVkLFxuXHRcdC8vXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9yZWZzXG5cdFx0Ly8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgb3V0cHV0KTtcblx0XHRcblx0XHR3aXRoQ2hpbGRzICYmIHRoaXMuXy5jaGlsZFNjb3Blcy5mb3JFYWNoKFxuXHRcdFx0Y3R4ID0+IHtcblx0XHRcdFx0IWN0eC5fLmlzTG9jYWxJZCAmJiBjdHguc2VyaWFsaXplKHtcblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aENoaWxkICA6IHRydWUsXG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpdGhQYXJlbnRzOiBmYWxzZSxcblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50QWxpYXM6IHNpZCxcblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aE1peGVkLFxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JlZnMsXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBvdXRwdXQpO1xuXHRcdFx0fVxuXHRcdCk7XG5cdFx0XG5cdFx0d2l0aE1peGVkICYmIHRoaXMuXy5fbWl4ZWQuZm9yRWFjaChcblx0XHRcdGN0eCA9PiB7XG5cdFx0XHRcdCFjdHguXy5pc0xvY2FsSWQgJiYgY3R4LnNlcmlhbGl6ZSh7XG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpdGhDaGlsZCAgOiBmYWxzZSxcblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aFBhcmVudHM6IGZhbHNlLFxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRoTWl4ZWQsXG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcmVmc1xuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgb3V0cHV0KTtcblx0XHRcdH1cblx0XHQpO1xuXHRcdFxuXHRcdGlmICggYWxpYXMgKSB7XG5cdFx0XHRvdXRwdXQgPSBPYmplY3Qua2V5cyhvdXRwdXQpXG5cdFx0XHQgICAgICAgICAgICAgICAucmVkdWNlKFxuXHRcdFx0XHQgICAgICAgICAgICAgICAoIGgsIGsgKSA9PiAoXG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgaFtrID09PSB0aGlzLl9pZFxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgPyBhbGlhc1xuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgOiBrXSA9IG91dHB1dFtrXSxcblx0XHRcdFx0XHRcdCAgICAgICAgICAgICAgIGhcblx0XHRcdFx0ICAgICAgICAgICAgICAgKSxcblx0XHRcdFx0ICAgICAgICAgICAgICAge31cblx0XHRcdCAgICAgICAgICAgICAgIClcblx0XHR9XG5cdFx0cmV0dXJuIG91dHB1dDtcblx0fVxuXHRcblx0LyoqXG5cdCAqIFJlc3RvcmUgc3RhdGUgJiBkYXRhIGZyb20gdGhlIHNlcmlhbGl6ZSBmblxuXHQgKiBAcGFyYW0gc25hcHNob3Rcblx0ICogQHBhcmFtIGZvcmNlXG5cdCAqL1xuXHRyZXN0b3JlKCBzbmFwc2hvdCwgY2ZnID0ge30sIGZvcmNlID0gaXMuYm9vbChjZmcpICYmIGNmZyApIHtcblx0XHRsZXQgY3R4ID0gdGhpcy5fLl9zY29wZSwgc25hcDtcblx0XHRcblx0XHRpZiAoIHNuYXBzaG90ICYmIGNmZyAmJiBjZmcuYWxpYXMgJiYgY2ZnLmFsaWFzICE9IHRoaXMuX2lkICkge1xuXHRcdFx0c25hcCA9IHtcblx0XHRcdFx0Li4uc25hcHNob3QsXG5cdFx0XHRcdFt0aGlzLl9pZF06IHNuYXBzaG90W2NmZy5hbGlhc11cblx0XHRcdH1cblx0XHRcdGRlbGV0ZSBzbmFwW2NmZy5hbGlhc107XG5cdFx0XHRzbmFwc2hvdCA9IHNuYXA7XG5cdFx0fVxuXHRcdHNuYXBzaG90ID0gc25hcHNob3Rcblx0XHRcdCYmIGtleVdhbGtuR2V0KHNuYXBzaG90LCB0aGlzLl9pZClcblx0XHRcdHx8IHRoaXMudGFrZVNuYXBzaG90QnlLZXkodGhpcy5faWQpO1xuXHRcdFxuXHRcdFxuXHRcdGlmICggIXNuYXBzaG90IClcblx0XHRcdHJldHVybjtcblx0XHRcblx0XHR0aGlzLl8uc25hcHNob3QgPSB7IC4uLnNuYXBzaG90IH07XG5cdFx0XG5cdFx0c25hcCAgICAgICAgICA9IHNuYXBzaG90WycvJ107XG5cdFx0c25hcHNob3RbJy8nXSA9IHsgLi4uc25hcCB9O1xuXHRcdHNuYXAgJiYgT2JqZWN0LmtleXMoc25hcCkuZm9yRWFjaChcblx0XHRcdG5hbWUgPT4ge1xuXHRcdFx0XHRpZiAoIG5hbWUgPT0gXCIkcGFyZW50XCIgKSByZXR1cm47XG5cdFx0XHRcdFxuXHRcdFx0XHRpZiAoIGN0eFtuYW1lXSApIHtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHRpZiAoIGZvcmNlICYmICFpcy5mbihjdHhbbmFtZV0pIClcblx0XHRcdFx0XHRcdGN0eFtuYW1lXS5kZXN0cm95KCk7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0dGhpcy5fbW91bnQobmFtZSk7Ly8gcXVpZXRcblx0XHRcdFx0fVxuXHRcdFx0XHRcblx0XHRcdH1cblx0XHQpXG5cdFx0XG5cdFx0dGhpcy5fLl9taXhlZC5mb3JFYWNoKFxuXHRcdFx0Y3R4ID0+IHtcblx0XHRcdFx0IWN0eC5fLmlzTG9jYWxJZCAmJiBjdHgucmVzdG9yZSh1bmRlZmluZWQsIGZvcmNlKTtcblx0XHRcdH1cblx0XHQpO1xuXHRcdFxuXHRcdHRoaXMuXy5jaGlsZFNjb3Blcy5mb3JFYWNoKFxuXHRcdFx0Y3R4ID0+IHtcblx0XHRcdFx0IWN0eC5fLmlzTG9jYWxJZCAmJiBjdHgucmVzdG9yZSh1bmRlZmluZWQsIGZvcmNlKTtcblx0XHRcdH1cblx0XHQpO1xuXHR9XG5cdFxuXHRnZXRTbmFwc2hvdEJ5S2V5KCBrZXksIGxvY2FsICkge1xuXHRcdC8vIG9ubHkgaGF2ZSB0aGUgbG9jYWwgc25hcFxuXHRcdGlmICggdGhpcy5fLnNuYXBzaG90ICYmIGtleS5zdGFydHNXaXRoKHRoaXMuX2lkKSApIHtcblx0XHRcdGxldCBvYmogPSBrZXlXYWxrbkdldCh0aGlzLl8uc25hcHNob3QsIGtleS5zdWJzdHIodGhpcy5faWQubGVuZ3RoKSlcblx0XHRcdC8vaWYgKCBvYmogKSB7XG5cdFx0XHQvLyAgICB0aGlzLmRlbGV0ZVNuYXBzaG90QnlLZXkoa2V5KTtcblx0XHRcdC8vfVxuXHRcdFx0cmV0dXJuIG9iajtcblx0XHR9XG5cdFx0ZWxzZSByZXR1cm4gIWxvY2FsXG5cdFx0XHQmJiB0aGlzLnBhcmVudFxuXHRcdFx0JiYgdGhpcy5wYXJlbnQuZ2V0U25hcHNob3RCeUtleShrZXkpXG5cdFx0XHR8fFxuXHRcdFx0dGhpcy5zdG9yZXMuJHBhcmVudFxuXHRcdFx0JiYgdGhpcy5zdG9yZXMuJHBhcmVudC5nZXRTbmFwc2hvdEJ5S2V5KGtleSk7XG5cdFx0XG5cdH1cblx0XG5cdGdldFNuYXBzaG90QnlLZXlFeHQoIHNuYXBzaG90LCBrZXksIGxvY2FsICkge1xuXHRcdC8vIG9ubHkgaGF2ZSB0aGUgbG9jYWwgc25hcFxuXHRcdGlmICggc25hcHNob3QgKSB7XG5cdFx0XHRsZXQgb2JqID0ga2V5V2Fsa25HZXQoc25hcHNob3QsIGtleSlcblx0XHRcdHJldHVybiBvYmo7XG5cdFx0fVxuXHRcdFxuXHR9XG5cdFxuXHR0YWtlU25hcHNob3RCeUtleSgga2V5LCBsb2NhbCApIHtcblx0XHRpZiAoIHRoaXMuXy5zbmFwc2hvdCAmJiBrZXkuc3RhcnRzV2l0aCh0aGlzLl9pZCkgKSB7XG5cdFx0XHRsZXQgb2JqID0ga2V5V2Fsa25HZXQodGhpcy5fLnNuYXBzaG90LCBrZXkuc3Vic3RyKHRoaXMuX2lkLmxlbmd0aCkpXG5cdFx0XHRpZiAoIG9iaiApIHtcblx0XHRcdFx0dGhpcy5kZWxldGVTbmFwc2hvdEJ5S2V5KGtleSwgdHJ1ZSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gb2JqO1xuXHRcdH1cblx0XHRlbHNlIHJldHVybiAhbG9jYWxcblx0XHRcdCYmIHRoaXMucGFyZW50XG5cdFx0XHQmJiB0aGlzLnBhcmVudC50YWtlU25hcHNob3RCeUtleShrZXkpXG5cdFx0XHR8fFxuXHRcdFx0dGhpcy5zdG9yZXMuJHBhcmVudFxuXHRcdFx0JiYgdGhpcy5zdG9yZXMuJHBhcmVudC50YWtlU25hcHNob3RCeUtleShrZXkpO1xuXHR9XG5cdFxuXHRkZWxldGVTbmFwc2hvdEJ5S2V5KCBrZXksIGxvY2FsICkge1xuXHRcdGlmICggdGhpcy5fLnNuYXBzaG90ICYmIGtleS5zdGFydHNXaXRoKHRoaXMuX2lkKSApIHtcblx0XHRcdGxldCBvYmogPSBrZXlXYWxrbkdldCh0aGlzLl8uc25hcHNob3QsIGtleS5zdWJzdHIodGhpcy5faWQubGVuZ3RoKS5yZXBsYWNlKC9eKC4qW1xcPnxcXC9dKVteXFw+fFxcL10rJC9pZywgJyQxJykpXG5cdFx0XHRpZiAoIG9iaiApXG5cdFx0XHRcdGRlbGV0ZSBvYmpba2V5LnJlcGxhY2UoL14uKltcXD58XFwvXShbXlxcPnxcXC9dKykkL2lnLCAnJDEnKV1cblx0XHR9XG5cdFx0cmV0dXJuICFsb2NhbFxuXHRcdFx0JiYgdGhpcy5wYXJlbnRcblx0XHRcdCYmIHRoaXMucGFyZW50LmRlbGV0ZVNuYXBzaG90QnlLZXkoa2V5KVxuXHRcdFx0fHxcblx0XHRcdHRoaXMuc3RvcmVzLiRwYXJlbnRcblx0XHRcdCYmIHRoaXMuc3RvcmVzLiRwYXJlbnQuZGVsZXRlU25hcHNob3RCeUtleShrZXkpO1xuXHR9XG5cdFxuXHRzZXRTdGF0ZSggcFN0YXRlICkge1xuXHRcdE9iamVjdC5rZXlzKHBTdGF0ZSlcblx0XHQgICAgICAuZm9yRWFjaChrID0+ICh0aGlzLnN0YXRlW2tdID0gcFN0YXRlW2tdKSlcblx0fVxuXHRcblx0LyoqXG5cdCAqIGdldCBhIHBhcnNlZCByZWZlcmVuY2Vcblx0ICogQHBhcmFtIF9yZWZcblx0ICogQHJldHVybnMge3tzdG9yZUlkLCBwYXRoLCBhbGlhczogKiwgcmVmOiAqfX1cblx0ICovXG5cdHBhcnNlUmVmKCBfcmVmICkge1xuXHRcdGlmICggdHlwZW9mIF9yZWYgIT09ICdzdHJpbmcnICkge1xuXHRcdFx0dGhpcy5yZWdpc3Rlcih7IFtfcmVmLm5hbWVdOiBfcmVmLnN0b3JlIH0pO1xuXHRcdFx0X3JlZiA9IF9yZWYubmFtZTtcblx0XHR9XG5cdFx0bGV0IHJlZiA9IF9yZWYuc3BsaXQoJzonKTtcblx0XHRyZWZbMF0gID0gcmVmWzBdLnNwbGl0KCcuJyk7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHN0b3JlSWQ6IHJlZlswXVswXSxcblx0XHRcdHBhdGggICA6IHJlZlswXSxcblx0XHRcdGFsaWFzICA6IHJlZlsxXSB8fCByZWZbMF1bcmVmWzBdLmxlbmd0aCAtIDFdLFxuXHRcdFx0cmVmICAgIDogX3JlZlxuXHRcdH07XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBEaXNwYXRjaCBhbiBhY3Rpb24gdG8gdGhlIHRvcCBwYXJlbnQgJiBtaXhlZCBzY29wZXMsIGluIGFsbCBzdG9yZXNcblx0ICpcblx0ICogQHBhcmFtIGFjdGlvblxuXHQgKiBAcGFyYW0gZGF0YVxuXHQgKiBAcmV0dXJucyB7U2NvcGV9XG5cdCAqL1xuXHRkaXNwYXRjaCggYWN0aW9uLCAuLi5hcmd6ICkge1xuXHRcdGlmICggdGhpcy5kZWFkICkge1xuXHRcdFx0Y29uc29sZS53YXJuKFwiRGlzcGF0Y2ggd2FzIGNhbGxlZCBvbiBhIGRlYWQgc2NvcGUsIGNoZWNrIHlvdSdyZSBhc3luYyBmdW5jdGlvbnMgaW4gdGhpcyBzdGFjay4uLlwiLCAobmV3IEVycm9yKCkpLnN0YWNrKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0bGV0IGJBY3RzID0gdGhpcy5fLl9ib3VuZGVkQWN0aW9ucztcblx0XHRPYmplY3Qua2V5cyh0aGlzLl8uX3Njb3BlKVxuXHRcdCAgICAgIC5mb3JFYWNoKFxuXHRcdFx0ICAgICAgaWQgPT4ge1xuXHRcdFx0XHQgICAgICBpZiAoIGlkID09IFwiJHBhcmVudFwiICkgcmV0dXJuO1xuXHRcdFx0XHQgICAgICBpZiAoICFpcy5mbih0aGlzLl8uX3Njb3BlW2lkXSkgKVxuXHRcdFx0XHRcdCAgICAgIHRoaXMuXy5fc2NvcGVbaWRdLnRyaWdnZXIoYWN0aW9uLCAuLi5hcmd6KTtcblx0XHRcdCAgICAgIH1cblx0XHQgICAgICApO1xuXHRcdFxuXHRcdGlmICggYkFjdHMgJiYgYkFjdHMudGVzdChhY3Rpb24pIClcblx0XHRcdHJldHVybjtcblx0XHRcblx0XHR0aGlzLl8uX21peGVkLmZvckVhY2goKCBjdHggKSA9PiAoY3R4LmRpc3BhdGNoKGFjdGlvbiwgLi4uYXJneikpKTtcblx0XHR0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC5kaXNwYXRjaChhY3Rpb24sIC4uLmFyZ3opO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cdFxuXHQvL1xuXHR0cmlnZ2VyKCkge1xuXHRcdHRoaXMuZGlzcGF0Y2goLi4uYXJndW1lbnRzKTtcblx0fVxuXHRcblx0LyoqXG5cdCAqIG9uY2UoJ3N0YWJsZScsIGNiKVxuXHQgKiBAcGFyYW0gb2JqIHtSZWFjdC5Db21wb25lbnR8U3RvcmV8ZnVuY3Rpb24pXG5cdCAqIEBwYXJhbSBrZXkge3N0cmluZ30gb3B0aW9uYWwga2V5IHdoZXJlIHRvIG1hcCB0aGUgcHVibGljIHN0YXRlXG5cdCAqL1xuXHR0aGVuKCBjYiApIHtcblx0XHRpZiAoIHRoaXMuX3N0YWJsZSApXG5cdFx0XHRyZXR1cm4gY2IodGhpcy5kYXRhKTtcblx0XHR0aGlzLm9uY2UoJ3N0YWJsZScsIGUgPT4gY2IodGhpcy5kYXRhKSk7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBDYWxsIHJldGFpbiBvbiB0aGUgc2NvcGVkIHN0b3JlcyBiYXNpbmcgZ2l2ZW5cblx0ICpcblx0ICogQHBhcmFtIHN0b3Jlc1xuXHQgKiBAcGFyYW0gcmVhc29uXG5cdCAqL1xuXHRyZXRhaW5TdG9yZXMoIHN0b3JlcyA9IFtdLCByZWFzb24gKSB7XG5cdFx0Ly9zdG9yZXMuZm9yRWFjaChcblx0XHQvLyAgICBpZCA9PiAoICggIXRoaXMuc3RvcmVzWyBpZCBdIHx8ICF0aGlzLnN0b3Jlc1sgaWQgXS5yZXRhaW4gKSAmJiBjb25zb2xlLndhcm4oaWQsIHJlYXNvbikgKVxuXHRcdC8vKVxuXHRcdHN0b3Jlcy5mb3JFYWNoKFxuXHRcdFx0aWQgPT4gKHRoaXMuc3RvcmVzW2lkXSAmJiB0aGlzLnN0b3Jlc1tpZF0ucmV0YWluICYmIHRoaXMuc3RvcmVzW2lkXS5yZXRhaW4ocmVhc29uKSlcblx0XHQpXG5cdH1cblx0XG5cdC8qKlxuXHQgKiBDYWxsIHJldGFpbiBvbiB0aGUgc2NvcGVkIHN0b3Jlc1xuXHQgKlxuXHQgKiBAcGFyYW0gc3RvcmVzXG5cdCAqIEBwYXJhbSByZWFzb25cblx0ICovXG5cdGRpc3Bvc2VTdG9yZXMoIHN0b3JlcyA9IFtdLCByZWFzb24gKSB7XG5cdFx0c3RvcmVzLmZvckVhY2goXG5cdFx0XHRpZCA9PiAodGhpcy5zdG9yZXNbaWRdICYmIHRoaXMuc3RvcmVzW2lkXS5kaXNwb3NlICYmIHRoaXMuc3RvcmVzW2lkXS5kaXNwb3NlKHJlYXNvbikpXG5cdFx0KVxuXHR9XG5cdFxuXHQvKipcblx0ICogS2VlcCB0aGUgc2NvcGUgdW5zdGFibGUgdW50aWwgcmVsZWFzZSBpcyBjYWxsZWRcblx0ICogQHBhcmFtIHJlYXNvblxuXHQgKi9cblx0d2FpdCggcmVhc29uICkge1xuXHRcdC8vY29uc29sZS5sb2coXCJ3YWl0XCIsIHJlYXNvbik7XG5cdFx0dGhpcy5fc3RhYmxlICYmICF0aGlzLl9fbG9ja3MuYWxsICYmIHRoaXMuZW1pdChcInVuc3RhYmxlXCIsIHRoaXMpO1xuXHRcdHRoaXMuX3N0YWJsZSA9IGZhbHNlO1xuXHRcdHRoaXMuX19sb2Nrcy5hbGwrKztcblx0XHRpZiAoIHJlYXNvbiApIHtcblx0XHRcdHRoaXMuX19sb2Nrc1tyZWFzb25dID0gdGhpcy5fX2xvY2tzW3JlYXNvbl0gfHwgMDtcblx0XHRcdHRoaXMuX19sb2Nrc1tyZWFzb25dKys7XG5cdFx0fVxuXHR9XG5cdFxuXHRcblx0LyoqXG5cdCAqIFN0YWJpbGl6ZSB0aGUgc2NvcGUgaWYgbm8gbW9yZSBsb2NrcyByZW1haW4gKHdhaXQgZm4pXG5cdCAqIEBwYXJhbSByZWFzb25cblx0ICovXG5cdHJlbGVhc2UoIHJlYXNvbiApIHtcblx0XHRcblx0XHRpZiAoIHJlYXNvbiApIHtcblx0XHRcdGlmICggdGhpcy5fX2xvY2tzW3JlYXNvbl0gPT0gMCApXG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoXCJSZWxlYXNlIG1vcmUgdGhhbiBsb2NraW5nICFcIiwgcmVhc29uKTtcblx0XHRcdHRoaXMuX19sb2Nrc1tyZWFzb25dID0gdGhpcy5fX2xvY2tzW3JlYXNvbl0gfHwgMDtcblx0XHRcdHRoaXMuX19sb2Nrc1tyZWFzb25dLS07XG5cdFx0fVxuXHRcdGlmICggIXJlYXNvbiAmJiB0aGlzLl9fbG9ja3MuYWxsID09IDAgKVxuXHRcdFx0Y29uc29sZS5lcnJvcihcIlJlbGVhc2UgbW9yZSB0aGFuIGxvY2tpbmcgIVwiKTtcblx0XHRcblx0XHR0aGlzLl9fbG9ja3MuYWxsLS07XG5cdFx0aWYgKCAhdGhpcy5fX2xvY2tzLmFsbCApIHtcblx0XHRcdHRoaXMuXy5zdGFiaWxpemVyVE0gJiYgY2xlYXJUaW1lb3V0KHRoaXMuXy5zdGFiaWxpemVyVE0pO1xuXHRcdFx0XG5cdFx0XHR0aGlzLl8uc3RhYmlsaXplclRNID0gc2V0VGltZW91dChcblx0XHRcdFx0ZSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5fLnN0YWJpbGl6ZXJUTSA9IG51bGw7XG5cdFx0XHRcdFx0aWYgKCB0aGlzLl9fbG9ja3MuYWxsIClcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHR0aGlzLl8ucHJvcGFnVE0gJiYgY2xlYXJUaW1lb3V0KHRoaXMuXy5wcm9wYWdUTSk7XG5cdFx0XHRcdFx0dGhpcy5fcmV2Kys7XG5cdFx0XHRcdFx0dGhpcy5fc3RhYmxlID0gdHJ1ZTtcblx0XHRcdFx0XHR0aGlzLmVtaXQoXCJzdGFibGVcIiwgdGhpcyk7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0IXRoaXMuZGVhZCAmJiB0aGlzLl9wcm9wYWcoKTsvLyBzdGFiaWxpdHkgY2FuIGluZHVjZSBkZXN0cm95XG5cdFx0XHRcdH1cblx0XHRcdCk7XG5cdFx0fVxuXHRcdFxuXHR9XG5cdFxuXHQvKipcblx0ICogUHJvcGFnIHN0b3JlcyB1cGRhdGVzIGJhc2luZyB0aGVpcnMgbGFzdCB1cGRhdGVzXG5cdCAqL1xuXHRwcm9wYWcoKSB7XG5cdFx0dGhpcy5fLnByb3BhZ1RNICYmIGNsZWFyVGltZW91dCh0aGlzLl8ucHJvcGFnVE0pO1xuXHRcdHRoaXMuXy5wcm9wYWdUTSA9IHNldFRpbWVvdXQoXG5cdFx0XHRlID0+IHtcblx0XHRcdFx0dGhpcy5fLnByb3BhZ1RNID0gbnVsbDtcblx0XHRcdFx0dGhpcy5fcHJvcGFnKClcblx0XHRcdH0sIDJcblx0XHQpO1xuXHR9XG5cdFxuXHRfcHJvcGFnKCkge1xuXHRcdGlmICggdGhpcy5fLmZvbGxvd2Vycy5sZW5ndGggKVxuXHRcdFx0dGhpcy5fLmZvbGxvd2Vycy5mb3JFYWNoKCggeyAwOiBvYmosIDE6IGtleSwgMjogYXMsIDM6IGxhc3RSZXZzLCAzOiByZW1hcHMgfSApID0+IHtcblx0XHRcdFx0bGV0IGRhdGEgPSB0aGlzLmdldFVwZGF0ZXMobGFzdFJldnMpO1xuXHRcdFx0XHRpZiAoICFkYXRhICkgcmV0dXJuO1xuXHRcdFx0XHQvL2NvbnNvbGUubG9nKGRhdGEsIGxhc3RSZXZzKVxuXHRcdFx0XHRpZiAoIHR5cGVvZiBvYmogIT0gXCJmdW5jdGlvblwiICkge1xuXHRcdFx0XHRcdC8vY29uc29sZS5sb2coXCJzZXRTdGF0ZSBcIixvYmosIE9iamVjdC5rZXlzKGRhdGEpKVxuXHRcdFx0XHRcdGlmICggYXMgKSBvYmouc2V0U3RhdGUoeyBbYXNdOiBkYXRhIH0pO1xuXHRcdFx0XHRcdGVsc2Ugb2JqLnNldFN0YXRlKGRhdGEpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdG9iaihkYXRhLCBsYXN0UmV2cyAmJiBbLi4ubGFzdFJldnNdIHx8IFwibm8gcmV2c1wiKTtcblx0XHRcdFx0fVxuXHRcdFx0XHQvLyBsYXN0UmV2cyAmJlxuXHRcdFx0XHQvLyBrZXkuZm9yRWFjaChpZCA9PiAobGFzdFJldnNbaWRdID0gdGhpcy5zdG9yZXNbaWRdICYmXG5cdFx0XHRcdC8vIHRoaXMuc3RvcmVzW2lkXS5fcmV2IHx8IDApKTtcblx0XHRcdH0pO1xuXHRcdHRoaXMuZW1pdChcInVwZGF0ZVwiLCB0aGlzLmdldFVwZGF0ZXMoKSk7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBpcyBzdGFibGVcblx0ICogQHJldHVybnMgYm9vbFxuXHQgKi9cblx0aXNTdGFibGUoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX3N0YWJsZTtcblx0fVxuXHRcblx0X2FkZENoaWxkKCBjdHggKSB7XG5cdFx0dGhpcy5fLmNoaWxkU2NvcGVzLnB1c2goY3R4KTtcblx0XHR0aGlzLl8uc2VlbkNoaWxkcysrO1xuXHRcdGxldCBsaXN0cyAgICAgPSB7XG5cdFx0XHQgICAgJ3N0YWJsZScgICAgICA6IHMgPT4ge1xuXHRcdFx0XHQgICAgdGhpcy5fLnVuU3RhYmxlQ2hpbGRzLS07XG5cdFx0XHRcdCAgICBpZiAoICF0aGlzLl8udW5TdGFibGVDaGlsZHMgKVxuXHRcdFx0XHRcdCAgICB0aGlzLmVtaXQoXCJzdGFibGVUcmVlXCIsIHRoaXMpXG5cdFx0XHQgICAgfSxcblx0XHRcdCAgICAndW5zdGFibGUnICAgIDogcyA9PiB7XG5cdFx0XHRcdCAgICB0aGlzLl8udW5TdGFibGVDaGlsZHMrKztcblx0XHRcdFx0ICAgIGlmICggMSA9PSB0aGlzLl8udW5TdGFibGVDaGlsZHMgKVxuXHRcdFx0XHRcdCAgICB0aGlzLmVtaXQoXCJ1bnN0YWJsZVRyZWVcIiwgdGhpcylcblx0XHRcdCAgICB9LFxuXHRcdFx0ICAgICdzdGFibGVUcmVlJyAgOiBzID0+IHtcblx0XHRcdFx0ICAgIHRoaXMuXy51blN0YWJsZUNoaWxkcy0tO1xuXHRcdFx0XHQgICAgaWYgKCAhdGhpcy5fLnVuU3RhYmxlQ2hpbGRzIClcblx0XHRcdFx0XHQgICAgdGhpcy5lbWl0KFwic3RhYmxlVHJlZVwiLCB0aGlzKVxuXHRcdFx0ICAgIH0sXG5cdFx0XHQgICAgJ3Vuc3RhYmxlVHJlZSc6IHMgPT4ge1xuXHRcdFx0XHQgICAgdGhpcy5fLnVuU3RhYmxlQ2hpbGRzKys7XG5cdFx0XHRcdCAgICBpZiAoIDEgPT0gdGhpcy5fLnVuU3RhYmxlQ2hpbGRzIClcblx0XHRcdFx0XHQgICAgdGhpcy5lbWl0KFwidW5zdGFibGVUcmVlXCIsIHRoaXMpXG5cdFx0XHQgICAgfSxcblx0XHRcdCAgICAnZGVzdHJveScgICAgIDogY3R4ID0+IHtcblx0XHRcdFx0ICAgIGlmICggY3R4Ll8udW5TdGFibGVDaGlsZHMgKVxuXHRcdFx0XHRcdCAgICB0aGlzLl8udW5TdGFibGVDaGlsZHMtLTtcblx0XHRcdFx0ICAgIGlmICggIWN0eC5pc1N0YWJsZSgpIClcblx0XHRcdFx0XHQgICAgdGhpcy5fLnVuU3RhYmxlQ2hpbGRzLS07XG5cdFx0XHRcdFxuXHRcdFx0XHQgICAgaWYgKCAhdGhpcy5fLnVuU3RhYmxlQ2hpbGRzIClcblx0XHRcdFx0XHQgICAgdGhpcy5lbWl0KFwic3RhYmxlVHJlZVwiLCB0aGlzKVxuXHRcdFx0ICAgIH1cblx0XHQgICAgfSxcblx0XHQgICAgd2FzU3RhYmxlID0gdGhpcy5fLnVuU3RhYmxlQ2hpbGRzO1xuXHRcdC8vIWN0eC5pc1N0YWJsZSgpICYmIGNvbnNvbGUud2FybignYWRkIHVuc3RhYmxlIGNoaWxkJyk7XG5cdFx0IWN0eC5pc1N0YWJsZSgpICYmIHRoaXMuXy51blN0YWJsZUNoaWxkcysrO1xuXHRcdGN0eC5fLnVuU3RhYmxlQ2hpbGRzICYmIHRoaXMuXy51blN0YWJsZUNoaWxkcysrO1xuXHRcdHRoaXMuXy5jaGlsZFNjb3Blc0xpc3QucHVzaChsaXN0cyk7XG5cdFx0aWYgKCAhd2FzU3RhYmxlICYmIHRoaXMuXy51blN0YWJsZUNoaWxkcyApXG5cdFx0XHR0aGlzLmVtaXQoXCJ1bnN0YWJsZVRyZWVcIiwgdGhpcylcblx0XHRjdHgub24obGlzdHMpO1xuXHR9XG5cdFxuXHRfcm1DaGlsZCggY3R4ICkge1xuXHRcdGxldCBpICAgICAgICAgPSB0aGlzLl8uY2hpbGRTY29wZXMuaW5kZXhPZihjdHgpLFxuXHRcdCAgICB3YXNTdGFibGUgPSB0aGlzLl8udW5TdGFibGVDaGlsZHM7XG5cdFx0aWYgKCBpICE9IC0xICkge1xuXHRcdFx0dGhpcy5fLmNoaWxkU2NvcGVzLnNwbGljZShpLCAxKTtcblx0XHRcdCFjdHguaXNTdGFibGUoKSAmJiB0aGlzLl8udW5TdGFibGVDaGlsZHMtLTtcblx0XHRcdGN0eC5fLnVuU3RhYmxlQ2hpbGRzICYmIHRoaXMuXy51blN0YWJsZUNoaWxkcy0tO1xuXHRcdFx0Y3R4LnVuKHRoaXMuXy5jaGlsZFNjb3Blc0xpc3Quc3BsaWNlKGksIDEpWzBdKTtcblx0XHRcdGlmICggd2FzU3RhYmxlICYmICF0aGlzLl8udW5TdGFibGVDaGlsZHMgKVxuXHRcdFx0XHR0aGlzLmVtaXQoXCJzdGFibGVUcmVlXCIpXG5cdFx0fVxuXHR9XG5cdFxuXHRyZXRhaW4oIHJlYXNvbiApIHtcblx0XHR0aGlzLl9fcmV0YWlucy5hbGwrKztcblx0XHQvL2NvbnNvbGUubG9nKFwicmV0YWluXCIsIHRoaXMuX2lkLCByZWFzb24pO1xuXHRcdGlmICggcmVhc29uICkge1xuXHRcdFx0dGhpcy5fX3JldGFpbnNbcmVhc29uXSA9IHRoaXMuX19yZXRhaW5zW3JlYXNvbl0gfHwgMDtcblx0XHRcdHRoaXMuX19yZXRhaW5zW3JlYXNvbl0rKztcblx0XHR9XG5cdH1cblx0XG5cdGRpc3Bvc2UoIHJlYXNvbiApIHtcblx0XHQvL2NvbnNvbGUubG9nKFwiZGlzcG9zZVwiLCB0aGlzLl9pZCwgcmVhc29uKTtcblx0XHRpZiAoIHJlYXNvbiApIHtcblx0XHRcdGlmICggIXRoaXMuX19yZXRhaW5zW3JlYXNvbl0gKVxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJEaXNwb3NlIG1vcmUgdGhhbiByZXRhaW5pbmcgOiBcIiArIHJlYXNvbik7XG5cdFx0XHR0aGlzLl9fcmV0YWluc1tyZWFzb25dLS07XG5cdFx0fVxuXHRcdFxuXHRcdGlmICggIXRoaXMuX19yZXRhaW5zLmFsbCApXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJEaXNwb3NlIG1vcmUgdGhhbiByZXRhaW5pbmcgIVwiKTtcblx0XHRcblx0XHR0aGlzLl9fcmV0YWlucy5hbGwtLTtcblx0XHRcblx0XHRpZiAoICF0aGlzLl9fcmV0YWlucy5hbGwgKSB7XG5cdFx0XHQvL2NvbnNvbGUubG9nKFwiZGlzcG9zZSBkbyBkZXN0cm95IFwiLCB0aGlzLl9pZCwgdGhpcy5fcGVyc2lzdGVuY2VUbSk7XG5cdFx0XHRpZiAoIHRoaXMuXy5wZXJzaXN0ZW5jZVRtICkge1xuXHRcdFx0XHR0aGlzLl8uZGVzdHJveVRNICYmIGNsZWFyVGltZW91dCh0aGlzLl8uZGVzdHJveVRNKTtcblx0XHRcdFx0dGhpcy5fLmRlc3Ryb3lUTSA9IHNldFRpbWVvdXQoXG5cdFx0XHRcdFx0ZSA9PiB7XG5cdFx0XHRcdFx0XHQvL3RoaXMudGhlbihzID0+IHtcblx0XHRcdFx0XHRcdCF0aGlzLl9fcmV0YWlucy5hbGwgJiYgIXRoaXMuZGVhZCAmJiB0aGlzLmRlc3Ryb3koKVxuXHRcdFx0XHRcdFx0Ly99KTtcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHRoaXMuXy5wZXJzaXN0ZW5jZVRtXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0Ly90aGlzLnRoZW4ocyA9PlxuXHRcdFx0XHQoIXRoaXMuX19yZXRhaW5zLmFsbCAmJiAhdGhpcy5kZWFkICYmIHRoaXMuZGVzdHJveSgpKVxuXHRcdFx0XHQvLyk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdFxuXHQvKipcblx0ICogb3JkZXIgZGVzdHJveSBvZiBsb2NhbCBzdG9yZXNcblx0ICovXG5cdGRlc3Ryb3koKSB7XG5cdFx0bGV0IGN0eCA9IHRoaXMuXy5fc2NvcGU7XG5cdFx0Ly9jb25zb2xlLndhcm4oXCJkZXN0cm95XCIsIHRoaXMuX2lkKTtcblx0XHR0aGlzLl8uc3RhYmlsaXplclRNICYmIGNsZWFyVGltZW91dCh0aGlzLl8uc3RhYmlsaXplclRNKTtcblx0XHR0aGlzLl8ucHJvcGFnVE0gJiYgY2xlYXJUaW1lb3V0KHRoaXMuXy5wcm9wYWdUTSk7XG5cdFx0T2JqZWN0LmtleXMoXG5cdFx0XHR0aGlzLl8uX2xpc3RlbmluZ1xuXHRcdCkuZm9yRWFjaChcblx0XHRcdGlkID0+ICgoaWQgIT09IFwiJHBhcmVudFwiKSAmJiB0aGlzLl8uX3Njb3BlW2lkXS5yZW1vdmVMaXN0ZW5lcih0aGlzLl8uX2xpc3RlbmluZ1tpZF0pKVxuXHRcdCk7XG5cdFx0d2hpbGUgKCB0aGlzLl8uX21peGVkTGlzdC5sZW5ndGggKSB7XG5cdFx0XHR0aGlzLl8uX21peGVkWzBdLnJlbW92ZUxpc3RlbmVyKHRoaXMuXy5fbWl4ZWRMaXN0LnNoaWZ0KCkpO1xuXHRcdFx0dGhpcy5fLl9taXhlZC5zaGlmdCgpLmRpc3Bvc2UoXCJtaXhlZFRvXCIpO1xuXHRcdH1cblx0XHRbLi4udGhpcy5fLmZvbGxvd2Vyc10ubWFwKGZvbGxvd2VyID0+IHRoaXMudW5CaW5kKC4uLmZvbGxvd2VyKSk7XG5cdFx0Zm9yICggbGV0IGtleSBpbiBjdHggKVxuXHRcdFx0aWYgKCAhaXMuZm4oY3R4W2tleV0pICkge1xuXHRcdFx0XHRpZiAoIGtleSA9PSBcIiRwYXJlbnRcIiApIGNvbnRpbnVlO1xuXHRcdFx0XHQhY3R4W2tleV0uX2F1dG9EZXN0cm95ICYmIGN0eFtrZXldLmRpc3Bvc2UoXCJzY29wZWRcIik7XG5cdFx0XHR9XG5cdFx0aWYgKCB0aGlzLl8uX3BhcmVudExpc3QgKSB7XG5cdFx0XHR0aGlzLnBhcmVudC5fcm1DaGlsZCh0aGlzKTtcblx0XHRcdHRoaXMucGFyZW50LnJlbW92ZUxpc3RlbmVyKHRoaXMuXy5fcGFyZW50TGlzdCk7XG5cdFx0XHR0aGlzLnBhcmVudC5kaXNwb3NlKFwiaXNNeVBhcmVudFwiKTtcblx0XHRcdHRoaXMuXy5fcGFyZW50TGlzdCA9IG51bGw7XG5cdFx0fVxuXHRcdHRoaXMuZGVhZCA9IHRydWU7XG5cdFx0dGhpcy5lbWl0KFwiZGVzdHJveVwiLCB0aGlzKTtcblx0XHRcblx0XHRcblx0XHQvL2lmICggIXRoaXMuXy5pc0xvY2FsSWQgKVxuXHRcdGRlbGV0ZSBvcGVuU2NvcGVzW3RoaXMuX2lkXTtcblx0XHRcblx0XHQvL3RoaXMuXyA9IG51bGw7XG5cdFx0XG5cdH1cbn1cblxuXG5pcy5yc1Njb3BlID0gZnVuY3Rpb24gKCBvYmogKSB7XG5cdHJldHVybiBvYmogaW5zdGFuY2VvZiBTY29wZVxufVxuXG5pcy5yc1Njb3BlQ2xhc3MgPSBmdW5jdGlvbiAoIG9iaiApIHtcblx0cmV0dXJuIFNjb3BlLmlzUHJvdG90eXBlT2Yob2JqKSB8fCBvYmogPT09IFNjb3BlXG59XG5leHBvcnQgZGVmYXVsdCBTY29wZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvU2NvcGUuanMiLCJ2YXIgaXMgPSByZXF1aXJlKCdpcycpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgLi4uaXNcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlscy9pcy5qcyIsIi8qIGdsb2JhbHMgd2luZG93LCBIVE1MRWxlbWVudCAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qKiFcbiAqIGlzXG4gKiB0aGUgZGVmaW5pdGl2ZSBKYXZhU2NyaXB0IHR5cGUgdGVzdGluZyBsaWJyYXJ5XG4gKlxuICogQGNvcHlyaWdodCAyMDEzLTIwMTQgRW5yaWNvIE1hcmlubyAvIEpvcmRhbiBIYXJiYW5kXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuXG52YXIgb2JqUHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xudmFyIG93bnMgPSBvYmpQcm90by5oYXNPd25Qcm9wZXJ0eTtcbnZhciB0b1N0ciA9IG9ialByb3RvLnRvU3RyaW5nO1xudmFyIHN5bWJvbFZhbHVlT2Y7XG5pZiAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJykge1xuICBzeW1ib2xWYWx1ZU9mID0gU3ltYm9sLnByb3RvdHlwZS52YWx1ZU9mO1xufVxudmFyIGlzQWN0dWFsTmFOID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPT0gdmFsdWU7XG59O1xudmFyIE5PTl9IT1NUX1RZUEVTID0ge1xuICAnYm9vbGVhbic6IDEsXG4gIG51bWJlcjogMSxcbiAgc3RyaW5nOiAxLFxuICB1bmRlZmluZWQ6IDFcbn07XG5cbnZhciBiYXNlNjRSZWdleCA9IC9eKFtBLVphLXowLTkrL117NH0pKihbQS1aYS16MC05Ky9dezR9fFtBLVphLXowLTkrL117M309fFtBLVphLXowLTkrL117Mn09PSkkLztcbnZhciBoZXhSZWdleCA9IC9eW0EtRmEtZjAtOV0rJC87XG5cbi8qKlxuICogRXhwb3NlIGBpc2BcbiAqL1xuXG52YXIgaXMgPSB7fTtcblxuLyoqXG4gKiBUZXN0IGdlbmVyYWwuXG4gKi9cblxuLyoqXG4gKiBpcy50eXBlXG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgYSB0eXBlIG9mIGB0eXBlYC5cbiAqXG4gKiBAcGFyYW0ge01peGVkfSB2YWx1ZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZSB0eXBlXG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGB2YWx1ZWAgaXMgYSB0eXBlIG9mIGB0eXBlYCwgZmFsc2Ugb3RoZXJ3aXNlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmlzLmEgPSBpcy50eXBlID0gZnVuY3Rpb24gKHZhbHVlLCB0eXBlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09IHR5cGU7XG59O1xuXG4vKipcbiAqIGlzLmRlZmluZWRcbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBkZWZpbmVkLlxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgJ3ZhbHVlJyBpcyBkZWZpbmVkLCBmYWxzZSBvdGhlcndpc2VcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuaXMuZGVmaW5lZCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJztcbn07XG5cbi8qKlxuICogaXMuZW1wdHlcbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBlbXB0eS5cbiAqXG4gKiBAcGFyYW0ge01peGVkfSB2YWx1ZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGB2YWx1ZWAgaXMgZW1wdHksIGZhbHNlIG90aGVyd2lzZVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5pcy5lbXB0eSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHRvU3RyLmNhbGwodmFsdWUpO1xuICB2YXIga2V5O1xuXG4gIGlmICh0eXBlID09PSAnW29iamVjdCBBcnJheV0nIHx8IHR5cGUgPT09ICdbb2JqZWN0IEFyZ3VtZW50c10nIHx8IHR5cGUgPT09ICdbb2JqZWN0IFN0cmluZ10nKSB7XG4gICAgcmV0dXJuIHZhbHVlLmxlbmd0aCA9PT0gMDtcbiAgfVxuXG4gIGlmICh0eXBlID09PSAnW29iamVjdCBPYmplY3RdJykge1xuICAgIGZvciAoa2V5IGluIHZhbHVlKSB7XG4gICAgICBpZiAob3ducy5jYWxsKHZhbHVlLCBrZXkpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gIXZhbHVlO1xufTtcblxuLyoqXG4gKiBpcy5lcXVhbFxuICogVGVzdCBpZiBgdmFsdWVgIGlzIGVxdWFsIHRvIGBvdGhlcmAuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHBhcmFtIHtNaXhlZH0gb3RoZXIgdmFsdWUgdG8gY29tcGFyZSB3aXRoXG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGB2YWx1ZWAgaXMgZXF1YWwgdG8gYG90aGVyYCwgZmFsc2Ugb3RoZXJ3aXNlXG4gKi9cblxuaXMuZXF1YWwgPSBmdW5jdGlvbiBlcXVhbCh2YWx1ZSwgb3RoZXIpIHtcbiAgaWYgKHZhbHVlID09PSBvdGhlcikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgdmFyIHR5cGUgPSB0b1N0ci5jYWxsKHZhbHVlKTtcbiAgdmFyIGtleTtcblxuICBpZiAodHlwZSAhPT0gdG9TdHIuY2FsbChvdGhlcikpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAodHlwZSA9PT0gJ1tvYmplY3QgT2JqZWN0XScpIHtcbiAgICBmb3IgKGtleSBpbiB2YWx1ZSkge1xuICAgICAgaWYgKCFpcy5lcXVhbCh2YWx1ZVtrZXldLCBvdGhlcltrZXldKSB8fCAhKGtleSBpbiBvdGhlcikpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKGtleSBpbiBvdGhlcikge1xuICAgICAgaWYgKCFpcy5lcXVhbCh2YWx1ZVtrZXldLCBvdGhlcltrZXldKSB8fCAhKGtleSBpbiB2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmICh0eXBlID09PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAga2V5ID0gdmFsdWUubGVuZ3RoO1xuICAgIGlmIChrZXkgIT09IG90aGVyLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB3aGlsZSAoa2V5LS0pIHtcbiAgICAgIGlmICghaXMuZXF1YWwodmFsdWVba2V5XSwgb3RoZXJba2V5XSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmICh0eXBlID09PSAnW29iamVjdCBGdW5jdGlvbl0nKSB7XG4gICAgcmV0dXJuIHZhbHVlLnByb3RvdHlwZSA9PT0gb3RoZXIucHJvdG90eXBlO1xuICB9XG5cbiAgaWYgKHR5cGUgPT09ICdbb2JqZWN0IERhdGVdJykge1xuICAgIHJldHVybiB2YWx1ZS5nZXRUaW1lKCkgPT09IG90aGVyLmdldFRpbWUoKTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn07XG5cbi8qKlxuICogaXMuaG9zdGVkXG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgaG9zdGVkIGJ5IGBob3N0YC5cbiAqXG4gKiBAcGFyYW0ge01peGVkfSB2YWx1ZSB0byB0ZXN0XG4gKiBAcGFyYW0ge01peGVkfSBob3N0IGhvc3QgdG8gdGVzdCB3aXRoXG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGB2YWx1ZWAgaXMgaG9zdGVkIGJ5IGBob3N0YCwgZmFsc2Ugb3RoZXJ3aXNlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmlzLmhvc3RlZCA9IGZ1bmN0aW9uICh2YWx1ZSwgaG9zdCkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiBob3N0W3ZhbHVlXTtcbiAgcmV0dXJuIHR5cGUgPT09ICdvYmplY3QnID8gISFob3N0W3ZhbHVlXSA6ICFOT05fSE9TVF9UWVBFU1t0eXBlXTtcbn07XG5cbi8qKlxuICogaXMuaW5zdGFuY2VcbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBhbiBpbnN0YW5jZSBvZiBgY29uc3RydWN0b3JgLlxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgYHZhbHVlYCBpcyBhbiBpbnN0YW5jZSBvZiBgY29uc3RydWN0b3JgXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmlzLmluc3RhbmNlID0gaXNbJ2luc3RhbmNlb2YnXSA9IGZ1bmN0aW9uICh2YWx1ZSwgY29uc3RydWN0b3IpIHtcbiAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgY29uc3RydWN0b3I7XG59O1xuXG4vKipcbiAqIGlzLm5pbCAvIGlzLm51bGxcbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBudWxsLlxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgYHZhbHVlYCBpcyBudWxsLCBmYWxzZSBvdGhlcndpc2VcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuaXMubmlsID0gaXNbJ251bGwnXSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPT09IG51bGw7XG59O1xuXG4vKipcbiAqIGlzLnVuZGVmIC8gaXMudW5kZWZpbmVkXG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgdW5kZWZpbmVkLlxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgYHZhbHVlYCBpcyB1bmRlZmluZWQsIGZhbHNlIG90aGVyd2lzZVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5pcy51bmRlZiA9IGlzLnVuZGVmaW5lZCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJztcbn07XG5cbi8qKlxuICogVGVzdCBhcmd1bWVudHMuXG4gKi9cblxuLyoqXG4gKiBpcy5hcmdzXG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgYW4gYXJndW1lbnRzIG9iamVjdC5cbiAqXG4gKiBAcGFyYW0ge01peGVkfSB2YWx1ZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGB2YWx1ZWAgaXMgYW4gYXJndW1lbnRzIG9iamVjdCwgZmFsc2Ugb3RoZXJ3aXNlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmlzLmFyZ3MgPSBpcy5hcmd1bWVudHMgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgdmFyIGlzU3RhbmRhcmRBcmd1bWVudHMgPSB0b1N0ci5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgQXJndW1lbnRzXSc7XG4gIHZhciBpc09sZEFyZ3VtZW50cyA9ICFpcy5hcnJheSh2YWx1ZSkgJiYgaXMuYXJyYXlsaWtlKHZhbHVlKSAmJiBpcy5vYmplY3QodmFsdWUpICYmIGlzLmZuKHZhbHVlLmNhbGxlZSk7XG4gIHJldHVybiBpc1N0YW5kYXJkQXJndW1lbnRzIHx8IGlzT2xkQXJndW1lbnRzO1xufTtcblxuLyoqXG4gKiBUZXN0IGFycmF5LlxuICovXG5cbi8qKlxuICogaXMuYXJyYXlcbiAqIFRlc3QgaWYgJ3ZhbHVlJyBpcyBhbiBhcnJheS5cbiAqXG4gKiBAcGFyYW0ge01peGVkfSB2YWx1ZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGB2YWx1ZWAgaXMgYW4gYXJyYXksIGZhbHNlIG90aGVyd2lzZVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5pcy5hcnJheSA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiB0b1N0ci5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbn07XG5cbi8qKlxuICogaXMuYXJndW1lbnRzLmVtcHR5XG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgYW4gZW1wdHkgYXJndW1lbnRzIG9iamVjdC5cbiAqXG4gKiBAcGFyYW0ge01peGVkfSB2YWx1ZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGB2YWx1ZWAgaXMgYW4gZW1wdHkgYXJndW1lbnRzIG9iamVjdCwgZmFsc2Ugb3RoZXJ3aXNlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5pcy5hcmdzLmVtcHR5ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiBpcy5hcmdzKHZhbHVlKSAmJiB2YWx1ZS5sZW5ndGggPT09IDA7XG59O1xuXG4vKipcbiAqIGlzLmFycmF5LmVtcHR5XG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgYW4gZW1wdHkgYXJyYXkuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBgdmFsdWVgIGlzIGFuIGVtcHR5IGFycmF5LCBmYWxzZSBvdGhlcndpc2VcbiAqIEBhcGkgcHVibGljXG4gKi9cbmlzLmFycmF5LmVtcHR5ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiBpcy5hcnJheSh2YWx1ZSkgJiYgdmFsdWUubGVuZ3RoID09PSAwO1xufTtcblxuLyoqXG4gKiBpcy5hcnJheWxpa2VcbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBhbiBhcnJheWxpa2Ugb2JqZWN0LlxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgYHZhbHVlYCBpcyBhbiBhcmd1bWVudHMgb2JqZWN0LCBmYWxzZSBvdGhlcndpc2VcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuaXMuYXJyYXlsaWtlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiAhIXZhbHVlICYmICFpcy5ib29sKHZhbHVlKVxuICAgICYmIG93bnMuY2FsbCh2YWx1ZSwgJ2xlbmd0aCcpXG4gICAgJiYgaXNGaW5pdGUodmFsdWUubGVuZ3RoKVxuICAgICYmIGlzLm51bWJlcih2YWx1ZS5sZW5ndGgpXG4gICAgJiYgdmFsdWUubGVuZ3RoID49IDA7XG59O1xuXG4vKipcbiAqIFRlc3QgYm9vbGVhbi5cbiAqL1xuXG4vKipcbiAqIGlzLmJvb2xcbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBhIGJvb2xlYW4uXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBgdmFsdWVgIGlzIGEgYm9vbGVhbiwgZmFsc2Ugb3RoZXJ3aXNlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmlzLmJvb2wgPSBpc1snYm9vbGVhbiddID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiB0b1N0ci5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgQm9vbGVhbl0nO1xufTtcblxuLyoqXG4gKiBpcy5mYWxzZVxuICogVGVzdCBpZiBgdmFsdWVgIGlzIGZhbHNlLlxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgYHZhbHVlYCBpcyBmYWxzZSwgZmFsc2Ugb3RoZXJ3aXNlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmlzWydmYWxzZSddID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiBpcy5ib29sKHZhbHVlKSAmJiBCb29sZWFuKE51bWJlcih2YWx1ZSkpID09PSBmYWxzZTtcbn07XG5cbi8qKlxuICogaXMudHJ1ZVxuICogVGVzdCBpZiBgdmFsdWVgIGlzIHRydWUuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBgdmFsdWVgIGlzIHRydWUsIGZhbHNlIG90aGVyd2lzZVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5pc1sndHJ1ZSddID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiBpcy5ib29sKHZhbHVlKSAmJiBCb29sZWFuKE51bWJlcih2YWx1ZSkpID09PSB0cnVlO1xufTtcblxuLyoqXG4gKiBUZXN0IGRhdGUuXG4gKi9cblxuLyoqXG4gKiBpcy5kYXRlXG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgYSBkYXRlLlxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgYHZhbHVlYCBpcyBhIGRhdGUsIGZhbHNlIG90aGVyd2lzZVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5pcy5kYXRlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiB0b1N0ci5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgRGF0ZV0nO1xufTtcblxuLyoqXG4gKiBpcy5kYXRlLnZhbGlkXG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBkYXRlLlxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0cnVlIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBkYXRlLCBmYWxzZSBvdGhlcndpc2VcbiAqL1xuaXMuZGF0ZS52YWxpZCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICByZXR1cm4gaXMuZGF0ZSh2YWx1ZSkgJiYgIWlzTmFOKE51bWJlcih2YWx1ZSkpO1xufTtcblxuLyoqXG4gKiBUZXN0IGVsZW1lbnQuXG4gKi9cblxuLyoqXG4gKiBpcy5lbGVtZW50XG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgYW4gaHRtbCBlbGVtZW50LlxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgYHZhbHVlYCBpcyBhbiBIVE1MIEVsZW1lbnQsIGZhbHNlIG90aGVyd2lzZVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5pcy5lbGVtZW50ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPT0gdW5kZWZpbmVkXG4gICAgJiYgdHlwZW9mIEhUTUxFbGVtZW50ICE9PSAndW5kZWZpbmVkJ1xuICAgICYmIHZhbHVlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnRcbiAgICAmJiB2YWx1ZS5ub2RlVHlwZSA9PT0gMTtcbn07XG5cbi8qKlxuICogVGVzdCBlcnJvci5cbiAqL1xuXG4vKipcbiAqIGlzLmVycm9yXG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgYW4gZXJyb3Igb2JqZWN0LlxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgYHZhbHVlYCBpcyBhbiBlcnJvciBvYmplY3QsIGZhbHNlIG90aGVyd2lzZVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5pcy5lcnJvciA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICByZXR1cm4gdG9TdHIuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IEVycm9yXSc7XG59O1xuXG4vKipcbiAqIFRlc3QgZnVuY3Rpb24uXG4gKi9cblxuLyoqXG4gKiBpcy5mbiAvIGlzLmZ1bmN0aW9uIChkZXByZWNhdGVkKVxuICogVGVzdCBpZiBgdmFsdWVgIGlzIGEgZnVuY3Rpb24uXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBgdmFsdWVgIGlzIGEgZnVuY3Rpb24sIGZhbHNlIG90aGVyd2lzZVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5pcy5mbiA9IGlzWydmdW5jdGlvbiddID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHZhciBpc0FsZXJ0ID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgdmFsdWUgPT09IHdpbmRvdy5hbGVydDtcbiAgaWYgKGlzQWxlcnQpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICB2YXIgc3RyID0gdG9TdHIuY2FsbCh2YWx1ZSk7XG4gIHJldHVybiBzdHIgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXScgfHwgc3RyID09PSAnW29iamVjdCBHZW5lcmF0b3JGdW5jdGlvbl0nIHx8IHN0ciA9PT0gJ1tvYmplY3QgQXN5bmNGdW5jdGlvbl0nO1xufTtcblxuLyoqXG4gKiBUZXN0IG51bWJlci5cbiAqL1xuXG4vKipcbiAqIGlzLm51bWJlclxuICogVGVzdCBpZiBgdmFsdWVgIGlzIGEgbnVtYmVyLlxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgYHZhbHVlYCBpcyBhIG51bWJlciwgZmFsc2Ugb3RoZXJ3aXNlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmlzLm51bWJlciA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICByZXR1cm4gdG9TdHIuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IE51bWJlcl0nO1xufTtcblxuLyoqXG4gKiBpcy5pbmZpbml0ZVxuICogVGVzdCBpZiBgdmFsdWVgIGlzIHBvc2l0aXZlIG9yIG5lZ2F0aXZlIGluZmluaXR5LlxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgYHZhbHVlYCBpcyBwb3NpdGl2ZSBvciBuZWdhdGl2ZSBJbmZpbml0eSwgZmFsc2Ugb3RoZXJ3aXNlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5pcy5pbmZpbml0ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPT09IEluZmluaXR5IHx8IHZhbHVlID09PSAtSW5maW5pdHk7XG59O1xuXG4vKipcbiAqIGlzLmRlY2ltYWxcbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBhIGRlY2ltYWwgbnVtYmVyLlxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgYHZhbHVlYCBpcyBhIGRlY2ltYWwgbnVtYmVyLCBmYWxzZSBvdGhlcndpc2VcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuaXMuZGVjaW1hbCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICByZXR1cm4gaXMubnVtYmVyKHZhbHVlKSAmJiAhaXNBY3R1YWxOYU4odmFsdWUpICYmICFpcy5pbmZpbml0ZSh2YWx1ZSkgJiYgdmFsdWUgJSAxICE9PSAwO1xufTtcblxuLyoqXG4gKiBpcy5kaXZpc2libGVCeVxuICogVGVzdCBpZiBgdmFsdWVgIGlzIGRpdmlzaWJsZSBieSBgbmAuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEBwYXJhbSB7TnVtYmVyfSBuIGRpdmlkZW5kXG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGB2YWx1ZWAgaXMgZGl2aXNpYmxlIGJ5IGBuYCwgZmFsc2Ugb3RoZXJ3aXNlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmlzLmRpdmlzaWJsZUJ5ID0gZnVuY3Rpb24gKHZhbHVlLCBuKSB7XG4gIHZhciBpc0RpdmlkZW5kSW5maW5pdGUgPSBpcy5pbmZpbml0ZSh2YWx1ZSk7XG4gIHZhciBpc0Rpdmlzb3JJbmZpbml0ZSA9IGlzLmluZmluaXRlKG4pO1xuICB2YXIgaXNOb25aZXJvTnVtYmVyID0gaXMubnVtYmVyKHZhbHVlKSAmJiAhaXNBY3R1YWxOYU4odmFsdWUpICYmIGlzLm51bWJlcihuKSAmJiAhaXNBY3R1YWxOYU4obikgJiYgbiAhPT0gMDtcbiAgcmV0dXJuIGlzRGl2aWRlbmRJbmZpbml0ZSB8fCBpc0Rpdmlzb3JJbmZpbml0ZSB8fCAoaXNOb25aZXJvTnVtYmVyICYmIHZhbHVlICUgbiA9PT0gMCk7XG59O1xuXG4vKipcbiAqIGlzLmludGVnZXJcbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBhbiBpbnRlZ2VyLlxuICpcbiAqIEBwYXJhbSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGB2YWx1ZWAgaXMgYW4gaW50ZWdlciwgZmFsc2Ugb3RoZXJ3aXNlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmlzLmludGVnZXIgPSBpc1snaW50J10gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIGlzLm51bWJlcih2YWx1ZSkgJiYgIWlzQWN0dWFsTmFOKHZhbHVlKSAmJiB2YWx1ZSAlIDEgPT09IDA7XG59O1xuXG4vKipcbiAqIGlzLm1heGltdW1cbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBncmVhdGVyIHRoYW4gJ290aGVycycgdmFsdWVzLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSB2YWx1ZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcGFyYW0ge0FycmF5fSBvdGhlcnMgdmFsdWVzIHRvIGNvbXBhcmUgd2l0aFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBgdmFsdWVgIGlzIGdyZWF0ZXIgdGhhbiBgb3RoZXJzYCB2YWx1ZXNcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuaXMubWF4aW11bSA9IGZ1bmN0aW9uICh2YWx1ZSwgb3RoZXJzKSB7XG4gIGlmIChpc0FjdHVhbE5hTih2YWx1ZSkpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdOYU4gaXMgbm90IGEgdmFsaWQgdmFsdWUnKTtcbiAgfSBlbHNlIGlmICghaXMuYXJyYXlsaWtlKG90aGVycykpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdzZWNvbmQgYXJndW1lbnQgbXVzdCBiZSBhcnJheS1saWtlJyk7XG4gIH1cbiAgdmFyIGxlbiA9IG90aGVycy5sZW5ndGg7XG5cbiAgd2hpbGUgKC0tbGVuID49IDApIHtcbiAgICBpZiAodmFsdWUgPCBvdGhlcnNbbGVuXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcblxuLyoqXG4gKiBpcy5taW5pbXVtXG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgbGVzcyB0aGFuIGBvdGhlcnNgIHZhbHVlcy5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHBhcmFtIHtBcnJheX0gb3RoZXJzIHZhbHVlcyB0byBjb21wYXJlIHdpdGhcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgYHZhbHVlYCBpcyBsZXNzIHRoYW4gYG90aGVyc2AgdmFsdWVzXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmlzLm1pbmltdW0gPSBmdW5jdGlvbiAodmFsdWUsIG90aGVycykge1xuICBpZiAoaXNBY3R1YWxOYU4odmFsdWUpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignTmFOIGlzIG5vdCBhIHZhbGlkIHZhbHVlJyk7XG4gIH0gZWxzZSBpZiAoIWlzLmFycmF5bGlrZShvdGhlcnMpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignc2Vjb25kIGFyZ3VtZW50IG11c3QgYmUgYXJyYXktbGlrZScpO1xuICB9XG4gIHZhciBsZW4gPSBvdGhlcnMubGVuZ3RoO1xuXG4gIHdoaWxlICgtLWxlbiA+PSAwKSB7XG4gICAgaWYgKHZhbHVlID4gb3RoZXJzW2xlbl0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbi8qKlxuICogaXMubmFuXG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgbm90IGEgbnVtYmVyLlxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgYHZhbHVlYCBpcyBub3QgYSBudW1iZXIsIGZhbHNlIG90aGVyd2lzZVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5pcy5uYW4gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuICFpcy5udW1iZXIodmFsdWUpIHx8IHZhbHVlICE9PSB2YWx1ZTtcbn07XG5cbi8qKlxuICogaXMuZXZlblxuICogVGVzdCBpZiBgdmFsdWVgIGlzIGFuIGV2ZW4gbnVtYmVyLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSB2YWx1ZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGB2YWx1ZWAgaXMgYW4gZXZlbiBudW1iZXIsIGZhbHNlIG90aGVyd2lzZVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5pcy5ldmVuID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiBpcy5pbmZpbml0ZSh2YWx1ZSkgfHwgKGlzLm51bWJlcih2YWx1ZSkgJiYgdmFsdWUgPT09IHZhbHVlICYmIHZhbHVlICUgMiA9PT0gMCk7XG59O1xuXG4vKipcbiAqIGlzLm9kZFxuICogVGVzdCBpZiBgdmFsdWVgIGlzIGFuIG9kZCBudW1iZXIuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgYHZhbHVlYCBpcyBhbiBvZGQgbnVtYmVyLCBmYWxzZSBvdGhlcndpc2VcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuaXMub2RkID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiBpcy5pbmZpbml0ZSh2YWx1ZSkgfHwgKGlzLm51bWJlcih2YWx1ZSkgJiYgdmFsdWUgPT09IHZhbHVlICYmIHZhbHVlICUgMiAhPT0gMCk7XG59O1xuXG4vKipcbiAqIGlzLmdlXG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgZ3JlYXRlciB0aGFuIG9yIGVxdWFsIHRvIGBvdGhlcmAuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEBwYXJhbSB7TnVtYmVyfSBvdGhlciB2YWx1ZSB0byBjb21wYXJlIHdpdGhcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmlzLmdlID0gZnVuY3Rpb24gKHZhbHVlLCBvdGhlcikge1xuICBpZiAoaXNBY3R1YWxOYU4odmFsdWUpIHx8IGlzQWN0dWFsTmFOKG90aGVyKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ05hTiBpcyBub3QgYSB2YWxpZCB2YWx1ZScpO1xuICB9XG4gIHJldHVybiAhaXMuaW5maW5pdGUodmFsdWUpICYmICFpcy5pbmZpbml0ZShvdGhlcikgJiYgdmFsdWUgPj0gb3RoZXI7XG59O1xuXG4vKipcbiAqIGlzLmd0XG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgZ3JlYXRlciB0aGFuIGBvdGhlcmAuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEBwYXJhbSB7TnVtYmVyfSBvdGhlciB2YWx1ZSB0byBjb21wYXJlIHdpdGhcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmlzLmd0ID0gZnVuY3Rpb24gKHZhbHVlLCBvdGhlcikge1xuICBpZiAoaXNBY3R1YWxOYU4odmFsdWUpIHx8IGlzQWN0dWFsTmFOKG90aGVyKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ05hTiBpcyBub3QgYSB2YWxpZCB2YWx1ZScpO1xuICB9XG4gIHJldHVybiAhaXMuaW5maW5pdGUodmFsdWUpICYmICFpcy5pbmZpbml0ZShvdGhlcikgJiYgdmFsdWUgPiBvdGhlcjtcbn07XG5cbi8qKlxuICogaXMubGVcbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gYG90aGVyYC5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHBhcmFtIHtOdW1iZXJ9IG90aGVyIHZhbHVlIHRvIGNvbXBhcmUgd2l0aFxuICogQHJldHVybiB7Qm9vbGVhbn0gaWYgJ3ZhbHVlJyBpcyBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gJ290aGVyJ1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5pcy5sZSA9IGZ1bmN0aW9uICh2YWx1ZSwgb3RoZXIpIHtcbiAgaWYgKGlzQWN0dWFsTmFOKHZhbHVlKSB8fCBpc0FjdHVhbE5hTihvdGhlcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdOYU4gaXMgbm90IGEgdmFsaWQgdmFsdWUnKTtcbiAgfVxuICByZXR1cm4gIWlzLmluZmluaXRlKHZhbHVlKSAmJiAhaXMuaW5maW5pdGUob3RoZXIpICYmIHZhbHVlIDw9IG90aGVyO1xufTtcblxuLyoqXG4gKiBpcy5sdFxuICogVGVzdCBpZiBgdmFsdWVgIGlzIGxlc3MgdGhhbiBgb3RoZXJgLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSB2YWx1ZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcGFyYW0ge051bWJlcn0gb3RoZXIgdmFsdWUgdG8gY29tcGFyZSB3aXRoXG4gKiBAcmV0dXJuIHtCb29sZWFufSBpZiBgdmFsdWVgIGlzIGxlc3MgdGhhbiBgb3RoZXJgXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmlzLmx0ID0gZnVuY3Rpb24gKHZhbHVlLCBvdGhlcikge1xuICBpZiAoaXNBY3R1YWxOYU4odmFsdWUpIHx8IGlzQWN0dWFsTmFOKG90aGVyKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ05hTiBpcyBub3QgYSB2YWxpZCB2YWx1ZScpO1xuICB9XG4gIHJldHVybiAhaXMuaW5maW5pdGUodmFsdWUpICYmICFpcy5pbmZpbml0ZShvdGhlcikgJiYgdmFsdWUgPCBvdGhlcjtcbn07XG5cbi8qKlxuICogaXMud2l0aGluXG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgd2l0aGluIGBzdGFydGAgYW5kIGBmaW5pc2hgLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSB2YWx1ZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcGFyYW0ge051bWJlcn0gc3RhcnQgbG93ZXIgYm91bmRcbiAqIEBwYXJhbSB7TnVtYmVyfSBmaW5pc2ggdXBwZXIgYm91bmRcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgJ3ZhbHVlJyBpcyBpcyB3aXRoaW4gJ3N0YXJ0JyBhbmQgJ2ZpbmlzaCdcbiAqIEBhcGkgcHVibGljXG4gKi9cbmlzLndpdGhpbiA9IGZ1bmN0aW9uICh2YWx1ZSwgc3RhcnQsIGZpbmlzaCkge1xuICBpZiAoaXNBY3R1YWxOYU4odmFsdWUpIHx8IGlzQWN0dWFsTmFOKHN0YXJ0KSB8fCBpc0FjdHVhbE5hTihmaW5pc2gpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignTmFOIGlzIG5vdCBhIHZhbGlkIHZhbHVlJyk7XG4gIH0gZWxzZSBpZiAoIWlzLm51bWJlcih2YWx1ZSkgfHwgIWlzLm51bWJlcihzdGFydCkgfHwgIWlzLm51bWJlcihmaW5pc2gpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignYWxsIGFyZ3VtZW50cyBtdXN0IGJlIG51bWJlcnMnKTtcbiAgfVxuICB2YXIgaXNBbnlJbmZpbml0ZSA9IGlzLmluZmluaXRlKHZhbHVlKSB8fCBpcy5pbmZpbml0ZShzdGFydCkgfHwgaXMuaW5maW5pdGUoZmluaXNoKTtcbiAgcmV0dXJuIGlzQW55SW5maW5pdGUgfHwgKHZhbHVlID49IHN0YXJ0ICYmIHZhbHVlIDw9IGZpbmlzaCk7XG59O1xuXG4vKipcbiAqIFRlc3Qgb2JqZWN0LlxuICovXG5cbi8qKlxuICogaXMub2JqZWN0XG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgYW4gb2JqZWN0LlxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgYHZhbHVlYCBpcyBhbiBvYmplY3QsIGZhbHNlIG90aGVyd2lzZVxuICogQGFwaSBwdWJsaWNcbiAqL1xuaXMub2JqZWN0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiB0b1N0ci5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgT2JqZWN0XSc7XG59O1xuXG4vKipcbiAqIGlzLnByaW1pdGl2ZVxuICogVGVzdCBpZiBgdmFsdWVgIGlzIGEgcHJpbWl0aXZlLlxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgYHZhbHVlYCBpcyBhIHByaW1pdGl2ZSwgZmFsc2Ugb3RoZXJ3aXNlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5pcy5wcmltaXRpdmUgPSBmdW5jdGlvbiBpc1ByaW1pdGl2ZSh2YWx1ZSkge1xuICBpZiAoIXZhbHVlKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgfHwgaXMub2JqZWN0KHZhbHVlKSB8fCBpcy5mbih2YWx1ZSkgfHwgaXMuYXJyYXkodmFsdWUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiB0cnVlO1xufTtcblxuLyoqXG4gKiBpcy5oYXNoXG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgYSBoYXNoIC0gYSBwbGFpbiBvYmplY3QgbGl0ZXJhbC5cbiAqXG4gKiBAcGFyYW0ge01peGVkfSB2YWx1ZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGB2YWx1ZWAgaXMgYSBoYXNoLCBmYWxzZSBvdGhlcndpc2VcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuaXMuaGFzaCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICByZXR1cm4gaXMub2JqZWN0KHZhbHVlKSAmJiB2YWx1ZS5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0ICYmICF2YWx1ZS5ub2RlVHlwZSAmJiAhdmFsdWUuc2V0SW50ZXJ2YWw7XG59O1xuXG4vKipcbiAqIFRlc3QgcmVnZXhwLlxuICovXG5cbi8qKlxuICogaXMucmVnZXhwXG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgYSByZWd1bGFyIGV4cHJlc3Npb24uXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBgdmFsdWVgIGlzIGEgcmVnZXhwLCBmYWxzZSBvdGhlcndpc2VcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuaXMucmVnZXhwID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiB0b1N0ci5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgUmVnRXhwXSc7XG59O1xuXG4vKipcbiAqIFRlc3Qgc3RyaW5nLlxuICovXG5cbi8qKlxuICogaXMuc3RyaW5nXG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgYSBzdHJpbmcuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiAndmFsdWUnIGlzIGEgc3RyaW5nLCBmYWxzZSBvdGhlcndpc2VcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuaXMuc3RyaW5nID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiB0b1N0ci5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgU3RyaW5nXSc7XG59O1xuXG4vKipcbiAqIFRlc3QgYmFzZTY0IHN0cmluZy5cbiAqL1xuXG4vKipcbiAqIGlzLmJhc2U2NFxuICogVGVzdCBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgYmFzZTY0IGVuY29kZWQgc3RyaW5nLlxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgJ3ZhbHVlJyBpcyBhIGJhc2U2NCBlbmNvZGVkIHN0cmluZywgZmFsc2Ugb3RoZXJ3aXNlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmlzLmJhc2U2NCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICByZXR1cm4gaXMuc3RyaW5nKHZhbHVlKSAmJiAoIXZhbHVlLmxlbmd0aCB8fCBiYXNlNjRSZWdleC50ZXN0KHZhbHVlKSk7XG59O1xuXG4vKipcbiAqIFRlc3QgYmFzZTY0IHN0cmluZy5cbiAqL1xuXG4vKipcbiAqIGlzLmhleFxuICogVGVzdCBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgaGV4IGVuY29kZWQgc3RyaW5nLlxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgJ3ZhbHVlJyBpcyBhIGhleCBlbmNvZGVkIHN0cmluZywgZmFsc2Ugb3RoZXJ3aXNlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmlzLmhleCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICByZXR1cm4gaXMuc3RyaW5nKHZhbHVlKSAmJiAoIXZhbHVlLmxlbmd0aCB8fCBoZXhSZWdleC50ZXN0KHZhbHVlKSk7XG59O1xuXG4vKipcbiAqIGlzLnN5bWJvbFxuICogVGVzdCBpZiBgdmFsdWVgIGlzIGFuIEVTNiBTeW1ib2xcbiAqXG4gKiBAcGFyYW0ge01peGVkfSB2YWx1ZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGB2YWx1ZWAgaXMgYSBTeW1ib2wsIGZhbHNlIG90aGVyaXNlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmlzLnN5bWJvbCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiB0b1N0ci5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgU3ltYm9sXScgJiYgdHlwZW9mIHN5bWJvbFZhbHVlT2YuY2FsbCh2YWx1ZSkgPT09ICdzeW1ib2wnO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBpcztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9pcy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaXMgPSByZXF1aXJlKCcuL2lzJyk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gd2Fsa25TZXQoIG9iaiwgcGF0aCwgdmFsdWUsIHN0YWNrICkge1xyXG4gICAgaWYgKCBpcy5zdHJpbmcocGF0aCkgKVxyXG4gICAgICAgIHBhdGggPSBwYXRoLnNwbGl0KCcuJyk7XHJcbiAgICBpZiAoICFwYXRoLmxlbmd0aCApXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgZWxzZSBpZiAoIHBhdGgubGVuZ3RoID09IDEgKVxyXG4gICAgICAgIHJldHVybiBvYmpbIHBhdGhbIDAgXSBdID0gc3RhY2tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gWyAuLi4oIG9ialsgcGF0aFsgMCBdIF0gfHwgW10gKSwgdmFsdWUgXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB2YWx1ZTtcclxuICAgIGVsc2VcclxuICAgICAgICByZXR1cm4gd2Fsa25TZXQoXHJcbiAgICAgICAgICAgIG9ialsgcGF0aFsgMCBdIF0gPVxyXG4gICAgICAgICAgICAgICAgb2JqWyBwYXRoWyAwIF0gXSB8fCB7fSxcclxuICAgICAgICAgICAgcGF0aC5zbGljZSgxKSxcclxuICAgICAgICAgICAgdmFsdWUsIHN0YWNrXHJcbiAgICAgICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHdhbGtuR2V0KCBvYmosIHBhdGgsIGlzS2V5ICkge1xyXG4gICAgaWYgKCBpcy5zdHJpbmcocGF0aCkgKVxyXG4gICAgICAgIHBhdGggPSBwYXRoLnNwbGl0KCcuJyk7XHJcbiAgICByZXR1cm4gcGF0aC5sZW5ndGhcclxuICAgICAgICAgICA/IG9ialsgcGF0aFsgMCBdIF0gJiYgd2Fsa25HZXQob2JqWyBwYXRoWyAwIF0gXSwgcGF0aC5zbGljZSgxKSlcclxuICAgICAgICAgICA6IG9iajtcclxufVxyXG5cclxuLy9AdG9kb1xyXG5leHBvcnQgZnVuY3Rpb24ga2V5V2Fsa25TZXQoIG9iaiwgcGF0aCwgdmFsdWUsIHN0YWNrICkge1xyXG4gICAgaWYgKCBpcy5zdHJpbmcocGF0aCkgKVxyXG4gICAgICAgIHBhdGggPSBwYXRoLnNwbGl0KC8oXFw+fFxcLykvaWcpLmZpbHRlcih2ID0+ICggdiAhPT0gJz4nICYmIHYgKSk7XHJcbiAgICByZXR1cm4gd2Fsa25TZXQob2JqLCBwYXRoLCB2YWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBrZXlXYWxrbkdldCggb2JqLCBwYXRoLCBpc0tleSApIHtcclxuICAgIGlmICggaXMuc3RyaW5nKHBhdGgpIClcclxuICAgICAgICBwYXRoID0gcGF0aC5zcGxpdCgvKFxcPnxcXC8pL2lnKS5maWx0ZXIodiA9PiAoIHYgIT09ICc+JyAmJiB2ICkpO1xyXG4gICAgcmV0dXJuIHBhdGgubGVuZ3RoXHJcbiAgICAgICAgICAgPyBvYmpbIHBhdGhbIDAgXSBdICYmIHdhbGtuR2V0KG9ialsgcGF0aFsgMCBdIF0sIHBhdGguc2xpY2UoMSkpXHJcbiAgICAgICAgICAgOiBvYmo7XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbHMvdXRpbHMuanMiLCIvKlxuICogQ29weXJpZ2h0IChjKSAgMjAxOCBXaXNlIFdpbGQgV2ViIC5cbiAqXG4gKiAgTUlUIExpY2Vuc2VcbiAqICBcbiAqICBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiAgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqICB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiAgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiAgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqICBcbiAqICBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcbiAqICBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICogIFxuICogIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqICBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqICBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqICBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiAgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqICBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuICogIFNPRlRXQVJFLlxuICogIFxuICogQGF1dGhvciA6IE5hdGhhbmFlbCBCcmF1blxuICogQGNvbnRhY3QgOiBjYWlwaWxhYnNAZ21haWwuY29tXG4gKi9cbnZhciBpcyA9IHJlcXVpcmUoJ2lzJyk7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbWl0dGVyIHtcbiAgICBfZXZlbnRzID0ge307XG4gICAgXG4gICAgb24oIGV2dCwgY2IgKSB7XG4gICAgICAgIGlmICggIWlzLnN0cmluZyhldnQpICYmIGV2dCApXG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMoZXZ0KS5mb3JFYWNoKGsgPT4gdGhpcy5vbihrLCBldnRba10pKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX2V2ZW50c1tldnRdID0gdGhpcy5fZXZlbnRzW2V2dF0gfHwgW107XG4gICAgICAgIHRoaXMuX2V2ZW50c1tldnRdLnB1c2goY2IpO1xuICAgICAgICBcbiAgICB9XG4gICAgXG4gICAgdW4oIGV2dCwgY2IgKSB7XG4gICAgICAgIGlmICggIWlzLnN0cmluZyhldnQpICYmIGV2dCApXG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMoZXZ0KS5mb3JFYWNoKGsgPT4gdGhpcy51bihrLCBldnRba10pKTtcbiAgICAgICAgXG4gICAgICAgIGlmICggIXRoaXMuX2V2ZW50c1tldnRdICkgcmV0dXJuO1xuICAgICAgICB2YXIgaSA9IHRoaXMuX2V2ZW50c1tldnRdLmluZGV4T2YoY2IpO1xuICAgICAgICB0aGlzLl9ldmVudHNbZXZ0XS5zcGxpY2UoaSwgMSk7XG4gICAgfVxuICAgIFxuICAgIGVtaXQoIGV2dCwgLi4uYXJneiApIHtcbiAgICAgICAgaWYgKCAhdGhpcy5fZXZlbnRzW2V2dF0gKSByZXR1cm47XG4gICAgICAgIGxldCBsaXN0cyA9IFsuLi50aGlzLl9ldmVudHNbZXZ0XV07XG4gICAgICAgIFxuICAgICAgICBmb3IgKCB2YXIgaSA9IDA7IGkgPCBsaXN0cy5sZW5ndGg7IGkrKyApXG4gICAgICAgICAgICBsaXN0c1tpXSguLi5hcmd6KVxuICAgIH1cbiAgICBcbiAgICBhZGRMaXN0ZW5lcigpIHtcbiAgICAgICAgdGhpcy5vbiguLi5hcmd1bWVudHMpO1xuICAgIH1cbiAgICBcbiAgICByZW1vdmVMaXN0ZW5lcigpIHtcbiAgICAgICAgdGhpcy51biguLi5hcmd1bWVudHMpO1xuICAgIH1cbiAgICBcbiAgICByZW1vdmVBbGxMaXN0ZW5lcnMoKSB7XG4gICAgICAgIHRoaXMuX2V2ZW50cyA9IHt9O1xuICAgIH1cbiAgICBcbiAgICBvbmNlKCBldnQsIGNiICkge1xuICAgICAgICBsZXQgZm47XG4gICAgICAgIHRoaXMub24oZXZ0LCBmbiA9ICggLi4uYXJneiApID0+IHtcbiAgICAgICAgICAgIHRoaXMudW4oZXZ0LCBmbik7XG4gICAgICAgICAgICBjYiguLi5hcmd6KVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgXG4gICAgXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWxzL0VtaXR0ZXIuanMiLCIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vbGliL2luZGV4Jyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc2hvcnRpZC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbnZhciBhbHBoYWJldCA9IHJlcXVpcmUoJy4vYWxwaGFiZXQnKTtcbnZhciBlbmNvZGUgPSByZXF1aXJlKCcuL2VuY29kZScpO1xudmFyIGRlY29kZSA9IHJlcXVpcmUoJy4vZGVjb2RlJyk7XG52YXIgYnVpbGQgPSByZXF1aXJlKCcuL2J1aWxkJyk7XG52YXIgaXNWYWxpZCA9IHJlcXVpcmUoJy4vaXMtdmFsaWQnKTtcblxuLy8gaWYgeW91IGFyZSB1c2luZyBjbHVzdGVyIG9yIG11bHRpcGxlIHNlcnZlcnMgdXNlIHRoaXMgdG8gbWFrZSBlYWNoIGluc3RhbmNlXG4vLyBoYXMgYSB1bmlxdWUgdmFsdWUgZm9yIHdvcmtlclxuLy8gTm90ZTogSSBkb24ndCBrbm93IGlmIHRoaXMgaXMgYXV0b21hdGljYWxseSBzZXQgd2hlbiB1c2luZyB0aGlyZFxuLy8gcGFydHkgY2x1c3RlciBzb2x1dGlvbnMgc3VjaCBhcyBwbTIuXG52YXIgY2x1c3RlcldvcmtlcklkID0gcmVxdWlyZSgnLi91dGlsL2NsdXN0ZXItd29ya2VyLWlkJykgfHwgMDtcblxuLyoqXG4gKiBTZXQgdGhlIHNlZWQuXG4gKiBIaWdobHkgcmVjb21tZW5kZWQgaWYgeW91IGRvbid0IHdhbnQgcGVvcGxlIHRvIHRyeSB0byBmaWd1cmUgb3V0IHlvdXIgaWQgc2NoZW1hLlxuICogZXhwb3NlZCBhcyBzaG9ydGlkLnNlZWQoaW50KVxuICogQHBhcmFtIHNlZWQgSW50ZWdlciB2YWx1ZSB0byBzZWVkIHRoZSByYW5kb20gYWxwaGFiZXQuICBBTFdBWVMgVVNFIFRIRSBTQU1FIFNFRUQgb3IgeW91IG1pZ2h0IGdldCBvdmVybGFwcy5cbiAqL1xuZnVuY3Rpb24gc2VlZChzZWVkVmFsdWUpIHtcbiAgICBhbHBoYWJldC5zZWVkKHNlZWRWYWx1ZSk7XG4gICAgcmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vKipcbiAqIFNldCB0aGUgY2x1c3RlciB3b3JrZXIgb3IgbWFjaGluZSBpZFxuICogZXhwb3NlZCBhcyBzaG9ydGlkLndvcmtlcihpbnQpXG4gKiBAcGFyYW0gd29ya2VySWQgd29ya2VyIG11c3QgYmUgcG9zaXRpdmUgaW50ZWdlci4gIE51bWJlciBsZXNzIHRoYW4gMTYgaXMgcmVjb21tZW5kZWQuXG4gKiByZXR1cm5zIHNob3J0aWQgbW9kdWxlIHNvIGl0IGNhbiBiZSBjaGFpbmVkLlxuICovXG5mdW5jdGlvbiB3b3JrZXIod29ya2VySWQpIHtcbiAgICBjbHVzdGVyV29ya2VySWQgPSB3b3JrZXJJZDtcbiAgICByZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8qKlxuICpcbiAqIHNldHMgbmV3IGNoYXJhY3RlcnMgdG8gdXNlIGluIHRoZSBhbHBoYWJldFxuICogcmV0dXJucyB0aGUgc2h1ZmZsZWQgYWxwaGFiZXRcbiAqL1xuZnVuY3Rpb24gY2hhcmFjdGVycyhuZXdDaGFyYWN0ZXJzKSB7XG4gICAgaWYgKG5ld0NoYXJhY3RlcnMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBhbHBoYWJldC5jaGFyYWN0ZXJzKG5ld0NoYXJhY3RlcnMpO1xuICAgIH1cblxuICAgIHJldHVybiBhbHBoYWJldC5zaHVmZmxlZCgpO1xufVxuXG4vKipcbiAqIEdlbmVyYXRlIHVuaXF1ZSBpZFxuICogUmV0dXJucyBzdHJpbmcgaWRcbiAqL1xuZnVuY3Rpb24gZ2VuZXJhdGUoKSB7XG4gIHJldHVybiBidWlsZChjbHVzdGVyV29ya2VySWQpO1xufVxuXG4vLyBFeHBvcnQgYWxsIG90aGVyIGZ1bmN0aW9ucyBhcyBwcm9wZXJ0aWVzIG9mIHRoZSBnZW5lcmF0ZSBmdW5jdGlvblxubW9kdWxlLmV4cG9ydHMgPSBnZW5lcmF0ZTtcbm1vZHVsZS5leHBvcnRzLmdlbmVyYXRlID0gZ2VuZXJhdGU7XG5tb2R1bGUuZXhwb3J0cy5zZWVkID0gc2VlZDtcbm1vZHVsZS5leHBvcnRzLndvcmtlciA9IHdvcmtlcjtcbm1vZHVsZS5leHBvcnRzLmNoYXJhY3RlcnMgPSBjaGFyYWN0ZXJzO1xubW9kdWxlLmV4cG9ydHMuZGVjb2RlID0gZGVjb2RlO1xubW9kdWxlLmV4cG9ydHMuaXNWYWxpZCA9IGlzVmFsaWQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc2hvcnRpZC9saWIvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgcmFuZG9tRnJvbVNlZWQgPSByZXF1aXJlKCcuL3JhbmRvbS9yYW5kb20tZnJvbS1zZWVkJyk7XG5cbnZhciBPUklHSU5BTCA9ICcwMTIzNDU2Nzg5YWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXpBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWl8tJztcbnZhciBhbHBoYWJldDtcbnZhciBwcmV2aW91c1NlZWQ7XG5cbnZhciBzaHVmZmxlZDtcblxuZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgc2h1ZmZsZWQgPSBmYWxzZTtcbn1cblxuZnVuY3Rpb24gc2V0Q2hhcmFjdGVycyhfYWxwaGFiZXRfKSB7XG4gICAgaWYgKCFfYWxwaGFiZXRfKSB7XG4gICAgICAgIGlmIChhbHBoYWJldCAhPT0gT1JJR0lOQUwpIHtcbiAgICAgICAgICAgIGFscGhhYmV0ID0gT1JJR0lOQUw7XG4gICAgICAgICAgICByZXNldCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoX2FscGhhYmV0XyA9PT0gYWxwaGFiZXQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChfYWxwaGFiZXRfLmxlbmd0aCAhPT0gT1JJR0lOQUwubGVuZ3RoKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQ3VzdG9tIGFscGhhYmV0IGZvciBzaG9ydGlkIG11c3QgYmUgJyArIE9SSUdJTkFMLmxlbmd0aCArICcgdW5pcXVlIGNoYXJhY3RlcnMuIFlvdSBzdWJtaXR0ZWQgJyArIF9hbHBoYWJldF8ubGVuZ3RoICsgJyBjaGFyYWN0ZXJzOiAnICsgX2FscGhhYmV0Xyk7XG4gICAgfVxuXG4gICAgdmFyIHVuaXF1ZSA9IF9hbHBoYWJldF8uc3BsaXQoJycpLmZpbHRlcihmdW5jdGlvbihpdGVtLCBpbmQsIGFycil7XG4gICAgICAgcmV0dXJuIGluZCAhPT0gYXJyLmxhc3RJbmRleE9mKGl0ZW0pO1xuICAgIH0pO1xuXG4gICAgaWYgKHVuaXF1ZS5sZW5ndGgpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDdXN0b20gYWxwaGFiZXQgZm9yIHNob3J0aWQgbXVzdCBiZSAnICsgT1JJR0lOQUwubGVuZ3RoICsgJyB1bmlxdWUgY2hhcmFjdGVycy4gVGhlc2UgY2hhcmFjdGVycyB3ZXJlIG5vdCB1bmlxdWU6ICcgKyB1bmlxdWUuam9pbignLCAnKSk7XG4gICAgfVxuXG4gICAgYWxwaGFiZXQgPSBfYWxwaGFiZXRfO1xuICAgIHJlc2V0KCk7XG59XG5cbmZ1bmN0aW9uIGNoYXJhY3RlcnMoX2FscGhhYmV0Xykge1xuICAgIHNldENoYXJhY3RlcnMoX2FscGhhYmV0Xyk7XG4gICAgcmV0dXJuIGFscGhhYmV0O1xufVxuXG5mdW5jdGlvbiBzZXRTZWVkKHNlZWQpIHtcbiAgICByYW5kb21Gcm9tU2VlZC5zZWVkKHNlZWQpO1xuICAgIGlmIChwcmV2aW91c1NlZWQgIT09IHNlZWQpIHtcbiAgICAgICAgcmVzZXQoKTtcbiAgICAgICAgcHJldmlvdXNTZWVkID0gc2VlZDtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHNodWZmbGUoKSB7XG4gICAgaWYgKCFhbHBoYWJldCkge1xuICAgICAgICBzZXRDaGFyYWN0ZXJzKE9SSUdJTkFMKTtcbiAgICB9XG5cbiAgICB2YXIgc291cmNlQXJyYXkgPSBhbHBoYWJldC5zcGxpdCgnJyk7XG4gICAgdmFyIHRhcmdldEFycmF5ID0gW107XG4gICAgdmFyIHIgPSByYW5kb21Gcm9tU2VlZC5uZXh0VmFsdWUoKTtcbiAgICB2YXIgY2hhcmFjdGVySW5kZXg7XG5cbiAgICB3aGlsZSAoc291cmNlQXJyYXkubGVuZ3RoID4gMCkge1xuICAgICAgICByID0gcmFuZG9tRnJvbVNlZWQubmV4dFZhbHVlKCk7XG4gICAgICAgIGNoYXJhY3RlckluZGV4ID0gTWF0aC5mbG9vcihyICogc291cmNlQXJyYXkubGVuZ3RoKTtcbiAgICAgICAgdGFyZ2V0QXJyYXkucHVzaChzb3VyY2VBcnJheS5zcGxpY2UoY2hhcmFjdGVySW5kZXgsIDEpWzBdKTtcbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldEFycmF5LmpvaW4oJycpO1xufVxuXG5mdW5jdGlvbiBnZXRTaHVmZmxlZCgpIHtcbiAgICBpZiAoc2h1ZmZsZWQpIHtcbiAgICAgICAgcmV0dXJuIHNodWZmbGVkO1xuICAgIH1cbiAgICBzaHVmZmxlZCA9IHNodWZmbGUoKTtcbiAgICByZXR1cm4gc2h1ZmZsZWQ7XG59XG5cbi8qKlxuICogbG9va3VwIHNodWZmbGVkIGxldHRlclxuICogQHBhcmFtIGluZGV4XG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBsb29rdXAoaW5kZXgpIHtcbiAgICB2YXIgYWxwaGFiZXRTaHVmZmxlZCA9IGdldFNodWZmbGVkKCk7XG4gICAgcmV0dXJuIGFscGhhYmV0U2h1ZmZsZWRbaW5kZXhdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBjaGFyYWN0ZXJzOiBjaGFyYWN0ZXJzLFxuICAgIHNlZWQ6IHNldFNlZWQsXG4gICAgbG9va3VwOiBsb29rdXAsXG4gICAgc2h1ZmZsZWQ6IGdldFNodWZmbGVkXG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Nob3J0aWQvbGliL2FscGhhYmV0LmpzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuLy8gRm91bmQgdGhpcyBzZWVkLWJhc2VkIHJhbmRvbSBnZW5lcmF0b3Igc29tZXdoZXJlXG4vLyBCYXNlZCBvbiBUaGUgQ2VudHJhbCBSYW5kb21pemVyIDEuMyAoQykgMTk5NyBieSBQYXVsIEhvdWxlIChob3VsZUBtc2MuY29ybmVsbC5lZHUpXG5cbnZhciBzZWVkID0gMTtcblxuLyoqXG4gKiByZXR1cm4gYSByYW5kb20gbnVtYmVyIGJhc2VkIG9uIGEgc2VlZFxuICogQHBhcmFtIHNlZWRcbiAqIEByZXR1cm5zIHtudW1iZXJ9XG4gKi9cbmZ1bmN0aW9uIGdldE5leHRWYWx1ZSgpIHtcbiAgICBzZWVkID0gKHNlZWQgKiA5MzAxICsgNDkyOTcpICUgMjMzMjgwO1xuICAgIHJldHVybiBzZWVkLygyMzMyODAuMCk7XG59XG5cbmZ1bmN0aW9uIHNldFNlZWQoX3NlZWRfKSB7XG4gICAgc2VlZCA9IF9zZWVkXztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgbmV4dFZhbHVlOiBnZXROZXh0VmFsdWUsXG4gICAgc2VlZDogc2V0U2VlZFxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zaG9ydGlkL2xpYi9yYW5kb20vcmFuZG9tLWZyb20tc2VlZC5qc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbnZhciByYW5kb21CeXRlID0gcmVxdWlyZSgnLi9yYW5kb20vcmFuZG9tLWJ5dGUnKTtcblxuZnVuY3Rpb24gZW5jb2RlKGxvb2t1cCwgbnVtYmVyKSB7XG4gICAgdmFyIGxvb3BDb3VudGVyID0gMDtcbiAgICB2YXIgZG9uZTtcblxuICAgIHZhciBzdHIgPSAnJztcblxuICAgIHdoaWxlICghZG9uZSkge1xuICAgICAgICBzdHIgPSBzdHIgKyBsb29rdXAoICggKG51bWJlciA+PiAoNCAqIGxvb3BDb3VudGVyKSkgJiAweDBmICkgfCByYW5kb21CeXRlKCkgKTtcbiAgICAgICAgZG9uZSA9IG51bWJlciA8IChNYXRoLnBvdygxNiwgbG9vcENvdW50ZXIgKyAxICkgKTtcbiAgICAgICAgbG9vcENvdW50ZXIrKztcbiAgICB9XG4gICAgcmV0dXJuIHN0cjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBlbmNvZGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc2hvcnRpZC9saWIvZW5jb2RlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbnZhciBjcnlwdG8gPSB0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JyAmJiAod2luZG93LmNyeXB0byB8fCB3aW5kb3cubXNDcnlwdG8pOyAvLyBJRSAxMSB1c2VzIHdpbmRvdy5tc0NyeXB0b1xuXG5mdW5jdGlvbiByYW5kb21CeXRlKCkge1xuICAgIGlmICghY3J5cHRvIHx8ICFjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyNTYpICYgMHgzMDtcbiAgICB9XG4gICAgdmFyIGRlc3QgPSBuZXcgVWludDhBcnJheSgxKTtcbiAgICBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKGRlc3QpO1xuICAgIHJldHVybiBkZXN0WzBdICYgMHgzMDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSByYW5kb21CeXRlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Nob3J0aWQvbGliL3JhbmRvbS9yYW5kb20tYnl0ZS1icm93c2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG52YXIgYWxwaGFiZXQgPSByZXF1aXJlKCcuL2FscGhhYmV0Jyk7XG5cbi8qKlxuICogRGVjb2RlIHRoZSBpZCB0byBnZXQgdGhlIHZlcnNpb24gYW5kIHdvcmtlclxuICogTWFpbmx5IGZvciBkZWJ1Z2dpbmcgYW5kIHRlc3RpbmcuXG4gKiBAcGFyYW0gaWQgLSB0aGUgc2hvcnRpZC1nZW5lcmF0ZWQgaWQuXG4gKi9cbmZ1bmN0aW9uIGRlY29kZShpZCkge1xuICAgIHZhciBjaGFyYWN0ZXJzID0gYWxwaGFiZXQuc2h1ZmZsZWQoKTtcbiAgICByZXR1cm4ge1xuICAgICAgICB2ZXJzaW9uOiBjaGFyYWN0ZXJzLmluZGV4T2YoaWQuc3Vic3RyKDAsIDEpKSAmIDB4MGYsXG4gICAgICAgIHdvcmtlcjogY2hhcmFjdGVycy5pbmRleE9mKGlkLnN1YnN0cigxLCAxKSkgJiAweDBmXG4gICAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkZWNvZGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc2hvcnRpZC9saWIvZGVjb2RlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbnZhciBlbmNvZGUgPSByZXF1aXJlKCcuL2VuY29kZScpO1xudmFyIGFscGhhYmV0ID0gcmVxdWlyZSgnLi9hbHBoYWJldCcpO1xuXG4vLyBJZ25vcmUgYWxsIG1pbGxpc2Vjb25kcyBiZWZvcmUgYSBjZXJ0YWluIHRpbWUgdG8gcmVkdWNlIHRoZSBzaXplIG9mIHRoZSBkYXRlIGVudHJvcHkgd2l0aG91dCBzYWNyaWZpY2luZyB1bmlxdWVuZXNzLlxuLy8gVGhpcyBudW1iZXIgc2hvdWxkIGJlIHVwZGF0ZWQgZXZlcnkgeWVhciBvciBzbyB0byBrZWVwIHRoZSBnZW5lcmF0ZWQgaWQgc2hvcnQuXG4vLyBUbyByZWdlbmVyYXRlIGBuZXcgRGF0ZSgpIC0gMGAgYW5kIGJ1bXAgdGhlIHZlcnNpb24uIEFsd2F5cyBidW1wIHRoZSB2ZXJzaW9uIVxudmFyIFJFRFVDRV9USU1FID0gMTQ1OTcwNzYwNjUxODtcblxuLy8gZG9uJ3QgY2hhbmdlIHVubGVzcyB3ZSBjaGFuZ2UgdGhlIGFsZ29zIG9yIFJFRFVDRV9USU1FXG4vLyBtdXN0IGJlIGFuIGludGVnZXIgYW5kIGxlc3MgdGhhbiAxNlxudmFyIHZlcnNpb24gPSA2O1xuXG4vLyBDb3VudGVyIGlzIHVzZWQgd2hlbiBzaG9ydGlkIGlzIGNhbGxlZCBtdWx0aXBsZSB0aW1lcyBpbiBvbmUgc2Vjb25kLlxudmFyIGNvdW50ZXI7XG5cbi8vIFJlbWVtYmVyIHRoZSBsYXN0IHRpbWUgc2hvcnRpZCB3YXMgY2FsbGVkIGluIGNhc2UgY291bnRlciBpcyBuZWVkZWQuXG52YXIgcHJldmlvdXNTZWNvbmRzO1xuXG4vKipcbiAqIEdlbmVyYXRlIHVuaXF1ZSBpZFxuICogUmV0dXJucyBzdHJpbmcgaWRcbiAqL1xuZnVuY3Rpb24gYnVpbGQoY2x1c3RlcldvcmtlcklkKSB7XG5cbiAgICB2YXIgc3RyID0gJyc7XG5cbiAgICB2YXIgc2Vjb25kcyA9IE1hdGguZmxvb3IoKERhdGUubm93KCkgLSBSRURVQ0VfVElNRSkgKiAwLjAwMSk7XG5cbiAgICBpZiAoc2Vjb25kcyA9PT0gcHJldmlvdXNTZWNvbmRzKSB7XG4gICAgICAgIGNvdW50ZXIrKztcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb3VudGVyID0gMDtcbiAgICAgICAgcHJldmlvdXNTZWNvbmRzID0gc2Vjb25kcztcbiAgICB9XG5cbiAgICBzdHIgPSBzdHIgKyBlbmNvZGUoYWxwaGFiZXQubG9va3VwLCB2ZXJzaW9uKTtcbiAgICBzdHIgPSBzdHIgKyBlbmNvZGUoYWxwaGFiZXQubG9va3VwLCBjbHVzdGVyV29ya2VySWQpO1xuICAgIGlmIChjb3VudGVyID4gMCkge1xuICAgICAgICBzdHIgPSBzdHIgKyBlbmNvZGUoYWxwaGFiZXQubG9va3VwLCBjb3VudGVyKTtcbiAgICB9XG4gICAgc3RyID0gc3RyICsgZW5jb2RlKGFscGhhYmV0Lmxvb2t1cCwgc2Vjb25kcyk7XG5cbiAgICByZXR1cm4gc3RyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJ1aWxkO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Nob3J0aWQvbGliL2J1aWxkLmpzXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG52YXIgYWxwaGFiZXQgPSByZXF1aXJlKCcuL2FscGhhYmV0Jyk7XG5cbmZ1bmN0aW9uIGlzU2hvcnRJZChpZCkge1xuICAgIGlmICghaWQgfHwgdHlwZW9mIGlkICE9PSAnc3RyaW5nJyB8fCBpZC5sZW5ndGggPCA2ICkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIGNoYXJhY3RlcnMgPSBhbHBoYWJldC5jaGFyYWN0ZXJzKCk7XG4gICAgdmFyIGxlbiA9IGlkLmxlbmd0aDtcbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgbGVuO2krKykge1xuICAgICAgICBpZiAoY2hhcmFjdGVycy5pbmRleE9mKGlkW2ldKSA9PT0gLTEpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc1Nob3J0SWQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc2hvcnRpZC9saWIvaXMtdmFsaWQuanNcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSAwO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Nob3J0aWQvbGliL3V0aWwvY2x1c3Rlci13b3JrZXItaWQtYnJvd3Nlci5qc1xuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcbiAqIENvcHlyaWdodCAoYykgIDIwMTggV2lzZSBXaWxkIFdlYiAuXG4gKlxuICogIE1JVCBMaWNlbnNlXG4gKlxuICogIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqICBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiAgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqICBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqICBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqICBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcbiAqICBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqICBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiAgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiAgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiAgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiAgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcbiAqICBTT0ZUV0FSRS5cbiAqXG4gKiBAYXV0aG9yIDogTmF0aGFuYWVsIEJyYXVuXG4gKiBAY29udGFjdCA6IGNhaXBpbGFic0BnbWFpbC5jb21cbiAqL1xuXG52YXIgaXMgICAgICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vdXRpbHMvaXMnKSxcbiAgICBTY29wZSAgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9TY29wZScpLFxuICAgIHsga2V5V2Fsa25TZXQsIGtleVdhbGtuR2V0IH0gPSByZXF1aXJlKCcuL3V0aWxzL3V0aWxzJyksXG4gICAgRXZlbnRFbWl0dGVyICAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vdXRpbHMvRW1pdHRlcicpLFxuICAgIFRhc2tTZXF1ZW5jZXIgICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL3V0aWxzL1Rhc2tTZXF1ZW5jZXInKSxcbiAgICBzaG9ydGlkICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnc2hvcnRpZCcpLFxuICAgIG9ialByb3RvICAgICAgICAgICAgICAgICAgICAgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Yoe30pO1xuXG5jbGFzcyBTdG9yZSBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG5cdC8vc3RhdGljIHVzZSAgICAgICAgICAgICAgICAgID0gW107Ly8gb3ZlcnJpZGFibGUgbGlzdCBvZiBzb3VyY2Ugc3RvcmVzXG5cdHN0YXRpYyBmb2xsb3c7Ly8gb3ZlcnJpZGFibGUgbGlzdCBvZiBzdG9yZSB0aGF0IHdpbGwgYWxsb3cgcHVzaCBpZiB1cGRhdGVkXG5cdHN0YXRpYyByZXF1aXJlO1xuXHRzdGF0aWMgc3RhdGljU2NvcGUgICA9IG5ldyBTY29wZSh7fSwgeyBpZDogXCJzdGF0aWNcIiB9KTtcblx0c3RhdGljIHN0YXRlICAgICAgICAgPSB1bmRlZmluZWQ7Ly8gZGVmYXVsdCBzdGF0ZVxuXHQvKipcblx0ICogaWYgcmV0YWluIGdvZXMgdG8gMCA6XG5cdCAqIGZhbHNlIHRvIG5vdCBkZXN0cm95LFxuXHQgKiAwIHRvIHN5bmMgYXV0byBkZXN0cm95XG5cdCAqIE1zIHRvIGF1dG9kZXN0cm95IGFmdGVyIHRtIG1zIGlmIG5vIHJldGFpbiBoYXMgYmVlbiBjYWxsZWRcblx0ICogQHR5cGUge2Jvb2xlYW58SW50fVxuXHQgKi9cblx0c3RhdGljIHBlcnNpc3RlbmNlVG0gPSBmYWxzZTtcblx0XG5cdC8qKlxuXHQgKiBDb25zdHJ1Y3Rvciwgd2lsbCBidWlsZCBhIHJlc2NvcGUgc3RvcmVcblx0ICpcblx0ICogKHNjb3BlLCB7cmVxdWlyZSx1c2UsYXBwbHksc3RhdGUsIGRhdGF9KVxuXHQgKiAoc2NvcGUpXG5cdCAqXG5cdCAqIEBwYXJhbSBzY29wZSB7b2JqZWN0fSBzY29wZSB3aGVyZSB0byBmaW5kIHRoZSBvdGhlciBzdG9yZXMgKGRlZmF1bHQgOiBzdGF0aWNcblx0ICogICAgIHN0YXRpY1Njb3BlIClcblx0ICogQHBhcmFtIGtleXMge0FycmF5fSAocGFzc2VkIHRvIFN0b3JlOjptYXApIEV4IDogW1wic2Vzc2lvblwiLCBcIm90aGVyTmFtZWRTdG9yZTprZXlcIixcblx0ICogICAgIG90aGVyU3RvcmUuYXMoXCJvdGhlcktleVwiKV1cblx0ICovXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdFx0dmFyIGFyZ3ogICAgICAgICA9IFsuLi5hcmd1bWVudHNdLFxuXHRcdCAgICBfc3RhdGljICAgICAgPSB0aGlzLmNvbnN0cnVjdG9yLFxuXHRcdCAgICBzY29wZSAgICAgICAgPSBhcmd6WzBdIGluc3RhbmNlb2YgU2NvcGVcblx0XHQgICAgICAgICAgICAgICAgICAgPyBhcmd6LnNoaWZ0KClcblx0XHQgICAgICAgICAgICAgICAgICAgOiBfc3RhdGljLnNjb3BlID8gU2NvcGUuZ2V0U2NvcGUoX3N0YXRpYy5zY29wZSlcblx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogaXMuc3RyaW5nKGFyZ3pbMF0pXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gU2NvcGUuZ2V0U2NvcGUoYXJnei5zaGlmdCgpKVxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF9zdGF0aWMuc3RhdGljU2NvcGUsXG5cdFx0ICAgIGNmZyAgICAgICAgICA9IGFyZ3pbMF0gJiYgIWlzLmFycmF5KGFyZ3pbMF0pICYmICFpcy5zdHJpbmcoYXJnelswXSlcblx0XHQgICAgICAgICAgICAgICAgICAgPyBhcmd6LnNoaWZ0KClcblx0XHQgICAgICAgICAgICAgICAgICAgOiB7fSxcblx0XHQgICAgdGFza1F1ZXVlICAgID0gaXMuYXJyYXkoYXJnelswXSkgPyBhcmd6LnNoaWZ0KCkgOiBudWxsLFxuXHRcdCAgICBuYW1lICAgICAgICAgPSBjZmcubmFtZSB8fCBfc3RhdGljLm5hbWUsXG5cdFx0ICAgIHdhdGNocyAgICAgICA9IGNmZy51c2UgfHwgW10sXG5cdFx0ICAgIGFwcGx5ICAgICAgICA9IGNmZy5hcHBseSB8fCBudWxsLFxuXHRcdCAgICBpbml0aWFsU3RhdGUgPSBfc3RhdGljLnN0YXRlIHx8IF9zdGF0aWMuaW5pdGlhbFN0YXRlIHx8IF9zdGF0aWMuZGVmYXVsdFN0YXRlLFxuXHRcdCAgICBhcHBsaWVkO1xuXHRcdFxuXHRcdHRoaXMuX3VpZCA9IGNmZy5fdWlkIHx8IHNob3J0aWQuZ2VuZXJhdGUoKTtcblx0XHRcblx0XHR0aGlzLl9fcmV0YWlucyAgICA9IHsgYWxsOiAwIH07XG5cdFx0dGhpcy5fX2xvY2tzICAgICAgPSB7IGFsbDogMCB9O1xuXHRcdHRoaXMuX29uU3RhYmlsaXplID0gW107XG5cdFx0XG5cdFx0Ly8gYXV0b0Rlc3Ryb3lUbVxuXHRcdHRoaXMuX2F1dG9EZXN0cm95ICAgPSAhIXRoaXMuX3BlcnNpc3RlbmNlVG07XG5cdFx0dGhpcy5fcGVyc2lzdGVuY2VUbSA9IGNmZy5wZXJzaXN0ZW5jZVRtIHx8IF9zdGF0aWMucGVyc2lzdGVuY2VUbSB8fCAoY2ZnLmF1dG9EZXN0cm95IHx8IF9zdGF0aWMuYXV0b0Rlc3Ryb3kpICYmIDU7XG5cdFx0dGhpcy5fY2ZnICAgICAgICAgICA9IGNmZztcblx0XHRpZiAoIGNmZyAmJiBjZmcub24gKSB7XG5cdFx0XHR0aGlzLm9uKGNmZy5vbik7XG5cdFx0fVxuXHRcdFxuXHRcdHRoaXMubmFtZSA9IG5hbWU7XG5cdFx0XG5cdFx0aWYgKCBzY29wZS5zdG9yZXMgKSB7XG5cdFx0XHR0aGlzLnNjb3BlT2JqID0gc2NvcGU7XG5cdFx0XHR0aGlzLnNjb3BlICAgID0gc2NvcGUuc3RvcmVzO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdHRoaXMuc2NvcGVPYmogPSBuZXcgU2NvcGUoc2NvcGUpO1xuXHRcdFx0dGhpcy5zY29wZSAgICA9IHNjb3BlLnN0b3Jlcztcblx0XHR9XG5cdFx0XG5cdFx0Ly8gc3RhbmRhcmRpemVkIHNjb3BlIGFjY2Vzc1xuXHRcdHRoaXMuJHNjb3BlICAgID0gdGhpcy5zY29wZU9iajtcblx0XHR0aGlzLiRzdG9yZXMgICA9IHRoaXMuc2NvcGVPYmouc3RvcmVzO1xuXHRcdHRoaXMuJGFjdGlvbnMgID0gdGhpcy5zY29wZU9iai5hY3Rpb25zO1xuXHRcdHRoaXMuJGRpc3BhdGNoID0gdGhpcy5zY29wZU9iai5kaXNwYXRjaC5iaW5kKHRoaXMuc2NvcGVPYmopO1xuXHRcdFxuXHRcdHRoaXMuX3JldiAgICAgPSB0aGlzLmNvbnN0cnVjdG9yLl9yZXYgfHwgMDtcblx0XHR0aGlzLl9yZXZzICAgID0ge307XG5cdFx0dGhpcy5zdG9yZXMgICA9IHt9O1xuXHRcdHRoaXMuX3JlcXVpcmUgPSBbXTtcblx0XHR0aGlzLl9zb3VyY2VzID0gW25hbWVdO1xuXHRcdFxuXHRcdGlmICggaXMuYXJyYXkoX3N0YXRpYy51c2UpICkge1xuXHRcdFx0dGhpcy5fdXNlID0gWy4uLndhdGNocywgLi4uKF9zdGF0aWMudXNlIHx8IFtdKS5tYXAoXG5cdFx0XHRcdGtleSA9PiB7XG5cdFx0XHRcdFx0bGV0IHJlZiA9IGtleS5tYXRjaCgvXihcXCE/KShbXlxcOl0qKSg/OlxcOiguKikpPyQvKTtcblx0XHRcdFx0XHRpZiAoIHJlZlsxXSApIHtcblx0XHRcdFx0XHRcdGxldCByZWYyID0gcmVmWzJdLnNwbGl0KCcuJyk7XG5cdFx0XHRcdFx0XHR0aGlzLl9yZXF1aXJlLnB1c2gocmVmWzNdIHx8IHJlZjJbcmVmMi5sZW5ndGggLSAxXSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybiByZWZbMl07XG5cdFx0XHRcdH1cblx0XHRcdCldO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdHRoaXMuX3VzZSA9IFsuLi53YXRjaHMsIC4uLihcblx0XHRcdFx0X3N0YXRpYy51c2UgPyBPYmplY3Qua2V5cyhfc3RhdGljLnVzZSlcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAubWFwKFxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAga2V5ID0+IHtcblx0XHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgbGV0IHJlZiA9IGtleS5tYXRjaCgvXihcXCE/KSguKikkLyk7XG5cdFx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgIHJlZlsxXSAmJiB0aGlzLl9yZXF1aXJlLnB1c2goX3N0YXRpYy51c2Vba2V5XSk7XG5cdFx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgIHJldHVybiByZWZbMl0gKyAoKF9zdGF0aWMudXNlW2tleV0gPT09IHRydWUpXG5cdFx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAnJ1xuXHRcdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJzonICsgX3N0YXRpYy51c2Vba2V5XSk7XG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICB9XG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgKSA6IFtdXG5cdFx0XHQpXTtcblx0XHR9XG5cdFx0XG5cdFx0aWYgKCBfc3RhdGljLnJlcXVpcmUgKVxuXHRcdFx0dGhpcy5fcmVxdWlyZS5wdXNoKC4uLl9zdGF0aWMucmVxdWlyZSk7XG5cdFx0aWYgKCBjZmcucmVxdWlyZSApXG5cdFx0XHR0aGlzLl9yZXF1aXJlLnB1c2goLi4uY2ZnLnJlcXVpcmUpO1xuXHRcdFxuXHRcdHRoaXMuX2ZvbGxvd2VycyA9IFtdO1xuXHRcdHRoaXMuX2NoYW5nZXNTVyA9IGluaXRpYWxTdGF0ZSB8fCB7fTtcblx0XHR0aGlzLnN0YXRlICAgICAgPSBpbml0aWFsU3RhdGUgJiYge307XG5cdFx0aWYgKCBhcHBseSApXG5cdFx0XHR0aGlzLmFwcGx5ID0gYXBwbHk7XG5cdFx0XG5cdFx0LyoqXG5cdFx0ICogSW5pdGlhbCBzdGF0ZSBpc24ndCBmdWxseSBpbml0aWFsaXplZCAoIGNoaWxkcyBjb25zdHJ1Y3RvcnMgY2FuIHNldCBpdCApXG5cdFx0ICogU2NvcGUgYmFzZWQgaW5zdGFuY2UgaGF2ZSB0YXNrUXVldWUgdG8gZGVsYXkgaW5pdCBzeW5jaHJvbm91c2x5LCBpZiBub3Rcblx0XHQgKiBwcmVzZW50IHdlIHVzZSBzZXRUaW1lb3V0XG5cdFx0ICovXG5cdFx0aWYgKCB0YXNrUXVldWUgKSB7XG5cdFx0XHR0YXNrUXVldWUucHVzaCh0aGlzLl9hZnRlckNvbnN0cnVjdG9yLmJpbmQodGhpcykpXG5cdFx0fVxuXHRcdGVsc2Vcblx0XHRcdHNldFRpbWVvdXQodGhpcy5fYWZ0ZXJDb25zdHJ1Y3Rvci5iaW5kKHRoaXMpKVxuXHR9XG5cdFxuXHQvKipcblx0ICogR2V0IHRoZSBpbmNvbWluZyBzdGF0ZSAoIGZvciBpbW1lZGlhdGUgc3RhdGUgcmVsYXRpdmUgYWN0aW9ucyApXG5cdCAqIEByZXR1cm5zIHt7fXwqfVxuXHQgKi9cblx0Z2V0IG5leHRTdGF0ZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5fY2hhbmdlc1NXICYmIHsgLi4udGhpcy5zdGF0ZSwgLi4udGhpcy5fY2hhbmdlc1NXIH0gfHwgdGhpcy5zdGF0ZTtcblx0fVxuXHRcblx0X2FmdGVyQ29uc3RydWN0b3IoKSB7XG5cdFx0bGV0IGNmZyAgICAgICAgICA9IHRoaXMuX2NmZyxcblx0XHQgICAgX3N0YXRpYyAgICAgID0gdGhpcy5jb25zdHJ1Y3Rvcixcblx0XHQgICAgc25hcHNob3QgICAgID0gdGhpcy5yZXN0b3JlKHVuZGVmaW5lZCwgdHJ1ZSksXG5cdFx0ICAgIGluaXRpYWxTdGF0ZSA9IHRoaXMuc3RhdGUsXG5cdFx0ICAgIGluaXRpYWxEYXRhICA9IHRoaXMuZGF0YSxcblx0XHQgICAgYXBwbGllZDtcblx0XHR7XG5cdFx0XHRcblx0XHRcdGlmICggaW5pdGlhbERhdGEgKVxuXHRcdFx0XHR0aGlzLmRhdGEgPSBpbml0aWFsRGF0YTtcblx0XHRcdGVsc2UgaWYgKCBfc3RhdGljLmRhdGEgIT09IHVuZGVmaW5lZCApXG5cdFx0XHRcdHRoaXMuZGF0YSA9IHsgLi4uX3N0YXRpYy5kYXRhIH07XG5cdFx0XHRlbHNlIGlmICggY2ZnLmhhc093blByb3BlcnR5KFwiZGF0YVwiKSApXG5cdFx0XHRcdHRoaXMuZGF0YSA9IGNmZy5kYXRhO1xuXHRcdFx0XG5cdFx0XHRpZiAoIGNmZy5oYXNPd25Qcm9wZXJ0eShcInN0YXRlXCIpICYmIGNmZy5zdGF0ZSAhPT0gdW5kZWZpbmVkIClcblx0XHRcdFx0aW5pdGlhbFN0YXRlID0geyAuLi5pbml0aWFsU3RhdGUsIC4uLmNmZy5zdGF0ZSB9O1xuXHRcdFx0XG5cdFx0XHRpZiAoIHRoaXMuZGF0YSA9PT0gdW5kZWZpbmVkICkge1xuXHRcdFx0XHRpZiAoIGluaXRpYWxTdGF0ZSB8fCB0aGlzLl91c2UubGVuZ3RoICkgey8vIHN5bmMgYXBwbHlcblx0XHRcdFx0XHR0aGlzLl9jaGFuZ2VzU1cgPSB7XG5cdFx0XHRcdFx0XHQuLi50aGlzLl9jaGFuZ2VzU1csXG5cdFx0XHRcdFx0XHQuLi4oaW5pdGlhbFN0YXRlIHx8IHt9KSxcblx0XHRcdFx0XHRcdC4uLnRoaXMuJHNjb3BlLm1hcCh0aGlzLCB0aGlzLl91c2UpXG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0XHR0aGlzLnN0YXRlICAgICAgPSB7fTtcblx0XHRcdFx0XHRpZiAoIHRoaXMuc2hvdWxkQXBwbHkodGhpcy5fY2hhbmdlc1NXKSAmJiB0aGlzLmRhdGEgPT09IHVuZGVmaW5lZCApIHtcblx0XHRcdFx0XHRcdHRoaXMuZGF0YSAgICAgICA9IHRoaXMuYXBwbHkodGhpcy5kYXRhLCB0aGlzLl9jaGFuZ2VzU1csIHRoaXMuX2NoYW5nZXNTVyk7XG5cdFx0XHRcdFx0XHRhcHBsaWVkICAgICAgICAgPSB0cnVlO1xuXHRcdFx0XHRcdFx0dGhpcy5zdGF0ZSAgICAgID0gdGhpcy5fY2hhbmdlc1NXO1xuXHRcdFx0XHRcdFx0dGhpcy5fY2hhbmdlc1NXID0ge307XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0YXBwbGllZCAgICAgICAgID0gdHJ1ZTtcblx0XHRcdFx0dGhpcy5zdGF0ZSAgICAgID0gey8vIGFzc3VtZSB0aGlzIHN0YXRlIGlzIHN5bmMgd2l0aCBpbml0aWFsIGRhdGFcblx0XHRcdFx0XHQuLi50aGlzLl9jaGFuZ2VzU1csXG5cdFx0XHRcdFx0Li4uKGluaXRpYWxTdGF0ZSB8fCB7fSksXG5cdFx0XHRcdFx0Li4udGhpcy4kc2NvcGUubWFwKHRoaXMsIHRoaXMuX3VzZSlcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLl9jaGFuZ2VzU1cgPSB7fTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKCAodGhpcy5kYXRhICE9PSB1bmRlZmluZWQgfHwgYXBwbGllZCkgJiYgIXRoaXMuX19sb2Nrcy5hbGwgKSB7XG5cdFx0XHR0aGlzLl9zdGFibGUgPSB0cnVlO1xuXHRcdFx0dGhpcy5fcmV2Kys7XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0dGhpcy5fc3RhYmxlID0gZmFsc2U7XG5cdFx0XHRpZiAoICFfc3RhdGljLm1hbmFnZWQgJiYgIXRoaXMuc3RhdGUgJiYgKCF0aGlzLl91c2UgfHwgIXRoaXMuX3VzZS5sZW5ndGgpICkge1xuXHRcdFx0XHRjb25zb2xlLndhcm4oXCJSZVNjb3BlIHN0b3JlICdcIiwgdGhpcy5uYW1lLCBcIicgaGF2ZSBubyBpbml0aWFsIGRhdGEsIHN0YXRlIG9yIHVzZS4gSXQgY2FuJ3Qgc3RhYmlsaXplLi4uXCIpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHQhdGhpcy5fc3RhYmxlICYmIHRoaXMuZW1pdCgndW5zdGFibGUnLCB0aGlzLnN0YXRlKTtcblx0XHRcblx0fVxuXHRcblx0LyoqXG5cdCAqIE92ZXJyaWRhYmxlIG1ldGhvZCB0byBrbm93IGlmIGEgZGF0YSBjaGFuZ2Ugc2hvdWxkIGJlIHByb3BhZyB0byB0aGUgbGlzdGVuaW5nXG5cdCAqIHN0b3JlcyAmIGNvbXBvbmVudHNcblx0ICovXG5cdHNob3VsZFByb3BhZyggbkRhdGFzICkge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cdFxuXHRoYXNEYXRhQ2hhbmdlKCBuRGF0YXMgKSB7XG5cdFx0dmFyIF9zdGF0aWMgPSB0aGlzLmNvbnN0cnVjdG9yLCByLFxuXHRcdCAgICBjRGF0YXMgID0gdGhpcy5kYXRhO1xuXHRcdHIgICAgICAgICAgID0gIWNEYXRhcyAmJiBuRGF0YXMgfHwgY0RhdGFzICE9PSBuRGF0YXM7XG5cdFx0IXIgJiYgY0RhdGFzICYmIE9iamVjdC5rZXlzKGNEYXRhcykuZm9yRWFjaChcblx0XHRcdCgga2V5ICkgPT4ge1xuXHRcdFx0XHRyID0gciB8fCAobkRhdGFzXG5cdFx0XHRcdCAgICAgICAgICA/IGNEYXRhc1trZXldICE9PSBuRGF0YXNba2V5XVxuXHRcdFx0XHQgICAgICAgICAgOiBjRGF0YXMgJiYgY0RhdGFzW2tleV0pXG5cdFx0XHR9XG5cdFx0KTtcblx0XHQhciAmJiBuRGF0YXMgJiYgT2JqZWN0LmtleXMobkRhdGFzKS5mb3JFYWNoKFxuXHRcdFx0KCBrZXkgKSA9PiB7XG5cdFx0XHRcdHIgPSByIHx8IChuRGF0YXNcblx0XHRcdFx0ICAgICAgICAgID8gY0RhdGFzW2tleV0gIT09IG5EYXRhc1trZXldXG5cdFx0XHRcdCAgICAgICAgICA6IGNEYXRhcyAmJiBjRGF0YXNba2V5XSlcblx0XHRcdH1cblx0XHQpO1xuXHRcdHJldHVybiByO1xuXHR9XG5cdFxuXHQvKipcblx0ICogT3ZlcnJpZGFibGUgbWV0aG9kIHRvIGtub3cgaWYgYSBzdGF0ZSBjaGFuZ2Ugc2hvdWxkIGJlIGFwcGxpZWRcblx0ICovXG5cdHNob3VsZEFwcGx5KCBzdGF0ZSA9IHRoaXMuc3RhdGUgKSB7XG5cdFx0dmFyIF9zdGF0aWMgPSB0aGlzLmNvbnN0cnVjdG9yO1xuXHRcdFxuXHRcdHJldHVybiAoXG5cdFx0XHQhIXRoaXMuaXNDb21wbGV0ZShzdGF0ZSlcblx0XHQpICYmIChpcy5hcnJheShfc3RhdGljLmZvbGxvdylcblx0XHQgICAgICA/IF9zdGF0aWMuZm9sbG93XG5cdFx0ICAgICAgICAgICAgICAgLnJlZHVjZSgoIHIsIGkgKSA9PiAociB8fCBzdGF0ZSAmJiBzdGF0ZVtpXSksIGZhbHNlKVxuXHRcdCAgICAgIDogX3N0YXRpYy5mb2xsb3dcblx0XHQgICAgICAgID8gT2JqZWN0LmtleXMoX3N0YXRpYy5mb2xsb3cpXG5cdFx0ICAgICAgICAgICAgICAgIC5yZWR1Y2UoKCByLCBpICkgPT4gKFxuXHRcdFx0ICAgICAgICAgICAgICAgIHJcblx0XHRcdCAgICAgICAgICAgICAgICB8fCBzdGF0ZSAmJiBpcy5mbihfc3RhdGljLmZvbGxvd1tpXSkgJiYgX3N0YXRpYy5mb2xsb3dbaV0uY2FsbCh0aGlzLCBzdGF0ZVtpXSlcblx0XHRcdCAgICAgICAgICAgICAgICB8fCBfc3RhdGljLmZvbGxvd1tpXSAmJiBzdGF0ZVtpXSAhPT0gdGhpcy5zdGF0ZVtpXVxuXHRcdCAgICAgICAgICAgICAgICApLCBmYWxzZSkgOiB0cnVlXG5cdFx0KTtcblx0fVxuXHRcblx0LyoqXG5cdCAqIE92ZXJyaWRhYmxlIGFwcGxpZXIgLyByZW1hcHBlclxuXHQgKiBJZiBzdGF0ZSBvciBsYXN0UHVibGljU3RhdGUgYXJlIHNpbXBsZSBoYXNoIG1hcHMgYXBwbHkgd2lsbCByZXR1cm4gey4uLmRhdGEsXG5cdCAqIC4uLnN0YXRlfSBpZiBub3QgaXQgd2lsbCByZXR1cm4gdGhlIGxhc3QgcHJpdmF0ZSBzdGF0ZVxuXHQgKiBAcGFyYW0gZGF0YVxuXHQgKiBAcGFyYW0gc3RhdGVcblx0ICogQHJldHVybnMgeyp9XG5cdCAqL1xuXHRhcHBseSggZGF0YSwgc3RhdGUsIGNoYW5nZXMgKSB7XG5cdFx0c3RhdGUgPSBzdGF0ZSB8fCB0aGlzLnN0YXRlO1xuXHRcdFxuXHRcdGlmICggdGhpcy5yZWZpbmUgKVxuXHRcdFx0cmV0dXJuIHRoaXMucmVmaW5lKC4uLmFyZ3VtZW50cyk7XG5cdFx0XG5cdFx0aWYgKCAhZGF0YSB8fCBkYXRhLl9fcHJvdG9fXyAhPT0gb2JqUHJvdG8gfHwgc3RhdGUuX19wcm90b19fICE9PSBvYmpQcm90byApXG5cdFx0XHRyZXR1cm4gc3RhdGU7XG5cdFx0ZWxzZVxuXHRcdFx0cmV0dXJuIHsgLi4uZGF0YSwgLi4uc3RhdGUgfVxuXHR9XG5cdFxuXHQvKipcblx0ICogQGRlcHJlY2lhdGVkXG5cdCAqIEBwYXJhbSBkYXRhXG5cdCAqIEBwYXJhbSBzdGF0ZVxuXHQgKiBAcGFyYW0gY2hhbmdlc1xuXHQgKiBAcmV0dXJucyB7Kn1cblx0ICovXG5cdHJlZmluZSggZGF0YSwgc3RhdGUsIGNoYW5nZXMgKSB7XG5cdFx0c3RhdGUgPSBzdGF0ZSB8fCB0aGlzLnN0YXRlO1xuXHRcdFxuXHRcdGlmICggIWRhdGEgfHwgZGF0YS5fX3Byb3RvX18gIT09IG9ialByb3RvIHx8IHN0YXRlLl9fcHJvdG9fXyAhPT0gb2JqUHJvdG8gKVxuXHRcdFx0cmV0dXJuIHN0YXRlO1xuXHRcdGVsc2Vcblx0XHRcdHJldHVybiB7IC4uLmRhdGEsIC4uLnN0YXRlIH1cblx0fVxuXHRcblx0LyoqXG5cdCAqIERlYm91bmNlIHRoaXMgc3RvcmUgcHJvcGFnYXRpb24gKCAmIHJlZHVjaW5nIClcblx0ICogQHBhcmFtIGNiXG5cdCAqL1xuXHRzdGFiaWxpemUoIGNiICkge1xuXHRcdGNiICYmIHRoaXMub25jZSgnc3RhYmxlJywgY2IpO1xuXHRcdHRoaXMuX3N0YWJsZSAmJiB0aGlzLmVtaXQoJ3Vuc3RhYmxlJywgdGhpcy5zdGF0ZSwgdGhpcy5kYXRhKTtcblx0XHRcblx0XHR0aGlzLl9zdGFibGUgPSBmYWxzZTtcblx0XHRcblx0XHRpZiAoIHRoaXMuX3N0YWJpbGl6ZXIgKVxuXHRcdFx0cmV0dXJuO1xuXHRcdFxuXHRcdHRoaXMuX3N0YWJpbGl6ZXIgPSBUYXNrU2VxdWVuY2VyLnB1c2hUYXNrKHRoaXMsICdwdXNoU3RhdGUnKTtcblx0fVxuXHRcblx0cmV0cmlldmUoIHBhdGgsIGkgPSAwLCBvYmogPSB0aGlzLmRhdGEgKSB7XG5cdFx0cGF0aCA9IGlzLnN0cmluZyhwYXRoKSA/IHBhdGguc3BsaXQoJy4nKSA6IHBhdGg7XG5cdFx0cmV0dXJuICFvYmogfHwgIXBhdGggfHwgIXBhdGgubGVuZ3RoXG5cdFx0ICAgICAgID8gb2JqXG5cdFx0ICAgICAgIDogcGF0aC5sZW5ndGggPT0gaSArIDFcblx0XHQgICAgICAgICA/IG9ialtwYXRoW2ldXVxuXHRcdCAgICAgICAgIDogdGhpcy5yZXRyaWV2ZShwYXRoLCBpICsgMSwgb2JqW3BhdGhbaV1dKTtcblx0fVxuXHRcblx0ZGlzcGF0Y2goIGFjdGlvbiwgLi4uYXJneiApIHtcblx0XHR0aGlzLnNjb3BlT2JqLmRpc3BhdGNoKGFjdGlvbiwgLi4uYXJneik7XG5cdH1cblx0XG5cdHRyaWdnZXIoIGFjdGlvbiwgLi4uYXJneiApIHtcblx0XHRsZXQgeyBhY3Rpb25zIH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXHRcdGlmICggYWN0aW9ucyAmJiBhY3Rpb25zW2FjdGlvbl0gKSB7XG5cdFx0XHRsZXQgbnMgPSBhY3Rpb25zW2FjdGlvbl0uY2FsbCh0aGlzLCAuLi5hcmd6KTtcblx0XHRcdG5zICYmIHRoaXMuc2V0U3RhdGUobnMpO1xuXHRcdH1cblx0fVxuXHRcblx0LyoqXG5cdCAqIFB1bGwgc3RvcmVzIGluIHRoZSBwcml2YXRlIHN0YXRlXG5cdCAqIEBwYXJhbSBzdG9yZXMgIHtBcnJheX0gKHBhc3NlZCB0byBTdG9yZTo6bWFwKSBFeCA6IFtcInNlc3Npb25cIixcblx0ICogICAgIFwib3RoZXJOYW1lZFN0b3JlOmtleVwiLCBvdGhlclN0b3JlLmFzKFwib3RoZXJLZXlcIildXG5cdCAqL1xuXHRwdWxsKCBzdG9yZXMsIGRvV2FpdCwgb3JpZ2luICkge1xuXHRcdGxldCBpbml0aWFsT3V0cHV0cyA9IHRoaXMuc2NvcGVPYmoubWFwKHRoaXMsIHN0b3Jlcyk7XG5cdFx0aWYgKCBkb1dhaXQgKSB7XG5cdFx0XHR0aGlzLndhaXQoKTtcblx0XHRcdHN0b3Jlcy5mb3JFYWNoKCggcyApID0+IHRoaXMuc2NvcGVbc10gJiYgdGhpcy53YWl0KHRoaXMuc2NvcGVbc10pKTtcblx0XHRcdHRoaXMucmVsZWFzZSgpO1xuXHRcdH1cblx0XHRyZXR1cm4gaW5pdGlhbE91dHB1dHM7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBTZXQgJiBQdXNoIHRoZSByZXN1bHQgZGF0YSB0byBmb2xsb3dlcnMgaWYgc3RhYmxlXG5cdCAqIEBwYXJhbSBjYlxuXHQgKi9cblx0cHVzaCggZGF0YSwgZm9yY2UsIGNiICkge1xuXHRcdGNiICAgID0gZm9yY2UgPT09IHRydWUgPyBjYiA6IGZvcmNlO1xuXHRcdGZvcmNlID0gZm9yY2UgPT09IHRydWU7XG5cdFx0aWYgKCAhZm9yY2UgJiZcblx0XHRcdChcblx0XHRcdFx0IXRoaXMuaGFzRGF0YUNoYW5nZShkYXRhKVxuXHRcdFx0KVxuXHRcdCkge1xuXHRcdFx0Y2IgJiYgY2IoKTtcblx0XHRcdGlmICggIXRoaXMuX19sb2Nrcy5hbGwgKSB7XG5cdFx0XHRcdGxldCBzdGFibGUgICA9IHRoaXMuX3N0YWJsZTtcblx0XHRcdFx0dGhpcy5fc3RhYmxlID0gdHJ1ZTtcblx0XHRcdFx0IXN0YWJsZSAmJiB0aGlzLmVtaXQoJ3N0YWJsZScsIHRoaXMuc3RhdGUsIHRoaXMuZGF0YSk7XG5cdFx0XHRcdHRoaXMuX3N0YWJpbGl6ZXIgPSBudWxsO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRcblx0XHR0aGlzLmRhdGEgPSBkYXRhO1xuXHRcdHRoaXMud2FpdCgpO1xuXHRcdHRoaXMucmVsZWFzZShjYik7XG5cdFx0XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBDYWxsIHRoZSBhcHBseSBmbiB1c2luZyB0aGUgY3VycmVudCBhY2N1bXVsYXRlZCBzdGF0ZSB1cGRhdGUgdGhlbiwgcHVzaCB0aGVcblx0ICogcmVzdWx0aW5nIGRhdGEgaWYgc3RhYmxlXG5cdCAqIEBwYXJhbSBmb3JjZVxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cblx0ICovXG5cdHB1c2hTdGF0ZSggZm9yY2UgKSB7XG5cdFx0XG5cdFx0aWYgKCAhZm9yY2UgJiYgIXRoaXMuX2NoYW5nZXNTVyAmJiB0aGlzLmRhdGEgKVxuXHRcdFx0cmV0dXJuO1xuXHRcdFxuXHRcdHZhciBuZXh0U3RhdGUgPSB0aGlzLl9uZXh0U3RhdGUgfHwgeyAuLi50aGlzLnN0YXRlLCAuLi4odGhpcy5fY2hhbmdlc1NXIHx8IHt9KSB9LFxuXHRcdCAgICBuZXh0RGF0YSAgPSB0aGlzLmFwcGx5KHRoaXMuZGF0YSwgbmV4dFN0YXRlLCB0aGlzLl9jaGFuZ2VzU1cpO1xuXHRcdFxuXHRcdHRoaXMuX3N0YWJpbGl6ZXIgPSBudWxsO1xuXHRcdHRoaXMuc3RhdGUgICAgICAgPSBuZXh0U3RhdGU7XG5cdFx0dGhpcy5fY2hhbmdlc1NXICA9IG51bGw7XG5cdFx0XG5cdFx0aWYgKCAhZm9yY2UgJiZcblx0XHRcdChcblx0XHRcdFx0IXRoaXMuaGFzRGF0YUNoYW5nZShuZXh0RGF0YSlcblx0XHRcdClcblx0XHQpIHtcblx0XHRcdGlmICggIXRoaXMuX19sb2Nrcy5hbGwgKSB7XG5cdFx0XHRcdGxldCBzdGFibGUgICA9IHRoaXMuX3N0YWJsZTtcblx0XHRcdFx0dGhpcy5fc3RhYmxlID0gdHJ1ZTtcblx0XHRcdFx0IXN0YWJsZSAmJiB0aGlzLmVtaXQoJ3N0YWJsZScsIHRoaXMuc3RhdGUsIHRoaXMuZGF0YSk7XG5cdFx0XHRcdHRoaXMuX3N0YWJpbGl6ZXIgPSBudWxsO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRcblx0XHR0aGlzLmRhdGEgPSBuZXh0RGF0YTtcblx0XHR0aGlzLndhaXQoKTtcblx0XHR0aGlzLnJlbGVhc2UoKTtcblx0XHRcblx0fVxuXHRcblx0LyoqXG5cdCAqIEFkZCAncFN0YXRlJyB0byB0aGUgY3VycmVudCBhY2N1bXVsYXRlZCBzdGF0ZSB1cGRhdGVzXG5cdCAqICYgd2FpdCBzb3VyY2Ugc3RvcmVzIHN0YWJpbGl6YXRpb24gYmVmb3JlIHB1c2hpbmcgdGhlc2Ugc3RhdGUgdXBkYXRlc1xuXHQgKiBAcGFyYW0gcFN0YXRlXG5cdCAqIEBwYXJhbSBjYlxuXHQgKi9cblx0c2V0U3RhdGUoIHBTdGF0ZSwgY2IsIHN5bmMgKSB7XG5cdFx0dmFyIGkgICAgICAgPSAwLCBjaGFuZ2UsXG5cdFx0ICAgIGNoYW5nZXMgPSB0aGlzLl9jaGFuZ2VzU1cgPSB0aGlzLl9jaGFuZ2VzU1cgfHwge307XG5cdFx0Zm9yICggdmFyIGsgaW4gcFN0YXRlIClcblx0XHRcdGlmICggIXRoaXMuc3RhdGVcblx0XHRcdFx0fHwgY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eShrKS8vIHRvZG9cblx0XHRcdFx0JiYgKFxuXHRcdFx0XHRcdHBTdGF0ZVtrXSAhPT0gY2hhbmdlc1trXVxuXHRcdFx0XHQpIHx8IHBTdGF0ZS5oYXNPd25Qcm9wZXJ0eShrKVxuXHRcdFx0XHQmJiAoXG5cdFx0XHRcdFx0cFN0YXRlW2tdICE9PSB0aGlzLnN0YXRlW2tdXG5cdFx0XHRcdFx0fHxcblx0XHRcdFx0XHQodGhpcy5zdGF0ZVtrXSAmJiBwU3RhdGVba10gJiYgKHBTdGF0ZVtrXS5fcmV2ICE9IHRoaXMuX3JldnNba10pKS8vIHJldi9oYXNoIHVwZGF0ZVxuXHRcdFx0XHQpICkge1xuXHRcdFx0XHRjaGFuZ2UgICAgICAgID0gdHJ1ZTtcblx0XHRcdFx0dGhpcy5fcmV2c1trXSA9IHBTdGF0ZVtrXSAmJiBwU3RhdGVba10uX3JldiB8fCB0cnVlO1xuXHRcdFx0XHRjaGFuZ2VzW2tdICAgID0gcFN0YXRlW2tdO1xuXHRcdFx0fVxuXHRcdFxuXHRcdHRoaXMuX25leHRTdGF0ZSA9IHsgLi4udGhpcy5zdGF0ZSwgLi4uY2hhbmdlcyB9O1xuXHRcdGlmICggIXRoaXMuc2hvdWxkQXBwbHkodGhpcy5fbmV4dFN0YXRlKSApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0XG5cdFx0aWYgKCBzeW5jICkge1xuXHRcdFx0dGhpcy5wdXNoU3RhdGUoKTtcblx0XHRcdGNiICYmIGNiKCk7XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0aWYgKCBjaGFuZ2UgKSB7XG5cdFx0XHRcdHRoaXMuc3RhYmlsaXplKGNiKTtcblx0XHRcdH1cblx0XHRcdGVsc2UgY2IgJiYgY2IoKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBVcGRhdGUgdGhlIGN1cnJlbnQgc3RhdGUgJiBwdXNoIGl0XG5cdCAqIEBwYXJhbSBwU3RhdGVcblx0ICogQHBhcmFtIGNiXG5cdCAqL1xuXHRzZXRTdGF0ZVN5bmMoIHBTdGF0ZSApIHtcblx0XHR2YXIgaSAgICAgICA9IDAsIGNoYW5nZSxcblx0XHQgICAgY2hhbmdlcyA9IHRoaXMuX2NoYW5nZXNTVyA9IHRoaXMuX2NoYW5nZXNTVyB8fCB7fTtcblx0XHRmb3IgKCB2YXIgayBpbiBwU3RhdGUgKVxuXHRcdFx0aWYgKCAhdGhpcy5zdGF0ZSB8fCBwU3RhdGUuaGFzT3duUHJvcGVydHkoaylcblx0XHRcdFx0JiYgKFxuXHRcdFx0XHRcdHBTdGF0ZVtrXSAhPSB0aGlzLnN0YXRlW2tdXG5cdFx0XHRcdFx0fHxcblx0XHRcdFx0XHQodGhpcy5zdGF0ZVtrXSAmJiBwU3RhdGVba10gJiYgKHBTdGF0ZVtrXS5fcmV2ICE9IHRoaXMuX3JldnNba10pKS8vIHJldi9oYXNoIHVwZGF0ZVxuXHRcdFx0XHQpICkge1xuXHRcdFx0XHRjaGFuZ2UgICAgICAgID0gdHJ1ZTtcblx0XHRcdFx0dGhpcy5fcmV2c1trXSA9IHBTdGF0ZVtrXSAmJiBwU3RhdGVba10uX3JldiB8fCB0cnVlO1xuXHRcdFx0XHRjaGFuZ2VzW2tdICAgID0gcFN0YXRlW2tdO1xuXHRcdFx0fVxuXHRcdHRoaXMuc2hvdWxkQXBwbHkoeyAuLi4odGhpcy5zdGF0ZSB8fCB7fSksIC4uLmNoYW5nZXMgfSkgJiYgdGhpcy5wdXNoU3RhdGUoKTtcblx0XHRyZXR1cm4gdGhpcy5kYXRhO1xuXHR9XG5cdFxuXHQvKipcblx0ICogZ2V0IGEgc3RvcmUta2V5IHBhaXIgZm9yIFN0b3JlOjptYXBcblx0ICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcblx0ICogQHJldHVybnMge3tzdG9yZTogU3RvcmUsIG5hbWU6ICp9fVxuXHQgKi9cblx0YXMoIG5hbWUgKSB7XG5cdFx0cmV0dXJuIHsgc3RvcmU6IHRoaXMsIG5hbWUgfTtcblx0fVxuXHRcblx0b24oIGxpc3RzICkge1xuXHRcdGlmICggIWlzLnN0cmluZyhsaXN0cykgJiYgbGlzdHMgKVxuXHRcdFx0T2JqZWN0LmtleXMobGlzdHMpLmZvckVhY2goayA9PiBzdXBlci5vbihrLCBsaXN0c1trXSkpO1xuXHRcdGVsc2Ugc3VwZXIub24oLi4uYXJndW1lbnRzKTtcblx0fVxuXHRcblx0cmVtb3ZlTGlzdGVuZXIoIGxpc3RzICkge1xuXHRcdGlmICggIWlzLnN0cmluZyhsaXN0cykgJiYgbGlzdHMgKVxuXHRcdFx0T2JqZWN0LmtleXMobGlzdHMpLmZvckVhY2goayA9PiBzdXBlci5yZW1vdmVMaXN0ZW5lcihrLCBsaXN0c1trXSkpO1xuXHRcdGVsc2Ugc3VwZXIucmVtb3ZlTGlzdGVuZXIoLi4uYXJndW1lbnRzKTtcblx0fVxuXHRcblx0LyoqXG5cdCAqIGlzIGNvbXBsZXRlIChhbGwgcmVxdWllcmVkIGtleXMgYXJlIGhlcmUpXG5cdCAqIEByZXR1cm5zIGJvb2xcblx0ICovXG5cdGlzQ29tcGxldGUoIHN0YXRlID0gdGhpcy5zdGF0ZSApIHtcblx0XHR2YXIgX3N0YXRpYyA9IHRoaXMuY29uc3RydWN0b3I7XG5cdFx0cmV0dXJuIChcblx0XHRcdCF0aGlzLl9yZXF1aXJlXG5cdFx0XHR8fCAhdGhpcy5fcmVxdWlyZS5sZW5ndGhcblx0XHRcdHx8IHN0YXRlICYmIHRoaXMuX3JlcXVpcmUucmVkdWNlKFxuXHRcdFx0XHQoIHIsIGtleSApID0+IChyICYmIHN0YXRlW2tleV0pLFxuXHRcdFx0XHR0cnVlXG5cdFx0XHQpXG5cdFx0KTtcblx0fVxuXHRcblx0LyoqXG5cdCAqIGlzIHN0YWJsZVxuXHQgKiBAcmV0dXJucyBib29sXG5cdCAqL1xuXHRpc1N0YWJsZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5fc3RhYmxlO1xuXHR9XG5cdFxuXHQvKipcblx0ICogU2VyaWFsaXplIHN0YXRlICYgZGF0YSB3aXRoIHNvdXJjZXMgcmVmc1xuXHQgKiBAcmV0dXJucyBib29sXG5cdCAqL1xuXHRzZXJpYWxpemUoIGNmZyA9IHt9LCBvdXRwdXQgPSB7fSApIHtcblx0XHRsZXQgc0lkICA9IGNmZy5wYXJlbnRBbGlhcyB8fCB0aGlzLnNjb3BlT2JqLl9pZCxcblx0XHQgICAgcmVmcyA9XG5cdFx0XHQgICAgIWNmZy5ub3JlZnMgJiYgaXMuYXJyYXkodGhpcy5fdXNlKSAmJiB0aGlzLl91c2UucmVkdWNlKFxuXHRcdFx0ICAgICggbWFwLCBrZXkgKSA9PiB7Ly90b2RvXG5cdFx0XHRcdCAgICBsZXQgbmFtZSxcblx0XHRcdFx0ICAgICAgICBhbGlhcywgcGF0aCwgX2tleSxcblx0XHRcdFx0ICAgICAgICBzdG9yZTtcblx0XHRcdFx0ICAgIGlmICgga2V5LnN0b3JlICYmIGtleS5uYW1lICkge1xuXHRcdFx0XHRcdCAgICBhbGlhcyA9IG5hbWUgPSBrZXkubmFtZTtcblx0XHRcdFx0XHQgICAgc3RvcmUgPSBrZXkuc3RvcmU7XG5cdFx0XHRcdCAgICB9XG5cdFx0XHRcdCAgICBlbHNlIGlmICggaXMuZm4oa2V5KSApIHtcblx0XHRcdFx0XHQgICAgbmFtZSAgPSBhbGlhcyA9IGtleS5uYW1lIHx8IGtleS5kZWZhdWx0TmFtZTtcblx0XHRcdFx0XHQgICAgc3RvcmUgPSBrZXk7XG5cdFx0XHRcdCAgICB9XG5cdFx0XHRcdCAgICBlbHNlIHtcblx0XHRcdFx0XHQgICAgX2tleSAgPSBrZXkubWF0Y2goLyhbXlxcLlxcOl0rKSgoPzpcXC5bXlxcLlxcOl0rKSopKD86XFw6KFteXFwuXFw6XSspKT8vKTtcblx0XHRcdFx0XHQgICAgbmFtZSAgPSBfa2V5WzFdO1xuXHRcdFx0XHRcdCAgICBwYXRoICA9IF9rZXlbMl0gJiYgX2tleVsyXS5zdWJzdHIoMSk7XG5cdFx0XHRcdFx0ICAgIHN0b3JlID0gdGhpcy5zY29wZU9iai5zdG9yZXNbX2tleVsxXV07XG5cdFx0XHRcdFx0ICAgIGFsaWFzID0gX2tleVszXSB8fCBwYXRoICYmIHBhdGgubWF0Y2goLyhbXlxcLl0qKSQvKVswXSB8fCBfa2V5WzFdO1xuXHRcdFx0XHQgICAgfVxuXHRcdFx0XHQgICAgaWYgKCBzdG9yZSAmJiBpcy5yc1N0b3JlKHN0b3JlKSAmJiAhc3RvcmUuc2NvcGVPYmouXy5pc0xvY2FsSWQgKVxuXHRcdFx0XHRcdCAgICBtYXBbYWxpYXNdID0gc3RvcmUuc2NvcGVPYmouX2lkICsgJy8nICsgbmFtZTtcblx0XHRcdFx0XG5cdFx0XHRcdCAgICByZXR1cm4gbWFwO1xuXHRcdFx0ICAgIH0sIHt9XG5cdFx0XHQgICAgKSB8fCB7fTtcblx0XHRcblx0XHRrZXlXYWxrblNldChcblx0XHRcdG91dHB1dCxcblx0XHRcdChzSWQgKyAnLycgKyB0aGlzLm5hbWUpLFxuXHRcdFx0e1xuXHRcdFx0XHRzdGF0ZTogdGhpcy5zdGF0ZSAmJlxuXHRcdFx0XHRcdChcblx0XHRcdFx0XHRcdGNmZy5ub3JlZnNcblx0XHRcdFx0XHRcdD8geyAuLi50aGlzLnN0YXRlIH1cblx0XHRcdFx0XHRcdDogT2JqZWN0LmtleXModGhpcy5zdGF0ZSkucmVkdWNlKCggaCwgayApID0+ICghcmVmc1trXSAmJiAoaFtrXSA9IHRoaXMuc3RhdGVba10pLCBoKSwge30pXG5cdFx0XHRcdFx0KSxcblx0XHRcdFx0ZGF0YSA6IChcblx0XHRcdFx0XHRcdHRoaXMuZGF0YSAmJlxuXHRcdFx0XHRcdFx0dGhpcy5kYXRhLl9fcHJvdG9fXyA9PT0gb2JqUHJvdG8gP1xuXHRcdFx0XHRcdFx0dGhpcy5kYXRhIDpcblx0XHRcdFx0XHRcdChpcy5ib29sKHRoaXMuZGF0YSlcblx0XHRcdFx0XHRcdFx0fHwgaXMubnVtYmVyKHRoaXMuZGF0YSlcblx0XHRcdFx0XHRcdFx0fHwgaXMuc3RyaW5nKHRoaXMuZGF0YSkpICYmIHRoaXMuZGF0YVxuXHRcdFx0XHRcdClcblx0XHRcdFx0XHR8fCB1bmRlZmluZWRcblx0XHRcdFx0XG5cdFx0XHRcdCxcblx0XHRcdFx0cmVmc1xuXHRcdFx0fVxuXHRcdCk7XG5cdFx0cmV0dXJuIG91dHB1dDtcblx0fVxuXHRcblx0LyoqXG5cdCAqIHJlc3RvcmUgc3RhdGUgJiBkYXRhXG5cdCAqIEByZXR1cm5zIGJvb2xcblx0ICovXG5cdHJlc3RvcmUoIHNuYXBzaG90LCBpbW1lZGlhdGUgKSB7XG5cdFx0c25hcHNob3QgPSBzbmFwc2hvdFxuXHRcdFx0JiYga2V5V2Fsa25HZXQoc25hcHNob3QsIHRoaXMuc2NvcGVPYmouX2lkICsgJy8nICsgdGhpcy5uYW1lKVxuXHRcdFx0fHwgdGhpcy4kc2NvcGUudGFrZVNuYXBzaG90QnlLZXkodGhpcy5zY29wZU9iai5faWQgKyAnLycgKyB0aGlzLm5hbWUpO1xuXHRcdFxuXHRcdGlmICggIXNuYXBzaG90IClcblx0XHRcdHJldHVybjtcblx0XHRcblx0XHRpZiAoIHNuYXBzaG90ICkge1xuXHRcdFx0aWYgKCAhdGhpcy5pc1N0YWJsZSgpICYmICFpbW1lZGlhdGUgKVxuXHRcdFx0XHR0aGlzLnRoZW4oKCkgPT4gcmVzdG9yZShzbmFwc2hvdCkpXG5cdFx0XHRsZXQgc25hcDtcblx0XHRcdHRoaXMuc3RhdGUgPSB7IC4uLnNuYXBzaG90LnN0YXRlIH07XG5cdFx0XHRPYmplY3Qua2V5cyhzbmFwc2hvdC5yZWZzKS5mb3JFYWNoKFxuXHRcdFx0XHQoIGtleSApID0+IHsvL3RvZG9cblx0XHRcdFx0XHRpZiAoIHNuYXAgPSB0aGlzLiRzY29wZS5nZXRTbmFwc2hvdEJ5S2V5KHNuYXBzaG90LnJlZnNba2V5XSkgKVxuXHRcdFx0XHRcdFx0dGhpcy5zdGF0ZVtrZXldID0gc25hcC5kYXRhO1xuXHRcdFx0XHRcdC8vZWxzZVxuXHRcdFx0XHRcdC8vICAgIGNvbnNvbGUud2Fybignbm90IGZvdW5kIDogJywga2V5LCBzbmFwICYmIHNuYXAucmVmc1sga2V5IF0pXG5cdFx0XHRcdH1cblx0XHRcdClcblx0XHRcdFxuXHRcdFx0dGhpcy5kYXRhID0gc25hcHNob3QuZGF0YTtcblx0XHRcdFxuXHRcdH1cblx0fVxuXHRcblx0LyoqXG5cdCAqIFVuIGJpbmQgdGhpcyBzdG9yZSBvZmYgdGhlIGdpdmVuIGNvbXBvbmVudC1rZXlcblx0ICogQHBhcmFtIG9ialxuXHQgKiBAcGFyYW0ga2V5XG5cdCAqIEByZXR1cm5zIHtBcnJheS48Kj59XG5cdCAqL1xuXHR1bkJpbmQoIG9iaiwga2V5LCBwYXRoICkge1xuXHRcdHZhciBmb2xsb3dlcnMgPSB0aGlzLl9mb2xsb3dlcnMsXG5cdFx0ICAgIGkgICAgICAgICA9IGZvbGxvd2VycyAmJiBmb2xsb3dlcnMubGVuZ3RoO1xuXHRcdHdoaWxlICggZm9sbG93ZXJzICYmIGktLSApXG5cdFx0XHRpZiAoIGZvbGxvd2Vyc1tpXVswXSA9PT0gb2JqICYmIGZvbGxvd2Vyc1tpXVsxXSA9PT0ga2V5ICYmIGZvbGxvd2Vyc1tpXVsyXSA9PT0gcGF0aCApXG5cdFx0XHRcdHJldHVybiBmb2xsb3dlcnMuc3BsaWNlKGksIDEpO1xuXHR9XG5cdFxuXHQvKipcblx0ICogQmluZCB0aGlzIHN0b3JlIGNoYW5nZXMgdG8gdGhlIGdpdmVuIGNvbXBvbmVudC1rZXlcblx0ICogQHBhcmFtIG9iaiB7UmVhY3QuQ29tcG9uZW50fFN0b3JlfGZ1bmN0aW9uKVxuXHQgKiBAcGFyYW0ga2V5IHtzdHJpbmd9IG9wdGlvbmFsIGtleSB3aGVyZSB0byBtYXAgdGhlIHB1YmxpYyBzdGF0ZVxuXHQgKi9cblx0YmluZCggb2JqLCBrZXksIHNldEluaXRpYWwgPSB0cnVlLCBwYXRoICkge1xuXHRcdHRoaXMuX2ZvbGxvd2Vycy5wdXNoKFtvYmosIGtleSwgcGF0aF0pO1xuXHRcdGlmICggc2V0SW5pdGlhbCAmJiB0aGlzLmRhdGEgJiYgdGhpcy5fc3RhYmxlICkge1xuXHRcdFx0bGV0IGRhdGEgPSBwYXRoID8gdGhpcy5yZXRyaWV2ZShwYXRoKSA6IHRoaXMuZGF0YTtcblx0XHRcdGlmICggdHlwZW9mIG9iaiAhPSBcImZ1bmN0aW9uXCIgKSB7XG5cdFx0XHRcdGlmICgga2V5ICkgb2JqLnNldFN0YXRlKHsgW2tleV06IGRhdGEgfSk7XG5cdFx0XHRcdGVsc2Ugb2JqLnNldFN0YXRlKGRhdGEpO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdG9iaihkYXRhKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBvbmNlKCdzdGFibGUnLCBjYilcblx0ICogQHBhcmFtIG9iaiB7UmVhY3QuQ29tcG9uZW50fFN0b3JlfGZ1bmN0aW9uKVxuXHQgKiBAcGFyYW0ga2V5IHtzdHJpbmd9IG9wdGlvbmFsIGtleSB3aGVyZSB0byBtYXAgdGhlIHB1YmxpYyBzdGF0ZVxuXHQgKi9cblx0dGhlbiggY2IgKSB7XG5cdFx0aWYgKCB0aGlzLl9zdGFibGUgKVxuXHRcdFx0cmV0dXJuIGNiKHRoaXMuZGF0YSk7XG5cdFx0dGhpcy5vbmNlKCdzdGFibGUnLCBlID0+IGNiKHRoaXMuZGF0YSkpO1xuXHR9XG5cdFxuXHQvKipcblx0ICogQWRkIGEgbG9jayBzbyB0aGUgc3RvcmUgd2lsbCBub3QgcHJvcGFnIGl0IGRhdGEgdW50aWxsIHJlbGVhc2UoKSBpcyBjYWxsXG5cdCAqIEBwYXJhbSBwcmV2aW91cyB7U3RvcmV8bnVtYmVyfEFycmF5fSBAb3B0aW9uYWwgd2YgdG8gd2FpdCwgcmVsZWFzZXMgdG8gd2FpdCBvclxuXHQgKiAgICAgYXJyYXkgb2Ygc3R1ZmYgdG8gd2FpdFxuXHQgKiBAcmV0dXJucyB7dGhpc31cblx0ICovXG5cdHdhaXQoIHByZXZpb3VzICkge1xuXHRcdGlmICggdHlwZW9mIHByZXZpb3VzID09IFwibnVtYmVyXCIgKVxuXHRcdFx0cmV0dXJuIHRoaXMuX19sb2Nrcy5hbGwgKz0gcHJldmlvdXM7XG5cdFx0aWYgKCBpcy5hcnJheShwcmV2aW91cykgKVxuXHRcdFx0cmV0dXJuIHByZXZpb3VzLm1hcCh0aGlzLndhaXQuYmluZCh0aGlzKSk7XG5cdFx0XG5cdFx0dGhpcy5fc3RhYmxlICYmIHRoaXMuZW1pdCgndW5zdGFibGUnLCB0aGlzLnN0YXRlLCB0aGlzLmRhdGEpO1xuXHRcdHRoaXMuX3N0YWJsZSA9IGZhbHNlO1xuXHRcdHRoaXMuX19sb2Nrcy5hbGwrKztcblx0XHRcblx0XHRsZXQgcmVhc29uID0gaXMuc3RyaW5nKHByZXZpb3VzKSA/IHByZXZpb3VzIDogbnVsbDtcblx0XHRpZiAoIHJlYXNvbiApIHtcblx0XHRcdHRoaXMuX19sb2Nrc1tyZWFzb25dID0gdGhpcy5fX2xvY2tzW3JlYXNvbl0gfHwgMDtcblx0XHRcdHRoaXMuX19sb2Nrc1tyZWFzb25dKys7XG5cdFx0fVxuXHRcdGlmICggcHJldmlvdXMgJiYgaXMuZm4ocHJldmlvdXMudGhlbikgKSB7XG5cdFx0XHRwcmV2aW91cy50aGVuKHRoaXMucmVsZWFzZS5iaW5kKHRoaXMsIG51bGwpKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBEZWNyZWFzZSBsb2NrcyBmb3IgdGhpcyBzdG9yZSwgaWYgaXQgcmVhY2ggMCAsXG5cdCAqIGl0IHdpbGwgYmUgcHJvcGFnYXRlZCB0byB0aGUgZm9sbG93ZXJzLFxuXHQgKiB0aGVuLCBhbGwgc3R1ZmYgcGFzc2VkIHRvIFwidGhlblwiIGNhbGwgYmFjayB3aWxsIGJlIGV4ZWMgLyByZWxlYXNlZFxuXHQgKiBAcGFyYW0gZGVzeW5jXG5cdCAqIEByZXR1cm5zIHsqfVxuXHQgKi9cblx0cmVsZWFzZSggcmVhc29uLCBjYiApIHtcblx0XHR2YXIgX3N0YXRpYyA9IHRoaXMuY29uc3RydWN0b3IsIG1lID0gdGhpcztcblx0XHRsZXQgaSAgICAgICA9IDAsIHdhc1N0YWJsZSA9IHRoaXMuX3N0YWJsZTtcblx0XHRcblx0XHRpZiAoIGlzLmZuKHJlYXNvbikgKSB7XG5cdFx0XHRjYiAgICAgPSByZWFzb247XG5cdFx0XHRyZWFzb24gPSBudWxsO1xuXHRcdH1cblx0XHRcblx0XHRpZiAoIHJlYXNvbiApIHtcblx0XHRcdGlmICggdGhpcy5fX2xvY2tzW3JlYXNvbl0gPT0gMCApXG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoXCJSZWxlYXNlIG1vcmUgdGhhbiBsb2NraW5nICFcIiwgcmVhc29uKTtcblx0XHRcdHRoaXMuX19sb2Nrc1tyZWFzb25dID0gdGhpcy5fX2xvY2tzW3JlYXNvbl0gfHwgMDtcblx0XHRcdHRoaXMuX19sb2Nrc1tyZWFzb25dLS07XG5cdFx0fVxuXHRcdFxuXHRcdGlmICggIXJlYXNvbiAmJiB0aGlzLl9fbG9ja3MuYWxsID09IDAgKVxuXHRcdFx0Y29uc29sZS5lcnJvcihcIlJlbGVhc2UgbW9yZSB0aGFuIGxvY2tpbmcgIVwiKTtcblx0XHRcblx0XHRpZiAoICEtLXRoaXMuX19sb2Nrcy5hbGwgJiYgdGhpcy5pc0NvbXBsZXRlKCkgKSB7XG5cdFx0XHRsZXQgcHJvcGFnICAgPSB0aGlzLnNob3VsZFByb3BhZyh0aGlzLmRhdGEpO1xuXHRcdFx0dGhpcy5fc3RhYmxlID0gdHJ1ZTtcblx0XHRcdHByb3BhZyAmJiB0aGlzLl9yZXYrKzsvL1xuXHRcdFx0aWYgKCBwcm9wYWcgJiYgdGhpcy5fZm9sbG93ZXJzLmxlbmd0aCApXG5cdFx0XHRcdHRoaXMuX2ZvbGxvd2Vycy5mb3JFYWNoKGZ1bmN0aW9uIHByb3BhZyggZm9sbG93ZXIgKSB7XG5cdFx0XHRcdFx0bGV0IGRhdGEgPSBmb2xsb3dlclsyXSA/IG1lLnJldHJpZXZlKGZvbGxvd2VyWzJdKSA6IG1lLmRhdGE7XG5cdFx0XHRcdFx0Ly9pZiAoICFkYXRhICkgcmV0dXJuO1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdGlmICggdHlwZW9mIGZvbGxvd2VyWzBdID09IFwiZnVuY3Rpb25cIiApIHtcblx0XHRcdFx0XHRcdGZvbGxvd2VyWzBdKGRhdGEpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHRcdC8vY2IgJiYgaSsrO1xuXHRcdFx0XHRcdFx0Zm9sbG93ZXJbMF0uc2V0U3RhdGUoXG5cdFx0XHRcdFx0XHRcdChmb2xsb3dlclsxXSkgPyB7IFtmb2xsb3dlclsxXV06IGRhdGEgfVxuXHRcdFx0XHRcdFx0XHQgICAgICAgICAgICAgIDogZGF0YVxuXHRcdFx0XHRcdFx0XHQvLyxcblx0XHRcdFx0XHRcdFx0Ly9jYiAmJiAoXG5cdFx0XHRcdFx0XHRcdC8vICAgICgpID0+ICghKC0taSkgJiYgY2IoKSlcblx0XHRcdFx0XHRcdFx0Ly8pXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHQvL2Vsc2Vcblx0XHRcdCF3YXNTdGFibGUgJiYgdGhpcy5lbWl0KCdzdGFibGUnLCB0aGlzLmRhdGEpO1xuXHRcdFx0cHJvcGFnICYmIHRoaXMuZW1pdCgndXBkYXRlJywgdGhpcy5kYXRhKTtcblx0XHRcdGNiICYmIGNiKClcblx0XHR9XG5cdFx0ZWxzZSBjYiAmJiB0aGlzLnRoZW4oY2IpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cdFxuXHRwcm9wYWcoIGRhdGEgKSB7XG5cdFx0dGhpcy5lbWl0KCd1cGRhdGUnLCBkYXRhKTtcblx0fVxuXHRcblx0cmV0YWluKCByZWFzb24gKSB7XG5cdFx0dGhpcy5fX3JldGFpbnMuYWxsKys7XG5cdFx0aWYgKCByZWFzb24gKSB7XG5cdFx0XHR0aGlzLl9fcmV0YWluc1tyZWFzb25dID0gdGhpcy5fX3JldGFpbnNbcmVhc29uXSB8fCAwO1xuXHRcdFx0dGhpcy5fX3JldGFpbnNbcmVhc29uXSsrO1xuXHRcdH1cblx0fVxuXHRcblx0ZGlzcG9zZSggcmVhc29uICkge1xuXHRcdC8vY29uc29sZS53YXJuKFwiZGlzcG9zZVwiLCByZWFzb24sIHRoaXMuX19yZXRhaW5zKTtcblx0XHRpZiAoIHJlYXNvbiApIHtcblx0XHRcdGlmICggIXRoaXMuX19yZXRhaW5zW3JlYXNvbl0gKVxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJSUyA6IERpc3Bvc2UgbW9yZSB0aGFuIHJldGFpbmluZyBvbiBzdG9yZSAnXCIgKyB0aGlzLm5hbWUgKyBcIicgOiBcIiArIHJlYXNvbik7XG5cdFx0XHRcblx0XHRcdHRoaXMuX19yZXRhaW5zW3JlYXNvbl0tLTtcblx0XHR9XG5cdFx0aWYgKCB0aGlzLl9fcmV0YWlucy5hbGwgPT0gMCApXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJSUyA6IERpc3Bvc2UgbW9yZSB0aGFuIHJldGFpbmluZyBvbiBzdG9yZSBcIiArIHRoaXMubmFtZSk7XG5cdFx0XG5cdFx0dGhpcy5fX3JldGFpbnMuYWxsLS07XG5cdFx0XG5cdFx0aWYgKCAhdGhpcy5fX3JldGFpbnMuYWxsICkge1xuXHRcdFx0aWYgKCB0aGlzLl9wZXJzaXN0ZW5jZVRtICkge1xuXHRcdFx0XHR0aGlzLl9kZXN0cm95VE0gJiYgY2xlYXJUaW1lb3V0KHRoaXMuX2Rlc3Ryb3lUTSk7XG5cdFx0XHRcdHRoaXMuX2Rlc3Ryb3lUTSA9IHNldFRpbWVvdXQoXG5cdFx0XHRcdFx0ZSA9PiB7XG5cdFx0XHRcdFx0XHR0aGlzLl9kZXN0cm95VE0gPSBudWxsO1xuXHRcdFx0XHRcdFx0Ly90aGlzLnRoZW4ocyA9PiB7XG5cdFx0XHRcdFx0XHQhdGhpcy5fX3JldGFpbnMuYWxsICYmICF0aGlzLmRlYWQgJiYgdGhpcy5kZXN0cm95KClcblx0XHRcdFx0XHRcdC8vfSk7XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR0aGlzLl9wZXJzaXN0ZW5jZVRtXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0Ly90aGlzLnRoZW4ocyA9PlxuXHRcdFx0XHQoIXRoaXMuX19yZXRhaW5zLmFsbCAmJiAhdGhpcy5kZWFkICYmIHRoaXMuZGVzdHJveSgpKVxuXHRcdFx0XHQvLyk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdFxuXHRkZXN0cm95KCkge1xuXHRcdC8vICBjb25zb2xlLmxvZyhcImRlc3Ryb3lcIiwgdGhpcy5fdWlkKTtcblx0XHRcblx0XHR0aGlzLmVtaXQoJ2Rlc3Ryb3knLCB0aGlzKTtcblx0XHRpZiAoIHRoaXMuX3N0YWJpbGl6ZXIgKVxuXHRcdFx0Y2xlYXJUaW1lb3V0KHRoaXMuX3N0YWJpbGl6ZXIpO1xuXHRcdFxuXHRcdGlmICggdGhpcy5fZm9sbG93ZXJzLmxlbmd0aCApXG5cdFx0XHR0aGlzLl9mb2xsb3dlcnMuZm9yRWFjaChcblx0XHRcdFx0KCBmb2xsb3dlciApID0+IHtcblx0XHRcdFx0XHRpZiAoIHR5cGVvZiBmb2xsb3dlclswXSAhPT0gXCJmdW5jdGlvblwiICkge1xuXHRcdFx0XHRcdFx0aWYgKCBmb2xsb3dlclswXS5zdG9yZXMgKVxuXHRcdFx0XHRcdFx0XHRkZWxldGUgZm9sbG93ZXJbMF0uc3RvcmVzW2ZvbGxvd2VyWzFdXTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdCk7XG5cdFx0dGhpcy5fZm9sbG93ZXJzLmxlbmd0aCA9IDA7XG5cdFx0dGhpcy5jb25zdHJ1Y3Rvci5fcmV2ICA9IHRoaXMucmV2O1xuXHRcdHRoaXMuZGVhZCAgICAgICAgICAgICAgPSB0cnVlO1xuXHRcdHRoaXMuX3JldnMgICAgICAgICAgICAgPSB0aGlzLmRhdGEgPSB0aGlzLnN0YXRlID0gdGhpcy5zY29wZSA9IG51bGw7XG5cdFx0dGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoKTtcblx0fVxufVxuXG4vKipcbiAqIGdldCBhIHN0YXRpYyBhbGlhc2VkIHJlZmVyZW5jZSBvZiBhIHN0b3JlXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICogQHJldHVybnMge3tzdG9yZTogU3RvcmUsIG5hbWU6ICp9fVxuICovXG5TdG9yZS5hcyA9IGZ1bmN0aW9uICggbmFtZSApIHtcblx0cmV0dXJuIHsgc3RvcmU6IHRoaXMsIG5hbWUgfTtcbn1cblxuLyoqXG4gKiBNYXAgYWxsIG5hbWVkIHN0b3JlcyBpbiB7a2V5c30gdG8gdGhlIHtvYmplY3R9J3Mgc3RhdGVcbiAqIEhvb2sgY29tcG9uZW50V2lsbFVubW91bnQgKGZvciByZWFjdCBjb21wKSBvciBkZXN0cm95IHRvIHVuQmluZCB0aGVtIGF1dG9tYXRpY2FsbHlcbiAqIEBzdGF0aWNcbiAqIEBwYXJhbSBvYmplY3Qge09iamVjdH0gdGFyZ2V0IHN0YXRlIGF3YXJlIG9iamVjdCAoUmVhY3QuQ29tcG9uZW50fFN0b3JlfC4uLilcbiAqIEBwYXJhbSBrZXlzIHtBcnJheX0gRXggOiBbXCJzZXNzaW9uXCIsIFwib3RoZXJTdGF0aWNOYW1lZFN0b3JlOmtleVwiLFxuICogICAgIHN0b3JlLmFzKCdhbm90aGVyS2V5JyldXG4gKi9cblN0b3JlLm1hcCA9IGZ1bmN0aW9uICggY1N0b3JlLCBrZXlzLCBzY29wZSwgb3JpZ2luLCBzZXRJbml0aWFsID0gZmFsc2UgKSB7XG5cdHZhciB0YXJnZXRSZXZzICAgICA9IGNTdG9yZS5fcmV2cyB8fCB7fTtcblx0dmFyIHRhcmdldFNjb3BlICAgID0gY1N0b3JlLnN0b3JlcyB8fCAoY1N0b3JlLnN0b3JlcyA9IHt9KTtcblx0dmFyIGluaXRpYWxPdXRwdXRzID0ge307XG5cdGtleXMgICAgICAgICAgICAgICA9IGlzLmFycmF5KGtleXMpID8gWy4uLmtleXNdIDogW2tleXNdO1xuXHRcblx0XG5cdHNjb3BlID0gc2NvcGUgfHwgU3RvcmUuc3RhdGljU2NvcGU7XG5cdFxuXHRrZXlzID0ga2V5cy5maWx0ZXIoXG5cdFx0Ly8gQHRvZG8gOiB1c2UgcXVlcnkgcmVmc1xuXHRcdC8vIChzdG9yZSkoXFwuc3RvcmUpKihcXFsoXFwqfChwcm9wcylcXHcrKSspXFxdKT8oXFw6YWxpYXMpXG5cdFx0KCBrZXkgKSA9PiB7XG5cdFx0XHRpZiAoICFrZXkgKSB7XG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoXCJOb3QgYSBtYXBwYWJsZSBzdG9yZSBpdGVtICdcIiArIGtleSArIFwiJyBpbiBcIiArIG9yaWdpbiArICcgISEnKTtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0bGV0IG5hbWUsXG5cdFx0XHQgICAgYWxpYXMsXG5cdFx0XHQgICAgcGF0aCxcblx0XHRcdCAgICBzdG9yZSwgX2tleTtcblx0XHRcdGlmICgga2V5LnN0b3JlICYmIGtleS5uYW1lICkge1xuXHRcdFx0XHRhbGlhcyA9IG5hbWUgPSBrZXkubmFtZTtcblx0XHRcdFx0c3RvcmUgPSBrZXkuc3RvcmU7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIGlmICggaXMuZm4oa2V5KSApIHtcblx0XHRcdFx0bmFtZSAgPSBhbGlhcyA9IGtleS5uYW1lIHx8IGtleS5kZWZhdWx0TmFtZTtcblx0XHRcdFx0c3RvcmUgPSBrZXk7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0X2tleSAgPSBrZXkubWF0Y2goLyhbXlxcLlxcOl0rKSgoPzpcXC5bXlxcLlxcOl0rKSopKD86XFw6KFteXFwuXFw6XSspKT8vKTtcblx0XHRcdFx0bmFtZSAgPSBfa2V5WzFdO1xuXHRcdFx0XHRwYXRoICA9IF9rZXlbMl0gJiYgX2tleVsyXS5zdWJzdHIoMSk7XG5cdFx0XHRcdHN0b3JlID0gc2NvcGUuc3RvcmVzW19rZXlbMV1dO1xuXHRcdFx0XHRhbGlhcyA9IF9rZXlbM10gfHwgcGF0aCAmJiBwYXRoLm1hdGNoKC8oW15cXC5dKikkLylbMF0gfHwgX2tleVsxXTtcblx0XHRcdH1cblx0XHRcdGlmICggIXN0b3JlICkge1xuXHRcdFx0XHRsZXQgaSA9IFtdO1xuXHRcdFx0XHRmb3IgKCB2YXIgbyBpbiBzY29wZS5zdG9yZXMgKVxuXHRcdFx0XHRcdGkucHVzaChvKVxuXHRcdFx0XHRjb25zb2xlLmVycm9yKFwiTm90IGEgbWFwcGFibGUgc3RvcmUgaXRlbSAnXCIgKyBuYW1lICsgXCIvXCIgKyBhbGlhcyArIFwiJyBpbiBcIiArIChjU3RvcmUubmFtZSB8fCBjU3RvcmUpICsgJyAhIScsIHN0b3JlLCBfa2V5LCBzY29wZS5zdG9yZXMsIGkpO1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRpZiAoIGlzLnJzU2NvcGVDbGFzcyhzdG9yZSkgKSBzY29wZS5fbW91bnQobmFtZSk7XG5cdFx0XHRpZiAoIGlzLnJzU2NvcGUoc3RvcmUpICkge1xuXHRcdFx0XHRzdG9yZSA9IHNjb3BlLl9tb3VudChrZXkpO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSBpZiAoIHRhcmdldFJldnNbbmFtZV0gKSByZXR1cm4gZmFsc2U7Ly8gaWdub3JlIGRibCB1c2VzIGZvciBub3dcblx0XHRcdFxuXHRcdFx0XG5cdFx0XHRpZiAoIGlzLmZuKHN0b3JlKSApIHtcblx0XHRcdFx0c2NvcGUuX21vdW50KG5hbWUpXG5cdFx0XHRcdHNjb3BlLnN0b3Jlc1tuYW1lXS5iaW5kKGNTdG9yZSwgYWxpYXMsIHNldEluaXRpYWwsIHBhdGgpO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdHN0b3JlLmJpbmQoY1N0b3JlLCBhbGlhcywgc2V0SW5pdGlhbCwgcGF0aCk7XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdC8vIGdpdmUgaW5pdGlhbCBzdG9yZSB3ZWlnaHQgYmFzaW5nIHNvdXJjZXNcblx0XHRcdHNjb3BlLnN0b3Jlc1tuYW1lXS5fc291cmNlcyAmJiBjU3RvcmUuX3NvdXJjZXMucHVzaCguLi5zY29wZS5zdG9yZXNbbmFtZV0uX3NvdXJjZXMpO1xuXHRcdFx0XG5cdFx0XHR0YXJnZXRSZXZzW2FsaWFzXSA9IHRhcmdldFJldnNbYWxpYXNdIHx8IHRydWU7XG5cdFx0XHQhdGFyZ2V0U2NvcGVbbmFtZV0gJiYgKHRhcmdldFNjb3BlW25hbWVdID0gc2NvcGUuc3RvcmVzW25hbWVdKTtcblx0XHRcdGlmICggc2NvcGUuc3RvcmVzW25hbWVdLmhhc093blByb3BlcnR5KCdkYXRhJykgKVxuXHRcdFx0XHRpbml0aWFsT3V0cHV0c1tuYW1lXSA9IHNjb3BlLmRhdGFbbmFtZV07XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdCk7XG5cdFxuXHQvLyAuLi4gQHRvZG9cblx0Y1N0b3JlLm9uY2UoJ2Rlc3Ryb3knLCAoIC4uLmFyZ3ogKSA9PiB7XG5cdFx0a2V5cy5tYXAoXG5cdFx0XHQoIGtleSApID0+IHtcblx0XHRcdFx0bGV0IG5hbWUsXG5cdFx0XHRcdCAgICBhbGlhcywgcGF0aCxcblx0XHRcdFx0ICAgIHN0b3JlO1xuXHRcdFx0XHRpZiAoIGtleS5zdG9yZSAmJiBrZXkubmFtZSApIHtcblx0XHRcdFx0XHRhbGlhcyA9IG5hbWUgPSBrZXkubmFtZTtcblx0XHRcdFx0XHRzdG9yZSA9IGtleS5zdG9yZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlIGlmICggaXMuZm4oa2V5KSApIHtcblx0XHRcdFx0XHRuYW1lICA9IGFsaWFzID0ga2V5Lm5hbWUgfHwga2V5LmRlZmF1bHROYW1lO1xuXHRcdFx0XHRcdHN0b3JlID0gc2NvcGUuc3RvcmVzW25hbWVdO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdGtleSAgID0ga2V5Lm1hdGNoKC8oW15cXC5cXDpdKykoKD86XFwuW15cXC5cXDpdKykqKSg/OlxcOihbXlxcLlxcOl0rKSk/Lyk7XG5cdFx0XHRcdFx0bmFtZSAgPSBrZXlbMV07XG5cdFx0XHRcdFx0cGF0aCAgPSBrZXlbMl0gJiYga2V5WzJdLnN1YnN0cigxKTtcblx0XHRcdFx0XHRzdG9yZSA9IHNjb3BlLnN0b3Jlc1trZXlbMV1dO1xuXHRcdFx0XHRcdGFsaWFzID0ga2V5WzNdIHx8IHBhdGggJiYgcGF0aC5tYXRjaCgvKFteXFwuXSopJC8pWzBdIHx8IGtleVsxXTtcblx0XHRcdFx0fVxuXHRcdFx0XHRcblx0XHRcdFx0c3RvcmUgJiYgIWlzLmZuKHN0b3JlKSAmJiBzdG9yZS51bkJpbmQoY1N0b3JlLCBhbGlhcywgcGF0aClcblx0XHRcdH1cblx0XHQpO1xuXHR9KVxuXHRcblx0cmV0dXJuIGluaXRpYWxPdXRwdXRzO1xufTtcblxuXG5pcy5yc1N0b3JlICAgICAgPSBmdW5jdGlvbiAoIG9iaiApIHtcblx0cmV0dXJuIG9iaiBpbnN0YW5jZW9mIFN0b3JlXG59XG5pcy5yc1N0b3JlQ2xhc3MgPSBmdW5jdGlvbiAoIG9iaiApIHtcblx0cmV0dXJuIFN0b3JlLmlzUHJvdG90eXBlT2Yob2JqKSB8fCBvYmogPT09IFN0b3JlXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0b3JlO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9TdG9yZS5qcyIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpICAyMDE4IFdpc2UgV2lsZCBXZWIgLlxuICpcbiAqICBNSVQgTGljZW5zZVxuICpcbiAqICBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiAgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqICB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiAgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiAgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiAgVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG4gKiAgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqICBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG4gKiAgU09GVFdBUkUuXG4gKlxuICogQGF1dGhvciA6IE5hdGhhbmFlbCBCcmF1blxuICogQGNvbnRhY3QgOiBjYWlwaWxhYnNAZ21haWwuY29tXG4gKi9cblxuLy9pbXBvcnQgaW5kZXggZnJvbSBcIi4vaW5kZXhcIjsvLyB3aWxsIHVzZSBhcyBleHRlcm5hbCB0aGUgaW5kZXggaW4gZGlzdFxuaW1wb3J0IGlzIGZyb20gXCJpc1wiO1xuXG4vKipcbiAqIE1pbmltYWwgcHVzaCBzZXF1ZW5jZXIsIGFwcGx5IHN0b3JlcyBzcGVjaWZpYyB0YXNrIGluIHRoZSByaWdodCBvcmRlciAocm9vdCBzdG9yZXNcbiAqIGZpcnN0KVxuICovXG5sZXQgdGFza1F1ZXVlICAgICAgPSBbXSxcbiAgICBjdXJXZWlnaHQgICAgICA9IDAsXG4gICAgbWF4V2VpZ2h0ICAgICAgPSAwLFxuICAgIG1pbldlaWdodCAgICAgID0gMCxcbiAgICB0YXNrQ291bnQgICAgICA9IDAsXG4gICAgZGVTeW5jICAgICAgICAgPSBmYWxzZSxcbiAgICBkZVN5bmNNYXhUYXNrcyA9IDEwLFxuICAgIHRhc2ssXG4gICAgaXNSdW5uaW5nLFxuICAgIGVycm9yQ2F0Y2hlciAgID0ge1xuICAgICAgICBsYXN0RXJyb3I6IG51bGwsXG4gICAgICAgIGRpc3BhdGNoIDogZnVuY3Rpb24gKCBlcnJvciApIHtcbiAgICAgICAgICAgIGVycm9yQ2F0Y2hlci5kaXNhYmxlKCk7XG4gICAgICAgICAgICBpZiAoIHRhc2sgJiYgdGFza1sgMCBdLmhhbmRsZUVycm9yICkge1xuICAgICAgICAgICAgICAgIHRhc2tbIDAgXS5oYW5kbGVFcnJvcihlcnJvciwgdGFzayk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICggdGFzayApXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlJlU2NvcGUgOiBBbiBhcHBseSB0YXNrIGhhcyBmYWlsZWQgISFcIiwgdGFza1sgMSBdLCBcIiBvbiBcIiwgdGFza1sgMCBdLm5hbWUgfHwgdGFza1sgMCBdLmNvbnN0cnVjdG9yLm5hbWUpXG4gICAgICAgIFxuICAgICAgICAgICAgaXNSdW5uaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB0YXNrICAgICAgPSBudWxsO1xuICAgICAgICAgICAgcnVuTm93KCk7XG4gICAgICAgIH0sXG4gICAgICAgIGVuYWJsZSAgIDogKCB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyApXG4gICAgICAgICAgICAgICAgICAgPyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgZXJyb3JDYXRjaGVyLmRpc3BhdGNoKVxuICAgICAgICAgICAgfSA6ICgpID0+IHtcbiAgICAgICAgICAgICAgICBwcm9jZXNzLm9uKCd1bmNhdWdodEV4Y2VwdGlvbicsIGVycm9yQ2F0Y2hlci5kaXNwYXRjaCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICBkaXNhYmxlICA6ICggdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgKVxuICAgICAgICAgICAgICAgICAgID8gKCkgPT4ge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdlcnJvcicsIGVycm9yQ2F0Y2hlci5kaXNwYXRjaClcbiAgICAgICAgICAgIH0gOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgcHJvY2Vzcy5yZW1vdmVMaXN0ZW5lcigndW5jYXVnaHRFeGNlcHRpb24nLCBlcnJvckNhdGNoZXIuZGlzcGF0Y2gpO1xuICAgICAgICAgICAgfVxuICAgIH1cbjtcblxuZnVuY3Rpb24gcnVuTm93KCkge1xuICAgIGlmICggIWlzUnVubmluZyApIHtcbiAgICAgICAgcnVuKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBydW4oKSB7XG4gICAgbGV0IGZyb20gID0gRGF0ZS5ub3coKTtcbiAgICBpc1J1bm5pbmcgPSB0cnVlO1xuICAgIGVycm9yQ2F0Y2hlci5lbmFibGUoKTtcbiAgICB3aGlsZSAoIHRhc2tDb3VudCApIHtcbiAgICAgICAgXG4gICAgICAgIC8vIHRyeSBmb3IgdGhlIGN1cnJlbnQgd2VpZ2h0XG4gICAgICAgIHdoaWxlICggISggdGFza1F1ZXVlWyBjdXJXZWlnaHQgXSAmJiB0YXNrUXVldWVbIGN1cldlaWdodCBdLmxlbmd0aCApIClcbiAgICAgICAgICAgIGN1cldlaWdodCsrO1xuICAgICAgICBcbiAgICAgICAgdGFza0NvdW50LS07XG4gICAgICAgIHRhc2sgPSB0YXNrUXVldWVbIGN1cldlaWdodCBdLnNoaWZ0KCk7XG4gICAgICAgIC8vY29uc29sZS5sb2coXCJUYXNrIDogXCIsIHRhc2tbMV0sIFwiIG9uIFwiLCB0YXNrWzBdLm5hbWUpO1xuICAgICAgICB0YXNrWyAwIF1bIHRhc2tbIDEgXSBdLmFwcGx5KHRhc2tbIDAgXSwgdGFza1sgMiBdKTtcbiAgICB9XG4gICAgdGFzayA9IHVuZGVmaW5lZDtcbiAgICBlcnJvckNhdGNoZXIuZGlzYWJsZSgpO1xuICAgIFxuICAgIGlzUnVubmluZyA9IGZhbHNlO1xuICAgIGlmICggdGFza0NvdW50ICkge1xuICAgICAgICBzZXRUaW1lb3V0KHJ1bk5vdyk7XG4gICAgfVxufVxuXG4vL1xuLy9pbmRleC5zZXRUYXNrRGVTeW5jID0gKCBuYiApID0+IHtcbi8vICAgIGlmICggbmIgPT09IGZhbHNlIClcbi8vICAgICAgICByZXR1cm4gZGVTeW5jID0gZmFsc2U7XG4vLyAgICBlbHNlIGlmICggbmIgPT09IHRydWUgKSB7XG4vLyAgICAgICAgZGVTeW5jICAgICAgICAgPSB0cnVlO1xuLy8gICAgICAgIGRlU3luY01heFRhc2tzID0gMTA7XG4vLyAgICB9XG4vLyAgICBlbHNlIChpcy5pbnQobmIpKVxuLy8gICAge1xuLy8gICAgICAgIGRlU3luYyAgICAgICAgID0gdHJ1ZTtcbi8vICAgICAgICBkZVN5bmNNYXhUYXNrcyA9IG5iO1xuLy8gICAgfVxuLy99O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgcHVzaFRhc2soIG9iaiwgZm4sIGFyZ3ogKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgbW9yZSBhIHN0b3JlIGhhdmUgc291cmNlcywgdGhlIG1vcmUgaXQgc2hvdWxkIGJlIHByb2Nlc3NlZCBmaXJzdFxuICAgICAgICAgKiBTbyBsZWFmcyBzdG9yZXMgc3RheSBzeW5jLCBhbmQgcm9vdCBzdG9yZXMgcmVjZWl2ZSBtZXJnZWQgc3RhdGUgdXBkYXRlcztcbiAgICAgICAgICogZ2xvYmFsIHN0YXRlIHN0YXkgY29oZXJlbnRcbiAgICAgICAgICpcbiAgICAgICAgICogVGhpcyBtZWFuIHdoYXRldmVyIHRoZSBudW1iZXIgb2Ygc3RvcmVzICYgdGhlIGNvbXBsZXhpdHkgb2YgdGhlIGRlcHMsXG4gICAgICAgICAqIHVwZGF0aW5nIGEgc3RvcmUgc3RhdGUgd2lsbCB1cGRhdGUgaXRzIHN5bmNocm9uZSBjaGlsZCBzdG9yZXMgaW1tZWRpYXRlbHlcbiAgICAgICAgICpcbiAgICAgICAgICpcbiAgICAgICAgICogQHR5cGUgeyp8bnVtYmVyfVxuICAgICAgICAgKi9cbiAgICAgICAgbGV0IHdlaWdodCA9IG9iai5fc291cmNlcyAmJiBvYmouX3NvdXJjZXMubGVuZ3RoIHx8IDEsXG4gICAgICAgICAgICBzdGFjayAgPSB0YXNrUXVldWVbIHdlaWdodCBdID1cbiAgICAgICAgICAgICAgICB0YXNrUXVldWVbIHdlaWdodCBdIHx8IFtdO1xuICAgICAgICBcbiAgICAgICAgbWF4V2VpZ2h0ID0gTWF0aC5tYXgobWF4V2VpZ2h0LCB3ZWlnaHQpO1xuICAgICAgICBjdXJXZWlnaHQgPSBNYXRoLm1pbihjdXJXZWlnaHQsIHdlaWdodCk7XG4gICAgICAgIHRhc2tDb3VudCsrO1xuICAgICAgICBcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcIlB1c2ggVGFzayA6IFwiLCBmbiwgXCIgb24gXCIsIG9iai5uYW1lLCB3ZWlnaHQpO1xuICAgICAgICBzdGFjay5wdXNoKFsgb2JqLCBmbiwgYXJneiBdKTtcbiAgICAgICAgc2V0VGltZW91dChydW5Ob3csIDApO1xuICAgICAgICByZXR1cm4gc3RhY2subGVuZ3RoO1xuICAgIH1cbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWxzL1Rhc2tTZXF1ZW5jZXIuanMiLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Byb2Nlc3MvYnJvd3Nlci5qc1xuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcbiAqIENvcHlyaWdodCAoYykgIDIwMTggV2lzZSBXaWxkIFdlYiAuXG4gKlxuICogIE1JVCBMaWNlbnNlXG4gKlxuICogIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqICBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiAgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqICBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqICBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqICBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcbiAqICBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqICBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiAgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiAgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiAgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiAgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcbiAqICBTT0ZUV0FSRS5cbiAqXG4gKiBAYXV0aG9yIDogTmF0aGFuYWVsIEJyYXVuXG4gKiBAY29udGFjdCA6IGNhaXBpbGFic0BnbWFpbC5jb21cbiAqL1xuXG5pbXBvcnQgaXMgICAgZnJvbSAnaXMnXG5cbmNvbnN0IFNpbXBsZU9iamVjdFByb3RvID0gKCB7fSApLmNvbnN0cnVjdG9yO1xuXG5sZXQgc2NvcGFibGVzID0gW107XG5cbmZ1bmN0aW9uIGFkZFNjb3BhYmxlVHlwZSggdGVzdCwgaGFuZGxlLCBtZW1iZXIgPSBmYWxzZSwgc3RhdGVTY29wZSA9IGZhbHNlICkge1xuICAgIHNjb3BhYmxlcy5wdXNoKFxuICAgICAgICB7XG4gICAgICAgICAgICB0ZXN0LFxuICAgICAgICAgICAgbWVtYmVyLFxuICAgICAgICAgICAgc3RhdGVTY29wZSxcbiAgICAgICAgICAgIGhhbmRsZVxuICAgICAgICB9XG4gICAgKVxufVxuXG4vL1xuZnVuY3Rpb24gaXNTY29wYWJsZVR5cGUoIENvbXAsIG1lbWJlciwgc3RhdGVTY29wZSApIHtcbiAgICBcbiAgICBmb3IgKCBsZXQgaSA9IDA7IGkgPCBzY29wYWJsZXMubGVuZ3RoOyBpKysgKVxuICAgICAgICBpZiAoXG4gICAgICAgICAgICAoIG1lbWJlciA9PT0gdW5kZWZpbmVkIHx8IG1lbWJlciA9PSBzY29wYWJsZXNbIGkgXS5tZW1iZXIgKVxuICAgICAgICAgICAgJiYgc3RhdGVTY29wZSA9PSBzY29wYWJsZXNbIGkgXS5zdGF0ZVNjb3BlXG4gICAgICAgICAgICAmJiBzY29wYWJsZXNbIGkgXS50ZXN0KENvbXApXG4gICAgICAgIClcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgIFxuICAgIHJldHVybiBmYWxzZTtcbiAgICBcbn1cblxuZnVuY3Rpb24gYXBwbHlTY29wYWJsZVR5cGUoIENvbXAsIGFyZ3osIG1lbWJlciwgc3RhdGVTY29wZSApIHtcbiAgICBcbiAgICBmb3IgKCBsZXQgaSA9IDA7IGkgPCBzY29wYWJsZXMubGVuZ3RoOyBpKysgKVxuICAgICAgICBpZiAoIG1lbWJlciA9PSBzY29wYWJsZXNbIGkgXS5tZW1iZXIgJiYgc3RhdGVTY29wZSA9PSBzY29wYWJsZXNbIGkgXS5zdGF0ZVNjb3BlICYmIHNjb3BhYmxlc1sgaSBdLnRlc3QoQ29tcCkgKVxuICAgICAgICAgICAgcmV0dXJuIHNjb3BhYmxlc1sgaSBdLmhhbmRsZShDb21wLCAuLi5hcmd6KTtcbiAgICBcbiAgICBjb25zb2xlLndhcm4oXCJyZVNjb3BlIDogVW5rbm93biB0eXBlXCIsIENvbXApXG4gICAgXG4gICAgcmV0dXJuIGZhbHNlO1xuICAgIFxufVxuXG5mdW5jdGlvbiByZVNjb3BlKCAuLi5hcmd6ICkge1xuICAgIC8vIGFyZSB3ZSBkZWNvcmF0aW5nIGEgbWVtYmVyIC8gd2l0aG91dCBhcmd6XG4gICAgaWYgKCBhcmd6WyAwIF0gaW5zdGFuY2VvZiBTaW1wbGVPYmplY3RQcm90byAmJiBhcmd6WyAyIF0gaW5zdGFuY2VvZiBTaW1wbGVPYmplY3RQcm90byAmJiBhcmd6WyAwIF0uaGFzT3duUHJvcGVydHkoYXJnelsgMSBdKSApIHtcbiAgICAgICAgYXJnelsgMiBdLnZhbHVlID0gYXBwbHlTY29wYWJsZVR5cGUoYXJnelsgMCBdLCBbXSwgdHJ1ZSwgZmFsc2UpO1xuICAgICAgICByZXR1cm4gYXJnelsgMCBdO1xuICAgIH1cbiAgICBlbHNlIGlmICggIWlzU2NvcGFibGVUeXBlKGFyZ3pbIDAgXSwgdW5kZWZpbmVkLCBmYWxzZSkgKSB7XG4gICAgICAgIHJldHVybiAoIC4uLmFyZ3oyICkgPT4ge1xuICAgICAgICAgICAgLy8gYXJlIHdlIGRlY29yYXRpbmcgYSBtZW1iZXIgLyB3aXRoIGFyZ3pcbiAgICAgICAgICAgIGlmICggYXJnejJbIDAgXSBpbnN0YW5jZW9mIFNpbXBsZU9iamVjdFByb3RvICYmIGFyZ3oyWyAyIF0gaW5zdGFuY2VvZiBTaW1wbGVPYmplY3RQcm90byAmJiBhcmd6MlsgMCBdLmhhc093blByb3BlcnR5KGFyZ3oyWyAxIF0pICkge1xuICAgICAgICAgICAgICAgIGFyZ3oyWyAyIF0udmFsdWUgPSBhcHBseVNjb3BhYmxlVHlwZShhcmd6MlsgMCBdLCBhcmd6LCB0cnVlLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFyZ3oyWyAwIF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlU2NvcGUoYXJnejJbIDAgXSwgLi4uYXJneik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGFwcGx5U2NvcGFibGVUeXBlKGFyZ3pbIDAgXSwgYXJnei5zbGljZSgxKSwgZmFsc2UsIGZhbHNlKTtcbn1cblxuZnVuY3Rpb24gc2NvcGVUb1N0YXRlKCAuLi5hcmd6ICkge1xuICAgIC8vIGFyZSB3ZSBkZWNvcmF0aW5nIGEgbWVtYmVyIC8gd2l0aG91dCBhcmd6XG4gICAgaWYgKCBhcmd6WyAwIF0gaW5zdGFuY2VvZiBTaW1wbGVPYmplY3RQcm90byAmJiBhcmd6WyAyIF0gaW5zdGFuY2VvZiBTaW1wbGVPYmplY3RQcm90byAmJiBhcmd6WyAwIF0uaGFzT3duUHJvcGVydHkoYXJnelsgMSBdKSApIHtcbiAgICAgICAgYXJnelsgMiBdLnZhbHVlID0gYXBwbHlTY29wYWJsZVR5cGUoYXJnelsgMCBdLCBbXSwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgIHJldHVybiBhcmd6WyAwIF07XG4gICAgfVxuICAgIGVsc2UgaWYgKCAhaXNTY29wYWJsZVR5cGUoYXJnelsgMCBdLCB1bmRlZmluZWQsIHRydWUpICkge1xuICAgICAgICByZXR1cm4gKCAuLi5hcmd6MiApID0+IHtcbiAgICAgICAgICAgIC8vIGFyZSB3ZSBkZWNvcmF0aW5nIGEgbWVtYmVyIC8gd2l0aCBhcmd6XG4gICAgICAgICAgICBpZiAoIGFyZ3oyWyAwIF0gaW5zdGFuY2VvZiBTaW1wbGVPYmplY3RQcm90byAmJiBhcmd6MlsgMiBdIGluc3RhbmNlb2YgU2ltcGxlT2JqZWN0UHJvdG8gJiYgYXJnejJbIDAgXS5oYXNPd25Qcm9wZXJ0eShhcmd6MlsgMSBdKSApIHtcbiAgICAgICAgICAgICAgICBhcmd6MlsgMiBdLnZhbHVlID0gYXBwbHlTY29wYWJsZVR5cGUoYXJnejJbIDAgXSwgYXJneiwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFyZ3oyWyAwIF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNjb3BlVG9TdGF0ZShhcmd6MlsgMCBdLCAuLi5hcmd6KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYXBwbHlTY29wYWJsZVR5cGUoYXJnelsgMCBdLCBhcmd6LnNsaWNlKDEpLCBmYWxzZSwgdHJ1ZSk7XG59XG5cbi8vXG4vL2FkZFNjb3BhYmxlVHlwZShcbi8vICAgICggQ29tcCApID0+IChDb21wICYmIENvbXAucHJvdG90eXBlIGluc3RhbmNlb2YgU3RvcmUpLFxuLy8gICAgZnVuY3Rpb24gcmVTY29wZSggLi4uYXJneiApIHtcbi8vICAgICAgICBsZXQgQmFzZVN0b3JlICAgID0gKCFhcmd6WzBdIHx8IGFyZ3pbMF0ucHJvdG90eXBlIGluc3RhbmNlb2YgU3RvcmUpICYmXG4vLyBhcmd6LnNoaWZ0KCksIHNjb3BlICAgICAgICA9ICghYXJnelswXSB8fCBhcmd6WzBdIGluc3RhbmNlb2YgU2NvcGUgfHwgaXMuZm4oYXJnelswXSkpXG4vLyAmJiBhcmd6LnNoaWZ0KCksIHVzZSAgICAgICAgICA9IChpcy5hcnJheShhcmd6WzBdKSkgJiYgYXJnei5zaGlmdCgpLCBzdGF0ZU1hcCAgICAgPVxuLy8gIXVzZSAmJiAoIWFyZ3pbMF0gfHwgYXJnelswXSBpbnN0YW5jZW9mIFNpbXBsZU9iamVjdFByb3RvKSAmJiBhcmd6LnNoaWZ0KCksXG4vLyBpbml0aWFsU3RhdGUgPSB7fTsgIGxldCBjb21wTmFtZSA9IEJhc2VTdG9yZS5kaXNwbGF5TmFtZSB8fCBCYXNlU3RvcmUubmFtZTsgIHVzZSA9XG4vLyBbLi4uKEJhc2VTdG9yZS51c2UgfHwgW10pLCAuLi4odXNlIHx8IFtdKV07IHN0YXRlTWFwICYmXG4vLyBTY29wZS5zdGF0ZU1hcFRvUmVmTGlzdChzdGF0ZU1hcCwgaW5pdGlhbFN0YXRlLCB1c2UpOyAgY2xhc3MgU3RhdGVTY29wZWRTdG9yZSBleHRlbmRzXG4vLyBCYXNlU3RvcmUgeyBzdGF0aWMgdXNlICAgICAgICAgPSB1c2U7IHN0YXRpYyBkaXNwbGF5TmFtZSA9IFwic3RhdGVTY29wZWQoXCIgKyBjb21wTmFtZSArXG4vLyBcIilcIjsgIGNvbnN0cnVjdG9yKCAuLi5hcmd6ICkgeyBzdXBlcihzY29wZSwgYXJnei5zbGljZShhcmd6WzBdIGluc3RhbmNlb2YgU2NvcGUgPyAxIDpcbi8vIDApKSB9IH0gIHJldHVybiBTdGF0ZVNjb3BlZFN0b3JlOyB9LCBmYWxzZSwgdHJ1ZSApXG5cblxuZXhwb3J0IHtcbiAgICBhZGRTY29wYWJsZVR5cGUsXG4gICAgcmVTY29wZSxcbiAgICBzY29wZVRvU3RhdGVcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWxzL3Njb3BhYmxlLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==