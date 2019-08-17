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
	 *   The MIT License (MIT)
	 *   Copyright (c) 2019. Wise Wild Web
	 *
	 *   Permission is hereby granted, free of charge, to any person obtaining a copy
	 *   of this software and associated documentation files (the "Software"), to deal
	 *   in the Software without restriction, including without limitation the rights
	 *   to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	 *   copies of the Software, and to permit persons to whom the Software is
	 *   furnished to do so, subject to the following conditions:
	 *
	 *   The above copyright notice and this permission notice shall be included in all
	 *   copies or substantial portions of the Software.
	 *
	 *   THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	 *   IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 *   FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	 *   AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	 *   LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	 *   OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	 *   SOFTWARE.
	 *
	 *   @author : Nathanael Braun
	 *   @contact : n8tz.js@gmail.com
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
	                    *   The MIT License (MIT)
	                    *   Copyright (c) 2019. Wise Wild Web
	                    *
	                    *   Permission is hereby granted, free of charge, to any person obtaining a copy
	                    *   of this software and associated documentation files (the "Software"), to deal
	                    *   in the Software without restriction, including without limitation the rights
	                    *   to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	                    *   copies of the Software, and to permit persons to whom the Software is
	                    *   furnished to do so, subject to the following conditions:
	                    *
	                    *   The above copyright notice and this permission notice shall be included in all
	                    *   copies or substantial portions of the Software.
	                    *
	                    *   THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	                    *   IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	                    *   FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	                    *   AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	                    *   LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	                    *   OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	                    *   SOFTWARE.
	                    *
	                    *   @author : Nathanael Braun
	                    *   @contact : n8tz.js@gmail.com
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
					if (Scope.isScope(store)) {
						if (state !== undefined) store.setState(state);
						if (ref.path.length > 1) store._mount(ref.path.slice(1).join('.'));
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
					var hotReloading = void 0,
					    actions = void 0,
					    activeActions = void 0;
	
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
	
					activeActions = targetCtx._.actions.prototype;
					// not mapping hierarchic scopes
					if (id !== "$parent") {
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
						actions = srcCtx[id] instanceof Scope.Store ? srcCtx[id].constructor.actions : srcCtx[id].actions;
	
						if (Scope.isScopeClass(_._scope[id])) _this4._mount(id);
	
						if (Scope.isScope(_._scope[id])) {
							// map hierarchic scopes
							activeActions[id] = _._scope[id].actions;
						} else if (!Scope.isStore(_._scope[id]) && !Scope.isStoreClass(_._scope[id])) return;
	
						actions && Object.keys(actions).forEach(function (act) {
							if (activeActions.hasOwnProperty(act)) activeActions[act].__targetStores++;else {
								activeActions[act] = _this4.dispatch.bind(_this4, act);
								activeActions[act].__targetStores = 1;
							}
						});
					} else {
						activeActions[id] = srcCtx[id].actions;
					}
	
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
				[].concat(_toConsumableArray(this._.childScopes)).map(function (scope) {
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
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *   The MIT License (MIT)
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *   Copyright (c) 2019. Wise Wild Web
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *   Permission is hereby granted, free of charge, to any person obtaining a copy
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *   of this software and associated documentation files (the "Software"), to deal
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *   in the Software without restriction, including without limitation the rights
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *   to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *   copies of the Software, and to permit persons to whom the Software is
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *   furnished to do so, subject to the following conditions:
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *   The above copyright notice and this permission notice shall be included in all
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *   copies or substantial portions of the Software.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *   THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *   IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *   FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *   AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *   LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *   OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *   SOFTWARE.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *   @author : Nathanael Braun
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *   @contact : n8tz.js@gmail.com
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
	 *   The MIT License (MIT)
	 *   Copyright (c) 2019. Wise Wild Web
	 *
	 *   Permission is hereby granted, free of charge, to any person obtaining a copy
	 *   of this software and associated documentation files (the "Software"), to deal
	 *   in the Software without restriction, including without limitation the rights
	 *   to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	 *   copies of the Software, and to permit persons to whom the Software is
	 *   furnished to do so, subject to the following conditions:
	 *
	 *   The above copyright notice and this permission notice shall be included in all
	 *   copies or substantial portions of the Software.
	 *
	 *   THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	 *   IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 *   FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	 *   AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	 *   LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	 *   OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	 *   SOFTWARE.
	 *
	 *   @author : Nathanael Braun
	 *   @contact : n8tz.js@gmail.com
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
	 *   The MIT License (MIT)
	 *   Copyright (c) 2019. Wise Wild Web
	 *
	 *   Permission is hereby granted, free of charge, to any person obtaining a copy
	 *   of this software and associated documentation files (the "Software"), to deal
	 *   in the Software without restriction, including without limitation the rights
	 *   to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	 *   copies of the Software, and to permit persons to whom the Software is
	 *   furnished to do so, subject to the following conditions:
	 *
	 *   The above copyright notice and this permission notice shall be included in all
	 *   copies or substantial portions of the Software.
	 *
	 *   THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	 *   IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 *   FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	 *   AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	 *   LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	 *   OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	 *   SOFTWARE.
	 *
	 *   @author : Nathanael Braun
	 *   @contact : n8tz.js@gmail.com
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
							this._nextState = this._changesSW = _extends({}, this._changesSW, initialState || {}, this.$scope.map(this, this._use));
							this.state = {};
							if (this.shouldApply(this._nextState) && this.data === undefined) {
								this.data = this.apply(this.data, this._nextState, this._changesSW);
								applied = true;
								this.state = this._changesSW;
								this._nextState = this._changesSW = null;
							}
						}
					} else {
						applied = true;
						this.state = _extends({}, this._changesSW, initialState || {}, this.$scope.map(this, this._use));
						this._nextState = this._changesSW = null;
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
				return state;
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
					if (is.function(ns)) ns = ns(this.nextState);
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
	   * @param forcedState
	   */
	
		}, {
			key: 'pushState',
			value: function pushState(forcedState) {
				if (!forcedState && !this._changesSW && this.data) return;
	
				var nextState = forcedState || this._nextState || this.state,
				    nextData = void 0;
				Object.keys(nextState).forEach(function (key) {
					return nextState[key] === undefined && delete nextState[key];
				});
				nextData = this.apply(this.data, nextState, this._changesSW);
	
				this._stabilizer = null;
				this.state = nextState;
				this._nextState = null;
				this._changesSW = null;
	
				if (!forcedState && !this.hasDataChange(nextData)) {
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
				var change = void 0,
				    changes = this._changesSW = this._changesSW || {},
				    nextState = this._nextState = this._nextState || _extends({}, this.state),
				    key = void 0;
				for (key in pState) {
					if (!this.state || changes.hasOwnProperty(key) // todo
					&& pState[key] !== changes[key] || pState.hasOwnProperty(key) && pState[key] !== this.state[key]) {
						change = true;
						nextState[key] = changes[key] = pState[key];
					}
				}if (!this.shouldApply(nextState)) {
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
			value: function restore(snapshot, immediate) {
				var _this6 = this;
	
				snapshot = snapshot && keyWalknGet(snapshot, this.scopeObj._id + '/' + this.name) || this.$scope.takeSnapshotByKey(this.scopeObj._id + '/' + this.name);
	
				if (!snapshot) return;
	
				if (snapshot) {
	
					if (!this.isStable() && !immediate) this.then(function () {
						return _this6.restore(snapshot);
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
				return this._nextState || this.state;
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
	    *   The MIT License (MIT)
	    *   Copyright (c) 2019. Wise Wild Web
	    *
	    *   Permission is hereby granted, free of charge, to any person obtaining a copy
	    *   of this software and associated documentation files (the "Software"), to deal
	    *   in the Software without restriction, including without limitation the rights
	    *   to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	    *   copies of the Software, and to permit persons to whom the Software is
	    *   furnished to do so, subject to the following conditions:
	    *
	    *   The above copyright notice and this permission notice shall be included in all
	    *   copies or substantial portions of the Software.
	    *
	    *   THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	    *   IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	    *   FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	    *   AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	    *   LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	    *   OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	    *   SOFTWARE.
	    *
	    *   @author : Nathanael Braun
	    *   @contact : n8tz.js@gmail.com
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
			!task[0].dead && task[0][task[1]](task[2]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOTMzYzA5NzVhZmQ5MGVjMTJlODgiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9TY29wZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInNob3J0aWRcIiIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvRW1pdHRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1N0b3JlLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9UYXNrU2VxdWVuY2VyLmpzIl0sIm5hbWVzIjpbIiRnbG9iYWwiLCJ3aW5kb3ciLCJnbG9iYWwiLCJSUyIsIl9fX3Jlc2NvcGUiLCJjb25zb2xlIiwid2FybiIsIlNjb3BlIiwiU3RvcmUiLCJzY29wZVJlZiIsIm1hcCIsImtleSIsIl9fcHJvdG9fX3B1c2giLCJ0YXJnZXQiLCJpZCIsInBhcmVudCIsImZuIiwicHJvdG90eXBlIiwiXyIsImFsbFNjb3BlcyIsInNtIiwic3RhdGUiLCJfcmVmcyIsImFjdGlvbnMiLCJwYXRoIiwiYXBwbGllciIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwiY3BhdGgiLCJwdXNoIiwiRnVuY3Rpb24iLCJhcyIsInNjb3BlcyIsInNrZXkiLCJpcyIsImFycmF5Iiwic29ydCIsImEiLCJiIiwiZmlyc3RuYW1lIiwiam9pbiIsInN0b3Jlc01hcCIsInVwcGVyU2NvcGUiLCJzbmFwc2hvdCIsImRhdGEiLCJpbmNyZW1lbnRJZCIsInBlcnNpc3RlbmNlVG0iLCJhdXRvRGVzdHJveSIsInJvb3RFbWl0dGVyIiwiYm91bmRlZEFjdGlvbnMiLCJrZXlQSUQiLCJfaWQiLCJzaG9ydGlkIiwiZ2VuZXJhdGUiLCJiYXNlSWQiLCJpc0xvY2FsSWQiLCJyZWdpc3RlciIsImkiLCJfcmV2Iiwic3RvcmVzIiwiX2F1dG9EZXN0cm95IiwiY29uc3RydWN0b3IiLCJkZWFkIiwiRXJyb3IiLCJzb3VyY2VzIiwiY2hpbGRTY29wZXMiLCJjaGlsZFNjb3Blc0xpc3QiLCJ1blN0YWJsZUNoaWxkcyIsInNlZW5DaGlsZHMiLCJfbGlzdGVuaW5nIiwiX3Njb3BlIiwiX21peGVkIiwiX21peGVkTGlzdCIsImZvbGxvd2VycyIsIl9fcmV0YWlucyIsImFsbCIsIl9fbG9ja3MiLCJfYm91bmRlZEFjdGlvbnMiLCJ0ZXN0IiwiaW5jbHVkZXMiLCJiaW5kIiwicmV0YWluIiwiX3N0YWJsZSIsIndhaXQiLCJvbiIsIl9wYXJlbnRMaXN0IiwicmVsZWFzZSIsIl9wcm9wYWciLCJfYWRkQ2hpbGQiLCJyZXN0b3JlIiwic2V0VGltZW91dCIsImRpc3Bvc2UiLCJzdG9yZUlkTGlzdCIsIl9tb3VudCIsInN0b3JlSWQiLCJhcmd1bWVudHMiLCJyZWYiLCJwYXJzZVJlZiIsInJlZHVjZVJpZ2h0IiwibW91bnRlZCIsImN0eCIsInN0b3JlIiwidGFza1F1ZXVlIiwiaXNTdG9yZUNsYXNzIiwibmFtZSIsImxlbmd0aCIsInNoaWZ0IiwiaXNTY29wZUNsYXNzIiwiJHBhcmVudCIsIm1vdW50Iiwic2xpY2UiLCJpc1N0b3JlIiwidW5kZWZpbmVkIiwic2V0U3RhdGUiLCJpc1Njb3BlIiwiX3dhdGNoU3RvcmUiLCJyZWxpbmsiLCJzaW5nbGV0b24iLCJzcmNDdHgiLCJ0YXJnZXRDdHgiLCJleHRlcm5hbCIsImZvcmNlIiwiaG90UmVsb2FkaW5nIiwiYWN0aXZlQWN0aW9ucyIsImluZm8iLCJ0bXAiLCJuZXh0U3RhdGUiLCJkZXN0cm95IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwiZ2V0Iiwic2V0IiwidiIsImFjdCIsImhhc093blByb3BlcnR5IiwiX190YXJnZXRTdG9yZXMiLCJkaXNwYXRjaCIsImlzU3RhYmxlIiwicHJvcGFnIiwibGlzdHMiLCJfX29yaWdpbiIsInNldEluaXRpYWwiLCJyZXZNYXAiLCJsYXN0UmV2cyIsInJlZktleXMiLCJzdHJpbmciLCJyZWR1Y2UiLCJyZXZzIiwicmV2IiwicmVmcyIsInJldGFpblN0b3JlcyIsImdldFVwZGF0ZXMiLCJkaXNwb3NlU3RvcmVzIiwic3BsaWNlIiwicmVmTGlzdCIsIm1peGVkQ1dVbm1vdW50IiwidW5Nb3VudEtleSIsImlzUmVhY3RDb21wb25lbnQiLCJ1bkJpbmQiLCJhbGlhcyIsInJldHJpZXZlIiwic3BsaXQiLCJvYmoiLCJjU2NvcGUiLCJyZXRyaWV2ZVN0b3JlIiwic3RvcmVzUmV2TWFwIiwibG9jYWwiLCJ1cGRhdGVkIiwiZ2V0U3RvcmVzUmV2cyIsIl9nZXRSZXZNYXAiLCJvdXRwdXQiLCJjaGlsZHMiLCJfZ2V0QWxsQ2hpbGRzIiwiY2ZnIiwicGFyZW50QWxpYXMiLCJzaWQiLCJzZXJpYWxpemVfZXgiLCJleGNsdWRlIiwid2l0aENoaWxkcyIsIndpdGhNaXhlZCIsIm5vcmVmcyIsInNlcmlhbGl6ZSIsIndpdGhDaGlsZCIsIndpdGhQYXJlbnRzIiwiaCIsImsiLCJib29sIiwic25hcCIsInRha2VTbmFwc2hvdEJ5S2V5Iiwic3RhcnRzV2l0aCIsInN1YnN0ciIsImdldFNuYXBzaG90QnlLZXkiLCJkZWxldGVTbmFwc2hvdEJ5S2V5IiwicmVwbGFjZSIsInBTdGF0ZSIsIl9yZWYiLCJhY3Rpb24iLCJhcmd6Iiwic3RhY2siLCJiQWN0cyIsInRyaWdnZXIiLCJjYiIsIm9uY2UiLCJ0aGVuIiwib25jZVN0YWJsZVRyZWUiLCJyZWFzb24iLCJlbWl0IiwiZXJyb3IiLCJzdGFiaWxpemVyVE0iLCJjbGVhclRpbWVvdXQiLCJwcm9wYWdUTSIsInJlbWFwcyIsInNjb3BlIiwid2FzU3RhYmxlIiwiaW5kZXhPZiIsInVuIiwiZGVzdHJveVRNIiwicmVtb3ZlTGlzdGVuZXIiLCJmb2xsb3dlciIsIl9ybUNoaWxkIiwiRXZlbnRFbWl0dGVyIiwiaXNQcm90b3R5cGVPZiIsIkVtaXR0ZXIiLCJfZXZlbnRzIiwiZXZ0Iiwid2Fsa25TZXQiLCJ3YWxrbkdldCIsImtleVdhbGtuU2V0Iiwia2V5V2Fsa25HZXQiLCJyZXF1aXJlIiwidmFsdWUiLCJpc0tleSIsImZpbHRlciIsIlRhc2tTZXF1ZW5jZXIiLCJvYmpQcm90byIsImdldFByb3RvdHlwZU9mIiwiX3N0YXRpYyIsImdldFNjb3BlIiwic3RhdGljU2NvcGUiLCJ3YXRjaHMiLCJ1c2UiLCJhcHBseSIsImluaXRpYWxTdGF0ZSIsImRlZmF1bHRTdGF0ZSIsIl91aWQiLCJfb25TdGFiaWxpemUiLCJfcGVyc2lzdGVuY2VUbSIsIl9jZmciLCJzY29wZU9iaiIsIiRzY29wZSIsIiRzdG9yZXMiLCIkYWN0aW9ucyIsIiRkaXNwYXRjaCIsIl9yZXZzIiwiX3JlcXVpcmUiLCJfc291cmNlcyIsIl91c2UiLCJtYXRjaCIsInJlZjIiLCJfZm9sbG93ZXJzIiwiX2NoYW5nZXNTVyIsIl9hZnRlckNvbnN0cnVjdG9yIiwiaW5pdGlhbERhdGEiLCJhcHBsaWVkIiwiX25leHRTdGF0ZSIsInNob3VsZEFwcGx5IiwibWFuYWdlZCIsIm5EYXRhcyIsInIiLCJjRGF0YXMiLCJpc0NvbXBsZXRlIiwiZm9sbG93IiwiY2FsbCIsImNoYW5nZXMiLCJfc3RhYmlsaXplciIsInB1c2hUYXNrIiwibnMiLCJmdW5jdGlvbiIsImhhc0RhdGFDaGFuZ2UiLCJzdGFibGUiLCJmb3JjZWRTdGF0ZSIsIm5leHREYXRhIiwic3luYyIsImNoYW5nZSIsInB1c2hTdGF0ZSIsInN0YWJpbGl6ZSIsInNJZCIsInJlZnNDb3VudCIsInBlcnNpc3RlbnQiLCJzaG91bGRTZXJpYWxpemUiLCJkYXRhUmVmcyIsInN0YXRlS2V5cyIsInN0YXRlUmVmcyIsImluUmVmc0NvdW50IiwiaW5SZWZzIiwiX19wcm90b19fIiwibnVtYmVyIiwiaW1tZWRpYXRlIiwicmVzdG9yZVJlZlBhdGgiLCJwcmV2aW91cyIsIm1lIiwic2hvdWxkUHJvcGFnIiwiX2Rlc3Ryb3lUTSIsInJlbW92ZUFsbExpc3RlbmVycyIsImNTdG9yZSIsIm9yaWdpbiIsInRhcmdldFJldnMiLCJ0YXJnZXRTY29wZSIsImluaXRpYWxPdXRwdXRzIiwiX2tleSIsImRlZmF1bHROYW1lIiwibyIsImN1cldlaWdodCIsIm1heFdlaWdodCIsIm1pbldlaWdodCIsInRhc2tDb3VudCIsImRlU3luYyIsImRlU3luY01heFRhc2tzIiwidGFzayIsImlzUnVubmluZyIsImVycm9yQ2F0Y2hlciIsImxhc3RFcnJvciIsImRpc2FibGUiLCJoYW5kbGVFcnJvciIsInJ1bk5vdyIsImVuYWJsZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJwcm9jZXNzIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJ1biIsImZyb20iLCJEYXRlIiwibm93Iiwid2VpZ2h0IiwiTWF0aCIsIm1heCIsIm1pbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNWQTs7OztBQUNBOzs7Ozs7QUE3QkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMEJBLEtBQUlBLFVBQVcsT0FBT0MsTUFBUCxLQUFrQixXQUFuQixHQUFrQ0EsTUFBbEMsR0FBMkNDLE1BQXpEOztBQUtBLEtBQU1DLEtBQUtILFFBQVFJLFVBQVIsSUFBc0IsRUFBakM7O0FBRUEsS0FBS0osUUFBUUksVUFBYixFQUEwQjtBQUN6QkMsV0FBUUMsSUFBUixDQUFhLCtEQUFiO0FBQ0EsRUFGRCxNQUdLOztBQUVKTixXQUFRSSxVQUFSLEdBQXFCRCxFQUFyQjtBQUNBSSxtQkFBTUMsS0FBTixHQUFxQkEsZUFBckI7QUFDQUwsTUFBR0ksS0FBSCxHQUFxQkEsZUFBckI7QUFDQUosTUFBR0ssS0FBSCxHQUFxQkEsZUFBckI7QUFDQUwsTUFBR00sUUFBSCxHQUND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akcsVUFBVXdPLE1BQVYsSUFDUnhPLFVBQVV3TyxNQUFWLEtBQXFCLEVBRjFCOztBQUlBcEIsZUFBWXFCLEtBQUtDLEdBQUwsQ0FBU3RCLFNBQVQsRUFBb0JvQixNQUFwQixDQUFaO0FBQ0FyQixlQUFZc0IsS0FBS0UsR0FBTCxDQUFTeEIsU0FBVCxFQUFvQnFCLE1BQXBCLENBQVo7QUFDQWxCOztBQUVBO0FBQ0FySCxTQUFNMUssSUFBTixDQUFXLENBQUNzSSxHQUFELEVBQU1wSixFQUFOLEVBQVV1TCxJQUFWLENBQVg7QUFDQTVHLGNBQVcyTyxNQUFYLEVBQW1CLENBQW5CO0FBQ0EsVUFBTzlILE1BQU05RixNQUFiO0FBQ0E7QUF6QmEsRSIsImZpbGUiOiIuLi8uLi9kaXN0L1JlU2NvcGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgOTMzYzA5NzVhZmQ5MGVjMTJlODgiLCIvKlxuICogICBUaGUgTUlUIExpY2Vuc2UgKE1JVClcbiAqICAgQ29weXJpZ2h0IChjKSAyMDE5LiBXaXNlIFdpbGQgV2ViXG4gKlxuICogICBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiAgIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqICAgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogICB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiAgIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogICBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqICAgVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG4gKiAgIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogICBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiAgIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogICBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqICAgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogICBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogICBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuICogICBTT0ZUV0FSRS5cbiAqXG4gKiAgIEBhdXRob3IgOiBOYXRoYW5hZWwgQnJhdW5cbiAqICAgQGNvbnRhY3QgOiBuOHR6LmpzQGdtYWlsLmNvbVxuICovXG5cbmxldCAkZ2xvYmFsID0gKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSA/IHdpbmRvdyA6IGdsb2JhbDtcblxuaW1wb3J0IFNjb3BlIGZyb20gXCIuL1Njb3BlXCI7XG5pbXBvcnQgU3RvcmUgZnJvbSBcIi4vU3RvcmVcIjtcblxuY29uc3QgUlMgPSAkZ2xvYmFsLl9fX3Jlc2NvcGUgfHwge307XG5cbmlmICggJGdsb2JhbC5fX19yZXNjb3BlICkge1xuXHRjb25zb2xlLndhcm4oXCJSZVNjb3BlIGlzIGRlZmluZWQgbXVsdGlwbGUgdGltZXMgISEgXFxuQ2hlY2sgeW91J3JlIHBhY2thZ2luZ1wiKVxufVxuZWxzZSB7XG5cdFxuXHQkZ2xvYmFsLl9fX3Jlc2NvcGUgPSBSUztcblx0U2NvcGUuU3RvcmUgICAgICAgID0gU3RvcmU7XG5cdFJTLlNjb3BlICAgICAgICAgICA9IFNjb3BlO1xuXHRSUy5TdG9yZSAgICAgICAgICAgPSBTdG9yZTtcblx0UlMuc2NvcGVSZWYgICAgICAgID1cblx0XHRmdW5jdGlvbiBzY29wZVJlZiggbWFwLCBrZXkgKSB7XG5cdFx0XHRtYXBba2V5XSA9IG5ldyBTY29wZS5zY29wZVJlZihtYXBba2V5XSk7XG5cdFx0XHRyZXR1cm4gbWFwO1xuXHRcdH07XG5cdFxufVxuZXhwb3J0IGRlZmF1bHQgUlM7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LmpzIiwiLypcbiAqICAgVGhlIE1JVCBMaWNlbnNlIChNSVQpXG4gKiAgIENvcHlyaWdodCAoYykgMjAxOS4gV2lzZSBXaWxkIFdlYlxuICpcbiAqICAgUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogICBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiAgIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqICAgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogICBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqICAgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiAgIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuICogICBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqICAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogICBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqICAgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiAgIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqICAgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqICAgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcbiAqICAgU09GVFdBUkUuXG4gKlxuICogICBAYXV0aG9yIDogTmF0aGFuYWVsIEJyYXVuXG4gKiAgIEBjb250YWN0IDogbjh0ei5qc0BnbWFpbC5jb21cbiAqL1xuXG5pbXBvcnQgaXMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tIFwiaXNcIjtcbmltcG9ydCBzaG9ydGlkICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gXCJzaG9ydGlkXCI7XG5pbXBvcnQgRXZlbnRFbWl0dGVyICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tIFwiLi91dGlscy9FbWl0dGVyXCI7XG5pbXBvcnQge3dhbGtuU2V0LCB3YWxrbkdldCwga2V5V2Fsa25TZXQsIGtleVdhbGtuR2V0fSBmcm9tICcuL3V0aWxzL3V0aWxzJztcblxuY29uc3QgX19wcm90b19fcHVzaCA9ICggdGFyZ2V0LCBpZCwgcGFyZW50ICkgPT4ge1xuXHQgICAgICBsZXQgZm4gICAgICAgPSBmdW5jdGlvbiAoKSB7XG5cdCAgICAgIH07XG5cdCAgICAgIGZuLnByb3RvdHlwZSA9IHBhcmVudCA/IG5ldyBwYXJlbnQuX1tpZF0oKSA6IHRhcmdldFtpZF0gfHwge307XG5cdCAgICAgIHRhcmdldFtpZF0gICA9IG5ldyBmbigpO1xuXHQgICAgICB0YXJnZXQuX1tpZF0gPSBmbjtcbiAgICAgIH0sXG4gICAgICBhbGxTY29wZXMgICAgID0ge307XG5cblxuLyoqXG4gKiBCYXNlIFNjb3BlIG9iamVjdFxuICovXG5jbGFzcyBTY29wZSBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG5cdFxuXHRzdGF0aWMgcGVyc2lzdGVuY2VUbSA9IDE7Ly8gaWYgPiAwLCB3aWxsIHdhaXQgJ3BlcnNpc3RlbmNlVG0nIG1zIGJlZm9yZSBkZXN0cm95IHdoZW4gZGlzcG9zZSByZWFjaCAwXG5cdHN0YXRpYyBTdG9yZSAgICAgICAgID0gbnVsbDtcblx0c3RhdGljIHNjb3BlUmVmICAgICAgPSBmdW5jdGlvbiBzY29wZVJlZiggcGF0aCApIHtcblx0XHR0aGlzLnBhdGggPSBwYXRoO1xuXHR9O1xuXHRzdGF0aWMgc2NvcGVzICAgICAgICA9IGFsbFNjb3BlczsvLyBhbGwgYWN0aXZlIHNjb3Blc1xuXHQvKipcblx0ICogZ2V0IGEgcGFyc2VkIHJlZmVyZW5jZSBsaXN0IGZyb20gc3RhdGVNYXBcblx0ICogQHBhcmFtIF9yZWZcblx0ICogQHJldHVybnMge3tzdG9yZUlkLCBwYXRoLCBhbGlhczogKiwgcmVmOiAqfX1cblx0ICovXG5cdHN0YXRpYyBzdGF0ZU1hcFRvUmVmTGlzdCggc20sIHN0YXRlID0ge30sIF9yZWZzID0gW10sIGFjdGlvbnMgPSB7fSwgcGF0aCA9IFwiXCIgKSB7XG5cdFx0bGV0IGFwcGxpZXI7XG5cdFx0T2JqZWN0LmtleXMoc20pLmZvckVhY2goXG5cdFx0XHRrZXkgPT4ge1xuXHRcdFx0XHRsZXQgY3BhdGggPSBwYXRoID8gcGF0aCArICcuJyArIGtleSA6IGtleTtcblx0XHRcdFx0XG5cdFx0XHRcdHNtW2tleV0gaW5zdGFuY2VvZiBTY29wZS5zY29wZVJlZlxuXHRcdFx0XHQ/IF9yZWZzLnB1c2goc21ba2V5XS5wYXRoICsgJzonICsgY3BhdGgpXG5cdFx0XHRcdDogKHNtW2tleV0gJiYgc21ba2V5XSBpbnN0YW5jZW9mIEZ1bmN0aW9uKVxuXHRcdFx0XHQgID8ga2V5ID09IFwiJGFwcGx5XCJcblx0XHRcdFx0ICAgID8gYXBwbGllciA9IHNtW2tleV1cblx0XHRcdFx0ICAgIDogYWN0aW9uc1trZXldID0gc21ba2V5XVxuXHRcdFx0XHQgIDogKHNtW2tleV0gJiYgc21ba2V5XS5wcm90b3R5cGUgaW5zdGFuY2VvZiBTY29wZS5TdG9yZSlcblx0XHRcdFx0ICAgID8gX3JlZnMucHVzaChzbVtrZXldLmFzKGNwYXRoKSlcblx0XHRcdFx0ICAgIDogc3RhdGVbY3BhdGhdID0gc21ba2V5XVxuXHRcdFx0XHQvLzogdGhpcy5zdGF0ZU1hcFRvUmVmTGlzdChzbVtrZXldLCBfcmVmcywgcGF0aCArICcuJyArIGtleSlcblx0XHRcdH1cblx0XHQpXG5cdFx0cmV0dXJuIGFwcGxpZXI7XG5cdH1cblx0XG5cdHN0YXRpYyBnZXRTY29wZSggc2NvcGVzICkge1xuXHRcdGxldCBza2V5ID0gaXMuYXJyYXkoc2NvcGVzKSA/IHNjb3Blcy5zb3J0KCggYSwgYiApID0+IHtcblx0XHRcdGlmICggYS5maXJzdG5hbWUgPCBiLmZpcnN0bmFtZSApIHJldHVybiAtMTtcblx0XHRcdGlmICggYS5maXJzdG5hbWUgPiBiLmZpcnN0bmFtZSApIHJldHVybiAxO1xuXHRcdFx0cmV0dXJuIDA7XG5cdFx0fSkuam9pbignKycpIDogc2NvcGVzO1xuXHRcdHJldHVybiBhbGxTY29wZXNbc2tleV0gPSBhbGxTY29wZXNbc2tleV0gfHwgbmV3IFNjb3BlKHt9LCB7IGlkOiBza2V5IH0pO1xuXHR9O1xuXHRcblx0XG5cdC8qKlxuXHQgKiBJbml0IGEgUmVTY29wZSBzY29wZVxuXHQgKlxuXHQgKiBAcGFyYW0gc3RvcmVzTWFwIHtPYmplY3R9IE9iamVjdCB3aXRoIHRoZSBpbml0aWFsIHN0b3JlcyBkZWZpbml0aW9uIC8gaW5zdGFuY2VzXG5cdCAqIEBwYXJhbSBjb25maWcge09iamVjdH0gU2NvcGUgY29uZmlnXG5cdCAqIHtcblx0ICogICAgIHBhcmVudCB7c2NvcGV9IEBvcHRpb25hbCBwYXJlbnQgc2NvcGVcblx0ICpcblx0ICogICAgIGlkIHtzdHJpbmd9IEBvcHRpb25hbCBpZCAoIGlmIHRoaXMgaWQgZXhpc3Qgc3RvcmVzTWFwIHdpbGwgYmUgbWVyZ2Ugb24gdGhlICdpZCdcblx0ICogICAgIHNjb3BlKVxuXHQgKiAgICAga2V5IHtzdHJpbmd9IEBvcHRpb25hbCBrZXkgb2YgdGhlIHNjb3BlICggaWYgbm8gaWQgaXMgc2V0LCB0aGUgc2NvcGUgaWQgd2lsbCBiZSAocGFyZW50LmlkKyc+JytrZXkpXG5cdCAqICAgICBpbmNyZW1lbnRJZCB7Ym9vbH0gQG9wdGlvbmFsIHRydWUgdG8gYWRkIGEgc3VmZml4IGlkLCBpZiB0aGUgcHJvdmlkZWQga2V5IG9yIGlkIGdsb2JhbGx5IGV4aXN0XG5cdCAqXG5cdCAqICAgICBzdGF0ZSB7T2JqZWN0fSBAb3B0aW9uYWwgaW5pdGlhbCBzdGF0ZSBieSBzdG9yZSBhbGlhc1xuXHQgKiAgICAgZGF0YSB7T2JqZWN0fSBAb3B0aW9uYWwgaW5pdGlhbCBkYXRhIGJ5IHN0b3JlIGFsaWFzXG5cdCAqXG5cdCAqICAgICByb290RW1pdHRlciB7Ym9vbH0gQG9wdGlvbmFsIHRydWUgdG8gbm90IGJlaW5nIGRlc3RhYmlsaXplZCBieSBwYXJlbnRcblx0ICogICAgIGJvdW5kZWRBY3Rpb25zIHthcnJheSB8IHJlZ2V4cH0gQG9wdGlvbmFsIGxpc3Qgb3IgcmVnZXhwIG9mIGFjdGlvbnMgbm90IHByb3BhZ2F0ZWQgdG8gdGhlIHBhcmVudFxuXHQgKiAgICAgYXV0b0Rlc3Ryb3kge3RydWUgfCBmYWxzZSB8ICdpbmhlcml0J31cblx0ICogICAgIHBlcnNpc3RlbmNlVG0ge251bWJlcikgaWYgPiAwLCB3aWxsIHdhaXQgJ3BlcnNpc3RlbmNlVG0nIG1zIGJlZm9yZSBkZXN0cm95IHdoZW5cblx0ICogICAgIGRpc3Bvc2UgcmVhY2ggMCBhdXRvRGVzdHJveSAge2Jvb2x9IHdpbGwgdHJpZ2dlciByZXRhaW4gJiBkaXNwb3NlIGFmdGVyIHN0YXJ0XG5cdCAqICB9XG5cdCAqIEByZXR1cm5zIHtTY29wZX1cblx0ICovXG5cdGNvbnN0cnVjdG9yKCBzdG9yZXNNYXAsIHsgcGFyZW50LCB1cHBlclNjb3BlLCBrZXksIGlkLCBzbmFwc2hvdCwgc3RhdGUsIGRhdGEsIGluY3JlbWVudElkID0gISFrZXksIHBlcnNpc3RlbmNlVG0sIGF1dG9EZXN0cm95LCByb290RW1pdHRlciwgYm91bmRlZEFjdGlvbnMgfSA9IHt9ICkge1xuXHRcdHN1cGVyKCk7XG5cdFx0bGV0IF8gPSB7XG5cdFx0XHRrZXlQSUQ6ICh1cHBlclNjb3BlICYmIHVwcGVyU2NvcGUuX2lkIHx8IHBhcmVudCAmJiBwYXJlbnQuX2lkIHx8IHNob3J0aWQuZ2VuZXJhdGUoKSksXG5cdFx0XHRrZXksXG5cdFx0XHRpbmNyZW1lbnRJZCxcblx0XHRcdGJhc2VJZDogaWRcblx0XHR9O1xuXHRcdFxuXHRcdFxuXHRcdC8vIGdlbmVyYXRlIC8gc2V0IHRoaXMgc2NvcGUgaWRcblx0XHRpZCA9IGlkIHx8IGtleSAmJiAoXy5rZXlQSUQgKyAnPicgKyBrZXkpO1xuXHRcdFxuXHRcdF8uaXNMb2NhbElkID0gIWlkO1xuXHRcdFxuXHRcdGlkID0gaWQgfHwgKFwiX19fX19cIiArIHNob3J0aWQuZ2VuZXJhdGUoKSk7XG5cdFx0XG5cdFx0aWYgKCBhbGxTY29wZXNbaWRdICYmICFpbmNyZW1lbnRJZCApIHsvLyBvdmVyd3JpdGUgZXhpc3Rpbmcgc2NvcGVcblx0XHRcdHRoaXMuX2lkID0gaWQ7XG5cdFx0XHRhbGxTY29wZXNbaWRdLnJlZ2lzdGVyKHN0b3Jlc01hcCk7XG5cdFx0XHRyZXR1cm4gYWxsU2NvcGVzW2lkXVxuXHRcdH1cblx0XHRlbHNlIGlmICggYWxsU2NvcGVzW2lkXSAmJiBpbmNyZW1lbnRJZCApIHsvLyBnZW5lcmF0ZSBrZXkgaWRcblx0XHRcdGxldCBpID0gLTE7XG5cdFx0XHR3aGlsZSAoIGFsbFNjb3Blc1tpZCArICdbJyArICgrK2kpICsgJ10nXSApIDtcblx0XHRcdGlkID0gaWQgKyAnWycgKyBpICsgJ10nO1xuXHRcdH1cblx0XHRcblx0XHQvLyByZWdpc3RlciB0aGlzIHNjb3BlIGluIHRoZSBzdGF0aWMgU2NvcGUuc2NvcGVzXG5cdFx0YWxsU2NvcGVzW2lkXSA9IHRoaXM7XG5cdFx0XG5cdFx0dGhpcy5faWQgID0gaWQ7XG5cdFx0dGhpcy5fcmV2ID0gMDtcblx0XHRcblx0XHR0aGlzLl8gPSBfO1xuXHRcdFxuXHRcdHRoaXMuYWN0aW9ucyA9IHt9O1xuXHRcdHRoaXMuc3RvcmVzICA9IHt9O1xuXHRcdHRoaXMuc3RhdGUgICA9IHt9O1xuXHRcdHRoaXMuZGF0YSAgICA9IHt9O1xuXHRcdFxuXHRcdHRoaXMucGFyZW50ID0gcGFyZW50O1xuXHRcdFxuXHRcdGlmICggYXV0b0Rlc3Ryb3kgPT0gJ2luaGVyaXQnIClcblx0XHRcdGF1dG9EZXN0cm95ID0gcGFyZW50ICYmIHBhcmVudC5fYXV0b0Rlc3Ryb3k7XG5cdFx0XG5cdFx0dGhpcy5fYXV0b0Rlc3Ryb3kgPSBhdXRvRGVzdHJveTtcblx0XHRfLnBlcnNpc3RlbmNlVG0gICA9IHBlcnNpc3RlbmNlVG0gfHwgdGhpcy5jb25zdHJ1Y3Rvci5wZXJzaXN0ZW5jZVRtO1xuXHRcdFxuXHRcdGlmICggcGFyZW50ICYmIHBhcmVudC5kZWFkIClcblx0XHRcdHRocm93IG5ldyBFcnJvcihcIkNhbid0IHVzZSBhIGRlYWQgc2NvcGUgYXMgcGFyZW50ICFcIik7XG5cdFx0XG5cdFx0X19wcm90b19fcHVzaCh0aGlzLCAnYWN0aW9ucycsIHBhcmVudCk7XG5cdFx0X19wcm90b19fcHVzaCh0aGlzLCAnc3RvcmVzJywgcGFyZW50KTtcblx0XHRfX3Byb3RvX19wdXNoKHRoaXMsICdzdGF0ZScsIHBhcmVudCk7XG5cdFx0X19wcm90b19fcHVzaCh0aGlzLCAnZGF0YScsIHBhcmVudCk7XG5cdFx0XG5cdFx0dGhpcy5zb3VyY2VzICAgICAgPSBbXTtcblx0XHRfLmNoaWxkU2NvcGVzICAgICA9IFtdO1xuXHRcdF8uY2hpbGRTY29wZXNMaXN0ID0gW107XG5cdFx0Xy51blN0YWJsZUNoaWxkcyAgPSAwO1xuXHRcdF8uc2VlbkNoaWxkcyAgICAgID0gMDtcblx0XHRfLl9saXN0ZW5pbmcgICAgICA9IHt9O1xuXHRcdF8uX3Njb3BlICAgICAgICAgID0ge307XG5cdFx0Xy5fbWl4ZWQgICAgICAgICAgPSBbXTtcblx0XHRfLl9taXhlZExpc3QgICAgICA9IFtdO1xuXHRcdF8uZm9sbG93ZXJzICAgICAgID0gW107XG5cdFx0XG5cdFx0dGhpcy5fX3JldGFpbnMgPSB7IGFsbDogMCB9O1xuXHRcdHRoaXMuX19sb2NrcyAgID0geyBhbGw6IDEgfTtcblx0XHRcblx0XHQvLyB0b2RvXG5cdFx0Xy5fYm91bmRlZEFjdGlvbnMgPSBpcy5hcnJheShib3VuZGVkQWN0aW9ucylcblx0XHQgICAgICAgICAgICAgICAgICAgID8geyB0ZXN0OiBib3VuZGVkQWN0aW9ucy5pbmNsdWRlcy5iaW5kKGJvdW5kZWRBY3Rpb25zKSB9XG5cdFx0ICAgICAgICAgICAgICAgICAgICA6IGJvdW5kZWRBY3Rpb25zO1xuXHRcdFxuXHRcdC8vIHJlZ2lzdGVyIHRvIHRoZSBwYXJlbnQgc2NvcGVcblx0XHRpZiAoIHBhcmVudCApIHtcblx0XHRcdHBhcmVudC5yZXRhaW4oXCJpc015UGFyZW50XCIpO1xuXHRcdFx0aWYgKCAhcm9vdEVtaXR0ZXIgKSB7XG5cdFx0XHRcdCFwYXJlbnQuX3N0YWJsZSAmJiB0aGlzLndhaXQoXCJ3YWl0aW5nUGFyZW50XCIpO1xuXHRcdFx0XHRwYXJlbnQub24oXy5fcGFyZW50TGlzdCA9IHtcblx0XHRcdFx0XHQnc3RhYmxlJyAgOiBzID0+IHRoaXMucmVsZWFzZShcIndhaXRpbmdQYXJlbnRcIiksXG5cdFx0XHRcdFx0J3Vuc3RhYmxlJzogcyA9PiB0aGlzLndhaXQoXCJ3YWl0aW5nUGFyZW50XCIpLFxuXHRcdFx0XHRcdCd1cGRhdGUnICA6IHMgPT4gdGhpcy5fcHJvcGFnKClcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0cGFyZW50Lm9uKF8uX3BhcmVudExpc3QgPSB7XG5cdFx0XHRcdFx0J3VwZGF0ZSc6IHMgPT4gdGhpcy5fcHJvcGFnKClcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0XHQvLyB0aGlzLnJlZ2lzdGVyKHBhcmVudC5fX3Njb3BlLCBzdGF0ZSwgZGF0YSk7XG5cdFx0fVxuXHRcdFxuXHRcdC8vIHJlZ2lzdGVyIHRoaXMgc2NvcGUgc3RvcmVzXG5cdFx0dGhpcy5yZWdpc3RlcihzdG9yZXNNYXAsIHN0YXRlLCBkYXRhKTtcblx0XHR0aGlzLl9fbG9ja3MuYWxsLS07XG5cdFx0dGhpcy5fc3RhYmxlID0gIXRoaXMuX19sb2Nrcy5hbGw7XG5cdFx0XG5cdFx0aWYgKCBwYXJlbnQgKSB7XG5cdFx0XHRwYXJlbnQuX2FkZENoaWxkKHRoaXMpO1xuXHRcdH1cblx0XHRcblx0XHRcblx0XHQvLyByZXN0b3JlIHNuYXBzaG90c1xuXHRcdHRoaXMucmVzdG9yZShzbmFwc2hvdCk7XG5cdFx0XG5cdFx0XG5cdFx0aWYgKCBhdXRvRGVzdHJveSApXG5cdFx0XHRzZXRUaW1lb3V0KFxuXHRcdFx0XHR0bSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5yZXRhaW4oXCJhdXRvRGVzdHJveVwiKTtcblx0XHRcdFx0XHR0aGlzLmRpc3Bvc2UoXCJhdXRvRGVzdHJveVwiKTtcblx0XHRcdFx0fVxuXHRcdFx0KVxuXHRcdFxuXHR9XG5cdFxuXHQvKipcblx0ICpcblx0ICogTW91bnQgdGhlIHN0b3JlcyBpbiBzdG9yZXNMaXN0LCBpbiB0aGlzIHNjb3BlIG9yIGluIGl0cyBwYXJlbnRzIG9yIG1peGVkIHNjb3Blc1xuXHQgKlxuXHQgKiBAcGFyYW0gc3RvcmVJZExpc3Qge3N0cmluZ3xzdG9yZVJlZn0gU3RvcmUgbmFtZSwgQXJyYXkgb2YgU3RvcmUgbmFtZXMsIG9yIFJlc2NvcGVcblx0ICogICAgIHN0b3JlIHJlZiBmcm9tIFN0b3JlOjphcyBvciBTdG9yZTphc1xuXHQgKiBAcGFyYW0gc3RhdGVcblx0ICogQHBhcmFtIGRhdGFcblx0ICogQHJldHVybnMge1Njb3BlfVxuXHQgKi9cblx0bW91bnQoIHN0b3JlSWRMaXN0LCBzbmFwc2hvdCwgc3RhdGUsIGRhdGEgKSB7XG5cdFx0aWYgKCBpcy5hcnJheShzdG9yZUlkTGlzdCkgKSB7XG5cdFx0XHRzdG9yZUlkTGlzdC5mb3JFYWNoKHN0b3JlSWQgPT4gdGhpcy5fbW91bnQoc3RvcmVJZCwgc25hcHNob3QsIHN0YXRlLCBkYXRhKSk7XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0dGhpcy5fbW91bnQoLi4uYXJndW1lbnRzKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblx0XG5cdF9tb3VudCggaWQsIHNuYXBzaG90LCBzdGF0ZSwgZGF0YSApIHtcblx0XHRsZXQgcmVmLCBfID0gdGhpcy5fO1xuXHRcdFxuXHRcdHJlZiA9IHRoaXMucGFyc2VSZWYoaWQpXG5cdFx0XG5cdFx0aWYgKCBpZCA9PSBcIiRwYXJlbnRcIiApIHJldHVybjtcblx0XHRpZiAoICFfLl9zY29wZVtyZWYuc3RvcmVJZF0gKSB7Ly9hc2sgbWl4ZWQgfHwgcGFyZW50XG5cdFx0XHRpZiAoIF8uX21peGVkLnJlZHVjZVJpZ2h0KCggbW91bnRlZCwgY3R4ICkgPT4gKG1vdW50ZWQgfHwgY3R4Ll9tb3VudChpZCwgc25hcHNob3QsIHN0YXRlLCBkYXRhKSksIGZhbHNlKSB8fFxuXHRcdFx0XHQhdGhpcy5wYXJlbnQgKVxuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHRyZXR1cm4gdGhpcy5wYXJlbnQuX21vdW50KC4uLmFyZ3VtZW50cyk7XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0bGV0IHN0b3JlID0gXy5fc2NvcGVbcmVmLnN0b3JlSWRdLCB0YXNrUXVldWUgPSBbXTtcblx0XHRcdGlmICggU2NvcGUuaXNTdG9yZUNsYXNzKHN0b3JlKSApIHtcblx0XHRcdFx0Xy5fc2NvcGVbcmVmLnN0b3JlSWRdID0gbmV3IHN0b3JlKHRoaXMsIHtcblx0XHRcdFx0XHQvL3NuYXBzaG90LFxuXHRcdFx0XHRcdG5hbWU6IHJlZi5zdG9yZUlkLFxuXHRcdFx0XHRcdHN0YXRlLFxuXHRcdFx0XHRcdGRhdGFcblx0XHRcdFx0fSwgdGFza1F1ZXVlKTtcblx0XHRcdFx0d2hpbGUgKCB0YXNrUXVldWUubGVuZ3RoICkgdGFza1F1ZXVlLnNoaWZ0KCkoKTtcblx0XHRcdH1cblx0XHRcdGVsc2UgaWYgKCBTY29wZS5pc1Njb3BlQ2xhc3Moc3RvcmUpICkge1xuXHRcdFx0XHRzdG9yZSA9IF8uX3Njb3BlW3JlZi5zdG9yZUlkXSA9IG5ldyBzdG9yZSh7ICRwYXJlbnQ6IHRoaXMgfSwge1xuXHRcdFx0XHRcdGtleSAgICAgICAgOiByZWYuc3RvcmVJZCxcblx0XHRcdFx0XHRpbmNyZW1lbnRJZDogdHJ1ZSxcblx0XHRcdFx0XHR1cHBlclNjb3BlIDogdGhpc1xuXHRcdFx0XHRcdC8vYXV0b0Rlc3Ryb3k6IHRydWVcblx0XHRcdFx0XHQvL3BhcmVudDogdGhpc1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0Ly9fLl9zY29wZVsgcmVmLnN0b3JlSWQgXS5yZXRhaW4oXCJzY29wZWRDaGlsZFNjb3BlXCIpO1xuXHRcdFx0XHQvL193YXRjaFN0b3JlKHJlZi5zdG9yZUlkKTtcblx0XHRcdFx0aWYgKCByZWYucGF0aC5sZW5ndGggPiAxIClcblx0XHRcdFx0XHRfLl9zY29wZVtyZWYuc3RvcmVJZF0ubW91bnQocmVmLnBhdGguc2xpY2UoMSkuam9pbignLicpLCBzbmFwc2hvdCwgc3RhdGUsIGRhdGEpXG5cdFx0XHRcdC8vZWxzZSByZXR1cm4gXy5fc2NvcGVbIHJlZi5zdG9yZUlkIF07XG5cdFx0XHR9XG5cdFx0XHRpZiAoIFNjb3BlLmlzU3RvcmUoc3RvcmUpICkge1xuXHRcdFx0XHRpZiAoIHN0YXRlICE9PSB1bmRlZmluZWQgJiYgZGF0YSA9PT0gdW5kZWZpbmVkIClcblx0XHRcdFx0XHRzdG9yZS5zZXRTdGF0ZShzdGF0ZSk7XG5cdFx0XHRcdGVsc2UgaWYgKCBzdGF0ZSAhPT0gdW5kZWZpbmVkIClcblx0XHRcdFx0XHRzdG9yZS5zdGF0ZSA9IHN0YXRlO1xuXHRcdFx0XHRcblx0XHRcdFx0aWYgKCBkYXRhICE9PSB1bmRlZmluZWQgKVxuXHRcdFx0XHRcdHN0b3JlLnB1c2goZGF0YSk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoIFNjb3BlLmlzU2NvcGUoc3RvcmUpICkge1xuXHRcdFx0XHRpZiAoIHN0YXRlICE9PSB1bmRlZmluZWQgKVxuXHRcdFx0XHRcdHN0b3JlLnNldFN0YXRlKHN0YXRlKTtcblx0XHRcdFx0aWYgKCByZWYucGF0aC5sZW5ndGggPiAxIClcblx0XHRcdFx0XHRzdG9yZS5fbW91bnQocmVmLnBhdGguc2xpY2UoMSkuam9pbignLicpKVxuXHRcdFx0fVxuXHRcdFx0dGhpcy5fd2F0Y2hTdG9yZShyZWYuc3RvcmVJZCk7XG5cdFx0fVxuXHRcdFxuXHRcdFxuXHRcdHJldHVybiBfLl9zY29wZVtyZWYuc3RvcmVJZF07XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBSZWdpc3RlciBzdG9yZXMgaW4gc3RvcmVzTWFwICYgbGluayB0aGVtIGluIHRoZSBwcm90b3Ncblx0ICogQHBhcmFtIHN0b3Jlc01hcFxuXHQgKiBAcGFyYW0gc3RhdGVcblx0ICogQHBhcmFtIGRhdGFcblx0ICovXG5cdHJlZ2lzdGVyKCBzdG9yZXNNYXAsIHN0YXRlID0ge30sIGRhdGEgPSB7fSApIHtcblx0XHR0aGlzLnJlbGluayhzdG9yZXNNYXAsIHRoaXMsIGZhbHNlLCBmYWxzZSk7XG5cdFx0T2JqZWN0LmtleXMoc3RvcmVzTWFwKS5mb3JFYWNoKFxuXHRcdFx0aWQgPT4ge1xuXHRcdFx0XHRpZiAoIGlkID09IFwiJHBhcmVudFwiICkgcmV0dXJuO1xuXHRcdFx0XHRpZiAoIHN0b3Jlc01hcFtpZF0uc2luZ2xldG9uIHx8IChpcy5mbihzdG9yZXNNYXBbaWRdKSAmJiAoc3RhdGVbaWRdIHx8IGRhdGFbaWRdKSkgKSB7XG5cdFx0XHRcdFx0dGhpcy5fbW91bnQoaWQsIHVuZGVmaW5lZCwgc3RhdGVbaWRdLCBkYXRhW2lkXSlcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlIGlmICggc3RhdGVbaWRdIHx8IGRhdGFbaWRdICkge1xuXHRcdFx0XHRcdGlmICggZGF0YVtpZF0gKSB7XG5cdFx0XHRcdFx0XHRpZiAoIHN0YXRlW2lkXSApXG5cdFx0XHRcdFx0XHRcdHRoaXMuc3RvcmVzW2lkXS5zdGF0ZSA9IHN0YXRlW2lkXTtcblx0XHRcdFx0XHRcdHRoaXMuc3RvcmVzW2lkXS5wdXNoKGRhdGFbaWRdKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZWxzZSBpZiAoIHN0YXRlW2lkXSApIHtcblx0XHRcdFx0XHRcdHRoaXMuc3RvcmVzW2lkXS5zZXRTdGF0ZShzdGF0ZVtpZF0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHR0aGlzLl93YXRjaFN0b3JlKGlkKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdClcblx0XHRcblx0fVxuXHRcblx0LyoqXG5cdCAqIE1hcCBzcmNDdHggc3RvcmUncyBvbiB0YXJnZXRDdHggaGVhZGVycyBwcm90bydzXG5cdCAqIEBwYXJhbSBzcmNDdHhcblx0ICogQHBhcmFtIHRhcmdldEN0eFxuXHQgKiBAcGFyYW0gc3RhdGVcblx0ICogQHBhcmFtIGRhdGFcblx0ICovXG5cdHJlbGluayggc3JjQ3R4LCB0YXJnZXRDdHggPSB0aGlzLCBleHRlcm5hbCwgZm9yY2UgKSB7XG5cdFx0bGV0IF8gPSB0aGlzLl87XG5cdFx0T2JqZWN0LmtleXMoc3JjQ3R4KVxuXHRcdCAgICAgIC5mb3JFYWNoKFxuXHRcdFx0ICAgICAgaWQgPT4ge1xuXHRcdFx0XHQgICAgICBsZXQgaG90UmVsb2FkaW5nLCBhY3Rpb25zLCBhY3RpdmVBY3Rpb25zO1xuXHRcdFx0XHRcblx0XHRcdFx0ICAgICAgLy8gc2FtZSBzdG9yZSBkZWYgOiBpZ25vcmVcblx0XHRcdFx0ICAgICAgaWYgKCAhZm9yY2UgJiYgdGFyZ2V0Q3R4Ll8uX3Njb3BlW2lkXSA9PT0gc3JjQ3R4W2lkXSB8fFxuXHRcdFx0XHRcdCAgICAgIHRhcmdldEN0eC5fLl9zY29wZVtpZF0gJiYgKHRhcmdldEN0eC5fLl9zY29wZVtpZF0uY29uc3RydWN0b3IgPT09IHNyY0N0eFtpZF0pIClcblx0XHRcdFx0XHQgICAgICByZXR1cm47XG5cdFx0XHRcdFxuXHRcdFx0XHQgICAgICAvLyBob3Qgc3dpdGNoXG5cdFx0XHRcdCAgICAgIGlmICggIWZvcmNlICYmIHRhcmdldEN0eC5fLl9zY29wZVtpZF0gKSB7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0ICAgICAgaWYgKCAhZXh0ZXJuYWwgJiYgIWlzLmZuKHRhcmdldEN0eC5fLl9zY29wZVtpZF0pICkge1xuXHRcdFx0XHRcdFx0ICAgICAgY29uc29sZS5pbmZvKFwiUmVzY29wZSBTdG9yZSA6IFwiLCBpZCwgXCIgYWxyZWFkeSBleGlzdCBpbiB0aGlzIHNjb3BlICEgKCBIb3Qgc3dpdGNoaW5nIHRoZSBzdG9yZSApICEhIVwiKTtcblx0XHRcdFx0XHRcdCAgICAgIGxldCB0bXAgICAgICAgICAgICAgICAgPSB0YXJnZXRDdHguXy5fc2NvcGVbaWRdO1xuXHRcdFx0XHRcdFx0ICAgICAgdGFyZ2V0Q3R4Ll8uX3Njb3BlW2lkXSA9IHNyY0N0eFtpZF07XG5cdFx0XHRcdFx0XHQgICAgICBob3RSZWxvYWRpbmcgICAgICAgICAgID0gdG1wLm5leHRTdGF0ZTtcblx0XHRcdFx0XHRcdCAgICAgIHRtcC5kZXN0cm95KCk7XG5cdFx0XHRcdFx0ICAgICAgfVxuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdCAgICAgIGlmICggIWV4dGVybmFsICYmIGlzLmZuKHRhcmdldEN0eC5fLl9zY29wZVtpZF0pIClcblx0XHRcdFx0XHRcdCAgICAgIHRhcmdldEN0eC5fLl9zY29wZVtpZF0gPSBzcmNDdHhbaWRdO1xuXHRcdFx0XHRcdFxuXHRcdFx0XHQgICAgICB9XG5cdFx0XHRcdCAgICAgIGVsc2UgaWYgKCAhZm9yY2UgJiYgIWV4dGVybmFsIClcblx0XHRcdFx0XHQgICAgICBfLl9zY29wZVtpZF0gPSBzcmNDdHhbaWRdO1xuXHRcdFx0XHRcblx0XHRcdFx0XG5cdFx0XHRcdCAgICAgIC8vIG1hcCB0aGUgc3RvcmUgaWRcblx0XHRcdFx0ICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFxuXHRcdFx0XHRcdCAgICAgIHRhcmdldEN0eC5fLnN0b3Jlcy5wcm90b3R5cGUsXG5cdFx0XHRcdFx0ICAgICAgaWQsXG5cdFx0XHRcdFx0ICAgICAge1xuXHRcdFx0XHRcdFx0ICAgICAgZW51bWVyYWJsZSAgOiB0cnVlLFxuXHRcdFx0XHRcdFx0ICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuXHRcdFx0XHRcdFx0ICAgICAgZ2V0ICAgICAgICAgOiAoKSA9PiBfLl9zY29wZVtpZF1cblx0XHRcdFx0XHQgICAgICB9XG5cdFx0XHRcdCAgICAgICk7XG5cdFx0XHRcdFxuXHRcdFx0XHQgICAgICBhY3RpdmVBY3Rpb25zID0gdGFyZ2V0Q3R4Ll8uYWN0aW9ucy5wcm90b3R5cGU7XG5cdFx0XHRcdCAgICAgIC8vIG5vdCBtYXBwaW5nIGhpZXJhcmNoaWMgc2NvcGVzXG5cdFx0XHRcdCAgICAgIGlmICggaWQgIT09IFwiJHBhcmVudFwiICkge1xuXHRcdFx0XHRcdCAgICAgIC8vIG1hcCBzdGF0ZSAmIGRhdGFcblx0XHRcdFx0XHQgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoXG5cdFx0XHRcdFx0XHQgICAgICB0YXJnZXRDdHguXy5zdGF0ZS5wcm90b3R5cGUsXG5cdFx0XHRcdFx0XHQgICAgICBpZCxcblx0XHRcdFx0XHRcdCAgICAgIHtcblx0XHRcdFx0XHRcdFx0ICAgICAgZW51bWVyYWJsZSAgOiB0cnVlLFxuXHRcdFx0XHRcdFx0XHQgICAgICBjb25maWd1cmFibGU6IHRydWUsXG5cdFx0XHRcdFx0XHRcdCAgICAgIGdldCAgICAgICAgIDogKCkgPT4gKF8uX3Njb3BlW2lkXSAmJiBfLl9zY29wZVtpZF0uc3RhdGUpLFxuXHRcdFx0XHRcdFx0XHQgICAgICBzZXQgICAgICAgICA6ICggdiApID0+ICh0aGlzLl9tb3VudChpZCwgdW5kZWZpbmVkLCB2KSlcblx0XHRcdFx0XHRcdCAgICAgIH1cblx0XHRcdFx0XHQgICAgICApO1xuXHRcdFx0XHRcdCAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShcblx0XHRcdFx0XHRcdCAgICAgIHRhcmdldEN0eC5fLmRhdGEucHJvdG90eXBlLFxuXHRcdFx0XHRcdFx0ICAgICAgaWQsXG5cdFx0XHRcdFx0XHQgICAgICB7XG5cdFx0XHRcdFx0XHRcdCAgICAgIGVudW1lcmFibGUgIDogdHJ1ZSxcblx0XHRcdFx0XHRcdFx0ICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuXHRcdFx0XHRcdFx0XHQgICAgICBnZXQgICAgICAgICA6ICgpID0+IChfLl9zY29wZVtpZF0gJiYgXy5fc2NvcGVbaWRdLmRhdGEpLFxuXHRcdFx0XHRcdFx0XHQgICAgICBzZXQgICAgICAgICA6ICggdiApID0+ICh0aGlzLl9tb3VudChpZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHYpKVxuXHRcdFx0XHRcdFx0ICAgICAgfVxuXHRcdFx0XHRcdCAgICAgICk7XG5cdFx0XHRcdFx0ICAgICAgLy8gYWN0aW9uIG1hcHBpbmdcblx0XHRcdFx0XHQgICAgICBhY3Rpb25zID0gc3JjQ3R4W2lkXSBpbnN0YW5jZW9mIFNjb3BlLlN0b3JlXG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgID8gc3JjQ3R4W2lkXS5jb25zdHJ1Y3Rvci5hY3Rpb25zXG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgIDogc3JjQ3R4W2lkXS5hY3Rpb25zO1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdCAgICAgIGlmICggU2NvcGUuaXNTY29wZUNsYXNzKF8uX3Njb3BlW2lkXSkgKVxuXHRcdFx0XHRcdFx0ICAgICAgdGhpcy5fbW91bnQoaWQpO1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdCAgICAgIGlmICggU2NvcGUuaXNTY29wZShfLl9zY29wZVtpZF0pICkgey8vIG1hcCBoaWVyYXJjaGljIHNjb3Blc1xuXHRcdFx0XHRcdFx0ICAgICAgYWN0aXZlQWN0aW9uc1tpZF0gPSBfLl9zY29wZVtpZF0uYWN0aW9ucztcblx0XHRcdFx0XHQgICAgICB9XG5cdFx0XHRcdFx0ICAgICAgZWxzZSBpZiAoICFTY29wZS5pc1N0b3JlKF8uX3Njb3BlW2lkXSkgJiYgIVNjb3BlLmlzU3RvcmVDbGFzcyhfLl9zY29wZVtpZF0pIClcblx0XHRcdFx0XHRcdCAgICAgIHJldHVybjtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHQgICAgICBhY3Rpb25zICYmXG5cdFx0XHRcdFx0ICAgICAgT2JqZWN0LmtleXMoYWN0aW9ucylcblx0XHRcdFx0XHQgICAgICAgICAgICAuZm9yRWFjaChcblx0XHRcdFx0XHRcdCAgICAgICAgICAgICggYWN0ICkgPT4ge1xuXHRcdFx0XHRcdFx0XHQgICAgICAgICAgICBpZiAoIGFjdGl2ZUFjdGlvbnMuaGFzT3duUHJvcGVydHkoYWN0KSApXG5cdFx0XHRcdFx0XHRcdFx0ICAgICAgICAgICAgYWN0aXZlQWN0aW9uc1thY3RdLl9fdGFyZ2V0U3RvcmVzKys7XG5cdFx0XHRcdFx0XHRcdCAgICAgICAgICAgIGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdCAgICAgICAgICAgIGFjdGl2ZUFjdGlvbnNbYWN0XSAgICAgICAgICAgICAgICA9IHRoaXMuZGlzcGF0Y2guYmluZCh0aGlzLCBhY3QpO1xuXHRcdFx0XHRcdFx0XHRcdCAgICAgICAgICAgIGFjdGl2ZUFjdGlvbnNbYWN0XS5fX3RhcmdldFN0b3JlcyA9IDE7XG5cdFx0XHRcdFx0XHRcdCAgICAgICAgICAgIH1cblx0XHRcdFx0XHRcdCAgICAgICAgICAgIH1cblx0XHRcdFx0XHQgICAgICAgICAgICApO1xuXHRcdFx0XHQgICAgICB9XG5cdFx0XHRcdCAgICAgIGVsc2Uge1xuXHRcdFx0XHRcdCAgICAgIGFjdGl2ZUFjdGlvbnNbaWRdID0gc3JjQ3R4W2lkXS5hY3Rpb25zO1xuXHRcdFx0XHQgICAgICB9XG5cdFx0XHRcdFxuXHRcdFx0XHRcblx0XHRcdFx0ICAgICAgLy8gcmVtb3VudCB0aGUgc3RvcmUgaWYgaXQgd2FzIGhvdCByZWxvYWRlZFxuXHRcdFx0XHQgICAgICBpZiAoIGhvdFJlbG9hZGluZyApXG5cdFx0XHRcdFx0ICAgICAgdGhpcy5fbW91bnQoaWQsIG51bGwsIGhvdFJlbG9hZGluZyk7XG5cdFx0XHQgICAgICB9XG5cdFx0ICAgICAgKVxuXHR9XG5cdFxuXHQvKipcblx0ICogTWFrZSB0aGlzIHNjb3BlIHdhdGNoaW5nIHRoZSBsb2NhbCBzdG9yZSAnaWQnXG5cdCAqIEBwYXJhbSBpZFxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cblx0ICogQHByaXZhdGVcblx0ICovXG5cdF93YXRjaFN0b3JlKCBpZCApIHtcblx0XHRsZXQgXyA9IHRoaXMuXztcblx0XHRpZiAoICFfLl9saXN0ZW5pbmdbaWRdICYmICFpcy5mbihfLl9zY29wZVtpZF0pICkge1xuXHRcdFx0IV8uX3Njb3BlW2lkXS5fYXV0b0Rlc3Ryb3kgJiYgXy5fc2NvcGVbaWRdLnJldGFpbihcInNjb3BlZFwiKTtcblx0XHRcdCFfLl9zY29wZVtpZF0uaXNTdGFibGUoKSAmJiB0aGlzLndhaXQoaWQpO1xuXHRcdFx0Xy5fc2NvcGVbaWRdLm9uKFxuXHRcdFx0XHRfLl9saXN0ZW5pbmdbaWRdID0ge1xuXHRcdFx0XHRcdCdkZXN0cm95JyA6IHMgPT4ge1xuXHRcdFx0XHRcdFx0ZGVsZXRlIF8uX2xpc3RlbmluZ1tpZF07XG5cdFx0XHRcdFx0XHRfLl9zY29wZVtpZF0gPSBfLl9zY29wZVtpZF0uY29uc3RydWN0b3I7XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHQndXBkYXRlJyAgOiBzID0+IHRoaXMucHJvcGFnKCksXG5cdFx0XHRcdFx0J3N0YWJsZScgIDogcyA9PiB0aGlzLnJlbGVhc2UoaWQpLFxuXHRcdFx0XHRcdCd1bnN0YWJsZSc6IHMgPT4gdGhpcy53YWl0KGlkKVxuXHRcdFx0XHR9KTtcblx0XHR9XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBNaXggdGFyZ2V0Q3R4IG9uIHRoaXMgc2NvcGVcblx0ICogTWl4ZWQgc2NvcGUgcGFyZW50cyBhcmUgTk9UIG1hcHBlZFxuXHQgKiBAcGFyYW0gdGFyZ2V0Q3R4XG5cdCAqL1xuXHRtaXhpbiggdGFyZ2V0Q3R4ICkge1xuXHRcdGxldCBwYXJlbnQgPSB0aGlzLnBhcmVudCxcblx0XHQgICAgbGlzdHMsXG5cdFx0ICAgIF8gICAgICA9IHRoaXMuXztcblx0XHRcblx0XHRfLl9taXhlZC5wdXNoKHRhcmdldEN0eCk7XG5cdFx0XG5cdFx0dGFyZ2V0Q3R4LnJldGFpbihcIm1peGVkVG9cIik7XG5cdFx0XG5cdFx0aWYgKCAhdGFyZ2V0Q3R4Ll9zdGFibGUgKVxuXHRcdFx0dGhpcy53YWl0KHRhcmdldEN0eC5faWQpO1xuXHRcdFxuXHRcdF8uX21peGVkTGlzdC5wdXNoKGxpc3RzID0ge1xuXHRcdFx0J3N0YWJsZScgIDogcyA9PiB0aGlzLnJlbGVhc2UodGFyZ2V0Q3R4Ll9pZCksXG5cdFx0XHQndW5zdGFibGUnOiBzID0+IHRoaXMud2FpdCh0YXJnZXRDdHguX2lkKSxcblx0XHRcdCd1cGRhdGUnICA6IHMgPT4gdGhpcy5fcHJvcGFnKClcblx0XHR9KTtcblx0XHRcblx0XHR0YXJnZXRDdHgub24obGlzdHMpO1xuXHRcdFxuXHRcdC8vIHJlc2V0IHByb3Rvc1xuXHRcdC8vIHB1c2ggbmV3IHByb3RvIHdpdGggcGFyZW50XG5cdFx0X19wcm90b19fcHVzaCh0aGlzLCAnYWN0aW9ucycsIHBhcmVudCk7XG5cdFx0X19wcm90b19fcHVzaCh0aGlzLCAnc3RvcmVzJywgcGFyZW50KTtcblx0XHRfX3Byb3RvX19wdXNoKHRoaXMsICdzdGF0ZScsIHBhcmVudCk7XG5cdFx0X19wcm90b19fcHVzaCh0aGlzLCAnZGF0YScsIHBhcmVudCk7XG5cdFx0XG5cdFx0Ly8gYmluZCBsb2NhbCBhY2Nlc3NvcnMgaW4gdGhlIG5ldyBwcm90b1xuXHRcdHRoaXMucmVsaW5rKF8uX3Njb3BlLCB0aGlzLCBmYWxzZSwgdHJ1ZSk7XG5cdFx0XG5cdFx0Xy5fbWl4ZWQuZm9yRWFjaChcblx0XHRcdGN0eCA9PiB7XG5cdFx0XHRcdC8vIHB1c2ggcHJvdG9zXG5cdFx0XHRcdF9fcHJvdG9fX3B1c2godGhpcywgJ2FjdGlvbnMnKTtcblx0XHRcdFx0X19wcm90b19fcHVzaCh0aGlzLCAnc3RvcmVzJyk7XG5cdFx0XHRcdF9fcHJvdG9fX3B1c2godGhpcywgJ3N0YXRlJyk7XG5cdFx0XHRcdF9fcHJvdG9fX3B1c2godGhpcywgJ2RhdGEnKTtcblx0XHRcdFx0dGhpcy5zdG9yZXMuX19vcmlnaW4gPSBcIm1peGVkIFwiICsgY3R4Ll9pZDtcblx0XHRcdFx0Ly8gd3JpdGUgbWl4ZWQgYWNjZXNzb3JzXG5cdFx0XHRcdGN0eC5yZWxpbmsoY3R4Ll8uX3Njb3BlLCB0aGlzLCB0cnVlLCB0cnVlKVxuXHRcdFx0fVxuXHRcdClcblx0fVxuXHRcblx0LyoqXG5cdCAqIEJpbmQgc3RvcmVzIGZyb20gdGhpcyBzY29wZSwgaGlzIHBhcmVudHMgb3IgbWl4ZWQgc2NvcGVzIHRvIG9ialxuXHQgKlxuXHQgKiBAcGFyYW0gdGFyZ2V0IHtSZWFjdC5Db21wb25lbnR8U3RvcmV8ZnVuY3Rpb259XG5cdCAqIEBwYXJhbSBrZXkge3N0cmluZ30gc3RvcmVzIGtleXMgdG8gYmluZCB1cGRhdGVzXG5cdCAqIEBwYXJhbSBhc1xuXHQgKiBAcGFyYW0gc2V0SW5pdGlhbCB7Ym9vbGVhbn0gZmFsc2UgdG8gbm90IHByb3BhZyBpbml0aWFsIHZhbHVlIChkZWZhdWx0IDogdHJ1ZSlcblx0ICovXG5cdGJpbmQoIHRhcmdldCwga2V5LCBhcywgc2V0SW5pdGlhbCA9IHRydWUsIHJldk1hcCA9IHt9ICkge1xuXHRcdGxldCBsYXN0UmV2cywgZGF0YSwgcmVmS2V5cztcblx0XHRpZiAoIGtleSAmJiAhaXMuYXJyYXkoa2V5KSApXG5cdFx0XHRrZXkgPSBba2V5XTtcblx0XHRcblx0XHRpZiAoIGFzID09PSBmYWxzZSB8fCBhcyA9PT0gdHJ1ZSApIHtcblx0XHRcdHNldEluaXRpYWwgPSBhcztcblx0XHRcdGFzICAgICAgICAgPSBudWxsO1xuXHRcdH1cblx0XHRcblx0XHRyZWZLZXlzID0ga2V5XG5cdFx0XHQubWFwKGlkID0+IChpcy5zdHJpbmcoaWQpID8gaWQgOiBpZC5uYW1lKSlcblx0XHRcdC5tYXAoaWQgPT4gKHRoaXMucGFyc2VSZWYoaWQpKSk7XG5cdFx0XG5cdFx0XG5cdFx0dGhpcy5fLmZvbGxvd2Vycy5wdXNoKFxuXHRcdFx0W1xuXHRcdFx0XHR0YXJnZXQsXG5cdFx0XHRcdGtleSxcblx0XHRcdFx0YXMgfHwgdW5kZWZpbmVkLFxuXHRcdFx0XHRsYXN0UmV2cyA9IHJlZktleXMucmVkdWNlKCggcmV2cywgcmVmICkgPT4ge1xuXHRcdFx0XHRcdHJldnNbcmVmLnN0b3JlSWRdID0gcmV2c1tyZWYuc3RvcmVJZF0gfHwge1xuXHRcdFx0XHRcdFx0cmV2IDogMCxcblx0XHRcdFx0XHRcdHJlZnM6IFtdXG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRyZXZzW3JlZi5zdG9yZUlkXS5yZWZzLnB1c2gocmVmKTtcblx0XHRcdFx0XHRyZXR1cm4gcmV2cztcblx0XHRcdFx0fSwgcmV2TWFwKVxuXHRcdFx0XSk7XG5cdFx0XG5cdFx0dGhpcy5tb3VudChrZXkpO1xuXHRcdHRoaXMucmV0YWluU3RvcmVzKE9iamVjdC5rZXlzKGxhc3RSZXZzKSwgJ2xpc3RlbmVycycpO1xuXHRcdFxuXHRcdGlmICggc2V0SW5pdGlhbCAmJiB0aGlzLl9zdGFibGUgKSB7XG5cdFx0XHRkYXRhID0gdGhpcy5nZXRVcGRhdGVzKGxhc3RSZXZzKTtcblx0XHRcdGlmICggIWRhdGEgKSByZXR1cm4gdGhpcztcblx0XHRcdGlmICggdHlwZW9mIHRhcmdldCAhPSBcImZ1bmN0aW9uXCIgKSB7XG5cdFx0XHRcdGlmICggYXMgKSB0YXJnZXQuc2V0U3RhdGUoeyBbYXNdOiBkYXRhIH0pO1xuXHRcdFx0XHRlbHNlIHRhcmdldC5zZXRTdGF0ZShkYXRhKTtcblx0XHRcdH1cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHR0YXJnZXQoZGF0YSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cdFxuXHQvKipcblx0ICogVW4gYmluZCB0aGlzIHNjb3BlIG9mZiB0aGUgZ2l2ZW4gY29tcG9uZW50LWtleXNcblx0ICogQHBhcmFtIHRhcmdldFxuXHQgKiBAcGFyYW0ga2V5XG5cdCAqIEByZXR1cm5zIHtBcnJheS48Kj59XG5cdCAqL1xuXHR1bkJpbmQoIHRhcmdldCwga2V5LCBhcyApIHtcblx0XHRsZXQgZm9sbG93ZXJzID0gdGhpcy5fLmZvbGxvd2Vycyxcblx0XHQgICAgaSAgICAgICAgID0gZm9sbG93ZXJzICYmIGZvbGxvd2Vycy5sZW5ndGg7XG5cdFx0d2hpbGUgKCBmb2xsb3dlcnMgJiYgaS0tIClcblx0XHRcdGlmICggZm9sbG93ZXJzW2ldWzBdID09PSB0YXJnZXQgJiZcblx0XHRcdFx0KCcnICsgZm9sbG93ZXJzW2ldWzFdKSA9PSAoJycgKyBrZXkpICYmXG5cdFx0XHRcdGZvbGxvd2Vyc1tpXVsyXSA9PSBhcyApIHtcblx0XHRcdFx0dGhpcy5kaXNwb3NlU3RvcmVzKE9iamVjdC5rZXlzKGZvbGxvd2Vyc1tpXVszXSksICdsaXN0ZW5lcnMnKTtcblx0XHRcdFx0cmV0dXJuIGZvbGxvd2Vycy5zcGxpY2UoaSwgMSk7XG5cdFx0XHR9XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBNb3VudCB0aGUgc3RvcmVzIGluIHN0b3JlSWRMaXN0IGZyb20gdGhpcyBzY29wZSwgaXRzIHBhcmVudHMgYW5kIG1peGVkIHNjb3BlXG5cdCAqIEJpbmQgdGhlbSB0byAndG8nXG5cdCAqIEhvb2sgJ3RvJyBzbyBpdCB3aWxsIGF1dG8gdW5iaW5kIG9uICdkZXN0cm95JyBvciAnY29tcG9uZW50V2lsbFVubW91bnQnXG5cdCAqIEBwYXJhbSB0YXJnZXRcblx0ICogQHBhcmFtIHN0b3JlSWRMaXN0XG5cdCAqIEBwYXJhbSBiaW5kXG5cdCAqIEByZXR1cm5zIHtPYmplY3R9IEluaXRpYWwgb3V0cHV0cyBvZiB0aGUgc3RvcmVzIGluICdzdG9yZXNMaXN0J1xuXHQgKi9cblx0bWFwKCB0YXJnZXQsIHN0b3JlSWRMaXN0LCBiaW5kID0gdHJ1ZSwgcmV2TWFwICkge1xuXHRcdGxldCBTdG9yZSAgID0gdGhpcy5jb25zdHJ1Y3Rvci5TdG9yZTtcblx0XHRzdG9yZUlkTGlzdCA9IGlzLmFycmF5KHN0b3JlSWRMaXN0KSA/IHN0b3JlSWRMaXN0IDogW3N0b3JlSWRMaXN0XTtcblx0XHRsZXQgcmVmTGlzdCA9IHN0b3JlSWRMaXN0Lm1hcCh0aGlzLnBhcnNlUmVmKTtcblx0XHR0aGlzLm1vdW50KHN0b3JlSWRMaXN0KTtcblx0XHRpZiAoIGJpbmQgJiYgdGFyZ2V0IGluc3RhbmNlb2YgU3RvcmUgKSB7XG5cdFx0XHRTdG9yZS5tYXAodGFyZ2V0LCBzdG9yZUlkTGlzdCwgdGhpcywgdGhpcywgZmFsc2UpXG5cdFx0fVxuXHRcdGVsc2UgaWYgKCBiaW5kICkge1xuXHRcdFx0dGhpcy5iaW5kKHRhcmdldCwgc3RvcmVJZExpc3QsIHVuZGVmaW5lZCwgZmFsc2UpO1xuXHRcdFx0XG5cdFx0XHRsZXQgbWl4ZWRDV1VubW91bnQsXG5cdFx0XHQgICAgdW5Nb3VudEtleSA9IHRhcmdldC5pc1JlYWN0Q29tcG9uZW50ID8gXCJjb21wb25lbnRXaWxsVW5tb3VudFwiIDogXCJkZXN0cm95XCI7XG5cdFx0XHRcblx0XHRcdGlmICggdGFyZ2V0Lmhhc093blByb3BlcnR5KHVuTW91bnRLZXkpICkge1xuXHRcdFx0XHRtaXhlZENXVW5tb3VudCA9IHRhcmdldFt1bk1vdW50S2V5XTtcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0dGFyZ2V0W3VuTW91bnRLZXldID0gKCAuLi5hcmd6ICkgPT4ge1xuXHRcdFx0XHRkZWxldGUgdGFyZ2V0W3VuTW91bnRLZXldO1xuXHRcdFx0XHRpZiAoIG1peGVkQ1dVbm1vdW50IClcblx0XHRcdFx0XHR0YXJnZXRbdW5Nb3VudEtleV0gPSBtaXhlZENXVW5tb3VudDtcblx0XHRcdFx0XG5cdFx0XHRcdHRoaXMudW5CaW5kKHRhcmdldCwgc3RvcmVJZExpc3QpO1xuXHRcdFx0XHRyZXR1cm4gdGFyZ2V0W3VuTW91bnRLZXldICYmIHRhcmdldFt1bk1vdW50S2V5XSguLi5hcmd6KTtcblx0XHRcdH1cblx0XHRcdFxuXHRcdH1cblx0XHRyZXR1cm4gcmV2TWFwICYmIHRoaXMuZ2V0VXBkYXRlcyhyZXZNYXApXG5cdFx0XHR8fCByZWZMaXN0LnJlZHVjZSgoIGRhdGEsIHJlZiApID0+IHtcblx0XHRcdFx0d2Fsa25TZXQoZGF0YSwgcmVmLmFsaWFzIHx8IHJlZi5wYXRoLCB0aGlzLnJldHJpZXZlKHJlZi5wYXRoKSlcblx0XHRcdFx0cmV0dXJuIGRhdGE7XG5cdFx0XHR9LCB7fSk7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBHZXQgY3VycmVudCBkYXRhIHZhbHVlIGZyb20ganNvbiBwYXRoXG5cdCAqIEBwYXJhbSBwYXRoXG5cdCAqIEByZXR1cm5zIHtzdHJpbmd8Kn1cblx0ICovXG5cdHJldHJpZXZlKCBwYXRoID0gXCJcIiApIHtcblx0XHRwYXRoID0gaXMuc3RyaW5nKHBhdGgpID8gcGF0aC5zcGxpdCgnLicpIDogcGF0aDtcblx0XHRcblx0XHRcblx0XHRyZXR1cm4gcGF0aCAmJlxuXHRcdFx0dGhpcy5zdG9yZXNbcGF0aFswXV0gJiZcblx0XHRcdHRoaXMuc3RvcmVzW3BhdGhbMF1dLnJldHJpZXZlICYmXG5cdFx0XHR0aGlzLnN0b3Jlc1twYXRoWzBdXS5yZXRyaWV2ZShwYXRoLnNsaWNlKDEpKTtcblx0fVxuXHRcblx0LyoqXG5cdCAqIFJlc3RvcmUgYWxsIG5vZGVzIGluIGEganNvblBhdGhcblx0ICogQHBhcmFtIHBhdGhcblx0ICogQHJldHVybnMge3N0cmluZ3wqfVxuXHQgKi9cblx0cmVzdG9yZVJlZlBhdGgoIHBhdGggPSBcIlwiICkge1xuXHRcdHBhdGggPSBpcy5zdHJpbmcocGF0aCkgPyBwYXRoLnNwbGl0KCcuJykgOiBwYXRoO1xuXHRcdFxuXHRcdGxldCBvYmosIGkgPSAwLCBjU2NvcGUgPSB0aGlzO1xuXHRcdFxuXHRcdHdoaWxlICggaSA8IHBhdGgubGVuZ3RoICkge1xuXHRcdFx0b2JqID0gY1Njb3BlLnN0b3Jlc1twYXRoW2ldXTtcblx0XHRcdGlmICggU2NvcGUuaXNTY29wZUNsYXNzKG9iailcblx0XHRcdFx0fHxcblx0XHRcdFx0U2NvcGUuaXNTdG9yZUNsYXNzKG9iaikgKSB7XG5cdFx0XHRcdGNTY29wZS5tb3VudChwYXRoWzBdKTtcblx0XHRcdFx0b2JqID0gY1Njb3BlLnN0b3Jlc1twYXRoW2ldXTtcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0aWYgKCBTY29wZS5pc1Njb3BlKG9iaikgKSB7XG5cdFx0XHRcdGNTY29wZSA9IG9iajtcblx0XHRcdFx0aSsrO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSBpZiAoIFNjb3BlLmlzU3RvcmUob2JqKSApIHtcblx0XHRcdFx0b2JqLnJlc3RvcmUoKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdFxuXHR9XG5cdFxuXHQvKipcblx0ICogR2V0IHRhcmdldCBzdG9yZSBmcm9tIGpzb24gcGF0aFxuXHQgKiBAcGFyYW0gcGF0aFxuXHQgKiBAcmV0dXJucyB7c3RyaW5nfCp9XG5cdCAqL1xuXHRyZXRyaWV2ZVN0b3JlKCBwYXRoID0gXCJcIiApIHtcblx0XHRwYXRoID0gaXMuc3RyaW5nKHBhdGgpID8gcGF0aC5zcGxpdCgnLicpIDogcGF0aDtcblx0XHRyZXR1cm4gcGF0aFxuXHRcdFx0JiYgcGF0aC5sZW5ndGhcblx0XHRcdCYmIChcblx0XHRcdFx0cGF0aC5sZW5ndGggIT0gMSAmJiB0aGlzLnN0b3Jlc1twYXRoWzBdXS5yZXRyaWV2ZVN0b3JlXG5cdFx0XHRcdD8gdGhpcy5zdG9yZXNbcGF0aFswXV0ucmV0cmlldmVTdG9yZShwYXRoLnNsaWNlKDEpKVxuXHRcdFx0XHQ6IHBhdGgubGVuZ3RoID09IDEgJiYgdGhpcy5zdG9yZXNbcGF0aFswXV1cblx0XHRcdCk7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBHZXQgb3IgdXBkYXRlIHN0b3JlcyByZXZpc2lvbnMgaW4gJ3N0b3Jlc1Jldk1hcCdcblx0ICogQHBhcmFtIHN0b3Jlc1Jldk1hcFxuXHQgKiBAcGFyYW0gbG9jYWxcblx0ICogQHJldHVybnMge3t9fVxuXHQgKi9cblx0Z2V0U3RvcmVzUmV2cyggc3RvcmVzUmV2TWFwID0ge30sIGxvY2FsICkge1xuXHRcdGxldCBjdHggPSB0aGlzLl8uX3Njb3BlO1xuXHRcdGlmICggIXN0b3Jlc1Jldk1hcCApIHtcblx0XHRcdHN0b3Jlc1Jldk1hcCA9IHt9O1xuXHRcdH1cblx0XHRPYmplY3Qua2V5cyhjdHgpLmZvckVhY2goXG5cdFx0XHRpZCA9PiB7XG5cdFx0XHRcdGlmICggaWQgPT0gXCIkcGFyZW50XCIgKSByZXR1cm47XG5cdFx0XHRcdGlmICggIWlzLmZuKGN0eFtpZF0pXG5cdFx0XHRcdCkge1xuXHRcdFx0XHRcdHN0b3Jlc1Jldk1hcFtpZF0gPSBjdHhbaWRdLl9yZXY7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZSBpZiAoICFzdG9yZXNSZXZNYXAuaGFzT3duUHJvcGVydHkoaWQpIClcblx0XHRcdFx0XHRzdG9yZXNSZXZNYXBbaWRdID0gZmFsc2Vcblx0XHRcdH1cblx0XHQpO1xuXHRcdGlmICggIWxvY2FsICkge1xuXHRcdFx0dGhpcy5fLl9taXhlZC5yZWR1Y2UoKCB1cGRhdGVkLCBjdHggKSA9PiAoY3R4LmdldFN0b3Jlc1JldnMoc3RvcmVzUmV2TWFwKSwgc3RvcmVzUmV2TWFwKSwgc3RvcmVzUmV2TWFwKTtcblx0XHRcdHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LmdldFN0b3Jlc1JldnMoc3RvcmVzUmV2TWFwKTtcblx0XHR9XG5cdFx0cmV0dXJuIHN0b3Jlc1Jldk1hcDtcblx0fVxuXHRcblx0LyoqXG5cdCAqIFJlY3Vyc2l2ZWx5IGdldCBhbGwgc3RvcmVzIHJldnNcblx0ICogQHBhcmFtIGNoaWxkc1xuXHQgKiBAcmV0dXJucyB7QXJyYXl9XG5cdCAqIEBwcml2YXRlXG5cdCAqL1xuXHRfZ2V0UmV2TWFwKCBzdG9yZXNSZXZNYXAgPSB7fSApIHtcblx0XHRsZXQgY3R4ID0gdGhpcy5fLl9zY29wZTtcblx0XHRPYmplY3Qua2V5cyhjdHgpLmZvckVhY2goXG5cdFx0XHRpZCA9PiB7XG5cdFx0XHRcdGlmICggaWQgPT0gXCIkcGFyZW50XCIgfHwgc3RvcmVzUmV2TWFwW2lkXSApIHJldHVybjtcblx0XHRcdFx0c3RvcmVzUmV2TWFwW2lkXSA9IHsgcmV2OiBjdHhbaWRdLl9yZXYsIHJlZnM6IFtdIH07XG5cdFx0XHRcdFxuXHRcdFx0fSk7XG5cdFx0dGhpcy5fLl9taXhlZC5yZWR1Y2VSaWdodChcblx0XHRcdCggc3RvcmVzUmV2TWFwLCBjdHggKSA9PiAoY3R4Ll9nZXRSZXZNYXAoc3RvcmVzUmV2TWFwKSksIHN0b3Jlc1Jldk1hcCk7XG5cdFx0dGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuX2dldFJldk1hcChzdG9yZXNSZXZNYXApO1xuXHRcdHJldHVybiBzdG9yZXNSZXZNYXA7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBHZXQgdXBkYXRlZCBvdXRwdXQgYmFzaW5nIHN0b3Jlc1Jldk1hcCdzIHJldmlzaW9ucy5cblx0ICogSWYgYSBzdG9yZSBpbiAnc3RvcmVzUmV2TWFwJyB3YXMgdXBkYXRlZDsgYWRkIGl0IHRvICdvdXRwdXQnICYgdXBkYXRlIHN0b3Jlc1Jldk1hcFxuXHQgKiBAcGFyYW0gc3RvcmVzUmV2TWFwXG5cdCAqIEBwYXJhbSBvdXRwdXRcblx0ICogQHBhcmFtIHVwZGF0ZWRcblx0ICogQHJldHVybnMgeyp8e319XG5cdCAqL1xuXHRnZXRSZWZzVXBkYXRlcyggcmVmcywgcmV2TWFwLCBvdXRwdXQgKSB7XG5cdFx0cmV2TWFwID0gcmV2TWFwIHx8IHJlZnNcblx0XHRcdC5tYXAoaWQgPT4gKGlzLnN0cmluZyhpZCkgPyBpZCA6IGlkLm5hbWUpKVxuXHRcdFx0Lm1hcChpZCA9PiAodGhpcy5wYXJzZVJlZihpZCkpKVxuXHRcdFx0LnJlZHVjZSgoIHJldnMsIHJlZiApID0+IHtcblx0XHRcdFx0cmV2c1tyZWYuc3RvcmVJZF0gPSByZXZzW3JlZi5zdG9yZUlkXSB8fCB7XG5cdFx0XHRcdFx0cmV2IDogMCxcblx0XHRcdFx0XHRyZWZzOiBbXVxuXHRcdFx0XHR9O1xuXHRcdFx0XHRyZXZzW3JlZi5zdG9yZUlkXS5yZWZzLnB1c2gocmVmKTtcblx0XHRcdFx0cmV0dXJuIHJldnM7XG5cdFx0XHR9LCB7fSk7XG5cdFx0XG5cdFx0cmV0dXJuIHRoaXMuZ2V0VXBkYXRlcyhyZXZNYXAsIG91dHB1dClcblx0fVxuXHRcblx0LyoqXG5cdCAqIEdldCBvciB1cGRhdGUgb3V0cHV0IGJhc2luZyBzdG9yZXNSZXZNYXAncyByZXZpc2lvbnMuXG5cdCAqIElmIGEgc3RvcmUgaW4gJ3N0b3Jlc1Jldk1hcCcgd2FzIHVwZGF0ZWQ7IGFkZCBpdCB0byAnb3V0cHV0JyAmIHVwZGF0ZSBzdG9yZXNSZXZNYXBcblx0ICogQHBhcmFtIHN0b3Jlc1Jldk1hcFxuXHQgKiBAcGFyYW0gb3V0cHV0XG5cdCAqIEBwYXJhbSB1cGRhdGVkXG5cdCAqIEByZXR1cm5zIHsqfHt9fVxuXHQgKi9cblx0Z2V0VXBkYXRlcyggc3RvcmVzUmV2TWFwLCBvdXRwdXQsIHVwZGF0ZWQgKSB7XG5cdFx0b3V0cHV0ICAgICAgID0gb3V0cHV0IHx8IHt9O1xuXHRcdHN0b3Jlc1Jldk1hcCA9IHN0b3Jlc1Jldk1hcCB8fCB0aGlzLl9nZXRSZXZNYXAoKTtcblx0XHRPYmplY3Qua2V5cyhzdG9yZXNSZXZNYXApLmZvckVhY2goXG5cdFx0XHRpZCA9PiB7XG5cdFx0XHRcdGxldCBzdG9yZSAgICAgICAgPSB0aGlzLnN0b3Jlc1tpZF07XG5cdFx0XHRcdHN0b3Jlc1Jldk1hcFtpZF0gPSBzdG9yZXNSZXZNYXBbaWRdIHx8IHsgcmV2OiAwLCByZWZzOiBbXSB9O1xuXHRcdFx0XHRcblx0XHRcdFx0aWYgKCBzdG9yZSAmJiBpcy5mbihzdG9yZSkgKSB7XG5cdFx0XHRcdFx0dXBkYXRlZCAgICA9IHRydWU7XG5cdFx0XHRcdFx0b3V0cHV0W2lkXSA9IHVuZGVmaW5lZDtcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlIGlmICggc3RvcmUgJiYgc3RvcmUuX3JldiA+IHN0b3Jlc1Jldk1hcFtpZF0ucmV2ICkge1xuXHRcdFx0XHRcdHN0b3Jlc1Jldk1hcFtpZF0ucmV2ID0gc3RvcmUuX3Jldjtcblx0XHRcdFx0XHR1cGRhdGVkICAgICAgICAgICAgICA9IHRydWU7XG5cdFx0XHRcdFx0c3RvcmVzUmV2TWFwW2lkXS5yZWZzLmZvckVhY2goXG5cdFx0XHRcdFx0XHRyZWYgPT4ge1xuXHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0b3V0cHV0W3JlZi5hbGlhc10gPSB0aGlzLnJldHJpZXZlKHJlZi5wYXRoKVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdClcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdClcblx0XHRyZXR1cm4gdXBkYXRlZCAmJiBvdXRwdXQ7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBSZWN1cnNpdmVseSBnZXQgYWxsIGNoaWxkIHNjb3Blc1xuXHQgKiBAcGFyYW0gY2hpbGRzXG5cdCAqIEByZXR1cm5zIHtBcnJheX1cblx0ICogQHByaXZhdGVcblx0ICovXG5cdF9nZXRBbGxDaGlsZHMoIGNoaWxkcyA9IFtdICkge1xuXHRcdGNoaWxkcy5wdXNoKC4uLnRoaXMuXy5jaGlsZFNjb3Blcyk7XG5cdFx0dGhpcy5fLmNoaWxkU2NvcGVzLmZvckVhY2goXG5cdFx0XHRjdHggPT4ge1xuXHRcdFx0XHRjdHguX2dldEFsbENoaWxkcyhjaGlsZHMpO1xuXHRcdFx0fVxuXHRcdCk7XG5cdFx0cmV0dXJuIGNoaWxkcztcblx0fVxuXHRcblx0LyoqXG5cdCAqIFNlcmlhbGl6ZSBhbGwgYWN0aXZlIHN0b3JlcyBzdGF0ZSAmIGRhdGEgaW4gZXZlcnkgY2hpbGRzICYgbWl4ZWQgc2NvcGVzXG5cdCAqXG5cdCAqIFNjb3BlcyB3aXRob3V0IGtleSBvciBpZCBhcmUgaWdub3JlZFxuXHQgKiBAcGFyYW0gb3V0cHV0XG5cdCAqIEByZXR1cm5zIHt7fX1cblx0ICovXG5cdHNlcmlhbGl6ZSggY2ZnID0ge30sIG91dHB1dCA9IHt9ICkge1xuXHRcdGxldCBjdHggICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSB0aGlzLl8uX3Njb3BlLFxuXHRcdCAgICB7IGJhc2VJZCwga2V5LCBrZXlQSUQsIGluY3JlbWVudElkIH0gPSB0aGlzLl8sXG5cdFx0ICAgIHtcblx0XHRcdCAgICBhbGlhcyxcblx0XHRcdCAgICBwYXJlbnRBbGlhcyxcblx0XHQgICAgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID0gY2ZnLFxuXHRcdCAgICBzaWQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSBrZXlcblx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAocGFyZW50QWxpYXMgfHwga2V5UElEKSArICc+JyArIGtleVxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGFsaWFzIHx8IHBhcmVudEFsaWFzICYmIChwYXJlbnRBbGlhcyArICcvJyArIGJhc2VJZCkgfHwgdGhpcy5faWQ7XG5cdFx0XG5cdFx0XG5cdFx0Ly9hbGlhcyA9IGFsaWFzIHx8IGJhc2VJZDtcblx0XHRyZXR1cm4gdGhpcy5zZXJpYWxpemVfZXgoY2ZnLCBvdXRwdXQsIHNpZCwgYWxpYXMsIFtcIiRwYXJlbnRcIl0pXG5cdH1cblx0XG5cdHNlcmlhbGl6ZV9leCggY2ZnID0ge30sIG91dHB1dCA9IHt9LCBzaWQsIGFsaWFzLCBleGNsdWRlICkge1xuXHRcdGxldCBfICAgICAgICAgICAgICAgPSB0aGlzLl8sXG5cdFx0ICAgIGN0eCAgICAgICAgICAgICA9IF8uX3Njb3BlLFxuXHRcdCAgICB7IGluY3JlbWVudElkIH0gPSBfLFxuXHRcdCAgICB7XG5cdFx0XHQgICAgd2l0aENoaWxkcyA9IHRydWUsXG5cdFx0XHQgICAgd2l0aE1peGVkICA9IHRydWUsXG5cdFx0XHQgICAgbm9yZWZzLFxuXHRcdCAgICB9ICAgICAgICAgICAgICAgPSBjZmc7XG5cdFx0XG5cdFx0aWYgKCBrZXlXYWxrbkdldChvdXRwdXQsIHNpZCkgKSB7XG5cdFx0XHRpZiAoICFpbmNyZW1lbnRJZCApLy8gZG9uZVxuXHRcdFx0XHRyZXR1cm4gb3V0cHV0O1xuXHRcdFx0ZWxzZSBpZiAoIGluY3JlbWVudElkICkgey8vIGdlbmVyYXRlIGtleSBpZFxuXHRcdFx0XHRsZXQgaSA9IC0xO1xuXHRcdFx0XHR3aGlsZSAoIGtleVdhbGtuR2V0KG91dHB1dCwgc2lkICsgJ1snICsgKCsraSkgKyAnXScpICkgO1xuXHRcdFx0XHRzaWQgPSBzaWQgKyAnWycgKyBpICsgJ10nO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRcblx0XHRrZXlXYWxrblNldChvdXRwdXQsIHNpZCwge30pO1xuXHRcdFxuXHRcdE9iamVjdC5rZXlzKGN0eCkuZm9yRWFjaChcblx0XHRcdGlkID0+IHtcblx0XHRcdFx0aWYgKCBleGNsdWRlLmluY2x1ZGVzKGlkKSB8fCBTY29wZS5pc1N0b3JlQ2xhc3MoY3R4W2lkXSkgfHwgU2NvcGUuaXNTY29wZUNsYXNzKGN0eFtpZF0pIClcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFxuXHRcdFx0XHRjdHhbaWRdLnNlcmlhbGl6ZSh7IC4uLmNmZywgcGFyZW50QWxpYXM6IHNpZCB9LCBvdXRwdXQpO1xuXHRcdFx0fVxuXHRcdClcblx0XHRcblx0XHR3aXRoQ2hpbGRzICYmIF8uY2hpbGRTY29wZXMuZm9yRWFjaChcblx0XHRcdGN0eCA9PiB7XG5cdFx0XHRcdCFjdHguXy5pc0xvY2FsSWQgJiYgY3R4LnNlcmlhbGl6ZSh7XG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpdGhDaGlsZCAgOiB0cnVlLFxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRoUGFyZW50czogZmFsc2UsXG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudEFsaWFzOiBzaWQsXG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpdGhNaXhlZCxcblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9yZWZzLFxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgb3V0cHV0KTtcblx0XHRcdH1cblx0XHQpO1xuXHRcdFxuXHRcdHdpdGhNaXhlZCAmJiBfLl9taXhlZC5mb3JFYWNoKFxuXHRcdFx0Y3R4ID0+IHtcblx0XHRcdFx0IWN0eC5fLmlzTG9jYWxJZCAmJiBjdHguc2VyaWFsaXplKHtcblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aENoaWxkICA6IGZhbHNlLFxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRoUGFyZW50czogZmFsc2UsXG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpdGhNaXhlZCxcblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9yZWZzXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBvdXRwdXQpO1xuXHRcdFx0fVxuXHRcdCk7XG5cdFx0XG5cdFx0aWYgKCBhbGlhcyApIHtcblx0XHRcdG91dHB1dCA9IE9iamVjdC5rZXlzKG91dHB1dClcblx0XHRcdCAgICAgICAgICAgICAgIC5yZWR1Y2UoXG5cdFx0XHRcdCAgICAgICAgICAgICAgICggaCwgayApID0+IChcblx0XHRcdFx0XHQgICAgICAgICAgICAgICBoW2sgPT09IHRoaXMuX2lkXG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICA/IGFsaWFzXG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICA6IGtdID0gb3V0cHV0W2tdLFxuXHRcdFx0XHRcdFx0ICAgICAgICAgICAgICAgaFxuXHRcdFx0XHQgICAgICAgICAgICAgICApLFxuXHRcdFx0XHQgICAgICAgICAgICAgICB7fVxuXHRcdFx0ICAgICAgICAgICAgICAgKVxuXHRcdH1cblx0XHRyZXR1cm4gb3V0cHV0O1xuXHR9XG5cdFxuXHQvKipcblx0ICogUmVzdG9yZSBzdGF0ZSAmIGRhdGEgZnJvbSB0aGUgc2VyaWFsaXplIGZuXG5cdCAqIEBwYXJhbSBzbmFwc2hvdFxuXHQgKiBAcGFyYW0gZm9yY2Vcblx0ICovXG5cdHJlc3RvcmUoIHNuYXBzaG90LCBjZmcgPSB7fSwgZm9yY2UgPSBpcy5ib29sKGNmZykgJiYgY2ZnICkge1xuXHRcdGxldCBjdHggPSB0aGlzLl8uX3Njb3BlLCBzbmFwO1xuXHRcdFxuXHRcdGlmICggc25hcHNob3QgJiYgY2ZnICYmIGNmZy5hbGlhcyAmJiBjZmcuYWxpYXMgIT0gdGhpcy5faWQgKSB7XG5cdFx0XHRzbmFwID0ge1xuXHRcdFx0XHQuLi5zbmFwc2hvdCxcblx0XHRcdFx0W3RoaXMuX2lkXTogc25hcHNob3RbY2ZnLmFsaWFzXVxuXHRcdFx0fVxuXHRcdFx0ZGVsZXRlIHNuYXBbY2ZnLmFsaWFzXTtcblx0XHRcdHNuYXBzaG90ID0gc25hcDtcblx0XHR9XG5cdFx0c25hcHNob3QgPSBzbmFwc2hvdFxuXHRcdFx0JiYga2V5V2Fsa25HZXQoc25hcHNob3QsIHRoaXMuX2lkKVxuXHRcdFx0fHwgdGhpcy50YWtlU25hcHNob3RCeUtleSh0aGlzLl9pZCk7XG5cdFx0XG5cdFx0XG5cdFx0aWYgKCAhc25hcHNob3QgKVxuXHRcdFx0cmV0dXJuO1xuXHRcdFxuXHRcdHRoaXMuXy5zbmFwc2hvdCA9IHsgLi4uc25hcHNob3QgfTtcblx0XHRcblx0XHRzbmFwICAgICAgICAgID0gc25hcHNob3RbJy8nXTtcblx0XHRzbmFwc2hvdFsnLyddID0geyAuLi5zbmFwIH07XG5cdFx0c25hcCAmJiBPYmplY3Qua2V5cyhzbmFwKS5mb3JFYWNoKFxuXHRcdFx0bmFtZSA9PiB7XG5cdFx0XHRcdGlmICggbmFtZSA9PSBcIiRwYXJlbnRcIiApIHJldHVybjtcblx0XHRcdFx0XG5cdFx0XHRcdGlmICggY3R4W25hbWVdICkge1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdGlmICggZm9yY2UgJiYgIWlzLmZuKGN0eFtuYW1lXSkgKVxuXHRcdFx0XHRcdFx0Y3R4W25hbWVdLmRlc3Ryb3koKTtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHR0aGlzLl9tb3VudChuYW1lKTsvLyBxdWlldFxuXHRcdFx0XHR9XG5cdFx0XHRcdFxuXHRcdFx0fVxuXHRcdClcblx0XHRcblx0XHR0aGlzLl8uX21peGVkLmZvckVhY2goXG5cdFx0XHRjdHggPT4ge1xuXHRcdFx0XHQhY3R4Ll8uaXNMb2NhbElkICYmIGN0eC5yZXN0b3JlKHVuZGVmaW5lZCwgZm9yY2UpO1xuXHRcdFx0fVxuXHRcdCk7XG5cdFx0XG5cdFx0dGhpcy5fLmNoaWxkU2NvcGVzLmZvckVhY2goXG5cdFx0XHRjdHggPT4ge1xuXHRcdFx0XHQhY3R4Ll8uaXNMb2NhbElkICYmIGN0eC5yZXN0b3JlKHVuZGVmaW5lZCwgZm9yY2UpO1xuXHRcdFx0fVxuXHRcdCk7XG5cdH1cblx0XG5cdGdldFNuYXBzaG90QnlLZXkoIGtleSwgbG9jYWwgKSB7XG5cdFx0Ly8gb25seSBoYXZlIHRoZSBsb2NhbCBzbmFwXG5cdFx0aWYgKCB0aGlzLl8uc25hcHNob3QgJiYga2V5LnN0YXJ0c1dpdGgodGhpcy5faWQpICkge1xuXHRcdFx0bGV0IG9iaiA9IGtleVdhbGtuR2V0KHRoaXMuXy5zbmFwc2hvdCwga2V5LnN1YnN0cih0aGlzLl9pZC5sZW5ndGgpKVxuXHRcdFx0cmV0dXJuIG9iajtcblx0XHR9XG5cdFx0ZWxzZSByZXR1cm4gIWxvY2FsXG5cdFx0XHQmJiB0aGlzLnBhcmVudFxuXHRcdFx0JiYgdGhpcy5wYXJlbnQuZ2V0U25hcHNob3RCeUtleShrZXkpXG5cdFx0XHR8fFxuXHRcdFx0dGhpcy5zdG9yZXMuJHBhcmVudFxuXHRcdFx0JiYgdGhpcy5zdG9yZXMuJHBhcmVudC5nZXRTbmFwc2hvdEJ5S2V5KGtleSk7XG5cdFx0XG5cdH1cblx0XG5cdGdldFNuYXBzaG90QnlLZXlFeHQoIHNuYXBzaG90LCBrZXksIGxvY2FsICkge1xuXHRcdC8vIG9ubHkgaGF2ZSB0aGUgbG9jYWwgc25hcFxuXHRcdGlmICggc25hcHNob3QgKSB7XG5cdFx0XHRsZXQgb2JqID0ga2V5V2Fsa25HZXQoc25hcHNob3QsIGtleSlcblx0XHRcdHJldHVybiBvYmo7XG5cdFx0fVxuXHRcdFxuXHR9XG5cdFxuXHR0YWtlU25hcHNob3RCeUtleSgga2V5LCBsb2NhbCApIHtcblx0XHRpZiAoIHRoaXMuXy5zbmFwc2hvdCAmJiBrZXkuc3RhcnRzV2l0aCh0aGlzLl9pZCkgKSB7XG5cdFx0XHRsZXQgb2JqID0ga2V5V2Fsa25HZXQodGhpcy5fLnNuYXBzaG90LCBrZXkuc3Vic3RyKHRoaXMuX2lkLmxlbmd0aCkpXG5cdFx0XHRpZiAoIG9iaiApIHtcblx0XHRcdFx0dGhpcy5kZWxldGVTbmFwc2hvdEJ5S2V5KGtleSwgdHJ1ZSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gb2JqO1xuXHRcdH1cblx0XHRlbHNlIHJldHVybiAhbG9jYWxcblx0XHRcdCYmIHRoaXMucGFyZW50XG5cdFx0XHQmJiB0aGlzLnBhcmVudC50YWtlU25hcHNob3RCeUtleShrZXkpXG5cdFx0XHR8fFxuXHRcdFx0dGhpcy5zdG9yZXMuJHBhcmVudFxuXHRcdFx0JiYgdGhpcy5zdG9yZXMuJHBhcmVudC50YWtlU25hcHNob3RCeUtleShrZXkpO1xuXHR9XG5cdFxuXHRkZWxldGVTbmFwc2hvdEJ5S2V5KCBrZXksIGxvY2FsICkge1xuXHRcdGlmICggdGhpcy5fLnNuYXBzaG90ICYmIGtleS5zdGFydHNXaXRoKHRoaXMuX2lkKSApIHtcblx0XHRcdGxldCBvYmogPSBrZXlXYWxrbkdldCh0aGlzLl8uc25hcHNob3QsIGtleS5zdWJzdHIodGhpcy5faWQubGVuZ3RoKS5yZXBsYWNlKC9eKC4qW1xcPnxcXC9dKVteXFw+fFxcL10rJC9pZywgJyQxJykpXG5cdFx0XHRpZiAoIG9iaiApXG5cdFx0XHRcdGRlbGV0ZSBvYmpba2V5LnJlcGxhY2UoL14uKltcXD58XFwvXShbXlxcPnxcXC9dKykkL2lnLCAnJDEnKV1cblx0XHR9XG5cdFx0cmV0dXJuICFsb2NhbFxuXHRcdFx0JiYgdGhpcy5wYXJlbnRcblx0XHRcdCYmIHRoaXMucGFyZW50LmRlbGV0ZVNuYXBzaG90QnlLZXkoa2V5KVxuXHRcdFx0fHxcblx0XHRcdHRoaXMuc3RvcmVzLiRwYXJlbnRcblx0XHRcdCYmIHRoaXMuc3RvcmVzLiRwYXJlbnQuZGVsZXRlU25hcHNob3RCeUtleShrZXkpO1xuXHR9XG5cdFxuXHRzZXRTdGF0ZSggcFN0YXRlICkge1xuXHRcdE9iamVjdC5rZXlzKHBTdGF0ZSlcblx0XHQgICAgICAuZm9yRWFjaChrID0+ICh0aGlzLnN0YXRlW2tdID0gcFN0YXRlW2tdKSlcblx0fVxuXHRcblx0LyoqXG5cdCAqIGdldCBhIHBhcnNlZCByZWZlcmVuY2Vcblx0ICogQHBhcmFtIF9yZWZcblx0ICogQHJldHVybnMge3tzdG9yZUlkLCBwYXRoLCBhbGlhczogKiwgcmVmOiAqfX1cblx0ICovXG5cdHBhcnNlUmVmKCBfcmVmICkge1xuXHRcdGlmICggdHlwZW9mIF9yZWYgIT09ICdzdHJpbmcnICkgey8vIEB0b2RvIDogcm0gdGhpc1xuXHRcdFx0dGhpcy5yZWdpc3Rlcih7IFtfcmVmLm5hbWVdOiBfcmVmLnN0b3JlIH0pO1xuXHRcdFx0X3JlZiA9IF9yZWYubmFtZTtcblx0XHR9XG5cdFx0bGV0IHJlZiA9IF9yZWYuc3BsaXQoJzonKTtcblx0XHRyZWZbMF0gID0gcmVmWzBdLnNwbGl0KCcuJyk7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHN0b3JlSWQ6IHJlZlswXVswXSxcblx0XHRcdHBhdGggICA6IHJlZlswXSxcblx0XHRcdGFsaWFzICA6IHJlZlsxXSB8fCByZWZbMF1bcmVmWzBdLmxlbmd0aCAtIDFdLFxuXHRcdFx0cmVmICAgIDogX3JlZlxuXHRcdH07XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBEaXNwYXRjaCBhbiBhY3Rpb24gdG8gdGhlIHRvcCBwYXJlbnQgJiBtaXhlZCBzY29wZXMsIGluIGFsbCBzdG9yZXNcblx0ICpcblx0ICogQHBhcmFtIGFjdGlvblxuXHQgKiBAcGFyYW0gZGF0YVxuXHQgKiBAcmV0dXJucyB7U2NvcGV9XG5cdCAqL1xuXHRkaXNwYXRjaCggYWN0aW9uLCAuLi5hcmd6ICkge1xuXHRcdGlmICggdGhpcy5kZWFkICkge1xuXHRcdFx0Y29uc29sZS53YXJuKFwiRGlzcGF0Y2ggd2FzIGNhbGxlZCBvbiBhIGRlYWQgc2NvcGUsIGNoZWNrIHlvdSdyZSBhc3luYyBmdW5jdGlvbnMgaW4gdGhpcyBzdGFjay4uLlwiLCAobmV3IEVycm9yKCkpLnN0YWNrKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0bGV0IGJBY3RzID0gdGhpcy5fLl9ib3VuZGVkQWN0aW9ucztcblx0XHRPYmplY3Qua2V5cyh0aGlzLl8uX3Njb3BlKVxuXHRcdCAgICAgIC5mb3JFYWNoKFxuXHRcdFx0ICAgICAgaWQgPT4ge1xuXHRcdFx0XHQgICAgICBpZiAoIGlkID09IFwiJHBhcmVudFwiICkgcmV0dXJuO1xuXHRcdFx0XHQgICAgICBpZiAoICFpcy5mbih0aGlzLl8uX3Njb3BlW2lkXSkgKVxuXHRcdFx0XHRcdCAgICAgIHRoaXMuXy5fc2NvcGVbaWRdLnRyaWdnZXIoYWN0aW9uLCAuLi5hcmd6KTtcblx0XHRcdCAgICAgIH1cblx0XHQgICAgICApO1xuXHRcdFxuXHRcdGlmICggYkFjdHMgJiYgYkFjdHMudGVzdChhY3Rpb24pIClcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFxuXHRcdHRoaXMuXy5fbWl4ZWQuZm9yRWFjaCgoIGN0eCApID0+IChjdHguZGlzcGF0Y2goYWN0aW9uLCAuLi5hcmd6KSkpO1xuXHRcdHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LmRpc3BhdGNoKGFjdGlvbiwgLi4uYXJneik7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblx0XG5cdHRyaWdnZXIoKSB7XG5cdFx0dGhpcy5kaXNwYXRjaCguLi5hcmd1bWVudHMpO1xuXHR9XG5cdFxuXHQvKipcblx0ICogb25jZSgnc3RhYmxlJywgY2IpXG5cdCAqIEBwYXJhbSBvYmoge1JlYWN0LkNvbXBvbmVudHxTdG9yZXxmdW5jdGlvbilcblx0ICogQHBhcmFtIGtleSB7c3RyaW5nfSBvcHRpb25hbCBrZXkgd2hlcmUgdG8gbWFwIHRoZSBwdWJsaWMgc3RhdGVcblx0ICovXG5cdHRoZW4oIGNiICkge1xuXHRcdGlmICggIXRoaXMuX3N0YWJsZSApXG5cdFx0XHRyZXR1cm4gdGhpcy5vbmNlKCdzdGFibGUnLCBlID0+IHRoaXMudGhlbihjYikpO1xuXHRcdFxuXHRcdHJldHVybiBjYih0aGlzLmRhdGEpO1xuXHR9XG5cdFxuXHRvbmNlU3RhYmxlVHJlZSggY2IgKSB7XG5cdFx0aWYgKCB0aGlzLl8udW5TdGFibGVDaGlsZHMgKVxuXHRcdFx0cmV0dXJuIHRoaXMub25jZSgnc3RhYmxlVHJlZScsIGUgPT4gdGhpcy5vbmNlU3RhYmxlVHJlZShjYikpO1xuXHRcdHJldHVybiBjYih0aGlzLmRhdGEpO1xuXHR9XG5cdFxuXHQvKipcblx0ICogQ2FsbCByZXRhaW4gb24gdGhlIHNjb3BlZCBzdG9yZXMgYmFzaW5nIHRoZSBnaXZlbiBsaXN0XG5cdCAqXG5cdCAqIEBwYXJhbSBzdG9yZXNcblx0ICogQHBhcmFtIHJlYXNvblxuXHQgKi9cblx0cmV0YWluU3RvcmVzKCBzdG9yZXMgPSBbXSwgcmVhc29uICkge1xuXHRcdHN0b3Jlcy5mb3JFYWNoKFxuXHRcdFx0aWQgPT4gKHRoaXMuc3RvcmVzW2lkXSAmJiB0aGlzLnN0b3Jlc1tpZF0ucmV0YWluICYmIHRoaXMuc3RvcmVzW2lkXS5yZXRhaW4ocmVhc29uKSlcblx0XHQpXG5cdH1cblx0XG5cdC8qKlxuXHQgKiBDYWxsIHJldGFpbiBvbiB0aGUgc2NvcGVkIHN0b3Jlc1xuXHQgKlxuXHQgKiBAcGFyYW0gc3RvcmVzXG5cdCAqIEBwYXJhbSByZWFzb25cblx0ICovXG5cdGRpc3Bvc2VTdG9yZXMoIHN0b3JlcyA9IFtdLCByZWFzb24gKSB7XG5cdFx0c3RvcmVzLmZvckVhY2goXG5cdFx0XHRpZCA9PiAodGhpcy5zdG9yZXNbaWRdICYmIHRoaXMuc3RvcmVzW2lkXS5kaXNwb3NlICYmIHRoaXMuc3RvcmVzW2lkXS5kaXNwb3NlKHJlYXNvbikpXG5cdFx0KVxuXHR9XG5cdFxuXHQvKipcblx0ICogS2VlcCB0aGUgc2NvcGUgdW5zdGFibGUgdW50aWwgcmVsZWFzZSBpcyBjYWxsZWRcblx0ICogQHBhcmFtIHJlYXNvblxuXHQgKi9cblx0d2FpdCggcmVhc29uICkge1xuXHRcdC8vY29uc29sZS5sb2coXCJ3YWl0XCIsIHJlYXNvbik7XG5cdFx0dGhpcy5fc3RhYmxlICYmICF0aGlzLl9fbG9ja3MuYWxsICYmIHRoaXMuZW1pdChcInVuc3RhYmxlXCIsIHRoaXMpO1xuXHRcdHRoaXMuX3N0YWJsZSA9IGZhbHNlO1xuXHRcdHRoaXMuX19sb2Nrcy5hbGwrKztcblx0XHRpZiAoIHJlYXNvbiApIHtcblx0XHRcdHRoaXMuX19sb2Nrc1tyZWFzb25dID0gdGhpcy5fX2xvY2tzW3JlYXNvbl0gfHwgMDtcblx0XHRcdHRoaXMuX19sb2Nrc1tyZWFzb25dKys7XG5cdFx0fVxuXHR9XG5cdFxuXHQvKipcblx0ICogU3RhYmlsaXplIHRoZSBzY29wZSBpZiBubyBtb3JlIGxvY2tzIHJlbWFpbiAod2FpdCBmbilcblx0ICogQHBhcmFtIHJlYXNvblxuXHQgKi9cblx0cmVsZWFzZSggcmVhc29uICkge1xuXHRcdFxuXHRcdGlmICggcmVhc29uICkge1xuXHRcdFx0aWYgKCB0aGlzLl9fbG9ja3NbcmVhc29uXSA9PSAwIClcblx0XHRcdFx0Y29uc29sZS5lcnJvcihcIlJlbGVhc2UgbW9yZSB0aGFuIGxvY2tpbmcgIVwiLCByZWFzb24pO1xuXHRcdFx0dGhpcy5fX2xvY2tzW3JlYXNvbl0gPSB0aGlzLl9fbG9ja3NbcmVhc29uXSB8fCAwO1xuXHRcdFx0dGhpcy5fX2xvY2tzW3JlYXNvbl0tLTtcblx0XHR9XG5cdFx0aWYgKCAhcmVhc29uICYmIHRoaXMuX19sb2Nrcy5hbGwgPT0gMCApXG5cdFx0XHRjb25zb2xlLmVycm9yKFwiUmVsZWFzZSBtb3JlIHRoYW4gbG9ja2luZyAhXCIpO1xuXHRcdFxuXHRcdHRoaXMuX19sb2Nrcy5hbGwtLTtcblx0XHRpZiAoICF0aGlzLl9fbG9ja3MuYWxsICkge1xuXHRcdFx0aWYgKCB0aGlzLl8uc3RhYmlsaXplclRNIClcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0dGhpcy5fLnN0YWJpbGl6ZXJUTSAmJiBjbGVhclRpbWVvdXQodGhpcy5fLnN0YWJpbGl6ZXJUTSk7XG5cdFx0XHRcblx0XHRcdHRoaXMuXy5zdGFiaWxpemVyVE0gPSBzZXRUaW1lb3V0KFxuXHRcdFx0XHRlID0+IHtcblx0XHRcdFx0XHR0aGlzLl8uc3RhYmlsaXplclRNID0gbnVsbDtcblx0XHRcdFx0XHRpZiAoIHRoaXMuX19sb2Nrcy5hbGwgKVxuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdHRoaXMuXy5wcm9wYWdUTSAmJiBjbGVhclRpbWVvdXQodGhpcy5fLnByb3BhZ1RNKTtcblx0XHRcdFx0XHR0aGlzLl9yZXYrKztcblx0XHRcdFx0XHR0aGlzLl9zdGFibGUgPSB0cnVlO1xuXHRcdFx0XHRcdHRoaXMuZW1pdChcInN0YWJsZVwiLCB0aGlzKTtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHQhdGhpcy5kZWFkICYmIHRoaXMuX3Byb3BhZygpOy8vIHN0YWJpbGl0eSBjYW4gaW5kdWNlIGRlc3Ryb3lcblx0XHRcdFx0fVxuXHRcdFx0KTtcblx0XHR9XG5cdFx0XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBQcm9wYWcgc3RvcmVzIHVwZGF0ZXMgYmFzaW5nIHRoZWlycyBsYXN0IHVwZGF0ZXNcblx0ICovXG5cdHByb3BhZygpIHtcblx0XHR0aGlzLl8ucHJvcGFnVE0gJiYgY2xlYXJUaW1lb3V0KHRoaXMuXy5wcm9wYWdUTSk7XG5cdFx0dGhpcy5fLnByb3BhZ1RNID0gc2V0VGltZW91dChcblx0XHRcdGUgPT4ge1xuXHRcdFx0XHR0aGlzLl8ucHJvcGFnVE0gPSBudWxsO1xuXHRcdFx0XHR0aGlzLl9wcm9wYWcoKVxuXHRcdFx0fSwgMlxuXHRcdCk7XG5cdH1cblx0XG5cdF9wcm9wYWcoKSB7XG5cdFx0aWYgKCB0aGlzLl8uZm9sbG93ZXJzLmxlbmd0aCApXG5cdFx0XHR0aGlzLl8uZm9sbG93ZXJzLmZvckVhY2goKCB7IDA6IG9iaiwgMToga2V5LCAyOiBhcywgMzogbGFzdFJldnMsIDM6IHJlbWFwcyB9ICkgPT4ge1xuXHRcdFx0XHRsZXQgZGF0YSA9IHRoaXMuZ2V0VXBkYXRlcyhsYXN0UmV2cyk7XG5cdFx0XHRcdGlmICggIWRhdGEgKSByZXR1cm47XG5cdFx0XHRcdC8vY29uc29sZS5sb2coZGF0YSwgbGFzdFJldnMpXG5cdFx0XHRcdGlmICggdHlwZW9mIG9iaiAhPSBcImZ1bmN0aW9uXCIgKSB7XG5cdFx0XHRcdFx0Ly9jb25zb2xlLmxvZyhcInNldFN0YXRlIFwiLG9iaiwgT2JqZWN0LmtleXMoZGF0YSkpXG5cdFx0XHRcdFx0aWYgKCBhcyApIG9iai5zZXRTdGF0ZSh7IFthc106IGRhdGEgfSk7XG5cdFx0XHRcdFx0ZWxzZSBvYmouc2V0U3RhdGUoZGF0YSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0b2JqKGRhdGEsIGxhc3RSZXZzICYmIFsuLi5sYXN0UmV2c10gfHwgXCJubyByZXZzXCIpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIGxhc3RSZXZzICYmXG5cdFx0XHRcdC8vIGtleS5mb3JFYWNoKGlkID0+IChsYXN0UmV2c1tpZF0gPSB0aGlzLnN0b3Jlc1tpZF0gJiZcblx0XHRcdFx0Ly8gdGhpcy5zdG9yZXNbaWRdLl9yZXYgfHwgMCkpO1xuXHRcdFx0fSk7XG5cdFx0dGhpcy5lbWl0KFwidXBkYXRlXCIsIHRoaXMuZ2V0VXBkYXRlcygpKTtcblx0fVxuXHRcblx0LyoqXG5cdCAqIGlzIHN0YWJsZVxuXHQgKiBAcmV0dXJucyBib29sXG5cdCAqL1xuXHRpc1N0YWJsZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5fc3RhYmxlO1xuXHR9XG5cdFxuXHQvKipcblx0ICogaXMgc3RhYmxlIHRyZWVcblx0ICogQHJldHVybnMgYm9vbFxuXHQgKi9cblx0aXNTdGFibGVUcmVlKCkge1xuXHRcdHJldHVybiAhdGhpcy5fLnVuU3RhYmxlQ2hpbGRzO1xuXHR9XG5cdFxuXHQvKipcblx0ICogUmVnaXN0ZXIgY2hpbGRyZW5cblx0ICogQHBhcmFtIHNjb3BlXG5cdCAqIEBwcml2YXRlXG5cdCAqL1xuXHRfYWRkQ2hpbGQoIHNjb3BlICkge1xuXHRcdHRoaXMuXy5jaGlsZFNjb3Blcy5wdXNoKHNjb3BlKTtcblx0XHR0aGlzLl8uc2VlbkNoaWxkcysrO1xuXHRcdGxldCBsaXN0cyAgICAgPSB7XG5cdFx0XHQgICAgJ3N0YWJsZScgICAgICA6IHMgPT4ge1xuXHRcdFx0XHQgICAgdGhpcy5fLnVuU3RhYmxlQ2hpbGRzLS07XG5cdFx0XHRcdCAgICBpZiAoICF0aGlzLl8udW5TdGFibGVDaGlsZHMgKVxuXHRcdFx0XHRcdCAgICB0aGlzLmVtaXQoXCJzdGFibGVUcmVlXCIsIHRoaXMpXG5cdFx0XHQgICAgfSxcblx0XHRcdCAgICAndW5zdGFibGUnICAgIDogcyA9PiB7XG5cdFx0XHRcdCAgICB0aGlzLl8udW5TdGFibGVDaGlsZHMrKztcblx0XHRcdFx0ICAgIGlmICggMSA9PSB0aGlzLl8udW5TdGFibGVDaGlsZHMgKVxuXHRcdFx0XHRcdCAgICB0aGlzLmVtaXQoXCJ1bnN0YWJsZVRyZWVcIiwgdGhpcylcblx0XHRcdCAgICB9LFxuXHRcdFx0ICAgICdzdGFibGVUcmVlJyAgOiBzID0+IHtcblx0XHRcdFx0ICAgIHRoaXMuXy51blN0YWJsZUNoaWxkcy0tO1xuXHRcdFx0XHQgICAgaWYgKCAhdGhpcy5fLnVuU3RhYmxlQ2hpbGRzIClcblx0XHRcdFx0XHQgICAgdGhpcy5lbWl0KFwic3RhYmxlVHJlZVwiLCB0aGlzKVxuXHRcdFx0ICAgIH0sXG5cdFx0XHQgICAgJ3Vuc3RhYmxlVHJlZSc6IHMgPT4ge1xuXHRcdFx0XHQgICAgdGhpcy5fLnVuU3RhYmxlQ2hpbGRzKys7XG5cdFx0XHRcdCAgICBpZiAoIDEgPT0gdGhpcy5fLnVuU3RhYmxlQ2hpbGRzIClcblx0XHRcdFx0XHQgICAgdGhpcy5lbWl0KFwidW5zdGFibGVUcmVlXCIsIHRoaXMpXG5cdFx0XHQgICAgfSxcblx0XHRcdCAgICAnZGVzdHJveScgICAgIDogY3R4ID0+IHtcblx0XHRcdFx0ICAgIGlmICggY3R4Ll8udW5TdGFibGVDaGlsZHMgKVxuXHRcdFx0XHRcdCAgICB0aGlzLl8udW5TdGFibGVDaGlsZHMtLTtcblx0XHRcdFx0ICAgIGlmICggIWN0eC5pc1N0YWJsZSgpIClcblx0XHRcdFx0XHQgICAgdGhpcy5fLnVuU3RhYmxlQ2hpbGRzLS07XG5cdFx0XHRcdFxuXHRcdFx0XHQgICAgaWYgKCAhdGhpcy5fLnVuU3RhYmxlQ2hpbGRzIClcblx0XHRcdFx0XHQgICAgdGhpcy5lbWl0KFwic3RhYmxlVHJlZVwiLCB0aGlzKVxuXHRcdFx0ICAgIH1cblx0XHQgICAgfSxcblx0XHQgICAgd2FzU3RhYmxlID0gdGhpcy5fLnVuU3RhYmxlQ2hpbGRzO1xuXHRcdFxuXHRcdCFzY29wZS5pc1N0YWJsZSgpICYmIHRoaXMuXy51blN0YWJsZUNoaWxkcysrO1xuXHRcdHNjb3BlLl8udW5TdGFibGVDaGlsZHMgJiYgdGhpcy5fLnVuU3RhYmxlQ2hpbGRzKys7XG5cdFx0dGhpcy5fLmNoaWxkU2NvcGVzTGlzdC5wdXNoKGxpc3RzKTtcblx0XHRcblx0XHRpZiAoICF3YXNTdGFibGUgJiYgdGhpcy5fLnVuU3RhYmxlQ2hpbGRzIClcblx0XHRcdHRoaXMuZW1pdChcInVuc3RhYmxlVHJlZVwiLCB0aGlzKTtcblx0XHRcblx0XHRzY29wZS5vbihsaXN0cyk7XG5cdH1cblx0XG5cdF9ybUNoaWxkKCBjdHggKSB7XG5cdFx0bGV0IGkgICAgICAgICA9IHRoaXMuXy5jaGlsZFNjb3Blcy5pbmRleE9mKGN0eCksXG5cdFx0ICAgIHdhc1N0YWJsZSA9IHRoaXMuXy51blN0YWJsZUNoaWxkcztcblx0XHRpZiAoIGkgIT0gLTEgKSB7XG5cdFx0XHR0aGlzLl8uY2hpbGRTY29wZXMuc3BsaWNlKGksIDEpO1xuXHRcdFx0IWN0eC5pc1N0YWJsZSgpICYmIHRoaXMuXy51blN0YWJsZUNoaWxkcy0tO1xuXHRcdFx0Y3R4Ll8udW5TdGFibGVDaGlsZHMgJiYgdGhpcy5fLnVuU3RhYmxlQ2hpbGRzLS07XG5cdFx0XHRjdHgudW4odGhpcy5fLmNoaWxkU2NvcGVzTGlzdC5zcGxpY2UoaSwgMSlbMF0pO1xuXHRcdFx0aWYgKCB3YXNTdGFibGUgJiYgIXRoaXMuXy51blN0YWJsZUNoaWxkcyApXG5cdFx0XHRcdHRoaXMuZW1pdChcInN0YWJsZVRyZWVcIilcblx0XHR9XG5cdH1cblx0XG5cdHJldGFpbiggcmVhc29uICkge1xuXHRcdHRoaXMuX19yZXRhaW5zLmFsbCsrO1xuXHRcdC8vY29uc29sZS5sb2coXCJyZXRhaW5cIiwgdGhpcy5faWQsIHJlYXNvbik7XG5cdFx0aWYgKCByZWFzb24gKSB7XG5cdFx0XHR0aGlzLl9fcmV0YWluc1tyZWFzb25dID0gdGhpcy5fX3JldGFpbnNbcmVhc29uXSB8fCAwO1xuXHRcdFx0dGhpcy5fX3JldGFpbnNbcmVhc29uXSsrO1xuXHRcdH1cblx0fVxuXHRcblx0ZGlzcG9zZSggcmVhc29uICkge1xuXHRcdC8vY29uc29sZS5sb2coXCJkaXNwb3NlXCIsIHRoaXMuX2lkLCByZWFzb24pO1xuXHRcdGlmICggcmVhc29uICkge1xuXHRcdFx0aWYgKCAhdGhpcy5fX3JldGFpbnNbcmVhc29uXSApXG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIkRpc3Bvc2UgbW9yZSB0aGFuIHJldGFpbmluZyA6IFwiICsgcmVhc29uKTtcblx0XHRcdHRoaXMuX19yZXRhaW5zW3JlYXNvbl0tLTtcblx0XHR9XG5cdFx0XG5cdFx0aWYgKCAhdGhpcy5fX3JldGFpbnMuYWxsIClcblx0XHRcdHRocm93IG5ldyBFcnJvcihcIkRpc3Bvc2UgbW9yZSB0aGFuIHJldGFpbmluZyAhXCIpO1xuXHRcdFxuXHRcdHRoaXMuX19yZXRhaW5zLmFsbC0tO1xuXHRcdFxuXHRcdGlmICggIXRoaXMuX19yZXRhaW5zLmFsbCApIHtcblx0XHRcdC8vY29uc29sZS5sb2coXCJkaXNwb3NlIGRvIGRlc3Ryb3kgXCIsIHRoaXMuX2lkLCB0aGlzLl9wZXJzaXN0ZW5jZVRtKTtcblx0XHRcdGlmICggdGhpcy5fLnBlcnNpc3RlbmNlVG0gKSB7XG5cdFx0XHRcdHRoaXMuXy5kZXN0cm95VE0gJiYgY2xlYXJUaW1lb3V0KHRoaXMuXy5kZXN0cm95VE0pO1xuXHRcdFx0XHR0aGlzLl8uZGVzdHJveVRNID0gc2V0VGltZW91dChcblx0XHRcdFx0XHRlID0+IHtcblx0XHRcdFx0XHRcdHRoaXMudGhlbihzID0+IHtcblx0XHRcdFx0XHRcdFx0IXRoaXMuX19yZXRhaW5zLmFsbCAmJiAhdGhpcy5kZWFkICYmIHRoaXMuZGVzdHJveSgpXG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHRoaXMuXy5wZXJzaXN0ZW5jZVRtXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0dGhpcy50aGVuKHMgPT5cblx0XHRcdFx0XHQgICAgICAgICAgKCF0aGlzLl9fcmV0YWlucy5hbGwgJiYgIXRoaXMuZGVhZCAmJiB0aGlzLmRlc3Ryb3koKSlcblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBvcmRlciBkZXN0cm95IG9mIGxvY2FsIHN0b3Jlc1xuXHQgKi9cblx0ZGVzdHJveSgpIHtcblx0XHRsZXQgY3R4ID0gdGhpcy5fLl9zY29wZTtcblx0XHRbLi4udGhpcy5fLmNoaWxkU2NvcGVzXS5tYXAoc2NvcGUgPT4gc2NvcGUuZGVzdHJveSgpKVxuXHRcdGZvciAoIGxldCBrZXkgaW4gY3R4IClcblx0XHRcdGlmICggIWlzLmZuKGN0eFtrZXldKSApIHtcblx0XHRcdFx0aWYgKCBrZXkgPT0gXCIkcGFyZW50XCIgKSBjb250aW51ZTtcblx0XHRcdFx0IWN0eFtrZXldLl9hdXRvRGVzdHJveSAmJiBjdHhba2V5XS5kaXNwb3NlKFwic2NvcGVkXCIpO1xuXHRcdFx0fVxuXHRcdHRoaXMuXy5zdGFiaWxpemVyVE0gJiYgY2xlYXJUaW1lb3V0KHRoaXMuXy5zdGFiaWxpemVyVE0pO1xuXHRcdHRoaXMuXy5wcm9wYWdUTSAmJiBjbGVhclRpbWVvdXQodGhpcy5fLnByb3BhZ1RNKTtcblx0XHRPYmplY3Qua2V5cyhcblx0XHRcdHRoaXMuXy5fbGlzdGVuaW5nXG5cdFx0KS5mb3JFYWNoKFxuXHRcdFx0aWQgPT4gKChpZCAhPT0gXCIkcGFyZW50XCIpICYmIHRoaXMuXy5fc2NvcGVbaWRdLnJlbW92ZUxpc3RlbmVyKHRoaXMuXy5fbGlzdGVuaW5nW2lkXSkpXG5cdFx0KTtcblx0XHR3aGlsZSAoIHRoaXMuXy5fbWl4ZWRMaXN0Lmxlbmd0aCApIHtcblx0XHRcdHRoaXMuXy5fbWl4ZWRbMF0ucmVtb3ZlTGlzdGVuZXIodGhpcy5fLl9taXhlZExpc3Quc2hpZnQoKSk7XG5cdFx0XHR0aGlzLl8uX21peGVkLnNoaWZ0KCkuZGlzcG9zZShcIm1peGVkVG9cIik7XG5cdFx0fVxuXHRcdFsuLi50aGlzLl8uZm9sbG93ZXJzXS5tYXAoZm9sbG93ZXIgPT4gdGhpcy51bkJpbmQoLi4uZm9sbG93ZXIpKTtcblx0XHRpZiAoIHRoaXMuXy5fcGFyZW50TGlzdCApIHtcblx0XHRcdHRoaXMucGFyZW50Ll9ybUNoaWxkKHRoaXMpO1xuXHRcdFx0dGhpcy5wYXJlbnQucmVtb3ZlTGlzdGVuZXIodGhpcy5fLl9wYXJlbnRMaXN0KTtcblx0XHRcdHRoaXMucGFyZW50LmRpc3Bvc2UoXCJpc015UGFyZW50XCIpO1xuXHRcdFx0dGhpcy5fLl9wYXJlbnRMaXN0ID0gbnVsbDtcblx0XHR9XG5cdFx0dGhpcy5kZWFkID0gdHJ1ZTtcblx0XHRkZWxldGUgYWxsU2NvcGVzW3RoaXMuX2lkXTtcblx0XHR0aGlzLmVtaXQoXCJkZXN0cm95XCIsIHRoaXMpO1xuXHRcdFxuXHRcdFxuXHR9XG59XG5cblxuU2NvcGUuaXNTY29wZSA9IGZ1bmN0aW9uICggb2JqICkge1xuXHRyZXR1cm4gb2JqIGluc3RhbmNlb2YgU2NvcGVcbn07XG5cblNjb3BlLmlzU2NvcGVDbGFzcyA9IGZ1bmN0aW9uICggb2JqICkge1xuXHRyZXR1cm4gU2NvcGUuaXNQcm90b3R5cGVPZihvYmopIHx8IG9iaiA9PT0gU2NvcGVcbn07XG5leHBvcnQgZGVmYXVsdCBTY29wZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvU2NvcGUuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImlzXCJcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2hvcnRpZFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInNob3J0aWRcIlxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxuICogICBUaGUgTUlUIExpY2Vuc2UgKE1JVClcbiAqICAgQ29weXJpZ2h0IChjKSAyMDE5LiBXaXNlIFdpbGQgV2ViXG4gKlxuICogICBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiAgIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqICAgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogICB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiAgIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogICBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqICAgVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG4gKiAgIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogICBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiAgIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogICBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqICAgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogICBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogICBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuICogICBTT0ZUV0FSRS5cbiAqXG4gKiAgIEBhdXRob3IgOiBOYXRoYW5hZWwgQnJhdW5cbiAqICAgQGNvbnRhY3QgOiBuOHR6LmpzQGdtYWlsLmNvbVxuICovXG5cbmltcG9ydCBpcyBmcm9tICdpcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVtaXR0ZXIge1xuXHRfZXZlbnRzID0ge307XG5cdFxuXHRvbiggZXZ0LCBjYiApIHtcblx0XHRpZiAoICFpcy5zdHJpbmcoZXZ0KSAmJiBldnQgKVxuXHRcdFx0cmV0dXJuIE9iamVjdC5rZXlzKGV2dCkuZm9yRWFjaChrID0+IHRoaXMub24oaywgZXZ0W2tdKSk7XG5cdFx0XG5cdFx0dGhpcy5fZXZlbnRzW2V2dF0gPSB0aGlzLl9ldmVudHNbZXZ0XSB8fCBbXTtcblx0XHR0aGlzLl9ldmVudHNbZXZ0XS5wdXNoKGNiKTtcblx0fVxuXHRcblx0dW4oIGV2dCwgY2IgKSB7XG5cdFx0aWYgKCAhaXMuc3RyaW5nKGV2dCkgJiYgZXZ0IClcblx0XHRcdHJldHVybiBPYmplY3Qua2V5cyhldnQpLmZvckVhY2goayA9PiB0aGlzLnVuKGssIGV2dFtrXSkpO1xuXHRcdFxuXHRcdGlmICggIXRoaXMuX2V2ZW50c1tldnRdICkgcmV0dXJuO1xuXHRcdGxldCBpID0gdGhpcy5fZXZlbnRzW2V2dF0uaW5kZXhPZihjYik7XG5cdFx0dGhpcy5fZXZlbnRzW2V2dF0uc3BsaWNlKGksIDEpO1xuXHR9XG5cdFxuXHRlbWl0KCBldnQsIC4uLmFyZ3ogKSB7XG5cdFx0aWYgKCAhdGhpcy5fZXZlbnRzW2V2dF0gKSByZXR1cm47XG5cdFx0bGV0IGxpc3RzID0gWy4uLnRoaXMuX2V2ZW50c1tldnRdXTtcblx0XHRcblx0XHRmb3IgKCBsZXQgaSA9IDA7IGkgPCBsaXN0cy5sZW5ndGg7IGkrKyApXG5cdFx0XHRsaXN0c1tpXSguLi5hcmd6KVxuXHR9XG5cdFxuXHRhZGRMaXN0ZW5lcigpIHtcblx0XHR0aGlzLm9uKC4uLmFyZ3VtZW50cyk7XG5cdH1cblx0XG5cdHJlbW92ZUxpc3RlbmVyKCkge1xuXHRcdHRoaXMudW4oLi4uYXJndW1lbnRzKTtcblx0fVxuXHRcblx0cmVtb3ZlQWxsTGlzdGVuZXJzKCkge1xuXHRcdHRoaXMuX2V2ZW50cyA9IHt9O1xuXHR9XG5cdFxuXHRvbmNlKCBldnQsIGNiICkge1xuXHRcdGxldCBmbjtcblx0XHR0aGlzLm9uKGV2dCwgZm4gPSAoIC4uLmFyZ3ogKSA9PiB7XG5cdFx0XHR0aGlzLnVuKGV2dCwgZm4pO1xuXHRcdFx0Y2IoLi4uYXJneilcblx0XHR9KTtcblx0fVxuXHRcblx0XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWxzL0VtaXR0ZXIuanMiLCIvKlxuICogICBUaGUgTUlUIExpY2Vuc2UgKE1JVClcbiAqICAgQ29weXJpZ2h0IChjKSAyMDE5LiBXaXNlIFdpbGQgV2ViXG4gKlxuICogICBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiAgIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqICAgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogICB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiAgIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogICBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqICAgVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG4gKiAgIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogICBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiAgIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogICBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqICAgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogICBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogICBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuICogICBTT0ZUV0FSRS5cbiAqXG4gKiAgIEBhdXRob3IgOiBOYXRoYW5hZWwgQnJhdW5cbiAqICAgQGNvbnRhY3QgOiBuOHR6LmpzQGdtYWlsLmNvbVxuICovXG5cbmNvbnN0IGlzID0gcmVxdWlyZSgnaXMnKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHdhbGtuU2V0KCBvYmosIHBhdGgsIHZhbHVlLCBzdGFjayApIHtcblx0aWYgKCBpcy5zdHJpbmcocGF0aCkgKVxuXHRcdHBhdGggPSBwYXRoLnNwbGl0KCcuJyk7XG5cdGlmICggIXBhdGgubGVuZ3RoIClcblx0XHRyZXR1cm4gZmFsc2U7XG5cdGVsc2UgaWYgKCBwYXRoLmxlbmd0aCA9PSAxIClcblx0XHRyZXR1cm4gb2JqW3BhdGhbMF1dID0gc3RhY2tcblx0XHQgICAgICAgICAgICAgICAgICAgICAgPyBbLi4uKG9ialtwYXRoWzBdXSB8fCBbXSksIHZhbHVlXVxuXHRcdCAgICAgICAgICAgICAgICAgICAgICA6IHZhbHVlO1xuXHRlbHNlXG5cdFx0cmV0dXJuIHdhbGtuU2V0KFxuXHRcdFx0b2JqW3BhdGhbMF1dID1cblx0XHRcdFx0b2JqW3BhdGhbMF1dIHx8IHt9LFxuXHRcdFx0cGF0aC5zbGljZSgxKSxcblx0XHRcdHZhbHVlLCBzdGFja1xuXHRcdCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB3YWxrbkdldCggb2JqLCBwYXRoLCBpc0tleSApIHtcblx0aWYgKCBpcy5zdHJpbmcocGF0aCkgKVxuXHRcdHBhdGggPSBwYXRoLnNwbGl0KCcuJyk7XG5cdHJldHVybiBwYXRoLmxlbmd0aFxuXHQgICAgICAgPyBvYmpbcGF0aFswXV0gJiYgd2Fsa25HZXQob2JqW3BhdGhbMF1dLCBwYXRoLnNsaWNlKDEpKVxuXHQgICAgICAgOiBvYmo7XG59XG5cbi8vQHRvZG9cbmV4cG9ydCBmdW5jdGlvbiBrZXlXYWxrblNldCggb2JqLCBwYXRoLCB2YWx1ZSwgc3RhY2sgKSB7XG5cdGlmICggaXMuc3RyaW5nKHBhdGgpIClcblx0XHRwYXRoID0gcGF0aC5zcGxpdCgvKFxcPnxcXC8pL2lnKS5maWx0ZXIodiA9PiAodiAhPT0gJz4nICYmIHYpKTtcblx0cmV0dXJuIHdhbGtuU2V0KG9iaiwgcGF0aCwgdmFsdWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24ga2V5V2Fsa25HZXQoIG9iaiwgcGF0aCwgaXNLZXkgKSB7XG5cdGlmICggaXMuc3RyaW5nKHBhdGgpIClcblx0XHRwYXRoID0gcGF0aC5zcGxpdCgvKFxcPnxcXC8pL2lnKS5maWx0ZXIodiA9PiAodiAhPT0gJz4nICYmIHYpKTtcblx0cmV0dXJuIHBhdGgubGVuZ3RoXG5cdCAgICAgICA/IG9ialtwYXRoWzBdXSAmJiB3YWxrbkdldChvYmpbcGF0aFswXV0sIHBhdGguc2xpY2UoMSkpXG5cdCAgICAgICA6IG9iajtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbHMvdXRpbHMuanMiLCIvKlxuICogICBUaGUgTUlUIExpY2Vuc2UgKE1JVClcbiAqICAgQ29weXJpZ2h0IChjKSAyMDE5LiBXaXNlIFdpbGQgV2ViXG4gKlxuICogICBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiAgIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqICAgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogICB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiAgIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogICBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqICAgVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG4gKiAgIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogICBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiAgIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogICBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqICAgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogICBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogICBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuICogICBTT0ZUV0FSRS5cbiAqXG4gKiAgIEBhdXRob3IgOiBOYXRoYW5hZWwgQnJhdW5cbiAqICAgQGNvbnRhY3QgOiBuOHR6LmpzQGdtYWlsLmNvbVxuICovXG5cbmNvbnN0IGlzICAgICAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlKCdpcycpLFxuICAgICAgU2NvcGUgICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vU2NvcGUnKSxcbiAgICAgIHsga2V5V2Fsa25TZXQsIGtleVdhbGtuR2V0IH0gPSByZXF1aXJlKCcuL3V0aWxzL3V0aWxzJyksXG4gICAgICBFdmVudEVtaXR0ZXIgICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi91dGlscy9FbWl0dGVyJyksXG4gICAgICBUYXNrU2VxdWVuY2VyICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi91dGlscy9UYXNrU2VxdWVuY2VyJyksXG4gICAgICBzaG9ydGlkICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnc2hvcnRpZCcpLFxuICAgICAgb2JqUHJvdG8gICAgICAgICAgICAgICAgICAgICA9IE9iamVjdC5nZXRQcm90b3R5cGVPZih7fSk7XG5cbmNsYXNzIFN0b3JlIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcblx0Ly9zdGF0aWMgdXNlICAgICAgICAgICAgICAgICAgPSBbXTsvLyBvdmVycmlkYWJsZSBsaXN0IG9mIHNvdXJjZSBzdG9yZXNcblx0c3RhdGljIGZvbGxvdzsvLyBvdmVycmlkYWJsZSBsaXN0IG9mIHN0b3JlIHRoYXQgd2lsbCBhbGxvdyBwdXNoIGlmIHVwZGF0ZWRcblx0c3RhdGljIHJlcXVpcmU7XG5cdHN0YXRpYyBzdGF0aWNTY29wZSAgID0gbmV3IFNjb3BlKHt9LCB7IGlkOiBcInN0YXRpY1wiIH0pO1xuXHRzdGF0aWMgc3RhdGUgICAgICAgICA9IHVuZGVmaW5lZDsvLyBkZWZhdWx0IHN0YXRlXG5cdC8qKlxuXHQgKiBpZiByZXRhaW4gZ29lcyB0byAwIDpcblx0ICogZmFsc2UgdG8gbm90IGRlc3Ryb3ksXG5cdCAqIDAgdG8gc3luYyBhdXRvIGRlc3Ryb3lcblx0ICogTXMgdG8gYXV0b2Rlc3Ryb3kgYWZ0ZXIgdG0gbXMgaWYgbm8gcmV0YWluIGhhcyBiZWVuIGNhbGxlZFxuXHQgKiBAdHlwZSB7Ym9vbGVhbnxJbnR9XG5cdCAqL1xuXHRzdGF0aWMgcGVyc2lzdGVuY2VUbSA9IGZhbHNlO1xuXHRcblx0LyoqXG5cdCAqIENvbnN0cnVjdG9yLCB3aWxsIGJ1aWxkIGEgcmVzY29wZSBzdG9yZVxuXHQgKlxuXHQgKiAoc2NvcGUsIHtyZXF1aXJlLHVzZSxhcHBseSxzdGF0ZSwgZGF0YX0pXG5cdCAqIChzY29wZSlcblx0ICpcblx0ICogQHBhcmFtIHNjb3BlIHtvYmplY3R9IHNjb3BlIHdoZXJlIHRvIGZpbmQgdGhlIG90aGVyIHN0b3JlcyAoZGVmYXVsdCA6IHN0YXRpY1xuXHQgKiAgICAgc3RhdGljU2NvcGUgKVxuXHQgKiBAcGFyYW0ga2V5cyB7QXJyYXl9IChwYXNzZWQgdG8gU3RvcmU6Om1hcCkgRXggOiBbXCJzZXNzaW9uXCIsIFwib3RoZXJOYW1lZFN0b3JlOmtleVwiLFxuXHQgKiAgICAgb3RoZXJTdG9yZS5hcyhcIm90aGVyS2V5XCIpXVxuXHQgKi9cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0XHRsZXQgYXJneiAgICAgICAgID0gWy4uLmFyZ3VtZW50c10sXG5cdFx0ICAgIF9zdGF0aWMgICAgICA9IHRoaXMuY29uc3RydWN0b3IsXG5cdFx0ICAgIHNjb3BlICAgICAgICA9IGFyZ3pbMF0gaW5zdGFuY2VvZiBTY29wZVxuXHRcdCAgICAgICAgICAgICAgICAgICA/IGFyZ3ouc2hpZnQoKVxuXHRcdCAgICAgICAgICAgICAgICAgICA6IF9zdGF0aWMuc2NvcGUgPyBTY29wZS5nZXRTY29wZShfc3RhdGljLnNjb3BlKVxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBpcy5zdHJpbmcoYXJnelswXSlcblx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBTY29wZS5nZXRTY29wZShhcmd6LnNoaWZ0KCkpXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3N0YXRpYy5zdGF0aWNTY29wZSxcblx0XHQgICAgY2ZnICAgICAgICAgID0gYXJnelswXSAmJiAhaXMuYXJyYXkoYXJnelswXSkgJiYgIWlzLnN0cmluZyhhcmd6WzBdKVxuXHRcdCAgICAgICAgICAgICAgICAgICA/IGFyZ3ouc2hpZnQoKVxuXHRcdCAgICAgICAgICAgICAgICAgICA6IHt9LFxuXHRcdCAgICB0YXNrUXVldWUgICAgPSBpcy5hcnJheShhcmd6WzBdKSA/IGFyZ3ouc2hpZnQoKSA6IG51bGwsXG5cdFx0ICAgIG5hbWUgICAgICAgICA9IGNmZy5uYW1lIHx8IF9zdGF0aWMubmFtZSxcblx0XHQgICAgd2F0Y2hzICAgICAgID0gY2ZnLnVzZSB8fCBbXSxcblx0XHQgICAgYXBwbHkgICAgICAgID0gY2ZnLmFwcGx5IHx8IG51bGwsXG5cdFx0ICAgIGluaXRpYWxTdGF0ZSA9IF9zdGF0aWMuc3RhdGUgfHwgX3N0YXRpYy5pbml0aWFsU3RhdGUgfHwgX3N0YXRpYy5kZWZhdWx0U3RhdGU7XG5cdFx0XG5cdFx0dGhpcy5fdWlkID0gY2ZnLl91aWQgfHwgc2hvcnRpZC5nZW5lcmF0ZSgpO1xuXHRcdFxuXHRcdHRoaXMuX19yZXRhaW5zICAgID0geyBhbGw6IDAgfTtcblx0XHR0aGlzLl9fbG9ja3MgICAgICA9IHsgYWxsOiAwIH07XG5cdFx0dGhpcy5fb25TdGFiaWxpemUgPSBbXTtcblx0XHRcblx0XHQvLyBhdXRvRGVzdHJveVRtXG5cdFx0dGhpcy5fYXV0b0Rlc3Ryb3kgICA9ICEhdGhpcy5fcGVyc2lzdGVuY2VUbTtcblx0XHR0aGlzLl9wZXJzaXN0ZW5jZVRtID0gY2ZnLnBlcnNpc3RlbmNlVG0gfHwgX3N0YXRpYy5wZXJzaXN0ZW5jZVRtIHx8IChjZmcuYXV0b0Rlc3Ryb3kgfHwgX3N0YXRpYy5hdXRvRGVzdHJveSkgJiYgNTtcblx0XHR0aGlzLl9jZmcgICAgICAgICAgID0gY2ZnO1xuXHRcdFxuXHRcdGlmICggY2ZnICYmIGNmZy5vbiApIHtcblx0XHRcdHRoaXMub24oY2ZnLm9uKTtcblx0XHR9XG5cdFx0XG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0XHRcblx0XHRpZiAoIHNjb3BlLnN0b3JlcyApIHtcblx0XHRcdHRoaXMuc2NvcGVPYmogPSBzY29wZTtcblx0XHRcdHRoaXMuc2NvcGUgICAgPSBzY29wZS5zdG9yZXM7XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0dGhpcy5zY29wZU9iaiA9IG5ldyBTY29wZShzY29wZSk7XG5cdFx0XHR0aGlzLnNjb3BlICAgID0gc2NvcGUuc3RvcmVzO1xuXHRcdH1cblx0XHRcblx0XHQvLyBzdGFuZGFyZGl6ZWQgc2NvcGUgYWNjZXNzXG5cdFx0dGhpcy4kc2NvcGUgICAgPSB0aGlzLnNjb3BlT2JqO1xuXHRcdHRoaXMuJHN0b3JlcyAgID0gdGhpcy5zY29wZU9iai5zdG9yZXM7XG5cdFx0dGhpcy4kYWN0aW9ucyAgPSB0aGlzLnNjb3BlT2JqLmFjdGlvbnM7XG5cdFx0dGhpcy4kZGlzcGF0Y2ggPSB0aGlzLnNjb3BlT2JqLmRpc3BhdGNoLmJpbmQodGhpcy5zY29wZU9iaik7XG5cdFx0XG5cdFx0dGhpcy5fcmV2ICAgICA9IHRoaXMuY29uc3RydWN0b3IuX3JldiB8fCAwO1xuXHRcdHRoaXMuX3JldnMgICAgPSB7fTtcblx0XHR0aGlzLnN0b3JlcyAgID0ge307XG5cdFx0dGhpcy5fcmVxdWlyZSA9IFtdO1xuXHRcdHRoaXMuX3NvdXJjZXMgPSBbbmFtZV07XG5cdFx0XG5cdFx0Ly8gcmVnaXN0ZXIgc291cmNlIHN0b3Jlc1xuXHRcdGlmICggaXMuYXJyYXkoX3N0YXRpYy51c2UpICkge1xuXHRcdFx0dGhpcy5fdXNlID0gWy4uLndhdGNocywgLi4uKF9zdGF0aWMudXNlIHx8IFtdKS5tYXAoXG5cdFx0XHRcdGtleSA9PiB7XG5cdFx0XHRcdFx0bGV0IHJlZiA9IGtleS5tYXRjaCgvXihcXCE/KShbXlxcOl0qKSg/OlxcOiguKikpPyQvKTtcblx0XHRcdFx0XHRpZiAoIHJlZlsxXSApIHtcblx0XHRcdFx0XHRcdGxldCByZWYyID0gcmVmWzJdLnNwbGl0KCcuJyk7XG5cdFx0XHRcdFx0XHR0aGlzLl9yZXF1aXJlLnB1c2gocmVmWzNdIHx8IHJlZjJbcmVmMi5sZW5ndGggLSAxXSk7Ly8gcmVxdWlyZSBjaGVjayB2YWx1ZSBvZiB0aGUgYWxpYXNlZFxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaW1wb3J0ZWQgdmFsdWVcblx0XHRcdFx0XHRcdHJldHVybiBrZXkuc3Vic3RyKDEpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm4ga2V5O1xuXHRcdFx0XHR9XG5cdFx0XHQpXTtcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHR0aGlzLl91c2UgPSBbLi4ud2F0Y2hzLCAuLi4oXG5cdFx0XHRcdF9zdGF0aWMudXNlID8gT2JqZWN0LmtleXMoX3N0YXRpYy51c2UpXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgLm1hcChcblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgIGtleSA9PiB7XG5cdFx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgIGxldCByZWYgPSBrZXkubWF0Y2goL14oXFwhPykoLiopJC8pO1xuXHRcdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICByZWZbMV0gJiYgdGhpcy5fcmVxdWlyZS5wdXNoKF9zdGF0aWMudXNlW2tleV0pO1xuXHRcdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVmWzJdICsgKChfc3RhdGljLnVzZVtrZXldID09PSB0cnVlKVxuXHRcdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJydcblx0XHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICc6JyArIF9zdGF0aWMudXNlW2tleV0pO1xuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgfVxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICkgOiBbXVxuXHRcdFx0KV07XG5cdFx0fVxuXHRcdFxuXHRcdGlmICggX3N0YXRpYy5yZXF1aXJlIClcblx0XHRcdHRoaXMuX3JlcXVpcmUucHVzaCguLi5fc3RhdGljLnJlcXVpcmUpO1xuXHRcdGlmICggY2ZnLnJlcXVpcmUgKVxuXHRcdFx0dGhpcy5fcmVxdWlyZS5wdXNoKC4uLmNmZy5yZXF1aXJlKTtcblx0XHRcblx0XHR0aGlzLl9mb2xsb3dlcnMgPSBbXTtcblx0XHR0aGlzLl9jaGFuZ2VzU1cgPSBpbml0aWFsU3RhdGUgfHwge307XG5cdFx0dGhpcy5zdGF0ZSAgICAgID0gaW5pdGlhbFN0YXRlICYmIHt9O1xuXHRcdFxuXHRcdGlmICggYXBwbHkgKVxuXHRcdFx0dGhpcy5hcHBseSA9IGFwcGx5O1xuXHRcdFxuXHRcdC8qKlxuXHRcdCAqIEluaXRpYWwgc3RhdGUgaXNuJ3QgZnVsbHkgaW5pdGlhbGl6ZWQgKCBjaGlsZHMgY29uc3RydWN0b3JzIGNhbiBzZXQgaXQgKVxuXHRcdCAqIFNjb3BlIGJhc2VkIGluc3RhbmNlIGhhdmUgdGFza1F1ZXVlIHRvIGRlbGF5IGluaXQgc3luY2hyb25vdXNseSwgaWYgbm90XG5cdFx0ICogcHJlc2VudCB3ZSB1c2Ugc2V0VGltZW91dFxuXHRcdCAqL1xuXHRcdGlmICggdGFza1F1ZXVlICkge1xuXHRcdFx0dGFza1F1ZXVlLnB1c2godGhpcy5fYWZ0ZXJDb25zdHJ1Y3Rvci5iaW5kKHRoaXMpKVxuXHRcdH1cblx0XHRlbHNlXG5cdFx0XHRzZXRUaW1lb3V0KHRoaXMuX2FmdGVyQ29uc3RydWN0b3IuYmluZCh0aGlzKSlcblx0fVxuXHRcblx0LyoqXG5cdCAqIEdldCB0aGUgaW5jb21pbmcgc3RhdGUgKCBmb3IgaW1tZWRpYXRlIHN0YXRlIHJlbGF0aXZlIGFjdGlvbnMgKVxuXHQgKiBAcmV0dXJucyB7e318Kn1cblx0ICovXG5cdGdldCBuZXh0U3RhdGUoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX25leHRTdGF0ZSB8fCB0aGlzLnN0YXRlO1xuXHR9XG5cdFxuXHRfYWZ0ZXJDb25zdHJ1Y3RvcigpIHtcblx0XHRsZXQgY2ZnICAgICAgICAgID0gdGhpcy5fY2ZnLFxuXHRcdCAgICBfc3RhdGljICAgICAgPSB0aGlzLmNvbnN0cnVjdG9yLFxuXHRcdCAgICBzbmFwc2hvdCAgICAgPSB0aGlzLnJlc3RvcmUodW5kZWZpbmVkLCB0cnVlKSxcblx0XHQgICAgaW5pdGlhbFN0YXRlID0gdGhpcy5zdGF0ZSxcblx0XHQgICAgaW5pdGlhbERhdGEgID0gdGhpcy5kYXRhLFxuXHRcdCAgICBhcHBsaWVkO1xuXHRcdHtcblx0XHRcdFxuXHRcdFx0aWYgKCBpbml0aWFsRGF0YSApXG5cdFx0XHRcdHRoaXMuZGF0YSA9IGluaXRpYWxEYXRhO1xuXHRcdFx0ZWxzZSBpZiAoIF9zdGF0aWMuZGF0YSAhPT0gdW5kZWZpbmVkIClcblx0XHRcdFx0dGhpcy5kYXRhID0geyAuLi5fc3RhdGljLmRhdGEgfTtcblx0XHRcdGVsc2UgaWYgKCBjZmcuaGFzT3duUHJvcGVydHkoXCJkYXRhXCIpIClcblx0XHRcdFx0dGhpcy5kYXRhID0gY2ZnLmRhdGE7XG5cdFx0XHRcblx0XHRcdGlmICggY2ZnLmhhc093blByb3BlcnR5KFwic3RhdGVcIikgJiYgY2ZnLnN0YXRlICE9PSB1bmRlZmluZWQgKVxuXHRcdFx0XHRpbml0aWFsU3RhdGUgPSB7IC4uLmluaXRpYWxTdGF0ZSwgLi4uY2ZnLnN0YXRlIH07XG5cdFx0XHRcblx0XHRcdGlmICggdGhpcy5kYXRhID09PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRcdGlmICggaW5pdGlhbFN0YXRlIHx8IHRoaXMuX3VzZS5sZW5ndGggKSB7Ly8gc3luYyBhcHBseVxuXHRcdFx0XHRcdHRoaXMuX25leHRTdGF0ZSA9IHRoaXMuX2NoYW5nZXNTVyA9IHtcblx0XHRcdFx0XHRcdC4uLnRoaXMuX2NoYW5nZXNTVyxcblx0XHRcdFx0XHRcdC4uLihpbml0aWFsU3RhdGUgfHwge30pLFxuXHRcdFx0XHRcdFx0Li4udGhpcy4kc2NvcGUubWFwKHRoaXMsIHRoaXMuX3VzZSlcblx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgICAgICA9IHt9O1xuXHRcdFx0XHRcdGlmICggdGhpcy5zaG91bGRBcHBseSh0aGlzLl9uZXh0U3RhdGUpICYmIHRoaXMuZGF0YSA9PT0gdW5kZWZpbmVkICkge1xuXHRcdFx0XHRcdFx0dGhpcy5kYXRhICAgICAgID0gdGhpcy5hcHBseSh0aGlzLmRhdGEsIHRoaXMuX25leHRTdGF0ZSwgdGhpcy5fY2hhbmdlc1NXKTtcblx0XHRcdFx0XHRcdGFwcGxpZWQgICAgICAgICA9IHRydWU7XG5cdFx0XHRcdFx0XHR0aGlzLnN0YXRlICAgICAgPSB0aGlzLl9jaGFuZ2VzU1c7XG5cdFx0XHRcdFx0XHR0aGlzLl9uZXh0U3RhdGUgPSB0aGlzLl9jaGFuZ2VzU1cgPSBudWxsO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdGFwcGxpZWQgICAgICAgICA9IHRydWU7XG5cdFx0XHRcdHRoaXMuc3RhdGUgICAgICA9IHsvLyBhc3N1bWUgdGhpcyBzdGF0ZSBpcyBzeW5jIHdpdGggaW5pdGlhbCBkYXRhXG5cdFx0XHRcdFx0Li4udGhpcy5fY2hhbmdlc1NXLFxuXHRcdFx0XHRcdC4uLihpbml0aWFsU3RhdGUgfHwge30pLFxuXHRcdFx0XHRcdC4uLnRoaXMuJHNjb3BlLm1hcCh0aGlzLCB0aGlzLl91c2UpXG5cdFx0XHRcdH07XG5cdFx0XHRcdHRoaXMuX25leHRTdGF0ZSA9IHRoaXMuX2NoYW5nZXNTVyA9IG51bGw7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmICggKHRoaXMuZGF0YSAhPT0gdW5kZWZpbmVkIHx8IGFwcGxpZWQpICYmICF0aGlzLl9fbG9ja3MuYWxsICkge1xuXHRcdFx0dGhpcy5fc3RhYmxlID0gdHJ1ZTtcblx0XHRcdHRoaXMuX3JldisrO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdHRoaXMuX3N0YWJsZSA9IGZhbHNlO1xuXHRcdFx0aWYgKCAhX3N0YXRpYy5tYW5hZ2VkICYmICF0aGlzLnN0YXRlICYmICghdGhpcy5fdXNlIHx8ICF0aGlzLl91c2UubGVuZ3RoKSApIHtcblx0XHRcdFx0Y29uc29sZS53YXJuKFwiUmVTY29wZSBzdG9yZSAnXCIsIHRoaXMubmFtZSwgXCInIGhhdmUgbm8gaW5pdGlhbCBkYXRhLCBzdGF0ZSBvciB1c2UuIEl0IGNhbid0IHN0YWJpbGl6ZS4uLlwiKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0IXRoaXMuX3N0YWJsZSAmJiB0aGlzLmVtaXQoJ3Vuc3RhYmxlJywgdGhpcy5zdGF0ZSk7XG5cdFx0XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBPdmVycmlkYWJsZSBtZXRob2QgdG8ga25vdyBpZiBhIGRhdGEgY2hhbmdlIHNob3VsZCBiZSBwcm9wYWcgdG8gdGhlIGxpc3RlbmluZ1xuXHQgKiBzdG9yZXMgJiBjb21wb25lbnRzXG5cdCAqL1xuXHRzaG91bGRQcm9wYWcoIG5EYXRhcyApIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXHRcblx0LyoqXG5cdCAqIE92ZXJyaWRhYmxlIG1ldGhvZCB0byBjaG9vc2UgaWYgdGhpcyBzdG9yZSBzaG91bGQgYmUgc2VyaWFsaXplZCxcblx0ICogSWYgbm90IGl0IHdpbGwgYmUgYXBwbGllZCBub3JtYWxseSB3aGVuIHJlc3RvcmluZ1xuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cblx0ICovXG5cdHNob3VsZFNlcmlhbGl6ZSgpIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXHRcblx0aGFzRGF0YUNoYW5nZSggbkRhdGFzICkge1xuXHRcdGxldCBfc3RhdGljID0gdGhpcy5jb25zdHJ1Y3Rvciwgcixcblx0XHQgICAgY0RhdGFzICA9IHRoaXMuZGF0YTtcblx0XHRyICAgICAgICAgICA9ICFjRGF0YXMgJiYgbkRhdGFzIHx8IGNEYXRhcyAhPT0gbkRhdGFzO1xuXHRcdCFyICYmIGNEYXRhcyAmJiBPYmplY3Qua2V5cyhjRGF0YXMpLmZvckVhY2goXG5cdFx0XHQoIGtleSApID0+IHtcblx0XHRcdFx0ciA9IHIgfHwgKG5EYXRhc1xuXHRcdFx0XHQgICAgICAgICAgPyBjRGF0YXNba2V5XSAhPT0gbkRhdGFzW2tleV1cblx0XHRcdFx0ICAgICAgICAgIDogY0RhdGFzICYmIGNEYXRhc1trZXldKVxuXHRcdFx0fVxuXHRcdCk7XG5cdFx0IXIgJiYgbkRhdGFzICYmIE9iamVjdC5rZXlzKG5EYXRhcykuZm9yRWFjaChcblx0XHRcdCgga2V5ICkgPT4ge1xuXHRcdFx0XHRyID0gciB8fCAobkRhdGFzXG5cdFx0XHRcdCAgICAgICAgICA/IGNEYXRhc1trZXldICE9PSBuRGF0YXNba2V5XVxuXHRcdFx0XHQgICAgICAgICAgOiBjRGF0YXMgJiYgY0RhdGFzW2tleV0pXG5cdFx0XHR9XG5cdFx0KTtcblx0XHRyZXR1cm4gcjtcblx0fVxuXHRcblx0LyoqXG5cdCAqIE92ZXJyaWRhYmxlIG1ldGhvZCB0byBrbm93IGlmIGEgc3RhdGUgY2hhbmdlIHNob3VsZCBiZSBhcHBsaWVkXG5cdCAqL1xuXHRzaG91bGRBcHBseSggc3RhdGUgPSB0aGlzLnN0YXRlICkge1xuXHRcdGxldCBfc3RhdGljID0gdGhpcy5jb25zdHJ1Y3Rvcjtcblx0XHRcblx0XHRyZXR1cm4gKFxuXHRcdFx0ISF0aGlzLmlzQ29tcGxldGUoc3RhdGUpXG5cdFx0KSAmJiAoaXMuYXJyYXkoX3N0YXRpYy5mb2xsb3cpXG5cdFx0ICAgICAgPyBfc3RhdGljLmZvbGxvd1xuXHRcdCAgICAgICAgICAgICAgIC5yZWR1Y2UoKCByLCBpICkgPT4gKHIgfHwgc3RhdGUgJiYgc3RhdGVbaV0pLCBmYWxzZSlcblx0XHQgICAgICA6IF9zdGF0aWMuZm9sbG93XG5cdFx0ICAgICAgICA/IE9iamVjdC5rZXlzKF9zdGF0aWMuZm9sbG93KVxuXHRcdCAgICAgICAgICAgICAgICAucmVkdWNlKCggciwgaSApID0+IChcblx0XHRcdCAgICAgICAgICAgICAgICByXG5cdFx0XHQgICAgICAgICAgICAgICAgfHwgc3RhdGUgJiYgaXMuZm4oX3N0YXRpYy5mb2xsb3dbaV0pICYmIF9zdGF0aWMuZm9sbG93W2ldLmNhbGwodGhpcywgc3RhdGVbaV0pXG5cdFx0XHQgICAgICAgICAgICAgICAgfHwgX3N0YXRpYy5mb2xsb3dbaV0gJiYgc3RhdGVbaV0gIT09IHRoaXMuc3RhdGVbaV1cblx0XHQgICAgICAgICAgICAgICAgKSwgZmFsc2UpIDogdHJ1ZVxuXHRcdCk7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBPdmVycmlkYWJsZSBhcHBsaWVyIC8gcmVtYXBwZXJcblx0ICogSWYgc3RhdGUgb3IgbGFzdFB1YmxpY1N0YXRlIGFyZSBzaW1wbGUgaGFzaCBtYXBzIGFwcGx5IHdpbGwgcmV0dXJuIHsuLi5kYXRhLFxuXHQgKiAuLi5zdGF0ZX0gaWYgbm90IGl0IHdpbGwgcmV0dXJuIHRoZSBsYXN0IHByaXZhdGUgc3RhdGVcblx0ICogQHBhcmFtIGRhdGFcblx0ICogQHBhcmFtIHN0YXRlXG5cdCAqIEByZXR1cm5zIHsqfVxuXHQgKi9cblx0YXBwbHkoIGRhdGEsIHN0YXRlLCBjaGFuZ2VzICkge1xuXHRcdHJldHVybiBzdGF0ZTtcblx0fVxuXHRcblx0LyoqXG5cdCAqIERlYm91bmNlIHRoaXMgc3RvcmUgcHJvcGFnYXRpb24gKCAmIHJlZHVjaW5nIClcblx0ICogQHBhcmFtIGNiXG5cdCAqL1xuXHRzdGFiaWxpemUoIGNiICkge1xuXHRcdGNiICYmIHRoaXMub25jZSgnc3RhYmxlJywgY2IpO1xuXHRcdHRoaXMuX3N0YWJsZSAmJiB0aGlzLmVtaXQoJ3Vuc3RhYmxlJywgdGhpcy5zdGF0ZSwgdGhpcy5kYXRhKTtcblx0XHRcblx0XHR0aGlzLl9zdGFibGUgPSBmYWxzZTtcblx0XHRcblx0XHRpZiAoIHRoaXMuX3N0YWJpbGl6ZXIgKVxuXHRcdFx0cmV0dXJuO1xuXHRcdFxuXHRcdHRoaXMuX3N0YWJpbGl6ZXIgPSBUYXNrU2VxdWVuY2VyLnB1c2hUYXNrKHRoaXMsICdwdXNoU3RhdGUnKTtcblx0fVxuXHRcblx0LyoqXG5cdCAqIFdhbGsgbiBnZXRcblx0ICogQHBhcmFtIHBhdGhcblx0ICogQHBhcmFtIGlcblx0ICogQHBhcmFtIG9ialxuXHQgKiBAcmV0dXJucyB7Knx7fX1cblx0ICovXG5cdHJldHJpZXZlKCBwYXRoLCBpID0gMCwgb2JqID0gdGhpcy5kYXRhICkge1xuXHRcdHBhdGggPSBpcy5zdHJpbmcocGF0aCkgPyBwYXRoLnNwbGl0KCcuJykgOiBwYXRoO1xuXHRcdHJldHVybiAhb2JqIHx8ICFwYXRoIHx8ICFwYXRoLmxlbmd0aFxuXHRcdCAgICAgICA/IG9ialxuXHRcdCAgICAgICA6IHBhdGgubGVuZ3RoID09IGkgKyAxXG5cdFx0ICAgICAgICAgPyBvYmpbcGF0aFtpXV1cblx0XHQgICAgICAgICA6IHRoaXMucmV0cmlldmUocGF0aCwgaSArIDEsIG9ialtwYXRoW2ldXSk7XG5cdH1cblx0XG5cdGRpc3BhdGNoKCBhY3Rpb24sIC4uLmFyZ3ogKSB7XG5cdFx0dGhpcy5zY29wZU9iai5kaXNwYXRjaChhY3Rpb24sIC4uLmFyZ3opO1xuXHR9XG5cdFxuXHR0cmlnZ2VyKCBhY3Rpb24sIC4uLmFyZ3ogKSB7XG5cdFx0bGV0IHsgYWN0aW9ucyB9ID0gdGhpcy5jb25zdHJ1Y3Rvcjtcblx0XHRpZiAoIGFjdGlvbnMgJiYgYWN0aW9uc1thY3Rpb25dICkge1xuXHRcdFx0bGV0IG5zID0gYWN0aW9uc1thY3Rpb25dLmNhbGwodGhpcywgLi4uYXJneik7XG5cdFx0XHRpZiAoIGlzLmZ1bmN0aW9uKG5zKSApXG5cdFx0XHRcdG5zID0gbnModGhpcy5uZXh0U3RhdGUpO1xuXHRcdFx0bnMgJiYgdGhpcy5zZXRTdGF0ZShucyk7XG5cdFx0fVxuXHR9XG5cdFxuXHQvKipcblx0ICogU2V0ICYgUHVzaCB0aGUgcmVzdWx0IGRhdGEgdG8gZm9sbG93ZXJzIGlmIHN0YWJsZVxuXHQgKiBAcGFyYW0gY2Jcblx0ICovXG5cdHB1c2goIGRhdGEsIGZvcmNlLCBjYiApIHtcblx0XHRjYiAgICA9IGZvcmNlID09PSB0cnVlID8gY2IgOiBmb3JjZTtcblx0XHRmb3JjZSA9IGZvcmNlID09PSB0cnVlO1xuXHRcdGlmICggIWZvcmNlICYmXG5cdFx0XHQoXG5cdFx0XHRcdCF0aGlzLmhhc0RhdGFDaGFuZ2UoZGF0YSlcblx0XHRcdClcblx0XHQpIHtcblx0XHRcdGNiICYmIGNiKCk7XG5cdFx0XHRpZiAoICF0aGlzLl9fbG9ja3MuYWxsICkge1xuXHRcdFx0XHRsZXQgc3RhYmxlICAgPSB0aGlzLl9zdGFibGU7XG5cdFx0XHRcdHRoaXMuX3N0YWJsZSA9IHRydWU7XG5cdFx0XHRcdCFzdGFibGUgJiYgdGhpcy5lbWl0KCdzdGFibGUnLCB0aGlzLnN0YXRlLCB0aGlzLmRhdGEpO1xuXHRcdFx0XHR0aGlzLl9zdGFiaWxpemVyID0gbnVsbDtcblx0XHRcdH1cblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0XG5cdFx0dGhpcy5kYXRhID0gZGF0YTtcblx0XHR0aGlzLndhaXQoKTtcblx0XHR0aGlzLnJlbGVhc2UoY2IpO1xuXHRcdFxuXHR9XG5cdFxuXHQvKipcblx0ICogQ2FsbCB0aGUgYXBwbHkgZm4gdXNpbmcgdGhlIGN1cnJlbnQgYWNjdW11bGF0ZWQgc3RhdGUgdXBkYXRlIHRoZW4sIHB1c2ggdGhlXG5cdCAqIHJlc3VsdGluZyBkYXRhIGlmIHN0YWJsZVxuXHQgKiBAcGFyYW0gZm9yY2VkU3RhdGVcblx0ICovXG5cdHB1c2hTdGF0ZSggZm9yY2VkU3RhdGUgKSB7XG5cdFx0aWYgKCAhZm9yY2VkU3RhdGUgJiYgIXRoaXMuX2NoYW5nZXNTVyAmJiB0aGlzLmRhdGEgKVxuXHRcdFx0cmV0dXJuO1xuXHRcdFxuXHRcdGxldCBuZXh0U3RhdGUgPSBmb3JjZWRTdGF0ZSB8fCB0aGlzLl9uZXh0U3RhdGUgfHwgdGhpcy5zdGF0ZSxcblx0XHQgICAgbmV4dERhdGE7XG5cdFx0T2JqZWN0LmtleXMobmV4dFN0YXRlKS5mb3JFYWNoKFxuXHRcdFx0a2V5ID0+IChuZXh0U3RhdGVba2V5XSA9PT0gdW5kZWZpbmVkICYmIChkZWxldGUgbmV4dFN0YXRlW2tleV0pKVxuXHRcdCk7XG5cdFx0bmV4dERhdGEgPSB0aGlzLmFwcGx5KHRoaXMuZGF0YSwgbmV4dFN0YXRlLCB0aGlzLl9jaGFuZ2VzU1cpO1xuXHRcdFxuXHRcdHRoaXMuX3N0YWJpbGl6ZXIgPSBudWxsO1xuXHRcdHRoaXMuc3RhdGUgICAgICAgPSBuZXh0U3RhdGU7XG5cdFx0dGhpcy5fbmV4dFN0YXRlICA9IG51bGw7XG5cdFx0dGhpcy5fY2hhbmdlc1NXICA9IG51bGw7XG5cdFx0XG5cdFx0aWYgKCAhZm9yY2VkU3RhdGUgJiZcblx0XHRcdChcblx0XHRcdFx0IXRoaXMuaGFzRGF0YUNoYW5nZShuZXh0RGF0YSlcblx0XHRcdClcblx0XHQpIHtcblx0XHRcdGlmICggIXRoaXMuX19sb2Nrcy5hbGwgKSB7XG5cdFx0XHRcdGxldCBzdGFibGUgICA9IHRoaXMuX3N0YWJsZTtcblx0XHRcdFx0dGhpcy5fc3RhYmxlID0gdHJ1ZTtcblx0XHRcdFx0IXN0YWJsZSAmJiB0aGlzLmVtaXQoJ3N0YWJsZScsIHRoaXMuc3RhdGUsIHRoaXMuZGF0YSk7XG5cdFx0XHRcdHRoaXMuX3N0YWJpbGl6ZXIgPSBudWxsO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRcblx0XHR0aGlzLmRhdGEgPSBuZXh0RGF0YTtcblx0XHR0aGlzLndhaXQoKTtcblx0XHR0aGlzLnJlbGVhc2UoKTtcblx0fVxuXHRcblx0LyoqXG5cdCAqIEFkZCAncFN0YXRlJyB0byB0aGUgY3VycmVudCBhY2N1bXVsYXRlZCBzdGF0ZSB1cGRhdGVzXG5cdCAqICYgd2FpdCBzb3VyY2Ugc3RvcmVzIHN0YWJpbGl6YXRpb24gYmVmb3JlIHB1c2hpbmcgdGhlc2Ugc3RhdGUgdXBkYXRlc1xuXHQgKiBAcGFyYW0gcFN0YXRlXG5cdCAqIEBwYXJhbSBjYlxuXHQgKi9cblx0c2V0U3RhdGUoIHBTdGF0ZSwgY2IsIHN5bmMgKSB7XG5cdFx0bGV0IGNoYW5nZSxcblx0XHQgICAgY2hhbmdlcyAgID0gdGhpcy5fY2hhbmdlc1NXID0gdGhpcy5fY2hhbmdlc1NXIHx8IHt9LFxuXHRcdCAgICBuZXh0U3RhdGUgPSB0aGlzLl9uZXh0U3RhdGUgPSB0aGlzLl9uZXh0U3RhdGUgfHwgeyAuLi50aGlzLnN0YXRlIH0sXG5cdFx0ICAgIGtleTtcblx0XHRmb3IgKCBrZXkgaW4gcFN0YXRlIClcblx0XHRcdGlmICggIXRoaXMuc3RhdGVcblx0XHRcdFx0fHwgY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eShrZXkpLy8gdG9kb1xuXHRcdFx0XHQmJiAoXG5cdFx0XHRcdFx0cFN0YXRlW2tleV0gIT09IGNoYW5nZXNba2V5XVxuXHRcdFx0XHQpIHx8IHBTdGF0ZS5oYXNPd25Qcm9wZXJ0eShrZXkpXG5cdFx0XHRcdCYmIChcblx0XHRcdFx0XHRwU3RhdGVba2V5XSAhPT0gdGhpcy5zdGF0ZVtrZXldXG5cdFx0XHRcdCkgKSB7XG5cdFx0XHRcdGNoYW5nZSAgICAgICAgID0gdHJ1ZTtcblx0XHRcdFx0bmV4dFN0YXRlW2tleV0gPSBjaGFuZ2VzW2tleV0gPSBwU3RhdGVba2V5XTtcblx0XHRcdH1cblx0XHRcblx0XHRpZiAoICF0aGlzLnNob3VsZEFwcGx5KG5leHRTdGF0ZSkgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdFxuXHRcdGlmICggc3luYyApIHtcblx0XHRcdHRoaXMucHVzaFN0YXRlKCk7XG5cdFx0XHRjYiAmJiBjYigpO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdGlmICggY2hhbmdlICkge1xuXHRcdFx0XHR0aGlzLnN0YWJpbGl6ZShjYik7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIGNiICYmIGNiKCk7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cdFxuXHQvKipcblx0ICogVXBkYXRlIHRoZSBjdXJyZW50IHN0YXRlICYgcHVzaCBpdFxuXHQgKiBAcGFyYW0gcFN0YXRlXG5cdCAqIEBwYXJhbSBjYlxuXHQgKi9cblx0c2V0U3RhdGVTeW5jKCBwU3RhdGUgKSB7XG5cdFx0bGV0IGkgICAgICAgPSAwLCBjaGFuZ2UsXG5cdFx0ICAgIGNoYW5nZXMgPSB0aGlzLl9jaGFuZ2VzU1cgPSB0aGlzLl9jaGFuZ2VzU1cgfHwge307XG5cdFx0Zm9yICggbGV0IGsgaW4gcFN0YXRlIClcblx0XHRcdGlmICggIXRoaXMuc3RhdGUgfHwgcFN0YXRlLmhhc093blByb3BlcnR5KGspXG5cdFx0XHRcdCYmIChcblx0XHRcdFx0XHRwU3RhdGVba10gIT09IHRoaXMuc3RhdGVba11cblx0XHRcdFx0XHQvL3x8XG5cdFx0XHRcdFx0Ly8odGhpcy5zdGF0ZVtrXSAmJiBwU3RhdGVba10gJiYgKHBTdGF0ZVtrXS5fcmV2ICE9IHRoaXMuX3JldnNba10pKS8vIHJldi9oYXNoIHVwZGF0ZVxuXHRcdFx0XHQpICkge1xuXHRcdFx0XHRjaGFuZ2UgICAgICAgID0gdHJ1ZTtcblx0XHRcdFx0dGhpcy5fcmV2c1trXSA9IHBTdGF0ZVtrXSAmJiBwU3RhdGVba10uX3JldiB8fCB0cnVlO1xuXHRcdFx0XHRjaGFuZ2VzW2tdICAgID0gcFN0YXRlW2tdO1xuXHRcdFx0fVxuXHRcdHRoaXMuc2hvdWxkQXBwbHkoeyAuLi4odGhpcy5zdGF0ZSB8fCB7fSksIC4uLmNoYW5nZXMgfSkgJiYgdGhpcy5wdXNoU3RhdGUoKTtcblx0XHRyZXR1cm4gdGhpcy5kYXRhO1xuXHR9XG5cdFxuXHQvKipcblx0ICogZ2V0IGEgc3RvcmUta2V5IHBhaXIgZm9yIFN0b3JlOjptYXBcblx0ICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcblx0ICogQHJldHVybnMge3tzdG9yZTogU3RvcmUsIG5hbWU6ICp9fVxuXHQgKi9cblx0YXMoIG5hbWUgKSB7XG5cdFx0cmV0dXJuIHsgc3RvcmU6IHRoaXMsIG5hbWUgfTtcblx0fVxuXHRcblx0b24oIGxpc3RzICkge1xuXHRcdGlmICggIWlzLnN0cmluZyhsaXN0cykgJiYgbGlzdHMgKVxuXHRcdFx0T2JqZWN0LmtleXMobGlzdHMpLmZvckVhY2goayA9PiBzdXBlci5vbihrLCBsaXN0c1trXSkpO1xuXHRcdGVsc2Ugc3VwZXIub24oLi4uYXJndW1lbnRzKTtcblx0fVxuXHRcblx0cmVtb3ZlTGlzdGVuZXIoIGxpc3RzICkge1xuXHRcdGlmICggIWlzLnN0cmluZyhsaXN0cykgJiYgbGlzdHMgKVxuXHRcdFx0T2JqZWN0LmtleXMobGlzdHMpLmZvckVhY2goayA9PiBzdXBlci5yZW1vdmVMaXN0ZW5lcihrLCBsaXN0c1trXSkpO1xuXHRcdGVsc2Ugc3VwZXIucmVtb3ZlTGlzdGVuZXIoLi4uYXJndW1lbnRzKTtcblx0fVxuXHRcblx0LyoqXG5cdCAqIGlzIGNvbXBsZXRlIChhbGwgcmVxdWllcmVkIGtleXMgYXJlIGhlcmUpXG5cdCAqIEByZXR1cm5zIGJvb2xcblx0ICovXG5cdGlzQ29tcGxldGUoIHN0YXRlID0gdGhpcy5zdGF0ZSApIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0IXRoaXMuX3JlcXVpcmVcblx0XHRcdHx8ICF0aGlzLl9yZXF1aXJlLmxlbmd0aFxuXHRcdFx0fHwgc3RhdGUgJiYgdGhpcy5fcmVxdWlyZS5yZWR1Y2UoXG5cdFx0XHRcdCggciwga2V5ICkgPT4gKHIgJiYgc3RhdGVba2V5XSksXG5cdFx0XHRcdHRydWVcblx0XHRcdClcblx0XHQpO1xuXHR9XG5cdFxuXHQvKipcblx0ICogaXMgc3RhYmxlXG5cdCAqIEByZXR1cm5zIGJvb2xcblx0ICovXG5cdGlzU3RhYmxlKCkge1xuXHRcdHJldHVybiB0aGlzLl9zdGFibGU7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBTZXJpYWxpemUgc3RhdGUgJiBkYXRhIHdpdGggc291cmNlcyByZWZzXG5cdCAqIEByZXR1cm5zIGJvb2xcblx0ICovXG5cdHNlcmlhbGl6ZSggY2ZnID0ge30sIG91dHB1dCA9IHt9ICkge1xuXHRcdFxuXHRcdGxldCBzSWQgICAgICAgID0gY2ZnLnBhcmVudEFsaWFzIHx8IHRoaXMuc2NvcGVPYmouX2lkLFxuXHRcdCAgICByZWZzQ291bnQgID0gMCxcblx0XHQgICAgcmVmcyAgICAgICA9XG5cdFx0XHQgICAgIWNmZy5ub3JlZnMgJiYgaXMuYXJyYXkodGhpcy5fdXNlKSAmJiB0aGlzLl91c2UucmVkdWNlKFxuXHRcdFx0ICAgICggbWFwLCBrZXkgKSA9PiB7XG5cdFx0XHRcdCAgICBsZXQgcmVmICAgPSB0aGlzLiRzY29wZS5wYXJzZVJlZihrZXkpLFxuXHRcdFx0XHQgICAgICAgIHN0b3JlID0gdGhpcy4kc3RvcmVzW3JlZi5zdG9yZUlkXTtcblx0XHRcdFx0ICAgIGlmICggc3RvcmUgJiYgU3RvcmUuaXNTdG9yZShzdG9yZSkgJiYgIXN0b3JlLnNjb3BlT2JqLl8uaXNMb2NhbElkIClcblx0XHRcdFx0XHQgICAgcmVmc0NvdW50KyssIG1hcFtyZWYuYWxpYXNdID0gcmVmLnBhdGg7XG5cdFx0XHRcdFxuXHRcdFx0XHQgICAgcmV0dXJuIG1hcDtcblx0XHRcdCAgICB9LCB7fVxuXHRcdFx0ICAgICksXG5cdFx0ICAgIHN0YXRlICAgICAgPSB0aGlzLnN0YXRlIHx8IHt9LFxuXHRcdCAgICBwZXJzaXN0ZW50ID0gdGhpcy5zaG91bGRTZXJpYWxpemUoKTtcblx0XHRcblx0XHRpZiAoICFwZXJzaXN0ZW50ICkge1xuXHRcdFx0a2V5V2Fsa25TZXQoXG5cdFx0XHRcdG91dHB1dCxcblx0XHRcdFx0KHNJZCArICcvJyArIHRoaXMubmFtZSksXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRkYXRhUmVmczogY2ZnLmRhdGFSZWZzLFxuXHRcdFx0XHRcdHJlZnNcblx0XHRcdFx0fVxuXHRcdFx0KTtcblx0XHRcdHJldHVybiBvdXRwdXQ7XG5cdFx0fVxuXHRcdFxuXHRcdGxldFxuXHRcdFx0c3RhdGVLZXlzICAgPSBPYmplY3Qua2V5cyhzdGF0ZSkgfHwgW10sXG5cdFx0XHRzdGF0ZVJlZnMgICA9IHN0YXRlS2V5cy5tYXAoayA9PiBzdGF0ZVtrXSksXG5cdFx0XHRpblJlZnNDb3VudCA9IDAsXG5cdFx0XHRkYXRhUmVmcyAgICA9IGNmZy5kYXRhUmVmcyB8fCB7fSxcblx0XHRcdGluUmVmcyAgICAgID1cblx0XHRcdFx0IWNmZy5ub3JlZnMgJiYgdGhpcy5kYXRhICYmIChPYmplY3Qua2V5cyh0aGlzLmRhdGEpLnJlZHVjZShcblx0XHRcdFx0KCBtYXAsIGtleSApID0+IHtcblx0XHRcdFx0XHRsZXQgcmVmID0gc3RhdGVSZWZzLmluZGV4T2YodGhpcy5kYXRhW2tleV0pXG5cdFx0XHRcdFx0aWYgKCByZWYgIT0gLTEgKVxuXHRcdFx0XHRcdFx0aW5SZWZzQ291bnQrKywgbWFwW2tleV0gPSBzdGF0ZUtleXNbcmVmXTtcblx0XHRcdFx0XHRyZXR1cm4gbWFwO1xuXHRcdFx0XHR9LCB7fVxuXHRcdFx0XHQpKSxcblx0XHRcdHNuYXAgICAgICAgID0ge1xuXHRcdFx0XHRkYXRhUmVmczogY2ZnLmRhdGFSZWZzLFxuXHRcdFx0XHRzdGF0ZSAgIDogc3RhdGUgJiZcblx0XHRcdFx0XHQoXG5cdFx0XHRcdFx0XHRjZmcubm9yZWZzXG5cdFx0XHRcdFx0XHQ/IHsgLi4uc3RhdGUgfVxuXHRcdFx0XHRcdFx0OiBPYmplY3Qua2V5cyhzdGF0ZSkucmVkdWNlKCggaCwgayApID0+ICghcmVmc1trXSAmJiAoaFtrXSA9IHN0YXRlW2tdKSwgaCksIHt9KVxuXHRcdFx0XHRcdCksXG5cdFx0XHRcdGRhdGEgICAgOiAoXG5cdFx0XHRcdFx0XHR0aGlzLmRhdGEgJiZcblx0XHRcdFx0XHRcdHRoaXMuZGF0YS5fX3Byb3RvX18gPT09IG9ialByb3RvID9cblx0XHRcdFx0XHRcdE9iamVjdFxuXHRcdFx0XHRcdFx0XHQua2V5cyh0aGlzLmRhdGEpXG5cdFx0XHRcdFx0XHRcdC5yZWR1Y2UoXG5cdFx0XHRcdFx0XHRcdFx0KCBoLCBrICkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKCAhaW5SZWZzW2tdICYmICFkYXRhUmVmc1trXSApIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0aFtrXSA9IHRoaXMuZGF0YVtrXTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0aW5SZWZzQ291bnQrKztcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBoXG5cdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHR7fVxuXHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XG5cdFx0XHRcdFx0XHQoaXMuYm9vbCh0aGlzLmRhdGEpXG5cdFx0XHRcdFx0XHRcdHx8IGlzLm51bWJlcih0aGlzLmRhdGEpXG5cdFx0XHRcdFx0XHRcdHx8IGlzLnN0cmluZyh0aGlzLmRhdGEpKSAmJiB0aGlzLmRhdGFcblx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0fHwgdW5kZWZpbmVkXG5cdFx0XHRcdFxuXHRcdFx0fTtcblx0XHRcblx0XHRyZWZzICYmIHJlZnNDb3VudCAmJiAoc25hcC5yZWZzID0gcmVmcyk7XG5cdFx0aW5SZWZzICYmIGluUmVmc0NvdW50ICYmIChcblx0XHRcdHNuYXAuaW5SZWZzID0gaW5SZWZzKTtcblx0XHRcblx0XHRcblx0XHRrZXlXYWxrblNldChcblx0XHRcdG91dHB1dCxcblx0XHRcdChzSWQgKyAnLycgKyB0aGlzLm5hbWUpLFxuXHRcdFx0c25hcFxuXHRcdCk7XG5cdFx0cmV0dXJuIG91dHB1dDtcblx0fVxuXHRcblx0LyoqXG5cdCAqIHJlc3RvcmUgc3RhdGUgJiBkYXRhXG5cdCAqIEByZXR1cm5zIGJvb2xcblx0ICovXG5cdHJlc3RvcmUoIHNuYXBzaG90LCBpbW1lZGlhdGUgKSB7XG5cdFx0c25hcHNob3QgPSBzbmFwc2hvdFxuXHRcdFx0JiYga2V5V2Fsa25HZXQoc25hcHNob3QsIHRoaXMuc2NvcGVPYmouX2lkICsgJy8nICsgdGhpcy5uYW1lKVxuXHRcdFx0fHwgdGhpcy4kc2NvcGUudGFrZVNuYXBzaG90QnlLZXkodGhpcy5zY29wZU9iai5faWQgKyAnLycgKyB0aGlzLm5hbWUpO1xuXHRcdFxuXHRcdGlmICggIXNuYXBzaG90IClcblx0XHRcdHJldHVybjtcblx0XHRcblx0XHRpZiAoIHNuYXBzaG90ICkge1xuXHRcdFx0XG5cdFx0XHRpZiAoICF0aGlzLmlzU3RhYmxlKCkgJiYgIWltbWVkaWF0ZSApXG5cdFx0XHRcdHRoaXMudGhlbigoKSA9PiB0aGlzLnJlc3RvcmUoc25hcHNob3QpKTtcblx0XHRcdFxuXHRcdFx0dGhpcy5zdGF0ZSA9IHsgLi4uc25hcHNob3Quc3RhdGUgfTtcblx0XHRcdHNuYXBzaG90LnJlZnMgJiYgT2JqZWN0LmtleXMoc25hcHNob3QucmVmcykuZm9yRWFjaChcblx0XHRcdFx0KCBrZXkgKSA9PiB7Ly90b2RvXG5cdFx0XHRcdFx0dGhpcy5zdGF0ZVtrZXldID0gdGhpcy4kc2NvcGUucmV0cmlldmUoc25hcHNob3QucmVmc1trZXldKTtcblx0XHRcdFx0fVxuXHRcdFx0KVxuXHRcdFx0XG5cdFx0XHRcblx0XHRcdGlmICggc25hcHNob3QuaW5SZWZzID09PSB0cnVlICkge1xuXHRcdFx0XHR0aGlzLmRhdGEgPSB7IC4uLnRoaXMuc3RhdGUgfTtcblx0XHRcdH1cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHR0aGlzLmRhdGEgPSBzbmFwc2hvdC5kYXRhO1xuXHRcdFx0XHRzbmFwc2hvdC5pblJlZnMgJiYgT2JqZWN0LmtleXMoc25hcHNob3QuaW5SZWZzKS5mb3JFYWNoKFxuXHRcdFx0XHRcdCgga2V5ICkgPT4gey8vdG9kb1xuXHRcdFx0XHRcdFx0dGhpcy5kYXRhW2tleV0gPSB0aGlzLnN0YXRlW3NuYXBzaG90LmluUmVmc1trZXldXTtcblx0XHRcdFx0XHRcdC8vZWxzZVxuXHRcdFx0XHRcdFx0Ly8gICAgY29uc29sZS53YXJuKCdub3QgZm91bmQgOiAnLCBrZXksIHNuYXAgJiYgc25hcC5yZWZzWyBrZXkgXSlcblx0XHRcdFx0XHR9XG5cdFx0XHRcdClcblx0XHRcdH1cblx0XHRcdGlmICggc25hcHNob3QuZGF0YVJlZnMgKSB7XG5cdFx0XHRcdHRoaXMuZGF0YSA9IHRoaXMuZGF0YSB8fCB7fTtcblx0XHRcdFx0T2JqZWN0LmtleXMoc25hcHNob3QuZGF0YVJlZnMpLmZvckVhY2goXG5cdFx0XHRcdFx0KCBrZXkgKSA9PiB7Ly90b2RvXG5cdFx0XHRcdFx0XHR0aGlzLiRzY29wZS5yZXN0b3JlUmVmUGF0aChzbmFwc2hvdC5kYXRhUmVmc1trZXldKTtcblx0XHRcdFx0XHRcdHRoaXMuZGF0YVtrZXldID0gdGhpcy4kc2NvcGUucmV0cmlldmUoc25hcHNob3QuZGF0YVJlZnNba2V5XSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQpXG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdFxuXHRcdH1cblx0fVxuXHRcblx0LyoqXG5cdCAqIEJpbmQgdGhpcyBzdG9yZSBjaGFuZ2VzIHRvIHRoZSBnaXZlbiBjb21wb25lbnQta2V5XG5cdCAqIEBwYXJhbSBvYmoge1JlYWN0LkNvbXBvbmVudHxTdG9yZXxmdW5jdGlvbilcblx0ICogQHBhcmFtIGtleSB7c3RyaW5nfSBvcHRpb25hbCBrZXkgd2hlcmUgdG8gbWFwIHRoZSBwdWJsaWMgc3RhdGVcblx0ICovXG5cdGJpbmQoIG9iaiwga2V5LCBzZXRJbml0aWFsID0gdHJ1ZSwgcGF0aCApIHtcblx0XHR0aGlzLl9mb2xsb3dlcnMucHVzaChbb2JqLCBrZXksIHBhdGhdKTtcblx0XHRpZiAoIHNldEluaXRpYWwgJiYgdGhpcy5kYXRhICYmIHRoaXMuX3N0YWJsZSApIHtcblx0XHRcdGxldCBkYXRhID0gcGF0aCA/IHRoaXMucmV0cmlldmUocGF0aCkgOiB0aGlzLmRhdGE7XG5cdFx0XHRpZiAoIHR5cGVvZiBvYmogIT0gXCJmdW5jdGlvblwiICkge1xuXHRcdFx0XHRpZiAoIGtleSApIG9iai5zZXRTdGF0ZSh7IFtrZXldOiBkYXRhIH0pO1xuXHRcdFx0XHRlbHNlIG9iai5zZXRTdGF0ZShkYXRhKTtcblx0XHRcdH1cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHRvYmooZGF0YSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdFxuXHQvKipcblx0ICogVW4gYmluZCB0aGlzIHN0b3JlIG9mZiB0aGUgZ2l2ZW4gY29tcG9uZW50LWtleVxuXHQgKiBAcGFyYW0gb2JqXG5cdCAqIEBwYXJhbSBrZXlcblx0ICogQHJldHVybnMge0FycmF5LjwqPn1cblx0ICovXG5cdHVuQmluZCggb2JqLCBrZXksIHBhdGggKSB7XG5cdFx0bGV0IGZvbGxvd2VycyA9IHRoaXMuX2ZvbGxvd2Vycyxcblx0XHQgICAgaSAgICAgICAgID0gZm9sbG93ZXJzICYmIGZvbGxvd2Vycy5sZW5ndGg7XG5cdFx0d2hpbGUgKCBmb2xsb3dlcnMgJiYgaS0tIClcblx0XHRcdGlmICggZm9sbG93ZXJzW2ldWzBdID09PSBvYmogJiYgZm9sbG93ZXJzW2ldWzFdID09PSBrZXkgJiYgZm9sbG93ZXJzW2ldWzJdID09PSBwYXRoIClcblx0XHRcdFx0cmV0dXJuIGZvbGxvd2Vycy5zcGxpY2UoaSwgMSk7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBvbmNlKCdzdGFibGUnLCBjYilcblx0ICogQHBhcmFtIG9iaiB7UmVhY3QuQ29tcG9uZW50fFN0b3JlfGZ1bmN0aW9uKVxuXHQgKiBAcGFyYW0ga2V5IHtzdHJpbmd9IG9wdGlvbmFsIGtleSB3aGVyZSB0byBtYXAgdGhlIHB1YmxpYyBzdGF0ZVxuXHQgKi9cblx0dGhlbiggY2IgKSB7XG5cdFx0aWYgKCB0aGlzLl9zdGFibGUgKVxuXHRcdFx0cmV0dXJuIGNiKHRoaXMuZGF0YSk7XG5cdFx0dGhpcy5vbmNlKCdzdGFibGUnLCBlID0+IGNiKHRoaXMuZGF0YSkpO1xuXHR9XG5cdFxuXHQvKipcblx0ICogQWRkIGEgbG9jayBzbyB0aGUgc3RvcmUgd2lsbCBub3QgcHJvcGFnIGl0IGRhdGEgdW50aWxsIHJlbGVhc2UoKSBpcyBjYWxsXG5cdCAqIEBwYXJhbSBwcmV2aW91cyB7U3RvcmV8bnVtYmVyfEFycmF5fSBAb3B0aW9uYWwgd2YgdG8gd2FpdCwgcmVsZWFzZXMgdG8gd2FpdCBvclxuXHQgKiAgICAgYXJyYXkgb2Ygc3R1ZmYgdG8gd2FpdFxuXHQgKiBAcmV0dXJucyB7dGhpc31cblx0ICovXG5cdHdhaXQoIHByZXZpb3VzICkge1xuXHRcdGlmICggdHlwZW9mIHByZXZpb3VzID09IFwibnVtYmVyXCIgKVxuXHRcdFx0cmV0dXJuIHRoaXMuX19sb2Nrcy5hbGwgKz0gcHJldmlvdXM7XG5cdFx0aWYgKCBpcy5hcnJheShwcmV2aW91cykgKVxuXHRcdFx0cmV0dXJuIHByZXZpb3VzLm1hcCh0aGlzLndhaXQuYmluZCh0aGlzKSk7XG5cdFx0XG5cdFx0dGhpcy5fc3RhYmxlICYmIHRoaXMuZW1pdCgndW5zdGFibGUnLCB0aGlzLnN0YXRlLCB0aGlzLmRhdGEpO1xuXHRcdHRoaXMuX3N0YWJsZSA9IGZhbHNlO1xuXHRcdHRoaXMuX19sb2Nrcy5hbGwrKztcblx0XHRcblx0XHRsZXQgcmVhc29uID0gaXMuc3RyaW5nKHByZXZpb3VzKSA/IHByZXZpb3VzIDogbnVsbDtcblx0XHRpZiAoIHJlYXNvbiApIHtcblx0XHRcdHRoaXMuX19sb2Nrc1tyZWFzb25dID0gdGhpcy5fX2xvY2tzW3JlYXNvbl0gfHwgMDtcblx0XHRcdHRoaXMuX19sb2Nrc1tyZWFzb25dKys7XG5cdFx0fVxuXHRcdGlmICggcHJldmlvdXMgJiYgaXMuZm4ocHJldmlvdXMudGhlbikgKSB7XG5cdFx0XHRwcmV2aW91cy50aGVuKHRoaXMucmVsZWFzZS5iaW5kKHRoaXMsIG51bGwpKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBEZWNyZWFzZSBsb2NrcyBmb3IgdGhpcyBzdG9yZSwgaWYgaXQgcmVhY2ggMCAsXG5cdCAqIGl0IHdpbGwgYmUgcHJvcGFnYXRlZCB0byB0aGUgZm9sbG93ZXJzLFxuXHQgKiB0aGVuLCBhbGwgc3R1ZmYgcGFzc2VkIHRvIFwidGhlblwiIGNhbGwgYmFjayB3aWxsIGJlIGV4ZWMgLyByZWxlYXNlZFxuXHQgKiBAcGFyYW0gZGVzeW5jXG5cdCAqIEByZXR1cm5zIHsqfVxuXHQgKi9cblx0cmVsZWFzZSggcmVhc29uLCBjYiApIHtcblx0XHRsZXQgX3N0YXRpYyA9IHRoaXMuY29uc3RydWN0b3IsIG1lID0gdGhpcztcblx0XHRsZXQgaSAgICAgICA9IDAsIHdhc1N0YWJsZSA9IHRoaXMuX3N0YWJsZTtcblx0XHRcblx0XHRpZiAoIGlzLmZuKHJlYXNvbikgKSB7XG5cdFx0XHRjYiAgICAgPSByZWFzb247XG5cdFx0XHRyZWFzb24gPSBudWxsO1xuXHRcdH1cblx0XHRcblx0XHRpZiAoIHJlYXNvbiApIHtcblx0XHRcdGlmICggdGhpcy5fX2xvY2tzW3JlYXNvbl0gPT0gMCApXG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoXCJSZWxlYXNlIG1vcmUgdGhhbiBsb2NraW5nICFcIiwgcmVhc29uKTtcblx0XHRcdHRoaXMuX19sb2Nrc1tyZWFzb25dID0gdGhpcy5fX2xvY2tzW3JlYXNvbl0gfHwgMDtcblx0XHRcdHRoaXMuX19sb2Nrc1tyZWFzb25dLS07XG5cdFx0fVxuXHRcdFxuXHRcdGlmICggIXJlYXNvbiAmJiB0aGlzLl9fbG9ja3MuYWxsID09IDAgKVxuXHRcdFx0Y29uc29sZS5lcnJvcihcIlJlbGVhc2UgbW9yZSB0aGFuIGxvY2tpbmcgIVwiKTtcblx0XHRcblx0XHRpZiAoICEtLXRoaXMuX19sb2Nrcy5hbGwgJiYgdGhpcy5pc0NvbXBsZXRlKCkgKSB7XG5cdFx0XHRsZXQgcHJvcGFnICAgPSB0aGlzLnNob3VsZFByb3BhZyh0aGlzLmRhdGEpO1xuXHRcdFx0dGhpcy5fc3RhYmxlID0gdHJ1ZTtcblx0XHRcdHByb3BhZyAmJiB0aGlzLl9yZXYrKzsvL1xuXHRcdFx0aWYgKCBwcm9wYWcgJiYgdGhpcy5fZm9sbG93ZXJzLmxlbmd0aCApXG5cdFx0XHRcdHRoaXMuX2ZvbGxvd2Vycy5mb3JFYWNoKGZ1bmN0aW9uIHByb3BhZyggZm9sbG93ZXIgKSB7XG5cdFx0XHRcdFx0bGV0IGRhdGEgPSBmb2xsb3dlclsyXSA/IG1lLnJldHJpZXZlKGZvbGxvd2VyWzJdKSA6IG1lLmRhdGE7XG5cdFx0XHRcdFx0Ly9pZiAoICFkYXRhICkgcmV0dXJuO1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdGlmICggdHlwZW9mIGZvbGxvd2VyWzBdID09IFwiZnVuY3Rpb25cIiApIHtcblx0XHRcdFx0XHRcdGZvbGxvd2VyWzBdKGRhdGEpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHRcdC8vY2IgJiYgaSsrO1xuXHRcdFx0XHRcdFx0Zm9sbG93ZXJbMF0uc2V0U3RhdGUoXG5cdFx0XHRcdFx0XHRcdChmb2xsb3dlclsxXSkgPyB7IFtmb2xsb3dlclsxXV06IGRhdGEgfVxuXHRcdFx0XHRcdFx0XHQgICAgICAgICAgICAgIDogZGF0YVxuXHRcdFx0XHRcdFx0XHQvLyxcblx0XHRcdFx0XHRcdFx0Ly9jYiAmJiAoXG5cdFx0XHRcdFx0XHRcdC8vICAgICgpID0+ICghKC0taSkgJiYgY2IoKSlcblx0XHRcdFx0XHRcdFx0Ly8pXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHQvL2Vsc2Vcblx0XHRcdCF3YXNTdGFibGUgJiYgdGhpcy5lbWl0KCdzdGFibGUnLCB0aGlzLmRhdGEpO1xuXHRcdFx0cHJvcGFnICYmIHRoaXMuZW1pdCgndXBkYXRlJywgdGhpcy5kYXRhKTtcblx0XHRcdGNiICYmIGNiKClcblx0XHR9XG5cdFx0ZWxzZSBjYiAmJiB0aGlzLnRoZW4oY2IpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cdFxuXHRwcm9wYWcoIGRhdGEgKSB7XG5cdFx0dGhpcy5lbWl0KCd1cGRhdGUnLCBkYXRhKTtcblx0fVxuXHRcblx0cmV0YWluKCByZWFzb24gKSB7XG5cdFx0dGhpcy5fX3JldGFpbnMuYWxsKys7XG5cdFx0aWYgKCByZWFzb24gKSB7XG5cdFx0XHR0aGlzLl9fcmV0YWluc1tyZWFzb25dID0gdGhpcy5fX3JldGFpbnNbcmVhc29uXSB8fCAwO1xuXHRcdFx0dGhpcy5fX3JldGFpbnNbcmVhc29uXSsrO1xuXHRcdH1cblx0fVxuXHRcblx0ZGlzcG9zZSggcmVhc29uICkge1xuXHRcdC8vY29uc29sZS53YXJuKFwiZGlzcG9zZVwiLCByZWFzb24sIHRoaXMuX19yZXRhaW5zKTtcblx0XHRpZiAoIHJlYXNvbiApIHtcblx0XHRcdGlmICggIXRoaXMuX19yZXRhaW5zW3JlYXNvbl0gKVxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJSUyA6IERpc3Bvc2UgbW9yZSB0aGFuIHJldGFpbmluZyBvbiBzdG9yZSAnXCIgKyB0aGlzLm5hbWUgKyBcIicgOiBcIiArIHJlYXNvbik7XG5cdFx0XHRcblx0XHRcdHRoaXMuX19yZXRhaW5zW3JlYXNvbl0tLTtcblx0XHR9XG5cdFx0aWYgKCB0aGlzLl9fcmV0YWlucy5hbGwgPT0gMCApXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJSUyA6IERpc3Bvc2UgbW9yZSB0aGFuIHJldGFpbmluZyBvbiBzdG9yZSBcIiArIHRoaXMubmFtZSk7XG5cdFx0XG5cdFx0dGhpcy5fX3JldGFpbnMuYWxsLS07XG5cdFx0XG5cdFx0aWYgKCAhdGhpcy5fX3JldGFpbnMuYWxsICkge1xuXHRcdFx0aWYgKCB0aGlzLl9wZXJzaXN0ZW5jZVRtICkge1xuXHRcdFx0XHR0aGlzLl9kZXN0cm95VE0gJiYgY2xlYXJUaW1lb3V0KHRoaXMuX2Rlc3Ryb3lUTSk7XG5cdFx0XHRcdHRoaXMuX2Rlc3Ryb3lUTSA9IHNldFRpbWVvdXQoXG5cdFx0XHRcdFx0ZSA9PiB7XG5cdFx0XHRcdFx0XHR0aGlzLl9kZXN0cm95VE0gPSBudWxsO1xuXHRcdFx0XHRcdFx0Ly90aGlzLnRoZW4ocyA9PiB7XG5cdFx0XHRcdFx0XHQhdGhpcy5fX3JldGFpbnMuYWxsICYmICF0aGlzLmRlYWQgJiYgdGhpcy5kZXN0cm95KClcblx0XHRcdFx0XHRcdC8vfSk7XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR0aGlzLl9wZXJzaXN0ZW5jZVRtXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0Ly90aGlzLnRoZW4ocyA9PlxuXHRcdFx0XHQoIXRoaXMuX19yZXRhaW5zLmFsbCAmJiAhdGhpcy5kZWFkICYmIHRoaXMuZGVzdHJveSgpKVxuXHRcdFx0XHQvLyk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdFxuXHRkZXN0cm95KCkge1xuXHRcdC8vICBjb25zb2xlLmxvZyhcImRlc3Ryb3lcIiwgdGhpcy5fdWlkKTtcblx0XHRcblx0XHR0aGlzLmVtaXQoJ2Rlc3Ryb3knLCB0aGlzKTtcblx0XHRpZiAoIHRoaXMuX3N0YWJpbGl6ZXIgKVxuXHRcdFx0Y2xlYXJUaW1lb3V0KHRoaXMuX3N0YWJpbGl6ZXIpO1xuXHRcdFxuXHRcdGlmICggdGhpcy5fZm9sbG93ZXJzLmxlbmd0aCApXG5cdFx0XHR0aGlzLl9mb2xsb3dlcnMuZm9yRWFjaChcblx0XHRcdFx0KCBmb2xsb3dlciApID0+IHtcblx0XHRcdFx0XHRpZiAoIHR5cGVvZiBmb2xsb3dlclswXSAhPT0gXCJmdW5jdGlvblwiICkge1xuXHRcdFx0XHRcdFx0aWYgKCBmb2xsb3dlclswXS5zdG9yZXMgKVxuXHRcdFx0XHRcdFx0XHRkZWxldGUgZm9sbG93ZXJbMF0uc3RvcmVzW2ZvbGxvd2VyWzFdXTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdCk7XG5cdFx0dGhpcy5fZm9sbG93ZXJzLmxlbmd0aCA9IDA7XG5cdFx0dGhpcy5jb25zdHJ1Y3Rvci5fcmV2ICA9IHRoaXMucmV2O1xuXHRcdHRoaXMuZGVhZCAgICAgICAgICAgICAgPSB0cnVlO1xuXHRcdHRoaXMuX3JldnMgICAgICAgICAgICAgPSB0aGlzLmRhdGEgPSB0aGlzLnN0YXRlID0gdGhpcy5zY29wZSA9IG51bGw7XG5cdFx0dGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoKTtcblx0fVxufVxuXG4vKipcbiAqIGdldCBhIHN0YXRpYyBhbGlhc2VkIHJlZmVyZW5jZSBvZiBhIHN0b3JlXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICogQHJldHVybnMge3tzdG9yZTogU3RvcmUsIG5hbWU6ICp9fVxuICovXG5TdG9yZS5hcyA9IGZ1bmN0aW9uICggbmFtZSApIHtcblx0cmV0dXJuIHsgc3RvcmU6IHRoaXMsIG5hbWUgfTtcbn1cblxuLyoqXG4gKiBAdG9kb1xuICogTWFwIGFsbCBuYW1lZCBzdG9yZXMgaW4ge2tleXN9IHRvIHRoZSB7b2JqZWN0fSdzIHN0YXRlXG4gKiBIb29rIGNvbXBvbmVudFdpbGxVbm1vdW50IChmb3IgcmVhY3QgY29tcCkgb3IgZGVzdHJveSB0byB1bkJpbmQgdGhlbSBhdXRvbWF0aWNhbGx5XG4gKiBAc3RhdGljXG4gKiBAcGFyYW0gb2JqZWN0IHtPYmplY3R9IHRhcmdldCBzdGF0ZSBhd2FyZSBvYmplY3QgKFJlYWN0LkNvbXBvbmVudHxTdG9yZXwuLi4pXG4gKiBAcGFyYW0ga2V5cyB7QXJyYXl9IEV4IDogW1wic2Vzc2lvblwiLCBcIm90aGVyU3RhdGljTmFtZWRTdG9yZTprZXlcIixcbiAqICAgICBzdG9yZS5hcygnYW5vdGhlcktleScpXVxuICovXG5TdG9yZS5tYXAgPSBmdW5jdGlvbiAoIGNTdG9yZSwga2V5cywgc2NvcGUsIG9yaWdpbiwgc2V0SW5pdGlhbCA9IGZhbHNlICkge1xuXHRsZXQgdGFyZ2V0UmV2cyAgICAgPSBjU3RvcmUuX3JldnMgfHwge307XG5cdGxldCB0YXJnZXRTY29wZSAgICA9IGNTdG9yZS5zdG9yZXMgfHwgKGNTdG9yZS5zdG9yZXMgPSB7fSk7XG5cdGxldCBpbml0aWFsT3V0cHV0cyA9IHt9O1xuXHRrZXlzICAgICAgICAgICAgICAgPSBpcy5hcnJheShrZXlzKSA/IFsuLi5rZXlzXSA6IFtrZXlzXTtcblx0XG5cdFxuXHRzY29wZSA9IHNjb3BlIHx8IFN0b3JlLnN0YXRpY1Njb3BlO1xuXHRcblx0a2V5cyA9IGtleXMuZmlsdGVyKFxuXHRcdC8vIEB0b2RvIDogdXNlIHF1ZXJ5IHJlZnNcblx0XHQvLyAoc3RvcmUpKFxcLnN0b3JlKSooXFxbKFxcKnwocHJvcHMpXFx3KykrKVxcXSk/KFxcOmFsaWFzKVxuXHRcdCgga2V5ICkgPT4ge1xuXHRcdFx0aWYgKCAha2V5ICkge1xuXHRcdFx0XHRjb25zb2xlLmVycm9yKFwiTm90IGEgbWFwcGFibGUgc3RvcmUgaXRlbSAnXCIgKyBrZXkgKyBcIicgaW4gXCIgKyBvcmlnaW4gKyAnICEhJyk7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdGxldCBuYW1lLFxuXHRcdFx0ICAgIGFsaWFzLFxuXHRcdFx0ICAgIHBhdGgsXG5cdFx0XHQgICAgc3RvcmUsIF9rZXk7XG5cdFx0XHRpZiAoIGtleS5zdG9yZSAmJiBrZXkubmFtZSApIHtcblx0XHRcdFx0YWxpYXMgPSBuYW1lID0ga2V5Lm5hbWU7XG5cdFx0XHRcdHN0b3JlID0ga2V5LnN0b3JlO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSBpZiAoIGlzLmZuKGtleSkgKSB7XG5cdFx0XHRcdG5hbWUgID0gYWxpYXMgPSBrZXkubmFtZSB8fCBrZXkuZGVmYXVsdE5hbWU7XG5cdFx0XHRcdHN0b3JlID0ga2V5O1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdF9rZXkgID0ga2V5Lm1hdGNoKC8oW15cXC5cXDpdKykoKD86XFwuW15cXC5cXDpdKykqKSg/OlxcOihbXlxcLlxcOl0rKSk/Lyk7XG5cdFx0XHRcdG5hbWUgID0gX2tleVsxXTtcblx0XHRcdFx0cGF0aCAgPSBfa2V5WzJdICYmIF9rZXlbMl0uc3Vic3RyKDEpO1xuXHRcdFx0XHRzdG9yZSA9IHNjb3BlLnN0b3Jlc1tfa2V5WzFdXTtcblx0XHRcdFx0YWxpYXMgPSBfa2V5WzNdIHx8IHBhdGggJiYgcGF0aC5tYXRjaCgvKFteXFwuXSopJC8pWzBdIHx8IF9rZXlbMV07XG5cdFx0XHR9XG5cdFx0XHRpZiAoICFzdG9yZSApIHtcblx0XHRcdFx0bGV0IGkgPSBbXTtcblx0XHRcdFx0Zm9yICggbGV0IG8gaW4gc2NvcGUuc3RvcmVzIClcblx0XHRcdFx0XHRpLnB1c2gobylcblx0XHRcdFx0Y29uc29sZS5lcnJvcihcIk5vdCBhIG1hcHBhYmxlIHN0b3JlIGl0ZW0gJ1wiICsgbmFtZSArIFwiL1wiICsgYWxpYXMgKyBcIicgaW4gXCIgKyAoY1N0b3JlLm5hbWUgfHwgY1N0b3JlKSArICcgISEnLCBzdG9yZSwgX2tleSwgc2NvcGUuc3RvcmVzLCBpKTtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCBTY29wZS5pc1Njb3BlQ2xhc3Moc3RvcmUpICkgc2NvcGUuX21vdW50KG5hbWUpO1xuXHRcdFx0aWYgKCBTY29wZS5pc1Njb3BlKHN0b3JlKSApIHtcblx0XHRcdFx0c3RvcmUgPSBzY29wZS5fbW91bnQoa2V5KTtcblx0XHRcdH1cblx0XHRcdGVsc2UgaWYgKCB0YXJnZXRSZXZzW25hbWVdICkgcmV0dXJuIGZhbHNlOy8vIGlnbm9yZSBkYmwgdXNlcyBmb3Igbm93XG5cdFx0XHRcblx0XHRcdFxuXHRcdFx0aWYgKCBpcy5mbihzdG9yZSkgKSB7XG5cdFx0XHRcdHNjb3BlLl9tb3VudChuYW1lKVxuXHRcdFx0XHRzY29wZS5zdG9yZXNbbmFtZV0uYmluZChjU3RvcmUsIGFsaWFzLCBzZXRJbml0aWFsLCBwYXRoKTtcblx0XHRcdH1cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHRzdG9yZS5iaW5kKGNTdG9yZSwgYWxpYXMsIHNldEluaXRpYWwsIHBhdGgpO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHQvLyBnaXZlIGluaXRpYWwgc3RvcmUgd2VpZ2h0IGJhc2luZyBzb3VyY2VzXG5cdFx0XHRzY29wZS5zdG9yZXNbbmFtZV0uX3NvdXJjZXMgJiYgY1N0b3JlLl9zb3VyY2VzLnB1c2goLi4uc2NvcGUuc3RvcmVzW25hbWVdLl9zb3VyY2VzKTtcblx0XHRcdFxuXHRcdFx0dGFyZ2V0UmV2c1thbGlhc10gPSB0YXJnZXRSZXZzW2FsaWFzXSB8fCB0cnVlO1xuXHRcdFx0IXRhcmdldFNjb3BlW25hbWVdICYmICh0YXJnZXRTY29wZVtuYW1lXSA9IHNjb3BlLnN0b3Jlc1tuYW1lXSk7XG5cdFx0XHRpZiAoIHNjb3BlLnN0b3Jlc1tuYW1lXS5oYXNPd25Qcm9wZXJ0eSgnZGF0YScpIClcblx0XHRcdFx0aW5pdGlhbE91dHB1dHNbbmFtZV0gPSBzY29wZS5kYXRhW25hbWVdO1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHQpO1xuXHRcblx0Ly8gLi4uIEB0b2RvXG5cdGNTdG9yZS5vbmNlKCdkZXN0cm95JywgKCAuLi5hcmd6ICkgPT4ge1xuXHRcdGtleXMubWFwKFxuXHRcdFx0KCBrZXkgKSA9PiB7XG5cdFx0XHRcdGxldCBuYW1lLFxuXHRcdFx0XHQgICAgYWxpYXMsIHBhdGgsXG5cdFx0XHRcdCAgICBzdG9yZTtcblx0XHRcdFx0aWYgKCBrZXkuc3RvcmUgJiYga2V5Lm5hbWUgKSB7XG5cdFx0XHRcdFx0YWxpYXMgPSBuYW1lID0ga2V5Lm5hbWU7XG5cdFx0XHRcdFx0c3RvcmUgPSBrZXkuc3RvcmU7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZSBpZiAoIGlzLmZuKGtleSkgKSB7XG5cdFx0XHRcdFx0bmFtZSAgPSBhbGlhcyA9IGtleS5uYW1lIHx8IGtleS5kZWZhdWx0TmFtZTtcblx0XHRcdFx0XHRzdG9yZSA9IHNjb3BlLnN0b3Jlc1tuYW1lXTtcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHRrZXkgICA9IGtleS5tYXRjaCgvKFteXFwuXFw6XSspKCg/OlxcLlteXFwuXFw6XSspKikoPzpcXDooW15cXC5cXDpdKykpPy8pO1xuXHRcdFx0XHRcdG5hbWUgID0ga2V5WzFdO1xuXHRcdFx0XHRcdHBhdGggID0ga2V5WzJdICYmIGtleVsyXS5zdWJzdHIoMSk7XG5cdFx0XHRcdFx0c3RvcmUgPSBzY29wZS5zdG9yZXNba2V5WzFdXTtcblx0XHRcdFx0XHRhbGlhcyA9IGtleVszXSB8fCBwYXRoICYmIHBhdGgubWF0Y2goLyhbXlxcLl0qKSQvKVswXSB8fCBrZXlbMV07XG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHRcdHN0b3JlICYmICFpcy5mbihzdG9yZSkgJiYgc3RvcmUudW5CaW5kKGNTdG9yZSwgYWxpYXMsIHBhdGgpXG5cdFx0XHR9XG5cdFx0KTtcblx0fSlcblx0XG5cdHJldHVybiBpbml0aWFsT3V0cHV0cztcbn07XG5cblxuU3RvcmUuaXNTdG9yZSAgICAgID0gU2NvcGUuaXNTdG9yZSA9IGZ1bmN0aW9uICggb2JqICkge1xuXHRyZXR1cm4gb2JqIGluc3RhbmNlb2YgU3RvcmVcbn1cblN0b3JlLmlzU3RvcmVDbGFzcyA9IFNjb3BlLmlzU3RvcmVDbGFzcyA9IGZ1bmN0aW9uICggb2JqICkge1xuXHRyZXR1cm4gU3RvcmUuaXNQcm90b3R5cGVPZihvYmopIHx8IG9iaiA9PT0gU3RvcmVcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RvcmU7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1N0b3JlLmpzIiwiLypcbiAqICAgVGhlIE1JVCBMaWNlbnNlIChNSVQpXG4gKiAgIENvcHlyaWdodCAoYykgMjAxOS4gV2lzZSBXaWxkIFdlYlxuICpcbiAqICAgUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogICBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiAgIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqICAgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogICBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqICAgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiAgIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuICogICBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqICAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogICBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqICAgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiAgIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqICAgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqICAgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcbiAqICAgU09GVFdBUkUuXG4gKlxuICogICBAYXV0aG9yIDogTmF0aGFuYWVsIEJyYXVuXG4gKiAgIEBjb250YWN0IDogbjh0ei5qc0BnbWFpbC5jb21cbiAqL1xuXG5pbXBvcnQgaXMgZnJvbSBcImlzXCI7XG5cbi8qKlxuICogTWluaW1hbCBwdXNoIHNlcXVlbmNlciwgYXBwbHkgc3RvcmVzIHNwZWNpZmljIHRhc2sgaW4gdGhlIHJpZ2h0IG9yZGVyXG4gKi9cbmxldCB0YXNrUXVldWUgICAgICA9IFtdLFxuICAgIGN1cldlaWdodCAgICAgID0gMCxcbiAgICBtYXhXZWlnaHQgICAgICA9IDAsXG4gICAgbWluV2VpZ2h0ICAgICAgPSAwLFxuICAgIHRhc2tDb3VudCAgICAgID0gMCxcbiAgICBkZVN5bmMgICAgICAgICA9IGZhbHNlLFxuICAgIGRlU3luY01heFRhc2tzID0gMTAsXG4gICAgdGFzayxcbiAgICBpc1J1bm5pbmcsXG4gICAgZXJyb3JDYXRjaGVyICAgPSB7XG5cdCAgICBsYXN0RXJyb3I6IG51bGwsXG5cdCAgICBkaXNwYXRjaCA6IGZ1bmN0aW9uICggZXJyb3IgKSB7XG5cdFx0ICAgIGVycm9yQ2F0Y2hlci5kaXNhYmxlKCk7XG5cdFx0ICAgIGlmICggdGFzayAmJiB0YXNrWzBdLmhhbmRsZUVycm9yICkge1xuXHRcdFx0ICAgIHRhc2tbMF0uaGFuZGxlRXJyb3IoZXJyb3IsIHRhc2spO1xuXHRcdCAgICB9XG5cdFx0ICAgIGVsc2UgaWYgKCB0YXNrIClcblx0XHRcdCAgICBjb25zb2xlLmVycm9yKFwiUmVTY29wZSA6IEFuIGFwcGx5IHRhc2sgaGFzIGZhaWxlZCAhIVwiLCB0YXNrWzFdLCBcIiBvbiBcIiwgdGFza1swXS5uYW1lIHx8IHRhc2tbMF0uY29uc3RydWN0b3IubmFtZSlcblx0XHRcblx0XHQgICAgaXNSdW5uaW5nID0gZmFsc2U7XG5cdFx0ICAgIHRhc2sgICAgICA9IG51bGw7XG5cdFx0ICAgIHJ1bk5vdygpO1xuXHQgICAgfSxcblx0ICAgIGVuYWJsZSAgIDogKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKVxuXHQgICAgICAgICAgICAgICA/ICgpID0+IHtcblx0XHRcdCAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCBlcnJvckNhdGNoZXIuZGlzcGF0Y2gpXG5cdFx0ICAgIH0gOiAoKSA9PiB7XG5cdFx0XHQgICAgcHJvY2Vzcy5vbigndW5jYXVnaHRFeGNlcHRpb24nLCBlcnJvckNhdGNoZXIuZGlzcGF0Y2gpO1xuXHRcdCAgICB9LFxuXHQgICAgZGlzYWJsZSAgOiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpXG5cdCAgICAgICAgICAgICAgID8gKCkgPT4ge1xuXHRcdFx0ICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdlcnJvcicsIGVycm9yQ2F0Y2hlci5kaXNwYXRjaClcblx0XHQgICAgfSA6ICgpID0+IHtcblx0XHRcdCAgICBwcm9jZXNzLnJlbW92ZUxpc3RlbmVyKCd1bmNhdWdodEV4Y2VwdGlvbicsIGVycm9yQ2F0Y2hlci5kaXNwYXRjaCk7XG5cdFx0ICAgIH1cbiAgICB9XG47XG5cbmZ1bmN0aW9uIHJ1bk5vdygpIHtcblx0aWYgKCAhaXNSdW5uaW5nICkge1xuXHRcdHJ1bigpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJ1bigpIHtcblx0bGV0IGZyb20gID0gRGF0ZS5ub3coKTtcblx0aXNSdW5uaW5nID0gdHJ1ZTtcblx0ZXJyb3JDYXRjaGVyLmVuYWJsZSgpO1xuXHR3aGlsZSAoIHRhc2tDb3VudCApIHtcblx0XHRcblx0XHQvLyB0cnkgZm9yIHRoZSBjdXJyZW50IHdlaWdodFxuXHRcdHdoaWxlICggISh0YXNrUXVldWVbY3VyV2VpZ2h0XSAmJiB0YXNrUXVldWVbY3VyV2VpZ2h0XS5sZW5ndGgpIClcblx0XHRcdGN1cldlaWdodCsrO1xuXHRcdFxuXHRcdHRhc2tDb3VudC0tO1xuXHRcdHRhc2sgPSB0YXNrUXVldWVbY3VyV2VpZ2h0XS5zaGlmdCgpO1xuXHRcdC8vY29uc29sZS5sb2coXCJUYXNrIDogXCIsIHRhc2tbMV0sIFwiIG9uIFwiLCB0YXNrWzBdLm5hbWUpO1xuXHRcdCF0YXNrWzBdLmRlYWQgJiYgdGFza1swXVt0YXNrWzFdXSh0YXNrWzJdKTtcblx0fVxuXHR0YXNrID0gdW5kZWZpbmVkO1xuXHRlcnJvckNhdGNoZXIuZGlzYWJsZSgpO1xuXHRcblx0aXNSdW5uaW5nID0gZmFsc2U7XG5cdGlmICggdGFza0NvdW50ICkge1xuXHRcdHNldFRpbWVvdXQocnVuTm93KTtcblx0fVxufVxuXG4vL1xuLy9pbmRleC5zZXRUYXNrRGVTeW5jID0gKCBuYiApID0+IHtcbi8vICAgIGlmICggbmIgPT09IGZhbHNlIClcbi8vICAgICAgICByZXR1cm4gZGVTeW5jID0gZmFsc2U7XG4vLyAgICBlbHNlIGlmICggbmIgPT09IHRydWUgKSB7XG4vLyAgICAgICAgZGVTeW5jICAgICAgICAgPSB0cnVlO1xuLy8gICAgICAgIGRlU3luY01heFRhc2tzID0gMTA7XG4vLyAgICB9XG4vLyAgICBlbHNlIChpcy5pbnQobmIpKVxuLy8gICAge1xuLy8gICAgICAgIGRlU3luYyAgICAgICAgID0gdHJ1ZTtcbi8vICAgICAgICBkZVN5bmNNYXhUYXNrcyA9IG5iO1xuLy8gICAgfVxuLy99O1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cdHB1c2hUYXNrKCBvYmosIGZuLCBhcmd6ICkge1xuXHRcdC8qKlxuXHRcdCAqIFRoZSBtb3JlIGEgc3RvcmUgaGF2ZSBzb3VyY2VzLCB0aGUgbW9yZSBpdCBzaG91bGQgYmUgcHJvY2Vzc2VkIGZpcnN0XG5cdFx0ICogU28gbGVhZnMgc3RvcmVzIHN0YXkgc3luYywgYW5kIHJvb3Qgc3RvcmVzIHJlY2VpdmUgbWVyZ2VkIHN0YXRlIHVwZGF0ZXM7XG5cdFx0ICogZ2xvYmFsIHN0YXRlIHN0YXkgY29oZXJlbnRcblx0XHQgKlxuXHRcdCAqIFRoaXMgbWVhbiB3aGF0ZXZlciB0aGUgbnVtYmVyIG9mIHN0b3JlcyAmIHRoZSBjb21wbGV4aXR5IG9mIHRoZSBkZXBzLFxuXHRcdCAqIHVwZGF0aW5nIGEgc3RvcmUgc3RhdGUgd2lsbCB1cGRhdGUgaXRzIHN5bmNocm9uZSBjaGlsZCBzdG9yZXMgaW1tZWRpYXRlbHlcblx0XHQgKlxuXHRcdCAqXG5cdFx0ICogQHR5cGUgeyp8bnVtYmVyfVxuXHRcdCAqL1xuXHRcdGxldCB3ZWlnaHQgPSBvYmouX3NvdXJjZXMgJiYgb2JqLl9zb3VyY2VzLmxlbmd0aCB8fCAxLFxuXHRcdCAgICBzdGFjayAgPSB0YXNrUXVldWVbd2VpZ2h0XSA9XG5cdFx0XHQgICAgdGFza1F1ZXVlW3dlaWdodF0gfHwgW107XG5cdFx0XG5cdFx0bWF4V2VpZ2h0ID0gTWF0aC5tYXgobWF4V2VpZ2h0LCB3ZWlnaHQpO1xuXHRcdGN1cldlaWdodCA9IE1hdGgubWluKGN1cldlaWdodCwgd2VpZ2h0KTtcblx0XHR0YXNrQ291bnQrKztcblx0XHRcblx0XHQvL2NvbnNvbGUubG9nKFwiUHVzaCBUYXNrIDogXCIsIGZuLCBcIiBvbiBcIiwgb2JqLm5hbWUsIHdlaWdodCk7XG5cdFx0c3RhY2sucHVzaChbb2JqLCBmbiwgYXJnel0pO1xuXHRcdHNldFRpbWVvdXQocnVuTm93LCAwKTtcblx0XHRyZXR1cm4gc3RhY2subGVuZ3RoO1xuXHR9XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlscy9UYXNrU2VxdWVuY2VyLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==