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
				if (!this._stable) return this.once('stable', function (e) {
					return _this16.onceStableTree(cb);
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
				return this._stable && !this._.unStableChilds;
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
				this._.stabilizerTM && clearTimeout(this._.stabilizerTM);
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
				    refsCount = 0,
				    refs = !cfg.norefs && is.array(this._use) && this._use.reduce(function (map, key) {
					var ref = _this6.$scope.parseRef(key),
					    store = _this6.$stores[ref.storeId];
					if (store && is.rsStore(store) && !store.scopeObj._.isLocalId) refsCount++, map[ref.alias] = ref.path;
	
					return map;
				}, {}),
				    stateKeys = Object.keys(this.data),
				    stateRefs = stateKeys.map(function (k) {
					return _this6.data[k];
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
					data: (this.data && this.data.__proto__ === objProto ? Object.keys(this.data).reduce(function (h, k) {
						return !inRefs[k] && (h[k] = _this6.data[k]), h;
					}, {}) : (is.bool(this.data) || is.number(this.data) || is.string(this.data)) && this.data) || undefined
	
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMDZiZTNlZGFiNWQ2OTYzYzczNmQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9TY29wZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvaXMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaXNcIiIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL0VtaXR0ZXIuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic2hvcnRpZFwiIiwid2VicGFjazovLy8uL3NyYy9TdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvVGFza1NlcXVlbmNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvc2NvcGFibGUuanMiXSwibmFtZXMiOlsiJGdsb2JhbCIsIndpbmRvdyIsImdsb2JhbCIsIlJTIiwiX19fcmVzY29wZSIsImNvbnNvbGUiLCJ3YXJuIiwiU3RvcmUiLCJTY29wZSIsIkNvbnRleHQiLCJyZVNjb3BlIiwic2NvcGVUb1N0YXRlIiwicmVTY29wZVN0YXRlIiwiYWRkU2NvcGFibGVUeXBlIiwic2NvcGVSZWYiLCJtYXAiLCJrZXkiLCJyZXF1aXJlIiwid2Fsa25TZXQiLCJ3YWxrbkdldCIsImtleVdhbGtuU2V0Iiwia2V5V2Fsa25HZXQiLCJFdmVudEVtaXR0ZXIiLCJzaG9ydGlkIiwiX19wcm90b19fcHVzaCIsInRhcmdldCIsImlkIiwicGFyZW50IiwiZm4iLCJwcm90b3R5cGUiLCJfIiwib3BlblNjb3BlcyIsIlNpbXBsZU9iamVjdFByb3RvIiwiY29uc3RydWN0b3IiLCJzY29wZXMiLCJza2V5IiwiaXMiLCJhcnJheSIsInNvcnQiLCJhIiwiYiIsImZpcnN0bmFtZSIsImpvaW4iLCJzbSIsInN0YXRlIiwiX3JlZnMiLCJhY3Rpb25zIiwicGF0aCIsImFwcGxpZXIiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsImNwYXRoIiwicHVzaCIsIkZ1bmN0aW9uIiwiYXMiLCJzdG9yZXNNYXAiLCJ1cHBlclNjb3BlIiwic25hcHNob3QiLCJkYXRhIiwiaW5jcmVtZW50SWQiLCJwZXJzaXN0ZW5jZVRtIiwiYXV0b0Rlc3Ryb3kiLCJyb290RW1pdHRlciIsImJvdW5kZWRBY3Rpb25zIiwia2V5UElEIiwiX2lkIiwiZ2VuZXJhdGUiLCJiYXNlSWQiLCJrZXlJbmRleCIsImlzTG9jYWxJZCIsInJlZ2lzdGVyIiwiaSIsIl9yZXYiLCJzdG9yZXMiLCJfYXV0b0Rlc3Ryb3kiLCJkZWFkIiwiRXJyb3IiLCJzb3VyY2VzIiwiY2hpbGRTY29wZXMiLCJjaGlsZFNjb3Blc0xpc3QiLCJ1blN0YWJsZUNoaWxkcyIsInNlZW5DaGlsZHMiLCJfX3JldGFpbnMiLCJhbGwiLCJfX2xvY2tzIiwiX2JvdW5kZWRBY3Rpb25zIiwidGVzdCIsImluY2x1ZGVzIiwiYmluZCIsIl9saXN0ZW5pbmciLCJfc2NvcGUiLCJfbWl4ZWQiLCJfbWl4ZWRMaXN0IiwiZm9sbG93ZXJzIiwicmV0YWluIiwiX3N0YWJsZSIsIndhaXQiLCJvbiIsIl9wYXJlbnRMaXN0IiwicmVsZWFzZSIsIl9wcm9wYWciLCJfYWRkQ2hpbGQiLCJyZXN0b3JlIiwic2V0VGltZW91dCIsImRpc3Bvc2UiLCJzdG9yZXNMaXN0IiwiX21vdW50IiwiayIsImFyZ3VtZW50cyIsInJlZiIsInNuYXAiLCJwYXJzZVJlZiIsInN0b3JlSWQiLCJyZWR1Y2VSaWdodCIsIm1vdW50ZWQiLCJjdHgiLCJzdG9yZSIsInRhc2tRdWV1ZSIsInJzU3RvcmVDbGFzcyIsIm5hbWUiLCJsZW5ndGgiLCJzaGlmdCIsInJzU2NvcGVDbGFzcyIsIiRwYXJlbnQiLCJtb3VudCIsInNsaWNlIiwicnNTdG9yZSIsInVuZGVmaW5lZCIsInNldFN0YXRlIiwiX3dhdGNoU3RvcmUiLCJpc1N0YWJsZSIsInByb3BhZyIsInRhcmdldEN0eCIsImxpc3RzIiwicmVsaW5rIiwiX19vcmlnaW4iLCJzaW5nbGV0b24iLCJzcmNDdHgiLCJleHRlcm5hbCIsImZvcmNlIiwibGN0eCIsImluZm8iLCJ0bXAiLCJkZXN0cm95IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwiZ2V0Iiwic2V0IiwidiIsImFjdGl2ZUFjdGlvbnMiLCJyc1Njb3BlIiwiYWN0IiwiaGFzT3duUHJvcGVydHkiLCJfX3RhcmdldFN0b3JlcyIsImRpc3BhdGNoIiwib2JqIiwic2V0SW5pdGlhbCIsInJldk1hcCIsImxhc3RSZXZzIiwicmVmS2V5cyIsInN0cmluZyIsInJlZHVjZSIsInJldnMiLCJyZXYiLCJyZWZzIiwicmV0YWluU3RvcmVzIiwiZ2V0VXBkYXRlcyIsImRpc3Bvc2VTdG9yZXMiLCJzcGxpY2UiLCJ0byIsInJlZkxpc3QiLCJtaXhlZENXVW5tb3VudCIsInVuTW91bnRLZXkiLCJpc1JlYWN0Q29tcG9uZW50IiwidW5CaW5kIiwiYWxpYXMiLCJyZXRyaWV2ZSIsInNwbGl0IiwicmV0cmlldmVTdG9yZSIsInN0b3Jlc1Jldk1hcCIsImxvY2FsIiwidXBkYXRlZCIsImdldFN0b3Jlc1JldnMiLCJvdXRwdXQiLCJfZ2V0UmV2TWFwIiwiY2hpbGRzIiwiX2dldEFsbENoaWxkcyIsImNmZyIsInBhcmVudEFsaWFzIiwic2lkIiwic2VyaWFsaXplX2V4IiwiZXhjbHVkZSIsIndpdGhDaGlsZHMiLCJ3aXRoUGFyZW50cyIsIndpdGhNaXhlZCIsIm5vcmVmcyIsImFsaWFzZXMiLCJzZXJpYWxpemUiLCJ3aXRoQ2hpbGQiLCJoIiwiYm9vbCIsInRha2VTbmFwc2hvdEJ5S2V5Iiwic3RhcnRzV2l0aCIsInN1YnN0ciIsImdldFNuYXBzaG90QnlLZXkiLCJkZWxldGVTbmFwc2hvdEJ5S2V5IiwicmVwbGFjZSIsInBTdGF0ZSIsIl9yZWYiLCJhY3Rpb24iLCJhcmd6Iiwic3RhY2siLCJiQWN0cyIsInRyaWdnZXIiLCJjYiIsIm9uY2UiLCJ0aGVuIiwib25jZVN0YWJsZVRyZWUiLCJyZWFzb24iLCJlbWl0IiwiZXJyb3IiLCJzdGFiaWxpemVyVE0iLCJjbGVhclRpbWVvdXQiLCJwcm9wYWdUTSIsInJlbWFwcyIsIndhc1N0YWJsZSIsImluZGV4T2YiLCJ1biIsImRlc3Ryb3lUTSIsInJlbW92ZUxpc3RlbmVyIiwiZm9sbG93ZXIiLCJfcm1DaGlsZCIsImlzUHJvdG90eXBlT2YiLCJ2YWx1ZSIsImlzS2V5IiwiZmlsdGVyIiwiRW1pdHRlciIsIl9ldmVudHMiLCJldnQiLCJUYXNrU2VxdWVuY2VyIiwib2JqUHJvdG8iLCJnZXRQcm90b3R5cGVPZiIsIl9zdGF0aWMiLCJzY29wZSIsImdldFNjb3BlIiwic3RhdGljU2NvcGUiLCJ3YXRjaHMiLCJ1c2UiLCJhcHBseSIsImluaXRpYWxTdGF0ZSIsImRlZmF1bHRTdGF0ZSIsImFwcGxpZWQiLCJfdWlkIiwiX29uU3RhYmlsaXplIiwiX3BlcnNpc3RlbmNlVG0iLCJfY2ZnIiwic2NvcGVPYmoiLCIkc2NvcGUiLCIkc3RvcmVzIiwiJGFjdGlvbnMiLCIkZGlzcGF0Y2giLCJfcmV2cyIsIl9yZXF1aXJlIiwiX3NvdXJjZXMiLCJfdXNlIiwibWF0Y2giLCJyZWYyIiwiX2ZvbGxvd2VycyIsIl9jaGFuZ2VzU1ciLCJfYWZ0ZXJDb25zdHJ1Y3RvciIsImluaXRpYWxEYXRhIiwic2hvdWxkQXBwbHkiLCJtYW5hZ2VkIiwibkRhdGFzIiwiciIsImNEYXRhcyIsImlzQ29tcGxldGUiLCJmb2xsb3ciLCJjYWxsIiwiY2hhbmdlcyIsInJlZmluZSIsIl9fcHJvdG9fXyIsIl9zdGFiaWxpemVyIiwicHVzaFRhc2siLCJucyIsImRvV2FpdCIsIm9yaWdpbiIsImluaXRpYWxPdXRwdXRzIiwicyIsImhhc0RhdGFDaGFuZ2UiLCJzdGFibGUiLCJuZXh0U3RhdGUiLCJfbmV4dFN0YXRlIiwibmV4dERhdGEiLCJzeW5jIiwiY2hhbmdlIiwicHVzaFN0YXRlIiwic3RhYmlsaXplIiwic0lkIiwicmVmc0NvdW50Iiwic3RhdGVLZXlzIiwic3RhdGVSZWZzIiwiaW5SZWZzQ291bnQiLCJpblJlZnMiLCJudW1iZXIiLCJpbW1lZGlhdGUiLCJwcmV2aW91cyIsIm1lIiwic2hvdWxkUHJvcGFnIiwiX2Rlc3Ryb3lUTSIsInJlbW92ZUFsbExpc3RlbmVycyIsImNTdG9yZSIsInRhcmdldFJldnMiLCJ0YXJnZXRTY29wZSIsIl9rZXkiLCJkZWZhdWx0TmFtZSIsIm8iLCJjdXJXZWlnaHQiLCJtYXhXZWlnaHQiLCJtaW5XZWlnaHQiLCJ0YXNrQ291bnQiLCJkZVN5bmMiLCJkZVN5bmNNYXhUYXNrcyIsInRhc2siLCJpc1J1bm5pbmciLCJlcnJvckNhdGNoZXIiLCJsYXN0RXJyb3IiLCJkaXNhYmxlIiwiaGFuZGxlRXJyb3IiLCJydW5Ob3ciLCJlbmFibGUiLCJhZGRFdmVudExpc3RlbmVyIiwicHJvY2VzcyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJydW4iLCJmcm9tIiwiRGF0ZSIsIm5vdyIsIndlaWdodCIsIk1hdGgiLCJtYXgiLCJtaW4iLCJzY29wYWJsZXMiLCJoYW5kbGUiLCJtZW1iZXIiLCJzdGF0ZVNjb3BlIiwiaXNTY29wYWJsZVR5cGUiLCJDb21wIiwiYXBwbHlTY29wYWJsZVR5cGUiLCJhcmd6MiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNUQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUEvQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTJCQSxLQUFJQSxVQUFZLE9BQU9DLE1BQVAsS0FBa0IsV0FBcEIsR0FBb0NBLE1BQXBDLEdBQTZDQyxNQUEzRDs7QUFNQSxLQUFNQyxLQUFLSCxRQUFRSSxVQUFSLElBQXNCLEVBQWpDO0FBQ0EsS0FBS0os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Qm1ILGtCQUFrQjFJLEtBQU0sQ0FBTixDQUFsQixFQUE2QixFQUE3QixFQUFpQyxJQUFqQyxFQUF1QyxJQUF2QyxDQUFsQjtBQUNBLGdCQUFPQSxLQUFNLENBQU4sQ0FBUDtBQUNILE1BSEQsTUFJSyxJQUFLLENBQUN3SSxlQUFleEksS0FBTSxDQUFOLENBQWYsRUFBMEJwRixTQUExQixFQUFxQyxJQUFyQyxDQUFOLEVBQW1EO0FBQ3BELGdCQUFPLFlBQWdCO0FBQUEsZ0RBQVgrTixLQUFXO0FBQVhBLHNCQUFXO0FBQUE7O0FBQ25CO0FBQ0EsaUJBQUtBLE1BQU8sQ0FBUCxhQUFzQi9ULGlCQUF0QixJQUEyQytULE1BQU8sQ0FBUCxhQUFzQi9ULGlCQUFqRSxJQUFzRitULE1BQU8sQ0FBUCxFQUFXck0sY0FBWCxDQUEwQnFNLE1BQU8sQ0FBUCxDQUExQixDQUEzRixFQUFtSTtBQUMvSEEsdUJBQU8sQ0FBUCxFQUFXcEgsS0FBWCxHQUFtQm1ILGtCQUFrQkMsTUFBTyxDQUFQLENBQWxCLEVBQThCM0ksSUFBOUIsRUFBb0MsSUFBcEMsRUFBMEMsSUFBMUMsQ0FBbkI7QUFDQSx3QkFBTzJJLE1BQU8sQ0FBUCxDQUFQO0FBQ0gsY0FIRCxNQUtJLE9BQU9wViwrQkFBYW9WLE1BQU8sQ0FBUCxDQUFiLFNBQTRCM0ksSUFBNUIsRUFBUDtBQUNQLFVBUkQ7QUFTSDtBQUNELFlBQU8wSSxrQkFBa0IxSSxLQUFNLENBQU4sQ0FBbEIsRUFBNkJBLEtBQUt0RixLQUFMLENBQVcsQ0FBWCxDQUE3QixFQUE0QyxLQUE1QyxFQUFtRCxJQUFuRCxDQUFQO0FBQ0g7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O1NBSUlqSCxlLEdBQUFBLGU7U0FDQUgsTyxHQUFBQSxPO1NBQ0FDLFksR0FBQUEsWSIsImZpbGUiOiIuLi8uLi9kaXN0L1JlU2NvcGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMDZiZTNlZGFiNWQ2OTYzYzczNmQiLCIvKlxuICogQ29weXJpZ2h0IChjKSAgMjAxOCBXaXNlIFdpbGQgV2ViIC5cbiAqXG4gKiAgTUlUIExpY2Vuc2VcbiAqXG4gKiAgUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqICBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiAgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuICogIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqICBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqICBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqICBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiAgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqICBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuICogIFNPRlRXQVJFLlxuICpcbiAqIEBhdXRob3IgOiBOYXRoYW5hZWwgQnJhdW5cbiAqIEBjb250YWN0IDogY2FpcGlsYWJzQGdtYWlsLmNvbVxuICovXG5cbmxldCAkZ2xvYmFsID0gKCB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyApID8gd2luZG93IDogZ2xvYmFsO1xuXG5pbXBvcnQgU2NvcGUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gXCIuL1Njb3BlXCI7XG5pbXBvcnQgU3RvcmUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gXCIuL1N0b3JlXCI7XG5pbXBvcnQgeyBhZGRTY29wYWJsZVR5cGUsIHJlU2NvcGUsIHNjb3BlVG9TdGF0ZSB9IGZyb20gXCIuL3V0aWxzL3Njb3BhYmxlXCI7XG5cbmNvbnN0IFJTID0gJGdsb2JhbC5fX19yZXNjb3BlIHx8IHt9O1xuaWYgKCAkZ2xvYmFsLl9fX3Jlc2NvcGUgKSB7XG4gICAgY29uc29sZS53YXJuKFwiUmVTY29wZSBpcyBkZWZpbmVkIG11bHRpcGxlIHRpbWVzICEhIFxcbkNoZWNrIHlvdSdyZSBwYWNrYWdpbmdcIilcbn1cbmVsc2Uge1xuICAgIFxuICAgICRnbG9iYWwuX19fcmVzY29wZSA9IFJTO1xuICAgIFNjb3BlLlN0b3JlICAgICAgICA9IFN0b3JlO1xuICAgIC8vUlMuY29uc29sZSAgICAgICAgID0gY29uc29sZTtcbiAgICBSUy5TY29wZSAgICAgICAgICAgPSBTY29wZTtcbiAgICBSUy5Db250ZXh0ICAgICAgICAgPSBTY29wZTtcbiAgICBSUy5TdG9yZSAgICAgICAgICAgPSBTdG9yZTtcbiAgICBSUy5yZVNjb3BlICAgICAgICAgPSByZVNjb3BlO1xuICAgIFJTLnNjb3BlVG9TdGF0ZSAgICA9IHNjb3BlVG9TdGF0ZTtcbiAgICBSUy5yZVNjb3BlU3RhdGUgICAgPSBzY29wZVRvU3RhdGU7XG4gICAgUlMuYWRkU2NvcGFibGVUeXBlID0gYWRkU2NvcGFibGVUeXBlO1xuICAgIFJTLnNjb3BlUmVmICAgICAgICA9XG4gICAgICAgIGZ1bmN0aW9uIHNjb3BlUmVmKCBtYXAsIGtleSApIHtcbiAgICAgICAgICAgIG1hcFsga2V5IF0gPSBuZXcgU2NvcGUuc2NvcGVSZWYobWFwWyBrZXkgXSk7XG4gICAgICAgICAgICByZXR1cm4gbWFwO1xuICAgICAgICB9O1xuICAgIFxufVxuZXhwb3J0IGRlZmF1bHQgUlM7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LmpzIiwiLypcbiAqIENvcHlyaWdodCAoYykgIDIwMTggV2lzZSBXaWxkIFdlYiAuXG4gKlxuICogIE1JVCBMaWNlbnNlXG4gKlxuICogIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqICBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiAgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqICBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqICBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqICBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcbiAqICBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqICBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiAgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiAgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiAgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiAgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcbiAqICBTT0ZUV0FSRS5cbiAqXG4gKiBAYXV0aG9yIDogTmF0aGFuYWVsIEJyYXVuXG4gKiBAY29udGFjdCA6IGNhaXBpbGFic0BnbWFpbC5jb21cbiAqL1xuXG5cbnZhciBpcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL3V0aWxzL2lzJyksXG4gICAgeyB3YWxrblNldCwgd2Fsa25HZXQsIGtleVdhbGtuU2V0LCBrZXlXYWxrbkdldCB9ID0gcmVxdWlyZSgnLi91dGlscy91dGlscycpLFxuICAgIEV2ZW50RW1pdHRlciAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vdXRpbHMvRW1pdHRlcicpLFxuICAgIHNob3J0aWQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJ3Nob3J0aWQnKVxuXHQsIF9fcHJvdG9fX3B1c2ggICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSAoIHRhcmdldCwgaWQsIHBhcmVudCApID0+IHtcblx0ICAgIGxldCBmbiAgICAgICA9IGZ1bmN0aW9uICgpIHtcblx0ICAgIH07XG5cdCAgICBmbi5wcm90b3R5cGUgPSBwYXJlbnQgPyBuZXcgcGFyZW50Ll9baWRdKCkgOiB0YXJnZXRbaWRdIHx8IHt9O1xuXHQgICAgdGFyZ2V0W2lkXSAgID0gbmV3IGZuKCk7XG5cdCAgICB0YXJnZXQuX1tpZF0gPSBmbjtcbiAgICB9LFxuXHRvcGVuU2NvcGVzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSB7fSxcblx0U2ltcGxlT2JqZWN0UHJvdG8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID0gKHt9KS5jb25zdHJ1Y3RvcjtcblxuLyoqXG4gKiBCYXNlIFNjb3BlIG9iamVjdFxuICovXG5jbGFzcyBTY29wZSBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG5cdHN0YXRpYyBnZXRTY29wZSggc2NvcGVzICkge1xuXHRcdGxldCBza2V5ID0gaXMuYXJyYXkoc2NvcGVzKSA/IHNjb3Blcy5zb3J0KCggYSwgYiApID0+IHtcblx0XHRcdGlmICggYS5maXJzdG5hbWUgPCBiLmZpcnN0bmFtZSApIHJldHVybiAtMTtcblx0XHRcdGlmICggYS5maXJzdG5hbWUgPiBiLmZpcnN0bmFtZSApIHJldHVybiAxO1xuXHRcdFx0cmV0dXJuIDA7XG5cdFx0fSkuam9pbignKycpIDogc2NvcGVzO1xuXHRcdHJldHVybiBvcGVuU2NvcGVzW3NrZXldID0gb3BlblNjb3Blc1tza2V5XSB8fCBuZXcgU2NvcGUoe30sIHsgaWQ6IHNrZXkgfSk7XG5cdH07XG5cdFxuXHRcblx0LyoqXG5cdCAqIGdldCBhIHBhcnNlZCByZWZlcmVuY2UgbGlzdCBmcm9tIHN0YXRlTWFwXG5cdCAqIEBwYXJhbSBfcmVmXG5cdCAqIEByZXR1cm5zIHt7c3RvcmVJZCwgcGF0aCwgYWxpYXM6ICosIHJlZjogKn19XG5cdCAqL1xuXHRzdGF0aWMgc3RhdGVNYXBUb1JlZkxpc3QoIHNtLCBzdGF0ZSA9IHt9LCBfcmVmcyA9IFtdLCBhY3Rpb25zID0ge30sIHBhdGggPSBcIlwiICkge1xuXHRcdGxldCBhcHBsaWVyO1xuXHRcdE9iamVjdC5rZXlzKHNtKS5mb3JFYWNoKFxuXHRcdFx0a2V5ID0+IHtcblx0XHRcdFx0bGV0IGNwYXRoID0gcGF0aCA/IHBhdGggKyAnLicgKyBrZXkgOiBrZXk7XG5cdFx0XHRcdFxuXHRcdFx0XHRzbVtrZXldIGluc3RhbmNlb2YgU2NvcGUuc2NvcGVSZWZcblx0XHRcdFx0PyBfcmVmcy5wdXNoKHNtW2tleV0ucGF0aCArICc6JyArIGNwYXRoKVxuXHRcdFx0XHQ6IChzbVtrZXldICYmIHNtW2tleV0gaW5zdGFuY2VvZiBGdW5jdGlvbilcblx0XHRcdFx0ICA/IGtleSA9PSBcIiRhcHBseVwiXG5cdFx0XHRcdCAgICA/IGFwcGxpZXIgPSBzbVtrZXldXG5cdFx0XHRcdCAgICA6IGFjdGlvbnNba2V5XSA9IHNtW2tleV1cblx0XHRcdFx0ICA6IChzbVtrZXldICYmIHNtW2tleV0ucHJvdG90eXBlIGluc3RhbmNlb2YgU2NvcGUuU3RvcmUpXG5cdFx0XHRcdCAgICA/IF9yZWZzLnB1c2goc21ba2V5XS5hcyhjcGF0aCkpXG5cdFx0XHRcdCAgICA6IHN0YXRlW2NwYXRoXSA9IHNtW2tleV1cblx0XHRcdFx0Ly86IHRoaXMuc3RhdGVNYXBUb1JlZkxpc3Qoc21ba2V5XSwgX3JlZnMsIHBhdGggKyAnLicgKyBrZXkpXG5cdFx0XHR9XG5cdFx0KVxuXHRcdHJldHVybiBhcHBsaWVyO1xuXHR9XG5cdFxuXHRzdGF0aWMgcGVyc2lzdGVuY2VUbSA9IDE7Ly8gaWYgPiAwLCB3aWxsIHdhaXQgJ3BlcnNpc3RlbmNlVG0nIG1zIGJlZm9yZSBkZXN0cm95XG5cdC8vIHdoZW5cblx0Ly8gZGlzcG9zZSByZWFjaCAwXG5cdHN0YXRpYyBTdG9yZSAgICA9IG51bGw7XG5cdHN0YXRpYyBzY29wZVJlZiA9IGZ1bmN0aW9uIHNjb3BlUmVmKCBwYXRoICkge1xuXHRcdHRoaXMucGF0aCA9IHBhdGg7XG5cdH07XG5cdHN0YXRpYyBzY29wZXMgICA9IG9wZW5TY29wZXM7Ly8gYWxsIGFjdGl2ZSBzY29wZXNcblx0XG5cdFxuXHQvKipcblx0ICogSW5pdCBhIFJlU2NvcGUgc2NvcGVcblx0ICpcblx0ICogQHBhcmFtIHN0b3Jlc01hcCB7T2JqZWN0fSBPYmplY3Qgd2l0aCB0aGUgaW5pdGlhbCBzdG9yZXMgZGVmaW5pdGlvbiAvIGluc3RhbmNlc1xuXHQgKiBAcGFyYW0gY29uZmlnIHtPYmplY3R9IFNjb3BlIGNvbmZpZ1xuXHQgKiB7XG5cdCAqICBwYXJlbnQge3Njb3BlfSBAb3B0aW9uYWwgcGFyZW50IHNjb3BlXG5cdCAqXG5cdCAqICBpZCB7c3RyaW5nfSBAb3B0aW9uYWwgaWQgKCBpZiB0aGlzIGlkIGV4aXN0IHN0b3Jlc01hcCB3aWxsIGJlIG1lcmdlIG9uIHRoZSAnaWQnXG5cdCAqICAgICBzY29wZSkga2V5IHtzdHJpbmd9IEBvcHRpb25hbCBrZXkgb2YgdGhlIHNjb3BlICggaWYgbm8gaWQgaXMgc2V0LCB0aGUgc2NvcGUgaWRcblx0ICogICAgIHdpbGwgYmUgKHBhcmVudC5pZCsnPicra2V5KSBpbmNyZW1lbnRJZCB7Ym9vbH0gQG9wdGlvbmFsIHRydWUgdG8gYWRkIGEgc3VmZml4XG5cdCAqICAgICBpZCwgaWYgdGhlIHByb3ZpZGVkIGtleSBvciBpZCBnbG9iYWxseSBleGlzdFxuXHQgKlxuXHQgKiAgc3RhdGUge09iamVjdH0gQG9wdGlvbmFsIGluaXRpYWwgc3RhdGUgYnkgc3RvcmUgYWxpYXNcblx0ICogIGRhdGEge09iamVjdH0gQG9wdGlvbmFsIGluaXRpYWwgZGF0YSBieSBzdG9yZSBhbGlhc1xuXHQgKlxuXHQgKiAgcm9vdEVtaXR0ZXIge2Jvb2x9IEBvcHRpb25hbCB0cnVlIHRvIG5vdCBiZWluZyBkZXN0YWJpbGl6ZWQgYnkgcGFyZW50XG5cdCAqICBib3VuZGVkQWN0aW9ucyB7YXJyYXkgfCByZWdleHB9IEBvcHRpb25hbCBsaXN0IG9yIHJlZ2V4cCBvZiBhY3Rpb25zIG5vdFxuXHQgKiAgICAgcHJvcGFnYXRlZCB0byB0aGUgcGFyZW50XG5cdCAqXG5cdCAqICBwZXJzaXN0ZW5jZVRtIHtudW1iZXIpIGlmID4gMCwgd2lsbCB3YWl0ICdwZXJzaXN0ZW5jZVRtJyBtcyBiZWZvcmUgZGVzdHJveSB3aGVuXG5cdCAqICAgICBkaXNwb3NlIHJlYWNoIDAgYXV0b0Rlc3Ryb3kgIHtib29sfSB3aWxsIHRyaWdnZXIgcmV0YWluICYgZGlzcG9zZSBhZnRlciBzdGFydFxuXHQgKiAgfVxuXHQgKiBAcmV0dXJucyB7U2NvcGV9XG5cdCAqL1xuXHRjb25zdHJ1Y3Rvciggc3RvcmVzTWFwLCB7IHBhcmVudCwgdXBwZXJTY29wZSwga2V5LCBpZCwgc25hcHNob3QsIHN0YXRlLCBkYXRhLCBpbmNyZW1lbnRJZCA9ICEha2V5LCBwZXJzaXN0ZW5jZVRtLCBhdXRvRGVzdHJveSwgcm9vdEVtaXR0ZXIsIGJvdW5kZWRBY3Rpb25zIH0gPSB7fSApIHtcblx0XHRzdXBlcigpO1xuXHRcdHZhciBfID0ge1xuXHRcdFx0a2V5UElEOiAodXBwZXJTY29wZSAmJiB1cHBlclNjb3BlLl9pZCB8fCBwYXJlbnQgJiYgcGFyZW50Ll9pZCB8fCBzaG9ydGlkLmdlbmVyYXRlKCkpLFxuXHRcdFx0a2V5LFxuXHRcdFx0aW5jcmVtZW50SWQsXG5cdFx0XHRiYXNlSWQ6IGlkXG5cdFx0fSwga2V5SW5kZXg7XG5cdFx0XG5cdFx0aWQgPSBpZCB8fCBrZXkgJiYgKF8ua2V5UElEICsgJz4nICsga2V5KTtcblx0XHRcblx0XHRfLmlzTG9jYWxJZCA9ICFpZDtcblx0XHRcblx0XHQvL2lmICggcGFyZW50ICYmIGtleSApIHtcblx0XHQvLyAgICBrZXlJbmRleCA9IHBhcmVudC5fLmNoaWxkU2NvcGVzLmZpbmQoY3R4PT4oY3R4Ll9pZD09aWQpKTtcblx0XHQvLyAgICBpZiAoIGtleUluZGV4ID09IC0xICkga2V5SW5kZXggPSBwYXJlbnQuXy5zZWVuQ2hpbGRzO1xuXHRcdC8vICAgIGtleUluZGV4Kys7XG5cdFx0Ly8gICAgaWYgKCBrZXlJbmRleCApXG5cdFx0Ly8gICAgICAgIGlkID0gaWQgKyAnWycgKyBrZXlJbmRleCArICddJztcblx0XHQvL31cblx0XHRcblx0XHRpZCA9IGlkIHx8IChcIl9fX19fXCIgKyBzaG9ydGlkLmdlbmVyYXRlKCkpO1xuXHRcdFxuXHRcdFxuXHRcdGlmICggb3BlblNjb3Blc1tpZF0gJiYgIWluY3JlbWVudElkICkgey8vIG92ZXJ3cml0ZSBleGlzdGluZyBzY29wZVxuXHRcdFx0dGhpcy5faWQgPSBpZDtcblx0XHRcdG9wZW5TY29wZXNbaWRdLnJlZ2lzdGVyKHN0b3Jlc01hcCk7XG5cdFx0XHRyZXR1cm4gb3BlblNjb3Blc1tpZF1cblx0XHR9XG5cdFx0ZWxzZSBpZiAoIG9wZW5TY29wZXNbaWRdICYmIGluY3JlbWVudElkICkgey8vIGdlbmVyYXRlIGtleSBpZFxuXHRcdFx0bGV0IGkgPSAtMTtcblx0XHRcdHdoaWxlICggb3BlblNjb3Blc1tpZCArICdbJyArICgrK2kpICsgJ10nXSApIDtcblx0XHRcdGlkID0gaWQgKyAnWycgKyBpICsgJ10nO1xuXHRcdH1cblx0XHRcblx0XHR0aGlzLl9pZCAgICAgICAgPSBpZDtcblx0XHR0aGlzLl9yZXYgICAgICAgPSAwO1xuXHRcdG9wZW5TY29wZXNbaWRdICA9IHRoaXM7XG5cdFx0Xy5wZXJzaXN0ZW5jZVRtID0gcGVyc2lzdGVuY2VUbSB8fCB0aGlzLmNvbnN0cnVjdG9yLnBlcnNpc3RlbmNlVG07XG5cdFx0XG5cdFx0dGhpcy5hY3Rpb25zID0ge307XG5cdFx0dGhpcy5zdG9yZXMgID0ge307XG5cdFx0dGhpcy5zdGF0ZSAgID0ge307XG5cdFx0dGhpcy5kYXRhICAgID0ge307XG5cdFx0XG5cdFx0dGhpcy5wYXJlbnQgICAgICAgPSBwYXJlbnQ7XG5cdFx0dGhpcy5fICAgICAgICAgICAgPSBfO1xuXHRcdHRoaXMuX2F1dG9EZXN0cm95ID0gYXV0b0Rlc3Ryb3k7XG5cdFx0XG5cdFx0aWYgKCBwYXJlbnQgJiYgcGFyZW50LmRlYWQgKVxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiQ2FuJ3QgdXNlIGEgZGVhZCBzY29wZSBhcyBwYXJlbnQgIVwiKTtcblx0XHRcblx0XHRfX3Byb3RvX19wdXNoKHRoaXMsICdhY3Rpb25zJywgcGFyZW50KTtcblx0XHRfX3Byb3RvX19wdXNoKHRoaXMsICdzdG9yZXMnLCBwYXJlbnQpO1xuXHRcdF9fcHJvdG9fX3B1c2godGhpcywgJ3N0YXRlJywgcGFyZW50KTtcblx0XHRfX3Byb3RvX19wdXNoKHRoaXMsICdkYXRhJywgcGFyZW50KTtcblx0XHRcblx0XHR0aGlzLnNvdXJjZXMgICAgICA9IFtdO1xuXHRcdF8uY2hpbGRTY29wZXMgICAgID0gW107XG5cdFx0Xy5jaGlsZFNjb3Blc0xpc3QgPSBbXTtcblx0XHRfLnVuU3RhYmxlQ2hpbGRzICA9IDA7XG5cdFx0Xy5zZWVuQ2hpbGRzICAgICAgPSAwO1xuXHRcdFxuXHRcdHRoaXMuX19yZXRhaW5zID0geyBhbGw6IDAgfTtcblx0XHR0aGlzLl9fbG9ja3MgICA9IHsgYWxsOiAxIH07XG5cdFx0XG5cdFx0Ly9fLnNuYXBzaG90ICAgICAgICA9IHNuYXBzaG90O1xuXHRcdC8vXy5zbmFwc2hvdCAgICAgICAgPSBzbmFwc2hvdDtcblx0XHRfLl9ib3VuZGVkQWN0aW9ucyA9IGlzLmFycmF5KGJvdW5kZWRBY3Rpb25zKVxuXHRcdCAgICAgICAgICAgICAgICAgICAgPyB7IHRlc3Q6IGJvdW5kZWRBY3Rpb25zLmluY2x1ZGVzLmJpbmQoYm91bmRlZEFjdGlvbnMpIH1cblx0XHQgICAgICAgICAgICAgICAgICAgIDogYm91bmRlZEFjdGlvbnM7XG5cdFx0Xy5fbGlzdGVuaW5nICAgICAgPSB7fTtcblx0XHRfLl9zY29wZSAgICAgICAgICA9IHt9O1xuXHRcdF8uX21peGVkICAgICAgICAgID0gW107XG5cdFx0Xy5fbWl4ZWRMaXN0ICAgICAgPSBbXTtcblx0XHRfLmZvbGxvd2VycyAgICAgICA9IFtdO1xuXHRcdGlmICggcGFyZW50ICkge1xuXHRcdFx0cGFyZW50LnJldGFpbihcImlzTXlQYXJlbnRcIik7XG5cdFx0XHRpZiAoICFyb290RW1pdHRlciApIHtcblx0XHRcdFx0IXBhcmVudC5fc3RhYmxlICYmIHRoaXMud2FpdChcIndhaXRpbmdQYXJlbnRcIik7XG5cdFx0XHRcdHBhcmVudC5vbihfLl9wYXJlbnRMaXN0ID0ge1xuXHRcdFx0XHRcdCdzdGFibGUnICA6IHMgPT4gdGhpcy5yZWxlYXNlKFwid2FpdGluZ1BhcmVudFwiKSxcblx0XHRcdFx0XHQndW5zdGFibGUnOiBzID0+IHRoaXMud2FpdChcIndhaXRpbmdQYXJlbnRcIiksXG5cdFx0XHRcdFx0J3VwZGF0ZScgIDogcyA9PiB0aGlzLl9wcm9wYWcoKVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHRwYXJlbnQub24oXy5fcGFyZW50TGlzdCA9IHtcblx0XHRcdFx0XHQndXBkYXRlJzogcyA9PiB0aGlzLl9wcm9wYWcoKVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHRcdC8vIHRoaXMucmVnaXN0ZXIocGFyZW50Ll9fc2NvcGUsIHN0YXRlLCBkYXRhKTtcblx0XHR9XG5cdFx0XG5cdFx0XG5cdFx0dGhpcy5yZWdpc3RlcihzdG9yZXNNYXAsIHN0YXRlLCBkYXRhKTtcblx0XHR0aGlzLl9fbG9ja3MuYWxsLS07XG5cdFx0dGhpcy5fc3RhYmxlID0gIXRoaXMuX19sb2Nrcy5hbGw7XG5cdFx0XG5cdFx0aWYgKCBwYXJlbnQgKSB7XG5cdFx0XHRwYXJlbnQuX2FkZENoaWxkKHRoaXMpO1xuXHRcdH1cblx0XHRcblx0XHR0aGlzLnJlc3RvcmUoc25hcHNob3QpO1xuXHRcdFxuXHRcdGlmICggYXV0b0Rlc3Ryb3kgKVxuXHRcdFx0c2V0VGltZW91dChcblx0XHRcdFx0dG0gPT4ge1xuXHRcdFx0XHRcdHRoaXMucmV0YWluKFwiYXV0b0Rlc3Ryb3lcIik7XG5cdFx0XHRcdFx0dGhpcy5kaXNwb3NlKFwiYXV0b0Rlc3Ryb3lcIik7XG5cdFx0XHRcdH1cblx0XHRcdClcblx0XHRcblx0fVxuXHRcblx0LyoqXG5cdCAqXG5cdCAqIE1vdW50IHRoZSBzdG9yZXMgaW4gc3RvcmVzTGlzdCwgaW4gdGhpcyBzY29wZSBvciBpbiBpdHMgcGFyZW50cyBvciBtaXhlZCBzY29wZXNcblx0ICpcblx0ICogQHBhcmFtIHN0b3Jlc0xpc3Qge3N0cmluZ3xzdG9yZVJlZn0gU3RvcmUgbmFtZSwgQXJyYXkgb2YgU3RvcmUgbmFtZXMsIG9yIFJlc2NvcGVcblx0ICogICAgIHN0b3JlIHJlZiBmcm9tIFN0b3JlOjphcyBvciBTdG9yZTphc1xuXHQgKiBAcGFyYW0gc3RhdGVcblx0ICogQHBhcmFtIGRhdGFcblx0ICogQHJldHVybnMge1Njb3BlfVxuXHQgKi9cblx0bW91bnQoIHN0b3Jlc0xpc3QsIHNuYXBzaG90LCBzdGF0ZSwgZGF0YSApIHtcblx0XHRpZiAoIGlzLmFycmF5KHN0b3Jlc0xpc3QpICkge1xuXHRcdFx0c3RvcmVzTGlzdC5mb3JFYWNoKGsgPT4gdGhpcy5fbW91bnQoaywgc25hcHNob3QsIHN0YXRlLCBkYXRhKSk7XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0dGhpcy5fbW91bnQoLi4uYXJndW1lbnRzKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblx0XG5cdF9tb3VudCggaWQsIHNuYXBzaG90LCBzdGF0ZSwgZGF0YSApIHtcblx0XHRsZXQgcmVmLCBzbmFwO1xuXHRcdFxuXHRcdHJlZiA9IHRoaXMucGFyc2VSZWYoaWQpXG5cdFx0XG5cdFx0aWYgKCBpZCA9PSBcIiRwYXJlbnRcIiApIHJldHVybjtcblx0XHRpZiAoICF0aGlzLl8uX3Njb3BlW3JlZi5zdG9yZUlkXSApIHsvL2FzayBtaXhlZCB8fCBwYXJlbnRcblx0XHRcdGlmICggdGhpcy5fLl9taXhlZC5yZWR1Y2VSaWdodCgoIG1vdW50ZWQsIGN0eCApID0+IChtb3VudGVkIHx8IGN0eC5fbW91bnQoaWQsIHNuYXBzaG90LCBzdGF0ZSwgZGF0YSkpLCBmYWxzZSkgfHxcblx0XHRcdFx0IXRoaXMucGFyZW50IClcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0cmV0dXJuIHRoaXMucGFyZW50Ll9tb3VudCguLi5hcmd1bWVudHMpO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdGxldCBzdG9yZSA9IHRoaXMuXy5fc2NvcGVbcmVmLnN0b3JlSWRdLCB0YXNrUXVldWUgPSBbXTtcblx0XHRcdGlmICggaXMucnNTdG9yZUNsYXNzKHN0b3JlKSApIHtcblx0XHRcdFx0dGhpcy5fLl9zY29wZVtyZWYuc3RvcmVJZF0gPSBuZXcgc3RvcmUodGhpcywge1xuXHRcdFx0XHRcdC8vc25hcHNob3QsXG5cdFx0XHRcdFx0bmFtZTogcmVmLnN0b3JlSWQsXG5cdFx0XHRcdFx0c3RhdGUsXG5cdFx0XHRcdFx0ZGF0YVxuXHRcdFx0XHR9LCB0YXNrUXVldWUpO1xuXHRcdFx0XHR3aGlsZSAoIHRhc2tRdWV1ZS5sZW5ndGggKSB0YXNrUXVldWUuc2hpZnQoKSgpO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSBpZiAoIGlzLnJzU2NvcGVDbGFzcyhzdG9yZSkgKSB7XG5cdFx0XHRcdHN0b3JlID0gdGhpcy5fLl9zY29wZVtyZWYuc3RvcmVJZF0gPSBuZXcgc3RvcmUoeyAkcGFyZW50OiB0aGlzIH0sIHtcblx0XHRcdFx0XHRrZXkgICAgICAgIDogcmVmLnN0b3JlSWQsXG5cdFx0XHRcdFx0aW5jcmVtZW50SWQ6IHRydWUsXG5cdFx0XHRcdFx0dXBwZXJTY29wZSA6IHRoaXNcblx0XHRcdFx0XHQvL2F1dG9EZXN0cm95OiB0cnVlXG5cdFx0XHRcdFx0Ly9wYXJlbnQ6IHRoaXNcblx0XHRcdFx0fSk7XG5cdFx0XHRcdC8vdGhpcy5fLl9zY29wZVsgcmVmLnN0b3JlSWQgXS5yZXRhaW4oXCJzY29wZWRDaGlsZFNjb3BlXCIpO1xuXHRcdFx0XHQvL3RoaXMuX3dhdGNoU3RvcmUocmVmLnN0b3JlSWQpO1xuXHRcdFx0XHRpZiAoIHJlZi5wYXRoLmxlbmd0aCA+IDEgKVxuXHRcdFx0XHRcdHRoaXMuXy5fc2NvcGVbcmVmLnN0b3JlSWRdLm1vdW50KHJlZi5wYXRoLnNsaWNlKDEpLmpvaW4oJy4nKSwgc25hcHNob3QsIHN0YXRlLCBkYXRhKVxuXHRcdFx0XHQvL2Vsc2UgcmV0dXJuIHRoaXMuXy5fc2NvcGVbIHJlZi5zdG9yZUlkIF07XG5cdFx0XHR9XG5cdFx0XHRpZiAoIGlzLnJzU3RvcmUoc3RvcmUpICkge1xuXHRcdFx0XHRpZiAoIHN0YXRlICE9PSB1bmRlZmluZWQgJiYgZGF0YSA9PT0gdW5kZWZpbmVkIClcblx0XHRcdFx0XHRzdG9yZS5zZXRTdGF0ZShzdGF0ZSk7XG5cdFx0XHRcdGVsc2UgaWYgKCBzdGF0ZSAhPT0gdW5kZWZpbmVkIClcblx0XHRcdFx0XHRzdG9yZS5zdGF0ZSA9IHN0YXRlO1xuXHRcdFx0XHRcblx0XHRcdFx0aWYgKCBkYXRhICE9PSB1bmRlZmluZWQgKVxuXHRcdFx0XHRcdHN0b3JlLnB1c2goZGF0YSk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLl93YXRjaFN0b3JlKHJlZi5zdG9yZUlkKTtcblx0XHR9XG5cdFx0XG5cdFx0XG5cdFx0cmV0dXJuIHRoaXMuXy5fc2NvcGVbcmVmLnN0b3JlSWRdO1xuXHR9XG5cdFxuXHRfd2F0Y2hTdG9yZSggaWQsIHN0YXRlLCBkYXRhICkge1xuXHRcdGlmICggIXRoaXMuXy5fbGlzdGVuaW5nW2lkXSAmJiAhaXMuZm4odGhpcy5fLl9zY29wZVtpZF0pICkge1xuXHRcdFx0Ly9pZiAoIGlzLnJzU3RvcmUodGhpcy5fLl9zY29wZVsgaWQgXSkgKSB7XG5cdFx0XHQhdGhpcy5fLl9zY29wZVtpZF0uX2F1dG9EZXN0cm95ICYmIHRoaXMuXy5fc2NvcGVbaWRdLnJldGFpbihcInNjb3BlZFwiKTtcblx0XHRcdCF0aGlzLl8uX3Njb3BlW2lkXS5pc1N0YWJsZSgpICYmIHRoaXMud2FpdChpZCk7XG5cdFx0XHR0aGlzLl8uX3Njb3BlW2lkXS5vbihcblx0XHRcdFx0dGhpcy5fLl9saXN0ZW5pbmdbaWRdID0ge1xuXHRcdFx0XHRcdCdkZXN0cm95JyA6IHMgPT4ge1xuXHRcdFx0XHRcdFx0ZGVsZXRlIHRoaXMuXy5fbGlzdGVuaW5nW2lkXTtcblx0XHRcdFx0XHRcdHRoaXMuXy5fc2NvcGVbaWRdID0gdGhpcy5fLl9zY29wZVtpZF0uY29uc3RydWN0b3I7XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHQndXBkYXRlJyAgOiBzID0+IHRoaXMucHJvcGFnKCksXG5cdFx0XHRcdFx0J3N0YWJsZScgIDogcyA9PiB0aGlzLnJlbGVhc2UoaWQpLFxuXHRcdFx0XHRcdCd1bnN0YWJsZSc6IHMgPT4gdGhpcy53YWl0KGlkKVxuXHRcdFx0XHR9KTtcblx0XHR9XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBNaXggdGFyZ2V0Q3R4IG9uIHRoaXMgc2NvcGVcblx0ICogTWl4ZWQgc2NvcGUgcGFyZW50cyBhcmUgTk9UIG1hcHBlZFxuXHQgKiBAcGFyYW0gdGFyZ2V0Q3R4XG5cdCAqL1xuXHRtaXhpbiggdGFyZ2V0Q3R4ICkge1xuXHRcdGxldCBwYXJlbnQgPSB0aGlzLnBhcmVudCwgbGlzdHM7XG5cdFx0XG5cdFx0dGhpcy5fLl9taXhlZC5wdXNoKHRhcmdldEN0eClcblx0XHR0YXJnZXRDdHgucmV0YWluKFwibWl4ZWRUb1wiKTtcblx0XHRpZiAoICF0YXJnZXRDdHguX3N0YWJsZSApXG5cdFx0XHR0aGlzLndhaXQodGFyZ2V0Q3R4Ll9pZCk7XG5cdFx0dGhpcy5fLl9taXhlZExpc3QucHVzaChsaXN0cyA9IHtcblx0XHRcdCdzdGFibGUnICA6IHMgPT4gdGhpcy5yZWxlYXNlKHRhcmdldEN0eC5faWQpLFxuXHRcdFx0J3Vuc3RhYmxlJzogcyA9PiB0aGlzLndhaXQodGFyZ2V0Q3R4Ll9pZCksXG5cdFx0XHQndXBkYXRlJyAgOiBzID0+IHRoaXMuX3Byb3BhZygpXG5cdFx0fSk7XG5cdFx0XG5cdFx0Ly90aGlzLmFjdGlvbnMgPSB7fTtcblx0XHQvL3RoaXMuc3RvcmVzICA9IHt9O1xuXHRcdC8vdGhpcy5zdGF0ZSAgID0ge307XG5cdFx0Ly90aGlzLmRhdGEgICAgPSB7fTtcblx0XHR0YXJnZXRDdHgub24obGlzdHMpO1xuXHRcdFxuXHRcdC8vIHJlc2V0IHByb3Rvc1xuXHRcdC8vIHB1c2ggbmV3IHByb3RvIHdpdGggcGFyZW50XG5cdFx0X19wcm90b19fcHVzaCh0aGlzLCAnYWN0aW9ucycsIHBhcmVudCk7XG5cdFx0X19wcm90b19fcHVzaCh0aGlzLCAnc3RvcmVzJywgcGFyZW50KTtcblx0XHRfX3Byb3RvX19wdXNoKHRoaXMsICdzdGF0ZScsIHBhcmVudCk7XG5cdFx0X19wcm90b19fcHVzaCh0aGlzLCAnZGF0YScsIHBhcmVudCk7XG5cdFx0Ly8gcHJpbnQgbG9jYWx6IGFjY2Vzc29yc1xuXHRcdHRoaXMucmVsaW5rKHRoaXMuXy5fc2NvcGUsIHRoaXMsIGZhbHNlLCB0cnVlKTtcblx0XHRcblx0XHR0aGlzLl8uX21peGVkLmZvckVhY2goXG5cdFx0XHRjdHggPT4ge1xuXHRcdFx0XHQvLyBwdXNoIHByb3Rvc1xuXHRcdFx0XHRfX3Byb3RvX19wdXNoKHRoaXMsICdhY3Rpb25zJyk7XG5cdFx0XHRcdF9fcHJvdG9fX3B1c2godGhpcywgJ3N0b3JlcycpO1xuXHRcdFx0XHRfX3Byb3RvX19wdXNoKHRoaXMsICdzdGF0ZScpO1xuXHRcdFx0XHRfX3Byb3RvX19wdXNoKHRoaXMsICdkYXRhJyk7XG5cdFx0XHRcdHRoaXMuc3RvcmVzLl9fb3JpZ2luID0gXCJtaXhlZCBcIiArIGN0eC5faWQ7XG5cdFx0XHRcdC8vIHdyaXRlIG1peGVkIGFjY2Vzc29yc1xuXHRcdFx0XHRjdHgucmVsaW5rKGN0eC5fLl9zY29wZSwgdGhpcywgdHJ1ZSwgdHJ1ZSlcblx0XHRcdH1cblx0XHQpXG5cdH1cblx0XG5cdC8qKlxuXHQgKiBSZWdpc3RlciBzdG9yZXMgaW4gc3RvcmVzTWFwICYgbGluayB0aGVtIGluIHRoZSBwcm90b3Ncblx0ICogQHBhcmFtIHN0b3Jlc01hcFxuXHQgKiBAcGFyYW0gc3RhdGVcblx0ICogQHBhcmFtIGRhdGFcblx0ICovXG5cdHJlZ2lzdGVyKCBzdG9yZXNNYXAsIHN0YXRlID0ge30sIGRhdGEgPSB7fSApIHtcblx0XHR0aGlzLnJlbGluayhzdG9yZXNNYXAsIHRoaXMsIGZhbHNlLCBmYWxzZSk7XG5cdFx0T2JqZWN0LmtleXMoc3RvcmVzTWFwKS5mb3JFYWNoKFxuXHRcdFx0aWQgPT4ge1xuXHRcdFx0XHRpZiAoIGlkID09IFwiJHBhcmVudFwiICkgcmV0dXJuO1xuXHRcdFx0XHRpZiAoIHN0b3Jlc01hcFtpZF0uc2luZ2xldG9uIHx8IChpcy5mbihzdG9yZXNNYXBbaWRdKSAmJiAoc3RhdGVbaWRdIHx8IGRhdGFbaWRdKSkgKSB7XG5cdFx0XHRcdFx0dGhpcy5fbW91bnQoaWQsIHVuZGVmaW5lZCwgc3RhdGVbaWRdLCBkYXRhW2lkXSlcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlIGlmICggc3RhdGVbaWRdIHx8IGRhdGFbaWRdICkge1xuXHRcdFx0XHRcdGlmICggZGF0YVtpZF0gKSB7XG5cdFx0XHRcdFx0XHRpZiAoIHN0YXRlW2lkXSApXG5cdFx0XHRcdFx0XHRcdHRoaXMuc3RvcmVzW2lkXS5zdGF0ZSA9IHN0YXRlW2lkXTtcblx0XHRcdFx0XHRcdHRoaXMuc3RvcmVzW2lkXS5wdXNoKGRhdGFbaWRdKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZWxzZSBpZiAoIHN0YXRlW2lkXSApIHtcblx0XHRcdFx0XHRcdHRoaXMuc3RvcmVzW2lkXS5zZXRTdGF0ZShzdGF0ZVtpZF0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHR0aGlzLl93YXRjaFN0b3JlKGlkKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdClcblx0XHRcblx0fVxuXHRcblx0LyoqXG5cdCAqIE1hcCBzcmNDdHggc3RvcmUncyBvbiB0YXJnZXRDdHggaGVhZGVycyBwcm90bydzXG5cdCAqIEBwYXJhbSBzcmNDdHhcblx0ICogQHBhcmFtIHRhcmdldEN0eFxuXHQgKiBAcGFyYW0gc3RhdGVcblx0ICogQHBhcmFtIGRhdGFcblx0ICovXG5cdHJlbGluayggc3JjQ3R4LCB0YXJnZXRDdHggPSB0aGlzLCBleHRlcm5hbCwgZm9yY2UgKSB7XG5cdFx0bGV0IGxjdHggPSB0YXJnZXRDdHguXy5zdG9yZXMucHJvdG90eXBlO1xuXHRcdE9iamVjdC5rZXlzKHNyY0N0eClcblx0XHQgICAgICAuZm9yRWFjaChcblx0XHRcdCAgICAgIGlkID0+IHtcblx0XHRcdFx0ICAgICAgaWYgKCAhZm9yY2UgJiYgdGFyZ2V0Q3R4Ll8uX3Njb3BlW2lkXSA9PT0gc3JjQ3R4W2lkXSB8fFxuXHRcdFx0XHRcdCAgICAgIHRhcmdldEN0eC5fLl9zY29wZVtpZF0gJiYgKHRhcmdldEN0eC5fLl9zY29wZVtpZF0uY29uc3RydWN0b3IgPT09IHNyY0N0eFtpZF0pIClcblx0XHRcdFx0XHQgICAgICByZXR1cm47XG5cdFx0XHRcdFxuXHRcdFx0XHQgICAgICBpZiAoICFmb3JjZSAmJiB0YXJnZXRDdHguXy5fc2NvcGVbaWRdICkge1xuXHRcdFx0XHRcdCAgICAgIGlmICggIWV4dGVybmFsICYmICFpcy5mbih0YXJnZXRDdHguXy5fc2NvcGVbaWRdKSApIHtcblx0XHRcdFx0XHRcdCAgICAgIGNvbnNvbGUuaW5mbyhcIlJlc2NvcGUgU3RvcmUgOiBcIiwgaWQsIFwiIGFscmVhZHkgZXhpc3QgaW4gdGhpcyBzY29wZSAhICggSG90IHN3aXRjaGluZyB0aGUgc3RvcmUgKVwiKTtcblx0XHRcdFx0XHRcdCAgICAgIGxldCB0bXAgICAgICAgICAgICAgICAgPSB0YXJnZXRDdHguXy5fc2NvcGVbaWRdO1xuXHRcdFx0XHRcdFx0ICAgICAgdGFyZ2V0Q3R4Ll8uX3Njb3BlW2lkXSA9IHRhcmdldEN0eC5fLl9zY29wZVtpZF0uY29uc3RydWN0b3I7XG5cdFx0XHRcdFx0XHQgICAgICB0aGlzLl9tb3VudChpZCwgbnVsbCwgdG1wLnN0YXRlKTtcblx0XHRcdFx0XHRcdCAgICAgIHRtcC5kZXN0cm95KCk7XG5cdFx0XHRcdFx0XHQgICAgICAvL3RhcmdldEN0eC5fLl9zY29wZVsgaWQgXS5fX3Byb3RvX18gPSB0bXAuX19wcm90b19fO1xuXHRcdFx0XHRcdCAgICAgIH1cblx0XHRcdFx0XHQgICAgICBpZiAoICFleHRlcm5hbCAmJiBpcy5mbih0YXJnZXRDdHguXy5fc2NvcGVbaWRdKSApXG5cdFx0XHRcdFx0XHQgICAgICB0YXJnZXRDdHguXy5fc2NvcGVbaWRdID0gc3JjQ3R4W2lkXTtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHQgICAgICByZXR1cm47XG5cdFx0XHRcdCAgICAgIH1cblx0XHRcdFx0ICAgICAgZWxzZSBpZiAoICFmb3JjZSAmJiAhZXh0ZXJuYWwgKVxuXHRcdFx0XHRcdCAgICAgIHRoaXMuXy5fc2NvcGVbaWRdID0gc3JjQ3R4W2lkXTtcblx0XHRcdFx0XG5cdFx0XHRcdCAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShcblx0XHRcdFx0XHQgICAgICBsY3R4LFxuXHRcdFx0XHRcdCAgICAgIGlkLFxuXHRcdFx0XHRcdCAgICAgIHtcblx0XHRcdFx0XHRcdCAgICAgIGVudW1lcmFibGUgIDogdHJ1ZSxcblx0XHRcdFx0XHRcdCAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcblx0XHRcdFx0XHRcdCAgICAgIGdldCAgICAgICAgIDogKCkgPT4gdGhpcy5fLl9zY29wZVtpZF1cblx0XHRcdFx0XHQgICAgICB9XG5cdFx0XHRcdCAgICAgICk7XG5cdFx0XHRcdCAgICAgIGlmICggaWQgPT0gXCIkcGFyZW50XCIgKSByZXR1cm47XG5cdFx0XHRcdCAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShcblx0XHRcdFx0XHQgICAgICB0YXJnZXRDdHguXy5zdGF0ZS5wcm90b3R5cGUsXG5cdFx0XHRcdFx0ICAgICAgaWQsXG5cdFx0XHRcdFx0ICAgICAge1xuXHRcdFx0XHRcdFx0ICAgICAgZW51bWVyYWJsZSAgOiB0cnVlLFxuXHRcdFx0XHRcdFx0ICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuXHRcdFx0XHRcdFx0ICAgICAgZ2V0ICAgICAgICAgOiAoKSA9PiAodGhpcy5fLl9zY29wZVtpZF0gJiYgdGhpcy5fLl9zY29wZVtpZF0uc3RhdGUpLFxuXHRcdFx0XHRcdFx0ICAgICAgc2V0ICAgICAgICAgOiAoIHYgKSA9PiAodGhpcy5fbW91bnQoaWQsIHVuZGVmaW5lZCwgdikpXG5cdFx0XHRcdFx0ICAgICAgfVxuXHRcdFx0XHQgICAgICApO1xuXHRcdFx0XHQgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoXG5cdFx0XHRcdFx0ICAgICAgdGFyZ2V0Q3R4Ll8uZGF0YS5wcm90b3R5cGUsXG5cdFx0XHRcdFx0ICAgICAgaWQsXG5cdFx0XHRcdFx0ICAgICAge1xuXHRcdFx0XHRcdFx0ICAgICAgZW51bWVyYWJsZSAgOiB0cnVlLFxuXHRcdFx0XHRcdFx0ICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuXHRcdFx0XHRcdFx0ICAgICAgZ2V0ICAgICAgICAgOiAoKSA9PiAodGhpcy5fLl9zY29wZVtpZF0gJiYgdGhpcy5fLl9zY29wZVtpZF0uZGF0YSksXG5cdFx0XHRcdFx0XHQgICAgICBzZXQgICAgICAgICA6ICggdiApID0+ICh0aGlzLl9tb3VudChpZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHYpKVxuXHRcdFx0XHRcdCAgICAgIH1cblx0XHRcdFx0ICAgICAgKTtcblx0XHRcdFx0XG5cdFx0XHRcdCAgICAgIGxldCBhY3Rpb25zICAgICAgID0gc3JjQ3R4W2lkXSBpbnN0YW5jZW9mIFNjb3BlLlN0b3JlXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgPyBzcmNDdHhbaWRdLmNvbnN0cnVjdG9yLmFjdGlvbnNcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICA6IHNyY0N0eFtpZF0uYWN0aW9ucyxcblx0XHRcdFx0ICAgICAgICAgIGFjdGl2ZUFjdGlvbnMgPSB0YXJnZXRDdHguXy5hY3Rpb25zLnByb3RvdHlwZTtcblx0XHRcdFx0ICAgICAgaWYgKCBpcy5yc1Njb3BlKHRoaXMuXy5fc2NvcGVbaWRdLnByb3RvdHlwZSkgKVxuXHRcdFx0XHRcdCAgICAgIHRoaXMuX21vdW50KGlkKTtcblx0XHRcdFx0ICAgICAgaWYgKCBpcy5yc1Njb3BlKHRoaXMuXy5fc2NvcGVbaWRdKSApIHtcblx0XHRcdFx0XHQgICAgICBhY3RpdmVBY3Rpb25zW2lkXSA9IHRoaXMuXy5fc2NvcGVbaWRdLmFjdGlvbnM7XG5cdFx0XHRcdCAgICAgIH1cblx0XHRcdFx0ICAgICAgaWYgKCAhaXMucnNTdG9yZSh0aGlzLl8uX3Njb3BlW2lkXSkgJiYgIWlzLnJzU3RvcmVDbGFzcyh0aGlzLl8uX3Njb3BlW2lkXSkgKVxuXHRcdFx0XHRcdCAgICAgIHJldHVybjtcblx0XHRcdFx0XG5cdFx0XHRcdCAgICAgIGFjdGlvbnMgJiZcblx0XHRcdFx0ICAgICAgT2JqZWN0LmtleXMoYWN0aW9ucylcblx0XHRcdFx0ICAgICAgICAgICAgLmZvckVhY2goXG5cdFx0XHRcdFx0ICAgICAgICAgICAgKCBhY3QgKSA9PiB7XG5cdFx0XHRcdFx0XHQgICAgICAgICAgICBpZiAoIGFjdGl2ZUFjdGlvbnMuaGFzT3duUHJvcGVydHkoYWN0KSApXG5cdFx0XHRcdFx0XHRcdCAgICAgICAgICAgIGFjdGl2ZUFjdGlvbnNbYWN0XS5fX3RhcmdldFN0b3JlcysrO1xuXHRcdFx0XHRcdFx0ICAgICAgICAgICAgZWxzZSB7XG5cdFx0XHRcdFx0XHRcdCAgICAgICAgICAgIGFjdGl2ZUFjdGlvbnNbYWN0XSAgICAgICAgICAgICAgICA9IHRoaXMuZGlzcGF0Y2guYmluZCh0aGlzLCBhY3QpO1xuXHRcdFx0XHRcdFx0XHQgICAgICAgICAgICBhY3RpdmVBY3Rpb25zW2FjdF0uX190YXJnZXRTdG9yZXMgPSAxO1xuXHRcdFx0XHRcdFx0ICAgICAgICAgICAgfVxuXHRcdFx0XHRcdCAgICAgICAgICAgIH1cblx0XHRcdFx0ICAgICAgICAgICAgKVxuXHRcdFx0ICAgICAgfVxuXHRcdCAgICAgIClcblx0fVxuXHRcblx0LyoqXG5cdCAqIEJpbmQgc3RvcmVzIGZyb20gdGhpcyBzY29wZSwgaGlzIHBhcmVudHMgYW5kIG1peGVkIHNjb3BlXG5cdCAqXG5cdCAqIEBwYXJhbSBvYmoge1JlYWN0LkNvbXBvbmVudHxTdG9yZXxmdW5jdGlvbn1cblx0ICogQHBhcmFtIGtleSB7c3RyaW5nfSBzdG9yZXMga2V5cyB0byBiaW5kIHVwZGF0ZXNcblx0ICogQHBhcmFtIGFzXG5cdCAqIEBwYXJhbSBzZXRJbml0aWFsIHtib29sfSBmYWxzZSB0byBub3QgcHJvcGFnIGluaXRpYWwgdmFsdWUgKGRlZmF1bHQgOiB0cnVlKVxuXHQgKi9cblx0YmluZCggb2JqLCBrZXksIGFzLCBzZXRJbml0aWFsID0gdHJ1ZSwgcmV2TWFwID0ge30gKSB7XG5cdFx0bGV0IGxhc3RSZXZzLCBkYXRhLCByZWZLZXlzO1xuXHRcdGlmICgga2V5ICYmICFpcy5hcnJheShrZXkpIClcblx0XHRcdGtleSA9IFtrZXldO1xuXHRcdFxuXHRcdGlmICggYXMgPT09IGZhbHNlIHx8IGFzID09PSB0cnVlICkge1xuXHRcdFx0c2V0SW5pdGlhbCA9IGFzO1xuXHRcdFx0YXMgICAgICAgICA9IG51bGw7XG5cdFx0fVxuXHRcdFxuXHRcdHJlZktleXMgPSBrZXlcblx0XHRcdC5tYXAoaWQgPT4gKGlzLnN0cmluZyhpZCkgPyBpZCA6IGlkLm5hbWUpKVxuXHRcdFx0Lm1hcChpZCA9PiAodGhpcy5wYXJzZVJlZihpZCkpKTtcblx0XHRcblx0XHRcblx0XHR0aGlzLl8uZm9sbG93ZXJzLnB1c2goXG5cdFx0XHRbXG5cdFx0XHRcdG9iaixcblx0XHRcdFx0a2V5LFxuXHRcdFx0XHRhcyB8fCB1bmRlZmluZWQsXG5cdFx0XHRcdGxhc3RSZXZzID0gcmVmS2V5cy5yZWR1Y2UoKCByZXZzLCByZWYgKSA9PiB7XG5cdFx0XHRcdFx0cmV2c1tyZWYuc3RvcmVJZF0gPSByZXZzW3JlZi5zdG9yZUlkXSB8fCB7XG5cdFx0XHRcdFx0XHRyZXYgOiAwLFxuXHRcdFx0XHRcdFx0cmVmczogW11cblx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdHJldnNbcmVmLnN0b3JlSWRdLnJlZnMucHVzaChyZWYpO1xuXHRcdFx0XHRcdHJldHVybiByZXZzO1xuXHRcdFx0XHR9LCByZXZNYXApXG5cdFx0XHRdKTtcblx0XHRcblx0XHR0aGlzLm1vdW50KGtleSk7XG5cdFx0dGhpcy5yZXRhaW5TdG9yZXMoT2JqZWN0LmtleXMobGFzdFJldnMpLCAnbGlzdGVuZXJzJyk7XG5cdFx0XG5cdFx0aWYgKCBzZXRJbml0aWFsICYmIHRoaXMuX3N0YWJsZSApIHtcblx0XHRcdGRhdGEgPSB0aGlzLmdldFVwZGF0ZXMobGFzdFJldnMpO1xuXHRcdFx0aWYgKCAhZGF0YSApIHJldHVybiB0aGlzO1xuXHRcdFx0aWYgKCB0eXBlb2Ygb2JqICE9IFwiZnVuY3Rpb25cIiApIHtcblx0XHRcdFx0aWYgKCBhcyApIG9iai5zZXRTdGF0ZSh7IFthc106IGRhdGEgfSk7XG5cdFx0XHRcdGVsc2Ugb2JqLnNldFN0YXRlKGRhdGEpO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdG9iaihkYXRhKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBVbiBiaW5kIHRoaXMgc2NvcGUgb2ZmIHRoZSBnaXZlbiBjb21wb25lbnQta2V5c1xuXHQgKiBAcGFyYW0gb2JqXG5cdCAqIEBwYXJhbSBrZXlcblx0ICogQHJldHVybnMge0FycmF5LjwqPn1cblx0ICovXG5cdHVuQmluZCggb2JqLCBrZXksIGFzICkge1xuXHRcdHZhciBmb2xsb3dlcnMgPSB0aGlzLl8uZm9sbG93ZXJzLFxuXHRcdCAgICBpICAgICAgICAgPSBmb2xsb3dlcnMgJiYgZm9sbG93ZXJzLmxlbmd0aDtcblx0XHR3aGlsZSAoIGZvbGxvd2VycyAmJiBpLS0gKVxuXHRcdFx0aWYgKCBmb2xsb3dlcnNbaV1bMF0gPT09IG9iaiAmJlxuXHRcdFx0XHQoJycgKyBmb2xsb3dlcnNbaV1bMV0pID09ICgnJyArIGtleSkgJiZcblx0XHRcdFx0Zm9sbG93ZXJzW2ldWzJdID09IGFzICkge1xuXHRcdFx0XHR0aGlzLmRpc3Bvc2VTdG9yZXMoT2JqZWN0LmtleXMoZm9sbG93ZXJzW2ldWzNdKSwgJ2xpc3RlbmVycycpO1xuXHRcdFx0XHRyZXR1cm4gZm9sbG93ZXJzLnNwbGljZShpLCAxKTtcblx0XHRcdH1cblx0fVxuXHRcblx0LyoqXG5cdCAqIE1vdW50IHRoZSBzdG9yZXMgaW4gc3RvcmVzTGlzdCBmcm9tIHRoaXMgc2NvcGUsIGl0cyBwYXJlbnRzIGFuZCBtaXhlZCBzY29wZVxuXHQgKiBCaW5kIHRoZW0gdG8gJ3RvJ1xuXHQgKiBIb29rICd0bycgc28gaXQgd2lsbCBhdXRvIHVuYmluZCBvbiAnZGVzdHJveScgb3IgJ2NvbXBvbmVudFdpbGxVbm1vdW50J1xuXHQgKiBAcGFyYW0gdG9cblx0ICogQHBhcmFtIHN0b3Jlc0xpc3Rcblx0ICogQHBhcmFtIGJpbmRcblx0ICogQHJldHVybnMge09iamVjdH0gSW5pdGlhbCBvdXRwdXRzIG9mIHRoZSBzdG9yZXMgaW4gJ3N0b3Jlc0xpc3QnXG5cdCAqL1xuXHRtYXAoIHRvLCBzdG9yZXNMaXN0LCBiaW5kID0gdHJ1ZSwgcmV2TWFwICkge1xuXHRcdGxldCBTdG9yZSAgID0gdGhpcy5jb25zdHJ1Y3Rvci5TdG9yZTtcblx0XHRzdG9yZXNMaXN0ICA9IGlzLmFycmF5KHN0b3Jlc0xpc3QpID8gc3RvcmVzTGlzdCA6IFtzdG9yZXNMaXN0XTtcblx0XHRsZXQgcmVmTGlzdCA9IHN0b3Jlc0xpc3QubWFwKHRoaXMucGFyc2VSZWYpO1xuXHRcdHRoaXMubW91bnQoc3RvcmVzTGlzdCk7XG5cdFx0aWYgKCBiaW5kICYmIHRvIGluc3RhbmNlb2YgU3RvcmUgKSB7XG5cdFx0XHRTdG9yZS5tYXAodG8sIHN0b3Jlc0xpc3QsIHRoaXMsIHRoaXMsIGZhbHNlKVxuXHRcdH1cblx0XHRlbHNlIGlmICggYmluZCApIHtcblx0XHRcdHRoaXMuYmluZCh0bywgc3RvcmVzTGlzdCwgdW5kZWZpbmVkLCBmYWxzZSk7XG5cdFx0XHRcblx0XHRcdGxldCBtaXhlZENXVW5tb3VudCxcblx0XHRcdCAgICB1bk1vdW50S2V5ID0gdG8uaXNSZWFjdENvbXBvbmVudCA/IFwiY29tcG9uZW50V2lsbFVubW91bnRcIiA6IFwiZGVzdHJveVwiO1xuXHRcdFx0XG5cdFx0XHRpZiAoIHRvLmhhc093blByb3BlcnR5KHVuTW91bnRLZXkpICkge1xuXHRcdFx0XHRtaXhlZENXVW5tb3VudCA9IHRvW3VuTW91bnRLZXldO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHR0b1t1bk1vdW50S2V5XSA9ICggLi4uYXJneiApID0+IHtcblx0XHRcdFx0ZGVsZXRlIHRvW3VuTW91bnRLZXldO1xuXHRcdFx0XHRpZiAoIG1peGVkQ1dVbm1vdW50IClcblx0XHRcdFx0XHR0b1t1bk1vdW50S2V5XSA9IG1peGVkQ1dVbm1vdW50O1xuXHRcdFx0XHRcblx0XHRcdFx0dGhpcy51bkJpbmQodG8sIHN0b3Jlc0xpc3QpO1xuXHRcdFx0XHRyZXR1cm4gdG9bdW5Nb3VudEtleV0gJiYgdG9bdW5Nb3VudEtleV0oLi4uYXJneik7XG5cdFx0XHR9XG5cdFx0XHRcblx0XHR9XG5cdFx0cmV0dXJuIHJldk1hcCAmJiB0aGlzLmdldFVwZGF0ZXMocmV2TWFwKSB8fCByZWZMaXN0LnJlZHVjZSgoIGRhdGEsIHJlZiApID0+IHtcblx0XHRcdHdhbGtuU2V0KGRhdGEsIHJlZi5hbGlhcyB8fCByZWYucGF0aCwgdGhpcy5yZXRyaWV2ZShyZWYucGF0aCkpXG5cdFx0XHRyZXR1cm4gZGF0YTtcblx0XHR9LCB7fSk7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBHZXQgY3VycmVudCBkYXRhIHZhbHVlIGZyb20ganNvbiBwYXRoXG5cdCAqIEBwYXJhbSBwYXRoXG5cdCAqIEByZXR1cm5zIHtzdHJpbmd8Kn1cblx0ICovXG5cdHJldHJpZXZlKCBwYXRoID0gXCJcIiApIHtcblx0XHRwYXRoID0gaXMuc3RyaW5nKHBhdGgpID8gcGF0aC5zcGxpdCgnLicpIDogcGF0aDtcblx0XHRyZXR1cm4gcGF0aCAmJlxuXHRcdFx0dGhpcy5zdG9yZXNbcGF0aFswXV0gJiZcblx0XHRcdHRoaXMuc3RvcmVzW3BhdGhbMF1dLnJldHJpZXZlICYmXG5cdFx0XHR0aGlzLnN0b3Jlc1twYXRoWzBdXS5yZXRyaWV2ZShwYXRoLnNsaWNlKDEpKTtcblx0fVxuXHRcblx0LyoqXG5cdCAqIEdldCBjdXJyZW50IHN0b3JlIGZyb20ganNvbiBwYXRoXG5cdCAqIEBwYXJhbSBwYXRoXG5cdCAqIEByZXR1cm5zIHtzdHJpbmd8Kn1cblx0ICovXG5cdHJldHJpZXZlU3RvcmUoIHBhdGggPSBcIlwiICkge1xuXHRcdHBhdGggPSBpcy5zdHJpbmcocGF0aCkgPyBwYXRoLnNwbGl0KCcuJykgOiBwYXRoO1xuXHRcdHJldHVybiBwYXRoXG5cdFx0XHQmJiBwYXRoLmxlbmd0aFxuXHRcdFx0JiYgKFxuXHRcdFx0XHRwYXRoLmxlbmd0aCAhPSAxICYmIHRoaXMuc3RvcmVzW3BhdGhbMF1dLnJldHJpZXZlU3RvcmVcblx0XHRcdFx0PyB0aGlzLnN0b3Jlc1twYXRoWzBdXS5yZXRyaWV2ZVN0b3JlKHBhdGguc2xpY2UoMSkpXG5cdFx0XHRcdDogcGF0aC5sZW5ndGggPT0gMSAmJiB0aGlzLnN0b3Jlc1twYXRoWzBdXVxuXHRcdFx0KTtcblx0fVxuXHRcblx0LyoqXG5cdCAqIEdldCBvciB1cGRhdGUgc3RvcmVzUmV2TWFwJ3MgcmV2aXNpb25zXG5cdCAqIEBwYXJhbSBzdG9yZXNSZXZNYXBcblx0ICogQHBhcmFtIGxvY2FsXG5cdCAqIEByZXR1cm5zIHt7fX1cblx0ICovXG5cdGdldFN0b3Jlc1JldnMoIHN0b3Jlc1Jldk1hcCA9IHt9LCBsb2NhbCApIHtcblx0XHRsZXQgY3R4ID0gdGhpcy5fLl9zY29wZTtcblx0XHRpZiAoICFzdG9yZXNSZXZNYXAgKSB7XG5cdFx0XHRzdG9yZXNSZXZNYXAgPSB7fTtcblx0XHR9XG5cdFx0T2JqZWN0LmtleXMoY3R4KS5mb3JFYWNoKFxuXHRcdFx0aWQgPT4ge1xuXHRcdFx0XHRpZiAoIGlkID09IFwiJHBhcmVudFwiICkgcmV0dXJuO1xuXHRcdFx0XHRpZiAoICFpcy5mbihjdHhbaWRdKVxuXHRcdFx0XHQpIHtcblx0XHRcdFx0XHRzdG9yZXNSZXZNYXBbaWRdID0gY3R4W2lkXS5fcmV2O1xuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2UgaWYgKCAhc3RvcmVzUmV2TWFwLmhhc093blByb3BlcnR5KGlkKSApXG5cdFx0XHRcdFx0c3RvcmVzUmV2TWFwW2lkXSA9IGZhbHNlXG5cdFx0XHR9XG5cdFx0KTtcblx0XHRpZiAoICFsb2NhbCApIHtcblx0XHRcdHRoaXMuXy5fbWl4ZWQucmVkdWNlKCggdXBkYXRlZCwgY3R4ICkgPT4gKGN0eC5nZXRTdG9yZXNSZXZzKHN0b3Jlc1Jldk1hcCksIHN0b3Jlc1Jldk1hcCksIHN0b3Jlc1Jldk1hcCk7XG5cdFx0XHR0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC5nZXRTdG9yZXNSZXZzKHN0b3Jlc1Jldk1hcCk7XG5cdFx0fVxuXHRcdHJldHVybiBzdG9yZXNSZXZNYXA7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBHZXQgdXBkYXRlZCBvdXRwdXQgYmFzaW5nIHN0b3Jlc1Jldk1hcCdzIHJldmlzaW9ucy5cblx0ICogSWYgYSBzdG9yZSBpbiAnc3RvcmVzUmV2TWFwJyB3YXMgdXBkYXRlZDsgYWRkIGl0IHRvICdvdXRwdXQnICYgdXBkYXRlIHN0b3Jlc1Jldk1hcFxuXHQgKiBAcGFyYW0gc3RvcmVzUmV2TWFwXG5cdCAqIEBwYXJhbSBvdXRwdXRcblx0ICogQHBhcmFtIHVwZGF0ZWRcblx0ICogQHJldHVybnMgeyp8e319XG5cdCAqL1xuXHRnZXRSZWZzVXBkYXRlcyggcmVmcywgcmV2TWFwLCBvdXRwdXQgKSB7XG5cdFx0XG5cdFx0cmV2TWFwID0gcmV2TWFwIHx8IHJlZnNcblx0XHRcdC5tYXAoaWQgPT4gKGlzLnN0cmluZyhpZCkgPyBpZCA6IGlkLm5hbWUpKVxuXHRcdFx0Lm1hcChpZCA9PiAodGhpcy5wYXJzZVJlZihpZCkpKVxuXHRcdFx0LnJlZHVjZSgoIHJldnMsIHJlZiApID0+IHtcblx0XHRcdFx0cmV2c1tyZWYuc3RvcmVJZF0gPSByZXZzW3JlZi5zdG9yZUlkXSB8fCB7XG5cdFx0XHRcdFx0cmV2IDogMCxcblx0XHRcdFx0XHRyZWZzOiBbXVxuXHRcdFx0XHR9O1xuXHRcdFx0XHRyZXZzW3JlZi5zdG9yZUlkXS5yZWZzLnB1c2gocmVmKTtcblx0XHRcdFx0cmV0dXJuIHJldnM7XG5cdFx0XHR9LCB7fSk7XG5cdFx0XG5cdFx0cmV0dXJuIHRoaXMuZ2V0VXBkYXRlcyhyZXZNYXAsIG91dHB1dClcblx0XHRcblx0fVxuXHRcblx0LyoqXG5cdCAqIEdldCBvciB1cGRhdGUgb3V0cHV0IGJhc2luZyBzdG9yZXNSZXZNYXAncyByZXZpc2lvbnMuXG5cdCAqIElmIGEgc3RvcmUgaW4gJ3N0b3Jlc1Jldk1hcCcgd2FzIHVwZGF0ZWQ7IGFkZCBpdCB0byAnb3V0cHV0JyAmIHVwZGF0ZSBzdG9yZXNSZXZNYXBcblx0ICogQHRvZG86IG9wdGltIC8gdXNlIHByb3Rvc1xuXHQgKiBAcGFyYW0gc3RvcmVzUmV2TWFwXG5cdCAqIEBwYXJhbSBvdXRwdXRcblx0ICogQHBhcmFtIHVwZGF0ZWRcblx0ICogQHJldHVybnMgeyp8e319XG5cdCAqL1xuXHRnZXRVcGRhdGVzKCBzdG9yZXNSZXZNYXAsIG91dHB1dCwgdXBkYXRlZCApIHtcblx0XHRcblx0XHRvdXRwdXQgICAgICAgPSBvdXRwdXQgfHwge307XG5cdFx0c3RvcmVzUmV2TWFwID0gc3RvcmVzUmV2TWFwIHx8IHRoaXMuX2dldFJldk1hcCgpO1xuXHRcdE9iamVjdC5rZXlzKHN0b3Jlc1Jldk1hcCkuZm9yRWFjaChcblx0XHRcdGlkID0+IHtcblx0XHRcdFx0bGV0IHN0b3JlICAgICAgICA9IHRoaXMuc3RvcmVzW2lkXTtcblx0XHRcdFx0c3RvcmVzUmV2TWFwW2lkXSA9IHN0b3Jlc1Jldk1hcFtpZF0gfHwgeyByZXY6IDAsIHJlZnM6IFtdIH07XG5cdFx0XHRcdFxuXHRcdFx0XHRpZiAoIHN0b3JlICYmIGlzLmZuKHN0b3JlKSApIHtcblx0XHRcdFx0XHR1cGRhdGVkICAgID0gdHJ1ZTtcblx0XHRcdFx0XHRvdXRwdXRbaWRdID0gdW5kZWZpbmVkO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2UgaWYgKCBzdG9yZSAmJiBzdG9yZS5fcmV2ID4gc3RvcmVzUmV2TWFwW2lkXS5yZXYgKSB7XG5cdFx0XHRcdFx0c3RvcmVzUmV2TWFwW2lkXS5yZXYgPSBzdG9yZS5fcmV2O1xuXHRcdFx0XHRcdG91dHB1dFtpZF0gICAgICAgICAgID0gc3RvcmUuZGF0YTtcblx0XHRcdFx0XHR1cGRhdGVkICAgICAgICAgICAgICA9IHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHQpXG5cdFx0cmV0dXJuIHVwZGF0ZWQgJiYgb3V0cHV0O1xuXHR9XG5cdFxuXHQvKipcblx0ICogUmVjdXJzaXZlbHkgZ2V0IGFsbCBzdG9yZXMgcmV2c1xuXHQgKiBAcGFyYW0gY2hpbGRzXG5cdCAqIEByZXR1cm5zIHtBcnJheX1cblx0ICogQHByaXZhdGVcblx0ICovXG5cdF9nZXRSZXZNYXAoIHN0b3Jlc1Jldk1hcCA9IHt9ICkge1xuXHRcdGxldCBjdHggPSB0aGlzLl8uX3Njb3BlO1xuXHRcdE9iamVjdC5rZXlzKGN0eCkuZm9yRWFjaChcblx0XHRcdGlkID0+IHtcblx0XHRcdFx0aWYgKCBpZCA9PSBcIiRwYXJlbnRcIiB8fCBzdG9yZXNSZXZNYXBbaWRdICkgcmV0dXJuO1xuXHRcdFx0XHRzdG9yZXNSZXZNYXBbaWRdID0geyByZXY6IGN0eFtpZF0uX3JldiwgcmVmczogW10gfTtcblx0XHRcdFx0XG5cdFx0XHR9KTtcblx0XHR0aGlzLl8uX21peGVkLnJlZHVjZVJpZ2h0KFxuXHRcdFx0KCBzdG9yZXNSZXZNYXAsIGN0eCApID0+IChjdHguX2dldFJldk1hcChzdG9yZXNSZXZNYXApKSwgc3RvcmVzUmV2TWFwKTtcblx0XHR0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC5fZ2V0UmV2TWFwKHN0b3Jlc1Jldk1hcCk7XG5cdFx0cmV0dXJuIHN0b3Jlc1Jldk1hcDtcblx0fVxuXHRcblx0LyoqXG5cdCAqIFJlY3Vyc2l2ZWx5IGdldCBhbGwgY2hpbGQgc2NvcGVzXG5cdCAqIEBwYXJhbSBjaGlsZHNcblx0ICogQHJldHVybnMge0FycmF5fVxuXHQgKiBAcHJpdmF0ZVxuXHQgKi9cblx0X2dldEFsbENoaWxkcyggY2hpbGRzID0gW10gKSB7XG5cdFx0Y2hpbGRzLnB1c2goLi4udGhpcy5fLmNoaWxkU2NvcGVzKTtcblx0XHR0aGlzLl8uY2hpbGRTY29wZXMuZm9yRWFjaChcblx0XHRcdGN0eCA9PiB7XG5cdFx0XHRcdGN0eC5fZ2V0QWxsQ2hpbGRzKGNoaWxkcyk7XG5cdFx0XHR9XG5cdFx0KTtcblx0XHRyZXR1cm4gY2hpbGRzO1xuXHR9XG5cdFxuXHQvKipcblx0ICogU2VyaWFsaXplIGFsbCBhY3RpdmUgc3RvcmVzIHN0YXRlICYgZGF0YSBpbiBldmVyeSBjaGlsZHMgJiBtaXhlZCBzY29wZXNcblx0ICpcblx0ICogU2NvcGVzIHdpdGhvdXQga2V5IG9yIGlkIGFyZSBpZ25vcmVkXG5cdCAqIEBwYXJhbSBvdXRwdXRcblx0ICogQHJldHVybnMge3t9fVxuXHQgKi9cblx0c2VyaWFsaXplKCBjZmcgPSB7fSwgb3V0cHV0ID0ge30gKSB7XG5cdFx0bGV0IGN0eCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA9IHRoaXMuXy5fc2NvcGUsXG5cdFx0ICAgIHsgYmFzZUlkLCBrZXksIGtleVBJRCwgaW5jcmVtZW50SWQgfSA9IHRoaXMuXyxcblx0XHQgICAge1xuXHRcdFx0ICAgIGFsaWFzLFxuXHRcdFx0ICAgIHBhcmVudEFsaWFzLFxuXHRcdCAgICB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSBjZmcsXG5cdFx0ICAgIHNpZCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA9IGtleVxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IChwYXJlbnRBbGlhcyB8fCBrZXlQSUQpICsgJz4nICsga2V5XG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogYWxpYXMgfHwgcGFyZW50QWxpYXMgJiYgKHBhcmVudEFsaWFzICsgJy8nICsgYmFzZUlkKSB8fCB0aGlzLl9pZDtcblx0XHRcblx0XHRcblx0XHQvL2FsaWFzID0gYWxpYXMgfHwgYmFzZUlkO1xuXHRcdHJldHVybiB0aGlzLnNlcmlhbGl6ZV9leChjZmcsIG91dHB1dCwgc2lkLCBhbGlhcywgW1wiJHBhcmVudFwiXSlcblx0fVxuXHRcblx0c2VyaWFsaXplX2V4KCBjZmcgPSB7fSwgb3V0cHV0ID0ge30sIHNpZCwgYWxpYXMsIGV4Y2x1ZGUgKSB7XG5cdFx0bGV0IGN0eCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA9IHRoaXMuXy5fc2NvcGUsXG5cdFx0ICAgIHsgYmFzZUlkLCBrZXksIGtleVBJRCwgaW5jcmVtZW50SWQgfSA9IHRoaXMuXyxcblx0XHQgICAge1xuXHRcdFx0ICAgIHdpdGhDaGlsZHMgPSB0cnVlLFxuXHRcdFx0ICAgIHdpdGhQYXJlbnRzLFxuXHRcdFx0ICAgIHdpdGhNaXhlZCAgPSB0cnVlLFxuXHRcdFx0ICAgIG5vcmVmcyxcblx0XHRcdCAgICBwYXJlbnRBbGlhcyxcblx0XHRcdCAgICBhbGlhc2VzICAgID0ge31cblx0XHQgICAgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID0gY2ZnO1xuXHRcdFxuXHRcdGlmICgga2V5V2Fsa25HZXQob3V0cHV0LCBzaWQpICkge1xuXHRcdFx0aWYgKCAhaW5jcmVtZW50SWQgKS8vIGRvbmVcblx0XHRcdFx0cmV0dXJuIG91dHB1dDtcblx0XHRcdGVsc2UgaWYgKCBpbmNyZW1lbnRJZCApIHsvLyBnZW5lcmF0ZSBrZXkgaWRcblx0XHRcdFx0bGV0IGkgPSAtMTtcblx0XHRcdFx0d2hpbGUgKCBrZXlXYWxrbkdldChvdXRwdXQsIHNpZCArICdbJyArICgrK2kpICsgJ10nKSApIDtcblx0XHRcdFx0c2lkID0gc2lkICsgJ1snICsgaSArICddJztcblx0XHRcdH1cblx0XHR9XG5cdFx0Ly9AdG9kbyA6IGJldHRlciBzZXJpYWxpemUgbWV0aG9kXG5cdFx0a2V5V2Fsa25TZXQob3V0cHV0LCBzaWQsIHt9KTtcblx0XHRcblx0XHRPYmplY3Qua2V5cyhjdHgpLmZvckVhY2goXG5cdFx0XHRpZCA9PiB7XG5cdFx0XHRcdGlmICggZXhjbHVkZS5pbmNsdWRlcyhpZCkgfHwgaXMucnNTdG9yZUNsYXNzKGN0eFtpZF0pIHx8IGlzLnJzU2NvcGVDbGFzcyhjdHhbaWRdKSApXG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcblx0XHRcdFx0Y3R4W2lkXS5zZXJpYWxpemUoeyAuLi5jZmcsIHBhcmVudEFsaWFzOiBzaWQgfSwgb3V0cHV0KTtcblx0XHRcdH1cblx0XHQpXG5cdFx0XG5cdFx0Ly93aXRoUGFyZW50cyAmJiB0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC5zZXJpYWxpemUoe1xuXHRcdC8vXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aENoaWxkICA6IGZhbHNlLFxuXHRcdC8vXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aFBhcmVudHM6IHRydWUsXG5cdFx0Ly9cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRoTWl4ZWQsXG5cdFx0Ly9cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JlZnNcblx0XHQvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBvdXRwdXQpO1xuXHRcdFxuXHRcdHdpdGhDaGlsZHMgJiYgdGhpcy5fLmNoaWxkU2NvcGVzLmZvckVhY2goXG5cdFx0XHRjdHggPT4ge1xuXHRcdFx0XHQhY3R4Ll8uaXNMb2NhbElkICYmIGN0eC5zZXJpYWxpemUoe1xuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRoQ2hpbGQgIDogdHJ1ZSxcblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aFBhcmVudHM6IGZhbHNlLFxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRBbGlhczogc2lkLFxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRoTWl4ZWQsXG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcmVmcyxcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIG91dHB1dCk7XG5cdFx0XHR9XG5cdFx0KTtcblx0XHRcblx0XHR3aXRoTWl4ZWQgJiYgdGhpcy5fLl9taXhlZC5mb3JFYWNoKFxuXHRcdFx0Y3R4ID0+IHtcblx0XHRcdFx0IWN0eC5fLmlzTG9jYWxJZCAmJiBjdHguc2VyaWFsaXplKHtcblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aENoaWxkICA6IGZhbHNlLFxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRoUGFyZW50czogZmFsc2UsXG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpdGhNaXhlZCxcblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9yZWZzXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBvdXRwdXQpO1xuXHRcdFx0fVxuXHRcdCk7XG5cdFx0XG5cdFx0aWYgKCBhbGlhcyApIHtcblx0XHRcdG91dHB1dCA9IE9iamVjdC5rZXlzKG91dHB1dClcblx0XHRcdCAgICAgICAgICAgICAgIC5yZWR1Y2UoXG5cdFx0XHRcdCAgICAgICAgICAgICAgICggaCwgayApID0+IChcblx0XHRcdFx0XHQgICAgICAgICAgICAgICBoW2sgPT09IHRoaXMuX2lkXG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICA/IGFsaWFzXG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICA6IGtdID0gb3V0cHV0W2tdLFxuXHRcdFx0XHRcdFx0ICAgICAgICAgICAgICAgaFxuXHRcdFx0XHQgICAgICAgICAgICAgICApLFxuXHRcdFx0XHQgICAgICAgICAgICAgICB7fVxuXHRcdFx0ICAgICAgICAgICAgICAgKVxuXHRcdH1cblx0XHRyZXR1cm4gb3V0cHV0O1xuXHR9XG5cdFxuXHQvKipcblx0ICogUmVzdG9yZSBzdGF0ZSAmIGRhdGEgZnJvbSB0aGUgc2VyaWFsaXplIGZuXG5cdCAqIEBwYXJhbSBzbmFwc2hvdFxuXHQgKiBAcGFyYW0gZm9yY2Vcblx0ICovXG5cdHJlc3RvcmUoIHNuYXBzaG90LCBjZmcgPSB7fSwgZm9yY2UgPSBpcy5ib29sKGNmZykgJiYgY2ZnICkge1xuXHRcdGxldCBjdHggPSB0aGlzLl8uX3Njb3BlLCBzbmFwO1xuXHRcdFxuXHRcdGlmICggc25hcHNob3QgJiYgY2ZnICYmIGNmZy5hbGlhcyAmJiBjZmcuYWxpYXMgIT0gdGhpcy5faWQgKSB7XG5cdFx0XHRzbmFwID0ge1xuXHRcdFx0XHQuLi5zbmFwc2hvdCxcblx0XHRcdFx0W3RoaXMuX2lkXTogc25hcHNob3RbY2ZnLmFsaWFzXVxuXHRcdFx0fVxuXHRcdFx0ZGVsZXRlIHNuYXBbY2ZnLmFsaWFzXTtcblx0XHRcdHNuYXBzaG90ID0gc25hcDtcblx0XHR9XG5cdFx0c25hcHNob3QgPSBzbmFwc2hvdFxuXHRcdFx0JiYga2V5V2Fsa25HZXQoc25hcHNob3QsIHRoaXMuX2lkKVxuXHRcdFx0fHwgdGhpcy50YWtlU25hcHNob3RCeUtleSh0aGlzLl9pZCk7XG5cdFx0XG5cdFx0XG5cdFx0aWYgKCAhc25hcHNob3QgKVxuXHRcdFx0cmV0dXJuO1xuXHRcdFxuXHRcdHRoaXMuXy5zbmFwc2hvdCA9IHsgLi4uc25hcHNob3QgfTtcblx0XHRcblx0XHRzbmFwICAgICAgICAgID0gc25hcHNob3RbJy8nXTtcblx0XHRzbmFwc2hvdFsnLyddID0geyAuLi5zbmFwIH07XG5cdFx0c25hcCAmJiBPYmplY3Qua2V5cyhzbmFwKS5mb3JFYWNoKFxuXHRcdFx0bmFtZSA9PiB7XG5cdFx0XHRcdGlmICggbmFtZSA9PSBcIiRwYXJlbnRcIiApIHJldHVybjtcblx0XHRcdFx0XG5cdFx0XHRcdGlmICggY3R4W25hbWVdICkge1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdGlmICggZm9yY2UgJiYgIWlzLmZuKGN0eFtuYW1lXSkgKVxuXHRcdFx0XHRcdFx0Y3R4W25hbWVdLmRlc3Ryb3koKTtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHR0aGlzLl9tb3VudChuYW1lKTsvLyBxdWlldFxuXHRcdFx0XHR9XG5cdFx0XHRcdFxuXHRcdFx0fVxuXHRcdClcblx0XHRcblx0XHR0aGlzLl8uX21peGVkLmZvckVhY2goXG5cdFx0XHRjdHggPT4ge1xuXHRcdFx0XHQhY3R4Ll8uaXNMb2NhbElkICYmIGN0eC5yZXN0b3JlKHVuZGVmaW5lZCwgZm9yY2UpO1xuXHRcdFx0fVxuXHRcdCk7XG5cdFx0XG5cdFx0dGhpcy5fLmNoaWxkU2NvcGVzLmZvckVhY2goXG5cdFx0XHRjdHggPT4ge1xuXHRcdFx0XHQhY3R4Ll8uaXNMb2NhbElkICYmIGN0eC5yZXN0b3JlKHVuZGVmaW5lZCwgZm9yY2UpO1xuXHRcdFx0fVxuXHRcdCk7XG5cdH1cblx0XG5cdGdldFNuYXBzaG90QnlLZXkoIGtleSwgbG9jYWwgKSB7XG5cdFx0Ly8gb25seSBoYXZlIHRoZSBsb2NhbCBzbmFwXG5cdFx0aWYgKCB0aGlzLl8uc25hcHNob3QgJiYga2V5LnN0YXJ0c1dpdGgodGhpcy5faWQpICkge1xuXHRcdFx0bGV0IG9iaiA9IGtleVdhbGtuR2V0KHRoaXMuXy5zbmFwc2hvdCwga2V5LnN1YnN0cih0aGlzLl9pZC5sZW5ndGgpKVxuXHRcdFx0Ly9pZiAoIG9iaiApIHtcblx0XHRcdC8vICAgIHRoaXMuZGVsZXRlU25hcHNob3RCeUtleShrZXkpO1xuXHRcdFx0Ly99XG5cdFx0XHRyZXR1cm4gb2JqO1xuXHRcdH1cblx0XHRlbHNlIHJldHVybiAhbG9jYWxcblx0XHRcdCYmIHRoaXMucGFyZW50XG5cdFx0XHQmJiB0aGlzLnBhcmVudC5nZXRTbmFwc2hvdEJ5S2V5KGtleSlcblx0XHRcdHx8XG5cdFx0XHR0aGlzLnN0b3Jlcy4kcGFyZW50XG5cdFx0XHQmJiB0aGlzLnN0b3Jlcy4kcGFyZW50LmdldFNuYXBzaG90QnlLZXkoa2V5KTtcblx0XHRcblx0fVxuXHRcblx0Z2V0U25hcHNob3RCeUtleUV4dCggc25hcHNob3QsIGtleSwgbG9jYWwgKSB7XG5cdFx0Ly8gb25seSBoYXZlIHRoZSBsb2NhbCBzbmFwXG5cdFx0aWYgKCBzbmFwc2hvdCApIHtcblx0XHRcdGxldCBvYmogPSBrZXlXYWxrbkdldChzbmFwc2hvdCwga2V5KVxuXHRcdFx0cmV0dXJuIG9iajtcblx0XHR9XG5cdFx0XG5cdH1cblx0XG5cdHRha2VTbmFwc2hvdEJ5S2V5KCBrZXksIGxvY2FsICkge1xuXHRcdGlmICggdGhpcy5fLnNuYXBzaG90ICYmIGtleS5zdGFydHNXaXRoKHRoaXMuX2lkKSApIHtcblx0XHRcdGxldCBvYmogPSBrZXlXYWxrbkdldCh0aGlzLl8uc25hcHNob3QsIGtleS5zdWJzdHIodGhpcy5faWQubGVuZ3RoKSlcblx0XHRcdGlmICggb2JqICkge1xuXHRcdFx0XHR0aGlzLmRlbGV0ZVNuYXBzaG90QnlLZXkoa2V5LCB0cnVlKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBvYmo7XG5cdFx0fVxuXHRcdGVsc2UgcmV0dXJuICFsb2NhbFxuXHRcdFx0JiYgdGhpcy5wYXJlbnRcblx0XHRcdCYmIHRoaXMucGFyZW50LnRha2VTbmFwc2hvdEJ5S2V5KGtleSlcblx0XHRcdHx8XG5cdFx0XHR0aGlzLnN0b3Jlcy4kcGFyZW50XG5cdFx0XHQmJiB0aGlzLnN0b3Jlcy4kcGFyZW50LnRha2VTbmFwc2hvdEJ5S2V5KGtleSk7XG5cdH1cblx0XG5cdGRlbGV0ZVNuYXBzaG90QnlLZXkoIGtleSwgbG9jYWwgKSB7XG5cdFx0aWYgKCB0aGlzLl8uc25hcHNob3QgJiYga2V5LnN0YXJ0c1dpdGgodGhpcy5faWQpICkge1xuXHRcdFx0bGV0IG9iaiA9IGtleVdhbGtuR2V0KHRoaXMuXy5zbmFwc2hvdCwga2V5LnN1YnN0cih0aGlzLl9pZC5sZW5ndGgpLnJlcGxhY2UoL14oLipbXFw+fFxcL10pW15cXD58XFwvXSskL2lnLCAnJDEnKSlcblx0XHRcdGlmICggb2JqIClcblx0XHRcdFx0ZGVsZXRlIG9ialtrZXkucmVwbGFjZSgvXi4qW1xcPnxcXC9dKFteXFw+fFxcL10rKSQvaWcsICckMScpXVxuXHRcdH1cblx0XHRyZXR1cm4gIWxvY2FsXG5cdFx0XHQmJiB0aGlzLnBhcmVudFxuXHRcdFx0JiYgdGhpcy5wYXJlbnQuZGVsZXRlU25hcHNob3RCeUtleShrZXkpXG5cdFx0XHR8fFxuXHRcdFx0dGhpcy5zdG9yZXMuJHBhcmVudFxuXHRcdFx0JiYgdGhpcy5zdG9yZXMuJHBhcmVudC5kZWxldGVTbmFwc2hvdEJ5S2V5KGtleSk7XG5cdH1cblx0XG5cdHNldFN0YXRlKCBwU3RhdGUgKSB7XG5cdFx0T2JqZWN0LmtleXMocFN0YXRlKVxuXHRcdCAgICAgIC5mb3JFYWNoKGsgPT4gKHRoaXMuc3RhdGVba10gPSBwU3RhdGVba10pKVxuXHR9XG5cdFxuXHQvKipcblx0ICogZ2V0IGEgcGFyc2VkIHJlZmVyZW5jZVxuXHQgKiBAcGFyYW0gX3JlZlxuXHQgKiBAcmV0dXJucyB7e3N0b3JlSWQsIHBhdGgsIGFsaWFzOiAqLCByZWY6ICp9fVxuXHQgKi9cblx0cGFyc2VSZWYoIF9yZWYgKSB7XG5cdFx0aWYgKCB0eXBlb2YgX3JlZiAhPT0gJ3N0cmluZycgKSB7Ly8gQHRvZG8gOiBybSB0aGlzXG5cdFx0XHR0aGlzLnJlZ2lzdGVyKHsgW19yZWYubmFtZV06IF9yZWYuc3RvcmUgfSk7XG5cdFx0XHRfcmVmID0gX3JlZi5uYW1lO1xuXHRcdH1cblx0XHRsZXQgcmVmID0gX3JlZi5zcGxpdCgnOicpO1xuXHRcdHJlZlswXSAgPSByZWZbMF0uc3BsaXQoJy4nKTtcblx0XHRyZXR1cm4ge1xuXHRcdFx0c3RvcmVJZDogcmVmWzBdWzBdLFxuXHRcdFx0cGF0aCAgIDogcmVmWzBdLFxuXHRcdFx0YWxpYXMgIDogcmVmWzFdIHx8IHJlZlswXVtyZWZbMF0ubGVuZ3RoIC0gMV0sXG5cdFx0XHRyZWYgICAgOiBfcmVmXG5cdFx0fTtcblx0fVxuXHRcblx0LyoqXG5cdCAqIERpc3BhdGNoIGFuIGFjdGlvbiB0byB0aGUgdG9wIHBhcmVudCAmIG1peGVkIHNjb3BlcywgaW4gYWxsIHN0b3Jlc1xuXHQgKlxuXHQgKiBAcGFyYW0gYWN0aW9uXG5cdCAqIEBwYXJhbSBkYXRhXG5cdCAqIEByZXR1cm5zIHtTY29wZX1cblx0ICovXG5cdGRpc3BhdGNoKCBhY3Rpb24sIC4uLmFyZ3ogKSB7XG5cdFx0aWYgKCB0aGlzLmRlYWQgKSB7XG5cdFx0XHRjb25zb2xlLndhcm4oXCJEaXNwYXRjaCB3YXMgY2FsbGVkIG9uIGEgZGVhZCBzY29wZSwgY2hlY2sgeW91J3JlIGFzeW5jIGZ1bmN0aW9ucyBpbiB0aGlzIHN0YWNrLi4uXCIsIChuZXcgRXJyb3IoKSkuc3RhY2spO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRsZXQgYkFjdHMgPSB0aGlzLl8uX2JvdW5kZWRBY3Rpb25zO1xuXHRcdE9iamVjdC5rZXlzKHRoaXMuXy5fc2NvcGUpXG5cdFx0ICAgICAgLmZvckVhY2goXG5cdFx0XHQgICAgICBpZCA9PiB7XG5cdFx0XHRcdCAgICAgIGlmICggaWQgPT0gXCIkcGFyZW50XCIgKSByZXR1cm47XG5cdFx0XHRcdCAgICAgIGlmICggIWlzLmZuKHRoaXMuXy5fc2NvcGVbaWRdKSApXG5cdFx0XHRcdFx0ICAgICAgdGhpcy5fLl9zY29wZVtpZF0udHJpZ2dlcihhY3Rpb24sIC4uLmFyZ3opO1xuXHRcdFx0ICAgICAgfVxuXHRcdCAgICAgICk7XG5cdFx0XG5cdFx0aWYgKCBiQWN0cyAmJiBiQWN0cy50ZXN0KGFjdGlvbikgKVxuXHRcdFx0cmV0dXJuO1xuXHRcdFxuXHRcdHRoaXMuXy5fbWl4ZWQuZm9yRWFjaCgoIGN0eCApID0+IChjdHguZGlzcGF0Y2goYWN0aW9uLCAuLi5hcmd6KSkpO1xuXHRcdHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LmRpc3BhdGNoKGFjdGlvbiwgLi4uYXJneik7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblx0XG5cdC8vXG5cdHRyaWdnZXIoKSB7XG5cdFx0dGhpcy5kaXNwYXRjaCguLi5hcmd1bWVudHMpO1xuXHR9XG5cdFxuXHQvKipcblx0ICogb25jZSgnc3RhYmxlJywgY2IpXG5cdCAqIEBwYXJhbSBvYmoge1JlYWN0LkNvbXBvbmVudHxTdG9yZXxmdW5jdGlvbilcblx0ICogQHBhcmFtIGtleSB7c3RyaW5nfSBvcHRpb25hbCBrZXkgd2hlcmUgdG8gbWFwIHRoZSBwdWJsaWMgc3RhdGVcblx0ICovXG5cdHRoZW4oIGNiICkge1xuXHRcdGlmICggIXRoaXMuX3N0YWJsZSApXG5cdFx0XHRyZXR1cm4gdGhpcy5vbmNlKCdzdGFibGUnLCBlID0+IHRoaXMudGhlbihjYikpO1xuXHRcdFxuXHRcdHJldHVybiBjYih0aGlzLmRhdGEpO1xuXHR9XG5cdFxuXHRvbmNlU3RhYmxlVHJlZSggY2IgKSB7XG5cdFx0aWYgKCB0aGlzLl8udW5TdGFibGVDaGlsZHMgKVxuXHRcdFx0cmV0dXJuIHRoaXMub25jZSgnc3RhYmxlVHJlZScsIGUgPT4gdGhpcy5vbmNlU3RhYmxlVHJlZShjYikpO1xuXHRcdGlmICggIXRoaXMuX3N0YWJsZSApXG5cdFx0XHRyZXR1cm4gdGhpcy5vbmNlKCdzdGFibGUnLCBlID0+IHRoaXMub25jZVN0YWJsZVRyZWUoY2IpKTtcblx0XHRcblx0XHRyZXR1cm4gY2IodGhpcy5kYXRhKTtcblx0fVxuXHRcblx0LyoqXG5cdCAqIENhbGwgcmV0YWluIG9uIHRoZSBzY29wZWQgc3RvcmVzIGJhc2luZyBnaXZlblxuXHQgKlxuXHQgKiBAcGFyYW0gc3RvcmVzXG5cdCAqIEBwYXJhbSByZWFzb25cblx0ICovXG5cdHJldGFpblN0b3Jlcyggc3RvcmVzID0gW10sIHJlYXNvbiApIHtcblx0XHQvL3N0b3Jlcy5mb3JFYWNoKFxuXHRcdC8vICAgIGlkID0+ICggKCAhdGhpcy5zdG9yZXNbIGlkIF0gfHwgIXRoaXMuc3RvcmVzWyBpZCBdLnJldGFpbiApICYmIGNvbnNvbGUud2FybihpZCwgcmVhc29uKSApXG5cdFx0Ly8pXG5cdFx0c3RvcmVzLmZvckVhY2goXG5cdFx0XHRpZCA9PiAodGhpcy5zdG9yZXNbaWRdICYmIHRoaXMuc3RvcmVzW2lkXS5yZXRhaW4gJiYgdGhpcy5zdG9yZXNbaWRdLnJldGFpbihyZWFzb24pKVxuXHRcdClcblx0fVxuXHRcblx0LyoqXG5cdCAqIENhbGwgcmV0YWluIG9uIHRoZSBzY29wZWQgc3RvcmVzXG5cdCAqXG5cdCAqIEBwYXJhbSBzdG9yZXNcblx0ICogQHBhcmFtIHJlYXNvblxuXHQgKi9cblx0ZGlzcG9zZVN0b3Jlcyggc3RvcmVzID0gW10sIHJlYXNvbiApIHtcblx0XHRzdG9yZXMuZm9yRWFjaChcblx0XHRcdGlkID0+ICh0aGlzLnN0b3Jlc1tpZF0gJiYgdGhpcy5zdG9yZXNbaWRdLmRpc3Bvc2UgJiYgdGhpcy5zdG9yZXNbaWRdLmRpc3Bvc2UocmVhc29uKSlcblx0XHQpXG5cdH1cblx0XG5cdC8qKlxuXHQgKiBLZWVwIHRoZSBzY29wZSB1bnN0YWJsZSB1bnRpbCByZWxlYXNlIGlzIGNhbGxlZFxuXHQgKiBAcGFyYW0gcmVhc29uXG5cdCAqL1xuXHR3YWl0KCByZWFzb24gKSB7XG5cdFx0Ly9jb25zb2xlLmxvZyhcIndhaXRcIiwgcmVhc29uKTtcblx0XHR0aGlzLl9zdGFibGUgJiYgIXRoaXMuX19sb2Nrcy5hbGwgJiYgdGhpcy5lbWl0KFwidW5zdGFibGVcIiwgdGhpcyk7XG5cdFx0dGhpcy5fc3RhYmxlID0gZmFsc2U7XG5cdFx0dGhpcy5fX2xvY2tzLmFsbCsrO1xuXHRcdGlmICggcmVhc29uICkge1xuXHRcdFx0dGhpcy5fX2xvY2tzW3JlYXNvbl0gPSB0aGlzLl9fbG9ja3NbcmVhc29uXSB8fCAwO1xuXHRcdFx0dGhpcy5fX2xvY2tzW3JlYXNvbl0rKztcblx0XHR9XG5cdH1cblx0XG5cdFxuXHQvKipcblx0ICogU3RhYmlsaXplIHRoZSBzY29wZSBpZiBubyBtb3JlIGxvY2tzIHJlbWFpbiAod2FpdCBmbilcblx0ICogQHBhcmFtIHJlYXNvblxuXHQgKi9cblx0cmVsZWFzZSggcmVhc29uICkge1xuXHRcdFxuXHRcdGlmICggcmVhc29uICkge1xuXHRcdFx0aWYgKCB0aGlzLl9fbG9ja3NbcmVhc29uXSA9PSAwIClcblx0XHRcdFx0Y29uc29sZS5lcnJvcihcIlJlbGVhc2UgbW9yZSB0aGFuIGxvY2tpbmcgIVwiLCByZWFzb24pO1xuXHRcdFx0dGhpcy5fX2xvY2tzW3JlYXNvbl0gPSB0aGlzLl9fbG9ja3NbcmVhc29uXSB8fCAwO1xuXHRcdFx0dGhpcy5fX2xvY2tzW3JlYXNvbl0tLTtcblx0XHR9XG5cdFx0aWYgKCAhcmVhc29uICYmIHRoaXMuX19sb2Nrcy5hbGwgPT0gMCApXG5cdFx0XHRjb25zb2xlLmVycm9yKFwiUmVsZWFzZSBtb3JlIHRoYW4gbG9ja2luZyAhXCIpO1xuXHRcdFxuXHRcdHRoaXMuX19sb2Nrcy5hbGwtLTtcblx0XHRpZiAoICF0aGlzLl9fbG9ja3MuYWxsICkge1xuXHRcdFx0dGhpcy5fLnN0YWJpbGl6ZXJUTSAmJiBjbGVhclRpbWVvdXQodGhpcy5fLnN0YWJpbGl6ZXJUTSk7XG5cdFx0XHRcblx0XHRcdHRoaXMuXy5zdGFiaWxpemVyVE0gPSBzZXRUaW1lb3V0KFxuXHRcdFx0XHRlID0+IHtcblx0XHRcdFx0XHR0aGlzLl8uc3RhYmlsaXplclRNID0gbnVsbDtcblx0XHRcdFx0XHRpZiAoIHRoaXMuX19sb2Nrcy5hbGwgKVxuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdHRoaXMuXy5wcm9wYWdUTSAmJiBjbGVhclRpbWVvdXQodGhpcy5fLnByb3BhZ1RNKTtcblx0XHRcdFx0XHR0aGlzLl9yZXYrKztcblx0XHRcdFx0XHR0aGlzLl9zdGFibGUgPSB0cnVlO1xuXHRcdFx0XHRcdHRoaXMuZW1pdChcInN0YWJsZVwiLCB0aGlzKTtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHQhdGhpcy5kZWFkICYmIHRoaXMuX3Byb3BhZygpOy8vIHN0YWJpbGl0eSBjYW4gaW5kdWNlIGRlc3Ryb3lcblx0XHRcdFx0fVxuXHRcdFx0KTtcblx0XHR9XG5cdFx0XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBQcm9wYWcgc3RvcmVzIHVwZGF0ZXMgYmFzaW5nIHRoZWlycyBsYXN0IHVwZGF0ZXNcblx0ICovXG5cdHByb3BhZygpIHtcblx0XHR0aGlzLl8ucHJvcGFnVE0gJiYgY2xlYXJUaW1lb3V0KHRoaXMuXy5wcm9wYWdUTSk7XG5cdFx0dGhpcy5fLnByb3BhZ1RNID0gc2V0VGltZW91dChcblx0XHRcdGUgPT4ge1xuXHRcdFx0XHR0aGlzLl8ucHJvcGFnVE0gPSBudWxsO1xuXHRcdFx0XHR0aGlzLl9wcm9wYWcoKVxuXHRcdFx0fSwgMlxuXHRcdCk7XG5cdH1cblx0XG5cdF9wcm9wYWcoKSB7XG5cdFx0aWYgKCB0aGlzLl8uZm9sbG93ZXJzLmxlbmd0aCApXG5cdFx0XHR0aGlzLl8uZm9sbG93ZXJzLmZvckVhY2goKCB7IDA6IG9iaiwgMToga2V5LCAyOiBhcywgMzogbGFzdFJldnMsIDM6IHJlbWFwcyB9ICkgPT4ge1xuXHRcdFx0XHRsZXQgZGF0YSA9IHRoaXMuZ2V0VXBkYXRlcyhsYXN0UmV2cyk7XG5cdFx0XHRcdGlmICggIWRhdGEgKSByZXR1cm47XG5cdFx0XHRcdC8vY29uc29sZS5sb2coZGF0YSwgbGFzdFJldnMpXG5cdFx0XHRcdGlmICggdHlwZW9mIG9iaiAhPSBcImZ1bmN0aW9uXCIgKSB7XG5cdFx0XHRcdFx0Ly9jb25zb2xlLmxvZyhcInNldFN0YXRlIFwiLG9iaiwgT2JqZWN0LmtleXMoZGF0YSkpXG5cdFx0XHRcdFx0aWYgKCBhcyApIG9iai5zZXRTdGF0ZSh7IFthc106IGRhdGEgfSk7XG5cdFx0XHRcdFx0ZWxzZSBvYmouc2V0U3RhdGUoZGF0YSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0b2JqKGRhdGEsIGxhc3RSZXZzICYmIFsuLi5sYXN0UmV2c10gfHwgXCJubyByZXZzXCIpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIGxhc3RSZXZzICYmXG5cdFx0XHRcdC8vIGtleS5mb3JFYWNoKGlkID0+IChsYXN0UmV2c1tpZF0gPSB0aGlzLnN0b3Jlc1tpZF0gJiZcblx0XHRcdFx0Ly8gdGhpcy5zdG9yZXNbaWRdLl9yZXYgfHwgMCkpO1xuXHRcdFx0fSk7XG5cdFx0dGhpcy5lbWl0KFwidXBkYXRlXCIsIHRoaXMuZ2V0VXBkYXRlcygpKTtcblx0fVxuXHRcblx0LyoqXG5cdCAqIGlzIHN0YWJsZVxuXHQgKiBAcmV0dXJucyBib29sXG5cdCAqL1xuXHRpc1N0YWJsZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5fc3RhYmxlO1xuXHR9XG5cdFxuXHQvKipcblx0ICogaXMgc3RhYmxlXG5cdCAqIEByZXR1cm5zIGJvb2xcblx0ICovXG5cdGlzU3RhYmxlVHJlZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5fc3RhYmxlICYmICF0aGlzLl8udW5TdGFibGVDaGlsZHM7XG5cdH1cblx0XG5cdF9hZGRDaGlsZCggY3R4ICkge1xuXHRcdHRoaXMuXy5jaGlsZFNjb3Blcy5wdXNoKGN0eCk7XG5cdFx0dGhpcy5fLnNlZW5DaGlsZHMrKztcblx0XHRsZXQgbGlzdHMgICAgID0ge1xuXHRcdFx0ICAgICdzdGFibGUnICAgICAgOiBzID0+IHtcblx0XHRcdFx0ICAgIHRoaXMuXy51blN0YWJsZUNoaWxkcy0tO1xuXHRcdFx0XHQgICAgaWYgKCAhdGhpcy5fLnVuU3RhYmxlQ2hpbGRzIClcblx0XHRcdFx0XHQgICAgdGhpcy5lbWl0KFwic3RhYmxlVHJlZVwiLCB0aGlzKVxuXHRcdFx0ICAgIH0sXG5cdFx0XHQgICAgJ3Vuc3RhYmxlJyAgICA6IHMgPT4ge1xuXHRcdFx0XHQgICAgdGhpcy5fLnVuU3RhYmxlQ2hpbGRzKys7XG5cdFx0XHRcdCAgICBpZiAoIDEgPT0gdGhpcy5fLnVuU3RhYmxlQ2hpbGRzIClcblx0XHRcdFx0XHQgICAgdGhpcy5lbWl0KFwidW5zdGFibGVUcmVlXCIsIHRoaXMpXG5cdFx0XHQgICAgfSxcblx0XHRcdCAgICAnc3RhYmxlVHJlZScgIDogcyA9PiB7XG5cdFx0XHRcdCAgICB0aGlzLl8udW5TdGFibGVDaGlsZHMtLTtcblx0XHRcdFx0ICAgIGlmICggIXRoaXMuXy51blN0YWJsZUNoaWxkcyApXG5cdFx0XHRcdFx0ICAgIHRoaXMuZW1pdChcInN0YWJsZVRyZWVcIiwgdGhpcylcblx0XHRcdCAgICB9LFxuXHRcdFx0ICAgICd1bnN0YWJsZVRyZWUnOiBzID0+IHtcblx0XHRcdFx0ICAgIHRoaXMuXy51blN0YWJsZUNoaWxkcysrO1xuXHRcdFx0XHQgICAgaWYgKCAxID09IHRoaXMuXy51blN0YWJsZUNoaWxkcyApXG5cdFx0XHRcdFx0ICAgIHRoaXMuZW1pdChcInVuc3RhYmxlVHJlZVwiLCB0aGlzKVxuXHRcdFx0ICAgIH0sXG5cdFx0XHQgICAgJ2Rlc3Ryb3knICAgICA6IGN0eCA9PiB7XG5cdFx0XHRcdCAgICBpZiAoIGN0eC5fLnVuU3RhYmxlQ2hpbGRzIClcblx0XHRcdFx0XHQgICAgdGhpcy5fLnVuU3RhYmxlQ2hpbGRzLS07XG5cdFx0XHRcdCAgICBpZiAoICFjdHguaXNTdGFibGUoKSApXG5cdFx0XHRcdFx0ICAgIHRoaXMuXy51blN0YWJsZUNoaWxkcy0tO1xuXHRcdFx0XHRcblx0XHRcdFx0ICAgIGlmICggIXRoaXMuXy51blN0YWJsZUNoaWxkcyApXG5cdFx0XHRcdFx0ICAgIHRoaXMuZW1pdChcInN0YWJsZVRyZWVcIiwgdGhpcylcblx0XHRcdCAgICB9XG5cdFx0ICAgIH0sXG5cdFx0ICAgIHdhc1N0YWJsZSA9IHRoaXMuXy51blN0YWJsZUNoaWxkcztcblx0XHQvLyFjdHguaXNTdGFibGUoKSAmJiBjb25zb2xlLndhcm4oJ2FkZCB1bnN0YWJsZSBjaGlsZCcpO1xuXHRcdCFjdHguaXNTdGFibGUoKSAmJiB0aGlzLl8udW5TdGFibGVDaGlsZHMrKztcblx0XHRjdHguXy51blN0YWJsZUNoaWxkcyAmJiB0aGlzLl8udW5TdGFibGVDaGlsZHMrKztcblx0XHR0aGlzLl8uY2hpbGRTY29wZXNMaXN0LnB1c2gobGlzdHMpO1xuXHRcdGlmICggIXdhc1N0YWJsZSAmJiB0aGlzLl8udW5TdGFibGVDaGlsZHMgKVxuXHRcdFx0dGhpcy5lbWl0KFwidW5zdGFibGVUcmVlXCIsIHRoaXMpXG5cdFx0Y3R4Lm9uKGxpc3RzKTtcblx0fVxuXHRcblx0X3JtQ2hpbGQoIGN0eCApIHtcblx0XHRsZXQgaSAgICAgICAgID0gdGhpcy5fLmNoaWxkU2NvcGVzLmluZGV4T2YoY3R4KSxcblx0XHQgICAgd2FzU3RhYmxlID0gdGhpcy5fLnVuU3RhYmxlQ2hpbGRzO1xuXHRcdGlmICggaSAhPSAtMSApIHtcblx0XHRcdHRoaXMuXy5jaGlsZFNjb3Blcy5zcGxpY2UoaSwgMSk7XG5cdFx0XHQhY3R4LmlzU3RhYmxlKCkgJiYgdGhpcy5fLnVuU3RhYmxlQ2hpbGRzLS07XG5cdFx0XHRjdHguXy51blN0YWJsZUNoaWxkcyAmJiB0aGlzLl8udW5TdGFibGVDaGlsZHMtLTtcblx0XHRcdGN0eC51bih0aGlzLl8uY2hpbGRTY29wZXNMaXN0LnNwbGljZShpLCAxKVswXSk7XG5cdFx0XHRpZiAoIHdhc1N0YWJsZSAmJiAhdGhpcy5fLnVuU3RhYmxlQ2hpbGRzIClcblx0XHRcdFx0dGhpcy5lbWl0KFwic3RhYmxlVHJlZVwiKVxuXHRcdH1cblx0fVxuXHRcblx0cmV0YWluKCByZWFzb24gKSB7XG5cdFx0dGhpcy5fX3JldGFpbnMuYWxsKys7XG5cdFx0Ly9jb25zb2xlLmxvZyhcInJldGFpblwiLCB0aGlzLl9pZCwgcmVhc29uKTtcblx0XHRpZiAoIHJlYXNvbiApIHtcblx0XHRcdHRoaXMuX19yZXRhaW5zW3JlYXNvbl0gPSB0aGlzLl9fcmV0YWluc1tyZWFzb25dIHx8IDA7XG5cdFx0XHR0aGlzLl9fcmV0YWluc1tyZWFzb25dKys7XG5cdFx0fVxuXHR9XG5cdFxuXHRkaXNwb3NlKCByZWFzb24gKSB7XG5cdFx0Ly9jb25zb2xlLmxvZyhcImRpc3Bvc2VcIiwgdGhpcy5faWQsIHJlYXNvbik7XG5cdFx0aWYgKCByZWFzb24gKSB7XG5cdFx0XHRpZiAoICF0aGlzLl9fcmV0YWluc1tyZWFzb25dIClcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiRGlzcG9zZSBtb3JlIHRoYW4gcmV0YWluaW5nIDogXCIgKyByZWFzb24pO1xuXHRcdFx0dGhpcy5fX3JldGFpbnNbcmVhc29uXS0tO1xuXHRcdH1cblx0XHRcblx0XHRpZiAoICF0aGlzLl9fcmV0YWlucy5hbGwgKVxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiRGlzcG9zZSBtb3JlIHRoYW4gcmV0YWluaW5nICFcIik7XG5cdFx0XG5cdFx0dGhpcy5fX3JldGFpbnMuYWxsLS07XG5cdFx0XG5cdFx0aWYgKCAhdGhpcy5fX3JldGFpbnMuYWxsICkge1xuXHRcdFx0Ly9jb25zb2xlLmxvZyhcImRpc3Bvc2UgZG8gZGVzdHJveSBcIiwgdGhpcy5faWQsIHRoaXMuX3BlcnNpc3RlbmNlVG0pO1xuXHRcdFx0aWYgKCB0aGlzLl8ucGVyc2lzdGVuY2VUbSApIHtcblx0XHRcdFx0dGhpcy5fLmRlc3Ryb3lUTSAmJiBjbGVhclRpbWVvdXQodGhpcy5fLmRlc3Ryb3lUTSk7XG5cdFx0XHRcdHRoaXMuXy5kZXN0cm95VE0gPSBzZXRUaW1lb3V0KFxuXHRcdFx0XHRcdGUgPT4ge1xuXHRcdFx0XHRcdFx0dGhpcy50aGVuKHMgPT4ge1xuXHRcdFx0XHRcdFx0XHQhdGhpcy5fX3JldGFpbnMuYWxsICYmICF0aGlzLmRlYWQgJiYgdGhpcy5kZXN0cm95KClcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0dGhpcy5fLnBlcnNpc3RlbmNlVG1cblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHR0aGlzLnRoZW4ocyA9PlxuXHRcdFx0XHRcdCAgICAgICAgICAoIXRoaXMuX19yZXRhaW5zLmFsbCAmJiAhdGhpcy5kZWFkICYmIHRoaXMuZGVzdHJveSgpKVxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRcblx0LyoqXG5cdCAqIG9yZGVyIGRlc3Ryb3kgb2YgbG9jYWwgc3RvcmVzXG5cdCAqL1xuXHRkZXN0cm95KCkge1xuXHRcdGxldCBjdHggPSB0aGlzLl8uX3Njb3BlO1xuXHRcdC8vY29uc29sZS53YXJuKFwiZGVzdHJveVwiLCB0aGlzLl9pZCk7XG5cdFx0dGhpcy5fLnN0YWJpbGl6ZXJUTSAmJiBjbGVhclRpbWVvdXQodGhpcy5fLnN0YWJpbGl6ZXJUTSk7XG5cdFx0dGhpcy5fLnByb3BhZ1RNICYmIGNsZWFyVGltZW91dCh0aGlzLl8ucHJvcGFnVE0pO1xuXHRcdE9iamVjdC5rZXlzKFxuXHRcdFx0dGhpcy5fLl9saXN0ZW5pbmdcblx0XHQpLmZvckVhY2goXG5cdFx0XHRpZCA9PiAoKGlkICE9PSBcIiRwYXJlbnRcIikgJiYgdGhpcy5fLl9zY29wZVtpZF0ucmVtb3ZlTGlzdGVuZXIodGhpcy5fLl9saXN0ZW5pbmdbaWRdKSlcblx0XHQpO1xuXHRcdHdoaWxlICggdGhpcy5fLl9taXhlZExpc3QubGVuZ3RoICkge1xuXHRcdFx0dGhpcy5fLl9taXhlZFswXS5yZW1vdmVMaXN0ZW5lcih0aGlzLl8uX21peGVkTGlzdC5zaGlmdCgpKTtcblx0XHRcdHRoaXMuXy5fbWl4ZWQuc2hpZnQoKS5kaXNwb3NlKFwibWl4ZWRUb1wiKTtcblx0XHR9XG5cdFx0Wy4uLnRoaXMuXy5mb2xsb3dlcnNdLm1hcChmb2xsb3dlciA9PiB0aGlzLnVuQmluZCguLi5mb2xsb3dlcikpO1xuXHRcdGZvciAoIGxldCBrZXkgaW4gY3R4IClcblx0XHRcdGlmICggIWlzLmZuKGN0eFtrZXldKSApIHtcblx0XHRcdFx0aWYgKCBrZXkgPT0gXCIkcGFyZW50XCIgKSBjb250aW51ZTtcblx0XHRcdFx0IWN0eFtrZXldLl9hdXRvRGVzdHJveSAmJiBjdHhba2V5XS5kaXNwb3NlKFwic2NvcGVkXCIpO1xuXHRcdFx0fVxuXHRcdGlmICggdGhpcy5fLl9wYXJlbnRMaXN0ICkge1xuXHRcdFx0dGhpcy5wYXJlbnQuX3JtQ2hpbGQodGhpcyk7XG5cdFx0XHR0aGlzLnBhcmVudC5yZW1vdmVMaXN0ZW5lcih0aGlzLl8uX3BhcmVudExpc3QpO1xuXHRcdFx0dGhpcy5wYXJlbnQuZGlzcG9zZShcImlzTXlQYXJlbnRcIik7XG5cdFx0XHR0aGlzLl8uX3BhcmVudExpc3QgPSBudWxsO1xuXHRcdH1cblx0XHR0aGlzLmRlYWQgPSB0cnVlO1xuXHRcdHRoaXMuZW1pdChcImRlc3Ryb3lcIiwgdGhpcyk7XG5cdFx0XG5cdFx0XG5cdFx0Ly9pZiAoICF0aGlzLl8uaXNMb2NhbElkIClcblx0XHRkZWxldGUgb3BlblNjb3Blc1t0aGlzLl9pZF07XG5cdFx0XG5cdFx0Ly90aGlzLl8gPSBudWxsO1xuXHRcdFxuXHR9XG59XG5cblxuaXMucnNTY29wZSA9IGZ1bmN0aW9uICggb2JqICkge1xuXHRyZXR1cm4gb2JqIGluc3RhbmNlb2YgU2NvcGVcbn1cblxuaXMucnNTY29wZUNsYXNzID0gZnVuY3Rpb24gKCBvYmogKSB7XG5cdHJldHVybiBTY29wZS5pc1Byb3RvdHlwZU9mKG9iaikgfHwgb2JqID09PSBTY29wZVxufVxuZXhwb3J0IGRlZmF1bHQgU2NvcGU7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1Njb3BlLmpzIiwidmFyIGlzID0gcmVxdWlyZSgnaXMnKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIC4uLmlzXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbHMvaXMuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImlzXCJcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGlzID0gcmVxdWlyZSgnLi9pcycpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHdhbGtuU2V0KCBvYmosIHBhdGgsIHZhbHVlLCBzdGFjayApIHtcclxuICAgIGlmICggaXMuc3RyaW5nKHBhdGgpIClcclxuICAgICAgICBwYXRoID0gcGF0aC5zcGxpdCgnLicpO1xyXG4gICAgaWYgKCAhcGF0aC5sZW5ndGggKVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIGVsc2UgaWYgKCBwYXRoLmxlbmd0aCA9PSAxIClcclxuICAgICAgICByZXR1cm4gb2JqWyBwYXRoWyAwIF0gXSA9IHN0YWNrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFsgLi4uKCBvYmpbIHBhdGhbIDAgXSBdIHx8IFtdICksIHZhbHVlIF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdmFsdWU7XHJcbiAgICBlbHNlXHJcbiAgICAgICAgcmV0dXJuIHdhbGtuU2V0KFxyXG4gICAgICAgICAgICBvYmpbIHBhdGhbIDAgXSBdID1cclxuICAgICAgICAgICAgICAgIG9ialsgcGF0aFsgMCBdIF0gfHwge30sXHJcbiAgICAgICAgICAgIHBhdGguc2xpY2UoMSksXHJcbiAgICAgICAgICAgIHZhbHVlLCBzdGFja1xyXG4gICAgICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB3YWxrbkdldCggb2JqLCBwYXRoLCBpc0tleSApIHtcclxuICAgIGlmICggaXMuc3RyaW5nKHBhdGgpIClcclxuICAgICAgICBwYXRoID0gcGF0aC5zcGxpdCgnLicpO1xyXG4gICAgcmV0dXJuIHBhdGgubGVuZ3RoXHJcbiAgICAgICAgICAgPyBvYmpbIHBhdGhbIDAgXSBdICYmIHdhbGtuR2V0KG9ialsgcGF0aFsgMCBdIF0sIHBhdGguc2xpY2UoMSkpXHJcbiAgICAgICAgICAgOiBvYmo7XHJcbn1cclxuXHJcbi8vQHRvZG9cclxuZXhwb3J0IGZ1bmN0aW9uIGtleVdhbGtuU2V0KCBvYmosIHBhdGgsIHZhbHVlLCBzdGFjayApIHtcclxuICAgIGlmICggaXMuc3RyaW5nKHBhdGgpIClcclxuICAgICAgICBwYXRoID0gcGF0aC5zcGxpdCgvKFxcPnxcXC8pL2lnKS5maWx0ZXIodiA9PiAoIHYgIT09ICc+JyAmJiB2ICkpO1xyXG4gICAgcmV0dXJuIHdhbGtuU2V0KG9iaiwgcGF0aCwgdmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24ga2V5V2Fsa25HZXQoIG9iaiwgcGF0aCwgaXNLZXkgKSB7XHJcbiAgICBpZiAoIGlzLnN0cmluZyhwYXRoKSApXHJcbiAgICAgICAgcGF0aCA9IHBhdGguc3BsaXQoLyhcXD58XFwvKS9pZykuZmlsdGVyKHYgPT4gKCB2ICE9PSAnPicgJiYgdiApKTtcclxuICAgIHJldHVybiBwYXRoLmxlbmd0aFxyXG4gICAgICAgICAgID8gb2JqWyBwYXRoWyAwIF0gXSAmJiB3YWxrbkdldChvYmpbIHBhdGhbIDAgXSBdLCBwYXRoLnNsaWNlKDEpKVxyXG4gICAgICAgICAgIDogb2JqO1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWxzL3V0aWxzLmpzIiwiLypcbiAqIENvcHlyaWdodCAoYykgIDIwMTggV2lzZSBXaWxkIFdlYiAuXG4gKlxuICogIE1JVCBMaWNlbnNlXG4gKiAgXG4gKiAgUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqICBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiAgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKiAgXG4gKiAgVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG4gKiAgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqICBcbiAqICBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiAgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiAgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiAgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiAgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcbiAqICBTT0ZUV0FSRS5cbiAqICBcbiAqIEBhdXRob3IgOiBOYXRoYW5hZWwgQnJhdW5cbiAqIEBjb250YWN0IDogY2FpcGlsYWJzQGdtYWlsLmNvbVxuICovXG52YXIgaXMgPSByZXF1aXJlKCdpcycpO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW1pdHRlciB7XG4gICAgX2V2ZW50cyA9IHt9O1xuICAgIFxuICAgIG9uKCBldnQsIGNiICkge1xuICAgICAgICBpZiAoICFpcy5zdHJpbmcoZXZ0KSAmJiBldnQgKVxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKGV2dCkuZm9yRWFjaChrID0+IHRoaXMub24oaywgZXZ0W2tdKSk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9ldmVudHNbZXZ0XSA9IHRoaXMuX2V2ZW50c1tldnRdIHx8IFtdO1xuICAgICAgICB0aGlzLl9ldmVudHNbZXZ0XS5wdXNoKGNiKTtcbiAgICAgICAgXG4gICAgfVxuICAgIFxuICAgIHVuKCBldnQsIGNiICkge1xuICAgICAgICBpZiAoICFpcy5zdHJpbmcoZXZ0KSAmJiBldnQgKVxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKGV2dCkuZm9yRWFjaChrID0+IHRoaXMudW4oaywgZXZ0W2tdKSk7XG4gICAgICAgIFxuICAgICAgICBpZiAoICF0aGlzLl9ldmVudHNbZXZ0XSApIHJldHVybjtcbiAgICAgICAgdmFyIGkgPSB0aGlzLl9ldmVudHNbZXZ0XS5pbmRleE9mKGNiKTtcbiAgICAgICAgdGhpcy5fZXZlbnRzW2V2dF0uc3BsaWNlKGksIDEpO1xuICAgIH1cbiAgICBcbiAgICBlbWl0KCBldnQsIC4uLmFyZ3ogKSB7XG4gICAgICAgIGlmICggIXRoaXMuX2V2ZW50c1tldnRdICkgcmV0dXJuO1xuICAgICAgICBsZXQgbGlzdHMgPSBbLi4udGhpcy5fZXZlbnRzW2V2dF1dO1xuICAgICAgICBcbiAgICAgICAgZm9yICggdmFyIGkgPSAwOyBpIDwgbGlzdHMubGVuZ3RoOyBpKysgKVxuICAgICAgICAgICAgbGlzdHNbaV0oLi4uYXJneilcbiAgICB9XG4gICAgXG4gICAgYWRkTGlzdGVuZXIoKSB7XG4gICAgICAgIHRoaXMub24oLi4uYXJndW1lbnRzKTtcbiAgICB9XG4gICAgXG4gICAgcmVtb3ZlTGlzdGVuZXIoKSB7XG4gICAgICAgIHRoaXMudW4oLi4uYXJndW1lbnRzKTtcbiAgICB9XG4gICAgXG4gICAgcmVtb3ZlQWxsTGlzdGVuZXJzKCkge1xuICAgICAgICB0aGlzLl9ldmVudHMgPSB7fTtcbiAgICB9XG4gICAgXG4gICAgb25jZSggZXZ0LCBjYiApIHtcbiAgICAgICAgbGV0IGZuO1xuICAgICAgICB0aGlzLm9uKGV2dCwgZm4gPSAoIC4uLmFyZ3ogKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnVuKGV2dCwgZm4pO1xuICAgICAgICAgICAgY2IoLi4uYXJneilcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIFxuICAgIFxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlscy9FbWl0dGVyLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2hvcnRpZFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInNob3J0aWRcIlxuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxuICogQ29weXJpZ2h0IChjKSAgMjAxOCBXaXNlIFdpbGQgV2ViIC5cbiAqXG4gKiAgTUlUIExpY2Vuc2VcbiAqXG4gKiAgUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqICBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiAgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuICogIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqICBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqICBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqICBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiAgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqICBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuICogIFNPRlRXQVJFLlxuICpcbiAqIEBhdXRob3IgOiBOYXRoYW5hZWwgQnJhdW5cbiAqIEBjb250YWN0IDogY2FpcGlsYWJzQGdtYWlsLmNvbVxuICovXG5cbnZhciBpcyAgICAgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi91dGlscy9pcycpLFxuICAgIFNjb3BlICAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL1Njb3BlJyksXG4gICAgeyBrZXlXYWxrblNldCwga2V5V2Fsa25HZXQgfSA9IHJlcXVpcmUoJy4vdXRpbHMvdXRpbHMnKSxcbiAgICBFdmVudEVtaXR0ZXIgICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi91dGlscy9FbWl0dGVyJyksXG4gICAgVGFza1NlcXVlbmNlciAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vdXRpbHMvVGFza1NlcXVlbmNlcicpLFxuICAgIHNob3J0aWQgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlKCdzaG9ydGlkJyksXG4gICAgb2JqUHJvdG8gICAgICAgICAgICAgICAgICAgICA9IE9iamVjdC5nZXRQcm90b3R5cGVPZih7fSk7XG5cbmNsYXNzIFN0b3JlIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcblx0Ly9zdGF0aWMgdXNlICAgICAgICAgICAgICAgICAgPSBbXTsvLyBvdmVycmlkYWJsZSBsaXN0IG9mIHNvdXJjZSBzdG9yZXNcblx0c3RhdGljIGZvbGxvdzsvLyBvdmVycmlkYWJsZSBsaXN0IG9mIHN0b3JlIHRoYXQgd2lsbCBhbGxvdyBwdXNoIGlmIHVwZGF0ZWRcblx0c3RhdGljIHJlcXVpcmU7XG5cdHN0YXRpYyBzdGF0aWNTY29wZSAgID0gbmV3IFNjb3BlKHt9LCB7IGlkOiBcInN0YXRpY1wiIH0pO1xuXHRzdGF0aWMgc3RhdGUgICAgICAgICA9IHVuZGVmaW5lZDsvLyBkZWZhdWx0IHN0YXRlXG5cdC8qKlxuXHQgKiBpZiByZXRhaW4gZ29lcyB0byAwIDpcblx0ICogZmFsc2UgdG8gbm90IGRlc3Ryb3ksXG5cdCAqIDAgdG8gc3luYyBhdXRvIGRlc3Ryb3lcblx0ICogTXMgdG8gYXV0b2Rlc3Ryb3kgYWZ0ZXIgdG0gbXMgaWYgbm8gcmV0YWluIGhhcyBiZWVuIGNhbGxlZFxuXHQgKiBAdHlwZSB7Ym9vbGVhbnxJbnR9XG5cdCAqL1xuXHRzdGF0aWMgcGVyc2lzdGVuY2VUbSA9IGZhbHNlO1xuXHRcblx0LyoqXG5cdCAqIENvbnN0cnVjdG9yLCB3aWxsIGJ1aWxkIGEgcmVzY29wZSBzdG9yZVxuXHQgKlxuXHQgKiAoc2NvcGUsIHtyZXF1aXJlLHVzZSxhcHBseSxzdGF0ZSwgZGF0YX0pXG5cdCAqIChzY29wZSlcblx0ICpcblx0ICogQHBhcmFtIHNjb3BlIHtvYmplY3R9IHNjb3BlIHdoZXJlIHRvIGZpbmQgdGhlIG90aGVyIHN0b3JlcyAoZGVmYXVsdCA6IHN0YXRpY1xuXHQgKiAgICAgc3RhdGljU2NvcGUgKVxuXHQgKiBAcGFyYW0ga2V5cyB7QXJyYXl9IChwYXNzZWQgdG8gU3RvcmU6Om1hcCkgRXggOiBbXCJzZXNzaW9uXCIsIFwib3RoZXJOYW1lZFN0b3JlOmtleVwiLFxuXHQgKiAgICAgb3RoZXJTdG9yZS5hcyhcIm90aGVyS2V5XCIpXVxuXHQgKi9cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0XHR2YXIgYXJneiAgICAgICAgID0gWy4uLmFyZ3VtZW50c10sXG5cdFx0ICAgIF9zdGF0aWMgICAgICA9IHRoaXMuY29uc3RydWN0b3IsXG5cdFx0ICAgIHNjb3BlICAgICAgICA9IGFyZ3pbMF0gaW5zdGFuY2VvZiBTY29wZVxuXHRcdCAgICAgICAgICAgICAgICAgICA/IGFyZ3ouc2hpZnQoKVxuXHRcdCAgICAgICAgICAgICAgICAgICA6IF9zdGF0aWMuc2NvcGUgPyBTY29wZS5nZXRTY29wZShfc3RhdGljLnNjb3BlKVxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBpcy5zdHJpbmcoYXJnelswXSlcblx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBTY29wZS5nZXRTY29wZShhcmd6LnNoaWZ0KCkpXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3N0YXRpYy5zdGF0aWNTY29wZSxcblx0XHQgICAgY2ZnICAgICAgICAgID0gYXJnelswXSAmJiAhaXMuYXJyYXkoYXJnelswXSkgJiYgIWlzLnN0cmluZyhhcmd6WzBdKVxuXHRcdCAgICAgICAgICAgICAgICAgICA/IGFyZ3ouc2hpZnQoKVxuXHRcdCAgICAgICAgICAgICAgICAgICA6IHt9LFxuXHRcdCAgICB0YXNrUXVldWUgICAgPSBpcy5hcnJheShhcmd6WzBdKSA/IGFyZ3ouc2hpZnQoKSA6IG51bGwsXG5cdFx0ICAgIG5hbWUgICAgICAgICA9IGNmZy5uYW1lIHx8IF9zdGF0aWMubmFtZSxcblx0XHQgICAgd2F0Y2hzICAgICAgID0gY2ZnLnVzZSB8fCBbXSxcblx0XHQgICAgYXBwbHkgICAgICAgID0gY2ZnLmFwcGx5IHx8IG51bGwsXG5cdFx0ICAgIGluaXRpYWxTdGF0ZSA9IF9zdGF0aWMuc3RhdGUgfHwgX3N0YXRpYy5pbml0aWFsU3RhdGUgfHwgX3N0YXRpYy5kZWZhdWx0U3RhdGUsXG5cdFx0ICAgIGFwcGxpZWQ7XG5cdFx0XG5cdFx0dGhpcy5fdWlkID0gY2ZnLl91aWQgfHwgc2hvcnRpZC5nZW5lcmF0ZSgpO1xuXHRcdFxuXHRcdHRoaXMuX19yZXRhaW5zICAgID0geyBhbGw6IDAgfTtcblx0XHR0aGlzLl9fbG9ja3MgICAgICA9IHsgYWxsOiAwIH07XG5cdFx0dGhpcy5fb25TdGFiaWxpemUgPSBbXTtcblx0XHRcblx0XHQvLyBhdXRvRGVzdHJveVRtXG5cdFx0dGhpcy5fYXV0b0Rlc3Ryb3kgICA9ICEhdGhpcy5fcGVyc2lzdGVuY2VUbTtcblx0XHR0aGlzLl9wZXJzaXN0ZW5jZVRtID0gY2ZnLnBlcnNpc3RlbmNlVG0gfHwgX3N0YXRpYy5wZXJzaXN0ZW5jZVRtIHx8IChjZmcuYXV0b0Rlc3Ryb3kgfHwgX3N0YXRpYy5hdXRvRGVzdHJveSkgJiYgNTtcblx0XHR0aGlzLl9jZmcgICAgICAgICAgID0gY2ZnO1xuXHRcdGlmICggY2ZnICYmIGNmZy5vbiApIHtcblx0XHRcdHRoaXMub24oY2ZnLm9uKTtcblx0XHR9XG5cdFx0XG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0XHRcblx0XHRpZiAoIHNjb3BlLnN0b3JlcyApIHtcblx0XHRcdHRoaXMuc2NvcGVPYmogPSBzY29wZTtcblx0XHRcdHRoaXMuc2NvcGUgICAgPSBzY29wZS5zdG9yZXM7XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0dGhpcy5zY29wZU9iaiA9IG5ldyBTY29wZShzY29wZSk7XG5cdFx0XHR0aGlzLnNjb3BlICAgID0gc2NvcGUuc3RvcmVzO1xuXHRcdH1cblx0XHRcblx0XHQvLyBzdGFuZGFyZGl6ZWQgc2NvcGUgYWNjZXNzXG5cdFx0dGhpcy4kc2NvcGUgICAgPSB0aGlzLnNjb3BlT2JqO1xuXHRcdHRoaXMuJHN0b3JlcyAgID0gdGhpcy5zY29wZU9iai5zdG9yZXM7XG5cdFx0dGhpcy4kYWN0aW9ucyAgPSB0aGlzLnNjb3BlT2JqLmFjdGlvbnM7XG5cdFx0dGhpcy4kZGlzcGF0Y2ggPSB0aGlzLnNjb3BlT2JqLmRpc3BhdGNoLmJpbmQodGhpcy5zY29wZU9iaik7XG5cdFx0XG5cdFx0dGhpcy5fcmV2ICAgICA9IHRoaXMuY29uc3RydWN0b3IuX3JldiB8fCAwO1xuXHRcdHRoaXMuX3JldnMgICAgPSB7fTtcblx0XHR0aGlzLnN0b3JlcyAgID0ge307XG5cdFx0dGhpcy5fcmVxdWlyZSA9IFtdO1xuXHRcdHRoaXMuX3NvdXJjZXMgPSBbbmFtZV07XG5cdFx0XG5cdFx0aWYgKCBpcy5hcnJheShfc3RhdGljLnVzZSkgKSB7XG5cdFx0XHR0aGlzLl91c2UgPSBbLi4ud2F0Y2hzLCAuLi4oX3N0YXRpYy51c2UgfHwgW10pLm1hcChcblx0XHRcdFx0a2V5ID0+IHtcblx0XHRcdFx0XHRsZXQgcmVmID0ga2V5Lm1hdGNoKC9eKFxcIT8pKFteXFw6XSopKD86XFw6KC4qKSk/JC8pO1xuXHRcdFx0XHRcdGlmICggcmVmWzFdICkge1xuXHRcdFx0XHRcdFx0bGV0IHJlZjIgPSByZWZbMl0uc3BsaXQoJy4nKTtcblx0XHRcdFx0XHRcdHRoaXMuX3JlcXVpcmUucHVzaChyZWZbM10gfHwgcmVmMltyZWYyLmxlbmd0aCAtIDFdKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmV0dXJuIHJlZlsyXTtcblx0XHRcdFx0fVxuXHRcdFx0KV07XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0dGhpcy5fdXNlID0gWy4uLndhdGNocywgLi4uKFxuXHRcdFx0XHRfc3RhdGljLnVzZSA/IE9iamVjdC5rZXlzKF9zdGF0aWMudXNlKVxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgIC5tYXAoXG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICBrZXkgPT4ge1xuXHRcdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICBsZXQgcmVmID0ga2V5Lm1hdGNoKC9eKFxcIT8pKC4qKSQvKTtcblx0XHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgcmVmWzFdICYmIHRoaXMuX3JlcXVpcmUucHVzaChfc3RhdGljLnVzZVtrZXldKTtcblx0XHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlZlsyXSArICgoX3N0YXRpYy51c2Vba2V5XSA9PT0gdHJ1ZSlcblx0XHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICcnXG5cdFx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnOicgKyBfc3RhdGljLnVzZVtrZXldKTtcblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgIH1cblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICApIDogW11cblx0XHRcdCldO1xuXHRcdH1cblx0XHRcblx0XHRpZiAoIF9zdGF0aWMucmVxdWlyZSApXG5cdFx0XHR0aGlzLl9yZXF1aXJlLnB1c2goLi4uX3N0YXRpYy5yZXF1aXJlKTtcblx0XHRpZiAoIGNmZy5yZXF1aXJlIClcblx0XHRcdHRoaXMuX3JlcXVpcmUucHVzaCguLi5jZmcucmVxdWlyZSk7XG5cdFx0XG5cdFx0dGhpcy5fZm9sbG93ZXJzID0gW107XG5cdFx0dGhpcy5fY2hhbmdlc1NXID0gaW5pdGlhbFN0YXRlIHx8IHt9O1xuXHRcdHRoaXMuc3RhdGUgICAgICA9IGluaXRpYWxTdGF0ZSAmJiB7fTtcblx0XHRpZiAoIGFwcGx5IClcblx0XHRcdHRoaXMuYXBwbHkgPSBhcHBseTtcblx0XHRcblx0XHQvKipcblx0XHQgKiBJbml0aWFsIHN0YXRlIGlzbid0IGZ1bGx5IGluaXRpYWxpemVkICggY2hpbGRzIGNvbnN0cnVjdG9ycyBjYW4gc2V0IGl0IClcblx0XHQgKiBTY29wZSBiYXNlZCBpbnN0YW5jZSBoYXZlIHRhc2tRdWV1ZSB0byBkZWxheSBpbml0IHN5bmNocm9ub3VzbHksIGlmIG5vdFxuXHRcdCAqIHByZXNlbnQgd2UgdXNlIHNldFRpbWVvdXRcblx0XHQgKi9cblx0XHRpZiAoIHRhc2tRdWV1ZSApIHtcblx0XHRcdHRhc2tRdWV1ZS5wdXNoKHRoaXMuX2FmdGVyQ29uc3RydWN0b3IuYmluZCh0aGlzKSlcblx0XHR9XG5cdFx0ZWxzZVxuXHRcdFx0c2V0VGltZW91dCh0aGlzLl9hZnRlckNvbnN0cnVjdG9yLmJpbmQodGhpcykpXG5cdH1cblx0XG5cdC8qKlxuXHQgKiBHZXQgdGhlIGluY29taW5nIHN0YXRlICggZm9yIGltbWVkaWF0ZSBzdGF0ZSByZWxhdGl2ZSBhY3Rpb25zIClcblx0ICogQHJldHVybnMge3t9fCp9XG5cdCAqL1xuXHRnZXQgbmV4dFN0YXRlKCkge1xuXHRcdHJldHVybiB0aGlzLl9jaGFuZ2VzU1cgJiYgeyAuLi50aGlzLnN0YXRlLCAuLi50aGlzLl9jaGFuZ2VzU1cgfSB8fCB0aGlzLnN0YXRlO1xuXHR9XG5cdFxuXHRfYWZ0ZXJDb25zdHJ1Y3RvcigpIHtcblx0XHRsZXQgY2ZnICAgICAgICAgID0gdGhpcy5fY2ZnLFxuXHRcdCAgICBfc3RhdGljICAgICAgPSB0aGlzLmNvbnN0cnVjdG9yLFxuXHRcdCAgICBzbmFwc2hvdCAgICAgPSB0aGlzLnJlc3RvcmUodW5kZWZpbmVkLCB0cnVlKSxcblx0XHQgICAgaW5pdGlhbFN0YXRlID0gdGhpcy5zdGF0ZSxcblx0XHQgICAgaW5pdGlhbERhdGEgID0gdGhpcy5kYXRhLFxuXHRcdCAgICBhcHBsaWVkO1xuXHRcdHtcblx0XHRcdFxuXHRcdFx0aWYgKCBpbml0aWFsRGF0YSApXG5cdFx0XHRcdHRoaXMuZGF0YSA9IGluaXRpYWxEYXRhO1xuXHRcdFx0ZWxzZSBpZiAoIF9zdGF0aWMuZGF0YSAhPT0gdW5kZWZpbmVkIClcblx0XHRcdFx0dGhpcy5kYXRhID0geyAuLi5fc3RhdGljLmRhdGEgfTtcblx0XHRcdGVsc2UgaWYgKCBjZmcuaGFzT3duUHJvcGVydHkoXCJkYXRhXCIpIClcblx0XHRcdFx0dGhpcy5kYXRhID0gY2ZnLmRhdGE7XG5cdFx0XHRcblx0XHRcdGlmICggY2ZnLmhhc093blByb3BlcnR5KFwic3RhdGVcIikgJiYgY2ZnLnN0YXRlICE9PSB1bmRlZmluZWQgKVxuXHRcdFx0XHRpbml0aWFsU3RhdGUgPSB7IC4uLmluaXRpYWxTdGF0ZSwgLi4uY2ZnLnN0YXRlIH07XG5cdFx0XHRcblx0XHRcdGlmICggdGhpcy5kYXRhID09PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRcdGlmICggaW5pdGlhbFN0YXRlIHx8IHRoaXMuX3VzZS5sZW5ndGggKSB7Ly8gc3luYyBhcHBseVxuXHRcdFx0XHRcdHRoaXMuX2NoYW5nZXNTVyA9IHtcblx0XHRcdFx0XHRcdC4uLnRoaXMuX2NoYW5nZXNTVyxcblx0XHRcdFx0XHRcdC4uLihpbml0aWFsU3RhdGUgfHwge30pLFxuXHRcdFx0XHRcdFx0Li4udGhpcy4kc2NvcGUubWFwKHRoaXMsIHRoaXMuX3VzZSlcblx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgICAgICA9IHt9O1xuXHRcdFx0XHRcdGlmICggdGhpcy5zaG91bGRBcHBseSh0aGlzLl9jaGFuZ2VzU1cpICYmIHRoaXMuZGF0YSA9PT0gdW5kZWZpbmVkICkge1xuXHRcdFx0XHRcdFx0dGhpcy5kYXRhICAgICAgID0gdGhpcy5hcHBseSh0aGlzLmRhdGEsIHRoaXMuX2NoYW5nZXNTVywgdGhpcy5fY2hhbmdlc1NXKTtcblx0XHRcdFx0XHRcdGFwcGxpZWQgICAgICAgICA9IHRydWU7XG5cdFx0XHRcdFx0XHR0aGlzLnN0YXRlICAgICAgPSB0aGlzLl9jaGFuZ2VzU1c7XG5cdFx0XHRcdFx0XHR0aGlzLl9jaGFuZ2VzU1cgPSB7fTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHRhcHBsaWVkICAgICAgICAgPSB0cnVlO1xuXHRcdFx0XHR0aGlzLnN0YXRlICAgICAgPSB7Ly8gYXNzdW1lIHRoaXMgc3RhdGUgaXMgc3luYyB3aXRoIGluaXRpYWwgZGF0YVxuXHRcdFx0XHRcdC4uLnRoaXMuX2NoYW5nZXNTVyxcblx0XHRcdFx0XHQuLi4oaW5pdGlhbFN0YXRlIHx8IHt9KSxcblx0XHRcdFx0XHQuLi50aGlzLiRzY29wZS5tYXAodGhpcywgdGhpcy5fdXNlKVxuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuX2NoYW5nZXNTVyA9IHt9O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAoICh0aGlzLmRhdGEgIT09IHVuZGVmaW5lZCB8fCBhcHBsaWVkKSAmJiAhdGhpcy5fX2xvY2tzLmFsbCApIHtcblx0XHRcdHRoaXMuX3N0YWJsZSA9IHRydWU7XG5cdFx0XHR0aGlzLl9yZXYrKztcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHR0aGlzLl9zdGFibGUgPSBmYWxzZTtcblx0XHRcdGlmICggIV9zdGF0aWMubWFuYWdlZCAmJiAhdGhpcy5zdGF0ZSAmJiAoIXRoaXMuX3VzZSB8fCAhdGhpcy5fdXNlLmxlbmd0aCkgKSB7XG5cdFx0XHRcdGNvbnNvbGUud2FybihcIlJlU2NvcGUgc3RvcmUgJ1wiLCB0aGlzLm5hbWUsIFwiJyBoYXZlIG5vIGluaXRpYWwgZGF0YSwgc3RhdGUgb3IgdXNlLiBJdCBjYW4ndCBzdGFiaWxpemUuLi5cIik7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdCF0aGlzLl9zdGFibGUgJiYgdGhpcy5lbWl0KCd1bnN0YWJsZScsIHRoaXMuc3RhdGUpO1xuXHRcdFxuXHR9XG5cdFxuXHQvKipcblx0ICogT3ZlcnJpZGFibGUgbWV0aG9kIHRvIGtub3cgaWYgYSBkYXRhIGNoYW5nZSBzaG91bGQgYmUgcHJvcGFnIHRvIHRoZSBsaXN0ZW5pbmdcblx0ICogc3RvcmVzICYgY29tcG9uZW50c1xuXHQgKi9cblx0c2hvdWxkUHJvcGFnKCBuRGF0YXMgKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblx0XG5cdGhhc0RhdGFDaGFuZ2UoIG5EYXRhcyApIHtcblx0XHR2YXIgX3N0YXRpYyA9IHRoaXMuY29uc3RydWN0b3IsIHIsXG5cdFx0ICAgIGNEYXRhcyAgPSB0aGlzLmRhdGE7XG5cdFx0ciAgICAgICAgICAgPSAhY0RhdGFzICYmIG5EYXRhcyB8fCBjRGF0YXMgIT09IG5EYXRhcztcblx0XHQhciAmJiBjRGF0YXMgJiYgT2JqZWN0LmtleXMoY0RhdGFzKS5mb3JFYWNoKFxuXHRcdFx0KCBrZXkgKSA9PiB7XG5cdFx0XHRcdHIgPSByIHx8IChuRGF0YXNcblx0XHRcdFx0ICAgICAgICAgID8gY0RhdGFzW2tleV0gIT09IG5EYXRhc1trZXldXG5cdFx0XHRcdCAgICAgICAgICA6IGNEYXRhcyAmJiBjRGF0YXNba2V5XSlcblx0XHRcdH1cblx0XHQpO1xuXHRcdCFyICYmIG5EYXRhcyAmJiBPYmplY3Qua2V5cyhuRGF0YXMpLmZvckVhY2goXG5cdFx0XHQoIGtleSApID0+IHtcblx0XHRcdFx0ciA9IHIgfHwgKG5EYXRhc1xuXHRcdFx0XHQgICAgICAgICAgPyBjRGF0YXNba2V5XSAhPT0gbkRhdGFzW2tleV1cblx0XHRcdFx0ICAgICAgICAgIDogY0RhdGFzICYmIGNEYXRhc1trZXldKVxuXHRcdFx0fVxuXHRcdCk7XG5cdFx0cmV0dXJuIHI7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBPdmVycmlkYWJsZSBtZXRob2QgdG8ga25vdyBpZiBhIHN0YXRlIGNoYW5nZSBzaG91bGQgYmUgYXBwbGllZFxuXHQgKi9cblx0c2hvdWxkQXBwbHkoIHN0YXRlID0gdGhpcy5zdGF0ZSApIHtcblx0XHR2YXIgX3N0YXRpYyA9IHRoaXMuY29uc3RydWN0b3I7XG5cdFx0XG5cdFx0cmV0dXJuIChcblx0XHRcdCEhdGhpcy5pc0NvbXBsZXRlKHN0YXRlKVxuXHRcdCkgJiYgKGlzLmFycmF5KF9zdGF0aWMuZm9sbG93KVxuXHRcdCAgICAgID8gX3N0YXRpYy5mb2xsb3dcblx0XHQgICAgICAgICAgICAgICAucmVkdWNlKCggciwgaSApID0+IChyIHx8IHN0YXRlICYmIHN0YXRlW2ldKSwgZmFsc2UpXG5cdFx0ICAgICAgOiBfc3RhdGljLmZvbGxvd1xuXHRcdCAgICAgICAgPyBPYmplY3Qua2V5cyhfc3RhdGljLmZvbGxvdylcblx0XHQgICAgICAgICAgICAgICAgLnJlZHVjZSgoIHIsIGkgKSA9PiAoXG5cdFx0XHQgICAgICAgICAgICAgICAgclxuXHRcdFx0ICAgICAgICAgICAgICAgIHx8IHN0YXRlICYmIGlzLmZuKF9zdGF0aWMuZm9sbG93W2ldKSAmJiBfc3RhdGljLmZvbGxvd1tpXS5jYWxsKHRoaXMsIHN0YXRlW2ldKVxuXHRcdFx0ICAgICAgICAgICAgICAgIHx8IF9zdGF0aWMuZm9sbG93W2ldICYmIHN0YXRlW2ldICE9PSB0aGlzLnN0YXRlW2ldXG5cdFx0ICAgICAgICAgICAgICAgICksIGZhbHNlKSA6IHRydWVcblx0XHQpO1xuXHR9XG5cdFxuXHQvKipcblx0ICogT3ZlcnJpZGFibGUgYXBwbGllciAvIHJlbWFwcGVyXG5cdCAqIElmIHN0YXRlIG9yIGxhc3RQdWJsaWNTdGF0ZSBhcmUgc2ltcGxlIGhhc2ggbWFwcyBhcHBseSB3aWxsIHJldHVybiB7Li4uZGF0YSxcblx0ICogLi4uc3RhdGV9IGlmIG5vdCBpdCB3aWxsIHJldHVybiB0aGUgbGFzdCBwcml2YXRlIHN0YXRlXG5cdCAqIEBwYXJhbSBkYXRhXG5cdCAqIEBwYXJhbSBzdGF0ZVxuXHQgKiBAcmV0dXJucyB7Kn1cblx0ICovXG5cdGFwcGx5KCBkYXRhLCBzdGF0ZSwgY2hhbmdlcyApIHtcblx0XHRzdGF0ZSA9IHN0YXRlIHx8IHRoaXMuc3RhdGU7XG5cdFx0XG5cdFx0aWYgKCB0aGlzLnJlZmluZSApXG5cdFx0XHRyZXR1cm4gdGhpcy5yZWZpbmUoLi4uYXJndW1lbnRzKTtcblx0XHRcblx0XHRpZiAoICFkYXRhIHx8IGRhdGEuX19wcm90b19fICE9PSBvYmpQcm90byB8fCBzdGF0ZS5fX3Byb3RvX18gIT09IG9ialByb3RvIClcblx0XHRcdHJldHVybiBzdGF0ZTtcblx0XHRlbHNlXG5cdFx0XHRyZXR1cm4geyAuLi5kYXRhLCAuLi5zdGF0ZSB9XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBAZGVwcmVjaWF0ZWRcblx0ICogQHBhcmFtIGRhdGFcblx0ICogQHBhcmFtIHN0YXRlXG5cdCAqIEBwYXJhbSBjaGFuZ2VzXG5cdCAqIEByZXR1cm5zIHsqfVxuXHQgKi9cblx0cmVmaW5lKCBkYXRhLCBzdGF0ZSwgY2hhbmdlcyApIHtcblx0XHRzdGF0ZSA9IHN0YXRlIHx8IHRoaXMuc3RhdGU7XG5cdFx0XG5cdFx0aWYgKCAhZGF0YSB8fCBkYXRhLl9fcHJvdG9fXyAhPT0gb2JqUHJvdG8gfHwgc3RhdGUuX19wcm90b19fICE9PSBvYmpQcm90byApXG5cdFx0XHRyZXR1cm4gc3RhdGU7XG5cdFx0ZWxzZVxuXHRcdFx0cmV0dXJuIHsgLi4uZGF0YSwgLi4uc3RhdGUgfVxuXHR9XG5cdFxuXHQvKipcblx0ICogRGVib3VuY2UgdGhpcyBzdG9yZSBwcm9wYWdhdGlvbiAoICYgcmVkdWNpbmcgKVxuXHQgKiBAcGFyYW0gY2Jcblx0ICovXG5cdHN0YWJpbGl6ZSggY2IgKSB7XG5cdFx0Y2IgJiYgdGhpcy5vbmNlKCdzdGFibGUnLCBjYik7XG5cdFx0dGhpcy5fc3RhYmxlICYmIHRoaXMuZW1pdCgndW5zdGFibGUnLCB0aGlzLnN0YXRlLCB0aGlzLmRhdGEpO1xuXHRcdFxuXHRcdHRoaXMuX3N0YWJsZSA9IGZhbHNlO1xuXHRcdFxuXHRcdGlmICggdGhpcy5fc3RhYmlsaXplciApXG5cdFx0XHRyZXR1cm47XG5cdFx0XG5cdFx0dGhpcy5fc3RhYmlsaXplciA9IFRhc2tTZXF1ZW5jZXIucHVzaFRhc2sodGhpcywgJ3B1c2hTdGF0ZScpO1xuXHR9XG5cdFxuXHRyZXRyaWV2ZSggcGF0aCwgaSA9IDAsIG9iaiA9IHRoaXMuZGF0YSApIHtcblx0XHRwYXRoID0gaXMuc3RyaW5nKHBhdGgpID8gcGF0aC5zcGxpdCgnLicpIDogcGF0aDtcblx0XHRyZXR1cm4gIW9iaiB8fCAhcGF0aCB8fCAhcGF0aC5sZW5ndGhcblx0XHQgICAgICAgPyBvYmpcblx0XHQgICAgICAgOiBwYXRoLmxlbmd0aCA9PSBpICsgMVxuXHRcdCAgICAgICAgID8gb2JqW3BhdGhbaV1dXG5cdFx0ICAgICAgICAgOiB0aGlzLnJldHJpZXZlKHBhdGgsIGkgKyAxLCBvYmpbcGF0aFtpXV0pO1xuXHR9XG5cdFxuXHRkaXNwYXRjaCggYWN0aW9uLCAuLi5hcmd6ICkge1xuXHRcdHRoaXMuc2NvcGVPYmouZGlzcGF0Y2goYWN0aW9uLCAuLi5hcmd6KTtcblx0fVxuXHRcblx0dHJpZ2dlciggYWN0aW9uLCAuLi5hcmd6ICkge1xuXHRcdGxldCB7IGFjdGlvbnMgfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cdFx0aWYgKCBhY3Rpb25zICYmIGFjdGlvbnNbYWN0aW9uXSApIHtcblx0XHRcdGxldCBucyA9IGFjdGlvbnNbYWN0aW9uXS5jYWxsKHRoaXMsIC4uLmFyZ3opO1xuXHRcdFx0bnMgJiYgdGhpcy5zZXRTdGF0ZShucyk7XG5cdFx0fVxuXHR9XG5cdFxuXHQvKipcblx0ICogUHVsbCBzdG9yZXMgaW4gdGhlIHByaXZhdGUgc3RhdGVcblx0ICogQHBhcmFtIHN0b3JlcyAge0FycmF5fSAocGFzc2VkIHRvIFN0b3JlOjptYXApIEV4IDogW1wic2Vzc2lvblwiLFxuXHQgKiAgICAgXCJvdGhlck5hbWVkU3RvcmU6a2V5XCIsIG90aGVyU3RvcmUuYXMoXCJvdGhlcktleVwiKV1cblx0ICovXG5cdHB1bGwoIHN0b3JlcywgZG9XYWl0LCBvcmlnaW4gKSB7XG5cdFx0bGV0IGluaXRpYWxPdXRwdXRzID0gdGhpcy5zY29wZU9iai5tYXAodGhpcywgc3RvcmVzKTtcblx0XHRpZiAoIGRvV2FpdCApIHtcblx0XHRcdHRoaXMud2FpdCgpO1xuXHRcdFx0c3RvcmVzLmZvckVhY2goKCBzICkgPT4gdGhpcy5zY29wZVtzXSAmJiB0aGlzLndhaXQodGhpcy5zY29wZVtzXSkpO1xuXHRcdFx0dGhpcy5yZWxlYXNlKCk7XG5cdFx0fVxuXHRcdHJldHVybiBpbml0aWFsT3V0cHV0cztcblx0fVxuXHRcblx0LyoqXG5cdCAqIFNldCAmIFB1c2ggdGhlIHJlc3VsdCBkYXRhIHRvIGZvbGxvd2VycyBpZiBzdGFibGVcblx0ICogQHBhcmFtIGNiXG5cdCAqL1xuXHRwdXNoKCBkYXRhLCBmb3JjZSwgY2IgKSB7XG5cdFx0Y2IgICAgPSBmb3JjZSA9PT0gdHJ1ZSA/IGNiIDogZm9yY2U7XG5cdFx0Zm9yY2UgPSBmb3JjZSA9PT0gdHJ1ZTtcblx0XHRpZiAoICFmb3JjZSAmJlxuXHRcdFx0KFxuXHRcdFx0XHQhdGhpcy5oYXNEYXRhQ2hhbmdlKGRhdGEpXG5cdFx0XHQpXG5cdFx0KSB7XG5cdFx0XHRjYiAmJiBjYigpO1xuXHRcdFx0aWYgKCAhdGhpcy5fX2xvY2tzLmFsbCApIHtcblx0XHRcdFx0bGV0IHN0YWJsZSAgID0gdGhpcy5fc3RhYmxlO1xuXHRcdFx0XHR0aGlzLl9zdGFibGUgPSB0cnVlO1xuXHRcdFx0XHQhc3RhYmxlICYmIHRoaXMuZW1pdCgnc3RhYmxlJywgdGhpcy5zdGF0ZSwgdGhpcy5kYXRhKTtcblx0XHRcdFx0dGhpcy5fc3RhYmlsaXplciA9IG51bGw7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdFxuXHRcdHRoaXMuZGF0YSA9IGRhdGE7XG5cdFx0dGhpcy53YWl0KCk7XG5cdFx0dGhpcy5yZWxlYXNlKGNiKTtcblx0XHRcblx0fVxuXHRcblx0LyoqXG5cdCAqIENhbGwgdGhlIGFwcGx5IGZuIHVzaW5nIHRoZSBjdXJyZW50IGFjY3VtdWxhdGVkIHN0YXRlIHVwZGF0ZSB0aGVuLCBwdXNoIHRoZVxuXHQgKiByZXN1bHRpbmcgZGF0YSBpZiBzdGFibGVcblx0ICogQHBhcmFtIGZvcmNlXG5cdCAqIEByZXR1cm5zIHtib29sZWFufVxuXHQgKi9cblx0cHVzaFN0YXRlKCBmb3JjZSApIHtcblx0XHRcblx0XHRpZiAoICFmb3JjZSAmJiAhdGhpcy5fY2hhbmdlc1NXICYmIHRoaXMuZGF0YSApXG5cdFx0XHRyZXR1cm47XG5cdFx0XG5cdFx0dmFyIG5leHRTdGF0ZSA9IHRoaXMuX25leHRTdGF0ZSB8fCB7IC4uLnRoaXMuc3RhdGUsIC4uLih0aGlzLl9jaGFuZ2VzU1cgfHwge30pIH0sXG5cdFx0ICAgIG5leHREYXRhICA9IHRoaXMuYXBwbHkodGhpcy5kYXRhLCBuZXh0U3RhdGUsIHRoaXMuX2NoYW5nZXNTVyk7XG5cdFx0XG5cdFx0dGhpcy5fc3RhYmlsaXplciA9IG51bGw7XG5cdFx0dGhpcy5zdGF0ZSAgICAgICA9IG5leHRTdGF0ZTtcblx0XHR0aGlzLl9jaGFuZ2VzU1cgID0gbnVsbDtcblx0XHRcblx0XHRpZiAoICFmb3JjZSAmJlxuXHRcdFx0KFxuXHRcdFx0XHQhdGhpcy5oYXNEYXRhQ2hhbmdlKG5leHREYXRhKVxuXHRcdFx0KVxuXHRcdCkge1xuXHRcdFx0aWYgKCAhdGhpcy5fX2xvY2tzLmFsbCApIHtcblx0XHRcdFx0bGV0IHN0YWJsZSAgID0gdGhpcy5fc3RhYmxlO1xuXHRcdFx0XHR0aGlzLl9zdGFibGUgPSB0cnVlO1xuXHRcdFx0XHQhc3RhYmxlICYmIHRoaXMuZW1pdCgnc3RhYmxlJywgdGhpcy5zdGF0ZSwgdGhpcy5kYXRhKTtcblx0XHRcdFx0dGhpcy5fc3RhYmlsaXplciA9IG51bGw7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdFxuXHRcdHRoaXMuZGF0YSA9IG5leHREYXRhO1xuXHRcdHRoaXMud2FpdCgpO1xuXHRcdHRoaXMucmVsZWFzZSgpO1xuXHRcdFxuXHR9XG5cdFxuXHQvKipcblx0ICogQWRkICdwU3RhdGUnIHRvIHRoZSBjdXJyZW50IGFjY3VtdWxhdGVkIHN0YXRlIHVwZGF0ZXNcblx0ICogJiB3YWl0IHNvdXJjZSBzdG9yZXMgc3RhYmlsaXphdGlvbiBiZWZvcmUgcHVzaGluZyB0aGVzZSBzdGF0ZSB1cGRhdGVzXG5cdCAqIEBwYXJhbSBwU3RhdGVcblx0ICogQHBhcmFtIGNiXG5cdCAqL1xuXHRzZXRTdGF0ZSggcFN0YXRlLCBjYiwgc3luYyApIHtcblx0XHR2YXIgaSAgICAgICA9IDAsIGNoYW5nZSxcblx0XHQgICAgY2hhbmdlcyA9IHRoaXMuX2NoYW5nZXNTVyA9IHRoaXMuX2NoYW5nZXNTVyB8fCB7fTtcblx0XHRmb3IgKCB2YXIgayBpbiBwU3RhdGUgKVxuXHRcdFx0aWYgKCAhdGhpcy5zdGF0ZVxuXHRcdFx0XHR8fCBjaGFuZ2VzLmhhc093blByb3BlcnR5KGspLy8gdG9kb1xuXHRcdFx0XHQmJiAoXG5cdFx0XHRcdFx0cFN0YXRlW2tdICE9PSBjaGFuZ2VzW2tdXG5cdFx0XHRcdCkgfHwgcFN0YXRlLmhhc093blByb3BlcnR5KGspXG5cdFx0XHRcdCYmIChcblx0XHRcdFx0XHRwU3RhdGVba10gIT09IHRoaXMuc3RhdGVba11cblx0XHRcdFx0XHR8fFxuXHRcdFx0XHRcdCh0aGlzLnN0YXRlW2tdICYmIHBTdGF0ZVtrXSAmJiAocFN0YXRlW2tdLl9yZXYgIT0gdGhpcy5fcmV2c1trXSkpLy8gcmV2L2hhc2ggdXBkYXRlXG5cdFx0XHRcdCkgKSB7XG5cdFx0XHRcdGNoYW5nZSAgICAgICAgPSB0cnVlO1xuXHRcdFx0XHR0aGlzLl9yZXZzW2tdID0gcFN0YXRlW2tdICYmIHBTdGF0ZVtrXS5fcmV2IHx8IHRydWU7XG5cdFx0XHRcdGNoYW5nZXNba10gICAgPSBwU3RhdGVba107XG5cdFx0XHR9XG5cdFx0XG5cdFx0dGhpcy5fbmV4dFN0YXRlID0geyAuLi50aGlzLnN0YXRlLCAuLi5jaGFuZ2VzIH07XG5cdFx0aWYgKCAhdGhpcy5zaG91bGRBcHBseSh0aGlzLl9uZXh0U3RhdGUpICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRcblx0XHRpZiAoIHN5bmMgKSB7XG5cdFx0XHR0aGlzLnB1c2hTdGF0ZSgpO1xuXHRcdFx0Y2IgJiYgY2IoKTtcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHRpZiAoIGNoYW5nZSApIHtcblx0XHRcdFx0dGhpcy5zdGFiaWxpemUoY2IpO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSBjYiAmJiBjYigpO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXHRcblx0LyoqXG5cdCAqIFVwZGF0ZSB0aGUgY3VycmVudCBzdGF0ZSAmIHB1c2ggaXRcblx0ICogQHBhcmFtIHBTdGF0ZVxuXHQgKiBAcGFyYW0gY2Jcblx0ICovXG5cdHNldFN0YXRlU3luYyggcFN0YXRlICkge1xuXHRcdHZhciBpICAgICAgID0gMCwgY2hhbmdlLFxuXHRcdCAgICBjaGFuZ2VzID0gdGhpcy5fY2hhbmdlc1NXID0gdGhpcy5fY2hhbmdlc1NXIHx8IHt9O1xuXHRcdGZvciAoIHZhciBrIGluIHBTdGF0ZSApXG5cdFx0XHRpZiAoICF0aGlzLnN0YXRlIHx8IHBTdGF0ZS5oYXNPd25Qcm9wZXJ0eShrKVxuXHRcdFx0XHQmJiAoXG5cdFx0XHRcdFx0cFN0YXRlW2tdICE9IHRoaXMuc3RhdGVba11cblx0XHRcdFx0XHR8fFxuXHRcdFx0XHRcdCh0aGlzLnN0YXRlW2tdICYmIHBTdGF0ZVtrXSAmJiAocFN0YXRlW2tdLl9yZXYgIT0gdGhpcy5fcmV2c1trXSkpLy8gcmV2L2hhc2ggdXBkYXRlXG5cdFx0XHRcdCkgKSB7XG5cdFx0XHRcdGNoYW5nZSAgICAgICAgPSB0cnVlO1xuXHRcdFx0XHR0aGlzLl9yZXZzW2tdID0gcFN0YXRlW2tdICYmIHBTdGF0ZVtrXS5fcmV2IHx8IHRydWU7XG5cdFx0XHRcdGNoYW5nZXNba10gICAgPSBwU3RhdGVba107XG5cdFx0XHR9XG5cdFx0dGhpcy5zaG91bGRBcHBseSh7IC4uLih0aGlzLnN0YXRlIHx8IHt9KSwgLi4uY2hhbmdlcyB9KSAmJiB0aGlzLnB1c2hTdGF0ZSgpO1xuXHRcdHJldHVybiB0aGlzLmRhdGE7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBnZXQgYSBzdG9yZS1rZXkgcGFpciBmb3IgU3RvcmU6Om1hcFxuXHQgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuXHQgKiBAcmV0dXJucyB7e3N0b3JlOiBTdG9yZSwgbmFtZTogKn19XG5cdCAqL1xuXHRhcyggbmFtZSApIHtcblx0XHRyZXR1cm4geyBzdG9yZTogdGhpcywgbmFtZSB9O1xuXHR9XG5cdFxuXHRvbiggbGlzdHMgKSB7XG5cdFx0aWYgKCAhaXMuc3RyaW5nKGxpc3RzKSAmJiBsaXN0cyApXG5cdFx0XHRPYmplY3Qua2V5cyhsaXN0cykuZm9yRWFjaChrID0+IHN1cGVyLm9uKGssIGxpc3RzW2tdKSk7XG5cdFx0ZWxzZSBzdXBlci5vbiguLi5hcmd1bWVudHMpO1xuXHR9XG5cdFxuXHRyZW1vdmVMaXN0ZW5lciggbGlzdHMgKSB7XG5cdFx0aWYgKCAhaXMuc3RyaW5nKGxpc3RzKSAmJiBsaXN0cyApXG5cdFx0XHRPYmplY3Qua2V5cyhsaXN0cykuZm9yRWFjaChrID0+IHN1cGVyLnJlbW92ZUxpc3RlbmVyKGssIGxpc3RzW2tdKSk7XG5cdFx0ZWxzZSBzdXBlci5yZW1vdmVMaXN0ZW5lciguLi5hcmd1bWVudHMpO1xuXHR9XG5cdFxuXHQvKipcblx0ICogaXMgY29tcGxldGUgKGFsbCByZXF1aWVyZWQga2V5cyBhcmUgaGVyZSlcblx0ICogQHJldHVybnMgYm9vbFxuXHQgKi9cblx0aXNDb21wbGV0ZSggc3RhdGUgPSB0aGlzLnN0YXRlICkge1xuXHRcdHZhciBfc3RhdGljID0gdGhpcy5jb25zdHJ1Y3Rvcjtcblx0XHRyZXR1cm4gKFxuXHRcdFx0IXRoaXMuX3JlcXVpcmVcblx0XHRcdHx8ICF0aGlzLl9yZXF1aXJlLmxlbmd0aFxuXHRcdFx0fHwgc3RhdGUgJiYgdGhpcy5fcmVxdWlyZS5yZWR1Y2UoXG5cdFx0XHRcdCggciwga2V5ICkgPT4gKHIgJiYgc3RhdGVba2V5XSksXG5cdFx0XHRcdHRydWVcblx0XHRcdClcblx0XHQpO1xuXHR9XG5cdFxuXHQvKipcblx0ICogaXMgc3RhYmxlXG5cdCAqIEByZXR1cm5zIGJvb2xcblx0ICovXG5cdGlzU3RhYmxlKCkge1xuXHRcdHJldHVybiB0aGlzLl9zdGFibGU7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBTZXJpYWxpemUgc3RhdGUgJiBkYXRhIHdpdGggc291cmNlcyByZWZzXG5cdCAqIEByZXR1cm5zIGJvb2xcblx0ICovXG5cdHNlcmlhbGl6ZSggY2ZnID0ge30sIG91dHB1dCA9IHt9ICkge1xuXHRcdGxldCBzSWQgICAgICAgICA9IGNmZy5wYXJlbnRBbGlhcyB8fCB0aGlzLnNjb3BlT2JqLl9pZCxcblx0XHQgICAgcmVmc0NvdW50ICAgPSAwLFxuXHRcdCAgICByZWZzICAgICAgICA9XG5cdFx0XHQgICAgIWNmZy5ub3JlZnMgJiYgaXMuYXJyYXkodGhpcy5fdXNlKSAmJiB0aGlzLl91c2UucmVkdWNlKFxuXHRcdFx0ICAgICggbWFwLCBrZXkgKSA9PiB7XG5cdFx0XHRcdCAgICBsZXQgcmVmICAgPSB0aGlzLiRzY29wZS5wYXJzZVJlZihrZXkpLFxuXHRcdFx0XHQgICAgICAgIHN0b3JlID0gdGhpcy4kc3RvcmVzW3JlZi5zdG9yZUlkXTtcblx0XHRcdFx0ICAgIGlmICggc3RvcmUgJiYgaXMucnNTdG9yZShzdG9yZSkgJiYgIXN0b3JlLnNjb3BlT2JqLl8uaXNMb2NhbElkIClcblx0XHRcdFx0XHQgICAgcmVmc0NvdW50KyssIG1hcFtyZWYuYWxpYXNdID0gcmVmLnBhdGg7XG5cdFx0XHRcdFxuXHRcdFx0XHQgICAgcmV0dXJuIG1hcDtcblx0XHRcdCAgICB9LCB7fVxuXHRcdFx0ICAgICksXG5cdFx0ICAgIHN0YXRlS2V5cyAgID0gT2JqZWN0LmtleXModGhpcy5kYXRhKSxcblx0XHQgICAgc3RhdGVSZWZzICAgPSBzdGF0ZUtleXMubWFwKGsgPT4gdGhpcy5kYXRhW2tdKSxcblx0XHQgICAgaW5SZWZzQ291bnQgPSAwLFxuXHRcdCAgICBpblJlZnMgICAgICA9XG5cdFx0XHQgICAgIWNmZy5ub3JlZnMgJiYgKE9iamVjdC5rZXlzKHRoaXMuZGF0YSkucmVkdWNlKFxuXHRcdFx0ICAgICggbWFwLCBrZXkgKSA9PiB7XG5cdFx0XHRcdCAgICBsZXQgcmVmID0gc3RhdGVSZWZzLmluZGV4T2YodGhpcy5kYXRhW2tleV0pXG5cdFx0XHRcdCAgICBpZiAoIHJlZiAhPSAtMSApXG5cdFx0XHRcdFx0ICAgIGluUmVmc0NvdW50KyssIG1hcFtrZXldID0gc3RhdGVLZXlzW3JlZl07XG5cdFx0XHRcdCAgICByZXR1cm4gbWFwO1xuXHRcdFx0ICAgIH0sIHt9XG5cdFx0XHQgICAgKSksXG5cdFx0ICAgIHNuYXAgICAgICAgID0ge1xuXHRcdFx0ICAgIHN0YXRlOiB0aGlzLnN0YXRlICYmXG5cdFx0XHRcdCAgICAoXG5cdFx0XHRcdFx0ICAgIGNmZy5ub3JlZnNcblx0XHRcdFx0XHQgICAgPyB7IC4uLnRoaXMuc3RhdGUgfVxuXHRcdFx0XHRcdCAgICA6IE9iamVjdC5rZXlzKHRoaXMuc3RhdGUpLnJlZHVjZSgoIGgsIGsgKSA9PiAoIXJlZnNba10gJiYgKGhba10gPSB0aGlzLnN0YXRlW2tdKSwgaCksIHt9KVxuXHRcdFx0XHQgICAgKSxcblx0XHRcdCAgICBkYXRhIDogKFxuXHRcdFx0XHRcdCAgICB0aGlzLmRhdGEgJiZcblx0XHRcdFx0XHQgICAgdGhpcy5kYXRhLl9fcHJvdG9fXyA9PT0gb2JqUHJvdG8gP1xuXHRcdFx0XHRcdCAgICBPYmplY3Qua2V5cyh0aGlzLmRhdGEpXG5cdFx0XHRcdFx0ICAgICAgICAgIC5yZWR1Y2UoXG5cdFx0XHRcdFx0XHQgICAgICAgICAgKCBoLCBrICkgPT4gKCFpblJlZnNba10gJiYgKGhba10gPSB0aGlzLmRhdGFba10pLCBoKSwge30pXG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcblx0XHRcdFx0XHQgICAgKGlzLmJvb2wodGhpcy5kYXRhKVxuXHRcdFx0XHRcdFx0ICAgIHx8IGlzLm51bWJlcih0aGlzLmRhdGEpXG5cdFx0XHRcdFx0XHQgICAgfHwgaXMuc3RyaW5nKHRoaXMuZGF0YSkpICYmIHRoaXMuZGF0YVxuXHRcdFx0XHQgICAgKVxuXHRcdFx0XHQgICAgfHwgdW5kZWZpbmVkXG5cdFx0XHRcblx0XHQgICAgfTtcblx0XHRcblx0XHRyZWZzICYmIHJlZnNDb3VudCAmJiAoc25hcC5yZWZzID0gcmVmcyk7XG5cdFx0aW5SZWZzICYmIGluUmVmc0NvdW50ICYmIChcblx0XHRcdHNuYXAuaW5SZWZzID0gc3RhdGVLZXlzLmxlbmd0aCA9PT0gaW5SZWZzQ291bnRcblx0XHRcdCAgICAgICAgICAgICAgPyB0cnVlXG5cdFx0XHQgICAgICAgICAgICAgIDogaW5SZWZzKTtcblx0XHRcblx0XHRcblx0XHRrZXlXYWxrblNldChcblx0XHRcdG91dHB1dCxcblx0XHRcdChzSWQgKyAnLycgKyB0aGlzLm5hbWUpLFxuXHRcdFx0c25hcFxuXHRcdCk7XG5cdFx0cmV0dXJuIG91dHB1dDtcblx0fVxuXHRcblx0LyoqXG5cdCAqIHJlc3RvcmUgc3RhdGUgJiBkYXRhXG5cdCAqIEByZXR1cm5zIGJvb2xcblx0ICovXG5cdHJlc3RvcmUoIHNuYXBzaG90LCBpbW1lZGlhdGUgKSB7XG5cdFx0c25hcHNob3QgPSBzbmFwc2hvdFxuXHRcdFx0JiYga2V5V2Fsa25HZXQoc25hcHNob3QsIHRoaXMuc2NvcGVPYmouX2lkICsgJy8nICsgdGhpcy5uYW1lKVxuXHRcdFx0fHwgdGhpcy4kc2NvcGUudGFrZVNuYXBzaG90QnlLZXkodGhpcy5zY29wZU9iai5faWQgKyAnLycgKyB0aGlzLm5hbWUpO1xuXHRcdFxuXHRcdGlmICggIXNuYXBzaG90IClcblx0XHRcdHJldHVybjtcblx0XHRcblx0XHRpZiAoIHNuYXBzaG90ICkge1xuXHRcdFx0aWYgKCAhdGhpcy5pc1N0YWJsZSgpICYmICFpbW1lZGlhdGUgKVxuXHRcdFx0XHR0aGlzLnRoZW4oKCkgPT4gcmVzdG9yZShzbmFwc2hvdCkpXG5cdFx0XHRsZXQgc25hcDtcblx0XHRcdHRoaXMuc3RhdGUgPSB7IC4uLnNuYXBzaG90LnN0YXRlIH07XG5cdFx0XHRzbmFwc2hvdC5yZWZzICYmIE9iamVjdC5rZXlzKHNuYXBzaG90LnJlZnMpLmZvckVhY2goXG5cdFx0XHRcdCgga2V5ICkgPT4gey8vdG9kb1xuXHRcdFx0XHRcdHRoaXMuc3RhdGVba2V5XSA9IHRoaXMuJHNjb3BlLnJldHJpZXZlKHNuYXBzaG90LnJlZnNba2V5XSk7XG5cdFx0XHRcdH1cblx0XHRcdClcblx0XHRcdFxuXHRcdFx0XG5cdFx0XHRpZiAoIHNuYXBzaG90LmluUmVmcyA9PT0gdHJ1ZSApXG5cdFx0XHRcdHRoaXMuZGF0YSA9IHRoaXMuc3RhdGU7XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0dGhpcy5kYXRhID0gc25hcHNob3QuZGF0YTtcblx0XHRcdFx0c25hcHNob3QuaW5SZWZzICYmIE9iamVjdC5rZXlzKHNuYXBzaG90LmluUmVmcykuZm9yRWFjaChcblx0XHRcdFx0XHQoIGtleSApID0+IHsvL3RvZG9cblx0XHRcdFx0XHRcdHRoaXMuZGF0YVtrZXldID0gdGhpcy5zdGF0ZVtzbmFwc2hvdC5pblJlZnNba2V5XV07XG5cdFx0XHRcdFx0XHQvL2Vsc2Vcblx0XHRcdFx0XHRcdC8vICAgIGNvbnNvbGUud2Fybignbm90IGZvdW5kIDogJywga2V5LCBzbmFwICYmIHNuYXAucmVmc1sga2V5IF0pXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQpXG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdFxuXHRcdH1cblx0fVxuXHRcblx0LyoqXG5cdCAqIFVuIGJpbmQgdGhpcyBzdG9yZSBvZmYgdGhlIGdpdmVuIGNvbXBvbmVudC1rZXlcblx0ICogQHBhcmFtIG9ialxuXHQgKiBAcGFyYW0ga2V5XG5cdCAqIEByZXR1cm5zIHtBcnJheS48Kj59XG5cdCAqL1xuXHR1bkJpbmQoIG9iaiwga2V5LCBwYXRoICkge1xuXHRcdHZhciBmb2xsb3dlcnMgPSB0aGlzLl9mb2xsb3dlcnMsXG5cdFx0ICAgIGkgICAgICAgICA9IGZvbGxvd2VycyAmJiBmb2xsb3dlcnMubGVuZ3RoO1xuXHRcdHdoaWxlICggZm9sbG93ZXJzICYmIGktLSApXG5cdFx0XHRpZiAoIGZvbGxvd2Vyc1tpXVswXSA9PT0gb2JqICYmIGZvbGxvd2Vyc1tpXVsxXSA9PT0ga2V5ICYmIGZvbGxvd2Vyc1tpXVsyXSA9PT0gcGF0aCApXG5cdFx0XHRcdHJldHVybiBmb2xsb3dlcnMuc3BsaWNlKGksIDEpO1xuXHR9XG5cdFxuXHQvKipcblx0ICogQmluZCB0aGlzIHN0b3JlIGNoYW5nZXMgdG8gdGhlIGdpdmVuIGNvbXBvbmVudC1rZXlcblx0ICogQHBhcmFtIG9iaiB7UmVhY3QuQ29tcG9uZW50fFN0b3JlfGZ1bmN0aW9uKVxuXHQgKiBAcGFyYW0ga2V5IHtzdHJpbmd9IG9wdGlvbmFsIGtleSB3aGVyZSB0byBtYXAgdGhlIHB1YmxpYyBzdGF0ZVxuXHQgKi9cblx0YmluZCggb2JqLCBrZXksIHNldEluaXRpYWwgPSB0cnVlLCBwYXRoICkge1xuXHRcdHRoaXMuX2ZvbGxvd2Vycy5wdXNoKFtvYmosIGtleSwgcGF0aF0pO1xuXHRcdGlmICggc2V0SW5pdGlhbCAmJiB0aGlzLmRhdGEgJiYgdGhpcy5fc3RhYmxlICkge1xuXHRcdFx0bGV0IGRhdGEgPSBwYXRoID8gdGhpcy5yZXRyaWV2ZShwYXRoKSA6IHRoaXMuZGF0YTtcblx0XHRcdGlmICggdHlwZW9mIG9iaiAhPSBcImZ1bmN0aW9uXCIgKSB7XG5cdFx0XHRcdGlmICgga2V5ICkgb2JqLnNldFN0YXRlKHsgW2tleV06IGRhdGEgfSk7XG5cdFx0XHRcdGVsc2Ugb2JqLnNldFN0YXRlKGRhdGEpO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdG9iaihkYXRhKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBvbmNlKCdzdGFibGUnLCBjYilcblx0ICogQHBhcmFtIG9iaiB7UmVhY3QuQ29tcG9uZW50fFN0b3JlfGZ1bmN0aW9uKVxuXHQgKiBAcGFyYW0ga2V5IHtzdHJpbmd9IG9wdGlvbmFsIGtleSB3aGVyZSB0byBtYXAgdGhlIHB1YmxpYyBzdGF0ZVxuXHQgKi9cblx0dGhlbiggY2IgKSB7XG5cdFx0aWYgKCB0aGlzLl9zdGFibGUgKVxuXHRcdFx0cmV0dXJuIGNiKHRoaXMuZGF0YSk7XG5cdFx0dGhpcy5vbmNlKCdzdGFibGUnLCBlID0+IGNiKHRoaXMuZGF0YSkpO1xuXHR9XG5cdFxuXHQvKipcblx0ICogQWRkIGEgbG9jayBzbyB0aGUgc3RvcmUgd2lsbCBub3QgcHJvcGFnIGl0IGRhdGEgdW50aWxsIHJlbGVhc2UoKSBpcyBjYWxsXG5cdCAqIEBwYXJhbSBwcmV2aW91cyB7U3RvcmV8bnVtYmVyfEFycmF5fSBAb3B0aW9uYWwgd2YgdG8gd2FpdCwgcmVsZWFzZXMgdG8gd2FpdCBvclxuXHQgKiAgICAgYXJyYXkgb2Ygc3R1ZmYgdG8gd2FpdFxuXHQgKiBAcmV0dXJucyB7dGhpc31cblx0ICovXG5cdHdhaXQoIHByZXZpb3VzICkge1xuXHRcdGlmICggdHlwZW9mIHByZXZpb3VzID09IFwibnVtYmVyXCIgKVxuXHRcdFx0cmV0dXJuIHRoaXMuX19sb2Nrcy5hbGwgKz0gcHJldmlvdXM7XG5cdFx0aWYgKCBpcy5hcnJheShwcmV2aW91cykgKVxuXHRcdFx0cmV0dXJuIHByZXZpb3VzLm1hcCh0aGlzLndhaXQuYmluZCh0aGlzKSk7XG5cdFx0XG5cdFx0dGhpcy5fc3RhYmxlICYmIHRoaXMuZW1pdCgndW5zdGFibGUnLCB0aGlzLnN0YXRlLCB0aGlzLmRhdGEpO1xuXHRcdHRoaXMuX3N0YWJsZSA9IGZhbHNlO1xuXHRcdHRoaXMuX19sb2Nrcy5hbGwrKztcblx0XHRcblx0XHRsZXQgcmVhc29uID0gaXMuc3RyaW5nKHByZXZpb3VzKSA/IHByZXZpb3VzIDogbnVsbDtcblx0XHRpZiAoIHJlYXNvbiApIHtcblx0XHRcdHRoaXMuX19sb2Nrc1tyZWFzb25dID0gdGhpcy5fX2xvY2tzW3JlYXNvbl0gfHwgMDtcblx0XHRcdHRoaXMuX19sb2Nrc1tyZWFzb25dKys7XG5cdFx0fVxuXHRcdGlmICggcHJldmlvdXMgJiYgaXMuZm4ocHJldmlvdXMudGhlbikgKSB7XG5cdFx0XHRwcmV2aW91cy50aGVuKHRoaXMucmVsZWFzZS5iaW5kKHRoaXMsIG51bGwpKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBEZWNyZWFzZSBsb2NrcyBmb3IgdGhpcyBzdG9yZSwgaWYgaXQgcmVhY2ggMCAsXG5cdCAqIGl0IHdpbGwgYmUgcHJvcGFnYXRlZCB0byB0aGUgZm9sbG93ZXJzLFxuXHQgKiB0aGVuLCBhbGwgc3R1ZmYgcGFzc2VkIHRvIFwidGhlblwiIGNhbGwgYmFjayB3aWxsIGJlIGV4ZWMgLyByZWxlYXNlZFxuXHQgKiBAcGFyYW0gZGVzeW5jXG5cdCAqIEByZXR1cm5zIHsqfVxuXHQgKi9cblx0cmVsZWFzZSggcmVhc29uLCBjYiApIHtcblx0XHR2YXIgX3N0YXRpYyA9IHRoaXMuY29uc3RydWN0b3IsIG1lID0gdGhpcztcblx0XHRsZXQgaSAgICAgICA9IDAsIHdhc1N0YWJsZSA9IHRoaXMuX3N0YWJsZTtcblx0XHRcblx0XHRpZiAoIGlzLmZuKHJlYXNvbikgKSB7XG5cdFx0XHRjYiAgICAgPSByZWFzb247XG5cdFx0XHRyZWFzb24gPSBudWxsO1xuXHRcdH1cblx0XHRcblx0XHRpZiAoIHJlYXNvbiApIHtcblx0XHRcdGlmICggdGhpcy5fX2xvY2tzW3JlYXNvbl0gPT0gMCApXG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoXCJSZWxlYXNlIG1vcmUgdGhhbiBsb2NraW5nICFcIiwgcmVhc29uKTtcblx0XHRcdHRoaXMuX19sb2Nrc1tyZWFzb25dID0gdGhpcy5fX2xvY2tzW3JlYXNvbl0gfHwgMDtcblx0XHRcdHRoaXMuX19sb2Nrc1tyZWFzb25dLS07XG5cdFx0fVxuXHRcdFxuXHRcdGlmICggIXJlYXNvbiAmJiB0aGlzLl9fbG9ja3MuYWxsID09IDAgKVxuXHRcdFx0Y29uc29sZS5lcnJvcihcIlJlbGVhc2UgbW9yZSB0aGFuIGxvY2tpbmcgIVwiKTtcblx0XHRcblx0XHRpZiAoICEtLXRoaXMuX19sb2Nrcy5hbGwgJiYgdGhpcy5pc0NvbXBsZXRlKCkgKSB7XG5cdFx0XHRsZXQgcHJvcGFnICAgPSB0aGlzLnNob3VsZFByb3BhZyh0aGlzLmRhdGEpO1xuXHRcdFx0dGhpcy5fc3RhYmxlID0gdHJ1ZTtcblx0XHRcdHByb3BhZyAmJiB0aGlzLl9yZXYrKzsvL1xuXHRcdFx0aWYgKCBwcm9wYWcgJiYgdGhpcy5fZm9sbG93ZXJzLmxlbmd0aCApXG5cdFx0XHRcdHRoaXMuX2ZvbGxvd2Vycy5mb3JFYWNoKGZ1bmN0aW9uIHByb3BhZyggZm9sbG93ZXIgKSB7XG5cdFx0XHRcdFx0bGV0IGRhdGEgPSBmb2xsb3dlclsyXSA/IG1lLnJldHJpZXZlKGZvbGxvd2VyWzJdKSA6IG1lLmRhdGE7XG5cdFx0XHRcdFx0Ly9pZiAoICFkYXRhICkgcmV0dXJuO1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdGlmICggdHlwZW9mIGZvbGxvd2VyWzBdID09IFwiZnVuY3Rpb25cIiApIHtcblx0XHRcdFx0XHRcdGZvbGxvd2VyWzBdKGRhdGEpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHRcdC8vY2IgJiYgaSsrO1xuXHRcdFx0XHRcdFx0Zm9sbG93ZXJbMF0uc2V0U3RhdGUoXG5cdFx0XHRcdFx0XHRcdChmb2xsb3dlclsxXSkgPyB7IFtmb2xsb3dlclsxXV06IGRhdGEgfVxuXHRcdFx0XHRcdFx0XHQgICAgICAgICAgICAgIDogZGF0YVxuXHRcdFx0XHRcdFx0XHQvLyxcblx0XHRcdFx0XHRcdFx0Ly9jYiAmJiAoXG5cdFx0XHRcdFx0XHRcdC8vICAgICgpID0+ICghKC0taSkgJiYgY2IoKSlcblx0XHRcdFx0XHRcdFx0Ly8pXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHQvL2Vsc2Vcblx0XHRcdCF3YXNTdGFibGUgJiYgdGhpcy5lbWl0KCdzdGFibGUnLCB0aGlzLmRhdGEpO1xuXHRcdFx0cHJvcGFnICYmIHRoaXMuZW1pdCgndXBkYXRlJywgdGhpcy5kYXRhKTtcblx0XHRcdGNiICYmIGNiKClcblx0XHR9XG5cdFx0ZWxzZSBjYiAmJiB0aGlzLnRoZW4oY2IpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cdFxuXHRwcm9wYWcoIGRhdGEgKSB7XG5cdFx0dGhpcy5lbWl0KCd1cGRhdGUnLCBkYXRhKTtcblx0fVxuXHRcblx0cmV0YWluKCByZWFzb24gKSB7XG5cdFx0dGhpcy5fX3JldGFpbnMuYWxsKys7XG5cdFx0aWYgKCByZWFzb24gKSB7XG5cdFx0XHR0aGlzLl9fcmV0YWluc1tyZWFzb25dID0gdGhpcy5fX3JldGFpbnNbcmVhc29uXSB8fCAwO1xuXHRcdFx0dGhpcy5fX3JldGFpbnNbcmVhc29uXSsrO1xuXHRcdH1cblx0fVxuXHRcblx0ZGlzcG9zZSggcmVhc29uICkge1xuXHRcdC8vY29uc29sZS53YXJuKFwiZGlzcG9zZVwiLCByZWFzb24sIHRoaXMuX19yZXRhaW5zKTtcblx0XHRpZiAoIHJlYXNvbiApIHtcblx0XHRcdGlmICggIXRoaXMuX19yZXRhaW5zW3JlYXNvbl0gKVxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJSUyA6IERpc3Bvc2UgbW9yZSB0aGFuIHJldGFpbmluZyBvbiBzdG9yZSAnXCIgKyB0aGlzLm5hbWUgKyBcIicgOiBcIiArIHJlYXNvbik7XG5cdFx0XHRcblx0XHRcdHRoaXMuX19yZXRhaW5zW3JlYXNvbl0tLTtcblx0XHR9XG5cdFx0aWYgKCB0aGlzLl9fcmV0YWlucy5hbGwgPT0gMCApXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJSUyA6IERpc3Bvc2UgbW9yZSB0aGFuIHJldGFpbmluZyBvbiBzdG9yZSBcIiArIHRoaXMubmFtZSk7XG5cdFx0XG5cdFx0dGhpcy5fX3JldGFpbnMuYWxsLS07XG5cdFx0XG5cdFx0aWYgKCAhdGhpcy5fX3JldGFpbnMuYWxsICkge1xuXHRcdFx0aWYgKCB0aGlzLl9wZXJzaXN0ZW5jZVRtICkge1xuXHRcdFx0XHR0aGlzLl9kZXN0cm95VE0gJiYgY2xlYXJUaW1lb3V0KHRoaXMuX2Rlc3Ryb3lUTSk7XG5cdFx0XHRcdHRoaXMuX2Rlc3Ryb3lUTSA9IHNldFRpbWVvdXQoXG5cdFx0XHRcdFx0ZSA9PiB7XG5cdFx0XHRcdFx0XHR0aGlzLl9kZXN0cm95VE0gPSBudWxsO1xuXHRcdFx0XHRcdFx0Ly90aGlzLnRoZW4ocyA9PiB7XG5cdFx0XHRcdFx0XHQhdGhpcy5fX3JldGFpbnMuYWxsICYmICF0aGlzLmRlYWQgJiYgdGhpcy5kZXN0cm95KClcblx0XHRcdFx0XHRcdC8vfSk7XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR0aGlzLl9wZXJzaXN0ZW5jZVRtXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0Ly90aGlzLnRoZW4ocyA9PlxuXHRcdFx0XHQoIXRoaXMuX19yZXRhaW5zLmFsbCAmJiAhdGhpcy5kZWFkICYmIHRoaXMuZGVzdHJveSgpKVxuXHRcdFx0XHQvLyk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdFxuXHRkZXN0cm95KCkge1xuXHRcdC8vICBjb25zb2xlLmxvZyhcImRlc3Ryb3lcIiwgdGhpcy5fdWlkKTtcblx0XHRcblx0XHR0aGlzLmVtaXQoJ2Rlc3Ryb3knLCB0aGlzKTtcblx0XHRpZiAoIHRoaXMuX3N0YWJpbGl6ZXIgKVxuXHRcdFx0Y2xlYXJUaW1lb3V0KHRoaXMuX3N0YWJpbGl6ZXIpO1xuXHRcdFxuXHRcdGlmICggdGhpcy5fZm9sbG93ZXJzLmxlbmd0aCApXG5cdFx0XHR0aGlzLl9mb2xsb3dlcnMuZm9yRWFjaChcblx0XHRcdFx0KCBmb2xsb3dlciApID0+IHtcblx0XHRcdFx0XHRpZiAoIHR5cGVvZiBmb2xsb3dlclswXSAhPT0gXCJmdW5jdGlvblwiICkge1xuXHRcdFx0XHRcdFx0aWYgKCBmb2xsb3dlclswXS5zdG9yZXMgKVxuXHRcdFx0XHRcdFx0XHRkZWxldGUgZm9sbG93ZXJbMF0uc3RvcmVzW2ZvbGxvd2VyWzFdXTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdCk7XG5cdFx0dGhpcy5fZm9sbG93ZXJzLmxlbmd0aCA9IDA7XG5cdFx0dGhpcy5jb25zdHJ1Y3Rvci5fcmV2ICA9IHRoaXMucmV2O1xuXHRcdHRoaXMuZGVhZCAgICAgICAgICAgICAgPSB0cnVlO1xuXHRcdHRoaXMuX3JldnMgICAgICAgICAgICAgPSB0aGlzLmRhdGEgPSB0aGlzLnN0YXRlID0gdGhpcy5zY29wZSA9IG51bGw7XG5cdFx0dGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoKTtcblx0fVxufVxuXG4vKipcbiAqIGdldCBhIHN0YXRpYyBhbGlhc2VkIHJlZmVyZW5jZSBvZiBhIHN0b3JlXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICogQHJldHVybnMge3tzdG9yZTogU3RvcmUsIG5hbWU6ICp9fVxuICovXG5TdG9yZS5hcyA9IGZ1bmN0aW9uICggbmFtZSApIHtcblx0cmV0dXJuIHsgc3RvcmU6IHRoaXMsIG5hbWUgfTtcbn1cblxuLyoqXG4gKiBNYXAgYWxsIG5hbWVkIHN0b3JlcyBpbiB7a2V5c30gdG8gdGhlIHtvYmplY3R9J3Mgc3RhdGVcbiAqIEhvb2sgY29tcG9uZW50V2lsbFVubW91bnQgKGZvciByZWFjdCBjb21wKSBvciBkZXN0cm95IHRvIHVuQmluZCB0aGVtIGF1dG9tYXRpY2FsbHlcbiAqIEBzdGF0aWNcbiAqIEBwYXJhbSBvYmplY3Qge09iamVjdH0gdGFyZ2V0IHN0YXRlIGF3YXJlIG9iamVjdCAoUmVhY3QuQ29tcG9uZW50fFN0b3JlfC4uLilcbiAqIEBwYXJhbSBrZXlzIHtBcnJheX0gRXggOiBbXCJzZXNzaW9uXCIsIFwib3RoZXJTdGF0aWNOYW1lZFN0b3JlOmtleVwiLFxuICogICAgIHN0b3JlLmFzKCdhbm90aGVyS2V5JyldXG4gKi9cblN0b3JlLm1hcCA9IGZ1bmN0aW9uICggY1N0b3JlLCBrZXlzLCBzY29wZSwgb3JpZ2luLCBzZXRJbml0aWFsID0gZmFsc2UgKSB7XG5cdHZhciB0YXJnZXRSZXZzICAgICA9IGNTdG9yZS5fcmV2cyB8fCB7fTtcblx0dmFyIHRhcmdldFNjb3BlICAgID0gY1N0b3JlLnN0b3JlcyB8fCAoY1N0b3JlLnN0b3JlcyA9IHt9KTtcblx0dmFyIGluaXRpYWxPdXRwdXRzID0ge307XG5cdGtleXMgICAgICAgICAgICAgICA9IGlzLmFycmF5KGtleXMpID8gWy4uLmtleXNdIDogW2tleXNdO1xuXHRcblx0XG5cdHNjb3BlID0gc2NvcGUgfHwgU3RvcmUuc3RhdGljU2NvcGU7XG5cdFxuXHRrZXlzID0ga2V5cy5maWx0ZXIoXG5cdFx0Ly8gQHRvZG8gOiB1c2UgcXVlcnkgcmVmc1xuXHRcdC8vIChzdG9yZSkoXFwuc3RvcmUpKihcXFsoXFwqfChwcm9wcylcXHcrKSspXFxdKT8oXFw6YWxpYXMpXG5cdFx0KCBrZXkgKSA9PiB7XG5cdFx0XHRpZiAoICFrZXkgKSB7XG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoXCJOb3QgYSBtYXBwYWJsZSBzdG9yZSBpdGVtICdcIiArIGtleSArIFwiJyBpbiBcIiArIG9yaWdpbiArICcgISEnKTtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0bGV0IG5hbWUsXG5cdFx0XHQgICAgYWxpYXMsXG5cdFx0XHQgICAgcGF0aCxcblx0XHRcdCAgICBzdG9yZSwgX2tleTtcblx0XHRcdGlmICgga2V5LnN0b3JlICYmIGtleS5uYW1lICkge1xuXHRcdFx0XHRhbGlhcyA9IG5hbWUgPSBrZXkubmFtZTtcblx0XHRcdFx0c3RvcmUgPSBrZXkuc3RvcmU7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIGlmICggaXMuZm4oa2V5KSApIHtcblx0XHRcdFx0bmFtZSAgPSBhbGlhcyA9IGtleS5uYW1lIHx8IGtleS5kZWZhdWx0TmFtZTtcblx0XHRcdFx0c3RvcmUgPSBrZXk7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0X2tleSAgPSBrZXkubWF0Y2goLyhbXlxcLlxcOl0rKSgoPzpcXC5bXlxcLlxcOl0rKSopKD86XFw6KFteXFwuXFw6XSspKT8vKTtcblx0XHRcdFx0bmFtZSAgPSBfa2V5WzFdO1xuXHRcdFx0XHRwYXRoICA9IF9rZXlbMl0gJiYgX2tleVsyXS5zdWJzdHIoMSk7XG5cdFx0XHRcdHN0b3JlID0gc2NvcGUuc3RvcmVzW19rZXlbMV1dO1xuXHRcdFx0XHRhbGlhcyA9IF9rZXlbM10gfHwgcGF0aCAmJiBwYXRoLm1hdGNoKC8oW15cXC5dKikkLylbMF0gfHwgX2tleVsxXTtcblx0XHRcdH1cblx0XHRcdGlmICggIXN0b3JlICkge1xuXHRcdFx0XHRsZXQgaSA9IFtdO1xuXHRcdFx0XHRmb3IgKCB2YXIgbyBpbiBzY29wZS5zdG9yZXMgKVxuXHRcdFx0XHRcdGkucHVzaChvKVxuXHRcdFx0XHRjb25zb2xlLmVycm9yKFwiTm90IGEgbWFwcGFibGUgc3RvcmUgaXRlbSAnXCIgKyBuYW1lICsgXCIvXCIgKyBhbGlhcyArIFwiJyBpbiBcIiArIChjU3RvcmUubmFtZSB8fCBjU3RvcmUpICsgJyAhIScsIHN0b3JlLCBfa2V5LCBzY29wZS5zdG9yZXMsIGkpO1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRpZiAoIGlzLnJzU2NvcGVDbGFzcyhzdG9yZSkgKSBzY29wZS5fbW91bnQobmFtZSk7XG5cdFx0XHRpZiAoIGlzLnJzU2NvcGUoc3RvcmUpICkge1xuXHRcdFx0XHRzdG9yZSA9IHNjb3BlLl9tb3VudChrZXkpO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSBpZiAoIHRhcmdldFJldnNbbmFtZV0gKSByZXR1cm4gZmFsc2U7Ly8gaWdub3JlIGRibCB1c2VzIGZvciBub3dcblx0XHRcdFxuXHRcdFx0XG5cdFx0XHRpZiAoIGlzLmZuKHN0b3JlKSApIHtcblx0XHRcdFx0c2NvcGUuX21vdW50KG5hbWUpXG5cdFx0XHRcdHNjb3BlLnN0b3Jlc1tuYW1lXS5iaW5kKGNTdG9yZSwgYWxpYXMsIHNldEluaXRpYWwsIHBhdGgpO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdHN0b3JlLmJpbmQoY1N0b3JlLCBhbGlhcywgc2V0SW5pdGlhbCwgcGF0aCk7XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdC8vIGdpdmUgaW5pdGlhbCBzdG9yZSB3ZWlnaHQgYmFzaW5nIHNvdXJjZXNcblx0XHRcdHNjb3BlLnN0b3Jlc1tuYW1lXS5fc291cmNlcyAmJiBjU3RvcmUuX3NvdXJjZXMucHVzaCguLi5zY29wZS5zdG9yZXNbbmFtZV0uX3NvdXJjZXMpO1xuXHRcdFx0XG5cdFx0XHR0YXJnZXRSZXZzW2FsaWFzXSA9IHRhcmdldFJldnNbYWxpYXNdIHx8IHRydWU7XG5cdFx0XHQhdGFyZ2V0U2NvcGVbbmFtZV0gJiYgKHRhcmdldFNjb3BlW25hbWVdID0gc2NvcGUuc3RvcmVzW25hbWVdKTtcblx0XHRcdGlmICggc2NvcGUuc3RvcmVzW25hbWVdLmhhc093blByb3BlcnR5KCdkYXRhJykgKVxuXHRcdFx0XHRpbml0aWFsT3V0cHV0c1tuYW1lXSA9IHNjb3BlLmRhdGFbbmFtZV07XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdCk7XG5cdFxuXHQvLyAuLi4gQHRvZG9cblx0Y1N0b3JlLm9uY2UoJ2Rlc3Ryb3knLCAoIC4uLmFyZ3ogKSA9PiB7XG5cdFx0a2V5cy5tYXAoXG5cdFx0XHQoIGtleSApID0+IHtcblx0XHRcdFx0bGV0IG5hbWUsXG5cdFx0XHRcdCAgICBhbGlhcywgcGF0aCxcblx0XHRcdFx0ICAgIHN0b3JlO1xuXHRcdFx0XHRpZiAoIGtleS5zdG9yZSAmJiBrZXkubmFtZSApIHtcblx0XHRcdFx0XHRhbGlhcyA9IG5hbWUgPSBrZXkubmFtZTtcblx0XHRcdFx0XHRzdG9yZSA9IGtleS5zdG9yZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlIGlmICggaXMuZm4oa2V5KSApIHtcblx0XHRcdFx0XHRuYW1lICA9IGFsaWFzID0ga2V5Lm5hbWUgfHwga2V5LmRlZmF1bHROYW1lO1xuXHRcdFx0XHRcdHN0b3JlID0gc2NvcGUuc3RvcmVzW25hbWVdO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdGtleSAgID0ga2V5Lm1hdGNoKC8oW15cXC5cXDpdKykoKD86XFwuW15cXC5cXDpdKykqKSg/OlxcOihbXlxcLlxcOl0rKSk/Lyk7XG5cdFx0XHRcdFx0bmFtZSAgPSBrZXlbMV07XG5cdFx0XHRcdFx0cGF0aCAgPSBrZXlbMl0gJiYga2V5WzJdLnN1YnN0cigxKTtcblx0XHRcdFx0XHRzdG9yZSA9IHNjb3BlLnN0b3Jlc1trZXlbMV1dO1xuXHRcdFx0XHRcdGFsaWFzID0ga2V5WzNdIHx8IHBhdGggJiYgcGF0aC5tYXRjaCgvKFteXFwuXSopJC8pWzBdIHx8IGtleVsxXTtcblx0XHRcdFx0fVxuXHRcdFx0XHRcblx0XHRcdFx0c3RvcmUgJiYgIWlzLmZuKHN0b3JlKSAmJiBzdG9yZS51bkJpbmQoY1N0b3JlLCBhbGlhcywgcGF0aClcblx0XHRcdH1cblx0XHQpO1xuXHR9KVxuXHRcblx0cmV0dXJuIGluaXRpYWxPdXRwdXRzO1xufTtcblxuXG5pcy5yc1N0b3JlICAgICAgPSBmdW5jdGlvbiAoIG9iaiApIHtcblx0cmV0dXJuIG9iaiBpbnN0YW5jZW9mIFN0b3JlXG59XG5pcy5yc1N0b3JlQ2xhc3MgPSBmdW5jdGlvbiAoIG9iaiApIHtcblx0cmV0dXJuIFN0b3JlLmlzUHJvdG90eXBlT2Yob2JqKSB8fCBvYmogPT09IFN0b3JlXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0b3JlO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9TdG9yZS5qcyIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpICAyMDE4IFdpc2UgV2lsZCBXZWIgLlxuICpcbiAqICBNSVQgTGljZW5zZVxuICpcbiAqICBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiAgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqICB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiAgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiAgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiAgVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG4gKiAgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqICBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG4gKiAgU09GVFdBUkUuXG4gKlxuICogQGF1dGhvciA6IE5hdGhhbmFlbCBCcmF1blxuICogQGNvbnRhY3QgOiBjYWlwaWxhYnNAZ21haWwuY29tXG4gKi9cblxuLy9pbXBvcnQgaW5kZXggZnJvbSBcIi4vaW5kZXhcIjsvLyB3aWxsIHVzZSBhcyBleHRlcm5hbCB0aGUgaW5kZXggaW4gZGlzdFxuaW1wb3J0IGlzIGZyb20gXCJpc1wiO1xuXG4vKipcbiAqIE1pbmltYWwgcHVzaCBzZXF1ZW5jZXIsIGFwcGx5IHN0b3JlcyBzcGVjaWZpYyB0YXNrIGluIHRoZSByaWdodCBvcmRlciAocm9vdCBzdG9yZXNcbiAqIGZpcnN0KVxuICovXG5sZXQgdGFza1F1ZXVlICAgICAgPSBbXSxcbiAgICBjdXJXZWlnaHQgICAgICA9IDAsXG4gICAgbWF4V2VpZ2h0ICAgICAgPSAwLFxuICAgIG1pbldlaWdodCAgICAgID0gMCxcbiAgICB0YXNrQ291bnQgICAgICA9IDAsXG4gICAgZGVTeW5jICAgICAgICAgPSBmYWxzZSxcbiAgICBkZVN5bmNNYXhUYXNrcyA9IDEwLFxuICAgIHRhc2ssXG4gICAgaXNSdW5uaW5nLFxuICAgIGVycm9yQ2F0Y2hlciAgID0ge1xuICAgICAgICBsYXN0RXJyb3I6IG51bGwsXG4gICAgICAgIGRpc3BhdGNoIDogZnVuY3Rpb24gKCBlcnJvciApIHtcbiAgICAgICAgICAgIGVycm9yQ2F0Y2hlci5kaXNhYmxlKCk7XG4gICAgICAgICAgICBpZiAoIHRhc2sgJiYgdGFza1sgMCBdLmhhbmRsZUVycm9yICkge1xuICAgICAgICAgICAgICAgIHRhc2tbIDAgXS5oYW5kbGVFcnJvcihlcnJvciwgdGFzayk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICggdGFzayApXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlJlU2NvcGUgOiBBbiBhcHBseSB0YXNrIGhhcyBmYWlsZWQgISFcIiwgdGFza1sgMSBdLCBcIiBvbiBcIiwgdGFza1sgMCBdLm5hbWUgfHwgdGFza1sgMCBdLmNvbnN0cnVjdG9yLm5hbWUpXG4gICAgICAgIFxuICAgICAgICAgICAgaXNSdW5uaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB0YXNrICAgICAgPSBudWxsO1xuICAgICAgICAgICAgcnVuTm93KCk7XG4gICAgICAgIH0sXG4gICAgICAgIGVuYWJsZSAgIDogKCB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyApXG4gICAgICAgICAgICAgICAgICAgPyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgZXJyb3JDYXRjaGVyLmRpc3BhdGNoKVxuICAgICAgICAgICAgfSA6ICgpID0+IHtcbiAgICAgICAgICAgICAgICBwcm9jZXNzLm9uKCd1bmNhdWdodEV4Y2VwdGlvbicsIGVycm9yQ2F0Y2hlci5kaXNwYXRjaCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICBkaXNhYmxlICA6ICggdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgKVxuICAgICAgICAgICAgICAgICAgID8gKCkgPT4ge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdlcnJvcicsIGVycm9yQ2F0Y2hlci5kaXNwYXRjaClcbiAgICAgICAgICAgIH0gOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgcHJvY2Vzcy5yZW1vdmVMaXN0ZW5lcigndW5jYXVnaHRFeGNlcHRpb24nLCBlcnJvckNhdGNoZXIuZGlzcGF0Y2gpO1xuICAgICAgICAgICAgfVxuICAgIH1cbjtcblxuZnVuY3Rpb24gcnVuTm93KCkge1xuICAgIGlmICggIWlzUnVubmluZyApIHtcbiAgICAgICAgcnVuKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBydW4oKSB7XG4gICAgbGV0IGZyb20gID0gRGF0ZS5ub3coKTtcbiAgICBpc1J1bm5pbmcgPSB0cnVlO1xuICAgIGVycm9yQ2F0Y2hlci5lbmFibGUoKTtcbiAgICB3aGlsZSAoIHRhc2tDb3VudCApIHtcbiAgICAgICAgXG4gICAgICAgIC8vIHRyeSBmb3IgdGhlIGN1cnJlbnQgd2VpZ2h0XG4gICAgICAgIHdoaWxlICggISggdGFza1F1ZXVlWyBjdXJXZWlnaHQgXSAmJiB0YXNrUXVldWVbIGN1cldlaWdodCBdLmxlbmd0aCApIClcbiAgICAgICAgICAgIGN1cldlaWdodCsrO1xuICAgICAgICBcbiAgICAgICAgdGFza0NvdW50LS07XG4gICAgICAgIHRhc2sgPSB0YXNrUXVldWVbIGN1cldlaWdodCBdLnNoaWZ0KCk7XG4gICAgICAgIC8vY29uc29sZS5sb2coXCJUYXNrIDogXCIsIHRhc2tbMV0sIFwiIG9uIFwiLCB0YXNrWzBdLm5hbWUpO1xuICAgICAgICB0YXNrWyAwIF1bIHRhc2tbIDEgXSBdLmFwcGx5KHRhc2tbIDAgXSwgdGFza1sgMiBdKTtcbiAgICB9XG4gICAgdGFzayA9IHVuZGVmaW5lZDtcbiAgICBlcnJvckNhdGNoZXIuZGlzYWJsZSgpO1xuICAgIFxuICAgIGlzUnVubmluZyA9IGZhbHNlO1xuICAgIGlmICggdGFza0NvdW50ICkge1xuICAgICAgICBzZXRUaW1lb3V0KHJ1bk5vdyk7XG4gICAgfVxufVxuXG4vL1xuLy9pbmRleC5zZXRUYXNrRGVTeW5jID0gKCBuYiApID0+IHtcbi8vICAgIGlmICggbmIgPT09IGZhbHNlIClcbi8vICAgICAgICByZXR1cm4gZGVTeW5jID0gZmFsc2U7XG4vLyAgICBlbHNlIGlmICggbmIgPT09IHRydWUgKSB7XG4vLyAgICAgICAgZGVTeW5jICAgICAgICAgPSB0cnVlO1xuLy8gICAgICAgIGRlU3luY01heFRhc2tzID0gMTA7XG4vLyAgICB9XG4vLyAgICBlbHNlIChpcy5pbnQobmIpKVxuLy8gICAge1xuLy8gICAgICAgIGRlU3luYyAgICAgICAgID0gdHJ1ZTtcbi8vICAgICAgICBkZVN5bmNNYXhUYXNrcyA9IG5iO1xuLy8gICAgfVxuLy99O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgcHVzaFRhc2soIG9iaiwgZm4sIGFyZ3ogKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgbW9yZSBhIHN0b3JlIGhhdmUgc291cmNlcywgdGhlIG1vcmUgaXQgc2hvdWxkIGJlIHByb2Nlc3NlZCBmaXJzdFxuICAgICAgICAgKiBTbyBsZWFmcyBzdG9yZXMgc3RheSBzeW5jLCBhbmQgcm9vdCBzdG9yZXMgcmVjZWl2ZSBtZXJnZWQgc3RhdGUgdXBkYXRlcztcbiAgICAgICAgICogZ2xvYmFsIHN0YXRlIHN0YXkgY29oZXJlbnRcbiAgICAgICAgICpcbiAgICAgICAgICogVGhpcyBtZWFuIHdoYXRldmVyIHRoZSBudW1iZXIgb2Ygc3RvcmVzICYgdGhlIGNvbXBsZXhpdHkgb2YgdGhlIGRlcHMsXG4gICAgICAgICAqIHVwZGF0aW5nIGEgc3RvcmUgc3RhdGUgd2lsbCB1cGRhdGUgaXRzIHN5bmNocm9uZSBjaGlsZCBzdG9yZXMgaW1tZWRpYXRlbHlcbiAgICAgICAgICpcbiAgICAgICAgICpcbiAgICAgICAgICogQHR5cGUgeyp8bnVtYmVyfVxuICAgICAgICAgKi9cbiAgICAgICAgbGV0IHdlaWdodCA9IG9iai5fc291cmNlcyAmJiBvYmouX3NvdXJjZXMubGVuZ3RoIHx8IDEsXG4gICAgICAgICAgICBzdGFjayAgPSB0YXNrUXVldWVbIHdlaWdodCBdID1cbiAgICAgICAgICAgICAgICB0YXNrUXVldWVbIHdlaWdodCBdIHx8IFtdO1xuICAgICAgICBcbiAgICAgICAgbWF4V2VpZ2h0ID0gTWF0aC5tYXgobWF4V2VpZ2h0LCB3ZWlnaHQpO1xuICAgICAgICBjdXJXZWlnaHQgPSBNYXRoLm1pbihjdXJXZWlnaHQsIHdlaWdodCk7XG4gICAgICAgIHRhc2tDb3VudCsrO1xuICAgICAgICBcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcIlB1c2ggVGFzayA6IFwiLCBmbiwgXCIgb24gXCIsIG9iai5uYW1lLCB3ZWlnaHQpO1xuICAgICAgICBzdGFjay5wdXNoKFsgb2JqLCBmbiwgYXJneiBdKTtcbiAgICAgICAgc2V0VGltZW91dChydW5Ob3csIDApO1xuICAgICAgICByZXR1cm4gc3RhY2subGVuZ3RoO1xuICAgIH1cbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWxzL1Rhc2tTZXF1ZW5jZXIuanMiLCIvKlxuICogQ29weXJpZ2h0IChjKSAgMjAxOCBXaXNlIFdpbGQgV2ViIC5cbiAqXG4gKiAgTUlUIExpY2Vuc2VcbiAqXG4gKiAgUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqICBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiAgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuICogIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqICBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqICBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqICBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiAgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqICBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuICogIFNPRlRXQVJFLlxuICpcbiAqIEBhdXRob3IgOiBOYXRoYW5hZWwgQnJhdW5cbiAqIEBjb250YWN0IDogY2FpcGlsYWJzQGdtYWlsLmNvbVxuICovXG5cbmltcG9ydCBpcyAgICBmcm9tICdpcydcblxuY29uc3QgU2ltcGxlT2JqZWN0UHJvdG8gPSAoIHt9ICkuY29uc3RydWN0b3I7XG5cbmxldCBzY29wYWJsZXMgPSBbXTtcblxuZnVuY3Rpb24gYWRkU2NvcGFibGVUeXBlKCB0ZXN0LCBoYW5kbGUsIG1lbWJlciA9IGZhbHNlLCBzdGF0ZVNjb3BlID0gZmFsc2UgKSB7XG4gICAgc2NvcGFibGVzLnB1c2goXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRlc3QsXG4gICAgICAgICAgICBtZW1iZXIsXG4gICAgICAgICAgICBzdGF0ZVNjb3BlLFxuICAgICAgICAgICAgaGFuZGxlXG4gICAgICAgIH1cbiAgICApXG59XG5cbi8vXG5mdW5jdGlvbiBpc1Njb3BhYmxlVHlwZSggQ29tcCwgbWVtYmVyLCBzdGF0ZVNjb3BlICkge1xuICAgIFxuICAgIGZvciAoIGxldCBpID0gMDsgaSA8IHNjb3BhYmxlcy5sZW5ndGg7IGkrKyApXG4gICAgICAgIGlmIChcbiAgICAgICAgICAgICggbWVtYmVyID09PSB1bmRlZmluZWQgfHwgbWVtYmVyID09IHNjb3BhYmxlc1sgaSBdLm1lbWJlciApXG4gICAgICAgICAgICAmJiBzdGF0ZVNjb3BlID09IHNjb3BhYmxlc1sgaSBdLnN0YXRlU2NvcGVcbiAgICAgICAgICAgICYmIHNjb3BhYmxlc1sgaSBdLnRlc3QoQ29tcClcbiAgICAgICAgKVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgXG4gICAgcmV0dXJuIGZhbHNlO1xuICAgIFxufVxuXG5mdW5jdGlvbiBhcHBseVNjb3BhYmxlVHlwZSggQ29tcCwgYXJneiwgbWVtYmVyLCBzdGF0ZVNjb3BlICkge1xuICAgIFxuICAgIGZvciAoIGxldCBpID0gMDsgaSA8IHNjb3BhYmxlcy5sZW5ndGg7IGkrKyApXG4gICAgICAgIGlmICggbWVtYmVyID09IHNjb3BhYmxlc1sgaSBdLm1lbWJlciAmJiBzdGF0ZVNjb3BlID09IHNjb3BhYmxlc1sgaSBdLnN0YXRlU2NvcGUgJiYgc2NvcGFibGVzWyBpIF0udGVzdChDb21wKSApXG4gICAgICAgICAgICByZXR1cm4gc2NvcGFibGVzWyBpIF0uaGFuZGxlKENvbXAsIC4uLmFyZ3opO1xuICAgIFxuICAgIGNvbnNvbGUud2FybihcInJlU2NvcGUgOiBVbmtub3duIHR5cGVcIiwgQ29tcClcbiAgICBcbiAgICByZXR1cm4gZmFsc2U7XG4gICAgXG59XG5cbmZ1bmN0aW9uIHJlU2NvcGUoIC4uLmFyZ3ogKSB7XG4gICAgLy8gYXJlIHdlIGRlY29yYXRpbmcgYSBtZW1iZXIgLyB3aXRob3V0IGFyZ3pcbiAgICBpZiAoIGFyZ3pbIDAgXSBpbnN0YW5jZW9mIFNpbXBsZU9iamVjdFByb3RvICYmIGFyZ3pbIDIgXSBpbnN0YW5jZW9mIFNpbXBsZU9iamVjdFByb3RvICYmIGFyZ3pbIDAgXS5oYXNPd25Qcm9wZXJ0eShhcmd6WyAxIF0pICkge1xuICAgICAgICBhcmd6WyAyIF0udmFsdWUgPSBhcHBseVNjb3BhYmxlVHlwZShhcmd6WyAwIF0sIFtdLCB0cnVlLCBmYWxzZSk7XG4gICAgICAgIHJldHVybiBhcmd6WyAwIF07XG4gICAgfVxuICAgIGVsc2UgaWYgKCAhaXNTY29wYWJsZVR5cGUoYXJnelsgMCBdLCB1bmRlZmluZWQsIGZhbHNlKSApIHtcbiAgICAgICAgcmV0dXJuICggLi4uYXJnejIgKSA9PiB7XG4gICAgICAgICAgICAvLyBhcmUgd2UgZGVjb3JhdGluZyBhIG1lbWJlciAvIHdpdGggYXJnelxuICAgICAgICAgICAgaWYgKCBhcmd6MlsgMCBdIGluc3RhbmNlb2YgU2ltcGxlT2JqZWN0UHJvdG8gJiYgYXJnejJbIDIgXSBpbnN0YW5jZW9mIFNpbXBsZU9iamVjdFByb3RvICYmIGFyZ3oyWyAwIF0uaGFzT3duUHJvcGVydHkoYXJnejJbIDEgXSkgKSB7XG4gICAgICAgICAgICAgICAgYXJnejJbIDIgXS52YWx1ZSA9IGFwcGx5U2NvcGFibGVUeXBlKGFyZ3oyWyAwIF0sIGFyZ3osIHRydWUsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXJnejJbIDAgXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVTY29wZShhcmd6MlsgMCBdLCAuLi5hcmd6KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYXBwbHlTY29wYWJsZVR5cGUoYXJnelsgMCBdLCBhcmd6LnNsaWNlKDEpLCBmYWxzZSwgZmFsc2UpO1xufVxuXG5mdW5jdGlvbiBzY29wZVRvU3RhdGUoIC4uLmFyZ3ogKSB7XG4gICAgLy8gYXJlIHdlIGRlY29yYXRpbmcgYSBtZW1iZXIgLyB3aXRob3V0IGFyZ3pcbiAgICBpZiAoIGFyZ3pbIDAgXSBpbnN0YW5jZW9mIFNpbXBsZU9iamVjdFByb3RvICYmIGFyZ3pbIDIgXSBpbnN0YW5jZW9mIFNpbXBsZU9iamVjdFByb3RvICYmIGFyZ3pbIDAgXS5oYXNPd25Qcm9wZXJ0eShhcmd6WyAxIF0pICkge1xuICAgICAgICBhcmd6WyAyIF0udmFsdWUgPSBhcHBseVNjb3BhYmxlVHlwZShhcmd6WyAwIF0sIFtdLCB0cnVlLCB0cnVlKTtcbiAgICAgICAgcmV0dXJuIGFyZ3pbIDAgXTtcbiAgICB9XG4gICAgZWxzZSBpZiAoICFpc1Njb3BhYmxlVHlwZShhcmd6WyAwIF0sIHVuZGVmaW5lZCwgdHJ1ZSkgKSB7XG4gICAgICAgIHJldHVybiAoIC4uLmFyZ3oyICkgPT4ge1xuICAgICAgICAgICAgLy8gYXJlIHdlIGRlY29yYXRpbmcgYSBtZW1iZXIgLyB3aXRoIGFyZ3pcbiAgICAgICAgICAgIGlmICggYXJnejJbIDAgXSBpbnN0YW5jZW9mIFNpbXBsZU9iamVjdFByb3RvICYmIGFyZ3oyWyAyIF0gaW5zdGFuY2VvZiBTaW1wbGVPYmplY3RQcm90byAmJiBhcmd6MlsgMCBdLmhhc093blByb3BlcnR5KGFyZ3oyWyAxIF0pICkge1xuICAgICAgICAgICAgICAgIGFyZ3oyWyAyIF0udmFsdWUgPSBhcHBseVNjb3BhYmxlVHlwZShhcmd6MlsgMCBdLCBhcmd6LCB0cnVlLCB0cnVlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXJnejJbIDAgXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICByZXR1cm4gc2NvcGVUb1N0YXRlKGFyZ3oyWyAwIF0sIC4uLmFyZ3opO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBhcHBseVNjb3BhYmxlVHlwZShhcmd6WyAwIF0sIGFyZ3ouc2xpY2UoMSksIGZhbHNlLCB0cnVlKTtcbn1cblxuLy9cbi8vYWRkU2NvcGFibGVUeXBlKFxuLy8gICAgKCBDb21wICkgPT4gKENvbXAgJiYgQ29tcC5wcm90b3R5cGUgaW5zdGFuY2VvZiBTdG9yZSksXG4vLyAgICBmdW5jdGlvbiByZVNjb3BlKCAuLi5hcmd6ICkge1xuLy8gICAgICAgIGxldCBCYXNlU3RvcmUgICAgPSAoIWFyZ3pbMF0gfHwgYXJnelswXS5wcm90b3R5cGUgaW5zdGFuY2VvZiBTdG9yZSkgJiZcbi8vIGFyZ3ouc2hpZnQoKSwgc2NvcGUgICAgICAgID0gKCFhcmd6WzBdIHx8IGFyZ3pbMF0gaW5zdGFuY2VvZiBTY29wZSB8fCBpcy5mbihhcmd6WzBdKSlcbi8vICYmIGFyZ3ouc2hpZnQoKSwgdXNlICAgICAgICAgID0gKGlzLmFycmF5KGFyZ3pbMF0pKSAmJiBhcmd6LnNoaWZ0KCksIHN0YXRlTWFwICAgICA9XG4vLyAhdXNlICYmICghYXJnelswXSB8fCBhcmd6WzBdIGluc3RhbmNlb2YgU2ltcGxlT2JqZWN0UHJvdG8pICYmIGFyZ3ouc2hpZnQoKSxcbi8vIGluaXRpYWxTdGF0ZSA9IHt9OyAgbGV0IGNvbXBOYW1lID0gQmFzZVN0b3JlLmRpc3BsYXlOYW1lIHx8IEJhc2VTdG9yZS5uYW1lOyAgdXNlID1cbi8vIFsuLi4oQmFzZVN0b3JlLnVzZSB8fCBbXSksIC4uLih1c2UgfHwgW10pXTsgc3RhdGVNYXAgJiZcbi8vIFNjb3BlLnN0YXRlTWFwVG9SZWZMaXN0KHN0YXRlTWFwLCBpbml0aWFsU3RhdGUsIHVzZSk7ICBjbGFzcyBTdGF0ZVNjb3BlZFN0b3JlIGV4dGVuZHNcbi8vIEJhc2VTdG9yZSB7IHN0YXRpYyB1c2UgICAgICAgICA9IHVzZTsgc3RhdGljIGRpc3BsYXlOYW1lID0gXCJzdGF0ZVNjb3BlZChcIiArIGNvbXBOYW1lICtcbi8vIFwiKVwiOyAgY29uc3RydWN0b3IoIC4uLmFyZ3ogKSB7IHN1cGVyKHNjb3BlLCBhcmd6LnNsaWNlKGFyZ3pbMF0gaW5zdGFuY2VvZiBTY29wZSA/IDEgOlxuLy8gMCkpIH0gfSAgcmV0dXJuIFN0YXRlU2NvcGVkU3RvcmU7IH0sIGZhbHNlLCB0cnVlIClcblxuXG5leHBvcnQge1xuICAgIGFkZFNjb3BhYmxlVHlwZSxcbiAgICByZVNjb3BlLFxuICAgIHNjb3BlVG9TdGF0ZVxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbHMvc2NvcGFibGUuanMiXSwic291cmNlUm9vdCI6IiJ9