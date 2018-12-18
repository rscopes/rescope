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
	
				var ctx = this._._scope;
	
				output = output || {};
				Object.keys(ctx).forEach(function (id) {
					if (id == "$parent") return;
					if (!output.hasOwnProperty(id) && !is.fn(ctx[id]) && (!storesRevMap || storesRevMap.hasOwnProperty(id) && storesRevMap[id] === undefined || storesRevMap.hasOwnProperty(id) && ctx[id]._rev > storesRevMap[id].rev)) {
	
						updated = true;
						output[id] = _this10.data[id];
	
						if (storesRevMap && storesRevMap.hasOwnProperty(id)) {
							storesRevMap[id] = storesRevMap[id] || { rev: 0, refs: [] };
							storesRevMap[id].rev = ctx[id]._rev;
							storesRevMap[id].refs.forEach(function (ref) {
								//console.warn("update ref ", ref.ref,
								// this.retrieve(ref.path));
								output[ref.alias] = _this10.retrieve(ref.path);
							});
						} else if (!output.hasOwnProperty(id)) {
							// avoid empty or not initialized store results to be replaced by inherited with same name
							output[id] = undefined;
						} else {
							//console.warn("update ", id, this.data[id]);
							output[id] = _this10.data[id];
						}
					}
				});
				updated = this._._mixed.reduceRight(function (updated, ctx) {
					return ctx.getUpdates(storesRevMap, output, updated) || updated;
				}, updated);
				updated = this.parent && this.parent.getUpdates(storesRevMap, output, updated) || updated;
				return updated && output;
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
						_key = key.match(/([\w_]+)((?:\.[\w_]+)*)(?:\:([\w_]+))?/);
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
				_key = key.match(/([\w_]+)((?:\.[\w_]+)*)(?:\:([\w_]+))?/);
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
					key = key.match(/([\w_]+)((?:\.[\w_]+)*)(?:\:([\w_]+))?/);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMGRmN2Y0OTk3NTU2YWU1Nzk0MzgiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9TY29wZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvaXMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaXNcIiIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL0VtaXR0ZXIuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic2hvcnRpZFwiIiwid2VicGFjazovLy8uL3NyYy9TdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvVGFza1NlcXVlbmNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvc2NvcGFibGUuanMiXSwibmFtZXMiOlsiJGdsb2JhbCIsIndpbmRvdyIsImdsb2JhbCIsIlJTIiwiX19fcmVzY29wZSIsImNvbnNvbGUiLCJ3YXJuIiwiU3RvcmUiLCJTY29wZSIsIkNvbnRleHQiLCJyZVNjb3BlIiwic2NvcGVUb1N0YXRlIiwicmVTY29wZVN0YXRlIiwiYWRkU2NvcGFibGVUeXBlIiwic2NvcGVSZWYiLCJtYXAiLCJrZXkiLCJyZXF1aXJlIiwid2Fsa25TZXQiLCJ3YWxrbkdldCIsImtleVdhbGtuU2V0Iiwia2V5V2Fsa25HZXQiLCJFdmVudEVtaXR0ZXIiLCJzaG9ydGlkIiwiX19wcm90b19fcHVzaCIsInRhcmdldCIsImlkIiwicGFyZW50IiwiZm4iLCJwcm90b3R5cGUiLCJfIiwib3BlblNjb3BlcyIsIlNpbXBsZU9iamVjdFByb3RvIiwiY29uc3RydWN0b3IiLCJzY29wZXMiLCJza2V5IiwiaXMiLCJhcnJheSIsInNvcnQiLCJhIiwiYiIsImZpcnN0bmFtZSIsImpvaW4iLCJzbSIsInN0YXRlIiwiX3JlZnMiLCJhY3Rpb25zIiwicGF0aCIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwiY3BhdGgiLCJwdXNoIiwiRnVuY3Rpb24iLCJhcyIsInN0b3Jlc01hcCIsInVwcGVyU2NvcGUiLCJzbmFwc2hvdCIsImRhdGEiLCJpbmNyZW1lbnRJZCIsInBlcnNpc3RlbmNlVG0iLCJhdXRvRGVzdHJveSIsInJvb3RFbWl0dGVyIiwiYm91bmRlZEFjdGlvbnMiLCJrZXlQSUQiLCJfaWQiLCJnZW5lcmF0ZSIsImJhc2VJZCIsImtleUluZGV4IiwiaXNMb2NhbElkIiwicmVnaXN0ZXIiLCJpIiwiX3JldiIsInN0b3JlcyIsIl9hdXRvRGVzdHJveSIsImRlYWQiLCJFcnJvciIsInNvdXJjZXMiLCJjaGlsZFNjb3BlcyIsImNoaWxkU2NvcGVzTGlzdCIsInVuU3RhYmxlQ2hpbGRzIiwic2VlbkNoaWxkcyIsIl9fcmV0YWlucyIsImFsbCIsIl9fbG9ja3MiLCJfYm91bmRlZEFjdGlvbnMiLCJ0ZXN0IiwiaW5jbHVkZXMiLCJiaW5kIiwiX2xpc3RlbmluZyIsIl9zY29wZSIsIl9taXhlZCIsIl9taXhlZExpc3QiLCJmb2xsb3dlcnMiLCJyZXRhaW4iLCJfc3RhYmxlIiwid2FpdCIsIm9uIiwiX3BhcmVudExpc3QiLCJyZWxlYXNlIiwiX3Byb3BhZyIsIl9hZGRDaGlsZCIsInJlc3RvcmUiLCJzZXRUaW1lb3V0IiwiZGlzcG9zZSIsInN0b3Jlc0xpc3QiLCJfbW91bnQiLCJrIiwiYXJndW1lbnRzIiwicmVmIiwic25hcCIsInBhcnNlUmVmIiwic3RvcmVJZCIsInJlZHVjZVJpZ2h0IiwibW91bnRlZCIsImN0eCIsInN0b3JlIiwidGFza1F1ZXVlIiwicnNTdG9yZUNsYXNzIiwibmFtZSIsImxlbmd0aCIsInNoaWZ0IiwicnNTY29wZUNsYXNzIiwiJHBhcmVudCIsIm1vdW50Iiwic2xpY2UiLCJyc1N0b3JlIiwidW5kZWZpbmVkIiwic2V0U3RhdGUiLCJfd2F0Y2hTdG9yZSIsImlzU3RhYmxlIiwicHJvcGFnIiwidGFyZ2V0Q3R4IiwibGlzdHMiLCJyZWxpbmsiLCJfX29yaWdpbiIsInNpbmdsZXRvbiIsInNyY0N0eCIsImV4dGVybmFsIiwiZm9yY2UiLCJsY3R4IiwiaW5mbyIsInRtcCIsImRlc3Ryb3kiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJnZXQiLCJzZXQiLCJ2IiwiYWN0aXZlQWN0aW9ucyIsInJzU2NvcGUiLCJhY3QiLCJoYXNPd25Qcm9wZXJ0eSIsIl9fdGFyZ2V0U3RvcmVzIiwiZGlzcGF0Y2giLCJvYmoiLCJzZXRJbml0aWFsIiwicmV2TWFwIiwibGFzdFJldnMiLCJyZWZLZXlzIiwic3RyaW5nIiwicmVkdWNlIiwicmV2cyIsInJldiIsInJlZnMiLCJyZXRhaW5TdG9yZXMiLCJnZXRVcGRhdGVzIiwiZGlzcG9zZVN0b3JlcyIsInNwbGljZSIsInRvIiwicmVmTGlzdCIsIm1peGVkQ1dVbm1vdW50IiwidW5Nb3VudEtleSIsImlzUmVhY3RDb21wb25lbnQiLCJ1bkJpbmQiLCJhbGlhcyIsInJldHJpZXZlIiwic3BsaXQiLCJyZXRyaWV2ZVN0b3JlIiwic3RvcmVzUmV2TWFwIiwibG9jYWwiLCJ1cGRhdGVkIiwiZ2V0U3RvcmVzUmV2cyIsIm91dHB1dCIsImNoaWxkcyIsIl9nZXRBbGxDaGlsZHMiLCJjZmciLCJwYXJlbnRBbGlhcyIsInNpZCIsInNlcmlhbGl6ZV9leCIsImV4Y2x1ZGUiLCJ3aXRoQ2hpbGRzIiwid2l0aFBhcmVudHMiLCJ3aXRoTWl4ZWQiLCJub3JlZnMiLCJhbGlhc2VzIiwic2VyaWFsaXplIiwid2l0aENoaWxkIiwiaCIsImJvb2wiLCJ0YWtlU25hcHNob3RCeUtleSIsInN0YXJ0c1dpdGgiLCJzdWJzdHIiLCJnZXRTbmFwc2hvdEJ5S2V5IiwiZGVsZXRlU25hcHNob3RCeUtleSIsInJlcGxhY2UiLCJwU3RhdGUiLCJfcmVmIiwiYWN0aW9uIiwiYXJneiIsInN0YWNrIiwiYkFjdHMiLCJ0cmlnZ2VyIiwiY2IiLCJvbmNlIiwicmVhc29uIiwiZW1pdCIsImVycm9yIiwic3RhYmlsaXplclRNIiwiY2xlYXJUaW1lb3V0IiwicHJvcGFnVE0iLCJyZW1hcHMiLCJ3YXNTdGFibGUiLCJpbmRleE9mIiwidW4iLCJkZXN0cm95VE0iLCJyZW1vdmVMaXN0ZW5lciIsImZvbGxvd2VyIiwiX3JtQ2hpbGQiLCJpc1Byb3RvdHlwZU9mIiwidmFsdWUiLCJpc0tleSIsImZpbHRlciIsIkVtaXR0ZXIiLCJfZXZlbnRzIiwiZXZ0IiwiVGFza1NlcXVlbmNlciIsIm9ialByb3RvIiwiZ2V0UHJvdG90eXBlT2YiLCJfc3RhdGljIiwic2NvcGUiLCJnZXRTY29wZSIsInN0YXRpY1Njb3BlIiwid2F0Y2hzIiwidXNlIiwiYXBwbHkiLCJpbml0aWFsU3RhdGUiLCJkZWZhdWx0U3RhdGUiLCJhcHBsaWVkIiwiX3VpZCIsIl9vblN0YWJpbGl6ZSIsIl9wZXJzaXN0ZW5jZVRtIiwiX2NmZyIsInNjb3BlT2JqIiwiJHNjb3BlIiwiJHN0b3JlcyIsIiRhY3Rpb25zIiwiJGRpc3BhdGNoIiwiX3JldnMiLCJfcmVxdWlyZSIsIl9zb3VyY2VzIiwiX3VzZSIsIm1hdGNoIiwicmVmMiIsIl9mb2xsb3dlcnMiLCJfY2hhbmdlc1NXIiwiX2FmdGVyQ29uc3RydWN0b3IiLCJpbml0aWFsRGF0YSIsInNob3VsZEFwcGx5IiwibWFuYWdlZCIsIm5EYXRhcyIsInIiLCJjRGF0YXMiLCJpc0NvbXBsZXRlIiwiZm9sbG93IiwiY2FsbCIsImNoYW5nZXMiLCJyZWZpbmUiLCJfX3Byb3RvX18iLCJfc3RhYmlsaXplciIsInB1c2hUYXNrIiwibnMiLCJkb1dhaXQiLCJvcmlnaW4iLCJpbml0aWFsT3V0cHV0cyIsInMiLCJoYXNEYXRhQ2hhbmdlIiwic3RhYmxlIiwibmV4dFN0YXRlIiwiX25leHRTdGF0ZSIsIm5leHREYXRhIiwic3luYyIsImNoYW5nZSIsInB1c2hTdGF0ZSIsInN0YWJpbGl6ZSIsInNJZCIsIl9rZXkiLCJkZWZhdWx0TmFtZSIsIm51bWJlciIsImltbWVkaWF0ZSIsInRoZW4iLCJwcmV2aW91cyIsIm1lIiwic2hvdWxkUHJvcGFnIiwiX2Rlc3Ryb3lUTSIsInJlbW92ZUFsbExpc3RlbmVycyIsImNTdG9yZSIsInRhcmdldFJldnMiLCJ0YXJnZXRTY29wZSIsIm8iLCJjdXJXZWlnaHQiLCJtYXhXZWlnaHQiLCJtaW5XZWlnaHQiLCJ0YXNrQ291bnQiLCJkZVN5bmMiLCJkZVN5bmNNYXhUYXNrcyIsInRhc2siLCJpc1J1bm5pbmciLCJlcnJvckNhdGNoZXIiLCJsYXN0RXJyb3IiLCJkaXNhYmxlIiwiaGFuZGxlRXJyb3IiLCJydW5Ob3ciLCJlbmFibGUiLCJhZGRFdmVudExpc3RlbmVyIiwicHJvY2VzcyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJydW4iLCJmcm9tIiwiRGF0ZSIsIm5vdyIsIndlaWdodCIsIk1hdGgiLCJtYXgiLCJtaW4iLCJzY29wYWJsZXMiLCJoYW5kbGUiLCJtZW1iZXIiLCJzdGF0ZVNjb3BlIiwiaXNTY29wYWJsZVR5cGUiLCJDb21wIiwiYXBwbHlTY29wYWJsZVR5cGUiLCJhcmd6MiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNUQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUEvQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTJCQSxLQUFJQSxVQUFZLE9BQU9DLE1BQVAsS0FBa0IsV0FBcEIsR0FBb0NBLE1BQXBDLEdBQTZDQyxNQUEzRDs7QUFNQSxLQUFNQyxLQUFLSCxRQUFRSSxVQUFSLElBQXNCLEVBQWpDO0FBQ0EsS0FBS0osUUFBUUksVUFBYixFQUEwQjtBQUN0QkMsYUFBUUMsSUFBUixDQUFhLCtEQUFiO0FBQ0gsRUFGRCxNQUdLOztBQUVETixhQUFRSSxVQUFSLEdBQXFCRCxFQUFyQjtBQUNBLHFC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LENBQWxCLEVBQTZCLEVBQTdCLEVBQWlDLElBQWpDLEVBQXVDLElBQXZDLENBQWxCO0FBQ0EsZ0JBQU9BLEtBQU0sQ0FBTixDQUFQO0FBQ0gsTUFIRCxNQUlLLElBQUssQ0FBQ2tJLGVBQWVsSSxLQUFNLENBQU4sQ0FBZixFQUEwQm5GLFNBQTFCLEVBQXFDLElBQXJDLENBQU4sRUFBbUQ7QUFDcEQsZ0JBQU8sWUFBZ0I7QUFBQSxnREFBWHdOLEtBQVc7QUFBWEEsc0JBQVc7QUFBQTs7QUFDbkI7QUFDQSxpQkFBS0EsTUFBTyxDQUFQLGFBQXNCdlQsaUJBQXRCLElBQTJDdVQsTUFBTyxDQUFQLGFBQXNCdlQsaUJBQWpFLElBQXNGdVQsTUFBTyxDQUFQLEVBQVc5TCxjQUFYLENBQTBCOEwsTUFBTyxDQUFQLENBQTFCLENBQTNGLEVBQW1JO0FBQy9IQSx1QkFBTyxDQUFQLEVBQVdoSCxLQUFYLEdBQW1CK0csa0JBQWtCQyxNQUFPLENBQVAsQ0FBbEIsRUFBOEJySSxJQUE5QixFQUFvQyxJQUFwQyxFQUEwQyxJQUExQyxDQUFuQjtBQUNBLHdCQUFPcUksTUFBTyxDQUFQLENBQVA7QUFDSCxjQUhELE1BS0ksT0FBTzVVLCtCQUFhNFUsTUFBTyxDQUFQLENBQWIsU0FBNEJySSxJQUE1QixFQUFQO0FBQ1AsVUFSRDtBQVNIO0FBQ0QsWUFBT29JLGtCQUFrQnBJLEtBQU0sQ0FBTixDQUFsQixFQUE2QkEsS0FBS3JGLEtBQUwsQ0FBVyxDQUFYLENBQTdCLEVBQTRDLEtBQTVDLEVBQW1ELElBQW5ELENBQVA7QUFDSDs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7U0FJSWhILGUsR0FBQUEsZTtTQUNBSCxPLEdBQUFBLE87U0FDQUMsWSxHQUFBQSxZIiwiZmlsZSI6Ii4uLy4uL2Rpc3QvUmVTY29wZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAwZGY3ZjQ5OTc1NTZhZTU3OTQzOCIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpICAyMDE4IFdpc2UgV2lsZCBXZWIgLlxuICpcbiAqICBNSVQgTGljZW5zZVxuICpcbiAqICBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiAgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqICB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiAgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiAgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiAgVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG4gKiAgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqICBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG4gKiAgU09GVFdBUkUuXG4gKlxuICogQGF1dGhvciA6IE5hdGhhbmFlbCBCcmF1blxuICogQGNvbnRhY3QgOiBjYWlwaWxhYnNAZ21haWwuY29tXG4gKi9cblxubGV0ICRnbG9iYWwgPSAoIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICkgPyB3aW5kb3cgOiBnbG9iYWw7XG5cbmltcG9ydCBTY29wZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSBcIi4vU2NvcGVcIjtcbmltcG9ydCBTdG9yZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSBcIi4vU3RvcmVcIjtcbmltcG9ydCB7IGFkZFNjb3BhYmxlVHlwZSwgcmVTY29wZSwgc2NvcGVUb1N0YXRlIH0gZnJvbSBcIi4vdXRpbHMvc2NvcGFibGVcIjtcblxuY29uc3QgUlMgPSAkZ2xvYmFsLl9fX3Jlc2NvcGUgfHwge307XG5pZiAoICRnbG9iYWwuX19fcmVzY29wZSApIHtcbiAgICBjb25zb2xlLndhcm4oXCJSZVNjb3BlIGlzIGRlZmluZWQgbXVsdGlwbGUgdGltZXMgISEgXFxuQ2hlY2sgeW91J3JlIHBhY2thZ2luZ1wiKVxufVxuZWxzZSB7XG4gICAgXG4gICAgJGdsb2JhbC5fX19yZXNjb3BlID0gUlM7XG4gICAgU2NvcGUuU3RvcmUgICAgICAgID0gU3RvcmU7XG4gICAgLy9SUy5jb25zb2xlICAgICAgICAgPSBjb25zb2xlO1xuICAgIFJTLlNjb3BlICAgICAgICAgICA9IFNjb3BlO1xuICAgIFJTLkNvbnRleHQgICAgICAgICA9IFNjb3BlO1xuICAgIFJTLlN0b3JlICAgICAgICAgICA9IFN0b3JlO1xuICAgIFJTLnJlU2NvcGUgICAgICAgICA9IHJlU2NvcGU7XG4gICAgUlMuc2NvcGVUb1N0YXRlICAgID0gc2NvcGVUb1N0YXRlO1xuICAgIFJTLnJlU2NvcGVTdGF0ZSAgICA9IHNjb3BlVG9TdGF0ZTtcbiAgICBSUy5hZGRTY29wYWJsZVR5cGUgPSBhZGRTY29wYWJsZVR5cGU7XG4gICAgUlMuc2NvcGVSZWYgICAgICAgID1cbiAgICAgICAgZnVuY3Rpb24gc2NvcGVSZWYoIG1hcCwga2V5ICkge1xuICAgICAgICAgICAgbWFwWyBrZXkgXSA9IG5ldyBTY29wZS5zY29wZVJlZihtYXBbIGtleSBdKTtcbiAgICAgICAgICAgIHJldHVybiBtYXA7XG4gICAgICAgIH07XG4gICAgXG59XG5leHBvcnQgZGVmYXVsdCBSUztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXguanMiLCIvKlxuICogQ29weXJpZ2h0IChjKSAgMjAxOCBXaXNlIFdpbGQgV2ViIC5cbiAqXG4gKiAgTUlUIExpY2Vuc2VcbiAqXG4gKiAgUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqICBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiAgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuICogIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqICBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqICBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqICBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiAgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqICBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuICogIFNPRlRXQVJFLlxuICpcbiAqIEBhdXRob3IgOiBOYXRoYW5hZWwgQnJhdW5cbiAqIEBjb250YWN0IDogY2FpcGlsYWJzQGdtYWlsLmNvbVxuICovXG5cblxudmFyIGlzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vdXRpbHMvaXMnKSxcbiAgICB7IHdhbGtuU2V0LCB3YWxrbkdldCwga2V5V2Fsa25TZXQsIGtleVdhbGtuR2V0IH0gPSByZXF1aXJlKCcuL3V0aWxzL3V0aWxzJyksXG4gICAgRXZlbnRFbWl0dGVyICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi91dGlscy9FbWl0dGVyJyksXG4gICAgc2hvcnRpZCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnc2hvcnRpZCcpXG5cdCwgX19wcm90b19fcHVzaCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA9ICggdGFyZ2V0LCBpZCwgcGFyZW50ICkgPT4ge1xuXHQgICAgbGV0IGZuICAgICAgID0gZnVuY3Rpb24gKCkge1xuXHQgICAgfTtcblx0ICAgIGZuLnByb3RvdHlwZSA9IHBhcmVudCA/IG5ldyBwYXJlbnQuX1tpZF0oKSA6IHRhcmdldFtpZF0gfHwge307XG5cdCAgICB0YXJnZXRbaWRdICAgPSBuZXcgZm4oKTtcblx0ICAgIHRhcmdldC5fW2lkXSA9IGZuO1xuICAgIH0sXG5cdG9wZW5TY29wZXMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA9IHt9LFxuXHRTaW1wbGVPYmplY3RQcm90byAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSAoe30pLmNvbnN0cnVjdG9yO1xuXG4vKipcbiAqIEJhc2UgU2NvcGUgb2JqZWN0XG4gKi9cbmNsYXNzIFNjb3BlIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcblx0c3RhdGljIGdldFNjb3BlKCBzY29wZXMgKSB7XG5cdFx0bGV0IHNrZXkgPSBpcy5hcnJheShzY29wZXMpID8gc2NvcGVzLnNvcnQoKCBhLCBiICkgPT4ge1xuXHRcdFx0aWYgKCBhLmZpcnN0bmFtZSA8IGIuZmlyc3RuYW1lICkgcmV0dXJuIC0xO1xuXHRcdFx0aWYgKCBhLmZpcnN0bmFtZSA+IGIuZmlyc3RuYW1lICkgcmV0dXJuIDE7XG5cdFx0XHRyZXR1cm4gMDtcblx0XHR9KS5qb2luKCcrJykgOiBzY29wZXM7XG5cdFx0cmV0dXJuIG9wZW5TY29wZXNbc2tleV0gPSBvcGVuU2NvcGVzW3NrZXldIHx8IG5ldyBTY29wZSh7fSwgeyBpZDogc2tleSB9KTtcblx0fTtcblx0XG5cdFxuXHQvKipcblx0ICogZ2V0IGEgcGFyc2VkIHJlZmVyZW5jZSBsaXN0IGZyb20gc3RhdGVNYXBcblx0ICogQHBhcmFtIF9yZWZcblx0ICogQHJldHVybnMge3tzdG9yZUlkLCBwYXRoLCBhbGlhczogKiwgcmVmOiAqfX1cblx0ICovXG5cdHN0YXRpYyBzdGF0ZU1hcFRvUmVmTGlzdCggc20sIHN0YXRlID0ge30sIF9yZWZzID0gW10sIGFjdGlvbnMgPSB7fSwgcGF0aCA9IFwiXCIgKSB7XG5cdFx0T2JqZWN0LmtleXMoc20pLmZvckVhY2goXG5cdFx0XHRrZXkgPT4ge1xuXHRcdFx0XHRsZXQgY3BhdGggPSBwYXRoID8gcGF0aCArICcuJyArIGtleSA6IGtleTtcblx0XHRcdFx0c21ba2V5XSBpbnN0YW5jZW9mIFNjb3BlLnNjb3BlUmVmXG5cdFx0XHRcdD8gX3JlZnMucHVzaChzbVtrZXldLnBhdGggKyAnOicgKyBjcGF0aClcblx0XHRcdFx0OiAoc21ba2V5XSAmJiBzbVtrZXldIGluc3RhbmNlb2YgRnVuY3Rpb24pXG5cdFx0XHRcdCAgPyBhY3Rpb25zW2tleV0gPSBzbVtrZXldXG5cdFx0XHRcdCAgOiAoc21ba2V5XSAmJiBzbVtrZXldLnByb3RvdHlwZSBpbnN0YW5jZW9mIFNjb3BlLlN0b3JlKVxuXHRcdFx0XHQgICAgPyBfcmVmcy5wdXNoKHNtW2tleV0uYXMoY3BhdGgpKVxuXHRcdFx0XHQgICAgOiBzdGF0ZVtjcGF0aF0gPSBzbVtrZXldXG5cdFx0XHRcdC8vOiB0aGlzLnN0YXRlTWFwVG9SZWZMaXN0KHNtW2tleV0sIF9yZWZzLCBwYXRoICsgJy4nICsga2V5KVxuXHRcdFx0fVxuXHRcdClcblx0XHRyZXR1cm4gX3JlZnM7XG5cdH1cblx0XG5cdHN0YXRpYyBwZXJzaXN0ZW5jZVRtID0gMTsvLyBpZiA+IDAsIHdpbGwgd2FpdCAncGVyc2lzdGVuY2VUbScgbXMgYmVmb3JlIGRlc3Ryb3lcblx0Ly8gd2hlblxuXHQvLyBkaXNwb3NlIHJlYWNoIDBcblx0c3RhdGljIFN0b3JlICAgID0gbnVsbDtcblx0c3RhdGljIHNjb3BlUmVmID0gZnVuY3Rpb24gc2NvcGVSZWYoIHBhdGggKSB7XG5cdFx0dGhpcy5wYXRoID0gcGF0aDtcblx0fTtcblx0c3RhdGljIHNjb3BlcyAgID0gb3BlblNjb3BlczsvLyBhbGwgYWN0aXZlIHNjb3Blc1xuXHRcblx0XG5cdC8qKlxuXHQgKiBJbml0IGEgUmVTY29wZSBzY29wZVxuXHQgKlxuXHQgKiBAcGFyYW0gc3RvcmVzTWFwIHtPYmplY3R9IE9iamVjdCB3aXRoIHRoZSBpbml0aWFsIHN0b3JlcyBkZWZpbml0aW9uIC8gaW5zdGFuY2VzXG5cdCAqIEBwYXJhbSBjb25maWcge09iamVjdH0gU2NvcGUgY29uZmlnXG5cdCAqIHtcblx0ICogIHBhcmVudCB7c2NvcGV9IEBvcHRpb25hbCBwYXJlbnQgc2NvcGVcblx0ICpcblx0ICogIGlkIHtzdHJpbmd9IEBvcHRpb25hbCBpZCAoIGlmIHRoaXMgaWQgZXhpc3Qgc3RvcmVzTWFwIHdpbGwgYmUgbWVyZ2Ugb24gdGhlICdpZCdcblx0ICogICAgIHNjb3BlKSBrZXkge3N0cmluZ30gQG9wdGlvbmFsIGtleSBvZiB0aGUgc2NvcGUgKCBpZiBubyBpZCBpcyBzZXQsIHRoZSBzY29wZSBpZFxuXHQgKiAgICAgd2lsbCBiZSAocGFyZW50LmlkKyc+JytrZXkpIGluY3JlbWVudElkIHtib29sfSBAb3B0aW9uYWwgdHJ1ZSB0byBhZGQgYSBzdWZmaXhcblx0ICogICAgIGlkLCBpZiB0aGUgcHJvdmlkZWQga2V5IG9yIGlkIGdsb2JhbGx5IGV4aXN0XG5cdCAqXG5cdCAqICBzdGF0ZSB7T2JqZWN0fSBAb3B0aW9uYWwgaW5pdGlhbCBzdGF0ZSBieSBzdG9yZSBhbGlhc1xuXHQgKiAgZGF0YSB7T2JqZWN0fSBAb3B0aW9uYWwgaW5pdGlhbCBkYXRhIGJ5IHN0b3JlIGFsaWFzXG5cdCAqXG5cdCAqICByb290RW1pdHRlciB7Ym9vbH0gQG9wdGlvbmFsIHRydWUgdG8gbm90IGJlaW5nIGRlc3RhYmlsaXplZCBieSBwYXJlbnRcblx0ICogIGJvdW5kZWRBY3Rpb25zIHthcnJheSB8IHJlZ2V4cH0gQG9wdGlvbmFsIGxpc3Qgb3IgcmVnZXhwIG9mIGFjdGlvbnMgbm90XG5cdCAqICAgICBwcm9wYWdhdGVkIHRvIHRoZSBwYXJlbnRcblx0ICpcblx0ICogIHBlcnNpc3RlbmNlVG0ge251bWJlcikgaWYgPiAwLCB3aWxsIHdhaXQgJ3BlcnNpc3RlbmNlVG0nIG1zIGJlZm9yZSBkZXN0cm95IHdoZW5cblx0ICogICAgIGRpc3Bvc2UgcmVhY2ggMCBhdXRvRGVzdHJveSAge2Jvb2x9IHdpbGwgdHJpZ2dlciByZXRhaW4gJiBkaXNwb3NlIGFmdGVyIHN0YXJ0XG5cdCAqICB9XG5cdCAqIEByZXR1cm5zIHtTY29wZX1cblx0ICovXG5cdGNvbnN0cnVjdG9yKCBzdG9yZXNNYXAsIHsgcGFyZW50LCB1cHBlclNjb3BlLCBrZXksIGlkLCBzbmFwc2hvdCwgc3RhdGUsIGRhdGEsIGluY3JlbWVudElkID0gISFrZXksIHBlcnNpc3RlbmNlVG0sIGF1dG9EZXN0cm95LCByb290RW1pdHRlciwgYm91bmRlZEFjdGlvbnMgfSA9IHt9ICkge1xuXHRcdHN1cGVyKCk7XG5cdFx0dmFyIF8gPSB7XG5cdFx0XHRrZXlQSUQ6ICh1cHBlclNjb3BlICYmIHVwcGVyU2NvcGUuX2lkIHx8IHBhcmVudCAmJiBwYXJlbnQuX2lkIHx8IHNob3J0aWQuZ2VuZXJhdGUoKSksXG5cdFx0XHRrZXksXG5cdFx0XHRpbmNyZW1lbnRJZCxcblx0XHRcdGJhc2VJZDogaWRcblx0XHR9LCBrZXlJbmRleDtcblx0XHRcblx0XHRpZCA9IGlkIHx8IGtleSAmJiAoXy5rZXlQSUQgKyAnPicgKyBrZXkpO1xuXHRcdFxuXHRcdF8uaXNMb2NhbElkID0gIWlkO1xuXHRcdFxuXHRcdC8vaWYgKCBwYXJlbnQgJiYga2V5ICkge1xuXHRcdC8vICAgIGtleUluZGV4ID0gcGFyZW50Ll8uY2hpbGRTY29wZXMuZmluZChjdHg9PihjdHguX2lkPT1pZCkpO1xuXHRcdC8vICAgIGlmICgga2V5SW5kZXggPT0gLTEgKSBrZXlJbmRleCA9IHBhcmVudC5fLnNlZW5DaGlsZHM7XG5cdFx0Ly8gICAga2V5SW5kZXgrKztcblx0XHQvLyAgICBpZiAoIGtleUluZGV4IClcblx0XHQvLyAgICAgICAgaWQgPSBpZCArICdbJyArIGtleUluZGV4ICsgJ10nO1xuXHRcdC8vfVxuXHRcdFxuXHRcdGlkID0gaWQgfHwgKFwiX19fX19cIiArIHNob3J0aWQuZ2VuZXJhdGUoKSk7XG5cdFx0XG5cdFx0XG5cdFx0aWYgKCBvcGVuU2NvcGVzW2lkXSAmJiAhaW5jcmVtZW50SWQgKSB7Ly8gb3ZlcndyaXRlIGV4aXN0aW5nIHNjb3BlXG5cdFx0XHR0aGlzLl9pZCA9IGlkO1xuXHRcdFx0b3BlblNjb3Blc1tpZF0ucmVnaXN0ZXIoc3RvcmVzTWFwKTtcblx0XHRcdHJldHVybiBvcGVuU2NvcGVzW2lkXVxuXHRcdH1cblx0XHRlbHNlIGlmICggb3BlblNjb3Blc1tpZF0gJiYgaW5jcmVtZW50SWQgKSB7Ly8gZ2VuZXJhdGUga2V5IGlkXG5cdFx0XHRsZXQgaSA9IC0xO1xuXHRcdFx0d2hpbGUgKCBvcGVuU2NvcGVzW2lkICsgJ1snICsgKCsraSkgKyAnXSddICkgO1xuXHRcdFx0aWQgPSBpZCArICdbJyArIGkgKyAnXSc7XG5cdFx0fVxuXHRcdFxuXHRcdHRoaXMuX2lkICAgICAgICA9IGlkO1xuXHRcdHRoaXMuX3JldiAgICAgICA9IDA7XG5cdFx0b3BlblNjb3Blc1tpZF0gID0gdGhpcztcblx0XHRfLnBlcnNpc3RlbmNlVG0gPSBwZXJzaXN0ZW5jZVRtIHx8IHRoaXMuY29uc3RydWN0b3IucGVyc2lzdGVuY2VUbTtcblx0XHRcblx0XHR0aGlzLmFjdGlvbnMgPSB7fTtcblx0XHR0aGlzLnN0b3JlcyAgPSB7fTtcblx0XHR0aGlzLnN0YXRlICAgPSB7fTtcblx0XHR0aGlzLmRhdGEgICAgPSB7fTtcblx0XHRcblx0XHR0aGlzLnBhcmVudCAgICAgICA9IHBhcmVudDtcblx0XHR0aGlzLl8gICAgICAgICAgICA9IF87XG5cdFx0dGhpcy5fYXV0b0Rlc3Ryb3kgPSBhdXRvRGVzdHJveTtcblx0XHRcblx0XHRpZiAoIHBhcmVudCAmJiBwYXJlbnQuZGVhZCApXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDYW4ndCB1c2UgYSBkZWFkIHNjb3BlIGFzIHBhcmVudCAhXCIpO1xuXHRcdFxuXHRcdF9fcHJvdG9fX3B1c2godGhpcywgJ2FjdGlvbnMnLCBwYXJlbnQpO1xuXHRcdF9fcHJvdG9fX3B1c2godGhpcywgJ3N0b3JlcycsIHBhcmVudCk7XG5cdFx0X19wcm90b19fcHVzaCh0aGlzLCAnc3RhdGUnLCBwYXJlbnQpO1xuXHRcdF9fcHJvdG9fX3B1c2godGhpcywgJ2RhdGEnLCBwYXJlbnQpO1xuXHRcdFxuXHRcdHRoaXMuc291cmNlcyAgICAgID0gW107XG5cdFx0Xy5jaGlsZFNjb3BlcyAgICAgPSBbXTtcblx0XHRfLmNoaWxkU2NvcGVzTGlzdCA9IFtdO1xuXHRcdF8udW5TdGFibGVDaGlsZHMgID0gMDtcblx0XHRfLnNlZW5DaGlsZHMgICAgICA9IDA7XG5cdFx0XG5cdFx0dGhpcy5fX3JldGFpbnMgPSB7IGFsbDogMCB9O1xuXHRcdHRoaXMuX19sb2NrcyAgID0geyBhbGw6IDEgfTtcblx0XHRcblx0XHQvL18uc25hcHNob3QgICAgICAgID0gc25hcHNob3Q7XG5cdFx0Ly9fLnNuYXBzaG90ICAgICAgICA9IHNuYXBzaG90O1xuXHRcdF8uX2JvdW5kZWRBY3Rpb25zID0gaXMuYXJyYXkoYm91bmRlZEFjdGlvbnMpXG5cdFx0ICAgICAgICAgICAgICAgICAgICA/IHsgdGVzdDogYm91bmRlZEFjdGlvbnMuaW5jbHVkZXMuYmluZChib3VuZGVkQWN0aW9ucykgfVxuXHRcdCAgICAgICAgICAgICAgICAgICAgOiBib3VuZGVkQWN0aW9ucztcblx0XHRfLl9saXN0ZW5pbmcgICAgICA9IHt9O1xuXHRcdF8uX3Njb3BlICAgICAgICAgID0ge307XG5cdFx0Xy5fbWl4ZWQgICAgICAgICAgPSBbXTtcblx0XHRfLl9taXhlZExpc3QgICAgICA9IFtdO1xuXHRcdF8uZm9sbG93ZXJzICAgICAgID0gW107XG5cdFx0aWYgKCBwYXJlbnQgKSB7XG5cdFx0XHRwYXJlbnQucmV0YWluKFwiaXNNeVBhcmVudFwiKTtcblx0XHRcdGlmICggIXJvb3RFbWl0dGVyICkge1xuXHRcdFx0XHQhcGFyZW50Ll9zdGFibGUgJiYgdGhpcy53YWl0KFwid2FpdGluZ1BhcmVudFwiKTtcblx0XHRcdFx0cGFyZW50Lm9uKF8uX3BhcmVudExpc3QgPSB7XG5cdFx0XHRcdFx0J3N0YWJsZScgIDogcyA9PiB0aGlzLnJlbGVhc2UoXCJ3YWl0aW5nUGFyZW50XCIpLFxuXHRcdFx0XHRcdCd1bnN0YWJsZSc6IHMgPT4gdGhpcy53YWl0KFwid2FpdGluZ1BhcmVudFwiKSxcblx0XHRcdFx0XHQndXBkYXRlJyAgOiBzID0+IHRoaXMuX3Byb3BhZygpXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdHBhcmVudC5vbihfLl9wYXJlbnRMaXN0ID0ge1xuXHRcdFx0XHRcdCd1cGRhdGUnOiBzID0+IHRoaXMuX3Byb3BhZygpXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdFx0Ly8gdGhpcy5yZWdpc3RlcihwYXJlbnQuX19zY29wZSwgc3RhdGUsIGRhdGEpO1xuXHRcdH1cblx0XHRcblx0XHRcblx0XHR0aGlzLnJlZ2lzdGVyKHN0b3Jlc01hcCwgc3RhdGUsIGRhdGEpO1xuXHRcdHRoaXMuX19sb2Nrcy5hbGwtLTtcblx0XHR0aGlzLl9zdGFibGUgPSAhdGhpcy5fX2xvY2tzLmFsbDtcblx0XHRcblx0XHRpZiAoIHBhcmVudCApIHtcblx0XHRcdHBhcmVudC5fYWRkQ2hpbGQodGhpcyk7XG5cdFx0fVxuXHRcdFxuXHRcdHRoaXMucmVzdG9yZShzbmFwc2hvdCk7XG5cdFx0XG5cdFx0aWYgKCBhdXRvRGVzdHJveSApXG5cdFx0XHRzZXRUaW1lb3V0KFxuXHRcdFx0XHR0bSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5yZXRhaW4oXCJhdXRvRGVzdHJveVwiKTtcblx0XHRcdFx0XHR0aGlzLmRpc3Bvc2UoXCJhdXRvRGVzdHJveVwiKTtcblx0XHRcdFx0fVxuXHRcdFx0KVxuXHRcdFxuXHR9XG5cdFxuXHQvKipcblx0ICpcblx0ICogTW91bnQgdGhlIHN0b3JlcyBpbiBzdG9yZXNMaXN0LCBpbiB0aGlzIHNjb3BlIG9yIGluIGl0cyBwYXJlbnRzIG9yIG1peGVkIHNjb3Blc1xuXHQgKlxuXHQgKiBAcGFyYW0gc3RvcmVzTGlzdCB7c3RyaW5nfHN0b3JlUmVmfSBTdG9yZSBuYW1lLCBBcnJheSBvZiBTdG9yZSBuYW1lcywgb3IgUmVzY29wZVxuXHQgKiAgICAgc3RvcmUgcmVmIGZyb20gU3RvcmU6OmFzIG9yIFN0b3JlOmFzXG5cdCAqIEBwYXJhbSBzdGF0ZVxuXHQgKiBAcGFyYW0gZGF0YVxuXHQgKiBAcmV0dXJucyB7U2NvcGV9XG5cdCAqL1xuXHRtb3VudCggc3RvcmVzTGlzdCwgc25hcHNob3QsIHN0YXRlLCBkYXRhICkge1xuXHRcdGlmICggaXMuYXJyYXkoc3RvcmVzTGlzdCkgKSB7XG5cdFx0XHRzdG9yZXNMaXN0LmZvckVhY2goayA9PiB0aGlzLl9tb3VudChrLCBzbmFwc2hvdCwgc3RhdGUsIGRhdGEpKTtcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHR0aGlzLl9tb3VudCguLi5hcmd1bWVudHMpO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXHRcblx0X21vdW50KCBpZCwgc25hcHNob3QsIHN0YXRlLCBkYXRhICkge1xuXHRcdGxldCByZWYsIHNuYXA7XG5cdFx0XG5cdFx0cmVmID0gdGhpcy5wYXJzZVJlZihpZClcblx0XHRcblx0XHRpZiAoIGlkID09IFwiJHBhcmVudFwiICkgcmV0dXJuO1xuXHRcdGlmICggIXRoaXMuXy5fc2NvcGVbcmVmLnN0b3JlSWRdICkgey8vYXNrIG1peGVkIHx8IHBhcmVudFxuXHRcdFx0aWYgKCB0aGlzLl8uX21peGVkLnJlZHVjZVJpZ2h0KCggbW91bnRlZCwgY3R4ICkgPT4gKG1vdW50ZWQgfHwgY3R4Ll9tb3VudChpZCwgc25hcHNob3QsIHN0YXRlLCBkYXRhKSksIGZhbHNlKSB8fFxuXHRcdFx0XHQhdGhpcy5wYXJlbnQgKVxuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHRyZXR1cm4gdGhpcy5wYXJlbnQuX21vdW50KC4uLmFyZ3VtZW50cyk7XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0bGV0IHN0b3JlID0gdGhpcy5fLl9zY29wZVtyZWYuc3RvcmVJZF0sIHRhc2tRdWV1ZSA9IFtdO1xuXHRcdFx0aWYgKCBpcy5yc1N0b3JlQ2xhc3Moc3RvcmUpICkge1xuXHRcdFx0XHR0aGlzLl8uX3Njb3BlW3JlZi5zdG9yZUlkXSA9IG5ldyBzdG9yZSh0aGlzLCB7XG5cdFx0XHRcdFx0Ly9zbmFwc2hvdCxcblx0XHRcdFx0XHRuYW1lOiByZWYuc3RvcmVJZCxcblx0XHRcdFx0XHRzdGF0ZSxcblx0XHRcdFx0XHRkYXRhXG5cdFx0XHRcdH0sIHRhc2tRdWV1ZSk7XG5cdFx0XHRcdHdoaWxlICggdGFza1F1ZXVlLmxlbmd0aCApIHRhc2tRdWV1ZS5zaGlmdCgpKCk7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIGlmICggaXMucnNTY29wZUNsYXNzKHN0b3JlKSApIHtcblx0XHRcdFx0c3RvcmUgPSB0aGlzLl8uX3Njb3BlW3JlZi5zdG9yZUlkXSA9IG5ldyBzdG9yZSh7ICRwYXJlbnQ6IHRoaXMgfSwge1xuXHRcdFx0XHRcdGtleSAgICAgICAgOiByZWYuc3RvcmVJZCxcblx0XHRcdFx0XHRpbmNyZW1lbnRJZDogdHJ1ZSxcblx0XHRcdFx0XHR1cHBlclNjb3BlIDogdGhpc1xuXHRcdFx0XHRcdC8vYXV0b0Rlc3Ryb3k6IHRydWVcblx0XHRcdFx0XHQvL3BhcmVudDogdGhpc1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0Ly90aGlzLl8uX3Njb3BlWyByZWYuc3RvcmVJZCBdLnJldGFpbihcInNjb3BlZENoaWxkU2NvcGVcIik7XG5cdFx0XHRcdC8vdGhpcy5fd2F0Y2hTdG9yZShyZWYuc3RvcmVJZCk7XG5cdFx0XHRcdGlmICggcmVmLnBhdGgubGVuZ3RoID4gMSApXG5cdFx0XHRcdFx0dGhpcy5fLl9zY29wZVtyZWYuc3RvcmVJZF0ubW91bnQocmVmLnBhdGguc2xpY2UoMSkuam9pbignLicpLCBzbmFwc2hvdCwgc3RhdGUsIGRhdGEpXG5cdFx0XHRcdC8vZWxzZSByZXR1cm4gdGhpcy5fLl9zY29wZVsgcmVmLnN0b3JlSWQgXTtcblx0XHRcdH1cblx0XHRcdGlmICggaXMucnNTdG9yZShzdG9yZSkgKSB7XG5cdFx0XHRcdGlmICggc3RhdGUgIT09IHVuZGVmaW5lZCAmJiBkYXRhID09PSB1bmRlZmluZWQgKVxuXHRcdFx0XHRcdHN0b3JlLnNldFN0YXRlKHN0YXRlKTtcblx0XHRcdFx0ZWxzZSBpZiAoIHN0YXRlICE9PSB1bmRlZmluZWQgKVxuXHRcdFx0XHRcdHN0b3JlLnN0YXRlID0gc3RhdGU7XG5cdFx0XHRcdFxuXHRcdFx0XHRpZiAoIGRhdGEgIT09IHVuZGVmaW5lZCApXG5cdFx0XHRcdFx0c3RvcmUucHVzaChkYXRhKTtcblx0XHRcdH1cblx0XHRcdHRoaXMuX3dhdGNoU3RvcmUocmVmLnN0b3JlSWQpO1xuXHRcdH1cblx0XHRcblx0XHRcblx0XHRyZXR1cm4gdGhpcy5fLl9zY29wZVtyZWYuc3RvcmVJZF07XG5cdH1cblx0XG5cdF93YXRjaFN0b3JlKCBpZCwgc3RhdGUsIGRhdGEgKSB7XG5cdFx0aWYgKCAhdGhpcy5fLl9saXN0ZW5pbmdbaWRdICYmICFpcy5mbih0aGlzLl8uX3Njb3BlW2lkXSkgKSB7XG5cdFx0XHQvL2lmICggaXMucnNTdG9yZSh0aGlzLl8uX3Njb3BlWyBpZCBdKSApIHtcblx0XHRcdCF0aGlzLl8uX3Njb3BlW2lkXS5fYXV0b0Rlc3Ryb3kgJiYgdGhpcy5fLl9zY29wZVtpZF0ucmV0YWluKFwic2NvcGVkXCIpO1xuXHRcdFx0IXRoaXMuXy5fc2NvcGVbaWRdLmlzU3RhYmxlKCkgJiYgdGhpcy53YWl0KGlkKTtcblx0XHRcdHRoaXMuXy5fc2NvcGVbaWRdLm9uKFxuXHRcdFx0XHR0aGlzLl8uX2xpc3RlbmluZ1tpZF0gPSB7XG5cdFx0XHRcdFx0J2Rlc3Ryb3knIDogcyA9PiB7XG5cdFx0XHRcdFx0XHRkZWxldGUgdGhpcy5fLl9saXN0ZW5pbmdbaWRdO1xuXHRcdFx0XHRcdFx0dGhpcy5fLl9zY29wZVtpZF0gPSB0aGlzLl8uX3Njb3BlW2lkXS5jb25zdHJ1Y3Rvcjtcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdCd1cGRhdGUnICA6IHMgPT4gdGhpcy5wcm9wYWcoKSxcblx0XHRcdFx0XHQnc3RhYmxlJyAgOiBzID0+IHRoaXMucmVsZWFzZShpZCksXG5cdFx0XHRcdFx0J3Vuc3RhYmxlJzogcyA9PiB0aGlzLndhaXQoaWQpXG5cdFx0XHRcdH0pO1xuXHRcdH1cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXHRcblx0LyoqXG5cdCAqIE1peCB0YXJnZXRDdHggb24gdGhpcyBzY29wZVxuXHQgKiBNaXhlZCBzY29wZSBwYXJlbnRzIGFyZSBOT1QgbWFwcGVkXG5cdCAqIEBwYXJhbSB0YXJnZXRDdHhcblx0ICovXG5cdG1peGluKCB0YXJnZXRDdHggKSB7XG5cdFx0bGV0IHBhcmVudCA9IHRoaXMucGFyZW50LCBsaXN0cztcblx0XHRcblx0XHR0aGlzLl8uX21peGVkLnB1c2godGFyZ2V0Q3R4KVxuXHRcdHRhcmdldEN0eC5yZXRhaW4oXCJtaXhlZFRvXCIpO1xuXHRcdGlmICggIXRhcmdldEN0eC5fc3RhYmxlIClcblx0XHRcdHRoaXMud2FpdCh0YXJnZXRDdHguX2lkKTtcblx0XHR0aGlzLl8uX21peGVkTGlzdC5wdXNoKGxpc3RzID0ge1xuXHRcdFx0J3N0YWJsZScgIDogcyA9PiB0aGlzLnJlbGVhc2UodGFyZ2V0Q3R4Ll9pZCksXG5cdFx0XHQndW5zdGFibGUnOiBzID0+IHRoaXMud2FpdCh0YXJnZXRDdHguX2lkKSxcblx0XHRcdCd1cGRhdGUnICA6IHMgPT4gdGhpcy5fcHJvcGFnKClcblx0XHR9KTtcblx0XHRcblx0XHQvL3RoaXMuYWN0aW9ucyA9IHt9O1xuXHRcdC8vdGhpcy5zdG9yZXMgID0ge307XG5cdFx0Ly90aGlzLnN0YXRlICAgPSB7fTtcblx0XHQvL3RoaXMuZGF0YSAgICA9IHt9O1xuXHRcdHRhcmdldEN0eC5vbihsaXN0cyk7XG5cdFx0XG5cdFx0Ly8gcmVzZXQgcHJvdG9zXG5cdFx0Ly8gcHVzaCBuZXcgcHJvdG8gd2l0aCBwYXJlbnRcblx0XHRfX3Byb3RvX19wdXNoKHRoaXMsICdhY3Rpb25zJywgcGFyZW50KTtcblx0XHRfX3Byb3RvX19wdXNoKHRoaXMsICdzdG9yZXMnLCBwYXJlbnQpO1xuXHRcdF9fcHJvdG9fX3B1c2godGhpcywgJ3N0YXRlJywgcGFyZW50KTtcblx0XHRfX3Byb3RvX19wdXNoKHRoaXMsICdkYXRhJywgcGFyZW50KTtcblx0XHQvLyBwcmludCBsb2NhbHogYWNjZXNzb3JzXG5cdFx0dGhpcy5yZWxpbmsodGhpcy5fLl9zY29wZSwgdGhpcywgZmFsc2UsIHRydWUpO1xuXHRcdFxuXHRcdHRoaXMuXy5fbWl4ZWQuZm9yRWFjaChcblx0XHRcdGN0eCA9PiB7XG5cdFx0XHRcdC8vIHB1c2ggcHJvdG9zXG5cdFx0XHRcdF9fcHJvdG9fX3B1c2godGhpcywgJ2FjdGlvbnMnKTtcblx0XHRcdFx0X19wcm90b19fcHVzaCh0aGlzLCAnc3RvcmVzJyk7XG5cdFx0XHRcdF9fcHJvdG9fX3B1c2godGhpcywgJ3N0YXRlJyk7XG5cdFx0XHRcdF9fcHJvdG9fX3B1c2godGhpcywgJ2RhdGEnKTtcblx0XHRcdFx0dGhpcy5zdG9yZXMuX19vcmlnaW4gPSBcIm1peGVkIFwiICsgY3R4Ll9pZDtcblx0XHRcdFx0Ly8gd3JpdGUgbWl4ZWQgYWNjZXNzb3JzXG5cdFx0XHRcdGN0eC5yZWxpbmsoY3R4Ll8uX3Njb3BlLCB0aGlzLCB0cnVlLCB0cnVlKVxuXHRcdFx0fVxuXHRcdClcblx0fVxuXHRcblx0LyoqXG5cdCAqIFJlZ2lzdGVyIHN0b3JlcyBpbiBzdG9yZXNNYXAgJiBsaW5rIHRoZW0gaW4gdGhlIHByb3Rvc1xuXHQgKiBAcGFyYW0gc3RvcmVzTWFwXG5cdCAqIEBwYXJhbSBzdGF0ZVxuXHQgKiBAcGFyYW0gZGF0YVxuXHQgKi9cblx0cmVnaXN0ZXIoIHN0b3Jlc01hcCwgc3RhdGUgPSB7fSwgZGF0YSA9IHt9ICkge1xuXHRcdHRoaXMucmVsaW5rKHN0b3Jlc01hcCwgdGhpcywgZmFsc2UsIGZhbHNlKTtcblx0XHRPYmplY3Qua2V5cyhzdG9yZXNNYXApLmZvckVhY2goXG5cdFx0XHRpZCA9PiB7XG5cdFx0XHRcdGlmICggaWQgPT0gXCIkcGFyZW50XCIgKSByZXR1cm47XG5cdFx0XHRcdGlmICggc3RvcmVzTWFwW2lkXS5zaW5nbGV0b24gfHwgKGlzLmZuKHN0b3Jlc01hcFtpZF0pICYmIChzdGF0ZVtpZF0gfHwgZGF0YVtpZF0pKSApIHtcblx0XHRcdFx0XHR0aGlzLl9tb3VudChpZCwgdW5kZWZpbmVkLCBzdGF0ZVtpZF0sIGRhdGFbaWRdKVxuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2UgaWYgKCBzdGF0ZVtpZF0gfHwgZGF0YVtpZF0gKSB7XG5cdFx0XHRcdFx0aWYgKCBkYXRhW2lkXSApIHtcblx0XHRcdFx0XHRcdGlmICggc3RhdGVbaWRdIClcblx0XHRcdFx0XHRcdFx0dGhpcy5zdG9yZXNbaWRdLnN0YXRlID0gc3RhdGVbaWRdO1xuXHRcdFx0XHRcdFx0dGhpcy5zdG9yZXNbaWRdLnB1c2goZGF0YVtpZF0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRlbHNlIGlmICggc3RhdGVbaWRdICkge1xuXHRcdFx0XHRcdFx0dGhpcy5zdG9yZXNbaWRdLnNldFN0YXRlKHN0YXRlW2lkXSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMuX3dhdGNoU3RvcmUoaWQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0KVxuXHRcdFxuXHR9XG5cdFxuXHQvKipcblx0ICogTWFwIHNyY0N0eCBzdG9yZSdzIG9uIHRhcmdldEN0eCBoZWFkZXJzIHByb3RvJ3Ncblx0ICogQHBhcmFtIHNyY0N0eFxuXHQgKiBAcGFyYW0gdGFyZ2V0Q3R4XG5cdCAqIEBwYXJhbSBzdGF0ZVxuXHQgKiBAcGFyYW0gZGF0YVxuXHQgKi9cblx0cmVsaW5rKCBzcmNDdHgsIHRhcmdldEN0eCA9IHRoaXMsIGV4dGVybmFsLCBmb3JjZSApIHtcblx0XHRsZXQgbGN0eCA9IHRhcmdldEN0eC5fLnN0b3Jlcy5wcm90b3R5cGU7XG5cdFx0T2JqZWN0LmtleXMoc3JjQ3R4KVxuXHRcdCAgICAgIC5mb3JFYWNoKFxuXHRcdFx0ICAgICAgaWQgPT4ge1xuXHRcdFx0XHQgICAgICBpZiAoICFmb3JjZSAmJiB0YXJnZXRDdHguXy5fc2NvcGVbaWRdID09PSBzcmNDdHhbaWRdIHx8XG5cdFx0XHRcdFx0ICAgICAgdGFyZ2V0Q3R4Ll8uX3Njb3BlW2lkXSAmJiAodGFyZ2V0Q3R4Ll8uX3Njb3BlW2lkXS5jb25zdHJ1Y3RvciA9PT0gc3JjQ3R4W2lkXSkgKVxuXHRcdFx0XHRcdCAgICAgIHJldHVybjtcblx0XHRcdFx0XG5cdFx0XHRcdCAgICAgIGlmICggIWZvcmNlICYmIHRhcmdldEN0eC5fLl9zY29wZVtpZF0gKSB7XG5cdFx0XHRcdFx0ICAgICAgaWYgKCAhZXh0ZXJuYWwgJiYgIWlzLmZuKHRhcmdldEN0eC5fLl9zY29wZVtpZF0pICkge1xuXHRcdFx0XHRcdFx0ICAgICAgY29uc29sZS5pbmZvKFwiUmVzY29wZSBTdG9yZSA6IFwiLCBpZCwgXCIgYWxyZWFkeSBleGlzdCBpbiB0aGlzIHNjb3BlICEgKCBIb3Qgc3dpdGNoaW5nIHRoZSBzdG9yZSApXCIpO1xuXHRcdFx0XHRcdFx0ICAgICAgbGV0IHRtcCAgICAgICAgICAgICAgICA9IHRhcmdldEN0eC5fLl9zY29wZVtpZF07XG5cdFx0XHRcdFx0XHQgICAgICB0YXJnZXRDdHguXy5fc2NvcGVbaWRdID0gdGFyZ2V0Q3R4Ll8uX3Njb3BlW2lkXS5jb25zdHJ1Y3Rvcjtcblx0XHRcdFx0XHRcdCAgICAgIHRoaXMuX21vdW50KGlkLCBudWxsLCB0bXAuc3RhdGUpO1xuXHRcdFx0XHRcdFx0ICAgICAgdG1wLmRlc3Ryb3koKTtcblx0XHRcdFx0XHRcdCAgICAgIC8vdGFyZ2V0Q3R4Ll8uX3Njb3BlWyBpZCBdLl9fcHJvdG9fXyA9IHRtcC5fX3Byb3RvX187XG5cdFx0XHRcdFx0ICAgICAgfVxuXHRcdFx0XHRcdCAgICAgIGlmICggIWV4dGVybmFsICYmIGlzLmZuKHRhcmdldEN0eC5fLl9zY29wZVtpZF0pIClcblx0XHRcdFx0XHRcdCAgICAgIHRhcmdldEN0eC5fLl9zY29wZVtpZF0gPSBzcmNDdHhbaWRdO1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdCAgICAgIHJldHVybjtcblx0XHRcdFx0ICAgICAgfVxuXHRcdFx0XHQgICAgICBlbHNlIGlmICggIWZvcmNlICYmICFleHRlcm5hbCApXG5cdFx0XHRcdFx0ICAgICAgdGhpcy5fLl9zY29wZVtpZF0gPSBzcmNDdHhbaWRdO1xuXHRcdFx0XHRcblx0XHRcdFx0ICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFxuXHRcdFx0XHRcdCAgICAgIGxjdHgsXG5cdFx0XHRcdFx0ICAgICAgaWQsXG5cdFx0XHRcdFx0ICAgICAge1xuXHRcdFx0XHRcdFx0ICAgICAgZW51bWVyYWJsZSAgOiB0cnVlLFxuXHRcdFx0XHRcdFx0ICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuXHRcdFx0XHRcdFx0ICAgICAgZ2V0ICAgICAgICAgOiAoKSA9PiB0aGlzLl8uX3Njb3BlW2lkXVxuXHRcdFx0XHRcdCAgICAgIH1cblx0XHRcdFx0ICAgICAgKTtcblx0XHRcdFx0ICAgICAgaWYgKCBpZCA9PSBcIiRwYXJlbnRcIiApIHJldHVybjtcblx0XHRcdFx0ICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFxuXHRcdFx0XHRcdCAgICAgIHRhcmdldEN0eC5fLnN0YXRlLnByb3RvdHlwZSxcblx0XHRcdFx0XHQgICAgICBpZCxcblx0XHRcdFx0XHQgICAgICB7XG5cdFx0XHRcdFx0XHQgICAgICBlbnVtZXJhYmxlICA6IHRydWUsXG5cdFx0XHRcdFx0XHQgICAgICBjb25maWd1cmFibGU6IHRydWUsXG5cdFx0XHRcdFx0XHQgICAgICBnZXQgICAgICAgICA6ICgpID0+ICh0aGlzLl8uX3Njb3BlW2lkXSAmJiB0aGlzLl8uX3Njb3BlW2lkXS5zdGF0ZSksXG5cdFx0XHRcdFx0XHQgICAgICBzZXQgICAgICAgICA6ICggdiApID0+ICh0aGlzLl9tb3VudChpZCwgdW5kZWZpbmVkLCB2KSlcblx0XHRcdFx0XHQgICAgICB9XG5cdFx0XHRcdCAgICAgICk7XG5cdFx0XHRcdCAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShcblx0XHRcdFx0XHQgICAgICB0YXJnZXRDdHguXy5kYXRhLnByb3RvdHlwZSxcblx0XHRcdFx0XHQgICAgICBpZCxcblx0XHRcdFx0XHQgICAgICB7XG5cdFx0XHRcdFx0XHQgICAgICBlbnVtZXJhYmxlICA6IHRydWUsXG5cdFx0XHRcdFx0XHQgICAgICBjb25maWd1cmFibGU6IHRydWUsXG5cdFx0XHRcdFx0XHQgICAgICBnZXQgICAgICAgICA6ICgpID0+ICh0aGlzLl8uX3Njb3BlW2lkXSAmJiB0aGlzLl8uX3Njb3BlW2lkXS5kYXRhKSxcblx0XHRcdFx0XHRcdCAgICAgIHNldCAgICAgICAgIDogKCB2ICkgPT4gKHRoaXMuX21vdW50KGlkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdikpXG5cdFx0XHRcdFx0ICAgICAgfVxuXHRcdFx0XHQgICAgICApO1xuXHRcdFx0XHRcblx0XHRcdFx0ICAgICAgbGV0IGFjdGlvbnMgICAgICAgPSBzcmNDdHhbaWRdIGluc3RhbmNlb2YgU2NvcGUuU3RvcmVcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICA/IHNyY0N0eFtpZF0uY29uc3RydWN0b3IuYWN0aW9uc1xuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgIDogc3JjQ3R4W2lkXS5hY3Rpb25zLFxuXHRcdFx0XHQgICAgICAgICAgYWN0aXZlQWN0aW9ucyA9IHRhcmdldEN0eC5fLmFjdGlvbnMucHJvdG90eXBlO1xuXHRcdFx0XHQgICAgICBpZiAoIGlzLnJzU2NvcGUodGhpcy5fLl9zY29wZVtpZF0ucHJvdG90eXBlKSApXG5cdFx0XHRcdFx0ICAgICAgdGhpcy5fbW91bnQoaWQpO1xuXHRcdFx0XHQgICAgICBpZiAoIGlzLnJzU2NvcGUodGhpcy5fLl9zY29wZVtpZF0pICkge1xuXHRcdFx0XHRcdCAgICAgIGFjdGl2ZUFjdGlvbnNbaWRdID0gdGhpcy5fLl9zY29wZVtpZF0uYWN0aW9ucztcblx0XHRcdFx0ICAgICAgfVxuXHRcdFx0XHQgICAgICBpZiAoICFpcy5yc1N0b3JlKHRoaXMuXy5fc2NvcGVbaWRdKSAmJiAhaXMucnNTdG9yZUNsYXNzKHRoaXMuXy5fc2NvcGVbaWRdKSApXG5cdFx0XHRcdFx0ICAgICAgcmV0dXJuO1xuXHRcdFx0XHRcblx0XHRcdFx0ICAgICAgYWN0aW9ucyAmJlxuXHRcdFx0XHQgICAgICBPYmplY3Qua2V5cyhhY3Rpb25zKVxuXHRcdFx0XHQgICAgICAgICAgICAuZm9yRWFjaChcblx0XHRcdFx0XHQgICAgICAgICAgICAoIGFjdCApID0+IHtcblx0XHRcdFx0XHRcdCAgICAgICAgICAgIGlmICggYWN0aXZlQWN0aW9ucy5oYXNPd25Qcm9wZXJ0eShhY3QpIClcblx0XHRcdFx0XHRcdFx0ICAgICAgICAgICAgYWN0aXZlQWN0aW9uc1thY3RdLl9fdGFyZ2V0U3RvcmVzKys7XG5cdFx0XHRcdFx0XHQgICAgICAgICAgICBlbHNlIHtcblx0XHRcdFx0XHRcdFx0ICAgICAgICAgICAgYWN0aXZlQWN0aW9uc1thY3RdICAgICAgICAgICAgICAgID0gdGhpcy5kaXNwYXRjaC5iaW5kKHRoaXMsIGFjdCk7XG5cdFx0XHRcdFx0XHRcdCAgICAgICAgICAgIGFjdGl2ZUFjdGlvbnNbYWN0XS5fX3RhcmdldFN0b3JlcyA9IDE7XG5cdFx0XHRcdFx0XHQgICAgICAgICAgICB9XG5cdFx0XHRcdFx0ICAgICAgICAgICAgfVxuXHRcdFx0XHQgICAgICAgICAgICApXG5cdFx0XHQgICAgICB9XG5cdFx0ICAgICAgKVxuXHR9XG5cdFxuXHQvKipcblx0ICogQmluZCBzdG9yZXMgZnJvbSB0aGlzIHNjb3BlLCBoaXMgcGFyZW50cyBhbmQgbWl4ZWQgc2NvcGVcblx0ICpcblx0ICogQHBhcmFtIG9iaiB7UmVhY3QuQ29tcG9uZW50fFN0b3JlfGZ1bmN0aW9ufVxuXHQgKiBAcGFyYW0ga2V5IHtzdHJpbmd9IHN0b3JlcyBrZXlzIHRvIGJpbmQgdXBkYXRlc1xuXHQgKiBAcGFyYW0gYXNcblx0ICogQHBhcmFtIHNldEluaXRpYWwge2Jvb2x9IGZhbHNlIHRvIG5vdCBwcm9wYWcgaW5pdGlhbCB2YWx1ZSAoZGVmYXVsdCA6IHRydWUpXG5cdCAqL1xuXHRiaW5kKCBvYmosIGtleSwgYXMsIHNldEluaXRpYWwgPSB0cnVlLCByZXZNYXAgPSB7fSApIHtcblx0XHRsZXQgbGFzdFJldnMsIGRhdGEsIHJlZktleXM7XG5cdFx0aWYgKCBrZXkgJiYgIWlzLmFycmF5KGtleSkgKVxuXHRcdFx0a2V5ID0gW2tleV07XG5cdFx0XG5cdFx0aWYgKCBhcyA9PT0gZmFsc2UgfHwgYXMgPT09IHRydWUgKSB7XG5cdFx0XHRzZXRJbml0aWFsID0gYXM7XG5cdFx0XHRhcyAgICAgICAgID0gbnVsbDtcblx0XHR9XG5cdFx0XG5cdFx0cmVmS2V5cyA9IGtleVxuXHRcdFx0Lm1hcChpZCA9PiAoaXMuc3RyaW5nKGlkKSA/IGlkIDogaWQubmFtZSkpXG5cdFx0XHQubWFwKGlkID0+ICh0aGlzLnBhcnNlUmVmKGlkKSkpO1xuXHRcdFxuXHRcdFxuXHRcdHRoaXMuXy5mb2xsb3dlcnMucHVzaChcblx0XHRcdFtcblx0XHRcdFx0b2JqLFxuXHRcdFx0XHRrZXksXG5cdFx0XHRcdGFzIHx8IHVuZGVmaW5lZCxcblx0XHRcdFx0bGFzdFJldnMgPSByZWZLZXlzLnJlZHVjZSgoIHJldnMsIHJlZiApID0+IHtcblx0XHRcdFx0XHRyZXZzW3JlZi5zdG9yZUlkXSA9IHJldnNbcmVmLnN0b3JlSWRdIHx8IHtcblx0XHRcdFx0XHRcdHJldiA6IDAsXG5cdFx0XHRcdFx0XHRyZWZzOiBbXVxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0cmV2c1tyZWYuc3RvcmVJZF0ucmVmcy5wdXNoKHJlZik7XG5cdFx0XHRcdFx0cmV0dXJuIHJldnM7XG5cdFx0XHRcdH0sIHJldk1hcClcblx0XHRcdF0pO1xuXHRcdFxuXHRcdHRoaXMubW91bnQoa2V5KTtcblx0XHR0aGlzLnJldGFpblN0b3JlcyhPYmplY3Qua2V5cyhsYXN0UmV2cyksICdsaXN0ZW5lcnMnKTtcblx0XHRcblx0XHRpZiAoIHNldEluaXRpYWwgJiYgdGhpcy5fc3RhYmxlICkge1xuXHRcdFx0ZGF0YSA9IHRoaXMuZ2V0VXBkYXRlcyhsYXN0UmV2cyk7XG5cdFx0XHRpZiAoICFkYXRhICkgcmV0dXJuIHRoaXM7XG5cdFx0XHRpZiAoIHR5cGVvZiBvYmogIT0gXCJmdW5jdGlvblwiICkge1xuXHRcdFx0XHRpZiAoIGFzICkgb2JqLnNldFN0YXRlKHsgW2FzXTogZGF0YSB9KTtcblx0XHRcdFx0ZWxzZSBvYmouc2V0U3RhdGUoZGF0YSk7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0b2JqKGRhdGEpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXHRcblx0LyoqXG5cdCAqIFVuIGJpbmQgdGhpcyBzY29wZSBvZmYgdGhlIGdpdmVuIGNvbXBvbmVudC1rZXlzXG5cdCAqIEBwYXJhbSBvYmpcblx0ICogQHBhcmFtIGtleVxuXHQgKiBAcmV0dXJucyB7QXJyYXkuPCo+fVxuXHQgKi9cblx0dW5CaW5kKCBvYmosIGtleSwgYXMgKSB7XG5cdFx0dmFyIGZvbGxvd2VycyA9IHRoaXMuXy5mb2xsb3dlcnMsXG5cdFx0ICAgIGkgICAgICAgICA9IGZvbGxvd2VycyAmJiBmb2xsb3dlcnMubGVuZ3RoO1xuXHRcdHdoaWxlICggZm9sbG93ZXJzICYmIGktLSApXG5cdFx0XHRpZiAoIGZvbGxvd2Vyc1tpXVswXSA9PT0gb2JqICYmXG5cdFx0XHRcdCgnJyArIGZvbGxvd2Vyc1tpXVsxXSkgPT0gKCcnICsga2V5KSAmJlxuXHRcdFx0XHRmb2xsb3dlcnNbaV1bMl0gPT0gYXMgKSB7XG5cdFx0XHRcdHRoaXMuZGlzcG9zZVN0b3JlcyhPYmplY3Qua2V5cyhmb2xsb3dlcnNbaV1bM10pLCAnbGlzdGVuZXJzJyk7XG5cdFx0XHRcdHJldHVybiBmb2xsb3dlcnMuc3BsaWNlKGksIDEpO1xuXHRcdFx0fVxuXHR9XG5cdFxuXHQvKipcblx0ICogTW91bnQgdGhlIHN0b3JlcyBpbiBzdG9yZXNMaXN0IGZyb20gdGhpcyBzY29wZSwgaXRzIHBhcmVudHMgYW5kIG1peGVkIHNjb3BlXG5cdCAqIEJpbmQgdGhlbSB0byAndG8nXG5cdCAqIEhvb2sgJ3RvJyBzbyBpdCB3aWxsIGF1dG8gdW5iaW5kIG9uICdkZXN0cm95JyBvciAnY29tcG9uZW50V2lsbFVubW91bnQnXG5cdCAqIEBwYXJhbSB0b1xuXHQgKiBAcGFyYW0gc3RvcmVzTGlzdFxuXHQgKiBAcGFyYW0gYmluZFxuXHQgKiBAcmV0dXJucyB7T2JqZWN0fSBJbml0aWFsIG91dHB1dHMgb2YgdGhlIHN0b3JlcyBpbiAnc3RvcmVzTGlzdCdcblx0ICovXG5cdG1hcCggdG8sIHN0b3Jlc0xpc3QsIGJpbmQgPSB0cnVlLCByZXZNYXAgKSB7XG5cdFx0bGV0IFN0b3JlICAgPSB0aGlzLmNvbnN0cnVjdG9yLlN0b3JlO1xuXHRcdHN0b3Jlc0xpc3QgID0gaXMuYXJyYXkoc3RvcmVzTGlzdCkgPyBzdG9yZXNMaXN0IDogW3N0b3Jlc0xpc3RdO1xuXHRcdGxldCByZWZMaXN0ID0gc3RvcmVzTGlzdC5tYXAodGhpcy5wYXJzZVJlZik7XG5cdFx0dGhpcy5tb3VudChzdG9yZXNMaXN0KTtcblx0XHRpZiAoIGJpbmQgJiYgdG8gaW5zdGFuY2VvZiBTdG9yZSApIHtcblx0XHRcdFN0b3JlLm1hcCh0bywgc3RvcmVzTGlzdCwgdGhpcywgdGhpcywgZmFsc2UpXG5cdFx0fVxuXHRcdGVsc2UgaWYgKCBiaW5kICkge1xuXHRcdFx0dGhpcy5iaW5kKHRvLCBzdG9yZXNMaXN0LCB1bmRlZmluZWQsIGZhbHNlKTtcblx0XHRcdFxuXHRcdFx0bGV0IG1peGVkQ1dVbm1vdW50LFxuXHRcdFx0ICAgIHVuTW91bnRLZXkgPSB0by5pc1JlYWN0Q29tcG9uZW50ID8gXCJjb21wb25lbnRXaWxsVW5tb3VudFwiIDogXCJkZXN0cm95XCI7XG5cdFx0XHRcblx0XHRcdGlmICggdG8uaGFzT3duUHJvcGVydHkodW5Nb3VudEtleSkgKSB7XG5cdFx0XHRcdG1peGVkQ1dVbm1vdW50ID0gdG9bdW5Nb3VudEtleV07XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdHRvW3VuTW91bnRLZXldID0gKCAuLi5hcmd6ICkgPT4ge1xuXHRcdFx0XHRkZWxldGUgdG9bdW5Nb3VudEtleV07XG5cdFx0XHRcdGlmICggbWl4ZWRDV1VubW91bnQgKVxuXHRcdFx0XHRcdHRvW3VuTW91bnRLZXldID0gbWl4ZWRDV1VubW91bnQ7XG5cdFx0XHRcdFxuXHRcdFx0XHR0aGlzLnVuQmluZCh0bywgc3RvcmVzTGlzdCk7XG5cdFx0XHRcdHJldHVybiB0b1t1bk1vdW50S2V5XSAmJiB0b1t1bk1vdW50S2V5XSguLi5hcmd6KTtcblx0XHRcdH1cblx0XHRcdFxuXHRcdH1cblx0XHRyZXR1cm4gcmV2TWFwICYmIHRoaXMuZ2V0VXBkYXRlcyhyZXZNYXApIHx8IHJlZkxpc3QucmVkdWNlKCggZGF0YSwgcmVmICkgPT4ge1xuXHRcdFx0d2Fsa25TZXQoZGF0YSwgcmVmLmFsaWFzIHx8IHJlZi5wYXRoLCB0aGlzLnJldHJpZXZlKHJlZi5wYXRoKSlcblx0XHRcdHJldHVybiBkYXRhO1xuXHRcdH0sIHt9KTtcblx0fVxuXHRcblx0LyoqXG5cdCAqIEdldCBjdXJyZW50IGRhdGEgdmFsdWUgZnJvbSBqc29uIHBhdGhcblx0ICogQHBhcmFtIHBhdGhcblx0ICogQHJldHVybnMge3N0cmluZ3wqfVxuXHQgKi9cblx0cmV0cmlldmUoIHBhdGggPSBcIlwiICkge1xuXHRcdHBhdGggPSBpcy5zdHJpbmcocGF0aCkgPyBwYXRoLnNwbGl0KCcuJykgOiBwYXRoO1xuXHRcdHJldHVybiBwYXRoICYmXG5cdFx0XHR0aGlzLnN0b3Jlc1twYXRoWzBdXSAmJlxuXHRcdFx0dGhpcy5zdG9yZXNbcGF0aFswXV0ucmV0cmlldmUgJiZcblx0XHRcdHRoaXMuc3RvcmVzW3BhdGhbMF1dLnJldHJpZXZlKHBhdGguc2xpY2UoMSkpO1xuXHR9XG5cdFxuXHQvKipcblx0ICogR2V0IGN1cnJlbnQgc3RvcmUgZnJvbSBqc29uIHBhdGhcblx0ICogQHBhcmFtIHBhdGhcblx0ICogQHJldHVybnMge3N0cmluZ3wqfVxuXHQgKi9cblx0cmV0cmlldmVTdG9yZSggcGF0aCA9IFwiXCIgKSB7XG5cdFx0cGF0aCA9IGlzLnN0cmluZyhwYXRoKSA/IHBhdGguc3BsaXQoJy4nKSA6IHBhdGg7XG5cdFx0cmV0dXJuIHBhdGhcblx0XHRcdCYmIHBhdGgubGVuZ3RoXG5cdFx0XHQmJiAoXG5cdFx0XHRcdHBhdGgubGVuZ3RoICE9IDEgJiYgdGhpcy5zdG9yZXNbcGF0aFswXV0ucmV0cmlldmVTdG9yZVxuXHRcdFx0XHQ/IHRoaXMuc3RvcmVzW3BhdGhbMF1dLnJldHJpZXZlU3RvcmUocGF0aC5zbGljZSgxKSlcblx0XHRcdFx0OiBwYXRoLmxlbmd0aCA9PSAxICYmIHRoaXMuc3RvcmVzW3BhdGhbMF1dXG5cdFx0XHQpO1xuXHR9XG5cdFxuXHQvKipcblx0ICogR2V0IG9yIHVwZGF0ZSBzdG9yZXNSZXZNYXAncyByZXZpc2lvbnNcblx0ICogQHBhcmFtIHN0b3Jlc1Jldk1hcFxuXHQgKiBAcGFyYW0gbG9jYWxcblx0ICogQHJldHVybnMge3t9fVxuXHQgKi9cblx0Z2V0U3RvcmVzUmV2cyggc3RvcmVzUmV2TWFwID0ge30sIGxvY2FsICkge1xuXHRcdGxldCBjdHggPSB0aGlzLl8uX3Njb3BlO1xuXHRcdGlmICggIXN0b3Jlc1Jldk1hcCApIHtcblx0XHRcdHN0b3Jlc1Jldk1hcCA9IHt9O1xuXHRcdH1cblx0XHRPYmplY3Qua2V5cyhjdHgpLmZvckVhY2goXG5cdFx0XHRpZCA9PiB7XG5cdFx0XHRcdGlmICggaWQgPT0gXCIkcGFyZW50XCIgKSByZXR1cm47XG5cdFx0XHRcdGlmICggIWlzLmZuKGN0eFtpZF0pXG5cdFx0XHRcdCkge1xuXHRcdFx0XHRcdHN0b3Jlc1Jldk1hcFtpZF0gPSBjdHhbaWRdLl9yZXY7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZSBpZiAoICFzdG9yZXNSZXZNYXAuaGFzT3duUHJvcGVydHkoaWQpIClcblx0XHRcdFx0XHRzdG9yZXNSZXZNYXBbaWRdID0gZmFsc2Vcblx0XHRcdH1cblx0XHQpO1xuXHRcdGlmICggIWxvY2FsICkge1xuXHRcdFx0dGhpcy5fLl9taXhlZC5yZWR1Y2UoKCB1cGRhdGVkLCBjdHggKSA9PiAoY3R4LmdldFN0b3Jlc1JldnMoc3RvcmVzUmV2TWFwKSwgc3RvcmVzUmV2TWFwKSwgc3RvcmVzUmV2TWFwKTtcblx0XHRcdHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LmdldFN0b3Jlc1JldnMoc3RvcmVzUmV2TWFwKTtcblx0XHR9XG5cdFx0cmV0dXJuIHN0b3Jlc1Jldk1hcDtcblx0fVxuXHRcblx0LyoqXG5cdCAqIEdldCB1cGRhdGVkIG91dHB1dCBiYXNpbmcgc3RvcmVzUmV2TWFwJ3MgcmV2aXNpb25zLlxuXHQgKiBJZiBhIHN0b3JlIGluICdzdG9yZXNSZXZNYXAnIHdhcyB1cGRhdGVkOyBhZGQgaXQgdG8gJ291dHB1dCcgJiB1cGRhdGUgc3RvcmVzUmV2TWFwXG5cdCAqIEBwYXJhbSBzdG9yZXNSZXZNYXBcblx0ICogQHBhcmFtIG91dHB1dFxuXHQgKiBAcGFyYW0gdXBkYXRlZFxuXHQgKiBAcmV0dXJucyB7Knx7fX1cblx0ICovXG5cdGdldFJlZnNVcGRhdGVzKCByZWZzLCByZXZNYXAsIG91dHB1dCApIHtcblx0XHRcblx0XHRyZXZNYXAgPSByZXZNYXAgfHwgcmVmc1xuXHRcdFx0Lm1hcChpZCA9PiAoaXMuc3RyaW5nKGlkKSA/IGlkIDogaWQubmFtZSkpXG5cdFx0XHQubWFwKGlkID0+ICh0aGlzLnBhcnNlUmVmKGlkKSkpXG5cdFx0XHQucmVkdWNlKCggcmV2cywgcmVmICkgPT4ge1xuXHRcdFx0XHRyZXZzW3JlZi5zdG9yZUlkXSA9IHJldnNbcmVmLnN0b3JlSWRdIHx8IHtcblx0XHRcdFx0XHRyZXYgOiAwLFxuXHRcdFx0XHRcdHJlZnM6IFtdXG5cdFx0XHRcdH07XG5cdFx0XHRcdHJldnNbcmVmLnN0b3JlSWRdLnJlZnMucHVzaChyZWYpO1xuXHRcdFx0XHRyZXR1cm4gcmV2cztcblx0XHRcdH0sIHt9KTtcblx0XHRcblx0XHRyZXR1cm4gdGhpcy5nZXRVcGRhdGVzKHJldk1hcCwgb3V0cHV0KVxuXHRcdFxuXHR9XG5cdFxuXHQvKipcblx0ICogR2V0IG9yIHVwZGF0ZSBvdXRwdXQgYmFzaW5nIHN0b3Jlc1Jldk1hcCdzIHJldmlzaW9ucy5cblx0ICogSWYgYSBzdG9yZSBpbiAnc3RvcmVzUmV2TWFwJyB3YXMgdXBkYXRlZDsgYWRkIGl0IHRvICdvdXRwdXQnICYgdXBkYXRlIHN0b3Jlc1Jldk1hcFxuXHQgKiBAdG9kbzogb3B0aW0gLyB1c2UgcHJvdG9zXG5cdCAqIEBwYXJhbSBzdG9yZXNSZXZNYXBcblx0ICogQHBhcmFtIG91dHB1dFxuXHQgKiBAcGFyYW0gdXBkYXRlZFxuXHQgKiBAcmV0dXJucyB7Knx7fX1cblx0ICovXG5cdGdldFVwZGF0ZXMoIHN0b3Jlc1Jldk1hcCwgb3V0cHV0LCB1cGRhdGVkICkge1xuXHRcdGxldCBjdHggPSB0aGlzLl8uX3Njb3BlO1xuXHRcdFxuXHRcdG91dHB1dCA9IG91dHB1dCB8fCB7fTtcblx0XHRPYmplY3Qua2V5cyhjdHgpLmZvckVhY2goXG5cdFx0XHRpZCA9PiB7XG5cdFx0XHRcdGlmICggaWQgPT0gXCIkcGFyZW50XCIgKSByZXR1cm47XG5cdFx0XHRcdGlmICggIW91dHB1dC5oYXNPd25Qcm9wZXJ0eShpZClcblx0XHRcdFx0XHQmJiAhaXMuZm4oY3R4W2lkXSlcblx0XHRcdFx0XHQmJiAoIXN0b3Jlc1Jldk1hcFxuXHRcdFx0XHRcdFx0fHwgKHN0b3Jlc1Jldk1hcC5oYXNPd25Qcm9wZXJ0eShpZCkgJiYgc3RvcmVzUmV2TWFwW2lkXSA9PT0gdW5kZWZpbmVkKVxuXHRcdFx0XHRcdFx0fHwgKHN0b3Jlc1Jldk1hcC5oYXNPd25Qcm9wZXJ0eShpZCkgJiYgY3R4W2lkXS5fcmV2ID4gc3RvcmVzUmV2TWFwW2lkXS5yZXYpKVxuXHRcdFx0XHQpIHtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHR1cGRhdGVkICAgID0gdHJ1ZTtcblx0XHRcdFx0XHRvdXRwdXRbaWRdID0gdGhpcy5kYXRhW2lkXTtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHRpZiAoIHN0b3Jlc1Jldk1hcCAmJiBzdG9yZXNSZXZNYXAuaGFzT3duUHJvcGVydHkoaWQpICkge1xuXHRcdFx0XHRcdFx0c3RvcmVzUmV2TWFwW2lkXSAgICAgPSBzdG9yZXNSZXZNYXBbaWRdIHx8IHsgcmV2OiAwLCByZWZzOiBbXSB9O1xuXHRcdFx0XHRcdFx0c3RvcmVzUmV2TWFwW2lkXS5yZXYgPSBjdHhbaWRdLl9yZXY7XG5cdFx0XHRcdFx0XHRzdG9yZXNSZXZNYXBbaWRdLnJlZnMuZm9yRWFjaChcblx0XHRcdFx0XHRcdFx0cmVmID0+IHtcblx0XHRcdFx0XHRcdFx0XHQvL2NvbnNvbGUud2FybihcInVwZGF0ZSByZWYgXCIsIHJlZi5yZWYsXG5cdFx0XHRcdFx0XHRcdFx0Ly8gdGhpcy5yZXRyaWV2ZShyZWYucGF0aCkpO1xuXHRcdFx0XHRcdFx0XHRcdG91dHB1dFtyZWYuYWxpYXNdID0gdGhpcy5yZXRyaWV2ZShyZWYucGF0aClcblx0XHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRlbHNlIGlmICggIW91dHB1dC5oYXNPd25Qcm9wZXJ0eShpZCkgKSB7Ly8gYXZvaWQgZW1wdHkgb3Igbm90IGluaXRpYWxpemVkIHN0b3JlIHJlc3VsdHMgdG8gYmUgcmVwbGFjZWQgYnkgaW5oZXJpdGVkIHdpdGggc2FtZSBuYW1lXG5cdFx0XHRcdFx0XHRvdXRwdXRbaWRdID0gdW5kZWZpbmVkO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHRcdC8vY29uc29sZS53YXJuKFwidXBkYXRlIFwiLCBpZCwgdGhpcy5kYXRhW2lkXSk7XG5cdFx0XHRcdFx0XHRvdXRwdXRbaWRdID0gdGhpcy5kYXRhW2lkXTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHQpO1xuXHRcdHVwZGF0ZWQgPSB0aGlzLl8uX21peGVkLnJlZHVjZVJpZ2h0KCggdXBkYXRlZCwgY3R4ICkgPT4gKGN0eC5nZXRVcGRhdGVzKHN0b3Jlc1Jldk1hcCwgb3V0cHV0LCB1cGRhdGVkKSB8fCB1cGRhdGVkKSwgdXBkYXRlZCk7XG5cdFx0dXBkYXRlZCA9IHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LmdldFVwZGF0ZXMoc3RvcmVzUmV2TWFwLCBvdXRwdXQsIHVwZGF0ZWQpIHx8IHVwZGF0ZWQ7XG5cdFx0cmV0dXJuIHVwZGF0ZWQgJiYgb3V0cHV0O1xuXHR9XG5cdFxuXHQvKipcblx0ICogUmVjdXJzaXZlbHkgZ2V0IGFsbCBjaGlsZCBzY29wZXNcblx0ICogQHBhcmFtIGNoaWxkc1xuXHQgKiBAcmV0dXJucyB7QXJyYXl9XG5cdCAqIEBwcml2YXRlXG5cdCAqL1xuXHRfZ2V0QWxsQ2hpbGRzKCBjaGlsZHMgPSBbXSApIHtcblx0XHRjaGlsZHMucHVzaCguLi50aGlzLl8uY2hpbGRTY29wZXMpO1xuXHRcdHRoaXMuXy5jaGlsZFNjb3Blcy5mb3JFYWNoKFxuXHRcdFx0Y3R4ID0+IHtcblx0XHRcdFx0Y3R4Ll9nZXRBbGxDaGlsZHMoY2hpbGRzKTtcblx0XHRcdH1cblx0XHQpO1xuXHRcdHJldHVybiBjaGlsZHM7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBTZXJpYWxpemUgYWxsIGFjdGl2ZSBzdG9yZXMgc3RhdGUgJiBkYXRhIGluIGV2ZXJ5IGNoaWxkcyAmIG1peGVkIHNjb3Blc1xuXHQgKlxuXHQgKiBTY29wZXMgd2l0aG91dCBrZXkgb3IgaWQgYXJlIGlnbm9yZWRcblx0ICogQHBhcmFtIG91dHB1dFxuXHQgKiBAcmV0dXJucyB7e319XG5cdCAqL1xuXHRzZXJpYWxpemUoIGNmZyA9IHt9LCBvdXRwdXQgPSB7fSApIHtcblx0XHRsZXQgY3R4ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID0gdGhpcy5fLl9zY29wZSxcblx0XHQgICAgeyBiYXNlSWQsIGtleSwga2V5UElELCBpbmNyZW1lbnRJZCB9ID0gdGhpcy5fLFxuXHRcdCAgICB7XG5cdFx0XHQgICAgYWxpYXMsXG5cdFx0XHQgICAgcGFyZW50QWxpYXMsXG5cdFx0ICAgIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA9IGNmZyxcblx0XHQgICAgc2lkICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID0ga2V5XG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gKHBhcmVudEFsaWFzIHx8IGtleVBJRCkgKyAnPicgKyBrZXlcblx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBhbGlhcyB8fCBwYXJlbnRBbGlhcyAmJiAocGFyZW50QWxpYXMgKyAnLycgKyBiYXNlSWQpIHx8IHRoaXMuX2lkO1xuXHRcdFxuXHRcdFxuXHRcdC8vYWxpYXMgPSBhbGlhcyB8fCBiYXNlSWQ7XG5cdFx0cmV0dXJuIHRoaXMuc2VyaWFsaXplX2V4KGNmZywgb3V0cHV0LCBzaWQsIGFsaWFzLCBbXCIkcGFyZW50XCJdKVxuXHR9XG5cdFxuXHRzZXJpYWxpemVfZXgoIGNmZyA9IHt9LCBvdXRwdXQgPSB7fSwgc2lkLCBhbGlhcywgZXhjbHVkZSApIHtcblx0XHRsZXQgY3R4ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID0gdGhpcy5fLl9zY29wZSxcblx0XHQgICAgeyBiYXNlSWQsIGtleSwga2V5UElELCBpbmNyZW1lbnRJZCB9ID0gdGhpcy5fLFxuXHRcdCAgICB7XG5cdFx0XHQgICAgd2l0aENoaWxkcyA9IHRydWUsXG5cdFx0XHQgICAgd2l0aFBhcmVudHMsXG5cdFx0XHQgICAgd2l0aE1peGVkICA9IHRydWUsXG5cdFx0XHQgICAgbm9yZWZzLFxuXHRcdFx0ICAgIHBhcmVudEFsaWFzLFxuXHRcdFx0ICAgIGFsaWFzZXMgICAgPSB7fVxuXHRcdCAgICB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSBjZmc7XG5cdFx0XG5cdFx0aWYgKCBrZXlXYWxrbkdldChvdXRwdXQsIHNpZCkgKSB7XG5cdFx0XHRpZiAoICFpbmNyZW1lbnRJZCApLy8gZG9uZVxuXHRcdFx0XHRyZXR1cm4gb3V0cHV0O1xuXHRcdFx0ZWxzZSBpZiAoIGluY3JlbWVudElkICkgey8vIGdlbmVyYXRlIGtleSBpZFxuXHRcdFx0XHRsZXQgaSA9IC0xO1xuXHRcdFx0XHR3aGlsZSAoIGtleVdhbGtuR2V0KG91dHB1dCwgc2lkICsgJ1snICsgKCsraSkgKyAnXScpICkgO1xuXHRcdFx0XHRzaWQgPSBzaWQgKyAnWycgKyBpICsgJ10nO1xuXHRcdFx0fVxuXHRcdH1cblx0XHQvL0B0b2RvIDogYmV0dGVyIHNlcmlhbGl6ZSBtZXRob2Rcblx0XHRrZXlXYWxrblNldChvdXRwdXQsIHNpZCwge30pO1xuXHRcdFxuXHRcdE9iamVjdC5rZXlzKGN0eCkuZm9yRWFjaChcblx0XHRcdGlkID0+IHtcblx0XHRcdFx0aWYgKCBleGNsdWRlLmluY2x1ZGVzKGlkKSB8fCBpcy5yc1N0b3JlQ2xhc3MoY3R4W2lkXSkgfHwgaXMucnNTY29wZUNsYXNzKGN0eFtpZF0pIClcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFxuXHRcdFx0XHRjdHhbaWRdLnNlcmlhbGl6ZSh7IC4uLmNmZywgcGFyZW50QWxpYXM6IHNpZCB9LCBvdXRwdXQpO1xuXHRcdFx0fVxuXHRcdClcblx0XHRcblx0XHQvL3dpdGhQYXJlbnRzICYmIHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LnNlcmlhbGl6ZSh7XG5cdFx0Ly9cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRoQ2hpbGQgIDogZmFsc2UsXG5cdFx0Ly9cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRoUGFyZW50czogdHJ1ZSxcblx0XHQvL1x0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpdGhNaXhlZCxcblx0XHQvL1x0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcmVmc1xuXHRcdC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIG91dHB1dCk7XG5cdFx0XG5cdFx0d2l0aENoaWxkcyAmJiB0aGlzLl8uY2hpbGRTY29wZXMuZm9yRWFjaChcblx0XHRcdGN0eCA9PiB7XG5cdFx0XHRcdCFjdHguXy5pc0xvY2FsSWQgJiYgY3R4LnNlcmlhbGl6ZSh7XG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpdGhDaGlsZCAgOiB0cnVlLFxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRoUGFyZW50czogZmFsc2UsXG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudEFsaWFzOiBzaWQsXG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpdGhNaXhlZCxcblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9yZWZzLFxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgb3V0cHV0KTtcblx0XHRcdH1cblx0XHQpO1xuXHRcdFxuXHRcdHdpdGhNaXhlZCAmJiB0aGlzLl8uX21peGVkLmZvckVhY2goXG5cdFx0XHRjdHggPT4ge1xuXHRcdFx0XHQhY3R4Ll8uaXNMb2NhbElkICYmIGN0eC5zZXJpYWxpemUoe1xuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRoQ2hpbGQgIDogZmFsc2UsXG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpdGhQYXJlbnRzOiBmYWxzZSxcblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aE1peGVkLFxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JlZnNcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIG91dHB1dCk7XG5cdFx0XHR9XG5cdFx0KTtcblx0XHRcblx0XHRpZiAoIGFsaWFzICkge1xuXHRcdFx0b3V0cHV0ID0gT2JqZWN0LmtleXMob3V0cHV0KVxuXHRcdFx0ICAgICAgICAgICAgICAgLnJlZHVjZShcblx0XHRcdFx0ICAgICAgICAgICAgICAgKCBoLCBrICkgPT4gKFxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgIGhbayA9PT0gdGhpcy5faWRcblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgID8gYWxpYXNcblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgIDoga10gPSBvdXRwdXRba10sXG5cdFx0XHRcdFx0XHQgICAgICAgICAgICAgICBoXG5cdFx0XHRcdCAgICAgICAgICAgICAgICksXG5cdFx0XHRcdCAgICAgICAgICAgICAgIHt9XG5cdFx0XHQgICAgICAgICAgICAgICApXG5cdFx0fVxuXHRcdHJldHVybiBvdXRwdXQ7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBSZXN0b3JlIHN0YXRlICYgZGF0YSBmcm9tIHRoZSBzZXJpYWxpemUgZm5cblx0ICogQHBhcmFtIHNuYXBzaG90XG5cdCAqIEBwYXJhbSBmb3JjZVxuXHQgKi9cblx0cmVzdG9yZSggc25hcHNob3QsIGNmZyA9IHt9LCBmb3JjZSA9IGlzLmJvb2woY2ZnKSAmJiBjZmcgKSB7XG5cdFx0bGV0IGN0eCA9IHRoaXMuXy5fc2NvcGUsIHNuYXA7XG5cdFx0XG5cdFx0aWYgKCBzbmFwc2hvdCAmJiBjZmcgJiYgY2ZnLmFsaWFzICYmIGNmZy5hbGlhcyAhPSB0aGlzLl9pZCApIHtcblx0XHRcdHNuYXAgPSB7XG5cdFx0XHRcdC4uLnNuYXBzaG90LFxuXHRcdFx0XHRbdGhpcy5faWRdOiBzbmFwc2hvdFtjZmcuYWxpYXNdXG5cdFx0XHR9XG5cdFx0XHRkZWxldGUgc25hcFtjZmcuYWxpYXNdO1xuXHRcdFx0c25hcHNob3QgPSBzbmFwO1xuXHRcdH1cblx0XHRzbmFwc2hvdCA9IHNuYXBzaG90XG5cdFx0XHQmJiBrZXlXYWxrbkdldChzbmFwc2hvdCwgdGhpcy5faWQpXG5cdFx0XHR8fCB0aGlzLnRha2VTbmFwc2hvdEJ5S2V5KHRoaXMuX2lkKTtcblx0XHRcblx0XHRcblx0XHRpZiAoICFzbmFwc2hvdCApXG5cdFx0XHRyZXR1cm47XG5cdFx0XG5cdFx0dGhpcy5fLnNuYXBzaG90ID0geyAuLi5zbmFwc2hvdCB9O1xuXHRcdFxuXHRcdHNuYXAgICAgICAgICAgPSBzbmFwc2hvdFsnLyddO1xuXHRcdHNuYXBzaG90WycvJ10gPSB7IC4uLnNuYXAgfTtcblx0XHRzbmFwICYmIE9iamVjdC5rZXlzKHNuYXApLmZvckVhY2goXG5cdFx0XHRuYW1lID0+IHtcblx0XHRcdFx0aWYgKCBuYW1lID09IFwiJHBhcmVudFwiICkgcmV0dXJuO1xuXHRcdFx0XHRcblx0XHRcdFx0aWYgKCBjdHhbbmFtZV0gKSB7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0aWYgKCBmb3JjZSAmJiAhaXMuZm4oY3R4W25hbWVdKSApXG5cdFx0XHRcdFx0XHRjdHhbbmFtZV0uZGVzdHJveSgpO1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdHRoaXMuX21vdW50KG5hbWUpOy8vIHF1aWV0XG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHR9XG5cdFx0KVxuXHRcdFxuXHRcdHRoaXMuXy5fbWl4ZWQuZm9yRWFjaChcblx0XHRcdGN0eCA9PiB7XG5cdFx0XHRcdCFjdHguXy5pc0xvY2FsSWQgJiYgY3R4LnJlc3RvcmUodW5kZWZpbmVkLCBmb3JjZSk7XG5cdFx0XHR9XG5cdFx0KTtcblx0XHRcblx0XHR0aGlzLl8uY2hpbGRTY29wZXMuZm9yRWFjaChcblx0XHRcdGN0eCA9PiB7XG5cdFx0XHRcdCFjdHguXy5pc0xvY2FsSWQgJiYgY3R4LnJlc3RvcmUodW5kZWZpbmVkLCBmb3JjZSk7XG5cdFx0XHR9XG5cdFx0KTtcblx0fVxuXHRcblx0Z2V0U25hcHNob3RCeUtleSgga2V5LCBsb2NhbCApIHtcblx0XHQvLyBvbmx5IGhhdmUgdGhlIGxvY2FsIHNuYXBcblx0XHRpZiAoIHRoaXMuXy5zbmFwc2hvdCAmJiBrZXkuc3RhcnRzV2l0aCh0aGlzLl9pZCkgKSB7XG5cdFx0XHRsZXQgb2JqID0ga2V5V2Fsa25HZXQodGhpcy5fLnNuYXBzaG90LCBrZXkuc3Vic3RyKHRoaXMuX2lkLmxlbmd0aCkpXG5cdFx0XHQvL2lmICggb2JqICkge1xuXHRcdFx0Ly8gICAgdGhpcy5kZWxldGVTbmFwc2hvdEJ5S2V5KGtleSk7XG5cdFx0XHQvL31cblx0XHRcdHJldHVybiBvYmo7XG5cdFx0fVxuXHRcdGVsc2UgcmV0dXJuICFsb2NhbFxuXHRcdFx0JiYgdGhpcy5wYXJlbnRcblx0XHRcdCYmIHRoaXMucGFyZW50LmdldFNuYXBzaG90QnlLZXkoa2V5KVxuXHRcdFx0fHxcblx0XHRcdHRoaXMuc3RvcmVzLiRwYXJlbnRcblx0XHRcdCYmIHRoaXMuc3RvcmVzLiRwYXJlbnQuZ2V0U25hcHNob3RCeUtleShrZXkpO1xuXHRcdFxuXHR9XG5cdFxuXHRnZXRTbmFwc2hvdEJ5S2V5RXh0KCBzbmFwc2hvdCwga2V5LCBsb2NhbCApIHtcblx0XHQvLyBvbmx5IGhhdmUgdGhlIGxvY2FsIHNuYXBcblx0XHRpZiAoIHNuYXBzaG90ICkge1xuXHRcdFx0bGV0IG9iaiA9IGtleVdhbGtuR2V0KHNuYXBzaG90LCBrZXkpXG5cdFx0XHRyZXR1cm4gb2JqO1xuXHRcdH1cblx0XHRcblx0fVxuXHRcblx0dGFrZVNuYXBzaG90QnlLZXkoIGtleSwgbG9jYWwgKSB7XG5cdFx0aWYgKCB0aGlzLl8uc25hcHNob3QgJiYga2V5LnN0YXJ0c1dpdGgodGhpcy5faWQpICkge1xuXHRcdFx0bGV0IG9iaiA9IGtleVdhbGtuR2V0KHRoaXMuXy5zbmFwc2hvdCwga2V5LnN1YnN0cih0aGlzLl9pZC5sZW5ndGgpKVxuXHRcdFx0aWYgKCBvYmogKSB7XG5cdFx0XHRcdHRoaXMuZGVsZXRlU25hcHNob3RCeUtleShrZXksIHRydWUpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIG9iajtcblx0XHR9XG5cdFx0ZWxzZSByZXR1cm4gIWxvY2FsXG5cdFx0XHQmJiB0aGlzLnBhcmVudFxuXHRcdFx0JiYgdGhpcy5wYXJlbnQudGFrZVNuYXBzaG90QnlLZXkoa2V5KVxuXHRcdFx0fHxcblx0XHRcdHRoaXMuc3RvcmVzLiRwYXJlbnRcblx0XHRcdCYmIHRoaXMuc3RvcmVzLiRwYXJlbnQudGFrZVNuYXBzaG90QnlLZXkoa2V5KTtcblx0fVxuXHRcblx0ZGVsZXRlU25hcHNob3RCeUtleSgga2V5LCBsb2NhbCApIHtcblx0XHRpZiAoIHRoaXMuXy5zbmFwc2hvdCAmJiBrZXkuc3RhcnRzV2l0aCh0aGlzLl9pZCkgKSB7XG5cdFx0XHRsZXQgb2JqID0ga2V5V2Fsa25HZXQodGhpcy5fLnNuYXBzaG90LCBrZXkuc3Vic3RyKHRoaXMuX2lkLmxlbmd0aCkucmVwbGFjZSgvXiguKltcXD58XFwvXSlbXlxcPnxcXC9dKyQvaWcsICckMScpKVxuXHRcdFx0aWYgKCBvYmogKVxuXHRcdFx0XHRkZWxldGUgb2JqW2tleS5yZXBsYWNlKC9eLipbXFw+fFxcL10oW15cXD58XFwvXSspJC9pZywgJyQxJyldXG5cdFx0fVxuXHRcdHJldHVybiAhbG9jYWxcblx0XHRcdCYmIHRoaXMucGFyZW50XG5cdFx0XHQmJiB0aGlzLnBhcmVudC5kZWxldGVTbmFwc2hvdEJ5S2V5KGtleSlcblx0XHRcdHx8XG5cdFx0XHR0aGlzLnN0b3Jlcy4kcGFyZW50XG5cdFx0XHQmJiB0aGlzLnN0b3Jlcy4kcGFyZW50LmRlbGV0ZVNuYXBzaG90QnlLZXkoa2V5KTtcblx0fVxuXHRcblx0c2V0U3RhdGUoIHBTdGF0ZSApIHtcblx0XHRPYmplY3Qua2V5cyhwU3RhdGUpXG5cdFx0ICAgICAgLmZvckVhY2goayA9PiAodGhpcy5zdGF0ZVtrXSA9IHBTdGF0ZVtrXSkpXG5cdH1cblx0XG5cdC8qKlxuXHQgKiBnZXQgYSBwYXJzZWQgcmVmZXJlbmNlXG5cdCAqIEBwYXJhbSBfcmVmXG5cdCAqIEByZXR1cm5zIHt7c3RvcmVJZCwgcGF0aCwgYWxpYXM6ICosIHJlZjogKn19XG5cdCAqL1xuXHRwYXJzZVJlZiggX3JlZiApIHtcblx0XHRpZiAoIHR5cGVvZiBfcmVmICE9PSAnc3RyaW5nJyApIHtcblx0XHRcdHRoaXMucmVnaXN0ZXIoeyBbX3JlZi5uYW1lXTogX3JlZi5zdG9yZSB9KTtcblx0XHRcdF9yZWYgPSBfcmVmLm5hbWU7XG5cdFx0fVxuXHRcdGxldCByZWYgPSBfcmVmLnNwbGl0KCc6Jyk7XG5cdFx0cmVmWzBdICA9IHJlZlswXS5zcGxpdCgnLicpO1xuXHRcdHJldHVybiB7XG5cdFx0XHRzdG9yZUlkOiByZWZbMF1bMF0sXG5cdFx0XHRwYXRoICAgOiByZWZbMF0sXG5cdFx0XHRhbGlhcyAgOiByZWZbMV0gfHwgcmVmWzBdW3JlZlswXS5sZW5ndGggLSAxXSxcblx0XHRcdHJlZiAgICA6IF9yZWZcblx0XHR9O1xuXHR9XG5cdFxuXHQvKipcblx0ICogRGlzcGF0Y2ggYW4gYWN0aW9uIHRvIHRoZSB0b3AgcGFyZW50ICYgbWl4ZWQgc2NvcGVzLCBpbiBhbGwgc3RvcmVzXG5cdCAqXG5cdCAqIEBwYXJhbSBhY3Rpb25cblx0ICogQHBhcmFtIGRhdGFcblx0ICogQHJldHVybnMge1Njb3BlfVxuXHQgKi9cblx0ZGlzcGF0Y2goIGFjdGlvbiwgLi4uYXJneiApIHtcblx0XHRpZiAoIHRoaXMuZGVhZCApIHtcblx0XHRcdGNvbnNvbGUud2FybihcIkRpc3BhdGNoIHdhcyBjYWxsZWQgb24gYSBkZWFkIHNjb3BlLCBjaGVjayB5b3UncmUgYXN5bmMgZnVuY3Rpb25zIGluIHRoaXMgc3RhY2suLi5cIiwgKG5ldyBFcnJvcigpKS5zdGFjayk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGxldCBiQWN0cyA9IHRoaXMuXy5fYm91bmRlZEFjdGlvbnM7XG5cdFx0T2JqZWN0LmtleXModGhpcy5fLl9zY29wZSlcblx0XHQgICAgICAuZm9yRWFjaChcblx0XHRcdCAgICAgIGlkID0+IHtcblx0XHRcdFx0ICAgICAgaWYgKCBpZCA9PSBcIiRwYXJlbnRcIiApIHJldHVybjtcblx0XHRcdFx0ICAgICAgaWYgKCAhaXMuZm4odGhpcy5fLl9zY29wZVtpZF0pIClcblx0XHRcdFx0XHQgICAgICB0aGlzLl8uX3Njb3BlW2lkXS50cmlnZ2VyKGFjdGlvbiwgLi4uYXJneik7XG5cdFx0XHQgICAgICB9XG5cdFx0ICAgICAgKTtcblx0XHRcblx0XHRpZiAoIGJBY3RzICYmIGJBY3RzLnRlc3QoYWN0aW9uKSApXG5cdFx0XHRyZXR1cm47XG5cdFx0XG5cdFx0dGhpcy5fLl9taXhlZC5mb3JFYWNoKCggY3R4ICkgPT4gKGN0eC5kaXNwYXRjaChhY3Rpb24sIC4uLmFyZ3opKSk7XG5cdFx0dGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuZGlzcGF0Y2goYWN0aW9uLCAuLi5hcmd6KTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXHRcblx0Ly9cblx0dHJpZ2dlcigpIHtcblx0XHR0aGlzLmRpc3BhdGNoKC4uLmFyZ3VtZW50cyk7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBvbmNlKCdzdGFibGUnLCBjYilcblx0ICogQHBhcmFtIG9iaiB7UmVhY3QuQ29tcG9uZW50fFN0b3JlfGZ1bmN0aW9uKVxuXHQgKiBAcGFyYW0ga2V5IHtzdHJpbmd9IG9wdGlvbmFsIGtleSB3aGVyZSB0byBtYXAgdGhlIHB1YmxpYyBzdGF0ZVxuXHQgKi9cblx0dGhlbiggY2IgKSB7XG5cdFx0aWYgKCB0aGlzLl9zdGFibGUgKVxuXHRcdFx0cmV0dXJuIGNiKHRoaXMuZGF0YSk7XG5cdFx0dGhpcy5vbmNlKCdzdGFibGUnLCBlID0+IGNiKHRoaXMuZGF0YSkpO1xuXHR9XG5cdFxuXHQvKipcblx0ICogQ2FsbCByZXRhaW4gb24gdGhlIHNjb3BlZCBzdG9yZXMgYmFzaW5nIGdpdmVuXG5cdCAqXG5cdCAqIEBwYXJhbSBzdG9yZXNcblx0ICogQHBhcmFtIHJlYXNvblxuXHQgKi9cblx0cmV0YWluU3RvcmVzKCBzdG9yZXMgPSBbXSwgcmVhc29uICkge1xuXHRcdC8vc3RvcmVzLmZvckVhY2goXG5cdFx0Ly8gICAgaWQgPT4gKCAoICF0aGlzLnN0b3Jlc1sgaWQgXSB8fCAhdGhpcy5zdG9yZXNbIGlkIF0ucmV0YWluICkgJiYgY29uc29sZS53YXJuKGlkLCByZWFzb24pIClcblx0XHQvLylcblx0XHRzdG9yZXMuZm9yRWFjaChcblx0XHRcdGlkID0+ICh0aGlzLnN0b3Jlc1tpZF0gJiYgdGhpcy5zdG9yZXNbaWRdLnJldGFpbiAmJiB0aGlzLnN0b3Jlc1tpZF0ucmV0YWluKHJlYXNvbikpXG5cdFx0KVxuXHR9XG5cdFxuXHQvKipcblx0ICogQ2FsbCByZXRhaW4gb24gdGhlIHNjb3BlZCBzdG9yZXNcblx0ICpcblx0ICogQHBhcmFtIHN0b3Jlc1xuXHQgKiBAcGFyYW0gcmVhc29uXG5cdCAqL1xuXHRkaXNwb3NlU3RvcmVzKCBzdG9yZXMgPSBbXSwgcmVhc29uICkge1xuXHRcdHN0b3Jlcy5mb3JFYWNoKFxuXHRcdFx0aWQgPT4gKHRoaXMuc3RvcmVzW2lkXSAmJiB0aGlzLnN0b3Jlc1tpZF0uZGlzcG9zZSAmJiB0aGlzLnN0b3Jlc1tpZF0uZGlzcG9zZShyZWFzb24pKVxuXHRcdClcblx0fVxuXHRcblx0LyoqXG5cdCAqIEtlZXAgdGhlIHNjb3BlIHVuc3RhYmxlIHVudGlsIHJlbGVhc2UgaXMgY2FsbGVkXG5cdCAqIEBwYXJhbSByZWFzb25cblx0ICovXG5cdHdhaXQoIHJlYXNvbiApIHtcblx0XHQvL2NvbnNvbGUubG9nKFwid2FpdFwiLCByZWFzb24pO1xuXHRcdHRoaXMuX3N0YWJsZSAmJiAhdGhpcy5fX2xvY2tzLmFsbCAmJiB0aGlzLmVtaXQoXCJ1bnN0YWJsZVwiLCB0aGlzKTtcblx0XHR0aGlzLl9zdGFibGUgPSBmYWxzZTtcblx0XHR0aGlzLl9fbG9ja3MuYWxsKys7XG5cdFx0aWYgKCByZWFzb24gKSB7XG5cdFx0XHR0aGlzLl9fbG9ja3NbcmVhc29uXSA9IHRoaXMuX19sb2Nrc1tyZWFzb25dIHx8IDA7XG5cdFx0XHR0aGlzLl9fbG9ja3NbcmVhc29uXSsrO1xuXHRcdH1cblx0fVxuXHRcblx0XG5cdC8qKlxuXHQgKiBTdGFiaWxpemUgdGhlIHNjb3BlIGlmIG5vIG1vcmUgbG9ja3MgcmVtYWluICh3YWl0IGZuKVxuXHQgKiBAcGFyYW0gcmVhc29uXG5cdCAqL1xuXHRyZWxlYXNlKCByZWFzb24gKSB7XG5cdFx0XG5cdFx0aWYgKCByZWFzb24gKSB7XG5cdFx0XHRpZiAoIHRoaXMuX19sb2Nrc1tyZWFzb25dID09IDAgKVxuXHRcdFx0XHRjb25zb2xlLmVycm9yKFwiUmVsZWFzZSBtb3JlIHRoYW4gbG9ja2luZyAhXCIsIHJlYXNvbik7XG5cdFx0XHR0aGlzLl9fbG9ja3NbcmVhc29uXSA9IHRoaXMuX19sb2Nrc1tyZWFzb25dIHx8IDA7XG5cdFx0XHR0aGlzLl9fbG9ja3NbcmVhc29uXS0tO1xuXHRcdH1cblx0XHRpZiAoICFyZWFzb24gJiYgdGhpcy5fX2xvY2tzLmFsbCA9PSAwIClcblx0XHRcdGNvbnNvbGUuZXJyb3IoXCJSZWxlYXNlIG1vcmUgdGhhbiBsb2NraW5nICFcIik7XG5cdFx0XG5cdFx0dGhpcy5fX2xvY2tzLmFsbC0tO1xuXHRcdGlmICggIXRoaXMuX19sb2Nrcy5hbGwgKSB7XG5cdFx0XHR0aGlzLl8uc3RhYmlsaXplclRNICYmIGNsZWFyVGltZW91dCh0aGlzLl8uc3RhYmlsaXplclRNKTtcblx0XHRcdFxuXHRcdFx0dGhpcy5fLnN0YWJpbGl6ZXJUTSA9IHNldFRpbWVvdXQoXG5cdFx0XHRcdGUgPT4ge1xuXHRcdFx0XHRcdHRoaXMuXy5zdGFiaWxpemVyVE0gPSBudWxsO1xuXHRcdFx0XHRcdGlmICggdGhpcy5fX2xvY2tzLmFsbCApXG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0dGhpcy5fLnByb3BhZ1RNICYmIGNsZWFyVGltZW91dCh0aGlzLl8ucHJvcGFnVE0pO1xuXHRcdFx0XHRcdHRoaXMuX3JldisrO1xuXHRcdFx0XHRcdHRoaXMuX3N0YWJsZSA9IHRydWU7XG5cdFx0XHRcdFx0dGhpcy5lbWl0KFwic3RhYmxlXCIsIHRoaXMpO1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdCF0aGlzLmRlYWQgJiYgdGhpcy5fcHJvcGFnKCk7Ly8gc3RhYmlsaXR5IGNhbiBpbmR1Y2UgZGVzdHJveVxuXHRcdFx0XHR9XG5cdFx0XHQpO1xuXHRcdH1cblx0XHRcblx0fVxuXHRcblx0LyoqXG5cdCAqIFByb3BhZyBzdG9yZXMgdXBkYXRlcyBiYXNpbmcgdGhlaXJzIGxhc3QgdXBkYXRlc1xuXHQgKi9cblx0cHJvcGFnKCkge1xuXHRcdHRoaXMuXy5wcm9wYWdUTSAmJiBjbGVhclRpbWVvdXQodGhpcy5fLnByb3BhZ1RNKTtcblx0XHR0aGlzLl8ucHJvcGFnVE0gPSBzZXRUaW1lb3V0KFxuXHRcdFx0ZSA9PiB7XG5cdFx0XHRcdHRoaXMuXy5wcm9wYWdUTSA9IG51bGw7XG5cdFx0XHRcdHRoaXMuX3Byb3BhZygpXG5cdFx0XHR9LCAyXG5cdFx0KTtcblx0fVxuXHRcblx0X3Byb3BhZygpIHtcblx0XHRpZiAoIHRoaXMuXy5mb2xsb3dlcnMubGVuZ3RoIClcblx0XHRcdHRoaXMuXy5mb2xsb3dlcnMuZm9yRWFjaCgoIHsgMDogb2JqLCAxOiBrZXksIDI6IGFzLCAzOiBsYXN0UmV2cywgMzogcmVtYXBzIH0gKSA9PiB7XG5cdFx0XHRcdGxldCBkYXRhID0gdGhpcy5nZXRVcGRhdGVzKGxhc3RSZXZzKTtcblx0XHRcdFx0aWYgKCAhZGF0YSApIHJldHVybjtcblx0XHRcdFx0aWYgKCB0eXBlb2Ygb2JqICE9IFwiZnVuY3Rpb25cIiApIHtcblx0XHRcdFx0XHQvL2NvbnNvbGUubG9nKFwic2V0U3RhdGUgXCIsb2JqLCBPYmplY3Qua2V5cyhkYXRhKSlcblx0XHRcdFx0XHRpZiAoIGFzICkgb2JqLnNldFN0YXRlKHsgW2FzXTogZGF0YSB9KTtcblx0XHRcdFx0XHRlbHNlIG9iai5zZXRTdGF0ZShkYXRhKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHRvYmooZGF0YSwgbGFzdFJldnMgJiYgWy4uLmxhc3RSZXZzXSB8fCBcIm5vIHJldnNcIik7XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gbGFzdFJldnMgJiZcblx0XHRcdFx0Ly8ga2V5LmZvckVhY2goaWQgPT4gKGxhc3RSZXZzW2lkXSA9IHRoaXMuc3RvcmVzW2lkXSAmJlxuXHRcdFx0XHQvLyB0aGlzLnN0b3Jlc1tpZF0uX3JldiB8fCAwKSk7XG5cdFx0XHR9KTtcblx0XHR0aGlzLmVtaXQoXCJ1cGRhdGVcIiwgdGhpcy5nZXRVcGRhdGVzKCkpO1xuXHR9XG5cdFxuXHQvKipcblx0ICogaXMgc3RhYmxlXG5cdCAqIEByZXR1cm5zIGJvb2xcblx0ICovXG5cdGlzU3RhYmxlKCkge1xuXHRcdHJldHVybiB0aGlzLl9zdGFibGU7XG5cdH1cblx0XG5cdF9hZGRDaGlsZCggY3R4ICkge1xuXHRcdHRoaXMuXy5jaGlsZFNjb3Blcy5wdXNoKGN0eCk7XG5cdFx0dGhpcy5fLnNlZW5DaGlsZHMrKztcblx0XHRsZXQgbGlzdHMgICAgID0ge1xuXHRcdFx0ICAgICdzdGFibGUnICAgICAgOiBzID0+IHtcblx0XHRcdFx0ICAgIHRoaXMuXy51blN0YWJsZUNoaWxkcy0tO1xuXHRcdFx0XHQgICAgaWYgKCAhdGhpcy5fLnVuU3RhYmxlQ2hpbGRzIClcblx0XHRcdFx0XHQgICAgdGhpcy5lbWl0KFwic3RhYmxlVHJlZVwiLCB0aGlzKVxuXHRcdFx0ICAgIH0sXG5cdFx0XHQgICAgJ3Vuc3RhYmxlJyAgICA6IHMgPT4ge1xuXHRcdFx0XHQgICAgdGhpcy5fLnVuU3RhYmxlQ2hpbGRzKys7XG5cdFx0XHRcdCAgICBpZiAoIDEgPT0gdGhpcy5fLnVuU3RhYmxlQ2hpbGRzIClcblx0XHRcdFx0XHQgICAgdGhpcy5lbWl0KFwidW5zdGFibGVUcmVlXCIsIHRoaXMpXG5cdFx0XHQgICAgfSxcblx0XHRcdCAgICAnc3RhYmxlVHJlZScgIDogcyA9PiB7XG5cdFx0XHRcdCAgICB0aGlzLl8udW5TdGFibGVDaGlsZHMtLTtcblx0XHRcdFx0ICAgIGlmICggIXRoaXMuXy51blN0YWJsZUNoaWxkcyApXG5cdFx0XHRcdFx0ICAgIHRoaXMuZW1pdChcInN0YWJsZVRyZWVcIiwgdGhpcylcblx0XHRcdCAgICB9LFxuXHRcdFx0ICAgICd1bnN0YWJsZVRyZWUnOiBzID0+IHtcblx0XHRcdFx0ICAgIHRoaXMuXy51blN0YWJsZUNoaWxkcysrO1xuXHRcdFx0XHQgICAgaWYgKCAxID09IHRoaXMuXy51blN0YWJsZUNoaWxkcyApXG5cdFx0XHRcdFx0ICAgIHRoaXMuZW1pdChcInVuc3RhYmxlVHJlZVwiLCB0aGlzKVxuXHRcdFx0ICAgIH0sXG5cdFx0XHQgICAgJ2Rlc3Ryb3knICAgICA6IGN0eCA9PiB7XG5cdFx0XHRcdCAgICBpZiAoIGN0eC5fLnVuU3RhYmxlQ2hpbGRzIClcblx0XHRcdFx0XHQgICAgdGhpcy5fLnVuU3RhYmxlQ2hpbGRzLS07XG5cdFx0XHRcdCAgICBpZiAoICFjdHguaXNTdGFibGUoKSApXG5cdFx0XHRcdFx0ICAgIHRoaXMuXy51blN0YWJsZUNoaWxkcy0tO1xuXHRcdFx0XHRcblx0XHRcdFx0ICAgIGlmICggIXRoaXMuXy51blN0YWJsZUNoaWxkcyApXG5cdFx0XHRcdFx0ICAgIHRoaXMuZW1pdChcInN0YWJsZVRyZWVcIiwgdGhpcylcblx0XHRcdCAgICB9XG5cdFx0ICAgIH0sXG5cdFx0ICAgIHdhc1N0YWJsZSA9IHRoaXMuXy51blN0YWJsZUNoaWxkcztcblx0XHQvLyFjdHguaXNTdGFibGUoKSAmJiBjb25zb2xlLndhcm4oJ2FkZCB1bnN0YWJsZSBjaGlsZCcpO1xuXHRcdCFjdHguaXNTdGFibGUoKSAmJiB0aGlzLl8udW5TdGFibGVDaGlsZHMrKztcblx0XHRjdHguXy51blN0YWJsZUNoaWxkcyAmJiB0aGlzLl8udW5TdGFibGVDaGlsZHMrKztcblx0XHR0aGlzLl8uY2hpbGRTY29wZXNMaXN0LnB1c2gobGlzdHMpO1xuXHRcdGlmICggIXdhc1N0YWJsZSAmJiB0aGlzLl8udW5TdGFibGVDaGlsZHMgKVxuXHRcdFx0dGhpcy5lbWl0KFwidW5zdGFibGVUcmVlXCIsIHRoaXMpXG5cdFx0Y3R4Lm9uKGxpc3RzKTtcblx0fVxuXHRcblx0X3JtQ2hpbGQoIGN0eCApIHtcblx0XHRsZXQgaSAgICAgICAgID0gdGhpcy5fLmNoaWxkU2NvcGVzLmluZGV4T2YoY3R4KSxcblx0XHQgICAgd2FzU3RhYmxlID0gdGhpcy5fLnVuU3RhYmxlQ2hpbGRzO1xuXHRcdGlmICggaSAhPSAtMSApIHtcblx0XHRcdHRoaXMuXy5jaGlsZFNjb3Blcy5zcGxpY2UoaSwgMSk7XG5cdFx0XHQhY3R4LmlzU3RhYmxlKCkgJiYgdGhpcy5fLnVuU3RhYmxlQ2hpbGRzLS07XG5cdFx0XHRjdHguXy51blN0YWJsZUNoaWxkcyAmJiB0aGlzLl8udW5TdGFibGVDaGlsZHMtLTtcblx0XHRcdGN0eC51bih0aGlzLl8uY2hpbGRTY29wZXNMaXN0LnNwbGljZShpLCAxKVswXSk7XG5cdFx0XHRpZiAoIHdhc1N0YWJsZSAmJiAhdGhpcy5fLnVuU3RhYmxlQ2hpbGRzIClcblx0XHRcdFx0dGhpcy5lbWl0KFwic3RhYmxlVHJlZVwiKVxuXHRcdH1cblx0fVxuXHRcblx0cmV0YWluKCByZWFzb24gKSB7XG5cdFx0dGhpcy5fX3JldGFpbnMuYWxsKys7XG5cdFx0Ly9jb25zb2xlLmxvZyhcInJldGFpblwiLCB0aGlzLl9pZCwgcmVhc29uKTtcblx0XHRpZiAoIHJlYXNvbiApIHtcblx0XHRcdHRoaXMuX19yZXRhaW5zW3JlYXNvbl0gPSB0aGlzLl9fcmV0YWluc1tyZWFzb25dIHx8IDA7XG5cdFx0XHR0aGlzLl9fcmV0YWluc1tyZWFzb25dKys7XG5cdFx0fVxuXHR9XG5cdFxuXHRkaXNwb3NlKCByZWFzb24gKSB7XG5cdFx0Ly9jb25zb2xlLmxvZyhcImRpc3Bvc2VcIiwgdGhpcy5faWQsIHJlYXNvbik7XG5cdFx0aWYgKCByZWFzb24gKSB7XG5cdFx0XHRpZiAoICF0aGlzLl9fcmV0YWluc1tyZWFzb25dIClcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiRGlzcG9zZSBtb3JlIHRoYW4gcmV0YWluaW5nIDogXCIgKyByZWFzb24pO1xuXHRcdFx0dGhpcy5fX3JldGFpbnNbcmVhc29uXS0tO1xuXHRcdH1cblx0XHRcblx0XHRpZiAoICF0aGlzLl9fcmV0YWlucy5hbGwgKVxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiRGlzcG9zZSBtb3JlIHRoYW4gcmV0YWluaW5nICFcIik7XG5cdFx0XG5cdFx0dGhpcy5fX3JldGFpbnMuYWxsLS07XG5cdFx0XG5cdFx0aWYgKCAhdGhpcy5fX3JldGFpbnMuYWxsICkge1xuXHRcdFx0Ly9jb25zb2xlLmxvZyhcImRpc3Bvc2UgZG8gZGVzdHJveSBcIiwgdGhpcy5faWQsIHRoaXMuX3BlcnNpc3RlbmNlVG0pO1xuXHRcdFx0aWYgKCB0aGlzLl8ucGVyc2lzdGVuY2VUbSApIHtcblx0XHRcdFx0dGhpcy5fLmRlc3Ryb3lUTSAmJiBjbGVhclRpbWVvdXQodGhpcy5fLmRlc3Ryb3lUTSk7XG5cdFx0XHRcdHRoaXMuXy5kZXN0cm95VE0gPSBzZXRUaW1lb3V0KFxuXHRcdFx0XHRcdGUgPT4ge1xuXHRcdFx0XHRcdFx0Ly90aGlzLnRoZW4ocyA9PiB7XG5cdFx0XHRcdFx0XHQhdGhpcy5fX3JldGFpbnMuYWxsICYmICF0aGlzLmRlYWQgJiYgdGhpcy5kZXN0cm95KClcblx0XHRcdFx0XHRcdC8vfSk7XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR0aGlzLl8ucGVyc2lzdGVuY2VUbVxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdC8vdGhpcy50aGVuKHMgPT5cblx0XHRcdFx0KCF0aGlzLl9fcmV0YWlucy5hbGwgJiYgIXRoaXMuZGVhZCAmJiB0aGlzLmRlc3Ryb3koKSlcblx0XHRcdFx0Ly8pO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRcblx0LyoqXG5cdCAqIG9yZGVyIGRlc3Ryb3kgb2YgbG9jYWwgc3RvcmVzXG5cdCAqL1xuXHRkZXN0cm95KCkge1xuXHRcdGxldCBjdHggPSB0aGlzLl8uX3Njb3BlO1xuXHRcdC8vY29uc29sZS53YXJuKFwiZGVzdHJveVwiLCB0aGlzLl9pZCk7XG5cdFx0dGhpcy5fLnN0YWJpbGl6ZXJUTSAmJiBjbGVhclRpbWVvdXQodGhpcy5fLnN0YWJpbGl6ZXJUTSk7XG5cdFx0dGhpcy5fLnByb3BhZ1RNICYmIGNsZWFyVGltZW91dCh0aGlzLl8ucHJvcGFnVE0pO1xuXHRcdE9iamVjdC5rZXlzKFxuXHRcdFx0dGhpcy5fLl9saXN0ZW5pbmdcblx0XHQpLmZvckVhY2goXG5cdFx0XHRpZCA9PiAoKGlkICE9PSBcIiRwYXJlbnRcIikgJiYgdGhpcy5fLl9zY29wZVtpZF0ucmVtb3ZlTGlzdGVuZXIodGhpcy5fLl9saXN0ZW5pbmdbaWRdKSlcblx0XHQpO1xuXHRcdHdoaWxlICggdGhpcy5fLl9taXhlZExpc3QubGVuZ3RoICkge1xuXHRcdFx0dGhpcy5fLl9taXhlZFswXS5yZW1vdmVMaXN0ZW5lcih0aGlzLl8uX21peGVkTGlzdC5zaGlmdCgpKTtcblx0XHRcdHRoaXMuXy5fbWl4ZWQuc2hpZnQoKS5kaXNwb3NlKFwibWl4ZWRUb1wiKTtcblx0XHR9XG5cdFx0Wy4uLnRoaXMuXy5mb2xsb3dlcnNdLm1hcChmb2xsb3dlciA9PiB0aGlzLnVuQmluZCguLi5mb2xsb3dlcikpO1xuXHRcdGZvciAoIGxldCBrZXkgaW4gY3R4IClcblx0XHRcdGlmICggIWlzLmZuKGN0eFtrZXldKSApIHtcblx0XHRcdFx0aWYgKCBrZXkgPT0gXCIkcGFyZW50XCIgKSBjb250aW51ZTtcblx0XHRcdFx0IWN0eFtrZXldLl9hdXRvRGVzdHJveSAmJiBjdHhba2V5XS5kaXNwb3NlKFwic2NvcGVkXCIpO1xuXHRcdFx0fVxuXHRcdGlmICggdGhpcy5fLl9wYXJlbnRMaXN0ICkge1xuXHRcdFx0dGhpcy5wYXJlbnQuX3JtQ2hpbGQodGhpcyk7XG5cdFx0XHR0aGlzLnBhcmVudC5yZW1vdmVMaXN0ZW5lcih0aGlzLl8uX3BhcmVudExpc3QpO1xuXHRcdFx0dGhpcy5wYXJlbnQuZGlzcG9zZShcImlzTXlQYXJlbnRcIik7XG5cdFx0XHR0aGlzLl8uX3BhcmVudExpc3QgPSBudWxsO1xuXHRcdH1cblx0XHR0aGlzLmRlYWQgPSB0cnVlO1xuXHRcdHRoaXMuZW1pdChcImRlc3Ryb3lcIiwgdGhpcyk7XG5cdFx0XG5cdFx0XG5cdFx0Ly9pZiAoICF0aGlzLl8uaXNMb2NhbElkIClcblx0XHRkZWxldGUgb3BlblNjb3Blc1t0aGlzLl9pZF07XG5cdFx0XG5cdFx0Ly90aGlzLl8gPSBudWxsO1xuXHRcdFxuXHR9XG59XG5cblxuaXMucnNTY29wZSA9IGZ1bmN0aW9uICggb2JqICkge1xuXHRyZXR1cm4gb2JqIGluc3RhbmNlb2YgU2NvcGVcbn1cblxuaXMucnNTY29wZUNsYXNzID0gZnVuY3Rpb24gKCBvYmogKSB7XG5cdHJldHVybiBTY29wZS5pc1Byb3RvdHlwZU9mKG9iaikgfHwgb2JqID09PSBTY29wZVxufVxuZXhwb3J0IGRlZmF1bHQgU2NvcGU7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1Njb3BlLmpzIiwidmFyIGlzID0gcmVxdWlyZSgnaXMnKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIC4uLmlzXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbHMvaXMuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImlzXCJcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGlzID0gcmVxdWlyZSgnLi9pcycpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHdhbGtuU2V0KCBvYmosIHBhdGgsIHZhbHVlLCBzdGFjayApIHtcclxuICAgIGlmICggaXMuc3RyaW5nKHBhdGgpIClcclxuICAgICAgICBwYXRoID0gcGF0aC5zcGxpdCgnLicpO1xyXG4gICAgaWYgKCAhcGF0aC5sZW5ndGggKVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIGVsc2UgaWYgKCBwYXRoLmxlbmd0aCA9PSAxIClcclxuICAgICAgICByZXR1cm4gb2JqWyBwYXRoWyAwIF0gXSA9IHN0YWNrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFsgLi4uKCBvYmpbIHBhdGhbIDAgXSBdIHx8IFtdICksIHZhbHVlIF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdmFsdWU7XHJcbiAgICBlbHNlXHJcbiAgICAgICAgcmV0dXJuIHdhbGtuU2V0KFxyXG4gICAgICAgICAgICBvYmpbIHBhdGhbIDAgXSBdID1cclxuICAgICAgICAgICAgICAgIG9ialsgcGF0aFsgMCBdIF0gfHwge30sXHJcbiAgICAgICAgICAgIHBhdGguc2xpY2UoMSksXHJcbiAgICAgICAgICAgIHZhbHVlLCBzdGFja1xyXG4gICAgICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB3YWxrbkdldCggb2JqLCBwYXRoLCBpc0tleSApIHtcclxuICAgIGlmICggaXMuc3RyaW5nKHBhdGgpIClcclxuICAgICAgICBwYXRoID0gcGF0aC5zcGxpdCgnLicpO1xyXG4gICAgcmV0dXJuIHBhdGgubGVuZ3RoXHJcbiAgICAgICAgICAgPyBvYmpbIHBhdGhbIDAgXSBdICYmIHdhbGtuR2V0KG9ialsgcGF0aFsgMCBdIF0sIHBhdGguc2xpY2UoMSkpXHJcbiAgICAgICAgICAgOiBvYmo7XHJcbn1cclxuXHJcbi8vQHRvZG9cclxuZXhwb3J0IGZ1bmN0aW9uIGtleVdhbGtuU2V0KCBvYmosIHBhdGgsIHZhbHVlLCBzdGFjayApIHtcclxuICAgIGlmICggaXMuc3RyaW5nKHBhdGgpIClcclxuICAgICAgICBwYXRoID0gcGF0aC5zcGxpdCgvKFxcPnxcXC8pL2lnKS5maWx0ZXIodiA9PiAoIHYgIT09ICc+JyAmJiB2ICkpO1xyXG4gICAgcmV0dXJuIHdhbGtuU2V0KG9iaiwgcGF0aCwgdmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24ga2V5V2Fsa25HZXQoIG9iaiwgcGF0aCwgaXNLZXkgKSB7XHJcbiAgICBpZiAoIGlzLnN0cmluZyhwYXRoKSApXHJcbiAgICAgICAgcGF0aCA9IHBhdGguc3BsaXQoLyhcXD58XFwvKS9pZykuZmlsdGVyKHYgPT4gKCB2ICE9PSAnPicgJiYgdiApKTtcclxuICAgIHJldHVybiBwYXRoLmxlbmd0aFxyXG4gICAgICAgICAgID8gb2JqWyBwYXRoWyAwIF0gXSAmJiB3YWxrbkdldChvYmpbIHBhdGhbIDAgXSBdLCBwYXRoLnNsaWNlKDEpKVxyXG4gICAgICAgICAgIDogb2JqO1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWxzL3V0aWxzLmpzIiwiLypcbiAqIENvcHlyaWdodCAoYykgIDIwMTggV2lzZSBXaWxkIFdlYiAuXG4gKlxuICogIE1JVCBMaWNlbnNlXG4gKiAgXG4gKiAgUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqICBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiAgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKiAgXG4gKiAgVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG4gKiAgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqICBcbiAqICBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiAgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiAgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiAgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiAgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcbiAqICBTT0ZUV0FSRS5cbiAqICBcbiAqIEBhdXRob3IgOiBOYXRoYW5hZWwgQnJhdW5cbiAqIEBjb250YWN0IDogY2FpcGlsYWJzQGdtYWlsLmNvbVxuICovXG52YXIgaXMgPSByZXF1aXJlKCdpcycpO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW1pdHRlciB7XG4gICAgX2V2ZW50cyA9IHt9O1xuICAgIFxuICAgIG9uKCBldnQsIGNiICkge1xuICAgICAgICBpZiAoICFpcy5zdHJpbmcoZXZ0KSAmJiBldnQgKVxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKGV2dCkuZm9yRWFjaChrID0+IHRoaXMub24oaywgZXZ0W2tdKSk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9ldmVudHNbZXZ0XSA9IHRoaXMuX2V2ZW50c1tldnRdIHx8IFtdO1xuICAgICAgICB0aGlzLl9ldmVudHNbZXZ0XS5wdXNoKGNiKTtcbiAgICAgICAgXG4gICAgfVxuICAgIFxuICAgIHVuKCBldnQsIGNiICkge1xuICAgICAgICBpZiAoICFpcy5zdHJpbmcoZXZ0KSAmJiBldnQgKVxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKGV2dCkuZm9yRWFjaChrID0+IHRoaXMudW4oaywgZXZ0W2tdKSk7XG4gICAgICAgIFxuICAgICAgICBpZiAoICF0aGlzLl9ldmVudHNbZXZ0XSApIHJldHVybjtcbiAgICAgICAgdmFyIGkgPSB0aGlzLl9ldmVudHNbZXZ0XS5pbmRleE9mKGNiKTtcbiAgICAgICAgdGhpcy5fZXZlbnRzW2V2dF0uc3BsaWNlKGksIDEpO1xuICAgIH1cbiAgICBcbiAgICBlbWl0KCBldnQsIC4uLmFyZ3ogKSB7XG4gICAgICAgIGlmICggIXRoaXMuX2V2ZW50c1tldnRdICkgcmV0dXJuO1xuICAgICAgICBsZXQgbGlzdHMgPSBbLi4udGhpcy5fZXZlbnRzW2V2dF1dO1xuICAgICAgICBcbiAgICAgICAgZm9yICggdmFyIGkgPSAwOyBpIDwgbGlzdHMubGVuZ3RoOyBpKysgKVxuICAgICAgICAgICAgbGlzdHNbaV0oLi4uYXJneilcbiAgICB9XG4gICAgXG4gICAgYWRkTGlzdGVuZXIoKSB7XG4gICAgICAgIHRoaXMub24oLi4uYXJndW1lbnRzKTtcbiAgICB9XG4gICAgXG4gICAgcmVtb3ZlTGlzdGVuZXIoKSB7XG4gICAgICAgIHRoaXMudW4oLi4uYXJndW1lbnRzKTtcbiAgICB9XG4gICAgXG4gICAgcmVtb3ZlQWxsTGlzdGVuZXJzKCkge1xuICAgICAgICB0aGlzLl9ldmVudHMgPSB7fTtcbiAgICB9XG4gICAgXG4gICAgb25jZSggZXZ0LCBjYiApIHtcbiAgICAgICAgbGV0IGZuO1xuICAgICAgICB0aGlzLm9uKGV2dCwgZm4gPSAoIC4uLmFyZ3ogKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnVuKGV2dCwgZm4pO1xuICAgICAgICAgICAgY2IoLi4uYXJneilcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIFxuICAgIFxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlscy9FbWl0dGVyLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2hvcnRpZFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInNob3J0aWRcIlxuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxuICogQ29weXJpZ2h0IChjKSAgMjAxOCBXaXNlIFdpbGQgV2ViIC5cbiAqXG4gKiAgTUlUIExpY2Vuc2VcbiAqXG4gKiAgUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqICBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiAgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuICogIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqICBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqICBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqICBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiAgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqICBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuICogIFNPRlRXQVJFLlxuICpcbiAqIEBhdXRob3IgOiBOYXRoYW5hZWwgQnJhdW5cbiAqIEBjb250YWN0IDogY2FpcGlsYWJzQGdtYWlsLmNvbVxuICovXG5cbnZhciBpcyAgICAgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi91dGlscy9pcycpLFxuICAgIFNjb3BlICAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL1Njb3BlJyksXG4gICAgeyBrZXlXYWxrblNldCwga2V5V2Fsa25HZXQgfSA9IHJlcXVpcmUoJy4vdXRpbHMvdXRpbHMnKSxcbiAgICBFdmVudEVtaXR0ZXIgICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi91dGlscy9FbWl0dGVyJyksXG4gICAgVGFza1NlcXVlbmNlciAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vdXRpbHMvVGFza1NlcXVlbmNlcicpLFxuICAgIHNob3J0aWQgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlKCdzaG9ydGlkJyksXG4gICAgb2JqUHJvdG8gICAgICAgICAgICAgICAgICAgICA9IE9iamVjdC5nZXRQcm90b3R5cGVPZih7fSk7XG5cbmNsYXNzIFN0b3JlIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcblx0Ly9zdGF0aWMgdXNlICAgICAgICAgICAgICAgICAgPSBbXTsvLyBvdmVycmlkYWJsZSBsaXN0IG9mIHNvdXJjZSBzdG9yZXNcblx0c3RhdGljIGZvbGxvdzsvLyBvdmVycmlkYWJsZSBsaXN0IG9mIHN0b3JlIHRoYXQgd2lsbCBhbGxvdyBwdXNoIGlmIHVwZGF0ZWRcblx0c3RhdGljIHJlcXVpcmU7XG5cdHN0YXRpYyBzdGF0aWNTY29wZSAgICAgICAgICA9IG5ldyBTY29wZSh7fSwgeyBpZDogXCJzdGF0aWNcIiB9KTtcblx0c3RhdGljIHN0YXRlICAgICAgICAgICAgICAgID0gdW5kZWZpbmVkOy8vIGRlZmF1bHQgc3RhdGVcblx0LyoqXG5cdCAqIGlmIHJldGFpbiBnb2VzIHRvIDAgOlxuXHQgKiBmYWxzZSB0byBub3QgZGVzdHJveSxcblx0ICogMCB0byBzeW5jIGF1dG8gZGVzdHJveVxuXHQgKiBNcyB0byBhdXRvZGVzdHJveSBhZnRlciB0bSBtcyBpZiBubyByZXRhaW4gaGFzIGJlZW4gY2FsbGVkXG5cdCAqIEB0eXBlIHtib29sZWFufEludH1cblx0ICovXG5cdCAgICAgICBzdGF0aWMgcGVyc2lzdGVuY2VUbSA9IGZhbHNlO1xuXHRcblx0LyoqXG5cdCAqIENvbnN0cnVjdG9yLCB3aWxsIGJ1aWxkIGEgcmVzY29wZSBzdG9yZVxuXHQgKlxuXHQgKiAoc2NvcGUsIHtyZXF1aXJlLHVzZSxhcHBseSxzdGF0ZSwgZGF0YX0pXG5cdCAqIChzY29wZSlcblx0ICpcblx0ICogQHBhcmFtIHNjb3BlIHtvYmplY3R9IHNjb3BlIHdoZXJlIHRvIGZpbmQgdGhlIG90aGVyIHN0b3JlcyAoZGVmYXVsdCA6IHN0YXRpY1xuXHQgKiAgICAgc3RhdGljU2NvcGUgKVxuXHQgKiBAcGFyYW0ga2V5cyB7QXJyYXl9IChwYXNzZWQgdG8gU3RvcmU6Om1hcCkgRXggOiBbXCJzZXNzaW9uXCIsIFwib3RoZXJOYW1lZFN0b3JlOmtleVwiLFxuXHQgKiAgICAgb3RoZXJTdG9yZS5hcyhcIm90aGVyS2V5XCIpXVxuXHQgKi9cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0XHR2YXIgYXJneiAgICAgICAgID0gWy4uLmFyZ3VtZW50c10sXG5cdFx0ICAgIF9zdGF0aWMgICAgICA9IHRoaXMuY29uc3RydWN0b3IsXG5cdFx0ICAgIHNjb3BlICAgICAgICA9IGFyZ3pbMF0gaW5zdGFuY2VvZiBTY29wZVxuXHRcdCAgICAgICAgICAgICAgICAgICA/IGFyZ3ouc2hpZnQoKVxuXHRcdCAgICAgICAgICAgICAgICAgICA6IF9zdGF0aWMuc2NvcGUgPyBTY29wZS5nZXRTY29wZShfc3RhdGljLnNjb3BlKVxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBpcy5zdHJpbmcoYXJnelswXSlcblx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBTY29wZS5nZXRTY29wZShhcmd6LnNoaWZ0KCkpXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3N0YXRpYy5zdGF0aWNTY29wZSxcblx0XHQgICAgY2ZnICAgICAgICAgID0gYXJnelswXSAmJiAhaXMuYXJyYXkoYXJnelswXSkgJiYgIWlzLnN0cmluZyhhcmd6WzBdKVxuXHRcdCAgICAgICAgICAgICAgICAgICA/IGFyZ3ouc2hpZnQoKVxuXHRcdCAgICAgICAgICAgICAgICAgICA6IHt9LFxuXHRcdCAgICB0YXNrUXVldWUgICAgPSBpcy5hcnJheShhcmd6WzBdKSA/IGFyZ3ouc2hpZnQoKSA6IG51bGwsXG5cdFx0ICAgIG5hbWUgICAgICAgICA9IGNmZy5uYW1lIHx8IF9zdGF0aWMubmFtZSxcblx0XHQgICAgd2F0Y2hzICAgICAgID0gY2ZnLnVzZSB8fCBbXSxcblx0XHQgICAgYXBwbHkgICAgICAgID0gY2ZnLmFwcGx5IHx8IG51bGwsXG5cdFx0ICAgIGluaXRpYWxTdGF0ZSA9IF9zdGF0aWMuc3RhdGUgfHwgX3N0YXRpYy5pbml0aWFsU3RhdGUgfHwgX3N0YXRpYy5kZWZhdWx0U3RhdGUsXG5cdFx0ICAgIGFwcGxpZWQ7XG5cdFx0XG5cdFx0dGhpcy5fdWlkID0gY2ZnLl91aWQgfHwgc2hvcnRpZC5nZW5lcmF0ZSgpO1xuXHRcdFxuXHRcdHRoaXMuX19yZXRhaW5zICAgID0geyBhbGw6IDAgfTtcblx0XHR0aGlzLl9fbG9ja3MgICAgICA9IHsgYWxsOiAwIH07XG5cdFx0dGhpcy5fb25TdGFiaWxpemUgPSBbXTtcblx0XHRcblx0XHQvLyBhdXRvRGVzdHJveVRtXG5cdFx0dGhpcy5fYXV0b0Rlc3Ryb3kgICA9ICEhdGhpcy5fcGVyc2lzdGVuY2VUbTtcblx0XHR0aGlzLl9wZXJzaXN0ZW5jZVRtID0gY2ZnLnBlcnNpc3RlbmNlVG0gfHwgX3N0YXRpYy5wZXJzaXN0ZW5jZVRtIHx8IChjZmcuYXV0b0Rlc3Ryb3kgfHwgX3N0YXRpYy5hdXRvRGVzdHJveSkgJiYgNTtcblx0XHR0aGlzLl9jZmcgICAgICAgICAgID0gY2ZnO1xuXHRcdGlmICggY2ZnICYmIGNmZy5vbiApIHtcblx0XHRcdHRoaXMub24oY2ZnLm9uKTtcblx0XHR9XG5cdFx0XG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0XHRcblx0XHRpZiAoIHNjb3BlLnN0b3JlcyApIHtcblx0XHRcdHRoaXMuc2NvcGVPYmogPSBzY29wZTtcblx0XHRcdHRoaXMuc2NvcGUgICAgPSBzY29wZS5zdG9yZXM7XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0dGhpcy5zY29wZU9iaiA9IG5ldyBTY29wZShzY29wZSk7XG5cdFx0XHR0aGlzLnNjb3BlICAgID0gc2NvcGUuc3RvcmVzO1xuXHRcdH1cblx0XHRcblx0XHQvLyBzdGFuZGFyZGl6ZWQgc2NvcGUgYWNjZXNzXG5cdFx0dGhpcy4kc2NvcGUgICAgPSB0aGlzLnNjb3BlT2JqO1xuXHRcdHRoaXMuJHN0b3JlcyAgID0gdGhpcy5zY29wZU9iai5zdG9yZXM7XG5cdFx0dGhpcy4kYWN0aW9ucyAgPSB0aGlzLnNjb3BlT2JqLmFjdGlvbnM7XG5cdFx0dGhpcy4kZGlzcGF0Y2ggPSB0aGlzLnNjb3BlT2JqLmRpc3BhdGNoLmJpbmQodGhpcy5zY29wZU9iaik7XG5cdFx0XG5cdFx0dGhpcy5fcmV2ICAgICA9IHRoaXMuY29uc3RydWN0b3IuX3JldiB8fCAwO1xuXHRcdHRoaXMuX3JldnMgICAgPSB7fTtcblx0XHR0aGlzLnN0b3JlcyAgID0ge307XG5cdFx0dGhpcy5fcmVxdWlyZSA9IFtdO1xuXHRcdHRoaXMuX3NvdXJjZXMgPSBbbmFtZV07XG5cdFx0XG5cdFx0aWYgKCBpcy5hcnJheShfc3RhdGljLnVzZSkgKSB7XG5cdFx0XHR0aGlzLl91c2UgPSBbLi4ud2F0Y2hzLCAuLi4oX3N0YXRpYy51c2UgfHwgW10pLm1hcChcblx0XHRcdFx0a2V5ID0+IHtcblx0XHRcdFx0XHRsZXQgcmVmID0ga2V5Lm1hdGNoKC9eKFxcIT8pKFteXFw6XSopKD86XFw6KC4qKSk/JC8pO1xuXHRcdFx0XHRcdGlmICggcmVmWzFdICkge1xuXHRcdFx0XHRcdFx0bGV0IHJlZjIgPSByZWZbMl0uc3BsaXQoJy4nKTtcblx0XHRcdFx0XHRcdHRoaXMuX3JlcXVpcmUucHVzaChyZWZbM10gfHwgcmVmMltyZWYyLmxlbmd0aCAtIDFdKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmV0dXJuIHJlZlsyXTtcblx0XHRcdFx0fVxuXHRcdFx0KV07XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0dGhpcy5fdXNlID0gWy4uLndhdGNocywgLi4uKFxuXHRcdFx0XHRfc3RhdGljLnVzZSA/IE9iamVjdC5rZXlzKF9zdGF0aWMudXNlKVxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgIC5tYXAoXG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICBrZXkgPT4ge1xuXHRcdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICBsZXQgcmVmID0ga2V5Lm1hdGNoKC9eKFxcIT8pKC4qKSQvKTtcblx0XHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgcmVmWzFdICYmIHRoaXMuX3JlcXVpcmUucHVzaChfc3RhdGljLnVzZVtrZXldKTtcblx0XHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlZlsyXSArICgoX3N0YXRpYy51c2Vba2V5XSA9PT0gdHJ1ZSlcblx0XHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICcnXG5cdFx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnOicgKyBfc3RhdGljLnVzZVtrZXldKTtcblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgIH1cblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICApIDogW11cblx0XHRcdCldO1xuXHRcdH1cblx0XHRcblx0XHRpZiAoIF9zdGF0aWMucmVxdWlyZSApXG5cdFx0XHR0aGlzLl9yZXF1aXJlLnB1c2goLi4uX3N0YXRpYy5yZXF1aXJlKTtcblx0XHRpZiAoIGNmZy5yZXF1aXJlIClcblx0XHRcdHRoaXMuX3JlcXVpcmUucHVzaCguLi5jZmcucmVxdWlyZSk7XG5cdFx0XG5cdFx0dGhpcy5fZm9sbG93ZXJzID0gW107XG5cdFx0dGhpcy5fY2hhbmdlc1NXID0gaW5pdGlhbFN0YXRlIHx8IHt9O1xuXHRcdHRoaXMuc3RhdGUgICAgICA9IGluaXRpYWxTdGF0ZSAmJiB7fTtcblx0XHRpZiAoIGFwcGx5IClcblx0XHRcdHRoaXMuYXBwbHkgPSBhcHBseTtcblx0XHRcblx0XHQvKipcblx0XHQgKiBJbml0aWFsIHN0YXRlIGlzbid0IGZ1bGx5IGluaXRpYWxpemVkICggY2hpbGRzIGNvbnN0cnVjdG9ycyBjYW4gc2V0IGl0IClcblx0XHQgKiBTY29wZSBiYXNlZCBpbnN0YW5jZSBoYXZlIHRhc2tRdWV1ZSB0byBkZWxheSBpbml0IHN5bmNocm9ub3VzbHksIGlmIG5vdFxuXHRcdCAqIHByZXNlbnQgd2UgdXNlIHNldFRpbWVvdXRcblx0XHQgKi9cblx0XHRpZiAoIHRhc2tRdWV1ZSApIHtcblx0XHRcdHRhc2tRdWV1ZS5wdXNoKHRoaXMuX2FmdGVyQ29uc3RydWN0b3IuYmluZCh0aGlzKSlcblx0XHR9XG5cdFx0ZWxzZVxuXHRcdFx0c2V0VGltZW91dCh0aGlzLl9hZnRlckNvbnN0cnVjdG9yLmJpbmQodGhpcykpXG5cdH1cblx0XG5cdC8qKlxuXHQgKiBHZXQgdGhlIGluY29taW5nIHN0YXRlICggZm9yIGltbWVkaWF0ZSBzdGF0ZSByZWxhdGl2ZSBhY3Rpb25zIClcblx0ICogQHJldHVybnMge3t9fCp9XG5cdCAqL1xuXHRnZXQgbmV4dFN0YXRlKCkge1xuXHRcdHJldHVybiB0aGlzLl9jaGFuZ2VzU1cgJiYgeyAuLi50aGlzLnN0YXRlLCAuLi50aGlzLl9jaGFuZ2VzU1cgfSB8fCB0aGlzLnN0YXRlO1xuXHR9XG5cdFxuXHRfYWZ0ZXJDb25zdHJ1Y3RvcigpIHtcblx0XHRsZXQgY2ZnICAgICAgICAgID0gdGhpcy5fY2ZnLFxuXHRcdCAgICBfc3RhdGljICAgICAgPSB0aGlzLmNvbnN0cnVjdG9yLFxuXHRcdCAgICBzbmFwc2hvdCAgICAgPSB0aGlzLnJlc3RvcmUodW5kZWZpbmVkLCB0cnVlKSxcblx0XHQgICAgaW5pdGlhbFN0YXRlID0gdGhpcy5zdGF0ZSxcblx0XHQgICAgaW5pdGlhbERhdGEgID0gdGhpcy5kYXRhLFxuXHRcdCAgICBhcHBsaWVkO1xuXHRcdHtcblx0XHRcdFxuXHRcdFx0aWYgKCBpbml0aWFsRGF0YSApXG5cdFx0XHRcdHRoaXMuZGF0YSA9IGluaXRpYWxEYXRhO1xuXHRcdFx0ZWxzZSBpZiAoIF9zdGF0aWMuZGF0YSAhPT0gdW5kZWZpbmVkIClcblx0XHRcdFx0dGhpcy5kYXRhID0geyAuLi5fc3RhdGljLmRhdGEgfTtcblx0XHRcdGVsc2UgaWYgKCBjZmcuaGFzT3duUHJvcGVydHkoXCJkYXRhXCIpIClcblx0XHRcdFx0dGhpcy5kYXRhID0gY2ZnLmRhdGE7XG5cdFx0XHRcblx0XHRcdGlmICggY2ZnLmhhc093blByb3BlcnR5KFwic3RhdGVcIikgJiYgY2ZnLnN0YXRlICE9PSB1bmRlZmluZWQgKVxuXHRcdFx0XHRpbml0aWFsU3RhdGUgPSB7IC4uLmluaXRpYWxTdGF0ZSwgLi4uY2ZnLnN0YXRlIH07XG5cdFx0XHRcblx0XHRcdGlmICggdGhpcy5kYXRhID09PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRcdGlmICggaW5pdGlhbFN0YXRlIHx8IHRoaXMuX3VzZS5sZW5ndGggKSB7Ly8gc3luYyBhcHBseVxuXHRcdFx0XHRcdHRoaXMuX2NoYW5nZXNTVyA9IHtcblx0XHRcdFx0XHRcdC4uLnRoaXMuX2NoYW5nZXNTVyxcblx0XHRcdFx0XHRcdC4uLihpbml0aWFsU3RhdGUgfHwge30pLFxuXHRcdFx0XHRcdFx0Li4udGhpcy4kc2NvcGUubWFwKHRoaXMsIHRoaXMuX3VzZSlcblx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgICAgICA9IHt9O1xuXHRcdFx0XHRcdGlmICggdGhpcy5zaG91bGRBcHBseSh0aGlzLl9jaGFuZ2VzU1cpICYmIHRoaXMuZGF0YSA9PT0gdW5kZWZpbmVkICkge1xuXHRcdFx0XHRcdFx0dGhpcy5kYXRhICAgICAgID0gdGhpcy5hcHBseSh0aGlzLmRhdGEsIHRoaXMuX2NoYW5nZXNTVywgdGhpcy5fY2hhbmdlc1NXKTtcblx0XHRcdFx0XHRcdGFwcGxpZWQgICAgICAgICA9IHRydWU7XG5cdFx0XHRcdFx0XHR0aGlzLnN0YXRlICAgICAgPSB0aGlzLl9jaGFuZ2VzU1c7XG5cdFx0XHRcdFx0XHR0aGlzLl9jaGFuZ2VzU1cgPSB7fTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHRhcHBsaWVkICAgICAgICAgPSB0cnVlO1xuXHRcdFx0XHR0aGlzLnN0YXRlICAgICAgPSB7Ly8gYXNzdW1lIHRoaXMgc3RhdGUgaXMgc3luYyB3aXRoIGluaXRpYWwgZGF0YVxuXHRcdFx0XHRcdC4uLnRoaXMuX2NoYW5nZXNTVyxcblx0XHRcdFx0XHQuLi4oaW5pdGlhbFN0YXRlIHx8IHt9KSxcblx0XHRcdFx0XHQuLi50aGlzLiRzY29wZS5tYXAodGhpcywgdGhpcy5fdXNlKVxuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuX2NoYW5nZXNTVyA9IHt9O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAoICh0aGlzLmRhdGEgIT09IHVuZGVmaW5lZCB8fCBhcHBsaWVkKSAmJiAhdGhpcy5fX2xvY2tzLmFsbCApIHtcblx0XHRcdHRoaXMuX3N0YWJsZSA9IHRydWU7XG5cdFx0XHR0aGlzLl9yZXYrKztcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHR0aGlzLl9zdGFibGUgPSBmYWxzZTtcblx0XHRcdGlmICggIV9zdGF0aWMubWFuYWdlZCAmJiAhdGhpcy5zdGF0ZSAmJiAoIXRoaXMuX3VzZSB8fCAhdGhpcy5fdXNlLmxlbmd0aCkgKSB7XG5cdFx0XHRcdGNvbnNvbGUud2FybihcIlJlU2NvcGUgc3RvcmUgJ1wiLCB0aGlzLm5hbWUsIFwiJyBoYXZlIG5vIGluaXRpYWwgZGF0YSwgc3RhdGUgb3IgdXNlLiBJdCBjYW4ndCBzdGFiaWxpemUuLi5cIik7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdCF0aGlzLl9zdGFibGUgJiYgdGhpcy5lbWl0KCd1bnN0YWJsZScsIHRoaXMuc3RhdGUpO1xuXHRcdFxuXHR9XG5cdFxuXHQvKipcblx0ICogT3ZlcnJpZGFibGUgbWV0aG9kIHRvIGtub3cgaWYgYSBkYXRhIGNoYW5nZSBzaG91bGQgYmUgcHJvcGFnIHRvIHRoZSBsaXN0ZW5pbmdcblx0ICogc3RvcmVzICYgY29tcG9uZW50c1xuXHQgKi9cblx0c2hvdWxkUHJvcGFnKCBuRGF0YXMgKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblx0XG5cdGhhc0RhdGFDaGFuZ2UoIG5EYXRhcyApIHtcblx0XHR2YXIgX3N0YXRpYyA9IHRoaXMuY29uc3RydWN0b3IsIHIsXG5cdFx0ICAgIGNEYXRhcyAgPSB0aGlzLmRhdGE7XG5cdFx0ciAgICAgICAgICAgPSAhY0RhdGFzICYmIG5EYXRhcyB8fCBjRGF0YXMgIT09IG5EYXRhcztcblx0XHQhciAmJiBjRGF0YXMgJiYgT2JqZWN0LmtleXMoY0RhdGFzKS5mb3JFYWNoKFxuXHRcdFx0KCBrZXkgKSA9PiB7XG5cdFx0XHRcdHIgPSByIHx8IChuRGF0YXNcblx0XHRcdFx0ICAgICAgICAgID8gY0RhdGFzW2tleV0gIT09IG5EYXRhc1trZXldXG5cdFx0XHRcdCAgICAgICAgICA6IGNEYXRhcyAmJiBjRGF0YXNba2V5XSlcblx0XHRcdH1cblx0XHQpO1xuXHRcdCFyICYmIG5EYXRhcyAmJiBPYmplY3Qua2V5cyhuRGF0YXMpLmZvckVhY2goXG5cdFx0XHQoIGtleSApID0+IHtcblx0XHRcdFx0ciA9IHIgfHwgKG5EYXRhc1xuXHRcdFx0XHQgICAgICAgICAgPyBjRGF0YXNba2V5XSAhPT0gbkRhdGFzW2tleV1cblx0XHRcdFx0ICAgICAgICAgIDogY0RhdGFzICYmIGNEYXRhc1trZXldKVxuXHRcdFx0fVxuXHRcdCk7XG5cdFx0cmV0dXJuIHI7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBPdmVycmlkYWJsZSBtZXRob2QgdG8ga25vdyBpZiBhIHN0YXRlIGNoYW5nZSBzaG91bGQgYmUgYXBwbGllZFxuXHQgKi9cblx0c2hvdWxkQXBwbHkoIHN0YXRlID0gdGhpcy5zdGF0ZSApIHtcblx0XHR2YXIgX3N0YXRpYyA9IHRoaXMuY29uc3RydWN0b3I7XG5cdFx0XG5cdFx0cmV0dXJuIChcblx0XHRcdCEhdGhpcy5pc0NvbXBsZXRlKHN0YXRlKVxuXHRcdCkgJiYgKGlzLmFycmF5KF9zdGF0aWMuZm9sbG93KVxuXHRcdCAgICAgID8gX3N0YXRpYy5mb2xsb3dcblx0XHQgICAgICAgICAgICAgICAucmVkdWNlKCggciwgaSApID0+IChyIHx8IHN0YXRlICYmIHN0YXRlW2ldKSwgZmFsc2UpXG5cdFx0ICAgICAgOiBfc3RhdGljLmZvbGxvd1xuXHRcdCAgICAgICAgPyBPYmplY3Qua2V5cyhfc3RhdGljLmZvbGxvdylcblx0XHQgICAgICAgICAgICAgICAgLnJlZHVjZSgoIHIsIGkgKSA9PiAoXG5cdFx0XHQgICAgICAgICAgICAgICAgclxuXHRcdFx0ICAgICAgICAgICAgICAgIHx8IHN0YXRlICYmIGlzLmZuKF9zdGF0aWMuZm9sbG93W2ldKSAmJiBfc3RhdGljLmZvbGxvd1tpXS5jYWxsKHRoaXMsIHN0YXRlW2ldKVxuXHRcdFx0ICAgICAgICAgICAgICAgIHx8IF9zdGF0aWMuZm9sbG93W2ldICYmIHN0YXRlW2ldICE9PSB0aGlzLnN0YXRlW2ldXG5cdFx0ICAgICAgICAgICAgICAgICksIGZhbHNlKSA6IHRydWVcblx0XHQpO1xuXHR9XG5cdFxuXHQvKipcblx0ICogT3ZlcnJpZGFibGUgYXBwbGllciAvIHJlbWFwcGVyXG5cdCAqIElmIHN0YXRlIG9yIGxhc3RQdWJsaWNTdGF0ZSBhcmUgc2ltcGxlIGhhc2ggbWFwcyBhcHBseSB3aWxsIHJldHVybiB7Li4uZGF0YSxcblx0ICogLi4uc3RhdGV9IGlmIG5vdCBpdCB3aWxsIHJldHVybiB0aGUgbGFzdCBwcml2YXRlIHN0YXRlXG5cdCAqIEBwYXJhbSBkYXRhXG5cdCAqIEBwYXJhbSBzdGF0ZVxuXHQgKiBAcmV0dXJucyB7Kn1cblx0ICovXG5cdGFwcGx5KCBkYXRhLCBzdGF0ZSwgY2hhbmdlcyApIHtcblx0XHRzdGF0ZSA9IHN0YXRlIHx8IHRoaXMuc3RhdGU7XG5cdFx0XG5cdFx0aWYgKCB0aGlzLnJlZmluZSApXG5cdFx0XHRyZXR1cm4gdGhpcy5yZWZpbmUoLi4uYXJndW1lbnRzKTtcblx0XHRcblx0XHRpZiAoICFkYXRhIHx8IGRhdGEuX19wcm90b19fICE9PSBvYmpQcm90byB8fCBzdGF0ZS5fX3Byb3RvX18gIT09IG9ialByb3RvIClcblx0XHRcdHJldHVybiBzdGF0ZTtcblx0XHRlbHNlXG5cdFx0XHRyZXR1cm4geyAuLi5kYXRhLCAuLi5zdGF0ZSB9XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBAZGVwcmVjaWF0ZWRcblx0ICogQHBhcmFtIGRhdGFcblx0ICogQHBhcmFtIHN0YXRlXG5cdCAqIEBwYXJhbSBjaGFuZ2VzXG5cdCAqIEByZXR1cm5zIHsqfVxuXHQgKi9cblx0cmVmaW5lKCBkYXRhLCBzdGF0ZSwgY2hhbmdlcyApIHtcblx0XHRzdGF0ZSA9IHN0YXRlIHx8IHRoaXMuc3RhdGU7XG5cdFx0XG5cdFx0aWYgKCAhZGF0YSB8fCBkYXRhLl9fcHJvdG9fXyAhPT0gb2JqUHJvdG8gfHwgc3RhdGUuX19wcm90b19fICE9PSBvYmpQcm90byApXG5cdFx0XHRyZXR1cm4gc3RhdGU7XG5cdFx0ZWxzZVxuXHRcdFx0cmV0dXJuIHsgLi4uZGF0YSwgLi4uc3RhdGUgfVxuXHR9XG5cdFxuXHQvKipcblx0ICogRGVib3VuY2UgdGhpcyBzdG9yZSBwcm9wYWdhdGlvbiAoICYgcmVkdWNpbmcgKVxuXHQgKiBAcGFyYW0gY2Jcblx0ICovXG5cdHN0YWJpbGl6ZSggY2IgKSB7XG5cdFx0Y2IgJiYgdGhpcy5vbmNlKCdzdGFibGUnLCBjYik7XG5cdFx0dGhpcy5fc3RhYmxlICYmIHRoaXMuZW1pdCgndW5zdGFibGUnLCB0aGlzLnN0YXRlLCB0aGlzLmRhdGEpO1xuXHRcdFxuXHRcdHRoaXMuX3N0YWJsZSA9IGZhbHNlO1xuXHRcdFxuXHRcdGlmICggdGhpcy5fc3RhYmlsaXplciApXG5cdFx0XHRyZXR1cm47XG5cdFx0XG5cdFx0dGhpcy5fc3RhYmlsaXplciA9IFRhc2tTZXF1ZW5jZXIucHVzaFRhc2sodGhpcywgJ3B1c2hTdGF0ZScpO1xuXHR9XG5cdFxuXHRyZXRyaWV2ZSggcGF0aCwgaSA9IDAsIG9iaiA9IHRoaXMuZGF0YSApIHtcblx0XHRwYXRoID0gaXMuc3RyaW5nKHBhdGgpID8gcGF0aC5zcGxpdCgnLicpIDogcGF0aDtcblx0XHRyZXR1cm4gIW9iaiB8fCAhcGF0aCB8fCAhcGF0aC5sZW5ndGhcblx0XHQgICAgICAgPyBvYmpcblx0XHQgICAgICAgOiBwYXRoLmxlbmd0aCA9PSBpICsgMVxuXHRcdCAgICAgICAgID8gb2JqW3BhdGhbaV1dXG5cdFx0ICAgICAgICAgOiB0aGlzLnJldHJpZXZlKHBhdGgsIGkgKyAxLCBvYmpbcGF0aFtpXV0pO1xuXHR9XG5cdFxuXHRkaXNwYXRjaCggYWN0aW9uLCAuLi5hcmd6ICkge1xuXHRcdHRoaXMuc2NvcGVPYmouZGlzcGF0Y2goYWN0aW9uLCAuLi5hcmd6KTtcblx0fVxuXHRcblx0dHJpZ2dlciggYWN0aW9uLCAuLi5hcmd6ICkge1xuXHRcdGxldCB7IGFjdGlvbnMgfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cdFx0aWYgKCBhY3Rpb25zICYmIGFjdGlvbnNbYWN0aW9uXSApIHtcblx0XHRcdGxldCBucyA9IGFjdGlvbnNbYWN0aW9uXS5jYWxsKHRoaXMsIC4uLmFyZ3opO1xuXHRcdFx0bnMgJiYgdGhpcy5zZXRTdGF0ZShucyk7XG5cdFx0fVxuXHR9XG5cdFxuXHQvKipcblx0ICogUHVsbCBzdG9yZXMgaW4gdGhlIHByaXZhdGUgc3RhdGVcblx0ICogQHBhcmFtIHN0b3JlcyAge0FycmF5fSAocGFzc2VkIHRvIFN0b3JlOjptYXApIEV4IDogW1wic2Vzc2lvblwiLFxuXHQgKiAgICAgXCJvdGhlck5hbWVkU3RvcmU6a2V5XCIsIG90aGVyU3RvcmUuYXMoXCJvdGhlcktleVwiKV1cblx0ICovXG5cdHB1bGwoIHN0b3JlcywgZG9XYWl0LCBvcmlnaW4gKSB7XG5cdFx0bGV0IGluaXRpYWxPdXRwdXRzID0gdGhpcy5zY29wZU9iai5tYXAodGhpcywgc3RvcmVzKTtcblx0XHRpZiAoIGRvV2FpdCApIHtcblx0XHRcdHRoaXMud2FpdCgpO1xuXHRcdFx0c3RvcmVzLmZvckVhY2goKCBzICkgPT4gdGhpcy5zY29wZVtzXSAmJiB0aGlzLndhaXQodGhpcy5zY29wZVtzXSkpO1xuXHRcdFx0dGhpcy5yZWxlYXNlKCk7XG5cdFx0fVxuXHRcdHJldHVybiBpbml0aWFsT3V0cHV0cztcblx0fVxuXHRcblx0LyoqXG5cdCAqIFNldCAmIFB1c2ggdGhlIHJlc3VsdCBkYXRhIHRvIGZvbGxvd2VycyBpZiBzdGFibGVcblx0ICogQHBhcmFtIGNiXG5cdCAqL1xuXHRwdXNoKCBkYXRhLCBmb3JjZSwgY2IgKSB7XG5cdFx0Y2IgICAgPSBmb3JjZSA9PT0gdHJ1ZSA/IGNiIDogZm9yY2U7XG5cdFx0Zm9yY2UgPSBmb3JjZSA9PT0gdHJ1ZTtcblx0XHRpZiAoICFmb3JjZSAmJlxuXHRcdFx0KFxuXHRcdFx0XHQhdGhpcy5oYXNEYXRhQ2hhbmdlKGRhdGEpXG5cdFx0XHQpXG5cdFx0KSB7XG5cdFx0XHRjYiAmJiBjYigpO1xuXHRcdFx0aWYgKCAhdGhpcy5fX2xvY2tzLmFsbCApIHtcblx0XHRcdFx0bGV0IHN0YWJsZSAgID0gdGhpcy5fc3RhYmxlO1xuXHRcdFx0XHR0aGlzLl9zdGFibGUgPSB0cnVlO1xuXHRcdFx0XHQhc3RhYmxlICYmIHRoaXMuZW1pdCgnc3RhYmxlJywgdGhpcy5zdGF0ZSwgdGhpcy5kYXRhKTtcblx0XHRcdFx0dGhpcy5fc3RhYmlsaXplciA9IG51bGw7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdFxuXHRcdHRoaXMuZGF0YSA9IGRhdGE7XG5cdFx0dGhpcy53YWl0KCk7XG5cdFx0dGhpcy5yZWxlYXNlKGNiKTtcblx0XHRcblx0fVxuXHRcblx0LyoqXG5cdCAqIENhbGwgdGhlIGFwcGx5IGZuIHVzaW5nIHRoZSBjdXJyZW50IGFjY3VtdWxhdGVkIHN0YXRlIHVwZGF0ZSB0aGVuLCBwdXNoIHRoZVxuXHQgKiByZXN1bHRpbmcgZGF0YSBpZiBzdGFibGVcblx0ICogQHBhcmFtIGZvcmNlXG5cdCAqIEByZXR1cm5zIHtib29sZWFufVxuXHQgKi9cblx0cHVzaFN0YXRlKCBmb3JjZSApIHtcblx0XHRcblx0XHRpZiAoICFmb3JjZSAmJiAhdGhpcy5fY2hhbmdlc1NXICYmIHRoaXMuZGF0YSApXG5cdFx0XHRyZXR1cm47XG5cdFx0XG5cdFx0dmFyIG5leHRTdGF0ZSA9IHRoaXMuX25leHRTdGF0ZSB8fCB7IC4uLnRoaXMuc3RhdGUsIC4uLih0aGlzLl9jaGFuZ2VzU1cgfHwge30pIH0sXG5cdFx0ICAgIG5leHREYXRhICA9IHRoaXMuYXBwbHkodGhpcy5kYXRhLCBuZXh0U3RhdGUsIHRoaXMuX2NoYW5nZXNTVyk7XG5cdFx0XG5cdFx0dGhpcy5fc3RhYmlsaXplciA9IG51bGw7XG5cdFx0dGhpcy5zdGF0ZSAgICAgICA9IG5leHRTdGF0ZTtcblx0XHR0aGlzLl9jaGFuZ2VzU1cgID0gbnVsbDtcblx0XHRcblx0XHRpZiAoICFmb3JjZSAmJlxuXHRcdFx0KFxuXHRcdFx0XHQhdGhpcy5oYXNEYXRhQ2hhbmdlKG5leHREYXRhKVxuXHRcdFx0KVxuXHRcdCkge1xuXHRcdFx0aWYgKCAhdGhpcy5fX2xvY2tzLmFsbCApIHtcblx0XHRcdFx0bGV0IHN0YWJsZSAgID0gdGhpcy5fc3RhYmxlO1xuXHRcdFx0XHR0aGlzLl9zdGFibGUgPSB0cnVlO1xuXHRcdFx0XHQhc3RhYmxlICYmIHRoaXMuZW1pdCgnc3RhYmxlJywgdGhpcy5zdGF0ZSwgdGhpcy5kYXRhKTtcblx0XHRcdFx0dGhpcy5fc3RhYmlsaXplciA9IG51bGw7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdFxuXHRcdHRoaXMuZGF0YSA9IG5leHREYXRhO1xuXHRcdHRoaXMud2FpdCgpO1xuXHRcdHRoaXMucmVsZWFzZSgpO1xuXHRcdFxuXHR9XG5cdFxuXHQvKipcblx0ICogQWRkICdwU3RhdGUnIHRvIHRoZSBjdXJyZW50IGFjY3VtdWxhdGVkIHN0YXRlIHVwZGF0ZXNcblx0ICogJiB3YWl0IHNvdXJjZSBzdG9yZXMgc3RhYmlsaXphdGlvbiBiZWZvcmUgcHVzaGluZyB0aGVzZSBzdGF0ZSB1cGRhdGVzXG5cdCAqIEBwYXJhbSBwU3RhdGVcblx0ICogQHBhcmFtIGNiXG5cdCAqL1xuXHRzZXRTdGF0ZSggcFN0YXRlLCBjYiwgc3luYyApIHtcblx0XHR2YXIgaSAgICAgICA9IDAsIGNoYW5nZSxcblx0XHQgICAgY2hhbmdlcyA9IHRoaXMuX2NoYW5nZXNTVyA9IHRoaXMuX2NoYW5nZXNTVyB8fCB7fTtcblx0XHRmb3IgKCB2YXIgayBpbiBwU3RhdGUgKVxuXHRcdFx0aWYgKCAhdGhpcy5zdGF0ZVxuXHRcdFx0XHR8fCBjaGFuZ2VzLmhhc093blByb3BlcnR5KGspLy8gdG9kb1xuXHRcdFx0XHQmJiAoXG5cdFx0XHRcdFx0cFN0YXRlW2tdICE9PSBjaGFuZ2VzW2tdXG5cdFx0XHRcdCkgfHwgcFN0YXRlLmhhc093blByb3BlcnR5KGspXG5cdFx0XHRcdCYmIChcblx0XHRcdFx0XHRwU3RhdGVba10gIT09IHRoaXMuc3RhdGVba11cblx0XHRcdFx0XHR8fFxuXHRcdFx0XHRcdCh0aGlzLnN0YXRlW2tdICYmIHBTdGF0ZVtrXSAmJiAocFN0YXRlW2tdLl9yZXYgIT0gdGhpcy5fcmV2c1trXSkpLy8gcmV2L2hhc2ggdXBkYXRlXG5cdFx0XHRcdCkgKSB7XG5cdFx0XHRcdGNoYW5nZSAgICAgICAgPSB0cnVlO1xuXHRcdFx0XHR0aGlzLl9yZXZzW2tdID0gcFN0YXRlW2tdICYmIHBTdGF0ZVtrXS5fcmV2IHx8IHRydWU7XG5cdFx0XHRcdGNoYW5nZXNba10gICAgPSBwU3RhdGVba107XG5cdFx0XHR9XG5cdFx0XG5cdFx0dGhpcy5fbmV4dFN0YXRlID0geyAuLi50aGlzLnN0YXRlLCAuLi5jaGFuZ2VzIH07XG5cdFx0aWYgKCAhdGhpcy5zaG91bGRBcHBseSh0aGlzLl9uZXh0U3RhdGUpICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRcblx0XHRpZiAoIHN5bmMgKSB7XG5cdFx0XHR0aGlzLnB1c2hTdGF0ZSgpO1xuXHRcdFx0Y2IgJiYgY2IoKTtcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHRpZiAoIGNoYW5nZSApIHtcblx0XHRcdFx0dGhpcy5zdGFiaWxpemUoY2IpO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSBjYiAmJiBjYigpO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXHRcblx0LyoqXG5cdCAqIFVwZGF0ZSB0aGUgY3VycmVudCBzdGF0ZSAmIHB1c2ggaXRcblx0ICogQHBhcmFtIHBTdGF0ZVxuXHQgKiBAcGFyYW0gY2Jcblx0ICovXG5cdHNldFN0YXRlU3luYyggcFN0YXRlICkge1xuXHRcdHZhciBpICAgICAgID0gMCwgY2hhbmdlLFxuXHRcdCAgICBjaGFuZ2VzID0gdGhpcy5fY2hhbmdlc1NXID0gdGhpcy5fY2hhbmdlc1NXIHx8IHt9O1xuXHRcdGZvciAoIHZhciBrIGluIHBTdGF0ZSApXG5cdFx0XHRpZiAoICF0aGlzLnN0YXRlIHx8IHBTdGF0ZS5oYXNPd25Qcm9wZXJ0eShrKVxuXHRcdFx0XHQmJiAoXG5cdFx0XHRcdFx0cFN0YXRlW2tdICE9IHRoaXMuc3RhdGVba11cblx0XHRcdFx0XHR8fFxuXHRcdFx0XHRcdCh0aGlzLnN0YXRlW2tdICYmIHBTdGF0ZVtrXSAmJiAocFN0YXRlW2tdLl9yZXYgIT0gdGhpcy5fcmV2c1trXSkpLy8gcmV2L2hhc2ggdXBkYXRlXG5cdFx0XHRcdCkgKSB7XG5cdFx0XHRcdGNoYW5nZSAgICAgICAgPSB0cnVlO1xuXHRcdFx0XHR0aGlzLl9yZXZzW2tdID0gcFN0YXRlW2tdICYmIHBTdGF0ZVtrXS5fcmV2IHx8IHRydWU7XG5cdFx0XHRcdGNoYW5nZXNba10gICAgPSBwU3RhdGVba107XG5cdFx0XHR9XG5cdFx0dGhpcy5zaG91bGRBcHBseSh7IC4uLih0aGlzLnN0YXRlIHx8IHt9KSwgLi4uY2hhbmdlcyB9KSAmJiB0aGlzLnB1c2hTdGF0ZSgpO1xuXHRcdHJldHVybiB0aGlzLmRhdGE7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBnZXQgYSBzdG9yZS1rZXkgcGFpciBmb3IgU3RvcmU6Om1hcFxuXHQgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuXHQgKiBAcmV0dXJucyB7e3N0b3JlOiBTdG9yZSwgbmFtZTogKn19XG5cdCAqL1xuXHRhcyggbmFtZSApIHtcblx0XHRyZXR1cm4geyBzdG9yZTogdGhpcywgbmFtZSB9O1xuXHR9XG5cdFxuXHRvbiggbGlzdHMgKSB7XG5cdFx0aWYgKCAhaXMuc3RyaW5nKGxpc3RzKSAmJiBsaXN0cyApXG5cdFx0XHRPYmplY3Qua2V5cyhsaXN0cykuZm9yRWFjaChrID0+IHN1cGVyLm9uKGssIGxpc3RzW2tdKSk7XG5cdFx0ZWxzZSBzdXBlci5vbiguLi5hcmd1bWVudHMpO1xuXHR9XG5cdFxuXHRyZW1vdmVMaXN0ZW5lciggbGlzdHMgKSB7XG5cdFx0aWYgKCAhaXMuc3RyaW5nKGxpc3RzKSAmJiBsaXN0cyApXG5cdFx0XHRPYmplY3Qua2V5cyhsaXN0cykuZm9yRWFjaChrID0+IHN1cGVyLnJlbW92ZUxpc3RlbmVyKGssIGxpc3RzW2tdKSk7XG5cdFx0ZWxzZSBzdXBlci5yZW1vdmVMaXN0ZW5lciguLi5hcmd1bWVudHMpO1xuXHR9XG5cdFxuXHQvKipcblx0ICogaXMgY29tcGxldGUgKGFsbCByZXF1aWVyZWQga2V5cyBhcmUgaGVyZSlcblx0ICogQHJldHVybnMgYm9vbFxuXHQgKi9cblx0aXNDb21wbGV0ZSggc3RhdGUgPSB0aGlzLnN0YXRlICkge1xuXHRcdHZhciBfc3RhdGljID0gdGhpcy5jb25zdHJ1Y3Rvcjtcblx0XHRyZXR1cm4gKFxuXHRcdFx0IXRoaXMuX3JlcXVpcmVcblx0XHRcdHx8ICF0aGlzLl9yZXF1aXJlLmxlbmd0aFxuXHRcdFx0fHwgc3RhdGUgJiYgdGhpcy5fcmVxdWlyZS5yZWR1Y2UoXG5cdFx0XHRcdCggciwga2V5ICkgPT4gKHIgJiYgc3RhdGVba2V5XSksXG5cdFx0XHRcdHRydWVcblx0XHRcdClcblx0XHQpO1xuXHR9XG5cdFxuXHQvKipcblx0ICogaXMgc3RhYmxlXG5cdCAqIEByZXR1cm5zIGJvb2xcblx0ICovXG5cdGlzU3RhYmxlKCkge1xuXHRcdHJldHVybiB0aGlzLl9zdGFibGU7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBTZXJpYWxpemUgc3RhdGUgJiBkYXRhIHdpdGggc291cmNlcyByZWZzXG5cdCAqIEByZXR1cm5zIGJvb2xcblx0ICovXG5cdHNlcmlhbGl6ZSggY2ZnID0ge30sIG91dHB1dCA9IHt9ICkge1xuXHRcdGxldCBzSWQgID0gY2ZnLnBhcmVudEFsaWFzIHx8IHRoaXMuc2NvcGVPYmouX2lkLFxuXHRcdCAgICByZWZzID1cblx0XHRcdCAgICAhY2ZnLm5vcmVmcyAmJiBpcy5hcnJheSh0aGlzLl91c2UpICYmIHRoaXMuX3VzZS5yZWR1Y2UoXG5cdFx0XHQgICAgKCBtYXAsIGtleSApID0+IHsvL3RvZG9cblx0XHRcdFx0ICAgIGxldCBuYW1lLFxuXHRcdFx0XHQgICAgICAgIGFsaWFzLCBwYXRoLCBfa2V5LFxuXHRcdFx0XHQgICAgICAgIHN0b3JlO1xuXHRcdFx0XHQgICAgaWYgKCBrZXkuc3RvcmUgJiYga2V5Lm5hbWUgKSB7XG5cdFx0XHRcdFx0ICAgIGFsaWFzID0gbmFtZSA9IGtleS5uYW1lO1xuXHRcdFx0XHRcdCAgICBzdG9yZSA9IGtleS5zdG9yZTtcblx0XHRcdFx0ICAgIH1cblx0XHRcdFx0ICAgIGVsc2UgaWYgKCBpcy5mbihrZXkpICkge1xuXHRcdFx0XHRcdCAgICBuYW1lID0gYWxpYXMgPSBrZXkubmFtZSB8fCBrZXkuZGVmYXVsdE5hbWU7XG5cdFx0XHRcdFx0ICAgIHN0b3JlID0ga2V5O1xuXHRcdFx0XHQgICAgfVxuXHRcdFx0XHQgICAgZWxzZSB7XG5cdFx0XHRcdFx0ICAgIF9rZXkgID0ga2V5Lm1hdGNoKC8oW1xcd19dKykoKD86XFwuW1xcd19dKykqKSg/OlxcOihbXFx3X10rKSk/Lyk7XG5cdFx0XHRcdFx0ICAgIG5hbWUgID0gX2tleVsxXTtcblx0XHRcdFx0XHQgICAgcGF0aCAgPSBfa2V5WzJdICYmIF9rZXlbMl0uc3Vic3RyKDEpO1xuXHRcdFx0XHRcdCAgICBzdG9yZSA9IHRoaXMuc2NvcGVPYmouc3RvcmVzW19rZXlbMV1dO1xuXHRcdFx0XHRcdCAgICBhbGlhcyA9IF9rZXlbM10gfHwgcGF0aCAmJiBwYXRoLm1hdGNoKC8oW15cXC5dKikkLylbMF0gfHwgX2tleVsxXTtcblx0XHRcdFx0ICAgIH1cblx0XHRcdFx0ICAgIGlmICggc3RvcmUgJiYgaXMucnNTdG9yZShzdG9yZSkgJiYgIXN0b3JlLnNjb3BlT2JqLl8uaXNMb2NhbElkIClcblx0XHRcdFx0XHQgICAgbWFwW2FsaWFzXSA9IHN0b3JlLnNjb3BlT2JqLl9pZCArICcvJyArIG5hbWU7XG5cdFx0XHRcdFxuXHRcdFx0XHQgICAgcmV0dXJuIG1hcDtcblx0XHRcdCAgICB9LCB7fVxuXHRcdFx0ICAgICkgfHwge307XG5cdFx0XG5cdFx0a2V5V2Fsa25TZXQoXG5cdFx0XHRvdXRwdXQsXG5cdFx0XHQoc0lkICsgJy8nICsgdGhpcy5uYW1lKSxcblx0XHRcdHtcblx0XHRcdFx0c3RhdGU6IHRoaXMuc3RhdGUgJiZcblx0XHRcdFx0XHQoXG5cdFx0XHRcdFx0XHRjZmcubm9yZWZzXG5cdFx0XHRcdFx0XHQ/IHsgLi4udGhpcy5zdGF0ZSB9XG5cdFx0XHRcdFx0XHQ6IE9iamVjdC5rZXlzKHRoaXMuc3RhdGUpLnJlZHVjZSgoIGgsIGsgKSA9PiAoIXJlZnNba10gJiYgKGhba10gPSB0aGlzLnN0YXRlW2tdKSwgaCksIHt9KVxuXHRcdFx0XHRcdCksXG5cdFx0XHRcdGRhdGEgOiAoXG5cdFx0XHRcdFx0XHR0aGlzLmRhdGEgJiZcblx0XHRcdFx0XHRcdHRoaXMuZGF0YS5fX3Byb3RvX18gPT09IG9ialByb3RvID9cblx0XHRcdFx0XHRcdHRoaXMuZGF0YSA6XG5cdFx0XHRcdFx0XHQoaXMuYm9vbCh0aGlzLmRhdGEpXG5cdFx0XHRcdFx0XHRcdHx8IGlzLm51bWJlcih0aGlzLmRhdGEpXG5cdFx0XHRcdFx0XHRcdHx8IGlzLnN0cmluZyh0aGlzLmRhdGEpKSAmJiB0aGlzLmRhdGFcblx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0fHwgdW5kZWZpbmVkXG5cdFx0XHRcdFxuXHRcdFx0XHQsXG5cdFx0XHRcdHJlZnNcblx0XHRcdH1cblx0XHQpO1xuXHRcdHJldHVybiBvdXRwdXQ7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiByZXN0b3JlIHN0YXRlICYgZGF0YVxuXHQgKiBAcmV0dXJucyBib29sXG5cdCAqL1xuXHRyZXN0b3JlKCBzbmFwc2hvdCwgaW1tZWRpYXRlICkge1xuXHRcdHNuYXBzaG90ID0gc25hcHNob3Rcblx0XHRcdCYmIGtleVdhbGtuR2V0KHNuYXBzaG90LCB0aGlzLnNjb3BlT2JqLl9pZCArICcvJyArIHRoaXMubmFtZSlcblx0XHRcdHx8IHRoaXMuJHNjb3BlLnRha2VTbmFwc2hvdEJ5S2V5KHRoaXMuc2NvcGVPYmouX2lkICsgJy8nICsgdGhpcy5uYW1lKTtcblx0XHRcblx0XHRpZiAoICFzbmFwc2hvdCApXG5cdFx0XHRyZXR1cm47XG5cdFx0XG5cdFx0aWYgKCBzbmFwc2hvdCApIHtcblx0XHRcdGlmICggIXRoaXMuaXNTdGFibGUoKSAmJiAhaW1tZWRpYXRlIClcblx0XHRcdFx0dGhpcy50aGVuKCgpID0+IHJlc3RvcmUoc25hcHNob3QpKVxuXHRcdFx0bGV0IHNuYXA7XG5cdFx0XHR0aGlzLnN0YXRlID0geyAuLi5zbmFwc2hvdC5zdGF0ZSB9O1xuXHRcdFx0T2JqZWN0LmtleXMoc25hcHNob3QucmVmcykuZm9yRWFjaChcblx0XHRcdFx0KCBrZXkgKSA9PiB7Ly90b2RvXG5cdFx0XHRcdFx0aWYgKCBzbmFwID0gdGhpcy4kc2NvcGUuZ2V0U25hcHNob3RCeUtleShzbmFwc2hvdC5yZWZzW2tleV0pIClcblx0XHRcdFx0XHRcdHRoaXMuc3RhdGVba2V5XSA9IHNuYXAuZGF0YTtcblx0XHRcdFx0XHQvL2Vsc2Vcblx0XHRcdFx0XHQvLyAgICBjb25zb2xlLndhcm4oJ25vdCBmb3VuZCA6ICcsIGtleSwgc25hcCAmJiBzbmFwLnJlZnNbIGtleSBdKVxuXHRcdFx0XHR9XG5cdFx0XHQpXG5cdFx0XHRcblx0XHRcdHRoaXMuZGF0YSA9IHNuYXBzaG90LmRhdGE7XG5cdFx0XHRcblx0XHR9XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBVbiBiaW5kIHRoaXMgc3RvcmUgb2ZmIHRoZSBnaXZlbiBjb21wb25lbnQta2V5XG5cdCAqIEBwYXJhbSBvYmpcblx0ICogQHBhcmFtIGtleVxuXHQgKiBAcmV0dXJucyB7QXJyYXkuPCo+fVxuXHQgKi9cblx0dW5CaW5kKCBvYmosIGtleSwgcGF0aCApIHtcblx0XHR2YXIgZm9sbG93ZXJzID0gdGhpcy5fZm9sbG93ZXJzLFxuXHRcdCAgICBpICAgICAgICAgPSBmb2xsb3dlcnMgJiYgZm9sbG93ZXJzLmxlbmd0aDtcblx0XHR3aGlsZSAoIGZvbGxvd2VycyAmJiBpLS0gKVxuXHRcdFx0aWYgKCBmb2xsb3dlcnNbaV1bMF0gPT09IG9iaiAmJiBmb2xsb3dlcnNbaV1bMV0gPT09IGtleSAmJiBmb2xsb3dlcnNbaV1bMl0gPT09IHBhdGggKVxuXHRcdFx0XHRyZXR1cm4gZm9sbG93ZXJzLnNwbGljZShpLCAxKTtcblx0fVxuXHRcblx0LyoqXG5cdCAqIEJpbmQgdGhpcyBzdG9yZSBjaGFuZ2VzIHRvIHRoZSBnaXZlbiBjb21wb25lbnQta2V5XG5cdCAqIEBwYXJhbSBvYmoge1JlYWN0LkNvbXBvbmVudHxTdG9yZXxmdW5jdGlvbilcblx0ICogQHBhcmFtIGtleSB7c3RyaW5nfSBvcHRpb25hbCBrZXkgd2hlcmUgdG8gbWFwIHRoZSBwdWJsaWMgc3RhdGVcblx0ICovXG5cdGJpbmQoIG9iaiwga2V5LCBzZXRJbml0aWFsID0gdHJ1ZSwgcGF0aCApIHtcblx0XHR0aGlzLl9mb2xsb3dlcnMucHVzaChbb2JqLCBrZXksIHBhdGhdKTtcblx0XHRpZiAoIHNldEluaXRpYWwgJiYgdGhpcy5kYXRhICYmIHRoaXMuX3N0YWJsZSApIHtcblx0XHRcdGxldCBkYXRhID0gcGF0aCA/IHRoaXMucmV0cmlldmUocGF0aCkgOiB0aGlzLmRhdGE7XG5cdFx0XHRpZiAoIHR5cGVvZiBvYmogIT0gXCJmdW5jdGlvblwiICkge1xuXHRcdFx0XHRpZiAoIGtleSApIG9iai5zZXRTdGF0ZSh7IFtrZXldOiBkYXRhIH0pO1xuXHRcdFx0XHRlbHNlIG9iai5zZXRTdGF0ZShkYXRhKTtcblx0XHRcdH1cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHRvYmooZGF0YSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdFxuXHQvKipcblx0ICogb25jZSgnc3RhYmxlJywgY2IpXG5cdCAqIEBwYXJhbSBvYmoge1JlYWN0LkNvbXBvbmVudHxTdG9yZXxmdW5jdGlvbilcblx0ICogQHBhcmFtIGtleSB7c3RyaW5nfSBvcHRpb25hbCBrZXkgd2hlcmUgdG8gbWFwIHRoZSBwdWJsaWMgc3RhdGVcblx0ICovXG5cdHRoZW4oIGNiICkge1xuXHRcdGlmICggdGhpcy5fc3RhYmxlIClcblx0XHRcdHJldHVybiBjYih0aGlzLmRhdGEpO1xuXHRcdHRoaXMub25jZSgnc3RhYmxlJywgZSA9PiBjYih0aGlzLmRhdGEpKTtcblx0fVxuXHRcblx0LyoqXG5cdCAqIEFkZCBhIGxvY2sgc28gdGhlIHN0b3JlIHdpbGwgbm90IHByb3BhZyBpdCBkYXRhIHVudGlsbCByZWxlYXNlKCkgaXMgY2FsbFxuXHQgKiBAcGFyYW0gcHJldmlvdXMge1N0b3JlfG51bWJlcnxBcnJheX0gQG9wdGlvbmFsIHdmIHRvIHdhaXQsIHJlbGVhc2VzIHRvIHdhaXQgb3Jcblx0ICogICAgIGFycmF5IG9mIHN0dWZmIHRvIHdhaXRcblx0ICogQHJldHVybnMge3RoaXN9XG5cdCAqL1xuXHR3YWl0KCBwcmV2aW91cyApIHtcblx0XHRpZiAoIHR5cGVvZiBwcmV2aW91cyA9PSBcIm51bWJlclwiIClcblx0XHRcdHJldHVybiB0aGlzLl9fbG9ja3MuYWxsICs9IHByZXZpb3VzO1xuXHRcdGlmICggaXMuYXJyYXkocHJldmlvdXMpIClcblx0XHRcdHJldHVybiBwcmV2aW91cy5tYXAodGhpcy53YWl0LmJpbmQodGhpcykpO1xuXHRcdFxuXHRcdHRoaXMuX3N0YWJsZSAmJiB0aGlzLmVtaXQoJ3Vuc3RhYmxlJywgdGhpcy5zdGF0ZSwgdGhpcy5kYXRhKTtcblx0XHR0aGlzLl9zdGFibGUgPSBmYWxzZTtcblx0XHR0aGlzLl9fbG9ja3MuYWxsKys7XG5cdFx0XG5cdFx0bGV0IHJlYXNvbiA9IGlzLnN0cmluZyhwcmV2aW91cykgPyBwcmV2aW91cyA6IG51bGw7XG5cdFx0aWYgKCByZWFzb24gKSB7XG5cdFx0XHR0aGlzLl9fbG9ja3NbcmVhc29uXSA9IHRoaXMuX19sb2Nrc1tyZWFzb25dIHx8IDA7XG5cdFx0XHR0aGlzLl9fbG9ja3NbcmVhc29uXSsrO1xuXHRcdH1cblx0XHRpZiAoIHByZXZpb3VzICYmIGlzLmZuKHByZXZpb3VzLnRoZW4pICkge1xuXHRcdFx0cHJldmlvdXMudGhlbih0aGlzLnJlbGVhc2UuYmluZCh0aGlzLCBudWxsKSk7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cdFxuXHQvKipcblx0ICogRGVjcmVhc2UgbG9ja3MgZm9yIHRoaXMgc3RvcmUsIGlmIGl0IHJlYWNoIDAgLFxuXHQgKiBpdCB3aWxsIGJlIHByb3BhZ2F0ZWQgdG8gdGhlIGZvbGxvd2Vycyxcblx0ICogdGhlbiwgYWxsIHN0dWZmIHBhc3NlZCB0byBcInRoZW5cIiBjYWxsIGJhY2sgd2lsbCBiZSBleGVjIC8gcmVsZWFzZWRcblx0ICogQHBhcmFtIGRlc3luY1xuXHQgKiBAcmV0dXJucyB7Kn1cblx0ICovXG5cdHJlbGVhc2UoIHJlYXNvbiwgY2IgKSB7XG5cdFx0dmFyIF9zdGF0aWMgPSB0aGlzLmNvbnN0cnVjdG9yLCBtZSA9IHRoaXM7XG5cdFx0bGV0IGkgICAgICAgPSAwLCB3YXNTdGFibGUgPSB0aGlzLl9zdGFibGU7XG5cdFx0XG5cdFx0aWYgKCBpcy5mbihyZWFzb24pICkge1xuXHRcdFx0Y2IgICAgID0gcmVhc29uO1xuXHRcdFx0cmVhc29uID0gbnVsbDtcblx0XHR9XG5cdFx0XG5cdFx0aWYgKCByZWFzb24gKSB7XG5cdFx0XHRpZiAoIHRoaXMuX19sb2Nrc1tyZWFzb25dID09IDAgKVxuXHRcdFx0XHRjb25zb2xlLmVycm9yKFwiUmVsZWFzZSBtb3JlIHRoYW4gbG9ja2luZyAhXCIsIHJlYXNvbik7XG5cdFx0XHR0aGlzLl9fbG9ja3NbcmVhc29uXSA9IHRoaXMuX19sb2Nrc1tyZWFzb25dIHx8IDA7XG5cdFx0XHR0aGlzLl9fbG9ja3NbcmVhc29uXS0tO1xuXHRcdH1cblx0XHRcblx0XHRpZiAoICFyZWFzb24gJiYgdGhpcy5fX2xvY2tzLmFsbCA9PSAwIClcblx0XHRcdGNvbnNvbGUuZXJyb3IoXCJSZWxlYXNlIG1vcmUgdGhhbiBsb2NraW5nICFcIik7XG5cdFx0XG5cdFx0aWYgKCAhLS10aGlzLl9fbG9ja3MuYWxsICYmIHRoaXMuaXNDb21wbGV0ZSgpICkge1xuXHRcdFx0bGV0IHByb3BhZyAgID0gdGhpcy5zaG91bGRQcm9wYWcodGhpcy5kYXRhKTtcblx0XHRcdHRoaXMuX3N0YWJsZSA9IHRydWU7XG5cdFx0XHRwcm9wYWcgJiYgdGhpcy5fcmV2Kys7Ly9cblx0XHRcdGlmICggcHJvcGFnICYmIHRoaXMuX2ZvbGxvd2Vycy5sZW5ndGggKVxuXHRcdFx0XHR0aGlzLl9mb2xsb3dlcnMuZm9yRWFjaChmdW5jdGlvbiBwcm9wYWcoIGZvbGxvd2VyICkge1xuXHRcdFx0XHRcdGxldCBkYXRhID0gZm9sbG93ZXJbMl0gPyBtZS5yZXRyaWV2ZShmb2xsb3dlclsyXSkgOiBtZS5kYXRhO1xuXHRcdFx0XHRcdC8vaWYgKCAhZGF0YSApIHJldHVybjtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHRpZiAoIHR5cGVvZiBmb2xsb3dlclswXSA9PSBcImZ1bmN0aW9uXCIgKSB7XG5cdFx0XHRcdFx0XHRmb2xsb3dlclswXShkYXRhKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0XHQvL2NiICYmIGkrKztcblx0XHRcdFx0XHRcdGZvbGxvd2VyWzBdLnNldFN0YXRlKFxuXHRcdFx0XHRcdFx0XHQoZm9sbG93ZXJbMV0pID8geyBbZm9sbG93ZXJbMV1dOiBkYXRhIH1cblx0XHRcdFx0XHRcdFx0ICAgICAgICAgICAgICA6IGRhdGFcblx0XHRcdFx0XHRcdFx0Ly8sXG5cdFx0XHRcdFx0XHRcdC8vY2IgJiYgKFxuXHRcdFx0XHRcdFx0XHQvLyAgICAoKSA9PiAoISgtLWkpICYmIGNiKCkpXG5cdFx0XHRcdFx0XHRcdC8vKVxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0Ly9lbHNlXG5cdFx0XHQhd2FzU3RhYmxlICYmIHRoaXMuZW1pdCgnc3RhYmxlJywgdGhpcy5kYXRhKTtcblx0XHRcdHByb3BhZyAmJiB0aGlzLmVtaXQoJ3VwZGF0ZScsIHRoaXMuZGF0YSk7XG5cdFx0XHRjYiAmJiBjYigpXG5cdFx0fVxuXHRcdGVsc2UgY2IgJiYgdGhpcy50aGVuKGNiKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXHRcblx0cHJvcGFnKCBkYXRhICkge1xuXHRcdHRoaXMuZW1pdCgndXBkYXRlJywgZGF0YSk7XG5cdH1cblx0XG5cdHJldGFpbiggcmVhc29uICkge1xuXHRcdHRoaXMuX19yZXRhaW5zLmFsbCsrO1xuXHRcdGlmICggcmVhc29uICkge1xuXHRcdFx0dGhpcy5fX3JldGFpbnNbcmVhc29uXSA9IHRoaXMuX19yZXRhaW5zW3JlYXNvbl0gfHwgMDtcblx0XHRcdHRoaXMuX19yZXRhaW5zW3JlYXNvbl0rKztcblx0XHR9XG5cdH1cblx0XG5cdGRpc3Bvc2UoIHJlYXNvbiApIHtcblx0XHQvL2NvbnNvbGUud2FybihcImRpc3Bvc2VcIiwgcmVhc29uLCB0aGlzLl9fcmV0YWlucyk7XG5cdFx0aWYgKCByZWFzb24gKSB7XG5cdFx0XHRpZiAoICF0aGlzLl9fcmV0YWluc1tyZWFzb25dIClcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiUlMgOiBEaXNwb3NlIG1vcmUgdGhhbiByZXRhaW5pbmcgb24gc3RvcmUgJ1wiICsgdGhpcy5uYW1lICsgXCInIDogXCIgKyByZWFzb24pO1xuXHRcdFx0XG5cdFx0XHR0aGlzLl9fcmV0YWluc1tyZWFzb25dLS07XG5cdFx0fVxuXHRcdGlmICggdGhpcy5fX3JldGFpbnMuYWxsID09IDAgKVxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiUlMgOiBEaXNwb3NlIG1vcmUgdGhhbiByZXRhaW5pbmcgb24gc3RvcmUgXCIgKyB0aGlzLm5hbWUpO1xuXHRcdFxuXHRcdHRoaXMuX19yZXRhaW5zLmFsbC0tO1xuXHRcdFxuXHRcdGlmICggIXRoaXMuX19yZXRhaW5zLmFsbCApIHtcblx0XHRcdGlmICggdGhpcy5fcGVyc2lzdGVuY2VUbSApIHtcblx0XHRcdFx0dGhpcy5fZGVzdHJveVRNICYmIGNsZWFyVGltZW91dCh0aGlzLl9kZXN0cm95VE0pO1xuXHRcdFx0XHR0aGlzLl9kZXN0cm95VE0gPSBzZXRUaW1lb3V0KFxuXHRcdFx0XHRcdGUgPT4ge1xuXHRcdFx0XHRcdFx0dGhpcy5fZGVzdHJveVRNID0gbnVsbDtcblx0XHRcdFx0XHRcdC8vdGhpcy50aGVuKHMgPT4ge1xuXHRcdFx0XHRcdFx0IXRoaXMuX19yZXRhaW5zLmFsbCAmJiAhdGhpcy5kZWFkICYmIHRoaXMuZGVzdHJveSgpXG5cdFx0XHRcdFx0XHQvL30pO1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0dGhpcy5fcGVyc2lzdGVuY2VUbVxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdC8vdGhpcy50aGVuKHMgPT5cblx0XHRcdFx0KCF0aGlzLl9fcmV0YWlucy5hbGwgJiYgIXRoaXMuZGVhZCAmJiB0aGlzLmRlc3Ryb3koKSlcblx0XHRcdFx0Ly8pO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRcblx0ZGVzdHJveSgpIHtcblx0XHQvLyAgY29uc29sZS5sb2coXCJkZXN0cm95XCIsIHRoaXMuX3VpZCk7XG5cdFx0XG5cdFx0dGhpcy5lbWl0KCdkZXN0cm95JywgdGhpcyk7XG5cdFx0aWYgKCB0aGlzLl9zdGFiaWxpemVyIClcblx0XHRcdGNsZWFyVGltZW91dCh0aGlzLl9zdGFiaWxpemVyKTtcblx0XHRcblx0XHRpZiAoIHRoaXMuX2ZvbGxvd2Vycy5sZW5ndGggKVxuXHRcdFx0dGhpcy5fZm9sbG93ZXJzLmZvckVhY2goXG5cdFx0XHRcdCggZm9sbG93ZXIgKSA9PiB7XG5cdFx0XHRcdFx0aWYgKCB0eXBlb2YgZm9sbG93ZXJbMF0gIT09IFwiZnVuY3Rpb25cIiApIHtcblx0XHRcdFx0XHRcdGlmICggZm9sbG93ZXJbMF0uc3RvcmVzIClcblx0XHRcdFx0XHRcdFx0ZGVsZXRlIGZvbGxvd2VyWzBdLnN0b3Jlc1tmb2xsb3dlclsxXV07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHQpO1xuXHRcdHRoaXMuX2ZvbGxvd2Vycy5sZW5ndGggPSAwO1xuXHRcdHRoaXMuY29uc3RydWN0b3IuX3JldiAgPSB0aGlzLnJldjtcblx0XHR0aGlzLmRlYWQgICAgICAgICAgICAgID0gdHJ1ZTtcblx0XHR0aGlzLl9yZXZzICAgICAgICAgICAgID0gdGhpcy5kYXRhID0gdGhpcy5zdGF0ZSA9IHRoaXMuc2NvcGUgPSBudWxsO1xuXHRcdHRoaXMucmVtb3ZlQWxsTGlzdGVuZXJzKCk7XG5cdH1cbn1cblxuLyoqXG4gKiBnZXQgYSBzdGF0aWMgYWxpYXNlZCByZWZlcmVuY2Ugb2YgYSBzdG9yZVxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqIEByZXR1cm5zIHt7c3RvcmU6IFN0b3JlLCBuYW1lOiAqfX1cbiAqL1xuU3RvcmUuYXMgPSBmdW5jdGlvbiAoIG5hbWUgKSB7XG5cdHJldHVybiB7IHN0b3JlOiB0aGlzLCBuYW1lIH07XG59XG5cbi8qKlxuICogTWFwIGFsbCBuYW1lZCBzdG9yZXMgaW4ge2tleXN9IHRvIHRoZSB7b2JqZWN0fSdzIHN0YXRlXG4gKiBIb29rIGNvbXBvbmVudFdpbGxVbm1vdW50IChmb3IgcmVhY3QgY29tcCkgb3IgZGVzdHJveSB0byB1bkJpbmQgdGhlbSBhdXRvbWF0aWNhbGx5XG4gKiBAc3RhdGljXG4gKiBAcGFyYW0gb2JqZWN0IHtPYmplY3R9IHRhcmdldCBzdGF0ZSBhd2FyZSBvYmplY3QgKFJlYWN0LkNvbXBvbmVudHxTdG9yZXwuLi4pXG4gKiBAcGFyYW0ga2V5cyB7QXJyYXl9IEV4IDogW1wic2Vzc2lvblwiLCBcIm90aGVyU3RhdGljTmFtZWRTdG9yZTprZXlcIixcbiAqICAgICBzdG9yZS5hcygnYW5vdGhlcktleScpXVxuICovXG5TdG9yZS5tYXAgPSBmdW5jdGlvbiAoIGNTdG9yZSwga2V5cywgc2NvcGUsIG9yaWdpbiwgc2V0SW5pdGlhbCA9IGZhbHNlICkge1xuXHR2YXIgdGFyZ2V0UmV2cyAgICAgPSBjU3RvcmUuX3JldnMgfHwge307XG5cdHZhciB0YXJnZXRTY29wZSAgICA9IGNTdG9yZS5zdG9yZXMgfHwgKGNTdG9yZS5zdG9yZXMgPSB7fSk7XG5cdHZhciBpbml0aWFsT3V0cHV0cyA9IHt9O1xuXHRrZXlzICAgICAgICAgICAgICAgPSBpcy5hcnJheShrZXlzKSA/IFsuLi5rZXlzXSA6IFtrZXlzXTtcblx0XG5cdFxuXHRzY29wZSA9IHNjb3BlIHx8IFN0b3JlLnN0YXRpY1Njb3BlO1xuXHRcblx0a2V5cyA9IGtleXMuZmlsdGVyKFxuXHRcdC8vIEB0b2RvIDogdXNlIHF1ZXJ5IHJlZnNcblx0XHQvLyAoc3RvcmUpKFxcLnN0b3JlKSooXFxbKFxcKnwocHJvcHMpXFx3KykrKVxcXSk/KFxcOmFsaWFzKVxuXHRcdCgga2V5ICkgPT4ge1xuXHRcdFx0aWYgKCAha2V5ICkge1xuXHRcdFx0XHRjb25zb2xlLmVycm9yKFwiTm90IGEgbWFwcGFibGUgc3RvcmUgaXRlbSAnXCIgKyBrZXkgKyBcIicgaW4gXCIgKyBvcmlnaW4gKyAnICEhJyk7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdGxldCBuYW1lLFxuXHRcdFx0ICAgIGFsaWFzLFxuXHRcdFx0ICAgIHBhdGgsXG5cdFx0XHQgICAgc3RvcmUsIF9rZXk7XG5cdFx0XHRpZiAoIGtleS5zdG9yZSAmJiBrZXkubmFtZSApIHtcblx0XHRcdFx0YWxpYXMgPSBuYW1lID0ga2V5Lm5hbWU7XG5cdFx0XHRcdHN0b3JlID0ga2V5LnN0b3JlO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSBpZiAoIGlzLmZuKGtleSkgKSB7XG5cdFx0XHRcdG5hbWUgPSBhbGlhcyA9IGtleS5uYW1lIHx8IGtleS5kZWZhdWx0TmFtZTtcblx0XHRcdFx0c3RvcmUgPSBrZXk7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0X2tleSAgPSBrZXkubWF0Y2goLyhbXFx3X10rKSgoPzpcXC5bXFx3X10rKSopKD86XFw6KFtcXHdfXSspKT8vKTtcblx0XHRcdFx0bmFtZSAgPSBfa2V5WzFdO1xuXHRcdFx0XHRwYXRoICA9IF9rZXlbMl0gJiYgX2tleVsyXS5zdWJzdHIoMSk7XG5cdFx0XHRcdHN0b3JlID0gc2NvcGUuc3RvcmVzW19rZXlbMV1dO1xuXHRcdFx0XHRhbGlhcyA9IF9rZXlbM10gfHwgcGF0aCAmJiBwYXRoLm1hdGNoKC8oW15cXC5dKikkLylbMF0gfHwgX2tleVsxXTtcblx0XHRcdH1cblx0XHRcdGlmICggIXN0b3JlICkge1xuXHRcdFx0XHRsZXQgaSA9IFtdO1xuXHRcdFx0XHRmb3IgKCB2YXIgbyBpbiBzY29wZS5zdG9yZXMgKVxuXHRcdFx0XHRcdGkucHVzaChvKVxuXHRcdFx0XHRjb25zb2xlLmVycm9yKFwiTm90IGEgbWFwcGFibGUgc3RvcmUgaXRlbSAnXCIgKyBuYW1lICsgXCIvXCIgKyBhbGlhcyArIFwiJyBpbiBcIiArIChjU3RvcmUubmFtZSB8fCBjU3RvcmUpICsgJyAhIScsIHN0b3JlLCBfa2V5LCBzY29wZS5zdG9yZXMsIGkpO1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRpZiAoIGlzLnJzU2NvcGVDbGFzcyhzdG9yZSkgKSBzY29wZS5fbW91bnQobmFtZSk7XG5cdFx0XHRpZiAoIGlzLnJzU2NvcGUoc3RvcmUpICkge1xuXHRcdFx0XHRzdG9yZSA9IHNjb3BlLl9tb3VudChrZXkpO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSBpZiAoIHRhcmdldFJldnNbbmFtZV0gKSByZXR1cm4gZmFsc2U7Ly8gaWdub3JlIGRibCB1c2VzIGZvciBub3dcblx0XHRcdFxuXHRcdFx0XG5cdFx0XHRpZiAoIGlzLmZuKHN0b3JlKSApIHtcblx0XHRcdFx0c2NvcGUuX21vdW50KG5hbWUpXG5cdFx0XHRcdHNjb3BlLnN0b3Jlc1tuYW1lXS5iaW5kKGNTdG9yZSwgYWxpYXMsIHNldEluaXRpYWwsIHBhdGgpO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdHN0b3JlLmJpbmQoY1N0b3JlLCBhbGlhcywgc2V0SW5pdGlhbCwgcGF0aCk7XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdC8vIGdpdmUgaW5pdGlhbCBzdG9yZSB3ZWlnaHQgYmFzaW5nIHNvdXJjZXNcblx0XHRcdHNjb3BlLnN0b3Jlc1tuYW1lXS5fc291cmNlcyAmJiBjU3RvcmUuX3NvdXJjZXMucHVzaCguLi5zY29wZS5zdG9yZXNbbmFtZV0uX3NvdXJjZXMpO1xuXHRcdFx0XG5cdFx0XHR0YXJnZXRSZXZzW2FsaWFzXSA9IHRhcmdldFJldnNbYWxpYXNdIHx8IHRydWU7XG5cdFx0XHQhdGFyZ2V0U2NvcGVbbmFtZV0gJiYgKHRhcmdldFNjb3BlW25hbWVdID0gc2NvcGUuc3RvcmVzW25hbWVdKTtcblx0XHRcdGlmICggc2NvcGUuc3RvcmVzW25hbWVdLmhhc093blByb3BlcnR5KCdkYXRhJykgKVxuXHRcdFx0XHRpbml0aWFsT3V0cHV0c1tuYW1lXSA9IHNjb3BlLmRhdGFbbmFtZV07XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdCk7XG5cdFxuXHQvLyAuLi4gQHRvZG9cblx0Y1N0b3JlLm9uY2UoJ2Rlc3Ryb3knLCAoIC4uLmFyZ3ogKSA9PiB7XG5cdFx0a2V5cy5tYXAoXG5cdFx0XHQoIGtleSApID0+IHtcblx0XHRcdFx0bGV0IG5hbWUsXG5cdFx0XHRcdCAgICBhbGlhcywgcGF0aCxcblx0XHRcdFx0ICAgIHN0b3JlO1xuXHRcdFx0XHRpZiAoIGtleS5zdG9yZSAmJiBrZXkubmFtZSApIHtcblx0XHRcdFx0XHRhbGlhcyA9IG5hbWUgPSBrZXkubmFtZTtcblx0XHRcdFx0XHRzdG9yZSA9IGtleS5zdG9yZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlIGlmICggaXMuZm4oa2V5KSApIHtcblx0XHRcdFx0XHRuYW1lID0gYWxpYXMgPSBrZXkubmFtZSB8fCBrZXkuZGVmYXVsdE5hbWU7XG5cdFx0XHRcdFx0c3RvcmUgPSBzY29wZS5zdG9yZXNbbmFtZV07XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0a2V5ICAgPSBrZXkubWF0Y2goLyhbXFx3X10rKSgoPzpcXC5bXFx3X10rKSopKD86XFw6KFtcXHdfXSspKT8vKTtcblx0XHRcdFx0XHRuYW1lICA9IGtleVsxXTtcblx0XHRcdFx0XHRwYXRoICA9IGtleVsyXSAmJiBrZXlbMl0uc3Vic3RyKDEpO1xuXHRcdFx0XHRcdHN0b3JlID0gc2NvcGUuc3RvcmVzW2tleVsxXV07XG5cdFx0XHRcdFx0YWxpYXMgPSBrZXlbM10gfHwgcGF0aCAmJiBwYXRoLm1hdGNoKC8oW15cXC5dKikkLylbMF0gfHwga2V5WzFdO1xuXHRcdFx0XHR9XG5cdFx0XHRcdFxuXHRcdFx0XHRzdG9yZSAmJiAhaXMuZm4oc3RvcmUpICYmIHN0b3JlLnVuQmluZChjU3RvcmUsIGFsaWFzLCBwYXRoKVxuXHRcdFx0fVxuXHRcdCk7XG5cdH0pXG5cdFxuXHRyZXR1cm4gaW5pdGlhbE91dHB1dHM7XG59O1xuXG5cbmlzLnJzU3RvcmUgICAgICA9IGZ1bmN0aW9uICggb2JqICkge1xuXHRyZXR1cm4gb2JqIGluc3RhbmNlb2YgU3RvcmVcbn1cbmlzLnJzU3RvcmVDbGFzcyA9IGZ1bmN0aW9uICggb2JqICkge1xuXHRyZXR1cm4gU3RvcmUuaXNQcm90b3R5cGVPZihvYmopIHx8IG9iaiA9PT0gU3RvcmVcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RvcmU7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1N0b3JlLmpzIiwiLypcbiAqIENvcHlyaWdodCAoYykgIDIwMTggV2lzZSBXaWxkIFdlYiAuXG4gKlxuICogIE1JVCBMaWNlbnNlXG4gKlxuICogIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqICBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiAgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqICBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqICBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqICBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcbiAqICBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqICBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiAgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiAgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiAgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiAgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcbiAqICBTT0ZUV0FSRS5cbiAqXG4gKiBAYXV0aG9yIDogTmF0aGFuYWVsIEJyYXVuXG4gKiBAY29udGFjdCA6IGNhaXBpbGFic0BnbWFpbC5jb21cbiAqL1xuXG4vL2ltcG9ydCBpbmRleCBmcm9tIFwiLi9pbmRleFwiOy8vIHdpbGwgdXNlIGFzIGV4dGVybmFsIHRoZSBpbmRleCBpbiBkaXN0XG5pbXBvcnQgaXMgZnJvbSBcImlzXCI7XG5cbi8qKlxuICogTWluaW1hbCBwdXNoIHNlcXVlbmNlciwgYXBwbHkgc3RvcmVzIHNwZWNpZmljIHRhc2sgaW4gdGhlIHJpZ2h0IG9yZGVyIChyb290IHN0b3Jlc1xuICogZmlyc3QpXG4gKi9cbmxldCB0YXNrUXVldWUgICAgICA9IFtdLFxuICAgIGN1cldlaWdodCAgICAgID0gMCxcbiAgICBtYXhXZWlnaHQgICAgICA9IDAsXG4gICAgbWluV2VpZ2h0ICAgICAgPSAwLFxuICAgIHRhc2tDb3VudCAgICAgID0gMCxcbiAgICBkZVN5bmMgICAgICAgICA9IGZhbHNlLFxuICAgIGRlU3luY01heFRhc2tzID0gMTAsXG4gICAgdGFzayxcbiAgICBpc1J1bm5pbmcsXG4gICAgZXJyb3JDYXRjaGVyICAgPSB7XG4gICAgICAgIGxhc3RFcnJvcjogbnVsbCxcbiAgICAgICAgZGlzcGF0Y2ggOiBmdW5jdGlvbiAoIGVycm9yICkge1xuICAgICAgICAgICAgZXJyb3JDYXRjaGVyLmRpc2FibGUoKTtcbiAgICAgICAgICAgIGlmICggdGFzayAmJiB0YXNrWyAwIF0uaGFuZGxlRXJyb3IgKSB7XG4gICAgICAgICAgICAgICAgdGFza1sgMCBdLmhhbmRsZUVycm9yKGVycm9yLCB0YXNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKCB0YXNrIClcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiUmVTY29wZSA6IEFuIGFwcGx5IHRhc2sgaGFzIGZhaWxlZCAhIVwiLCB0YXNrWyAxIF0sIFwiIG9uIFwiLCB0YXNrWyAwIF0ubmFtZSB8fCB0YXNrWyAwIF0uY29uc3RydWN0b3IubmFtZSlcbiAgICAgICAgXG4gICAgICAgICAgICBpc1J1bm5pbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIHRhc2sgICAgICA9IG51bGw7XG4gICAgICAgICAgICBydW5Ob3coKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW5hYmxlICAgOiAoIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnIClcbiAgICAgICAgICAgICAgICAgICA/ICgpID0+IHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCBlcnJvckNhdGNoZXIuZGlzcGF0Y2gpXG4gICAgICAgICAgICB9IDogKCkgPT4ge1xuICAgICAgICAgICAgICAgIHByb2Nlc3Mub24oJ3VuY2F1Z2h0RXhjZXB0aW9uJywgZXJyb3JDYXRjaGVyLmRpc3BhdGNoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIGRpc2FibGUgIDogKCB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyApXG4gICAgICAgICAgICAgICAgICAgPyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgZXJyb3JDYXRjaGVyLmRpc3BhdGNoKVxuICAgICAgICAgICAgfSA6ICgpID0+IHtcbiAgICAgICAgICAgICAgICBwcm9jZXNzLnJlbW92ZUxpc3RlbmVyKCd1bmNhdWdodEV4Y2VwdGlvbicsIGVycm9yQ2F0Y2hlci5kaXNwYXRjaCk7XG4gICAgICAgICAgICB9XG4gICAgfVxuO1xuXG5mdW5jdGlvbiBydW5Ob3coKSB7XG4gICAgaWYgKCAhaXNSdW5uaW5nICkge1xuICAgICAgICBydW4oKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJ1bigpIHtcbiAgICBsZXQgZnJvbSAgPSBEYXRlLm5vdygpO1xuICAgIGlzUnVubmluZyA9IHRydWU7XG4gICAgZXJyb3JDYXRjaGVyLmVuYWJsZSgpO1xuICAgIHdoaWxlICggdGFza0NvdW50ICkge1xuICAgICAgICBcbiAgICAgICAgLy8gdHJ5IGZvciB0aGUgY3VycmVudCB3ZWlnaHRcbiAgICAgICAgd2hpbGUgKCAhKCB0YXNrUXVldWVbIGN1cldlaWdodCBdICYmIHRhc2tRdWV1ZVsgY3VyV2VpZ2h0IF0ubGVuZ3RoICkgKVxuICAgICAgICAgICAgY3VyV2VpZ2h0Kys7XG4gICAgICAgIFxuICAgICAgICB0YXNrQ291bnQtLTtcbiAgICAgICAgdGFzayA9IHRhc2tRdWV1ZVsgY3VyV2VpZ2h0IF0uc2hpZnQoKTtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcIlRhc2sgOiBcIiwgdGFza1sxXSwgXCIgb24gXCIsIHRhc2tbMF0ubmFtZSk7XG4gICAgICAgIHRhc2tbIDAgXVsgdGFza1sgMSBdIF0uYXBwbHkodGFza1sgMCBdLCB0YXNrWyAyIF0pO1xuICAgIH1cbiAgICB0YXNrID0gdW5kZWZpbmVkO1xuICAgIGVycm9yQ2F0Y2hlci5kaXNhYmxlKCk7XG4gICAgXG4gICAgaXNSdW5uaW5nID0gZmFsc2U7XG4gICAgaWYgKCB0YXNrQ291bnQgKSB7XG4gICAgICAgIHNldFRpbWVvdXQocnVuTm93KTtcbiAgICB9XG59XG5cbi8vXG4vL2luZGV4LnNldFRhc2tEZVN5bmMgPSAoIG5iICkgPT4ge1xuLy8gICAgaWYgKCBuYiA9PT0gZmFsc2UgKVxuLy8gICAgICAgIHJldHVybiBkZVN5bmMgPSBmYWxzZTtcbi8vICAgIGVsc2UgaWYgKCBuYiA9PT0gdHJ1ZSApIHtcbi8vICAgICAgICBkZVN5bmMgICAgICAgICA9IHRydWU7XG4vLyAgICAgICAgZGVTeW5jTWF4VGFza3MgPSAxMDtcbi8vICAgIH1cbi8vICAgIGVsc2UgKGlzLmludChuYikpXG4vLyAgICB7XG4vLyAgICAgICAgZGVTeW5jICAgICAgICAgPSB0cnVlO1xuLy8gICAgICAgIGRlU3luY01heFRhc2tzID0gbmI7XG4vLyAgICB9XG4vL307XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBwdXNoVGFzayggb2JqLCBmbiwgYXJneiApIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBtb3JlIGEgc3RvcmUgaGF2ZSBzb3VyY2VzLCB0aGUgbW9yZSBpdCBzaG91bGQgYmUgcHJvY2Vzc2VkIGZpcnN0XG4gICAgICAgICAqIFNvIGxlYWZzIHN0b3JlcyBzdGF5IHN5bmMsIGFuZCByb290IHN0b3JlcyByZWNlaXZlIG1lcmdlZCBzdGF0ZSB1cGRhdGVzO1xuICAgICAgICAgKiBnbG9iYWwgc3RhdGUgc3RheSBjb2hlcmVudFxuICAgICAgICAgKlxuICAgICAgICAgKiBUaGlzIG1lYW4gd2hhdGV2ZXIgdGhlIG51bWJlciBvZiBzdG9yZXMgJiB0aGUgY29tcGxleGl0eSBvZiB0aGUgZGVwcyxcbiAgICAgICAgICogdXBkYXRpbmcgYSBzdG9yZSBzdGF0ZSB3aWxsIHVwZGF0ZSBpdHMgc3luY2hyb25lIGNoaWxkIHN0b3JlcyBpbW1lZGlhdGVseVxuICAgICAgICAgKlxuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSB7KnxudW1iZXJ9XG4gICAgICAgICAqL1xuICAgICAgICBsZXQgd2VpZ2h0ID0gb2JqLl9zb3VyY2VzICYmIG9iai5fc291cmNlcy5sZW5ndGggfHwgMSxcbiAgICAgICAgICAgIHN0YWNrICA9IHRhc2tRdWV1ZVsgd2VpZ2h0IF0gPVxuICAgICAgICAgICAgICAgIHRhc2tRdWV1ZVsgd2VpZ2h0IF0gfHwgW107XG4gICAgICAgIFxuICAgICAgICBtYXhXZWlnaHQgPSBNYXRoLm1heChtYXhXZWlnaHQsIHdlaWdodCk7XG4gICAgICAgIGN1cldlaWdodCA9IE1hdGgubWluKGN1cldlaWdodCwgd2VpZ2h0KTtcbiAgICAgICAgdGFza0NvdW50Kys7XG4gICAgICAgIFxuICAgICAgICAvL2NvbnNvbGUubG9nKFwiUHVzaCBUYXNrIDogXCIsIGZuLCBcIiBvbiBcIiwgb2JqLm5hbWUsIHdlaWdodCk7XG4gICAgICAgIHN0YWNrLnB1c2goWyBvYmosIGZuLCBhcmd6IF0pO1xuICAgICAgICBzZXRUaW1lb3V0KHJ1bk5vdywgMCk7XG4gICAgICAgIHJldHVybiBzdGFjay5sZW5ndGg7XG4gICAgfVxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbHMvVGFza1NlcXVlbmNlci5qcyIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpICAyMDE4IFdpc2UgV2lsZCBXZWIgLlxuICpcbiAqICBNSVQgTGljZW5zZVxuICpcbiAqICBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiAgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqICB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiAgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiAgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiAgVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG4gKiAgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqICBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG4gKiAgU09GVFdBUkUuXG4gKlxuICogQGF1dGhvciA6IE5hdGhhbmFlbCBCcmF1blxuICogQGNvbnRhY3QgOiBjYWlwaWxhYnNAZ21haWwuY29tXG4gKi9cblxuaW1wb3J0IGlzICAgIGZyb20gJ2lzJ1xuXG5jb25zdCBTaW1wbGVPYmplY3RQcm90byA9ICgge30gKS5jb25zdHJ1Y3RvcjtcblxubGV0IHNjb3BhYmxlcyA9IFtdO1xuXG5mdW5jdGlvbiBhZGRTY29wYWJsZVR5cGUoIHRlc3QsIGhhbmRsZSwgbWVtYmVyID0gZmFsc2UsIHN0YXRlU2NvcGUgPSBmYWxzZSApIHtcbiAgICBzY29wYWJsZXMucHVzaChcbiAgICAgICAge1xuICAgICAgICAgICAgdGVzdCxcbiAgICAgICAgICAgIG1lbWJlcixcbiAgICAgICAgICAgIHN0YXRlU2NvcGUsXG4gICAgICAgICAgICBoYW5kbGVcbiAgICAgICAgfVxuICAgIClcbn1cblxuLy9cbmZ1bmN0aW9uIGlzU2NvcGFibGVUeXBlKCBDb21wLCBtZW1iZXIsIHN0YXRlU2NvcGUgKSB7XG4gICAgXG4gICAgZm9yICggbGV0IGkgPSAwOyBpIDwgc2NvcGFibGVzLmxlbmd0aDsgaSsrIClcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgKCBtZW1iZXIgPT09IHVuZGVmaW5lZCB8fCBtZW1iZXIgPT0gc2NvcGFibGVzWyBpIF0ubWVtYmVyIClcbiAgICAgICAgICAgICYmIHN0YXRlU2NvcGUgPT0gc2NvcGFibGVzWyBpIF0uc3RhdGVTY29wZVxuICAgICAgICAgICAgJiYgc2NvcGFibGVzWyBpIF0udGVzdChDb21wKVxuICAgICAgICApXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICBcbiAgICByZXR1cm4gZmFsc2U7XG4gICAgXG59XG5cbmZ1bmN0aW9uIGFwcGx5U2NvcGFibGVUeXBlKCBDb21wLCBhcmd6LCBtZW1iZXIsIHN0YXRlU2NvcGUgKSB7XG4gICAgXG4gICAgZm9yICggbGV0IGkgPSAwOyBpIDwgc2NvcGFibGVzLmxlbmd0aDsgaSsrIClcbiAgICAgICAgaWYgKCBtZW1iZXIgPT0gc2NvcGFibGVzWyBpIF0ubWVtYmVyICYmIHN0YXRlU2NvcGUgPT0gc2NvcGFibGVzWyBpIF0uc3RhdGVTY29wZSAmJiBzY29wYWJsZXNbIGkgXS50ZXN0KENvbXApIClcbiAgICAgICAgICAgIHJldHVybiBzY29wYWJsZXNbIGkgXS5oYW5kbGUoQ29tcCwgLi4uYXJneik7XG4gICAgXG4gICAgY29uc29sZS53YXJuKFwicmVTY29wZSA6IFVua25vd24gdHlwZVwiLCBDb21wKVxuICAgIFxuICAgIHJldHVybiBmYWxzZTtcbiAgICBcbn1cblxuZnVuY3Rpb24gcmVTY29wZSggLi4uYXJneiApIHtcbiAgICAvLyBhcmUgd2UgZGVjb3JhdGluZyBhIG1lbWJlciAvIHdpdGhvdXQgYXJnelxuICAgIGlmICggYXJnelsgMCBdIGluc3RhbmNlb2YgU2ltcGxlT2JqZWN0UHJvdG8gJiYgYXJnelsgMiBdIGluc3RhbmNlb2YgU2ltcGxlT2JqZWN0UHJvdG8gJiYgYXJnelsgMCBdLmhhc093blByb3BlcnR5KGFyZ3pbIDEgXSkgKSB7XG4gICAgICAgIGFyZ3pbIDIgXS52YWx1ZSA9IGFwcGx5U2NvcGFibGVUeXBlKGFyZ3pbIDAgXSwgW10sIHRydWUsIGZhbHNlKTtcbiAgICAgICAgcmV0dXJuIGFyZ3pbIDAgXTtcbiAgICB9XG4gICAgZWxzZSBpZiAoICFpc1Njb3BhYmxlVHlwZShhcmd6WyAwIF0sIHVuZGVmaW5lZCwgZmFsc2UpICkge1xuICAgICAgICByZXR1cm4gKCAuLi5hcmd6MiApID0+IHtcbiAgICAgICAgICAgIC8vIGFyZSB3ZSBkZWNvcmF0aW5nIGEgbWVtYmVyIC8gd2l0aCBhcmd6XG4gICAgICAgICAgICBpZiAoIGFyZ3oyWyAwIF0gaW5zdGFuY2VvZiBTaW1wbGVPYmplY3RQcm90byAmJiBhcmd6MlsgMiBdIGluc3RhbmNlb2YgU2ltcGxlT2JqZWN0UHJvdG8gJiYgYXJnejJbIDAgXS5oYXNPd25Qcm9wZXJ0eShhcmd6MlsgMSBdKSApIHtcbiAgICAgICAgICAgICAgICBhcmd6MlsgMiBdLnZhbHVlID0gYXBwbHlTY29wYWJsZVR5cGUoYXJnejJbIDAgXSwgYXJneiwgdHJ1ZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIHJldHVybiBhcmd6MlsgMCBdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHJldHVybiByZVNjb3BlKGFyZ3oyWyAwIF0sIC4uLmFyZ3opO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBhcHBseVNjb3BhYmxlVHlwZShhcmd6WyAwIF0sIGFyZ3ouc2xpY2UoMSksIGZhbHNlLCBmYWxzZSk7XG59XG5cbmZ1bmN0aW9uIHNjb3BlVG9TdGF0ZSggLi4uYXJneiApIHtcbiAgICAvLyBhcmUgd2UgZGVjb3JhdGluZyBhIG1lbWJlciAvIHdpdGhvdXQgYXJnelxuICAgIGlmICggYXJnelsgMCBdIGluc3RhbmNlb2YgU2ltcGxlT2JqZWN0UHJvdG8gJiYgYXJnelsgMiBdIGluc3RhbmNlb2YgU2ltcGxlT2JqZWN0UHJvdG8gJiYgYXJnelsgMCBdLmhhc093blByb3BlcnR5KGFyZ3pbIDEgXSkgKSB7XG4gICAgICAgIGFyZ3pbIDIgXS52YWx1ZSA9IGFwcGx5U2NvcGFibGVUeXBlKGFyZ3pbIDAgXSwgW10sIHRydWUsIHRydWUpO1xuICAgICAgICByZXR1cm4gYXJnelsgMCBdO1xuICAgIH1cbiAgICBlbHNlIGlmICggIWlzU2NvcGFibGVUeXBlKGFyZ3pbIDAgXSwgdW5kZWZpbmVkLCB0cnVlKSApIHtcbiAgICAgICAgcmV0dXJuICggLi4uYXJnejIgKSA9PiB7XG4gICAgICAgICAgICAvLyBhcmUgd2UgZGVjb3JhdGluZyBhIG1lbWJlciAvIHdpdGggYXJnelxuICAgICAgICAgICAgaWYgKCBhcmd6MlsgMCBdIGluc3RhbmNlb2YgU2ltcGxlT2JqZWN0UHJvdG8gJiYgYXJnejJbIDIgXSBpbnN0YW5jZW9mIFNpbXBsZU9iamVjdFByb3RvICYmIGFyZ3oyWyAwIF0uaGFzT3duUHJvcGVydHkoYXJnejJbIDEgXSkgKSB7XG4gICAgICAgICAgICAgICAgYXJnejJbIDIgXS52YWx1ZSA9IGFwcGx5U2NvcGFibGVUeXBlKGFyZ3oyWyAwIF0sIGFyZ3osIHRydWUsIHRydWUpO1xuICAgICAgICAgICAgICAgIHJldHVybiBhcmd6MlsgMCBdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHJldHVybiBzY29wZVRvU3RhdGUoYXJnejJbIDAgXSwgLi4uYXJneik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGFwcGx5U2NvcGFibGVUeXBlKGFyZ3pbIDAgXSwgYXJnei5zbGljZSgxKSwgZmFsc2UsIHRydWUpO1xufVxuXG4vL1xuLy9hZGRTY29wYWJsZVR5cGUoXG4vLyAgICAoIENvbXAgKSA9PiAoQ29tcCAmJiBDb21wLnByb3RvdHlwZSBpbnN0YW5jZW9mIFN0b3JlKSxcbi8vICAgIGZ1bmN0aW9uIHJlU2NvcGUoIC4uLmFyZ3ogKSB7XG4vLyAgICAgICAgbGV0IEJhc2VTdG9yZSAgICA9ICghYXJnelswXSB8fCBhcmd6WzBdLnByb3RvdHlwZSBpbnN0YW5jZW9mIFN0b3JlKSAmJlxuLy8gYXJnei5zaGlmdCgpLCBzY29wZSAgICAgICAgPSAoIWFyZ3pbMF0gfHwgYXJnelswXSBpbnN0YW5jZW9mIFNjb3BlIHx8IGlzLmZuKGFyZ3pbMF0pKVxuLy8gJiYgYXJnei5zaGlmdCgpLCB1c2UgICAgICAgICAgPSAoaXMuYXJyYXkoYXJnelswXSkpICYmIGFyZ3ouc2hpZnQoKSwgc3RhdGVNYXAgICAgID1cbi8vICF1c2UgJiYgKCFhcmd6WzBdIHx8IGFyZ3pbMF0gaW5zdGFuY2VvZiBTaW1wbGVPYmplY3RQcm90bykgJiYgYXJnei5zaGlmdCgpLFxuLy8gaW5pdGlhbFN0YXRlID0ge307ICBsZXQgY29tcE5hbWUgPSBCYXNlU3RvcmUuZGlzcGxheU5hbWUgfHwgQmFzZVN0b3JlLm5hbWU7ICB1c2UgPVxuLy8gWy4uLihCYXNlU3RvcmUudXNlIHx8IFtdKSwgLi4uKHVzZSB8fCBbXSldOyBzdGF0ZU1hcCAmJlxuLy8gU2NvcGUuc3RhdGVNYXBUb1JlZkxpc3Qoc3RhdGVNYXAsIGluaXRpYWxTdGF0ZSwgdXNlKTsgIGNsYXNzIFN0YXRlU2NvcGVkU3RvcmUgZXh0ZW5kc1xuLy8gQmFzZVN0b3JlIHsgc3RhdGljIHVzZSAgICAgICAgID0gdXNlOyBzdGF0aWMgZGlzcGxheU5hbWUgPSBcInN0YXRlU2NvcGVkKFwiICsgY29tcE5hbWUgK1xuLy8gXCIpXCI7ICBjb25zdHJ1Y3RvciggLi4uYXJneiApIHsgc3VwZXIoc2NvcGUsIGFyZ3ouc2xpY2UoYXJnelswXSBpbnN0YW5jZW9mIFNjb3BlID8gMSA6XG4vLyAwKSkgfSB9ICByZXR1cm4gU3RhdGVTY29wZWRTdG9yZTsgfSwgZmFsc2UsIHRydWUgKVxuXG5cbmV4cG9ydCB7XG4gICAgYWRkU2NvcGFibGVUeXBlLFxuICAgIHJlU2NvcGUsXG4gICAgc2NvcGVUb1N0YXRlXG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlscy9zY29wYWJsZS5qcyJdLCJzb3VyY2VSb290IjoiIn0=