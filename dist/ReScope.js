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
					if (!output.hasOwnProperty(id) && !is.fn(ctx[id]) && (!storesRevMap || storesRevMap.hasOwnProperty(id) && storesRevMap[id] === undefined || !(!storesRevMap.hasOwnProperty(id) || ctx[id]._rev <= storesRevMap[id].rev))) {
	
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
						} else {
							//console.warn("update ", id, this.data[id]);
							output[id] = _this10.data[id];
						}
					} else if (!output.hasOwnProperty(id)) {
						// avoid empty or not initialized store results to be replaced by inherited with same name
						output[id] = undefined;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZjI0NDJlYmIyYzA0ZjJiMmNjNmYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9TY29wZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvaXMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaXNcIiIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL0VtaXR0ZXIuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic2hvcnRpZFwiIiwid2VicGFjazovLy8uL3NyYy9TdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvVGFza1NlcXVlbmNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvc2NvcGFibGUuanMiXSwibmFtZXMiOlsiJGdsb2JhbCIsIndpbmRvdyIsImdsb2JhbCIsIlJTIiwiX19fcmVzY29wZSIsImNvbnNvbGUiLCJ3YXJuIiwiU3RvcmUiLCJTY29wZSIsIkNvbnRleHQiLCJyZVNjb3BlIiwic2NvcGVUb1N0YXRlIiwicmVTY29wZVN0YXRlIiwiYWRkU2NvcGFibGVUeXBlIiwic2NvcGVSZWYiLCJtYXAiLCJrZXkiLCJyZXF1aXJlIiwid2Fsa25TZXQiLCJ3YWxrbkdldCIsImtleVdhbGtuU2V0Iiwia2V5V2Fsa25HZXQiLCJFdmVudEVtaXR0ZXIiLCJzaG9ydGlkIiwiX19wcm90b19fcHVzaCIsInRhcmdldCIsImlkIiwicGFyZW50IiwiZm4iLCJwcm90b3R5cGUiLCJfIiwib3BlblNjb3BlcyIsIlNpbXBsZU9iamVjdFByb3RvIiwiY29uc3RydWN0b3IiLCJzY29wZXMiLCJza2V5IiwiaXMiLCJhcnJheSIsInNvcnQiLCJhIiwiYiIsImZpcnN0bmFtZSIsImpvaW4iLCJzbSIsInN0YXRlIiwiX3JlZnMiLCJhY3Rpb25zIiwicGF0aCIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwiY3BhdGgiLCJwdXNoIiwiRnVuY3Rpb24iLCJhcyIsInN0b3Jlc01hcCIsInVwcGVyU2NvcGUiLCJzbmFwc2hvdCIsImRhdGEiLCJpbmNyZW1lbnRJZCIsInBlcnNpc3RlbmNlVG0iLCJhdXRvRGVzdHJveSIsInJvb3RFbWl0dGVyIiwiYm91bmRlZEFjdGlvbnMiLCJrZXlQSUQiLCJfaWQiLCJnZW5lcmF0ZSIsImJhc2VJZCIsImtleUluZGV4IiwiaXNMb2NhbElkIiwicmVnaXN0ZXIiLCJpIiwiX3JldiIsInN0b3JlcyIsIl9hdXRvRGVzdHJveSIsImRlYWQiLCJFcnJvciIsInNvdXJjZXMiLCJjaGlsZFNjb3BlcyIsImNoaWxkU2NvcGVzTGlzdCIsInVuU3RhYmxlQ2hpbGRzIiwic2VlbkNoaWxkcyIsIl9fcmV0YWlucyIsImFsbCIsIl9fbG9ja3MiLCJfYm91bmRlZEFjdGlvbnMiLCJ0ZXN0IiwiaW5jbHVkZXMiLCJiaW5kIiwiX2xpc3RlbmluZyIsIl9zY29wZSIsIl9taXhlZCIsIl9taXhlZExpc3QiLCJmb2xsb3dlcnMiLCJyZXRhaW4iLCJfc3RhYmxlIiwid2FpdCIsIm9uIiwiX3BhcmVudExpc3QiLCJyZWxlYXNlIiwiX3Byb3BhZyIsIl9hZGRDaGlsZCIsInJlc3RvcmUiLCJzZXRUaW1lb3V0IiwiZGlzcG9zZSIsInN0b3Jlc0xpc3QiLCJfbW91bnQiLCJrIiwiYXJndW1lbnRzIiwicmVmIiwic25hcCIsInBhcnNlUmVmIiwic3RvcmVJZCIsInJlZHVjZVJpZ2h0IiwibW91bnRlZCIsImN0eCIsInN0b3JlIiwidGFza1F1ZXVlIiwicnNTdG9yZUNsYXNzIiwibmFtZSIsImxlbmd0aCIsInNoaWZ0IiwicnNTY29wZUNsYXNzIiwiJHBhcmVudCIsIm1vdW50Iiwic2xpY2UiLCJyc1N0b3JlIiwidW5kZWZpbmVkIiwic2V0U3RhdGUiLCJfd2F0Y2hTdG9yZSIsImlzU3RhYmxlIiwicHJvcGFnIiwidGFyZ2V0Q3R4IiwibGlzdHMiLCJyZWxpbmsiLCJfX29yaWdpbiIsInNpbmdsZXRvbiIsInNyY0N0eCIsImV4dGVybmFsIiwiZm9yY2UiLCJsY3R4IiwiaW5mbyIsInRtcCIsImRlc3Ryb3kiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJnZXQiLCJzZXQiLCJ2IiwiYWN0aXZlQWN0aW9ucyIsInJzU2NvcGUiLCJhY3QiLCJoYXNPd25Qcm9wZXJ0eSIsIl9fdGFyZ2V0U3RvcmVzIiwiZGlzcGF0Y2giLCJvYmoiLCJzZXRJbml0aWFsIiwicmV2TWFwIiwibGFzdFJldnMiLCJyZWZLZXlzIiwic3RyaW5nIiwicmVkdWNlIiwicmV2cyIsInJldiIsInJlZnMiLCJyZXRhaW5TdG9yZXMiLCJnZXRVcGRhdGVzIiwiZGlzcG9zZVN0b3JlcyIsInNwbGljZSIsInRvIiwicmVmTGlzdCIsIm1peGVkQ1dVbm1vdW50IiwidW5Nb3VudEtleSIsImlzUmVhY3RDb21wb25lbnQiLCJ1bkJpbmQiLCJhbGlhcyIsInJldHJpZXZlIiwic3BsaXQiLCJyZXRyaWV2ZVN0b3JlIiwic3RvcmVzUmV2TWFwIiwibG9jYWwiLCJ1cGRhdGVkIiwiZ2V0U3RvcmVzUmV2cyIsIm91dHB1dCIsImNoaWxkcyIsIl9nZXRBbGxDaGlsZHMiLCJjZmciLCJwYXJlbnRBbGlhcyIsInNpZCIsInNlcmlhbGl6ZV9leCIsImV4Y2x1ZGUiLCJ3aXRoQ2hpbGRzIiwid2l0aFBhcmVudHMiLCJ3aXRoTWl4ZWQiLCJub3JlZnMiLCJhbGlhc2VzIiwic2VyaWFsaXplIiwid2l0aENoaWxkIiwiaCIsImJvb2wiLCJ0YWtlU25hcHNob3RCeUtleSIsInN0YXJ0c1dpdGgiLCJzdWJzdHIiLCJnZXRTbmFwc2hvdEJ5S2V5IiwiZGVsZXRlU25hcHNob3RCeUtleSIsInJlcGxhY2UiLCJwU3RhdGUiLCJfcmVmIiwiYWN0aW9uIiwiYXJneiIsInN0YWNrIiwiYkFjdHMiLCJ0cmlnZ2VyIiwiY2IiLCJvbmNlIiwicmVhc29uIiwiZW1pdCIsImVycm9yIiwic3RhYmlsaXplclRNIiwiY2xlYXJUaW1lb3V0IiwicHJvcGFnVE0iLCJyZW1hcHMiLCJ3YXNTdGFibGUiLCJpbmRleE9mIiwidW4iLCJkZXN0cm95VE0iLCJyZW1vdmVMaXN0ZW5lciIsImZvbGxvd2VyIiwiX3JtQ2hpbGQiLCJpc1Byb3RvdHlwZU9mIiwidmFsdWUiLCJpc0tleSIsImZpbHRlciIsIkVtaXR0ZXIiLCJfZXZlbnRzIiwiZXZ0IiwiVGFza1NlcXVlbmNlciIsIm9ialByb3RvIiwiZ2V0UHJvdG90eXBlT2YiLCJfc3RhdGljIiwic2NvcGUiLCJnZXRTY29wZSIsInN0YXRpY1Njb3BlIiwid2F0Y2hzIiwidXNlIiwiYXBwbHkiLCJpbml0aWFsU3RhdGUiLCJkZWZhdWx0U3RhdGUiLCJhcHBsaWVkIiwiX3VpZCIsIl9vblN0YWJpbGl6ZSIsIl9wZXJzaXN0ZW5jZVRtIiwiX2NmZyIsInNjb3BlT2JqIiwiJHNjb3BlIiwiJHN0b3JlcyIsIiRhY3Rpb25zIiwiJGRpc3BhdGNoIiwiX3JldnMiLCJfcmVxdWlyZSIsIl9zb3VyY2VzIiwiX3VzZSIsIm1hdGNoIiwicmVmMiIsIl9mb2xsb3dlcnMiLCJfY2hhbmdlc1NXIiwiX2FmdGVyQ29uc3RydWN0b3IiLCJpbml0aWFsRGF0YSIsInNob3VsZEFwcGx5IiwibWFuYWdlZCIsIm5EYXRhcyIsInIiLCJjRGF0YXMiLCJpc0NvbXBsZXRlIiwiZm9sbG93IiwiY2FsbCIsImNoYW5nZXMiLCJyZWZpbmUiLCJfX3Byb3RvX18iLCJfc3RhYmlsaXplciIsInB1c2hUYXNrIiwibnMiLCJkb1dhaXQiLCJvcmlnaW4iLCJpbml0aWFsT3V0cHV0cyIsInMiLCJoYXNEYXRhQ2hhbmdlIiwic3RhYmxlIiwibmV4dFN0YXRlIiwiX25leHRTdGF0ZSIsIm5leHREYXRhIiwic3luYyIsImNoYW5nZSIsInB1c2hTdGF0ZSIsInN0YWJpbGl6ZSIsInNJZCIsIl9rZXkiLCJkZWZhdWx0TmFtZSIsIm51bWJlciIsImltbWVkaWF0ZSIsInRoZW4iLCJwcmV2aW91cyIsIm1lIiwic2hvdWxkUHJvcGFnIiwiX2Rlc3Ryb3lUTSIsInJlbW92ZUFsbExpc3RlbmVycyIsImNTdG9yZSIsInRhcmdldFJldnMiLCJ0YXJnZXRTY29wZSIsIm8iLCJjdXJXZWlnaHQiLCJtYXhXZWlnaHQiLCJtaW5XZWlnaHQiLCJ0YXNrQ291bnQiLCJkZVN5bmMiLCJkZVN5bmNNYXhUYXNrcyIsInRhc2siLCJpc1J1bm5pbmciLCJlcnJvckNhdGNoZXIiLCJsYXN0RXJyb3IiLCJkaXNhYmxlIiwiaGFuZGxlRXJyb3IiLCJydW5Ob3ciLCJlbmFibGUiLCJhZGRFdmVudExpc3RlbmVyIiwicHJvY2VzcyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJydW4iLCJmcm9tIiwiRGF0ZSIsIm5vdyIsIndlaWdodCIsIk1hdGgiLCJtYXgiLCJtaW4iLCJzY29wYWJsZXMiLCJoYW5kbGUiLCJtZW1iZXIiLCJzdGF0ZVNjb3BlIiwiaXNTY29wYWJsZVR5cGUiLCJDb21wIiwiYXBwbHlTY29wYWJsZVR5cGUiLCJhcmd6MiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNUQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUEvQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTJCQSxLQUFJQSxVQUFZLE9BQU9DLE1BQVAsS0FBa0IsV0FBcEIsR0FBb0NBLE1BQXBDLEdBQTZDQyxNQUEzRDs7QUFNQSxLQUFNQyxLQUFLSCxRQUFRSSxVQUFSLElBQXNCLEVBQWpDO0FBQ0EsS0FBS0osUUFBUUksVUFBYixFQUEwQjtBQUN0QkMsYUFBUUMsSUFBUixDQUFhLCtEQUFiO0FBQ0gsRUFGRCxNQUdLOztBQUVETixhQUFRSSxVQUFSLEdBQXFCRCxFQUFyQjtBQUNBLHFC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QUFrQitHLGtCQUFrQnBJLEtBQU0sQ0FBTixDQUFsQixFQUE2QixFQUE3QixFQUFpQyxJQUFqQyxFQUF1QyxJQUF2QyxDQUFsQjtBQUNBLGdCQUFPQSxLQUFNLENBQU4sQ0FBUDtBQUNILE1BSEQsTUFJSyxJQUFLLENBQUNrSSxlQUFlbEksS0FBTSxDQUFOLENBQWYsRUFBMEJuRixTQUExQixFQUFxQyxJQUFyQyxDQUFOLEVBQW1EO0FBQ3BELGdCQUFPLFlBQWdCO0FBQUEsZ0RBQVh3TixLQUFXO0FBQVhBLHNCQUFXO0FBQUE7O0FBQ25CO0FBQ0EsaUJBQUtBLE1BQU8sQ0FBUCxhQUFzQnZULGlCQUF0QixJQUEyQ3VULE1BQU8sQ0FBUCxhQUFzQnZULGlCQUFqRSxJQUFzRnVULE1BQU8sQ0FBUCxFQUFXOUwsY0FBWCxDQUEwQjhMLE1BQU8sQ0FBUCxDQUExQixDQUEzRixFQUFtSTtBQUMvSEEsdUJBQU8sQ0FBUCxFQUFXaEgsS0FBWCxHQUFtQitHLGtCQUFrQkMsTUFBTyxDQUFQLENBQWxCLEVBQThCckksSUFBOUIsRUFBb0MsSUFBcEMsRUFBMEMsSUFBMUMsQ0FBbkI7QUFDQSx3QkFBT3FJLE1BQU8sQ0FBUCxDQUFQO0FBQ0gsY0FIRCxNQUtJLE9BQU81VSwrQkFBYTRVLE1BQU8sQ0FBUCxDQUFiLFNBQTRCckksSUFBNUIsRUFBUDtBQUNQLFVBUkQ7QUFTSDtBQUNELFlBQU9vSSxrQkFBa0JwSSxLQUFNLENBQU4sQ0FBbEIsRUFBNkJBLEtBQUtyRixLQUFMLENBQVcsQ0FBWCxDQUE3QixFQUE0QyxLQUE1QyxFQUFtRCxJQUFuRCxDQUFQO0FBQ0g7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O1NBSUloSCxlLEdBQUFBLGU7U0FDQUgsTyxHQUFBQSxPO1NBQ0FDLFksR0FBQUEsWSIsImZpbGUiOiIuLi8uLi9kaXN0L1JlU2NvcGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZjI0NDJlYmIyYzA0ZjJiMmNjNmYiLCIvKlxuICogQ29weXJpZ2h0IChjKSAgMjAxOCBXaXNlIFdpbGQgV2ViIC5cbiAqXG4gKiAgTUlUIExpY2Vuc2VcbiAqXG4gKiAgUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqICBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiAgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuICogIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqICBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqICBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqICBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiAgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqICBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuICogIFNPRlRXQVJFLlxuICpcbiAqIEBhdXRob3IgOiBOYXRoYW5hZWwgQnJhdW5cbiAqIEBjb250YWN0IDogY2FpcGlsYWJzQGdtYWlsLmNvbVxuICovXG5cbmxldCAkZ2xvYmFsID0gKCB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyApID8gd2luZG93IDogZ2xvYmFsO1xuXG5pbXBvcnQgU2NvcGUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gXCIuL1Njb3BlXCI7XG5pbXBvcnQgU3RvcmUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gXCIuL1N0b3JlXCI7XG5pbXBvcnQgeyBhZGRTY29wYWJsZVR5cGUsIHJlU2NvcGUsIHNjb3BlVG9TdGF0ZSB9IGZyb20gXCIuL3V0aWxzL3Njb3BhYmxlXCI7XG5cbmNvbnN0IFJTID0gJGdsb2JhbC5fX19yZXNjb3BlIHx8IHt9O1xuaWYgKCAkZ2xvYmFsLl9fX3Jlc2NvcGUgKSB7XG4gICAgY29uc29sZS53YXJuKFwiUmVTY29wZSBpcyBkZWZpbmVkIG11bHRpcGxlIHRpbWVzICEhIFxcbkNoZWNrIHlvdSdyZSBwYWNrYWdpbmdcIilcbn1cbmVsc2Uge1xuICAgIFxuICAgICRnbG9iYWwuX19fcmVzY29wZSA9IFJTO1xuICAgIFNjb3BlLlN0b3JlICAgICAgICA9IFN0b3JlO1xuICAgIC8vUlMuY29uc29sZSAgICAgICAgID0gY29uc29sZTtcbiAgICBSUy5TY29wZSAgICAgICAgICAgPSBTY29wZTtcbiAgICBSUy5Db250ZXh0ICAgICAgICAgPSBTY29wZTtcbiAgICBSUy5TdG9yZSAgICAgICAgICAgPSBTdG9yZTtcbiAgICBSUy5yZVNjb3BlICAgICAgICAgPSByZVNjb3BlO1xuICAgIFJTLnNjb3BlVG9TdGF0ZSAgICA9IHNjb3BlVG9TdGF0ZTtcbiAgICBSUy5yZVNjb3BlU3RhdGUgICAgPSBzY29wZVRvU3RhdGU7XG4gICAgUlMuYWRkU2NvcGFibGVUeXBlID0gYWRkU2NvcGFibGVUeXBlO1xuICAgIFJTLnNjb3BlUmVmICAgICAgICA9XG4gICAgICAgIGZ1bmN0aW9uIHNjb3BlUmVmKCBtYXAsIGtleSApIHtcbiAgICAgICAgICAgIG1hcFsga2V5IF0gPSBuZXcgU2NvcGUuc2NvcGVSZWYobWFwWyBrZXkgXSk7XG4gICAgICAgICAgICByZXR1cm4gbWFwO1xuICAgICAgICB9O1xuICAgIFxufVxuZXhwb3J0IGRlZmF1bHQgUlM7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LmpzIiwiLypcbiAqIENvcHlyaWdodCAoYykgIDIwMTggV2lzZSBXaWxkIFdlYiAuXG4gKlxuICogIE1JVCBMaWNlbnNlXG4gKlxuICogIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqICBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiAgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqICBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqICBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqICBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcbiAqICBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqICBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiAgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiAgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiAgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiAgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcbiAqICBTT0ZUV0FSRS5cbiAqXG4gKiBAYXV0aG9yIDogTmF0aGFuYWVsIEJyYXVuXG4gKiBAY29udGFjdCA6IGNhaXBpbGFic0BnbWFpbC5jb21cbiAqL1xuXG5cbnZhciBpcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL3V0aWxzL2lzJyksXG4gICAgeyB3YWxrblNldCwgd2Fsa25HZXQsIGtleVdhbGtuU2V0LCBrZXlXYWxrbkdldCB9ID0gcmVxdWlyZSgnLi91dGlscy91dGlscycpLFxuICAgIEV2ZW50RW1pdHRlciAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vdXRpbHMvRW1pdHRlcicpLFxuICAgIHNob3J0aWQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJ3Nob3J0aWQnKVxuXHQsIF9fcHJvdG9fX3B1c2ggICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSAoIHRhcmdldCwgaWQsIHBhcmVudCApID0+IHtcblx0ICAgIGxldCBmbiAgICAgICA9IGZ1bmN0aW9uICgpIHtcblx0ICAgIH07XG5cdCAgICBmbi5wcm90b3R5cGUgPSBwYXJlbnQgPyBuZXcgcGFyZW50Ll9baWRdKCkgOiB0YXJnZXRbaWRdIHx8IHt9O1xuXHQgICAgdGFyZ2V0W2lkXSAgID0gbmV3IGZuKCk7XG5cdCAgICB0YXJnZXQuX1tpZF0gPSBmbjtcbiAgICB9LFxuXHRvcGVuU2NvcGVzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSB7fSxcblx0U2ltcGxlT2JqZWN0UHJvdG8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID0gKHt9KS5jb25zdHJ1Y3RvcjtcblxuLyoqXG4gKiBCYXNlIFNjb3BlIG9iamVjdFxuICovXG5jbGFzcyBTY29wZSBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG5cdHN0YXRpYyBnZXRTY29wZSggc2NvcGVzICkge1xuXHRcdGxldCBza2V5ID0gaXMuYXJyYXkoc2NvcGVzKSA/IHNjb3Blcy5zb3J0KCggYSwgYiApID0+IHtcblx0XHRcdGlmICggYS5maXJzdG5hbWUgPCBiLmZpcnN0bmFtZSApIHJldHVybiAtMTtcblx0XHRcdGlmICggYS5maXJzdG5hbWUgPiBiLmZpcnN0bmFtZSApIHJldHVybiAxO1xuXHRcdFx0cmV0dXJuIDA7XG5cdFx0fSkuam9pbignKycpIDogc2NvcGVzO1xuXHRcdHJldHVybiBvcGVuU2NvcGVzW3NrZXldID0gb3BlblNjb3Blc1tza2V5XSB8fCBuZXcgU2NvcGUoe30sIHsgaWQ6IHNrZXkgfSk7XG5cdH07XG5cdFxuXHRcblx0LyoqXG5cdCAqIGdldCBhIHBhcnNlZCByZWZlcmVuY2UgbGlzdCBmcm9tIHN0YXRlTWFwXG5cdCAqIEBwYXJhbSBfcmVmXG5cdCAqIEByZXR1cm5zIHt7c3RvcmVJZCwgcGF0aCwgYWxpYXM6ICosIHJlZjogKn19XG5cdCAqL1xuXHRzdGF0aWMgc3RhdGVNYXBUb1JlZkxpc3QoIHNtLCBzdGF0ZSA9IHt9LCBfcmVmcyA9IFtdLCBhY3Rpb25zID0ge30sIHBhdGggPSBcIlwiICkge1xuXHRcdE9iamVjdC5rZXlzKHNtKS5mb3JFYWNoKFxuXHRcdFx0a2V5ID0+IHtcblx0XHRcdFx0bGV0IGNwYXRoID0gcGF0aCA/IHBhdGggKyAnLicgKyBrZXkgOiBrZXk7XG5cdFx0XHRcdHNtW2tleV0gaW5zdGFuY2VvZiBTY29wZS5zY29wZVJlZlxuXHRcdFx0XHQ/IF9yZWZzLnB1c2goc21ba2V5XS5wYXRoICsgJzonICsgY3BhdGgpXG5cdFx0XHRcdDogKHNtW2tleV0gJiYgc21ba2V5XSBpbnN0YW5jZW9mIEZ1bmN0aW9uKVxuXHRcdFx0XHQgID8gYWN0aW9uc1trZXldID0gc21ba2V5XVxuXHRcdFx0XHQgIDogKHNtW2tleV0gJiYgc21ba2V5XS5wcm90b3R5cGUgaW5zdGFuY2VvZiBTY29wZS5TdG9yZSlcblx0XHRcdFx0ICAgID8gX3JlZnMucHVzaChzbVtrZXldLmFzKGNwYXRoKSlcblx0XHRcdFx0ICAgIDogc3RhdGVbY3BhdGhdID0gc21ba2V5XVxuXHRcdFx0XHQvLzogdGhpcy5zdGF0ZU1hcFRvUmVmTGlzdChzbVtrZXldLCBfcmVmcywgcGF0aCArICcuJyArIGtleSlcblx0XHRcdH1cblx0XHQpXG5cdFx0cmV0dXJuIF9yZWZzO1xuXHR9XG5cdFxuXHRzdGF0aWMgcGVyc2lzdGVuY2VUbSA9IDE7Ly8gaWYgPiAwLCB3aWxsIHdhaXQgJ3BlcnNpc3RlbmNlVG0nIG1zIGJlZm9yZSBkZXN0cm95XG5cdC8vIHdoZW5cblx0Ly8gZGlzcG9zZSByZWFjaCAwXG5cdHN0YXRpYyBTdG9yZSAgICA9IG51bGw7XG5cdHN0YXRpYyBzY29wZVJlZiA9IGZ1bmN0aW9uIHNjb3BlUmVmKCBwYXRoICkge1xuXHRcdHRoaXMucGF0aCA9IHBhdGg7XG5cdH07XG5cdHN0YXRpYyBzY29wZXMgICA9IG9wZW5TY29wZXM7Ly8gYWxsIGFjdGl2ZSBzY29wZXNcblx0XG5cdFxuXHQvKipcblx0ICogSW5pdCBhIFJlU2NvcGUgc2NvcGVcblx0ICpcblx0ICogQHBhcmFtIHN0b3Jlc01hcCB7T2JqZWN0fSBPYmplY3Qgd2l0aCB0aGUgaW5pdGlhbCBzdG9yZXMgZGVmaW5pdGlvbiAvIGluc3RhbmNlc1xuXHQgKiBAcGFyYW0gY29uZmlnIHtPYmplY3R9IFNjb3BlIGNvbmZpZ1xuXHQgKiB7XG5cdCAqICBwYXJlbnQge3Njb3BlfSBAb3B0aW9uYWwgcGFyZW50IHNjb3BlXG5cdCAqXG5cdCAqICBpZCB7c3RyaW5nfSBAb3B0aW9uYWwgaWQgKCBpZiB0aGlzIGlkIGV4aXN0IHN0b3Jlc01hcCB3aWxsIGJlIG1lcmdlIG9uIHRoZSAnaWQnXG5cdCAqICAgICBzY29wZSkga2V5IHtzdHJpbmd9IEBvcHRpb25hbCBrZXkgb2YgdGhlIHNjb3BlICggaWYgbm8gaWQgaXMgc2V0LCB0aGUgc2NvcGUgaWRcblx0ICogICAgIHdpbGwgYmUgKHBhcmVudC5pZCsnPicra2V5KSBpbmNyZW1lbnRJZCB7Ym9vbH0gQG9wdGlvbmFsIHRydWUgdG8gYWRkIGEgc3VmZml4XG5cdCAqICAgICBpZCwgaWYgdGhlIHByb3ZpZGVkIGtleSBvciBpZCBnbG9iYWxseSBleGlzdFxuXHQgKlxuXHQgKiAgc3RhdGUge09iamVjdH0gQG9wdGlvbmFsIGluaXRpYWwgc3RhdGUgYnkgc3RvcmUgYWxpYXNcblx0ICogIGRhdGEge09iamVjdH0gQG9wdGlvbmFsIGluaXRpYWwgZGF0YSBieSBzdG9yZSBhbGlhc1xuXHQgKlxuXHQgKiAgcm9vdEVtaXR0ZXIge2Jvb2x9IEBvcHRpb25hbCB0cnVlIHRvIG5vdCBiZWluZyBkZXN0YWJpbGl6ZWQgYnkgcGFyZW50XG5cdCAqICBib3VuZGVkQWN0aW9ucyB7YXJyYXkgfCByZWdleHB9IEBvcHRpb25hbCBsaXN0IG9yIHJlZ2V4cCBvZiBhY3Rpb25zIG5vdFxuXHQgKiAgICAgcHJvcGFnYXRlZCB0byB0aGUgcGFyZW50XG5cdCAqXG5cdCAqICBwZXJzaXN0ZW5jZVRtIHtudW1iZXIpIGlmID4gMCwgd2lsbCB3YWl0ICdwZXJzaXN0ZW5jZVRtJyBtcyBiZWZvcmUgZGVzdHJveSB3aGVuXG5cdCAqICAgICBkaXNwb3NlIHJlYWNoIDAgYXV0b0Rlc3Ryb3kgIHtib29sfSB3aWxsIHRyaWdnZXIgcmV0YWluICYgZGlzcG9zZSBhZnRlciBzdGFydFxuXHQgKiAgfVxuXHQgKiBAcmV0dXJucyB7U2NvcGV9XG5cdCAqL1xuXHRjb25zdHJ1Y3Rvciggc3RvcmVzTWFwLCB7IHBhcmVudCwgdXBwZXJTY29wZSwga2V5LCBpZCwgc25hcHNob3QsIHN0YXRlLCBkYXRhLCBpbmNyZW1lbnRJZCA9ICEha2V5LCBwZXJzaXN0ZW5jZVRtLCBhdXRvRGVzdHJveSwgcm9vdEVtaXR0ZXIsIGJvdW5kZWRBY3Rpb25zIH0gPSB7fSApIHtcblx0XHRzdXBlcigpO1xuXHRcdHZhciBfID0ge1xuXHRcdFx0a2V5UElEOiAodXBwZXJTY29wZSAmJiB1cHBlclNjb3BlLl9pZCB8fCBwYXJlbnQgJiYgcGFyZW50Ll9pZCB8fCBzaG9ydGlkLmdlbmVyYXRlKCkpLFxuXHRcdFx0a2V5LFxuXHRcdFx0aW5jcmVtZW50SWQsXG5cdFx0XHRiYXNlSWQ6IGlkXG5cdFx0fSwga2V5SW5kZXg7XG5cdFx0XG5cdFx0aWQgPSBpZCB8fCBrZXkgJiYgKF8ua2V5UElEICsgJz4nICsga2V5KTtcblx0XHRcblx0XHRfLmlzTG9jYWxJZCA9ICFpZDtcblx0XHRcblx0XHQvL2lmICggcGFyZW50ICYmIGtleSApIHtcblx0XHQvLyAgICBrZXlJbmRleCA9IHBhcmVudC5fLmNoaWxkU2NvcGVzLmZpbmQoY3R4PT4oY3R4Ll9pZD09aWQpKTtcblx0XHQvLyAgICBpZiAoIGtleUluZGV4ID09IC0xICkga2V5SW5kZXggPSBwYXJlbnQuXy5zZWVuQ2hpbGRzO1xuXHRcdC8vICAgIGtleUluZGV4Kys7XG5cdFx0Ly8gICAgaWYgKCBrZXlJbmRleCApXG5cdFx0Ly8gICAgICAgIGlkID0gaWQgKyAnWycgKyBrZXlJbmRleCArICddJztcblx0XHQvL31cblx0XHRcblx0XHRpZCA9IGlkIHx8IChcIl9fX19fXCIgKyBzaG9ydGlkLmdlbmVyYXRlKCkpO1xuXHRcdFxuXHRcdFxuXHRcdGlmICggb3BlblNjb3Blc1tpZF0gJiYgIWluY3JlbWVudElkICkgey8vIG92ZXJ3cml0ZSBleGlzdGluZyBzY29wZVxuXHRcdFx0dGhpcy5faWQgPSBpZDtcblx0XHRcdG9wZW5TY29wZXNbaWRdLnJlZ2lzdGVyKHN0b3Jlc01hcCk7XG5cdFx0XHRyZXR1cm4gb3BlblNjb3Blc1tpZF1cblx0XHR9XG5cdFx0ZWxzZSBpZiAoIG9wZW5TY29wZXNbaWRdICYmIGluY3JlbWVudElkICkgey8vIGdlbmVyYXRlIGtleSBpZFxuXHRcdFx0bGV0IGkgPSAtMTtcblx0XHRcdHdoaWxlICggb3BlblNjb3Blc1tpZCArICdbJyArICgrK2kpICsgJ10nXSApIDtcblx0XHRcdGlkID0gaWQgKyAnWycgKyBpICsgJ10nO1xuXHRcdH1cblx0XHRcblx0XHR0aGlzLl9pZCAgICAgICAgPSBpZDtcblx0XHR0aGlzLl9yZXYgICAgICAgPSAwO1xuXHRcdG9wZW5TY29wZXNbaWRdICA9IHRoaXM7XG5cdFx0Xy5wZXJzaXN0ZW5jZVRtID0gcGVyc2lzdGVuY2VUbSB8fCB0aGlzLmNvbnN0cnVjdG9yLnBlcnNpc3RlbmNlVG07XG5cdFx0XG5cdFx0dGhpcy5hY3Rpb25zID0ge307XG5cdFx0dGhpcy5zdG9yZXMgID0ge307XG5cdFx0dGhpcy5zdGF0ZSAgID0ge307XG5cdFx0dGhpcy5kYXRhICAgID0ge307XG5cdFx0XG5cdFx0dGhpcy5wYXJlbnQgICAgICAgPSBwYXJlbnQ7XG5cdFx0dGhpcy5fICAgICAgICAgICAgPSBfO1xuXHRcdHRoaXMuX2F1dG9EZXN0cm95ID0gYXV0b0Rlc3Ryb3k7XG5cdFx0XG5cdFx0aWYgKCBwYXJlbnQgJiYgcGFyZW50LmRlYWQgKVxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiQ2FuJ3QgdXNlIGEgZGVhZCBzY29wZSBhcyBwYXJlbnQgIVwiKTtcblx0XHRcblx0XHRfX3Byb3RvX19wdXNoKHRoaXMsICdhY3Rpb25zJywgcGFyZW50KTtcblx0XHRfX3Byb3RvX19wdXNoKHRoaXMsICdzdG9yZXMnLCBwYXJlbnQpO1xuXHRcdF9fcHJvdG9fX3B1c2godGhpcywgJ3N0YXRlJywgcGFyZW50KTtcblx0XHRfX3Byb3RvX19wdXNoKHRoaXMsICdkYXRhJywgcGFyZW50KTtcblx0XHRcblx0XHR0aGlzLnNvdXJjZXMgICAgICA9IFtdO1xuXHRcdF8uY2hpbGRTY29wZXMgICAgID0gW107XG5cdFx0Xy5jaGlsZFNjb3Blc0xpc3QgPSBbXTtcblx0XHRfLnVuU3RhYmxlQ2hpbGRzICA9IDA7XG5cdFx0Xy5zZWVuQ2hpbGRzICAgICAgPSAwO1xuXHRcdFxuXHRcdHRoaXMuX19yZXRhaW5zID0geyBhbGw6IDAgfTtcblx0XHR0aGlzLl9fbG9ja3MgICA9IHsgYWxsOiAxIH07XG5cdFx0XG5cdFx0Ly9fLnNuYXBzaG90ICAgICAgICA9IHNuYXBzaG90O1xuXHRcdC8vXy5zbmFwc2hvdCAgICAgICAgPSBzbmFwc2hvdDtcblx0XHRfLl9ib3VuZGVkQWN0aW9ucyA9IGlzLmFycmF5KGJvdW5kZWRBY3Rpb25zKVxuXHRcdCAgICAgICAgICAgICAgICAgICAgPyB7IHRlc3Q6IGJvdW5kZWRBY3Rpb25zLmluY2x1ZGVzLmJpbmQoYm91bmRlZEFjdGlvbnMpIH1cblx0XHQgICAgICAgICAgICAgICAgICAgIDogYm91bmRlZEFjdGlvbnM7XG5cdFx0Xy5fbGlzdGVuaW5nICAgICAgPSB7fTtcblx0XHRfLl9zY29wZSAgICAgICAgICA9IHt9O1xuXHRcdF8uX21peGVkICAgICAgICAgID0gW107XG5cdFx0Xy5fbWl4ZWRMaXN0ICAgICAgPSBbXTtcblx0XHRfLmZvbGxvd2VycyAgICAgICA9IFtdO1xuXHRcdGlmICggcGFyZW50ICkge1xuXHRcdFx0cGFyZW50LnJldGFpbihcImlzTXlQYXJlbnRcIik7XG5cdFx0XHRpZiAoICFyb290RW1pdHRlciApIHtcblx0XHRcdFx0IXBhcmVudC5fc3RhYmxlICYmIHRoaXMud2FpdChcIndhaXRpbmdQYXJlbnRcIik7XG5cdFx0XHRcdHBhcmVudC5vbihfLl9wYXJlbnRMaXN0ID0ge1xuXHRcdFx0XHRcdCdzdGFibGUnICA6IHMgPT4gdGhpcy5yZWxlYXNlKFwid2FpdGluZ1BhcmVudFwiKSxcblx0XHRcdFx0XHQndW5zdGFibGUnOiBzID0+IHRoaXMud2FpdChcIndhaXRpbmdQYXJlbnRcIiksXG5cdFx0XHRcdFx0J3VwZGF0ZScgIDogcyA9PiB0aGlzLl9wcm9wYWcoKVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHRwYXJlbnQub24oXy5fcGFyZW50TGlzdCA9IHtcblx0XHRcdFx0XHQndXBkYXRlJzogcyA9PiB0aGlzLl9wcm9wYWcoKVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHRcdC8vIHRoaXMucmVnaXN0ZXIocGFyZW50Ll9fc2NvcGUsIHN0YXRlLCBkYXRhKTtcblx0XHR9XG5cdFx0XG5cdFx0XG5cdFx0dGhpcy5yZWdpc3RlcihzdG9yZXNNYXAsIHN0YXRlLCBkYXRhKTtcblx0XHR0aGlzLl9fbG9ja3MuYWxsLS07XG5cdFx0dGhpcy5fc3RhYmxlID0gIXRoaXMuX19sb2Nrcy5hbGw7XG5cdFx0XG5cdFx0aWYgKCBwYXJlbnQgKSB7XG5cdFx0XHRwYXJlbnQuX2FkZENoaWxkKHRoaXMpO1xuXHRcdH1cblx0XHRcblx0XHR0aGlzLnJlc3RvcmUoc25hcHNob3QpO1xuXHRcdFxuXHRcdGlmICggYXV0b0Rlc3Ryb3kgKVxuXHRcdFx0c2V0VGltZW91dChcblx0XHRcdFx0dG0gPT4ge1xuXHRcdFx0XHRcdHRoaXMucmV0YWluKFwiYXV0b0Rlc3Ryb3lcIik7XG5cdFx0XHRcdFx0dGhpcy5kaXNwb3NlKFwiYXV0b0Rlc3Ryb3lcIik7XG5cdFx0XHRcdH1cblx0XHRcdClcblx0XHRcblx0fVxuXHRcblx0LyoqXG5cdCAqXG5cdCAqIE1vdW50IHRoZSBzdG9yZXMgaW4gc3RvcmVzTGlzdCwgaW4gdGhpcyBzY29wZSBvciBpbiBpdHMgcGFyZW50cyBvciBtaXhlZCBzY29wZXNcblx0ICpcblx0ICogQHBhcmFtIHN0b3Jlc0xpc3Qge3N0cmluZ3xzdG9yZVJlZn0gU3RvcmUgbmFtZSwgQXJyYXkgb2YgU3RvcmUgbmFtZXMsIG9yIFJlc2NvcGVcblx0ICogICAgIHN0b3JlIHJlZiBmcm9tIFN0b3JlOjphcyBvciBTdG9yZTphc1xuXHQgKiBAcGFyYW0gc3RhdGVcblx0ICogQHBhcmFtIGRhdGFcblx0ICogQHJldHVybnMge1Njb3BlfVxuXHQgKi9cblx0bW91bnQoIHN0b3Jlc0xpc3QsIHNuYXBzaG90LCBzdGF0ZSwgZGF0YSApIHtcblx0XHRpZiAoIGlzLmFycmF5KHN0b3Jlc0xpc3QpICkge1xuXHRcdFx0c3RvcmVzTGlzdC5mb3JFYWNoKGsgPT4gdGhpcy5fbW91bnQoaywgc25hcHNob3QsIHN0YXRlLCBkYXRhKSk7XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0dGhpcy5fbW91bnQoLi4uYXJndW1lbnRzKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblx0XG5cdF9tb3VudCggaWQsIHNuYXBzaG90LCBzdGF0ZSwgZGF0YSApIHtcblx0XHRsZXQgcmVmLCBzbmFwO1xuXHRcdFxuXHRcdHJlZiA9IHRoaXMucGFyc2VSZWYoaWQpXG5cdFx0XG5cdFx0aWYgKCBpZCA9PSBcIiRwYXJlbnRcIiApIHJldHVybjtcblx0XHRpZiAoICF0aGlzLl8uX3Njb3BlW3JlZi5zdG9yZUlkXSApIHsvL2FzayBtaXhlZCB8fCBwYXJlbnRcblx0XHRcdGlmICggdGhpcy5fLl9taXhlZC5yZWR1Y2VSaWdodCgoIG1vdW50ZWQsIGN0eCApID0+IChtb3VudGVkIHx8IGN0eC5fbW91bnQoaWQsIHNuYXBzaG90LCBzdGF0ZSwgZGF0YSkpLCBmYWxzZSkgfHxcblx0XHRcdFx0IXRoaXMucGFyZW50IClcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0cmV0dXJuIHRoaXMucGFyZW50Ll9tb3VudCguLi5hcmd1bWVudHMpO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdGxldCBzdG9yZSA9IHRoaXMuXy5fc2NvcGVbcmVmLnN0b3JlSWRdLCB0YXNrUXVldWUgPSBbXTtcblx0XHRcdGlmICggaXMucnNTdG9yZUNsYXNzKHN0b3JlKSApIHtcblx0XHRcdFx0dGhpcy5fLl9zY29wZVtyZWYuc3RvcmVJZF0gPSBuZXcgc3RvcmUodGhpcywge1xuXHRcdFx0XHRcdC8vc25hcHNob3QsXG5cdFx0XHRcdFx0bmFtZTogcmVmLnN0b3JlSWQsXG5cdFx0XHRcdFx0c3RhdGUsXG5cdFx0XHRcdFx0ZGF0YVxuXHRcdFx0XHR9LCB0YXNrUXVldWUpO1xuXHRcdFx0XHR3aGlsZSAoIHRhc2tRdWV1ZS5sZW5ndGggKSB0YXNrUXVldWUuc2hpZnQoKSgpO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSBpZiAoIGlzLnJzU2NvcGVDbGFzcyhzdG9yZSkgKSB7XG5cdFx0XHRcdHN0b3JlID0gdGhpcy5fLl9zY29wZVtyZWYuc3RvcmVJZF0gPSBuZXcgc3RvcmUoeyAkcGFyZW50OiB0aGlzIH0sIHtcblx0XHRcdFx0XHRrZXkgICAgICAgIDogcmVmLnN0b3JlSWQsXG5cdFx0XHRcdFx0aW5jcmVtZW50SWQ6IHRydWUsXG5cdFx0XHRcdFx0dXBwZXJTY29wZSA6IHRoaXNcblx0XHRcdFx0XHQvL2F1dG9EZXN0cm95OiB0cnVlXG5cdFx0XHRcdFx0Ly9wYXJlbnQ6IHRoaXNcblx0XHRcdFx0fSk7XG5cdFx0XHRcdC8vdGhpcy5fLl9zY29wZVsgcmVmLnN0b3JlSWQgXS5yZXRhaW4oXCJzY29wZWRDaGlsZFNjb3BlXCIpO1xuXHRcdFx0XHQvL3RoaXMuX3dhdGNoU3RvcmUocmVmLnN0b3JlSWQpO1xuXHRcdFx0XHRpZiAoIHJlZi5wYXRoLmxlbmd0aCA+IDEgKVxuXHRcdFx0XHRcdHRoaXMuXy5fc2NvcGVbcmVmLnN0b3JlSWRdLm1vdW50KHJlZi5wYXRoLnNsaWNlKDEpLmpvaW4oJy4nKSwgc25hcHNob3QsIHN0YXRlLCBkYXRhKVxuXHRcdFx0XHQvL2Vsc2UgcmV0dXJuIHRoaXMuXy5fc2NvcGVbIHJlZi5zdG9yZUlkIF07XG5cdFx0XHR9XG5cdFx0XHRpZiAoIGlzLnJzU3RvcmUoc3RvcmUpICkge1xuXHRcdFx0XHRpZiAoIHN0YXRlICE9PSB1bmRlZmluZWQgJiYgZGF0YSA9PT0gdW5kZWZpbmVkIClcblx0XHRcdFx0XHRzdG9yZS5zZXRTdGF0ZShzdGF0ZSk7XG5cdFx0XHRcdGVsc2UgaWYgKCBzdGF0ZSAhPT0gdW5kZWZpbmVkIClcblx0XHRcdFx0XHRzdG9yZS5zdGF0ZSA9IHN0YXRlO1xuXHRcdFx0XHRcblx0XHRcdFx0aWYgKCBkYXRhICE9PSB1bmRlZmluZWQgKVxuXHRcdFx0XHRcdHN0b3JlLnB1c2goZGF0YSk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLl93YXRjaFN0b3JlKHJlZi5zdG9yZUlkKTtcblx0XHR9XG5cdFx0XG5cdFx0XG5cdFx0cmV0dXJuIHRoaXMuXy5fc2NvcGVbcmVmLnN0b3JlSWRdO1xuXHR9XG5cdFxuXHRfd2F0Y2hTdG9yZSggaWQsIHN0YXRlLCBkYXRhICkge1xuXHRcdGlmICggIXRoaXMuXy5fbGlzdGVuaW5nW2lkXSAmJiAhaXMuZm4odGhpcy5fLl9zY29wZVtpZF0pICkge1xuXHRcdFx0Ly9pZiAoIGlzLnJzU3RvcmUodGhpcy5fLl9zY29wZVsgaWQgXSkgKSB7XG5cdFx0XHQhdGhpcy5fLl9zY29wZVtpZF0uX2F1dG9EZXN0cm95ICYmIHRoaXMuXy5fc2NvcGVbaWRdLnJldGFpbihcInNjb3BlZFwiKTtcblx0XHRcdCF0aGlzLl8uX3Njb3BlW2lkXS5pc1N0YWJsZSgpICYmIHRoaXMud2FpdChpZCk7XG5cdFx0XHR0aGlzLl8uX3Njb3BlW2lkXS5vbihcblx0XHRcdFx0dGhpcy5fLl9saXN0ZW5pbmdbaWRdID0ge1xuXHRcdFx0XHRcdCdkZXN0cm95JyA6IHMgPT4ge1xuXHRcdFx0XHRcdFx0ZGVsZXRlIHRoaXMuXy5fbGlzdGVuaW5nW2lkXTtcblx0XHRcdFx0XHRcdHRoaXMuXy5fc2NvcGVbaWRdID0gdGhpcy5fLl9zY29wZVtpZF0uY29uc3RydWN0b3I7XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHQndXBkYXRlJyAgOiBzID0+IHRoaXMucHJvcGFnKCksXG5cdFx0XHRcdFx0J3N0YWJsZScgIDogcyA9PiB0aGlzLnJlbGVhc2UoaWQpLFxuXHRcdFx0XHRcdCd1bnN0YWJsZSc6IHMgPT4gdGhpcy53YWl0KGlkKVxuXHRcdFx0XHR9KTtcblx0XHR9XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBNaXggdGFyZ2V0Q3R4IG9uIHRoaXMgc2NvcGVcblx0ICogTWl4ZWQgc2NvcGUgcGFyZW50cyBhcmUgTk9UIG1hcHBlZFxuXHQgKiBAcGFyYW0gdGFyZ2V0Q3R4XG5cdCAqL1xuXHRtaXhpbiggdGFyZ2V0Q3R4ICkge1xuXHRcdGxldCBwYXJlbnQgPSB0aGlzLnBhcmVudCwgbGlzdHM7XG5cdFx0XG5cdFx0dGhpcy5fLl9taXhlZC5wdXNoKHRhcmdldEN0eClcblx0XHR0YXJnZXRDdHgucmV0YWluKFwibWl4ZWRUb1wiKTtcblx0XHRpZiAoICF0YXJnZXRDdHguX3N0YWJsZSApXG5cdFx0XHR0aGlzLndhaXQodGFyZ2V0Q3R4Ll9pZCk7XG5cdFx0dGhpcy5fLl9taXhlZExpc3QucHVzaChsaXN0cyA9IHtcblx0XHRcdCdzdGFibGUnICA6IHMgPT4gdGhpcy5yZWxlYXNlKHRhcmdldEN0eC5faWQpLFxuXHRcdFx0J3Vuc3RhYmxlJzogcyA9PiB0aGlzLndhaXQodGFyZ2V0Q3R4Ll9pZCksXG5cdFx0XHQndXBkYXRlJyAgOiBzID0+IHRoaXMuX3Byb3BhZygpXG5cdFx0fSk7XG5cdFx0XG5cdFx0Ly90aGlzLmFjdGlvbnMgPSB7fTtcblx0XHQvL3RoaXMuc3RvcmVzICA9IHt9O1xuXHRcdC8vdGhpcy5zdGF0ZSAgID0ge307XG5cdFx0Ly90aGlzLmRhdGEgICAgPSB7fTtcblx0XHR0YXJnZXRDdHgub24obGlzdHMpO1xuXHRcdFxuXHRcdC8vIHJlc2V0IHByb3Rvc1xuXHRcdC8vIHB1c2ggbmV3IHByb3RvIHdpdGggcGFyZW50XG5cdFx0X19wcm90b19fcHVzaCh0aGlzLCAnYWN0aW9ucycsIHBhcmVudCk7XG5cdFx0X19wcm90b19fcHVzaCh0aGlzLCAnc3RvcmVzJywgcGFyZW50KTtcblx0XHRfX3Byb3RvX19wdXNoKHRoaXMsICdzdGF0ZScsIHBhcmVudCk7XG5cdFx0X19wcm90b19fcHVzaCh0aGlzLCAnZGF0YScsIHBhcmVudCk7XG5cdFx0Ly8gcHJpbnQgbG9jYWx6IGFjY2Vzc29yc1xuXHRcdHRoaXMucmVsaW5rKHRoaXMuXy5fc2NvcGUsIHRoaXMsIGZhbHNlLCB0cnVlKTtcblx0XHRcblx0XHR0aGlzLl8uX21peGVkLmZvckVhY2goXG5cdFx0XHRjdHggPT4ge1xuXHRcdFx0XHQvLyBwdXNoIHByb3Rvc1xuXHRcdFx0XHRfX3Byb3RvX19wdXNoKHRoaXMsICdhY3Rpb25zJyk7XG5cdFx0XHRcdF9fcHJvdG9fX3B1c2godGhpcywgJ3N0b3JlcycpO1xuXHRcdFx0XHRfX3Byb3RvX19wdXNoKHRoaXMsICdzdGF0ZScpO1xuXHRcdFx0XHRfX3Byb3RvX19wdXNoKHRoaXMsICdkYXRhJyk7XG5cdFx0XHRcdHRoaXMuc3RvcmVzLl9fb3JpZ2luID0gXCJtaXhlZCBcIiArIGN0eC5faWQ7XG5cdFx0XHRcdC8vIHdyaXRlIG1peGVkIGFjY2Vzc29yc1xuXHRcdFx0XHRjdHgucmVsaW5rKGN0eC5fLl9zY29wZSwgdGhpcywgdHJ1ZSwgdHJ1ZSlcblx0XHRcdH1cblx0XHQpXG5cdH1cblx0XG5cdC8qKlxuXHQgKiBSZWdpc3RlciBzdG9yZXMgaW4gc3RvcmVzTWFwICYgbGluayB0aGVtIGluIHRoZSBwcm90b3Ncblx0ICogQHBhcmFtIHN0b3Jlc01hcFxuXHQgKiBAcGFyYW0gc3RhdGVcblx0ICogQHBhcmFtIGRhdGFcblx0ICovXG5cdHJlZ2lzdGVyKCBzdG9yZXNNYXAsIHN0YXRlID0ge30sIGRhdGEgPSB7fSApIHtcblx0XHR0aGlzLnJlbGluayhzdG9yZXNNYXAsIHRoaXMsIGZhbHNlLCBmYWxzZSk7XG5cdFx0T2JqZWN0LmtleXMoc3RvcmVzTWFwKS5mb3JFYWNoKFxuXHRcdFx0aWQgPT4ge1xuXHRcdFx0XHRpZiAoIGlkID09IFwiJHBhcmVudFwiICkgcmV0dXJuO1xuXHRcdFx0XHRpZiAoIHN0b3Jlc01hcFtpZF0uc2luZ2xldG9uIHx8IChpcy5mbihzdG9yZXNNYXBbaWRdKSAmJiAoc3RhdGVbaWRdIHx8IGRhdGFbaWRdKSkgKSB7XG5cdFx0XHRcdFx0dGhpcy5fbW91bnQoaWQsIHVuZGVmaW5lZCwgc3RhdGVbaWRdLCBkYXRhW2lkXSlcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlIGlmICggc3RhdGVbaWRdIHx8IGRhdGFbaWRdICkge1xuXHRcdFx0XHRcdGlmICggZGF0YVtpZF0gKSB7XG5cdFx0XHRcdFx0XHRpZiAoIHN0YXRlW2lkXSApXG5cdFx0XHRcdFx0XHRcdHRoaXMuc3RvcmVzW2lkXS5zdGF0ZSA9IHN0YXRlW2lkXTtcblx0XHRcdFx0XHRcdHRoaXMuc3RvcmVzW2lkXS5wdXNoKGRhdGFbaWRdKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZWxzZSBpZiAoIHN0YXRlW2lkXSApIHtcblx0XHRcdFx0XHRcdHRoaXMuc3RvcmVzW2lkXS5zZXRTdGF0ZShzdGF0ZVtpZF0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHR0aGlzLl93YXRjaFN0b3JlKGlkKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdClcblx0XHRcblx0fVxuXHRcblx0LyoqXG5cdCAqIE1hcCBzcmNDdHggc3RvcmUncyBvbiB0YXJnZXRDdHggaGVhZGVycyBwcm90bydzXG5cdCAqIEBwYXJhbSBzcmNDdHhcblx0ICogQHBhcmFtIHRhcmdldEN0eFxuXHQgKiBAcGFyYW0gc3RhdGVcblx0ICogQHBhcmFtIGRhdGFcblx0ICovXG5cdHJlbGluayggc3JjQ3R4LCB0YXJnZXRDdHggPSB0aGlzLCBleHRlcm5hbCwgZm9yY2UgKSB7XG5cdFx0bGV0IGxjdHggPSB0YXJnZXRDdHguXy5zdG9yZXMucHJvdG90eXBlO1xuXHRcdE9iamVjdC5rZXlzKHNyY0N0eClcblx0XHQgICAgICAuZm9yRWFjaChcblx0XHRcdCAgICAgIGlkID0+IHtcblx0XHRcdFx0ICAgICAgaWYgKCAhZm9yY2UgJiYgdGFyZ2V0Q3R4Ll8uX3Njb3BlW2lkXSA9PT0gc3JjQ3R4W2lkXSB8fFxuXHRcdFx0XHRcdCAgICAgIHRhcmdldEN0eC5fLl9zY29wZVtpZF0gJiYgKHRhcmdldEN0eC5fLl9zY29wZVtpZF0uY29uc3RydWN0b3IgPT09IHNyY0N0eFtpZF0pIClcblx0XHRcdFx0XHQgICAgICByZXR1cm47XG5cdFx0XHRcdFxuXHRcdFx0XHQgICAgICBpZiAoICFmb3JjZSAmJiB0YXJnZXRDdHguXy5fc2NvcGVbaWRdICkge1xuXHRcdFx0XHRcdCAgICAgIGlmICggIWV4dGVybmFsICYmICFpcy5mbih0YXJnZXRDdHguXy5fc2NvcGVbaWRdKSApIHtcblx0XHRcdFx0XHRcdCAgICAgIGNvbnNvbGUuaW5mbyhcIlJlc2NvcGUgU3RvcmUgOiBcIiwgaWQsIFwiIGFscmVhZHkgZXhpc3QgaW4gdGhpcyBzY29wZSAhICggSG90IHN3aXRjaGluZyB0aGUgc3RvcmUgKVwiKTtcblx0XHRcdFx0XHRcdCAgICAgIGxldCB0bXAgICAgICAgICAgICAgICAgPSB0YXJnZXRDdHguXy5fc2NvcGVbaWRdO1xuXHRcdFx0XHRcdFx0ICAgICAgdGFyZ2V0Q3R4Ll8uX3Njb3BlW2lkXSA9IHRhcmdldEN0eC5fLl9zY29wZVtpZF0uY29uc3RydWN0b3I7XG5cdFx0XHRcdFx0XHQgICAgICB0aGlzLl9tb3VudChpZCwgbnVsbCwgdG1wLnN0YXRlKTtcblx0XHRcdFx0XHRcdCAgICAgIHRtcC5kZXN0cm95KCk7XG5cdFx0XHRcdFx0XHQgICAgICAvL3RhcmdldEN0eC5fLl9zY29wZVsgaWQgXS5fX3Byb3RvX18gPSB0bXAuX19wcm90b19fO1xuXHRcdFx0XHRcdCAgICAgIH1cblx0XHRcdFx0XHQgICAgICBpZiAoICFleHRlcm5hbCAmJiBpcy5mbih0YXJnZXRDdHguXy5fc2NvcGVbaWRdKSApXG5cdFx0XHRcdFx0XHQgICAgICB0YXJnZXRDdHguXy5fc2NvcGVbaWRdID0gc3JjQ3R4W2lkXTtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHQgICAgICByZXR1cm47XG5cdFx0XHRcdCAgICAgIH1cblx0XHRcdFx0ICAgICAgZWxzZSBpZiAoICFmb3JjZSAmJiAhZXh0ZXJuYWwgKVxuXHRcdFx0XHRcdCAgICAgIHRoaXMuXy5fc2NvcGVbaWRdID0gc3JjQ3R4W2lkXTtcblx0XHRcdFx0XG5cdFx0XHRcdCAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShcblx0XHRcdFx0XHQgICAgICBsY3R4LFxuXHRcdFx0XHRcdCAgICAgIGlkLFxuXHRcdFx0XHRcdCAgICAgIHtcblx0XHRcdFx0XHRcdCAgICAgIGVudW1lcmFibGUgIDogdHJ1ZSxcblx0XHRcdFx0XHRcdCAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcblx0XHRcdFx0XHRcdCAgICAgIGdldCAgICAgICAgIDogKCkgPT4gdGhpcy5fLl9zY29wZVtpZF1cblx0XHRcdFx0XHQgICAgICB9XG5cdFx0XHRcdCAgICAgICk7XG5cdFx0XHRcdCAgICAgIGlmICggaWQgPT0gXCIkcGFyZW50XCIgKSByZXR1cm47XG5cdFx0XHRcdCAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShcblx0XHRcdFx0XHQgICAgICB0YXJnZXRDdHguXy5zdGF0ZS5wcm90b3R5cGUsXG5cdFx0XHRcdFx0ICAgICAgaWQsXG5cdFx0XHRcdFx0ICAgICAge1xuXHRcdFx0XHRcdFx0ICAgICAgZW51bWVyYWJsZSAgOiB0cnVlLFxuXHRcdFx0XHRcdFx0ICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuXHRcdFx0XHRcdFx0ICAgICAgZ2V0ICAgICAgICAgOiAoKSA9PiAodGhpcy5fLl9zY29wZVtpZF0gJiYgdGhpcy5fLl9zY29wZVtpZF0uc3RhdGUpLFxuXHRcdFx0XHRcdFx0ICAgICAgc2V0ICAgICAgICAgOiAoIHYgKSA9PiAodGhpcy5fbW91bnQoaWQsIHVuZGVmaW5lZCwgdikpXG5cdFx0XHRcdFx0ICAgICAgfVxuXHRcdFx0XHQgICAgICApO1xuXHRcdFx0XHQgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoXG5cdFx0XHRcdFx0ICAgICAgdGFyZ2V0Q3R4Ll8uZGF0YS5wcm90b3R5cGUsXG5cdFx0XHRcdFx0ICAgICAgaWQsXG5cdFx0XHRcdFx0ICAgICAge1xuXHRcdFx0XHRcdFx0ICAgICAgZW51bWVyYWJsZSAgOiB0cnVlLFxuXHRcdFx0XHRcdFx0ICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuXHRcdFx0XHRcdFx0ICAgICAgZ2V0ICAgICAgICAgOiAoKSA9PiAodGhpcy5fLl9zY29wZVtpZF0gJiYgdGhpcy5fLl9zY29wZVtpZF0uZGF0YSksXG5cdFx0XHRcdFx0XHQgICAgICBzZXQgICAgICAgICA6ICggdiApID0+ICh0aGlzLl9tb3VudChpZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHYpKVxuXHRcdFx0XHRcdCAgICAgIH1cblx0XHRcdFx0ICAgICAgKTtcblx0XHRcdFx0XG5cdFx0XHRcdCAgICAgIGxldCBhY3Rpb25zICAgICAgID0gc3JjQ3R4W2lkXSBpbnN0YW5jZW9mIFNjb3BlLlN0b3JlXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgPyBzcmNDdHhbaWRdLmNvbnN0cnVjdG9yLmFjdGlvbnNcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICA6IHNyY0N0eFtpZF0uYWN0aW9ucyxcblx0XHRcdFx0ICAgICAgICAgIGFjdGl2ZUFjdGlvbnMgPSB0YXJnZXRDdHguXy5hY3Rpb25zLnByb3RvdHlwZTtcblx0XHRcdFx0ICAgICAgaWYgKCBpcy5yc1Njb3BlKHRoaXMuXy5fc2NvcGVbaWRdLnByb3RvdHlwZSkgKVxuXHRcdFx0XHRcdCAgICAgIHRoaXMuX21vdW50KGlkKTtcblx0XHRcdFx0ICAgICAgaWYgKCBpcy5yc1Njb3BlKHRoaXMuXy5fc2NvcGVbaWRdKSApIHtcblx0XHRcdFx0XHQgICAgICBhY3RpdmVBY3Rpb25zW2lkXSA9IHRoaXMuXy5fc2NvcGVbaWRdLmFjdGlvbnM7XG5cdFx0XHRcdCAgICAgIH1cblx0XHRcdFx0ICAgICAgaWYgKCAhaXMucnNTdG9yZSh0aGlzLl8uX3Njb3BlW2lkXSkgJiYgIWlzLnJzU3RvcmVDbGFzcyh0aGlzLl8uX3Njb3BlW2lkXSkgKVxuXHRcdFx0XHRcdCAgICAgIHJldHVybjtcblx0XHRcdFx0XG5cdFx0XHRcdCAgICAgIGFjdGlvbnMgJiZcblx0XHRcdFx0ICAgICAgT2JqZWN0LmtleXMoYWN0aW9ucylcblx0XHRcdFx0ICAgICAgICAgICAgLmZvckVhY2goXG5cdFx0XHRcdFx0ICAgICAgICAgICAgKCBhY3QgKSA9PiB7XG5cdFx0XHRcdFx0XHQgICAgICAgICAgICBpZiAoIGFjdGl2ZUFjdGlvbnMuaGFzT3duUHJvcGVydHkoYWN0KSApXG5cdFx0XHRcdFx0XHRcdCAgICAgICAgICAgIGFjdGl2ZUFjdGlvbnNbYWN0XS5fX3RhcmdldFN0b3JlcysrO1xuXHRcdFx0XHRcdFx0ICAgICAgICAgICAgZWxzZSB7XG5cdFx0XHRcdFx0XHRcdCAgICAgICAgICAgIGFjdGl2ZUFjdGlvbnNbYWN0XSAgICAgICAgICAgICAgICA9IHRoaXMuZGlzcGF0Y2guYmluZCh0aGlzLCBhY3QpO1xuXHRcdFx0XHRcdFx0XHQgICAgICAgICAgICBhY3RpdmVBY3Rpb25zW2FjdF0uX190YXJnZXRTdG9yZXMgPSAxO1xuXHRcdFx0XHRcdFx0ICAgICAgICAgICAgfVxuXHRcdFx0XHRcdCAgICAgICAgICAgIH1cblx0XHRcdFx0ICAgICAgICAgICAgKVxuXHRcdFx0ICAgICAgfVxuXHRcdCAgICAgIClcblx0fVxuXHRcblx0LyoqXG5cdCAqIEJpbmQgc3RvcmVzIGZyb20gdGhpcyBzY29wZSwgaGlzIHBhcmVudHMgYW5kIG1peGVkIHNjb3BlXG5cdCAqXG5cdCAqIEBwYXJhbSBvYmoge1JlYWN0LkNvbXBvbmVudHxTdG9yZXxmdW5jdGlvbn1cblx0ICogQHBhcmFtIGtleSB7c3RyaW5nfSBzdG9yZXMga2V5cyB0byBiaW5kIHVwZGF0ZXNcblx0ICogQHBhcmFtIGFzXG5cdCAqIEBwYXJhbSBzZXRJbml0aWFsIHtib29sfSBmYWxzZSB0byBub3QgcHJvcGFnIGluaXRpYWwgdmFsdWUgKGRlZmF1bHQgOiB0cnVlKVxuXHQgKi9cblx0YmluZCggb2JqLCBrZXksIGFzLCBzZXRJbml0aWFsID0gdHJ1ZSwgcmV2TWFwID0ge30gKSB7XG5cdFx0bGV0IGxhc3RSZXZzLCBkYXRhLCByZWZLZXlzO1xuXHRcdGlmICgga2V5ICYmICFpcy5hcnJheShrZXkpIClcblx0XHRcdGtleSA9IFtrZXldO1xuXHRcdFxuXHRcdGlmICggYXMgPT09IGZhbHNlIHx8IGFzID09PSB0cnVlICkge1xuXHRcdFx0c2V0SW5pdGlhbCA9IGFzO1xuXHRcdFx0YXMgICAgICAgICA9IG51bGw7XG5cdFx0fVxuXHRcdFxuXHRcdHJlZktleXMgPSBrZXlcblx0XHRcdC5tYXAoaWQgPT4gKGlzLnN0cmluZyhpZCkgPyBpZCA6IGlkLm5hbWUpKVxuXHRcdFx0Lm1hcChpZCA9PiAodGhpcy5wYXJzZVJlZihpZCkpKTtcblx0XHRcblx0XHRcblx0XHR0aGlzLl8uZm9sbG93ZXJzLnB1c2goXG5cdFx0XHRbXG5cdFx0XHRcdG9iaixcblx0XHRcdFx0a2V5LFxuXHRcdFx0XHRhcyB8fCB1bmRlZmluZWQsXG5cdFx0XHRcdGxhc3RSZXZzID0gcmVmS2V5cy5yZWR1Y2UoKCByZXZzLCByZWYgKSA9PiB7XG5cdFx0XHRcdFx0cmV2c1tyZWYuc3RvcmVJZF0gPSByZXZzW3JlZi5zdG9yZUlkXSB8fCB7XG5cdFx0XHRcdFx0XHRyZXYgOiAwLFxuXHRcdFx0XHRcdFx0cmVmczogW11cblx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdHJldnNbcmVmLnN0b3JlSWRdLnJlZnMucHVzaChyZWYpO1xuXHRcdFx0XHRcdHJldHVybiByZXZzO1xuXHRcdFx0XHR9LCByZXZNYXApXG5cdFx0XHRdKTtcblx0XHRcblx0XHR0aGlzLm1vdW50KGtleSk7XG5cdFx0dGhpcy5yZXRhaW5TdG9yZXMoT2JqZWN0LmtleXMobGFzdFJldnMpLCAnbGlzdGVuZXJzJyk7XG5cdFx0XG5cdFx0aWYgKCBzZXRJbml0aWFsICYmIHRoaXMuX3N0YWJsZSApIHtcblx0XHRcdGRhdGEgPSB0aGlzLmdldFVwZGF0ZXMobGFzdFJldnMpO1xuXHRcdFx0aWYgKCAhZGF0YSApIHJldHVybiB0aGlzO1xuXHRcdFx0aWYgKCB0eXBlb2Ygb2JqICE9IFwiZnVuY3Rpb25cIiApIHtcblx0XHRcdFx0aWYgKCBhcyApIG9iai5zZXRTdGF0ZSh7IFthc106IGRhdGEgfSk7XG5cdFx0XHRcdGVsc2Ugb2JqLnNldFN0YXRlKGRhdGEpO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdG9iaihkYXRhKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBVbiBiaW5kIHRoaXMgc2NvcGUgb2ZmIHRoZSBnaXZlbiBjb21wb25lbnQta2V5c1xuXHQgKiBAcGFyYW0gb2JqXG5cdCAqIEBwYXJhbSBrZXlcblx0ICogQHJldHVybnMge0FycmF5LjwqPn1cblx0ICovXG5cdHVuQmluZCggb2JqLCBrZXksIGFzICkge1xuXHRcdHZhciBmb2xsb3dlcnMgPSB0aGlzLl8uZm9sbG93ZXJzLFxuXHRcdCAgICBpICAgICAgICAgPSBmb2xsb3dlcnMgJiYgZm9sbG93ZXJzLmxlbmd0aDtcblx0XHR3aGlsZSAoIGZvbGxvd2VycyAmJiBpLS0gKVxuXHRcdFx0aWYgKCBmb2xsb3dlcnNbaV1bMF0gPT09IG9iaiAmJlxuXHRcdFx0XHQoJycgKyBmb2xsb3dlcnNbaV1bMV0pID09ICgnJyArIGtleSkgJiZcblx0XHRcdFx0Zm9sbG93ZXJzW2ldWzJdID09IGFzICkge1xuXHRcdFx0XHR0aGlzLmRpc3Bvc2VTdG9yZXMoT2JqZWN0LmtleXMoZm9sbG93ZXJzW2ldWzNdKSwgJ2xpc3RlbmVycycpO1xuXHRcdFx0XHRyZXR1cm4gZm9sbG93ZXJzLnNwbGljZShpLCAxKTtcblx0XHRcdH1cblx0fVxuXHRcblx0LyoqXG5cdCAqIE1vdW50IHRoZSBzdG9yZXMgaW4gc3RvcmVzTGlzdCBmcm9tIHRoaXMgc2NvcGUsIGl0cyBwYXJlbnRzIGFuZCBtaXhlZCBzY29wZVxuXHQgKiBCaW5kIHRoZW0gdG8gJ3RvJ1xuXHQgKiBIb29rICd0bycgc28gaXQgd2lsbCBhdXRvIHVuYmluZCBvbiAnZGVzdHJveScgb3IgJ2NvbXBvbmVudFdpbGxVbm1vdW50J1xuXHQgKiBAcGFyYW0gdG9cblx0ICogQHBhcmFtIHN0b3Jlc0xpc3Rcblx0ICogQHBhcmFtIGJpbmRcblx0ICogQHJldHVybnMge09iamVjdH0gSW5pdGlhbCBvdXRwdXRzIG9mIHRoZSBzdG9yZXMgaW4gJ3N0b3Jlc0xpc3QnXG5cdCAqL1xuXHRtYXAoIHRvLCBzdG9yZXNMaXN0LCBiaW5kID0gdHJ1ZSwgcmV2TWFwICkge1xuXHRcdGxldCBTdG9yZSAgID0gdGhpcy5jb25zdHJ1Y3Rvci5TdG9yZTtcblx0XHRzdG9yZXNMaXN0ICA9IGlzLmFycmF5KHN0b3Jlc0xpc3QpID8gc3RvcmVzTGlzdCA6IFtzdG9yZXNMaXN0XTtcblx0XHRsZXQgcmVmTGlzdCA9IHN0b3Jlc0xpc3QubWFwKHRoaXMucGFyc2VSZWYpO1xuXHRcdHRoaXMubW91bnQoc3RvcmVzTGlzdCk7XG5cdFx0aWYgKCBiaW5kICYmIHRvIGluc3RhbmNlb2YgU3RvcmUgKSB7XG5cdFx0XHRTdG9yZS5tYXAodG8sIHN0b3Jlc0xpc3QsIHRoaXMsIHRoaXMsIGZhbHNlKVxuXHRcdH1cblx0XHRlbHNlIGlmICggYmluZCApIHtcblx0XHRcdHRoaXMuYmluZCh0bywgc3RvcmVzTGlzdCwgdW5kZWZpbmVkLCBmYWxzZSk7XG5cdFx0XHRcblx0XHRcdGxldCBtaXhlZENXVW5tb3VudCxcblx0XHRcdCAgICB1bk1vdW50S2V5ID0gdG8uaXNSZWFjdENvbXBvbmVudCA/IFwiY29tcG9uZW50V2lsbFVubW91bnRcIiA6IFwiZGVzdHJveVwiO1xuXHRcdFx0XG5cdFx0XHRpZiAoIHRvLmhhc093blByb3BlcnR5KHVuTW91bnRLZXkpICkge1xuXHRcdFx0XHRtaXhlZENXVW5tb3VudCA9IHRvW3VuTW91bnRLZXldO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHR0b1t1bk1vdW50S2V5XSA9ICggLi4uYXJneiApID0+IHtcblx0XHRcdFx0ZGVsZXRlIHRvW3VuTW91bnRLZXldO1xuXHRcdFx0XHRpZiAoIG1peGVkQ1dVbm1vdW50IClcblx0XHRcdFx0XHR0b1t1bk1vdW50S2V5XSA9IG1peGVkQ1dVbm1vdW50O1xuXHRcdFx0XHRcblx0XHRcdFx0dGhpcy51bkJpbmQodG8sIHN0b3Jlc0xpc3QpO1xuXHRcdFx0XHRyZXR1cm4gdG9bdW5Nb3VudEtleV0gJiYgdG9bdW5Nb3VudEtleV0oLi4uYXJneik7XG5cdFx0XHR9XG5cdFx0XHRcblx0XHR9XG5cdFx0cmV0dXJuIHJldk1hcCAmJiB0aGlzLmdldFVwZGF0ZXMocmV2TWFwKSB8fCByZWZMaXN0LnJlZHVjZSgoIGRhdGEsIHJlZiApID0+IHtcblx0XHRcdHdhbGtuU2V0KGRhdGEsIHJlZi5hbGlhcyB8fCByZWYucGF0aCwgdGhpcy5yZXRyaWV2ZShyZWYucGF0aCkpXG5cdFx0XHRyZXR1cm4gZGF0YTtcblx0XHR9LCB7fSk7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBHZXQgY3VycmVudCBkYXRhIHZhbHVlIGZyb20ganNvbiBwYXRoXG5cdCAqIEBwYXJhbSBwYXRoXG5cdCAqIEByZXR1cm5zIHtzdHJpbmd8Kn1cblx0ICovXG5cdHJldHJpZXZlKCBwYXRoID0gXCJcIiApIHtcblx0XHRwYXRoID0gaXMuc3RyaW5nKHBhdGgpID8gcGF0aC5zcGxpdCgnLicpIDogcGF0aDtcblx0XHRyZXR1cm4gcGF0aCAmJlxuXHRcdFx0dGhpcy5zdG9yZXNbcGF0aFswXV0gJiZcblx0XHRcdHRoaXMuc3RvcmVzW3BhdGhbMF1dLnJldHJpZXZlICYmXG5cdFx0XHR0aGlzLnN0b3Jlc1twYXRoWzBdXS5yZXRyaWV2ZShwYXRoLnNsaWNlKDEpKTtcblx0fVxuXHRcblx0LyoqXG5cdCAqIEdldCBjdXJyZW50IHN0b3JlIGZyb20ganNvbiBwYXRoXG5cdCAqIEBwYXJhbSBwYXRoXG5cdCAqIEByZXR1cm5zIHtzdHJpbmd8Kn1cblx0ICovXG5cdHJldHJpZXZlU3RvcmUoIHBhdGggPSBcIlwiICkge1xuXHRcdHBhdGggPSBpcy5zdHJpbmcocGF0aCkgPyBwYXRoLnNwbGl0KCcuJykgOiBwYXRoO1xuXHRcdHJldHVybiBwYXRoXG5cdFx0XHQmJiBwYXRoLmxlbmd0aFxuXHRcdFx0JiYgKFxuXHRcdFx0XHRwYXRoLmxlbmd0aCAhPSAxICYmIHRoaXMuc3RvcmVzW3BhdGhbMF1dLnJldHJpZXZlU3RvcmVcblx0XHRcdFx0PyB0aGlzLnN0b3Jlc1twYXRoWzBdXS5yZXRyaWV2ZVN0b3JlKHBhdGguc2xpY2UoMSkpXG5cdFx0XHRcdDogcGF0aC5sZW5ndGggPT0gMSAmJiB0aGlzLnN0b3Jlc1twYXRoWzBdXVxuXHRcdFx0KTtcblx0fVxuXHRcblx0LyoqXG5cdCAqIEdldCBvciB1cGRhdGUgc3RvcmVzUmV2TWFwJ3MgcmV2aXNpb25zXG5cdCAqIEBwYXJhbSBzdG9yZXNSZXZNYXBcblx0ICogQHBhcmFtIGxvY2FsXG5cdCAqIEByZXR1cm5zIHt7fX1cblx0ICovXG5cdGdldFN0b3Jlc1JldnMoIHN0b3Jlc1Jldk1hcCA9IHt9LCBsb2NhbCApIHtcblx0XHRsZXQgY3R4ID0gdGhpcy5fLl9zY29wZTtcblx0XHRpZiAoICFzdG9yZXNSZXZNYXAgKSB7XG5cdFx0XHRzdG9yZXNSZXZNYXAgPSB7fTtcblx0XHR9XG5cdFx0T2JqZWN0LmtleXMoY3R4KS5mb3JFYWNoKFxuXHRcdFx0aWQgPT4ge1xuXHRcdFx0XHRpZiAoIGlkID09IFwiJHBhcmVudFwiICkgcmV0dXJuO1xuXHRcdFx0XHRpZiAoICFpcy5mbihjdHhbaWRdKVxuXHRcdFx0XHQpIHtcblx0XHRcdFx0XHRzdG9yZXNSZXZNYXBbaWRdID0gY3R4W2lkXS5fcmV2O1xuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2UgaWYgKCAhc3RvcmVzUmV2TWFwLmhhc093blByb3BlcnR5KGlkKSApXG5cdFx0XHRcdFx0c3RvcmVzUmV2TWFwW2lkXSA9IGZhbHNlXG5cdFx0XHR9XG5cdFx0KTtcblx0XHRpZiAoICFsb2NhbCApIHtcblx0XHRcdHRoaXMuXy5fbWl4ZWQucmVkdWNlKCggdXBkYXRlZCwgY3R4ICkgPT4gKGN0eC5nZXRTdG9yZXNSZXZzKHN0b3Jlc1Jldk1hcCksIHN0b3Jlc1Jldk1hcCksIHN0b3Jlc1Jldk1hcCk7XG5cdFx0XHR0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC5nZXRTdG9yZXNSZXZzKHN0b3Jlc1Jldk1hcCk7XG5cdFx0fVxuXHRcdHJldHVybiBzdG9yZXNSZXZNYXA7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBHZXQgdXBkYXRlZCBvdXRwdXQgYmFzaW5nIHN0b3Jlc1Jldk1hcCdzIHJldmlzaW9ucy5cblx0ICogSWYgYSBzdG9yZSBpbiAnc3RvcmVzUmV2TWFwJyB3YXMgdXBkYXRlZDsgYWRkIGl0IHRvICdvdXRwdXQnICYgdXBkYXRlIHN0b3Jlc1Jldk1hcFxuXHQgKiBAcGFyYW0gc3RvcmVzUmV2TWFwXG5cdCAqIEBwYXJhbSBvdXRwdXRcblx0ICogQHBhcmFtIHVwZGF0ZWRcblx0ICogQHJldHVybnMgeyp8e319XG5cdCAqL1xuXHRnZXRSZWZzVXBkYXRlcyggcmVmcywgcmV2TWFwLCBvdXRwdXQgKSB7XG5cdFx0XG5cdFx0cmV2TWFwID0gcmV2TWFwIHx8IHJlZnNcblx0XHRcdC5tYXAoaWQgPT4gKGlzLnN0cmluZyhpZCkgPyBpZCA6IGlkLm5hbWUpKVxuXHRcdFx0Lm1hcChpZCA9PiAodGhpcy5wYXJzZVJlZihpZCkpKVxuXHRcdFx0LnJlZHVjZSgoIHJldnMsIHJlZiApID0+IHtcblx0XHRcdFx0cmV2c1tyZWYuc3RvcmVJZF0gPSByZXZzW3JlZi5zdG9yZUlkXSB8fCB7XG5cdFx0XHRcdFx0cmV2IDogMCxcblx0XHRcdFx0XHRyZWZzOiBbXVxuXHRcdFx0XHR9O1xuXHRcdFx0XHRyZXZzW3JlZi5zdG9yZUlkXS5yZWZzLnB1c2gocmVmKTtcblx0XHRcdFx0cmV0dXJuIHJldnM7XG5cdFx0XHR9LCB7fSk7XG5cdFx0XG5cdFx0cmV0dXJuIHRoaXMuZ2V0VXBkYXRlcyhyZXZNYXAsIG91dHB1dClcblx0XHRcblx0fVxuXHRcblx0LyoqXG5cdCAqIEdldCBvciB1cGRhdGUgb3V0cHV0IGJhc2luZyBzdG9yZXNSZXZNYXAncyByZXZpc2lvbnMuXG5cdCAqIElmIGEgc3RvcmUgaW4gJ3N0b3Jlc1Jldk1hcCcgd2FzIHVwZGF0ZWQ7IGFkZCBpdCB0byAnb3V0cHV0JyAmIHVwZGF0ZSBzdG9yZXNSZXZNYXBcblx0ICogQHRvZG86IG9wdGltIC8gdXNlIHByb3Rvc1xuXHQgKiBAcGFyYW0gc3RvcmVzUmV2TWFwXG5cdCAqIEBwYXJhbSBvdXRwdXRcblx0ICogQHBhcmFtIHVwZGF0ZWRcblx0ICogQHJldHVybnMgeyp8e319XG5cdCAqL1xuXHRnZXRVcGRhdGVzKCBzdG9yZXNSZXZNYXAsIG91dHB1dCwgdXBkYXRlZCApIHtcblx0XHRsZXQgY3R4ID0gdGhpcy5fLl9zY29wZTtcblx0XHRcblx0XHRvdXRwdXQgPSBvdXRwdXQgfHwge307XG5cdFx0T2JqZWN0LmtleXMoY3R4KS5mb3JFYWNoKFxuXHRcdFx0aWQgPT4ge1xuXHRcdFx0XHRpZiAoIGlkID09IFwiJHBhcmVudFwiICkgcmV0dXJuO1xuXHRcdFx0XHRpZiAoICFvdXRwdXQuaGFzT3duUHJvcGVydHkoaWQpICYmICFpcy5mbihjdHhbaWRdKVxuXHRcdFx0XHRcdCYmICghc3RvcmVzUmV2TWFwXG5cdFx0XHRcdFx0XHR8fCAoc3RvcmVzUmV2TWFwLmhhc093blByb3BlcnR5KGlkKSAmJiBzdG9yZXNSZXZNYXBbaWRdID09PSB1bmRlZmluZWQpXG5cdFx0XHRcdFx0XHR8fCAhKCFzdG9yZXNSZXZNYXAuaGFzT3duUHJvcGVydHkoaWQpIHx8IGN0eFtpZF0uX3JldiA8PSBzdG9yZXNSZXZNYXBbaWRdLnJldikpXG5cdFx0XHRcdCkge1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdHVwZGF0ZWQgICAgPSB0cnVlO1xuXHRcdFx0XHRcdG91dHB1dFtpZF0gPSB0aGlzLmRhdGFbaWRdO1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdGlmICggc3RvcmVzUmV2TWFwICYmIHN0b3Jlc1Jldk1hcC5oYXNPd25Qcm9wZXJ0eShpZCkgKSB7XG5cdFx0XHRcdFx0XHRzdG9yZXNSZXZNYXBbaWRdICAgICA9IHN0b3Jlc1Jldk1hcFtpZF0gfHwgeyByZXY6IDAsIHJlZnM6IFtdIH07XG5cdFx0XHRcdFx0XHRzdG9yZXNSZXZNYXBbaWRdLnJldiA9IGN0eFtpZF0uX3Jldjtcblx0XHRcdFx0XHRcdHN0b3Jlc1Jldk1hcFtpZF0ucmVmcy5mb3JFYWNoKFxuXHRcdFx0XHRcdFx0XHRyZWYgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdC8vY29uc29sZS53YXJuKFwidXBkYXRlIHJlZiBcIiwgcmVmLnJlZixcblx0XHRcdFx0XHRcdFx0XHQvLyB0aGlzLnJldHJpZXZlKHJlZi5wYXRoKSk7XG5cdFx0XHRcdFx0XHRcdFx0b3V0cHV0W3JlZi5hbGlhc10gPSB0aGlzLnJldHJpZXZlKHJlZi5wYXRoKVxuXHRcdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdFx0Ly9jb25zb2xlLndhcm4oXCJ1cGRhdGUgXCIsIGlkLCB0aGlzLmRhdGFbaWRdKTtcblx0XHRcdFx0XHRcdG91dHB1dFtpZF0gPSB0aGlzLmRhdGFbaWRdO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlIGlmICggIW91dHB1dC5oYXNPd25Qcm9wZXJ0eShpZCkgKSB7Ly8gYXZvaWQgZW1wdHkgb3Igbm90IGluaXRpYWxpemVkIHN0b3JlIHJlc3VsdHMgdG8gYmUgcmVwbGFjZWQgYnkgaW5oZXJpdGVkIHdpdGggc2FtZSBuYW1lXG5cdFx0XHRcdFx0b3V0cHV0W2lkXSA9IHVuZGVmaW5lZDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdCk7XG5cdFx0dXBkYXRlZCA9IHRoaXMuXy5fbWl4ZWQucmVkdWNlUmlnaHQoKCB1cGRhdGVkLCBjdHggKSA9PiAoY3R4LmdldFVwZGF0ZXMoc3RvcmVzUmV2TWFwLCBvdXRwdXQsIHVwZGF0ZWQpIHx8IHVwZGF0ZWQpLCB1cGRhdGVkKTtcblx0XHR1cGRhdGVkID0gdGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuZ2V0VXBkYXRlcyhzdG9yZXNSZXZNYXAsIG91dHB1dCwgdXBkYXRlZCkgfHwgdXBkYXRlZDtcblx0XHRyZXR1cm4gdXBkYXRlZCAmJiBvdXRwdXQ7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBSZWN1cnNpdmVseSBnZXQgYWxsIGNoaWxkIHNjb3Blc1xuXHQgKiBAcGFyYW0gY2hpbGRzXG5cdCAqIEByZXR1cm5zIHtBcnJheX1cblx0ICogQHByaXZhdGVcblx0ICovXG5cdF9nZXRBbGxDaGlsZHMoIGNoaWxkcyA9IFtdICkge1xuXHRcdGNoaWxkcy5wdXNoKC4uLnRoaXMuXy5jaGlsZFNjb3Blcyk7XG5cdFx0dGhpcy5fLmNoaWxkU2NvcGVzLmZvckVhY2goXG5cdFx0XHRjdHggPT4ge1xuXHRcdFx0XHRjdHguX2dldEFsbENoaWxkcyhjaGlsZHMpO1xuXHRcdFx0fVxuXHRcdCk7XG5cdFx0cmV0dXJuIGNoaWxkcztcblx0fVxuXHRcblx0LyoqXG5cdCAqIFNlcmlhbGl6ZSBhbGwgYWN0aXZlIHN0b3JlcyBzdGF0ZSAmIGRhdGEgaW4gZXZlcnkgY2hpbGRzICYgbWl4ZWQgc2NvcGVzXG5cdCAqXG5cdCAqIFNjb3BlcyB3aXRob3V0IGtleSBvciBpZCBhcmUgaWdub3JlZFxuXHQgKiBAcGFyYW0gb3V0cHV0XG5cdCAqIEByZXR1cm5zIHt7fX1cblx0ICovXG5cdHNlcmlhbGl6ZSggY2ZnID0ge30sIG91dHB1dCA9IHt9ICkge1xuXHRcdGxldCBjdHggICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSB0aGlzLl8uX3Njb3BlLFxuXHRcdCAgICB7IGJhc2VJZCwga2V5LCBrZXlQSUQsIGluY3JlbWVudElkIH0gPSB0aGlzLl8sXG5cdFx0ICAgIHtcblx0XHRcdCAgICBhbGlhcyxcblx0XHRcdCAgICBwYXJlbnRBbGlhcyxcblx0XHQgICAgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID0gY2ZnLFxuXHRcdCAgICBzaWQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSBrZXlcblx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAocGFyZW50QWxpYXMgfHwga2V5UElEKSArICc+JyArIGtleVxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGFsaWFzIHx8IHBhcmVudEFsaWFzICYmIChwYXJlbnRBbGlhcyArICcvJyArIGJhc2VJZCkgfHwgdGhpcy5faWQ7XG5cdFx0XG5cdFx0XG5cdFx0Ly9hbGlhcyA9IGFsaWFzIHx8IGJhc2VJZDtcblx0XHRyZXR1cm4gdGhpcy5zZXJpYWxpemVfZXgoY2ZnLCBvdXRwdXQsIHNpZCwgYWxpYXMsIFtcIiRwYXJlbnRcIl0pXG5cdH1cblx0XG5cdHNlcmlhbGl6ZV9leCggY2ZnID0ge30sIG91dHB1dCA9IHt9LCBzaWQsIGFsaWFzLCBleGNsdWRlICkge1xuXHRcdGxldCBjdHggICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSB0aGlzLl8uX3Njb3BlLFxuXHRcdCAgICB7IGJhc2VJZCwga2V5LCBrZXlQSUQsIGluY3JlbWVudElkIH0gPSB0aGlzLl8sXG5cdFx0ICAgIHtcblx0XHRcdCAgICB3aXRoQ2hpbGRzID0gdHJ1ZSxcblx0XHRcdCAgICB3aXRoUGFyZW50cyxcblx0XHRcdCAgICB3aXRoTWl4ZWQgID0gdHJ1ZSxcblx0XHRcdCAgICBub3JlZnMsXG5cdFx0XHQgICAgcGFyZW50QWxpYXMsXG5cdFx0XHQgICAgYWxpYXNlcyAgICA9IHt9XG5cdFx0ICAgIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA9IGNmZztcblx0XHRcblx0XHRpZiAoIGtleVdhbGtuR2V0KG91dHB1dCwgc2lkKSApIHtcblx0XHRcdGlmICggIWluY3JlbWVudElkICkvLyBkb25lXG5cdFx0XHRcdHJldHVybiBvdXRwdXQ7XG5cdFx0XHRlbHNlIGlmICggaW5jcmVtZW50SWQgKSB7Ly8gZ2VuZXJhdGUga2V5IGlkXG5cdFx0XHRcdGxldCBpID0gLTE7XG5cdFx0XHRcdHdoaWxlICgga2V5V2Fsa25HZXQob3V0cHV0LCBzaWQgKyAnWycgKyAoKytpKSArICddJykgKSA7XG5cdFx0XHRcdHNpZCA9IHNpZCArICdbJyArIGkgKyAnXSc7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdC8vQHRvZG8gOiBiZXR0ZXIgc2VyaWFsaXplIG1ldGhvZFxuXHRcdGtleVdhbGtuU2V0KG91dHB1dCwgc2lkLCB7fSk7XG5cdFx0XG5cdFx0T2JqZWN0LmtleXMoY3R4KS5mb3JFYWNoKFxuXHRcdFx0aWQgPT4ge1xuXHRcdFx0XHRpZiAoIGV4Y2x1ZGUuaW5jbHVkZXMoaWQpIHx8IGlzLnJzU3RvcmVDbGFzcyhjdHhbaWRdKSB8fCBpcy5yc1Njb3BlQ2xhc3MoY3R4W2lkXSkgKVxuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XG5cdFx0XHRcdGN0eFtpZF0uc2VyaWFsaXplKHsgLi4uY2ZnLCBwYXJlbnRBbGlhczogc2lkIH0sIG91dHB1dCk7XG5cdFx0XHR9XG5cdFx0KVxuXHRcdFxuXHRcdC8vd2l0aFBhcmVudHMgJiYgdGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuc2VyaWFsaXplKHtcblx0XHQvL1x0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpdGhDaGlsZCAgOiBmYWxzZSxcblx0XHQvL1x0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpdGhQYXJlbnRzOiB0cnVlLFxuXHRcdC8vXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aE1peGVkLFxuXHRcdC8vXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9yZWZzXG5cdFx0Ly8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgb3V0cHV0KTtcblx0XHRcblx0XHR3aXRoQ2hpbGRzICYmIHRoaXMuXy5jaGlsZFNjb3Blcy5mb3JFYWNoKFxuXHRcdFx0Y3R4ID0+IHtcblx0XHRcdFx0IWN0eC5fLmlzTG9jYWxJZCAmJiBjdHguc2VyaWFsaXplKHtcblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aENoaWxkICA6IHRydWUsXG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpdGhQYXJlbnRzOiBmYWxzZSxcblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50QWxpYXM6IHNpZCxcblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aE1peGVkLFxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JlZnMsXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBvdXRwdXQpO1xuXHRcdFx0fVxuXHRcdCk7XG5cdFx0XG5cdFx0d2l0aE1peGVkICYmIHRoaXMuXy5fbWl4ZWQuZm9yRWFjaChcblx0XHRcdGN0eCA9PiB7XG5cdFx0XHRcdCFjdHguXy5pc0xvY2FsSWQgJiYgY3R4LnNlcmlhbGl6ZSh7XG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpdGhDaGlsZCAgOiBmYWxzZSxcblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aFBhcmVudHM6IGZhbHNlLFxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRoTWl4ZWQsXG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcmVmc1xuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgb3V0cHV0KTtcblx0XHRcdH1cblx0XHQpO1xuXHRcdFxuXHRcdGlmICggYWxpYXMgKSB7XG5cdFx0XHRvdXRwdXQgPSBPYmplY3Qua2V5cyhvdXRwdXQpXG5cdFx0XHQgICAgICAgICAgICAgICAucmVkdWNlKFxuXHRcdFx0XHQgICAgICAgICAgICAgICAoIGgsIGsgKSA9PiAoXG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgaFtrID09PSB0aGlzLl9pZFxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgPyBhbGlhc1xuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgOiBrXSA9IG91dHB1dFtrXSxcblx0XHRcdFx0XHRcdCAgICAgICAgICAgICAgIGhcblx0XHRcdFx0ICAgICAgICAgICAgICAgKSxcblx0XHRcdFx0ICAgICAgICAgICAgICAge31cblx0XHRcdCAgICAgICAgICAgICAgIClcblx0XHR9XG5cdFx0cmV0dXJuIG91dHB1dDtcblx0fVxuXHRcblx0LyoqXG5cdCAqIFJlc3RvcmUgc3RhdGUgJiBkYXRhIGZyb20gdGhlIHNlcmlhbGl6ZSBmblxuXHQgKiBAcGFyYW0gc25hcHNob3Rcblx0ICogQHBhcmFtIGZvcmNlXG5cdCAqL1xuXHRyZXN0b3JlKCBzbmFwc2hvdCwgY2ZnID0ge30sIGZvcmNlID0gaXMuYm9vbChjZmcpICYmIGNmZyApIHtcblx0XHRsZXQgY3R4ID0gdGhpcy5fLl9zY29wZSwgc25hcDtcblx0XHRcblx0XHRpZiAoIHNuYXBzaG90ICYmIGNmZyAmJiBjZmcuYWxpYXMgJiYgY2ZnLmFsaWFzICE9IHRoaXMuX2lkICkge1xuXHRcdFx0c25hcCA9IHtcblx0XHRcdFx0Li4uc25hcHNob3QsXG5cdFx0XHRcdFt0aGlzLl9pZF06IHNuYXBzaG90W2NmZy5hbGlhc11cblx0XHRcdH1cblx0XHRcdGRlbGV0ZSBzbmFwW2NmZy5hbGlhc107XG5cdFx0XHRzbmFwc2hvdCA9IHNuYXA7XG5cdFx0fVxuXHRcdHNuYXBzaG90ID0gc25hcHNob3Rcblx0XHRcdCYmIGtleVdhbGtuR2V0KHNuYXBzaG90LCB0aGlzLl9pZClcblx0XHRcdHx8IHRoaXMudGFrZVNuYXBzaG90QnlLZXkodGhpcy5faWQpO1xuXHRcdFxuXHRcdFxuXHRcdGlmICggIXNuYXBzaG90IClcblx0XHRcdHJldHVybjtcblx0XHRcblx0XHR0aGlzLl8uc25hcHNob3QgPSB7IC4uLnNuYXBzaG90IH07XG5cdFx0XG5cdFx0c25hcCAgICAgICAgICA9IHNuYXBzaG90WycvJ107XG5cdFx0c25hcHNob3RbJy8nXSA9IHsgLi4uc25hcCB9O1xuXHRcdHNuYXAgJiYgT2JqZWN0LmtleXMoc25hcCkuZm9yRWFjaChcblx0XHRcdG5hbWUgPT4ge1xuXHRcdFx0XHRpZiAoIG5hbWUgPT0gXCIkcGFyZW50XCIgKSByZXR1cm47XG5cdFx0XHRcdFxuXHRcdFx0XHRpZiAoIGN0eFtuYW1lXSApIHtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHRpZiAoIGZvcmNlICYmICFpcy5mbihjdHhbbmFtZV0pIClcblx0XHRcdFx0XHRcdGN0eFtuYW1lXS5kZXN0cm95KCk7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0dGhpcy5fbW91bnQobmFtZSk7Ly8gcXVpZXRcblx0XHRcdFx0fVxuXHRcdFx0XHRcblx0XHRcdH1cblx0XHQpXG5cdFx0XG5cdFx0dGhpcy5fLl9taXhlZC5mb3JFYWNoKFxuXHRcdFx0Y3R4ID0+IHtcblx0XHRcdFx0IWN0eC5fLmlzTG9jYWxJZCAmJiBjdHgucmVzdG9yZSh1bmRlZmluZWQsIGZvcmNlKTtcblx0XHRcdH1cblx0XHQpO1xuXHRcdFxuXHRcdHRoaXMuXy5jaGlsZFNjb3Blcy5mb3JFYWNoKFxuXHRcdFx0Y3R4ID0+IHtcblx0XHRcdFx0IWN0eC5fLmlzTG9jYWxJZCAmJiBjdHgucmVzdG9yZSh1bmRlZmluZWQsIGZvcmNlKTtcblx0XHRcdH1cblx0XHQpO1xuXHR9XG5cdFxuXHRnZXRTbmFwc2hvdEJ5S2V5KCBrZXksIGxvY2FsICkge1xuXHRcdC8vIG9ubHkgaGF2ZSB0aGUgbG9jYWwgc25hcFxuXHRcdGlmICggdGhpcy5fLnNuYXBzaG90ICYmIGtleS5zdGFydHNXaXRoKHRoaXMuX2lkKSApIHtcblx0XHRcdGxldCBvYmogPSBrZXlXYWxrbkdldCh0aGlzLl8uc25hcHNob3QsIGtleS5zdWJzdHIodGhpcy5faWQubGVuZ3RoKSlcblx0XHRcdC8vaWYgKCBvYmogKSB7XG5cdFx0XHQvLyAgICB0aGlzLmRlbGV0ZVNuYXBzaG90QnlLZXkoa2V5KTtcblx0XHRcdC8vfVxuXHRcdFx0cmV0dXJuIG9iajtcblx0XHR9XG5cdFx0ZWxzZSByZXR1cm4gIWxvY2FsXG5cdFx0XHQmJiB0aGlzLnBhcmVudFxuXHRcdFx0JiYgdGhpcy5wYXJlbnQuZ2V0U25hcHNob3RCeUtleShrZXkpXG5cdFx0XHR8fFxuXHRcdFx0dGhpcy5zdG9yZXMuJHBhcmVudFxuXHRcdFx0JiYgdGhpcy5zdG9yZXMuJHBhcmVudC5nZXRTbmFwc2hvdEJ5S2V5KGtleSk7XG5cdFx0XG5cdH1cblx0XG5cdGdldFNuYXBzaG90QnlLZXlFeHQoIHNuYXBzaG90LCBrZXksIGxvY2FsICkge1xuXHRcdC8vIG9ubHkgaGF2ZSB0aGUgbG9jYWwgc25hcFxuXHRcdGlmICggc25hcHNob3QgKSB7XG5cdFx0XHRsZXQgb2JqID0ga2V5V2Fsa25HZXQoc25hcHNob3QsIGtleSlcblx0XHRcdHJldHVybiBvYmo7XG5cdFx0fVxuXHRcdFxuXHR9XG5cdFxuXHR0YWtlU25hcHNob3RCeUtleSgga2V5LCBsb2NhbCApIHtcblx0XHRpZiAoIHRoaXMuXy5zbmFwc2hvdCAmJiBrZXkuc3RhcnRzV2l0aCh0aGlzLl9pZCkgKSB7XG5cdFx0XHRsZXQgb2JqID0ga2V5V2Fsa25HZXQodGhpcy5fLnNuYXBzaG90LCBrZXkuc3Vic3RyKHRoaXMuX2lkLmxlbmd0aCkpXG5cdFx0XHRpZiAoIG9iaiApIHtcblx0XHRcdFx0dGhpcy5kZWxldGVTbmFwc2hvdEJ5S2V5KGtleSwgdHJ1ZSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gb2JqO1xuXHRcdH1cblx0XHRlbHNlIHJldHVybiAhbG9jYWxcblx0XHRcdCYmIHRoaXMucGFyZW50XG5cdFx0XHQmJiB0aGlzLnBhcmVudC50YWtlU25hcHNob3RCeUtleShrZXkpXG5cdFx0XHR8fFxuXHRcdFx0dGhpcy5zdG9yZXMuJHBhcmVudFxuXHRcdFx0JiYgdGhpcy5zdG9yZXMuJHBhcmVudC50YWtlU25hcHNob3RCeUtleShrZXkpO1xuXHR9XG5cdFxuXHRkZWxldGVTbmFwc2hvdEJ5S2V5KCBrZXksIGxvY2FsICkge1xuXHRcdGlmICggdGhpcy5fLnNuYXBzaG90ICYmIGtleS5zdGFydHNXaXRoKHRoaXMuX2lkKSApIHtcblx0XHRcdGxldCBvYmogPSBrZXlXYWxrbkdldCh0aGlzLl8uc25hcHNob3QsIGtleS5zdWJzdHIodGhpcy5faWQubGVuZ3RoKS5yZXBsYWNlKC9eKC4qW1xcPnxcXC9dKVteXFw+fFxcL10rJC9pZywgJyQxJykpXG5cdFx0XHRpZiAoIG9iaiApXG5cdFx0XHRcdGRlbGV0ZSBvYmpba2V5LnJlcGxhY2UoL14uKltcXD58XFwvXShbXlxcPnxcXC9dKykkL2lnLCAnJDEnKV1cblx0XHR9XG5cdFx0cmV0dXJuICFsb2NhbFxuXHRcdFx0JiYgdGhpcy5wYXJlbnRcblx0XHRcdCYmIHRoaXMucGFyZW50LmRlbGV0ZVNuYXBzaG90QnlLZXkoa2V5KVxuXHRcdFx0fHxcblx0XHRcdHRoaXMuc3RvcmVzLiRwYXJlbnRcblx0XHRcdCYmIHRoaXMuc3RvcmVzLiRwYXJlbnQuZGVsZXRlU25hcHNob3RCeUtleShrZXkpO1xuXHR9XG5cdFxuXHRzZXRTdGF0ZSggcFN0YXRlICkge1xuXHRcdE9iamVjdC5rZXlzKHBTdGF0ZSlcblx0XHQgICAgICAuZm9yRWFjaChrID0+ICh0aGlzLnN0YXRlW2tdID0gcFN0YXRlW2tdKSlcblx0fVxuXHRcblx0LyoqXG5cdCAqIGdldCBhIHBhcnNlZCByZWZlcmVuY2Vcblx0ICogQHBhcmFtIF9yZWZcblx0ICogQHJldHVybnMge3tzdG9yZUlkLCBwYXRoLCBhbGlhczogKiwgcmVmOiAqfX1cblx0ICovXG5cdHBhcnNlUmVmKCBfcmVmICkge1xuXHRcdGlmICggdHlwZW9mIF9yZWYgIT09ICdzdHJpbmcnICkge1xuXHRcdFx0dGhpcy5yZWdpc3Rlcih7IFtfcmVmLm5hbWVdOiBfcmVmLnN0b3JlIH0pO1xuXHRcdFx0X3JlZiA9IF9yZWYubmFtZTtcblx0XHR9XG5cdFx0bGV0IHJlZiA9IF9yZWYuc3BsaXQoJzonKTtcblx0XHRyZWZbMF0gID0gcmVmWzBdLnNwbGl0KCcuJyk7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHN0b3JlSWQ6IHJlZlswXVswXSxcblx0XHRcdHBhdGggICA6IHJlZlswXSxcblx0XHRcdGFsaWFzICA6IHJlZlsxXSB8fCByZWZbMF1bcmVmWzBdLmxlbmd0aCAtIDFdLFxuXHRcdFx0cmVmICAgIDogX3JlZlxuXHRcdH07XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBEaXNwYXRjaCBhbiBhY3Rpb24gdG8gdGhlIHRvcCBwYXJlbnQgJiBtaXhlZCBzY29wZXMsIGluIGFsbCBzdG9yZXNcblx0ICpcblx0ICogQHBhcmFtIGFjdGlvblxuXHQgKiBAcGFyYW0gZGF0YVxuXHQgKiBAcmV0dXJucyB7U2NvcGV9XG5cdCAqL1xuXHRkaXNwYXRjaCggYWN0aW9uLCAuLi5hcmd6ICkge1xuXHRcdGlmICggdGhpcy5kZWFkICkge1xuXHRcdFx0Y29uc29sZS53YXJuKFwiRGlzcGF0Y2ggd2FzIGNhbGxlZCBvbiBhIGRlYWQgc2NvcGUsIGNoZWNrIHlvdSdyZSBhc3luYyBmdW5jdGlvbnMgaW4gdGhpcyBzdGFjay4uLlwiLCAobmV3IEVycm9yKCkpLnN0YWNrKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0bGV0IGJBY3RzID0gdGhpcy5fLl9ib3VuZGVkQWN0aW9ucztcblx0XHRPYmplY3Qua2V5cyh0aGlzLl8uX3Njb3BlKVxuXHRcdCAgICAgIC5mb3JFYWNoKFxuXHRcdFx0ICAgICAgaWQgPT4ge1xuXHRcdFx0XHQgICAgICBpZiAoIGlkID09IFwiJHBhcmVudFwiICkgcmV0dXJuO1xuXHRcdFx0XHQgICAgICBpZiAoICFpcy5mbih0aGlzLl8uX3Njb3BlW2lkXSkgKVxuXHRcdFx0XHRcdCAgICAgIHRoaXMuXy5fc2NvcGVbaWRdLnRyaWdnZXIoYWN0aW9uLCAuLi5hcmd6KTtcblx0XHRcdCAgICAgIH1cblx0XHQgICAgICApO1xuXHRcdFxuXHRcdGlmICggYkFjdHMgJiYgYkFjdHMudGVzdChhY3Rpb24pIClcblx0XHRcdHJldHVybjtcblx0XHRcblx0XHR0aGlzLl8uX21peGVkLmZvckVhY2goKCBjdHggKSA9PiAoY3R4LmRpc3BhdGNoKGFjdGlvbiwgLi4uYXJneikpKTtcblx0XHR0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC5kaXNwYXRjaChhY3Rpb24sIC4uLmFyZ3opO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cdFxuXHQvL1xuXHR0cmlnZ2VyKCkge1xuXHRcdHRoaXMuZGlzcGF0Y2goLi4uYXJndW1lbnRzKTtcblx0fVxuXHRcblx0LyoqXG5cdCAqIG9uY2UoJ3N0YWJsZScsIGNiKVxuXHQgKiBAcGFyYW0gb2JqIHtSZWFjdC5Db21wb25lbnR8U3RvcmV8ZnVuY3Rpb24pXG5cdCAqIEBwYXJhbSBrZXkge3N0cmluZ30gb3B0aW9uYWwga2V5IHdoZXJlIHRvIG1hcCB0aGUgcHVibGljIHN0YXRlXG5cdCAqL1xuXHR0aGVuKCBjYiApIHtcblx0XHRpZiAoIHRoaXMuX3N0YWJsZSApXG5cdFx0XHRyZXR1cm4gY2IodGhpcy5kYXRhKTtcblx0XHR0aGlzLm9uY2UoJ3N0YWJsZScsIGUgPT4gY2IodGhpcy5kYXRhKSk7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBDYWxsIHJldGFpbiBvbiB0aGUgc2NvcGVkIHN0b3JlcyBiYXNpbmcgZ2l2ZW5cblx0ICpcblx0ICogQHBhcmFtIHN0b3Jlc1xuXHQgKiBAcGFyYW0gcmVhc29uXG5cdCAqL1xuXHRyZXRhaW5TdG9yZXMoIHN0b3JlcyA9IFtdLCByZWFzb24gKSB7XG5cdFx0Ly9zdG9yZXMuZm9yRWFjaChcblx0XHQvLyAgICBpZCA9PiAoICggIXRoaXMuc3RvcmVzWyBpZCBdIHx8ICF0aGlzLnN0b3Jlc1sgaWQgXS5yZXRhaW4gKSAmJiBjb25zb2xlLndhcm4oaWQsIHJlYXNvbikgKVxuXHRcdC8vKVxuXHRcdHN0b3Jlcy5mb3JFYWNoKFxuXHRcdFx0aWQgPT4gKHRoaXMuc3RvcmVzW2lkXSAmJiB0aGlzLnN0b3Jlc1tpZF0ucmV0YWluICYmIHRoaXMuc3RvcmVzW2lkXS5yZXRhaW4ocmVhc29uKSlcblx0XHQpXG5cdH1cblx0XG5cdC8qKlxuXHQgKiBDYWxsIHJldGFpbiBvbiB0aGUgc2NvcGVkIHN0b3Jlc1xuXHQgKlxuXHQgKiBAcGFyYW0gc3RvcmVzXG5cdCAqIEBwYXJhbSByZWFzb25cblx0ICovXG5cdGRpc3Bvc2VTdG9yZXMoIHN0b3JlcyA9IFtdLCByZWFzb24gKSB7XG5cdFx0c3RvcmVzLmZvckVhY2goXG5cdFx0XHRpZCA9PiAodGhpcy5zdG9yZXNbaWRdICYmIHRoaXMuc3RvcmVzW2lkXS5kaXNwb3NlICYmIHRoaXMuc3RvcmVzW2lkXS5kaXNwb3NlKHJlYXNvbikpXG5cdFx0KVxuXHR9XG5cdFxuXHQvKipcblx0ICogS2VlcCB0aGUgc2NvcGUgdW5zdGFibGUgdW50aWwgcmVsZWFzZSBpcyBjYWxsZWRcblx0ICogQHBhcmFtIHJlYXNvblxuXHQgKi9cblx0d2FpdCggcmVhc29uICkge1xuXHRcdC8vY29uc29sZS5sb2coXCJ3YWl0XCIsIHJlYXNvbik7XG5cdFx0dGhpcy5fc3RhYmxlICYmICF0aGlzLl9fbG9ja3MuYWxsICYmIHRoaXMuZW1pdChcInVuc3RhYmxlXCIsIHRoaXMpO1xuXHRcdHRoaXMuX3N0YWJsZSA9IGZhbHNlO1xuXHRcdHRoaXMuX19sb2Nrcy5hbGwrKztcblx0XHRpZiAoIHJlYXNvbiApIHtcblx0XHRcdHRoaXMuX19sb2Nrc1tyZWFzb25dID0gdGhpcy5fX2xvY2tzW3JlYXNvbl0gfHwgMDtcblx0XHRcdHRoaXMuX19sb2Nrc1tyZWFzb25dKys7XG5cdFx0fVxuXHR9XG5cdFxuXHRcblx0LyoqXG5cdCAqIFN0YWJpbGl6ZSB0aGUgc2NvcGUgaWYgbm8gbW9yZSBsb2NrcyByZW1haW4gKHdhaXQgZm4pXG5cdCAqIEBwYXJhbSByZWFzb25cblx0ICovXG5cdHJlbGVhc2UoIHJlYXNvbiApIHtcblx0XHRcblx0XHRpZiAoIHJlYXNvbiApIHtcblx0XHRcdGlmICggdGhpcy5fX2xvY2tzW3JlYXNvbl0gPT0gMCApXG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoXCJSZWxlYXNlIG1vcmUgdGhhbiBsb2NraW5nICFcIiwgcmVhc29uKTtcblx0XHRcdHRoaXMuX19sb2Nrc1tyZWFzb25dID0gdGhpcy5fX2xvY2tzW3JlYXNvbl0gfHwgMDtcblx0XHRcdHRoaXMuX19sb2Nrc1tyZWFzb25dLS07XG5cdFx0fVxuXHRcdGlmICggIXJlYXNvbiAmJiB0aGlzLl9fbG9ja3MuYWxsID09IDAgKVxuXHRcdFx0Y29uc29sZS5lcnJvcihcIlJlbGVhc2UgbW9yZSB0aGFuIGxvY2tpbmcgIVwiKTtcblx0XHRcblx0XHR0aGlzLl9fbG9ja3MuYWxsLS07XG5cdFx0aWYgKCAhdGhpcy5fX2xvY2tzLmFsbCApIHtcblx0XHRcdHRoaXMuXy5zdGFiaWxpemVyVE0gJiYgY2xlYXJUaW1lb3V0KHRoaXMuXy5zdGFiaWxpemVyVE0pO1xuXHRcdFx0XG5cdFx0XHR0aGlzLl8uc3RhYmlsaXplclRNID0gc2V0VGltZW91dChcblx0XHRcdFx0ZSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5fLnN0YWJpbGl6ZXJUTSA9IG51bGw7XG5cdFx0XHRcdFx0aWYgKCB0aGlzLl9fbG9ja3MuYWxsIClcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHR0aGlzLl8ucHJvcGFnVE0gJiYgY2xlYXJUaW1lb3V0KHRoaXMuXy5wcm9wYWdUTSk7XG5cdFx0XHRcdFx0dGhpcy5fcmV2Kys7XG5cdFx0XHRcdFx0dGhpcy5fc3RhYmxlID0gdHJ1ZTtcblx0XHRcdFx0XHR0aGlzLmVtaXQoXCJzdGFibGVcIiwgdGhpcyk7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0IXRoaXMuZGVhZCAmJiB0aGlzLl9wcm9wYWcoKTsvLyBzdGFiaWxpdHkgY2FuIGluZHVjZSBkZXN0cm95XG5cdFx0XHRcdH1cblx0XHRcdCk7XG5cdFx0fVxuXHRcdFxuXHR9XG5cdFxuXHQvKipcblx0ICogUHJvcGFnIHN0b3JlcyB1cGRhdGVzIGJhc2luZyB0aGVpcnMgbGFzdCB1cGRhdGVzXG5cdCAqL1xuXHRwcm9wYWcoKSB7XG5cdFx0dGhpcy5fLnByb3BhZ1RNICYmIGNsZWFyVGltZW91dCh0aGlzLl8ucHJvcGFnVE0pO1xuXHRcdHRoaXMuXy5wcm9wYWdUTSA9IHNldFRpbWVvdXQoXG5cdFx0XHRlID0+IHtcblx0XHRcdFx0dGhpcy5fLnByb3BhZ1RNID0gbnVsbDtcblx0XHRcdFx0dGhpcy5fcHJvcGFnKClcblx0XHRcdH0sIDJcblx0XHQpO1xuXHR9XG5cdFxuXHRfcHJvcGFnKCkge1xuXHRcdGlmICggdGhpcy5fLmZvbGxvd2Vycy5sZW5ndGggKVxuXHRcdFx0dGhpcy5fLmZvbGxvd2Vycy5mb3JFYWNoKCggeyAwOiBvYmosIDE6IGtleSwgMjogYXMsIDM6IGxhc3RSZXZzLCAzOiByZW1hcHMgfSApID0+IHtcblx0XHRcdFx0bGV0IGRhdGEgPSB0aGlzLmdldFVwZGF0ZXMobGFzdFJldnMpO1xuXHRcdFx0XHRpZiAoICFkYXRhICkgcmV0dXJuO1xuXHRcdFx0XHRpZiAoIHR5cGVvZiBvYmogIT0gXCJmdW5jdGlvblwiICkge1xuXHRcdFx0XHRcdC8vY29uc29sZS5sb2coXCJzZXRTdGF0ZSBcIixvYmosIE9iamVjdC5rZXlzKGRhdGEpKVxuXHRcdFx0XHRcdGlmICggYXMgKSBvYmouc2V0U3RhdGUoeyBbYXNdOiBkYXRhIH0pO1xuXHRcdFx0XHRcdGVsc2Ugb2JqLnNldFN0YXRlKGRhdGEpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdG9iaihkYXRhLCBsYXN0UmV2cyAmJiBbLi4ubGFzdFJldnNdIHx8IFwibm8gcmV2c1wiKTtcblx0XHRcdFx0fVxuXHRcdFx0XHQvLyBsYXN0UmV2cyAmJlxuXHRcdFx0XHQvLyBrZXkuZm9yRWFjaChpZCA9PiAobGFzdFJldnNbaWRdID0gdGhpcy5zdG9yZXNbaWRdICYmXG5cdFx0XHRcdC8vIHRoaXMuc3RvcmVzW2lkXS5fcmV2IHx8IDApKTtcblx0XHRcdH0pO1xuXHRcdHRoaXMuZW1pdChcInVwZGF0ZVwiLCB0aGlzLmdldFVwZGF0ZXMoKSk7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBpcyBzdGFibGVcblx0ICogQHJldHVybnMgYm9vbFxuXHQgKi9cblx0aXNTdGFibGUoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX3N0YWJsZTtcblx0fVxuXHRcblx0X2FkZENoaWxkKCBjdHggKSB7XG5cdFx0dGhpcy5fLmNoaWxkU2NvcGVzLnB1c2goY3R4KTtcblx0XHR0aGlzLl8uc2VlbkNoaWxkcysrO1xuXHRcdGxldCBsaXN0cyAgICAgPSB7XG5cdFx0XHQgICAgJ3N0YWJsZScgICAgICA6IHMgPT4ge1xuXHRcdFx0XHQgICAgdGhpcy5fLnVuU3RhYmxlQ2hpbGRzLS07XG5cdFx0XHRcdCAgICBpZiAoICF0aGlzLl8udW5TdGFibGVDaGlsZHMgKVxuXHRcdFx0XHRcdCAgICB0aGlzLmVtaXQoXCJzdGFibGVUcmVlXCIsIHRoaXMpXG5cdFx0XHQgICAgfSxcblx0XHRcdCAgICAndW5zdGFibGUnICAgIDogcyA9PiB7XG5cdFx0XHRcdCAgICB0aGlzLl8udW5TdGFibGVDaGlsZHMrKztcblx0XHRcdFx0ICAgIGlmICggMSA9PSB0aGlzLl8udW5TdGFibGVDaGlsZHMgKVxuXHRcdFx0XHRcdCAgICB0aGlzLmVtaXQoXCJ1bnN0YWJsZVRyZWVcIiwgdGhpcylcblx0XHRcdCAgICB9LFxuXHRcdFx0ICAgICdzdGFibGVUcmVlJyAgOiBzID0+IHtcblx0XHRcdFx0ICAgIHRoaXMuXy51blN0YWJsZUNoaWxkcy0tO1xuXHRcdFx0XHQgICAgaWYgKCAhdGhpcy5fLnVuU3RhYmxlQ2hpbGRzIClcblx0XHRcdFx0XHQgICAgdGhpcy5lbWl0KFwic3RhYmxlVHJlZVwiLCB0aGlzKVxuXHRcdFx0ICAgIH0sXG5cdFx0XHQgICAgJ3Vuc3RhYmxlVHJlZSc6IHMgPT4ge1xuXHRcdFx0XHQgICAgdGhpcy5fLnVuU3RhYmxlQ2hpbGRzKys7XG5cdFx0XHRcdCAgICBpZiAoIDEgPT0gdGhpcy5fLnVuU3RhYmxlQ2hpbGRzIClcblx0XHRcdFx0XHQgICAgdGhpcy5lbWl0KFwidW5zdGFibGVUcmVlXCIsIHRoaXMpXG5cdFx0XHQgICAgfSxcblx0XHRcdCAgICAnZGVzdHJveScgICAgIDogY3R4ID0+IHtcblx0XHRcdFx0ICAgIGlmICggY3R4Ll8udW5TdGFibGVDaGlsZHMgKVxuXHRcdFx0XHRcdCAgICB0aGlzLl8udW5TdGFibGVDaGlsZHMtLTtcblx0XHRcdFx0ICAgIGlmICggIWN0eC5pc1N0YWJsZSgpIClcblx0XHRcdFx0XHQgICAgdGhpcy5fLnVuU3RhYmxlQ2hpbGRzLS07XG5cdFx0XHRcdFxuXHRcdFx0XHQgICAgaWYgKCAhdGhpcy5fLnVuU3RhYmxlQ2hpbGRzIClcblx0XHRcdFx0XHQgICAgdGhpcy5lbWl0KFwic3RhYmxlVHJlZVwiLCB0aGlzKVxuXHRcdFx0ICAgIH1cblx0XHQgICAgfSxcblx0XHQgICAgd2FzU3RhYmxlID0gdGhpcy5fLnVuU3RhYmxlQ2hpbGRzO1xuXHRcdC8vIWN0eC5pc1N0YWJsZSgpICYmIGNvbnNvbGUud2FybignYWRkIHVuc3RhYmxlIGNoaWxkJyk7XG5cdFx0IWN0eC5pc1N0YWJsZSgpICYmIHRoaXMuXy51blN0YWJsZUNoaWxkcysrO1xuXHRcdGN0eC5fLnVuU3RhYmxlQ2hpbGRzICYmIHRoaXMuXy51blN0YWJsZUNoaWxkcysrO1xuXHRcdHRoaXMuXy5jaGlsZFNjb3Blc0xpc3QucHVzaChsaXN0cyk7XG5cdFx0aWYgKCAhd2FzU3RhYmxlICYmIHRoaXMuXy51blN0YWJsZUNoaWxkcyApXG5cdFx0XHR0aGlzLmVtaXQoXCJ1bnN0YWJsZVRyZWVcIiwgdGhpcylcblx0XHRjdHgub24obGlzdHMpO1xuXHR9XG5cdFxuXHRfcm1DaGlsZCggY3R4ICkge1xuXHRcdGxldCBpICAgICAgICAgPSB0aGlzLl8uY2hpbGRTY29wZXMuaW5kZXhPZihjdHgpLFxuXHRcdCAgICB3YXNTdGFibGUgPSB0aGlzLl8udW5TdGFibGVDaGlsZHM7XG5cdFx0aWYgKCBpICE9IC0xICkge1xuXHRcdFx0dGhpcy5fLmNoaWxkU2NvcGVzLnNwbGljZShpLCAxKTtcblx0XHRcdCFjdHguaXNTdGFibGUoKSAmJiB0aGlzLl8udW5TdGFibGVDaGlsZHMtLTtcblx0XHRcdGN0eC5fLnVuU3RhYmxlQ2hpbGRzICYmIHRoaXMuXy51blN0YWJsZUNoaWxkcy0tO1xuXHRcdFx0Y3R4LnVuKHRoaXMuXy5jaGlsZFNjb3Blc0xpc3Quc3BsaWNlKGksIDEpWzBdKTtcblx0XHRcdGlmICggd2FzU3RhYmxlICYmICF0aGlzLl8udW5TdGFibGVDaGlsZHMgKVxuXHRcdFx0XHR0aGlzLmVtaXQoXCJzdGFibGVUcmVlXCIpXG5cdFx0fVxuXHR9XG5cdFxuXHRyZXRhaW4oIHJlYXNvbiApIHtcblx0XHR0aGlzLl9fcmV0YWlucy5hbGwrKztcblx0XHQvL2NvbnNvbGUubG9nKFwicmV0YWluXCIsIHRoaXMuX2lkLCByZWFzb24pO1xuXHRcdGlmICggcmVhc29uICkge1xuXHRcdFx0dGhpcy5fX3JldGFpbnNbcmVhc29uXSA9IHRoaXMuX19yZXRhaW5zW3JlYXNvbl0gfHwgMDtcblx0XHRcdHRoaXMuX19yZXRhaW5zW3JlYXNvbl0rKztcblx0XHR9XG5cdH1cblx0XG5cdGRpc3Bvc2UoIHJlYXNvbiApIHtcblx0XHQvL2NvbnNvbGUubG9nKFwiZGlzcG9zZVwiLCB0aGlzLl9pZCwgcmVhc29uKTtcblx0XHRpZiAoIHJlYXNvbiApIHtcblx0XHRcdGlmICggIXRoaXMuX19yZXRhaW5zW3JlYXNvbl0gKVxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJEaXNwb3NlIG1vcmUgdGhhbiByZXRhaW5pbmcgOiBcIiArIHJlYXNvbik7XG5cdFx0XHR0aGlzLl9fcmV0YWluc1tyZWFzb25dLS07XG5cdFx0fVxuXHRcdFxuXHRcdGlmICggIXRoaXMuX19yZXRhaW5zLmFsbCApXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJEaXNwb3NlIG1vcmUgdGhhbiByZXRhaW5pbmcgIVwiKTtcblx0XHRcblx0XHR0aGlzLl9fcmV0YWlucy5hbGwtLTtcblx0XHRcblx0XHRpZiAoICF0aGlzLl9fcmV0YWlucy5hbGwgKSB7XG5cdFx0XHQvL2NvbnNvbGUubG9nKFwiZGlzcG9zZSBkbyBkZXN0cm95IFwiLCB0aGlzLl9pZCwgdGhpcy5fcGVyc2lzdGVuY2VUbSk7XG5cdFx0XHRpZiAoIHRoaXMuXy5wZXJzaXN0ZW5jZVRtICkge1xuXHRcdFx0XHR0aGlzLl8uZGVzdHJveVRNICYmIGNsZWFyVGltZW91dCh0aGlzLl8uZGVzdHJveVRNKTtcblx0XHRcdFx0dGhpcy5fLmRlc3Ryb3lUTSA9IHNldFRpbWVvdXQoXG5cdFx0XHRcdFx0ZSA9PiB7XG5cdFx0XHRcdFx0XHQvL3RoaXMudGhlbihzID0+IHtcblx0XHRcdFx0XHRcdCF0aGlzLl9fcmV0YWlucy5hbGwgJiYgIXRoaXMuZGVhZCAmJiB0aGlzLmRlc3Ryb3koKVxuXHRcdFx0XHRcdFx0Ly99KTtcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHRoaXMuXy5wZXJzaXN0ZW5jZVRtXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0Ly90aGlzLnRoZW4ocyA9PlxuXHRcdFx0XHQoIXRoaXMuX19yZXRhaW5zLmFsbCAmJiAhdGhpcy5kZWFkICYmIHRoaXMuZGVzdHJveSgpKVxuXHRcdFx0XHQvLyk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdFxuXHQvKipcblx0ICogb3JkZXIgZGVzdHJveSBvZiBsb2NhbCBzdG9yZXNcblx0ICovXG5cdGRlc3Ryb3koKSB7XG5cdFx0bGV0IGN0eCA9IHRoaXMuXy5fc2NvcGU7XG5cdFx0Ly9jb25zb2xlLndhcm4oXCJkZXN0cm95XCIsIHRoaXMuX2lkKTtcblx0XHR0aGlzLl8uc3RhYmlsaXplclRNICYmIGNsZWFyVGltZW91dCh0aGlzLl8uc3RhYmlsaXplclRNKTtcblx0XHR0aGlzLl8ucHJvcGFnVE0gJiYgY2xlYXJUaW1lb3V0KHRoaXMuXy5wcm9wYWdUTSk7XG5cdFx0T2JqZWN0LmtleXMoXG5cdFx0XHR0aGlzLl8uX2xpc3RlbmluZ1xuXHRcdCkuZm9yRWFjaChcblx0XHRcdGlkID0+ICgoaWQgIT09IFwiJHBhcmVudFwiKSAmJiB0aGlzLl8uX3Njb3BlW2lkXS5yZW1vdmVMaXN0ZW5lcih0aGlzLl8uX2xpc3RlbmluZ1tpZF0pKVxuXHRcdCk7XG5cdFx0d2hpbGUgKCB0aGlzLl8uX21peGVkTGlzdC5sZW5ndGggKSB7XG5cdFx0XHR0aGlzLl8uX21peGVkWzBdLnJlbW92ZUxpc3RlbmVyKHRoaXMuXy5fbWl4ZWRMaXN0LnNoaWZ0KCkpO1xuXHRcdFx0dGhpcy5fLl9taXhlZC5zaGlmdCgpLmRpc3Bvc2UoXCJtaXhlZFRvXCIpO1xuXHRcdH1cblx0XHRbLi4udGhpcy5fLmZvbGxvd2Vyc10ubWFwKGZvbGxvd2VyID0+IHRoaXMudW5CaW5kKC4uLmZvbGxvd2VyKSk7XG5cdFx0Zm9yICggbGV0IGtleSBpbiBjdHggKVxuXHRcdFx0aWYgKCAhaXMuZm4oY3R4W2tleV0pICkge1xuXHRcdFx0XHRpZiAoIGtleSA9PSBcIiRwYXJlbnRcIiApIGNvbnRpbnVlO1xuXHRcdFx0XHQhY3R4W2tleV0uX2F1dG9EZXN0cm95ICYmIGN0eFtrZXldLmRpc3Bvc2UoXCJzY29wZWRcIik7XG5cdFx0XHR9XG5cdFx0aWYgKCB0aGlzLl8uX3BhcmVudExpc3QgKSB7XG5cdFx0XHR0aGlzLnBhcmVudC5fcm1DaGlsZCh0aGlzKTtcblx0XHRcdHRoaXMucGFyZW50LnJlbW92ZUxpc3RlbmVyKHRoaXMuXy5fcGFyZW50TGlzdCk7XG5cdFx0XHR0aGlzLnBhcmVudC5kaXNwb3NlKFwiaXNNeVBhcmVudFwiKTtcblx0XHRcdHRoaXMuXy5fcGFyZW50TGlzdCA9IG51bGw7XG5cdFx0fVxuXHRcdHRoaXMuZGVhZCA9IHRydWU7XG5cdFx0dGhpcy5lbWl0KFwiZGVzdHJveVwiLCB0aGlzKTtcblx0XHRcblx0XHRcblx0XHQvL2lmICggIXRoaXMuXy5pc0xvY2FsSWQgKVxuXHRcdGRlbGV0ZSBvcGVuU2NvcGVzW3RoaXMuX2lkXTtcblx0XHRcblx0XHQvL3RoaXMuXyA9IG51bGw7XG5cdFx0XG5cdH1cbn1cblxuXG5pcy5yc1Njb3BlID0gZnVuY3Rpb24gKCBvYmogKSB7XG5cdHJldHVybiBvYmogaW5zdGFuY2VvZiBTY29wZVxufVxuXG5pcy5yc1Njb3BlQ2xhc3MgPSBmdW5jdGlvbiAoIG9iaiApIHtcblx0cmV0dXJuIFNjb3BlLmlzUHJvdG90eXBlT2Yob2JqKSB8fCBvYmogPT09IFNjb3BlXG59XG5leHBvcnQgZGVmYXVsdCBTY29wZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvU2NvcGUuanMiLCJ2YXIgaXMgPSByZXF1aXJlKCdpcycpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgLi4uaXNcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlscy9pcy5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImlzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiaXNcIlxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaXMgPSByZXF1aXJlKCcuL2lzJyk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gd2Fsa25TZXQoIG9iaiwgcGF0aCwgdmFsdWUsIHN0YWNrICkge1xyXG4gICAgaWYgKCBpcy5zdHJpbmcocGF0aCkgKVxyXG4gICAgICAgIHBhdGggPSBwYXRoLnNwbGl0KCcuJyk7XHJcbiAgICBpZiAoICFwYXRoLmxlbmd0aCApXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgZWxzZSBpZiAoIHBhdGgubGVuZ3RoID09IDEgKVxyXG4gICAgICAgIHJldHVybiBvYmpbIHBhdGhbIDAgXSBdID0gc3RhY2tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gWyAuLi4oIG9ialsgcGF0aFsgMCBdIF0gfHwgW10gKSwgdmFsdWUgXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB2YWx1ZTtcclxuICAgIGVsc2VcclxuICAgICAgICByZXR1cm4gd2Fsa25TZXQoXHJcbiAgICAgICAgICAgIG9ialsgcGF0aFsgMCBdIF0gPVxyXG4gICAgICAgICAgICAgICAgb2JqWyBwYXRoWyAwIF0gXSB8fCB7fSxcclxuICAgICAgICAgICAgcGF0aC5zbGljZSgxKSxcclxuICAgICAgICAgICAgdmFsdWUsIHN0YWNrXHJcbiAgICAgICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHdhbGtuR2V0KCBvYmosIHBhdGgsIGlzS2V5ICkge1xyXG4gICAgaWYgKCBpcy5zdHJpbmcocGF0aCkgKVxyXG4gICAgICAgIHBhdGggPSBwYXRoLnNwbGl0KCcuJyk7XHJcbiAgICByZXR1cm4gcGF0aC5sZW5ndGhcclxuICAgICAgICAgICA/IG9ialsgcGF0aFsgMCBdIF0gJiYgd2Fsa25HZXQob2JqWyBwYXRoWyAwIF0gXSwgcGF0aC5zbGljZSgxKSlcclxuICAgICAgICAgICA6IG9iajtcclxufVxyXG5cclxuLy9AdG9kb1xyXG5leHBvcnQgZnVuY3Rpb24ga2V5V2Fsa25TZXQoIG9iaiwgcGF0aCwgdmFsdWUsIHN0YWNrICkge1xyXG4gICAgaWYgKCBpcy5zdHJpbmcocGF0aCkgKVxyXG4gICAgICAgIHBhdGggPSBwYXRoLnNwbGl0KC8oXFw+fFxcLykvaWcpLmZpbHRlcih2ID0+ICggdiAhPT0gJz4nICYmIHYgKSk7XHJcbiAgICByZXR1cm4gd2Fsa25TZXQob2JqLCBwYXRoLCB2YWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBrZXlXYWxrbkdldCggb2JqLCBwYXRoLCBpc0tleSApIHtcclxuICAgIGlmICggaXMuc3RyaW5nKHBhdGgpIClcclxuICAgICAgICBwYXRoID0gcGF0aC5zcGxpdCgvKFxcPnxcXC8pL2lnKS5maWx0ZXIodiA9PiAoIHYgIT09ICc+JyAmJiB2ICkpO1xyXG4gICAgcmV0dXJuIHBhdGgubGVuZ3RoXHJcbiAgICAgICAgICAgPyBvYmpbIHBhdGhbIDAgXSBdICYmIHdhbGtuR2V0KG9ialsgcGF0aFsgMCBdIF0sIHBhdGguc2xpY2UoMSkpXHJcbiAgICAgICAgICAgOiBvYmo7XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbHMvdXRpbHMuanMiLCIvKlxuICogQ29weXJpZ2h0IChjKSAgMjAxOCBXaXNlIFdpbGQgV2ViIC5cbiAqXG4gKiAgTUlUIExpY2Vuc2VcbiAqICBcbiAqICBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiAgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqICB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiAgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiAgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqICBcbiAqICBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcbiAqICBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICogIFxuICogIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqICBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqICBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqICBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiAgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqICBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuICogIFNPRlRXQVJFLlxuICogIFxuICogQGF1dGhvciA6IE5hdGhhbmFlbCBCcmF1blxuICogQGNvbnRhY3QgOiBjYWlwaWxhYnNAZ21haWwuY29tXG4gKi9cbnZhciBpcyA9IHJlcXVpcmUoJ2lzJyk7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbWl0dGVyIHtcbiAgICBfZXZlbnRzID0ge307XG4gICAgXG4gICAgb24oIGV2dCwgY2IgKSB7XG4gICAgICAgIGlmICggIWlzLnN0cmluZyhldnQpICYmIGV2dCApXG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMoZXZ0KS5mb3JFYWNoKGsgPT4gdGhpcy5vbihrLCBldnRba10pKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX2V2ZW50c1tldnRdID0gdGhpcy5fZXZlbnRzW2V2dF0gfHwgW107XG4gICAgICAgIHRoaXMuX2V2ZW50c1tldnRdLnB1c2goY2IpO1xuICAgICAgICBcbiAgICB9XG4gICAgXG4gICAgdW4oIGV2dCwgY2IgKSB7XG4gICAgICAgIGlmICggIWlzLnN0cmluZyhldnQpICYmIGV2dCApXG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMoZXZ0KS5mb3JFYWNoKGsgPT4gdGhpcy51bihrLCBldnRba10pKTtcbiAgICAgICAgXG4gICAgICAgIGlmICggIXRoaXMuX2V2ZW50c1tldnRdICkgcmV0dXJuO1xuICAgICAgICB2YXIgaSA9IHRoaXMuX2V2ZW50c1tldnRdLmluZGV4T2YoY2IpO1xuICAgICAgICB0aGlzLl9ldmVudHNbZXZ0XS5zcGxpY2UoaSwgMSk7XG4gICAgfVxuICAgIFxuICAgIGVtaXQoIGV2dCwgLi4uYXJneiApIHtcbiAgICAgICAgaWYgKCAhdGhpcy5fZXZlbnRzW2V2dF0gKSByZXR1cm47XG4gICAgICAgIGxldCBsaXN0cyA9IFsuLi50aGlzLl9ldmVudHNbZXZ0XV07XG4gICAgICAgIFxuICAgICAgICBmb3IgKCB2YXIgaSA9IDA7IGkgPCBsaXN0cy5sZW5ndGg7IGkrKyApXG4gICAgICAgICAgICBsaXN0c1tpXSguLi5hcmd6KVxuICAgIH1cbiAgICBcbiAgICBhZGRMaXN0ZW5lcigpIHtcbiAgICAgICAgdGhpcy5vbiguLi5hcmd1bWVudHMpO1xuICAgIH1cbiAgICBcbiAgICByZW1vdmVMaXN0ZW5lcigpIHtcbiAgICAgICAgdGhpcy51biguLi5hcmd1bWVudHMpO1xuICAgIH1cbiAgICBcbiAgICByZW1vdmVBbGxMaXN0ZW5lcnMoKSB7XG4gICAgICAgIHRoaXMuX2V2ZW50cyA9IHt9O1xuICAgIH1cbiAgICBcbiAgICBvbmNlKCBldnQsIGNiICkge1xuICAgICAgICBsZXQgZm47XG4gICAgICAgIHRoaXMub24oZXZ0LCBmbiA9ICggLi4uYXJneiApID0+IHtcbiAgICAgICAgICAgIHRoaXMudW4oZXZ0LCBmbik7XG4gICAgICAgICAgICBjYiguLi5hcmd6KVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgXG4gICAgXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWxzL0VtaXR0ZXIuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzaG9ydGlkXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwic2hvcnRpZFwiXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpICAyMDE4IFdpc2UgV2lsZCBXZWIgLlxuICpcbiAqICBNSVQgTGljZW5zZVxuICpcbiAqICBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiAgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqICB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiAgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiAgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiAgVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG4gKiAgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqICBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG4gKiAgU09GVFdBUkUuXG4gKlxuICogQGF1dGhvciA6IE5hdGhhbmFlbCBCcmF1blxuICogQGNvbnRhY3QgOiBjYWlwaWxhYnNAZ21haWwuY29tXG4gKi9cblxudmFyIGlzICAgICAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL3V0aWxzL2lzJyksXG4gICAgU2NvcGUgICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vU2NvcGUnKSxcbiAgICB7IGtleVdhbGtuU2V0LCBrZXlXYWxrbkdldCB9ID0gcmVxdWlyZSgnLi91dGlscy91dGlscycpLFxuICAgIEV2ZW50RW1pdHRlciAgICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL3V0aWxzL0VtaXR0ZXInKSxcbiAgICBUYXNrU2VxdWVuY2VyICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi91dGlscy9UYXNrU2VxdWVuY2VyJyksXG4gICAgc2hvcnRpZCAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJ3Nob3J0aWQnKSxcbiAgICBvYmpQcm90byAgICAgICAgICAgICAgICAgICAgID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHt9KTtcblxuY2xhc3MgU3RvcmUgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuXHQvL3N0YXRpYyB1c2UgICAgICAgICAgICAgICAgICA9IFtdOy8vIG92ZXJyaWRhYmxlIGxpc3Qgb2Ygc291cmNlIHN0b3Jlc1xuXHRzdGF0aWMgZm9sbG93Oy8vIG92ZXJyaWRhYmxlIGxpc3Qgb2Ygc3RvcmUgdGhhdCB3aWxsIGFsbG93IHB1c2ggaWYgdXBkYXRlZFxuXHRzdGF0aWMgcmVxdWlyZTtcblx0c3RhdGljIHN0YXRpY1Njb3BlICAgICAgICAgID0gbmV3IFNjb3BlKHt9LCB7IGlkOiBcInN0YXRpY1wiIH0pO1xuXHRzdGF0aWMgc3RhdGUgICAgICAgICAgICAgICAgPSB1bmRlZmluZWQ7Ly8gZGVmYXVsdCBzdGF0ZVxuXHQvKipcblx0ICogaWYgcmV0YWluIGdvZXMgdG8gMCA6XG5cdCAqIGZhbHNlIHRvIG5vdCBkZXN0cm95LFxuXHQgKiAwIHRvIHN5bmMgYXV0byBkZXN0cm95XG5cdCAqIE1zIHRvIGF1dG9kZXN0cm95IGFmdGVyIHRtIG1zIGlmIG5vIHJldGFpbiBoYXMgYmVlbiBjYWxsZWRcblx0ICogQHR5cGUge2Jvb2xlYW58SW50fVxuXHQgKi9cblx0ICAgICAgIHN0YXRpYyBwZXJzaXN0ZW5jZVRtID0gZmFsc2U7XG5cdFxuXHQvKipcblx0ICogQ29uc3RydWN0b3IsIHdpbGwgYnVpbGQgYSByZXNjb3BlIHN0b3JlXG5cdCAqXG5cdCAqIChzY29wZSwge3JlcXVpcmUsdXNlLGFwcGx5LHN0YXRlLCBkYXRhfSlcblx0ICogKHNjb3BlKVxuXHQgKlxuXHQgKiBAcGFyYW0gc2NvcGUge29iamVjdH0gc2NvcGUgd2hlcmUgdG8gZmluZCB0aGUgb3RoZXIgc3RvcmVzIChkZWZhdWx0IDogc3RhdGljXG5cdCAqICAgICBzdGF0aWNTY29wZSApXG5cdCAqIEBwYXJhbSBrZXlzIHtBcnJheX0gKHBhc3NlZCB0byBTdG9yZTo6bWFwKSBFeCA6IFtcInNlc3Npb25cIiwgXCJvdGhlck5hbWVkU3RvcmU6a2V5XCIsXG5cdCAqICAgICBvdGhlclN0b3JlLmFzKFwib3RoZXJLZXlcIildXG5cdCAqL1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHRcdHZhciBhcmd6ICAgICAgICAgPSBbLi4uYXJndW1lbnRzXSxcblx0XHQgICAgX3N0YXRpYyAgICAgID0gdGhpcy5jb25zdHJ1Y3Rvcixcblx0XHQgICAgc2NvcGUgICAgICAgID0gYXJnelswXSBpbnN0YW5jZW9mIFNjb3BlXG5cdFx0ICAgICAgICAgICAgICAgICAgID8gYXJnei5zaGlmdCgpXG5cdFx0ICAgICAgICAgICAgICAgICAgIDogX3N0YXRpYy5zY29wZSA/IFNjb3BlLmdldFNjb3BlKF9zdGF0aWMuc2NvcGUpXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGlzLnN0cmluZyhhcmd6WzBdKVxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFNjb3BlLmdldFNjb3BlKGFyZ3ouc2hpZnQoKSlcblx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfc3RhdGljLnN0YXRpY1Njb3BlLFxuXHRcdCAgICBjZmcgICAgICAgICAgPSBhcmd6WzBdICYmICFpcy5hcnJheShhcmd6WzBdKSAmJiAhaXMuc3RyaW5nKGFyZ3pbMF0pXG5cdFx0ICAgICAgICAgICAgICAgICAgID8gYXJnei5zaGlmdCgpXG5cdFx0ICAgICAgICAgICAgICAgICAgIDoge30sXG5cdFx0ICAgIHRhc2tRdWV1ZSAgICA9IGlzLmFycmF5KGFyZ3pbMF0pID8gYXJnei5zaGlmdCgpIDogbnVsbCxcblx0XHQgICAgbmFtZSAgICAgICAgID0gY2ZnLm5hbWUgfHwgX3N0YXRpYy5uYW1lLFxuXHRcdCAgICB3YXRjaHMgICAgICAgPSBjZmcudXNlIHx8IFtdLFxuXHRcdCAgICBhcHBseSAgICAgICAgPSBjZmcuYXBwbHkgfHwgbnVsbCxcblx0XHQgICAgaW5pdGlhbFN0YXRlID0gX3N0YXRpYy5zdGF0ZSB8fCBfc3RhdGljLmluaXRpYWxTdGF0ZSB8fCBfc3RhdGljLmRlZmF1bHRTdGF0ZSxcblx0XHQgICAgYXBwbGllZDtcblx0XHRcblx0XHR0aGlzLl91aWQgPSBjZmcuX3VpZCB8fCBzaG9ydGlkLmdlbmVyYXRlKCk7XG5cdFx0XG5cdFx0dGhpcy5fX3JldGFpbnMgICAgPSB7IGFsbDogMCB9O1xuXHRcdHRoaXMuX19sb2NrcyAgICAgID0geyBhbGw6IDAgfTtcblx0XHR0aGlzLl9vblN0YWJpbGl6ZSA9IFtdO1xuXHRcdFxuXHRcdC8vIGF1dG9EZXN0cm95VG1cblx0XHR0aGlzLl9hdXRvRGVzdHJveSAgID0gISF0aGlzLl9wZXJzaXN0ZW5jZVRtO1xuXHRcdHRoaXMuX3BlcnNpc3RlbmNlVG0gPSBjZmcucGVyc2lzdGVuY2VUbSB8fCBfc3RhdGljLnBlcnNpc3RlbmNlVG0gfHwgKGNmZy5hdXRvRGVzdHJveSB8fCBfc3RhdGljLmF1dG9EZXN0cm95KSAmJiA1O1xuXHRcdHRoaXMuX2NmZyAgICAgICAgICAgPSBjZmc7XG5cdFx0aWYgKCBjZmcgJiYgY2ZnLm9uICkge1xuXHRcdFx0dGhpcy5vbihjZmcub24pO1xuXHRcdH1cblx0XHRcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuXHRcdFxuXHRcdGlmICggc2NvcGUuc3RvcmVzICkge1xuXHRcdFx0dGhpcy5zY29wZU9iaiA9IHNjb3BlO1xuXHRcdFx0dGhpcy5zY29wZSAgICA9IHNjb3BlLnN0b3Jlcztcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHR0aGlzLnNjb3BlT2JqID0gbmV3IFNjb3BlKHNjb3BlKTtcblx0XHRcdHRoaXMuc2NvcGUgICAgPSBzY29wZS5zdG9yZXM7XG5cdFx0fVxuXHRcdFxuXHRcdC8vIHN0YW5kYXJkaXplZCBzY29wZSBhY2Nlc3Ncblx0XHR0aGlzLiRzY29wZSAgICA9IHRoaXMuc2NvcGVPYmo7XG5cdFx0dGhpcy4kc3RvcmVzICAgPSB0aGlzLnNjb3BlT2JqLnN0b3Jlcztcblx0XHR0aGlzLiRhY3Rpb25zICA9IHRoaXMuc2NvcGVPYmouYWN0aW9ucztcblx0XHR0aGlzLiRkaXNwYXRjaCA9IHRoaXMuc2NvcGVPYmouZGlzcGF0Y2guYmluZCh0aGlzLnNjb3BlT2JqKTtcblx0XHRcblx0XHR0aGlzLl9yZXYgICAgID0gdGhpcy5jb25zdHJ1Y3Rvci5fcmV2IHx8IDA7XG5cdFx0dGhpcy5fcmV2cyAgICA9IHt9O1xuXHRcdHRoaXMuc3RvcmVzICAgPSB7fTtcblx0XHR0aGlzLl9yZXF1aXJlID0gW107XG5cdFx0dGhpcy5fc291cmNlcyA9IFtuYW1lXTtcblx0XHRcblx0XHRpZiAoIGlzLmFycmF5KF9zdGF0aWMudXNlKSApIHtcblx0XHRcdHRoaXMuX3VzZSA9IFsuLi53YXRjaHMsIC4uLihfc3RhdGljLnVzZSB8fCBbXSkubWFwKFxuXHRcdFx0XHRrZXkgPT4ge1xuXHRcdFx0XHRcdGxldCByZWYgPSBrZXkubWF0Y2goL14oXFwhPykoW15cXDpdKikoPzpcXDooLiopKT8kLyk7XG5cdFx0XHRcdFx0aWYgKCByZWZbMV0gKSB7XG5cdFx0XHRcdFx0XHRsZXQgcmVmMiA9IHJlZlsyXS5zcGxpdCgnLicpO1xuXHRcdFx0XHRcdFx0dGhpcy5fcmVxdWlyZS5wdXNoKHJlZlszXSB8fCByZWYyW3JlZjIubGVuZ3RoIC0gMV0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm4gcmVmWzJdO1xuXHRcdFx0XHR9XG5cdFx0XHQpXTtcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHR0aGlzLl91c2UgPSBbLi4ud2F0Y2hzLCAuLi4oXG5cdFx0XHRcdF9zdGF0aWMudXNlID8gT2JqZWN0LmtleXMoX3N0YXRpYy51c2UpXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgLm1hcChcblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgIGtleSA9PiB7XG5cdFx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgIGxldCByZWYgPSBrZXkubWF0Y2goL14oXFwhPykoLiopJC8pO1xuXHRcdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICByZWZbMV0gJiYgdGhpcy5fcmVxdWlyZS5wdXNoKF9zdGF0aWMudXNlW2tleV0pO1xuXHRcdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVmWzJdICsgKChfc3RhdGljLnVzZVtrZXldID09PSB0cnVlKVxuXHRcdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJydcblx0XHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICc6JyArIF9zdGF0aWMudXNlW2tleV0pO1xuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgfVxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICkgOiBbXVxuXHRcdFx0KV07XG5cdFx0fVxuXHRcdFxuXHRcdGlmICggX3N0YXRpYy5yZXF1aXJlIClcblx0XHRcdHRoaXMuX3JlcXVpcmUucHVzaCguLi5fc3RhdGljLnJlcXVpcmUpO1xuXHRcdGlmICggY2ZnLnJlcXVpcmUgKVxuXHRcdFx0dGhpcy5fcmVxdWlyZS5wdXNoKC4uLmNmZy5yZXF1aXJlKTtcblx0XHRcblx0XHR0aGlzLl9mb2xsb3dlcnMgPSBbXTtcblx0XHR0aGlzLl9jaGFuZ2VzU1cgPSBpbml0aWFsU3RhdGUgfHwge307XG5cdFx0dGhpcy5zdGF0ZSAgICAgID0gaW5pdGlhbFN0YXRlICYmIHt9O1xuXHRcdGlmICggYXBwbHkgKVxuXHRcdFx0dGhpcy5hcHBseSA9IGFwcGx5O1xuXHRcdFxuXHRcdC8qKlxuXHRcdCAqIEluaXRpYWwgc3RhdGUgaXNuJ3QgZnVsbHkgaW5pdGlhbGl6ZWQgKCBjaGlsZHMgY29uc3RydWN0b3JzIGNhbiBzZXQgaXQgKVxuXHRcdCAqIFNjb3BlIGJhc2VkIGluc3RhbmNlIGhhdmUgdGFza1F1ZXVlIHRvIGRlbGF5IGluaXQgc3luY2hyb25vdXNseSwgaWYgbm90XG5cdFx0ICogcHJlc2VudCB3ZSB1c2Ugc2V0VGltZW91dFxuXHRcdCAqL1xuXHRcdGlmICggdGFza1F1ZXVlICkge1xuXHRcdFx0dGFza1F1ZXVlLnB1c2godGhpcy5fYWZ0ZXJDb25zdHJ1Y3Rvci5iaW5kKHRoaXMpKVxuXHRcdH1cblx0XHRlbHNlXG5cdFx0XHRzZXRUaW1lb3V0KHRoaXMuX2FmdGVyQ29uc3RydWN0b3IuYmluZCh0aGlzKSlcblx0fVxuXHRcblx0LyoqXG5cdCAqIEdldCB0aGUgaW5jb21pbmcgc3RhdGUgKCBmb3IgaW1tZWRpYXRlIHN0YXRlIHJlbGF0aXZlIGFjdGlvbnMgKVxuXHQgKiBAcmV0dXJucyB7e318Kn1cblx0ICovXG5cdGdldCBuZXh0U3RhdGUoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX2NoYW5nZXNTVyAmJiB7IC4uLnRoaXMuc3RhdGUsIC4uLnRoaXMuX2NoYW5nZXNTVyB9IHx8IHRoaXMuc3RhdGU7XG5cdH1cblx0XG5cdF9hZnRlckNvbnN0cnVjdG9yKCkge1xuXHRcdGxldCBjZmcgICAgICAgICAgPSB0aGlzLl9jZmcsXG5cdFx0ICAgIF9zdGF0aWMgICAgICA9IHRoaXMuY29uc3RydWN0b3IsXG5cdFx0ICAgIHNuYXBzaG90ICAgICA9IHRoaXMucmVzdG9yZSh1bmRlZmluZWQsIHRydWUpLFxuXHRcdCAgICBpbml0aWFsU3RhdGUgPSB0aGlzLnN0YXRlLFxuXHRcdCAgICBpbml0aWFsRGF0YSAgPSB0aGlzLmRhdGEsXG5cdFx0ICAgIGFwcGxpZWQ7XG5cdFx0e1xuXHRcdFx0XG5cdFx0XHRpZiAoIGluaXRpYWxEYXRhIClcblx0XHRcdFx0dGhpcy5kYXRhID0gaW5pdGlhbERhdGE7XG5cdFx0XHRlbHNlIGlmICggX3N0YXRpYy5kYXRhICE9PSB1bmRlZmluZWQgKVxuXHRcdFx0XHR0aGlzLmRhdGEgPSB7IC4uLl9zdGF0aWMuZGF0YSB9O1xuXHRcdFx0ZWxzZSBpZiAoIGNmZy5oYXNPd25Qcm9wZXJ0eShcImRhdGFcIikgKVxuXHRcdFx0XHR0aGlzLmRhdGEgPSBjZmcuZGF0YTtcblx0XHRcdFxuXHRcdFx0aWYgKCBjZmcuaGFzT3duUHJvcGVydHkoXCJzdGF0ZVwiKSAmJiBjZmcuc3RhdGUgIT09IHVuZGVmaW5lZCApXG5cdFx0XHRcdGluaXRpYWxTdGF0ZSA9IHsgLi4uaW5pdGlhbFN0YXRlLCAuLi5jZmcuc3RhdGUgfTtcblx0XHRcdFxuXHRcdFx0aWYgKCB0aGlzLmRhdGEgPT09IHVuZGVmaW5lZCApIHtcblx0XHRcdFx0aWYgKCBpbml0aWFsU3RhdGUgfHwgdGhpcy5fdXNlLmxlbmd0aCApIHsvLyBzeW5jIGFwcGx5XG5cdFx0XHRcdFx0dGhpcy5fY2hhbmdlc1NXID0ge1xuXHRcdFx0XHRcdFx0Li4udGhpcy5fY2hhbmdlc1NXLFxuXHRcdFx0XHRcdFx0Li4uKGluaXRpYWxTdGF0ZSB8fCB7fSksXG5cdFx0XHRcdFx0XHQuLi50aGlzLiRzY29wZS5tYXAodGhpcywgdGhpcy5fdXNlKVxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSAgICAgID0ge307XG5cdFx0XHRcdFx0aWYgKCB0aGlzLnNob3VsZEFwcGx5KHRoaXMuX2NoYW5nZXNTVykgJiYgdGhpcy5kYXRhID09PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRcdFx0XHR0aGlzLmRhdGEgICAgICAgPSB0aGlzLmFwcGx5KHRoaXMuZGF0YSwgdGhpcy5fY2hhbmdlc1NXLCB0aGlzLl9jaGFuZ2VzU1cpO1xuXHRcdFx0XHRcdFx0YXBwbGllZCAgICAgICAgID0gdHJ1ZTtcblx0XHRcdFx0XHRcdHRoaXMuc3RhdGUgICAgICA9IHRoaXMuX2NoYW5nZXNTVztcblx0XHRcdFx0XHRcdHRoaXMuX2NoYW5nZXNTVyA9IHt9O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdGFwcGxpZWQgICAgICAgICA9IHRydWU7XG5cdFx0XHRcdHRoaXMuc3RhdGUgICAgICA9IHsvLyBhc3N1bWUgdGhpcyBzdGF0ZSBpcyBzeW5jIHdpdGggaW5pdGlhbCBkYXRhXG5cdFx0XHRcdFx0Li4udGhpcy5fY2hhbmdlc1NXLFxuXHRcdFx0XHRcdC4uLihpbml0aWFsU3RhdGUgfHwge30pLFxuXHRcdFx0XHRcdC4uLnRoaXMuJHNjb3BlLm1hcCh0aGlzLCB0aGlzLl91c2UpXG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5fY2hhbmdlc1NXID0ge307XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmICggKHRoaXMuZGF0YSAhPT0gdW5kZWZpbmVkIHx8IGFwcGxpZWQpICYmICF0aGlzLl9fbG9ja3MuYWxsICkge1xuXHRcdFx0dGhpcy5fc3RhYmxlID0gdHJ1ZTtcblx0XHRcdHRoaXMuX3JldisrO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdHRoaXMuX3N0YWJsZSA9IGZhbHNlO1xuXHRcdFx0aWYgKCAhX3N0YXRpYy5tYW5hZ2VkICYmICF0aGlzLnN0YXRlICYmICghdGhpcy5fdXNlIHx8ICF0aGlzLl91c2UubGVuZ3RoKSApIHtcblx0XHRcdFx0Y29uc29sZS53YXJuKFwiUmVTY29wZSBzdG9yZSAnXCIsIHRoaXMubmFtZSwgXCInIGhhdmUgbm8gaW5pdGlhbCBkYXRhLCBzdGF0ZSBvciB1c2UuIEl0IGNhbid0IHN0YWJpbGl6ZS4uLlwiKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0IXRoaXMuX3N0YWJsZSAmJiB0aGlzLmVtaXQoJ3Vuc3RhYmxlJywgdGhpcy5zdGF0ZSk7XG5cdFx0XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBPdmVycmlkYWJsZSBtZXRob2QgdG8ga25vdyBpZiBhIGRhdGEgY2hhbmdlIHNob3VsZCBiZSBwcm9wYWcgdG8gdGhlIGxpc3RlbmluZ1xuXHQgKiBzdG9yZXMgJiBjb21wb25lbnRzXG5cdCAqL1xuXHRzaG91bGRQcm9wYWcoIG5EYXRhcyApIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXHRcblx0aGFzRGF0YUNoYW5nZSggbkRhdGFzICkge1xuXHRcdHZhciBfc3RhdGljID0gdGhpcy5jb25zdHJ1Y3Rvciwgcixcblx0XHQgICAgY0RhdGFzICA9IHRoaXMuZGF0YTtcblx0XHRyICAgICAgICAgICA9ICFjRGF0YXMgJiYgbkRhdGFzIHx8IGNEYXRhcyAhPT0gbkRhdGFzO1xuXHRcdCFyICYmIGNEYXRhcyAmJiBPYmplY3Qua2V5cyhjRGF0YXMpLmZvckVhY2goXG5cdFx0XHQoIGtleSApID0+IHtcblx0XHRcdFx0ciA9IHIgfHwgKG5EYXRhc1xuXHRcdFx0XHQgICAgICAgICAgPyBjRGF0YXNba2V5XSAhPT0gbkRhdGFzW2tleV1cblx0XHRcdFx0ICAgICAgICAgIDogY0RhdGFzICYmIGNEYXRhc1trZXldKVxuXHRcdFx0fVxuXHRcdCk7XG5cdFx0IXIgJiYgbkRhdGFzICYmIE9iamVjdC5rZXlzKG5EYXRhcykuZm9yRWFjaChcblx0XHRcdCgga2V5ICkgPT4ge1xuXHRcdFx0XHRyID0gciB8fCAobkRhdGFzXG5cdFx0XHRcdCAgICAgICAgICA/IGNEYXRhc1trZXldICE9PSBuRGF0YXNba2V5XVxuXHRcdFx0XHQgICAgICAgICAgOiBjRGF0YXMgJiYgY0RhdGFzW2tleV0pXG5cdFx0XHR9XG5cdFx0KTtcblx0XHRyZXR1cm4gcjtcblx0fVxuXHRcblx0LyoqXG5cdCAqIE92ZXJyaWRhYmxlIG1ldGhvZCB0byBrbm93IGlmIGEgc3RhdGUgY2hhbmdlIHNob3VsZCBiZSBhcHBsaWVkXG5cdCAqL1xuXHRzaG91bGRBcHBseSggc3RhdGUgPSB0aGlzLnN0YXRlICkge1xuXHRcdHZhciBfc3RhdGljID0gdGhpcy5jb25zdHJ1Y3Rvcjtcblx0XHRcblx0XHRyZXR1cm4gKFxuXHRcdFx0ISF0aGlzLmlzQ29tcGxldGUoc3RhdGUpXG5cdFx0KSAmJiAoaXMuYXJyYXkoX3N0YXRpYy5mb2xsb3cpXG5cdFx0ICAgICAgPyBfc3RhdGljLmZvbGxvd1xuXHRcdCAgICAgICAgICAgICAgIC5yZWR1Y2UoKCByLCBpICkgPT4gKHIgfHwgc3RhdGUgJiYgc3RhdGVbaV0pLCBmYWxzZSlcblx0XHQgICAgICA6IF9zdGF0aWMuZm9sbG93XG5cdFx0ICAgICAgICA/IE9iamVjdC5rZXlzKF9zdGF0aWMuZm9sbG93KVxuXHRcdCAgICAgICAgICAgICAgICAucmVkdWNlKCggciwgaSApID0+IChcblx0XHRcdCAgICAgICAgICAgICAgICByXG5cdFx0XHQgICAgICAgICAgICAgICAgfHwgc3RhdGUgJiYgaXMuZm4oX3N0YXRpYy5mb2xsb3dbaV0pICYmIF9zdGF0aWMuZm9sbG93W2ldLmNhbGwodGhpcywgc3RhdGVbaV0pXG5cdFx0XHQgICAgICAgICAgICAgICAgfHwgX3N0YXRpYy5mb2xsb3dbaV0gJiYgc3RhdGVbaV0gIT09IHRoaXMuc3RhdGVbaV1cblx0XHQgICAgICAgICAgICAgICAgKSwgZmFsc2UpIDogdHJ1ZVxuXHRcdCk7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBPdmVycmlkYWJsZSBhcHBsaWVyIC8gcmVtYXBwZXJcblx0ICogSWYgc3RhdGUgb3IgbGFzdFB1YmxpY1N0YXRlIGFyZSBzaW1wbGUgaGFzaCBtYXBzIGFwcGx5IHdpbGwgcmV0dXJuIHsuLi5kYXRhLFxuXHQgKiAuLi5zdGF0ZX0gaWYgbm90IGl0IHdpbGwgcmV0dXJuIHRoZSBsYXN0IHByaXZhdGUgc3RhdGVcblx0ICogQHBhcmFtIGRhdGFcblx0ICogQHBhcmFtIHN0YXRlXG5cdCAqIEByZXR1cm5zIHsqfVxuXHQgKi9cblx0YXBwbHkoIGRhdGEsIHN0YXRlLCBjaGFuZ2VzICkge1xuXHRcdHN0YXRlID0gc3RhdGUgfHwgdGhpcy5zdGF0ZTtcblx0XHRcblx0XHRpZiAoIHRoaXMucmVmaW5lIClcblx0XHRcdHJldHVybiB0aGlzLnJlZmluZSguLi5hcmd1bWVudHMpO1xuXHRcdFxuXHRcdGlmICggIWRhdGEgfHwgZGF0YS5fX3Byb3RvX18gIT09IG9ialByb3RvIHx8IHN0YXRlLl9fcHJvdG9fXyAhPT0gb2JqUHJvdG8gKVxuXHRcdFx0cmV0dXJuIHN0YXRlO1xuXHRcdGVsc2Vcblx0XHRcdHJldHVybiB7IC4uLmRhdGEsIC4uLnN0YXRlIH1cblx0fVxuXHRcblx0LyoqXG5cdCAqIEBkZXByZWNpYXRlZFxuXHQgKiBAcGFyYW0gZGF0YVxuXHQgKiBAcGFyYW0gc3RhdGVcblx0ICogQHBhcmFtIGNoYW5nZXNcblx0ICogQHJldHVybnMgeyp9XG5cdCAqL1xuXHRyZWZpbmUoIGRhdGEsIHN0YXRlLCBjaGFuZ2VzICkge1xuXHRcdHN0YXRlID0gc3RhdGUgfHwgdGhpcy5zdGF0ZTtcblx0XHRcblx0XHRpZiAoICFkYXRhIHx8IGRhdGEuX19wcm90b19fICE9PSBvYmpQcm90byB8fCBzdGF0ZS5fX3Byb3RvX18gIT09IG9ialByb3RvIClcblx0XHRcdHJldHVybiBzdGF0ZTtcblx0XHRlbHNlXG5cdFx0XHRyZXR1cm4geyAuLi5kYXRhLCAuLi5zdGF0ZSB9XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBEZWJvdW5jZSB0aGlzIHN0b3JlIHByb3BhZ2F0aW9uICggJiByZWR1Y2luZyApXG5cdCAqIEBwYXJhbSBjYlxuXHQgKi9cblx0c3RhYmlsaXplKCBjYiApIHtcblx0XHRjYiAmJiB0aGlzLm9uY2UoJ3N0YWJsZScsIGNiKTtcblx0XHR0aGlzLl9zdGFibGUgJiYgdGhpcy5lbWl0KCd1bnN0YWJsZScsIHRoaXMuc3RhdGUsIHRoaXMuZGF0YSk7XG5cdFx0XG5cdFx0dGhpcy5fc3RhYmxlID0gZmFsc2U7XG5cdFx0XG5cdFx0aWYgKCB0aGlzLl9zdGFiaWxpemVyIClcblx0XHRcdHJldHVybjtcblx0XHRcblx0XHR0aGlzLl9zdGFiaWxpemVyID0gVGFza1NlcXVlbmNlci5wdXNoVGFzayh0aGlzLCAncHVzaFN0YXRlJyk7XG5cdH1cblx0XG5cdHJldHJpZXZlKCBwYXRoLCBpID0gMCwgb2JqID0gdGhpcy5kYXRhICkge1xuXHRcdHBhdGggPSBpcy5zdHJpbmcocGF0aCkgPyBwYXRoLnNwbGl0KCcuJykgOiBwYXRoO1xuXHRcdHJldHVybiAhb2JqIHx8ICFwYXRoIHx8ICFwYXRoLmxlbmd0aFxuXHRcdCAgICAgICA/IG9ialxuXHRcdCAgICAgICA6IHBhdGgubGVuZ3RoID09IGkgKyAxXG5cdFx0ICAgICAgICAgPyBvYmpbcGF0aFtpXV1cblx0XHQgICAgICAgICA6IHRoaXMucmV0cmlldmUocGF0aCwgaSArIDEsIG9ialtwYXRoW2ldXSk7XG5cdH1cblx0XG5cdGRpc3BhdGNoKCBhY3Rpb24sIC4uLmFyZ3ogKSB7XG5cdFx0dGhpcy5zY29wZU9iai5kaXNwYXRjaChhY3Rpb24sIC4uLmFyZ3opO1xuXHR9XG5cdFxuXHR0cmlnZ2VyKCBhY3Rpb24sIC4uLmFyZ3ogKSB7XG5cdFx0bGV0IHsgYWN0aW9ucyB9ID0gdGhpcy5jb25zdHJ1Y3Rvcjtcblx0XHRpZiAoIGFjdGlvbnMgJiYgYWN0aW9uc1thY3Rpb25dICkge1xuXHRcdFx0bGV0IG5zID0gYWN0aW9uc1thY3Rpb25dLmNhbGwodGhpcywgLi4uYXJneik7XG5cdFx0XHRucyAmJiB0aGlzLnNldFN0YXRlKG5zKTtcblx0XHR9XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBQdWxsIHN0b3JlcyBpbiB0aGUgcHJpdmF0ZSBzdGF0ZVxuXHQgKiBAcGFyYW0gc3RvcmVzICB7QXJyYXl9IChwYXNzZWQgdG8gU3RvcmU6Om1hcCkgRXggOiBbXCJzZXNzaW9uXCIsXG5cdCAqICAgICBcIm90aGVyTmFtZWRTdG9yZTprZXlcIiwgb3RoZXJTdG9yZS5hcyhcIm90aGVyS2V5XCIpXVxuXHQgKi9cblx0cHVsbCggc3RvcmVzLCBkb1dhaXQsIG9yaWdpbiApIHtcblx0XHRsZXQgaW5pdGlhbE91dHB1dHMgPSB0aGlzLnNjb3BlT2JqLm1hcCh0aGlzLCBzdG9yZXMpO1xuXHRcdGlmICggZG9XYWl0ICkge1xuXHRcdFx0dGhpcy53YWl0KCk7XG5cdFx0XHRzdG9yZXMuZm9yRWFjaCgoIHMgKSA9PiB0aGlzLnNjb3BlW3NdICYmIHRoaXMud2FpdCh0aGlzLnNjb3BlW3NdKSk7XG5cdFx0XHR0aGlzLnJlbGVhc2UoKTtcblx0XHR9XG5cdFx0cmV0dXJuIGluaXRpYWxPdXRwdXRzO1xuXHR9XG5cdFxuXHQvKipcblx0ICogU2V0ICYgUHVzaCB0aGUgcmVzdWx0IGRhdGEgdG8gZm9sbG93ZXJzIGlmIHN0YWJsZVxuXHQgKiBAcGFyYW0gY2Jcblx0ICovXG5cdHB1c2goIGRhdGEsIGZvcmNlLCBjYiApIHtcblx0XHRjYiAgICA9IGZvcmNlID09PSB0cnVlID8gY2IgOiBmb3JjZTtcblx0XHRmb3JjZSA9IGZvcmNlID09PSB0cnVlO1xuXHRcdGlmICggIWZvcmNlICYmXG5cdFx0XHQoXG5cdFx0XHRcdCF0aGlzLmhhc0RhdGFDaGFuZ2UoZGF0YSlcblx0XHRcdClcblx0XHQpIHtcblx0XHRcdGNiICYmIGNiKCk7XG5cdFx0XHRpZiAoICF0aGlzLl9fbG9ja3MuYWxsICkge1xuXHRcdFx0XHRsZXQgc3RhYmxlICAgPSB0aGlzLl9zdGFibGU7XG5cdFx0XHRcdHRoaXMuX3N0YWJsZSA9IHRydWU7XG5cdFx0XHRcdCFzdGFibGUgJiYgdGhpcy5lbWl0KCdzdGFibGUnLCB0aGlzLnN0YXRlLCB0aGlzLmRhdGEpO1xuXHRcdFx0XHR0aGlzLl9zdGFiaWxpemVyID0gbnVsbDtcblx0XHRcdH1cblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0XG5cdFx0dGhpcy5kYXRhID0gZGF0YTtcblx0XHR0aGlzLndhaXQoKTtcblx0XHR0aGlzLnJlbGVhc2UoY2IpO1xuXHRcdFxuXHR9XG5cdFxuXHQvKipcblx0ICogQ2FsbCB0aGUgYXBwbHkgZm4gdXNpbmcgdGhlIGN1cnJlbnQgYWNjdW11bGF0ZWQgc3RhdGUgdXBkYXRlIHRoZW4sIHB1c2ggdGhlXG5cdCAqIHJlc3VsdGluZyBkYXRhIGlmIHN0YWJsZVxuXHQgKiBAcGFyYW0gZm9yY2Vcblx0ICogQHJldHVybnMge2Jvb2xlYW59XG5cdCAqL1xuXHRwdXNoU3RhdGUoIGZvcmNlICkge1xuXHRcdFxuXHRcdGlmICggIWZvcmNlICYmICF0aGlzLl9jaGFuZ2VzU1cgJiYgdGhpcy5kYXRhIClcblx0XHRcdHJldHVybjtcblx0XHRcblx0XHR2YXIgbmV4dFN0YXRlID0gdGhpcy5fbmV4dFN0YXRlIHx8IHsgLi4udGhpcy5zdGF0ZSwgLi4uKHRoaXMuX2NoYW5nZXNTVyB8fCB7fSkgfSxcblx0XHQgICAgbmV4dERhdGEgID0gdGhpcy5hcHBseSh0aGlzLmRhdGEsIG5leHRTdGF0ZSwgdGhpcy5fY2hhbmdlc1NXKTtcblx0XHRcblx0XHR0aGlzLl9zdGFiaWxpemVyID0gbnVsbDtcblx0XHR0aGlzLnN0YXRlICAgICAgID0gbmV4dFN0YXRlO1xuXHRcdHRoaXMuX2NoYW5nZXNTVyAgPSBudWxsO1xuXHRcdFxuXHRcdGlmICggIWZvcmNlICYmXG5cdFx0XHQoXG5cdFx0XHRcdCF0aGlzLmhhc0RhdGFDaGFuZ2UobmV4dERhdGEpXG5cdFx0XHQpXG5cdFx0KSB7XG5cdFx0XHRpZiAoICF0aGlzLl9fbG9ja3MuYWxsICkge1xuXHRcdFx0XHRsZXQgc3RhYmxlICAgPSB0aGlzLl9zdGFibGU7XG5cdFx0XHRcdHRoaXMuX3N0YWJsZSA9IHRydWU7XG5cdFx0XHRcdCFzdGFibGUgJiYgdGhpcy5lbWl0KCdzdGFibGUnLCB0aGlzLnN0YXRlLCB0aGlzLmRhdGEpO1xuXHRcdFx0XHR0aGlzLl9zdGFiaWxpemVyID0gbnVsbDtcblx0XHRcdH1cblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0XG5cdFx0dGhpcy5kYXRhID0gbmV4dERhdGE7XG5cdFx0dGhpcy53YWl0KCk7XG5cdFx0dGhpcy5yZWxlYXNlKCk7XG5cdFx0XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBBZGQgJ3BTdGF0ZScgdG8gdGhlIGN1cnJlbnQgYWNjdW11bGF0ZWQgc3RhdGUgdXBkYXRlc1xuXHQgKiAmIHdhaXQgc291cmNlIHN0b3JlcyBzdGFiaWxpemF0aW9uIGJlZm9yZSBwdXNoaW5nIHRoZXNlIHN0YXRlIHVwZGF0ZXNcblx0ICogQHBhcmFtIHBTdGF0ZVxuXHQgKiBAcGFyYW0gY2Jcblx0ICovXG5cdHNldFN0YXRlKCBwU3RhdGUsIGNiLCBzeW5jICkge1xuXHRcdHZhciBpICAgICAgID0gMCwgY2hhbmdlLFxuXHRcdCAgICBjaGFuZ2VzID0gdGhpcy5fY2hhbmdlc1NXID0gdGhpcy5fY2hhbmdlc1NXIHx8IHt9O1xuXHRcdGZvciAoIHZhciBrIGluIHBTdGF0ZSApXG5cdFx0XHRpZiAoICF0aGlzLnN0YXRlXG5cdFx0XHRcdHx8IGNoYW5nZXMuaGFzT3duUHJvcGVydHkoaykvLyB0b2RvXG5cdFx0XHRcdCYmIChcblx0XHRcdFx0XHRwU3RhdGVba10gIT09IGNoYW5nZXNba11cblx0XHRcdFx0KSB8fCBwU3RhdGUuaGFzT3duUHJvcGVydHkoaylcblx0XHRcdFx0JiYgKFxuXHRcdFx0XHRcdHBTdGF0ZVtrXSAhPT0gdGhpcy5zdGF0ZVtrXVxuXHRcdFx0XHRcdHx8XG5cdFx0XHRcdFx0KHRoaXMuc3RhdGVba10gJiYgcFN0YXRlW2tdICYmIChwU3RhdGVba10uX3JldiAhPSB0aGlzLl9yZXZzW2tdKSkvLyByZXYvaGFzaCB1cGRhdGVcblx0XHRcdFx0KSApIHtcblx0XHRcdFx0Y2hhbmdlICAgICAgICA9IHRydWU7XG5cdFx0XHRcdHRoaXMuX3JldnNba10gPSBwU3RhdGVba10gJiYgcFN0YXRlW2tdLl9yZXYgfHwgdHJ1ZTtcblx0XHRcdFx0Y2hhbmdlc1trXSAgICA9IHBTdGF0ZVtrXTtcblx0XHRcdH1cblx0XHRcblx0XHR0aGlzLl9uZXh0U3RhdGUgPSB7IC4uLnRoaXMuc3RhdGUsIC4uLmNoYW5nZXMgfTtcblx0XHRpZiAoICF0aGlzLnNob3VsZEFwcGx5KHRoaXMuX25leHRTdGF0ZSkgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdFxuXHRcdGlmICggc3luYyApIHtcblx0XHRcdHRoaXMucHVzaFN0YXRlKCk7XG5cdFx0XHRjYiAmJiBjYigpO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdGlmICggY2hhbmdlICkge1xuXHRcdFx0XHR0aGlzLnN0YWJpbGl6ZShjYik7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIGNiICYmIGNiKCk7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cdFxuXHQvKipcblx0ICogVXBkYXRlIHRoZSBjdXJyZW50IHN0YXRlICYgcHVzaCBpdFxuXHQgKiBAcGFyYW0gcFN0YXRlXG5cdCAqIEBwYXJhbSBjYlxuXHQgKi9cblx0c2V0U3RhdGVTeW5jKCBwU3RhdGUgKSB7XG5cdFx0dmFyIGkgICAgICAgPSAwLCBjaGFuZ2UsXG5cdFx0ICAgIGNoYW5nZXMgPSB0aGlzLl9jaGFuZ2VzU1cgPSB0aGlzLl9jaGFuZ2VzU1cgfHwge307XG5cdFx0Zm9yICggdmFyIGsgaW4gcFN0YXRlIClcblx0XHRcdGlmICggIXRoaXMuc3RhdGUgfHwgcFN0YXRlLmhhc093blByb3BlcnR5KGspXG5cdFx0XHRcdCYmIChcblx0XHRcdFx0XHRwU3RhdGVba10gIT0gdGhpcy5zdGF0ZVtrXVxuXHRcdFx0XHRcdHx8XG5cdFx0XHRcdFx0KHRoaXMuc3RhdGVba10gJiYgcFN0YXRlW2tdICYmIChwU3RhdGVba10uX3JldiAhPSB0aGlzLl9yZXZzW2tdKSkvLyByZXYvaGFzaCB1cGRhdGVcblx0XHRcdFx0KSApIHtcblx0XHRcdFx0Y2hhbmdlICAgICAgICA9IHRydWU7XG5cdFx0XHRcdHRoaXMuX3JldnNba10gPSBwU3RhdGVba10gJiYgcFN0YXRlW2tdLl9yZXYgfHwgdHJ1ZTtcblx0XHRcdFx0Y2hhbmdlc1trXSAgICA9IHBTdGF0ZVtrXTtcblx0XHRcdH1cblx0XHR0aGlzLnNob3VsZEFwcGx5KHsgLi4uKHRoaXMuc3RhdGUgfHwge30pLCAuLi5jaGFuZ2VzIH0pICYmIHRoaXMucHVzaFN0YXRlKCk7XG5cdFx0cmV0dXJuIHRoaXMuZGF0YTtcblx0fVxuXHRcblx0LyoqXG5cdCAqIGdldCBhIHN0b3JlLWtleSBwYWlyIGZvciBTdG9yZTo6bWFwXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG5cdCAqIEByZXR1cm5zIHt7c3RvcmU6IFN0b3JlLCBuYW1lOiAqfX1cblx0ICovXG5cdGFzKCBuYW1lICkge1xuXHRcdHJldHVybiB7IHN0b3JlOiB0aGlzLCBuYW1lIH07XG5cdH1cblx0XG5cdG9uKCBsaXN0cyApIHtcblx0XHRpZiAoICFpcy5zdHJpbmcobGlzdHMpICYmIGxpc3RzIClcblx0XHRcdE9iamVjdC5rZXlzKGxpc3RzKS5mb3JFYWNoKGsgPT4gc3VwZXIub24oaywgbGlzdHNba10pKTtcblx0XHRlbHNlIHN1cGVyLm9uKC4uLmFyZ3VtZW50cyk7XG5cdH1cblx0XG5cdHJlbW92ZUxpc3RlbmVyKCBsaXN0cyApIHtcblx0XHRpZiAoICFpcy5zdHJpbmcobGlzdHMpICYmIGxpc3RzIClcblx0XHRcdE9iamVjdC5rZXlzKGxpc3RzKS5mb3JFYWNoKGsgPT4gc3VwZXIucmVtb3ZlTGlzdGVuZXIoaywgbGlzdHNba10pKTtcblx0XHRlbHNlIHN1cGVyLnJlbW92ZUxpc3RlbmVyKC4uLmFyZ3VtZW50cyk7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBpcyBjb21wbGV0ZSAoYWxsIHJlcXVpZXJlZCBrZXlzIGFyZSBoZXJlKVxuXHQgKiBAcmV0dXJucyBib29sXG5cdCAqL1xuXHRpc0NvbXBsZXRlKCBzdGF0ZSA9IHRoaXMuc3RhdGUgKSB7XG5cdFx0dmFyIF9zdGF0aWMgPSB0aGlzLmNvbnN0cnVjdG9yO1xuXHRcdHJldHVybiAoXG5cdFx0XHQhdGhpcy5fcmVxdWlyZVxuXHRcdFx0fHwgIXRoaXMuX3JlcXVpcmUubGVuZ3RoXG5cdFx0XHR8fCBzdGF0ZSAmJiB0aGlzLl9yZXF1aXJlLnJlZHVjZShcblx0XHRcdFx0KCByLCBrZXkgKSA9PiAociAmJiBzdGF0ZVtrZXldKSxcblx0XHRcdFx0dHJ1ZVxuXHRcdFx0KVxuXHRcdCk7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBpcyBzdGFibGVcblx0ICogQHJldHVybnMgYm9vbFxuXHQgKi9cblx0aXNTdGFibGUoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX3N0YWJsZTtcblx0fVxuXHRcblx0LyoqXG5cdCAqIFNlcmlhbGl6ZSBzdGF0ZSAmIGRhdGEgd2l0aCBzb3VyY2VzIHJlZnNcblx0ICogQHJldHVybnMgYm9vbFxuXHQgKi9cblx0c2VyaWFsaXplKCBjZmcgPSB7fSwgb3V0cHV0ID0ge30gKSB7XG5cdFx0bGV0IHNJZCAgPSBjZmcucGFyZW50QWxpYXMgfHwgdGhpcy5zY29wZU9iai5faWQsXG5cdFx0ICAgIHJlZnMgPVxuXHRcdFx0ICAgICFjZmcubm9yZWZzICYmIGlzLmFycmF5KHRoaXMuX3VzZSkgJiYgdGhpcy5fdXNlLnJlZHVjZShcblx0XHRcdCAgICAoIG1hcCwga2V5ICkgPT4gey8vdG9kb1xuXHRcdFx0XHQgICAgbGV0IG5hbWUsXG5cdFx0XHRcdCAgICAgICAgYWxpYXMsIHBhdGgsIF9rZXksXG5cdFx0XHRcdCAgICAgICAgc3RvcmU7XG5cdFx0XHRcdCAgICBpZiAoIGtleS5zdG9yZSAmJiBrZXkubmFtZSApIHtcblx0XHRcdFx0XHQgICAgYWxpYXMgPSBuYW1lID0ga2V5Lm5hbWU7XG5cdFx0XHRcdFx0ICAgIHN0b3JlID0ga2V5LnN0b3JlO1xuXHRcdFx0XHQgICAgfVxuXHRcdFx0XHQgICAgZWxzZSBpZiAoIGlzLmZuKGtleSkgKSB7XG5cdFx0XHRcdFx0ICAgIG5hbWUgPSBhbGlhcyA9IGtleS5uYW1lIHx8IGtleS5kZWZhdWx0TmFtZTtcblx0XHRcdFx0XHQgICAgc3RvcmUgPSBrZXk7XG5cdFx0XHRcdCAgICB9XG5cdFx0XHRcdCAgICBlbHNlIHtcblx0XHRcdFx0XHQgICAgX2tleSAgPSBrZXkubWF0Y2goLyhbXFx3X10rKSgoPzpcXC5bXFx3X10rKSopKD86XFw6KFtcXHdfXSspKT8vKTtcblx0XHRcdFx0XHQgICAgbmFtZSAgPSBfa2V5WzFdO1xuXHRcdFx0XHRcdCAgICBwYXRoICA9IF9rZXlbMl0gJiYgX2tleVsyXS5zdWJzdHIoMSk7XG5cdFx0XHRcdFx0ICAgIHN0b3JlID0gdGhpcy5zY29wZU9iai5zdG9yZXNbX2tleVsxXV07XG5cdFx0XHRcdFx0ICAgIGFsaWFzID0gX2tleVszXSB8fCBwYXRoICYmIHBhdGgubWF0Y2goLyhbXlxcLl0qKSQvKVswXSB8fCBfa2V5WzFdO1xuXHRcdFx0XHQgICAgfVxuXHRcdFx0XHQgICAgaWYgKCBzdG9yZSAmJiBpcy5yc1N0b3JlKHN0b3JlKSAmJiAhc3RvcmUuc2NvcGVPYmouXy5pc0xvY2FsSWQgKVxuXHRcdFx0XHRcdCAgICBtYXBbYWxpYXNdID0gc3RvcmUuc2NvcGVPYmouX2lkICsgJy8nICsgbmFtZTtcblx0XHRcdFx0XG5cdFx0XHRcdCAgICByZXR1cm4gbWFwO1xuXHRcdFx0ICAgIH0sIHt9XG5cdFx0XHQgICAgKSB8fCB7fTtcblx0XHRcblx0XHRrZXlXYWxrblNldChcblx0XHRcdG91dHB1dCxcblx0XHRcdChzSWQgKyAnLycgKyB0aGlzLm5hbWUpLFxuXHRcdFx0e1xuXHRcdFx0XHRzdGF0ZTogdGhpcy5zdGF0ZSAmJlxuXHRcdFx0XHRcdChcblx0XHRcdFx0XHRcdGNmZy5ub3JlZnNcblx0XHRcdFx0XHRcdD8geyAuLi50aGlzLnN0YXRlIH1cblx0XHRcdFx0XHRcdDogT2JqZWN0LmtleXModGhpcy5zdGF0ZSkucmVkdWNlKCggaCwgayApID0+ICghcmVmc1trXSAmJiAoaFtrXSA9IHRoaXMuc3RhdGVba10pLCBoKSwge30pXG5cdFx0XHRcdFx0KSxcblx0XHRcdFx0ZGF0YSA6IChcblx0XHRcdFx0XHRcdHRoaXMuZGF0YSAmJlxuXHRcdFx0XHRcdFx0dGhpcy5kYXRhLl9fcHJvdG9fXyA9PT0gb2JqUHJvdG8gP1xuXHRcdFx0XHRcdFx0dGhpcy5kYXRhIDpcblx0XHRcdFx0XHRcdChpcy5ib29sKHRoaXMuZGF0YSlcblx0XHRcdFx0XHRcdFx0fHwgaXMubnVtYmVyKHRoaXMuZGF0YSlcblx0XHRcdFx0XHRcdFx0fHwgaXMuc3RyaW5nKHRoaXMuZGF0YSkpICYmIHRoaXMuZGF0YVxuXHRcdFx0XHRcdClcblx0XHRcdFx0XHR8fCB1bmRlZmluZWRcblx0XHRcdFx0XG5cdFx0XHRcdCxcblx0XHRcdFx0cmVmc1xuXHRcdFx0fVxuXHRcdCk7XG5cdFx0cmV0dXJuIG91dHB1dDtcblx0fVxuXHRcblx0LyoqXG5cdCAqIHJlc3RvcmUgc3RhdGUgJiBkYXRhXG5cdCAqIEByZXR1cm5zIGJvb2xcblx0ICovXG5cdHJlc3RvcmUoIHNuYXBzaG90LCBpbW1lZGlhdGUgKSB7XG5cdFx0c25hcHNob3QgPSBzbmFwc2hvdFxuXHRcdFx0JiYga2V5V2Fsa25HZXQoc25hcHNob3QsIHRoaXMuc2NvcGVPYmouX2lkICsgJy8nICsgdGhpcy5uYW1lKVxuXHRcdFx0fHwgdGhpcy4kc2NvcGUudGFrZVNuYXBzaG90QnlLZXkodGhpcy5zY29wZU9iai5faWQgKyAnLycgKyB0aGlzLm5hbWUpO1xuXHRcdFxuXHRcdGlmICggIXNuYXBzaG90IClcblx0XHRcdHJldHVybjtcblx0XHRcblx0XHRpZiAoIHNuYXBzaG90ICkge1xuXHRcdFx0aWYgKCAhdGhpcy5pc1N0YWJsZSgpICYmICFpbW1lZGlhdGUgKVxuXHRcdFx0XHR0aGlzLnRoZW4oKCkgPT4gcmVzdG9yZShzbmFwc2hvdCkpXG5cdFx0XHRsZXQgc25hcDtcblx0XHRcdHRoaXMuc3RhdGUgPSB7IC4uLnNuYXBzaG90LnN0YXRlIH07XG5cdFx0XHRPYmplY3Qua2V5cyhzbmFwc2hvdC5yZWZzKS5mb3JFYWNoKFxuXHRcdFx0XHQoIGtleSApID0+IHsvL3RvZG9cblx0XHRcdFx0XHRpZiAoIHNuYXAgPSB0aGlzLiRzY29wZS5nZXRTbmFwc2hvdEJ5S2V5KHNuYXBzaG90LnJlZnNba2V5XSkgKVxuXHRcdFx0XHRcdFx0dGhpcy5zdGF0ZVtrZXldID0gc25hcC5kYXRhO1xuXHRcdFx0XHRcdC8vZWxzZVxuXHRcdFx0XHRcdC8vICAgIGNvbnNvbGUud2Fybignbm90IGZvdW5kIDogJywga2V5LCBzbmFwICYmIHNuYXAucmVmc1sga2V5IF0pXG5cdFx0XHRcdH1cblx0XHRcdClcblx0XHRcdFxuXHRcdFx0dGhpcy5kYXRhID0gc25hcHNob3QuZGF0YTtcblx0XHRcdFxuXHRcdH1cblx0fVxuXHRcblx0LyoqXG5cdCAqIFVuIGJpbmQgdGhpcyBzdG9yZSBvZmYgdGhlIGdpdmVuIGNvbXBvbmVudC1rZXlcblx0ICogQHBhcmFtIG9ialxuXHQgKiBAcGFyYW0ga2V5XG5cdCAqIEByZXR1cm5zIHtBcnJheS48Kj59XG5cdCAqL1xuXHR1bkJpbmQoIG9iaiwga2V5LCBwYXRoICkge1xuXHRcdHZhciBmb2xsb3dlcnMgPSB0aGlzLl9mb2xsb3dlcnMsXG5cdFx0ICAgIGkgICAgICAgICA9IGZvbGxvd2VycyAmJiBmb2xsb3dlcnMubGVuZ3RoO1xuXHRcdHdoaWxlICggZm9sbG93ZXJzICYmIGktLSApXG5cdFx0XHRpZiAoIGZvbGxvd2Vyc1tpXVswXSA9PT0gb2JqICYmIGZvbGxvd2Vyc1tpXVsxXSA9PT0ga2V5ICYmIGZvbGxvd2Vyc1tpXVsyXSA9PT0gcGF0aCApXG5cdFx0XHRcdHJldHVybiBmb2xsb3dlcnMuc3BsaWNlKGksIDEpO1xuXHR9XG5cdFxuXHQvKipcblx0ICogQmluZCB0aGlzIHN0b3JlIGNoYW5nZXMgdG8gdGhlIGdpdmVuIGNvbXBvbmVudC1rZXlcblx0ICogQHBhcmFtIG9iaiB7UmVhY3QuQ29tcG9uZW50fFN0b3JlfGZ1bmN0aW9uKVxuXHQgKiBAcGFyYW0ga2V5IHtzdHJpbmd9IG9wdGlvbmFsIGtleSB3aGVyZSB0byBtYXAgdGhlIHB1YmxpYyBzdGF0ZVxuXHQgKi9cblx0YmluZCggb2JqLCBrZXksIHNldEluaXRpYWwgPSB0cnVlLCBwYXRoICkge1xuXHRcdHRoaXMuX2ZvbGxvd2Vycy5wdXNoKFtvYmosIGtleSwgcGF0aF0pO1xuXHRcdGlmICggc2V0SW5pdGlhbCAmJiB0aGlzLmRhdGEgJiYgdGhpcy5fc3RhYmxlICkge1xuXHRcdFx0bGV0IGRhdGEgPSBwYXRoID8gdGhpcy5yZXRyaWV2ZShwYXRoKSA6IHRoaXMuZGF0YTtcblx0XHRcdGlmICggdHlwZW9mIG9iaiAhPSBcImZ1bmN0aW9uXCIgKSB7XG5cdFx0XHRcdGlmICgga2V5ICkgb2JqLnNldFN0YXRlKHsgW2tleV06IGRhdGEgfSk7XG5cdFx0XHRcdGVsc2Ugb2JqLnNldFN0YXRlKGRhdGEpO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdG9iaihkYXRhKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBvbmNlKCdzdGFibGUnLCBjYilcblx0ICogQHBhcmFtIG9iaiB7UmVhY3QuQ29tcG9uZW50fFN0b3JlfGZ1bmN0aW9uKVxuXHQgKiBAcGFyYW0ga2V5IHtzdHJpbmd9IG9wdGlvbmFsIGtleSB3aGVyZSB0byBtYXAgdGhlIHB1YmxpYyBzdGF0ZVxuXHQgKi9cblx0dGhlbiggY2IgKSB7XG5cdFx0aWYgKCB0aGlzLl9zdGFibGUgKVxuXHRcdFx0cmV0dXJuIGNiKHRoaXMuZGF0YSk7XG5cdFx0dGhpcy5vbmNlKCdzdGFibGUnLCBlID0+IGNiKHRoaXMuZGF0YSkpO1xuXHR9XG5cdFxuXHQvKipcblx0ICogQWRkIGEgbG9jayBzbyB0aGUgc3RvcmUgd2lsbCBub3QgcHJvcGFnIGl0IGRhdGEgdW50aWxsIHJlbGVhc2UoKSBpcyBjYWxsXG5cdCAqIEBwYXJhbSBwcmV2aW91cyB7U3RvcmV8bnVtYmVyfEFycmF5fSBAb3B0aW9uYWwgd2YgdG8gd2FpdCwgcmVsZWFzZXMgdG8gd2FpdCBvclxuXHQgKiAgICAgYXJyYXkgb2Ygc3R1ZmYgdG8gd2FpdFxuXHQgKiBAcmV0dXJucyB7dGhpc31cblx0ICovXG5cdHdhaXQoIHByZXZpb3VzICkge1xuXHRcdGlmICggdHlwZW9mIHByZXZpb3VzID09IFwibnVtYmVyXCIgKVxuXHRcdFx0cmV0dXJuIHRoaXMuX19sb2Nrcy5hbGwgKz0gcHJldmlvdXM7XG5cdFx0aWYgKCBpcy5hcnJheShwcmV2aW91cykgKVxuXHRcdFx0cmV0dXJuIHByZXZpb3VzLm1hcCh0aGlzLndhaXQuYmluZCh0aGlzKSk7XG5cdFx0XG5cdFx0dGhpcy5fc3RhYmxlICYmIHRoaXMuZW1pdCgndW5zdGFibGUnLCB0aGlzLnN0YXRlLCB0aGlzLmRhdGEpO1xuXHRcdHRoaXMuX3N0YWJsZSA9IGZhbHNlO1xuXHRcdHRoaXMuX19sb2Nrcy5hbGwrKztcblx0XHRcblx0XHRsZXQgcmVhc29uID0gaXMuc3RyaW5nKHByZXZpb3VzKSA/IHByZXZpb3VzIDogbnVsbDtcblx0XHRpZiAoIHJlYXNvbiApIHtcblx0XHRcdHRoaXMuX19sb2Nrc1tyZWFzb25dID0gdGhpcy5fX2xvY2tzW3JlYXNvbl0gfHwgMDtcblx0XHRcdHRoaXMuX19sb2Nrc1tyZWFzb25dKys7XG5cdFx0fVxuXHRcdGlmICggcHJldmlvdXMgJiYgaXMuZm4ocHJldmlvdXMudGhlbikgKSB7XG5cdFx0XHRwcmV2aW91cy50aGVuKHRoaXMucmVsZWFzZS5iaW5kKHRoaXMsIG51bGwpKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBEZWNyZWFzZSBsb2NrcyBmb3IgdGhpcyBzdG9yZSwgaWYgaXQgcmVhY2ggMCAsXG5cdCAqIGl0IHdpbGwgYmUgcHJvcGFnYXRlZCB0byB0aGUgZm9sbG93ZXJzLFxuXHQgKiB0aGVuLCBhbGwgc3R1ZmYgcGFzc2VkIHRvIFwidGhlblwiIGNhbGwgYmFjayB3aWxsIGJlIGV4ZWMgLyByZWxlYXNlZFxuXHQgKiBAcGFyYW0gZGVzeW5jXG5cdCAqIEByZXR1cm5zIHsqfVxuXHQgKi9cblx0cmVsZWFzZSggcmVhc29uLCBjYiApIHtcblx0XHR2YXIgX3N0YXRpYyA9IHRoaXMuY29uc3RydWN0b3IsIG1lID0gdGhpcztcblx0XHRsZXQgaSAgICAgICA9IDAsIHdhc1N0YWJsZSA9IHRoaXMuX3N0YWJsZTtcblx0XHRcblx0XHRpZiAoIGlzLmZuKHJlYXNvbikgKSB7XG5cdFx0XHRjYiAgICAgPSByZWFzb247XG5cdFx0XHRyZWFzb24gPSBudWxsO1xuXHRcdH1cblx0XHRcblx0XHRpZiAoIHJlYXNvbiApIHtcblx0XHRcdGlmICggdGhpcy5fX2xvY2tzW3JlYXNvbl0gPT0gMCApXG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoXCJSZWxlYXNlIG1vcmUgdGhhbiBsb2NraW5nICFcIiwgcmVhc29uKTtcblx0XHRcdHRoaXMuX19sb2Nrc1tyZWFzb25dID0gdGhpcy5fX2xvY2tzW3JlYXNvbl0gfHwgMDtcblx0XHRcdHRoaXMuX19sb2Nrc1tyZWFzb25dLS07XG5cdFx0fVxuXHRcdFxuXHRcdGlmICggIXJlYXNvbiAmJiB0aGlzLl9fbG9ja3MuYWxsID09IDAgKVxuXHRcdFx0Y29uc29sZS5lcnJvcihcIlJlbGVhc2UgbW9yZSB0aGFuIGxvY2tpbmcgIVwiKTtcblx0XHRcblx0XHRpZiAoICEtLXRoaXMuX19sb2Nrcy5hbGwgJiYgdGhpcy5pc0NvbXBsZXRlKCkgKSB7XG5cdFx0XHRsZXQgcHJvcGFnICAgPSB0aGlzLnNob3VsZFByb3BhZyh0aGlzLmRhdGEpO1xuXHRcdFx0dGhpcy5fc3RhYmxlID0gdHJ1ZTtcblx0XHRcdHByb3BhZyAmJiB0aGlzLl9yZXYrKzsvL1xuXHRcdFx0aWYgKCBwcm9wYWcgJiYgdGhpcy5fZm9sbG93ZXJzLmxlbmd0aCApXG5cdFx0XHRcdHRoaXMuX2ZvbGxvd2Vycy5mb3JFYWNoKGZ1bmN0aW9uIHByb3BhZyggZm9sbG93ZXIgKSB7XG5cdFx0XHRcdFx0bGV0IGRhdGEgPSBmb2xsb3dlclsyXSA/IG1lLnJldHJpZXZlKGZvbGxvd2VyWzJdKSA6IG1lLmRhdGE7XG5cdFx0XHRcdFx0Ly9pZiAoICFkYXRhICkgcmV0dXJuO1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdGlmICggdHlwZW9mIGZvbGxvd2VyWzBdID09IFwiZnVuY3Rpb25cIiApIHtcblx0XHRcdFx0XHRcdGZvbGxvd2VyWzBdKGRhdGEpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHRcdC8vY2IgJiYgaSsrO1xuXHRcdFx0XHRcdFx0Zm9sbG93ZXJbMF0uc2V0U3RhdGUoXG5cdFx0XHRcdFx0XHRcdChmb2xsb3dlclsxXSkgPyB7IFtmb2xsb3dlclsxXV06IGRhdGEgfVxuXHRcdFx0XHRcdFx0XHQgICAgICAgICAgICAgIDogZGF0YVxuXHRcdFx0XHRcdFx0XHQvLyxcblx0XHRcdFx0XHRcdFx0Ly9jYiAmJiAoXG5cdFx0XHRcdFx0XHRcdC8vICAgICgpID0+ICghKC0taSkgJiYgY2IoKSlcblx0XHRcdFx0XHRcdFx0Ly8pXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHQvL2Vsc2Vcblx0XHRcdCF3YXNTdGFibGUgJiYgdGhpcy5lbWl0KCdzdGFibGUnLCB0aGlzLmRhdGEpO1xuXHRcdFx0cHJvcGFnICYmIHRoaXMuZW1pdCgndXBkYXRlJywgdGhpcy5kYXRhKTtcblx0XHRcdGNiICYmIGNiKClcblx0XHR9XG5cdFx0ZWxzZSBjYiAmJiB0aGlzLnRoZW4oY2IpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cdFxuXHRwcm9wYWcoIGRhdGEgKSB7XG5cdFx0dGhpcy5lbWl0KCd1cGRhdGUnLCBkYXRhKTtcblx0fVxuXHRcblx0cmV0YWluKCByZWFzb24gKSB7XG5cdFx0dGhpcy5fX3JldGFpbnMuYWxsKys7XG5cdFx0aWYgKCByZWFzb24gKSB7XG5cdFx0XHR0aGlzLl9fcmV0YWluc1tyZWFzb25dID0gdGhpcy5fX3JldGFpbnNbcmVhc29uXSB8fCAwO1xuXHRcdFx0dGhpcy5fX3JldGFpbnNbcmVhc29uXSsrO1xuXHRcdH1cblx0fVxuXHRcblx0ZGlzcG9zZSggcmVhc29uICkge1xuXHRcdC8vY29uc29sZS53YXJuKFwiZGlzcG9zZVwiLCByZWFzb24sIHRoaXMuX19yZXRhaW5zKTtcblx0XHRpZiAoIHJlYXNvbiApIHtcblx0XHRcdGlmICggIXRoaXMuX19yZXRhaW5zW3JlYXNvbl0gKVxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJSUyA6IERpc3Bvc2UgbW9yZSB0aGFuIHJldGFpbmluZyBvbiBzdG9yZSAnXCIgKyB0aGlzLm5hbWUgKyBcIicgOiBcIiArIHJlYXNvbik7XG5cdFx0XHRcblx0XHRcdHRoaXMuX19yZXRhaW5zW3JlYXNvbl0tLTtcblx0XHR9XG5cdFx0aWYgKCB0aGlzLl9fcmV0YWlucy5hbGwgPT0gMCApXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJSUyA6IERpc3Bvc2UgbW9yZSB0aGFuIHJldGFpbmluZyBvbiBzdG9yZSBcIiArIHRoaXMubmFtZSk7XG5cdFx0XG5cdFx0dGhpcy5fX3JldGFpbnMuYWxsLS07XG5cdFx0XG5cdFx0aWYgKCAhdGhpcy5fX3JldGFpbnMuYWxsICkge1xuXHRcdFx0aWYgKCB0aGlzLl9wZXJzaXN0ZW5jZVRtICkge1xuXHRcdFx0XHR0aGlzLl9kZXN0cm95VE0gJiYgY2xlYXJUaW1lb3V0KHRoaXMuX2Rlc3Ryb3lUTSk7XG5cdFx0XHRcdHRoaXMuX2Rlc3Ryb3lUTSA9IHNldFRpbWVvdXQoXG5cdFx0XHRcdFx0ZSA9PiB7XG5cdFx0XHRcdFx0XHR0aGlzLl9kZXN0cm95VE0gPSBudWxsO1xuXHRcdFx0XHRcdFx0Ly90aGlzLnRoZW4ocyA9PiB7XG5cdFx0XHRcdFx0XHQhdGhpcy5fX3JldGFpbnMuYWxsICYmICF0aGlzLmRlYWQgJiYgdGhpcy5kZXN0cm95KClcblx0XHRcdFx0XHRcdC8vfSk7XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR0aGlzLl9wZXJzaXN0ZW5jZVRtXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0Ly90aGlzLnRoZW4ocyA9PlxuXHRcdFx0XHQoIXRoaXMuX19yZXRhaW5zLmFsbCAmJiAhdGhpcy5kZWFkICYmIHRoaXMuZGVzdHJveSgpKVxuXHRcdFx0XHQvLyk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdFxuXHRkZXN0cm95KCkge1xuXHRcdC8vICBjb25zb2xlLmxvZyhcImRlc3Ryb3lcIiwgdGhpcy5fdWlkKTtcblx0XHRcblx0XHR0aGlzLmVtaXQoJ2Rlc3Ryb3knLCB0aGlzKTtcblx0XHRpZiAoIHRoaXMuX3N0YWJpbGl6ZXIgKVxuXHRcdFx0Y2xlYXJUaW1lb3V0KHRoaXMuX3N0YWJpbGl6ZXIpO1xuXHRcdFxuXHRcdGlmICggdGhpcy5fZm9sbG93ZXJzLmxlbmd0aCApXG5cdFx0XHR0aGlzLl9mb2xsb3dlcnMuZm9yRWFjaChcblx0XHRcdFx0KCBmb2xsb3dlciApID0+IHtcblx0XHRcdFx0XHRpZiAoIHR5cGVvZiBmb2xsb3dlclswXSAhPT0gXCJmdW5jdGlvblwiICkge1xuXHRcdFx0XHRcdFx0aWYgKCBmb2xsb3dlclswXS5zdG9yZXMgKVxuXHRcdFx0XHRcdFx0XHRkZWxldGUgZm9sbG93ZXJbMF0uc3RvcmVzW2ZvbGxvd2VyWzFdXTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdCk7XG5cdFx0dGhpcy5fZm9sbG93ZXJzLmxlbmd0aCA9IDA7XG5cdFx0dGhpcy5jb25zdHJ1Y3Rvci5fcmV2ICA9IHRoaXMucmV2O1xuXHRcdHRoaXMuZGVhZCAgICAgICAgICAgICAgPSB0cnVlO1xuXHRcdHRoaXMuX3JldnMgICAgICAgICAgICAgPSB0aGlzLmRhdGEgPSB0aGlzLnN0YXRlID0gdGhpcy5zY29wZSA9IG51bGw7XG5cdFx0dGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoKTtcblx0fVxufVxuXG4vKipcbiAqIGdldCBhIHN0YXRpYyBhbGlhc2VkIHJlZmVyZW5jZSBvZiBhIHN0b3JlXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICogQHJldHVybnMge3tzdG9yZTogU3RvcmUsIG5hbWU6ICp9fVxuICovXG5TdG9yZS5hcyA9IGZ1bmN0aW9uICggbmFtZSApIHtcblx0cmV0dXJuIHsgc3RvcmU6IHRoaXMsIG5hbWUgfTtcbn1cblxuLyoqXG4gKiBNYXAgYWxsIG5hbWVkIHN0b3JlcyBpbiB7a2V5c30gdG8gdGhlIHtvYmplY3R9J3Mgc3RhdGVcbiAqIEhvb2sgY29tcG9uZW50V2lsbFVubW91bnQgKGZvciByZWFjdCBjb21wKSBvciBkZXN0cm95IHRvIHVuQmluZCB0aGVtIGF1dG9tYXRpY2FsbHlcbiAqIEBzdGF0aWNcbiAqIEBwYXJhbSBvYmplY3Qge09iamVjdH0gdGFyZ2V0IHN0YXRlIGF3YXJlIG9iamVjdCAoUmVhY3QuQ29tcG9uZW50fFN0b3JlfC4uLilcbiAqIEBwYXJhbSBrZXlzIHtBcnJheX0gRXggOiBbXCJzZXNzaW9uXCIsIFwib3RoZXJTdGF0aWNOYW1lZFN0b3JlOmtleVwiLFxuICogICAgIHN0b3JlLmFzKCdhbm90aGVyS2V5JyldXG4gKi9cblN0b3JlLm1hcCA9IGZ1bmN0aW9uICggY1N0b3JlLCBrZXlzLCBzY29wZSwgb3JpZ2luLCBzZXRJbml0aWFsID0gZmFsc2UgKSB7XG5cdHZhciB0YXJnZXRSZXZzICAgICA9IGNTdG9yZS5fcmV2cyB8fCB7fTtcblx0dmFyIHRhcmdldFNjb3BlICAgID0gY1N0b3JlLnN0b3JlcyB8fCAoY1N0b3JlLnN0b3JlcyA9IHt9KTtcblx0dmFyIGluaXRpYWxPdXRwdXRzID0ge307XG5cdGtleXMgICAgICAgICAgICAgICA9IGlzLmFycmF5KGtleXMpID8gWy4uLmtleXNdIDogW2tleXNdO1xuXHRcblx0XG5cdHNjb3BlID0gc2NvcGUgfHwgU3RvcmUuc3RhdGljU2NvcGU7XG5cdFxuXHRrZXlzID0ga2V5cy5maWx0ZXIoXG5cdFx0Ly8gQHRvZG8gOiB1c2UgcXVlcnkgcmVmc1xuXHRcdC8vIChzdG9yZSkoXFwuc3RvcmUpKihcXFsoXFwqfChwcm9wcylcXHcrKSspXFxdKT8oXFw6YWxpYXMpXG5cdFx0KCBrZXkgKSA9PiB7XG5cdFx0XHRpZiAoICFrZXkgKSB7XG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoXCJOb3QgYSBtYXBwYWJsZSBzdG9yZSBpdGVtICdcIiArIGtleSArIFwiJyBpbiBcIiArIG9yaWdpbiArICcgISEnKTtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0bGV0IG5hbWUsXG5cdFx0XHQgICAgYWxpYXMsXG5cdFx0XHQgICAgcGF0aCxcblx0XHRcdCAgICBzdG9yZSwgX2tleTtcblx0XHRcdGlmICgga2V5LnN0b3JlICYmIGtleS5uYW1lICkge1xuXHRcdFx0XHRhbGlhcyA9IG5hbWUgPSBrZXkubmFtZTtcblx0XHRcdFx0c3RvcmUgPSBrZXkuc3RvcmU7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIGlmICggaXMuZm4oa2V5KSApIHtcblx0XHRcdFx0bmFtZSA9IGFsaWFzID0ga2V5Lm5hbWUgfHwga2V5LmRlZmF1bHROYW1lO1xuXHRcdFx0XHRzdG9yZSA9IGtleTtcblx0XHRcdH1cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHRfa2V5ICA9IGtleS5tYXRjaCgvKFtcXHdfXSspKCg/OlxcLltcXHdfXSspKikoPzpcXDooW1xcd19dKykpPy8pO1xuXHRcdFx0XHRuYW1lICA9IF9rZXlbMV07XG5cdFx0XHRcdHBhdGggID0gX2tleVsyXSAmJiBfa2V5WzJdLnN1YnN0cigxKTtcblx0XHRcdFx0c3RvcmUgPSBzY29wZS5zdG9yZXNbX2tleVsxXV07XG5cdFx0XHRcdGFsaWFzID0gX2tleVszXSB8fCBwYXRoICYmIHBhdGgubWF0Y2goLyhbXlxcLl0qKSQvKVswXSB8fCBfa2V5WzFdO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCAhc3RvcmUgKSB7XG5cdFx0XHRcdGxldCBpID0gW107XG5cdFx0XHRcdGZvciAoIHZhciBvIGluIHNjb3BlLnN0b3JlcyApXG5cdFx0XHRcdFx0aS5wdXNoKG8pXG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoXCJOb3QgYSBtYXBwYWJsZSBzdG9yZSBpdGVtICdcIiArIG5hbWUgKyBcIi9cIiArIGFsaWFzICsgXCInIGluIFwiICsgKGNTdG9yZS5uYW1lIHx8IGNTdG9yZSkgKyAnICEhJywgc3RvcmUsIF9rZXksIHNjb3BlLnN0b3JlcywgaSk7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdGlmICggaXMucnNTY29wZUNsYXNzKHN0b3JlKSApIHNjb3BlLl9tb3VudChuYW1lKTtcblx0XHRcdGlmICggaXMucnNTY29wZShzdG9yZSkgKSB7XG5cdFx0XHRcdHN0b3JlID0gc2NvcGUuX21vdW50KGtleSk7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIGlmICggdGFyZ2V0UmV2c1tuYW1lXSApIHJldHVybiBmYWxzZTsvLyBpZ25vcmUgZGJsIHVzZXMgZm9yIG5vd1xuXHRcdFx0XG5cdFx0XHRcblx0XHRcdGlmICggaXMuZm4oc3RvcmUpICkge1xuXHRcdFx0XHRzY29wZS5fbW91bnQobmFtZSlcblx0XHRcdFx0c2NvcGUuc3RvcmVzW25hbWVdLmJpbmQoY1N0b3JlLCBhbGlhcywgc2V0SW5pdGlhbCwgcGF0aCk7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0c3RvcmUuYmluZChjU3RvcmUsIGFsaWFzLCBzZXRJbml0aWFsLCBwYXRoKTtcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0Ly8gZ2l2ZSBpbml0aWFsIHN0b3JlIHdlaWdodCBiYXNpbmcgc291cmNlc1xuXHRcdFx0c2NvcGUuc3RvcmVzW25hbWVdLl9zb3VyY2VzICYmIGNTdG9yZS5fc291cmNlcy5wdXNoKC4uLnNjb3BlLnN0b3Jlc1tuYW1lXS5fc291cmNlcyk7XG5cdFx0XHRcblx0XHRcdHRhcmdldFJldnNbYWxpYXNdID0gdGFyZ2V0UmV2c1thbGlhc10gfHwgdHJ1ZTtcblx0XHRcdCF0YXJnZXRTY29wZVtuYW1lXSAmJiAodGFyZ2V0U2NvcGVbbmFtZV0gPSBzY29wZS5zdG9yZXNbbmFtZV0pO1xuXHRcdFx0aWYgKCBzY29wZS5zdG9yZXNbbmFtZV0uaGFzT3duUHJvcGVydHkoJ2RhdGEnKSApXG5cdFx0XHRcdGluaXRpYWxPdXRwdXRzW25hbWVdID0gc2NvcGUuZGF0YVtuYW1lXTtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0KTtcblx0XG5cdC8vIC4uLiBAdG9kb1xuXHRjU3RvcmUub25jZSgnZGVzdHJveScsICggLi4uYXJneiApID0+IHtcblx0XHRrZXlzLm1hcChcblx0XHRcdCgga2V5ICkgPT4ge1xuXHRcdFx0XHRsZXQgbmFtZSxcblx0XHRcdFx0ICAgIGFsaWFzLCBwYXRoLFxuXHRcdFx0XHQgICAgc3RvcmU7XG5cdFx0XHRcdGlmICgga2V5LnN0b3JlICYmIGtleS5uYW1lICkge1xuXHRcdFx0XHRcdGFsaWFzID0gbmFtZSA9IGtleS5uYW1lO1xuXHRcdFx0XHRcdHN0b3JlID0ga2V5LnN0b3JlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2UgaWYgKCBpcy5mbihrZXkpICkge1xuXHRcdFx0XHRcdG5hbWUgPSBhbGlhcyA9IGtleS5uYW1lIHx8IGtleS5kZWZhdWx0TmFtZTtcblx0XHRcdFx0XHRzdG9yZSA9IHNjb3BlLnN0b3Jlc1tuYW1lXTtcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHRrZXkgICA9IGtleS5tYXRjaCgvKFtcXHdfXSspKCg/OlxcLltcXHdfXSspKikoPzpcXDooW1xcd19dKykpPy8pO1xuXHRcdFx0XHRcdG5hbWUgID0ga2V5WzFdO1xuXHRcdFx0XHRcdHBhdGggID0ga2V5WzJdICYmIGtleVsyXS5zdWJzdHIoMSk7XG5cdFx0XHRcdFx0c3RvcmUgPSBzY29wZS5zdG9yZXNba2V5WzFdXTtcblx0XHRcdFx0XHRhbGlhcyA9IGtleVszXSB8fCBwYXRoICYmIHBhdGgubWF0Y2goLyhbXlxcLl0qKSQvKVswXSB8fCBrZXlbMV07XG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHRcdHN0b3JlICYmICFpcy5mbihzdG9yZSkgJiYgc3RvcmUudW5CaW5kKGNTdG9yZSwgYWxpYXMsIHBhdGgpXG5cdFx0XHR9XG5cdFx0KTtcblx0fSlcblx0XG5cdHJldHVybiBpbml0aWFsT3V0cHV0cztcbn07XG5cblxuaXMucnNTdG9yZSAgICAgID0gZnVuY3Rpb24gKCBvYmogKSB7XG5cdHJldHVybiBvYmogaW5zdGFuY2VvZiBTdG9yZVxufVxuaXMucnNTdG9yZUNsYXNzID0gZnVuY3Rpb24gKCBvYmogKSB7XG5cdHJldHVybiBTdG9yZS5pc1Byb3RvdHlwZU9mKG9iaikgfHwgb2JqID09PSBTdG9yZVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdG9yZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvU3RvcmUuanMiLCIvKlxuICogQ29weXJpZ2h0IChjKSAgMjAxOCBXaXNlIFdpbGQgV2ViIC5cbiAqXG4gKiAgTUlUIExpY2Vuc2VcbiAqXG4gKiAgUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqICBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiAgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuICogIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqICBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqICBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqICBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiAgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqICBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuICogIFNPRlRXQVJFLlxuICpcbiAqIEBhdXRob3IgOiBOYXRoYW5hZWwgQnJhdW5cbiAqIEBjb250YWN0IDogY2FpcGlsYWJzQGdtYWlsLmNvbVxuICovXG5cbi8vaW1wb3J0IGluZGV4IGZyb20gXCIuL2luZGV4XCI7Ly8gd2lsbCB1c2UgYXMgZXh0ZXJuYWwgdGhlIGluZGV4IGluIGRpc3RcbmltcG9ydCBpcyBmcm9tIFwiaXNcIjtcblxuLyoqXG4gKiBNaW5pbWFsIHB1c2ggc2VxdWVuY2VyLCBhcHBseSBzdG9yZXMgc3BlY2lmaWMgdGFzayBpbiB0aGUgcmlnaHQgb3JkZXIgKHJvb3Qgc3RvcmVzXG4gKiBmaXJzdClcbiAqL1xubGV0IHRhc2tRdWV1ZSAgICAgID0gW10sXG4gICAgY3VyV2VpZ2h0ICAgICAgPSAwLFxuICAgIG1heFdlaWdodCAgICAgID0gMCxcbiAgICBtaW5XZWlnaHQgICAgICA9IDAsXG4gICAgdGFza0NvdW50ICAgICAgPSAwLFxuICAgIGRlU3luYyAgICAgICAgID0gZmFsc2UsXG4gICAgZGVTeW5jTWF4VGFza3MgPSAxMCxcbiAgICB0YXNrLFxuICAgIGlzUnVubmluZyxcbiAgICBlcnJvckNhdGNoZXIgICA9IHtcbiAgICAgICAgbGFzdEVycm9yOiBudWxsLFxuICAgICAgICBkaXNwYXRjaCA6IGZ1bmN0aW9uICggZXJyb3IgKSB7XG4gICAgICAgICAgICBlcnJvckNhdGNoZXIuZGlzYWJsZSgpO1xuICAgICAgICAgICAgaWYgKCB0YXNrICYmIHRhc2tbIDAgXS5oYW5kbGVFcnJvciApIHtcbiAgICAgICAgICAgICAgICB0YXNrWyAwIF0uaGFuZGxlRXJyb3IoZXJyb3IsIHRhc2spO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoIHRhc2sgKVxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJSZVNjb3BlIDogQW4gYXBwbHkgdGFzayBoYXMgZmFpbGVkICEhXCIsIHRhc2tbIDEgXSwgXCIgb24gXCIsIHRhc2tbIDAgXS5uYW1lIHx8IHRhc2tbIDAgXS5jb25zdHJ1Y3Rvci5uYW1lKVxuICAgICAgICBcbiAgICAgICAgICAgIGlzUnVubmluZyA9IGZhbHNlO1xuICAgICAgICAgICAgdGFzayAgICAgID0gbnVsbDtcbiAgICAgICAgICAgIHJ1bk5vdygpO1xuICAgICAgICB9LFxuICAgICAgICBlbmFibGUgICA6ICggdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgKVxuICAgICAgICAgICAgICAgICAgID8gKCkgPT4ge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIGVycm9yQ2F0Y2hlci5kaXNwYXRjaClcbiAgICAgICAgICAgIH0gOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgcHJvY2Vzcy5vbigndW5jYXVnaHRFeGNlcHRpb24nLCBlcnJvckNhdGNoZXIuZGlzcGF0Y2gpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgZGlzYWJsZSAgOiAoIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnIClcbiAgICAgICAgICAgICAgICAgICA/ICgpID0+IHtcbiAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignZXJyb3InLCBlcnJvckNhdGNoZXIuZGlzcGF0Y2gpXG4gICAgICAgICAgICB9IDogKCkgPT4ge1xuICAgICAgICAgICAgICAgIHByb2Nlc3MucmVtb3ZlTGlzdGVuZXIoJ3VuY2F1Z2h0RXhjZXB0aW9uJywgZXJyb3JDYXRjaGVyLmRpc3BhdGNoKTtcbiAgICAgICAgICAgIH1cbiAgICB9XG47XG5cbmZ1bmN0aW9uIHJ1bk5vdygpIHtcbiAgICBpZiAoICFpc1J1bm5pbmcgKSB7XG4gICAgICAgIHJ1bigpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gcnVuKCkge1xuICAgIGxldCBmcm9tICA9IERhdGUubm93KCk7XG4gICAgaXNSdW5uaW5nID0gdHJ1ZTtcbiAgICBlcnJvckNhdGNoZXIuZW5hYmxlKCk7XG4gICAgd2hpbGUgKCB0YXNrQ291bnQgKSB7XG4gICAgICAgIFxuICAgICAgICAvLyB0cnkgZm9yIHRoZSBjdXJyZW50IHdlaWdodFxuICAgICAgICB3aGlsZSAoICEoIHRhc2tRdWV1ZVsgY3VyV2VpZ2h0IF0gJiYgdGFza1F1ZXVlWyBjdXJXZWlnaHQgXS5sZW5ndGggKSApXG4gICAgICAgICAgICBjdXJXZWlnaHQrKztcbiAgICAgICAgXG4gICAgICAgIHRhc2tDb3VudC0tO1xuICAgICAgICB0YXNrID0gdGFza1F1ZXVlWyBjdXJXZWlnaHQgXS5zaGlmdCgpO1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwiVGFzayA6IFwiLCB0YXNrWzFdLCBcIiBvbiBcIiwgdGFza1swXS5uYW1lKTtcbiAgICAgICAgdGFza1sgMCBdWyB0YXNrWyAxIF0gXS5hcHBseSh0YXNrWyAwIF0sIHRhc2tbIDIgXSk7XG4gICAgfVxuICAgIHRhc2sgPSB1bmRlZmluZWQ7XG4gICAgZXJyb3JDYXRjaGVyLmRpc2FibGUoKTtcbiAgICBcbiAgICBpc1J1bm5pbmcgPSBmYWxzZTtcbiAgICBpZiAoIHRhc2tDb3VudCApIHtcbiAgICAgICAgc2V0VGltZW91dChydW5Ob3cpO1xuICAgIH1cbn1cblxuLy9cbi8vaW5kZXguc2V0VGFza0RlU3luYyA9ICggbmIgKSA9PiB7XG4vLyAgICBpZiAoIG5iID09PSBmYWxzZSApXG4vLyAgICAgICAgcmV0dXJuIGRlU3luYyA9IGZhbHNlO1xuLy8gICAgZWxzZSBpZiAoIG5iID09PSB0cnVlICkge1xuLy8gICAgICAgIGRlU3luYyAgICAgICAgID0gdHJ1ZTtcbi8vICAgICAgICBkZVN5bmNNYXhUYXNrcyA9IDEwO1xuLy8gICAgfVxuLy8gICAgZWxzZSAoaXMuaW50KG5iKSlcbi8vICAgIHtcbi8vICAgICAgICBkZVN5bmMgICAgICAgICA9IHRydWU7XG4vLyAgICAgICAgZGVTeW5jTWF4VGFza3MgPSBuYjtcbi8vICAgIH1cbi8vfTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHB1c2hUYXNrKCBvYmosIGZuLCBhcmd6ICkge1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIG1vcmUgYSBzdG9yZSBoYXZlIHNvdXJjZXMsIHRoZSBtb3JlIGl0IHNob3VsZCBiZSBwcm9jZXNzZWQgZmlyc3RcbiAgICAgICAgICogU28gbGVhZnMgc3RvcmVzIHN0YXkgc3luYywgYW5kIHJvb3Qgc3RvcmVzIHJlY2VpdmUgbWVyZ2VkIHN0YXRlIHVwZGF0ZXM7XG4gICAgICAgICAqIGdsb2JhbCBzdGF0ZSBzdGF5IGNvaGVyZW50XG4gICAgICAgICAqXG4gICAgICAgICAqIFRoaXMgbWVhbiB3aGF0ZXZlciB0aGUgbnVtYmVyIG9mIHN0b3JlcyAmIHRoZSBjb21wbGV4aXR5IG9mIHRoZSBkZXBzLFxuICAgICAgICAgKiB1cGRhdGluZyBhIHN0b3JlIHN0YXRlIHdpbGwgdXBkYXRlIGl0cyBzeW5jaHJvbmUgY2hpbGQgc3RvcmVzIGltbWVkaWF0ZWx5XG4gICAgICAgICAqXG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBlIHsqfG51bWJlcn1cbiAgICAgICAgICovXG4gICAgICAgIGxldCB3ZWlnaHQgPSBvYmouX3NvdXJjZXMgJiYgb2JqLl9zb3VyY2VzLmxlbmd0aCB8fCAxLFxuICAgICAgICAgICAgc3RhY2sgID0gdGFza1F1ZXVlWyB3ZWlnaHQgXSA9XG4gICAgICAgICAgICAgICAgdGFza1F1ZXVlWyB3ZWlnaHQgXSB8fCBbXTtcbiAgICAgICAgXG4gICAgICAgIG1heFdlaWdodCA9IE1hdGgubWF4KG1heFdlaWdodCwgd2VpZ2h0KTtcbiAgICAgICAgY3VyV2VpZ2h0ID0gTWF0aC5taW4oY3VyV2VpZ2h0LCB3ZWlnaHQpO1xuICAgICAgICB0YXNrQ291bnQrKztcbiAgICAgICAgXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJQdXNoIFRhc2sgOiBcIiwgZm4sIFwiIG9uIFwiLCBvYmoubmFtZSwgd2VpZ2h0KTtcbiAgICAgICAgc3RhY2sucHVzaChbIG9iaiwgZm4sIGFyZ3ogXSk7XG4gICAgICAgIHNldFRpbWVvdXQocnVuTm93LCAwKTtcbiAgICAgICAgcmV0dXJuIHN0YWNrLmxlbmd0aDtcbiAgICB9XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlscy9UYXNrU2VxdWVuY2VyLmpzIiwiLypcbiAqIENvcHlyaWdodCAoYykgIDIwMTggV2lzZSBXaWxkIFdlYiAuXG4gKlxuICogIE1JVCBMaWNlbnNlXG4gKlxuICogIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqICBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiAgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqICBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqICBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqICBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcbiAqICBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqICBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiAgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiAgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiAgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiAgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcbiAqICBTT0ZUV0FSRS5cbiAqXG4gKiBAYXV0aG9yIDogTmF0aGFuYWVsIEJyYXVuXG4gKiBAY29udGFjdCA6IGNhaXBpbGFic0BnbWFpbC5jb21cbiAqL1xuXG5pbXBvcnQgaXMgICAgZnJvbSAnaXMnXG5cbmNvbnN0IFNpbXBsZU9iamVjdFByb3RvID0gKCB7fSApLmNvbnN0cnVjdG9yO1xuXG5sZXQgc2NvcGFibGVzID0gW107XG5cbmZ1bmN0aW9uIGFkZFNjb3BhYmxlVHlwZSggdGVzdCwgaGFuZGxlLCBtZW1iZXIgPSBmYWxzZSwgc3RhdGVTY29wZSA9IGZhbHNlICkge1xuICAgIHNjb3BhYmxlcy5wdXNoKFxuICAgICAgICB7XG4gICAgICAgICAgICB0ZXN0LFxuICAgICAgICAgICAgbWVtYmVyLFxuICAgICAgICAgICAgc3RhdGVTY29wZSxcbiAgICAgICAgICAgIGhhbmRsZVxuICAgICAgICB9XG4gICAgKVxufVxuXG4vL1xuZnVuY3Rpb24gaXNTY29wYWJsZVR5cGUoIENvbXAsIG1lbWJlciwgc3RhdGVTY29wZSApIHtcbiAgICBcbiAgICBmb3IgKCBsZXQgaSA9IDA7IGkgPCBzY29wYWJsZXMubGVuZ3RoOyBpKysgKVxuICAgICAgICBpZiAoXG4gICAgICAgICAgICAoIG1lbWJlciA9PT0gdW5kZWZpbmVkIHx8IG1lbWJlciA9PSBzY29wYWJsZXNbIGkgXS5tZW1iZXIgKVxuICAgICAgICAgICAgJiYgc3RhdGVTY29wZSA9PSBzY29wYWJsZXNbIGkgXS5zdGF0ZVNjb3BlXG4gICAgICAgICAgICAmJiBzY29wYWJsZXNbIGkgXS50ZXN0KENvbXApXG4gICAgICAgIClcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgIFxuICAgIHJldHVybiBmYWxzZTtcbiAgICBcbn1cblxuZnVuY3Rpb24gYXBwbHlTY29wYWJsZVR5cGUoIENvbXAsIGFyZ3osIG1lbWJlciwgc3RhdGVTY29wZSApIHtcbiAgICBcbiAgICBmb3IgKCBsZXQgaSA9IDA7IGkgPCBzY29wYWJsZXMubGVuZ3RoOyBpKysgKVxuICAgICAgICBpZiAoIG1lbWJlciA9PSBzY29wYWJsZXNbIGkgXS5tZW1iZXIgJiYgc3RhdGVTY29wZSA9PSBzY29wYWJsZXNbIGkgXS5zdGF0ZVNjb3BlICYmIHNjb3BhYmxlc1sgaSBdLnRlc3QoQ29tcCkgKVxuICAgICAgICAgICAgcmV0dXJuIHNjb3BhYmxlc1sgaSBdLmhhbmRsZShDb21wLCAuLi5hcmd6KTtcbiAgICBcbiAgICBjb25zb2xlLndhcm4oXCJyZVNjb3BlIDogVW5rbm93biB0eXBlXCIsIENvbXApXG4gICAgXG4gICAgcmV0dXJuIGZhbHNlO1xuICAgIFxufVxuXG5mdW5jdGlvbiByZVNjb3BlKCAuLi5hcmd6ICkge1xuICAgIC8vIGFyZSB3ZSBkZWNvcmF0aW5nIGEgbWVtYmVyIC8gd2l0aG91dCBhcmd6XG4gICAgaWYgKCBhcmd6WyAwIF0gaW5zdGFuY2VvZiBTaW1wbGVPYmplY3RQcm90byAmJiBhcmd6WyAyIF0gaW5zdGFuY2VvZiBTaW1wbGVPYmplY3RQcm90byAmJiBhcmd6WyAwIF0uaGFzT3duUHJvcGVydHkoYXJnelsgMSBdKSApIHtcbiAgICAgICAgYXJnelsgMiBdLnZhbHVlID0gYXBwbHlTY29wYWJsZVR5cGUoYXJnelsgMCBdLCBbXSwgdHJ1ZSwgZmFsc2UpO1xuICAgICAgICByZXR1cm4gYXJnelsgMCBdO1xuICAgIH1cbiAgICBlbHNlIGlmICggIWlzU2NvcGFibGVUeXBlKGFyZ3pbIDAgXSwgdW5kZWZpbmVkLCBmYWxzZSkgKSB7XG4gICAgICAgIHJldHVybiAoIC4uLmFyZ3oyICkgPT4ge1xuICAgICAgICAgICAgLy8gYXJlIHdlIGRlY29yYXRpbmcgYSBtZW1iZXIgLyB3aXRoIGFyZ3pcbiAgICAgICAgICAgIGlmICggYXJnejJbIDAgXSBpbnN0YW5jZW9mIFNpbXBsZU9iamVjdFByb3RvICYmIGFyZ3oyWyAyIF0gaW5zdGFuY2VvZiBTaW1wbGVPYmplY3RQcm90byAmJiBhcmd6MlsgMCBdLmhhc093blByb3BlcnR5KGFyZ3oyWyAxIF0pICkge1xuICAgICAgICAgICAgICAgIGFyZ3oyWyAyIF0udmFsdWUgPSBhcHBseVNjb3BhYmxlVHlwZShhcmd6MlsgMCBdLCBhcmd6LCB0cnVlLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFyZ3oyWyAwIF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlU2NvcGUoYXJnejJbIDAgXSwgLi4uYXJneik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGFwcGx5U2NvcGFibGVUeXBlKGFyZ3pbIDAgXSwgYXJnei5zbGljZSgxKSwgZmFsc2UsIGZhbHNlKTtcbn1cblxuZnVuY3Rpb24gc2NvcGVUb1N0YXRlKCAuLi5hcmd6ICkge1xuICAgIC8vIGFyZSB3ZSBkZWNvcmF0aW5nIGEgbWVtYmVyIC8gd2l0aG91dCBhcmd6XG4gICAgaWYgKCBhcmd6WyAwIF0gaW5zdGFuY2VvZiBTaW1wbGVPYmplY3RQcm90byAmJiBhcmd6WyAyIF0gaW5zdGFuY2VvZiBTaW1wbGVPYmplY3RQcm90byAmJiBhcmd6WyAwIF0uaGFzT3duUHJvcGVydHkoYXJnelsgMSBdKSApIHtcbiAgICAgICAgYXJnelsgMiBdLnZhbHVlID0gYXBwbHlTY29wYWJsZVR5cGUoYXJnelsgMCBdLCBbXSwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgIHJldHVybiBhcmd6WyAwIF07XG4gICAgfVxuICAgIGVsc2UgaWYgKCAhaXNTY29wYWJsZVR5cGUoYXJnelsgMCBdLCB1bmRlZmluZWQsIHRydWUpICkge1xuICAgICAgICByZXR1cm4gKCAuLi5hcmd6MiApID0+IHtcbiAgICAgICAgICAgIC8vIGFyZSB3ZSBkZWNvcmF0aW5nIGEgbWVtYmVyIC8gd2l0aCBhcmd6XG4gICAgICAgICAgICBpZiAoIGFyZ3oyWyAwIF0gaW5zdGFuY2VvZiBTaW1wbGVPYmplY3RQcm90byAmJiBhcmd6MlsgMiBdIGluc3RhbmNlb2YgU2ltcGxlT2JqZWN0UHJvdG8gJiYgYXJnejJbIDAgXS5oYXNPd25Qcm9wZXJ0eShhcmd6MlsgMSBdKSApIHtcbiAgICAgICAgICAgICAgICBhcmd6MlsgMiBdLnZhbHVlID0gYXBwbHlTY29wYWJsZVR5cGUoYXJnejJbIDAgXSwgYXJneiwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFyZ3oyWyAwIF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNjb3BlVG9TdGF0ZShhcmd6MlsgMCBdLCAuLi5hcmd6KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYXBwbHlTY29wYWJsZVR5cGUoYXJnelsgMCBdLCBhcmd6LnNsaWNlKDEpLCBmYWxzZSwgdHJ1ZSk7XG59XG5cbi8vXG4vL2FkZFNjb3BhYmxlVHlwZShcbi8vICAgICggQ29tcCApID0+IChDb21wICYmIENvbXAucHJvdG90eXBlIGluc3RhbmNlb2YgU3RvcmUpLFxuLy8gICAgZnVuY3Rpb24gcmVTY29wZSggLi4uYXJneiApIHtcbi8vICAgICAgICBsZXQgQmFzZVN0b3JlICAgID0gKCFhcmd6WzBdIHx8IGFyZ3pbMF0ucHJvdG90eXBlIGluc3RhbmNlb2YgU3RvcmUpICYmXG4vLyBhcmd6LnNoaWZ0KCksIHNjb3BlICAgICAgICA9ICghYXJnelswXSB8fCBhcmd6WzBdIGluc3RhbmNlb2YgU2NvcGUgfHwgaXMuZm4oYXJnelswXSkpXG4vLyAmJiBhcmd6LnNoaWZ0KCksIHVzZSAgICAgICAgICA9IChpcy5hcnJheShhcmd6WzBdKSkgJiYgYXJnei5zaGlmdCgpLCBzdGF0ZU1hcCAgICAgPVxuLy8gIXVzZSAmJiAoIWFyZ3pbMF0gfHwgYXJnelswXSBpbnN0YW5jZW9mIFNpbXBsZU9iamVjdFByb3RvKSAmJiBhcmd6LnNoaWZ0KCksXG4vLyBpbml0aWFsU3RhdGUgPSB7fTsgIGxldCBjb21wTmFtZSA9IEJhc2VTdG9yZS5kaXNwbGF5TmFtZSB8fCBCYXNlU3RvcmUubmFtZTsgIHVzZSA9XG4vLyBbLi4uKEJhc2VTdG9yZS51c2UgfHwgW10pLCAuLi4odXNlIHx8IFtdKV07IHN0YXRlTWFwICYmXG4vLyBTY29wZS5zdGF0ZU1hcFRvUmVmTGlzdChzdGF0ZU1hcCwgaW5pdGlhbFN0YXRlLCB1c2UpOyAgY2xhc3MgU3RhdGVTY29wZWRTdG9yZSBleHRlbmRzXG4vLyBCYXNlU3RvcmUgeyBzdGF0aWMgdXNlICAgICAgICAgPSB1c2U7IHN0YXRpYyBkaXNwbGF5TmFtZSA9IFwic3RhdGVTY29wZWQoXCIgKyBjb21wTmFtZSArXG4vLyBcIilcIjsgIGNvbnN0cnVjdG9yKCAuLi5hcmd6ICkgeyBzdXBlcihzY29wZSwgYXJnei5zbGljZShhcmd6WzBdIGluc3RhbmNlb2YgU2NvcGUgPyAxIDpcbi8vIDApKSB9IH0gIHJldHVybiBTdGF0ZVNjb3BlZFN0b3JlOyB9LCBmYWxzZSwgdHJ1ZSApXG5cblxuZXhwb3J0IHtcbiAgICBhZGRTY29wYWJsZVR5cGUsXG4gICAgcmVTY29wZSxcbiAgICBzY29wZVRvU3RhdGVcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWxzL3Njb3BhYmxlLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==