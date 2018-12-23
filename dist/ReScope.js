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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNjhiNDc5MjZhODM2YTUxZWEzYTAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9TY29wZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvaXMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaXNcIiIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL0VtaXR0ZXIuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic2hvcnRpZFwiIiwid2VicGFjazovLy8uL3NyYy9TdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvVGFza1NlcXVlbmNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvc2NvcGFibGUuanMiXSwibmFtZXMiOlsiJGdsb2JhbCIsIndpbmRvdyIsImdsb2JhbCIsIlJTIiwiX19fcmVzY29wZSIsImNvbnNvbGUiLCJ3YXJuIiwiU3RvcmUiLCJTY29wZSIsIkNvbnRleHQiLCJyZVNjb3BlIiwic2NvcGVUb1N0YXRlIiwicmVTY29wZVN0YXRlIiwiYWRkU2NvcGFibGVUeXBlIiwic2NvcGVSZWYiLCJtYXAiLCJrZXkiLCJyZXF1aXJlIiwid2Fsa25TZXQiLCJ3YWxrbkdldCIsImtleVdhbGtuU2V0Iiwia2V5V2Fsa25HZXQiLCJFdmVudEVtaXR0ZXIiLCJzaG9ydGlkIiwiX19wcm90b19fcHVzaCIsInRhcmdldCIsImlkIiwicGFyZW50IiwiZm4iLCJwcm90b3R5cGUiLCJfIiwib3BlblNjb3BlcyIsIlNpbXBsZU9iamVjdFByb3RvIiwiY29uc3RydWN0b3IiLCJzY29wZXMiLCJza2V5IiwiaXMiLCJhcnJheSIsInNvcnQiLCJhIiwiYiIsImZpcnN0bmFtZSIsImpvaW4iLCJzbSIsInN0YXRlIiwiX3JlZnMiLCJhY3Rpb25zIiwicGF0aCIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwiY3BhdGgiLCJwdXNoIiwiRnVuY3Rpb24iLCJhcyIsInN0b3Jlc01hcCIsInVwcGVyU2NvcGUiLCJzbmFwc2hvdCIsImRhdGEiLCJpbmNyZW1lbnRJZCIsInBlcnNpc3RlbmNlVG0iLCJhdXRvRGVzdHJveSIsInJvb3RFbWl0dGVyIiwiYm91bmRlZEFjdGlvbnMiLCJrZXlQSUQiLCJfaWQiLCJnZW5lcmF0ZSIsImJhc2VJZCIsImtleUluZGV4IiwiaXNMb2NhbElkIiwicmVnaXN0ZXIiLCJpIiwiX3JldiIsInN0b3JlcyIsIl9hdXRvRGVzdHJveSIsImRlYWQiLCJFcnJvciIsInNvdXJjZXMiLCJjaGlsZFNjb3BlcyIsImNoaWxkU2NvcGVzTGlzdCIsInVuU3RhYmxlQ2hpbGRzIiwic2VlbkNoaWxkcyIsIl9fcmV0YWlucyIsImFsbCIsIl9fbG9ja3MiLCJfYm91bmRlZEFjdGlvbnMiLCJ0ZXN0IiwiaW5jbHVkZXMiLCJiaW5kIiwiX2xpc3RlbmluZyIsIl9zY29wZSIsIl9taXhlZCIsIl9taXhlZExpc3QiLCJmb2xsb3dlcnMiLCJyZXRhaW4iLCJfc3RhYmxlIiwid2FpdCIsIm9uIiwiX3BhcmVudExpc3QiLCJyZWxlYXNlIiwiX3Byb3BhZyIsIl9hZGRDaGlsZCIsInJlc3RvcmUiLCJzZXRUaW1lb3V0IiwiZGlzcG9zZSIsInN0b3Jlc0xpc3QiLCJfbW91bnQiLCJrIiwiYXJndW1lbnRzIiwicmVmIiwic25hcCIsInBhcnNlUmVmIiwic3RvcmVJZCIsInJlZHVjZVJpZ2h0IiwibW91bnRlZCIsImN0eCIsInN0b3JlIiwidGFza1F1ZXVlIiwicnNTdG9yZUNsYXNzIiwibmFtZSIsImxlbmd0aCIsInNoaWZ0IiwicnNTY29wZUNsYXNzIiwiJHBhcmVudCIsIm1vdW50Iiwic2xpY2UiLCJyc1N0b3JlIiwidW5kZWZpbmVkIiwic2V0U3RhdGUiLCJfd2F0Y2hTdG9yZSIsImlzU3RhYmxlIiwicHJvcGFnIiwidGFyZ2V0Q3R4IiwibGlzdHMiLCJyZWxpbmsiLCJfX29yaWdpbiIsInNpbmdsZXRvbiIsInNyY0N0eCIsImV4dGVybmFsIiwiZm9yY2UiLCJsY3R4IiwiaW5mbyIsInRtcCIsImRlc3Ryb3kiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJnZXQiLCJzZXQiLCJ2IiwiYWN0aXZlQWN0aW9ucyIsInJzU2NvcGUiLCJhY3QiLCJoYXNPd25Qcm9wZXJ0eSIsIl9fdGFyZ2V0U3RvcmVzIiwiZGlzcGF0Y2giLCJvYmoiLCJzZXRJbml0aWFsIiwicmV2TWFwIiwibGFzdFJldnMiLCJyZWZLZXlzIiwic3RyaW5nIiwicmVkdWNlIiwicmV2cyIsInJldiIsInJlZnMiLCJyZXRhaW5TdG9yZXMiLCJnZXRVcGRhdGVzIiwiZGlzcG9zZVN0b3JlcyIsInNwbGljZSIsInRvIiwicmVmTGlzdCIsIm1peGVkQ1dVbm1vdW50IiwidW5Nb3VudEtleSIsImlzUmVhY3RDb21wb25lbnQiLCJ1bkJpbmQiLCJhbGlhcyIsInJldHJpZXZlIiwic3BsaXQiLCJyZXRyaWV2ZVN0b3JlIiwic3RvcmVzUmV2TWFwIiwibG9jYWwiLCJ1cGRhdGVkIiwiZ2V0U3RvcmVzUmV2cyIsIm91dHB1dCIsIl9nZXRSZXZNYXAiLCJjaGlsZHMiLCJfZ2V0QWxsQ2hpbGRzIiwiY2ZnIiwicGFyZW50QWxpYXMiLCJzaWQiLCJzZXJpYWxpemVfZXgiLCJleGNsdWRlIiwid2l0aENoaWxkcyIsIndpdGhQYXJlbnRzIiwid2l0aE1peGVkIiwibm9yZWZzIiwiYWxpYXNlcyIsInNlcmlhbGl6ZSIsIndpdGhDaGlsZCIsImgiLCJib29sIiwidGFrZVNuYXBzaG90QnlLZXkiLCJzdGFydHNXaXRoIiwic3Vic3RyIiwiZ2V0U25hcHNob3RCeUtleSIsImRlbGV0ZVNuYXBzaG90QnlLZXkiLCJyZXBsYWNlIiwicFN0YXRlIiwiX3JlZiIsImFjdGlvbiIsImFyZ3oiLCJzdGFjayIsImJBY3RzIiwidHJpZ2dlciIsImNiIiwib25jZSIsInJlYXNvbiIsImVtaXQiLCJlcnJvciIsInN0YWJpbGl6ZXJUTSIsImNsZWFyVGltZW91dCIsInByb3BhZ1RNIiwicmVtYXBzIiwid2FzU3RhYmxlIiwiaW5kZXhPZiIsInVuIiwiZGVzdHJveVRNIiwicmVtb3ZlTGlzdGVuZXIiLCJmb2xsb3dlciIsIl9ybUNoaWxkIiwiaXNQcm90b3R5cGVPZiIsInZhbHVlIiwiaXNLZXkiLCJmaWx0ZXIiLCJFbWl0dGVyIiwiX2V2ZW50cyIsImV2dCIsIlRhc2tTZXF1ZW5jZXIiLCJvYmpQcm90byIsImdldFByb3RvdHlwZU9mIiwiX3N0YXRpYyIsInNjb3BlIiwiZ2V0U2NvcGUiLCJzdGF0aWNTY29wZSIsIndhdGNocyIsInVzZSIsImFwcGx5IiwiaW5pdGlhbFN0YXRlIiwiZGVmYXVsdFN0YXRlIiwiYXBwbGllZCIsIl91aWQiLCJfb25TdGFiaWxpemUiLCJfcGVyc2lzdGVuY2VUbSIsIl9jZmciLCJzY29wZU9iaiIsIiRzY29wZSIsIiRzdG9yZXMiLCIkYWN0aW9ucyIsIiRkaXNwYXRjaCIsIl9yZXZzIiwiX3JlcXVpcmUiLCJfc291cmNlcyIsIl91c2UiLCJtYXRjaCIsInJlZjIiLCJfZm9sbG93ZXJzIiwiX2NoYW5nZXNTVyIsIl9hZnRlckNvbnN0cnVjdG9yIiwiaW5pdGlhbERhdGEiLCJzaG91bGRBcHBseSIsIm1hbmFnZWQiLCJuRGF0YXMiLCJyIiwiY0RhdGFzIiwiaXNDb21wbGV0ZSIsImZvbGxvdyIsImNhbGwiLCJjaGFuZ2VzIiwicmVmaW5lIiwiX19wcm90b19fIiwiX3N0YWJpbGl6ZXIiLCJwdXNoVGFzayIsIm5zIiwiZG9XYWl0Iiwib3JpZ2luIiwiaW5pdGlhbE91dHB1dHMiLCJzIiwiaGFzRGF0YUNoYW5nZSIsInN0YWJsZSIsIm5leHRTdGF0ZSIsIl9uZXh0U3RhdGUiLCJuZXh0RGF0YSIsInN5bmMiLCJjaGFuZ2UiLCJwdXNoU3RhdGUiLCJzdGFiaWxpemUiLCJzSWQiLCJfa2V5IiwiZGVmYXVsdE5hbWUiLCJudW1iZXIiLCJpbW1lZGlhdGUiLCJ0aGVuIiwicHJldmlvdXMiLCJtZSIsInNob3VsZFByb3BhZyIsIl9kZXN0cm95VE0iLCJyZW1vdmVBbGxMaXN0ZW5lcnMiLCJjU3RvcmUiLCJ0YXJnZXRSZXZzIiwidGFyZ2V0U2NvcGUiLCJvIiwiY3VyV2VpZ2h0IiwibWF4V2VpZ2h0IiwibWluV2VpZ2h0IiwidGFza0NvdW50IiwiZGVTeW5jIiwiZGVTeW5jTWF4VGFza3MiLCJ0YXNrIiwiaXNSdW5uaW5nIiwiZXJyb3JDYXRjaGVyIiwibGFzdEVycm9yIiwiZGlzYWJsZSIsImhhbmRsZUVycm9yIiwicnVuTm93IiwiZW5hYmxlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInByb2Nlc3MiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicnVuIiwiZnJvbSIsIkRhdGUiLCJub3ciLCJ3ZWlnaHQiLCJNYXRoIiwibWF4IiwibWluIiwic2NvcGFibGVzIiwiaGFuZGxlIiwibWVtYmVyIiwic3RhdGVTY29wZSIsImlzU2NvcGFibGVUeXBlIiwiQ29tcCIsImFwcGx5U2NvcGFibGVUeXBlIiwiYXJnejIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDVEE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBL0JBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEyQkEsS0FBSUEsVUFBWSxPQUFPQyxNQUFQLEtBQWtCLFdBQXBCLEdBQW9DQSxNQUFwQyxHQUE2Q0MsTUFBM0Q7O0FBTUEsS0FBTUMsS0FBS0gsUUFBUUksVUFBUixJQUFzQixFQUFqQztBQUNBLEtBQUtKLFFBQVFJLFVBQWIsRUFBMEI7QUFDdEJDLGFBQVFDLElBQVIsQ0FBYSwrREFBYjtBQUNILEVBRkQsTUFHSzs7QUFFRE4sYUFBUUksVUFBUixHQUFxQkQs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aUJBQXRCLElBQTJDd1QsTUFBTyxDQUFQLGFBQXNCeFQsaUJBQWpFLElBQXNGd1QsTUFBTyxDQUFQLEVBQVcvTCxjQUFYLENBQTBCK0wsTUFBTyxDQUFQLENBQTFCLENBQTNGLEVBQW1JO0FBQy9IQSx1QkFBTyxDQUFQLEVBQVdoSCxLQUFYLEdBQW1CK0csa0JBQWtCQyxNQUFPLENBQVAsQ0FBbEIsRUFBOEJySSxJQUE5QixFQUFvQyxJQUFwQyxFQUEwQyxJQUExQyxDQUFuQjtBQUNBLHdCQUFPcUksTUFBTyxDQUFQLENBQVA7QUFDSCxjQUhELE1BS0ksT0FBTzdVLCtCQUFhNlUsTUFBTyxDQUFQLENBQWIsU0FBNEJySSxJQUE1QixFQUFQO0FBQ1AsVUFSRDtBQVNIO0FBQ0QsWUFBT29JLGtCQUFrQnBJLEtBQU0sQ0FBTixDQUFsQixFQUE2QkEsS0FBS3RGLEtBQUwsQ0FBVyxDQUFYLENBQTdCLEVBQTRDLEtBQTVDLEVBQW1ELElBQW5ELENBQVA7QUFDSDs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7U0FJSWhILGUsR0FBQUEsZTtTQUNBSCxPLEdBQUFBLE87U0FDQUMsWSxHQUFBQSxZIiwiZmlsZSI6Ii4uLy4uL2Rpc3QvUmVTY29wZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA2OGI0NzkyNmE4MzZhNTFlYTNhMCIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpICAyMDE4IFdpc2UgV2lsZCBXZWIgLlxuICpcbiAqICBNSVQgTGljZW5zZVxuICpcbiAqICBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiAgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqICB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiAgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiAgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiAgVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG4gKiAgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqICBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG4gKiAgU09GVFdBUkUuXG4gKlxuICogQGF1dGhvciA6IE5hdGhhbmFlbCBCcmF1blxuICogQGNvbnRhY3QgOiBjYWlwaWxhYnNAZ21haWwuY29tXG4gKi9cblxubGV0ICRnbG9iYWwgPSAoIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICkgPyB3aW5kb3cgOiBnbG9iYWw7XG5cbmltcG9ydCBTY29wZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSBcIi4vU2NvcGVcIjtcbmltcG9ydCBTdG9yZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSBcIi4vU3RvcmVcIjtcbmltcG9ydCB7IGFkZFNjb3BhYmxlVHlwZSwgcmVTY29wZSwgc2NvcGVUb1N0YXRlIH0gZnJvbSBcIi4vdXRpbHMvc2NvcGFibGVcIjtcblxuY29uc3QgUlMgPSAkZ2xvYmFsLl9fX3Jlc2NvcGUgfHwge307XG5pZiAoICRnbG9iYWwuX19fcmVzY29wZSApIHtcbiAgICBjb25zb2xlLndhcm4oXCJSZVNjb3BlIGlzIGRlZmluZWQgbXVsdGlwbGUgdGltZXMgISEgXFxuQ2hlY2sgeW91J3JlIHBhY2thZ2luZ1wiKVxufVxuZWxzZSB7XG4gICAgXG4gICAgJGdsb2JhbC5fX19yZXNjb3BlID0gUlM7XG4gICAgU2NvcGUuU3RvcmUgICAgICAgID0gU3RvcmU7XG4gICAgLy9SUy5jb25zb2xlICAgICAgICAgPSBjb25zb2xlO1xuICAgIFJTLlNjb3BlICAgICAgICAgICA9IFNjb3BlO1xuICAgIFJTLkNvbnRleHQgICAgICAgICA9IFNjb3BlO1xuICAgIFJTLlN0b3JlICAgICAgICAgICA9IFN0b3JlO1xuICAgIFJTLnJlU2NvcGUgICAgICAgICA9IHJlU2NvcGU7XG4gICAgUlMuc2NvcGVUb1N0YXRlICAgID0gc2NvcGVUb1N0YXRlO1xuICAgIFJTLnJlU2NvcGVTdGF0ZSAgICA9IHNjb3BlVG9TdGF0ZTtcbiAgICBSUy5hZGRTY29wYWJsZVR5cGUgPSBhZGRTY29wYWJsZVR5cGU7XG4gICAgUlMuc2NvcGVSZWYgICAgICAgID1cbiAgICAgICAgZnVuY3Rpb24gc2NvcGVSZWYoIG1hcCwga2V5ICkge1xuICAgICAgICAgICAgbWFwWyBrZXkgXSA9IG5ldyBTY29wZS5zY29wZVJlZihtYXBbIGtleSBdKTtcbiAgICAgICAgICAgIHJldHVybiBtYXA7XG4gICAgICAgIH07XG4gICAgXG59XG5leHBvcnQgZGVmYXVsdCBSUztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXguanMiLCIvKlxuICogQ29weXJpZ2h0IChjKSAgMjAxOCBXaXNlIFdpbGQgV2ViIC5cbiAqXG4gKiAgTUlUIExpY2Vuc2VcbiAqXG4gKiAgUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqICBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiAgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuICogIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqICBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqICBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqICBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiAgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqICBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuICogIFNPRlRXQVJFLlxuICpcbiAqIEBhdXRob3IgOiBOYXRoYW5hZWwgQnJhdW5cbiAqIEBjb250YWN0IDogY2FpcGlsYWJzQGdtYWlsLmNvbVxuICovXG5cblxudmFyIGlzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vdXRpbHMvaXMnKSxcbiAgICB7IHdhbGtuU2V0LCB3YWxrbkdldCwga2V5V2Fsa25TZXQsIGtleVdhbGtuR2V0IH0gPSByZXF1aXJlKCcuL3V0aWxzL3V0aWxzJyksXG4gICAgRXZlbnRFbWl0dGVyICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi91dGlscy9FbWl0dGVyJyksXG4gICAgc2hvcnRpZCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnc2hvcnRpZCcpXG5cdCwgX19wcm90b19fcHVzaCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA9ICggdGFyZ2V0LCBpZCwgcGFyZW50ICkgPT4ge1xuXHQgICAgbGV0IGZuICAgICAgID0gZnVuY3Rpb24gKCkge1xuXHQgICAgfTtcblx0ICAgIGZuLnByb3RvdHlwZSA9IHBhcmVudCA/IG5ldyBwYXJlbnQuX1tpZF0oKSA6IHRhcmdldFtpZF0gfHwge307XG5cdCAgICB0YXJnZXRbaWRdICAgPSBuZXcgZm4oKTtcblx0ICAgIHRhcmdldC5fW2lkXSA9IGZuO1xuICAgIH0sXG5cdG9wZW5TY29wZXMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA9IHt9LFxuXHRTaW1wbGVPYmplY3RQcm90byAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSAoe30pLmNvbnN0cnVjdG9yO1xuXG4vKipcbiAqIEJhc2UgU2NvcGUgb2JqZWN0XG4gKi9cbmNsYXNzIFNjb3BlIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcblx0c3RhdGljIGdldFNjb3BlKCBzY29wZXMgKSB7XG5cdFx0bGV0IHNrZXkgPSBpcy5hcnJheShzY29wZXMpID8gc2NvcGVzLnNvcnQoKCBhLCBiICkgPT4ge1xuXHRcdFx0aWYgKCBhLmZpcnN0bmFtZSA8IGIuZmlyc3RuYW1lICkgcmV0dXJuIC0xO1xuXHRcdFx0aWYgKCBhLmZpcnN0bmFtZSA+IGIuZmlyc3RuYW1lICkgcmV0dXJuIDE7XG5cdFx0XHRyZXR1cm4gMDtcblx0XHR9KS5qb2luKCcrJykgOiBzY29wZXM7XG5cdFx0cmV0dXJuIG9wZW5TY29wZXNbc2tleV0gPSBvcGVuU2NvcGVzW3NrZXldIHx8IG5ldyBTY29wZSh7fSwgeyBpZDogc2tleSB9KTtcblx0fTtcblx0XG5cdFxuXHQvKipcblx0ICogZ2V0IGEgcGFyc2VkIHJlZmVyZW5jZSBsaXN0IGZyb20gc3RhdGVNYXBcblx0ICogQHBhcmFtIF9yZWZcblx0ICogQHJldHVybnMge3tzdG9yZUlkLCBwYXRoLCBhbGlhczogKiwgcmVmOiAqfX1cblx0ICovXG5cdHN0YXRpYyBzdGF0ZU1hcFRvUmVmTGlzdCggc20sIHN0YXRlID0ge30sIF9yZWZzID0gW10sIGFjdGlvbnMgPSB7fSwgcGF0aCA9IFwiXCIgKSB7XG5cdFx0T2JqZWN0LmtleXMoc20pLmZvckVhY2goXG5cdFx0XHRrZXkgPT4ge1xuXHRcdFx0XHRsZXQgY3BhdGggPSBwYXRoID8gcGF0aCArICcuJyArIGtleSA6IGtleTtcblx0XHRcdFx0c21ba2V5XSBpbnN0YW5jZW9mIFNjb3BlLnNjb3BlUmVmXG5cdFx0XHRcdD8gX3JlZnMucHVzaChzbVtrZXldLnBhdGggKyAnOicgKyBjcGF0aClcblx0XHRcdFx0OiAoc21ba2V5XSAmJiBzbVtrZXldIGluc3RhbmNlb2YgRnVuY3Rpb24pXG5cdFx0XHRcdCAgPyBhY3Rpb25zW2tleV0gPSBzbVtrZXldXG5cdFx0XHRcdCAgOiAoc21ba2V5XSAmJiBzbVtrZXldLnByb3RvdHlwZSBpbnN0YW5jZW9mIFNjb3BlLlN0b3JlKVxuXHRcdFx0XHQgICAgPyBfcmVmcy5wdXNoKHNtW2tleV0uYXMoY3BhdGgpKVxuXHRcdFx0XHQgICAgOiBzdGF0ZVtjcGF0aF0gPSBzbVtrZXldXG5cdFx0XHRcdC8vOiB0aGlzLnN0YXRlTWFwVG9SZWZMaXN0KHNtW2tleV0sIF9yZWZzLCBwYXRoICsgJy4nICsga2V5KVxuXHRcdFx0fVxuXHRcdClcblx0XHRyZXR1cm4gX3JlZnM7XG5cdH1cblx0XG5cdHN0YXRpYyBwZXJzaXN0ZW5jZVRtID0gMTsvLyBpZiA+IDAsIHdpbGwgd2FpdCAncGVyc2lzdGVuY2VUbScgbXMgYmVmb3JlIGRlc3Ryb3lcblx0Ly8gd2hlblxuXHQvLyBkaXNwb3NlIHJlYWNoIDBcblx0c3RhdGljIFN0b3JlICAgID0gbnVsbDtcblx0c3RhdGljIHNjb3BlUmVmID0gZnVuY3Rpb24gc2NvcGVSZWYoIHBhdGggKSB7XG5cdFx0dGhpcy5wYXRoID0gcGF0aDtcblx0fTtcblx0c3RhdGljIHNjb3BlcyAgID0gb3BlblNjb3BlczsvLyBhbGwgYWN0aXZlIHNjb3Blc1xuXHRcblx0XG5cdC8qKlxuXHQgKiBJbml0IGEgUmVTY29wZSBzY29wZVxuXHQgKlxuXHQgKiBAcGFyYW0gc3RvcmVzTWFwIHtPYmplY3R9IE9iamVjdCB3aXRoIHRoZSBpbml0aWFsIHN0b3JlcyBkZWZpbml0aW9uIC8gaW5zdGFuY2VzXG5cdCAqIEBwYXJhbSBjb25maWcge09iamVjdH0gU2NvcGUgY29uZmlnXG5cdCAqIHtcblx0ICogIHBhcmVudCB7c2NvcGV9IEBvcHRpb25hbCBwYXJlbnQgc2NvcGVcblx0ICpcblx0ICogIGlkIHtzdHJpbmd9IEBvcHRpb25hbCBpZCAoIGlmIHRoaXMgaWQgZXhpc3Qgc3RvcmVzTWFwIHdpbGwgYmUgbWVyZ2Ugb24gdGhlICdpZCdcblx0ICogICAgIHNjb3BlKSBrZXkge3N0cmluZ30gQG9wdGlvbmFsIGtleSBvZiB0aGUgc2NvcGUgKCBpZiBubyBpZCBpcyBzZXQsIHRoZSBzY29wZSBpZFxuXHQgKiAgICAgd2lsbCBiZSAocGFyZW50LmlkKyc+JytrZXkpIGluY3JlbWVudElkIHtib29sfSBAb3B0aW9uYWwgdHJ1ZSB0byBhZGQgYSBzdWZmaXhcblx0ICogICAgIGlkLCBpZiB0aGUgcHJvdmlkZWQga2V5IG9yIGlkIGdsb2JhbGx5IGV4aXN0XG5cdCAqXG5cdCAqICBzdGF0ZSB7T2JqZWN0fSBAb3B0aW9uYWwgaW5pdGlhbCBzdGF0ZSBieSBzdG9yZSBhbGlhc1xuXHQgKiAgZGF0YSB7T2JqZWN0fSBAb3B0aW9uYWwgaW5pdGlhbCBkYXRhIGJ5IHN0b3JlIGFsaWFzXG5cdCAqXG5cdCAqICByb290RW1pdHRlciB7Ym9vbH0gQG9wdGlvbmFsIHRydWUgdG8gbm90IGJlaW5nIGRlc3RhYmlsaXplZCBieSBwYXJlbnRcblx0ICogIGJvdW5kZWRBY3Rpb25zIHthcnJheSB8IHJlZ2V4cH0gQG9wdGlvbmFsIGxpc3Qgb3IgcmVnZXhwIG9mIGFjdGlvbnMgbm90XG5cdCAqICAgICBwcm9wYWdhdGVkIHRvIHRoZSBwYXJlbnRcblx0ICpcblx0ICogIHBlcnNpc3RlbmNlVG0ge251bWJlcikgaWYgPiAwLCB3aWxsIHdhaXQgJ3BlcnNpc3RlbmNlVG0nIG1zIGJlZm9yZSBkZXN0cm95IHdoZW5cblx0ICogICAgIGRpc3Bvc2UgcmVhY2ggMCBhdXRvRGVzdHJveSAge2Jvb2x9IHdpbGwgdHJpZ2dlciByZXRhaW4gJiBkaXNwb3NlIGFmdGVyIHN0YXJ0XG5cdCAqICB9XG5cdCAqIEByZXR1cm5zIHtTY29wZX1cblx0ICovXG5cdGNvbnN0cnVjdG9yKCBzdG9yZXNNYXAsIHsgcGFyZW50LCB1cHBlclNjb3BlLCBrZXksIGlkLCBzbmFwc2hvdCwgc3RhdGUsIGRhdGEsIGluY3JlbWVudElkID0gISFrZXksIHBlcnNpc3RlbmNlVG0sIGF1dG9EZXN0cm95LCByb290RW1pdHRlciwgYm91bmRlZEFjdGlvbnMgfSA9IHt9ICkge1xuXHRcdHN1cGVyKCk7XG5cdFx0dmFyIF8gPSB7XG5cdFx0XHRrZXlQSUQ6ICh1cHBlclNjb3BlICYmIHVwcGVyU2NvcGUuX2lkIHx8IHBhcmVudCAmJiBwYXJlbnQuX2lkIHx8IHNob3J0aWQuZ2VuZXJhdGUoKSksXG5cdFx0XHRrZXksXG5cdFx0XHRpbmNyZW1lbnRJZCxcblx0XHRcdGJhc2VJZDogaWRcblx0XHR9LCBrZXlJbmRleDtcblx0XHRcblx0XHRpZCA9IGlkIHx8IGtleSAmJiAoXy5rZXlQSUQgKyAnPicgKyBrZXkpO1xuXHRcdFxuXHRcdF8uaXNMb2NhbElkID0gIWlkO1xuXHRcdFxuXHRcdC8vaWYgKCBwYXJlbnQgJiYga2V5ICkge1xuXHRcdC8vICAgIGtleUluZGV4ID0gcGFyZW50Ll8uY2hpbGRTY29wZXMuZmluZChjdHg9PihjdHguX2lkPT1pZCkpO1xuXHRcdC8vICAgIGlmICgga2V5SW5kZXggPT0gLTEgKSBrZXlJbmRleCA9IHBhcmVudC5fLnNlZW5DaGlsZHM7XG5cdFx0Ly8gICAga2V5SW5kZXgrKztcblx0XHQvLyAgICBpZiAoIGtleUluZGV4IClcblx0XHQvLyAgICAgICAgaWQgPSBpZCArICdbJyArIGtleUluZGV4ICsgJ10nO1xuXHRcdC8vfVxuXHRcdFxuXHRcdGlkID0gaWQgfHwgKFwiX19fX19cIiArIHNob3J0aWQuZ2VuZXJhdGUoKSk7XG5cdFx0XG5cdFx0XG5cdFx0aWYgKCBvcGVuU2NvcGVzW2lkXSAmJiAhaW5jcmVtZW50SWQgKSB7Ly8gb3ZlcndyaXRlIGV4aXN0aW5nIHNjb3BlXG5cdFx0XHR0aGlzLl9pZCA9IGlkO1xuXHRcdFx0b3BlblNjb3Blc1tpZF0ucmVnaXN0ZXIoc3RvcmVzTWFwKTtcblx0XHRcdHJldHVybiBvcGVuU2NvcGVzW2lkXVxuXHRcdH1cblx0XHRlbHNlIGlmICggb3BlblNjb3Blc1tpZF0gJiYgaW5jcmVtZW50SWQgKSB7Ly8gZ2VuZXJhdGUga2V5IGlkXG5cdFx0XHRsZXQgaSA9IC0xO1xuXHRcdFx0d2hpbGUgKCBvcGVuU2NvcGVzW2lkICsgJ1snICsgKCsraSkgKyAnXSddICkgO1xuXHRcdFx0aWQgPSBpZCArICdbJyArIGkgKyAnXSc7XG5cdFx0fVxuXHRcdFxuXHRcdHRoaXMuX2lkICAgICAgICA9IGlkO1xuXHRcdHRoaXMuX3JldiAgICAgICA9IDA7XG5cdFx0b3BlblNjb3Blc1tpZF0gID0gdGhpcztcblx0XHRfLnBlcnNpc3RlbmNlVG0gPSBwZXJzaXN0ZW5jZVRtIHx8IHRoaXMuY29uc3RydWN0b3IucGVyc2lzdGVuY2VUbTtcblx0XHRcblx0XHR0aGlzLmFjdGlvbnMgPSB7fTtcblx0XHR0aGlzLnN0b3JlcyAgPSB7fTtcblx0XHR0aGlzLnN0YXRlICAgPSB7fTtcblx0XHR0aGlzLmRhdGEgICAgPSB7fTtcblx0XHRcblx0XHR0aGlzLnBhcmVudCAgICAgICA9IHBhcmVudDtcblx0XHR0aGlzLl8gICAgICAgICAgICA9IF87XG5cdFx0dGhpcy5fYXV0b0Rlc3Ryb3kgPSBhdXRvRGVzdHJveTtcblx0XHRcblx0XHRpZiAoIHBhcmVudCAmJiBwYXJlbnQuZGVhZCApXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDYW4ndCB1c2UgYSBkZWFkIHNjb3BlIGFzIHBhcmVudCAhXCIpO1xuXHRcdFxuXHRcdF9fcHJvdG9fX3B1c2godGhpcywgJ2FjdGlvbnMnLCBwYXJlbnQpO1xuXHRcdF9fcHJvdG9fX3B1c2godGhpcywgJ3N0b3JlcycsIHBhcmVudCk7XG5cdFx0X19wcm90b19fcHVzaCh0aGlzLCAnc3RhdGUnLCBwYXJlbnQpO1xuXHRcdF9fcHJvdG9fX3B1c2godGhpcywgJ2RhdGEnLCBwYXJlbnQpO1xuXHRcdFxuXHRcdHRoaXMuc291cmNlcyAgICAgID0gW107XG5cdFx0Xy5jaGlsZFNjb3BlcyAgICAgPSBbXTtcblx0XHRfLmNoaWxkU2NvcGVzTGlzdCA9IFtdO1xuXHRcdF8udW5TdGFibGVDaGlsZHMgID0gMDtcblx0XHRfLnNlZW5DaGlsZHMgICAgICA9IDA7XG5cdFx0XG5cdFx0dGhpcy5fX3JldGFpbnMgPSB7IGFsbDogMCB9O1xuXHRcdHRoaXMuX19sb2NrcyAgID0geyBhbGw6IDEgfTtcblx0XHRcblx0XHQvL18uc25hcHNob3QgICAgICAgID0gc25hcHNob3Q7XG5cdFx0Ly9fLnNuYXBzaG90ICAgICAgICA9IHNuYXBzaG90O1xuXHRcdF8uX2JvdW5kZWRBY3Rpb25zID0gaXMuYXJyYXkoYm91bmRlZEFjdGlvbnMpXG5cdFx0ICAgICAgICAgICAgICAgICAgICA/IHsgdGVzdDogYm91bmRlZEFjdGlvbnMuaW5jbHVkZXMuYmluZChib3VuZGVkQWN0aW9ucykgfVxuXHRcdCAgICAgICAgICAgICAgICAgICAgOiBib3VuZGVkQWN0aW9ucztcblx0XHRfLl9saXN0ZW5pbmcgICAgICA9IHt9O1xuXHRcdF8uX3Njb3BlICAgICAgICAgID0ge307XG5cdFx0Xy5fbWl4ZWQgICAgICAgICAgPSBbXTtcblx0XHRfLl9taXhlZExpc3QgICAgICA9IFtdO1xuXHRcdF8uZm9sbG93ZXJzICAgICAgID0gW107XG5cdFx0aWYgKCBwYXJlbnQgKSB7XG5cdFx0XHRwYXJlbnQucmV0YWluKFwiaXNNeVBhcmVudFwiKTtcblx0XHRcdGlmICggIXJvb3RFbWl0dGVyICkge1xuXHRcdFx0XHQhcGFyZW50Ll9zdGFibGUgJiYgdGhpcy53YWl0KFwid2FpdGluZ1BhcmVudFwiKTtcblx0XHRcdFx0cGFyZW50Lm9uKF8uX3BhcmVudExpc3QgPSB7XG5cdFx0XHRcdFx0J3N0YWJsZScgIDogcyA9PiB0aGlzLnJlbGVhc2UoXCJ3YWl0aW5nUGFyZW50XCIpLFxuXHRcdFx0XHRcdCd1bnN0YWJsZSc6IHMgPT4gdGhpcy53YWl0KFwid2FpdGluZ1BhcmVudFwiKSxcblx0XHRcdFx0XHQndXBkYXRlJyAgOiBzID0+IHRoaXMuX3Byb3BhZygpXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdHBhcmVudC5vbihfLl9wYXJlbnRMaXN0ID0ge1xuXHRcdFx0XHRcdCd1cGRhdGUnOiBzID0+IHRoaXMuX3Byb3BhZygpXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdFx0Ly8gdGhpcy5yZWdpc3RlcihwYXJlbnQuX19zY29wZSwgc3RhdGUsIGRhdGEpO1xuXHRcdH1cblx0XHRcblx0XHRcblx0XHR0aGlzLnJlZ2lzdGVyKHN0b3Jlc01hcCwgc3RhdGUsIGRhdGEpO1xuXHRcdHRoaXMuX19sb2Nrcy5hbGwtLTtcblx0XHR0aGlzLl9zdGFibGUgPSAhdGhpcy5fX2xvY2tzLmFsbDtcblx0XHRcblx0XHRpZiAoIHBhcmVudCApIHtcblx0XHRcdHBhcmVudC5fYWRkQ2hpbGQodGhpcyk7XG5cdFx0fVxuXHRcdFxuXHRcdHRoaXMucmVzdG9yZShzbmFwc2hvdCk7XG5cdFx0XG5cdFx0aWYgKCBhdXRvRGVzdHJveSApXG5cdFx0XHRzZXRUaW1lb3V0KFxuXHRcdFx0XHR0bSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5yZXRhaW4oXCJhdXRvRGVzdHJveVwiKTtcblx0XHRcdFx0XHR0aGlzLmRpc3Bvc2UoXCJhdXRvRGVzdHJveVwiKTtcblx0XHRcdFx0fVxuXHRcdFx0KVxuXHRcdFxuXHR9XG5cdFxuXHQvKipcblx0ICpcblx0ICogTW91bnQgdGhlIHN0b3JlcyBpbiBzdG9yZXNMaXN0LCBpbiB0aGlzIHNjb3BlIG9yIGluIGl0cyBwYXJlbnRzIG9yIG1peGVkIHNjb3Blc1xuXHQgKlxuXHQgKiBAcGFyYW0gc3RvcmVzTGlzdCB7c3RyaW5nfHN0b3JlUmVmfSBTdG9yZSBuYW1lLCBBcnJheSBvZiBTdG9yZSBuYW1lcywgb3IgUmVzY29wZVxuXHQgKiAgICAgc3RvcmUgcmVmIGZyb20gU3RvcmU6OmFzIG9yIFN0b3JlOmFzXG5cdCAqIEBwYXJhbSBzdGF0ZVxuXHQgKiBAcGFyYW0gZGF0YVxuXHQgKiBAcmV0dXJucyB7U2NvcGV9XG5cdCAqL1xuXHRtb3VudCggc3RvcmVzTGlzdCwgc25hcHNob3QsIHN0YXRlLCBkYXRhICkge1xuXHRcdGlmICggaXMuYXJyYXkoc3RvcmVzTGlzdCkgKSB7XG5cdFx0XHRzdG9yZXNMaXN0LmZvckVhY2goayA9PiB0aGlzLl9tb3VudChrLCBzbmFwc2hvdCwgc3RhdGUsIGRhdGEpKTtcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHR0aGlzLl9tb3VudCguLi5hcmd1bWVudHMpO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXHRcblx0X21vdW50KCBpZCwgc25hcHNob3QsIHN0YXRlLCBkYXRhICkge1xuXHRcdGxldCByZWYsIHNuYXA7XG5cdFx0XG5cdFx0cmVmID0gdGhpcy5wYXJzZVJlZihpZClcblx0XHRcblx0XHRpZiAoIGlkID09IFwiJHBhcmVudFwiICkgcmV0dXJuO1xuXHRcdGlmICggIXRoaXMuXy5fc2NvcGVbcmVmLnN0b3JlSWRdICkgey8vYXNrIG1peGVkIHx8IHBhcmVudFxuXHRcdFx0aWYgKCB0aGlzLl8uX21peGVkLnJlZHVjZVJpZ2h0KCggbW91bnRlZCwgY3R4ICkgPT4gKG1vdW50ZWQgfHwgY3R4Ll9tb3VudChpZCwgc25hcHNob3QsIHN0YXRlLCBkYXRhKSksIGZhbHNlKSB8fFxuXHRcdFx0XHQhdGhpcy5wYXJlbnQgKVxuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHRyZXR1cm4gdGhpcy5wYXJlbnQuX21vdW50KC4uLmFyZ3VtZW50cyk7XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0bGV0IHN0b3JlID0gdGhpcy5fLl9zY29wZVtyZWYuc3RvcmVJZF0sIHRhc2tRdWV1ZSA9IFtdO1xuXHRcdFx0aWYgKCBpcy5yc1N0b3JlQ2xhc3Moc3RvcmUpICkge1xuXHRcdFx0XHR0aGlzLl8uX3Njb3BlW3JlZi5zdG9yZUlkXSA9IG5ldyBzdG9yZSh0aGlzLCB7XG5cdFx0XHRcdFx0Ly9zbmFwc2hvdCxcblx0XHRcdFx0XHRuYW1lOiByZWYuc3RvcmVJZCxcblx0XHRcdFx0XHRzdGF0ZSxcblx0XHRcdFx0XHRkYXRhXG5cdFx0XHRcdH0sIHRhc2tRdWV1ZSk7XG5cdFx0XHRcdHdoaWxlICggdGFza1F1ZXVlLmxlbmd0aCApIHRhc2tRdWV1ZS5zaGlmdCgpKCk7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIGlmICggaXMucnNTY29wZUNsYXNzKHN0b3JlKSApIHtcblx0XHRcdFx0c3RvcmUgPSB0aGlzLl8uX3Njb3BlW3JlZi5zdG9yZUlkXSA9IG5ldyBzdG9yZSh7ICRwYXJlbnQ6IHRoaXMgfSwge1xuXHRcdFx0XHRcdGtleSAgICAgICAgOiByZWYuc3RvcmVJZCxcblx0XHRcdFx0XHRpbmNyZW1lbnRJZDogdHJ1ZSxcblx0XHRcdFx0XHR1cHBlclNjb3BlIDogdGhpc1xuXHRcdFx0XHRcdC8vYXV0b0Rlc3Ryb3k6IHRydWVcblx0XHRcdFx0XHQvL3BhcmVudDogdGhpc1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0Ly90aGlzLl8uX3Njb3BlWyByZWYuc3RvcmVJZCBdLnJldGFpbihcInNjb3BlZENoaWxkU2NvcGVcIik7XG5cdFx0XHRcdC8vdGhpcy5fd2F0Y2hTdG9yZShyZWYuc3RvcmVJZCk7XG5cdFx0XHRcdGlmICggcmVmLnBhdGgubGVuZ3RoID4gMSApXG5cdFx0XHRcdFx0dGhpcy5fLl9zY29wZVtyZWYuc3RvcmVJZF0ubW91bnQocmVmLnBhdGguc2xpY2UoMSkuam9pbignLicpLCBzbmFwc2hvdCwgc3RhdGUsIGRhdGEpXG5cdFx0XHRcdC8vZWxzZSByZXR1cm4gdGhpcy5fLl9zY29wZVsgcmVmLnN0b3JlSWQgXTtcblx0XHRcdH1cblx0XHRcdGlmICggaXMucnNTdG9yZShzdG9yZSkgKSB7XG5cdFx0XHRcdGlmICggc3RhdGUgIT09IHVuZGVmaW5lZCAmJiBkYXRhID09PSB1bmRlZmluZWQgKVxuXHRcdFx0XHRcdHN0b3JlLnNldFN0YXRlKHN0YXRlKTtcblx0XHRcdFx0ZWxzZSBpZiAoIHN0YXRlICE9PSB1bmRlZmluZWQgKVxuXHRcdFx0XHRcdHN0b3JlLnN0YXRlID0gc3RhdGU7XG5cdFx0XHRcdFxuXHRcdFx0XHRpZiAoIGRhdGEgIT09IHVuZGVmaW5lZCApXG5cdFx0XHRcdFx0c3RvcmUucHVzaChkYXRhKTtcblx0XHRcdH1cblx0XHRcdHRoaXMuX3dhdGNoU3RvcmUocmVmLnN0b3JlSWQpO1xuXHRcdH1cblx0XHRcblx0XHRcblx0XHRyZXR1cm4gdGhpcy5fLl9zY29wZVtyZWYuc3RvcmVJZF07XG5cdH1cblx0XG5cdF93YXRjaFN0b3JlKCBpZCwgc3RhdGUsIGRhdGEgKSB7XG5cdFx0aWYgKCAhdGhpcy5fLl9saXN0ZW5pbmdbaWRdICYmICFpcy5mbih0aGlzLl8uX3Njb3BlW2lkXSkgKSB7XG5cdFx0XHQvL2lmICggaXMucnNTdG9yZSh0aGlzLl8uX3Njb3BlWyBpZCBdKSApIHtcblx0XHRcdCF0aGlzLl8uX3Njb3BlW2lkXS5fYXV0b0Rlc3Ryb3kgJiYgdGhpcy5fLl9zY29wZVtpZF0ucmV0YWluKFwic2NvcGVkXCIpO1xuXHRcdFx0IXRoaXMuXy5fc2NvcGVbaWRdLmlzU3RhYmxlKCkgJiYgdGhpcy53YWl0KGlkKTtcblx0XHRcdHRoaXMuXy5fc2NvcGVbaWRdLm9uKFxuXHRcdFx0XHR0aGlzLl8uX2xpc3RlbmluZ1tpZF0gPSB7XG5cdFx0XHRcdFx0J2Rlc3Ryb3knIDogcyA9PiB7XG5cdFx0XHRcdFx0XHRkZWxldGUgdGhpcy5fLl9saXN0ZW5pbmdbaWRdO1xuXHRcdFx0XHRcdFx0dGhpcy5fLl9zY29wZVtpZF0gPSB0aGlzLl8uX3Njb3BlW2lkXS5jb25zdHJ1Y3Rvcjtcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdCd1cGRhdGUnICA6IHMgPT4gdGhpcy5wcm9wYWcoKSxcblx0XHRcdFx0XHQnc3RhYmxlJyAgOiBzID0+IHRoaXMucmVsZWFzZShpZCksXG5cdFx0XHRcdFx0J3Vuc3RhYmxlJzogcyA9PiB0aGlzLndhaXQoaWQpXG5cdFx0XHRcdH0pO1xuXHRcdH1cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXHRcblx0LyoqXG5cdCAqIE1peCB0YXJnZXRDdHggb24gdGhpcyBzY29wZVxuXHQgKiBNaXhlZCBzY29wZSBwYXJlbnRzIGFyZSBOT1QgbWFwcGVkXG5cdCAqIEBwYXJhbSB0YXJnZXRDdHhcblx0ICovXG5cdG1peGluKCB0YXJnZXRDdHggKSB7XG5cdFx0bGV0IHBhcmVudCA9IHRoaXMucGFyZW50LCBsaXN0cztcblx0XHRcblx0XHR0aGlzLl8uX21peGVkLnB1c2godGFyZ2V0Q3R4KVxuXHRcdHRhcmdldEN0eC5yZXRhaW4oXCJtaXhlZFRvXCIpO1xuXHRcdGlmICggIXRhcmdldEN0eC5fc3RhYmxlIClcblx0XHRcdHRoaXMud2FpdCh0YXJnZXRDdHguX2lkKTtcblx0XHR0aGlzLl8uX21peGVkTGlzdC5wdXNoKGxpc3RzID0ge1xuXHRcdFx0J3N0YWJsZScgIDogcyA9PiB0aGlzLnJlbGVhc2UodGFyZ2V0Q3R4Ll9pZCksXG5cdFx0XHQndW5zdGFibGUnOiBzID0+IHRoaXMud2FpdCh0YXJnZXRDdHguX2lkKSxcblx0XHRcdCd1cGRhdGUnICA6IHMgPT4gdGhpcy5fcHJvcGFnKClcblx0XHR9KTtcblx0XHRcblx0XHQvL3RoaXMuYWN0aW9ucyA9IHt9O1xuXHRcdC8vdGhpcy5zdG9yZXMgID0ge307XG5cdFx0Ly90aGlzLnN0YXRlICAgPSB7fTtcblx0XHQvL3RoaXMuZGF0YSAgICA9IHt9O1xuXHRcdHRhcmdldEN0eC5vbihsaXN0cyk7XG5cdFx0XG5cdFx0Ly8gcmVzZXQgcHJvdG9zXG5cdFx0Ly8gcHVzaCBuZXcgcHJvdG8gd2l0aCBwYXJlbnRcblx0XHRfX3Byb3RvX19wdXNoKHRoaXMsICdhY3Rpb25zJywgcGFyZW50KTtcblx0XHRfX3Byb3RvX19wdXNoKHRoaXMsICdzdG9yZXMnLCBwYXJlbnQpO1xuXHRcdF9fcHJvdG9fX3B1c2godGhpcywgJ3N0YXRlJywgcGFyZW50KTtcblx0XHRfX3Byb3RvX19wdXNoKHRoaXMsICdkYXRhJywgcGFyZW50KTtcblx0XHQvLyBwcmludCBsb2NhbHogYWNjZXNzb3JzXG5cdFx0dGhpcy5yZWxpbmsodGhpcy5fLl9zY29wZSwgdGhpcywgZmFsc2UsIHRydWUpO1xuXHRcdFxuXHRcdHRoaXMuXy5fbWl4ZWQuZm9yRWFjaChcblx0XHRcdGN0eCA9PiB7XG5cdFx0XHRcdC8vIHB1c2ggcHJvdG9zXG5cdFx0XHRcdF9fcHJvdG9fX3B1c2godGhpcywgJ2FjdGlvbnMnKTtcblx0XHRcdFx0X19wcm90b19fcHVzaCh0aGlzLCAnc3RvcmVzJyk7XG5cdFx0XHRcdF9fcHJvdG9fX3B1c2godGhpcywgJ3N0YXRlJyk7XG5cdFx0XHRcdF9fcHJvdG9fX3B1c2godGhpcywgJ2RhdGEnKTtcblx0XHRcdFx0dGhpcy5zdG9yZXMuX19vcmlnaW4gPSBcIm1peGVkIFwiICsgY3R4Ll9pZDtcblx0XHRcdFx0Ly8gd3JpdGUgbWl4ZWQgYWNjZXNzb3JzXG5cdFx0XHRcdGN0eC5yZWxpbmsoY3R4Ll8uX3Njb3BlLCB0aGlzLCB0cnVlLCB0cnVlKVxuXHRcdFx0fVxuXHRcdClcblx0fVxuXHRcblx0LyoqXG5cdCAqIFJlZ2lzdGVyIHN0b3JlcyBpbiBzdG9yZXNNYXAgJiBsaW5rIHRoZW0gaW4gdGhlIHByb3Rvc1xuXHQgKiBAcGFyYW0gc3RvcmVzTWFwXG5cdCAqIEBwYXJhbSBzdGF0ZVxuXHQgKiBAcGFyYW0gZGF0YVxuXHQgKi9cblx0cmVnaXN0ZXIoIHN0b3Jlc01hcCwgc3RhdGUgPSB7fSwgZGF0YSA9IHt9ICkge1xuXHRcdHRoaXMucmVsaW5rKHN0b3Jlc01hcCwgdGhpcywgZmFsc2UsIGZhbHNlKTtcblx0XHRPYmplY3Qua2V5cyhzdG9yZXNNYXApLmZvckVhY2goXG5cdFx0XHRpZCA9PiB7XG5cdFx0XHRcdGlmICggaWQgPT0gXCIkcGFyZW50XCIgKSByZXR1cm47XG5cdFx0XHRcdGlmICggc3RvcmVzTWFwW2lkXS5zaW5nbGV0b24gfHwgKGlzLmZuKHN0b3Jlc01hcFtpZF0pICYmIChzdGF0ZVtpZF0gfHwgZGF0YVtpZF0pKSApIHtcblx0XHRcdFx0XHR0aGlzLl9tb3VudChpZCwgdW5kZWZpbmVkLCBzdGF0ZVtpZF0sIGRhdGFbaWRdKVxuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2UgaWYgKCBzdGF0ZVtpZF0gfHwgZGF0YVtpZF0gKSB7XG5cdFx0XHRcdFx0aWYgKCBkYXRhW2lkXSApIHtcblx0XHRcdFx0XHRcdGlmICggc3RhdGVbaWRdIClcblx0XHRcdFx0XHRcdFx0dGhpcy5zdG9yZXNbaWRdLnN0YXRlID0gc3RhdGVbaWRdO1xuXHRcdFx0XHRcdFx0dGhpcy5zdG9yZXNbaWRdLnB1c2goZGF0YVtpZF0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRlbHNlIGlmICggc3RhdGVbaWRdICkge1xuXHRcdFx0XHRcdFx0dGhpcy5zdG9yZXNbaWRdLnNldFN0YXRlKHN0YXRlW2lkXSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMuX3dhdGNoU3RvcmUoaWQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0KVxuXHRcdFxuXHR9XG5cdFxuXHQvKipcblx0ICogTWFwIHNyY0N0eCBzdG9yZSdzIG9uIHRhcmdldEN0eCBoZWFkZXJzIHByb3RvJ3Ncblx0ICogQHBhcmFtIHNyY0N0eFxuXHQgKiBAcGFyYW0gdGFyZ2V0Q3R4XG5cdCAqIEBwYXJhbSBzdGF0ZVxuXHQgKiBAcGFyYW0gZGF0YVxuXHQgKi9cblx0cmVsaW5rKCBzcmNDdHgsIHRhcmdldEN0eCA9IHRoaXMsIGV4dGVybmFsLCBmb3JjZSApIHtcblx0XHRsZXQgbGN0eCA9IHRhcmdldEN0eC5fLnN0b3Jlcy5wcm90b3R5cGU7XG5cdFx0T2JqZWN0LmtleXMoc3JjQ3R4KVxuXHRcdCAgICAgIC5mb3JFYWNoKFxuXHRcdFx0ICAgICAgaWQgPT4ge1xuXHRcdFx0XHQgICAgICBpZiAoICFmb3JjZSAmJiB0YXJnZXRDdHguXy5fc2NvcGVbaWRdID09PSBzcmNDdHhbaWRdIHx8XG5cdFx0XHRcdFx0ICAgICAgdGFyZ2V0Q3R4Ll8uX3Njb3BlW2lkXSAmJiAodGFyZ2V0Q3R4Ll8uX3Njb3BlW2lkXS5jb25zdHJ1Y3RvciA9PT0gc3JjQ3R4W2lkXSkgKVxuXHRcdFx0XHRcdCAgICAgIHJldHVybjtcblx0XHRcdFx0XG5cdFx0XHRcdCAgICAgIGlmICggIWZvcmNlICYmIHRhcmdldEN0eC5fLl9zY29wZVtpZF0gKSB7XG5cdFx0XHRcdFx0ICAgICAgaWYgKCAhZXh0ZXJuYWwgJiYgIWlzLmZuKHRhcmdldEN0eC5fLl9zY29wZVtpZF0pICkge1xuXHRcdFx0XHRcdFx0ICAgICAgY29uc29sZS5pbmZvKFwiUmVzY29wZSBTdG9yZSA6IFwiLCBpZCwgXCIgYWxyZWFkeSBleGlzdCBpbiB0aGlzIHNjb3BlICEgKCBIb3Qgc3dpdGNoaW5nIHRoZSBzdG9yZSApXCIpO1xuXHRcdFx0XHRcdFx0ICAgICAgbGV0IHRtcCAgICAgICAgICAgICAgICA9IHRhcmdldEN0eC5fLl9zY29wZVtpZF07XG5cdFx0XHRcdFx0XHQgICAgICB0YXJnZXRDdHguXy5fc2NvcGVbaWRdID0gdGFyZ2V0Q3R4Ll8uX3Njb3BlW2lkXS5jb25zdHJ1Y3Rvcjtcblx0XHRcdFx0XHRcdCAgICAgIHRoaXMuX21vdW50KGlkLCBudWxsLCB0bXAuc3RhdGUpO1xuXHRcdFx0XHRcdFx0ICAgICAgdG1wLmRlc3Ryb3koKTtcblx0XHRcdFx0XHRcdCAgICAgIC8vdGFyZ2V0Q3R4Ll8uX3Njb3BlWyBpZCBdLl9fcHJvdG9fXyA9IHRtcC5fX3Byb3RvX187XG5cdFx0XHRcdFx0ICAgICAgfVxuXHRcdFx0XHRcdCAgICAgIGlmICggIWV4dGVybmFsICYmIGlzLmZuKHRhcmdldEN0eC5fLl9zY29wZVtpZF0pIClcblx0XHRcdFx0XHRcdCAgICAgIHRhcmdldEN0eC5fLl9zY29wZVtpZF0gPSBzcmNDdHhbaWRdO1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdCAgICAgIHJldHVybjtcblx0XHRcdFx0ICAgICAgfVxuXHRcdFx0XHQgICAgICBlbHNlIGlmICggIWZvcmNlICYmICFleHRlcm5hbCApXG5cdFx0XHRcdFx0ICAgICAgdGhpcy5fLl9zY29wZVtpZF0gPSBzcmNDdHhbaWRdO1xuXHRcdFx0XHRcblx0XHRcdFx0ICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFxuXHRcdFx0XHRcdCAgICAgIGxjdHgsXG5cdFx0XHRcdFx0ICAgICAgaWQsXG5cdFx0XHRcdFx0ICAgICAge1xuXHRcdFx0XHRcdFx0ICAgICAgZW51bWVyYWJsZSAgOiB0cnVlLFxuXHRcdFx0XHRcdFx0ICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuXHRcdFx0XHRcdFx0ICAgICAgZ2V0ICAgICAgICAgOiAoKSA9PiB0aGlzLl8uX3Njb3BlW2lkXVxuXHRcdFx0XHRcdCAgICAgIH1cblx0XHRcdFx0ICAgICAgKTtcblx0XHRcdFx0ICAgICAgaWYgKCBpZCA9PSBcIiRwYXJlbnRcIiApIHJldHVybjtcblx0XHRcdFx0ICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFxuXHRcdFx0XHRcdCAgICAgIHRhcmdldEN0eC5fLnN0YXRlLnByb3RvdHlwZSxcblx0XHRcdFx0XHQgICAgICBpZCxcblx0XHRcdFx0XHQgICAgICB7XG5cdFx0XHRcdFx0XHQgICAgICBlbnVtZXJhYmxlICA6IHRydWUsXG5cdFx0XHRcdFx0XHQgICAgICBjb25maWd1cmFibGU6IHRydWUsXG5cdFx0XHRcdFx0XHQgICAgICBnZXQgICAgICAgICA6ICgpID0+ICh0aGlzLl8uX3Njb3BlW2lkXSAmJiB0aGlzLl8uX3Njb3BlW2lkXS5zdGF0ZSksXG5cdFx0XHRcdFx0XHQgICAgICBzZXQgICAgICAgICA6ICggdiApID0+ICh0aGlzLl9tb3VudChpZCwgdW5kZWZpbmVkLCB2KSlcblx0XHRcdFx0XHQgICAgICB9XG5cdFx0XHRcdCAgICAgICk7XG5cdFx0XHRcdCAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShcblx0XHRcdFx0XHQgICAgICB0YXJnZXRDdHguXy5kYXRhLnByb3RvdHlwZSxcblx0XHRcdFx0XHQgICAgICBpZCxcblx0XHRcdFx0XHQgICAgICB7XG5cdFx0XHRcdFx0XHQgICAgICBlbnVtZXJhYmxlICA6IHRydWUsXG5cdFx0XHRcdFx0XHQgICAgICBjb25maWd1cmFibGU6IHRydWUsXG5cdFx0XHRcdFx0XHQgICAgICBnZXQgICAgICAgICA6ICgpID0+ICh0aGlzLl8uX3Njb3BlW2lkXSAmJiB0aGlzLl8uX3Njb3BlW2lkXS5kYXRhKSxcblx0XHRcdFx0XHRcdCAgICAgIHNldCAgICAgICAgIDogKCB2ICkgPT4gKHRoaXMuX21vdW50KGlkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdikpXG5cdFx0XHRcdFx0ICAgICAgfVxuXHRcdFx0XHQgICAgICApO1xuXHRcdFx0XHRcblx0XHRcdFx0ICAgICAgbGV0IGFjdGlvbnMgICAgICAgPSBzcmNDdHhbaWRdIGluc3RhbmNlb2YgU2NvcGUuU3RvcmVcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICA/IHNyY0N0eFtpZF0uY29uc3RydWN0b3IuYWN0aW9uc1xuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgIDogc3JjQ3R4W2lkXS5hY3Rpb25zLFxuXHRcdFx0XHQgICAgICAgICAgYWN0aXZlQWN0aW9ucyA9IHRhcmdldEN0eC5fLmFjdGlvbnMucHJvdG90eXBlO1xuXHRcdFx0XHQgICAgICBpZiAoIGlzLnJzU2NvcGUodGhpcy5fLl9zY29wZVtpZF0ucHJvdG90eXBlKSApXG5cdFx0XHRcdFx0ICAgICAgdGhpcy5fbW91bnQoaWQpO1xuXHRcdFx0XHQgICAgICBpZiAoIGlzLnJzU2NvcGUodGhpcy5fLl9zY29wZVtpZF0pICkge1xuXHRcdFx0XHRcdCAgICAgIGFjdGl2ZUFjdGlvbnNbaWRdID0gdGhpcy5fLl9zY29wZVtpZF0uYWN0aW9ucztcblx0XHRcdFx0ICAgICAgfVxuXHRcdFx0XHQgICAgICBpZiAoICFpcy5yc1N0b3JlKHRoaXMuXy5fc2NvcGVbaWRdKSAmJiAhaXMucnNTdG9yZUNsYXNzKHRoaXMuXy5fc2NvcGVbaWRdKSApXG5cdFx0XHRcdFx0ICAgICAgcmV0dXJuO1xuXHRcdFx0XHRcblx0XHRcdFx0ICAgICAgYWN0aW9ucyAmJlxuXHRcdFx0XHQgICAgICBPYmplY3Qua2V5cyhhY3Rpb25zKVxuXHRcdFx0XHQgICAgICAgICAgICAuZm9yRWFjaChcblx0XHRcdFx0XHQgICAgICAgICAgICAoIGFjdCApID0+IHtcblx0XHRcdFx0XHRcdCAgICAgICAgICAgIGlmICggYWN0aXZlQWN0aW9ucy5oYXNPd25Qcm9wZXJ0eShhY3QpIClcblx0XHRcdFx0XHRcdFx0ICAgICAgICAgICAgYWN0aXZlQWN0aW9uc1thY3RdLl9fdGFyZ2V0U3RvcmVzKys7XG5cdFx0XHRcdFx0XHQgICAgICAgICAgICBlbHNlIHtcblx0XHRcdFx0XHRcdFx0ICAgICAgICAgICAgYWN0aXZlQWN0aW9uc1thY3RdICAgICAgICAgICAgICAgID0gdGhpcy5kaXNwYXRjaC5iaW5kKHRoaXMsIGFjdCk7XG5cdFx0XHRcdFx0XHRcdCAgICAgICAgICAgIGFjdGl2ZUFjdGlvbnNbYWN0XS5fX3RhcmdldFN0b3JlcyA9IDE7XG5cdFx0XHRcdFx0XHQgICAgICAgICAgICB9XG5cdFx0XHRcdFx0ICAgICAgICAgICAgfVxuXHRcdFx0XHQgICAgICAgICAgICApXG5cdFx0XHQgICAgICB9XG5cdFx0ICAgICAgKVxuXHR9XG5cdFxuXHQvKipcblx0ICogQmluZCBzdG9yZXMgZnJvbSB0aGlzIHNjb3BlLCBoaXMgcGFyZW50cyBhbmQgbWl4ZWQgc2NvcGVcblx0ICpcblx0ICogQHBhcmFtIG9iaiB7UmVhY3QuQ29tcG9uZW50fFN0b3JlfGZ1bmN0aW9ufVxuXHQgKiBAcGFyYW0ga2V5IHtzdHJpbmd9IHN0b3JlcyBrZXlzIHRvIGJpbmQgdXBkYXRlc1xuXHQgKiBAcGFyYW0gYXNcblx0ICogQHBhcmFtIHNldEluaXRpYWwge2Jvb2x9IGZhbHNlIHRvIG5vdCBwcm9wYWcgaW5pdGlhbCB2YWx1ZSAoZGVmYXVsdCA6IHRydWUpXG5cdCAqL1xuXHRiaW5kKCBvYmosIGtleSwgYXMsIHNldEluaXRpYWwgPSB0cnVlLCByZXZNYXAgPSB7fSApIHtcblx0XHRsZXQgbGFzdFJldnMsIGRhdGEsIHJlZktleXM7XG5cdFx0aWYgKCBrZXkgJiYgIWlzLmFycmF5KGtleSkgKVxuXHRcdFx0a2V5ID0gW2tleV07XG5cdFx0XG5cdFx0aWYgKCBhcyA9PT0gZmFsc2UgfHwgYXMgPT09IHRydWUgKSB7XG5cdFx0XHRzZXRJbml0aWFsID0gYXM7XG5cdFx0XHRhcyAgICAgICAgID0gbnVsbDtcblx0XHR9XG5cdFx0XG5cdFx0cmVmS2V5cyA9IGtleVxuXHRcdFx0Lm1hcChpZCA9PiAoaXMuc3RyaW5nKGlkKSA/IGlkIDogaWQubmFtZSkpXG5cdFx0XHQubWFwKGlkID0+ICh0aGlzLnBhcnNlUmVmKGlkKSkpO1xuXHRcdFxuXHRcdFxuXHRcdHRoaXMuXy5mb2xsb3dlcnMucHVzaChcblx0XHRcdFtcblx0XHRcdFx0b2JqLFxuXHRcdFx0XHRrZXksXG5cdFx0XHRcdGFzIHx8IHVuZGVmaW5lZCxcblx0XHRcdFx0bGFzdFJldnMgPSByZWZLZXlzLnJlZHVjZSgoIHJldnMsIHJlZiApID0+IHtcblx0XHRcdFx0XHRyZXZzW3JlZi5zdG9yZUlkXSA9IHJldnNbcmVmLnN0b3JlSWRdIHx8IHtcblx0XHRcdFx0XHRcdHJldiA6IDAsXG5cdFx0XHRcdFx0XHRyZWZzOiBbXVxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0cmV2c1tyZWYuc3RvcmVJZF0ucmVmcy5wdXNoKHJlZik7XG5cdFx0XHRcdFx0cmV0dXJuIHJldnM7XG5cdFx0XHRcdH0sIHJldk1hcClcblx0XHRcdF0pO1xuXHRcdFxuXHRcdHRoaXMubW91bnQoa2V5KTtcblx0XHR0aGlzLnJldGFpblN0b3JlcyhPYmplY3Qua2V5cyhsYXN0UmV2cyksICdsaXN0ZW5lcnMnKTtcblx0XHRcblx0XHRpZiAoIHNldEluaXRpYWwgJiYgdGhpcy5fc3RhYmxlICkge1xuXHRcdFx0ZGF0YSA9IHRoaXMuZ2V0VXBkYXRlcyhsYXN0UmV2cyk7XG5cdFx0XHRpZiAoICFkYXRhICkgcmV0dXJuIHRoaXM7XG5cdFx0XHRpZiAoIHR5cGVvZiBvYmogIT0gXCJmdW5jdGlvblwiICkge1xuXHRcdFx0XHRpZiAoIGFzICkgb2JqLnNldFN0YXRlKHsgW2FzXTogZGF0YSB9KTtcblx0XHRcdFx0ZWxzZSBvYmouc2V0U3RhdGUoZGF0YSk7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0b2JqKGRhdGEpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXHRcblx0LyoqXG5cdCAqIFVuIGJpbmQgdGhpcyBzY29wZSBvZmYgdGhlIGdpdmVuIGNvbXBvbmVudC1rZXlzXG5cdCAqIEBwYXJhbSBvYmpcblx0ICogQHBhcmFtIGtleVxuXHQgKiBAcmV0dXJucyB7QXJyYXkuPCo+fVxuXHQgKi9cblx0dW5CaW5kKCBvYmosIGtleSwgYXMgKSB7XG5cdFx0dmFyIGZvbGxvd2VycyA9IHRoaXMuXy5mb2xsb3dlcnMsXG5cdFx0ICAgIGkgICAgICAgICA9IGZvbGxvd2VycyAmJiBmb2xsb3dlcnMubGVuZ3RoO1xuXHRcdHdoaWxlICggZm9sbG93ZXJzICYmIGktLSApXG5cdFx0XHRpZiAoIGZvbGxvd2Vyc1tpXVswXSA9PT0gb2JqICYmXG5cdFx0XHRcdCgnJyArIGZvbGxvd2Vyc1tpXVsxXSkgPT0gKCcnICsga2V5KSAmJlxuXHRcdFx0XHRmb2xsb3dlcnNbaV1bMl0gPT0gYXMgKSB7XG5cdFx0XHRcdHRoaXMuZGlzcG9zZVN0b3JlcyhPYmplY3Qua2V5cyhmb2xsb3dlcnNbaV1bM10pLCAnbGlzdGVuZXJzJyk7XG5cdFx0XHRcdHJldHVybiBmb2xsb3dlcnMuc3BsaWNlKGksIDEpO1xuXHRcdFx0fVxuXHR9XG5cdFxuXHQvKipcblx0ICogTW91bnQgdGhlIHN0b3JlcyBpbiBzdG9yZXNMaXN0IGZyb20gdGhpcyBzY29wZSwgaXRzIHBhcmVudHMgYW5kIG1peGVkIHNjb3BlXG5cdCAqIEJpbmQgdGhlbSB0byAndG8nXG5cdCAqIEhvb2sgJ3RvJyBzbyBpdCB3aWxsIGF1dG8gdW5iaW5kIG9uICdkZXN0cm95JyBvciAnY29tcG9uZW50V2lsbFVubW91bnQnXG5cdCAqIEBwYXJhbSB0b1xuXHQgKiBAcGFyYW0gc3RvcmVzTGlzdFxuXHQgKiBAcGFyYW0gYmluZFxuXHQgKiBAcmV0dXJucyB7T2JqZWN0fSBJbml0aWFsIG91dHB1dHMgb2YgdGhlIHN0b3JlcyBpbiAnc3RvcmVzTGlzdCdcblx0ICovXG5cdG1hcCggdG8sIHN0b3Jlc0xpc3QsIGJpbmQgPSB0cnVlLCByZXZNYXAgKSB7XG5cdFx0bGV0IFN0b3JlICAgPSB0aGlzLmNvbnN0cnVjdG9yLlN0b3JlO1xuXHRcdHN0b3Jlc0xpc3QgID0gaXMuYXJyYXkoc3RvcmVzTGlzdCkgPyBzdG9yZXNMaXN0IDogW3N0b3Jlc0xpc3RdO1xuXHRcdGxldCByZWZMaXN0ID0gc3RvcmVzTGlzdC5tYXAodGhpcy5wYXJzZVJlZik7XG5cdFx0dGhpcy5tb3VudChzdG9yZXNMaXN0KTtcblx0XHRpZiAoIGJpbmQgJiYgdG8gaW5zdGFuY2VvZiBTdG9yZSApIHtcblx0XHRcdFN0b3JlLm1hcCh0bywgc3RvcmVzTGlzdCwgdGhpcywgdGhpcywgZmFsc2UpXG5cdFx0fVxuXHRcdGVsc2UgaWYgKCBiaW5kICkge1xuXHRcdFx0dGhpcy5iaW5kKHRvLCBzdG9yZXNMaXN0LCB1bmRlZmluZWQsIGZhbHNlKTtcblx0XHRcdFxuXHRcdFx0bGV0IG1peGVkQ1dVbm1vdW50LFxuXHRcdFx0ICAgIHVuTW91bnRLZXkgPSB0by5pc1JlYWN0Q29tcG9uZW50ID8gXCJjb21wb25lbnRXaWxsVW5tb3VudFwiIDogXCJkZXN0cm95XCI7XG5cdFx0XHRcblx0XHRcdGlmICggdG8uaGFzT3duUHJvcGVydHkodW5Nb3VudEtleSkgKSB7XG5cdFx0XHRcdG1peGVkQ1dVbm1vdW50ID0gdG9bdW5Nb3VudEtleV07XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdHRvW3VuTW91bnRLZXldID0gKCAuLi5hcmd6ICkgPT4ge1xuXHRcdFx0XHRkZWxldGUgdG9bdW5Nb3VudEtleV07XG5cdFx0XHRcdGlmICggbWl4ZWRDV1VubW91bnQgKVxuXHRcdFx0XHRcdHRvW3VuTW91bnRLZXldID0gbWl4ZWRDV1VubW91bnQ7XG5cdFx0XHRcdFxuXHRcdFx0XHR0aGlzLnVuQmluZCh0bywgc3RvcmVzTGlzdCk7XG5cdFx0XHRcdHJldHVybiB0b1t1bk1vdW50S2V5XSAmJiB0b1t1bk1vdW50S2V5XSguLi5hcmd6KTtcblx0XHRcdH1cblx0XHRcdFxuXHRcdH1cblx0XHRyZXR1cm4gcmV2TWFwICYmIHRoaXMuZ2V0VXBkYXRlcyhyZXZNYXApIHx8IHJlZkxpc3QucmVkdWNlKCggZGF0YSwgcmVmICkgPT4ge1xuXHRcdFx0d2Fsa25TZXQoZGF0YSwgcmVmLmFsaWFzIHx8IHJlZi5wYXRoLCB0aGlzLnJldHJpZXZlKHJlZi5wYXRoKSlcblx0XHRcdHJldHVybiBkYXRhO1xuXHRcdH0sIHt9KTtcblx0fVxuXHRcblx0LyoqXG5cdCAqIEdldCBjdXJyZW50IGRhdGEgdmFsdWUgZnJvbSBqc29uIHBhdGhcblx0ICogQHBhcmFtIHBhdGhcblx0ICogQHJldHVybnMge3N0cmluZ3wqfVxuXHQgKi9cblx0cmV0cmlldmUoIHBhdGggPSBcIlwiICkge1xuXHRcdHBhdGggPSBpcy5zdHJpbmcocGF0aCkgPyBwYXRoLnNwbGl0KCcuJykgOiBwYXRoO1xuXHRcdHJldHVybiBwYXRoICYmXG5cdFx0XHR0aGlzLnN0b3Jlc1twYXRoWzBdXSAmJlxuXHRcdFx0dGhpcy5zdG9yZXNbcGF0aFswXV0ucmV0cmlldmUgJiZcblx0XHRcdHRoaXMuc3RvcmVzW3BhdGhbMF1dLnJldHJpZXZlKHBhdGguc2xpY2UoMSkpO1xuXHR9XG5cdFxuXHQvKipcblx0ICogR2V0IGN1cnJlbnQgc3RvcmUgZnJvbSBqc29uIHBhdGhcblx0ICogQHBhcmFtIHBhdGhcblx0ICogQHJldHVybnMge3N0cmluZ3wqfVxuXHQgKi9cblx0cmV0cmlldmVTdG9yZSggcGF0aCA9IFwiXCIgKSB7XG5cdFx0cGF0aCA9IGlzLnN0cmluZyhwYXRoKSA/IHBhdGguc3BsaXQoJy4nKSA6IHBhdGg7XG5cdFx0cmV0dXJuIHBhdGhcblx0XHRcdCYmIHBhdGgubGVuZ3RoXG5cdFx0XHQmJiAoXG5cdFx0XHRcdHBhdGgubGVuZ3RoICE9IDEgJiYgdGhpcy5zdG9yZXNbcGF0aFswXV0ucmV0cmlldmVTdG9yZVxuXHRcdFx0XHQ/IHRoaXMuc3RvcmVzW3BhdGhbMF1dLnJldHJpZXZlU3RvcmUocGF0aC5zbGljZSgxKSlcblx0XHRcdFx0OiBwYXRoLmxlbmd0aCA9PSAxICYmIHRoaXMuc3RvcmVzW3BhdGhbMF1dXG5cdFx0XHQpO1xuXHR9XG5cdFxuXHQvKipcblx0ICogR2V0IG9yIHVwZGF0ZSBzdG9yZXNSZXZNYXAncyByZXZpc2lvbnNcblx0ICogQHBhcmFtIHN0b3Jlc1Jldk1hcFxuXHQgKiBAcGFyYW0gbG9jYWxcblx0ICogQHJldHVybnMge3t9fVxuXHQgKi9cblx0Z2V0U3RvcmVzUmV2cyggc3RvcmVzUmV2TWFwID0ge30sIGxvY2FsICkge1xuXHRcdGxldCBjdHggPSB0aGlzLl8uX3Njb3BlO1xuXHRcdGlmICggIXN0b3Jlc1Jldk1hcCApIHtcblx0XHRcdHN0b3Jlc1Jldk1hcCA9IHt9O1xuXHRcdH1cblx0XHRPYmplY3Qua2V5cyhjdHgpLmZvckVhY2goXG5cdFx0XHRpZCA9PiB7XG5cdFx0XHRcdGlmICggaWQgPT0gXCIkcGFyZW50XCIgKSByZXR1cm47XG5cdFx0XHRcdGlmICggIWlzLmZuKGN0eFtpZF0pXG5cdFx0XHRcdCkge1xuXHRcdFx0XHRcdHN0b3Jlc1Jldk1hcFtpZF0gPSBjdHhbaWRdLl9yZXY7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZSBpZiAoICFzdG9yZXNSZXZNYXAuaGFzT3duUHJvcGVydHkoaWQpIClcblx0XHRcdFx0XHRzdG9yZXNSZXZNYXBbaWRdID0gZmFsc2Vcblx0XHRcdH1cblx0XHQpO1xuXHRcdGlmICggIWxvY2FsICkge1xuXHRcdFx0dGhpcy5fLl9taXhlZC5yZWR1Y2UoKCB1cGRhdGVkLCBjdHggKSA9PiAoY3R4LmdldFN0b3Jlc1JldnMoc3RvcmVzUmV2TWFwKSwgc3RvcmVzUmV2TWFwKSwgc3RvcmVzUmV2TWFwKTtcblx0XHRcdHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LmdldFN0b3Jlc1JldnMoc3RvcmVzUmV2TWFwKTtcblx0XHR9XG5cdFx0cmV0dXJuIHN0b3Jlc1Jldk1hcDtcblx0fVxuXHRcblx0LyoqXG5cdCAqIEdldCB1cGRhdGVkIG91dHB1dCBiYXNpbmcgc3RvcmVzUmV2TWFwJ3MgcmV2aXNpb25zLlxuXHQgKiBJZiBhIHN0b3JlIGluICdzdG9yZXNSZXZNYXAnIHdhcyB1cGRhdGVkOyBhZGQgaXQgdG8gJ291dHB1dCcgJiB1cGRhdGUgc3RvcmVzUmV2TWFwXG5cdCAqIEBwYXJhbSBzdG9yZXNSZXZNYXBcblx0ICogQHBhcmFtIG91dHB1dFxuXHQgKiBAcGFyYW0gdXBkYXRlZFxuXHQgKiBAcmV0dXJucyB7Knx7fX1cblx0ICovXG5cdGdldFJlZnNVcGRhdGVzKCByZWZzLCByZXZNYXAsIG91dHB1dCApIHtcblx0XHRcblx0XHRyZXZNYXAgPSByZXZNYXAgfHwgcmVmc1xuXHRcdFx0Lm1hcChpZCA9PiAoaXMuc3RyaW5nKGlkKSA/IGlkIDogaWQubmFtZSkpXG5cdFx0XHQubWFwKGlkID0+ICh0aGlzLnBhcnNlUmVmKGlkKSkpXG5cdFx0XHQucmVkdWNlKCggcmV2cywgcmVmICkgPT4ge1xuXHRcdFx0XHRyZXZzW3JlZi5zdG9yZUlkXSA9IHJldnNbcmVmLnN0b3JlSWRdIHx8IHtcblx0XHRcdFx0XHRyZXYgOiAwLFxuXHRcdFx0XHRcdHJlZnM6IFtdXG5cdFx0XHRcdH07XG5cdFx0XHRcdHJldnNbcmVmLnN0b3JlSWRdLnJlZnMucHVzaChyZWYpO1xuXHRcdFx0XHRyZXR1cm4gcmV2cztcblx0XHRcdH0sIHt9KTtcblx0XHRcblx0XHRyZXR1cm4gdGhpcy5nZXRVcGRhdGVzKHJldk1hcCwgb3V0cHV0KVxuXHRcdFxuXHR9XG5cdFxuXHQvKipcblx0ICogR2V0IG9yIHVwZGF0ZSBvdXRwdXQgYmFzaW5nIHN0b3Jlc1Jldk1hcCdzIHJldmlzaW9ucy5cblx0ICogSWYgYSBzdG9yZSBpbiAnc3RvcmVzUmV2TWFwJyB3YXMgdXBkYXRlZDsgYWRkIGl0IHRvICdvdXRwdXQnICYgdXBkYXRlIHN0b3Jlc1Jldk1hcFxuXHQgKiBAdG9kbzogb3B0aW0gLyB1c2UgcHJvdG9zXG5cdCAqIEBwYXJhbSBzdG9yZXNSZXZNYXBcblx0ICogQHBhcmFtIG91dHB1dFxuXHQgKiBAcGFyYW0gdXBkYXRlZFxuXHQgKiBAcmV0dXJucyB7Knx7fX1cblx0ICovXG5cdGdldFVwZGF0ZXMoIHN0b3Jlc1Jldk1hcCwgb3V0cHV0LCB1cGRhdGVkICkge1xuXHRcdFxuXHRcdG91dHB1dCAgICAgICA9IG91dHB1dCB8fCB7fTtcblx0XHRzdG9yZXNSZXZNYXAgPSBzdG9yZXNSZXZNYXAgfHwgdGhpcy5fZ2V0UmV2TWFwKCk7XG5cdFx0T2JqZWN0LmtleXMoc3RvcmVzUmV2TWFwKS5mb3JFYWNoKFxuXHRcdFx0aWQgPT4ge1xuXHRcdFx0XHRsZXQgc3RvcmUgICAgICAgID0gdGhpcy5zdG9yZXNbaWRdO1xuXHRcdFx0XHRzdG9yZXNSZXZNYXBbaWRdID0gc3RvcmVzUmV2TWFwW2lkXSB8fCB7IHJldjogMCwgcmVmczogW10gfTtcblx0XHRcdFx0XG5cdFx0XHRcdGlmICggc3RvcmUgJiYgaXMuZm4oc3RvcmUpICkge1xuXHRcdFx0XHRcdHVwZGF0ZWQgICAgPSB0cnVlO1xuXHRcdFx0XHRcdG91dHB1dFtpZF0gPSB1bmRlZmluZWQ7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZSBpZiAoIHN0b3JlICYmIHN0b3JlLl9yZXYgPiBzdG9yZXNSZXZNYXBbaWRdLnJldiApIHtcblx0XHRcdFx0XHRzdG9yZXNSZXZNYXBbaWRdLnJldiA9IHN0b3JlLl9yZXY7XG5cdFx0XHRcdFx0b3V0cHV0W2lkXSAgICAgICAgICAgPSBzdG9yZS5kYXRhO1xuXHRcdFx0XHRcdHVwZGF0ZWQgICAgICAgICAgICAgID0gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdClcblx0XHRyZXR1cm4gdXBkYXRlZCAmJiBvdXRwdXQ7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBSZWN1cnNpdmVseSBnZXQgYWxsIHN0b3JlcyByZXZzXG5cdCAqIEBwYXJhbSBjaGlsZHNcblx0ICogQHJldHVybnMge0FycmF5fVxuXHQgKiBAcHJpdmF0ZVxuXHQgKi9cblx0X2dldFJldk1hcCggc3RvcmVzUmV2TWFwID0ge30gKSB7XG5cdFx0bGV0IGN0eCA9IHRoaXMuXy5fc2NvcGU7XG5cdFx0T2JqZWN0LmtleXMoY3R4KS5mb3JFYWNoKFxuXHRcdFx0aWQgPT4ge1xuXHRcdFx0XHRpZiAoIGlkID09IFwiJHBhcmVudFwiIHx8IHN0b3Jlc1Jldk1hcFtpZF0gKSByZXR1cm47XG5cdFx0XHRcdHN0b3Jlc1Jldk1hcFtpZF0gPSB7IHJldjogY3R4W2lkXS5fcmV2LCByZWZzOiBbXSB9O1xuXHRcdFx0XHRcblx0XHRcdH0pO1xuXHRcdHRoaXMuXy5fbWl4ZWQucmVkdWNlUmlnaHQoXG5cdFx0XHQoIHN0b3Jlc1Jldk1hcCwgY3R4ICkgPT4gKGN0eC5fZ2V0UmV2TWFwKHN0b3Jlc1Jldk1hcCkpLCBzdG9yZXNSZXZNYXApO1xuXHRcdHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50Ll9nZXRSZXZNYXAoc3RvcmVzUmV2TWFwKTtcblx0XHRyZXR1cm4gc3RvcmVzUmV2TWFwO1xuXHR9XG5cdFxuXHQvKipcblx0ICogUmVjdXJzaXZlbHkgZ2V0IGFsbCBjaGlsZCBzY29wZXNcblx0ICogQHBhcmFtIGNoaWxkc1xuXHQgKiBAcmV0dXJucyB7QXJyYXl9XG5cdCAqIEBwcml2YXRlXG5cdCAqL1xuXHRfZ2V0QWxsQ2hpbGRzKCBjaGlsZHMgPSBbXSApIHtcblx0XHRjaGlsZHMucHVzaCguLi50aGlzLl8uY2hpbGRTY29wZXMpO1xuXHRcdHRoaXMuXy5jaGlsZFNjb3Blcy5mb3JFYWNoKFxuXHRcdFx0Y3R4ID0+IHtcblx0XHRcdFx0Y3R4Ll9nZXRBbGxDaGlsZHMoY2hpbGRzKTtcblx0XHRcdH1cblx0XHQpO1xuXHRcdHJldHVybiBjaGlsZHM7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBTZXJpYWxpemUgYWxsIGFjdGl2ZSBzdG9yZXMgc3RhdGUgJiBkYXRhIGluIGV2ZXJ5IGNoaWxkcyAmIG1peGVkIHNjb3Blc1xuXHQgKlxuXHQgKiBTY29wZXMgd2l0aG91dCBrZXkgb3IgaWQgYXJlIGlnbm9yZWRcblx0ICogQHBhcmFtIG91dHB1dFxuXHQgKiBAcmV0dXJucyB7e319XG5cdCAqL1xuXHRzZXJpYWxpemUoIGNmZyA9IHt9LCBvdXRwdXQgPSB7fSApIHtcblx0XHRsZXQgY3R4ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID0gdGhpcy5fLl9zY29wZSxcblx0XHQgICAgeyBiYXNlSWQsIGtleSwga2V5UElELCBpbmNyZW1lbnRJZCB9ID0gdGhpcy5fLFxuXHRcdCAgICB7XG5cdFx0XHQgICAgYWxpYXMsXG5cdFx0XHQgICAgcGFyZW50QWxpYXMsXG5cdFx0ICAgIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA9IGNmZyxcblx0XHQgICAgc2lkICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID0ga2V5XG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gKHBhcmVudEFsaWFzIHx8IGtleVBJRCkgKyAnPicgKyBrZXlcblx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBhbGlhcyB8fCBwYXJlbnRBbGlhcyAmJiAocGFyZW50QWxpYXMgKyAnLycgKyBiYXNlSWQpIHx8IHRoaXMuX2lkO1xuXHRcdFxuXHRcdFxuXHRcdC8vYWxpYXMgPSBhbGlhcyB8fCBiYXNlSWQ7XG5cdFx0cmV0dXJuIHRoaXMuc2VyaWFsaXplX2V4KGNmZywgb3V0cHV0LCBzaWQsIGFsaWFzLCBbXCIkcGFyZW50XCJdKVxuXHR9XG5cdFxuXHRzZXJpYWxpemVfZXgoIGNmZyA9IHt9LCBvdXRwdXQgPSB7fSwgc2lkLCBhbGlhcywgZXhjbHVkZSApIHtcblx0XHRsZXQgY3R4ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID0gdGhpcy5fLl9zY29wZSxcblx0XHQgICAgeyBiYXNlSWQsIGtleSwga2V5UElELCBpbmNyZW1lbnRJZCB9ID0gdGhpcy5fLFxuXHRcdCAgICB7XG5cdFx0XHQgICAgd2l0aENoaWxkcyA9IHRydWUsXG5cdFx0XHQgICAgd2l0aFBhcmVudHMsXG5cdFx0XHQgICAgd2l0aE1peGVkICA9IHRydWUsXG5cdFx0XHQgICAgbm9yZWZzLFxuXHRcdFx0ICAgIHBhcmVudEFsaWFzLFxuXHRcdFx0ICAgIGFsaWFzZXMgICAgPSB7fVxuXHRcdCAgICB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSBjZmc7XG5cdFx0XG5cdFx0aWYgKCBrZXlXYWxrbkdldChvdXRwdXQsIHNpZCkgKSB7XG5cdFx0XHRpZiAoICFpbmNyZW1lbnRJZCApLy8gZG9uZVxuXHRcdFx0XHRyZXR1cm4gb3V0cHV0O1xuXHRcdFx0ZWxzZSBpZiAoIGluY3JlbWVudElkICkgey8vIGdlbmVyYXRlIGtleSBpZFxuXHRcdFx0XHRsZXQgaSA9IC0xO1xuXHRcdFx0XHR3aGlsZSAoIGtleVdhbGtuR2V0KG91dHB1dCwgc2lkICsgJ1snICsgKCsraSkgKyAnXScpICkgO1xuXHRcdFx0XHRzaWQgPSBzaWQgKyAnWycgKyBpICsgJ10nO1xuXHRcdFx0fVxuXHRcdH1cblx0XHQvL0B0b2RvIDogYmV0dGVyIHNlcmlhbGl6ZSBtZXRob2Rcblx0XHRrZXlXYWxrblNldChvdXRwdXQsIHNpZCwge30pO1xuXHRcdFxuXHRcdE9iamVjdC5rZXlzKGN0eCkuZm9yRWFjaChcblx0XHRcdGlkID0+IHtcblx0XHRcdFx0aWYgKCBleGNsdWRlLmluY2x1ZGVzKGlkKSB8fCBpcy5yc1N0b3JlQ2xhc3MoY3R4W2lkXSkgfHwgaXMucnNTY29wZUNsYXNzKGN0eFtpZF0pIClcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFxuXHRcdFx0XHRjdHhbaWRdLnNlcmlhbGl6ZSh7IC4uLmNmZywgcGFyZW50QWxpYXM6IHNpZCB9LCBvdXRwdXQpO1xuXHRcdFx0fVxuXHRcdClcblx0XHRcblx0XHQvL3dpdGhQYXJlbnRzICYmIHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LnNlcmlhbGl6ZSh7XG5cdFx0Ly9cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRoQ2hpbGQgIDogZmFsc2UsXG5cdFx0Ly9cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRoUGFyZW50czogdHJ1ZSxcblx0XHQvL1x0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpdGhNaXhlZCxcblx0XHQvL1x0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcmVmc1xuXHRcdC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIG91dHB1dCk7XG5cdFx0XG5cdFx0d2l0aENoaWxkcyAmJiB0aGlzLl8uY2hpbGRTY29wZXMuZm9yRWFjaChcblx0XHRcdGN0eCA9PiB7XG5cdFx0XHRcdCFjdHguXy5pc0xvY2FsSWQgJiYgY3R4LnNlcmlhbGl6ZSh7XG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpdGhDaGlsZCAgOiB0cnVlLFxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRoUGFyZW50czogZmFsc2UsXG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudEFsaWFzOiBzaWQsXG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpdGhNaXhlZCxcblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9yZWZzLFxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgb3V0cHV0KTtcblx0XHRcdH1cblx0XHQpO1xuXHRcdFxuXHRcdHdpdGhNaXhlZCAmJiB0aGlzLl8uX21peGVkLmZvckVhY2goXG5cdFx0XHRjdHggPT4ge1xuXHRcdFx0XHQhY3R4Ll8uaXNMb2NhbElkICYmIGN0eC5zZXJpYWxpemUoe1xuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRoQ2hpbGQgIDogZmFsc2UsXG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpdGhQYXJlbnRzOiBmYWxzZSxcblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aE1peGVkLFxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JlZnNcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIG91dHB1dCk7XG5cdFx0XHR9XG5cdFx0KTtcblx0XHRcblx0XHRpZiAoIGFsaWFzICkge1xuXHRcdFx0b3V0cHV0ID0gT2JqZWN0LmtleXMob3V0cHV0KVxuXHRcdFx0ICAgICAgICAgICAgICAgLnJlZHVjZShcblx0XHRcdFx0ICAgICAgICAgICAgICAgKCBoLCBrICkgPT4gKFxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgIGhbayA9PT0gdGhpcy5faWRcblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgID8gYWxpYXNcblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgIDoga10gPSBvdXRwdXRba10sXG5cdFx0XHRcdFx0XHQgICAgICAgICAgICAgICBoXG5cdFx0XHRcdCAgICAgICAgICAgICAgICksXG5cdFx0XHRcdCAgICAgICAgICAgICAgIHt9XG5cdFx0XHQgICAgICAgICAgICAgICApXG5cdFx0fVxuXHRcdHJldHVybiBvdXRwdXQ7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBSZXN0b3JlIHN0YXRlICYgZGF0YSBmcm9tIHRoZSBzZXJpYWxpemUgZm5cblx0ICogQHBhcmFtIHNuYXBzaG90XG5cdCAqIEBwYXJhbSBmb3JjZVxuXHQgKi9cblx0cmVzdG9yZSggc25hcHNob3QsIGNmZyA9IHt9LCBmb3JjZSA9IGlzLmJvb2woY2ZnKSAmJiBjZmcgKSB7XG5cdFx0bGV0IGN0eCA9IHRoaXMuXy5fc2NvcGUsIHNuYXA7XG5cdFx0XG5cdFx0aWYgKCBzbmFwc2hvdCAmJiBjZmcgJiYgY2ZnLmFsaWFzICYmIGNmZy5hbGlhcyAhPSB0aGlzLl9pZCApIHtcblx0XHRcdHNuYXAgPSB7XG5cdFx0XHRcdC4uLnNuYXBzaG90LFxuXHRcdFx0XHRbdGhpcy5faWRdOiBzbmFwc2hvdFtjZmcuYWxpYXNdXG5cdFx0XHR9XG5cdFx0XHRkZWxldGUgc25hcFtjZmcuYWxpYXNdO1xuXHRcdFx0c25hcHNob3QgPSBzbmFwO1xuXHRcdH1cblx0XHRzbmFwc2hvdCA9IHNuYXBzaG90XG5cdFx0XHQmJiBrZXlXYWxrbkdldChzbmFwc2hvdCwgdGhpcy5faWQpXG5cdFx0XHR8fCB0aGlzLnRha2VTbmFwc2hvdEJ5S2V5KHRoaXMuX2lkKTtcblx0XHRcblx0XHRcblx0XHRpZiAoICFzbmFwc2hvdCApXG5cdFx0XHRyZXR1cm47XG5cdFx0XG5cdFx0dGhpcy5fLnNuYXBzaG90ID0geyAuLi5zbmFwc2hvdCB9O1xuXHRcdFxuXHRcdHNuYXAgICAgICAgICAgPSBzbmFwc2hvdFsnLyddO1xuXHRcdHNuYXBzaG90WycvJ10gPSB7IC4uLnNuYXAgfTtcblx0XHRzbmFwICYmIE9iamVjdC5rZXlzKHNuYXApLmZvckVhY2goXG5cdFx0XHRuYW1lID0+IHtcblx0XHRcdFx0aWYgKCBuYW1lID09IFwiJHBhcmVudFwiICkgcmV0dXJuO1xuXHRcdFx0XHRcblx0XHRcdFx0aWYgKCBjdHhbbmFtZV0gKSB7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0aWYgKCBmb3JjZSAmJiAhaXMuZm4oY3R4W25hbWVdKSApXG5cdFx0XHRcdFx0XHRjdHhbbmFtZV0uZGVzdHJveSgpO1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdHRoaXMuX21vdW50KG5hbWUpOy8vIHF1aWV0XG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHR9XG5cdFx0KVxuXHRcdFxuXHRcdHRoaXMuXy5fbWl4ZWQuZm9yRWFjaChcblx0XHRcdGN0eCA9PiB7XG5cdFx0XHRcdCFjdHguXy5pc0xvY2FsSWQgJiYgY3R4LnJlc3RvcmUodW5kZWZpbmVkLCBmb3JjZSk7XG5cdFx0XHR9XG5cdFx0KTtcblx0XHRcblx0XHR0aGlzLl8uY2hpbGRTY29wZXMuZm9yRWFjaChcblx0XHRcdGN0eCA9PiB7XG5cdFx0XHRcdCFjdHguXy5pc0xvY2FsSWQgJiYgY3R4LnJlc3RvcmUodW5kZWZpbmVkLCBmb3JjZSk7XG5cdFx0XHR9XG5cdFx0KTtcblx0fVxuXHRcblx0Z2V0U25hcHNob3RCeUtleSgga2V5LCBsb2NhbCApIHtcblx0XHQvLyBvbmx5IGhhdmUgdGhlIGxvY2FsIHNuYXBcblx0XHRpZiAoIHRoaXMuXy5zbmFwc2hvdCAmJiBrZXkuc3RhcnRzV2l0aCh0aGlzLl9pZCkgKSB7XG5cdFx0XHRsZXQgb2JqID0ga2V5V2Fsa25HZXQodGhpcy5fLnNuYXBzaG90LCBrZXkuc3Vic3RyKHRoaXMuX2lkLmxlbmd0aCkpXG5cdFx0XHQvL2lmICggb2JqICkge1xuXHRcdFx0Ly8gICAgdGhpcy5kZWxldGVTbmFwc2hvdEJ5S2V5KGtleSk7XG5cdFx0XHQvL31cblx0XHRcdHJldHVybiBvYmo7XG5cdFx0fVxuXHRcdGVsc2UgcmV0dXJuICFsb2NhbFxuXHRcdFx0JiYgdGhpcy5wYXJlbnRcblx0XHRcdCYmIHRoaXMucGFyZW50LmdldFNuYXBzaG90QnlLZXkoa2V5KVxuXHRcdFx0fHxcblx0XHRcdHRoaXMuc3RvcmVzLiRwYXJlbnRcblx0XHRcdCYmIHRoaXMuc3RvcmVzLiRwYXJlbnQuZ2V0U25hcHNob3RCeUtleShrZXkpO1xuXHRcdFxuXHR9XG5cdFxuXHRnZXRTbmFwc2hvdEJ5S2V5RXh0KCBzbmFwc2hvdCwga2V5LCBsb2NhbCApIHtcblx0XHQvLyBvbmx5IGhhdmUgdGhlIGxvY2FsIHNuYXBcblx0XHRpZiAoIHNuYXBzaG90ICkge1xuXHRcdFx0bGV0IG9iaiA9IGtleVdhbGtuR2V0KHNuYXBzaG90LCBrZXkpXG5cdFx0XHRyZXR1cm4gb2JqO1xuXHRcdH1cblx0XHRcblx0fVxuXHRcblx0dGFrZVNuYXBzaG90QnlLZXkoIGtleSwgbG9jYWwgKSB7XG5cdFx0aWYgKCB0aGlzLl8uc25hcHNob3QgJiYga2V5LnN0YXJ0c1dpdGgodGhpcy5faWQpICkge1xuXHRcdFx0bGV0IG9iaiA9IGtleVdhbGtuR2V0KHRoaXMuXy5zbmFwc2hvdCwga2V5LnN1YnN0cih0aGlzLl9pZC5sZW5ndGgpKVxuXHRcdFx0aWYgKCBvYmogKSB7XG5cdFx0XHRcdHRoaXMuZGVsZXRlU25hcHNob3RCeUtleShrZXksIHRydWUpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIG9iajtcblx0XHR9XG5cdFx0ZWxzZSByZXR1cm4gIWxvY2FsXG5cdFx0XHQmJiB0aGlzLnBhcmVudFxuXHRcdFx0JiYgdGhpcy5wYXJlbnQudGFrZVNuYXBzaG90QnlLZXkoa2V5KVxuXHRcdFx0fHxcblx0XHRcdHRoaXMuc3RvcmVzLiRwYXJlbnRcblx0XHRcdCYmIHRoaXMuc3RvcmVzLiRwYXJlbnQudGFrZVNuYXBzaG90QnlLZXkoa2V5KTtcblx0fVxuXHRcblx0ZGVsZXRlU25hcHNob3RCeUtleSgga2V5LCBsb2NhbCApIHtcblx0XHRpZiAoIHRoaXMuXy5zbmFwc2hvdCAmJiBrZXkuc3RhcnRzV2l0aCh0aGlzLl9pZCkgKSB7XG5cdFx0XHRsZXQgb2JqID0ga2V5V2Fsa25HZXQodGhpcy5fLnNuYXBzaG90LCBrZXkuc3Vic3RyKHRoaXMuX2lkLmxlbmd0aCkucmVwbGFjZSgvXiguKltcXD58XFwvXSlbXlxcPnxcXC9dKyQvaWcsICckMScpKVxuXHRcdFx0aWYgKCBvYmogKVxuXHRcdFx0XHRkZWxldGUgb2JqW2tleS5yZXBsYWNlKC9eLipbXFw+fFxcL10oW15cXD58XFwvXSspJC9pZywgJyQxJyldXG5cdFx0fVxuXHRcdHJldHVybiAhbG9jYWxcblx0XHRcdCYmIHRoaXMucGFyZW50XG5cdFx0XHQmJiB0aGlzLnBhcmVudC5kZWxldGVTbmFwc2hvdEJ5S2V5KGtleSlcblx0XHRcdHx8XG5cdFx0XHR0aGlzLnN0b3Jlcy4kcGFyZW50XG5cdFx0XHQmJiB0aGlzLnN0b3Jlcy4kcGFyZW50LmRlbGV0ZVNuYXBzaG90QnlLZXkoa2V5KTtcblx0fVxuXHRcblx0c2V0U3RhdGUoIHBTdGF0ZSApIHtcblx0XHRPYmplY3Qua2V5cyhwU3RhdGUpXG5cdFx0ICAgICAgLmZvckVhY2goayA9PiAodGhpcy5zdGF0ZVtrXSA9IHBTdGF0ZVtrXSkpXG5cdH1cblx0XG5cdC8qKlxuXHQgKiBnZXQgYSBwYXJzZWQgcmVmZXJlbmNlXG5cdCAqIEBwYXJhbSBfcmVmXG5cdCAqIEByZXR1cm5zIHt7c3RvcmVJZCwgcGF0aCwgYWxpYXM6ICosIHJlZjogKn19XG5cdCAqL1xuXHRwYXJzZVJlZiggX3JlZiApIHtcblx0XHRpZiAoIHR5cGVvZiBfcmVmICE9PSAnc3RyaW5nJyApIHtcblx0XHRcdHRoaXMucmVnaXN0ZXIoeyBbX3JlZi5uYW1lXTogX3JlZi5zdG9yZSB9KTtcblx0XHRcdF9yZWYgPSBfcmVmLm5hbWU7XG5cdFx0fVxuXHRcdGxldCByZWYgPSBfcmVmLnNwbGl0KCc6Jyk7XG5cdFx0cmVmWzBdICA9IHJlZlswXS5zcGxpdCgnLicpO1xuXHRcdHJldHVybiB7XG5cdFx0XHRzdG9yZUlkOiByZWZbMF1bMF0sXG5cdFx0XHRwYXRoICAgOiByZWZbMF0sXG5cdFx0XHRhbGlhcyAgOiByZWZbMV0gfHwgcmVmWzBdW3JlZlswXS5sZW5ndGggLSAxXSxcblx0XHRcdHJlZiAgICA6IF9yZWZcblx0XHR9O1xuXHR9XG5cdFxuXHQvKipcblx0ICogRGlzcGF0Y2ggYW4gYWN0aW9uIHRvIHRoZSB0b3AgcGFyZW50ICYgbWl4ZWQgc2NvcGVzLCBpbiBhbGwgc3RvcmVzXG5cdCAqXG5cdCAqIEBwYXJhbSBhY3Rpb25cblx0ICogQHBhcmFtIGRhdGFcblx0ICogQHJldHVybnMge1Njb3BlfVxuXHQgKi9cblx0ZGlzcGF0Y2goIGFjdGlvbiwgLi4uYXJneiApIHtcblx0XHRpZiAoIHRoaXMuZGVhZCApIHtcblx0XHRcdGNvbnNvbGUud2FybihcIkRpc3BhdGNoIHdhcyBjYWxsZWQgb24gYSBkZWFkIHNjb3BlLCBjaGVjayB5b3UncmUgYXN5bmMgZnVuY3Rpb25zIGluIHRoaXMgc3RhY2suLi5cIiwgKG5ldyBFcnJvcigpKS5zdGFjayk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGxldCBiQWN0cyA9IHRoaXMuXy5fYm91bmRlZEFjdGlvbnM7XG5cdFx0T2JqZWN0LmtleXModGhpcy5fLl9zY29wZSlcblx0XHQgICAgICAuZm9yRWFjaChcblx0XHRcdCAgICAgIGlkID0+IHtcblx0XHRcdFx0ICAgICAgaWYgKCBpZCA9PSBcIiRwYXJlbnRcIiApIHJldHVybjtcblx0XHRcdFx0ICAgICAgaWYgKCAhaXMuZm4odGhpcy5fLl9zY29wZVtpZF0pIClcblx0XHRcdFx0XHQgICAgICB0aGlzLl8uX3Njb3BlW2lkXS50cmlnZ2VyKGFjdGlvbiwgLi4uYXJneik7XG5cdFx0XHQgICAgICB9XG5cdFx0ICAgICAgKTtcblx0XHRcblx0XHRpZiAoIGJBY3RzICYmIGJBY3RzLnRlc3QoYWN0aW9uKSApXG5cdFx0XHRyZXR1cm47XG5cdFx0XG5cdFx0dGhpcy5fLl9taXhlZC5mb3JFYWNoKCggY3R4ICkgPT4gKGN0eC5kaXNwYXRjaChhY3Rpb24sIC4uLmFyZ3opKSk7XG5cdFx0dGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuZGlzcGF0Y2goYWN0aW9uLCAuLi5hcmd6KTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXHRcblx0Ly9cblx0dHJpZ2dlcigpIHtcblx0XHR0aGlzLmRpc3BhdGNoKC4uLmFyZ3VtZW50cyk7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBvbmNlKCdzdGFibGUnLCBjYilcblx0ICogQHBhcmFtIG9iaiB7UmVhY3QuQ29tcG9uZW50fFN0b3JlfGZ1bmN0aW9uKVxuXHQgKiBAcGFyYW0ga2V5IHtzdHJpbmd9IG9wdGlvbmFsIGtleSB3aGVyZSB0byBtYXAgdGhlIHB1YmxpYyBzdGF0ZVxuXHQgKi9cblx0dGhlbiggY2IgKSB7XG5cdFx0aWYgKCB0aGlzLl9zdGFibGUgKVxuXHRcdFx0cmV0dXJuIGNiKHRoaXMuZGF0YSk7XG5cdFx0dGhpcy5vbmNlKCdzdGFibGUnLCBlID0+IGNiKHRoaXMuZGF0YSkpO1xuXHR9XG5cdFxuXHQvKipcblx0ICogQ2FsbCByZXRhaW4gb24gdGhlIHNjb3BlZCBzdG9yZXMgYmFzaW5nIGdpdmVuXG5cdCAqXG5cdCAqIEBwYXJhbSBzdG9yZXNcblx0ICogQHBhcmFtIHJlYXNvblxuXHQgKi9cblx0cmV0YWluU3RvcmVzKCBzdG9yZXMgPSBbXSwgcmVhc29uICkge1xuXHRcdC8vc3RvcmVzLmZvckVhY2goXG5cdFx0Ly8gICAgaWQgPT4gKCAoICF0aGlzLnN0b3Jlc1sgaWQgXSB8fCAhdGhpcy5zdG9yZXNbIGlkIF0ucmV0YWluICkgJiYgY29uc29sZS53YXJuKGlkLCByZWFzb24pIClcblx0XHQvLylcblx0XHRzdG9yZXMuZm9yRWFjaChcblx0XHRcdGlkID0+ICh0aGlzLnN0b3Jlc1tpZF0gJiYgdGhpcy5zdG9yZXNbaWRdLnJldGFpbiAmJiB0aGlzLnN0b3Jlc1tpZF0ucmV0YWluKHJlYXNvbikpXG5cdFx0KVxuXHR9XG5cdFxuXHQvKipcblx0ICogQ2FsbCByZXRhaW4gb24gdGhlIHNjb3BlZCBzdG9yZXNcblx0ICpcblx0ICogQHBhcmFtIHN0b3Jlc1xuXHQgKiBAcGFyYW0gcmVhc29uXG5cdCAqL1xuXHRkaXNwb3NlU3RvcmVzKCBzdG9yZXMgPSBbXSwgcmVhc29uICkge1xuXHRcdHN0b3Jlcy5mb3JFYWNoKFxuXHRcdFx0aWQgPT4gKHRoaXMuc3RvcmVzW2lkXSAmJiB0aGlzLnN0b3Jlc1tpZF0uZGlzcG9zZSAmJiB0aGlzLnN0b3Jlc1tpZF0uZGlzcG9zZShyZWFzb24pKVxuXHRcdClcblx0fVxuXHRcblx0LyoqXG5cdCAqIEtlZXAgdGhlIHNjb3BlIHVuc3RhYmxlIHVudGlsIHJlbGVhc2UgaXMgY2FsbGVkXG5cdCAqIEBwYXJhbSByZWFzb25cblx0ICovXG5cdHdhaXQoIHJlYXNvbiApIHtcblx0XHQvL2NvbnNvbGUubG9nKFwid2FpdFwiLCByZWFzb24pO1xuXHRcdHRoaXMuX3N0YWJsZSAmJiAhdGhpcy5fX2xvY2tzLmFsbCAmJiB0aGlzLmVtaXQoXCJ1bnN0YWJsZVwiLCB0aGlzKTtcblx0XHR0aGlzLl9zdGFibGUgPSBmYWxzZTtcblx0XHR0aGlzLl9fbG9ja3MuYWxsKys7XG5cdFx0aWYgKCByZWFzb24gKSB7XG5cdFx0XHR0aGlzLl9fbG9ja3NbcmVhc29uXSA9IHRoaXMuX19sb2Nrc1tyZWFzb25dIHx8IDA7XG5cdFx0XHR0aGlzLl9fbG9ja3NbcmVhc29uXSsrO1xuXHRcdH1cblx0fVxuXHRcblx0XG5cdC8qKlxuXHQgKiBTdGFiaWxpemUgdGhlIHNjb3BlIGlmIG5vIG1vcmUgbG9ja3MgcmVtYWluICh3YWl0IGZuKVxuXHQgKiBAcGFyYW0gcmVhc29uXG5cdCAqL1xuXHRyZWxlYXNlKCByZWFzb24gKSB7XG5cdFx0XG5cdFx0aWYgKCByZWFzb24gKSB7XG5cdFx0XHRpZiAoIHRoaXMuX19sb2Nrc1tyZWFzb25dID09IDAgKVxuXHRcdFx0XHRjb25zb2xlLmVycm9yKFwiUmVsZWFzZSBtb3JlIHRoYW4gbG9ja2luZyAhXCIsIHJlYXNvbik7XG5cdFx0XHR0aGlzLl9fbG9ja3NbcmVhc29uXSA9IHRoaXMuX19sb2Nrc1tyZWFzb25dIHx8IDA7XG5cdFx0XHR0aGlzLl9fbG9ja3NbcmVhc29uXS0tO1xuXHRcdH1cblx0XHRpZiAoICFyZWFzb24gJiYgdGhpcy5fX2xvY2tzLmFsbCA9PSAwIClcblx0XHRcdGNvbnNvbGUuZXJyb3IoXCJSZWxlYXNlIG1vcmUgdGhhbiBsb2NraW5nICFcIik7XG5cdFx0XG5cdFx0dGhpcy5fX2xvY2tzLmFsbC0tO1xuXHRcdGlmICggIXRoaXMuX19sb2Nrcy5hbGwgKSB7XG5cdFx0XHR0aGlzLl8uc3RhYmlsaXplclRNICYmIGNsZWFyVGltZW91dCh0aGlzLl8uc3RhYmlsaXplclRNKTtcblx0XHRcdFxuXHRcdFx0dGhpcy5fLnN0YWJpbGl6ZXJUTSA9IHNldFRpbWVvdXQoXG5cdFx0XHRcdGUgPT4ge1xuXHRcdFx0XHRcdHRoaXMuXy5zdGFiaWxpemVyVE0gPSBudWxsO1xuXHRcdFx0XHRcdGlmICggdGhpcy5fX2xvY2tzLmFsbCApXG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0dGhpcy5fLnByb3BhZ1RNICYmIGNsZWFyVGltZW91dCh0aGlzLl8ucHJvcGFnVE0pO1xuXHRcdFx0XHRcdHRoaXMuX3JldisrO1xuXHRcdFx0XHRcdHRoaXMuX3N0YWJsZSA9IHRydWU7XG5cdFx0XHRcdFx0dGhpcy5lbWl0KFwic3RhYmxlXCIsIHRoaXMpO1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdCF0aGlzLmRlYWQgJiYgdGhpcy5fcHJvcGFnKCk7Ly8gc3RhYmlsaXR5IGNhbiBpbmR1Y2UgZGVzdHJveVxuXHRcdFx0XHR9XG5cdFx0XHQpO1xuXHRcdH1cblx0XHRcblx0fVxuXHRcblx0LyoqXG5cdCAqIFByb3BhZyBzdG9yZXMgdXBkYXRlcyBiYXNpbmcgdGhlaXJzIGxhc3QgdXBkYXRlc1xuXHQgKi9cblx0cHJvcGFnKCkge1xuXHRcdHRoaXMuXy5wcm9wYWdUTSAmJiBjbGVhclRpbWVvdXQodGhpcy5fLnByb3BhZ1RNKTtcblx0XHR0aGlzLl8ucHJvcGFnVE0gPSBzZXRUaW1lb3V0KFxuXHRcdFx0ZSA9PiB7XG5cdFx0XHRcdHRoaXMuXy5wcm9wYWdUTSA9IG51bGw7XG5cdFx0XHRcdHRoaXMuX3Byb3BhZygpXG5cdFx0XHR9LCAyXG5cdFx0KTtcblx0fVxuXHRcblx0X3Byb3BhZygpIHtcblx0XHRpZiAoIHRoaXMuXy5mb2xsb3dlcnMubGVuZ3RoIClcblx0XHRcdHRoaXMuXy5mb2xsb3dlcnMuZm9yRWFjaCgoIHsgMDogb2JqLCAxOiBrZXksIDI6IGFzLCAzOiBsYXN0UmV2cywgMzogcmVtYXBzIH0gKSA9PiB7XG5cdFx0XHRcdGxldCBkYXRhID0gdGhpcy5nZXRVcGRhdGVzKGxhc3RSZXZzKTtcblx0XHRcdFx0aWYgKCAhZGF0YSApIHJldHVybjtcblx0XHRcdFx0Ly9jb25zb2xlLmxvZyhkYXRhLCBsYXN0UmV2cylcblx0XHRcdFx0aWYgKCB0eXBlb2Ygb2JqICE9IFwiZnVuY3Rpb25cIiApIHtcblx0XHRcdFx0XHQvL2NvbnNvbGUubG9nKFwic2V0U3RhdGUgXCIsb2JqLCBPYmplY3Qua2V5cyhkYXRhKSlcblx0XHRcdFx0XHRpZiAoIGFzICkgb2JqLnNldFN0YXRlKHsgW2FzXTogZGF0YSB9KTtcblx0XHRcdFx0XHRlbHNlIG9iai5zZXRTdGF0ZShkYXRhKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHRvYmooZGF0YSwgbGFzdFJldnMgJiYgWy4uLmxhc3RSZXZzXSB8fCBcIm5vIHJldnNcIik7XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gbGFzdFJldnMgJiZcblx0XHRcdFx0Ly8ga2V5LmZvckVhY2goaWQgPT4gKGxhc3RSZXZzW2lkXSA9IHRoaXMuc3RvcmVzW2lkXSAmJlxuXHRcdFx0XHQvLyB0aGlzLnN0b3Jlc1tpZF0uX3JldiB8fCAwKSk7XG5cdFx0XHR9KTtcblx0XHR0aGlzLmVtaXQoXCJ1cGRhdGVcIiwgdGhpcy5nZXRVcGRhdGVzKCkpO1xuXHR9XG5cdFxuXHQvKipcblx0ICogaXMgc3RhYmxlXG5cdCAqIEByZXR1cm5zIGJvb2xcblx0ICovXG5cdGlzU3RhYmxlKCkge1xuXHRcdHJldHVybiB0aGlzLl9zdGFibGU7XG5cdH1cblx0XG5cdF9hZGRDaGlsZCggY3R4ICkge1xuXHRcdHRoaXMuXy5jaGlsZFNjb3Blcy5wdXNoKGN0eCk7XG5cdFx0dGhpcy5fLnNlZW5DaGlsZHMrKztcblx0XHRsZXQgbGlzdHMgICAgID0ge1xuXHRcdFx0ICAgICdzdGFibGUnICAgICAgOiBzID0+IHtcblx0XHRcdFx0ICAgIHRoaXMuXy51blN0YWJsZUNoaWxkcy0tO1xuXHRcdFx0XHQgICAgaWYgKCAhdGhpcy5fLnVuU3RhYmxlQ2hpbGRzIClcblx0XHRcdFx0XHQgICAgdGhpcy5lbWl0KFwic3RhYmxlVHJlZVwiLCB0aGlzKVxuXHRcdFx0ICAgIH0sXG5cdFx0XHQgICAgJ3Vuc3RhYmxlJyAgICA6IHMgPT4ge1xuXHRcdFx0XHQgICAgdGhpcy5fLnVuU3RhYmxlQ2hpbGRzKys7XG5cdFx0XHRcdCAgICBpZiAoIDEgPT0gdGhpcy5fLnVuU3RhYmxlQ2hpbGRzIClcblx0XHRcdFx0XHQgICAgdGhpcy5lbWl0KFwidW5zdGFibGVUcmVlXCIsIHRoaXMpXG5cdFx0XHQgICAgfSxcblx0XHRcdCAgICAnc3RhYmxlVHJlZScgIDogcyA9PiB7XG5cdFx0XHRcdCAgICB0aGlzLl8udW5TdGFibGVDaGlsZHMtLTtcblx0XHRcdFx0ICAgIGlmICggIXRoaXMuXy51blN0YWJsZUNoaWxkcyApXG5cdFx0XHRcdFx0ICAgIHRoaXMuZW1pdChcInN0YWJsZVRyZWVcIiwgdGhpcylcblx0XHRcdCAgICB9LFxuXHRcdFx0ICAgICd1bnN0YWJsZVRyZWUnOiBzID0+IHtcblx0XHRcdFx0ICAgIHRoaXMuXy51blN0YWJsZUNoaWxkcysrO1xuXHRcdFx0XHQgICAgaWYgKCAxID09IHRoaXMuXy51blN0YWJsZUNoaWxkcyApXG5cdFx0XHRcdFx0ICAgIHRoaXMuZW1pdChcInVuc3RhYmxlVHJlZVwiLCB0aGlzKVxuXHRcdFx0ICAgIH0sXG5cdFx0XHQgICAgJ2Rlc3Ryb3knICAgICA6IGN0eCA9PiB7XG5cdFx0XHRcdCAgICBpZiAoIGN0eC5fLnVuU3RhYmxlQ2hpbGRzIClcblx0XHRcdFx0XHQgICAgdGhpcy5fLnVuU3RhYmxlQ2hpbGRzLS07XG5cdFx0XHRcdCAgICBpZiAoICFjdHguaXNTdGFibGUoKSApXG5cdFx0XHRcdFx0ICAgIHRoaXMuXy51blN0YWJsZUNoaWxkcy0tO1xuXHRcdFx0XHRcblx0XHRcdFx0ICAgIGlmICggIXRoaXMuXy51blN0YWJsZUNoaWxkcyApXG5cdFx0XHRcdFx0ICAgIHRoaXMuZW1pdChcInN0YWJsZVRyZWVcIiwgdGhpcylcblx0XHRcdCAgICB9XG5cdFx0ICAgIH0sXG5cdFx0ICAgIHdhc1N0YWJsZSA9IHRoaXMuXy51blN0YWJsZUNoaWxkcztcblx0XHQvLyFjdHguaXNTdGFibGUoKSAmJiBjb25zb2xlLndhcm4oJ2FkZCB1bnN0YWJsZSBjaGlsZCcpO1xuXHRcdCFjdHguaXNTdGFibGUoKSAmJiB0aGlzLl8udW5TdGFibGVDaGlsZHMrKztcblx0XHRjdHguXy51blN0YWJsZUNoaWxkcyAmJiB0aGlzLl8udW5TdGFibGVDaGlsZHMrKztcblx0XHR0aGlzLl8uY2hpbGRTY29wZXNMaXN0LnB1c2gobGlzdHMpO1xuXHRcdGlmICggIXdhc1N0YWJsZSAmJiB0aGlzLl8udW5TdGFibGVDaGlsZHMgKVxuXHRcdFx0dGhpcy5lbWl0KFwidW5zdGFibGVUcmVlXCIsIHRoaXMpXG5cdFx0Y3R4Lm9uKGxpc3RzKTtcblx0fVxuXHRcblx0X3JtQ2hpbGQoIGN0eCApIHtcblx0XHRsZXQgaSAgICAgICAgID0gdGhpcy5fLmNoaWxkU2NvcGVzLmluZGV4T2YoY3R4KSxcblx0XHQgICAgd2FzU3RhYmxlID0gdGhpcy5fLnVuU3RhYmxlQ2hpbGRzO1xuXHRcdGlmICggaSAhPSAtMSApIHtcblx0XHRcdHRoaXMuXy5jaGlsZFNjb3Blcy5zcGxpY2UoaSwgMSk7XG5cdFx0XHQhY3R4LmlzU3RhYmxlKCkgJiYgdGhpcy5fLnVuU3RhYmxlQ2hpbGRzLS07XG5cdFx0XHRjdHguXy51blN0YWJsZUNoaWxkcyAmJiB0aGlzLl8udW5TdGFibGVDaGlsZHMtLTtcblx0XHRcdGN0eC51bih0aGlzLl8uY2hpbGRTY29wZXNMaXN0LnNwbGljZShpLCAxKVswXSk7XG5cdFx0XHRpZiAoIHdhc1N0YWJsZSAmJiAhdGhpcy5fLnVuU3RhYmxlQ2hpbGRzIClcblx0XHRcdFx0dGhpcy5lbWl0KFwic3RhYmxlVHJlZVwiKVxuXHRcdH1cblx0fVxuXHRcblx0cmV0YWluKCByZWFzb24gKSB7XG5cdFx0dGhpcy5fX3JldGFpbnMuYWxsKys7XG5cdFx0Ly9jb25zb2xlLmxvZyhcInJldGFpblwiLCB0aGlzLl9pZCwgcmVhc29uKTtcblx0XHRpZiAoIHJlYXNvbiApIHtcblx0XHRcdHRoaXMuX19yZXRhaW5zW3JlYXNvbl0gPSB0aGlzLl9fcmV0YWluc1tyZWFzb25dIHx8IDA7XG5cdFx0XHR0aGlzLl9fcmV0YWluc1tyZWFzb25dKys7XG5cdFx0fVxuXHR9XG5cdFxuXHRkaXNwb3NlKCByZWFzb24gKSB7XG5cdFx0Ly9jb25zb2xlLmxvZyhcImRpc3Bvc2VcIiwgdGhpcy5faWQsIHJlYXNvbik7XG5cdFx0aWYgKCByZWFzb24gKSB7XG5cdFx0XHRpZiAoICF0aGlzLl9fcmV0YWluc1tyZWFzb25dIClcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiRGlzcG9zZSBtb3JlIHRoYW4gcmV0YWluaW5nIDogXCIgKyByZWFzb24pO1xuXHRcdFx0dGhpcy5fX3JldGFpbnNbcmVhc29uXS0tO1xuXHRcdH1cblx0XHRcblx0XHRpZiAoICF0aGlzLl9fcmV0YWlucy5hbGwgKVxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiRGlzcG9zZSBtb3JlIHRoYW4gcmV0YWluaW5nICFcIik7XG5cdFx0XG5cdFx0dGhpcy5fX3JldGFpbnMuYWxsLS07XG5cdFx0XG5cdFx0aWYgKCAhdGhpcy5fX3JldGFpbnMuYWxsICkge1xuXHRcdFx0Ly9jb25zb2xlLmxvZyhcImRpc3Bvc2UgZG8gZGVzdHJveSBcIiwgdGhpcy5faWQsIHRoaXMuX3BlcnNpc3RlbmNlVG0pO1xuXHRcdFx0aWYgKCB0aGlzLl8ucGVyc2lzdGVuY2VUbSApIHtcblx0XHRcdFx0dGhpcy5fLmRlc3Ryb3lUTSAmJiBjbGVhclRpbWVvdXQodGhpcy5fLmRlc3Ryb3lUTSk7XG5cdFx0XHRcdHRoaXMuXy5kZXN0cm95VE0gPSBzZXRUaW1lb3V0KFxuXHRcdFx0XHRcdGUgPT4ge1xuXHRcdFx0XHRcdFx0Ly90aGlzLnRoZW4ocyA9PiB7XG5cdFx0XHRcdFx0XHQhdGhpcy5fX3JldGFpbnMuYWxsICYmICF0aGlzLmRlYWQgJiYgdGhpcy5kZXN0cm95KClcblx0XHRcdFx0XHRcdC8vfSk7XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR0aGlzLl8ucGVyc2lzdGVuY2VUbVxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdC8vdGhpcy50aGVuKHMgPT5cblx0XHRcdFx0KCF0aGlzLl9fcmV0YWlucy5hbGwgJiYgIXRoaXMuZGVhZCAmJiB0aGlzLmRlc3Ryb3koKSlcblx0XHRcdFx0Ly8pO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRcblx0LyoqXG5cdCAqIG9yZGVyIGRlc3Ryb3kgb2YgbG9jYWwgc3RvcmVzXG5cdCAqL1xuXHRkZXN0cm95KCkge1xuXHRcdGxldCBjdHggPSB0aGlzLl8uX3Njb3BlO1xuXHRcdC8vY29uc29sZS53YXJuKFwiZGVzdHJveVwiLCB0aGlzLl9pZCk7XG5cdFx0dGhpcy5fLnN0YWJpbGl6ZXJUTSAmJiBjbGVhclRpbWVvdXQodGhpcy5fLnN0YWJpbGl6ZXJUTSk7XG5cdFx0dGhpcy5fLnByb3BhZ1RNICYmIGNsZWFyVGltZW91dCh0aGlzLl8ucHJvcGFnVE0pO1xuXHRcdE9iamVjdC5rZXlzKFxuXHRcdFx0dGhpcy5fLl9saXN0ZW5pbmdcblx0XHQpLmZvckVhY2goXG5cdFx0XHRpZCA9PiAoKGlkICE9PSBcIiRwYXJlbnRcIikgJiYgdGhpcy5fLl9zY29wZVtpZF0ucmVtb3ZlTGlzdGVuZXIodGhpcy5fLl9saXN0ZW5pbmdbaWRdKSlcblx0XHQpO1xuXHRcdHdoaWxlICggdGhpcy5fLl9taXhlZExpc3QubGVuZ3RoICkge1xuXHRcdFx0dGhpcy5fLl9taXhlZFswXS5yZW1vdmVMaXN0ZW5lcih0aGlzLl8uX21peGVkTGlzdC5zaGlmdCgpKTtcblx0XHRcdHRoaXMuXy5fbWl4ZWQuc2hpZnQoKS5kaXNwb3NlKFwibWl4ZWRUb1wiKTtcblx0XHR9XG5cdFx0Wy4uLnRoaXMuXy5mb2xsb3dlcnNdLm1hcChmb2xsb3dlciA9PiB0aGlzLnVuQmluZCguLi5mb2xsb3dlcikpO1xuXHRcdGZvciAoIGxldCBrZXkgaW4gY3R4IClcblx0XHRcdGlmICggIWlzLmZuKGN0eFtrZXldKSApIHtcblx0XHRcdFx0aWYgKCBrZXkgPT0gXCIkcGFyZW50XCIgKSBjb250aW51ZTtcblx0XHRcdFx0IWN0eFtrZXldLl9hdXRvRGVzdHJveSAmJiBjdHhba2V5XS5kaXNwb3NlKFwic2NvcGVkXCIpO1xuXHRcdFx0fVxuXHRcdGlmICggdGhpcy5fLl9wYXJlbnRMaXN0ICkge1xuXHRcdFx0dGhpcy5wYXJlbnQuX3JtQ2hpbGQodGhpcyk7XG5cdFx0XHR0aGlzLnBhcmVudC5yZW1vdmVMaXN0ZW5lcih0aGlzLl8uX3BhcmVudExpc3QpO1xuXHRcdFx0dGhpcy5wYXJlbnQuZGlzcG9zZShcImlzTXlQYXJlbnRcIik7XG5cdFx0XHR0aGlzLl8uX3BhcmVudExpc3QgPSBudWxsO1xuXHRcdH1cblx0XHR0aGlzLmRlYWQgPSB0cnVlO1xuXHRcdHRoaXMuZW1pdChcImRlc3Ryb3lcIiwgdGhpcyk7XG5cdFx0XG5cdFx0XG5cdFx0Ly9pZiAoICF0aGlzLl8uaXNMb2NhbElkIClcblx0XHRkZWxldGUgb3BlblNjb3Blc1t0aGlzLl9pZF07XG5cdFx0XG5cdFx0Ly90aGlzLl8gPSBudWxsO1xuXHRcdFxuXHR9XG59XG5cblxuaXMucnNTY29wZSA9IGZ1bmN0aW9uICggb2JqICkge1xuXHRyZXR1cm4gb2JqIGluc3RhbmNlb2YgU2NvcGVcbn1cblxuaXMucnNTY29wZUNsYXNzID0gZnVuY3Rpb24gKCBvYmogKSB7XG5cdHJldHVybiBTY29wZS5pc1Byb3RvdHlwZU9mKG9iaikgfHwgb2JqID09PSBTY29wZVxufVxuZXhwb3J0IGRlZmF1bHQgU2NvcGU7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1Njb3BlLmpzIiwidmFyIGlzID0gcmVxdWlyZSgnaXMnKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIC4uLmlzXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbHMvaXMuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImlzXCJcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGlzID0gcmVxdWlyZSgnLi9pcycpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHdhbGtuU2V0KCBvYmosIHBhdGgsIHZhbHVlLCBzdGFjayApIHtcclxuICAgIGlmICggaXMuc3RyaW5nKHBhdGgpIClcclxuICAgICAgICBwYXRoID0gcGF0aC5zcGxpdCgnLicpO1xyXG4gICAgaWYgKCAhcGF0aC5sZW5ndGggKVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIGVsc2UgaWYgKCBwYXRoLmxlbmd0aCA9PSAxIClcclxuICAgICAgICByZXR1cm4gb2JqWyBwYXRoWyAwIF0gXSA9IHN0YWNrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFsgLi4uKCBvYmpbIHBhdGhbIDAgXSBdIHx8IFtdICksIHZhbHVlIF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdmFsdWU7XHJcbiAgICBlbHNlXHJcbiAgICAgICAgcmV0dXJuIHdhbGtuU2V0KFxyXG4gICAgICAgICAgICBvYmpbIHBhdGhbIDAgXSBdID1cclxuICAgICAgICAgICAgICAgIG9ialsgcGF0aFsgMCBdIF0gfHwge30sXHJcbiAgICAgICAgICAgIHBhdGguc2xpY2UoMSksXHJcbiAgICAgICAgICAgIHZhbHVlLCBzdGFja1xyXG4gICAgICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB3YWxrbkdldCggb2JqLCBwYXRoLCBpc0tleSApIHtcclxuICAgIGlmICggaXMuc3RyaW5nKHBhdGgpIClcclxuICAgICAgICBwYXRoID0gcGF0aC5zcGxpdCgnLicpO1xyXG4gICAgcmV0dXJuIHBhdGgubGVuZ3RoXHJcbiAgICAgICAgICAgPyBvYmpbIHBhdGhbIDAgXSBdICYmIHdhbGtuR2V0KG9ialsgcGF0aFsgMCBdIF0sIHBhdGguc2xpY2UoMSkpXHJcbiAgICAgICAgICAgOiBvYmo7XHJcbn1cclxuXHJcbi8vQHRvZG9cclxuZXhwb3J0IGZ1bmN0aW9uIGtleVdhbGtuU2V0KCBvYmosIHBhdGgsIHZhbHVlLCBzdGFjayApIHtcclxuICAgIGlmICggaXMuc3RyaW5nKHBhdGgpIClcclxuICAgICAgICBwYXRoID0gcGF0aC5zcGxpdCgvKFxcPnxcXC8pL2lnKS5maWx0ZXIodiA9PiAoIHYgIT09ICc+JyAmJiB2ICkpO1xyXG4gICAgcmV0dXJuIHdhbGtuU2V0KG9iaiwgcGF0aCwgdmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24ga2V5V2Fsa25HZXQoIG9iaiwgcGF0aCwgaXNLZXkgKSB7XHJcbiAgICBpZiAoIGlzLnN0cmluZyhwYXRoKSApXHJcbiAgICAgICAgcGF0aCA9IHBhdGguc3BsaXQoLyhcXD58XFwvKS9pZykuZmlsdGVyKHYgPT4gKCB2ICE9PSAnPicgJiYgdiApKTtcclxuICAgIHJldHVybiBwYXRoLmxlbmd0aFxyXG4gICAgICAgICAgID8gb2JqWyBwYXRoWyAwIF0gXSAmJiB3YWxrbkdldChvYmpbIHBhdGhbIDAgXSBdLCBwYXRoLnNsaWNlKDEpKVxyXG4gICAgICAgICAgIDogb2JqO1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWxzL3V0aWxzLmpzIiwiLypcbiAqIENvcHlyaWdodCAoYykgIDIwMTggV2lzZSBXaWxkIFdlYiAuXG4gKlxuICogIE1JVCBMaWNlbnNlXG4gKiAgXG4gKiAgUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqICBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiAgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKiAgXG4gKiAgVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG4gKiAgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqICBcbiAqICBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiAgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiAgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiAgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiAgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcbiAqICBTT0ZUV0FSRS5cbiAqICBcbiAqIEBhdXRob3IgOiBOYXRoYW5hZWwgQnJhdW5cbiAqIEBjb250YWN0IDogY2FpcGlsYWJzQGdtYWlsLmNvbVxuICovXG52YXIgaXMgPSByZXF1aXJlKCdpcycpO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW1pdHRlciB7XG4gICAgX2V2ZW50cyA9IHt9O1xuICAgIFxuICAgIG9uKCBldnQsIGNiICkge1xuICAgICAgICBpZiAoICFpcy5zdHJpbmcoZXZ0KSAmJiBldnQgKVxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKGV2dCkuZm9yRWFjaChrID0+IHRoaXMub24oaywgZXZ0W2tdKSk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9ldmVudHNbZXZ0XSA9IHRoaXMuX2V2ZW50c1tldnRdIHx8IFtdO1xuICAgICAgICB0aGlzLl9ldmVudHNbZXZ0XS5wdXNoKGNiKTtcbiAgICAgICAgXG4gICAgfVxuICAgIFxuICAgIHVuKCBldnQsIGNiICkge1xuICAgICAgICBpZiAoICFpcy5zdHJpbmcoZXZ0KSAmJiBldnQgKVxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKGV2dCkuZm9yRWFjaChrID0+IHRoaXMudW4oaywgZXZ0W2tdKSk7XG4gICAgICAgIFxuICAgICAgICBpZiAoICF0aGlzLl9ldmVudHNbZXZ0XSApIHJldHVybjtcbiAgICAgICAgdmFyIGkgPSB0aGlzLl9ldmVudHNbZXZ0XS5pbmRleE9mKGNiKTtcbiAgICAgICAgdGhpcy5fZXZlbnRzW2V2dF0uc3BsaWNlKGksIDEpO1xuICAgIH1cbiAgICBcbiAgICBlbWl0KCBldnQsIC4uLmFyZ3ogKSB7XG4gICAgICAgIGlmICggIXRoaXMuX2V2ZW50c1tldnRdICkgcmV0dXJuO1xuICAgICAgICBsZXQgbGlzdHMgPSBbLi4udGhpcy5fZXZlbnRzW2V2dF1dO1xuICAgICAgICBcbiAgICAgICAgZm9yICggdmFyIGkgPSAwOyBpIDwgbGlzdHMubGVuZ3RoOyBpKysgKVxuICAgICAgICAgICAgbGlzdHNbaV0oLi4uYXJneilcbiAgICB9XG4gICAgXG4gICAgYWRkTGlzdGVuZXIoKSB7XG4gICAgICAgIHRoaXMub24oLi4uYXJndW1lbnRzKTtcbiAgICB9XG4gICAgXG4gICAgcmVtb3ZlTGlzdGVuZXIoKSB7XG4gICAgICAgIHRoaXMudW4oLi4uYXJndW1lbnRzKTtcbiAgICB9XG4gICAgXG4gICAgcmVtb3ZlQWxsTGlzdGVuZXJzKCkge1xuICAgICAgICB0aGlzLl9ldmVudHMgPSB7fTtcbiAgICB9XG4gICAgXG4gICAgb25jZSggZXZ0LCBjYiApIHtcbiAgICAgICAgbGV0IGZuO1xuICAgICAgICB0aGlzLm9uKGV2dCwgZm4gPSAoIC4uLmFyZ3ogKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnVuKGV2dCwgZm4pO1xuICAgICAgICAgICAgY2IoLi4uYXJneilcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIFxuICAgIFxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlscy9FbWl0dGVyLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2hvcnRpZFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInNob3J0aWRcIlxuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxuICogQ29weXJpZ2h0IChjKSAgMjAxOCBXaXNlIFdpbGQgV2ViIC5cbiAqXG4gKiAgTUlUIExpY2Vuc2VcbiAqXG4gKiAgUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqICBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiAgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuICogIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqICBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqICBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqICBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiAgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqICBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuICogIFNPRlRXQVJFLlxuICpcbiAqIEBhdXRob3IgOiBOYXRoYW5hZWwgQnJhdW5cbiAqIEBjb250YWN0IDogY2FpcGlsYWJzQGdtYWlsLmNvbVxuICovXG5cbnZhciBpcyAgICAgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi91dGlscy9pcycpLFxuICAgIFNjb3BlICAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL1Njb3BlJyksXG4gICAgeyBrZXlXYWxrblNldCwga2V5V2Fsa25HZXQgfSA9IHJlcXVpcmUoJy4vdXRpbHMvdXRpbHMnKSxcbiAgICBFdmVudEVtaXR0ZXIgICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi91dGlscy9FbWl0dGVyJyksXG4gICAgVGFza1NlcXVlbmNlciAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vdXRpbHMvVGFza1NlcXVlbmNlcicpLFxuICAgIHNob3J0aWQgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlKCdzaG9ydGlkJyksXG4gICAgb2JqUHJvdG8gICAgICAgICAgICAgICAgICAgICA9IE9iamVjdC5nZXRQcm90b3R5cGVPZih7fSk7XG5cbmNsYXNzIFN0b3JlIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcblx0Ly9zdGF0aWMgdXNlICAgICAgICAgICAgICAgICAgPSBbXTsvLyBvdmVycmlkYWJsZSBsaXN0IG9mIHNvdXJjZSBzdG9yZXNcblx0c3RhdGljIGZvbGxvdzsvLyBvdmVycmlkYWJsZSBsaXN0IG9mIHN0b3JlIHRoYXQgd2lsbCBhbGxvdyBwdXNoIGlmIHVwZGF0ZWRcblx0c3RhdGljIHJlcXVpcmU7XG5cdHN0YXRpYyBzdGF0aWNTY29wZSAgID0gbmV3IFNjb3BlKHt9LCB7IGlkOiBcInN0YXRpY1wiIH0pO1xuXHRzdGF0aWMgc3RhdGUgICAgICAgICA9IHVuZGVmaW5lZDsvLyBkZWZhdWx0IHN0YXRlXG5cdC8qKlxuXHQgKiBpZiByZXRhaW4gZ29lcyB0byAwIDpcblx0ICogZmFsc2UgdG8gbm90IGRlc3Ryb3ksXG5cdCAqIDAgdG8gc3luYyBhdXRvIGRlc3Ryb3lcblx0ICogTXMgdG8gYXV0b2Rlc3Ryb3kgYWZ0ZXIgdG0gbXMgaWYgbm8gcmV0YWluIGhhcyBiZWVuIGNhbGxlZFxuXHQgKiBAdHlwZSB7Ym9vbGVhbnxJbnR9XG5cdCAqL1xuXHRzdGF0aWMgcGVyc2lzdGVuY2VUbSA9IGZhbHNlO1xuXHRcblx0LyoqXG5cdCAqIENvbnN0cnVjdG9yLCB3aWxsIGJ1aWxkIGEgcmVzY29wZSBzdG9yZVxuXHQgKlxuXHQgKiAoc2NvcGUsIHtyZXF1aXJlLHVzZSxhcHBseSxzdGF0ZSwgZGF0YX0pXG5cdCAqIChzY29wZSlcblx0ICpcblx0ICogQHBhcmFtIHNjb3BlIHtvYmplY3R9IHNjb3BlIHdoZXJlIHRvIGZpbmQgdGhlIG90aGVyIHN0b3JlcyAoZGVmYXVsdCA6IHN0YXRpY1xuXHQgKiAgICAgc3RhdGljU2NvcGUgKVxuXHQgKiBAcGFyYW0ga2V5cyB7QXJyYXl9IChwYXNzZWQgdG8gU3RvcmU6Om1hcCkgRXggOiBbXCJzZXNzaW9uXCIsIFwib3RoZXJOYW1lZFN0b3JlOmtleVwiLFxuXHQgKiAgICAgb3RoZXJTdG9yZS5hcyhcIm90aGVyS2V5XCIpXVxuXHQgKi9cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0XHR2YXIgYXJneiAgICAgICAgID0gWy4uLmFyZ3VtZW50c10sXG5cdFx0ICAgIF9zdGF0aWMgICAgICA9IHRoaXMuY29uc3RydWN0b3IsXG5cdFx0ICAgIHNjb3BlICAgICAgICA9IGFyZ3pbMF0gaW5zdGFuY2VvZiBTY29wZVxuXHRcdCAgICAgICAgICAgICAgICAgICA/IGFyZ3ouc2hpZnQoKVxuXHRcdCAgICAgICAgICAgICAgICAgICA6IF9zdGF0aWMuc2NvcGUgPyBTY29wZS5nZXRTY29wZShfc3RhdGljLnNjb3BlKVxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBpcy5zdHJpbmcoYXJnelswXSlcblx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBTY29wZS5nZXRTY29wZShhcmd6LnNoaWZ0KCkpXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3N0YXRpYy5zdGF0aWNTY29wZSxcblx0XHQgICAgY2ZnICAgICAgICAgID0gYXJnelswXSAmJiAhaXMuYXJyYXkoYXJnelswXSkgJiYgIWlzLnN0cmluZyhhcmd6WzBdKVxuXHRcdCAgICAgICAgICAgICAgICAgICA/IGFyZ3ouc2hpZnQoKVxuXHRcdCAgICAgICAgICAgICAgICAgICA6IHt9LFxuXHRcdCAgICB0YXNrUXVldWUgICAgPSBpcy5hcnJheShhcmd6WzBdKSA/IGFyZ3ouc2hpZnQoKSA6IG51bGwsXG5cdFx0ICAgIG5hbWUgICAgICAgICA9IGNmZy5uYW1lIHx8IF9zdGF0aWMubmFtZSxcblx0XHQgICAgd2F0Y2hzICAgICAgID0gY2ZnLnVzZSB8fCBbXSxcblx0XHQgICAgYXBwbHkgICAgICAgID0gY2ZnLmFwcGx5IHx8IG51bGwsXG5cdFx0ICAgIGluaXRpYWxTdGF0ZSA9IF9zdGF0aWMuc3RhdGUgfHwgX3N0YXRpYy5pbml0aWFsU3RhdGUgfHwgX3N0YXRpYy5kZWZhdWx0U3RhdGUsXG5cdFx0ICAgIGFwcGxpZWQ7XG5cdFx0XG5cdFx0dGhpcy5fdWlkID0gY2ZnLl91aWQgfHwgc2hvcnRpZC5nZW5lcmF0ZSgpO1xuXHRcdFxuXHRcdHRoaXMuX19yZXRhaW5zICAgID0geyBhbGw6IDAgfTtcblx0XHR0aGlzLl9fbG9ja3MgICAgICA9IHsgYWxsOiAwIH07XG5cdFx0dGhpcy5fb25TdGFiaWxpemUgPSBbXTtcblx0XHRcblx0XHQvLyBhdXRvRGVzdHJveVRtXG5cdFx0dGhpcy5fYXV0b0Rlc3Ryb3kgICA9ICEhdGhpcy5fcGVyc2lzdGVuY2VUbTtcblx0XHR0aGlzLl9wZXJzaXN0ZW5jZVRtID0gY2ZnLnBlcnNpc3RlbmNlVG0gfHwgX3N0YXRpYy5wZXJzaXN0ZW5jZVRtIHx8IChjZmcuYXV0b0Rlc3Ryb3kgfHwgX3N0YXRpYy5hdXRvRGVzdHJveSkgJiYgNTtcblx0XHR0aGlzLl9jZmcgICAgICAgICAgID0gY2ZnO1xuXHRcdGlmICggY2ZnICYmIGNmZy5vbiApIHtcblx0XHRcdHRoaXMub24oY2ZnLm9uKTtcblx0XHR9XG5cdFx0XG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0XHRcblx0XHRpZiAoIHNjb3BlLnN0b3JlcyApIHtcblx0XHRcdHRoaXMuc2NvcGVPYmogPSBzY29wZTtcblx0XHRcdHRoaXMuc2NvcGUgICAgPSBzY29wZS5zdG9yZXM7XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0dGhpcy5zY29wZU9iaiA9IG5ldyBTY29wZShzY29wZSk7XG5cdFx0XHR0aGlzLnNjb3BlICAgID0gc2NvcGUuc3RvcmVzO1xuXHRcdH1cblx0XHRcblx0XHQvLyBzdGFuZGFyZGl6ZWQgc2NvcGUgYWNjZXNzXG5cdFx0dGhpcy4kc2NvcGUgICAgPSB0aGlzLnNjb3BlT2JqO1xuXHRcdHRoaXMuJHN0b3JlcyAgID0gdGhpcy5zY29wZU9iai5zdG9yZXM7XG5cdFx0dGhpcy4kYWN0aW9ucyAgPSB0aGlzLnNjb3BlT2JqLmFjdGlvbnM7XG5cdFx0dGhpcy4kZGlzcGF0Y2ggPSB0aGlzLnNjb3BlT2JqLmRpc3BhdGNoLmJpbmQodGhpcy5zY29wZU9iaik7XG5cdFx0XG5cdFx0dGhpcy5fcmV2ICAgICA9IHRoaXMuY29uc3RydWN0b3IuX3JldiB8fCAwO1xuXHRcdHRoaXMuX3JldnMgICAgPSB7fTtcblx0XHR0aGlzLnN0b3JlcyAgID0ge307XG5cdFx0dGhpcy5fcmVxdWlyZSA9IFtdO1xuXHRcdHRoaXMuX3NvdXJjZXMgPSBbbmFtZV07XG5cdFx0XG5cdFx0aWYgKCBpcy5hcnJheShfc3RhdGljLnVzZSkgKSB7XG5cdFx0XHR0aGlzLl91c2UgPSBbLi4ud2F0Y2hzLCAuLi4oX3N0YXRpYy51c2UgfHwgW10pLm1hcChcblx0XHRcdFx0a2V5ID0+IHtcblx0XHRcdFx0XHRsZXQgcmVmID0ga2V5Lm1hdGNoKC9eKFxcIT8pKFteXFw6XSopKD86XFw6KC4qKSk/JC8pO1xuXHRcdFx0XHRcdGlmICggcmVmWzFdICkge1xuXHRcdFx0XHRcdFx0bGV0IHJlZjIgPSByZWZbMl0uc3BsaXQoJy4nKTtcblx0XHRcdFx0XHRcdHRoaXMuX3JlcXVpcmUucHVzaChyZWZbM10gfHwgcmVmMltyZWYyLmxlbmd0aCAtIDFdKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmV0dXJuIHJlZlsyXTtcblx0XHRcdFx0fVxuXHRcdFx0KV07XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0dGhpcy5fdXNlID0gWy4uLndhdGNocywgLi4uKFxuXHRcdFx0XHRfc3RhdGljLnVzZSA/IE9iamVjdC5rZXlzKF9zdGF0aWMudXNlKVxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgIC5tYXAoXG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICBrZXkgPT4ge1xuXHRcdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICBsZXQgcmVmID0ga2V5Lm1hdGNoKC9eKFxcIT8pKC4qKSQvKTtcblx0XHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgcmVmWzFdICYmIHRoaXMuX3JlcXVpcmUucHVzaChfc3RhdGljLnVzZVtrZXldKTtcblx0XHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlZlsyXSArICgoX3N0YXRpYy51c2Vba2V5XSA9PT0gdHJ1ZSlcblx0XHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICcnXG5cdFx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnOicgKyBfc3RhdGljLnVzZVtrZXldKTtcblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgIH1cblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICApIDogW11cblx0XHRcdCldO1xuXHRcdH1cblx0XHRcblx0XHRpZiAoIF9zdGF0aWMucmVxdWlyZSApXG5cdFx0XHR0aGlzLl9yZXF1aXJlLnB1c2goLi4uX3N0YXRpYy5yZXF1aXJlKTtcblx0XHRpZiAoIGNmZy5yZXF1aXJlIClcblx0XHRcdHRoaXMuX3JlcXVpcmUucHVzaCguLi5jZmcucmVxdWlyZSk7XG5cdFx0XG5cdFx0dGhpcy5fZm9sbG93ZXJzID0gW107XG5cdFx0dGhpcy5fY2hhbmdlc1NXID0gaW5pdGlhbFN0YXRlIHx8IHt9O1xuXHRcdHRoaXMuc3RhdGUgICAgICA9IGluaXRpYWxTdGF0ZSAmJiB7fTtcblx0XHRpZiAoIGFwcGx5IClcblx0XHRcdHRoaXMuYXBwbHkgPSBhcHBseTtcblx0XHRcblx0XHQvKipcblx0XHQgKiBJbml0aWFsIHN0YXRlIGlzbid0IGZ1bGx5IGluaXRpYWxpemVkICggY2hpbGRzIGNvbnN0cnVjdG9ycyBjYW4gc2V0IGl0IClcblx0XHQgKiBTY29wZSBiYXNlZCBpbnN0YW5jZSBoYXZlIHRhc2tRdWV1ZSB0byBkZWxheSBpbml0IHN5bmNocm9ub3VzbHksIGlmIG5vdFxuXHRcdCAqIHByZXNlbnQgd2UgdXNlIHNldFRpbWVvdXRcblx0XHQgKi9cblx0XHRpZiAoIHRhc2tRdWV1ZSApIHtcblx0XHRcdHRhc2tRdWV1ZS5wdXNoKHRoaXMuX2FmdGVyQ29uc3RydWN0b3IuYmluZCh0aGlzKSlcblx0XHR9XG5cdFx0ZWxzZVxuXHRcdFx0c2V0VGltZW91dCh0aGlzLl9hZnRlckNvbnN0cnVjdG9yLmJpbmQodGhpcykpXG5cdH1cblx0XG5cdC8qKlxuXHQgKiBHZXQgdGhlIGluY29taW5nIHN0YXRlICggZm9yIGltbWVkaWF0ZSBzdGF0ZSByZWxhdGl2ZSBhY3Rpb25zIClcblx0ICogQHJldHVybnMge3t9fCp9XG5cdCAqL1xuXHRnZXQgbmV4dFN0YXRlKCkge1xuXHRcdHJldHVybiB0aGlzLl9jaGFuZ2VzU1cgJiYgeyAuLi50aGlzLnN0YXRlLCAuLi50aGlzLl9jaGFuZ2VzU1cgfSB8fCB0aGlzLnN0YXRlO1xuXHR9XG5cdFxuXHRfYWZ0ZXJDb25zdHJ1Y3RvcigpIHtcblx0XHRsZXQgY2ZnICAgICAgICAgID0gdGhpcy5fY2ZnLFxuXHRcdCAgICBfc3RhdGljICAgICAgPSB0aGlzLmNvbnN0cnVjdG9yLFxuXHRcdCAgICBzbmFwc2hvdCAgICAgPSB0aGlzLnJlc3RvcmUodW5kZWZpbmVkLCB0cnVlKSxcblx0XHQgICAgaW5pdGlhbFN0YXRlID0gdGhpcy5zdGF0ZSxcblx0XHQgICAgaW5pdGlhbERhdGEgID0gdGhpcy5kYXRhLFxuXHRcdCAgICBhcHBsaWVkO1xuXHRcdHtcblx0XHRcdFxuXHRcdFx0aWYgKCBpbml0aWFsRGF0YSApXG5cdFx0XHRcdHRoaXMuZGF0YSA9IGluaXRpYWxEYXRhO1xuXHRcdFx0ZWxzZSBpZiAoIF9zdGF0aWMuZGF0YSAhPT0gdW5kZWZpbmVkIClcblx0XHRcdFx0dGhpcy5kYXRhID0geyAuLi5fc3RhdGljLmRhdGEgfTtcblx0XHRcdGVsc2UgaWYgKCBjZmcuaGFzT3duUHJvcGVydHkoXCJkYXRhXCIpIClcblx0XHRcdFx0dGhpcy5kYXRhID0gY2ZnLmRhdGE7XG5cdFx0XHRcblx0XHRcdGlmICggY2ZnLmhhc093blByb3BlcnR5KFwic3RhdGVcIikgJiYgY2ZnLnN0YXRlICE9PSB1bmRlZmluZWQgKVxuXHRcdFx0XHRpbml0aWFsU3RhdGUgPSB7IC4uLmluaXRpYWxTdGF0ZSwgLi4uY2ZnLnN0YXRlIH07XG5cdFx0XHRcblx0XHRcdGlmICggdGhpcy5kYXRhID09PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRcdGlmICggaW5pdGlhbFN0YXRlIHx8IHRoaXMuX3VzZS5sZW5ndGggKSB7Ly8gc3luYyBhcHBseVxuXHRcdFx0XHRcdHRoaXMuX2NoYW5nZXNTVyA9IHtcblx0XHRcdFx0XHRcdC4uLnRoaXMuX2NoYW5nZXNTVyxcblx0XHRcdFx0XHRcdC4uLihpbml0aWFsU3RhdGUgfHwge30pLFxuXHRcdFx0XHRcdFx0Li4udGhpcy4kc2NvcGUubWFwKHRoaXMsIHRoaXMuX3VzZSlcblx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgICAgICA9IHt9O1xuXHRcdFx0XHRcdGlmICggdGhpcy5zaG91bGRBcHBseSh0aGlzLl9jaGFuZ2VzU1cpICYmIHRoaXMuZGF0YSA9PT0gdW5kZWZpbmVkICkge1xuXHRcdFx0XHRcdFx0dGhpcy5kYXRhICAgICAgID0gdGhpcy5hcHBseSh0aGlzLmRhdGEsIHRoaXMuX2NoYW5nZXNTVywgdGhpcy5fY2hhbmdlc1NXKTtcblx0XHRcdFx0XHRcdGFwcGxpZWQgICAgICAgICA9IHRydWU7XG5cdFx0XHRcdFx0XHR0aGlzLnN0YXRlICAgICAgPSB0aGlzLl9jaGFuZ2VzU1c7XG5cdFx0XHRcdFx0XHR0aGlzLl9jaGFuZ2VzU1cgPSB7fTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHRhcHBsaWVkICAgICAgICAgPSB0cnVlO1xuXHRcdFx0XHR0aGlzLnN0YXRlICAgICAgPSB7Ly8gYXNzdW1lIHRoaXMgc3RhdGUgaXMgc3luYyB3aXRoIGluaXRpYWwgZGF0YVxuXHRcdFx0XHRcdC4uLnRoaXMuX2NoYW5nZXNTVyxcblx0XHRcdFx0XHQuLi4oaW5pdGlhbFN0YXRlIHx8IHt9KSxcblx0XHRcdFx0XHQuLi50aGlzLiRzY29wZS5tYXAodGhpcywgdGhpcy5fdXNlKVxuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuX2NoYW5nZXNTVyA9IHt9O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAoICh0aGlzLmRhdGEgIT09IHVuZGVmaW5lZCB8fCBhcHBsaWVkKSAmJiAhdGhpcy5fX2xvY2tzLmFsbCApIHtcblx0XHRcdHRoaXMuX3N0YWJsZSA9IHRydWU7XG5cdFx0XHR0aGlzLl9yZXYrKztcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHR0aGlzLl9zdGFibGUgPSBmYWxzZTtcblx0XHRcdGlmICggIV9zdGF0aWMubWFuYWdlZCAmJiAhdGhpcy5zdGF0ZSAmJiAoIXRoaXMuX3VzZSB8fCAhdGhpcy5fdXNlLmxlbmd0aCkgKSB7XG5cdFx0XHRcdGNvbnNvbGUud2FybihcIlJlU2NvcGUgc3RvcmUgJ1wiLCB0aGlzLm5hbWUsIFwiJyBoYXZlIG5vIGluaXRpYWwgZGF0YSwgc3RhdGUgb3IgdXNlLiBJdCBjYW4ndCBzdGFiaWxpemUuLi5cIik7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdCF0aGlzLl9zdGFibGUgJiYgdGhpcy5lbWl0KCd1bnN0YWJsZScsIHRoaXMuc3RhdGUpO1xuXHRcdFxuXHR9XG5cdFxuXHQvKipcblx0ICogT3ZlcnJpZGFibGUgbWV0aG9kIHRvIGtub3cgaWYgYSBkYXRhIGNoYW5nZSBzaG91bGQgYmUgcHJvcGFnIHRvIHRoZSBsaXN0ZW5pbmdcblx0ICogc3RvcmVzICYgY29tcG9uZW50c1xuXHQgKi9cblx0c2hvdWxkUHJvcGFnKCBuRGF0YXMgKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblx0XG5cdGhhc0RhdGFDaGFuZ2UoIG5EYXRhcyApIHtcblx0XHR2YXIgX3N0YXRpYyA9IHRoaXMuY29uc3RydWN0b3IsIHIsXG5cdFx0ICAgIGNEYXRhcyAgPSB0aGlzLmRhdGE7XG5cdFx0ciAgICAgICAgICAgPSAhY0RhdGFzICYmIG5EYXRhcyB8fCBjRGF0YXMgIT09IG5EYXRhcztcblx0XHQhciAmJiBjRGF0YXMgJiYgT2JqZWN0LmtleXMoY0RhdGFzKS5mb3JFYWNoKFxuXHRcdFx0KCBrZXkgKSA9PiB7XG5cdFx0XHRcdHIgPSByIHx8IChuRGF0YXNcblx0XHRcdFx0ICAgICAgICAgID8gY0RhdGFzW2tleV0gIT09IG5EYXRhc1trZXldXG5cdFx0XHRcdCAgICAgICAgICA6IGNEYXRhcyAmJiBjRGF0YXNba2V5XSlcblx0XHRcdH1cblx0XHQpO1xuXHRcdCFyICYmIG5EYXRhcyAmJiBPYmplY3Qua2V5cyhuRGF0YXMpLmZvckVhY2goXG5cdFx0XHQoIGtleSApID0+IHtcblx0XHRcdFx0ciA9IHIgfHwgKG5EYXRhc1xuXHRcdFx0XHQgICAgICAgICAgPyBjRGF0YXNba2V5XSAhPT0gbkRhdGFzW2tleV1cblx0XHRcdFx0ICAgICAgICAgIDogY0RhdGFzICYmIGNEYXRhc1trZXldKVxuXHRcdFx0fVxuXHRcdCk7XG5cdFx0cmV0dXJuIHI7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBPdmVycmlkYWJsZSBtZXRob2QgdG8ga25vdyBpZiBhIHN0YXRlIGNoYW5nZSBzaG91bGQgYmUgYXBwbGllZFxuXHQgKi9cblx0c2hvdWxkQXBwbHkoIHN0YXRlID0gdGhpcy5zdGF0ZSApIHtcblx0XHR2YXIgX3N0YXRpYyA9IHRoaXMuY29uc3RydWN0b3I7XG5cdFx0XG5cdFx0cmV0dXJuIChcblx0XHRcdCEhdGhpcy5pc0NvbXBsZXRlKHN0YXRlKVxuXHRcdCkgJiYgKGlzLmFycmF5KF9zdGF0aWMuZm9sbG93KVxuXHRcdCAgICAgID8gX3N0YXRpYy5mb2xsb3dcblx0XHQgICAgICAgICAgICAgICAucmVkdWNlKCggciwgaSApID0+IChyIHx8IHN0YXRlICYmIHN0YXRlW2ldKSwgZmFsc2UpXG5cdFx0ICAgICAgOiBfc3RhdGljLmZvbGxvd1xuXHRcdCAgICAgICAgPyBPYmplY3Qua2V5cyhfc3RhdGljLmZvbGxvdylcblx0XHQgICAgICAgICAgICAgICAgLnJlZHVjZSgoIHIsIGkgKSA9PiAoXG5cdFx0XHQgICAgICAgICAgICAgICAgclxuXHRcdFx0ICAgICAgICAgICAgICAgIHx8IHN0YXRlICYmIGlzLmZuKF9zdGF0aWMuZm9sbG93W2ldKSAmJiBfc3RhdGljLmZvbGxvd1tpXS5jYWxsKHRoaXMsIHN0YXRlW2ldKVxuXHRcdFx0ICAgICAgICAgICAgICAgIHx8IF9zdGF0aWMuZm9sbG93W2ldICYmIHN0YXRlW2ldICE9PSB0aGlzLnN0YXRlW2ldXG5cdFx0ICAgICAgICAgICAgICAgICksIGZhbHNlKSA6IHRydWVcblx0XHQpO1xuXHR9XG5cdFxuXHQvKipcblx0ICogT3ZlcnJpZGFibGUgYXBwbGllciAvIHJlbWFwcGVyXG5cdCAqIElmIHN0YXRlIG9yIGxhc3RQdWJsaWNTdGF0ZSBhcmUgc2ltcGxlIGhhc2ggbWFwcyBhcHBseSB3aWxsIHJldHVybiB7Li4uZGF0YSxcblx0ICogLi4uc3RhdGV9IGlmIG5vdCBpdCB3aWxsIHJldHVybiB0aGUgbGFzdCBwcml2YXRlIHN0YXRlXG5cdCAqIEBwYXJhbSBkYXRhXG5cdCAqIEBwYXJhbSBzdGF0ZVxuXHQgKiBAcmV0dXJucyB7Kn1cblx0ICovXG5cdGFwcGx5KCBkYXRhLCBzdGF0ZSwgY2hhbmdlcyApIHtcblx0XHRzdGF0ZSA9IHN0YXRlIHx8IHRoaXMuc3RhdGU7XG5cdFx0XG5cdFx0aWYgKCB0aGlzLnJlZmluZSApXG5cdFx0XHRyZXR1cm4gdGhpcy5yZWZpbmUoLi4uYXJndW1lbnRzKTtcblx0XHRcblx0XHRpZiAoICFkYXRhIHx8IGRhdGEuX19wcm90b19fICE9PSBvYmpQcm90byB8fCBzdGF0ZS5fX3Byb3RvX18gIT09IG9ialByb3RvIClcblx0XHRcdHJldHVybiBzdGF0ZTtcblx0XHRlbHNlXG5cdFx0XHRyZXR1cm4geyAuLi5kYXRhLCAuLi5zdGF0ZSB9XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBAZGVwcmVjaWF0ZWRcblx0ICogQHBhcmFtIGRhdGFcblx0ICogQHBhcmFtIHN0YXRlXG5cdCAqIEBwYXJhbSBjaGFuZ2VzXG5cdCAqIEByZXR1cm5zIHsqfVxuXHQgKi9cblx0cmVmaW5lKCBkYXRhLCBzdGF0ZSwgY2hhbmdlcyApIHtcblx0XHRzdGF0ZSA9IHN0YXRlIHx8IHRoaXMuc3RhdGU7XG5cdFx0XG5cdFx0aWYgKCAhZGF0YSB8fCBkYXRhLl9fcHJvdG9fXyAhPT0gb2JqUHJvdG8gfHwgc3RhdGUuX19wcm90b19fICE9PSBvYmpQcm90byApXG5cdFx0XHRyZXR1cm4gc3RhdGU7XG5cdFx0ZWxzZVxuXHRcdFx0cmV0dXJuIHsgLi4uZGF0YSwgLi4uc3RhdGUgfVxuXHR9XG5cdFxuXHQvKipcblx0ICogRGVib3VuY2UgdGhpcyBzdG9yZSBwcm9wYWdhdGlvbiAoICYgcmVkdWNpbmcgKVxuXHQgKiBAcGFyYW0gY2Jcblx0ICovXG5cdHN0YWJpbGl6ZSggY2IgKSB7XG5cdFx0Y2IgJiYgdGhpcy5vbmNlKCdzdGFibGUnLCBjYik7XG5cdFx0dGhpcy5fc3RhYmxlICYmIHRoaXMuZW1pdCgndW5zdGFibGUnLCB0aGlzLnN0YXRlLCB0aGlzLmRhdGEpO1xuXHRcdFxuXHRcdHRoaXMuX3N0YWJsZSA9IGZhbHNlO1xuXHRcdFxuXHRcdGlmICggdGhpcy5fc3RhYmlsaXplciApXG5cdFx0XHRyZXR1cm47XG5cdFx0XG5cdFx0dGhpcy5fc3RhYmlsaXplciA9IFRhc2tTZXF1ZW5jZXIucHVzaFRhc2sodGhpcywgJ3B1c2hTdGF0ZScpO1xuXHR9XG5cdFxuXHRyZXRyaWV2ZSggcGF0aCwgaSA9IDAsIG9iaiA9IHRoaXMuZGF0YSApIHtcblx0XHRwYXRoID0gaXMuc3RyaW5nKHBhdGgpID8gcGF0aC5zcGxpdCgnLicpIDogcGF0aDtcblx0XHRyZXR1cm4gIW9iaiB8fCAhcGF0aCB8fCAhcGF0aC5sZW5ndGhcblx0XHQgICAgICAgPyBvYmpcblx0XHQgICAgICAgOiBwYXRoLmxlbmd0aCA9PSBpICsgMVxuXHRcdCAgICAgICAgID8gb2JqW3BhdGhbaV1dXG5cdFx0ICAgICAgICAgOiB0aGlzLnJldHJpZXZlKHBhdGgsIGkgKyAxLCBvYmpbcGF0aFtpXV0pO1xuXHR9XG5cdFxuXHRkaXNwYXRjaCggYWN0aW9uLCAuLi5hcmd6ICkge1xuXHRcdHRoaXMuc2NvcGVPYmouZGlzcGF0Y2goYWN0aW9uLCAuLi5hcmd6KTtcblx0fVxuXHRcblx0dHJpZ2dlciggYWN0aW9uLCAuLi5hcmd6ICkge1xuXHRcdGxldCB7IGFjdGlvbnMgfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cdFx0aWYgKCBhY3Rpb25zICYmIGFjdGlvbnNbYWN0aW9uXSApIHtcblx0XHRcdGxldCBucyA9IGFjdGlvbnNbYWN0aW9uXS5jYWxsKHRoaXMsIC4uLmFyZ3opO1xuXHRcdFx0bnMgJiYgdGhpcy5zZXRTdGF0ZShucyk7XG5cdFx0fVxuXHR9XG5cdFxuXHQvKipcblx0ICogUHVsbCBzdG9yZXMgaW4gdGhlIHByaXZhdGUgc3RhdGVcblx0ICogQHBhcmFtIHN0b3JlcyAge0FycmF5fSAocGFzc2VkIHRvIFN0b3JlOjptYXApIEV4IDogW1wic2Vzc2lvblwiLFxuXHQgKiAgICAgXCJvdGhlck5hbWVkU3RvcmU6a2V5XCIsIG90aGVyU3RvcmUuYXMoXCJvdGhlcktleVwiKV1cblx0ICovXG5cdHB1bGwoIHN0b3JlcywgZG9XYWl0LCBvcmlnaW4gKSB7XG5cdFx0bGV0IGluaXRpYWxPdXRwdXRzID0gdGhpcy5zY29wZU9iai5tYXAodGhpcywgc3RvcmVzKTtcblx0XHRpZiAoIGRvV2FpdCApIHtcblx0XHRcdHRoaXMud2FpdCgpO1xuXHRcdFx0c3RvcmVzLmZvckVhY2goKCBzICkgPT4gdGhpcy5zY29wZVtzXSAmJiB0aGlzLndhaXQodGhpcy5zY29wZVtzXSkpO1xuXHRcdFx0dGhpcy5yZWxlYXNlKCk7XG5cdFx0fVxuXHRcdHJldHVybiBpbml0aWFsT3V0cHV0cztcblx0fVxuXHRcblx0LyoqXG5cdCAqIFNldCAmIFB1c2ggdGhlIHJlc3VsdCBkYXRhIHRvIGZvbGxvd2VycyBpZiBzdGFibGVcblx0ICogQHBhcmFtIGNiXG5cdCAqL1xuXHRwdXNoKCBkYXRhLCBmb3JjZSwgY2IgKSB7XG5cdFx0Y2IgICAgPSBmb3JjZSA9PT0gdHJ1ZSA/IGNiIDogZm9yY2U7XG5cdFx0Zm9yY2UgPSBmb3JjZSA9PT0gdHJ1ZTtcblx0XHRpZiAoICFmb3JjZSAmJlxuXHRcdFx0KFxuXHRcdFx0XHQhdGhpcy5oYXNEYXRhQ2hhbmdlKGRhdGEpXG5cdFx0XHQpXG5cdFx0KSB7XG5cdFx0XHRjYiAmJiBjYigpO1xuXHRcdFx0aWYgKCAhdGhpcy5fX2xvY2tzLmFsbCApIHtcblx0XHRcdFx0bGV0IHN0YWJsZSAgID0gdGhpcy5fc3RhYmxlO1xuXHRcdFx0XHR0aGlzLl9zdGFibGUgPSB0cnVlO1xuXHRcdFx0XHQhc3RhYmxlICYmIHRoaXMuZW1pdCgnc3RhYmxlJywgdGhpcy5zdGF0ZSwgdGhpcy5kYXRhKTtcblx0XHRcdFx0dGhpcy5fc3RhYmlsaXplciA9IG51bGw7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdFxuXHRcdHRoaXMuZGF0YSA9IGRhdGE7XG5cdFx0dGhpcy53YWl0KCk7XG5cdFx0dGhpcy5yZWxlYXNlKGNiKTtcblx0XHRcblx0fVxuXHRcblx0LyoqXG5cdCAqIENhbGwgdGhlIGFwcGx5IGZuIHVzaW5nIHRoZSBjdXJyZW50IGFjY3VtdWxhdGVkIHN0YXRlIHVwZGF0ZSB0aGVuLCBwdXNoIHRoZVxuXHQgKiByZXN1bHRpbmcgZGF0YSBpZiBzdGFibGVcblx0ICogQHBhcmFtIGZvcmNlXG5cdCAqIEByZXR1cm5zIHtib29sZWFufVxuXHQgKi9cblx0cHVzaFN0YXRlKCBmb3JjZSApIHtcblx0XHRcblx0XHRpZiAoICFmb3JjZSAmJiAhdGhpcy5fY2hhbmdlc1NXICYmIHRoaXMuZGF0YSApXG5cdFx0XHRyZXR1cm47XG5cdFx0XG5cdFx0dmFyIG5leHRTdGF0ZSA9IHRoaXMuX25leHRTdGF0ZSB8fCB7IC4uLnRoaXMuc3RhdGUsIC4uLih0aGlzLl9jaGFuZ2VzU1cgfHwge30pIH0sXG5cdFx0ICAgIG5leHREYXRhICA9IHRoaXMuYXBwbHkodGhpcy5kYXRhLCBuZXh0U3RhdGUsIHRoaXMuX2NoYW5nZXNTVyk7XG5cdFx0XG5cdFx0dGhpcy5fc3RhYmlsaXplciA9IG51bGw7XG5cdFx0dGhpcy5zdGF0ZSAgICAgICA9IG5leHRTdGF0ZTtcblx0XHR0aGlzLl9jaGFuZ2VzU1cgID0gbnVsbDtcblx0XHRcblx0XHRpZiAoICFmb3JjZSAmJlxuXHRcdFx0KFxuXHRcdFx0XHQhdGhpcy5oYXNEYXRhQ2hhbmdlKG5leHREYXRhKVxuXHRcdFx0KVxuXHRcdCkge1xuXHRcdFx0aWYgKCAhdGhpcy5fX2xvY2tzLmFsbCApIHtcblx0XHRcdFx0bGV0IHN0YWJsZSAgID0gdGhpcy5fc3RhYmxlO1xuXHRcdFx0XHR0aGlzLl9zdGFibGUgPSB0cnVlO1xuXHRcdFx0XHQhc3RhYmxlICYmIHRoaXMuZW1pdCgnc3RhYmxlJywgdGhpcy5zdGF0ZSwgdGhpcy5kYXRhKTtcblx0XHRcdFx0dGhpcy5fc3RhYmlsaXplciA9IG51bGw7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdFxuXHRcdHRoaXMuZGF0YSA9IG5leHREYXRhO1xuXHRcdHRoaXMud2FpdCgpO1xuXHRcdHRoaXMucmVsZWFzZSgpO1xuXHRcdFxuXHR9XG5cdFxuXHQvKipcblx0ICogQWRkICdwU3RhdGUnIHRvIHRoZSBjdXJyZW50IGFjY3VtdWxhdGVkIHN0YXRlIHVwZGF0ZXNcblx0ICogJiB3YWl0IHNvdXJjZSBzdG9yZXMgc3RhYmlsaXphdGlvbiBiZWZvcmUgcHVzaGluZyB0aGVzZSBzdGF0ZSB1cGRhdGVzXG5cdCAqIEBwYXJhbSBwU3RhdGVcblx0ICogQHBhcmFtIGNiXG5cdCAqL1xuXHRzZXRTdGF0ZSggcFN0YXRlLCBjYiwgc3luYyApIHtcblx0XHR2YXIgaSAgICAgICA9IDAsIGNoYW5nZSxcblx0XHQgICAgY2hhbmdlcyA9IHRoaXMuX2NoYW5nZXNTVyA9IHRoaXMuX2NoYW5nZXNTVyB8fCB7fTtcblx0XHRmb3IgKCB2YXIgayBpbiBwU3RhdGUgKVxuXHRcdFx0aWYgKCAhdGhpcy5zdGF0ZVxuXHRcdFx0XHR8fCBjaGFuZ2VzLmhhc093blByb3BlcnR5KGspLy8gdG9kb1xuXHRcdFx0XHQmJiAoXG5cdFx0XHRcdFx0cFN0YXRlW2tdICE9PSBjaGFuZ2VzW2tdXG5cdFx0XHRcdCkgfHwgcFN0YXRlLmhhc093blByb3BlcnR5KGspXG5cdFx0XHRcdCYmIChcblx0XHRcdFx0XHRwU3RhdGVba10gIT09IHRoaXMuc3RhdGVba11cblx0XHRcdFx0XHR8fFxuXHRcdFx0XHRcdCh0aGlzLnN0YXRlW2tdICYmIHBTdGF0ZVtrXSAmJiAocFN0YXRlW2tdLl9yZXYgIT0gdGhpcy5fcmV2c1trXSkpLy8gcmV2L2hhc2ggdXBkYXRlXG5cdFx0XHRcdCkgKSB7XG5cdFx0XHRcdGNoYW5nZSAgICAgICAgPSB0cnVlO1xuXHRcdFx0XHR0aGlzLl9yZXZzW2tdID0gcFN0YXRlW2tdICYmIHBTdGF0ZVtrXS5fcmV2IHx8IHRydWU7XG5cdFx0XHRcdGNoYW5nZXNba10gICAgPSBwU3RhdGVba107XG5cdFx0XHR9XG5cdFx0XG5cdFx0dGhpcy5fbmV4dFN0YXRlID0geyAuLi50aGlzLnN0YXRlLCAuLi5jaGFuZ2VzIH07XG5cdFx0aWYgKCAhdGhpcy5zaG91bGRBcHBseSh0aGlzLl9uZXh0U3RhdGUpICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRcblx0XHRpZiAoIHN5bmMgKSB7XG5cdFx0XHR0aGlzLnB1c2hTdGF0ZSgpO1xuXHRcdFx0Y2IgJiYgY2IoKTtcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHRpZiAoIGNoYW5nZSApIHtcblx0XHRcdFx0dGhpcy5zdGFiaWxpemUoY2IpO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSBjYiAmJiBjYigpO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXHRcblx0LyoqXG5cdCAqIFVwZGF0ZSB0aGUgY3VycmVudCBzdGF0ZSAmIHB1c2ggaXRcblx0ICogQHBhcmFtIHBTdGF0ZVxuXHQgKiBAcGFyYW0gY2Jcblx0ICovXG5cdHNldFN0YXRlU3luYyggcFN0YXRlICkge1xuXHRcdHZhciBpICAgICAgID0gMCwgY2hhbmdlLFxuXHRcdCAgICBjaGFuZ2VzID0gdGhpcy5fY2hhbmdlc1NXID0gdGhpcy5fY2hhbmdlc1NXIHx8IHt9O1xuXHRcdGZvciAoIHZhciBrIGluIHBTdGF0ZSApXG5cdFx0XHRpZiAoICF0aGlzLnN0YXRlIHx8IHBTdGF0ZS5oYXNPd25Qcm9wZXJ0eShrKVxuXHRcdFx0XHQmJiAoXG5cdFx0XHRcdFx0cFN0YXRlW2tdICE9IHRoaXMuc3RhdGVba11cblx0XHRcdFx0XHR8fFxuXHRcdFx0XHRcdCh0aGlzLnN0YXRlW2tdICYmIHBTdGF0ZVtrXSAmJiAocFN0YXRlW2tdLl9yZXYgIT0gdGhpcy5fcmV2c1trXSkpLy8gcmV2L2hhc2ggdXBkYXRlXG5cdFx0XHRcdCkgKSB7XG5cdFx0XHRcdGNoYW5nZSAgICAgICAgPSB0cnVlO1xuXHRcdFx0XHR0aGlzLl9yZXZzW2tdID0gcFN0YXRlW2tdICYmIHBTdGF0ZVtrXS5fcmV2IHx8IHRydWU7XG5cdFx0XHRcdGNoYW5nZXNba10gICAgPSBwU3RhdGVba107XG5cdFx0XHR9XG5cdFx0dGhpcy5zaG91bGRBcHBseSh7IC4uLih0aGlzLnN0YXRlIHx8IHt9KSwgLi4uY2hhbmdlcyB9KSAmJiB0aGlzLnB1c2hTdGF0ZSgpO1xuXHRcdHJldHVybiB0aGlzLmRhdGE7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBnZXQgYSBzdG9yZS1rZXkgcGFpciBmb3IgU3RvcmU6Om1hcFxuXHQgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuXHQgKiBAcmV0dXJucyB7e3N0b3JlOiBTdG9yZSwgbmFtZTogKn19XG5cdCAqL1xuXHRhcyggbmFtZSApIHtcblx0XHRyZXR1cm4geyBzdG9yZTogdGhpcywgbmFtZSB9O1xuXHR9XG5cdFxuXHRvbiggbGlzdHMgKSB7XG5cdFx0aWYgKCAhaXMuc3RyaW5nKGxpc3RzKSAmJiBsaXN0cyApXG5cdFx0XHRPYmplY3Qua2V5cyhsaXN0cykuZm9yRWFjaChrID0+IHN1cGVyLm9uKGssIGxpc3RzW2tdKSk7XG5cdFx0ZWxzZSBzdXBlci5vbiguLi5hcmd1bWVudHMpO1xuXHR9XG5cdFxuXHRyZW1vdmVMaXN0ZW5lciggbGlzdHMgKSB7XG5cdFx0aWYgKCAhaXMuc3RyaW5nKGxpc3RzKSAmJiBsaXN0cyApXG5cdFx0XHRPYmplY3Qua2V5cyhsaXN0cykuZm9yRWFjaChrID0+IHN1cGVyLnJlbW92ZUxpc3RlbmVyKGssIGxpc3RzW2tdKSk7XG5cdFx0ZWxzZSBzdXBlci5yZW1vdmVMaXN0ZW5lciguLi5hcmd1bWVudHMpO1xuXHR9XG5cdFxuXHQvKipcblx0ICogaXMgY29tcGxldGUgKGFsbCByZXF1aWVyZWQga2V5cyBhcmUgaGVyZSlcblx0ICogQHJldHVybnMgYm9vbFxuXHQgKi9cblx0aXNDb21wbGV0ZSggc3RhdGUgPSB0aGlzLnN0YXRlICkge1xuXHRcdHZhciBfc3RhdGljID0gdGhpcy5jb25zdHJ1Y3Rvcjtcblx0XHRyZXR1cm4gKFxuXHRcdFx0IXRoaXMuX3JlcXVpcmVcblx0XHRcdHx8ICF0aGlzLl9yZXF1aXJlLmxlbmd0aFxuXHRcdFx0fHwgc3RhdGUgJiYgdGhpcy5fcmVxdWlyZS5yZWR1Y2UoXG5cdFx0XHRcdCggciwga2V5ICkgPT4gKHIgJiYgc3RhdGVba2V5XSksXG5cdFx0XHRcdHRydWVcblx0XHRcdClcblx0XHQpO1xuXHR9XG5cdFxuXHQvKipcblx0ICogaXMgc3RhYmxlXG5cdCAqIEByZXR1cm5zIGJvb2xcblx0ICovXG5cdGlzU3RhYmxlKCkge1xuXHRcdHJldHVybiB0aGlzLl9zdGFibGU7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBTZXJpYWxpemUgc3RhdGUgJiBkYXRhIHdpdGggc291cmNlcyByZWZzXG5cdCAqIEByZXR1cm5zIGJvb2xcblx0ICovXG5cdHNlcmlhbGl6ZSggY2ZnID0ge30sIG91dHB1dCA9IHt9ICkge1xuXHRcdGxldCBzSWQgID0gY2ZnLnBhcmVudEFsaWFzIHx8IHRoaXMuc2NvcGVPYmouX2lkLFxuXHRcdCAgICByZWZzID1cblx0XHRcdCAgICAhY2ZnLm5vcmVmcyAmJiBpcy5hcnJheSh0aGlzLl91c2UpICYmIHRoaXMuX3VzZS5yZWR1Y2UoXG5cdFx0XHQgICAgKCBtYXAsIGtleSApID0+IHsvL3RvZG9cblx0XHRcdFx0ICAgIGxldCBuYW1lLFxuXHRcdFx0XHQgICAgICAgIGFsaWFzLCBwYXRoLCBfa2V5LFxuXHRcdFx0XHQgICAgICAgIHN0b3JlO1xuXHRcdFx0XHQgICAgaWYgKCBrZXkuc3RvcmUgJiYga2V5Lm5hbWUgKSB7XG5cdFx0XHRcdFx0ICAgIGFsaWFzID0gbmFtZSA9IGtleS5uYW1lO1xuXHRcdFx0XHRcdCAgICBzdG9yZSA9IGtleS5zdG9yZTtcblx0XHRcdFx0ICAgIH1cblx0XHRcdFx0ICAgIGVsc2UgaWYgKCBpcy5mbihrZXkpICkge1xuXHRcdFx0XHRcdCAgICBuYW1lICA9IGFsaWFzID0ga2V5Lm5hbWUgfHwga2V5LmRlZmF1bHROYW1lO1xuXHRcdFx0XHRcdCAgICBzdG9yZSA9IGtleTtcblx0XHRcdFx0ICAgIH1cblx0XHRcdFx0ICAgIGVsc2Uge1xuXHRcdFx0XHRcdCAgICBfa2V5ICA9IGtleS5tYXRjaCgvKFteXFwuXFw6XSspKCg/OlxcLlteXFwuXFw6XSspKikoPzpcXDooW15cXC5cXDpdKykpPy8pO1xuXHRcdFx0XHRcdCAgICBuYW1lICA9IF9rZXlbMV07XG5cdFx0XHRcdFx0ICAgIHBhdGggID0gX2tleVsyXSAmJiBfa2V5WzJdLnN1YnN0cigxKTtcblx0XHRcdFx0XHQgICAgc3RvcmUgPSB0aGlzLnNjb3BlT2JqLnN0b3Jlc1tfa2V5WzFdXTtcblx0XHRcdFx0XHQgICAgYWxpYXMgPSBfa2V5WzNdIHx8IHBhdGggJiYgcGF0aC5tYXRjaCgvKFteXFwuXSopJC8pWzBdIHx8IF9rZXlbMV07XG5cdFx0XHRcdCAgICB9XG5cdFx0XHRcdCAgICBpZiAoIHN0b3JlICYmIGlzLnJzU3RvcmUoc3RvcmUpICYmICFzdG9yZS5zY29wZU9iai5fLmlzTG9jYWxJZCApXG5cdFx0XHRcdFx0ICAgIG1hcFthbGlhc10gPSBzdG9yZS5zY29wZU9iai5faWQgKyAnLycgKyBuYW1lO1xuXHRcdFx0XHRcblx0XHRcdFx0ICAgIHJldHVybiBtYXA7XG5cdFx0XHQgICAgfSwge31cblx0XHRcdCAgICApIHx8IHt9O1xuXHRcdFxuXHRcdGtleVdhbGtuU2V0KFxuXHRcdFx0b3V0cHV0LFxuXHRcdFx0KHNJZCArICcvJyArIHRoaXMubmFtZSksXG5cdFx0XHR7XG5cdFx0XHRcdHN0YXRlOiB0aGlzLnN0YXRlICYmXG5cdFx0XHRcdFx0KFxuXHRcdFx0XHRcdFx0Y2ZnLm5vcmVmc1xuXHRcdFx0XHRcdFx0PyB7IC4uLnRoaXMuc3RhdGUgfVxuXHRcdFx0XHRcdFx0OiBPYmplY3Qua2V5cyh0aGlzLnN0YXRlKS5yZWR1Y2UoKCBoLCBrICkgPT4gKCFyZWZzW2tdICYmIChoW2tdID0gdGhpcy5zdGF0ZVtrXSksIGgpLCB7fSlcblx0XHRcdFx0XHQpLFxuXHRcdFx0XHRkYXRhIDogKFxuXHRcdFx0XHRcdFx0dGhpcy5kYXRhICYmXG5cdFx0XHRcdFx0XHR0aGlzLmRhdGEuX19wcm90b19fID09PSBvYmpQcm90byA/XG5cdFx0XHRcdFx0XHR0aGlzLmRhdGEgOlxuXHRcdFx0XHRcdFx0KGlzLmJvb2wodGhpcy5kYXRhKVxuXHRcdFx0XHRcdFx0XHR8fCBpcy5udW1iZXIodGhpcy5kYXRhKVxuXHRcdFx0XHRcdFx0XHR8fCBpcy5zdHJpbmcodGhpcy5kYXRhKSkgJiYgdGhpcy5kYXRhXG5cdFx0XHRcdFx0KVxuXHRcdFx0XHRcdHx8IHVuZGVmaW5lZFxuXHRcdFx0XHRcblx0XHRcdFx0LFxuXHRcdFx0XHRyZWZzXG5cdFx0XHR9XG5cdFx0KTtcblx0XHRyZXR1cm4gb3V0cHV0O1xuXHR9XG5cdFxuXHQvKipcblx0ICogcmVzdG9yZSBzdGF0ZSAmIGRhdGFcblx0ICogQHJldHVybnMgYm9vbFxuXHQgKi9cblx0cmVzdG9yZSggc25hcHNob3QsIGltbWVkaWF0ZSApIHtcblx0XHRzbmFwc2hvdCA9IHNuYXBzaG90XG5cdFx0XHQmJiBrZXlXYWxrbkdldChzbmFwc2hvdCwgdGhpcy5zY29wZU9iai5faWQgKyAnLycgKyB0aGlzLm5hbWUpXG5cdFx0XHR8fCB0aGlzLiRzY29wZS50YWtlU25hcHNob3RCeUtleSh0aGlzLnNjb3BlT2JqLl9pZCArICcvJyArIHRoaXMubmFtZSk7XG5cdFx0XG5cdFx0aWYgKCAhc25hcHNob3QgKVxuXHRcdFx0cmV0dXJuO1xuXHRcdFxuXHRcdGlmICggc25hcHNob3QgKSB7XG5cdFx0XHRpZiAoICF0aGlzLmlzU3RhYmxlKCkgJiYgIWltbWVkaWF0ZSApXG5cdFx0XHRcdHRoaXMudGhlbigoKSA9PiByZXN0b3JlKHNuYXBzaG90KSlcblx0XHRcdGxldCBzbmFwO1xuXHRcdFx0dGhpcy5zdGF0ZSA9IHsgLi4uc25hcHNob3Quc3RhdGUgfTtcblx0XHRcdE9iamVjdC5rZXlzKHNuYXBzaG90LnJlZnMpLmZvckVhY2goXG5cdFx0XHRcdCgga2V5ICkgPT4gey8vdG9kb1xuXHRcdFx0XHRcdGlmICggc25hcCA9IHRoaXMuJHNjb3BlLmdldFNuYXBzaG90QnlLZXkoc25hcHNob3QucmVmc1trZXldKSApXG5cdFx0XHRcdFx0XHR0aGlzLnN0YXRlW2tleV0gPSBzbmFwLmRhdGE7XG5cdFx0XHRcdFx0Ly9lbHNlXG5cdFx0XHRcdFx0Ly8gICAgY29uc29sZS53YXJuKCdub3QgZm91bmQgOiAnLCBrZXksIHNuYXAgJiYgc25hcC5yZWZzWyBrZXkgXSlcblx0XHRcdFx0fVxuXHRcdFx0KVxuXHRcdFx0XG5cdFx0XHR0aGlzLmRhdGEgPSBzbmFwc2hvdC5kYXRhO1xuXHRcdFx0XG5cdFx0fVxuXHR9XG5cdFxuXHQvKipcblx0ICogVW4gYmluZCB0aGlzIHN0b3JlIG9mZiB0aGUgZ2l2ZW4gY29tcG9uZW50LWtleVxuXHQgKiBAcGFyYW0gb2JqXG5cdCAqIEBwYXJhbSBrZXlcblx0ICogQHJldHVybnMge0FycmF5LjwqPn1cblx0ICovXG5cdHVuQmluZCggb2JqLCBrZXksIHBhdGggKSB7XG5cdFx0dmFyIGZvbGxvd2VycyA9IHRoaXMuX2ZvbGxvd2Vycyxcblx0XHQgICAgaSAgICAgICAgID0gZm9sbG93ZXJzICYmIGZvbGxvd2Vycy5sZW5ndGg7XG5cdFx0d2hpbGUgKCBmb2xsb3dlcnMgJiYgaS0tIClcblx0XHRcdGlmICggZm9sbG93ZXJzW2ldWzBdID09PSBvYmogJiYgZm9sbG93ZXJzW2ldWzFdID09PSBrZXkgJiYgZm9sbG93ZXJzW2ldWzJdID09PSBwYXRoIClcblx0XHRcdFx0cmV0dXJuIGZvbGxvd2Vycy5zcGxpY2UoaSwgMSk7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBCaW5kIHRoaXMgc3RvcmUgY2hhbmdlcyB0byB0aGUgZ2l2ZW4gY29tcG9uZW50LWtleVxuXHQgKiBAcGFyYW0gb2JqIHtSZWFjdC5Db21wb25lbnR8U3RvcmV8ZnVuY3Rpb24pXG5cdCAqIEBwYXJhbSBrZXkge3N0cmluZ30gb3B0aW9uYWwga2V5IHdoZXJlIHRvIG1hcCB0aGUgcHVibGljIHN0YXRlXG5cdCAqL1xuXHRiaW5kKCBvYmosIGtleSwgc2V0SW5pdGlhbCA9IHRydWUsIHBhdGggKSB7XG5cdFx0dGhpcy5fZm9sbG93ZXJzLnB1c2goW29iaiwga2V5LCBwYXRoXSk7XG5cdFx0aWYgKCBzZXRJbml0aWFsICYmIHRoaXMuZGF0YSAmJiB0aGlzLl9zdGFibGUgKSB7XG5cdFx0XHRsZXQgZGF0YSA9IHBhdGggPyB0aGlzLnJldHJpZXZlKHBhdGgpIDogdGhpcy5kYXRhO1xuXHRcdFx0aWYgKCB0eXBlb2Ygb2JqICE9IFwiZnVuY3Rpb25cIiApIHtcblx0XHRcdFx0aWYgKCBrZXkgKSBvYmouc2V0U3RhdGUoeyBba2V5XTogZGF0YSB9KTtcblx0XHRcdFx0ZWxzZSBvYmouc2V0U3RhdGUoZGF0YSk7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0b2JqKGRhdGEpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRcblx0LyoqXG5cdCAqIG9uY2UoJ3N0YWJsZScsIGNiKVxuXHQgKiBAcGFyYW0gb2JqIHtSZWFjdC5Db21wb25lbnR8U3RvcmV8ZnVuY3Rpb24pXG5cdCAqIEBwYXJhbSBrZXkge3N0cmluZ30gb3B0aW9uYWwga2V5IHdoZXJlIHRvIG1hcCB0aGUgcHVibGljIHN0YXRlXG5cdCAqL1xuXHR0aGVuKCBjYiApIHtcblx0XHRpZiAoIHRoaXMuX3N0YWJsZSApXG5cdFx0XHRyZXR1cm4gY2IodGhpcy5kYXRhKTtcblx0XHR0aGlzLm9uY2UoJ3N0YWJsZScsIGUgPT4gY2IodGhpcy5kYXRhKSk7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBBZGQgYSBsb2NrIHNvIHRoZSBzdG9yZSB3aWxsIG5vdCBwcm9wYWcgaXQgZGF0YSB1bnRpbGwgcmVsZWFzZSgpIGlzIGNhbGxcblx0ICogQHBhcmFtIHByZXZpb3VzIHtTdG9yZXxudW1iZXJ8QXJyYXl9IEBvcHRpb25hbCB3ZiB0byB3YWl0LCByZWxlYXNlcyB0byB3YWl0IG9yXG5cdCAqICAgICBhcnJheSBvZiBzdHVmZiB0byB3YWl0XG5cdCAqIEByZXR1cm5zIHt0aGlzfVxuXHQgKi9cblx0d2FpdCggcHJldmlvdXMgKSB7XG5cdFx0aWYgKCB0eXBlb2YgcHJldmlvdXMgPT0gXCJudW1iZXJcIiApXG5cdFx0XHRyZXR1cm4gdGhpcy5fX2xvY2tzLmFsbCArPSBwcmV2aW91cztcblx0XHRpZiAoIGlzLmFycmF5KHByZXZpb3VzKSApXG5cdFx0XHRyZXR1cm4gcHJldmlvdXMubWFwKHRoaXMud2FpdC5iaW5kKHRoaXMpKTtcblx0XHRcblx0XHR0aGlzLl9zdGFibGUgJiYgdGhpcy5lbWl0KCd1bnN0YWJsZScsIHRoaXMuc3RhdGUsIHRoaXMuZGF0YSk7XG5cdFx0dGhpcy5fc3RhYmxlID0gZmFsc2U7XG5cdFx0dGhpcy5fX2xvY2tzLmFsbCsrO1xuXHRcdFxuXHRcdGxldCByZWFzb24gPSBpcy5zdHJpbmcocHJldmlvdXMpID8gcHJldmlvdXMgOiBudWxsO1xuXHRcdGlmICggcmVhc29uICkge1xuXHRcdFx0dGhpcy5fX2xvY2tzW3JlYXNvbl0gPSB0aGlzLl9fbG9ja3NbcmVhc29uXSB8fCAwO1xuXHRcdFx0dGhpcy5fX2xvY2tzW3JlYXNvbl0rKztcblx0XHR9XG5cdFx0aWYgKCBwcmV2aW91cyAmJiBpcy5mbihwcmV2aW91cy50aGVuKSApIHtcblx0XHRcdHByZXZpb3VzLnRoZW4odGhpcy5yZWxlYXNlLmJpbmQodGhpcywgbnVsbCkpO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXHRcblx0LyoqXG5cdCAqIERlY3JlYXNlIGxvY2tzIGZvciB0aGlzIHN0b3JlLCBpZiBpdCByZWFjaCAwICxcblx0ICogaXQgd2lsbCBiZSBwcm9wYWdhdGVkIHRvIHRoZSBmb2xsb3dlcnMsXG5cdCAqIHRoZW4sIGFsbCBzdHVmZiBwYXNzZWQgdG8gXCJ0aGVuXCIgY2FsbCBiYWNrIHdpbGwgYmUgZXhlYyAvIHJlbGVhc2VkXG5cdCAqIEBwYXJhbSBkZXN5bmNcblx0ICogQHJldHVybnMgeyp9XG5cdCAqL1xuXHRyZWxlYXNlKCByZWFzb24sIGNiICkge1xuXHRcdHZhciBfc3RhdGljID0gdGhpcy5jb25zdHJ1Y3RvciwgbWUgPSB0aGlzO1xuXHRcdGxldCBpICAgICAgID0gMCwgd2FzU3RhYmxlID0gdGhpcy5fc3RhYmxlO1xuXHRcdFxuXHRcdGlmICggaXMuZm4ocmVhc29uKSApIHtcblx0XHRcdGNiICAgICA9IHJlYXNvbjtcblx0XHRcdHJlYXNvbiA9IG51bGw7XG5cdFx0fVxuXHRcdFxuXHRcdGlmICggcmVhc29uICkge1xuXHRcdFx0aWYgKCB0aGlzLl9fbG9ja3NbcmVhc29uXSA9PSAwIClcblx0XHRcdFx0Y29uc29sZS5lcnJvcihcIlJlbGVhc2UgbW9yZSB0aGFuIGxvY2tpbmcgIVwiLCByZWFzb24pO1xuXHRcdFx0dGhpcy5fX2xvY2tzW3JlYXNvbl0gPSB0aGlzLl9fbG9ja3NbcmVhc29uXSB8fCAwO1xuXHRcdFx0dGhpcy5fX2xvY2tzW3JlYXNvbl0tLTtcblx0XHR9XG5cdFx0XG5cdFx0aWYgKCAhcmVhc29uICYmIHRoaXMuX19sb2Nrcy5hbGwgPT0gMCApXG5cdFx0XHRjb25zb2xlLmVycm9yKFwiUmVsZWFzZSBtb3JlIHRoYW4gbG9ja2luZyAhXCIpO1xuXHRcdFxuXHRcdGlmICggIS0tdGhpcy5fX2xvY2tzLmFsbCAmJiB0aGlzLmlzQ29tcGxldGUoKSApIHtcblx0XHRcdGxldCBwcm9wYWcgICA9IHRoaXMuc2hvdWxkUHJvcGFnKHRoaXMuZGF0YSk7XG5cdFx0XHR0aGlzLl9zdGFibGUgPSB0cnVlO1xuXHRcdFx0cHJvcGFnICYmIHRoaXMuX3JldisrOy8vXG5cdFx0XHRpZiAoIHByb3BhZyAmJiB0aGlzLl9mb2xsb3dlcnMubGVuZ3RoIClcblx0XHRcdFx0dGhpcy5fZm9sbG93ZXJzLmZvckVhY2goZnVuY3Rpb24gcHJvcGFnKCBmb2xsb3dlciApIHtcblx0XHRcdFx0XHRsZXQgZGF0YSA9IGZvbGxvd2VyWzJdID8gbWUucmV0cmlldmUoZm9sbG93ZXJbMl0pIDogbWUuZGF0YTtcblx0XHRcdFx0XHQvL2lmICggIWRhdGEgKSByZXR1cm47XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0aWYgKCB0eXBlb2YgZm9sbG93ZXJbMF0gPT0gXCJmdW5jdGlvblwiICkge1xuXHRcdFx0XHRcdFx0Zm9sbG93ZXJbMF0oZGF0YSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdFx0Ly9jYiAmJiBpKys7XG5cdFx0XHRcdFx0XHRmb2xsb3dlclswXS5zZXRTdGF0ZShcblx0XHRcdFx0XHRcdFx0KGZvbGxvd2VyWzFdKSA/IHsgW2ZvbGxvd2VyWzFdXTogZGF0YSB9XG5cdFx0XHRcdFx0XHRcdCAgICAgICAgICAgICAgOiBkYXRhXG5cdFx0XHRcdFx0XHRcdC8vLFxuXHRcdFx0XHRcdFx0XHQvL2NiICYmIChcblx0XHRcdFx0XHRcdFx0Ly8gICAgKCkgPT4gKCEoLS1pKSAmJiBjYigpKVxuXHRcdFx0XHRcdFx0XHQvLylcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdC8vZWxzZVxuXHRcdFx0IXdhc1N0YWJsZSAmJiB0aGlzLmVtaXQoJ3N0YWJsZScsIHRoaXMuZGF0YSk7XG5cdFx0XHRwcm9wYWcgJiYgdGhpcy5lbWl0KCd1cGRhdGUnLCB0aGlzLmRhdGEpO1xuXHRcdFx0Y2IgJiYgY2IoKVxuXHRcdH1cblx0XHRlbHNlIGNiICYmIHRoaXMudGhlbihjYik7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblx0XG5cdHByb3BhZyggZGF0YSApIHtcblx0XHR0aGlzLmVtaXQoJ3VwZGF0ZScsIGRhdGEpO1xuXHR9XG5cdFxuXHRyZXRhaW4oIHJlYXNvbiApIHtcblx0XHR0aGlzLl9fcmV0YWlucy5hbGwrKztcblx0XHRpZiAoIHJlYXNvbiApIHtcblx0XHRcdHRoaXMuX19yZXRhaW5zW3JlYXNvbl0gPSB0aGlzLl9fcmV0YWluc1tyZWFzb25dIHx8IDA7XG5cdFx0XHR0aGlzLl9fcmV0YWluc1tyZWFzb25dKys7XG5cdFx0fVxuXHR9XG5cdFxuXHRkaXNwb3NlKCByZWFzb24gKSB7XG5cdFx0Ly9jb25zb2xlLndhcm4oXCJkaXNwb3NlXCIsIHJlYXNvbiwgdGhpcy5fX3JldGFpbnMpO1xuXHRcdGlmICggcmVhc29uICkge1xuXHRcdFx0aWYgKCAhdGhpcy5fX3JldGFpbnNbcmVhc29uXSApXG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIlJTIDogRGlzcG9zZSBtb3JlIHRoYW4gcmV0YWluaW5nIG9uIHN0b3JlICdcIiArIHRoaXMubmFtZSArIFwiJyA6IFwiICsgcmVhc29uKTtcblx0XHRcdFxuXHRcdFx0dGhpcy5fX3JldGFpbnNbcmVhc29uXS0tO1xuXHRcdH1cblx0XHRpZiAoIHRoaXMuX19yZXRhaW5zLmFsbCA9PSAwIClcblx0XHRcdHRocm93IG5ldyBFcnJvcihcIlJTIDogRGlzcG9zZSBtb3JlIHRoYW4gcmV0YWluaW5nIG9uIHN0b3JlIFwiICsgdGhpcy5uYW1lKTtcblx0XHRcblx0XHR0aGlzLl9fcmV0YWlucy5hbGwtLTtcblx0XHRcblx0XHRpZiAoICF0aGlzLl9fcmV0YWlucy5hbGwgKSB7XG5cdFx0XHRpZiAoIHRoaXMuX3BlcnNpc3RlbmNlVG0gKSB7XG5cdFx0XHRcdHRoaXMuX2Rlc3Ryb3lUTSAmJiBjbGVhclRpbWVvdXQodGhpcy5fZGVzdHJveVRNKTtcblx0XHRcdFx0dGhpcy5fZGVzdHJveVRNID0gc2V0VGltZW91dChcblx0XHRcdFx0XHRlID0+IHtcblx0XHRcdFx0XHRcdHRoaXMuX2Rlc3Ryb3lUTSA9IG51bGw7XG5cdFx0XHRcdFx0XHQvL3RoaXMudGhlbihzID0+IHtcblx0XHRcdFx0XHRcdCF0aGlzLl9fcmV0YWlucy5hbGwgJiYgIXRoaXMuZGVhZCAmJiB0aGlzLmRlc3Ryb3koKVxuXHRcdFx0XHRcdFx0Ly99KTtcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHRoaXMuX3BlcnNpc3RlbmNlVG1cblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHQvL3RoaXMudGhlbihzID0+XG5cdFx0XHRcdCghdGhpcy5fX3JldGFpbnMuYWxsICYmICF0aGlzLmRlYWQgJiYgdGhpcy5kZXN0cm95KCkpXG5cdFx0XHRcdC8vKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0XG5cdGRlc3Ryb3koKSB7XG5cdFx0Ly8gIGNvbnNvbGUubG9nKFwiZGVzdHJveVwiLCB0aGlzLl91aWQpO1xuXHRcdFxuXHRcdHRoaXMuZW1pdCgnZGVzdHJveScsIHRoaXMpO1xuXHRcdGlmICggdGhpcy5fc3RhYmlsaXplciApXG5cdFx0XHRjbGVhclRpbWVvdXQodGhpcy5fc3RhYmlsaXplcik7XG5cdFx0XG5cdFx0aWYgKCB0aGlzLl9mb2xsb3dlcnMubGVuZ3RoIClcblx0XHRcdHRoaXMuX2ZvbGxvd2Vycy5mb3JFYWNoKFxuXHRcdFx0XHQoIGZvbGxvd2VyICkgPT4ge1xuXHRcdFx0XHRcdGlmICggdHlwZW9mIGZvbGxvd2VyWzBdICE9PSBcImZ1bmN0aW9uXCIgKSB7XG5cdFx0XHRcdFx0XHRpZiAoIGZvbGxvd2VyWzBdLnN0b3JlcyApXG5cdFx0XHRcdFx0XHRcdGRlbGV0ZSBmb2xsb3dlclswXS5zdG9yZXNbZm9sbG93ZXJbMV1dO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0KTtcblx0XHR0aGlzLl9mb2xsb3dlcnMubGVuZ3RoID0gMDtcblx0XHR0aGlzLmNvbnN0cnVjdG9yLl9yZXYgID0gdGhpcy5yZXY7XG5cdFx0dGhpcy5kZWFkICAgICAgICAgICAgICA9IHRydWU7XG5cdFx0dGhpcy5fcmV2cyAgICAgICAgICAgICA9IHRoaXMuZGF0YSA9IHRoaXMuc3RhdGUgPSB0aGlzLnNjb3BlID0gbnVsbDtcblx0XHR0aGlzLnJlbW92ZUFsbExpc3RlbmVycygpO1xuXHR9XG59XG5cbi8qKlxuICogZ2V0IGEgc3RhdGljIGFsaWFzZWQgcmVmZXJlbmNlIG9mIGEgc3RvcmVcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKiBAcmV0dXJucyB7e3N0b3JlOiBTdG9yZSwgbmFtZTogKn19XG4gKi9cblN0b3JlLmFzID0gZnVuY3Rpb24gKCBuYW1lICkge1xuXHRyZXR1cm4geyBzdG9yZTogdGhpcywgbmFtZSB9O1xufVxuXG4vKipcbiAqIE1hcCBhbGwgbmFtZWQgc3RvcmVzIGluIHtrZXlzfSB0byB0aGUge29iamVjdH0ncyBzdGF0ZVxuICogSG9vayBjb21wb25lbnRXaWxsVW5tb3VudCAoZm9yIHJlYWN0IGNvbXApIG9yIGRlc3Ryb3kgdG8gdW5CaW5kIHRoZW0gYXV0b21hdGljYWxseVxuICogQHN0YXRpY1xuICogQHBhcmFtIG9iamVjdCB7T2JqZWN0fSB0YXJnZXQgc3RhdGUgYXdhcmUgb2JqZWN0IChSZWFjdC5Db21wb25lbnR8U3RvcmV8Li4uKVxuICogQHBhcmFtIGtleXMge0FycmF5fSBFeCA6IFtcInNlc3Npb25cIiwgXCJvdGhlclN0YXRpY05hbWVkU3RvcmU6a2V5XCIsXG4gKiAgICAgc3RvcmUuYXMoJ2Fub3RoZXJLZXknKV1cbiAqL1xuU3RvcmUubWFwID0gZnVuY3Rpb24gKCBjU3RvcmUsIGtleXMsIHNjb3BlLCBvcmlnaW4sIHNldEluaXRpYWwgPSBmYWxzZSApIHtcblx0dmFyIHRhcmdldFJldnMgICAgID0gY1N0b3JlLl9yZXZzIHx8IHt9O1xuXHR2YXIgdGFyZ2V0U2NvcGUgICAgPSBjU3RvcmUuc3RvcmVzIHx8IChjU3RvcmUuc3RvcmVzID0ge30pO1xuXHR2YXIgaW5pdGlhbE91dHB1dHMgPSB7fTtcblx0a2V5cyAgICAgICAgICAgICAgID0gaXMuYXJyYXkoa2V5cykgPyBbLi4ua2V5c10gOiBba2V5c107XG5cdFxuXHRcblx0c2NvcGUgPSBzY29wZSB8fCBTdG9yZS5zdGF0aWNTY29wZTtcblx0XG5cdGtleXMgPSBrZXlzLmZpbHRlcihcblx0XHQvLyBAdG9kbyA6IHVzZSBxdWVyeSByZWZzXG5cdFx0Ly8gKHN0b3JlKShcXC5zdG9yZSkqKFxcWyhcXCp8KHByb3BzKVxcdyspKylcXF0pPyhcXDphbGlhcylcblx0XHQoIGtleSApID0+IHtcblx0XHRcdGlmICggIWtleSApIHtcblx0XHRcdFx0Y29uc29sZS5lcnJvcihcIk5vdCBhIG1hcHBhYmxlIHN0b3JlIGl0ZW0gJ1wiICsga2V5ICsgXCInIGluIFwiICsgb3JpZ2luICsgJyAhIScpO1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRsZXQgbmFtZSxcblx0XHRcdCAgICBhbGlhcyxcblx0XHRcdCAgICBwYXRoLFxuXHRcdFx0ICAgIHN0b3JlLCBfa2V5O1xuXHRcdFx0aWYgKCBrZXkuc3RvcmUgJiYga2V5Lm5hbWUgKSB7XG5cdFx0XHRcdGFsaWFzID0gbmFtZSA9IGtleS5uYW1lO1xuXHRcdFx0XHRzdG9yZSA9IGtleS5zdG9yZTtcblx0XHRcdH1cblx0XHRcdGVsc2UgaWYgKCBpcy5mbihrZXkpICkge1xuXHRcdFx0XHRuYW1lICA9IGFsaWFzID0ga2V5Lm5hbWUgfHwga2V5LmRlZmF1bHROYW1lO1xuXHRcdFx0XHRzdG9yZSA9IGtleTtcblx0XHRcdH1cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHRfa2V5ICA9IGtleS5tYXRjaCgvKFteXFwuXFw6XSspKCg/OlxcLlteXFwuXFw6XSspKikoPzpcXDooW15cXC5cXDpdKykpPy8pO1xuXHRcdFx0XHRuYW1lICA9IF9rZXlbMV07XG5cdFx0XHRcdHBhdGggID0gX2tleVsyXSAmJiBfa2V5WzJdLnN1YnN0cigxKTtcblx0XHRcdFx0c3RvcmUgPSBzY29wZS5zdG9yZXNbX2tleVsxXV07XG5cdFx0XHRcdGFsaWFzID0gX2tleVszXSB8fCBwYXRoICYmIHBhdGgubWF0Y2goLyhbXlxcLl0qKSQvKVswXSB8fCBfa2V5WzFdO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCAhc3RvcmUgKSB7XG5cdFx0XHRcdGxldCBpID0gW107XG5cdFx0XHRcdGZvciAoIHZhciBvIGluIHNjb3BlLnN0b3JlcyApXG5cdFx0XHRcdFx0aS5wdXNoKG8pXG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoXCJOb3QgYSBtYXBwYWJsZSBzdG9yZSBpdGVtICdcIiArIG5hbWUgKyBcIi9cIiArIGFsaWFzICsgXCInIGluIFwiICsgKGNTdG9yZS5uYW1lIHx8IGNTdG9yZSkgKyAnICEhJywgc3RvcmUsIF9rZXksIHNjb3BlLnN0b3JlcywgaSk7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdGlmICggaXMucnNTY29wZUNsYXNzKHN0b3JlKSApIHNjb3BlLl9tb3VudChuYW1lKTtcblx0XHRcdGlmICggaXMucnNTY29wZShzdG9yZSkgKSB7XG5cdFx0XHRcdHN0b3JlID0gc2NvcGUuX21vdW50KGtleSk7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIGlmICggdGFyZ2V0UmV2c1tuYW1lXSApIHJldHVybiBmYWxzZTsvLyBpZ25vcmUgZGJsIHVzZXMgZm9yIG5vd1xuXHRcdFx0XG5cdFx0XHRcblx0XHRcdGlmICggaXMuZm4oc3RvcmUpICkge1xuXHRcdFx0XHRzY29wZS5fbW91bnQobmFtZSlcblx0XHRcdFx0c2NvcGUuc3RvcmVzW25hbWVdLmJpbmQoY1N0b3JlLCBhbGlhcywgc2V0SW5pdGlhbCwgcGF0aCk7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0c3RvcmUuYmluZChjU3RvcmUsIGFsaWFzLCBzZXRJbml0aWFsLCBwYXRoKTtcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0Ly8gZ2l2ZSBpbml0aWFsIHN0b3JlIHdlaWdodCBiYXNpbmcgc291cmNlc1xuXHRcdFx0c2NvcGUuc3RvcmVzW25hbWVdLl9zb3VyY2VzICYmIGNTdG9yZS5fc291cmNlcy5wdXNoKC4uLnNjb3BlLnN0b3Jlc1tuYW1lXS5fc291cmNlcyk7XG5cdFx0XHRcblx0XHRcdHRhcmdldFJldnNbYWxpYXNdID0gdGFyZ2V0UmV2c1thbGlhc10gfHwgdHJ1ZTtcblx0XHRcdCF0YXJnZXRTY29wZVtuYW1lXSAmJiAodGFyZ2V0U2NvcGVbbmFtZV0gPSBzY29wZS5zdG9yZXNbbmFtZV0pO1xuXHRcdFx0aWYgKCBzY29wZS5zdG9yZXNbbmFtZV0uaGFzT3duUHJvcGVydHkoJ2RhdGEnKSApXG5cdFx0XHRcdGluaXRpYWxPdXRwdXRzW25hbWVdID0gc2NvcGUuZGF0YVtuYW1lXTtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0KTtcblx0XG5cdC8vIC4uLiBAdG9kb1xuXHRjU3RvcmUub25jZSgnZGVzdHJveScsICggLi4uYXJneiApID0+IHtcblx0XHRrZXlzLm1hcChcblx0XHRcdCgga2V5ICkgPT4ge1xuXHRcdFx0XHRsZXQgbmFtZSxcblx0XHRcdFx0ICAgIGFsaWFzLCBwYXRoLFxuXHRcdFx0XHQgICAgc3RvcmU7XG5cdFx0XHRcdGlmICgga2V5LnN0b3JlICYmIGtleS5uYW1lICkge1xuXHRcdFx0XHRcdGFsaWFzID0gbmFtZSA9IGtleS5uYW1lO1xuXHRcdFx0XHRcdHN0b3JlID0ga2V5LnN0b3JlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2UgaWYgKCBpcy5mbihrZXkpICkge1xuXHRcdFx0XHRcdG5hbWUgID0gYWxpYXMgPSBrZXkubmFtZSB8fCBrZXkuZGVmYXVsdE5hbWU7XG5cdFx0XHRcdFx0c3RvcmUgPSBzY29wZS5zdG9yZXNbbmFtZV07XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0a2V5ICAgPSBrZXkubWF0Y2goLyhbXlxcLlxcOl0rKSgoPzpcXC5bXlxcLlxcOl0rKSopKD86XFw6KFteXFwuXFw6XSspKT8vKTtcblx0XHRcdFx0XHRuYW1lICA9IGtleVsxXTtcblx0XHRcdFx0XHRwYXRoICA9IGtleVsyXSAmJiBrZXlbMl0uc3Vic3RyKDEpO1xuXHRcdFx0XHRcdHN0b3JlID0gc2NvcGUuc3RvcmVzW2tleVsxXV07XG5cdFx0XHRcdFx0YWxpYXMgPSBrZXlbM10gfHwgcGF0aCAmJiBwYXRoLm1hdGNoKC8oW15cXC5dKikkLylbMF0gfHwga2V5WzFdO1xuXHRcdFx0XHR9XG5cdFx0XHRcdFxuXHRcdFx0XHRzdG9yZSAmJiAhaXMuZm4oc3RvcmUpICYmIHN0b3JlLnVuQmluZChjU3RvcmUsIGFsaWFzLCBwYXRoKVxuXHRcdFx0fVxuXHRcdCk7XG5cdH0pXG5cdFxuXHRyZXR1cm4gaW5pdGlhbE91dHB1dHM7XG59O1xuXG5cbmlzLnJzU3RvcmUgICAgICA9IGZ1bmN0aW9uICggb2JqICkge1xuXHRyZXR1cm4gb2JqIGluc3RhbmNlb2YgU3RvcmVcbn1cbmlzLnJzU3RvcmVDbGFzcyA9IGZ1bmN0aW9uICggb2JqICkge1xuXHRyZXR1cm4gU3RvcmUuaXNQcm90b3R5cGVPZihvYmopIHx8IG9iaiA9PT0gU3RvcmVcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RvcmU7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1N0b3JlLmpzIiwiLypcbiAqIENvcHlyaWdodCAoYykgIDIwMTggV2lzZSBXaWxkIFdlYiAuXG4gKlxuICogIE1JVCBMaWNlbnNlXG4gKlxuICogIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqICBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiAgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqICBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqICBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqICBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcbiAqICBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqICBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiAgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiAgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiAgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiAgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcbiAqICBTT0ZUV0FSRS5cbiAqXG4gKiBAYXV0aG9yIDogTmF0aGFuYWVsIEJyYXVuXG4gKiBAY29udGFjdCA6IGNhaXBpbGFic0BnbWFpbC5jb21cbiAqL1xuXG4vL2ltcG9ydCBpbmRleCBmcm9tIFwiLi9pbmRleFwiOy8vIHdpbGwgdXNlIGFzIGV4dGVybmFsIHRoZSBpbmRleCBpbiBkaXN0XG5pbXBvcnQgaXMgZnJvbSBcImlzXCI7XG5cbi8qKlxuICogTWluaW1hbCBwdXNoIHNlcXVlbmNlciwgYXBwbHkgc3RvcmVzIHNwZWNpZmljIHRhc2sgaW4gdGhlIHJpZ2h0IG9yZGVyIChyb290IHN0b3Jlc1xuICogZmlyc3QpXG4gKi9cbmxldCB0YXNrUXVldWUgICAgICA9IFtdLFxuICAgIGN1cldlaWdodCAgICAgID0gMCxcbiAgICBtYXhXZWlnaHQgICAgICA9IDAsXG4gICAgbWluV2VpZ2h0ICAgICAgPSAwLFxuICAgIHRhc2tDb3VudCAgICAgID0gMCxcbiAgICBkZVN5bmMgICAgICAgICA9IGZhbHNlLFxuICAgIGRlU3luY01heFRhc2tzID0gMTAsXG4gICAgdGFzayxcbiAgICBpc1J1bm5pbmcsXG4gICAgZXJyb3JDYXRjaGVyICAgPSB7XG4gICAgICAgIGxhc3RFcnJvcjogbnVsbCxcbiAgICAgICAgZGlzcGF0Y2ggOiBmdW5jdGlvbiAoIGVycm9yICkge1xuICAgICAgICAgICAgZXJyb3JDYXRjaGVyLmRpc2FibGUoKTtcbiAgICAgICAgICAgIGlmICggdGFzayAmJiB0YXNrWyAwIF0uaGFuZGxlRXJyb3IgKSB7XG4gICAgICAgICAgICAgICAgdGFza1sgMCBdLmhhbmRsZUVycm9yKGVycm9yLCB0YXNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKCB0YXNrIClcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiUmVTY29wZSA6IEFuIGFwcGx5IHRhc2sgaGFzIGZhaWxlZCAhIVwiLCB0YXNrWyAxIF0sIFwiIG9uIFwiLCB0YXNrWyAwIF0ubmFtZSB8fCB0YXNrWyAwIF0uY29uc3RydWN0b3IubmFtZSlcbiAgICAgICAgXG4gICAgICAgICAgICBpc1J1bm5pbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIHRhc2sgICAgICA9IG51bGw7XG4gICAgICAgICAgICBydW5Ob3coKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW5hYmxlICAgOiAoIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnIClcbiAgICAgICAgICAgICAgICAgICA/ICgpID0+IHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCBlcnJvckNhdGNoZXIuZGlzcGF0Y2gpXG4gICAgICAgICAgICB9IDogKCkgPT4ge1xuICAgICAgICAgICAgICAgIHByb2Nlc3Mub24oJ3VuY2F1Z2h0RXhjZXB0aW9uJywgZXJyb3JDYXRjaGVyLmRpc3BhdGNoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIGRpc2FibGUgIDogKCB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyApXG4gICAgICAgICAgICAgICAgICAgPyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgZXJyb3JDYXRjaGVyLmRpc3BhdGNoKVxuICAgICAgICAgICAgfSA6ICgpID0+IHtcbiAgICAgICAgICAgICAgICBwcm9jZXNzLnJlbW92ZUxpc3RlbmVyKCd1bmNhdWdodEV4Y2VwdGlvbicsIGVycm9yQ2F0Y2hlci5kaXNwYXRjaCk7XG4gICAgICAgICAgICB9XG4gICAgfVxuO1xuXG5mdW5jdGlvbiBydW5Ob3coKSB7XG4gICAgaWYgKCAhaXNSdW5uaW5nICkge1xuICAgICAgICBydW4oKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJ1bigpIHtcbiAgICBsZXQgZnJvbSAgPSBEYXRlLm5vdygpO1xuICAgIGlzUnVubmluZyA9IHRydWU7XG4gICAgZXJyb3JDYXRjaGVyLmVuYWJsZSgpO1xuICAgIHdoaWxlICggdGFza0NvdW50ICkge1xuICAgICAgICBcbiAgICAgICAgLy8gdHJ5IGZvciB0aGUgY3VycmVudCB3ZWlnaHRcbiAgICAgICAgd2hpbGUgKCAhKCB0YXNrUXVldWVbIGN1cldlaWdodCBdICYmIHRhc2tRdWV1ZVsgY3VyV2VpZ2h0IF0ubGVuZ3RoICkgKVxuICAgICAgICAgICAgY3VyV2VpZ2h0Kys7XG4gICAgICAgIFxuICAgICAgICB0YXNrQ291bnQtLTtcbiAgICAgICAgdGFzayA9IHRhc2tRdWV1ZVsgY3VyV2VpZ2h0IF0uc2hpZnQoKTtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcIlRhc2sgOiBcIiwgdGFza1sxXSwgXCIgb24gXCIsIHRhc2tbMF0ubmFtZSk7XG4gICAgICAgIHRhc2tbIDAgXVsgdGFza1sgMSBdIF0uYXBwbHkodGFza1sgMCBdLCB0YXNrWyAyIF0pO1xuICAgIH1cbiAgICB0YXNrID0gdW5kZWZpbmVkO1xuICAgIGVycm9yQ2F0Y2hlci5kaXNhYmxlKCk7XG4gICAgXG4gICAgaXNSdW5uaW5nID0gZmFsc2U7XG4gICAgaWYgKCB0YXNrQ291bnQgKSB7XG4gICAgICAgIHNldFRpbWVvdXQocnVuTm93KTtcbiAgICB9XG59XG5cbi8vXG4vL2luZGV4LnNldFRhc2tEZVN5bmMgPSAoIG5iICkgPT4ge1xuLy8gICAgaWYgKCBuYiA9PT0gZmFsc2UgKVxuLy8gICAgICAgIHJldHVybiBkZVN5bmMgPSBmYWxzZTtcbi8vICAgIGVsc2UgaWYgKCBuYiA9PT0gdHJ1ZSApIHtcbi8vICAgICAgICBkZVN5bmMgICAgICAgICA9IHRydWU7XG4vLyAgICAgICAgZGVTeW5jTWF4VGFza3MgPSAxMDtcbi8vICAgIH1cbi8vICAgIGVsc2UgKGlzLmludChuYikpXG4vLyAgICB7XG4vLyAgICAgICAgZGVTeW5jICAgICAgICAgPSB0cnVlO1xuLy8gICAgICAgIGRlU3luY01heFRhc2tzID0gbmI7XG4vLyAgICB9XG4vL307XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBwdXNoVGFzayggb2JqLCBmbiwgYXJneiApIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBtb3JlIGEgc3RvcmUgaGF2ZSBzb3VyY2VzLCB0aGUgbW9yZSBpdCBzaG91bGQgYmUgcHJvY2Vzc2VkIGZpcnN0XG4gICAgICAgICAqIFNvIGxlYWZzIHN0b3JlcyBzdGF5IHN5bmMsIGFuZCByb290IHN0b3JlcyByZWNlaXZlIG1lcmdlZCBzdGF0ZSB1cGRhdGVzO1xuICAgICAgICAgKiBnbG9iYWwgc3RhdGUgc3RheSBjb2hlcmVudFxuICAgICAgICAgKlxuICAgICAgICAgKiBUaGlzIG1lYW4gd2hhdGV2ZXIgdGhlIG51bWJlciBvZiBzdG9yZXMgJiB0aGUgY29tcGxleGl0eSBvZiB0aGUgZGVwcyxcbiAgICAgICAgICogdXBkYXRpbmcgYSBzdG9yZSBzdGF0ZSB3aWxsIHVwZGF0ZSBpdHMgc3luY2hyb25lIGNoaWxkIHN0b3JlcyBpbW1lZGlhdGVseVxuICAgICAgICAgKlxuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSB7KnxudW1iZXJ9XG4gICAgICAgICAqL1xuICAgICAgICBsZXQgd2VpZ2h0ID0gb2JqLl9zb3VyY2VzICYmIG9iai5fc291cmNlcy5sZW5ndGggfHwgMSxcbiAgICAgICAgICAgIHN0YWNrICA9IHRhc2tRdWV1ZVsgd2VpZ2h0IF0gPVxuICAgICAgICAgICAgICAgIHRhc2tRdWV1ZVsgd2VpZ2h0IF0gfHwgW107XG4gICAgICAgIFxuICAgICAgICBtYXhXZWlnaHQgPSBNYXRoLm1heChtYXhXZWlnaHQsIHdlaWdodCk7XG4gICAgICAgIGN1cldlaWdodCA9IE1hdGgubWluKGN1cldlaWdodCwgd2VpZ2h0KTtcbiAgICAgICAgdGFza0NvdW50Kys7XG4gICAgICAgIFxuICAgICAgICAvL2NvbnNvbGUubG9nKFwiUHVzaCBUYXNrIDogXCIsIGZuLCBcIiBvbiBcIiwgb2JqLm5hbWUsIHdlaWdodCk7XG4gICAgICAgIHN0YWNrLnB1c2goWyBvYmosIGZuLCBhcmd6IF0pO1xuICAgICAgICBzZXRUaW1lb3V0KHJ1bk5vdywgMCk7XG4gICAgICAgIHJldHVybiBzdGFjay5sZW5ndGg7XG4gICAgfVxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbHMvVGFza1NlcXVlbmNlci5qcyIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpICAyMDE4IFdpc2UgV2lsZCBXZWIgLlxuICpcbiAqICBNSVQgTGljZW5zZVxuICpcbiAqICBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiAgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqICB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiAgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiAgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiAgVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG4gKiAgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqICBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG4gKiAgU09GVFdBUkUuXG4gKlxuICogQGF1dGhvciA6IE5hdGhhbmFlbCBCcmF1blxuICogQGNvbnRhY3QgOiBjYWlwaWxhYnNAZ21haWwuY29tXG4gKi9cblxuaW1wb3J0IGlzICAgIGZyb20gJ2lzJ1xuXG5jb25zdCBTaW1wbGVPYmplY3RQcm90byA9ICgge30gKS5jb25zdHJ1Y3RvcjtcblxubGV0IHNjb3BhYmxlcyA9IFtdO1xuXG5mdW5jdGlvbiBhZGRTY29wYWJsZVR5cGUoIHRlc3QsIGhhbmRsZSwgbWVtYmVyID0gZmFsc2UsIHN0YXRlU2NvcGUgPSBmYWxzZSApIHtcbiAgICBzY29wYWJsZXMucHVzaChcbiAgICAgICAge1xuICAgICAgICAgICAgdGVzdCxcbiAgICAgICAgICAgIG1lbWJlcixcbiAgICAgICAgICAgIHN0YXRlU2NvcGUsXG4gICAgICAgICAgICBoYW5kbGVcbiAgICAgICAgfVxuICAgIClcbn1cblxuLy9cbmZ1bmN0aW9uIGlzU2NvcGFibGVUeXBlKCBDb21wLCBtZW1iZXIsIHN0YXRlU2NvcGUgKSB7XG4gICAgXG4gICAgZm9yICggbGV0IGkgPSAwOyBpIDwgc2NvcGFibGVzLmxlbmd0aDsgaSsrIClcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgKCBtZW1iZXIgPT09IHVuZGVmaW5lZCB8fCBtZW1iZXIgPT0gc2NvcGFibGVzWyBpIF0ubWVtYmVyIClcbiAgICAgICAgICAgICYmIHN0YXRlU2NvcGUgPT0gc2NvcGFibGVzWyBpIF0uc3RhdGVTY29wZVxuICAgICAgICAgICAgJiYgc2NvcGFibGVzWyBpIF0udGVzdChDb21wKVxuICAgICAgICApXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICBcbiAgICByZXR1cm4gZmFsc2U7XG4gICAgXG59XG5cbmZ1bmN0aW9uIGFwcGx5U2NvcGFibGVUeXBlKCBDb21wLCBhcmd6LCBtZW1iZXIsIHN0YXRlU2NvcGUgKSB7XG4gICAgXG4gICAgZm9yICggbGV0IGkgPSAwOyBpIDwgc2NvcGFibGVzLmxlbmd0aDsgaSsrIClcbiAgICAgICAgaWYgKCBtZW1iZXIgPT0gc2NvcGFibGVzWyBpIF0ubWVtYmVyICYmIHN0YXRlU2NvcGUgPT0gc2NvcGFibGVzWyBpIF0uc3RhdGVTY29wZSAmJiBzY29wYWJsZXNbIGkgXS50ZXN0KENvbXApIClcbiAgICAgICAgICAgIHJldHVybiBzY29wYWJsZXNbIGkgXS5oYW5kbGUoQ29tcCwgLi4uYXJneik7XG4gICAgXG4gICAgY29uc29sZS53YXJuKFwicmVTY29wZSA6IFVua25vd24gdHlwZVwiLCBDb21wKVxuICAgIFxuICAgIHJldHVybiBmYWxzZTtcbiAgICBcbn1cblxuZnVuY3Rpb24gcmVTY29wZSggLi4uYXJneiApIHtcbiAgICAvLyBhcmUgd2UgZGVjb3JhdGluZyBhIG1lbWJlciAvIHdpdGhvdXQgYXJnelxuICAgIGlmICggYXJnelsgMCBdIGluc3RhbmNlb2YgU2ltcGxlT2JqZWN0UHJvdG8gJiYgYXJnelsgMiBdIGluc3RhbmNlb2YgU2ltcGxlT2JqZWN0UHJvdG8gJiYgYXJnelsgMCBdLmhhc093blByb3BlcnR5KGFyZ3pbIDEgXSkgKSB7XG4gICAgICAgIGFyZ3pbIDIgXS52YWx1ZSA9IGFwcGx5U2NvcGFibGVUeXBlKGFyZ3pbIDAgXSwgW10sIHRydWUsIGZhbHNlKTtcbiAgICAgICAgcmV0dXJuIGFyZ3pbIDAgXTtcbiAgICB9XG4gICAgZWxzZSBpZiAoICFpc1Njb3BhYmxlVHlwZShhcmd6WyAwIF0sIHVuZGVmaW5lZCwgZmFsc2UpICkge1xuICAgICAgICByZXR1cm4gKCAuLi5hcmd6MiApID0+IHtcbiAgICAgICAgICAgIC8vIGFyZSB3ZSBkZWNvcmF0aW5nIGEgbWVtYmVyIC8gd2l0aCBhcmd6XG4gICAgICAgICAgICBpZiAoIGFyZ3oyWyAwIF0gaW5zdGFuY2VvZiBTaW1wbGVPYmplY3RQcm90byAmJiBhcmd6MlsgMiBdIGluc3RhbmNlb2YgU2ltcGxlT2JqZWN0UHJvdG8gJiYgYXJnejJbIDAgXS5oYXNPd25Qcm9wZXJ0eShhcmd6MlsgMSBdKSApIHtcbiAgICAgICAgICAgICAgICBhcmd6MlsgMiBdLnZhbHVlID0gYXBwbHlTY29wYWJsZVR5cGUoYXJnejJbIDAgXSwgYXJneiwgdHJ1ZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIHJldHVybiBhcmd6MlsgMCBdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHJldHVybiByZVNjb3BlKGFyZ3oyWyAwIF0sIC4uLmFyZ3opO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBhcHBseVNjb3BhYmxlVHlwZShhcmd6WyAwIF0sIGFyZ3ouc2xpY2UoMSksIGZhbHNlLCBmYWxzZSk7XG59XG5cbmZ1bmN0aW9uIHNjb3BlVG9TdGF0ZSggLi4uYXJneiApIHtcbiAgICAvLyBhcmUgd2UgZGVjb3JhdGluZyBhIG1lbWJlciAvIHdpdGhvdXQgYXJnelxuICAgIGlmICggYXJnelsgMCBdIGluc3RhbmNlb2YgU2ltcGxlT2JqZWN0UHJvdG8gJiYgYXJnelsgMiBdIGluc3RhbmNlb2YgU2ltcGxlT2JqZWN0UHJvdG8gJiYgYXJnelsgMCBdLmhhc093blByb3BlcnR5KGFyZ3pbIDEgXSkgKSB7XG4gICAgICAgIGFyZ3pbIDIgXS52YWx1ZSA9IGFwcGx5U2NvcGFibGVUeXBlKGFyZ3pbIDAgXSwgW10sIHRydWUsIHRydWUpO1xuICAgICAgICByZXR1cm4gYXJnelsgMCBdO1xuICAgIH1cbiAgICBlbHNlIGlmICggIWlzU2NvcGFibGVUeXBlKGFyZ3pbIDAgXSwgdW5kZWZpbmVkLCB0cnVlKSApIHtcbiAgICAgICAgcmV0dXJuICggLi4uYXJnejIgKSA9PiB7XG4gICAgICAgICAgICAvLyBhcmUgd2UgZGVjb3JhdGluZyBhIG1lbWJlciAvIHdpdGggYXJnelxuICAgICAgICAgICAgaWYgKCBhcmd6MlsgMCBdIGluc3RhbmNlb2YgU2ltcGxlT2JqZWN0UHJvdG8gJiYgYXJnejJbIDIgXSBpbnN0YW5jZW9mIFNpbXBsZU9iamVjdFByb3RvICYmIGFyZ3oyWyAwIF0uaGFzT3duUHJvcGVydHkoYXJnejJbIDEgXSkgKSB7XG4gICAgICAgICAgICAgICAgYXJnejJbIDIgXS52YWx1ZSA9IGFwcGx5U2NvcGFibGVUeXBlKGFyZ3oyWyAwIF0sIGFyZ3osIHRydWUsIHRydWUpO1xuICAgICAgICAgICAgICAgIHJldHVybiBhcmd6MlsgMCBdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHJldHVybiBzY29wZVRvU3RhdGUoYXJnejJbIDAgXSwgLi4uYXJneik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGFwcGx5U2NvcGFibGVUeXBlKGFyZ3pbIDAgXSwgYXJnei5zbGljZSgxKSwgZmFsc2UsIHRydWUpO1xufVxuXG4vL1xuLy9hZGRTY29wYWJsZVR5cGUoXG4vLyAgICAoIENvbXAgKSA9PiAoQ29tcCAmJiBDb21wLnByb3RvdHlwZSBpbnN0YW5jZW9mIFN0b3JlKSxcbi8vICAgIGZ1bmN0aW9uIHJlU2NvcGUoIC4uLmFyZ3ogKSB7XG4vLyAgICAgICAgbGV0IEJhc2VTdG9yZSAgICA9ICghYXJnelswXSB8fCBhcmd6WzBdLnByb3RvdHlwZSBpbnN0YW5jZW9mIFN0b3JlKSAmJlxuLy8gYXJnei5zaGlmdCgpLCBzY29wZSAgICAgICAgPSAoIWFyZ3pbMF0gfHwgYXJnelswXSBpbnN0YW5jZW9mIFNjb3BlIHx8IGlzLmZuKGFyZ3pbMF0pKVxuLy8gJiYgYXJnei5zaGlmdCgpLCB1c2UgICAgICAgICAgPSAoaXMuYXJyYXkoYXJnelswXSkpICYmIGFyZ3ouc2hpZnQoKSwgc3RhdGVNYXAgICAgID1cbi8vICF1c2UgJiYgKCFhcmd6WzBdIHx8IGFyZ3pbMF0gaW5zdGFuY2VvZiBTaW1wbGVPYmplY3RQcm90bykgJiYgYXJnei5zaGlmdCgpLFxuLy8gaW5pdGlhbFN0YXRlID0ge307ICBsZXQgY29tcE5hbWUgPSBCYXNlU3RvcmUuZGlzcGxheU5hbWUgfHwgQmFzZVN0b3JlLm5hbWU7ICB1c2UgPVxuLy8gWy4uLihCYXNlU3RvcmUudXNlIHx8IFtdKSwgLi4uKHVzZSB8fCBbXSldOyBzdGF0ZU1hcCAmJlxuLy8gU2NvcGUuc3RhdGVNYXBUb1JlZkxpc3Qoc3RhdGVNYXAsIGluaXRpYWxTdGF0ZSwgdXNlKTsgIGNsYXNzIFN0YXRlU2NvcGVkU3RvcmUgZXh0ZW5kc1xuLy8gQmFzZVN0b3JlIHsgc3RhdGljIHVzZSAgICAgICAgID0gdXNlOyBzdGF0aWMgZGlzcGxheU5hbWUgPSBcInN0YXRlU2NvcGVkKFwiICsgY29tcE5hbWUgK1xuLy8gXCIpXCI7ICBjb25zdHJ1Y3RvciggLi4uYXJneiApIHsgc3VwZXIoc2NvcGUsIGFyZ3ouc2xpY2UoYXJnelswXSBpbnN0YW5jZW9mIFNjb3BlID8gMSA6XG4vLyAwKSkgfSB9ICByZXR1cm4gU3RhdGVTY29wZWRTdG9yZTsgfSwgZmFsc2UsIHRydWUgKVxuXG5cbmV4cG9ydCB7XG4gICAgYWRkU2NvcGFibGVUeXBlLFxuICAgIHJlU2NvcGUsXG4gICAgc2NvcGVUb1N0YXRlXG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlscy9zY29wYWJsZS5qcyJdLCJzb3VyY2VSb290IjoiIn0=