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
						//output[id]           = store.data;
						updated = true;
	
						storesRevMap[id].refs.forEach(function (ref) {
							//console.warn("update ref ", ref.ref,
							// this.retrieve(ref.path));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNTU5OTc4ZDFkYTI5NmQwYzFiMDQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9TY29wZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvaXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9pcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL0VtaXR0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9zaG9ydGlkL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vc2hvcnRpZC9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9zaG9ydGlkL2xpYi9hbHBoYWJldC5qcyIsIndlYnBhY2s6Ly8vLi9+L3Nob3J0aWQvbGliL3JhbmRvbS9yYW5kb20tZnJvbS1zZWVkLmpzIiwid2VicGFjazovLy8uL34vc2hvcnRpZC9saWIvZW5jb2RlLmpzIiwid2VicGFjazovLy8uL34vc2hvcnRpZC9saWIvcmFuZG9tL3JhbmRvbS1ieXRlLWJyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9zaG9ydGlkL2xpYi9kZWNvZGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9zaG9ydGlkL2xpYi9idWlsZC5qcyIsIndlYnBhY2s6Ly8vLi9+L3Nob3J0aWQvbGliL2lzLXZhbGlkLmpzIiwid2VicGFjazovLy8uL34vc2hvcnRpZC9saWIvdXRpbC9jbHVzdGVyLXdvcmtlci1pZC1icm93c2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9TdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvVGFza1NlcXVlbmNlci5qcyIsIndlYnBhY2s6Ly8vLi9+L3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvc2NvcGFibGUuanMiXSwibmFtZXMiOlsiJGdsb2JhbCIsIndpbmRvdyIsImdsb2JhbCIsIlJTIiwiX19fcmVzY29wZSIsImNvbnNvbGUiLCJ3YXJuIiwiU3RvcmUiLCJTY29wZSIsIkNvbnRleHQiLCJyZVNjb3BlIiwic2NvcGVUb1N0YXRlIiwicmVTY29wZVN0YXRlIiwiYWRkU2NvcGFibGVUeXBlIiwic2NvcGVSZWYiLCJtYXAiLCJrZXkiLCJyZXF1aXJlIiwid2Fsa25TZXQiLCJ3YWxrbkdldCIsImtleVdhbGtuU2V0Iiwia2V5V2Fsa25HZXQiLCJFdmVudEVtaXR0ZXIiLCJzaG9ydGlkIiwiX19wcm90b19fcHVzaCIsInRhcmdldCIsImlkIiwicGFyZW50IiwiZm4iLCJwcm90b3R5cGUiLCJfIiwib3BlblNjb3BlcyIsIlNpbXBsZU9iamVjdFByb3RvIiwiY29uc3RydWN0b3IiLCJzY29wZXMiLCJza2V5IiwiaXMiLCJhcnJheSIsInNvcnQiLCJhIiwiYiIsImZpcnN0bmFtZSIsImpvaW4iLCJzbSIsInN0YXRlIiwiX3JlZnMiLCJhY3Rpb25zIiwicGF0aCIsImFwcGxpZXIiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsImNwYXRoIiwicHVzaCIsIkZ1bmN0aW9uIiwiYXMiLCJzdG9yZXNNYXAiLCJ1cHBlclNjb3BlIiwic25hcHNob3QiLCJkYXRhIiwiaW5jcmVtZW50SWQiLCJwZXJzaXN0ZW5jZVRtIiwiYXV0b0Rlc3Ryb3kiLCJyb290RW1pdHRlciIsImJvdW5kZWRBY3Rpb25zIiwia2V5UElEIiwiX2lkIiwiZ2VuZXJhdGUiLCJiYXNlSWQiLCJrZXlJbmRleCIsImlzTG9jYWxJZCIsInJlZ2lzdGVyIiwiaSIsIl9yZXYiLCJzdG9yZXMiLCJfYXV0b0Rlc3Ryb3kiLCJkZWFkIiwiRXJyb3IiLCJzb3VyY2VzIiwiY2hpbGRTY29wZXMiLCJjaGlsZFNjb3Blc0xpc3QiLCJ1blN0YWJsZUNoaWxkcyIsInNlZW5DaGlsZHMiLCJfX3JldGFpbnMiLCJhbGwiLCJfX2xvY2tzIiwiX2JvdW5kZWRBY3Rpb25zIiwidGVzdCIsImluY2x1ZGVzIiwiYmluZCIsIl9saXN0ZW5pbmciLCJfc2NvcGUiLCJfbWl4ZWQiLCJfbWl4ZWRMaXN0IiwiZm9sbG93ZXJzIiwicmV0YWluIiwiX3N0YWJsZSIsIndhaXQiLCJvbiIsIl9wYXJlbnRMaXN0IiwicmVsZWFzZSIsIl9wcm9wYWciLCJfYWRkQ2hpbGQiLCJyZXN0b3JlIiwic2V0VGltZW91dCIsImRpc3Bvc2UiLCJzdG9yZXNMaXN0IiwiX21vdW50IiwiayIsImFyZ3VtZW50cyIsInJlZiIsInNuYXAiLCJwYXJzZVJlZiIsInN0b3JlSWQiLCJyZWR1Y2VSaWdodCIsIm1vdW50ZWQiLCJjdHgiLCJzdG9yZSIsInRhc2tRdWV1ZSIsInJzU3RvcmVDbGFzcyIsIm5hbWUiLCJsZW5ndGgiLCJzaGlmdCIsInJzU2NvcGVDbGFzcyIsIiRwYXJlbnQiLCJtb3VudCIsInNsaWNlIiwicnNTdG9yZSIsInVuZGVmaW5lZCIsInNldFN0YXRlIiwiX3dhdGNoU3RvcmUiLCJpc1N0YWJsZSIsInByb3BhZyIsInRhcmdldEN0eCIsImxpc3RzIiwicmVsaW5rIiwiX19vcmlnaW4iLCJzaW5nbGV0b24iLCJzcmNDdHgiLCJleHRlcm5hbCIsImZvcmNlIiwibGN0eCIsImluZm8iLCJ0bXAiLCJkZXN0cm95IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwiZ2V0Iiwic2V0IiwidiIsImFjdGl2ZUFjdGlvbnMiLCJyc1Njb3BlIiwiYWN0IiwiaGFzT3duUHJvcGVydHkiLCJfX3RhcmdldFN0b3JlcyIsImRpc3BhdGNoIiwib2JqIiwic2V0SW5pdGlhbCIsInJldk1hcCIsImxhc3RSZXZzIiwicmVmS2V5cyIsInN0cmluZyIsInJlZHVjZSIsInJldnMiLCJyZXYiLCJyZWZzIiwicmV0YWluU3RvcmVzIiwiZ2V0VXBkYXRlcyIsImRpc3Bvc2VTdG9yZXMiLCJzcGxpY2UiLCJ0byIsInJlZkxpc3QiLCJtaXhlZENXVW5tb3VudCIsInVuTW91bnRLZXkiLCJpc1JlYWN0Q29tcG9uZW50IiwidW5CaW5kIiwiYWxpYXMiLCJyZXRyaWV2ZSIsInNwbGl0IiwicmV0cmlldmVTdG9yZSIsInN0b3Jlc1Jldk1hcCIsImxvY2FsIiwidXBkYXRlZCIsImdldFN0b3Jlc1JldnMiLCJvdXRwdXQiLCJfZ2V0UmV2TWFwIiwiY2hpbGRzIiwiX2dldEFsbENoaWxkcyIsImNmZyIsInBhcmVudEFsaWFzIiwic2lkIiwic2VyaWFsaXplX2V4IiwiZXhjbHVkZSIsIndpdGhDaGlsZHMiLCJ3aXRoUGFyZW50cyIsIndpdGhNaXhlZCIsIm5vcmVmcyIsImFsaWFzZXMiLCJzZXJpYWxpemUiLCJ3aXRoQ2hpbGQiLCJoIiwiYm9vbCIsInRha2VTbmFwc2hvdEJ5S2V5Iiwic3RhcnRzV2l0aCIsInN1YnN0ciIsImdldFNuYXBzaG90QnlLZXkiLCJkZWxldGVTbmFwc2hvdEJ5S2V5IiwicmVwbGFjZSIsInBTdGF0ZSIsIl9yZWYiLCJhY3Rpb24iLCJhcmd6Iiwic3RhY2siLCJiQWN0cyIsInRyaWdnZXIiLCJjYiIsIm9uY2UiLCJ0aGVuIiwib25jZVN0YWJsZVRyZWUiLCJyZWFzb24iLCJlbWl0IiwiZXJyb3IiLCJzdGFiaWxpemVyVE0iLCJjbGVhclRpbWVvdXQiLCJwcm9wYWdUTSIsInJlbWFwcyIsIndhc1N0YWJsZSIsImluZGV4T2YiLCJ1biIsImRlc3Ryb3lUTSIsInNjb3BlIiwicmVtb3ZlTGlzdGVuZXIiLCJmb2xsb3dlciIsIl9ybUNoaWxkIiwiaXNQcm90b3R5cGVPZiIsInZhbHVlIiwiaXNLZXkiLCJmaWx0ZXIiLCJFbWl0dGVyIiwiX2V2ZW50cyIsImV2dCIsIlRhc2tTZXF1ZW5jZXIiLCJvYmpQcm90byIsImdldFByb3RvdHlwZU9mIiwiX3N0YXRpYyIsImdldFNjb3BlIiwic3RhdGljU2NvcGUiLCJ3YXRjaHMiLCJ1c2UiLCJhcHBseSIsImluaXRpYWxTdGF0ZSIsImRlZmF1bHRTdGF0ZSIsImFwcGxpZWQiLCJfdWlkIiwiX29uU3RhYmlsaXplIiwiX3BlcnNpc3RlbmNlVG0iLCJfY2ZnIiwic2NvcGVPYmoiLCIkc2NvcGUiLCIkc3RvcmVzIiwiJGFjdGlvbnMiLCIkZGlzcGF0Y2giLCJfcmV2cyIsIl9yZXF1aXJlIiwiX3NvdXJjZXMiLCJfdXNlIiwibWF0Y2giLCJyZWYyIiwiX2ZvbGxvd2VycyIsIl9jaGFuZ2VzU1ciLCJfYWZ0ZXJDb25zdHJ1Y3RvciIsImluaXRpYWxEYXRhIiwic2hvdWxkQXBwbHkiLCJtYW5hZ2VkIiwibkRhdGFzIiwiciIsImNEYXRhcyIsImlzQ29tcGxldGUiLCJmb2xsb3ciLCJjYWxsIiwiY2hhbmdlcyIsInJlZmluZSIsIl9fcHJvdG9fXyIsIl9zdGFiaWxpemVyIiwicHVzaFRhc2siLCJucyIsImRvV2FpdCIsIm9yaWdpbiIsImluaXRpYWxPdXRwdXRzIiwicyIsImhhc0RhdGFDaGFuZ2UiLCJzdGFibGUiLCJuZXh0U3RhdGUiLCJfbmV4dFN0YXRlIiwibmV4dERhdGEiLCJzeW5jIiwiY2hhbmdlIiwicHVzaFN0YXRlIiwic3RhYmlsaXplIiwic0lkIiwicmVmc0NvdW50Iiwic3RhdGVLZXlzIiwic3RhdGVSZWZzIiwiaW5SZWZzQ291bnQiLCJpblJlZnMiLCJudW1iZXIiLCJpbW1lZGlhdGUiLCJwcmV2aW91cyIsIm1lIiwic2hvdWxkUHJvcGFnIiwiX2Rlc3Ryb3lUTSIsInJlbW92ZUFsbExpc3RlbmVycyIsImNTdG9yZSIsInRhcmdldFJldnMiLCJ0YXJnZXRTY29wZSIsIl9rZXkiLCJkZWZhdWx0TmFtZSIsIm8iLCJjdXJXZWlnaHQiLCJtYXhXZWlnaHQiLCJtaW5XZWlnaHQiLCJ0YXNrQ291bnQiLCJkZVN5bmMiLCJkZVN5bmNNYXhUYXNrcyIsInRhc2siLCJpc1J1bm5pbmciLCJlcnJvckNhdGNoZXIiLCJsYXN0RXJyb3IiLCJkaXNhYmxlIiwiaGFuZGxlRXJyb3IiLCJydW5Ob3ciLCJlbmFibGUiLCJhZGRFdmVudExpc3RlbmVyIiwicHJvY2VzcyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJydW4iLCJmcm9tIiwiRGF0ZSIsIm5vdyIsIndlaWdodCIsIk1hdGgiLCJtYXgiLCJtaW4iLCJzY29wYWJsZXMiLCJoYW5kbGUiLCJtZW1iZXIiLCJzdGF0ZVNjb3BlIiwiaXNTY29wYWJsZVR5cGUiLCJDb21wIiwiYXBwbHlTY29wYWJsZVR5cGUiLCJhcmd6MiJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNUQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUEvQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTJCQSxLQUFJQSxVQUFZLE9BQU9DLE1BQVAsS0FBa0IsV0FBcEIsR0FBb0NBLE1BQXBDLEdBQTZDQyxNQUEzRDs7QUFNQSxLQUFNQyxLQUFLSCxRQUFRSSxVQUFSLElBQXNCLEVBQWpDO0FBQ0EsS0FBS0osUUFBUUksVUFBYixFQUEwQjtBQUN0QkMsYUFBUUMsSUFBUixDQUFhLCtEQUFiO0FBQ0gsRUFGRCxNQUdLOztBQUVETixhQUFRSSxVQUFSLEdBQXFCRCxFQUFyQjtBQUNBLHFCQUFNSSxLQUFOO0FBQ0E7QUFDQUosUUFBR0ssS0FBSDtBQUNBTCxRQUFHTSxPQUFIO0FBQ0FOLFFBQUdJLEtBQUg7QUFDQUosUUFBR08sT0FBSDtBQUNBUCxRQUFHUSxZQUFIO0FBQ0FSLFFBQUdTLFlBQUg7QUFDQVQsUUFBR1UsZUFBSDtBQUNBVixRQUFHVyxRQUFILEdBQ0ksU0FBU0EsUUFBVCxDQUFtQkMsR0FBbkIsRUFBd0JDLEdBQXhCLEVBQThCO0FBQzFCRCxhQUFLQyxHQUFMLElBQWEsSUFBSSxnQkFBTUYsUUFBVixDQUFtQkMsSUFBS0MsR0FBTCxDQUFuQixDQUFiO0FBQ0EsZ0JBQU9ELEdBQVA7QUFDSCxNQUpMO0FBTUg7bUJBQ2NaLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RGY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTRCSSxV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O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLE1BQU07QUFDakIsYUFBWSxRQUFRO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLE1BQU07QUFDakIsWUFBVyxNQUFNO0FBQ2pCLGFBQVksUUFBUTtBQUNwQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxNQUFNO0FBQ2pCLFlBQVcsTUFBTTtBQUNqQixhQUFZLFFBQVE7QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsTUFBTTtBQUNqQixhQUFZLFFBQVE7QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLE1BQU07QUFDakIsYUFBWSxRQUFRO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxNQUFNO0FBQ2pCLGFBQVksUUFBUTtBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLE1BQU07QUFDakIsYUFBWSxRQUFRO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FB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Q3JIZjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0JBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFxQjtBQUNyQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0NBQXFDOztBQUVyQztBQUNBO0FB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a0JBQWtCQyxNQUFPLENBQVAsQ0FBbEIsRUFBOEIzSSxJQUE5QixFQUFvQyxJQUFwQyxFQUEwQyxJQUExQyxDQUFuQjtBQUNBLHdCQUFPMkksTUFBTyxDQUFQLENBQVA7QUFDSCxjQUhELE1BS0ksT0FBT3BWLCtCQUFhb1YsTUFBTyxDQUFQLENBQWIsU0FBNEIzSSxJQUE1QixFQUFQO0FBQ1AsVUFSRDtBQVNIO0FBQ0QsWUFBTzBJLGtCQUFrQjFJLEtBQU0sQ0FBTixDQUFsQixFQUE2QkEsS0FBS3RGLEtBQUwsQ0FBVyxDQUFYLENBQTdCLEVBQTRDLEtBQTVDLEVBQW1ELElBQW5ELENBQVA7QUFDSDs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7U0FJSWpILGUsR0FBQUEsZTtTQUNBSCxPLEdBQUFBLE87U0FDQUMsWSxHQUFBQSxZIiwiZmlsZSI6Ii4uLy4uL2Rpc3QvUmVTY29wZS5icm93c2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDU1OTk3OGQxZGEyOTZkMGMxYjA0IiwiLypcbiAqIENvcHlyaWdodCAoYykgIDIwMTggV2lzZSBXaWxkIFdlYiAuXG4gKlxuICogIE1JVCBMaWNlbnNlXG4gKlxuICogIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqICBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiAgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqICBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqICBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqICBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcbiAqICBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqICBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiAgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiAgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiAgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiAgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcbiAqICBTT0ZUV0FSRS5cbiAqXG4gKiBAYXV0aG9yIDogTmF0aGFuYWVsIEJyYXVuXG4gKiBAY29udGFjdCA6IGNhaXBpbGFic0BnbWFpbC5jb21cbiAqL1xuXG5sZXQgJGdsb2JhbCA9ICggdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgKSA/IHdpbmRvdyA6IGdsb2JhbDtcblxuaW1wb3J0IFNjb3BlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tIFwiLi9TY29wZVwiO1xuaW1wb3J0IFN0b3JlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tIFwiLi9TdG9yZVwiO1xuaW1wb3J0IHsgYWRkU2NvcGFibGVUeXBlLCByZVNjb3BlLCBzY29wZVRvU3RhdGUgfSBmcm9tIFwiLi91dGlscy9zY29wYWJsZVwiO1xuXG5jb25zdCBSUyA9ICRnbG9iYWwuX19fcmVzY29wZSB8fCB7fTtcbmlmICggJGdsb2JhbC5fX19yZXNjb3BlICkge1xuICAgIGNvbnNvbGUud2FybihcIlJlU2NvcGUgaXMgZGVmaW5lZCBtdWx0aXBsZSB0aW1lcyAhISBcXG5DaGVjayB5b3UncmUgcGFja2FnaW5nXCIpXG59XG5lbHNlIHtcbiAgICBcbiAgICAkZ2xvYmFsLl9fX3Jlc2NvcGUgPSBSUztcbiAgICBTY29wZS5TdG9yZSAgICAgICAgPSBTdG9yZTtcbiAgICAvL1JTLmNvbnNvbGUgICAgICAgICA9IGNvbnNvbGU7XG4gICAgUlMuU2NvcGUgICAgICAgICAgID0gU2NvcGU7XG4gICAgUlMuQ29udGV4dCAgICAgICAgID0gU2NvcGU7XG4gICAgUlMuU3RvcmUgICAgICAgICAgID0gU3RvcmU7XG4gICAgUlMucmVTY29wZSAgICAgICAgID0gcmVTY29wZTtcbiAgICBSUy5zY29wZVRvU3RhdGUgICAgPSBzY29wZVRvU3RhdGU7XG4gICAgUlMucmVTY29wZVN0YXRlICAgID0gc2NvcGVUb1N0YXRlO1xuICAgIFJTLmFkZFNjb3BhYmxlVHlwZSA9IGFkZFNjb3BhYmxlVHlwZTtcbiAgICBSUy5zY29wZVJlZiAgICAgICAgPVxuICAgICAgICBmdW5jdGlvbiBzY29wZVJlZiggbWFwLCBrZXkgKSB7XG4gICAgICAgICAgICBtYXBbIGtleSBdID0gbmV3IFNjb3BlLnNjb3BlUmVmKG1hcFsga2V5IF0pO1xuICAgICAgICAgICAgcmV0dXJuIG1hcDtcbiAgICAgICAgfTtcbiAgICBcbn1cbmV4cG9ydCBkZWZhdWx0IFJTO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC5qcyIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpICAyMDE4IFdpc2UgV2lsZCBXZWIgLlxuICpcbiAqICBNSVQgTGljZW5zZVxuICpcbiAqICBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiAgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqICB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiAgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiAgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiAgVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG4gKiAgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqICBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG4gKiAgU09GVFdBUkUuXG4gKlxuICogQGF1dGhvciA6IE5hdGhhbmFlbCBCcmF1blxuICogQGNvbnRhY3QgOiBjYWlwaWxhYnNAZ21haWwuY29tXG4gKi9cblxuXG52YXIgaXMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi91dGlscy9pcycpLFxuICAgIHsgd2Fsa25TZXQsIHdhbGtuR2V0LCBrZXlXYWxrblNldCwga2V5V2Fsa25HZXQgfSA9IHJlcXVpcmUoJy4vdXRpbHMvdXRpbHMnKSxcbiAgICBFdmVudEVtaXR0ZXIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL3V0aWxzL0VtaXR0ZXInKSxcbiAgICBzaG9ydGlkICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlKCdzaG9ydGlkJylcblx0LCBfX3Byb3RvX19wdXNoICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID0gKCB0YXJnZXQsIGlkLCBwYXJlbnQgKSA9PiB7XG5cdCAgICBsZXQgZm4gICAgICAgPSBmdW5jdGlvbiAoKSB7XG5cdCAgICB9O1xuXHQgICAgZm4ucHJvdG90eXBlID0gcGFyZW50ID8gbmV3IHBhcmVudC5fW2lkXSgpIDogdGFyZ2V0W2lkXSB8fCB7fTtcblx0ICAgIHRhcmdldFtpZF0gICA9IG5ldyBmbigpO1xuXHQgICAgdGFyZ2V0Ll9baWRdID0gZm47XG4gICAgfSxcblx0b3BlblNjb3BlcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID0ge30sXG5cdFNpbXBsZU9iamVjdFByb3RvICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA9ICh7fSkuY29uc3RydWN0b3I7XG5cbi8qKlxuICogQmFzZSBTY29wZSBvYmplY3RcbiAqL1xuY2xhc3MgU2NvcGUgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuXHRzdGF0aWMgZ2V0U2NvcGUoIHNjb3BlcyApIHtcblx0XHRsZXQgc2tleSA9IGlzLmFycmF5KHNjb3BlcykgPyBzY29wZXMuc29ydCgoIGEsIGIgKSA9PiB7XG5cdFx0XHRpZiAoIGEuZmlyc3RuYW1lIDwgYi5maXJzdG5hbWUgKSByZXR1cm4gLTE7XG5cdFx0XHRpZiAoIGEuZmlyc3RuYW1lID4gYi5maXJzdG5hbWUgKSByZXR1cm4gMTtcblx0XHRcdHJldHVybiAwO1xuXHRcdH0pLmpvaW4oJysnKSA6IHNjb3Blcztcblx0XHRyZXR1cm4gb3BlblNjb3Blc1tza2V5XSA9IG9wZW5TY29wZXNbc2tleV0gfHwgbmV3IFNjb3BlKHt9LCB7IGlkOiBza2V5IH0pO1xuXHR9O1xuXHRcblx0XG5cdC8qKlxuXHQgKiBnZXQgYSBwYXJzZWQgcmVmZXJlbmNlIGxpc3QgZnJvbSBzdGF0ZU1hcFxuXHQgKiBAcGFyYW0gX3JlZlxuXHQgKiBAcmV0dXJucyB7e3N0b3JlSWQsIHBhdGgsIGFsaWFzOiAqLCByZWY6ICp9fVxuXHQgKi9cblx0c3RhdGljIHN0YXRlTWFwVG9SZWZMaXN0KCBzbSwgc3RhdGUgPSB7fSwgX3JlZnMgPSBbXSwgYWN0aW9ucyA9IHt9LCBwYXRoID0gXCJcIiApIHtcblx0XHRsZXQgYXBwbGllcjtcblx0XHRPYmplY3Qua2V5cyhzbSkuZm9yRWFjaChcblx0XHRcdGtleSA9PiB7XG5cdFx0XHRcdGxldCBjcGF0aCA9IHBhdGggPyBwYXRoICsgJy4nICsga2V5IDoga2V5O1xuXHRcdFx0XHRcblx0XHRcdFx0c21ba2V5XSBpbnN0YW5jZW9mIFNjb3BlLnNjb3BlUmVmXG5cdFx0XHRcdD8gX3JlZnMucHVzaChzbVtrZXldLnBhdGggKyAnOicgKyBjcGF0aClcblx0XHRcdFx0OiAoc21ba2V5XSAmJiBzbVtrZXldIGluc3RhbmNlb2YgRnVuY3Rpb24pXG5cdFx0XHRcdCAgPyBrZXkgPT0gXCIkYXBwbHlcIlxuXHRcdFx0XHQgICAgPyBhcHBsaWVyID0gc21ba2V5XVxuXHRcdFx0XHQgICAgOiBhY3Rpb25zW2tleV0gPSBzbVtrZXldXG5cdFx0XHRcdCAgOiAoc21ba2V5XSAmJiBzbVtrZXldLnByb3RvdHlwZSBpbnN0YW5jZW9mIFNjb3BlLlN0b3JlKVxuXHRcdFx0XHQgICAgPyBfcmVmcy5wdXNoKHNtW2tleV0uYXMoY3BhdGgpKVxuXHRcdFx0XHQgICAgOiBzdGF0ZVtjcGF0aF0gPSBzbVtrZXldXG5cdFx0XHRcdC8vOiB0aGlzLnN0YXRlTWFwVG9SZWZMaXN0KHNtW2tleV0sIF9yZWZzLCBwYXRoICsgJy4nICsga2V5KVxuXHRcdFx0fVxuXHRcdClcblx0XHRyZXR1cm4gYXBwbGllcjtcblx0fVxuXHRcblx0c3RhdGljIHBlcnNpc3RlbmNlVG0gPSAxOy8vIGlmID4gMCwgd2lsbCB3YWl0ICdwZXJzaXN0ZW5jZVRtJyBtcyBiZWZvcmUgZGVzdHJveVxuXHQvLyB3aGVuXG5cdC8vIGRpc3Bvc2UgcmVhY2ggMFxuXHRzdGF0aWMgU3RvcmUgICAgPSBudWxsO1xuXHRzdGF0aWMgc2NvcGVSZWYgPSBmdW5jdGlvbiBzY29wZVJlZiggcGF0aCApIHtcblx0XHR0aGlzLnBhdGggPSBwYXRoO1xuXHR9O1xuXHRzdGF0aWMgc2NvcGVzICAgPSBvcGVuU2NvcGVzOy8vIGFsbCBhY3RpdmUgc2NvcGVzXG5cdFxuXHRcblx0LyoqXG5cdCAqIEluaXQgYSBSZVNjb3BlIHNjb3BlXG5cdCAqXG5cdCAqIEBwYXJhbSBzdG9yZXNNYXAge09iamVjdH0gT2JqZWN0IHdpdGggdGhlIGluaXRpYWwgc3RvcmVzIGRlZmluaXRpb24gLyBpbnN0YW5jZXNcblx0ICogQHBhcmFtIGNvbmZpZyB7T2JqZWN0fSBTY29wZSBjb25maWdcblx0ICoge1xuXHQgKiAgICAgcGFyZW50IHtzY29wZX0gQG9wdGlvbmFsIHBhcmVudCBzY29wZVxuXHQgKlxuXHQgKiAgICAgaWQge3N0cmluZ30gQG9wdGlvbmFsIGlkICggaWYgdGhpcyBpZCBleGlzdCBzdG9yZXNNYXAgd2lsbCBiZSBtZXJnZSBvbiB0aGUgJ2lkJ1xuXHQgKiAgICAgc2NvcGUpXG5cdCAqICAgICBrZXkge3N0cmluZ30gQG9wdGlvbmFsIGtleSBvZiB0aGUgc2NvcGUgKCBpZiBubyBpZCBpcyBzZXQsIHRoZSBzY29wZSBpZCB3aWxsIGJlIChwYXJlbnQuaWQrJz4nK2tleSlcblx0ICogICAgIGluY3JlbWVudElkIHtib29sfSBAb3B0aW9uYWwgdHJ1ZSB0byBhZGQgYSBzdWZmaXggaWQsIGlmIHRoZSBwcm92aWRlZCBrZXkgb3IgaWQgZ2xvYmFsbHkgZXhpc3Rcblx0ICpcblx0ICogICAgIHN0YXRlIHtPYmplY3R9IEBvcHRpb25hbCBpbml0aWFsIHN0YXRlIGJ5IHN0b3JlIGFsaWFzXG5cdCAqICAgICBkYXRhIHtPYmplY3R9IEBvcHRpb25hbCBpbml0aWFsIGRhdGEgYnkgc3RvcmUgYWxpYXNcblx0ICpcblx0ICogICAgIHJvb3RFbWl0dGVyIHtib29sfSBAb3B0aW9uYWwgdHJ1ZSB0byBub3QgYmVpbmcgZGVzdGFiaWxpemVkIGJ5IHBhcmVudFxuXHQgKiAgICAgYm91bmRlZEFjdGlvbnMge2FycmF5IHwgcmVnZXhwfSBAb3B0aW9uYWwgbGlzdCBvciByZWdleHAgb2YgYWN0aW9ucyBub3QgcHJvcGFnYXRlZCB0byB0aGUgcGFyZW50XG5cdCAqICAgICBhdXRvRGVzdHJveSB7dHJ1ZSB8IGZhbHNlIHwgJ2luaGVyaXQnfVxuXHQgKiAgICAgcGVyc2lzdGVuY2VUbSB7bnVtYmVyKSBpZiA+IDAsIHdpbGwgd2FpdCAncGVyc2lzdGVuY2VUbScgbXMgYmVmb3JlIGRlc3Ryb3kgd2hlblxuXHQgKiAgICAgZGlzcG9zZSByZWFjaCAwIGF1dG9EZXN0cm95ICB7Ym9vbH0gd2lsbCB0cmlnZ2VyIHJldGFpbiAmIGRpc3Bvc2UgYWZ0ZXIgc3RhcnRcblx0ICogIH1cblx0ICogQHJldHVybnMge1Njb3BlfVxuXHQgKi9cblx0Y29uc3RydWN0b3IoIHN0b3Jlc01hcCwgeyBwYXJlbnQsIHVwcGVyU2NvcGUsIGtleSwgaWQsIHNuYXBzaG90LCBzdGF0ZSwgZGF0YSwgaW5jcmVtZW50SWQgPSAhIWtleSwgcGVyc2lzdGVuY2VUbSwgYXV0b0Rlc3Ryb3ksIHJvb3RFbWl0dGVyLCBib3VuZGVkQWN0aW9ucyB9ID0ge30gKSB7XG5cdFx0c3VwZXIoKTtcblx0XHR2YXIgXyA9IHtcblx0XHRcdGtleVBJRDogKHVwcGVyU2NvcGUgJiYgdXBwZXJTY29wZS5faWQgfHwgcGFyZW50ICYmIHBhcmVudC5faWQgfHwgc2hvcnRpZC5nZW5lcmF0ZSgpKSxcblx0XHRcdGtleSxcblx0XHRcdGluY3JlbWVudElkLFxuXHRcdFx0YmFzZUlkOiBpZFxuXHRcdH0sIGtleUluZGV4O1xuXHRcdFxuXHRcdGlkID0gaWQgfHwga2V5ICYmIChfLmtleVBJRCArICc+JyArIGtleSk7XG5cdFx0XG5cdFx0Xy5pc0xvY2FsSWQgPSAhaWQ7XG5cdFx0XG5cdFx0Ly9pZiAoIHBhcmVudCAmJiBrZXkgKSB7XG5cdFx0Ly8gICAga2V5SW5kZXggPSBwYXJlbnQuXy5jaGlsZFNjb3Blcy5maW5kKGN0eD0+KGN0eC5faWQ9PWlkKSk7XG5cdFx0Ly8gICAgaWYgKCBrZXlJbmRleCA9PSAtMSApIGtleUluZGV4ID0gcGFyZW50Ll8uc2VlbkNoaWxkcztcblx0XHQvLyAgICBrZXlJbmRleCsrO1xuXHRcdC8vICAgIGlmICgga2V5SW5kZXggKVxuXHRcdC8vICAgICAgICBpZCA9IGlkICsgJ1snICsga2V5SW5kZXggKyAnXSc7XG5cdFx0Ly99XG5cdFx0XG5cdFx0aWQgPSBpZCB8fCAoXCJfX19fX1wiICsgc2hvcnRpZC5nZW5lcmF0ZSgpKTtcblx0XHRcblx0XHRcblx0XHRpZiAoIG9wZW5TY29wZXNbaWRdICYmICFpbmNyZW1lbnRJZCApIHsvLyBvdmVyd3JpdGUgZXhpc3Rpbmcgc2NvcGVcblx0XHRcdHRoaXMuX2lkID0gaWQ7XG5cdFx0XHRvcGVuU2NvcGVzW2lkXS5yZWdpc3RlcihzdG9yZXNNYXApO1xuXHRcdFx0cmV0dXJuIG9wZW5TY29wZXNbaWRdXG5cdFx0fVxuXHRcdGVsc2UgaWYgKCBvcGVuU2NvcGVzW2lkXSAmJiBpbmNyZW1lbnRJZCApIHsvLyBnZW5lcmF0ZSBrZXkgaWRcblx0XHRcdGxldCBpID0gLTE7XG5cdFx0XHR3aGlsZSAoIG9wZW5TY29wZXNbaWQgKyAnWycgKyAoKytpKSArICddJ10gKSA7XG5cdFx0XHRpZCA9IGlkICsgJ1snICsgaSArICddJztcblx0XHR9XG5cdFx0XG5cdFx0dGhpcy5faWQgICAgICAgID0gaWQ7XG5cdFx0dGhpcy5fcmV2ICAgICAgID0gMDtcblx0XHRvcGVuU2NvcGVzW2lkXSAgPSB0aGlzO1xuXHRcdF8ucGVyc2lzdGVuY2VUbSA9IHBlcnNpc3RlbmNlVG0gfHwgdGhpcy5jb25zdHJ1Y3Rvci5wZXJzaXN0ZW5jZVRtO1xuXHRcdFxuXHRcdHRoaXMuYWN0aW9ucyA9IHt9O1xuXHRcdHRoaXMuc3RvcmVzICA9IHt9O1xuXHRcdHRoaXMuc3RhdGUgICA9IHt9O1xuXHRcdHRoaXMuZGF0YSAgICA9IHt9O1xuXHRcdFxuXHRcdHRoaXMucGFyZW50ID0gcGFyZW50O1xuXHRcdFxuXHRcdGlmICggYXV0b0Rlc3Ryb3kgPT0gJ2luaGVyaXQnIClcblx0XHRcdGF1dG9EZXN0cm95ID0gcGFyZW50ICYmIHBhcmVudC5fYXV0b0Rlc3Ryb3k7XG5cdFx0XG5cdFx0dGhpcy5fICAgICAgICAgICAgPSBfO1xuXHRcdHRoaXMuX2F1dG9EZXN0cm95ID0gYXV0b0Rlc3Ryb3k7XG5cdFx0XG5cdFx0aWYgKCBwYXJlbnQgJiYgcGFyZW50LmRlYWQgKVxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiQ2FuJ3QgdXNlIGEgZGVhZCBzY29wZSBhcyBwYXJlbnQgIVwiKTtcblx0XHRcblx0XHRfX3Byb3RvX19wdXNoKHRoaXMsICdhY3Rpb25zJywgcGFyZW50KTtcblx0XHRfX3Byb3RvX19wdXNoKHRoaXMsICdzdG9yZXMnLCBwYXJlbnQpO1xuXHRcdF9fcHJvdG9fX3B1c2godGhpcywgJ3N0YXRlJywgcGFyZW50KTtcblx0XHRfX3Byb3RvX19wdXNoKHRoaXMsICdkYXRhJywgcGFyZW50KTtcblx0XHRcblx0XHR0aGlzLnNvdXJjZXMgICAgICA9IFtdO1xuXHRcdF8uY2hpbGRTY29wZXMgICAgID0gW107XG5cdFx0Xy5jaGlsZFNjb3Blc0xpc3QgPSBbXTtcblx0XHRfLnVuU3RhYmxlQ2hpbGRzICA9IDA7XG5cdFx0Xy5zZWVuQ2hpbGRzICAgICAgPSAwO1xuXHRcdFxuXHRcdHRoaXMuX19yZXRhaW5zID0geyBhbGw6IDAgfTtcblx0XHR0aGlzLl9fbG9ja3MgICA9IHsgYWxsOiAxIH07XG5cdFx0XG5cdFx0Ly9fLnNuYXBzaG90ICAgICAgICA9IHNuYXBzaG90O1xuXHRcdC8vXy5zbmFwc2hvdCAgICAgICAgPSBzbmFwc2hvdDtcblx0XHRfLl9ib3VuZGVkQWN0aW9ucyA9IGlzLmFycmF5KGJvdW5kZWRBY3Rpb25zKVxuXHRcdCAgICAgICAgICAgICAgICAgICAgPyB7IHRlc3Q6IGJvdW5kZWRBY3Rpb25zLmluY2x1ZGVzLmJpbmQoYm91bmRlZEFjdGlvbnMpIH1cblx0XHQgICAgICAgICAgICAgICAgICAgIDogYm91bmRlZEFjdGlvbnM7XG5cdFx0Xy5fbGlzdGVuaW5nICAgICAgPSB7fTtcblx0XHRfLl9zY29wZSAgICAgICAgICA9IHt9O1xuXHRcdF8uX21peGVkICAgICAgICAgID0gW107XG5cdFx0Xy5fbWl4ZWRMaXN0ICAgICAgPSBbXTtcblx0XHRfLmZvbGxvd2VycyAgICAgICA9IFtdO1xuXHRcdGlmICggcGFyZW50ICkge1xuXHRcdFx0cGFyZW50LnJldGFpbihcImlzTXlQYXJlbnRcIik7XG5cdFx0XHRpZiAoICFyb290RW1pdHRlciApIHtcblx0XHRcdFx0IXBhcmVudC5fc3RhYmxlICYmIHRoaXMud2FpdChcIndhaXRpbmdQYXJlbnRcIik7XG5cdFx0XHRcdHBhcmVudC5vbihfLl9wYXJlbnRMaXN0ID0ge1xuXHRcdFx0XHRcdCdzdGFibGUnICA6IHMgPT4gdGhpcy5yZWxlYXNlKFwid2FpdGluZ1BhcmVudFwiKSxcblx0XHRcdFx0XHQndW5zdGFibGUnOiBzID0+IHRoaXMud2FpdChcIndhaXRpbmdQYXJlbnRcIiksXG5cdFx0XHRcdFx0J3VwZGF0ZScgIDogcyA9PiB0aGlzLl9wcm9wYWcoKVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHRwYXJlbnQub24oXy5fcGFyZW50TGlzdCA9IHtcblx0XHRcdFx0XHQndXBkYXRlJzogcyA9PiB0aGlzLl9wcm9wYWcoKVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHRcdC8vIHRoaXMucmVnaXN0ZXIocGFyZW50Ll9fc2NvcGUsIHN0YXRlLCBkYXRhKTtcblx0XHR9XG5cdFx0XG5cdFx0XG5cdFx0dGhpcy5yZWdpc3RlcihzdG9yZXNNYXAsIHN0YXRlLCBkYXRhKTtcblx0XHR0aGlzLl9fbG9ja3MuYWxsLS07XG5cdFx0dGhpcy5fc3RhYmxlID0gIXRoaXMuX19sb2Nrcy5hbGw7XG5cdFx0XG5cdFx0aWYgKCBwYXJlbnQgKSB7XG5cdFx0XHRwYXJlbnQuX2FkZENoaWxkKHRoaXMpO1xuXHRcdH1cblx0XHRcblx0XHR0aGlzLnJlc3RvcmUoc25hcHNob3QpO1xuXHRcdFxuXHRcdGlmICggYXV0b0Rlc3Ryb3kgKVxuXHRcdFx0c2V0VGltZW91dChcblx0XHRcdFx0dG0gPT4ge1xuXHRcdFx0XHRcdHRoaXMucmV0YWluKFwiYXV0b0Rlc3Ryb3lcIik7XG5cdFx0XHRcdFx0dGhpcy5kaXNwb3NlKFwiYXV0b0Rlc3Ryb3lcIik7XG5cdFx0XHRcdH1cblx0XHRcdClcblx0XHRcblx0fVxuXHRcblx0LyoqXG5cdCAqXG5cdCAqIE1vdW50IHRoZSBzdG9yZXMgaW4gc3RvcmVzTGlzdCwgaW4gdGhpcyBzY29wZSBvciBpbiBpdHMgcGFyZW50cyBvciBtaXhlZCBzY29wZXNcblx0ICpcblx0ICogQHBhcmFtIHN0b3Jlc0xpc3Qge3N0cmluZ3xzdG9yZVJlZn0gU3RvcmUgbmFtZSwgQXJyYXkgb2YgU3RvcmUgbmFtZXMsIG9yIFJlc2NvcGVcblx0ICogICAgIHN0b3JlIHJlZiBmcm9tIFN0b3JlOjphcyBvciBTdG9yZTphc1xuXHQgKiBAcGFyYW0gc3RhdGVcblx0ICogQHBhcmFtIGRhdGFcblx0ICogQHJldHVybnMge1Njb3BlfVxuXHQgKi9cblx0bW91bnQoIHN0b3Jlc0xpc3QsIHNuYXBzaG90LCBzdGF0ZSwgZGF0YSApIHtcblx0XHRpZiAoIGlzLmFycmF5KHN0b3Jlc0xpc3QpICkge1xuXHRcdFx0c3RvcmVzTGlzdC5mb3JFYWNoKGsgPT4gdGhpcy5fbW91bnQoaywgc25hcHNob3QsIHN0YXRlLCBkYXRhKSk7XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0dGhpcy5fbW91bnQoLi4uYXJndW1lbnRzKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblx0XG5cdF9tb3VudCggaWQsIHNuYXBzaG90LCBzdGF0ZSwgZGF0YSApIHtcblx0XHRsZXQgcmVmLCBzbmFwO1xuXHRcdFxuXHRcdHJlZiA9IHRoaXMucGFyc2VSZWYoaWQpXG5cdFx0XG5cdFx0aWYgKCBpZCA9PSBcIiRwYXJlbnRcIiApIHJldHVybjtcblx0XHRpZiAoICF0aGlzLl8uX3Njb3BlW3JlZi5zdG9yZUlkXSApIHsvL2FzayBtaXhlZCB8fCBwYXJlbnRcblx0XHRcdGlmICggdGhpcy5fLl9taXhlZC5yZWR1Y2VSaWdodCgoIG1vdW50ZWQsIGN0eCApID0+IChtb3VudGVkIHx8IGN0eC5fbW91bnQoaWQsIHNuYXBzaG90LCBzdGF0ZSwgZGF0YSkpLCBmYWxzZSkgfHxcblx0XHRcdFx0IXRoaXMucGFyZW50IClcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0cmV0dXJuIHRoaXMucGFyZW50Ll9tb3VudCguLi5hcmd1bWVudHMpO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdGxldCBzdG9yZSA9IHRoaXMuXy5fc2NvcGVbcmVmLnN0b3JlSWRdLCB0YXNrUXVldWUgPSBbXTtcblx0XHRcdGlmICggaXMucnNTdG9yZUNsYXNzKHN0b3JlKSApIHtcblx0XHRcdFx0dGhpcy5fLl9zY29wZVtyZWYuc3RvcmVJZF0gPSBuZXcgc3RvcmUodGhpcywge1xuXHRcdFx0XHRcdC8vc25hcHNob3QsXG5cdFx0XHRcdFx0bmFtZTogcmVmLnN0b3JlSWQsXG5cdFx0XHRcdFx0c3RhdGUsXG5cdFx0XHRcdFx0ZGF0YVxuXHRcdFx0XHR9LCB0YXNrUXVldWUpO1xuXHRcdFx0XHR3aGlsZSAoIHRhc2tRdWV1ZS5sZW5ndGggKSB0YXNrUXVldWUuc2hpZnQoKSgpO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSBpZiAoIGlzLnJzU2NvcGVDbGFzcyhzdG9yZSkgKSB7XG5cdFx0XHRcdHN0b3JlID0gdGhpcy5fLl9zY29wZVtyZWYuc3RvcmVJZF0gPSBuZXcgc3RvcmUoeyAkcGFyZW50OiB0aGlzIH0sIHtcblx0XHRcdFx0XHRrZXkgICAgICAgIDogcmVmLnN0b3JlSWQsXG5cdFx0XHRcdFx0aW5jcmVtZW50SWQ6IHRydWUsXG5cdFx0XHRcdFx0dXBwZXJTY29wZSA6IHRoaXNcblx0XHRcdFx0XHQvL2F1dG9EZXN0cm95OiB0cnVlXG5cdFx0XHRcdFx0Ly9wYXJlbnQ6IHRoaXNcblx0XHRcdFx0fSk7XG5cdFx0XHRcdC8vdGhpcy5fLl9zY29wZVsgcmVmLnN0b3JlSWQgXS5yZXRhaW4oXCJzY29wZWRDaGlsZFNjb3BlXCIpO1xuXHRcdFx0XHQvL3RoaXMuX3dhdGNoU3RvcmUocmVmLnN0b3JlSWQpO1xuXHRcdFx0XHRpZiAoIHJlZi5wYXRoLmxlbmd0aCA+IDEgKVxuXHRcdFx0XHRcdHRoaXMuXy5fc2NvcGVbcmVmLnN0b3JlSWRdLm1vdW50KHJlZi5wYXRoLnNsaWNlKDEpLmpvaW4oJy4nKSwgc25hcHNob3QsIHN0YXRlLCBkYXRhKVxuXHRcdFx0XHQvL2Vsc2UgcmV0dXJuIHRoaXMuXy5fc2NvcGVbIHJlZi5zdG9yZUlkIF07XG5cdFx0XHR9XG5cdFx0XHRpZiAoIGlzLnJzU3RvcmUoc3RvcmUpICkge1xuXHRcdFx0XHRpZiAoIHN0YXRlICE9PSB1bmRlZmluZWQgJiYgZGF0YSA9PT0gdW5kZWZpbmVkIClcblx0XHRcdFx0XHRzdG9yZS5zZXRTdGF0ZShzdGF0ZSk7XG5cdFx0XHRcdGVsc2UgaWYgKCBzdGF0ZSAhPT0gdW5kZWZpbmVkIClcblx0XHRcdFx0XHRzdG9yZS5zdGF0ZSA9IHN0YXRlO1xuXHRcdFx0XHRcblx0XHRcdFx0aWYgKCBkYXRhICE9PSB1bmRlZmluZWQgKVxuXHRcdFx0XHRcdHN0b3JlLnB1c2goZGF0YSk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLl93YXRjaFN0b3JlKHJlZi5zdG9yZUlkKTtcblx0XHR9XG5cdFx0XG5cdFx0XG5cdFx0cmV0dXJuIHRoaXMuXy5fc2NvcGVbcmVmLnN0b3JlSWRdO1xuXHR9XG5cdFxuXHRfd2F0Y2hTdG9yZSggaWQsIHN0YXRlLCBkYXRhICkge1xuXHRcdGlmICggIXRoaXMuXy5fbGlzdGVuaW5nW2lkXSAmJiAhaXMuZm4odGhpcy5fLl9zY29wZVtpZF0pICkge1xuXHRcdFx0Ly9pZiAoIGlzLnJzU3RvcmUodGhpcy5fLl9zY29wZVsgaWQgXSkgKSB7XG5cdFx0XHQhdGhpcy5fLl9zY29wZVtpZF0uX2F1dG9EZXN0cm95ICYmIHRoaXMuXy5fc2NvcGVbaWRdLnJldGFpbihcInNjb3BlZFwiKTtcblx0XHRcdCF0aGlzLl8uX3Njb3BlW2lkXS5pc1N0YWJsZSgpICYmIHRoaXMud2FpdChpZCk7XG5cdFx0XHR0aGlzLl8uX3Njb3BlW2lkXS5vbihcblx0XHRcdFx0dGhpcy5fLl9saXN0ZW5pbmdbaWRdID0ge1xuXHRcdFx0XHRcdCdkZXN0cm95JyA6IHMgPT4ge1xuXHRcdFx0XHRcdFx0ZGVsZXRlIHRoaXMuXy5fbGlzdGVuaW5nW2lkXTtcblx0XHRcdFx0XHRcdHRoaXMuXy5fc2NvcGVbaWRdID0gdGhpcy5fLl9zY29wZVtpZF0uY29uc3RydWN0b3I7XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHQndXBkYXRlJyAgOiBzID0+IHRoaXMucHJvcGFnKCksXG5cdFx0XHRcdFx0J3N0YWJsZScgIDogcyA9PiB0aGlzLnJlbGVhc2UoaWQpLFxuXHRcdFx0XHRcdCd1bnN0YWJsZSc6IHMgPT4gdGhpcy53YWl0KGlkKVxuXHRcdFx0XHR9KTtcblx0XHR9XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBNaXggdGFyZ2V0Q3R4IG9uIHRoaXMgc2NvcGVcblx0ICogTWl4ZWQgc2NvcGUgcGFyZW50cyBhcmUgTk9UIG1hcHBlZFxuXHQgKiBAcGFyYW0gdGFyZ2V0Q3R4XG5cdCAqL1xuXHRtaXhpbiggdGFyZ2V0Q3R4ICkge1xuXHRcdGxldCBwYXJlbnQgPSB0aGlzLnBhcmVudCwgbGlzdHM7XG5cdFx0XG5cdFx0dGhpcy5fLl9taXhlZC5wdXNoKHRhcmdldEN0eClcblx0XHR0YXJnZXRDdHgucmV0YWluKFwibWl4ZWRUb1wiKTtcblx0XHRpZiAoICF0YXJnZXRDdHguX3N0YWJsZSApXG5cdFx0XHR0aGlzLndhaXQodGFyZ2V0Q3R4Ll9pZCk7XG5cdFx0dGhpcy5fLl9taXhlZExpc3QucHVzaChsaXN0cyA9IHtcblx0XHRcdCdzdGFibGUnICA6IHMgPT4gdGhpcy5yZWxlYXNlKHRhcmdldEN0eC5faWQpLFxuXHRcdFx0J3Vuc3RhYmxlJzogcyA9PiB0aGlzLndhaXQodGFyZ2V0Q3R4Ll9pZCksXG5cdFx0XHQndXBkYXRlJyAgOiBzID0+IHRoaXMuX3Byb3BhZygpXG5cdFx0fSk7XG5cdFx0XG5cdFx0Ly90aGlzLmFjdGlvbnMgPSB7fTtcblx0XHQvL3RoaXMuc3RvcmVzICA9IHt9O1xuXHRcdC8vdGhpcy5zdGF0ZSAgID0ge307XG5cdFx0Ly90aGlzLmRhdGEgICAgPSB7fTtcblx0XHR0YXJnZXRDdHgub24obGlzdHMpO1xuXHRcdFxuXHRcdC8vIHJlc2V0IHByb3Rvc1xuXHRcdC8vIHB1c2ggbmV3IHByb3RvIHdpdGggcGFyZW50XG5cdFx0X19wcm90b19fcHVzaCh0aGlzLCAnYWN0aW9ucycsIHBhcmVudCk7XG5cdFx0X19wcm90b19fcHVzaCh0aGlzLCAnc3RvcmVzJywgcGFyZW50KTtcblx0XHRfX3Byb3RvX19wdXNoKHRoaXMsICdzdGF0ZScsIHBhcmVudCk7XG5cdFx0X19wcm90b19fcHVzaCh0aGlzLCAnZGF0YScsIHBhcmVudCk7XG5cdFx0Ly8gcHJpbnQgbG9jYWx6IGFjY2Vzc29yc1xuXHRcdHRoaXMucmVsaW5rKHRoaXMuXy5fc2NvcGUsIHRoaXMsIGZhbHNlLCB0cnVlKTtcblx0XHRcblx0XHR0aGlzLl8uX21peGVkLmZvckVhY2goXG5cdFx0XHRjdHggPT4ge1xuXHRcdFx0XHQvLyBwdXNoIHByb3Rvc1xuXHRcdFx0XHRfX3Byb3RvX19wdXNoKHRoaXMsICdhY3Rpb25zJyk7XG5cdFx0XHRcdF9fcHJvdG9fX3B1c2godGhpcywgJ3N0b3JlcycpO1xuXHRcdFx0XHRfX3Byb3RvX19wdXNoKHRoaXMsICdzdGF0ZScpO1xuXHRcdFx0XHRfX3Byb3RvX19wdXNoKHRoaXMsICdkYXRhJyk7XG5cdFx0XHRcdHRoaXMuc3RvcmVzLl9fb3JpZ2luID0gXCJtaXhlZCBcIiArIGN0eC5faWQ7XG5cdFx0XHRcdC8vIHdyaXRlIG1peGVkIGFjY2Vzc29yc1xuXHRcdFx0XHRjdHgucmVsaW5rKGN0eC5fLl9zY29wZSwgdGhpcywgdHJ1ZSwgdHJ1ZSlcblx0XHRcdH1cblx0XHQpXG5cdH1cblx0XG5cdC8qKlxuXHQgKiBSZWdpc3RlciBzdG9yZXMgaW4gc3RvcmVzTWFwICYgbGluayB0aGVtIGluIHRoZSBwcm90b3Ncblx0ICogQHBhcmFtIHN0b3Jlc01hcFxuXHQgKiBAcGFyYW0gc3RhdGVcblx0ICogQHBhcmFtIGRhdGFcblx0ICovXG5cdHJlZ2lzdGVyKCBzdG9yZXNNYXAsIHN0YXRlID0ge30sIGRhdGEgPSB7fSApIHtcblx0XHR0aGlzLnJlbGluayhzdG9yZXNNYXAsIHRoaXMsIGZhbHNlLCBmYWxzZSk7XG5cdFx0T2JqZWN0LmtleXMoc3RvcmVzTWFwKS5mb3JFYWNoKFxuXHRcdFx0aWQgPT4ge1xuXHRcdFx0XHRpZiAoIGlkID09IFwiJHBhcmVudFwiICkgcmV0dXJuO1xuXHRcdFx0XHRpZiAoIHN0b3Jlc01hcFtpZF0uc2luZ2xldG9uIHx8IChpcy5mbihzdG9yZXNNYXBbaWRdKSAmJiAoc3RhdGVbaWRdIHx8IGRhdGFbaWRdKSkgKSB7XG5cdFx0XHRcdFx0dGhpcy5fbW91bnQoaWQsIHVuZGVmaW5lZCwgc3RhdGVbaWRdLCBkYXRhW2lkXSlcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlIGlmICggc3RhdGVbaWRdIHx8IGRhdGFbaWRdICkge1xuXHRcdFx0XHRcdGlmICggZGF0YVtpZF0gKSB7XG5cdFx0XHRcdFx0XHRpZiAoIHN0YXRlW2lkXSApXG5cdFx0XHRcdFx0XHRcdHRoaXMuc3RvcmVzW2lkXS5zdGF0ZSA9IHN0YXRlW2lkXTtcblx0XHRcdFx0XHRcdHRoaXMuc3RvcmVzW2lkXS5wdXNoKGRhdGFbaWRdKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZWxzZSBpZiAoIHN0YXRlW2lkXSApIHtcblx0XHRcdFx0XHRcdHRoaXMuc3RvcmVzW2lkXS5zZXRTdGF0ZShzdGF0ZVtpZF0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHR0aGlzLl93YXRjaFN0b3JlKGlkKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdClcblx0XHRcblx0fVxuXHRcblx0LyoqXG5cdCAqIE1hcCBzcmNDdHggc3RvcmUncyBvbiB0YXJnZXRDdHggaGVhZGVycyBwcm90bydzXG5cdCAqIEBwYXJhbSBzcmNDdHhcblx0ICogQHBhcmFtIHRhcmdldEN0eFxuXHQgKiBAcGFyYW0gc3RhdGVcblx0ICogQHBhcmFtIGRhdGFcblx0ICovXG5cdHJlbGluayggc3JjQ3R4LCB0YXJnZXRDdHggPSB0aGlzLCBleHRlcm5hbCwgZm9yY2UgKSB7XG5cdFx0bGV0IGxjdHggPSB0YXJnZXRDdHguXy5zdG9yZXMucHJvdG90eXBlO1xuXHRcdE9iamVjdC5rZXlzKHNyY0N0eClcblx0XHQgICAgICAuZm9yRWFjaChcblx0XHRcdCAgICAgIGlkID0+IHtcblx0XHRcdFx0ICAgICAgaWYgKCAhZm9yY2UgJiYgdGFyZ2V0Q3R4Ll8uX3Njb3BlW2lkXSA9PT0gc3JjQ3R4W2lkXSB8fFxuXHRcdFx0XHRcdCAgICAgIHRhcmdldEN0eC5fLl9zY29wZVtpZF0gJiYgKHRhcmdldEN0eC5fLl9zY29wZVtpZF0uY29uc3RydWN0b3IgPT09IHNyY0N0eFtpZF0pIClcblx0XHRcdFx0XHQgICAgICByZXR1cm47XG5cdFx0XHRcdFxuXHRcdFx0XHQgICAgICBpZiAoICFmb3JjZSAmJiB0YXJnZXRDdHguXy5fc2NvcGVbaWRdICkge1xuXHRcdFx0XHRcdCAgICAgIGlmICggIWV4dGVybmFsICYmICFpcy5mbih0YXJnZXRDdHguXy5fc2NvcGVbaWRdKSApIHtcblx0XHRcdFx0XHRcdCAgICAgIGNvbnNvbGUuaW5mbyhcIlJlc2NvcGUgU3RvcmUgOiBcIiwgaWQsIFwiIGFscmVhZHkgZXhpc3QgaW4gdGhpcyBzY29wZSAhICggSG90IHN3aXRjaGluZyB0aGUgc3RvcmUgKVwiKTtcblx0XHRcdFx0XHRcdCAgICAgIGxldCB0bXAgICAgICAgICAgICAgICAgPSB0YXJnZXRDdHguXy5fc2NvcGVbaWRdO1xuXHRcdFx0XHRcdFx0ICAgICAgdGFyZ2V0Q3R4Ll8uX3Njb3BlW2lkXSA9IHRhcmdldEN0eC5fLl9zY29wZVtpZF0uY29uc3RydWN0b3I7XG5cdFx0XHRcdFx0XHQgICAgICB0aGlzLl9tb3VudChpZCwgbnVsbCwgdG1wLnN0YXRlKTtcblx0XHRcdFx0XHRcdCAgICAgIHRtcC5kZXN0cm95KCk7XG5cdFx0XHRcdFx0XHQgICAgICAvL3RhcmdldEN0eC5fLl9zY29wZVsgaWQgXS5fX3Byb3RvX18gPSB0bXAuX19wcm90b19fO1xuXHRcdFx0XHRcdCAgICAgIH1cblx0XHRcdFx0XHQgICAgICBpZiAoICFleHRlcm5hbCAmJiBpcy5mbih0YXJnZXRDdHguXy5fc2NvcGVbaWRdKSApXG5cdFx0XHRcdFx0XHQgICAgICB0YXJnZXRDdHguXy5fc2NvcGVbaWRdID0gc3JjQ3R4W2lkXTtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHQgICAgICByZXR1cm47XG5cdFx0XHRcdCAgICAgIH1cblx0XHRcdFx0ICAgICAgZWxzZSBpZiAoICFmb3JjZSAmJiAhZXh0ZXJuYWwgKVxuXHRcdFx0XHRcdCAgICAgIHRoaXMuXy5fc2NvcGVbaWRdID0gc3JjQ3R4W2lkXTtcblx0XHRcdFx0XG5cdFx0XHRcdCAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShcblx0XHRcdFx0XHQgICAgICBsY3R4LFxuXHRcdFx0XHRcdCAgICAgIGlkLFxuXHRcdFx0XHRcdCAgICAgIHtcblx0XHRcdFx0XHRcdCAgICAgIGVudW1lcmFibGUgIDogdHJ1ZSxcblx0XHRcdFx0XHRcdCAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcblx0XHRcdFx0XHRcdCAgICAgIGdldCAgICAgICAgIDogKCkgPT4gdGhpcy5fLl9zY29wZVtpZF1cblx0XHRcdFx0XHQgICAgICB9XG5cdFx0XHRcdCAgICAgICk7XG5cdFx0XHRcdCAgICAgIGlmICggaWQgPT0gXCIkcGFyZW50XCIgKSByZXR1cm47XG5cdFx0XHRcdCAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShcblx0XHRcdFx0XHQgICAgICB0YXJnZXRDdHguXy5zdGF0ZS5wcm90b3R5cGUsXG5cdFx0XHRcdFx0ICAgICAgaWQsXG5cdFx0XHRcdFx0ICAgICAge1xuXHRcdFx0XHRcdFx0ICAgICAgZW51bWVyYWJsZSAgOiB0cnVlLFxuXHRcdFx0XHRcdFx0ICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuXHRcdFx0XHRcdFx0ICAgICAgZ2V0ICAgICAgICAgOiAoKSA9PiAodGhpcy5fLl9zY29wZVtpZF0gJiYgdGhpcy5fLl9zY29wZVtpZF0uc3RhdGUpLFxuXHRcdFx0XHRcdFx0ICAgICAgc2V0ICAgICAgICAgOiAoIHYgKSA9PiAodGhpcy5fbW91bnQoaWQsIHVuZGVmaW5lZCwgdikpXG5cdFx0XHRcdFx0ICAgICAgfVxuXHRcdFx0XHQgICAgICApO1xuXHRcdFx0XHQgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoXG5cdFx0XHRcdFx0ICAgICAgdGFyZ2V0Q3R4Ll8uZGF0YS5wcm90b3R5cGUsXG5cdFx0XHRcdFx0ICAgICAgaWQsXG5cdFx0XHRcdFx0ICAgICAge1xuXHRcdFx0XHRcdFx0ICAgICAgZW51bWVyYWJsZSAgOiB0cnVlLFxuXHRcdFx0XHRcdFx0ICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuXHRcdFx0XHRcdFx0ICAgICAgZ2V0ICAgICAgICAgOiAoKSA9PiAodGhpcy5fLl9zY29wZVtpZF0gJiYgdGhpcy5fLl9zY29wZVtpZF0uZGF0YSksXG5cdFx0XHRcdFx0XHQgICAgICBzZXQgICAgICAgICA6ICggdiApID0+ICh0aGlzLl9tb3VudChpZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHYpKVxuXHRcdFx0XHRcdCAgICAgIH1cblx0XHRcdFx0ICAgICAgKTtcblx0XHRcdFx0XG5cdFx0XHRcdCAgICAgIGxldCBhY3Rpb25zICAgICAgID0gc3JjQ3R4W2lkXSBpbnN0YW5jZW9mIFNjb3BlLlN0b3JlXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgPyBzcmNDdHhbaWRdLmNvbnN0cnVjdG9yLmFjdGlvbnNcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICA6IHNyY0N0eFtpZF0uYWN0aW9ucyxcblx0XHRcdFx0ICAgICAgICAgIGFjdGl2ZUFjdGlvbnMgPSB0YXJnZXRDdHguXy5hY3Rpb25zLnByb3RvdHlwZTtcblx0XHRcdFx0ICAgICAgaWYgKCBpcy5yc1Njb3BlKHRoaXMuXy5fc2NvcGVbaWRdLnByb3RvdHlwZSkgKVxuXHRcdFx0XHRcdCAgICAgIHRoaXMuX21vdW50KGlkKTtcblx0XHRcdFx0ICAgICAgaWYgKCBpcy5yc1Njb3BlKHRoaXMuXy5fc2NvcGVbaWRdKSApIHtcblx0XHRcdFx0XHQgICAgICBhY3RpdmVBY3Rpb25zW2lkXSA9IHRoaXMuXy5fc2NvcGVbaWRdLmFjdGlvbnM7XG5cdFx0XHRcdCAgICAgIH1cblx0XHRcdFx0ICAgICAgaWYgKCAhaXMucnNTdG9yZSh0aGlzLl8uX3Njb3BlW2lkXSkgJiYgIWlzLnJzU3RvcmVDbGFzcyh0aGlzLl8uX3Njb3BlW2lkXSkgKVxuXHRcdFx0XHRcdCAgICAgIHJldHVybjtcblx0XHRcdFx0XG5cdFx0XHRcdCAgICAgIGFjdGlvbnMgJiZcblx0XHRcdFx0ICAgICAgT2JqZWN0LmtleXMoYWN0aW9ucylcblx0XHRcdFx0ICAgICAgICAgICAgLmZvckVhY2goXG5cdFx0XHRcdFx0ICAgICAgICAgICAgKCBhY3QgKSA9PiB7XG5cdFx0XHRcdFx0XHQgICAgICAgICAgICBpZiAoIGFjdGl2ZUFjdGlvbnMuaGFzT3duUHJvcGVydHkoYWN0KSApXG5cdFx0XHRcdFx0XHRcdCAgICAgICAgICAgIGFjdGl2ZUFjdGlvbnNbYWN0XS5fX3RhcmdldFN0b3JlcysrO1xuXHRcdFx0XHRcdFx0ICAgICAgICAgICAgZWxzZSB7XG5cdFx0XHRcdFx0XHRcdCAgICAgICAgICAgIGFjdGl2ZUFjdGlvbnNbYWN0XSAgICAgICAgICAgICAgICA9IHRoaXMuZGlzcGF0Y2guYmluZCh0aGlzLCBhY3QpO1xuXHRcdFx0XHRcdFx0XHQgICAgICAgICAgICBhY3RpdmVBY3Rpb25zW2FjdF0uX190YXJnZXRTdG9yZXMgPSAxO1xuXHRcdFx0XHRcdFx0ICAgICAgICAgICAgfVxuXHRcdFx0XHRcdCAgICAgICAgICAgIH1cblx0XHRcdFx0ICAgICAgICAgICAgKVxuXHRcdFx0ICAgICAgfVxuXHRcdCAgICAgIClcblx0fVxuXHRcblx0LyoqXG5cdCAqIEJpbmQgc3RvcmVzIGZyb20gdGhpcyBzY29wZSwgaGlzIHBhcmVudHMgYW5kIG1peGVkIHNjb3BlXG5cdCAqXG5cdCAqIEBwYXJhbSBvYmoge1JlYWN0LkNvbXBvbmVudHxTdG9yZXxmdW5jdGlvbn1cblx0ICogQHBhcmFtIGtleSB7c3RyaW5nfSBzdG9yZXMga2V5cyB0byBiaW5kIHVwZGF0ZXNcblx0ICogQHBhcmFtIGFzXG5cdCAqIEBwYXJhbSBzZXRJbml0aWFsIHtib29sfSBmYWxzZSB0byBub3QgcHJvcGFnIGluaXRpYWwgdmFsdWUgKGRlZmF1bHQgOiB0cnVlKVxuXHQgKi9cblx0YmluZCggb2JqLCBrZXksIGFzLCBzZXRJbml0aWFsID0gdHJ1ZSwgcmV2TWFwID0ge30gKSB7XG5cdFx0bGV0IGxhc3RSZXZzLCBkYXRhLCByZWZLZXlzO1xuXHRcdGlmICgga2V5ICYmICFpcy5hcnJheShrZXkpIClcblx0XHRcdGtleSA9IFtrZXldO1xuXHRcdFxuXHRcdGlmICggYXMgPT09IGZhbHNlIHx8IGFzID09PSB0cnVlICkge1xuXHRcdFx0c2V0SW5pdGlhbCA9IGFzO1xuXHRcdFx0YXMgICAgICAgICA9IG51bGw7XG5cdFx0fVxuXHRcdFxuXHRcdHJlZktleXMgPSBrZXlcblx0XHRcdC5tYXAoaWQgPT4gKGlzLnN0cmluZyhpZCkgPyBpZCA6IGlkLm5hbWUpKVxuXHRcdFx0Lm1hcChpZCA9PiAodGhpcy5wYXJzZVJlZihpZCkpKTtcblx0XHRcblx0XHRcblx0XHR0aGlzLl8uZm9sbG93ZXJzLnB1c2goXG5cdFx0XHRbXG5cdFx0XHRcdG9iaixcblx0XHRcdFx0a2V5LFxuXHRcdFx0XHRhcyB8fCB1bmRlZmluZWQsXG5cdFx0XHRcdGxhc3RSZXZzID0gcmVmS2V5cy5yZWR1Y2UoKCByZXZzLCByZWYgKSA9PiB7XG5cdFx0XHRcdFx0cmV2c1tyZWYuc3RvcmVJZF0gPSByZXZzW3JlZi5zdG9yZUlkXSB8fCB7XG5cdFx0XHRcdFx0XHRyZXYgOiAwLFxuXHRcdFx0XHRcdFx0cmVmczogW11cblx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdHJldnNbcmVmLnN0b3JlSWRdLnJlZnMucHVzaChyZWYpO1xuXHRcdFx0XHRcdHJldHVybiByZXZzO1xuXHRcdFx0XHR9LCByZXZNYXApXG5cdFx0XHRdKTtcblx0XHRcblx0XHR0aGlzLm1vdW50KGtleSk7XG5cdFx0dGhpcy5yZXRhaW5TdG9yZXMoT2JqZWN0LmtleXMobGFzdFJldnMpLCAnbGlzdGVuZXJzJyk7XG5cdFx0XG5cdFx0aWYgKCBzZXRJbml0aWFsICYmIHRoaXMuX3N0YWJsZSApIHtcblx0XHRcdGRhdGEgPSB0aGlzLmdldFVwZGF0ZXMobGFzdFJldnMpO1xuXHRcdFx0aWYgKCAhZGF0YSApIHJldHVybiB0aGlzO1xuXHRcdFx0aWYgKCB0eXBlb2Ygb2JqICE9IFwiZnVuY3Rpb25cIiApIHtcblx0XHRcdFx0aWYgKCBhcyApIG9iai5zZXRTdGF0ZSh7IFthc106IGRhdGEgfSk7XG5cdFx0XHRcdGVsc2Ugb2JqLnNldFN0YXRlKGRhdGEpO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdG9iaihkYXRhKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBVbiBiaW5kIHRoaXMgc2NvcGUgb2ZmIHRoZSBnaXZlbiBjb21wb25lbnQta2V5c1xuXHQgKiBAcGFyYW0gb2JqXG5cdCAqIEBwYXJhbSBrZXlcblx0ICogQHJldHVybnMge0FycmF5LjwqPn1cblx0ICovXG5cdHVuQmluZCggb2JqLCBrZXksIGFzICkge1xuXHRcdHZhciBmb2xsb3dlcnMgPSB0aGlzLl8uZm9sbG93ZXJzLFxuXHRcdCAgICBpICAgICAgICAgPSBmb2xsb3dlcnMgJiYgZm9sbG93ZXJzLmxlbmd0aDtcblx0XHR3aGlsZSAoIGZvbGxvd2VycyAmJiBpLS0gKVxuXHRcdFx0aWYgKCBmb2xsb3dlcnNbaV1bMF0gPT09IG9iaiAmJlxuXHRcdFx0XHQoJycgKyBmb2xsb3dlcnNbaV1bMV0pID09ICgnJyArIGtleSkgJiZcblx0XHRcdFx0Zm9sbG93ZXJzW2ldWzJdID09IGFzICkge1xuXHRcdFx0XHR0aGlzLmRpc3Bvc2VTdG9yZXMoT2JqZWN0LmtleXMoZm9sbG93ZXJzW2ldWzNdKSwgJ2xpc3RlbmVycycpO1xuXHRcdFx0XHRyZXR1cm4gZm9sbG93ZXJzLnNwbGljZShpLCAxKTtcblx0XHRcdH1cblx0fVxuXHRcblx0LyoqXG5cdCAqIE1vdW50IHRoZSBzdG9yZXMgaW4gc3RvcmVzTGlzdCBmcm9tIHRoaXMgc2NvcGUsIGl0cyBwYXJlbnRzIGFuZCBtaXhlZCBzY29wZVxuXHQgKiBCaW5kIHRoZW0gdG8gJ3RvJ1xuXHQgKiBIb29rICd0bycgc28gaXQgd2lsbCBhdXRvIHVuYmluZCBvbiAnZGVzdHJveScgb3IgJ2NvbXBvbmVudFdpbGxVbm1vdW50J1xuXHQgKiBAcGFyYW0gdG9cblx0ICogQHBhcmFtIHN0b3Jlc0xpc3Rcblx0ICogQHBhcmFtIGJpbmRcblx0ICogQHJldHVybnMge09iamVjdH0gSW5pdGlhbCBvdXRwdXRzIG9mIHRoZSBzdG9yZXMgaW4gJ3N0b3Jlc0xpc3QnXG5cdCAqL1xuXHRtYXAoIHRvLCBzdG9yZXNMaXN0LCBiaW5kID0gdHJ1ZSwgcmV2TWFwICkge1xuXHRcdGxldCBTdG9yZSAgID0gdGhpcy5jb25zdHJ1Y3Rvci5TdG9yZTtcblx0XHRzdG9yZXNMaXN0ICA9IGlzLmFycmF5KHN0b3Jlc0xpc3QpID8gc3RvcmVzTGlzdCA6IFtzdG9yZXNMaXN0XTtcblx0XHRsZXQgcmVmTGlzdCA9IHN0b3Jlc0xpc3QubWFwKHRoaXMucGFyc2VSZWYpO1xuXHRcdHRoaXMubW91bnQoc3RvcmVzTGlzdCk7XG5cdFx0aWYgKCBiaW5kICYmIHRvIGluc3RhbmNlb2YgU3RvcmUgKSB7XG5cdFx0XHRTdG9yZS5tYXAodG8sIHN0b3Jlc0xpc3QsIHRoaXMsIHRoaXMsIGZhbHNlKVxuXHRcdH1cblx0XHRlbHNlIGlmICggYmluZCApIHtcblx0XHRcdHRoaXMuYmluZCh0bywgc3RvcmVzTGlzdCwgdW5kZWZpbmVkLCBmYWxzZSk7XG5cdFx0XHRcblx0XHRcdGxldCBtaXhlZENXVW5tb3VudCxcblx0XHRcdCAgICB1bk1vdW50S2V5ID0gdG8uaXNSZWFjdENvbXBvbmVudCA/IFwiY29tcG9uZW50V2lsbFVubW91bnRcIiA6IFwiZGVzdHJveVwiO1xuXHRcdFx0XG5cdFx0XHRpZiAoIHRvLmhhc093blByb3BlcnR5KHVuTW91bnRLZXkpICkge1xuXHRcdFx0XHRtaXhlZENXVW5tb3VudCA9IHRvW3VuTW91bnRLZXldO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHR0b1t1bk1vdW50S2V5XSA9ICggLi4uYXJneiApID0+IHtcblx0XHRcdFx0ZGVsZXRlIHRvW3VuTW91bnRLZXldO1xuXHRcdFx0XHRpZiAoIG1peGVkQ1dVbm1vdW50IClcblx0XHRcdFx0XHR0b1t1bk1vdW50S2V5XSA9IG1peGVkQ1dVbm1vdW50O1xuXHRcdFx0XHRcblx0XHRcdFx0dGhpcy51bkJpbmQodG8sIHN0b3Jlc0xpc3QpO1xuXHRcdFx0XHRyZXR1cm4gdG9bdW5Nb3VudEtleV0gJiYgdG9bdW5Nb3VudEtleV0oLi4uYXJneik7XG5cdFx0XHR9XG5cdFx0XHRcblx0XHR9XG5cdFx0cmV0dXJuIHJldk1hcCAmJiB0aGlzLmdldFVwZGF0ZXMocmV2TWFwKSB8fCByZWZMaXN0LnJlZHVjZSgoIGRhdGEsIHJlZiApID0+IHtcblx0XHRcdHdhbGtuU2V0KGRhdGEsIHJlZi5hbGlhcyB8fCByZWYucGF0aCwgdGhpcy5yZXRyaWV2ZShyZWYucGF0aCkpXG5cdFx0XHRyZXR1cm4gZGF0YTtcblx0XHR9LCB7fSk7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBHZXQgY3VycmVudCBkYXRhIHZhbHVlIGZyb20ganNvbiBwYXRoXG5cdCAqIEBwYXJhbSBwYXRoXG5cdCAqIEByZXR1cm5zIHtzdHJpbmd8Kn1cblx0ICovXG5cdHJldHJpZXZlKCBwYXRoID0gXCJcIiApIHtcblx0XHRwYXRoID0gaXMuc3RyaW5nKHBhdGgpID8gcGF0aC5zcGxpdCgnLicpIDogcGF0aDtcblx0XHRyZXR1cm4gcGF0aCAmJlxuXHRcdFx0dGhpcy5zdG9yZXNbcGF0aFswXV0gJiZcblx0XHRcdHRoaXMuc3RvcmVzW3BhdGhbMF1dLnJldHJpZXZlICYmXG5cdFx0XHR0aGlzLnN0b3Jlc1twYXRoWzBdXS5yZXRyaWV2ZShwYXRoLnNsaWNlKDEpKTtcblx0fVxuXHRcblx0LyoqXG5cdCAqIEdldCBjdXJyZW50IHN0b3JlIGZyb20ganNvbiBwYXRoXG5cdCAqIEBwYXJhbSBwYXRoXG5cdCAqIEByZXR1cm5zIHtzdHJpbmd8Kn1cblx0ICovXG5cdHJldHJpZXZlU3RvcmUoIHBhdGggPSBcIlwiICkge1xuXHRcdHBhdGggPSBpcy5zdHJpbmcocGF0aCkgPyBwYXRoLnNwbGl0KCcuJykgOiBwYXRoO1xuXHRcdHJldHVybiBwYXRoXG5cdFx0XHQmJiBwYXRoLmxlbmd0aFxuXHRcdFx0JiYgKFxuXHRcdFx0XHRwYXRoLmxlbmd0aCAhPSAxICYmIHRoaXMuc3RvcmVzW3BhdGhbMF1dLnJldHJpZXZlU3RvcmVcblx0XHRcdFx0PyB0aGlzLnN0b3Jlc1twYXRoWzBdXS5yZXRyaWV2ZVN0b3JlKHBhdGguc2xpY2UoMSkpXG5cdFx0XHRcdDogcGF0aC5sZW5ndGggPT0gMSAmJiB0aGlzLnN0b3Jlc1twYXRoWzBdXVxuXHRcdFx0KTtcblx0fVxuXHRcblx0LyoqXG5cdCAqIEdldCBvciB1cGRhdGUgc3RvcmVzUmV2TWFwJ3MgcmV2aXNpb25zXG5cdCAqIEBwYXJhbSBzdG9yZXNSZXZNYXBcblx0ICogQHBhcmFtIGxvY2FsXG5cdCAqIEByZXR1cm5zIHt7fX1cblx0ICovXG5cdGdldFN0b3Jlc1JldnMoIHN0b3Jlc1Jldk1hcCA9IHt9LCBsb2NhbCApIHtcblx0XHRsZXQgY3R4ID0gdGhpcy5fLl9zY29wZTtcblx0XHRpZiAoICFzdG9yZXNSZXZNYXAgKSB7XG5cdFx0XHRzdG9yZXNSZXZNYXAgPSB7fTtcblx0XHR9XG5cdFx0T2JqZWN0LmtleXMoY3R4KS5mb3JFYWNoKFxuXHRcdFx0aWQgPT4ge1xuXHRcdFx0XHRpZiAoIGlkID09IFwiJHBhcmVudFwiICkgcmV0dXJuO1xuXHRcdFx0XHRpZiAoICFpcy5mbihjdHhbaWRdKVxuXHRcdFx0XHQpIHtcblx0XHRcdFx0XHRzdG9yZXNSZXZNYXBbaWRdID0gY3R4W2lkXS5fcmV2O1xuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2UgaWYgKCAhc3RvcmVzUmV2TWFwLmhhc093blByb3BlcnR5KGlkKSApXG5cdFx0XHRcdFx0c3RvcmVzUmV2TWFwW2lkXSA9IGZhbHNlXG5cdFx0XHR9XG5cdFx0KTtcblx0XHRpZiAoICFsb2NhbCApIHtcblx0XHRcdHRoaXMuXy5fbWl4ZWQucmVkdWNlKCggdXBkYXRlZCwgY3R4ICkgPT4gKGN0eC5nZXRTdG9yZXNSZXZzKHN0b3Jlc1Jldk1hcCksIHN0b3Jlc1Jldk1hcCksIHN0b3Jlc1Jldk1hcCk7XG5cdFx0XHR0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC5nZXRTdG9yZXNSZXZzKHN0b3Jlc1Jldk1hcCk7XG5cdFx0fVxuXHRcdHJldHVybiBzdG9yZXNSZXZNYXA7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBHZXQgdXBkYXRlZCBvdXRwdXQgYmFzaW5nIHN0b3Jlc1Jldk1hcCdzIHJldmlzaW9ucy5cblx0ICogSWYgYSBzdG9yZSBpbiAnc3RvcmVzUmV2TWFwJyB3YXMgdXBkYXRlZDsgYWRkIGl0IHRvICdvdXRwdXQnICYgdXBkYXRlIHN0b3Jlc1Jldk1hcFxuXHQgKiBAcGFyYW0gc3RvcmVzUmV2TWFwXG5cdCAqIEBwYXJhbSBvdXRwdXRcblx0ICogQHBhcmFtIHVwZGF0ZWRcblx0ICogQHJldHVybnMgeyp8e319XG5cdCAqL1xuXHRnZXRSZWZzVXBkYXRlcyggcmVmcywgcmV2TWFwLCBvdXRwdXQgKSB7XG5cdFx0cmV2TWFwID0gcmV2TWFwIHx8IHJlZnNcblx0XHRcdC5tYXAoaWQgPT4gKGlzLnN0cmluZyhpZCkgPyBpZCA6IGlkLm5hbWUpKVxuXHRcdFx0Lm1hcChpZCA9PiAodGhpcy5wYXJzZVJlZihpZCkpKVxuXHRcdFx0LnJlZHVjZSgoIHJldnMsIHJlZiApID0+IHtcblx0XHRcdFx0cmV2c1tyZWYuc3RvcmVJZF0gPSByZXZzW3JlZi5zdG9yZUlkXSB8fCB7XG5cdFx0XHRcdFx0cmV2IDogMCxcblx0XHRcdFx0XHRyZWZzOiBbXVxuXHRcdFx0XHR9O1xuXHRcdFx0XHRyZXZzW3JlZi5zdG9yZUlkXS5yZWZzLnB1c2gocmVmKTtcblx0XHRcdFx0cmV0dXJuIHJldnM7XG5cdFx0XHR9LCB7fSk7XG5cdFx0XG5cdFx0cmV0dXJuIHRoaXMuZ2V0VXBkYXRlcyhyZXZNYXAsIG91dHB1dClcblx0fVxuXHRcblx0LyoqXG5cdCAqIEdldCBvciB1cGRhdGUgb3V0cHV0IGJhc2luZyBzdG9yZXNSZXZNYXAncyByZXZpc2lvbnMuXG5cdCAqIElmIGEgc3RvcmUgaW4gJ3N0b3Jlc1Jldk1hcCcgd2FzIHVwZGF0ZWQ7IGFkZCBpdCB0byAnb3V0cHV0JyAmIHVwZGF0ZSBzdG9yZXNSZXZNYXBcblx0ICogQHRvZG86IG9wdGltIC8gdXNlIHByb3Rvc1xuXHQgKiBAcGFyYW0gc3RvcmVzUmV2TWFwXG5cdCAqIEBwYXJhbSBvdXRwdXRcblx0ICogQHBhcmFtIHVwZGF0ZWRcblx0ICogQHJldHVybnMgeyp8e319XG5cdCAqL1xuXHRnZXRVcGRhdGVzKCBzdG9yZXNSZXZNYXAsIG91dHB1dCwgdXBkYXRlZCApIHtcblx0XHRcblx0XHRvdXRwdXQgICAgICAgPSBvdXRwdXQgfHwge307XG5cdFx0c3RvcmVzUmV2TWFwID0gc3RvcmVzUmV2TWFwIHx8IHRoaXMuX2dldFJldk1hcCgpO1xuXHRcdE9iamVjdC5rZXlzKHN0b3Jlc1Jldk1hcCkuZm9yRWFjaChcblx0XHRcdGlkID0+IHtcblx0XHRcdFx0bGV0IHN0b3JlICAgICAgICA9IHRoaXMuc3RvcmVzW2lkXTtcblx0XHRcdFx0c3RvcmVzUmV2TWFwW2lkXSA9IHN0b3Jlc1Jldk1hcFtpZF0gfHwgeyByZXY6IDAsIHJlZnM6IFtdIH07XG5cdFx0XHRcdFxuXHRcdFx0XHRpZiAoIHN0b3JlICYmIGlzLmZuKHN0b3JlKSApIHtcblx0XHRcdFx0XHR1cGRhdGVkICAgID0gdHJ1ZTtcblx0XHRcdFx0XHRvdXRwdXRbaWRdID0gdW5kZWZpbmVkO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2UgaWYgKCBzdG9yZSAmJiBzdG9yZS5fcmV2ID4gc3RvcmVzUmV2TWFwW2lkXS5yZXYgKSB7XG5cdFx0XHRcdFx0c3RvcmVzUmV2TWFwW2lkXS5yZXYgPSBzdG9yZS5fcmV2O1xuXHRcdFx0XHRcdC8vb3V0cHV0W2lkXSAgICAgICAgICAgPSBzdG9yZS5kYXRhO1xuXHRcdFx0XHRcdHVwZGF0ZWQgICAgICAgICAgICAgID0gdHJ1ZTtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHRzdG9yZXNSZXZNYXBbIGlkIF0ucmVmcy5mb3JFYWNoKFxuXHRcdFx0XHRcdFx0cmVmID0+IHtcblx0XHRcdFx0XHRcdFx0Ly9jb25zb2xlLndhcm4oXCJ1cGRhdGUgcmVmIFwiLCByZWYucmVmLFxuXHRcdFx0XHRcdFx0XHQvLyB0aGlzLnJldHJpZXZlKHJlZi5wYXRoKSk7XG5cdFx0XHRcdFx0XHRcdG91dHB1dFsgcmVmLmFsaWFzIF0gPSB0aGlzLnJldHJpZXZlKHJlZi5wYXRoKVxuXHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHQpXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHQpXG5cdFx0cmV0dXJuIHVwZGF0ZWQgJiYgb3V0cHV0O1xuXHR9XG5cdFxuXHQvKipcblx0ICogUmVjdXJzaXZlbHkgZ2V0IGFsbCBzdG9yZXMgcmV2c1xuXHQgKiBAcGFyYW0gY2hpbGRzXG5cdCAqIEByZXR1cm5zIHtBcnJheX1cblx0ICogQHByaXZhdGVcblx0ICovXG5cdF9nZXRSZXZNYXAoIHN0b3Jlc1Jldk1hcCA9IHt9ICkge1xuXHRcdGxldCBjdHggPSB0aGlzLl8uX3Njb3BlO1xuXHRcdE9iamVjdC5rZXlzKGN0eCkuZm9yRWFjaChcblx0XHRcdGlkID0+IHtcblx0XHRcdFx0aWYgKCBpZCA9PSBcIiRwYXJlbnRcIiB8fCBzdG9yZXNSZXZNYXBbaWRdICkgcmV0dXJuO1xuXHRcdFx0XHRzdG9yZXNSZXZNYXBbaWRdID0geyByZXY6IGN0eFtpZF0uX3JldiwgcmVmczogW10gfTtcblx0XHRcdFx0XG5cdFx0XHR9KTtcblx0XHR0aGlzLl8uX21peGVkLnJlZHVjZVJpZ2h0KFxuXHRcdFx0KCBzdG9yZXNSZXZNYXAsIGN0eCApID0+IChjdHguX2dldFJldk1hcChzdG9yZXNSZXZNYXApKSwgc3RvcmVzUmV2TWFwKTtcblx0XHR0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC5fZ2V0UmV2TWFwKHN0b3Jlc1Jldk1hcCk7XG5cdFx0cmV0dXJuIHN0b3Jlc1Jldk1hcDtcblx0fVxuXHRcblx0LyoqXG5cdCAqIFJlY3Vyc2l2ZWx5IGdldCBhbGwgY2hpbGQgc2NvcGVzXG5cdCAqIEBwYXJhbSBjaGlsZHNcblx0ICogQHJldHVybnMge0FycmF5fVxuXHQgKiBAcHJpdmF0ZVxuXHQgKi9cblx0X2dldEFsbENoaWxkcyggY2hpbGRzID0gW10gKSB7XG5cdFx0Y2hpbGRzLnB1c2goLi4udGhpcy5fLmNoaWxkU2NvcGVzKTtcblx0XHR0aGlzLl8uY2hpbGRTY29wZXMuZm9yRWFjaChcblx0XHRcdGN0eCA9PiB7XG5cdFx0XHRcdGN0eC5fZ2V0QWxsQ2hpbGRzKGNoaWxkcyk7XG5cdFx0XHR9XG5cdFx0KTtcblx0XHRyZXR1cm4gY2hpbGRzO1xuXHR9XG5cdFxuXHQvKipcblx0ICogU2VyaWFsaXplIGFsbCBhY3RpdmUgc3RvcmVzIHN0YXRlICYgZGF0YSBpbiBldmVyeSBjaGlsZHMgJiBtaXhlZCBzY29wZXNcblx0ICpcblx0ICogU2NvcGVzIHdpdGhvdXQga2V5IG9yIGlkIGFyZSBpZ25vcmVkXG5cdCAqIEBwYXJhbSBvdXRwdXRcblx0ICogQHJldHVybnMge3t9fVxuXHQgKi9cblx0c2VyaWFsaXplKCBjZmcgPSB7fSwgb3V0cHV0ID0ge30gKSB7XG5cdFx0bGV0IGN0eCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA9IHRoaXMuXy5fc2NvcGUsXG5cdFx0ICAgIHsgYmFzZUlkLCBrZXksIGtleVBJRCwgaW5jcmVtZW50SWQgfSA9IHRoaXMuXyxcblx0XHQgICAge1xuXHRcdFx0ICAgIGFsaWFzLFxuXHRcdFx0ICAgIHBhcmVudEFsaWFzLFxuXHRcdCAgICB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSBjZmcsXG5cdFx0ICAgIHNpZCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA9IGtleVxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IChwYXJlbnRBbGlhcyB8fCBrZXlQSUQpICsgJz4nICsga2V5XG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogYWxpYXMgfHwgcGFyZW50QWxpYXMgJiYgKHBhcmVudEFsaWFzICsgJy8nICsgYmFzZUlkKSB8fCB0aGlzLl9pZDtcblx0XHRcblx0XHRcblx0XHQvL2FsaWFzID0gYWxpYXMgfHwgYmFzZUlkO1xuXHRcdHJldHVybiB0aGlzLnNlcmlhbGl6ZV9leChjZmcsIG91dHB1dCwgc2lkLCBhbGlhcywgW1wiJHBhcmVudFwiXSlcblx0fVxuXHRcblx0c2VyaWFsaXplX2V4KCBjZmcgPSB7fSwgb3V0cHV0ID0ge30sIHNpZCwgYWxpYXMsIGV4Y2x1ZGUgKSB7XG5cdFx0bGV0IGN0eCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA9IHRoaXMuXy5fc2NvcGUsXG5cdFx0ICAgIHsgYmFzZUlkLCBrZXksIGtleVBJRCwgaW5jcmVtZW50SWQgfSA9IHRoaXMuXyxcblx0XHQgICAge1xuXHRcdFx0ICAgIHdpdGhDaGlsZHMgPSB0cnVlLFxuXHRcdFx0ICAgIHdpdGhQYXJlbnRzLFxuXHRcdFx0ICAgIHdpdGhNaXhlZCAgPSB0cnVlLFxuXHRcdFx0ICAgIG5vcmVmcyxcblx0XHRcdCAgICBwYXJlbnRBbGlhcyxcblx0XHRcdCAgICBhbGlhc2VzICAgID0ge31cblx0XHQgICAgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID0gY2ZnO1xuXHRcdFxuXHRcdGlmICgga2V5V2Fsa25HZXQob3V0cHV0LCBzaWQpICkge1xuXHRcdFx0aWYgKCAhaW5jcmVtZW50SWQgKS8vIGRvbmVcblx0XHRcdFx0cmV0dXJuIG91dHB1dDtcblx0XHRcdGVsc2UgaWYgKCBpbmNyZW1lbnRJZCApIHsvLyBnZW5lcmF0ZSBrZXkgaWRcblx0XHRcdFx0bGV0IGkgPSAtMTtcblx0XHRcdFx0d2hpbGUgKCBrZXlXYWxrbkdldChvdXRwdXQsIHNpZCArICdbJyArICgrK2kpICsgJ10nKSApIDtcblx0XHRcdFx0c2lkID0gc2lkICsgJ1snICsgaSArICddJztcblx0XHRcdH1cblx0XHR9XG5cdFx0Ly9AdG9kbyA6IGJldHRlciBzZXJpYWxpemUgbWV0aG9kXG5cdFx0a2V5V2Fsa25TZXQob3V0cHV0LCBzaWQsIHt9KTtcblx0XHRcblx0XHRPYmplY3Qua2V5cyhjdHgpLmZvckVhY2goXG5cdFx0XHRpZCA9PiB7XG5cdFx0XHRcdGlmICggZXhjbHVkZS5pbmNsdWRlcyhpZCkgfHwgaXMucnNTdG9yZUNsYXNzKGN0eFtpZF0pIHx8IGlzLnJzU2NvcGVDbGFzcyhjdHhbaWRdKSApXG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcblx0XHRcdFx0Y3R4W2lkXS5zZXJpYWxpemUoeyAuLi5jZmcsIHBhcmVudEFsaWFzOiBzaWQgfSwgb3V0cHV0KTtcblx0XHRcdH1cblx0XHQpXG5cdFx0XG5cdFx0Ly93aXRoUGFyZW50cyAmJiB0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC5zZXJpYWxpemUoe1xuXHRcdC8vXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aENoaWxkICA6IGZhbHNlLFxuXHRcdC8vXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aFBhcmVudHM6IHRydWUsXG5cdFx0Ly9cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRoTWl4ZWQsXG5cdFx0Ly9cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JlZnNcblx0XHQvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBvdXRwdXQpO1xuXHRcdFxuXHRcdHdpdGhDaGlsZHMgJiYgdGhpcy5fLmNoaWxkU2NvcGVzLmZvckVhY2goXG5cdFx0XHRjdHggPT4ge1xuXHRcdFx0XHQhY3R4Ll8uaXNMb2NhbElkICYmIGN0eC5zZXJpYWxpemUoe1xuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRoQ2hpbGQgIDogdHJ1ZSxcblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aFBhcmVudHM6IGZhbHNlLFxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRBbGlhczogc2lkLFxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRoTWl4ZWQsXG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcmVmcyxcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIG91dHB1dCk7XG5cdFx0XHR9XG5cdFx0KTtcblx0XHRcblx0XHR3aXRoTWl4ZWQgJiYgdGhpcy5fLl9taXhlZC5mb3JFYWNoKFxuXHRcdFx0Y3R4ID0+IHtcblx0XHRcdFx0IWN0eC5fLmlzTG9jYWxJZCAmJiBjdHguc2VyaWFsaXplKHtcblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aENoaWxkICA6IGZhbHNlLFxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRoUGFyZW50czogZmFsc2UsXG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpdGhNaXhlZCxcblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9yZWZzXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBvdXRwdXQpO1xuXHRcdFx0fVxuXHRcdCk7XG5cdFx0XG5cdFx0aWYgKCBhbGlhcyApIHtcblx0XHRcdG91dHB1dCA9IE9iamVjdC5rZXlzKG91dHB1dClcblx0XHRcdCAgICAgICAgICAgICAgIC5yZWR1Y2UoXG5cdFx0XHRcdCAgICAgICAgICAgICAgICggaCwgayApID0+IChcblx0XHRcdFx0XHQgICAgICAgICAgICAgICBoW2sgPT09IHRoaXMuX2lkXG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICA/IGFsaWFzXG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICA6IGtdID0gb3V0cHV0W2tdLFxuXHRcdFx0XHRcdFx0ICAgICAgICAgICAgICAgaFxuXHRcdFx0XHQgICAgICAgICAgICAgICApLFxuXHRcdFx0XHQgICAgICAgICAgICAgICB7fVxuXHRcdFx0ICAgICAgICAgICAgICAgKVxuXHRcdH1cblx0XHRyZXR1cm4gb3V0cHV0O1xuXHR9XG5cdFxuXHQvKipcblx0ICogUmVzdG9yZSBzdGF0ZSAmIGRhdGEgZnJvbSB0aGUgc2VyaWFsaXplIGZuXG5cdCAqIEBwYXJhbSBzbmFwc2hvdFxuXHQgKiBAcGFyYW0gZm9yY2Vcblx0ICovXG5cdHJlc3RvcmUoIHNuYXBzaG90LCBjZmcgPSB7fSwgZm9yY2UgPSBpcy5ib29sKGNmZykgJiYgY2ZnICkge1xuXHRcdGxldCBjdHggPSB0aGlzLl8uX3Njb3BlLCBzbmFwO1xuXHRcdFxuXHRcdGlmICggc25hcHNob3QgJiYgY2ZnICYmIGNmZy5hbGlhcyAmJiBjZmcuYWxpYXMgIT0gdGhpcy5faWQgKSB7XG5cdFx0XHRzbmFwID0ge1xuXHRcdFx0XHQuLi5zbmFwc2hvdCxcblx0XHRcdFx0W3RoaXMuX2lkXTogc25hcHNob3RbY2ZnLmFsaWFzXVxuXHRcdFx0fVxuXHRcdFx0ZGVsZXRlIHNuYXBbY2ZnLmFsaWFzXTtcblx0XHRcdHNuYXBzaG90ID0gc25hcDtcblx0XHR9XG5cdFx0c25hcHNob3QgPSBzbmFwc2hvdFxuXHRcdFx0JiYga2V5V2Fsa25HZXQoc25hcHNob3QsIHRoaXMuX2lkKVxuXHRcdFx0fHwgdGhpcy50YWtlU25hcHNob3RCeUtleSh0aGlzLl9pZCk7XG5cdFx0XG5cdFx0XG5cdFx0aWYgKCAhc25hcHNob3QgKVxuXHRcdFx0cmV0dXJuO1xuXHRcdFxuXHRcdHRoaXMuXy5zbmFwc2hvdCA9IHsgLi4uc25hcHNob3QgfTtcblx0XHRcblx0XHRzbmFwICAgICAgICAgID0gc25hcHNob3RbJy8nXTtcblx0XHRzbmFwc2hvdFsnLyddID0geyAuLi5zbmFwIH07XG5cdFx0c25hcCAmJiBPYmplY3Qua2V5cyhzbmFwKS5mb3JFYWNoKFxuXHRcdFx0bmFtZSA9PiB7XG5cdFx0XHRcdGlmICggbmFtZSA9PSBcIiRwYXJlbnRcIiApIHJldHVybjtcblx0XHRcdFx0XG5cdFx0XHRcdGlmICggY3R4W25hbWVdICkge1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdGlmICggZm9yY2UgJiYgIWlzLmZuKGN0eFtuYW1lXSkgKVxuXHRcdFx0XHRcdFx0Y3R4W25hbWVdLmRlc3Ryb3koKTtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHR0aGlzLl9tb3VudChuYW1lKTsvLyBxdWlldFxuXHRcdFx0XHR9XG5cdFx0XHRcdFxuXHRcdFx0fVxuXHRcdClcblx0XHRcblx0XHR0aGlzLl8uX21peGVkLmZvckVhY2goXG5cdFx0XHRjdHggPT4ge1xuXHRcdFx0XHQhY3R4Ll8uaXNMb2NhbElkICYmIGN0eC5yZXN0b3JlKHVuZGVmaW5lZCwgZm9yY2UpO1xuXHRcdFx0fVxuXHRcdCk7XG5cdFx0XG5cdFx0dGhpcy5fLmNoaWxkU2NvcGVzLmZvckVhY2goXG5cdFx0XHRjdHggPT4ge1xuXHRcdFx0XHQhY3R4Ll8uaXNMb2NhbElkICYmIGN0eC5yZXN0b3JlKHVuZGVmaW5lZCwgZm9yY2UpO1xuXHRcdFx0fVxuXHRcdCk7XG5cdH1cblx0XG5cdGdldFNuYXBzaG90QnlLZXkoIGtleSwgbG9jYWwgKSB7XG5cdFx0Ly8gb25seSBoYXZlIHRoZSBsb2NhbCBzbmFwXG5cdFx0aWYgKCB0aGlzLl8uc25hcHNob3QgJiYga2V5LnN0YXJ0c1dpdGgodGhpcy5faWQpICkge1xuXHRcdFx0bGV0IG9iaiA9IGtleVdhbGtuR2V0KHRoaXMuXy5zbmFwc2hvdCwga2V5LnN1YnN0cih0aGlzLl9pZC5sZW5ndGgpKVxuXHRcdFx0Ly9pZiAoIG9iaiApIHtcblx0XHRcdC8vICAgIHRoaXMuZGVsZXRlU25hcHNob3RCeUtleShrZXkpO1xuXHRcdFx0Ly99XG5cdFx0XHRyZXR1cm4gb2JqO1xuXHRcdH1cblx0XHRlbHNlIHJldHVybiAhbG9jYWxcblx0XHRcdCYmIHRoaXMucGFyZW50XG5cdFx0XHQmJiB0aGlzLnBhcmVudC5nZXRTbmFwc2hvdEJ5S2V5KGtleSlcblx0XHRcdHx8XG5cdFx0XHR0aGlzLnN0b3Jlcy4kcGFyZW50XG5cdFx0XHQmJiB0aGlzLnN0b3Jlcy4kcGFyZW50LmdldFNuYXBzaG90QnlLZXkoa2V5KTtcblx0XHRcblx0fVxuXHRcblx0Z2V0U25hcHNob3RCeUtleUV4dCggc25hcHNob3QsIGtleSwgbG9jYWwgKSB7XG5cdFx0Ly8gb25seSBoYXZlIHRoZSBsb2NhbCBzbmFwXG5cdFx0aWYgKCBzbmFwc2hvdCApIHtcblx0XHRcdGxldCBvYmogPSBrZXlXYWxrbkdldChzbmFwc2hvdCwga2V5KVxuXHRcdFx0cmV0dXJuIG9iajtcblx0XHR9XG5cdFx0XG5cdH1cblx0XG5cdHRha2VTbmFwc2hvdEJ5S2V5KCBrZXksIGxvY2FsICkge1xuXHRcdGlmICggdGhpcy5fLnNuYXBzaG90ICYmIGtleS5zdGFydHNXaXRoKHRoaXMuX2lkKSApIHtcblx0XHRcdGxldCBvYmogPSBrZXlXYWxrbkdldCh0aGlzLl8uc25hcHNob3QsIGtleS5zdWJzdHIodGhpcy5faWQubGVuZ3RoKSlcblx0XHRcdGlmICggb2JqICkge1xuXHRcdFx0XHR0aGlzLmRlbGV0ZVNuYXBzaG90QnlLZXkoa2V5LCB0cnVlKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBvYmo7XG5cdFx0fVxuXHRcdGVsc2UgcmV0dXJuICFsb2NhbFxuXHRcdFx0JiYgdGhpcy5wYXJlbnRcblx0XHRcdCYmIHRoaXMucGFyZW50LnRha2VTbmFwc2hvdEJ5S2V5KGtleSlcblx0XHRcdHx8XG5cdFx0XHR0aGlzLnN0b3Jlcy4kcGFyZW50XG5cdFx0XHQmJiB0aGlzLnN0b3Jlcy4kcGFyZW50LnRha2VTbmFwc2hvdEJ5S2V5KGtleSk7XG5cdH1cblx0XG5cdGRlbGV0ZVNuYXBzaG90QnlLZXkoIGtleSwgbG9jYWwgKSB7XG5cdFx0aWYgKCB0aGlzLl8uc25hcHNob3QgJiYga2V5LnN0YXJ0c1dpdGgodGhpcy5faWQpICkge1xuXHRcdFx0bGV0IG9iaiA9IGtleVdhbGtuR2V0KHRoaXMuXy5zbmFwc2hvdCwga2V5LnN1YnN0cih0aGlzLl9pZC5sZW5ndGgpLnJlcGxhY2UoL14oLipbXFw+fFxcL10pW15cXD58XFwvXSskL2lnLCAnJDEnKSlcblx0XHRcdGlmICggb2JqIClcblx0XHRcdFx0ZGVsZXRlIG9ialtrZXkucmVwbGFjZSgvXi4qW1xcPnxcXC9dKFteXFw+fFxcL10rKSQvaWcsICckMScpXVxuXHRcdH1cblx0XHRyZXR1cm4gIWxvY2FsXG5cdFx0XHQmJiB0aGlzLnBhcmVudFxuXHRcdFx0JiYgdGhpcy5wYXJlbnQuZGVsZXRlU25hcHNob3RCeUtleShrZXkpXG5cdFx0XHR8fFxuXHRcdFx0dGhpcy5zdG9yZXMuJHBhcmVudFxuXHRcdFx0JiYgdGhpcy5zdG9yZXMuJHBhcmVudC5kZWxldGVTbmFwc2hvdEJ5S2V5KGtleSk7XG5cdH1cblx0XG5cdHNldFN0YXRlKCBwU3RhdGUgKSB7XG5cdFx0T2JqZWN0LmtleXMocFN0YXRlKVxuXHRcdCAgICAgIC5mb3JFYWNoKGsgPT4gKHRoaXMuc3RhdGVba10gPSBwU3RhdGVba10pKVxuXHR9XG5cdFxuXHQvKipcblx0ICogZ2V0IGEgcGFyc2VkIHJlZmVyZW5jZVxuXHQgKiBAcGFyYW0gX3JlZlxuXHQgKiBAcmV0dXJucyB7e3N0b3JlSWQsIHBhdGgsIGFsaWFzOiAqLCByZWY6ICp9fVxuXHQgKi9cblx0cGFyc2VSZWYoIF9yZWYgKSB7XG5cdFx0aWYgKCB0eXBlb2YgX3JlZiAhPT0gJ3N0cmluZycgKSB7Ly8gQHRvZG8gOiBybSB0aGlzXG5cdFx0XHR0aGlzLnJlZ2lzdGVyKHsgW19yZWYubmFtZV06IF9yZWYuc3RvcmUgfSk7XG5cdFx0XHRfcmVmID0gX3JlZi5uYW1lO1xuXHRcdH1cblx0XHRsZXQgcmVmID0gX3JlZi5zcGxpdCgnOicpO1xuXHRcdHJlZlswXSAgPSByZWZbMF0uc3BsaXQoJy4nKTtcblx0XHRyZXR1cm4ge1xuXHRcdFx0c3RvcmVJZDogcmVmWzBdWzBdLFxuXHRcdFx0cGF0aCAgIDogcmVmWzBdLFxuXHRcdFx0YWxpYXMgIDogcmVmWzFdIHx8IHJlZlswXVtyZWZbMF0ubGVuZ3RoIC0gMV0sXG5cdFx0XHRyZWYgICAgOiBfcmVmXG5cdFx0fTtcblx0fVxuXHRcblx0LyoqXG5cdCAqIERpc3BhdGNoIGFuIGFjdGlvbiB0byB0aGUgdG9wIHBhcmVudCAmIG1peGVkIHNjb3BlcywgaW4gYWxsIHN0b3Jlc1xuXHQgKlxuXHQgKiBAcGFyYW0gYWN0aW9uXG5cdCAqIEBwYXJhbSBkYXRhXG5cdCAqIEByZXR1cm5zIHtTY29wZX1cblx0ICovXG5cdGRpc3BhdGNoKCBhY3Rpb24sIC4uLmFyZ3ogKSB7XG5cdFx0aWYgKCB0aGlzLmRlYWQgKSB7XG5cdFx0XHRjb25zb2xlLndhcm4oXCJEaXNwYXRjaCB3YXMgY2FsbGVkIG9uIGEgZGVhZCBzY29wZSwgY2hlY2sgeW91J3JlIGFzeW5jIGZ1bmN0aW9ucyBpbiB0aGlzIHN0YWNrLi4uXCIsIChuZXcgRXJyb3IoKSkuc3RhY2spO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRsZXQgYkFjdHMgPSB0aGlzLl8uX2JvdW5kZWRBY3Rpb25zO1xuXHRcdE9iamVjdC5rZXlzKHRoaXMuXy5fc2NvcGUpXG5cdFx0ICAgICAgLmZvckVhY2goXG5cdFx0XHQgICAgICBpZCA9PiB7XG5cdFx0XHRcdCAgICAgIGlmICggaWQgPT0gXCIkcGFyZW50XCIgKSByZXR1cm47XG5cdFx0XHRcdCAgICAgIGlmICggIWlzLmZuKHRoaXMuXy5fc2NvcGVbaWRdKSApXG5cdFx0XHRcdFx0ICAgICAgdGhpcy5fLl9zY29wZVtpZF0udHJpZ2dlcihhY3Rpb24sIC4uLmFyZ3opO1xuXHRcdFx0ICAgICAgfVxuXHRcdCAgICAgICk7XG5cdFx0XG5cdFx0aWYgKCBiQWN0cyAmJiBiQWN0cy50ZXN0KGFjdGlvbikgKVxuXHRcdFx0cmV0dXJuO1xuXHRcdFxuXHRcdHRoaXMuXy5fbWl4ZWQuZm9yRWFjaCgoIGN0eCApID0+IChjdHguZGlzcGF0Y2goYWN0aW9uLCAuLi5hcmd6KSkpO1xuXHRcdHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LmRpc3BhdGNoKGFjdGlvbiwgLi4uYXJneik7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblx0XG5cdC8vXG5cdHRyaWdnZXIoKSB7XG5cdFx0dGhpcy5kaXNwYXRjaCguLi5hcmd1bWVudHMpO1xuXHR9XG5cdFxuXHQvKipcblx0ICogb25jZSgnc3RhYmxlJywgY2IpXG5cdCAqIEBwYXJhbSBvYmoge1JlYWN0LkNvbXBvbmVudHxTdG9yZXxmdW5jdGlvbilcblx0ICogQHBhcmFtIGtleSB7c3RyaW5nfSBvcHRpb25hbCBrZXkgd2hlcmUgdG8gbWFwIHRoZSBwdWJsaWMgc3RhdGVcblx0ICovXG5cdHRoZW4oIGNiICkge1xuXHRcdGlmICggIXRoaXMuX3N0YWJsZSApXG5cdFx0XHRyZXR1cm4gdGhpcy5vbmNlKCdzdGFibGUnLCBlID0+IHRoaXMudGhlbihjYikpO1xuXHRcdFxuXHRcdHJldHVybiBjYih0aGlzLmRhdGEpO1xuXHR9XG5cdFxuXHRvbmNlU3RhYmxlVHJlZSggY2IgKSB7XG5cdFx0aWYgKCB0aGlzLl8udW5TdGFibGVDaGlsZHMgKVxuXHRcdFx0cmV0dXJuIHRoaXMub25jZSgnc3RhYmxlVHJlZScsIGUgPT4gdGhpcy5vbmNlU3RhYmxlVHJlZShjYikpO1xuXHRcdC8vaWYgKCAhdGhpcy5fc3RhYmxlIClcblx0XHQvL1x0cmV0dXJuIHRoaXMub25jZSgnc3RhYmxlJywgZSA9PiB0aGlzLm9uY2VTdGFibGVUcmVlKGNiKSk7XG5cdFx0XG5cdFx0cmV0dXJuIGNiKHRoaXMuZGF0YSk7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBDYWxsIHJldGFpbiBvbiB0aGUgc2NvcGVkIHN0b3JlcyBiYXNpbmcgZ2l2ZW5cblx0ICpcblx0ICogQHBhcmFtIHN0b3Jlc1xuXHQgKiBAcGFyYW0gcmVhc29uXG5cdCAqL1xuXHRyZXRhaW5TdG9yZXMoIHN0b3JlcyA9IFtdLCByZWFzb24gKSB7XG5cdFx0Ly9zdG9yZXMuZm9yRWFjaChcblx0XHQvLyAgICBpZCA9PiAoICggIXRoaXMuc3RvcmVzWyBpZCBdIHx8ICF0aGlzLnN0b3Jlc1sgaWQgXS5yZXRhaW4gKSAmJiBjb25zb2xlLndhcm4oaWQsIHJlYXNvbikgKVxuXHRcdC8vKVxuXHRcdHN0b3Jlcy5mb3JFYWNoKFxuXHRcdFx0aWQgPT4gKHRoaXMuc3RvcmVzW2lkXSAmJiB0aGlzLnN0b3Jlc1tpZF0ucmV0YWluICYmIHRoaXMuc3RvcmVzW2lkXS5yZXRhaW4ocmVhc29uKSlcblx0XHQpXG5cdH1cblx0XG5cdC8qKlxuXHQgKiBDYWxsIHJldGFpbiBvbiB0aGUgc2NvcGVkIHN0b3Jlc1xuXHQgKlxuXHQgKiBAcGFyYW0gc3RvcmVzXG5cdCAqIEBwYXJhbSByZWFzb25cblx0ICovXG5cdGRpc3Bvc2VTdG9yZXMoIHN0b3JlcyA9IFtdLCByZWFzb24gKSB7XG5cdFx0c3RvcmVzLmZvckVhY2goXG5cdFx0XHRpZCA9PiAodGhpcy5zdG9yZXNbaWRdICYmIHRoaXMuc3RvcmVzW2lkXS5kaXNwb3NlICYmIHRoaXMuc3RvcmVzW2lkXS5kaXNwb3NlKHJlYXNvbikpXG5cdFx0KVxuXHR9XG5cdFxuXHQvKipcblx0ICogS2VlcCB0aGUgc2NvcGUgdW5zdGFibGUgdW50aWwgcmVsZWFzZSBpcyBjYWxsZWRcblx0ICogQHBhcmFtIHJlYXNvblxuXHQgKi9cblx0d2FpdCggcmVhc29uICkge1xuXHRcdC8vY29uc29sZS5sb2coXCJ3YWl0XCIsIHJlYXNvbik7XG5cdFx0dGhpcy5fc3RhYmxlICYmICF0aGlzLl9fbG9ja3MuYWxsICYmIHRoaXMuZW1pdChcInVuc3RhYmxlXCIsIHRoaXMpO1xuXHRcdHRoaXMuX3N0YWJsZSA9IGZhbHNlO1xuXHRcdHRoaXMuX19sb2Nrcy5hbGwrKztcblx0XHRpZiAoIHJlYXNvbiApIHtcblx0XHRcdHRoaXMuX19sb2Nrc1tyZWFzb25dID0gdGhpcy5fX2xvY2tzW3JlYXNvbl0gfHwgMDtcblx0XHRcdHRoaXMuX19sb2Nrc1tyZWFzb25dKys7XG5cdFx0fVxuXHR9XG5cdFxuXHRcblx0LyoqXG5cdCAqIFN0YWJpbGl6ZSB0aGUgc2NvcGUgaWYgbm8gbW9yZSBsb2NrcyByZW1haW4gKHdhaXQgZm4pXG5cdCAqIEBwYXJhbSByZWFzb25cblx0ICovXG5cdHJlbGVhc2UoIHJlYXNvbiApIHtcblx0XHRcblx0XHRpZiAoIHJlYXNvbiApIHtcblx0XHRcdGlmICggdGhpcy5fX2xvY2tzW3JlYXNvbl0gPT0gMCApXG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoXCJSZWxlYXNlIG1vcmUgdGhhbiBsb2NraW5nICFcIiwgcmVhc29uKTtcblx0XHRcdHRoaXMuX19sb2Nrc1tyZWFzb25dID0gdGhpcy5fX2xvY2tzW3JlYXNvbl0gfHwgMDtcblx0XHRcdHRoaXMuX19sb2Nrc1tyZWFzb25dLS07XG5cdFx0fVxuXHRcdGlmICggIXJlYXNvbiAmJiB0aGlzLl9fbG9ja3MuYWxsID09IDAgKVxuXHRcdFx0Y29uc29sZS5lcnJvcihcIlJlbGVhc2UgbW9yZSB0aGFuIGxvY2tpbmcgIVwiKTtcblx0XHRcblx0XHR0aGlzLl9fbG9ja3MuYWxsLS07XG5cdFx0aWYgKCAhdGhpcy5fX2xvY2tzLmFsbCApIHtcblx0XHRcdHRoaXMuXy5zdGFiaWxpemVyVE0gJiYgY2xlYXJUaW1lb3V0KHRoaXMuXy5zdGFiaWxpemVyVE0pO1xuXHRcdFx0XG5cdFx0XHR0aGlzLl8uc3RhYmlsaXplclRNID0gc2V0VGltZW91dChcblx0XHRcdFx0ZSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5fLnN0YWJpbGl6ZXJUTSA9IG51bGw7XG5cdFx0XHRcdFx0aWYgKCB0aGlzLl9fbG9ja3MuYWxsIClcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHR0aGlzLl8ucHJvcGFnVE0gJiYgY2xlYXJUaW1lb3V0KHRoaXMuXy5wcm9wYWdUTSk7XG5cdFx0XHRcdFx0dGhpcy5fcmV2Kys7XG5cdFx0XHRcdFx0dGhpcy5fc3RhYmxlID0gdHJ1ZTtcblx0XHRcdFx0XHR0aGlzLmVtaXQoXCJzdGFibGVcIiwgdGhpcyk7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0IXRoaXMuZGVhZCAmJiB0aGlzLl9wcm9wYWcoKTsvLyBzdGFiaWxpdHkgY2FuIGluZHVjZSBkZXN0cm95XG5cdFx0XHRcdH1cblx0XHRcdCk7XG5cdFx0fVxuXHRcdFxuXHR9XG5cdFxuXHQvKipcblx0ICogUHJvcGFnIHN0b3JlcyB1cGRhdGVzIGJhc2luZyB0aGVpcnMgbGFzdCB1cGRhdGVzXG5cdCAqL1xuXHRwcm9wYWcoKSB7XG5cdFx0dGhpcy5fLnByb3BhZ1RNICYmIGNsZWFyVGltZW91dCh0aGlzLl8ucHJvcGFnVE0pO1xuXHRcdHRoaXMuXy5wcm9wYWdUTSA9IHNldFRpbWVvdXQoXG5cdFx0XHRlID0+IHtcblx0XHRcdFx0dGhpcy5fLnByb3BhZ1RNID0gbnVsbDtcblx0XHRcdFx0dGhpcy5fcHJvcGFnKClcblx0XHRcdH0sIDJcblx0XHQpO1xuXHR9XG5cdFxuXHRfcHJvcGFnKCkge1xuXHRcdGlmICggdGhpcy5fLmZvbGxvd2Vycy5sZW5ndGggKVxuXHRcdFx0dGhpcy5fLmZvbGxvd2Vycy5mb3JFYWNoKCggeyAwOiBvYmosIDE6IGtleSwgMjogYXMsIDM6IGxhc3RSZXZzLCAzOiByZW1hcHMgfSApID0+IHtcblx0XHRcdFx0bGV0IGRhdGEgPSB0aGlzLmdldFVwZGF0ZXMobGFzdFJldnMpO1xuXHRcdFx0XHRpZiAoICFkYXRhICkgcmV0dXJuO1xuXHRcdFx0XHQvL2NvbnNvbGUubG9nKGRhdGEsIGxhc3RSZXZzKVxuXHRcdFx0XHRpZiAoIHR5cGVvZiBvYmogIT0gXCJmdW5jdGlvblwiICkge1xuXHRcdFx0XHRcdC8vY29uc29sZS5sb2coXCJzZXRTdGF0ZSBcIixvYmosIE9iamVjdC5rZXlzKGRhdGEpKVxuXHRcdFx0XHRcdGlmICggYXMgKSBvYmouc2V0U3RhdGUoeyBbYXNdOiBkYXRhIH0pO1xuXHRcdFx0XHRcdGVsc2Ugb2JqLnNldFN0YXRlKGRhdGEpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdG9iaihkYXRhLCBsYXN0UmV2cyAmJiBbLi4ubGFzdFJldnNdIHx8IFwibm8gcmV2c1wiKTtcblx0XHRcdFx0fVxuXHRcdFx0XHQvLyBsYXN0UmV2cyAmJlxuXHRcdFx0XHQvLyBrZXkuZm9yRWFjaChpZCA9PiAobGFzdFJldnNbaWRdID0gdGhpcy5zdG9yZXNbaWRdICYmXG5cdFx0XHRcdC8vIHRoaXMuc3RvcmVzW2lkXS5fcmV2IHx8IDApKTtcblx0XHRcdH0pO1xuXHRcdHRoaXMuZW1pdChcInVwZGF0ZVwiLCB0aGlzLmdldFVwZGF0ZXMoKSk7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBpcyBzdGFibGVcblx0ICogQHJldHVybnMgYm9vbFxuXHQgKi9cblx0aXNTdGFibGUoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX3N0YWJsZTtcblx0fVxuXHRcblx0LyoqXG5cdCAqIGlzIHN0YWJsZVxuXHQgKiBAcmV0dXJucyBib29sXG5cdCAqL1xuXHRpc1N0YWJsZVRyZWUoKSB7XG5cdFx0cmV0dXJuICF0aGlzLl8udW5TdGFibGVDaGlsZHM7XG5cdH1cblx0XG5cdF9hZGRDaGlsZCggY3R4ICkge1xuXHRcdHRoaXMuXy5jaGlsZFNjb3Blcy5wdXNoKGN0eCk7XG5cdFx0dGhpcy5fLnNlZW5DaGlsZHMrKztcblx0XHRsZXQgbGlzdHMgICAgID0ge1xuXHRcdFx0ICAgICdzdGFibGUnICAgICAgOiBzID0+IHtcblx0XHRcdFx0ICAgIHRoaXMuXy51blN0YWJsZUNoaWxkcy0tO1xuXHRcdFx0XHQgICAgaWYgKCAhdGhpcy5fLnVuU3RhYmxlQ2hpbGRzIClcblx0XHRcdFx0XHQgICAgdGhpcy5lbWl0KFwic3RhYmxlVHJlZVwiLCB0aGlzKVxuXHRcdFx0ICAgIH0sXG5cdFx0XHQgICAgJ3Vuc3RhYmxlJyAgICA6IHMgPT4ge1xuXHRcdFx0XHQgICAgdGhpcy5fLnVuU3RhYmxlQ2hpbGRzKys7XG5cdFx0XHRcdCAgICBpZiAoIDEgPT0gdGhpcy5fLnVuU3RhYmxlQ2hpbGRzIClcblx0XHRcdFx0XHQgICAgdGhpcy5lbWl0KFwidW5zdGFibGVUcmVlXCIsIHRoaXMpXG5cdFx0XHQgICAgfSxcblx0XHRcdCAgICAnc3RhYmxlVHJlZScgIDogcyA9PiB7XG5cdFx0XHRcdCAgICB0aGlzLl8udW5TdGFibGVDaGlsZHMtLTtcblx0XHRcdFx0ICAgIGlmICggIXRoaXMuXy51blN0YWJsZUNoaWxkcyApXG5cdFx0XHRcdFx0ICAgIHRoaXMuZW1pdChcInN0YWJsZVRyZWVcIiwgdGhpcylcblx0XHRcdCAgICB9LFxuXHRcdFx0ICAgICd1bnN0YWJsZVRyZWUnOiBzID0+IHtcblx0XHRcdFx0ICAgIHRoaXMuXy51blN0YWJsZUNoaWxkcysrO1xuXHRcdFx0XHQgICAgaWYgKCAxID09IHRoaXMuXy51blN0YWJsZUNoaWxkcyApXG5cdFx0XHRcdFx0ICAgIHRoaXMuZW1pdChcInVuc3RhYmxlVHJlZVwiLCB0aGlzKVxuXHRcdFx0ICAgIH0sXG5cdFx0XHQgICAgJ2Rlc3Ryb3knICAgICA6IGN0eCA9PiB7XG5cdFx0XHRcdCAgICBpZiAoIGN0eC5fLnVuU3RhYmxlQ2hpbGRzIClcblx0XHRcdFx0XHQgICAgdGhpcy5fLnVuU3RhYmxlQ2hpbGRzLS07XG5cdFx0XHRcdCAgICBpZiAoICFjdHguaXNTdGFibGUoKSApXG5cdFx0XHRcdFx0ICAgIHRoaXMuXy51blN0YWJsZUNoaWxkcy0tO1xuXHRcdFx0XHRcblx0XHRcdFx0ICAgIGlmICggIXRoaXMuXy51blN0YWJsZUNoaWxkcyApXG5cdFx0XHRcdFx0ICAgIHRoaXMuZW1pdChcInN0YWJsZVRyZWVcIiwgdGhpcylcblx0XHRcdCAgICB9XG5cdFx0ICAgIH0sXG5cdFx0ICAgIHdhc1N0YWJsZSA9IHRoaXMuXy51blN0YWJsZUNoaWxkcztcblx0XHQvLyFjdHguaXNTdGFibGUoKSAmJiBjb25zb2xlLndhcm4oJ2FkZCB1bnN0YWJsZSBjaGlsZCcpO1xuXHRcdCFjdHguaXNTdGFibGUoKSAmJiB0aGlzLl8udW5TdGFibGVDaGlsZHMrKztcblx0XHRjdHguXy51blN0YWJsZUNoaWxkcyAmJiB0aGlzLl8udW5TdGFibGVDaGlsZHMrKztcblx0XHR0aGlzLl8uY2hpbGRTY29wZXNMaXN0LnB1c2gobGlzdHMpO1xuXHRcdGlmICggIXdhc1N0YWJsZSAmJiB0aGlzLl8udW5TdGFibGVDaGlsZHMgKVxuXHRcdFx0dGhpcy5lbWl0KFwidW5zdGFibGVUcmVlXCIsIHRoaXMpXG5cdFx0Y3R4Lm9uKGxpc3RzKTtcblx0fVxuXHRcblx0X3JtQ2hpbGQoIGN0eCApIHtcblx0XHRsZXQgaSAgICAgICAgID0gdGhpcy5fLmNoaWxkU2NvcGVzLmluZGV4T2YoY3R4KSxcblx0XHQgICAgd2FzU3RhYmxlID0gdGhpcy5fLnVuU3RhYmxlQ2hpbGRzO1xuXHRcdGlmICggaSAhPSAtMSApIHtcblx0XHRcdHRoaXMuXy5jaGlsZFNjb3Blcy5zcGxpY2UoaSwgMSk7XG5cdFx0XHQhY3R4LmlzU3RhYmxlKCkgJiYgdGhpcy5fLnVuU3RhYmxlQ2hpbGRzLS07XG5cdFx0XHRjdHguXy51blN0YWJsZUNoaWxkcyAmJiB0aGlzLl8udW5TdGFibGVDaGlsZHMtLTtcblx0XHRcdGN0eC51bih0aGlzLl8uY2hpbGRTY29wZXNMaXN0LnNwbGljZShpLCAxKVswXSk7XG5cdFx0XHRpZiAoIHdhc1N0YWJsZSAmJiAhdGhpcy5fLnVuU3RhYmxlQ2hpbGRzIClcblx0XHRcdFx0dGhpcy5lbWl0KFwic3RhYmxlVHJlZVwiKVxuXHRcdH1cblx0fVxuXHRcblx0cmV0YWluKCByZWFzb24gKSB7XG5cdFx0dGhpcy5fX3JldGFpbnMuYWxsKys7XG5cdFx0Ly9jb25zb2xlLmxvZyhcInJldGFpblwiLCB0aGlzLl9pZCwgcmVhc29uKTtcblx0XHRpZiAoIHJlYXNvbiApIHtcblx0XHRcdHRoaXMuX19yZXRhaW5zW3JlYXNvbl0gPSB0aGlzLl9fcmV0YWluc1tyZWFzb25dIHx8IDA7XG5cdFx0XHR0aGlzLl9fcmV0YWluc1tyZWFzb25dKys7XG5cdFx0fVxuXHR9XG5cdFxuXHRkaXNwb3NlKCByZWFzb24gKSB7XG5cdFx0Ly9jb25zb2xlLmxvZyhcImRpc3Bvc2VcIiwgdGhpcy5faWQsIHJlYXNvbik7XG5cdFx0aWYgKCByZWFzb24gKSB7XG5cdFx0XHRpZiAoICF0aGlzLl9fcmV0YWluc1tyZWFzb25dIClcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiRGlzcG9zZSBtb3JlIHRoYW4gcmV0YWluaW5nIDogXCIgKyByZWFzb24pO1xuXHRcdFx0dGhpcy5fX3JldGFpbnNbcmVhc29uXS0tO1xuXHRcdH1cblx0XHRcblx0XHRpZiAoICF0aGlzLl9fcmV0YWlucy5hbGwgKVxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiRGlzcG9zZSBtb3JlIHRoYW4gcmV0YWluaW5nICFcIik7XG5cdFx0XG5cdFx0dGhpcy5fX3JldGFpbnMuYWxsLS07XG5cdFx0XG5cdFx0aWYgKCAhdGhpcy5fX3JldGFpbnMuYWxsICkge1xuXHRcdFx0Ly9jb25zb2xlLmxvZyhcImRpc3Bvc2UgZG8gZGVzdHJveSBcIiwgdGhpcy5faWQsIHRoaXMuX3BlcnNpc3RlbmNlVG0pO1xuXHRcdFx0aWYgKCB0aGlzLl8ucGVyc2lzdGVuY2VUbSApIHtcblx0XHRcdFx0dGhpcy5fLmRlc3Ryb3lUTSAmJiBjbGVhclRpbWVvdXQodGhpcy5fLmRlc3Ryb3lUTSk7XG5cdFx0XHRcdHRoaXMuXy5kZXN0cm95VE0gPSBzZXRUaW1lb3V0KFxuXHRcdFx0XHRcdGUgPT4ge1xuXHRcdFx0XHRcdFx0dGhpcy50aGVuKHMgPT4ge1xuXHRcdFx0XHRcdFx0XHQhdGhpcy5fX3JldGFpbnMuYWxsICYmICF0aGlzLmRlYWQgJiYgdGhpcy5kZXN0cm95KClcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0dGhpcy5fLnBlcnNpc3RlbmNlVG1cblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHR0aGlzLnRoZW4ocyA9PlxuXHRcdFx0XHRcdCAgICAgICAgICAoIXRoaXMuX19yZXRhaW5zLmFsbCAmJiAhdGhpcy5kZWFkICYmIHRoaXMuZGVzdHJveSgpKVxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRcblx0LyoqXG5cdCAqIG9yZGVyIGRlc3Ryb3kgb2YgbG9jYWwgc3RvcmVzXG5cdCAqL1xuXHRkZXN0cm95KCkge1xuXHRcdGxldCBjdHggPSB0aGlzLl8uX3Njb3BlO1xuXHRcdC8vY29uc29sZS53YXJuKFwiZGVzdHJveVwiLCB0aGlzLl9pZCk7XG5cdFx0dGhpcy5fZ2V0QWxsQ2hpbGRzKCkubWFwKHNjb3BlID0+IHNjb3BlLmRlc3Ryb3koKSlcblx0XHRmb3IgKCBsZXQga2V5IGluIGN0eCApXG5cdFx0XHRpZiAoICFpcy5mbihjdHhba2V5XSkgKSB7XG5cdFx0XHRcdGlmICgga2V5ID09IFwiJHBhcmVudFwiICkgY29udGludWU7XG5cdFx0XHRcdCFjdHhba2V5XS5fYXV0b0Rlc3Ryb3kgJiYgY3R4W2tleV0uZGlzcG9zZShcInNjb3BlZFwiKTtcblx0XHRcdH1cblx0XHR0aGlzLl8uc3RhYmlsaXplclRNICYmIGNsZWFyVGltZW91dCh0aGlzLl8uc3RhYmlsaXplclRNKTtcblx0XHR0aGlzLl8ucHJvcGFnVE0gJiYgY2xlYXJUaW1lb3V0KHRoaXMuXy5wcm9wYWdUTSk7XG5cdFx0T2JqZWN0LmtleXMoXG5cdFx0XHR0aGlzLl8uX2xpc3RlbmluZ1xuXHRcdCkuZm9yRWFjaChcblx0XHRcdGlkID0+ICgoaWQgIT09IFwiJHBhcmVudFwiKSAmJiB0aGlzLl8uX3Njb3BlW2lkXS5yZW1vdmVMaXN0ZW5lcih0aGlzLl8uX2xpc3RlbmluZ1tpZF0pKVxuXHRcdCk7XG5cdFx0d2hpbGUgKCB0aGlzLl8uX21peGVkTGlzdC5sZW5ndGggKSB7XG5cdFx0XHR0aGlzLl8uX21peGVkWzBdLnJlbW92ZUxpc3RlbmVyKHRoaXMuXy5fbWl4ZWRMaXN0LnNoaWZ0KCkpO1xuXHRcdFx0dGhpcy5fLl9taXhlZC5zaGlmdCgpLmRpc3Bvc2UoXCJtaXhlZFRvXCIpO1xuXHRcdH1cblx0XHRbLi4udGhpcy5fLmZvbGxvd2Vyc10ubWFwKGZvbGxvd2VyID0+IHRoaXMudW5CaW5kKC4uLmZvbGxvd2VyKSk7XG5cdFx0aWYgKCB0aGlzLl8uX3BhcmVudExpc3QgKSB7XG5cdFx0XHR0aGlzLnBhcmVudC5fcm1DaGlsZCh0aGlzKTtcblx0XHRcdHRoaXMucGFyZW50LnJlbW92ZUxpc3RlbmVyKHRoaXMuXy5fcGFyZW50TGlzdCk7XG5cdFx0XHR0aGlzLnBhcmVudC5kaXNwb3NlKFwiaXNNeVBhcmVudFwiKTtcblx0XHRcdHRoaXMuXy5fcGFyZW50TGlzdCA9IG51bGw7XG5cdFx0fVxuXHRcdHRoaXMuZGVhZCA9IHRydWU7XG5cdFx0ZGVsZXRlIG9wZW5TY29wZXNbdGhpcy5faWRdO1xuXHRcdHRoaXMuZW1pdChcImRlc3Ryb3lcIiwgdGhpcyk7XG5cdFx0XG5cdFx0XG5cdFx0XG5cdH1cbn1cblxuXG5pcy5yc1Njb3BlID0gZnVuY3Rpb24gKCBvYmogKSB7XG5cdHJldHVybiBvYmogaW5zdGFuY2VvZiBTY29wZVxufVxuXG5pcy5yc1Njb3BlQ2xhc3MgPSBmdW5jdGlvbiAoIG9iaiApIHtcblx0cmV0dXJuIFNjb3BlLmlzUHJvdG90eXBlT2Yob2JqKSB8fCBvYmogPT09IFNjb3BlXG59XG5leHBvcnQgZGVmYXVsdCBTY29wZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvU2NvcGUuanMiLCJ2YXIgaXMgPSByZXF1aXJlKCdpcycpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgLi4uaXNcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlscy9pcy5qcyIsIi8qIGdsb2JhbHMgd2luZG93LCBIVE1MRWxlbWVudCAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qKiFcbiAqIGlzXG4gKiB0aGUgZGVmaW5pdGl2ZSBKYXZhU2NyaXB0IHR5cGUgdGVzdGluZyBsaWJyYXJ5XG4gKlxuICogQGNvcHlyaWdodCAyMDEzLTIwMTQgRW5yaWNvIE1hcmlubyAvIEpvcmRhbiBIYXJiYW5kXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuXG52YXIgb2JqUHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xudmFyIG93bnMgPSBvYmpQcm90by5oYXNPd25Qcm9wZXJ0eTtcbnZhciB0b1N0ciA9IG9ialByb3RvLnRvU3RyaW5nO1xudmFyIHN5bWJvbFZhbHVlT2Y7XG5pZiAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJykge1xuICBzeW1ib2xWYWx1ZU9mID0gU3ltYm9sLnByb3RvdHlwZS52YWx1ZU9mO1xufVxudmFyIGlzQWN0dWFsTmFOID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPT0gdmFsdWU7XG59O1xudmFyIE5PTl9IT1NUX1RZUEVTID0ge1xuICAnYm9vbGVhbic6IDEsXG4gIG51bWJlcjogMSxcbiAgc3RyaW5nOiAxLFxuICB1bmRlZmluZWQ6IDFcbn07XG5cbnZhciBiYXNlNjRSZWdleCA9IC9eKFtBLVphLXowLTkrL117NH0pKihbQS1aYS16MC05Ky9dezR9fFtBLVphLXowLTkrL117M309fFtBLVphLXowLTkrL117Mn09PSkkLztcbnZhciBoZXhSZWdleCA9IC9eW0EtRmEtZjAtOV0rJC87XG5cbi8qKlxuICogRXhwb3NlIGBpc2BcbiAqL1xuXG52YXIgaXMgPSB7fTtcblxuLyoqXG4gKiBUZXN0IGdlbmVyYWwuXG4gKi9cblxuLyoqXG4gKiBpcy50eXBlXG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgYSB0eXBlIG9mIGB0eXBlYC5cbiAqXG4gKiBAcGFyYW0ge01peGVkfSB2YWx1ZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZSB0eXBlXG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGB2YWx1ZWAgaXMgYSB0eXBlIG9mIGB0eXBlYCwgZmFsc2Ugb3RoZXJ3aXNlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmlzLmEgPSBpcy50eXBlID0gZnVuY3Rpb24gKHZhbHVlLCB0eXBlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09IHR5cGU7XG59O1xuXG4vKipcbiAqIGlzLmRlZmluZWRcbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBkZWZpbmVkLlxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgJ3ZhbHVlJyBpcyBkZWZpbmVkLCBmYWxzZSBvdGhlcndpc2VcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuaXMuZGVmaW5lZCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJztcbn07XG5cbi8qKlxuICogaXMuZW1wdHlcbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBlbXB0eS5cbiAqXG4gKiBAcGFyYW0ge01peGVkfSB2YWx1ZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGB2YWx1ZWAgaXMgZW1wdHksIGZhbHNlIG90aGVyd2lzZVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5pcy5lbXB0eSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHRvU3RyLmNhbGwodmFsdWUpO1xuICB2YXIga2V5O1xuXG4gIGlmICh0eXBlID09PSAnW29iamVjdCBBcnJheV0nIHx8IHR5cGUgPT09ICdbb2JqZWN0IEFyZ3VtZW50c10nIHx8IHR5cGUgPT09ICdbb2JqZWN0IFN0cmluZ10nKSB7XG4gICAgcmV0dXJuIHZhbHVlLmxlbmd0aCA9PT0gMDtcbiAgfVxuXG4gIGlmICh0eXBlID09PSAnW29iamVjdCBPYmplY3RdJykge1xuICAgIGZvciAoa2V5IGluIHZhbHVlKSB7XG4gICAgICBpZiAob3ducy5jYWxsKHZhbHVlLCBrZXkpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gIXZhbHVlO1xufTtcblxuLyoqXG4gKiBpcy5lcXVhbFxuICogVGVzdCBpZiBgdmFsdWVgIGlzIGVxdWFsIHRvIGBvdGhlcmAuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHBhcmFtIHtNaXhlZH0gb3RoZXIgdmFsdWUgdG8gY29tcGFyZSB3aXRoXG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGB2YWx1ZWAgaXMgZXF1YWwgdG8gYG90aGVyYCwgZmFsc2Ugb3RoZXJ3aXNlXG4gKi9cblxuaXMuZXF1YWwgPSBmdW5jdGlvbiBlcXVhbCh2YWx1ZSwgb3RoZXIpIHtcbiAgaWYgKHZhbHVlID09PSBvdGhlcikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgdmFyIHR5cGUgPSB0b1N0ci5jYWxsKHZhbHVlKTtcbiAgdmFyIGtleTtcblxuICBpZiAodHlwZSAhPT0gdG9TdHIuY2FsbChvdGhlcikpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAodHlwZSA9PT0gJ1tvYmplY3QgT2JqZWN0XScpIHtcbiAgICBmb3IgKGtleSBpbiB2YWx1ZSkge1xuICAgICAgaWYgKCFpcy5lcXVhbCh2YWx1ZVtrZXldLCBvdGhlcltrZXldKSB8fCAhKGtleSBpbiBvdGhlcikpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKGtleSBpbiBvdGhlcikge1xuICAgICAgaWYgKCFpcy5lcXVhbCh2YWx1ZVtrZXldLCBvdGhlcltrZXldKSB8fCAhKGtleSBpbiB2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmICh0eXBlID09PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAga2V5ID0gdmFsdWUubGVuZ3RoO1xuICAgIGlmIChrZXkgIT09IG90aGVyLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB3aGlsZSAoa2V5LS0pIHtcbiAgICAgIGlmICghaXMuZXF1YWwodmFsdWVba2V5XSwgb3RoZXJba2V5XSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmICh0eXBlID09PSAnW29iamVjdCBGdW5jdGlvbl0nKSB7XG4gICAgcmV0dXJuIHZhbHVlLnByb3RvdHlwZSA9PT0gb3RoZXIucHJvdG90eXBlO1xuICB9XG5cbiAgaWYgKHR5cGUgPT09ICdbb2JqZWN0IERhdGVdJykge1xuICAgIHJldHVybiB2YWx1ZS5nZXRUaW1lKCkgPT09IG90aGVyLmdldFRpbWUoKTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn07XG5cbi8qKlxuICogaXMuaG9zdGVkXG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgaG9zdGVkIGJ5IGBob3N0YC5cbiAqXG4gKiBAcGFyYW0ge01peGVkfSB2YWx1ZSB0byB0ZXN0XG4gKiBAcGFyYW0ge01peGVkfSBob3N0IGhvc3QgdG8gdGVzdCB3aXRoXG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGB2YWx1ZWAgaXMgaG9zdGVkIGJ5IGBob3N0YCwgZmFsc2Ugb3RoZXJ3aXNlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmlzLmhvc3RlZCA9IGZ1bmN0aW9uICh2YWx1ZSwgaG9zdCkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiBob3N0W3ZhbHVlXTtcbiAgcmV0dXJuIHR5cGUgPT09ICdvYmplY3QnID8gISFob3N0W3ZhbHVlXSA6ICFOT05fSE9TVF9UWVBFU1t0eXBlXTtcbn07XG5cbi8qKlxuICogaXMuaW5zdGFuY2VcbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBhbiBpbnN0YW5jZSBvZiBgY29uc3RydWN0b3JgLlxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgYHZhbHVlYCBpcyBhbiBpbnN0YW5jZSBvZiBgY29uc3RydWN0b3JgXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmlzLmluc3RhbmNlID0gaXNbJ2luc3RhbmNlb2YnXSA9IGZ1bmN0aW9uICh2YWx1ZSwgY29uc3RydWN0b3IpIHtcbiAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgY29uc3RydWN0b3I7XG59O1xuXG4vKipcbiAqIGlzLm5pbCAvIGlzLm51bGxcbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBudWxsLlxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgYHZhbHVlYCBpcyBudWxsLCBmYWxzZSBvdGhlcndpc2VcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuaXMubmlsID0gaXNbJ251bGwnXSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPT09IG51bGw7XG59O1xuXG4vKipcbiAqIGlzLnVuZGVmIC8gaXMudW5kZWZpbmVkXG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgdW5kZWZpbmVkLlxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgYHZhbHVlYCBpcyB1bmRlZmluZWQsIGZhbHNlIG90aGVyd2lzZVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5pcy51bmRlZiA9IGlzLnVuZGVmaW5lZCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJztcbn07XG5cbi8qKlxuICogVGVzdCBhcmd1bWVudHMuXG4gKi9cblxuLyoqXG4gKiBpcy5hcmdzXG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgYW4gYXJndW1lbnRzIG9iamVjdC5cbiAqXG4gKiBAcGFyYW0ge01peGVkfSB2YWx1ZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGB2YWx1ZWAgaXMgYW4gYXJndW1lbnRzIG9iamVjdCwgZmFsc2Ugb3RoZXJ3aXNlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmlzLmFyZ3MgPSBpcy5hcmd1bWVudHMgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgdmFyIGlzU3RhbmRhcmRBcmd1bWVudHMgPSB0b1N0ci5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgQXJndW1lbnRzXSc7XG4gIHZhciBpc09sZEFyZ3VtZW50cyA9ICFpcy5hcnJheSh2YWx1ZSkgJiYgaXMuYXJyYXlsaWtlKHZhbHVlKSAmJiBpcy5vYmplY3QodmFsdWUpICYmIGlzLmZuKHZhbHVlLmNhbGxlZSk7XG4gIHJldHVybiBpc1N0YW5kYXJkQXJndW1lbnRzIHx8IGlzT2xkQXJndW1lbnRzO1xufTtcblxuLyoqXG4gKiBUZXN0IGFycmF5LlxuICovXG5cbi8qKlxuICogaXMuYXJyYXlcbiAqIFRlc3QgaWYgJ3ZhbHVlJyBpcyBhbiBhcnJheS5cbiAqXG4gKiBAcGFyYW0ge01peGVkfSB2YWx1ZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGB2YWx1ZWAgaXMgYW4gYXJyYXksIGZhbHNlIG90aGVyd2lzZVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5pcy5hcnJheSA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiB0b1N0ci5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbn07XG5cbi8qKlxuICogaXMuYXJndW1lbnRzLmVtcHR5XG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgYW4gZW1wdHkgYXJndW1lbnRzIG9iamVjdC5cbiAqXG4gKiBAcGFyYW0ge01peGVkfSB2YWx1ZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGB2YWx1ZWAgaXMgYW4gZW1wdHkgYXJndW1lbnRzIG9iamVjdCwgZmFsc2Ugb3RoZXJ3aXNlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5pcy5hcmdzLmVtcHR5ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiBpcy5hcmdzKHZhbHVlKSAmJiB2YWx1ZS5sZW5ndGggPT09IDA7XG59O1xuXG4vKipcbiAqIGlzLmFycmF5LmVtcHR5XG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgYW4gZW1wdHkgYXJyYXkuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBgdmFsdWVgIGlzIGFuIGVtcHR5IGFycmF5LCBmYWxzZSBvdGhlcndpc2VcbiAqIEBhcGkgcHVibGljXG4gKi9cbmlzLmFycmF5LmVtcHR5ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiBpcy5hcnJheSh2YWx1ZSkgJiYgdmFsdWUubGVuZ3RoID09PSAwO1xufTtcblxuLyoqXG4gKiBpcy5hcnJheWxpa2VcbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBhbiBhcnJheWxpa2Ugb2JqZWN0LlxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgYHZhbHVlYCBpcyBhbiBhcmd1bWVudHMgb2JqZWN0LCBmYWxzZSBvdGhlcndpc2VcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuaXMuYXJyYXlsaWtlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiAhIXZhbHVlICYmICFpcy5ib29sKHZhbHVlKVxuICAgICYmIG93bnMuY2FsbCh2YWx1ZSwgJ2xlbmd0aCcpXG4gICAgJiYgaXNGaW5pdGUodmFsdWUubGVuZ3RoKVxuICAgICYmIGlzLm51bWJlcih2YWx1ZS5sZW5ndGgpXG4gICAgJiYgdmFsdWUubGVuZ3RoID49IDA7XG59O1xuXG4vKipcbiAqIFRlc3QgYm9vbGVhbi5cbiAqL1xuXG4vKipcbiAqIGlzLmJvb2xcbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBhIGJvb2xlYW4uXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBgdmFsdWVgIGlzIGEgYm9vbGVhbiwgZmFsc2Ugb3RoZXJ3aXNlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmlzLmJvb2wgPSBpc1snYm9vbGVhbiddID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiB0b1N0ci5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgQm9vbGVhbl0nO1xufTtcblxuLyoqXG4gKiBpcy5mYWxzZVxuICogVGVzdCBpZiBgdmFsdWVgIGlzIGZhbHNlLlxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgYHZhbHVlYCBpcyBmYWxzZSwgZmFsc2Ugb3RoZXJ3aXNlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmlzWydmYWxzZSddID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiBpcy5ib29sKHZhbHVlKSAmJiBCb29sZWFuKE51bWJlcih2YWx1ZSkpID09PSBmYWxzZTtcbn07XG5cbi8qKlxuICogaXMudHJ1ZVxuICogVGVzdCBpZiBgdmFsdWVgIGlzIHRydWUuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBgdmFsdWVgIGlzIHRydWUsIGZhbHNlIG90aGVyd2lzZVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5pc1sndHJ1ZSddID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiBpcy5ib29sKHZhbHVlKSAmJiBCb29sZWFuKE51bWJlcih2YWx1ZSkpID09PSB0cnVlO1xufTtcblxuLyoqXG4gKiBUZXN0IGRhdGUuXG4gKi9cblxuLyoqXG4gKiBpcy5kYXRlXG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgYSBkYXRlLlxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgYHZhbHVlYCBpcyBhIGRhdGUsIGZhbHNlIG90aGVyd2lzZVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5pcy5kYXRlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiB0b1N0ci5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgRGF0ZV0nO1xufTtcblxuLyoqXG4gKiBpcy5kYXRlLnZhbGlkXG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBkYXRlLlxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0cnVlIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBkYXRlLCBmYWxzZSBvdGhlcndpc2VcbiAqL1xuaXMuZGF0ZS52YWxpZCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICByZXR1cm4gaXMuZGF0ZSh2YWx1ZSkgJiYgIWlzTmFOKE51bWJlcih2YWx1ZSkpO1xufTtcblxuLyoqXG4gKiBUZXN0IGVsZW1lbnQuXG4gKi9cblxuLyoqXG4gKiBpcy5lbGVtZW50XG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgYW4gaHRtbCBlbGVtZW50LlxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgYHZhbHVlYCBpcyBhbiBIVE1MIEVsZW1lbnQsIGZhbHNlIG90aGVyd2lzZVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5pcy5lbGVtZW50ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPT0gdW5kZWZpbmVkXG4gICAgJiYgdHlwZW9mIEhUTUxFbGVtZW50ICE9PSAndW5kZWZpbmVkJ1xuICAgICYmIHZhbHVlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnRcbiAgICAmJiB2YWx1ZS5ub2RlVHlwZSA9PT0gMTtcbn07XG5cbi8qKlxuICogVGVzdCBlcnJvci5cbiAqL1xuXG4vKipcbiAqIGlzLmVycm9yXG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgYW4gZXJyb3Igb2JqZWN0LlxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgYHZhbHVlYCBpcyBhbiBlcnJvciBvYmplY3QsIGZhbHNlIG90aGVyd2lzZVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5pcy5lcnJvciA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICByZXR1cm4gdG9TdHIuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IEVycm9yXSc7XG59O1xuXG4vKipcbiAqIFRlc3QgZnVuY3Rpb24uXG4gKi9cblxuLyoqXG4gKiBpcy5mbiAvIGlzLmZ1bmN0aW9uIChkZXByZWNhdGVkKVxuICogVGVzdCBpZiBgdmFsdWVgIGlzIGEgZnVuY3Rpb24uXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBgdmFsdWVgIGlzIGEgZnVuY3Rpb24sIGZhbHNlIG90aGVyd2lzZVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5pcy5mbiA9IGlzWydmdW5jdGlvbiddID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHZhciBpc0FsZXJ0ID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgdmFsdWUgPT09IHdpbmRvdy5hbGVydDtcbiAgaWYgKGlzQWxlcnQpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICB2YXIgc3RyID0gdG9TdHIuY2FsbCh2YWx1ZSk7XG4gIHJldHVybiBzdHIgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXScgfHwgc3RyID09PSAnW29iamVjdCBHZW5lcmF0b3JGdW5jdGlvbl0nIHx8IHN0ciA9PT0gJ1tvYmplY3QgQXN5bmNGdW5jdGlvbl0nO1xufTtcblxuLyoqXG4gKiBUZXN0IG51bWJlci5cbiAqL1xuXG4vKipcbiAqIGlzLm51bWJlclxuICogVGVzdCBpZiBgdmFsdWVgIGlzIGEgbnVtYmVyLlxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgYHZhbHVlYCBpcyBhIG51bWJlciwgZmFsc2Ugb3RoZXJ3aXNlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmlzLm51bWJlciA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICByZXR1cm4gdG9TdHIuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IE51bWJlcl0nO1xufTtcblxuLyoqXG4gKiBpcy5pbmZpbml0ZVxuICogVGVzdCBpZiBgdmFsdWVgIGlzIHBvc2l0aXZlIG9yIG5lZ2F0aXZlIGluZmluaXR5LlxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgYHZhbHVlYCBpcyBwb3NpdGl2ZSBvciBuZWdhdGl2ZSBJbmZpbml0eSwgZmFsc2Ugb3RoZXJ3aXNlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5pcy5pbmZpbml0ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPT09IEluZmluaXR5IHx8IHZhbHVlID09PSAtSW5maW5pdHk7XG59O1xuXG4vKipcbiAqIGlzLmRlY2ltYWxcbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBhIGRlY2ltYWwgbnVtYmVyLlxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgYHZhbHVlYCBpcyBhIGRlY2ltYWwgbnVtYmVyLCBmYWxzZSBvdGhlcndpc2VcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuaXMuZGVjaW1hbCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICByZXR1cm4gaXMubnVtYmVyKHZhbHVlKSAmJiAhaXNBY3R1YWxOYU4odmFsdWUpICYmICFpcy5pbmZpbml0ZSh2YWx1ZSkgJiYgdmFsdWUgJSAxICE9PSAwO1xufTtcblxuLyoqXG4gKiBpcy5kaXZpc2libGVCeVxuICogVGVzdCBpZiBgdmFsdWVgIGlzIGRpdmlzaWJsZSBieSBgbmAuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEBwYXJhbSB7TnVtYmVyfSBuIGRpdmlkZW5kXG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGB2YWx1ZWAgaXMgZGl2aXNpYmxlIGJ5IGBuYCwgZmFsc2Ugb3RoZXJ3aXNlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmlzLmRpdmlzaWJsZUJ5ID0gZnVuY3Rpb24gKHZhbHVlLCBuKSB7XG4gIHZhciBpc0RpdmlkZW5kSW5maW5pdGUgPSBpcy5pbmZpbml0ZSh2YWx1ZSk7XG4gIHZhciBpc0Rpdmlzb3JJbmZpbml0ZSA9IGlzLmluZmluaXRlKG4pO1xuICB2YXIgaXNOb25aZXJvTnVtYmVyID0gaXMubnVtYmVyKHZhbHVlKSAmJiAhaXNBY3R1YWxOYU4odmFsdWUpICYmIGlzLm51bWJlcihuKSAmJiAhaXNBY3R1YWxOYU4obikgJiYgbiAhPT0gMDtcbiAgcmV0dXJuIGlzRGl2aWRlbmRJbmZpbml0ZSB8fCBpc0Rpdmlzb3JJbmZpbml0ZSB8fCAoaXNOb25aZXJvTnVtYmVyICYmIHZhbHVlICUgbiA9PT0gMCk7XG59O1xuXG4vKipcbiAqIGlzLmludGVnZXJcbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBhbiBpbnRlZ2VyLlxuICpcbiAqIEBwYXJhbSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGB2YWx1ZWAgaXMgYW4gaW50ZWdlciwgZmFsc2Ugb3RoZXJ3aXNlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmlzLmludGVnZXIgPSBpc1snaW50J10gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIGlzLm51bWJlcih2YWx1ZSkgJiYgIWlzQWN0dWFsTmFOKHZhbHVlKSAmJiB2YWx1ZSAlIDEgPT09IDA7XG59O1xuXG4vKipcbiAqIGlzLm1heGltdW1cbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBncmVhdGVyIHRoYW4gJ290aGVycycgdmFsdWVzLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSB2YWx1ZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcGFyYW0ge0FycmF5fSBvdGhlcnMgdmFsdWVzIHRvIGNvbXBhcmUgd2l0aFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBgdmFsdWVgIGlzIGdyZWF0ZXIgdGhhbiBgb3RoZXJzYCB2YWx1ZXNcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuaXMubWF4aW11bSA9IGZ1bmN0aW9uICh2YWx1ZSwgb3RoZXJzKSB7XG4gIGlmIChpc0FjdHVhbE5hTih2YWx1ZSkpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdOYU4gaXMgbm90IGEgdmFsaWQgdmFsdWUnKTtcbiAgfSBlbHNlIGlmICghaXMuYXJyYXlsaWtlKG90aGVycykpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdzZWNvbmQgYXJndW1lbnQgbXVzdCBiZSBhcnJheS1saWtlJyk7XG4gIH1cbiAgdmFyIGxlbiA9IG90aGVycy5sZW5ndGg7XG5cbiAgd2hpbGUgKC0tbGVuID49IDApIHtcbiAgICBpZiAodmFsdWUgPCBvdGhlcnNbbGVuXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcblxuLyoqXG4gKiBpcy5taW5pbXVtXG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgbGVzcyB0aGFuIGBvdGhlcnNgIHZhbHVlcy5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHBhcmFtIHtBcnJheX0gb3RoZXJzIHZhbHVlcyB0byBjb21wYXJlIHdpdGhcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgYHZhbHVlYCBpcyBsZXNzIHRoYW4gYG90aGVyc2AgdmFsdWVzXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmlzLm1pbmltdW0gPSBmdW5jdGlvbiAodmFsdWUsIG90aGVycykge1xuICBpZiAoaXNBY3R1YWxOYU4odmFsdWUpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignTmFOIGlzIG5vdCBhIHZhbGlkIHZhbHVlJyk7XG4gIH0gZWxzZSBpZiAoIWlzLmFycmF5bGlrZShvdGhlcnMpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignc2Vjb25kIGFyZ3VtZW50IG11c3QgYmUgYXJyYXktbGlrZScpO1xuICB9XG4gIHZhciBsZW4gPSBvdGhlcnMubGVuZ3RoO1xuXG4gIHdoaWxlICgtLWxlbiA+PSAwKSB7XG4gICAgaWYgKHZhbHVlID4gb3RoZXJzW2xlbl0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbi8qKlxuICogaXMubmFuXG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgbm90IGEgbnVtYmVyLlxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgYHZhbHVlYCBpcyBub3QgYSBudW1iZXIsIGZhbHNlIG90aGVyd2lzZVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5pcy5uYW4gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuICFpcy5udW1iZXIodmFsdWUpIHx8IHZhbHVlICE9PSB2YWx1ZTtcbn07XG5cbi8qKlxuICogaXMuZXZlblxuICogVGVzdCBpZiBgdmFsdWVgIGlzIGFuIGV2ZW4gbnVtYmVyLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSB2YWx1ZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGB2YWx1ZWAgaXMgYW4gZXZlbiBudW1iZXIsIGZhbHNlIG90aGVyd2lzZVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5pcy5ldmVuID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiBpcy5pbmZpbml0ZSh2YWx1ZSkgfHwgKGlzLm51bWJlcih2YWx1ZSkgJiYgdmFsdWUgPT09IHZhbHVlICYmIHZhbHVlICUgMiA9PT0gMCk7XG59O1xuXG4vKipcbiAqIGlzLm9kZFxuICogVGVzdCBpZiBgdmFsdWVgIGlzIGFuIG9kZCBudW1iZXIuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgYHZhbHVlYCBpcyBhbiBvZGQgbnVtYmVyLCBmYWxzZSBvdGhlcndpc2VcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuaXMub2RkID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiBpcy5pbmZpbml0ZSh2YWx1ZSkgfHwgKGlzLm51bWJlcih2YWx1ZSkgJiYgdmFsdWUgPT09IHZhbHVlICYmIHZhbHVlICUgMiAhPT0gMCk7XG59O1xuXG4vKipcbiAqIGlzLmdlXG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgZ3JlYXRlciB0aGFuIG9yIGVxdWFsIHRvIGBvdGhlcmAuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEBwYXJhbSB7TnVtYmVyfSBvdGhlciB2YWx1ZSB0byBjb21wYXJlIHdpdGhcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmlzLmdlID0gZnVuY3Rpb24gKHZhbHVlLCBvdGhlcikge1xuICBpZiAoaXNBY3R1YWxOYU4odmFsdWUpIHx8IGlzQWN0dWFsTmFOKG90aGVyKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ05hTiBpcyBub3QgYSB2YWxpZCB2YWx1ZScpO1xuICB9XG4gIHJldHVybiAhaXMuaW5maW5pdGUodmFsdWUpICYmICFpcy5pbmZpbml0ZShvdGhlcikgJiYgdmFsdWUgPj0gb3RoZXI7XG59O1xuXG4vKipcbiAqIGlzLmd0XG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgZ3JlYXRlciB0aGFuIGBvdGhlcmAuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEBwYXJhbSB7TnVtYmVyfSBvdGhlciB2YWx1ZSB0byBjb21wYXJlIHdpdGhcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmlzLmd0ID0gZnVuY3Rpb24gKHZhbHVlLCBvdGhlcikge1xuICBpZiAoaXNBY3R1YWxOYU4odmFsdWUpIHx8IGlzQWN0dWFsTmFOKG90aGVyKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ05hTiBpcyBub3QgYSB2YWxpZCB2YWx1ZScpO1xuICB9XG4gIHJldHVybiAhaXMuaW5maW5pdGUodmFsdWUpICYmICFpcy5pbmZpbml0ZShvdGhlcikgJiYgdmFsdWUgPiBvdGhlcjtcbn07XG5cbi8qKlxuICogaXMubGVcbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gYG90aGVyYC5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHBhcmFtIHtOdW1iZXJ9IG90aGVyIHZhbHVlIHRvIGNvbXBhcmUgd2l0aFxuICogQHJldHVybiB7Qm9vbGVhbn0gaWYgJ3ZhbHVlJyBpcyBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gJ290aGVyJ1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5pcy5sZSA9IGZ1bmN0aW9uICh2YWx1ZSwgb3RoZXIpIHtcbiAgaWYgKGlzQWN0dWFsTmFOKHZhbHVlKSB8fCBpc0FjdHVhbE5hTihvdGhlcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdOYU4gaXMgbm90IGEgdmFsaWQgdmFsdWUnKTtcbiAgfVxuICByZXR1cm4gIWlzLmluZmluaXRlKHZhbHVlKSAmJiAhaXMuaW5maW5pdGUob3RoZXIpICYmIHZhbHVlIDw9IG90aGVyO1xufTtcblxuLyoqXG4gKiBpcy5sdFxuICogVGVzdCBpZiBgdmFsdWVgIGlzIGxlc3MgdGhhbiBgb3RoZXJgLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSB2YWx1ZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcGFyYW0ge051bWJlcn0gb3RoZXIgdmFsdWUgdG8gY29tcGFyZSB3aXRoXG4gKiBAcmV0dXJuIHtCb29sZWFufSBpZiBgdmFsdWVgIGlzIGxlc3MgdGhhbiBgb3RoZXJgXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmlzLmx0ID0gZnVuY3Rpb24gKHZhbHVlLCBvdGhlcikge1xuICBpZiAoaXNBY3R1YWxOYU4odmFsdWUpIHx8IGlzQWN0dWFsTmFOKG90aGVyKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ05hTiBpcyBub3QgYSB2YWxpZCB2YWx1ZScpO1xuICB9XG4gIHJldHVybiAhaXMuaW5maW5pdGUodmFsdWUpICYmICFpcy5pbmZpbml0ZShvdGhlcikgJiYgdmFsdWUgPCBvdGhlcjtcbn07XG5cbi8qKlxuICogaXMud2l0aGluXG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgd2l0aGluIGBzdGFydGAgYW5kIGBmaW5pc2hgLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSB2YWx1ZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcGFyYW0ge051bWJlcn0gc3RhcnQgbG93ZXIgYm91bmRcbiAqIEBwYXJhbSB7TnVtYmVyfSBmaW5pc2ggdXBwZXIgYm91bmRcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgJ3ZhbHVlJyBpcyBpcyB3aXRoaW4gJ3N0YXJ0JyBhbmQgJ2ZpbmlzaCdcbiAqIEBhcGkgcHVibGljXG4gKi9cbmlzLndpdGhpbiA9IGZ1bmN0aW9uICh2YWx1ZSwgc3RhcnQsIGZpbmlzaCkge1xuICBpZiAoaXNBY3R1YWxOYU4odmFsdWUpIHx8IGlzQWN0dWFsTmFOKHN0YXJ0KSB8fCBpc0FjdHVhbE5hTihmaW5pc2gpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignTmFOIGlzIG5vdCBhIHZhbGlkIHZhbHVlJyk7XG4gIH0gZWxzZSBpZiAoIWlzLm51bWJlcih2YWx1ZSkgfHwgIWlzLm51bWJlcihzdGFydCkgfHwgIWlzLm51bWJlcihmaW5pc2gpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignYWxsIGFyZ3VtZW50cyBtdXN0IGJlIG51bWJlcnMnKTtcbiAgfVxuICB2YXIgaXNBbnlJbmZpbml0ZSA9IGlzLmluZmluaXRlKHZhbHVlKSB8fCBpcy5pbmZpbml0ZShzdGFydCkgfHwgaXMuaW5maW5pdGUoZmluaXNoKTtcbiAgcmV0dXJuIGlzQW55SW5maW5pdGUgfHwgKHZhbHVlID49IHN0YXJ0ICYmIHZhbHVlIDw9IGZpbmlzaCk7XG59O1xuXG4vKipcbiAqIFRlc3Qgb2JqZWN0LlxuICovXG5cbi8qKlxuICogaXMub2JqZWN0XG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgYW4gb2JqZWN0LlxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgYHZhbHVlYCBpcyBhbiBvYmplY3QsIGZhbHNlIG90aGVyd2lzZVxuICogQGFwaSBwdWJsaWNcbiAqL1xuaXMub2JqZWN0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiB0b1N0ci5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgT2JqZWN0XSc7XG59O1xuXG4vKipcbiAqIGlzLnByaW1pdGl2ZVxuICogVGVzdCBpZiBgdmFsdWVgIGlzIGEgcHJpbWl0aXZlLlxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgYHZhbHVlYCBpcyBhIHByaW1pdGl2ZSwgZmFsc2Ugb3RoZXJ3aXNlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5pcy5wcmltaXRpdmUgPSBmdW5jdGlvbiBpc1ByaW1pdGl2ZSh2YWx1ZSkge1xuICBpZiAoIXZhbHVlKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgfHwgaXMub2JqZWN0KHZhbHVlKSB8fCBpcy5mbih2YWx1ZSkgfHwgaXMuYXJyYXkodmFsdWUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiB0cnVlO1xufTtcblxuLyoqXG4gKiBpcy5oYXNoXG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgYSBoYXNoIC0gYSBwbGFpbiBvYmplY3QgbGl0ZXJhbC5cbiAqXG4gKiBAcGFyYW0ge01peGVkfSB2YWx1ZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGB2YWx1ZWAgaXMgYSBoYXNoLCBmYWxzZSBvdGhlcndpc2VcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuaXMuaGFzaCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICByZXR1cm4gaXMub2JqZWN0KHZhbHVlKSAmJiB2YWx1ZS5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0ICYmICF2YWx1ZS5ub2RlVHlwZSAmJiAhdmFsdWUuc2V0SW50ZXJ2YWw7XG59O1xuXG4vKipcbiAqIFRlc3QgcmVnZXhwLlxuICovXG5cbi8qKlxuICogaXMucmVnZXhwXG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgYSByZWd1bGFyIGV4cHJlc3Npb24uXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBgdmFsdWVgIGlzIGEgcmVnZXhwLCBmYWxzZSBvdGhlcndpc2VcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuaXMucmVnZXhwID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiB0b1N0ci5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgUmVnRXhwXSc7XG59O1xuXG4vKipcbiAqIFRlc3Qgc3RyaW5nLlxuICovXG5cbi8qKlxuICogaXMuc3RyaW5nXG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgYSBzdHJpbmcuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiAndmFsdWUnIGlzIGEgc3RyaW5nLCBmYWxzZSBvdGhlcndpc2VcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuaXMuc3RyaW5nID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiB0b1N0ci5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgU3RyaW5nXSc7XG59O1xuXG4vKipcbiAqIFRlc3QgYmFzZTY0IHN0cmluZy5cbiAqL1xuXG4vKipcbiAqIGlzLmJhc2U2NFxuICogVGVzdCBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgYmFzZTY0IGVuY29kZWQgc3RyaW5nLlxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgJ3ZhbHVlJyBpcyBhIGJhc2U2NCBlbmNvZGVkIHN0cmluZywgZmFsc2Ugb3RoZXJ3aXNlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmlzLmJhc2U2NCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICByZXR1cm4gaXMuc3RyaW5nKHZhbHVlKSAmJiAoIXZhbHVlLmxlbmd0aCB8fCBiYXNlNjRSZWdleC50ZXN0KHZhbHVlKSk7XG59O1xuXG4vKipcbiAqIFRlc3QgYmFzZTY0IHN0cmluZy5cbiAqL1xuXG4vKipcbiAqIGlzLmhleFxuICogVGVzdCBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgaGV4IGVuY29kZWQgc3RyaW5nLlxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgJ3ZhbHVlJyBpcyBhIGhleCBlbmNvZGVkIHN0cmluZywgZmFsc2Ugb3RoZXJ3aXNlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmlzLmhleCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICByZXR1cm4gaXMuc3RyaW5nKHZhbHVlKSAmJiAoIXZhbHVlLmxlbmd0aCB8fCBoZXhSZWdleC50ZXN0KHZhbHVlKSk7XG59O1xuXG4vKipcbiAqIGlzLnN5bWJvbFxuICogVGVzdCBpZiBgdmFsdWVgIGlzIGFuIEVTNiBTeW1ib2xcbiAqXG4gKiBAcGFyYW0ge01peGVkfSB2YWx1ZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGB2YWx1ZWAgaXMgYSBTeW1ib2wsIGZhbHNlIG90aGVyaXNlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmlzLnN5bWJvbCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiB0b1N0ci5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgU3ltYm9sXScgJiYgdHlwZW9mIHN5bWJvbFZhbHVlT2YuY2FsbCh2YWx1ZSkgPT09ICdzeW1ib2wnO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBpcztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9pcy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaXMgPSByZXF1aXJlKCcuL2lzJyk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gd2Fsa25TZXQoIG9iaiwgcGF0aCwgdmFsdWUsIHN0YWNrICkge1xyXG4gICAgaWYgKCBpcy5zdHJpbmcocGF0aCkgKVxyXG4gICAgICAgIHBhdGggPSBwYXRoLnNwbGl0KCcuJyk7XHJcbiAgICBpZiAoICFwYXRoLmxlbmd0aCApXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgZWxzZSBpZiAoIHBhdGgubGVuZ3RoID09IDEgKVxyXG4gICAgICAgIHJldHVybiBvYmpbIHBhdGhbIDAgXSBdID0gc3RhY2tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gWyAuLi4oIG9ialsgcGF0aFsgMCBdIF0gfHwgW10gKSwgdmFsdWUgXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB2YWx1ZTtcclxuICAgIGVsc2VcclxuICAgICAgICByZXR1cm4gd2Fsa25TZXQoXHJcbiAgICAgICAgICAgIG9ialsgcGF0aFsgMCBdIF0gPVxyXG4gICAgICAgICAgICAgICAgb2JqWyBwYXRoWyAwIF0gXSB8fCB7fSxcclxuICAgICAgICAgICAgcGF0aC5zbGljZSgxKSxcclxuICAgICAgICAgICAgdmFsdWUsIHN0YWNrXHJcbiAgICAgICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHdhbGtuR2V0KCBvYmosIHBhdGgsIGlzS2V5ICkge1xyXG4gICAgaWYgKCBpcy5zdHJpbmcocGF0aCkgKVxyXG4gICAgICAgIHBhdGggPSBwYXRoLnNwbGl0KCcuJyk7XHJcbiAgICByZXR1cm4gcGF0aC5sZW5ndGhcclxuICAgICAgICAgICA/IG9ialsgcGF0aFsgMCBdIF0gJiYgd2Fsa25HZXQob2JqWyBwYXRoWyAwIF0gXSwgcGF0aC5zbGljZSgxKSlcclxuICAgICAgICAgICA6IG9iajtcclxufVxyXG5cclxuLy9AdG9kb1xyXG5leHBvcnQgZnVuY3Rpb24ga2V5V2Fsa25TZXQoIG9iaiwgcGF0aCwgdmFsdWUsIHN0YWNrICkge1xyXG4gICAgaWYgKCBpcy5zdHJpbmcocGF0aCkgKVxyXG4gICAgICAgIHBhdGggPSBwYXRoLnNwbGl0KC8oXFw+fFxcLykvaWcpLmZpbHRlcih2ID0+ICggdiAhPT0gJz4nICYmIHYgKSk7XHJcbiAgICByZXR1cm4gd2Fsa25TZXQob2JqLCBwYXRoLCB2YWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBrZXlXYWxrbkdldCggb2JqLCBwYXRoLCBpc0tleSApIHtcclxuICAgIGlmICggaXMuc3RyaW5nKHBhdGgpIClcclxuICAgICAgICBwYXRoID0gcGF0aC5zcGxpdCgvKFxcPnxcXC8pL2lnKS5maWx0ZXIodiA9PiAoIHYgIT09ICc+JyAmJiB2ICkpO1xyXG4gICAgcmV0dXJuIHBhdGgubGVuZ3RoXHJcbiAgICAgICAgICAgPyBvYmpbIHBhdGhbIDAgXSBdICYmIHdhbGtuR2V0KG9ialsgcGF0aFsgMCBdIF0sIHBhdGguc2xpY2UoMSkpXHJcbiAgICAgICAgICAgOiBvYmo7XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbHMvdXRpbHMuanMiLCIvKlxuICogQ29weXJpZ2h0IChjKSAgMjAxOCBXaXNlIFdpbGQgV2ViIC5cbiAqXG4gKiAgTUlUIExpY2Vuc2VcbiAqICBcbiAqICBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiAgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqICB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiAgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiAgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqICBcbiAqICBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcbiAqICBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICogIFxuICogIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqICBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqICBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqICBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiAgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqICBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuICogIFNPRlRXQVJFLlxuICogIFxuICogQGF1dGhvciA6IE5hdGhhbmFlbCBCcmF1blxuICogQGNvbnRhY3QgOiBjYWlwaWxhYnNAZ21haWwuY29tXG4gKi9cbnZhciBpcyA9IHJlcXVpcmUoJ2lzJyk7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbWl0dGVyIHtcbiAgICBfZXZlbnRzID0ge307XG4gICAgXG4gICAgb24oIGV2dCwgY2IgKSB7XG4gICAgICAgIGlmICggIWlzLnN0cmluZyhldnQpICYmIGV2dCApXG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMoZXZ0KS5mb3JFYWNoKGsgPT4gdGhpcy5vbihrLCBldnRba10pKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX2V2ZW50c1tldnRdID0gdGhpcy5fZXZlbnRzW2V2dF0gfHwgW107XG4gICAgICAgIHRoaXMuX2V2ZW50c1tldnRdLnB1c2goY2IpO1xuICAgICAgICBcbiAgICB9XG4gICAgXG4gICAgdW4oIGV2dCwgY2IgKSB7XG4gICAgICAgIGlmICggIWlzLnN0cmluZyhldnQpICYmIGV2dCApXG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMoZXZ0KS5mb3JFYWNoKGsgPT4gdGhpcy51bihrLCBldnRba10pKTtcbiAgICAgICAgXG4gICAgICAgIGlmICggIXRoaXMuX2V2ZW50c1tldnRdICkgcmV0dXJuO1xuICAgICAgICB2YXIgaSA9IHRoaXMuX2V2ZW50c1tldnRdLmluZGV4T2YoY2IpO1xuICAgICAgICB0aGlzLl9ldmVudHNbZXZ0XS5zcGxpY2UoaSwgMSk7XG4gICAgfVxuICAgIFxuICAgIGVtaXQoIGV2dCwgLi4uYXJneiApIHtcbiAgICAgICAgaWYgKCAhdGhpcy5fZXZlbnRzW2V2dF0gKSByZXR1cm47XG4gICAgICAgIGxldCBsaXN0cyA9IFsuLi50aGlzLl9ldmVudHNbZXZ0XV07XG4gICAgICAgIFxuICAgICAgICBmb3IgKCB2YXIgaSA9IDA7IGkgPCBsaXN0cy5sZW5ndGg7IGkrKyApXG4gICAgICAgICAgICBsaXN0c1tpXSguLi5hcmd6KVxuICAgIH1cbiAgICBcbiAgICBhZGRMaXN0ZW5lcigpIHtcbiAgICAgICAgdGhpcy5vbiguLi5hcmd1bWVudHMpO1xuICAgIH1cbiAgICBcbiAgICByZW1vdmVMaXN0ZW5lcigpIHtcbiAgICAgICAgdGhpcy51biguLi5hcmd1bWVudHMpO1xuICAgIH1cbiAgICBcbiAgICByZW1vdmVBbGxMaXN0ZW5lcnMoKSB7XG4gICAgICAgIHRoaXMuX2V2ZW50cyA9IHt9O1xuICAgIH1cbiAgICBcbiAgICBvbmNlKCBldnQsIGNiICkge1xuICAgICAgICBsZXQgZm47XG4gICAgICAgIHRoaXMub24oZXZ0LCBmbiA9ICggLi4uYXJneiApID0+IHtcbiAgICAgICAgICAgIHRoaXMudW4oZXZ0LCBmbik7XG4gICAgICAgICAgICBjYiguLi5hcmd6KVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgXG4gICAgXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWxzL0VtaXR0ZXIuanMiLCIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vbGliL2luZGV4Jyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc2hvcnRpZC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbnZhciBhbHBoYWJldCA9IHJlcXVpcmUoJy4vYWxwaGFiZXQnKTtcbnZhciBlbmNvZGUgPSByZXF1aXJlKCcuL2VuY29kZScpO1xudmFyIGRlY29kZSA9IHJlcXVpcmUoJy4vZGVjb2RlJyk7XG52YXIgYnVpbGQgPSByZXF1aXJlKCcuL2J1aWxkJyk7XG52YXIgaXNWYWxpZCA9IHJlcXVpcmUoJy4vaXMtdmFsaWQnKTtcblxuLy8gaWYgeW91IGFyZSB1c2luZyBjbHVzdGVyIG9yIG11bHRpcGxlIHNlcnZlcnMgdXNlIHRoaXMgdG8gbWFrZSBlYWNoIGluc3RhbmNlXG4vLyBoYXMgYSB1bmlxdWUgdmFsdWUgZm9yIHdvcmtlclxuLy8gTm90ZTogSSBkb24ndCBrbm93IGlmIHRoaXMgaXMgYXV0b21hdGljYWxseSBzZXQgd2hlbiB1c2luZyB0aGlyZFxuLy8gcGFydHkgY2x1c3RlciBzb2x1dGlvbnMgc3VjaCBhcyBwbTIuXG52YXIgY2x1c3RlcldvcmtlcklkID0gcmVxdWlyZSgnLi91dGlsL2NsdXN0ZXItd29ya2VyLWlkJykgfHwgMDtcblxuLyoqXG4gKiBTZXQgdGhlIHNlZWQuXG4gKiBIaWdobHkgcmVjb21tZW5kZWQgaWYgeW91IGRvbid0IHdhbnQgcGVvcGxlIHRvIHRyeSB0byBmaWd1cmUgb3V0IHlvdXIgaWQgc2NoZW1hLlxuICogZXhwb3NlZCBhcyBzaG9ydGlkLnNlZWQoaW50KVxuICogQHBhcmFtIHNlZWQgSW50ZWdlciB2YWx1ZSB0byBzZWVkIHRoZSByYW5kb20gYWxwaGFiZXQuICBBTFdBWVMgVVNFIFRIRSBTQU1FIFNFRUQgb3IgeW91IG1pZ2h0IGdldCBvdmVybGFwcy5cbiAqL1xuZnVuY3Rpb24gc2VlZChzZWVkVmFsdWUpIHtcbiAgICBhbHBoYWJldC5zZWVkKHNlZWRWYWx1ZSk7XG4gICAgcmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vKipcbiAqIFNldCB0aGUgY2x1c3RlciB3b3JrZXIgb3IgbWFjaGluZSBpZFxuICogZXhwb3NlZCBhcyBzaG9ydGlkLndvcmtlcihpbnQpXG4gKiBAcGFyYW0gd29ya2VySWQgd29ya2VyIG11c3QgYmUgcG9zaXRpdmUgaW50ZWdlci4gIE51bWJlciBsZXNzIHRoYW4gMTYgaXMgcmVjb21tZW5kZWQuXG4gKiByZXR1cm5zIHNob3J0aWQgbW9kdWxlIHNvIGl0IGNhbiBiZSBjaGFpbmVkLlxuICovXG5mdW5jdGlvbiB3b3JrZXIod29ya2VySWQpIHtcbiAgICBjbHVzdGVyV29ya2VySWQgPSB3b3JrZXJJZDtcbiAgICByZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8qKlxuICpcbiAqIHNldHMgbmV3IGNoYXJhY3RlcnMgdG8gdXNlIGluIHRoZSBhbHBoYWJldFxuICogcmV0dXJucyB0aGUgc2h1ZmZsZWQgYWxwaGFiZXRcbiAqL1xuZnVuY3Rpb24gY2hhcmFjdGVycyhuZXdDaGFyYWN0ZXJzKSB7XG4gICAgaWYgKG5ld0NoYXJhY3RlcnMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBhbHBoYWJldC5jaGFyYWN0ZXJzKG5ld0NoYXJhY3RlcnMpO1xuICAgIH1cblxuICAgIHJldHVybiBhbHBoYWJldC5zaHVmZmxlZCgpO1xufVxuXG4vKipcbiAqIEdlbmVyYXRlIHVuaXF1ZSBpZFxuICogUmV0dXJucyBzdHJpbmcgaWRcbiAqL1xuZnVuY3Rpb24gZ2VuZXJhdGUoKSB7XG4gIHJldHVybiBidWlsZChjbHVzdGVyV29ya2VySWQpO1xufVxuXG4vLyBFeHBvcnQgYWxsIG90aGVyIGZ1bmN0aW9ucyBhcyBwcm9wZXJ0aWVzIG9mIHRoZSBnZW5lcmF0ZSBmdW5jdGlvblxubW9kdWxlLmV4cG9ydHMgPSBnZW5lcmF0ZTtcbm1vZHVsZS5leHBvcnRzLmdlbmVyYXRlID0gZ2VuZXJhdGU7XG5tb2R1bGUuZXhwb3J0cy5zZWVkID0gc2VlZDtcbm1vZHVsZS5leHBvcnRzLndvcmtlciA9IHdvcmtlcjtcbm1vZHVsZS5leHBvcnRzLmNoYXJhY3RlcnMgPSBjaGFyYWN0ZXJzO1xubW9kdWxlLmV4cG9ydHMuZGVjb2RlID0gZGVjb2RlO1xubW9kdWxlLmV4cG9ydHMuaXNWYWxpZCA9IGlzVmFsaWQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc2hvcnRpZC9saWIvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgcmFuZG9tRnJvbVNlZWQgPSByZXF1aXJlKCcuL3JhbmRvbS9yYW5kb20tZnJvbS1zZWVkJyk7XG5cbnZhciBPUklHSU5BTCA9ICcwMTIzNDU2Nzg5YWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXpBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWl8tJztcbnZhciBhbHBoYWJldDtcbnZhciBwcmV2aW91c1NlZWQ7XG5cbnZhciBzaHVmZmxlZDtcblxuZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgc2h1ZmZsZWQgPSBmYWxzZTtcbn1cblxuZnVuY3Rpb24gc2V0Q2hhcmFjdGVycyhfYWxwaGFiZXRfKSB7XG4gICAgaWYgKCFfYWxwaGFiZXRfKSB7XG4gICAgICAgIGlmIChhbHBoYWJldCAhPT0gT1JJR0lOQUwpIHtcbiAgICAgICAgICAgIGFscGhhYmV0ID0gT1JJR0lOQUw7XG4gICAgICAgICAgICByZXNldCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoX2FscGhhYmV0XyA9PT0gYWxwaGFiZXQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChfYWxwaGFiZXRfLmxlbmd0aCAhPT0gT1JJR0lOQUwubGVuZ3RoKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQ3VzdG9tIGFscGhhYmV0IGZvciBzaG9ydGlkIG11c3QgYmUgJyArIE9SSUdJTkFMLmxlbmd0aCArICcgdW5pcXVlIGNoYXJhY3RlcnMuIFlvdSBzdWJtaXR0ZWQgJyArIF9hbHBoYWJldF8ubGVuZ3RoICsgJyBjaGFyYWN0ZXJzOiAnICsgX2FscGhhYmV0Xyk7XG4gICAgfVxuXG4gICAgdmFyIHVuaXF1ZSA9IF9hbHBoYWJldF8uc3BsaXQoJycpLmZpbHRlcihmdW5jdGlvbihpdGVtLCBpbmQsIGFycil7XG4gICAgICAgcmV0dXJuIGluZCAhPT0gYXJyLmxhc3RJbmRleE9mKGl0ZW0pO1xuICAgIH0pO1xuXG4gICAgaWYgKHVuaXF1ZS5sZW5ndGgpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDdXN0b20gYWxwaGFiZXQgZm9yIHNob3J0aWQgbXVzdCBiZSAnICsgT1JJR0lOQUwubGVuZ3RoICsgJyB1bmlxdWUgY2hhcmFjdGVycy4gVGhlc2UgY2hhcmFjdGVycyB3ZXJlIG5vdCB1bmlxdWU6ICcgKyB1bmlxdWUuam9pbignLCAnKSk7XG4gICAgfVxuXG4gICAgYWxwaGFiZXQgPSBfYWxwaGFiZXRfO1xuICAgIHJlc2V0KCk7XG59XG5cbmZ1bmN0aW9uIGNoYXJhY3RlcnMoX2FscGhhYmV0Xykge1xuICAgIHNldENoYXJhY3RlcnMoX2FscGhhYmV0Xyk7XG4gICAgcmV0dXJuIGFscGhhYmV0O1xufVxuXG5mdW5jdGlvbiBzZXRTZWVkKHNlZWQpIHtcbiAgICByYW5kb21Gcm9tU2VlZC5zZWVkKHNlZWQpO1xuICAgIGlmIChwcmV2aW91c1NlZWQgIT09IHNlZWQpIHtcbiAgICAgICAgcmVzZXQoKTtcbiAgICAgICAgcHJldmlvdXNTZWVkID0gc2VlZDtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHNodWZmbGUoKSB7XG4gICAgaWYgKCFhbHBoYWJldCkge1xuICAgICAgICBzZXRDaGFyYWN0ZXJzKE9SSUdJTkFMKTtcbiAgICB9XG5cbiAgICB2YXIgc291cmNlQXJyYXkgPSBhbHBoYWJldC5zcGxpdCgnJyk7XG4gICAgdmFyIHRhcmdldEFycmF5ID0gW107XG4gICAgdmFyIHIgPSByYW5kb21Gcm9tU2VlZC5uZXh0VmFsdWUoKTtcbiAgICB2YXIgY2hhcmFjdGVySW5kZXg7XG5cbiAgICB3aGlsZSAoc291cmNlQXJyYXkubGVuZ3RoID4gMCkge1xuICAgICAgICByID0gcmFuZG9tRnJvbVNlZWQubmV4dFZhbHVlKCk7XG4gICAgICAgIGNoYXJhY3RlckluZGV4ID0gTWF0aC5mbG9vcihyICogc291cmNlQXJyYXkubGVuZ3RoKTtcbiAgICAgICAgdGFyZ2V0QXJyYXkucHVzaChzb3VyY2VBcnJheS5zcGxpY2UoY2hhcmFjdGVySW5kZXgsIDEpWzBdKTtcbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldEFycmF5LmpvaW4oJycpO1xufVxuXG5mdW5jdGlvbiBnZXRTaHVmZmxlZCgpIHtcbiAgICBpZiAoc2h1ZmZsZWQpIHtcbiAgICAgICAgcmV0dXJuIHNodWZmbGVkO1xuICAgIH1cbiAgICBzaHVmZmxlZCA9IHNodWZmbGUoKTtcbiAgICByZXR1cm4gc2h1ZmZsZWQ7XG59XG5cbi8qKlxuICogbG9va3VwIHNodWZmbGVkIGxldHRlclxuICogQHBhcmFtIGluZGV4XG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBsb29rdXAoaW5kZXgpIHtcbiAgICB2YXIgYWxwaGFiZXRTaHVmZmxlZCA9IGdldFNodWZmbGVkKCk7XG4gICAgcmV0dXJuIGFscGhhYmV0U2h1ZmZsZWRbaW5kZXhdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBjaGFyYWN0ZXJzOiBjaGFyYWN0ZXJzLFxuICAgIHNlZWQ6IHNldFNlZWQsXG4gICAgbG9va3VwOiBsb29rdXAsXG4gICAgc2h1ZmZsZWQ6IGdldFNodWZmbGVkXG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Nob3J0aWQvbGliL2FscGhhYmV0LmpzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuLy8gRm91bmQgdGhpcyBzZWVkLWJhc2VkIHJhbmRvbSBnZW5lcmF0b3Igc29tZXdoZXJlXG4vLyBCYXNlZCBvbiBUaGUgQ2VudHJhbCBSYW5kb21pemVyIDEuMyAoQykgMTk5NyBieSBQYXVsIEhvdWxlIChob3VsZUBtc2MuY29ybmVsbC5lZHUpXG5cbnZhciBzZWVkID0gMTtcblxuLyoqXG4gKiByZXR1cm4gYSByYW5kb20gbnVtYmVyIGJhc2VkIG9uIGEgc2VlZFxuICogQHBhcmFtIHNlZWRcbiAqIEByZXR1cm5zIHtudW1iZXJ9XG4gKi9cbmZ1bmN0aW9uIGdldE5leHRWYWx1ZSgpIHtcbiAgICBzZWVkID0gKHNlZWQgKiA5MzAxICsgNDkyOTcpICUgMjMzMjgwO1xuICAgIHJldHVybiBzZWVkLygyMzMyODAuMCk7XG59XG5cbmZ1bmN0aW9uIHNldFNlZWQoX3NlZWRfKSB7XG4gICAgc2VlZCA9IF9zZWVkXztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgbmV4dFZhbHVlOiBnZXROZXh0VmFsdWUsXG4gICAgc2VlZDogc2V0U2VlZFxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zaG9ydGlkL2xpYi9yYW5kb20vcmFuZG9tLWZyb20tc2VlZC5qc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbnZhciByYW5kb21CeXRlID0gcmVxdWlyZSgnLi9yYW5kb20vcmFuZG9tLWJ5dGUnKTtcblxuZnVuY3Rpb24gZW5jb2RlKGxvb2t1cCwgbnVtYmVyKSB7XG4gICAgdmFyIGxvb3BDb3VudGVyID0gMDtcbiAgICB2YXIgZG9uZTtcblxuICAgIHZhciBzdHIgPSAnJztcblxuICAgIHdoaWxlICghZG9uZSkge1xuICAgICAgICBzdHIgPSBzdHIgKyBsb29rdXAoICggKG51bWJlciA+PiAoNCAqIGxvb3BDb3VudGVyKSkgJiAweDBmICkgfCByYW5kb21CeXRlKCkgKTtcbiAgICAgICAgZG9uZSA9IG51bWJlciA8IChNYXRoLnBvdygxNiwgbG9vcENvdW50ZXIgKyAxICkgKTtcbiAgICAgICAgbG9vcENvdW50ZXIrKztcbiAgICB9XG4gICAgcmV0dXJuIHN0cjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBlbmNvZGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc2hvcnRpZC9saWIvZW5jb2RlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbnZhciBjcnlwdG8gPSB0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JyAmJiAod2luZG93LmNyeXB0byB8fCB3aW5kb3cubXNDcnlwdG8pOyAvLyBJRSAxMSB1c2VzIHdpbmRvdy5tc0NyeXB0b1xuXG5mdW5jdGlvbiByYW5kb21CeXRlKCkge1xuICAgIGlmICghY3J5cHRvIHx8ICFjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyNTYpICYgMHgzMDtcbiAgICB9XG4gICAgdmFyIGRlc3QgPSBuZXcgVWludDhBcnJheSgxKTtcbiAgICBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKGRlc3QpO1xuICAgIHJldHVybiBkZXN0WzBdICYgMHgzMDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSByYW5kb21CeXRlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Nob3J0aWQvbGliL3JhbmRvbS9yYW5kb20tYnl0ZS1icm93c2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG52YXIgYWxwaGFiZXQgPSByZXF1aXJlKCcuL2FscGhhYmV0Jyk7XG5cbi8qKlxuICogRGVjb2RlIHRoZSBpZCB0byBnZXQgdGhlIHZlcnNpb24gYW5kIHdvcmtlclxuICogTWFpbmx5IGZvciBkZWJ1Z2dpbmcgYW5kIHRlc3RpbmcuXG4gKiBAcGFyYW0gaWQgLSB0aGUgc2hvcnRpZC1nZW5lcmF0ZWQgaWQuXG4gKi9cbmZ1bmN0aW9uIGRlY29kZShpZCkge1xuICAgIHZhciBjaGFyYWN0ZXJzID0gYWxwaGFiZXQuc2h1ZmZsZWQoKTtcbiAgICByZXR1cm4ge1xuICAgICAgICB2ZXJzaW9uOiBjaGFyYWN0ZXJzLmluZGV4T2YoaWQuc3Vic3RyKDAsIDEpKSAmIDB4MGYsXG4gICAgICAgIHdvcmtlcjogY2hhcmFjdGVycy5pbmRleE9mKGlkLnN1YnN0cigxLCAxKSkgJiAweDBmXG4gICAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkZWNvZGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc2hvcnRpZC9saWIvZGVjb2RlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbnZhciBlbmNvZGUgPSByZXF1aXJlKCcuL2VuY29kZScpO1xudmFyIGFscGhhYmV0ID0gcmVxdWlyZSgnLi9hbHBoYWJldCcpO1xuXG4vLyBJZ25vcmUgYWxsIG1pbGxpc2Vjb25kcyBiZWZvcmUgYSBjZXJ0YWluIHRpbWUgdG8gcmVkdWNlIHRoZSBzaXplIG9mIHRoZSBkYXRlIGVudHJvcHkgd2l0aG91dCBzYWNyaWZpY2luZyB1bmlxdWVuZXNzLlxuLy8gVGhpcyBudW1iZXIgc2hvdWxkIGJlIHVwZGF0ZWQgZXZlcnkgeWVhciBvciBzbyB0byBrZWVwIHRoZSBnZW5lcmF0ZWQgaWQgc2hvcnQuXG4vLyBUbyByZWdlbmVyYXRlIGBuZXcgRGF0ZSgpIC0gMGAgYW5kIGJ1bXAgdGhlIHZlcnNpb24uIEFsd2F5cyBidW1wIHRoZSB2ZXJzaW9uIVxudmFyIFJFRFVDRV9USU1FID0gMTQ1OTcwNzYwNjUxODtcblxuLy8gZG9uJ3QgY2hhbmdlIHVubGVzcyB3ZSBjaGFuZ2UgdGhlIGFsZ29zIG9yIFJFRFVDRV9USU1FXG4vLyBtdXN0IGJlIGFuIGludGVnZXIgYW5kIGxlc3MgdGhhbiAxNlxudmFyIHZlcnNpb24gPSA2O1xuXG4vLyBDb3VudGVyIGlzIHVzZWQgd2hlbiBzaG9ydGlkIGlzIGNhbGxlZCBtdWx0aXBsZSB0aW1lcyBpbiBvbmUgc2Vjb25kLlxudmFyIGNvdW50ZXI7XG5cbi8vIFJlbWVtYmVyIHRoZSBsYXN0IHRpbWUgc2hvcnRpZCB3YXMgY2FsbGVkIGluIGNhc2UgY291bnRlciBpcyBuZWVkZWQuXG52YXIgcHJldmlvdXNTZWNvbmRzO1xuXG4vKipcbiAqIEdlbmVyYXRlIHVuaXF1ZSBpZFxuICogUmV0dXJucyBzdHJpbmcgaWRcbiAqL1xuZnVuY3Rpb24gYnVpbGQoY2x1c3RlcldvcmtlcklkKSB7XG5cbiAgICB2YXIgc3RyID0gJyc7XG5cbiAgICB2YXIgc2Vjb25kcyA9IE1hdGguZmxvb3IoKERhdGUubm93KCkgLSBSRURVQ0VfVElNRSkgKiAwLjAwMSk7XG5cbiAgICBpZiAoc2Vjb25kcyA9PT0gcHJldmlvdXNTZWNvbmRzKSB7XG4gICAgICAgIGNvdW50ZXIrKztcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb3VudGVyID0gMDtcbiAgICAgICAgcHJldmlvdXNTZWNvbmRzID0gc2Vjb25kcztcbiAgICB9XG5cbiAgICBzdHIgPSBzdHIgKyBlbmNvZGUoYWxwaGFiZXQubG9va3VwLCB2ZXJzaW9uKTtcbiAgICBzdHIgPSBzdHIgKyBlbmNvZGUoYWxwaGFiZXQubG9va3VwLCBjbHVzdGVyV29ya2VySWQpO1xuICAgIGlmIChjb3VudGVyID4gMCkge1xuICAgICAgICBzdHIgPSBzdHIgKyBlbmNvZGUoYWxwaGFiZXQubG9va3VwLCBjb3VudGVyKTtcbiAgICB9XG4gICAgc3RyID0gc3RyICsgZW5jb2RlKGFscGhhYmV0Lmxvb2t1cCwgc2Vjb25kcyk7XG5cbiAgICByZXR1cm4gc3RyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJ1aWxkO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Nob3J0aWQvbGliL2J1aWxkLmpzXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG52YXIgYWxwaGFiZXQgPSByZXF1aXJlKCcuL2FscGhhYmV0Jyk7XG5cbmZ1bmN0aW9uIGlzU2hvcnRJZChpZCkge1xuICAgIGlmICghaWQgfHwgdHlwZW9mIGlkICE9PSAnc3RyaW5nJyB8fCBpZC5sZW5ndGggPCA2ICkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIGNoYXJhY3RlcnMgPSBhbHBoYWJldC5jaGFyYWN0ZXJzKCk7XG4gICAgdmFyIGxlbiA9IGlkLmxlbmd0aDtcbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgbGVuO2krKykge1xuICAgICAgICBpZiAoY2hhcmFjdGVycy5pbmRleE9mKGlkW2ldKSA9PT0gLTEpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc1Nob3J0SWQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc2hvcnRpZC9saWIvaXMtdmFsaWQuanNcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSAwO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Nob3J0aWQvbGliL3V0aWwvY2x1c3Rlci13b3JrZXItaWQtYnJvd3Nlci5qc1xuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcbiAqIENvcHlyaWdodCAoYykgIDIwMTggV2lzZSBXaWxkIFdlYiAuXG4gKlxuICogIE1JVCBMaWNlbnNlXG4gKlxuICogIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqICBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiAgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqICBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqICBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqICBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcbiAqICBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqICBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiAgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiAgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiAgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiAgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcbiAqICBTT0ZUV0FSRS5cbiAqXG4gKiBAYXV0aG9yIDogTmF0aGFuYWVsIEJyYXVuXG4gKiBAY29udGFjdCA6IGNhaXBpbGFic0BnbWFpbC5jb21cbiAqL1xuXG52YXIgaXMgICAgICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vdXRpbHMvaXMnKSxcbiAgICBTY29wZSAgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9TY29wZScpLFxuICAgIHsga2V5V2Fsa25TZXQsIGtleVdhbGtuR2V0IH0gPSByZXF1aXJlKCcuL3V0aWxzL3V0aWxzJyksXG4gICAgRXZlbnRFbWl0dGVyICAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vdXRpbHMvRW1pdHRlcicpLFxuICAgIFRhc2tTZXF1ZW5jZXIgICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL3V0aWxzL1Rhc2tTZXF1ZW5jZXInKSxcbiAgICBzaG9ydGlkICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnc2hvcnRpZCcpLFxuICAgIG9ialByb3RvICAgICAgICAgICAgICAgICAgICAgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Yoe30pO1xuXG5jbGFzcyBTdG9yZSBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG5cdC8vc3RhdGljIHVzZSAgICAgICAgICAgICAgICAgID0gW107Ly8gb3ZlcnJpZGFibGUgbGlzdCBvZiBzb3VyY2Ugc3RvcmVzXG5cdHN0YXRpYyBmb2xsb3c7Ly8gb3ZlcnJpZGFibGUgbGlzdCBvZiBzdG9yZSB0aGF0IHdpbGwgYWxsb3cgcHVzaCBpZiB1cGRhdGVkXG5cdHN0YXRpYyByZXF1aXJlO1xuXHRzdGF0aWMgc3RhdGljU2NvcGUgICA9IG5ldyBTY29wZSh7fSwgeyBpZDogXCJzdGF0aWNcIiB9KTtcblx0c3RhdGljIHN0YXRlICAgICAgICAgPSB1bmRlZmluZWQ7Ly8gZGVmYXVsdCBzdGF0ZVxuXHQvKipcblx0ICogaWYgcmV0YWluIGdvZXMgdG8gMCA6XG5cdCAqIGZhbHNlIHRvIG5vdCBkZXN0cm95LFxuXHQgKiAwIHRvIHN5bmMgYXV0byBkZXN0cm95XG5cdCAqIE1zIHRvIGF1dG9kZXN0cm95IGFmdGVyIHRtIG1zIGlmIG5vIHJldGFpbiBoYXMgYmVlbiBjYWxsZWRcblx0ICogQHR5cGUge2Jvb2xlYW58SW50fVxuXHQgKi9cblx0c3RhdGljIHBlcnNpc3RlbmNlVG0gPSBmYWxzZTtcblx0XG5cdC8qKlxuXHQgKiBDb25zdHJ1Y3Rvciwgd2lsbCBidWlsZCBhIHJlc2NvcGUgc3RvcmVcblx0ICpcblx0ICogKHNjb3BlLCB7cmVxdWlyZSx1c2UsYXBwbHksc3RhdGUsIGRhdGF9KVxuXHQgKiAoc2NvcGUpXG5cdCAqXG5cdCAqIEBwYXJhbSBzY29wZSB7b2JqZWN0fSBzY29wZSB3aGVyZSB0byBmaW5kIHRoZSBvdGhlciBzdG9yZXMgKGRlZmF1bHQgOiBzdGF0aWNcblx0ICogICAgIHN0YXRpY1Njb3BlIClcblx0ICogQHBhcmFtIGtleXMge0FycmF5fSAocGFzc2VkIHRvIFN0b3JlOjptYXApIEV4IDogW1wic2Vzc2lvblwiLCBcIm90aGVyTmFtZWRTdG9yZTprZXlcIixcblx0ICogICAgIG90aGVyU3RvcmUuYXMoXCJvdGhlcktleVwiKV1cblx0ICovXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdFx0dmFyIGFyZ3ogICAgICAgICA9IFsuLi5hcmd1bWVudHNdLFxuXHRcdCAgICBfc3RhdGljICAgICAgPSB0aGlzLmNvbnN0cnVjdG9yLFxuXHRcdCAgICBzY29wZSAgICAgICAgPSBhcmd6WzBdIGluc3RhbmNlb2YgU2NvcGVcblx0XHQgICAgICAgICAgICAgICAgICAgPyBhcmd6LnNoaWZ0KClcblx0XHQgICAgICAgICAgICAgICAgICAgOiBfc3RhdGljLnNjb3BlID8gU2NvcGUuZ2V0U2NvcGUoX3N0YXRpYy5zY29wZSlcblx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogaXMuc3RyaW5nKGFyZ3pbMF0pXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gU2NvcGUuZ2V0U2NvcGUoYXJnei5zaGlmdCgpKVxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF9zdGF0aWMuc3RhdGljU2NvcGUsXG5cdFx0ICAgIGNmZyAgICAgICAgICA9IGFyZ3pbMF0gJiYgIWlzLmFycmF5KGFyZ3pbMF0pICYmICFpcy5zdHJpbmcoYXJnelswXSlcblx0XHQgICAgICAgICAgICAgICAgICAgPyBhcmd6LnNoaWZ0KClcblx0XHQgICAgICAgICAgICAgICAgICAgOiB7fSxcblx0XHQgICAgdGFza1F1ZXVlICAgID0gaXMuYXJyYXkoYXJnelswXSkgPyBhcmd6LnNoaWZ0KCkgOiBudWxsLFxuXHRcdCAgICBuYW1lICAgICAgICAgPSBjZmcubmFtZSB8fCBfc3RhdGljLm5hbWUsXG5cdFx0ICAgIHdhdGNocyAgICAgICA9IGNmZy51c2UgfHwgW10sXG5cdFx0ICAgIGFwcGx5ICAgICAgICA9IGNmZy5hcHBseSB8fCBudWxsLFxuXHRcdCAgICBpbml0aWFsU3RhdGUgPSBfc3RhdGljLnN0YXRlIHx8IF9zdGF0aWMuaW5pdGlhbFN0YXRlIHx8IF9zdGF0aWMuZGVmYXVsdFN0YXRlLFxuXHRcdCAgICBhcHBsaWVkO1xuXHRcdFxuXHRcdHRoaXMuX3VpZCA9IGNmZy5fdWlkIHx8IHNob3J0aWQuZ2VuZXJhdGUoKTtcblx0XHRcblx0XHR0aGlzLl9fcmV0YWlucyAgICA9IHsgYWxsOiAwIH07XG5cdFx0dGhpcy5fX2xvY2tzICAgICAgPSB7IGFsbDogMCB9O1xuXHRcdHRoaXMuX29uU3RhYmlsaXplID0gW107XG5cdFx0XG5cdFx0Ly8gYXV0b0Rlc3Ryb3lUbVxuXHRcdHRoaXMuX2F1dG9EZXN0cm95ICAgPSAhIXRoaXMuX3BlcnNpc3RlbmNlVG07XG5cdFx0dGhpcy5fcGVyc2lzdGVuY2VUbSA9IGNmZy5wZXJzaXN0ZW5jZVRtIHx8IF9zdGF0aWMucGVyc2lzdGVuY2VUbSB8fCAoY2ZnLmF1dG9EZXN0cm95IHx8IF9zdGF0aWMuYXV0b0Rlc3Ryb3kpICYmIDU7XG5cdFx0dGhpcy5fY2ZnICAgICAgICAgICA9IGNmZztcblx0XHRpZiAoIGNmZyAmJiBjZmcub24gKSB7XG5cdFx0XHR0aGlzLm9uKGNmZy5vbik7XG5cdFx0fVxuXHRcdFxuXHRcdHRoaXMubmFtZSA9IG5hbWU7XG5cdFx0XG5cdFx0aWYgKCBzY29wZS5zdG9yZXMgKSB7XG5cdFx0XHR0aGlzLnNjb3BlT2JqID0gc2NvcGU7XG5cdFx0XHR0aGlzLnNjb3BlICAgID0gc2NvcGUuc3RvcmVzO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdHRoaXMuc2NvcGVPYmogPSBuZXcgU2NvcGUoc2NvcGUpO1xuXHRcdFx0dGhpcy5zY29wZSAgICA9IHNjb3BlLnN0b3Jlcztcblx0XHR9XG5cdFx0XG5cdFx0Ly8gc3RhbmRhcmRpemVkIHNjb3BlIGFjY2Vzc1xuXHRcdHRoaXMuJHNjb3BlICAgID0gdGhpcy5zY29wZU9iajtcblx0XHR0aGlzLiRzdG9yZXMgICA9IHRoaXMuc2NvcGVPYmouc3RvcmVzO1xuXHRcdHRoaXMuJGFjdGlvbnMgID0gdGhpcy5zY29wZU9iai5hY3Rpb25zO1xuXHRcdHRoaXMuJGRpc3BhdGNoID0gdGhpcy5zY29wZU9iai5kaXNwYXRjaC5iaW5kKHRoaXMuc2NvcGVPYmopO1xuXHRcdFxuXHRcdHRoaXMuX3JldiAgICAgPSB0aGlzLmNvbnN0cnVjdG9yLl9yZXYgfHwgMDtcblx0XHR0aGlzLl9yZXZzICAgID0ge307XG5cdFx0dGhpcy5zdG9yZXMgICA9IHt9O1xuXHRcdHRoaXMuX3JlcXVpcmUgPSBbXTtcblx0XHR0aGlzLl9zb3VyY2VzID0gW25hbWVdO1xuXHRcdFxuXHRcdGlmICggaXMuYXJyYXkoX3N0YXRpYy51c2UpICkge1xuXHRcdFx0dGhpcy5fdXNlID0gWy4uLndhdGNocywgLi4uKF9zdGF0aWMudXNlIHx8IFtdKS5tYXAoXG5cdFx0XHRcdGtleSA9PiB7XG5cdFx0XHRcdFx0bGV0IHJlZiA9IGtleS5tYXRjaCgvXihcXCE/KShbXlxcOl0qKSg/OlxcOiguKikpPyQvKTtcblx0XHRcdFx0XHRpZiAoIHJlZlsxXSApIHtcblx0XHRcdFx0XHRcdGxldCByZWYyID0gcmVmWzJdLnNwbGl0KCcuJyk7XG5cdFx0XHRcdFx0XHR0aGlzLl9yZXF1aXJlLnB1c2gocmVmWzNdIHx8IHJlZjJbcmVmMi5sZW5ndGggLSAxXSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybiByZWZbMl07XG5cdFx0XHRcdH1cblx0XHRcdCldO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdHRoaXMuX3VzZSA9IFsuLi53YXRjaHMsIC4uLihcblx0XHRcdFx0X3N0YXRpYy51c2UgPyBPYmplY3Qua2V5cyhfc3RhdGljLnVzZSlcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAubWFwKFxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAga2V5ID0+IHtcblx0XHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgbGV0IHJlZiA9IGtleS5tYXRjaCgvXihcXCE/KSguKikkLyk7XG5cdFx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgIHJlZlsxXSAmJiB0aGlzLl9yZXF1aXJlLnB1c2goX3N0YXRpYy51c2Vba2V5XSk7XG5cdFx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgIHJldHVybiByZWZbMl0gKyAoKF9zdGF0aWMudXNlW2tleV0gPT09IHRydWUpXG5cdFx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAnJ1xuXHRcdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJzonICsgX3N0YXRpYy51c2Vba2V5XSk7XG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICB9XG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgKSA6IFtdXG5cdFx0XHQpXTtcblx0XHR9XG5cdFx0XG5cdFx0aWYgKCBfc3RhdGljLnJlcXVpcmUgKVxuXHRcdFx0dGhpcy5fcmVxdWlyZS5wdXNoKC4uLl9zdGF0aWMucmVxdWlyZSk7XG5cdFx0aWYgKCBjZmcucmVxdWlyZSApXG5cdFx0XHR0aGlzLl9yZXF1aXJlLnB1c2goLi4uY2ZnLnJlcXVpcmUpO1xuXHRcdFxuXHRcdHRoaXMuX2ZvbGxvd2VycyA9IFtdO1xuXHRcdHRoaXMuX2NoYW5nZXNTVyA9IGluaXRpYWxTdGF0ZSB8fCB7fTtcblx0XHR0aGlzLnN0YXRlICAgICAgPSBpbml0aWFsU3RhdGUgJiYge307XG5cdFx0aWYgKCBhcHBseSApXG5cdFx0XHR0aGlzLmFwcGx5ID0gYXBwbHk7XG5cdFx0XG5cdFx0LyoqXG5cdFx0ICogSW5pdGlhbCBzdGF0ZSBpc24ndCBmdWxseSBpbml0aWFsaXplZCAoIGNoaWxkcyBjb25zdHJ1Y3RvcnMgY2FuIHNldCBpdCApXG5cdFx0ICogU2NvcGUgYmFzZWQgaW5zdGFuY2UgaGF2ZSB0YXNrUXVldWUgdG8gZGVsYXkgaW5pdCBzeW5jaHJvbm91c2x5LCBpZiBub3Rcblx0XHQgKiBwcmVzZW50IHdlIHVzZSBzZXRUaW1lb3V0XG5cdFx0ICovXG5cdFx0aWYgKCB0YXNrUXVldWUgKSB7XG5cdFx0XHR0YXNrUXVldWUucHVzaCh0aGlzLl9hZnRlckNvbnN0cnVjdG9yLmJpbmQodGhpcykpXG5cdFx0fVxuXHRcdGVsc2Vcblx0XHRcdHNldFRpbWVvdXQodGhpcy5fYWZ0ZXJDb25zdHJ1Y3Rvci5iaW5kKHRoaXMpKVxuXHR9XG5cdFxuXHQvKipcblx0ICogR2V0IHRoZSBpbmNvbWluZyBzdGF0ZSAoIGZvciBpbW1lZGlhdGUgc3RhdGUgcmVsYXRpdmUgYWN0aW9ucyApXG5cdCAqIEByZXR1cm5zIHt7fXwqfVxuXHQgKi9cblx0Z2V0IG5leHRTdGF0ZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5fY2hhbmdlc1NXICYmIHsgLi4udGhpcy5zdGF0ZSwgLi4udGhpcy5fY2hhbmdlc1NXIH0gfHwgdGhpcy5zdGF0ZTtcblx0fVxuXHRcblx0X2FmdGVyQ29uc3RydWN0b3IoKSB7XG5cdFx0bGV0IGNmZyAgICAgICAgICA9IHRoaXMuX2NmZyxcblx0XHQgICAgX3N0YXRpYyAgICAgID0gdGhpcy5jb25zdHJ1Y3Rvcixcblx0XHQgICAgc25hcHNob3QgICAgID0gdGhpcy5yZXN0b3JlKHVuZGVmaW5lZCwgdHJ1ZSksXG5cdFx0ICAgIGluaXRpYWxTdGF0ZSA9IHRoaXMuc3RhdGUsXG5cdFx0ICAgIGluaXRpYWxEYXRhICA9IHRoaXMuZGF0YSxcblx0XHQgICAgYXBwbGllZDtcblx0XHR7XG5cdFx0XHRcblx0XHRcdGlmICggaW5pdGlhbERhdGEgKVxuXHRcdFx0XHR0aGlzLmRhdGEgPSBpbml0aWFsRGF0YTtcblx0XHRcdGVsc2UgaWYgKCBfc3RhdGljLmRhdGEgIT09IHVuZGVmaW5lZCApXG5cdFx0XHRcdHRoaXMuZGF0YSA9IHsgLi4uX3N0YXRpYy5kYXRhIH07XG5cdFx0XHRlbHNlIGlmICggY2ZnLmhhc093blByb3BlcnR5KFwiZGF0YVwiKSApXG5cdFx0XHRcdHRoaXMuZGF0YSA9IGNmZy5kYXRhO1xuXHRcdFx0XG5cdFx0XHRpZiAoIGNmZy5oYXNPd25Qcm9wZXJ0eShcInN0YXRlXCIpICYmIGNmZy5zdGF0ZSAhPT0gdW5kZWZpbmVkIClcblx0XHRcdFx0aW5pdGlhbFN0YXRlID0geyAuLi5pbml0aWFsU3RhdGUsIC4uLmNmZy5zdGF0ZSB9O1xuXHRcdFx0XG5cdFx0XHRpZiAoIHRoaXMuZGF0YSA9PT0gdW5kZWZpbmVkICkge1xuXHRcdFx0XHRpZiAoIGluaXRpYWxTdGF0ZSB8fCB0aGlzLl91c2UubGVuZ3RoICkgey8vIHN5bmMgYXBwbHlcblx0XHRcdFx0XHR0aGlzLl9jaGFuZ2VzU1cgPSB7XG5cdFx0XHRcdFx0XHQuLi50aGlzLl9jaGFuZ2VzU1csXG5cdFx0XHRcdFx0XHQuLi4oaW5pdGlhbFN0YXRlIHx8IHt9KSxcblx0XHRcdFx0XHRcdC4uLnRoaXMuJHNjb3BlLm1hcCh0aGlzLCB0aGlzLl91c2UpXG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0XHR0aGlzLnN0YXRlICAgICAgPSB7fTtcblx0XHRcdFx0XHRpZiAoIHRoaXMuc2hvdWxkQXBwbHkodGhpcy5fY2hhbmdlc1NXKSAmJiB0aGlzLmRhdGEgPT09IHVuZGVmaW5lZCApIHtcblx0XHRcdFx0XHRcdHRoaXMuZGF0YSAgICAgICA9IHRoaXMuYXBwbHkodGhpcy5kYXRhLCB0aGlzLl9jaGFuZ2VzU1csIHRoaXMuX2NoYW5nZXNTVyk7XG5cdFx0XHRcdFx0XHRhcHBsaWVkICAgICAgICAgPSB0cnVlO1xuXHRcdFx0XHRcdFx0dGhpcy5zdGF0ZSAgICAgID0gdGhpcy5fY2hhbmdlc1NXO1xuXHRcdFx0XHRcdFx0dGhpcy5fY2hhbmdlc1NXID0ge307XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0YXBwbGllZCAgICAgICAgID0gdHJ1ZTtcblx0XHRcdFx0dGhpcy5zdGF0ZSAgICAgID0gey8vIGFzc3VtZSB0aGlzIHN0YXRlIGlzIHN5bmMgd2l0aCBpbml0aWFsIGRhdGFcblx0XHRcdFx0XHQuLi50aGlzLl9jaGFuZ2VzU1csXG5cdFx0XHRcdFx0Li4uKGluaXRpYWxTdGF0ZSB8fCB7fSksXG5cdFx0XHRcdFx0Li4udGhpcy4kc2NvcGUubWFwKHRoaXMsIHRoaXMuX3VzZSlcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLl9jaGFuZ2VzU1cgPSB7fTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKCAodGhpcy5kYXRhICE9PSB1bmRlZmluZWQgfHwgYXBwbGllZCkgJiYgIXRoaXMuX19sb2Nrcy5hbGwgKSB7XG5cdFx0XHR0aGlzLl9zdGFibGUgPSB0cnVlO1xuXHRcdFx0dGhpcy5fcmV2Kys7XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0dGhpcy5fc3RhYmxlID0gZmFsc2U7XG5cdFx0XHRpZiAoICFfc3RhdGljLm1hbmFnZWQgJiYgIXRoaXMuc3RhdGUgJiYgKCF0aGlzLl91c2UgfHwgIXRoaXMuX3VzZS5sZW5ndGgpICkge1xuXHRcdFx0XHRjb25zb2xlLndhcm4oXCJSZVNjb3BlIHN0b3JlICdcIiwgdGhpcy5uYW1lLCBcIicgaGF2ZSBubyBpbml0aWFsIGRhdGEsIHN0YXRlIG9yIHVzZS4gSXQgY2FuJ3Qgc3RhYmlsaXplLi4uXCIpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHQhdGhpcy5fc3RhYmxlICYmIHRoaXMuZW1pdCgndW5zdGFibGUnLCB0aGlzLnN0YXRlKTtcblx0XHRcblx0fVxuXHRcblx0LyoqXG5cdCAqIE92ZXJyaWRhYmxlIG1ldGhvZCB0byBrbm93IGlmIGEgZGF0YSBjaGFuZ2Ugc2hvdWxkIGJlIHByb3BhZyB0byB0aGUgbGlzdGVuaW5nXG5cdCAqIHN0b3JlcyAmIGNvbXBvbmVudHNcblx0ICovXG5cdHNob3VsZFByb3BhZyggbkRhdGFzICkge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cdFxuXHRoYXNEYXRhQ2hhbmdlKCBuRGF0YXMgKSB7XG5cdFx0dmFyIF9zdGF0aWMgPSB0aGlzLmNvbnN0cnVjdG9yLCByLFxuXHRcdCAgICBjRGF0YXMgID0gdGhpcy5kYXRhO1xuXHRcdHIgICAgICAgICAgID0gIWNEYXRhcyAmJiBuRGF0YXMgfHwgY0RhdGFzICE9PSBuRGF0YXM7XG5cdFx0IXIgJiYgY0RhdGFzICYmIE9iamVjdC5rZXlzKGNEYXRhcykuZm9yRWFjaChcblx0XHRcdCgga2V5ICkgPT4ge1xuXHRcdFx0XHRyID0gciB8fCAobkRhdGFzXG5cdFx0XHRcdCAgICAgICAgICA/IGNEYXRhc1trZXldICE9PSBuRGF0YXNba2V5XVxuXHRcdFx0XHQgICAgICAgICAgOiBjRGF0YXMgJiYgY0RhdGFzW2tleV0pXG5cdFx0XHR9XG5cdFx0KTtcblx0XHQhciAmJiBuRGF0YXMgJiYgT2JqZWN0LmtleXMobkRhdGFzKS5mb3JFYWNoKFxuXHRcdFx0KCBrZXkgKSA9PiB7XG5cdFx0XHRcdHIgPSByIHx8IChuRGF0YXNcblx0XHRcdFx0ICAgICAgICAgID8gY0RhdGFzW2tleV0gIT09IG5EYXRhc1trZXldXG5cdFx0XHRcdCAgICAgICAgICA6IGNEYXRhcyAmJiBjRGF0YXNba2V5XSlcblx0XHRcdH1cblx0XHQpO1xuXHRcdHJldHVybiByO1xuXHR9XG5cdFxuXHQvKipcblx0ICogT3ZlcnJpZGFibGUgbWV0aG9kIHRvIGtub3cgaWYgYSBzdGF0ZSBjaGFuZ2Ugc2hvdWxkIGJlIGFwcGxpZWRcblx0ICovXG5cdHNob3VsZEFwcGx5KCBzdGF0ZSA9IHRoaXMuc3RhdGUgKSB7XG5cdFx0dmFyIF9zdGF0aWMgPSB0aGlzLmNvbnN0cnVjdG9yO1xuXHRcdFxuXHRcdHJldHVybiAoXG5cdFx0XHQhIXRoaXMuaXNDb21wbGV0ZShzdGF0ZSlcblx0XHQpICYmIChpcy5hcnJheShfc3RhdGljLmZvbGxvdylcblx0XHQgICAgICA/IF9zdGF0aWMuZm9sbG93XG5cdFx0ICAgICAgICAgICAgICAgLnJlZHVjZSgoIHIsIGkgKSA9PiAociB8fCBzdGF0ZSAmJiBzdGF0ZVtpXSksIGZhbHNlKVxuXHRcdCAgICAgIDogX3N0YXRpYy5mb2xsb3dcblx0XHQgICAgICAgID8gT2JqZWN0LmtleXMoX3N0YXRpYy5mb2xsb3cpXG5cdFx0ICAgICAgICAgICAgICAgIC5yZWR1Y2UoKCByLCBpICkgPT4gKFxuXHRcdFx0ICAgICAgICAgICAgICAgIHJcblx0XHRcdCAgICAgICAgICAgICAgICB8fCBzdGF0ZSAmJiBpcy5mbihfc3RhdGljLmZvbGxvd1tpXSkgJiYgX3N0YXRpYy5mb2xsb3dbaV0uY2FsbCh0aGlzLCBzdGF0ZVtpXSlcblx0XHRcdCAgICAgICAgICAgICAgICB8fCBfc3RhdGljLmZvbGxvd1tpXSAmJiBzdGF0ZVtpXSAhPT0gdGhpcy5zdGF0ZVtpXVxuXHRcdCAgICAgICAgICAgICAgICApLCBmYWxzZSkgOiB0cnVlXG5cdFx0KTtcblx0fVxuXHRcblx0LyoqXG5cdCAqIE92ZXJyaWRhYmxlIGFwcGxpZXIgLyByZW1hcHBlclxuXHQgKiBJZiBzdGF0ZSBvciBsYXN0UHVibGljU3RhdGUgYXJlIHNpbXBsZSBoYXNoIG1hcHMgYXBwbHkgd2lsbCByZXR1cm4gey4uLmRhdGEsXG5cdCAqIC4uLnN0YXRlfSBpZiBub3QgaXQgd2lsbCByZXR1cm4gdGhlIGxhc3QgcHJpdmF0ZSBzdGF0ZVxuXHQgKiBAcGFyYW0gZGF0YVxuXHQgKiBAcGFyYW0gc3RhdGVcblx0ICogQHJldHVybnMgeyp9XG5cdCAqL1xuXHRhcHBseSggZGF0YSwgc3RhdGUsIGNoYW5nZXMgKSB7XG5cdFx0c3RhdGUgPSBzdGF0ZSB8fCB0aGlzLnN0YXRlO1xuXHRcdFxuXHRcdGlmICggdGhpcy5yZWZpbmUgKVxuXHRcdFx0cmV0dXJuIHRoaXMucmVmaW5lKC4uLmFyZ3VtZW50cyk7XG5cdFx0XG5cdFx0aWYgKCAhZGF0YSB8fCBkYXRhLl9fcHJvdG9fXyAhPT0gb2JqUHJvdG8gfHwgc3RhdGUuX19wcm90b19fICE9PSBvYmpQcm90byApXG5cdFx0XHRyZXR1cm4gc3RhdGU7XG5cdFx0ZWxzZVxuXHRcdFx0cmV0dXJuIHsgLi4uZGF0YSwgLi4uc3RhdGUgfVxuXHR9XG5cdFxuXHQvKipcblx0ICogQGRlcHJlY2lhdGVkXG5cdCAqIEBwYXJhbSBkYXRhXG5cdCAqIEBwYXJhbSBzdGF0ZVxuXHQgKiBAcGFyYW0gY2hhbmdlc1xuXHQgKiBAcmV0dXJucyB7Kn1cblx0ICovXG5cdHJlZmluZSggZGF0YSwgc3RhdGUsIGNoYW5nZXMgKSB7XG5cdFx0c3RhdGUgPSBzdGF0ZSB8fCB0aGlzLnN0YXRlO1xuXHRcdFxuXHRcdGlmICggIWRhdGEgfHwgZGF0YS5fX3Byb3RvX18gIT09IG9ialByb3RvIHx8IHN0YXRlLl9fcHJvdG9fXyAhPT0gb2JqUHJvdG8gKVxuXHRcdFx0cmV0dXJuIHN0YXRlO1xuXHRcdGVsc2Vcblx0XHRcdHJldHVybiB7IC4uLmRhdGEsIC4uLnN0YXRlIH1cblx0fVxuXHRcblx0LyoqXG5cdCAqIERlYm91bmNlIHRoaXMgc3RvcmUgcHJvcGFnYXRpb24gKCAmIHJlZHVjaW5nIClcblx0ICogQHBhcmFtIGNiXG5cdCAqL1xuXHRzdGFiaWxpemUoIGNiICkge1xuXHRcdGNiICYmIHRoaXMub25jZSgnc3RhYmxlJywgY2IpO1xuXHRcdHRoaXMuX3N0YWJsZSAmJiB0aGlzLmVtaXQoJ3Vuc3RhYmxlJywgdGhpcy5zdGF0ZSwgdGhpcy5kYXRhKTtcblx0XHRcblx0XHR0aGlzLl9zdGFibGUgPSBmYWxzZTtcblx0XHRcblx0XHRpZiAoIHRoaXMuX3N0YWJpbGl6ZXIgKVxuXHRcdFx0cmV0dXJuO1xuXHRcdFxuXHRcdHRoaXMuX3N0YWJpbGl6ZXIgPSBUYXNrU2VxdWVuY2VyLnB1c2hUYXNrKHRoaXMsICdwdXNoU3RhdGUnKTtcblx0fVxuXHRcblx0cmV0cmlldmUoIHBhdGgsIGkgPSAwLCBvYmogPSB0aGlzLmRhdGEgKSB7XG5cdFx0cGF0aCA9IGlzLnN0cmluZyhwYXRoKSA/IHBhdGguc3BsaXQoJy4nKSA6IHBhdGg7XG5cdFx0cmV0dXJuICFvYmogfHwgIXBhdGggfHwgIXBhdGgubGVuZ3RoXG5cdFx0ICAgICAgID8gb2JqXG5cdFx0ICAgICAgIDogcGF0aC5sZW5ndGggPT0gaSArIDFcblx0XHQgICAgICAgICA/IG9ialtwYXRoW2ldXVxuXHRcdCAgICAgICAgIDogdGhpcy5yZXRyaWV2ZShwYXRoLCBpICsgMSwgb2JqW3BhdGhbaV1dKTtcblx0fVxuXHRcblx0ZGlzcGF0Y2goIGFjdGlvbiwgLi4uYXJneiApIHtcblx0XHR0aGlzLnNjb3BlT2JqLmRpc3BhdGNoKGFjdGlvbiwgLi4uYXJneik7XG5cdH1cblx0XG5cdHRyaWdnZXIoIGFjdGlvbiwgLi4uYXJneiApIHtcblx0XHRsZXQgeyBhY3Rpb25zIH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXHRcdGlmICggYWN0aW9ucyAmJiBhY3Rpb25zW2FjdGlvbl0gKSB7XG5cdFx0XHRsZXQgbnMgPSBhY3Rpb25zW2FjdGlvbl0uY2FsbCh0aGlzLCAuLi5hcmd6KTtcblx0XHRcdG5zICYmIHRoaXMuc2V0U3RhdGUobnMpO1xuXHRcdH1cblx0fVxuXHRcblx0LyoqXG5cdCAqIFB1bGwgc3RvcmVzIGluIHRoZSBwcml2YXRlIHN0YXRlXG5cdCAqIEBwYXJhbSBzdG9yZXMgIHtBcnJheX0gKHBhc3NlZCB0byBTdG9yZTo6bWFwKSBFeCA6IFtcInNlc3Npb25cIixcblx0ICogICAgIFwib3RoZXJOYW1lZFN0b3JlOmtleVwiLCBvdGhlclN0b3JlLmFzKFwib3RoZXJLZXlcIildXG5cdCAqL1xuXHRwdWxsKCBzdG9yZXMsIGRvV2FpdCwgb3JpZ2luICkge1xuXHRcdGxldCBpbml0aWFsT3V0cHV0cyA9IHRoaXMuc2NvcGVPYmoubWFwKHRoaXMsIHN0b3Jlcyk7XG5cdFx0aWYgKCBkb1dhaXQgKSB7XG5cdFx0XHR0aGlzLndhaXQoKTtcblx0XHRcdHN0b3Jlcy5mb3JFYWNoKCggcyApID0+IHRoaXMuc2NvcGVbc10gJiYgdGhpcy53YWl0KHRoaXMuc2NvcGVbc10pKTtcblx0XHRcdHRoaXMucmVsZWFzZSgpO1xuXHRcdH1cblx0XHRyZXR1cm4gaW5pdGlhbE91dHB1dHM7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBTZXQgJiBQdXNoIHRoZSByZXN1bHQgZGF0YSB0byBmb2xsb3dlcnMgaWYgc3RhYmxlXG5cdCAqIEBwYXJhbSBjYlxuXHQgKi9cblx0cHVzaCggZGF0YSwgZm9yY2UsIGNiICkge1xuXHRcdGNiICAgID0gZm9yY2UgPT09IHRydWUgPyBjYiA6IGZvcmNlO1xuXHRcdGZvcmNlID0gZm9yY2UgPT09IHRydWU7XG5cdFx0aWYgKCAhZm9yY2UgJiZcblx0XHRcdChcblx0XHRcdFx0IXRoaXMuaGFzRGF0YUNoYW5nZShkYXRhKVxuXHRcdFx0KVxuXHRcdCkge1xuXHRcdFx0Y2IgJiYgY2IoKTtcblx0XHRcdGlmICggIXRoaXMuX19sb2Nrcy5hbGwgKSB7XG5cdFx0XHRcdGxldCBzdGFibGUgICA9IHRoaXMuX3N0YWJsZTtcblx0XHRcdFx0dGhpcy5fc3RhYmxlID0gdHJ1ZTtcblx0XHRcdFx0IXN0YWJsZSAmJiB0aGlzLmVtaXQoJ3N0YWJsZScsIHRoaXMuc3RhdGUsIHRoaXMuZGF0YSk7XG5cdFx0XHRcdHRoaXMuX3N0YWJpbGl6ZXIgPSBudWxsO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRcblx0XHR0aGlzLmRhdGEgPSBkYXRhO1xuXHRcdHRoaXMud2FpdCgpO1xuXHRcdHRoaXMucmVsZWFzZShjYik7XG5cdFx0XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBDYWxsIHRoZSBhcHBseSBmbiB1c2luZyB0aGUgY3VycmVudCBhY2N1bXVsYXRlZCBzdGF0ZSB1cGRhdGUgdGhlbiwgcHVzaCB0aGVcblx0ICogcmVzdWx0aW5nIGRhdGEgaWYgc3RhYmxlXG5cdCAqIEBwYXJhbSBmb3JjZVxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cblx0ICovXG5cdHB1c2hTdGF0ZSggZm9yY2UgKSB7XG5cdFx0XG5cdFx0aWYgKCAhZm9yY2UgJiYgIXRoaXMuX2NoYW5nZXNTVyAmJiB0aGlzLmRhdGEgKVxuXHRcdFx0cmV0dXJuO1xuXHRcdFxuXHRcdHZhciBuZXh0U3RhdGUgPSB0aGlzLl9uZXh0U3RhdGUgfHwgeyAuLi50aGlzLnN0YXRlLCAuLi4odGhpcy5fY2hhbmdlc1NXIHx8IHt9KSB9LFxuXHRcdCAgICBuZXh0RGF0YSAgPSB0aGlzLmFwcGx5KHRoaXMuZGF0YSwgbmV4dFN0YXRlLCB0aGlzLl9jaGFuZ2VzU1cpO1xuXHRcdFxuXHRcdHRoaXMuX3N0YWJpbGl6ZXIgPSBudWxsO1xuXHRcdHRoaXMuc3RhdGUgICAgICAgPSBuZXh0U3RhdGU7XG5cdFx0dGhpcy5fY2hhbmdlc1NXICA9IG51bGw7XG5cdFx0XG5cdFx0aWYgKCAhZm9yY2UgJiZcblx0XHRcdChcblx0XHRcdFx0IXRoaXMuaGFzRGF0YUNoYW5nZShuZXh0RGF0YSlcblx0XHRcdClcblx0XHQpIHtcblx0XHRcdGlmICggIXRoaXMuX19sb2Nrcy5hbGwgKSB7XG5cdFx0XHRcdGxldCBzdGFibGUgICA9IHRoaXMuX3N0YWJsZTtcblx0XHRcdFx0dGhpcy5fc3RhYmxlID0gdHJ1ZTtcblx0XHRcdFx0IXN0YWJsZSAmJiB0aGlzLmVtaXQoJ3N0YWJsZScsIHRoaXMuc3RhdGUsIHRoaXMuZGF0YSk7XG5cdFx0XHRcdHRoaXMuX3N0YWJpbGl6ZXIgPSBudWxsO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRcblx0XHR0aGlzLmRhdGEgPSBuZXh0RGF0YTtcblx0XHR0aGlzLndhaXQoKTtcblx0XHR0aGlzLnJlbGVhc2UoKTtcblx0XHRcblx0fVxuXHRcblx0LyoqXG5cdCAqIEFkZCAncFN0YXRlJyB0byB0aGUgY3VycmVudCBhY2N1bXVsYXRlZCBzdGF0ZSB1cGRhdGVzXG5cdCAqICYgd2FpdCBzb3VyY2Ugc3RvcmVzIHN0YWJpbGl6YXRpb24gYmVmb3JlIHB1c2hpbmcgdGhlc2Ugc3RhdGUgdXBkYXRlc1xuXHQgKiBAcGFyYW0gcFN0YXRlXG5cdCAqIEBwYXJhbSBjYlxuXHQgKi9cblx0c2V0U3RhdGUoIHBTdGF0ZSwgY2IsIHN5bmMgKSB7XG5cdFx0dmFyIGkgICAgICAgPSAwLCBjaGFuZ2UsXG5cdFx0ICAgIGNoYW5nZXMgPSB0aGlzLl9jaGFuZ2VzU1cgPSB0aGlzLl9jaGFuZ2VzU1cgfHwge307XG5cdFx0Zm9yICggdmFyIGsgaW4gcFN0YXRlIClcblx0XHRcdGlmICggIXRoaXMuc3RhdGVcblx0XHRcdFx0fHwgY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eShrKS8vIHRvZG9cblx0XHRcdFx0JiYgKFxuXHRcdFx0XHRcdHBTdGF0ZVtrXSAhPT0gY2hhbmdlc1trXVxuXHRcdFx0XHQpIHx8IHBTdGF0ZS5oYXNPd25Qcm9wZXJ0eShrKVxuXHRcdFx0XHQmJiAoXG5cdFx0XHRcdFx0cFN0YXRlW2tdICE9PSB0aGlzLnN0YXRlW2tdXG5cdFx0XHRcdFx0fHxcblx0XHRcdFx0XHQodGhpcy5zdGF0ZVtrXSAmJiBwU3RhdGVba10gJiYgKHBTdGF0ZVtrXS5fcmV2ICE9IHRoaXMuX3JldnNba10pKS8vIHJldi9oYXNoIHVwZGF0ZVxuXHRcdFx0XHQpICkge1xuXHRcdFx0XHRjaGFuZ2UgICAgICAgID0gdHJ1ZTtcblx0XHRcdFx0dGhpcy5fcmV2c1trXSA9IHBTdGF0ZVtrXSAmJiBwU3RhdGVba10uX3JldiB8fCB0cnVlO1xuXHRcdFx0XHRjaGFuZ2VzW2tdICAgID0gcFN0YXRlW2tdO1xuXHRcdFx0fVxuXHRcdFxuXHRcdHRoaXMuX25leHRTdGF0ZSA9IHsgLi4udGhpcy5zdGF0ZSwgLi4uY2hhbmdlcyB9O1xuXHRcdGlmICggIXRoaXMuc2hvdWxkQXBwbHkodGhpcy5fbmV4dFN0YXRlKSApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0XG5cdFx0aWYgKCBzeW5jICkge1xuXHRcdFx0dGhpcy5wdXNoU3RhdGUoKTtcblx0XHRcdGNiICYmIGNiKCk7XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0aWYgKCBjaGFuZ2UgKSB7XG5cdFx0XHRcdHRoaXMuc3RhYmlsaXplKGNiKTtcblx0XHRcdH1cblx0XHRcdGVsc2UgY2IgJiYgY2IoKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBVcGRhdGUgdGhlIGN1cnJlbnQgc3RhdGUgJiBwdXNoIGl0XG5cdCAqIEBwYXJhbSBwU3RhdGVcblx0ICogQHBhcmFtIGNiXG5cdCAqL1xuXHRzZXRTdGF0ZVN5bmMoIHBTdGF0ZSApIHtcblx0XHR2YXIgaSAgICAgICA9IDAsIGNoYW5nZSxcblx0XHQgICAgY2hhbmdlcyA9IHRoaXMuX2NoYW5nZXNTVyA9IHRoaXMuX2NoYW5nZXNTVyB8fCB7fTtcblx0XHRmb3IgKCB2YXIgayBpbiBwU3RhdGUgKVxuXHRcdFx0aWYgKCAhdGhpcy5zdGF0ZSB8fCBwU3RhdGUuaGFzT3duUHJvcGVydHkoaylcblx0XHRcdFx0JiYgKFxuXHRcdFx0XHRcdHBTdGF0ZVtrXSAhPSB0aGlzLnN0YXRlW2tdXG5cdFx0XHRcdFx0fHxcblx0XHRcdFx0XHQodGhpcy5zdGF0ZVtrXSAmJiBwU3RhdGVba10gJiYgKHBTdGF0ZVtrXS5fcmV2ICE9IHRoaXMuX3JldnNba10pKS8vIHJldi9oYXNoIHVwZGF0ZVxuXHRcdFx0XHQpICkge1xuXHRcdFx0XHRjaGFuZ2UgICAgICAgID0gdHJ1ZTtcblx0XHRcdFx0dGhpcy5fcmV2c1trXSA9IHBTdGF0ZVtrXSAmJiBwU3RhdGVba10uX3JldiB8fCB0cnVlO1xuXHRcdFx0XHRjaGFuZ2VzW2tdICAgID0gcFN0YXRlW2tdO1xuXHRcdFx0fVxuXHRcdHRoaXMuc2hvdWxkQXBwbHkoeyAuLi4odGhpcy5zdGF0ZSB8fCB7fSksIC4uLmNoYW5nZXMgfSkgJiYgdGhpcy5wdXNoU3RhdGUoKTtcblx0XHRyZXR1cm4gdGhpcy5kYXRhO1xuXHR9XG5cdFxuXHQvKipcblx0ICogZ2V0IGEgc3RvcmUta2V5IHBhaXIgZm9yIFN0b3JlOjptYXBcblx0ICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcblx0ICogQHJldHVybnMge3tzdG9yZTogU3RvcmUsIG5hbWU6ICp9fVxuXHQgKi9cblx0YXMoIG5hbWUgKSB7XG5cdFx0cmV0dXJuIHsgc3RvcmU6IHRoaXMsIG5hbWUgfTtcblx0fVxuXHRcblx0b24oIGxpc3RzICkge1xuXHRcdGlmICggIWlzLnN0cmluZyhsaXN0cykgJiYgbGlzdHMgKVxuXHRcdFx0T2JqZWN0LmtleXMobGlzdHMpLmZvckVhY2goayA9PiBzdXBlci5vbihrLCBsaXN0c1trXSkpO1xuXHRcdGVsc2Ugc3VwZXIub24oLi4uYXJndW1lbnRzKTtcblx0fVxuXHRcblx0cmVtb3ZlTGlzdGVuZXIoIGxpc3RzICkge1xuXHRcdGlmICggIWlzLnN0cmluZyhsaXN0cykgJiYgbGlzdHMgKVxuXHRcdFx0T2JqZWN0LmtleXMobGlzdHMpLmZvckVhY2goayA9PiBzdXBlci5yZW1vdmVMaXN0ZW5lcihrLCBsaXN0c1trXSkpO1xuXHRcdGVsc2Ugc3VwZXIucmVtb3ZlTGlzdGVuZXIoLi4uYXJndW1lbnRzKTtcblx0fVxuXHRcblx0LyoqXG5cdCAqIGlzIGNvbXBsZXRlIChhbGwgcmVxdWllcmVkIGtleXMgYXJlIGhlcmUpXG5cdCAqIEByZXR1cm5zIGJvb2xcblx0ICovXG5cdGlzQ29tcGxldGUoIHN0YXRlID0gdGhpcy5zdGF0ZSApIHtcblx0XHR2YXIgX3N0YXRpYyA9IHRoaXMuY29uc3RydWN0b3I7XG5cdFx0cmV0dXJuIChcblx0XHRcdCF0aGlzLl9yZXF1aXJlXG5cdFx0XHR8fCAhdGhpcy5fcmVxdWlyZS5sZW5ndGhcblx0XHRcdHx8IHN0YXRlICYmIHRoaXMuX3JlcXVpcmUucmVkdWNlKFxuXHRcdFx0XHQoIHIsIGtleSApID0+IChyICYmIHN0YXRlW2tleV0pLFxuXHRcdFx0XHR0cnVlXG5cdFx0XHQpXG5cdFx0KTtcblx0fVxuXHRcblx0LyoqXG5cdCAqIGlzIHN0YWJsZVxuXHQgKiBAcmV0dXJucyBib29sXG5cdCAqL1xuXHRpc1N0YWJsZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5fc3RhYmxlO1xuXHR9XG5cdFxuXHQvKipcblx0ICogU2VyaWFsaXplIHN0YXRlICYgZGF0YSB3aXRoIHNvdXJjZXMgcmVmc1xuXHQgKiBAcmV0dXJucyBib29sXG5cdCAqL1xuXHRzZXJpYWxpemUoIGNmZyA9IHt9LCBvdXRwdXQgPSB7fSApIHtcblx0XHRsZXQgc0lkICAgICAgICAgPSBjZmcucGFyZW50QWxpYXMgfHwgdGhpcy5zY29wZU9iai5faWQsXG5cdFx0ICAgIHJlZnNDb3VudCAgID0gMCxcblx0XHQgICAgcmVmcyAgICAgICAgPVxuXHRcdFx0ICAgICFjZmcubm9yZWZzICYmIGlzLmFycmF5KHRoaXMuX3VzZSkgJiYgdGhpcy5fdXNlLnJlZHVjZShcblx0XHRcdCAgICAoIG1hcCwga2V5ICkgPT4ge1xuXHRcdFx0XHQgICAgbGV0IHJlZiAgID0gdGhpcy4kc2NvcGUucGFyc2VSZWYoa2V5KSxcblx0XHRcdFx0ICAgICAgICBzdG9yZSA9IHRoaXMuJHN0b3Jlc1tyZWYuc3RvcmVJZF07XG5cdFx0XHRcdCAgICBpZiAoIHN0b3JlICYmIGlzLnJzU3RvcmUoc3RvcmUpICYmICFzdG9yZS5zY29wZU9iai5fLmlzTG9jYWxJZCApXG5cdFx0XHRcdFx0ICAgIHJlZnNDb3VudCsrLCBtYXBbcmVmLmFsaWFzXSA9IHJlZi5wYXRoO1xuXHRcdFx0XHRcblx0XHRcdFx0ICAgIHJldHVybiBtYXA7XG5cdFx0XHQgICAgfSwge31cblx0XHRcdCAgICApLFxuXHRcdCAgICBzdGF0ZUtleXMgICA9IE9iamVjdC5rZXlzKHRoaXMuc3RhdGUpLFxuXHRcdCAgICBzdGF0ZVJlZnMgICA9IHN0YXRlS2V5cy5tYXAoayA9PiB0aGlzLnN0YXRlW2tdKSxcblx0XHQgICAgaW5SZWZzQ291bnQgPSAwLFxuXHRcdCAgICBpblJlZnMgICAgICA9XG5cdFx0XHQgICAgIWNmZy5ub3JlZnMgJiYgKE9iamVjdC5rZXlzKHRoaXMuZGF0YSkucmVkdWNlKFxuXHRcdFx0ICAgICggbWFwLCBrZXkgKSA9PiB7XG5cdFx0XHRcdCAgICBsZXQgcmVmID0gc3RhdGVSZWZzLmluZGV4T2YodGhpcy5kYXRhW2tleV0pXG5cdFx0XHRcdCAgICBpZiAoIHJlZiAhPSAtMSApXG5cdFx0XHRcdFx0ICAgIGluUmVmc0NvdW50KyssIG1hcFtrZXldID0gc3RhdGVLZXlzW3JlZl07XG5cdFx0XHRcdCAgICByZXR1cm4gbWFwO1xuXHRcdFx0ICAgIH0sIHt9XG5cdFx0XHQgICAgKSksXG5cdFx0ICAgIHNuYXAgICAgICAgID0ge1xuXHRcdFx0ICAgIHN0YXRlOiB0aGlzLnN0YXRlICYmXG5cdFx0XHRcdCAgICAoXG5cdFx0XHRcdFx0ICAgIGNmZy5ub3JlZnNcblx0XHRcdFx0XHQgICAgPyB7IC4uLnRoaXMuc3RhdGUgfVxuXHRcdFx0XHRcdCAgICA6IE9iamVjdC5rZXlzKHRoaXMuc3RhdGUpLnJlZHVjZSgoIGgsIGsgKSA9PiAoIXJlZnNba10gJiYgKGhba10gPSB0aGlzLnN0YXRlW2tdKSwgaCksIHt9KVxuXHRcdFx0XHQgICAgKSxcblx0XHRcdCAgICBkYXRhIDogKFxuXHRcdFx0XHRcdCAgICB0aGlzLmRhdGEgJiZcblx0XHRcdFx0XHQgICAgdGhpcy5kYXRhLl9fcHJvdG9fXyA9PT0gb2JqUHJvdG8gP1xuXHRcdFx0XHRcdCAgICBpblJlZnMgJiYgT2JqZWN0LmtleXModGhpcy5kYXRhKVxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgLnJlZHVjZShcblx0XHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgKCBoLCBrICkgPT4gKCFpblJlZnNba10gJiYgKGhba10gPSB0aGlzLmRhdGFba10pLCBoKSwge30pXG5cdFx0XHRcdFx0XHQgICAgfHwgeyAuLi50aGlzLmRhdGEgfVxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XG5cdFx0XHRcdFx0ICAgIChpcy5ib29sKHRoaXMuZGF0YSlcblx0XHRcdFx0XHRcdCAgICB8fCBpcy5udW1iZXIodGhpcy5kYXRhKVxuXHRcdFx0XHRcdFx0ICAgIHx8IGlzLnN0cmluZyh0aGlzLmRhdGEpKSAmJiB0aGlzLmRhdGFcblx0XHRcdFx0ICAgIClcblx0XHRcdFx0ICAgIHx8IHVuZGVmaW5lZFxuXHRcdFx0XG5cdFx0ICAgIH07XG5cdFx0XG5cdFx0cmVmcyAmJiByZWZzQ291bnQgJiYgKHNuYXAucmVmcyA9IHJlZnMpO1xuXHRcdGluUmVmcyAmJiBpblJlZnNDb3VudCAmJiAoXG5cdFx0XHRzbmFwLmluUmVmcyA9IHN0YXRlS2V5cy5sZW5ndGggPT09IGluUmVmc0NvdW50XG5cdFx0XHQgICAgICAgICAgICAgID8gdHJ1ZVxuXHRcdFx0ICAgICAgICAgICAgICA6IGluUmVmcyk7XG5cdFx0XG5cdFx0XG5cdFx0a2V5V2Fsa25TZXQoXG5cdFx0XHRvdXRwdXQsXG5cdFx0XHQoc0lkICsgJy8nICsgdGhpcy5uYW1lKSxcblx0XHRcdHNuYXBcblx0XHQpO1xuXHRcdHJldHVybiBvdXRwdXQ7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiByZXN0b3JlIHN0YXRlICYgZGF0YVxuXHQgKiBAcmV0dXJucyBib29sXG5cdCAqL1xuXHRyZXN0b3JlKCBzbmFwc2hvdCwgaW1tZWRpYXRlICkge1xuXHRcdHNuYXBzaG90ID0gc25hcHNob3Rcblx0XHRcdCYmIGtleVdhbGtuR2V0KHNuYXBzaG90LCB0aGlzLnNjb3BlT2JqLl9pZCArICcvJyArIHRoaXMubmFtZSlcblx0XHRcdHx8IHRoaXMuJHNjb3BlLnRha2VTbmFwc2hvdEJ5S2V5KHRoaXMuc2NvcGVPYmouX2lkICsgJy8nICsgdGhpcy5uYW1lKTtcblx0XHRcblx0XHRpZiAoICFzbmFwc2hvdCApXG5cdFx0XHRyZXR1cm47XG5cdFx0XG5cdFx0aWYgKCBzbmFwc2hvdCApIHtcblx0XHRcdGlmICggIXRoaXMuaXNTdGFibGUoKSAmJiAhaW1tZWRpYXRlIClcblx0XHRcdFx0dGhpcy50aGVuKCgpID0+IHJlc3RvcmUoc25hcHNob3QpKVxuXHRcdFx0bGV0IHNuYXA7XG5cdFx0XHR0aGlzLnN0YXRlID0geyAuLi5zbmFwc2hvdC5zdGF0ZSB9O1xuXHRcdFx0c25hcHNob3QucmVmcyAmJiBPYmplY3Qua2V5cyhzbmFwc2hvdC5yZWZzKS5mb3JFYWNoKFxuXHRcdFx0XHQoIGtleSApID0+IHsvL3RvZG9cblx0XHRcdFx0XHR0aGlzLnN0YXRlW2tleV0gPSB0aGlzLiRzY29wZS5yZXRyaWV2ZShzbmFwc2hvdC5yZWZzW2tleV0pO1xuXHRcdFx0XHR9XG5cdFx0XHQpXG5cdFx0XHRcblx0XHRcdFxuXHRcdFx0aWYgKCBzbmFwc2hvdC5pblJlZnMgPT09IHRydWUgKVxuXHRcdFx0XHR0aGlzLmRhdGEgPSB0aGlzLnN0YXRlO1xuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdHRoaXMuZGF0YSA9IHNuYXBzaG90LmRhdGE7XG5cdFx0XHRcdHNuYXBzaG90LmluUmVmcyAmJiBPYmplY3Qua2V5cyhzbmFwc2hvdC5pblJlZnMpLmZvckVhY2goXG5cdFx0XHRcdFx0KCBrZXkgKSA9PiB7Ly90b2RvXG5cdFx0XHRcdFx0XHR0aGlzLmRhdGFba2V5XSA9IHRoaXMuc3RhdGVbc25hcHNob3QuaW5SZWZzW2tleV1dO1xuXHRcdFx0XHRcdFx0Ly9lbHNlXG5cdFx0XHRcdFx0XHQvLyAgICBjb25zb2xlLndhcm4oJ25vdCBmb3VuZCA6ICcsIGtleSwgc25hcCAmJiBzbmFwLnJlZnNbIGtleSBdKVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0KVxuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHRcblx0XHR9XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBVbiBiaW5kIHRoaXMgc3RvcmUgb2ZmIHRoZSBnaXZlbiBjb21wb25lbnQta2V5XG5cdCAqIEBwYXJhbSBvYmpcblx0ICogQHBhcmFtIGtleVxuXHQgKiBAcmV0dXJucyB7QXJyYXkuPCo+fVxuXHQgKi9cblx0dW5CaW5kKCBvYmosIGtleSwgcGF0aCApIHtcblx0XHR2YXIgZm9sbG93ZXJzID0gdGhpcy5fZm9sbG93ZXJzLFxuXHRcdCAgICBpICAgICAgICAgPSBmb2xsb3dlcnMgJiYgZm9sbG93ZXJzLmxlbmd0aDtcblx0XHR3aGlsZSAoIGZvbGxvd2VycyAmJiBpLS0gKVxuXHRcdFx0aWYgKCBmb2xsb3dlcnNbaV1bMF0gPT09IG9iaiAmJiBmb2xsb3dlcnNbaV1bMV0gPT09IGtleSAmJiBmb2xsb3dlcnNbaV1bMl0gPT09IHBhdGggKVxuXHRcdFx0XHRyZXR1cm4gZm9sbG93ZXJzLnNwbGljZShpLCAxKTtcblx0fVxuXHRcblx0LyoqXG5cdCAqIEJpbmQgdGhpcyBzdG9yZSBjaGFuZ2VzIHRvIHRoZSBnaXZlbiBjb21wb25lbnQta2V5XG5cdCAqIEBwYXJhbSBvYmoge1JlYWN0LkNvbXBvbmVudHxTdG9yZXxmdW5jdGlvbilcblx0ICogQHBhcmFtIGtleSB7c3RyaW5nfSBvcHRpb25hbCBrZXkgd2hlcmUgdG8gbWFwIHRoZSBwdWJsaWMgc3RhdGVcblx0ICovXG5cdGJpbmQoIG9iaiwga2V5LCBzZXRJbml0aWFsID0gdHJ1ZSwgcGF0aCApIHtcblx0XHR0aGlzLl9mb2xsb3dlcnMucHVzaChbb2JqLCBrZXksIHBhdGhdKTtcblx0XHRpZiAoIHNldEluaXRpYWwgJiYgdGhpcy5kYXRhICYmIHRoaXMuX3N0YWJsZSApIHtcblx0XHRcdGxldCBkYXRhID0gcGF0aCA/IHRoaXMucmV0cmlldmUocGF0aCkgOiB0aGlzLmRhdGE7XG5cdFx0XHRpZiAoIHR5cGVvZiBvYmogIT0gXCJmdW5jdGlvblwiICkge1xuXHRcdFx0XHRpZiAoIGtleSApIG9iai5zZXRTdGF0ZSh7IFtrZXldOiBkYXRhIH0pO1xuXHRcdFx0XHRlbHNlIG9iai5zZXRTdGF0ZShkYXRhKTtcblx0XHRcdH1cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHRvYmooZGF0YSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdFxuXHQvKipcblx0ICogb25jZSgnc3RhYmxlJywgY2IpXG5cdCAqIEBwYXJhbSBvYmoge1JlYWN0LkNvbXBvbmVudHxTdG9yZXxmdW5jdGlvbilcblx0ICogQHBhcmFtIGtleSB7c3RyaW5nfSBvcHRpb25hbCBrZXkgd2hlcmUgdG8gbWFwIHRoZSBwdWJsaWMgc3RhdGVcblx0ICovXG5cdHRoZW4oIGNiICkge1xuXHRcdGlmICggdGhpcy5fc3RhYmxlIClcblx0XHRcdHJldHVybiBjYih0aGlzLmRhdGEpO1xuXHRcdHRoaXMub25jZSgnc3RhYmxlJywgZSA9PiBjYih0aGlzLmRhdGEpKTtcblx0fVxuXHRcblx0LyoqXG5cdCAqIEFkZCBhIGxvY2sgc28gdGhlIHN0b3JlIHdpbGwgbm90IHByb3BhZyBpdCBkYXRhIHVudGlsbCByZWxlYXNlKCkgaXMgY2FsbFxuXHQgKiBAcGFyYW0gcHJldmlvdXMge1N0b3JlfG51bWJlcnxBcnJheX0gQG9wdGlvbmFsIHdmIHRvIHdhaXQsIHJlbGVhc2VzIHRvIHdhaXQgb3Jcblx0ICogICAgIGFycmF5IG9mIHN0dWZmIHRvIHdhaXRcblx0ICogQHJldHVybnMge3RoaXN9XG5cdCAqL1xuXHR3YWl0KCBwcmV2aW91cyApIHtcblx0XHRpZiAoIHR5cGVvZiBwcmV2aW91cyA9PSBcIm51bWJlclwiIClcblx0XHRcdHJldHVybiB0aGlzLl9fbG9ja3MuYWxsICs9IHByZXZpb3VzO1xuXHRcdGlmICggaXMuYXJyYXkocHJldmlvdXMpIClcblx0XHRcdHJldHVybiBwcmV2aW91cy5tYXAodGhpcy53YWl0LmJpbmQodGhpcykpO1xuXHRcdFxuXHRcdHRoaXMuX3N0YWJsZSAmJiB0aGlzLmVtaXQoJ3Vuc3RhYmxlJywgdGhpcy5zdGF0ZSwgdGhpcy5kYXRhKTtcblx0XHR0aGlzLl9zdGFibGUgPSBmYWxzZTtcblx0XHR0aGlzLl9fbG9ja3MuYWxsKys7XG5cdFx0XG5cdFx0bGV0IHJlYXNvbiA9IGlzLnN0cmluZyhwcmV2aW91cykgPyBwcmV2aW91cyA6IG51bGw7XG5cdFx0aWYgKCByZWFzb24gKSB7XG5cdFx0XHR0aGlzLl9fbG9ja3NbcmVhc29uXSA9IHRoaXMuX19sb2Nrc1tyZWFzb25dIHx8IDA7XG5cdFx0XHR0aGlzLl9fbG9ja3NbcmVhc29uXSsrO1xuXHRcdH1cblx0XHRpZiAoIHByZXZpb3VzICYmIGlzLmZuKHByZXZpb3VzLnRoZW4pICkge1xuXHRcdFx0cHJldmlvdXMudGhlbih0aGlzLnJlbGVhc2UuYmluZCh0aGlzLCBudWxsKSk7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cdFxuXHQvKipcblx0ICogRGVjcmVhc2UgbG9ja3MgZm9yIHRoaXMgc3RvcmUsIGlmIGl0IHJlYWNoIDAgLFxuXHQgKiBpdCB3aWxsIGJlIHByb3BhZ2F0ZWQgdG8gdGhlIGZvbGxvd2Vycyxcblx0ICogdGhlbiwgYWxsIHN0dWZmIHBhc3NlZCB0byBcInRoZW5cIiBjYWxsIGJhY2sgd2lsbCBiZSBleGVjIC8gcmVsZWFzZWRcblx0ICogQHBhcmFtIGRlc3luY1xuXHQgKiBAcmV0dXJucyB7Kn1cblx0ICovXG5cdHJlbGVhc2UoIHJlYXNvbiwgY2IgKSB7XG5cdFx0dmFyIF9zdGF0aWMgPSB0aGlzLmNvbnN0cnVjdG9yLCBtZSA9IHRoaXM7XG5cdFx0bGV0IGkgICAgICAgPSAwLCB3YXNTdGFibGUgPSB0aGlzLl9zdGFibGU7XG5cdFx0XG5cdFx0aWYgKCBpcy5mbihyZWFzb24pICkge1xuXHRcdFx0Y2IgICAgID0gcmVhc29uO1xuXHRcdFx0cmVhc29uID0gbnVsbDtcblx0XHR9XG5cdFx0XG5cdFx0aWYgKCByZWFzb24gKSB7XG5cdFx0XHRpZiAoIHRoaXMuX19sb2Nrc1tyZWFzb25dID09IDAgKVxuXHRcdFx0XHRjb25zb2xlLmVycm9yKFwiUmVsZWFzZSBtb3JlIHRoYW4gbG9ja2luZyAhXCIsIHJlYXNvbik7XG5cdFx0XHR0aGlzLl9fbG9ja3NbcmVhc29uXSA9IHRoaXMuX19sb2Nrc1tyZWFzb25dIHx8IDA7XG5cdFx0XHR0aGlzLl9fbG9ja3NbcmVhc29uXS0tO1xuXHRcdH1cblx0XHRcblx0XHRpZiAoICFyZWFzb24gJiYgdGhpcy5fX2xvY2tzLmFsbCA9PSAwIClcblx0XHRcdGNvbnNvbGUuZXJyb3IoXCJSZWxlYXNlIG1vcmUgdGhhbiBsb2NraW5nICFcIik7XG5cdFx0XG5cdFx0aWYgKCAhLS10aGlzLl9fbG9ja3MuYWxsICYmIHRoaXMuaXNDb21wbGV0ZSgpICkge1xuXHRcdFx0bGV0IHByb3BhZyAgID0gdGhpcy5zaG91bGRQcm9wYWcodGhpcy5kYXRhKTtcblx0XHRcdHRoaXMuX3N0YWJsZSA9IHRydWU7XG5cdFx0XHRwcm9wYWcgJiYgdGhpcy5fcmV2Kys7Ly9cblx0XHRcdGlmICggcHJvcGFnICYmIHRoaXMuX2ZvbGxvd2Vycy5sZW5ndGggKVxuXHRcdFx0XHR0aGlzLl9mb2xsb3dlcnMuZm9yRWFjaChmdW5jdGlvbiBwcm9wYWcoIGZvbGxvd2VyICkge1xuXHRcdFx0XHRcdGxldCBkYXRhID0gZm9sbG93ZXJbMl0gPyBtZS5yZXRyaWV2ZShmb2xsb3dlclsyXSkgOiBtZS5kYXRhO1xuXHRcdFx0XHRcdC8vaWYgKCAhZGF0YSApIHJldHVybjtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHRpZiAoIHR5cGVvZiBmb2xsb3dlclswXSA9PSBcImZ1bmN0aW9uXCIgKSB7XG5cdFx0XHRcdFx0XHRmb2xsb3dlclswXShkYXRhKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0XHQvL2NiICYmIGkrKztcblx0XHRcdFx0XHRcdGZvbGxvd2VyWzBdLnNldFN0YXRlKFxuXHRcdFx0XHRcdFx0XHQoZm9sbG93ZXJbMV0pID8geyBbZm9sbG93ZXJbMV1dOiBkYXRhIH1cblx0XHRcdFx0XHRcdFx0ICAgICAgICAgICAgICA6IGRhdGFcblx0XHRcdFx0XHRcdFx0Ly8sXG5cdFx0XHRcdFx0XHRcdC8vY2IgJiYgKFxuXHRcdFx0XHRcdFx0XHQvLyAgICAoKSA9PiAoISgtLWkpICYmIGNiKCkpXG5cdFx0XHRcdFx0XHRcdC8vKVxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0Ly9lbHNlXG5cdFx0XHQhd2FzU3RhYmxlICYmIHRoaXMuZW1pdCgnc3RhYmxlJywgdGhpcy5kYXRhKTtcblx0XHRcdHByb3BhZyAmJiB0aGlzLmVtaXQoJ3VwZGF0ZScsIHRoaXMuZGF0YSk7XG5cdFx0XHRjYiAmJiBjYigpXG5cdFx0fVxuXHRcdGVsc2UgY2IgJiYgdGhpcy50aGVuKGNiKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXHRcblx0cHJvcGFnKCBkYXRhICkge1xuXHRcdHRoaXMuZW1pdCgndXBkYXRlJywgZGF0YSk7XG5cdH1cblx0XG5cdHJldGFpbiggcmVhc29uICkge1xuXHRcdHRoaXMuX19yZXRhaW5zLmFsbCsrO1xuXHRcdGlmICggcmVhc29uICkge1xuXHRcdFx0dGhpcy5fX3JldGFpbnNbcmVhc29uXSA9IHRoaXMuX19yZXRhaW5zW3JlYXNvbl0gfHwgMDtcblx0XHRcdHRoaXMuX19yZXRhaW5zW3JlYXNvbl0rKztcblx0XHR9XG5cdH1cblx0XG5cdGRpc3Bvc2UoIHJlYXNvbiApIHtcblx0XHQvL2NvbnNvbGUud2FybihcImRpc3Bvc2VcIiwgcmVhc29uLCB0aGlzLl9fcmV0YWlucyk7XG5cdFx0aWYgKCByZWFzb24gKSB7XG5cdFx0XHRpZiAoICF0aGlzLl9fcmV0YWluc1tyZWFzb25dIClcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiUlMgOiBEaXNwb3NlIG1vcmUgdGhhbiByZXRhaW5pbmcgb24gc3RvcmUgJ1wiICsgdGhpcy5uYW1lICsgXCInIDogXCIgKyByZWFzb24pO1xuXHRcdFx0XG5cdFx0XHR0aGlzLl9fcmV0YWluc1tyZWFzb25dLS07XG5cdFx0fVxuXHRcdGlmICggdGhpcy5fX3JldGFpbnMuYWxsID09IDAgKVxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiUlMgOiBEaXNwb3NlIG1vcmUgdGhhbiByZXRhaW5pbmcgb24gc3RvcmUgXCIgKyB0aGlzLm5hbWUpO1xuXHRcdFxuXHRcdHRoaXMuX19yZXRhaW5zLmFsbC0tO1xuXHRcdFxuXHRcdGlmICggIXRoaXMuX19yZXRhaW5zLmFsbCApIHtcblx0XHRcdGlmICggdGhpcy5fcGVyc2lzdGVuY2VUbSApIHtcblx0XHRcdFx0dGhpcy5fZGVzdHJveVRNICYmIGNsZWFyVGltZW91dCh0aGlzLl9kZXN0cm95VE0pO1xuXHRcdFx0XHR0aGlzLl9kZXN0cm95VE0gPSBzZXRUaW1lb3V0KFxuXHRcdFx0XHRcdGUgPT4ge1xuXHRcdFx0XHRcdFx0dGhpcy5fZGVzdHJveVRNID0gbnVsbDtcblx0XHRcdFx0XHRcdC8vdGhpcy50aGVuKHMgPT4ge1xuXHRcdFx0XHRcdFx0IXRoaXMuX19yZXRhaW5zLmFsbCAmJiAhdGhpcy5kZWFkICYmIHRoaXMuZGVzdHJveSgpXG5cdFx0XHRcdFx0XHQvL30pO1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0dGhpcy5fcGVyc2lzdGVuY2VUbVxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdC8vdGhpcy50aGVuKHMgPT5cblx0XHRcdFx0KCF0aGlzLl9fcmV0YWlucy5hbGwgJiYgIXRoaXMuZGVhZCAmJiB0aGlzLmRlc3Ryb3koKSlcblx0XHRcdFx0Ly8pO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRcblx0ZGVzdHJveSgpIHtcblx0XHQvLyAgY29uc29sZS5sb2coXCJkZXN0cm95XCIsIHRoaXMuX3VpZCk7XG5cdFx0XG5cdFx0dGhpcy5lbWl0KCdkZXN0cm95JywgdGhpcyk7XG5cdFx0aWYgKCB0aGlzLl9zdGFiaWxpemVyIClcblx0XHRcdGNsZWFyVGltZW91dCh0aGlzLl9zdGFiaWxpemVyKTtcblx0XHRcblx0XHRpZiAoIHRoaXMuX2ZvbGxvd2Vycy5sZW5ndGggKVxuXHRcdFx0dGhpcy5fZm9sbG93ZXJzLmZvckVhY2goXG5cdFx0XHRcdCggZm9sbG93ZXIgKSA9PiB7XG5cdFx0XHRcdFx0aWYgKCB0eXBlb2YgZm9sbG93ZXJbMF0gIT09IFwiZnVuY3Rpb25cIiApIHtcblx0XHRcdFx0XHRcdGlmICggZm9sbG93ZXJbMF0uc3RvcmVzIClcblx0XHRcdFx0XHRcdFx0ZGVsZXRlIGZvbGxvd2VyWzBdLnN0b3Jlc1tmb2xsb3dlclsxXV07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHQpO1xuXHRcdHRoaXMuX2ZvbGxvd2Vycy5sZW5ndGggPSAwO1xuXHRcdHRoaXMuY29uc3RydWN0b3IuX3JldiAgPSB0aGlzLnJldjtcblx0XHR0aGlzLmRlYWQgICAgICAgICAgICAgID0gdHJ1ZTtcblx0XHR0aGlzLl9yZXZzICAgICAgICAgICAgID0gdGhpcy5kYXRhID0gdGhpcy5zdGF0ZSA9IHRoaXMuc2NvcGUgPSBudWxsO1xuXHRcdHRoaXMucmVtb3ZlQWxsTGlzdGVuZXJzKCk7XG5cdH1cbn1cblxuLyoqXG4gKiBnZXQgYSBzdGF0aWMgYWxpYXNlZCByZWZlcmVuY2Ugb2YgYSBzdG9yZVxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqIEByZXR1cm5zIHt7c3RvcmU6IFN0b3JlLCBuYW1lOiAqfX1cbiAqL1xuU3RvcmUuYXMgPSBmdW5jdGlvbiAoIG5hbWUgKSB7XG5cdHJldHVybiB7IHN0b3JlOiB0aGlzLCBuYW1lIH07XG59XG5cbi8qKlxuICogTWFwIGFsbCBuYW1lZCBzdG9yZXMgaW4ge2tleXN9IHRvIHRoZSB7b2JqZWN0fSdzIHN0YXRlXG4gKiBIb29rIGNvbXBvbmVudFdpbGxVbm1vdW50IChmb3IgcmVhY3QgY29tcCkgb3IgZGVzdHJveSB0byB1bkJpbmQgdGhlbSBhdXRvbWF0aWNhbGx5XG4gKiBAc3RhdGljXG4gKiBAcGFyYW0gb2JqZWN0IHtPYmplY3R9IHRhcmdldCBzdGF0ZSBhd2FyZSBvYmplY3QgKFJlYWN0LkNvbXBvbmVudHxTdG9yZXwuLi4pXG4gKiBAcGFyYW0ga2V5cyB7QXJyYXl9IEV4IDogW1wic2Vzc2lvblwiLCBcIm90aGVyU3RhdGljTmFtZWRTdG9yZTprZXlcIixcbiAqICAgICBzdG9yZS5hcygnYW5vdGhlcktleScpXVxuICovXG5TdG9yZS5tYXAgPSBmdW5jdGlvbiAoIGNTdG9yZSwga2V5cywgc2NvcGUsIG9yaWdpbiwgc2V0SW5pdGlhbCA9IGZhbHNlICkge1xuXHR2YXIgdGFyZ2V0UmV2cyAgICAgPSBjU3RvcmUuX3JldnMgfHwge307XG5cdHZhciB0YXJnZXRTY29wZSAgICA9IGNTdG9yZS5zdG9yZXMgfHwgKGNTdG9yZS5zdG9yZXMgPSB7fSk7XG5cdHZhciBpbml0aWFsT3V0cHV0cyA9IHt9O1xuXHRrZXlzICAgICAgICAgICAgICAgPSBpcy5hcnJheShrZXlzKSA/IFsuLi5rZXlzXSA6IFtrZXlzXTtcblx0XG5cdFxuXHRzY29wZSA9IHNjb3BlIHx8IFN0b3JlLnN0YXRpY1Njb3BlO1xuXHRcblx0a2V5cyA9IGtleXMuZmlsdGVyKFxuXHRcdC8vIEB0b2RvIDogdXNlIHF1ZXJ5IHJlZnNcblx0XHQvLyAoc3RvcmUpKFxcLnN0b3JlKSooXFxbKFxcKnwocHJvcHMpXFx3KykrKVxcXSk/KFxcOmFsaWFzKVxuXHRcdCgga2V5ICkgPT4ge1xuXHRcdFx0aWYgKCAha2V5ICkge1xuXHRcdFx0XHRjb25zb2xlLmVycm9yKFwiTm90IGEgbWFwcGFibGUgc3RvcmUgaXRlbSAnXCIgKyBrZXkgKyBcIicgaW4gXCIgKyBvcmlnaW4gKyAnICEhJyk7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdGxldCBuYW1lLFxuXHRcdFx0ICAgIGFsaWFzLFxuXHRcdFx0ICAgIHBhdGgsXG5cdFx0XHQgICAgc3RvcmUsIF9rZXk7XG5cdFx0XHRpZiAoIGtleS5zdG9yZSAmJiBrZXkubmFtZSApIHtcblx0XHRcdFx0YWxpYXMgPSBuYW1lID0ga2V5Lm5hbWU7XG5cdFx0XHRcdHN0b3JlID0ga2V5LnN0b3JlO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSBpZiAoIGlzLmZuKGtleSkgKSB7XG5cdFx0XHRcdG5hbWUgID0gYWxpYXMgPSBrZXkubmFtZSB8fCBrZXkuZGVmYXVsdE5hbWU7XG5cdFx0XHRcdHN0b3JlID0ga2V5O1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdF9rZXkgID0ga2V5Lm1hdGNoKC8oW15cXC5cXDpdKykoKD86XFwuW15cXC5cXDpdKykqKSg/OlxcOihbXlxcLlxcOl0rKSk/Lyk7XG5cdFx0XHRcdG5hbWUgID0gX2tleVsxXTtcblx0XHRcdFx0cGF0aCAgPSBfa2V5WzJdICYmIF9rZXlbMl0uc3Vic3RyKDEpO1xuXHRcdFx0XHRzdG9yZSA9IHNjb3BlLnN0b3Jlc1tfa2V5WzFdXTtcblx0XHRcdFx0YWxpYXMgPSBfa2V5WzNdIHx8IHBhdGggJiYgcGF0aC5tYXRjaCgvKFteXFwuXSopJC8pWzBdIHx8IF9rZXlbMV07XG5cdFx0XHR9XG5cdFx0XHRpZiAoICFzdG9yZSApIHtcblx0XHRcdFx0bGV0IGkgPSBbXTtcblx0XHRcdFx0Zm9yICggdmFyIG8gaW4gc2NvcGUuc3RvcmVzIClcblx0XHRcdFx0XHRpLnB1c2gobylcblx0XHRcdFx0Y29uc29sZS5lcnJvcihcIk5vdCBhIG1hcHBhYmxlIHN0b3JlIGl0ZW0gJ1wiICsgbmFtZSArIFwiL1wiICsgYWxpYXMgKyBcIicgaW4gXCIgKyAoY1N0b3JlLm5hbWUgfHwgY1N0b3JlKSArICcgISEnLCBzdG9yZSwgX2tleSwgc2NvcGUuc3RvcmVzLCBpKTtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCBpcy5yc1Njb3BlQ2xhc3Moc3RvcmUpICkgc2NvcGUuX21vdW50KG5hbWUpO1xuXHRcdFx0aWYgKCBpcy5yc1Njb3BlKHN0b3JlKSApIHtcblx0XHRcdFx0c3RvcmUgPSBzY29wZS5fbW91bnQoa2V5KTtcblx0XHRcdH1cblx0XHRcdGVsc2UgaWYgKCB0YXJnZXRSZXZzW25hbWVdICkgcmV0dXJuIGZhbHNlOy8vIGlnbm9yZSBkYmwgdXNlcyBmb3Igbm93XG5cdFx0XHRcblx0XHRcdFxuXHRcdFx0aWYgKCBpcy5mbihzdG9yZSkgKSB7XG5cdFx0XHRcdHNjb3BlLl9tb3VudChuYW1lKVxuXHRcdFx0XHRzY29wZS5zdG9yZXNbbmFtZV0uYmluZChjU3RvcmUsIGFsaWFzLCBzZXRJbml0aWFsLCBwYXRoKTtcblx0XHRcdH1cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHRzdG9yZS5iaW5kKGNTdG9yZSwgYWxpYXMsIHNldEluaXRpYWwsIHBhdGgpO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHQvLyBnaXZlIGluaXRpYWwgc3RvcmUgd2VpZ2h0IGJhc2luZyBzb3VyY2VzXG5cdFx0XHRzY29wZS5zdG9yZXNbbmFtZV0uX3NvdXJjZXMgJiYgY1N0b3JlLl9zb3VyY2VzLnB1c2goLi4uc2NvcGUuc3RvcmVzW25hbWVdLl9zb3VyY2VzKTtcblx0XHRcdFxuXHRcdFx0dGFyZ2V0UmV2c1thbGlhc10gPSB0YXJnZXRSZXZzW2FsaWFzXSB8fCB0cnVlO1xuXHRcdFx0IXRhcmdldFNjb3BlW25hbWVdICYmICh0YXJnZXRTY29wZVtuYW1lXSA9IHNjb3BlLnN0b3Jlc1tuYW1lXSk7XG5cdFx0XHRpZiAoIHNjb3BlLnN0b3Jlc1tuYW1lXS5oYXNPd25Qcm9wZXJ0eSgnZGF0YScpIClcblx0XHRcdFx0aW5pdGlhbE91dHB1dHNbbmFtZV0gPSBzY29wZS5kYXRhW25hbWVdO1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHQpO1xuXHRcblx0Ly8gLi4uIEB0b2RvXG5cdGNTdG9yZS5vbmNlKCdkZXN0cm95JywgKCAuLi5hcmd6ICkgPT4ge1xuXHRcdGtleXMubWFwKFxuXHRcdFx0KCBrZXkgKSA9PiB7XG5cdFx0XHRcdGxldCBuYW1lLFxuXHRcdFx0XHQgICAgYWxpYXMsIHBhdGgsXG5cdFx0XHRcdCAgICBzdG9yZTtcblx0XHRcdFx0aWYgKCBrZXkuc3RvcmUgJiYga2V5Lm5hbWUgKSB7XG5cdFx0XHRcdFx0YWxpYXMgPSBuYW1lID0ga2V5Lm5hbWU7XG5cdFx0XHRcdFx0c3RvcmUgPSBrZXkuc3RvcmU7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZSBpZiAoIGlzLmZuKGtleSkgKSB7XG5cdFx0XHRcdFx0bmFtZSAgPSBhbGlhcyA9IGtleS5uYW1lIHx8IGtleS5kZWZhdWx0TmFtZTtcblx0XHRcdFx0XHRzdG9yZSA9IHNjb3BlLnN0b3Jlc1tuYW1lXTtcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHRrZXkgICA9IGtleS5tYXRjaCgvKFteXFwuXFw6XSspKCg/OlxcLlteXFwuXFw6XSspKikoPzpcXDooW15cXC5cXDpdKykpPy8pO1xuXHRcdFx0XHRcdG5hbWUgID0ga2V5WzFdO1xuXHRcdFx0XHRcdHBhdGggID0ga2V5WzJdICYmIGtleVsyXS5zdWJzdHIoMSk7XG5cdFx0XHRcdFx0c3RvcmUgPSBzY29wZS5zdG9yZXNba2V5WzFdXTtcblx0XHRcdFx0XHRhbGlhcyA9IGtleVszXSB8fCBwYXRoICYmIHBhdGgubWF0Y2goLyhbXlxcLl0qKSQvKVswXSB8fCBrZXlbMV07XG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHRcdHN0b3JlICYmICFpcy5mbihzdG9yZSkgJiYgc3RvcmUudW5CaW5kKGNTdG9yZSwgYWxpYXMsIHBhdGgpXG5cdFx0XHR9XG5cdFx0KTtcblx0fSlcblx0XG5cdHJldHVybiBpbml0aWFsT3V0cHV0cztcbn07XG5cblxuaXMucnNTdG9yZSAgICAgID0gZnVuY3Rpb24gKCBvYmogKSB7XG5cdHJldHVybiBvYmogaW5zdGFuY2VvZiBTdG9yZVxufVxuaXMucnNTdG9yZUNsYXNzID0gZnVuY3Rpb24gKCBvYmogKSB7XG5cdHJldHVybiBTdG9yZS5pc1Byb3RvdHlwZU9mKG9iaikgfHwgb2JqID09PSBTdG9yZVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdG9yZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvU3RvcmUuanMiLCIvKlxuICogQ29weXJpZ2h0IChjKSAgMjAxOCBXaXNlIFdpbGQgV2ViIC5cbiAqXG4gKiAgTUlUIExpY2Vuc2VcbiAqXG4gKiAgUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqICBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiAgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuICogIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqICBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqICBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqICBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiAgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqICBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuICogIFNPRlRXQVJFLlxuICpcbiAqIEBhdXRob3IgOiBOYXRoYW5hZWwgQnJhdW5cbiAqIEBjb250YWN0IDogY2FpcGlsYWJzQGdtYWlsLmNvbVxuICovXG5cbi8vaW1wb3J0IGluZGV4IGZyb20gXCIuL2luZGV4XCI7Ly8gd2lsbCB1c2UgYXMgZXh0ZXJuYWwgdGhlIGluZGV4IGluIGRpc3RcbmltcG9ydCBpcyBmcm9tIFwiaXNcIjtcblxuLyoqXG4gKiBNaW5pbWFsIHB1c2ggc2VxdWVuY2VyLCBhcHBseSBzdG9yZXMgc3BlY2lmaWMgdGFzayBpbiB0aGUgcmlnaHQgb3JkZXIgKHJvb3Qgc3RvcmVzXG4gKiBmaXJzdClcbiAqL1xubGV0IHRhc2tRdWV1ZSAgICAgID0gW10sXG4gICAgY3VyV2VpZ2h0ICAgICAgPSAwLFxuICAgIG1heFdlaWdodCAgICAgID0gMCxcbiAgICBtaW5XZWlnaHQgICAgICA9IDAsXG4gICAgdGFza0NvdW50ICAgICAgPSAwLFxuICAgIGRlU3luYyAgICAgICAgID0gZmFsc2UsXG4gICAgZGVTeW5jTWF4VGFza3MgPSAxMCxcbiAgICB0YXNrLFxuICAgIGlzUnVubmluZyxcbiAgICBlcnJvckNhdGNoZXIgICA9IHtcbiAgICAgICAgbGFzdEVycm9yOiBudWxsLFxuICAgICAgICBkaXNwYXRjaCA6IGZ1bmN0aW9uICggZXJyb3IgKSB7XG4gICAgICAgICAgICBlcnJvckNhdGNoZXIuZGlzYWJsZSgpO1xuICAgICAgICAgICAgaWYgKCB0YXNrICYmIHRhc2tbIDAgXS5oYW5kbGVFcnJvciApIHtcbiAgICAgICAgICAgICAgICB0YXNrWyAwIF0uaGFuZGxlRXJyb3IoZXJyb3IsIHRhc2spO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoIHRhc2sgKVxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJSZVNjb3BlIDogQW4gYXBwbHkgdGFzayBoYXMgZmFpbGVkICEhXCIsIHRhc2tbIDEgXSwgXCIgb24gXCIsIHRhc2tbIDAgXS5uYW1lIHx8IHRhc2tbIDAgXS5jb25zdHJ1Y3Rvci5uYW1lKVxuICAgICAgICBcbiAgICAgICAgICAgIGlzUnVubmluZyA9IGZhbHNlO1xuICAgICAgICAgICAgdGFzayAgICAgID0gbnVsbDtcbiAgICAgICAgICAgIHJ1bk5vdygpO1xuICAgICAgICB9LFxuICAgICAgICBlbmFibGUgICA6ICggdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgKVxuICAgICAgICAgICAgICAgICAgID8gKCkgPT4ge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIGVycm9yQ2F0Y2hlci5kaXNwYXRjaClcbiAgICAgICAgICAgIH0gOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgcHJvY2Vzcy5vbigndW5jYXVnaHRFeGNlcHRpb24nLCBlcnJvckNhdGNoZXIuZGlzcGF0Y2gpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgZGlzYWJsZSAgOiAoIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnIClcbiAgICAgICAgICAgICAgICAgICA/ICgpID0+IHtcbiAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignZXJyb3InLCBlcnJvckNhdGNoZXIuZGlzcGF0Y2gpXG4gICAgICAgICAgICB9IDogKCkgPT4ge1xuICAgICAgICAgICAgICAgIHByb2Nlc3MucmVtb3ZlTGlzdGVuZXIoJ3VuY2F1Z2h0RXhjZXB0aW9uJywgZXJyb3JDYXRjaGVyLmRpc3BhdGNoKTtcbiAgICAgICAgICAgIH1cbiAgICB9XG47XG5cbmZ1bmN0aW9uIHJ1bk5vdygpIHtcbiAgICBpZiAoICFpc1J1bm5pbmcgKSB7XG4gICAgICAgIHJ1bigpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gcnVuKCkge1xuICAgIGxldCBmcm9tICA9IERhdGUubm93KCk7XG4gICAgaXNSdW5uaW5nID0gdHJ1ZTtcbiAgICBlcnJvckNhdGNoZXIuZW5hYmxlKCk7XG4gICAgd2hpbGUgKCB0YXNrQ291bnQgKSB7XG4gICAgICAgIFxuICAgICAgICAvLyB0cnkgZm9yIHRoZSBjdXJyZW50IHdlaWdodFxuICAgICAgICB3aGlsZSAoICEoIHRhc2tRdWV1ZVsgY3VyV2VpZ2h0IF0gJiYgdGFza1F1ZXVlWyBjdXJXZWlnaHQgXS5sZW5ndGggKSApXG4gICAgICAgICAgICBjdXJXZWlnaHQrKztcbiAgICAgICAgXG4gICAgICAgIHRhc2tDb3VudC0tO1xuICAgICAgICB0YXNrID0gdGFza1F1ZXVlWyBjdXJXZWlnaHQgXS5zaGlmdCgpO1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwiVGFzayA6IFwiLCB0YXNrWzFdLCBcIiBvbiBcIiwgdGFza1swXS5uYW1lKTtcbiAgICAgICAgdGFza1sgMCBdWyB0YXNrWyAxIF0gXS5hcHBseSh0YXNrWyAwIF0sIHRhc2tbIDIgXSk7XG4gICAgfVxuICAgIHRhc2sgPSB1bmRlZmluZWQ7XG4gICAgZXJyb3JDYXRjaGVyLmRpc2FibGUoKTtcbiAgICBcbiAgICBpc1J1bm5pbmcgPSBmYWxzZTtcbiAgICBpZiAoIHRhc2tDb3VudCApIHtcbiAgICAgICAgc2V0VGltZW91dChydW5Ob3cpO1xuICAgIH1cbn1cblxuLy9cbi8vaW5kZXguc2V0VGFza0RlU3luYyA9ICggbmIgKSA9PiB7XG4vLyAgICBpZiAoIG5iID09PSBmYWxzZSApXG4vLyAgICAgICAgcmV0dXJuIGRlU3luYyA9IGZhbHNlO1xuLy8gICAgZWxzZSBpZiAoIG5iID09PSB0cnVlICkge1xuLy8gICAgICAgIGRlU3luYyAgICAgICAgID0gdHJ1ZTtcbi8vICAgICAgICBkZVN5bmNNYXhUYXNrcyA9IDEwO1xuLy8gICAgfVxuLy8gICAgZWxzZSAoaXMuaW50KG5iKSlcbi8vICAgIHtcbi8vICAgICAgICBkZVN5bmMgICAgICAgICA9IHRydWU7XG4vLyAgICAgICAgZGVTeW5jTWF4VGFza3MgPSBuYjtcbi8vICAgIH1cbi8vfTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHB1c2hUYXNrKCBvYmosIGZuLCBhcmd6ICkge1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIG1vcmUgYSBzdG9yZSBoYXZlIHNvdXJjZXMsIHRoZSBtb3JlIGl0IHNob3VsZCBiZSBwcm9jZXNzZWQgZmlyc3RcbiAgICAgICAgICogU28gbGVhZnMgc3RvcmVzIHN0YXkgc3luYywgYW5kIHJvb3Qgc3RvcmVzIHJlY2VpdmUgbWVyZ2VkIHN0YXRlIHVwZGF0ZXM7XG4gICAgICAgICAqIGdsb2JhbCBzdGF0ZSBzdGF5IGNvaGVyZW50XG4gICAgICAgICAqXG4gICAgICAgICAqIFRoaXMgbWVhbiB3aGF0ZXZlciB0aGUgbnVtYmVyIG9mIHN0b3JlcyAmIHRoZSBjb21wbGV4aXR5IG9mIHRoZSBkZXBzLFxuICAgICAgICAgKiB1cGRhdGluZyBhIHN0b3JlIHN0YXRlIHdpbGwgdXBkYXRlIGl0cyBzeW5jaHJvbmUgY2hpbGQgc3RvcmVzIGltbWVkaWF0ZWx5XG4gICAgICAgICAqXG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBlIHsqfG51bWJlcn1cbiAgICAgICAgICovXG4gICAgICAgIGxldCB3ZWlnaHQgPSBvYmouX3NvdXJjZXMgJiYgb2JqLl9zb3VyY2VzLmxlbmd0aCB8fCAxLFxuICAgICAgICAgICAgc3RhY2sgID0gdGFza1F1ZXVlWyB3ZWlnaHQgXSA9XG4gICAgICAgICAgICAgICAgdGFza1F1ZXVlWyB3ZWlnaHQgXSB8fCBbXTtcbiAgICAgICAgXG4gICAgICAgIG1heFdlaWdodCA9IE1hdGgubWF4KG1heFdlaWdodCwgd2VpZ2h0KTtcbiAgICAgICAgY3VyV2VpZ2h0ID0gTWF0aC5taW4oY3VyV2VpZ2h0LCB3ZWlnaHQpO1xuICAgICAgICB0YXNrQ291bnQrKztcbiAgICAgICAgXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJQdXNoIFRhc2sgOiBcIiwgZm4sIFwiIG9uIFwiLCBvYmoubmFtZSwgd2VpZ2h0KTtcbiAgICAgICAgc3RhY2sucHVzaChbIG9iaiwgZm4sIGFyZ3ogXSk7XG4gICAgICAgIHNldFRpbWVvdXQocnVuTm93LCAwKTtcbiAgICAgICAgcmV0dXJuIHN0YWNrLmxlbmd0aDtcbiAgICB9XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlscy9UYXNrU2VxdWVuY2VyLmpzIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9wcm9jZXNzL2Jyb3dzZXIuanNcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpICAyMDE4IFdpc2UgV2lsZCBXZWIgLlxuICpcbiAqICBNSVQgTGljZW5zZVxuICpcbiAqICBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiAgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqICB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiAgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiAgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiAgVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG4gKiAgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqICBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG4gKiAgU09GVFdBUkUuXG4gKlxuICogQGF1dGhvciA6IE5hdGhhbmFlbCBCcmF1blxuICogQGNvbnRhY3QgOiBjYWlwaWxhYnNAZ21haWwuY29tXG4gKi9cblxuaW1wb3J0IGlzICAgIGZyb20gJ2lzJ1xuXG5jb25zdCBTaW1wbGVPYmplY3RQcm90byA9ICgge30gKS5jb25zdHJ1Y3RvcjtcblxubGV0IHNjb3BhYmxlcyA9IFtdO1xuXG5mdW5jdGlvbiBhZGRTY29wYWJsZVR5cGUoIHRlc3QsIGhhbmRsZSwgbWVtYmVyID0gZmFsc2UsIHN0YXRlU2NvcGUgPSBmYWxzZSApIHtcbiAgICBzY29wYWJsZXMucHVzaChcbiAgICAgICAge1xuICAgICAgICAgICAgdGVzdCxcbiAgICAgICAgICAgIG1lbWJlcixcbiAgICAgICAgICAgIHN0YXRlU2NvcGUsXG4gICAgICAgICAgICBoYW5kbGVcbiAgICAgICAgfVxuICAgIClcbn1cblxuLy9cbmZ1bmN0aW9uIGlzU2NvcGFibGVUeXBlKCBDb21wLCBtZW1iZXIsIHN0YXRlU2NvcGUgKSB7XG4gICAgXG4gICAgZm9yICggbGV0IGkgPSAwOyBpIDwgc2NvcGFibGVzLmxlbmd0aDsgaSsrIClcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgKCBtZW1iZXIgPT09IHVuZGVmaW5lZCB8fCBtZW1iZXIgPT0gc2NvcGFibGVzWyBpIF0ubWVtYmVyIClcbiAgICAgICAgICAgICYmIHN0YXRlU2NvcGUgPT0gc2NvcGFibGVzWyBpIF0uc3RhdGVTY29wZVxuICAgICAgICAgICAgJiYgc2NvcGFibGVzWyBpIF0udGVzdChDb21wKVxuICAgICAgICApXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICBcbiAgICByZXR1cm4gZmFsc2U7XG4gICAgXG59XG5cbmZ1bmN0aW9uIGFwcGx5U2NvcGFibGVUeXBlKCBDb21wLCBhcmd6LCBtZW1iZXIsIHN0YXRlU2NvcGUgKSB7XG4gICAgXG4gICAgZm9yICggbGV0IGkgPSAwOyBpIDwgc2NvcGFibGVzLmxlbmd0aDsgaSsrIClcbiAgICAgICAgaWYgKCBtZW1iZXIgPT0gc2NvcGFibGVzWyBpIF0ubWVtYmVyICYmIHN0YXRlU2NvcGUgPT0gc2NvcGFibGVzWyBpIF0uc3RhdGVTY29wZSAmJiBzY29wYWJsZXNbIGkgXS50ZXN0KENvbXApIClcbiAgICAgICAgICAgIHJldHVybiBzY29wYWJsZXNbIGkgXS5oYW5kbGUoQ29tcCwgLi4uYXJneik7XG4gICAgXG4gICAgY29uc29sZS53YXJuKFwicmVTY29wZSA6IFVua25vd24gdHlwZVwiLCBDb21wKVxuICAgIFxuICAgIHJldHVybiBmYWxzZTtcbiAgICBcbn1cblxuZnVuY3Rpb24gcmVTY29wZSggLi4uYXJneiApIHtcbiAgICAvLyBhcmUgd2UgZGVjb3JhdGluZyBhIG1lbWJlciAvIHdpdGhvdXQgYXJnelxuICAgIGlmICggYXJnelsgMCBdIGluc3RhbmNlb2YgU2ltcGxlT2JqZWN0UHJvdG8gJiYgYXJnelsgMiBdIGluc3RhbmNlb2YgU2ltcGxlT2JqZWN0UHJvdG8gJiYgYXJnelsgMCBdLmhhc093blByb3BlcnR5KGFyZ3pbIDEgXSkgKSB7XG4gICAgICAgIGFyZ3pbIDIgXS52YWx1ZSA9IGFwcGx5U2NvcGFibGVUeXBlKGFyZ3pbIDAgXSwgW10sIHRydWUsIGZhbHNlKTtcbiAgICAgICAgcmV0dXJuIGFyZ3pbIDAgXTtcbiAgICB9XG4gICAgZWxzZSBpZiAoICFpc1Njb3BhYmxlVHlwZShhcmd6WyAwIF0sIHVuZGVmaW5lZCwgZmFsc2UpICkge1xuICAgICAgICByZXR1cm4gKCAuLi5hcmd6MiApID0+IHtcbiAgICAgICAgICAgIC8vIGFyZSB3ZSBkZWNvcmF0aW5nIGEgbWVtYmVyIC8gd2l0aCBhcmd6XG4gICAgICAgICAgICBpZiAoIGFyZ3oyWyAwIF0gaW5zdGFuY2VvZiBTaW1wbGVPYmplY3RQcm90byAmJiBhcmd6MlsgMiBdIGluc3RhbmNlb2YgU2ltcGxlT2JqZWN0UHJvdG8gJiYgYXJnejJbIDAgXS5oYXNPd25Qcm9wZXJ0eShhcmd6MlsgMSBdKSApIHtcbiAgICAgICAgICAgICAgICBhcmd6MlsgMiBdLnZhbHVlID0gYXBwbHlTY29wYWJsZVR5cGUoYXJnejJbIDAgXSwgYXJneiwgdHJ1ZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIHJldHVybiBhcmd6MlsgMCBdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHJldHVybiByZVNjb3BlKGFyZ3oyWyAwIF0sIC4uLmFyZ3opO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBhcHBseVNjb3BhYmxlVHlwZShhcmd6WyAwIF0sIGFyZ3ouc2xpY2UoMSksIGZhbHNlLCBmYWxzZSk7XG59XG5cbmZ1bmN0aW9uIHNjb3BlVG9TdGF0ZSggLi4uYXJneiApIHtcbiAgICAvLyBhcmUgd2UgZGVjb3JhdGluZyBhIG1lbWJlciAvIHdpdGhvdXQgYXJnelxuICAgIGlmICggYXJnelsgMCBdIGluc3RhbmNlb2YgU2ltcGxlT2JqZWN0UHJvdG8gJiYgYXJnelsgMiBdIGluc3RhbmNlb2YgU2ltcGxlT2JqZWN0UHJvdG8gJiYgYXJnelsgMCBdLmhhc093blByb3BlcnR5KGFyZ3pbIDEgXSkgKSB7XG4gICAgICAgIGFyZ3pbIDIgXS52YWx1ZSA9IGFwcGx5U2NvcGFibGVUeXBlKGFyZ3pbIDAgXSwgW10sIHRydWUsIHRydWUpO1xuICAgICAgICByZXR1cm4gYXJnelsgMCBdO1xuICAgIH1cbiAgICBlbHNlIGlmICggIWlzU2NvcGFibGVUeXBlKGFyZ3pbIDAgXSwgdW5kZWZpbmVkLCB0cnVlKSApIHtcbiAgICAgICAgcmV0dXJuICggLi4uYXJnejIgKSA9PiB7XG4gICAgICAgICAgICAvLyBhcmUgd2UgZGVjb3JhdGluZyBhIG1lbWJlciAvIHdpdGggYXJnelxuICAgICAgICAgICAgaWYgKCBhcmd6MlsgMCBdIGluc3RhbmNlb2YgU2ltcGxlT2JqZWN0UHJvdG8gJiYgYXJnejJbIDIgXSBpbnN0YW5jZW9mIFNpbXBsZU9iamVjdFByb3RvICYmIGFyZ3oyWyAwIF0uaGFzT3duUHJvcGVydHkoYXJnejJbIDEgXSkgKSB7XG4gICAgICAgICAgICAgICAgYXJnejJbIDIgXS52YWx1ZSA9IGFwcGx5U2NvcGFibGVUeXBlKGFyZ3oyWyAwIF0sIGFyZ3osIHRydWUsIHRydWUpO1xuICAgICAgICAgICAgICAgIHJldHVybiBhcmd6MlsgMCBdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHJldHVybiBzY29wZVRvU3RhdGUoYXJnejJbIDAgXSwgLi4uYXJneik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGFwcGx5U2NvcGFibGVUeXBlKGFyZ3pbIDAgXSwgYXJnei5zbGljZSgxKSwgZmFsc2UsIHRydWUpO1xufVxuXG4vL1xuLy9hZGRTY29wYWJsZVR5cGUoXG4vLyAgICAoIENvbXAgKSA9PiAoQ29tcCAmJiBDb21wLnByb3RvdHlwZSBpbnN0YW5jZW9mIFN0b3JlKSxcbi8vICAgIGZ1bmN0aW9uIHJlU2NvcGUoIC4uLmFyZ3ogKSB7XG4vLyAgICAgICAgbGV0IEJhc2VTdG9yZSAgICA9ICghYXJnelswXSB8fCBhcmd6WzBdLnByb3RvdHlwZSBpbnN0YW5jZW9mIFN0b3JlKSAmJlxuLy8gYXJnei5zaGlmdCgpLCBzY29wZSAgICAgICAgPSAoIWFyZ3pbMF0gfHwgYXJnelswXSBpbnN0YW5jZW9mIFNjb3BlIHx8IGlzLmZuKGFyZ3pbMF0pKVxuLy8gJiYgYXJnei5zaGlmdCgpLCB1c2UgICAgICAgICAgPSAoaXMuYXJyYXkoYXJnelswXSkpICYmIGFyZ3ouc2hpZnQoKSwgc3RhdGVNYXAgICAgID1cbi8vICF1c2UgJiYgKCFhcmd6WzBdIHx8IGFyZ3pbMF0gaW5zdGFuY2VvZiBTaW1wbGVPYmplY3RQcm90bykgJiYgYXJnei5zaGlmdCgpLFxuLy8gaW5pdGlhbFN0YXRlID0ge307ICBsZXQgY29tcE5hbWUgPSBCYXNlU3RvcmUuZGlzcGxheU5hbWUgfHwgQmFzZVN0b3JlLm5hbWU7ICB1c2UgPVxuLy8gWy4uLihCYXNlU3RvcmUudXNlIHx8IFtdKSwgLi4uKHVzZSB8fCBbXSldOyBzdGF0ZU1hcCAmJlxuLy8gU2NvcGUuc3RhdGVNYXBUb1JlZkxpc3Qoc3RhdGVNYXAsIGluaXRpYWxTdGF0ZSwgdXNlKTsgIGNsYXNzIFN0YXRlU2NvcGVkU3RvcmUgZXh0ZW5kc1xuLy8gQmFzZVN0b3JlIHsgc3RhdGljIHVzZSAgICAgICAgID0gdXNlOyBzdGF0aWMgZGlzcGxheU5hbWUgPSBcInN0YXRlU2NvcGVkKFwiICsgY29tcE5hbWUgK1xuLy8gXCIpXCI7ICBjb25zdHJ1Y3RvciggLi4uYXJneiApIHsgc3VwZXIoc2NvcGUsIGFyZ3ouc2xpY2UoYXJnelswXSBpbnN0YW5jZW9mIFNjb3BlID8gMSA6XG4vLyAwKSkgfSB9ICByZXR1cm4gU3RhdGVTY29wZWRTdG9yZTsgfSwgZmFsc2UsIHRydWUgKVxuXG5cbmV4cG9ydCB7XG4gICAgYWRkU2NvcGFibGVUeXBlLFxuICAgIHJlU2NvcGUsXG4gICAgc2NvcGVUb1N0YXRlXG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlscy9zY29wYWJsZS5qcyJdLCJzb3VyY2VSb290IjoiIn0=