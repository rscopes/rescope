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
	
	var _Store = __webpack_require__(6);
	
	var _Store2 = _interopRequireDefault(_Store);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
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
	
	var $global = typeof window !== 'undefined' ? window : global;
	
	var RS = $global.___rescope || {};
	
	if ($global.___rescope) {
	  console.warn("ReScope is defined multiple times !! \nCheck you're packaging");
	} else {
	
	  $global.___rescope = RS;
	  _Scope2.default.Store = _Store2.default;
	  RS.Scope = _Scope2.default;
	  RS.Store = _Store2.default;
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

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _class, _temp; /*
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
	
	var _is = __webpack_require__(2);
	
	var _is2 = _interopRequireDefault(_is);
	
	var _shortid = __webpack_require__(3);
	
	var _shortid2 = _interopRequireDefault(_shortid);
	
	var _Emitter = __webpack_require__(4);
	
	var _Emitter2 = _interopRequireDefault(_Emitter);
	
	var _utils = __webpack_require__(5);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var __proto__push = function __proto__push(target, id, parent) {
		var fn = function fn() {};
		fn.prototype = parent ? new parent._[id]() : target[id] || {};
		target[id] = new fn();
		target._[id] = fn;
	},
	    allScopes = {};
	
	/**
	 * Base Scope object
	 */
	var Scope = (_temp = _class = function (_EventEmitter) {
		_inherits(Scope, _EventEmitter);
	
		_createClass(Scope, null, [{
			key: "stateMapToRefList",
			// all active scopes
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
			} // if > 0, will wait 'persistenceTm' ms before destroy when dispose reach 0
	
		}, {
			key: "getScope",
			value: function getScope(scopes) {
				var skey = _is2.default.array(scopes) ? scopes.sort(function (a, b) {
					if (a.firstname < b.firstname) return -1;
					if (a.firstname > b.firstname) return 1;
					return 0;
				}).join('+') : scopes;
				return allScopes[skey] = allScopes[skey] || new Scope({}, { id: skey });
			}
		}]);
	
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
				keyPID: upperScope && upperScope._id || parent && parent._id || _shortid2.default.generate(),
				key: key,
				incrementId: incrementId,
				baseId: id
			};
	
			// generate / set this scope id
			id = id || key && _.keyPID + '>' + key;
	
			_.isLocalId = !id;
	
			id = id || "_____" + _shortid2.default.generate();
	
			if (allScopes[id] && !incrementId) {
				var _ret;
	
				// overwrite existing scope
				_this._id = id;
				allScopes[id].register(storesMap);
				return _ret = allScopes[id], _possibleConstructorReturn(_this, _ret);
			} else if (allScopes[id] && incrementId) {
				// generate key id
				var i = -1;
				while (allScopes[id + '[' + ++i + ']']) {}
				id = id + '[' + i + ']';
			}
	
			// register this scope in the static Scope.scopes
			allScopes[id] = _this;
	
			_this._id = id;
			_this._rev = 0;
	
			_this._ = _;
	
			_this.actions = {};
			_this.stores = {};
			_this.state = {};
			_this.data = {};
	
			_this.parent = parent;
	
			if (autoDestroy == 'inherit') autoDestroy = parent && parent._autoDestroy;
	
			_this._autoDestroy = autoDestroy;
			_.persistenceTm = persistenceTm || _this.constructor.persistenceTm;
	
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
			_._listening = {};
			_._scope = {};
			_._mixed = [];
			_._mixedList = [];
			_.followers = [];
	
			_this.__retains = { all: 0 };
			_this.__locks = { all: 1 };
	
			// todo
			_._boundedActions = _is2.default.array(boundedActions) ? { test: boundedActions.includes.bind(boundedActions) } : boundedActions;
	
			// register to the parent scope
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
	
			// register this scope stores
			_this.register(storesMap, state, data);
			_this.__locks.all--;
			_this._stable = !_this.__locks.all;
	
			if (parent) {
				parent._addChild(_this);
			}
	
			// restore snapshots
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
	  * @param storeIdList {string|storeRef} Store name, Array of Store names, or Rescope
	  *     store ref from Store::as or Store:as
	  * @param state
	  * @param data
	  * @returns {Scope}
	  */
	
	
		_createClass(Scope, [{
			key: "mount",
			value: function mount(storeIdList, snapshot, state, data) {
				var _this2 = this;
	
				if (_is2.default.array(storeIdList)) {
					storeIdList.forEach(function (storeId) {
						return _this2._mount(storeId, snapshot, state, data);
					});
				} else {
					this._mount.apply(this, arguments);
				}
				return this;
			}
		}, {
			key: "_mount",
			value: function _mount(id, snapshot, state, data) {
				var ref = void 0,
				    _ = this._;
	
				ref = this.parseRef(id);
	
				if (id == "$parent") return;
				if (!_._scope[ref.storeId]) {
					var _parent;
	
					//ask mixed || parent
					if (_._mixed.reduceRight(function (mounted, ctx) {
						return mounted || ctx._mount(id, snapshot, state, data);
					}, false) || !this.parent) return;
					return (_parent = this.parent)._mount.apply(_parent, arguments);
				} else {
					var store = _._scope[ref.storeId],
					    taskQueue = [];
					if (Scope.isStoreClass(store)) {
						_._scope[ref.storeId] = new store(this, {
							//snapshot,
							name: ref.storeId,
							state: state,
							data: data
						}, taskQueue);
						while (taskQueue.length) {
							taskQueue.shift()();
						}
					} else if (Scope.isScopeClass(store)) {
						store = _._scope[ref.storeId] = new store({ $parent: this }, {
							key: ref.storeId,
							incrementId: true,
							upperScope: this
							//autoDestroy: true
							//parent: this
						});
						//_._scope[ ref.storeId ].retain("scopedChildScope");
						//_watchStore(ref.storeId);
						if (ref.path.length > 1) _._scope[ref.storeId].mount(ref.path.slice(1).join('.'), snapshot, state, data);
						//else return _._scope[ ref.storeId ];
					}
					if (Scope.isStore(store)) {
						if (state !== undefined && data === undefined) store.setState(state);else if (state !== undefined) store.state = state;
	
						if (data !== undefined) store.push(data);
					}
					this._watchStore(ref.storeId);
				}
	
				return _._scope[ref.storeId];
			}
	
			/**
	   * Register stores in storesMap & link them in the protos
	   * @param storesMap
	   * @param state
	   * @param data
	   */
	
		}, {
			key: "register",
			value: function register(storesMap) {
				var _this3 = this;
	
				var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
				var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	
				this.relink(storesMap, this, false, false);
				Object.keys(storesMap).forEach(function (id) {
					if (id == "$parent") return;
					if (storesMap[id].singleton || _is2.default.fn(storesMap[id]) && (state[id] || data[id])) {
						_this3._mount(id, undefined, state[id], data[id]);
					} else if (state[id] || data[id]) {
						if (data[id]) {
							if (state[id]) _this3.stores[id].state = state[id];
							_this3.stores[id].push(data[id]);
						} else if (state[id]) {
							_this3.stores[id].setState(state[id]);
						}
					} else {
						_this3._watchStore(id);
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
			key: "relink",
			value: function relink(srcCtx) {
				var targetCtx = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this;
	
				var _this4 = this;
	
				var external = arguments[2];
				var force = arguments[3];
	
				var _ = this._;
				Object.keys(srcCtx).forEach(function (id) {
					var hotReloading = void 0;
	
					// same store def : ignore
					if (!force && targetCtx._._scope[id] === srcCtx[id] || targetCtx._._scope[id] && targetCtx._._scope[id].constructor === srcCtx[id]) return;
	
					// hot switch
					if (!force && targetCtx._._scope[id]) {
	
						if (!external && !_is2.default.fn(targetCtx._._scope[id])) {
							console.info("Rescope Store : ", id, " already exist in this scope ! ( Hot switching the store ) !!!");
							var tmp = targetCtx._._scope[id];
							targetCtx._._scope[id] = srcCtx[id];
							hotReloading = tmp.nextState;
							tmp.destroy();
						}
	
						if (!external && _is2.default.fn(targetCtx._._scope[id])) targetCtx._._scope[id] = srcCtx[id];
					} else if (!force && !external) _._scope[id] = srcCtx[id];
	
					// map the store id
					Object.defineProperty(targetCtx._.stores.prototype, id, {
						enumerable: true,
						configurable: true,
						get: function get() {
							return _._scope[id];
						}
					});
	
					// not mapping hierarchic scopes
					if (id === "$parent") return;
	
					// map state & data
					Object.defineProperty(targetCtx._.state.prototype, id, {
						enumerable: true,
						configurable: true,
						get: function get() {
							return _._scope[id] && _._scope[id].state;
						},
						set: function set(v) {
							return _this4._mount(id, undefined, v);
						}
					});
					Object.defineProperty(targetCtx._.data.prototype, id, {
						enumerable: true,
						configurable: true,
						get: function get() {
							return _._scope[id] && _._scope[id].data;
						},
						set: function set(v) {
							return _this4._mount(id, undefined, undefined, v);
						}
					});
	
					// action mapping
					var actions = srcCtx[id] instanceof Scope.Store ? srcCtx[id].constructor.actions : srcCtx[id].actions,
					    activeActions = targetCtx._.actions.prototype;
					if (Scope.isScope(_._scope[id].prototype)) _this4._mount(id);
					if (Scope.isScope(_._scope[id])) {
						activeActions[id] = _._scope[id].actions;
					}
					if (!Scope.isStore(_._scope[id]) && !Scope.isStoreClass(_._scope[id])) return;
	
					actions && Object.keys(actions).forEach(function (act) {
						if (activeActions.hasOwnProperty(act)) activeActions[act].__targetStores++;else {
							activeActions[act] = _this4.dispatch.bind(_this4, act);
							activeActions[act].__targetStores = 1;
						}
					});
	
					// remount the store if it was hot reloaded
					if (hotReloading) _this4._mount(id, null, hotReloading);
				});
			}
	
			/**
	   * Make this scope watching the local store 'id'
	   * @param id
	   * @returns {boolean}
	   * @private
	   */
	
		}, {
			key: "_watchStore",
			value: function _watchStore(id) {
				var _this5 = this;
	
				var _ = this._;
				if (!_._listening[id] && !_is2.default.fn(_._scope[id])) {
					!_._scope[id]._autoDestroy && _._scope[id].retain("scoped");
					!_._scope[id].isStable() && this.wait(id);
					_._scope[id].on(_._listening[id] = {
						'destroy': function destroy(s) {
							delete _._listening[id];
							_._scope[id] = _._scope[id].constructor;
						},
						'update': function update(s) {
							return _this5.propag();
						},
						'stable': function stable(s) {
							return _this5.release(id);
						},
						'unstable': function unstable(s) {
							return _this5.wait(id);
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
			key: "mixin",
			value: function mixin(targetCtx) {
				var _this6 = this;
	
				var parent = this.parent,
				    lists = void 0,
				    _ = this._;
	
				_._mixed.push(targetCtx);
	
				targetCtx.retain("mixedTo");
	
				if (!targetCtx._stable) this.wait(targetCtx._id);
	
				_._mixedList.push(lists = {
					'stable': function stable(s) {
						return _this6.release(targetCtx._id);
					},
					'unstable': function unstable(s) {
						return _this6.wait(targetCtx._id);
					},
					'update': function update(s) {
						return _this6._propag();
					}
				});
	
				targetCtx.on(lists);
	
				// reset protos
				// push new proto with parent
				__proto__push(this, 'actions', parent);
				__proto__push(this, 'stores', parent);
				__proto__push(this, 'state', parent);
				__proto__push(this, 'data', parent);
	
				// bind local accessors in the new proto
				this.relink(_._scope, this, false, true);
	
				_._mixed.forEach(function (ctx) {
					// push protos
					__proto__push(_this6, 'actions');
					__proto__push(_this6, 'stores');
					__proto__push(_this6, 'state');
					__proto__push(_this6, 'data');
					_this6.stores.__origin = "mixed " + ctx._id;
					// write mixed accessors
					ctx.relink(ctx._._scope, _this6, true, true);
				});
			}
	
			/**
	   * Bind stores from this scope, his parents or mixed scopes to obj
	   *
	   * @param target {React.Component|Store|function}
	   * @param key {string} stores keys to bind updates
	   * @param as
	   * @param setInitial {boolean} false to not propag initial value (default : true)
	   */
	
		}, {
			key: "bind",
			value: function bind(target, key, as) {
				var _this7 = this;
	
				var setInitial = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
				var revMap = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
	
				var lastRevs = void 0,
				    data = void 0,
				    refKeys = void 0;
				if (key && !_is2.default.array(key)) key = [key];
	
				if (as === false || as === true) {
					setInitial = as;
					as = null;
				}
	
				refKeys = key.map(function (id) {
					return _is2.default.string(id) ? id : id.name;
				}).map(function (id) {
					return _this7.parseRef(id);
				});
	
				this._.followers.push([target, key, as || undefined, lastRevs = refKeys.reduce(function (revs, ref) {
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
					if (typeof target != "function") {
						if (as) target.setState(_defineProperty({}, as, data));else target.setState(data);
					} else {
						target(data);
					}
				}
				return this;
			}
	
			/**
	   * Un bind this scope off the given component-keys
	   * @param target
	   * @param key
	   * @returns {Array.<*>}
	   */
	
		}, {
			key: "unBind",
			value: function unBind(target, key, as) {
				var followers = this._.followers,
				    i = followers && followers.length;
				while (followers && i--) {
					if (followers[i][0] === target && '' + followers[i][1] == '' + key && followers[i][2] == as) {
						this.disposeStores(Object.keys(followers[i][3]), 'listeners');
						return followers.splice(i, 1);
					}
				}
			}
	
			/**
	   * Mount the stores in storeIdList from this scope, its parents and mixed scope
	   * Bind them to 'to'
	   * Hook 'to' so it will auto unbind on 'destroy' or 'componentWillUnmount'
	   * @param target
	   * @param storeIdList
	   * @param bind
	   * @returns {Object} Initial outputs of the stores in 'storesList'
	   */
	
		}, {
			key: "map",
			value: function map(target, storeIdList) {
				var _this8 = this;
	
				var bind = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
				var revMap = arguments[3];
	
				var Store = this.constructor.Store;
				storeIdList = _is2.default.array(storeIdList) ? storeIdList : [storeIdList];
				var refList = storeIdList.map(this.parseRef);
				this.mount(storeIdList);
				if (bind && target instanceof Store) {
					Store.map(target, storeIdList, this, this, false);
				} else if (bind) {
					this.bind(target, storeIdList, undefined, false);
	
					var mixedCWUnmount = void 0,
					    unMountKey = target.isReactComponent ? "componentWillUnmount" : "destroy";
	
					if (target.hasOwnProperty(unMountKey)) {
						mixedCWUnmount = target[unMountKey];
					}
	
					target[unMountKey] = function () {
						delete target[unMountKey];
						if (mixedCWUnmount) target[unMountKey] = mixedCWUnmount;
	
						_this8.unBind(target, storeIdList);
						return target[unMountKey] && target[unMountKey].apply(target, arguments);
					};
				}
				return revMap && this.getUpdates(revMap) || refList.reduce(function (data, ref) {
					(0, _utils.walknSet)(data, ref.alias || ref.path, _this8.retrieve(ref.path));
					return data;
				}, {});
			}
	
			/**
	   * Get current data value from json path
	   * @param path
	   * @returns {string|*}
	   */
	
		}, {
			key: "retrieve",
			value: function retrieve() {
				var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
	
				path = _is2.default.string(path) ? path.split('.') : path;
	
				return path && this.stores[path[0]] && this.stores[path[0]].retrieve && this.stores[path[0]].retrieve(path.slice(1));
			}
	
			/**
	   * Restore all nodes in a jsonPath
	   * @param path
	   * @returns {string|*}
	   */
	
		}, {
			key: "restoreRefPath",
			value: function restoreRefPath() {
				var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
	
				path = _is2.default.string(path) ? path.split('.') : path;
	
				var obj = void 0,
				    i = 0,
				    cScope = this;
	
				while (i < path.length) {
					obj = cScope.stores[path[i]];
					if (Scope.isScopeClass(obj) || Scope.isStoreClass(obj)) {
						cScope.mount(path[0]);
						obj = cScope.stores[path[i]];
					}
	
					if (Scope.isScope(obj)) {
						cScope = obj;
						i++;
					} else if (Scope.isStore(obj)) {
						obj.restore();
						break;
					} else {
						break;
					}
				}
			}
	
			/**
	   * Get target store from json path
	   * @param path
	   * @returns {string|*}
	   */
	
		}, {
			key: "retrieveStore",
			value: function retrieveStore() {
				var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
	
				path = _is2.default.string(path) ? path.split('.') : path;
				return path && path.length && (path.length != 1 && this.stores[path[0]].retrieveStore ? this.stores[path[0]].retrieveStore(path.slice(1)) : path.length == 1 && this.stores[path[0]]);
			}
	
			/**
	   * Get or update stores revisions in 'storesRevMap'
	   * @param storesRevMap
	   * @param local
	   * @returns {{}}
	   */
	
		}, {
			key: "getStoresRevs",
			value: function getStoresRevs() {
				var storesRevMap = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
				var local = arguments[1];
	
				var ctx = this._._scope;
				if (!storesRevMap) {
					storesRevMap = {};
				}
				Object.keys(ctx).forEach(function (id) {
					if (id == "$parent") return;
					if (!_is2.default.fn(ctx[id])) {
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
	   * Recursively get all stores revs
	   * @param childs
	   * @returns {Array}
	   * @private
	   */
	
		}, {
			key: "_getRevMap",
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
	   * Get updated output basing storesRevMap's revisions.
	   * If a store in 'storesRevMap' was updated; add it to 'output' & update storesRevMap
	   * @param storesRevMap
	   * @param output
	   * @param updated
	   * @returns {*|{}}
	   */
	
		}, {
			key: "getRefsUpdates",
			value: function getRefsUpdates(refs, revMap, output) {
				var _this9 = this;
	
				revMap = revMap || refs.map(function (id) {
					return _is2.default.string(id) ? id : id.name;
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
	   * @param storesRevMap
	   * @param output
	   * @param updated
	   * @returns {*|{}}
	   */
	
		}, {
			key: "getUpdates",
			value: function getUpdates(storesRevMap, output, updated) {
				var _this10 = this;
	
				output = output || {};
				storesRevMap = storesRevMap || this._getRevMap();
				Object.keys(storesRevMap).forEach(function (id) {
					var store = _this10.stores[id];
					storesRevMap[id] = storesRevMap[id] || { rev: 0, refs: [] };
	
					if (store && _is2.default.fn(store)) {
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
	   * Recursively get all child scopes
	   * @param childs
	   * @returns {Array}
	   * @private
	   */
	
		}, {
			key: "_getAllChilds",
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
			key: "serialize",
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
			key: "serialize_ex",
			value: function serialize_ex() {
				var cfg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
				var output = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
				var sid = arguments[2];
	
				var _this11 = this;
	
				var alias = arguments[3];
				var exclude = arguments[4];
				var _ = this._,
				    ctx = _._scope,
				    incrementId = _.incrementId,
				    _cfg$withChilds = cfg.withChilds,
				    withChilds = _cfg$withChilds === undefined ? true : _cfg$withChilds,
				    _cfg$withMixed = cfg.withMixed,
				    withMixed = _cfg$withMixed === undefined ? true : _cfg$withMixed,
				    norefs = cfg.norefs;
	
	
				if ((0, _utils.keyWalknGet)(output, sid)) {
					if (!incrementId) // done
						return output;else if (incrementId) {
						// generate key id
						var i = -1;
						while ((0, _utils.keyWalknGet)(output, sid + '[' + ++i + ']')) {}
						sid = sid + '[' + i + ']';
					}
				}
	
				(0, _utils.keyWalknSet)(output, sid, {});
	
				Object.keys(ctx).forEach(function (id) {
					if (exclude.includes(id) || Scope.isStoreClass(ctx[id]) || Scope.isScopeClass(ctx[id])) return;
	
					ctx[id].serialize(_extends({}, cfg, { parentAlias: sid }), output);
				});
	
				withChilds && _.childScopes.forEach(function (ctx) {
					!ctx._.isLocalId && ctx.serialize({
						withChild: true,
						withParents: false,
						parentAlias: sid,
						withMixed: withMixed,
						norefs: norefs
					}, output);
				});
	
				withMixed && _._mixed.forEach(function (ctx) {
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
			key: "restore",
			value: function restore(snapshot) {
				var _this12 = this;
	
				var cfg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
				var force = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _is2.default.bool(cfg) && cfg;
	
				var ctx = this._._scope,
				    snap = void 0;
	
				if (snapshot && cfg && cfg.alias && cfg.alias != this._id) {
					snap = _extends({}, snapshot, _defineProperty({}, this._id, snapshot[cfg.alias]));
					delete snap[cfg.alias];
					snapshot = snap;
				}
				snapshot = snapshot && (0, _utils.keyWalknGet)(snapshot, this._id) || this.takeSnapshotByKey(this._id);
	
				if (!snapshot) return;
	
				this._.snapshot = _extends({}, snapshot);
	
				snap = snapshot['/'];
				snapshot['/'] = _extends({}, snap);
				snap && Object.keys(snap).forEach(function (name) {
					if (name == "$parent") return;
	
					if (ctx[name]) {
	
						if (force && !_is2.default.fn(ctx[name])) ctx[name].destroy();
	
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
			key: "getSnapshotByKey",
			value: function getSnapshotByKey(key, local) {
				// only have the local snap
				if (this._.snapshot && key.startsWith(this._id)) {
					var obj = (0, _utils.keyWalknGet)(this._.snapshot, key.substr(this._id.length));
					return obj;
				} else return !local && this.parent && this.parent.getSnapshotByKey(key) || this.stores.$parent && this.stores.$parent.getSnapshotByKey(key);
			}
		}, {
			key: "getSnapshotByKeyExt",
			value: function getSnapshotByKeyExt(snapshot, key, local) {
				// only have the local snap
				if (snapshot) {
					var obj = (0, _utils.keyWalknGet)(snapshot, key);
					return obj;
				}
			}
		}, {
			key: "takeSnapshotByKey",
			value: function takeSnapshotByKey(key, local) {
				if (this._.snapshot && key.startsWith(this._id)) {
					var obj = (0, _utils.keyWalknGet)(this._.snapshot, key.substr(this._id.length));
					if (obj) {
						this.deleteSnapshotByKey(key, true);
					}
					return obj;
				} else return !local && this.parent && this.parent.takeSnapshotByKey(key) || this.stores.$parent && this.stores.$parent.takeSnapshotByKey(key);
			}
		}, {
			key: "deleteSnapshotByKey",
			value: function deleteSnapshotByKey(key, local) {
				if (this._.snapshot && key.startsWith(this._id)) {
					var obj = (0, _utils.keyWalknGet)(this._.snapshot, key.substr(this._id.length).replace(/^(.*[\>|\/])[^\>|\/]+$/ig, '$1'));
					if (obj) delete obj[key.replace(/^.*[\>|\/]([^\>|\/]+)$/ig, '$1')];
				}
				return !local && this.parent && this.parent.deleteSnapshotByKey(key) || this.stores.$parent && this.stores.$parent.deleteSnapshotByKey(key);
			}
		}, {
			key: "setState",
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
			key: "parseRef",
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
			key: "dispatch",
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
					if (!_is2.default.fn(_this14._._scope[id])) (_$_scope$id = _this14._._scope[id]).trigger.apply(_$_scope$id, [action].concat(argz));
				});
	
				if (bActs && bActs.test(action)) return this;
	
				this._._mixed.forEach(function (ctx) {
					return ctx.dispatch.apply(ctx, [action].concat(argz));
				});
				this.parent && (_parent2 = this.parent).dispatch.apply(_parent2, [action].concat(argz));
				return this;
			}
		}, {
			key: "trigger",
			value: function trigger() {
				this.dispatch.apply(this, arguments);
			}
	
			/**
	   * once('stable', cb)
	   * @param obj {React.Component|Store|function)
	   * @param key {string} optional key where to map the public state
	   */
	
		}, {
			key: "then",
			value: function then(cb) {
				var _this15 = this;
	
				if (!this._stable) return this.once('stable', function (e) {
					return _this15.then(cb);
				});
	
				return cb(this.data);
			}
		}, {
			key: "onceStableTree",
			value: function onceStableTree(cb) {
				var _this16 = this;
	
				if (this._.unStableChilds) return this.once('stableTree', function (e) {
					return _this16.onceStableTree(cb);
				});
				return cb(this.data);
			}
	
			/**
	   * Call retain on the scoped stores basing the given list
	   *
	   * @param stores
	   * @param reason
	   */
	
		}, {
			key: "retainStores",
			value: function retainStores() {
				var _this17 = this;
	
				var stores = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
				var reason = arguments[1];
	
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
			key: "disposeStores",
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
			key: "wait",
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
			key: "release",
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
			key: "propag",
			value: function propag() {
				var _this20 = this;
	
				this._.propagTM && clearTimeout(this._.propagTM);
				this._.propagTM = setTimeout(function (e) {
					_this20._.propagTM = null;
					_this20._propag();
				}, 2);
			}
		}, {
			key: "_propag",
			value: function _propag() {
				var _this21 = this;
	
				if (this._.followers.length) this._.followers.forEach(function (_ref4) {
					var obj = _ref4[0],
					    key = _ref4[1],
					    as = _ref4[2],
					    lastRevs = _ref4[3],
					    remaps = _ref4[3];
	
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
			key: "isStable",
			value: function isStable() {
				return this._stable;
			}
	
			/**
	   * is stable tree
	   * @returns bool
	   */
	
		}, {
			key: "isStableTree",
			value: function isStableTree() {
				return !this._.unStableChilds;
			}
	
			/**
	   * Register children
	   * @param scope
	   * @private
	   */
	
		}, {
			key: "_addChild",
			value: function _addChild(scope) {
				var _this22 = this;
	
				this._.childScopes.push(scope);
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
	
				!scope.isStable() && this._.unStableChilds++;
				scope._.unStableChilds && this._.unStableChilds++;
				this._.childScopesList.push(lists);
	
				if (!wasStable && this._.unStableChilds) this.emit("unstableTree", this);
	
				scope.on(lists);
			}
		}, {
			key: "_rmChild",
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
			key: "retain",
			value: function retain(reason) {
				this.__retains.all++;
				//console.log("retain", this._id, reason);
				if (reason) {
					this.__retains[reason] = this.__retains[reason] || 0;
					this.__retains[reason]++;
				}
			}
		}, {
			key: "dispose",
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
			key: "destroy",
			value: function destroy() {
				var _this24 = this;
	
				var ctx = this._._scope;
				//console.warn("destroy", this._id);
				this._getAllChilds().map(function (scope) {
					return scope.destroy();
				});
				for (var key in ctx) {
					if (!_is2.default.fn(ctx[key])) {
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
				delete allScopes[this._id];
				this.emit("destroy", this);
			}
		}]);
	
		return Scope;
	}(_Emitter2.default), _class.persistenceTm = 1, _class.Store = null, _class.scopeRef = function scopeRef(path) {
		this.path = path;
	}, _class.scopes = allScopes, _temp);
	
	
	Scope.isScope = function (obj) {
		return obj instanceof Scope;
	};
	
	Scope.isScopeClass = function (obj) {
		return Scope.isPrototypeOf(obj) || obj === Scope;
	};
	exports.default = Scope;
	module.exports = exports["default"];

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = require("is");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	module.exports = require("shortid");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /*
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
	
	var _is = __webpack_require__(2);
	
	var _is2 = _interopRequireDefault(_is);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Emitter = function () {
		function Emitter() {
			_classCallCheck(this, Emitter);
	
			this._events = {};
		}
	
		_createClass(Emitter, [{
			key: 'on',
			value: function on(evt, cb) {
				var _this = this;
	
				if (!_is2.default.string(evt) && evt) return Object.keys(evt).forEach(function (k) {
					return _this.on(k, evt[k]);
				});
	
				this._events[evt] = this._events[evt] || [];
				this._events[evt].push(cb);
			}
		}, {
			key: 'un',
			value: function un(evt, cb) {
				var _this2 = this;
	
				if (!_is2.default.string(evt) && evt) return Object.keys(evt).forEach(function (k) {
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
/* 5 */
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
/* 6 */
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
	
	var is = __webpack_require__(2),
	    Scope = __webpack_require__(1),
	    _require = __webpack_require__(5),
	    keyWalknSet = _require.keyWalknSet,
	    keyWalknGet = _require.keyWalknGet,
	    EventEmitter = __webpack_require__(4),
	    TaskSequencer = __webpack_require__(7),
	    shortid = __webpack_require__(3),
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
			    initialState = _static.state || _static.initialState || _static.defaultState;
	
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
	
			// register source stores
			if (is.array(_static.use)) {
				_this._use = [].concat(_toConsumableArray(watchs), _toConsumableArray((_static.use || []).map(function (key) {
					var ref = key.match(/^(\!?)([^\:]*)(?:\:(.*))?$/);
					if (ref[1]) {
						var ref2 = ref[2].split('.');
						_this._require.push(ref[3] || ref2[ref2.length - 1]); // require check value of the aliased
						// imported value
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
	
			/**
	   * Overridable method to choose if this store should be serialized,
	   * If not it will be applied normally when restoring
	   * @returns {boolean}
	   */
	
		}, {
			key: 'shouldSerialize',
			value: function shouldSerialize() {
				return true;
			}
		}, {
			key: 'hasDataChange',
			value: function hasDataChange(nDatas) {
				var _static = this.constructor,
				    r = void 0,
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
	
			/**
	   * Walk n get
	   * @param path
	   * @param i
	   * @param obj
	   * @returns {*|{}}
	   */
	
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
				    change = void 0,
				    changes = this._changesSW = this._changesSW || {};
				for (var k in pState) {
					if (!this.state || changes.hasOwnProperty(k) // todo
					&& pState[k] !== changes[k] || pState.hasOwnProperty(k) && pState[k] !== this.state[k]
					//||
					//(this.state[k] && pState[k] && (pState[k]._rev != this._revs[k]))// rev/hash update
					) {
						change = true;
						//this._revs[k] = pState[k] && pState[k]._rev || true;
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
				    change = void 0,
				    changes = this._changesSW = this._changesSW || {};
				for (var k in pState) {
					if (!this.state || pState.hasOwnProperty(k) && pState[k] !== this.state[k]
					//||
					//(this.state[k] && pState[k] && (pState[k]._rev != this._revs[k]))// rev/hash update
					) {
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
				var _this3 = this;
	
				if (!is.string(lists) && lists) Object.keys(lists).forEach(function (k) {
					return _get(Store.prototype.__proto__ || Object.getPrototypeOf(Store.prototype), 'on', _this3).call(_this3, k, lists[k]);
				});else _get(Store.prototype.__proto__ || Object.getPrototypeOf(Store.prototype), 'on', this).apply(this, arguments);
			}
		}, {
			key: 'removeListener',
			value: function removeListener(lists) {
				var _this4 = this;
	
				if (!is.string(lists) && lists) Object.keys(lists).forEach(function (k) {
					return _get(Store.prototype.__proto__ || Object.getPrototypeOf(Store.prototype), 'removeListener', _this4).call(_this4, k, lists[k]);
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
				var _this5 = this;
	
				var cfg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
				var output = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	
				var sId = cfg.parentAlias || this.scopeObj._id,
				    refsCount = 0,
				    refs = !cfg.norefs && is.array(this._use) && this._use.reduce(function (map, key) {
					var ref = _this5.$scope.parseRef(key),
					    store = _this5.$stores[ref.storeId];
					if (store && Store.isStore(store) && !store.scopeObj._.isLocalId) refsCount++, map[ref.alias] = ref.path;
	
					return map;
				}, {}),
				    state = this.state || {},
				    persistent = this.shouldSerialize();
	
				if (!persistent) {
					keyWalknSet(output, sId + '/' + this.name, {
						dataRefs: cfg.dataRefs,
						refs: refs
					});
					return output;
				}
	
				var stateKeys = Object.keys(state) || [],
				    stateRefs = stateKeys.map(function (k) {
					return state[k];
				}),
				    inRefsCount = 0,
				    dataRefs = cfg.dataRefs || {},
				    inRefs = !cfg.norefs && this.data && Object.keys(this.data).reduce(function (map, key) {
					var ref = stateRefs.indexOf(_this5.data[key]);
					if (ref != -1) inRefsCount++, map[key] = stateKeys[ref];
					return map;
				}, {}),
				    snap = {
					dataRefs: cfg.dataRefs,
					state: state && (cfg.norefs ? _extends({}, state) : Object.keys(state).reduce(function (h, k) {
						return !refs[k] && (h[k] = state[k]), h;
					}, {})),
					data: (this.data && this.data.__proto__ === objProto ? Object.keys(this.data).reduce(function (h, k) {
						if (!inRefs[k] && !dataRefs[k]) {
							h[k] = _this5.data[k];
							inRefsCount++;
						}
						return h;
					}, {}) : (is.bool(this.data) || is.number(this.data) || is.string(this.data)) && this.data) || undefined
	
				};
	
				refs && refsCount && (snap.refs = refs);
				inRefs && inRefsCount && (snap.inRefs = inRefs);
	
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
				var _this6 = this;
	
				snapshot = snapshot && keyWalknGet(snapshot, this.scopeObj._id + '/' + this.name) || this.$scope.takeSnapshotByKey(this.scopeObj._id + '/' + this.name);
	
				if (!snapshot) return;
	
				if (snapshot) {
	
					if (!this.isStable() && !immediate) this.then(function () {
						return restore(snapshot);
					});
	
					this.state = _extends({}, snapshot.state);
					snapshot.refs && Object.keys(snapshot.refs).forEach(function (key) {
						//todo
						_this6.state[key] = _this6.$scope.retrieve(snapshot.refs[key]);
					});
	
					if (snapshot.inRefs === true) {
						this.data = _extends({}, this.state);
					} else {
						this.data = snapshot.data;
						snapshot.inRefs && Object.keys(snapshot.inRefs).forEach(function (key) {
							//todo
							_this6.data[key] = _this6.state[snapshot.inRefs[key]];
							//else
							//    console.warn('not found : ', key, snap && snap.refs[ key ])
						});
					}
					if (snapshot.dataRefs) {
						this.data = this.data || {};
						Object.keys(snapshot.dataRefs).forEach(function (key) {
							//todo
							_this6.$scope.restoreRefPath(snapshot.dataRefs[key]);
							_this6.data[key] = _this6.$scope.retrieve(snapshot.dataRefs[key]);
						});
					}
				}
			})
	
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
	   * once('stable', cb)
	   * @param obj {React.Component|Store|function)
	   * @param key {string} optional key where to map the public state
	   */
	
		}, {
			key: 'then',
			value: function then(cb) {
				var _this7 = this;
	
				if (this._stable) return cb(this.data);
				this.once('stable', function (e) {
					return cb(_this7.data);
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
				var _this8 = this;
	
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
							_this8._destroyTM = null;
							//this.then(s => {
							!_this8.__retains.all && !_this8.dead && _this8.destroy();
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
	 * @todo
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
			if (Scope.isScopeClass(store)) scope._mount(name);
			if (Scope.isScope(store)) {
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
	
	Store.isStore = Scope.isStore = function (obj) {
		return obj instanceof Store;
	};
	Store.isStoreClass = Scope.isStoreClass = function (obj) {
		return Store.isPrototypeOf(obj) || obj === Store;
	};
	
	exports.default = Store;
	module.exports = exports['default'];

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _is = __webpack_require__(2);
	
	var _is2 = _interopRequireDefault(_is);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Minimal push sequencer, apply stores specific task in the right order
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

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYjFmMGFjMGQyYzJiMGRlNDk3YTEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9TY29wZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInNob3J0aWRcIiIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvRW1pdHRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1N0b3JlLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9UYXNrU2VxdWVuY2VyLmpzIl0sIm5hbWVzIjpbIiRnbG9iYWwiLCJ3aW5kb3ciLCJnbG9iYWwiLCJSUyIsIl9fX3Jlc2NvcGUiLCJjb25zb2xlIiwid2FybiIsIlNjb3BlIiwiU3RvcmUiLCJzY29wZVJlZiIsIm1hcCIsImtleSIsIl9fcHJvdG9fX3B1c2giLCJ0YXJnZXQiLCJpZCIsInBhcmVudCIsImZuIiwicHJvdG90eXBlIiwiXyIsImFsbFNjb3BlcyIsInNtIiwic3RhdGUiLCJfcmVmcyIsImFjdGlvbnMiLCJwYXRoIiwiYXBwbGllciIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwiY3BhdGgiLCJwdXNoIiwiRnVuY3Rpb24iLCJhcyIsInNjb3BlcyIsInNrZXkiLCJpcyIsImFycmF5Iiwic29ydCIsImEiLCJiIiwiZmlyc3RuYW1lIiwiam9pbiIsInN0b3Jlc01hcCIsInVwcGVyU2NvcGUiLCJzbmFwc2hvdCIsImRhdGEiLCJpbmNyZW1lbnRJZCIsInBlcnNpc3RlbmNlVG0iLCJhdXRvRGVzdHJveSIsInJvb3RFbWl0dGVyIiwiYm91bmRlZEFjdGlvbnMiLCJrZXlQSUQiLCJfaWQiLCJzaG9ydGlkIiwiZ2VuZXJhdGUiLCJiYXNlSWQiLCJpc0xvY2FsSWQiLCJyZWdpc3RlciIsImkiLCJfcmV2Iiwic3RvcmVzIiwiX2F1dG9EZXN0cm95IiwiY29uc3RydWN0b3IiLCJkZWFkIiwiRXJyb3IiLCJzb3VyY2VzIiwiY2hpbGRTY29wZXMiLCJjaGlsZFNjb3Blc0xpc3QiLCJ1blN0YWJsZUNoaWxkcyIsInNlZW5DaGlsZHMiLCJfbGlzdGVuaW5nIiwiX3Njb3BlIiwiX21peGVkIiwiX21peGVkTGlzdCIsImZvbGxvd2VycyIsIl9fcmV0YWlucyIsImFsbCIsIl9fbG9ja3MiLCJfYm91bmRlZEFjdGlvbnMiLCJ0ZXN0IiwiaW5jbHVkZXMiLCJiaW5kIiwicmV0YWluIiwiX3N0YWJsZSIsIndhaXQiLCJvbiIsIl9wYXJlbnRMaXN0IiwicmVsZWFzZSIsIl9wcm9wYWciLCJfYWRkQ2hpbGQiLCJyZXN0b3JlIiwic2V0VGltZW91dCIsImRpc3Bvc2UiLCJzdG9yZUlkTGlzdCIsIl9tb3VudCIsInN0b3JlSWQiLCJhcmd1bWVudHMiLCJyZWYiLCJwYXJzZVJlZiIsInJlZHVjZVJpZ2h0IiwibW91bnRlZCIsImN0eCIsInN0b3JlIiwidGFza1F1ZXVlIiwiaXNTdG9yZUNsYXNzIiwibmFtZSIsImxlbmd0aCIsInNoaWZ0IiwiaXNTY29wZUNsYXNzIiwiJHBhcmVudCIsIm1vdW50Iiwic2xpY2UiLCJpc1N0b3JlIiwidW5kZWZpbmVkIiwic2V0U3RhdGUiLCJfd2F0Y2hTdG9yZSIsInJlbGluayIsInNpbmdsZXRvbiIsInNyY0N0eCIsInRhcmdldEN0eCIsImV4dGVybmFsIiwiZm9yY2UiLCJob3RSZWxvYWRpbmciLCJpbmZvIiwidG1wIiwibmV4dFN0YXRlIiwiZGVzdHJveSIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsImdldCIsInNldCIsInYiLCJhY3RpdmVBY3Rpb25zIiwiaXNTY29wZSIsImFjdCIsImhhc093blByb3BlcnR5IiwiX190YXJnZXRTdG9yZXMiLCJkaXNwYXRjaCIsImlzU3RhYmxlIiwicHJvcGFnIiwibGlzdHMiLCJfX29yaWdpbiIsInNldEluaXRpYWwiLCJyZXZNYXAiLCJsYXN0UmV2cyIsInJlZktleXMiLCJzdHJpbmciLCJyZWR1Y2UiLCJyZXZzIiwicmV2IiwicmVmcyIsInJldGFpblN0b3JlcyIsImdldFVwZGF0ZXMiLCJkaXNwb3NlU3RvcmVzIiwic3BsaWNlIiwicmVmTGlzdCIsIm1peGVkQ1dVbm1vdW50IiwidW5Nb3VudEtleSIsImlzUmVhY3RDb21wb25lbnQiLCJ1bkJpbmQiLCJhbGlhcyIsInJldHJpZXZlIiwic3BsaXQiLCJvYmoiLCJjU2NvcGUiLCJyZXRyaWV2ZVN0b3JlIiwic3RvcmVzUmV2TWFwIiwibG9jYWwiLCJ1cGRhdGVkIiwiZ2V0U3RvcmVzUmV2cyIsIl9nZXRSZXZNYXAiLCJvdXRwdXQiLCJjaGlsZHMiLCJfZ2V0QWxsQ2hpbGRzIiwiY2ZnIiwicGFyZW50QWxpYXMiLCJzaWQiLCJzZXJpYWxpemVfZXgiLCJleGNsdWRlIiwid2l0aENoaWxkcyIsIndpdGhNaXhlZCIsIm5vcmVmcyIsInNlcmlhbGl6ZSIsIndpdGhDaGlsZCIsIndpdGhQYXJlbnRzIiwiaCIsImsiLCJib29sIiwic25hcCIsInRha2VTbmFwc2hvdEJ5S2V5Iiwic3RhcnRzV2l0aCIsInN1YnN0ciIsImdldFNuYXBzaG90QnlLZXkiLCJkZWxldGVTbmFwc2hvdEJ5S2V5IiwicmVwbGFjZSIsInBTdGF0ZSIsIl9yZWYiLCJhY3Rpb24iLCJhcmd6Iiwic3RhY2siLCJiQWN0cyIsInRyaWdnZXIiLCJjYiIsIm9uY2UiLCJ0aGVuIiwib25jZVN0YWJsZVRyZWUiLCJyZWFzb24iLCJlbWl0IiwiZXJyb3IiLCJzdGFiaWxpemVyVE0iLCJjbGVhclRpbWVvdXQiLCJwcm9wYWdUTSIsInJlbWFwcyIsInNjb3BlIiwid2FzU3RhYmxlIiwiaW5kZXhPZiIsInVuIiwiZGVzdHJveVRNIiwicmVtb3ZlTGlzdGVuZXIiLCJmb2xsb3dlciIsIl9ybUNoaWxkIiwiRXZlbnRFbWl0dGVyIiwiaXNQcm90b3R5cGVPZiIsIkVtaXR0ZXIiLCJfZXZlbnRzIiwiZXZ0Iiwid2Fsa25TZXQiLCJ3YWxrbkdldCIsImtleVdhbGtuU2V0Iiwia2V5V2Fsa25HZXQiLCJyZXF1aXJlIiwidmFsdWUiLCJpc0tleSIsImZpbHRlciIsIlRhc2tTZXF1ZW5jZXIiLCJvYmpQcm90byIsImdldFByb3RvdHlwZU9mIiwiX3N0YXRpYyIsImdldFNjb3BlIiwic3RhdGljU2NvcGUiLCJ3YXRjaHMiLCJ1c2UiLCJhcHBseSIsImluaXRpYWxTdGF0ZSIsImRlZmF1bHRTdGF0ZSIsIl91aWQiLCJfb25TdGFiaWxpemUiLCJfcGVyc2lzdGVuY2VUbSIsIl9jZmciLCJzY29wZU9iaiIsIiRzY29wZSIsIiRzdG9yZXMiLCIkYWN0aW9ucyIsIiRkaXNwYXRjaCIsIl9yZXZzIiwiX3JlcXVpcmUiLCJfc291cmNlcyIsIl91c2UiLCJtYXRjaCIsInJlZjIiLCJfZm9sbG93ZXJzIiwiX2NoYW5nZXNTVyIsIl9hZnRlckNvbnN0cnVjdG9yIiwiaW5pdGlhbERhdGEiLCJhcHBsaWVkIiwic2hvdWxkQXBwbHkiLCJtYW5hZ2VkIiwibkRhdGFzIiwiciIsImNEYXRhcyIsImlzQ29tcGxldGUiLCJmb2xsb3ciLCJjYWxsIiwiY2hhbmdlcyIsIl9fcHJvdG9fXyIsIl9zdGFiaWxpemVyIiwicHVzaFRhc2siLCJucyIsImhhc0RhdGFDaGFuZ2UiLCJzdGFibGUiLCJfbmV4dFN0YXRlIiwibmV4dERhdGEiLCJzeW5jIiwiY2hhbmdlIiwicHVzaFN0YXRlIiwic3RhYmlsaXplIiwic0lkIiwicmVmc0NvdW50IiwicGVyc2lzdGVudCIsInNob3VsZFNlcmlhbGl6ZSIsImRhdGFSZWZzIiwic3RhdGVLZXlzIiwic3RhdGVSZWZzIiwiaW5SZWZzQ291bnQiLCJpblJlZnMiLCJudW1iZXIiLCJpbW1lZGlhdGUiLCJyZXN0b3JlUmVmUGF0aCIsInByZXZpb3VzIiwibWUiLCJzaG91bGRQcm9wYWciLCJfZGVzdHJveVRNIiwicmVtb3ZlQWxsTGlzdGVuZXJzIiwiY1N0b3JlIiwib3JpZ2luIiwidGFyZ2V0UmV2cyIsInRhcmdldFNjb3BlIiwiaW5pdGlhbE91dHB1dHMiLCJfa2V5IiwiZGVmYXVsdE5hbWUiLCJvIiwiY3VyV2VpZ2h0IiwibWF4V2VpZ2h0IiwibWluV2VpZ2h0IiwidGFza0NvdW50IiwiZGVTeW5jIiwiZGVTeW5jTWF4VGFza3MiLCJ0YXNrIiwiaXNSdW5uaW5nIiwiZXJyb3JDYXRjaGVyIiwibGFzdEVycm9yIiwiZGlzYWJsZSIsImhhbmRsZUVycm9yIiwicnVuTm93IiwiZW5hYmxlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInByb2Nlc3MiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicnVuIiwiZnJvbSIsIkRhdGUiLCJub3ciLCJ3ZWlnaHQiLCJNYXRoIiwibWF4IiwibWluIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3RCQTs7OztBQUNBOzs7Ozs7QUFqQkE7Ozs7Ozs7Ozs7Ozs7O0FBY0EsS0FBSUEsVUFBVyxPQUFPQyxNQUFQLEtBQWtCLFdBQW5CLEdBQWtDQSxNQUFsQyxHQUEyQ0MsTUFBekQ7O0FBS0EsS0FBTUMsS0FBS0gsUUFBUUksVUFBUixJQUFzQixFQUFqQzs7QUFFQSxLQUFLSixRQUFRSSxVQUFiLEVBQTBCO0FBQ3pCQyxXQUFRQyxJQUFSLENBQWEsK0RBQWI7QUFDQSxFQUZELE1BR0s7O0FBRUpOLFdBQVFJLFVBQVIsR0FBcUJELEVBQXJCO0FBQ0FJLG1CQUFNQyxLQUFOLEdBQXFCQSxlQUFyQjtBQUNBTCxNQUFHSSxLQUFILEdBQXFCQSxlQUFyQjtBQUNBSixNQUFHSyxLQUFILEdBQXFCQSxlQUFyQjtBQUNBTCxNQUFHTSxRQUFILEdBQ0MsU0FBU0EsUUFBVCxDQUFtQkMsR0FBbkIsRUFBd0JDLEdBQXhC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O0FBQ0RBLFlBQU83TSxTQUFQO0FBQ0ErTSxrQkFBYUUsT0FBYjs7QUFFQUgsaUJBQVksS0FBWjtBQUNBLFNBQUtKLFNBQUwsRUFBaUI7QUFDYmhPLG9CQUFXeU8sTUFBWDtBQUNIO0FBQ0o7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7bUJBRWU7QUFDWC9DLGFBRFcsb0JBQ0RqSCxHQURDLEVBQ0lwSixFQURKLEVBQ1F1TCxJQURSLEVBQ2U7QUFDdEI7Ozs7Ozs7Ozs7O0FBV0EsYUFBSXNJLFNBQVN6SyxJQUFJNkYsUUFBSixJQUFnQjdGLElBQUk2RixRQUFKLENBQWF2SixNQUE3QixJQUF1QyxDQUFwRDtBQUFBLGFBQ0k4RixRQUFTakcsVUFBV3NPLE1BQVgsSUFDTHRPLFVBQVdzTyxNQUFYLEtBQXVCLEVBRi9COztBQUlBcEIscUJBQVlxQixLQUFLQyxHQUFMLENBQVN0QixTQUFULEVBQW9Cb0IsTUFBcEIsQ0FBWjtBQUNBckIscUJBQVlzQixLQUFLRSxHQUFMLENBQVN4QixTQUFULEVBQW9CcUIsTUFBcEIsQ0FBWjtBQUNBbEI7O0FBRUE7QUFDQW5ILGVBQU0xSyxJQUFOLENBQVcsQ0FBRXNJLEdBQUYsRUFBT3BKLEVBQVAsRUFBV3VMLElBQVgsQ0FBWDtBQUNBNUcsb0JBQVd5TyxNQUFYLEVBQW1CLENBQW5CO0FBQ0EsZ0JBQU81SCxNQUFNOUYsTUFBYjtBQUNIO0FBekJVLEUiLCJmaWxlIjoiLi4vLi4vZGlzdC9SZVNjb3BlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGIxZjBhYzBkMmMyYjBkZTQ5N2ExIiwiLypcbiAqIFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuICogQ29weXJpZ2h0IChjKSAyMDE5LiBXaXNlIFdpbGQgV2ViXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSDigJxTb2Z0d2FyZeKAnSksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCDigJxBUyBJU+KAnSwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4gKlxuICogIEBhdXRob3IgOiBOYXRoYW5hZWwgQnJhdW5cbiAqICBAY29udGFjdCA6IG44dHouanNAZ21haWwuY29tXG4gKi9cblxubGV0ICRnbG9iYWwgPSAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpID8gd2luZG93IDogZ2xvYmFsO1xuXG5pbXBvcnQgU2NvcGUgZnJvbSBcIi4vU2NvcGVcIjtcbmltcG9ydCBTdG9yZSBmcm9tIFwiLi9TdG9yZVwiO1xuXG5jb25zdCBSUyA9ICRnbG9iYWwuX19fcmVzY29wZSB8fCB7fTtcblxuaWYgKCAkZ2xvYmFsLl9fX3Jlc2NvcGUgKSB7XG5cdGNvbnNvbGUud2FybihcIlJlU2NvcGUgaXMgZGVmaW5lZCBtdWx0aXBsZSB0aW1lcyAhISBcXG5DaGVjayB5b3UncmUgcGFja2FnaW5nXCIpXG59XG5lbHNlIHtcblx0XG5cdCRnbG9iYWwuX19fcmVzY29wZSA9IFJTO1xuXHRTY29wZS5TdG9yZSAgICAgICAgPSBTdG9yZTtcblx0UlMuU2NvcGUgICAgICAgICAgID0gU2NvcGU7XG5cdFJTLlN0b3JlICAgICAgICAgICA9IFN0b3JlO1xuXHRSUy5zY29wZVJlZiAgICAgICAgPVxuXHRcdGZ1bmN0aW9uIHNjb3BlUmVmKCBtYXAsIGtleSApIHtcblx0XHRcdG1hcFtrZXldID0gbmV3IFNjb3BlLnNjb3BlUmVmKG1hcFtrZXldKTtcblx0XHRcdHJldHVybiBtYXA7XG5cdFx0fTtcblx0XG59XG5leHBvcnQgZGVmYXVsdCBSUztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXguanMiLCIvKlxuICogVGhlIE1JVCBMaWNlbnNlIChNSVQpXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTkuIFdpc2UgV2lsZCBXZWJcbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIOKAnFNvZnR3YXJl4oCdKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIOKAnEFTIElT4oCdLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiAqXG4gKiAgQGF1dGhvciA6IE5hdGhhbmFlbCBCcmF1blxuICogIEBjb250YWN0IDogbjh0ei5qc0BnbWFpbC5jb21cbiAqL1xuXG5pbXBvcnQgaXMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tIFwiaXNcIjtcbmltcG9ydCBzaG9ydGlkICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gXCJzaG9ydGlkXCI7XG5pbXBvcnQgRXZlbnRFbWl0dGVyICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tIFwiLi91dGlscy9FbWl0dGVyXCI7XG5pbXBvcnQge3dhbGtuU2V0LCB3YWxrbkdldCwga2V5V2Fsa25TZXQsIGtleVdhbGtuR2V0fSBmcm9tICcuL3V0aWxzL3V0aWxzJztcblxuY29uc3QgX19wcm90b19fcHVzaCA9ICggdGFyZ2V0LCBpZCwgcGFyZW50ICkgPT4ge1xuXHQgICAgICBsZXQgZm4gICAgICAgPSBmdW5jdGlvbiAoKSB7XG5cdCAgICAgIH07XG5cdCAgICAgIGZuLnByb3RvdHlwZSA9IHBhcmVudCA/IG5ldyBwYXJlbnQuX1tpZF0oKSA6IHRhcmdldFtpZF0gfHwge307XG5cdCAgICAgIHRhcmdldFtpZF0gICA9IG5ldyBmbigpO1xuXHQgICAgICB0YXJnZXQuX1tpZF0gPSBmbjtcbiAgICAgIH0sXG4gICAgICBhbGxTY29wZXMgICAgID0ge307XG5cblxuLyoqXG4gKiBCYXNlIFNjb3BlIG9iamVjdFxuICovXG5jbGFzcyBTY29wZSBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG5cdFxuXHRzdGF0aWMgcGVyc2lzdGVuY2VUbSA9IDE7Ly8gaWYgPiAwLCB3aWxsIHdhaXQgJ3BlcnNpc3RlbmNlVG0nIG1zIGJlZm9yZSBkZXN0cm95IHdoZW4gZGlzcG9zZSByZWFjaCAwXG5cdHN0YXRpYyBTdG9yZSAgICAgICAgID0gbnVsbDtcblx0c3RhdGljIHNjb3BlUmVmICAgICAgPSBmdW5jdGlvbiBzY29wZVJlZiggcGF0aCApIHtcblx0XHR0aGlzLnBhdGggPSBwYXRoO1xuXHR9O1xuXHRzdGF0aWMgc2NvcGVzICAgICAgICA9IGFsbFNjb3BlczsvLyBhbGwgYWN0aXZlIHNjb3Blc1xuXHQvKipcblx0ICogZ2V0IGEgcGFyc2VkIHJlZmVyZW5jZSBsaXN0IGZyb20gc3RhdGVNYXBcblx0ICogQHBhcmFtIF9yZWZcblx0ICogQHJldHVybnMge3tzdG9yZUlkLCBwYXRoLCBhbGlhczogKiwgcmVmOiAqfX1cblx0ICovXG5cdHN0YXRpYyBzdGF0ZU1hcFRvUmVmTGlzdCggc20sIHN0YXRlID0ge30sIF9yZWZzID0gW10sIGFjdGlvbnMgPSB7fSwgcGF0aCA9IFwiXCIgKSB7XG5cdFx0bGV0IGFwcGxpZXI7XG5cdFx0T2JqZWN0LmtleXMoc20pLmZvckVhY2goXG5cdFx0XHRrZXkgPT4ge1xuXHRcdFx0XHRsZXQgY3BhdGggPSBwYXRoID8gcGF0aCArICcuJyArIGtleSA6IGtleTtcblx0XHRcdFx0XG5cdFx0XHRcdHNtW2tleV0gaW5zdGFuY2VvZiBTY29wZS5zY29wZVJlZlxuXHRcdFx0XHQ/IF9yZWZzLnB1c2goc21ba2V5XS5wYXRoICsgJzonICsgY3BhdGgpXG5cdFx0XHRcdDogKHNtW2tleV0gJiYgc21ba2V5XSBpbnN0YW5jZW9mIEZ1bmN0aW9uKVxuXHRcdFx0XHQgID8ga2V5ID09IFwiJGFwcGx5XCJcblx0XHRcdFx0ICAgID8gYXBwbGllciA9IHNtW2tleV1cblx0XHRcdFx0ICAgIDogYWN0aW9uc1trZXldID0gc21ba2V5XVxuXHRcdFx0XHQgIDogKHNtW2tleV0gJiYgc21ba2V5XS5wcm90b3R5cGUgaW5zdGFuY2VvZiBTY29wZS5TdG9yZSlcblx0XHRcdFx0ICAgID8gX3JlZnMucHVzaChzbVtrZXldLmFzKGNwYXRoKSlcblx0XHRcdFx0ICAgIDogc3RhdGVbY3BhdGhdID0gc21ba2V5XVxuXHRcdFx0XHQvLzogdGhpcy5zdGF0ZU1hcFRvUmVmTGlzdChzbVtrZXldLCBfcmVmcywgcGF0aCArICcuJyArIGtleSlcblx0XHRcdH1cblx0XHQpXG5cdFx0cmV0dXJuIGFwcGxpZXI7XG5cdH1cblx0XG5cdHN0YXRpYyBnZXRTY29wZSggc2NvcGVzICkge1xuXHRcdGxldCBza2V5ID0gaXMuYXJyYXkoc2NvcGVzKSA/IHNjb3Blcy5zb3J0KCggYSwgYiApID0+IHtcblx0XHRcdGlmICggYS5maXJzdG5hbWUgPCBiLmZpcnN0bmFtZSApIHJldHVybiAtMTtcblx0XHRcdGlmICggYS5maXJzdG5hbWUgPiBiLmZpcnN0bmFtZSApIHJldHVybiAxO1xuXHRcdFx0cmV0dXJuIDA7XG5cdFx0fSkuam9pbignKycpIDogc2NvcGVzO1xuXHRcdHJldHVybiBhbGxTY29wZXNbc2tleV0gPSBhbGxTY29wZXNbc2tleV0gfHwgbmV3IFNjb3BlKHt9LCB7IGlkOiBza2V5IH0pO1xuXHR9O1xuXHRcblx0XG5cdC8qKlxuXHQgKiBJbml0IGEgUmVTY29wZSBzY29wZVxuXHQgKlxuXHQgKiBAcGFyYW0gc3RvcmVzTWFwIHtPYmplY3R9IE9iamVjdCB3aXRoIHRoZSBpbml0aWFsIHN0b3JlcyBkZWZpbml0aW9uIC8gaW5zdGFuY2VzXG5cdCAqIEBwYXJhbSBjb25maWcge09iamVjdH0gU2NvcGUgY29uZmlnXG5cdCAqIHtcblx0ICogICAgIHBhcmVudCB7c2NvcGV9IEBvcHRpb25hbCBwYXJlbnQgc2NvcGVcblx0ICpcblx0ICogICAgIGlkIHtzdHJpbmd9IEBvcHRpb25hbCBpZCAoIGlmIHRoaXMgaWQgZXhpc3Qgc3RvcmVzTWFwIHdpbGwgYmUgbWVyZ2Ugb24gdGhlICdpZCdcblx0ICogICAgIHNjb3BlKVxuXHQgKiAgICAga2V5IHtzdHJpbmd9IEBvcHRpb25hbCBrZXkgb2YgdGhlIHNjb3BlICggaWYgbm8gaWQgaXMgc2V0LCB0aGUgc2NvcGUgaWQgd2lsbCBiZSAocGFyZW50LmlkKyc+JytrZXkpXG5cdCAqICAgICBpbmNyZW1lbnRJZCB7Ym9vbH0gQG9wdGlvbmFsIHRydWUgdG8gYWRkIGEgc3VmZml4IGlkLCBpZiB0aGUgcHJvdmlkZWQga2V5IG9yIGlkIGdsb2JhbGx5IGV4aXN0XG5cdCAqXG5cdCAqICAgICBzdGF0ZSB7T2JqZWN0fSBAb3B0aW9uYWwgaW5pdGlhbCBzdGF0ZSBieSBzdG9yZSBhbGlhc1xuXHQgKiAgICAgZGF0YSB7T2JqZWN0fSBAb3B0aW9uYWwgaW5pdGlhbCBkYXRhIGJ5IHN0b3JlIGFsaWFzXG5cdCAqXG5cdCAqICAgICByb290RW1pdHRlciB7Ym9vbH0gQG9wdGlvbmFsIHRydWUgdG8gbm90IGJlaW5nIGRlc3RhYmlsaXplZCBieSBwYXJlbnRcblx0ICogICAgIGJvdW5kZWRBY3Rpb25zIHthcnJheSB8IHJlZ2V4cH0gQG9wdGlvbmFsIGxpc3Qgb3IgcmVnZXhwIG9mIGFjdGlvbnMgbm90IHByb3BhZ2F0ZWQgdG8gdGhlIHBhcmVudFxuXHQgKiAgICAgYXV0b0Rlc3Ryb3kge3RydWUgfCBmYWxzZSB8ICdpbmhlcml0J31cblx0ICogICAgIHBlcnNpc3RlbmNlVG0ge251bWJlcikgaWYgPiAwLCB3aWxsIHdhaXQgJ3BlcnNpc3RlbmNlVG0nIG1zIGJlZm9yZSBkZXN0cm95IHdoZW5cblx0ICogICAgIGRpc3Bvc2UgcmVhY2ggMCBhdXRvRGVzdHJveSAge2Jvb2x9IHdpbGwgdHJpZ2dlciByZXRhaW4gJiBkaXNwb3NlIGFmdGVyIHN0YXJ0XG5cdCAqICB9XG5cdCAqIEByZXR1cm5zIHtTY29wZX1cblx0ICovXG5cdGNvbnN0cnVjdG9yKCBzdG9yZXNNYXAsIHsgcGFyZW50LCB1cHBlclNjb3BlLCBrZXksIGlkLCBzbmFwc2hvdCwgc3RhdGUsIGRhdGEsIGluY3JlbWVudElkID0gISFrZXksIHBlcnNpc3RlbmNlVG0sIGF1dG9EZXN0cm95LCByb290RW1pdHRlciwgYm91bmRlZEFjdGlvbnMgfSA9IHt9ICkge1xuXHRcdHN1cGVyKCk7XG5cdFx0bGV0IF8gPSB7XG5cdFx0XHRrZXlQSUQ6ICh1cHBlclNjb3BlICYmIHVwcGVyU2NvcGUuX2lkIHx8IHBhcmVudCAmJiBwYXJlbnQuX2lkIHx8IHNob3J0aWQuZ2VuZXJhdGUoKSksXG5cdFx0XHRrZXksXG5cdFx0XHRpbmNyZW1lbnRJZCxcblx0XHRcdGJhc2VJZDogaWRcblx0XHR9O1xuXHRcdFxuXHRcdFxuXHRcdC8vIGdlbmVyYXRlIC8gc2V0IHRoaXMgc2NvcGUgaWRcblx0XHRpZCA9IGlkIHx8IGtleSAmJiAoXy5rZXlQSUQgKyAnPicgKyBrZXkpO1xuXHRcdFxuXHRcdF8uaXNMb2NhbElkID0gIWlkO1xuXHRcdFxuXHRcdGlkID0gaWQgfHwgKFwiX19fX19cIiArIHNob3J0aWQuZ2VuZXJhdGUoKSk7XG5cdFx0XG5cdFx0aWYgKCBhbGxTY29wZXNbaWRdICYmICFpbmNyZW1lbnRJZCApIHsvLyBvdmVyd3JpdGUgZXhpc3Rpbmcgc2NvcGVcblx0XHRcdHRoaXMuX2lkID0gaWQ7XG5cdFx0XHRhbGxTY29wZXNbaWRdLnJlZ2lzdGVyKHN0b3Jlc01hcCk7XG5cdFx0XHRyZXR1cm4gYWxsU2NvcGVzW2lkXVxuXHRcdH1cblx0XHRlbHNlIGlmICggYWxsU2NvcGVzW2lkXSAmJiBpbmNyZW1lbnRJZCApIHsvLyBnZW5lcmF0ZSBrZXkgaWRcblx0XHRcdGxldCBpID0gLTE7XG5cdFx0XHR3aGlsZSAoIGFsbFNjb3Blc1tpZCArICdbJyArICgrK2kpICsgJ10nXSApIDtcblx0XHRcdGlkID0gaWQgKyAnWycgKyBpICsgJ10nO1xuXHRcdH1cblx0XHRcblx0XHQvLyByZWdpc3RlciB0aGlzIHNjb3BlIGluIHRoZSBzdGF0aWMgU2NvcGUuc2NvcGVzXG5cdFx0YWxsU2NvcGVzW2lkXSA9IHRoaXM7XG5cdFx0XG5cdFx0dGhpcy5faWQgID0gaWQ7XG5cdFx0dGhpcy5fcmV2ID0gMDtcblx0XHRcblx0XHR0aGlzLl8gPSBfO1xuXHRcdFxuXHRcdHRoaXMuYWN0aW9ucyA9IHt9O1xuXHRcdHRoaXMuc3RvcmVzICA9IHt9O1xuXHRcdHRoaXMuc3RhdGUgICA9IHt9O1xuXHRcdHRoaXMuZGF0YSAgICA9IHt9O1xuXHRcdFxuXHRcdHRoaXMucGFyZW50ID0gcGFyZW50O1xuXHRcdFxuXHRcdGlmICggYXV0b0Rlc3Ryb3kgPT0gJ2luaGVyaXQnIClcblx0XHRcdGF1dG9EZXN0cm95ID0gcGFyZW50ICYmIHBhcmVudC5fYXV0b0Rlc3Ryb3k7XG5cdFx0XG5cdFx0dGhpcy5fYXV0b0Rlc3Ryb3kgPSBhdXRvRGVzdHJveTtcblx0XHRfLnBlcnNpc3RlbmNlVG0gICA9IHBlcnNpc3RlbmNlVG0gfHwgdGhpcy5jb25zdHJ1Y3Rvci5wZXJzaXN0ZW5jZVRtO1xuXHRcdFxuXHRcdGlmICggcGFyZW50ICYmIHBhcmVudC5kZWFkIClcblx0XHRcdHRocm93IG5ldyBFcnJvcihcIkNhbid0IHVzZSBhIGRlYWQgc2NvcGUgYXMgcGFyZW50ICFcIik7XG5cdFx0XG5cdFx0X19wcm90b19fcHVzaCh0aGlzLCAnYWN0aW9ucycsIHBhcmVudCk7XG5cdFx0X19wcm90b19fcHVzaCh0aGlzLCAnc3RvcmVzJywgcGFyZW50KTtcblx0XHRfX3Byb3RvX19wdXNoKHRoaXMsICdzdGF0ZScsIHBhcmVudCk7XG5cdFx0X19wcm90b19fcHVzaCh0aGlzLCAnZGF0YScsIHBhcmVudCk7XG5cdFx0XG5cdFx0dGhpcy5zb3VyY2VzICAgICAgPSBbXTtcblx0XHRfLmNoaWxkU2NvcGVzICAgICA9IFtdO1xuXHRcdF8uY2hpbGRTY29wZXNMaXN0ID0gW107XG5cdFx0Xy51blN0YWJsZUNoaWxkcyAgPSAwO1xuXHRcdF8uc2VlbkNoaWxkcyAgICAgID0gMDtcblx0XHRfLl9saXN0ZW5pbmcgICAgICA9IHt9O1xuXHRcdF8uX3Njb3BlICAgICAgICAgID0ge307XG5cdFx0Xy5fbWl4ZWQgICAgICAgICAgPSBbXTtcblx0XHRfLl9taXhlZExpc3QgICAgICA9IFtdO1xuXHRcdF8uZm9sbG93ZXJzICAgICAgID0gW107XG5cdFx0XG5cdFx0dGhpcy5fX3JldGFpbnMgPSB7IGFsbDogMCB9O1xuXHRcdHRoaXMuX19sb2NrcyAgID0geyBhbGw6IDEgfTtcblx0XHRcblx0XHQvLyB0b2RvXG5cdFx0Xy5fYm91bmRlZEFjdGlvbnMgPSBpcy5hcnJheShib3VuZGVkQWN0aW9ucylcblx0XHQgICAgICAgICAgICAgICAgICAgID8geyB0ZXN0OiBib3VuZGVkQWN0aW9ucy5pbmNsdWRlcy5iaW5kKGJvdW5kZWRBY3Rpb25zKSB9XG5cdFx0ICAgICAgICAgICAgICAgICAgICA6IGJvdW5kZWRBY3Rpb25zO1xuXHRcdFxuXHRcdC8vIHJlZ2lzdGVyIHRvIHRoZSBwYXJlbnQgc2NvcGVcblx0XHRpZiAoIHBhcmVudCApIHtcblx0XHRcdHBhcmVudC5yZXRhaW4oXCJpc015UGFyZW50XCIpO1xuXHRcdFx0aWYgKCAhcm9vdEVtaXR0ZXIgKSB7XG5cdFx0XHRcdCFwYXJlbnQuX3N0YWJsZSAmJiB0aGlzLndhaXQoXCJ3YWl0aW5nUGFyZW50XCIpO1xuXHRcdFx0XHRwYXJlbnQub24oXy5fcGFyZW50TGlzdCA9IHtcblx0XHRcdFx0XHQnc3RhYmxlJyAgOiBzID0+IHRoaXMucmVsZWFzZShcIndhaXRpbmdQYXJlbnRcIiksXG5cdFx0XHRcdFx0J3Vuc3RhYmxlJzogcyA9PiB0aGlzLndhaXQoXCJ3YWl0aW5nUGFyZW50XCIpLFxuXHRcdFx0XHRcdCd1cGRhdGUnICA6IHMgPT4gdGhpcy5fcHJvcGFnKClcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0cGFyZW50Lm9uKF8uX3BhcmVudExpc3QgPSB7XG5cdFx0XHRcdFx0J3VwZGF0ZSc6IHMgPT4gdGhpcy5fcHJvcGFnKClcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0XHQvLyB0aGlzLnJlZ2lzdGVyKHBhcmVudC5fX3Njb3BlLCBzdGF0ZSwgZGF0YSk7XG5cdFx0fVxuXHRcdFxuXHRcdC8vIHJlZ2lzdGVyIHRoaXMgc2NvcGUgc3RvcmVzXG5cdFx0dGhpcy5yZWdpc3RlcihzdG9yZXNNYXAsIHN0YXRlLCBkYXRhKTtcblx0XHR0aGlzLl9fbG9ja3MuYWxsLS07XG5cdFx0dGhpcy5fc3RhYmxlID0gIXRoaXMuX19sb2Nrcy5hbGw7XG5cdFx0XG5cdFx0aWYgKCBwYXJlbnQgKSB7XG5cdFx0XHRwYXJlbnQuX2FkZENoaWxkKHRoaXMpO1xuXHRcdH1cblx0XHRcblx0XHRcblx0XHQvLyByZXN0b3JlIHNuYXBzaG90c1xuXHRcdHRoaXMucmVzdG9yZShzbmFwc2hvdCk7XG5cdFx0XG5cdFx0XG5cdFx0aWYgKCBhdXRvRGVzdHJveSApXG5cdFx0XHRzZXRUaW1lb3V0KFxuXHRcdFx0XHR0bSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5yZXRhaW4oXCJhdXRvRGVzdHJveVwiKTtcblx0XHRcdFx0XHR0aGlzLmRpc3Bvc2UoXCJhdXRvRGVzdHJveVwiKTtcblx0XHRcdFx0fVxuXHRcdFx0KVxuXHRcdFxuXHR9XG5cdFxuXHQvKipcblx0ICpcblx0ICogTW91bnQgdGhlIHN0b3JlcyBpbiBzdG9yZXNMaXN0LCBpbiB0aGlzIHNjb3BlIG9yIGluIGl0cyBwYXJlbnRzIG9yIG1peGVkIHNjb3Blc1xuXHQgKlxuXHQgKiBAcGFyYW0gc3RvcmVJZExpc3Qge3N0cmluZ3xzdG9yZVJlZn0gU3RvcmUgbmFtZSwgQXJyYXkgb2YgU3RvcmUgbmFtZXMsIG9yIFJlc2NvcGVcblx0ICogICAgIHN0b3JlIHJlZiBmcm9tIFN0b3JlOjphcyBvciBTdG9yZTphc1xuXHQgKiBAcGFyYW0gc3RhdGVcblx0ICogQHBhcmFtIGRhdGFcblx0ICogQHJldHVybnMge1Njb3BlfVxuXHQgKi9cblx0bW91bnQoIHN0b3JlSWRMaXN0LCBzbmFwc2hvdCwgc3RhdGUsIGRhdGEgKSB7XG5cdFx0aWYgKCBpcy5hcnJheShzdG9yZUlkTGlzdCkgKSB7XG5cdFx0XHRzdG9yZUlkTGlzdC5mb3JFYWNoKHN0b3JlSWQgPT4gdGhpcy5fbW91bnQoc3RvcmVJZCwgc25hcHNob3QsIHN0YXRlLCBkYXRhKSk7XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0dGhpcy5fbW91bnQoLi4uYXJndW1lbnRzKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblx0XG5cdF9tb3VudCggaWQsIHNuYXBzaG90LCBzdGF0ZSwgZGF0YSApIHtcblx0XHRsZXQgcmVmLCBfID0gdGhpcy5fO1xuXHRcdFxuXHRcdHJlZiA9IHRoaXMucGFyc2VSZWYoaWQpXG5cdFx0XG5cdFx0aWYgKCBpZCA9PSBcIiRwYXJlbnRcIiApIHJldHVybjtcblx0XHRpZiAoICFfLl9zY29wZVtyZWYuc3RvcmVJZF0gKSB7Ly9hc2sgbWl4ZWQgfHwgcGFyZW50XG5cdFx0XHRpZiAoIF8uX21peGVkLnJlZHVjZVJpZ2h0KCggbW91bnRlZCwgY3R4ICkgPT4gKG1vdW50ZWQgfHwgY3R4Ll9tb3VudChpZCwgc25hcHNob3QsIHN0YXRlLCBkYXRhKSksIGZhbHNlKSB8fFxuXHRcdFx0XHQhdGhpcy5wYXJlbnQgKVxuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHRyZXR1cm4gdGhpcy5wYXJlbnQuX21vdW50KC4uLmFyZ3VtZW50cyk7XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0bGV0IHN0b3JlID0gXy5fc2NvcGVbcmVmLnN0b3JlSWRdLCB0YXNrUXVldWUgPSBbXTtcblx0XHRcdGlmICggU2NvcGUuaXNTdG9yZUNsYXNzKHN0b3JlKSApIHtcblx0XHRcdFx0Xy5fc2NvcGVbcmVmLnN0b3JlSWRdID0gbmV3IHN0b3JlKHRoaXMsIHtcblx0XHRcdFx0XHQvL3NuYXBzaG90LFxuXHRcdFx0XHRcdG5hbWU6IHJlZi5zdG9yZUlkLFxuXHRcdFx0XHRcdHN0YXRlLFxuXHRcdFx0XHRcdGRhdGFcblx0XHRcdFx0fSwgdGFza1F1ZXVlKTtcblx0XHRcdFx0d2hpbGUgKCB0YXNrUXVldWUubGVuZ3RoICkgdGFza1F1ZXVlLnNoaWZ0KCkoKTtcblx0XHRcdH1cblx0XHRcdGVsc2UgaWYgKCBTY29wZS5pc1Njb3BlQ2xhc3Moc3RvcmUpICkge1xuXHRcdFx0XHRzdG9yZSA9IF8uX3Njb3BlW3JlZi5zdG9yZUlkXSA9IG5ldyBzdG9yZSh7ICRwYXJlbnQ6IHRoaXMgfSwge1xuXHRcdFx0XHRcdGtleSAgICAgICAgOiByZWYuc3RvcmVJZCxcblx0XHRcdFx0XHRpbmNyZW1lbnRJZDogdHJ1ZSxcblx0XHRcdFx0XHR1cHBlclNjb3BlIDogdGhpc1xuXHRcdFx0XHRcdC8vYXV0b0Rlc3Ryb3k6IHRydWVcblx0XHRcdFx0XHQvL3BhcmVudDogdGhpc1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0Ly9fLl9zY29wZVsgcmVmLnN0b3JlSWQgXS5yZXRhaW4oXCJzY29wZWRDaGlsZFNjb3BlXCIpO1xuXHRcdFx0XHQvL193YXRjaFN0b3JlKHJlZi5zdG9yZUlkKTtcblx0XHRcdFx0aWYgKCByZWYucGF0aC5sZW5ndGggPiAxIClcblx0XHRcdFx0XHRfLl9zY29wZVtyZWYuc3RvcmVJZF0ubW91bnQocmVmLnBhdGguc2xpY2UoMSkuam9pbignLicpLCBzbmFwc2hvdCwgc3RhdGUsIGRhdGEpXG5cdFx0XHRcdC8vZWxzZSByZXR1cm4gXy5fc2NvcGVbIHJlZi5zdG9yZUlkIF07XG5cdFx0XHR9XG5cdFx0XHRpZiAoIFNjb3BlLmlzU3RvcmUoc3RvcmUpICkge1xuXHRcdFx0XHRpZiAoIHN0YXRlICE9PSB1bmRlZmluZWQgJiYgZGF0YSA9PT0gdW5kZWZpbmVkIClcblx0XHRcdFx0XHRzdG9yZS5zZXRTdGF0ZShzdGF0ZSk7XG5cdFx0XHRcdGVsc2UgaWYgKCBzdGF0ZSAhPT0gdW5kZWZpbmVkIClcblx0XHRcdFx0XHRzdG9yZS5zdGF0ZSA9IHN0YXRlO1xuXHRcdFx0XHRcblx0XHRcdFx0aWYgKCBkYXRhICE9PSB1bmRlZmluZWQgKVxuXHRcdFx0XHRcdHN0b3JlLnB1c2goZGF0YSk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLl93YXRjaFN0b3JlKHJlZi5zdG9yZUlkKTtcblx0XHR9XG5cdFx0XG5cdFx0XG5cdFx0cmV0dXJuIF8uX3Njb3BlW3JlZi5zdG9yZUlkXTtcblx0fVxuXHRcblx0LyoqXG5cdCAqIFJlZ2lzdGVyIHN0b3JlcyBpbiBzdG9yZXNNYXAgJiBsaW5rIHRoZW0gaW4gdGhlIHByb3Rvc1xuXHQgKiBAcGFyYW0gc3RvcmVzTWFwXG5cdCAqIEBwYXJhbSBzdGF0ZVxuXHQgKiBAcGFyYW0gZGF0YVxuXHQgKi9cblx0cmVnaXN0ZXIoIHN0b3Jlc01hcCwgc3RhdGUgPSB7fSwgZGF0YSA9IHt9ICkge1xuXHRcdHRoaXMucmVsaW5rKHN0b3Jlc01hcCwgdGhpcywgZmFsc2UsIGZhbHNlKTtcblx0XHRPYmplY3Qua2V5cyhzdG9yZXNNYXApLmZvckVhY2goXG5cdFx0XHRpZCA9PiB7XG5cdFx0XHRcdGlmICggaWQgPT0gXCIkcGFyZW50XCIgKSByZXR1cm47XG5cdFx0XHRcdGlmICggc3RvcmVzTWFwW2lkXS5zaW5nbGV0b24gfHwgKGlzLmZuKHN0b3Jlc01hcFtpZF0pICYmIChzdGF0ZVtpZF0gfHwgZGF0YVtpZF0pKSApIHtcblx0XHRcdFx0XHR0aGlzLl9tb3VudChpZCwgdW5kZWZpbmVkLCBzdGF0ZVtpZF0sIGRhdGFbaWRdKVxuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2UgaWYgKCBzdGF0ZVtpZF0gfHwgZGF0YVtpZF0gKSB7XG5cdFx0XHRcdFx0aWYgKCBkYXRhW2lkXSApIHtcblx0XHRcdFx0XHRcdGlmICggc3RhdGVbaWRdIClcblx0XHRcdFx0XHRcdFx0dGhpcy5zdG9yZXNbaWRdLnN0YXRlID0gc3RhdGVbaWRdO1xuXHRcdFx0XHRcdFx0dGhpcy5zdG9yZXNbaWRdLnB1c2goZGF0YVtpZF0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRlbHNlIGlmICggc3RhdGVbaWRdICkge1xuXHRcdFx0XHRcdFx0dGhpcy5zdG9yZXNbaWRdLnNldFN0YXRlKHN0YXRlW2lkXSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMuX3dhdGNoU3RvcmUoaWQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0KVxuXHRcdFxuXHR9XG5cdFxuXHQvKipcblx0ICogTWFwIHNyY0N0eCBzdG9yZSdzIG9uIHRhcmdldEN0eCBoZWFkZXJzIHByb3RvJ3Ncblx0ICogQHBhcmFtIHNyY0N0eFxuXHQgKiBAcGFyYW0gdGFyZ2V0Q3R4XG5cdCAqIEBwYXJhbSBzdGF0ZVxuXHQgKiBAcGFyYW0gZGF0YVxuXHQgKi9cblx0cmVsaW5rKCBzcmNDdHgsIHRhcmdldEN0eCA9IHRoaXMsIGV4dGVybmFsLCBmb3JjZSApIHtcblx0XHRsZXQgXyA9IHRoaXMuXztcblx0XHRPYmplY3Qua2V5cyhzcmNDdHgpXG5cdFx0ICAgICAgLmZvckVhY2goXG5cdFx0XHQgICAgICBpZCA9PiB7XG5cdFx0XHRcdCAgICAgIGxldCBob3RSZWxvYWRpbmc7XG5cdFx0XHRcdFxuXHRcdFx0XHQgICAgICAvLyBzYW1lIHN0b3JlIGRlZiA6IGlnbm9yZVxuXHRcdFx0XHQgICAgICBpZiAoICFmb3JjZSAmJiB0YXJnZXRDdHguXy5fc2NvcGVbaWRdID09PSBzcmNDdHhbaWRdIHx8XG5cdFx0XHRcdFx0ICAgICAgdGFyZ2V0Q3R4Ll8uX3Njb3BlW2lkXSAmJiAodGFyZ2V0Q3R4Ll8uX3Njb3BlW2lkXS5jb25zdHJ1Y3RvciA9PT0gc3JjQ3R4W2lkXSkgKVxuXHRcdFx0XHRcdCAgICAgIHJldHVybjtcblx0XHRcdFx0XG5cdFx0XHRcdCAgICAgIC8vIGhvdCBzd2l0Y2hcblx0XHRcdFx0ICAgICAgaWYgKCAhZm9yY2UgJiYgdGFyZ2V0Q3R4Ll8uX3Njb3BlW2lkXSApIHtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHQgICAgICBpZiAoICFleHRlcm5hbCAmJiAhaXMuZm4odGFyZ2V0Q3R4Ll8uX3Njb3BlW2lkXSkgKSB7XG5cdFx0XHRcdFx0XHQgICAgICBjb25zb2xlLmluZm8oXCJSZXNjb3BlIFN0b3JlIDogXCIsIGlkLCBcIiBhbHJlYWR5IGV4aXN0IGluIHRoaXMgc2NvcGUgISAoIEhvdCBzd2l0Y2hpbmcgdGhlIHN0b3JlICkgISEhXCIpO1xuXHRcdFx0XHRcdFx0ICAgICAgbGV0IHRtcCAgICAgICAgICAgICAgICA9IHRhcmdldEN0eC5fLl9zY29wZVtpZF07XG5cdFx0XHRcdFx0XHQgICAgICB0YXJnZXRDdHguXy5fc2NvcGVbaWRdID0gc3JjQ3R4W2lkXTtcblx0XHRcdFx0XHRcdCAgICAgIGhvdFJlbG9hZGluZyAgICAgICAgICAgPSB0bXAubmV4dFN0YXRlO1xuXHRcdFx0XHRcdFx0ICAgICAgdG1wLmRlc3Ryb3koKTtcblx0XHRcdFx0XHQgICAgICB9XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0ICAgICAgaWYgKCAhZXh0ZXJuYWwgJiYgaXMuZm4odGFyZ2V0Q3R4Ll8uX3Njb3BlW2lkXSkgKVxuXHRcdFx0XHRcdFx0ICAgICAgdGFyZ2V0Q3R4Ll8uX3Njb3BlW2lkXSA9IHNyY0N0eFtpZF07XG5cdFx0XHRcdFx0XG5cdFx0XHRcdCAgICAgIH1cblx0XHRcdFx0ICAgICAgZWxzZSBpZiAoICFmb3JjZSAmJiAhZXh0ZXJuYWwgKVxuXHRcdFx0XHRcdCAgICAgIF8uX3Njb3BlW2lkXSA9IHNyY0N0eFtpZF07XG5cdFx0XHRcdFxuXHRcdFx0XHRcblx0XHRcdFx0ICAgICAgLy8gbWFwIHRoZSBzdG9yZSBpZFxuXHRcdFx0XHQgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoXG5cdFx0XHRcdFx0ICAgICAgdGFyZ2V0Q3R4Ll8uc3RvcmVzLnByb3RvdHlwZSxcblx0XHRcdFx0XHQgICAgICBpZCxcblx0XHRcdFx0XHQgICAgICB7XG5cdFx0XHRcdFx0XHQgICAgICBlbnVtZXJhYmxlICA6IHRydWUsXG5cdFx0XHRcdFx0XHQgICAgICBjb25maWd1cmFibGU6IHRydWUsXG5cdFx0XHRcdFx0XHQgICAgICBnZXQgICAgICAgICA6ICgpID0+IF8uX3Njb3BlW2lkXVxuXHRcdFx0XHRcdCAgICAgIH1cblx0XHRcdFx0ICAgICAgKTtcblx0XHRcdFx0XG5cdFx0XHRcdCAgICAgIC8vIG5vdCBtYXBwaW5nIGhpZXJhcmNoaWMgc2NvcGVzXG5cdFx0XHRcdCAgICAgIGlmICggaWQgPT09IFwiJHBhcmVudFwiICkgcmV0dXJuO1xuXHRcdFx0XHRcblx0XHRcdFx0ICAgICAgLy8gbWFwIHN0YXRlICYgZGF0YVxuXHRcdFx0XHQgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoXG5cdFx0XHRcdFx0ICAgICAgdGFyZ2V0Q3R4Ll8uc3RhdGUucHJvdG90eXBlLFxuXHRcdFx0XHRcdCAgICAgIGlkLFxuXHRcdFx0XHRcdCAgICAgIHtcblx0XHRcdFx0XHRcdCAgICAgIGVudW1lcmFibGUgIDogdHJ1ZSxcblx0XHRcdFx0XHRcdCAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcblx0XHRcdFx0XHRcdCAgICAgIGdldCAgICAgICAgIDogKCkgPT4gKF8uX3Njb3BlW2lkXSAmJiBfLl9zY29wZVtpZF0uc3RhdGUpLFxuXHRcdFx0XHRcdFx0ICAgICAgc2V0ICAgICAgICAgOiAoIHYgKSA9PiAodGhpcy5fbW91bnQoaWQsIHVuZGVmaW5lZCwgdikpXG5cdFx0XHRcdFx0ICAgICAgfVxuXHRcdFx0XHQgICAgICApO1xuXHRcdFx0XHQgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoXG5cdFx0XHRcdFx0ICAgICAgdGFyZ2V0Q3R4Ll8uZGF0YS5wcm90b3R5cGUsXG5cdFx0XHRcdFx0ICAgICAgaWQsXG5cdFx0XHRcdFx0ICAgICAge1xuXHRcdFx0XHRcdFx0ICAgICAgZW51bWVyYWJsZSAgOiB0cnVlLFxuXHRcdFx0XHRcdFx0ICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuXHRcdFx0XHRcdFx0ICAgICAgZ2V0ICAgICAgICAgOiAoKSA9PiAoXy5fc2NvcGVbaWRdICYmIF8uX3Njb3BlW2lkXS5kYXRhKSxcblx0XHRcdFx0XHRcdCAgICAgIHNldCAgICAgICAgIDogKCB2ICkgPT4gKHRoaXMuX21vdW50KGlkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdikpXG5cdFx0XHRcdFx0ICAgICAgfVxuXHRcdFx0XHQgICAgICApO1xuXHRcdFx0XHRcblx0XHRcdFx0XG5cdFx0XHRcdCAgICAgIC8vIGFjdGlvbiBtYXBwaW5nXG5cdFx0XHRcdCAgICAgIGxldCBhY3Rpb25zICAgICAgID0gc3JjQ3R4W2lkXSBpbnN0YW5jZW9mIFNjb3BlLlN0b3JlXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgPyBzcmNDdHhbaWRdLmNvbnN0cnVjdG9yLmFjdGlvbnNcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICA6IHNyY0N0eFtpZF0uYWN0aW9ucyxcblx0XHRcdFx0ICAgICAgICAgIGFjdGl2ZUFjdGlvbnMgPSB0YXJnZXRDdHguXy5hY3Rpb25zLnByb3RvdHlwZTtcblx0XHRcdFx0ICAgICAgaWYgKCBTY29wZS5pc1Njb3BlKF8uX3Njb3BlW2lkXS5wcm90b3R5cGUpIClcblx0XHRcdFx0XHQgICAgICB0aGlzLl9tb3VudChpZCk7XG5cdFx0XHRcdCAgICAgIGlmICggU2NvcGUuaXNTY29wZShfLl9zY29wZVtpZF0pICkge1xuXHRcdFx0XHRcdCAgICAgIGFjdGl2ZUFjdGlvbnNbaWRdID0gXy5fc2NvcGVbaWRdLmFjdGlvbnM7XG5cdFx0XHRcdCAgICAgIH1cblx0XHRcdFx0ICAgICAgaWYgKCAhU2NvcGUuaXNTdG9yZShfLl9zY29wZVtpZF0pICYmICFTY29wZS5pc1N0b3JlQ2xhc3MoXy5fc2NvcGVbaWRdKSApXG5cdFx0XHRcdFx0ICAgICAgcmV0dXJuO1xuXHRcdFx0XHRcblx0XHRcdFx0ICAgICAgYWN0aW9ucyAmJlxuXHRcdFx0XHQgICAgICBPYmplY3Qua2V5cyhhY3Rpb25zKVxuXHRcdFx0XHQgICAgICAgICAgICAuZm9yRWFjaChcblx0XHRcdFx0XHQgICAgICAgICAgICAoIGFjdCApID0+IHtcblx0XHRcdFx0XHRcdCAgICAgICAgICAgIGlmICggYWN0aXZlQWN0aW9ucy5oYXNPd25Qcm9wZXJ0eShhY3QpIClcblx0XHRcdFx0XHRcdFx0ICAgICAgICAgICAgYWN0aXZlQWN0aW9uc1thY3RdLl9fdGFyZ2V0U3RvcmVzKys7XG5cdFx0XHRcdFx0XHQgICAgICAgICAgICBlbHNlIHtcblx0XHRcdFx0XHRcdFx0ICAgICAgICAgICAgYWN0aXZlQWN0aW9uc1thY3RdICAgICAgICAgICAgICAgID0gdGhpcy5kaXNwYXRjaC5iaW5kKHRoaXMsIGFjdCk7XG5cdFx0XHRcdFx0XHRcdCAgICAgICAgICAgIGFjdGl2ZUFjdGlvbnNbYWN0XS5fX3RhcmdldFN0b3JlcyA9IDE7XG5cdFx0XHRcdFx0XHQgICAgICAgICAgICB9XG5cdFx0XHRcdFx0ICAgICAgICAgICAgfVxuXHRcdFx0XHQgICAgICAgICAgICApO1xuXHRcdFx0XHRcblx0XHRcdFx0ICAgICAgLy8gcmVtb3VudCB0aGUgc3RvcmUgaWYgaXQgd2FzIGhvdCByZWxvYWRlZFxuXHRcdFx0XHQgICAgICBpZiAoIGhvdFJlbG9hZGluZyApXG5cdFx0XHRcdFx0ICAgICAgdGhpcy5fbW91bnQoaWQsIG51bGwsIGhvdFJlbG9hZGluZyk7XG5cdFx0XHQgICAgICB9XG5cdFx0ICAgICAgKVxuXHR9XG5cdFxuXHQvKipcblx0ICogTWFrZSB0aGlzIHNjb3BlIHdhdGNoaW5nIHRoZSBsb2NhbCBzdG9yZSAnaWQnXG5cdCAqIEBwYXJhbSBpZFxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cblx0ICogQHByaXZhdGVcblx0ICovXG5cdF93YXRjaFN0b3JlKCBpZCApIHtcblx0XHRsZXQgXyA9IHRoaXMuXztcblx0XHRpZiAoICFfLl9saXN0ZW5pbmdbaWRdICYmICFpcy5mbihfLl9zY29wZVtpZF0pICkge1xuXHRcdFx0IV8uX3Njb3BlW2lkXS5fYXV0b0Rlc3Ryb3kgJiYgXy5fc2NvcGVbaWRdLnJldGFpbihcInNjb3BlZFwiKTtcblx0XHRcdCFfLl9zY29wZVtpZF0uaXNTdGFibGUoKSAmJiB0aGlzLndhaXQoaWQpO1xuXHRcdFx0Xy5fc2NvcGVbaWRdLm9uKFxuXHRcdFx0XHRfLl9saXN0ZW5pbmdbaWRdID0ge1xuXHRcdFx0XHRcdCdkZXN0cm95JyA6IHMgPT4ge1xuXHRcdFx0XHRcdFx0ZGVsZXRlIF8uX2xpc3RlbmluZ1tpZF07XG5cdFx0XHRcdFx0XHRfLl9zY29wZVtpZF0gPSBfLl9zY29wZVtpZF0uY29uc3RydWN0b3I7XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHQndXBkYXRlJyAgOiBzID0+IHRoaXMucHJvcGFnKCksXG5cdFx0XHRcdFx0J3N0YWJsZScgIDogcyA9PiB0aGlzLnJlbGVhc2UoaWQpLFxuXHRcdFx0XHRcdCd1bnN0YWJsZSc6IHMgPT4gdGhpcy53YWl0KGlkKVxuXHRcdFx0XHR9KTtcblx0XHR9XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBNaXggdGFyZ2V0Q3R4IG9uIHRoaXMgc2NvcGVcblx0ICogTWl4ZWQgc2NvcGUgcGFyZW50cyBhcmUgTk9UIG1hcHBlZFxuXHQgKiBAcGFyYW0gdGFyZ2V0Q3R4XG5cdCAqL1xuXHRtaXhpbiggdGFyZ2V0Q3R4ICkge1xuXHRcdGxldCBwYXJlbnQgPSB0aGlzLnBhcmVudCxcblx0XHQgICAgbGlzdHMsXG5cdFx0ICAgIF8gICAgICA9IHRoaXMuXztcblx0XHRcblx0XHRfLl9taXhlZC5wdXNoKHRhcmdldEN0eCk7XG5cdFx0XG5cdFx0dGFyZ2V0Q3R4LnJldGFpbihcIm1peGVkVG9cIik7XG5cdFx0XG5cdFx0aWYgKCAhdGFyZ2V0Q3R4Ll9zdGFibGUgKVxuXHRcdFx0dGhpcy53YWl0KHRhcmdldEN0eC5faWQpO1xuXHRcdFxuXHRcdF8uX21peGVkTGlzdC5wdXNoKGxpc3RzID0ge1xuXHRcdFx0J3N0YWJsZScgIDogcyA9PiB0aGlzLnJlbGVhc2UodGFyZ2V0Q3R4Ll9pZCksXG5cdFx0XHQndW5zdGFibGUnOiBzID0+IHRoaXMud2FpdCh0YXJnZXRDdHguX2lkKSxcblx0XHRcdCd1cGRhdGUnICA6IHMgPT4gdGhpcy5fcHJvcGFnKClcblx0XHR9KTtcblx0XHRcblx0XHR0YXJnZXRDdHgub24obGlzdHMpO1xuXHRcdFxuXHRcdC8vIHJlc2V0IHByb3Rvc1xuXHRcdC8vIHB1c2ggbmV3IHByb3RvIHdpdGggcGFyZW50XG5cdFx0X19wcm90b19fcHVzaCh0aGlzLCAnYWN0aW9ucycsIHBhcmVudCk7XG5cdFx0X19wcm90b19fcHVzaCh0aGlzLCAnc3RvcmVzJywgcGFyZW50KTtcblx0XHRfX3Byb3RvX19wdXNoKHRoaXMsICdzdGF0ZScsIHBhcmVudCk7XG5cdFx0X19wcm90b19fcHVzaCh0aGlzLCAnZGF0YScsIHBhcmVudCk7XG5cdFx0XG5cdFx0Ly8gYmluZCBsb2NhbCBhY2Nlc3NvcnMgaW4gdGhlIG5ldyBwcm90b1xuXHRcdHRoaXMucmVsaW5rKF8uX3Njb3BlLCB0aGlzLCBmYWxzZSwgdHJ1ZSk7XG5cdFx0XG5cdFx0Xy5fbWl4ZWQuZm9yRWFjaChcblx0XHRcdGN0eCA9PiB7XG5cdFx0XHRcdC8vIHB1c2ggcHJvdG9zXG5cdFx0XHRcdF9fcHJvdG9fX3B1c2godGhpcywgJ2FjdGlvbnMnKTtcblx0XHRcdFx0X19wcm90b19fcHVzaCh0aGlzLCAnc3RvcmVzJyk7XG5cdFx0XHRcdF9fcHJvdG9fX3B1c2godGhpcywgJ3N0YXRlJyk7XG5cdFx0XHRcdF9fcHJvdG9fX3B1c2godGhpcywgJ2RhdGEnKTtcblx0XHRcdFx0dGhpcy5zdG9yZXMuX19vcmlnaW4gPSBcIm1peGVkIFwiICsgY3R4Ll9pZDtcblx0XHRcdFx0Ly8gd3JpdGUgbWl4ZWQgYWNjZXNzb3JzXG5cdFx0XHRcdGN0eC5yZWxpbmsoY3R4Ll8uX3Njb3BlLCB0aGlzLCB0cnVlLCB0cnVlKVxuXHRcdFx0fVxuXHRcdClcblx0fVxuXHRcblx0LyoqXG5cdCAqIEJpbmQgc3RvcmVzIGZyb20gdGhpcyBzY29wZSwgaGlzIHBhcmVudHMgb3IgbWl4ZWQgc2NvcGVzIHRvIG9ialxuXHQgKlxuXHQgKiBAcGFyYW0gdGFyZ2V0IHtSZWFjdC5Db21wb25lbnR8U3RvcmV8ZnVuY3Rpb259XG5cdCAqIEBwYXJhbSBrZXkge3N0cmluZ30gc3RvcmVzIGtleXMgdG8gYmluZCB1cGRhdGVzXG5cdCAqIEBwYXJhbSBhc1xuXHQgKiBAcGFyYW0gc2V0SW5pdGlhbCB7Ym9vbGVhbn0gZmFsc2UgdG8gbm90IHByb3BhZyBpbml0aWFsIHZhbHVlIChkZWZhdWx0IDogdHJ1ZSlcblx0ICovXG5cdGJpbmQoIHRhcmdldCwga2V5LCBhcywgc2V0SW5pdGlhbCA9IHRydWUsIHJldk1hcCA9IHt9ICkge1xuXHRcdGxldCBsYXN0UmV2cywgZGF0YSwgcmVmS2V5cztcblx0XHRpZiAoIGtleSAmJiAhaXMuYXJyYXkoa2V5KSApXG5cdFx0XHRrZXkgPSBba2V5XTtcblx0XHRcblx0XHRpZiAoIGFzID09PSBmYWxzZSB8fCBhcyA9PT0gdHJ1ZSApIHtcblx0XHRcdHNldEluaXRpYWwgPSBhcztcblx0XHRcdGFzICAgICAgICAgPSBudWxsO1xuXHRcdH1cblx0XHRcblx0XHRyZWZLZXlzID0ga2V5XG5cdFx0XHQubWFwKGlkID0+IChpcy5zdHJpbmcoaWQpID8gaWQgOiBpZC5uYW1lKSlcblx0XHRcdC5tYXAoaWQgPT4gKHRoaXMucGFyc2VSZWYoaWQpKSk7XG5cdFx0XG5cdFx0XG5cdFx0dGhpcy5fLmZvbGxvd2Vycy5wdXNoKFxuXHRcdFx0W1xuXHRcdFx0XHR0YXJnZXQsXG5cdFx0XHRcdGtleSxcblx0XHRcdFx0YXMgfHwgdW5kZWZpbmVkLFxuXHRcdFx0XHRsYXN0UmV2cyA9IHJlZktleXMucmVkdWNlKCggcmV2cywgcmVmICkgPT4ge1xuXHRcdFx0XHRcdHJldnNbcmVmLnN0b3JlSWRdID0gcmV2c1tyZWYuc3RvcmVJZF0gfHwge1xuXHRcdFx0XHRcdFx0cmV2IDogMCxcblx0XHRcdFx0XHRcdHJlZnM6IFtdXG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRyZXZzW3JlZi5zdG9yZUlkXS5yZWZzLnB1c2gocmVmKTtcblx0XHRcdFx0XHRyZXR1cm4gcmV2cztcblx0XHRcdFx0fSwgcmV2TWFwKVxuXHRcdFx0XSk7XG5cdFx0XG5cdFx0dGhpcy5tb3VudChrZXkpO1xuXHRcdHRoaXMucmV0YWluU3RvcmVzKE9iamVjdC5rZXlzKGxhc3RSZXZzKSwgJ2xpc3RlbmVycycpO1xuXHRcdFxuXHRcdGlmICggc2V0SW5pdGlhbCAmJiB0aGlzLl9zdGFibGUgKSB7XG5cdFx0XHRkYXRhID0gdGhpcy5nZXRVcGRhdGVzKGxhc3RSZXZzKTtcblx0XHRcdGlmICggIWRhdGEgKSByZXR1cm4gdGhpcztcblx0XHRcdGlmICggdHlwZW9mIHRhcmdldCAhPSBcImZ1bmN0aW9uXCIgKSB7XG5cdFx0XHRcdGlmICggYXMgKSB0YXJnZXQuc2V0U3RhdGUoeyBbYXNdOiBkYXRhIH0pO1xuXHRcdFx0XHRlbHNlIHRhcmdldC5zZXRTdGF0ZShkYXRhKTtcblx0XHRcdH1cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHR0YXJnZXQoZGF0YSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cdFxuXHQvKipcblx0ICogVW4gYmluZCB0aGlzIHNjb3BlIG9mZiB0aGUgZ2l2ZW4gY29tcG9uZW50LWtleXNcblx0ICogQHBhcmFtIHRhcmdldFxuXHQgKiBAcGFyYW0ga2V5XG5cdCAqIEByZXR1cm5zIHtBcnJheS48Kj59XG5cdCAqL1xuXHR1bkJpbmQoIHRhcmdldCwga2V5LCBhcyApIHtcblx0XHRsZXQgZm9sbG93ZXJzID0gdGhpcy5fLmZvbGxvd2Vycyxcblx0XHQgICAgaSAgICAgICAgID0gZm9sbG93ZXJzICYmIGZvbGxvd2Vycy5sZW5ndGg7XG5cdFx0d2hpbGUgKCBmb2xsb3dlcnMgJiYgaS0tIClcblx0XHRcdGlmICggZm9sbG93ZXJzW2ldWzBdID09PSB0YXJnZXQgJiZcblx0XHRcdFx0KCcnICsgZm9sbG93ZXJzW2ldWzFdKSA9PSAoJycgKyBrZXkpICYmXG5cdFx0XHRcdGZvbGxvd2Vyc1tpXVsyXSA9PSBhcyApIHtcblx0XHRcdFx0dGhpcy5kaXNwb3NlU3RvcmVzKE9iamVjdC5rZXlzKGZvbGxvd2Vyc1tpXVszXSksICdsaXN0ZW5lcnMnKTtcblx0XHRcdFx0cmV0dXJuIGZvbGxvd2Vycy5zcGxpY2UoaSwgMSk7XG5cdFx0XHR9XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBNb3VudCB0aGUgc3RvcmVzIGluIHN0b3JlSWRMaXN0IGZyb20gdGhpcyBzY29wZSwgaXRzIHBhcmVudHMgYW5kIG1peGVkIHNjb3BlXG5cdCAqIEJpbmQgdGhlbSB0byAndG8nXG5cdCAqIEhvb2sgJ3RvJyBzbyBpdCB3aWxsIGF1dG8gdW5iaW5kIG9uICdkZXN0cm95JyBvciAnY29tcG9uZW50V2lsbFVubW91bnQnXG5cdCAqIEBwYXJhbSB0YXJnZXRcblx0ICogQHBhcmFtIHN0b3JlSWRMaXN0XG5cdCAqIEBwYXJhbSBiaW5kXG5cdCAqIEByZXR1cm5zIHtPYmplY3R9IEluaXRpYWwgb3V0cHV0cyBvZiB0aGUgc3RvcmVzIGluICdzdG9yZXNMaXN0J1xuXHQgKi9cblx0bWFwKCB0YXJnZXQsIHN0b3JlSWRMaXN0LCBiaW5kID0gdHJ1ZSwgcmV2TWFwICkge1xuXHRcdGxldCBTdG9yZSAgID0gdGhpcy5jb25zdHJ1Y3Rvci5TdG9yZTtcblx0XHRzdG9yZUlkTGlzdCA9IGlzLmFycmF5KHN0b3JlSWRMaXN0KSA/IHN0b3JlSWRMaXN0IDogW3N0b3JlSWRMaXN0XTtcblx0XHRsZXQgcmVmTGlzdCA9IHN0b3JlSWRMaXN0Lm1hcCh0aGlzLnBhcnNlUmVmKTtcblx0XHR0aGlzLm1vdW50KHN0b3JlSWRMaXN0KTtcblx0XHRpZiAoIGJpbmQgJiYgdGFyZ2V0IGluc3RhbmNlb2YgU3RvcmUgKSB7XG5cdFx0XHRTdG9yZS5tYXAodGFyZ2V0LCBzdG9yZUlkTGlzdCwgdGhpcywgdGhpcywgZmFsc2UpXG5cdFx0fVxuXHRcdGVsc2UgaWYgKCBiaW5kICkge1xuXHRcdFx0dGhpcy5iaW5kKHRhcmdldCwgc3RvcmVJZExpc3QsIHVuZGVmaW5lZCwgZmFsc2UpO1xuXHRcdFx0XG5cdFx0XHRsZXQgbWl4ZWRDV1VubW91bnQsXG5cdFx0XHQgICAgdW5Nb3VudEtleSA9IHRhcmdldC5pc1JlYWN0Q29tcG9uZW50ID8gXCJjb21wb25lbnRXaWxsVW5tb3VudFwiIDogXCJkZXN0cm95XCI7XG5cdFx0XHRcblx0XHRcdGlmICggdGFyZ2V0Lmhhc093blByb3BlcnR5KHVuTW91bnRLZXkpICkge1xuXHRcdFx0XHRtaXhlZENXVW5tb3VudCA9IHRhcmdldFt1bk1vdW50S2V5XTtcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0dGFyZ2V0W3VuTW91bnRLZXldID0gKCAuLi5hcmd6ICkgPT4ge1xuXHRcdFx0XHRkZWxldGUgdGFyZ2V0W3VuTW91bnRLZXldO1xuXHRcdFx0XHRpZiAoIG1peGVkQ1dVbm1vdW50IClcblx0XHRcdFx0XHR0YXJnZXRbdW5Nb3VudEtleV0gPSBtaXhlZENXVW5tb3VudDtcblx0XHRcdFx0XG5cdFx0XHRcdHRoaXMudW5CaW5kKHRhcmdldCwgc3RvcmVJZExpc3QpO1xuXHRcdFx0XHRyZXR1cm4gdGFyZ2V0W3VuTW91bnRLZXldICYmIHRhcmdldFt1bk1vdW50S2V5XSguLi5hcmd6KTtcblx0XHRcdH1cblx0XHRcdFxuXHRcdH1cblx0XHRyZXR1cm4gcmV2TWFwICYmIHRoaXMuZ2V0VXBkYXRlcyhyZXZNYXApXG5cdFx0XHR8fCByZWZMaXN0LnJlZHVjZSgoIGRhdGEsIHJlZiApID0+IHtcblx0XHRcdFx0d2Fsa25TZXQoZGF0YSwgcmVmLmFsaWFzIHx8IHJlZi5wYXRoLCB0aGlzLnJldHJpZXZlKHJlZi5wYXRoKSlcblx0XHRcdFx0cmV0dXJuIGRhdGE7XG5cdFx0XHR9LCB7fSk7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBHZXQgY3VycmVudCBkYXRhIHZhbHVlIGZyb20ganNvbiBwYXRoXG5cdCAqIEBwYXJhbSBwYXRoXG5cdCAqIEByZXR1cm5zIHtzdHJpbmd8Kn1cblx0ICovXG5cdHJldHJpZXZlKCBwYXRoID0gXCJcIiApIHtcblx0XHRwYXRoID0gaXMuc3RyaW5nKHBhdGgpID8gcGF0aC5zcGxpdCgnLicpIDogcGF0aDtcblx0XHRcblx0XHRcblx0XHRyZXR1cm4gcGF0aCAmJlxuXHRcdFx0dGhpcy5zdG9yZXNbcGF0aFswXV0gJiZcblx0XHRcdHRoaXMuc3RvcmVzW3BhdGhbMF1dLnJldHJpZXZlICYmXG5cdFx0XHR0aGlzLnN0b3Jlc1twYXRoWzBdXS5yZXRyaWV2ZShwYXRoLnNsaWNlKDEpKTtcblx0fVxuXHRcblx0LyoqXG5cdCAqIFJlc3RvcmUgYWxsIG5vZGVzIGluIGEganNvblBhdGhcblx0ICogQHBhcmFtIHBhdGhcblx0ICogQHJldHVybnMge3N0cmluZ3wqfVxuXHQgKi9cblx0cmVzdG9yZVJlZlBhdGgoIHBhdGggPSBcIlwiICkge1xuXHRcdHBhdGggPSBpcy5zdHJpbmcocGF0aCkgPyBwYXRoLnNwbGl0KCcuJykgOiBwYXRoO1xuXHRcdFxuXHRcdGxldCBvYmosIGkgPSAwLCBjU2NvcGUgPSB0aGlzO1xuXHRcdFxuXHRcdHdoaWxlICggaSA8IHBhdGgubGVuZ3RoICkge1xuXHRcdFx0b2JqID0gY1Njb3BlLnN0b3Jlc1twYXRoW2ldXTtcblx0XHRcdGlmICggU2NvcGUuaXNTY29wZUNsYXNzKG9iailcblx0XHRcdFx0fHxcblx0XHRcdFx0U2NvcGUuaXNTdG9yZUNsYXNzKG9iaikgKSB7XG5cdFx0XHRcdGNTY29wZS5tb3VudChwYXRoWzBdKTtcblx0XHRcdFx0b2JqID0gY1Njb3BlLnN0b3Jlc1twYXRoW2ldXTtcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0aWYgKCBTY29wZS5pc1Njb3BlKG9iaikgKSB7XG5cdFx0XHRcdGNTY29wZSA9IG9iajtcblx0XHRcdFx0aSsrO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSBpZiAoIFNjb3BlLmlzU3RvcmUob2JqKSApIHtcblx0XHRcdFx0b2JqLnJlc3RvcmUoKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdFxuXHR9XG5cdFxuXHQvKipcblx0ICogR2V0IHRhcmdldCBzdG9yZSBmcm9tIGpzb24gcGF0aFxuXHQgKiBAcGFyYW0gcGF0aFxuXHQgKiBAcmV0dXJucyB7c3RyaW5nfCp9XG5cdCAqL1xuXHRyZXRyaWV2ZVN0b3JlKCBwYXRoID0gXCJcIiApIHtcblx0XHRwYXRoID0gaXMuc3RyaW5nKHBhdGgpID8gcGF0aC5zcGxpdCgnLicpIDogcGF0aDtcblx0XHRyZXR1cm4gcGF0aFxuXHRcdFx0JiYgcGF0aC5sZW5ndGhcblx0XHRcdCYmIChcblx0XHRcdFx0cGF0aC5sZW5ndGggIT0gMSAmJiB0aGlzLnN0b3Jlc1twYXRoWzBdXS5yZXRyaWV2ZVN0b3JlXG5cdFx0XHRcdD8gdGhpcy5zdG9yZXNbcGF0aFswXV0ucmV0cmlldmVTdG9yZShwYXRoLnNsaWNlKDEpKVxuXHRcdFx0XHQ6IHBhdGgubGVuZ3RoID09IDEgJiYgdGhpcy5zdG9yZXNbcGF0aFswXV1cblx0XHRcdCk7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBHZXQgb3IgdXBkYXRlIHN0b3JlcyByZXZpc2lvbnMgaW4gJ3N0b3Jlc1Jldk1hcCdcblx0ICogQHBhcmFtIHN0b3Jlc1Jldk1hcFxuXHQgKiBAcGFyYW0gbG9jYWxcblx0ICogQHJldHVybnMge3t9fVxuXHQgKi9cblx0Z2V0U3RvcmVzUmV2cyggc3RvcmVzUmV2TWFwID0ge30sIGxvY2FsICkge1xuXHRcdGxldCBjdHggPSB0aGlzLl8uX3Njb3BlO1xuXHRcdGlmICggIXN0b3Jlc1Jldk1hcCApIHtcblx0XHRcdHN0b3Jlc1Jldk1hcCA9IHt9O1xuXHRcdH1cblx0XHRPYmplY3Qua2V5cyhjdHgpLmZvckVhY2goXG5cdFx0XHRpZCA9PiB7XG5cdFx0XHRcdGlmICggaWQgPT0gXCIkcGFyZW50XCIgKSByZXR1cm47XG5cdFx0XHRcdGlmICggIWlzLmZuKGN0eFtpZF0pXG5cdFx0XHRcdCkge1xuXHRcdFx0XHRcdHN0b3Jlc1Jldk1hcFtpZF0gPSBjdHhbaWRdLl9yZXY7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZSBpZiAoICFzdG9yZXNSZXZNYXAuaGFzT3duUHJvcGVydHkoaWQpIClcblx0XHRcdFx0XHRzdG9yZXNSZXZNYXBbaWRdID0gZmFsc2Vcblx0XHRcdH1cblx0XHQpO1xuXHRcdGlmICggIWxvY2FsICkge1xuXHRcdFx0dGhpcy5fLl9taXhlZC5yZWR1Y2UoKCB1cGRhdGVkLCBjdHggKSA9PiAoY3R4LmdldFN0b3Jlc1JldnMoc3RvcmVzUmV2TWFwKSwgc3RvcmVzUmV2TWFwKSwgc3RvcmVzUmV2TWFwKTtcblx0XHRcdHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LmdldFN0b3Jlc1JldnMoc3RvcmVzUmV2TWFwKTtcblx0XHR9XG5cdFx0cmV0dXJuIHN0b3Jlc1Jldk1hcDtcblx0fVxuXHRcblx0LyoqXG5cdCAqIFJlY3Vyc2l2ZWx5IGdldCBhbGwgc3RvcmVzIHJldnNcblx0ICogQHBhcmFtIGNoaWxkc1xuXHQgKiBAcmV0dXJucyB7QXJyYXl9XG5cdCAqIEBwcml2YXRlXG5cdCAqL1xuXHRfZ2V0UmV2TWFwKCBzdG9yZXNSZXZNYXAgPSB7fSApIHtcblx0XHRsZXQgY3R4ID0gdGhpcy5fLl9zY29wZTtcblx0XHRPYmplY3Qua2V5cyhjdHgpLmZvckVhY2goXG5cdFx0XHRpZCA9PiB7XG5cdFx0XHRcdGlmICggaWQgPT0gXCIkcGFyZW50XCIgfHwgc3RvcmVzUmV2TWFwW2lkXSApIHJldHVybjtcblx0XHRcdFx0c3RvcmVzUmV2TWFwW2lkXSA9IHsgcmV2OiBjdHhbaWRdLl9yZXYsIHJlZnM6IFtdIH07XG5cdFx0XHRcdFxuXHRcdFx0fSk7XG5cdFx0dGhpcy5fLl9taXhlZC5yZWR1Y2VSaWdodChcblx0XHRcdCggc3RvcmVzUmV2TWFwLCBjdHggKSA9PiAoY3R4Ll9nZXRSZXZNYXAoc3RvcmVzUmV2TWFwKSksIHN0b3Jlc1Jldk1hcCk7XG5cdFx0dGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuX2dldFJldk1hcChzdG9yZXNSZXZNYXApO1xuXHRcdHJldHVybiBzdG9yZXNSZXZNYXA7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBHZXQgdXBkYXRlZCBvdXRwdXQgYmFzaW5nIHN0b3Jlc1Jldk1hcCdzIHJldmlzaW9ucy5cblx0ICogSWYgYSBzdG9yZSBpbiAnc3RvcmVzUmV2TWFwJyB3YXMgdXBkYXRlZDsgYWRkIGl0IHRvICdvdXRwdXQnICYgdXBkYXRlIHN0b3Jlc1Jldk1hcFxuXHQgKiBAcGFyYW0gc3RvcmVzUmV2TWFwXG5cdCAqIEBwYXJhbSBvdXRwdXRcblx0ICogQHBhcmFtIHVwZGF0ZWRcblx0ICogQHJldHVybnMgeyp8e319XG5cdCAqL1xuXHRnZXRSZWZzVXBkYXRlcyggcmVmcywgcmV2TWFwLCBvdXRwdXQgKSB7XG5cdFx0cmV2TWFwID0gcmV2TWFwIHx8IHJlZnNcblx0XHRcdC5tYXAoaWQgPT4gKGlzLnN0cmluZyhpZCkgPyBpZCA6IGlkLm5hbWUpKVxuXHRcdFx0Lm1hcChpZCA9PiAodGhpcy5wYXJzZVJlZihpZCkpKVxuXHRcdFx0LnJlZHVjZSgoIHJldnMsIHJlZiApID0+IHtcblx0XHRcdFx0cmV2c1tyZWYuc3RvcmVJZF0gPSByZXZzW3JlZi5zdG9yZUlkXSB8fCB7XG5cdFx0XHRcdFx0cmV2IDogMCxcblx0XHRcdFx0XHRyZWZzOiBbXVxuXHRcdFx0XHR9O1xuXHRcdFx0XHRyZXZzW3JlZi5zdG9yZUlkXS5yZWZzLnB1c2gocmVmKTtcblx0XHRcdFx0cmV0dXJuIHJldnM7XG5cdFx0XHR9LCB7fSk7XG5cdFx0XG5cdFx0cmV0dXJuIHRoaXMuZ2V0VXBkYXRlcyhyZXZNYXAsIG91dHB1dClcblx0fVxuXHRcblx0LyoqXG5cdCAqIEdldCBvciB1cGRhdGUgb3V0cHV0IGJhc2luZyBzdG9yZXNSZXZNYXAncyByZXZpc2lvbnMuXG5cdCAqIElmIGEgc3RvcmUgaW4gJ3N0b3Jlc1Jldk1hcCcgd2FzIHVwZGF0ZWQ7IGFkZCBpdCB0byAnb3V0cHV0JyAmIHVwZGF0ZSBzdG9yZXNSZXZNYXBcblx0ICogQHBhcmFtIHN0b3Jlc1Jldk1hcFxuXHQgKiBAcGFyYW0gb3V0cHV0XG5cdCAqIEBwYXJhbSB1cGRhdGVkXG5cdCAqIEByZXR1cm5zIHsqfHt9fVxuXHQgKi9cblx0Z2V0VXBkYXRlcyggc3RvcmVzUmV2TWFwLCBvdXRwdXQsIHVwZGF0ZWQgKSB7XG5cdFx0b3V0cHV0ICAgICAgID0gb3V0cHV0IHx8IHt9O1xuXHRcdHN0b3Jlc1Jldk1hcCA9IHN0b3Jlc1Jldk1hcCB8fCB0aGlzLl9nZXRSZXZNYXAoKTtcblx0XHRPYmplY3Qua2V5cyhzdG9yZXNSZXZNYXApLmZvckVhY2goXG5cdFx0XHRpZCA9PiB7XG5cdFx0XHRcdGxldCBzdG9yZSAgICAgICAgPSB0aGlzLnN0b3Jlc1tpZF07XG5cdFx0XHRcdHN0b3Jlc1Jldk1hcFtpZF0gPSBzdG9yZXNSZXZNYXBbaWRdIHx8IHsgcmV2OiAwLCByZWZzOiBbXSB9O1xuXHRcdFx0XHRcblx0XHRcdFx0aWYgKCBzdG9yZSAmJiBpcy5mbihzdG9yZSkgKSB7XG5cdFx0XHRcdFx0dXBkYXRlZCAgICA9IHRydWU7XG5cdFx0XHRcdFx0b3V0cHV0W2lkXSA9IHVuZGVmaW5lZDtcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlIGlmICggc3RvcmUgJiYgc3RvcmUuX3JldiA+IHN0b3Jlc1Jldk1hcFtpZF0ucmV2ICkge1xuXHRcdFx0XHRcdHN0b3Jlc1Jldk1hcFtpZF0ucmV2ID0gc3RvcmUuX3Jldjtcblx0XHRcdFx0XHR1cGRhdGVkICAgICAgICAgICAgICA9IHRydWU7XG5cdFx0XHRcdFx0c3RvcmVzUmV2TWFwW2lkXS5yZWZzLmZvckVhY2goXG5cdFx0XHRcdFx0XHRyZWYgPT4ge1xuXHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0b3V0cHV0W3JlZi5hbGlhc10gPSB0aGlzLnJldHJpZXZlKHJlZi5wYXRoKVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdClcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdClcblx0XHRyZXR1cm4gdXBkYXRlZCAmJiBvdXRwdXQ7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBSZWN1cnNpdmVseSBnZXQgYWxsIGNoaWxkIHNjb3Blc1xuXHQgKiBAcGFyYW0gY2hpbGRzXG5cdCAqIEByZXR1cm5zIHtBcnJheX1cblx0ICogQHByaXZhdGVcblx0ICovXG5cdF9nZXRBbGxDaGlsZHMoIGNoaWxkcyA9IFtdICkge1xuXHRcdGNoaWxkcy5wdXNoKC4uLnRoaXMuXy5jaGlsZFNjb3Blcyk7XG5cdFx0dGhpcy5fLmNoaWxkU2NvcGVzLmZvckVhY2goXG5cdFx0XHRjdHggPT4ge1xuXHRcdFx0XHRjdHguX2dldEFsbENoaWxkcyhjaGlsZHMpO1xuXHRcdFx0fVxuXHRcdCk7XG5cdFx0cmV0dXJuIGNoaWxkcztcblx0fVxuXHRcblx0LyoqXG5cdCAqIFNlcmlhbGl6ZSBhbGwgYWN0aXZlIHN0b3JlcyBzdGF0ZSAmIGRhdGEgaW4gZXZlcnkgY2hpbGRzICYgbWl4ZWQgc2NvcGVzXG5cdCAqXG5cdCAqIFNjb3BlcyB3aXRob3V0IGtleSBvciBpZCBhcmUgaWdub3JlZFxuXHQgKiBAcGFyYW0gb3V0cHV0XG5cdCAqIEByZXR1cm5zIHt7fX1cblx0ICovXG5cdHNlcmlhbGl6ZSggY2ZnID0ge30sIG91dHB1dCA9IHt9ICkge1xuXHRcdGxldCBjdHggICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSB0aGlzLl8uX3Njb3BlLFxuXHRcdCAgICB7IGJhc2VJZCwga2V5LCBrZXlQSUQsIGluY3JlbWVudElkIH0gPSB0aGlzLl8sXG5cdFx0ICAgIHtcblx0XHRcdCAgICBhbGlhcyxcblx0XHRcdCAgICBwYXJlbnRBbGlhcyxcblx0XHQgICAgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID0gY2ZnLFxuXHRcdCAgICBzaWQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSBrZXlcblx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAocGFyZW50QWxpYXMgfHwga2V5UElEKSArICc+JyArIGtleVxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGFsaWFzIHx8IHBhcmVudEFsaWFzICYmIChwYXJlbnRBbGlhcyArICcvJyArIGJhc2VJZCkgfHwgdGhpcy5faWQ7XG5cdFx0XG5cdFx0XG5cdFx0Ly9hbGlhcyA9IGFsaWFzIHx8IGJhc2VJZDtcblx0XHRyZXR1cm4gdGhpcy5zZXJpYWxpemVfZXgoY2ZnLCBvdXRwdXQsIHNpZCwgYWxpYXMsIFtcIiRwYXJlbnRcIl0pXG5cdH1cblx0XG5cdHNlcmlhbGl6ZV9leCggY2ZnID0ge30sIG91dHB1dCA9IHt9LCBzaWQsIGFsaWFzLCBleGNsdWRlICkge1xuXHRcdGxldCBfICAgICAgICAgICAgICAgPSB0aGlzLl8sXG5cdFx0ICAgIGN0eCAgICAgICAgICAgICA9IF8uX3Njb3BlLFxuXHRcdCAgICB7IGluY3JlbWVudElkIH0gPSBfLFxuXHRcdCAgICB7XG5cdFx0XHQgICAgd2l0aENoaWxkcyA9IHRydWUsXG5cdFx0XHQgICAgd2l0aE1peGVkICA9IHRydWUsXG5cdFx0XHQgICAgbm9yZWZzLFxuXHRcdCAgICB9ICAgICAgICAgICAgICAgPSBjZmc7XG5cdFx0XG5cdFx0aWYgKCBrZXlXYWxrbkdldChvdXRwdXQsIHNpZCkgKSB7XG5cdFx0XHRpZiAoICFpbmNyZW1lbnRJZCApLy8gZG9uZVxuXHRcdFx0XHRyZXR1cm4gb3V0cHV0O1xuXHRcdFx0ZWxzZSBpZiAoIGluY3JlbWVudElkICkgey8vIGdlbmVyYXRlIGtleSBpZFxuXHRcdFx0XHRsZXQgaSA9IC0xO1xuXHRcdFx0XHR3aGlsZSAoIGtleVdhbGtuR2V0KG91dHB1dCwgc2lkICsgJ1snICsgKCsraSkgKyAnXScpICkgO1xuXHRcdFx0XHRzaWQgPSBzaWQgKyAnWycgKyBpICsgJ10nO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRcblx0XHRrZXlXYWxrblNldChvdXRwdXQsIHNpZCwge30pO1xuXHRcdFxuXHRcdE9iamVjdC5rZXlzKGN0eCkuZm9yRWFjaChcblx0XHRcdGlkID0+IHtcblx0XHRcdFx0aWYgKCBleGNsdWRlLmluY2x1ZGVzKGlkKSB8fCBTY29wZS5pc1N0b3JlQ2xhc3MoY3R4W2lkXSkgfHwgU2NvcGUuaXNTY29wZUNsYXNzKGN0eFtpZF0pIClcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFxuXHRcdFx0XHRjdHhbaWRdLnNlcmlhbGl6ZSh7IC4uLmNmZywgcGFyZW50QWxpYXM6IHNpZCB9LCBvdXRwdXQpO1xuXHRcdFx0fVxuXHRcdClcblx0XHRcblx0XHR3aXRoQ2hpbGRzICYmIF8uY2hpbGRTY29wZXMuZm9yRWFjaChcblx0XHRcdGN0eCA9PiB7XG5cdFx0XHRcdCFjdHguXy5pc0xvY2FsSWQgJiYgY3R4LnNlcmlhbGl6ZSh7XG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpdGhDaGlsZCAgOiB0cnVlLFxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRoUGFyZW50czogZmFsc2UsXG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudEFsaWFzOiBzaWQsXG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpdGhNaXhlZCxcblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9yZWZzLFxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgb3V0cHV0KTtcblx0XHRcdH1cblx0XHQpO1xuXHRcdFxuXHRcdHdpdGhNaXhlZCAmJiBfLl9taXhlZC5mb3JFYWNoKFxuXHRcdFx0Y3R4ID0+IHtcblx0XHRcdFx0IWN0eC5fLmlzTG9jYWxJZCAmJiBjdHguc2VyaWFsaXplKHtcblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aENoaWxkICA6IGZhbHNlLFxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRoUGFyZW50czogZmFsc2UsXG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpdGhNaXhlZCxcblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9yZWZzXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBvdXRwdXQpO1xuXHRcdFx0fVxuXHRcdCk7XG5cdFx0XG5cdFx0aWYgKCBhbGlhcyApIHtcblx0XHRcdG91dHB1dCA9IE9iamVjdC5rZXlzKG91dHB1dClcblx0XHRcdCAgICAgICAgICAgICAgIC5yZWR1Y2UoXG5cdFx0XHRcdCAgICAgICAgICAgICAgICggaCwgayApID0+IChcblx0XHRcdFx0XHQgICAgICAgICAgICAgICBoW2sgPT09IHRoaXMuX2lkXG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICA/IGFsaWFzXG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICA6IGtdID0gb3V0cHV0W2tdLFxuXHRcdFx0XHRcdFx0ICAgICAgICAgICAgICAgaFxuXHRcdFx0XHQgICAgICAgICAgICAgICApLFxuXHRcdFx0XHQgICAgICAgICAgICAgICB7fVxuXHRcdFx0ICAgICAgICAgICAgICAgKVxuXHRcdH1cblx0XHRyZXR1cm4gb3V0cHV0O1xuXHR9XG5cdFxuXHQvKipcblx0ICogUmVzdG9yZSBzdGF0ZSAmIGRhdGEgZnJvbSB0aGUgc2VyaWFsaXplIGZuXG5cdCAqIEBwYXJhbSBzbmFwc2hvdFxuXHQgKiBAcGFyYW0gZm9yY2Vcblx0ICovXG5cdHJlc3RvcmUoIHNuYXBzaG90LCBjZmcgPSB7fSwgZm9yY2UgPSBpcy5ib29sKGNmZykgJiYgY2ZnICkge1xuXHRcdGxldCBjdHggPSB0aGlzLl8uX3Njb3BlLCBzbmFwO1xuXHRcdFxuXHRcdGlmICggc25hcHNob3QgJiYgY2ZnICYmIGNmZy5hbGlhcyAmJiBjZmcuYWxpYXMgIT0gdGhpcy5faWQgKSB7XG5cdFx0XHRzbmFwID0ge1xuXHRcdFx0XHQuLi5zbmFwc2hvdCxcblx0XHRcdFx0W3RoaXMuX2lkXTogc25hcHNob3RbY2ZnLmFsaWFzXVxuXHRcdFx0fVxuXHRcdFx0ZGVsZXRlIHNuYXBbY2ZnLmFsaWFzXTtcblx0XHRcdHNuYXBzaG90ID0gc25hcDtcblx0XHR9XG5cdFx0c25hcHNob3QgPSBzbmFwc2hvdFxuXHRcdFx0JiYga2V5V2Fsa25HZXQoc25hcHNob3QsIHRoaXMuX2lkKVxuXHRcdFx0fHwgdGhpcy50YWtlU25hcHNob3RCeUtleSh0aGlzLl9pZCk7XG5cdFx0XG5cdFx0XG5cdFx0aWYgKCAhc25hcHNob3QgKVxuXHRcdFx0cmV0dXJuO1xuXHRcdFxuXHRcdHRoaXMuXy5zbmFwc2hvdCA9IHsgLi4uc25hcHNob3QgfTtcblx0XHRcblx0XHRzbmFwICAgICAgICAgID0gc25hcHNob3RbJy8nXTtcblx0XHRzbmFwc2hvdFsnLyddID0geyAuLi5zbmFwIH07XG5cdFx0c25hcCAmJiBPYmplY3Qua2V5cyhzbmFwKS5mb3JFYWNoKFxuXHRcdFx0bmFtZSA9PiB7XG5cdFx0XHRcdGlmICggbmFtZSA9PSBcIiRwYXJlbnRcIiApIHJldHVybjtcblx0XHRcdFx0XG5cdFx0XHRcdGlmICggY3R4W25hbWVdICkge1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdGlmICggZm9yY2UgJiYgIWlzLmZuKGN0eFtuYW1lXSkgKVxuXHRcdFx0XHRcdFx0Y3R4W25hbWVdLmRlc3Ryb3koKTtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHR0aGlzLl9tb3VudChuYW1lKTsvLyBxdWlldFxuXHRcdFx0XHR9XG5cdFx0XHRcdFxuXHRcdFx0fVxuXHRcdClcblx0XHRcblx0XHR0aGlzLl8uX21peGVkLmZvckVhY2goXG5cdFx0XHRjdHggPT4ge1xuXHRcdFx0XHQhY3R4Ll8uaXNMb2NhbElkICYmIGN0eC5yZXN0b3JlKHVuZGVmaW5lZCwgZm9yY2UpO1xuXHRcdFx0fVxuXHRcdCk7XG5cdFx0XG5cdFx0dGhpcy5fLmNoaWxkU2NvcGVzLmZvckVhY2goXG5cdFx0XHRjdHggPT4ge1xuXHRcdFx0XHQhY3R4Ll8uaXNMb2NhbElkICYmIGN0eC5yZXN0b3JlKHVuZGVmaW5lZCwgZm9yY2UpO1xuXHRcdFx0fVxuXHRcdCk7XG5cdH1cblx0XG5cdGdldFNuYXBzaG90QnlLZXkoIGtleSwgbG9jYWwgKSB7XG5cdFx0Ly8gb25seSBoYXZlIHRoZSBsb2NhbCBzbmFwXG5cdFx0aWYgKCB0aGlzLl8uc25hcHNob3QgJiYga2V5LnN0YXJ0c1dpdGgodGhpcy5faWQpICkge1xuXHRcdFx0bGV0IG9iaiA9IGtleVdhbGtuR2V0KHRoaXMuXy5zbmFwc2hvdCwga2V5LnN1YnN0cih0aGlzLl9pZC5sZW5ndGgpKVxuXHRcdFx0cmV0dXJuIG9iajtcblx0XHR9XG5cdFx0ZWxzZSByZXR1cm4gIWxvY2FsXG5cdFx0XHQmJiB0aGlzLnBhcmVudFxuXHRcdFx0JiYgdGhpcy5wYXJlbnQuZ2V0U25hcHNob3RCeUtleShrZXkpXG5cdFx0XHR8fFxuXHRcdFx0dGhpcy5zdG9yZXMuJHBhcmVudFxuXHRcdFx0JiYgdGhpcy5zdG9yZXMuJHBhcmVudC5nZXRTbmFwc2hvdEJ5S2V5KGtleSk7XG5cdFx0XG5cdH1cblx0XG5cdGdldFNuYXBzaG90QnlLZXlFeHQoIHNuYXBzaG90LCBrZXksIGxvY2FsICkge1xuXHRcdC8vIG9ubHkgaGF2ZSB0aGUgbG9jYWwgc25hcFxuXHRcdGlmICggc25hcHNob3QgKSB7XG5cdFx0XHRsZXQgb2JqID0ga2V5V2Fsa25HZXQoc25hcHNob3QsIGtleSlcblx0XHRcdHJldHVybiBvYmo7XG5cdFx0fVxuXHRcdFxuXHR9XG5cdFxuXHR0YWtlU25hcHNob3RCeUtleSgga2V5LCBsb2NhbCApIHtcblx0XHRpZiAoIHRoaXMuXy5zbmFwc2hvdCAmJiBrZXkuc3RhcnRzV2l0aCh0aGlzLl9pZCkgKSB7XG5cdFx0XHRsZXQgb2JqID0ga2V5V2Fsa25HZXQodGhpcy5fLnNuYXBzaG90LCBrZXkuc3Vic3RyKHRoaXMuX2lkLmxlbmd0aCkpXG5cdFx0XHRpZiAoIG9iaiApIHtcblx0XHRcdFx0dGhpcy5kZWxldGVTbmFwc2hvdEJ5S2V5KGtleSwgdHJ1ZSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gb2JqO1xuXHRcdH1cblx0XHRlbHNlIHJldHVybiAhbG9jYWxcblx0XHRcdCYmIHRoaXMucGFyZW50XG5cdFx0XHQmJiB0aGlzLnBhcmVudC50YWtlU25hcHNob3RCeUtleShrZXkpXG5cdFx0XHR8fFxuXHRcdFx0dGhpcy5zdG9yZXMuJHBhcmVudFxuXHRcdFx0JiYgdGhpcy5zdG9yZXMuJHBhcmVudC50YWtlU25hcHNob3RCeUtleShrZXkpO1xuXHR9XG5cdFxuXHRkZWxldGVTbmFwc2hvdEJ5S2V5KCBrZXksIGxvY2FsICkge1xuXHRcdGlmICggdGhpcy5fLnNuYXBzaG90ICYmIGtleS5zdGFydHNXaXRoKHRoaXMuX2lkKSApIHtcblx0XHRcdGxldCBvYmogPSBrZXlXYWxrbkdldCh0aGlzLl8uc25hcHNob3QsIGtleS5zdWJzdHIodGhpcy5faWQubGVuZ3RoKS5yZXBsYWNlKC9eKC4qW1xcPnxcXC9dKVteXFw+fFxcL10rJC9pZywgJyQxJykpXG5cdFx0XHRpZiAoIG9iaiApXG5cdFx0XHRcdGRlbGV0ZSBvYmpba2V5LnJlcGxhY2UoL14uKltcXD58XFwvXShbXlxcPnxcXC9dKykkL2lnLCAnJDEnKV1cblx0XHR9XG5cdFx0cmV0dXJuICFsb2NhbFxuXHRcdFx0JiYgdGhpcy5wYXJlbnRcblx0XHRcdCYmIHRoaXMucGFyZW50LmRlbGV0ZVNuYXBzaG90QnlLZXkoa2V5KVxuXHRcdFx0fHxcblx0XHRcdHRoaXMuc3RvcmVzLiRwYXJlbnRcblx0XHRcdCYmIHRoaXMuc3RvcmVzLiRwYXJlbnQuZGVsZXRlU25hcHNob3RCeUtleShrZXkpO1xuXHR9XG5cdFxuXHRzZXRTdGF0ZSggcFN0YXRlICkge1xuXHRcdE9iamVjdC5rZXlzKHBTdGF0ZSlcblx0XHQgICAgICAuZm9yRWFjaChrID0+ICh0aGlzLnN0YXRlW2tdID0gcFN0YXRlW2tdKSlcblx0fVxuXHRcblx0LyoqXG5cdCAqIGdldCBhIHBhcnNlZCByZWZlcmVuY2Vcblx0ICogQHBhcmFtIF9yZWZcblx0ICogQHJldHVybnMge3tzdG9yZUlkLCBwYXRoLCBhbGlhczogKiwgcmVmOiAqfX1cblx0ICovXG5cdHBhcnNlUmVmKCBfcmVmICkge1xuXHRcdGlmICggdHlwZW9mIF9yZWYgIT09ICdzdHJpbmcnICkgey8vIEB0b2RvIDogcm0gdGhpc1xuXHRcdFx0dGhpcy5yZWdpc3Rlcih7IFtfcmVmLm5hbWVdOiBfcmVmLnN0b3JlIH0pO1xuXHRcdFx0X3JlZiA9IF9yZWYubmFtZTtcblx0XHR9XG5cdFx0bGV0IHJlZiA9IF9yZWYuc3BsaXQoJzonKTtcblx0XHRyZWZbMF0gID0gcmVmWzBdLnNwbGl0KCcuJyk7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHN0b3JlSWQ6IHJlZlswXVswXSxcblx0XHRcdHBhdGggICA6IHJlZlswXSxcblx0XHRcdGFsaWFzICA6IHJlZlsxXSB8fCByZWZbMF1bcmVmWzBdLmxlbmd0aCAtIDFdLFxuXHRcdFx0cmVmICAgIDogX3JlZlxuXHRcdH07XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBEaXNwYXRjaCBhbiBhY3Rpb24gdG8gdGhlIHRvcCBwYXJlbnQgJiBtaXhlZCBzY29wZXMsIGluIGFsbCBzdG9yZXNcblx0ICpcblx0ICogQHBhcmFtIGFjdGlvblxuXHQgKiBAcGFyYW0gZGF0YVxuXHQgKiBAcmV0dXJucyB7U2NvcGV9XG5cdCAqL1xuXHRkaXNwYXRjaCggYWN0aW9uLCAuLi5hcmd6ICkge1xuXHRcdGlmICggdGhpcy5kZWFkICkge1xuXHRcdFx0Y29uc29sZS53YXJuKFwiRGlzcGF0Y2ggd2FzIGNhbGxlZCBvbiBhIGRlYWQgc2NvcGUsIGNoZWNrIHlvdSdyZSBhc3luYyBmdW5jdGlvbnMgaW4gdGhpcyBzdGFjay4uLlwiLCAobmV3IEVycm9yKCkpLnN0YWNrKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0bGV0IGJBY3RzID0gdGhpcy5fLl9ib3VuZGVkQWN0aW9ucztcblx0XHRPYmplY3Qua2V5cyh0aGlzLl8uX3Njb3BlKVxuXHRcdCAgICAgIC5mb3JFYWNoKFxuXHRcdFx0ICAgICAgaWQgPT4ge1xuXHRcdFx0XHQgICAgICBpZiAoIGlkID09IFwiJHBhcmVudFwiICkgcmV0dXJuO1xuXHRcdFx0XHQgICAgICBpZiAoICFpcy5mbih0aGlzLl8uX3Njb3BlW2lkXSkgKVxuXHRcdFx0XHRcdCAgICAgIHRoaXMuXy5fc2NvcGVbaWRdLnRyaWdnZXIoYWN0aW9uLCAuLi5hcmd6KTtcblx0XHRcdCAgICAgIH1cblx0XHQgICAgICApO1xuXHRcdFxuXHRcdGlmICggYkFjdHMgJiYgYkFjdHMudGVzdChhY3Rpb24pIClcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFxuXHRcdHRoaXMuXy5fbWl4ZWQuZm9yRWFjaCgoIGN0eCApID0+IChjdHguZGlzcGF0Y2goYWN0aW9uLCAuLi5hcmd6KSkpO1xuXHRcdHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LmRpc3BhdGNoKGFjdGlvbiwgLi4uYXJneik7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblx0XG5cdHRyaWdnZXIoKSB7XG5cdFx0dGhpcy5kaXNwYXRjaCguLi5hcmd1bWVudHMpO1xuXHR9XG5cdFxuXHQvKipcblx0ICogb25jZSgnc3RhYmxlJywgY2IpXG5cdCAqIEBwYXJhbSBvYmoge1JlYWN0LkNvbXBvbmVudHxTdG9yZXxmdW5jdGlvbilcblx0ICogQHBhcmFtIGtleSB7c3RyaW5nfSBvcHRpb25hbCBrZXkgd2hlcmUgdG8gbWFwIHRoZSBwdWJsaWMgc3RhdGVcblx0ICovXG5cdHRoZW4oIGNiICkge1xuXHRcdGlmICggIXRoaXMuX3N0YWJsZSApXG5cdFx0XHRyZXR1cm4gdGhpcy5vbmNlKCdzdGFibGUnLCBlID0+IHRoaXMudGhlbihjYikpO1xuXHRcdFxuXHRcdHJldHVybiBjYih0aGlzLmRhdGEpO1xuXHR9XG5cdFxuXHRvbmNlU3RhYmxlVHJlZSggY2IgKSB7XG5cdFx0aWYgKCB0aGlzLl8udW5TdGFibGVDaGlsZHMgKVxuXHRcdFx0cmV0dXJuIHRoaXMub25jZSgnc3RhYmxlVHJlZScsIGUgPT4gdGhpcy5vbmNlU3RhYmxlVHJlZShjYikpO1xuXHRcdHJldHVybiBjYih0aGlzLmRhdGEpO1xuXHR9XG5cdFxuXHQvKipcblx0ICogQ2FsbCByZXRhaW4gb24gdGhlIHNjb3BlZCBzdG9yZXMgYmFzaW5nIHRoZSBnaXZlbiBsaXN0XG5cdCAqXG5cdCAqIEBwYXJhbSBzdG9yZXNcblx0ICogQHBhcmFtIHJlYXNvblxuXHQgKi9cblx0cmV0YWluU3RvcmVzKCBzdG9yZXMgPSBbXSwgcmVhc29uICkge1xuXHRcdHN0b3Jlcy5mb3JFYWNoKFxuXHRcdFx0aWQgPT4gKHRoaXMuc3RvcmVzW2lkXSAmJiB0aGlzLnN0b3Jlc1tpZF0ucmV0YWluICYmIHRoaXMuc3RvcmVzW2lkXS5yZXRhaW4ocmVhc29uKSlcblx0XHQpXG5cdH1cblx0XG5cdC8qKlxuXHQgKiBDYWxsIHJldGFpbiBvbiB0aGUgc2NvcGVkIHN0b3Jlc1xuXHQgKlxuXHQgKiBAcGFyYW0gc3RvcmVzXG5cdCAqIEBwYXJhbSByZWFzb25cblx0ICovXG5cdGRpc3Bvc2VTdG9yZXMoIHN0b3JlcyA9IFtdLCByZWFzb24gKSB7XG5cdFx0c3RvcmVzLmZvckVhY2goXG5cdFx0XHRpZCA9PiAodGhpcy5zdG9yZXNbaWRdICYmIHRoaXMuc3RvcmVzW2lkXS5kaXNwb3NlICYmIHRoaXMuc3RvcmVzW2lkXS5kaXNwb3NlKHJlYXNvbikpXG5cdFx0KVxuXHR9XG5cdFxuXHQvKipcblx0ICogS2VlcCB0aGUgc2NvcGUgdW5zdGFibGUgdW50aWwgcmVsZWFzZSBpcyBjYWxsZWRcblx0ICogQHBhcmFtIHJlYXNvblxuXHQgKi9cblx0d2FpdCggcmVhc29uICkge1xuXHRcdC8vY29uc29sZS5sb2coXCJ3YWl0XCIsIHJlYXNvbik7XG5cdFx0dGhpcy5fc3RhYmxlICYmICF0aGlzLl9fbG9ja3MuYWxsICYmIHRoaXMuZW1pdChcInVuc3RhYmxlXCIsIHRoaXMpO1xuXHRcdHRoaXMuX3N0YWJsZSA9IGZhbHNlO1xuXHRcdHRoaXMuX19sb2Nrcy5hbGwrKztcblx0XHRpZiAoIHJlYXNvbiApIHtcblx0XHRcdHRoaXMuX19sb2Nrc1tyZWFzb25dID0gdGhpcy5fX2xvY2tzW3JlYXNvbl0gfHwgMDtcblx0XHRcdHRoaXMuX19sb2Nrc1tyZWFzb25dKys7XG5cdFx0fVxuXHR9XG5cdFxuXHQvKipcblx0ICogU3RhYmlsaXplIHRoZSBzY29wZSBpZiBubyBtb3JlIGxvY2tzIHJlbWFpbiAod2FpdCBmbilcblx0ICogQHBhcmFtIHJlYXNvblxuXHQgKi9cblx0cmVsZWFzZSggcmVhc29uICkge1xuXHRcdFxuXHRcdGlmICggcmVhc29uICkge1xuXHRcdFx0aWYgKCB0aGlzLl9fbG9ja3NbcmVhc29uXSA9PSAwIClcblx0XHRcdFx0Y29uc29sZS5lcnJvcihcIlJlbGVhc2UgbW9yZSB0aGFuIGxvY2tpbmcgIVwiLCByZWFzb24pO1xuXHRcdFx0dGhpcy5fX2xvY2tzW3JlYXNvbl0gPSB0aGlzLl9fbG9ja3NbcmVhc29uXSB8fCAwO1xuXHRcdFx0dGhpcy5fX2xvY2tzW3JlYXNvbl0tLTtcblx0XHR9XG5cdFx0aWYgKCAhcmVhc29uICYmIHRoaXMuX19sb2Nrcy5hbGwgPT0gMCApXG5cdFx0XHRjb25zb2xlLmVycm9yKFwiUmVsZWFzZSBtb3JlIHRoYW4gbG9ja2luZyAhXCIpO1xuXHRcdFxuXHRcdHRoaXMuX19sb2Nrcy5hbGwtLTtcblx0XHRpZiAoICF0aGlzLl9fbG9ja3MuYWxsICkge1xuXHRcdFx0aWYgKCB0aGlzLl8uc3RhYmlsaXplclRNIClcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0dGhpcy5fLnN0YWJpbGl6ZXJUTSAmJiBjbGVhclRpbWVvdXQodGhpcy5fLnN0YWJpbGl6ZXJUTSk7XG5cdFx0XHRcblx0XHRcdHRoaXMuXy5zdGFiaWxpemVyVE0gPSBzZXRUaW1lb3V0KFxuXHRcdFx0XHRlID0+IHtcblx0XHRcdFx0XHR0aGlzLl8uc3RhYmlsaXplclRNID0gbnVsbDtcblx0XHRcdFx0XHRpZiAoIHRoaXMuX19sb2Nrcy5hbGwgKVxuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdHRoaXMuXy5wcm9wYWdUTSAmJiBjbGVhclRpbWVvdXQodGhpcy5fLnByb3BhZ1RNKTtcblx0XHRcdFx0XHR0aGlzLl9yZXYrKztcblx0XHRcdFx0XHR0aGlzLl9zdGFibGUgPSB0cnVlO1xuXHRcdFx0XHRcdHRoaXMuZW1pdChcInN0YWJsZVwiLCB0aGlzKTtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHQhdGhpcy5kZWFkICYmIHRoaXMuX3Byb3BhZygpOy8vIHN0YWJpbGl0eSBjYW4gaW5kdWNlIGRlc3Ryb3lcblx0XHRcdFx0fVxuXHRcdFx0KTtcblx0XHR9XG5cdFx0XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBQcm9wYWcgc3RvcmVzIHVwZGF0ZXMgYmFzaW5nIHRoZWlycyBsYXN0IHVwZGF0ZXNcblx0ICovXG5cdHByb3BhZygpIHtcblx0XHR0aGlzLl8ucHJvcGFnVE0gJiYgY2xlYXJUaW1lb3V0KHRoaXMuXy5wcm9wYWdUTSk7XG5cdFx0dGhpcy5fLnByb3BhZ1RNID0gc2V0VGltZW91dChcblx0XHRcdGUgPT4ge1xuXHRcdFx0XHR0aGlzLl8ucHJvcGFnVE0gPSBudWxsO1xuXHRcdFx0XHR0aGlzLl9wcm9wYWcoKVxuXHRcdFx0fSwgMlxuXHRcdCk7XG5cdH1cblx0XG5cdF9wcm9wYWcoKSB7XG5cdFx0aWYgKCB0aGlzLl8uZm9sbG93ZXJzLmxlbmd0aCApXG5cdFx0XHR0aGlzLl8uZm9sbG93ZXJzLmZvckVhY2goKCB7IDA6IG9iaiwgMToga2V5LCAyOiBhcywgMzogbGFzdFJldnMsIDM6IHJlbWFwcyB9ICkgPT4ge1xuXHRcdFx0XHRsZXQgZGF0YSA9IHRoaXMuZ2V0VXBkYXRlcyhsYXN0UmV2cyk7XG5cdFx0XHRcdGlmICggIWRhdGEgKSByZXR1cm47XG5cdFx0XHRcdC8vY29uc29sZS5sb2coZGF0YSwgbGFzdFJldnMpXG5cdFx0XHRcdGlmICggdHlwZW9mIG9iaiAhPSBcImZ1bmN0aW9uXCIgKSB7XG5cdFx0XHRcdFx0Ly9jb25zb2xlLmxvZyhcInNldFN0YXRlIFwiLG9iaiwgT2JqZWN0LmtleXMoZGF0YSkpXG5cdFx0XHRcdFx0aWYgKCBhcyApIG9iai5zZXRTdGF0ZSh7IFthc106IGRhdGEgfSk7XG5cdFx0XHRcdFx0ZWxzZSBvYmouc2V0U3RhdGUoZGF0YSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0b2JqKGRhdGEsIGxhc3RSZXZzICYmIFsuLi5sYXN0UmV2c10gfHwgXCJubyByZXZzXCIpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIGxhc3RSZXZzICYmXG5cdFx0XHRcdC8vIGtleS5mb3JFYWNoKGlkID0+IChsYXN0UmV2c1tpZF0gPSB0aGlzLnN0b3Jlc1tpZF0gJiZcblx0XHRcdFx0Ly8gdGhpcy5zdG9yZXNbaWRdLl9yZXYgfHwgMCkpO1xuXHRcdFx0fSk7XG5cdFx0dGhpcy5lbWl0KFwidXBkYXRlXCIsIHRoaXMuZ2V0VXBkYXRlcygpKTtcblx0fVxuXHRcblx0LyoqXG5cdCAqIGlzIHN0YWJsZVxuXHQgKiBAcmV0dXJucyBib29sXG5cdCAqL1xuXHRpc1N0YWJsZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5fc3RhYmxlO1xuXHR9XG5cdFxuXHQvKipcblx0ICogaXMgc3RhYmxlIHRyZWVcblx0ICogQHJldHVybnMgYm9vbFxuXHQgKi9cblx0aXNTdGFibGVUcmVlKCkge1xuXHRcdHJldHVybiAhdGhpcy5fLnVuU3RhYmxlQ2hpbGRzO1xuXHR9XG5cdFxuXHQvKipcblx0ICogUmVnaXN0ZXIgY2hpbGRyZW5cblx0ICogQHBhcmFtIHNjb3BlXG5cdCAqIEBwcml2YXRlXG5cdCAqL1xuXHRfYWRkQ2hpbGQoIHNjb3BlICkge1xuXHRcdHRoaXMuXy5jaGlsZFNjb3Blcy5wdXNoKHNjb3BlKTtcblx0XHR0aGlzLl8uc2VlbkNoaWxkcysrO1xuXHRcdGxldCBsaXN0cyAgICAgPSB7XG5cdFx0XHQgICAgJ3N0YWJsZScgICAgICA6IHMgPT4ge1xuXHRcdFx0XHQgICAgdGhpcy5fLnVuU3RhYmxlQ2hpbGRzLS07XG5cdFx0XHRcdCAgICBpZiAoICF0aGlzLl8udW5TdGFibGVDaGlsZHMgKVxuXHRcdFx0XHRcdCAgICB0aGlzLmVtaXQoXCJzdGFibGVUcmVlXCIsIHRoaXMpXG5cdFx0XHQgICAgfSxcblx0XHRcdCAgICAndW5zdGFibGUnICAgIDogcyA9PiB7XG5cdFx0XHRcdCAgICB0aGlzLl8udW5TdGFibGVDaGlsZHMrKztcblx0XHRcdFx0ICAgIGlmICggMSA9PSB0aGlzLl8udW5TdGFibGVDaGlsZHMgKVxuXHRcdFx0XHRcdCAgICB0aGlzLmVtaXQoXCJ1bnN0YWJsZVRyZWVcIiwgdGhpcylcblx0XHRcdCAgICB9LFxuXHRcdFx0ICAgICdzdGFibGVUcmVlJyAgOiBzID0+IHtcblx0XHRcdFx0ICAgIHRoaXMuXy51blN0YWJsZUNoaWxkcy0tO1xuXHRcdFx0XHQgICAgaWYgKCAhdGhpcy5fLnVuU3RhYmxlQ2hpbGRzIClcblx0XHRcdFx0XHQgICAgdGhpcy5lbWl0KFwic3RhYmxlVHJlZVwiLCB0aGlzKVxuXHRcdFx0ICAgIH0sXG5cdFx0XHQgICAgJ3Vuc3RhYmxlVHJlZSc6IHMgPT4ge1xuXHRcdFx0XHQgICAgdGhpcy5fLnVuU3RhYmxlQ2hpbGRzKys7XG5cdFx0XHRcdCAgICBpZiAoIDEgPT0gdGhpcy5fLnVuU3RhYmxlQ2hpbGRzIClcblx0XHRcdFx0XHQgICAgdGhpcy5lbWl0KFwidW5zdGFibGVUcmVlXCIsIHRoaXMpXG5cdFx0XHQgICAgfSxcblx0XHRcdCAgICAnZGVzdHJveScgICAgIDogY3R4ID0+IHtcblx0XHRcdFx0ICAgIGlmICggY3R4Ll8udW5TdGFibGVDaGlsZHMgKVxuXHRcdFx0XHRcdCAgICB0aGlzLl8udW5TdGFibGVDaGlsZHMtLTtcblx0XHRcdFx0ICAgIGlmICggIWN0eC5pc1N0YWJsZSgpIClcblx0XHRcdFx0XHQgICAgdGhpcy5fLnVuU3RhYmxlQ2hpbGRzLS07XG5cdFx0XHRcdFxuXHRcdFx0XHQgICAgaWYgKCAhdGhpcy5fLnVuU3RhYmxlQ2hpbGRzIClcblx0XHRcdFx0XHQgICAgdGhpcy5lbWl0KFwic3RhYmxlVHJlZVwiLCB0aGlzKVxuXHRcdFx0ICAgIH1cblx0XHQgICAgfSxcblx0XHQgICAgd2FzU3RhYmxlID0gdGhpcy5fLnVuU3RhYmxlQ2hpbGRzO1xuXHRcdFxuXHRcdCFzY29wZS5pc1N0YWJsZSgpICYmIHRoaXMuXy51blN0YWJsZUNoaWxkcysrO1xuXHRcdHNjb3BlLl8udW5TdGFibGVDaGlsZHMgJiYgdGhpcy5fLnVuU3RhYmxlQ2hpbGRzKys7XG5cdFx0dGhpcy5fLmNoaWxkU2NvcGVzTGlzdC5wdXNoKGxpc3RzKTtcblx0XHRcblx0XHRpZiAoICF3YXNTdGFibGUgJiYgdGhpcy5fLnVuU3RhYmxlQ2hpbGRzIClcblx0XHRcdHRoaXMuZW1pdChcInVuc3RhYmxlVHJlZVwiLCB0aGlzKTtcblx0XHRcblx0XHRzY29wZS5vbihsaXN0cyk7XG5cdH1cblx0XG5cdF9ybUNoaWxkKCBjdHggKSB7XG5cdFx0bGV0IGkgICAgICAgICA9IHRoaXMuXy5jaGlsZFNjb3Blcy5pbmRleE9mKGN0eCksXG5cdFx0ICAgIHdhc1N0YWJsZSA9IHRoaXMuXy51blN0YWJsZUNoaWxkcztcblx0XHRpZiAoIGkgIT0gLTEgKSB7XG5cdFx0XHR0aGlzLl8uY2hpbGRTY29wZXMuc3BsaWNlKGksIDEpO1xuXHRcdFx0IWN0eC5pc1N0YWJsZSgpICYmIHRoaXMuXy51blN0YWJsZUNoaWxkcy0tO1xuXHRcdFx0Y3R4Ll8udW5TdGFibGVDaGlsZHMgJiYgdGhpcy5fLnVuU3RhYmxlQ2hpbGRzLS07XG5cdFx0XHRjdHgudW4odGhpcy5fLmNoaWxkU2NvcGVzTGlzdC5zcGxpY2UoaSwgMSlbMF0pO1xuXHRcdFx0aWYgKCB3YXNTdGFibGUgJiYgIXRoaXMuXy51blN0YWJsZUNoaWxkcyApXG5cdFx0XHRcdHRoaXMuZW1pdChcInN0YWJsZVRyZWVcIilcblx0XHR9XG5cdH1cblx0XG5cdHJldGFpbiggcmVhc29uICkge1xuXHRcdHRoaXMuX19yZXRhaW5zLmFsbCsrO1xuXHRcdC8vY29uc29sZS5sb2coXCJyZXRhaW5cIiwgdGhpcy5faWQsIHJlYXNvbik7XG5cdFx0aWYgKCByZWFzb24gKSB7XG5cdFx0XHR0aGlzLl9fcmV0YWluc1tyZWFzb25dID0gdGhpcy5fX3JldGFpbnNbcmVhc29uXSB8fCAwO1xuXHRcdFx0dGhpcy5fX3JldGFpbnNbcmVhc29uXSsrO1xuXHRcdH1cblx0fVxuXHRcblx0ZGlzcG9zZSggcmVhc29uICkge1xuXHRcdC8vY29uc29sZS5sb2coXCJkaXNwb3NlXCIsIHRoaXMuX2lkLCByZWFzb24pO1xuXHRcdGlmICggcmVhc29uICkge1xuXHRcdFx0aWYgKCAhdGhpcy5fX3JldGFpbnNbcmVhc29uXSApXG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIkRpc3Bvc2UgbW9yZSB0aGFuIHJldGFpbmluZyA6IFwiICsgcmVhc29uKTtcblx0XHRcdHRoaXMuX19yZXRhaW5zW3JlYXNvbl0tLTtcblx0XHR9XG5cdFx0XG5cdFx0aWYgKCAhdGhpcy5fX3JldGFpbnMuYWxsIClcblx0XHRcdHRocm93IG5ldyBFcnJvcihcIkRpc3Bvc2UgbW9yZSB0aGFuIHJldGFpbmluZyAhXCIpO1xuXHRcdFxuXHRcdHRoaXMuX19yZXRhaW5zLmFsbC0tO1xuXHRcdFxuXHRcdGlmICggIXRoaXMuX19yZXRhaW5zLmFsbCApIHtcblx0XHRcdC8vY29uc29sZS5sb2coXCJkaXNwb3NlIGRvIGRlc3Ryb3kgXCIsIHRoaXMuX2lkLCB0aGlzLl9wZXJzaXN0ZW5jZVRtKTtcblx0XHRcdGlmICggdGhpcy5fLnBlcnNpc3RlbmNlVG0gKSB7XG5cdFx0XHRcdHRoaXMuXy5kZXN0cm95VE0gJiYgY2xlYXJUaW1lb3V0KHRoaXMuXy5kZXN0cm95VE0pO1xuXHRcdFx0XHR0aGlzLl8uZGVzdHJveVRNID0gc2V0VGltZW91dChcblx0XHRcdFx0XHRlID0+IHtcblx0XHRcdFx0XHRcdHRoaXMudGhlbihzID0+IHtcblx0XHRcdFx0XHRcdFx0IXRoaXMuX19yZXRhaW5zLmFsbCAmJiAhdGhpcy5kZWFkICYmIHRoaXMuZGVzdHJveSgpXG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHRoaXMuXy5wZXJzaXN0ZW5jZVRtXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0dGhpcy50aGVuKHMgPT5cblx0XHRcdFx0XHQgICAgICAgICAgKCF0aGlzLl9fcmV0YWlucy5hbGwgJiYgIXRoaXMuZGVhZCAmJiB0aGlzLmRlc3Ryb3koKSlcblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBvcmRlciBkZXN0cm95IG9mIGxvY2FsIHN0b3Jlc1xuXHQgKi9cblx0ZGVzdHJveSgpIHtcblx0XHRsZXQgY3R4ID0gdGhpcy5fLl9zY29wZTtcblx0XHQvL2NvbnNvbGUud2FybihcImRlc3Ryb3lcIiwgdGhpcy5faWQpO1xuXHRcdHRoaXMuX2dldEFsbENoaWxkcygpLm1hcChzY29wZSA9PiBzY29wZS5kZXN0cm95KCkpXG5cdFx0Zm9yICggbGV0IGtleSBpbiBjdHggKVxuXHRcdFx0aWYgKCAhaXMuZm4oY3R4W2tleV0pICkge1xuXHRcdFx0XHRpZiAoIGtleSA9PSBcIiRwYXJlbnRcIiApIGNvbnRpbnVlO1xuXHRcdFx0XHQhY3R4W2tleV0uX2F1dG9EZXN0cm95ICYmIGN0eFtrZXldLmRpc3Bvc2UoXCJzY29wZWRcIik7XG5cdFx0XHR9XG5cdFx0dGhpcy5fLnN0YWJpbGl6ZXJUTSAmJiBjbGVhclRpbWVvdXQodGhpcy5fLnN0YWJpbGl6ZXJUTSk7XG5cdFx0dGhpcy5fLnByb3BhZ1RNICYmIGNsZWFyVGltZW91dCh0aGlzLl8ucHJvcGFnVE0pO1xuXHRcdE9iamVjdC5rZXlzKFxuXHRcdFx0dGhpcy5fLl9saXN0ZW5pbmdcblx0XHQpLmZvckVhY2goXG5cdFx0XHRpZCA9PiAoKGlkICE9PSBcIiRwYXJlbnRcIikgJiYgdGhpcy5fLl9zY29wZVtpZF0ucmVtb3ZlTGlzdGVuZXIodGhpcy5fLl9saXN0ZW5pbmdbaWRdKSlcblx0XHQpO1xuXHRcdHdoaWxlICggdGhpcy5fLl9taXhlZExpc3QubGVuZ3RoICkge1xuXHRcdFx0dGhpcy5fLl9taXhlZFswXS5yZW1vdmVMaXN0ZW5lcih0aGlzLl8uX21peGVkTGlzdC5zaGlmdCgpKTtcblx0XHRcdHRoaXMuXy5fbWl4ZWQuc2hpZnQoKS5kaXNwb3NlKFwibWl4ZWRUb1wiKTtcblx0XHR9XG5cdFx0Wy4uLnRoaXMuXy5mb2xsb3dlcnNdLm1hcChmb2xsb3dlciA9PiB0aGlzLnVuQmluZCguLi5mb2xsb3dlcikpO1xuXHRcdGlmICggdGhpcy5fLl9wYXJlbnRMaXN0ICkge1xuXHRcdFx0dGhpcy5wYXJlbnQuX3JtQ2hpbGQodGhpcyk7XG5cdFx0XHR0aGlzLnBhcmVudC5yZW1vdmVMaXN0ZW5lcih0aGlzLl8uX3BhcmVudExpc3QpO1xuXHRcdFx0dGhpcy5wYXJlbnQuZGlzcG9zZShcImlzTXlQYXJlbnRcIik7XG5cdFx0XHR0aGlzLl8uX3BhcmVudExpc3QgPSBudWxsO1xuXHRcdH1cblx0XHR0aGlzLmRlYWQgPSB0cnVlO1xuXHRcdGRlbGV0ZSBhbGxTY29wZXNbdGhpcy5faWRdO1xuXHRcdHRoaXMuZW1pdChcImRlc3Ryb3lcIiwgdGhpcyk7XG5cdFx0XG5cdFx0XG5cdH1cbn1cblxuXG5TY29wZS5pc1Njb3BlID0gZnVuY3Rpb24gKCBvYmogKSB7XG5cdHJldHVybiBvYmogaW5zdGFuY2VvZiBTY29wZVxufTtcblxuU2NvcGUuaXNTY29wZUNsYXNzID0gZnVuY3Rpb24gKCBvYmogKSB7XG5cdHJldHVybiBTY29wZS5pc1Byb3RvdHlwZU9mKG9iaikgfHwgb2JqID09PSBTY29wZVxufTtcbmV4cG9ydCBkZWZhdWx0IFNjb3BlO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9TY29wZS5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImlzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiaXNcIlxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzaG9ydGlkXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwic2hvcnRpZFwiXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXG4gKiBUaGUgTUlUIExpY2Vuc2UgKE1JVClcbiAqIENvcHlyaWdodCAoYykgMjAxOS4gV2lzZSBXaWxkIFdlYlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUg4oCcU29mdHdhcmXigJ0pLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQg4oCcQVMgSVPigJ0sIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuICpcbiAqICBAYXV0aG9yIDogTmF0aGFuYWVsIEJyYXVuXG4gKiAgQGNvbnRhY3QgOiBuOHR6LmpzQGdtYWlsLmNvbVxuICovXG5cbmltcG9ydCBpcyBmcm9tICdpcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVtaXR0ZXIge1xuXHRfZXZlbnRzID0ge307XG5cdFxuXHRvbiggZXZ0LCBjYiApIHtcblx0XHRpZiAoICFpcy5zdHJpbmcoZXZ0KSAmJiBldnQgKVxuXHRcdFx0cmV0dXJuIE9iamVjdC5rZXlzKGV2dCkuZm9yRWFjaChrID0+IHRoaXMub24oaywgZXZ0W2tdKSk7XG5cdFx0XG5cdFx0dGhpcy5fZXZlbnRzW2V2dF0gPSB0aGlzLl9ldmVudHNbZXZ0XSB8fCBbXTtcblx0XHR0aGlzLl9ldmVudHNbZXZ0XS5wdXNoKGNiKTtcblx0fVxuXHRcblx0dW4oIGV2dCwgY2IgKSB7XG5cdFx0aWYgKCAhaXMuc3RyaW5nKGV2dCkgJiYgZXZ0IClcblx0XHRcdHJldHVybiBPYmplY3Qua2V5cyhldnQpLmZvckVhY2goayA9PiB0aGlzLnVuKGssIGV2dFtrXSkpO1xuXHRcdFxuXHRcdGlmICggIXRoaXMuX2V2ZW50c1tldnRdICkgcmV0dXJuO1xuXHRcdGxldCBpID0gdGhpcy5fZXZlbnRzW2V2dF0uaW5kZXhPZihjYik7XG5cdFx0dGhpcy5fZXZlbnRzW2V2dF0uc3BsaWNlKGksIDEpO1xuXHR9XG5cdFxuXHRlbWl0KCBldnQsIC4uLmFyZ3ogKSB7XG5cdFx0aWYgKCAhdGhpcy5fZXZlbnRzW2V2dF0gKSByZXR1cm47XG5cdFx0bGV0IGxpc3RzID0gWy4uLnRoaXMuX2V2ZW50c1tldnRdXTtcblx0XHRcblx0XHRmb3IgKCBsZXQgaSA9IDA7IGkgPCBsaXN0cy5sZW5ndGg7IGkrKyApXG5cdFx0XHRsaXN0c1tpXSguLi5hcmd6KVxuXHR9XG5cdFxuXHRhZGRMaXN0ZW5lcigpIHtcblx0XHR0aGlzLm9uKC4uLmFyZ3VtZW50cyk7XG5cdH1cblx0XG5cdHJlbW92ZUxpc3RlbmVyKCkge1xuXHRcdHRoaXMudW4oLi4uYXJndW1lbnRzKTtcblx0fVxuXHRcblx0cmVtb3ZlQWxsTGlzdGVuZXJzKCkge1xuXHRcdHRoaXMuX2V2ZW50cyA9IHt9O1xuXHR9XG5cdFxuXHRvbmNlKCBldnQsIGNiICkge1xuXHRcdGxldCBmbjtcblx0XHR0aGlzLm9uKGV2dCwgZm4gPSAoIC4uLmFyZ3ogKSA9PiB7XG5cdFx0XHR0aGlzLnVuKGV2dCwgZm4pO1xuXHRcdFx0Y2IoLi4uYXJneilcblx0XHR9KTtcblx0fVxuXHRcblx0XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWxzL0VtaXR0ZXIuanMiLCIvKlxuICogVGhlIE1JVCBMaWNlbnNlIChNSVQpXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTkuIFdpc2UgV2lsZCBXZWJcbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIOKAnFNvZnR3YXJl4oCdKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIOKAnEFTIElT4oCdLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiAqXG4gKiAgQGF1dGhvciA6IE5hdGhhbmFlbCBCcmF1blxuICogIEBjb250YWN0IDogbjh0ei5qc0BnbWFpbC5jb21cbiAqL1xuXG5jb25zdCBpcyA9IHJlcXVpcmUoJ2lzJyk7XG5cbmV4cG9ydCBmdW5jdGlvbiB3YWxrblNldCggb2JqLCBwYXRoLCB2YWx1ZSwgc3RhY2sgKSB7XG5cdGlmICggaXMuc3RyaW5nKHBhdGgpIClcblx0XHRwYXRoID0gcGF0aC5zcGxpdCgnLicpO1xuXHRpZiAoICFwYXRoLmxlbmd0aCApXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHRlbHNlIGlmICggcGF0aC5sZW5ndGggPT0gMSApXG5cdFx0cmV0dXJuIG9ialtwYXRoWzBdXSA9IHN0YWNrXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgID8gWy4uLihvYmpbcGF0aFswXV0gfHwgW10pLCB2YWx1ZV1cblx0XHQgICAgICAgICAgICAgICAgICAgICAgOiB2YWx1ZTtcblx0ZWxzZVxuXHRcdHJldHVybiB3YWxrblNldChcblx0XHRcdG9ialtwYXRoWzBdXSA9XG5cdFx0XHRcdG9ialtwYXRoWzBdXSB8fCB7fSxcblx0XHRcdHBhdGguc2xpY2UoMSksXG5cdFx0XHR2YWx1ZSwgc3RhY2tcblx0XHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gd2Fsa25HZXQoIG9iaiwgcGF0aCwgaXNLZXkgKSB7XG5cdGlmICggaXMuc3RyaW5nKHBhdGgpIClcblx0XHRwYXRoID0gcGF0aC5zcGxpdCgnLicpO1xuXHRyZXR1cm4gcGF0aC5sZW5ndGhcblx0ICAgICAgID8gb2JqW3BhdGhbMF1dICYmIHdhbGtuR2V0KG9ialtwYXRoWzBdXSwgcGF0aC5zbGljZSgxKSlcblx0ICAgICAgIDogb2JqO1xufVxuXG4vL0B0b2RvXG5leHBvcnQgZnVuY3Rpb24ga2V5V2Fsa25TZXQoIG9iaiwgcGF0aCwgdmFsdWUsIHN0YWNrICkge1xuXHRpZiAoIGlzLnN0cmluZyhwYXRoKSApXG5cdFx0cGF0aCA9IHBhdGguc3BsaXQoLyhcXD58XFwvKS9pZykuZmlsdGVyKHYgPT4gKHYgIT09ICc+JyAmJiB2KSk7XG5cdHJldHVybiB3YWxrblNldChvYmosIHBhdGgsIHZhbHVlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGtleVdhbGtuR2V0KCBvYmosIHBhdGgsIGlzS2V5ICkge1xuXHRpZiAoIGlzLnN0cmluZyhwYXRoKSApXG5cdFx0cGF0aCA9IHBhdGguc3BsaXQoLyhcXD58XFwvKS9pZykuZmlsdGVyKHYgPT4gKHYgIT09ICc+JyAmJiB2KSk7XG5cdHJldHVybiBwYXRoLmxlbmd0aFxuXHQgICAgICAgPyBvYmpbcGF0aFswXV0gJiYgd2Fsa25HZXQob2JqW3BhdGhbMF1dLCBwYXRoLnNsaWNlKDEpKVxuXHQgICAgICAgOiBvYmo7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWxzL3V0aWxzLmpzIiwiLypcbiAqIFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuICogQ29weXJpZ2h0IChjKSAyMDE5LiBXaXNlIFdpbGQgV2ViXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSDigJxTb2Z0d2FyZeKAnSksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCDigJxBUyBJU+KAnSwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4gKlxuICogIEBhdXRob3IgOiBOYXRoYW5hZWwgQnJhdW5cbiAqICBAY29udGFjdCA6IG44dHouanNAZ21haWwuY29tXG4gKi9cblxuY29uc3QgaXMgICAgICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJ2lzJyksXG4gICAgICBTY29wZSAgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9TY29wZScpLFxuICAgICAgeyBrZXlXYWxrblNldCwga2V5V2Fsa25HZXQgfSA9IHJlcXVpcmUoJy4vdXRpbHMvdXRpbHMnKSxcbiAgICAgIEV2ZW50RW1pdHRlciAgICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL3V0aWxzL0VtaXR0ZXInKSxcbiAgICAgIFRhc2tTZXF1ZW5jZXIgICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL3V0aWxzL1Rhc2tTZXF1ZW5jZXInKSxcbiAgICAgIHNob3J0aWQgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlKCdzaG9ydGlkJyksXG4gICAgICBvYmpQcm90byAgICAgICAgICAgICAgICAgICAgID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHt9KTtcblxuY2xhc3MgU3RvcmUgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuXHQvL3N0YXRpYyB1c2UgICAgICAgICAgICAgICAgICA9IFtdOy8vIG92ZXJyaWRhYmxlIGxpc3Qgb2Ygc291cmNlIHN0b3Jlc1xuXHRzdGF0aWMgZm9sbG93Oy8vIG92ZXJyaWRhYmxlIGxpc3Qgb2Ygc3RvcmUgdGhhdCB3aWxsIGFsbG93IHB1c2ggaWYgdXBkYXRlZFxuXHRzdGF0aWMgcmVxdWlyZTtcblx0c3RhdGljIHN0YXRpY1Njb3BlICAgPSBuZXcgU2NvcGUoe30sIHsgaWQ6IFwic3RhdGljXCIgfSk7XG5cdHN0YXRpYyBzdGF0ZSAgICAgICAgID0gdW5kZWZpbmVkOy8vIGRlZmF1bHQgc3RhdGVcblx0LyoqXG5cdCAqIGlmIHJldGFpbiBnb2VzIHRvIDAgOlxuXHQgKiBmYWxzZSB0byBub3QgZGVzdHJveSxcblx0ICogMCB0byBzeW5jIGF1dG8gZGVzdHJveVxuXHQgKiBNcyB0byBhdXRvZGVzdHJveSBhZnRlciB0bSBtcyBpZiBubyByZXRhaW4gaGFzIGJlZW4gY2FsbGVkXG5cdCAqIEB0eXBlIHtib29sZWFufEludH1cblx0ICovXG5cdHN0YXRpYyBwZXJzaXN0ZW5jZVRtID0gZmFsc2U7XG5cdFxuXHQvKipcblx0ICogQ29uc3RydWN0b3IsIHdpbGwgYnVpbGQgYSByZXNjb3BlIHN0b3JlXG5cdCAqXG5cdCAqIChzY29wZSwge3JlcXVpcmUsdXNlLGFwcGx5LHN0YXRlLCBkYXRhfSlcblx0ICogKHNjb3BlKVxuXHQgKlxuXHQgKiBAcGFyYW0gc2NvcGUge29iamVjdH0gc2NvcGUgd2hlcmUgdG8gZmluZCB0aGUgb3RoZXIgc3RvcmVzIChkZWZhdWx0IDogc3RhdGljXG5cdCAqICAgICBzdGF0aWNTY29wZSApXG5cdCAqIEBwYXJhbSBrZXlzIHtBcnJheX0gKHBhc3NlZCB0byBTdG9yZTo6bWFwKSBFeCA6IFtcInNlc3Npb25cIiwgXCJvdGhlck5hbWVkU3RvcmU6a2V5XCIsXG5cdCAqICAgICBvdGhlclN0b3JlLmFzKFwib3RoZXJLZXlcIildXG5cdCAqL1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHRcdGxldCBhcmd6ICAgICAgICAgPSBbLi4uYXJndW1lbnRzXSxcblx0XHQgICAgX3N0YXRpYyAgICAgID0gdGhpcy5jb25zdHJ1Y3Rvcixcblx0XHQgICAgc2NvcGUgICAgICAgID0gYXJnelswXSBpbnN0YW5jZW9mIFNjb3BlXG5cdFx0ICAgICAgICAgICAgICAgICAgID8gYXJnei5zaGlmdCgpXG5cdFx0ICAgICAgICAgICAgICAgICAgIDogX3N0YXRpYy5zY29wZSA/IFNjb3BlLmdldFNjb3BlKF9zdGF0aWMuc2NvcGUpXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGlzLnN0cmluZyhhcmd6WzBdKVxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFNjb3BlLmdldFNjb3BlKGFyZ3ouc2hpZnQoKSlcblx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfc3RhdGljLnN0YXRpY1Njb3BlLFxuXHRcdCAgICBjZmcgICAgICAgICAgPSBhcmd6WzBdICYmICFpcy5hcnJheShhcmd6WzBdKSAmJiAhaXMuc3RyaW5nKGFyZ3pbMF0pXG5cdFx0ICAgICAgICAgICAgICAgICAgID8gYXJnei5zaGlmdCgpXG5cdFx0ICAgICAgICAgICAgICAgICAgIDoge30sXG5cdFx0ICAgIHRhc2tRdWV1ZSAgICA9IGlzLmFycmF5KGFyZ3pbMF0pID8gYXJnei5zaGlmdCgpIDogbnVsbCxcblx0XHQgICAgbmFtZSAgICAgICAgID0gY2ZnLm5hbWUgfHwgX3N0YXRpYy5uYW1lLFxuXHRcdCAgICB3YXRjaHMgICAgICAgPSBjZmcudXNlIHx8IFtdLFxuXHRcdCAgICBhcHBseSAgICAgICAgPSBjZmcuYXBwbHkgfHwgbnVsbCxcblx0XHQgICAgaW5pdGlhbFN0YXRlID0gX3N0YXRpYy5zdGF0ZSB8fCBfc3RhdGljLmluaXRpYWxTdGF0ZSB8fCBfc3RhdGljLmRlZmF1bHRTdGF0ZTtcblx0XHRcblx0XHR0aGlzLl91aWQgPSBjZmcuX3VpZCB8fCBzaG9ydGlkLmdlbmVyYXRlKCk7XG5cdFx0XG5cdFx0dGhpcy5fX3JldGFpbnMgICAgPSB7IGFsbDogMCB9O1xuXHRcdHRoaXMuX19sb2NrcyAgICAgID0geyBhbGw6IDAgfTtcblx0XHR0aGlzLl9vblN0YWJpbGl6ZSA9IFtdO1xuXHRcdFxuXHRcdC8vIGF1dG9EZXN0cm95VG1cblx0XHR0aGlzLl9hdXRvRGVzdHJveSAgID0gISF0aGlzLl9wZXJzaXN0ZW5jZVRtO1xuXHRcdHRoaXMuX3BlcnNpc3RlbmNlVG0gPSBjZmcucGVyc2lzdGVuY2VUbSB8fCBfc3RhdGljLnBlcnNpc3RlbmNlVG0gfHwgKGNmZy5hdXRvRGVzdHJveSB8fCBfc3RhdGljLmF1dG9EZXN0cm95KSAmJiA1O1xuXHRcdHRoaXMuX2NmZyAgICAgICAgICAgPSBjZmc7XG5cdFx0XG5cdFx0aWYgKCBjZmcgJiYgY2ZnLm9uICkge1xuXHRcdFx0dGhpcy5vbihjZmcub24pO1xuXHRcdH1cblx0XHRcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuXHRcdFxuXHRcdGlmICggc2NvcGUuc3RvcmVzICkge1xuXHRcdFx0dGhpcy5zY29wZU9iaiA9IHNjb3BlO1xuXHRcdFx0dGhpcy5zY29wZSAgICA9IHNjb3BlLnN0b3Jlcztcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHR0aGlzLnNjb3BlT2JqID0gbmV3IFNjb3BlKHNjb3BlKTtcblx0XHRcdHRoaXMuc2NvcGUgICAgPSBzY29wZS5zdG9yZXM7XG5cdFx0fVxuXHRcdFxuXHRcdC8vIHN0YW5kYXJkaXplZCBzY29wZSBhY2Nlc3Ncblx0XHR0aGlzLiRzY29wZSAgICA9IHRoaXMuc2NvcGVPYmo7XG5cdFx0dGhpcy4kc3RvcmVzICAgPSB0aGlzLnNjb3BlT2JqLnN0b3Jlcztcblx0XHR0aGlzLiRhY3Rpb25zICA9IHRoaXMuc2NvcGVPYmouYWN0aW9ucztcblx0XHR0aGlzLiRkaXNwYXRjaCA9IHRoaXMuc2NvcGVPYmouZGlzcGF0Y2guYmluZCh0aGlzLnNjb3BlT2JqKTtcblx0XHRcblx0XHR0aGlzLl9yZXYgICAgID0gdGhpcy5jb25zdHJ1Y3Rvci5fcmV2IHx8IDA7XG5cdFx0dGhpcy5fcmV2cyAgICA9IHt9O1xuXHRcdHRoaXMuc3RvcmVzICAgPSB7fTtcblx0XHR0aGlzLl9yZXF1aXJlID0gW107XG5cdFx0dGhpcy5fc291cmNlcyA9IFtuYW1lXTtcblx0XHRcblx0XHQvLyByZWdpc3RlciBzb3VyY2Ugc3RvcmVzXG5cdFx0aWYgKCBpcy5hcnJheShfc3RhdGljLnVzZSkgKSB7XG5cdFx0XHR0aGlzLl91c2UgPSBbLi4ud2F0Y2hzLCAuLi4oX3N0YXRpYy51c2UgfHwgW10pLm1hcChcblx0XHRcdFx0a2V5ID0+IHtcblx0XHRcdFx0XHRsZXQgcmVmID0ga2V5Lm1hdGNoKC9eKFxcIT8pKFteXFw6XSopKD86XFw6KC4qKSk/JC8pO1xuXHRcdFx0XHRcdGlmICggcmVmWzFdICkge1xuXHRcdFx0XHRcdFx0bGV0IHJlZjIgPSByZWZbMl0uc3BsaXQoJy4nKTtcblx0XHRcdFx0XHRcdHRoaXMuX3JlcXVpcmUucHVzaChyZWZbM10gfHwgcmVmMltyZWYyLmxlbmd0aCAtIDFdKTsvLyByZXF1aXJlIGNoZWNrIHZhbHVlIG9mIHRoZSBhbGlhc2VkXG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpbXBvcnRlZCB2YWx1ZVxuXHRcdFx0XHRcdFx0cmV0dXJuIGtleS5zdWJzdHIoMSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybiBrZXk7XG5cdFx0XHRcdH1cblx0XHRcdCldO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdHRoaXMuX3VzZSA9IFsuLi53YXRjaHMsIC4uLihcblx0XHRcdFx0X3N0YXRpYy51c2UgPyBPYmplY3Qua2V5cyhfc3RhdGljLnVzZSlcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAubWFwKFxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAga2V5ID0+IHtcblx0XHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgbGV0IHJlZiA9IGtleS5tYXRjaCgvXihcXCE/KSguKikkLyk7XG5cdFx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgIHJlZlsxXSAmJiB0aGlzLl9yZXF1aXJlLnB1c2goX3N0YXRpYy51c2Vba2V5XSk7XG5cdFx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgIHJldHVybiByZWZbMl0gKyAoKF9zdGF0aWMudXNlW2tleV0gPT09IHRydWUpXG5cdFx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAnJ1xuXHRcdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJzonICsgX3N0YXRpYy51c2Vba2V5XSk7XG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICB9XG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgKSA6IFtdXG5cdFx0XHQpXTtcblx0XHR9XG5cdFx0XG5cdFx0aWYgKCBfc3RhdGljLnJlcXVpcmUgKVxuXHRcdFx0dGhpcy5fcmVxdWlyZS5wdXNoKC4uLl9zdGF0aWMucmVxdWlyZSk7XG5cdFx0aWYgKCBjZmcucmVxdWlyZSApXG5cdFx0XHR0aGlzLl9yZXF1aXJlLnB1c2goLi4uY2ZnLnJlcXVpcmUpO1xuXHRcdFxuXHRcdHRoaXMuX2ZvbGxvd2VycyA9IFtdO1xuXHRcdHRoaXMuX2NoYW5nZXNTVyA9IGluaXRpYWxTdGF0ZSB8fCB7fTtcblx0XHR0aGlzLnN0YXRlICAgICAgPSBpbml0aWFsU3RhdGUgJiYge307XG5cdFx0XG5cdFx0aWYgKCBhcHBseSApXG5cdFx0XHR0aGlzLmFwcGx5ID0gYXBwbHk7XG5cdFx0XG5cdFx0LyoqXG5cdFx0ICogSW5pdGlhbCBzdGF0ZSBpc24ndCBmdWxseSBpbml0aWFsaXplZCAoIGNoaWxkcyBjb25zdHJ1Y3RvcnMgY2FuIHNldCBpdCApXG5cdFx0ICogU2NvcGUgYmFzZWQgaW5zdGFuY2UgaGF2ZSB0YXNrUXVldWUgdG8gZGVsYXkgaW5pdCBzeW5jaHJvbm91c2x5LCBpZiBub3Rcblx0XHQgKiBwcmVzZW50IHdlIHVzZSBzZXRUaW1lb3V0XG5cdFx0ICovXG5cdFx0aWYgKCB0YXNrUXVldWUgKSB7XG5cdFx0XHR0YXNrUXVldWUucHVzaCh0aGlzLl9hZnRlckNvbnN0cnVjdG9yLmJpbmQodGhpcykpXG5cdFx0fVxuXHRcdGVsc2Vcblx0XHRcdHNldFRpbWVvdXQodGhpcy5fYWZ0ZXJDb25zdHJ1Y3Rvci5iaW5kKHRoaXMpKVxuXHR9XG5cdFxuXHQvKipcblx0ICogR2V0IHRoZSBpbmNvbWluZyBzdGF0ZSAoIGZvciBpbW1lZGlhdGUgc3RhdGUgcmVsYXRpdmUgYWN0aW9ucyApXG5cdCAqIEByZXR1cm5zIHt7fXwqfVxuXHQgKi9cblx0Z2V0IG5leHRTdGF0ZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5fY2hhbmdlc1NXICYmIHsgLi4udGhpcy5zdGF0ZSwgLi4udGhpcy5fY2hhbmdlc1NXIH0gfHwgdGhpcy5zdGF0ZTtcblx0fVxuXHRcblx0X2FmdGVyQ29uc3RydWN0b3IoKSB7XG5cdFx0bGV0IGNmZyAgICAgICAgICA9IHRoaXMuX2NmZyxcblx0XHQgICAgX3N0YXRpYyAgICAgID0gdGhpcy5jb25zdHJ1Y3Rvcixcblx0XHQgICAgc25hcHNob3QgICAgID0gdGhpcy5yZXN0b3JlKHVuZGVmaW5lZCwgdHJ1ZSksXG5cdFx0ICAgIGluaXRpYWxTdGF0ZSA9IHRoaXMuc3RhdGUsXG5cdFx0ICAgIGluaXRpYWxEYXRhICA9IHRoaXMuZGF0YSxcblx0XHQgICAgYXBwbGllZDtcblx0XHR7XG5cdFx0XHRcblx0XHRcdGlmICggaW5pdGlhbERhdGEgKVxuXHRcdFx0XHR0aGlzLmRhdGEgPSBpbml0aWFsRGF0YTtcblx0XHRcdGVsc2UgaWYgKCBfc3RhdGljLmRhdGEgIT09IHVuZGVmaW5lZCApXG5cdFx0XHRcdHRoaXMuZGF0YSA9IHsgLi4uX3N0YXRpYy5kYXRhIH07XG5cdFx0XHRlbHNlIGlmICggY2ZnLmhhc093blByb3BlcnR5KFwiZGF0YVwiKSApXG5cdFx0XHRcdHRoaXMuZGF0YSA9IGNmZy5kYXRhO1xuXHRcdFx0XG5cdFx0XHRpZiAoIGNmZy5oYXNPd25Qcm9wZXJ0eShcInN0YXRlXCIpICYmIGNmZy5zdGF0ZSAhPT0gdW5kZWZpbmVkIClcblx0XHRcdFx0aW5pdGlhbFN0YXRlID0geyAuLi5pbml0aWFsU3RhdGUsIC4uLmNmZy5zdGF0ZSB9O1xuXHRcdFx0XG5cdFx0XHRpZiAoIHRoaXMuZGF0YSA9PT0gdW5kZWZpbmVkICkge1xuXHRcdFx0XHRpZiAoIGluaXRpYWxTdGF0ZSB8fCB0aGlzLl91c2UubGVuZ3RoICkgey8vIHN5bmMgYXBwbHlcblx0XHRcdFx0XHR0aGlzLl9jaGFuZ2VzU1cgPSB7XG5cdFx0XHRcdFx0XHQuLi50aGlzLl9jaGFuZ2VzU1csXG5cdFx0XHRcdFx0XHQuLi4oaW5pdGlhbFN0YXRlIHx8IHt9KSxcblx0XHRcdFx0XHRcdC4uLnRoaXMuJHNjb3BlLm1hcCh0aGlzLCB0aGlzLl91c2UpXG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0XHR0aGlzLnN0YXRlICAgICAgPSB7fTtcblx0XHRcdFx0XHRpZiAoIHRoaXMuc2hvdWxkQXBwbHkodGhpcy5fY2hhbmdlc1NXKSAmJiB0aGlzLmRhdGEgPT09IHVuZGVmaW5lZCApIHtcblx0XHRcdFx0XHRcdHRoaXMuZGF0YSAgICAgICA9IHRoaXMuYXBwbHkodGhpcy5kYXRhLCB0aGlzLl9jaGFuZ2VzU1csIHRoaXMuX2NoYW5nZXNTVyk7XG5cdFx0XHRcdFx0XHRhcHBsaWVkICAgICAgICAgPSB0cnVlO1xuXHRcdFx0XHRcdFx0dGhpcy5zdGF0ZSAgICAgID0gdGhpcy5fY2hhbmdlc1NXO1xuXHRcdFx0XHRcdFx0dGhpcy5fY2hhbmdlc1NXID0ge307XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0YXBwbGllZCAgICAgICAgID0gdHJ1ZTtcblx0XHRcdFx0dGhpcy5zdGF0ZSAgICAgID0gey8vIGFzc3VtZSB0aGlzIHN0YXRlIGlzIHN5bmMgd2l0aCBpbml0aWFsIGRhdGFcblx0XHRcdFx0XHQuLi50aGlzLl9jaGFuZ2VzU1csXG5cdFx0XHRcdFx0Li4uKGluaXRpYWxTdGF0ZSB8fCB7fSksXG5cdFx0XHRcdFx0Li4udGhpcy4kc2NvcGUubWFwKHRoaXMsIHRoaXMuX3VzZSlcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLl9jaGFuZ2VzU1cgPSB7fTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKCAodGhpcy5kYXRhICE9PSB1bmRlZmluZWQgfHwgYXBwbGllZCkgJiYgIXRoaXMuX19sb2Nrcy5hbGwgKSB7XG5cdFx0XHR0aGlzLl9zdGFibGUgPSB0cnVlO1xuXHRcdFx0dGhpcy5fcmV2Kys7XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0dGhpcy5fc3RhYmxlID0gZmFsc2U7XG5cdFx0XHRpZiAoICFfc3RhdGljLm1hbmFnZWQgJiYgIXRoaXMuc3RhdGUgJiYgKCF0aGlzLl91c2UgfHwgIXRoaXMuX3VzZS5sZW5ndGgpICkge1xuXHRcdFx0XHRjb25zb2xlLndhcm4oXCJSZVNjb3BlIHN0b3JlICdcIiwgdGhpcy5uYW1lLCBcIicgaGF2ZSBubyBpbml0aWFsIGRhdGEsIHN0YXRlIG9yIHVzZS4gSXQgY2FuJ3Qgc3RhYmlsaXplLi4uXCIpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHQhdGhpcy5fc3RhYmxlICYmIHRoaXMuZW1pdCgndW5zdGFibGUnLCB0aGlzLnN0YXRlKTtcblx0XHRcblx0fVxuXHRcblx0LyoqXG5cdCAqIE92ZXJyaWRhYmxlIG1ldGhvZCB0byBrbm93IGlmIGEgZGF0YSBjaGFuZ2Ugc2hvdWxkIGJlIHByb3BhZyB0byB0aGUgbGlzdGVuaW5nXG5cdCAqIHN0b3JlcyAmIGNvbXBvbmVudHNcblx0ICovXG5cdHNob3VsZFByb3BhZyggbkRhdGFzICkge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cdFxuXHQvKipcblx0ICogT3ZlcnJpZGFibGUgbWV0aG9kIHRvIGNob29zZSBpZiB0aGlzIHN0b3JlIHNob3VsZCBiZSBzZXJpYWxpemVkLFxuXHQgKiBJZiBub3QgaXQgd2lsbCBiZSBhcHBsaWVkIG5vcm1hbGx5IHdoZW4gcmVzdG9yaW5nXG5cdCAqIEByZXR1cm5zIHtib29sZWFufVxuXHQgKi9cblx0c2hvdWxkU2VyaWFsaXplKCkge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cdFxuXHRoYXNEYXRhQ2hhbmdlKCBuRGF0YXMgKSB7XG5cdFx0bGV0IF9zdGF0aWMgPSB0aGlzLmNvbnN0cnVjdG9yLCByLFxuXHRcdCAgICBjRGF0YXMgID0gdGhpcy5kYXRhO1xuXHRcdHIgICAgICAgICAgID0gIWNEYXRhcyAmJiBuRGF0YXMgfHwgY0RhdGFzICE9PSBuRGF0YXM7XG5cdFx0IXIgJiYgY0RhdGFzICYmIE9iamVjdC5rZXlzKGNEYXRhcykuZm9yRWFjaChcblx0XHRcdCgga2V5ICkgPT4ge1xuXHRcdFx0XHRyID0gciB8fCAobkRhdGFzXG5cdFx0XHRcdCAgICAgICAgICA/IGNEYXRhc1trZXldICE9PSBuRGF0YXNba2V5XVxuXHRcdFx0XHQgICAgICAgICAgOiBjRGF0YXMgJiYgY0RhdGFzW2tleV0pXG5cdFx0XHR9XG5cdFx0KTtcblx0XHQhciAmJiBuRGF0YXMgJiYgT2JqZWN0LmtleXMobkRhdGFzKS5mb3JFYWNoKFxuXHRcdFx0KCBrZXkgKSA9PiB7XG5cdFx0XHRcdHIgPSByIHx8IChuRGF0YXNcblx0XHRcdFx0ICAgICAgICAgID8gY0RhdGFzW2tleV0gIT09IG5EYXRhc1trZXldXG5cdFx0XHRcdCAgICAgICAgICA6IGNEYXRhcyAmJiBjRGF0YXNba2V5XSlcblx0XHRcdH1cblx0XHQpO1xuXHRcdHJldHVybiByO1xuXHR9XG5cdFxuXHQvKipcblx0ICogT3ZlcnJpZGFibGUgbWV0aG9kIHRvIGtub3cgaWYgYSBzdGF0ZSBjaGFuZ2Ugc2hvdWxkIGJlIGFwcGxpZWRcblx0ICovXG5cdHNob3VsZEFwcGx5KCBzdGF0ZSA9IHRoaXMuc3RhdGUgKSB7XG5cdFx0bGV0IF9zdGF0aWMgPSB0aGlzLmNvbnN0cnVjdG9yO1xuXHRcdFxuXHRcdHJldHVybiAoXG5cdFx0XHQhIXRoaXMuaXNDb21wbGV0ZShzdGF0ZSlcblx0XHQpICYmIChpcy5hcnJheShfc3RhdGljLmZvbGxvdylcblx0XHQgICAgICA/IF9zdGF0aWMuZm9sbG93XG5cdFx0ICAgICAgICAgICAgICAgLnJlZHVjZSgoIHIsIGkgKSA9PiAociB8fCBzdGF0ZSAmJiBzdGF0ZVtpXSksIGZhbHNlKVxuXHRcdCAgICAgIDogX3N0YXRpYy5mb2xsb3dcblx0XHQgICAgICAgID8gT2JqZWN0LmtleXMoX3N0YXRpYy5mb2xsb3cpXG5cdFx0ICAgICAgICAgICAgICAgIC5yZWR1Y2UoKCByLCBpICkgPT4gKFxuXHRcdFx0ICAgICAgICAgICAgICAgIHJcblx0XHRcdCAgICAgICAgICAgICAgICB8fCBzdGF0ZSAmJiBpcy5mbihfc3RhdGljLmZvbGxvd1tpXSkgJiYgX3N0YXRpYy5mb2xsb3dbaV0uY2FsbCh0aGlzLCBzdGF0ZVtpXSlcblx0XHRcdCAgICAgICAgICAgICAgICB8fCBfc3RhdGljLmZvbGxvd1tpXSAmJiBzdGF0ZVtpXSAhPT0gdGhpcy5zdGF0ZVtpXVxuXHRcdCAgICAgICAgICAgICAgICApLCBmYWxzZSkgOiB0cnVlXG5cdFx0KTtcblx0fVxuXHRcblx0LyoqXG5cdCAqIE92ZXJyaWRhYmxlIGFwcGxpZXIgLyByZW1hcHBlclxuXHQgKiBJZiBzdGF0ZSBvciBsYXN0UHVibGljU3RhdGUgYXJlIHNpbXBsZSBoYXNoIG1hcHMgYXBwbHkgd2lsbCByZXR1cm4gey4uLmRhdGEsXG5cdCAqIC4uLnN0YXRlfSBpZiBub3QgaXQgd2lsbCByZXR1cm4gdGhlIGxhc3QgcHJpdmF0ZSBzdGF0ZVxuXHQgKiBAcGFyYW0gZGF0YVxuXHQgKiBAcGFyYW0gc3RhdGVcblx0ICogQHJldHVybnMgeyp9XG5cdCAqL1xuXHRhcHBseSggZGF0YSwgc3RhdGUsIGNoYW5nZXMgKSB7XG5cdFx0c3RhdGUgPSBzdGF0ZSB8fCB0aGlzLnN0YXRlO1xuXHRcdFxuXHRcdGlmICggIWRhdGEgfHwgZGF0YS5fX3Byb3RvX18gIT09IG9ialByb3RvIHx8IHN0YXRlLl9fcHJvdG9fXyAhPT0gb2JqUHJvdG8gKVxuXHRcdFx0cmV0dXJuIHN0YXRlO1xuXHRcdGVsc2Vcblx0XHRcdHJldHVybiB7IC4uLmRhdGEsIC4uLnN0YXRlIH1cblx0fVxuXHRcblx0LyoqXG5cdCAqIERlYm91bmNlIHRoaXMgc3RvcmUgcHJvcGFnYXRpb24gKCAmIHJlZHVjaW5nIClcblx0ICogQHBhcmFtIGNiXG5cdCAqL1xuXHRzdGFiaWxpemUoIGNiICkge1xuXHRcdGNiICYmIHRoaXMub25jZSgnc3RhYmxlJywgY2IpO1xuXHRcdHRoaXMuX3N0YWJsZSAmJiB0aGlzLmVtaXQoJ3Vuc3RhYmxlJywgdGhpcy5zdGF0ZSwgdGhpcy5kYXRhKTtcblx0XHRcblx0XHR0aGlzLl9zdGFibGUgPSBmYWxzZTtcblx0XHRcblx0XHRpZiAoIHRoaXMuX3N0YWJpbGl6ZXIgKVxuXHRcdFx0cmV0dXJuO1xuXHRcdFxuXHRcdHRoaXMuX3N0YWJpbGl6ZXIgPSBUYXNrU2VxdWVuY2VyLnB1c2hUYXNrKHRoaXMsICdwdXNoU3RhdGUnKTtcblx0fVxuXHRcblx0LyoqXG5cdCAqIFdhbGsgbiBnZXRcblx0ICogQHBhcmFtIHBhdGhcblx0ICogQHBhcmFtIGlcblx0ICogQHBhcmFtIG9ialxuXHQgKiBAcmV0dXJucyB7Knx7fX1cblx0ICovXG5cdHJldHJpZXZlKCBwYXRoLCBpID0gMCwgb2JqID0gdGhpcy5kYXRhICkge1xuXHRcdHBhdGggPSBpcy5zdHJpbmcocGF0aCkgPyBwYXRoLnNwbGl0KCcuJykgOiBwYXRoO1xuXHRcdHJldHVybiAhb2JqIHx8ICFwYXRoIHx8ICFwYXRoLmxlbmd0aFxuXHRcdCAgICAgICA/IG9ialxuXHRcdCAgICAgICA6IHBhdGgubGVuZ3RoID09IGkgKyAxXG5cdFx0ICAgICAgICAgPyBvYmpbcGF0aFtpXV1cblx0XHQgICAgICAgICA6IHRoaXMucmV0cmlldmUocGF0aCwgaSArIDEsIG9ialtwYXRoW2ldXSk7XG5cdH1cblx0XG5cdGRpc3BhdGNoKCBhY3Rpb24sIC4uLmFyZ3ogKSB7XG5cdFx0dGhpcy5zY29wZU9iai5kaXNwYXRjaChhY3Rpb24sIC4uLmFyZ3opO1xuXHR9XG5cdFxuXHR0cmlnZ2VyKCBhY3Rpb24sIC4uLmFyZ3ogKSB7XG5cdFx0bGV0IHsgYWN0aW9ucyB9ID0gdGhpcy5jb25zdHJ1Y3Rvcjtcblx0XHRpZiAoIGFjdGlvbnMgJiYgYWN0aW9uc1thY3Rpb25dICkge1xuXHRcdFx0bGV0IG5zID0gYWN0aW9uc1thY3Rpb25dLmNhbGwodGhpcywgLi4uYXJneik7XG5cdFx0XHRucyAmJiB0aGlzLnNldFN0YXRlKG5zKTtcblx0XHR9XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBTZXQgJiBQdXNoIHRoZSByZXN1bHQgZGF0YSB0byBmb2xsb3dlcnMgaWYgc3RhYmxlXG5cdCAqIEBwYXJhbSBjYlxuXHQgKi9cblx0cHVzaCggZGF0YSwgZm9yY2UsIGNiICkge1xuXHRcdGNiICAgID0gZm9yY2UgPT09IHRydWUgPyBjYiA6IGZvcmNlO1xuXHRcdGZvcmNlID0gZm9yY2UgPT09IHRydWU7XG5cdFx0aWYgKCAhZm9yY2UgJiZcblx0XHRcdChcblx0XHRcdFx0IXRoaXMuaGFzRGF0YUNoYW5nZShkYXRhKVxuXHRcdFx0KVxuXHRcdCkge1xuXHRcdFx0Y2IgJiYgY2IoKTtcblx0XHRcdGlmICggIXRoaXMuX19sb2Nrcy5hbGwgKSB7XG5cdFx0XHRcdGxldCBzdGFibGUgICA9IHRoaXMuX3N0YWJsZTtcblx0XHRcdFx0dGhpcy5fc3RhYmxlID0gdHJ1ZTtcblx0XHRcdFx0IXN0YWJsZSAmJiB0aGlzLmVtaXQoJ3N0YWJsZScsIHRoaXMuc3RhdGUsIHRoaXMuZGF0YSk7XG5cdFx0XHRcdHRoaXMuX3N0YWJpbGl6ZXIgPSBudWxsO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRcblx0XHR0aGlzLmRhdGEgPSBkYXRhO1xuXHRcdHRoaXMud2FpdCgpO1xuXHRcdHRoaXMucmVsZWFzZShjYik7XG5cdFx0XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBDYWxsIHRoZSBhcHBseSBmbiB1c2luZyB0aGUgY3VycmVudCBhY2N1bXVsYXRlZCBzdGF0ZSB1cGRhdGUgdGhlbiwgcHVzaCB0aGVcblx0ICogcmVzdWx0aW5nIGRhdGEgaWYgc3RhYmxlXG5cdCAqIEBwYXJhbSBmb3JjZVxuXHQgKi9cblx0cHVzaFN0YXRlKCBmb3JjZSApIHtcblx0XHRcblx0XHRpZiAoICFmb3JjZSAmJiAhdGhpcy5fY2hhbmdlc1NXICYmIHRoaXMuZGF0YSApXG5cdFx0XHRyZXR1cm47XG5cdFx0XG5cdFx0bGV0IG5leHRTdGF0ZSA9IHRoaXMuX25leHRTdGF0ZSB8fCB7IC4uLnRoaXMuc3RhdGUsIC4uLih0aGlzLl9jaGFuZ2VzU1cgfHwge30pIH0sXG5cdFx0ICAgIG5leHREYXRhICA9IHRoaXMuYXBwbHkodGhpcy5kYXRhLCBuZXh0U3RhdGUsIHRoaXMuX2NoYW5nZXNTVyk7XG5cdFx0XG5cdFx0dGhpcy5fc3RhYmlsaXplciA9IG51bGw7XG5cdFx0dGhpcy5zdGF0ZSAgICAgICA9IG5leHRTdGF0ZTtcblx0XHR0aGlzLl9jaGFuZ2VzU1cgID0gbnVsbDtcblx0XHRcblx0XHRpZiAoICFmb3JjZSAmJlxuXHRcdFx0KFxuXHRcdFx0XHQhdGhpcy5oYXNEYXRhQ2hhbmdlKG5leHREYXRhKVxuXHRcdFx0KVxuXHRcdCkge1xuXHRcdFx0aWYgKCAhdGhpcy5fX2xvY2tzLmFsbCApIHtcblx0XHRcdFx0bGV0IHN0YWJsZSAgID0gdGhpcy5fc3RhYmxlO1xuXHRcdFx0XHR0aGlzLl9zdGFibGUgPSB0cnVlO1xuXHRcdFx0XHQhc3RhYmxlICYmIHRoaXMuZW1pdCgnc3RhYmxlJywgdGhpcy5zdGF0ZSwgdGhpcy5kYXRhKTtcblx0XHRcdFx0dGhpcy5fc3RhYmlsaXplciA9IG51bGw7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdFxuXHRcdHRoaXMuZGF0YSA9IG5leHREYXRhO1xuXHRcdHRoaXMud2FpdCgpO1xuXHRcdHRoaXMucmVsZWFzZSgpO1xuXHRcdFxuXHR9XG5cdFxuXHQvKipcblx0ICogQWRkICdwU3RhdGUnIHRvIHRoZSBjdXJyZW50IGFjY3VtdWxhdGVkIHN0YXRlIHVwZGF0ZXNcblx0ICogJiB3YWl0IHNvdXJjZSBzdG9yZXMgc3RhYmlsaXphdGlvbiBiZWZvcmUgcHVzaGluZyB0aGVzZSBzdGF0ZSB1cGRhdGVzXG5cdCAqIEBwYXJhbSBwU3RhdGVcblx0ICogQHBhcmFtIGNiXG5cdCAqL1xuXHRzZXRTdGF0ZSggcFN0YXRlLCBjYiwgc3luYyApIHtcblx0XHRsZXQgaSAgICAgICA9IDAsIGNoYW5nZSxcblx0XHQgICAgY2hhbmdlcyA9IHRoaXMuX2NoYW5nZXNTVyA9IHRoaXMuX2NoYW5nZXNTVyB8fCB7fTtcblx0XHRmb3IgKCBsZXQgayBpbiBwU3RhdGUgKVxuXHRcdFx0aWYgKCAhdGhpcy5zdGF0ZVxuXHRcdFx0XHR8fCBjaGFuZ2VzLmhhc093blByb3BlcnR5KGspLy8gdG9kb1xuXHRcdFx0XHQmJiAoXG5cdFx0XHRcdFx0cFN0YXRlW2tdICE9PSBjaGFuZ2VzW2tdXG5cdFx0XHRcdCkgfHwgcFN0YXRlLmhhc093blByb3BlcnR5KGspXG5cdFx0XHRcdCYmIChcblx0XHRcdFx0XHRwU3RhdGVba10gIT09IHRoaXMuc3RhdGVba11cblx0XHRcdFx0XHQvL3x8XG5cdFx0XHRcdFx0Ly8odGhpcy5zdGF0ZVtrXSAmJiBwU3RhdGVba10gJiYgKHBTdGF0ZVtrXS5fcmV2ICE9IHRoaXMuX3JldnNba10pKS8vIHJldi9oYXNoIHVwZGF0ZVxuXHRcdFx0XHQpICkge1xuXHRcdFx0XHRjaGFuZ2UgICAgICAgID0gdHJ1ZTtcblx0XHRcdFx0Ly90aGlzLl9yZXZzW2tdID0gcFN0YXRlW2tdICYmIHBTdGF0ZVtrXS5fcmV2IHx8IHRydWU7XG5cdFx0XHRcdGNoYW5nZXNba10gICAgPSBwU3RhdGVba107XG5cdFx0XHR9XG5cdFx0XG5cdFx0dGhpcy5fbmV4dFN0YXRlID0geyAuLi50aGlzLnN0YXRlLCAuLi5jaGFuZ2VzIH07XG5cdFx0aWYgKCAhdGhpcy5zaG91bGRBcHBseSh0aGlzLl9uZXh0U3RhdGUpICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRcblx0XHRpZiAoIHN5bmMgKSB7XG5cdFx0XHR0aGlzLnB1c2hTdGF0ZSgpO1xuXHRcdFx0Y2IgJiYgY2IoKTtcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHRpZiAoIGNoYW5nZSApIHtcblx0XHRcdFx0dGhpcy5zdGFiaWxpemUoY2IpO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSBjYiAmJiBjYigpO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXHRcblx0LyoqXG5cdCAqIFVwZGF0ZSB0aGUgY3VycmVudCBzdGF0ZSAmIHB1c2ggaXRcblx0ICogQHBhcmFtIHBTdGF0ZVxuXHQgKiBAcGFyYW0gY2Jcblx0ICovXG5cdHNldFN0YXRlU3luYyggcFN0YXRlICkge1xuXHRcdGxldCBpICAgICAgID0gMCwgY2hhbmdlLFxuXHRcdCAgICBjaGFuZ2VzID0gdGhpcy5fY2hhbmdlc1NXID0gdGhpcy5fY2hhbmdlc1NXIHx8IHt9O1xuXHRcdGZvciAoIGxldCBrIGluIHBTdGF0ZSApXG5cdFx0XHRpZiAoICF0aGlzLnN0YXRlIHx8IHBTdGF0ZS5oYXNPd25Qcm9wZXJ0eShrKVxuXHRcdFx0XHQmJiAoXG5cdFx0XHRcdFx0cFN0YXRlW2tdICE9PSB0aGlzLnN0YXRlW2tdXG5cdFx0XHRcdFx0Ly98fFxuXHRcdFx0XHRcdC8vKHRoaXMuc3RhdGVba10gJiYgcFN0YXRlW2tdICYmIChwU3RhdGVba10uX3JldiAhPSB0aGlzLl9yZXZzW2tdKSkvLyByZXYvaGFzaCB1cGRhdGVcblx0XHRcdFx0KSApIHtcblx0XHRcdFx0Y2hhbmdlICAgICAgICA9IHRydWU7XG5cdFx0XHRcdHRoaXMuX3JldnNba10gPSBwU3RhdGVba10gJiYgcFN0YXRlW2tdLl9yZXYgfHwgdHJ1ZTtcblx0XHRcdFx0Y2hhbmdlc1trXSAgICA9IHBTdGF0ZVtrXTtcblx0XHRcdH1cblx0XHR0aGlzLnNob3VsZEFwcGx5KHsgLi4uKHRoaXMuc3RhdGUgfHwge30pLCAuLi5jaGFuZ2VzIH0pICYmIHRoaXMucHVzaFN0YXRlKCk7XG5cdFx0cmV0dXJuIHRoaXMuZGF0YTtcblx0fVxuXHRcblx0LyoqXG5cdCAqIGdldCBhIHN0b3JlLWtleSBwYWlyIGZvciBTdG9yZTo6bWFwXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG5cdCAqIEByZXR1cm5zIHt7c3RvcmU6IFN0b3JlLCBuYW1lOiAqfX1cblx0ICovXG5cdGFzKCBuYW1lICkge1xuXHRcdHJldHVybiB7IHN0b3JlOiB0aGlzLCBuYW1lIH07XG5cdH1cblx0XG5cdG9uKCBsaXN0cyApIHtcblx0XHRpZiAoICFpcy5zdHJpbmcobGlzdHMpICYmIGxpc3RzIClcblx0XHRcdE9iamVjdC5rZXlzKGxpc3RzKS5mb3JFYWNoKGsgPT4gc3VwZXIub24oaywgbGlzdHNba10pKTtcblx0XHRlbHNlIHN1cGVyLm9uKC4uLmFyZ3VtZW50cyk7XG5cdH1cblx0XG5cdHJlbW92ZUxpc3RlbmVyKCBsaXN0cyApIHtcblx0XHRpZiAoICFpcy5zdHJpbmcobGlzdHMpICYmIGxpc3RzIClcblx0XHRcdE9iamVjdC5rZXlzKGxpc3RzKS5mb3JFYWNoKGsgPT4gc3VwZXIucmVtb3ZlTGlzdGVuZXIoaywgbGlzdHNba10pKTtcblx0XHRlbHNlIHN1cGVyLnJlbW92ZUxpc3RlbmVyKC4uLmFyZ3VtZW50cyk7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBpcyBjb21wbGV0ZSAoYWxsIHJlcXVpZXJlZCBrZXlzIGFyZSBoZXJlKVxuXHQgKiBAcmV0dXJucyBib29sXG5cdCAqL1xuXHRpc0NvbXBsZXRlKCBzdGF0ZSA9IHRoaXMuc3RhdGUgKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdCF0aGlzLl9yZXF1aXJlXG5cdFx0XHR8fCAhdGhpcy5fcmVxdWlyZS5sZW5ndGhcblx0XHRcdHx8IHN0YXRlICYmIHRoaXMuX3JlcXVpcmUucmVkdWNlKFxuXHRcdFx0XHQoIHIsIGtleSApID0+IChyICYmIHN0YXRlW2tleV0pLFxuXHRcdFx0XHR0cnVlXG5cdFx0XHQpXG5cdFx0KTtcblx0fVxuXHRcblx0LyoqXG5cdCAqIGlzIHN0YWJsZVxuXHQgKiBAcmV0dXJucyBib29sXG5cdCAqL1xuXHRpc1N0YWJsZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5fc3RhYmxlO1xuXHR9XG5cdFxuXHQvKipcblx0ICogU2VyaWFsaXplIHN0YXRlICYgZGF0YSB3aXRoIHNvdXJjZXMgcmVmc1xuXHQgKiBAcmV0dXJucyBib29sXG5cdCAqL1xuXHRzZXJpYWxpemUoIGNmZyA9IHt9LCBvdXRwdXQgPSB7fSApIHtcblx0XHRcblx0XHRsZXQgc0lkICAgICAgICA9IGNmZy5wYXJlbnRBbGlhcyB8fCB0aGlzLnNjb3BlT2JqLl9pZCxcblx0XHQgICAgcmVmc0NvdW50ICA9IDAsXG5cdFx0ICAgIHJlZnMgICAgICAgPVxuXHRcdFx0ICAgICFjZmcubm9yZWZzICYmIGlzLmFycmF5KHRoaXMuX3VzZSkgJiYgdGhpcy5fdXNlLnJlZHVjZShcblx0XHRcdCAgICAoIG1hcCwga2V5ICkgPT4ge1xuXHRcdFx0XHQgICAgbGV0IHJlZiAgID0gdGhpcy4kc2NvcGUucGFyc2VSZWYoa2V5KSxcblx0XHRcdFx0ICAgICAgICBzdG9yZSA9IHRoaXMuJHN0b3Jlc1tyZWYuc3RvcmVJZF07XG5cdFx0XHRcdCAgICBpZiAoIHN0b3JlICYmIFN0b3JlLmlzU3RvcmUoc3RvcmUpICYmICFzdG9yZS5zY29wZU9iai5fLmlzTG9jYWxJZCApXG5cdFx0XHRcdFx0ICAgIHJlZnNDb3VudCsrLCBtYXBbcmVmLmFsaWFzXSA9IHJlZi5wYXRoO1xuXHRcdFx0XHRcblx0XHRcdFx0ICAgIHJldHVybiBtYXA7XG5cdFx0XHQgICAgfSwge31cblx0XHRcdCAgICApLFxuXHRcdCAgICBzdGF0ZSAgICAgID0gdGhpcy5zdGF0ZSB8fCB7fSxcblx0XHQgICAgcGVyc2lzdGVudCA9IHRoaXMuc2hvdWxkU2VyaWFsaXplKCk7XG5cdFx0XG5cdFx0aWYgKCAhcGVyc2lzdGVudCApIHtcblx0XHRcdGtleVdhbGtuU2V0KFxuXHRcdFx0XHRvdXRwdXQsXG5cdFx0XHRcdChzSWQgKyAnLycgKyB0aGlzLm5hbWUpLFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0ZGF0YVJlZnM6IGNmZy5kYXRhUmVmcyxcblx0XHRcdFx0XHRyZWZzXG5cdFx0XHRcdH1cblx0XHRcdCk7XG5cdFx0XHRyZXR1cm4gb3V0cHV0O1xuXHRcdH1cblx0XHRcblx0XHRsZXRcblx0XHRcdHN0YXRlS2V5cyAgID0gT2JqZWN0LmtleXMoc3RhdGUpIHx8IFtdLFxuXHRcdFx0c3RhdGVSZWZzICAgPSBzdGF0ZUtleXMubWFwKGsgPT4gc3RhdGVba10pLFxuXHRcdFx0aW5SZWZzQ291bnQgPSAwLFxuXHRcdFx0ZGF0YVJlZnMgICAgPSBjZmcuZGF0YVJlZnMgfHwge30sXG5cdFx0XHRpblJlZnMgICAgICA9XG5cdFx0XHRcdCFjZmcubm9yZWZzICYmIHRoaXMuZGF0YSAmJiAoT2JqZWN0LmtleXModGhpcy5kYXRhKS5yZWR1Y2UoXG5cdFx0XHRcdCggbWFwLCBrZXkgKSA9PiB7XG5cdFx0XHRcdFx0bGV0IHJlZiA9IHN0YXRlUmVmcy5pbmRleE9mKHRoaXMuZGF0YVtrZXldKVxuXHRcdFx0XHRcdGlmICggcmVmICE9IC0xIClcblx0XHRcdFx0XHRcdGluUmVmc0NvdW50KyssIG1hcFtrZXldID0gc3RhdGVLZXlzW3JlZl07XG5cdFx0XHRcdFx0cmV0dXJuIG1hcDtcblx0XHRcdFx0fSwge31cblx0XHRcdFx0KSksXG5cdFx0XHRzbmFwICAgICAgICA9IHtcblx0XHRcdFx0ZGF0YVJlZnM6IGNmZy5kYXRhUmVmcyxcblx0XHRcdFx0c3RhdGUgICA6IHN0YXRlICYmXG5cdFx0XHRcdFx0KFxuXHRcdFx0XHRcdFx0Y2ZnLm5vcmVmc1xuXHRcdFx0XHRcdFx0PyB7IC4uLnN0YXRlIH1cblx0XHRcdFx0XHRcdDogT2JqZWN0LmtleXMoc3RhdGUpLnJlZHVjZSgoIGgsIGsgKSA9PiAoIXJlZnNba10gJiYgKGhba10gPSBzdGF0ZVtrXSksIGgpLCB7fSlcblx0XHRcdFx0XHQpLFxuXHRcdFx0XHRkYXRhICAgIDogKFxuXHRcdFx0XHRcdFx0dGhpcy5kYXRhICYmXG5cdFx0XHRcdFx0XHR0aGlzLmRhdGEuX19wcm90b19fID09PSBvYmpQcm90byA/XG5cdFx0XHRcdFx0XHRPYmplY3Rcblx0XHRcdFx0XHRcdFx0LmtleXModGhpcy5kYXRhKVxuXHRcdFx0XHRcdFx0XHQucmVkdWNlKFxuXHRcdFx0XHRcdFx0XHRcdCggaCwgayApID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdGlmICggIWluUmVmc1trXSAmJiAhZGF0YVJlZnNba10gKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGhba10gPSB0aGlzLmRhdGFba107XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGluUmVmc0NvdW50Kys7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gaFxuXHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0e31cblx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxuXHRcdFx0XHRcdFx0KGlzLmJvb2wodGhpcy5kYXRhKVxuXHRcdFx0XHRcdFx0XHR8fCBpcy5udW1iZXIodGhpcy5kYXRhKVxuXHRcdFx0XHRcdFx0XHR8fCBpcy5zdHJpbmcodGhpcy5kYXRhKSkgJiYgdGhpcy5kYXRhXG5cdFx0XHRcdFx0KVxuXHRcdFx0XHRcdHx8IHVuZGVmaW5lZFxuXHRcdFx0XHRcblx0XHRcdH07XG5cdFx0XG5cdFx0cmVmcyAmJiByZWZzQ291bnQgJiYgKHNuYXAucmVmcyA9IHJlZnMpO1xuXHRcdGluUmVmcyAmJiBpblJlZnNDb3VudCAmJiAoXG5cdFx0XHRzbmFwLmluUmVmcyA9IGluUmVmcyk7XG5cdFx0XG5cdFx0XG5cdFx0a2V5V2Fsa25TZXQoXG5cdFx0XHRvdXRwdXQsXG5cdFx0XHQoc0lkICsgJy8nICsgdGhpcy5uYW1lKSxcblx0XHRcdHNuYXBcblx0XHQpO1xuXHRcdHJldHVybiBvdXRwdXQ7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiByZXN0b3JlIHN0YXRlICYgZGF0YVxuXHQgKiBAcmV0dXJucyBib29sXG5cdCAqL1xuXHRyZXN0b3JlKCBzbmFwc2hvdCwgaW1tZWRpYXRlICkge1xuXHRcdHNuYXBzaG90ID0gc25hcHNob3Rcblx0XHRcdCYmIGtleVdhbGtuR2V0KHNuYXBzaG90LCB0aGlzLnNjb3BlT2JqLl9pZCArICcvJyArIHRoaXMubmFtZSlcblx0XHRcdHx8IHRoaXMuJHNjb3BlLnRha2VTbmFwc2hvdEJ5S2V5KHRoaXMuc2NvcGVPYmouX2lkICsgJy8nICsgdGhpcy5uYW1lKTtcblx0XHRcblx0XHRpZiAoICFzbmFwc2hvdCApXG5cdFx0XHRyZXR1cm47XG5cdFx0XG5cdFx0aWYgKCBzbmFwc2hvdCApIHtcblx0XHRcdFxuXHRcdFx0aWYgKCAhdGhpcy5pc1N0YWJsZSgpICYmICFpbW1lZGlhdGUgKVxuXHRcdFx0XHR0aGlzLnRoZW4oKCkgPT4gcmVzdG9yZShzbmFwc2hvdCkpO1xuXHRcdFx0XG5cdFx0XHR0aGlzLnN0YXRlID0geyAuLi5zbmFwc2hvdC5zdGF0ZSB9O1xuXHRcdFx0c25hcHNob3QucmVmcyAmJiBPYmplY3Qua2V5cyhzbmFwc2hvdC5yZWZzKS5mb3JFYWNoKFxuXHRcdFx0XHQoIGtleSApID0+IHsvL3RvZG9cblx0XHRcdFx0XHR0aGlzLnN0YXRlW2tleV0gPSB0aGlzLiRzY29wZS5yZXRyaWV2ZShzbmFwc2hvdC5yZWZzW2tleV0pO1xuXHRcdFx0XHR9XG5cdFx0XHQpXG5cdFx0XHRcblx0XHRcdFxuXHRcdFx0aWYgKCBzbmFwc2hvdC5pblJlZnMgPT09IHRydWUgKSB7XG5cdFx0XHRcdHRoaXMuZGF0YSA9IHsgLi4udGhpcy5zdGF0ZSB9O1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdHRoaXMuZGF0YSA9IHNuYXBzaG90LmRhdGE7XG5cdFx0XHRcdHNuYXBzaG90LmluUmVmcyAmJiBPYmplY3Qua2V5cyhzbmFwc2hvdC5pblJlZnMpLmZvckVhY2goXG5cdFx0XHRcdFx0KCBrZXkgKSA9PiB7Ly90b2RvXG5cdFx0XHRcdFx0XHR0aGlzLmRhdGFba2V5XSA9IHRoaXMuc3RhdGVbc25hcHNob3QuaW5SZWZzW2tleV1dO1xuXHRcdFx0XHRcdFx0Ly9lbHNlXG5cdFx0XHRcdFx0XHQvLyAgICBjb25zb2xlLndhcm4oJ25vdCBmb3VuZCA6ICcsIGtleSwgc25hcCAmJiBzbmFwLnJlZnNbIGtleSBdKVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0KVxuXHRcdFx0fVxuXHRcdFx0aWYgKCBzbmFwc2hvdC5kYXRhUmVmcyApIHtcblx0XHRcdFx0dGhpcy5kYXRhID0gdGhpcy5kYXRhIHx8IHt9O1xuXHRcdFx0XHRPYmplY3Qua2V5cyhzbmFwc2hvdC5kYXRhUmVmcykuZm9yRWFjaChcblx0XHRcdFx0XHQoIGtleSApID0+IHsvL3RvZG9cblx0XHRcdFx0XHRcdHRoaXMuJHNjb3BlLnJlc3RvcmVSZWZQYXRoKHNuYXBzaG90LmRhdGFSZWZzW2tleV0pO1xuXHRcdFx0XHRcdFx0dGhpcy5kYXRhW2tleV0gPSB0aGlzLiRzY29wZS5yZXRyaWV2ZShzbmFwc2hvdC5kYXRhUmVmc1trZXldKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdClcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0XG5cdFx0fVxuXHR9XG5cdFxuXHQvKipcblx0ICogQmluZCB0aGlzIHN0b3JlIGNoYW5nZXMgdG8gdGhlIGdpdmVuIGNvbXBvbmVudC1rZXlcblx0ICogQHBhcmFtIG9iaiB7UmVhY3QuQ29tcG9uZW50fFN0b3JlfGZ1bmN0aW9uKVxuXHQgKiBAcGFyYW0ga2V5IHtzdHJpbmd9IG9wdGlvbmFsIGtleSB3aGVyZSB0byBtYXAgdGhlIHB1YmxpYyBzdGF0ZVxuXHQgKi9cblx0YmluZCggb2JqLCBrZXksIHNldEluaXRpYWwgPSB0cnVlLCBwYXRoICkge1xuXHRcdHRoaXMuX2ZvbGxvd2Vycy5wdXNoKFtvYmosIGtleSwgcGF0aF0pO1xuXHRcdGlmICggc2V0SW5pdGlhbCAmJiB0aGlzLmRhdGEgJiYgdGhpcy5fc3RhYmxlICkge1xuXHRcdFx0bGV0IGRhdGEgPSBwYXRoID8gdGhpcy5yZXRyaWV2ZShwYXRoKSA6IHRoaXMuZGF0YTtcblx0XHRcdGlmICggdHlwZW9mIG9iaiAhPSBcImZ1bmN0aW9uXCIgKSB7XG5cdFx0XHRcdGlmICgga2V5ICkgb2JqLnNldFN0YXRlKHsgW2tleV06IGRhdGEgfSk7XG5cdFx0XHRcdGVsc2Ugb2JqLnNldFN0YXRlKGRhdGEpO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdG9iaihkYXRhKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBVbiBiaW5kIHRoaXMgc3RvcmUgb2ZmIHRoZSBnaXZlbiBjb21wb25lbnQta2V5XG5cdCAqIEBwYXJhbSBvYmpcblx0ICogQHBhcmFtIGtleVxuXHQgKiBAcmV0dXJucyB7QXJyYXkuPCo+fVxuXHQgKi9cblx0dW5CaW5kKCBvYmosIGtleSwgcGF0aCApIHtcblx0XHRsZXQgZm9sbG93ZXJzID0gdGhpcy5fZm9sbG93ZXJzLFxuXHRcdCAgICBpICAgICAgICAgPSBmb2xsb3dlcnMgJiYgZm9sbG93ZXJzLmxlbmd0aDtcblx0XHR3aGlsZSAoIGZvbGxvd2VycyAmJiBpLS0gKVxuXHRcdFx0aWYgKCBmb2xsb3dlcnNbaV1bMF0gPT09IG9iaiAmJiBmb2xsb3dlcnNbaV1bMV0gPT09IGtleSAmJiBmb2xsb3dlcnNbaV1bMl0gPT09IHBhdGggKVxuXHRcdFx0XHRyZXR1cm4gZm9sbG93ZXJzLnNwbGljZShpLCAxKTtcblx0fVxuXHRcblx0XG5cdC8qKlxuXHQgKiBvbmNlKCdzdGFibGUnLCBjYilcblx0ICogQHBhcmFtIG9iaiB7UmVhY3QuQ29tcG9uZW50fFN0b3JlfGZ1bmN0aW9uKVxuXHQgKiBAcGFyYW0ga2V5IHtzdHJpbmd9IG9wdGlvbmFsIGtleSB3aGVyZSB0byBtYXAgdGhlIHB1YmxpYyBzdGF0ZVxuXHQgKi9cblx0dGhlbiggY2IgKSB7XG5cdFx0aWYgKCB0aGlzLl9zdGFibGUgKVxuXHRcdFx0cmV0dXJuIGNiKHRoaXMuZGF0YSk7XG5cdFx0dGhpcy5vbmNlKCdzdGFibGUnLCBlID0+IGNiKHRoaXMuZGF0YSkpO1xuXHR9XG5cdFxuXHQvKipcblx0ICogQWRkIGEgbG9jayBzbyB0aGUgc3RvcmUgd2lsbCBub3QgcHJvcGFnIGl0IGRhdGEgdW50aWxsIHJlbGVhc2UoKSBpcyBjYWxsXG5cdCAqIEBwYXJhbSBwcmV2aW91cyB7U3RvcmV8bnVtYmVyfEFycmF5fSBAb3B0aW9uYWwgd2YgdG8gd2FpdCwgcmVsZWFzZXMgdG8gd2FpdCBvclxuXHQgKiAgICAgYXJyYXkgb2Ygc3R1ZmYgdG8gd2FpdFxuXHQgKiBAcmV0dXJucyB7dGhpc31cblx0ICovXG5cdHdhaXQoIHByZXZpb3VzICkge1xuXHRcdGlmICggdHlwZW9mIHByZXZpb3VzID09IFwibnVtYmVyXCIgKVxuXHRcdFx0cmV0dXJuIHRoaXMuX19sb2Nrcy5hbGwgKz0gcHJldmlvdXM7XG5cdFx0aWYgKCBpcy5hcnJheShwcmV2aW91cykgKVxuXHRcdFx0cmV0dXJuIHByZXZpb3VzLm1hcCh0aGlzLndhaXQuYmluZCh0aGlzKSk7XG5cdFx0XG5cdFx0dGhpcy5fc3RhYmxlICYmIHRoaXMuZW1pdCgndW5zdGFibGUnLCB0aGlzLnN0YXRlLCB0aGlzLmRhdGEpO1xuXHRcdHRoaXMuX3N0YWJsZSA9IGZhbHNlO1xuXHRcdHRoaXMuX19sb2Nrcy5hbGwrKztcblx0XHRcblx0XHRsZXQgcmVhc29uID0gaXMuc3RyaW5nKHByZXZpb3VzKSA/IHByZXZpb3VzIDogbnVsbDtcblx0XHRpZiAoIHJlYXNvbiApIHtcblx0XHRcdHRoaXMuX19sb2Nrc1tyZWFzb25dID0gdGhpcy5fX2xvY2tzW3JlYXNvbl0gfHwgMDtcblx0XHRcdHRoaXMuX19sb2Nrc1tyZWFzb25dKys7XG5cdFx0fVxuXHRcdGlmICggcHJldmlvdXMgJiYgaXMuZm4ocHJldmlvdXMudGhlbikgKSB7XG5cdFx0XHRwcmV2aW91cy50aGVuKHRoaXMucmVsZWFzZS5iaW5kKHRoaXMsIG51bGwpKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBEZWNyZWFzZSBsb2NrcyBmb3IgdGhpcyBzdG9yZSwgaWYgaXQgcmVhY2ggMCAsXG5cdCAqIGl0IHdpbGwgYmUgcHJvcGFnYXRlZCB0byB0aGUgZm9sbG93ZXJzLFxuXHQgKiB0aGVuLCBhbGwgc3R1ZmYgcGFzc2VkIHRvIFwidGhlblwiIGNhbGwgYmFjayB3aWxsIGJlIGV4ZWMgLyByZWxlYXNlZFxuXHQgKiBAcGFyYW0gZGVzeW5jXG5cdCAqIEByZXR1cm5zIHsqfVxuXHQgKi9cblx0cmVsZWFzZSggcmVhc29uLCBjYiApIHtcblx0XHRsZXQgX3N0YXRpYyA9IHRoaXMuY29uc3RydWN0b3IsIG1lID0gdGhpcztcblx0XHRsZXQgaSAgICAgICA9IDAsIHdhc1N0YWJsZSA9IHRoaXMuX3N0YWJsZTtcblx0XHRcblx0XHRpZiAoIGlzLmZuKHJlYXNvbikgKSB7XG5cdFx0XHRjYiAgICAgPSByZWFzb247XG5cdFx0XHRyZWFzb24gPSBudWxsO1xuXHRcdH1cblx0XHRcblx0XHRpZiAoIHJlYXNvbiApIHtcblx0XHRcdGlmICggdGhpcy5fX2xvY2tzW3JlYXNvbl0gPT0gMCApXG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoXCJSZWxlYXNlIG1vcmUgdGhhbiBsb2NraW5nICFcIiwgcmVhc29uKTtcblx0XHRcdHRoaXMuX19sb2Nrc1tyZWFzb25dID0gdGhpcy5fX2xvY2tzW3JlYXNvbl0gfHwgMDtcblx0XHRcdHRoaXMuX19sb2Nrc1tyZWFzb25dLS07XG5cdFx0fVxuXHRcdFxuXHRcdGlmICggIXJlYXNvbiAmJiB0aGlzLl9fbG9ja3MuYWxsID09IDAgKVxuXHRcdFx0Y29uc29sZS5lcnJvcihcIlJlbGVhc2UgbW9yZSB0aGFuIGxvY2tpbmcgIVwiKTtcblx0XHRcblx0XHRpZiAoICEtLXRoaXMuX19sb2Nrcy5hbGwgJiYgdGhpcy5pc0NvbXBsZXRlKCkgKSB7XG5cdFx0XHRsZXQgcHJvcGFnICAgPSB0aGlzLnNob3VsZFByb3BhZyh0aGlzLmRhdGEpO1xuXHRcdFx0dGhpcy5fc3RhYmxlID0gdHJ1ZTtcblx0XHRcdHByb3BhZyAmJiB0aGlzLl9yZXYrKzsvL1xuXHRcdFx0aWYgKCBwcm9wYWcgJiYgdGhpcy5fZm9sbG93ZXJzLmxlbmd0aCApXG5cdFx0XHRcdHRoaXMuX2ZvbGxvd2Vycy5mb3JFYWNoKGZ1bmN0aW9uIHByb3BhZyggZm9sbG93ZXIgKSB7XG5cdFx0XHRcdFx0bGV0IGRhdGEgPSBmb2xsb3dlclsyXSA/IG1lLnJldHJpZXZlKGZvbGxvd2VyWzJdKSA6IG1lLmRhdGE7XG5cdFx0XHRcdFx0Ly9pZiAoICFkYXRhICkgcmV0dXJuO1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdGlmICggdHlwZW9mIGZvbGxvd2VyWzBdID09IFwiZnVuY3Rpb25cIiApIHtcblx0XHRcdFx0XHRcdGZvbGxvd2VyWzBdKGRhdGEpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHRcdC8vY2IgJiYgaSsrO1xuXHRcdFx0XHRcdFx0Zm9sbG93ZXJbMF0uc2V0U3RhdGUoXG5cdFx0XHRcdFx0XHRcdChmb2xsb3dlclsxXSkgPyB7IFtmb2xsb3dlclsxXV06IGRhdGEgfVxuXHRcdFx0XHRcdFx0XHQgICAgICAgICAgICAgIDogZGF0YVxuXHRcdFx0XHRcdFx0XHQvLyxcblx0XHRcdFx0XHRcdFx0Ly9jYiAmJiAoXG5cdFx0XHRcdFx0XHRcdC8vICAgICgpID0+ICghKC0taSkgJiYgY2IoKSlcblx0XHRcdFx0XHRcdFx0Ly8pXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHQvL2Vsc2Vcblx0XHRcdCF3YXNTdGFibGUgJiYgdGhpcy5lbWl0KCdzdGFibGUnLCB0aGlzLmRhdGEpO1xuXHRcdFx0cHJvcGFnICYmIHRoaXMuZW1pdCgndXBkYXRlJywgdGhpcy5kYXRhKTtcblx0XHRcdGNiICYmIGNiKClcblx0XHR9XG5cdFx0ZWxzZSBjYiAmJiB0aGlzLnRoZW4oY2IpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cdFxuXHRwcm9wYWcoIGRhdGEgKSB7XG5cdFx0dGhpcy5lbWl0KCd1cGRhdGUnLCBkYXRhKTtcblx0fVxuXHRcblx0cmV0YWluKCByZWFzb24gKSB7XG5cdFx0dGhpcy5fX3JldGFpbnMuYWxsKys7XG5cdFx0aWYgKCByZWFzb24gKSB7XG5cdFx0XHR0aGlzLl9fcmV0YWluc1tyZWFzb25dID0gdGhpcy5fX3JldGFpbnNbcmVhc29uXSB8fCAwO1xuXHRcdFx0dGhpcy5fX3JldGFpbnNbcmVhc29uXSsrO1xuXHRcdH1cblx0fVxuXHRcblx0ZGlzcG9zZSggcmVhc29uICkge1xuXHRcdC8vY29uc29sZS53YXJuKFwiZGlzcG9zZVwiLCByZWFzb24sIHRoaXMuX19yZXRhaW5zKTtcblx0XHRpZiAoIHJlYXNvbiApIHtcblx0XHRcdGlmICggIXRoaXMuX19yZXRhaW5zW3JlYXNvbl0gKVxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJSUyA6IERpc3Bvc2UgbW9yZSB0aGFuIHJldGFpbmluZyBvbiBzdG9yZSAnXCIgKyB0aGlzLm5hbWUgKyBcIicgOiBcIiArIHJlYXNvbik7XG5cdFx0XHRcblx0XHRcdHRoaXMuX19yZXRhaW5zW3JlYXNvbl0tLTtcblx0XHR9XG5cdFx0aWYgKCB0aGlzLl9fcmV0YWlucy5hbGwgPT0gMCApXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJSUyA6IERpc3Bvc2UgbW9yZSB0aGFuIHJldGFpbmluZyBvbiBzdG9yZSBcIiArIHRoaXMubmFtZSk7XG5cdFx0XG5cdFx0dGhpcy5fX3JldGFpbnMuYWxsLS07XG5cdFx0XG5cdFx0aWYgKCAhdGhpcy5fX3JldGFpbnMuYWxsICkge1xuXHRcdFx0aWYgKCB0aGlzLl9wZXJzaXN0ZW5jZVRtICkge1xuXHRcdFx0XHR0aGlzLl9kZXN0cm95VE0gJiYgY2xlYXJUaW1lb3V0KHRoaXMuX2Rlc3Ryb3lUTSk7XG5cdFx0XHRcdHRoaXMuX2Rlc3Ryb3lUTSA9IHNldFRpbWVvdXQoXG5cdFx0XHRcdFx0ZSA9PiB7XG5cdFx0XHRcdFx0XHR0aGlzLl9kZXN0cm95VE0gPSBudWxsO1xuXHRcdFx0XHRcdFx0Ly90aGlzLnRoZW4ocyA9PiB7XG5cdFx0XHRcdFx0XHQhdGhpcy5fX3JldGFpbnMuYWxsICYmICF0aGlzLmRlYWQgJiYgdGhpcy5kZXN0cm95KClcblx0XHRcdFx0XHRcdC8vfSk7XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR0aGlzLl9wZXJzaXN0ZW5jZVRtXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0Ly90aGlzLnRoZW4ocyA9PlxuXHRcdFx0XHQoIXRoaXMuX19yZXRhaW5zLmFsbCAmJiAhdGhpcy5kZWFkICYmIHRoaXMuZGVzdHJveSgpKVxuXHRcdFx0XHQvLyk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdFxuXHRkZXN0cm95KCkge1xuXHRcdC8vICBjb25zb2xlLmxvZyhcImRlc3Ryb3lcIiwgdGhpcy5fdWlkKTtcblx0XHRcblx0XHR0aGlzLmVtaXQoJ2Rlc3Ryb3knLCB0aGlzKTtcblx0XHRpZiAoIHRoaXMuX3N0YWJpbGl6ZXIgKVxuXHRcdFx0Y2xlYXJUaW1lb3V0KHRoaXMuX3N0YWJpbGl6ZXIpO1xuXHRcdFxuXHRcdGlmICggdGhpcy5fZm9sbG93ZXJzLmxlbmd0aCApXG5cdFx0XHR0aGlzLl9mb2xsb3dlcnMuZm9yRWFjaChcblx0XHRcdFx0KCBmb2xsb3dlciApID0+IHtcblx0XHRcdFx0XHRpZiAoIHR5cGVvZiBmb2xsb3dlclswXSAhPT0gXCJmdW5jdGlvblwiICkge1xuXHRcdFx0XHRcdFx0aWYgKCBmb2xsb3dlclswXS5zdG9yZXMgKVxuXHRcdFx0XHRcdFx0XHRkZWxldGUgZm9sbG93ZXJbMF0uc3RvcmVzW2ZvbGxvd2VyWzFdXTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdCk7XG5cdFx0dGhpcy5fZm9sbG93ZXJzLmxlbmd0aCA9IDA7XG5cdFx0dGhpcy5jb25zdHJ1Y3Rvci5fcmV2ICA9IHRoaXMucmV2O1xuXHRcdHRoaXMuZGVhZCAgICAgICAgICAgICAgPSB0cnVlO1xuXHRcdHRoaXMuX3JldnMgICAgICAgICAgICAgPSB0aGlzLmRhdGEgPSB0aGlzLnN0YXRlID0gdGhpcy5zY29wZSA9IG51bGw7XG5cdFx0dGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoKTtcblx0fVxufVxuXG4vKipcbiAqIGdldCBhIHN0YXRpYyBhbGlhc2VkIHJlZmVyZW5jZSBvZiBhIHN0b3JlXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICogQHJldHVybnMge3tzdG9yZTogU3RvcmUsIG5hbWU6ICp9fVxuICovXG5TdG9yZS5hcyA9IGZ1bmN0aW9uICggbmFtZSApIHtcblx0cmV0dXJuIHsgc3RvcmU6IHRoaXMsIG5hbWUgfTtcbn1cblxuLyoqXG4gKiBAdG9kb1xuICogTWFwIGFsbCBuYW1lZCBzdG9yZXMgaW4ge2tleXN9IHRvIHRoZSB7b2JqZWN0fSdzIHN0YXRlXG4gKiBIb29rIGNvbXBvbmVudFdpbGxVbm1vdW50IChmb3IgcmVhY3QgY29tcCkgb3IgZGVzdHJveSB0byB1bkJpbmQgdGhlbSBhdXRvbWF0aWNhbGx5XG4gKiBAc3RhdGljXG4gKiBAcGFyYW0gb2JqZWN0IHtPYmplY3R9IHRhcmdldCBzdGF0ZSBhd2FyZSBvYmplY3QgKFJlYWN0LkNvbXBvbmVudHxTdG9yZXwuLi4pXG4gKiBAcGFyYW0ga2V5cyB7QXJyYXl9IEV4IDogW1wic2Vzc2lvblwiLCBcIm90aGVyU3RhdGljTmFtZWRTdG9yZTprZXlcIixcbiAqICAgICBzdG9yZS5hcygnYW5vdGhlcktleScpXVxuICovXG5TdG9yZS5tYXAgPSBmdW5jdGlvbiAoIGNTdG9yZSwga2V5cywgc2NvcGUsIG9yaWdpbiwgc2V0SW5pdGlhbCA9IGZhbHNlICkge1xuXHRsZXQgdGFyZ2V0UmV2cyAgICAgPSBjU3RvcmUuX3JldnMgfHwge307XG5cdGxldCB0YXJnZXRTY29wZSAgICA9IGNTdG9yZS5zdG9yZXMgfHwgKGNTdG9yZS5zdG9yZXMgPSB7fSk7XG5cdGxldCBpbml0aWFsT3V0cHV0cyA9IHt9O1xuXHRrZXlzICAgICAgICAgICAgICAgPSBpcy5hcnJheShrZXlzKSA/IFsuLi5rZXlzXSA6IFtrZXlzXTtcblx0XG5cdFxuXHRzY29wZSA9IHNjb3BlIHx8IFN0b3JlLnN0YXRpY1Njb3BlO1xuXHRcblx0a2V5cyA9IGtleXMuZmlsdGVyKFxuXHRcdC8vIEB0b2RvIDogdXNlIHF1ZXJ5IHJlZnNcblx0XHQvLyAoc3RvcmUpKFxcLnN0b3JlKSooXFxbKFxcKnwocHJvcHMpXFx3KykrKVxcXSk/KFxcOmFsaWFzKVxuXHRcdCgga2V5ICkgPT4ge1xuXHRcdFx0aWYgKCAha2V5ICkge1xuXHRcdFx0XHRjb25zb2xlLmVycm9yKFwiTm90IGEgbWFwcGFibGUgc3RvcmUgaXRlbSAnXCIgKyBrZXkgKyBcIicgaW4gXCIgKyBvcmlnaW4gKyAnICEhJyk7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdGxldCBuYW1lLFxuXHRcdFx0ICAgIGFsaWFzLFxuXHRcdFx0ICAgIHBhdGgsXG5cdFx0XHQgICAgc3RvcmUsIF9rZXk7XG5cdFx0XHRpZiAoIGtleS5zdG9yZSAmJiBrZXkubmFtZSApIHtcblx0XHRcdFx0YWxpYXMgPSBuYW1lID0ga2V5Lm5hbWU7XG5cdFx0XHRcdHN0b3JlID0ga2V5LnN0b3JlO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSBpZiAoIGlzLmZuKGtleSkgKSB7XG5cdFx0XHRcdG5hbWUgID0gYWxpYXMgPSBrZXkubmFtZSB8fCBrZXkuZGVmYXVsdE5hbWU7XG5cdFx0XHRcdHN0b3JlID0ga2V5O1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdF9rZXkgID0ga2V5Lm1hdGNoKC8oW15cXC5cXDpdKykoKD86XFwuW15cXC5cXDpdKykqKSg/OlxcOihbXlxcLlxcOl0rKSk/Lyk7XG5cdFx0XHRcdG5hbWUgID0gX2tleVsxXTtcblx0XHRcdFx0cGF0aCAgPSBfa2V5WzJdICYmIF9rZXlbMl0uc3Vic3RyKDEpO1xuXHRcdFx0XHRzdG9yZSA9IHNjb3BlLnN0b3Jlc1tfa2V5WzFdXTtcblx0XHRcdFx0YWxpYXMgPSBfa2V5WzNdIHx8IHBhdGggJiYgcGF0aC5tYXRjaCgvKFteXFwuXSopJC8pWzBdIHx8IF9rZXlbMV07XG5cdFx0XHR9XG5cdFx0XHRpZiAoICFzdG9yZSApIHtcblx0XHRcdFx0bGV0IGkgPSBbXTtcblx0XHRcdFx0Zm9yICggbGV0IG8gaW4gc2NvcGUuc3RvcmVzIClcblx0XHRcdFx0XHRpLnB1c2gobylcblx0XHRcdFx0Y29uc29sZS5lcnJvcihcIk5vdCBhIG1hcHBhYmxlIHN0b3JlIGl0ZW0gJ1wiICsgbmFtZSArIFwiL1wiICsgYWxpYXMgKyBcIicgaW4gXCIgKyAoY1N0b3JlLm5hbWUgfHwgY1N0b3JlKSArICcgISEnLCBzdG9yZSwgX2tleSwgc2NvcGUuc3RvcmVzLCBpKTtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCBTY29wZS5pc1Njb3BlQ2xhc3Moc3RvcmUpICkgc2NvcGUuX21vdW50KG5hbWUpO1xuXHRcdFx0aWYgKCBTY29wZS5pc1Njb3BlKHN0b3JlKSApIHtcblx0XHRcdFx0c3RvcmUgPSBzY29wZS5fbW91bnQoa2V5KTtcblx0XHRcdH1cblx0XHRcdGVsc2UgaWYgKCB0YXJnZXRSZXZzW25hbWVdICkgcmV0dXJuIGZhbHNlOy8vIGlnbm9yZSBkYmwgdXNlcyBmb3Igbm93XG5cdFx0XHRcblx0XHRcdFxuXHRcdFx0aWYgKCBpcy5mbihzdG9yZSkgKSB7XG5cdFx0XHRcdHNjb3BlLl9tb3VudChuYW1lKVxuXHRcdFx0XHRzY29wZS5zdG9yZXNbbmFtZV0uYmluZChjU3RvcmUsIGFsaWFzLCBzZXRJbml0aWFsLCBwYXRoKTtcblx0XHRcdH1cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHRzdG9yZS5iaW5kKGNTdG9yZSwgYWxpYXMsIHNldEluaXRpYWwsIHBhdGgpO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHQvLyBnaXZlIGluaXRpYWwgc3RvcmUgd2VpZ2h0IGJhc2luZyBzb3VyY2VzXG5cdFx0XHRzY29wZS5zdG9yZXNbbmFtZV0uX3NvdXJjZXMgJiYgY1N0b3JlLl9zb3VyY2VzLnB1c2goLi4uc2NvcGUuc3RvcmVzW25hbWVdLl9zb3VyY2VzKTtcblx0XHRcdFxuXHRcdFx0dGFyZ2V0UmV2c1thbGlhc10gPSB0YXJnZXRSZXZzW2FsaWFzXSB8fCB0cnVlO1xuXHRcdFx0IXRhcmdldFNjb3BlW25hbWVdICYmICh0YXJnZXRTY29wZVtuYW1lXSA9IHNjb3BlLnN0b3Jlc1tuYW1lXSk7XG5cdFx0XHRpZiAoIHNjb3BlLnN0b3Jlc1tuYW1lXS5oYXNPd25Qcm9wZXJ0eSgnZGF0YScpIClcblx0XHRcdFx0aW5pdGlhbE91dHB1dHNbbmFtZV0gPSBzY29wZS5kYXRhW25hbWVdO1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHQpO1xuXHRcblx0Ly8gLi4uIEB0b2RvXG5cdGNTdG9yZS5vbmNlKCdkZXN0cm95JywgKCAuLi5hcmd6ICkgPT4ge1xuXHRcdGtleXMubWFwKFxuXHRcdFx0KCBrZXkgKSA9PiB7XG5cdFx0XHRcdGxldCBuYW1lLFxuXHRcdFx0XHQgICAgYWxpYXMsIHBhdGgsXG5cdFx0XHRcdCAgICBzdG9yZTtcblx0XHRcdFx0aWYgKCBrZXkuc3RvcmUgJiYga2V5Lm5hbWUgKSB7XG5cdFx0XHRcdFx0YWxpYXMgPSBuYW1lID0ga2V5Lm5hbWU7XG5cdFx0XHRcdFx0c3RvcmUgPSBrZXkuc3RvcmU7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZSBpZiAoIGlzLmZuKGtleSkgKSB7XG5cdFx0XHRcdFx0bmFtZSAgPSBhbGlhcyA9IGtleS5uYW1lIHx8IGtleS5kZWZhdWx0TmFtZTtcblx0XHRcdFx0XHRzdG9yZSA9IHNjb3BlLnN0b3Jlc1tuYW1lXTtcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHRrZXkgICA9IGtleS5tYXRjaCgvKFteXFwuXFw6XSspKCg/OlxcLlteXFwuXFw6XSspKikoPzpcXDooW15cXC5cXDpdKykpPy8pO1xuXHRcdFx0XHRcdG5hbWUgID0ga2V5WzFdO1xuXHRcdFx0XHRcdHBhdGggID0ga2V5WzJdICYmIGtleVsyXS5zdWJzdHIoMSk7XG5cdFx0XHRcdFx0c3RvcmUgPSBzY29wZS5zdG9yZXNba2V5WzFdXTtcblx0XHRcdFx0XHRhbGlhcyA9IGtleVszXSB8fCBwYXRoICYmIHBhdGgubWF0Y2goLyhbXlxcLl0qKSQvKVswXSB8fCBrZXlbMV07XG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHRcdHN0b3JlICYmICFpcy5mbihzdG9yZSkgJiYgc3RvcmUudW5CaW5kKGNTdG9yZSwgYWxpYXMsIHBhdGgpXG5cdFx0XHR9XG5cdFx0KTtcblx0fSlcblx0XG5cdHJldHVybiBpbml0aWFsT3V0cHV0cztcbn07XG5cblxuU3RvcmUuaXNTdG9yZSAgICAgID0gU2NvcGUuaXNTdG9yZSA9IGZ1bmN0aW9uICggb2JqICkge1xuXHRyZXR1cm4gb2JqIGluc3RhbmNlb2YgU3RvcmVcbn1cblN0b3JlLmlzU3RvcmVDbGFzcyA9IFNjb3BlLmlzU3RvcmVDbGFzcyA9IGZ1bmN0aW9uICggb2JqICkge1xuXHRyZXR1cm4gU3RvcmUuaXNQcm90b3R5cGVPZihvYmopIHx8IG9iaiA9PT0gU3RvcmVcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RvcmU7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1N0b3JlLmpzIiwiLypcbiAqIFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuICogQ29weXJpZ2h0IChjKSAyMDE5LiBXaXNlIFdpbGQgV2ViXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSDigJxTb2Z0d2FyZeKAnSksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCDigJxBUyBJU+KAnSwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4gKlxuICogIEBhdXRob3IgOiBOYXRoYW5hZWwgQnJhdW5cbiAqICBAY29udGFjdCA6IG44dHouanNAZ21haWwuY29tXG4gKi9cblxuaW1wb3J0IGlzIGZyb20gXCJpc1wiO1xuXG4vKipcbiAqIE1pbmltYWwgcHVzaCBzZXF1ZW5jZXIsIGFwcGx5IHN0b3JlcyBzcGVjaWZpYyB0YXNrIGluIHRoZSByaWdodCBvcmRlclxuICovXG5sZXQgdGFza1F1ZXVlICAgICAgPSBbXSxcbiAgICBjdXJXZWlnaHQgICAgICA9IDAsXG4gICAgbWF4V2VpZ2h0ICAgICAgPSAwLFxuICAgIG1pbldlaWdodCAgICAgID0gMCxcbiAgICB0YXNrQ291bnQgICAgICA9IDAsXG4gICAgZGVTeW5jICAgICAgICAgPSBmYWxzZSxcbiAgICBkZVN5bmNNYXhUYXNrcyA9IDEwLFxuICAgIHRhc2ssXG4gICAgaXNSdW5uaW5nLFxuICAgIGVycm9yQ2F0Y2hlciAgID0ge1xuICAgICAgICBsYXN0RXJyb3I6IG51bGwsXG4gICAgICAgIGRpc3BhdGNoIDogZnVuY3Rpb24gKCBlcnJvciApIHtcbiAgICAgICAgICAgIGVycm9yQ2F0Y2hlci5kaXNhYmxlKCk7XG4gICAgICAgICAgICBpZiAoIHRhc2sgJiYgdGFza1sgMCBdLmhhbmRsZUVycm9yICkge1xuICAgICAgICAgICAgICAgIHRhc2tbIDAgXS5oYW5kbGVFcnJvcihlcnJvciwgdGFzayk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICggdGFzayApXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlJlU2NvcGUgOiBBbiBhcHBseSB0YXNrIGhhcyBmYWlsZWQgISFcIiwgdGFza1sgMSBdLCBcIiBvbiBcIiwgdGFza1sgMCBdLm5hbWUgfHwgdGFza1sgMCBdLmNvbnN0cnVjdG9yLm5hbWUpXG4gICAgICAgIFxuICAgICAgICAgICAgaXNSdW5uaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB0YXNrICAgICAgPSBudWxsO1xuICAgICAgICAgICAgcnVuTm93KCk7XG4gICAgICAgIH0sXG4gICAgICAgIGVuYWJsZSAgIDogKCB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyApXG4gICAgICAgICAgICAgICAgICAgPyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgZXJyb3JDYXRjaGVyLmRpc3BhdGNoKVxuICAgICAgICAgICAgfSA6ICgpID0+IHtcbiAgICAgICAgICAgICAgICBwcm9jZXNzLm9uKCd1bmNhdWdodEV4Y2VwdGlvbicsIGVycm9yQ2F0Y2hlci5kaXNwYXRjaCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICBkaXNhYmxlICA6ICggdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgKVxuICAgICAgICAgICAgICAgICAgID8gKCkgPT4ge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdlcnJvcicsIGVycm9yQ2F0Y2hlci5kaXNwYXRjaClcbiAgICAgICAgICAgIH0gOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgcHJvY2Vzcy5yZW1vdmVMaXN0ZW5lcigndW5jYXVnaHRFeGNlcHRpb24nLCBlcnJvckNhdGNoZXIuZGlzcGF0Y2gpO1xuICAgICAgICAgICAgfVxuICAgIH1cbjtcblxuZnVuY3Rpb24gcnVuTm93KCkge1xuICAgIGlmICggIWlzUnVubmluZyApIHtcbiAgICAgICAgcnVuKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBydW4oKSB7XG4gICAgbGV0IGZyb20gID0gRGF0ZS5ub3coKTtcbiAgICBpc1J1bm5pbmcgPSB0cnVlO1xuICAgIGVycm9yQ2F0Y2hlci5lbmFibGUoKTtcbiAgICB3aGlsZSAoIHRhc2tDb3VudCApIHtcbiAgICAgICAgXG4gICAgICAgIC8vIHRyeSBmb3IgdGhlIGN1cnJlbnQgd2VpZ2h0XG4gICAgICAgIHdoaWxlICggISggdGFza1F1ZXVlWyBjdXJXZWlnaHQgXSAmJiB0YXNrUXVldWVbIGN1cldlaWdodCBdLmxlbmd0aCApIClcbiAgICAgICAgICAgIGN1cldlaWdodCsrO1xuICAgICAgICBcbiAgICAgICAgdGFza0NvdW50LS07XG4gICAgICAgIHRhc2sgPSB0YXNrUXVldWVbIGN1cldlaWdodCBdLnNoaWZ0KCk7XG4gICAgICAgIC8vY29uc29sZS5sb2coXCJUYXNrIDogXCIsIHRhc2tbMV0sIFwiIG9uIFwiLCB0YXNrWzBdLm5hbWUpO1xuICAgICAgICB0YXNrWyAwIF1bIHRhc2tbIDEgXSBdLmFwcGx5KHRhc2tbIDAgXSwgdGFza1sgMiBdKTtcbiAgICB9XG4gICAgdGFzayA9IHVuZGVmaW5lZDtcbiAgICBlcnJvckNhdGNoZXIuZGlzYWJsZSgpO1xuICAgIFxuICAgIGlzUnVubmluZyA9IGZhbHNlO1xuICAgIGlmICggdGFza0NvdW50ICkge1xuICAgICAgICBzZXRUaW1lb3V0KHJ1bk5vdyk7XG4gICAgfVxufVxuXG4vL1xuLy9pbmRleC5zZXRUYXNrRGVTeW5jID0gKCBuYiApID0+IHtcbi8vICAgIGlmICggbmIgPT09IGZhbHNlIClcbi8vICAgICAgICByZXR1cm4gZGVTeW5jID0gZmFsc2U7XG4vLyAgICBlbHNlIGlmICggbmIgPT09IHRydWUgKSB7XG4vLyAgICAgICAgZGVTeW5jICAgICAgICAgPSB0cnVlO1xuLy8gICAgICAgIGRlU3luY01heFRhc2tzID0gMTA7XG4vLyAgICB9XG4vLyAgICBlbHNlIChpcy5pbnQobmIpKVxuLy8gICAge1xuLy8gICAgICAgIGRlU3luYyAgICAgICAgID0gdHJ1ZTtcbi8vICAgICAgICBkZVN5bmNNYXhUYXNrcyA9IG5iO1xuLy8gICAgfVxuLy99O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgcHVzaFRhc2soIG9iaiwgZm4sIGFyZ3ogKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgbW9yZSBhIHN0b3JlIGhhdmUgc291cmNlcywgdGhlIG1vcmUgaXQgc2hvdWxkIGJlIHByb2Nlc3NlZCBmaXJzdFxuICAgICAgICAgKiBTbyBsZWFmcyBzdG9yZXMgc3RheSBzeW5jLCBhbmQgcm9vdCBzdG9yZXMgcmVjZWl2ZSBtZXJnZWQgc3RhdGUgdXBkYXRlcztcbiAgICAgICAgICogZ2xvYmFsIHN0YXRlIHN0YXkgY29oZXJlbnRcbiAgICAgICAgICpcbiAgICAgICAgICogVGhpcyBtZWFuIHdoYXRldmVyIHRoZSBudW1iZXIgb2Ygc3RvcmVzICYgdGhlIGNvbXBsZXhpdHkgb2YgdGhlIGRlcHMsXG4gICAgICAgICAqIHVwZGF0aW5nIGEgc3RvcmUgc3RhdGUgd2lsbCB1cGRhdGUgaXRzIHN5bmNocm9uZSBjaGlsZCBzdG9yZXMgaW1tZWRpYXRlbHlcbiAgICAgICAgICpcbiAgICAgICAgICpcbiAgICAgICAgICogQHR5cGUgeyp8bnVtYmVyfVxuICAgICAgICAgKi9cbiAgICAgICAgbGV0IHdlaWdodCA9IG9iai5fc291cmNlcyAmJiBvYmouX3NvdXJjZXMubGVuZ3RoIHx8IDEsXG4gICAgICAgICAgICBzdGFjayAgPSB0YXNrUXVldWVbIHdlaWdodCBdID1cbiAgICAgICAgICAgICAgICB0YXNrUXVldWVbIHdlaWdodCBdIHx8IFtdO1xuICAgICAgICBcbiAgICAgICAgbWF4V2VpZ2h0ID0gTWF0aC5tYXgobWF4V2VpZ2h0LCB3ZWlnaHQpO1xuICAgICAgICBjdXJXZWlnaHQgPSBNYXRoLm1pbihjdXJXZWlnaHQsIHdlaWdodCk7XG4gICAgICAgIHRhc2tDb3VudCsrO1xuICAgICAgICBcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcIlB1c2ggVGFzayA6IFwiLCBmbiwgXCIgb24gXCIsIG9iai5uYW1lLCB3ZWlnaHQpO1xuICAgICAgICBzdGFjay5wdXNoKFsgb2JqLCBmbiwgYXJneiBdKTtcbiAgICAgICAgc2V0VGltZW91dChydW5Ob3csIDApO1xuICAgICAgICByZXR1cm4gc3RhY2subGVuZ3RoO1xuICAgIH1cbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWxzL1Rhc2tTZXF1ZW5jZXIuanMiXSwic291cmNlUm9vdCI6IiJ9