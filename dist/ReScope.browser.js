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
	
				var applier = void 0;
				Object.keys(sm).forEach(function (key) {
					var cpath = path ? path + '.' + key : key;
	
					sm[key] instanceof Scope.scopeRef ? _refs.push(sm[key].path + ':' + cpath) : sm[key] && sm[key] instanceof Function ? key == "$apply" ? applier = sm[key] : actions[key] = sm[key] : sm[key] && sm[key].prototype instanceof Scope.Store ? _refs.push(sm[key].as(cpath)) : state[cpath] = sm[key];
					//: this.stateMapToRefList(sm[key], _refs, path + '.' + key)
				});
				return applier;
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
	  *     parent {scope} @optional parent scope
	  *
	  *     id {string} @optional id ( if this id exist storesMap will be merge on the 'id'
	  *     scope)
	  *     key {string} @optional key of the scope ( if no id is set, the scope id will be (parent.id+'>'+key)
	  *     incrementId {bool} @optional true to add a suffix id, if the provided key or id globally exist
	  *
	  *     state {Object} @optional initial state by store alias
	  *     data {Object} @optional initial data by store alias
	  *
	  *     rootEmitter {bool} @optional true to not being destabilized by parent
	  *     boundedActions {array | regexp} @optional list or regexp of actions not propagated to the parent
	  *     autoDestroy {true | false | 'inherit'}
	  *     persistenceTm {number) if > 0, will wait 'persistenceTm' ms before destroy when
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
	
			if (autoDestroy == 'inherit') autoDestroy = parent && parent._autoDestroy;
	
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
					var hotReloading = void 0;
	
					if (!force && targetCtx._._scope[id] === srcCtx[id] || targetCtx._._scope[id] && targetCtx._._scope[id].constructor === srcCtx[id]) return;
	
					if (!force && targetCtx._._scope[id]) {
						if (!external && !is.fn(targetCtx._._scope[id])) {
							console.info("Rescope Store : ", id, " already exist in this scope ! ( Hot switching the store ) !!!");
							var tmp = targetCtx._._scope[id];
							targetCtx._._scope[id] = srcCtx[id];
							hotReloading = tmp.nextState;
							tmp.destroy();
						}
						if (!external && is.fn(targetCtx._._scope[id])) targetCtx._._scope[id] = srcCtx[id];
	
						//return;
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
	
					if (hotReloading) _this6._mount(id, null, hotReloading);
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
						updated = true;
						storesRevMap[id].refs.forEach(function (ref) {
	
							output[ref.alias] = _this10.retrieve(ref.path);
						});
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
					// @todo : rm this
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
	
				if (!this._stable) return this.once('stable', function (e) {
					return _this15.then(cb);
				});
	
				return cb(this.data);
			}
		}, {
			key: 'onceStableTree',
			value: function onceStableTree(cb) {
				var _this16 = this;
	
				if (this._.unStableChilds) return this.once('stableTree', function (e) {
					return _this16.onceStableTree(cb);
				});
				//if ( !this._stable )
				//	return this.once('stable', e => this.onceStableTree(cb));
	
				return cb(this.data);
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
				var _this17 = this;
	
				var stores = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
				var reason = arguments[1];
	
				//stores.forEach(
				//    id => ( ( !this.stores[ id ] || !this.stores[ id ].retain ) && console.warn(id, reason) )
				//)
				stores.forEach(function (id) {
					return _this17.stores[id] && _this17.stores[id].retain && _this17.stores[id].retain(reason);
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
				var _this18 = this;
	
				var stores = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
				var reason = arguments[1];
	
				stores.forEach(function (id) {
					return _this18.stores[id] && _this18.stores[id].dispose && _this18.stores[id].dispose(reason);
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
				var _this19 = this;
	
				if (reason) {
					if (this.__locks[reason] == 0) console.error("Release more than locking !", reason);
					this.__locks[reason] = this.__locks[reason] || 0;
					this.__locks[reason]--;
				}
				if (!reason && this.__locks.all == 0) console.error("Release more than locking !");
	
				this.__locks.all--;
				if (!this.__locks.all) {
					if (this._.stabilizerTM) return;
					this._.stabilizerTM && clearTimeout(this._.stabilizerTM);
	
					this._.stabilizerTM = setTimeout(function (e) {
						_this19._.stabilizerTM = null;
						if (_this19.__locks.all) return;
	
						_this19._.propagTM && clearTimeout(_this19._.propagTM);
						_this19._rev++;
						_this19._stable = true;
						_this19.emit("stable", _this19);
	
						!_this19.dead && _this19._propag(); // stability can induce destroy
					});
				}
			}
	
			/**
	   * Propag stores updates basing theirs last updates
	   */
	
		}, {
			key: 'propag',
			value: function propag() {
				var _this20 = this;
	
				this._.propagTM && clearTimeout(this._.propagTM);
				this._.propagTM = setTimeout(function (e) {
					_this20._.propagTM = null;
					_this20._propag();
				}, 2);
			}
		}, {
			key: '_propag',
			value: function _propag() {
				var _this21 = this;
	
				if (this._.followers.length) this._.followers.forEach(function (_ref5) {
					var obj = _ref5[0],
					    key = _ref5[1],
					    as = _ref5[2],
					    lastRevs = _ref5[3],
					    remaps = _ref5[3];
	
					var data = _this21.getUpdates(lastRevs);
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
	
			/**
	   * is stable
	   * @returns bool
	   */
	
		}, {
			key: 'isStableTree',
			value: function isStableTree() {
				return !this._.unStableChilds;
			}
		}, {
			key: '_addChild',
			value: function _addChild(ctx) {
				var _this22 = this;
	
				this._.childScopes.push(ctx);
				this._.seenChilds++;
				var lists = {
					'stable': function stable(s) {
						_this22._.unStableChilds--;
						if (!_this22._.unStableChilds) _this22.emit("stableTree", _this22);
					},
					'unstable': function unstable(s) {
						_this22._.unStableChilds++;
						if (1 == _this22._.unStableChilds) _this22.emit("unstableTree", _this22);
					},
					'stableTree': function stableTree(s) {
						_this22._.unStableChilds--;
						if (!_this22._.unStableChilds) _this22.emit("stableTree", _this22);
					},
					'unstableTree': function unstableTree(s) {
						_this22._.unStableChilds++;
						if (1 == _this22._.unStableChilds) _this22.emit("unstableTree", _this22);
					},
					'destroy': function destroy(ctx) {
						if (ctx._.unStableChilds) _this22._.unStableChilds--;
						if (!ctx.isStable()) _this22._.unStableChilds--;
	
						if (!_this22._.unStableChilds) _this22.emit("stableTree", _this22);
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
				var _this23 = this;
	
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
							_this23.then(function (s) {
								!_this23.__retains.all && !_this23.dead && _this23.destroy();
							});
						}, this._.persistenceTm);
					} else {
						this.then(function (s) {
							return !_this23.__retains.all && !_this23.dead && _this23.destroy();
						});
					}
				}
			}
	
			/**
	   * order destroy of local stores
	   */
	
		}, {
			key: 'destroy',
			value: function destroy() {
				var _this24 = this;
	
				var ctx = this._._scope;
				//console.warn("destroy", this._id);
				this._getAllChilds().map(function (scope) {
					return scope.destroy();
				});
				for (var key in ctx) {
					if (!is.fn(ctx[key])) {
						if (key == "$parent") continue;
						!ctx[key]._autoDestroy && ctx[key].dispose("scoped");
					}
				}this._.stabilizerTM && clearTimeout(this._.stabilizerTM);
				this._.propagTM && clearTimeout(this._.propagTM);
				Object.keys(this._._listening).forEach(function (id) {
					return id !== "$parent" && _this24._._scope[id].removeListener(_this24._._listening[id]);
				});
				while (this._._mixedList.length) {
					this._._mixed[0].removeListener(this._._mixedList.shift());
					this._._mixed.shift().dispose("mixedTo");
				}
				[].concat(_toConsumableArray(this._.followers)).map(function (follower) {
					return _this24.unBind.apply(_this24, _toConsumableArray(follower));
				});
				if (this._._parentList) {
					this.parent._rmChild(this);
					this.parent.removeListener(this._._parentList);
					this.parent.dispose("isMyParent");
					this._._parentList = null;
				}
				this.dead = true;
				delete openScopes[this._id];
				this.emit("destroy", this);
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
						_this._require.push(ref[3] || ref2[ref2.length - 1]); // require check value of the aliased imported value
						return key.substr(1);
					}
					return key;
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
				    refsCount = 0,
				    refs = !cfg.norefs && is.array(this._use) && this._use.reduce(function (map, key) {
					var ref = _this6.$scope.parseRef(key),
					    store = _this6.$stores[ref.storeId];
					if (store && is.rsStore(store) && !store.scopeObj._.isLocalId) refsCount++, map[ref.alias] = ref.path;
	
					return map;
				}, {}),
				    stateKeys = Object.keys(this.state),
				    stateRefs = stateKeys.map(function (k) {
					return _this6.state[k];
				}),
				    inRefsCount = 0,
				    inRefs = !cfg.norefs && Object.keys(this.data).reduce(function (map, key) {
					var ref = stateRefs.indexOf(_this6.data[key]);
					if (ref != -1) inRefsCount++, map[key] = stateKeys[ref];
					return map;
				}, {}),
				    snap = {
					state: this.state && (cfg.norefs ? _extends({}, this.state) : Object.keys(this.state).reduce(function (h, k) {
						return !refs[k] && (h[k] = _this6.state[k]), h;
					}, {})),
					data: (this.data && this.data.__proto__ === objProto ? inRefs && Object.keys(this.data).reduce(function (h, k) {
						return !inRefs[k] && (h[k] = _this6.data[k]), h;
					}, {}) || _extends({}, this.data) : (is.bool(this.data) || is.number(this.data) || is.string(this.data)) && this.data) || undefined
	
				};
	
				refs && refsCount && (snap.refs = refs);
				inRefs && inRefsCount && (snap.inRefs = stateKeys.length === inRefsCount ? true : inRefs);
	
				keyWalknSet(output, sId + '/' + this.name, snap);
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
					snapshot.refs && Object.keys(snapshot.refs).forEach(function (key) {
						//todo
						_this7.state[key] = _this7.$scope.retrieve(snapshot.refs[key]);
					});
	
					if (snapshot.inRefs === true) this.data = this.state;else {
						this.data = snapshot.data;
						snapshot.inRefs && Object.keys(snapshot.inRefs).forEach(function (key) {
							//todo
							_this7.data[key] = _this7.state[snapshot.inRefs[key]];
							//else
							//    console.warn('not found : ', key, snap && snap.refs[ key ])
						});
					}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgY2M4NTgyZWM3YjI4NWE1YmQ2YmMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9TY29wZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvaXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9pcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL0VtaXR0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9zaG9ydGlkL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vc2hvcnRpZC9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9zaG9ydGlkL2xpYi9hbHBoYWJldC5qcyIsIndlYnBhY2s6Ly8vLi9+L3Nob3J0aWQvbGliL3JhbmRvbS9yYW5kb20tZnJvbS1zZWVkLmpzIiwid2VicGFjazovLy8uL34vc2hvcnRpZC9saWIvZW5jb2RlLmpzIiwid2VicGFjazovLy8uL34vc2hvcnRpZC9saWIvcmFuZG9tL3JhbmRvbS1ieXRlLWJyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9zaG9ydGlkL2xpYi9kZWNvZGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9zaG9ydGlkL2xpYi9idWlsZC5qcyIsIndlYnBhY2s6Ly8vLi9+L3Nob3J0aWQvbGliL2lzLXZhbGlkLmpzIiwid2VicGFjazovLy8uL34vc2hvcnRpZC9saWIvdXRpbC9jbHVzdGVyLXdvcmtlci1pZC1icm93c2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9TdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvVGFza1NlcXVlbmNlci5qcyIsIndlYnBhY2s6Ly8vLi9+L3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvc2NvcGFibGUuanMiXSwibmFtZXMiOlsiJGdsb2JhbCIsIndpbmRvdyIsImdsb2JhbCIsIlJTIiwiX19fcmVzY29wZSIsImNvbnNvbGUiLCJ3YXJuIiwiU3RvcmUiLCJTY29wZSIsIkNvbnRleHQiLCJyZVNjb3BlIiwic2NvcGVUb1N0YXRlIiwicmVTY29wZVN0YXRlIiwiYWRkU2NvcGFibGVUeXBlIiwic2NvcGVSZWYiLCJtYXAiLCJrZXkiLCJyZXF1aXJlIiwid2Fsa25TZXQiLCJ3YWxrbkdldCIsImtleVdhbGtuU2V0Iiwia2V5V2Fsa25HZXQiLCJFdmVudEVtaXR0ZXIiLCJzaG9ydGlkIiwiX19wcm90b19fcHVzaCIsInRhcmdldCIsImlkIiwicGFyZW50IiwiZm4iLCJwcm90b3R5cGUiLCJfIiwib3BlblNjb3BlcyIsIlNpbXBsZU9iamVjdFByb3RvIiwiY29uc3RydWN0b3IiLCJzY29wZXMiLCJza2V5IiwiaXMiLCJhcnJheSIsInNvcnQiLCJhIiwiYiIsImZpcnN0bmFtZSIsImpvaW4iLCJzbSIsInN0YXRlIiwiX3JlZnMiLCJhY3Rpb25zIiwicGF0aCIsImFwcGxpZXIiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsImNwYXRoIiwicHVzaCIsIkZ1bmN0aW9uIiwiYXMiLCJzdG9yZXNNYXAiLCJ1cHBlclNjb3BlIiwic25hcHNob3QiLCJkYXRhIiwiaW5jcmVtZW50SWQiLCJwZXJzaXN0ZW5jZVRtIiwiYXV0b0Rlc3Ryb3kiLCJyb290RW1pdHRlciIsImJvdW5kZWRBY3Rpb25zIiwia2V5UElEIiwiX2lkIiwiZ2VuZXJhdGUiLCJiYXNlSWQiLCJrZXlJbmRleCIsImlzTG9jYWxJZCIsInJlZ2lzdGVyIiwiaSIsIl9yZXYiLCJzdG9yZXMiLCJfYXV0b0Rlc3Ryb3kiLCJkZWFkIiwiRXJyb3IiLCJzb3VyY2VzIiwiY2hpbGRTY29wZXMiLCJjaGlsZFNjb3Blc0xpc3QiLCJ1blN0YWJsZUNoaWxkcyIsInNlZW5DaGlsZHMiLCJfX3JldGFpbnMiLCJhbGwiLCJfX2xvY2tzIiwiX2JvdW5kZWRBY3Rpb25zIiwidGVzdCIsImluY2x1ZGVzIiwiYmluZCIsIl9saXN0ZW5pbmciLCJfc2NvcGUiLCJfbWl4ZWQiLCJfbWl4ZWRMaXN0IiwiZm9sbG93ZXJzIiwicmV0YWluIiwiX3N0YWJsZSIsIndhaXQiLCJvbiIsIl9wYXJlbnRMaXN0IiwicmVsZWFzZSIsIl9wcm9wYWciLCJfYWRkQ2hpbGQiLCJyZXN0b3JlIiwic2V0VGltZW91dCIsImRpc3Bvc2UiLCJzdG9yZXNMaXN0IiwiX21vdW50IiwiayIsImFyZ3VtZW50cyIsInJlZiIsInNuYXAiLCJwYXJzZVJlZiIsInN0b3JlSWQiLCJyZWR1Y2VSaWdodCIsIm1vdW50ZWQiLCJjdHgiLCJzdG9yZSIsInRhc2tRdWV1ZSIsInJzU3RvcmVDbGFzcyIsIm5hbWUiLCJsZW5ndGgiLCJzaGlmdCIsInJzU2NvcGVDbGFzcyIsIiRwYXJlbnQiLCJtb3VudCIsInNsaWNlIiwicnNTdG9yZSIsInVuZGVmaW5lZCIsInNldFN0YXRlIiwiX3dhdGNoU3RvcmUiLCJpc1N0YWJsZSIsInByb3BhZyIsInRhcmdldEN0eCIsImxpc3RzIiwicmVsaW5rIiwiX19vcmlnaW4iLCJzaW5nbGV0b24iLCJzcmNDdHgiLCJleHRlcm5hbCIsImZvcmNlIiwibGN0eCIsImhvdFJlbG9hZGluZyIsImluZm8iLCJ0bXAiLCJuZXh0U3RhdGUiLCJkZXN0cm95IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwiZ2V0Iiwic2V0IiwidiIsImFjdGl2ZUFjdGlvbnMiLCJyc1Njb3BlIiwiYWN0IiwiaGFzT3duUHJvcGVydHkiLCJfX3RhcmdldFN0b3JlcyIsImRpc3BhdGNoIiwib2JqIiwic2V0SW5pdGlhbCIsInJldk1hcCIsImxhc3RSZXZzIiwicmVmS2V5cyIsInN0cmluZyIsInJlZHVjZSIsInJldnMiLCJyZXYiLCJyZWZzIiwicmV0YWluU3RvcmVzIiwiZ2V0VXBkYXRlcyIsImRpc3Bvc2VTdG9yZXMiLCJzcGxpY2UiLCJ0byIsInJlZkxpc3QiLCJtaXhlZENXVW5tb3VudCIsInVuTW91bnRLZXkiLCJpc1JlYWN0Q29tcG9uZW50IiwidW5CaW5kIiwiYWxpYXMiLCJyZXRyaWV2ZSIsInNwbGl0IiwicmV0cmlldmVTdG9yZSIsInN0b3Jlc1Jldk1hcCIsImxvY2FsIiwidXBkYXRlZCIsImdldFN0b3Jlc1JldnMiLCJvdXRwdXQiLCJfZ2V0UmV2TWFwIiwiY2hpbGRzIiwiX2dldEFsbENoaWxkcyIsImNmZyIsInBhcmVudEFsaWFzIiwic2lkIiwic2VyaWFsaXplX2V4IiwiZXhjbHVkZSIsIndpdGhDaGlsZHMiLCJ3aXRoUGFyZW50cyIsIndpdGhNaXhlZCIsIm5vcmVmcyIsImFsaWFzZXMiLCJzZXJpYWxpemUiLCJ3aXRoQ2hpbGQiLCJoIiwiYm9vbCIsInRha2VTbmFwc2hvdEJ5S2V5Iiwic3RhcnRzV2l0aCIsInN1YnN0ciIsImdldFNuYXBzaG90QnlLZXkiLCJkZWxldGVTbmFwc2hvdEJ5S2V5IiwicmVwbGFjZSIsInBTdGF0ZSIsIl9yZWYiLCJhY3Rpb24iLCJhcmd6Iiwic3RhY2siLCJiQWN0cyIsInRyaWdnZXIiLCJjYiIsIm9uY2UiLCJ0aGVuIiwib25jZVN0YWJsZVRyZWUiLCJyZWFzb24iLCJlbWl0IiwiZXJyb3IiLCJzdGFiaWxpemVyVE0iLCJjbGVhclRpbWVvdXQiLCJwcm9wYWdUTSIsInJlbWFwcyIsIndhc1N0YWJsZSIsImluZGV4T2YiLCJ1biIsImRlc3Ryb3lUTSIsInNjb3BlIiwicmVtb3ZlTGlzdGVuZXIiLCJmb2xsb3dlciIsIl9ybUNoaWxkIiwiaXNQcm90b3R5cGVPZiIsInZhbHVlIiwiaXNLZXkiLCJmaWx0ZXIiLCJFbWl0dGVyIiwiX2V2ZW50cyIsImV2dCIsIlRhc2tTZXF1ZW5jZXIiLCJvYmpQcm90byIsImdldFByb3RvdHlwZU9mIiwiX3N0YXRpYyIsImdldFNjb3BlIiwic3RhdGljU2NvcGUiLCJ3YXRjaHMiLCJ1c2UiLCJhcHBseSIsImluaXRpYWxTdGF0ZSIsImRlZmF1bHRTdGF0ZSIsImFwcGxpZWQiLCJfdWlkIiwiX29uU3RhYmlsaXplIiwiX3BlcnNpc3RlbmNlVG0iLCJfY2ZnIiwic2NvcGVPYmoiLCIkc2NvcGUiLCIkc3RvcmVzIiwiJGFjdGlvbnMiLCIkZGlzcGF0Y2giLCJfcmV2cyIsIl9yZXF1aXJlIiwiX3NvdXJjZXMiLCJfdXNlIiwibWF0Y2giLCJyZWYyIiwiX2ZvbGxvd2VycyIsIl9jaGFuZ2VzU1ciLCJfYWZ0ZXJDb25zdHJ1Y3RvciIsImluaXRpYWxEYXRhIiwic2hvdWxkQXBwbHkiLCJtYW5hZ2VkIiwibkRhdGFzIiwiciIsImNEYXRhcyIsImlzQ29tcGxldGUiLCJmb2xsb3ciLCJjYWxsIiwiY2hhbmdlcyIsInJlZmluZSIsIl9fcHJvdG9fXyIsIl9zdGFiaWxpemVyIiwicHVzaFRhc2siLCJucyIsImRvV2FpdCIsIm9yaWdpbiIsImluaXRpYWxPdXRwdXRzIiwicyIsImhhc0RhdGFDaGFuZ2UiLCJzdGFibGUiLCJfbmV4dFN0YXRlIiwibmV4dERhdGEiLCJzeW5jIiwiY2hhbmdlIiwicHVzaFN0YXRlIiwic3RhYmlsaXplIiwic0lkIiwicmVmc0NvdW50Iiwic3RhdGVLZXlzIiwic3RhdGVSZWZzIiwiaW5SZWZzQ291bnQiLCJpblJlZnMiLCJudW1iZXIiLCJpbW1lZGlhdGUiLCJwcmV2aW91cyIsIm1lIiwic2hvdWxkUHJvcGFnIiwiX2Rlc3Ryb3lUTSIsInJlbW92ZUFsbExpc3RlbmVycyIsImNTdG9yZSIsInRhcmdldFJldnMiLCJ0YXJnZXRTY29wZSIsIl9rZXkiLCJkZWZhdWx0TmFtZSIsIm8iLCJjdXJXZWlnaHQiLCJtYXhXZWlnaHQiLCJtaW5XZWlnaHQiLCJ0YXNrQ291bnQiLCJkZVN5bmMiLCJkZVN5bmNNYXhUYXNrcyIsInRhc2siLCJpc1J1bm5pbmciLCJlcnJvckNhdGNoZXIiLCJsYXN0RXJyb3IiLCJkaXNhYmxlIiwiaGFuZGxlRXJyb3IiLCJydW5Ob3ciLCJlbmFibGUiLCJhZGRFdmVudExpc3RlbmVyIiwicHJvY2VzcyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJydW4iLCJmcm9tIiwiRGF0ZSIsIm5vdyIsIndlaWdodCIsIk1hdGgiLCJtYXgiLCJtaW4iLCJzY29wYWJsZXMiLCJoYW5kbGUiLCJtZW1iZXIiLCJzdGF0ZVNjb3BlIiwiaXNTY29wYWJsZVR5cGUiLCJDb21wIiwiYXBwbHlTY29wYWJsZVR5cGUiLCJhcmd6MiJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNUQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUEvQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTJCQSxLQUFJQSxVQUFXLE9BQU9DLE1BQVAsS0FBa0IsV0FBbkIsR0FBa0NBLE1BQWxDLEdBQTJDQyxNQUF6RDs7QUFNQSxLQUFNQyxLQUFLSCxRQUFRSSxVQUFSLElBQXNCLEVBQWpDO0FBQ0EsS0FBS0osUUFBUUksVUFBYixFQUEwQjtBQUN6QkMsV0FBUUMsSUFBUixDQUFhLCtEQUFiO0FBQ0EsRUFGRCxNQUdLOztBQUVKTixXQUFRSSxVQUFSLEdBQXFCRCxFQUFyQjtBQUNBLG1CQUFNSSxLQUFOO0FBQ0E7QUFDQUosTUFBR0ssS0FBSDtBQUNBTCxNQUFHTSxPQUFIO0FBQ0FOLE1BQUdJLEtBQUg7QUFDQUosTUFBR08sT0FBSDtBQUNBUCxNQUFHUSxZQUFIO0FBQ0FSLE1BQUdTLFlBQUg7QUFDQVQsTUFBR1UsZUFBSDtBQUNBVixNQUFHVyxRQUFILEdBQ0MsU0FBU0EsUUFBVCxDQUFtQkMsR0FBbkIsRUFBd0JDLEdBQXhCLEVBQThCO0FBQzdCRCxTQUFJQyxHQUFKLElBQVcsSUFBSSxnQkFBTUYsUUFBVixDQUFtQkMsSUFBSUMsR0FBSixDQUFuQixDQUFYO0FBQ0EsWUFBT0QsR0FBUDtBQUNBLElBSkY7QUFNQTttQkFDY1osRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hEZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QSxZQUFXLE1BQU07QUFDakIsYUFBWSxRQUFRO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxNQUFNO0FBQ2pCLGFBQVksUUFBUTtBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxNQUFNO0FBQ2pCLFlBQVcsTUFBTTtBQUNqQixhQUFZLFFBQVE7QUFDcEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsTUFBTTtBQUNqQixZQUFXLE1BQU07QUFDakIsYUFBWSxRQUFRO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLE1BQU07QUFDakIsYUFBWSxRQUFRO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxNQUFNO0FBQ2pCLGFBQVksUUFBUTtBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsTUFBTTtBQUNqQixhQUFZLFFBQVE7QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxNQUFNO0FBQ2pCLGFBQVksUUFBUTtB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TDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0JBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFxQjtBQUNyQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0NBQXFDOztBQUVyQztBQUNBO0FBQ0E7O0FBRUEsNEJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLDZCQUE0QixVQUFVOzs7Ozs7Ozs7Ozs7OztBQzVKdEM7Ozs7OztxTUEzQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTZCQSxLQUFNekYsb0JBQXNC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TUFBTyxDQUFQLENBQWIsU0FBNEIxSSxJQUE1QixFQUFQO0FBQ1AsVUFSRDtBQVNIO0FBQ0QsWUFBT3lJLGtCQUFrQnpJLEtBQU0sQ0FBTixDQUFsQixFQUE2QkEsS0FBS3hGLEtBQUwsQ0FBVyxDQUFYLENBQTdCLEVBQTRDLEtBQTVDLEVBQW1ELElBQW5ELENBQVA7QUFDSDs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7U0FJSWpILGUsR0FBQUEsZTtTQUNBSCxPLEdBQUFBLE87U0FDQUMsWSxHQUFBQSxZIiwiZmlsZSI6Ii4uLy4uL2Rpc3QvUmVTY29wZS5icm93c2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGNjODU4MmVjN2IyODVhNWJkNmJjIiwiLypcbiAqIENvcHlyaWdodCAoYykgIDIwMTggV2lzZSBXaWxkIFdlYiAuXG4gKlxuICogIE1JVCBMaWNlbnNlXG4gKlxuICogIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqICBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiAgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqICBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqICBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqICBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcbiAqICBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqICBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiAgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiAgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiAgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiAgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcbiAqICBTT0ZUV0FSRS5cbiAqXG4gKiBAYXV0aG9yIDogTmF0aGFuYWVsIEJyYXVuXG4gKiBAY29udGFjdCA6IGNhaXBpbGFic0BnbWFpbC5jb21cbiAqL1xuXG5sZXQgJGdsb2JhbCA9ICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykgPyB3aW5kb3cgOiBnbG9iYWw7XG5cbmltcG9ydCBTY29wZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gXCIuL1Njb3BlXCI7XG5pbXBvcnQgU3RvcmUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tIFwiLi9TdG9yZVwiO1xuaW1wb3J0IHthZGRTY29wYWJsZVR5cGUsIHJlU2NvcGUsIHNjb3BlVG9TdGF0ZX0gZnJvbSBcIi4vdXRpbHMvc2NvcGFibGVcIjtcblxuY29uc3QgUlMgPSAkZ2xvYmFsLl9fX3Jlc2NvcGUgfHwge307XG5pZiAoICRnbG9iYWwuX19fcmVzY29wZSApIHtcblx0Y29uc29sZS53YXJuKFwiUmVTY29wZSBpcyBkZWZpbmVkIG11bHRpcGxlIHRpbWVzICEhIFxcbkNoZWNrIHlvdSdyZSBwYWNrYWdpbmdcIilcbn1cbmVsc2Uge1xuXHRcblx0JGdsb2JhbC5fX19yZXNjb3BlID0gUlM7XG5cdFNjb3BlLlN0b3JlICAgICAgICA9IFN0b3JlO1xuXHQvL1JTLmNvbnNvbGUgICAgICAgICA9IGNvbnNvbGU7XG5cdFJTLlNjb3BlICAgICAgICAgICA9IFNjb3BlO1xuXHRSUy5Db250ZXh0ICAgICAgICAgPSBTY29wZTtcblx0UlMuU3RvcmUgICAgICAgICAgID0gU3RvcmU7XG5cdFJTLnJlU2NvcGUgICAgICAgICA9IHJlU2NvcGU7XG5cdFJTLnNjb3BlVG9TdGF0ZSAgICA9IHNjb3BlVG9TdGF0ZTtcblx0UlMucmVTY29wZVN0YXRlICAgID0gc2NvcGVUb1N0YXRlO1xuXHRSUy5hZGRTY29wYWJsZVR5cGUgPSBhZGRTY29wYWJsZVR5cGU7XG5cdFJTLnNjb3BlUmVmICAgICAgICA9XG5cdFx0ZnVuY3Rpb24gc2NvcGVSZWYoIG1hcCwga2V5ICkge1xuXHRcdFx0bWFwW2tleV0gPSBuZXcgU2NvcGUuc2NvcGVSZWYobWFwW2tleV0pO1xuXHRcdFx0cmV0dXJuIG1hcDtcblx0XHR9O1xuXHRcbn1cbmV4cG9ydCBkZWZhdWx0IFJTO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC5qcyIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpICAyMDE4IFdpc2UgV2lsZCBXZWIgLlxuICpcbiAqICBNSVQgTGljZW5zZVxuICpcbiAqICBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiAgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqICB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiAgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiAgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiAgVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG4gKiAgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqICBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG4gKiAgU09GVFdBUkUuXG4gKlxuICogQGF1dGhvciA6IE5hdGhhbmFlbCBCcmF1blxuICogQGNvbnRhY3QgOiBjYWlwaWxhYnNAZ21haWwuY29tXG4gKi9cblxuXG52YXIgaXMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi91dGlscy9pcycpLFxuICAgIHsgd2Fsa25TZXQsIHdhbGtuR2V0LCBrZXlXYWxrblNldCwga2V5V2Fsa25HZXQgfSA9IHJlcXVpcmUoJy4vdXRpbHMvdXRpbHMnKSxcbiAgICBFdmVudEVtaXR0ZXIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL3V0aWxzL0VtaXR0ZXInKSxcbiAgICBzaG9ydGlkICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlKCdzaG9ydGlkJylcblx0LCBfX3Byb3RvX19wdXNoICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID0gKCB0YXJnZXQsIGlkLCBwYXJlbnQgKSA9PiB7XG5cdCAgICBsZXQgZm4gICAgICAgPSBmdW5jdGlvbiAoKSB7XG5cdCAgICB9O1xuXHQgICAgZm4ucHJvdG90eXBlID0gcGFyZW50ID8gbmV3IHBhcmVudC5fW2lkXSgpIDogdGFyZ2V0W2lkXSB8fCB7fTtcblx0ICAgIHRhcmdldFtpZF0gICA9IG5ldyBmbigpO1xuXHQgICAgdGFyZ2V0Ll9baWRdID0gZm47XG4gICAgfSxcblx0b3BlblNjb3BlcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID0ge30sXG5cdFNpbXBsZU9iamVjdFByb3RvICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA9ICh7fSkuY29uc3RydWN0b3I7XG5cbi8qKlxuICogQmFzZSBTY29wZSBvYmplY3RcbiAqL1xuY2xhc3MgU2NvcGUgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuXHRzdGF0aWMgZ2V0U2NvcGUoIHNjb3BlcyApIHtcblx0XHRsZXQgc2tleSA9IGlzLmFycmF5KHNjb3BlcykgPyBzY29wZXMuc29ydCgoIGEsIGIgKSA9PiB7XG5cdFx0XHRpZiAoIGEuZmlyc3RuYW1lIDwgYi5maXJzdG5hbWUgKSByZXR1cm4gLTE7XG5cdFx0XHRpZiAoIGEuZmlyc3RuYW1lID4gYi5maXJzdG5hbWUgKSByZXR1cm4gMTtcblx0XHRcdHJldHVybiAwO1xuXHRcdH0pLmpvaW4oJysnKSA6IHNjb3Blcztcblx0XHRyZXR1cm4gb3BlblNjb3Blc1tza2V5XSA9IG9wZW5TY29wZXNbc2tleV0gfHwgbmV3IFNjb3BlKHt9LCB7IGlkOiBza2V5IH0pO1xuXHR9O1xuXHRcblx0XG5cdC8qKlxuXHQgKiBnZXQgYSBwYXJzZWQgcmVmZXJlbmNlIGxpc3QgZnJvbSBzdGF0ZU1hcFxuXHQgKiBAcGFyYW0gX3JlZlxuXHQgKiBAcmV0dXJucyB7e3N0b3JlSWQsIHBhdGgsIGFsaWFzOiAqLCByZWY6ICp9fVxuXHQgKi9cblx0c3RhdGljIHN0YXRlTWFwVG9SZWZMaXN0KCBzbSwgc3RhdGUgPSB7fSwgX3JlZnMgPSBbXSwgYWN0aW9ucyA9IHt9LCBwYXRoID0gXCJcIiApIHtcblx0XHRsZXQgYXBwbGllcjtcblx0XHRPYmplY3Qua2V5cyhzbSkuZm9yRWFjaChcblx0XHRcdGtleSA9PiB7XG5cdFx0XHRcdGxldCBjcGF0aCA9IHBhdGggPyBwYXRoICsgJy4nICsga2V5IDoga2V5O1xuXHRcdFx0XHRcblx0XHRcdFx0c21ba2V5XSBpbnN0YW5jZW9mIFNjb3BlLnNjb3BlUmVmXG5cdFx0XHRcdD8gX3JlZnMucHVzaChzbVtrZXldLnBhdGggKyAnOicgKyBjcGF0aClcblx0XHRcdFx0OiAoc21ba2V5XSAmJiBzbVtrZXldIGluc3RhbmNlb2YgRnVuY3Rpb24pXG5cdFx0XHRcdCAgPyBrZXkgPT0gXCIkYXBwbHlcIlxuXHRcdFx0XHQgICAgPyBhcHBsaWVyID0gc21ba2V5XVxuXHRcdFx0XHQgICAgOiBhY3Rpb25zW2tleV0gPSBzbVtrZXldXG5cdFx0XHRcdCAgOiAoc21ba2V5XSAmJiBzbVtrZXldLnByb3RvdHlwZSBpbnN0YW5jZW9mIFNjb3BlLlN0b3JlKVxuXHRcdFx0XHQgICAgPyBfcmVmcy5wdXNoKHNtW2tleV0uYXMoY3BhdGgpKVxuXHRcdFx0XHQgICAgOiBzdGF0ZVtjcGF0aF0gPSBzbVtrZXldXG5cdFx0XHRcdC8vOiB0aGlzLnN0YXRlTWFwVG9SZWZMaXN0KHNtW2tleV0sIF9yZWZzLCBwYXRoICsgJy4nICsga2V5KVxuXHRcdFx0fVxuXHRcdClcblx0XHRyZXR1cm4gYXBwbGllcjtcblx0fVxuXHRcblx0c3RhdGljIHBlcnNpc3RlbmNlVG0gPSAxOy8vIGlmID4gMCwgd2lsbCB3YWl0ICdwZXJzaXN0ZW5jZVRtJyBtcyBiZWZvcmUgZGVzdHJveVxuXHQvLyB3aGVuXG5cdC8vIGRpc3Bvc2UgcmVhY2ggMFxuXHRzdGF0aWMgU3RvcmUgICAgPSBudWxsO1xuXHRzdGF0aWMgc2NvcGVSZWYgPSBmdW5jdGlvbiBzY29wZVJlZiggcGF0aCApIHtcblx0XHR0aGlzLnBhdGggPSBwYXRoO1xuXHR9O1xuXHRzdGF0aWMgc2NvcGVzICAgPSBvcGVuU2NvcGVzOy8vIGFsbCBhY3RpdmUgc2NvcGVzXG5cdFxuXHRcblx0LyoqXG5cdCAqIEluaXQgYSBSZVNjb3BlIHNjb3BlXG5cdCAqXG5cdCAqIEBwYXJhbSBzdG9yZXNNYXAge09iamVjdH0gT2JqZWN0IHdpdGggdGhlIGluaXRpYWwgc3RvcmVzIGRlZmluaXRpb24gLyBpbnN0YW5jZXNcblx0ICogQHBhcmFtIGNvbmZpZyB7T2JqZWN0fSBTY29wZSBjb25maWdcblx0ICoge1xuXHQgKiAgICAgcGFyZW50IHtzY29wZX0gQG9wdGlvbmFsIHBhcmVudCBzY29wZVxuXHQgKlxuXHQgKiAgICAgaWQge3N0cmluZ30gQG9wdGlvbmFsIGlkICggaWYgdGhpcyBpZCBleGlzdCBzdG9yZXNNYXAgd2lsbCBiZSBtZXJnZSBvbiB0aGUgJ2lkJ1xuXHQgKiAgICAgc2NvcGUpXG5cdCAqICAgICBrZXkge3N0cmluZ30gQG9wdGlvbmFsIGtleSBvZiB0aGUgc2NvcGUgKCBpZiBubyBpZCBpcyBzZXQsIHRoZSBzY29wZSBpZCB3aWxsIGJlIChwYXJlbnQuaWQrJz4nK2tleSlcblx0ICogICAgIGluY3JlbWVudElkIHtib29sfSBAb3B0aW9uYWwgdHJ1ZSB0byBhZGQgYSBzdWZmaXggaWQsIGlmIHRoZSBwcm92aWRlZCBrZXkgb3IgaWQgZ2xvYmFsbHkgZXhpc3Rcblx0ICpcblx0ICogICAgIHN0YXRlIHtPYmplY3R9IEBvcHRpb25hbCBpbml0aWFsIHN0YXRlIGJ5IHN0b3JlIGFsaWFzXG5cdCAqICAgICBkYXRhIHtPYmplY3R9IEBvcHRpb25hbCBpbml0aWFsIGRhdGEgYnkgc3RvcmUgYWxpYXNcblx0ICpcblx0ICogICAgIHJvb3RFbWl0dGVyIHtib29sfSBAb3B0aW9uYWwgdHJ1ZSB0byBub3QgYmVpbmcgZGVzdGFiaWxpemVkIGJ5IHBhcmVudFxuXHQgKiAgICAgYm91bmRlZEFjdGlvbnMge2FycmF5IHwgcmVnZXhwfSBAb3B0aW9uYWwgbGlzdCBvciByZWdleHAgb2YgYWN0aW9ucyBub3QgcHJvcGFnYXRlZCB0byB0aGUgcGFyZW50XG5cdCAqICAgICBhdXRvRGVzdHJveSB7dHJ1ZSB8IGZhbHNlIHwgJ2luaGVyaXQnfVxuXHQgKiAgICAgcGVyc2lzdGVuY2VUbSB7bnVtYmVyKSBpZiA+IDAsIHdpbGwgd2FpdCAncGVyc2lzdGVuY2VUbScgbXMgYmVmb3JlIGRlc3Ryb3kgd2hlblxuXHQgKiAgICAgZGlzcG9zZSByZWFjaCAwIGF1dG9EZXN0cm95ICB7Ym9vbH0gd2lsbCB0cmlnZ2VyIHJldGFpbiAmIGRpc3Bvc2UgYWZ0ZXIgc3RhcnRcblx0ICogIH1cblx0ICogQHJldHVybnMge1Njb3BlfVxuXHQgKi9cblx0Y29uc3RydWN0b3IoIHN0b3Jlc01hcCwgeyBwYXJlbnQsIHVwcGVyU2NvcGUsIGtleSwgaWQsIHNuYXBzaG90LCBzdGF0ZSwgZGF0YSwgaW5jcmVtZW50SWQgPSAhIWtleSwgcGVyc2lzdGVuY2VUbSwgYXV0b0Rlc3Ryb3ksIHJvb3RFbWl0dGVyLCBib3VuZGVkQWN0aW9ucyB9ID0ge30gKSB7XG5cdFx0c3VwZXIoKTtcblx0XHR2YXIgXyA9IHtcblx0XHRcdGtleVBJRDogKHVwcGVyU2NvcGUgJiYgdXBwZXJTY29wZS5faWQgfHwgcGFyZW50ICYmIHBhcmVudC5faWQgfHwgc2hvcnRpZC5nZW5lcmF0ZSgpKSxcblx0XHRcdGtleSxcblx0XHRcdGluY3JlbWVudElkLFxuXHRcdFx0YmFzZUlkOiBpZFxuXHRcdH0sIGtleUluZGV4O1xuXHRcdFxuXHRcdGlkID0gaWQgfHwga2V5ICYmIChfLmtleVBJRCArICc+JyArIGtleSk7XG5cdFx0XG5cdFx0Xy5pc0xvY2FsSWQgPSAhaWQ7XG5cdFx0XG5cdFx0Ly9pZiAoIHBhcmVudCAmJiBrZXkgKSB7XG5cdFx0Ly8gICAga2V5SW5kZXggPSBwYXJlbnQuXy5jaGlsZFNjb3Blcy5maW5kKGN0eD0+KGN0eC5faWQ9PWlkKSk7XG5cdFx0Ly8gICAgaWYgKCBrZXlJbmRleCA9PSAtMSApIGtleUluZGV4ID0gcGFyZW50Ll8uc2VlbkNoaWxkcztcblx0XHQvLyAgICBrZXlJbmRleCsrO1xuXHRcdC8vICAgIGlmICgga2V5SW5kZXggKVxuXHRcdC8vICAgICAgICBpZCA9IGlkICsgJ1snICsga2V5SW5kZXggKyAnXSc7XG5cdFx0Ly99XG5cdFx0XG5cdFx0aWQgPSBpZCB8fCAoXCJfX19fX1wiICsgc2hvcnRpZC5nZW5lcmF0ZSgpKTtcblx0XHRcblx0XHRcblx0XHRpZiAoIG9wZW5TY29wZXNbaWRdICYmICFpbmNyZW1lbnRJZCApIHsvLyBvdmVyd3JpdGUgZXhpc3Rpbmcgc2NvcGVcblx0XHRcdHRoaXMuX2lkID0gaWQ7XG5cdFx0XHRvcGVuU2NvcGVzW2lkXS5yZWdpc3RlcihzdG9yZXNNYXApO1xuXHRcdFx0cmV0dXJuIG9wZW5TY29wZXNbaWRdXG5cdFx0fVxuXHRcdGVsc2UgaWYgKCBvcGVuU2NvcGVzW2lkXSAmJiBpbmNyZW1lbnRJZCApIHsvLyBnZW5lcmF0ZSBrZXkgaWRcblx0XHRcdGxldCBpID0gLTE7XG5cdFx0XHR3aGlsZSAoIG9wZW5TY29wZXNbaWQgKyAnWycgKyAoKytpKSArICddJ10gKSA7XG5cdFx0XHRpZCA9IGlkICsgJ1snICsgaSArICddJztcblx0XHR9XG5cdFx0XG5cdFx0dGhpcy5faWQgICAgICAgID0gaWQ7XG5cdFx0dGhpcy5fcmV2ICAgICAgID0gMDtcblx0XHRvcGVuU2NvcGVzW2lkXSAgPSB0aGlzO1xuXHRcdF8ucGVyc2lzdGVuY2VUbSA9IHBlcnNpc3RlbmNlVG0gfHwgdGhpcy5jb25zdHJ1Y3Rvci5wZXJzaXN0ZW5jZVRtO1xuXHRcdFxuXHRcdHRoaXMuYWN0aW9ucyA9IHt9O1xuXHRcdHRoaXMuc3RvcmVzICA9IHt9O1xuXHRcdHRoaXMuc3RhdGUgICA9IHt9O1xuXHRcdHRoaXMuZGF0YSAgICA9IHt9O1xuXHRcdFxuXHRcdHRoaXMucGFyZW50ID0gcGFyZW50O1xuXHRcdFxuXHRcdGlmICggYXV0b0Rlc3Ryb3kgPT0gJ2luaGVyaXQnIClcblx0XHRcdGF1dG9EZXN0cm95ID0gcGFyZW50ICYmIHBhcmVudC5fYXV0b0Rlc3Ryb3k7XG5cdFx0XG5cdFx0dGhpcy5fICAgICAgICAgICAgPSBfO1xuXHRcdHRoaXMuX2F1dG9EZXN0cm95ID0gYXV0b0Rlc3Ryb3k7XG5cdFx0XG5cdFx0aWYgKCBwYXJlbnQgJiYgcGFyZW50LmRlYWQgKVxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiQ2FuJ3QgdXNlIGEgZGVhZCBzY29wZSBhcyBwYXJlbnQgIVwiKTtcblx0XHRcblx0XHRfX3Byb3RvX19wdXNoKHRoaXMsICdhY3Rpb25zJywgcGFyZW50KTtcblx0XHRfX3Byb3RvX19wdXNoKHRoaXMsICdzdG9yZXMnLCBwYXJlbnQpO1xuXHRcdF9fcHJvdG9fX3B1c2godGhpcywgJ3N0YXRlJywgcGFyZW50KTtcblx0XHRfX3Byb3RvX19wdXNoKHRoaXMsICdkYXRhJywgcGFyZW50KTtcblx0XHRcblx0XHR0aGlzLnNvdXJjZXMgICAgICA9IFtdO1xuXHRcdF8uY2hpbGRTY29wZXMgICAgID0gW107XG5cdFx0Xy5jaGlsZFNjb3Blc0xpc3QgPSBbXTtcblx0XHRfLnVuU3RhYmxlQ2hpbGRzICA9IDA7XG5cdFx0Xy5zZWVuQ2hpbGRzICAgICAgPSAwO1xuXHRcdFxuXHRcdHRoaXMuX19yZXRhaW5zID0geyBhbGw6IDAgfTtcblx0XHR0aGlzLl9fbG9ja3MgICA9IHsgYWxsOiAxIH07XG5cdFx0XG5cdFx0Ly9fLnNuYXBzaG90ICAgICAgICA9IHNuYXBzaG90O1xuXHRcdC8vXy5zbmFwc2hvdCAgICAgICAgPSBzbmFwc2hvdDtcblx0XHRfLl9ib3VuZGVkQWN0aW9ucyA9IGlzLmFycmF5KGJvdW5kZWRBY3Rpb25zKVxuXHRcdCAgICAgICAgICAgICAgICAgICAgPyB7IHRlc3Q6IGJvdW5kZWRBY3Rpb25zLmluY2x1ZGVzLmJpbmQoYm91bmRlZEFjdGlvbnMpIH1cblx0XHQgICAgICAgICAgICAgICAgICAgIDogYm91bmRlZEFjdGlvbnM7XG5cdFx0Xy5fbGlzdGVuaW5nICAgICAgPSB7fTtcblx0XHRfLl9zY29wZSAgICAgICAgICA9IHt9O1xuXHRcdF8uX21peGVkICAgICAgICAgID0gW107XG5cdFx0Xy5fbWl4ZWRMaXN0ICAgICAgPSBbXTtcblx0XHRfLmZvbGxvd2VycyAgICAgICA9IFtdO1xuXHRcdGlmICggcGFyZW50ICkge1xuXHRcdFx0cGFyZW50LnJldGFpbihcImlzTXlQYXJlbnRcIik7XG5cdFx0XHRpZiAoICFyb290RW1pdHRlciApIHtcblx0XHRcdFx0IXBhcmVudC5fc3RhYmxlICYmIHRoaXMud2FpdChcIndhaXRpbmdQYXJlbnRcIik7XG5cdFx0XHRcdHBhcmVudC5vbihfLl9wYXJlbnRMaXN0ID0ge1xuXHRcdFx0XHRcdCdzdGFibGUnICA6IHMgPT4gdGhpcy5yZWxlYXNlKFwid2FpdGluZ1BhcmVudFwiKSxcblx0XHRcdFx0XHQndW5zdGFibGUnOiBzID0+IHRoaXMud2FpdChcIndhaXRpbmdQYXJlbnRcIiksXG5cdFx0XHRcdFx0J3VwZGF0ZScgIDogcyA9PiB0aGlzLl9wcm9wYWcoKVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHRwYXJlbnQub24oXy5fcGFyZW50TGlzdCA9IHtcblx0XHRcdFx0XHQndXBkYXRlJzogcyA9PiB0aGlzLl9wcm9wYWcoKVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHRcdC8vIHRoaXMucmVnaXN0ZXIocGFyZW50Ll9fc2NvcGUsIHN0YXRlLCBkYXRhKTtcblx0XHR9XG5cdFx0XG5cdFx0XG5cdFx0dGhpcy5yZWdpc3RlcihzdG9yZXNNYXAsIHN0YXRlLCBkYXRhKTtcblx0XHR0aGlzLl9fbG9ja3MuYWxsLS07XG5cdFx0dGhpcy5fc3RhYmxlID0gIXRoaXMuX19sb2Nrcy5hbGw7XG5cdFx0XG5cdFx0aWYgKCBwYXJlbnQgKSB7XG5cdFx0XHRwYXJlbnQuX2FkZENoaWxkKHRoaXMpO1xuXHRcdH1cblx0XHRcblx0XHR0aGlzLnJlc3RvcmUoc25hcHNob3QpO1xuXHRcdFxuXHRcdGlmICggYXV0b0Rlc3Ryb3kgKVxuXHRcdFx0c2V0VGltZW91dChcblx0XHRcdFx0dG0gPT4ge1xuXHRcdFx0XHRcdHRoaXMucmV0YWluKFwiYXV0b0Rlc3Ryb3lcIik7XG5cdFx0XHRcdFx0dGhpcy5kaXNwb3NlKFwiYXV0b0Rlc3Ryb3lcIik7XG5cdFx0XHRcdH1cblx0XHRcdClcblx0XHRcblx0fVxuXHRcblx0LyoqXG5cdCAqXG5cdCAqIE1vdW50IHRoZSBzdG9yZXMgaW4gc3RvcmVzTGlzdCwgaW4gdGhpcyBzY29wZSBvciBpbiBpdHMgcGFyZW50cyBvciBtaXhlZCBzY29wZXNcblx0ICpcblx0ICogQHBhcmFtIHN0b3Jlc0xpc3Qge3N0cmluZ3xzdG9yZVJlZn0gU3RvcmUgbmFtZSwgQXJyYXkgb2YgU3RvcmUgbmFtZXMsIG9yIFJlc2NvcGVcblx0ICogICAgIHN0b3JlIHJlZiBmcm9tIFN0b3JlOjphcyBvciBTdG9yZTphc1xuXHQgKiBAcGFyYW0gc3RhdGVcblx0ICogQHBhcmFtIGRhdGFcblx0ICogQHJldHVybnMge1Njb3BlfVxuXHQgKi9cblx0bW91bnQoIHN0b3Jlc0xpc3QsIHNuYXBzaG90LCBzdGF0ZSwgZGF0YSApIHtcblx0XHRpZiAoIGlzLmFycmF5KHN0b3Jlc0xpc3QpICkge1xuXHRcdFx0c3RvcmVzTGlzdC5mb3JFYWNoKGsgPT4gdGhpcy5fbW91bnQoaywgc25hcHNob3QsIHN0YXRlLCBkYXRhKSk7XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0dGhpcy5fbW91bnQoLi4uYXJndW1lbnRzKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblx0XG5cdF9tb3VudCggaWQsIHNuYXBzaG90LCBzdGF0ZSwgZGF0YSApIHtcblx0XHRsZXQgcmVmLCBzbmFwO1xuXHRcdFxuXHRcdHJlZiA9IHRoaXMucGFyc2VSZWYoaWQpXG5cdFx0XG5cdFx0aWYgKCBpZCA9PSBcIiRwYXJlbnRcIiApIHJldHVybjtcblx0XHRpZiAoICF0aGlzLl8uX3Njb3BlW3JlZi5zdG9yZUlkXSApIHsvL2FzayBtaXhlZCB8fCBwYXJlbnRcblx0XHRcdGlmICggdGhpcy5fLl9taXhlZC5yZWR1Y2VSaWdodCgoIG1vdW50ZWQsIGN0eCApID0+IChtb3VudGVkIHx8IGN0eC5fbW91bnQoaWQsIHNuYXBzaG90LCBzdGF0ZSwgZGF0YSkpLCBmYWxzZSkgfHxcblx0XHRcdFx0IXRoaXMucGFyZW50IClcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0cmV0dXJuIHRoaXMucGFyZW50Ll9tb3VudCguLi5hcmd1bWVudHMpO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdGxldCBzdG9yZSA9IHRoaXMuXy5fc2NvcGVbcmVmLnN0b3JlSWRdLCB0YXNrUXVldWUgPSBbXTtcblx0XHRcdGlmICggaXMucnNTdG9yZUNsYXNzKHN0b3JlKSApIHtcblx0XHRcdFx0dGhpcy5fLl9zY29wZVtyZWYuc3RvcmVJZF0gPSBuZXcgc3RvcmUodGhpcywge1xuXHRcdFx0XHRcdC8vc25hcHNob3QsXG5cdFx0XHRcdFx0bmFtZTogcmVmLnN0b3JlSWQsXG5cdFx0XHRcdFx0c3RhdGUsXG5cdFx0XHRcdFx0ZGF0YVxuXHRcdFx0XHR9LCB0YXNrUXVldWUpO1xuXHRcdFx0XHR3aGlsZSAoIHRhc2tRdWV1ZS5sZW5ndGggKSB0YXNrUXVldWUuc2hpZnQoKSgpO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSBpZiAoIGlzLnJzU2NvcGVDbGFzcyhzdG9yZSkgKSB7XG5cdFx0XHRcdHN0b3JlID0gdGhpcy5fLl9zY29wZVtyZWYuc3RvcmVJZF0gPSBuZXcgc3RvcmUoeyAkcGFyZW50OiB0aGlzIH0sIHtcblx0XHRcdFx0XHRrZXkgICAgICAgIDogcmVmLnN0b3JlSWQsXG5cdFx0XHRcdFx0aW5jcmVtZW50SWQ6IHRydWUsXG5cdFx0XHRcdFx0dXBwZXJTY29wZSA6IHRoaXNcblx0XHRcdFx0XHQvL2F1dG9EZXN0cm95OiB0cnVlXG5cdFx0XHRcdFx0Ly9wYXJlbnQ6IHRoaXNcblx0XHRcdFx0fSk7XG5cdFx0XHRcdC8vdGhpcy5fLl9zY29wZVsgcmVmLnN0b3JlSWQgXS5yZXRhaW4oXCJzY29wZWRDaGlsZFNjb3BlXCIpO1xuXHRcdFx0XHQvL3RoaXMuX3dhdGNoU3RvcmUocmVmLnN0b3JlSWQpO1xuXHRcdFx0XHRpZiAoIHJlZi5wYXRoLmxlbmd0aCA+IDEgKVxuXHRcdFx0XHRcdHRoaXMuXy5fc2NvcGVbcmVmLnN0b3JlSWRdLm1vdW50KHJlZi5wYXRoLnNsaWNlKDEpLmpvaW4oJy4nKSwgc25hcHNob3QsIHN0YXRlLCBkYXRhKVxuXHRcdFx0XHQvL2Vsc2UgcmV0dXJuIHRoaXMuXy5fc2NvcGVbIHJlZi5zdG9yZUlkIF07XG5cdFx0XHR9XG5cdFx0XHRpZiAoIGlzLnJzU3RvcmUoc3RvcmUpICkge1xuXHRcdFx0XHRpZiAoIHN0YXRlICE9PSB1bmRlZmluZWQgJiYgZGF0YSA9PT0gdW5kZWZpbmVkIClcblx0XHRcdFx0XHRzdG9yZS5zZXRTdGF0ZShzdGF0ZSk7XG5cdFx0XHRcdGVsc2UgaWYgKCBzdGF0ZSAhPT0gdW5kZWZpbmVkIClcblx0XHRcdFx0XHRzdG9yZS5zdGF0ZSA9IHN0YXRlO1xuXHRcdFx0XHRcblx0XHRcdFx0aWYgKCBkYXRhICE9PSB1bmRlZmluZWQgKVxuXHRcdFx0XHRcdHN0b3JlLnB1c2goZGF0YSk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLl93YXRjaFN0b3JlKHJlZi5zdG9yZUlkKTtcblx0XHR9XG5cdFx0XG5cdFx0XG5cdFx0cmV0dXJuIHRoaXMuXy5fc2NvcGVbcmVmLnN0b3JlSWRdO1xuXHR9XG5cdFxuXHRfd2F0Y2hTdG9yZSggaWQsIHN0YXRlLCBkYXRhICkge1xuXHRcdGlmICggIXRoaXMuXy5fbGlzdGVuaW5nW2lkXSAmJiAhaXMuZm4odGhpcy5fLl9zY29wZVtpZF0pICkge1xuXHRcdFx0Ly9pZiAoIGlzLnJzU3RvcmUodGhpcy5fLl9zY29wZVsgaWQgXSkgKSB7XG5cdFx0XHQhdGhpcy5fLl9zY29wZVtpZF0uX2F1dG9EZXN0cm95ICYmIHRoaXMuXy5fc2NvcGVbaWRdLnJldGFpbihcInNjb3BlZFwiKTtcblx0XHRcdCF0aGlzLl8uX3Njb3BlW2lkXS5pc1N0YWJsZSgpICYmIHRoaXMud2FpdChpZCk7XG5cdFx0XHR0aGlzLl8uX3Njb3BlW2lkXS5vbihcblx0XHRcdFx0dGhpcy5fLl9saXN0ZW5pbmdbaWRdID0ge1xuXHRcdFx0XHRcdCdkZXN0cm95JyA6IHMgPT4ge1xuXHRcdFx0XHRcdFx0ZGVsZXRlIHRoaXMuXy5fbGlzdGVuaW5nW2lkXTtcblx0XHRcdFx0XHRcdHRoaXMuXy5fc2NvcGVbaWRdID0gdGhpcy5fLl9zY29wZVtpZF0uY29uc3RydWN0b3I7XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHQndXBkYXRlJyAgOiBzID0+IHRoaXMucHJvcGFnKCksXG5cdFx0XHRcdFx0J3N0YWJsZScgIDogcyA9PiB0aGlzLnJlbGVhc2UoaWQpLFxuXHRcdFx0XHRcdCd1bnN0YWJsZSc6IHMgPT4gdGhpcy53YWl0KGlkKVxuXHRcdFx0XHR9KTtcblx0XHR9XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBNaXggdGFyZ2V0Q3R4IG9uIHRoaXMgc2NvcGVcblx0ICogTWl4ZWQgc2NvcGUgcGFyZW50cyBhcmUgTk9UIG1hcHBlZFxuXHQgKiBAcGFyYW0gdGFyZ2V0Q3R4XG5cdCAqL1xuXHRtaXhpbiggdGFyZ2V0Q3R4ICkge1xuXHRcdGxldCBwYXJlbnQgPSB0aGlzLnBhcmVudCwgbGlzdHM7XG5cdFx0XG5cdFx0dGhpcy5fLl9taXhlZC5wdXNoKHRhcmdldEN0eClcblx0XHR0YXJnZXRDdHgucmV0YWluKFwibWl4ZWRUb1wiKTtcblx0XHRpZiAoICF0YXJnZXRDdHguX3N0YWJsZSApXG5cdFx0XHR0aGlzLndhaXQodGFyZ2V0Q3R4Ll9pZCk7XG5cdFx0dGhpcy5fLl9taXhlZExpc3QucHVzaChsaXN0cyA9IHtcblx0XHRcdCdzdGFibGUnICA6IHMgPT4gdGhpcy5yZWxlYXNlKHRhcmdldEN0eC5faWQpLFxuXHRcdFx0J3Vuc3RhYmxlJzogcyA9PiB0aGlzLndhaXQodGFyZ2V0Q3R4Ll9pZCksXG5cdFx0XHQndXBkYXRlJyAgOiBzID0+IHRoaXMuX3Byb3BhZygpXG5cdFx0fSk7XG5cdFx0XG5cdFx0Ly90aGlzLmFjdGlvbnMgPSB7fTtcblx0XHQvL3RoaXMuc3RvcmVzICA9IHt9O1xuXHRcdC8vdGhpcy5zdGF0ZSAgID0ge307XG5cdFx0Ly90aGlzLmRhdGEgICAgPSB7fTtcblx0XHR0YXJnZXRDdHgub24obGlzdHMpO1xuXHRcdFxuXHRcdC8vIHJlc2V0IHByb3Rvc1xuXHRcdC8vIHB1c2ggbmV3IHByb3RvIHdpdGggcGFyZW50XG5cdFx0X19wcm90b19fcHVzaCh0aGlzLCAnYWN0aW9ucycsIHBhcmVudCk7XG5cdFx0X19wcm90b19fcHVzaCh0aGlzLCAnc3RvcmVzJywgcGFyZW50KTtcblx0XHRfX3Byb3RvX19wdXNoKHRoaXMsICdzdGF0ZScsIHBhcmVudCk7XG5cdFx0X19wcm90b19fcHVzaCh0aGlzLCAnZGF0YScsIHBhcmVudCk7XG5cdFx0Ly8gcHJpbnQgbG9jYWx6IGFjY2Vzc29yc1xuXHRcdHRoaXMucmVsaW5rKHRoaXMuXy5fc2NvcGUsIHRoaXMsIGZhbHNlLCB0cnVlKTtcblx0XHRcblx0XHR0aGlzLl8uX21peGVkLmZvckVhY2goXG5cdFx0XHRjdHggPT4ge1xuXHRcdFx0XHQvLyBwdXNoIHByb3Rvc1xuXHRcdFx0XHRfX3Byb3RvX19wdXNoKHRoaXMsICdhY3Rpb25zJyk7XG5cdFx0XHRcdF9fcHJvdG9fX3B1c2godGhpcywgJ3N0b3JlcycpO1xuXHRcdFx0XHRfX3Byb3RvX19wdXNoKHRoaXMsICdzdGF0ZScpO1xuXHRcdFx0XHRfX3Byb3RvX19wdXNoKHRoaXMsICdkYXRhJyk7XG5cdFx0XHRcdHRoaXMuc3RvcmVzLl9fb3JpZ2luID0gXCJtaXhlZCBcIiArIGN0eC5faWQ7XG5cdFx0XHRcdC8vIHdyaXRlIG1peGVkIGFjY2Vzc29yc1xuXHRcdFx0XHRjdHgucmVsaW5rKGN0eC5fLl9zY29wZSwgdGhpcywgdHJ1ZSwgdHJ1ZSlcblx0XHRcdH1cblx0XHQpXG5cdH1cblx0XG5cdC8qKlxuXHQgKiBSZWdpc3RlciBzdG9yZXMgaW4gc3RvcmVzTWFwICYgbGluayB0aGVtIGluIHRoZSBwcm90b3Ncblx0ICogQHBhcmFtIHN0b3Jlc01hcFxuXHQgKiBAcGFyYW0gc3RhdGVcblx0ICogQHBhcmFtIGRhdGFcblx0ICovXG5cdHJlZ2lzdGVyKCBzdG9yZXNNYXAsIHN0YXRlID0ge30sIGRhdGEgPSB7fSApIHtcblx0XHR0aGlzLnJlbGluayhzdG9yZXNNYXAsIHRoaXMsIGZhbHNlLCBmYWxzZSk7XG5cdFx0T2JqZWN0LmtleXMoc3RvcmVzTWFwKS5mb3JFYWNoKFxuXHRcdFx0aWQgPT4ge1xuXHRcdFx0XHRpZiAoIGlkID09IFwiJHBhcmVudFwiICkgcmV0dXJuO1xuXHRcdFx0XHRpZiAoIHN0b3Jlc01hcFtpZF0uc2luZ2xldG9uIHx8IChpcy5mbihzdG9yZXNNYXBbaWRdKSAmJiAoc3RhdGVbaWRdIHx8IGRhdGFbaWRdKSkgKSB7XG5cdFx0XHRcdFx0dGhpcy5fbW91bnQoaWQsIHVuZGVmaW5lZCwgc3RhdGVbaWRdLCBkYXRhW2lkXSlcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlIGlmICggc3RhdGVbaWRdIHx8IGRhdGFbaWRdICkge1xuXHRcdFx0XHRcdGlmICggZGF0YVtpZF0gKSB7XG5cdFx0XHRcdFx0XHRpZiAoIHN0YXRlW2lkXSApXG5cdFx0XHRcdFx0XHRcdHRoaXMuc3RvcmVzW2lkXS5zdGF0ZSA9IHN0YXRlW2lkXTtcblx0XHRcdFx0XHRcdHRoaXMuc3RvcmVzW2lkXS5wdXNoKGRhdGFbaWRdKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZWxzZSBpZiAoIHN0YXRlW2lkXSApIHtcblx0XHRcdFx0XHRcdHRoaXMuc3RvcmVzW2lkXS5zZXRTdGF0ZShzdGF0ZVtpZF0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHR0aGlzLl93YXRjaFN0b3JlKGlkKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdClcblx0XHRcblx0fVxuXHRcblx0LyoqXG5cdCAqIE1hcCBzcmNDdHggc3RvcmUncyBvbiB0YXJnZXRDdHggaGVhZGVycyBwcm90bydzXG5cdCAqIEBwYXJhbSBzcmNDdHhcblx0ICogQHBhcmFtIHRhcmdldEN0eFxuXHQgKiBAcGFyYW0gc3RhdGVcblx0ICogQHBhcmFtIGRhdGFcblx0ICovXG5cdHJlbGluayggc3JjQ3R4LCB0YXJnZXRDdHggPSB0aGlzLCBleHRlcm5hbCwgZm9yY2UgKSB7XG5cdFx0bGV0IGxjdHggPSB0YXJnZXRDdHguXy5zdG9yZXMucHJvdG90eXBlO1xuXHRcdE9iamVjdC5rZXlzKHNyY0N0eClcblx0XHQgICAgICAuZm9yRWFjaChcblx0XHRcdCAgICAgIGlkID0+IHtcblx0XHRcdFx0ICAgICAgbGV0IGhvdFJlbG9hZGluZztcblx0XHRcdFx0XG5cdFx0XHRcdCAgICAgIGlmICggIWZvcmNlICYmIHRhcmdldEN0eC5fLl9zY29wZVtpZF0gPT09IHNyY0N0eFtpZF0gfHxcblx0XHRcdFx0XHQgICAgICB0YXJnZXRDdHguXy5fc2NvcGVbaWRdICYmICh0YXJnZXRDdHguXy5fc2NvcGVbaWRdLmNvbnN0cnVjdG9yID09PSBzcmNDdHhbaWRdKSApXG5cdFx0XHRcdFx0ICAgICAgcmV0dXJuO1xuXHRcdFx0XHRcblx0XHRcdFx0ICAgICAgaWYgKCAhZm9yY2UgJiYgdGFyZ2V0Q3R4Ll8uX3Njb3BlW2lkXSApIHtcblx0XHRcdFx0XHQgICAgICBpZiAoICFleHRlcm5hbCAmJiAhaXMuZm4odGFyZ2V0Q3R4Ll8uX3Njb3BlW2lkXSkgKSB7XG5cdFx0XHRcdFx0XHQgICAgICBjb25zb2xlLmluZm8oXCJSZXNjb3BlIFN0b3JlIDogXCIsIGlkLCBcIiBhbHJlYWR5IGV4aXN0IGluIHRoaXMgc2NvcGUgISAoIEhvdCBzd2l0Y2hpbmcgdGhlIHN0b3JlICkgISEhXCIpO1xuXHRcdFx0XHRcdFx0ICAgICAgbGV0IHRtcCAgICAgICAgICAgICAgICA9IHRhcmdldEN0eC5fLl9zY29wZVtpZF07XG5cdFx0XHRcdFx0XHQgICAgICB0YXJnZXRDdHguXy5fc2NvcGVbaWRdID0gc3JjQ3R4W2lkXTtcblx0XHRcdFx0XHRcdCAgICAgIGhvdFJlbG9hZGluZyAgICAgICAgICAgPSB0bXAubmV4dFN0YXRlO1xuXHRcdFx0XHRcdFx0ICAgICAgdG1wLmRlc3Ryb3koKTtcblx0XHRcdFx0XHQgICAgICB9XG5cdFx0XHRcdFx0ICAgICAgaWYgKCAhZXh0ZXJuYWwgJiYgaXMuZm4odGFyZ2V0Q3R4Ll8uX3Njb3BlW2lkXSkgKVxuXHRcdFx0XHRcdFx0ICAgICAgdGFyZ2V0Q3R4Ll8uX3Njb3BlW2lkXSA9IHNyY0N0eFtpZF07XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0ICAgICAgLy9yZXR1cm47XG5cdFx0XHRcdCAgICAgIH1cblx0XHRcdFx0ICAgICAgZWxzZSBpZiAoICFmb3JjZSAmJiAhZXh0ZXJuYWwgKVxuXHRcdFx0XHRcdCAgICAgIHRoaXMuXy5fc2NvcGVbaWRdID0gc3JjQ3R4W2lkXTtcblx0XHRcdFx0XG5cdFx0XHRcdCAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShcblx0XHRcdFx0XHQgICAgICBsY3R4LFxuXHRcdFx0XHRcdCAgICAgIGlkLFxuXHRcdFx0XHRcdCAgICAgIHtcblx0XHRcdFx0XHRcdCAgICAgIGVudW1lcmFibGUgIDogdHJ1ZSxcblx0XHRcdFx0XHRcdCAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcblx0XHRcdFx0XHRcdCAgICAgIGdldCAgICAgICAgIDogKCkgPT4gdGhpcy5fLl9zY29wZVtpZF1cblx0XHRcdFx0XHQgICAgICB9XG5cdFx0XHRcdCAgICAgICk7XG5cdFx0XHRcdCAgICAgIGlmICggaWQgPT0gXCIkcGFyZW50XCIgKSByZXR1cm47XG5cdFx0XHRcdCAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShcblx0XHRcdFx0XHQgICAgICB0YXJnZXRDdHguXy5zdGF0ZS5wcm90b3R5cGUsXG5cdFx0XHRcdFx0ICAgICAgaWQsXG5cdFx0XHRcdFx0ICAgICAge1xuXHRcdFx0XHRcdFx0ICAgICAgZW51bWVyYWJsZSAgOiB0cnVlLFxuXHRcdFx0XHRcdFx0ICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuXHRcdFx0XHRcdFx0ICAgICAgZ2V0ICAgICAgICAgOiAoKSA9PiAodGhpcy5fLl9zY29wZVtpZF0gJiYgdGhpcy5fLl9zY29wZVtpZF0uc3RhdGUpLFxuXHRcdFx0XHRcdFx0ICAgICAgc2V0ICAgICAgICAgOiAoIHYgKSA9PiAodGhpcy5fbW91bnQoaWQsIHVuZGVmaW5lZCwgdikpXG5cdFx0XHRcdFx0ICAgICAgfVxuXHRcdFx0XHQgICAgICApO1xuXHRcdFx0XHQgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoXG5cdFx0XHRcdFx0ICAgICAgdGFyZ2V0Q3R4Ll8uZGF0YS5wcm90b3R5cGUsXG5cdFx0XHRcdFx0ICAgICAgaWQsXG5cdFx0XHRcdFx0ICAgICAge1xuXHRcdFx0XHRcdFx0ICAgICAgZW51bWVyYWJsZSAgOiB0cnVlLFxuXHRcdFx0XHRcdFx0ICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuXHRcdFx0XHRcdFx0ICAgICAgZ2V0ICAgICAgICAgOiAoKSA9PiAodGhpcy5fLl9zY29wZVtpZF0gJiYgdGhpcy5fLl9zY29wZVtpZF0uZGF0YSksXG5cdFx0XHRcdFx0XHQgICAgICBzZXQgICAgICAgICA6ICggdiApID0+ICh0aGlzLl9tb3VudChpZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHYpKVxuXHRcdFx0XHRcdCAgICAgIH1cblx0XHRcdFx0ICAgICAgKTtcblx0XHRcdFx0XG5cdFx0XHRcdCAgICAgIGxldCBhY3Rpb25zICAgICAgID0gc3JjQ3R4W2lkXSBpbnN0YW5jZW9mIFNjb3BlLlN0b3JlXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgPyBzcmNDdHhbaWRdLmNvbnN0cnVjdG9yLmFjdGlvbnNcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICA6IHNyY0N0eFtpZF0uYWN0aW9ucyxcblx0XHRcdFx0ICAgICAgICAgIGFjdGl2ZUFjdGlvbnMgPSB0YXJnZXRDdHguXy5hY3Rpb25zLnByb3RvdHlwZTtcblx0XHRcdFx0ICAgICAgaWYgKCBpcy5yc1Njb3BlKHRoaXMuXy5fc2NvcGVbaWRdLnByb3RvdHlwZSkgKVxuXHRcdFx0XHRcdCAgICAgIHRoaXMuX21vdW50KGlkKTtcblx0XHRcdFx0ICAgICAgaWYgKCBpcy5yc1Njb3BlKHRoaXMuXy5fc2NvcGVbaWRdKSApIHtcblx0XHRcdFx0XHQgICAgICBhY3RpdmVBY3Rpb25zW2lkXSA9IHRoaXMuXy5fc2NvcGVbaWRdLmFjdGlvbnM7XG5cdFx0XHRcdCAgICAgIH1cblx0XHRcdFx0ICAgICAgaWYgKCAhaXMucnNTdG9yZSh0aGlzLl8uX3Njb3BlW2lkXSkgJiYgIWlzLnJzU3RvcmVDbGFzcyh0aGlzLl8uX3Njb3BlW2lkXSkgKVxuXHRcdFx0XHRcdCAgICAgIHJldHVybjtcblx0XHRcdFx0XG5cdFx0XHRcdCAgICAgIGFjdGlvbnMgJiZcblx0XHRcdFx0ICAgICAgT2JqZWN0LmtleXMoYWN0aW9ucylcblx0XHRcdFx0ICAgICAgICAgICAgLmZvckVhY2goXG5cdFx0XHRcdFx0ICAgICAgICAgICAgKCBhY3QgKSA9PiB7XG5cdFx0XHRcdFx0XHQgICAgICAgICAgICBpZiAoIGFjdGl2ZUFjdGlvbnMuaGFzT3duUHJvcGVydHkoYWN0KSApXG5cdFx0XHRcdFx0XHRcdCAgICAgICAgICAgIGFjdGl2ZUFjdGlvbnNbYWN0XS5fX3RhcmdldFN0b3JlcysrO1xuXHRcdFx0XHRcdFx0ICAgICAgICAgICAgZWxzZSB7XG5cdFx0XHRcdFx0XHRcdCAgICAgICAgICAgIGFjdGl2ZUFjdGlvbnNbYWN0XSAgICAgICAgICAgICAgICA9IHRoaXMuZGlzcGF0Y2guYmluZCh0aGlzLCBhY3QpO1xuXHRcdFx0XHRcdFx0XHQgICAgICAgICAgICBhY3RpdmVBY3Rpb25zW2FjdF0uX190YXJnZXRTdG9yZXMgPSAxO1xuXHRcdFx0XHRcdFx0ICAgICAgICAgICAgfVxuXHRcdFx0XHRcdCAgICAgICAgICAgIH1cblx0XHRcdFx0ICAgICAgICAgICAgKVxuXHRcdFx0XHRcblx0XHRcdFx0ICAgICAgaWYgKCBob3RSZWxvYWRpbmcgKVxuXHRcdFx0XHRcdCAgICAgIHRoaXMuX21vdW50KGlkLCBudWxsLCBob3RSZWxvYWRpbmcpO1xuXHRcdFx0ICAgICAgfVxuXHRcdCAgICAgIClcblx0fVxuXHRcblx0LyoqXG5cdCAqIEJpbmQgc3RvcmVzIGZyb20gdGhpcyBzY29wZSwgaGlzIHBhcmVudHMgYW5kIG1peGVkIHNjb3BlXG5cdCAqXG5cdCAqIEBwYXJhbSBvYmoge1JlYWN0LkNvbXBvbmVudHxTdG9yZXxmdW5jdGlvbn1cblx0ICogQHBhcmFtIGtleSB7c3RyaW5nfSBzdG9yZXMga2V5cyB0byBiaW5kIHVwZGF0ZXNcblx0ICogQHBhcmFtIGFzXG5cdCAqIEBwYXJhbSBzZXRJbml0aWFsIHtib29sfSBmYWxzZSB0byBub3QgcHJvcGFnIGluaXRpYWwgdmFsdWUgKGRlZmF1bHQgOiB0cnVlKVxuXHQgKi9cblx0YmluZCggb2JqLCBrZXksIGFzLCBzZXRJbml0aWFsID0gdHJ1ZSwgcmV2TWFwID0ge30gKSB7XG5cdFx0bGV0IGxhc3RSZXZzLCBkYXRhLCByZWZLZXlzO1xuXHRcdGlmICgga2V5ICYmICFpcy5hcnJheShrZXkpIClcblx0XHRcdGtleSA9IFtrZXldO1xuXHRcdFxuXHRcdGlmICggYXMgPT09IGZhbHNlIHx8IGFzID09PSB0cnVlICkge1xuXHRcdFx0c2V0SW5pdGlhbCA9IGFzO1xuXHRcdFx0YXMgICAgICAgICA9IG51bGw7XG5cdFx0fVxuXHRcdFxuXHRcdHJlZktleXMgPSBrZXlcblx0XHRcdC5tYXAoaWQgPT4gKGlzLnN0cmluZyhpZCkgPyBpZCA6IGlkLm5hbWUpKVxuXHRcdFx0Lm1hcChpZCA9PiAodGhpcy5wYXJzZVJlZihpZCkpKTtcblx0XHRcblx0XHRcblx0XHR0aGlzLl8uZm9sbG93ZXJzLnB1c2goXG5cdFx0XHRbXG5cdFx0XHRcdG9iaixcblx0XHRcdFx0a2V5LFxuXHRcdFx0XHRhcyB8fCB1bmRlZmluZWQsXG5cdFx0XHRcdGxhc3RSZXZzID0gcmVmS2V5cy5yZWR1Y2UoKCByZXZzLCByZWYgKSA9PiB7XG5cdFx0XHRcdFx0cmV2c1tyZWYuc3RvcmVJZF0gPSByZXZzW3JlZi5zdG9yZUlkXSB8fCB7XG5cdFx0XHRcdFx0XHRyZXYgOiAwLFxuXHRcdFx0XHRcdFx0cmVmczogW11cblx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdHJldnNbcmVmLnN0b3JlSWRdLnJlZnMucHVzaChyZWYpO1xuXHRcdFx0XHRcdHJldHVybiByZXZzO1xuXHRcdFx0XHR9LCByZXZNYXApXG5cdFx0XHRdKTtcblx0XHRcblx0XHR0aGlzLm1vdW50KGtleSk7XG5cdFx0dGhpcy5yZXRhaW5TdG9yZXMoT2JqZWN0LmtleXMobGFzdFJldnMpLCAnbGlzdGVuZXJzJyk7XG5cdFx0XG5cdFx0aWYgKCBzZXRJbml0aWFsICYmIHRoaXMuX3N0YWJsZSApIHtcblx0XHRcdGRhdGEgPSB0aGlzLmdldFVwZGF0ZXMobGFzdFJldnMpO1xuXHRcdFx0aWYgKCAhZGF0YSApIHJldHVybiB0aGlzO1xuXHRcdFx0aWYgKCB0eXBlb2Ygb2JqICE9IFwiZnVuY3Rpb25cIiApIHtcblx0XHRcdFx0aWYgKCBhcyApIG9iai5zZXRTdGF0ZSh7IFthc106IGRhdGEgfSk7XG5cdFx0XHRcdGVsc2Ugb2JqLnNldFN0YXRlKGRhdGEpO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdG9iaihkYXRhKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBVbiBiaW5kIHRoaXMgc2NvcGUgb2ZmIHRoZSBnaXZlbiBjb21wb25lbnQta2V5c1xuXHQgKiBAcGFyYW0gb2JqXG5cdCAqIEBwYXJhbSBrZXlcblx0ICogQHJldHVybnMge0FycmF5LjwqPn1cblx0ICovXG5cdHVuQmluZCggb2JqLCBrZXksIGFzICkge1xuXHRcdHZhciBmb2xsb3dlcnMgPSB0aGlzLl8uZm9sbG93ZXJzLFxuXHRcdCAgICBpICAgICAgICAgPSBmb2xsb3dlcnMgJiYgZm9sbG93ZXJzLmxlbmd0aDtcblx0XHR3aGlsZSAoIGZvbGxvd2VycyAmJiBpLS0gKVxuXHRcdFx0aWYgKCBmb2xsb3dlcnNbaV1bMF0gPT09IG9iaiAmJlxuXHRcdFx0XHQoJycgKyBmb2xsb3dlcnNbaV1bMV0pID09ICgnJyArIGtleSkgJiZcblx0XHRcdFx0Zm9sbG93ZXJzW2ldWzJdID09IGFzICkge1xuXHRcdFx0XHR0aGlzLmRpc3Bvc2VTdG9yZXMoT2JqZWN0LmtleXMoZm9sbG93ZXJzW2ldWzNdKSwgJ2xpc3RlbmVycycpO1xuXHRcdFx0XHRyZXR1cm4gZm9sbG93ZXJzLnNwbGljZShpLCAxKTtcblx0XHRcdH1cblx0fVxuXHRcblx0LyoqXG5cdCAqIE1vdW50IHRoZSBzdG9yZXMgaW4gc3RvcmVzTGlzdCBmcm9tIHRoaXMgc2NvcGUsIGl0cyBwYXJlbnRzIGFuZCBtaXhlZCBzY29wZVxuXHQgKiBCaW5kIHRoZW0gdG8gJ3RvJ1xuXHQgKiBIb29rICd0bycgc28gaXQgd2lsbCBhdXRvIHVuYmluZCBvbiAnZGVzdHJveScgb3IgJ2NvbXBvbmVudFdpbGxVbm1vdW50J1xuXHQgKiBAcGFyYW0gdG9cblx0ICogQHBhcmFtIHN0b3Jlc0xpc3Rcblx0ICogQHBhcmFtIGJpbmRcblx0ICogQHJldHVybnMge09iamVjdH0gSW5pdGlhbCBvdXRwdXRzIG9mIHRoZSBzdG9yZXMgaW4gJ3N0b3Jlc0xpc3QnXG5cdCAqL1xuXHRtYXAoIHRvLCBzdG9yZXNMaXN0LCBiaW5kID0gdHJ1ZSwgcmV2TWFwICkge1xuXHRcdGxldCBTdG9yZSAgID0gdGhpcy5jb25zdHJ1Y3Rvci5TdG9yZTtcblx0XHRzdG9yZXNMaXN0ICA9IGlzLmFycmF5KHN0b3Jlc0xpc3QpID8gc3RvcmVzTGlzdCA6IFtzdG9yZXNMaXN0XTtcblx0XHRsZXQgcmVmTGlzdCA9IHN0b3Jlc0xpc3QubWFwKHRoaXMucGFyc2VSZWYpO1xuXHRcdHRoaXMubW91bnQoc3RvcmVzTGlzdCk7XG5cdFx0aWYgKCBiaW5kICYmIHRvIGluc3RhbmNlb2YgU3RvcmUgKSB7XG5cdFx0XHRTdG9yZS5tYXAodG8sIHN0b3Jlc0xpc3QsIHRoaXMsIHRoaXMsIGZhbHNlKVxuXHRcdH1cblx0XHRlbHNlIGlmICggYmluZCApIHtcblx0XHRcdHRoaXMuYmluZCh0bywgc3RvcmVzTGlzdCwgdW5kZWZpbmVkLCBmYWxzZSk7XG5cdFx0XHRcblx0XHRcdGxldCBtaXhlZENXVW5tb3VudCxcblx0XHRcdCAgICB1bk1vdW50S2V5ID0gdG8uaXNSZWFjdENvbXBvbmVudCA/IFwiY29tcG9uZW50V2lsbFVubW91bnRcIiA6IFwiZGVzdHJveVwiO1xuXHRcdFx0XG5cdFx0XHRpZiAoIHRvLmhhc093blByb3BlcnR5KHVuTW91bnRLZXkpICkge1xuXHRcdFx0XHRtaXhlZENXVW5tb3VudCA9IHRvW3VuTW91bnRLZXldO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHR0b1t1bk1vdW50S2V5XSA9ICggLi4uYXJneiApID0+IHtcblx0XHRcdFx0ZGVsZXRlIHRvW3VuTW91bnRLZXldO1xuXHRcdFx0XHRpZiAoIG1peGVkQ1dVbm1vdW50IClcblx0XHRcdFx0XHR0b1t1bk1vdW50S2V5XSA9IG1peGVkQ1dVbm1vdW50O1xuXHRcdFx0XHRcblx0XHRcdFx0dGhpcy51bkJpbmQodG8sIHN0b3Jlc0xpc3QpO1xuXHRcdFx0XHRyZXR1cm4gdG9bdW5Nb3VudEtleV0gJiYgdG9bdW5Nb3VudEtleV0oLi4uYXJneik7XG5cdFx0XHR9XG5cdFx0XHRcblx0XHR9XG5cdFx0cmV0dXJuIHJldk1hcCAmJiB0aGlzLmdldFVwZGF0ZXMocmV2TWFwKSB8fCByZWZMaXN0LnJlZHVjZSgoIGRhdGEsIHJlZiApID0+IHtcblx0XHRcdHdhbGtuU2V0KGRhdGEsIHJlZi5hbGlhcyB8fCByZWYucGF0aCwgdGhpcy5yZXRyaWV2ZShyZWYucGF0aCkpXG5cdFx0XHRyZXR1cm4gZGF0YTtcblx0XHR9LCB7fSk7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBHZXQgY3VycmVudCBkYXRhIHZhbHVlIGZyb20ganNvbiBwYXRoXG5cdCAqIEBwYXJhbSBwYXRoXG5cdCAqIEByZXR1cm5zIHtzdHJpbmd8Kn1cblx0ICovXG5cdHJldHJpZXZlKCBwYXRoID0gXCJcIiApIHtcblx0XHRwYXRoID0gaXMuc3RyaW5nKHBhdGgpID8gcGF0aC5zcGxpdCgnLicpIDogcGF0aDtcblx0XHRyZXR1cm4gcGF0aCAmJlxuXHRcdFx0dGhpcy5zdG9yZXNbcGF0aFswXV0gJiZcblx0XHRcdHRoaXMuc3RvcmVzW3BhdGhbMF1dLnJldHJpZXZlICYmXG5cdFx0XHR0aGlzLnN0b3Jlc1twYXRoWzBdXS5yZXRyaWV2ZShwYXRoLnNsaWNlKDEpKTtcblx0fVxuXHRcblx0LyoqXG5cdCAqIEdldCBjdXJyZW50IHN0b3JlIGZyb20ganNvbiBwYXRoXG5cdCAqIEBwYXJhbSBwYXRoXG5cdCAqIEByZXR1cm5zIHtzdHJpbmd8Kn1cblx0ICovXG5cdHJldHJpZXZlU3RvcmUoIHBhdGggPSBcIlwiICkge1xuXHRcdHBhdGggPSBpcy5zdHJpbmcocGF0aCkgPyBwYXRoLnNwbGl0KCcuJykgOiBwYXRoO1xuXHRcdHJldHVybiBwYXRoXG5cdFx0XHQmJiBwYXRoLmxlbmd0aFxuXHRcdFx0JiYgKFxuXHRcdFx0XHRwYXRoLmxlbmd0aCAhPSAxICYmIHRoaXMuc3RvcmVzW3BhdGhbMF1dLnJldHJpZXZlU3RvcmVcblx0XHRcdFx0PyB0aGlzLnN0b3Jlc1twYXRoWzBdXS5yZXRyaWV2ZVN0b3JlKHBhdGguc2xpY2UoMSkpXG5cdFx0XHRcdDogcGF0aC5sZW5ndGggPT0gMSAmJiB0aGlzLnN0b3Jlc1twYXRoWzBdXVxuXHRcdFx0KTtcblx0fVxuXHRcblx0LyoqXG5cdCAqIEdldCBvciB1cGRhdGUgc3RvcmVzUmV2TWFwJ3MgcmV2aXNpb25zXG5cdCAqIEBwYXJhbSBzdG9yZXNSZXZNYXBcblx0ICogQHBhcmFtIGxvY2FsXG5cdCAqIEByZXR1cm5zIHt7fX1cblx0ICovXG5cdGdldFN0b3Jlc1JldnMoIHN0b3Jlc1Jldk1hcCA9IHt9LCBsb2NhbCApIHtcblx0XHRsZXQgY3R4ID0gdGhpcy5fLl9zY29wZTtcblx0XHRpZiAoICFzdG9yZXNSZXZNYXAgKSB7XG5cdFx0XHRzdG9yZXNSZXZNYXAgPSB7fTtcblx0XHR9XG5cdFx0T2JqZWN0LmtleXMoY3R4KS5mb3JFYWNoKFxuXHRcdFx0aWQgPT4ge1xuXHRcdFx0XHRpZiAoIGlkID09IFwiJHBhcmVudFwiICkgcmV0dXJuO1xuXHRcdFx0XHRpZiAoICFpcy5mbihjdHhbaWRdKVxuXHRcdFx0XHQpIHtcblx0XHRcdFx0XHRzdG9yZXNSZXZNYXBbaWRdID0gY3R4W2lkXS5fcmV2O1xuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2UgaWYgKCAhc3RvcmVzUmV2TWFwLmhhc093blByb3BlcnR5KGlkKSApXG5cdFx0XHRcdFx0c3RvcmVzUmV2TWFwW2lkXSA9IGZhbHNlXG5cdFx0XHR9XG5cdFx0KTtcblx0XHRpZiAoICFsb2NhbCApIHtcblx0XHRcdHRoaXMuXy5fbWl4ZWQucmVkdWNlKCggdXBkYXRlZCwgY3R4ICkgPT4gKGN0eC5nZXRTdG9yZXNSZXZzKHN0b3Jlc1Jldk1hcCksIHN0b3Jlc1Jldk1hcCksIHN0b3Jlc1Jldk1hcCk7XG5cdFx0XHR0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC5nZXRTdG9yZXNSZXZzKHN0b3Jlc1Jldk1hcCk7XG5cdFx0fVxuXHRcdHJldHVybiBzdG9yZXNSZXZNYXA7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBHZXQgdXBkYXRlZCBvdXRwdXQgYmFzaW5nIHN0b3Jlc1Jldk1hcCdzIHJldmlzaW9ucy5cblx0ICogSWYgYSBzdG9yZSBpbiAnc3RvcmVzUmV2TWFwJyB3YXMgdXBkYXRlZDsgYWRkIGl0IHRvICdvdXRwdXQnICYgdXBkYXRlIHN0b3Jlc1Jldk1hcFxuXHQgKiBAcGFyYW0gc3RvcmVzUmV2TWFwXG5cdCAqIEBwYXJhbSBvdXRwdXRcblx0ICogQHBhcmFtIHVwZGF0ZWRcblx0ICogQHJldHVybnMgeyp8e319XG5cdCAqL1xuXHRnZXRSZWZzVXBkYXRlcyggcmVmcywgcmV2TWFwLCBvdXRwdXQgKSB7XG5cdFx0cmV2TWFwID0gcmV2TWFwIHx8IHJlZnNcblx0XHRcdC5tYXAoaWQgPT4gKGlzLnN0cmluZyhpZCkgPyBpZCA6IGlkLm5hbWUpKVxuXHRcdFx0Lm1hcChpZCA9PiAodGhpcy5wYXJzZVJlZihpZCkpKVxuXHRcdFx0LnJlZHVjZSgoIHJldnMsIHJlZiApID0+IHtcblx0XHRcdFx0cmV2c1tyZWYuc3RvcmVJZF0gPSByZXZzW3JlZi5zdG9yZUlkXSB8fCB7XG5cdFx0XHRcdFx0cmV2IDogMCxcblx0XHRcdFx0XHRyZWZzOiBbXVxuXHRcdFx0XHR9O1xuXHRcdFx0XHRyZXZzW3JlZi5zdG9yZUlkXS5yZWZzLnB1c2gocmVmKTtcblx0XHRcdFx0cmV0dXJuIHJldnM7XG5cdFx0XHR9LCB7fSk7XG5cdFx0XG5cdFx0cmV0dXJuIHRoaXMuZ2V0VXBkYXRlcyhyZXZNYXAsIG91dHB1dClcblx0fVxuXHRcblx0LyoqXG5cdCAqIEdldCBvciB1cGRhdGUgb3V0cHV0IGJhc2luZyBzdG9yZXNSZXZNYXAncyByZXZpc2lvbnMuXG5cdCAqIElmIGEgc3RvcmUgaW4gJ3N0b3Jlc1Jldk1hcCcgd2FzIHVwZGF0ZWQ7IGFkZCBpdCB0byAnb3V0cHV0JyAmIHVwZGF0ZSBzdG9yZXNSZXZNYXBcblx0ICogQHRvZG86IG9wdGltIC8gdXNlIHByb3Rvc1xuXHQgKiBAcGFyYW0gc3RvcmVzUmV2TWFwXG5cdCAqIEBwYXJhbSBvdXRwdXRcblx0ICogQHBhcmFtIHVwZGF0ZWRcblx0ICogQHJldHVybnMgeyp8e319XG5cdCAqL1xuXHRnZXRVcGRhdGVzKCBzdG9yZXNSZXZNYXAsIG91dHB1dCwgdXBkYXRlZCApIHtcblx0XHRcblx0XHRvdXRwdXQgICAgICAgPSBvdXRwdXQgfHwge307XG5cdFx0c3RvcmVzUmV2TWFwID0gc3RvcmVzUmV2TWFwIHx8IHRoaXMuX2dldFJldk1hcCgpO1xuXHRcdE9iamVjdC5rZXlzKHN0b3Jlc1Jldk1hcCkuZm9yRWFjaChcblx0XHRcdGlkID0+IHtcblx0XHRcdFx0bGV0IHN0b3JlICAgICAgICA9IHRoaXMuc3RvcmVzW2lkXTtcblx0XHRcdFx0c3RvcmVzUmV2TWFwW2lkXSA9IHN0b3Jlc1Jldk1hcFtpZF0gfHwgeyByZXY6IDAsIHJlZnM6IFtdIH07XG5cdFx0XHRcdFxuXHRcdFx0XHRpZiAoIHN0b3JlICYmIGlzLmZuKHN0b3JlKSApIHtcblx0XHRcdFx0XHR1cGRhdGVkICAgID0gdHJ1ZTtcblx0XHRcdFx0XHRvdXRwdXRbaWRdID0gdW5kZWZpbmVkO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2UgaWYgKCBzdG9yZSAmJiBzdG9yZS5fcmV2ID4gc3RvcmVzUmV2TWFwW2lkXS5yZXYgKSB7XG5cdFx0XHRcdFx0c3RvcmVzUmV2TWFwW2lkXS5yZXYgPSBzdG9yZS5fcmV2O1xuXHRcdFx0XHRcdHVwZGF0ZWQgICAgICAgICAgICAgID0gdHJ1ZTtcblx0XHRcdFx0XHRzdG9yZXNSZXZNYXBbaWRdLnJlZnMuZm9yRWFjaChcblx0XHRcdFx0XHRcdHJlZiA9PiB7XG5cdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0XHRvdXRwdXRbcmVmLmFsaWFzXSA9IHRoaXMucmV0cmlldmUocmVmLnBhdGgpXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0KVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0KVxuXHRcdHJldHVybiB1cGRhdGVkICYmIG91dHB1dDtcblx0fVxuXHRcblx0LyoqXG5cdCAqIFJlY3Vyc2l2ZWx5IGdldCBhbGwgc3RvcmVzIHJldnNcblx0ICogQHBhcmFtIGNoaWxkc1xuXHQgKiBAcmV0dXJucyB7QXJyYXl9XG5cdCAqIEBwcml2YXRlXG5cdCAqL1xuXHRfZ2V0UmV2TWFwKCBzdG9yZXNSZXZNYXAgPSB7fSApIHtcblx0XHRsZXQgY3R4ID0gdGhpcy5fLl9zY29wZTtcblx0XHRPYmplY3Qua2V5cyhjdHgpLmZvckVhY2goXG5cdFx0XHRpZCA9PiB7XG5cdFx0XHRcdGlmICggaWQgPT0gXCIkcGFyZW50XCIgfHwgc3RvcmVzUmV2TWFwW2lkXSApIHJldHVybjtcblx0XHRcdFx0c3RvcmVzUmV2TWFwW2lkXSA9IHsgcmV2OiBjdHhbaWRdLl9yZXYsIHJlZnM6IFtdIH07XG5cdFx0XHRcdFxuXHRcdFx0fSk7XG5cdFx0dGhpcy5fLl9taXhlZC5yZWR1Y2VSaWdodChcblx0XHRcdCggc3RvcmVzUmV2TWFwLCBjdHggKSA9PiAoY3R4Ll9nZXRSZXZNYXAoc3RvcmVzUmV2TWFwKSksIHN0b3Jlc1Jldk1hcCk7XG5cdFx0dGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuX2dldFJldk1hcChzdG9yZXNSZXZNYXApO1xuXHRcdHJldHVybiBzdG9yZXNSZXZNYXA7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBSZWN1cnNpdmVseSBnZXQgYWxsIGNoaWxkIHNjb3Blc1xuXHQgKiBAcGFyYW0gY2hpbGRzXG5cdCAqIEByZXR1cm5zIHtBcnJheX1cblx0ICogQHByaXZhdGVcblx0ICovXG5cdF9nZXRBbGxDaGlsZHMoIGNoaWxkcyA9IFtdICkge1xuXHRcdGNoaWxkcy5wdXNoKC4uLnRoaXMuXy5jaGlsZFNjb3Blcyk7XG5cdFx0dGhpcy5fLmNoaWxkU2NvcGVzLmZvckVhY2goXG5cdFx0XHRjdHggPT4ge1xuXHRcdFx0XHRjdHguX2dldEFsbENoaWxkcyhjaGlsZHMpO1xuXHRcdFx0fVxuXHRcdCk7XG5cdFx0cmV0dXJuIGNoaWxkcztcblx0fVxuXHRcblx0LyoqXG5cdCAqIFNlcmlhbGl6ZSBhbGwgYWN0aXZlIHN0b3JlcyBzdGF0ZSAmIGRhdGEgaW4gZXZlcnkgY2hpbGRzICYgbWl4ZWQgc2NvcGVzXG5cdCAqXG5cdCAqIFNjb3BlcyB3aXRob3V0IGtleSBvciBpZCBhcmUgaWdub3JlZFxuXHQgKiBAcGFyYW0gb3V0cHV0XG5cdCAqIEByZXR1cm5zIHt7fX1cblx0ICovXG5cdHNlcmlhbGl6ZSggY2ZnID0ge30sIG91dHB1dCA9IHt9ICkge1xuXHRcdGxldCBjdHggICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSB0aGlzLl8uX3Njb3BlLFxuXHRcdCAgICB7IGJhc2VJZCwga2V5LCBrZXlQSUQsIGluY3JlbWVudElkIH0gPSB0aGlzLl8sXG5cdFx0ICAgIHtcblx0XHRcdCAgICBhbGlhcyxcblx0XHRcdCAgICBwYXJlbnRBbGlhcyxcblx0XHQgICAgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID0gY2ZnLFxuXHRcdCAgICBzaWQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSBrZXlcblx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAocGFyZW50QWxpYXMgfHwga2V5UElEKSArICc+JyArIGtleVxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGFsaWFzIHx8IHBhcmVudEFsaWFzICYmIChwYXJlbnRBbGlhcyArICcvJyArIGJhc2VJZCkgfHwgdGhpcy5faWQ7XG5cdFx0XG5cdFx0XG5cdFx0Ly9hbGlhcyA9IGFsaWFzIHx8IGJhc2VJZDtcblx0XHRyZXR1cm4gdGhpcy5zZXJpYWxpemVfZXgoY2ZnLCBvdXRwdXQsIHNpZCwgYWxpYXMsIFtcIiRwYXJlbnRcIl0pXG5cdH1cblx0XG5cdHNlcmlhbGl6ZV9leCggY2ZnID0ge30sIG91dHB1dCA9IHt9LCBzaWQsIGFsaWFzLCBleGNsdWRlICkge1xuXHRcdGxldCBjdHggICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSB0aGlzLl8uX3Njb3BlLFxuXHRcdCAgICB7IGJhc2VJZCwga2V5LCBrZXlQSUQsIGluY3JlbWVudElkIH0gPSB0aGlzLl8sXG5cdFx0ICAgIHtcblx0XHRcdCAgICB3aXRoQ2hpbGRzID0gdHJ1ZSxcblx0XHRcdCAgICB3aXRoUGFyZW50cyxcblx0XHRcdCAgICB3aXRoTWl4ZWQgID0gdHJ1ZSxcblx0XHRcdCAgICBub3JlZnMsXG5cdFx0XHQgICAgcGFyZW50QWxpYXMsXG5cdFx0XHQgICAgYWxpYXNlcyAgICA9IHt9XG5cdFx0ICAgIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA9IGNmZztcblx0XHRcblx0XHRpZiAoIGtleVdhbGtuR2V0KG91dHB1dCwgc2lkKSApIHtcblx0XHRcdGlmICggIWluY3JlbWVudElkICkvLyBkb25lXG5cdFx0XHRcdHJldHVybiBvdXRwdXQ7XG5cdFx0XHRlbHNlIGlmICggaW5jcmVtZW50SWQgKSB7Ly8gZ2VuZXJhdGUga2V5IGlkXG5cdFx0XHRcdGxldCBpID0gLTE7XG5cdFx0XHRcdHdoaWxlICgga2V5V2Fsa25HZXQob3V0cHV0LCBzaWQgKyAnWycgKyAoKytpKSArICddJykgKSA7XG5cdFx0XHRcdHNpZCA9IHNpZCArICdbJyArIGkgKyAnXSc7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdC8vQHRvZG8gOiBiZXR0ZXIgc2VyaWFsaXplIG1ldGhvZFxuXHRcdGtleVdhbGtuU2V0KG91dHB1dCwgc2lkLCB7fSk7XG5cdFx0XG5cdFx0T2JqZWN0LmtleXMoY3R4KS5mb3JFYWNoKFxuXHRcdFx0aWQgPT4ge1xuXHRcdFx0XHRpZiAoIGV4Y2x1ZGUuaW5jbHVkZXMoaWQpIHx8IGlzLnJzU3RvcmVDbGFzcyhjdHhbaWRdKSB8fCBpcy5yc1Njb3BlQ2xhc3MoY3R4W2lkXSkgKVxuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XG5cdFx0XHRcdGN0eFtpZF0uc2VyaWFsaXplKHsgLi4uY2ZnLCBwYXJlbnRBbGlhczogc2lkIH0sIG91dHB1dCk7XG5cdFx0XHR9XG5cdFx0KVxuXHRcdFxuXHRcdC8vd2l0aFBhcmVudHMgJiYgdGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuc2VyaWFsaXplKHtcblx0XHQvL1x0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpdGhDaGlsZCAgOiBmYWxzZSxcblx0XHQvL1x0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpdGhQYXJlbnRzOiB0cnVlLFxuXHRcdC8vXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aE1peGVkLFxuXHRcdC8vXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9yZWZzXG5cdFx0Ly8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgb3V0cHV0KTtcblx0XHRcblx0XHR3aXRoQ2hpbGRzICYmIHRoaXMuXy5jaGlsZFNjb3Blcy5mb3JFYWNoKFxuXHRcdFx0Y3R4ID0+IHtcblx0XHRcdFx0IWN0eC5fLmlzTG9jYWxJZCAmJiBjdHguc2VyaWFsaXplKHtcblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aENoaWxkICA6IHRydWUsXG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpdGhQYXJlbnRzOiBmYWxzZSxcblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50QWxpYXM6IHNpZCxcblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aE1peGVkLFxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JlZnMsXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBvdXRwdXQpO1xuXHRcdFx0fVxuXHRcdCk7XG5cdFx0XG5cdFx0d2l0aE1peGVkICYmIHRoaXMuXy5fbWl4ZWQuZm9yRWFjaChcblx0XHRcdGN0eCA9PiB7XG5cdFx0XHRcdCFjdHguXy5pc0xvY2FsSWQgJiYgY3R4LnNlcmlhbGl6ZSh7XG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpdGhDaGlsZCAgOiBmYWxzZSxcblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aFBhcmVudHM6IGZhbHNlLFxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRoTWl4ZWQsXG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcmVmc1xuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgb3V0cHV0KTtcblx0XHRcdH1cblx0XHQpO1xuXHRcdFxuXHRcdGlmICggYWxpYXMgKSB7XG5cdFx0XHRvdXRwdXQgPSBPYmplY3Qua2V5cyhvdXRwdXQpXG5cdFx0XHQgICAgICAgICAgICAgICAucmVkdWNlKFxuXHRcdFx0XHQgICAgICAgICAgICAgICAoIGgsIGsgKSA9PiAoXG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgaFtrID09PSB0aGlzLl9pZFxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgPyBhbGlhc1xuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgOiBrXSA9IG91dHB1dFtrXSxcblx0XHRcdFx0XHRcdCAgICAgICAgICAgICAgIGhcblx0XHRcdFx0ICAgICAgICAgICAgICAgKSxcblx0XHRcdFx0ICAgICAgICAgICAgICAge31cblx0XHRcdCAgICAgICAgICAgICAgIClcblx0XHR9XG5cdFx0cmV0dXJuIG91dHB1dDtcblx0fVxuXHRcblx0LyoqXG5cdCAqIFJlc3RvcmUgc3RhdGUgJiBkYXRhIGZyb20gdGhlIHNlcmlhbGl6ZSBmblxuXHQgKiBAcGFyYW0gc25hcHNob3Rcblx0ICogQHBhcmFtIGZvcmNlXG5cdCAqL1xuXHRyZXN0b3JlKCBzbmFwc2hvdCwgY2ZnID0ge30sIGZvcmNlID0gaXMuYm9vbChjZmcpICYmIGNmZyApIHtcblx0XHRsZXQgY3R4ID0gdGhpcy5fLl9zY29wZSwgc25hcDtcblx0XHRcblx0XHRpZiAoIHNuYXBzaG90ICYmIGNmZyAmJiBjZmcuYWxpYXMgJiYgY2ZnLmFsaWFzICE9IHRoaXMuX2lkICkge1xuXHRcdFx0c25hcCA9IHtcblx0XHRcdFx0Li4uc25hcHNob3QsXG5cdFx0XHRcdFt0aGlzLl9pZF06IHNuYXBzaG90W2NmZy5hbGlhc11cblx0XHRcdH1cblx0XHRcdGRlbGV0ZSBzbmFwW2NmZy5hbGlhc107XG5cdFx0XHRzbmFwc2hvdCA9IHNuYXA7XG5cdFx0fVxuXHRcdHNuYXBzaG90ID0gc25hcHNob3Rcblx0XHRcdCYmIGtleVdhbGtuR2V0KHNuYXBzaG90LCB0aGlzLl9pZClcblx0XHRcdHx8IHRoaXMudGFrZVNuYXBzaG90QnlLZXkodGhpcy5faWQpO1xuXHRcdFxuXHRcdFxuXHRcdGlmICggIXNuYXBzaG90IClcblx0XHRcdHJldHVybjtcblx0XHRcblx0XHR0aGlzLl8uc25hcHNob3QgPSB7IC4uLnNuYXBzaG90IH07XG5cdFx0XG5cdFx0c25hcCAgICAgICAgICA9IHNuYXBzaG90WycvJ107XG5cdFx0c25hcHNob3RbJy8nXSA9IHsgLi4uc25hcCB9O1xuXHRcdHNuYXAgJiYgT2JqZWN0LmtleXMoc25hcCkuZm9yRWFjaChcblx0XHRcdG5hbWUgPT4ge1xuXHRcdFx0XHRpZiAoIG5hbWUgPT0gXCIkcGFyZW50XCIgKSByZXR1cm47XG5cdFx0XHRcdFxuXHRcdFx0XHRpZiAoIGN0eFtuYW1lXSApIHtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHRpZiAoIGZvcmNlICYmICFpcy5mbihjdHhbbmFtZV0pIClcblx0XHRcdFx0XHRcdGN0eFtuYW1lXS5kZXN0cm95KCk7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0dGhpcy5fbW91bnQobmFtZSk7Ly8gcXVpZXRcblx0XHRcdFx0fVxuXHRcdFx0XHRcblx0XHRcdH1cblx0XHQpXG5cdFx0XG5cdFx0dGhpcy5fLl9taXhlZC5mb3JFYWNoKFxuXHRcdFx0Y3R4ID0+IHtcblx0XHRcdFx0IWN0eC5fLmlzTG9jYWxJZCAmJiBjdHgucmVzdG9yZSh1bmRlZmluZWQsIGZvcmNlKTtcblx0XHRcdH1cblx0XHQpO1xuXHRcdFxuXHRcdHRoaXMuXy5jaGlsZFNjb3Blcy5mb3JFYWNoKFxuXHRcdFx0Y3R4ID0+IHtcblx0XHRcdFx0IWN0eC5fLmlzTG9jYWxJZCAmJiBjdHgucmVzdG9yZSh1bmRlZmluZWQsIGZvcmNlKTtcblx0XHRcdH1cblx0XHQpO1xuXHR9XG5cdFxuXHRnZXRTbmFwc2hvdEJ5S2V5KCBrZXksIGxvY2FsICkge1xuXHRcdC8vIG9ubHkgaGF2ZSB0aGUgbG9jYWwgc25hcFxuXHRcdGlmICggdGhpcy5fLnNuYXBzaG90ICYmIGtleS5zdGFydHNXaXRoKHRoaXMuX2lkKSApIHtcblx0XHRcdGxldCBvYmogPSBrZXlXYWxrbkdldCh0aGlzLl8uc25hcHNob3QsIGtleS5zdWJzdHIodGhpcy5faWQubGVuZ3RoKSlcblx0XHRcdC8vaWYgKCBvYmogKSB7XG5cdFx0XHQvLyAgICB0aGlzLmRlbGV0ZVNuYXBzaG90QnlLZXkoa2V5KTtcblx0XHRcdC8vfVxuXHRcdFx0cmV0dXJuIG9iajtcblx0XHR9XG5cdFx0ZWxzZSByZXR1cm4gIWxvY2FsXG5cdFx0XHQmJiB0aGlzLnBhcmVudFxuXHRcdFx0JiYgdGhpcy5wYXJlbnQuZ2V0U25hcHNob3RCeUtleShrZXkpXG5cdFx0XHR8fFxuXHRcdFx0dGhpcy5zdG9yZXMuJHBhcmVudFxuXHRcdFx0JiYgdGhpcy5zdG9yZXMuJHBhcmVudC5nZXRTbmFwc2hvdEJ5S2V5KGtleSk7XG5cdFx0XG5cdH1cblx0XG5cdGdldFNuYXBzaG90QnlLZXlFeHQoIHNuYXBzaG90LCBrZXksIGxvY2FsICkge1xuXHRcdC8vIG9ubHkgaGF2ZSB0aGUgbG9jYWwgc25hcFxuXHRcdGlmICggc25hcHNob3QgKSB7XG5cdFx0XHRsZXQgb2JqID0ga2V5V2Fsa25HZXQoc25hcHNob3QsIGtleSlcblx0XHRcdHJldHVybiBvYmo7XG5cdFx0fVxuXHRcdFxuXHR9XG5cdFxuXHR0YWtlU25hcHNob3RCeUtleSgga2V5LCBsb2NhbCApIHtcblx0XHRpZiAoIHRoaXMuXy5zbmFwc2hvdCAmJiBrZXkuc3RhcnRzV2l0aCh0aGlzLl9pZCkgKSB7XG5cdFx0XHRsZXQgb2JqID0ga2V5V2Fsa25HZXQodGhpcy5fLnNuYXBzaG90LCBrZXkuc3Vic3RyKHRoaXMuX2lkLmxlbmd0aCkpXG5cdFx0XHRpZiAoIG9iaiApIHtcblx0XHRcdFx0dGhpcy5kZWxldGVTbmFwc2hvdEJ5S2V5KGtleSwgdHJ1ZSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gb2JqO1xuXHRcdH1cblx0XHRlbHNlIHJldHVybiAhbG9jYWxcblx0XHRcdCYmIHRoaXMucGFyZW50XG5cdFx0XHQmJiB0aGlzLnBhcmVudC50YWtlU25hcHNob3RCeUtleShrZXkpXG5cdFx0XHR8fFxuXHRcdFx0dGhpcy5zdG9yZXMuJHBhcmVudFxuXHRcdFx0JiYgdGhpcy5zdG9yZXMuJHBhcmVudC50YWtlU25hcHNob3RCeUtleShrZXkpO1xuXHR9XG5cdFxuXHRkZWxldGVTbmFwc2hvdEJ5S2V5KCBrZXksIGxvY2FsICkge1xuXHRcdGlmICggdGhpcy5fLnNuYXBzaG90ICYmIGtleS5zdGFydHNXaXRoKHRoaXMuX2lkKSApIHtcblx0XHRcdGxldCBvYmogPSBrZXlXYWxrbkdldCh0aGlzLl8uc25hcHNob3QsIGtleS5zdWJzdHIodGhpcy5faWQubGVuZ3RoKS5yZXBsYWNlKC9eKC4qW1xcPnxcXC9dKVteXFw+fFxcL10rJC9pZywgJyQxJykpXG5cdFx0XHRpZiAoIG9iaiApXG5cdFx0XHRcdGRlbGV0ZSBvYmpba2V5LnJlcGxhY2UoL14uKltcXD58XFwvXShbXlxcPnxcXC9dKykkL2lnLCAnJDEnKV1cblx0XHR9XG5cdFx0cmV0dXJuICFsb2NhbFxuXHRcdFx0JiYgdGhpcy5wYXJlbnRcblx0XHRcdCYmIHRoaXMucGFyZW50LmRlbGV0ZVNuYXBzaG90QnlLZXkoa2V5KVxuXHRcdFx0fHxcblx0XHRcdHRoaXMuc3RvcmVzLiRwYXJlbnRcblx0XHRcdCYmIHRoaXMuc3RvcmVzLiRwYXJlbnQuZGVsZXRlU25hcHNob3RCeUtleShrZXkpO1xuXHR9XG5cdFxuXHRzZXRTdGF0ZSggcFN0YXRlICkge1xuXHRcdE9iamVjdC5rZXlzKHBTdGF0ZSlcblx0XHQgICAgICAuZm9yRWFjaChrID0+ICh0aGlzLnN0YXRlW2tdID0gcFN0YXRlW2tdKSlcblx0fVxuXHRcblx0LyoqXG5cdCAqIGdldCBhIHBhcnNlZCByZWZlcmVuY2Vcblx0ICogQHBhcmFtIF9yZWZcblx0ICogQHJldHVybnMge3tzdG9yZUlkLCBwYXRoLCBhbGlhczogKiwgcmVmOiAqfX1cblx0ICovXG5cdHBhcnNlUmVmKCBfcmVmICkge1xuXHRcdGlmICggdHlwZW9mIF9yZWYgIT09ICdzdHJpbmcnICkgey8vIEB0b2RvIDogcm0gdGhpc1xuXHRcdFx0dGhpcy5yZWdpc3Rlcih7IFtfcmVmLm5hbWVdOiBfcmVmLnN0b3JlIH0pO1xuXHRcdFx0X3JlZiA9IF9yZWYubmFtZTtcblx0XHR9XG5cdFx0bGV0IHJlZiA9IF9yZWYuc3BsaXQoJzonKTtcblx0XHRyZWZbMF0gID0gcmVmWzBdLnNwbGl0KCcuJyk7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHN0b3JlSWQ6IHJlZlswXVswXSxcblx0XHRcdHBhdGggICA6IHJlZlswXSxcblx0XHRcdGFsaWFzICA6IHJlZlsxXSB8fCByZWZbMF1bcmVmWzBdLmxlbmd0aCAtIDFdLFxuXHRcdFx0cmVmICAgIDogX3JlZlxuXHRcdH07XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBEaXNwYXRjaCBhbiBhY3Rpb24gdG8gdGhlIHRvcCBwYXJlbnQgJiBtaXhlZCBzY29wZXMsIGluIGFsbCBzdG9yZXNcblx0ICpcblx0ICogQHBhcmFtIGFjdGlvblxuXHQgKiBAcGFyYW0gZGF0YVxuXHQgKiBAcmV0dXJucyB7U2NvcGV9XG5cdCAqL1xuXHRkaXNwYXRjaCggYWN0aW9uLCAuLi5hcmd6ICkge1xuXHRcdGlmICggdGhpcy5kZWFkICkge1xuXHRcdFx0Y29uc29sZS53YXJuKFwiRGlzcGF0Y2ggd2FzIGNhbGxlZCBvbiBhIGRlYWQgc2NvcGUsIGNoZWNrIHlvdSdyZSBhc3luYyBmdW5jdGlvbnMgaW4gdGhpcyBzdGFjay4uLlwiLCAobmV3IEVycm9yKCkpLnN0YWNrKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0bGV0IGJBY3RzID0gdGhpcy5fLl9ib3VuZGVkQWN0aW9ucztcblx0XHRPYmplY3Qua2V5cyh0aGlzLl8uX3Njb3BlKVxuXHRcdCAgICAgIC5mb3JFYWNoKFxuXHRcdFx0ICAgICAgaWQgPT4ge1xuXHRcdFx0XHQgICAgICBpZiAoIGlkID09IFwiJHBhcmVudFwiICkgcmV0dXJuO1xuXHRcdFx0XHQgICAgICBpZiAoICFpcy5mbih0aGlzLl8uX3Njb3BlW2lkXSkgKVxuXHRcdFx0XHRcdCAgICAgIHRoaXMuXy5fc2NvcGVbaWRdLnRyaWdnZXIoYWN0aW9uLCAuLi5hcmd6KTtcblx0XHRcdCAgICAgIH1cblx0XHQgICAgICApO1xuXHRcdFxuXHRcdGlmICggYkFjdHMgJiYgYkFjdHMudGVzdChhY3Rpb24pIClcblx0XHRcdHJldHVybjtcblx0XHRcblx0XHR0aGlzLl8uX21peGVkLmZvckVhY2goKCBjdHggKSA9PiAoY3R4LmRpc3BhdGNoKGFjdGlvbiwgLi4uYXJneikpKTtcblx0XHR0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC5kaXNwYXRjaChhY3Rpb24sIC4uLmFyZ3opO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cdFxuXHQvL1xuXHR0cmlnZ2VyKCkge1xuXHRcdHRoaXMuZGlzcGF0Y2goLi4uYXJndW1lbnRzKTtcblx0fVxuXHRcblx0LyoqXG5cdCAqIG9uY2UoJ3N0YWJsZScsIGNiKVxuXHQgKiBAcGFyYW0gb2JqIHtSZWFjdC5Db21wb25lbnR8U3RvcmV8ZnVuY3Rpb24pXG5cdCAqIEBwYXJhbSBrZXkge3N0cmluZ30gb3B0aW9uYWwga2V5IHdoZXJlIHRvIG1hcCB0aGUgcHVibGljIHN0YXRlXG5cdCAqL1xuXHR0aGVuKCBjYiApIHtcblx0XHRpZiAoICF0aGlzLl9zdGFibGUgKVxuXHRcdFx0cmV0dXJuIHRoaXMub25jZSgnc3RhYmxlJywgZSA9PiB0aGlzLnRoZW4oY2IpKTtcblx0XHRcblx0XHRyZXR1cm4gY2IodGhpcy5kYXRhKTtcblx0fVxuXHRcblx0b25jZVN0YWJsZVRyZWUoIGNiICkge1xuXHRcdGlmICggdGhpcy5fLnVuU3RhYmxlQ2hpbGRzIClcblx0XHRcdHJldHVybiB0aGlzLm9uY2UoJ3N0YWJsZVRyZWUnLCBlID0+IHRoaXMub25jZVN0YWJsZVRyZWUoY2IpKTtcblx0XHQvL2lmICggIXRoaXMuX3N0YWJsZSApXG5cdFx0Ly9cdHJldHVybiB0aGlzLm9uY2UoJ3N0YWJsZScsIGUgPT4gdGhpcy5vbmNlU3RhYmxlVHJlZShjYikpO1xuXHRcdFxuXHRcdHJldHVybiBjYih0aGlzLmRhdGEpO1xuXHR9XG5cdFxuXHQvKipcblx0ICogQ2FsbCByZXRhaW4gb24gdGhlIHNjb3BlZCBzdG9yZXMgYmFzaW5nIGdpdmVuXG5cdCAqXG5cdCAqIEBwYXJhbSBzdG9yZXNcblx0ICogQHBhcmFtIHJlYXNvblxuXHQgKi9cblx0cmV0YWluU3RvcmVzKCBzdG9yZXMgPSBbXSwgcmVhc29uICkge1xuXHRcdC8vc3RvcmVzLmZvckVhY2goXG5cdFx0Ly8gICAgaWQgPT4gKCAoICF0aGlzLnN0b3Jlc1sgaWQgXSB8fCAhdGhpcy5zdG9yZXNbIGlkIF0ucmV0YWluICkgJiYgY29uc29sZS53YXJuKGlkLCByZWFzb24pIClcblx0XHQvLylcblx0XHRzdG9yZXMuZm9yRWFjaChcblx0XHRcdGlkID0+ICh0aGlzLnN0b3Jlc1tpZF0gJiYgdGhpcy5zdG9yZXNbaWRdLnJldGFpbiAmJiB0aGlzLnN0b3Jlc1tpZF0ucmV0YWluKHJlYXNvbikpXG5cdFx0KVxuXHR9XG5cdFxuXHQvKipcblx0ICogQ2FsbCByZXRhaW4gb24gdGhlIHNjb3BlZCBzdG9yZXNcblx0ICpcblx0ICogQHBhcmFtIHN0b3Jlc1xuXHQgKiBAcGFyYW0gcmVhc29uXG5cdCAqL1xuXHRkaXNwb3NlU3RvcmVzKCBzdG9yZXMgPSBbXSwgcmVhc29uICkge1xuXHRcdHN0b3Jlcy5mb3JFYWNoKFxuXHRcdFx0aWQgPT4gKHRoaXMuc3RvcmVzW2lkXSAmJiB0aGlzLnN0b3Jlc1tpZF0uZGlzcG9zZSAmJiB0aGlzLnN0b3Jlc1tpZF0uZGlzcG9zZShyZWFzb24pKVxuXHRcdClcblx0fVxuXHRcblx0LyoqXG5cdCAqIEtlZXAgdGhlIHNjb3BlIHVuc3RhYmxlIHVudGlsIHJlbGVhc2UgaXMgY2FsbGVkXG5cdCAqIEBwYXJhbSByZWFzb25cblx0ICovXG5cdHdhaXQoIHJlYXNvbiApIHtcblx0XHQvL2NvbnNvbGUubG9nKFwid2FpdFwiLCByZWFzb24pO1xuXHRcdHRoaXMuX3N0YWJsZSAmJiAhdGhpcy5fX2xvY2tzLmFsbCAmJiB0aGlzLmVtaXQoXCJ1bnN0YWJsZVwiLCB0aGlzKTtcblx0XHR0aGlzLl9zdGFibGUgPSBmYWxzZTtcblx0XHR0aGlzLl9fbG9ja3MuYWxsKys7XG5cdFx0aWYgKCByZWFzb24gKSB7XG5cdFx0XHR0aGlzLl9fbG9ja3NbcmVhc29uXSA9IHRoaXMuX19sb2Nrc1tyZWFzb25dIHx8IDA7XG5cdFx0XHR0aGlzLl9fbG9ja3NbcmVhc29uXSsrO1xuXHRcdH1cblx0fVxuXHRcblx0XG5cdC8qKlxuXHQgKiBTdGFiaWxpemUgdGhlIHNjb3BlIGlmIG5vIG1vcmUgbG9ja3MgcmVtYWluICh3YWl0IGZuKVxuXHQgKiBAcGFyYW0gcmVhc29uXG5cdCAqL1xuXHRyZWxlYXNlKCByZWFzb24gKSB7XG5cdFx0XG5cdFx0aWYgKCByZWFzb24gKSB7XG5cdFx0XHRpZiAoIHRoaXMuX19sb2Nrc1tyZWFzb25dID09IDAgKVxuXHRcdFx0XHRjb25zb2xlLmVycm9yKFwiUmVsZWFzZSBtb3JlIHRoYW4gbG9ja2luZyAhXCIsIHJlYXNvbik7XG5cdFx0XHR0aGlzLl9fbG9ja3NbcmVhc29uXSA9IHRoaXMuX19sb2Nrc1tyZWFzb25dIHx8IDA7XG5cdFx0XHR0aGlzLl9fbG9ja3NbcmVhc29uXS0tO1xuXHRcdH1cblx0XHRpZiAoICFyZWFzb24gJiYgdGhpcy5fX2xvY2tzLmFsbCA9PSAwIClcblx0XHRcdGNvbnNvbGUuZXJyb3IoXCJSZWxlYXNlIG1vcmUgdGhhbiBsb2NraW5nICFcIik7XG5cdFx0XG5cdFx0dGhpcy5fX2xvY2tzLmFsbC0tO1xuXHRcdGlmICggIXRoaXMuX19sb2Nrcy5hbGwgKSB7XG5cdFx0XHRpZiAoIHRoaXMuXy5zdGFiaWxpemVyVE0gKVxuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR0aGlzLl8uc3RhYmlsaXplclRNICYmIGNsZWFyVGltZW91dCh0aGlzLl8uc3RhYmlsaXplclRNKTtcblx0XHRcdFxuXHRcdFx0dGhpcy5fLnN0YWJpbGl6ZXJUTSA9IHNldFRpbWVvdXQoXG5cdFx0XHRcdGUgPT4ge1xuXHRcdFx0XHRcdHRoaXMuXy5zdGFiaWxpemVyVE0gPSBudWxsO1xuXHRcdFx0XHRcdGlmICggdGhpcy5fX2xvY2tzLmFsbCApXG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0dGhpcy5fLnByb3BhZ1RNICYmIGNsZWFyVGltZW91dCh0aGlzLl8ucHJvcGFnVE0pO1xuXHRcdFx0XHRcdHRoaXMuX3JldisrO1xuXHRcdFx0XHRcdHRoaXMuX3N0YWJsZSA9IHRydWU7XG5cdFx0XHRcdFx0dGhpcy5lbWl0KFwic3RhYmxlXCIsIHRoaXMpO1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdCF0aGlzLmRlYWQgJiYgdGhpcy5fcHJvcGFnKCk7Ly8gc3RhYmlsaXR5IGNhbiBpbmR1Y2UgZGVzdHJveVxuXHRcdFx0XHR9XG5cdFx0XHQpO1xuXHRcdH1cblx0XHRcblx0fVxuXHRcblx0LyoqXG5cdCAqIFByb3BhZyBzdG9yZXMgdXBkYXRlcyBiYXNpbmcgdGhlaXJzIGxhc3QgdXBkYXRlc1xuXHQgKi9cblx0cHJvcGFnKCkge1xuXHRcdHRoaXMuXy5wcm9wYWdUTSAmJiBjbGVhclRpbWVvdXQodGhpcy5fLnByb3BhZ1RNKTtcblx0XHR0aGlzLl8ucHJvcGFnVE0gPSBzZXRUaW1lb3V0KFxuXHRcdFx0ZSA9PiB7XG5cdFx0XHRcdHRoaXMuXy5wcm9wYWdUTSA9IG51bGw7XG5cdFx0XHRcdHRoaXMuX3Byb3BhZygpXG5cdFx0XHR9LCAyXG5cdFx0KTtcblx0fVxuXHRcblx0X3Byb3BhZygpIHtcblx0XHRpZiAoIHRoaXMuXy5mb2xsb3dlcnMubGVuZ3RoIClcblx0XHRcdHRoaXMuXy5mb2xsb3dlcnMuZm9yRWFjaCgoIHsgMDogb2JqLCAxOiBrZXksIDI6IGFzLCAzOiBsYXN0UmV2cywgMzogcmVtYXBzIH0gKSA9PiB7XG5cdFx0XHRcdGxldCBkYXRhID0gdGhpcy5nZXRVcGRhdGVzKGxhc3RSZXZzKTtcblx0XHRcdFx0aWYgKCAhZGF0YSApIHJldHVybjtcblx0XHRcdFx0Ly9jb25zb2xlLmxvZyhkYXRhLCBsYXN0UmV2cylcblx0XHRcdFx0aWYgKCB0eXBlb2Ygb2JqICE9IFwiZnVuY3Rpb25cIiApIHtcblx0XHRcdFx0XHQvL2NvbnNvbGUubG9nKFwic2V0U3RhdGUgXCIsb2JqLCBPYmplY3Qua2V5cyhkYXRhKSlcblx0XHRcdFx0XHRpZiAoIGFzICkgb2JqLnNldFN0YXRlKHsgW2FzXTogZGF0YSB9KTtcblx0XHRcdFx0XHRlbHNlIG9iai5zZXRTdGF0ZShkYXRhKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHRvYmooZGF0YSwgbGFzdFJldnMgJiYgWy4uLmxhc3RSZXZzXSB8fCBcIm5vIHJldnNcIik7XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gbGFzdFJldnMgJiZcblx0XHRcdFx0Ly8ga2V5LmZvckVhY2goaWQgPT4gKGxhc3RSZXZzW2lkXSA9IHRoaXMuc3RvcmVzW2lkXSAmJlxuXHRcdFx0XHQvLyB0aGlzLnN0b3Jlc1tpZF0uX3JldiB8fCAwKSk7XG5cdFx0XHR9KTtcblx0XHR0aGlzLmVtaXQoXCJ1cGRhdGVcIiwgdGhpcy5nZXRVcGRhdGVzKCkpO1xuXHR9XG5cdFxuXHQvKipcblx0ICogaXMgc3RhYmxlXG5cdCAqIEByZXR1cm5zIGJvb2xcblx0ICovXG5cdGlzU3RhYmxlKCkge1xuXHRcdHJldHVybiB0aGlzLl9zdGFibGU7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBpcyBzdGFibGVcblx0ICogQHJldHVybnMgYm9vbFxuXHQgKi9cblx0aXNTdGFibGVUcmVlKCkge1xuXHRcdHJldHVybiAhdGhpcy5fLnVuU3RhYmxlQ2hpbGRzO1xuXHR9XG5cdFxuXHRfYWRkQ2hpbGQoIGN0eCApIHtcblx0XHR0aGlzLl8uY2hpbGRTY29wZXMucHVzaChjdHgpO1xuXHRcdHRoaXMuXy5zZWVuQ2hpbGRzKys7XG5cdFx0bGV0IGxpc3RzICAgICA9IHtcblx0XHRcdCAgICAnc3RhYmxlJyAgICAgIDogcyA9PiB7XG5cdFx0XHRcdCAgICB0aGlzLl8udW5TdGFibGVDaGlsZHMtLTtcblx0XHRcdFx0ICAgIGlmICggIXRoaXMuXy51blN0YWJsZUNoaWxkcyApXG5cdFx0XHRcdFx0ICAgIHRoaXMuZW1pdChcInN0YWJsZVRyZWVcIiwgdGhpcylcblx0XHRcdCAgICB9LFxuXHRcdFx0ICAgICd1bnN0YWJsZScgICAgOiBzID0+IHtcblx0XHRcdFx0ICAgIHRoaXMuXy51blN0YWJsZUNoaWxkcysrO1xuXHRcdFx0XHQgICAgaWYgKCAxID09IHRoaXMuXy51blN0YWJsZUNoaWxkcyApXG5cdFx0XHRcdFx0ICAgIHRoaXMuZW1pdChcInVuc3RhYmxlVHJlZVwiLCB0aGlzKVxuXHRcdFx0ICAgIH0sXG5cdFx0XHQgICAgJ3N0YWJsZVRyZWUnICA6IHMgPT4ge1xuXHRcdFx0XHQgICAgdGhpcy5fLnVuU3RhYmxlQ2hpbGRzLS07XG5cdFx0XHRcdCAgICBpZiAoICF0aGlzLl8udW5TdGFibGVDaGlsZHMgKVxuXHRcdFx0XHRcdCAgICB0aGlzLmVtaXQoXCJzdGFibGVUcmVlXCIsIHRoaXMpXG5cdFx0XHQgICAgfSxcblx0XHRcdCAgICAndW5zdGFibGVUcmVlJzogcyA9PiB7XG5cdFx0XHRcdCAgICB0aGlzLl8udW5TdGFibGVDaGlsZHMrKztcblx0XHRcdFx0ICAgIGlmICggMSA9PSB0aGlzLl8udW5TdGFibGVDaGlsZHMgKVxuXHRcdFx0XHRcdCAgICB0aGlzLmVtaXQoXCJ1bnN0YWJsZVRyZWVcIiwgdGhpcylcblx0XHRcdCAgICB9LFxuXHRcdFx0ICAgICdkZXN0cm95JyAgICAgOiBjdHggPT4ge1xuXHRcdFx0XHQgICAgaWYgKCBjdHguXy51blN0YWJsZUNoaWxkcyApXG5cdFx0XHRcdFx0ICAgIHRoaXMuXy51blN0YWJsZUNoaWxkcy0tO1xuXHRcdFx0XHQgICAgaWYgKCAhY3R4LmlzU3RhYmxlKCkgKVxuXHRcdFx0XHRcdCAgICB0aGlzLl8udW5TdGFibGVDaGlsZHMtLTtcblx0XHRcdFx0XG5cdFx0XHRcdCAgICBpZiAoICF0aGlzLl8udW5TdGFibGVDaGlsZHMgKVxuXHRcdFx0XHRcdCAgICB0aGlzLmVtaXQoXCJzdGFibGVUcmVlXCIsIHRoaXMpXG5cdFx0XHQgICAgfVxuXHRcdCAgICB9LFxuXHRcdCAgICB3YXNTdGFibGUgPSB0aGlzLl8udW5TdGFibGVDaGlsZHM7XG5cdFx0Ly8hY3R4LmlzU3RhYmxlKCkgJiYgY29uc29sZS53YXJuKCdhZGQgdW5zdGFibGUgY2hpbGQnKTtcblx0XHQhY3R4LmlzU3RhYmxlKCkgJiYgdGhpcy5fLnVuU3RhYmxlQ2hpbGRzKys7XG5cdFx0Y3R4Ll8udW5TdGFibGVDaGlsZHMgJiYgdGhpcy5fLnVuU3RhYmxlQ2hpbGRzKys7XG5cdFx0dGhpcy5fLmNoaWxkU2NvcGVzTGlzdC5wdXNoKGxpc3RzKTtcblx0XHRpZiAoICF3YXNTdGFibGUgJiYgdGhpcy5fLnVuU3RhYmxlQ2hpbGRzIClcblx0XHRcdHRoaXMuZW1pdChcInVuc3RhYmxlVHJlZVwiLCB0aGlzKVxuXHRcdGN0eC5vbihsaXN0cyk7XG5cdH1cblx0XG5cdF9ybUNoaWxkKCBjdHggKSB7XG5cdFx0bGV0IGkgICAgICAgICA9IHRoaXMuXy5jaGlsZFNjb3Blcy5pbmRleE9mKGN0eCksXG5cdFx0ICAgIHdhc1N0YWJsZSA9IHRoaXMuXy51blN0YWJsZUNoaWxkcztcblx0XHRpZiAoIGkgIT0gLTEgKSB7XG5cdFx0XHR0aGlzLl8uY2hpbGRTY29wZXMuc3BsaWNlKGksIDEpO1xuXHRcdFx0IWN0eC5pc1N0YWJsZSgpICYmIHRoaXMuXy51blN0YWJsZUNoaWxkcy0tO1xuXHRcdFx0Y3R4Ll8udW5TdGFibGVDaGlsZHMgJiYgdGhpcy5fLnVuU3RhYmxlQ2hpbGRzLS07XG5cdFx0XHRjdHgudW4odGhpcy5fLmNoaWxkU2NvcGVzTGlzdC5zcGxpY2UoaSwgMSlbMF0pO1xuXHRcdFx0aWYgKCB3YXNTdGFibGUgJiYgIXRoaXMuXy51blN0YWJsZUNoaWxkcyApXG5cdFx0XHRcdHRoaXMuZW1pdChcInN0YWJsZVRyZWVcIilcblx0XHR9XG5cdH1cblx0XG5cdHJldGFpbiggcmVhc29uICkge1xuXHRcdHRoaXMuX19yZXRhaW5zLmFsbCsrO1xuXHRcdC8vY29uc29sZS5sb2coXCJyZXRhaW5cIiwgdGhpcy5faWQsIHJlYXNvbik7XG5cdFx0aWYgKCByZWFzb24gKSB7XG5cdFx0XHR0aGlzLl9fcmV0YWluc1tyZWFzb25dID0gdGhpcy5fX3JldGFpbnNbcmVhc29uXSB8fCAwO1xuXHRcdFx0dGhpcy5fX3JldGFpbnNbcmVhc29uXSsrO1xuXHRcdH1cblx0fVxuXHRcblx0ZGlzcG9zZSggcmVhc29uICkge1xuXHRcdC8vY29uc29sZS5sb2coXCJkaXNwb3NlXCIsIHRoaXMuX2lkLCByZWFzb24pO1xuXHRcdGlmICggcmVhc29uICkge1xuXHRcdFx0aWYgKCAhdGhpcy5fX3JldGFpbnNbcmVhc29uXSApXG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIkRpc3Bvc2UgbW9yZSB0aGFuIHJldGFpbmluZyA6IFwiICsgcmVhc29uKTtcblx0XHRcdHRoaXMuX19yZXRhaW5zW3JlYXNvbl0tLTtcblx0XHR9XG5cdFx0XG5cdFx0aWYgKCAhdGhpcy5fX3JldGFpbnMuYWxsIClcblx0XHRcdHRocm93IG5ldyBFcnJvcihcIkRpc3Bvc2UgbW9yZSB0aGFuIHJldGFpbmluZyAhXCIpO1xuXHRcdFxuXHRcdHRoaXMuX19yZXRhaW5zLmFsbC0tO1xuXHRcdFxuXHRcdGlmICggIXRoaXMuX19yZXRhaW5zLmFsbCApIHtcblx0XHRcdC8vY29uc29sZS5sb2coXCJkaXNwb3NlIGRvIGRlc3Ryb3kgXCIsIHRoaXMuX2lkLCB0aGlzLl9wZXJzaXN0ZW5jZVRtKTtcblx0XHRcdGlmICggdGhpcy5fLnBlcnNpc3RlbmNlVG0gKSB7XG5cdFx0XHRcdHRoaXMuXy5kZXN0cm95VE0gJiYgY2xlYXJUaW1lb3V0KHRoaXMuXy5kZXN0cm95VE0pO1xuXHRcdFx0XHR0aGlzLl8uZGVzdHJveVRNID0gc2V0VGltZW91dChcblx0XHRcdFx0XHRlID0+IHtcblx0XHRcdFx0XHRcdHRoaXMudGhlbihzID0+IHtcblx0XHRcdFx0XHRcdFx0IXRoaXMuX19yZXRhaW5zLmFsbCAmJiAhdGhpcy5kZWFkICYmIHRoaXMuZGVzdHJveSgpXG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHRoaXMuXy5wZXJzaXN0ZW5jZVRtXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0dGhpcy50aGVuKHMgPT5cblx0XHRcdFx0XHQgICAgICAgICAgKCF0aGlzLl9fcmV0YWlucy5hbGwgJiYgIXRoaXMuZGVhZCAmJiB0aGlzLmRlc3Ryb3koKSlcblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBvcmRlciBkZXN0cm95IG9mIGxvY2FsIHN0b3Jlc1xuXHQgKi9cblx0ZGVzdHJveSgpIHtcblx0XHRsZXQgY3R4ID0gdGhpcy5fLl9zY29wZTtcblx0XHQvL2NvbnNvbGUud2FybihcImRlc3Ryb3lcIiwgdGhpcy5faWQpO1xuXHRcdHRoaXMuX2dldEFsbENoaWxkcygpLm1hcChzY29wZSA9PiBzY29wZS5kZXN0cm95KCkpXG5cdFx0Zm9yICggbGV0IGtleSBpbiBjdHggKVxuXHRcdFx0aWYgKCAhaXMuZm4oY3R4W2tleV0pICkge1xuXHRcdFx0XHRpZiAoIGtleSA9PSBcIiRwYXJlbnRcIiApIGNvbnRpbnVlO1xuXHRcdFx0XHQhY3R4W2tleV0uX2F1dG9EZXN0cm95ICYmIGN0eFtrZXldLmRpc3Bvc2UoXCJzY29wZWRcIik7XG5cdFx0XHR9XG5cdFx0dGhpcy5fLnN0YWJpbGl6ZXJUTSAmJiBjbGVhclRpbWVvdXQodGhpcy5fLnN0YWJpbGl6ZXJUTSk7XG5cdFx0dGhpcy5fLnByb3BhZ1RNICYmIGNsZWFyVGltZW91dCh0aGlzLl8ucHJvcGFnVE0pO1xuXHRcdE9iamVjdC5rZXlzKFxuXHRcdFx0dGhpcy5fLl9saXN0ZW5pbmdcblx0XHQpLmZvckVhY2goXG5cdFx0XHRpZCA9PiAoKGlkICE9PSBcIiRwYXJlbnRcIikgJiYgdGhpcy5fLl9zY29wZVtpZF0ucmVtb3ZlTGlzdGVuZXIodGhpcy5fLl9saXN0ZW5pbmdbaWRdKSlcblx0XHQpO1xuXHRcdHdoaWxlICggdGhpcy5fLl9taXhlZExpc3QubGVuZ3RoICkge1xuXHRcdFx0dGhpcy5fLl9taXhlZFswXS5yZW1vdmVMaXN0ZW5lcih0aGlzLl8uX21peGVkTGlzdC5zaGlmdCgpKTtcblx0XHRcdHRoaXMuXy5fbWl4ZWQuc2hpZnQoKS5kaXNwb3NlKFwibWl4ZWRUb1wiKTtcblx0XHR9XG5cdFx0Wy4uLnRoaXMuXy5mb2xsb3dlcnNdLm1hcChmb2xsb3dlciA9PiB0aGlzLnVuQmluZCguLi5mb2xsb3dlcikpO1xuXHRcdGlmICggdGhpcy5fLl9wYXJlbnRMaXN0ICkge1xuXHRcdFx0dGhpcy5wYXJlbnQuX3JtQ2hpbGQodGhpcyk7XG5cdFx0XHR0aGlzLnBhcmVudC5yZW1vdmVMaXN0ZW5lcih0aGlzLl8uX3BhcmVudExpc3QpO1xuXHRcdFx0dGhpcy5wYXJlbnQuZGlzcG9zZShcImlzTXlQYXJlbnRcIik7XG5cdFx0XHR0aGlzLl8uX3BhcmVudExpc3QgPSBudWxsO1xuXHRcdH1cblx0XHR0aGlzLmRlYWQgPSB0cnVlO1xuXHRcdGRlbGV0ZSBvcGVuU2NvcGVzW3RoaXMuX2lkXTtcblx0XHR0aGlzLmVtaXQoXCJkZXN0cm95XCIsIHRoaXMpO1xuXHRcdFxuXHRcdFxuXHR9XG59XG5cblxuaXMucnNTY29wZSA9IGZ1bmN0aW9uICggb2JqICkge1xuXHRyZXR1cm4gb2JqIGluc3RhbmNlb2YgU2NvcGVcbn1cblxuaXMucnNTY29wZUNsYXNzID0gZnVuY3Rpb24gKCBvYmogKSB7XG5cdHJldHVybiBTY29wZS5pc1Byb3RvdHlwZU9mKG9iaikgfHwgb2JqID09PSBTY29wZVxufVxuZXhwb3J0IGRlZmF1bHQgU2NvcGU7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1Njb3BlLmpzIiwidmFyIGlzID0gcmVxdWlyZSgnaXMnKTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIC4uLmlzXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWxzL2lzLmpzIiwiLyogZ2xvYmFscyB3aW5kb3csIEhUTUxFbGVtZW50ICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqIVxuICogaXNcbiAqIHRoZSBkZWZpbml0aXZlIEphdmFTY3JpcHQgdHlwZSB0ZXN0aW5nIGxpYnJhcnlcbiAqXG4gKiBAY29weXJpZ2h0IDIwMTMtMjAxNCBFbnJpY28gTWFyaW5vIC8gSm9yZGFuIEhhcmJhbmRcbiAqIEBsaWNlbnNlIE1JVFxuICovXG5cbnZhciBvYmpQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG52YXIgb3ducyA9IG9ialByb3RvLmhhc093blByb3BlcnR5O1xudmFyIHRvU3RyID0gb2JqUHJvdG8udG9TdHJpbmc7XG52YXIgc3ltYm9sVmFsdWVPZjtcbmlmICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nKSB7XG4gIHN5bWJvbFZhbHVlT2YgPSBTeW1ib2wucHJvdG90eXBlLnZhbHVlT2Y7XG59XG52YXIgaXNBY3R1YWxOYU4gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9PSB2YWx1ZTtcbn07XG52YXIgTk9OX0hPU1RfVFlQRVMgPSB7XG4gICdib29sZWFuJzogMSxcbiAgbnVtYmVyOiAxLFxuICBzdHJpbmc6IDEsXG4gIHVuZGVmaW5lZDogMVxufTtcblxudmFyIGJhc2U2NFJlZ2V4ID0gL14oW0EtWmEtejAtOSsvXXs0fSkqKFtBLVphLXowLTkrL117NH18W0EtWmEtejAtOSsvXXszfT18W0EtWmEtejAtOSsvXXsyfT09KSQvO1xudmFyIGhleFJlZ2V4ID0gL15bQS1GYS1mMC05XSskLztcblxuLyoqXG4gKiBFeHBvc2UgYGlzYFxuICovXG5cbnZhciBpcyA9IHt9O1xuXG4vKipcbiAqIFRlc3QgZ2VuZXJhbC5cbiAqL1xuXG4vKipcbiAqIGlzLnR5cGVcbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBhIHR5cGUgb2YgYHR5cGVgLlxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIHR5cGVcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgYHZhbHVlYCBpcyBhIHR5cGUgb2YgYHR5cGVgLCBmYWxzZSBvdGhlcndpc2VcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuaXMuYSA9IGlzLnR5cGUgPSBmdW5jdGlvbiAodmFsdWUsIHR5cGUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gdHlwZTtcbn07XG5cbi8qKlxuICogaXMuZGVmaW5lZFxuICogVGVzdCBpZiBgdmFsdWVgIGlzIGRlZmluZWQuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiAndmFsdWUnIGlzIGRlZmluZWQsIGZhbHNlIG90aGVyd2lzZVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5pcy5kZWZpbmVkID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgIT09ICd1bmRlZmluZWQnO1xufTtcblxuLyoqXG4gKiBpcy5lbXB0eVxuICogVGVzdCBpZiBgdmFsdWVgIGlzIGVtcHR5LlxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgYHZhbHVlYCBpcyBlbXB0eSwgZmFsc2Ugb3RoZXJ3aXNlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmlzLmVtcHR5ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHZhciB0eXBlID0gdG9TdHIuY2FsbCh2YWx1ZSk7XG4gIHZhciBrZXk7XG5cbiAgaWYgKHR5cGUgPT09ICdbb2JqZWN0IEFycmF5XScgfHwgdHlwZSA9PT0gJ1tvYmplY3QgQXJndW1lbnRzXScgfHwgdHlwZSA9PT0gJ1tvYmplY3QgU3RyaW5nXScpIHtcbiAgICByZXR1cm4gdmFsdWUubGVuZ3RoID09PSAwO1xuICB9XG5cbiAgaWYgKHR5cGUgPT09ICdbb2JqZWN0IE9iamVjdF0nKSB7XG4gICAgZm9yIChrZXkgaW4gdmFsdWUpIHtcbiAgICAgIGlmIChvd25zLmNhbGwodmFsdWUsIGtleSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiAhdmFsdWU7XG59O1xuXG4vKipcbiAqIGlzLmVxdWFsXG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgZXF1YWwgdG8gYG90aGVyYC5cbiAqXG4gKiBAcGFyYW0ge01peGVkfSB2YWx1ZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcGFyYW0ge01peGVkfSBvdGhlciB2YWx1ZSB0byBjb21wYXJlIHdpdGhcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgYHZhbHVlYCBpcyBlcXVhbCB0byBgb3RoZXJgLCBmYWxzZSBvdGhlcndpc2VcbiAqL1xuXG5pcy5lcXVhbCA9IGZ1bmN0aW9uIGVxdWFsKHZhbHVlLCBvdGhlcikge1xuICBpZiAodmFsdWUgPT09IG90aGVyKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICB2YXIgdHlwZSA9IHRvU3RyLmNhbGwodmFsdWUpO1xuICB2YXIga2V5O1xuXG4gIGlmICh0eXBlICE9PSB0b1N0ci5jYWxsKG90aGVyKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmICh0eXBlID09PSAnW29iamVjdCBPYmplY3RdJykge1xuICAgIGZvciAoa2V5IGluIHZhbHVlKSB7XG4gICAgICBpZiAoIWlzLmVxdWFsKHZhbHVlW2tleV0sIG90aGVyW2tleV0pIHx8ICEoa2V5IGluIG90aGVyKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAoa2V5IGluIG90aGVyKSB7XG4gICAgICBpZiAoIWlzLmVxdWFsKHZhbHVlW2tleV0sIG90aGVyW2tleV0pIHx8ICEoa2V5IGluIHZhbHVlKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKHR5cGUgPT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICBrZXkgPSB2YWx1ZS5sZW5ndGg7XG4gICAgaWYgKGtleSAhPT0gb3RoZXIubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHdoaWxlIChrZXktLSkge1xuICAgICAgaWYgKCFpcy5lcXVhbCh2YWx1ZVtrZXldLCBvdGhlcltrZXldKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKHR5cGUgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXScpIHtcbiAgICByZXR1cm4gdmFsdWUucHJvdG90eXBlID09PSBvdGhlci5wcm90b3R5cGU7XG4gIH1cblxuICBpZiAodHlwZSA9PT0gJ1tvYmplY3QgRGF0ZV0nKSB7XG4gICAgcmV0dXJuIHZhbHVlLmdldFRpbWUoKSA9PT0gb3RoZXIuZ2V0VGltZSgpO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuLyoqXG4gKiBpcy5ob3N0ZWRcbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBob3N0ZWQgYnkgYGhvc3RgLlxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlIHRvIHRlc3RcbiAqIEBwYXJhbSB7TWl4ZWR9IGhvc3QgaG9zdCB0byB0ZXN0IHdpdGhcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgYHZhbHVlYCBpcyBob3N0ZWQgYnkgYGhvc3RgLCBmYWxzZSBvdGhlcndpc2VcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuaXMuaG9zdGVkID0gZnVuY3Rpb24gKHZhbHVlLCBob3N0KSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIGhvc3RbdmFsdWVdO1xuICByZXR1cm4gdHlwZSA9PT0gJ29iamVjdCcgPyAhIWhvc3RbdmFsdWVdIDogIU5PTl9IT1NUX1RZUEVTW3R5cGVdO1xufTtcblxuLyoqXG4gKiBpcy5pbnN0YW5jZVxuICogVGVzdCBpZiBgdmFsdWVgIGlzIGFuIGluc3RhbmNlIG9mIGBjb25zdHJ1Y3RvcmAuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBgdmFsdWVgIGlzIGFuIGluc3RhbmNlIG9mIGBjb25zdHJ1Y3RvcmBcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuaXMuaW5zdGFuY2UgPSBpc1snaW5zdGFuY2VvZiddID0gZnVuY3Rpb24gKHZhbHVlLCBjb25zdHJ1Y3Rvcikge1xuICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBjb25zdHJ1Y3Rvcjtcbn07XG5cbi8qKlxuICogaXMubmlsIC8gaXMubnVsbFxuICogVGVzdCBpZiBgdmFsdWVgIGlzIG51bGwuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBgdmFsdWVgIGlzIG51bGwsIGZhbHNlIG90aGVyd2lzZVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5pcy5uaWwgPSBpc1snbnVsbCddID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA9PT0gbnVsbDtcbn07XG5cbi8qKlxuICogaXMudW5kZWYgLyBpcy51bmRlZmluZWRcbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyB1bmRlZmluZWQuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBgdmFsdWVgIGlzIHVuZGVmaW5lZCwgZmFsc2Ugb3RoZXJ3aXNlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmlzLnVuZGVmID0gaXMudW5kZWZpbmVkID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnO1xufTtcblxuLyoqXG4gKiBUZXN0IGFyZ3VtZW50cy5cbiAqL1xuXG4vKipcbiAqIGlzLmFyZ3NcbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBhbiBhcmd1bWVudHMgb2JqZWN0LlxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgYHZhbHVlYCBpcyBhbiBhcmd1bWVudHMgb2JqZWN0LCBmYWxzZSBvdGhlcndpc2VcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuaXMuYXJncyA9IGlzLmFyZ3VtZW50cyA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICB2YXIgaXNTdGFuZGFyZEFyZ3VtZW50cyA9IHRvU3RyLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBBcmd1bWVudHNdJztcbiAgdmFyIGlzT2xkQXJndW1lbnRzID0gIWlzLmFycmF5KHZhbHVlKSAmJiBpcy5hcnJheWxpa2UodmFsdWUpICYmIGlzLm9iamVjdCh2YWx1ZSkgJiYgaXMuZm4odmFsdWUuY2FsbGVlKTtcbiAgcmV0dXJuIGlzU3RhbmRhcmRBcmd1bWVudHMgfHwgaXNPbGRBcmd1bWVudHM7XG59O1xuXG4vKipcbiAqIFRlc3QgYXJyYXkuXG4gKi9cblxuLyoqXG4gKiBpcy5hcnJheVxuICogVGVzdCBpZiAndmFsdWUnIGlzIGFuIGFycmF5LlxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgYHZhbHVlYCBpcyBhbiBhcnJheSwgZmFsc2Ugb3RoZXJ3aXNlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmlzLmFycmF5ID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIHRvU3RyLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBBcnJheV0nO1xufTtcblxuLyoqXG4gKiBpcy5hcmd1bWVudHMuZW1wdHlcbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBhbiBlbXB0eSBhcmd1bWVudHMgb2JqZWN0LlxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgYHZhbHVlYCBpcyBhbiBlbXB0eSBhcmd1bWVudHMgb2JqZWN0LCBmYWxzZSBvdGhlcndpc2VcbiAqIEBhcGkgcHVibGljXG4gKi9cbmlzLmFyZ3MuZW1wdHkgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIGlzLmFyZ3ModmFsdWUpICYmIHZhbHVlLmxlbmd0aCA9PT0gMDtcbn07XG5cbi8qKlxuICogaXMuYXJyYXkuZW1wdHlcbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBhbiBlbXB0eSBhcnJheS5cbiAqXG4gKiBAcGFyYW0ge01peGVkfSB2YWx1ZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGB2YWx1ZWAgaXMgYW4gZW1wdHkgYXJyYXksIGZhbHNlIG90aGVyd2lzZVxuICogQGFwaSBwdWJsaWNcbiAqL1xuaXMuYXJyYXkuZW1wdHkgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIGlzLmFycmF5KHZhbHVlKSAmJiB2YWx1ZS5sZW5ndGggPT09IDA7XG59O1xuXG4vKipcbiAqIGlzLmFycmF5bGlrZVxuICogVGVzdCBpZiBgdmFsdWVgIGlzIGFuIGFycmF5bGlrZSBvYmplY3QuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBgdmFsdWVgIGlzIGFuIGFyZ3VtZW50cyBvYmplY3QsIGZhbHNlIG90aGVyd2lzZVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5pcy5hcnJheWxpa2UgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuICEhdmFsdWUgJiYgIWlzLmJvb2wodmFsdWUpXG4gICAgJiYgb3ducy5jYWxsKHZhbHVlLCAnbGVuZ3RoJylcbiAgICAmJiBpc0Zpbml0ZSh2YWx1ZS5sZW5ndGgpXG4gICAgJiYgaXMubnVtYmVyKHZhbHVlLmxlbmd0aClcbiAgICAmJiB2YWx1ZS5sZW5ndGggPj0gMDtcbn07XG5cbi8qKlxuICogVGVzdCBib29sZWFuLlxuICovXG5cbi8qKlxuICogaXMuYm9vbFxuICogVGVzdCBpZiBgdmFsdWVgIGlzIGEgYm9vbGVhbi5cbiAqXG4gKiBAcGFyYW0ge01peGVkfSB2YWx1ZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGB2YWx1ZWAgaXMgYSBib29sZWFuLCBmYWxzZSBvdGhlcndpc2VcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuaXMuYm9vbCA9IGlzWydib29sZWFuJ10gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIHRvU3RyLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBCb29sZWFuXSc7XG59O1xuXG4vKipcbiAqIGlzLmZhbHNlXG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgZmFsc2UuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBgdmFsdWVgIGlzIGZhbHNlLCBmYWxzZSBvdGhlcndpc2VcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuaXNbJ2ZhbHNlJ10gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIGlzLmJvb2wodmFsdWUpICYmIEJvb2xlYW4oTnVtYmVyKHZhbHVlKSkgPT09IGZhbHNlO1xufTtcblxuLyoqXG4gKiBpcy50cnVlXG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgdHJ1ZS5cbiAqXG4gKiBAcGFyYW0ge01peGVkfSB2YWx1ZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGB2YWx1ZWAgaXMgdHJ1ZSwgZmFsc2Ugb3RoZXJ3aXNlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmlzWyd0cnVlJ10gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIGlzLmJvb2wodmFsdWUpICYmIEJvb2xlYW4oTnVtYmVyKHZhbHVlKSkgPT09IHRydWU7XG59O1xuXG4vKipcbiAqIFRlc3QgZGF0ZS5cbiAqL1xuXG4vKipcbiAqIGlzLmRhdGVcbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBhIGRhdGUuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBgdmFsdWVgIGlzIGEgZGF0ZSwgZmFsc2Ugb3RoZXJ3aXNlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmlzLmRhdGUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIHRvU3RyLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBEYXRlXSc7XG59O1xuXG4vKipcbiAqIGlzLmRhdGUudmFsaWRcbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGRhdGUuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge0Jvb2xlYW59IHRydWUgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGRhdGUsIGZhbHNlIG90aGVyd2lzZVxuICovXG5pcy5kYXRlLnZhbGlkID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiBpcy5kYXRlKHZhbHVlKSAmJiAhaXNOYU4oTnVtYmVyKHZhbHVlKSk7XG59O1xuXG4vKipcbiAqIFRlc3QgZWxlbWVudC5cbiAqL1xuXG4vKipcbiAqIGlzLmVsZW1lbnRcbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBhbiBodG1sIGVsZW1lbnQuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBgdmFsdWVgIGlzIGFuIEhUTUwgRWxlbWVudCwgZmFsc2Ugb3RoZXJ3aXNlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmlzLmVsZW1lbnQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9PSB1bmRlZmluZWRcbiAgICAmJiB0eXBlb2YgSFRNTEVsZW1lbnQgIT09ICd1bmRlZmluZWQnXG4gICAgJiYgdmFsdWUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudFxuICAgICYmIHZhbHVlLm5vZGVUeXBlID09PSAxO1xufTtcblxuLyoqXG4gKiBUZXN0IGVycm9yLlxuICovXG5cbi8qKlxuICogaXMuZXJyb3JcbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBhbiBlcnJvciBvYmplY3QuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBgdmFsdWVgIGlzIGFuIGVycm9yIG9iamVjdCwgZmFsc2Ugb3RoZXJ3aXNlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmlzLmVycm9yID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiB0b1N0ci5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgRXJyb3JdJztcbn07XG5cbi8qKlxuICogVGVzdCBmdW5jdGlvbi5cbiAqL1xuXG4vKipcbiAqIGlzLmZuIC8gaXMuZnVuY3Rpb24gKGRlcHJlY2F0ZWQpXG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgYSBmdW5jdGlvbi5cbiAqXG4gKiBAcGFyYW0ge01peGVkfSB2YWx1ZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGB2YWx1ZWAgaXMgYSBmdW5jdGlvbiwgZmFsc2Ugb3RoZXJ3aXNlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmlzLmZuID0gaXNbJ2Z1bmN0aW9uJ10gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgdmFyIGlzQWxlcnQgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB2YWx1ZSA9PT0gd2luZG93LmFsZXJ0O1xuICBpZiAoaXNBbGVydCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHZhciBzdHIgPSB0b1N0ci5jYWxsKHZhbHVlKTtcbiAgcmV0dXJuIHN0ciA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJyB8fCBzdHIgPT09ICdbb2JqZWN0IEdlbmVyYXRvckZ1bmN0aW9uXScgfHwgc3RyID09PSAnW29iamVjdCBBc3luY0Z1bmN0aW9uXSc7XG59O1xuXG4vKipcbiAqIFRlc3QgbnVtYmVyLlxuICovXG5cbi8qKlxuICogaXMubnVtYmVyXG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgYSBudW1iZXIuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBgdmFsdWVgIGlzIGEgbnVtYmVyLCBmYWxzZSBvdGhlcndpc2VcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuaXMubnVtYmVyID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiB0b1N0ci5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgTnVtYmVyXSc7XG59O1xuXG4vKipcbiAqIGlzLmluZmluaXRlXG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgcG9zaXRpdmUgb3IgbmVnYXRpdmUgaW5maW5pdHkuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBgdmFsdWVgIGlzIHBvc2l0aXZlIG9yIG5lZ2F0aXZlIEluZmluaXR5LCBmYWxzZSBvdGhlcndpc2VcbiAqIEBhcGkgcHVibGljXG4gKi9cbmlzLmluZmluaXRlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA9PT0gSW5maW5pdHkgfHwgdmFsdWUgPT09IC1JbmZpbml0eTtcbn07XG5cbi8qKlxuICogaXMuZGVjaW1hbFxuICogVGVzdCBpZiBgdmFsdWVgIGlzIGEgZGVjaW1hbCBudW1iZXIuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBgdmFsdWVgIGlzIGEgZGVjaW1hbCBudW1iZXIsIGZhbHNlIG90aGVyd2lzZVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5pcy5kZWNpbWFsID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiBpcy5udW1iZXIodmFsdWUpICYmICFpc0FjdHVhbE5hTih2YWx1ZSkgJiYgIWlzLmluZmluaXRlKHZhbHVlKSAmJiB2YWx1ZSAlIDEgIT09IDA7XG59O1xuXG4vKipcbiAqIGlzLmRpdmlzaWJsZUJ5XG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgZGl2aXNpYmxlIGJ5IGBuYC5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHBhcmFtIHtOdW1iZXJ9IG4gZGl2aWRlbmRcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgYHZhbHVlYCBpcyBkaXZpc2libGUgYnkgYG5gLCBmYWxzZSBvdGhlcndpc2VcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuaXMuZGl2aXNpYmxlQnkgPSBmdW5jdGlvbiAodmFsdWUsIG4pIHtcbiAgdmFyIGlzRGl2aWRlbmRJbmZpbml0ZSA9IGlzLmluZmluaXRlKHZhbHVlKTtcbiAgdmFyIGlzRGl2aXNvckluZmluaXRlID0gaXMuaW5maW5pdGUobik7XG4gIHZhciBpc05vblplcm9OdW1iZXIgPSBpcy5udW1iZXIodmFsdWUpICYmICFpc0FjdHVhbE5hTih2YWx1ZSkgJiYgaXMubnVtYmVyKG4pICYmICFpc0FjdHVhbE5hTihuKSAmJiBuICE9PSAwO1xuICByZXR1cm4gaXNEaXZpZGVuZEluZmluaXRlIHx8IGlzRGl2aXNvckluZmluaXRlIHx8IChpc05vblplcm9OdW1iZXIgJiYgdmFsdWUgJSBuID09PSAwKTtcbn07XG5cbi8qKlxuICogaXMuaW50ZWdlclxuICogVGVzdCBpZiBgdmFsdWVgIGlzIGFuIGludGVnZXIuXG4gKlxuICogQHBhcmFtIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgYHZhbHVlYCBpcyBhbiBpbnRlZ2VyLCBmYWxzZSBvdGhlcndpc2VcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuaXMuaW50ZWdlciA9IGlzWydpbnQnXSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICByZXR1cm4gaXMubnVtYmVyKHZhbHVlKSAmJiAhaXNBY3R1YWxOYU4odmFsdWUpICYmIHZhbHVlICUgMSA9PT0gMDtcbn07XG5cbi8qKlxuICogaXMubWF4aW11bVxuICogVGVzdCBpZiBgdmFsdWVgIGlzIGdyZWF0ZXIgdGhhbiAnb3RoZXJzJyB2YWx1ZXMuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEBwYXJhbSB7QXJyYXl9IG90aGVycyB2YWx1ZXMgdG8gY29tcGFyZSB3aXRoXG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGB2YWx1ZWAgaXMgZ3JlYXRlciB0aGFuIGBvdGhlcnNgIHZhbHVlc1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5pcy5tYXhpbXVtID0gZnVuY3Rpb24gKHZhbHVlLCBvdGhlcnMpIHtcbiAgaWYgKGlzQWN0dWFsTmFOKHZhbHVlKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ05hTiBpcyBub3QgYSB2YWxpZCB2YWx1ZScpO1xuICB9IGVsc2UgaWYgKCFpcy5hcnJheWxpa2Uob3RoZXJzKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ3NlY29uZCBhcmd1bWVudCBtdXN0IGJlIGFycmF5LWxpa2UnKTtcbiAgfVxuICB2YXIgbGVuID0gb3RoZXJzLmxlbmd0aDtcblxuICB3aGlsZSAoLS1sZW4gPj0gMCkge1xuICAgIGlmICh2YWx1ZSA8IG90aGVyc1tsZW5dKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuXG4vKipcbiAqIGlzLm1pbmltdW1cbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBsZXNzIHRoYW4gYG90aGVyc2AgdmFsdWVzLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSB2YWx1ZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcGFyYW0ge0FycmF5fSBvdGhlcnMgdmFsdWVzIHRvIGNvbXBhcmUgd2l0aFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBgdmFsdWVgIGlzIGxlc3MgdGhhbiBgb3RoZXJzYCB2YWx1ZXNcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuaXMubWluaW11bSA9IGZ1bmN0aW9uICh2YWx1ZSwgb3RoZXJzKSB7XG4gIGlmIChpc0FjdHVhbE5hTih2YWx1ZSkpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdOYU4gaXMgbm90IGEgdmFsaWQgdmFsdWUnKTtcbiAgfSBlbHNlIGlmICghaXMuYXJyYXlsaWtlKG90aGVycykpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdzZWNvbmQgYXJndW1lbnQgbXVzdCBiZSBhcnJheS1saWtlJyk7XG4gIH1cbiAgdmFyIGxlbiA9IG90aGVycy5sZW5ndGg7XG5cbiAgd2hpbGUgKC0tbGVuID49IDApIHtcbiAgICBpZiAodmFsdWUgPiBvdGhlcnNbbGVuXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcblxuLyoqXG4gKiBpcy5uYW5cbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBub3QgYSBudW1iZXIuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBgdmFsdWVgIGlzIG5vdCBhIG51bWJlciwgZmFsc2Ugb3RoZXJ3aXNlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmlzLm5hbiA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICByZXR1cm4gIWlzLm51bWJlcih2YWx1ZSkgfHwgdmFsdWUgIT09IHZhbHVlO1xufTtcblxuLyoqXG4gKiBpcy5ldmVuXG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgYW4gZXZlbiBudW1iZXIuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgYHZhbHVlYCBpcyBhbiBldmVuIG51bWJlciwgZmFsc2Ugb3RoZXJ3aXNlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmlzLmV2ZW4gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIGlzLmluZmluaXRlKHZhbHVlKSB8fCAoaXMubnVtYmVyKHZhbHVlKSAmJiB2YWx1ZSA9PT0gdmFsdWUgJiYgdmFsdWUgJSAyID09PSAwKTtcbn07XG5cbi8qKlxuICogaXMub2RkXG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgYW4gb2RkIG51bWJlci5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBgdmFsdWVgIGlzIGFuIG9kZCBudW1iZXIsIGZhbHNlIG90aGVyd2lzZVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5pcy5vZGQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIGlzLmluZmluaXRlKHZhbHVlKSB8fCAoaXMubnVtYmVyKHZhbHVlKSAmJiB2YWx1ZSA9PT0gdmFsdWUgJiYgdmFsdWUgJSAyICE9PSAwKTtcbn07XG5cbi8qKlxuICogaXMuZ2VcbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBncmVhdGVyIHRoYW4gb3IgZXF1YWwgdG8gYG90aGVyYC5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHBhcmFtIHtOdW1iZXJ9IG90aGVyIHZhbHVlIHRvIGNvbXBhcmUgd2l0aFxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuaXMuZ2UgPSBmdW5jdGlvbiAodmFsdWUsIG90aGVyKSB7XG4gIGlmIChpc0FjdHVhbE5hTih2YWx1ZSkgfHwgaXNBY3R1YWxOYU4ob3RoZXIpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignTmFOIGlzIG5vdCBhIHZhbGlkIHZhbHVlJyk7XG4gIH1cbiAgcmV0dXJuICFpcy5pbmZpbml0ZSh2YWx1ZSkgJiYgIWlzLmluZmluaXRlKG90aGVyKSAmJiB2YWx1ZSA+PSBvdGhlcjtcbn07XG5cbi8qKlxuICogaXMuZ3RcbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBncmVhdGVyIHRoYW4gYG90aGVyYC5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHBhcmFtIHtOdW1iZXJ9IG90aGVyIHZhbHVlIHRvIGNvbXBhcmUgd2l0aFxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuaXMuZ3QgPSBmdW5jdGlvbiAodmFsdWUsIG90aGVyKSB7XG4gIGlmIChpc0FjdHVhbE5hTih2YWx1ZSkgfHwgaXNBY3R1YWxOYU4ob3RoZXIpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignTmFOIGlzIG5vdCBhIHZhbGlkIHZhbHVlJyk7XG4gIH1cbiAgcmV0dXJuICFpcy5pbmZpbml0ZSh2YWx1ZSkgJiYgIWlzLmluZmluaXRlKG90aGVyKSAmJiB2YWx1ZSA+IG90aGVyO1xufTtcblxuLyoqXG4gKiBpcy5sZVxuICogVGVzdCBpZiBgdmFsdWVgIGlzIGxlc3MgdGhhbiBvciBlcXVhbCB0byBgb3RoZXJgLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSB2YWx1ZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcGFyYW0ge051bWJlcn0gb3RoZXIgdmFsdWUgdG8gY29tcGFyZSB3aXRoXG4gKiBAcmV0dXJuIHtCb29sZWFufSBpZiAndmFsdWUnIGlzIGxlc3MgdGhhbiBvciBlcXVhbCB0byAnb3RoZXInXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmlzLmxlID0gZnVuY3Rpb24gKHZhbHVlLCBvdGhlcikge1xuICBpZiAoaXNBY3R1YWxOYU4odmFsdWUpIHx8IGlzQWN0dWFsTmFOKG90aGVyKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ05hTiBpcyBub3QgYSB2YWxpZCB2YWx1ZScpO1xuICB9XG4gIHJldHVybiAhaXMuaW5maW5pdGUodmFsdWUpICYmICFpcy5pbmZpbml0ZShvdGhlcikgJiYgdmFsdWUgPD0gb3RoZXI7XG59O1xuXG4vKipcbiAqIGlzLmx0XG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgbGVzcyB0aGFuIGBvdGhlcmAuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEBwYXJhbSB7TnVtYmVyfSBvdGhlciB2YWx1ZSB0byBjb21wYXJlIHdpdGhcbiAqIEByZXR1cm4ge0Jvb2xlYW59IGlmIGB2YWx1ZWAgaXMgbGVzcyB0aGFuIGBvdGhlcmBcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuaXMubHQgPSBmdW5jdGlvbiAodmFsdWUsIG90aGVyKSB7XG4gIGlmIChpc0FjdHVhbE5hTih2YWx1ZSkgfHwgaXNBY3R1YWxOYU4ob3RoZXIpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignTmFOIGlzIG5vdCBhIHZhbGlkIHZhbHVlJyk7XG4gIH1cbiAgcmV0dXJuICFpcy5pbmZpbml0ZSh2YWx1ZSkgJiYgIWlzLmluZmluaXRlKG90aGVyKSAmJiB2YWx1ZSA8IG90aGVyO1xufTtcblxuLyoqXG4gKiBpcy53aXRoaW5cbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyB3aXRoaW4gYHN0YXJ0YCBhbmQgYGZpbmlzaGAuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEBwYXJhbSB7TnVtYmVyfSBzdGFydCBsb3dlciBib3VuZFxuICogQHBhcmFtIHtOdW1iZXJ9IGZpbmlzaCB1cHBlciBib3VuZFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiAndmFsdWUnIGlzIGlzIHdpdGhpbiAnc3RhcnQnIGFuZCAnZmluaXNoJ1xuICogQGFwaSBwdWJsaWNcbiAqL1xuaXMud2l0aGluID0gZnVuY3Rpb24gKHZhbHVlLCBzdGFydCwgZmluaXNoKSB7XG4gIGlmIChpc0FjdHVhbE5hTih2YWx1ZSkgfHwgaXNBY3R1YWxOYU4oc3RhcnQpIHx8IGlzQWN0dWFsTmFOKGZpbmlzaCkpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdOYU4gaXMgbm90IGEgdmFsaWQgdmFsdWUnKTtcbiAgfSBlbHNlIGlmICghaXMubnVtYmVyKHZhbHVlKSB8fCAhaXMubnVtYmVyKHN0YXJ0KSB8fCAhaXMubnVtYmVyKGZpbmlzaCkpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdhbGwgYXJndW1lbnRzIG11c3QgYmUgbnVtYmVycycpO1xuICB9XG4gIHZhciBpc0FueUluZmluaXRlID0gaXMuaW5maW5pdGUodmFsdWUpIHx8IGlzLmluZmluaXRlKHN0YXJ0KSB8fCBpcy5pbmZpbml0ZShmaW5pc2gpO1xuICByZXR1cm4gaXNBbnlJbmZpbml0ZSB8fCAodmFsdWUgPj0gc3RhcnQgJiYgdmFsdWUgPD0gZmluaXNoKTtcbn07XG5cbi8qKlxuICogVGVzdCBvYmplY3QuXG4gKi9cblxuLyoqXG4gKiBpcy5vYmplY3RcbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBhbiBvYmplY3QuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBgdmFsdWVgIGlzIGFuIG9iamVjdCwgZmFsc2Ugb3RoZXJ3aXNlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5pcy5vYmplY3QgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIHRvU3RyLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBPYmplY3RdJztcbn07XG5cbi8qKlxuICogaXMucHJpbWl0aXZlXG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgYSBwcmltaXRpdmUuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBgdmFsdWVgIGlzIGEgcHJpbWl0aXZlLCBmYWxzZSBvdGhlcndpc2VcbiAqIEBhcGkgcHVibGljXG4gKi9cbmlzLnByaW1pdGl2ZSA9IGZ1bmN0aW9uIGlzUHJpbWl0aXZlKHZhbHVlKSB7XG4gIGlmICghdmFsdWUpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyB8fCBpcy5vYmplY3QodmFsdWUpIHx8IGlzLmZuKHZhbHVlKSB8fCBpcy5hcnJheSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59O1xuXG4vKipcbiAqIGlzLmhhc2hcbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBhIGhhc2ggLSBhIHBsYWluIG9iamVjdCBsaXRlcmFsLlxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgYHZhbHVlYCBpcyBhIGhhc2gsIGZhbHNlIG90aGVyd2lzZVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5pcy5oYXNoID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiBpcy5vYmplY3QodmFsdWUpICYmIHZhbHVlLmNvbnN0cnVjdG9yID09PSBPYmplY3QgJiYgIXZhbHVlLm5vZGVUeXBlICYmICF2YWx1ZS5zZXRJbnRlcnZhbDtcbn07XG5cbi8qKlxuICogVGVzdCByZWdleHAuXG4gKi9cblxuLyoqXG4gKiBpcy5yZWdleHBcbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBhIHJlZ3VsYXIgZXhwcmVzc2lvbi5cbiAqXG4gKiBAcGFyYW0ge01peGVkfSB2YWx1ZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGB2YWx1ZWAgaXMgYSByZWdleHAsIGZhbHNlIG90aGVyd2lzZVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5pcy5yZWdleHAgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIHRvU3RyLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBSZWdFeHBdJztcbn07XG5cbi8qKlxuICogVGVzdCBzdHJpbmcuXG4gKi9cblxuLyoqXG4gKiBpcy5zdHJpbmdcbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBhIHN0cmluZy5cbiAqXG4gKiBAcGFyYW0ge01peGVkfSB2YWx1ZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmICd2YWx1ZScgaXMgYSBzdHJpbmcsIGZhbHNlIG90aGVyd2lzZVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5pcy5zdHJpbmcgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIHRvU3RyLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBTdHJpbmddJztcbn07XG5cbi8qKlxuICogVGVzdCBiYXNlNjQgc3RyaW5nLlxuICovXG5cbi8qKlxuICogaXMuYmFzZTY0XG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBiYXNlNjQgZW5jb2RlZCBzdHJpbmcuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiAndmFsdWUnIGlzIGEgYmFzZTY0IGVuY29kZWQgc3RyaW5nLCBmYWxzZSBvdGhlcndpc2VcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuaXMuYmFzZTY0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiBpcy5zdHJpbmcodmFsdWUpICYmICghdmFsdWUubGVuZ3RoIHx8IGJhc2U2NFJlZ2V4LnRlc3QodmFsdWUpKTtcbn07XG5cbi8qKlxuICogVGVzdCBiYXNlNjQgc3RyaW5nLlxuICovXG5cbi8qKlxuICogaXMuaGV4XG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBoZXggZW5jb2RlZCBzdHJpbmcuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiAndmFsdWUnIGlzIGEgaGV4IGVuY29kZWQgc3RyaW5nLCBmYWxzZSBvdGhlcndpc2VcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuaXMuaGV4ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiBpcy5zdHJpbmcodmFsdWUpICYmICghdmFsdWUubGVuZ3RoIHx8IGhleFJlZ2V4LnRlc3QodmFsdWUpKTtcbn07XG5cbi8qKlxuICogaXMuc3ltYm9sXG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgYW4gRVM2IFN5bWJvbFxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgYHZhbHVlYCBpcyBhIFN5bWJvbCwgZmFsc2Ugb3RoZXJpc2VcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuaXMuc3ltYm9sID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIHRvU3RyLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBTeW1ib2xdJyAmJiB0eXBlb2Ygc3ltYm9sVmFsdWVPZi5jYWxsKHZhbHVlKSA9PT0gJ3N5bWJvbCc7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2lzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBpcyA9IHJlcXVpcmUoJy4vaXMnKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHdhbGtuU2V0KCBvYmosIHBhdGgsIHZhbHVlLCBzdGFjayApIHtcbiAgICBpZiAoIGlzLnN0cmluZyhwYXRoKSApXG4gICAgICAgIHBhdGggPSBwYXRoLnNwbGl0KCcuJyk7XG4gICAgaWYgKCAhcGF0aC5sZW5ndGggKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgZWxzZSBpZiAoIHBhdGgubGVuZ3RoID09IDEgKVxuICAgICAgICByZXR1cm4gb2JqWyBwYXRoWyAwIF0gXSA9IHN0YWNrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBbIC4uLiggb2JqWyBwYXRoWyAwIF0gXSB8fCBbXSApLCB2YWx1ZSBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB2YWx1ZTtcbiAgICBlbHNlXG4gICAgICAgIHJldHVybiB3YWxrblNldChcbiAgICAgICAgICAgIG9ialsgcGF0aFsgMCBdIF0gPVxuICAgICAgICAgICAgICAgIG9ialsgcGF0aFsgMCBdIF0gfHwge30sXG4gICAgICAgICAgICBwYXRoLnNsaWNlKDEpLFxuICAgICAgICAgICAgdmFsdWUsIHN0YWNrXG4gICAgICAgICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB3YWxrbkdldCggb2JqLCBwYXRoLCBpc0tleSApIHtcbiAgICBpZiAoIGlzLnN0cmluZyhwYXRoKSApXG4gICAgICAgIHBhdGggPSBwYXRoLnNwbGl0KCcuJyk7XG4gICAgcmV0dXJuIHBhdGgubGVuZ3RoXG4gICAgICAgICAgID8gb2JqWyBwYXRoWyAwIF0gXSAmJiB3YWxrbkdldChvYmpbIHBhdGhbIDAgXSBdLCBwYXRoLnNsaWNlKDEpKVxuICAgICAgICAgICA6IG9iajtcbn1cblxuLy9AdG9kb1xuZXhwb3J0IGZ1bmN0aW9uIGtleVdhbGtuU2V0KCBvYmosIHBhdGgsIHZhbHVlLCBzdGFjayApIHtcbiAgICBpZiAoIGlzLnN0cmluZyhwYXRoKSApXG4gICAgICAgIHBhdGggPSBwYXRoLnNwbGl0KC8oXFw+fFxcLykvaWcpLmZpbHRlcih2ID0+ICggdiAhPT0gJz4nICYmIHYgKSk7XG4gICAgcmV0dXJuIHdhbGtuU2V0KG9iaiwgcGF0aCwgdmFsdWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24ga2V5V2Fsa25HZXQoIG9iaiwgcGF0aCwgaXNLZXkgKSB7XG4gICAgaWYgKCBpcy5zdHJpbmcocGF0aCkgKVxuICAgICAgICBwYXRoID0gcGF0aC5zcGxpdCgvKFxcPnxcXC8pL2lnKS5maWx0ZXIodiA9PiAoIHYgIT09ICc+JyAmJiB2ICkpO1xuICAgIHJldHVybiBwYXRoLmxlbmd0aFxuICAgICAgICAgICA/IG9ialsgcGF0aFsgMCBdIF0gJiYgd2Fsa25HZXQob2JqWyBwYXRoWyAwIF0gXSwgcGF0aC5zbGljZSgxKSlcbiAgICAgICAgICAgOiBvYmo7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWxzL3V0aWxzLmpzIiwiLypcbiAqIENvcHlyaWdodCAoYykgIDIwMTggV2lzZSBXaWxkIFdlYiAuXG4gKlxuICogIE1JVCBMaWNlbnNlXG4gKiAgXG4gKiAgUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqICBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiAgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKiAgXG4gKiAgVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG4gKiAgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqICBcbiAqICBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiAgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiAgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiAgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiAgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcbiAqICBTT0ZUV0FSRS5cbiAqICBcbiAqIEBhdXRob3IgOiBOYXRoYW5hZWwgQnJhdW5cbiAqIEBjb250YWN0IDogY2FpcGlsYWJzQGdtYWlsLmNvbVxuICovXG52YXIgaXMgPSByZXF1aXJlKCdpcycpO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW1pdHRlciB7XG4gICAgX2V2ZW50cyA9IHt9O1xuICAgIFxuICAgIG9uKCBldnQsIGNiICkge1xuICAgICAgICBpZiAoICFpcy5zdHJpbmcoZXZ0KSAmJiBldnQgKVxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKGV2dCkuZm9yRWFjaChrID0+IHRoaXMub24oaywgZXZ0W2tdKSk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9ldmVudHNbZXZ0XSA9IHRoaXMuX2V2ZW50c1tldnRdIHx8IFtdO1xuICAgICAgICB0aGlzLl9ldmVudHNbZXZ0XS5wdXNoKGNiKTtcbiAgICAgICAgXG4gICAgfVxuICAgIFxuICAgIHVuKCBldnQsIGNiICkge1xuICAgICAgICBpZiAoICFpcy5zdHJpbmcoZXZ0KSAmJiBldnQgKVxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKGV2dCkuZm9yRWFjaChrID0+IHRoaXMudW4oaywgZXZ0W2tdKSk7XG4gICAgICAgIFxuICAgICAgICBpZiAoICF0aGlzLl9ldmVudHNbZXZ0XSApIHJldHVybjtcbiAgICAgICAgdmFyIGkgPSB0aGlzLl9ldmVudHNbZXZ0XS5pbmRleE9mKGNiKTtcbiAgICAgICAgdGhpcy5fZXZlbnRzW2V2dF0uc3BsaWNlKGksIDEpO1xuICAgIH1cbiAgICBcbiAgICBlbWl0KCBldnQsIC4uLmFyZ3ogKSB7XG4gICAgICAgIGlmICggIXRoaXMuX2V2ZW50c1tldnRdICkgcmV0dXJuO1xuICAgICAgICBsZXQgbGlzdHMgPSBbLi4udGhpcy5fZXZlbnRzW2V2dF1dO1xuICAgICAgICBcbiAgICAgICAgZm9yICggdmFyIGkgPSAwOyBpIDwgbGlzdHMubGVuZ3RoOyBpKysgKVxuICAgICAgICAgICAgbGlzdHNbaV0oLi4uYXJneilcbiAgICB9XG4gICAgXG4gICAgYWRkTGlzdGVuZXIoKSB7XG4gICAgICAgIHRoaXMub24oLi4uYXJndW1lbnRzKTtcbiAgICB9XG4gICAgXG4gICAgcmVtb3ZlTGlzdGVuZXIoKSB7XG4gICAgICAgIHRoaXMudW4oLi4uYXJndW1lbnRzKTtcbiAgICB9XG4gICAgXG4gICAgcmVtb3ZlQWxsTGlzdGVuZXJzKCkge1xuICAgICAgICB0aGlzLl9ldmVudHMgPSB7fTtcbiAgICB9XG4gICAgXG4gICAgb25jZSggZXZ0LCBjYiApIHtcbiAgICAgICAgbGV0IGZuO1xuICAgICAgICB0aGlzLm9uKGV2dCwgZm4gPSAoIC4uLmFyZ3ogKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnVuKGV2dCwgZm4pO1xuICAgICAgICAgICAgY2IoLi4uYXJneilcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIFxuICAgIFxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlscy9FbWl0dGVyLmpzIiwiJ3VzZSBzdHJpY3QnO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2xpYi9pbmRleCcpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Nob3J0aWQvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYWxwaGFiZXQgPSByZXF1aXJlKCcuL2FscGhhYmV0Jyk7XG52YXIgZW5jb2RlID0gcmVxdWlyZSgnLi9lbmNvZGUnKTtcbnZhciBkZWNvZGUgPSByZXF1aXJlKCcuL2RlY29kZScpO1xudmFyIGJ1aWxkID0gcmVxdWlyZSgnLi9idWlsZCcpO1xudmFyIGlzVmFsaWQgPSByZXF1aXJlKCcuL2lzLXZhbGlkJyk7XG5cbi8vIGlmIHlvdSBhcmUgdXNpbmcgY2x1c3RlciBvciBtdWx0aXBsZSBzZXJ2ZXJzIHVzZSB0aGlzIHRvIG1ha2UgZWFjaCBpbnN0YW5jZVxuLy8gaGFzIGEgdW5pcXVlIHZhbHVlIGZvciB3b3JrZXJcbi8vIE5vdGU6IEkgZG9uJ3Qga25vdyBpZiB0aGlzIGlzIGF1dG9tYXRpY2FsbHkgc2V0IHdoZW4gdXNpbmcgdGhpcmRcbi8vIHBhcnR5IGNsdXN0ZXIgc29sdXRpb25zIHN1Y2ggYXMgcG0yLlxudmFyIGNsdXN0ZXJXb3JrZXJJZCA9IHJlcXVpcmUoJy4vdXRpbC9jbHVzdGVyLXdvcmtlci1pZCcpIHx8IDA7XG5cbi8qKlxuICogU2V0IHRoZSBzZWVkLlxuICogSGlnaGx5IHJlY29tbWVuZGVkIGlmIHlvdSBkb24ndCB3YW50IHBlb3BsZSB0byB0cnkgdG8gZmlndXJlIG91dCB5b3VyIGlkIHNjaGVtYS5cbiAqIGV4cG9zZWQgYXMgc2hvcnRpZC5zZWVkKGludClcbiAqIEBwYXJhbSBzZWVkIEludGVnZXIgdmFsdWUgdG8gc2VlZCB0aGUgcmFuZG9tIGFscGhhYmV0LiAgQUxXQVlTIFVTRSBUSEUgU0FNRSBTRUVEIG9yIHlvdSBtaWdodCBnZXQgb3ZlcmxhcHMuXG4gKi9cbmZ1bmN0aW9uIHNlZWQoc2VlZFZhbHVlKSB7XG4gICAgYWxwaGFiZXQuc2VlZChzZWVkVmFsdWUpO1xuICAgIHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLyoqXG4gKiBTZXQgdGhlIGNsdXN0ZXIgd29ya2VyIG9yIG1hY2hpbmUgaWRcbiAqIGV4cG9zZWQgYXMgc2hvcnRpZC53b3JrZXIoaW50KVxuICogQHBhcmFtIHdvcmtlcklkIHdvcmtlciBtdXN0IGJlIHBvc2l0aXZlIGludGVnZXIuICBOdW1iZXIgbGVzcyB0aGFuIDE2IGlzIHJlY29tbWVuZGVkLlxuICogcmV0dXJucyBzaG9ydGlkIG1vZHVsZSBzbyBpdCBjYW4gYmUgY2hhaW5lZC5cbiAqL1xuZnVuY3Rpb24gd29ya2VyKHdvcmtlcklkKSB7XG4gICAgY2x1c3RlcldvcmtlcklkID0gd29ya2VySWQ7XG4gICAgcmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vKipcbiAqXG4gKiBzZXRzIG5ldyBjaGFyYWN0ZXJzIHRvIHVzZSBpbiB0aGUgYWxwaGFiZXRcbiAqIHJldHVybnMgdGhlIHNodWZmbGVkIGFscGhhYmV0XG4gKi9cbmZ1bmN0aW9uIGNoYXJhY3RlcnMobmV3Q2hhcmFjdGVycykge1xuICAgIGlmIChuZXdDaGFyYWN0ZXJzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgYWxwaGFiZXQuY2hhcmFjdGVycyhuZXdDaGFyYWN0ZXJzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWxwaGFiZXQuc2h1ZmZsZWQoKTtcbn1cblxuLyoqXG4gKiBHZW5lcmF0ZSB1bmlxdWUgaWRcbiAqIFJldHVybnMgc3RyaW5nIGlkXG4gKi9cbmZ1bmN0aW9uIGdlbmVyYXRlKCkge1xuICByZXR1cm4gYnVpbGQoY2x1c3RlcldvcmtlcklkKTtcbn1cblxuLy8gRXhwb3J0IGFsbCBvdGhlciBmdW5jdGlvbnMgYXMgcHJvcGVydGllcyBvZiB0aGUgZ2VuZXJhdGUgZnVuY3Rpb25cbm1vZHVsZS5leHBvcnRzID0gZ2VuZXJhdGU7XG5tb2R1bGUuZXhwb3J0cy5nZW5lcmF0ZSA9IGdlbmVyYXRlO1xubW9kdWxlLmV4cG9ydHMuc2VlZCA9IHNlZWQ7XG5tb2R1bGUuZXhwb3J0cy53b3JrZXIgPSB3b3JrZXI7XG5tb2R1bGUuZXhwb3J0cy5jaGFyYWN0ZXJzID0gY2hhcmFjdGVycztcbm1vZHVsZS5leHBvcnRzLmRlY29kZSA9IGRlY29kZTtcbm1vZHVsZS5leHBvcnRzLmlzVmFsaWQgPSBpc1ZhbGlkO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Nob3J0aWQvbGliL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxudmFyIHJhbmRvbUZyb21TZWVkID0gcmVxdWlyZSgnLi9yYW5kb20vcmFuZG9tLWZyb20tc2VlZCcpO1xuXG52YXIgT1JJR0lOQUwgPSAnMDEyMzQ1Njc4OWFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6QUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVpfLSc7XG52YXIgYWxwaGFiZXQ7XG52YXIgcHJldmlvdXNTZWVkO1xuXG52YXIgc2h1ZmZsZWQ7XG5cbmZ1bmN0aW9uIHJlc2V0KCkge1xuICAgIHNodWZmbGVkID0gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIHNldENoYXJhY3RlcnMoX2FscGhhYmV0Xykge1xuICAgIGlmICghX2FscGhhYmV0Xykge1xuICAgICAgICBpZiAoYWxwaGFiZXQgIT09IE9SSUdJTkFMKSB7XG4gICAgICAgICAgICBhbHBoYWJldCA9IE9SSUdJTkFMO1xuICAgICAgICAgICAgcmVzZXQoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKF9hbHBoYWJldF8gPT09IGFscGhhYmV0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoX2FscGhhYmV0Xy5sZW5ndGggIT09IE9SSUdJTkFMLmxlbmd0aCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0N1c3RvbSBhbHBoYWJldCBmb3Igc2hvcnRpZCBtdXN0IGJlICcgKyBPUklHSU5BTC5sZW5ndGggKyAnIHVuaXF1ZSBjaGFyYWN0ZXJzLiBZb3Ugc3VibWl0dGVkICcgKyBfYWxwaGFiZXRfLmxlbmd0aCArICcgY2hhcmFjdGVyczogJyArIF9hbHBoYWJldF8pO1xuICAgIH1cblxuICAgIHZhciB1bmlxdWUgPSBfYWxwaGFiZXRfLnNwbGl0KCcnKS5maWx0ZXIoZnVuY3Rpb24oaXRlbSwgaW5kLCBhcnIpe1xuICAgICAgIHJldHVybiBpbmQgIT09IGFyci5sYXN0SW5kZXhPZihpdGVtKTtcbiAgICB9KTtcblxuICAgIGlmICh1bmlxdWUubGVuZ3RoKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQ3VzdG9tIGFscGhhYmV0IGZvciBzaG9ydGlkIG11c3QgYmUgJyArIE9SSUdJTkFMLmxlbmd0aCArICcgdW5pcXVlIGNoYXJhY3RlcnMuIFRoZXNlIGNoYXJhY3RlcnMgd2VyZSBub3QgdW5pcXVlOiAnICsgdW5pcXVlLmpvaW4oJywgJykpO1xuICAgIH1cblxuICAgIGFscGhhYmV0ID0gX2FscGhhYmV0XztcbiAgICByZXNldCgpO1xufVxuXG5mdW5jdGlvbiBjaGFyYWN0ZXJzKF9hbHBoYWJldF8pIHtcbiAgICBzZXRDaGFyYWN0ZXJzKF9hbHBoYWJldF8pO1xuICAgIHJldHVybiBhbHBoYWJldDtcbn1cblxuZnVuY3Rpb24gc2V0U2VlZChzZWVkKSB7XG4gICAgcmFuZG9tRnJvbVNlZWQuc2VlZChzZWVkKTtcbiAgICBpZiAocHJldmlvdXNTZWVkICE9PSBzZWVkKSB7XG4gICAgICAgIHJlc2V0KCk7XG4gICAgICAgIHByZXZpb3VzU2VlZCA9IHNlZWQ7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBzaHVmZmxlKCkge1xuICAgIGlmICghYWxwaGFiZXQpIHtcbiAgICAgICAgc2V0Q2hhcmFjdGVycyhPUklHSU5BTCk7XG4gICAgfVxuXG4gICAgdmFyIHNvdXJjZUFycmF5ID0gYWxwaGFiZXQuc3BsaXQoJycpO1xuICAgIHZhciB0YXJnZXRBcnJheSA9IFtdO1xuICAgIHZhciByID0gcmFuZG9tRnJvbVNlZWQubmV4dFZhbHVlKCk7XG4gICAgdmFyIGNoYXJhY3RlckluZGV4O1xuXG4gICAgd2hpbGUgKHNvdXJjZUFycmF5Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgciA9IHJhbmRvbUZyb21TZWVkLm5leHRWYWx1ZSgpO1xuICAgICAgICBjaGFyYWN0ZXJJbmRleCA9IE1hdGguZmxvb3IociAqIHNvdXJjZUFycmF5Lmxlbmd0aCk7XG4gICAgICAgIHRhcmdldEFycmF5LnB1c2goc291cmNlQXJyYXkuc3BsaWNlKGNoYXJhY3RlckluZGV4LCAxKVswXSk7XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXRBcnJheS5qb2luKCcnKTtcbn1cblxuZnVuY3Rpb24gZ2V0U2h1ZmZsZWQoKSB7XG4gICAgaWYgKHNodWZmbGVkKSB7XG4gICAgICAgIHJldHVybiBzaHVmZmxlZDtcbiAgICB9XG4gICAgc2h1ZmZsZWQgPSBzaHVmZmxlKCk7XG4gICAgcmV0dXJuIHNodWZmbGVkO1xufVxuXG4vKipcbiAqIGxvb2t1cCBzaHVmZmxlZCBsZXR0ZXJcbiAqIEBwYXJhbSBpbmRleFxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gbG9va3VwKGluZGV4KSB7XG4gICAgdmFyIGFscGhhYmV0U2h1ZmZsZWQgPSBnZXRTaHVmZmxlZCgpO1xuICAgIHJldHVybiBhbHBoYWJldFNodWZmbGVkW2luZGV4XTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgY2hhcmFjdGVyczogY2hhcmFjdGVycyxcbiAgICBzZWVkOiBzZXRTZWVkLFxuICAgIGxvb2t1cDogbG9va3VwLFxuICAgIHNodWZmbGVkOiBnZXRTaHVmZmxlZFxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zaG9ydGlkL2xpYi9hbHBoYWJldC5qc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbi8vIEZvdW5kIHRoaXMgc2VlZC1iYXNlZCByYW5kb20gZ2VuZXJhdG9yIHNvbWV3aGVyZVxuLy8gQmFzZWQgb24gVGhlIENlbnRyYWwgUmFuZG9taXplciAxLjMgKEMpIDE5OTcgYnkgUGF1bCBIb3VsZSAoaG91bGVAbXNjLmNvcm5lbGwuZWR1KVxuXG52YXIgc2VlZCA9IDE7XG5cbi8qKlxuICogcmV0dXJuIGEgcmFuZG9tIG51bWJlciBiYXNlZCBvbiBhIHNlZWRcbiAqIEBwYXJhbSBzZWVkXG4gKiBAcmV0dXJucyB7bnVtYmVyfVxuICovXG5mdW5jdGlvbiBnZXROZXh0VmFsdWUoKSB7XG4gICAgc2VlZCA9IChzZWVkICogOTMwMSArIDQ5Mjk3KSAlIDIzMzI4MDtcbiAgICByZXR1cm4gc2VlZC8oMjMzMjgwLjApO1xufVxuXG5mdW5jdGlvbiBzZXRTZWVkKF9zZWVkXykge1xuICAgIHNlZWQgPSBfc2VlZF87XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIG5leHRWYWx1ZTogZ2V0TmV4dFZhbHVlLFxuICAgIHNlZWQ6IHNldFNlZWRcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc2hvcnRpZC9saWIvcmFuZG9tL3JhbmRvbS1mcm9tLXNlZWQuanNcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgcmFuZG9tQnl0ZSA9IHJlcXVpcmUoJy4vcmFuZG9tL3JhbmRvbS1ieXRlJyk7XG5cbmZ1bmN0aW9uIGVuY29kZShsb29rdXAsIG51bWJlcikge1xuICAgIHZhciBsb29wQ291bnRlciA9IDA7XG4gICAgdmFyIGRvbmU7XG5cbiAgICB2YXIgc3RyID0gJyc7XG5cbiAgICB3aGlsZSAoIWRvbmUpIHtcbiAgICAgICAgc3RyID0gc3RyICsgbG9va3VwKCAoIChudW1iZXIgPj4gKDQgKiBsb29wQ291bnRlcikpICYgMHgwZiApIHwgcmFuZG9tQnl0ZSgpICk7XG4gICAgICAgIGRvbmUgPSBudW1iZXIgPCAoTWF0aC5wb3coMTYsIGxvb3BDb3VudGVyICsgMSApICk7XG4gICAgICAgIGxvb3BDb3VudGVyKys7XG4gICAgfVxuICAgIHJldHVybiBzdHI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZW5jb2RlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Nob3J0aWQvbGliL2VuY29kZS5qc1xuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgY3J5cHRvID0gdHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcgJiYgKHdpbmRvdy5jcnlwdG8gfHwgd2luZG93Lm1zQ3J5cHRvKTsgLy8gSUUgMTEgdXNlcyB3aW5kb3cubXNDcnlwdG9cblxuZnVuY3Rpb24gcmFuZG9tQnl0ZSgpIHtcbiAgICBpZiAoIWNyeXB0byB8fCAhY3J5cHRvLmdldFJhbmRvbVZhbHVlcykge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjU2KSAmIDB4MzA7XG4gICAgfVxuICAgIHZhciBkZXN0ID0gbmV3IFVpbnQ4QXJyYXkoMSk7XG4gICAgY3J5cHRvLmdldFJhbmRvbVZhbHVlcyhkZXN0KTtcbiAgICByZXR1cm4gZGVzdFswXSAmIDB4MzA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcmFuZG9tQnl0ZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zaG9ydGlkL2xpYi9yYW5kb20vcmFuZG9tLWJ5dGUtYnJvd3Nlci5qc1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFscGhhYmV0ID0gcmVxdWlyZSgnLi9hbHBoYWJldCcpO1xuXG4vKipcbiAqIERlY29kZSB0aGUgaWQgdG8gZ2V0IHRoZSB2ZXJzaW9uIGFuZCB3b3JrZXJcbiAqIE1haW5seSBmb3IgZGVidWdnaW5nIGFuZCB0ZXN0aW5nLlxuICogQHBhcmFtIGlkIC0gdGhlIHNob3J0aWQtZ2VuZXJhdGVkIGlkLlxuICovXG5mdW5jdGlvbiBkZWNvZGUoaWQpIHtcbiAgICB2YXIgY2hhcmFjdGVycyA9IGFscGhhYmV0LnNodWZmbGVkKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdmVyc2lvbjogY2hhcmFjdGVycy5pbmRleE9mKGlkLnN1YnN0cigwLCAxKSkgJiAweDBmLFxuICAgICAgICB3b3JrZXI6IGNoYXJhY3RlcnMuaW5kZXhPZihpZC5zdWJzdHIoMSwgMSkpICYgMHgwZlxuICAgIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZGVjb2RlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Nob3J0aWQvbGliL2RlY29kZS5qc1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZW5jb2RlID0gcmVxdWlyZSgnLi9lbmNvZGUnKTtcbnZhciBhbHBoYWJldCA9IHJlcXVpcmUoJy4vYWxwaGFiZXQnKTtcblxuLy8gSWdub3JlIGFsbCBtaWxsaXNlY29uZHMgYmVmb3JlIGEgY2VydGFpbiB0aW1lIHRvIHJlZHVjZSB0aGUgc2l6ZSBvZiB0aGUgZGF0ZSBlbnRyb3B5IHdpdGhvdXQgc2FjcmlmaWNpbmcgdW5pcXVlbmVzcy5cbi8vIFRoaXMgbnVtYmVyIHNob3VsZCBiZSB1cGRhdGVkIGV2ZXJ5IHllYXIgb3Igc28gdG8ga2VlcCB0aGUgZ2VuZXJhdGVkIGlkIHNob3J0LlxuLy8gVG8gcmVnZW5lcmF0ZSBgbmV3IERhdGUoKSAtIDBgIGFuZCBidW1wIHRoZSB2ZXJzaW9uLiBBbHdheXMgYnVtcCB0aGUgdmVyc2lvbiFcbnZhciBSRURVQ0VfVElNRSA9IDE0NTk3MDc2MDY1MTg7XG5cbi8vIGRvbid0IGNoYW5nZSB1bmxlc3Mgd2UgY2hhbmdlIHRoZSBhbGdvcyBvciBSRURVQ0VfVElNRVxuLy8gbXVzdCBiZSBhbiBpbnRlZ2VyIGFuZCBsZXNzIHRoYW4gMTZcbnZhciB2ZXJzaW9uID0gNjtcblxuLy8gQ291bnRlciBpcyB1c2VkIHdoZW4gc2hvcnRpZCBpcyBjYWxsZWQgbXVsdGlwbGUgdGltZXMgaW4gb25lIHNlY29uZC5cbnZhciBjb3VudGVyO1xuXG4vLyBSZW1lbWJlciB0aGUgbGFzdCB0aW1lIHNob3J0aWQgd2FzIGNhbGxlZCBpbiBjYXNlIGNvdW50ZXIgaXMgbmVlZGVkLlxudmFyIHByZXZpb3VzU2Vjb25kcztcblxuLyoqXG4gKiBHZW5lcmF0ZSB1bmlxdWUgaWRcbiAqIFJldHVybnMgc3RyaW5nIGlkXG4gKi9cbmZ1bmN0aW9uIGJ1aWxkKGNsdXN0ZXJXb3JrZXJJZCkge1xuXG4gICAgdmFyIHN0ciA9ICcnO1xuXG4gICAgdmFyIHNlY29uZHMgPSBNYXRoLmZsb29yKChEYXRlLm5vdygpIC0gUkVEVUNFX1RJTUUpICogMC4wMDEpO1xuXG4gICAgaWYgKHNlY29uZHMgPT09IHByZXZpb3VzU2Vjb25kcykge1xuICAgICAgICBjb3VudGVyKys7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY291bnRlciA9IDA7XG4gICAgICAgIHByZXZpb3VzU2Vjb25kcyA9IHNlY29uZHM7XG4gICAgfVxuXG4gICAgc3RyID0gc3RyICsgZW5jb2RlKGFscGhhYmV0Lmxvb2t1cCwgdmVyc2lvbik7XG4gICAgc3RyID0gc3RyICsgZW5jb2RlKGFscGhhYmV0Lmxvb2t1cCwgY2x1c3RlcldvcmtlcklkKTtcbiAgICBpZiAoY291bnRlciA+IDApIHtcbiAgICAgICAgc3RyID0gc3RyICsgZW5jb2RlKGFscGhhYmV0Lmxvb2t1cCwgY291bnRlcik7XG4gICAgfVxuICAgIHN0ciA9IHN0ciArIGVuY29kZShhbHBoYWJldC5sb29rdXAsIHNlY29uZHMpO1xuXG4gICAgcmV0dXJuIHN0cjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBidWlsZDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zaG9ydGlkL2xpYi9idWlsZC5qc1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFscGhhYmV0ID0gcmVxdWlyZSgnLi9hbHBoYWJldCcpO1xuXG5mdW5jdGlvbiBpc1Nob3J0SWQoaWQpIHtcbiAgICBpZiAoIWlkIHx8IHR5cGVvZiBpZCAhPT0gJ3N0cmluZycgfHwgaWQubGVuZ3RoIDwgNiApIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHZhciBjaGFyYWN0ZXJzID0gYWxwaGFiZXQuY2hhcmFjdGVycygpO1xuICAgIHZhciBsZW4gPSBpZC5sZW5ndGg7XG4gICAgZm9yKHZhciBpID0gMDsgaSA8IGxlbjtpKyspIHtcbiAgICAgICAgaWYgKGNoYXJhY3RlcnMuaW5kZXhPZihpZFtpXSkgPT09IC0xKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNTaG9ydElkO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Nob3J0aWQvbGliL2lzLXZhbGlkLmpzXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gMDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zaG9ydGlkL2xpYi91dGlsL2NsdXN0ZXItd29ya2VyLWlkLWJyb3dzZXIuanNcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpICAyMDE4IFdpc2UgV2lsZCBXZWIgLlxuICpcbiAqICBNSVQgTGljZW5zZVxuICpcbiAqICBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiAgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqICB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiAgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiAgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiAgVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG4gKiAgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqICBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG4gKiAgU09GVFdBUkUuXG4gKlxuICogQGF1dGhvciA6IE5hdGhhbmFlbCBCcmF1blxuICogQGNvbnRhY3QgOiBjYWlwaWxhYnNAZ21haWwuY29tXG4gKi9cblxudmFyIGlzICAgICAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL3V0aWxzL2lzJyksXG4gICAgU2NvcGUgICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vU2NvcGUnKSxcbiAgICB7IGtleVdhbGtuU2V0LCBrZXlXYWxrbkdldCB9ID0gcmVxdWlyZSgnLi91dGlscy91dGlscycpLFxuICAgIEV2ZW50RW1pdHRlciAgICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL3V0aWxzL0VtaXR0ZXInKSxcbiAgICBUYXNrU2VxdWVuY2VyICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi91dGlscy9UYXNrU2VxdWVuY2VyJyksXG4gICAgc2hvcnRpZCAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJ3Nob3J0aWQnKSxcbiAgICBvYmpQcm90byAgICAgICAgICAgICAgICAgICAgID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHt9KTtcblxuY2xhc3MgU3RvcmUgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuXHQvL3N0YXRpYyB1c2UgICAgICAgICAgICAgICAgICA9IFtdOy8vIG92ZXJyaWRhYmxlIGxpc3Qgb2Ygc291cmNlIHN0b3Jlc1xuXHRzdGF0aWMgZm9sbG93Oy8vIG92ZXJyaWRhYmxlIGxpc3Qgb2Ygc3RvcmUgdGhhdCB3aWxsIGFsbG93IHB1c2ggaWYgdXBkYXRlZFxuXHRzdGF0aWMgcmVxdWlyZTtcblx0c3RhdGljIHN0YXRpY1Njb3BlICAgPSBuZXcgU2NvcGUoe30sIHsgaWQ6IFwic3RhdGljXCIgfSk7XG5cdHN0YXRpYyBzdGF0ZSAgICAgICAgID0gdW5kZWZpbmVkOy8vIGRlZmF1bHQgc3RhdGVcblx0LyoqXG5cdCAqIGlmIHJldGFpbiBnb2VzIHRvIDAgOlxuXHQgKiBmYWxzZSB0byBub3QgZGVzdHJveSxcblx0ICogMCB0byBzeW5jIGF1dG8gZGVzdHJveVxuXHQgKiBNcyB0byBhdXRvZGVzdHJveSBhZnRlciB0bSBtcyBpZiBubyByZXRhaW4gaGFzIGJlZW4gY2FsbGVkXG5cdCAqIEB0eXBlIHtib29sZWFufEludH1cblx0ICovXG5cdHN0YXRpYyBwZXJzaXN0ZW5jZVRtID0gZmFsc2U7XG5cdFxuXHQvKipcblx0ICogQ29uc3RydWN0b3IsIHdpbGwgYnVpbGQgYSByZXNjb3BlIHN0b3JlXG5cdCAqXG5cdCAqIChzY29wZSwge3JlcXVpcmUsdXNlLGFwcGx5LHN0YXRlLCBkYXRhfSlcblx0ICogKHNjb3BlKVxuXHQgKlxuXHQgKiBAcGFyYW0gc2NvcGUge29iamVjdH0gc2NvcGUgd2hlcmUgdG8gZmluZCB0aGUgb3RoZXIgc3RvcmVzIChkZWZhdWx0IDogc3RhdGljXG5cdCAqICAgICBzdGF0aWNTY29wZSApXG5cdCAqIEBwYXJhbSBrZXlzIHtBcnJheX0gKHBhc3NlZCB0byBTdG9yZTo6bWFwKSBFeCA6IFtcInNlc3Npb25cIiwgXCJvdGhlck5hbWVkU3RvcmU6a2V5XCIsXG5cdCAqICAgICBvdGhlclN0b3JlLmFzKFwib3RoZXJLZXlcIildXG5cdCAqL1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHRcdHZhciBhcmd6ICAgICAgICAgPSBbLi4uYXJndW1lbnRzXSxcblx0XHQgICAgX3N0YXRpYyAgICAgID0gdGhpcy5jb25zdHJ1Y3Rvcixcblx0XHQgICAgc2NvcGUgICAgICAgID0gYXJnelswXSBpbnN0YW5jZW9mIFNjb3BlXG5cdFx0ICAgICAgICAgICAgICAgICAgID8gYXJnei5zaGlmdCgpXG5cdFx0ICAgICAgICAgICAgICAgICAgIDogX3N0YXRpYy5zY29wZSA/IFNjb3BlLmdldFNjb3BlKF9zdGF0aWMuc2NvcGUpXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGlzLnN0cmluZyhhcmd6WzBdKVxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFNjb3BlLmdldFNjb3BlKGFyZ3ouc2hpZnQoKSlcblx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfc3RhdGljLnN0YXRpY1Njb3BlLFxuXHRcdCAgICBjZmcgICAgICAgICAgPSBhcmd6WzBdICYmICFpcy5hcnJheShhcmd6WzBdKSAmJiAhaXMuc3RyaW5nKGFyZ3pbMF0pXG5cdFx0ICAgICAgICAgICAgICAgICAgID8gYXJnei5zaGlmdCgpXG5cdFx0ICAgICAgICAgICAgICAgICAgIDoge30sXG5cdFx0ICAgIHRhc2tRdWV1ZSAgICA9IGlzLmFycmF5KGFyZ3pbMF0pID8gYXJnei5zaGlmdCgpIDogbnVsbCxcblx0XHQgICAgbmFtZSAgICAgICAgID0gY2ZnLm5hbWUgfHwgX3N0YXRpYy5uYW1lLFxuXHRcdCAgICB3YXRjaHMgICAgICAgPSBjZmcudXNlIHx8IFtdLFxuXHRcdCAgICBhcHBseSAgICAgICAgPSBjZmcuYXBwbHkgfHwgbnVsbCxcblx0XHQgICAgaW5pdGlhbFN0YXRlID0gX3N0YXRpYy5zdGF0ZSB8fCBfc3RhdGljLmluaXRpYWxTdGF0ZSB8fCBfc3RhdGljLmRlZmF1bHRTdGF0ZSxcblx0XHQgICAgYXBwbGllZDtcblx0XHRcblx0XHR0aGlzLl91aWQgPSBjZmcuX3VpZCB8fCBzaG9ydGlkLmdlbmVyYXRlKCk7XG5cdFx0XG5cdFx0dGhpcy5fX3JldGFpbnMgICAgPSB7IGFsbDogMCB9O1xuXHRcdHRoaXMuX19sb2NrcyAgICAgID0geyBhbGw6IDAgfTtcblx0XHR0aGlzLl9vblN0YWJpbGl6ZSA9IFtdO1xuXHRcdFxuXHRcdC8vIGF1dG9EZXN0cm95VG1cblx0XHR0aGlzLl9hdXRvRGVzdHJveSAgID0gISF0aGlzLl9wZXJzaXN0ZW5jZVRtO1xuXHRcdHRoaXMuX3BlcnNpc3RlbmNlVG0gPSBjZmcucGVyc2lzdGVuY2VUbSB8fCBfc3RhdGljLnBlcnNpc3RlbmNlVG0gfHwgKGNmZy5hdXRvRGVzdHJveSB8fCBfc3RhdGljLmF1dG9EZXN0cm95KSAmJiA1O1xuXHRcdHRoaXMuX2NmZyAgICAgICAgICAgPSBjZmc7XG5cdFx0aWYgKCBjZmcgJiYgY2ZnLm9uICkge1xuXHRcdFx0dGhpcy5vbihjZmcub24pO1xuXHRcdH1cblx0XHRcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuXHRcdFxuXHRcdGlmICggc2NvcGUuc3RvcmVzICkge1xuXHRcdFx0dGhpcy5zY29wZU9iaiA9IHNjb3BlO1xuXHRcdFx0dGhpcy5zY29wZSAgICA9IHNjb3BlLnN0b3Jlcztcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHR0aGlzLnNjb3BlT2JqID0gbmV3IFNjb3BlKHNjb3BlKTtcblx0XHRcdHRoaXMuc2NvcGUgICAgPSBzY29wZS5zdG9yZXM7XG5cdFx0fVxuXHRcdFxuXHRcdC8vIHN0YW5kYXJkaXplZCBzY29wZSBhY2Nlc3Ncblx0XHR0aGlzLiRzY29wZSAgICA9IHRoaXMuc2NvcGVPYmo7XG5cdFx0dGhpcy4kc3RvcmVzICAgPSB0aGlzLnNjb3BlT2JqLnN0b3Jlcztcblx0XHR0aGlzLiRhY3Rpb25zICA9IHRoaXMuc2NvcGVPYmouYWN0aW9ucztcblx0XHR0aGlzLiRkaXNwYXRjaCA9IHRoaXMuc2NvcGVPYmouZGlzcGF0Y2guYmluZCh0aGlzLnNjb3BlT2JqKTtcblx0XHRcblx0XHR0aGlzLl9yZXYgICAgID0gdGhpcy5jb25zdHJ1Y3Rvci5fcmV2IHx8IDA7XG5cdFx0dGhpcy5fcmV2cyAgICA9IHt9O1xuXHRcdHRoaXMuc3RvcmVzICAgPSB7fTtcblx0XHR0aGlzLl9yZXF1aXJlID0gW107XG5cdFx0dGhpcy5fc291cmNlcyA9IFtuYW1lXTtcblx0XHRcblx0XHRpZiAoIGlzLmFycmF5KF9zdGF0aWMudXNlKSApIHtcblx0XHRcdHRoaXMuX3VzZSA9IFsuLi53YXRjaHMsIC4uLihfc3RhdGljLnVzZSB8fCBbXSkubWFwKFxuXHRcdFx0XHRrZXkgPT4ge1xuXHRcdFx0XHRcdGxldCByZWYgPSBrZXkubWF0Y2goL14oXFwhPykoW15cXDpdKikoPzpcXDooLiopKT8kLyk7XG5cdFx0XHRcdFx0aWYgKCByZWZbMV0gKSB7XG5cdFx0XHRcdFx0XHRsZXQgcmVmMiA9IHJlZlsyXS5zcGxpdCgnLicpO1xuXHRcdFx0XHRcdFx0dGhpcy5fcmVxdWlyZS5wdXNoKHJlZlszXSB8fCByZWYyW3JlZjIubGVuZ3RoIC0gMV0pOy8vIHJlcXVpcmUgY2hlY2sgdmFsdWUgb2YgdGhlIGFsaWFzZWQgaW1wb3J0ZWQgdmFsdWVcblx0XHRcdFx0XHRcdHJldHVybiBrZXkuc3Vic3RyKDEpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm4ga2V5O1xuXHRcdFx0XHR9XG5cdFx0XHQpXTtcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHR0aGlzLl91c2UgPSBbLi4ud2F0Y2hzLCAuLi4oXG5cdFx0XHRcdF9zdGF0aWMudXNlID8gT2JqZWN0LmtleXMoX3N0YXRpYy51c2UpXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgLm1hcChcblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgIGtleSA9PiB7XG5cdFx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgIGxldCByZWYgPSBrZXkubWF0Y2goL14oXFwhPykoLiopJC8pO1xuXHRcdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICByZWZbMV0gJiYgdGhpcy5fcmVxdWlyZS5wdXNoKF9zdGF0aWMudXNlW2tleV0pO1xuXHRcdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVmWzJdICsgKChfc3RhdGljLnVzZVtrZXldID09PSB0cnVlKVxuXHRcdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJydcblx0XHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICc6JyArIF9zdGF0aWMudXNlW2tleV0pO1xuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgfVxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICkgOiBbXVxuXHRcdFx0KV07XG5cdFx0fVxuXHRcdFxuXHRcdGlmICggX3N0YXRpYy5yZXF1aXJlIClcblx0XHRcdHRoaXMuX3JlcXVpcmUucHVzaCguLi5fc3RhdGljLnJlcXVpcmUpO1xuXHRcdGlmICggY2ZnLnJlcXVpcmUgKVxuXHRcdFx0dGhpcy5fcmVxdWlyZS5wdXNoKC4uLmNmZy5yZXF1aXJlKTtcblx0XHRcblx0XHR0aGlzLl9mb2xsb3dlcnMgPSBbXTtcblx0XHR0aGlzLl9jaGFuZ2VzU1cgPSBpbml0aWFsU3RhdGUgfHwge307XG5cdFx0dGhpcy5zdGF0ZSAgICAgID0gaW5pdGlhbFN0YXRlICYmIHt9O1xuXHRcdGlmICggYXBwbHkgKVxuXHRcdFx0dGhpcy5hcHBseSA9IGFwcGx5O1xuXHRcdFxuXHRcdC8qKlxuXHRcdCAqIEluaXRpYWwgc3RhdGUgaXNuJ3QgZnVsbHkgaW5pdGlhbGl6ZWQgKCBjaGlsZHMgY29uc3RydWN0b3JzIGNhbiBzZXQgaXQgKVxuXHRcdCAqIFNjb3BlIGJhc2VkIGluc3RhbmNlIGhhdmUgdGFza1F1ZXVlIHRvIGRlbGF5IGluaXQgc3luY2hyb25vdXNseSwgaWYgbm90XG5cdFx0ICogcHJlc2VudCB3ZSB1c2Ugc2V0VGltZW91dFxuXHRcdCAqL1xuXHRcdGlmICggdGFza1F1ZXVlICkge1xuXHRcdFx0dGFza1F1ZXVlLnB1c2godGhpcy5fYWZ0ZXJDb25zdHJ1Y3Rvci5iaW5kKHRoaXMpKVxuXHRcdH1cblx0XHRlbHNlXG5cdFx0XHRzZXRUaW1lb3V0KHRoaXMuX2FmdGVyQ29uc3RydWN0b3IuYmluZCh0aGlzKSlcblx0fVxuXHRcblx0LyoqXG5cdCAqIEdldCB0aGUgaW5jb21pbmcgc3RhdGUgKCBmb3IgaW1tZWRpYXRlIHN0YXRlIHJlbGF0aXZlIGFjdGlvbnMgKVxuXHQgKiBAcmV0dXJucyB7e318Kn1cblx0ICovXG5cdGdldCBuZXh0U3RhdGUoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX2NoYW5nZXNTVyAmJiB7IC4uLnRoaXMuc3RhdGUsIC4uLnRoaXMuX2NoYW5nZXNTVyB9IHx8IHRoaXMuc3RhdGU7XG5cdH1cblx0XG5cdF9hZnRlckNvbnN0cnVjdG9yKCkge1xuXHRcdGxldCBjZmcgICAgICAgICAgPSB0aGlzLl9jZmcsXG5cdFx0ICAgIF9zdGF0aWMgICAgICA9IHRoaXMuY29uc3RydWN0b3IsXG5cdFx0ICAgIHNuYXBzaG90ICAgICA9IHRoaXMucmVzdG9yZSh1bmRlZmluZWQsIHRydWUpLFxuXHRcdCAgICBpbml0aWFsU3RhdGUgPSB0aGlzLnN0YXRlLFxuXHRcdCAgICBpbml0aWFsRGF0YSAgPSB0aGlzLmRhdGEsXG5cdFx0ICAgIGFwcGxpZWQ7XG5cdFx0e1xuXHRcdFx0XG5cdFx0XHRpZiAoIGluaXRpYWxEYXRhIClcblx0XHRcdFx0dGhpcy5kYXRhID0gaW5pdGlhbERhdGE7XG5cdFx0XHRlbHNlIGlmICggX3N0YXRpYy5kYXRhICE9PSB1bmRlZmluZWQgKVxuXHRcdFx0XHR0aGlzLmRhdGEgPSB7IC4uLl9zdGF0aWMuZGF0YSB9O1xuXHRcdFx0ZWxzZSBpZiAoIGNmZy5oYXNPd25Qcm9wZXJ0eShcImRhdGFcIikgKVxuXHRcdFx0XHR0aGlzLmRhdGEgPSBjZmcuZGF0YTtcblx0XHRcdFxuXHRcdFx0aWYgKCBjZmcuaGFzT3duUHJvcGVydHkoXCJzdGF0ZVwiKSAmJiBjZmcuc3RhdGUgIT09IHVuZGVmaW5lZCApXG5cdFx0XHRcdGluaXRpYWxTdGF0ZSA9IHsgLi4uaW5pdGlhbFN0YXRlLCAuLi5jZmcuc3RhdGUgfTtcblx0XHRcdFxuXHRcdFx0aWYgKCB0aGlzLmRhdGEgPT09IHVuZGVmaW5lZCApIHtcblx0XHRcdFx0aWYgKCBpbml0aWFsU3RhdGUgfHwgdGhpcy5fdXNlLmxlbmd0aCApIHsvLyBzeW5jIGFwcGx5XG5cdFx0XHRcdFx0dGhpcy5fY2hhbmdlc1NXID0ge1xuXHRcdFx0XHRcdFx0Li4udGhpcy5fY2hhbmdlc1NXLFxuXHRcdFx0XHRcdFx0Li4uKGluaXRpYWxTdGF0ZSB8fCB7fSksXG5cdFx0XHRcdFx0XHQuLi50aGlzLiRzY29wZS5tYXAodGhpcywgdGhpcy5fdXNlKVxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSAgICAgID0ge307XG5cdFx0XHRcdFx0aWYgKCB0aGlzLnNob3VsZEFwcGx5KHRoaXMuX2NoYW5nZXNTVykgJiYgdGhpcy5kYXRhID09PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRcdFx0XHR0aGlzLmRhdGEgICAgICAgPSB0aGlzLmFwcGx5KHRoaXMuZGF0YSwgdGhpcy5fY2hhbmdlc1NXLCB0aGlzLl9jaGFuZ2VzU1cpO1xuXHRcdFx0XHRcdFx0YXBwbGllZCAgICAgICAgID0gdHJ1ZTtcblx0XHRcdFx0XHRcdHRoaXMuc3RhdGUgICAgICA9IHRoaXMuX2NoYW5nZXNTVztcblx0XHRcdFx0XHRcdHRoaXMuX2NoYW5nZXNTVyA9IHt9O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdGFwcGxpZWQgICAgICAgICA9IHRydWU7XG5cdFx0XHRcdHRoaXMuc3RhdGUgICAgICA9IHsvLyBhc3N1bWUgdGhpcyBzdGF0ZSBpcyBzeW5jIHdpdGggaW5pdGlhbCBkYXRhXG5cdFx0XHRcdFx0Li4udGhpcy5fY2hhbmdlc1NXLFxuXHRcdFx0XHRcdC4uLihpbml0aWFsU3RhdGUgfHwge30pLFxuXHRcdFx0XHRcdC4uLnRoaXMuJHNjb3BlLm1hcCh0aGlzLCB0aGlzLl91c2UpXG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5fY2hhbmdlc1NXID0ge307XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmICggKHRoaXMuZGF0YSAhPT0gdW5kZWZpbmVkIHx8IGFwcGxpZWQpICYmICF0aGlzLl9fbG9ja3MuYWxsICkge1xuXHRcdFx0dGhpcy5fc3RhYmxlID0gdHJ1ZTtcblx0XHRcdHRoaXMuX3JldisrO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdHRoaXMuX3N0YWJsZSA9IGZhbHNlO1xuXHRcdFx0aWYgKCAhX3N0YXRpYy5tYW5hZ2VkICYmICF0aGlzLnN0YXRlICYmICghdGhpcy5fdXNlIHx8ICF0aGlzLl91c2UubGVuZ3RoKSApIHtcblx0XHRcdFx0Y29uc29sZS53YXJuKFwiUmVTY29wZSBzdG9yZSAnXCIsIHRoaXMubmFtZSwgXCInIGhhdmUgbm8gaW5pdGlhbCBkYXRhLCBzdGF0ZSBvciB1c2UuIEl0IGNhbid0IHN0YWJpbGl6ZS4uLlwiKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0IXRoaXMuX3N0YWJsZSAmJiB0aGlzLmVtaXQoJ3Vuc3RhYmxlJywgdGhpcy5zdGF0ZSk7XG5cdFx0XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBPdmVycmlkYWJsZSBtZXRob2QgdG8ga25vdyBpZiBhIGRhdGEgY2hhbmdlIHNob3VsZCBiZSBwcm9wYWcgdG8gdGhlIGxpc3RlbmluZ1xuXHQgKiBzdG9yZXMgJiBjb21wb25lbnRzXG5cdCAqL1xuXHRzaG91bGRQcm9wYWcoIG5EYXRhcyApIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXHRcblx0aGFzRGF0YUNoYW5nZSggbkRhdGFzICkge1xuXHRcdHZhciBfc3RhdGljID0gdGhpcy5jb25zdHJ1Y3Rvciwgcixcblx0XHQgICAgY0RhdGFzICA9IHRoaXMuZGF0YTtcblx0XHRyICAgICAgICAgICA9ICFjRGF0YXMgJiYgbkRhdGFzIHx8IGNEYXRhcyAhPT0gbkRhdGFzO1xuXHRcdCFyICYmIGNEYXRhcyAmJiBPYmplY3Qua2V5cyhjRGF0YXMpLmZvckVhY2goXG5cdFx0XHQoIGtleSApID0+IHtcblx0XHRcdFx0ciA9IHIgfHwgKG5EYXRhc1xuXHRcdFx0XHQgICAgICAgICAgPyBjRGF0YXNba2V5XSAhPT0gbkRhdGFzW2tleV1cblx0XHRcdFx0ICAgICAgICAgIDogY0RhdGFzICYmIGNEYXRhc1trZXldKVxuXHRcdFx0fVxuXHRcdCk7XG5cdFx0IXIgJiYgbkRhdGFzICYmIE9iamVjdC5rZXlzKG5EYXRhcykuZm9yRWFjaChcblx0XHRcdCgga2V5ICkgPT4ge1xuXHRcdFx0XHRyID0gciB8fCAobkRhdGFzXG5cdFx0XHRcdCAgICAgICAgICA/IGNEYXRhc1trZXldICE9PSBuRGF0YXNba2V5XVxuXHRcdFx0XHQgICAgICAgICAgOiBjRGF0YXMgJiYgY0RhdGFzW2tleV0pXG5cdFx0XHR9XG5cdFx0KTtcblx0XHRyZXR1cm4gcjtcblx0fVxuXHRcblx0LyoqXG5cdCAqIE92ZXJyaWRhYmxlIG1ldGhvZCB0byBrbm93IGlmIGEgc3RhdGUgY2hhbmdlIHNob3VsZCBiZSBhcHBsaWVkXG5cdCAqL1xuXHRzaG91bGRBcHBseSggc3RhdGUgPSB0aGlzLnN0YXRlICkge1xuXHRcdHZhciBfc3RhdGljID0gdGhpcy5jb25zdHJ1Y3Rvcjtcblx0XHRcblx0XHRyZXR1cm4gKFxuXHRcdFx0ISF0aGlzLmlzQ29tcGxldGUoc3RhdGUpXG5cdFx0KSAmJiAoaXMuYXJyYXkoX3N0YXRpYy5mb2xsb3cpXG5cdFx0ICAgICAgPyBfc3RhdGljLmZvbGxvd1xuXHRcdCAgICAgICAgICAgICAgIC5yZWR1Y2UoKCByLCBpICkgPT4gKHIgfHwgc3RhdGUgJiYgc3RhdGVbaV0pLCBmYWxzZSlcblx0XHQgICAgICA6IF9zdGF0aWMuZm9sbG93XG5cdFx0ICAgICAgICA/IE9iamVjdC5rZXlzKF9zdGF0aWMuZm9sbG93KVxuXHRcdCAgICAgICAgICAgICAgICAucmVkdWNlKCggciwgaSApID0+IChcblx0XHRcdCAgICAgICAgICAgICAgICByXG5cdFx0XHQgICAgICAgICAgICAgICAgfHwgc3RhdGUgJiYgaXMuZm4oX3N0YXRpYy5mb2xsb3dbaV0pICYmIF9zdGF0aWMuZm9sbG93W2ldLmNhbGwodGhpcywgc3RhdGVbaV0pXG5cdFx0XHQgICAgICAgICAgICAgICAgfHwgX3N0YXRpYy5mb2xsb3dbaV0gJiYgc3RhdGVbaV0gIT09IHRoaXMuc3RhdGVbaV1cblx0XHQgICAgICAgICAgICAgICAgKSwgZmFsc2UpIDogdHJ1ZVxuXHRcdCk7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBPdmVycmlkYWJsZSBhcHBsaWVyIC8gcmVtYXBwZXJcblx0ICogSWYgc3RhdGUgb3IgbGFzdFB1YmxpY1N0YXRlIGFyZSBzaW1wbGUgaGFzaCBtYXBzIGFwcGx5IHdpbGwgcmV0dXJuIHsuLi5kYXRhLFxuXHQgKiAuLi5zdGF0ZX0gaWYgbm90IGl0IHdpbGwgcmV0dXJuIHRoZSBsYXN0IHByaXZhdGUgc3RhdGVcblx0ICogQHBhcmFtIGRhdGFcblx0ICogQHBhcmFtIHN0YXRlXG5cdCAqIEByZXR1cm5zIHsqfVxuXHQgKi9cblx0YXBwbHkoIGRhdGEsIHN0YXRlLCBjaGFuZ2VzICkge1xuXHRcdHN0YXRlID0gc3RhdGUgfHwgdGhpcy5zdGF0ZTtcblx0XHRcblx0XHRpZiAoIHRoaXMucmVmaW5lIClcblx0XHRcdHJldHVybiB0aGlzLnJlZmluZSguLi5hcmd1bWVudHMpO1xuXHRcdFxuXHRcdGlmICggIWRhdGEgfHwgZGF0YS5fX3Byb3RvX18gIT09IG9ialByb3RvIHx8IHN0YXRlLl9fcHJvdG9fXyAhPT0gb2JqUHJvdG8gKVxuXHRcdFx0cmV0dXJuIHN0YXRlO1xuXHRcdGVsc2Vcblx0XHRcdHJldHVybiB7IC4uLmRhdGEsIC4uLnN0YXRlIH1cblx0fVxuXHRcblx0LyoqXG5cdCAqIERlYm91bmNlIHRoaXMgc3RvcmUgcHJvcGFnYXRpb24gKCAmIHJlZHVjaW5nIClcblx0ICogQHBhcmFtIGNiXG5cdCAqL1xuXHRzdGFiaWxpemUoIGNiICkge1xuXHRcdGNiICYmIHRoaXMub25jZSgnc3RhYmxlJywgY2IpO1xuXHRcdHRoaXMuX3N0YWJsZSAmJiB0aGlzLmVtaXQoJ3Vuc3RhYmxlJywgdGhpcy5zdGF0ZSwgdGhpcy5kYXRhKTtcblx0XHRcblx0XHR0aGlzLl9zdGFibGUgPSBmYWxzZTtcblx0XHRcblx0XHRpZiAoIHRoaXMuX3N0YWJpbGl6ZXIgKVxuXHRcdFx0cmV0dXJuO1xuXHRcdFxuXHRcdHRoaXMuX3N0YWJpbGl6ZXIgPSBUYXNrU2VxdWVuY2VyLnB1c2hUYXNrKHRoaXMsICdwdXNoU3RhdGUnKTtcblx0fVxuXHRcblx0cmV0cmlldmUoIHBhdGgsIGkgPSAwLCBvYmogPSB0aGlzLmRhdGEgKSB7XG5cdFx0cGF0aCA9IGlzLnN0cmluZyhwYXRoKSA/IHBhdGguc3BsaXQoJy4nKSA6IHBhdGg7XG5cdFx0cmV0dXJuICFvYmogfHwgIXBhdGggfHwgIXBhdGgubGVuZ3RoXG5cdFx0ICAgICAgID8gb2JqXG5cdFx0ICAgICAgIDogcGF0aC5sZW5ndGggPT0gaSArIDFcblx0XHQgICAgICAgICA/IG9ialtwYXRoW2ldXVxuXHRcdCAgICAgICAgIDogdGhpcy5yZXRyaWV2ZShwYXRoLCBpICsgMSwgb2JqW3BhdGhbaV1dKTtcblx0fVxuXHRcblx0ZGlzcGF0Y2goIGFjdGlvbiwgLi4uYXJneiApIHtcblx0XHR0aGlzLnNjb3BlT2JqLmRpc3BhdGNoKGFjdGlvbiwgLi4uYXJneik7XG5cdH1cblx0XG5cdHRyaWdnZXIoIGFjdGlvbiwgLi4uYXJneiApIHtcblx0XHRsZXQgeyBhY3Rpb25zIH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXHRcdGlmICggYWN0aW9ucyAmJiBhY3Rpb25zW2FjdGlvbl0gKSB7XG5cdFx0XHRsZXQgbnMgPSBhY3Rpb25zW2FjdGlvbl0uY2FsbCh0aGlzLCAuLi5hcmd6KTtcblx0XHRcdG5zICYmIHRoaXMuc2V0U3RhdGUobnMpO1xuXHRcdH1cblx0fVxuXHRcblx0LyoqXG5cdCAqIFB1bGwgc3RvcmVzIGluIHRoZSBwcml2YXRlIHN0YXRlXG5cdCAqIEBwYXJhbSBzdG9yZXMgIHtBcnJheX0gKHBhc3NlZCB0byBTdG9yZTo6bWFwKSBFeCA6IFtcInNlc3Npb25cIixcblx0ICogICAgIFwib3RoZXJOYW1lZFN0b3JlOmtleVwiLCBvdGhlclN0b3JlLmFzKFwib3RoZXJLZXlcIildXG5cdCAqL1xuXHRwdWxsKCBzdG9yZXMsIGRvV2FpdCwgb3JpZ2luICkge1xuXHRcdGxldCBpbml0aWFsT3V0cHV0cyA9IHRoaXMuc2NvcGVPYmoubWFwKHRoaXMsIHN0b3Jlcyk7XG5cdFx0aWYgKCBkb1dhaXQgKSB7XG5cdFx0XHR0aGlzLndhaXQoKTtcblx0XHRcdHN0b3Jlcy5mb3JFYWNoKCggcyApID0+IHRoaXMuc2NvcGVbc10gJiYgdGhpcy53YWl0KHRoaXMuc2NvcGVbc10pKTtcblx0XHRcdHRoaXMucmVsZWFzZSgpO1xuXHRcdH1cblx0XHRyZXR1cm4gaW5pdGlhbE91dHB1dHM7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBTZXQgJiBQdXNoIHRoZSByZXN1bHQgZGF0YSB0byBmb2xsb3dlcnMgaWYgc3RhYmxlXG5cdCAqIEBwYXJhbSBjYlxuXHQgKi9cblx0cHVzaCggZGF0YSwgZm9yY2UsIGNiICkge1xuXHRcdGNiICAgID0gZm9yY2UgPT09IHRydWUgPyBjYiA6IGZvcmNlO1xuXHRcdGZvcmNlID0gZm9yY2UgPT09IHRydWU7XG5cdFx0aWYgKCAhZm9yY2UgJiZcblx0XHRcdChcblx0XHRcdFx0IXRoaXMuaGFzRGF0YUNoYW5nZShkYXRhKVxuXHRcdFx0KVxuXHRcdCkge1xuXHRcdFx0Y2IgJiYgY2IoKTtcblx0XHRcdGlmICggIXRoaXMuX19sb2Nrcy5hbGwgKSB7XG5cdFx0XHRcdGxldCBzdGFibGUgICA9IHRoaXMuX3N0YWJsZTtcblx0XHRcdFx0dGhpcy5fc3RhYmxlID0gdHJ1ZTtcblx0XHRcdFx0IXN0YWJsZSAmJiB0aGlzLmVtaXQoJ3N0YWJsZScsIHRoaXMuc3RhdGUsIHRoaXMuZGF0YSk7XG5cdFx0XHRcdHRoaXMuX3N0YWJpbGl6ZXIgPSBudWxsO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRcblx0XHR0aGlzLmRhdGEgPSBkYXRhO1xuXHRcdHRoaXMud2FpdCgpO1xuXHRcdHRoaXMucmVsZWFzZShjYik7XG5cdFx0XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBDYWxsIHRoZSBhcHBseSBmbiB1c2luZyB0aGUgY3VycmVudCBhY2N1bXVsYXRlZCBzdGF0ZSB1cGRhdGUgdGhlbiwgcHVzaCB0aGVcblx0ICogcmVzdWx0aW5nIGRhdGEgaWYgc3RhYmxlXG5cdCAqIEBwYXJhbSBmb3JjZVxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cblx0ICovXG5cdHB1c2hTdGF0ZSggZm9yY2UgKSB7XG5cdFx0XG5cdFx0aWYgKCAhZm9yY2UgJiYgIXRoaXMuX2NoYW5nZXNTVyAmJiB0aGlzLmRhdGEgKVxuXHRcdFx0cmV0dXJuO1xuXHRcdFxuXHRcdHZhciBuZXh0U3RhdGUgPSB0aGlzLl9uZXh0U3RhdGUgfHwgeyAuLi50aGlzLnN0YXRlLCAuLi4odGhpcy5fY2hhbmdlc1NXIHx8IHt9KSB9LFxuXHRcdCAgICBuZXh0RGF0YSAgPSB0aGlzLmFwcGx5KHRoaXMuZGF0YSwgbmV4dFN0YXRlLCB0aGlzLl9jaGFuZ2VzU1cpO1xuXHRcdFxuXHRcdHRoaXMuX3N0YWJpbGl6ZXIgPSBudWxsO1xuXHRcdHRoaXMuc3RhdGUgICAgICAgPSBuZXh0U3RhdGU7XG5cdFx0dGhpcy5fY2hhbmdlc1NXICA9IG51bGw7XG5cdFx0XG5cdFx0aWYgKCAhZm9yY2UgJiZcblx0XHRcdChcblx0XHRcdFx0IXRoaXMuaGFzRGF0YUNoYW5nZShuZXh0RGF0YSlcblx0XHRcdClcblx0XHQpIHtcblx0XHRcdGlmICggIXRoaXMuX19sb2Nrcy5hbGwgKSB7XG5cdFx0XHRcdGxldCBzdGFibGUgICA9IHRoaXMuX3N0YWJsZTtcblx0XHRcdFx0dGhpcy5fc3RhYmxlID0gdHJ1ZTtcblx0XHRcdFx0IXN0YWJsZSAmJiB0aGlzLmVtaXQoJ3N0YWJsZScsIHRoaXMuc3RhdGUsIHRoaXMuZGF0YSk7XG5cdFx0XHRcdHRoaXMuX3N0YWJpbGl6ZXIgPSBudWxsO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRcblx0XHR0aGlzLmRhdGEgPSBuZXh0RGF0YTtcblx0XHR0aGlzLndhaXQoKTtcblx0XHR0aGlzLnJlbGVhc2UoKTtcblx0XHRcblx0fVxuXHRcblx0LyoqXG5cdCAqIEFkZCAncFN0YXRlJyB0byB0aGUgY3VycmVudCBhY2N1bXVsYXRlZCBzdGF0ZSB1cGRhdGVzXG5cdCAqICYgd2FpdCBzb3VyY2Ugc3RvcmVzIHN0YWJpbGl6YXRpb24gYmVmb3JlIHB1c2hpbmcgdGhlc2Ugc3RhdGUgdXBkYXRlc1xuXHQgKiBAcGFyYW0gcFN0YXRlXG5cdCAqIEBwYXJhbSBjYlxuXHQgKi9cblx0c2V0U3RhdGUoIHBTdGF0ZSwgY2IsIHN5bmMgKSB7XG5cdFx0dmFyIGkgICAgICAgPSAwLCBjaGFuZ2UsXG5cdFx0ICAgIGNoYW5nZXMgPSB0aGlzLl9jaGFuZ2VzU1cgPSB0aGlzLl9jaGFuZ2VzU1cgfHwge307XG5cdFx0Zm9yICggdmFyIGsgaW4gcFN0YXRlIClcblx0XHRcdGlmICggIXRoaXMuc3RhdGVcblx0XHRcdFx0fHwgY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eShrKS8vIHRvZG9cblx0XHRcdFx0JiYgKFxuXHRcdFx0XHRcdHBTdGF0ZVtrXSAhPT0gY2hhbmdlc1trXVxuXHRcdFx0XHQpIHx8IHBTdGF0ZS5oYXNPd25Qcm9wZXJ0eShrKVxuXHRcdFx0XHQmJiAoXG5cdFx0XHRcdFx0cFN0YXRlW2tdICE9PSB0aGlzLnN0YXRlW2tdXG5cdFx0XHRcdFx0fHxcblx0XHRcdFx0XHQodGhpcy5zdGF0ZVtrXSAmJiBwU3RhdGVba10gJiYgKHBTdGF0ZVtrXS5fcmV2ICE9IHRoaXMuX3JldnNba10pKS8vIHJldi9oYXNoIHVwZGF0ZVxuXHRcdFx0XHQpICkge1xuXHRcdFx0XHRjaGFuZ2UgICAgICAgID0gdHJ1ZTtcblx0XHRcdFx0dGhpcy5fcmV2c1trXSA9IHBTdGF0ZVtrXSAmJiBwU3RhdGVba10uX3JldiB8fCB0cnVlO1xuXHRcdFx0XHRjaGFuZ2VzW2tdICAgID0gcFN0YXRlW2tdO1xuXHRcdFx0fVxuXHRcdFxuXHRcdHRoaXMuX25leHRTdGF0ZSA9IHsgLi4udGhpcy5zdGF0ZSwgLi4uY2hhbmdlcyB9O1xuXHRcdGlmICggIXRoaXMuc2hvdWxkQXBwbHkodGhpcy5fbmV4dFN0YXRlKSApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0XG5cdFx0aWYgKCBzeW5jICkge1xuXHRcdFx0dGhpcy5wdXNoU3RhdGUoKTtcblx0XHRcdGNiICYmIGNiKCk7XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0aWYgKCBjaGFuZ2UgKSB7XG5cdFx0XHRcdHRoaXMuc3RhYmlsaXplKGNiKTtcblx0XHRcdH1cblx0XHRcdGVsc2UgY2IgJiYgY2IoKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBVcGRhdGUgdGhlIGN1cnJlbnQgc3RhdGUgJiBwdXNoIGl0XG5cdCAqIEBwYXJhbSBwU3RhdGVcblx0ICogQHBhcmFtIGNiXG5cdCAqL1xuXHRzZXRTdGF0ZVN5bmMoIHBTdGF0ZSApIHtcblx0XHR2YXIgaSAgICAgICA9IDAsIGNoYW5nZSxcblx0XHQgICAgY2hhbmdlcyA9IHRoaXMuX2NoYW5nZXNTVyA9IHRoaXMuX2NoYW5nZXNTVyB8fCB7fTtcblx0XHRmb3IgKCB2YXIgayBpbiBwU3RhdGUgKVxuXHRcdFx0aWYgKCAhdGhpcy5zdGF0ZSB8fCBwU3RhdGUuaGFzT3duUHJvcGVydHkoaylcblx0XHRcdFx0JiYgKFxuXHRcdFx0XHRcdHBTdGF0ZVtrXSAhPSB0aGlzLnN0YXRlW2tdXG5cdFx0XHRcdFx0fHxcblx0XHRcdFx0XHQodGhpcy5zdGF0ZVtrXSAmJiBwU3RhdGVba10gJiYgKHBTdGF0ZVtrXS5fcmV2ICE9IHRoaXMuX3JldnNba10pKS8vIHJldi9oYXNoIHVwZGF0ZVxuXHRcdFx0XHQpICkge1xuXHRcdFx0XHRjaGFuZ2UgICAgICAgID0gdHJ1ZTtcblx0XHRcdFx0dGhpcy5fcmV2c1trXSA9IHBTdGF0ZVtrXSAmJiBwU3RhdGVba10uX3JldiB8fCB0cnVlO1xuXHRcdFx0XHRjaGFuZ2VzW2tdICAgID0gcFN0YXRlW2tdO1xuXHRcdFx0fVxuXHRcdHRoaXMuc2hvdWxkQXBwbHkoeyAuLi4odGhpcy5zdGF0ZSB8fCB7fSksIC4uLmNoYW5nZXMgfSkgJiYgdGhpcy5wdXNoU3RhdGUoKTtcblx0XHRyZXR1cm4gdGhpcy5kYXRhO1xuXHR9XG5cdFxuXHQvKipcblx0ICogZ2V0IGEgc3RvcmUta2V5IHBhaXIgZm9yIFN0b3JlOjptYXBcblx0ICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcblx0ICogQHJldHVybnMge3tzdG9yZTogU3RvcmUsIG5hbWU6ICp9fVxuXHQgKi9cblx0YXMoIG5hbWUgKSB7XG5cdFx0cmV0dXJuIHsgc3RvcmU6IHRoaXMsIG5hbWUgfTtcblx0fVxuXHRcblx0b24oIGxpc3RzICkge1xuXHRcdGlmICggIWlzLnN0cmluZyhsaXN0cykgJiYgbGlzdHMgKVxuXHRcdFx0T2JqZWN0LmtleXMobGlzdHMpLmZvckVhY2goayA9PiBzdXBlci5vbihrLCBsaXN0c1trXSkpO1xuXHRcdGVsc2Ugc3VwZXIub24oLi4uYXJndW1lbnRzKTtcblx0fVxuXHRcblx0cmVtb3ZlTGlzdGVuZXIoIGxpc3RzICkge1xuXHRcdGlmICggIWlzLnN0cmluZyhsaXN0cykgJiYgbGlzdHMgKVxuXHRcdFx0T2JqZWN0LmtleXMobGlzdHMpLmZvckVhY2goayA9PiBzdXBlci5yZW1vdmVMaXN0ZW5lcihrLCBsaXN0c1trXSkpO1xuXHRcdGVsc2Ugc3VwZXIucmVtb3ZlTGlzdGVuZXIoLi4uYXJndW1lbnRzKTtcblx0fVxuXHRcblx0LyoqXG5cdCAqIGlzIGNvbXBsZXRlIChhbGwgcmVxdWllcmVkIGtleXMgYXJlIGhlcmUpXG5cdCAqIEByZXR1cm5zIGJvb2xcblx0ICovXG5cdGlzQ29tcGxldGUoIHN0YXRlID0gdGhpcy5zdGF0ZSApIHtcblx0XHR2YXIgX3N0YXRpYyA9IHRoaXMuY29uc3RydWN0b3I7XG5cdFx0cmV0dXJuIChcblx0XHRcdCF0aGlzLl9yZXF1aXJlXG5cdFx0XHR8fCAhdGhpcy5fcmVxdWlyZS5sZW5ndGhcblx0XHRcdHx8IHN0YXRlICYmIHRoaXMuX3JlcXVpcmUucmVkdWNlKFxuXHRcdFx0XHQoIHIsIGtleSApID0+IChyICYmIHN0YXRlW2tleV0pLFxuXHRcdFx0XHR0cnVlXG5cdFx0XHQpXG5cdFx0KTtcblx0fVxuXHRcblx0LyoqXG5cdCAqIGlzIHN0YWJsZVxuXHQgKiBAcmV0dXJucyBib29sXG5cdCAqL1xuXHRpc1N0YWJsZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5fc3RhYmxlO1xuXHR9XG5cdFxuXHQvKipcblx0ICogU2VyaWFsaXplIHN0YXRlICYgZGF0YSB3aXRoIHNvdXJjZXMgcmVmc1xuXHQgKiBAcmV0dXJucyBib29sXG5cdCAqL1xuXHRzZXJpYWxpemUoIGNmZyA9IHt9LCBvdXRwdXQgPSB7fSApIHtcblx0XHRsZXQgc0lkICAgICAgICAgPSBjZmcucGFyZW50QWxpYXMgfHwgdGhpcy5zY29wZU9iai5faWQsXG5cdFx0ICAgIHJlZnNDb3VudCAgID0gMCxcblx0XHQgICAgcmVmcyAgICAgICAgPVxuXHRcdFx0ICAgICFjZmcubm9yZWZzICYmIGlzLmFycmF5KHRoaXMuX3VzZSkgJiYgdGhpcy5fdXNlLnJlZHVjZShcblx0XHRcdCAgICAoIG1hcCwga2V5ICkgPT4ge1xuXHRcdFx0XHQgICAgbGV0IHJlZiAgID0gdGhpcy4kc2NvcGUucGFyc2VSZWYoa2V5KSxcblx0XHRcdFx0ICAgICAgICBzdG9yZSA9IHRoaXMuJHN0b3Jlc1tyZWYuc3RvcmVJZF07XG5cdFx0XHRcdCAgICBpZiAoIHN0b3JlICYmIGlzLnJzU3RvcmUoc3RvcmUpICYmICFzdG9yZS5zY29wZU9iai5fLmlzTG9jYWxJZCApXG5cdFx0XHRcdFx0ICAgIHJlZnNDb3VudCsrLCBtYXBbcmVmLmFsaWFzXSA9IHJlZi5wYXRoO1xuXHRcdFx0XHRcblx0XHRcdFx0ICAgIHJldHVybiBtYXA7XG5cdFx0XHQgICAgfSwge31cblx0XHRcdCAgICApLFxuXHRcdCAgICBzdGF0ZUtleXMgICA9IE9iamVjdC5rZXlzKHRoaXMuc3RhdGUpLFxuXHRcdCAgICBzdGF0ZVJlZnMgICA9IHN0YXRlS2V5cy5tYXAoayA9PiB0aGlzLnN0YXRlW2tdKSxcblx0XHQgICAgaW5SZWZzQ291bnQgPSAwLFxuXHRcdCAgICBpblJlZnMgICAgICA9XG5cdFx0XHQgICAgIWNmZy5ub3JlZnMgJiYgKE9iamVjdC5rZXlzKHRoaXMuZGF0YSkucmVkdWNlKFxuXHRcdFx0ICAgICggbWFwLCBrZXkgKSA9PiB7XG5cdFx0XHRcdCAgICBsZXQgcmVmID0gc3RhdGVSZWZzLmluZGV4T2YodGhpcy5kYXRhW2tleV0pXG5cdFx0XHRcdCAgICBpZiAoIHJlZiAhPSAtMSApXG5cdFx0XHRcdFx0ICAgIGluUmVmc0NvdW50KyssIG1hcFtrZXldID0gc3RhdGVLZXlzW3JlZl07XG5cdFx0XHRcdCAgICByZXR1cm4gbWFwO1xuXHRcdFx0ICAgIH0sIHt9XG5cdFx0XHQgICAgKSksXG5cdFx0ICAgIHNuYXAgICAgICAgID0ge1xuXHRcdFx0ICAgIHN0YXRlOiB0aGlzLnN0YXRlICYmXG5cdFx0XHRcdCAgICAoXG5cdFx0XHRcdFx0ICAgIGNmZy5ub3JlZnNcblx0XHRcdFx0XHQgICAgPyB7IC4uLnRoaXMuc3RhdGUgfVxuXHRcdFx0XHRcdCAgICA6IE9iamVjdC5rZXlzKHRoaXMuc3RhdGUpLnJlZHVjZSgoIGgsIGsgKSA9PiAoIXJlZnNba10gJiYgKGhba10gPSB0aGlzLnN0YXRlW2tdKSwgaCksIHt9KVxuXHRcdFx0XHQgICAgKSxcblx0XHRcdCAgICBkYXRhIDogKFxuXHRcdFx0XHRcdCAgICB0aGlzLmRhdGEgJiZcblx0XHRcdFx0XHQgICAgdGhpcy5kYXRhLl9fcHJvdG9fXyA9PT0gb2JqUHJvdG8gP1xuXHRcdFx0XHRcdCAgICBpblJlZnMgJiYgT2JqZWN0LmtleXModGhpcy5kYXRhKVxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgLnJlZHVjZShcblx0XHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgKCBoLCBrICkgPT4gKCFpblJlZnNba10gJiYgKGhba10gPSB0aGlzLmRhdGFba10pLCBoKSwge30pXG5cdFx0XHRcdFx0XHQgICAgfHwgeyAuLi50aGlzLmRhdGEgfVxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XG5cdFx0XHRcdFx0ICAgIChpcy5ib29sKHRoaXMuZGF0YSlcblx0XHRcdFx0XHRcdCAgICB8fCBpcy5udW1iZXIodGhpcy5kYXRhKVxuXHRcdFx0XHRcdFx0ICAgIHx8IGlzLnN0cmluZyh0aGlzLmRhdGEpKSAmJiB0aGlzLmRhdGFcblx0XHRcdFx0ICAgIClcblx0XHRcdFx0ICAgIHx8IHVuZGVmaW5lZFxuXHRcdFx0XG5cdFx0ICAgIH07XG5cdFx0XG5cdFx0cmVmcyAmJiByZWZzQ291bnQgJiYgKHNuYXAucmVmcyA9IHJlZnMpO1xuXHRcdGluUmVmcyAmJiBpblJlZnNDb3VudCAmJiAoXG5cdFx0XHRzbmFwLmluUmVmcyA9IHN0YXRlS2V5cy5sZW5ndGggPT09IGluUmVmc0NvdW50XG5cdFx0XHQgICAgICAgICAgICAgID8gdHJ1ZVxuXHRcdFx0ICAgICAgICAgICAgICA6IGluUmVmcyk7XG5cdFx0XG5cdFx0XG5cdFx0a2V5V2Fsa25TZXQoXG5cdFx0XHRvdXRwdXQsXG5cdFx0XHQoc0lkICsgJy8nICsgdGhpcy5uYW1lKSxcblx0XHRcdHNuYXBcblx0XHQpO1xuXHRcdHJldHVybiBvdXRwdXQ7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiByZXN0b3JlIHN0YXRlICYgZGF0YVxuXHQgKiBAcmV0dXJucyBib29sXG5cdCAqL1xuXHRyZXN0b3JlKCBzbmFwc2hvdCwgaW1tZWRpYXRlICkge1xuXHRcdHNuYXBzaG90ID0gc25hcHNob3Rcblx0XHRcdCYmIGtleVdhbGtuR2V0KHNuYXBzaG90LCB0aGlzLnNjb3BlT2JqLl9pZCArICcvJyArIHRoaXMubmFtZSlcblx0XHRcdHx8IHRoaXMuJHNjb3BlLnRha2VTbmFwc2hvdEJ5S2V5KHRoaXMuc2NvcGVPYmouX2lkICsgJy8nICsgdGhpcy5uYW1lKTtcblx0XHRcblx0XHRpZiAoICFzbmFwc2hvdCApXG5cdFx0XHRyZXR1cm47XG5cdFx0XG5cdFx0aWYgKCBzbmFwc2hvdCApIHtcblx0XHRcdGlmICggIXRoaXMuaXNTdGFibGUoKSAmJiAhaW1tZWRpYXRlIClcblx0XHRcdFx0dGhpcy50aGVuKCgpID0+IHJlc3RvcmUoc25hcHNob3QpKVxuXHRcdFx0bGV0IHNuYXA7XG5cdFx0XHR0aGlzLnN0YXRlID0geyAuLi5zbmFwc2hvdC5zdGF0ZSB9O1xuXHRcdFx0c25hcHNob3QucmVmcyAmJiBPYmplY3Qua2V5cyhzbmFwc2hvdC5yZWZzKS5mb3JFYWNoKFxuXHRcdFx0XHQoIGtleSApID0+IHsvL3RvZG9cblx0XHRcdFx0XHR0aGlzLnN0YXRlW2tleV0gPSB0aGlzLiRzY29wZS5yZXRyaWV2ZShzbmFwc2hvdC5yZWZzW2tleV0pO1xuXHRcdFx0XHR9XG5cdFx0XHQpXG5cdFx0XHRcblx0XHRcdFxuXHRcdFx0aWYgKCBzbmFwc2hvdC5pblJlZnMgPT09IHRydWUgKVxuXHRcdFx0XHR0aGlzLmRhdGEgPSB0aGlzLnN0YXRlO1xuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdHRoaXMuZGF0YSA9IHNuYXBzaG90LmRhdGE7XG5cdFx0XHRcdHNuYXBzaG90LmluUmVmcyAmJiBPYmplY3Qua2V5cyhzbmFwc2hvdC5pblJlZnMpLmZvckVhY2goXG5cdFx0XHRcdFx0KCBrZXkgKSA9PiB7Ly90b2RvXG5cdFx0XHRcdFx0XHR0aGlzLmRhdGFba2V5XSA9IHRoaXMuc3RhdGVbc25hcHNob3QuaW5SZWZzW2tleV1dO1xuXHRcdFx0XHRcdFx0Ly9lbHNlXG5cdFx0XHRcdFx0XHQvLyAgICBjb25zb2xlLndhcm4oJ25vdCBmb3VuZCA6ICcsIGtleSwgc25hcCAmJiBzbmFwLnJlZnNbIGtleSBdKVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0KVxuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHRcblx0XHR9XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBVbiBiaW5kIHRoaXMgc3RvcmUgb2ZmIHRoZSBnaXZlbiBjb21wb25lbnQta2V5XG5cdCAqIEBwYXJhbSBvYmpcblx0ICogQHBhcmFtIGtleVxuXHQgKiBAcmV0dXJucyB7QXJyYXkuPCo+fVxuXHQgKi9cblx0dW5CaW5kKCBvYmosIGtleSwgcGF0aCApIHtcblx0XHR2YXIgZm9sbG93ZXJzID0gdGhpcy5fZm9sbG93ZXJzLFxuXHRcdCAgICBpICAgICAgICAgPSBmb2xsb3dlcnMgJiYgZm9sbG93ZXJzLmxlbmd0aDtcblx0XHR3aGlsZSAoIGZvbGxvd2VycyAmJiBpLS0gKVxuXHRcdFx0aWYgKCBmb2xsb3dlcnNbaV1bMF0gPT09IG9iaiAmJiBmb2xsb3dlcnNbaV1bMV0gPT09IGtleSAmJiBmb2xsb3dlcnNbaV1bMl0gPT09IHBhdGggKVxuXHRcdFx0XHRyZXR1cm4gZm9sbG93ZXJzLnNwbGljZShpLCAxKTtcblx0fVxuXHRcblx0LyoqXG5cdCAqIEJpbmQgdGhpcyBzdG9yZSBjaGFuZ2VzIHRvIHRoZSBnaXZlbiBjb21wb25lbnQta2V5XG5cdCAqIEBwYXJhbSBvYmoge1JlYWN0LkNvbXBvbmVudHxTdG9yZXxmdW5jdGlvbilcblx0ICogQHBhcmFtIGtleSB7c3RyaW5nfSBvcHRpb25hbCBrZXkgd2hlcmUgdG8gbWFwIHRoZSBwdWJsaWMgc3RhdGVcblx0ICovXG5cdGJpbmQoIG9iaiwga2V5LCBzZXRJbml0aWFsID0gdHJ1ZSwgcGF0aCApIHtcblx0XHR0aGlzLl9mb2xsb3dlcnMucHVzaChbb2JqLCBrZXksIHBhdGhdKTtcblx0XHRpZiAoIHNldEluaXRpYWwgJiYgdGhpcy5kYXRhICYmIHRoaXMuX3N0YWJsZSApIHtcblx0XHRcdGxldCBkYXRhID0gcGF0aCA/IHRoaXMucmV0cmlldmUocGF0aCkgOiB0aGlzLmRhdGE7XG5cdFx0XHRpZiAoIHR5cGVvZiBvYmogIT0gXCJmdW5jdGlvblwiICkge1xuXHRcdFx0XHRpZiAoIGtleSApIG9iai5zZXRTdGF0ZSh7IFtrZXldOiBkYXRhIH0pO1xuXHRcdFx0XHRlbHNlIG9iai5zZXRTdGF0ZShkYXRhKTtcblx0XHRcdH1cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHRvYmooZGF0YSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdFxuXHQvKipcblx0ICogb25jZSgnc3RhYmxlJywgY2IpXG5cdCAqIEBwYXJhbSBvYmoge1JlYWN0LkNvbXBvbmVudHxTdG9yZXxmdW5jdGlvbilcblx0ICogQHBhcmFtIGtleSB7c3RyaW5nfSBvcHRpb25hbCBrZXkgd2hlcmUgdG8gbWFwIHRoZSBwdWJsaWMgc3RhdGVcblx0ICovXG5cdHRoZW4oIGNiICkge1xuXHRcdGlmICggdGhpcy5fc3RhYmxlIClcblx0XHRcdHJldHVybiBjYih0aGlzLmRhdGEpO1xuXHRcdHRoaXMub25jZSgnc3RhYmxlJywgZSA9PiBjYih0aGlzLmRhdGEpKTtcblx0fVxuXHRcblx0LyoqXG5cdCAqIEFkZCBhIGxvY2sgc28gdGhlIHN0b3JlIHdpbGwgbm90IHByb3BhZyBpdCBkYXRhIHVudGlsbCByZWxlYXNlKCkgaXMgY2FsbFxuXHQgKiBAcGFyYW0gcHJldmlvdXMge1N0b3JlfG51bWJlcnxBcnJheX0gQG9wdGlvbmFsIHdmIHRvIHdhaXQsIHJlbGVhc2VzIHRvIHdhaXQgb3Jcblx0ICogICAgIGFycmF5IG9mIHN0dWZmIHRvIHdhaXRcblx0ICogQHJldHVybnMge3RoaXN9XG5cdCAqL1xuXHR3YWl0KCBwcmV2aW91cyApIHtcblx0XHRpZiAoIHR5cGVvZiBwcmV2aW91cyA9PSBcIm51bWJlclwiIClcblx0XHRcdHJldHVybiB0aGlzLl9fbG9ja3MuYWxsICs9IHByZXZpb3VzO1xuXHRcdGlmICggaXMuYXJyYXkocHJldmlvdXMpIClcblx0XHRcdHJldHVybiBwcmV2aW91cy5tYXAodGhpcy53YWl0LmJpbmQodGhpcykpO1xuXHRcdFxuXHRcdHRoaXMuX3N0YWJsZSAmJiB0aGlzLmVtaXQoJ3Vuc3RhYmxlJywgdGhpcy5zdGF0ZSwgdGhpcy5kYXRhKTtcblx0XHR0aGlzLl9zdGFibGUgPSBmYWxzZTtcblx0XHR0aGlzLl9fbG9ja3MuYWxsKys7XG5cdFx0XG5cdFx0bGV0IHJlYXNvbiA9IGlzLnN0cmluZyhwcmV2aW91cykgPyBwcmV2aW91cyA6IG51bGw7XG5cdFx0aWYgKCByZWFzb24gKSB7XG5cdFx0XHR0aGlzLl9fbG9ja3NbcmVhc29uXSA9IHRoaXMuX19sb2Nrc1tyZWFzb25dIHx8IDA7XG5cdFx0XHR0aGlzLl9fbG9ja3NbcmVhc29uXSsrO1xuXHRcdH1cblx0XHRpZiAoIHByZXZpb3VzICYmIGlzLmZuKHByZXZpb3VzLnRoZW4pICkge1xuXHRcdFx0cHJldmlvdXMudGhlbih0aGlzLnJlbGVhc2UuYmluZCh0aGlzLCBudWxsKSk7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cdFxuXHQvKipcblx0ICogRGVjcmVhc2UgbG9ja3MgZm9yIHRoaXMgc3RvcmUsIGlmIGl0IHJlYWNoIDAgLFxuXHQgKiBpdCB3aWxsIGJlIHByb3BhZ2F0ZWQgdG8gdGhlIGZvbGxvd2Vycyxcblx0ICogdGhlbiwgYWxsIHN0dWZmIHBhc3NlZCB0byBcInRoZW5cIiBjYWxsIGJhY2sgd2lsbCBiZSBleGVjIC8gcmVsZWFzZWRcblx0ICogQHBhcmFtIGRlc3luY1xuXHQgKiBAcmV0dXJucyB7Kn1cblx0ICovXG5cdHJlbGVhc2UoIHJlYXNvbiwgY2IgKSB7XG5cdFx0dmFyIF9zdGF0aWMgPSB0aGlzLmNvbnN0cnVjdG9yLCBtZSA9IHRoaXM7XG5cdFx0bGV0IGkgICAgICAgPSAwLCB3YXNTdGFibGUgPSB0aGlzLl9zdGFibGU7XG5cdFx0XG5cdFx0aWYgKCBpcy5mbihyZWFzb24pICkge1xuXHRcdFx0Y2IgICAgID0gcmVhc29uO1xuXHRcdFx0cmVhc29uID0gbnVsbDtcblx0XHR9XG5cdFx0XG5cdFx0aWYgKCByZWFzb24gKSB7XG5cdFx0XHRpZiAoIHRoaXMuX19sb2Nrc1tyZWFzb25dID09IDAgKVxuXHRcdFx0XHRjb25zb2xlLmVycm9yKFwiUmVsZWFzZSBtb3JlIHRoYW4gbG9ja2luZyAhXCIsIHJlYXNvbik7XG5cdFx0XHR0aGlzLl9fbG9ja3NbcmVhc29uXSA9IHRoaXMuX19sb2Nrc1tyZWFzb25dIHx8IDA7XG5cdFx0XHR0aGlzLl9fbG9ja3NbcmVhc29uXS0tO1xuXHRcdH1cblx0XHRcblx0XHRpZiAoICFyZWFzb24gJiYgdGhpcy5fX2xvY2tzLmFsbCA9PSAwIClcblx0XHRcdGNvbnNvbGUuZXJyb3IoXCJSZWxlYXNlIG1vcmUgdGhhbiBsb2NraW5nICFcIik7XG5cdFx0XG5cdFx0aWYgKCAhLS10aGlzLl9fbG9ja3MuYWxsICYmIHRoaXMuaXNDb21wbGV0ZSgpICkge1xuXHRcdFx0bGV0IHByb3BhZyAgID0gdGhpcy5zaG91bGRQcm9wYWcodGhpcy5kYXRhKTtcblx0XHRcdHRoaXMuX3N0YWJsZSA9IHRydWU7XG5cdFx0XHRwcm9wYWcgJiYgdGhpcy5fcmV2Kys7Ly9cblx0XHRcdGlmICggcHJvcGFnICYmIHRoaXMuX2ZvbGxvd2Vycy5sZW5ndGggKVxuXHRcdFx0XHR0aGlzLl9mb2xsb3dlcnMuZm9yRWFjaChmdW5jdGlvbiBwcm9wYWcoIGZvbGxvd2VyICkge1xuXHRcdFx0XHRcdGxldCBkYXRhID0gZm9sbG93ZXJbMl0gPyBtZS5yZXRyaWV2ZShmb2xsb3dlclsyXSkgOiBtZS5kYXRhO1xuXHRcdFx0XHRcdC8vaWYgKCAhZGF0YSApIHJldHVybjtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHRpZiAoIHR5cGVvZiBmb2xsb3dlclswXSA9PSBcImZ1bmN0aW9uXCIgKSB7XG5cdFx0XHRcdFx0XHRmb2xsb3dlclswXShkYXRhKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0XHQvL2NiICYmIGkrKztcblx0XHRcdFx0XHRcdGZvbGxvd2VyWzBdLnNldFN0YXRlKFxuXHRcdFx0XHRcdFx0XHQoZm9sbG93ZXJbMV0pID8geyBbZm9sbG93ZXJbMV1dOiBkYXRhIH1cblx0XHRcdFx0XHRcdFx0ICAgICAgICAgICAgICA6IGRhdGFcblx0XHRcdFx0XHRcdFx0Ly8sXG5cdFx0XHRcdFx0XHRcdC8vY2IgJiYgKFxuXHRcdFx0XHRcdFx0XHQvLyAgICAoKSA9PiAoISgtLWkpICYmIGNiKCkpXG5cdFx0XHRcdFx0XHRcdC8vKVxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0Ly9lbHNlXG5cdFx0XHQhd2FzU3RhYmxlICYmIHRoaXMuZW1pdCgnc3RhYmxlJywgdGhpcy5kYXRhKTtcblx0XHRcdHByb3BhZyAmJiB0aGlzLmVtaXQoJ3VwZGF0ZScsIHRoaXMuZGF0YSk7XG5cdFx0XHRjYiAmJiBjYigpXG5cdFx0fVxuXHRcdGVsc2UgY2IgJiYgdGhpcy50aGVuKGNiKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXHRcblx0cHJvcGFnKCBkYXRhICkge1xuXHRcdHRoaXMuZW1pdCgndXBkYXRlJywgZGF0YSk7XG5cdH1cblx0XG5cdHJldGFpbiggcmVhc29uICkge1xuXHRcdHRoaXMuX19yZXRhaW5zLmFsbCsrO1xuXHRcdGlmICggcmVhc29uICkge1xuXHRcdFx0dGhpcy5fX3JldGFpbnNbcmVhc29uXSA9IHRoaXMuX19yZXRhaW5zW3JlYXNvbl0gfHwgMDtcblx0XHRcdHRoaXMuX19yZXRhaW5zW3JlYXNvbl0rKztcblx0XHR9XG5cdH1cblx0XG5cdGRpc3Bvc2UoIHJlYXNvbiApIHtcblx0XHQvL2NvbnNvbGUud2FybihcImRpc3Bvc2VcIiwgcmVhc29uLCB0aGlzLl9fcmV0YWlucyk7XG5cdFx0aWYgKCByZWFzb24gKSB7XG5cdFx0XHRpZiAoICF0aGlzLl9fcmV0YWluc1tyZWFzb25dIClcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiUlMgOiBEaXNwb3NlIG1vcmUgdGhhbiByZXRhaW5pbmcgb24gc3RvcmUgJ1wiICsgdGhpcy5uYW1lICsgXCInIDogXCIgKyByZWFzb24pO1xuXHRcdFx0XG5cdFx0XHR0aGlzLl9fcmV0YWluc1tyZWFzb25dLS07XG5cdFx0fVxuXHRcdGlmICggdGhpcy5fX3JldGFpbnMuYWxsID09IDAgKVxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiUlMgOiBEaXNwb3NlIG1vcmUgdGhhbiByZXRhaW5pbmcgb24gc3RvcmUgXCIgKyB0aGlzLm5hbWUpO1xuXHRcdFxuXHRcdHRoaXMuX19yZXRhaW5zLmFsbC0tO1xuXHRcdFxuXHRcdGlmICggIXRoaXMuX19yZXRhaW5zLmFsbCApIHtcblx0XHRcdGlmICggdGhpcy5fcGVyc2lzdGVuY2VUbSApIHtcblx0XHRcdFx0dGhpcy5fZGVzdHJveVRNICYmIGNsZWFyVGltZW91dCh0aGlzLl9kZXN0cm95VE0pO1xuXHRcdFx0XHR0aGlzLl9kZXN0cm95VE0gPSBzZXRUaW1lb3V0KFxuXHRcdFx0XHRcdGUgPT4ge1xuXHRcdFx0XHRcdFx0dGhpcy5fZGVzdHJveVRNID0gbnVsbDtcblx0XHRcdFx0XHRcdC8vdGhpcy50aGVuKHMgPT4ge1xuXHRcdFx0XHRcdFx0IXRoaXMuX19yZXRhaW5zLmFsbCAmJiAhdGhpcy5kZWFkICYmIHRoaXMuZGVzdHJveSgpXG5cdFx0XHRcdFx0XHQvL30pO1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0dGhpcy5fcGVyc2lzdGVuY2VUbVxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdC8vdGhpcy50aGVuKHMgPT5cblx0XHRcdFx0KCF0aGlzLl9fcmV0YWlucy5hbGwgJiYgIXRoaXMuZGVhZCAmJiB0aGlzLmRlc3Ryb3koKSlcblx0XHRcdFx0Ly8pO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRcblx0ZGVzdHJveSgpIHtcblx0XHQvLyAgY29uc29sZS5sb2coXCJkZXN0cm95XCIsIHRoaXMuX3VpZCk7XG5cdFx0XG5cdFx0dGhpcy5lbWl0KCdkZXN0cm95JywgdGhpcyk7XG5cdFx0aWYgKCB0aGlzLl9zdGFiaWxpemVyIClcblx0XHRcdGNsZWFyVGltZW91dCh0aGlzLl9zdGFiaWxpemVyKTtcblx0XHRcblx0XHRpZiAoIHRoaXMuX2ZvbGxvd2Vycy5sZW5ndGggKVxuXHRcdFx0dGhpcy5fZm9sbG93ZXJzLmZvckVhY2goXG5cdFx0XHRcdCggZm9sbG93ZXIgKSA9PiB7XG5cdFx0XHRcdFx0aWYgKCB0eXBlb2YgZm9sbG93ZXJbMF0gIT09IFwiZnVuY3Rpb25cIiApIHtcblx0XHRcdFx0XHRcdGlmICggZm9sbG93ZXJbMF0uc3RvcmVzIClcblx0XHRcdFx0XHRcdFx0ZGVsZXRlIGZvbGxvd2VyWzBdLnN0b3Jlc1tmb2xsb3dlclsxXV07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHQpO1xuXHRcdHRoaXMuX2ZvbGxvd2Vycy5sZW5ndGggPSAwO1xuXHRcdHRoaXMuY29uc3RydWN0b3IuX3JldiAgPSB0aGlzLnJldjtcblx0XHR0aGlzLmRlYWQgICAgICAgICAgICAgID0gdHJ1ZTtcblx0XHR0aGlzLl9yZXZzICAgICAgICAgICAgID0gdGhpcy5kYXRhID0gdGhpcy5zdGF0ZSA9IHRoaXMuc2NvcGUgPSBudWxsO1xuXHRcdHRoaXMucmVtb3ZlQWxsTGlzdGVuZXJzKCk7XG5cdH1cbn1cblxuLyoqXG4gKiBnZXQgYSBzdGF0aWMgYWxpYXNlZCByZWZlcmVuY2Ugb2YgYSBzdG9yZVxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqIEByZXR1cm5zIHt7c3RvcmU6IFN0b3JlLCBuYW1lOiAqfX1cbiAqL1xuU3RvcmUuYXMgPSBmdW5jdGlvbiAoIG5hbWUgKSB7XG5cdHJldHVybiB7IHN0b3JlOiB0aGlzLCBuYW1lIH07XG59XG5cbi8qKlxuICogTWFwIGFsbCBuYW1lZCBzdG9yZXMgaW4ge2tleXN9IHRvIHRoZSB7b2JqZWN0fSdzIHN0YXRlXG4gKiBIb29rIGNvbXBvbmVudFdpbGxVbm1vdW50IChmb3IgcmVhY3QgY29tcCkgb3IgZGVzdHJveSB0byB1bkJpbmQgdGhlbSBhdXRvbWF0aWNhbGx5XG4gKiBAc3RhdGljXG4gKiBAcGFyYW0gb2JqZWN0IHtPYmplY3R9IHRhcmdldCBzdGF0ZSBhd2FyZSBvYmplY3QgKFJlYWN0LkNvbXBvbmVudHxTdG9yZXwuLi4pXG4gKiBAcGFyYW0ga2V5cyB7QXJyYXl9IEV4IDogW1wic2Vzc2lvblwiLCBcIm90aGVyU3RhdGljTmFtZWRTdG9yZTprZXlcIixcbiAqICAgICBzdG9yZS5hcygnYW5vdGhlcktleScpXVxuICovXG5TdG9yZS5tYXAgPSBmdW5jdGlvbiAoIGNTdG9yZSwga2V5cywgc2NvcGUsIG9yaWdpbiwgc2V0SW5pdGlhbCA9IGZhbHNlICkge1xuXHR2YXIgdGFyZ2V0UmV2cyAgICAgPSBjU3RvcmUuX3JldnMgfHwge307XG5cdHZhciB0YXJnZXRTY29wZSAgICA9IGNTdG9yZS5zdG9yZXMgfHwgKGNTdG9yZS5zdG9yZXMgPSB7fSk7XG5cdHZhciBpbml0aWFsT3V0cHV0cyA9IHt9O1xuXHRrZXlzICAgICAgICAgICAgICAgPSBpcy5hcnJheShrZXlzKSA/IFsuLi5rZXlzXSA6IFtrZXlzXTtcblx0XG5cdFxuXHRzY29wZSA9IHNjb3BlIHx8IFN0b3JlLnN0YXRpY1Njb3BlO1xuXHRcblx0a2V5cyA9IGtleXMuZmlsdGVyKFxuXHRcdC8vIEB0b2RvIDogdXNlIHF1ZXJ5IHJlZnNcblx0XHQvLyAoc3RvcmUpKFxcLnN0b3JlKSooXFxbKFxcKnwocHJvcHMpXFx3KykrKVxcXSk/KFxcOmFsaWFzKVxuXHRcdCgga2V5ICkgPT4ge1xuXHRcdFx0aWYgKCAha2V5ICkge1xuXHRcdFx0XHRjb25zb2xlLmVycm9yKFwiTm90IGEgbWFwcGFibGUgc3RvcmUgaXRlbSAnXCIgKyBrZXkgKyBcIicgaW4gXCIgKyBvcmlnaW4gKyAnICEhJyk7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdGxldCBuYW1lLFxuXHRcdFx0ICAgIGFsaWFzLFxuXHRcdFx0ICAgIHBhdGgsXG5cdFx0XHQgICAgc3RvcmUsIF9rZXk7XG5cdFx0XHRpZiAoIGtleS5zdG9yZSAmJiBrZXkubmFtZSApIHtcblx0XHRcdFx0YWxpYXMgPSBuYW1lID0ga2V5Lm5hbWU7XG5cdFx0XHRcdHN0b3JlID0ga2V5LnN0b3JlO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSBpZiAoIGlzLmZuKGtleSkgKSB7XG5cdFx0XHRcdG5hbWUgID0gYWxpYXMgPSBrZXkubmFtZSB8fCBrZXkuZGVmYXVsdE5hbWU7XG5cdFx0XHRcdHN0b3JlID0ga2V5O1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdF9rZXkgID0ga2V5Lm1hdGNoKC8oW15cXC5cXDpdKykoKD86XFwuW15cXC5cXDpdKykqKSg/OlxcOihbXlxcLlxcOl0rKSk/Lyk7XG5cdFx0XHRcdG5hbWUgID0gX2tleVsxXTtcblx0XHRcdFx0cGF0aCAgPSBfa2V5WzJdICYmIF9rZXlbMl0uc3Vic3RyKDEpO1xuXHRcdFx0XHRzdG9yZSA9IHNjb3BlLnN0b3Jlc1tfa2V5WzFdXTtcblx0XHRcdFx0YWxpYXMgPSBfa2V5WzNdIHx8IHBhdGggJiYgcGF0aC5tYXRjaCgvKFteXFwuXSopJC8pWzBdIHx8IF9rZXlbMV07XG5cdFx0XHR9XG5cdFx0XHRpZiAoICFzdG9yZSApIHtcblx0XHRcdFx0bGV0IGkgPSBbXTtcblx0XHRcdFx0Zm9yICggdmFyIG8gaW4gc2NvcGUuc3RvcmVzIClcblx0XHRcdFx0XHRpLnB1c2gobylcblx0XHRcdFx0Y29uc29sZS5lcnJvcihcIk5vdCBhIG1hcHBhYmxlIHN0b3JlIGl0ZW0gJ1wiICsgbmFtZSArIFwiL1wiICsgYWxpYXMgKyBcIicgaW4gXCIgKyAoY1N0b3JlLm5hbWUgfHwgY1N0b3JlKSArICcgISEnLCBzdG9yZSwgX2tleSwgc2NvcGUuc3RvcmVzLCBpKTtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCBpcy5yc1Njb3BlQ2xhc3Moc3RvcmUpICkgc2NvcGUuX21vdW50KG5hbWUpO1xuXHRcdFx0aWYgKCBpcy5yc1Njb3BlKHN0b3JlKSApIHtcblx0XHRcdFx0c3RvcmUgPSBzY29wZS5fbW91bnQoa2V5KTtcblx0XHRcdH1cblx0XHRcdGVsc2UgaWYgKCB0YXJnZXRSZXZzW25hbWVdICkgcmV0dXJuIGZhbHNlOy8vIGlnbm9yZSBkYmwgdXNlcyBmb3Igbm93XG5cdFx0XHRcblx0XHRcdFxuXHRcdFx0aWYgKCBpcy5mbihzdG9yZSkgKSB7XG5cdFx0XHRcdHNjb3BlLl9tb3VudChuYW1lKVxuXHRcdFx0XHRzY29wZS5zdG9yZXNbbmFtZV0uYmluZChjU3RvcmUsIGFsaWFzLCBzZXRJbml0aWFsLCBwYXRoKTtcblx0XHRcdH1cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHRzdG9yZS5iaW5kKGNTdG9yZSwgYWxpYXMsIHNldEluaXRpYWwsIHBhdGgpO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHQvLyBnaXZlIGluaXRpYWwgc3RvcmUgd2VpZ2h0IGJhc2luZyBzb3VyY2VzXG5cdFx0XHRzY29wZS5zdG9yZXNbbmFtZV0uX3NvdXJjZXMgJiYgY1N0b3JlLl9zb3VyY2VzLnB1c2goLi4uc2NvcGUuc3RvcmVzW25hbWVdLl9zb3VyY2VzKTtcblx0XHRcdFxuXHRcdFx0dGFyZ2V0UmV2c1thbGlhc10gPSB0YXJnZXRSZXZzW2FsaWFzXSB8fCB0cnVlO1xuXHRcdFx0IXRhcmdldFNjb3BlW25hbWVdICYmICh0YXJnZXRTY29wZVtuYW1lXSA9IHNjb3BlLnN0b3Jlc1tuYW1lXSk7XG5cdFx0XHRpZiAoIHNjb3BlLnN0b3Jlc1tuYW1lXS5oYXNPd25Qcm9wZXJ0eSgnZGF0YScpIClcblx0XHRcdFx0aW5pdGlhbE91dHB1dHNbbmFtZV0gPSBzY29wZS5kYXRhW25hbWVdO1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHQpO1xuXHRcblx0Ly8gLi4uIEB0b2RvXG5cdGNTdG9yZS5vbmNlKCdkZXN0cm95JywgKCAuLi5hcmd6ICkgPT4ge1xuXHRcdGtleXMubWFwKFxuXHRcdFx0KCBrZXkgKSA9PiB7XG5cdFx0XHRcdGxldCBuYW1lLFxuXHRcdFx0XHQgICAgYWxpYXMsIHBhdGgsXG5cdFx0XHRcdCAgICBzdG9yZTtcblx0XHRcdFx0aWYgKCBrZXkuc3RvcmUgJiYga2V5Lm5hbWUgKSB7XG5cdFx0XHRcdFx0YWxpYXMgPSBuYW1lID0ga2V5Lm5hbWU7XG5cdFx0XHRcdFx0c3RvcmUgPSBrZXkuc3RvcmU7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZSBpZiAoIGlzLmZuKGtleSkgKSB7XG5cdFx0XHRcdFx0bmFtZSAgPSBhbGlhcyA9IGtleS5uYW1lIHx8IGtleS5kZWZhdWx0TmFtZTtcblx0XHRcdFx0XHRzdG9yZSA9IHNjb3BlLnN0b3Jlc1tuYW1lXTtcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHRrZXkgICA9IGtleS5tYXRjaCgvKFteXFwuXFw6XSspKCg/OlxcLlteXFwuXFw6XSspKikoPzpcXDooW15cXC5cXDpdKykpPy8pO1xuXHRcdFx0XHRcdG5hbWUgID0ga2V5WzFdO1xuXHRcdFx0XHRcdHBhdGggID0ga2V5WzJdICYmIGtleVsyXS5zdWJzdHIoMSk7XG5cdFx0XHRcdFx0c3RvcmUgPSBzY29wZS5zdG9yZXNba2V5WzFdXTtcblx0XHRcdFx0XHRhbGlhcyA9IGtleVszXSB8fCBwYXRoICYmIHBhdGgubWF0Y2goLyhbXlxcLl0qKSQvKVswXSB8fCBrZXlbMV07XG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHRcdHN0b3JlICYmICFpcy5mbihzdG9yZSkgJiYgc3RvcmUudW5CaW5kKGNTdG9yZSwgYWxpYXMsIHBhdGgpXG5cdFx0XHR9XG5cdFx0KTtcblx0fSlcblx0XG5cdHJldHVybiBpbml0aWFsT3V0cHV0cztcbn07XG5cblxuaXMucnNTdG9yZSAgICAgID0gZnVuY3Rpb24gKCBvYmogKSB7XG5cdHJldHVybiBvYmogaW5zdGFuY2VvZiBTdG9yZVxufVxuaXMucnNTdG9yZUNsYXNzID0gZnVuY3Rpb24gKCBvYmogKSB7XG5cdHJldHVybiBTdG9yZS5pc1Byb3RvdHlwZU9mKG9iaikgfHwgb2JqID09PSBTdG9yZVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdG9yZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvU3RvcmUuanMiLCIvKlxuICogQ29weXJpZ2h0IChjKSAgMjAxOCBXaXNlIFdpbGQgV2ViIC5cbiAqXG4gKiAgTUlUIExpY2Vuc2VcbiAqXG4gKiAgUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqICBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiAgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuICogIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqICBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqICBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqICBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiAgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqICBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuICogIFNPRlRXQVJFLlxuICpcbiAqIEBhdXRob3IgOiBOYXRoYW5hZWwgQnJhdW5cbiAqIEBjb250YWN0IDogY2FpcGlsYWJzQGdtYWlsLmNvbVxuICovXG5cbi8vaW1wb3J0IGluZGV4IGZyb20gXCIuL2luZGV4XCI7Ly8gd2lsbCB1c2UgYXMgZXh0ZXJuYWwgdGhlIGluZGV4IGluIGRpc3RcbmltcG9ydCBpcyBmcm9tIFwiaXNcIjtcblxuLyoqXG4gKiBNaW5pbWFsIHB1c2ggc2VxdWVuY2VyLCBhcHBseSBzdG9yZXMgc3BlY2lmaWMgdGFzayBpbiB0aGUgcmlnaHQgb3JkZXIgKHJvb3Qgc3RvcmVzXG4gKiBmaXJzdClcbiAqL1xubGV0IHRhc2tRdWV1ZSAgICAgID0gW10sXG4gICAgY3VyV2VpZ2h0ICAgICAgPSAwLFxuICAgIG1heFdlaWdodCAgICAgID0gMCxcbiAgICBtaW5XZWlnaHQgICAgICA9IDAsXG4gICAgdGFza0NvdW50ICAgICAgPSAwLFxuICAgIGRlU3luYyAgICAgICAgID0gZmFsc2UsXG4gICAgZGVTeW5jTWF4VGFza3MgPSAxMCxcbiAgICB0YXNrLFxuICAgIGlzUnVubmluZyxcbiAgICBlcnJvckNhdGNoZXIgICA9IHtcbiAgICAgICAgbGFzdEVycm9yOiBudWxsLFxuICAgICAgICBkaXNwYXRjaCA6IGZ1bmN0aW9uICggZXJyb3IgKSB7XG4gICAgICAgICAgICBlcnJvckNhdGNoZXIuZGlzYWJsZSgpO1xuICAgICAgICAgICAgaWYgKCB0YXNrICYmIHRhc2tbIDAgXS5oYW5kbGVFcnJvciApIHtcbiAgICAgICAgICAgICAgICB0YXNrWyAwIF0uaGFuZGxlRXJyb3IoZXJyb3IsIHRhc2spO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoIHRhc2sgKVxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJSZVNjb3BlIDogQW4gYXBwbHkgdGFzayBoYXMgZmFpbGVkICEhXCIsIHRhc2tbIDEgXSwgXCIgb24gXCIsIHRhc2tbIDAgXS5uYW1lIHx8IHRhc2tbIDAgXS5jb25zdHJ1Y3Rvci5uYW1lKVxuICAgICAgICBcbiAgICAgICAgICAgIGlzUnVubmluZyA9IGZhbHNlO1xuICAgICAgICAgICAgdGFzayAgICAgID0gbnVsbDtcbiAgICAgICAgICAgIHJ1bk5vdygpO1xuICAgICAgICB9LFxuICAgICAgICBlbmFibGUgICA6ICggdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgKVxuICAgICAgICAgICAgICAgICAgID8gKCkgPT4ge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIGVycm9yQ2F0Y2hlci5kaXNwYXRjaClcbiAgICAgICAgICAgIH0gOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgcHJvY2Vzcy5vbigndW5jYXVnaHRFeGNlcHRpb24nLCBlcnJvckNhdGNoZXIuZGlzcGF0Y2gpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgZGlzYWJsZSAgOiAoIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnIClcbiAgICAgICAgICAgICAgICAgICA/ICgpID0+IHtcbiAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignZXJyb3InLCBlcnJvckNhdGNoZXIuZGlzcGF0Y2gpXG4gICAgICAgICAgICB9IDogKCkgPT4ge1xuICAgICAgICAgICAgICAgIHByb2Nlc3MucmVtb3ZlTGlzdGVuZXIoJ3VuY2F1Z2h0RXhjZXB0aW9uJywgZXJyb3JDYXRjaGVyLmRpc3BhdGNoKTtcbiAgICAgICAgICAgIH1cbiAgICB9XG47XG5cbmZ1bmN0aW9uIHJ1bk5vdygpIHtcbiAgICBpZiAoICFpc1J1bm5pbmcgKSB7XG4gICAgICAgIHJ1bigpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gcnVuKCkge1xuICAgIGxldCBmcm9tICA9IERhdGUubm93KCk7XG4gICAgaXNSdW5uaW5nID0gdHJ1ZTtcbiAgICBlcnJvckNhdGNoZXIuZW5hYmxlKCk7XG4gICAgd2hpbGUgKCB0YXNrQ291bnQgKSB7XG4gICAgICAgIFxuICAgICAgICAvLyB0cnkgZm9yIHRoZSBjdXJyZW50IHdlaWdodFxuICAgICAgICB3aGlsZSAoICEoIHRhc2tRdWV1ZVsgY3VyV2VpZ2h0IF0gJiYgdGFza1F1ZXVlWyBjdXJXZWlnaHQgXS5sZW5ndGggKSApXG4gICAgICAgICAgICBjdXJXZWlnaHQrKztcbiAgICAgICAgXG4gICAgICAgIHRhc2tDb3VudC0tO1xuICAgICAgICB0YXNrID0gdGFza1F1ZXVlWyBjdXJXZWlnaHQgXS5zaGlmdCgpO1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwiVGFzayA6IFwiLCB0YXNrWzFdLCBcIiBvbiBcIiwgdGFza1swXS5uYW1lKTtcbiAgICAgICAgdGFza1sgMCBdWyB0YXNrWyAxIF0gXS5hcHBseSh0YXNrWyAwIF0sIHRhc2tbIDIgXSk7XG4gICAgfVxuICAgIHRhc2sgPSB1bmRlZmluZWQ7XG4gICAgZXJyb3JDYXRjaGVyLmRpc2FibGUoKTtcbiAgICBcbiAgICBpc1J1bm5pbmcgPSBmYWxzZTtcbiAgICBpZiAoIHRhc2tDb3VudCApIHtcbiAgICAgICAgc2V0VGltZW91dChydW5Ob3cpO1xuICAgIH1cbn1cblxuLy9cbi8vaW5kZXguc2V0VGFza0RlU3luYyA9ICggbmIgKSA9PiB7XG4vLyAgICBpZiAoIG5iID09PSBmYWxzZSApXG4vLyAgICAgICAgcmV0dXJuIGRlU3luYyA9IGZhbHNlO1xuLy8gICAgZWxzZSBpZiAoIG5iID09PSB0cnVlICkge1xuLy8gICAgICAgIGRlU3luYyAgICAgICAgID0gdHJ1ZTtcbi8vICAgICAgICBkZVN5bmNNYXhUYXNrcyA9IDEwO1xuLy8gICAgfVxuLy8gICAgZWxzZSAoaXMuaW50KG5iKSlcbi8vICAgIHtcbi8vICAgICAgICBkZVN5bmMgICAgICAgICA9IHRydWU7XG4vLyAgICAgICAgZGVTeW5jTWF4VGFza3MgPSBuYjtcbi8vICAgIH1cbi8vfTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHB1c2hUYXNrKCBvYmosIGZuLCBhcmd6ICkge1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIG1vcmUgYSBzdG9yZSBoYXZlIHNvdXJjZXMsIHRoZSBtb3JlIGl0IHNob3VsZCBiZSBwcm9jZXNzZWQgZmlyc3RcbiAgICAgICAgICogU28gbGVhZnMgc3RvcmVzIHN0YXkgc3luYywgYW5kIHJvb3Qgc3RvcmVzIHJlY2VpdmUgbWVyZ2VkIHN0YXRlIHVwZGF0ZXM7XG4gICAgICAgICAqIGdsb2JhbCBzdGF0ZSBzdGF5IGNvaGVyZW50XG4gICAgICAgICAqXG4gICAgICAgICAqIFRoaXMgbWVhbiB3aGF0ZXZlciB0aGUgbnVtYmVyIG9mIHN0b3JlcyAmIHRoZSBjb21wbGV4aXR5IG9mIHRoZSBkZXBzLFxuICAgICAgICAgKiB1cGRhdGluZyBhIHN0b3JlIHN0YXRlIHdpbGwgdXBkYXRlIGl0cyBzeW5jaHJvbmUgY2hpbGQgc3RvcmVzIGltbWVkaWF0ZWx5XG4gICAgICAgICAqXG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBlIHsqfG51bWJlcn1cbiAgICAgICAgICovXG4gICAgICAgIGxldCB3ZWlnaHQgPSBvYmouX3NvdXJjZXMgJiYgb2JqLl9zb3VyY2VzLmxlbmd0aCB8fCAxLFxuICAgICAgICAgICAgc3RhY2sgID0gdGFza1F1ZXVlWyB3ZWlnaHQgXSA9XG4gICAgICAgICAgICAgICAgdGFza1F1ZXVlWyB3ZWlnaHQgXSB8fCBbXTtcbiAgICAgICAgXG4gICAgICAgIG1heFdlaWdodCA9IE1hdGgubWF4KG1heFdlaWdodCwgd2VpZ2h0KTtcbiAgICAgICAgY3VyV2VpZ2h0ID0gTWF0aC5taW4oY3VyV2VpZ2h0LCB3ZWlnaHQpO1xuICAgICAgICB0YXNrQ291bnQrKztcbiAgICAgICAgXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJQdXNoIFRhc2sgOiBcIiwgZm4sIFwiIG9uIFwiLCBvYmoubmFtZSwgd2VpZ2h0KTtcbiAgICAgICAgc3RhY2sucHVzaChbIG9iaiwgZm4sIGFyZ3ogXSk7XG4gICAgICAgIHNldFRpbWVvdXQocnVuTm93LCAwKTtcbiAgICAgICAgcmV0dXJuIHN0YWNrLmxlbmd0aDtcbiAgICB9XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlscy9UYXNrU2VxdWVuY2VyLmpzIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9wcm9jZXNzL2Jyb3dzZXIuanNcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpICAyMDE4IFdpc2UgV2lsZCBXZWIgLlxuICpcbiAqICBNSVQgTGljZW5zZVxuICpcbiAqICBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiAgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqICB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiAgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiAgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiAgVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG4gKiAgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqICBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG4gKiAgU09GVFdBUkUuXG4gKlxuICogQGF1dGhvciA6IE5hdGhhbmFlbCBCcmF1blxuICogQGNvbnRhY3QgOiBjYWlwaWxhYnNAZ21haWwuY29tXG4gKi9cblxuaW1wb3J0IGlzICAgIGZyb20gJ2lzJ1xuXG5jb25zdCBTaW1wbGVPYmplY3RQcm90byA9ICgge30gKS5jb25zdHJ1Y3RvcjtcblxubGV0IHNjb3BhYmxlcyA9IFtdO1xuXG5mdW5jdGlvbiBhZGRTY29wYWJsZVR5cGUoIHRlc3QsIGhhbmRsZSwgbWVtYmVyID0gZmFsc2UsIHN0YXRlU2NvcGUgPSBmYWxzZSApIHtcbiAgICBzY29wYWJsZXMucHVzaChcbiAgICAgICAge1xuICAgICAgICAgICAgdGVzdCxcbiAgICAgICAgICAgIG1lbWJlcixcbiAgICAgICAgICAgIHN0YXRlU2NvcGUsXG4gICAgICAgICAgICBoYW5kbGVcbiAgICAgICAgfVxuICAgIClcbn1cblxuLy9cbmZ1bmN0aW9uIGlzU2NvcGFibGVUeXBlKCBDb21wLCBtZW1iZXIsIHN0YXRlU2NvcGUgKSB7XG4gICAgXG4gICAgZm9yICggbGV0IGkgPSAwOyBpIDwgc2NvcGFibGVzLmxlbmd0aDsgaSsrIClcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgKCBtZW1iZXIgPT09IHVuZGVmaW5lZCB8fCBtZW1iZXIgPT0gc2NvcGFibGVzWyBpIF0ubWVtYmVyIClcbiAgICAgICAgICAgICYmIHN0YXRlU2NvcGUgPT0gc2NvcGFibGVzWyBpIF0uc3RhdGVTY29wZVxuICAgICAgICAgICAgJiYgc2NvcGFibGVzWyBpIF0udGVzdChDb21wKVxuICAgICAgICApXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICBcbiAgICByZXR1cm4gZmFsc2U7XG4gICAgXG59XG5cbmZ1bmN0aW9uIGFwcGx5U2NvcGFibGVUeXBlKCBDb21wLCBhcmd6LCBtZW1iZXIsIHN0YXRlU2NvcGUgKSB7XG4gICAgXG4gICAgZm9yICggbGV0IGkgPSAwOyBpIDwgc2NvcGFibGVzLmxlbmd0aDsgaSsrIClcbiAgICAgICAgaWYgKCBtZW1iZXIgPT0gc2NvcGFibGVzWyBpIF0ubWVtYmVyICYmIHN0YXRlU2NvcGUgPT0gc2NvcGFibGVzWyBpIF0uc3RhdGVTY29wZSAmJiBzY29wYWJsZXNbIGkgXS50ZXN0KENvbXApIClcbiAgICAgICAgICAgIHJldHVybiBzY29wYWJsZXNbIGkgXS5oYW5kbGUoQ29tcCwgLi4uYXJneik7XG4gICAgXG4gICAgY29uc29sZS53YXJuKFwicmVTY29wZSA6IFVua25vd24gdHlwZVwiLCBDb21wKVxuICAgIFxuICAgIHJldHVybiBmYWxzZTtcbiAgICBcbn1cblxuZnVuY3Rpb24gcmVTY29wZSggLi4uYXJneiApIHtcbiAgICAvLyBhcmUgd2UgZGVjb3JhdGluZyBhIG1lbWJlciAvIHdpdGhvdXQgYXJnelxuICAgIGlmICggYXJnelsgMCBdIGluc3RhbmNlb2YgU2ltcGxlT2JqZWN0UHJvdG8gJiYgYXJnelsgMiBdIGluc3RhbmNlb2YgU2ltcGxlT2JqZWN0UHJvdG8gJiYgYXJnelsgMCBdLmhhc093blByb3BlcnR5KGFyZ3pbIDEgXSkgKSB7XG4gICAgICAgIGFyZ3pbIDIgXS52YWx1ZSA9IGFwcGx5U2NvcGFibGVUeXBlKGFyZ3pbIDAgXSwgW10sIHRydWUsIGZhbHNlKTtcbiAgICAgICAgcmV0dXJuIGFyZ3pbIDAgXTtcbiAgICB9XG4gICAgZWxzZSBpZiAoICFpc1Njb3BhYmxlVHlwZShhcmd6WyAwIF0sIHVuZGVmaW5lZCwgZmFsc2UpICkge1xuICAgICAgICByZXR1cm4gKCAuLi5hcmd6MiApID0+IHtcbiAgICAgICAgICAgIC8vIGFyZSB3ZSBkZWNvcmF0aW5nIGEgbWVtYmVyIC8gd2l0aCBhcmd6XG4gICAgICAgICAgICBpZiAoIGFyZ3oyWyAwIF0gaW5zdGFuY2VvZiBTaW1wbGVPYmplY3RQcm90byAmJiBhcmd6MlsgMiBdIGluc3RhbmNlb2YgU2ltcGxlT2JqZWN0UHJvdG8gJiYgYXJnejJbIDAgXS5oYXNPd25Qcm9wZXJ0eShhcmd6MlsgMSBdKSApIHtcbiAgICAgICAgICAgICAgICBhcmd6MlsgMiBdLnZhbHVlID0gYXBwbHlTY29wYWJsZVR5cGUoYXJnejJbIDAgXSwgYXJneiwgdHJ1ZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIHJldHVybiBhcmd6MlsgMCBdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHJldHVybiByZVNjb3BlKGFyZ3oyWyAwIF0sIC4uLmFyZ3opO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBhcHBseVNjb3BhYmxlVHlwZShhcmd6WyAwIF0sIGFyZ3ouc2xpY2UoMSksIGZhbHNlLCBmYWxzZSk7XG59XG5cbmZ1bmN0aW9uIHNjb3BlVG9TdGF0ZSggLi4uYXJneiApIHtcbiAgICAvLyBhcmUgd2UgZGVjb3JhdGluZyBhIG1lbWJlciAvIHdpdGhvdXQgYXJnelxuICAgIGlmICggYXJnelsgMCBdIGluc3RhbmNlb2YgU2ltcGxlT2JqZWN0UHJvdG8gJiYgYXJnelsgMiBdIGluc3RhbmNlb2YgU2ltcGxlT2JqZWN0UHJvdG8gJiYgYXJnelsgMCBdLmhhc093blByb3BlcnR5KGFyZ3pbIDEgXSkgKSB7XG4gICAgICAgIGFyZ3pbIDIgXS52YWx1ZSA9IGFwcGx5U2NvcGFibGVUeXBlKGFyZ3pbIDAgXSwgW10sIHRydWUsIHRydWUpO1xuICAgICAgICByZXR1cm4gYXJnelsgMCBdO1xuICAgIH1cbiAgICBlbHNlIGlmICggIWlzU2NvcGFibGVUeXBlKGFyZ3pbIDAgXSwgdW5kZWZpbmVkLCB0cnVlKSApIHtcbiAgICAgICAgcmV0dXJuICggLi4uYXJnejIgKSA9PiB7XG4gICAgICAgICAgICAvLyBhcmUgd2UgZGVjb3JhdGluZyBhIG1lbWJlciAvIHdpdGggYXJnelxuICAgICAgICAgICAgaWYgKCBhcmd6MlsgMCBdIGluc3RhbmNlb2YgU2ltcGxlT2JqZWN0UHJvdG8gJiYgYXJnejJbIDIgXSBpbnN0YW5jZW9mIFNpbXBsZU9iamVjdFByb3RvICYmIGFyZ3oyWyAwIF0uaGFzT3duUHJvcGVydHkoYXJnejJbIDEgXSkgKSB7XG4gICAgICAgICAgICAgICAgYXJnejJbIDIgXS52YWx1ZSA9IGFwcGx5U2NvcGFibGVUeXBlKGFyZ3oyWyAwIF0sIGFyZ3osIHRydWUsIHRydWUpO1xuICAgICAgICAgICAgICAgIHJldHVybiBhcmd6MlsgMCBdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHJldHVybiBzY29wZVRvU3RhdGUoYXJnejJbIDAgXSwgLi4uYXJneik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGFwcGx5U2NvcGFibGVUeXBlKGFyZ3pbIDAgXSwgYXJnei5zbGljZSgxKSwgZmFsc2UsIHRydWUpO1xufVxuXG4vL1xuLy9hZGRTY29wYWJsZVR5cGUoXG4vLyAgICAoIENvbXAgKSA9PiAoQ29tcCAmJiBDb21wLnByb3RvdHlwZSBpbnN0YW5jZW9mIFN0b3JlKSxcbi8vICAgIGZ1bmN0aW9uIHJlU2NvcGUoIC4uLmFyZ3ogKSB7XG4vLyAgICAgICAgbGV0IEJhc2VTdG9yZSAgICA9ICghYXJnelswXSB8fCBhcmd6WzBdLnByb3RvdHlwZSBpbnN0YW5jZW9mIFN0b3JlKSAmJlxuLy8gYXJnei5zaGlmdCgpLCBzY29wZSAgICAgICAgPSAoIWFyZ3pbMF0gfHwgYXJnelswXSBpbnN0YW5jZW9mIFNjb3BlIHx8IGlzLmZuKGFyZ3pbMF0pKVxuLy8gJiYgYXJnei5zaGlmdCgpLCB1c2UgICAgICAgICAgPSAoaXMuYXJyYXkoYXJnelswXSkpICYmIGFyZ3ouc2hpZnQoKSwgc3RhdGVNYXAgICAgID1cbi8vICF1c2UgJiYgKCFhcmd6WzBdIHx8IGFyZ3pbMF0gaW5zdGFuY2VvZiBTaW1wbGVPYmplY3RQcm90bykgJiYgYXJnei5zaGlmdCgpLFxuLy8gaW5pdGlhbFN0YXRlID0ge307ICBsZXQgY29tcE5hbWUgPSBCYXNlU3RvcmUuZGlzcGxheU5hbWUgfHwgQmFzZVN0b3JlLm5hbWU7ICB1c2UgPVxuLy8gWy4uLihCYXNlU3RvcmUudXNlIHx8IFtdKSwgLi4uKHVzZSB8fCBbXSldOyBzdGF0ZU1hcCAmJlxuLy8gU2NvcGUuc3RhdGVNYXBUb1JlZkxpc3Qoc3RhdGVNYXAsIGluaXRpYWxTdGF0ZSwgdXNlKTsgIGNsYXNzIFN0YXRlU2NvcGVkU3RvcmUgZXh0ZW5kc1xuLy8gQmFzZVN0b3JlIHsgc3RhdGljIHVzZSAgICAgICAgID0gdXNlOyBzdGF0aWMgZGlzcGxheU5hbWUgPSBcInN0YXRlU2NvcGVkKFwiICsgY29tcE5hbWUgK1xuLy8gXCIpXCI7ICBjb25zdHJ1Y3RvciggLi4uYXJneiApIHsgc3VwZXIoc2NvcGUsIGFyZ3ouc2xpY2UoYXJnelswXSBpbnN0YW5jZW9mIFNjb3BlID8gMSA6XG4vLyAwKSkgfSB9ICByZXR1cm4gU3RhdGVTY29wZWRTdG9yZTsgfSwgZmFsc2UsIHRydWUgKVxuXG5cbmV4cG9ydCB7XG4gICAgYWRkU2NvcGFibGVUeXBlLFxuICAgIHJlU2NvcGUsXG4gICAgc2NvcGVUb1N0YXRlXG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlscy9zY29wYWJsZS5qcyJdLCJzb3VyY2VSb290IjoiIn0=