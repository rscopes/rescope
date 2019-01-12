/*!
 * MIT License
 * 
 * Copyright (c) 2018 Wise Wild Web
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
module.exports =
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

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _Scope = __webpack_require__(1);
	
	var _Scope2 = _interopRequireDefault(_Scope);
	
	var _Store = __webpack_require__(7);
	
	var _Store2 = _interopRequireDefault(_Store);
	
	var _scopable = __webpack_require__(9);
	
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

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _class, _temp;
	
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
	var Scope = (_temp = _class = function (_EventEmitter) {
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
	}(EventEmitter), _class.persistenceTm = 1, _class.Store = null, _class.scopeRef = function scopeRef(path) {
		this.path = path;
	}, _class.scopes = openScopes, _temp);
	
	
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

	module.exports = require("is");

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
/***/ (function(module, exports) {

	module.exports = require("shortid");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _class, _temp;
	
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
	    TaskSequencer = __webpack_require__(8),
	    shortid = __webpack_require__(6),
	    objProto = Object.getPrototypeOf({});
	var Store = (_temp = _class = function (_EventEmitter) {
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
	}(EventEmitter), _class.staticScope = new Scope({}, { id: "static" }), _class.state = undefined, _class.persistenceTm = false, _temp);
	
	/**
	 * get a static aliased reference of a store
	 * @param {string} name
	 * @returns {{store: Store, name: *}}
	 */
	
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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
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

/***/ }),
/* 9 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMjI2YzQyNTIyZWM4ZGM5NzA5NzEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9TY29wZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvaXMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaXNcIiIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL0VtaXR0ZXIuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic2hvcnRpZFwiIiwid2VicGFjazovLy8uL3NyYy9TdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvVGFza1NlcXVlbmNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvc2NvcGFibGUuanMiXSwibmFtZXMiOlsiJGdsb2JhbCIsIndpbmRvdyIsImdsb2JhbCIsIlJTIiwiX19fcmVzY29wZSIsImNvbnNvbGUiLCJ3YXJuIiwiU3RvcmUiLCJTY29wZSIsIkNvbnRleHQiLCJyZVNjb3BlIiwic2NvcGVUb1N0YXRlIiwicmVTY29wZVN0YXRlIiwiYWRkU2NvcGFibGVUeXBlIiwic2NvcGVSZWYiLCJtYXAiLCJrZXkiLCJyZXF1aXJlIiwid2Fsa25TZXQiLCJ3YWxrbkdldCIsImtleVdhbGtuU2V0Iiwia2V5V2Fsa25HZXQiLCJFdmVudEVtaXR0ZXIiLCJzaG9ydGlkIiwiX19wcm90b19fcHVzaCIsInRhcmdldCIsImlkIiwicGFyZW50IiwiZm4iLCJwcm90b3R5cGUiLCJfIiwib3BlblNjb3BlcyIsIlNpbXBsZU9iamVjdFByb3RvIiwiY29uc3RydWN0b3IiLCJzY29wZXMiLCJza2V5IiwiaXMiLCJhcnJheSIsInNvcnQiLCJhIiwiYiIsImZpcnN0bmFtZSIsImpvaW4iLCJzbSIsInN0YXRlIiwiX3JlZnMiLCJhY3Rpb25zIiwicGF0aCIsImFwcGxpZXIiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsImNwYXRoIiwicHVzaCIsIkZ1bmN0aW9uIiwiYXMiLCJzdG9yZXNNYXAiLCJ1cHBlclNjb3BlIiwic25hcHNob3QiLCJkYXRhIiwiaW5jcmVtZW50SWQiLCJwZXJzaXN0ZW5jZVRtIiwiYXV0b0Rlc3Ryb3kiLCJyb290RW1pdHRlciIsImJvdW5kZWRBY3Rpb25zIiwia2V5UElEIiwiX2lkIiwiZ2VuZXJhdGUiLCJiYXNlSWQiLCJrZXlJbmRleCIsImlzTG9jYWxJZCIsInJlZ2lzdGVyIiwiaSIsIl9yZXYiLCJzdG9yZXMiLCJfYXV0b0Rlc3Ryb3kiLCJkZWFkIiwiRXJyb3IiLCJzb3VyY2VzIiwiY2hpbGRTY29wZXMiLCJjaGlsZFNjb3Blc0xpc3QiLCJ1blN0YWJsZUNoaWxkcyIsInNlZW5DaGlsZHMiLCJfX3JldGFpbnMiLCJhbGwiLCJfX2xvY2tzIiwiX2JvdW5kZWRBY3Rpb25zIiwidGVzdCIsImluY2x1ZGVzIiwiYmluZCIsIl9saXN0ZW5pbmciLCJfc2NvcGUiLCJfbWl4ZWQiLCJfbWl4ZWRMaXN0IiwiZm9sbG93ZXJzIiwicmV0YWluIiwiX3N0YWJsZSIsIndhaXQiLCJvbiIsIl9wYXJlbnRMaXN0IiwicmVsZWFzZSIsIl9wcm9wYWciLCJfYWRkQ2hpbGQiLCJyZXN0b3JlIiwic2V0VGltZW91dCIsImRpc3Bvc2UiLCJzdG9yZXNMaXN0IiwiX21vdW50IiwiayIsImFyZ3VtZW50cyIsInJlZiIsInNuYXAiLCJwYXJzZVJlZiIsInN0b3JlSWQiLCJyZWR1Y2VSaWdodCIsIm1vdW50ZWQiLCJjdHgiLCJzdG9yZSIsInRhc2tRdWV1ZSIsInJzU3RvcmVDbGFzcyIsIm5hbWUiLCJsZW5ndGgiLCJzaGlmdCIsInJzU2NvcGVDbGFzcyIsIiRwYXJlbnQiLCJtb3VudCIsInNsaWNlIiwicnNTdG9yZSIsInVuZGVmaW5lZCIsInNldFN0YXRlIiwiX3dhdGNoU3RvcmUiLCJpc1N0YWJsZSIsInByb3BhZyIsInRhcmdldEN0eCIsImxpc3RzIiwicmVsaW5rIiwiX19vcmlnaW4iLCJzaW5nbGV0b24iLCJzcmNDdHgiLCJleHRlcm5hbCIsImZvcmNlIiwibGN0eCIsImluZm8iLCJ0bXAiLCJkZXN0cm95IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwiZ2V0Iiwic2V0IiwidiIsImFjdGl2ZUFjdGlvbnMiLCJyc1Njb3BlIiwiYWN0IiwiaGFzT3duUHJvcGVydHkiLCJfX3RhcmdldFN0b3JlcyIsImRpc3BhdGNoIiwib2JqIiwic2V0SW5pdGlhbCIsInJldk1hcCIsImxhc3RSZXZzIiwicmVmS2V5cyIsInN0cmluZyIsInJlZHVjZSIsInJldnMiLCJyZXYiLCJyZWZzIiwicmV0YWluU3RvcmVzIiwiZ2V0VXBkYXRlcyIsImRpc3Bvc2VTdG9yZXMiLCJzcGxpY2UiLCJ0byIsInJlZkxpc3QiLCJtaXhlZENXVW5tb3VudCIsInVuTW91bnRLZXkiLCJpc1JlYWN0Q29tcG9uZW50IiwidW5CaW5kIiwiYWxpYXMiLCJyZXRyaWV2ZSIsInNwbGl0IiwicmV0cmlldmVTdG9yZSIsInN0b3Jlc1Jldk1hcCIsImxvY2FsIiwidXBkYXRlZCIsImdldFN0b3Jlc1JldnMiLCJvdXRwdXQiLCJfZ2V0UmV2TWFwIiwiY2hpbGRzIiwiX2dldEFsbENoaWxkcyIsImNmZyIsInBhcmVudEFsaWFzIiwic2lkIiwic2VyaWFsaXplX2V4IiwiZXhjbHVkZSIsIndpdGhDaGlsZHMiLCJ3aXRoUGFyZW50cyIsIndpdGhNaXhlZCIsIm5vcmVmcyIsImFsaWFzZXMiLCJzZXJpYWxpemUiLCJ3aXRoQ2hpbGQiLCJoIiwiYm9vbCIsInRha2VTbmFwc2hvdEJ5S2V5Iiwic3RhcnRzV2l0aCIsInN1YnN0ciIsImdldFNuYXBzaG90QnlLZXkiLCJkZWxldGVTbmFwc2hvdEJ5S2V5IiwicmVwbGFjZSIsInBTdGF0ZSIsIl9yZWYiLCJhY3Rpb24iLCJhcmd6Iiwic3RhY2siLCJiQWN0cyIsInRyaWdnZXIiLCJjYiIsIm9uY2UiLCJ0aGVuIiwicmVhc29uIiwiZW1pdCIsImVycm9yIiwic3RhYmlsaXplclRNIiwiY2xlYXJUaW1lb3V0IiwicHJvcGFnVE0iLCJyZW1hcHMiLCJ3YXNTdGFibGUiLCJpbmRleE9mIiwidW4iLCJkZXN0cm95VE0iLCJyZW1vdmVMaXN0ZW5lciIsImZvbGxvd2VyIiwiX3JtQ2hpbGQiLCJpc1Byb3RvdHlwZU9mIiwidmFsdWUiLCJpc0tleSIsImZpbHRlciIsIkVtaXR0ZXIiLCJfZXZlbnRzIiwiZXZ0IiwiVGFza1NlcXVlbmNlciIsIm9ialByb3RvIiwiZ2V0UHJvdG90eXBlT2YiLCJfc3RhdGljIiwic2NvcGUiLCJnZXRTY29wZSIsInN0YXRpY1Njb3BlIiwid2F0Y2hzIiwidXNlIiwiYXBwbHkiLCJpbml0aWFsU3RhdGUiLCJkZWZhdWx0U3RhdGUiLCJhcHBsaWVkIiwiX3VpZCIsIl9vblN0YWJpbGl6ZSIsIl9wZXJzaXN0ZW5jZVRtIiwiX2NmZyIsInNjb3BlT2JqIiwiJHNjb3BlIiwiJHN0b3JlcyIsIiRhY3Rpb25zIiwiJGRpc3BhdGNoIiwiX3JldnMiLCJfcmVxdWlyZSIsIl9zb3VyY2VzIiwiX3VzZSIsIm1hdGNoIiwicmVmMiIsIl9mb2xsb3dlcnMiLCJfY2hhbmdlc1NXIiwiX2FmdGVyQ29uc3RydWN0b3IiLCJpbml0aWFsRGF0YSIsInNob3VsZEFwcGx5IiwibWFuYWdlZCIsIm5EYXRhcyIsInIiLCJjRGF0YXMiLCJpc0NvbXBsZXRlIiwiZm9sbG93IiwiY2FsbCIsImNoYW5nZXMiLCJyZWZpbmUiLCJfX3Byb3RvX18iLCJfc3RhYmlsaXplciIsInB1c2hUYXNrIiwibnMiLCJkb1dhaXQiLCJvcmlnaW4iLCJpbml0aWFsT3V0cHV0cyIsInMiLCJoYXNEYXRhQ2hhbmdlIiwic3RhYmxlIiwibmV4dFN0YXRlIiwiX25leHRTdGF0ZSIsIm5leHREYXRhIiwic3luYyIsImNoYW5nZSIsInB1c2hTdGF0ZSIsInN0YWJpbGl6ZSIsInNJZCIsIl9rZXkiLCJkZWZhdWx0TmFtZSIsIm51bWJlciIsImltbWVkaWF0ZSIsInByZXZpb3VzIiwibWUiLCJzaG91bGRQcm9wYWciLCJfZGVzdHJveVRNIiwicmVtb3ZlQWxsTGlzdGVuZXJzIiwiY1N0b3JlIiwidGFyZ2V0UmV2cyIsInRhcmdldFNjb3BlIiwibyIsImN1cldlaWdodCIsIm1heFdlaWdodCIsIm1pbldlaWdodCIsInRhc2tDb3VudCIsImRlU3luYyIsImRlU3luY01heFRhc2tzIiwidGFzayIsImlzUnVubmluZyIsImVycm9yQ2F0Y2hlciIsImxhc3RFcnJvciIsImRpc2FibGUiLCJoYW5kbGVFcnJvciIsInJ1bk5vdyIsImVuYWJsZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJwcm9jZXNzIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJ1biIsImZyb20iLCJEYXRlIiwibm93Iiwid2VpZ2h0IiwiTWF0aCIsIm1heCIsIm1pbiIsInNjb3BhYmxlcyIsImhhbmRsZSIsIm1lbWJlciIsInN0YXRlU2NvcGUiLCJpc1Njb3BhYmxlVHlwZSIsIkNvbXAiLCJhcHBseVNjb3BhYmxlVHlwZSIsImFyZ3oyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ1RBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQS9CQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMkJBLEtBQUlBLFVBQVksT0FBT0MsTUFBUCxLQUFrQixXQUFwQixHQUFvQ0EsTUFBcEMsR0FBNkNDLE1BQTNEOztBQU1BLEtBQU1DLEtBQUtILFFBQVFJLFVBQVIsSUFBc0IsRUFBakM7QUFDQSxLQUFLSixRQUFRSSxVQUFiLEVBQTBCO0FBQ3RCQyxhQUFRQyxJQUFSLENBQWEsK0RBQWI7QUFDSCxFQUZELE1BR0s7O0FBRUROLGFBQVFJLFVB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akMsRUFBdUMsSUFBdkMsQ0FBbEI7QUFDQSxnQkFBT0EsS0FBTSxDQUFOLENBQVA7QUFDSCxNQUhELE1BSUssSUFBSyxDQUFDa0ksZUFBZWxJLEtBQU0sQ0FBTixDQUFmLEVBQTBCcEYsU0FBMUIsRUFBcUMsSUFBckMsQ0FBTixFQUFtRDtBQUNwRCxnQkFBTyxZQUFnQjtBQUFBLGdEQUFYeU4sS0FBVztBQUFYQSxzQkFBVztBQUFBOztBQUNuQjtBQUNBLGlCQUFLQSxNQUFPLENBQVAsYUFBc0J6VCxpQkFBdEIsSUFBMkN5VCxNQUFPLENBQVAsYUFBc0J6VCxpQkFBakUsSUFBc0Z5VCxNQUFPLENBQVAsRUFBVy9MLGNBQVgsQ0FBMEIrTCxNQUFPLENBQVAsQ0FBMUIsQ0FBM0YsRUFBbUk7QUFDL0hBLHVCQUFPLENBQVAsRUFBVy9HLEtBQVgsR0FBbUI4RyxrQkFBa0JDLE1BQU8sQ0FBUCxDQUFsQixFQUE4QnJJLElBQTlCLEVBQW9DLElBQXBDLEVBQTBDLElBQTFDLENBQW5CO0FBQ0Esd0JBQU9xSSxNQUFPLENBQVAsQ0FBUDtBQUNILGNBSEQsTUFLSSxPQUFPOVUsK0JBQWE4VSxNQUFPLENBQVAsQ0FBYixTQUE0QnJJLElBQTVCLEVBQVA7QUFDUCxVQVJEO0FBU0g7QUFDRCxZQUFPb0ksa0JBQWtCcEksS0FBTSxDQUFOLENBQWxCLEVBQTZCQSxLQUFLdEYsS0FBTCxDQUFXLENBQVgsQ0FBN0IsRUFBNEMsS0FBNUMsRUFBbUQsSUFBbkQsQ0FBUDtBQUNIOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztTQUlJakgsZSxHQUFBQSxlO1NBQ0FILE8sR0FBQUEsTztTQUNBQyxZLEdBQUFBLFkiLCJmaWxlIjoiLi4vLi4vZGlzdC9SZVNjb3BlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDIyNmM0MjUyMmVjOGRjOTcwOTcxIiwiLypcbiAqIENvcHlyaWdodCAoYykgIDIwMTggV2lzZSBXaWxkIFdlYiAuXG4gKlxuICogIE1JVCBMaWNlbnNlXG4gKlxuICogIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqICBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiAgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqICBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqICBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqICBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcbiAqICBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqICBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiAgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiAgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiAgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiAgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcbiAqICBTT0ZUV0FSRS5cbiAqXG4gKiBAYXV0aG9yIDogTmF0aGFuYWVsIEJyYXVuXG4gKiBAY29udGFjdCA6IGNhaXBpbGFic0BnbWFpbC5jb21cbiAqL1xuXG5sZXQgJGdsb2JhbCA9ICggdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgKSA/IHdpbmRvdyA6IGdsb2JhbDtcblxuaW1wb3J0IFNjb3BlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tIFwiLi9TY29wZVwiO1xuaW1wb3J0IFN0b3JlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tIFwiLi9TdG9yZVwiO1xuaW1wb3J0IHsgYWRkU2NvcGFibGVUeXBlLCByZVNjb3BlLCBzY29wZVRvU3RhdGUgfSBmcm9tIFwiLi91dGlscy9zY29wYWJsZVwiO1xuXG5jb25zdCBSUyA9ICRnbG9iYWwuX19fcmVzY29wZSB8fCB7fTtcbmlmICggJGdsb2JhbC5fX19yZXNjb3BlICkge1xuICAgIGNvbnNvbGUud2FybihcIlJlU2NvcGUgaXMgZGVmaW5lZCBtdWx0aXBsZSB0aW1lcyAhISBcXG5DaGVjayB5b3UncmUgcGFja2FnaW5nXCIpXG59XG5lbHNlIHtcbiAgICBcbiAgICAkZ2xvYmFsLl9fX3Jlc2NvcGUgPSBSUztcbiAgICBTY29wZS5TdG9yZSAgICAgICAgPSBTdG9yZTtcbiAgICAvL1JTLmNvbnNvbGUgICAgICAgICA9IGNvbnNvbGU7XG4gICAgUlMuU2NvcGUgICAgICAgICAgID0gU2NvcGU7XG4gICAgUlMuQ29udGV4dCAgICAgICAgID0gU2NvcGU7XG4gICAgUlMuU3RvcmUgICAgICAgICAgID0gU3RvcmU7XG4gICAgUlMucmVTY29wZSAgICAgICAgID0gcmVTY29wZTtcbiAgICBSUy5zY29wZVRvU3RhdGUgICAgPSBzY29wZVRvU3RhdGU7XG4gICAgUlMucmVTY29wZVN0YXRlICAgID0gc2NvcGVUb1N0YXRlO1xuICAgIFJTLmFkZFNjb3BhYmxlVHlwZSA9IGFkZFNjb3BhYmxlVHlwZTtcbiAgICBSUy5zY29wZVJlZiAgICAgICAgPVxuICAgICAgICBmdW5jdGlvbiBzY29wZVJlZiggbWFwLCBrZXkgKSB7XG4gICAgICAgICAgICBtYXBbIGtleSBdID0gbmV3IFNjb3BlLnNjb3BlUmVmKG1hcFsga2V5IF0pO1xuICAgICAgICAgICAgcmV0dXJuIG1hcDtcbiAgICAgICAgfTtcbiAgICBcbn1cbmV4cG9ydCBkZWZhdWx0IFJTO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC5qcyIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpICAyMDE4IFdpc2UgV2lsZCBXZWIgLlxuICpcbiAqICBNSVQgTGljZW5zZVxuICpcbiAqICBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiAgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqICB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiAgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiAgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiAgVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG4gKiAgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqICBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG4gKiAgU09GVFdBUkUuXG4gKlxuICogQGF1dGhvciA6IE5hdGhhbmFlbCBCcmF1blxuICogQGNvbnRhY3QgOiBjYWlwaWxhYnNAZ21haWwuY29tXG4gKi9cblxuXG52YXIgaXMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi91dGlscy9pcycpLFxuICAgIHsgd2Fsa25TZXQsIHdhbGtuR2V0LCBrZXlXYWxrblNldCwga2V5V2Fsa25HZXQgfSA9IHJlcXVpcmUoJy4vdXRpbHMvdXRpbHMnKSxcbiAgICBFdmVudEVtaXR0ZXIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL3V0aWxzL0VtaXR0ZXInKSxcbiAgICBzaG9ydGlkICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlKCdzaG9ydGlkJylcblx0LCBfX3Byb3RvX19wdXNoICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID0gKCB0YXJnZXQsIGlkLCBwYXJlbnQgKSA9PiB7XG5cdCAgICBsZXQgZm4gICAgICAgPSBmdW5jdGlvbiAoKSB7XG5cdCAgICB9O1xuXHQgICAgZm4ucHJvdG90eXBlID0gcGFyZW50ID8gbmV3IHBhcmVudC5fW2lkXSgpIDogdGFyZ2V0W2lkXSB8fCB7fTtcblx0ICAgIHRhcmdldFtpZF0gICA9IG5ldyBmbigpO1xuXHQgICAgdGFyZ2V0Ll9baWRdID0gZm47XG4gICAgfSxcblx0b3BlblNjb3BlcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID0ge30sXG5cdFNpbXBsZU9iamVjdFByb3RvICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA9ICh7fSkuY29uc3RydWN0b3I7XG5cbi8qKlxuICogQmFzZSBTY29wZSBvYmplY3RcbiAqL1xuY2xhc3MgU2NvcGUgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuXHRzdGF0aWMgZ2V0U2NvcGUoIHNjb3BlcyApIHtcblx0XHRsZXQgc2tleSA9IGlzLmFycmF5KHNjb3BlcykgPyBzY29wZXMuc29ydCgoIGEsIGIgKSA9PiB7XG5cdFx0XHRpZiAoIGEuZmlyc3RuYW1lIDwgYi5maXJzdG5hbWUgKSByZXR1cm4gLTE7XG5cdFx0XHRpZiAoIGEuZmlyc3RuYW1lID4gYi5maXJzdG5hbWUgKSByZXR1cm4gMTtcblx0XHRcdHJldHVybiAwO1xuXHRcdH0pLmpvaW4oJysnKSA6IHNjb3Blcztcblx0XHRyZXR1cm4gb3BlblNjb3Blc1tza2V5XSA9IG9wZW5TY29wZXNbc2tleV0gfHwgbmV3IFNjb3BlKHt9LCB7IGlkOiBza2V5IH0pO1xuXHR9O1xuXHRcblx0XG5cdC8qKlxuXHQgKiBnZXQgYSBwYXJzZWQgcmVmZXJlbmNlIGxpc3QgZnJvbSBzdGF0ZU1hcFxuXHQgKiBAcGFyYW0gX3JlZlxuXHQgKiBAcmV0dXJucyB7e3N0b3JlSWQsIHBhdGgsIGFsaWFzOiAqLCByZWY6ICp9fVxuXHQgKi9cblx0c3RhdGljIHN0YXRlTWFwVG9SZWZMaXN0KCBzbSwgc3RhdGUgPSB7fSwgX3JlZnMgPSBbXSwgYWN0aW9ucyA9IHt9LCBwYXRoID0gXCJcIiApIHtcblx0XHRsZXQgYXBwbGllcjtcblx0XHRPYmplY3Qua2V5cyhzbSkuZm9yRWFjaChcblx0XHRcdGtleSA9PiB7XG5cdFx0XHRcdGxldCBjcGF0aCA9IHBhdGggPyBwYXRoICsgJy4nICsga2V5IDoga2V5O1xuXHRcdFx0XHRcblx0XHRcdFx0c21ba2V5XSBpbnN0YW5jZW9mIFNjb3BlLnNjb3BlUmVmXG5cdFx0XHRcdD8gX3JlZnMucHVzaChzbVtrZXldLnBhdGggKyAnOicgKyBjcGF0aClcblx0XHRcdFx0OiAoc21ba2V5XSAmJiBzbVtrZXldIGluc3RhbmNlb2YgRnVuY3Rpb24pXG5cdFx0XHRcdCAgPyBrZXkgPT0gXCIkYXBwbHlcIlxuXHRcdFx0XHQgICAgPyBhcHBsaWVyID0gc21ba2V5XVxuXHRcdFx0XHQgICAgOiBhY3Rpb25zW2tleV0gPSBzbVtrZXldXG5cdFx0XHRcdCAgOiAoc21ba2V5XSAmJiBzbVtrZXldLnByb3RvdHlwZSBpbnN0YW5jZW9mIFNjb3BlLlN0b3JlKVxuXHRcdFx0XHQgICAgPyBfcmVmcy5wdXNoKHNtW2tleV0uYXMoY3BhdGgpKVxuXHRcdFx0XHQgICAgOiBzdGF0ZVtjcGF0aF0gPSBzbVtrZXldXG5cdFx0XHRcdC8vOiB0aGlzLnN0YXRlTWFwVG9SZWZMaXN0KHNtW2tleV0sIF9yZWZzLCBwYXRoICsgJy4nICsga2V5KVxuXHRcdFx0fVxuXHRcdClcblx0XHRyZXR1cm4gYXBwbGllcjtcblx0fVxuXHRcblx0c3RhdGljIHBlcnNpc3RlbmNlVG0gPSAxOy8vIGlmID4gMCwgd2lsbCB3YWl0ICdwZXJzaXN0ZW5jZVRtJyBtcyBiZWZvcmUgZGVzdHJveVxuXHQvLyB3aGVuXG5cdC8vIGRpc3Bvc2UgcmVhY2ggMFxuXHRzdGF0aWMgU3RvcmUgICAgPSBudWxsO1xuXHRzdGF0aWMgc2NvcGVSZWYgPSBmdW5jdGlvbiBzY29wZVJlZiggcGF0aCApIHtcblx0XHR0aGlzLnBhdGggPSBwYXRoO1xuXHR9O1xuXHRzdGF0aWMgc2NvcGVzICAgPSBvcGVuU2NvcGVzOy8vIGFsbCBhY3RpdmUgc2NvcGVzXG5cdFxuXHRcblx0LyoqXG5cdCAqIEluaXQgYSBSZVNjb3BlIHNjb3BlXG5cdCAqXG5cdCAqIEBwYXJhbSBzdG9yZXNNYXAge09iamVjdH0gT2JqZWN0IHdpdGggdGhlIGluaXRpYWwgc3RvcmVzIGRlZmluaXRpb24gLyBpbnN0YW5jZXNcblx0ICogQHBhcmFtIGNvbmZpZyB7T2JqZWN0fSBTY29wZSBjb25maWdcblx0ICoge1xuXHQgKiAgcGFyZW50IHtzY29wZX0gQG9wdGlvbmFsIHBhcmVudCBzY29wZVxuXHQgKlxuXHQgKiAgaWQge3N0cmluZ30gQG9wdGlvbmFsIGlkICggaWYgdGhpcyBpZCBleGlzdCBzdG9yZXNNYXAgd2lsbCBiZSBtZXJnZSBvbiB0aGUgJ2lkJ1xuXHQgKiAgICAgc2NvcGUpIGtleSB7c3RyaW5nfSBAb3B0aW9uYWwga2V5IG9mIHRoZSBzY29wZSAoIGlmIG5vIGlkIGlzIHNldCwgdGhlIHNjb3BlIGlkXG5cdCAqICAgICB3aWxsIGJlIChwYXJlbnQuaWQrJz4nK2tleSkgaW5jcmVtZW50SWQge2Jvb2x9IEBvcHRpb25hbCB0cnVlIHRvIGFkZCBhIHN1ZmZpeFxuXHQgKiAgICAgaWQsIGlmIHRoZSBwcm92aWRlZCBrZXkgb3IgaWQgZ2xvYmFsbHkgZXhpc3Rcblx0ICpcblx0ICogIHN0YXRlIHtPYmplY3R9IEBvcHRpb25hbCBpbml0aWFsIHN0YXRlIGJ5IHN0b3JlIGFsaWFzXG5cdCAqICBkYXRhIHtPYmplY3R9IEBvcHRpb25hbCBpbml0aWFsIGRhdGEgYnkgc3RvcmUgYWxpYXNcblx0ICpcblx0ICogIHJvb3RFbWl0dGVyIHtib29sfSBAb3B0aW9uYWwgdHJ1ZSB0byBub3QgYmVpbmcgZGVzdGFiaWxpemVkIGJ5IHBhcmVudFxuXHQgKiAgYm91bmRlZEFjdGlvbnMge2FycmF5IHwgcmVnZXhwfSBAb3B0aW9uYWwgbGlzdCBvciByZWdleHAgb2YgYWN0aW9ucyBub3Rcblx0ICogICAgIHByb3BhZ2F0ZWQgdG8gdGhlIHBhcmVudFxuXHQgKlxuXHQgKiAgcGVyc2lzdGVuY2VUbSB7bnVtYmVyKSBpZiA+IDAsIHdpbGwgd2FpdCAncGVyc2lzdGVuY2VUbScgbXMgYmVmb3JlIGRlc3Ryb3kgd2hlblxuXHQgKiAgICAgZGlzcG9zZSByZWFjaCAwIGF1dG9EZXN0cm95ICB7Ym9vbH0gd2lsbCB0cmlnZ2VyIHJldGFpbiAmIGRpc3Bvc2UgYWZ0ZXIgc3RhcnRcblx0ICogIH1cblx0ICogQHJldHVybnMge1Njb3BlfVxuXHQgKi9cblx0Y29uc3RydWN0b3IoIHN0b3Jlc01hcCwgeyBwYXJlbnQsIHVwcGVyU2NvcGUsIGtleSwgaWQsIHNuYXBzaG90LCBzdGF0ZSwgZGF0YSwgaW5jcmVtZW50SWQgPSAhIWtleSwgcGVyc2lzdGVuY2VUbSwgYXV0b0Rlc3Ryb3ksIHJvb3RFbWl0dGVyLCBib3VuZGVkQWN0aW9ucyB9ID0ge30gKSB7XG5cdFx0c3VwZXIoKTtcblx0XHR2YXIgXyA9IHtcblx0XHRcdGtleVBJRDogKHVwcGVyU2NvcGUgJiYgdXBwZXJTY29wZS5faWQgfHwgcGFyZW50ICYmIHBhcmVudC5faWQgfHwgc2hvcnRpZC5nZW5lcmF0ZSgpKSxcblx0XHRcdGtleSxcblx0XHRcdGluY3JlbWVudElkLFxuXHRcdFx0YmFzZUlkOiBpZFxuXHRcdH0sIGtleUluZGV4O1xuXHRcdFxuXHRcdGlkID0gaWQgfHwga2V5ICYmIChfLmtleVBJRCArICc+JyArIGtleSk7XG5cdFx0XG5cdFx0Xy5pc0xvY2FsSWQgPSAhaWQ7XG5cdFx0XG5cdFx0Ly9pZiAoIHBhcmVudCAmJiBrZXkgKSB7XG5cdFx0Ly8gICAga2V5SW5kZXggPSBwYXJlbnQuXy5jaGlsZFNjb3Blcy5maW5kKGN0eD0+KGN0eC5faWQ9PWlkKSk7XG5cdFx0Ly8gICAgaWYgKCBrZXlJbmRleCA9PSAtMSApIGtleUluZGV4ID0gcGFyZW50Ll8uc2VlbkNoaWxkcztcblx0XHQvLyAgICBrZXlJbmRleCsrO1xuXHRcdC8vICAgIGlmICgga2V5SW5kZXggKVxuXHRcdC8vICAgICAgICBpZCA9IGlkICsgJ1snICsga2V5SW5kZXggKyAnXSc7XG5cdFx0Ly99XG5cdFx0XG5cdFx0aWQgPSBpZCB8fCAoXCJfX19fX1wiICsgc2hvcnRpZC5nZW5lcmF0ZSgpKTtcblx0XHRcblx0XHRcblx0XHRpZiAoIG9wZW5TY29wZXNbaWRdICYmICFpbmNyZW1lbnRJZCApIHsvLyBvdmVyd3JpdGUgZXhpc3Rpbmcgc2NvcGVcblx0XHRcdHRoaXMuX2lkID0gaWQ7XG5cdFx0XHRvcGVuU2NvcGVzW2lkXS5yZWdpc3RlcihzdG9yZXNNYXApO1xuXHRcdFx0cmV0dXJuIG9wZW5TY29wZXNbaWRdXG5cdFx0fVxuXHRcdGVsc2UgaWYgKCBvcGVuU2NvcGVzW2lkXSAmJiBpbmNyZW1lbnRJZCApIHsvLyBnZW5lcmF0ZSBrZXkgaWRcblx0XHRcdGxldCBpID0gLTE7XG5cdFx0XHR3aGlsZSAoIG9wZW5TY29wZXNbaWQgKyAnWycgKyAoKytpKSArICddJ10gKSA7XG5cdFx0XHRpZCA9IGlkICsgJ1snICsgaSArICddJztcblx0XHR9XG5cdFx0XG5cdFx0dGhpcy5faWQgICAgICAgID0gaWQ7XG5cdFx0dGhpcy5fcmV2ICAgICAgID0gMDtcblx0XHRvcGVuU2NvcGVzW2lkXSAgPSB0aGlzO1xuXHRcdF8ucGVyc2lzdGVuY2VUbSA9IHBlcnNpc3RlbmNlVG0gfHwgdGhpcy5jb25zdHJ1Y3Rvci5wZXJzaXN0ZW5jZVRtO1xuXHRcdFxuXHRcdHRoaXMuYWN0aW9ucyA9IHt9O1xuXHRcdHRoaXMuc3RvcmVzICA9IHt9O1xuXHRcdHRoaXMuc3RhdGUgICA9IHt9O1xuXHRcdHRoaXMuZGF0YSAgICA9IHt9O1xuXHRcdFxuXHRcdHRoaXMucGFyZW50ICAgICAgID0gcGFyZW50O1xuXHRcdHRoaXMuXyAgICAgICAgICAgID0gXztcblx0XHR0aGlzLl9hdXRvRGVzdHJveSA9IGF1dG9EZXN0cm95O1xuXHRcdFxuXHRcdGlmICggcGFyZW50ICYmIHBhcmVudC5kZWFkIClcblx0XHRcdHRocm93IG5ldyBFcnJvcihcIkNhbid0IHVzZSBhIGRlYWQgc2NvcGUgYXMgcGFyZW50ICFcIik7XG5cdFx0XG5cdFx0X19wcm90b19fcHVzaCh0aGlzLCAnYWN0aW9ucycsIHBhcmVudCk7XG5cdFx0X19wcm90b19fcHVzaCh0aGlzLCAnc3RvcmVzJywgcGFyZW50KTtcblx0XHRfX3Byb3RvX19wdXNoKHRoaXMsICdzdGF0ZScsIHBhcmVudCk7XG5cdFx0X19wcm90b19fcHVzaCh0aGlzLCAnZGF0YScsIHBhcmVudCk7XG5cdFx0XG5cdFx0dGhpcy5zb3VyY2VzICAgICAgPSBbXTtcblx0XHRfLmNoaWxkU2NvcGVzICAgICA9IFtdO1xuXHRcdF8uY2hpbGRTY29wZXNMaXN0ID0gW107XG5cdFx0Xy51blN0YWJsZUNoaWxkcyAgPSAwO1xuXHRcdF8uc2VlbkNoaWxkcyAgICAgID0gMDtcblx0XHRcblx0XHR0aGlzLl9fcmV0YWlucyA9IHsgYWxsOiAwIH07XG5cdFx0dGhpcy5fX2xvY2tzICAgPSB7IGFsbDogMSB9O1xuXHRcdFxuXHRcdC8vXy5zbmFwc2hvdCAgICAgICAgPSBzbmFwc2hvdDtcblx0XHQvL18uc25hcHNob3QgICAgICAgID0gc25hcHNob3Q7XG5cdFx0Xy5fYm91bmRlZEFjdGlvbnMgPSBpcy5hcnJheShib3VuZGVkQWN0aW9ucylcblx0XHQgICAgICAgICAgICAgICAgICAgID8geyB0ZXN0OiBib3VuZGVkQWN0aW9ucy5pbmNsdWRlcy5iaW5kKGJvdW5kZWRBY3Rpb25zKSB9XG5cdFx0ICAgICAgICAgICAgICAgICAgICA6IGJvdW5kZWRBY3Rpb25zO1xuXHRcdF8uX2xpc3RlbmluZyAgICAgID0ge307XG5cdFx0Xy5fc2NvcGUgICAgICAgICAgPSB7fTtcblx0XHRfLl9taXhlZCAgICAgICAgICA9IFtdO1xuXHRcdF8uX21peGVkTGlzdCAgICAgID0gW107XG5cdFx0Xy5mb2xsb3dlcnMgICAgICAgPSBbXTtcblx0XHRpZiAoIHBhcmVudCApIHtcblx0XHRcdHBhcmVudC5yZXRhaW4oXCJpc015UGFyZW50XCIpO1xuXHRcdFx0aWYgKCAhcm9vdEVtaXR0ZXIgKSB7XG5cdFx0XHRcdCFwYXJlbnQuX3N0YWJsZSAmJiB0aGlzLndhaXQoXCJ3YWl0aW5nUGFyZW50XCIpO1xuXHRcdFx0XHRwYXJlbnQub24oXy5fcGFyZW50TGlzdCA9IHtcblx0XHRcdFx0XHQnc3RhYmxlJyAgOiBzID0+IHRoaXMucmVsZWFzZShcIndhaXRpbmdQYXJlbnRcIiksXG5cdFx0XHRcdFx0J3Vuc3RhYmxlJzogcyA9PiB0aGlzLndhaXQoXCJ3YWl0aW5nUGFyZW50XCIpLFxuXHRcdFx0XHRcdCd1cGRhdGUnICA6IHMgPT4gdGhpcy5fcHJvcGFnKClcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0cGFyZW50Lm9uKF8uX3BhcmVudExpc3QgPSB7XG5cdFx0XHRcdFx0J3VwZGF0ZSc6IHMgPT4gdGhpcy5fcHJvcGFnKClcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0XHQvLyB0aGlzLnJlZ2lzdGVyKHBhcmVudC5fX3Njb3BlLCBzdGF0ZSwgZGF0YSk7XG5cdFx0fVxuXHRcdFxuXHRcdFxuXHRcdHRoaXMucmVnaXN0ZXIoc3RvcmVzTWFwLCBzdGF0ZSwgZGF0YSk7XG5cdFx0dGhpcy5fX2xvY2tzLmFsbC0tO1xuXHRcdHRoaXMuX3N0YWJsZSA9ICF0aGlzLl9fbG9ja3MuYWxsO1xuXHRcdFxuXHRcdGlmICggcGFyZW50ICkge1xuXHRcdFx0cGFyZW50Ll9hZGRDaGlsZCh0aGlzKTtcblx0XHR9XG5cdFx0XG5cdFx0dGhpcy5yZXN0b3JlKHNuYXBzaG90KTtcblx0XHRcblx0XHRpZiAoIGF1dG9EZXN0cm95IClcblx0XHRcdHNldFRpbWVvdXQoXG5cdFx0XHRcdHRtID0+IHtcblx0XHRcdFx0XHR0aGlzLnJldGFpbihcImF1dG9EZXN0cm95XCIpO1xuXHRcdFx0XHRcdHRoaXMuZGlzcG9zZShcImF1dG9EZXN0cm95XCIpO1xuXHRcdFx0XHR9XG5cdFx0XHQpXG5cdFx0XG5cdH1cblx0XG5cdC8qKlxuXHQgKlxuXHQgKiBNb3VudCB0aGUgc3RvcmVzIGluIHN0b3Jlc0xpc3QsIGluIHRoaXMgc2NvcGUgb3IgaW4gaXRzIHBhcmVudHMgb3IgbWl4ZWQgc2NvcGVzXG5cdCAqXG5cdCAqIEBwYXJhbSBzdG9yZXNMaXN0IHtzdHJpbmd8c3RvcmVSZWZ9IFN0b3JlIG5hbWUsIEFycmF5IG9mIFN0b3JlIG5hbWVzLCBvciBSZXNjb3BlXG5cdCAqICAgICBzdG9yZSByZWYgZnJvbSBTdG9yZTo6YXMgb3IgU3RvcmU6YXNcblx0ICogQHBhcmFtIHN0YXRlXG5cdCAqIEBwYXJhbSBkYXRhXG5cdCAqIEByZXR1cm5zIHtTY29wZX1cblx0ICovXG5cdG1vdW50KCBzdG9yZXNMaXN0LCBzbmFwc2hvdCwgc3RhdGUsIGRhdGEgKSB7XG5cdFx0aWYgKCBpcy5hcnJheShzdG9yZXNMaXN0KSApIHtcblx0XHRcdHN0b3Jlc0xpc3QuZm9yRWFjaChrID0+IHRoaXMuX21vdW50KGssIHNuYXBzaG90LCBzdGF0ZSwgZGF0YSkpO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdHRoaXMuX21vdW50KC4uLmFyZ3VtZW50cyk7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cdFxuXHRfbW91bnQoIGlkLCBzbmFwc2hvdCwgc3RhdGUsIGRhdGEgKSB7XG5cdFx0bGV0IHJlZiwgc25hcDtcblx0XHRcblx0XHRyZWYgPSB0aGlzLnBhcnNlUmVmKGlkKVxuXHRcdFxuXHRcdGlmICggaWQgPT0gXCIkcGFyZW50XCIgKSByZXR1cm47XG5cdFx0aWYgKCAhdGhpcy5fLl9zY29wZVtyZWYuc3RvcmVJZF0gKSB7Ly9hc2sgbWl4ZWQgfHwgcGFyZW50XG5cdFx0XHRpZiAoIHRoaXMuXy5fbWl4ZWQucmVkdWNlUmlnaHQoKCBtb3VudGVkLCBjdHggKSA9PiAobW91bnRlZCB8fCBjdHguX21vdW50KGlkLCBzbmFwc2hvdCwgc3RhdGUsIGRhdGEpKSwgZmFsc2UpIHx8XG5cdFx0XHRcdCF0aGlzLnBhcmVudCApXG5cdFx0XHRcdHJldHVybjtcblx0XHRcdHJldHVybiB0aGlzLnBhcmVudC5fbW91bnQoLi4uYXJndW1lbnRzKTtcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHRsZXQgc3RvcmUgPSB0aGlzLl8uX3Njb3BlW3JlZi5zdG9yZUlkXSwgdGFza1F1ZXVlID0gW107XG5cdFx0XHRpZiAoIGlzLnJzU3RvcmVDbGFzcyhzdG9yZSkgKSB7XG5cdFx0XHRcdHRoaXMuXy5fc2NvcGVbcmVmLnN0b3JlSWRdID0gbmV3IHN0b3JlKHRoaXMsIHtcblx0XHRcdFx0XHQvL3NuYXBzaG90LFxuXHRcdFx0XHRcdG5hbWU6IHJlZi5zdG9yZUlkLFxuXHRcdFx0XHRcdHN0YXRlLFxuXHRcdFx0XHRcdGRhdGFcblx0XHRcdFx0fSwgdGFza1F1ZXVlKTtcblx0XHRcdFx0d2hpbGUgKCB0YXNrUXVldWUubGVuZ3RoICkgdGFza1F1ZXVlLnNoaWZ0KCkoKTtcblx0XHRcdH1cblx0XHRcdGVsc2UgaWYgKCBpcy5yc1Njb3BlQ2xhc3Moc3RvcmUpICkge1xuXHRcdFx0XHRzdG9yZSA9IHRoaXMuXy5fc2NvcGVbcmVmLnN0b3JlSWRdID0gbmV3IHN0b3JlKHsgJHBhcmVudDogdGhpcyB9LCB7XG5cdFx0XHRcdFx0a2V5ICAgICAgICA6IHJlZi5zdG9yZUlkLFxuXHRcdFx0XHRcdGluY3JlbWVudElkOiB0cnVlLFxuXHRcdFx0XHRcdHVwcGVyU2NvcGUgOiB0aGlzXG5cdFx0XHRcdFx0Ly9hdXRvRGVzdHJveTogdHJ1ZVxuXHRcdFx0XHRcdC8vcGFyZW50OiB0aGlzXG5cdFx0XHRcdH0pO1xuXHRcdFx0XHQvL3RoaXMuXy5fc2NvcGVbIHJlZi5zdG9yZUlkIF0ucmV0YWluKFwic2NvcGVkQ2hpbGRTY29wZVwiKTtcblx0XHRcdFx0Ly90aGlzLl93YXRjaFN0b3JlKHJlZi5zdG9yZUlkKTtcblx0XHRcdFx0aWYgKCByZWYucGF0aC5sZW5ndGggPiAxIClcblx0XHRcdFx0XHR0aGlzLl8uX3Njb3BlW3JlZi5zdG9yZUlkXS5tb3VudChyZWYucGF0aC5zbGljZSgxKS5qb2luKCcuJyksIHNuYXBzaG90LCBzdGF0ZSwgZGF0YSlcblx0XHRcdFx0Ly9lbHNlIHJldHVybiB0aGlzLl8uX3Njb3BlWyByZWYuc3RvcmVJZCBdO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCBpcy5yc1N0b3JlKHN0b3JlKSApIHtcblx0XHRcdFx0aWYgKCBzdGF0ZSAhPT0gdW5kZWZpbmVkICYmIGRhdGEgPT09IHVuZGVmaW5lZCApXG5cdFx0XHRcdFx0c3RvcmUuc2V0U3RhdGUoc3RhdGUpO1xuXHRcdFx0XHRlbHNlIGlmICggc3RhdGUgIT09IHVuZGVmaW5lZCApXG5cdFx0XHRcdFx0c3RvcmUuc3RhdGUgPSBzdGF0ZTtcblx0XHRcdFx0XG5cdFx0XHRcdGlmICggZGF0YSAhPT0gdW5kZWZpbmVkIClcblx0XHRcdFx0XHRzdG9yZS5wdXNoKGRhdGEpO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5fd2F0Y2hTdG9yZShyZWYuc3RvcmVJZCk7XG5cdFx0fVxuXHRcdFxuXHRcdFxuXHRcdHJldHVybiB0aGlzLl8uX3Njb3BlW3JlZi5zdG9yZUlkXTtcblx0fVxuXHRcblx0X3dhdGNoU3RvcmUoIGlkLCBzdGF0ZSwgZGF0YSApIHtcblx0XHRpZiAoICF0aGlzLl8uX2xpc3RlbmluZ1tpZF0gJiYgIWlzLmZuKHRoaXMuXy5fc2NvcGVbaWRdKSApIHtcblx0XHRcdC8vaWYgKCBpcy5yc1N0b3JlKHRoaXMuXy5fc2NvcGVbIGlkIF0pICkge1xuXHRcdFx0IXRoaXMuXy5fc2NvcGVbaWRdLl9hdXRvRGVzdHJveSAmJiB0aGlzLl8uX3Njb3BlW2lkXS5yZXRhaW4oXCJzY29wZWRcIik7XG5cdFx0XHQhdGhpcy5fLl9zY29wZVtpZF0uaXNTdGFibGUoKSAmJiB0aGlzLndhaXQoaWQpO1xuXHRcdFx0dGhpcy5fLl9zY29wZVtpZF0ub24oXG5cdFx0XHRcdHRoaXMuXy5fbGlzdGVuaW5nW2lkXSA9IHtcblx0XHRcdFx0XHQnZGVzdHJveScgOiBzID0+IHtcblx0XHRcdFx0XHRcdGRlbGV0ZSB0aGlzLl8uX2xpc3RlbmluZ1tpZF07XG5cdFx0XHRcdFx0XHR0aGlzLl8uX3Njb3BlW2lkXSA9IHRoaXMuXy5fc2NvcGVbaWRdLmNvbnN0cnVjdG9yO1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0J3VwZGF0ZScgIDogcyA9PiB0aGlzLnByb3BhZygpLFxuXHRcdFx0XHRcdCdzdGFibGUnICA6IHMgPT4gdGhpcy5yZWxlYXNlKGlkKSxcblx0XHRcdFx0XHQndW5zdGFibGUnOiBzID0+IHRoaXMud2FpdChpZClcblx0XHRcdFx0fSk7XG5cdFx0fVxuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cdFxuXHQvKipcblx0ICogTWl4IHRhcmdldEN0eCBvbiB0aGlzIHNjb3BlXG5cdCAqIE1peGVkIHNjb3BlIHBhcmVudHMgYXJlIE5PVCBtYXBwZWRcblx0ICogQHBhcmFtIHRhcmdldEN0eFxuXHQgKi9cblx0bWl4aW4oIHRhcmdldEN0eCApIHtcblx0XHRsZXQgcGFyZW50ID0gdGhpcy5wYXJlbnQsIGxpc3RzO1xuXHRcdFxuXHRcdHRoaXMuXy5fbWl4ZWQucHVzaCh0YXJnZXRDdHgpXG5cdFx0dGFyZ2V0Q3R4LnJldGFpbihcIm1peGVkVG9cIik7XG5cdFx0aWYgKCAhdGFyZ2V0Q3R4Ll9zdGFibGUgKVxuXHRcdFx0dGhpcy53YWl0KHRhcmdldEN0eC5faWQpO1xuXHRcdHRoaXMuXy5fbWl4ZWRMaXN0LnB1c2gobGlzdHMgPSB7XG5cdFx0XHQnc3RhYmxlJyAgOiBzID0+IHRoaXMucmVsZWFzZSh0YXJnZXRDdHguX2lkKSxcblx0XHRcdCd1bnN0YWJsZSc6IHMgPT4gdGhpcy53YWl0KHRhcmdldEN0eC5faWQpLFxuXHRcdFx0J3VwZGF0ZScgIDogcyA9PiB0aGlzLl9wcm9wYWcoKVxuXHRcdH0pO1xuXHRcdFxuXHRcdC8vdGhpcy5hY3Rpb25zID0ge307XG5cdFx0Ly90aGlzLnN0b3JlcyAgPSB7fTtcblx0XHQvL3RoaXMuc3RhdGUgICA9IHt9O1xuXHRcdC8vdGhpcy5kYXRhICAgID0ge307XG5cdFx0dGFyZ2V0Q3R4Lm9uKGxpc3RzKTtcblx0XHRcblx0XHQvLyByZXNldCBwcm90b3Ncblx0XHQvLyBwdXNoIG5ldyBwcm90byB3aXRoIHBhcmVudFxuXHRcdF9fcHJvdG9fX3B1c2godGhpcywgJ2FjdGlvbnMnLCBwYXJlbnQpO1xuXHRcdF9fcHJvdG9fX3B1c2godGhpcywgJ3N0b3JlcycsIHBhcmVudCk7XG5cdFx0X19wcm90b19fcHVzaCh0aGlzLCAnc3RhdGUnLCBwYXJlbnQpO1xuXHRcdF9fcHJvdG9fX3B1c2godGhpcywgJ2RhdGEnLCBwYXJlbnQpO1xuXHRcdC8vIHByaW50IGxvY2FseiBhY2Nlc3NvcnNcblx0XHR0aGlzLnJlbGluayh0aGlzLl8uX3Njb3BlLCB0aGlzLCBmYWxzZSwgdHJ1ZSk7XG5cdFx0XG5cdFx0dGhpcy5fLl9taXhlZC5mb3JFYWNoKFxuXHRcdFx0Y3R4ID0+IHtcblx0XHRcdFx0Ly8gcHVzaCBwcm90b3Ncblx0XHRcdFx0X19wcm90b19fcHVzaCh0aGlzLCAnYWN0aW9ucycpO1xuXHRcdFx0XHRfX3Byb3RvX19wdXNoKHRoaXMsICdzdG9yZXMnKTtcblx0XHRcdFx0X19wcm90b19fcHVzaCh0aGlzLCAnc3RhdGUnKTtcblx0XHRcdFx0X19wcm90b19fcHVzaCh0aGlzLCAnZGF0YScpO1xuXHRcdFx0XHR0aGlzLnN0b3Jlcy5fX29yaWdpbiA9IFwibWl4ZWQgXCIgKyBjdHguX2lkO1xuXHRcdFx0XHQvLyB3cml0ZSBtaXhlZCBhY2Nlc3NvcnNcblx0XHRcdFx0Y3R4LnJlbGluayhjdHguXy5fc2NvcGUsIHRoaXMsIHRydWUsIHRydWUpXG5cdFx0XHR9XG5cdFx0KVxuXHR9XG5cdFxuXHQvKipcblx0ICogUmVnaXN0ZXIgc3RvcmVzIGluIHN0b3Jlc01hcCAmIGxpbmsgdGhlbSBpbiB0aGUgcHJvdG9zXG5cdCAqIEBwYXJhbSBzdG9yZXNNYXBcblx0ICogQHBhcmFtIHN0YXRlXG5cdCAqIEBwYXJhbSBkYXRhXG5cdCAqL1xuXHRyZWdpc3Rlciggc3RvcmVzTWFwLCBzdGF0ZSA9IHt9LCBkYXRhID0ge30gKSB7XG5cdFx0dGhpcy5yZWxpbmsoc3RvcmVzTWFwLCB0aGlzLCBmYWxzZSwgZmFsc2UpO1xuXHRcdE9iamVjdC5rZXlzKHN0b3Jlc01hcCkuZm9yRWFjaChcblx0XHRcdGlkID0+IHtcblx0XHRcdFx0aWYgKCBpZCA9PSBcIiRwYXJlbnRcIiApIHJldHVybjtcblx0XHRcdFx0aWYgKCBzdG9yZXNNYXBbaWRdLnNpbmdsZXRvbiB8fCAoaXMuZm4oc3RvcmVzTWFwW2lkXSkgJiYgKHN0YXRlW2lkXSB8fCBkYXRhW2lkXSkpICkge1xuXHRcdFx0XHRcdHRoaXMuX21vdW50KGlkLCB1bmRlZmluZWQsIHN0YXRlW2lkXSwgZGF0YVtpZF0pXG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZSBpZiAoIHN0YXRlW2lkXSB8fCBkYXRhW2lkXSApIHtcblx0XHRcdFx0XHRpZiAoIGRhdGFbaWRdICkge1xuXHRcdFx0XHRcdFx0aWYgKCBzdGF0ZVtpZF0gKVxuXHRcdFx0XHRcdFx0XHR0aGlzLnN0b3Jlc1tpZF0uc3RhdGUgPSBzdGF0ZVtpZF07XG5cdFx0XHRcdFx0XHR0aGlzLnN0b3Jlc1tpZF0ucHVzaChkYXRhW2lkXSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGVsc2UgaWYgKCBzdGF0ZVtpZF0gKSB7XG5cdFx0XHRcdFx0XHR0aGlzLnN0b3Jlc1tpZF0uc2V0U3RhdGUoc3RhdGVbaWRdKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5fd2F0Y2hTdG9yZShpZCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHQpXG5cdFx0XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBNYXAgc3JjQ3R4IHN0b3JlJ3Mgb24gdGFyZ2V0Q3R4IGhlYWRlcnMgcHJvdG8nc1xuXHQgKiBAcGFyYW0gc3JjQ3R4XG5cdCAqIEBwYXJhbSB0YXJnZXRDdHhcblx0ICogQHBhcmFtIHN0YXRlXG5cdCAqIEBwYXJhbSBkYXRhXG5cdCAqL1xuXHRyZWxpbmsoIHNyY0N0eCwgdGFyZ2V0Q3R4ID0gdGhpcywgZXh0ZXJuYWwsIGZvcmNlICkge1xuXHRcdGxldCBsY3R4ID0gdGFyZ2V0Q3R4Ll8uc3RvcmVzLnByb3RvdHlwZTtcblx0XHRPYmplY3Qua2V5cyhzcmNDdHgpXG5cdFx0ICAgICAgLmZvckVhY2goXG5cdFx0XHQgICAgICBpZCA9PiB7XG5cdFx0XHRcdCAgICAgIGlmICggIWZvcmNlICYmIHRhcmdldEN0eC5fLl9zY29wZVtpZF0gPT09IHNyY0N0eFtpZF0gfHxcblx0XHRcdFx0XHQgICAgICB0YXJnZXRDdHguXy5fc2NvcGVbaWRdICYmICh0YXJnZXRDdHguXy5fc2NvcGVbaWRdLmNvbnN0cnVjdG9yID09PSBzcmNDdHhbaWRdKSApXG5cdFx0XHRcdFx0ICAgICAgcmV0dXJuO1xuXHRcdFx0XHRcblx0XHRcdFx0ICAgICAgaWYgKCAhZm9yY2UgJiYgdGFyZ2V0Q3R4Ll8uX3Njb3BlW2lkXSApIHtcblx0XHRcdFx0XHQgICAgICBpZiAoICFleHRlcm5hbCAmJiAhaXMuZm4odGFyZ2V0Q3R4Ll8uX3Njb3BlW2lkXSkgKSB7XG5cdFx0XHRcdFx0XHQgICAgICBjb25zb2xlLmluZm8oXCJSZXNjb3BlIFN0b3JlIDogXCIsIGlkLCBcIiBhbHJlYWR5IGV4aXN0IGluIHRoaXMgc2NvcGUgISAoIEhvdCBzd2l0Y2hpbmcgdGhlIHN0b3JlIClcIik7XG5cdFx0XHRcdFx0XHQgICAgICBsZXQgdG1wICAgICAgICAgICAgICAgID0gdGFyZ2V0Q3R4Ll8uX3Njb3BlW2lkXTtcblx0XHRcdFx0XHRcdCAgICAgIHRhcmdldEN0eC5fLl9zY29wZVtpZF0gPSB0YXJnZXRDdHguXy5fc2NvcGVbaWRdLmNvbnN0cnVjdG9yO1xuXHRcdFx0XHRcdFx0ICAgICAgdGhpcy5fbW91bnQoaWQsIG51bGwsIHRtcC5zdGF0ZSk7XG5cdFx0XHRcdFx0XHQgICAgICB0bXAuZGVzdHJveSgpO1xuXHRcdFx0XHRcdFx0ICAgICAgLy90YXJnZXRDdHguXy5fc2NvcGVbIGlkIF0uX19wcm90b19fID0gdG1wLl9fcHJvdG9fXztcblx0XHRcdFx0XHQgICAgICB9XG5cdFx0XHRcdFx0ICAgICAgaWYgKCAhZXh0ZXJuYWwgJiYgaXMuZm4odGFyZ2V0Q3R4Ll8uX3Njb3BlW2lkXSkgKVxuXHRcdFx0XHRcdFx0ICAgICAgdGFyZ2V0Q3R4Ll8uX3Njb3BlW2lkXSA9IHNyY0N0eFtpZF07XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0ICAgICAgcmV0dXJuO1xuXHRcdFx0XHQgICAgICB9XG5cdFx0XHRcdCAgICAgIGVsc2UgaWYgKCAhZm9yY2UgJiYgIWV4dGVybmFsIClcblx0XHRcdFx0XHQgICAgICB0aGlzLl8uX3Njb3BlW2lkXSA9IHNyY0N0eFtpZF07XG5cdFx0XHRcdFxuXHRcdFx0XHQgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoXG5cdFx0XHRcdFx0ICAgICAgbGN0eCxcblx0XHRcdFx0XHQgICAgICBpZCxcblx0XHRcdFx0XHQgICAgICB7XG5cdFx0XHRcdFx0XHQgICAgICBlbnVtZXJhYmxlICA6IHRydWUsXG5cdFx0XHRcdFx0XHQgICAgICBjb25maWd1cmFibGU6IHRydWUsXG5cdFx0XHRcdFx0XHQgICAgICBnZXQgICAgICAgICA6ICgpID0+IHRoaXMuXy5fc2NvcGVbaWRdXG5cdFx0XHRcdFx0ICAgICAgfVxuXHRcdFx0XHQgICAgICApO1xuXHRcdFx0XHQgICAgICBpZiAoIGlkID09IFwiJHBhcmVudFwiICkgcmV0dXJuO1xuXHRcdFx0XHQgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoXG5cdFx0XHRcdFx0ICAgICAgdGFyZ2V0Q3R4Ll8uc3RhdGUucHJvdG90eXBlLFxuXHRcdFx0XHRcdCAgICAgIGlkLFxuXHRcdFx0XHRcdCAgICAgIHtcblx0XHRcdFx0XHRcdCAgICAgIGVudW1lcmFibGUgIDogdHJ1ZSxcblx0XHRcdFx0XHRcdCAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcblx0XHRcdFx0XHRcdCAgICAgIGdldCAgICAgICAgIDogKCkgPT4gKHRoaXMuXy5fc2NvcGVbaWRdICYmIHRoaXMuXy5fc2NvcGVbaWRdLnN0YXRlKSxcblx0XHRcdFx0XHRcdCAgICAgIHNldCAgICAgICAgIDogKCB2ICkgPT4gKHRoaXMuX21vdW50KGlkLCB1bmRlZmluZWQsIHYpKVxuXHRcdFx0XHRcdCAgICAgIH1cblx0XHRcdFx0ICAgICAgKTtcblx0XHRcdFx0ICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFxuXHRcdFx0XHRcdCAgICAgIHRhcmdldEN0eC5fLmRhdGEucHJvdG90eXBlLFxuXHRcdFx0XHRcdCAgICAgIGlkLFxuXHRcdFx0XHRcdCAgICAgIHtcblx0XHRcdFx0XHRcdCAgICAgIGVudW1lcmFibGUgIDogdHJ1ZSxcblx0XHRcdFx0XHRcdCAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcblx0XHRcdFx0XHRcdCAgICAgIGdldCAgICAgICAgIDogKCkgPT4gKHRoaXMuXy5fc2NvcGVbaWRdICYmIHRoaXMuXy5fc2NvcGVbaWRdLmRhdGEpLFxuXHRcdFx0XHRcdFx0ICAgICAgc2V0ICAgICAgICAgOiAoIHYgKSA9PiAodGhpcy5fbW91bnQoaWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB2KSlcblx0XHRcdFx0XHQgICAgICB9XG5cdFx0XHRcdCAgICAgICk7XG5cdFx0XHRcdFxuXHRcdFx0XHQgICAgICBsZXQgYWN0aW9ucyAgICAgICA9IHNyY0N0eFtpZF0gaW5zdGFuY2VvZiBTY29wZS5TdG9yZVxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgID8gc3JjQ3R4W2lkXS5jb25zdHJ1Y3Rvci5hY3Rpb25zXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgOiBzcmNDdHhbaWRdLmFjdGlvbnMsXG5cdFx0XHRcdCAgICAgICAgICBhY3RpdmVBY3Rpb25zID0gdGFyZ2V0Q3R4Ll8uYWN0aW9ucy5wcm90b3R5cGU7XG5cdFx0XHRcdCAgICAgIGlmICggaXMucnNTY29wZSh0aGlzLl8uX3Njb3BlW2lkXS5wcm90b3R5cGUpIClcblx0XHRcdFx0XHQgICAgICB0aGlzLl9tb3VudChpZCk7XG5cdFx0XHRcdCAgICAgIGlmICggaXMucnNTY29wZSh0aGlzLl8uX3Njb3BlW2lkXSkgKSB7XG5cdFx0XHRcdFx0ICAgICAgYWN0aXZlQWN0aW9uc1tpZF0gPSB0aGlzLl8uX3Njb3BlW2lkXS5hY3Rpb25zO1xuXHRcdFx0XHQgICAgICB9XG5cdFx0XHRcdCAgICAgIGlmICggIWlzLnJzU3RvcmUodGhpcy5fLl9zY29wZVtpZF0pICYmICFpcy5yc1N0b3JlQ2xhc3ModGhpcy5fLl9zY29wZVtpZF0pIClcblx0XHRcdFx0XHQgICAgICByZXR1cm47XG5cdFx0XHRcdFxuXHRcdFx0XHQgICAgICBhY3Rpb25zICYmXG5cdFx0XHRcdCAgICAgIE9iamVjdC5rZXlzKGFjdGlvbnMpXG5cdFx0XHRcdCAgICAgICAgICAgIC5mb3JFYWNoKFxuXHRcdFx0XHRcdCAgICAgICAgICAgICggYWN0ICkgPT4ge1xuXHRcdFx0XHRcdFx0ICAgICAgICAgICAgaWYgKCBhY3RpdmVBY3Rpb25zLmhhc093blByb3BlcnR5KGFjdCkgKVxuXHRcdFx0XHRcdFx0XHQgICAgICAgICAgICBhY3RpdmVBY3Rpb25zW2FjdF0uX190YXJnZXRTdG9yZXMrKztcblx0XHRcdFx0XHRcdCAgICAgICAgICAgIGVsc2Uge1xuXHRcdFx0XHRcdFx0XHQgICAgICAgICAgICBhY3RpdmVBY3Rpb25zW2FjdF0gICAgICAgICAgICAgICAgPSB0aGlzLmRpc3BhdGNoLmJpbmQodGhpcywgYWN0KTtcblx0XHRcdFx0XHRcdFx0ICAgICAgICAgICAgYWN0aXZlQWN0aW9uc1thY3RdLl9fdGFyZ2V0U3RvcmVzID0gMTtcblx0XHRcdFx0XHRcdCAgICAgICAgICAgIH1cblx0XHRcdFx0XHQgICAgICAgICAgICB9XG5cdFx0XHRcdCAgICAgICAgICAgIClcblx0XHRcdCAgICAgIH1cblx0XHQgICAgICApXG5cdH1cblx0XG5cdC8qKlxuXHQgKiBCaW5kIHN0b3JlcyBmcm9tIHRoaXMgc2NvcGUsIGhpcyBwYXJlbnRzIGFuZCBtaXhlZCBzY29wZVxuXHQgKlxuXHQgKiBAcGFyYW0gb2JqIHtSZWFjdC5Db21wb25lbnR8U3RvcmV8ZnVuY3Rpb259XG5cdCAqIEBwYXJhbSBrZXkge3N0cmluZ30gc3RvcmVzIGtleXMgdG8gYmluZCB1cGRhdGVzXG5cdCAqIEBwYXJhbSBhc1xuXHQgKiBAcGFyYW0gc2V0SW5pdGlhbCB7Ym9vbH0gZmFsc2UgdG8gbm90IHByb3BhZyBpbml0aWFsIHZhbHVlIChkZWZhdWx0IDogdHJ1ZSlcblx0ICovXG5cdGJpbmQoIG9iaiwga2V5LCBhcywgc2V0SW5pdGlhbCA9IHRydWUsIHJldk1hcCA9IHt9ICkge1xuXHRcdGxldCBsYXN0UmV2cywgZGF0YSwgcmVmS2V5cztcblx0XHRpZiAoIGtleSAmJiAhaXMuYXJyYXkoa2V5KSApXG5cdFx0XHRrZXkgPSBba2V5XTtcblx0XHRcblx0XHRpZiAoIGFzID09PSBmYWxzZSB8fCBhcyA9PT0gdHJ1ZSApIHtcblx0XHRcdHNldEluaXRpYWwgPSBhcztcblx0XHRcdGFzICAgICAgICAgPSBudWxsO1xuXHRcdH1cblx0XHRcblx0XHRyZWZLZXlzID0ga2V5XG5cdFx0XHQubWFwKGlkID0+IChpcy5zdHJpbmcoaWQpID8gaWQgOiBpZC5uYW1lKSlcblx0XHRcdC5tYXAoaWQgPT4gKHRoaXMucGFyc2VSZWYoaWQpKSk7XG5cdFx0XG5cdFx0XG5cdFx0dGhpcy5fLmZvbGxvd2Vycy5wdXNoKFxuXHRcdFx0W1xuXHRcdFx0XHRvYmosXG5cdFx0XHRcdGtleSxcblx0XHRcdFx0YXMgfHwgdW5kZWZpbmVkLFxuXHRcdFx0XHRsYXN0UmV2cyA9IHJlZktleXMucmVkdWNlKCggcmV2cywgcmVmICkgPT4ge1xuXHRcdFx0XHRcdHJldnNbcmVmLnN0b3JlSWRdID0gcmV2c1tyZWYuc3RvcmVJZF0gfHwge1xuXHRcdFx0XHRcdFx0cmV2IDogMCxcblx0XHRcdFx0XHRcdHJlZnM6IFtdXG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRyZXZzW3JlZi5zdG9yZUlkXS5yZWZzLnB1c2gocmVmKTtcblx0XHRcdFx0XHRyZXR1cm4gcmV2cztcblx0XHRcdFx0fSwgcmV2TWFwKVxuXHRcdFx0XSk7XG5cdFx0XG5cdFx0dGhpcy5tb3VudChrZXkpO1xuXHRcdHRoaXMucmV0YWluU3RvcmVzKE9iamVjdC5rZXlzKGxhc3RSZXZzKSwgJ2xpc3RlbmVycycpO1xuXHRcdFxuXHRcdGlmICggc2V0SW5pdGlhbCAmJiB0aGlzLl9zdGFibGUgKSB7XG5cdFx0XHRkYXRhID0gdGhpcy5nZXRVcGRhdGVzKGxhc3RSZXZzKTtcblx0XHRcdGlmICggIWRhdGEgKSByZXR1cm4gdGhpcztcblx0XHRcdGlmICggdHlwZW9mIG9iaiAhPSBcImZ1bmN0aW9uXCIgKSB7XG5cdFx0XHRcdGlmICggYXMgKSBvYmouc2V0U3RhdGUoeyBbYXNdOiBkYXRhIH0pO1xuXHRcdFx0XHRlbHNlIG9iai5zZXRTdGF0ZShkYXRhKTtcblx0XHRcdH1cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHRvYmooZGF0YSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cdFxuXHQvKipcblx0ICogVW4gYmluZCB0aGlzIHNjb3BlIG9mZiB0aGUgZ2l2ZW4gY29tcG9uZW50LWtleXNcblx0ICogQHBhcmFtIG9ialxuXHQgKiBAcGFyYW0ga2V5XG5cdCAqIEByZXR1cm5zIHtBcnJheS48Kj59XG5cdCAqL1xuXHR1bkJpbmQoIG9iaiwga2V5LCBhcyApIHtcblx0XHR2YXIgZm9sbG93ZXJzID0gdGhpcy5fLmZvbGxvd2Vycyxcblx0XHQgICAgaSAgICAgICAgID0gZm9sbG93ZXJzICYmIGZvbGxvd2Vycy5sZW5ndGg7XG5cdFx0d2hpbGUgKCBmb2xsb3dlcnMgJiYgaS0tIClcblx0XHRcdGlmICggZm9sbG93ZXJzW2ldWzBdID09PSBvYmogJiZcblx0XHRcdFx0KCcnICsgZm9sbG93ZXJzW2ldWzFdKSA9PSAoJycgKyBrZXkpICYmXG5cdFx0XHRcdGZvbGxvd2Vyc1tpXVsyXSA9PSBhcyApIHtcblx0XHRcdFx0dGhpcy5kaXNwb3NlU3RvcmVzKE9iamVjdC5rZXlzKGZvbGxvd2Vyc1tpXVszXSksICdsaXN0ZW5lcnMnKTtcblx0XHRcdFx0cmV0dXJuIGZvbGxvd2Vycy5zcGxpY2UoaSwgMSk7XG5cdFx0XHR9XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBNb3VudCB0aGUgc3RvcmVzIGluIHN0b3Jlc0xpc3QgZnJvbSB0aGlzIHNjb3BlLCBpdHMgcGFyZW50cyBhbmQgbWl4ZWQgc2NvcGVcblx0ICogQmluZCB0aGVtIHRvICd0bydcblx0ICogSG9vayAndG8nIHNvIGl0IHdpbGwgYXV0byB1bmJpbmQgb24gJ2Rlc3Ryb3knIG9yICdjb21wb25lbnRXaWxsVW5tb3VudCdcblx0ICogQHBhcmFtIHRvXG5cdCAqIEBwYXJhbSBzdG9yZXNMaXN0XG5cdCAqIEBwYXJhbSBiaW5kXG5cdCAqIEByZXR1cm5zIHtPYmplY3R9IEluaXRpYWwgb3V0cHV0cyBvZiB0aGUgc3RvcmVzIGluICdzdG9yZXNMaXN0J1xuXHQgKi9cblx0bWFwKCB0bywgc3RvcmVzTGlzdCwgYmluZCA9IHRydWUsIHJldk1hcCApIHtcblx0XHRsZXQgU3RvcmUgICA9IHRoaXMuY29uc3RydWN0b3IuU3RvcmU7XG5cdFx0c3RvcmVzTGlzdCAgPSBpcy5hcnJheShzdG9yZXNMaXN0KSA/IHN0b3Jlc0xpc3QgOiBbc3RvcmVzTGlzdF07XG5cdFx0bGV0IHJlZkxpc3QgPSBzdG9yZXNMaXN0Lm1hcCh0aGlzLnBhcnNlUmVmKTtcblx0XHR0aGlzLm1vdW50KHN0b3Jlc0xpc3QpO1xuXHRcdGlmICggYmluZCAmJiB0byBpbnN0YW5jZW9mIFN0b3JlICkge1xuXHRcdFx0U3RvcmUubWFwKHRvLCBzdG9yZXNMaXN0LCB0aGlzLCB0aGlzLCBmYWxzZSlcblx0XHR9XG5cdFx0ZWxzZSBpZiAoIGJpbmQgKSB7XG5cdFx0XHR0aGlzLmJpbmQodG8sIHN0b3Jlc0xpc3QsIHVuZGVmaW5lZCwgZmFsc2UpO1xuXHRcdFx0XG5cdFx0XHRsZXQgbWl4ZWRDV1VubW91bnQsXG5cdFx0XHQgICAgdW5Nb3VudEtleSA9IHRvLmlzUmVhY3RDb21wb25lbnQgPyBcImNvbXBvbmVudFdpbGxVbm1vdW50XCIgOiBcImRlc3Ryb3lcIjtcblx0XHRcdFxuXHRcdFx0aWYgKCB0by5oYXNPd25Qcm9wZXJ0eSh1bk1vdW50S2V5KSApIHtcblx0XHRcdFx0bWl4ZWRDV1VubW91bnQgPSB0b1t1bk1vdW50S2V5XTtcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0dG9bdW5Nb3VudEtleV0gPSAoIC4uLmFyZ3ogKSA9PiB7XG5cdFx0XHRcdGRlbGV0ZSB0b1t1bk1vdW50S2V5XTtcblx0XHRcdFx0aWYgKCBtaXhlZENXVW5tb3VudCApXG5cdFx0XHRcdFx0dG9bdW5Nb3VudEtleV0gPSBtaXhlZENXVW5tb3VudDtcblx0XHRcdFx0XG5cdFx0XHRcdHRoaXMudW5CaW5kKHRvLCBzdG9yZXNMaXN0KTtcblx0XHRcdFx0cmV0dXJuIHRvW3VuTW91bnRLZXldICYmIHRvW3VuTW91bnRLZXldKC4uLmFyZ3opO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0fVxuXHRcdHJldHVybiByZXZNYXAgJiYgdGhpcy5nZXRVcGRhdGVzKHJldk1hcCkgfHwgcmVmTGlzdC5yZWR1Y2UoKCBkYXRhLCByZWYgKSA9PiB7XG5cdFx0XHR3YWxrblNldChkYXRhLCByZWYuYWxpYXMgfHwgcmVmLnBhdGgsIHRoaXMucmV0cmlldmUocmVmLnBhdGgpKVxuXHRcdFx0cmV0dXJuIGRhdGE7XG5cdFx0fSwge30pO1xuXHR9XG5cdFxuXHQvKipcblx0ICogR2V0IGN1cnJlbnQgZGF0YSB2YWx1ZSBmcm9tIGpzb24gcGF0aFxuXHQgKiBAcGFyYW0gcGF0aFxuXHQgKiBAcmV0dXJucyB7c3RyaW5nfCp9XG5cdCAqL1xuXHRyZXRyaWV2ZSggcGF0aCA9IFwiXCIgKSB7XG5cdFx0cGF0aCA9IGlzLnN0cmluZyhwYXRoKSA/IHBhdGguc3BsaXQoJy4nKSA6IHBhdGg7XG5cdFx0cmV0dXJuIHBhdGggJiZcblx0XHRcdHRoaXMuc3RvcmVzW3BhdGhbMF1dICYmXG5cdFx0XHR0aGlzLnN0b3Jlc1twYXRoWzBdXS5yZXRyaWV2ZSAmJlxuXHRcdFx0dGhpcy5zdG9yZXNbcGF0aFswXV0ucmV0cmlldmUocGF0aC5zbGljZSgxKSk7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBHZXQgY3VycmVudCBzdG9yZSBmcm9tIGpzb24gcGF0aFxuXHQgKiBAcGFyYW0gcGF0aFxuXHQgKiBAcmV0dXJucyB7c3RyaW5nfCp9XG5cdCAqL1xuXHRyZXRyaWV2ZVN0b3JlKCBwYXRoID0gXCJcIiApIHtcblx0XHRwYXRoID0gaXMuc3RyaW5nKHBhdGgpID8gcGF0aC5zcGxpdCgnLicpIDogcGF0aDtcblx0XHRyZXR1cm4gcGF0aFxuXHRcdFx0JiYgcGF0aC5sZW5ndGhcblx0XHRcdCYmIChcblx0XHRcdFx0cGF0aC5sZW5ndGggIT0gMSAmJiB0aGlzLnN0b3Jlc1twYXRoWzBdXS5yZXRyaWV2ZVN0b3JlXG5cdFx0XHRcdD8gdGhpcy5zdG9yZXNbcGF0aFswXV0ucmV0cmlldmVTdG9yZShwYXRoLnNsaWNlKDEpKVxuXHRcdFx0XHQ6IHBhdGgubGVuZ3RoID09IDEgJiYgdGhpcy5zdG9yZXNbcGF0aFswXV1cblx0XHRcdCk7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBHZXQgb3IgdXBkYXRlIHN0b3Jlc1Jldk1hcCdzIHJldmlzaW9uc1xuXHQgKiBAcGFyYW0gc3RvcmVzUmV2TWFwXG5cdCAqIEBwYXJhbSBsb2NhbFxuXHQgKiBAcmV0dXJucyB7e319XG5cdCAqL1xuXHRnZXRTdG9yZXNSZXZzKCBzdG9yZXNSZXZNYXAgPSB7fSwgbG9jYWwgKSB7XG5cdFx0bGV0IGN0eCA9IHRoaXMuXy5fc2NvcGU7XG5cdFx0aWYgKCAhc3RvcmVzUmV2TWFwICkge1xuXHRcdFx0c3RvcmVzUmV2TWFwID0ge307XG5cdFx0fVxuXHRcdE9iamVjdC5rZXlzKGN0eCkuZm9yRWFjaChcblx0XHRcdGlkID0+IHtcblx0XHRcdFx0aWYgKCBpZCA9PSBcIiRwYXJlbnRcIiApIHJldHVybjtcblx0XHRcdFx0aWYgKCAhaXMuZm4oY3R4W2lkXSlcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0c3RvcmVzUmV2TWFwW2lkXSA9IGN0eFtpZF0uX3Jldjtcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlIGlmICggIXN0b3Jlc1Jldk1hcC5oYXNPd25Qcm9wZXJ0eShpZCkgKVxuXHRcdFx0XHRcdHN0b3Jlc1Jldk1hcFtpZF0gPSBmYWxzZVxuXHRcdFx0fVxuXHRcdCk7XG5cdFx0aWYgKCAhbG9jYWwgKSB7XG5cdFx0XHR0aGlzLl8uX21peGVkLnJlZHVjZSgoIHVwZGF0ZWQsIGN0eCApID0+IChjdHguZ2V0U3RvcmVzUmV2cyhzdG9yZXNSZXZNYXApLCBzdG9yZXNSZXZNYXApLCBzdG9yZXNSZXZNYXApO1xuXHRcdFx0dGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuZ2V0U3RvcmVzUmV2cyhzdG9yZXNSZXZNYXApO1xuXHRcdH1cblx0XHRyZXR1cm4gc3RvcmVzUmV2TWFwO1xuXHR9XG5cdFxuXHQvKipcblx0ICogR2V0IHVwZGF0ZWQgb3V0cHV0IGJhc2luZyBzdG9yZXNSZXZNYXAncyByZXZpc2lvbnMuXG5cdCAqIElmIGEgc3RvcmUgaW4gJ3N0b3Jlc1Jldk1hcCcgd2FzIHVwZGF0ZWQ7IGFkZCBpdCB0byAnb3V0cHV0JyAmIHVwZGF0ZSBzdG9yZXNSZXZNYXBcblx0ICogQHBhcmFtIHN0b3Jlc1Jldk1hcFxuXHQgKiBAcGFyYW0gb3V0cHV0XG5cdCAqIEBwYXJhbSB1cGRhdGVkXG5cdCAqIEByZXR1cm5zIHsqfHt9fVxuXHQgKi9cblx0Z2V0UmVmc1VwZGF0ZXMoIHJlZnMsIHJldk1hcCwgb3V0cHV0ICkge1xuXHRcdFxuXHRcdHJldk1hcCA9IHJldk1hcCB8fCByZWZzXG5cdFx0XHQubWFwKGlkID0+IChpcy5zdHJpbmcoaWQpID8gaWQgOiBpZC5uYW1lKSlcblx0XHRcdC5tYXAoaWQgPT4gKHRoaXMucGFyc2VSZWYoaWQpKSlcblx0XHRcdC5yZWR1Y2UoKCByZXZzLCByZWYgKSA9PiB7XG5cdFx0XHRcdHJldnNbcmVmLnN0b3JlSWRdID0gcmV2c1tyZWYuc3RvcmVJZF0gfHwge1xuXHRcdFx0XHRcdHJldiA6IDAsXG5cdFx0XHRcdFx0cmVmczogW11cblx0XHRcdFx0fTtcblx0XHRcdFx0cmV2c1tyZWYuc3RvcmVJZF0ucmVmcy5wdXNoKHJlZik7XG5cdFx0XHRcdHJldHVybiByZXZzO1xuXHRcdFx0fSwge30pO1xuXHRcdFxuXHRcdHJldHVybiB0aGlzLmdldFVwZGF0ZXMocmV2TWFwLCBvdXRwdXQpXG5cdFx0XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBHZXQgb3IgdXBkYXRlIG91dHB1dCBiYXNpbmcgc3RvcmVzUmV2TWFwJ3MgcmV2aXNpb25zLlxuXHQgKiBJZiBhIHN0b3JlIGluICdzdG9yZXNSZXZNYXAnIHdhcyB1cGRhdGVkOyBhZGQgaXQgdG8gJ291dHB1dCcgJiB1cGRhdGUgc3RvcmVzUmV2TWFwXG5cdCAqIEB0b2RvOiBvcHRpbSAvIHVzZSBwcm90b3Ncblx0ICogQHBhcmFtIHN0b3Jlc1Jldk1hcFxuXHQgKiBAcGFyYW0gb3V0cHV0XG5cdCAqIEBwYXJhbSB1cGRhdGVkXG5cdCAqIEByZXR1cm5zIHsqfHt9fVxuXHQgKi9cblx0Z2V0VXBkYXRlcyggc3RvcmVzUmV2TWFwLCBvdXRwdXQsIHVwZGF0ZWQgKSB7XG5cdFx0XG5cdFx0b3V0cHV0ICAgICAgID0gb3V0cHV0IHx8IHt9O1xuXHRcdHN0b3Jlc1Jldk1hcCA9IHN0b3Jlc1Jldk1hcCB8fCB0aGlzLl9nZXRSZXZNYXAoKTtcblx0XHRPYmplY3Qua2V5cyhzdG9yZXNSZXZNYXApLmZvckVhY2goXG5cdFx0XHRpZCA9PiB7XG5cdFx0XHRcdGxldCBzdG9yZSAgICAgICAgPSB0aGlzLnN0b3Jlc1tpZF07XG5cdFx0XHRcdHN0b3Jlc1Jldk1hcFtpZF0gPSBzdG9yZXNSZXZNYXBbaWRdIHx8IHsgcmV2OiAwLCByZWZzOiBbXSB9O1xuXHRcdFx0XHRcblx0XHRcdFx0aWYgKCBzdG9yZSAmJiBpcy5mbihzdG9yZSkgKSB7XG5cdFx0XHRcdFx0dXBkYXRlZCAgICA9IHRydWU7XG5cdFx0XHRcdFx0b3V0cHV0W2lkXSA9IHVuZGVmaW5lZDtcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlIGlmICggc3RvcmUgJiYgc3RvcmUuX3JldiA+IHN0b3Jlc1Jldk1hcFtpZF0ucmV2ICkge1xuXHRcdFx0XHRcdHN0b3Jlc1Jldk1hcFtpZF0ucmV2ID0gc3RvcmUuX3Jldjtcblx0XHRcdFx0XHRvdXRwdXRbaWRdICAgICAgICAgICA9IHN0b3JlLmRhdGE7XG5cdFx0XHRcdFx0dXBkYXRlZCAgICAgICAgICAgICAgPSB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0KVxuXHRcdHJldHVybiB1cGRhdGVkICYmIG91dHB1dDtcblx0fVxuXHRcblx0LyoqXG5cdCAqIFJlY3Vyc2l2ZWx5IGdldCBhbGwgc3RvcmVzIHJldnNcblx0ICogQHBhcmFtIGNoaWxkc1xuXHQgKiBAcmV0dXJucyB7QXJyYXl9XG5cdCAqIEBwcml2YXRlXG5cdCAqL1xuXHRfZ2V0UmV2TWFwKCBzdG9yZXNSZXZNYXAgPSB7fSApIHtcblx0XHRsZXQgY3R4ID0gdGhpcy5fLl9zY29wZTtcblx0XHRPYmplY3Qua2V5cyhjdHgpLmZvckVhY2goXG5cdFx0XHRpZCA9PiB7XG5cdFx0XHRcdGlmICggaWQgPT0gXCIkcGFyZW50XCIgfHwgc3RvcmVzUmV2TWFwW2lkXSApIHJldHVybjtcblx0XHRcdFx0c3RvcmVzUmV2TWFwW2lkXSA9IHsgcmV2OiBjdHhbaWRdLl9yZXYsIHJlZnM6IFtdIH07XG5cdFx0XHRcdFxuXHRcdFx0fSk7XG5cdFx0dGhpcy5fLl9taXhlZC5yZWR1Y2VSaWdodChcblx0XHRcdCggc3RvcmVzUmV2TWFwLCBjdHggKSA9PiAoY3R4Ll9nZXRSZXZNYXAoc3RvcmVzUmV2TWFwKSksIHN0b3Jlc1Jldk1hcCk7XG5cdFx0dGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuX2dldFJldk1hcChzdG9yZXNSZXZNYXApO1xuXHRcdHJldHVybiBzdG9yZXNSZXZNYXA7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBSZWN1cnNpdmVseSBnZXQgYWxsIGNoaWxkIHNjb3Blc1xuXHQgKiBAcGFyYW0gY2hpbGRzXG5cdCAqIEByZXR1cm5zIHtBcnJheX1cblx0ICogQHByaXZhdGVcblx0ICovXG5cdF9nZXRBbGxDaGlsZHMoIGNoaWxkcyA9IFtdICkge1xuXHRcdGNoaWxkcy5wdXNoKC4uLnRoaXMuXy5jaGlsZFNjb3Blcyk7XG5cdFx0dGhpcy5fLmNoaWxkU2NvcGVzLmZvckVhY2goXG5cdFx0XHRjdHggPT4ge1xuXHRcdFx0XHRjdHguX2dldEFsbENoaWxkcyhjaGlsZHMpO1xuXHRcdFx0fVxuXHRcdCk7XG5cdFx0cmV0dXJuIGNoaWxkcztcblx0fVxuXHRcblx0LyoqXG5cdCAqIFNlcmlhbGl6ZSBhbGwgYWN0aXZlIHN0b3JlcyBzdGF0ZSAmIGRhdGEgaW4gZXZlcnkgY2hpbGRzICYgbWl4ZWQgc2NvcGVzXG5cdCAqXG5cdCAqIFNjb3BlcyB3aXRob3V0IGtleSBvciBpZCBhcmUgaWdub3JlZFxuXHQgKiBAcGFyYW0gb3V0cHV0XG5cdCAqIEByZXR1cm5zIHt7fX1cblx0ICovXG5cdHNlcmlhbGl6ZSggY2ZnID0ge30sIG91dHB1dCA9IHt9ICkge1xuXHRcdGxldCBjdHggICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSB0aGlzLl8uX3Njb3BlLFxuXHRcdCAgICB7IGJhc2VJZCwga2V5LCBrZXlQSUQsIGluY3JlbWVudElkIH0gPSB0aGlzLl8sXG5cdFx0ICAgIHtcblx0XHRcdCAgICBhbGlhcyxcblx0XHRcdCAgICBwYXJlbnRBbGlhcyxcblx0XHQgICAgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID0gY2ZnLFxuXHRcdCAgICBzaWQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSBrZXlcblx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAocGFyZW50QWxpYXMgfHwga2V5UElEKSArICc+JyArIGtleVxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGFsaWFzIHx8IHBhcmVudEFsaWFzICYmIChwYXJlbnRBbGlhcyArICcvJyArIGJhc2VJZCkgfHwgdGhpcy5faWQ7XG5cdFx0XG5cdFx0XG5cdFx0Ly9hbGlhcyA9IGFsaWFzIHx8IGJhc2VJZDtcblx0XHRyZXR1cm4gdGhpcy5zZXJpYWxpemVfZXgoY2ZnLCBvdXRwdXQsIHNpZCwgYWxpYXMsIFtcIiRwYXJlbnRcIl0pXG5cdH1cblx0XG5cdHNlcmlhbGl6ZV9leCggY2ZnID0ge30sIG91dHB1dCA9IHt9LCBzaWQsIGFsaWFzLCBleGNsdWRlICkge1xuXHRcdGxldCBjdHggICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSB0aGlzLl8uX3Njb3BlLFxuXHRcdCAgICB7IGJhc2VJZCwga2V5LCBrZXlQSUQsIGluY3JlbWVudElkIH0gPSB0aGlzLl8sXG5cdFx0ICAgIHtcblx0XHRcdCAgICB3aXRoQ2hpbGRzID0gdHJ1ZSxcblx0XHRcdCAgICB3aXRoUGFyZW50cyxcblx0XHRcdCAgICB3aXRoTWl4ZWQgID0gdHJ1ZSxcblx0XHRcdCAgICBub3JlZnMsXG5cdFx0XHQgICAgcGFyZW50QWxpYXMsXG5cdFx0XHQgICAgYWxpYXNlcyAgICA9IHt9XG5cdFx0ICAgIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA9IGNmZztcblx0XHRcblx0XHRpZiAoIGtleVdhbGtuR2V0KG91dHB1dCwgc2lkKSApIHtcblx0XHRcdGlmICggIWluY3JlbWVudElkICkvLyBkb25lXG5cdFx0XHRcdHJldHVybiBvdXRwdXQ7XG5cdFx0XHRlbHNlIGlmICggaW5jcmVtZW50SWQgKSB7Ly8gZ2VuZXJhdGUga2V5IGlkXG5cdFx0XHRcdGxldCBpID0gLTE7XG5cdFx0XHRcdHdoaWxlICgga2V5V2Fsa25HZXQob3V0cHV0LCBzaWQgKyAnWycgKyAoKytpKSArICddJykgKSA7XG5cdFx0XHRcdHNpZCA9IHNpZCArICdbJyArIGkgKyAnXSc7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdC8vQHRvZG8gOiBiZXR0ZXIgc2VyaWFsaXplIG1ldGhvZFxuXHRcdGtleVdhbGtuU2V0KG91dHB1dCwgc2lkLCB7fSk7XG5cdFx0XG5cdFx0T2JqZWN0LmtleXMoY3R4KS5mb3JFYWNoKFxuXHRcdFx0aWQgPT4ge1xuXHRcdFx0XHRpZiAoIGV4Y2x1ZGUuaW5jbHVkZXMoaWQpIHx8IGlzLnJzU3RvcmVDbGFzcyhjdHhbaWRdKSB8fCBpcy5yc1Njb3BlQ2xhc3MoY3R4W2lkXSkgKVxuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XG5cdFx0XHRcdGN0eFtpZF0uc2VyaWFsaXplKHsgLi4uY2ZnLCBwYXJlbnRBbGlhczogc2lkIH0sIG91dHB1dCk7XG5cdFx0XHR9XG5cdFx0KVxuXHRcdFxuXHRcdC8vd2l0aFBhcmVudHMgJiYgdGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuc2VyaWFsaXplKHtcblx0XHQvL1x0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpdGhDaGlsZCAgOiBmYWxzZSxcblx0XHQvL1x0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpdGhQYXJlbnRzOiB0cnVlLFxuXHRcdC8vXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aE1peGVkLFxuXHRcdC8vXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9yZWZzXG5cdFx0Ly8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgb3V0cHV0KTtcblx0XHRcblx0XHR3aXRoQ2hpbGRzICYmIHRoaXMuXy5jaGlsZFNjb3Blcy5mb3JFYWNoKFxuXHRcdFx0Y3R4ID0+IHtcblx0XHRcdFx0IWN0eC5fLmlzTG9jYWxJZCAmJiBjdHguc2VyaWFsaXplKHtcblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aENoaWxkICA6IHRydWUsXG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpdGhQYXJlbnRzOiBmYWxzZSxcblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50QWxpYXM6IHNpZCxcblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aE1peGVkLFxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JlZnMsXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBvdXRwdXQpO1xuXHRcdFx0fVxuXHRcdCk7XG5cdFx0XG5cdFx0d2l0aE1peGVkICYmIHRoaXMuXy5fbWl4ZWQuZm9yRWFjaChcblx0XHRcdGN0eCA9PiB7XG5cdFx0XHRcdCFjdHguXy5pc0xvY2FsSWQgJiYgY3R4LnNlcmlhbGl6ZSh7XG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpdGhDaGlsZCAgOiBmYWxzZSxcblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aFBhcmVudHM6IGZhbHNlLFxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRoTWl4ZWQsXG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcmVmc1xuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgb3V0cHV0KTtcblx0XHRcdH1cblx0XHQpO1xuXHRcdFxuXHRcdGlmICggYWxpYXMgKSB7XG5cdFx0XHRvdXRwdXQgPSBPYmplY3Qua2V5cyhvdXRwdXQpXG5cdFx0XHQgICAgICAgICAgICAgICAucmVkdWNlKFxuXHRcdFx0XHQgICAgICAgICAgICAgICAoIGgsIGsgKSA9PiAoXG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgaFtrID09PSB0aGlzLl9pZFxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgPyBhbGlhc1xuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgOiBrXSA9IG91dHB1dFtrXSxcblx0XHRcdFx0XHRcdCAgICAgICAgICAgICAgIGhcblx0XHRcdFx0ICAgICAgICAgICAgICAgKSxcblx0XHRcdFx0ICAgICAgICAgICAgICAge31cblx0XHRcdCAgICAgICAgICAgICAgIClcblx0XHR9XG5cdFx0cmV0dXJuIG91dHB1dDtcblx0fVxuXHRcblx0LyoqXG5cdCAqIFJlc3RvcmUgc3RhdGUgJiBkYXRhIGZyb20gdGhlIHNlcmlhbGl6ZSBmblxuXHQgKiBAcGFyYW0gc25hcHNob3Rcblx0ICogQHBhcmFtIGZvcmNlXG5cdCAqL1xuXHRyZXN0b3JlKCBzbmFwc2hvdCwgY2ZnID0ge30sIGZvcmNlID0gaXMuYm9vbChjZmcpICYmIGNmZyApIHtcblx0XHRsZXQgY3R4ID0gdGhpcy5fLl9zY29wZSwgc25hcDtcblx0XHRcblx0XHRpZiAoIHNuYXBzaG90ICYmIGNmZyAmJiBjZmcuYWxpYXMgJiYgY2ZnLmFsaWFzICE9IHRoaXMuX2lkICkge1xuXHRcdFx0c25hcCA9IHtcblx0XHRcdFx0Li4uc25hcHNob3QsXG5cdFx0XHRcdFt0aGlzLl9pZF06IHNuYXBzaG90W2NmZy5hbGlhc11cblx0XHRcdH1cblx0XHRcdGRlbGV0ZSBzbmFwW2NmZy5hbGlhc107XG5cdFx0XHRzbmFwc2hvdCA9IHNuYXA7XG5cdFx0fVxuXHRcdHNuYXBzaG90ID0gc25hcHNob3Rcblx0XHRcdCYmIGtleVdhbGtuR2V0KHNuYXBzaG90LCB0aGlzLl9pZClcblx0XHRcdHx8IHRoaXMudGFrZVNuYXBzaG90QnlLZXkodGhpcy5faWQpO1xuXHRcdFxuXHRcdFxuXHRcdGlmICggIXNuYXBzaG90IClcblx0XHRcdHJldHVybjtcblx0XHRcblx0XHR0aGlzLl8uc25hcHNob3QgPSB7IC4uLnNuYXBzaG90IH07XG5cdFx0XG5cdFx0c25hcCAgICAgICAgICA9IHNuYXBzaG90WycvJ107XG5cdFx0c25hcHNob3RbJy8nXSA9IHsgLi4uc25hcCB9O1xuXHRcdHNuYXAgJiYgT2JqZWN0LmtleXMoc25hcCkuZm9yRWFjaChcblx0XHRcdG5hbWUgPT4ge1xuXHRcdFx0XHRpZiAoIG5hbWUgPT0gXCIkcGFyZW50XCIgKSByZXR1cm47XG5cdFx0XHRcdFxuXHRcdFx0XHRpZiAoIGN0eFtuYW1lXSApIHtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHRpZiAoIGZvcmNlICYmICFpcy5mbihjdHhbbmFtZV0pIClcblx0XHRcdFx0XHRcdGN0eFtuYW1lXS5kZXN0cm95KCk7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0dGhpcy5fbW91bnQobmFtZSk7Ly8gcXVpZXRcblx0XHRcdFx0fVxuXHRcdFx0XHRcblx0XHRcdH1cblx0XHQpXG5cdFx0XG5cdFx0dGhpcy5fLl9taXhlZC5mb3JFYWNoKFxuXHRcdFx0Y3R4ID0+IHtcblx0XHRcdFx0IWN0eC5fLmlzTG9jYWxJZCAmJiBjdHgucmVzdG9yZSh1bmRlZmluZWQsIGZvcmNlKTtcblx0XHRcdH1cblx0XHQpO1xuXHRcdFxuXHRcdHRoaXMuXy5jaGlsZFNjb3Blcy5mb3JFYWNoKFxuXHRcdFx0Y3R4ID0+IHtcblx0XHRcdFx0IWN0eC5fLmlzTG9jYWxJZCAmJiBjdHgucmVzdG9yZSh1bmRlZmluZWQsIGZvcmNlKTtcblx0XHRcdH1cblx0XHQpO1xuXHR9XG5cdFxuXHRnZXRTbmFwc2hvdEJ5S2V5KCBrZXksIGxvY2FsICkge1xuXHRcdC8vIG9ubHkgaGF2ZSB0aGUgbG9jYWwgc25hcFxuXHRcdGlmICggdGhpcy5fLnNuYXBzaG90ICYmIGtleS5zdGFydHNXaXRoKHRoaXMuX2lkKSApIHtcblx0XHRcdGxldCBvYmogPSBrZXlXYWxrbkdldCh0aGlzLl8uc25hcHNob3QsIGtleS5zdWJzdHIodGhpcy5faWQubGVuZ3RoKSlcblx0XHRcdC8vaWYgKCBvYmogKSB7XG5cdFx0XHQvLyAgICB0aGlzLmRlbGV0ZVNuYXBzaG90QnlLZXkoa2V5KTtcblx0XHRcdC8vfVxuXHRcdFx0cmV0dXJuIG9iajtcblx0XHR9XG5cdFx0ZWxzZSByZXR1cm4gIWxvY2FsXG5cdFx0XHQmJiB0aGlzLnBhcmVudFxuXHRcdFx0JiYgdGhpcy5wYXJlbnQuZ2V0U25hcHNob3RCeUtleShrZXkpXG5cdFx0XHR8fFxuXHRcdFx0dGhpcy5zdG9yZXMuJHBhcmVudFxuXHRcdFx0JiYgdGhpcy5zdG9yZXMuJHBhcmVudC5nZXRTbmFwc2hvdEJ5S2V5KGtleSk7XG5cdFx0XG5cdH1cblx0XG5cdGdldFNuYXBzaG90QnlLZXlFeHQoIHNuYXBzaG90LCBrZXksIGxvY2FsICkge1xuXHRcdC8vIG9ubHkgaGF2ZSB0aGUgbG9jYWwgc25hcFxuXHRcdGlmICggc25hcHNob3QgKSB7XG5cdFx0XHRsZXQgb2JqID0ga2V5V2Fsa25HZXQoc25hcHNob3QsIGtleSlcblx0XHRcdHJldHVybiBvYmo7XG5cdFx0fVxuXHRcdFxuXHR9XG5cdFxuXHR0YWtlU25hcHNob3RCeUtleSgga2V5LCBsb2NhbCApIHtcblx0XHRpZiAoIHRoaXMuXy5zbmFwc2hvdCAmJiBrZXkuc3RhcnRzV2l0aCh0aGlzLl9pZCkgKSB7XG5cdFx0XHRsZXQgb2JqID0ga2V5V2Fsa25HZXQodGhpcy5fLnNuYXBzaG90LCBrZXkuc3Vic3RyKHRoaXMuX2lkLmxlbmd0aCkpXG5cdFx0XHRpZiAoIG9iaiApIHtcblx0XHRcdFx0dGhpcy5kZWxldGVTbmFwc2hvdEJ5S2V5KGtleSwgdHJ1ZSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gb2JqO1xuXHRcdH1cblx0XHRlbHNlIHJldHVybiAhbG9jYWxcblx0XHRcdCYmIHRoaXMucGFyZW50XG5cdFx0XHQmJiB0aGlzLnBhcmVudC50YWtlU25hcHNob3RCeUtleShrZXkpXG5cdFx0XHR8fFxuXHRcdFx0dGhpcy5zdG9yZXMuJHBhcmVudFxuXHRcdFx0JiYgdGhpcy5zdG9yZXMuJHBhcmVudC50YWtlU25hcHNob3RCeUtleShrZXkpO1xuXHR9XG5cdFxuXHRkZWxldGVTbmFwc2hvdEJ5S2V5KCBrZXksIGxvY2FsICkge1xuXHRcdGlmICggdGhpcy5fLnNuYXBzaG90ICYmIGtleS5zdGFydHNXaXRoKHRoaXMuX2lkKSApIHtcblx0XHRcdGxldCBvYmogPSBrZXlXYWxrbkdldCh0aGlzLl8uc25hcHNob3QsIGtleS5zdWJzdHIodGhpcy5faWQubGVuZ3RoKS5yZXBsYWNlKC9eKC4qW1xcPnxcXC9dKVteXFw+fFxcL10rJC9pZywgJyQxJykpXG5cdFx0XHRpZiAoIG9iaiApXG5cdFx0XHRcdGRlbGV0ZSBvYmpba2V5LnJlcGxhY2UoL14uKltcXD58XFwvXShbXlxcPnxcXC9dKykkL2lnLCAnJDEnKV1cblx0XHR9XG5cdFx0cmV0dXJuICFsb2NhbFxuXHRcdFx0JiYgdGhpcy5wYXJlbnRcblx0XHRcdCYmIHRoaXMucGFyZW50LmRlbGV0ZVNuYXBzaG90QnlLZXkoa2V5KVxuXHRcdFx0fHxcblx0XHRcdHRoaXMuc3RvcmVzLiRwYXJlbnRcblx0XHRcdCYmIHRoaXMuc3RvcmVzLiRwYXJlbnQuZGVsZXRlU25hcHNob3RCeUtleShrZXkpO1xuXHR9XG5cdFxuXHRzZXRTdGF0ZSggcFN0YXRlICkge1xuXHRcdE9iamVjdC5rZXlzKHBTdGF0ZSlcblx0XHQgICAgICAuZm9yRWFjaChrID0+ICh0aGlzLnN0YXRlW2tdID0gcFN0YXRlW2tdKSlcblx0fVxuXHRcblx0LyoqXG5cdCAqIGdldCBhIHBhcnNlZCByZWZlcmVuY2Vcblx0ICogQHBhcmFtIF9yZWZcblx0ICogQHJldHVybnMge3tzdG9yZUlkLCBwYXRoLCBhbGlhczogKiwgcmVmOiAqfX1cblx0ICovXG5cdHBhcnNlUmVmKCBfcmVmICkge1xuXHRcdGlmICggdHlwZW9mIF9yZWYgIT09ICdzdHJpbmcnICkge1xuXHRcdFx0dGhpcy5yZWdpc3Rlcih7IFtfcmVmLm5hbWVdOiBfcmVmLnN0b3JlIH0pO1xuXHRcdFx0X3JlZiA9IF9yZWYubmFtZTtcblx0XHR9XG5cdFx0bGV0IHJlZiA9IF9yZWYuc3BsaXQoJzonKTtcblx0XHRyZWZbMF0gID0gcmVmWzBdLnNwbGl0KCcuJyk7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHN0b3JlSWQ6IHJlZlswXVswXSxcblx0XHRcdHBhdGggICA6IHJlZlswXSxcblx0XHRcdGFsaWFzICA6IHJlZlsxXSB8fCByZWZbMF1bcmVmWzBdLmxlbmd0aCAtIDFdLFxuXHRcdFx0cmVmICAgIDogX3JlZlxuXHRcdH07XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBEaXNwYXRjaCBhbiBhY3Rpb24gdG8gdGhlIHRvcCBwYXJlbnQgJiBtaXhlZCBzY29wZXMsIGluIGFsbCBzdG9yZXNcblx0ICpcblx0ICogQHBhcmFtIGFjdGlvblxuXHQgKiBAcGFyYW0gZGF0YVxuXHQgKiBAcmV0dXJucyB7U2NvcGV9XG5cdCAqL1xuXHRkaXNwYXRjaCggYWN0aW9uLCAuLi5hcmd6ICkge1xuXHRcdGlmICggdGhpcy5kZWFkICkge1xuXHRcdFx0Y29uc29sZS53YXJuKFwiRGlzcGF0Y2ggd2FzIGNhbGxlZCBvbiBhIGRlYWQgc2NvcGUsIGNoZWNrIHlvdSdyZSBhc3luYyBmdW5jdGlvbnMgaW4gdGhpcyBzdGFjay4uLlwiLCAobmV3IEVycm9yKCkpLnN0YWNrKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0bGV0IGJBY3RzID0gdGhpcy5fLl9ib3VuZGVkQWN0aW9ucztcblx0XHRPYmplY3Qua2V5cyh0aGlzLl8uX3Njb3BlKVxuXHRcdCAgICAgIC5mb3JFYWNoKFxuXHRcdFx0ICAgICAgaWQgPT4ge1xuXHRcdFx0XHQgICAgICBpZiAoIGlkID09IFwiJHBhcmVudFwiICkgcmV0dXJuO1xuXHRcdFx0XHQgICAgICBpZiAoICFpcy5mbih0aGlzLl8uX3Njb3BlW2lkXSkgKVxuXHRcdFx0XHRcdCAgICAgIHRoaXMuXy5fc2NvcGVbaWRdLnRyaWdnZXIoYWN0aW9uLCAuLi5hcmd6KTtcblx0XHRcdCAgICAgIH1cblx0XHQgICAgICApO1xuXHRcdFxuXHRcdGlmICggYkFjdHMgJiYgYkFjdHMudGVzdChhY3Rpb24pIClcblx0XHRcdHJldHVybjtcblx0XHRcblx0XHR0aGlzLl8uX21peGVkLmZvckVhY2goKCBjdHggKSA9PiAoY3R4LmRpc3BhdGNoKGFjdGlvbiwgLi4uYXJneikpKTtcblx0XHR0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC5kaXNwYXRjaChhY3Rpb24sIC4uLmFyZ3opO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cdFxuXHQvL1xuXHR0cmlnZ2VyKCkge1xuXHRcdHRoaXMuZGlzcGF0Y2goLi4uYXJndW1lbnRzKTtcblx0fVxuXHRcblx0LyoqXG5cdCAqIG9uY2UoJ3N0YWJsZScsIGNiKVxuXHQgKiBAcGFyYW0gb2JqIHtSZWFjdC5Db21wb25lbnR8U3RvcmV8ZnVuY3Rpb24pXG5cdCAqIEBwYXJhbSBrZXkge3N0cmluZ30gb3B0aW9uYWwga2V5IHdoZXJlIHRvIG1hcCB0aGUgcHVibGljIHN0YXRlXG5cdCAqL1xuXHR0aGVuKCBjYiApIHtcblx0XHRpZiAoIHRoaXMuXy51blN0YWJsZUNoaWxkcyApXG5cdFx0XHRyZXR1cm4gdGhpcy5vbmNlKCdzdGFibGVUcmVlJywgZSA9PiB0aGlzLnRoZW4oY2IpKTtcblx0XHRpZiAoICF0aGlzLl9zdGFibGUgKVxuXHRcdFx0cmV0dXJuIHRoaXMub25jZSgnc3RhYmxlJywgZSA9PiB0aGlzLnRoZW4oY2IpKTtcblx0XHRcblx0XHRyZXR1cm4gY2IodGhpcy5kYXRhKTtcblx0fVxuXHRcblx0LyoqXG5cdCAqIENhbGwgcmV0YWluIG9uIHRoZSBzY29wZWQgc3RvcmVzIGJhc2luZyBnaXZlblxuXHQgKlxuXHQgKiBAcGFyYW0gc3RvcmVzXG5cdCAqIEBwYXJhbSByZWFzb25cblx0ICovXG5cdHJldGFpblN0b3Jlcyggc3RvcmVzID0gW10sIHJlYXNvbiApIHtcblx0XHQvL3N0b3Jlcy5mb3JFYWNoKFxuXHRcdC8vICAgIGlkID0+ICggKCAhdGhpcy5zdG9yZXNbIGlkIF0gfHwgIXRoaXMuc3RvcmVzWyBpZCBdLnJldGFpbiApICYmIGNvbnNvbGUud2FybihpZCwgcmVhc29uKSApXG5cdFx0Ly8pXG5cdFx0c3RvcmVzLmZvckVhY2goXG5cdFx0XHRpZCA9PiAodGhpcy5zdG9yZXNbaWRdICYmIHRoaXMuc3RvcmVzW2lkXS5yZXRhaW4gJiYgdGhpcy5zdG9yZXNbaWRdLnJldGFpbihyZWFzb24pKVxuXHRcdClcblx0fVxuXHRcblx0LyoqXG5cdCAqIENhbGwgcmV0YWluIG9uIHRoZSBzY29wZWQgc3RvcmVzXG5cdCAqXG5cdCAqIEBwYXJhbSBzdG9yZXNcblx0ICogQHBhcmFtIHJlYXNvblxuXHQgKi9cblx0ZGlzcG9zZVN0b3Jlcyggc3RvcmVzID0gW10sIHJlYXNvbiApIHtcblx0XHRzdG9yZXMuZm9yRWFjaChcblx0XHRcdGlkID0+ICh0aGlzLnN0b3Jlc1tpZF0gJiYgdGhpcy5zdG9yZXNbaWRdLmRpc3Bvc2UgJiYgdGhpcy5zdG9yZXNbaWRdLmRpc3Bvc2UocmVhc29uKSlcblx0XHQpXG5cdH1cblx0XG5cdC8qKlxuXHQgKiBLZWVwIHRoZSBzY29wZSB1bnN0YWJsZSB1bnRpbCByZWxlYXNlIGlzIGNhbGxlZFxuXHQgKiBAcGFyYW0gcmVhc29uXG5cdCAqL1xuXHR3YWl0KCByZWFzb24gKSB7XG5cdFx0Ly9jb25zb2xlLmxvZyhcIndhaXRcIiwgcmVhc29uKTtcblx0XHR0aGlzLl9zdGFibGUgJiYgIXRoaXMuX19sb2Nrcy5hbGwgJiYgdGhpcy5lbWl0KFwidW5zdGFibGVcIiwgdGhpcyk7XG5cdFx0dGhpcy5fc3RhYmxlID0gZmFsc2U7XG5cdFx0dGhpcy5fX2xvY2tzLmFsbCsrO1xuXHRcdGlmICggcmVhc29uICkge1xuXHRcdFx0dGhpcy5fX2xvY2tzW3JlYXNvbl0gPSB0aGlzLl9fbG9ja3NbcmVhc29uXSB8fCAwO1xuXHRcdFx0dGhpcy5fX2xvY2tzW3JlYXNvbl0rKztcblx0XHR9XG5cdH1cblx0XG5cdFxuXHQvKipcblx0ICogU3RhYmlsaXplIHRoZSBzY29wZSBpZiBubyBtb3JlIGxvY2tzIHJlbWFpbiAod2FpdCBmbilcblx0ICogQHBhcmFtIHJlYXNvblxuXHQgKi9cblx0cmVsZWFzZSggcmVhc29uICkge1xuXHRcdFxuXHRcdGlmICggcmVhc29uICkge1xuXHRcdFx0aWYgKCB0aGlzLl9fbG9ja3NbcmVhc29uXSA9PSAwIClcblx0XHRcdFx0Y29uc29sZS5lcnJvcihcIlJlbGVhc2UgbW9yZSB0aGFuIGxvY2tpbmcgIVwiLCByZWFzb24pO1xuXHRcdFx0dGhpcy5fX2xvY2tzW3JlYXNvbl0gPSB0aGlzLl9fbG9ja3NbcmVhc29uXSB8fCAwO1xuXHRcdFx0dGhpcy5fX2xvY2tzW3JlYXNvbl0tLTtcblx0XHR9XG5cdFx0aWYgKCAhcmVhc29uICYmIHRoaXMuX19sb2Nrcy5hbGwgPT0gMCApXG5cdFx0XHRjb25zb2xlLmVycm9yKFwiUmVsZWFzZSBtb3JlIHRoYW4gbG9ja2luZyAhXCIpO1xuXHRcdFxuXHRcdHRoaXMuX19sb2Nrcy5hbGwtLTtcblx0XHRpZiAoICF0aGlzLl9fbG9ja3MuYWxsICkge1xuXHRcdFx0dGhpcy5fLnN0YWJpbGl6ZXJUTSAmJiBjbGVhclRpbWVvdXQodGhpcy5fLnN0YWJpbGl6ZXJUTSk7XG5cdFx0XHRcblx0XHRcdHRoaXMuXy5zdGFiaWxpemVyVE0gPSBzZXRUaW1lb3V0KFxuXHRcdFx0XHRlID0+IHtcblx0XHRcdFx0XHR0aGlzLl8uc3RhYmlsaXplclRNID0gbnVsbDtcblx0XHRcdFx0XHRpZiAoIHRoaXMuX19sb2Nrcy5hbGwgKVxuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdHRoaXMuXy5wcm9wYWdUTSAmJiBjbGVhclRpbWVvdXQodGhpcy5fLnByb3BhZ1RNKTtcblx0XHRcdFx0XHR0aGlzLl9yZXYrKztcblx0XHRcdFx0XHR0aGlzLl9zdGFibGUgPSB0cnVlO1xuXHRcdFx0XHRcdHRoaXMuZW1pdChcInN0YWJsZVwiLCB0aGlzKTtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHQhdGhpcy5kZWFkICYmIHRoaXMuX3Byb3BhZygpOy8vIHN0YWJpbGl0eSBjYW4gaW5kdWNlIGRlc3Ryb3lcblx0XHRcdFx0fVxuXHRcdFx0KTtcblx0XHR9XG5cdFx0XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBQcm9wYWcgc3RvcmVzIHVwZGF0ZXMgYmFzaW5nIHRoZWlycyBsYXN0IHVwZGF0ZXNcblx0ICovXG5cdHByb3BhZygpIHtcblx0XHR0aGlzLl8ucHJvcGFnVE0gJiYgY2xlYXJUaW1lb3V0KHRoaXMuXy5wcm9wYWdUTSk7XG5cdFx0dGhpcy5fLnByb3BhZ1RNID0gc2V0VGltZW91dChcblx0XHRcdGUgPT4ge1xuXHRcdFx0XHR0aGlzLl8ucHJvcGFnVE0gPSBudWxsO1xuXHRcdFx0XHR0aGlzLl9wcm9wYWcoKVxuXHRcdFx0fSwgMlxuXHRcdCk7XG5cdH1cblx0XG5cdF9wcm9wYWcoKSB7XG5cdFx0aWYgKCB0aGlzLl8uZm9sbG93ZXJzLmxlbmd0aCApXG5cdFx0XHR0aGlzLl8uZm9sbG93ZXJzLmZvckVhY2goKCB7IDA6IG9iaiwgMToga2V5LCAyOiBhcywgMzogbGFzdFJldnMsIDM6IHJlbWFwcyB9ICkgPT4ge1xuXHRcdFx0XHRsZXQgZGF0YSA9IHRoaXMuZ2V0VXBkYXRlcyhsYXN0UmV2cyk7XG5cdFx0XHRcdGlmICggIWRhdGEgKSByZXR1cm47XG5cdFx0XHRcdC8vY29uc29sZS5sb2coZGF0YSwgbGFzdFJldnMpXG5cdFx0XHRcdGlmICggdHlwZW9mIG9iaiAhPSBcImZ1bmN0aW9uXCIgKSB7XG5cdFx0XHRcdFx0Ly9jb25zb2xlLmxvZyhcInNldFN0YXRlIFwiLG9iaiwgT2JqZWN0LmtleXMoZGF0YSkpXG5cdFx0XHRcdFx0aWYgKCBhcyApIG9iai5zZXRTdGF0ZSh7IFthc106IGRhdGEgfSk7XG5cdFx0XHRcdFx0ZWxzZSBvYmouc2V0U3RhdGUoZGF0YSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0b2JqKGRhdGEsIGxhc3RSZXZzICYmIFsuLi5sYXN0UmV2c10gfHwgXCJubyByZXZzXCIpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIGxhc3RSZXZzICYmXG5cdFx0XHRcdC8vIGtleS5mb3JFYWNoKGlkID0+IChsYXN0UmV2c1tpZF0gPSB0aGlzLnN0b3Jlc1tpZF0gJiZcblx0XHRcdFx0Ly8gdGhpcy5zdG9yZXNbaWRdLl9yZXYgfHwgMCkpO1xuXHRcdFx0fSk7XG5cdFx0dGhpcy5lbWl0KFwidXBkYXRlXCIsIHRoaXMuZ2V0VXBkYXRlcygpKTtcblx0fVxuXHRcblx0LyoqXG5cdCAqIGlzIHN0YWJsZVxuXHQgKiBAcmV0dXJucyBib29sXG5cdCAqL1xuXHRpc1N0YWJsZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5fc3RhYmxlO1xuXHR9XG5cdFxuXHRfYWRkQ2hpbGQoIGN0eCApIHtcblx0XHR0aGlzLl8uY2hpbGRTY29wZXMucHVzaChjdHgpO1xuXHRcdHRoaXMuXy5zZWVuQ2hpbGRzKys7XG5cdFx0bGV0IGxpc3RzICAgICA9IHtcblx0XHRcdCAgICAnc3RhYmxlJyAgICAgIDogcyA9PiB7XG5cdFx0XHRcdCAgICB0aGlzLl8udW5TdGFibGVDaGlsZHMtLTtcblx0XHRcdFx0ICAgIGlmICggIXRoaXMuXy51blN0YWJsZUNoaWxkcyApXG5cdFx0XHRcdFx0ICAgIHRoaXMuZW1pdChcInN0YWJsZVRyZWVcIiwgdGhpcylcblx0XHRcdCAgICB9LFxuXHRcdFx0ICAgICd1bnN0YWJsZScgICAgOiBzID0+IHtcblx0XHRcdFx0ICAgIHRoaXMuXy51blN0YWJsZUNoaWxkcysrO1xuXHRcdFx0XHQgICAgaWYgKCAxID09IHRoaXMuXy51blN0YWJsZUNoaWxkcyApXG5cdFx0XHRcdFx0ICAgIHRoaXMuZW1pdChcInVuc3RhYmxlVHJlZVwiLCB0aGlzKVxuXHRcdFx0ICAgIH0sXG5cdFx0XHQgICAgJ3N0YWJsZVRyZWUnICA6IHMgPT4ge1xuXHRcdFx0XHQgICAgdGhpcy5fLnVuU3RhYmxlQ2hpbGRzLS07XG5cdFx0XHRcdCAgICBpZiAoICF0aGlzLl8udW5TdGFibGVDaGlsZHMgKVxuXHRcdFx0XHRcdCAgICB0aGlzLmVtaXQoXCJzdGFibGVUcmVlXCIsIHRoaXMpXG5cdFx0XHQgICAgfSxcblx0XHRcdCAgICAndW5zdGFibGVUcmVlJzogcyA9PiB7XG5cdFx0XHRcdCAgICB0aGlzLl8udW5TdGFibGVDaGlsZHMrKztcblx0XHRcdFx0ICAgIGlmICggMSA9PSB0aGlzLl8udW5TdGFibGVDaGlsZHMgKVxuXHRcdFx0XHRcdCAgICB0aGlzLmVtaXQoXCJ1bnN0YWJsZVRyZWVcIiwgdGhpcylcblx0XHRcdCAgICB9LFxuXHRcdFx0ICAgICdkZXN0cm95JyAgICAgOiBjdHggPT4ge1xuXHRcdFx0XHQgICAgaWYgKCBjdHguXy51blN0YWJsZUNoaWxkcyApXG5cdFx0XHRcdFx0ICAgIHRoaXMuXy51blN0YWJsZUNoaWxkcy0tO1xuXHRcdFx0XHQgICAgaWYgKCAhY3R4LmlzU3RhYmxlKCkgKVxuXHRcdFx0XHRcdCAgICB0aGlzLl8udW5TdGFibGVDaGlsZHMtLTtcblx0XHRcdFx0XG5cdFx0XHRcdCAgICBpZiAoICF0aGlzLl8udW5TdGFibGVDaGlsZHMgKVxuXHRcdFx0XHRcdCAgICB0aGlzLmVtaXQoXCJzdGFibGVUcmVlXCIsIHRoaXMpXG5cdFx0XHQgICAgfVxuXHRcdCAgICB9LFxuXHRcdCAgICB3YXNTdGFibGUgPSB0aGlzLl8udW5TdGFibGVDaGlsZHM7XG5cdFx0Ly8hY3R4LmlzU3RhYmxlKCkgJiYgY29uc29sZS53YXJuKCdhZGQgdW5zdGFibGUgY2hpbGQnKTtcblx0XHQhY3R4LmlzU3RhYmxlKCkgJiYgdGhpcy5fLnVuU3RhYmxlQ2hpbGRzKys7XG5cdFx0Y3R4Ll8udW5TdGFibGVDaGlsZHMgJiYgdGhpcy5fLnVuU3RhYmxlQ2hpbGRzKys7XG5cdFx0dGhpcy5fLmNoaWxkU2NvcGVzTGlzdC5wdXNoKGxpc3RzKTtcblx0XHRpZiAoICF3YXNTdGFibGUgJiYgdGhpcy5fLnVuU3RhYmxlQ2hpbGRzIClcblx0XHRcdHRoaXMuZW1pdChcInVuc3RhYmxlVHJlZVwiLCB0aGlzKVxuXHRcdGN0eC5vbihsaXN0cyk7XG5cdH1cblx0XG5cdF9ybUNoaWxkKCBjdHggKSB7XG5cdFx0bGV0IGkgICAgICAgICA9IHRoaXMuXy5jaGlsZFNjb3Blcy5pbmRleE9mKGN0eCksXG5cdFx0ICAgIHdhc1N0YWJsZSA9IHRoaXMuXy51blN0YWJsZUNoaWxkcztcblx0XHRpZiAoIGkgIT0gLTEgKSB7XG5cdFx0XHR0aGlzLl8uY2hpbGRTY29wZXMuc3BsaWNlKGksIDEpO1xuXHRcdFx0IWN0eC5pc1N0YWJsZSgpICYmIHRoaXMuXy51blN0YWJsZUNoaWxkcy0tO1xuXHRcdFx0Y3R4Ll8udW5TdGFibGVDaGlsZHMgJiYgdGhpcy5fLnVuU3RhYmxlQ2hpbGRzLS07XG5cdFx0XHRjdHgudW4odGhpcy5fLmNoaWxkU2NvcGVzTGlzdC5zcGxpY2UoaSwgMSlbMF0pO1xuXHRcdFx0aWYgKCB3YXNTdGFibGUgJiYgIXRoaXMuXy51blN0YWJsZUNoaWxkcyApXG5cdFx0XHRcdHRoaXMuZW1pdChcInN0YWJsZVRyZWVcIilcblx0XHR9XG5cdH1cblx0XG5cdHJldGFpbiggcmVhc29uICkge1xuXHRcdHRoaXMuX19yZXRhaW5zLmFsbCsrO1xuXHRcdC8vY29uc29sZS5sb2coXCJyZXRhaW5cIiwgdGhpcy5faWQsIHJlYXNvbik7XG5cdFx0aWYgKCByZWFzb24gKSB7XG5cdFx0XHR0aGlzLl9fcmV0YWluc1tyZWFzb25dID0gdGhpcy5fX3JldGFpbnNbcmVhc29uXSB8fCAwO1xuXHRcdFx0dGhpcy5fX3JldGFpbnNbcmVhc29uXSsrO1xuXHRcdH1cblx0fVxuXHRcblx0ZGlzcG9zZSggcmVhc29uICkge1xuXHRcdC8vY29uc29sZS5sb2coXCJkaXNwb3NlXCIsIHRoaXMuX2lkLCByZWFzb24pO1xuXHRcdGlmICggcmVhc29uICkge1xuXHRcdFx0aWYgKCAhdGhpcy5fX3JldGFpbnNbcmVhc29uXSApXG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIkRpc3Bvc2UgbW9yZSB0aGFuIHJldGFpbmluZyA6IFwiICsgcmVhc29uKTtcblx0XHRcdHRoaXMuX19yZXRhaW5zW3JlYXNvbl0tLTtcblx0XHR9XG5cdFx0XG5cdFx0aWYgKCAhdGhpcy5fX3JldGFpbnMuYWxsIClcblx0XHRcdHRocm93IG5ldyBFcnJvcihcIkRpc3Bvc2UgbW9yZSB0aGFuIHJldGFpbmluZyAhXCIpO1xuXHRcdFxuXHRcdHRoaXMuX19yZXRhaW5zLmFsbC0tO1xuXHRcdFxuXHRcdGlmICggIXRoaXMuX19yZXRhaW5zLmFsbCApIHtcblx0XHRcdC8vY29uc29sZS5sb2coXCJkaXNwb3NlIGRvIGRlc3Ryb3kgXCIsIHRoaXMuX2lkLCB0aGlzLl9wZXJzaXN0ZW5jZVRtKTtcblx0XHRcdGlmICggdGhpcy5fLnBlcnNpc3RlbmNlVG0gKSB7XG5cdFx0XHRcdHRoaXMuXy5kZXN0cm95VE0gJiYgY2xlYXJUaW1lb3V0KHRoaXMuXy5kZXN0cm95VE0pO1xuXHRcdFx0XHR0aGlzLl8uZGVzdHJveVRNID0gc2V0VGltZW91dChcblx0XHRcdFx0XHRlID0+IHtcblx0XHRcdFx0XHRcdC8vdGhpcy50aGVuKHMgPT4ge1xuXHRcdFx0XHRcdFx0IXRoaXMuX19yZXRhaW5zLmFsbCAmJiAhdGhpcy5kZWFkICYmIHRoaXMuZGVzdHJveSgpXG5cdFx0XHRcdFx0XHQvL30pO1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0dGhpcy5fLnBlcnNpc3RlbmNlVG1cblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHQvL3RoaXMudGhlbihzID0+XG5cdFx0XHRcdCghdGhpcy5fX3JldGFpbnMuYWxsICYmICF0aGlzLmRlYWQgJiYgdGhpcy5kZXN0cm95KCkpXG5cdFx0XHRcdC8vKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBvcmRlciBkZXN0cm95IG9mIGxvY2FsIHN0b3Jlc1xuXHQgKi9cblx0ZGVzdHJveSgpIHtcblx0XHRsZXQgY3R4ID0gdGhpcy5fLl9zY29wZTtcblx0XHQvL2NvbnNvbGUud2FybihcImRlc3Ryb3lcIiwgdGhpcy5faWQpO1xuXHRcdHRoaXMuXy5zdGFiaWxpemVyVE0gJiYgY2xlYXJUaW1lb3V0KHRoaXMuXy5zdGFiaWxpemVyVE0pO1xuXHRcdHRoaXMuXy5wcm9wYWdUTSAmJiBjbGVhclRpbWVvdXQodGhpcy5fLnByb3BhZ1RNKTtcblx0XHRPYmplY3Qua2V5cyhcblx0XHRcdHRoaXMuXy5fbGlzdGVuaW5nXG5cdFx0KS5mb3JFYWNoKFxuXHRcdFx0aWQgPT4gKChpZCAhPT0gXCIkcGFyZW50XCIpICYmIHRoaXMuXy5fc2NvcGVbaWRdLnJlbW92ZUxpc3RlbmVyKHRoaXMuXy5fbGlzdGVuaW5nW2lkXSkpXG5cdFx0KTtcblx0XHR3aGlsZSAoIHRoaXMuXy5fbWl4ZWRMaXN0Lmxlbmd0aCApIHtcblx0XHRcdHRoaXMuXy5fbWl4ZWRbMF0ucmVtb3ZlTGlzdGVuZXIodGhpcy5fLl9taXhlZExpc3Quc2hpZnQoKSk7XG5cdFx0XHR0aGlzLl8uX21peGVkLnNoaWZ0KCkuZGlzcG9zZShcIm1peGVkVG9cIik7XG5cdFx0fVxuXHRcdFsuLi50aGlzLl8uZm9sbG93ZXJzXS5tYXAoZm9sbG93ZXIgPT4gdGhpcy51bkJpbmQoLi4uZm9sbG93ZXIpKTtcblx0XHRmb3IgKCBsZXQga2V5IGluIGN0eCApXG5cdFx0XHRpZiAoICFpcy5mbihjdHhba2V5XSkgKSB7XG5cdFx0XHRcdGlmICgga2V5ID09IFwiJHBhcmVudFwiICkgY29udGludWU7XG5cdFx0XHRcdCFjdHhba2V5XS5fYXV0b0Rlc3Ryb3kgJiYgY3R4W2tleV0uZGlzcG9zZShcInNjb3BlZFwiKTtcblx0XHRcdH1cblx0XHRpZiAoIHRoaXMuXy5fcGFyZW50TGlzdCApIHtcblx0XHRcdHRoaXMucGFyZW50Ll9ybUNoaWxkKHRoaXMpO1xuXHRcdFx0dGhpcy5wYXJlbnQucmVtb3ZlTGlzdGVuZXIodGhpcy5fLl9wYXJlbnRMaXN0KTtcblx0XHRcdHRoaXMucGFyZW50LmRpc3Bvc2UoXCJpc015UGFyZW50XCIpO1xuXHRcdFx0dGhpcy5fLl9wYXJlbnRMaXN0ID0gbnVsbDtcblx0XHR9XG5cdFx0dGhpcy5kZWFkID0gdHJ1ZTtcblx0XHR0aGlzLmVtaXQoXCJkZXN0cm95XCIsIHRoaXMpO1xuXHRcdFxuXHRcdFxuXHRcdC8vaWYgKCAhdGhpcy5fLmlzTG9jYWxJZCApXG5cdFx0ZGVsZXRlIG9wZW5TY29wZXNbdGhpcy5faWRdO1xuXHRcdFxuXHRcdC8vdGhpcy5fID0gbnVsbDtcblx0XHRcblx0fVxufVxuXG5cbmlzLnJzU2NvcGUgPSBmdW5jdGlvbiAoIG9iaiApIHtcblx0cmV0dXJuIG9iaiBpbnN0YW5jZW9mIFNjb3BlXG59XG5cbmlzLnJzU2NvcGVDbGFzcyA9IGZ1bmN0aW9uICggb2JqICkge1xuXHRyZXR1cm4gU2NvcGUuaXNQcm90b3R5cGVPZihvYmopIHx8IG9iaiA9PT0gU2NvcGVcbn1cbmV4cG9ydCBkZWZhdWx0IFNjb3BlO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9TY29wZS5qcyIsInZhciBpcyA9IHJlcXVpcmUoJ2lzJyk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICAuLi5pc1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWxzL2lzLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaXNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJpc1wiXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBpcyA9IHJlcXVpcmUoJy4vaXMnKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB3YWxrblNldCggb2JqLCBwYXRoLCB2YWx1ZSwgc3RhY2sgKSB7XHJcbiAgICBpZiAoIGlzLnN0cmluZyhwYXRoKSApXHJcbiAgICAgICAgcGF0aCA9IHBhdGguc3BsaXQoJy4nKTtcclxuICAgIGlmICggIXBhdGgubGVuZ3RoIClcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICBlbHNlIGlmICggcGF0aC5sZW5ndGggPT0gMSApXHJcbiAgICAgICAgcmV0dXJuIG9ialsgcGF0aFsgMCBdIF0gPSBzdGFja1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBbIC4uLiggb2JqWyBwYXRoWyAwIF0gXSB8fCBbXSApLCB2YWx1ZSBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHZhbHVlO1xyXG4gICAgZWxzZVxyXG4gICAgICAgIHJldHVybiB3YWxrblNldChcclxuICAgICAgICAgICAgb2JqWyBwYXRoWyAwIF0gXSA9XHJcbiAgICAgICAgICAgICAgICBvYmpbIHBhdGhbIDAgXSBdIHx8IHt9LFxyXG4gICAgICAgICAgICBwYXRoLnNsaWNlKDEpLFxyXG4gICAgICAgICAgICB2YWx1ZSwgc3RhY2tcclxuICAgICAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gd2Fsa25HZXQoIG9iaiwgcGF0aCwgaXNLZXkgKSB7XHJcbiAgICBpZiAoIGlzLnN0cmluZyhwYXRoKSApXHJcbiAgICAgICAgcGF0aCA9IHBhdGguc3BsaXQoJy4nKTtcclxuICAgIHJldHVybiBwYXRoLmxlbmd0aFxyXG4gICAgICAgICAgID8gb2JqWyBwYXRoWyAwIF0gXSAmJiB3YWxrbkdldChvYmpbIHBhdGhbIDAgXSBdLCBwYXRoLnNsaWNlKDEpKVxyXG4gICAgICAgICAgIDogb2JqO1xyXG59XHJcblxyXG4vL0B0b2RvXHJcbmV4cG9ydCBmdW5jdGlvbiBrZXlXYWxrblNldCggb2JqLCBwYXRoLCB2YWx1ZSwgc3RhY2sgKSB7XHJcbiAgICBpZiAoIGlzLnN0cmluZyhwYXRoKSApXHJcbiAgICAgICAgcGF0aCA9IHBhdGguc3BsaXQoLyhcXD58XFwvKS9pZykuZmlsdGVyKHYgPT4gKCB2ICE9PSAnPicgJiYgdiApKTtcclxuICAgIHJldHVybiB3YWxrblNldChvYmosIHBhdGgsIHZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGtleVdhbGtuR2V0KCBvYmosIHBhdGgsIGlzS2V5ICkge1xyXG4gICAgaWYgKCBpcy5zdHJpbmcocGF0aCkgKVxyXG4gICAgICAgIHBhdGggPSBwYXRoLnNwbGl0KC8oXFw+fFxcLykvaWcpLmZpbHRlcih2ID0+ICggdiAhPT0gJz4nICYmIHYgKSk7XHJcbiAgICByZXR1cm4gcGF0aC5sZW5ndGhcclxuICAgICAgICAgICA/IG9ialsgcGF0aFsgMCBdIF0gJiYgd2Fsa25HZXQob2JqWyBwYXRoWyAwIF0gXSwgcGF0aC5zbGljZSgxKSlcclxuICAgICAgICAgICA6IG9iajtcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlscy91dGlscy5qcyIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpICAyMDE4IFdpc2UgV2lsZCBXZWIgLlxuICpcbiAqICBNSVQgTGljZW5zZVxuICogIFxuICogIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqICBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiAgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqICBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqICBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICogIFxuICogIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuICogIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKiAgXG4gKiAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqICBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG4gKiAgU09GVFdBUkUuXG4gKiAgXG4gKiBAYXV0aG9yIDogTmF0aGFuYWVsIEJyYXVuXG4gKiBAY29udGFjdCA6IGNhaXBpbGFic0BnbWFpbC5jb21cbiAqL1xudmFyIGlzID0gcmVxdWlyZSgnaXMnKTtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVtaXR0ZXIge1xuICAgIF9ldmVudHMgPSB7fTtcbiAgICBcbiAgICBvbiggZXZ0LCBjYiApIHtcbiAgICAgICAgaWYgKCAhaXMuc3RyaW5nKGV2dCkgJiYgZXZ0IClcbiAgICAgICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhldnQpLmZvckVhY2goayA9PiB0aGlzLm9uKGssIGV2dFtrXSkpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fZXZlbnRzW2V2dF0gPSB0aGlzLl9ldmVudHNbZXZ0XSB8fCBbXTtcbiAgICAgICAgdGhpcy5fZXZlbnRzW2V2dF0ucHVzaChjYik7XG4gICAgICAgIFxuICAgIH1cbiAgICBcbiAgICB1biggZXZ0LCBjYiApIHtcbiAgICAgICAgaWYgKCAhaXMuc3RyaW5nKGV2dCkgJiYgZXZ0IClcbiAgICAgICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhldnQpLmZvckVhY2goayA9PiB0aGlzLnVuKGssIGV2dFtrXSkpO1xuICAgICAgICBcbiAgICAgICAgaWYgKCAhdGhpcy5fZXZlbnRzW2V2dF0gKSByZXR1cm47XG4gICAgICAgIHZhciBpID0gdGhpcy5fZXZlbnRzW2V2dF0uaW5kZXhPZihjYik7XG4gICAgICAgIHRoaXMuX2V2ZW50c1tldnRdLnNwbGljZShpLCAxKTtcbiAgICB9XG4gICAgXG4gICAgZW1pdCggZXZ0LCAuLi5hcmd6ICkge1xuICAgICAgICBpZiAoICF0aGlzLl9ldmVudHNbZXZ0XSApIHJldHVybjtcbiAgICAgICAgbGV0IGxpc3RzID0gWy4uLnRoaXMuX2V2ZW50c1tldnRdXTtcbiAgICAgICAgXG4gICAgICAgIGZvciAoIHZhciBpID0gMDsgaSA8IGxpc3RzLmxlbmd0aDsgaSsrIClcbiAgICAgICAgICAgIGxpc3RzW2ldKC4uLmFyZ3opXG4gICAgfVxuICAgIFxuICAgIGFkZExpc3RlbmVyKCkge1xuICAgICAgICB0aGlzLm9uKC4uLmFyZ3VtZW50cyk7XG4gICAgfVxuICAgIFxuICAgIHJlbW92ZUxpc3RlbmVyKCkge1xuICAgICAgICB0aGlzLnVuKC4uLmFyZ3VtZW50cyk7XG4gICAgfVxuICAgIFxuICAgIHJlbW92ZUFsbExpc3RlbmVycygpIHtcbiAgICAgICAgdGhpcy5fZXZlbnRzID0ge307XG4gICAgfVxuICAgIFxuICAgIG9uY2UoIGV2dCwgY2IgKSB7XG4gICAgICAgIGxldCBmbjtcbiAgICAgICAgdGhpcy5vbihldnQsIGZuID0gKCAuLi5hcmd6ICkgPT4ge1xuICAgICAgICAgICAgdGhpcy51bihldnQsIGZuKTtcbiAgICAgICAgICAgIGNiKC4uLmFyZ3opXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBcbiAgICBcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbHMvRW1pdHRlci5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNob3J0aWRcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJzaG9ydGlkXCJcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcbiAqIENvcHlyaWdodCAoYykgIDIwMTggV2lzZSBXaWxkIFdlYiAuXG4gKlxuICogIE1JVCBMaWNlbnNlXG4gKlxuICogIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqICBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiAgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqICBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqICBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqICBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcbiAqICBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqICBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiAgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiAgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiAgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiAgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcbiAqICBTT0ZUV0FSRS5cbiAqXG4gKiBAYXV0aG9yIDogTmF0aGFuYWVsIEJyYXVuXG4gKiBAY29udGFjdCA6IGNhaXBpbGFic0BnbWFpbC5jb21cbiAqL1xuXG52YXIgaXMgICAgICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vdXRpbHMvaXMnKSxcbiAgICBTY29wZSAgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9TY29wZScpLFxuICAgIHsga2V5V2Fsa25TZXQsIGtleVdhbGtuR2V0IH0gPSByZXF1aXJlKCcuL3V0aWxzL3V0aWxzJyksXG4gICAgRXZlbnRFbWl0dGVyICAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vdXRpbHMvRW1pdHRlcicpLFxuICAgIFRhc2tTZXF1ZW5jZXIgICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL3V0aWxzL1Rhc2tTZXF1ZW5jZXInKSxcbiAgICBzaG9ydGlkICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnc2hvcnRpZCcpLFxuICAgIG9ialByb3RvICAgICAgICAgICAgICAgICAgICAgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Yoe30pO1xuXG5jbGFzcyBTdG9yZSBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG5cdC8vc3RhdGljIHVzZSAgICAgICAgICAgICAgICAgID0gW107Ly8gb3ZlcnJpZGFibGUgbGlzdCBvZiBzb3VyY2Ugc3RvcmVzXG5cdHN0YXRpYyBmb2xsb3c7Ly8gb3ZlcnJpZGFibGUgbGlzdCBvZiBzdG9yZSB0aGF0IHdpbGwgYWxsb3cgcHVzaCBpZiB1cGRhdGVkXG5cdHN0YXRpYyByZXF1aXJlO1xuXHRzdGF0aWMgc3RhdGljU2NvcGUgICA9IG5ldyBTY29wZSh7fSwgeyBpZDogXCJzdGF0aWNcIiB9KTtcblx0c3RhdGljIHN0YXRlICAgICAgICAgPSB1bmRlZmluZWQ7Ly8gZGVmYXVsdCBzdGF0ZVxuXHQvKipcblx0ICogaWYgcmV0YWluIGdvZXMgdG8gMCA6XG5cdCAqIGZhbHNlIHRvIG5vdCBkZXN0cm95LFxuXHQgKiAwIHRvIHN5bmMgYXV0byBkZXN0cm95XG5cdCAqIE1zIHRvIGF1dG9kZXN0cm95IGFmdGVyIHRtIG1zIGlmIG5vIHJldGFpbiBoYXMgYmVlbiBjYWxsZWRcblx0ICogQHR5cGUge2Jvb2xlYW58SW50fVxuXHQgKi9cblx0c3RhdGljIHBlcnNpc3RlbmNlVG0gPSBmYWxzZTtcblx0XG5cdC8qKlxuXHQgKiBDb25zdHJ1Y3Rvciwgd2lsbCBidWlsZCBhIHJlc2NvcGUgc3RvcmVcblx0ICpcblx0ICogKHNjb3BlLCB7cmVxdWlyZSx1c2UsYXBwbHksc3RhdGUsIGRhdGF9KVxuXHQgKiAoc2NvcGUpXG5cdCAqXG5cdCAqIEBwYXJhbSBzY29wZSB7b2JqZWN0fSBzY29wZSB3aGVyZSB0byBmaW5kIHRoZSBvdGhlciBzdG9yZXMgKGRlZmF1bHQgOiBzdGF0aWNcblx0ICogICAgIHN0YXRpY1Njb3BlIClcblx0ICogQHBhcmFtIGtleXMge0FycmF5fSAocGFzc2VkIHRvIFN0b3JlOjptYXApIEV4IDogW1wic2Vzc2lvblwiLCBcIm90aGVyTmFtZWRTdG9yZTprZXlcIixcblx0ICogICAgIG90aGVyU3RvcmUuYXMoXCJvdGhlcktleVwiKV1cblx0ICovXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdFx0dmFyIGFyZ3ogICAgICAgICA9IFsuLi5hcmd1bWVudHNdLFxuXHRcdCAgICBfc3RhdGljICAgICAgPSB0aGlzLmNvbnN0cnVjdG9yLFxuXHRcdCAgICBzY29wZSAgICAgICAgPSBhcmd6WzBdIGluc3RhbmNlb2YgU2NvcGVcblx0XHQgICAgICAgICAgICAgICAgICAgPyBhcmd6LnNoaWZ0KClcblx0XHQgICAgICAgICAgICAgICAgICAgOiBfc3RhdGljLnNjb3BlID8gU2NvcGUuZ2V0U2NvcGUoX3N0YXRpYy5zY29wZSlcblx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogaXMuc3RyaW5nKGFyZ3pbMF0pXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gU2NvcGUuZ2V0U2NvcGUoYXJnei5zaGlmdCgpKVxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF9zdGF0aWMuc3RhdGljU2NvcGUsXG5cdFx0ICAgIGNmZyAgICAgICAgICA9IGFyZ3pbMF0gJiYgIWlzLmFycmF5KGFyZ3pbMF0pICYmICFpcy5zdHJpbmcoYXJnelswXSlcblx0XHQgICAgICAgICAgICAgICAgICAgPyBhcmd6LnNoaWZ0KClcblx0XHQgICAgICAgICAgICAgICAgICAgOiB7fSxcblx0XHQgICAgdGFza1F1ZXVlICAgID0gaXMuYXJyYXkoYXJnelswXSkgPyBhcmd6LnNoaWZ0KCkgOiBudWxsLFxuXHRcdCAgICBuYW1lICAgICAgICAgPSBjZmcubmFtZSB8fCBfc3RhdGljLm5hbWUsXG5cdFx0ICAgIHdhdGNocyAgICAgICA9IGNmZy51c2UgfHwgW10sXG5cdFx0ICAgIGFwcGx5ICAgICAgICA9IGNmZy5hcHBseSB8fCBudWxsLFxuXHRcdCAgICBpbml0aWFsU3RhdGUgPSBfc3RhdGljLnN0YXRlIHx8IF9zdGF0aWMuaW5pdGlhbFN0YXRlIHx8IF9zdGF0aWMuZGVmYXVsdFN0YXRlLFxuXHRcdCAgICBhcHBsaWVkO1xuXHRcdFxuXHRcdHRoaXMuX3VpZCA9IGNmZy5fdWlkIHx8IHNob3J0aWQuZ2VuZXJhdGUoKTtcblx0XHRcblx0XHR0aGlzLl9fcmV0YWlucyAgICA9IHsgYWxsOiAwIH07XG5cdFx0dGhpcy5fX2xvY2tzICAgICAgPSB7IGFsbDogMCB9O1xuXHRcdHRoaXMuX29uU3RhYmlsaXplID0gW107XG5cdFx0XG5cdFx0Ly8gYXV0b0Rlc3Ryb3lUbVxuXHRcdHRoaXMuX2F1dG9EZXN0cm95ICAgPSAhIXRoaXMuX3BlcnNpc3RlbmNlVG07XG5cdFx0dGhpcy5fcGVyc2lzdGVuY2VUbSA9IGNmZy5wZXJzaXN0ZW5jZVRtIHx8IF9zdGF0aWMucGVyc2lzdGVuY2VUbSB8fCAoY2ZnLmF1dG9EZXN0cm95IHx8IF9zdGF0aWMuYXV0b0Rlc3Ryb3kpICYmIDU7XG5cdFx0dGhpcy5fY2ZnICAgICAgICAgICA9IGNmZztcblx0XHRpZiAoIGNmZyAmJiBjZmcub24gKSB7XG5cdFx0XHR0aGlzLm9uKGNmZy5vbik7XG5cdFx0fVxuXHRcdFxuXHRcdHRoaXMubmFtZSA9IG5hbWU7XG5cdFx0XG5cdFx0aWYgKCBzY29wZS5zdG9yZXMgKSB7XG5cdFx0XHR0aGlzLnNjb3BlT2JqID0gc2NvcGU7XG5cdFx0XHR0aGlzLnNjb3BlICAgID0gc2NvcGUuc3RvcmVzO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdHRoaXMuc2NvcGVPYmogPSBuZXcgU2NvcGUoc2NvcGUpO1xuXHRcdFx0dGhpcy5zY29wZSAgICA9IHNjb3BlLnN0b3Jlcztcblx0XHR9XG5cdFx0XG5cdFx0Ly8gc3RhbmRhcmRpemVkIHNjb3BlIGFjY2Vzc1xuXHRcdHRoaXMuJHNjb3BlICAgID0gdGhpcy5zY29wZU9iajtcblx0XHR0aGlzLiRzdG9yZXMgICA9IHRoaXMuc2NvcGVPYmouc3RvcmVzO1xuXHRcdHRoaXMuJGFjdGlvbnMgID0gdGhpcy5zY29wZU9iai5hY3Rpb25zO1xuXHRcdHRoaXMuJGRpc3BhdGNoID0gdGhpcy5zY29wZU9iai5kaXNwYXRjaC5iaW5kKHRoaXMuc2NvcGVPYmopO1xuXHRcdFxuXHRcdHRoaXMuX3JldiAgICAgPSB0aGlzLmNvbnN0cnVjdG9yLl9yZXYgfHwgMDtcblx0XHR0aGlzLl9yZXZzICAgID0ge307XG5cdFx0dGhpcy5zdG9yZXMgICA9IHt9O1xuXHRcdHRoaXMuX3JlcXVpcmUgPSBbXTtcblx0XHR0aGlzLl9zb3VyY2VzID0gW25hbWVdO1xuXHRcdFxuXHRcdGlmICggaXMuYXJyYXkoX3N0YXRpYy51c2UpICkge1xuXHRcdFx0dGhpcy5fdXNlID0gWy4uLndhdGNocywgLi4uKF9zdGF0aWMudXNlIHx8IFtdKS5tYXAoXG5cdFx0XHRcdGtleSA9PiB7XG5cdFx0XHRcdFx0bGV0IHJlZiA9IGtleS5tYXRjaCgvXihcXCE/KShbXlxcOl0qKSg/OlxcOiguKikpPyQvKTtcblx0XHRcdFx0XHRpZiAoIHJlZlsxXSApIHtcblx0XHRcdFx0XHRcdGxldCByZWYyID0gcmVmWzJdLnNwbGl0KCcuJyk7XG5cdFx0XHRcdFx0XHR0aGlzLl9yZXF1aXJlLnB1c2gocmVmWzNdIHx8IHJlZjJbcmVmMi5sZW5ndGggLSAxXSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybiByZWZbMl07XG5cdFx0XHRcdH1cblx0XHRcdCldO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdHRoaXMuX3VzZSA9IFsuLi53YXRjaHMsIC4uLihcblx0XHRcdFx0X3N0YXRpYy51c2UgPyBPYmplY3Qua2V5cyhfc3RhdGljLnVzZSlcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAubWFwKFxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAga2V5ID0+IHtcblx0XHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgbGV0IHJlZiA9IGtleS5tYXRjaCgvXihcXCE/KSguKikkLyk7XG5cdFx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgIHJlZlsxXSAmJiB0aGlzLl9yZXF1aXJlLnB1c2goX3N0YXRpYy51c2Vba2V5XSk7XG5cdFx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgIHJldHVybiByZWZbMl0gKyAoKF9zdGF0aWMudXNlW2tleV0gPT09IHRydWUpXG5cdFx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAnJ1xuXHRcdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJzonICsgX3N0YXRpYy51c2Vba2V5XSk7XG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICB9XG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgKSA6IFtdXG5cdFx0XHQpXTtcblx0XHR9XG5cdFx0XG5cdFx0aWYgKCBfc3RhdGljLnJlcXVpcmUgKVxuXHRcdFx0dGhpcy5fcmVxdWlyZS5wdXNoKC4uLl9zdGF0aWMucmVxdWlyZSk7XG5cdFx0aWYgKCBjZmcucmVxdWlyZSApXG5cdFx0XHR0aGlzLl9yZXF1aXJlLnB1c2goLi4uY2ZnLnJlcXVpcmUpO1xuXHRcdFxuXHRcdHRoaXMuX2ZvbGxvd2VycyA9IFtdO1xuXHRcdHRoaXMuX2NoYW5nZXNTVyA9IGluaXRpYWxTdGF0ZSB8fCB7fTtcblx0XHR0aGlzLnN0YXRlICAgICAgPSBpbml0aWFsU3RhdGUgJiYge307XG5cdFx0aWYgKCBhcHBseSApXG5cdFx0XHR0aGlzLmFwcGx5ID0gYXBwbHk7XG5cdFx0XG5cdFx0LyoqXG5cdFx0ICogSW5pdGlhbCBzdGF0ZSBpc24ndCBmdWxseSBpbml0aWFsaXplZCAoIGNoaWxkcyBjb25zdHJ1Y3RvcnMgY2FuIHNldCBpdCApXG5cdFx0ICogU2NvcGUgYmFzZWQgaW5zdGFuY2UgaGF2ZSB0YXNrUXVldWUgdG8gZGVsYXkgaW5pdCBzeW5jaHJvbm91c2x5LCBpZiBub3Rcblx0XHQgKiBwcmVzZW50IHdlIHVzZSBzZXRUaW1lb3V0XG5cdFx0ICovXG5cdFx0aWYgKCB0YXNrUXVldWUgKSB7XG5cdFx0XHR0YXNrUXVldWUucHVzaCh0aGlzLl9hZnRlckNvbnN0cnVjdG9yLmJpbmQodGhpcykpXG5cdFx0fVxuXHRcdGVsc2Vcblx0XHRcdHNldFRpbWVvdXQodGhpcy5fYWZ0ZXJDb25zdHJ1Y3Rvci5iaW5kKHRoaXMpKVxuXHR9XG5cdFxuXHQvKipcblx0ICogR2V0IHRoZSBpbmNvbWluZyBzdGF0ZSAoIGZvciBpbW1lZGlhdGUgc3RhdGUgcmVsYXRpdmUgYWN0aW9ucyApXG5cdCAqIEByZXR1cm5zIHt7fXwqfVxuXHQgKi9cblx0Z2V0IG5leHRTdGF0ZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5fY2hhbmdlc1NXICYmIHsgLi4udGhpcy5zdGF0ZSwgLi4udGhpcy5fY2hhbmdlc1NXIH0gfHwgdGhpcy5zdGF0ZTtcblx0fVxuXHRcblx0X2FmdGVyQ29uc3RydWN0b3IoKSB7XG5cdFx0bGV0IGNmZyAgICAgICAgICA9IHRoaXMuX2NmZyxcblx0XHQgICAgX3N0YXRpYyAgICAgID0gdGhpcy5jb25zdHJ1Y3Rvcixcblx0XHQgICAgc25hcHNob3QgICAgID0gdGhpcy5yZXN0b3JlKHVuZGVmaW5lZCwgdHJ1ZSksXG5cdFx0ICAgIGluaXRpYWxTdGF0ZSA9IHRoaXMuc3RhdGUsXG5cdFx0ICAgIGluaXRpYWxEYXRhICA9IHRoaXMuZGF0YSxcblx0XHQgICAgYXBwbGllZDtcblx0XHR7XG5cdFx0XHRcblx0XHRcdGlmICggaW5pdGlhbERhdGEgKVxuXHRcdFx0XHR0aGlzLmRhdGEgPSBpbml0aWFsRGF0YTtcblx0XHRcdGVsc2UgaWYgKCBfc3RhdGljLmRhdGEgIT09IHVuZGVmaW5lZCApXG5cdFx0XHRcdHRoaXMuZGF0YSA9IHsgLi4uX3N0YXRpYy5kYXRhIH07XG5cdFx0XHRlbHNlIGlmICggY2ZnLmhhc093blByb3BlcnR5KFwiZGF0YVwiKSApXG5cdFx0XHRcdHRoaXMuZGF0YSA9IGNmZy5kYXRhO1xuXHRcdFx0XG5cdFx0XHRpZiAoIGNmZy5oYXNPd25Qcm9wZXJ0eShcInN0YXRlXCIpICYmIGNmZy5zdGF0ZSAhPT0gdW5kZWZpbmVkIClcblx0XHRcdFx0aW5pdGlhbFN0YXRlID0geyAuLi5pbml0aWFsU3RhdGUsIC4uLmNmZy5zdGF0ZSB9O1xuXHRcdFx0XG5cdFx0XHRpZiAoIHRoaXMuZGF0YSA9PT0gdW5kZWZpbmVkICkge1xuXHRcdFx0XHRpZiAoIGluaXRpYWxTdGF0ZSB8fCB0aGlzLl91c2UubGVuZ3RoICkgey8vIHN5bmMgYXBwbHlcblx0XHRcdFx0XHR0aGlzLl9jaGFuZ2VzU1cgPSB7XG5cdFx0XHRcdFx0XHQuLi50aGlzLl9jaGFuZ2VzU1csXG5cdFx0XHRcdFx0XHQuLi4oaW5pdGlhbFN0YXRlIHx8IHt9KSxcblx0XHRcdFx0XHRcdC4uLnRoaXMuJHNjb3BlLm1hcCh0aGlzLCB0aGlzLl91c2UpXG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0XHR0aGlzLnN0YXRlICAgICAgPSB7fTtcblx0XHRcdFx0XHRpZiAoIHRoaXMuc2hvdWxkQXBwbHkodGhpcy5fY2hhbmdlc1NXKSAmJiB0aGlzLmRhdGEgPT09IHVuZGVmaW5lZCApIHtcblx0XHRcdFx0XHRcdHRoaXMuZGF0YSAgICAgICA9IHRoaXMuYXBwbHkodGhpcy5kYXRhLCB0aGlzLl9jaGFuZ2VzU1csIHRoaXMuX2NoYW5nZXNTVyk7XG5cdFx0XHRcdFx0XHRhcHBsaWVkICAgICAgICAgPSB0cnVlO1xuXHRcdFx0XHRcdFx0dGhpcy5zdGF0ZSAgICAgID0gdGhpcy5fY2hhbmdlc1NXO1xuXHRcdFx0XHRcdFx0dGhpcy5fY2hhbmdlc1NXID0ge307XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0YXBwbGllZCAgICAgICAgID0gdHJ1ZTtcblx0XHRcdFx0dGhpcy5zdGF0ZSAgICAgID0gey8vIGFzc3VtZSB0aGlzIHN0YXRlIGlzIHN5bmMgd2l0aCBpbml0aWFsIGRhdGFcblx0XHRcdFx0XHQuLi50aGlzLl9jaGFuZ2VzU1csXG5cdFx0XHRcdFx0Li4uKGluaXRpYWxTdGF0ZSB8fCB7fSksXG5cdFx0XHRcdFx0Li4udGhpcy4kc2NvcGUubWFwKHRoaXMsIHRoaXMuX3VzZSlcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLl9jaGFuZ2VzU1cgPSB7fTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKCAodGhpcy5kYXRhICE9PSB1bmRlZmluZWQgfHwgYXBwbGllZCkgJiYgIXRoaXMuX19sb2Nrcy5hbGwgKSB7XG5cdFx0XHR0aGlzLl9zdGFibGUgPSB0cnVlO1xuXHRcdFx0dGhpcy5fcmV2Kys7XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0dGhpcy5fc3RhYmxlID0gZmFsc2U7XG5cdFx0XHRpZiAoICFfc3RhdGljLm1hbmFnZWQgJiYgIXRoaXMuc3RhdGUgJiYgKCF0aGlzLl91c2UgfHwgIXRoaXMuX3VzZS5sZW5ndGgpICkge1xuXHRcdFx0XHRjb25zb2xlLndhcm4oXCJSZVNjb3BlIHN0b3JlICdcIiwgdGhpcy5uYW1lLCBcIicgaGF2ZSBubyBpbml0aWFsIGRhdGEsIHN0YXRlIG9yIHVzZS4gSXQgY2FuJ3Qgc3RhYmlsaXplLi4uXCIpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHQhdGhpcy5fc3RhYmxlICYmIHRoaXMuZW1pdCgndW5zdGFibGUnLCB0aGlzLnN0YXRlKTtcblx0XHRcblx0fVxuXHRcblx0LyoqXG5cdCAqIE92ZXJyaWRhYmxlIG1ldGhvZCB0byBrbm93IGlmIGEgZGF0YSBjaGFuZ2Ugc2hvdWxkIGJlIHByb3BhZyB0byB0aGUgbGlzdGVuaW5nXG5cdCAqIHN0b3JlcyAmIGNvbXBvbmVudHNcblx0ICovXG5cdHNob3VsZFByb3BhZyggbkRhdGFzICkge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cdFxuXHRoYXNEYXRhQ2hhbmdlKCBuRGF0YXMgKSB7XG5cdFx0dmFyIF9zdGF0aWMgPSB0aGlzLmNvbnN0cnVjdG9yLCByLFxuXHRcdCAgICBjRGF0YXMgID0gdGhpcy5kYXRhO1xuXHRcdHIgICAgICAgICAgID0gIWNEYXRhcyAmJiBuRGF0YXMgfHwgY0RhdGFzICE9PSBuRGF0YXM7XG5cdFx0IXIgJiYgY0RhdGFzICYmIE9iamVjdC5rZXlzKGNEYXRhcykuZm9yRWFjaChcblx0XHRcdCgga2V5ICkgPT4ge1xuXHRcdFx0XHRyID0gciB8fCAobkRhdGFzXG5cdFx0XHRcdCAgICAgICAgICA/IGNEYXRhc1trZXldICE9PSBuRGF0YXNba2V5XVxuXHRcdFx0XHQgICAgICAgICAgOiBjRGF0YXMgJiYgY0RhdGFzW2tleV0pXG5cdFx0XHR9XG5cdFx0KTtcblx0XHQhciAmJiBuRGF0YXMgJiYgT2JqZWN0LmtleXMobkRhdGFzKS5mb3JFYWNoKFxuXHRcdFx0KCBrZXkgKSA9PiB7XG5cdFx0XHRcdHIgPSByIHx8IChuRGF0YXNcblx0XHRcdFx0ICAgICAgICAgID8gY0RhdGFzW2tleV0gIT09IG5EYXRhc1trZXldXG5cdFx0XHRcdCAgICAgICAgICA6IGNEYXRhcyAmJiBjRGF0YXNba2V5XSlcblx0XHRcdH1cblx0XHQpO1xuXHRcdHJldHVybiByO1xuXHR9XG5cdFxuXHQvKipcblx0ICogT3ZlcnJpZGFibGUgbWV0aG9kIHRvIGtub3cgaWYgYSBzdGF0ZSBjaGFuZ2Ugc2hvdWxkIGJlIGFwcGxpZWRcblx0ICovXG5cdHNob3VsZEFwcGx5KCBzdGF0ZSA9IHRoaXMuc3RhdGUgKSB7XG5cdFx0dmFyIF9zdGF0aWMgPSB0aGlzLmNvbnN0cnVjdG9yO1xuXHRcdFxuXHRcdHJldHVybiAoXG5cdFx0XHQhIXRoaXMuaXNDb21wbGV0ZShzdGF0ZSlcblx0XHQpICYmIChpcy5hcnJheShfc3RhdGljLmZvbGxvdylcblx0XHQgICAgICA/IF9zdGF0aWMuZm9sbG93XG5cdFx0ICAgICAgICAgICAgICAgLnJlZHVjZSgoIHIsIGkgKSA9PiAociB8fCBzdGF0ZSAmJiBzdGF0ZVtpXSksIGZhbHNlKVxuXHRcdCAgICAgIDogX3N0YXRpYy5mb2xsb3dcblx0XHQgICAgICAgID8gT2JqZWN0LmtleXMoX3N0YXRpYy5mb2xsb3cpXG5cdFx0ICAgICAgICAgICAgICAgIC5yZWR1Y2UoKCByLCBpICkgPT4gKFxuXHRcdFx0ICAgICAgICAgICAgICAgIHJcblx0XHRcdCAgICAgICAgICAgICAgICB8fCBzdGF0ZSAmJiBpcy5mbihfc3RhdGljLmZvbGxvd1tpXSkgJiYgX3N0YXRpYy5mb2xsb3dbaV0uY2FsbCh0aGlzLCBzdGF0ZVtpXSlcblx0XHRcdCAgICAgICAgICAgICAgICB8fCBfc3RhdGljLmZvbGxvd1tpXSAmJiBzdGF0ZVtpXSAhPT0gdGhpcy5zdGF0ZVtpXVxuXHRcdCAgICAgICAgICAgICAgICApLCBmYWxzZSkgOiB0cnVlXG5cdFx0KTtcblx0fVxuXHRcblx0LyoqXG5cdCAqIE92ZXJyaWRhYmxlIGFwcGxpZXIgLyByZW1hcHBlclxuXHQgKiBJZiBzdGF0ZSBvciBsYXN0UHVibGljU3RhdGUgYXJlIHNpbXBsZSBoYXNoIG1hcHMgYXBwbHkgd2lsbCByZXR1cm4gey4uLmRhdGEsXG5cdCAqIC4uLnN0YXRlfSBpZiBub3QgaXQgd2lsbCByZXR1cm4gdGhlIGxhc3QgcHJpdmF0ZSBzdGF0ZVxuXHQgKiBAcGFyYW0gZGF0YVxuXHQgKiBAcGFyYW0gc3RhdGVcblx0ICogQHJldHVybnMgeyp9XG5cdCAqL1xuXHRhcHBseSggZGF0YSwgc3RhdGUsIGNoYW5nZXMgKSB7XG5cdFx0c3RhdGUgPSBzdGF0ZSB8fCB0aGlzLnN0YXRlO1xuXHRcdFxuXHRcdGlmICggdGhpcy5yZWZpbmUgKVxuXHRcdFx0cmV0dXJuIHRoaXMucmVmaW5lKC4uLmFyZ3VtZW50cyk7XG5cdFx0XG5cdFx0aWYgKCAhZGF0YSB8fCBkYXRhLl9fcHJvdG9fXyAhPT0gb2JqUHJvdG8gfHwgc3RhdGUuX19wcm90b19fICE9PSBvYmpQcm90byApXG5cdFx0XHRyZXR1cm4gc3RhdGU7XG5cdFx0ZWxzZVxuXHRcdFx0cmV0dXJuIHsgLi4uZGF0YSwgLi4uc3RhdGUgfVxuXHR9XG5cdFxuXHQvKipcblx0ICogQGRlcHJlY2lhdGVkXG5cdCAqIEBwYXJhbSBkYXRhXG5cdCAqIEBwYXJhbSBzdGF0ZVxuXHQgKiBAcGFyYW0gY2hhbmdlc1xuXHQgKiBAcmV0dXJucyB7Kn1cblx0ICovXG5cdHJlZmluZSggZGF0YSwgc3RhdGUsIGNoYW5nZXMgKSB7XG5cdFx0c3RhdGUgPSBzdGF0ZSB8fCB0aGlzLnN0YXRlO1xuXHRcdFxuXHRcdGlmICggIWRhdGEgfHwgZGF0YS5fX3Byb3RvX18gIT09IG9ialByb3RvIHx8IHN0YXRlLl9fcHJvdG9fXyAhPT0gb2JqUHJvdG8gKVxuXHRcdFx0cmV0dXJuIHN0YXRlO1xuXHRcdGVsc2Vcblx0XHRcdHJldHVybiB7IC4uLmRhdGEsIC4uLnN0YXRlIH1cblx0fVxuXHRcblx0LyoqXG5cdCAqIERlYm91bmNlIHRoaXMgc3RvcmUgcHJvcGFnYXRpb24gKCAmIHJlZHVjaW5nIClcblx0ICogQHBhcmFtIGNiXG5cdCAqL1xuXHRzdGFiaWxpemUoIGNiICkge1xuXHRcdGNiICYmIHRoaXMub25jZSgnc3RhYmxlJywgY2IpO1xuXHRcdHRoaXMuX3N0YWJsZSAmJiB0aGlzLmVtaXQoJ3Vuc3RhYmxlJywgdGhpcy5zdGF0ZSwgdGhpcy5kYXRhKTtcblx0XHRcblx0XHR0aGlzLl9zdGFibGUgPSBmYWxzZTtcblx0XHRcblx0XHRpZiAoIHRoaXMuX3N0YWJpbGl6ZXIgKVxuXHRcdFx0cmV0dXJuO1xuXHRcdFxuXHRcdHRoaXMuX3N0YWJpbGl6ZXIgPSBUYXNrU2VxdWVuY2VyLnB1c2hUYXNrKHRoaXMsICdwdXNoU3RhdGUnKTtcblx0fVxuXHRcblx0cmV0cmlldmUoIHBhdGgsIGkgPSAwLCBvYmogPSB0aGlzLmRhdGEgKSB7XG5cdFx0cGF0aCA9IGlzLnN0cmluZyhwYXRoKSA/IHBhdGguc3BsaXQoJy4nKSA6IHBhdGg7XG5cdFx0cmV0dXJuICFvYmogfHwgIXBhdGggfHwgIXBhdGgubGVuZ3RoXG5cdFx0ICAgICAgID8gb2JqXG5cdFx0ICAgICAgIDogcGF0aC5sZW5ndGggPT0gaSArIDFcblx0XHQgICAgICAgICA/IG9ialtwYXRoW2ldXVxuXHRcdCAgICAgICAgIDogdGhpcy5yZXRyaWV2ZShwYXRoLCBpICsgMSwgb2JqW3BhdGhbaV1dKTtcblx0fVxuXHRcblx0ZGlzcGF0Y2goIGFjdGlvbiwgLi4uYXJneiApIHtcblx0XHR0aGlzLnNjb3BlT2JqLmRpc3BhdGNoKGFjdGlvbiwgLi4uYXJneik7XG5cdH1cblx0XG5cdHRyaWdnZXIoIGFjdGlvbiwgLi4uYXJneiApIHtcblx0XHRsZXQgeyBhY3Rpb25zIH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXHRcdGlmICggYWN0aW9ucyAmJiBhY3Rpb25zW2FjdGlvbl0gKSB7XG5cdFx0XHRsZXQgbnMgPSBhY3Rpb25zW2FjdGlvbl0uY2FsbCh0aGlzLCAuLi5hcmd6KTtcblx0XHRcdG5zICYmIHRoaXMuc2V0U3RhdGUobnMpO1xuXHRcdH1cblx0fVxuXHRcblx0LyoqXG5cdCAqIFB1bGwgc3RvcmVzIGluIHRoZSBwcml2YXRlIHN0YXRlXG5cdCAqIEBwYXJhbSBzdG9yZXMgIHtBcnJheX0gKHBhc3NlZCB0byBTdG9yZTo6bWFwKSBFeCA6IFtcInNlc3Npb25cIixcblx0ICogICAgIFwib3RoZXJOYW1lZFN0b3JlOmtleVwiLCBvdGhlclN0b3JlLmFzKFwib3RoZXJLZXlcIildXG5cdCAqL1xuXHRwdWxsKCBzdG9yZXMsIGRvV2FpdCwgb3JpZ2luICkge1xuXHRcdGxldCBpbml0aWFsT3V0cHV0cyA9IHRoaXMuc2NvcGVPYmoubWFwKHRoaXMsIHN0b3Jlcyk7XG5cdFx0aWYgKCBkb1dhaXQgKSB7XG5cdFx0XHR0aGlzLndhaXQoKTtcblx0XHRcdHN0b3Jlcy5mb3JFYWNoKCggcyApID0+IHRoaXMuc2NvcGVbc10gJiYgdGhpcy53YWl0KHRoaXMuc2NvcGVbc10pKTtcblx0XHRcdHRoaXMucmVsZWFzZSgpO1xuXHRcdH1cblx0XHRyZXR1cm4gaW5pdGlhbE91dHB1dHM7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBTZXQgJiBQdXNoIHRoZSByZXN1bHQgZGF0YSB0byBmb2xsb3dlcnMgaWYgc3RhYmxlXG5cdCAqIEBwYXJhbSBjYlxuXHQgKi9cblx0cHVzaCggZGF0YSwgZm9yY2UsIGNiICkge1xuXHRcdGNiICAgID0gZm9yY2UgPT09IHRydWUgPyBjYiA6IGZvcmNlO1xuXHRcdGZvcmNlID0gZm9yY2UgPT09IHRydWU7XG5cdFx0aWYgKCAhZm9yY2UgJiZcblx0XHRcdChcblx0XHRcdFx0IXRoaXMuaGFzRGF0YUNoYW5nZShkYXRhKVxuXHRcdFx0KVxuXHRcdCkge1xuXHRcdFx0Y2IgJiYgY2IoKTtcblx0XHRcdGlmICggIXRoaXMuX19sb2Nrcy5hbGwgKSB7XG5cdFx0XHRcdGxldCBzdGFibGUgICA9IHRoaXMuX3N0YWJsZTtcblx0XHRcdFx0dGhpcy5fc3RhYmxlID0gdHJ1ZTtcblx0XHRcdFx0IXN0YWJsZSAmJiB0aGlzLmVtaXQoJ3N0YWJsZScsIHRoaXMuc3RhdGUsIHRoaXMuZGF0YSk7XG5cdFx0XHRcdHRoaXMuX3N0YWJpbGl6ZXIgPSBudWxsO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRcblx0XHR0aGlzLmRhdGEgPSBkYXRhO1xuXHRcdHRoaXMud2FpdCgpO1xuXHRcdHRoaXMucmVsZWFzZShjYik7XG5cdFx0XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBDYWxsIHRoZSBhcHBseSBmbiB1c2luZyB0aGUgY3VycmVudCBhY2N1bXVsYXRlZCBzdGF0ZSB1cGRhdGUgdGhlbiwgcHVzaCB0aGVcblx0ICogcmVzdWx0aW5nIGRhdGEgaWYgc3RhYmxlXG5cdCAqIEBwYXJhbSBmb3JjZVxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cblx0ICovXG5cdHB1c2hTdGF0ZSggZm9yY2UgKSB7XG5cdFx0XG5cdFx0aWYgKCAhZm9yY2UgJiYgIXRoaXMuX2NoYW5nZXNTVyAmJiB0aGlzLmRhdGEgKVxuXHRcdFx0cmV0dXJuO1xuXHRcdFxuXHRcdHZhciBuZXh0U3RhdGUgPSB0aGlzLl9uZXh0U3RhdGUgfHwgeyAuLi50aGlzLnN0YXRlLCAuLi4odGhpcy5fY2hhbmdlc1NXIHx8IHt9KSB9LFxuXHRcdCAgICBuZXh0RGF0YSAgPSB0aGlzLmFwcGx5KHRoaXMuZGF0YSwgbmV4dFN0YXRlLCB0aGlzLl9jaGFuZ2VzU1cpO1xuXHRcdFxuXHRcdHRoaXMuX3N0YWJpbGl6ZXIgPSBudWxsO1xuXHRcdHRoaXMuc3RhdGUgICAgICAgPSBuZXh0U3RhdGU7XG5cdFx0dGhpcy5fY2hhbmdlc1NXICA9IG51bGw7XG5cdFx0XG5cdFx0aWYgKCAhZm9yY2UgJiZcblx0XHRcdChcblx0XHRcdFx0IXRoaXMuaGFzRGF0YUNoYW5nZShuZXh0RGF0YSlcblx0XHRcdClcblx0XHQpIHtcblx0XHRcdGlmICggIXRoaXMuX19sb2Nrcy5hbGwgKSB7XG5cdFx0XHRcdGxldCBzdGFibGUgICA9IHRoaXMuX3N0YWJsZTtcblx0XHRcdFx0dGhpcy5fc3RhYmxlID0gdHJ1ZTtcblx0XHRcdFx0IXN0YWJsZSAmJiB0aGlzLmVtaXQoJ3N0YWJsZScsIHRoaXMuc3RhdGUsIHRoaXMuZGF0YSk7XG5cdFx0XHRcdHRoaXMuX3N0YWJpbGl6ZXIgPSBudWxsO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRcblx0XHR0aGlzLmRhdGEgPSBuZXh0RGF0YTtcblx0XHR0aGlzLndhaXQoKTtcblx0XHR0aGlzLnJlbGVhc2UoKTtcblx0XHRcblx0fVxuXHRcblx0LyoqXG5cdCAqIEFkZCAncFN0YXRlJyB0byB0aGUgY3VycmVudCBhY2N1bXVsYXRlZCBzdGF0ZSB1cGRhdGVzXG5cdCAqICYgd2FpdCBzb3VyY2Ugc3RvcmVzIHN0YWJpbGl6YXRpb24gYmVmb3JlIHB1c2hpbmcgdGhlc2Ugc3RhdGUgdXBkYXRlc1xuXHQgKiBAcGFyYW0gcFN0YXRlXG5cdCAqIEBwYXJhbSBjYlxuXHQgKi9cblx0c2V0U3RhdGUoIHBTdGF0ZSwgY2IsIHN5bmMgKSB7XG5cdFx0dmFyIGkgICAgICAgPSAwLCBjaGFuZ2UsXG5cdFx0ICAgIGNoYW5nZXMgPSB0aGlzLl9jaGFuZ2VzU1cgPSB0aGlzLl9jaGFuZ2VzU1cgfHwge307XG5cdFx0Zm9yICggdmFyIGsgaW4gcFN0YXRlIClcblx0XHRcdGlmICggIXRoaXMuc3RhdGVcblx0XHRcdFx0fHwgY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eShrKS8vIHRvZG9cblx0XHRcdFx0JiYgKFxuXHRcdFx0XHRcdHBTdGF0ZVtrXSAhPT0gY2hhbmdlc1trXVxuXHRcdFx0XHQpIHx8IHBTdGF0ZS5oYXNPd25Qcm9wZXJ0eShrKVxuXHRcdFx0XHQmJiAoXG5cdFx0XHRcdFx0cFN0YXRlW2tdICE9PSB0aGlzLnN0YXRlW2tdXG5cdFx0XHRcdFx0fHxcblx0XHRcdFx0XHQodGhpcy5zdGF0ZVtrXSAmJiBwU3RhdGVba10gJiYgKHBTdGF0ZVtrXS5fcmV2ICE9IHRoaXMuX3JldnNba10pKS8vIHJldi9oYXNoIHVwZGF0ZVxuXHRcdFx0XHQpICkge1xuXHRcdFx0XHRjaGFuZ2UgICAgICAgID0gdHJ1ZTtcblx0XHRcdFx0dGhpcy5fcmV2c1trXSA9IHBTdGF0ZVtrXSAmJiBwU3RhdGVba10uX3JldiB8fCB0cnVlO1xuXHRcdFx0XHRjaGFuZ2VzW2tdICAgID0gcFN0YXRlW2tdO1xuXHRcdFx0fVxuXHRcdFxuXHRcdHRoaXMuX25leHRTdGF0ZSA9IHsgLi4udGhpcy5zdGF0ZSwgLi4uY2hhbmdlcyB9O1xuXHRcdGlmICggIXRoaXMuc2hvdWxkQXBwbHkodGhpcy5fbmV4dFN0YXRlKSApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0XG5cdFx0aWYgKCBzeW5jICkge1xuXHRcdFx0dGhpcy5wdXNoU3RhdGUoKTtcblx0XHRcdGNiICYmIGNiKCk7XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0aWYgKCBjaGFuZ2UgKSB7XG5cdFx0XHRcdHRoaXMuc3RhYmlsaXplKGNiKTtcblx0XHRcdH1cblx0XHRcdGVsc2UgY2IgJiYgY2IoKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBVcGRhdGUgdGhlIGN1cnJlbnQgc3RhdGUgJiBwdXNoIGl0XG5cdCAqIEBwYXJhbSBwU3RhdGVcblx0ICogQHBhcmFtIGNiXG5cdCAqL1xuXHRzZXRTdGF0ZVN5bmMoIHBTdGF0ZSApIHtcblx0XHR2YXIgaSAgICAgICA9IDAsIGNoYW5nZSxcblx0XHQgICAgY2hhbmdlcyA9IHRoaXMuX2NoYW5nZXNTVyA9IHRoaXMuX2NoYW5nZXNTVyB8fCB7fTtcblx0XHRmb3IgKCB2YXIgayBpbiBwU3RhdGUgKVxuXHRcdFx0aWYgKCAhdGhpcy5zdGF0ZSB8fCBwU3RhdGUuaGFzT3duUHJvcGVydHkoaylcblx0XHRcdFx0JiYgKFxuXHRcdFx0XHRcdHBTdGF0ZVtrXSAhPSB0aGlzLnN0YXRlW2tdXG5cdFx0XHRcdFx0fHxcblx0XHRcdFx0XHQodGhpcy5zdGF0ZVtrXSAmJiBwU3RhdGVba10gJiYgKHBTdGF0ZVtrXS5fcmV2ICE9IHRoaXMuX3JldnNba10pKS8vIHJldi9oYXNoIHVwZGF0ZVxuXHRcdFx0XHQpICkge1xuXHRcdFx0XHRjaGFuZ2UgICAgICAgID0gdHJ1ZTtcblx0XHRcdFx0dGhpcy5fcmV2c1trXSA9IHBTdGF0ZVtrXSAmJiBwU3RhdGVba10uX3JldiB8fCB0cnVlO1xuXHRcdFx0XHRjaGFuZ2VzW2tdICAgID0gcFN0YXRlW2tdO1xuXHRcdFx0fVxuXHRcdHRoaXMuc2hvdWxkQXBwbHkoeyAuLi4odGhpcy5zdGF0ZSB8fCB7fSksIC4uLmNoYW5nZXMgfSkgJiYgdGhpcy5wdXNoU3RhdGUoKTtcblx0XHRyZXR1cm4gdGhpcy5kYXRhO1xuXHR9XG5cdFxuXHQvKipcblx0ICogZ2V0IGEgc3RvcmUta2V5IHBhaXIgZm9yIFN0b3JlOjptYXBcblx0ICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcblx0ICogQHJldHVybnMge3tzdG9yZTogU3RvcmUsIG5hbWU6ICp9fVxuXHQgKi9cblx0YXMoIG5hbWUgKSB7XG5cdFx0cmV0dXJuIHsgc3RvcmU6IHRoaXMsIG5hbWUgfTtcblx0fVxuXHRcblx0b24oIGxpc3RzICkge1xuXHRcdGlmICggIWlzLnN0cmluZyhsaXN0cykgJiYgbGlzdHMgKVxuXHRcdFx0T2JqZWN0LmtleXMobGlzdHMpLmZvckVhY2goayA9PiBzdXBlci5vbihrLCBsaXN0c1trXSkpO1xuXHRcdGVsc2Ugc3VwZXIub24oLi4uYXJndW1lbnRzKTtcblx0fVxuXHRcblx0cmVtb3ZlTGlzdGVuZXIoIGxpc3RzICkge1xuXHRcdGlmICggIWlzLnN0cmluZyhsaXN0cykgJiYgbGlzdHMgKVxuXHRcdFx0T2JqZWN0LmtleXMobGlzdHMpLmZvckVhY2goayA9PiBzdXBlci5yZW1vdmVMaXN0ZW5lcihrLCBsaXN0c1trXSkpO1xuXHRcdGVsc2Ugc3VwZXIucmVtb3ZlTGlzdGVuZXIoLi4uYXJndW1lbnRzKTtcblx0fVxuXHRcblx0LyoqXG5cdCAqIGlzIGNvbXBsZXRlIChhbGwgcmVxdWllcmVkIGtleXMgYXJlIGhlcmUpXG5cdCAqIEByZXR1cm5zIGJvb2xcblx0ICovXG5cdGlzQ29tcGxldGUoIHN0YXRlID0gdGhpcy5zdGF0ZSApIHtcblx0XHR2YXIgX3N0YXRpYyA9IHRoaXMuY29uc3RydWN0b3I7XG5cdFx0cmV0dXJuIChcblx0XHRcdCF0aGlzLl9yZXF1aXJlXG5cdFx0XHR8fCAhdGhpcy5fcmVxdWlyZS5sZW5ndGhcblx0XHRcdHx8IHN0YXRlICYmIHRoaXMuX3JlcXVpcmUucmVkdWNlKFxuXHRcdFx0XHQoIHIsIGtleSApID0+IChyICYmIHN0YXRlW2tleV0pLFxuXHRcdFx0XHR0cnVlXG5cdFx0XHQpXG5cdFx0KTtcblx0fVxuXHRcblx0LyoqXG5cdCAqIGlzIHN0YWJsZVxuXHQgKiBAcmV0dXJucyBib29sXG5cdCAqL1xuXHRpc1N0YWJsZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5fc3RhYmxlO1xuXHR9XG5cdFxuXHQvKipcblx0ICogU2VyaWFsaXplIHN0YXRlICYgZGF0YSB3aXRoIHNvdXJjZXMgcmVmc1xuXHQgKiBAcmV0dXJucyBib29sXG5cdCAqL1xuXHRzZXJpYWxpemUoIGNmZyA9IHt9LCBvdXRwdXQgPSB7fSApIHtcblx0XHRsZXQgc0lkICA9IGNmZy5wYXJlbnRBbGlhcyB8fCB0aGlzLnNjb3BlT2JqLl9pZCxcblx0XHQgICAgcmVmcyA9XG5cdFx0XHQgICAgIWNmZy5ub3JlZnMgJiYgaXMuYXJyYXkodGhpcy5fdXNlKSAmJiB0aGlzLl91c2UucmVkdWNlKFxuXHRcdFx0ICAgICggbWFwLCBrZXkgKSA9PiB7Ly90b2RvXG5cdFx0XHRcdCAgICBsZXQgbmFtZSxcblx0XHRcdFx0ICAgICAgICBhbGlhcywgcGF0aCwgX2tleSxcblx0XHRcdFx0ICAgICAgICBzdG9yZTtcblx0XHRcdFx0ICAgIGlmICgga2V5LnN0b3JlICYmIGtleS5uYW1lICkge1xuXHRcdFx0XHRcdCAgICBhbGlhcyA9IG5hbWUgPSBrZXkubmFtZTtcblx0XHRcdFx0XHQgICAgc3RvcmUgPSBrZXkuc3RvcmU7XG5cdFx0XHRcdCAgICB9XG5cdFx0XHRcdCAgICBlbHNlIGlmICggaXMuZm4oa2V5KSApIHtcblx0XHRcdFx0XHQgICAgbmFtZSAgPSBhbGlhcyA9IGtleS5uYW1lIHx8IGtleS5kZWZhdWx0TmFtZTtcblx0XHRcdFx0XHQgICAgc3RvcmUgPSBrZXk7XG5cdFx0XHRcdCAgICB9XG5cdFx0XHRcdCAgICBlbHNlIHtcblx0XHRcdFx0XHQgICAgX2tleSAgPSBrZXkubWF0Y2goLyhbXlxcLlxcOl0rKSgoPzpcXC5bXlxcLlxcOl0rKSopKD86XFw6KFteXFwuXFw6XSspKT8vKTtcblx0XHRcdFx0XHQgICAgbmFtZSAgPSBfa2V5WzFdO1xuXHRcdFx0XHRcdCAgICBwYXRoICA9IF9rZXlbMl0gJiYgX2tleVsyXS5zdWJzdHIoMSk7XG5cdFx0XHRcdFx0ICAgIHN0b3JlID0gdGhpcy5zY29wZU9iai5zdG9yZXNbX2tleVsxXV07XG5cdFx0XHRcdFx0ICAgIGFsaWFzID0gX2tleVszXSB8fCBwYXRoICYmIHBhdGgubWF0Y2goLyhbXlxcLl0qKSQvKVswXSB8fCBfa2V5WzFdO1xuXHRcdFx0XHQgICAgfVxuXHRcdFx0XHQgICAgaWYgKCBzdG9yZSAmJiBpcy5yc1N0b3JlKHN0b3JlKSAmJiAhc3RvcmUuc2NvcGVPYmouXy5pc0xvY2FsSWQgKVxuXHRcdFx0XHRcdCAgICBtYXBbYWxpYXNdID0gc3RvcmUuc2NvcGVPYmouX2lkICsgJy8nICsgbmFtZTtcblx0XHRcdFx0XG5cdFx0XHRcdCAgICByZXR1cm4gbWFwO1xuXHRcdFx0ICAgIH0sIHt9XG5cdFx0XHQgICAgKSB8fCB7fTtcblx0XHRcblx0XHRrZXlXYWxrblNldChcblx0XHRcdG91dHB1dCxcblx0XHRcdChzSWQgKyAnLycgKyB0aGlzLm5hbWUpLFxuXHRcdFx0e1xuXHRcdFx0XHRzdGF0ZTogdGhpcy5zdGF0ZSAmJlxuXHRcdFx0XHRcdChcblx0XHRcdFx0XHRcdGNmZy5ub3JlZnNcblx0XHRcdFx0XHRcdD8geyAuLi50aGlzLnN0YXRlIH1cblx0XHRcdFx0XHRcdDogT2JqZWN0LmtleXModGhpcy5zdGF0ZSkucmVkdWNlKCggaCwgayApID0+ICghcmVmc1trXSAmJiAoaFtrXSA9IHRoaXMuc3RhdGVba10pLCBoKSwge30pXG5cdFx0XHRcdFx0KSxcblx0XHRcdFx0ZGF0YSA6IChcblx0XHRcdFx0XHRcdHRoaXMuZGF0YSAmJlxuXHRcdFx0XHRcdFx0dGhpcy5kYXRhLl9fcHJvdG9fXyA9PT0gb2JqUHJvdG8gP1xuXHRcdFx0XHRcdFx0dGhpcy5kYXRhIDpcblx0XHRcdFx0XHRcdChpcy5ib29sKHRoaXMuZGF0YSlcblx0XHRcdFx0XHRcdFx0fHwgaXMubnVtYmVyKHRoaXMuZGF0YSlcblx0XHRcdFx0XHRcdFx0fHwgaXMuc3RyaW5nKHRoaXMuZGF0YSkpICYmIHRoaXMuZGF0YVxuXHRcdFx0XHRcdClcblx0XHRcdFx0XHR8fCB1bmRlZmluZWRcblx0XHRcdFx0XG5cdFx0XHRcdCxcblx0XHRcdFx0cmVmc1xuXHRcdFx0fVxuXHRcdCk7XG5cdFx0cmV0dXJuIG91dHB1dDtcblx0fVxuXHRcblx0LyoqXG5cdCAqIHJlc3RvcmUgc3RhdGUgJiBkYXRhXG5cdCAqIEByZXR1cm5zIGJvb2xcblx0ICovXG5cdHJlc3RvcmUoIHNuYXBzaG90LCBpbW1lZGlhdGUgKSB7XG5cdFx0c25hcHNob3QgPSBzbmFwc2hvdFxuXHRcdFx0JiYga2V5V2Fsa25HZXQoc25hcHNob3QsIHRoaXMuc2NvcGVPYmouX2lkICsgJy8nICsgdGhpcy5uYW1lKVxuXHRcdFx0fHwgdGhpcy4kc2NvcGUudGFrZVNuYXBzaG90QnlLZXkodGhpcy5zY29wZU9iai5faWQgKyAnLycgKyB0aGlzLm5hbWUpO1xuXHRcdFxuXHRcdGlmICggIXNuYXBzaG90IClcblx0XHRcdHJldHVybjtcblx0XHRcblx0XHRpZiAoIHNuYXBzaG90ICkge1xuXHRcdFx0aWYgKCAhdGhpcy5pc1N0YWJsZSgpICYmICFpbW1lZGlhdGUgKVxuXHRcdFx0XHR0aGlzLnRoZW4oKCkgPT4gcmVzdG9yZShzbmFwc2hvdCkpXG5cdFx0XHRsZXQgc25hcDtcblx0XHRcdHRoaXMuc3RhdGUgPSB7IC4uLnNuYXBzaG90LnN0YXRlIH07XG5cdFx0XHRPYmplY3Qua2V5cyhzbmFwc2hvdC5yZWZzKS5mb3JFYWNoKFxuXHRcdFx0XHQoIGtleSApID0+IHsvL3RvZG9cblx0XHRcdFx0XHRpZiAoIHNuYXAgPSB0aGlzLiRzY29wZS5nZXRTbmFwc2hvdEJ5S2V5KHNuYXBzaG90LnJlZnNba2V5XSkgKVxuXHRcdFx0XHRcdFx0dGhpcy5zdGF0ZVtrZXldID0gc25hcC5kYXRhO1xuXHRcdFx0XHRcdC8vZWxzZVxuXHRcdFx0XHRcdC8vICAgIGNvbnNvbGUud2Fybignbm90IGZvdW5kIDogJywga2V5LCBzbmFwICYmIHNuYXAucmVmc1sga2V5IF0pXG5cdFx0XHRcdH1cblx0XHRcdClcblx0XHRcdFxuXHRcdFx0dGhpcy5kYXRhID0gc25hcHNob3QuZGF0YTtcblx0XHRcdFxuXHRcdH1cblx0fVxuXHRcblx0LyoqXG5cdCAqIFVuIGJpbmQgdGhpcyBzdG9yZSBvZmYgdGhlIGdpdmVuIGNvbXBvbmVudC1rZXlcblx0ICogQHBhcmFtIG9ialxuXHQgKiBAcGFyYW0ga2V5XG5cdCAqIEByZXR1cm5zIHtBcnJheS48Kj59XG5cdCAqL1xuXHR1bkJpbmQoIG9iaiwga2V5LCBwYXRoICkge1xuXHRcdHZhciBmb2xsb3dlcnMgPSB0aGlzLl9mb2xsb3dlcnMsXG5cdFx0ICAgIGkgICAgICAgICA9IGZvbGxvd2VycyAmJiBmb2xsb3dlcnMubGVuZ3RoO1xuXHRcdHdoaWxlICggZm9sbG93ZXJzICYmIGktLSApXG5cdFx0XHRpZiAoIGZvbGxvd2Vyc1tpXVswXSA9PT0gb2JqICYmIGZvbGxvd2Vyc1tpXVsxXSA9PT0ga2V5ICYmIGZvbGxvd2Vyc1tpXVsyXSA9PT0gcGF0aCApXG5cdFx0XHRcdHJldHVybiBmb2xsb3dlcnMuc3BsaWNlKGksIDEpO1xuXHR9XG5cdFxuXHQvKipcblx0ICogQmluZCB0aGlzIHN0b3JlIGNoYW5nZXMgdG8gdGhlIGdpdmVuIGNvbXBvbmVudC1rZXlcblx0ICogQHBhcmFtIG9iaiB7UmVhY3QuQ29tcG9uZW50fFN0b3JlfGZ1bmN0aW9uKVxuXHQgKiBAcGFyYW0ga2V5IHtzdHJpbmd9IG9wdGlvbmFsIGtleSB3aGVyZSB0byBtYXAgdGhlIHB1YmxpYyBzdGF0ZVxuXHQgKi9cblx0YmluZCggb2JqLCBrZXksIHNldEluaXRpYWwgPSB0cnVlLCBwYXRoICkge1xuXHRcdHRoaXMuX2ZvbGxvd2Vycy5wdXNoKFtvYmosIGtleSwgcGF0aF0pO1xuXHRcdGlmICggc2V0SW5pdGlhbCAmJiB0aGlzLmRhdGEgJiYgdGhpcy5fc3RhYmxlICkge1xuXHRcdFx0bGV0IGRhdGEgPSBwYXRoID8gdGhpcy5yZXRyaWV2ZShwYXRoKSA6IHRoaXMuZGF0YTtcblx0XHRcdGlmICggdHlwZW9mIG9iaiAhPSBcImZ1bmN0aW9uXCIgKSB7XG5cdFx0XHRcdGlmICgga2V5ICkgb2JqLnNldFN0YXRlKHsgW2tleV06IGRhdGEgfSk7XG5cdFx0XHRcdGVsc2Ugb2JqLnNldFN0YXRlKGRhdGEpO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdG9iaihkYXRhKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBvbmNlKCdzdGFibGUnLCBjYilcblx0ICogQHBhcmFtIG9iaiB7UmVhY3QuQ29tcG9uZW50fFN0b3JlfGZ1bmN0aW9uKVxuXHQgKiBAcGFyYW0ga2V5IHtzdHJpbmd9IG9wdGlvbmFsIGtleSB3aGVyZSB0byBtYXAgdGhlIHB1YmxpYyBzdGF0ZVxuXHQgKi9cblx0dGhlbiggY2IgKSB7XG5cdFx0aWYgKCB0aGlzLl9zdGFibGUgKVxuXHRcdFx0cmV0dXJuIGNiKHRoaXMuZGF0YSk7XG5cdFx0dGhpcy5vbmNlKCdzdGFibGUnLCBlID0+IGNiKHRoaXMuZGF0YSkpO1xuXHR9XG5cdFxuXHQvKipcblx0ICogQWRkIGEgbG9jayBzbyB0aGUgc3RvcmUgd2lsbCBub3QgcHJvcGFnIGl0IGRhdGEgdW50aWxsIHJlbGVhc2UoKSBpcyBjYWxsXG5cdCAqIEBwYXJhbSBwcmV2aW91cyB7U3RvcmV8bnVtYmVyfEFycmF5fSBAb3B0aW9uYWwgd2YgdG8gd2FpdCwgcmVsZWFzZXMgdG8gd2FpdCBvclxuXHQgKiAgICAgYXJyYXkgb2Ygc3R1ZmYgdG8gd2FpdFxuXHQgKiBAcmV0dXJucyB7dGhpc31cblx0ICovXG5cdHdhaXQoIHByZXZpb3VzICkge1xuXHRcdGlmICggdHlwZW9mIHByZXZpb3VzID09IFwibnVtYmVyXCIgKVxuXHRcdFx0cmV0dXJuIHRoaXMuX19sb2Nrcy5hbGwgKz0gcHJldmlvdXM7XG5cdFx0aWYgKCBpcy5hcnJheShwcmV2aW91cykgKVxuXHRcdFx0cmV0dXJuIHByZXZpb3VzLm1hcCh0aGlzLndhaXQuYmluZCh0aGlzKSk7XG5cdFx0XG5cdFx0dGhpcy5fc3RhYmxlICYmIHRoaXMuZW1pdCgndW5zdGFibGUnLCB0aGlzLnN0YXRlLCB0aGlzLmRhdGEpO1xuXHRcdHRoaXMuX3N0YWJsZSA9IGZhbHNlO1xuXHRcdHRoaXMuX19sb2Nrcy5hbGwrKztcblx0XHRcblx0XHRsZXQgcmVhc29uID0gaXMuc3RyaW5nKHByZXZpb3VzKSA/IHByZXZpb3VzIDogbnVsbDtcblx0XHRpZiAoIHJlYXNvbiApIHtcblx0XHRcdHRoaXMuX19sb2Nrc1tyZWFzb25dID0gdGhpcy5fX2xvY2tzW3JlYXNvbl0gfHwgMDtcblx0XHRcdHRoaXMuX19sb2Nrc1tyZWFzb25dKys7XG5cdFx0fVxuXHRcdGlmICggcHJldmlvdXMgJiYgaXMuZm4ocHJldmlvdXMudGhlbikgKSB7XG5cdFx0XHRwcmV2aW91cy50aGVuKHRoaXMucmVsZWFzZS5iaW5kKHRoaXMsIG51bGwpKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBEZWNyZWFzZSBsb2NrcyBmb3IgdGhpcyBzdG9yZSwgaWYgaXQgcmVhY2ggMCAsXG5cdCAqIGl0IHdpbGwgYmUgcHJvcGFnYXRlZCB0byB0aGUgZm9sbG93ZXJzLFxuXHQgKiB0aGVuLCBhbGwgc3R1ZmYgcGFzc2VkIHRvIFwidGhlblwiIGNhbGwgYmFjayB3aWxsIGJlIGV4ZWMgLyByZWxlYXNlZFxuXHQgKiBAcGFyYW0gZGVzeW5jXG5cdCAqIEByZXR1cm5zIHsqfVxuXHQgKi9cblx0cmVsZWFzZSggcmVhc29uLCBjYiApIHtcblx0XHR2YXIgX3N0YXRpYyA9IHRoaXMuY29uc3RydWN0b3IsIG1lID0gdGhpcztcblx0XHRsZXQgaSAgICAgICA9IDAsIHdhc1N0YWJsZSA9IHRoaXMuX3N0YWJsZTtcblx0XHRcblx0XHRpZiAoIGlzLmZuKHJlYXNvbikgKSB7XG5cdFx0XHRjYiAgICAgPSByZWFzb247XG5cdFx0XHRyZWFzb24gPSBudWxsO1xuXHRcdH1cblx0XHRcblx0XHRpZiAoIHJlYXNvbiApIHtcblx0XHRcdGlmICggdGhpcy5fX2xvY2tzW3JlYXNvbl0gPT0gMCApXG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoXCJSZWxlYXNlIG1vcmUgdGhhbiBsb2NraW5nICFcIiwgcmVhc29uKTtcblx0XHRcdHRoaXMuX19sb2Nrc1tyZWFzb25dID0gdGhpcy5fX2xvY2tzW3JlYXNvbl0gfHwgMDtcblx0XHRcdHRoaXMuX19sb2Nrc1tyZWFzb25dLS07XG5cdFx0fVxuXHRcdFxuXHRcdGlmICggIXJlYXNvbiAmJiB0aGlzLl9fbG9ja3MuYWxsID09IDAgKVxuXHRcdFx0Y29uc29sZS5lcnJvcihcIlJlbGVhc2UgbW9yZSB0aGFuIGxvY2tpbmcgIVwiKTtcblx0XHRcblx0XHRpZiAoICEtLXRoaXMuX19sb2Nrcy5hbGwgJiYgdGhpcy5pc0NvbXBsZXRlKCkgKSB7XG5cdFx0XHRsZXQgcHJvcGFnICAgPSB0aGlzLnNob3VsZFByb3BhZyh0aGlzLmRhdGEpO1xuXHRcdFx0dGhpcy5fc3RhYmxlID0gdHJ1ZTtcblx0XHRcdHByb3BhZyAmJiB0aGlzLl9yZXYrKzsvL1xuXHRcdFx0aWYgKCBwcm9wYWcgJiYgdGhpcy5fZm9sbG93ZXJzLmxlbmd0aCApXG5cdFx0XHRcdHRoaXMuX2ZvbGxvd2Vycy5mb3JFYWNoKGZ1bmN0aW9uIHByb3BhZyggZm9sbG93ZXIgKSB7XG5cdFx0XHRcdFx0bGV0IGRhdGEgPSBmb2xsb3dlclsyXSA/IG1lLnJldHJpZXZlKGZvbGxvd2VyWzJdKSA6IG1lLmRhdGE7XG5cdFx0XHRcdFx0Ly9pZiAoICFkYXRhICkgcmV0dXJuO1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdGlmICggdHlwZW9mIGZvbGxvd2VyWzBdID09IFwiZnVuY3Rpb25cIiApIHtcblx0XHRcdFx0XHRcdGZvbGxvd2VyWzBdKGRhdGEpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHRcdC8vY2IgJiYgaSsrO1xuXHRcdFx0XHRcdFx0Zm9sbG93ZXJbMF0uc2V0U3RhdGUoXG5cdFx0XHRcdFx0XHRcdChmb2xsb3dlclsxXSkgPyB7IFtmb2xsb3dlclsxXV06IGRhdGEgfVxuXHRcdFx0XHRcdFx0XHQgICAgICAgICAgICAgIDogZGF0YVxuXHRcdFx0XHRcdFx0XHQvLyxcblx0XHRcdFx0XHRcdFx0Ly9jYiAmJiAoXG5cdFx0XHRcdFx0XHRcdC8vICAgICgpID0+ICghKC0taSkgJiYgY2IoKSlcblx0XHRcdFx0XHRcdFx0Ly8pXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHQvL2Vsc2Vcblx0XHRcdCF3YXNTdGFibGUgJiYgdGhpcy5lbWl0KCdzdGFibGUnLCB0aGlzLmRhdGEpO1xuXHRcdFx0cHJvcGFnICYmIHRoaXMuZW1pdCgndXBkYXRlJywgdGhpcy5kYXRhKTtcblx0XHRcdGNiICYmIGNiKClcblx0XHR9XG5cdFx0ZWxzZSBjYiAmJiB0aGlzLnRoZW4oY2IpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cdFxuXHRwcm9wYWcoIGRhdGEgKSB7XG5cdFx0dGhpcy5lbWl0KCd1cGRhdGUnLCBkYXRhKTtcblx0fVxuXHRcblx0cmV0YWluKCByZWFzb24gKSB7XG5cdFx0dGhpcy5fX3JldGFpbnMuYWxsKys7XG5cdFx0aWYgKCByZWFzb24gKSB7XG5cdFx0XHR0aGlzLl9fcmV0YWluc1tyZWFzb25dID0gdGhpcy5fX3JldGFpbnNbcmVhc29uXSB8fCAwO1xuXHRcdFx0dGhpcy5fX3JldGFpbnNbcmVhc29uXSsrO1xuXHRcdH1cblx0fVxuXHRcblx0ZGlzcG9zZSggcmVhc29uICkge1xuXHRcdC8vY29uc29sZS53YXJuKFwiZGlzcG9zZVwiLCByZWFzb24sIHRoaXMuX19yZXRhaW5zKTtcblx0XHRpZiAoIHJlYXNvbiApIHtcblx0XHRcdGlmICggIXRoaXMuX19yZXRhaW5zW3JlYXNvbl0gKVxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJSUyA6IERpc3Bvc2UgbW9yZSB0aGFuIHJldGFpbmluZyBvbiBzdG9yZSAnXCIgKyB0aGlzLm5hbWUgKyBcIicgOiBcIiArIHJlYXNvbik7XG5cdFx0XHRcblx0XHRcdHRoaXMuX19yZXRhaW5zW3JlYXNvbl0tLTtcblx0XHR9XG5cdFx0aWYgKCB0aGlzLl9fcmV0YWlucy5hbGwgPT0gMCApXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJSUyA6IERpc3Bvc2UgbW9yZSB0aGFuIHJldGFpbmluZyBvbiBzdG9yZSBcIiArIHRoaXMubmFtZSk7XG5cdFx0XG5cdFx0dGhpcy5fX3JldGFpbnMuYWxsLS07XG5cdFx0XG5cdFx0aWYgKCAhdGhpcy5fX3JldGFpbnMuYWxsICkge1xuXHRcdFx0aWYgKCB0aGlzLl9wZXJzaXN0ZW5jZVRtICkge1xuXHRcdFx0XHR0aGlzLl9kZXN0cm95VE0gJiYgY2xlYXJUaW1lb3V0KHRoaXMuX2Rlc3Ryb3lUTSk7XG5cdFx0XHRcdHRoaXMuX2Rlc3Ryb3lUTSA9IHNldFRpbWVvdXQoXG5cdFx0XHRcdFx0ZSA9PiB7XG5cdFx0XHRcdFx0XHR0aGlzLl9kZXN0cm95VE0gPSBudWxsO1xuXHRcdFx0XHRcdFx0Ly90aGlzLnRoZW4ocyA9PiB7XG5cdFx0XHRcdFx0XHQhdGhpcy5fX3JldGFpbnMuYWxsICYmICF0aGlzLmRlYWQgJiYgdGhpcy5kZXN0cm95KClcblx0XHRcdFx0XHRcdC8vfSk7XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR0aGlzLl9wZXJzaXN0ZW5jZVRtXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0Ly90aGlzLnRoZW4ocyA9PlxuXHRcdFx0XHQoIXRoaXMuX19yZXRhaW5zLmFsbCAmJiAhdGhpcy5kZWFkICYmIHRoaXMuZGVzdHJveSgpKVxuXHRcdFx0XHQvLyk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdFxuXHRkZXN0cm95KCkge1xuXHRcdC8vICBjb25zb2xlLmxvZyhcImRlc3Ryb3lcIiwgdGhpcy5fdWlkKTtcblx0XHRcblx0XHR0aGlzLmVtaXQoJ2Rlc3Ryb3knLCB0aGlzKTtcblx0XHRpZiAoIHRoaXMuX3N0YWJpbGl6ZXIgKVxuXHRcdFx0Y2xlYXJUaW1lb3V0KHRoaXMuX3N0YWJpbGl6ZXIpO1xuXHRcdFxuXHRcdGlmICggdGhpcy5fZm9sbG93ZXJzLmxlbmd0aCApXG5cdFx0XHR0aGlzLl9mb2xsb3dlcnMuZm9yRWFjaChcblx0XHRcdFx0KCBmb2xsb3dlciApID0+IHtcblx0XHRcdFx0XHRpZiAoIHR5cGVvZiBmb2xsb3dlclswXSAhPT0gXCJmdW5jdGlvblwiICkge1xuXHRcdFx0XHRcdFx0aWYgKCBmb2xsb3dlclswXS5zdG9yZXMgKVxuXHRcdFx0XHRcdFx0XHRkZWxldGUgZm9sbG93ZXJbMF0uc3RvcmVzW2ZvbGxvd2VyWzFdXTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdCk7XG5cdFx0dGhpcy5fZm9sbG93ZXJzLmxlbmd0aCA9IDA7XG5cdFx0dGhpcy5jb25zdHJ1Y3Rvci5fcmV2ICA9IHRoaXMucmV2O1xuXHRcdHRoaXMuZGVhZCAgICAgICAgICAgICAgPSB0cnVlO1xuXHRcdHRoaXMuX3JldnMgICAgICAgICAgICAgPSB0aGlzLmRhdGEgPSB0aGlzLnN0YXRlID0gdGhpcy5zY29wZSA9IG51bGw7XG5cdFx0dGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoKTtcblx0fVxufVxuXG4vKipcbiAqIGdldCBhIHN0YXRpYyBhbGlhc2VkIHJlZmVyZW5jZSBvZiBhIHN0b3JlXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICogQHJldHVybnMge3tzdG9yZTogU3RvcmUsIG5hbWU6ICp9fVxuICovXG5TdG9yZS5hcyA9IGZ1bmN0aW9uICggbmFtZSApIHtcblx0cmV0dXJuIHsgc3RvcmU6IHRoaXMsIG5hbWUgfTtcbn1cblxuLyoqXG4gKiBNYXAgYWxsIG5hbWVkIHN0b3JlcyBpbiB7a2V5c30gdG8gdGhlIHtvYmplY3R9J3Mgc3RhdGVcbiAqIEhvb2sgY29tcG9uZW50V2lsbFVubW91bnQgKGZvciByZWFjdCBjb21wKSBvciBkZXN0cm95IHRvIHVuQmluZCB0aGVtIGF1dG9tYXRpY2FsbHlcbiAqIEBzdGF0aWNcbiAqIEBwYXJhbSBvYmplY3Qge09iamVjdH0gdGFyZ2V0IHN0YXRlIGF3YXJlIG9iamVjdCAoUmVhY3QuQ29tcG9uZW50fFN0b3JlfC4uLilcbiAqIEBwYXJhbSBrZXlzIHtBcnJheX0gRXggOiBbXCJzZXNzaW9uXCIsIFwib3RoZXJTdGF0aWNOYW1lZFN0b3JlOmtleVwiLFxuICogICAgIHN0b3JlLmFzKCdhbm90aGVyS2V5JyldXG4gKi9cblN0b3JlLm1hcCA9IGZ1bmN0aW9uICggY1N0b3JlLCBrZXlzLCBzY29wZSwgb3JpZ2luLCBzZXRJbml0aWFsID0gZmFsc2UgKSB7XG5cdHZhciB0YXJnZXRSZXZzICAgICA9IGNTdG9yZS5fcmV2cyB8fCB7fTtcblx0dmFyIHRhcmdldFNjb3BlICAgID0gY1N0b3JlLnN0b3JlcyB8fCAoY1N0b3JlLnN0b3JlcyA9IHt9KTtcblx0dmFyIGluaXRpYWxPdXRwdXRzID0ge307XG5cdGtleXMgICAgICAgICAgICAgICA9IGlzLmFycmF5KGtleXMpID8gWy4uLmtleXNdIDogW2tleXNdO1xuXHRcblx0XG5cdHNjb3BlID0gc2NvcGUgfHwgU3RvcmUuc3RhdGljU2NvcGU7XG5cdFxuXHRrZXlzID0ga2V5cy5maWx0ZXIoXG5cdFx0Ly8gQHRvZG8gOiB1c2UgcXVlcnkgcmVmc1xuXHRcdC8vIChzdG9yZSkoXFwuc3RvcmUpKihcXFsoXFwqfChwcm9wcylcXHcrKSspXFxdKT8oXFw6YWxpYXMpXG5cdFx0KCBrZXkgKSA9PiB7XG5cdFx0XHRpZiAoICFrZXkgKSB7XG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoXCJOb3QgYSBtYXBwYWJsZSBzdG9yZSBpdGVtICdcIiArIGtleSArIFwiJyBpbiBcIiArIG9yaWdpbiArICcgISEnKTtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0bGV0IG5hbWUsXG5cdFx0XHQgICAgYWxpYXMsXG5cdFx0XHQgICAgcGF0aCxcblx0XHRcdCAgICBzdG9yZSwgX2tleTtcblx0XHRcdGlmICgga2V5LnN0b3JlICYmIGtleS5uYW1lICkge1xuXHRcdFx0XHRhbGlhcyA9IG5hbWUgPSBrZXkubmFtZTtcblx0XHRcdFx0c3RvcmUgPSBrZXkuc3RvcmU7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIGlmICggaXMuZm4oa2V5KSApIHtcblx0XHRcdFx0bmFtZSAgPSBhbGlhcyA9IGtleS5uYW1lIHx8IGtleS5kZWZhdWx0TmFtZTtcblx0XHRcdFx0c3RvcmUgPSBrZXk7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0X2tleSAgPSBrZXkubWF0Y2goLyhbXlxcLlxcOl0rKSgoPzpcXC5bXlxcLlxcOl0rKSopKD86XFw6KFteXFwuXFw6XSspKT8vKTtcblx0XHRcdFx0bmFtZSAgPSBfa2V5WzFdO1xuXHRcdFx0XHRwYXRoICA9IF9rZXlbMl0gJiYgX2tleVsyXS5zdWJzdHIoMSk7XG5cdFx0XHRcdHN0b3JlID0gc2NvcGUuc3RvcmVzW19rZXlbMV1dO1xuXHRcdFx0XHRhbGlhcyA9IF9rZXlbM10gfHwgcGF0aCAmJiBwYXRoLm1hdGNoKC8oW15cXC5dKikkLylbMF0gfHwgX2tleVsxXTtcblx0XHRcdH1cblx0XHRcdGlmICggIXN0b3JlICkge1xuXHRcdFx0XHRsZXQgaSA9IFtdO1xuXHRcdFx0XHRmb3IgKCB2YXIgbyBpbiBzY29wZS5zdG9yZXMgKVxuXHRcdFx0XHRcdGkucHVzaChvKVxuXHRcdFx0XHRjb25zb2xlLmVycm9yKFwiTm90IGEgbWFwcGFibGUgc3RvcmUgaXRlbSAnXCIgKyBuYW1lICsgXCIvXCIgKyBhbGlhcyArIFwiJyBpbiBcIiArIChjU3RvcmUubmFtZSB8fCBjU3RvcmUpICsgJyAhIScsIHN0b3JlLCBfa2V5LCBzY29wZS5zdG9yZXMsIGkpO1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRpZiAoIGlzLnJzU2NvcGVDbGFzcyhzdG9yZSkgKSBzY29wZS5fbW91bnQobmFtZSk7XG5cdFx0XHRpZiAoIGlzLnJzU2NvcGUoc3RvcmUpICkge1xuXHRcdFx0XHRzdG9yZSA9IHNjb3BlLl9tb3VudChrZXkpO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSBpZiAoIHRhcmdldFJldnNbbmFtZV0gKSByZXR1cm4gZmFsc2U7Ly8gaWdub3JlIGRibCB1c2VzIGZvciBub3dcblx0XHRcdFxuXHRcdFx0XG5cdFx0XHRpZiAoIGlzLmZuKHN0b3JlKSApIHtcblx0XHRcdFx0c2NvcGUuX21vdW50KG5hbWUpXG5cdFx0XHRcdHNjb3BlLnN0b3Jlc1tuYW1lXS5iaW5kKGNTdG9yZSwgYWxpYXMsIHNldEluaXRpYWwsIHBhdGgpO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdHN0b3JlLmJpbmQoY1N0b3JlLCBhbGlhcywgc2V0SW5pdGlhbCwgcGF0aCk7XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdC8vIGdpdmUgaW5pdGlhbCBzdG9yZSB3ZWlnaHQgYmFzaW5nIHNvdXJjZXNcblx0XHRcdHNjb3BlLnN0b3Jlc1tuYW1lXS5fc291cmNlcyAmJiBjU3RvcmUuX3NvdXJjZXMucHVzaCguLi5zY29wZS5zdG9yZXNbbmFtZV0uX3NvdXJjZXMpO1xuXHRcdFx0XG5cdFx0XHR0YXJnZXRSZXZzW2FsaWFzXSA9IHRhcmdldFJldnNbYWxpYXNdIHx8IHRydWU7XG5cdFx0XHQhdGFyZ2V0U2NvcGVbbmFtZV0gJiYgKHRhcmdldFNjb3BlW25hbWVdID0gc2NvcGUuc3RvcmVzW25hbWVdKTtcblx0XHRcdGlmICggc2NvcGUuc3RvcmVzW25hbWVdLmhhc093blByb3BlcnR5KCdkYXRhJykgKVxuXHRcdFx0XHRpbml0aWFsT3V0cHV0c1tuYW1lXSA9IHNjb3BlLmRhdGFbbmFtZV07XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdCk7XG5cdFxuXHQvLyAuLi4gQHRvZG9cblx0Y1N0b3JlLm9uY2UoJ2Rlc3Ryb3knLCAoIC4uLmFyZ3ogKSA9PiB7XG5cdFx0a2V5cy5tYXAoXG5cdFx0XHQoIGtleSApID0+IHtcblx0XHRcdFx0bGV0IG5hbWUsXG5cdFx0XHRcdCAgICBhbGlhcywgcGF0aCxcblx0XHRcdFx0ICAgIHN0b3JlO1xuXHRcdFx0XHRpZiAoIGtleS5zdG9yZSAmJiBrZXkubmFtZSApIHtcblx0XHRcdFx0XHRhbGlhcyA9IG5hbWUgPSBrZXkubmFtZTtcblx0XHRcdFx0XHRzdG9yZSA9IGtleS5zdG9yZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlIGlmICggaXMuZm4oa2V5KSApIHtcblx0XHRcdFx0XHRuYW1lICA9IGFsaWFzID0ga2V5Lm5hbWUgfHwga2V5LmRlZmF1bHROYW1lO1xuXHRcdFx0XHRcdHN0b3JlID0gc2NvcGUuc3RvcmVzW25hbWVdO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdGtleSAgID0ga2V5Lm1hdGNoKC8oW15cXC5cXDpdKykoKD86XFwuW15cXC5cXDpdKykqKSg/OlxcOihbXlxcLlxcOl0rKSk/Lyk7XG5cdFx0XHRcdFx0bmFtZSAgPSBrZXlbMV07XG5cdFx0XHRcdFx0cGF0aCAgPSBrZXlbMl0gJiYga2V5WzJdLnN1YnN0cigxKTtcblx0XHRcdFx0XHRzdG9yZSA9IHNjb3BlLnN0b3Jlc1trZXlbMV1dO1xuXHRcdFx0XHRcdGFsaWFzID0ga2V5WzNdIHx8IHBhdGggJiYgcGF0aC5tYXRjaCgvKFteXFwuXSopJC8pWzBdIHx8IGtleVsxXTtcblx0XHRcdFx0fVxuXHRcdFx0XHRcblx0XHRcdFx0c3RvcmUgJiYgIWlzLmZuKHN0b3JlKSAmJiBzdG9yZS51bkJpbmQoY1N0b3JlLCBhbGlhcywgcGF0aClcblx0XHRcdH1cblx0XHQpO1xuXHR9KVxuXHRcblx0cmV0dXJuIGluaXRpYWxPdXRwdXRzO1xufTtcblxuXG5pcy5yc1N0b3JlICAgICAgPSBmdW5jdGlvbiAoIG9iaiApIHtcblx0cmV0dXJuIG9iaiBpbnN0YW5jZW9mIFN0b3JlXG59XG5pcy5yc1N0b3JlQ2xhc3MgPSBmdW5jdGlvbiAoIG9iaiApIHtcblx0cmV0dXJuIFN0b3JlLmlzUHJvdG90eXBlT2Yob2JqKSB8fCBvYmogPT09IFN0b3JlXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0b3JlO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9TdG9yZS5qcyIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpICAyMDE4IFdpc2UgV2lsZCBXZWIgLlxuICpcbiAqICBNSVQgTGljZW5zZVxuICpcbiAqICBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiAgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqICB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiAgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiAgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiAgVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG4gKiAgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqICBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG4gKiAgU09GVFdBUkUuXG4gKlxuICogQGF1dGhvciA6IE5hdGhhbmFlbCBCcmF1blxuICogQGNvbnRhY3QgOiBjYWlwaWxhYnNAZ21haWwuY29tXG4gKi9cblxuLy9pbXBvcnQgaW5kZXggZnJvbSBcIi4vaW5kZXhcIjsvLyB3aWxsIHVzZSBhcyBleHRlcm5hbCB0aGUgaW5kZXggaW4gZGlzdFxuaW1wb3J0IGlzIGZyb20gXCJpc1wiO1xuXG4vKipcbiAqIE1pbmltYWwgcHVzaCBzZXF1ZW5jZXIsIGFwcGx5IHN0b3JlcyBzcGVjaWZpYyB0YXNrIGluIHRoZSByaWdodCBvcmRlciAocm9vdCBzdG9yZXNcbiAqIGZpcnN0KVxuICovXG5sZXQgdGFza1F1ZXVlICAgICAgPSBbXSxcbiAgICBjdXJXZWlnaHQgICAgICA9IDAsXG4gICAgbWF4V2VpZ2h0ICAgICAgPSAwLFxuICAgIG1pbldlaWdodCAgICAgID0gMCxcbiAgICB0YXNrQ291bnQgICAgICA9IDAsXG4gICAgZGVTeW5jICAgICAgICAgPSBmYWxzZSxcbiAgICBkZVN5bmNNYXhUYXNrcyA9IDEwLFxuICAgIHRhc2ssXG4gICAgaXNSdW5uaW5nLFxuICAgIGVycm9yQ2F0Y2hlciAgID0ge1xuICAgICAgICBsYXN0RXJyb3I6IG51bGwsXG4gICAgICAgIGRpc3BhdGNoIDogZnVuY3Rpb24gKCBlcnJvciApIHtcbiAgICAgICAgICAgIGVycm9yQ2F0Y2hlci5kaXNhYmxlKCk7XG4gICAgICAgICAgICBpZiAoIHRhc2sgJiYgdGFza1sgMCBdLmhhbmRsZUVycm9yICkge1xuICAgICAgICAgICAgICAgIHRhc2tbIDAgXS5oYW5kbGVFcnJvcihlcnJvciwgdGFzayk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICggdGFzayApXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlJlU2NvcGUgOiBBbiBhcHBseSB0YXNrIGhhcyBmYWlsZWQgISFcIiwgdGFza1sgMSBdLCBcIiBvbiBcIiwgdGFza1sgMCBdLm5hbWUgfHwgdGFza1sgMCBdLmNvbnN0cnVjdG9yLm5hbWUpXG4gICAgICAgIFxuICAgICAgICAgICAgaXNSdW5uaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB0YXNrICAgICAgPSBudWxsO1xuICAgICAgICAgICAgcnVuTm93KCk7XG4gICAgICAgIH0sXG4gICAgICAgIGVuYWJsZSAgIDogKCB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyApXG4gICAgICAgICAgICAgICAgICAgPyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgZXJyb3JDYXRjaGVyLmRpc3BhdGNoKVxuICAgICAgICAgICAgfSA6ICgpID0+IHtcbiAgICAgICAgICAgICAgICBwcm9jZXNzLm9uKCd1bmNhdWdodEV4Y2VwdGlvbicsIGVycm9yQ2F0Y2hlci5kaXNwYXRjaCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICBkaXNhYmxlICA6ICggdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgKVxuICAgICAgICAgICAgICAgICAgID8gKCkgPT4ge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdlcnJvcicsIGVycm9yQ2F0Y2hlci5kaXNwYXRjaClcbiAgICAgICAgICAgIH0gOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgcHJvY2Vzcy5yZW1vdmVMaXN0ZW5lcigndW5jYXVnaHRFeGNlcHRpb24nLCBlcnJvckNhdGNoZXIuZGlzcGF0Y2gpO1xuICAgICAgICAgICAgfVxuICAgIH1cbjtcblxuZnVuY3Rpb24gcnVuTm93KCkge1xuICAgIGlmICggIWlzUnVubmluZyApIHtcbiAgICAgICAgcnVuKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBydW4oKSB7XG4gICAgbGV0IGZyb20gID0gRGF0ZS5ub3coKTtcbiAgICBpc1J1bm5pbmcgPSB0cnVlO1xuICAgIGVycm9yQ2F0Y2hlci5lbmFibGUoKTtcbiAgICB3aGlsZSAoIHRhc2tDb3VudCApIHtcbiAgICAgICAgXG4gICAgICAgIC8vIHRyeSBmb3IgdGhlIGN1cnJlbnQgd2VpZ2h0XG4gICAgICAgIHdoaWxlICggISggdGFza1F1ZXVlWyBjdXJXZWlnaHQgXSAmJiB0YXNrUXVldWVbIGN1cldlaWdodCBdLmxlbmd0aCApIClcbiAgICAgICAgICAgIGN1cldlaWdodCsrO1xuICAgICAgICBcbiAgICAgICAgdGFza0NvdW50LS07XG4gICAgICAgIHRhc2sgPSB0YXNrUXVldWVbIGN1cldlaWdodCBdLnNoaWZ0KCk7XG4gICAgICAgIC8vY29uc29sZS5sb2coXCJUYXNrIDogXCIsIHRhc2tbMV0sIFwiIG9uIFwiLCB0YXNrWzBdLm5hbWUpO1xuICAgICAgICB0YXNrWyAwIF1bIHRhc2tbIDEgXSBdLmFwcGx5KHRhc2tbIDAgXSwgdGFza1sgMiBdKTtcbiAgICB9XG4gICAgdGFzayA9IHVuZGVmaW5lZDtcbiAgICBlcnJvckNhdGNoZXIuZGlzYWJsZSgpO1xuICAgIFxuICAgIGlzUnVubmluZyA9IGZhbHNlO1xuICAgIGlmICggdGFza0NvdW50ICkge1xuICAgICAgICBzZXRUaW1lb3V0KHJ1bk5vdyk7XG4gICAgfVxufVxuXG4vL1xuLy9pbmRleC5zZXRUYXNrRGVTeW5jID0gKCBuYiApID0+IHtcbi8vICAgIGlmICggbmIgPT09IGZhbHNlIClcbi8vICAgICAgICByZXR1cm4gZGVTeW5jID0gZmFsc2U7XG4vLyAgICBlbHNlIGlmICggbmIgPT09IHRydWUgKSB7XG4vLyAgICAgICAgZGVTeW5jICAgICAgICAgPSB0cnVlO1xuLy8gICAgICAgIGRlU3luY01heFRhc2tzID0gMTA7XG4vLyAgICB9XG4vLyAgICBlbHNlIChpcy5pbnQobmIpKVxuLy8gICAge1xuLy8gICAgICAgIGRlU3luYyAgICAgICAgID0gdHJ1ZTtcbi8vICAgICAgICBkZVN5bmNNYXhUYXNrcyA9IG5iO1xuLy8gICAgfVxuLy99O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgcHVzaFRhc2soIG9iaiwgZm4sIGFyZ3ogKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgbW9yZSBhIHN0b3JlIGhhdmUgc291cmNlcywgdGhlIG1vcmUgaXQgc2hvdWxkIGJlIHByb2Nlc3NlZCBmaXJzdFxuICAgICAgICAgKiBTbyBsZWFmcyBzdG9yZXMgc3RheSBzeW5jLCBhbmQgcm9vdCBzdG9yZXMgcmVjZWl2ZSBtZXJnZWQgc3RhdGUgdXBkYXRlcztcbiAgICAgICAgICogZ2xvYmFsIHN0YXRlIHN0YXkgY29oZXJlbnRcbiAgICAgICAgICpcbiAgICAgICAgICogVGhpcyBtZWFuIHdoYXRldmVyIHRoZSBudW1iZXIgb2Ygc3RvcmVzICYgdGhlIGNvbXBsZXhpdHkgb2YgdGhlIGRlcHMsXG4gICAgICAgICAqIHVwZGF0aW5nIGEgc3RvcmUgc3RhdGUgd2lsbCB1cGRhdGUgaXRzIHN5bmNocm9uZSBjaGlsZCBzdG9yZXMgaW1tZWRpYXRlbHlcbiAgICAgICAgICpcbiAgICAgICAgICpcbiAgICAgICAgICogQHR5cGUgeyp8bnVtYmVyfVxuICAgICAgICAgKi9cbiAgICAgICAgbGV0IHdlaWdodCA9IG9iai5fc291cmNlcyAmJiBvYmouX3NvdXJjZXMubGVuZ3RoIHx8IDEsXG4gICAgICAgICAgICBzdGFjayAgPSB0YXNrUXVldWVbIHdlaWdodCBdID1cbiAgICAgICAgICAgICAgICB0YXNrUXVldWVbIHdlaWdodCBdIHx8IFtdO1xuICAgICAgICBcbiAgICAgICAgbWF4V2VpZ2h0ID0gTWF0aC5tYXgobWF4V2VpZ2h0LCB3ZWlnaHQpO1xuICAgICAgICBjdXJXZWlnaHQgPSBNYXRoLm1pbihjdXJXZWlnaHQsIHdlaWdodCk7XG4gICAgICAgIHRhc2tDb3VudCsrO1xuICAgICAgICBcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcIlB1c2ggVGFzayA6IFwiLCBmbiwgXCIgb24gXCIsIG9iai5uYW1lLCB3ZWlnaHQpO1xuICAgICAgICBzdGFjay5wdXNoKFsgb2JqLCBmbiwgYXJneiBdKTtcbiAgICAgICAgc2V0VGltZW91dChydW5Ob3csIDApO1xuICAgICAgICByZXR1cm4gc3RhY2subGVuZ3RoO1xuICAgIH1cbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWxzL1Rhc2tTZXF1ZW5jZXIuanMiLCIvKlxuICogQ29weXJpZ2h0IChjKSAgMjAxOCBXaXNlIFdpbGQgV2ViIC5cbiAqXG4gKiAgTUlUIExpY2Vuc2VcbiAqXG4gKiAgUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqICBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiAgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuICogIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqICBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqICBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqICBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiAgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqICBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuICogIFNPRlRXQVJFLlxuICpcbiAqIEBhdXRob3IgOiBOYXRoYW5hZWwgQnJhdW5cbiAqIEBjb250YWN0IDogY2FpcGlsYWJzQGdtYWlsLmNvbVxuICovXG5cbmltcG9ydCBpcyAgICBmcm9tICdpcydcblxuY29uc3QgU2ltcGxlT2JqZWN0UHJvdG8gPSAoIHt9ICkuY29uc3RydWN0b3I7XG5cbmxldCBzY29wYWJsZXMgPSBbXTtcblxuZnVuY3Rpb24gYWRkU2NvcGFibGVUeXBlKCB0ZXN0LCBoYW5kbGUsIG1lbWJlciA9IGZhbHNlLCBzdGF0ZVNjb3BlID0gZmFsc2UgKSB7XG4gICAgc2NvcGFibGVzLnB1c2goXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRlc3QsXG4gICAgICAgICAgICBtZW1iZXIsXG4gICAgICAgICAgICBzdGF0ZVNjb3BlLFxuICAgICAgICAgICAgaGFuZGxlXG4gICAgICAgIH1cbiAgICApXG59XG5cbi8vXG5mdW5jdGlvbiBpc1Njb3BhYmxlVHlwZSggQ29tcCwgbWVtYmVyLCBzdGF0ZVNjb3BlICkge1xuICAgIFxuICAgIGZvciAoIGxldCBpID0gMDsgaSA8IHNjb3BhYmxlcy5sZW5ndGg7IGkrKyApXG4gICAgICAgIGlmIChcbiAgICAgICAgICAgICggbWVtYmVyID09PSB1bmRlZmluZWQgfHwgbWVtYmVyID09IHNjb3BhYmxlc1sgaSBdLm1lbWJlciApXG4gICAgICAgICAgICAmJiBzdGF0ZVNjb3BlID09IHNjb3BhYmxlc1sgaSBdLnN0YXRlU2NvcGVcbiAgICAgICAgICAgICYmIHNjb3BhYmxlc1sgaSBdLnRlc3QoQ29tcClcbiAgICAgICAgKVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgXG4gICAgcmV0dXJuIGZhbHNlO1xuICAgIFxufVxuXG5mdW5jdGlvbiBhcHBseVNjb3BhYmxlVHlwZSggQ29tcCwgYXJneiwgbWVtYmVyLCBzdGF0ZVNjb3BlICkge1xuICAgIFxuICAgIGZvciAoIGxldCBpID0gMDsgaSA8IHNjb3BhYmxlcy5sZW5ndGg7IGkrKyApXG4gICAgICAgIGlmICggbWVtYmVyID09IHNjb3BhYmxlc1sgaSBdLm1lbWJlciAmJiBzdGF0ZVNjb3BlID09IHNjb3BhYmxlc1sgaSBdLnN0YXRlU2NvcGUgJiYgc2NvcGFibGVzWyBpIF0udGVzdChDb21wKSApXG4gICAgICAgICAgICByZXR1cm4gc2NvcGFibGVzWyBpIF0uaGFuZGxlKENvbXAsIC4uLmFyZ3opO1xuICAgIFxuICAgIGNvbnNvbGUud2FybihcInJlU2NvcGUgOiBVbmtub3duIHR5cGVcIiwgQ29tcClcbiAgICBcbiAgICByZXR1cm4gZmFsc2U7XG4gICAgXG59XG5cbmZ1bmN0aW9uIHJlU2NvcGUoIC4uLmFyZ3ogKSB7XG4gICAgLy8gYXJlIHdlIGRlY29yYXRpbmcgYSBtZW1iZXIgLyB3aXRob3V0IGFyZ3pcbiAgICBpZiAoIGFyZ3pbIDAgXSBpbnN0YW5jZW9mIFNpbXBsZU9iamVjdFByb3RvICYmIGFyZ3pbIDIgXSBpbnN0YW5jZW9mIFNpbXBsZU9iamVjdFByb3RvICYmIGFyZ3pbIDAgXS5oYXNPd25Qcm9wZXJ0eShhcmd6WyAxIF0pICkge1xuICAgICAgICBhcmd6WyAyIF0udmFsdWUgPSBhcHBseVNjb3BhYmxlVHlwZShhcmd6WyAwIF0sIFtdLCB0cnVlLCBmYWxzZSk7XG4gICAgICAgIHJldHVybiBhcmd6WyAwIF07XG4gICAgfVxuICAgIGVsc2UgaWYgKCAhaXNTY29wYWJsZVR5cGUoYXJnelsgMCBdLCB1bmRlZmluZWQsIGZhbHNlKSApIHtcbiAgICAgICAgcmV0dXJuICggLi4uYXJnejIgKSA9PiB7XG4gICAgICAgICAgICAvLyBhcmUgd2UgZGVjb3JhdGluZyBhIG1lbWJlciAvIHdpdGggYXJnelxuICAgICAgICAgICAgaWYgKCBhcmd6MlsgMCBdIGluc3RhbmNlb2YgU2ltcGxlT2JqZWN0UHJvdG8gJiYgYXJnejJbIDIgXSBpbnN0YW5jZW9mIFNpbXBsZU9iamVjdFByb3RvICYmIGFyZ3oyWyAwIF0uaGFzT3duUHJvcGVydHkoYXJnejJbIDEgXSkgKSB7XG4gICAgICAgICAgICAgICAgYXJnejJbIDIgXS52YWx1ZSA9IGFwcGx5U2NvcGFibGVUeXBlKGFyZ3oyWyAwIF0sIGFyZ3osIHRydWUsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXJnejJbIDAgXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVTY29wZShhcmd6MlsgMCBdLCAuLi5hcmd6KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYXBwbHlTY29wYWJsZVR5cGUoYXJnelsgMCBdLCBhcmd6LnNsaWNlKDEpLCBmYWxzZSwgZmFsc2UpO1xufVxuXG5mdW5jdGlvbiBzY29wZVRvU3RhdGUoIC4uLmFyZ3ogKSB7XG4gICAgLy8gYXJlIHdlIGRlY29yYXRpbmcgYSBtZW1iZXIgLyB3aXRob3V0IGFyZ3pcbiAgICBpZiAoIGFyZ3pbIDAgXSBpbnN0YW5jZW9mIFNpbXBsZU9iamVjdFByb3RvICYmIGFyZ3pbIDIgXSBpbnN0YW5jZW9mIFNpbXBsZU9iamVjdFByb3RvICYmIGFyZ3pbIDAgXS5oYXNPd25Qcm9wZXJ0eShhcmd6WyAxIF0pICkge1xuICAgICAgICBhcmd6WyAyIF0udmFsdWUgPSBhcHBseVNjb3BhYmxlVHlwZShhcmd6WyAwIF0sIFtdLCB0cnVlLCB0cnVlKTtcbiAgICAgICAgcmV0dXJuIGFyZ3pbIDAgXTtcbiAgICB9XG4gICAgZWxzZSBpZiAoICFpc1Njb3BhYmxlVHlwZShhcmd6WyAwIF0sIHVuZGVmaW5lZCwgdHJ1ZSkgKSB7XG4gICAgICAgIHJldHVybiAoIC4uLmFyZ3oyICkgPT4ge1xuICAgICAgICAgICAgLy8gYXJlIHdlIGRlY29yYXRpbmcgYSBtZW1iZXIgLyB3aXRoIGFyZ3pcbiAgICAgICAgICAgIGlmICggYXJnejJbIDAgXSBpbnN0YW5jZW9mIFNpbXBsZU9iamVjdFByb3RvICYmIGFyZ3oyWyAyIF0gaW5zdGFuY2VvZiBTaW1wbGVPYmplY3RQcm90byAmJiBhcmd6MlsgMCBdLmhhc093blByb3BlcnR5KGFyZ3oyWyAxIF0pICkge1xuICAgICAgICAgICAgICAgIGFyZ3oyWyAyIF0udmFsdWUgPSBhcHBseVNjb3BhYmxlVHlwZShhcmd6MlsgMCBdLCBhcmd6LCB0cnVlLCB0cnVlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXJnejJbIDAgXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICByZXR1cm4gc2NvcGVUb1N0YXRlKGFyZ3oyWyAwIF0sIC4uLmFyZ3opO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBhcHBseVNjb3BhYmxlVHlwZShhcmd6WyAwIF0sIGFyZ3ouc2xpY2UoMSksIGZhbHNlLCB0cnVlKTtcbn1cblxuLy9cbi8vYWRkU2NvcGFibGVUeXBlKFxuLy8gICAgKCBDb21wICkgPT4gKENvbXAgJiYgQ29tcC5wcm90b3R5cGUgaW5zdGFuY2VvZiBTdG9yZSksXG4vLyAgICBmdW5jdGlvbiByZVNjb3BlKCAuLi5hcmd6ICkge1xuLy8gICAgICAgIGxldCBCYXNlU3RvcmUgICAgPSAoIWFyZ3pbMF0gfHwgYXJnelswXS5wcm90b3R5cGUgaW5zdGFuY2VvZiBTdG9yZSkgJiZcbi8vIGFyZ3ouc2hpZnQoKSwgc2NvcGUgICAgICAgID0gKCFhcmd6WzBdIHx8IGFyZ3pbMF0gaW5zdGFuY2VvZiBTY29wZSB8fCBpcy5mbihhcmd6WzBdKSlcbi8vICYmIGFyZ3ouc2hpZnQoKSwgdXNlICAgICAgICAgID0gKGlzLmFycmF5KGFyZ3pbMF0pKSAmJiBhcmd6LnNoaWZ0KCksIHN0YXRlTWFwICAgICA9XG4vLyAhdXNlICYmICghYXJnelswXSB8fCBhcmd6WzBdIGluc3RhbmNlb2YgU2ltcGxlT2JqZWN0UHJvdG8pICYmIGFyZ3ouc2hpZnQoKSxcbi8vIGluaXRpYWxTdGF0ZSA9IHt9OyAgbGV0IGNvbXBOYW1lID0gQmFzZVN0b3JlLmRpc3BsYXlOYW1lIHx8IEJhc2VTdG9yZS5uYW1lOyAgdXNlID1cbi8vIFsuLi4oQmFzZVN0b3JlLnVzZSB8fCBbXSksIC4uLih1c2UgfHwgW10pXTsgc3RhdGVNYXAgJiZcbi8vIFNjb3BlLnN0YXRlTWFwVG9SZWZMaXN0KHN0YXRlTWFwLCBpbml0aWFsU3RhdGUsIHVzZSk7ICBjbGFzcyBTdGF0ZVNjb3BlZFN0b3JlIGV4dGVuZHNcbi8vIEJhc2VTdG9yZSB7IHN0YXRpYyB1c2UgICAgICAgICA9IHVzZTsgc3RhdGljIGRpc3BsYXlOYW1lID0gXCJzdGF0ZVNjb3BlZChcIiArIGNvbXBOYW1lICtcbi8vIFwiKVwiOyAgY29uc3RydWN0b3IoIC4uLmFyZ3ogKSB7IHN1cGVyKHNjb3BlLCBhcmd6LnNsaWNlKGFyZ3pbMF0gaW5zdGFuY2VvZiBTY29wZSA/IDEgOlxuLy8gMCkpIH0gfSAgcmV0dXJuIFN0YXRlU2NvcGVkU3RvcmU7IH0sIGZhbHNlLCB0cnVlIClcblxuXG5leHBvcnQge1xuICAgIGFkZFNjb3BhYmxlVHlwZSxcbiAgICByZVNjb3BlLFxuICAgIHNjb3BlVG9TdGF0ZVxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbHMvc2NvcGFibGUuanMiXSwic291cmNlUm9vdCI6IiJ9