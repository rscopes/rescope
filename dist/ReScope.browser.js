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
	
				if (this._.unStableChilds) return this.once('stableTree', function (e) {
					return _this15.then(cb);
				});
				if (!this._stable) return this.once('stable', function (e) {
					return _this15.then(cb);
				});
	
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNDI0Nzg0MGZmYWY4Y2EyNTU3ZmUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9TY29wZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvaXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9pcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL0VtaXR0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9zaG9ydGlkL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vc2hvcnRpZC9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9zaG9ydGlkL2xpYi9hbHBoYWJldC5qcyIsIndlYnBhY2s6Ly8vLi9+L3Nob3J0aWQvbGliL3JhbmRvbS9yYW5kb20tZnJvbS1zZWVkLmpzIiwid2VicGFjazovLy8uL34vc2hvcnRpZC9saWIvZW5jb2RlLmpzIiwid2VicGFjazovLy8uL34vc2hvcnRpZC9saWIvcmFuZG9tL3JhbmRvbS1ieXRlLWJyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9zaG9ydGlkL2xpYi9kZWNvZGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9zaG9ydGlkL2xpYi9idWlsZC5qcyIsIndlYnBhY2s6Ly8vLi9+L3Nob3J0aWQvbGliL2lzLXZhbGlkLmpzIiwid2VicGFjazovLy8uL34vc2hvcnRpZC9saWIvdXRpbC9jbHVzdGVyLXdvcmtlci1pZC1icm93c2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9TdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvVGFza1NlcXVlbmNlci5qcyIsIndlYnBhY2s6Ly8vLi9+L3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvc2NvcGFibGUuanMiXSwibmFtZXMiOlsiJGdsb2JhbCIsIndpbmRvdyIsImdsb2JhbCIsIlJTIiwiX19fcmVzY29wZSIsImNvbnNvbGUiLCJ3YXJuIiwiU3RvcmUiLCJTY29wZSIsIkNvbnRleHQiLCJyZVNjb3BlIiwic2NvcGVUb1N0YXRlIiwicmVTY29wZVN0YXRlIiwiYWRkU2NvcGFibGVUeXBlIiwic2NvcGVSZWYiLCJtYXAiLCJrZXkiLCJyZXF1aXJlIiwid2Fsa25TZXQiLCJ3YWxrbkdldCIsImtleVdhbGtuU2V0Iiwia2V5V2Fsa25HZXQiLCJFdmVudEVtaXR0ZXIiLCJzaG9ydGlkIiwiX19wcm90b19fcHVzaCIsInRhcmdldCIsImlkIiwicGFyZW50IiwiZm4iLCJwcm90b3R5cGUiLCJfIiwib3BlblNjb3BlcyIsIlNpbXBsZU9iamVjdFByb3RvIiwiY29uc3RydWN0b3IiLCJzY29wZXMiLCJza2V5IiwiaXMiLCJhcnJheSIsInNvcnQiLCJhIiwiYiIsImZpcnN0bmFtZSIsImpvaW4iLCJzbSIsInN0YXRlIiwiX3JlZnMiLCJhY3Rpb25zIiwicGF0aCIsImFwcGxpZXIiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsImNwYXRoIiwicHVzaCIsIkZ1bmN0aW9uIiwiYXMiLCJzdG9yZXNNYXAiLCJ1cHBlclNjb3BlIiwic25hcHNob3QiLCJkYXRhIiwiaW5jcmVtZW50SWQiLCJwZXJzaXN0ZW5jZVRtIiwiYXV0b0Rlc3Ryb3kiLCJyb290RW1pdHRlciIsImJvdW5kZWRBY3Rpb25zIiwia2V5UElEIiwiX2lkIiwiZ2VuZXJhdGUiLCJiYXNlSWQiLCJrZXlJbmRleCIsImlzTG9jYWxJZCIsInJlZ2lzdGVyIiwiaSIsIl9yZXYiLCJzdG9yZXMiLCJfYXV0b0Rlc3Ryb3kiLCJkZWFkIiwiRXJyb3IiLCJzb3VyY2VzIiwiY2hpbGRTY29wZXMiLCJjaGlsZFNjb3Blc0xpc3QiLCJ1blN0YWJsZUNoaWxkcyIsInNlZW5DaGlsZHMiLCJfX3JldGFpbnMiLCJhbGwiLCJfX2xvY2tzIiwiX2JvdW5kZWRBY3Rpb25zIiwidGVzdCIsImluY2x1ZGVzIiwiYmluZCIsIl9saXN0ZW5pbmciLCJfc2NvcGUiLCJfbWl4ZWQiLCJfbWl4ZWRMaXN0IiwiZm9sbG93ZXJzIiwicmV0YWluIiwiX3N0YWJsZSIsIndhaXQiLCJvbiIsIl9wYXJlbnRMaXN0IiwicmVsZWFzZSIsIl9wcm9wYWciLCJfYWRkQ2hpbGQiLCJyZXN0b3JlIiwic2V0VGltZW91dCIsImRpc3Bvc2UiLCJzdG9yZXNMaXN0IiwiX21vdW50IiwiayIsImFyZ3VtZW50cyIsInJlZiIsInNuYXAiLCJwYXJzZVJlZiIsInN0b3JlSWQiLCJyZWR1Y2VSaWdodCIsIm1vdW50ZWQiLCJjdHgiLCJzdG9yZSIsInRhc2tRdWV1ZSIsInJzU3RvcmVDbGFzcyIsIm5hbWUiLCJsZW5ndGgiLCJzaGlmdCIsInJzU2NvcGVDbGFzcyIsIiRwYXJlbnQiLCJtb3VudCIsInNsaWNlIiwicnNTdG9yZSIsInVuZGVmaW5lZCIsInNldFN0YXRlIiwiX3dhdGNoU3RvcmUiLCJpc1N0YWJsZSIsInByb3BhZyIsInRhcmdldEN0eCIsImxpc3RzIiwicmVsaW5rIiwiX19vcmlnaW4iLCJzaW5nbGV0b24iLCJzcmNDdHgiLCJleHRlcm5hbCIsImZvcmNlIiwibGN0eCIsImluZm8iLCJ0bXAiLCJkZXN0cm95IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwiZ2V0Iiwic2V0IiwidiIsImFjdGl2ZUFjdGlvbnMiLCJyc1Njb3BlIiwiYWN0IiwiaGFzT3duUHJvcGVydHkiLCJfX3RhcmdldFN0b3JlcyIsImRpc3BhdGNoIiwib2JqIiwic2V0SW5pdGlhbCIsInJldk1hcCIsImxhc3RSZXZzIiwicmVmS2V5cyIsInN0cmluZyIsInJlZHVjZSIsInJldnMiLCJyZXYiLCJyZWZzIiwicmV0YWluU3RvcmVzIiwiZ2V0VXBkYXRlcyIsImRpc3Bvc2VTdG9yZXMiLCJzcGxpY2UiLCJ0byIsInJlZkxpc3QiLCJtaXhlZENXVW5tb3VudCIsInVuTW91bnRLZXkiLCJpc1JlYWN0Q29tcG9uZW50IiwidW5CaW5kIiwiYWxpYXMiLCJyZXRyaWV2ZSIsInNwbGl0IiwicmV0cmlldmVTdG9yZSIsInN0b3Jlc1Jldk1hcCIsImxvY2FsIiwidXBkYXRlZCIsImdldFN0b3Jlc1JldnMiLCJvdXRwdXQiLCJfZ2V0UmV2TWFwIiwiY2hpbGRzIiwiX2dldEFsbENoaWxkcyIsImNmZyIsInBhcmVudEFsaWFzIiwic2lkIiwic2VyaWFsaXplX2V4IiwiZXhjbHVkZSIsIndpdGhDaGlsZHMiLCJ3aXRoUGFyZW50cyIsIndpdGhNaXhlZCIsIm5vcmVmcyIsImFsaWFzZXMiLCJzZXJpYWxpemUiLCJ3aXRoQ2hpbGQiLCJoIiwiYm9vbCIsInRha2VTbmFwc2hvdEJ5S2V5Iiwic3RhcnRzV2l0aCIsInN1YnN0ciIsImdldFNuYXBzaG90QnlLZXkiLCJkZWxldGVTbmFwc2hvdEJ5S2V5IiwicmVwbGFjZSIsInBTdGF0ZSIsIl9yZWYiLCJhY3Rpb24iLCJhcmd6Iiwic3RhY2siLCJiQWN0cyIsInRyaWdnZXIiLCJjYiIsIm9uY2UiLCJ0aGVuIiwicmVhc29uIiwiZW1pdCIsImVycm9yIiwic3RhYmlsaXplclRNIiwiY2xlYXJUaW1lb3V0IiwicHJvcGFnVE0iLCJyZW1hcHMiLCJ3YXNTdGFibGUiLCJpbmRleE9mIiwidW4iLCJkZXN0cm95VE0iLCJyZW1vdmVMaXN0ZW5lciIsImZvbGxvd2VyIiwiX3JtQ2hpbGQiLCJpc1Byb3RvdHlwZU9mIiwidmFsdWUiLCJpc0tleSIsImZpbHRlciIsIkVtaXR0ZXIiLCJfZXZlbnRzIiwiZXZ0IiwiVGFza1NlcXVlbmNlciIsIm9ialByb3RvIiwiZ2V0UHJvdG90eXBlT2YiLCJfc3RhdGljIiwic2NvcGUiLCJnZXRTY29wZSIsInN0YXRpY1Njb3BlIiwid2F0Y2hzIiwidXNlIiwiYXBwbHkiLCJpbml0aWFsU3RhdGUiLCJkZWZhdWx0U3RhdGUiLCJhcHBsaWVkIiwiX3VpZCIsIl9vblN0YWJpbGl6ZSIsIl9wZXJzaXN0ZW5jZVRtIiwiX2NmZyIsInNjb3BlT2JqIiwiJHNjb3BlIiwiJHN0b3JlcyIsIiRhY3Rpb25zIiwiJGRpc3BhdGNoIiwiX3JldnMiLCJfcmVxdWlyZSIsIl9zb3VyY2VzIiwiX3VzZSIsIm1hdGNoIiwicmVmMiIsIl9mb2xsb3dlcnMiLCJfY2hhbmdlc1NXIiwiX2FmdGVyQ29uc3RydWN0b3IiLCJpbml0aWFsRGF0YSIsInNob3VsZEFwcGx5IiwibWFuYWdlZCIsIm5EYXRhcyIsInIiLCJjRGF0YXMiLCJpc0NvbXBsZXRlIiwiZm9sbG93IiwiY2FsbCIsImNoYW5nZXMiLCJyZWZpbmUiLCJfX3Byb3RvX18iLCJfc3RhYmlsaXplciIsInB1c2hUYXNrIiwibnMiLCJkb1dhaXQiLCJvcmlnaW4iLCJpbml0aWFsT3V0cHV0cyIsInMiLCJoYXNEYXRhQ2hhbmdlIiwic3RhYmxlIiwibmV4dFN0YXRlIiwiX25leHRTdGF0ZSIsIm5leHREYXRhIiwic3luYyIsImNoYW5nZSIsInB1c2hTdGF0ZSIsInN0YWJpbGl6ZSIsInNJZCIsIl9rZXkiLCJkZWZhdWx0TmFtZSIsIm51bWJlciIsImltbWVkaWF0ZSIsInByZXZpb3VzIiwibWUiLCJzaG91bGRQcm9wYWciLCJfZGVzdHJveVRNIiwicmVtb3ZlQWxsTGlzdGVuZXJzIiwiY1N0b3JlIiwidGFyZ2V0UmV2cyIsInRhcmdldFNjb3BlIiwibyIsImN1cldlaWdodCIsIm1heFdlaWdodCIsIm1pbldlaWdodCIsInRhc2tDb3VudCIsImRlU3luYyIsImRlU3luY01heFRhc2tzIiwidGFzayIsImlzUnVubmluZyIsImVycm9yQ2F0Y2hlciIsImxhc3RFcnJvciIsImRpc2FibGUiLCJoYW5kbGVFcnJvciIsInJ1bk5vdyIsImVuYWJsZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJwcm9jZXNzIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJ1biIsImZyb20iLCJEYXRlIiwibm93Iiwid2VpZ2h0IiwiTWF0aCIsIm1heCIsIm1pbiIsInNjb3BhYmxlcyIsImhhbmRsZSIsIm1lbWJlciIsInN0YXRlU2NvcGUiLCJpc1Njb3BhYmxlVHlwZSIsIkNvbXAiLCJhcHBseVNjb3BhYmxlVHlwZSIsImFyZ3oyIl0sIm1hcHBp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O0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLE1BQU07QUFDakIsYUFBWSxRQUFRO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxNQUFNO0FBQ2pCLGFBQVksUUFBUTtBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsTUFBTTtBQUNqQixhQUFZLFFBQVE7QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxNQUFNO0FBQ2pCLGFBQVksUUFBUTtBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxNQUFNO0FBQ2pCLGFBQVksUUFBUTtBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsTUFBTTtBQUNqQixhQUFZLFFBQVE7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsTUFBTTtBQUNqQixhQUFZLFFBQVE7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsTUFBTTtBQUNqQixhQUFZLFFBQVE7QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLE1BQU07QUFDakIsYUFBWSxRQUFRO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxNQUFNO0FBQ2pCLGFBQVksUUFBUTtBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7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RUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ2pHQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ3hCQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUNsQkE7O0FBRUEsK0VBQThFOztBQUU5RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDYkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUNoQkE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FB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a0JBQWtCcEksS0FBTSxDQUFOLENBQWxCLEVBQTZCQSxLQUFLdEYsS0FBTCxDQUFXLENBQVgsQ0FBN0IsRUFBNEMsS0FBNUMsRUFBbUQsSUFBbkQsQ0FBUDtBQUNIOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztTQUlJakgsZSxHQUFBQSxlO1NBQ0FILE8sR0FBQUEsTztTQUNBQyxZLEdBQUFBLFkiLCJmaWxlIjoiLi4vLi4vZGlzdC9SZVNjb3BlLmJyb3dzZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNDI0Nzg0MGZmYWY4Y2EyNTU3ZmUiLCIvKlxuICogQ29weXJpZ2h0IChjKSAgMjAxOCBXaXNlIFdpbGQgV2ViIC5cbiAqXG4gKiAgTUlUIExpY2Vuc2VcbiAqXG4gKiAgUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqICBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiAgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuICogIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqICBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqICBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqICBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiAgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqICBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuICogIFNPRlRXQVJFLlxuICpcbiAqIEBhdXRob3IgOiBOYXRoYW5hZWwgQnJhdW5cbiAqIEBjb250YWN0IDogY2FpcGlsYWJzQGdtYWlsLmNvbVxuICovXG5cbmxldCAkZ2xvYmFsID0gKCB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyApID8gd2luZG93IDogZ2xvYmFsO1xuXG5pbXBvcnQgU2NvcGUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gXCIuL1Njb3BlXCI7XG5pbXBvcnQgU3RvcmUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gXCIuL1N0b3JlXCI7XG5pbXBvcnQgeyBhZGRTY29wYWJsZVR5cGUsIHJlU2NvcGUsIHNjb3BlVG9TdGF0ZSB9IGZyb20gXCIuL3V0aWxzL3Njb3BhYmxlXCI7XG5cbmNvbnN0IFJTID0gJGdsb2JhbC5fX19yZXNjb3BlIHx8IHt9O1xuaWYgKCAkZ2xvYmFsLl9fX3Jlc2NvcGUgKSB7XG4gICAgY29uc29sZS53YXJuKFwiUmVTY29wZSBpcyBkZWZpbmVkIG11bHRpcGxlIHRpbWVzICEhIFxcbkNoZWNrIHlvdSdyZSBwYWNrYWdpbmdcIilcbn1cbmVsc2Uge1xuICAgIFxuICAgICRnbG9iYWwuX19fcmVzY29wZSA9IFJTO1xuICAgIFNjb3BlLlN0b3JlICAgICAgICA9IFN0b3JlO1xuICAgIC8vUlMuY29uc29sZSAgICAgICAgID0gY29uc29sZTtcbiAgICBSUy5TY29wZSAgICAgICAgICAgPSBTY29wZTtcbiAgICBSUy5Db250ZXh0ICAgICAgICAgPSBTY29wZTtcbiAgICBSUy5TdG9yZSAgICAgICAgICAgPSBTdG9yZTtcbiAgICBSUy5yZVNjb3BlICAgICAgICAgPSByZVNjb3BlO1xuICAgIFJTLnNjb3BlVG9TdGF0ZSAgICA9IHNjb3BlVG9TdGF0ZTtcbiAgICBSUy5yZVNjb3BlU3RhdGUgICAgPSBzY29wZVRvU3RhdGU7XG4gICAgUlMuYWRkU2NvcGFibGVUeXBlID0gYWRkU2NvcGFibGVUeXBlO1xuICAgIFJTLnNjb3BlUmVmICAgICAgICA9XG4gICAgICAgIGZ1bmN0aW9uIHNjb3BlUmVmKCBtYXAsIGtleSApIHtcbiAgICAgICAgICAgIG1hcFsga2V5IF0gPSBuZXcgU2NvcGUuc2NvcGVSZWYobWFwWyBrZXkgXSk7XG4gICAgICAgICAgICByZXR1cm4gbWFwO1xuICAgICAgICB9O1xuICAgIFxufVxuZXhwb3J0IGRlZmF1bHQgUlM7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LmpzIiwiLypcbiAqIENvcHlyaWdodCAoYykgIDIwMTggV2lzZSBXaWxkIFdlYiAuXG4gKlxuICogIE1JVCBMaWNlbnNlXG4gKlxuICogIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqICBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiAgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqICBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqICBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqICBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcbiAqICBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqICBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiAgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiAgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiAgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiAgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcbiAqICBTT0ZUV0FSRS5cbiAqXG4gKiBAYXV0aG9yIDogTmF0aGFuYWVsIEJyYXVuXG4gKiBAY29udGFjdCA6IGNhaXBpbGFic0BnbWFpbC5jb21cbiAqL1xuXG5cbnZhciBpcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL3V0aWxzL2lzJyksXG4gICAgeyB3YWxrblNldCwgd2Fsa25HZXQsIGtleVdhbGtuU2V0LCBrZXlXYWxrbkdldCB9ID0gcmVxdWlyZSgnLi91dGlscy91dGlscycpLFxuICAgIEV2ZW50RW1pdHRlciAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vdXRpbHMvRW1pdHRlcicpLFxuICAgIHNob3J0aWQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJ3Nob3J0aWQnKVxuXHQsIF9fcHJvdG9fX3B1c2ggICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSAoIHRhcmdldCwgaWQsIHBhcmVudCApID0+IHtcblx0ICAgIGxldCBmbiAgICAgICA9IGZ1bmN0aW9uICgpIHtcblx0ICAgIH07XG5cdCAgICBmbi5wcm90b3R5cGUgPSBwYXJlbnQgPyBuZXcgcGFyZW50Ll9baWRdKCkgOiB0YXJnZXRbaWRdIHx8IHt9O1xuXHQgICAgdGFyZ2V0W2lkXSAgID0gbmV3IGZuKCk7XG5cdCAgICB0YXJnZXQuX1tpZF0gPSBmbjtcbiAgICB9LFxuXHRvcGVuU2NvcGVzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSB7fSxcblx0U2ltcGxlT2JqZWN0UHJvdG8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID0gKHt9KS5jb25zdHJ1Y3RvcjtcblxuLyoqXG4gKiBCYXNlIFNjb3BlIG9iamVjdFxuICovXG5jbGFzcyBTY29wZSBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG5cdHN0YXRpYyBnZXRTY29wZSggc2NvcGVzICkge1xuXHRcdGxldCBza2V5ID0gaXMuYXJyYXkoc2NvcGVzKSA/IHNjb3Blcy5zb3J0KCggYSwgYiApID0+IHtcblx0XHRcdGlmICggYS5maXJzdG5hbWUgPCBiLmZpcnN0bmFtZSApIHJldHVybiAtMTtcblx0XHRcdGlmICggYS5maXJzdG5hbWUgPiBiLmZpcnN0bmFtZSApIHJldHVybiAxO1xuXHRcdFx0cmV0dXJuIDA7XG5cdFx0fSkuam9pbignKycpIDogc2NvcGVzO1xuXHRcdHJldHVybiBvcGVuU2NvcGVzW3NrZXldID0gb3BlblNjb3Blc1tza2V5XSB8fCBuZXcgU2NvcGUoe30sIHsgaWQ6IHNrZXkgfSk7XG5cdH07XG5cdFxuXHRcblx0LyoqXG5cdCAqIGdldCBhIHBhcnNlZCByZWZlcmVuY2UgbGlzdCBmcm9tIHN0YXRlTWFwXG5cdCAqIEBwYXJhbSBfcmVmXG5cdCAqIEByZXR1cm5zIHt7c3RvcmVJZCwgcGF0aCwgYWxpYXM6ICosIHJlZjogKn19XG5cdCAqL1xuXHRzdGF0aWMgc3RhdGVNYXBUb1JlZkxpc3QoIHNtLCBzdGF0ZSA9IHt9LCBfcmVmcyA9IFtdLCBhY3Rpb25zID0ge30sIHBhdGggPSBcIlwiICkge1xuXHRcdGxldCBhcHBsaWVyO1xuXHRcdE9iamVjdC5rZXlzKHNtKS5mb3JFYWNoKFxuXHRcdFx0a2V5ID0+IHtcblx0XHRcdFx0bGV0IGNwYXRoID0gcGF0aCA/IHBhdGggKyAnLicgKyBrZXkgOiBrZXk7XG5cdFx0XHRcdFxuXHRcdFx0XHRzbVtrZXldIGluc3RhbmNlb2YgU2NvcGUuc2NvcGVSZWZcblx0XHRcdFx0PyBfcmVmcy5wdXNoKHNtW2tleV0ucGF0aCArICc6JyArIGNwYXRoKVxuXHRcdFx0XHQ6IChzbVtrZXldICYmIHNtW2tleV0gaW5zdGFuY2VvZiBGdW5jdGlvbilcblx0XHRcdFx0ICA/IGtleSA9PSBcIiRhcHBseVwiXG5cdFx0XHRcdCAgICA/IGFwcGxpZXIgPSBzbVtrZXldXG5cdFx0XHRcdCAgICA6IGFjdGlvbnNba2V5XSA9IHNtW2tleV1cblx0XHRcdFx0ICA6IChzbVtrZXldICYmIHNtW2tleV0ucHJvdG90eXBlIGluc3RhbmNlb2YgU2NvcGUuU3RvcmUpXG5cdFx0XHRcdCAgICA/IF9yZWZzLnB1c2goc21ba2V5XS5hcyhjcGF0aCkpXG5cdFx0XHRcdCAgICA6IHN0YXRlW2NwYXRoXSA9IHNtW2tleV1cblx0XHRcdFx0Ly86IHRoaXMuc3RhdGVNYXBUb1JlZkxpc3Qoc21ba2V5XSwgX3JlZnMsIHBhdGggKyAnLicgKyBrZXkpXG5cdFx0XHR9XG5cdFx0KVxuXHRcdHJldHVybiBhcHBsaWVyO1xuXHR9XG5cdFxuXHRzdGF0aWMgcGVyc2lzdGVuY2VUbSA9IDE7Ly8gaWYgPiAwLCB3aWxsIHdhaXQgJ3BlcnNpc3RlbmNlVG0nIG1zIGJlZm9yZSBkZXN0cm95XG5cdC8vIHdoZW5cblx0Ly8gZGlzcG9zZSByZWFjaCAwXG5cdHN0YXRpYyBTdG9yZSAgICA9IG51bGw7XG5cdHN0YXRpYyBzY29wZVJlZiA9IGZ1bmN0aW9uIHNjb3BlUmVmKCBwYXRoICkge1xuXHRcdHRoaXMucGF0aCA9IHBhdGg7XG5cdH07XG5cdHN0YXRpYyBzY29wZXMgICA9IG9wZW5TY29wZXM7Ly8gYWxsIGFjdGl2ZSBzY29wZXNcblx0XG5cdFxuXHQvKipcblx0ICogSW5pdCBhIFJlU2NvcGUgc2NvcGVcblx0ICpcblx0ICogQHBhcmFtIHN0b3Jlc01hcCB7T2JqZWN0fSBPYmplY3Qgd2l0aCB0aGUgaW5pdGlhbCBzdG9yZXMgZGVmaW5pdGlvbiAvIGluc3RhbmNlc1xuXHQgKiBAcGFyYW0gY29uZmlnIHtPYmplY3R9IFNjb3BlIGNvbmZpZ1xuXHQgKiB7XG5cdCAqICBwYXJlbnQge3Njb3BlfSBAb3B0aW9uYWwgcGFyZW50IHNjb3BlXG5cdCAqXG5cdCAqICBpZCB7c3RyaW5nfSBAb3B0aW9uYWwgaWQgKCBpZiB0aGlzIGlkIGV4aXN0IHN0b3Jlc01hcCB3aWxsIGJlIG1lcmdlIG9uIHRoZSAnaWQnXG5cdCAqICAgICBzY29wZSkga2V5IHtzdHJpbmd9IEBvcHRpb25hbCBrZXkgb2YgdGhlIHNjb3BlICggaWYgbm8gaWQgaXMgc2V0LCB0aGUgc2NvcGUgaWRcblx0ICogICAgIHdpbGwgYmUgKHBhcmVudC5pZCsnPicra2V5KSBpbmNyZW1lbnRJZCB7Ym9vbH0gQG9wdGlvbmFsIHRydWUgdG8gYWRkIGEgc3VmZml4XG5cdCAqICAgICBpZCwgaWYgdGhlIHByb3ZpZGVkIGtleSBvciBpZCBnbG9iYWxseSBleGlzdFxuXHQgKlxuXHQgKiAgc3RhdGUge09iamVjdH0gQG9wdGlvbmFsIGluaXRpYWwgc3RhdGUgYnkgc3RvcmUgYWxpYXNcblx0ICogIGRhdGEge09iamVjdH0gQG9wdGlvbmFsIGluaXRpYWwgZGF0YSBieSBzdG9yZSBhbGlhc1xuXHQgKlxuXHQgKiAgcm9vdEVtaXR0ZXIge2Jvb2x9IEBvcHRpb25hbCB0cnVlIHRvIG5vdCBiZWluZyBkZXN0YWJpbGl6ZWQgYnkgcGFyZW50XG5cdCAqICBib3VuZGVkQWN0aW9ucyB7YXJyYXkgfCByZWdleHB9IEBvcHRpb25hbCBsaXN0IG9yIHJlZ2V4cCBvZiBhY3Rpb25zIG5vdFxuXHQgKiAgICAgcHJvcGFnYXRlZCB0byB0aGUgcGFyZW50XG5cdCAqXG5cdCAqICBwZXJzaXN0ZW5jZVRtIHtudW1iZXIpIGlmID4gMCwgd2lsbCB3YWl0ICdwZXJzaXN0ZW5jZVRtJyBtcyBiZWZvcmUgZGVzdHJveSB3aGVuXG5cdCAqICAgICBkaXNwb3NlIHJlYWNoIDAgYXV0b0Rlc3Ryb3kgIHtib29sfSB3aWxsIHRyaWdnZXIgcmV0YWluICYgZGlzcG9zZSBhZnRlciBzdGFydFxuXHQgKiAgfVxuXHQgKiBAcmV0dXJucyB7U2NvcGV9XG5cdCAqL1xuXHRjb25zdHJ1Y3Rvciggc3RvcmVzTWFwLCB7IHBhcmVudCwgdXBwZXJTY29wZSwga2V5LCBpZCwgc25hcHNob3QsIHN0YXRlLCBkYXRhLCBpbmNyZW1lbnRJZCA9ICEha2V5LCBwZXJzaXN0ZW5jZVRtLCBhdXRvRGVzdHJveSwgcm9vdEVtaXR0ZXIsIGJvdW5kZWRBY3Rpb25zIH0gPSB7fSApIHtcblx0XHRzdXBlcigpO1xuXHRcdHZhciBfID0ge1xuXHRcdFx0a2V5UElEOiAodXBwZXJTY29wZSAmJiB1cHBlclNjb3BlLl9pZCB8fCBwYXJlbnQgJiYgcGFyZW50Ll9pZCB8fCBzaG9ydGlkLmdlbmVyYXRlKCkpLFxuXHRcdFx0a2V5LFxuXHRcdFx0aW5jcmVtZW50SWQsXG5cdFx0XHRiYXNlSWQ6IGlkXG5cdFx0fSwga2V5SW5kZXg7XG5cdFx0XG5cdFx0aWQgPSBpZCB8fCBrZXkgJiYgKF8ua2V5UElEICsgJz4nICsga2V5KTtcblx0XHRcblx0XHRfLmlzTG9jYWxJZCA9ICFpZDtcblx0XHRcblx0XHQvL2lmICggcGFyZW50ICYmIGtleSApIHtcblx0XHQvLyAgICBrZXlJbmRleCA9IHBhcmVudC5fLmNoaWxkU2NvcGVzLmZpbmQoY3R4PT4oY3R4Ll9pZD09aWQpKTtcblx0XHQvLyAgICBpZiAoIGtleUluZGV4ID09IC0xICkga2V5SW5kZXggPSBwYXJlbnQuXy5zZWVuQ2hpbGRzO1xuXHRcdC8vICAgIGtleUluZGV4Kys7XG5cdFx0Ly8gICAgaWYgKCBrZXlJbmRleCApXG5cdFx0Ly8gICAgICAgIGlkID0gaWQgKyAnWycgKyBrZXlJbmRleCArICddJztcblx0XHQvL31cblx0XHRcblx0XHRpZCA9IGlkIHx8IChcIl9fX19fXCIgKyBzaG9ydGlkLmdlbmVyYXRlKCkpO1xuXHRcdFxuXHRcdFxuXHRcdGlmICggb3BlblNjb3Blc1tpZF0gJiYgIWluY3JlbWVudElkICkgey8vIG92ZXJ3cml0ZSBleGlzdGluZyBzY29wZVxuXHRcdFx0dGhpcy5faWQgPSBpZDtcblx0XHRcdG9wZW5TY29wZXNbaWRdLnJlZ2lzdGVyKHN0b3Jlc01hcCk7XG5cdFx0XHRyZXR1cm4gb3BlblNjb3Blc1tpZF1cblx0XHR9XG5cdFx0ZWxzZSBpZiAoIG9wZW5TY29wZXNbaWRdICYmIGluY3JlbWVudElkICkgey8vIGdlbmVyYXRlIGtleSBpZFxuXHRcdFx0bGV0IGkgPSAtMTtcblx0XHRcdHdoaWxlICggb3BlblNjb3Blc1tpZCArICdbJyArICgrK2kpICsgJ10nXSApIDtcblx0XHRcdGlkID0gaWQgKyAnWycgKyBpICsgJ10nO1xuXHRcdH1cblx0XHRcblx0XHR0aGlzLl9pZCAgICAgICAgPSBpZDtcblx0XHR0aGlzLl9yZXYgICAgICAgPSAwO1xuXHRcdG9wZW5TY29wZXNbaWRdICA9IHRoaXM7XG5cdFx0Xy5wZXJzaXN0ZW5jZVRtID0gcGVyc2lzdGVuY2VUbSB8fCB0aGlzLmNvbnN0cnVjdG9yLnBlcnNpc3RlbmNlVG07XG5cdFx0XG5cdFx0dGhpcy5hY3Rpb25zID0ge307XG5cdFx0dGhpcy5zdG9yZXMgID0ge307XG5cdFx0dGhpcy5zdGF0ZSAgID0ge307XG5cdFx0dGhpcy5kYXRhICAgID0ge307XG5cdFx0XG5cdFx0dGhpcy5wYXJlbnQgICAgICAgPSBwYXJlbnQ7XG5cdFx0dGhpcy5fICAgICAgICAgICAgPSBfO1xuXHRcdHRoaXMuX2F1dG9EZXN0cm95ID0gYXV0b0Rlc3Ryb3k7XG5cdFx0XG5cdFx0aWYgKCBwYXJlbnQgJiYgcGFyZW50LmRlYWQgKVxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiQ2FuJ3QgdXNlIGEgZGVhZCBzY29wZSBhcyBwYXJlbnQgIVwiKTtcblx0XHRcblx0XHRfX3Byb3RvX19wdXNoKHRoaXMsICdhY3Rpb25zJywgcGFyZW50KTtcblx0XHRfX3Byb3RvX19wdXNoKHRoaXMsICdzdG9yZXMnLCBwYXJlbnQpO1xuXHRcdF9fcHJvdG9fX3B1c2godGhpcywgJ3N0YXRlJywgcGFyZW50KTtcblx0XHRfX3Byb3RvX19wdXNoKHRoaXMsICdkYXRhJywgcGFyZW50KTtcblx0XHRcblx0XHR0aGlzLnNvdXJjZXMgICAgICA9IFtdO1xuXHRcdF8uY2hpbGRTY29wZXMgICAgID0gW107XG5cdFx0Xy5jaGlsZFNjb3Blc0xpc3QgPSBbXTtcblx0XHRfLnVuU3RhYmxlQ2hpbGRzICA9IDA7XG5cdFx0Xy5zZWVuQ2hpbGRzICAgICAgPSAwO1xuXHRcdFxuXHRcdHRoaXMuX19yZXRhaW5zID0geyBhbGw6IDAgfTtcblx0XHR0aGlzLl9fbG9ja3MgICA9IHsgYWxsOiAxIH07XG5cdFx0XG5cdFx0Ly9fLnNuYXBzaG90ICAgICAgICA9IHNuYXBzaG90O1xuXHRcdC8vXy5zbmFwc2hvdCAgICAgICAgPSBzbmFwc2hvdDtcblx0XHRfLl9ib3VuZGVkQWN0aW9ucyA9IGlzLmFycmF5KGJvdW5kZWRBY3Rpb25zKVxuXHRcdCAgICAgICAgICAgICAgICAgICAgPyB7IHRlc3Q6IGJvdW5kZWRBY3Rpb25zLmluY2x1ZGVzLmJpbmQoYm91bmRlZEFjdGlvbnMpIH1cblx0XHQgICAgICAgICAgICAgICAgICAgIDogYm91bmRlZEFjdGlvbnM7XG5cdFx0Xy5fbGlzdGVuaW5nICAgICAgPSB7fTtcblx0XHRfLl9zY29wZSAgICAgICAgICA9IHt9O1xuXHRcdF8uX21peGVkICAgICAgICAgID0gW107XG5cdFx0Xy5fbWl4ZWRMaXN0ICAgICAgPSBbXTtcblx0XHRfLmZvbGxvd2VycyAgICAgICA9IFtdO1xuXHRcdGlmICggcGFyZW50ICkge1xuXHRcdFx0cGFyZW50LnJldGFpbihcImlzTXlQYXJlbnRcIik7XG5cdFx0XHRpZiAoICFyb290RW1pdHRlciApIHtcblx0XHRcdFx0IXBhcmVudC5fc3RhYmxlICYmIHRoaXMud2FpdChcIndhaXRpbmdQYXJlbnRcIik7XG5cdFx0XHRcdHBhcmVudC5vbihfLl9wYXJlbnRMaXN0ID0ge1xuXHRcdFx0XHRcdCdzdGFibGUnICA6IHMgPT4gdGhpcy5yZWxlYXNlKFwid2FpdGluZ1BhcmVudFwiKSxcblx0XHRcdFx0XHQndW5zdGFibGUnOiBzID0+IHRoaXMud2FpdChcIndhaXRpbmdQYXJlbnRcIiksXG5cdFx0XHRcdFx0J3VwZGF0ZScgIDogcyA9PiB0aGlzLl9wcm9wYWcoKVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHRwYXJlbnQub24oXy5fcGFyZW50TGlzdCA9IHtcblx0XHRcdFx0XHQndXBkYXRlJzogcyA9PiB0aGlzLl9wcm9wYWcoKVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHRcdC8vIHRoaXMucmVnaXN0ZXIocGFyZW50Ll9fc2NvcGUsIHN0YXRlLCBkYXRhKTtcblx0XHR9XG5cdFx0XG5cdFx0XG5cdFx0dGhpcy5yZWdpc3RlcihzdG9yZXNNYXAsIHN0YXRlLCBkYXRhKTtcblx0XHR0aGlzLl9fbG9ja3MuYWxsLS07XG5cdFx0dGhpcy5fc3RhYmxlID0gIXRoaXMuX19sb2Nrcy5hbGw7XG5cdFx0XG5cdFx0aWYgKCBwYXJlbnQgKSB7XG5cdFx0XHRwYXJlbnQuX2FkZENoaWxkKHRoaXMpO1xuXHRcdH1cblx0XHRcblx0XHR0aGlzLnJlc3RvcmUoc25hcHNob3QpO1xuXHRcdFxuXHRcdGlmICggYXV0b0Rlc3Ryb3kgKVxuXHRcdFx0c2V0VGltZW91dChcblx0XHRcdFx0dG0gPT4ge1xuXHRcdFx0XHRcdHRoaXMucmV0YWluKFwiYXV0b0Rlc3Ryb3lcIik7XG5cdFx0XHRcdFx0dGhpcy5kaXNwb3NlKFwiYXV0b0Rlc3Ryb3lcIik7XG5cdFx0XHRcdH1cblx0XHRcdClcblx0XHRcblx0fVxuXHRcblx0LyoqXG5cdCAqXG5cdCAqIE1vdW50IHRoZSBzdG9yZXMgaW4gc3RvcmVzTGlzdCwgaW4gdGhpcyBzY29wZSBvciBpbiBpdHMgcGFyZW50cyBvciBtaXhlZCBzY29wZXNcblx0ICpcblx0ICogQHBhcmFtIHN0b3Jlc0xpc3Qge3N0cmluZ3xzdG9yZVJlZn0gU3RvcmUgbmFtZSwgQXJyYXkgb2YgU3RvcmUgbmFtZXMsIG9yIFJlc2NvcGVcblx0ICogICAgIHN0b3JlIHJlZiBmcm9tIFN0b3JlOjphcyBvciBTdG9yZTphc1xuXHQgKiBAcGFyYW0gc3RhdGVcblx0ICogQHBhcmFtIGRhdGFcblx0ICogQHJldHVybnMge1Njb3BlfVxuXHQgKi9cblx0bW91bnQoIHN0b3Jlc0xpc3QsIHNuYXBzaG90LCBzdGF0ZSwgZGF0YSApIHtcblx0XHRpZiAoIGlzLmFycmF5KHN0b3Jlc0xpc3QpICkge1xuXHRcdFx0c3RvcmVzTGlzdC5mb3JFYWNoKGsgPT4gdGhpcy5fbW91bnQoaywgc25hcHNob3QsIHN0YXRlLCBkYXRhKSk7XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0dGhpcy5fbW91bnQoLi4uYXJndW1lbnRzKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblx0XG5cdF9tb3VudCggaWQsIHNuYXBzaG90LCBzdGF0ZSwgZGF0YSApIHtcblx0XHRsZXQgcmVmLCBzbmFwO1xuXHRcdFxuXHRcdHJlZiA9IHRoaXMucGFyc2VSZWYoaWQpXG5cdFx0XG5cdFx0aWYgKCBpZCA9PSBcIiRwYXJlbnRcIiApIHJldHVybjtcblx0XHRpZiAoICF0aGlzLl8uX3Njb3BlW3JlZi5zdG9yZUlkXSApIHsvL2FzayBtaXhlZCB8fCBwYXJlbnRcblx0XHRcdGlmICggdGhpcy5fLl9taXhlZC5yZWR1Y2VSaWdodCgoIG1vdW50ZWQsIGN0eCApID0+IChtb3VudGVkIHx8IGN0eC5fbW91bnQoaWQsIHNuYXBzaG90LCBzdGF0ZSwgZGF0YSkpLCBmYWxzZSkgfHxcblx0XHRcdFx0IXRoaXMucGFyZW50IClcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0cmV0dXJuIHRoaXMucGFyZW50Ll9tb3VudCguLi5hcmd1bWVudHMpO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdGxldCBzdG9yZSA9IHRoaXMuXy5fc2NvcGVbcmVmLnN0b3JlSWRdLCB0YXNrUXVldWUgPSBbXTtcblx0XHRcdGlmICggaXMucnNTdG9yZUNsYXNzKHN0b3JlKSApIHtcblx0XHRcdFx0dGhpcy5fLl9zY29wZVtyZWYuc3RvcmVJZF0gPSBuZXcgc3RvcmUodGhpcywge1xuXHRcdFx0XHRcdC8vc25hcHNob3QsXG5cdFx0XHRcdFx0bmFtZTogcmVmLnN0b3JlSWQsXG5cdFx0XHRcdFx0c3RhdGUsXG5cdFx0XHRcdFx0ZGF0YVxuXHRcdFx0XHR9LCB0YXNrUXVldWUpO1xuXHRcdFx0XHR3aGlsZSAoIHRhc2tRdWV1ZS5sZW5ndGggKSB0YXNrUXVldWUuc2hpZnQoKSgpO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSBpZiAoIGlzLnJzU2NvcGVDbGFzcyhzdG9yZSkgKSB7XG5cdFx0XHRcdHN0b3JlID0gdGhpcy5fLl9zY29wZVtyZWYuc3RvcmVJZF0gPSBuZXcgc3RvcmUoeyAkcGFyZW50OiB0aGlzIH0sIHtcblx0XHRcdFx0XHRrZXkgICAgICAgIDogcmVmLnN0b3JlSWQsXG5cdFx0XHRcdFx0aW5jcmVtZW50SWQ6IHRydWUsXG5cdFx0XHRcdFx0dXBwZXJTY29wZSA6IHRoaXNcblx0XHRcdFx0XHQvL2F1dG9EZXN0cm95OiB0cnVlXG5cdFx0XHRcdFx0Ly9wYXJlbnQ6IHRoaXNcblx0XHRcdFx0fSk7XG5cdFx0XHRcdC8vdGhpcy5fLl9zY29wZVsgcmVmLnN0b3JlSWQgXS5yZXRhaW4oXCJzY29wZWRDaGlsZFNjb3BlXCIpO1xuXHRcdFx0XHQvL3RoaXMuX3dhdGNoU3RvcmUocmVmLnN0b3JlSWQpO1xuXHRcdFx0XHRpZiAoIHJlZi5wYXRoLmxlbmd0aCA+IDEgKVxuXHRcdFx0XHRcdHRoaXMuXy5fc2NvcGVbcmVmLnN0b3JlSWRdLm1vdW50KHJlZi5wYXRoLnNsaWNlKDEpLmpvaW4oJy4nKSwgc25hcHNob3QsIHN0YXRlLCBkYXRhKVxuXHRcdFx0XHQvL2Vsc2UgcmV0dXJuIHRoaXMuXy5fc2NvcGVbIHJlZi5zdG9yZUlkIF07XG5cdFx0XHR9XG5cdFx0XHRpZiAoIGlzLnJzU3RvcmUoc3RvcmUpICkge1xuXHRcdFx0XHRpZiAoIHN0YXRlICE9PSB1bmRlZmluZWQgJiYgZGF0YSA9PT0gdW5kZWZpbmVkIClcblx0XHRcdFx0XHRzdG9yZS5zZXRTdGF0ZShzdGF0ZSk7XG5cdFx0XHRcdGVsc2UgaWYgKCBzdGF0ZSAhPT0gdW5kZWZpbmVkIClcblx0XHRcdFx0XHRzdG9yZS5zdGF0ZSA9IHN0YXRlO1xuXHRcdFx0XHRcblx0XHRcdFx0aWYgKCBkYXRhICE9PSB1bmRlZmluZWQgKVxuXHRcdFx0XHRcdHN0b3JlLnB1c2goZGF0YSk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLl93YXRjaFN0b3JlKHJlZi5zdG9yZUlkKTtcblx0XHR9XG5cdFx0XG5cdFx0XG5cdFx0cmV0dXJuIHRoaXMuXy5fc2NvcGVbcmVmLnN0b3JlSWRdO1xuXHR9XG5cdFxuXHRfd2F0Y2hTdG9yZSggaWQsIHN0YXRlLCBkYXRhICkge1xuXHRcdGlmICggIXRoaXMuXy5fbGlzdGVuaW5nW2lkXSAmJiAhaXMuZm4odGhpcy5fLl9zY29wZVtpZF0pICkge1xuXHRcdFx0Ly9pZiAoIGlzLnJzU3RvcmUodGhpcy5fLl9zY29wZVsgaWQgXSkgKSB7XG5cdFx0XHQhdGhpcy5fLl9zY29wZVtpZF0uX2F1dG9EZXN0cm95ICYmIHRoaXMuXy5fc2NvcGVbaWRdLnJldGFpbihcInNjb3BlZFwiKTtcblx0XHRcdCF0aGlzLl8uX3Njb3BlW2lkXS5pc1N0YWJsZSgpICYmIHRoaXMud2FpdChpZCk7XG5cdFx0XHR0aGlzLl8uX3Njb3BlW2lkXS5vbihcblx0XHRcdFx0dGhpcy5fLl9saXN0ZW5pbmdbaWRdID0ge1xuXHRcdFx0XHRcdCdkZXN0cm95JyA6IHMgPT4ge1xuXHRcdFx0XHRcdFx0ZGVsZXRlIHRoaXMuXy5fbGlzdGVuaW5nW2lkXTtcblx0XHRcdFx0XHRcdHRoaXMuXy5fc2NvcGVbaWRdID0gdGhpcy5fLl9zY29wZVtpZF0uY29uc3RydWN0b3I7XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHQndXBkYXRlJyAgOiBzID0+IHRoaXMucHJvcGFnKCksXG5cdFx0XHRcdFx0J3N0YWJsZScgIDogcyA9PiB0aGlzLnJlbGVhc2UoaWQpLFxuXHRcdFx0XHRcdCd1bnN0YWJsZSc6IHMgPT4gdGhpcy53YWl0KGlkKVxuXHRcdFx0XHR9KTtcblx0XHR9XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBNaXggdGFyZ2V0Q3R4IG9uIHRoaXMgc2NvcGVcblx0ICogTWl4ZWQgc2NvcGUgcGFyZW50cyBhcmUgTk9UIG1hcHBlZFxuXHQgKiBAcGFyYW0gdGFyZ2V0Q3R4XG5cdCAqL1xuXHRtaXhpbiggdGFyZ2V0Q3R4ICkge1xuXHRcdGxldCBwYXJlbnQgPSB0aGlzLnBhcmVudCwgbGlzdHM7XG5cdFx0XG5cdFx0dGhpcy5fLl9taXhlZC5wdXNoKHRhcmdldEN0eClcblx0XHR0YXJnZXRDdHgucmV0YWluKFwibWl4ZWRUb1wiKTtcblx0XHRpZiAoICF0YXJnZXRDdHguX3N0YWJsZSApXG5cdFx0XHR0aGlzLndhaXQodGFyZ2V0Q3R4Ll9pZCk7XG5cdFx0dGhpcy5fLl9taXhlZExpc3QucHVzaChsaXN0cyA9IHtcblx0XHRcdCdzdGFibGUnICA6IHMgPT4gdGhpcy5yZWxlYXNlKHRhcmdldEN0eC5faWQpLFxuXHRcdFx0J3Vuc3RhYmxlJzogcyA9PiB0aGlzLndhaXQodGFyZ2V0Q3R4Ll9pZCksXG5cdFx0XHQndXBkYXRlJyAgOiBzID0+IHRoaXMuX3Byb3BhZygpXG5cdFx0fSk7XG5cdFx0XG5cdFx0Ly90aGlzLmFjdGlvbnMgPSB7fTtcblx0XHQvL3RoaXMuc3RvcmVzICA9IHt9O1xuXHRcdC8vdGhpcy5zdGF0ZSAgID0ge307XG5cdFx0Ly90aGlzLmRhdGEgICAgPSB7fTtcblx0XHR0YXJnZXRDdHgub24obGlzdHMpO1xuXHRcdFxuXHRcdC8vIHJlc2V0IHByb3Rvc1xuXHRcdC8vIHB1c2ggbmV3IHByb3RvIHdpdGggcGFyZW50XG5cdFx0X19wcm90b19fcHVzaCh0aGlzLCAnYWN0aW9ucycsIHBhcmVudCk7XG5cdFx0X19wcm90b19fcHVzaCh0aGlzLCAnc3RvcmVzJywgcGFyZW50KTtcblx0XHRfX3Byb3RvX19wdXNoKHRoaXMsICdzdGF0ZScsIHBhcmVudCk7XG5cdFx0X19wcm90b19fcHVzaCh0aGlzLCAnZGF0YScsIHBhcmVudCk7XG5cdFx0Ly8gcHJpbnQgbG9jYWx6IGFjY2Vzc29yc1xuXHRcdHRoaXMucmVsaW5rKHRoaXMuXy5fc2NvcGUsIHRoaXMsIGZhbHNlLCB0cnVlKTtcblx0XHRcblx0XHR0aGlzLl8uX21peGVkLmZvckVhY2goXG5cdFx0XHRjdHggPT4ge1xuXHRcdFx0XHQvLyBwdXNoIHByb3Rvc1xuXHRcdFx0XHRfX3Byb3RvX19wdXNoKHRoaXMsICdhY3Rpb25zJyk7XG5cdFx0XHRcdF9fcHJvdG9fX3B1c2godGhpcywgJ3N0b3JlcycpO1xuXHRcdFx0XHRfX3Byb3RvX19wdXNoKHRoaXMsICdzdGF0ZScpO1xuXHRcdFx0XHRfX3Byb3RvX19wdXNoKHRoaXMsICdkYXRhJyk7XG5cdFx0XHRcdHRoaXMuc3RvcmVzLl9fb3JpZ2luID0gXCJtaXhlZCBcIiArIGN0eC5faWQ7XG5cdFx0XHRcdC8vIHdyaXRlIG1peGVkIGFjY2Vzc29yc1xuXHRcdFx0XHRjdHgucmVsaW5rKGN0eC5fLl9zY29wZSwgdGhpcywgdHJ1ZSwgdHJ1ZSlcblx0XHRcdH1cblx0XHQpXG5cdH1cblx0XG5cdC8qKlxuXHQgKiBSZWdpc3RlciBzdG9yZXMgaW4gc3RvcmVzTWFwICYgbGluayB0aGVtIGluIHRoZSBwcm90b3Ncblx0ICogQHBhcmFtIHN0b3Jlc01hcFxuXHQgKiBAcGFyYW0gc3RhdGVcblx0ICogQHBhcmFtIGRhdGFcblx0ICovXG5cdHJlZ2lzdGVyKCBzdG9yZXNNYXAsIHN0YXRlID0ge30sIGRhdGEgPSB7fSApIHtcblx0XHR0aGlzLnJlbGluayhzdG9yZXNNYXAsIHRoaXMsIGZhbHNlLCBmYWxzZSk7XG5cdFx0T2JqZWN0LmtleXMoc3RvcmVzTWFwKS5mb3JFYWNoKFxuXHRcdFx0aWQgPT4ge1xuXHRcdFx0XHRpZiAoIGlkID09IFwiJHBhcmVudFwiICkgcmV0dXJuO1xuXHRcdFx0XHRpZiAoIHN0b3Jlc01hcFtpZF0uc2luZ2xldG9uIHx8IChpcy5mbihzdG9yZXNNYXBbaWRdKSAmJiAoc3RhdGVbaWRdIHx8IGRhdGFbaWRdKSkgKSB7XG5cdFx0XHRcdFx0dGhpcy5fbW91bnQoaWQsIHVuZGVmaW5lZCwgc3RhdGVbaWRdLCBkYXRhW2lkXSlcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlIGlmICggc3RhdGVbaWRdIHx8IGRhdGFbaWRdICkge1xuXHRcdFx0XHRcdGlmICggZGF0YVtpZF0gKSB7XG5cdFx0XHRcdFx0XHRpZiAoIHN0YXRlW2lkXSApXG5cdFx0XHRcdFx0XHRcdHRoaXMuc3RvcmVzW2lkXS5zdGF0ZSA9IHN0YXRlW2lkXTtcblx0XHRcdFx0XHRcdHRoaXMuc3RvcmVzW2lkXS5wdXNoKGRhdGFbaWRdKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZWxzZSBpZiAoIHN0YXRlW2lkXSApIHtcblx0XHRcdFx0XHRcdHRoaXMuc3RvcmVzW2lkXS5zZXRTdGF0ZShzdGF0ZVtpZF0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHR0aGlzLl93YXRjaFN0b3JlKGlkKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdClcblx0XHRcblx0fVxuXHRcblx0LyoqXG5cdCAqIE1hcCBzcmNDdHggc3RvcmUncyBvbiB0YXJnZXRDdHggaGVhZGVycyBwcm90bydzXG5cdCAqIEBwYXJhbSBzcmNDdHhcblx0ICogQHBhcmFtIHRhcmdldEN0eFxuXHQgKiBAcGFyYW0gc3RhdGVcblx0ICogQHBhcmFtIGRhdGFcblx0ICovXG5cdHJlbGluayggc3JjQ3R4LCB0YXJnZXRDdHggPSB0aGlzLCBleHRlcm5hbCwgZm9yY2UgKSB7XG5cdFx0bGV0IGxjdHggPSB0YXJnZXRDdHguXy5zdG9yZXMucHJvdG90eXBlO1xuXHRcdE9iamVjdC5rZXlzKHNyY0N0eClcblx0XHQgICAgICAuZm9yRWFjaChcblx0XHRcdCAgICAgIGlkID0+IHtcblx0XHRcdFx0ICAgICAgaWYgKCAhZm9yY2UgJiYgdGFyZ2V0Q3R4Ll8uX3Njb3BlW2lkXSA9PT0gc3JjQ3R4W2lkXSB8fFxuXHRcdFx0XHRcdCAgICAgIHRhcmdldEN0eC5fLl9zY29wZVtpZF0gJiYgKHRhcmdldEN0eC5fLl9zY29wZVtpZF0uY29uc3RydWN0b3IgPT09IHNyY0N0eFtpZF0pIClcblx0XHRcdFx0XHQgICAgICByZXR1cm47XG5cdFx0XHRcdFxuXHRcdFx0XHQgICAgICBpZiAoICFmb3JjZSAmJiB0YXJnZXRDdHguXy5fc2NvcGVbaWRdICkge1xuXHRcdFx0XHRcdCAgICAgIGlmICggIWV4dGVybmFsICYmICFpcy5mbih0YXJnZXRDdHguXy5fc2NvcGVbaWRdKSApIHtcblx0XHRcdFx0XHRcdCAgICAgIGNvbnNvbGUuaW5mbyhcIlJlc2NvcGUgU3RvcmUgOiBcIiwgaWQsIFwiIGFscmVhZHkgZXhpc3QgaW4gdGhpcyBzY29wZSAhICggSG90IHN3aXRjaGluZyB0aGUgc3RvcmUgKVwiKTtcblx0XHRcdFx0XHRcdCAgICAgIGxldCB0bXAgICAgICAgICAgICAgICAgPSB0YXJnZXRDdHguXy5fc2NvcGVbaWRdO1xuXHRcdFx0XHRcdFx0ICAgICAgdGFyZ2V0Q3R4Ll8uX3Njb3BlW2lkXSA9IHRhcmdldEN0eC5fLl9zY29wZVtpZF0uY29uc3RydWN0b3I7XG5cdFx0XHRcdFx0XHQgICAgICB0aGlzLl9tb3VudChpZCwgbnVsbCwgdG1wLnN0YXRlKTtcblx0XHRcdFx0XHRcdCAgICAgIHRtcC5kZXN0cm95KCk7XG5cdFx0XHRcdFx0XHQgICAgICAvL3RhcmdldEN0eC5fLl9zY29wZVsgaWQgXS5fX3Byb3RvX18gPSB0bXAuX19wcm90b19fO1xuXHRcdFx0XHRcdCAgICAgIH1cblx0XHRcdFx0XHQgICAgICBpZiAoICFleHRlcm5hbCAmJiBpcy5mbih0YXJnZXRDdHguXy5fc2NvcGVbaWRdKSApXG5cdFx0XHRcdFx0XHQgICAgICB0YXJnZXRDdHguXy5fc2NvcGVbaWRdID0gc3JjQ3R4W2lkXTtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHQgICAgICByZXR1cm47XG5cdFx0XHRcdCAgICAgIH1cblx0XHRcdFx0ICAgICAgZWxzZSBpZiAoICFmb3JjZSAmJiAhZXh0ZXJuYWwgKVxuXHRcdFx0XHRcdCAgICAgIHRoaXMuXy5fc2NvcGVbaWRdID0gc3JjQ3R4W2lkXTtcblx0XHRcdFx0XG5cdFx0XHRcdCAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShcblx0XHRcdFx0XHQgICAgICBsY3R4LFxuXHRcdFx0XHRcdCAgICAgIGlkLFxuXHRcdFx0XHRcdCAgICAgIHtcblx0XHRcdFx0XHRcdCAgICAgIGVudW1lcmFibGUgIDogdHJ1ZSxcblx0XHRcdFx0XHRcdCAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcblx0XHRcdFx0XHRcdCAgICAgIGdldCAgICAgICAgIDogKCkgPT4gdGhpcy5fLl9zY29wZVtpZF1cblx0XHRcdFx0XHQgICAgICB9XG5cdFx0XHRcdCAgICAgICk7XG5cdFx0XHRcdCAgICAgIGlmICggaWQgPT0gXCIkcGFyZW50XCIgKSByZXR1cm47XG5cdFx0XHRcdCAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShcblx0XHRcdFx0XHQgICAgICB0YXJnZXRDdHguXy5zdGF0ZS5wcm90b3R5cGUsXG5cdFx0XHRcdFx0ICAgICAgaWQsXG5cdFx0XHRcdFx0ICAgICAge1xuXHRcdFx0XHRcdFx0ICAgICAgZW51bWVyYWJsZSAgOiB0cnVlLFxuXHRcdFx0XHRcdFx0ICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuXHRcdFx0XHRcdFx0ICAgICAgZ2V0ICAgICAgICAgOiAoKSA9PiAodGhpcy5fLl9zY29wZVtpZF0gJiYgdGhpcy5fLl9zY29wZVtpZF0uc3RhdGUpLFxuXHRcdFx0XHRcdFx0ICAgICAgc2V0ICAgICAgICAgOiAoIHYgKSA9PiAodGhpcy5fbW91bnQoaWQsIHVuZGVmaW5lZCwgdikpXG5cdFx0XHRcdFx0ICAgICAgfVxuXHRcdFx0XHQgICAgICApO1xuXHRcdFx0XHQgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoXG5cdFx0XHRcdFx0ICAgICAgdGFyZ2V0Q3R4Ll8uZGF0YS5wcm90b3R5cGUsXG5cdFx0XHRcdFx0ICAgICAgaWQsXG5cdFx0XHRcdFx0ICAgICAge1xuXHRcdFx0XHRcdFx0ICAgICAgZW51bWVyYWJsZSAgOiB0cnVlLFxuXHRcdFx0XHRcdFx0ICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuXHRcdFx0XHRcdFx0ICAgICAgZ2V0ICAgICAgICAgOiAoKSA9PiAodGhpcy5fLl9zY29wZVtpZF0gJiYgdGhpcy5fLl9zY29wZVtpZF0uZGF0YSksXG5cdFx0XHRcdFx0XHQgICAgICBzZXQgICAgICAgICA6ICggdiApID0+ICh0aGlzLl9tb3VudChpZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHYpKVxuXHRcdFx0XHRcdCAgICAgIH1cblx0XHRcdFx0ICAgICAgKTtcblx0XHRcdFx0XG5cdFx0XHRcdCAgICAgIGxldCBhY3Rpb25zICAgICAgID0gc3JjQ3R4W2lkXSBpbnN0YW5jZW9mIFNjb3BlLlN0b3JlXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgPyBzcmNDdHhbaWRdLmNvbnN0cnVjdG9yLmFjdGlvbnNcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICA6IHNyY0N0eFtpZF0uYWN0aW9ucyxcblx0XHRcdFx0ICAgICAgICAgIGFjdGl2ZUFjdGlvbnMgPSB0YXJnZXRDdHguXy5hY3Rpb25zLnByb3RvdHlwZTtcblx0XHRcdFx0ICAgICAgaWYgKCBpcy5yc1Njb3BlKHRoaXMuXy5fc2NvcGVbaWRdLnByb3RvdHlwZSkgKVxuXHRcdFx0XHRcdCAgICAgIHRoaXMuX21vdW50KGlkKTtcblx0XHRcdFx0ICAgICAgaWYgKCBpcy5yc1Njb3BlKHRoaXMuXy5fc2NvcGVbaWRdKSApIHtcblx0XHRcdFx0XHQgICAgICBhY3RpdmVBY3Rpb25zW2lkXSA9IHRoaXMuXy5fc2NvcGVbaWRdLmFjdGlvbnM7XG5cdFx0XHRcdCAgICAgIH1cblx0XHRcdFx0ICAgICAgaWYgKCAhaXMucnNTdG9yZSh0aGlzLl8uX3Njb3BlW2lkXSkgJiYgIWlzLnJzU3RvcmVDbGFzcyh0aGlzLl8uX3Njb3BlW2lkXSkgKVxuXHRcdFx0XHRcdCAgICAgIHJldHVybjtcblx0XHRcdFx0XG5cdFx0XHRcdCAgICAgIGFjdGlvbnMgJiZcblx0XHRcdFx0ICAgICAgT2JqZWN0LmtleXMoYWN0aW9ucylcblx0XHRcdFx0ICAgICAgICAgICAgLmZvckVhY2goXG5cdFx0XHRcdFx0ICAgICAgICAgICAgKCBhY3QgKSA9PiB7XG5cdFx0XHRcdFx0XHQgICAgICAgICAgICBpZiAoIGFjdGl2ZUFjdGlvbnMuaGFzT3duUHJvcGVydHkoYWN0KSApXG5cdFx0XHRcdFx0XHRcdCAgICAgICAgICAgIGFjdGl2ZUFjdGlvbnNbYWN0XS5fX3RhcmdldFN0b3JlcysrO1xuXHRcdFx0XHRcdFx0ICAgICAgICAgICAgZWxzZSB7XG5cdFx0XHRcdFx0XHRcdCAgICAgICAgICAgIGFjdGl2ZUFjdGlvbnNbYWN0XSAgICAgICAgICAgICAgICA9IHRoaXMuZGlzcGF0Y2guYmluZCh0aGlzLCBhY3QpO1xuXHRcdFx0XHRcdFx0XHQgICAgICAgICAgICBhY3RpdmVBY3Rpb25zW2FjdF0uX190YXJnZXRTdG9yZXMgPSAxO1xuXHRcdFx0XHRcdFx0ICAgICAgICAgICAgfVxuXHRcdFx0XHRcdCAgICAgICAgICAgIH1cblx0XHRcdFx0ICAgICAgICAgICAgKVxuXHRcdFx0ICAgICAgfVxuXHRcdCAgICAgIClcblx0fVxuXHRcblx0LyoqXG5cdCAqIEJpbmQgc3RvcmVzIGZyb20gdGhpcyBzY29wZSwgaGlzIHBhcmVudHMgYW5kIG1peGVkIHNjb3BlXG5cdCAqXG5cdCAqIEBwYXJhbSBvYmoge1JlYWN0LkNvbXBvbmVudHxTdG9yZXxmdW5jdGlvbn1cblx0ICogQHBhcmFtIGtleSB7c3RyaW5nfSBzdG9yZXMga2V5cyB0byBiaW5kIHVwZGF0ZXNcblx0ICogQHBhcmFtIGFzXG5cdCAqIEBwYXJhbSBzZXRJbml0aWFsIHtib29sfSBmYWxzZSB0byBub3QgcHJvcGFnIGluaXRpYWwgdmFsdWUgKGRlZmF1bHQgOiB0cnVlKVxuXHQgKi9cblx0YmluZCggb2JqLCBrZXksIGFzLCBzZXRJbml0aWFsID0gdHJ1ZSwgcmV2TWFwID0ge30gKSB7XG5cdFx0bGV0IGxhc3RSZXZzLCBkYXRhLCByZWZLZXlzO1xuXHRcdGlmICgga2V5ICYmICFpcy5hcnJheShrZXkpIClcblx0XHRcdGtleSA9IFtrZXldO1xuXHRcdFxuXHRcdGlmICggYXMgPT09IGZhbHNlIHx8IGFzID09PSB0cnVlICkge1xuXHRcdFx0c2V0SW5pdGlhbCA9IGFzO1xuXHRcdFx0YXMgICAgICAgICA9IG51bGw7XG5cdFx0fVxuXHRcdFxuXHRcdHJlZktleXMgPSBrZXlcblx0XHRcdC5tYXAoaWQgPT4gKGlzLnN0cmluZyhpZCkgPyBpZCA6IGlkLm5hbWUpKVxuXHRcdFx0Lm1hcChpZCA9PiAodGhpcy5wYXJzZVJlZihpZCkpKTtcblx0XHRcblx0XHRcblx0XHR0aGlzLl8uZm9sbG93ZXJzLnB1c2goXG5cdFx0XHRbXG5cdFx0XHRcdG9iaixcblx0XHRcdFx0a2V5LFxuXHRcdFx0XHRhcyB8fCB1bmRlZmluZWQsXG5cdFx0XHRcdGxhc3RSZXZzID0gcmVmS2V5cy5yZWR1Y2UoKCByZXZzLCByZWYgKSA9PiB7XG5cdFx0XHRcdFx0cmV2c1tyZWYuc3RvcmVJZF0gPSByZXZzW3JlZi5zdG9yZUlkXSB8fCB7XG5cdFx0XHRcdFx0XHRyZXYgOiAwLFxuXHRcdFx0XHRcdFx0cmVmczogW11cblx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdHJldnNbcmVmLnN0b3JlSWRdLnJlZnMucHVzaChyZWYpO1xuXHRcdFx0XHRcdHJldHVybiByZXZzO1xuXHRcdFx0XHR9LCByZXZNYXApXG5cdFx0XHRdKTtcblx0XHRcblx0XHR0aGlzLm1vdW50KGtleSk7XG5cdFx0dGhpcy5yZXRhaW5TdG9yZXMoT2JqZWN0LmtleXMobGFzdFJldnMpLCAnbGlzdGVuZXJzJyk7XG5cdFx0XG5cdFx0aWYgKCBzZXRJbml0aWFsICYmIHRoaXMuX3N0YWJsZSApIHtcblx0XHRcdGRhdGEgPSB0aGlzLmdldFVwZGF0ZXMobGFzdFJldnMpO1xuXHRcdFx0aWYgKCAhZGF0YSApIHJldHVybiB0aGlzO1xuXHRcdFx0aWYgKCB0eXBlb2Ygb2JqICE9IFwiZnVuY3Rpb25cIiApIHtcblx0XHRcdFx0aWYgKCBhcyApIG9iai5zZXRTdGF0ZSh7IFthc106IGRhdGEgfSk7XG5cdFx0XHRcdGVsc2Ugb2JqLnNldFN0YXRlKGRhdGEpO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdG9iaihkYXRhKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBVbiBiaW5kIHRoaXMgc2NvcGUgb2ZmIHRoZSBnaXZlbiBjb21wb25lbnQta2V5c1xuXHQgKiBAcGFyYW0gb2JqXG5cdCAqIEBwYXJhbSBrZXlcblx0ICogQHJldHVybnMge0FycmF5LjwqPn1cblx0ICovXG5cdHVuQmluZCggb2JqLCBrZXksIGFzICkge1xuXHRcdHZhciBmb2xsb3dlcnMgPSB0aGlzLl8uZm9sbG93ZXJzLFxuXHRcdCAgICBpICAgICAgICAgPSBmb2xsb3dlcnMgJiYgZm9sbG93ZXJzLmxlbmd0aDtcblx0XHR3aGlsZSAoIGZvbGxvd2VycyAmJiBpLS0gKVxuXHRcdFx0aWYgKCBmb2xsb3dlcnNbaV1bMF0gPT09IG9iaiAmJlxuXHRcdFx0XHQoJycgKyBmb2xsb3dlcnNbaV1bMV0pID09ICgnJyArIGtleSkgJiZcblx0XHRcdFx0Zm9sbG93ZXJzW2ldWzJdID09IGFzICkge1xuXHRcdFx0XHR0aGlzLmRpc3Bvc2VTdG9yZXMoT2JqZWN0LmtleXMoZm9sbG93ZXJzW2ldWzNdKSwgJ2xpc3RlbmVycycpO1xuXHRcdFx0XHRyZXR1cm4gZm9sbG93ZXJzLnNwbGljZShpLCAxKTtcblx0XHRcdH1cblx0fVxuXHRcblx0LyoqXG5cdCAqIE1vdW50IHRoZSBzdG9yZXMgaW4gc3RvcmVzTGlzdCBmcm9tIHRoaXMgc2NvcGUsIGl0cyBwYXJlbnRzIGFuZCBtaXhlZCBzY29wZVxuXHQgKiBCaW5kIHRoZW0gdG8gJ3RvJ1xuXHQgKiBIb29rICd0bycgc28gaXQgd2lsbCBhdXRvIHVuYmluZCBvbiAnZGVzdHJveScgb3IgJ2NvbXBvbmVudFdpbGxVbm1vdW50J1xuXHQgKiBAcGFyYW0gdG9cblx0ICogQHBhcmFtIHN0b3Jlc0xpc3Rcblx0ICogQHBhcmFtIGJpbmRcblx0ICogQHJldHVybnMge09iamVjdH0gSW5pdGlhbCBvdXRwdXRzIG9mIHRoZSBzdG9yZXMgaW4gJ3N0b3Jlc0xpc3QnXG5cdCAqL1xuXHRtYXAoIHRvLCBzdG9yZXNMaXN0LCBiaW5kID0gdHJ1ZSwgcmV2TWFwICkge1xuXHRcdGxldCBTdG9yZSAgID0gdGhpcy5jb25zdHJ1Y3Rvci5TdG9yZTtcblx0XHRzdG9yZXNMaXN0ICA9IGlzLmFycmF5KHN0b3Jlc0xpc3QpID8gc3RvcmVzTGlzdCA6IFtzdG9yZXNMaXN0XTtcblx0XHRsZXQgcmVmTGlzdCA9IHN0b3Jlc0xpc3QubWFwKHRoaXMucGFyc2VSZWYpO1xuXHRcdHRoaXMubW91bnQoc3RvcmVzTGlzdCk7XG5cdFx0aWYgKCBiaW5kICYmIHRvIGluc3RhbmNlb2YgU3RvcmUgKSB7XG5cdFx0XHRTdG9yZS5tYXAodG8sIHN0b3Jlc0xpc3QsIHRoaXMsIHRoaXMsIGZhbHNlKVxuXHRcdH1cblx0XHRlbHNlIGlmICggYmluZCApIHtcblx0XHRcdHRoaXMuYmluZCh0bywgc3RvcmVzTGlzdCwgdW5kZWZpbmVkLCBmYWxzZSk7XG5cdFx0XHRcblx0XHRcdGxldCBtaXhlZENXVW5tb3VudCxcblx0XHRcdCAgICB1bk1vdW50S2V5ID0gdG8uaXNSZWFjdENvbXBvbmVudCA/IFwiY29tcG9uZW50V2lsbFVubW91bnRcIiA6IFwiZGVzdHJveVwiO1xuXHRcdFx0XG5cdFx0XHRpZiAoIHRvLmhhc093blByb3BlcnR5KHVuTW91bnRLZXkpICkge1xuXHRcdFx0XHRtaXhlZENXVW5tb3VudCA9IHRvW3VuTW91bnRLZXldO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHR0b1t1bk1vdW50S2V5XSA9ICggLi4uYXJneiApID0+IHtcblx0XHRcdFx0ZGVsZXRlIHRvW3VuTW91bnRLZXldO1xuXHRcdFx0XHRpZiAoIG1peGVkQ1dVbm1vdW50IClcblx0XHRcdFx0XHR0b1t1bk1vdW50S2V5XSA9IG1peGVkQ1dVbm1vdW50O1xuXHRcdFx0XHRcblx0XHRcdFx0dGhpcy51bkJpbmQodG8sIHN0b3Jlc0xpc3QpO1xuXHRcdFx0XHRyZXR1cm4gdG9bdW5Nb3VudEtleV0gJiYgdG9bdW5Nb3VudEtleV0oLi4uYXJneik7XG5cdFx0XHR9XG5cdFx0XHRcblx0XHR9XG5cdFx0cmV0dXJuIHJldk1hcCAmJiB0aGlzLmdldFVwZGF0ZXMocmV2TWFwKSB8fCByZWZMaXN0LnJlZHVjZSgoIGRhdGEsIHJlZiApID0+IHtcblx0XHRcdHdhbGtuU2V0KGRhdGEsIHJlZi5hbGlhcyB8fCByZWYucGF0aCwgdGhpcy5yZXRyaWV2ZShyZWYucGF0aCkpXG5cdFx0XHRyZXR1cm4gZGF0YTtcblx0XHR9LCB7fSk7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBHZXQgY3VycmVudCBkYXRhIHZhbHVlIGZyb20ganNvbiBwYXRoXG5cdCAqIEBwYXJhbSBwYXRoXG5cdCAqIEByZXR1cm5zIHtzdHJpbmd8Kn1cblx0ICovXG5cdHJldHJpZXZlKCBwYXRoID0gXCJcIiApIHtcblx0XHRwYXRoID0gaXMuc3RyaW5nKHBhdGgpID8gcGF0aC5zcGxpdCgnLicpIDogcGF0aDtcblx0XHRyZXR1cm4gcGF0aCAmJlxuXHRcdFx0dGhpcy5zdG9yZXNbcGF0aFswXV0gJiZcblx0XHRcdHRoaXMuc3RvcmVzW3BhdGhbMF1dLnJldHJpZXZlICYmXG5cdFx0XHR0aGlzLnN0b3Jlc1twYXRoWzBdXS5yZXRyaWV2ZShwYXRoLnNsaWNlKDEpKTtcblx0fVxuXHRcblx0LyoqXG5cdCAqIEdldCBjdXJyZW50IHN0b3JlIGZyb20ganNvbiBwYXRoXG5cdCAqIEBwYXJhbSBwYXRoXG5cdCAqIEByZXR1cm5zIHtzdHJpbmd8Kn1cblx0ICovXG5cdHJldHJpZXZlU3RvcmUoIHBhdGggPSBcIlwiICkge1xuXHRcdHBhdGggPSBpcy5zdHJpbmcocGF0aCkgPyBwYXRoLnNwbGl0KCcuJykgOiBwYXRoO1xuXHRcdHJldHVybiBwYXRoXG5cdFx0XHQmJiBwYXRoLmxlbmd0aFxuXHRcdFx0JiYgKFxuXHRcdFx0XHRwYXRoLmxlbmd0aCAhPSAxICYmIHRoaXMuc3RvcmVzW3BhdGhbMF1dLnJldHJpZXZlU3RvcmVcblx0XHRcdFx0PyB0aGlzLnN0b3Jlc1twYXRoWzBdXS5yZXRyaWV2ZVN0b3JlKHBhdGguc2xpY2UoMSkpXG5cdFx0XHRcdDogcGF0aC5sZW5ndGggPT0gMSAmJiB0aGlzLnN0b3Jlc1twYXRoWzBdXVxuXHRcdFx0KTtcblx0fVxuXHRcblx0LyoqXG5cdCAqIEdldCBvciB1cGRhdGUgc3RvcmVzUmV2TWFwJ3MgcmV2aXNpb25zXG5cdCAqIEBwYXJhbSBzdG9yZXNSZXZNYXBcblx0ICogQHBhcmFtIGxvY2FsXG5cdCAqIEByZXR1cm5zIHt7fX1cblx0ICovXG5cdGdldFN0b3Jlc1JldnMoIHN0b3Jlc1Jldk1hcCA9IHt9LCBsb2NhbCApIHtcblx0XHRsZXQgY3R4ID0gdGhpcy5fLl9zY29wZTtcblx0XHRpZiAoICFzdG9yZXNSZXZNYXAgKSB7XG5cdFx0XHRzdG9yZXNSZXZNYXAgPSB7fTtcblx0XHR9XG5cdFx0T2JqZWN0LmtleXMoY3R4KS5mb3JFYWNoKFxuXHRcdFx0aWQgPT4ge1xuXHRcdFx0XHRpZiAoIGlkID09IFwiJHBhcmVudFwiICkgcmV0dXJuO1xuXHRcdFx0XHRpZiAoICFpcy5mbihjdHhbaWRdKVxuXHRcdFx0XHQpIHtcblx0XHRcdFx0XHRzdG9yZXNSZXZNYXBbaWRdID0gY3R4W2lkXS5fcmV2O1xuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2UgaWYgKCAhc3RvcmVzUmV2TWFwLmhhc093blByb3BlcnR5KGlkKSApXG5cdFx0XHRcdFx0c3RvcmVzUmV2TWFwW2lkXSA9IGZhbHNlXG5cdFx0XHR9XG5cdFx0KTtcblx0XHRpZiAoICFsb2NhbCApIHtcblx0XHRcdHRoaXMuXy5fbWl4ZWQucmVkdWNlKCggdXBkYXRlZCwgY3R4ICkgPT4gKGN0eC5nZXRTdG9yZXNSZXZzKHN0b3Jlc1Jldk1hcCksIHN0b3Jlc1Jldk1hcCksIHN0b3Jlc1Jldk1hcCk7XG5cdFx0XHR0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC5nZXRTdG9yZXNSZXZzKHN0b3Jlc1Jldk1hcCk7XG5cdFx0fVxuXHRcdHJldHVybiBzdG9yZXNSZXZNYXA7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBHZXQgdXBkYXRlZCBvdXRwdXQgYmFzaW5nIHN0b3Jlc1Jldk1hcCdzIHJldmlzaW9ucy5cblx0ICogSWYgYSBzdG9yZSBpbiAnc3RvcmVzUmV2TWFwJyB3YXMgdXBkYXRlZDsgYWRkIGl0IHRvICdvdXRwdXQnICYgdXBkYXRlIHN0b3Jlc1Jldk1hcFxuXHQgKiBAcGFyYW0gc3RvcmVzUmV2TWFwXG5cdCAqIEBwYXJhbSBvdXRwdXRcblx0ICogQHBhcmFtIHVwZGF0ZWRcblx0ICogQHJldHVybnMgeyp8e319XG5cdCAqL1xuXHRnZXRSZWZzVXBkYXRlcyggcmVmcywgcmV2TWFwLCBvdXRwdXQgKSB7XG5cdFx0XG5cdFx0cmV2TWFwID0gcmV2TWFwIHx8IHJlZnNcblx0XHRcdC5tYXAoaWQgPT4gKGlzLnN0cmluZyhpZCkgPyBpZCA6IGlkLm5hbWUpKVxuXHRcdFx0Lm1hcChpZCA9PiAodGhpcy5wYXJzZVJlZihpZCkpKVxuXHRcdFx0LnJlZHVjZSgoIHJldnMsIHJlZiApID0+IHtcblx0XHRcdFx0cmV2c1tyZWYuc3RvcmVJZF0gPSByZXZzW3JlZi5zdG9yZUlkXSB8fCB7XG5cdFx0XHRcdFx0cmV2IDogMCxcblx0XHRcdFx0XHRyZWZzOiBbXVxuXHRcdFx0XHR9O1xuXHRcdFx0XHRyZXZzW3JlZi5zdG9yZUlkXS5yZWZzLnB1c2gocmVmKTtcblx0XHRcdFx0cmV0dXJuIHJldnM7XG5cdFx0XHR9LCB7fSk7XG5cdFx0XG5cdFx0cmV0dXJuIHRoaXMuZ2V0VXBkYXRlcyhyZXZNYXAsIG91dHB1dClcblx0XHRcblx0fVxuXHRcblx0LyoqXG5cdCAqIEdldCBvciB1cGRhdGUgb3V0cHV0IGJhc2luZyBzdG9yZXNSZXZNYXAncyByZXZpc2lvbnMuXG5cdCAqIElmIGEgc3RvcmUgaW4gJ3N0b3Jlc1Jldk1hcCcgd2FzIHVwZGF0ZWQ7IGFkZCBpdCB0byAnb3V0cHV0JyAmIHVwZGF0ZSBzdG9yZXNSZXZNYXBcblx0ICogQHRvZG86IG9wdGltIC8gdXNlIHByb3Rvc1xuXHQgKiBAcGFyYW0gc3RvcmVzUmV2TWFwXG5cdCAqIEBwYXJhbSBvdXRwdXRcblx0ICogQHBhcmFtIHVwZGF0ZWRcblx0ICogQHJldHVybnMgeyp8e319XG5cdCAqL1xuXHRnZXRVcGRhdGVzKCBzdG9yZXNSZXZNYXAsIG91dHB1dCwgdXBkYXRlZCApIHtcblx0XHRcblx0XHRvdXRwdXQgICAgICAgPSBvdXRwdXQgfHwge307XG5cdFx0c3RvcmVzUmV2TWFwID0gc3RvcmVzUmV2TWFwIHx8IHRoaXMuX2dldFJldk1hcCgpO1xuXHRcdE9iamVjdC5rZXlzKHN0b3Jlc1Jldk1hcCkuZm9yRWFjaChcblx0XHRcdGlkID0+IHtcblx0XHRcdFx0bGV0IHN0b3JlICAgICAgICA9IHRoaXMuc3RvcmVzW2lkXTtcblx0XHRcdFx0c3RvcmVzUmV2TWFwW2lkXSA9IHN0b3Jlc1Jldk1hcFtpZF0gfHwgeyByZXY6IDAsIHJlZnM6IFtdIH07XG5cdFx0XHRcdFxuXHRcdFx0XHRpZiAoIHN0b3JlICYmIGlzLmZuKHN0b3JlKSApIHtcblx0XHRcdFx0XHR1cGRhdGVkICAgID0gdHJ1ZTtcblx0XHRcdFx0XHRvdXRwdXRbaWRdID0gdW5kZWZpbmVkO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2UgaWYgKCBzdG9yZSAmJiBzdG9yZS5fcmV2ID4gc3RvcmVzUmV2TWFwW2lkXS5yZXYgKSB7XG5cdFx0XHRcdFx0c3RvcmVzUmV2TWFwW2lkXS5yZXYgPSBzdG9yZS5fcmV2O1xuXHRcdFx0XHRcdG91dHB1dFtpZF0gICAgICAgICAgID0gc3RvcmUuZGF0YTtcblx0XHRcdFx0XHR1cGRhdGVkICAgICAgICAgICAgICA9IHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHQpXG5cdFx0cmV0dXJuIHVwZGF0ZWQgJiYgb3V0cHV0O1xuXHR9XG5cdFxuXHQvKipcblx0ICogUmVjdXJzaXZlbHkgZ2V0IGFsbCBzdG9yZXMgcmV2c1xuXHQgKiBAcGFyYW0gY2hpbGRzXG5cdCAqIEByZXR1cm5zIHtBcnJheX1cblx0ICogQHByaXZhdGVcblx0ICovXG5cdF9nZXRSZXZNYXAoIHN0b3Jlc1Jldk1hcCA9IHt9ICkge1xuXHRcdGxldCBjdHggPSB0aGlzLl8uX3Njb3BlO1xuXHRcdE9iamVjdC5rZXlzKGN0eCkuZm9yRWFjaChcblx0XHRcdGlkID0+IHtcblx0XHRcdFx0aWYgKCBpZCA9PSBcIiRwYXJlbnRcIiB8fCBzdG9yZXNSZXZNYXBbaWRdICkgcmV0dXJuO1xuXHRcdFx0XHRzdG9yZXNSZXZNYXBbaWRdID0geyByZXY6IGN0eFtpZF0uX3JldiwgcmVmczogW10gfTtcblx0XHRcdFx0XG5cdFx0XHR9KTtcblx0XHR0aGlzLl8uX21peGVkLnJlZHVjZVJpZ2h0KFxuXHRcdFx0KCBzdG9yZXNSZXZNYXAsIGN0eCApID0+IChjdHguX2dldFJldk1hcChzdG9yZXNSZXZNYXApKSwgc3RvcmVzUmV2TWFwKTtcblx0XHR0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC5fZ2V0UmV2TWFwKHN0b3Jlc1Jldk1hcCk7XG5cdFx0cmV0dXJuIHN0b3Jlc1Jldk1hcDtcblx0fVxuXHRcblx0LyoqXG5cdCAqIFJlY3Vyc2l2ZWx5IGdldCBhbGwgY2hpbGQgc2NvcGVzXG5cdCAqIEBwYXJhbSBjaGlsZHNcblx0ICogQHJldHVybnMge0FycmF5fVxuXHQgKiBAcHJpdmF0ZVxuXHQgKi9cblx0X2dldEFsbENoaWxkcyggY2hpbGRzID0gW10gKSB7XG5cdFx0Y2hpbGRzLnB1c2goLi4udGhpcy5fLmNoaWxkU2NvcGVzKTtcblx0XHR0aGlzLl8uY2hpbGRTY29wZXMuZm9yRWFjaChcblx0XHRcdGN0eCA9PiB7XG5cdFx0XHRcdGN0eC5fZ2V0QWxsQ2hpbGRzKGNoaWxkcyk7XG5cdFx0XHR9XG5cdFx0KTtcblx0XHRyZXR1cm4gY2hpbGRzO1xuXHR9XG5cdFxuXHQvKipcblx0ICogU2VyaWFsaXplIGFsbCBhY3RpdmUgc3RvcmVzIHN0YXRlICYgZGF0YSBpbiBldmVyeSBjaGlsZHMgJiBtaXhlZCBzY29wZXNcblx0ICpcblx0ICogU2NvcGVzIHdpdGhvdXQga2V5IG9yIGlkIGFyZSBpZ25vcmVkXG5cdCAqIEBwYXJhbSBvdXRwdXRcblx0ICogQHJldHVybnMge3t9fVxuXHQgKi9cblx0c2VyaWFsaXplKCBjZmcgPSB7fSwgb3V0cHV0ID0ge30gKSB7XG5cdFx0bGV0IGN0eCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA9IHRoaXMuXy5fc2NvcGUsXG5cdFx0ICAgIHsgYmFzZUlkLCBrZXksIGtleVBJRCwgaW5jcmVtZW50SWQgfSA9IHRoaXMuXyxcblx0XHQgICAge1xuXHRcdFx0ICAgIGFsaWFzLFxuXHRcdFx0ICAgIHBhcmVudEFsaWFzLFxuXHRcdCAgICB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSBjZmcsXG5cdFx0ICAgIHNpZCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA9IGtleVxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IChwYXJlbnRBbGlhcyB8fCBrZXlQSUQpICsgJz4nICsga2V5XG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogYWxpYXMgfHwgcGFyZW50QWxpYXMgJiYgKHBhcmVudEFsaWFzICsgJy8nICsgYmFzZUlkKSB8fCB0aGlzLl9pZDtcblx0XHRcblx0XHRcblx0XHQvL2FsaWFzID0gYWxpYXMgfHwgYmFzZUlkO1xuXHRcdHJldHVybiB0aGlzLnNlcmlhbGl6ZV9leChjZmcsIG91dHB1dCwgc2lkLCBhbGlhcywgW1wiJHBhcmVudFwiXSlcblx0fVxuXHRcblx0c2VyaWFsaXplX2V4KCBjZmcgPSB7fSwgb3V0cHV0ID0ge30sIHNpZCwgYWxpYXMsIGV4Y2x1ZGUgKSB7XG5cdFx0bGV0IGN0eCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA9IHRoaXMuXy5fc2NvcGUsXG5cdFx0ICAgIHsgYmFzZUlkLCBrZXksIGtleVBJRCwgaW5jcmVtZW50SWQgfSA9IHRoaXMuXyxcblx0XHQgICAge1xuXHRcdFx0ICAgIHdpdGhDaGlsZHMgPSB0cnVlLFxuXHRcdFx0ICAgIHdpdGhQYXJlbnRzLFxuXHRcdFx0ICAgIHdpdGhNaXhlZCAgPSB0cnVlLFxuXHRcdFx0ICAgIG5vcmVmcyxcblx0XHRcdCAgICBwYXJlbnRBbGlhcyxcblx0XHRcdCAgICBhbGlhc2VzICAgID0ge31cblx0XHQgICAgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID0gY2ZnO1xuXHRcdFxuXHRcdGlmICgga2V5V2Fsa25HZXQob3V0cHV0LCBzaWQpICkge1xuXHRcdFx0aWYgKCAhaW5jcmVtZW50SWQgKS8vIGRvbmVcblx0XHRcdFx0cmV0dXJuIG91dHB1dDtcblx0XHRcdGVsc2UgaWYgKCBpbmNyZW1lbnRJZCApIHsvLyBnZW5lcmF0ZSBrZXkgaWRcblx0XHRcdFx0bGV0IGkgPSAtMTtcblx0XHRcdFx0d2hpbGUgKCBrZXlXYWxrbkdldChvdXRwdXQsIHNpZCArICdbJyArICgrK2kpICsgJ10nKSApIDtcblx0XHRcdFx0c2lkID0gc2lkICsgJ1snICsgaSArICddJztcblx0XHRcdH1cblx0XHR9XG5cdFx0Ly9AdG9kbyA6IGJldHRlciBzZXJpYWxpemUgbWV0aG9kXG5cdFx0a2V5V2Fsa25TZXQob3V0cHV0LCBzaWQsIHt9KTtcblx0XHRcblx0XHRPYmplY3Qua2V5cyhjdHgpLmZvckVhY2goXG5cdFx0XHRpZCA9PiB7XG5cdFx0XHRcdGlmICggZXhjbHVkZS5pbmNsdWRlcyhpZCkgfHwgaXMucnNTdG9yZUNsYXNzKGN0eFtpZF0pIHx8IGlzLnJzU2NvcGVDbGFzcyhjdHhbaWRdKSApXG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcblx0XHRcdFx0Y3R4W2lkXS5zZXJpYWxpemUoeyAuLi5jZmcsIHBhcmVudEFsaWFzOiBzaWQgfSwgb3V0cHV0KTtcblx0XHRcdH1cblx0XHQpXG5cdFx0XG5cdFx0Ly93aXRoUGFyZW50cyAmJiB0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC5zZXJpYWxpemUoe1xuXHRcdC8vXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aENoaWxkICA6IGZhbHNlLFxuXHRcdC8vXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aFBhcmVudHM6IHRydWUsXG5cdFx0Ly9cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRoTWl4ZWQsXG5cdFx0Ly9cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JlZnNcblx0XHQvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBvdXRwdXQpO1xuXHRcdFxuXHRcdHdpdGhDaGlsZHMgJiYgdGhpcy5fLmNoaWxkU2NvcGVzLmZvckVhY2goXG5cdFx0XHRjdHggPT4ge1xuXHRcdFx0XHQhY3R4Ll8uaXNMb2NhbElkICYmIGN0eC5zZXJpYWxpemUoe1xuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRoQ2hpbGQgIDogdHJ1ZSxcblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aFBhcmVudHM6IGZhbHNlLFxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRBbGlhczogc2lkLFxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRoTWl4ZWQsXG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcmVmcyxcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIG91dHB1dCk7XG5cdFx0XHR9XG5cdFx0KTtcblx0XHRcblx0XHR3aXRoTWl4ZWQgJiYgdGhpcy5fLl9taXhlZC5mb3JFYWNoKFxuXHRcdFx0Y3R4ID0+IHtcblx0XHRcdFx0IWN0eC5fLmlzTG9jYWxJZCAmJiBjdHguc2VyaWFsaXplKHtcblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aENoaWxkICA6IGZhbHNlLFxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRoUGFyZW50czogZmFsc2UsXG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpdGhNaXhlZCxcblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9yZWZzXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBvdXRwdXQpO1xuXHRcdFx0fVxuXHRcdCk7XG5cdFx0XG5cdFx0aWYgKCBhbGlhcyApIHtcblx0XHRcdG91dHB1dCA9IE9iamVjdC5rZXlzKG91dHB1dClcblx0XHRcdCAgICAgICAgICAgICAgIC5yZWR1Y2UoXG5cdFx0XHRcdCAgICAgICAgICAgICAgICggaCwgayApID0+IChcblx0XHRcdFx0XHQgICAgICAgICAgICAgICBoW2sgPT09IHRoaXMuX2lkXG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICA/IGFsaWFzXG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICA6IGtdID0gb3V0cHV0W2tdLFxuXHRcdFx0XHRcdFx0ICAgICAgICAgICAgICAgaFxuXHRcdFx0XHQgICAgICAgICAgICAgICApLFxuXHRcdFx0XHQgICAgICAgICAgICAgICB7fVxuXHRcdFx0ICAgICAgICAgICAgICAgKVxuXHRcdH1cblx0XHRyZXR1cm4gb3V0cHV0O1xuXHR9XG5cdFxuXHQvKipcblx0ICogUmVzdG9yZSBzdGF0ZSAmIGRhdGEgZnJvbSB0aGUgc2VyaWFsaXplIGZuXG5cdCAqIEBwYXJhbSBzbmFwc2hvdFxuXHQgKiBAcGFyYW0gZm9yY2Vcblx0ICovXG5cdHJlc3RvcmUoIHNuYXBzaG90LCBjZmcgPSB7fSwgZm9yY2UgPSBpcy5ib29sKGNmZykgJiYgY2ZnICkge1xuXHRcdGxldCBjdHggPSB0aGlzLl8uX3Njb3BlLCBzbmFwO1xuXHRcdFxuXHRcdGlmICggc25hcHNob3QgJiYgY2ZnICYmIGNmZy5hbGlhcyAmJiBjZmcuYWxpYXMgIT0gdGhpcy5faWQgKSB7XG5cdFx0XHRzbmFwID0ge1xuXHRcdFx0XHQuLi5zbmFwc2hvdCxcblx0XHRcdFx0W3RoaXMuX2lkXTogc25hcHNob3RbY2ZnLmFsaWFzXVxuXHRcdFx0fVxuXHRcdFx0ZGVsZXRlIHNuYXBbY2ZnLmFsaWFzXTtcblx0XHRcdHNuYXBzaG90ID0gc25hcDtcblx0XHR9XG5cdFx0c25hcHNob3QgPSBzbmFwc2hvdFxuXHRcdFx0JiYga2V5V2Fsa25HZXQoc25hcHNob3QsIHRoaXMuX2lkKVxuXHRcdFx0fHwgdGhpcy50YWtlU25hcHNob3RCeUtleSh0aGlzLl9pZCk7XG5cdFx0XG5cdFx0XG5cdFx0aWYgKCAhc25hcHNob3QgKVxuXHRcdFx0cmV0dXJuO1xuXHRcdFxuXHRcdHRoaXMuXy5zbmFwc2hvdCA9IHsgLi4uc25hcHNob3QgfTtcblx0XHRcblx0XHRzbmFwICAgICAgICAgID0gc25hcHNob3RbJy8nXTtcblx0XHRzbmFwc2hvdFsnLyddID0geyAuLi5zbmFwIH07XG5cdFx0c25hcCAmJiBPYmplY3Qua2V5cyhzbmFwKS5mb3JFYWNoKFxuXHRcdFx0bmFtZSA9PiB7XG5cdFx0XHRcdGlmICggbmFtZSA9PSBcIiRwYXJlbnRcIiApIHJldHVybjtcblx0XHRcdFx0XG5cdFx0XHRcdGlmICggY3R4W25hbWVdICkge1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdGlmICggZm9yY2UgJiYgIWlzLmZuKGN0eFtuYW1lXSkgKVxuXHRcdFx0XHRcdFx0Y3R4W25hbWVdLmRlc3Ryb3koKTtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHR0aGlzLl9tb3VudChuYW1lKTsvLyBxdWlldFxuXHRcdFx0XHR9XG5cdFx0XHRcdFxuXHRcdFx0fVxuXHRcdClcblx0XHRcblx0XHR0aGlzLl8uX21peGVkLmZvckVhY2goXG5cdFx0XHRjdHggPT4ge1xuXHRcdFx0XHQhY3R4Ll8uaXNMb2NhbElkICYmIGN0eC5yZXN0b3JlKHVuZGVmaW5lZCwgZm9yY2UpO1xuXHRcdFx0fVxuXHRcdCk7XG5cdFx0XG5cdFx0dGhpcy5fLmNoaWxkU2NvcGVzLmZvckVhY2goXG5cdFx0XHRjdHggPT4ge1xuXHRcdFx0XHQhY3R4Ll8uaXNMb2NhbElkICYmIGN0eC5yZXN0b3JlKHVuZGVmaW5lZCwgZm9yY2UpO1xuXHRcdFx0fVxuXHRcdCk7XG5cdH1cblx0XG5cdGdldFNuYXBzaG90QnlLZXkoIGtleSwgbG9jYWwgKSB7XG5cdFx0Ly8gb25seSBoYXZlIHRoZSBsb2NhbCBzbmFwXG5cdFx0aWYgKCB0aGlzLl8uc25hcHNob3QgJiYga2V5LnN0YXJ0c1dpdGgodGhpcy5faWQpICkge1xuXHRcdFx0bGV0IG9iaiA9IGtleVdhbGtuR2V0KHRoaXMuXy5zbmFwc2hvdCwga2V5LnN1YnN0cih0aGlzLl9pZC5sZW5ndGgpKVxuXHRcdFx0Ly9pZiAoIG9iaiApIHtcblx0XHRcdC8vICAgIHRoaXMuZGVsZXRlU25hcHNob3RCeUtleShrZXkpO1xuXHRcdFx0Ly99XG5cdFx0XHRyZXR1cm4gb2JqO1xuXHRcdH1cblx0XHRlbHNlIHJldHVybiAhbG9jYWxcblx0XHRcdCYmIHRoaXMucGFyZW50XG5cdFx0XHQmJiB0aGlzLnBhcmVudC5nZXRTbmFwc2hvdEJ5S2V5KGtleSlcblx0XHRcdHx8XG5cdFx0XHR0aGlzLnN0b3Jlcy4kcGFyZW50XG5cdFx0XHQmJiB0aGlzLnN0b3Jlcy4kcGFyZW50LmdldFNuYXBzaG90QnlLZXkoa2V5KTtcblx0XHRcblx0fVxuXHRcblx0Z2V0U25hcHNob3RCeUtleUV4dCggc25hcHNob3QsIGtleSwgbG9jYWwgKSB7XG5cdFx0Ly8gb25seSBoYXZlIHRoZSBsb2NhbCBzbmFwXG5cdFx0aWYgKCBzbmFwc2hvdCApIHtcblx0XHRcdGxldCBvYmogPSBrZXlXYWxrbkdldChzbmFwc2hvdCwga2V5KVxuXHRcdFx0cmV0dXJuIG9iajtcblx0XHR9XG5cdFx0XG5cdH1cblx0XG5cdHRha2VTbmFwc2hvdEJ5S2V5KCBrZXksIGxvY2FsICkge1xuXHRcdGlmICggdGhpcy5fLnNuYXBzaG90ICYmIGtleS5zdGFydHNXaXRoKHRoaXMuX2lkKSApIHtcblx0XHRcdGxldCBvYmogPSBrZXlXYWxrbkdldCh0aGlzLl8uc25hcHNob3QsIGtleS5zdWJzdHIodGhpcy5faWQubGVuZ3RoKSlcblx0XHRcdGlmICggb2JqICkge1xuXHRcdFx0XHR0aGlzLmRlbGV0ZVNuYXBzaG90QnlLZXkoa2V5LCB0cnVlKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBvYmo7XG5cdFx0fVxuXHRcdGVsc2UgcmV0dXJuICFsb2NhbFxuXHRcdFx0JiYgdGhpcy5wYXJlbnRcblx0XHRcdCYmIHRoaXMucGFyZW50LnRha2VTbmFwc2hvdEJ5S2V5KGtleSlcblx0XHRcdHx8XG5cdFx0XHR0aGlzLnN0b3Jlcy4kcGFyZW50XG5cdFx0XHQmJiB0aGlzLnN0b3Jlcy4kcGFyZW50LnRha2VTbmFwc2hvdEJ5S2V5KGtleSk7XG5cdH1cblx0XG5cdGRlbGV0ZVNuYXBzaG90QnlLZXkoIGtleSwgbG9jYWwgKSB7XG5cdFx0aWYgKCB0aGlzLl8uc25hcHNob3QgJiYga2V5LnN0YXJ0c1dpdGgodGhpcy5faWQpICkge1xuXHRcdFx0bGV0IG9iaiA9IGtleVdhbGtuR2V0KHRoaXMuXy5zbmFwc2hvdCwga2V5LnN1YnN0cih0aGlzLl9pZC5sZW5ndGgpLnJlcGxhY2UoL14oLipbXFw+fFxcL10pW15cXD58XFwvXSskL2lnLCAnJDEnKSlcblx0XHRcdGlmICggb2JqIClcblx0XHRcdFx0ZGVsZXRlIG9ialtrZXkucmVwbGFjZSgvXi4qW1xcPnxcXC9dKFteXFw+fFxcL10rKSQvaWcsICckMScpXVxuXHRcdH1cblx0XHRyZXR1cm4gIWxvY2FsXG5cdFx0XHQmJiB0aGlzLnBhcmVudFxuXHRcdFx0JiYgdGhpcy5wYXJlbnQuZGVsZXRlU25hcHNob3RCeUtleShrZXkpXG5cdFx0XHR8fFxuXHRcdFx0dGhpcy5zdG9yZXMuJHBhcmVudFxuXHRcdFx0JiYgdGhpcy5zdG9yZXMuJHBhcmVudC5kZWxldGVTbmFwc2hvdEJ5S2V5KGtleSk7XG5cdH1cblx0XG5cdHNldFN0YXRlKCBwU3RhdGUgKSB7XG5cdFx0T2JqZWN0LmtleXMocFN0YXRlKVxuXHRcdCAgICAgIC5mb3JFYWNoKGsgPT4gKHRoaXMuc3RhdGVba10gPSBwU3RhdGVba10pKVxuXHR9XG5cdFxuXHQvKipcblx0ICogZ2V0IGEgcGFyc2VkIHJlZmVyZW5jZVxuXHQgKiBAcGFyYW0gX3JlZlxuXHQgKiBAcmV0dXJucyB7e3N0b3JlSWQsIHBhdGgsIGFsaWFzOiAqLCByZWY6ICp9fVxuXHQgKi9cblx0cGFyc2VSZWYoIF9yZWYgKSB7XG5cdFx0aWYgKCB0eXBlb2YgX3JlZiAhPT0gJ3N0cmluZycgKSB7XG5cdFx0XHR0aGlzLnJlZ2lzdGVyKHsgW19yZWYubmFtZV06IF9yZWYuc3RvcmUgfSk7XG5cdFx0XHRfcmVmID0gX3JlZi5uYW1lO1xuXHRcdH1cblx0XHRsZXQgcmVmID0gX3JlZi5zcGxpdCgnOicpO1xuXHRcdHJlZlswXSAgPSByZWZbMF0uc3BsaXQoJy4nKTtcblx0XHRyZXR1cm4ge1xuXHRcdFx0c3RvcmVJZDogcmVmWzBdWzBdLFxuXHRcdFx0cGF0aCAgIDogcmVmWzBdLFxuXHRcdFx0YWxpYXMgIDogcmVmWzFdIHx8IHJlZlswXVtyZWZbMF0ubGVuZ3RoIC0gMV0sXG5cdFx0XHRyZWYgICAgOiBfcmVmXG5cdFx0fTtcblx0fVxuXHRcblx0LyoqXG5cdCAqIERpc3BhdGNoIGFuIGFjdGlvbiB0byB0aGUgdG9wIHBhcmVudCAmIG1peGVkIHNjb3BlcywgaW4gYWxsIHN0b3Jlc1xuXHQgKlxuXHQgKiBAcGFyYW0gYWN0aW9uXG5cdCAqIEBwYXJhbSBkYXRhXG5cdCAqIEByZXR1cm5zIHtTY29wZX1cblx0ICovXG5cdGRpc3BhdGNoKCBhY3Rpb24sIC4uLmFyZ3ogKSB7XG5cdFx0aWYgKCB0aGlzLmRlYWQgKSB7XG5cdFx0XHRjb25zb2xlLndhcm4oXCJEaXNwYXRjaCB3YXMgY2FsbGVkIG9uIGEgZGVhZCBzY29wZSwgY2hlY2sgeW91J3JlIGFzeW5jIGZ1bmN0aW9ucyBpbiB0aGlzIHN0YWNrLi4uXCIsIChuZXcgRXJyb3IoKSkuc3RhY2spO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRsZXQgYkFjdHMgPSB0aGlzLl8uX2JvdW5kZWRBY3Rpb25zO1xuXHRcdE9iamVjdC5rZXlzKHRoaXMuXy5fc2NvcGUpXG5cdFx0ICAgICAgLmZvckVhY2goXG5cdFx0XHQgICAgICBpZCA9PiB7XG5cdFx0XHRcdCAgICAgIGlmICggaWQgPT0gXCIkcGFyZW50XCIgKSByZXR1cm47XG5cdFx0XHRcdCAgICAgIGlmICggIWlzLmZuKHRoaXMuXy5fc2NvcGVbaWRdKSApXG5cdFx0XHRcdFx0ICAgICAgdGhpcy5fLl9zY29wZVtpZF0udHJpZ2dlcihhY3Rpb24sIC4uLmFyZ3opO1xuXHRcdFx0ICAgICAgfVxuXHRcdCAgICAgICk7XG5cdFx0XG5cdFx0aWYgKCBiQWN0cyAmJiBiQWN0cy50ZXN0KGFjdGlvbikgKVxuXHRcdFx0cmV0dXJuO1xuXHRcdFxuXHRcdHRoaXMuXy5fbWl4ZWQuZm9yRWFjaCgoIGN0eCApID0+IChjdHguZGlzcGF0Y2goYWN0aW9uLCAuLi5hcmd6KSkpO1xuXHRcdHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LmRpc3BhdGNoKGFjdGlvbiwgLi4uYXJneik7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblx0XG5cdC8vXG5cdHRyaWdnZXIoKSB7XG5cdFx0dGhpcy5kaXNwYXRjaCguLi5hcmd1bWVudHMpO1xuXHR9XG5cdFxuXHQvKipcblx0ICogb25jZSgnc3RhYmxlJywgY2IpXG5cdCAqIEBwYXJhbSBvYmoge1JlYWN0LkNvbXBvbmVudHxTdG9yZXxmdW5jdGlvbilcblx0ICogQHBhcmFtIGtleSB7c3RyaW5nfSBvcHRpb25hbCBrZXkgd2hlcmUgdG8gbWFwIHRoZSBwdWJsaWMgc3RhdGVcblx0ICovXG5cdHRoZW4oIGNiICkge1xuXHRcdGlmICggdGhpcy5fLnVuU3RhYmxlQ2hpbGRzIClcblx0XHRcdHJldHVybiB0aGlzLm9uY2UoJ3N0YWJsZVRyZWUnLCBlID0+IHRoaXMudGhlbihjYikpO1xuXHRcdGlmICggIXRoaXMuX3N0YWJsZSApXG5cdFx0XHRyZXR1cm4gdGhpcy5vbmNlKCdzdGFibGUnLCBlID0+IHRoaXMudGhlbihjYikpO1xuXHRcdFxuXHRcdHJldHVybiBjYih0aGlzLmRhdGEpO1xuXHR9XG5cdFxuXHQvKipcblx0ICogQ2FsbCByZXRhaW4gb24gdGhlIHNjb3BlZCBzdG9yZXMgYmFzaW5nIGdpdmVuXG5cdCAqXG5cdCAqIEBwYXJhbSBzdG9yZXNcblx0ICogQHBhcmFtIHJlYXNvblxuXHQgKi9cblx0cmV0YWluU3RvcmVzKCBzdG9yZXMgPSBbXSwgcmVhc29uICkge1xuXHRcdC8vc3RvcmVzLmZvckVhY2goXG5cdFx0Ly8gICAgaWQgPT4gKCAoICF0aGlzLnN0b3Jlc1sgaWQgXSB8fCAhdGhpcy5zdG9yZXNbIGlkIF0ucmV0YWluICkgJiYgY29uc29sZS53YXJuKGlkLCByZWFzb24pIClcblx0XHQvLylcblx0XHRzdG9yZXMuZm9yRWFjaChcblx0XHRcdGlkID0+ICh0aGlzLnN0b3Jlc1tpZF0gJiYgdGhpcy5zdG9yZXNbaWRdLnJldGFpbiAmJiB0aGlzLnN0b3Jlc1tpZF0ucmV0YWluKHJlYXNvbikpXG5cdFx0KVxuXHR9XG5cdFxuXHQvKipcblx0ICogQ2FsbCByZXRhaW4gb24gdGhlIHNjb3BlZCBzdG9yZXNcblx0ICpcblx0ICogQHBhcmFtIHN0b3Jlc1xuXHQgKiBAcGFyYW0gcmVhc29uXG5cdCAqL1xuXHRkaXNwb3NlU3RvcmVzKCBzdG9yZXMgPSBbXSwgcmVhc29uICkge1xuXHRcdHN0b3Jlcy5mb3JFYWNoKFxuXHRcdFx0aWQgPT4gKHRoaXMuc3RvcmVzW2lkXSAmJiB0aGlzLnN0b3Jlc1tpZF0uZGlzcG9zZSAmJiB0aGlzLnN0b3Jlc1tpZF0uZGlzcG9zZShyZWFzb24pKVxuXHRcdClcblx0fVxuXHRcblx0LyoqXG5cdCAqIEtlZXAgdGhlIHNjb3BlIHVuc3RhYmxlIHVudGlsIHJlbGVhc2UgaXMgY2FsbGVkXG5cdCAqIEBwYXJhbSByZWFzb25cblx0ICovXG5cdHdhaXQoIHJlYXNvbiApIHtcblx0XHQvL2NvbnNvbGUubG9nKFwid2FpdFwiLCByZWFzb24pO1xuXHRcdHRoaXMuX3N0YWJsZSAmJiAhdGhpcy5fX2xvY2tzLmFsbCAmJiB0aGlzLmVtaXQoXCJ1bnN0YWJsZVwiLCB0aGlzKTtcblx0XHR0aGlzLl9zdGFibGUgPSBmYWxzZTtcblx0XHR0aGlzLl9fbG9ja3MuYWxsKys7XG5cdFx0aWYgKCByZWFzb24gKSB7XG5cdFx0XHR0aGlzLl9fbG9ja3NbcmVhc29uXSA9IHRoaXMuX19sb2Nrc1tyZWFzb25dIHx8IDA7XG5cdFx0XHR0aGlzLl9fbG9ja3NbcmVhc29uXSsrO1xuXHRcdH1cblx0fVxuXHRcblx0XG5cdC8qKlxuXHQgKiBTdGFiaWxpemUgdGhlIHNjb3BlIGlmIG5vIG1vcmUgbG9ja3MgcmVtYWluICh3YWl0IGZuKVxuXHQgKiBAcGFyYW0gcmVhc29uXG5cdCAqL1xuXHRyZWxlYXNlKCByZWFzb24gKSB7XG5cdFx0XG5cdFx0aWYgKCByZWFzb24gKSB7XG5cdFx0XHRpZiAoIHRoaXMuX19sb2Nrc1tyZWFzb25dID09IDAgKVxuXHRcdFx0XHRjb25zb2xlLmVycm9yKFwiUmVsZWFzZSBtb3JlIHRoYW4gbG9ja2luZyAhXCIsIHJlYXNvbik7XG5cdFx0XHR0aGlzLl9fbG9ja3NbcmVhc29uXSA9IHRoaXMuX19sb2Nrc1tyZWFzb25dIHx8IDA7XG5cdFx0XHR0aGlzLl9fbG9ja3NbcmVhc29uXS0tO1xuXHRcdH1cblx0XHRpZiAoICFyZWFzb24gJiYgdGhpcy5fX2xvY2tzLmFsbCA9PSAwIClcblx0XHRcdGNvbnNvbGUuZXJyb3IoXCJSZWxlYXNlIG1vcmUgdGhhbiBsb2NraW5nICFcIik7XG5cdFx0XG5cdFx0dGhpcy5fX2xvY2tzLmFsbC0tO1xuXHRcdGlmICggIXRoaXMuX19sb2Nrcy5hbGwgKSB7XG5cdFx0XHR0aGlzLl8uc3RhYmlsaXplclRNICYmIGNsZWFyVGltZW91dCh0aGlzLl8uc3RhYmlsaXplclRNKTtcblx0XHRcdFxuXHRcdFx0dGhpcy5fLnN0YWJpbGl6ZXJUTSA9IHNldFRpbWVvdXQoXG5cdFx0XHRcdGUgPT4ge1xuXHRcdFx0XHRcdHRoaXMuXy5zdGFiaWxpemVyVE0gPSBudWxsO1xuXHRcdFx0XHRcdGlmICggdGhpcy5fX2xvY2tzLmFsbCApXG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0dGhpcy5fLnByb3BhZ1RNICYmIGNsZWFyVGltZW91dCh0aGlzLl8ucHJvcGFnVE0pO1xuXHRcdFx0XHRcdHRoaXMuX3JldisrO1xuXHRcdFx0XHRcdHRoaXMuX3N0YWJsZSA9IHRydWU7XG5cdFx0XHRcdFx0dGhpcy5lbWl0KFwic3RhYmxlXCIsIHRoaXMpO1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdCF0aGlzLmRlYWQgJiYgdGhpcy5fcHJvcGFnKCk7Ly8gc3RhYmlsaXR5IGNhbiBpbmR1Y2UgZGVzdHJveVxuXHRcdFx0XHR9XG5cdFx0XHQpO1xuXHRcdH1cblx0XHRcblx0fVxuXHRcblx0LyoqXG5cdCAqIFByb3BhZyBzdG9yZXMgdXBkYXRlcyBiYXNpbmcgdGhlaXJzIGxhc3QgdXBkYXRlc1xuXHQgKi9cblx0cHJvcGFnKCkge1xuXHRcdHRoaXMuXy5wcm9wYWdUTSAmJiBjbGVhclRpbWVvdXQodGhpcy5fLnByb3BhZ1RNKTtcblx0XHR0aGlzLl8ucHJvcGFnVE0gPSBzZXRUaW1lb3V0KFxuXHRcdFx0ZSA9PiB7XG5cdFx0XHRcdHRoaXMuXy5wcm9wYWdUTSA9IG51bGw7XG5cdFx0XHRcdHRoaXMuX3Byb3BhZygpXG5cdFx0XHR9LCAyXG5cdFx0KTtcblx0fVxuXHRcblx0X3Byb3BhZygpIHtcblx0XHRpZiAoIHRoaXMuXy5mb2xsb3dlcnMubGVuZ3RoIClcblx0XHRcdHRoaXMuXy5mb2xsb3dlcnMuZm9yRWFjaCgoIHsgMDogb2JqLCAxOiBrZXksIDI6IGFzLCAzOiBsYXN0UmV2cywgMzogcmVtYXBzIH0gKSA9PiB7XG5cdFx0XHRcdGxldCBkYXRhID0gdGhpcy5nZXRVcGRhdGVzKGxhc3RSZXZzKTtcblx0XHRcdFx0aWYgKCAhZGF0YSApIHJldHVybjtcblx0XHRcdFx0Ly9jb25zb2xlLmxvZyhkYXRhLCBsYXN0UmV2cylcblx0XHRcdFx0aWYgKCB0eXBlb2Ygb2JqICE9IFwiZnVuY3Rpb25cIiApIHtcblx0XHRcdFx0XHQvL2NvbnNvbGUubG9nKFwic2V0U3RhdGUgXCIsb2JqLCBPYmplY3Qua2V5cyhkYXRhKSlcblx0XHRcdFx0XHRpZiAoIGFzICkgb2JqLnNldFN0YXRlKHsgW2FzXTogZGF0YSB9KTtcblx0XHRcdFx0XHRlbHNlIG9iai5zZXRTdGF0ZShkYXRhKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHRvYmooZGF0YSwgbGFzdFJldnMgJiYgWy4uLmxhc3RSZXZzXSB8fCBcIm5vIHJldnNcIik7XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gbGFzdFJldnMgJiZcblx0XHRcdFx0Ly8ga2V5LmZvckVhY2goaWQgPT4gKGxhc3RSZXZzW2lkXSA9IHRoaXMuc3RvcmVzW2lkXSAmJlxuXHRcdFx0XHQvLyB0aGlzLnN0b3Jlc1tpZF0uX3JldiB8fCAwKSk7XG5cdFx0XHR9KTtcblx0XHR0aGlzLmVtaXQoXCJ1cGRhdGVcIiwgdGhpcy5nZXRVcGRhdGVzKCkpO1xuXHR9XG5cdFxuXHQvKipcblx0ICogaXMgc3RhYmxlXG5cdCAqIEByZXR1cm5zIGJvb2xcblx0ICovXG5cdGlzU3RhYmxlKCkge1xuXHRcdHJldHVybiB0aGlzLl9zdGFibGU7XG5cdH1cblx0XG5cdF9hZGRDaGlsZCggY3R4ICkge1xuXHRcdHRoaXMuXy5jaGlsZFNjb3Blcy5wdXNoKGN0eCk7XG5cdFx0dGhpcy5fLnNlZW5DaGlsZHMrKztcblx0XHRsZXQgbGlzdHMgICAgID0ge1xuXHRcdFx0ICAgICdzdGFibGUnICAgICAgOiBzID0+IHtcblx0XHRcdFx0ICAgIHRoaXMuXy51blN0YWJsZUNoaWxkcy0tO1xuXHRcdFx0XHQgICAgaWYgKCAhdGhpcy5fLnVuU3RhYmxlQ2hpbGRzIClcblx0XHRcdFx0XHQgICAgdGhpcy5lbWl0KFwic3RhYmxlVHJlZVwiLCB0aGlzKVxuXHRcdFx0ICAgIH0sXG5cdFx0XHQgICAgJ3Vuc3RhYmxlJyAgICA6IHMgPT4ge1xuXHRcdFx0XHQgICAgdGhpcy5fLnVuU3RhYmxlQ2hpbGRzKys7XG5cdFx0XHRcdCAgICBpZiAoIDEgPT0gdGhpcy5fLnVuU3RhYmxlQ2hpbGRzIClcblx0XHRcdFx0XHQgICAgdGhpcy5lbWl0KFwidW5zdGFibGVUcmVlXCIsIHRoaXMpXG5cdFx0XHQgICAgfSxcblx0XHRcdCAgICAnc3RhYmxlVHJlZScgIDogcyA9PiB7XG5cdFx0XHRcdCAgICB0aGlzLl8udW5TdGFibGVDaGlsZHMtLTtcblx0XHRcdFx0ICAgIGlmICggIXRoaXMuXy51blN0YWJsZUNoaWxkcyApXG5cdFx0XHRcdFx0ICAgIHRoaXMuZW1pdChcInN0YWJsZVRyZWVcIiwgdGhpcylcblx0XHRcdCAgICB9LFxuXHRcdFx0ICAgICd1bnN0YWJsZVRyZWUnOiBzID0+IHtcblx0XHRcdFx0ICAgIHRoaXMuXy51blN0YWJsZUNoaWxkcysrO1xuXHRcdFx0XHQgICAgaWYgKCAxID09IHRoaXMuXy51blN0YWJsZUNoaWxkcyApXG5cdFx0XHRcdFx0ICAgIHRoaXMuZW1pdChcInVuc3RhYmxlVHJlZVwiLCB0aGlzKVxuXHRcdFx0ICAgIH0sXG5cdFx0XHQgICAgJ2Rlc3Ryb3knICAgICA6IGN0eCA9PiB7XG5cdFx0XHRcdCAgICBpZiAoIGN0eC5fLnVuU3RhYmxlQ2hpbGRzIClcblx0XHRcdFx0XHQgICAgdGhpcy5fLnVuU3RhYmxlQ2hpbGRzLS07XG5cdFx0XHRcdCAgICBpZiAoICFjdHguaXNTdGFibGUoKSApXG5cdFx0XHRcdFx0ICAgIHRoaXMuXy51blN0YWJsZUNoaWxkcy0tO1xuXHRcdFx0XHRcblx0XHRcdFx0ICAgIGlmICggIXRoaXMuXy51blN0YWJsZUNoaWxkcyApXG5cdFx0XHRcdFx0ICAgIHRoaXMuZW1pdChcInN0YWJsZVRyZWVcIiwgdGhpcylcblx0XHRcdCAgICB9XG5cdFx0ICAgIH0sXG5cdFx0ICAgIHdhc1N0YWJsZSA9IHRoaXMuXy51blN0YWJsZUNoaWxkcztcblx0XHQvLyFjdHguaXNTdGFibGUoKSAmJiBjb25zb2xlLndhcm4oJ2FkZCB1bnN0YWJsZSBjaGlsZCcpO1xuXHRcdCFjdHguaXNTdGFibGUoKSAmJiB0aGlzLl8udW5TdGFibGVDaGlsZHMrKztcblx0XHRjdHguXy51blN0YWJsZUNoaWxkcyAmJiB0aGlzLl8udW5TdGFibGVDaGlsZHMrKztcblx0XHR0aGlzLl8uY2hpbGRTY29wZXNMaXN0LnB1c2gobGlzdHMpO1xuXHRcdGlmICggIXdhc1N0YWJsZSAmJiB0aGlzLl8udW5TdGFibGVDaGlsZHMgKVxuXHRcdFx0dGhpcy5lbWl0KFwidW5zdGFibGVUcmVlXCIsIHRoaXMpXG5cdFx0Y3R4Lm9uKGxpc3RzKTtcblx0fVxuXHRcblx0X3JtQ2hpbGQoIGN0eCApIHtcblx0XHRsZXQgaSAgICAgICAgID0gdGhpcy5fLmNoaWxkU2NvcGVzLmluZGV4T2YoY3R4KSxcblx0XHQgICAgd2FzU3RhYmxlID0gdGhpcy5fLnVuU3RhYmxlQ2hpbGRzO1xuXHRcdGlmICggaSAhPSAtMSApIHtcblx0XHRcdHRoaXMuXy5jaGlsZFNjb3Blcy5zcGxpY2UoaSwgMSk7XG5cdFx0XHQhY3R4LmlzU3RhYmxlKCkgJiYgdGhpcy5fLnVuU3RhYmxlQ2hpbGRzLS07XG5cdFx0XHRjdHguXy51blN0YWJsZUNoaWxkcyAmJiB0aGlzLl8udW5TdGFibGVDaGlsZHMtLTtcblx0XHRcdGN0eC51bih0aGlzLl8uY2hpbGRTY29wZXNMaXN0LnNwbGljZShpLCAxKVswXSk7XG5cdFx0XHRpZiAoIHdhc1N0YWJsZSAmJiAhdGhpcy5fLnVuU3RhYmxlQ2hpbGRzIClcblx0XHRcdFx0dGhpcy5lbWl0KFwic3RhYmxlVHJlZVwiKVxuXHRcdH1cblx0fVxuXHRcblx0cmV0YWluKCByZWFzb24gKSB7XG5cdFx0dGhpcy5fX3JldGFpbnMuYWxsKys7XG5cdFx0Ly9jb25zb2xlLmxvZyhcInJldGFpblwiLCB0aGlzLl9pZCwgcmVhc29uKTtcblx0XHRpZiAoIHJlYXNvbiApIHtcblx0XHRcdHRoaXMuX19yZXRhaW5zW3JlYXNvbl0gPSB0aGlzLl9fcmV0YWluc1tyZWFzb25dIHx8IDA7XG5cdFx0XHR0aGlzLl9fcmV0YWluc1tyZWFzb25dKys7XG5cdFx0fVxuXHR9XG5cdFxuXHRkaXNwb3NlKCByZWFzb24gKSB7XG5cdFx0Ly9jb25zb2xlLmxvZyhcImRpc3Bvc2VcIiwgdGhpcy5faWQsIHJlYXNvbik7XG5cdFx0aWYgKCByZWFzb24gKSB7XG5cdFx0XHRpZiAoICF0aGlzLl9fcmV0YWluc1tyZWFzb25dIClcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiRGlzcG9zZSBtb3JlIHRoYW4gcmV0YWluaW5nIDogXCIgKyByZWFzb24pO1xuXHRcdFx0dGhpcy5fX3JldGFpbnNbcmVhc29uXS0tO1xuXHRcdH1cblx0XHRcblx0XHRpZiAoICF0aGlzLl9fcmV0YWlucy5hbGwgKVxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiRGlzcG9zZSBtb3JlIHRoYW4gcmV0YWluaW5nICFcIik7XG5cdFx0XG5cdFx0dGhpcy5fX3JldGFpbnMuYWxsLS07XG5cdFx0XG5cdFx0aWYgKCAhdGhpcy5fX3JldGFpbnMuYWxsICkge1xuXHRcdFx0Ly9jb25zb2xlLmxvZyhcImRpc3Bvc2UgZG8gZGVzdHJveSBcIiwgdGhpcy5faWQsIHRoaXMuX3BlcnNpc3RlbmNlVG0pO1xuXHRcdFx0aWYgKCB0aGlzLl8ucGVyc2lzdGVuY2VUbSApIHtcblx0XHRcdFx0dGhpcy5fLmRlc3Ryb3lUTSAmJiBjbGVhclRpbWVvdXQodGhpcy5fLmRlc3Ryb3lUTSk7XG5cdFx0XHRcdHRoaXMuXy5kZXN0cm95VE0gPSBzZXRUaW1lb3V0KFxuXHRcdFx0XHRcdGUgPT4ge1xuXHRcdFx0XHRcdFx0Ly90aGlzLnRoZW4ocyA9PiB7XG5cdFx0XHRcdFx0XHQhdGhpcy5fX3JldGFpbnMuYWxsICYmICF0aGlzLmRlYWQgJiYgdGhpcy5kZXN0cm95KClcblx0XHRcdFx0XHRcdC8vfSk7XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR0aGlzLl8ucGVyc2lzdGVuY2VUbVxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdC8vdGhpcy50aGVuKHMgPT5cblx0XHRcdFx0KCF0aGlzLl9fcmV0YWlucy5hbGwgJiYgIXRoaXMuZGVhZCAmJiB0aGlzLmRlc3Ryb3koKSlcblx0XHRcdFx0Ly8pO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRcblx0LyoqXG5cdCAqIG9yZGVyIGRlc3Ryb3kgb2YgbG9jYWwgc3RvcmVzXG5cdCAqL1xuXHRkZXN0cm95KCkge1xuXHRcdGxldCBjdHggPSB0aGlzLl8uX3Njb3BlO1xuXHRcdC8vY29uc29sZS53YXJuKFwiZGVzdHJveVwiLCB0aGlzLl9pZCk7XG5cdFx0dGhpcy5fLnN0YWJpbGl6ZXJUTSAmJiBjbGVhclRpbWVvdXQodGhpcy5fLnN0YWJpbGl6ZXJUTSk7XG5cdFx0dGhpcy5fLnByb3BhZ1RNICYmIGNsZWFyVGltZW91dCh0aGlzLl8ucHJvcGFnVE0pO1xuXHRcdE9iamVjdC5rZXlzKFxuXHRcdFx0dGhpcy5fLl9saXN0ZW5pbmdcblx0XHQpLmZvckVhY2goXG5cdFx0XHRpZCA9PiAoKGlkICE9PSBcIiRwYXJlbnRcIikgJiYgdGhpcy5fLl9zY29wZVtpZF0ucmVtb3ZlTGlzdGVuZXIodGhpcy5fLl9saXN0ZW5pbmdbaWRdKSlcblx0XHQpO1xuXHRcdHdoaWxlICggdGhpcy5fLl9taXhlZExpc3QubGVuZ3RoICkge1xuXHRcdFx0dGhpcy5fLl9taXhlZFswXS5yZW1vdmVMaXN0ZW5lcih0aGlzLl8uX21peGVkTGlzdC5zaGlmdCgpKTtcblx0XHRcdHRoaXMuXy5fbWl4ZWQuc2hpZnQoKS5kaXNwb3NlKFwibWl4ZWRUb1wiKTtcblx0XHR9XG5cdFx0Wy4uLnRoaXMuXy5mb2xsb3dlcnNdLm1hcChmb2xsb3dlciA9PiB0aGlzLnVuQmluZCguLi5mb2xsb3dlcikpO1xuXHRcdGZvciAoIGxldCBrZXkgaW4gY3R4IClcblx0XHRcdGlmICggIWlzLmZuKGN0eFtrZXldKSApIHtcblx0XHRcdFx0aWYgKCBrZXkgPT0gXCIkcGFyZW50XCIgKSBjb250aW51ZTtcblx0XHRcdFx0IWN0eFtrZXldLl9hdXRvRGVzdHJveSAmJiBjdHhba2V5XS5kaXNwb3NlKFwic2NvcGVkXCIpO1xuXHRcdFx0fVxuXHRcdGlmICggdGhpcy5fLl9wYXJlbnRMaXN0ICkge1xuXHRcdFx0dGhpcy5wYXJlbnQuX3JtQ2hpbGQodGhpcyk7XG5cdFx0XHR0aGlzLnBhcmVudC5yZW1vdmVMaXN0ZW5lcih0aGlzLl8uX3BhcmVudExpc3QpO1xuXHRcdFx0dGhpcy5wYXJlbnQuZGlzcG9zZShcImlzTXlQYXJlbnRcIik7XG5cdFx0XHR0aGlzLl8uX3BhcmVudExpc3QgPSBudWxsO1xuXHRcdH1cblx0XHR0aGlzLmRlYWQgPSB0cnVlO1xuXHRcdHRoaXMuZW1pdChcImRlc3Ryb3lcIiwgdGhpcyk7XG5cdFx0XG5cdFx0XG5cdFx0Ly9pZiAoICF0aGlzLl8uaXNMb2NhbElkIClcblx0XHRkZWxldGUgb3BlblNjb3Blc1t0aGlzLl9pZF07XG5cdFx0XG5cdFx0Ly90aGlzLl8gPSBudWxsO1xuXHRcdFxuXHR9XG59XG5cblxuaXMucnNTY29wZSA9IGZ1bmN0aW9uICggb2JqICkge1xuXHRyZXR1cm4gb2JqIGluc3RhbmNlb2YgU2NvcGVcbn1cblxuaXMucnNTY29wZUNsYXNzID0gZnVuY3Rpb24gKCBvYmogKSB7XG5cdHJldHVybiBTY29wZS5pc1Byb3RvdHlwZU9mKG9iaikgfHwgb2JqID09PSBTY29wZVxufVxuZXhwb3J0IGRlZmF1bHQgU2NvcGU7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1Njb3BlLmpzIiwidmFyIGlzID0gcmVxdWlyZSgnaXMnKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIC4uLmlzXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbHMvaXMuanMiLCIvKiBnbG9iYWxzIHdpbmRvdywgSFRNTEVsZW1lbnQgKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKiohXG4gKiBpc1xuICogdGhlIGRlZmluaXRpdmUgSmF2YVNjcmlwdCB0eXBlIHRlc3RpbmcgbGlicmFyeVxuICpcbiAqIEBjb3B5cmlnaHQgMjAxMy0yMDE0IEVucmljbyBNYXJpbm8gLyBKb3JkYW4gSGFyYmFuZFxuICogQGxpY2Vuc2UgTUlUXG4gKi9cblxudmFyIG9ialByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcbnZhciBvd25zID0gb2JqUHJvdG8uaGFzT3duUHJvcGVydHk7XG52YXIgdG9TdHIgPSBvYmpQcm90by50b1N0cmluZztcbnZhciBzeW1ib2xWYWx1ZU9mO1xuaWYgKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicpIHtcbiAgc3ltYm9sVmFsdWVPZiA9IFN5bWJvbC5wcm90b3R5cGUudmFsdWVPZjtcbn1cbnZhciBpc0FjdHVhbE5hTiA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT09IHZhbHVlO1xufTtcbnZhciBOT05fSE9TVF9UWVBFUyA9IHtcbiAgJ2Jvb2xlYW4nOiAxLFxuICBudW1iZXI6IDEsXG4gIHN0cmluZzogMSxcbiAgdW5kZWZpbmVkOiAxXG59O1xuXG52YXIgYmFzZTY0UmVnZXggPSAvXihbQS1aYS16MC05Ky9dezR9KSooW0EtWmEtejAtOSsvXXs0fXxbQS1aYS16MC05Ky9dezN9PXxbQS1aYS16MC05Ky9dezJ9PT0pJC87XG52YXIgaGV4UmVnZXggPSAvXltBLUZhLWYwLTldKyQvO1xuXG4vKipcbiAqIEV4cG9zZSBgaXNgXG4gKi9cblxudmFyIGlzID0ge307XG5cbi8qKlxuICogVGVzdCBnZW5lcmFsLlxuICovXG5cbi8qKlxuICogaXMudHlwZVxuICogVGVzdCBpZiBgdmFsdWVgIGlzIGEgdHlwZSBvZiBgdHlwZWAuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGUgdHlwZVxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBgdmFsdWVgIGlzIGEgdHlwZSBvZiBgdHlwZWAsIGZhbHNlIG90aGVyd2lzZVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5pcy5hID0gaXMudHlwZSA9IGZ1bmN0aW9uICh2YWx1ZSwgdHlwZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSB0eXBlO1xufTtcblxuLyoqXG4gKiBpcy5kZWZpbmVkXG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgZGVmaW5lZC5cbiAqXG4gKiBAcGFyYW0ge01peGVkfSB2YWx1ZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmICd2YWx1ZScgaXMgZGVmaW5lZCwgZmFsc2Ugb3RoZXJ3aXNlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmlzLmRlZmluZWQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCc7XG59O1xuXG4vKipcbiAqIGlzLmVtcHR5XG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgZW1wdHkuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBgdmFsdWVgIGlzIGVtcHR5LCBmYWxzZSBvdGhlcndpc2VcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuaXMuZW1wdHkgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0b1N0ci5jYWxsKHZhbHVlKTtcbiAgdmFyIGtleTtcblxuICBpZiAodHlwZSA9PT0gJ1tvYmplY3QgQXJyYXldJyB8fCB0eXBlID09PSAnW29iamVjdCBBcmd1bWVudHNdJyB8fCB0eXBlID09PSAnW29iamVjdCBTdHJpbmddJykge1xuICAgIHJldHVybiB2YWx1ZS5sZW5ndGggPT09IDA7XG4gIH1cblxuICBpZiAodHlwZSA9PT0gJ1tvYmplY3QgT2JqZWN0XScpIHtcbiAgICBmb3IgKGtleSBpbiB2YWx1ZSkge1xuICAgICAgaWYgKG93bnMuY2FsbCh2YWx1ZSwga2V5KSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuICF2YWx1ZTtcbn07XG5cbi8qKlxuICogaXMuZXF1YWxcbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBlcXVhbCB0byBgb3RoZXJgLlxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEBwYXJhbSB7TWl4ZWR9IG90aGVyIHZhbHVlIHRvIGNvbXBhcmUgd2l0aFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBgdmFsdWVgIGlzIGVxdWFsIHRvIGBvdGhlcmAsIGZhbHNlIG90aGVyd2lzZVxuICovXG5cbmlzLmVxdWFsID0gZnVuY3Rpb24gZXF1YWwodmFsdWUsIG90aGVyKSB7XG4gIGlmICh2YWx1ZSA9PT0gb3RoZXIpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHZhciB0eXBlID0gdG9TdHIuY2FsbCh2YWx1ZSk7XG4gIHZhciBrZXk7XG5cbiAgaWYgKHR5cGUgIT09IHRvU3RyLmNhbGwob3RoZXIpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKHR5cGUgPT09ICdbb2JqZWN0IE9iamVjdF0nKSB7XG4gICAgZm9yIChrZXkgaW4gdmFsdWUpIHtcbiAgICAgIGlmICghaXMuZXF1YWwodmFsdWVba2V5XSwgb3RoZXJba2V5XSkgfHwgIShrZXkgaW4gb3RoZXIpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgZm9yIChrZXkgaW4gb3RoZXIpIHtcbiAgICAgIGlmICghaXMuZXF1YWwodmFsdWVba2V5XSwgb3RoZXJba2V5XSkgfHwgIShrZXkgaW4gdmFsdWUpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAodHlwZSA9PT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgIGtleSA9IHZhbHVlLmxlbmd0aDtcbiAgICBpZiAoa2V5ICE9PSBvdGhlci5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgd2hpbGUgKGtleS0tKSB7XG4gICAgICBpZiAoIWlzLmVxdWFsKHZhbHVlW2tleV0sIG90aGVyW2tleV0pKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAodHlwZSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJykge1xuICAgIHJldHVybiB2YWx1ZS5wcm90b3R5cGUgPT09IG90aGVyLnByb3RvdHlwZTtcbiAgfVxuXG4gIGlmICh0eXBlID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICByZXR1cm4gdmFsdWUuZ2V0VGltZSgpID09PSBvdGhlci5nZXRUaW1lKCk7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59O1xuXG4vKipcbiAqIGlzLmhvc3RlZFxuICogVGVzdCBpZiBgdmFsdWVgIGlzIGhvc3RlZCBieSBgaG9zdGAuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgdG8gdGVzdFxuICogQHBhcmFtIHtNaXhlZH0gaG9zdCBob3N0IHRvIHRlc3Qgd2l0aFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBgdmFsdWVgIGlzIGhvc3RlZCBieSBgaG9zdGAsIGZhbHNlIG90aGVyd2lzZVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5pcy5ob3N0ZWQgPSBmdW5jdGlvbiAodmFsdWUsIGhvc3QpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgaG9zdFt2YWx1ZV07XG4gIHJldHVybiB0eXBlID09PSAnb2JqZWN0JyA/ICEhaG9zdFt2YWx1ZV0gOiAhTk9OX0hPU1RfVFlQRVNbdHlwZV07XG59O1xuXG4vKipcbiAqIGlzLmluc3RhbmNlXG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgYW4gaW5zdGFuY2Ugb2YgYGNvbnN0cnVjdG9yYC5cbiAqXG4gKiBAcGFyYW0ge01peGVkfSB2YWx1ZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGB2YWx1ZWAgaXMgYW4gaW5zdGFuY2Ugb2YgYGNvbnN0cnVjdG9yYFxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5pcy5pbnN0YW5jZSA9IGlzWydpbnN0YW5jZW9mJ10gPSBmdW5jdGlvbiAodmFsdWUsIGNvbnN0cnVjdG9yKSB7XG4gIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIGNvbnN0cnVjdG9yO1xufTtcblxuLyoqXG4gKiBpcy5uaWwgLyBpcy5udWxsXG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgbnVsbC5cbiAqXG4gKiBAcGFyYW0ge01peGVkfSB2YWx1ZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGB2YWx1ZWAgaXMgbnVsbCwgZmFsc2Ugb3RoZXJ3aXNlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmlzLm5pbCA9IGlzWydudWxsJ10gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID09PSBudWxsO1xufTtcblxuLyoqXG4gKiBpcy51bmRlZiAvIGlzLnVuZGVmaW5lZFxuICogVGVzdCBpZiBgdmFsdWVgIGlzIHVuZGVmaW5lZC5cbiAqXG4gKiBAcGFyYW0ge01peGVkfSB2YWx1ZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGB2YWx1ZWAgaXMgdW5kZWZpbmVkLCBmYWxzZSBvdGhlcndpc2VcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuaXMudW5kZWYgPSBpcy51bmRlZmluZWQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCc7XG59O1xuXG4vKipcbiAqIFRlc3QgYXJndW1lbnRzLlxuICovXG5cbi8qKlxuICogaXMuYXJnc1xuICogVGVzdCBpZiBgdmFsdWVgIGlzIGFuIGFyZ3VtZW50cyBvYmplY3QuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBgdmFsdWVgIGlzIGFuIGFyZ3VtZW50cyBvYmplY3QsIGZhbHNlIG90aGVyd2lzZVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5pcy5hcmdzID0gaXMuYXJndW1lbnRzID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHZhciBpc1N0YW5kYXJkQXJndW1lbnRzID0gdG9TdHIuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IEFyZ3VtZW50c10nO1xuICB2YXIgaXNPbGRBcmd1bWVudHMgPSAhaXMuYXJyYXkodmFsdWUpICYmIGlzLmFycmF5bGlrZSh2YWx1ZSkgJiYgaXMub2JqZWN0KHZhbHVlKSAmJiBpcy5mbih2YWx1ZS5jYWxsZWUpO1xuICByZXR1cm4gaXNTdGFuZGFyZEFyZ3VtZW50cyB8fCBpc09sZEFyZ3VtZW50cztcbn07XG5cbi8qKlxuICogVGVzdCBhcnJheS5cbiAqL1xuXG4vKipcbiAqIGlzLmFycmF5XG4gKiBUZXN0IGlmICd2YWx1ZScgaXMgYW4gYXJyYXkuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBgdmFsdWVgIGlzIGFuIGFycmF5LCBmYWxzZSBvdGhlcndpc2VcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuaXMuYXJyYXkgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uICh2YWx1ZSkge1xuICByZXR1cm4gdG9TdHIuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IEFycmF5XSc7XG59O1xuXG4vKipcbiAqIGlzLmFyZ3VtZW50cy5lbXB0eVxuICogVGVzdCBpZiBgdmFsdWVgIGlzIGFuIGVtcHR5IGFyZ3VtZW50cyBvYmplY3QuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBgdmFsdWVgIGlzIGFuIGVtcHR5IGFyZ3VtZW50cyBvYmplY3QsIGZhbHNlIG90aGVyd2lzZVxuICogQGFwaSBwdWJsaWNcbiAqL1xuaXMuYXJncy5lbXB0eSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICByZXR1cm4gaXMuYXJncyh2YWx1ZSkgJiYgdmFsdWUubGVuZ3RoID09PSAwO1xufTtcblxuLyoqXG4gKiBpcy5hcnJheS5lbXB0eVxuICogVGVzdCBpZiBgdmFsdWVgIGlzIGFuIGVtcHR5IGFycmF5LlxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgYHZhbHVlYCBpcyBhbiBlbXB0eSBhcnJheSwgZmFsc2Ugb3RoZXJ3aXNlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5pcy5hcnJheS5lbXB0eSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICByZXR1cm4gaXMuYXJyYXkodmFsdWUpICYmIHZhbHVlLmxlbmd0aCA9PT0gMDtcbn07XG5cbi8qKlxuICogaXMuYXJyYXlsaWtlXG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgYW4gYXJyYXlsaWtlIG9iamVjdC5cbiAqXG4gKiBAcGFyYW0ge01peGVkfSB2YWx1ZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGB2YWx1ZWAgaXMgYW4gYXJndW1lbnRzIG9iamVjdCwgZmFsc2Ugb3RoZXJ3aXNlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmlzLmFycmF5bGlrZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICByZXR1cm4gISF2YWx1ZSAmJiAhaXMuYm9vbCh2YWx1ZSlcbiAgICAmJiBvd25zLmNhbGwodmFsdWUsICdsZW5ndGgnKVxuICAgICYmIGlzRmluaXRlKHZhbHVlLmxlbmd0aClcbiAgICAmJiBpcy5udW1iZXIodmFsdWUubGVuZ3RoKVxuICAgICYmIHZhbHVlLmxlbmd0aCA+PSAwO1xufTtcblxuLyoqXG4gKiBUZXN0IGJvb2xlYW4uXG4gKi9cblxuLyoqXG4gKiBpcy5ib29sXG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgYSBib29sZWFuLlxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgYHZhbHVlYCBpcyBhIGJvb2xlYW4sIGZhbHNlIG90aGVyd2lzZVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5pcy5ib29sID0gaXNbJ2Jvb2xlYW4nXSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICByZXR1cm4gdG9TdHIuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IEJvb2xlYW5dJztcbn07XG5cbi8qKlxuICogaXMuZmFsc2VcbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBmYWxzZS5cbiAqXG4gKiBAcGFyYW0ge01peGVkfSB2YWx1ZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGB2YWx1ZWAgaXMgZmFsc2UsIGZhbHNlIG90aGVyd2lzZVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5pc1snZmFsc2UnXSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICByZXR1cm4gaXMuYm9vbCh2YWx1ZSkgJiYgQm9vbGVhbihOdW1iZXIodmFsdWUpKSA9PT0gZmFsc2U7XG59O1xuXG4vKipcbiAqIGlzLnRydWVcbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyB0cnVlLlxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgYHZhbHVlYCBpcyB0cnVlLCBmYWxzZSBvdGhlcndpc2VcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuaXNbJ3RydWUnXSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICByZXR1cm4gaXMuYm9vbCh2YWx1ZSkgJiYgQm9vbGVhbihOdW1iZXIodmFsdWUpKSA9PT0gdHJ1ZTtcbn07XG5cbi8qKlxuICogVGVzdCBkYXRlLlxuICovXG5cbi8qKlxuICogaXMuZGF0ZVxuICogVGVzdCBpZiBgdmFsdWVgIGlzIGEgZGF0ZS5cbiAqXG4gKiBAcGFyYW0ge01peGVkfSB2YWx1ZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGB2YWx1ZWAgaXMgYSBkYXRlLCBmYWxzZSBvdGhlcndpc2VcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuaXMuZGF0ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICByZXR1cm4gdG9TdHIuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IERhdGVdJztcbn07XG5cbi8qKlxuICogaXMuZGF0ZS52YWxpZFxuICogVGVzdCBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgZGF0ZS5cbiAqXG4gKiBAcGFyYW0ge01peGVkfSB2YWx1ZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdHJ1ZSBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgZGF0ZSwgZmFsc2Ugb3RoZXJ3aXNlXG4gKi9cbmlzLmRhdGUudmFsaWQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIGlzLmRhdGUodmFsdWUpICYmICFpc05hTihOdW1iZXIodmFsdWUpKTtcbn07XG5cbi8qKlxuICogVGVzdCBlbGVtZW50LlxuICovXG5cbi8qKlxuICogaXMuZWxlbWVudFxuICogVGVzdCBpZiBgdmFsdWVgIGlzIGFuIGh0bWwgZWxlbWVudC5cbiAqXG4gKiBAcGFyYW0ge01peGVkfSB2YWx1ZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGB2YWx1ZWAgaXMgYW4gSFRNTCBFbGVtZW50LCBmYWxzZSBvdGhlcndpc2VcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuaXMuZWxlbWVudCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT09IHVuZGVmaW5lZFxuICAgICYmIHR5cGVvZiBIVE1MRWxlbWVudCAhPT0gJ3VuZGVmaW5lZCdcbiAgICAmJiB2YWx1ZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50XG4gICAgJiYgdmFsdWUubm9kZVR5cGUgPT09IDE7XG59O1xuXG4vKipcbiAqIFRlc3QgZXJyb3IuXG4gKi9cblxuLyoqXG4gKiBpcy5lcnJvclxuICogVGVzdCBpZiBgdmFsdWVgIGlzIGFuIGVycm9yIG9iamVjdC5cbiAqXG4gKiBAcGFyYW0ge01peGVkfSB2YWx1ZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGB2YWx1ZWAgaXMgYW4gZXJyb3Igb2JqZWN0LCBmYWxzZSBvdGhlcndpc2VcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuaXMuZXJyb3IgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIHRvU3RyLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBFcnJvcl0nO1xufTtcblxuLyoqXG4gKiBUZXN0IGZ1bmN0aW9uLlxuICovXG5cbi8qKlxuICogaXMuZm4gLyBpcy5mdW5jdGlvbiAoZGVwcmVjYXRlZClcbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBhIGZ1bmN0aW9uLlxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgYHZhbHVlYCBpcyBhIGZ1bmN0aW9uLCBmYWxzZSBvdGhlcndpc2VcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuaXMuZm4gPSBpc1snZnVuY3Rpb24nXSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICB2YXIgaXNBbGVydCA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHZhbHVlID09PSB3aW5kb3cuYWxlcnQ7XG4gIGlmIChpc0FsZXJ0KSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgdmFyIHN0ciA9IHRvU3RyLmNhbGwodmFsdWUpO1xuICByZXR1cm4gc3RyID09PSAnW29iamVjdCBGdW5jdGlvbl0nIHx8IHN0ciA9PT0gJ1tvYmplY3QgR2VuZXJhdG9yRnVuY3Rpb25dJyB8fCBzdHIgPT09ICdbb2JqZWN0IEFzeW5jRnVuY3Rpb25dJztcbn07XG5cbi8qKlxuICogVGVzdCBudW1iZXIuXG4gKi9cblxuLyoqXG4gKiBpcy5udW1iZXJcbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBhIG51bWJlci5cbiAqXG4gKiBAcGFyYW0ge01peGVkfSB2YWx1ZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGB2YWx1ZWAgaXMgYSBudW1iZXIsIGZhbHNlIG90aGVyd2lzZVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5pcy5udW1iZXIgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIHRvU3RyLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBOdW1iZXJdJztcbn07XG5cbi8qKlxuICogaXMuaW5maW5pdGVcbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBwb3NpdGl2ZSBvciBuZWdhdGl2ZSBpbmZpbml0eS5cbiAqXG4gKiBAcGFyYW0ge01peGVkfSB2YWx1ZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGB2YWx1ZWAgaXMgcG9zaXRpdmUgb3IgbmVnYXRpdmUgSW5maW5pdHksIGZhbHNlIG90aGVyd2lzZVxuICogQGFwaSBwdWJsaWNcbiAqL1xuaXMuaW5maW5pdGUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID09PSBJbmZpbml0eSB8fCB2YWx1ZSA9PT0gLUluZmluaXR5O1xufTtcblxuLyoqXG4gKiBpcy5kZWNpbWFsXG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgYSBkZWNpbWFsIG51bWJlci5cbiAqXG4gKiBAcGFyYW0ge01peGVkfSB2YWx1ZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGB2YWx1ZWAgaXMgYSBkZWNpbWFsIG51bWJlciwgZmFsc2Ugb3RoZXJ3aXNlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmlzLmRlY2ltYWwgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIGlzLm51bWJlcih2YWx1ZSkgJiYgIWlzQWN0dWFsTmFOKHZhbHVlKSAmJiAhaXMuaW5maW5pdGUodmFsdWUpICYmIHZhbHVlICUgMSAhPT0gMDtcbn07XG5cbi8qKlxuICogaXMuZGl2aXNpYmxlQnlcbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBkaXZpc2libGUgYnkgYG5gLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSB2YWx1ZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcGFyYW0ge051bWJlcn0gbiBkaXZpZGVuZFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBgdmFsdWVgIGlzIGRpdmlzaWJsZSBieSBgbmAsIGZhbHNlIG90aGVyd2lzZVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5pcy5kaXZpc2libGVCeSA9IGZ1bmN0aW9uICh2YWx1ZSwgbikge1xuICB2YXIgaXNEaXZpZGVuZEluZmluaXRlID0gaXMuaW5maW5pdGUodmFsdWUpO1xuICB2YXIgaXNEaXZpc29ySW5maW5pdGUgPSBpcy5pbmZpbml0ZShuKTtcbiAgdmFyIGlzTm9uWmVyb051bWJlciA9IGlzLm51bWJlcih2YWx1ZSkgJiYgIWlzQWN0dWFsTmFOKHZhbHVlKSAmJiBpcy5udW1iZXIobikgJiYgIWlzQWN0dWFsTmFOKG4pICYmIG4gIT09IDA7XG4gIHJldHVybiBpc0RpdmlkZW5kSW5maW5pdGUgfHwgaXNEaXZpc29ySW5maW5pdGUgfHwgKGlzTm9uWmVyb051bWJlciAmJiB2YWx1ZSAlIG4gPT09IDApO1xufTtcblxuLyoqXG4gKiBpcy5pbnRlZ2VyXG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgYW4gaW50ZWdlci5cbiAqXG4gKiBAcGFyYW0gdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBgdmFsdWVgIGlzIGFuIGludGVnZXIsIGZhbHNlIG90aGVyd2lzZVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5pcy5pbnRlZ2VyID0gaXNbJ2ludCddID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiBpcy5udW1iZXIodmFsdWUpICYmICFpc0FjdHVhbE5hTih2YWx1ZSkgJiYgdmFsdWUgJSAxID09PSAwO1xufTtcblxuLyoqXG4gKiBpcy5tYXhpbXVtXG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgZ3JlYXRlciB0aGFuICdvdGhlcnMnIHZhbHVlcy5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHBhcmFtIHtBcnJheX0gb3RoZXJzIHZhbHVlcyB0byBjb21wYXJlIHdpdGhcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgYHZhbHVlYCBpcyBncmVhdGVyIHRoYW4gYG90aGVyc2AgdmFsdWVzXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmlzLm1heGltdW0gPSBmdW5jdGlvbiAodmFsdWUsIG90aGVycykge1xuICBpZiAoaXNBY3R1YWxOYU4odmFsdWUpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignTmFOIGlzIG5vdCBhIHZhbGlkIHZhbHVlJyk7XG4gIH0gZWxzZSBpZiAoIWlzLmFycmF5bGlrZShvdGhlcnMpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignc2Vjb25kIGFyZ3VtZW50IG11c3QgYmUgYXJyYXktbGlrZScpO1xuICB9XG4gIHZhciBsZW4gPSBvdGhlcnMubGVuZ3RoO1xuXG4gIHdoaWxlICgtLWxlbiA+PSAwKSB7XG4gICAgaWYgKHZhbHVlIDwgb3RoZXJzW2xlbl0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbi8qKlxuICogaXMubWluaW11bVxuICogVGVzdCBpZiBgdmFsdWVgIGlzIGxlc3MgdGhhbiBgb3RoZXJzYCB2YWx1ZXMuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEBwYXJhbSB7QXJyYXl9IG90aGVycyB2YWx1ZXMgdG8gY29tcGFyZSB3aXRoXG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGB2YWx1ZWAgaXMgbGVzcyB0aGFuIGBvdGhlcnNgIHZhbHVlc1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5pcy5taW5pbXVtID0gZnVuY3Rpb24gKHZhbHVlLCBvdGhlcnMpIHtcbiAgaWYgKGlzQWN0dWFsTmFOKHZhbHVlKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ05hTiBpcyBub3QgYSB2YWxpZCB2YWx1ZScpO1xuICB9IGVsc2UgaWYgKCFpcy5hcnJheWxpa2Uob3RoZXJzKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ3NlY29uZCBhcmd1bWVudCBtdXN0IGJlIGFycmF5LWxpa2UnKTtcbiAgfVxuICB2YXIgbGVuID0gb3RoZXJzLmxlbmd0aDtcblxuICB3aGlsZSAoLS1sZW4gPj0gMCkge1xuICAgIGlmICh2YWx1ZSA+IG90aGVyc1tsZW5dKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuXG4vKipcbiAqIGlzLm5hblxuICogVGVzdCBpZiBgdmFsdWVgIGlzIG5vdCBhIG51bWJlci5cbiAqXG4gKiBAcGFyYW0ge01peGVkfSB2YWx1ZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGB2YWx1ZWAgaXMgbm90IGEgbnVtYmVyLCBmYWxzZSBvdGhlcndpc2VcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuaXMubmFuID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiAhaXMubnVtYmVyKHZhbHVlKSB8fCB2YWx1ZSAhPT0gdmFsdWU7XG59O1xuXG4vKipcbiAqIGlzLmV2ZW5cbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBhbiBldmVuIG51bWJlci5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBgdmFsdWVgIGlzIGFuIGV2ZW4gbnVtYmVyLCBmYWxzZSBvdGhlcndpc2VcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuaXMuZXZlbiA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICByZXR1cm4gaXMuaW5maW5pdGUodmFsdWUpIHx8IChpcy5udW1iZXIodmFsdWUpICYmIHZhbHVlID09PSB2YWx1ZSAmJiB2YWx1ZSAlIDIgPT09IDApO1xufTtcblxuLyoqXG4gKiBpcy5vZGRcbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBhbiBvZGQgbnVtYmVyLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSB2YWx1ZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGB2YWx1ZWAgaXMgYW4gb2RkIG51bWJlciwgZmFsc2Ugb3RoZXJ3aXNlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmlzLm9kZCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICByZXR1cm4gaXMuaW5maW5pdGUodmFsdWUpIHx8IChpcy5udW1iZXIodmFsdWUpICYmIHZhbHVlID09PSB2YWx1ZSAmJiB2YWx1ZSAlIDIgIT09IDApO1xufTtcblxuLyoqXG4gKiBpcy5nZVxuICogVGVzdCBpZiBgdmFsdWVgIGlzIGdyZWF0ZXIgdGhhbiBvciBlcXVhbCB0byBgb3RoZXJgLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSB2YWx1ZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcGFyYW0ge051bWJlcn0gb3RoZXIgdmFsdWUgdG8gY29tcGFyZSB3aXRoXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5pcy5nZSA9IGZ1bmN0aW9uICh2YWx1ZSwgb3RoZXIpIHtcbiAgaWYgKGlzQWN0dWFsTmFOKHZhbHVlKSB8fCBpc0FjdHVhbE5hTihvdGhlcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdOYU4gaXMgbm90IGEgdmFsaWQgdmFsdWUnKTtcbiAgfVxuICByZXR1cm4gIWlzLmluZmluaXRlKHZhbHVlKSAmJiAhaXMuaW5maW5pdGUob3RoZXIpICYmIHZhbHVlID49IG90aGVyO1xufTtcblxuLyoqXG4gKiBpcy5ndFxuICogVGVzdCBpZiBgdmFsdWVgIGlzIGdyZWF0ZXIgdGhhbiBgb3RoZXJgLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSB2YWx1ZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcGFyYW0ge051bWJlcn0gb3RoZXIgdmFsdWUgdG8gY29tcGFyZSB3aXRoXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5pcy5ndCA9IGZ1bmN0aW9uICh2YWx1ZSwgb3RoZXIpIHtcbiAgaWYgKGlzQWN0dWFsTmFOKHZhbHVlKSB8fCBpc0FjdHVhbE5hTihvdGhlcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdOYU4gaXMgbm90IGEgdmFsaWQgdmFsdWUnKTtcbiAgfVxuICByZXR1cm4gIWlzLmluZmluaXRlKHZhbHVlKSAmJiAhaXMuaW5maW5pdGUob3RoZXIpICYmIHZhbHVlID4gb3RoZXI7XG59O1xuXG4vKipcbiAqIGlzLmxlXG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgbGVzcyB0aGFuIG9yIGVxdWFsIHRvIGBvdGhlcmAuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEBwYXJhbSB7TnVtYmVyfSBvdGhlciB2YWx1ZSB0byBjb21wYXJlIHdpdGhcbiAqIEByZXR1cm4ge0Jvb2xlYW59IGlmICd2YWx1ZScgaXMgbGVzcyB0aGFuIG9yIGVxdWFsIHRvICdvdGhlcidcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuaXMubGUgPSBmdW5jdGlvbiAodmFsdWUsIG90aGVyKSB7XG4gIGlmIChpc0FjdHVhbE5hTih2YWx1ZSkgfHwgaXNBY3R1YWxOYU4ob3RoZXIpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignTmFOIGlzIG5vdCBhIHZhbGlkIHZhbHVlJyk7XG4gIH1cbiAgcmV0dXJuICFpcy5pbmZpbml0ZSh2YWx1ZSkgJiYgIWlzLmluZmluaXRlKG90aGVyKSAmJiB2YWx1ZSA8PSBvdGhlcjtcbn07XG5cbi8qKlxuICogaXMubHRcbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBsZXNzIHRoYW4gYG90aGVyYC5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHBhcmFtIHtOdW1iZXJ9IG90aGVyIHZhbHVlIHRvIGNvbXBhcmUgd2l0aFxuICogQHJldHVybiB7Qm9vbGVhbn0gaWYgYHZhbHVlYCBpcyBsZXNzIHRoYW4gYG90aGVyYFxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5pcy5sdCA9IGZ1bmN0aW9uICh2YWx1ZSwgb3RoZXIpIHtcbiAgaWYgKGlzQWN0dWFsTmFOKHZhbHVlKSB8fCBpc0FjdHVhbE5hTihvdGhlcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdOYU4gaXMgbm90IGEgdmFsaWQgdmFsdWUnKTtcbiAgfVxuICByZXR1cm4gIWlzLmluZmluaXRlKHZhbHVlKSAmJiAhaXMuaW5maW5pdGUob3RoZXIpICYmIHZhbHVlIDwgb3RoZXI7XG59O1xuXG4vKipcbiAqIGlzLndpdGhpblxuICogVGVzdCBpZiBgdmFsdWVgIGlzIHdpdGhpbiBgc3RhcnRgIGFuZCBgZmluaXNoYC5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHBhcmFtIHtOdW1iZXJ9IHN0YXJ0IGxvd2VyIGJvdW5kXG4gKiBAcGFyYW0ge051bWJlcn0gZmluaXNoIHVwcGVyIGJvdW5kXG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmICd2YWx1ZScgaXMgaXMgd2l0aGluICdzdGFydCcgYW5kICdmaW5pc2gnXG4gKiBAYXBpIHB1YmxpY1xuICovXG5pcy53aXRoaW4gPSBmdW5jdGlvbiAodmFsdWUsIHN0YXJ0LCBmaW5pc2gpIHtcbiAgaWYgKGlzQWN0dWFsTmFOKHZhbHVlKSB8fCBpc0FjdHVhbE5hTihzdGFydCkgfHwgaXNBY3R1YWxOYU4oZmluaXNoKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ05hTiBpcyBub3QgYSB2YWxpZCB2YWx1ZScpO1xuICB9IGVsc2UgaWYgKCFpcy5udW1iZXIodmFsdWUpIHx8ICFpcy5udW1iZXIoc3RhcnQpIHx8ICFpcy5udW1iZXIoZmluaXNoKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2FsbCBhcmd1bWVudHMgbXVzdCBiZSBudW1iZXJzJyk7XG4gIH1cbiAgdmFyIGlzQW55SW5maW5pdGUgPSBpcy5pbmZpbml0ZSh2YWx1ZSkgfHwgaXMuaW5maW5pdGUoc3RhcnQpIHx8IGlzLmluZmluaXRlKGZpbmlzaCk7XG4gIHJldHVybiBpc0FueUluZmluaXRlIHx8ICh2YWx1ZSA+PSBzdGFydCAmJiB2YWx1ZSA8PSBmaW5pc2gpO1xufTtcblxuLyoqXG4gKiBUZXN0IG9iamVjdC5cbiAqL1xuXG4vKipcbiAqIGlzLm9iamVjdFxuICogVGVzdCBpZiBgdmFsdWVgIGlzIGFuIG9iamVjdC5cbiAqXG4gKiBAcGFyYW0ge01peGVkfSB2YWx1ZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGB2YWx1ZWAgaXMgYW4gb2JqZWN0LCBmYWxzZSBvdGhlcndpc2VcbiAqIEBhcGkgcHVibGljXG4gKi9cbmlzLm9iamVjdCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICByZXR1cm4gdG9TdHIuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IE9iamVjdF0nO1xufTtcblxuLyoqXG4gKiBpcy5wcmltaXRpdmVcbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBhIHByaW1pdGl2ZS5cbiAqXG4gKiBAcGFyYW0ge01peGVkfSB2YWx1ZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGB2YWx1ZWAgaXMgYSBwcmltaXRpdmUsIGZhbHNlIG90aGVyd2lzZVxuICogQGFwaSBwdWJsaWNcbiAqL1xuaXMucHJpbWl0aXZlID0gZnVuY3Rpb24gaXNQcmltaXRpdmUodmFsdWUpIHtcbiAgaWYgKCF2YWx1ZSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnIHx8IGlzLm9iamVjdCh2YWx1ZSkgfHwgaXMuZm4odmFsdWUpIHx8IGlzLmFycmF5KHZhbHVlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbi8qKlxuICogaXMuaGFzaFxuICogVGVzdCBpZiBgdmFsdWVgIGlzIGEgaGFzaCAtIGEgcGxhaW4gb2JqZWN0IGxpdGVyYWwuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBgdmFsdWVgIGlzIGEgaGFzaCwgZmFsc2Ugb3RoZXJ3aXNlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmlzLmhhc2ggPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIGlzLm9iamVjdCh2YWx1ZSkgJiYgdmFsdWUuY29uc3RydWN0b3IgPT09IE9iamVjdCAmJiAhdmFsdWUubm9kZVR5cGUgJiYgIXZhbHVlLnNldEludGVydmFsO1xufTtcblxuLyoqXG4gKiBUZXN0IHJlZ2V4cC5cbiAqL1xuXG4vKipcbiAqIGlzLnJlZ2V4cFxuICogVGVzdCBpZiBgdmFsdWVgIGlzIGEgcmVndWxhciBleHByZXNzaW9uLlxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgYHZhbHVlYCBpcyBhIHJlZ2V4cCwgZmFsc2Ugb3RoZXJ3aXNlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmlzLnJlZ2V4cCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICByZXR1cm4gdG9TdHIuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IFJlZ0V4cF0nO1xufTtcblxuLyoqXG4gKiBUZXN0IHN0cmluZy5cbiAqL1xuXG4vKipcbiAqIGlzLnN0cmluZ1xuICogVGVzdCBpZiBgdmFsdWVgIGlzIGEgc3RyaW5nLlxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgJ3ZhbHVlJyBpcyBhIHN0cmluZywgZmFsc2Ugb3RoZXJ3aXNlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmlzLnN0cmluZyA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICByZXR1cm4gdG9TdHIuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IFN0cmluZ10nO1xufTtcblxuLyoqXG4gKiBUZXN0IGJhc2U2NCBzdHJpbmcuXG4gKi9cblxuLyoqXG4gKiBpcy5iYXNlNjRcbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGJhc2U2NCBlbmNvZGVkIHN0cmluZy5cbiAqXG4gKiBAcGFyYW0ge01peGVkfSB2YWx1ZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmICd2YWx1ZScgaXMgYSBiYXNlNjQgZW5jb2RlZCBzdHJpbmcsIGZhbHNlIG90aGVyd2lzZVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5pcy5iYXNlNjQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIGlzLnN0cmluZyh2YWx1ZSkgJiYgKCF2YWx1ZS5sZW5ndGggfHwgYmFzZTY0UmVnZXgudGVzdCh2YWx1ZSkpO1xufTtcblxuLyoqXG4gKiBUZXN0IGJhc2U2NCBzdHJpbmcuXG4gKi9cblxuLyoqXG4gKiBpcy5oZXhcbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGhleCBlbmNvZGVkIHN0cmluZy5cbiAqXG4gKiBAcGFyYW0ge01peGVkfSB2YWx1ZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmICd2YWx1ZScgaXMgYSBoZXggZW5jb2RlZCBzdHJpbmcsIGZhbHNlIG90aGVyd2lzZVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5pcy5oZXggPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIGlzLnN0cmluZyh2YWx1ZSkgJiYgKCF2YWx1ZS5sZW5ndGggfHwgaGV4UmVnZXgudGVzdCh2YWx1ZSkpO1xufTtcblxuLyoqXG4gKiBpcy5zeW1ib2xcbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBhbiBFUzYgU3ltYm9sXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBgdmFsdWVgIGlzIGEgU3ltYm9sLCBmYWxzZSBvdGhlcmlzZVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5pcy5zeW1ib2wgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgdG9TdHIuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IFN5bWJvbF0nICYmIHR5cGVvZiBzeW1ib2xWYWx1ZU9mLmNhbGwodmFsdWUpID09PSAnc3ltYm9sJztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gaXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vaXMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGlzID0gcmVxdWlyZSgnLi9pcycpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHdhbGtuU2V0KCBvYmosIHBhdGgsIHZhbHVlLCBzdGFjayApIHtcclxuICAgIGlmICggaXMuc3RyaW5nKHBhdGgpIClcclxuICAgICAgICBwYXRoID0gcGF0aC5zcGxpdCgnLicpO1xyXG4gICAgaWYgKCAhcGF0aC5sZW5ndGggKVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIGVsc2UgaWYgKCBwYXRoLmxlbmd0aCA9PSAxIClcclxuICAgICAgICByZXR1cm4gb2JqWyBwYXRoWyAwIF0gXSA9IHN0YWNrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFsgLi4uKCBvYmpbIHBhdGhbIDAgXSBdIHx8IFtdICksIHZhbHVlIF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdmFsdWU7XHJcbiAgICBlbHNlXHJcbiAgICAgICAgcmV0dXJuIHdhbGtuU2V0KFxyXG4gICAgICAgICAgICBvYmpbIHBhdGhbIDAgXSBdID1cclxuICAgICAgICAgICAgICAgIG9ialsgcGF0aFsgMCBdIF0gfHwge30sXHJcbiAgICAgICAgICAgIHBhdGguc2xpY2UoMSksXHJcbiAgICAgICAgICAgIHZhbHVlLCBzdGFja1xyXG4gICAgICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB3YWxrbkdldCggb2JqLCBwYXRoLCBpc0tleSApIHtcclxuICAgIGlmICggaXMuc3RyaW5nKHBhdGgpIClcclxuICAgICAgICBwYXRoID0gcGF0aC5zcGxpdCgnLicpO1xyXG4gICAgcmV0dXJuIHBhdGgubGVuZ3RoXHJcbiAgICAgICAgICAgPyBvYmpbIHBhdGhbIDAgXSBdICYmIHdhbGtuR2V0KG9ialsgcGF0aFsgMCBdIF0sIHBhdGguc2xpY2UoMSkpXHJcbiAgICAgICAgICAgOiBvYmo7XHJcbn1cclxuXHJcbi8vQHRvZG9cclxuZXhwb3J0IGZ1bmN0aW9uIGtleVdhbGtuU2V0KCBvYmosIHBhdGgsIHZhbHVlLCBzdGFjayApIHtcclxuICAgIGlmICggaXMuc3RyaW5nKHBhdGgpIClcclxuICAgICAgICBwYXRoID0gcGF0aC5zcGxpdCgvKFxcPnxcXC8pL2lnKS5maWx0ZXIodiA9PiAoIHYgIT09ICc+JyAmJiB2ICkpO1xyXG4gICAgcmV0dXJuIHdhbGtuU2V0KG9iaiwgcGF0aCwgdmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24ga2V5V2Fsa25HZXQoIG9iaiwgcGF0aCwgaXNLZXkgKSB7XHJcbiAgICBpZiAoIGlzLnN0cmluZyhwYXRoKSApXHJcbiAgICAgICAgcGF0aCA9IHBhdGguc3BsaXQoLyhcXD58XFwvKS9pZykuZmlsdGVyKHYgPT4gKCB2ICE9PSAnPicgJiYgdiApKTtcclxuICAgIHJldHVybiBwYXRoLmxlbmd0aFxyXG4gICAgICAgICAgID8gb2JqWyBwYXRoWyAwIF0gXSAmJiB3YWxrbkdldChvYmpbIHBhdGhbIDAgXSBdLCBwYXRoLnNsaWNlKDEpKVxyXG4gICAgICAgICAgIDogb2JqO1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWxzL3V0aWxzLmpzIiwiLypcbiAqIENvcHlyaWdodCAoYykgIDIwMTggV2lzZSBXaWxkIFdlYiAuXG4gKlxuICogIE1JVCBMaWNlbnNlXG4gKiAgXG4gKiAgUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqICBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiAgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKiAgXG4gKiAgVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG4gKiAgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqICBcbiAqICBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiAgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiAgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiAgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiAgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcbiAqICBTT0ZUV0FSRS5cbiAqICBcbiAqIEBhdXRob3IgOiBOYXRoYW5hZWwgQnJhdW5cbiAqIEBjb250YWN0IDogY2FpcGlsYWJzQGdtYWlsLmNvbVxuICovXG52YXIgaXMgPSByZXF1aXJlKCdpcycpO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW1pdHRlciB7XG4gICAgX2V2ZW50cyA9IHt9O1xuICAgIFxuICAgIG9uKCBldnQsIGNiICkge1xuICAgICAgICBpZiAoICFpcy5zdHJpbmcoZXZ0KSAmJiBldnQgKVxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKGV2dCkuZm9yRWFjaChrID0+IHRoaXMub24oaywgZXZ0W2tdKSk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9ldmVudHNbZXZ0XSA9IHRoaXMuX2V2ZW50c1tldnRdIHx8IFtdO1xuICAgICAgICB0aGlzLl9ldmVudHNbZXZ0XS5wdXNoKGNiKTtcbiAgICAgICAgXG4gICAgfVxuICAgIFxuICAgIHVuKCBldnQsIGNiICkge1xuICAgICAgICBpZiAoICFpcy5zdHJpbmcoZXZ0KSAmJiBldnQgKVxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKGV2dCkuZm9yRWFjaChrID0+IHRoaXMudW4oaywgZXZ0W2tdKSk7XG4gICAgICAgIFxuICAgICAgICBpZiAoICF0aGlzLl9ldmVudHNbZXZ0XSApIHJldHVybjtcbiAgICAgICAgdmFyIGkgPSB0aGlzLl9ldmVudHNbZXZ0XS5pbmRleE9mKGNiKTtcbiAgICAgICAgdGhpcy5fZXZlbnRzW2V2dF0uc3BsaWNlKGksIDEpO1xuICAgIH1cbiAgICBcbiAgICBlbWl0KCBldnQsIC4uLmFyZ3ogKSB7XG4gICAgICAgIGlmICggIXRoaXMuX2V2ZW50c1tldnRdICkgcmV0dXJuO1xuICAgICAgICBsZXQgbGlzdHMgPSBbLi4udGhpcy5fZXZlbnRzW2V2dF1dO1xuICAgICAgICBcbiAgICAgICAgZm9yICggdmFyIGkgPSAwOyBpIDwgbGlzdHMubGVuZ3RoOyBpKysgKVxuICAgICAgICAgICAgbGlzdHNbaV0oLi4uYXJneilcbiAgICB9XG4gICAgXG4gICAgYWRkTGlzdGVuZXIoKSB7XG4gICAgICAgIHRoaXMub24oLi4uYXJndW1lbnRzKTtcbiAgICB9XG4gICAgXG4gICAgcmVtb3ZlTGlzdGVuZXIoKSB7XG4gICAgICAgIHRoaXMudW4oLi4uYXJndW1lbnRzKTtcbiAgICB9XG4gICAgXG4gICAgcmVtb3ZlQWxsTGlzdGVuZXJzKCkge1xuICAgICAgICB0aGlzLl9ldmVudHMgPSB7fTtcbiAgICB9XG4gICAgXG4gICAgb25jZSggZXZ0LCBjYiApIHtcbiAgICAgICAgbGV0IGZuO1xuICAgICAgICB0aGlzLm9uKGV2dCwgZm4gPSAoIC4uLmFyZ3ogKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnVuKGV2dCwgZm4pO1xuICAgICAgICAgICAgY2IoLi4uYXJneilcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIFxuICAgIFxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlscy9FbWl0dGVyLmpzIiwiJ3VzZSBzdHJpY3QnO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2xpYi9pbmRleCcpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Nob3J0aWQvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYWxwaGFiZXQgPSByZXF1aXJlKCcuL2FscGhhYmV0Jyk7XG52YXIgZW5jb2RlID0gcmVxdWlyZSgnLi9lbmNvZGUnKTtcbnZhciBkZWNvZGUgPSByZXF1aXJlKCcuL2RlY29kZScpO1xudmFyIGJ1aWxkID0gcmVxdWlyZSgnLi9idWlsZCcpO1xudmFyIGlzVmFsaWQgPSByZXF1aXJlKCcuL2lzLXZhbGlkJyk7XG5cbi8vIGlmIHlvdSBhcmUgdXNpbmcgY2x1c3RlciBvciBtdWx0aXBsZSBzZXJ2ZXJzIHVzZSB0aGlzIHRvIG1ha2UgZWFjaCBpbnN0YW5jZVxuLy8gaGFzIGEgdW5pcXVlIHZhbHVlIGZvciB3b3JrZXJcbi8vIE5vdGU6IEkgZG9uJ3Qga25vdyBpZiB0aGlzIGlzIGF1dG9tYXRpY2FsbHkgc2V0IHdoZW4gdXNpbmcgdGhpcmRcbi8vIHBhcnR5IGNsdXN0ZXIgc29sdXRpb25zIHN1Y2ggYXMgcG0yLlxudmFyIGNsdXN0ZXJXb3JrZXJJZCA9IHJlcXVpcmUoJy4vdXRpbC9jbHVzdGVyLXdvcmtlci1pZCcpIHx8IDA7XG5cbi8qKlxuICogU2V0IHRoZSBzZWVkLlxuICogSGlnaGx5IHJlY29tbWVuZGVkIGlmIHlvdSBkb24ndCB3YW50IHBlb3BsZSB0byB0cnkgdG8gZmlndXJlIG91dCB5b3VyIGlkIHNjaGVtYS5cbiAqIGV4cG9zZWQgYXMgc2hvcnRpZC5zZWVkKGludClcbiAqIEBwYXJhbSBzZWVkIEludGVnZXIgdmFsdWUgdG8gc2VlZCB0aGUgcmFuZG9tIGFscGhhYmV0LiAgQUxXQVlTIFVTRSBUSEUgU0FNRSBTRUVEIG9yIHlvdSBtaWdodCBnZXQgb3ZlcmxhcHMuXG4gKi9cbmZ1bmN0aW9uIHNlZWQoc2VlZFZhbHVlKSB7XG4gICAgYWxwaGFiZXQuc2VlZChzZWVkVmFsdWUpO1xuICAgIHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLyoqXG4gKiBTZXQgdGhlIGNsdXN0ZXIgd29ya2VyIG9yIG1hY2hpbmUgaWRcbiAqIGV4cG9zZWQgYXMgc2hvcnRpZC53b3JrZXIoaW50KVxuICogQHBhcmFtIHdvcmtlcklkIHdvcmtlciBtdXN0IGJlIHBvc2l0aXZlIGludGVnZXIuICBOdW1iZXIgbGVzcyB0aGFuIDE2IGlzIHJlY29tbWVuZGVkLlxuICogcmV0dXJucyBzaG9ydGlkIG1vZHVsZSBzbyBpdCBjYW4gYmUgY2hhaW5lZC5cbiAqL1xuZnVuY3Rpb24gd29ya2VyKHdvcmtlcklkKSB7XG4gICAgY2x1c3RlcldvcmtlcklkID0gd29ya2VySWQ7XG4gICAgcmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vKipcbiAqXG4gKiBzZXRzIG5ldyBjaGFyYWN0ZXJzIHRvIHVzZSBpbiB0aGUgYWxwaGFiZXRcbiAqIHJldHVybnMgdGhlIHNodWZmbGVkIGFscGhhYmV0XG4gKi9cbmZ1bmN0aW9uIGNoYXJhY3RlcnMobmV3Q2hhcmFjdGVycykge1xuICAgIGlmIChuZXdDaGFyYWN0ZXJzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgYWxwaGFiZXQuY2hhcmFjdGVycyhuZXdDaGFyYWN0ZXJzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWxwaGFiZXQuc2h1ZmZsZWQoKTtcbn1cblxuLyoqXG4gKiBHZW5lcmF0ZSB1bmlxdWUgaWRcbiAqIFJldHVybnMgc3RyaW5nIGlkXG4gKi9cbmZ1bmN0aW9uIGdlbmVyYXRlKCkge1xuICByZXR1cm4gYnVpbGQoY2x1c3RlcldvcmtlcklkKTtcbn1cblxuLy8gRXhwb3J0IGFsbCBvdGhlciBmdW5jdGlvbnMgYXMgcHJvcGVydGllcyBvZiB0aGUgZ2VuZXJhdGUgZnVuY3Rpb25cbm1vZHVsZS5leHBvcnRzID0gZ2VuZXJhdGU7XG5tb2R1bGUuZXhwb3J0cy5nZW5lcmF0ZSA9IGdlbmVyYXRlO1xubW9kdWxlLmV4cG9ydHMuc2VlZCA9IHNlZWQ7XG5tb2R1bGUuZXhwb3J0cy53b3JrZXIgPSB3b3JrZXI7XG5tb2R1bGUuZXhwb3J0cy5jaGFyYWN0ZXJzID0gY2hhcmFjdGVycztcbm1vZHVsZS5leHBvcnRzLmRlY29kZSA9IGRlY29kZTtcbm1vZHVsZS5leHBvcnRzLmlzVmFsaWQgPSBpc1ZhbGlkO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Nob3J0aWQvbGliL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxudmFyIHJhbmRvbUZyb21TZWVkID0gcmVxdWlyZSgnLi9yYW5kb20vcmFuZG9tLWZyb20tc2VlZCcpO1xuXG52YXIgT1JJR0lOQUwgPSAnMDEyMzQ1Njc4OWFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6QUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVpfLSc7XG52YXIgYWxwaGFiZXQ7XG52YXIgcHJldmlvdXNTZWVkO1xuXG52YXIgc2h1ZmZsZWQ7XG5cbmZ1bmN0aW9uIHJlc2V0KCkge1xuICAgIHNodWZmbGVkID0gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIHNldENoYXJhY3RlcnMoX2FscGhhYmV0Xykge1xuICAgIGlmICghX2FscGhhYmV0Xykge1xuICAgICAgICBpZiAoYWxwaGFiZXQgIT09IE9SSUdJTkFMKSB7XG4gICAgICAgICAgICBhbHBoYWJldCA9IE9SSUdJTkFMO1xuICAgICAgICAgICAgcmVzZXQoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKF9hbHBoYWJldF8gPT09IGFscGhhYmV0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoX2FscGhhYmV0Xy5sZW5ndGggIT09IE9SSUdJTkFMLmxlbmd0aCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0N1c3RvbSBhbHBoYWJldCBmb3Igc2hvcnRpZCBtdXN0IGJlICcgKyBPUklHSU5BTC5sZW5ndGggKyAnIHVuaXF1ZSBjaGFyYWN0ZXJzLiBZb3Ugc3VibWl0dGVkICcgKyBfYWxwaGFiZXRfLmxlbmd0aCArICcgY2hhcmFjdGVyczogJyArIF9hbHBoYWJldF8pO1xuICAgIH1cblxuICAgIHZhciB1bmlxdWUgPSBfYWxwaGFiZXRfLnNwbGl0KCcnKS5maWx0ZXIoZnVuY3Rpb24oaXRlbSwgaW5kLCBhcnIpe1xuICAgICAgIHJldHVybiBpbmQgIT09IGFyci5sYXN0SW5kZXhPZihpdGVtKTtcbiAgICB9KTtcblxuICAgIGlmICh1bmlxdWUubGVuZ3RoKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQ3VzdG9tIGFscGhhYmV0IGZvciBzaG9ydGlkIG11c3QgYmUgJyArIE9SSUdJTkFMLmxlbmd0aCArICcgdW5pcXVlIGNoYXJhY3RlcnMuIFRoZXNlIGNoYXJhY3RlcnMgd2VyZSBub3QgdW5pcXVlOiAnICsgdW5pcXVlLmpvaW4oJywgJykpO1xuICAgIH1cblxuICAgIGFscGhhYmV0ID0gX2FscGhhYmV0XztcbiAgICByZXNldCgpO1xufVxuXG5mdW5jdGlvbiBjaGFyYWN0ZXJzKF9hbHBoYWJldF8pIHtcbiAgICBzZXRDaGFyYWN0ZXJzKF9hbHBoYWJldF8pO1xuICAgIHJldHVybiBhbHBoYWJldDtcbn1cblxuZnVuY3Rpb24gc2V0U2VlZChzZWVkKSB7XG4gICAgcmFuZG9tRnJvbVNlZWQuc2VlZChzZWVkKTtcbiAgICBpZiAocHJldmlvdXNTZWVkICE9PSBzZWVkKSB7XG4gICAgICAgIHJlc2V0KCk7XG4gICAgICAgIHByZXZpb3VzU2VlZCA9IHNlZWQ7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBzaHVmZmxlKCkge1xuICAgIGlmICghYWxwaGFiZXQpIHtcbiAgICAgICAgc2V0Q2hhcmFjdGVycyhPUklHSU5BTCk7XG4gICAgfVxuXG4gICAgdmFyIHNvdXJjZUFycmF5ID0gYWxwaGFiZXQuc3BsaXQoJycpO1xuICAgIHZhciB0YXJnZXRBcnJheSA9IFtdO1xuICAgIHZhciByID0gcmFuZG9tRnJvbVNlZWQubmV4dFZhbHVlKCk7XG4gICAgdmFyIGNoYXJhY3RlckluZGV4O1xuXG4gICAgd2hpbGUgKHNvdXJjZUFycmF5Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgciA9IHJhbmRvbUZyb21TZWVkLm5leHRWYWx1ZSgpO1xuICAgICAgICBjaGFyYWN0ZXJJbmRleCA9IE1hdGguZmxvb3IociAqIHNvdXJjZUFycmF5Lmxlbmd0aCk7XG4gICAgICAgIHRhcmdldEFycmF5LnB1c2goc291cmNlQXJyYXkuc3BsaWNlKGNoYXJhY3RlckluZGV4LCAxKVswXSk7XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXRBcnJheS5qb2luKCcnKTtcbn1cblxuZnVuY3Rpb24gZ2V0U2h1ZmZsZWQoKSB7XG4gICAgaWYgKHNodWZmbGVkKSB7XG4gICAgICAgIHJldHVybiBzaHVmZmxlZDtcbiAgICB9XG4gICAgc2h1ZmZsZWQgPSBzaHVmZmxlKCk7XG4gICAgcmV0dXJuIHNodWZmbGVkO1xufVxuXG4vKipcbiAqIGxvb2t1cCBzaHVmZmxlZCBsZXR0ZXJcbiAqIEBwYXJhbSBpbmRleFxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gbG9va3VwKGluZGV4KSB7XG4gICAgdmFyIGFscGhhYmV0U2h1ZmZsZWQgPSBnZXRTaHVmZmxlZCgpO1xuICAgIHJldHVybiBhbHBoYWJldFNodWZmbGVkW2luZGV4XTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgY2hhcmFjdGVyczogY2hhcmFjdGVycyxcbiAgICBzZWVkOiBzZXRTZWVkLFxuICAgIGxvb2t1cDogbG9va3VwLFxuICAgIHNodWZmbGVkOiBnZXRTaHVmZmxlZFxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zaG9ydGlkL2xpYi9hbHBoYWJldC5qc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbi8vIEZvdW5kIHRoaXMgc2VlZC1iYXNlZCByYW5kb20gZ2VuZXJhdG9yIHNvbWV3aGVyZVxuLy8gQmFzZWQgb24gVGhlIENlbnRyYWwgUmFuZG9taXplciAxLjMgKEMpIDE5OTcgYnkgUGF1bCBIb3VsZSAoaG91bGVAbXNjLmNvcm5lbGwuZWR1KVxuXG52YXIgc2VlZCA9IDE7XG5cbi8qKlxuICogcmV0dXJuIGEgcmFuZG9tIG51bWJlciBiYXNlZCBvbiBhIHNlZWRcbiAqIEBwYXJhbSBzZWVkXG4gKiBAcmV0dXJucyB7bnVtYmVyfVxuICovXG5mdW5jdGlvbiBnZXROZXh0VmFsdWUoKSB7XG4gICAgc2VlZCA9IChzZWVkICogOTMwMSArIDQ5Mjk3KSAlIDIzMzI4MDtcbiAgICByZXR1cm4gc2VlZC8oMjMzMjgwLjApO1xufVxuXG5mdW5jdGlvbiBzZXRTZWVkKF9zZWVkXykge1xuICAgIHNlZWQgPSBfc2VlZF87XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIG5leHRWYWx1ZTogZ2V0TmV4dFZhbHVlLFxuICAgIHNlZWQ6IHNldFNlZWRcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc2hvcnRpZC9saWIvcmFuZG9tL3JhbmRvbS1mcm9tLXNlZWQuanNcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgcmFuZG9tQnl0ZSA9IHJlcXVpcmUoJy4vcmFuZG9tL3JhbmRvbS1ieXRlJyk7XG5cbmZ1bmN0aW9uIGVuY29kZShsb29rdXAsIG51bWJlcikge1xuICAgIHZhciBsb29wQ291bnRlciA9IDA7XG4gICAgdmFyIGRvbmU7XG5cbiAgICB2YXIgc3RyID0gJyc7XG5cbiAgICB3aGlsZSAoIWRvbmUpIHtcbiAgICAgICAgc3RyID0gc3RyICsgbG9va3VwKCAoIChudW1iZXIgPj4gKDQgKiBsb29wQ291bnRlcikpICYgMHgwZiApIHwgcmFuZG9tQnl0ZSgpICk7XG4gICAgICAgIGRvbmUgPSBudW1iZXIgPCAoTWF0aC5wb3coMTYsIGxvb3BDb3VudGVyICsgMSApICk7XG4gICAgICAgIGxvb3BDb3VudGVyKys7XG4gICAgfVxuICAgIHJldHVybiBzdHI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZW5jb2RlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Nob3J0aWQvbGliL2VuY29kZS5qc1xuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgY3J5cHRvID0gdHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcgJiYgKHdpbmRvdy5jcnlwdG8gfHwgd2luZG93Lm1zQ3J5cHRvKTsgLy8gSUUgMTEgdXNlcyB3aW5kb3cubXNDcnlwdG9cblxuZnVuY3Rpb24gcmFuZG9tQnl0ZSgpIHtcbiAgICBpZiAoIWNyeXB0byB8fCAhY3J5cHRvLmdldFJhbmRvbVZhbHVlcykge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjU2KSAmIDB4MzA7XG4gICAgfVxuICAgIHZhciBkZXN0ID0gbmV3IFVpbnQ4QXJyYXkoMSk7XG4gICAgY3J5cHRvLmdldFJhbmRvbVZhbHVlcyhkZXN0KTtcbiAgICByZXR1cm4gZGVzdFswXSAmIDB4MzA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcmFuZG9tQnl0ZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zaG9ydGlkL2xpYi9yYW5kb20vcmFuZG9tLWJ5dGUtYnJvd3Nlci5qc1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFscGhhYmV0ID0gcmVxdWlyZSgnLi9hbHBoYWJldCcpO1xuXG4vKipcbiAqIERlY29kZSB0aGUgaWQgdG8gZ2V0IHRoZSB2ZXJzaW9uIGFuZCB3b3JrZXJcbiAqIE1haW5seSBmb3IgZGVidWdnaW5nIGFuZCB0ZXN0aW5nLlxuICogQHBhcmFtIGlkIC0gdGhlIHNob3J0aWQtZ2VuZXJhdGVkIGlkLlxuICovXG5mdW5jdGlvbiBkZWNvZGUoaWQpIHtcbiAgICB2YXIgY2hhcmFjdGVycyA9IGFscGhhYmV0LnNodWZmbGVkKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdmVyc2lvbjogY2hhcmFjdGVycy5pbmRleE9mKGlkLnN1YnN0cigwLCAxKSkgJiAweDBmLFxuICAgICAgICB3b3JrZXI6IGNoYXJhY3RlcnMuaW5kZXhPZihpZC5zdWJzdHIoMSwgMSkpICYgMHgwZlxuICAgIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZGVjb2RlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Nob3J0aWQvbGliL2RlY29kZS5qc1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZW5jb2RlID0gcmVxdWlyZSgnLi9lbmNvZGUnKTtcbnZhciBhbHBoYWJldCA9IHJlcXVpcmUoJy4vYWxwaGFiZXQnKTtcblxuLy8gSWdub3JlIGFsbCBtaWxsaXNlY29uZHMgYmVmb3JlIGEgY2VydGFpbiB0aW1lIHRvIHJlZHVjZSB0aGUgc2l6ZSBvZiB0aGUgZGF0ZSBlbnRyb3B5IHdpdGhvdXQgc2FjcmlmaWNpbmcgdW5pcXVlbmVzcy5cbi8vIFRoaXMgbnVtYmVyIHNob3VsZCBiZSB1cGRhdGVkIGV2ZXJ5IHllYXIgb3Igc28gdG8ga2VlcCB0aGUgZ2VuZXJhdGVkIGlkIHNob3J0LlxuLy8gVG8gcmVnZW5lcmF0ZSBgbmV3IERhdGUoKSAtIDBgIGFuZCBidW1wIHRoZSB2ZXJzaW9uLiBBbHdheXMgYnVtcCB0aGUgdmVyc2lvbiFcbnZhciBSRURVQ0VfVElNRSA9IDE0NTk3MDc2MDY1MTg7XG5cbi8vIGRvbid0IGNoYW5nZSB1bmxlc3Mgd2UgY2hhbmdlIHRoZSBhbGdvcyBvciBSRURVQ0VfVElNRVxuLy8gbXVzdCBiZSBhbiBpbnRlZ2VyIGFuZCBsZXNzIHRoYW4gMTZcbnZhciB2ZXJzaW9uID0gNjtcblxuLy8gQ291bnRlciBpcyB1c2VkIHdoZW4gc2hvcnRpZCBpcyBjYWxsZWQgbXVsdGlwbGUgdGltZXMgaW4gb25lIHNlY29uZC5cbnZhciBjb3VudGVyO1xuXG4vLyBSZW1lbWJlciB0aGUgbGFzdCB0aW1lIHNob3J0aWQgd2FzIGNhbGxlZCBpbiBjYXNlIGNvdW50ZXIgaXMgbmVlZGVkLlxudmFyIHByZXZpb3VzU2Vjb25kcztcblxuLyoqXG4gKiBHZW5lcmF0ZSB1bmlxdWUgaWRcbiAqIFJldHVybnMgc3RyaW5nIGlkXG4gKi9cbmZ1bmN0aW9uIGJ1aWxkKGNsdXN0ZXJXb3JrZXJJZCkge1xuXG4gICAgdmFyIHN0ciA9ICcnO1xuXG4gICAgdmFyIHNlY29uZHMgPSBNYXRoLmZsb29yKChEYXRlLm5vdygpIC0gUkVEVUNFX1RJTUUpICogMC4wMDEpO1xuXG4gICAgaWYgKHNlY29uZHMgPT09IHByZXZpb3VzU2Vjb25kcykge1xuICAgICAgICBjb3VudGVyKys7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY291bnRlciA9IDA7XG4gICAgICAgIHByZXZpb3VzU2Vjb25kcyA9IHNlY29uZHM7XG4gICAgfVxuXG4gICAgc3RyID0gc3RyICsgZW5jb2RlKGFscGhhYmV0Lmxvb2t1cCwgdmVyc2lvbik7XG4gICAgc3RyID0gc3RyICsgZW5jb2RlKGFscGhhYmV0Lmxvb2t1cCwgY2x1c3RlcldvcmtlcklkKTtcbiAgICBpZiAoY291bnRlciA+IDApIHtcbiAgICAgICAgc3RyID0gc3RyICsgZW5jb2RlKGFscGhhYmV0Lmxvb2t1cCwgY291bnRlcik7XG4gICAgfVxuICAgIHN0ciA9IHN0ciArIGVuY29kZShhbHBoYWJldC5sb29rdXAsIHNlY29uZHMpO1xuXG4gICAgcmV0dXJuIHN0cjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBidWlsZDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zaG9ydGlkL2xpYi9idWlsZC5qc1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFscGhhYmV0ID0gcmVxdWlyZSgnLi9hbHBoYWJldCcpO1xuXG5mdW5jdGlvbiBpc1Nob3J0SWQoaWQpIHtcbiAgICBpZiAoIWlkIHx8IHR5cGVvZiBpZCAhPT0gJ3N0cmluZycgfHwgaWQubGVuZ3RoIDwgNiApIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHZhciBjaGFyYWN0ZXJzID0gYWxwaGFiZXQuY2hhcmFjdGVycygpO1xuICAgIHZhciBsZW4gPSBpZC5sZW5ndGg7XG4gICAgZm9yKHZhciBpID0gMDsgaSA8IGxlbjtpKyspIHtcbiAgICAgICAgaWYgKGNoYXJhY3RlcnMuaW5kZXhPZihpZFtpXSkgPT09IC0xKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNTaG9ydElkO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Nob3J0aWQvbGliL2lzLXZhbGlkLmpzXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gMDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zaG9ydGlkL2xpYi91dGlsL2NsdXN0ZXItd29ya2VyLWlkLWJyb3dzZXIuanNcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpICAyMDE4IFdpc2UgV2lsZCBXZWIgLlxuICpcbiAqICBNSVQgTGljZW5zZVxuICpcbiAqICBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiAgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqICB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiAgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiAgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiAgVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG4gKiAgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqICBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG4gKiAgU09GVFdBUkUuXG4gKlxuICogQGF1dGhvciA6IE5hdGhhbmFlbCBCcmF1blxuICogQGNvbnRhY3QgOiBjYWlwaWxhYnNAZ21haWwuY29tXG4gKi9cblxudmFyIGlzICAgICAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL3V0aWxzL2lzJyksXG4gICAgU2NvcGUgICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vU2NvcGUnKSxcbiAgICB7IGtleVdhbGtuU2V0LCBrZXlXYWxrbkdldCB9ID0gcmVxdWlyZSgnLi91dGlscy91dGlscycpLFxuICAgIEV2ZW50RW1pdHRlciAgICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL3V0aWxzL0VtaXR0ZXInKSxcbiAgICBUYXNrU2VxdWVuY2VyICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi91dGlscy9UYXNrU2VxdWVuY2VyJyksXG4gICAgc2hvcnRpZCAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJ3Nob3J0aWQnKSxcbiAgICBvYmpQcm90byAgICAgICAgICAgICAgICAgICAgID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHt9KTtcblxuY2xhc3MgU3RvcmUgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuXHQvL3N0YXRpYyB1c2UgICAgICAgICAgICAgICAgICA9IFtdOy8vIG92ZXJyaWRhYmxlIGxpc3Qgb2Ygc291cmNlIHN0b3Jlc1xuXHRzdGF0aWMgZm9sbG93Oy8vIG92ZXJyaWRhYmxlIGxpc3Qgb2Ygc3RvcmUgdGhhdCB3aWxsIGFsbG93IHB1c2ggaWYgdXBkYXRlZFxuXHRzdGF0aWMgcmVxdWlyZTtcblx0c3RhdGljIHN0YXRpY1Njb3BlICAgPSBuZXcgU2NvcGUoe30sIHsgaWQ6IFwic3RhdGljXCIgfSk7XG5cdHN0YXRpYyBzdGF0ZSAgICAgICAgID0gdW5kZWZpbmVkOy8vIGRlZmF1bHQgc3RhdGVcblx0LyoqXG5cdCAqIGlmIHJldGFpbiBnb2VzIHRvIDAgOlxuXHQgKiBmYWxzZSB0byBub3QgZGVzdHJveSxcblx0ICogMCB0byBzeW5jIGF1dG8gZGVzdHJveVxuXHQgKiBNcyB0byBhdXRvZGVzdHJveSBhZnRlciB0bSBtcyBpZiBubyByZXRhaW4gaGFzIGJlZW4gY2FsbGVkXG5cdCAqIEB0eXBlIHtib29sZWFufEludH1cblx0ICovXG5cdHN0YXRpYyBwZXJzaXN0ZW5jZVRtID0gZmFsc2U7XG5cdFxuXHQvKipcblx0ICogQ29uc3RydWN0b3IsIHdpbGwgYnVpbGQgYSByZXNjb3BlIHN0b3JlXG5cdCAqXG5cdCAqIChzY29wZSwge3JlcXVpcmUsdXNlLGFwcGx5LHN0YXRlLCBkYXRhfSlcblx0ICogKHNjb3BlKVxuXHQgKlxuXHQgKiBAcGFyYW0gc2NvcGUge29iamVjdH0gc2NvcGUgd2hlcmUgdG8gZmluZCB0aGUgb3RoZXIgc3RvcmVzIChkZWZhdWx0IDogc3RhdGljXG5cdCAqICAgICBzdGF0aWNTY29wZSApXG5cdCAqIEBwYXJhbSBrZXlzIHtBcnJheX0gKHBhc3NlZCB0byBTdG9yZTo6bWFwKSBFeCA6IFtcInNlc3Npb25cIiwgXCJvdGhlck5hbWVkU3RvcmU6a2V5XCIsXG5cdCAqICAgICBvdGhlclN0b3JlLmFzKFwib3RoZXJLZXlcIildXG5cdCAqL1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHRcdHZhciBhcmd6ICAgICAgICAgPSBbLi4uYXJndW1lbnRzXSxcblx0XHQgICAgX3N0YXRpYyAgICAgID0gdGhpcy5jb25zdHJ1Y3Rvcixcblx0XHQgICAgc2NvcGUgICAgICAgID0gYXJnelswXSBpbnN0YW5jZW9mIFNjb3BlXG5cdFx0ICAgICAgICAgICAgICAgICAgID8gYXJnei5zaGlmdCgpXG5cdFx0ICAgICAgICAgICAgICAgICAgIDogX3N0YXRpYy5zY29wZSA/IFNjb3BlLmdldFNjb3BlKF9zdGF0aWMuc2NvcGUpXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGlzLnN0cmluZyhhcmd6WzBdKVxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFNjb3BlLmdldFNjb3BlKGFyZ3ouc2hpZnQoKSlcblx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfc3RhdGljLnN0YXRpY1Njb3BlLFxuXHRcdCAgICBjZmcgICAgICAgICAgPSBhcmd6WzBdICYmICFpcy5hcnJheShhcmd6WzBdKSAmJiAhaXMuc3RyaW5nKGFyZ3pbMF0pXG5cdFx0ICAgICAgICAgICAgICAgICAgID8gYXJnei5zaGlmdCgpXG5cdFx0ICAgICAgICAgICAgICAgICAgIDoge30sXG5cdFx0ICAgIHRhc2tRdWV1ZSAgICA9IGlzLmFycmF5KGFyZ3pbMF0pID8gYXJnei5zaGlmdCgpIDogbnVsbCxcblx0XHQgICAgbmFtZSAgICAgICAgID0gY2ZnLm5hbWUgfHwgX3N0YXRpYy5uYW1lLFxuXHRcdCAgICB3YXRjaHMgICAgICAgPSBjZmcudXNlIHx8IFtdLFxuXHRcdCAgICBhcHBseSAgICAgICAgPSBjZmcuYXBwbHkgfHwgbnVsbCxcblx0XHQgICAgaW5pdGlhbFN0YXRlID0gX3N0YXRpYy5zdGF0ZSB8fCBfc3RhdGljLmluaXRpYWxTdGF0ZSB8fCBfc3RhdGljLmRlZmF1bHRTdGF0ZSxcblx0XHQgICAgYXBwbGllZDtcblx0XHRcblx0XHR0aGlzLl91aWQgPSBjZmcuX3VpZCB8fCBzaG9ydGlkLmdlbmVyYXRlKCk7XG5cdFx0XG5cdFx0dGhpcy5fX3JldGFpbnMgICAgPSB7IGFsbDogMCB9O1xuXHRcdHRoaXMuX19sb2NrcyAgICAgID0geyBhbGw6IDAgfTtcblx0XHR0aGlzLl9vblN0YWJpbGl6ZSA9IFtdO1xuXHRcdFxuXHRcdC8vIGF1dG9EZXN0cm95VG1cblx0XHR0aGlzLl9hdXRvRGVzdHJveSAgID0gISF0aGlzLl9wZXJzaXN0ZW5jZVRtO1xuXHRcdHRoaXMuX3BlcnNpc3RlbmNlVG0gPSBjZmcucGVyc2lzdGVuY2VUbSB8fCBfc3RhdGljLnBlcnNpc3RlbmNlVG0gfHwgKGNmZy5hdXRvRGVzdHJveSB8fCBfc3RhdGljLmF1dG9EZXN0cm95KSAmJiA1O1xuXHRcdHRoaXMuX2NmZyAgICAgICAgICAgPSBjZmc7XG5cdFx0aWYgKCBjZmcgJiYgY2ZnLm9uICkge1xuXHRcdFx0dGhpcy5vbihjZmcub24pO1xuXHRcdH1cblx0XHRcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuXHRcdFxuXHRcdGlmICggc2NvcGUuc3RvcmVzICkge1xuXHRcdFx0dGhpcy5zY29wZU9iaiA9IHNjb3BlO1xuXHRcdFx0dGhpcy5zY29wZSAgICA9IHNjb3BlLnN0b3Jlcztcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHR0aGlzLnNjb3BlT2JqID0gbmV3IFNjb3BlKHNjb3BlKTtcblx0XHRcdHRoaXMuc2NvcGUgICAgPSBzY29wZS5zdG9yZXM7XG5cdFx0fVxuXHRcdFxuXHRcdC8vIHN0YW5kYXJkaXplZCBzY29wZSBhY2Nlc3Ncblx0XHR0aGlzLiRzY29wZSAgICA9IHRoaXMuc2NvcGVPYmo7XG5cdFx0dGhpcy4kc3RvcmVzICAgPSB0aGlzLnNjb3BlT2JqLnN0b3Jlcztcblx0XHR0aGlzLiRhY3Rpb25zICA9IHRoaXMuc2NvcGVPYmouYWN0aW9ucztcblx0XHR0aGlzLiRkaXNwYXRjaCA9IHRoaXMuc2NvcGVPYmouZGlzcGF0Y2guYmluZCh0aGlzLnNjb3BlT2JqKTtcblx0XHRcblx0XHR0aGlzLl9yZXYgICAgID0gdGhpcy5jb25zdHJ1Y3Rvci5fcmV2IHx8IDA7XG5cdFx0dGhpcy5fcmV2cyAgICA9IHt9O1xuXHRcdHRoaXMuc3RvcmVzICAgPSB7fTtcblx0XHR0aGlzLl9yZXF1aXJlID0gW107XG5cdFx0dGhpcy5fc291cmNlcyA9IFtuYW1lXTtcblx0XHRcblx0XHRpZiAoIGlzLmFycmF5KF9zdGF0aWMudXNlKSApIHtcblx0XHRcdHRoaXMuX3VzZSA9IFsuLi53YXRjaHMsIC4uLihfc3RhdGljLnVzZSB8fCBbXSkubWFwKFxuXHRcdFx0XHRrZXkgPT4ge1xuXHRcdFx0XHRcdGxldCByZWYgPSBrZXkubWF0Y2goL14oXFwhPykoW15cXDpdKikoPzpcXDooLiopKT8kLyk7XG5cdFx0XHRcdFx0aWYgKCByZWZbMV0gKSB7XG5cdFx0XHRcdFx0XHRsZXQgcmVmMiA9IHJlZlsyXS5zcGxpdCgnLicpO1xuXHRcdFx0XHRcdFx0dGhpcy5fcmVxdWlyZS5wdXNoKHJlZlszXSB8fCByZWYyW3JlZjIubGVuZ3RoIC0gMV0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm4gcmVmWzJdO1xuXHRcdFx0XHR9XG5cdFx0XHQpXTtcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHR0aGlzLl91c2UgPSBbLi4ud2F0Y2hzLCAuLi4oXG5cdFx0XHRcdF9zdGF0aWMudXNlID8gT2JqZWN0LmtleXMoX3N0YXRpYy51c2UpXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgLm1hcChcblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgIGtleSA9PiB7XG5cdFx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgIGxldCByZWYgPSBrZXkubWF0Y2goL14oXFwhPykoLiopJC8pO1xuXHRcdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICByZWZbMV0gJiYgdGhpcy5fcmVxdWlyZS5wdXNoKF9zdGF0aWMudXNlW2tleV0pO1xuXHRcdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVmWzJdICsgKChfc3RhdGljLnVzZVtrZXldID09PSB0cnVlKVxuXHRcdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJydcblx0XHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICc6JyArIF9zdGF0aWMudXNlW2tleV0pO1xuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgfVxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICkgOiBbXVxuXHRcdFx0KV07XG5cdFx0fVxuXHRcdFxuXHRcdGlmICggX3N0YXRpYy5yZXF1aXJlIClcblx0XHRcdHRoaXMuX3JlcXVpcmUucHVzaCguLi5fc3RhdGljLnJlcXVpcmUpO1xuXHRcdGlmICggY2ZnLnJlcXVpcmUgKVxuXHRcdFx0dGhpcy5fcmVxdWlyZS5wdXNoKC4uLmNmZy5yZXF1aXJlKTtcblx0XHRcblx0XHR0aGlzLl9mb2xsb3dlcnMgPSBbXTtcblx0XHR0aGlzLl9jaGFuZ2VzU1cgPSBpbml0aWFsU3RhdGUgfHwge307XG5cdFx0dGhpcy5zdGF0ZSAgICAgID0gaW5pdGlhbFN0YXRlICYmIHt9O1xuXHRcdGlmICggYXBwbHkgKVxuXHRcdFx0dGhpcy5hcHBseSA9IGFwcGx5O1xuXHRcdFxuXHRcdC8qKlxuXHRcdCAqIEluaXRpYWwgc3RhdGUgaXNuJ3QgZnVsbHkgaW5pdGlhbGl6ZWQgKCBjaGlsZHMgY29uc3RydWN0b3JzIGNhbiBzZXQgaXQgKVxuXHRcdCAqIFNjb3BlIGJhc2VkIGluc3RhbmNlIGhhdmUgdGFza1F1ZXVlIHRvIGRlbGF5IGluaXQgc3luY2hyb25vdXNseSwgaWYgbm90XG5cdFx0ICogcHJlc2VudCB3ZSB1c2Ugc2V0VGltZW91dFxuXHRcdCAqL1xuXHRcdGlmICggdGFza1F1ZXVlICkge1xuXHRcdFx0dGFza1F1ZXVlLnB1c2godGhpcy5fYWZ0ZXJDb25zdHJ1Y3Rvci5iaW5kKHRoaXMpKVxuXHRcdH1cblx0XHRlbHNlXG5cdFx0XHRzZXRUaW1lb3V0KHRoaXMuX2FmdGVyQ29uc3RydWN0b3IuYmluZCh0aGlzKSlcblx0fVxuXHRcblx0LyoqXG5cdCAqIEdldCB0aGUgaW5jb21pbmcgc3RhdGUgKCBmb3IgaW1tZWRpYXRlIHN0YXRlIHJlbGF0aXZlIGFjdGlvbnMgKVxuXHQgKiBAcmV0dXJucyB7e318Kn1cblx0ICovXG5cdGdldCBuZXh0U3RhdGUoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX2NoYW5nZXNTVyAmJiB7IC4uLnRoaXMuc3RhdGUsIC4uLnRoaXMuX2NoYW5nZXNTVyB9IHx8IHRoaXMuc3RhdGU7XG5cdH1cblx0XG5cdF9hZnRlckNvbnN0cnVjdG9yKCkge1xuXHRcdGxldCBjZmcgICAgICAgICAgPSB0aGlzLl9jZmcsXG5cdFx0ICAgIF9zdGF0aWMgICAgICA9IHRoaXMuY29uc3RydWN0b3IsXG5cdFx0ICAgIHNuYXBzaG90ICAgICA9IHRoaXMucmVzdG9yZSh1bmRlZmluZWQsIHRydWUpLFxuXHRcdCAgICBpbml0aWFsU3RhdGUgPSB0aGlzLnN0YXRlLFxuXHRcdCAgICBpbml0aWFsRGF0YSAgPSB0aGlzLmRhdGEsXG5cdFx0ICAgIGFwcGxpZWQ7XG5cdFx0e1xuXHRcdFx0XG5cdFx0XHRpZiAoIGluaXRpYWxEYXRhIClcblx0XHRcdFx0dGhpcy5kYXRhID0gaW5pdGlhbERhdGE7XG5cdFx0XHRlbHNlIGlmICggX3N0YXRpYy5kYXRhICE9PSB1bmRlZmluZWQgKVxuXHRcdFx0XHR0aGlzLmRhdGEgPSB7IC4uLl9zdGF0aWMuZGF0YSB9O1xuXHRcdFx0ZWxzZSBpZiAoIGNmZy5oYXNPd25Qcm9wZXJ0eShcImRhdGFcIikgKVxuXHRcdFx0XHR0aGlzLmRhdGEgPSBjZmcuZGF0YTtcblx0XHRcdFxuXHRcdFx0aWYgKCBjZmcuaGFzT3duUHJvcGVydHkoXCJzdGF0ZVwiKSAmJiBjZmcuc3RhdGUgIT09IHVuZGVmaW5lZCApXG5cdFx0XHRcdGluaXRpYWxTdGF0ZSA9IHsgLi4uaW5pdGlhbFN0YXRlLCAuLi5jZmcuc3RhdGUgfTtcblx0XHRcdFxuXHRcdFx0aWYgKCB0aGlzLmRhdGEgPT09IHVuZGVmaW5lZCApIHtcblx0XHRcdFx0aWYgKCBpbml0aWFsU3RhdGUgfHwgdGhpcy5fdXNlLmxlbmd0aCApIHsvLyBzeW5jIGFwcGx5XG5cdFx0XHRcdFx0dGhpcy5fY2hhbmdlc1NXID0ge1xuXHRcdFx0XHRcdFx0Li4udGhpcy5fY2hhbmdlc1NXLFxuXHRcdFx0XHRcdFx0Li4uKGluaXRpYWxTdGF0ZSB8fCB7fSksXG5cdFx0XHRcdFx0XHQuLi50aGlzLiRzY29wZS5tYXAodGhpcywgdGhpcy5fdXNlKVxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSAgICAgID0ge307XG5cdFx0XHRcdFx0aWYgKCB0aGlzLnNob3VsZEFwcGx5KHRoaXMuX2NoYW5nZXNTVykgJiYgdGhpcy5kYXRhID09PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRcdFx0XHR0aGlzLmRhdGEgICAgICAgPSB0aGlzLmFwcGx5KHRoaXMuZGF0YSwgdGhpcy5fY2hhbmdlc1NXLCB0aGlzLl9jaGFuZ2VzU1cpO1xuXHRcdFx0XHRcdFx0YXBwbGllZCAgICAgICAgID0gdHJ1ZTtcblx0XHRcdFx0XHRcdHRoaXMuc3RhdGUgICAgICA9IHRoaXMuX2NoYW5nZXNTVztcblx0XHRcdFx0XHRcdHRoaXMuX2NoYW5nZXNTVyA9IHt9O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdGFwcGxpZWQgICAgICAgICA9IHRydWU7XG5cdFx0XHRcdHRoaXMuc3RhdGUgICAgICA9IHsvLyBhc3N1bWUgdGhpcyBzdGF0ZSBpcyBzeW5jIHdpdGggaW5pdGlhbCBkYXRhXG5cdFx0XHRcdFx0Li4udGhpcy5fY2hhbmdlc1NXLFxuXHRcdFx0XHRcdC4uLihpbml0aWFsU3RhdGUgfHwge30pLFxuXHRcdFx0XHRcdC4uLnRoaXMuJHNjb3BlLm1hcCh0aGlzLCB0aGlzLl91c2UpXG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5fY2hhbmdlc1NXID0ge307XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmICggKHRoaXMuZGF0YSAhPT0gdW5kZWZpbmVkIHx8IGFwcGxpZWQpICYmICF0aGlzLl9fbG9ja3MuYWxsICkge1xuXHRcdFx0dGhpcy5fc3RhYmxlID0gdHJ1ZTtcblx0XHRcdHRoaXMuX3JldisrO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdHRoaXMuX3N0YWJsZSA9IGZhbHNlO1xuXHRcdFx0aWYgKCAhX3N0YXRpYy5tYW5hZ2VkICYmICF0aGlzLnN0YXRlICYmICghdGhpcy5fdXNlIHx8ICF0aGlzLl91c2UubGVuZ3RoKSApIHtcblx0XHRcdFx0Y29uc29sZS53YXJuKFwiUmVTY29wZSBzdG9yZSAnXCIsIHRoaXMubmFtZSwgXCInIGhhdmUgbm8gaW5pdGlhbCBkYXRhLCBzdGF0ZSBvciB1c2UuIEl0IGNhbid0IHN0YWJpbGl6ZS4uLlwiKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0IXRoaXMuX3N0YWJsZSAmJiB0aGlzLmVtaXQoJ3Vuc3RhYmxlJywgdGhpcy5zdGF0ZSk7XG5cdFx0XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBPdmVycmlkYWJsZSBtZXRob2QgdG8ga25vdyBpZiBhIGRhdGEgY2hhbmdlIHNob3VsZCBiZSBwcm9wYWcgdG8gdGhlIGxpc3RlbmluZ1xuXHQgKiBzdG9yZXMgJiBjb21wb25lbnRzXG5cdCAqL1xuXHRzaG91bGRQcm9wYWcoIG5EYXRhcyApIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXHRcblx0aGFzRGF0YUNoYW5nZSggbkRhdGFzICkge1xuXHRcdHZhciBfc3RhdGljID0gdGhpcy5jb25zdHJ1Y3Rvciwgcixcblx0XHQgICAgY0RhdGFzICA9IHRoaXMuZGF0YTtcblx0XHRyICAgICAgICAgICA9ICFjRGF0YXMgJiYgbkRhdGFzIHx8IGNEYXRhcyAhPT0gbkRhdGFzO1xuXHRcdCFyICYmIGNEYXRhcyAmJiBPYmplY3Qua2V5cyhjRGF0YXMpLmZvckVhY2goXG5cdFx0XHQoIGtleSApID0+IHtcblx0XHRcdFx0ciA9IHIgfHwgKG5EYXRhc1xuXHRcdFx0XHQgICAgICAgICAgPyBjRGF0YXNba2V5XSAhPT0gbkRhdGFzW2tleV1cblx0XHRcdFx0ICAgICAgICAgIDogY0RhdGFzICYmIGNEYXRhc1trZXldKVxuXHRcdFx0fVxuXHRcdCk7XG5cdFx0IXIgJiYgbkRhdGFzICYmIE9iamVjdC5rZXlzKG5EYXRhcykuZm9yRWFjaChcblx0XHRcdCgga2V5ICkgPT4ge1xuXHRcdFx0XHRyID0gciB8fCAobkRhdGFzXG5cdFx0XHRcdCAgICAgICAgICA/IGNEYXRhc1trZXldICE9PSBuRGF0YXNba2V5XVxuXHRcdFx0XHQgICAgICAgICAgOiBjRGF0YXMgJiYgY0RhdGFzW2tleV0pXG5cdFx0XHR9XG5cdFx0KTtcblx0XHRyZXR1cm4gcjtcblx0fVxuXHRcblx0LyoqXG5cdCAqIE92ZXJyaWRhYmxlIG1ldGhvZCB0byBrbm93IGlmIGEgc3RhdGUgY2hhbmdlIHNob3VsZCBiZSBhcHBsaWVkXG5cdCAqL1xuXHRzaG91bGRBcHBseSggc3RhdGUgPSB0aGlzLnN0YXRlICkge1xuXHRcdHZhciBfc3RhdGljID0gdGhpcy5jb25zdHJ1Y3Rvcjtcblx0XHRcblx0XHRyZXR1cm4gKFxuXHRcdFx0ISF0aGlzLmlzQ29tcGxldGUoc3RhdGUpXG5cdFx0KSAmJiAoaXMuYXJyYXkoX3N0YXRpYy5mb2xsb3cpXG5cdFx0ICAgICAgPyBfc3RhdGljLmZvbGxvd1xuXHRcdCAgICAgICAgICAgICAgIC5yZWR1Y2UoKCByLCBpICkgPT4gKHIgfHwgc3RhdGUgJiYgc3RhdGVbaV0pLCBmYWxzZSlcblx0XHQgICAgICA6IF9zdGF0aWMuZm9sbG93XG5cdFx0ICAgICAgICA/IE9iamVjdC5rZXlzKF9zdGF0aWMuZm9sbG93KVxuXHRcdCAgICAgICAgICAgICAgICAucmVkdWNlKCggciwgaSApID0+IChcblx0XHRcdCAgICAgICAgICAgICAgICByXG5cdFx0XHQgICAgICAgICAgICAgICAgfHwgc3RhdGUgJiYgaXMuZm4oX3N0YXRpYy5mb2xsb3dbaV0pICYmIF9zdGF0aWMuZm9sbG93W2ldLmNhbGwodGhpcywgc3RhdGVbaV0pXG5cdFx0XHQgICAgICAgICAgICAgICAgfHwgX3N0YXRpYy5mb2xsb3dbaV0gJiYgc3RhdGVbaV0gIT09IHRoaXMuc3RhdGVbaV1cblx0XHQgICAgICAgICAgICAgICAgKSwgZmFsc2UpIDogdHJ1ZVxuXHRcdCk7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBPdmVycmlkYWJsZSBhcHBsaWVyIC8gcmVtYXBwZXJcblx0ICogSWYgc3RhdGUgb3IgbGFzdFB1YmxpY1N0YXRlIGFyZSBzaW1wbGUgaGFzaCBtYXBzIGFwcGx5IHdpbGwgcmV0dXJuIHsuLi5kYXRhLFxuXHQgKiAuLi5zdGF0ZX0gaWYgbm90IGl0IHdpbGwgcmV0dXJuIHRoZSBsYXN0IHByaXZhdGUgc3RhdGVcblx0ICogQHBhcmFtIGRhdGFcblx0ICogQHBhcmFtIHN0YXRlXG5cdCAqIEByZXR1cm5zIHsqfVxuXHQgKi9cblx0YXBwbHkoIGRhdGEsIHN0YXRlLCBjaGFuZ2VzICkge1xuXHRcdHN0YXRlID0gc3RhdGUgfHwgdGhpcy5zdGF0ZTtcblx0XHRcblx0XHRpZiAoIHRoaXMucmVmaW5lIClcblx0XHRcdHJldHVybiB0aGlzLnJlZmluZSguLi5hcmd1bWVudHMpO1xuXHRcdFxuXHRcdGlmICggIWRhdGEgfHwgZGF0YS5fX3Byb3RvX18gIT09IG9ialByb3RvIHx8IHN0YXRlLl9fcHJvdG9fXyAhPT0gb2JqUHJvdG8gKVxuXHRcdFx0cmV0dXJuIHN0YXRlO1xuXHRcdGVsc2Vcblx0XHRcdHJldHVybiB7IC4uLmRhdGEsIC4uLnN0YXRlIH1cblx0fVxuXHRcblx0LyoqXG5cdCAqIEBkZXByZWNpYXRlZFxuXHQgKiBAcGFyYW0gZGF0YVxuXHQgKiBAcGFyYW0gc3RhdGVcblx0ICogQHBhcmFtIGNoYW5nZXNcblx0ICogQHJldHVybnMgeyp9XG5cdCAqL1xuXHRyZWZpbmUoIGRhdGEsIHN0YXRlLCBjaGFuZ2VzICkge1xuXHRcdHN0YXRlID0gc3RhdGUgfHwgdGhpcy5zdGF0ZTtcblx0XHRcblx0XHRpZiAoICFkYXRhIHx8IGRhdGEuX19wcm90b19fICE9PSBvYmpQcm90byB8fCBzdGF0ZS5fX3Byb3RvX18gIT09IG9ialByb3RvIClcblx0XHRcdHJldHVybiBzdGF0ZTtcblx0XHRlbHNlXG5cdFx0XHRyZXR1cm4geyAuLi5kYXRhLCAuLi5zdGF0ZSB9XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBEZWJvdW5jZSB0aGlzIHN0b3JlIHByb3BhZ2F0aW9uICggJiByZWR1Y2luZyApXG5cdCAqIEBwYXJhbSBjYlxuXHQgKi9cblx0c3RhYmlsaXplKCBjYiApIHtcblx0XHRjYiAmJiB0aGlzLm9uY2UoJ3N0YWJsZScsIGNiKTtcblx0XHR0aGlzLl9zdGFibGUgJiYgdGhpcy5lbWl0KCd1bnN0YWJsZScsIHRoaXMuc3RhdGUsIHRoaXMuZGF0YSk7XG5cdFx0XG5cdFx0dGhpcy5fc3RhYmxlID0gZmFsc2U7XG5cdFx0XG5cdFx0aWYgKCB0aGlzLl9zdGFiaWxpemVyIClcblx0XHRcdHJldHVybjtcblx0XHRcblx0XHR0aGlzLl9zdGFiaWxpemVyID0gVGFza1NlcXVlbmNlci5wdXNoVGFzayh0aGlzLCAncHVzaFN0YXRlJyk7XG5cdH1cblx0XG5cdHJldHJpZXZlKCBwYXRoLCBpID0gMCwgb2JqID0gdGhpcy5kYXRhICkge1xuXHRcdHBhdGggPSBpcy5zdHJpbmcocGF0aCkgPyBwYXRoLnNwbGl0KCcuJykgOiBwYXRoO1xuXHRcdHJldHVybiAhb2JqIHx8ICFwYXRoIHx8ICFwYXRoLmxlbmd0aFxuXHRcdCAgICAgICA/IG9ialxuXHRcdCAgICAgICA6IHBhdGgubGVuZ3RoID09IGkgKyAxXG5cdFx0ICAgICAgICAgPyBvYmpbcGF0aFtpXV1cblx0XHQgICAgICAgICA6IHRoaXMucmV0cmlldmUocGF0aCwgaSArIDEsIG9ialtwYXRoW2ldXSk7XG5cdH1cblx0XG5cdGRpc3BhdGNoKCBhY3Rpb24sIC4uLmFyZ3ogKSB7XG5cdFx0dGhpcy5zY29wZU9iai5kaXNwYXRjaChhY3Rpb24sIC4uLmFyZ3opO1xuXHR9XG5cdFxuXHR0cmlnZ2VyKCBhY3Rpb24sIC4uLmFyZ3ogKSB7XG5cdFx0bGV0IHsgYWN0aW9ucyB9ID0gdGhpcy5jb25zdHJ1Y3Rvcjtcblx0XHRpZiAoIGFjdGlvbnMgJiYgYWN0aW9uc1thY3Rpb25dICkge1xuXHRcdFx0bGV0IG5zID0gYWN0aW9uc1thY3Rpb25dLmNhbGwodGhpcywgLi4uYXJneik7XG5cdFx0XHRucyAmJiB0aGlzLnNldFN0YXRlKG5zKTtcblx0XHR9XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBQdWxsIHN0b3JlcyBpbiB0aGUgcHJpdmF0ZSBzdGF0ZVxuXHQgKiBAcGFyYW0gc3RvcmVzICB7QXJyYXl9IChwYXNzZWQgdG8gU3RvcmU6Om1hcCkgRXggOiBbXCJzZXNzaW9uXCIsXG5cdCAqICAgICBcIm90aGVyTmFtZWRTdG9yZTprZXlcIiwgb3RoZXJTdG9yZS5hcyhcIm90aGVyS2V5XCIpXVxuXHQgKi9cblx0cHVsbCggc3RvcmVzLCBkb1dhaXQsIG9yaWdpbiApIHtcblx0XHRsZXQgaW5pdGlhbE91dHB1dHMgPSB0aGlzLnNjb3BlT2JqLm1hcCh0aGlzLCBzdG9yZXMpO1xuXHRcdGlmICggZG9XYWl0ICkge1xuXHRcdFx0dGhpcy53YWl0KCk7XG5cdFx0XHRzdG9yZXMuZm9yRWFjaCgoIHMgKSA9PiB0aGlzLnNjb3BlW3NdICYmIHRoaXMud2FpdCh0aGlzLnNjb3BlW3NdKSk7XG5cdFx0XHR0aGlzLnJlbGVhc2UoKTtcblx0XHR9XG5cdFx0cmV0dXJuIGluaXRpYWxPdXRwdXRzO1xuXHR9XG5cdFxuXHQvKipcblx0ICogU2V0ICYgUHVzaCB0aGUgcmVzdWx0IGRhdGEgdG8gZm9sbG93ZXJzIGlmIHN0YWJsZVxuXHQgKiBAcGFyYW0gY2Jcblx0ICovXG5cdHB1c2goIGRhdGEsIGZvcmNlLCBjYiApIHtcblx0XHRjYiAgICA9IGZvcmNlID09PSB0cnVlID8gY2IgOiBmb3JjZTtcblx0XHRmb3JjZSA9IGZvcmNlID09PSB0cnVlO1xuXHRcdGlmICggIWZvcmNlICYmXG5cdFx0XHQoXG5cdFx0XHRcdCF0aGlzLmhhc0RhdGFDaGFuZ2UoZGF0YSlcblx0XHRcdClcblx0XHQpIHtcblx0XHRcdGNiICYmIGNiKCk7XG5cdFx0XHRpZiAoICF0aGlzLl9fbG9ja3MuYWxsICkge1xuXHRcdFx0XHRsZXQgc3RhYmxlICAgPSB0aGlzLl9zdGFibGU7XG5cdFx0XHRcdHRoaXMuX3N0YWJsZSA9IHRydWU7XG5cdFx0XHRcdCFzdGFibGUgJiYgdGhpcy5lbWl0KCdzdGFibGUnLCB0aGlzLnN0YXRlLCB0aGlzLmRhdGEpO1xuXHRcdFx0XHR0aGlzLl9zdGFiaWxpemVyID0gbnVsbDtcblx0XHRcdH1cblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0XG5cdFx0dGhpcy5kYXRhID0gZGF0YTtcblx0XHR0aGlzLndhaXQoKTtcblx0XHR0aGlzLnJlbGVhc2UoY2IpO1xuXHRcdFxuXHR9XG5cdFxuXHQvKipcblx0ICogQ2FsbCB0aGUgYXBwbHkgZm4gdXNpbmcgdGhlIGN1cnJlbnQgYWNjdW11bGF0ZWQgc3RhdGUgdXBkYXRlIHRoZW4sIHB1c2ggdGhlXG5cdCAqIHJlc3VsdGluZyBkYXRhIGlmIHN0YWJsZVxuXHQgKiBAcGFyYW0gZm9yY2Vcblx0ICogQHJldHVybnMge2Jvb2xlYW59XG5cdCAqL1xuXHRwdXNoU3RhdGUoIGZvcmNlICkge1xuXHRcdFxuXHRcdGlmICggIWZvcmNlICYmICF0aGlzLl9jaGFuZ2VzU1cgJiYgdGhpcy5kYXRhIClcblx0XHRcdHJldHVybjtcblx0XHRcblx0XHR2YXIgbmV4dFN0YXRlID0gdGhpcy5fbmV4dFN0YXRlIHx8IHsgLi4udGhpcy5zdGF0ZSwgLi4uKHRoaXMuX2NoYW5nZXNTVyB8fCB7fSkgfSxcblx0XHQgICAgbmV4dERhdGEgID0gdGhpcy5hcHBseSh0aGlzLmRhdGEsIG5leHRTdGF0ZSwgdGhpcy5fY2hhbmdlc1NXKTtcblx0XHRcblx0XHR0aGlzLl9zdGFiaWxpemVyID0gbnVsbDtcblx0XHR0aGlzLnN0YXRlICAgICAgID0gbmV4dFN0YXRlO1xuXHRcdHRoaXMuX2NoYW5nZXNTVyAgPSBudWxsO1xuXHRcdFxuXHRcdGlmICggIWZvcmNlICYmXG5cdFx0XHQoXG5cdFx0XHRcdCF0aGlzLmhhc0RhdGFDaGFuZ2UobmV4dERhdGEpXG5cdFx0XHQpXG5cdFx0KSB7XG5cdFx0XHRpZiAoICF0aGlzLl9fbG9ja3MuYWxsICkge1xuXHRcdFx0XHRsZXQgc3RhYmxlICAgPSB0aGlzLl9zdGFibGU7XG5cdFx0XHRcdHRoaXMuX3N0YWJsZSA9IHRydWU7XG5cdFx0XHRcdCFzdGFibGUgJiYgdGhpcy5lbWl0KCdzdGFibGUnLCB0aGlzLnN0YXRlLCB0aGlzLmRhdGEpO1xuXHRcdFx0XHR0aGlzLl9zdGFiaWxpemVyID0gbnVsbDtcblx0XHRcdH1cblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0XG5cdFx0dGhpcy5kYXRhID0gbmV4dERhdGE7XG5cdFx0dGhpcy53YWl0KCk7XG5cdFx0dGhpcy5yZWxlYXNlKCk7XG5cdFx0XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBBZGQgJ3BTdGF0ZScgdG8gdGhlIGN1cnJlbnQgYWNjdW11bGF0ZWQgc3RhdGUgdXBkYXRlc1xuXHQgKiAmIHdhaXQgc291cmNlIHN0b3JlcyBzdGFiaWxpemF0aW9uIGJlZm9yZSBwdXNoaW5nIHRoZXNlIHN0YXRlIHVwZGF0ZXNcblx0ICogQHBhcmFtIHBTdGF0ZVxuXHQgKiBAcGFyYW0gY2Jcblx0ICovXG5cdHNldFN0YXRlKCBwU3RhdGUsIGNiLCBzeW5jICkge1xuXHRcdHZhciBpICAgICAgID0gMCwgY2hhbmdlLFxuXHRcdCAgICBjaGFuZ2VzID0gdGhpcy5fY2hhbmdlc1NXID0gdGhpcy5fY2hhbmdlc1NXIHx8IHt9O1xuXHRcdGZvciAoIHZhciBrIGluIHBTdGF0ZSApXG5cdFx0XHRpZiAoICF0aGlzLnN0YXRlXG5cdFx0XHRcdHx8IGNoYW5nZXMuaGFzT3duUHJvcGVydHkoaykvLyB0b2RvXG5cdFx0XHRcdCYmIChcblx0XHRcdFx0XHRwU3RhdGVba10gIT09IGNoYW5nZXNba11cblx0XHRcdFx0KSB8fCBwU3RhdGUuaGFzT3duUHJvcGVydHkoaylcblx0XHRcdFx0JiYgKFxuXHRcdFx0XHRcdHBTdGF0ZVtrXSAhPT0gdGhpcy5zdGF0ZVtrXVxuXHRcdFx0XHRcdHx8XG5cdFx0XHRcdFx0KHRoaXMuc3RhdGVba10gJiYgcFN0YXRlW2tdICYmIChwU3RhdGVba10uX3JldiAhPSB0aGlzLl9yZXZzW2tdKSkvLyByZXYvaGFzaCB1cGRhdGVcblx0XHRcdFx0KSApIHtcblx0XHRcdFx0Y2hhbmdlICAgICAgICA9IHRydWU7XG5cdFx0XHRcdHRoaXMuX3JldnNba10gPSBwU3RhdGVba10gJiYgcFN0YXRlW2tdLl9yZXYgfHwgdHJ1ZTtcblx0XHRcdFx0Y2hhbmdlc1trXSAgICA9IHBTdGF0ZVtrXTtcblx0XHRcdH1cblx0XHRcblx0XHR0aGlzLl9uZXh0U3RhdGUgPSB7IC4uLnRoaXMuc3RhdGUsIC4uLmNoYW5nZXMgfTtcblx0XHRpZiAoICF0aGlzLnNob3VsZEFwcGx5KHRoaXMuX25leHRTdGF0ZSkgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdFxuXHRcdGlmICggc3luYyApIHtcblx0XHRcdHRoaXMucHVzaFN0YXRlKCk7XG5cdFx0XHRjYiAmJiBjYigpO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdGlmICggY2hhbmdlICkge1xuXHRcdFx0XHR0aGlzLnN0YWJpbGl6ZShjYik7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIGNiICYmIGNiKCk7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cdFxuXHQvKipcblx0ICogVXBkYXRlIHRoZSBjdXJyZW50IHN0YXRlICYgcHVzaCBpdFxuXHQgKiBAcGFyYW0gcFN0YXRlXG5cdCAqIEBwYXJhbSBjYlxuXHQgKi9cblx0c2V0U3RhdGVTeW5jKCBwU3RhdGUgKSB7XG5cdFx0dmFyIGkgICAgICAgPSAwLCBjaGFuZ2UsXG5cdFx0ICAgIGNoYW5nZXMgPSB0aGlzLl9jaGFuZ2VzU1cgPSB0aGlzLl9jaGFuZ2VzU1cgfHwge307XG5cdFx0Zm9yICggdmFyIGsgaW4gcFN0YXRlIClcblx0XHRcdGlmICggIXRoaXMuc3RhdGUgfHwgcFN0YXRlLmhhc093blByb3BlcnR5KGspXG5cdFx0XHRcdCYmIChcblx0XHRcdFx0XHRwU3RhdGVba10gIT0gdGhpcy5zdGF0ZVtrXVxuXHRcdFx0XHRcdHx8XG5cdFx0XHRcdFx0KHRoaXMuc3RhdGVba10gJiYgcFN0YXRlW2tdICYmIChwU3RhdGVba10uX3JldiAhPSB0aGlzLl9yZXZzW2tdKSkvLyByZXYvaGFzaCB1cGRhdGVcblx0XHRcdFx0KSApIHtcblx0XHRcdFx0Y2hhbmdlICAgICAgICA9IHRydWU7XG5cdFx0XHRcdHRoaXMuX3JldnNba10gPSBwU3RhdGVba10gJiYgcFN0YXRlW2tdLl9yZXYgfHwgdHJ1ZTtcblx0XHRcdFx0Y2hhbmdlc1trXSAgICA9IHBTdGF0ZVtrXTtcblx0XHRcdH1cblx0XHR0aGlzLnNob3VsZEFwcGx5KHsgLi4uKHRoaXMuc3RhdGUgfHwge30pLCAuLi5jaGFuZ2VzIH0pICYmIHRoaXMucHVzaFN0YXRlKCk7XG5cdFx0cmV0dXJuIHRoaXMuZGF0YTtcblx0fVxuXHRcblx0LyoqXG5cdCAqIGdldCBhIHN0b3JlLWtleSBwYWlyIGZvciBTdG9yZTo6bWFwXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG5cdCAqIEByZXR1cm5zIHt7c3RvcmU6IFN0b3JlLCBuYW1lOiAqfX1cblx0ICovXG5cdGFzKCBuYW1lICkge1xuXHRcdHJldHVybiB7IHN0b3JlOiB0aGlzLCBuYW1lIH07XG5cdH1cblx0XG5cdG9uKCBsaXN0cyApIHtcblx0XHRpZiAoICFpcy5zdHJpbmcobGlzdHMpICYmIGxpc3RzIClcblx0XHRcdE9iamVjdC5rZXlzKGxpc3RzKS5mb3JFYWNoKGsgPT4gc3VwZXIub24oaywgbGlzdHNba10pKTtcblx0XHRlbHNlIHN1cGVyLm9uKC4uLmFyZ3VtZW50cyk7XG5cdH1cblx0XG5cdHJlbW92ZUxpc3RlbmVyKCBsaXN0cyApIHtcblx0XHRpZiAoICFpcy5zdHJpbmcobGlzdHMpICYmIGxpc3RzIClcblx0XHRcdE9iamVjdC5rZXlzKGxpc3RzKS5mb3JFYWNoKGsgPT4gc3VwZXIucmVtb3ZlTGlzdGVuZXIoaywgbGlzdHNba10pKTtcblx0XHRlbHNlIHN1cGVyLnJlbW92ZUxpc3RlbmVyKC4uLmFyZ3VtZW50cyk7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBpcyBjb21wbGV0ZSAoYWxsIHJlcXVpZXJlZCBrZXlzIGFyZSBoZXJlKVxuXHQgKiBAcmV0dXJucyBib29sXG5cdCAqL1xuXHRpc0NvbXBsZXRlKCBzdGF0ZSA9IHRoaXMuc3RhdGUgKSB7XG5cdFx0dmFyIF9zdGF0aWMgPSB0aGlzLmNvbnN0cnVjdG9yO1xuXHRcdHJldHVybiAoXG5cdFx0XHQhdGhpcy5fcmVxdWlyZVxuXHRcdFx0fHwgIXRoaXMuX3JlcXVpcmUubGVuZ3RoXG5cdFx0XHR8fCBzdGF0ZSAmJiB0aGlzLl9yZXF1aXJlLnJlZHVjZShcblx0XHRcdFx0KCByLCBrZXkgKSA9PiAociAmJiBzdGF0ZVtrZXldKSxcblx0XHRcdFx0dHJ1ZVxuXHRcdFx0KVxuXHRcdCk7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBpcyBzdGFibGVcblx0ICogQHJldHVybnMgYm9vbFxuXHQgKi9cblx0aXNTdGFibGUoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX3N0YWJsZTtcblx0fVxuXHRcblx0LyoqXG5cdCAqIFNlcmlhbGl6ZSBzdGF0ZSAmIGRhdGEgd2l0aCBzb3VyY2VzIHJlZnNcblx0ICogQHJldHVybnMgYm9vbFxuXHQgKi9cblx0c2VyaWFsaXplKCBjZmcgPSB7fSwgb3V0cHV0ID0ge30gKSB7XG5cdFx0bGV0IHNJZCAgPSBjZmcucGFyZW50QWxpYXMgfHwgdGhpcy5zY29wZU9iai5faWQsXG5cdFx0ICAgIHJlZnMgPVxuXHRcdFx0ICAgICFjZmcubm9yZWZzICYmIGlzLmFycmF5KHRoaXMuX3VzZSkgJiYgdGhpcy5fdXNlLnJlZHVjZShcblx0XHRcdCAgICAoIG1hcCwga2V5ICkgPT4gey8vdG9kb1xuXHRcdFx0XHQgICAgbGV0IG5hbWUsXG5cdFx0XHRcdCAgICAgICAgYWxpYXMsIHBhdGgsIF9rZXksXG5cdFx0XHRcdCAgICAgICAgc3RvcmU7XG5cdFx0XHRcdCAgICBpZiAoIGtleS5zdG9yZSAmJiBrZXkubmFtZSApIHtcblx0XHRcdFx0XHQgICAgYWxpYXMgPSBuYW1lID0ga2V5Lm5hbWU7XG5cdFx0XHRcdFx0ICAgIHN0b3JlID0ga2V5LnN0b3JlO1xuXHRcdFx0XHQgICAgfVxuXHRcdFx0XHQgICAgZWxzZSBpZiAoIGlzLmZuKGtleSkgKSB7XG5cdFx0XHRcdFx0ICAgIG5hbWUgID0gYWxpYXMgPSBrZXkubmFtZSB8fCBrZXkuZGVmYXVsdE5hbWU7XG5cdFx0XHRcdFx0ICAgIHN0b3JlID0ga2V5O1xuXHRcdFx0XHQgICAgfVxuXHRcdFx0XHQgICAgZWxzZSB7XG5cdFx0XHRcdFx0ICAgIF9rZXkgID0ga2V5Lm1hdGNoKC8oW15cXC5cXDpdKykoKD86XFwuW15cXC5cXDpdKykqKSg/OlxcOihbXlxcLlxcOl0rKSk/Lyk7XG5cdFx0XHRcdFx0ICAgIG5hbWUgID0gX2tleVsxXTtcblx0XHRcdFx0XHQgICAgcGF0aCAgPSBfa2V5WzJdICYmIF9rZXlbMl0uc3Vic3RyKDEpO1xuXHRcdFx0XHRcdCAgICBzdG9yZSA9IHRoaXMuc2NvcGVPYmouc3RvcmVzW19rZXlbMV1dO1xuXHRcdFx0XHRcdCAgICBhbGlhcyA9IF9rZXlbM10gfHwgcGF0aCAmJiBwYXRoLm1hdGNoKC8oW15cXC5dKikkLylbMF0gfHwgX2tleVsxXTtcblx0XHRcdFx0ICAgIH1cblx0XHRcdFx0ICAgIGlmICggc3RvcmUgJiYgaXMucnNTdG9yZShzdG9yZSkgJiYgIXN0b3JlLnNjb3BlT2JqLl8uaXNMb2NhbElkIClcblx0XHRcdFx0XHQgICAgbWFwW2FsaWFzXSA9IHN0b3JlLnNjb3BlT2JqLl9pZCArICcvJyArIG5hbWU7XG5cdFx0XHRcdFxuXHRcdFx0XHQgICAgcmV0dXJuIG1hcDtcblx0XHRcdCAgICB9LCB7fVxuXHRcdFx0ICAgICkgfHwge307XG5cdFx0XG5cdFx0a2V5V2Fsa25TZXQoXG5cdFx0XHRvdXRwdXQsXG5cdFx0XHQoc0lkICsgJy8nICsgdGhpcy5uYW1lKSxcblx0XHRcdHtcblx0XHRcdFx0c3RhdGU6IHRoaXMuc3RhdGUgJiZcblx0XHRcdFx0XHQoXG5cdFx0XHRcdFx0XHRjZmcubm9yZWZzXG5cdFx0XHRcdFx0XHQ/IHsgLi4udGhpcy5zdGF0ZSB9XG5cdFx0XHRcdFx0XHQ6IE9iamVjdC5rZXlzKHRoaXMuc3RhdGUpLnJlZHVjZSgoIGgsIGsgKSA9PiAoIXJlZnNba10gJiYgKGhba10gPSB0aGlzLnN0YXRlW2tdKSwgaCksIHt9KVxuXHRcdFx0XHRcdCksXG5cdFx0XHRcdGRhdGEgOiAoXG5cdFx0XHRcdFx0XHR0aGlzLmRhdGEgJiZcblx0XHRcdFx0XHRcdHRoaXMuZGF0YS5fX3Byb3RvX18gPT09IG9ialByb3RvID9cblx0XHRcdFx0XHRcdHRoaXMuZGF0YSA6XG5cdFx0XHRcdFx0XHQoaXMuYm9vbCh0aGlzLmRhdGEpXG5cdFx0XHRcdFx0XHRcdHx8IGlzLm51bWJlcih0aGlzLmRhdGEpXG5cdFx0XHRcdFx0XHRcdHx8IGlzLnN0cmluZyh0aGlzLmRhdGEpKSAmJiB0aGlzLmRhdGFcblx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0fHwgdW5kZWZpbmVkXG5cdFx0XHRcdFxuXHRcdFx0XHQsXG5cdFx0XHRcdHJlZnNcblx0XHRcdH1cblx0XHQpO1xuXHRcdHJldHVybiBvdXRwdXQ7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiByZXN0b3JlIHN0YXRlICYgZGF0YVxuXHQgKiBAcmV0dXJucyBib29sXG5cdCAqL1xuXHRyZXN0b3JlKCBzbmFwc2hvdCwgaW1tZWRpYXRlICkge1xuXHRcdHNuYXBzaG90ID0gc25hcHNob3Rcblx0XHRcdCYmIGtleVdhbGtuR2V0KHNuYXBzaG90LCB0aGlzLnNjb3BlT2JqLl9pZCArICcvJyArIHRoaXMubmFtZSlcblx0XHRcdHx8IHRoaXMuJHNjb3BlLnRha2VTbmFwc2hvdEJ5S2V5KHRoaXMuc2NvcGVPYmouX2lkICsgJy8nICsgdGhpcy5uYW1lKTtcblx0XHRcblx0XHRpZiAoICFzbmFwc2hvdCApXG5cdFx0XHRyZXR1cm47XG5cdFx0XG5cdFx0aWYgKCBzbmFwc2hvdCApIHtcblx0XHRcdGlmICggIXRoaXMuaXNTdGFibGUoKSAmJiAhaW1tZWRpYXRlIClcblx0XHRcdFx0dGhpcy50aGVuKCgpID0+IHJlc3RvcmUoc25hcHNob3QpKVxuXHRcdFx0bGV0IHNuYXA7XG5cdFx0XHR0aGlzLnN0YXRlID0geyAuLi5zbmFwc2hvdC5zdGF0ZSB9O1xuXHRcdFx0T2JqZWN0LmtleXMoc25hcHNob3QucmVmcykuZm9yRWFjaChcblx0XHRcdFx0KCBrZXkgKSA9PiB7Ly90b2RvXG5cdFx0XHRcdFx0aWYgKCBzbmFwID0gdGhpcy4kc2NvcGUuZ2V0U25hcHNob3RCeUtleShzbmFwc2hvdC5yZWZzW2tleV0pIClcblx0XHRcdFx0XHRcdHRoaXMuc3RhdGVba2V5XSA9IHNuYXAuZGF0YTtcblx0XHRcdFx0XHQvL2Vsc2Vcblx0XHRcdFx0XHQvLyAgICBjb25zb2xlLndhcm4oJ25vdCBmb3VuZCA6ICcsIGtleSwgc25hcCAmJiBzbmFwLnJlZnNbIGtleSBdKVxuXHRcdFx0XHR9XG5cdFx0XHQpXG5cdFx0XHRcblx0XHRcdHRoaXMuZGF0YSA9IHNuYXBzaG90LmRhdGE7XG5cdFx0XHRcblx0XHR9XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBVbiBiaW5kIHRoaXMgc3RvcmUgb2ZmIHRoZSBnaXZlbiBjb21wb25lbnQta2V5XG5cdCAqIEBwYXJhbSBvYmpcblx0ICogQHBhcmFtIGtleVxuXHQgKiBAcmV0dXJucyB7QXJyYXkuPCo+fVxuXHQgKi9cblx0dW5CaW5kKCBvYmosIGtleSwgcGF0aCApIHtcblx0XHR2YXIgZm9sbG93ZXJzID0gdGhpcy5fZm9sbG93ZXJzLFxuXHRcdCAgICBpICAgICAgICAgPSBmb2xsb3dlcnMgJiYgZm9sbG93ZXJzLmxlbmd0aDtcblx0XHR3aGlsZSAoIGZvbGxvd2VycyAmJiBpLS0gKVxuXHRcdFx0aWYgKCBmb2xsb3dlcnNbaV1bMF0gPT09IG9iaiAmJiBmb2xsb3dlcnNbaV1bMV0gPT09IGtleSAmJiBmb2xsb3dlcnNbaV1bMl0gPT09IHBhdGggKVxuXHRcdFx0XHRyZXR1cm4gZm9sbG93ZXJzLnNwbGljZShpLCAxKTtcblx0fVxuXHRcblx0LyoqXG5cdCAqIEJpbmQgdGhpcyBzdG9yZSBjaGFuZ2VzIHRvIHRoZSBnaXZlbiBjb21wb25lbnQta2V5XG5cdCAqIEBwYXJhbSBvYmoge1JlYWN0LkNvbXBvbmVudHxTdG9yZXxmdW5jdGlvbilcblx0ICogQHBhcmFtIGtleSB7c3RyaW5nfSBvcHRpb25hbCBrZXkgd2hlcmUgdG8gbWFwIHRoZSBwdWJsaWMgc3RhdGVcblx0ICovXG5cdGJpbmQoIG9iaiwga2V5LCBzZXRJbml0aWFsID0gdHJ1ZSwgcGF0aCApIHtcblx0XHR0aGlzLl9mb2xsb3dlcnMucHVzaChbb2JqLCBrZXksIHBhdGhdKTtcblx0XHRpZiAoIHNldEluaXRpYWwgJiYgdGhpcy5kYXRhICYmIHRoaXMuX3N0YWJsZSApIHtcblx0XHRcdGxldCBkYXRhID0gcGF0aCA/IHRoaXMucmV0cmlldmUocGF0aCkgOiB0aGlzLmRhdGE7XG5cdFx0XHRpZiAoIHR5cGVvZiBvYmogIT0gXCJmdW5jdGlvblwiICkge1xuXHRcdFx0XHRpZiAoIGtleSApIG9iai5zZXRTdGF0ZSh7IFtrZXldOiBkYXRhIH0pO1xuXHRcdFx0XHRlbHNlIG9iai5zZXRTdGF0ZShkYXRhKTtcblx0XHRcdH1cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHRvYmooZGF0YSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdFxuXHQvKipcblx0ICogb25jZSgnc3RhYmxlJywgY2IpXG5cdCAqIEBwYXJhbSBvYmoge1JlYWN0LkNvbXBvbmVudHxTdG9yZXxmdW5jdGlvbilcblx0ICogQHBhcmFtIGtleSB7c3RyaW5nfSBvcHRpb25hbCBrZXkgd2hlcmUgdG8gbWFwIHRoZSBwdWJsaWMgc3RhdGVcblx0ICovXG5cdHRoZW4oIGNiICkge1xuXHRcdGlmICggdGhpcy5fc3RhYmxlIClcblx0XHRcdHJldHVybiBjYih0aGlzLmRhdGEpO1xuXHRcdHRoaXMub25jZSgnc3RhYmxlJywgZSA9PiBjYih0aGlzLmRhdGEpKTtcblx0fVxuXHRcblx0LyoqXG5cdCAqIEFkZCBhIGxvY2sgc28gdGhlIHN0b3JlIHdpbGwgbm90IHByb3BhZyBpdCBkYXRhIHVudGlsbCByZWxlYXNlKCkgaXMgY2FsbFxuXHQgKiBAcGFyYW0gcHJldmlvdXMge1N0b3JlfG51bWJlcnxBcnJheX0gQG9wdGlvbmFsIHdmIHRvIHdhaXQsIHJlbGVhc2VzIHRvIHdhaXQgb3Jcblx0ICogICAgIGFycmF5IG9mIHN0dWZmIHRvIHdhaXRcblx0ICogQHJldHVybnMge3RoaXN9XG5cdCAqL1xuXHR3YWl0KCBwcmV2aW91cyApIHtcblx0XHRpZiAoIHR5cGVvZiBwcmV2aW91cyA9PSBcIm51bWJlclwiIClcblx0XHRcdHJldHVybiB0aGlzLl9fbG9ja3MuYWxsICs9IHByZXZpb3VzO1xuXHRcdGlmICggaXMuYXJyYXkocHJldmlvdXMpIClcblx0XHRcdHJldHVybiBwcmV2aW91cy5tYXAodGhpcy53YWl0LmJpbmQodGhpcykpO1xuXHRcdFxuXHRcdHRoaXMuX3N0YWJsZSAmJiB0aGlzLmVtaXQoJ3Vuc3RhYmxlJywgdGhpcy5zdGF0ZSwgdGhpcy5kYXRhKTtcblx0XHR0aGlzLl9zdGFibGUgPSBmYWxzZTtcblx0XHR0aGlzLl9fbG9ja3MuYWxsKys7XG5cdFx0XG5cdFx0bGV0IHJlYXNvbiA9IGlzLnN0cmluZyhwcmV2aW91cykgPyBwcmV2aW91cyA6IG51bGw7XG5cdFx0aWYgKCByZWFzb24gKSB7XG5cdFx0XHR0aGlzLl9fbG9ja3NbcmVhc29uXSA9IHRoaXMuX19sb2Nrc1tyZWFzb25dIHx8IDA7XG5cdFx0XHR0aGlzLl9fbG9ja3NbcmVhc29uXSsrO1xuXHRcdH1cblx0XHRpZiAoIHByZXZpb3VzICYmIGlzLmZuKHByZXZpb3VzLnRoZW4pICkge1xuXHRcdFx0cHJldmlvdXMudGhlbih0aGlzLnJlbGVhc2UuYmluZCh0aGlzLCBudWxsKSk7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cdFxuXHQvKipcblx0ICogRGVjcmVhc2UgbG9ja3MgZm9yIHRoaXMgc3RvcmUsIGlmIGl0IHJlYWNoIDAgLFxuXHQgKiBpdCB3aWxsIGJlIHByb3BhZ2F0ZWQgdG8gdGhlIGZvbGxvd2Vycyxcblx0ICogdGhlbiwgYWxsIHN0dWZmIHBhc3NlZCB0byBcInRoZW5cIiBjYWxsIGJhY2sgd2lsbCBiZSBleGVjIC8gcmVsZWFzZWRcblx0ICogQHBhcmFtIGRlc3luY1xuXHQgKiBAcmV0dXJucyB7Kn1cblx0ICovXG5cdHJlbGVhc2UoIHJlYXNvbiwgY2IgKSB7XG5cdFx0dmFyIF9zdGF0aWMgPSB0aGlzLmNvbnN0cnVjdG9yLCBtZSA9IHRoaXM7XG5cdFx0bGV0IGkgICAgICAgPSAwLCB3YXNTdGFibGUgPSB0aGlzLl9zdGFibGU7XG5cdFx0XG5cdFx0aWYgKCBpcy5mbihyZWFzb24pICkge1xuXHRcdFx0Y2IgICAgID0gcmVhc29uO1xuXHRcdFx0cmVhc29uID0gbnVsbDtcblx0XHR9XG5cdFx0XG5cdFx0aWYgKCByZWFzb24gKSB7XG5cdFx0XHRpZiAoIHRoaXMuX19sb2Nrc1tyZWFzb25dID09IDAgKVxuXHRcdFx0XHRjb25zb2xlLmVycm9yKFwiUmVsZWFzZSBtb3JlIHRoYW4gbG9ja2luZyAhXCIsIHJlYXNvbik7XG5cdFx0XHR0aGlzLl9fbG9ja3NbcmVhc29uXSA9IHRoaXMuX19sb2Nrc1tyZWFzb25dIHx8IDA7XG5cdFx0XHR0aGlzLl9fbG9ja3NbcmVhc29uXS0tO1xuXHRcdH1cblx0XHRcblx0XHRpZiAoICFyZWFzb24gJiYgdGhpcy5fX2xvY2tzLmFsbCA9PSAwIClcblx0XHRcdGNvbnNvbGUuZXJyb3IoXCJSZWxlYXNlIG1vcmUgdGhhbiBsb2NraW5nICFcIik7XG5cdFx0XG5cdFx0aWYgKCAhLS10aGlzLl9fbG9ja3MuYWxsICYmIHRoaXMuaXNDb21wbGV0ZSgpICkge1xuXHRcdFx0bGV0IHByb3BhZyAgID0gdGhpcy5zaG91bGRQcm9wYWcodGhpcy5kYXRhKTtcblx0XHRcdHRoaXMuX3N0YWJsZSA9IHRydWU7XG5cdFx0XHRwcm9wYWcgJiYgdGhpcy5fcmV2Kys7Ly9cblx0XHRcdGlmICggcHJvcGFnICYmIHRoaXMuX2ZvbGxvd2Vycy5sZW5ndGggKVxuXHRcdFx0XHR0aGlzLl9mb2xsb3dlcnMuZm9yRWFjaChmdW5jdGlvbiBwcm9wYWcoIGZvbGxvd2VyICkge1xuXHRcdFx0XHRcdGxldCBkYXRhID0gZm9sbG93ZXJbMl0gPyBtZS5yZXRyaWV2ZShmb2xsb3dlclsyXSkgOiBtZS5kYXRhO1xuXHRcdFx0XHRcdC8vaWYgKCAhZGF0YSApIHJldHVybjtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHRpZiAoIHR5cGVvZiBmb2xsb3dlclswXSA9PSBcImZ1bmN0aW9uXCIgKSB7XG5cdFx0XHRcdFx0XHRmb2xsb3dlclswXShkYXRhKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0XHQvL2NiICYmIGkrKztcblx0XHRcdFx0XHRcdGZvbGxvd2VyWzBdLnNldFN0YXRlKFxuXHRcdFx0XHRcdFx0XHQoZm9sbG93ZXJbMV0pID8geyBbZm9sbG93ZXJbMV1dOiBkYXRhIH1cblx0XHRcdFx0XHRcdFx0ICAgICAgICAgICAgICA6IGRhdGFcblx0XHRcdFx0XHRcdFx0Ly8sXG5cdFx0XHRcdFx0XHRcdC8vY2IgJiYgKFxuXHRcdFx0XHRcdFx0XHQvLyAgICAoKSA9PiAoISgtLWkpICYmIGNiKCkpXG5cdFx0XHRcdFx0XHRcdC8vKVxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0Ly9lbHNlXG5cdFx0XHQhd2FzU3RhYmxlICYmIHRoaXMuZW1pdCgnc3RhYmxlJywgdGhpcy5kYXRhKTtcblx0XHRcdHByb3BhZyAmJiB0aGlzLmVtaXQoJ3VwZGF0ZScsIHRoaXMuZGF0YSk7XG5cdFx0XHRjYiAmJiBjYigpXG5cdFx0fVxuXHRcdGVsc2UgY2IgJiYgdGhpcy50aGVuKGNiKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXHRcblx0cHJvcGFnKCBkYXRhICkge1xuXHRcdHRoaXMuZW1pdCgndXBkYXRlJywgZGF0YSk7XG5cdH1cblx0XG5cdHJldGFpbiggcmVhc29uICkge1xuXHRcdHRoaXMuX19yZXRhaW5zLmFsbCsrO1xuXHRcdGlmICggcmVhc29uICkge1xuXHRcdFx0dGhpcy5fX3JldGFpbnNbcmVhc29uXSA9IHRoaXMuX19yZXRhaW5zW3JlYXNvbl0gfHwgMDtcblx0XHRcdHRoaXMuX19yZXRhaW5zW3JlYXNvbl0rKztcblx0XHR9XG5cdH1cblx0XG5cdGRpc3Bvc2UoIHJlYXNvbiApIHtcblx0XHQvL2NvbnNvbGUud2FybihcImRpc3Bvc2VcIiwgcmVhc29uLCB0aGlzLl9fcmV0YWlucyk7XG5cdFx0aWYgKCByZWFzb24gKSB7XG5cdFx0XHRpZiAoICF0aGlzLl9fcmV0YWluc1tyZWFzb25dIClcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiUlMgOiBEaXNwb3NlIG1vcmUgdGhhbiByZXRhaW5pbmcgb24gc3RvcmUgJ1wiICsgdGhpcy5uYW1lICsgXCInIDogXCIgKyByZWFzb24pO1xuXHRcdFx0XG5cdFx0XHR0aGlzLl9fcmV0YWluc1tyZWFzb25dLS07XG5cdFx0fVxuXHRcdGlmICggdGhpcy5fX3JldGFpbnMuYWxsID09IDAgKVxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiUlMgOiBEaXNwb3NlIG1vcmUgdGhhbiByZXRhaW5pbmcgb24gc3RvcmUgXCIgKyB0aGlzLm5hbWUpO1xuXHRcdFxuXHRcdHRoaXMuX19yZXRhaW5zLmFsbC0tO1xuXHRcdFxuXHRcdGlmICggIXRoaXMuX19yZXRhaW5zLmFsbCApIHtcblx0XHRcdGlmICggdGhpcy5fcGVyc2lzdGVuY2VUbSApIHtcblx0XHRcdFx0dGhpcy5fZGVzdHJveVRNICYmIGNsZWFyVGltZW91dCh0aGlzLl9kZXN0cm95VE0pO1xuXHRcdFx0XHR0aGlzLl9kZXN0cm95VE0gPSBzZXRUaW1lb3V0KFxuXHRcdFx0XHRcdGUgPT4ge1xuXHRcdFx0XHRcdFx0dGhpcy5fZGVzdHJveVRNID0gbnVsbDtcblx0XHRcdFx0XHRcdC8vdGhpcy50aGVuKHMgPT4ge1xuXHRcdFx0XHRcdFx0IXRoaXMuX19yZXRhaW5zLmFsbCAmJiAhdGhpcy5kZWFkICYmIHRoaXMuZGVzdHJveSgpXG5cdFx0XHRcdFx0XHQvL30pO1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0dGhpcy5fcGVyc2lzdGVuY2VUbVxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdC8vdGhpcy50aGVuKHMgPT5cblx0XHRcdFx0KCF0aGlzLl9fcmV0YWlucy5hbGwgJiYgIXRoaXMuZGVhZCAmJiB0aGlzLmRlc3Ryb3koKSlcblx0XHRcdFx0Ly8pO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRcblx0ZGVzdHJveSgpIHtcblx0XHQvLyAgY29uc29sZS5sb2coXCJkZXN0cm95XCIsIHRoaXMuX3VpZCk7XG5cdFx0XG5cdFx0dGhpcy5lbWl0KCdkZXN0cm95JywgdGhpcyk7XG5cdFx0aWYgKCB0aGlzLl9zdGFiaWxpemVyIClcblx0XHRcdGNsZWFyVGltZW91dCh0aGlzLl9zdGFiaWxpemVyKTtcblx0XHRcblx0XHRpZiAoIHRoaXMuX2ZvbGxvd2Vycy5sZW5ndGggKVxuXHRcdFx0dGhpcy5fZm9sbG93ZXJzLmZvckVhY2goXG5cdFx0XHRcdCggZm9sbG93ZXIgKSA9PiB7XG5cdFx0XHRcdFx0aWYgKCB0eXBlb2YgZm9sbG93ZXJbMF0gIT09IFwiZnVuY3Rpb25cIiApIHtcblx0XHRcdFx0XHRcdGlmICggZm9sbG93ZXJbMF0uc3RvcmVzIClcblx0XHRcdFx0XHRcdFx0ZGVsZXRlIGZvbGxvd2VyWzBdLnN0b3Jlc1tmb2xsb3dlclsxXV07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHQpO1xuXHRcdHRoaXMuX2ZvbGxvd2Vycy5sZW5ndGggPSAwO1xuXHRcdHRoaXMuY29uc3RydWN0b3IuX3JldiAgPSB0aGlzLnJldjtcblx0XHR0aGlzLmRlYWQgICAgICAgICAgICAgID0gdHJ1ZTtcblx0XHR0aGlzLl9yZXZzICAgICAgICAgICAgID0gdGhpcy5kYXRhID0gdGhpcy5zdGF0ZSA9IHRoaXMuc2NvcGUgPSBudWxsO1xuXHRcdHRoaXMucmVtb3ZlQWxsTGlzdGVuZXJzKCk7XG5cdH1cbn1cblxuLyoqXG4gKiBnZXQgYSBzdGF0aWMgYWxpYXNlZCByZWZlcmVuY2Ugb2YgYSBzdG9yZVxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqIEByZXR1cm5zIHt7c3RvcmU6IFN0b3JlLCBuYW1lOiAqfX1cbiAqL1xuU3RvcmUuYXMgPSBmdW5jdGlvbiAoIG5hbWUgKSB7XG5cdHJldHVybiB7IHN0b3JlOiB0aGlzLCBuYW1lIH07XG59XG5cbi8qKlxuICogTWFwIGFsbCBuYW1lZCBzdG9yZXMgaW4ge2tleXN9IHRvIHRoZSB7b2JqZWN0fSdzIHN0YXRlXG4gKiBIb29rIGNvbXBvbmVudFdpbGxVbm1vdW50IChmb3IgcmVhY3QgY29tcCkgb3IgZGVzdHJveSB0byB1bkJpbmQgdGhlbSBhdXRvbWF0aWNhbGx5XG4gKiBAc3RhdGljXG4gKiBAcGFyYW0gb2JqZWN0IHtPYmplY3R9IHRhcmdldCBzdGF0ZSBhd2FyZSBvYmplY3QgKFJlYWN0LkNvbXBvbmVudHxTdG9yZXwuLi4pXG4gKiBAcGFyYW0ga2V5cyB7QXJyYXl9IEV4IDogW1wic2Vzc2lvblwiLCBcIm90aGVyU3RhdGljTmFtZWRTdG9yZTprZXlcIixcbiAqICAgICBzdG9yZS5hcygnYW5vdGhlcktleScpXVxuICovXG5TdG9yZS5tYXAgPSBmdW5jdGlvbiAoIGNTdG9yZSwga2V5cywgc2NvcGUsIG9yaWdpbiwgc2V0SW5pdGlhbCA9IGZhbHNlICkge1xuXHR2YXIgdGFyZ2V0UmV2cyAgICAgPSBjU3RvcmUuX3JldnMgfHwge307XG5cdHZhciB0YXJnZXRTY29wZSAgICA9IGNTdG9yZS5zdG9yZXMgfHwgKGNTdG9yZS5zdG9yZXMgPSB7fSk7XG5cdHZhciBpbml0aWFsT3V0cHV0cyA9IHt9O1xuXHRrZXlzICAgICAgICAgICAgICAgPSBpcy5hcnJheShrZXlzKSA/IFsuLi5rZXlzXSA6IFtrZXlzXTtcblx0XG5cdFxuXHRzY29wZSA9IHNjb3BlIHx8IFN0b3JlLnN0YXRpY1Njb3BlO1xuXHRcblx0a2V5cyA9IGtleXMuZmlsdGVyKFxuXHRcdC8vIEB0b2RvIDogdXNlIHF1ZXJ5IHJlZnNcblx0XHQvLyAoc3RvcmUpKFxcLnN0b3JlKSooXFxbKFxcKnwocHJvcHMpXFx3KykrKVxcXSk/KFxcOmFsaWFzKVxuXHRcdCgga2V5ICkgPT4ge1xuXHRcdFx0aWYgKCAha2V5ICkge1xuXHRcdFx0XHRjb25zb2xlLmVycm9yKFwiTm90IGEgbWFwcGFibGUgc3RvcmUgaXRlbSAnXCIgKyBrZXkgKyBcIicgaW4gXCIgKyBvcmlnaW4gKyAnICEhJyk7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdGxldCBuYW1lLFxuXHRcdFx0ICAgIGFsaWFzLFxuXHRcdFx0ICAgIHBhdGgsXG5cdFx0XHQgICAgc3RvcmUsIF9rZXk7XG5cdFx0XHRpZiAoIGtleS5zdG9yZSAmJiBrZXkubmFtZSApIHtcblx0XHRcdFx0YWxpYXMgPSBuYW1lID0ga2V5Lm5hbWU7XG5cdFx0XHRcdHN0b3JlID0ga2V5LnN0b3JlO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSBpZiAoIGlzLmZuKGtleSkgKSB7XG5cdFx0XHRcdG5hbWUgID0gYWxpYXMgPSBrZXkubmFtZSB8fCBrZXkuZGVmYXVsdE5hbWU7XG5cdFx0XHRcdHN0b3JlID0ga2V5O1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdF9rZXkgID0ga2V5Lm1hdGNoKC8oW15cXC5cXDpdKykoKD86XFwuW15cXC5cXDpdKykqKSg/OlxcOihbXlxcLlxcOl0rKSk/Lyk7XG5cdFx0XHRcdG5hbWUgID0gX2tleVsxXTtcblx0XHRcdFx0cGF0aCAgPSBfa2V5WzJdICYmIF9rZXlbMl0uc3Vic3RyKDEpO1xuXHRcdFx0XHRzdG9yZSA9IHNjb3BlLnN0b3Jlc1tfa2V5WzFdXTtcblx0XHRcdFx0YWxpYXMgPSBfa2V5WzNdIHx8IHBhdGggJiYgcGF0aC5tYXRjaCgvKFteXFwuXSopJC8pWzBdIHx8IF9rZXlbMV07XG5cdFx0XHR9XG5cdFx0XHRpZiAoICFzdG9yZSApIHtcblx0XHRcdFx0bGV0IGkgPSBbXTtcblx0XHRcdFx0Zm9yICggdmFyIG8gaW4gc2NvcGUuc3RvcmVzIClcblx0XHRcdFx0XHRpLnB1c2gobylcblx0XHRcdFx0Y29uc29sZS5lcnJvcihcIk5vdCBhIG1hcHBhYmxlIHN0b3JlIGl0ZW0gJ1wiICsgbmFtZSArIFwiL1wiICsgYWxpYXMgKyBcIicgaW4gXCIgKyAoY1N0b3JlLm5hbWUgfHwgY1N0b3JlKSArICcgISEnLCBzdG9yZSwgX2tleSwgc2NvcGUuc3RvcmVzLCBpKTtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCBpcy5yc1Njb3BlQ2xhc3Moc3RvcmUpICkgc2NvcGUuX21vdW50KG5hbWUpO1xuXHRcdFx0aWYgKCBpcy5yc1Njb3BlKHN0b3JlKSApIHtcblx0XHRcdFx0c3RvcmUgPSBzY29wZS5fbW91bnQoa2V5KTtcblx0XHRcdH1cblx0XHRcdGVsc2UgaWYgKCB0YXJnZXRSZXZzW25hbWVdICkgcmV0dXJuIGZhbHNlOy8vIGlnbm9yZSBkYmwgdXNlcyBmb3Igbm93XG5cdFx0XHRcblx0XHRcdFxuXHRcdFx0aWYgKCBpcy5mbihzdG9yZSkgKSB7XG5cdFx0XHRcdHNjb3BlLl9tb3VudChuYW1lKVxuXHRcdFx0XHRzY29wZS5zdG9yZXNbbmFtZV0uYmluZChjU3RvcmUsIGFsaWFzLCBzZXRJbml0aWFsLCBwYXRoKTtcblx0XHRcdH1cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHRzdG9yZS5iaW5kKGNTdG9yZSwgYWxpYXMsIHNldEluaXRpYWwsIHBhdGgpO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHQvLyBnaXZlIGluaXRpYWwgc3RvcmUgd2VpZ2h0IGJhc2luZyBzb3VyY2VzXG5cdFx0XHRzY29wZS5zdG9yZXNbbmFtZV0uX3NvdXJjZXMgJiYgY1N0b3JlLl9zb3VyY2VzLnB1c2goLi4uc2NvcGUuc3RvcmVzW25hbWVdLl9zb3VyY2VzKTtcblx0XHRcdFxuXHRcdFx0dGFyZ2V0UmV2c1thbGlhc10gPSB0YXJnZXRSZXZzW2FsaWFzXSB8fCB0cnVlO1xuXHRcdFx0IXRhcmdldFNjb3BlW25hbWVdICYmICh0YXJnZXRTY29wZVtuYW1lXSA9IHNjb3BlLnN0b3Jlc1tuYW1lXSk7XG5cdFx0XHRpZiAoIHNjb3BlLnN0b3Jlc1tuYW1lXS5oYXNPd25Qcm9wZXJ0eSgnZGF0YScpIClcblx0XHRcdFx0aW5pdGlhbE91dHB1dHNbbmFtZV0gPSBzY29wZS5kYXRhW25hbWVdO1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHQpO1xuXHRcblx0Ly8gLi4uIEB0b2RvXG5cdGNTdG9yZS5vbmNlKCdkZXN0cm95JywgKCAuLi5hcmd6ICkgPT4ge1xuXHRcdGtleXMubWFwKFxuXHRcdFx0KCBrZXkgKSA9PiB7XG5cdFx0XHRcdGxldCBuYW1lLFxuXHRcdFx0XHQgICAgYWxpYXMsIHBhdGgsXG5cdFx0XHRcdCAgICBzdG9yZTtcblx0XHRcdFx0aWYgKCBrZXkuc3RvcmUgJiYga2V5Lm5hbWUgKSB7XG5cdFx0XHRcdFx0YWxpYXMgPSBuYW1lID0ga2V5Lm5hbWU7XG5cdFx0XHRcdFx0c3RvcmUgPSBrZXkuc3RvcmU7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZSBpZiAoIGlzLmZuKGtleSkgKSB7XG5cdFx0XHRcdFx0bmFtZSAgPSBhbGlhcyA9IGtleS5uYW1lIHx8IGtleS5kZWZhdWx0TmFtZTtcblx0XHRcdFx0XHRzdG9yZSA9IHNjb3BlLnN0b3Jlc1tuYW1lXTtcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHRrZXkgICA9IGtleS5tYXRjaCgvKFteXFwuXFw6XSspKCg/OlxcLlteXFwuXFw6XSspKikoPzpcXDooW15cXC5cXDpdKykpPy8pO1xuXHRcdFx0XHRcdG5hbWUgID0ga2V5WzFdO1xuXHRcdFx0XHRcdHBhdGggID0ga2V5WzJdICYmIGtleVsyXS5zdWJzdHIoMSk7XG5cdFx0XHRcdFx0c3RvcmUgPSBzY29wZS5zdG9yZXNba2V5WzFdXTtcblx0XHRcdFx0XHRhbGlhcyA9IGtleVszXSB8fCBwYXRoICYmIHBhdGgubWF0Y2goLyhbXlxcLl0qKSQvKVswXSB8fCBrZXlbMV07XG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHRcdHN0b3JlICYmICFpcy5mbihzdG9yZSkgJiYgc3RvcmUudW5CaW5kKGNTdG9yZSwgYWxpYXMsIHBhdGgpXG5cdFx0XHR9XG5cdFx0KTtcblx0fSlcblx0XG5cdHJldHVybiBpbml0aWFsT3V0cHV0cztcbn07XG5cblxuaXMucnNTdG9yZSAgICAgID0gZnVuY3Rpb24gKCBvYmogKSB7XG5cdHJldHVybiBvYmogaW5zdGFuY2VvZiBTdG9yZVxufVxuaXMucnNTdG9yZUNsYXNzID0gZnVuY3Rpb24gKCBvYmogKSB7XG5cdHJldHVybiBTdG9yZS5pc1Byb3RvdHlwZU9mKG9iaikgfHwgb2JqID09PSBTdG9yZVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdG9yZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvU3RvcmUuanMiLCIvKlxuICogQ29weXJpZ2h0IChjKSAgMjAxOCBXaXNlIFdpbGQgV2ViIC5cbiAqXG4gKiAgTUlUIExpY2Vuc2VcbiAqXG4gKiAgUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqICBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiAgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuICogIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqICBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqICBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqICBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiAgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqICBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuICogIFNPRlRXQVJFLlxuICpcbiAqIEBhdXRob3IgOiBOYXRoYW5hZWwgQnJhdW5cbiAqIEBjb250YWN0IDogY2FpcGlsYWJzQGdtYWlsLmNvbVxuICovXG5cbi8vaW1wb3J0IGluZGV4IGZyb20gXCIuL2luZGV4XCI7Ly8gd2lsbCB1c2UgYXMgZXh0ZXJuYWwgdGhlIGluZGV4IGluIGRpc3RcbmltcG9ydCBpcyBmcm9tIFwiaXNcIjtcblxuLyoqXG4gKiBNaW5pbWFsIHB1c2ggc2VxdWVuY2VyLCBhcHBseSBzdG9yZXMgc3BlY2lmaWMgdGFzayBpbiB0aGUgcmlnaHQgb3JkZXIgKHJvb3Qgc3RvcmVzXG4gKiBmaXJzdClcbiAqL1xubGV0IHRhc2tRdWV1ZSAgICAgID0gW10sXG4gICAgY3VyV2VpZ2h0ICAgICAgPSAwLFxuICAgIG1heFdlaWdodCAgICAgID0gMCxcbiAgICBtaW5XZWlnaHQgICAgICA9IDAsXG4gICAgdGFza0NvdW50ICAgICAgPSAwLFxuICAgIGRlU3luYyAgICAgICAgID0gZmFsc2UsXG4gICAgZGVTeW5jTWF4VGFza3MgPSAxMCxcbiAgICB0YXNrLFxuICAgIGlzUnVubmluZyxcbiAgICBlcnJvckNhdGNoZXIgICA9IHtcbiAgICAgICAgbGFzdEVycm9yOiBudWxsLFxuICAgICAgICBkaXNwYXRjaCA6IGZ1bmN0aW9uICggZXJyb3IgKSB7XG4gICAgICAgICAgICBlcnJvckNhdGNoZXIuZGlzYWJsZSgpO1xuICAgICAgICAgICAgaWYgKCB0YXNrICYmIHRhc2tbIDAgXS5oYW5kbGVFcnJvciApIHtcbiAgICAgICAgICAgICAgICB0YXNrWyAwIF0uaGFuZGxlRXJyb3IoZXJyb3IsIHRhc2spO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoIHRhc2sgKVxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJSZVNjb3BlIDogQW4gYXBwbHkgdGFzayBoYXMgZmFpbGVkICEhXCIsIHRhc2tbIDEgXSwgXCIgb24gXCIsIHRhc2tbIDAgXS5uYW1lIHx8IHRhc2tbIDAgXS5jb25zdHJ1Y3Rvci5uYW1lKVxuICAgICAgICBcbiAgICAgICAgICAgIGlzUnVubmluZyA9IGZhbHNlO1xuICAgICAgICAgICAgdGFzayAgICAgID0gbnVsbDtcbiAgICAgICAgICAgIHJ1bk5vdygpO1xuICAgICAgICB9LFxuICAgICAgICBlbmFibGUgICA6ICggdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgKVxuICAgICAgICAgICAgICAgICAgID8gKCkgPT4ge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIGVycm9yQ2F0Y2hlci5kaXNwYXRjaClcbiAgICAgICAgICAgIH0gOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgcHJvY2Vzcy5vbigndW5jYXVnaHRFeGNlcHRpb24nLCBlcnJvckNhdGNoZXIuZGlzcGF0Y2gpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgZGlzYWJsZSAgOiAoIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnIClcbiAgICAgICAgICAgICAgICAgICA/ICgpID0+IHtcbiAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignZXJyb3InLCBlcnJvckNhdGNoZXIuZGlzcGF0Y2gpXG4gICAgICAgICAgICB9IDogKCkgPT4ge1xuICAgICAgICAgICAgICAgIHByb2Nlc3MucmVtb3ZlTGlzdGVuZXIoJ3VuY2F1Z2h0RXhjZXB0aW9uJywgZXJyb3JDYXRjaGVyLmRpc3BhdGNoKTtcbiAgICAgICAgICAgIH1cbiAgICB9XG47XG5cbmZ1bmN0aW9uIHJ1bk5vdygpIHtcbiAgICBpZiAoICFpc1J1bm5pbmcgKSB7XG4gICAgICAgIHJ1bigpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gcnVuKCkge1xuICAgIGxldCBmcm9tICA9IERhdGUubm93KCk7XG4gICAgaXNSdW5uaW5nID0gdHJ1ZTtcbiAgICBlcnJvckNhdGNoZXIuZW5hYmxlKCk7XG4gICAgd2hpbGUgKCB0YXNrQ291bnQgKSB7XG4gICAgICAgIFxuICAgICAgICAvLyB0cnkgZm9yIHRoZSBjdXJyZW50IHdlaWdodFxuICAgICAgICB3aGlsZSAoICEoIHRhc2tRdWV1ZVsgY3VyV2VpZ2h0IF0gJiYgdGFza1F1ZXVlWyBjdXJXZWlnaHQgXS5sZW5ndGggKSApXG4gICAgICAgICAgICBjdXJXZWlnaHQrKztcbiAgICAgICAgXG4gICAgICAgIHRhc2tDb3VudC0tO1xuICAgICAgICB0YXNrID0gdGFza1F1ZXVlWyBjdXJXZWlnaHQgXS5zaGlmdCgpO1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwiVGFzayA6IFwiLCB0YXNrWzFdLCBcIiBvbiBcIiwgdGFza1swXS5uYW1lKTtcbiAgICAgICAgdGFza1sgMCBdWyB0YXNrWyAxIF0gXS5hcHBseSh0YXNrWyAwIF0sIHRhc2tbIDIgXSk7XG4gICAgfVxuICAgIHRhc2sgPSB1bmRlZmluZWQ7XG4gICAgZXJyb3JDYXRjaGVyLmRpc2FibGUoKTtcbiAgICBcbiAgICBpc1J1bm5pbmcgPSBmYWxzZTtcbiAgICBpZiAoIHRhc2tDb3VudCApIHtcbiAgICAgICAgc2V0VGltZW91dChydW5Ob3cpO1xuICAgIH1cbn1cblxuLy9cbi8vaW5kZXguc2V0VGFza0RlU3luYyA9ICggbmIgKSA9PiB7XG4vLyAgICBpZiAoIG5iID09PSBmYWxzZSApXG4vLyAgICAgICAgcmV0dXJuIGRlU3luYyA9IGZhbHNlO1xuLy8gICAgZWxzZSBpZiAoIG5iID09PSB0cnVlICkge1xuLy8gICAgICAgIGRlU3luYyAgICAgICAgID0gdHJ1ZTtcbi8vICAgICAgICBkZVN5bmNNYXhUYXNrcyA9IDEwO1xuLy8gICAgfVxuLy8gICAgZWxzZSAoaXMuaW50KG5iKSlcbi8vICAgIHtcbi8vICAgICAgICBkZVN5bmMgICAgICAgICA9IHRydWU7XG4vLyAgICAgICAgZGVTeW5jTWF4VGFza3MgPSBuYjtcbi8vICAgIH1cbi8vfTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHB1c2hUYXNrKCBvYmosIGZuLCBhcmd6ICkge1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIG1vcmUgYSBzdG9yZSBoYXZlIHNvdXJjZXMsIHRoZSBtb3JlIGl0IHNob3VsZCBiZSBwcm9jZXNzZWQgZmlyc3RcbiAgICAgICAgICogU28gbGVhZnMgc3RvcmVzIHN0YXkgc3luYywgYW5kIHJvb3Qgc3RvcmVzIHJlY2VpdmUgbWVyZ2VkIHN0YXRlIHVwZGF0ZXM7XG4gICAgICAgICAqIGdsb2JhbCBzdGF0ZSBzdGF5IGNvaGVyZW50XG4gICAgICAgICAqXG4gICAgICAgICAqIFRoaXMgbWVhbiB3aGF0ZXZlciB0aGUgbnVtYmVyIG9mIHN0b3JlcyAmIHRoZSBjb21wbGV4aXR5IG9mIHRoZSBkZXBzLFxuICAgICAgICAgKiB1cGRhdGluZyBhIHN0b3JlIHN0YXRlIHdpbGwgdXBkYXRlIGl0cyBzeW5jaHJvbmUgY2hpbGQgc3RvcmVzIGltbWVkaWF0ZWx5XG4gICAgICAgICAqXG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBlIHsqfG51bWJlcn1cbiAgICAgICAgICovXG4gICAgICAgIGxldCB3ZWlnaHQgPSBvYmouX3NvdXJjZXMgJiYgb2JqLl9zb3VyY2VzLmxlbmd0aCB8fCAxLFxuICAgICAgICAgICAgc3RhY2sgID0gdGFza1F1ZXVlWyB3ZWlnaHQgXSA9XG4gICAgICAgICAgICAgICAgdGFza1F1ZXVlWyB3ZWlnaHQgXSB8fCBbXTtcbiAgICAgICAgXG4gICAgICAgIG1heFdlaWdodCA9IE1hdGgubWF4KG1heFdlaWdodCwgd2VpZ2h0KTtcbiAgICAgICAgY3VyV2VpZ2h0ID0gTWF0aC5taW4oY3VyV2VpZ2h0LCB3ZWlnaHQpO1xuICAgICAgICB0YXNrQ291bnQrKztcbiAgICAgICAgXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJQdXNoIFRhc2sgOiBcIiwgZm4sIFwiIG9uIFwiLCBvYmoubmFtZSwgd2VpZ2h0KTtcbiAgICAgICAgc3RhY2sucHVzaChbIG9iaiwgZm4sIGFyZ3ogXSk7XG4gICAgICAgIHNldFRpbWVvdXQocnVuTm93LCAwKTtcbiAgICAgICAgcmV0dXJuIHN0YWNrLmxlbmd0aDtcbiAgICB9XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlscy9UYXNrU2VxdWVuY2VyLmpzIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9wcm9jZXNzL2Jyb3dzZXIuanNcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpICAyMDE4IFdpc2UgV2lsZCBXZWIgLlxuICpcbiAqICBNSVQgTGljZW5zZVxuICpcbiAqICBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiAgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqICB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiAgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiAgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiAgVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG4gKiAgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqICBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG4gKiAgU09GVFdBUkUuXG4gKlxuICogQGF1dGhvciA6IE5hdGhhbmFlbCBCcmF1blxuICogQGNvbnRhY3QgOiBjYWlwaWxhYnNAZ21haWwuY29tXG4gKi9cblxuaW1wb3J0IGlzICAgIGZyb20gJ2lzJ1xuXG5jb25zdCBTaW1wbGVPYmplY3RQcm90byA9ICgge30gKS5jb25zdHJ1Y3RvcjtcblxubGV0IHNjb3BhYmxlcyA9IFtdO1xuXG5mdW5jdGlvbiBhZGRTY29wYWJsZVR5cGUoIHRlc3QsIGhhbmRsZSwgbWVtYmVyID0gZmFsc2UsIHN0YXRlU2NvcGUgPSBmYWxzZSApIHtcbiAgICBzY29wYWJsZXMucHVzaChcbiAgICAgICAge1xuICAgICAgICAgICAgdGVzdCxcbiAgICAgICAgICAgIG1lbWJlcixcbiAgICAgICAgICAgIHN0YXRlU2NvcGUsXG4gICAgICAgICAgICBoYW5kbGVcbiAgICAgICAgfVxuICAgIClcbn1cblxuLy9cbmZ1bmN0aW9uIGlzU2NvcGFibGVUeXBlKCBDb21wLCBtZW1iZXIsIHN0YXRlU2NvcGUgKSB7XG4gICAgXG4gICAgZm9yICggbGV0IGkgPSAwOyBpIDwgc2NvcGFibGVzLmxlbmd0aDsgaSsrIClcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgKCBtZW1iZXIgPT09IHVuZGVmaW5lZCB8fCBtZW1iZXIgPT0gc2NvcGFibGVzWyBpIF0ubWVtYmVyIClcbiAgICAgICAgICAgICYmIHN0YXRlU2NvcGUgPT0gc2NvcGFibGVzWyBpIF0uc3RhdGVTY29wZVxuICAgICAgICAgICAgJiYgc2NvcGFibGVzWyBpIF0udGVzdChDb21wKVxuICAgICAgICApXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICBcbiAgICByZXR1cm4gZmFsc2U7XG4gICAgXG59XG5cbmZ1bmN0aW9uIGFwcGx5U2NvcGFibGVUeXBlKCBDb21wLCBhcmd6LCBtZW1iZXIsIHN0YXRlU2NvcGUgKSB7XG4gICAgXG4gICAgZm9yICggbGV0IGkgPSAwOyBpIDwgc2NvcGFibGVzLmxlbmd0aDsgaSsrIClcbiAgICAgICAgaWYgKCBtZW1iZXIgPT0gc2NvcGFibGVzWyBpIF0ubWVtYmVyICYmIHN0YXRlU2NvcGUgPT0gc2NvcGFibGVzWyBpIF0uc3RhdGVTY29wZSAmJiBzY29wYWJsZXNbIGkgXS50ZXN0KENvbXApIClcbiAgICAgICAgICAgIHJldHVybiBzY29wYWJsZXNbIGkgXS5oYW5kbGUoQ29tcCwgLi4uYXJneik7XG4gICAgXG4gICAgY29uc29sZS53YXJuKFwicmVTY29wZSA6IFVua25vd24gdHlwZVwiLCBDb21wKVxuICAgIFxuICAgIHJldHVybiBmYWxzZTtcbiAgICBcbn1cblxuZnVuY3Rpb24gcmVTY29wZSggLi4uYXJneiApIHtcbiAgICAvLyBhcmUgd2UgZGVjb3JhdGluZyBhIG1lbWJlciAvIHdpdGhvdXQgYXJnelxuICAgIGlmICggYXJnelsgMCBdIGluc3RhbmNlb2YgU2ltcGxlT2JqZWN0UHJvdG8gJiYgYXJnelsgMiBdIGluc3RhbmNlb2YgU2ltcGxlT2JqZWN0UHJvdG8gJiYgYXJnelsgMCBdLmhhc093blByb3BlcnR5KGFyZ3pbIDEgXSkgKSB7XG4gICAgICAgIGFyZ3pbIDIgXS52YWx1ZSA9IGFwcGx5U2NvcGFibGVUeXBlKGFyZ3pbIDAgXSwgW10sIHRydWUsIGZhbHNlKTtcbiAgICAgICAgcmV0dXJuIGFyZ3pbIDAgXTtcbiAgICB9XG4gICAgZWxzZSBpZiAoICFpc1Njb3BhYmxlVHlwZShhcmd6WyAwIF0sIHVuZGVmaW5lZCwgZmFsc2UpICkge1xuICAgICAgICByZXR1cm4gKCAuLi5hcmd6MiApID0+IHtcbiAgICAgICAgICAgIC8vIGFyZSB3ZSBkZWNvcmF0aW5nIGEgbWVtYmVyIC8gd2l0aCBhcmd6XG4gICAgICAgICAgICBpZiAoIGFyZ3oyWyAwIF0gaW5zdGFuY2VvZiBTaW1wbGVPYmplY3RQcm90byAmJiBhcmd6MlsgMiBdIGluc3RhbmNlb2YgU2ltcGxlT2JqZWN0UHJvdG8gJiYgYXJnejJbIDAgXS5oYXNPd25Qcm9wZXJ0eShhcmd6MlsgMSBdKSApIHtcbiAgICAgICAgICAgICAgICBhcmd6MlsgMiBdLnZhbHVlID0gYXBwbHlTY29wYWJsZVR5cGUoYXJnejJbIDAgXSwgYXJneiwgdHJ1ZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIHJldHVybiBhcmd6MlsgMCBdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHJldHVybiByZVNjb3BlKGFyZ3oyWyAwIF0sIC4uLmFyZ3opO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBhcHBseVNjb3BhYmxlVHlwZShhcmd6WyAwIF0sIGFyZ3ouc2xpY2UoMSksIGZhbHNlLCBmYWxzZSk7XG59XG5cbmZ1bmN0aW9uIHNjb3BlVG9TdGF0ZSggLi4uYXJneiApIHtcbiAgICAvLyBhcmUgd2UgZGVjb3JhdGluZyBhIG1lbWJlciAvIHdpdGhvdXQgYXJnelxuICAgIGlmICggYXJnelsgMCBdIGluc3RhbmNlb2YgU2ltcGxlT2JqZWN0UHJvdG8gJiYgYXJnelsgMiBdIGluc3RhbmNlb2YgU2ltcGxlT2JqZWN0UHJvdG8gJiYgYXJnelsgMCBdLmhhc093blByb3BlcnR5KGFyZ3pbIDEgXSkgKSB7XG4gICAgICAgIGFyZ3pbIDIgXS52YWx1ZSA9IGFwcGx5U2NvcGFibGVUeXBlKGFyZ3pbIDAgXSwgW10sIHRydWUsIHRydWUpO1xuICAgICAgICByZXR1cm4gYXJnelsgMCBdO1xuICAgIH1cbiAgICBlbHNlIGlmICggIWlzU2NvcGFibGVUeXBlKGFyZ3pbIDAgXSwgdW5kZWZpbmVkLCB0cnVlKSApIHtcbiAgICAgICAgcmV0dXJuICggLi4uYXJnejIgKSA9PiB7XG4gICAgICAgICAgICAvLyBhcmUgd2UgZGVjb3JhdGluZyBhIG1lbWJlciAvIHdpdGggYXJnelxuICAgICAgICAgICAgaWYgKCBhcmd6MlsgMCBdIGluc3RhbmNlb2YgU2ltcGxlT2JqZWN0UHJvdG8gJiYgYXJnejJbIDIgXSBpbnN0YW5jZW9mIFNpbXBsZU9iamVjdFByb3RvICYmIGFyZ3oyWyAwIF0uaGFzT3duUHJvcGVydHkoYXJnejJbIDEgXSkgKSB7XG4gICAgICAgICAgICAgICAgYXJnejJbIDIgXS52YWx1ZSA9IGFwcGx5U2NvcGFibGVUeXBlKGFyZ3oyWyAwIF0sIGFyZ3osIHRydWUsIHRydWUpO1xuICAgICAgICAgICAgICAgIHJldHVybiBhcmd6MlsgMCBdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHJldHVybiBzY29wZVRvU3RhdGUoYXJnejJbIDAgXSwgLi4uYXJneik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGFwcGx5U2NvcGFibGVUeXBlKGFyZ3pbIDAgXSwgYXJnei5zbGljZSgxKSwgZmFsc2UsIHRydWUpO1xufVxuXG4vL1xuLy9hZGRTY29wYWJsZVR5cGUoXG4vLyAgICAoIENvbXAgKSA9PiAoQ29tcCAmJiBDb21wLnByb3RvdHlwZSBpbnN0YW5jZW9mIFN0b3JlKSxcbi8vICAgIGZ1bmN0aW9uIHJlU2NvcGUoIC4uLmFyZ3ogKSB7XG4vLyAgICAgICAgbGV0IEJhc2VTdG9yZSAgICA9ICghYXJnelswXSB8fCBhcmd6WzBdLnByb3RvdHlwZSBpbnN0YW5jZW9mIFN0b3JlKSAmJlxuLy8gYXJnei5zaGlmdCgpLCBzY29wZSAgICAgICAgPSAoIWFyZ3pbMF0gfHwgYXJnelswXSBpbnN0YW5jZW9mIFNjb3BlIHx8IGlzLmZuKGFyZ3pbMF0pKVxuLy8gJiYgYXJnei5zaGlmdCgpLCB1c2UgICAgICAgICAgPSAoaXMuYXJyYXkoYXJnelswXSkpICYmIGFyZ3ouc2hpZnQoKSwgc3RhdGVNYXAgICAgID1cbi8vICF1c2UgJiYgKCFhcmd6WzBdIHx8IGFyZ3pbMF0gaW5zdGFuY2VvZiBTaW1wbGVPYmplY3RQcm90bykgJiYgYXJnei5zaGlmdCgpLFxuLy8gaW5pdGlhbFN0YXRlID0ge307ICBsZXQgY29tcE5hbWUgPSBCYXNlU3RvcmUuZGlzcGxheU5hbWUgfHwgQmFzZVN0b3JlLm5hbWU7ICB1c2UgPVxuLy8gWy4uLihCYXNlU3RvcmUudXNlIHx8IFtdKSwgLi4uKHVzZSB8fCBbXSldOyBzdGF0ZU1hcCAmJlxuLy8gU2NvcGUuc3RhdGVNYXBUb1JlZkxpc3Qoc3RhdGVNYXAsIGluaXRpYWxTdGF0ZSwgdXNlKTsgIGNsYXNzIFN0YXRlU2NvcGVkU3RvcmUgZXh0ZW5kc1xuLy8gQmFzZVN0b3JlIHsgc3RhdGljIHVzZSAgICAgICAgID0gdXNlOyBzdGF0aWMgZGlzcGxheU5hbWUgPSBcInN0YXRlU2NvcGVkKFwiICsgY29tcE5hbWUgK1xuLy8gXCIpXCI7ICBjb25zdHJ1Y3RvciggLi4uYXJneiApIHsgc3VwZXIoc2NvcGUsIGFyZ3ouc2xpY2UoYXJnelswXSBpbnN0YW5jZW9mIFNjb3BlID8gMSA6XG4vLyAwKSkgfSB9ICByZXR1cm4gU3RhdGVTY29wZWRTdG9yZTsgfSwgZmFsc2UsIHRydWUgKVxuXG5cbmV4cG9ydCB7XG4gICAgYWRkU2NvcGFibGVUeXBlLFxuICAgIHJlU2NvcGUsXG4gICAgc2NvcGVUb1N0YXRlXG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlscy9zY29wYWJsZS5qcyJdLCJzb3VyY2VSb290IjoiIn0=