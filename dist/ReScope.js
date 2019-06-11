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
	                    *
	                    * Copyright (C) 2019 Nathanael Braun
	                    *
	                    * This program is free software: you can redistribute it and/or modify
	                    * it under the terms of the GNU Affero General Public License as published by
	                    * the Free Software Foundation, either version 3 of the License, or
	                    * (at your option) any later version.
	                    *
	                    * This program is distributed in the hope that it will be useful,
	                    * but WITHOUT ANY WARRANTY; without even the implied warranty of
	                    * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
	                    * GNU Affero General Public License for more details.
	                    *
	                    * You should have received a copy of the GNU Affero General Public License
	                    * along with this program.  If not, see <http://www.gnu.org/licenses/>.
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOTY5YWE1MWE5MmYyNTI1NDc5NzciLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9TY29wZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInNob3J0aWRcIiIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvRW1pdHRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1N0b3JlLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9UYXNrU2VxdWVuY2VyLmpzIl0sIm5hbWVzIjpbIiRnbG9iYWwiLCJ3aW5kb3ciLCJnbG9iYWwiLCJSUyIsIl9fX3Jlc2NvcGUiLCJjb25zb2xlIiwid2FybiIsIlNjb3BlIiwiU3RvcmUiLCJzY29wZVJlZiIsIm1hcCIsImtleSIsIl9fcHJvdG9fX3B1c2giLCJ0YXJnZXQiLCJpZCIsInBhcmVudCIsImZuIiwicHJvdG90eXBlIiwiXyIsImFsbFNjb3BlcyIsInNtIiwic3RhdGUiLCJfcmVmcyIsImFjdGlvbnMiLCJwYXRoIiwiYXBwbGllciIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwiY3BhdGgiLCJwdXNoIiwiRnVuY3Rpb24iLCJhcyIsInNjb3BlcyIsInNrZXkiLCJpcyIsImFycmF5Iiwic29ydCIsImEiLCJiIiwiZmlyc3RuYW1lIiwiam9pbiIsInN0b3Jlc01hcCIsInVwcGVyU2NvcGUiLCJzbmFwc2hvdCIsImRhdGEiLCJpbmNyZW1lbnRJZCIsInBlcnNpc3RlbmNlVG0iLCJhdXRvRGVzdHJveSIsInJvb3RFbWl0dGVyIiwiYm91bmRlZEFjdGlvbnMiLCJrZXlQSUQiLCJfaWQiLCJzaG9ydGlkIiwiZ2VuZXJhdGUiLCJiYXNlSWQiLCJpc0xvY2FsSWQiLCJyZWdpc3RlciIsImkiLCJfcmV2Iiwic3RvcmVzIiwiX2F1dG9EZXN0cm95IiwiY29uc3RydWN0b3IiLCJkZWFkIiwiRXJyb3IiLCJzb3VyY2VzIiwiY2hpbGRTY29wZXMiLCJjaGlsZFNjb3Blc0xpc3QiLCJ1blN0YWJsZUNoaWxkcyIsInNlZW5DaGlsZHMiLCJfbGlzdGVuaW5nIiwiX3Njb3BlIiwiX21peGVkIiwiX21peGVkTGlzdCIsImZvbGxvd2VycyIsIl9fcmV0YWlucyIsImFsbCIsIl9fbG9ja3MiLCJfYm91bmRlZEFjdGlvbnMiLCJ0ZXN0IiwiaW5jbHVkZXMiLCJiaW5kIiwicmV0YWluIiwiX3N0YWJsZSIsIndhaXQiLCJvbiIsIl9wYXJlbnRMaXN0IiwicmVsZWFzZSIsIl9wcm9wYWciLCJfYWRkQ2hpbGQiLCJyZXN0b3JlIiwic2V0VGltZW91dCIsImRpc3Bvc2UiLCJzdG9yZUlkTGlzdCIsIl9tb3VudCIsInN0b3JlSWQiLCJhcmd1bWVudHMiLCJyZWYiLCJwYXJzZVJlZiIsInJlZHVjZVJpZ2h0IiwibW91bnRlZCIsImN0eCIsInN0b3JlIiwidGFza1F1ZXVlIiwiaXNTdG9yZUNsYXNzIiwibmFtZSIsImxlbmd0aCIsInNoaWZ0IiwiaXNTY29wZUNsYXNzIiwiJHBhcmVudCIsIm1vdW50Iiwic2xpY2UiLCJpc1N0b3JlIiwidW5kZWZpbmVkIiwic2V0U3RhdGUiLCJpc1Njb3BlIiwiX3dhdGNoU3RvcmUiLCJyZWxpbmsiLCJzaW5nbGV0b24iLCJzcmNDdHgiLCJ0YXJnZXRDdHgiLCJleHRlcm5hbCIsImZvcmNlIiwiaG90UmVsb2FkaW5nIiwiYWN0aXZlQWN0aW9ucyIsImluZm8iLCJ0bXAiLCJuZXh0U3RhdGUiLCJkZXN0cm95IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwiZ2V0Iiwic2V0IiwidiIsImFjdCIsImhhc093blByb3BlcnR5IiwiX190YXJnZXRTdG9yZXMiLCJkaXNwYXRjaCIsImlzU3RhYmxlIiwicHJvcGFnIiwibGlzdHMiLCJfX29yaWdpbiIsInNldEluaXRpYWwiLCJyZXZNYXAiLCJsYXN0UmV2cyIsInJlZktleXMiLCJzdHJpbmciLCJyZWR1Y2UiLCJyZXZzIiwicmV2IiwicmVmcyIsInJldGFpblN0b3JlcyIsImdldFVwZGF0ZXMiLCJkaXNwb3NlU3RvcmVzIiwic3BsaWNlIiwicmVmTGlzdCIsIm1peGVkQ1dVbm1vdW50IiwidW5Nb3VudEtleSIsImlzUmVhY3RDb21wb25lbnQiLCJ1bkJpbmQiLCJhbGlhcyIsInJldHJpZXZlIiwic3BsaXQiLCJvYmoiLCJjU2NvcGUiLCJyZXRyaWV2ZVN0b3JlIiwic3RvcmVzUmV2TWFwIiwibG9jYWwiLCJ1cGRhdGVkIiwiZ2V0U3RvcmVzUmV2cyIsIl9nZXRSZXZNYXAiLCJvdXRwdXQiLCJjaGlsZHMiLCJfZ2V0QWxsQ2hpbGRzIiwiY2ZnIiwicGFyZW50QWxpYXMiLCJzaWQiLCJzZXJpYWxpemVfZXgiLCJleGNsdWRlIiwid2l0aENoaWxkcyIsIndpdGhNaXhlZCIsIm5vcmVmcyIsInNlcmlhbGl6ZSIsIndpdGhDaGlsZCIsIndpdGhQYXJlbnRzIiwiaCIsImsiLCJib29sIiwic25hcCIsInRha2VTbmFwc2hvdEJ5S2V5Iiwic3RhcnRzV2l0aCIsInN1YnN0ciIsImdldFNuYXBzaG90QnlLZXkiLCJkZWxldGVTbmFwc2hvdEJ5S2V5IiwicmVwbGFjZSIsInBTdGF0ZSIsIl9yZWYiLCJhY3Rpb24iLCJhcmd6Iiwic3RhY2siLCJiQWN0cyIsInRyaWdnZXIiLCJjYiIsIm9uY2UiLCJ0aGVuIiwib25jZVN0YWJsZVRyZWUiLCJyZWFzb24iLCJlbWl0IiwiZXJyb3IiLCJzdGFiaWxpemVyVE0iLCJjbGVhclRpbWVvdXQiLCJwcm9wYWdUTSIsInJlbWFwcyIsInNjb3BlIiwid2FzU3RhYmxlIiwiaW5kZXhPZiIsInVuIiwiZGVzdHJveVRNIiwicmVtb3ZlTGlzdGVuZXIiLCJmb2xsb3dlciIsIl9ybUNoaWxkIiwiRXZlbnRFbWl0dGVyIiwiaXNQcm90b3R5cGVPZiIsIkVtaXR0ZXIiLCJfZXZlbnRzIiwiZXZ0Iiwid2Fsa25TZXQiLCJ3YWxrbkdldCIsImtleVdhbGtuU2V0Iiwia2V5V2Fsa25HZXQiLCJyZXF1aXJlIiwidmFsdWUiLCJpc0tleSIsImZpbHRlciIsIlRhc2tTZXF1ZW5jZXIiLCJvYmpQcm90byIsImdldFByb3RvdHlwZU9mIiwiX3N0YXRpYyIsImdldFNjb3BlIiwic3RhdGljU2NvcGUiLCJ3YXRjaHMiLCJ1c2UiLCJhcHBseSIsImluaXRpYWxTdGF0ZSIsImRlZmF1bHRTdGF0ZSIsIl91aWQiLCJfb25TdGFiaWxpemUiLCJfcGVyc2lzdGVuY2VUbSIsIl9jZmciLCJzY29wZU9iaiIsIiRzY29wZSIsIiRzdG9yZXMiLCIkYWN0aW9ucyIsIiRkaXNwYXRjaCIsIl9yZXZzIiwiX3JlcXVpcmUiLCJfc291cmNlcyIsIl91c2UiLCJtYXRjaCIsInJlZjIiLCJfZm9sbG93ZXJzIiwiX2NoYW5nZXNTVyIsIl9hZnRlckNvbnN0cnVjdG9yIiwiaW5pdGlhbERhdGEiLCJhcHBsaWVkIiwiX25leHRTdGF0ZSIsInNob3VsZEFwcGx5IiwibWFuYWdlZCIsIm5EYXRhcyIsInIiLCJjRGF0YXMiLCJpc0NvbXBsZXRlIiwiZm9sbG93IiwiY2FsbCIsImNoYW5nZXMiLCJfc3RhYmlsaXplciIsInB1c2hUYXNrIiwibnMiLCJoYXNEYXRhQ2hhbmdlIiwic3RhYmxlIiwiZm9yY2VkU3RhdGUiLCJuZXh0RGF0YSIsInN5bmMiLCJjaGFuZ2UiLCJwdXNoU3RhdGUiLCJzdGFiaWxpemUiLCJzSWQiLCJyZWZzQ291bnQiLCJwZXJzaXN0ZW50Iiwic2hvdWxkU2VyaWFsaXplIiwiZGF0YVJlZnMiLCJzdGF0ZUtleXMiLCJzdGF0ZVJlZnMiLCJpblJlZnNDb3VudCIsImluUmVmcyIsIl9fcHJvdG9fXyIsIm51bWJlciIsImltbWVkaWF0ZSIsInJlc3RvcmVSZWZQYXRoIiwicHJldmlvdXMiLCJtZSIsInNob3VsZFByb3BhZyIsIl9kZXN0cm95VE0iLCJyZW1vdmVBbGxMaXN0ZW5lcnMiLCJjU3RvcmUiLCJvcmlnaW4iLCJ0YXJnZXRSZXZzIiwidGFyZ2V0U2NvcGUiLCJpbml0aWFsT3V0cHV0cyIsIl9rZXkiLCJkZWZhdWx0TmFtZSIsIm8iLCJjdXJXZWlnaHQiLCJtYXhXZWlnaHQiLCJtaW5XZWlnaHQiLCJ0YXNrQ291bnQiLCJkZVN5bmMiLCJkZVN5bmNNYXhUYXNrcyIsInRhc2siLCJpc1J1bm5pbmciLCJlcnJvckNhdGNoZXIiLCJsYXN0RXJyb3IiLCJkaXNhYmxlIiwiaGFuZGxlRXJyb3IiLCJydW5Ob3ciLCJlbmFibGUiLCJhZGRFdmVudExpc3RlbmVyIiwicHJvY2VzcyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJydW4iLCJmcm9tIiwiRGF0ZSIsIm5vdyIsIndlaWdodCIsIk1hdGgiLCJtYXgiLCJtaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDdEJBOzs7O0FBQ0E7Ozs7OztBQWpCQTs7Ozs7Ozs7Ozs7Ozs7QUFjQSxLQUFJQSxVQUFXLE9BQU9DLE1BQVAsS0FBa0IsV0FBbkIsR0FBa0NBLE1BQWxDLEdBQTJDQyxNQUF6RDs7QUFLQSxLQUFNQyxLQUFLSCxRQUFRSSxVQUFSLElBQXNCLEVBQWpDOztBQUVBLEtBQUtKLFFBQVFJLFVBQWIsRUFBMEI7QUFDekJDLFdBQVFDLElBQVIsQ0FBYSwrREFBYjtBQUNBLEVBRkQsTUFHSzs7QUFFSk4sV0FBUUksVUFBUixHQUFxQkQsRUFBckI7QUFDQUksbUJBQU1DLEtBQU4sR0FBcUJBLGVBQXJCO0FBQ0FMLE1BQUdJLEtBQUgsR0FBcUJBLGVBQXJCO0FBQ0FKLE1BQUdLLEtBQUgsR0FBcUJBLGVBQXJCO0FBQ0FMLE1BQUdNLFFBQUgsR0FDQyxTQUFTQSxRQUFULENBQW1CQyxHQUFu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RixNQUFiO0FBQ0g7QUF6QlUsRSIsImZpbGUiOiIuLi8uLi9kaXN0L1JlU2NvcGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgOTY5YWE1MWE5MmYyNTI1NDc5NzciLCIvKlxuICogVGhlIE1JVCBMaWNlbnNlIChNSVQpXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTkuIFdpc2UgV2lsZCBXZWJcbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIOKAnFNvZnR3YXJl4oCdKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIOKAnEFTIElT4oCdLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiAqXG4gKiAgQGF1dGhvciA6IE5hdGhhbmFlbCBCcmF1blxuICogIEBjb250YWN0IDogbjh0ei5qc0BnbWFpbC5jb21cbiAqL1xuXG5sZXQgJGdsb2JhbCA9ICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykgPyB3aW5kb3cgOiBnbG9iYWw7XG5cbmltcG9ydCBTY29wZSBmcm9tIFwiLi9TY29wZVwiO1xuaW1wb3J0IFN0b3JlIGZyb20gXCIuL1N0b3JlXCI7XG5cbmNvbnN0IFJTID0gJGdsb2JhbC5fX19yZXNjb3BlIHx8IHt9O1xuXG5pZiAoICRnbG9iYWwuX19fcmVzY29wZSApIHtcblx0Y29uc29sZS53YXJuKFwiUmVTY29wZSBpcyBkZWZpbmVkIG11bHRpcGxlIHRpbWVzICEhIFxcbkNoZWNrIHlvdSdyZSBwYWNrYWdpbmdcIilcbn1cbmVsc2Uge1xuXHRcblx0JGdsb2JhbC5fX19yZXNjb3BlID0gUlM7XG5cdFNjb3BlLlN0b3JlICAgICAgICA9IFN0b3JlO1xuXHRSUy5TY29wZSAgICAgICAgICAgPSBTY29wZTtcblx0UlMuU3RvcmUgICAgICAgICAgID0gU3RvcmU7XG5cdFJTLnNjb3BlUmVmICAgICAgICA9XG5cdFx0ZnVuY3Rpb24gc2NvcGVSZWYoIG1hcCwga2V5ICkge1xuXHRcdFx0bWFwW2tleV0gPSBuZXcgU2NvcGUuc2NvcGVSZWYobWFwW2tleV0pO1xuXHRcdFx0cmV0dXJuIG1hcDtcblx0XHR9O1xuXHRcbn1cbmV4cG9ydCBkZWZhdWx0IFJTO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC5qcyIsIi8qXG4gKlxuICogQ29weXJpZ2h0IChDKSAyMDE5IE5hdGhhbmFlbCBCcmF1blxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cblxuaW1wb3J0IGlzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSBcImlzXCI7XG5pbXBvcnQgc2hvcnRpZCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tIFwic2hvcnRpZFwiO1xuaW1wb3J0IEV2ZW50RW1pdHRlciAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSBcIi4vdXRpbHMvRW1pdHRlclwiO1xuaW1wb3J0IHt3YWxrblNldCwgd2Fsa25HZXQsIGtleVdhbGtuU2V0LCBrZXlXYWxrbkdldH0gZnJvbSAnLi91dGlscy91dGlscyc7XG5cbmNvbnN0IF9fcHJvdG9fX3B1c2ggPSAoIHRhcmdldCwgaWQsIHBhcmVudCApID0+IHtcblx0ICAgICAgbGV0IGZuICAgICAgID0gZnVuY3Rpb24gKCkge1xuXHQgICAgICB9O1xuXHQgICAgICBmbi5wcm90b3R5cGUgPSBwYXJlbnQgPyBuZXcgcGFyZW50Ll9baWRdKCkgOiB0YXJnZXRbaWRdIHx8IHt9O1xuXHQgICAgICB0YXJnZXRbaWRdICAgPSBuZXcgZm4oKTtcblx0ICAgICAgdGFyZ2V0Ll9baWRdID0gZm47XG4gICAgICB9LFxuICAgICAgYWxsU2NvcGVzICAgICA9IHt9O1xuXG5cbi8qKlxuICogQmFzZSBTY29wZSBvYmplY3RcbiAqL1xuY2xhc3MgU2NvcGUgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuXHRcblx0c3RhdGljIHBlcnNpc3RlbmNlVG0gPSAxOy8vIGlmID4gMCwgd2lsbCB3YWl0ICdwZXJzaXN0ZW5jZVRtJyBtcyBiZWZvcmUgZGVzdHJveSB3aGVuIGRpc3Bvc2UgcmVhY2ggMFxuXHRzdGF0aWMgU3RvcmUgICAgICAgICA9IG51bGw7XG5cdHN0YXRpYyBzY29wZVJlZiAgICAgID0gZnVuY3Rpb24gc2NvcGVSZWYoIHBhdGggKSB7XG5cdFx0dGhpcy5wYXRoID0gcGF0aDtcblx0fTtcblx0c3RhdGljIHNjb3BlcyAgICAgICAgPSBhbGxTY29wZXM7Ly8gYWxsIGFjdGl2ZSBzY29wZXNcblx0LyoqXG5cdCAqIGdldCBhIHBhcnNlZCByZWZlcmVuY2UgbGlzdCBmcm9tIHN0YXRlTWFwXG5cdCAqIEBwYXJhbSBfcmVmXG5cdCAqIEByZXR1cm5zIHt7c3RvcmVJZCwgcGF0aCwgYWxpYXM6ICosIHJlZjogKn19XG5cdCAqL1xuXHRzdGF0aWMgc3RhdGVNYXBUb1JlZkxpc3QoIHNtLCBzdGF0ZSA9IHt9LCBfcmVmcyA9IFtdLCBhY3Rpb25zID0ge30sIHBhdGggPSBcIlwiICkge1xuXHRcdGxldCBhcHBsaWVyO1xuXHRcdE9iamVjdC5rZXlzKHNtKS5mb3JFYWNoKFxuXHRcdFx0a2V5ID0+IHtcblx0XHRcdFx0bGV0IGNwYXRoID0gcGF0aCA/IHBhdGggKyAnLicgKyBrZXkgOiBrZXk7XG5cdFx0XHRcdFxuXHRcdFx0XHRzbVtrZXldIGluc3RhbmNlb2YgU2NvcGUuc2NvcGVSZWZcblx0XHRcdFx0PyBfcmVmcy5wdXNoKHNtW2tleV0ucGF0aCArICc6JyArIGNwYXRoKVxuXHRcdFx0XHQ6IChzbVtrZXldICYmIHNtW2tleV0gaW5zdGFuY2VvZiBGdW5jdGlvbilcblx0XHRcdFx0ICA/IGtleSA9PSBcIiRhcHBseVwiXG5cdFx0XHRcdCAgICA/IGFwcGxpZXIgPSBzbVtrZXldXG5cdFx0XHRcdCAgICA6IGFjdGlvbnNba2V5XSA9IHNtW2tleV1cblx0XHRcdFx0ICA6IChzbVtrZXldICYmIHNtW2tleV0ucHJvdG90eXBlIGluc3RhbmNlb2YgU2NvcGUuU3RvcmUpXG5cdFx0XHRcdCAgICA/IF9yZWZzLnB1c2goc21ba2V5XS5hcyhjcGF0aCkpXG5cdFx0XHRcdCAgICA6IHN0YXRlW2NwYXRoXSA9IHNtW2tleV1cblx0XHRcdFx0Ly86IHRoaXMuc3RhdGVNYXBUb1JlZkxpc3Qoc21ba2V5XSwgX3JlZnMsIHBhdGggKyAnLicgKyBrZXkpXG5cdFx0XHR9XG5cdFx0KVxuXHRcdHJldHVybiBhcHBsaWVyO1xuXHR9XG5cdFxuXHRzdGF0aWMgZ2V0U2NvcGUoIHNjb3BlcyApIHtcblx0XHRsZXQgc2tleSA9IGlzLmFycmF5KHNjb3BlcykgPyBzY29wZXMuc29ydCgoIGEsIGIgKSA9PiB7XG5cdFx0XHRpZiAoIGEuZmlyc3RuYW1lIDwgYi5maXJzdG5hbWUgKSByZXR1cm4gLTE7XG5cdFx0XHRpZiAoIGEuZmlyc3RuYW1lID4gYi5maXJzdG5hbWUgKSByZXR1cm4gMTtcblx0XHRcdHJldHVybiAwO1xuXHRcdH0pLmpvaW4oJysnKSA6IHNjb3Blcztcblx0XHRyZXR1cm4gYWxsU2NvcGVzW3NrZXldID0gYWxsU2NvcGVzW3NrZXldIHx8IG5ldyBTY29wZSh7fSwgeyBpZDogc2tleSB9KTtcblx0fTtcblx0XG5cdFxuXHQvKipcblx0ICogSW5pdCBhIFJlU2NvcGUgc2NvcGVcblx0ICpcblx0ICogQHBhcmFtIHN0b3Jlc01hcCB7T2JqZWN0fSBPYmplY3Qgd2l0aCB0aGUgaW5pdGlhbCBzdG9yZXMgZGVmaW5pdGlvbiAvIGluc3RhbmNlc1xuXHQgKiBAcGFyYW0gY29uZmlnIHtPYmplY3R9IFNjb3BlIGNvbmZpZ1xuXHQgKiB7XG5cdCAqICAgICBwYXJlbnQge3Njb3BlfSBAb3B0aW9uYWwgcGFyZW50IHNjb3BlXG5cdCAqXG5cdCAqICAgICBpZCB7c3RyaW5nfSBAb3B0aW9uYWwgaWQgKCBpZiB0aGlzIGlkIGV4aXN0IHN0b3Jlc01hcCB3aWxsIGJlIG1lcmdlIG9uIHRoZSAnaWQnXG5cdCAqICAgICBzY29wZSlcblx0ICogICAgIGtleSB7c3RyaW5nfSBAb3B0aW9uYWwga2V5IG9mIHRoZSBzY29wZSAoIGlmIG5vIGlkIGlzIHNldCwgdGhlIHNjb3BlIGlkIHdpbGwgYmUgKHBhcmVudC5pZCsnPicra2V5KVxuXHQgKiAgICAgaW5jcmVtZW50SWQge2Jvb2x9IEBvcHRpb25hbCB0cnVlIHRvIGFkZCBhIHN1ZmZpeCBpZCwgaWYgdGhlIHByb3ZpZGVkIGtleSBvciBpZCBnbG9iYWxseSBleGlzdFxuXHQgKlxuXHQgKiAgICAgc3RhdGUge09iamVjdH0gQG9wdGlvbmFsIGluaXRpYWwgc3RhdGUgYnkgc3RvcmUgYWxpYXNcblx0ICogICAgIGRhdGEge09iamVjdH0gQG9wdGlvbmFsIGluaXRpYWwgZGF0YSBieSBzdG9yZSBhbGlhc1xuXHQgKlxuXHQgKiAgICAgcm9vdEVtaXR0ZXIge2Jvb2x9IEBvcHRpb25hbCB0cnVlIHRvIG5vdCBiZWluZyBkZXN0YWJpbGl6ZWQgYnkgcGFyZW50XG5cdCAqICAgICBib3VuZGVkQWN0aW9ucyB7YXJyYXkgfCByZWdleHB9IEBvcHRpb25hbCBsaXN0IG9yIHJlZ2V4cCBvZiBhY3Rpb25zIG5vdCBwcm9wYWdhdGVkIHRvIHRoZSBwYXJlbnRcblx0ICogICAgIGF1dG9EZXN0cm95IHt0cnVlIHwgZmFsc2UgfCAnaW5oZXJpdCd9XG5cdCAqICAgICBwZXJzaXN0ZW5jZVRtIHtudW1iZXIpIGlmID4gMCwgd2lsbCB3YWl0ICdwZXJzaXN0ZW5jZVRtJyBtcyBiZWZvcmUgZGVzdHJveSB3aGVuXG5cdCAqICAgICBkaXNwb3NlIHJlYWNoIDAgYXV0b0Rlc3Ryb3kgIHtib29sfSB3aWxsIHRyaWdnZXIgcmV0YWluICYgZGlzcG9zZSBhZnRlciBzdGFydFxuXHQgKiAgfVxuXHQgKiBAcmV0dXJucyB7U2NvcGV9XG5cdCAqL1xuXHRjb25zdHJ1Y3Rvciggc3RvcmVzTWFwLCB7IHBhcmVudCwgdXBwZXJTY29wZSwga2V5LCBpZCwgc25hcHNob3QsIHN0YXRlLCBkYXRhLCBpbmNyZW1lbnRJZCA9ICEha2V5LCBwZXJzaXN0ZW5jZVRtLCBhdXRvRGVzdHJveSwgcm9vdEVtaXR0ZXIsIGJvdW5kZWRBY3Rpb25zIH0gPSB7fSApIHtcblx0XHRzdXBlcigpO1xuXHRcdGxldCBfID0ge1xuXHRcdFx0a2V5UElEOiAodXBwZXJTY29wZSAmJiB1cHBlclNjb3BlLl9pZCB8fCBwYXJlbnQgJiYgcGFyZW50Ll9pZCB8fCBzaG9ydGlkLmdlbmVyYXRlKCkpLFxuXHRcdFx0a2V5LFxuXHRcdFx0aW5jcmVtZW50SWQsXG5cdFx0XHRiYXNlSWQ6IGlkXG5cdFx0fTtcblx0XHRcblx0XHRcblx0XHQvLyBnZW5lcmF0ZSAvIHNldCB0aGlzIHNjb3BlIGlkXG5cdFx0aWQgPSBpZCB8fCBrZXkgJiYgKF8ua2V5UElEICsgJz4nICsga2V5KTtcblx0XHRcblx0XHRfLmlzTG9jYWxJZCA9ICFpZDtcblx0XHRcblx0XHRpZCA9IGlkIHx8IChcIl9fX19fXCIgKyBzaG9ydGlkLmdlbmVyYXRlKCkpO1xuXHRcdFxuXHRcdGlmICggYWxsU2NvcGVzW2lkXSAmJiAhaW5jcmVtZW50SWQgKSB7Ly8gb3ZlcndyaXRlIGV4aXN0aW5nIHNjb3BlXG5cdFx0XHR0aGlzLl9pZCA9IGlkO1xuXHRcdFx0YWxsU2NvcGVzW2lkXS5yZWdpc3RlcihzdG9yZXNNYXApO1xuXHRcdFx0cmV0dXJuIGFsbFNjb3Blc1tpZF1cblx0XHR9XG5cdFx0ZWxzZSBpZiAoIGFsbFNjb3Blc1tpZF0gJiYgaW5jcmVtZW50SWQgKSB7Ly8gZ2VuZXJhdGUga2V5IGlkXG5cdFx0XHRsZXQgaSA9IC0xO1xuXHRcdFx0d2hpbGUgKCBhbGxTY29wZXNbaWQgKyAnWycgKyAoKytpKSArICddJ10gKSA7XG5cdFx0XHRpZCA9IGlkICsgJ1snICsgaSArICddJztcblx0XHR9XG5cdFx0XG5cdFx0Ly8gcmVnaXN0ZXIgdGhpcyBzY29wZSBpbiB0aGUgc3RhdGljIFNjb3BlLnNjb3Blc1xuXHRcdGFsbFNjb3Blc1tpZF0gPSB0aGlzO1xuXHRcdFxuXHRcdHRoaXMuX2lkICA9IGlkO1xuXHRcdHRoaXMuX3JldiA9IDA7XG5cdFx0XG5cdFx0dGhpcy5fID0gXztcblx0XHRcblx0XHR0aGlzLmFjdGlvbnMgPSB7fTtcblx0XHR0aGlzLnN0b3JlcyAgPSB7fTtcblx0XHR0aGlzLnN0YXRlICAgPSB7fTtcblx0XHR0aGlzLmRhdGEgICAgPSB7fTtcblx0XHRcblx0XHR0aGlzLnBhcmVudCA9IHBhcmVudDtcblx0XHRcblx0XHRpZiAoIGF1dG9EZXN0cm95ID09ICdpbmhlcml0JyApXG5cdFx0XHRhdXRvRGVzdHJveSA9IHBhcmVudCAmJiBwYXJlbnQuX2F1dG9EZXN0cm95O1xuXHRcdFxuXHRcdHRoaXMuX2F1dG9EZXN0cm95ID0gYXV0b0Rlc3Ryb3k7XG5cdFx0Xy5wZXJzaXN0ZW5jZVRtICAgPSBwZXJzaXN0ZW5jZVRtIHx8IHRoaXMuY29uc3RydWN0b3IucGVyc2lzdGVuY2VUbTtcblx0XHRcblx0XHRpZiAoIHBhcmVudCAmJiBwYXJlbnQuZGVhZCApXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDYW4ndCB1c2UgYSBkZWFkIHNjb3BlIGFzIHBhcmVudCAhXCIpO1xuXHRcdFxuXHRcdF9fcHJvdG9fX3B1c2godGhpcywgJ2FjdGlvbnMnLCBwYXJlbnQpO1xuXHRcdF9fcHJvdG9fX3B1c2godGhpcywgJ3N0b3JlcycsIHBhcmVudCk7XG5cdFx0X19wcm90b19fcHVzaCh0aGlzLCAnc3RhdGUnLCBwYXJlbnQpO1xuXHRcdF9fcHJvdG9fX3B1c2godGhpcywgJ2RhdGEnLCBwYXJlbnQpO1xuXHRcdFxuXHRcdHRoaXMuc291cmNlcyAgICAgID0gW107XG5cdFx0Xy5jaGlsZFNjb3BlcyAgICAgPSBbXTtcblx0XHRfLmNoaWxkU2NvcGVzTGlzdCA9IFtdO1xuXHRcdF8udW5TdGFibGVDaGlsZHMgID0gMDtcblx0XHRfLnNlZW5DaGlsZHMgICAgICA9IDA7XG5cdFx0Xy5fbGlzdGVuaW5nICAgICAgPSB7fTtcblx0XHRfLl9zY29wZSAgICAgICAgICA9IHt9O1xuXHRcdF8uX21peGVkICAgICAgICAgID0gW107XG5cdFx0Xy5fbWl4ZWRMaXN0ICAgICAgPSBbXTtcblx0XHRfLmZvbGxvd2VycyAgICAgICA9IFtdO1xuXHRcdFxuXHRcdHRoaXMuX19yZXRhaW5zID0geyBhbGw6IDAgfTtcblx0XHR0aGlzLl9fbG9ja3MgICA9IHsgYWxsOiAxIH07XG5cdFx0XG5cdFx0Ly8gdG9kb1xuXHRcdF8uX2JvdW5kZWRBY3Rpb25zID0gaXMuYXJyYXkoYm91bmRlZEFjdGlvbnMpXG5cdFx0ICAgICAgICAgICAgICAgICAgICA/IHsgdGVzdDogYm91bmRlZEFjdGlvbnMuaW5jbHVkZXMuYmluZChib3VuZGVkQWN0aW9ucykgfVxuXHRcdCAgICAgICAgICAgICAgICAgICAgOiBib3VuZGVkQWN0aW9ucztcblx0XHRcblx0XHQvLyByZWdpc3RlciB0byB0aGUgcGFyZW50IHNjb3BlXG5cdFx0aWYgKCBwYXJlbnQgKSB7XG5cdFx0XHRwYXJlbnQucmV0YWluKFwiaXNNeVBhcmVudFwiKTtcblx0XHRcdGlmICggIXJvb3RFbWl0dGVyICkge1xuXHRcdFx0XHQhcGFyZW50Ll9zdGFibGUgJiYgdGhpcy53YWl0KFwid2FpdGluZ1BhcmVudFwiKTtcblx0XHRcdFx0cGFyZW50Lm9uKF8uX3BhcmVudExpc3QgPSB7XG5cdFx0XHRcdFx0J3N0YWJsZScgIDogcyA9PiB0aGlzLnJlbGVhc2UoXCJ3YWl0aW5nUGFyZW50XCIpLFxuXHRcdFx0XHRcdCd1bnN0YWJsZSc6IHMgPT4gdGhpcy53YWl0KFwid2FpdGluZ1BhcmVudFwiKSxcblx0XHRcdFx0XHQndXBkYXRlJyAgOiBzID0+IHRoaXMuX3Byb3BhZygpXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdHBhcmVudC5vbihfLl9wYXJlbnRMaXN0ID0ge1xuXHRcdFx0XHRcdCd1cGRhdGUnOiBzID0+IHRoaXMuX3Byb3BhZygpXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdFx0Ly8gdGhpcy5yZWdpc3RlcihwYXJlbnQuX19zY29wZSwgc3RhdGUsIGRhdGEpO1xuXHRcdH1cblx0XHRcblx0XHQvLyByZWdpc3RlciB0aGlzIHNjb3BlIHN0b3Jlc1xuXHRcdHRoaXMucmVnaXN0ZXIoc3RvcmVzTWFwLCBzdGF0ZSwgZGF0YSk7XG5cdFx0dGhpcy5fX2xvY2tzLmFsbC0tO1xuXHRcdHRoaXMuX3N0YWJsZSA9ICF0aGlzLl9fbG9ja3MuYWxsO1xuXHRcdFxuXHRcdGlmICggcGFyZW50ICkge1xuXHRcdFx0cGFyZW50Ll9hZGRDaGlsZCh0aGlzKTtcblx0XHR9XG5cdFx0XG5cdFx0XG5cdFx0Ly8gcmVzdG9yZSBzbmFwc2hvdHNcblx0XHR0aGlzLnJlc3RvcmUoc25hcHNob3QpO1xuXHRcdFxuXHRcdFxuXHRcdGlmICggYXV0b0Rlc3Ryb3kgKVxuXHRcdFx0c2V0VGltZW91dChcblx0XHRcdFx0dG0gPT4ge1xuXHRcdFx0XHRcdHRoaXMucmV0YWluKFwiYXV0b0Rlc3Ryb3lcIik7XG5cdFx0XHRcdFx0dGhpcy5kaXNwb3NlKFwiYXV0b0Rlc3Ryb3lcIik7XG5cdFx0XHRcdH1cblx0XHRcdClcblx0XHRcblx0fVxuXHRcblx0LyoqXG5cdCAqXG5cdCAqIE1vdW50IHRoZSBzdG9yZXMgaW4gc3RvcmVzTGlzdCwgaW4gdGhpcyBzY29wZSBvciBpbiBpdHMgcGFyZW50cyBvciBtaXhlZCBzY29wZXNcblx0ICpcblx0ICogQHBhcmFtIHN0b3JlSWRMaXN0IHtzdHJpbmd8c3RvcmVSZWZ9IFN0b3JlIG5hbWUsIEFycmF5IG9mIFN0b3JlIG5hbWVzLCBvciBSZXNjb3BlXG5cdCAqICAgICBzdG9yZSByZWYgZnJvbSBTdG9yZTo6YXMgb3IgU3RvcmU6YXNcblx0ICogQHBhcmFtIHN0YXRlXG5cdCAqIEBwYXJhbSBkYXRhXG5cdCAqIEByZXR1cm5zIHtTY29wZX1cblx0ICovXG5cdG1vdW50KCBzdG9yZUlkTGlzdCwgc25hcHNob3QsIHN0YXRlLCBkYXRhICkge1xuXHRcdGlmICggaXMuYXJyYXkoc3RvcmVJZExpc3QpICkge1xuXHRcdFx0c3RvcmVJZExpc3QuZm9yRWFjaChzdG9yZUlkID0+IHRoaXMuX21vdW50KHN0b3JlSWQsIHNuYXBzaG90LCBzdGF0ZSwgZGF0YSkpO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdHRoaXMuX21vdW50KC4uLmFyZ3VtZW50cyk7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cdFxuXHRfbW91bnQoIGlkLCBzbmFwc2hvdCwgc3RhdGUsIGRhdGEgKSB7XG5cdFx0bGV0IHJlZiwgXyA9IHRoaXMuXztcblx0XHRcblx0XHRyZWYgPSB0aGlzLnBhcnNlUmVmKGlkKVxuXHRcdFxuXHRcdGlmICggaWQgPT0gXCIkcGFyZW50XCIgKSByZXR1cm47XG5cdFx0aWYgKCAhXy5fc2NvcGVbcmVmLnN0b3JlSWRdICkgey8vYXNrIG1peGVkIHx8IHBhcmVudFxuXHRcdFx0aWYgKCBfLl9taXhlZC5yZWR1Y2VSaWdodCgoIG1vdW50ZWQsIGN0eCApID0+IChtb3VudGVkIHx8IGN0eC5fbW91bnQoaWQsIHNuYXBzaG90LCBzdGF0ZSwgZGF0YSkpLCBmYWxzZSkgfHxcblx0XHRcdFx0IXRoaXMucGFyZW50IClcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0cmV0dXJuIHRoaXMucGFyZW50Ll9tb3VudCguLi5hcmd1bWVudHMpO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdGxldCBzdG9yZSA9IF8uX3Njb3BlW3JlZi5zdG9yZUlkXSwgdGFza1F1ZXVlID0gW107XG5cdFx0XHRpZiAoIFNjb3BlLmlzU3RvcmVDbGFzcyhzdG9yZSkgKSB7XG5cdFx0XHRcdF8uX3Njb3BlW3JlZi5zdG9yZUlkXSA9IG5ldyBzdG9yZSh0aGlzLCB7XG5cdFx0XHRcdFx0Ly9zbmFwc2hvdCxcblx0XHRcdFx0XHRuYW1lOiByZWYuc3RvcmVJZCxcblx0XHRcdFx0XHRzdGF0ZSxcblx0XHRcdFx0XHRkYXRhXG5cdFx0XHRcdH0sIHRhc2tRdWV1ZSk7XG5cdFx0XHRcdHdoaWxlICggdGFza1F1ZXVlLmxlbmd0aCApIHRhc2tRdWV1ZS5zaGlmdCgpKCk7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIGlmICggU2NvcGUuaXNTY29wZUNsYXNzKHN0b3JlKSApIHtcblx0XHRcdFx0c3RvcmUgPSBfLl9zY29wZVtyZWYuc3RvcmVJZF0gPSBuZXcgc3RvcmUoeyAkcGFyZW50OiB0aGlzIH0sIHtcblx0XHRcdFx0XHRrZXkgICAgICAgIDogcmVmLnN0b3JlSWQsXG5cdFx0XHRcdFx0aW5jcmVtZW50SWQ6IHRydWUsXG5cdFx0XHRcdFx0dXBwZXJTY29wZSA6IHRoaXNcblx0XHRcdFx0XHQvL2F1dG9EZXN0cm95OiB0cnVlXG5cdFx0XHRcdFx0Ly9wYXJlbnQ6IHRoaXNcblx0XHRcdFx0fSk7XG5cdFx0XHRcdC8vXy5fc2NvcGVbIHJlZi5zdG9yZUlkIF0ucmV0YWluKFwic2NvcGVkQ2hpbGRTY29wZVwiKTtcblx0XHRcdFx0Ly9fd2F0Y2hTdG9yZShyZWYuc3RvcmVJZCk7XG5cdFx0XHRcdGlmICggcmVmLnBhdGgubGVuZ3RoID4gMSApXG5cdFx0XHRcdFx0Xy5fc2NvcGVbcmVmLnN0b3JlSWRdLm1vdW50KHJlZi5wYXRoLnNsaWNlKDEpLmpvaW4oJy4nKSwgc25hcHNob3QsIHN0YXRlLCBkYXRhKVxuXHRcdFx0XHQvL2Vsc2UgcmV0dXJuIF8uX3Njb3BlWyByZWYuc3RvcmVJZCBdO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCBTY29wZS5pc1N0b3JlKHN0b3JlKSApIHtcblx0XHRcdFx0aWYgKCBzdGF0ZSAhPT0gdW5kZWZpbmVkICYmIGRhdGEgPT09IHVuZGVmaW5lZCApXG5cdFx0XHRcdFx0c3RvcmUuc2V0U3RhdGUoc3RhdGUpO1xuXHRcdFx0XHRlbHNlIGlmICggc3RhdGUgIT09IHVuZGVmaW5lZCApXG5cdFx0XHRcdFx0c3RvcmUuc3RhdGUgPSBzdGF0ZTtcblx0XHRcdFx0XG5cdFx0XHRcdGlmICggZGF0YSAhPT0gdW5kZWZpbmVkIClcblx0XHRcdFx0XHRzdG9yZS5wdXNoKGRhdGEpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCBTY29wZS5pc1Njb3BlKHN0b3JlKSApIHtcblx0XHRcdFx0aWYgKCBzdGF0ZSAhPT0gdW5kZWZpbmVkIClcblx0XHRcdFx0XHRzdG9yZS5zZXRTdGF0ZShzdGF0ZSk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLl93YXRjaFN0b3JlKHJlZi5zdG9yZUlkKTtcblx0XHR9XG5cdFx0XG5cdFx0XG5cdFx0cmV0dXJuIF8uX3Njb3BlW3JlZi5zdG9yZUlkXTtcblx0fVxuXHRcblx0LyoqXG5cdCAqIFJlZ2lzdGVyIHN0b3JlcyBpbiBzdG9yZXNNYXAgJiBsaW5rIHRoZW0gaW4gdGhlIHByb3Rvc1xuXHQgKiBAcGFyYW0gc3RvcmVzTWFwXG5cdCAqIEBwYXJhbSBzdGF0ZVxuXHQgKiBAcGFyYW0gZGF0YVxuXHQgKi9cblx0cmVnaXN0ZXIoIHN0b3Jlc01hcCwgc3RhdGUgPSB7fSwgZGF0YSA9IHt9ICkge1xuXHRcdHRoaXMucmVsaW5rKHN0b3Jlc01hcCwgdGhpcywgZmFsc2UsIGZhbHNlKTtcblx0XHRPYmplY3Qua2V5cyhzdG9yZXNNYXApLmZvckVhY2goXG5cdFx0XHRpZCA9PiB7XG5cdFx0XHRcdGlmICggaWQgPT0gXCIkcGFyZW50XCIgKSByZXR1cm47XG5cdFx0XHRcdGlmICggc3RvcmVzTWFwW2lkXS5zaW5nbGV0b24gfHwgKGlzLmZuKHN0b3Jlc01hcFtpZF0pICYmIChzdGF0ZVtpZF0gfHwgZGF0YVtpZF0pKSApIHtcblx0XHRcdFx0XHR0aGlzLl9tb3VudChpZCwgdW5kZWZpbmVkLCBzdGF0ZVtpZF0sIGRhdGFbaWRdKVxuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2UgaWYgKCBzdGF0ZVtpZF0gfHwgZGF0YVtpZF0gKSB7XG5cdFx0XHRcdFx0aWYgKCBkYXRhW2lkXSApIHtcblx0XHRcdFx0XHRcdGlmICggc3RhdGVbaWRdIClcblx0XHRcdFx0XHRcdFx0dGhpcy5zdG9yZXNbaWRdLnN0YXRlID0gc3RhdGVbaWRdO1xuXHRcdFx0XHRcdFx0dGhpcy5zdG9yZXNbaWRdLnB1c2goZGF0YVtpZF0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRlbHNlIGlmICggc3RhdGVbaWRdICkge1xuXHRcdFx0XHRcdFx0dGhpcy5zdG9yZXNbaWRdLnNldFN0YXRlKHN0YXRlW2lkXSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMuX3dhdGNoU3RvcmUoaWQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0KVxuXHRcdFxuXHR9XG5cdFxuXHQvKipcblx0ICogTWFwIHNyY0N0eCBzdG9yZSdzIG9uIHRhcmdldEN0eCBoZWFkZXJzIHByb3RvJ3Ncblx0ICogQHBhcmFtIHNyY0N0eFxuXHQgKiBAcGFyYW0gdGFyZ2V0Q3R4XG5cdCAqIEBwYXJhbSBzdGF0ZVxuXHQgKiBAcGFyYW0gZGF0YVxuXHQgKi9cblx0cmVsaW5rKCBzcmNDdHgsIHRhcmdldEN0eCA9IHRoaXMsIGV4dGVybmFsLCBmb3JjZSApIHtcblx0XHRsZXQgXyA9IHRoaXMuXztcblx0XHRPYmplY3Qua2V5cyhzcmNDdHgpXG5cdFx0ICAgICAgLmZvckVhY2goXG5cdFx0XHQgICAgICBpZCA9PiB7XG5cdFx0XHRcdCAgICAgIGxldCBob3RSZWxvYWRpbmcsIGFjdGlvbnMsIGFjdGl2ZUFjdGlvbnM7XG5cdFx0XHRcdFxuXHRcdFx0XHQgICAgICAvLyBzYW1lIHN0b3JlIGRlZiA6IGlnbm9yZVxuXHRcdFx0XHQgICAgICBpZiAoICFmb3JjZSAmJiB0YXJnZXRDdHguXy5fc2NvcGVbaWRdID09PSBzcmNDdHhbaWRdIHx8XG5cdFx0XHRcdFx0ICAgICAgdGFyZ2V0Q3R4Ll8uX3Njb3BlW2lkXSAmJiAodGFyZ2V0Q3R4Ll8uX3Njb3BlW2lkXS5jb25zdHJ1Y3RvciA9PT0gc3JjQ3R4W2lkXSkgKVxuXHRcdFx0XHRcdCAgICAgIHJldHVybjtcblx0XHRcdFx0XG5cdFx0XHRcdCAgICAgIC8vIGhvdCBzd2l0Y2hcblx0XHRcdFx0ICAgICAgaWYgKCAhZm9yY2UgJiYgdGFyZ2V0Q3R4Ll8uX3Njb3BlW2lkXSApIHtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHQgICAgICBpZiAoICFleHRlcm5hbCAmJiAhaXMuZm4odGFyZ2V0Q3R4Ll8uX3Njb3BlW2lkXSkgKSB7XG5cdFx0XHRcdFx0XHQgICAgICBjb25zb2xlLmluZm8oXCJSZXNjb3BlIFN0b3JlIDogXCIsIGlkLCBcIiBhbHJlYWR5IGV4aXN0IGluIHRoaXMgc2NvcGUgISAoIEhvdCBzd2l0Y2hpbmcgdGhlIHN0b3JlICkgISEhXCIpO1xuXHRcdFx0XHRcdFx0ICAgICAgbGV0IHRtcCAgICAgICAgICAgICAgICA9IHRhcmdldEN0eC5fLl9zY29wZVtpZF07XG5cdFx0XHRcdFx0XHQgICAgICB0YXJnZXRDdHguXy5fc2NvcGVbaWRdID0gc3JjQ3R4W2lkXTtcblx0XHRcdFx0XHRcdCAgICAgIGhvdFJlbG9hZGluZyAgICAgICAgICAgPSB0bXAubmV4dFN0YXRlO1xuXHRcdFx0XHRcdFx0ICAgICAgdG1wLmRlc3Ryb3koKTtcblx0XHRcdFx0XHQgICAgICB9XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0ICAgICAgaWYgKCAhZXh0ZXJuYWwgJiYgaXMuZm4odGFyZ2V0Q3R4Ll8uX3Njb3BlW2lkXSkgKVxuXHRcdFx0XHRcdFx0ICAgICAgdGFyZ2V0Q3R4Ll8uX3Njb3BlW2lkXSA9IHNyY0N0eFtpZF07XG5cdFx0XHRcdFx0XG5cdFx0XHRcdCAgICAgIH1cblx0XHRcdFx0ICAgICAgZWxzZSBpZiAoICFmb3JjZSAmJiAhZXh0ZXJuYWwgKVxuXHRcdFx0XHRcdCAgICAgIF8uX3Njb3BlW2lkXSA9IHNyY0N0eFtpZF07XG5cdFx0XHRcdFxuXHRcdFx0XHRcblx0XHRcdFx0ICAgICAgLy8gbWFwIHRoZSBzdG9yZSBpZFxuXHRcdFx0XHQgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoXG5cdFx0XHRcdFx0ICAgICAgdGFyZ2V0Q3R4Ll8uc3RvcmVzLnByb3RvdHlwZSxcblx0XHRcdFx0XHQgICAgICBpZCxcblx0XHRcdFx0XHQgICAgICB7XG5cdFx0XHRcdFx0XHQgICAgICBlbnVtZXJhYmxlICA6IHRydWUsXG5cdFx0XHRcdFx0XHQgICAgICBjb25maWd1cmFibGU6IHRydWUsXG5cdFx0XHRcdFx0XHQgICAgICBnZXQgICAgICAgICA6ICgpID0+IF8uX3Njb3BlW2lkXVxuXHRcdFx0XHRcdCAgICAgIH1cblx0XHRcdFx0ICAgICAgKTtcblx0XHRcdFx0XG5cdFx0XHRcdCAgICAgIGFjdGl2ZUFjdGlvbnMgPSB0YXJnZXRDdHguXy5hY3Rpb25zLnByb3RvdHlwZTtcblx0XHRcdFx0ICAgICAgLy8gbm90IG1hcHBpbmcgaGllcmFyY2hpYyBzY29wZXNcblx0XHRcdFx0ICAgICAgaWYgKCBpZCAhPT0gXCIkcGFyZW50XCIgKSB7XG5cdFx0XHRcdFx0ICAgICAgLy8gbWFwIHN0YXRlICYgZGF0YVxuXHRcdFx0XHRcdCAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShcblx0XHRcdFx0XHRcdCAgICAgIHRhcmdldEN0eC5fLnN0YXRlLnByb3RvdHlwZSxcblx0XHRcdFx0XHRcdCAgICAgIGlkLFxuXHRcdFx0XHRcdFx0ICAgICAge1xuXHRcdFx0XHRcdFx0XHQgICAgICBlbnVtZXJhYmxlICA6IHRydWUsXG5cdFx0XHRcdFx0XHRcdCAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcblx0XHRcdFx0XHRcdFx0ICAgICAgZ2V0ICAgICAgICAgOiAoKSA9PiAoXy5fc2NvcGVbaWRdICYmIF8uX3Njb3BlW2lkXS5zdGF0ZSksXG5cdFx0XHRcdFx0XHRcdCAgICAgIHNldCAgICAgICAgIDogKCB2ICkgPT4gKHRoaXMuX21vdW50KGlkLCB1bmRlZmluZWQsIHYpKVxuXHRcdFx0XHRcdFx0ICAgICAgfVxuXHRcdFx0XHRcdCAgICAgICk7XG5cdFx0XHRcdFx0ICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFxuXHRcdFx0XHRcdFx0ICAgICAgdGFyZ2V0Q3R4Ll8uZGF0YS5wcm90b3R5cGUsXG5cdFx0XHRcdFx0XHQgICAgICBpZCxcblx0XHRcdFx0XHRcdCAgICAgIHtcblx0XHRcdFx0XHRcdFx0ICAgICAgZW51bWVyYWJsZSAgOiB0cnVlLFxuXHRcdFx0XHRcdFx0XHQgICAgICBjb25maWd1cmFibGU6IHRydWUsXG5cdFx0XHRcdFx0XHRcdCAgICAgIGdldCAgICAgICAgIDogKCkgPT4gKF8uX3Njb3BlW2lkXSAmJiBfLl9zY29wZVtpZF0uZGF0YSksXG5cdFx0XHRcdFx0XHRcdCAgICAgIHNldCAgICAgICAgIDogKCB2ICkgPT4gKHRoaXMuX21vdW50KGlkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdikpXG5cdFx0XHRcdFx0XHQgICAgICB9XG5cdFx0XHRcdFx0ICAgICAgKTtcblx0XHRcdFx0XHQgICAgICAvLyBhY3Rpb24gbWFwcGluZ1xuXHRcdFx0XHRcdCAgICAgIGFjdGlvbnMgPSBzcmNDdHhbaWRdIGluc3RhbmNlb2YgU2NvcGUuU3RvcmVcblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgPyBzcmNDdHhbaWRdLmNvbnN0cnVjdG9yLmFjdGlvbnNcblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgOiBzcmNDdHhbaWRdLmFjdGlvbnM7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0ICAgICAgaWYgKCBTY29wZS5pc1Njb3BlQ2xhc3MoXy5fc2NvcGVbaWRdKSApXG5cdFx0XHRcdFx0XHQgICAgICB0aGlzLl9tb3VudChpZCk7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0ICAgICAgaWYgKCBTY29wZS5pc1Njb3BlKF8uX3Njb3BlW2lkXSkgKSB7Ly8gbWFwIGhpZXJhcmNoaWMgc2NvcGVzXG5cdFx0XHRcdFx0XHQgICAgICBhY3RpdmVBY3Rpb25zW2lkXSA9IF8uX3Njb3BlW2lkXS5hY3Rpb25zO1xuXHRcdFx0XHRcdCAgICAgIH1cblx0XHRcdFx0XHQgICAgICBlbHNlIGlmICggIVNjb3BlLmlzU3RvcmUoXy5fc2NvcGVbaWRdKSAmJiAhU2NvcGUuaXNTdG9yZUNsYXNzKF8uX3Njb3BlW2lkXSkgKVxuXHRcdFx0XHRcdFx0ICAgICAgcmV0dXJuO1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdCAgICAgIGFjdGlvbnMgJiZcblx0XHRcdFx0XHQgICAgICBPYmplY3Qua2V5cyhhY3Rpb25zKVxuXHRcdFx0XHRcdCAgICAgICAgICAgIC5mb3JFYWNoKFxuXHRcdFx0XHRcdFx0ICAgICAgICAgICAgKCBhY3QgKSA9PiB7XG5cdFx0XHRcdFx0XHRcdCAgICAgICAgICAgIGlmICggYWN0aXZlQWN0aW9ucy5oYXNPd25Qcm9wZXJ0eShhY3QpIClcblx0XHRcdFx0XHRcdFx0XHQgICAgICAgICAgICBhY3RpdmVBY3Rpb25zW2FjdF0uX190YXJnZXRTdG9yZXMrKztcblx0XHRcdFx0XHRcdFx0ICAgICAgICAgICAgZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0ICAgICAgICAgICAgYWN0aXZlQWN0aW9uc1thY3RdICAgICAgICAgICAgICAgID0gdGhpcy5kaXNwYXRjaC5iaW5kKHRoaXMsIGFjdCk7XG5cdFx0XHRcdFx0XHRcdFx0ICAgICAgICAgICAgYWN0aXZlQWN0aW9uc1thY3RdLl9fdGFyZ2V0U3RvcmVzID0gMTtcblx0XHRcdFx0XHRcdFx0ICAgICAgICAgICAgfVxuXHRcdFx0XHRcdFx0ICAgICAgICAgICAgfVxuXHRcdFx0XHRcdCAgICAgICAgICAgICk7XG5cdFx0XHRcdCAgICAgIH1cblx0XHRcdFx0ICAgICAgZWxzZSB7XG5cdFx0XHRcdFx0ICAgICAgYWN0aXZlQWN0aW9uc1tpZF0gPSBzcmNDdHhbaWRdLmFjdGlvbnM7XG5cdFx0XHRcdCAgICAgIH1cblx0XHRcdFx0XG5cdFx0XHRcdFxuXHRcdFx0XHQgICAgICAvLyByZW1vdW50IHRoZSBzdG9yZSBpZiBpdCB3YXMgaG90IHJlbG9hZGVkXG5cdFx0XHRcdCAgICAgIGlmICggaG90UmVsb2FkaW5nIClcblx0XHRcdFx0XHQgICAgICB0aGlzLl9tb3VudChpZCwgbnVsbCwgaG90UmVsb2FkaW5nKTtcblx0XHRcdCAgICAgIH1cblx0XHQgICAgICApXG5cdH1cblx0XG5cdC8qKlxuXHQgKiBNYWtlIHRoaXMgc2NvcGUgd2F0Y2hpbmcgdGhlIGxvY2FsIHN0b3JlICdpZCdcblx0ICogQHBhcmFtIGlkXG5cdCAqIEByZXR1cm5zIHtib29sZWFufVxuXHQgKiBAcHJpdmF0ZVxuXHQgKi9cblx0X3dhdGNoU3RvcmUoIGlkICkge1xuXHRcdGxldCBfID0gdGhpcy5fO1xuXHRcdGlmICggIV8uX2xpc3RlbmluZ1tpZF0gJiYgIWlzLmZuKF8uX3Njb3BlW2lkXSkgKSB7XG5cdFx0XHQhXy5fc2NvcGVbaWRdLl9hdXRvRGVzdHJveSAmJiBfLl9zY29wZVtpZF0ucmV0YWluKFwic2NvcGVkXCIpO1xuXHRcdFx0IV8uX3Njb3BlW2lkXS5pc1N0YWJsZSgpICYmIHRoaXMud2FpdChpZCk7XG5cdFx0XHRfLl9zY29wZVtpZF0ub24oXG5cdFx0XHRcdF8uX2xpc3RlbmluZ1tpZF0gPSB7XG5cdFx0XHRcdFx0J2Rlc3Ryb3knIDogcyA9PiB7XG5cdFx0XHRcdFx0XHRkZWxldGUgXy5fbGlzdGVuaW5nW2lkXTtcblx0XHRcdFx0XHRcdF8uX3Njb3BlW2lkXSA9IF8uX3Njb3BlW2lkXS5jb25zdHJ1Y3Rvcjtcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdCd1cGRhdGUnICA6IHMgPT4gdGhpcy5wcm9wYWcoKSxcblx0XHRcdFx0XHQnc3RhYmxlJyAgOiBzID0+IHRoaXMucmVsZWFzZShpZCksXG5cdFx0XHRcdFx0J3Vuc3RhYmxlJzogcyA9PiB0aGlzLndhaXQoaWQpXG5cdFx0XHRcdH0pO1xuXHRcdH1cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXHRcblx0LyoqXG5cdCAqIE1peCB0YXJnZXRDdHggb24gdGhpcyBzY29wZVxuXHQgKiBNaXhlZCBzY29wZSBwYXJlbnRzIGFyZSBOT1QgbWFwcGVkXG5cdCAqIEBwYXJhbSB0YXJnZXRDdHhcblx0ICovXG5cdG1peGluKCB0YXJnZXRDdHggKSB7XG5cdFx0bGV0IHBhcmVudCA9IHRoaXMucGFyZW50LFxuXHRcdCAgICBsaXN0cyxcblx0XHQgICAgXyAgICAgID0gdGhpcy5fO1xuXHRcdFxuXHRcdF8uX21peGVkLnB1c2godGFyZ2V0Q3R4KTtcblx0XHRcblx0XHR0YXJnZXRDdHgucmV0YWluKFwibWl4ZWRUb1wiKTtcblx0XHRcblx0XHRpZiAoICF0YXJnZXRDdHguX3N0YWJsZSApXG5cdFx0XHR0aGlzLndhaXQodGFyZ2V0Q3R4Ll9pZCk7XG5cdFx0XG5cdFx0Xy5fbWl4ZWRMaXN0LnB1c2gobGlzdHMgPSB7XG5cdFx0XHQnc3RhYmxlJyAgOiBzID0+IHRoaXMucmVsZWFzZSh0YXJnZXRDdHguX2lkKSxcblx0XHRcdCd1bnN0YWJsZSc6IHMgPT4gdGhpcy53YWl0KHRhcmdldEN0eC5faWQpLFxuXHRcdFx0J3VwZGF0ZScgIDogcyA9PiB0aGlzLl9wcm9wYWcoKVxuXHRcdH0pO1xuXHRcdFxuXHRcdHRhcmdldEN0eC5vbihsaXN0cyk7XG5cdFx0XG5cdFx0Ly8gcmVzZXQgcHJvdG9zXG5cdFx0Ly8gcHVzaCBuZXcgcHJvdG8gd2l0aCBwYXJlbnRcblx0XHRfX3Byb3RvX19wdXNoKHRoaXMsICdhY3Rpb25zJywgcGFyZW50KTtcblx0XHRfX3Byb3RvX19wdXNoKHRoaXMsICdzdG9yZXMnLCBwYXJlbnQpO1xuXHRcdF9fcHJvdG9fX3B1c2godGhpcywgJ3N0YXRlJywgcGFyZW50KTtcblx0XHRfX3Byb3RvX19wdXNoKHRoaXMsICdkYXRhJywgcGFyZW50KTtcblx0XHRcblx0XHQvLyBiaW5kIGxvY2FsIGFjY2Vzc29ycyBpbiB0aGUgbmV3IHByb3RvXG5cdFx0dGhpcy5yZWxpbmsoXy5fc2NvcGUsIHRoaXMsIGZhbHNlLCB0cnVlKTtcblx0XHRcblx0XHRfLl9taXhlZC5mb3JFYWNoKFxuXHRcdFx0Y3R4ID0+IHtcblx0XHRcdFx0Ly8gcHVzaCBwcm90b3Ncblx0XHRcdFx0X19wcm90b19fcHVzaCh0aGlzLCAnYWN0aW9ucycpO1xuXHRcdFx0XHRfX3Byb3RvX19wdXNoKHRoaXMsICdzdG9yZXMnKTtcblx0XHRcdFx0X19wcm90b19fcHVzaCh0aGlzLCAnc3RhdGUnKTtcblx0XHRcdFx0X19wcm90b19fcHVzaCh0aGlzLCAnZGF0YScpO1xuXHRcdFx0XHR0aGlzLnN0b3Jlcy5fX29yaWdpbiA9IFwibWl4ZWQgXCIgKyBjdHguX2lkO1xuXHRcdFx0XHQvLyB3cml0ZSBtaXhlZCBhY2Nlc3NvcnNcblx0XHRcdFx0Y3R4LnJlbGluayhjdHguXy5fc2NvcGUsIHRoaXMsIHRydWUsIHRydWUpXG5cdFx0XHR9XG5cdFx0KVxuXHR9XG5cdFxuXHQvKipcblx0ICogQmluZCBzdG9yZXMgZnJvbSB0aGlzIHNjb3BlLCBoaXMgcGFyZW50cyBvciBtaXhlZCBzY29wZXMgdG8gb2JqXG5cdCAqXG5cdCAqIEBwYXJhbSB0YXJnZXQge1JlYWN0LkNvbXBvbmVudHxTdG9yZXxmdW5jdGlvbn1cblx0ICogQHBhcmFtIGtleSB7c3RyaW5nfSBzdG9yZXMga2V5cyB0byBiaW5kIHVwZGF0ZXNcblx0ICogQHBhcmFtIGFzXG5cdCAqIEBwYXJhbSBzZXRJbml0aWFsIHtib29sZWFufSBmYWxzZSB0byBub3QgcHJvcGFnIGluaXRpYWwgdmFsdWUgKGRlZmF1bHQgOiB0cnVlKVxuXHQgKi9cblx0YmluZCggdGFyZ2V0LCBrZXksIGFzLCBzZXRJbml0aWFsID0gdHJ1ZSwgcmV2TWFwID0ge30gKSB7XG5cdFx0bGV0IGxhc3RSZXZzLCBkYXRhLCByZWZLZXlzO1xuXHRcdGlmICgga2V5ICYmICFpcy5hcnJheShrZXkpIClcblx0XHRcdGtleSA9IFtrZXldO1xuXHRcdFxuXHRcdGlmICggYXMgPT09IGZhbHNlIHx8IGFzID09PSB0cnVlICkge1xuXHRcdFx0c2V0SW5pdGlhbCA9IGFzO1xuXHRcdFx0YXMgICAgICAgICA9IG51bGw7XG5cdFx0fVxuXHRcdFxuXHRcdHJlZktleXMgPSBrZXlcblx0XHRcdC5tYXAoaWQgPT4gKGlzLnN0cmluZyhpZCkgPyBpZCA6IGlkLm5hbWUpKVxuXHRcdFx0Lm1hcChpZCA9PiAodGhpcy5wYXJzZVJlZihpZCkpKTtcblx0XHRcblx0XHRcblx0XHR0aGlzLl8uZm9sbG93ZXJzLnB1c2goXG5cdFx0XHRbXG5cdFx0XHRcdHRhcmdldCxcblx0XHRcdFx0a2V5LFxuXHRcdFx0XHRhcyB8fCB1bmRlZmluZWQsXG5cdFx0XHRcdGxhc3RSZXZzID0gcmVmS2V5cy5yZWR1Y2UoKCByZXZzLCByZWYgKSA9PiB7XG5cdFx0XHRcdFx0cmV2c1tyZWYuc3RvcmVJZF0gPSByZXZzW3JlZi5zdG9yZUlkXSB8fCB7XG5cdFx0XHRcdFx0XHRyZXYgOiAwLFxuXHRcdFx0XHRcdFx0cmVmczogW11cblx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdHJldnNbcmVmLnN0b3JlSWRdLnJlZnMucHVzaChyZWYpO1xuXHRcdFx0XHRcdHJldHVybiByZXZzO1xuXHRcdFx0XHR9LCByZXZNYXApXG5cdFx0XHRdKTtcblx0XHRcblx0XHR0aGlzLm1vdW50KGtleSk7XG5cdFx0dGhpcy5yZXRhaW5TdG9yZXMoT2JqZWN0LmtleXMobGFzdFJldnMpLCAnbGlzdGVuZXJzJyk7XG5cdFx0XG5cdFx0aWYgKCBzZXRJbml0aWFsICYmIHRoaXMuX3N0YWJsZSApIHtcblx0XHRcdGRhdGEgPSB0aGlzLmdldFVwZGF0ZXMobGFzdFJldnMpO1xuXHRcdFx0aWYgKCAhZGF0YSApIHJldHVybiB0aGlzO1xuXHRcdFx0aWYgKCB0eXBlb2YgdGFyZ2V0ICE9IFwiZnVuY3Rpb25cIiApIHtcblx0XHRcdFx0aWYgKCBhcyApIHRhcmdldC5zZXRTdGF0ZSh7IFthc106IGRhdGEgfSk7XG5cdFx0XHRcdGVsc2UgdGFyZ2V0LnNldFN0YXRlKGRhdGEpO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdHRhcmdldChkYXRhKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBVbiBiaW5kIHRoaXMgc2NvcGUgb2ZmIHRoZSBnaXZlbiBjb21wb25lbnQta2V5c1xuXHQgKiBAcGFyYW0gdGFyZ2V0XG5cdCAqIEBwYXJhbSBrZXlcblx0ICogQHJldHVybnMge0FycmF5LjwqPn1cblx0ICovXG5cdHVuQmluZCggdGFyZ2V0LCBrZXksIGFzICkge1xuXHRcdGxldCBmb2xsb3dlcnMgPSB0aGlzLl8uZm9sbG93ZXJzLFxuXHRcdCAgICBpICAgICAgICAgPSBmb2xsb3dlcnMgJiYgZm9sbG93ZXJzLmxlbmd0aDtcblx0XHR3aGlsZSAoIGZvbGxvd2VycyAmJiBpLS0gKVxuXHRcdFx0aWYgKCBmb2xsb3dlcnNbaV1bMF0gPT09IHRhcmdldCAmJlxuXHRcdFx0XHQoJycgKyBmb2xsb3dlcnNbaV1bMV0pID09ICgnJyArIGtleSkgJiZcblx0XHRcdFx0Zm9sbG93ZXJzW2ldWzJdID09IGFzICkge1xuXHRcdFx0XHR0aGlzLmRpc3Bvc2VTdG9yZXMoT2JqZWN0LmtleXMoZm9sbG93ZXJzW2ldWzNdKSwgJ2xpc3RlbmVycycpO1xuXHRcdFx0XHRyZXR1cm4gZm9sbG93ZXJzLnNwbGljZShpLCAxKTtcblx0XHRcdH1cblx0fVxuXHRcblx0LyoqXG5cdCAqIE1vdW50IHRoZSBzdG9yZXMgaW4gc3RvcmVJZExpc3QgZnJvbSB0aGlzIHNjb3BlLCBpdHMgcGFyZW50cyBhbmQgbWl4ZWQgc2NvcGVcblx0ICogQmluZCB0aGVtIHRvICd0bydcblx0ICogSG9vayAndG8nIHNvIGl0IHdpbGwgYXV0byB1bmJpbmQgb24gJ2Rlc3Ryb3knIG9yICdjb21wb25lbnRXaWxsVW5tb3VudCdcblx0ICogQHBhcmFtIHRhcmdldFxuXHQgKiBAcGFyYW0gc3RvcmVJZExpc3Rcblx0ICogQHBhcmFtIGJpbmRcblx0ICogQHJldHVybnMge09iamVjdH0gSW5pdGlhbCBvdXRwdXRzIG9mIHRoZSBzdG9yZXMgaW4gJ3N0b3Jlc0xpc3QnXG5cdCAqL1xuXHRtYXAoIHRhcmdldCwgc3RvcmVJZExpc3QsIGJpbmQgPSB0cnVlLCByZXZNYXAgKSB7XG5cdFx0bGV0IFN0b3JlICAgPSB0aGlzLmNvbnN0cnVjdG9yLlN0b3JlO1xuXHRcdHN0b3JlSWRMaXN0ID0gaXMuYXJyYXkoc3RvcmVJZExpc3QpID8gc3RvcmVJZExpc3QgOiBbc3RvcmVJZExpc3RdO1xuXHRcdGxldCByZWZMaXN0ID0gc3RvcmVJZExpc3QubWFwKHRoaXMucGFyc2VSZWYpO1xuXHRcdHRoaXMubW91bnQoc3RvcmVJZExpc3QpO1xuXHRcdGlmICggYmluZCAmJiB0YXJnZXQgaW5zdGFuY2VvZiBTdG9yZSApIHtcblx0XHRcdFN0b3JlLm1hcCh0YXJnZXQsIHN0b3JlSWRMaXN0LCB0aGlzLCB0aGlzLCBmYWxzZSlcblx0XHR9XG5cdFx0ZWxzZSBpZiAoIGJpbmQgKSB7XG5cdFx0XHR0aGlzLmJpbmQodGFyZ2V0LCBzdG9yZUlkTGlzdCwgdW5kZWZpbmVkLCBmYWxzZSk7XG5cdFx0XHRcblx0XHRcdGxldCBtaXhlZENXVW5tb3VudCxcblx0XHRcdCAgICB1bk1vdW50S2V5ID0gdGFyZ2V0LmlzUmVhY3RDb21wb25lbnQgPyBcImNvbXBvbmVudFdpbGxVbm1vdW50XCIgOiBcImRlc3Ryb3lcIjtcblx0XHRcdFxuXHRcdFx0aWYgKCB0YXJnZXQuaGFzT3duUHJvcGVydHkodW5Nb3VudEtleSkgKSB7XG5cdFx0XHRcdG1peGVkQ1dVbm1vdW50ID0gdGFyZ2V0W3VuTW91bnRLZXldO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHR0YXJnZXRbdW5Nb3VudEtleV0gPSAoIC4uLmFyZ3ogKSA9PiB7XG5cdFx0XHRcdGRlbGV0ZSB0YXJnZXRbdW5Nb3VudEtleV07XG5cdFx0XHRcdGlmICggbWl4ZWRDV1VubW91bnQgKVxuXHRcdFx0XHRcdHRhcmdldFt1bk1vdW50S2V5XSA9IG1peGVkQ1dVbm1vdW50O1xuXHRcdFx0XHRcblx0XHRcdFx0dGhpcy51bkJpbmQodGFyZ2V0LCBzdG9yZUlkTGlzdCk7XG5cdFx0XHRcdHJldHVybiB0YXJnZXRbdW5Nb3VudEtleV0gJiYgdGFyZ2V0W3VuTW91bnRLZXldKC4uLmFyZ3opO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0fVxuXHRcdHJldHVybiByZXZNYXAgJiYgdGhpcy5nZXRVcGRhdGVzKHJldk1hcClcblx0XHRcdHx8IHJlZkxpc3QucmVkdWNlKCggZGF0YSwgcmVmICkgPT4ge1xuXHRcdFx0XHR3YWxrblNldChkYXRhLCByZWYuYWxpYXMgfHwgcmVmLnBhdGgsIHRoaXMucmV0cmlldmUocmVmLnBhdGgpKVxuXHRcdFx0XHRyZXR1cm4gZGF0YTtcblx0XHRcdH0sIHt9KTtcblx0fVxuXHRcblx0LyoqXG5cdCAqIEdldCBjdXJyZW50IGRhdGEgdmFsdWUgZnJvbSBqc29uIHBhdGhcblx0ICogQHBhcmFtIHBhdGhcblx0ICogQHJldHVybnMge3N0cmluZ3wqfVxuXHQgKi9cblx0cmV0cmlldmUoIHBhdGggPSBcIlwiICkge1xuXHRcdHBhdGggPSBpcy5zdHJpbmcocGF0aCkgPyBwYXRoLnNwbGl0KCcuJykgOiBwYXRoO1xuXHRcdFxuXHRcdFxuXHRcdHJldHVybiBwYXRoICYmXG5cdFx0XHR0aGlzLnN0b3Jlc1twYXRoWzBdXSAmJlxuXHRcdFx0dGhpcy5zdG9yZXNbcGF0aFswXV0ucmV0cmlldmUgJiZcblx0XHRcdHRoaXMuc3RvcmVzW3BhdGhbMF1dLnJldHJpZXZlKHBhdGguc2xpY2UoMSkpO1xuXHR9XG5cdFxuXHQvKipcblx0ICogUmVzdG9yZSBhbGwgbm9kZXMgaW4gYSBqc29uUGF0aFxuXHQgKiBAcGFyYW0gcGF0aFxuXHQgKiBAcmV0dXJucyB7c3RyaW5nfCp9XG5cdCAqL1xuXHRyZXN0b3JlUmVmUGF0aCggcGF0aCA9IFwiXCIgKSB7XG5cdFx0cGF0aCA9IGlzLnN0cmluZyhwYXRoKSA/IHBhdGguc3BsaXQoJy4nKSA6IHBhdGg7XG5cdFx0XG5cdFx0bGV0IG9iaiwgaSA9IDAsIGNTY29wZSA9IHRoaXM7XG5cdFx0XG5cdFx0d2hpbGUgKCBpIDwgcGF0aC5sZW5ndGggKSB7XG5cdFx0XHRvYmogPSBjU2NvcGUuc3RvcmVzW3BhdGhbaV1dO1xuXHRcdFx0aWYgKCBTY29wZS5pc1Njb3BlQ2xhc3Mob2JqKVxuXHRcdFx0XHR8fFxuXHRcdFx0XHRTY29wZS5pc1N0b3JlQ2xhc3Mob2JqKSApIHtcblx0XHRcdFx0Y1Njb3BlLm1vdW50KHBhdGhbMF0pO1xuXHRcdFx0XHRvYmogPSBjU2NvcGUuc3RvcmVzW3BhdGhbaV1dO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHRpZiAoIFNjb3BlLmlzU2NvcGUob2JqKSApIHtcblx0XHRcdFx0Y1Njb3BlID0gb2JqO1xuXHRcdFx0XHRpKys7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIGlmICggU2NvcGUuaXNTdG9yZShvYmopICkge1xuXHRcdFx0XHRvYmoucmVzdG9yZSgpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cdFx0XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBHZXQgdGFyZ2V0IHN0b3JlIGZyb20ganNvbiBwYXRoXG5cdCAqIEBwYXJhbSBwYXRoXG5cdCAqIEByZXR1cm5zIHtzdHJpbmd8Kn1cblx0ICovXG5cdHJldHJpZXZlU3RvcmUoIHBhdGggPSBcIlwiICkge1xuXHRcdHBhdGggPSBpcy5zdHJpbmcocGF0aCkgPyBwYXRoLnNwbGl0KCcuJykgOiBwYXRoO1xuXHRcdHJldHVybiBwYXRoXG5cdFx0XHQmJiBwYXRoLmxlbmd0aFxuXHRcdFx0JiYgKFxuXHRcdFx0XHRwYXRoLmxlbmd0aCAhPSAxICYmIHRoaXMuc3RvcmVzW3BhdGhbMF1dLnJldHJpZXZlU3RvcmVcblx0XHRcdFx0PyB0aGlzLnN0b3Jlc1twYXRoWzBdXS5yZXRyaWV2ZVN0b3JlKHBhdGguc2xpY2UoMSkpXG5cdFx0XHRcdDogcGF0aC5sZW5ndGggPT0gMSAmJiB0aGlzLnN0b3Jlc1twYXRoWzBdXVxuXHRcdFx0KTtcblx0fVxuXHRcblx0LyoqXG5cdCAqIEdldCBvciB1cGRhdGUgc3RvcmVzIHJldmlzaW9ucyBpbiAnc3RvcmVzUmV2TWFwJ1xuXHQgKiBAcGFyYW0gc3RvcmVzUmV2TWFwXG5cdCAqIEBwYXJhbSBsb2NhbFxuXHQgKiBAcmV0dXJucyB7e319XG5cdCAqL1xuXHRnZXRTdG9yZXNSZXZzKCBzdG9yZXNSZXZNYXAgPSB7fSwgbG9jYWwgKSB7XG5cdFx0bGV0IGN0eCA9IHRoaXMuXy5fc2NvcGU7XG5cdFx0aWYgKCAhc3RvcmVzUmV2TWFwICkge1xuXHRcdFx0c3RvcmVzUmV2TWFwID0ge307XG5cdFx0fVxuXHRcdE9iamVjdC5rZXlzKGN0eCkuZm9yRWFjaChcblx0XHRcdGlkID0+IHtcblx0XHRcdFx0aWYgKCBpZCA9PSBcIiRwYXJlbnRcIiApIHJldHVybjtcblx0XHRcdFx0aWYgKCAhaXMuZm4oY3R4W2lkXSlcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0c3RvcmVzUmV2TWFwW2lkXSA9IGN0eFtpZF0uX3Jldjtcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlIGlmICggIXN0b3Jlc1Jldk1hcC5oYXNPd25Qcm9wZXJ0eShpZCkgKVxuXHRcdFx0XHRcdHN0b3Jlc1Jldk1hcFtpZF0gPSBmYWxzZVxuXHRcdFx0fVxuXHRcdCk7XG5cdFx0aWYgKCAhbG9jYWwgKSB7XG5cdFx0XHR0aGlzLl8uX21peGVkLnJlZHVjZSgoIHVwZGF0ZWQsIGN0eCApID0+IChjdHguZ2V0U3RvcmVzUmV2cyhzdG9yZXNSZXZNYXApLCBzdG9yZXNSZXZNYXApLCBzdG9yZXNSZXZNYXApO1xuXHRcdFx0dGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuZ2V0U3RvcmVzUmV2cyhzdG9yZXNSZXZNYXApO1xuXHRcdH1cblx0XHRyZXR1cm4gc3RvcmVzUmV2TWFwO1xuXHR9XG5cdFxuXHQvKipcblx0ICogUmVjdXJzaXZlbHkgZ2V0IGFsbCBzdG9yZXMgcmV2c1xuXHQgKiBAcGFyYW0gY2hpbGRzXG5cdCAqIEByZXR1cm5zIHtBcnJheX1cblx0ICogQHByaXZhdGVcblx0ICovXG5cdF9nZXRSZXZNYXAoIHN0b3Jlc1Jldk1hcCA9IHt9ICkge1xuXHRcdGxldCBjdHggPSB0aGlzLl8uX3Njb3BlO1xuXHRcdE9iamVjdC5rZXlzKGN0eCkuZm9yRWFjaChcblx0XHRcdGlkID0+IHtcblx0XHRcdFx0aWYgKCBpZCA9PSBcIiRwYXJlbnRcIiB8fCBzdG9yZXNSZXZNYXBbaWRdICkgcmV0dXJuO1xuXHRcdFx0XHRzdG9yZXNSZXZNYXBbaWRdID0geyByZXY6IGN0eFtpZF0uX3JldiwgcmVmczogW10gfTtcblx0XHRcdFx0XG5cdFx0XHR9KTtcblx0XHR0aGlzLl8uX21peGVkLnJlZHVjZVJpZ2h0KFxuXHRcdFx0KCBzdG9yZXNSZXZNYXAsIGN0eCApID0+IChjdHguX2dldFJldk1hcChzdG9yZXNSZXZNYXApKSwgc3RvcmVzUmV2TWFwKTtcblx0XHR0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC5fZ2V0UmV2TWFwKHN0b3Jlc1Jldk1hcCk7XG5cdFx0cmV0dXJuIHN0b3Jlc1Jldk1hcDtcblx0fVxuXHRcblx0LyoqXG5cdCAqIEdldCB1cGRhdGVkIG91dHB1dCBiYXNpbmcgc3RvcmVzUmV2TWFwJ3MgcmV2aXNpb25zLlxuXHQgKiBJZiBhIHN0b3JlIGluICdzdG9yZXNSZXZNYXAnIHdhcyB1cGRhdGVkOyBhZGQgaXQgdG8gJ291dHB1dCcgJiB1cGRhdGUgc3RvcmVzUmV2TWFwXG5cdCAqIEBwYXJhbSBzdG9yZXNSZXZNYXBcblx0ICogQHBhcmFtIG91dHB1dFxuXHQgKiBAcGFyYW0gdXBkYXRlZFxuXHQgKiBAcmV0dXJucyB7Knx7fX1cblx0ICovXG5cdGdldFJlZnNVcGRhdGVzKCByZWZzLCByZXZNYXAsIG91dHB1dCApIHtcblx0XHRyZXZNYXAgPSByZXZNYXAgfHwgcmVmc1xuXHRcdFx0Lm1hcChpZCA9PiAoaXMuc3RyaW5nKGlkKSA/IGlkIDogaWQubmFtZSkpXG5cdFx0XHQubWFwKGlkID0+ICh0aGlzLnBhcnNlUmVmKGlkKSkpXG5cdFx0XHQucmVkdWNlKCggcmV2cywgcmVmICkgPT4ge1xuXHRcdFx0XHRyZXZzW3JlZi5zdG9yZUlkXSA9IHJldnNbcmVmLnN0b3JlSWRdIHx8IHtcblx0XHRcdFx0XHRyZXYgOiAwLFxuXHRcdFx0XHRcdHJlZnM6IFtdXG5cdFx0XHRcdH07XG5cdFx0XHRcdHJldnNbcmVmLnN0b3JlSWRdLnJlZnMucHVzaChyZWYpO1xuXHRcdFx0XHRyZXR1cm4gcmV2cztcblx0XHRcdH0sIHt9KTtcblx0XHRcblx0XHRyZXR1cm4gdGhpcy5nZXRVcGRhdGVzKHJldk1hcCwgb3V0cHV0KVxuXHR9XG5cdFxuXHQvKipcblx0ICogR2V0IG9yIHVwZGF0ZSBvdXRwdXQgYmFzaW5nIHN0b3Jlc1Jldk1hcCdzIHJldmlzaW9ucy5cblx0ICogSWYgYSBzdG9yZSBpbiAnc3RvcmVzUmV2TWFwJyB3YXMgdXBkYXRlZDsgYWRkIGl0IHRvICdvdXRwdXQnICYgdXBkYXRlIHN0b3Jlc1Jldk1hcFxuXHQgKiBAcGFyYW0gc3RvcmVzUmV2TWFwXG5cdCAqIEBwYXJhbSBvdXRwdXRcblx0ICogQHBhcmFtIHVwZGF0ZWRcblx0ICogQHJldHVybnMgeyp8e319XG5cdCAqL1xuXHRnZXRVcGRhdGVzKCBzdG9yZXNSZXZNYXAsIG91dHB1dCwgdXBkYXRlZCApIHtcblx0XHRvdXRwdXQgICAgICAgPSBvdXRwdXQgfHwge307XG5cdFx0c3RvcmVzUmV2TWFwID0gc3RvcmVzUmV2TWFwIHx8IHRoaXMuX2dldFJldk1hcCgpO1xuXHRcdE9iamVjdC5rZXlzKHN0b3Jlc1Jldk1hcCkuZm9yRWFjaChcblx0XHRcdGlkID0+IHtcblx0XHRcdFx0bGV0IHN0b3JlICAgICAgICA9IHRoaXMuc3RvcmVzW2lkXTtcblx0XHRcdFx0c3RvcmVzUmV2TWFwW2lkXSA9IHN0b3Jlc1Jldk1hcFtpZF0gfHwgeyByZXY6IDAsIHJlZnM6IFtdIH07XG5cdFx0XHRcdFxuXHRcdFx0XHRpZiAoIHN0b3JlICYmIGlzLmZuKHN0b3JlKSApIHtcblx0XHRcdFx0XHR1cGRhdGVkICAgID0gdHJ1ZTtcblx0XHRcdFx0XHRvdXRwdXRbaWRdID0gdW5kZWZpbmVkO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2UgaWYgKCBzdG9yZSAmJiBzdG9yZS5fcmV2ID4gc3RvcmVzUmV2TWFwW2lkXS5yZXYgKSB7XG5cdFx0XHRcdFx0c3RvcmVzUmV2TWFwW2lkXS5yZXYgPSBzdG9yZS5fcmV2O1xuXHRcdFx0XHRcdHVwZGF0ZWQgICAgICAgICAgICAgID0gdHJ1ZTtcblx0XHRcdFx0XHRzdG9yZXNSZXZNYXBbaWRdLnJlZnMuZm9yRWFjaChcblx0XHRcdFx0XHRcdHJlZiA9PiB7XG5cdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0XHRvdXRwdXRbcmVmLmFsaWFzXSA9IHRoaXMucmV0cmlldmUocmVmLnBhdGgpXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0KVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0KVxuXHRcdHJldHVybiB1cGRhdGVkICYmIG91dHB1dDtcblx0fVxuXHRcblx0LyoqXG5cdCAqIFJlY3Vyc2l2ZWx5IGdldCBhbGwgY2hpbGQgc2NvcGVzXG5cdCAqIEBwYXJhbSBjaGlsZHNcblx0ICogQHJldHVybnMge0FycmF5fVxuXHQgKiBAcHJpdmF0ZVxuXHQgKi9cblx0X2dldEFsbENoaWxkcyggY2hpbGRzID0gW10gKSB7XG5cdFx0Y2hpbGRzLnB1c2goLi4udGhpcy5fLmNoaWxkU2NvcGVzKTtcblx0XHR0aGlzLl8uY2hpbGRTY29wZXMuZm9yRWFjaChcblx0XHRcdGN0eCA9PiB7XG5cdFx0XHRcdGN0eC5fZ2V0QWxsQ2hpbGRzKGNoaWxkcyk7XG5cdFx0XHR9XG5cdFx0KTtcblx0XHRyZXR1cm4gY2hpbGRzO1xuXHR9XG5cdFxuXHQvKipcblx0ICogU2VyaWFsaXplIGFsbCBhY3RpdmUgc3RvcmVzIHN0YXRlICYgZGF0YSBpbiBldmVyeSBjaGlsZHMgJiBtaXhlZCBzY29wZXNcblx0ICpcblx0ICogU2NvcGVzIHdpdGhvdXQga2V5IG9yIGlkIGFyZSBpZ25vcmVkXG5cdCAqIEBwYXJhbSBvdXRwdXRcblx0ICogQHJldHVybnMge3t9fVxuXHQgKi9cblx0c2VyaWFsaXplKCBjZmcgPSB7fSwgb3V0cHV0ID0ge30gKSB7XG5cdFx0bGV0IGN0eCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA9IHRoaXMuXy5fc2NvcGUsXG5cdFx0ICAgIHsgYmFzZUlkLCBrZXksIGtleVBJRCwgaW5jcmVtZW50SWQgfSA9IHRoaXMuXyxcblx0XHQgICAge1xuXHRcdFx0ICAgIGFsaWFzLFxuXHRcdFx0ICAgIHBhcmVudEFsaWFzLFxuXHRcdCAgICB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSBjZmcsXG5cdFx0ICAgIHNpZCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA9IGtleVxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IChwYXJlbnRBbGlhcyB8fCBrZXlQSUQpICsgJz4nICsga2V5XG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogYWxpYXMgfHwgcGFyZW50QWxpYXMgJiYgKHBhcmVudEFsaWFzICsgJy8nICsgYmFzZUlkKSB8fCB0aGlzLl9pZDtcblx0XHRcblx0XHRcblx0XHQvL2FsaWFzID0gYWxpYXMgfHwgYmFzZUlkO1xuXHRcdHJldHVybiB0aGlzLnNlcmlhbGl6ZV9leChjZmcsIG91dHB1dCwgc2lkLCBhbGlhcywgW1wiJHBhcmVudFwiXSlcblx0fVxuXHRcblx0c2VyaWFsaXplX2V4KCBjZmcgPSB7fSwgb3V0cHV0ID0ge30sIHNpZCwgYWxpYXMsIGV4Y2x1ZGUgKSB7XG5cdFx0bGV0IF8gICAgICAgICAgICAgICA9IHRoaXMuXyxcblx0XHQgICAgY3R4ICAgICAgICAgICAgID0gXy5fc2NvcGUsXG5cdFx0ICAgIHsgaW5jcmVtZW50SWQgfSA9IF8sXG5cdFx0ICAgIHtcblx0XHRcdCAgICB3aXRoQ2hpbGRzID0gdHJ1ZSxcblx0XHRcdCAgICB3aXRoTWl4ZWQgID0gdHJ1ZSxcblx0XHRcdCAgICBub3JlZnMsXG5cdFx0ICAgIH0gICAgICAgICAgICAgICA9IGNmZztcblx0XHRcblx0XHRpZiAoIGtleVdhbGtuR2V0KG91dHB1dCwgc2lkKSApIHtcblx0XHRcdGlmICggIWluY3JlbWVudElkICkvLyBkb25lXG5cdFx0XHRcdHJldHVybiBvdXRwdXQ7XG5cdFx0XHRlbHNlIGlmICggaW5jcmVtZW50SWQgKSB7Ly8gZ2VuZXJhdGUga2V5IGlkXG5cdFx0XHRcdGxldCBpID0gLTE7XG5cdFx0XHRcdHdoaWxlICgga2V5V2Fsa25HZXQob3V0cHV0LCBzaWQgKyAnWycgKyAoKytpKSArICddJykgKSA7XG5cdFx0XHRcdHNpZCA9IHNpZCArICdbJyArIGkgKyAnXSc7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdFxuXHRcdGtleVdhbGtuU2V0KG91dHB1dCwgc2lkLCB7fSk7XG5cdFx0XG5cdFx0T2JqZWN0LmtleXMoY3R4KS5mb3JFYWNoKFxuXHRcdFx0aWQgPT4ge1xuXHRcdFx0XHRpZiAoIGV4Y2x1ZGUuaW5jbHVkZXMoaWQpIHx8IFNjb3BlLmlzU3RvcmVDbGFzcyhjdHhbaWRdKSB8fCBTY29wZS5pc1Njb3BlQ2xhc3MoY3R4W2lkXSkgKVxuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XG5cdFx0XHRcdGN0eFtpZF0uc2VyaWFsaXplKHsgLi4uY2ZnLCBwYXJlbnRBbGlhczogc2lkIH0sIG91dHB1dCk7XG5cdFx0XHR9XG5cdFx0KVxuXHRcdFxuXHRcdHdpdGhDaGlsZHMgJiYgXy5jaGlsZFNjb3Blcy5mb3JFYWNoKFxuXHRcdFx0Y3R4ID0+IHtcblx0XHRcdFx0IWN0eC5fLmlzTG9jYWxJZCAmJiBjdHguc2VyaWFsaXplKHtcblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aENoaWxkICA6IHRydWUsXG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpdGhQYXJlbnRzOiBmYWxzZSxcblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50QWxpYXM6IHNpZCxcblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aE1peGVkLFxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JlZnMsXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBvdXRwdXQpO1xuXHRcdFx0fVxuXHRcdCk7XG5cdFx0XG5cdFx0d2l0aE1peGVkICYmIF8uX21peGVkLmZvckVhY2goXG5cdFx0XHRjdHggPT4ge1xuXHRcdFx0XHQhY3R4Ll8uaXNMb2NhbElkICYmIGN0eC5zZXJpYWxpemUoe1xuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRoQ2hpbGQgIDogZmFsc2UsXG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpdGhQYXJlbnRzOiBmYWxzZSxcblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aE1peGVkLFxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JlZnNcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIG91dHB1dCk7XG5cdFx0XHR9XG5cdFx0KTtcblx0XHRcblx0XHRpZiAoIGFsaWFzICkge1xuXHRcdFx0b3V0cHV0ID0gT2JqZWN0LmtleXMob3V0cHV0KVxuXHRcdFx0ICAgICAgICAgICAgICAgLnJlZHVjZShcblx0XHRcdFx0ICAgICAgICAgICAgICAgKCBoLCBrICkgPT4gKFxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgIGhbayA9PT0gdGhpcy5faWRcblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgID8gYWxpYXNcblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgIDoga10gPSBvdXRwdXRba10sXG5cdFx0XHRcdFx0XHQgICAgICAgICAgICAgICBoXG5cdFx0XHRcdCAgICAgICAgICAgICAgICksXG5cdFx0XHRcdCAgICAgICAgICAgICAgIHt9XG5cdFx0XHQgICAgICAgICAgICAgICApXG5cdFx0fVxuXHRcdHJldHVybiBvdXRwdXQ7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBSZXN0b3JlIHN0YXRlICYgZGF0YSBmcm9tIHRoZSBzZXJpYWxpemUgZm5cblx0ICogQHBhcmFtIHNuYXBzaG90XG5cdCAqIEBwYXJhbSBmb3JjZVxuXHQgKi9cblx0cmVzdG9yZSggc25hcHNob3QsIGNmZyA9IHt9LCBmb3JjZSA9IGlzLmJvb2woY2ZnKSAmJiBjZmcgKSB7XG5cdFx0bGV0IGN0eCA9IHRoaXMuXy5fc2NvcGUsIHNuYXA7XG5cdFx0XG5cdFx0aWYgKCBzbmFwc2hvdCAmJiBjZmcgJiYgY2ZnLmFsaWFzICYmIGNmZy5hbGlhcyAhPSB0aGlzLl9pZCApIHtcblx0XHRcdHNuYXAgPSB7XG5cdFx0XHRcdC4uLnNuYXBzaG90LFxuXHRcdFx0XHRbdGhpcy5faWRdOiBzbmFwc2hvdFtjZmcuYWxpYXNdXG5cdFx0XHR9XG5cdFx0XHRkZWxldGUgc25hcFtjZmcuYWxpYXNdO1xuXHRcdFx0c25hcHNob3QgPSBzbmFwO1xuXHRcdH1cblx0XHRzbmFwc2hvdCA9IHNuYXBzaG90XG5cdFx0XHQmJiBrZXlXYWxrbkdldChzbmFwc2hvdCwgdGhpcy5faWQpXG5cdFx0XHR8fCB0aGlzLnRha2VTbmFwc2hvdEJ5S2V5KHRoaXMuX2lkKTtcblx0XHRcblx0XHRcblx0XHRpZiAoICFzbmFwc2hvdCApXG5cdFx0XHRyZXR1cm47XG5cdFx0XG5cdFx0dGhpcy5fLnNuYXBzaG90ID0geyAuLi5zbmFwc2hvdCB9O1xuXHRcdFxuXHRcdHNuYXAgICAgICAgICAgPSBzbmFwc2hvdFsnLyddO1xuXHRcdHNuYXBzaG90WycvJ10gPSB7IC4uLnNuYXAgfTtcblx0XHRzbmFwICYmIE9iamVjdC5rZXlzKHNuYXApLmZvckVhY2goXG5cdFx0XHRuYW1lID0+IHtcblx0XHRcdFx0aWYgKCBuYW1lID09IFwiJHBhcmVudFwiICkgcmV0dXJuO1xuXHRcdFx0XHRcblx0XHRcdFx0aWYgKCBjdHhbbmFtZV0gKSB7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0aWYgKCBmb3JjZSAmJiAhaXMuZm4oY3R4W25hbWVdKSApXG5cdFx0XHRcdFx0XHRjdHhbbmFtZV0uZGVzdHJveSgpO1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdHRoaXMuX21vdW50KG5hbWUpOy8vIHF1aWV0XG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHR9XG5cdFx0KVxuXHRcdFxuXHRcdHRoaXMuXy5fbWl4ZWQuZm9yRWFjaChcblx0XHRcdGN0eCA9PiB7XG5cdFx0XHRcdCFjdHguXy5pc0xvY2FsSWQgJiYgY3R4LnJlc3RvcmUodW5kZWZpbmVkLCBmb3JjZSk7XG5cdFx0XHR9XG5cdFx0KTtcblx0XHRcblx0XHR0aGlzLl8uY2hpbGRTY29wZXMuZm9yRWFjaChcblx0XHRcdGN0eCA9PiB7XG5cdFx0XHRcdCFjdHguXy5pc0xvY2FsSWQgJiYgY3R4LnJlc3RvcmUodW5kZWZpbmVkLCBmb3JjZSk7XG5cdFx0XHR9XG5cdFx0KTtcblx0fVxuXHRcblx0Z2V0U25hcHNob3RCeUtleSgga2V5LCBsb2NhbCApIHtcblx0XHQvLyBvbmx5IGhhdmUgdGhlIGxvY2FsIHNuYXBcblx0XHRpZiAoIHRoaXMuXy5zbmFwc2hvdCAmJiBrZXkuc3RhcnRzV2l0aCh0aGlzLl9pZCkgKSB7XG5cdFx0XHRsZXQgb2JqID0ga2V5V2Fsa25HZXQodGhpcy5fLnNuYXBzaG90LCBrZXkuc3Vic3RyKHRoaXMuX2lkLmxlbmd0aCkpXG5cdFx0XHRyZXR1cm4gb2JqO1xuXHRcdH1cblx0XHRlbHNlIHJldHVybiAhbG9jYWxcblx0XHRcdCYmIHRoaXMucGFyZW50XG5cdFx0XHQmJiB0aGlzLnBhcmVudC5nZXRTbmFwc2hvdEJ5S2V5KGtleSlcblx0XHRcdHx8XG5cdFx0XHR0aGlzLnN0b3Jlcy4kcGFyZW50XG5cdFx0XHQmJiB0aGlzLnN0b3Jlcy4kcGFyZW50LmdldFNuYXBzaG90QnlLZXkoa2V5KTtcblx0XHRcblx0fVxuXHRcblx0Z2V0U25hcHNob3RCeUtleUV4dCggc25hcHNob3QsIGtleSwgbG9jYWwgKSB7XG5cdFx0Ly8gb25seSBoYXZlIHRoZSBsb2NhbCBzbmFwXG5cdFx0aWYgKCBzbmFwc2hvdCApIHtcblx0XHRcdGxldCBvYmogPSBrZXlXYWxrbkdldChzbmFwc2hvdCwga2V5KVxuXHRcdFx0cmV0dXJuIG9iajtcblx0XHR9XG5cdFx0XG5cdH1cblx0XG5cdHRha2VTbmFwc2hvdEJ5S2V5KCBrZXksIGxvY2FsICkge1xuXHRcdGlmICggdGhpcy5fLnNuYXBzaG90ICYmIGtleS5zdGFydHNXaXRoKHRoaXMuX2lkKSApIHtcblx0XHRcdGxldCBvYmogPSBrZXlXYWxrbkdldCh0aGlzLl8uc25hcHNob3QsIGtleS5zdWJzdHIodGhpcy5faWQubGVuZ3RoKSlcblx0XHRcdGlmICggb2JqICkge1xuXHRcdFx0XHR0aGlzLmRlbGV0ZVNuYXBzaG90QnlLZXkoa2V5LCB0cnVlKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBvYmo7XG5cdFx0fVxuXHRcdGVsc2UgcmV0dXJuICFsb2NhbFxuXHRcdFx0JiYgdGhpcy5wYXJlbnRcblx0XHRcdCYmIHRoaXMucGFyZW50LnRha2VTbmFwc2hvdEJ5S2V5KGtleSlcblx0XHRcdHx8XG5cdFx0XHR0aGlzLnN0b3Jlcy4kcGFyZW50XG5cdFx0XHQmJiB0aGlzLnN0b3Jlcy4kcGFyZW50LnRha2VTbmFwc2hvdEJ5S2V5KGtleSk7XG5cdH1cblx0XG5cdGRlbGV0ZVNuYXBzaG90QnlLZXkoIGtleSwgbG9jYWwgKSB7XG5cdFx0aWYgKCB0aGlzLl8uc25hcHNob3QgJiYga2V5LnN0YXJ0c1dpdGgodGhpcy5faWQpICkge1xuXHRcdFx0bGV0IG9iaiA9IGtleVdhbGtuR2V0KHRoaXMuXy5zbmFwc2hvdCwga2V5LnN1YnN0cih0aGlzLl9pZC5sZW5ndGgpLnJlcGxhY2UoL14oLipbXFw+fFxcL10pW15cXD58XFwvXSskL2lnLCAnJDEnKSlcblx0XHRcdGlmICggb2JqIClcblx0XHRcdFx0ZGVsZXRlIG9ialtrZXkucmVwbGFjZSgvXi4qW1xcPnxcXC9dKFteXFw+fFxcL10rKSQvaWcsICckMScpXVxuXHRcdH1cblx0XHRyZXR1cm4gIWxvY2FsXG5cdFx0XHQmJiB0aGlzLnBhcmVudFxuXHRcdFx0JiYgdGhpcy5wYXJlbnQuZGVsZXRlU25hcHNob3RCeUtleShrZXkpXG5cdFx0XHR8fFxuXHRcdFx0dGhpcy5zdG9yZXMuJHBhcmVudFxuXHRcdFx0JiYgdGhpcy5zdG9yZXMuJHBhcmVudC5kZWxldGVTbmFwc2hvdEJ5S2V5KGtleSk7XG5cdH1cblx0XG5cdHNldFN0YXRlKCBwU3RhdGUgKSB7XG5cdFx0T2JqZWN0LmtleXMocFN0YXRlKVxuXHRcdCAgICAgIC5mb3JFYWNoKGsgPT4gKHRoaXMuc3RhdGVba10gPSBwU3RhdGVba10pKVxuXHR9XG5cdFxuXHQvKipcblx0ICogZ2V0IGEgcGFyc2VkIHJlZmVyZW5jZVxuXHQgKiBAcGFyYW0gX3JlZlxuXHQgKiBAcmV0dXJucyB7e3N0b3JlSWQsIHBhdGgsIGFsaWFzOiAqLCByZWY6ICp9fVxuXHQgKi9cblx0cGFyc2VSZWYoIF9yZWYgKSB7XG5cdFx0aWYgKCB0eXBlb2YgX3JlZiAhPT0gJ3N0cmluZycgKSB7Ly8gQHRvZG8gOiBybSB0aGlzXG5cdFx0XHR0aGlzLnJlZ2lzdGVyKHsgW19yZWYubmFtZV06IF9yZWYuc3RvcmUgfSk7XG5cdFx0XHRfcmVmID0gX3JlZi5uYW1lO1xuXHRcdH1cblx0XHRsZXQgcmVmID0gX3JlZi5zcGxpdCgnOicpO1xuXHRcdHJlZlswXSAgPSByZWZbMF0uc3BsaXQoJy4nKTtcblx0XHRyZXR1cm4ge1xuXHRcdFx0c3RvcmVJZDogcmVmWzBdWzBdLFxuXHRcdFx0cGF0aCAgIDogcmVmWzBdLFxuXHRcdFx0YWxpYXMgIDogcmVmWzFdIHx8IHJlZlswXVtyZWZbMF0ubGVuZ3RoIC0gMV0sXG5cdFx0XHRyZWYgICAgOiBfcmVmXG5cdFx0fTtcblx0fVxuXHRcblx0LyoqXG5cdCAqIERpc3BhdGNoIGFuIGFjdGlvbiB0byB0aGUgdG9wIHBhcmVudCAmIG1peGVkIHNjb3BlcywgaW4gYWxsIHN0b3Jlc1xuXHQgKlxuXHQgKiBAcGFyYW0gYWN0aW9uXG5cdCAqIEBwYXJhbSBkYXRhXG5cdCAqIEByZXR1cm5zIHtTY29wZX1cblx0ICovXG5cdGRpc3BhdGNoKCBhY3Rpb24sIC4uLmFyZ3ogKSB7XG5cdFx0aWYgKCB0aGlzLmRlYWQgKSB7XG5cdFx0XHRjb25zb2xlLndhcm4oXCJEaXNwYXRjaCB3YXMgY2FsbGVkIG9uIGEgZGVhZCBzY29wZSwgY2hlY2sgeW91J3JlIGFzeW5jIGZ1bmN0aW9ucyBpbiB0aGlzIHN0YWNrLi4uXCIsIChuZXcgRXJyb3IoKSkuc3RhY2spO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRsZXQgYkFjdHMgPSB0aGlzLl8uX2JvdW5kZWRBY3Rpb25zO1xuXHRcdE9iamVjdC5rZXlzKHRoaXMuXy5fc2NvcGUpXG5cdFx0ICAgICAgLmZvckVhY2goXG5cdFx0XHQgICAgICBpZCA9PiB7XG5cdFx0XHRcdCAgICAgIGlmICggaWQgPT0gXCIkcGFyZW50XCIgKSByZXR1cm47XG5cdFx0XHRcdCAgICAgIGlmICggIWlzLmZuKHRoaXMuXy5fc2NvcGVbaWRdKSApXG5cdFx0XHRcdFx0ICAgICAgdGhpcy5fLl9zY29wZVtpZF0udHJpZ2dlcihhY3Rpb24sIC4uLmFyZ3opO1xuXHRcdFx0ICAgICAgfVxuXHRcdCAgICAgICk7XG5cdFx0XG5cdFx0aWYgKCBiQWN0cyAmJiBiQWN0cy50ZXN0KGFjdGlvbikgKVxuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XG5cdFx0dGhpcy5fLl9taXhlZC5mb3JFYWNoKCggY3R4ICkgPT4gKGN0eC5kaXNwYXRjaChhY3Rpb24sIC4uLmFyZ3opKSk7XG5cdFx0dGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuZGlzcGF0Y2goYWN0aW9uLCAuLi5hcmd6KTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXHRcblx0dHJpZ2dlcigpIHtcblx0XHR0aGlzLmRpc3BhdGNoKC4uLmFyZ3VtZW50cyk7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBvbmNlKCdzdGFibGUnLCBjYilcblx0ICogQHBhcmFtIG9iaiB7UmVhY3QuQ29tcG9uZW50fFN0b3JlfGZ1bmN0aW9uKVxuXHQgKiBAcGFyYW0ga2V5IHtzdHJpbmd9IG9wdGlvbmFsIGtleSB3aGVyZSB0byBtYXAgdGhlIHB1YmxpYyBzdGF0ZVxuXHQgKi9cblx0dGhlbiggY2IgKSB7XG5cdFx0aWYgKCAhdGhpcy5fc3RhYmxlIClcblx0XHRcdHJldHVybiB0aGlzLm9uY2UoJ3N0YWJsZScsIGUgPT4gdGhpcy50aGVuKGNiKSk7XG5cdFx0XG5cdFx0cmV0dXJuIGNiKHRoaXMuZGF0YSk7XG5cdH1cblx0XG5cdG9uY2VTdGFibGVUcmVlKCBjYiApIHtcblx0XHRpZiAoIHRoaXMuXy51blN0YWJsZUNoaWxkcyApXG5cdFx0XHRyZXR1cm4gdGhpcy5vbmNlKCdzdGFibGVUcmVlJywgZSA9PiB0aGlzLm9uY2VTdGFibGVUcmVlKGNiKSk7XG5cdFx0cmV0dXJuIGNiKHRoaXMuZGF0YSk7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBDYWxsIHJldGFpbiBvbiB0aGUgc2NvcGVkIHN0b3JlcyBiYXNpbmcgdGhlIGdpdmVuIGxpc3Rcblx0ICpcblx0ICogQHBhcmFtIHN0b3Jlc1xuXHQgKiBAcGFyYW0gcmVhc29uXG5cdCAqL1xuXHRyZXRhaW5TdG9yZXMoIHN0b3JlcyA9IFtdLCByZWFzb24gKSB7XG5cdFx0c3RvcmVzLmZvckVhY2goXG5cdFx0XHRpZCA9PiAodGhpcy5zdG9yZXNbaWRdICYmIHRoaXMuc3RvcmVzW2lkXS5yZXRhaW4gJiYgdGhpcy5zdG9yZXNbaWRdLnJldGFpbihyZWFzb24pKVxuXHRcdClcblx0fVxuXHRcblx0LyoqXG5cdCAqIENhbGwgcmV0YWluIG9uIHRoZSBzY29wZWQgc3RvcmVzXG5cdCAqXG5cdCAqIEBwYXJhbSBzdG9yZXNcblx0ICogQHBhcmFtIHJlYXNvblxuXHQgKi9cblx0ZGlzcG9zZVN0b3Jlcyggc3RvcmVzID0gW10sIHJlYXNvbiApIHtcblx0XHRzdG9yZXMuZm9yRWFjaChcblx0XHRcdGlkID0+ICh0aGlzLnN0b3Jlc1tpZF0gJiYgdGhpcy5zdG9yZXNbaWRdLmRpc3Bvc2UgJiYgdGhpcy5zdG9yZXNbaWRdLmRpc3Bvc2UocmVhc29uKSlcblx0XHQpXG5cdH1cblx0XG5cdC8qKlxuXHQgKiBLZWVwIHRoZSBzY29wZSB1bnN0YWJsZSB1bnRpbCByZWxlYXNlIGlzIGNhbGxlZFxuXHQgKiBAcGFyYW0gcmVhc29uXG5cdCAqL1xuXHR3YWl0KCByZWFzb24gKSB7XG5cdFx0Ly9jb25zb2xlLmxvZyhcIndhaXRcIiwgcmVhc29uKTtcblx0XHR0aGlzLl9zdGFibGUgJiYgIXRoaXMuX19sb2Nrcy5hbGwgJiYgdGhpcy5lbWl0KFwidW5zdGFibGVcIiwgdGhpcyk7XG5cdFx0dGhpcy5fc3RhYmxlID0gZmFsc2U7XG5cdFx0dGhpcy5fX2xvY2tzLmFsbCsrO1xuXHRcdGlmICggcmVhc29uICkge1xuXHRcdFx0dGhpcy5fX2xvY2tzW3JlYXNvbl0gPSB0aGlzLl9fbG9ja3NbcmVhc29uXSB8fCAwO1xuXHRcdFx0dGhpcy5fX2xvY2tzW3JlYXNvbl0rKztcblx0XHR9XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBTdGFiaWxpemUgdGhlIHNjb3BlIGlmIG5vIG1vcmUgbG9ja3MgcmVtYWluICh3YWl0IGZuKVxuXHQgKiBAcGFyYW0gcmVhc29uXG5cdCAqL1xuXHRyZWxlYXNlKCByZWFzb24gKSB7XG5cdFx0XG5cdFx0aWYgKCByZWFzb24gKSB7XG5cdFx0XHRpZiAoIHRoaXMuX19sb2Nrc1tyZWFzb25dID09IDAgKVxuXHRcdFx0XHRjb25zb2xlLmVycm9yKFwiUmVsZWFzZSBtb3JlIHRoYW4gbG9ja2luZyAhXCIsIHJlYXNvbik7XG5cdFx0XHR0aGlzLl9fbG9ja3NbcmVhc29uXSA9IHRoaXMuX19sb2Nrc1tyZWFzb25dIHx8IDA7XG5cdFx0XHR0aGlzLl9fbG9ja3NbcmVhc29uXS0tO1xuXHRcdH1cblx0XHRpZiAoICFyZWFzb24gJiYgdGhpcy5fX2xvY2tzLmFsbCA9PSAwIClcblx0XHRcdGNvbnNvbGUuZXJyb3IoXCJSZWxlYXNlIG1vcmUgdGhhbiBsb2NraW5nICFcIik7XG5cdFx0XG5cdFx0dGhpcy5fX2xvY2tzLmFsbC0tO1xuXHRcdGlmICggIXRoaXMuX19sb2Nrcy5hbGwgKSB7XG5cdFx0XHRpZiAoIHRoaXMuXy5zdGFiaWxpemVyVE0gKVxuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR0aGlzLl8uc3RhYmlsaXplclRNICYmIGNsZWFyVGltZW91dCh0aGlzLl8uc3RhYmlsaXplclRNKTtcblx0XHRcdFxuXHRcdFx0dGhpcy5fLnN0YWJpbGl6ZXJUTSA9IHNldFRpbWVvdXQoXG5cdFx0XHRcdGUgPT4ge1xuXHRcdFx0XHRcdHRoaXMuXy5zdGFiaWxpemVyVE0gPSBudWxsO1xuXHRcdFx0XHRcdGlmICggdGhpcy5fX2xvY2tzLmFsbCApXG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0dGhpcy5fLnByb3BhZ1RNICYmIGNsZWFyVGltZW91dCh0aGlzLl8ucHJvcGFnVE0pO1xuXHRcdFx0XHRcdHRoaXMuX3JldisrO1xuXHRcdFx0XHRcdHRoaXMuX3N0YWJsZSA9IHRydWU7XG5cdFx0XHRcdFx0dGhpcy5lbWl0KFwic3RhYmxlXCIsIHRoaXMpO1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdCF0aGlzLmRlYWQgJiYgdGhpcy5fcHJvcGFnKCk7Ly8gc3RhYmlsaXR5IGNhbiBpbmR1Y2UgZGVzdHJveVxuXHRcdFx0XHR9XG5cdFx0XHQpO1xuXHRcdH1cblx0XHRcblx0fVxuXHRcblx0LyoqXG5cdCAqIFByb3BhZyBzdG9yZXMgdXBkYXRlcyBiYXNpbmcgdGhlaXJzIGxhc3QgdXBkYXRlc1xuXHQgKi9cblx0cHJvcGFnKCkge1xuXHRcdHRoaXMuXy5wcm9wYWdUTSAmJiBjbGVhclRpbWVvdXQodGhpcy5fLnByb3BhZ1RNKTtcblx0XHR0aGlzLl8ucHJvcGFnVE0gPSBzZXRUaW1lb3V0KFxuXHRcdFx0ZSA9PiB7XG5cdFx0XHRcdHRoaXMuXy5wcm9wYWdUTSA9IG51bGw7XG5cdFx0XHRcdHRoaXMuX3Byb3BhZygpXG5cdFx0XHR9LCAyXG5cdFx0KTtcblx0fVxuXHRcblx0X3Byb3BhZygpIHtcblx0XHRpZiAoIHRoaXMuXy5mb2xsb3dlcnMubGVuZ3RoIClcblx0XHRcdHRoaXMuXy5mb2xsb3dlcnMuZm9yRWFjaCgoIHsgMDogb2JqLCAxOiBrZXksIDI6IGFzLCAzOiBsYXN0UmV2cywgMzogcmVtYXBzIH0gKSA9PiB7XG5cdFx0XHRcdGxldCBkYXRhID0gdGhpcy5nZXRVcGRhdGVzKGxhc3RSZXZzKTtcblx0XHRcdFx0aWYgKCAhZGF0YSApIHJldHVybjtcblx0XHRcdFx0Ly9jb25zb2xlLmxvZyhkYXRhLCBsYXN0UmV2cylcblx0XHRcdFx0aWYgKCB0eXBlb2Ygb2JqICE9IFwiZnVuY3Rpb25cIiApIHtcblx0XHRcdFx0XHQvL2NvbnNvbGUubG9nKFwic2V0U3RhdGUgXCIsb2JqLCBPYmplY3Qua2V5cyhkYXRhKSlcblx0XHRcdFx0XHRpZiAoIGFzICkgb2JqLnNldFN0YXRlKHsgW2FzXTogZGF0YSB9KTtcblx0XHRcdFx0XHRlbHNlIG9iai5zZXRTdGF0ZShkYXRhKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHRvYmooZGF0YSwgbGFzdFJldnMgJiYgWy4uLmxhc3RSZXZzXSB8fCBcIm5vIHJldnNcIik7XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gbGFzdFJldnMgJiZcblx0XHRcdFx0Ly8ga2V5LmZvckVhY2goaWQgPT4gKGxhc3RSZXZzW2lkXSA9IHRoaXMuc3RvcmVzW2lkXSAmJlxuXHRcdFx0XHQvLyB0aGlzLnN0b3Jlc1tpZF0uX3JldiB8fCAwKSk7XG5cdFx0XHR9KTtcblx0XHR0aGlzLmVtaXQoXCJ1cGRhdGVcIiwgdGhpcy5nZXRVcGRhdGVzKCkpO1xuXHR9XG5cdFxuXHQvKipcblx0ICogaXMgc3RhYmxlXG5cdCAqIEByZXR1cm5zIGJvb2xcblx0ICovXG5cdGlzU3RhYmxlKCkge1xuXHRcdHJldHVybiB0aGlzLl9zdGFibGU7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBpcyBzdGFibGUgdHJlZVxuXHQgKiBAcmV0dXJucyBib29sXG5cdCAqL1xuXHRpc1N0YWJsZVRyZWUoKSB7XG5cdFx0cmV0dXJuICF0aGlzLl8udW5TdGFibGVDaGlsZHM7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBSZWdpc3RlciBjaGlsZHJlblxuXHQgKiBAcGFyYW0gc2NvcGVcblx0ICogQHByaXZhdGVcblx0ICovXG5cdF9hZGRDaGlsZCggc2NvcGUgKSB7XG5cdFx0dGhpcy5fLmNoaWxkU2NvcGVzLnB1c2goc2NvcGUpO1xuXHRcdHRoaXMuXy5zZWVuQ2hpbGRzKys7XG5cdFx0bGV0IGxpc3RzICAgICA9IHtcblx0XHRcdCAgICAnc3RhYmxlJyAgICAgIDogcyA9PiB7XG5cdFx0XHRcdCAgICB0aGlzLl8udW5TdGFibGVDaGlsZHMtLTtcblx0XHRcdFx0ICAgIGlmICggIXRoaXMuXy51blN0YWJsZUNoaWxkcyApXG5cdFx0XHRcdFx0ICAgIHRoaXMuZW1pdChcInN0YWJsZVRyZWVcIiwgdGhpcylcblx0XHRcdCAgICB9LFxuXHRcdFx0ICAgICd1bnN0YWJsZScgICAgOiBzID0+IHtcblx0XHRcdFx0ICAgIHRoaXMuXy51blN0YWJsZUNoaWxkcysrO1xuXHRcdFx0XHQgICAgaWYgKCAxID09IHRoaXMuXy51blN0YWJsZUNoaWxkcyApXG5cdFx0XHRcdFx0ICAgIHRoaXMuZW1pdChcInVuc3RhYmxlVHJlZVwiLCB0aGlzKVxuXHRcdFx0ICAgIH0sXG5cdFx0XHQgICAgJ3N0YWJsZVRyZWUnICA6IHMgPT4ge1xuXHRcdFx0XHQgICAgdGhpcy5fLnVuU3RhYmxlQ2hpbGRzLS07XG5cdFx0XHRcdCAgICBpZiAoICF0aGlzLl8udW5TdGFibGVDaGlsZHMgKVxuXHRcdFx0XHRcdCAgICB0aGlzLmVtaXQoXCJzdGFibGVUcmVlXCIsIHRoaXMpXG5cdFx0XHQgICAgfSxcblx0XHRcdCAgICAndW5zdGFibGVUcmVlJzogcyA9PiB7XG5cdFx0XHRcdCAgICB0aGlzLl8udW5TdGFibGVDaGlsZHMrKztcblx0XHRcdFx0ICAgIGlmICggMSA9PSB0aGlzLl8udW5TdGFibGVDaGlsZHMgKVxuXHRcdFx0XHRcdCAgICB0aGlzLmVtaXQoXCJ1bnN0YWJsZVRyZWVcIiwgdGhpcylcblx0XHRcdCAgICB9LFxuXHRcdFx0ICAgICdkZXN0cm95JyAgICAgOiBjdHggPT4ge1xuXHRcdFx0XHQgICAgaWYgKCBjdHguXy51blN0YWJsZUNoaWxkcyApXG5cdFx0XHRcdFx0ICAgIHRoaXMuXy51blN0YWJsZUNoaWxkcy0tO1xuXHRcdFx0XHQgICAgaWYgKCAhY3R4LmlzU3RhYmxlKCkgKVxuXHRcdFx0XHRcdCAgICB0aGlzLl8udW5TdGFibGVDaGlsZHMtLTtcblx0XHRcdFx0XG5cdFx0XHRcdCAgICBpZiAoICF0aGlzLl8udW5TdGFibGVDaGlsZHMgKVxuXHRcdFx0XHRcdCAgICB0aGlzLmVtaXQoXCJzdGFibGVUcmVlXCIsIHRoaXMpXG5cdFx0XHQgICAgfVxuXHRcdCAgICB9LFxuXHRcdCAgICB3YXNTdGFibGUgPSB0aGlzLl8udW5TdGFibGVDaGlsZHM7XG5cdFx0XG5cdFx0IXNjb3BlLmlzU3RhYmxlKCkgJiYgdGhpcy5fLnVuU3RhYmxlQ2hpbGRzKys7XG5cdFx0c2NvcGUuXy51blN0YWJsZUNoaWxkcyAmJiB0aGlzLl8udW5TdGFibGVDaGlsZHMrKztcblx0XHR0aGlzLl8uY2hpbGRTY29wZXNMaXN0LnB1c2gobGlzdHMpO1xuXHRcdFxuXHRcdGlmICggIXdhc1N0YWJsZSAmJiB0aGlzLl8udW5TdGFibGVDaGlsZHMgKVxuXHRcdFx0dGhpcy5lbWl0KFwidW5zdGFibGVUcmVlXCIsIHRoaXMpO1xuXHRcdFxuXHRcdHNjb3BlLm9uKGxpc3RzKTtcblx0fVxuXHRcblx0X3JtQ2hpbGQoIGN0eCApIHtcblx0XHRsZXQgaSAgICAgICAgID0gdGhpcy5fLmNoaWxkU2NvcGVzLmluZGV4T2YoY3R4KSxcblx0XHQgICAgd2FzU3RhYmxlID0gdGhpcy5fLnVuU3RhYmxlQ2hpbGRzO1xuXHRcdGlmICggaSAhPSAtMSApIHtcblx0XHRcdHRoaXMuXy5jaGlsZFNjb3Blcy5zcGxpY2UoaSwgMSk7XG5cdFx0XHQhY3R4LmlzU3RhYmxlKCkgJiYgdGhpcy5fLnVuU3RhYmxlQ2hpbGRzLS07XG5cdFx0XHRjdHguXy51blN0YWJsZUNoaWxkcyAmJiB0aGlzLl8udW5TdGFibGVDaGlsZHMtLTtcblx0XHRcdGN0eC51bih0aGlzLl8uY2hpbGRTY29wZXNMaXN0LnNwbGljZShpLCAxKVswXSk7XG5cdFx0XHRpZiAoIHdhc1N0YWJsZSAmJiAhdGhpcy5fLnVuU3RhYmxlQ2hpbGRzIClcblx0XHRcdFx0dGhpcy5lbWl0KFwic3RhYmxlVHJlZVwiKVxuXHRcdH1cblx0fVxuXHRcblx0cmV0YWluKCByZWFzb24gKSB7XG5cdFx0dGhpcy5fX3JldGFpbnMuYWxsKys7XG5cdFx0Ly9jb25zb2xlLmxvZyhcInJldGFpblwiLCB0aGlzLl9pZCwgcmVhc29uKTtcblx0XHRpZiAoIHJlYXNvbiApIHtcblx0XHRcdHRoaXMuX19yZXRhaW5zW3JlYXNvbl0gPSB0aGlzLl9fcmV0YWluc1tyZWFzb25dIHx8IDA7XG5cdFx0XHR0aGlzLl9fcmV0YWluc1tyZWFzb25dKys7XG5cdFx0fVxuXHR9XG5cdFxuXHRkaXNwb3NlKCByZWFzb24gKSB7XG5cdFx0Ly9jb25zb2xlLmxvZyhcImRpc3Bvc2VcIiwgdGhpcy5faWQsIHJlYXNvbik7XG5cdFx0aWYgKCByZWFzb24gKSB7XG5cdFx0XHRpZiAoICF0aGlzLl9fcmV0YWluc1tyZWFzb25dIClcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiRGlzcG9zZSBtb3JlIHRoYW4gcmV0YWluaW5nIDogXCIgKyByZWFzb24pO1xuXHRcdFx0dGhpcy5fX3JldGFpbnNbcmVhc29uXS0tO1xuXHRcdH1cblx0XHRcblx0XHRpZiAoICF0aGlzLl9fcmV0YWlucy5hbGwgKVxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiRGlzcG9zZSBtb3JlIHRoYW4gcmV0YWluaW5nICFcIik7XG5cdFx0XG5cdFx0dGhpcy5fX3JldGFpbnMuYWxsLS07XG5cdFx0XG5cdFx0aWYgKCAhdGhpcy5fX3JldGFpbnMuYWxsICkge1xuXHRcdFx0Ly9jb25zb2xlLmxvZyhcImRpc3Bvc2UgZG8gZGVzdHJveSBcIiwgdGhpcy5faWQsIHRoaXMuX3BlcnNpc3RlbmNlVG0pO1xuXHRcdFx0aWYgKCB0aGlzLl8ucGVyc2lzdGVuY2VUbSApIHtcblx0XHRcdFx0dGhpcy5fLmRlc3Ryb3lUTSAmJiBjbGVhclRpbWVvdXQodGhpcy5fLmRlc3Ryb3lUTSk7XG5cdFx0XHRcdHRoaXMuXy5kZXN0cm95VE0gPSBzZXRUaW1lb3V0KFxuXHRcdFx0XHRcdGUgPT4ge1xuXHRcdFx0XHRcdFx0dGhpcy50aGVuKHMgPT4ge1xuXHRcdFx0XHRcdFx0XHQhdGhpcy5fX3JldGFpbnMuYWxsICYmICF0aGlzLmRlYWQgJiYgdGhpcy5kZXN0cm95KClcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0dGhpcy5fLnBlcnNpc3RlbmNlVG1cblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHR0aGlzLnRoZW4ocyA9PlxuXHRcdFx0XHRcdCAgICAgICAgICAoIXRoaXMuX19yZXRhaW5zLmFsbCAmJiAhdGhpcy5kZWFkICYmIHRoaXMuZGVzdHJveSgpKVxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRcblx0LyoqXG5cdCAqIG9yZGVyIGRlc3Ryb3kgb2YgbG9jYWwgc3RvcmVzXG5cdCAqL1xuXHRkZXN0cm95KCkge1xuXHRcdGxldCBjdHggPSB0aGlzLl8uX3Njb3BlO1xuXHRcdFsuLi50aGlzLl8uY2hpbGRTY29wZXNdLm1hcChzY29wZSA9PiBzY29wZS5kZXN0cm95KCkpXG5cdFx0Zm9yICggbGV0IGtleSBpbiBjdHggKVxuXHRcdFx0aWYgKCAhaXMuZm4oY3R4W2tleV0pICkge1xuXHRcdFx0XHRpZiAoIGtleSA9PSBcIiRwYXJlbnRcIiApIGNvbnRpbnVlO1xuXHRcdFx0XHQhY3R4W2tleV0uX2F1dG9EZXN0cm95ICYmIGN0eFtrZXldLmRpc3Bvc2UoXCJzY29wZWRcIik7XG5cdFx0XHR9XG5cdFx0dGhpcy5fLnN0YWJpbGl6ZXJUTSAmJiBjbGVhclRpbWVvdXQodGhpcy5fLnN0YWJpbGl6ZXJUTSk7XG5cdFx0dGhpcy5fLnByb3BhZ1RNICYmIGNsZWFyVGltZW91dCh0aGlzLl8ucHJvcGFnVE0pO1xuXHRcdE9iamVjdC5rZXlzKFxuXHRcdFx0dGhpcy5fLl9saXN0ZW5pbmdcblx0XHQpLmZvckVhY2goXG5cdFx0XHRpZCA9PiAoKGlkICE9PSBcIiRwYXJlbnRcIikgJiYgdGhpcy5fLl9zY29wZVtpZF0ucmVtb3ZlTGlzdGVuZXIodGhpcy5fLl9saXN0ZW5pbmdbaWRdKSlcblx0XHQpO1xuXHRcdHdoaWxlICggdGhpcy5fLl9taXhlZExpc3QubGVuZ3RoICkge1xuXHRcdFx0dGhpcy5fLl9taXhlZFswXS5yZW1vdmVMaXN0ZW5lcih0aGlzLl8uX21peGVkTGlzdC5zaGlmdCgpKTtcblx0XHRcdHRoaXMuXy5fbWl4ZWQuc2hpZnQoKS5kaXNwb3NlKFwibWl4ZWRUb1wiKTtcblx0XHR9XG5cdFx0Wy4uLnRoaXMuXy5mb2xsb3dlcnNdLm1hcChmb2xsb3dlciA9PiB0aGlzLnVuQmluZCguLi5mb2xsb3dlcikpO1xuXHRcdGlmICggdGhpcy5fLl9wYXJlbnRMaXN0ICkge1xuXHRcdFx0dGhpcy5wYXJlbnQuX3JtQ2hpbGQodGhpcyk7XG5cdFx0XHR0aGlzLnBhcmVudC5yZW1vdmVMaXN0ZW5lcih0aGlzLl8uX3BhcmVudExpc3QpO1xuXHRcdFx0dGhpcy5wYXJlbnQuZGlzcG9zZShcImlzTXlQYXJlbnRcIik7XG5cdFx0XHR0aGlzLl8uX3BhcmVudExpc3QgPSBudWxsO1xuXHRcdH1cblx0XHR0aGlzLmRlYWQgPSB0cnVlO1xuXHRcdGRlbGV0ZSBhbGxTY29wZXNbdGhpcy5faWRdO1xuXHRcdHRoaXMuZW1pdChcImRlc3Ryb3lcIiwgdGhpcyk7XG5cdFx0XG5cdFx0XG5cdH1cbn1cblxuXG5TY29wZS5pc1Njb3BlID0gZnVuY3Rpb24gKCBvYmogKSB7XG5cdHJldHVybiBvYmogaW5zdGFuY2VvZiBTY29wZVxufTtcblxuU2NvcGUuaXNTY29wZUNsYXNzID0gZnVuY3Rpb24gKCBvYmogKSB7XG5cdHJldHVybiBTY29wZS5pc1Byb3RvdHlwZU9mKG9iaikgfHwgb2JqID09PSBTY29wZVxufTtcbmV4cG9ydCBkZWZhdWx0IFNjb3BlO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9TY29wZS5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImlzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiaXNcIlxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzaG9ydGlkXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwic2hvcnRpZFwiXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXG4gKiBUaGUgTUlUIExpY2Vuc2UgKE1JVClcbiAqIENvcHlyaWdodCAoYykgMjAxOS4gV2lzZSBXaWxkIFdlYlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUg4oCcU29mdHdhcmXigJ0pLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQg4oCcQVMgSVPigJ0sIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuICpcbiAqICBAYXV0aG9yIDogTmF0aGFuYWVsIEJyYXVuXG4gKiAgQGNvbnRhY3QgOiBuOHR6LmpzQGdtYWlsLmNvbVxuICovXG5cbmltcG9ydCBpcyBmcm9tICdpcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVtaXR0ZXIge1xuXHRfZXZlbnRzID0ge307XG5cdFxuXHRvbiggZXZ0LCBjYiApIHtcblx0XHRpZiAoICFpcy5zdHJpbmcoZXZ0KSAmJiBldnQgKVxuXHRcdFx0cmV0dXJuIE9iamVjdC5rZXlzKGV2dCkuZm9yRWFjaChrID0+IHRoaXMub24oaywgZXZ0W2tdKSk7XG5cdFx0XG5cdFx0dGhpcy5fZXZlbnRzW2V2dF0gPSB0aGlzLl9ldmVudHNbZXZ0XSB8fCBbXTtcblx0XHR0aGlzLl9ldmVudHNbZXZ0XS5wdXNoKGNiKTtcblx0fVxuXHRcblx0dW4oIGV2dCwgY2IgKSB7XG5cdFx0aWYgKCAhaXMuc3RyaW5nKGV2dCkgJiYgZXZ0IClcblx0XHRcdHJldHVybiBPYmplY3Qua2V5cyhldnQpLmZvckVhY2goayA9PiB0aGlzLnVuKGssIGV2dFtrXSkpO1xuXHRcdFxuXHRcdGlmICggIXRoaXMuX2V2ZW50c1tldnRdICkgcmV0dXJuO1xuXHRcdGxldCBpID0gdGhpcy5fZXZlbnRzW2V2dF0uaW5kZXhPZihjYik7XG5cdFx0dGhpcy5fZXZlbnRzW2V2dF0uc3BsaWNlKGksIDEpO1xuXHR9XG5cdFxuXHRlbWl0KCBldnQsIC4uLmFyZ3ogKSB7XG5cdFx0aWYgKCAhdGhpcy5fZXZlbnRzW2V2dF0gKSByZXR1cm47XG5cdFx0bGV0IGxpc3RzID0gWy4uLnRoaXMuX2V2ZW50c1tldnRdXTtcblx0XHRcblx0XHRmb3IgKCBsZXQgaSA9IDA7IGkgPCBsaXN0cy5sZW5ndGg7IGkrKyApXG5cdFx0XHRsaXN0c1tpXSguLi5hcmd6KVxuXHR9XG5cdFxuXHRhZGRMaXN0ZW5lcigpIHtcblx0XHR0aGlzLm9uKC4uLmFyZ3VtZW50cyk7XG5cdH1cblx0XG5cdHJlbW92ZUxpc3RlbmVyKCkge1xuXHRcdHRoaXMudW4oLi4uYXJndW1lbnRzKTtcblx0fVxuXHRcblx0cmVtb3ZlQWxsTGlzdGVuZXJzKCkge1xuXHRcdHRoaXMuX2V2ZW50cyA9IHt9O1xuXHR9XG5cdFxuXHRvbmNlKCBldnQsIGNiICkge1xuXHRcdGxldCBmbjtcblx0XHR0aGlzLm9uKGV2dCwgZm4gPSAoIC4uLmFyZ3ogKSA9PiB7XG5cdFx0XHR0aGlzLnVuKGV2dCwgZm4pO1xuXHRcdFx0Y2IoLi4uYXJneilcblx0XHR9KTtcblx0fVxuXHRcblx0XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWxzL0VtaXR0ZXIuanMiLCIvKlxuICogVGhlIE1JVCBMaWNlbnNlIChNSVQpXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTkuIFdpc2UgV2lsZCBXZWJcbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIOKAnFNvZnR3YXJl4oCdKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIOKAnEFTIElT4oCdLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiAqXG4gKiAgQGF1dGhvciA6IE5hdGhhbmFlbCBCcmF1blxuICogIEBjb250YWN0IDogbjh0ei5qc0BnbWFpbC5jb21cbiAqL1xuXG5jb25zdCBpcyA9IHJlcXVpcmUoJ2lzJyk7XG5cbmV4cG9ydCBmdW5jdGlvbiB3YWxrblNldCggb2JqLCBwYXRoLCB2YWx1ZSwgc3RhY2sgKSB7XG5cdGlmICggaXMuc3RyaW5nKHBhdGgpIClcblx0XHRwYXRoID0gcGF0aC5zcGxpdCgnLicpO1xuXHRpZiAoICFwYXRoLmxlbmd0aCApXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHRlbHNlIGlmICggcGF0aC5sZW5ndGggPT0gMSApXG5cdFx0cmV0dXJuIG9ialtwYXRoWzBdXSA9IHN0YWNrXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgID8gWy4uLihvYmpbcGF0aFswXV0gfHwgW10pLCB2YWx1ZV1cblx0XHQgICAgICAgICAgICAgICAgICAgICAgOiB2YWx1ZTtcblx0ZWxzZVxuXHRcdHJldHVybiB3YWxrblNldChcblx0XHRcdG9ialtwYXRoWzBdXSA9XG5cdFx0XHRcdG9ialtwYXRoWzBdXSB8fCB7fSxcblx0XHRcdHBhdGguc2xpY2UoMSksXG5cdFx0XHR2YWx1ZSwgc3RhY2tcblx0XHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gd2Fsa25HZXQoIG9iaiwgcGF0aCwgaXNLZXkgKSB7XG5cdGlmICggaXMuc3RyaW5nKHBhdGgpIClcblx0XHRwYXRoID0gcGF0aC5zcGxpdCgnLicpO1xuXHRyZXR1cm4gcGF0aC5sZW5ndGhcblx0ICAgICAgID8gb2JqW3BhdGhbMF1dICYmIHdhbGtuR2V0KG9ialtwYXRoWzBdXSwgcGF0aC5zbGljZSgxKSlcblx0ICAgICAgIDogb2JqO1xufVxuXG4vL0B0b2RvXG5leHBvcnQgZnVuY3Rpb24ga2V5V2Fsa25TZXQoIG9iaiwgcGF0aCwgdmFsdWUsIHN0YWNrICkge1xuXHRpZiAoIGlzLnN0cmluZyhwYXRoKSApXG5cdFx0cGF0aCA9IHBhdGguc3BsaXQoLyhcXD58XFwvKS9pZykuZmlsdGVyKHYgPT4gKHYgIT09ICc+JyAmJiB2KSk7XG5cdHJldHVybiB3YWxrblNldChvYmosIHBhdGgsIHZhbHVlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGtleVdhbGtuR2V0KCBvYmosIHBhdGgsIGlzS2V5ICkge1xuXHRpZiAoIGlzLnN0cmluZyhwYXRoKSApXG5cdFx0cGF0aCA9IHBhdGguc3BsaXQoLyhcXD58XFwvKS9pZykuZmlsdGVyKHYgPT4gKHYgIT09ICc+JyAmJiB2KSk7XG5cdHJldHVybiBwYXRoLmxlbmd0aFxuXHQgICAgICAgPyBvYmpbcGF0aFswXV0gJiYgd2Fsa25HZXQob2JqW3BhdGhbMF1dLCBwYXRoLnNsaWNlKDEpKVxuXHQgICAgICAgOiBvYmo7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWxzL3V0aWxzLmpzIiwiLypcbiAqIFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuICogQ29weXJpZ2h0IChjKSAyMDE5LiBXaXNlIFdpbGQgV2ViXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSDigJxTb2Z0d2FyZeKAnSksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCDigJxBUyBJU+KAnSwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4gKlxuICogIEBhdXRob3IgOiBOYXRoYW5hZWwgQnJhdW5cbiAqICBAY29udGFjdCA6IG44dHouanNAZ21haWwuY29tXG4gKi9cblxuY29uc3QgaXMgICAgICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJ2lzJyksXG4gICAgICBTY29wZSAgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9TY29wZScpLFxuICAgICAgeyBrZXlXYWxrblNldCwga2V5V2Fsa25HZXQgfSA9IHJlcXVpcmUoJy4vdXRpbHMvdXRpbHMnKSxcbiAgICAgIEV2ZW50RW1pdHRlciAgICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL3V0aWxzL0VtaXR0ZXInKSxcbiAgICAgIFRhc2tTZXF1ZW5jZXIgICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL3V0aWxzL1Rhc2tTZXF1ZW5jZXInKSxcbiAgICAgIHNob3J0aWQgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlKCdzaG9ydGlkJyksXG4gICAgICBvYmpQcm90byAgICAgICAgICAgICAgICAgICAgID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHt9KTtcblxuY2xhc3MgU3RvcmUgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuXHQvL3N0YXRpYyB1c2UgICAgICAgICAgICAgICAgICA9IFtdOy8vIG92ZXJyaWRhYmxlIGxpc3Qgb2Ygc291cmNlIHN0b3Jlc1xuXHRzdGF0aWMgZm9sbG93Oy8vIG92ZXJyaWRhYmxlIGxpc3Qgb2Ygc3RvcmUgdGhhdCB3aWxsIGFsbG93IHB1c2ggaWYgdXBkYXRlZFxuXHRzdGF0aWMgcmVxdWlyZTtcblx0c3RhdGljIHN0YXRpY1Njb3BlICAgPSBuZXcgU2NvcGUoe30sIHsgaWQ6IFwic3RhdGljXCIgfSk7XG5cdHN0YXRpYyBzdGF0ZSAgICAgICAgID0gdW5kZWZpbmVkOy8vIGRlZmF1bHQgc3RhdGVcblx0LyoqXG5cdCAqIGlmIHJldGFpbiBnb2VzIHRvIDAgOlxuXHQgKiBmYWxzZSB0byBub3QgZGVzdHJveSxcblx0ICogMCB0byBzeW5jIGF1dG8gZGVzdHJveVxuXHQgKiBNcyB0byBhdXRvZGVzdHJveSBhZnRlciB0bSBtcyBpZiBubyByZXRhaW4gaGFzIGJlZW4gY2FsbGVkXG5cdCAqIEB0eXBlIHtib29sZWFufEludH1cblx0ICovXG5cdHN0YXRpYyBwZXJzaXN0ZW5jZVRtID0gZmFsc2U7XG5cdFxuXHQvKipcblx0ICogQ29uc3RydWN0b3IsIHdpbGwgYnVpbGQgYSByZXNjb3BlIHN0b3JlXG5cdCAqXG5cdCAqIChzY29wZSwge3JlcXVpcmUsdXNlLGFwcGx5LHN0YXRlLCBkYXRhfSlcblx0ICogKHNjb3BlKVxuXHQgKlxuXHQgKiBAcGFyYW0gc2NvcGUge29iamVjdH0gc2NvcGUgd2hlcmUgdG8gZmluZCB0aGUgb3RoZXIgc3RvcmVzIChkZWZhdWx0IDogc3RhdGljXG5cdCAqICAgICBzdGF0aWNTY29wZSApXG5cdCAqIEBwYXJhbSBrZXlzIHtBcnJheX0gKHBhc3NlZCB0byBTdG9yZTo6bWFwKSBFeCA6IFtcInNlc3Npb25cIiwgXCJvdGhlck5hbWVkU3RvcmU6a2V5XCIsXG5cdCAqICAgICBvdGhlclN0b3JlLmFzKFwib3RoZXJLZXlcIildXG5cdCAqL1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHRcdGxldCBhcmd6ICAgICAgICAgPSBbLi4uYXJndW1lbnRzXSxcblx0XHQgICAgX3N0YXRpYyAgICAgID0gdGhpcy5jb25zdHJ1Y3Rvcixcblx0XHQgICAgc2NvcGUgICAgICAgID0gYXJnelswXSBpbnN0YW5jZW9mIFNjb3BlXG5cdFx0ICAgICAgICAgICAgICAgICAgID8gYXJnei5zaGlmdCgpXG5cdFx0ICAgICAgICAgICAgICAgICAgIDogX3N0YXRpYy5zY29wZSA/IFNjb3BlLmdldFNjb3BlKF9zdGF0aWMuc2NvcGUpXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGlzLnN0cmluZyhhcmd6WzBdKVxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFNjb3BlLmdldFNjb3BlKGFyZ3ouc2hpZnQoKSlcblx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfc3RhdGljLnN0YXRpY1Njb3BlLFxuXHRcdCAgICBjZmcgICAgICAgICAgPSBhcmd6WzBdICYmICFpcy5hcnJheShhcmd6WzBdKSAmJiAhaXMuc3RyaW5nKGFyZ3pbMF0pXG5cdFx0ICAgICAgICAgICAgICAgICAgID8gYXJnei5zaGlmdCgpXG5cdFx0ICAgICAgICAgICAgICAgICAgIDoge30sXG5cdFx0ICAgIHRhc2tRdWV1ZSAgICA9IGlzLmFycmF5KGFyZ3pbMF0pID8gYXJnei5zaGlmdCgpIDogbnVsbCxcblx0XHQgICAgbmFtZSAgICAgICAgID0gY2ZnLm5hbWUgfHwgX3N0YXRpYy5uYW1lLFxuXHRcdCAgICB3YXRjaHMgICAgICAgPSBjZmcudXNlIHx8IFtdLFxuXHRcdCAgICBhcHBseSAgICAgICAgPSBjZmcuYXBwbHkgfHwgbnVsbCxcblx0XHQgICAgaW5pdGlhbFN0YXRlID0gX3N0YXRpYy5zdGF0ZSB8fCBfc3RhdGljLmluaXRpYWxTdGF0ZSB8fCBfc3RhdGljLmRlZmF1bHRTdGF0ZTtcblx0XHRcblx0XHR0aGlzLl91aWQgPSBjZmcuX3VpZCB8fCBzaG9ydGlkLmdlbmVyYXRlKCk7XG5cdFx0XG5cdFx0dGhpcy5fX3JldGFpbnMgICAgPSB7IGFsbDogMCB9O1xuXHRcdHRoaXMuX19sb2NrcyAgICAgID0geyBhbGw6IDAgfTtcblx0XHR0aGlzLl9vblN0YWJpbGl6ZSA9IFtdO1xuXHRcdFxuXHRcdC8vIGF1dG9EZXN0cm95VG1cblx0XHR0aGlzLl9hdXRvRGVzdHJveSAgID0gISF0aGlzLl9wZXJzaXN0ZW5jZVRtO1xuXHRcdHRoaXMuX3BlcnNpc3RlbmNlVG0gPSBjZmcucGVyc2lzdGVuY2VUbSB8fCBfc3RhdGljLnBlcnNpc3RlbmNlVG0gfHwgKGNmZy5hdXRvRGVzdHJveSB8fCBfc3RhdGljLmF1dG9EZXN0cm95KSAmJiA1O1xuXHRcdHRoaXMuX2NmZyAgICAgICAgICAgPSBjZmc7XG5cdFx0XG5cdFx0aWYgKCBjZmcgJiYgY2ZnLm9uICkge1xuXHRcdFx0dGhpcy5vbihjZmcub24pO1xuXHRcdH1cblx0XHRcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuXHRcdFxuXHRcdGlmICggc2NvcGUuc3RvcmVzICkge1xuXHRcdFx0dGhpcy5zY29wZU9iaiA9IHNjb3BlO1xuXHRcdFx0dGhpcy5zY29wZSAgICA9IHNjb3BlLnN0b3Jlcztcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHR0aGlzLnNjb3BlT2JqID0gbmV3IFNjb3BlKHNjb3BlKTtcblx0XHRcdHRoaXMuc2NvcGUgICAgPSBzY29wZS5zdG9yZXM7XG5cdFx0fVxuXHRcdFxuXHRcdC8vIHN0YW5kYXJkaXplZCBzY29wZSBhY2Nlc3Ncblx0XHR0aGlzLiRzY29wZSAgICA9IHRoaXMuc2NvcGVPYmo7XG5cdFx0dGhpcy4kc3RvcmVzICAgPSB0aGlzLnNjb3BlT2JqLnN0b3Jlcztcblx0XHR0aGlzLiRhY3Rpb25zICA9IHRoaXMuc2NvcGVPYmouYWN0aW9ucztcblx0XHR0aGlzLiRkaXNwYXRjaCA9IHRoaXMuc2NvcGVPYmouZGlzcGF0Y2guYmluZCh0aGlzLnNjb3BlT2JqKTtcblx0XHRcblx0XHR0aGlzLl9yZXYgICAgID0gdGhpcy5jb25zdHJ1Y3Rvci5fcmV2IHx8IDA7XG5cdFx0dGhpcy5fcmV2cyAgICA9IHt9O1xuXHRcdHRoaXMuc3RvcmVzICAgPSB7fTtcblx0XHR0aGlzLl9yZXF1aXJlID0gW107XG5cdFx0dGhpcy5fc291cmNlcyA9IFtuYW1lXTtcblx0XHRcblx0XHQvLyByZWdpc3RlciBzb3VyY2Ugc3RvcmVzXG5cdFx0aWYgKCBpcy5hcnJheShfc3RhdGljLnVzZSkgKSB7XG5cdFx0XHR0aGlzLl91c2UgPSBbLi4ud2F0Y2hzLCAuLi4oX3N0YXRpYy51c2UgfHwgW10pLm1hcChcblx0XHRcdFx0a2V5ID0+IHtcblx0XHRcdFx0XHRsZXQgcmVmID0ga2V5Lm1hdGNoKC9eKFxcIT8pKFteXFw6XSopKD86XFw6KC4qKSk/JC8pO1xuXHRcdFx0XHRcdGlmICggcmVmWzFdICkge1xuXHRcdFx0XHRcdFx0bGV0IHJlZjIgPSByZWZbMl0uc3BsaXQoJy4nKTtcblx0XHRcdFx0XHRcdHRoaXMuX3JlcXVpcmUucHVzaChyZWZbM10gfHwgcmVmMltyZWYyLmxlbmd0aCAtIDFdKTsvLyByZXF1aXJlIGNoZWNrIHZhbHVlIG9mIHRoZSBhbGlhc2VkXG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpbXBvcnRlZCB2YWx1ZVxuXHRcdFx0XHRcdFx0cmV0dXJuIGtleS5zdWJzdHIoMSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybiBrZXk7XG5cdFx0XHRcdH1cblx0XHRcdCldO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdHRoaXMuX3VzZSA9IFsuLi53YXRjaHMsIC4uLihcblx0XHRcdFx0X3N0YXRpYy51c2UgPyBPYmplY3Qua2V5cyhfc3RhdGljLnVzZSlcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAubWFwKFxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAga2V5ID0+IHtcblx0XHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgbGV0IHJlZiA9IGtleS5tYXRjaCgvXihcXCE/KSguKikkLyk7XG5cdFx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgIHJlZlsxXSAmJiB0aGlzLl9yZXF1aXJlLnB1c2goX3N0YXRpYy51c2Vba2V5XSk7XG5cdFx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgIHJldHVybiByZWZbMl0gKyAoKF9zdGF0aWMudXNlW2tleV0gPT09IHRydWUpXG5cdFx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAnJ1xuXHRcdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJzonICsgX3N0YXRpYy51c2Vba2V5XSk7XG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICB9XG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgKSA6IFtdXG5cdFx0XHQpXTtcblx0XHR9XG5cdFx0XG5cdFx0aWYgKCBfc3RhdGljLnJlcXVpcmUgKVxuXHRcdFx0dGhpcy5fcmVxdWlyZS5wdXNoKC4uLl9zdGF0aWMucmVxdWlyZSk7XG5cdFx0aWYgKCBjZmcucmVxdWlyZSApXG5cdFx0XHR0aGlzLl9yZXF1aXJlLnB1c2goLi4uY2ZnLnJlcXVpcmUpO1xuXHRcdFxuXHRcdHRoaXMuX2ZvbGxvd2VycyA9IFtdO1xuXHRcdHRoaXMuX2NoYW5nZXNTVyA9IGluaXRpYWxTdGF0ZSB8fCB7fTtcblx0XHR0aGlzLnN0YXRlICAgICAgPSBpbml0aWFsU3RhdGUgJiYge307XG5cdFx0XG5cdFx0aWYgKCBhcHBseSApXG5cdFx0XHR0aGlzLmFwcGx5ID0gYXBwbHk7XG5cdFx0XG5cdFx0LyoqXG5cdFx0ICogSW5pdGlhbCBzdGF0ZSBpc24ndCBmdWxseSBpbml0aWFsaXplZCAoIGNoaWxkcyBjb25zdHJ1Y3RvcnMgY2FuIHNldCBpdCApXG5cdFx0ICogU2NvcGUgYmFzZWQgaW5zdGFuY2UgaGF2ZSB0YXNrUXVldWUgdG8gZGVsYXkgaW5pdCBzeW5jaHJvbm91c2x5LCBpZiBub3Rcblx0XHQgKiBwcmVzZW50IHdlIHVzZSBzZXRUaW1lb3V0XG5cdFx0ICovXG5cdFx0aWYgKCB0YXNrUXVldWUgKSB7XG5cdFx0XHR0YXNrUXVldWUucHVzaCh0aGlzLl9hZnRlckNvbnN0cnVjdG9yLmJpbmQodGhpcykpXG5cdFx0fVxuXHRcdGVsc2Vcblx0XHRcdHNldFRpbWVvdXQodGhpcy5fYWZ0ZXJDb25zdHJ1Y3Rvci5iaW5kKHRoaXMpKVxuXHR9XG5cdFxuXHQvKipcblx0ICogR2V0IHRoZSBpbmNvbWluZyBzdGF0ZSAoIGZvciBpbW1lZGlhdGUgc3RhdGUgcmVsYXRpdmUgYWN0aW9ucyApXG5cdCAqIEByZXR1cm5zIHt7fXwqfVxuXHQgKi9cblx0Z2V0IG5leHRTdGF0ZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5fbmV4dFN0YXRlIHx8IHRoaXMuc3RhdGU7XG5cdH1cblx0XG5cdF9hZnRlckNvbnN0cnVjdG9yKCkge1xuXHRcdGxldCBjZmcgICAgICAgICAgPSB0aGlzLl9jZmcsXG5cdFx0ICAgIF9zdGF0aWMgICAgICA9IHRoaXMuY29uc3RydWN0b3IsXG5cdFx0ICAgIHNuYXBzaG90ICAgICA9IHRoaXMucmVzdG9yZSh1bmRlZmluZWQsIHRydWUpLFxuXHRcdCAgICBpbml0aWFsU3RhdGUgPSB0aGlzLnN0YXRlLFxuXHRcdCAgICBpbml0aWFsRGF0YSAgPSB0aGlzLmRhdGEsXG5cdFx0ICAgIGFwcGxpZWQ7XG5cdFx0e1xuXHRcdFx0XG5cdFx0XHRpZiAoIGluaXRpYWxEYXRhIClcblx0XHRcdFx0dGhpcy5kYXRhID0gaW5pdGlhbERhdGE7XG5cdFx0XHRlbHNlIGlmICggX3N0YXRpYy5kYXRhICE9PSB1bmRlZmluZWQgKVxuXHRcdFx0XHR0aGlzLmRhdGEgPSB7IC4uLl9zdGF0aWMuZGF0YSB9O1xuXHRcdFx0ZWxzZSBpZiAoIGNmZy5oYXNPd25Qcm9wZXJ0eShcImRhdGFcIikgKVxuXHRcdFx0XHR0aGlzLmRhdGEgPSBjZmcuZGF0YTtcblx0XHRcdFxuXHRcdFx0aWYgKCBjZmcuaGFzT3duUHJvcGVydHkoXCJzdGF0ZVwiKSAmJiBjZmcuc3RhdGUgIT09IHVuZGVmaW5lZCApXG5cdFx0XHRcdGluaXRpYWxTdGF0ZSA9IHsgLi4uaW5pdGlhbFN0YXRlLCAuLi5jZmcuc3RhdGUgfTtcblx0XHRcdFxuXHRcdFx0aWYgKCB0aGlzLmRhdGEgPT09IHVuZGVmaW5lZCApIHtcblx0XHRcdFx0aWYgKCBpbml0aWFsU3RhdGUgfHwgdGhpcy5fdXNlLmxlbmd0aCApIHsvLyBzeW5jIGFwcGx5XG5cdFx0XHRcdFx0dGhpcy5fbmV4dFN0YXRlID0gdGhpcy5fY2hhbmdlc1NXID0ge1xuXHRcdFx0XHRcdFx0Li4udGhpcy5fY2hhbmdlc1NXLFxuXHRcdFx0XHRcdFx0Li4uKGluaXRpYWxTdGF0ZSB8fCB7fSksXG5cdFx0XHRcdFx0XHQuLi50aGlzLiRzY29wZS5tYXAodGhpcywgdGhpcy5fdXNlKVxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSAgICAgID0ge307XG5cdFx0XHRcdFx0aWYgKCB0aGlzLnNob3VsZEFwcGx5KHRoaXMuX25leHRTdGF0ZSkgJiYgdGhpcy5kYXRhID09PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRcdFx0XHR0aGlzLmRhdGEgICAgICAgPSB0aGlzLmFwcGx5KHRoaXMuZGF0YSwgdGhpcy5fbmV4dFN0YXRlLCB0aGlzLl9jaGFuZ2VzU1cpO1xuXHRcdFx0XHRcdFx0YXBwbGllZCAgICAgICAgID0gdHJ1ZTtcblx0XHRcdFx0XHRcdHRoaXMuc3RhdGUgICAgICA9IHRoaXMuX2NoYW5nZXNTVztcblx0XHRcdFx0XHRcdHRoaXMuX25leHRTdGF0ZSA9IHRoaXMuX2NoYW5nZXNTVyA9IG51bGw7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0YXBwbGllZCAgICAgICAgID0gdHJ1ZTtcblx0XHRcdFx0dGhpcy5zdGF0ZSAgICAgID0gey8vIGFzc3VtZSB0aGlzIHN0YXRlIGlzIHN5bmMgd2l0aCBpbml0aWFsIGRhdGFcblx0XHRcdFx0XHQuLi50aGlzLl9jaGFuZ2VzU1csXG5cdFx0XHRcdFx0Li4uKGluaXRpYWxTdGF0ZSB8fCB7fSksXG5cdFx0XHRcdFx0Li4udGhpcy4kc2NvcGUubWFwKHRoaXMsIHRoaXMuX3VzZSlcblx0XHRcdFx0fTtcblx0XHRcdFx0dGhpcy5fbmV4dFN0YXRlID0gdGhpcy5fY2hhbmdlc1NXID0gbnVsbDtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKCAodGhpcy5kYXRhICE9PSB1bmRlZmluZWQgfHwgYXBwbGllZCkgJiYgIXRoaXMuX19sb2Nrcy5hbGwgKSB7XG5cdFx0XHR0aGlzLl9zdGFibGUgPSB0cnVlO1xuXHRcdFx0dGhpcy5fcmV2Kys7XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0dGhpcy5fc3RhYmxlID0gZmFsc2U7XG5cdFx0XHRpZiAoICFfc3RhdGljLm1hbmFnZWQgJiYgIXRoaXMuc3RhdGUgJiYgKCF0aGlzLl91c2UgfHwgIXRoaXMuX3VzZS5sZW5ndGgpICkge1xuXHRcdFx0XHRjb25zb2xlLndhcm4oXCJSZVNjb3BlIHN0b3JlICdcIiwgdGhpcy5uYW1lLCBcIicgaGF2ZSBubyBpbml0aWFsIGRhdGEsIHN0YXRlIG9yIHVzZS4gSXQgY2FuJ3Qgc3RhYmlsaXplLi4uXCIpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHQhdGhpcy5fc3RhYmxlICYmIHRoaXMuZW1pdCgndW5zdGFibGUnLCB0aGlzLnN0YXRlKTtcblx0XHRcblx0fVxuXHRcblx0LyoqXG5cdCAqIE92ZXJyaWRhYmxlIG1ldGhvZCB0byBrbm93IGlmIGEgZGF0YSBjaGFuZ2Ugc2hvdWxkIGJlIHByb3BhZyB0byB0aGUgbGlzdGVuaW5nXG5cdCAqIHN0b3JlcyAmIGNvbXBvbmVudHNcblx0ICovXG5cdHNob3VsZFByb3BhZyggbkRhdGFzICkge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cdFxuXHQvKipcblx0ICogT3ZlcnJpZGFibGUgbWV0aG9kIHRvIGNob29zZSBpZiB0aGlzIHN0b3JlIHNob3VsZCBiZSBzZXJpYWxpemVkLFxuXHQgKiBJZiBub3QgaXQgd2lsbCBiZSBhcHBsaWVkIG5vcm1hbGx5IHdoZW4gcmVzdG9yaW5nXG5cdCAqIEByZXR1cm5zIHtib29sZWFufVxuXHQgKi9cblx0c2hvdWxkU2VyaWFsaXplKCkge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cdFxuXHRoYXNEYXRhQ2hhbmdlKCBuRGF0YXMgKSB7XG5cdFx0bGV0IF9zdGF0aWMgPSB0aGlzLmNvbnN0cnVjdG9yLCByLFxuXHRcdCAgICBjRGF0YXMgID0gdGhpcy5kYXRhO1xuXHRcdHIgICAgICAgICAgID0gIWNEYXRhcyAmJiBuRGF0YXMgfHwgY0RhdGFzICE9PSBuRGF0YXM7XG5cdFx0IXIgJiYgY0RhdGFzICYmIE9iamVjdC5rZXlzKGNEYXRhcykuZm9yRWFjaChcblx0XHRcdCgga2V5ICkgPT4ge1xuXHRcdFx0XHRyID0gciB8fCAobkRhdGFzXG5cdFx0XHRcdCAgICAgICAgICA/IGNEYXRhc1trZXldICE9PSBuRGF0YXNba2V5XVxuXHRcdFx0XHQgICAgICAgICAgOiBjRGF0YXMgJiYgY0RhdGFzW2tleV0pXG5cdFx0XHR9XG5cdFx0KTtcblx0XHQhciAmJiBuRGF0YXMgJiYgT2JqZWN0LmtleXMobkRhdGFzKS5mb3JFYWNoKFxuXHRcdFx0KCBrZXkgKSA9PiB7XG5cdFx0XHRcdHIgPSByIHx8IChuRGF0YXNcblx0XHRcdFx0ICAgICAgICAgID8gY0RhdGFzW2tleV0gIT09IG5EYXRhc1trZXldXG5cdFx0XHRcdCAgICAgICAgICA6IGNEYXRhcyAmJiBjRGF0YXNba2V5XSlcblx0XHRcdH1cblx0XHQpO1xuXHRcdHJldHVybiByO1xuXHR9XG5cdFxuXHQvKipcblx0ICogT3ZlcnJpZGFibGUgbWV0aG9kIHRvIGtub3cgaWYgYSBzdGF0ZSBjaGFuZ2Ugc2hvdWxkIGJlIGFwcGxpZWRcblx0ICovXG5cdHNob3VsZEFwcGx5KCBzdGF0ZSA9IHRoaXMuc3RhdGUgKSB7XG5cdFx0bGV0IF9zdGF0aWMgPSB0aGlzLmNvbnN0cnVjdG9yO1xuXHRcdFxuXHRcdHJldHVybiAoXG5cdFx0XHQhIXRoaXMuaXNDb21wbGV0ZShzdGF0ZSlcblx0XHQpICYmIChpcy5hcnJheShfc3RhdGljLmZvbGxvdylcblx0XHQgICAgICA/IF9zdGF0aWMuZm9sbG93XG5cdFx0ICAgICAgICAgICAgICAgLnJlZHVjZSgoIHIsIGkgKSA9PiAociB8fCBzdGF0ZSAmJiBzdGF0ZVtpXSksIGZhbHNlKVxuXHRcdCAgICAgIDogX3N0YXRpYy5mb2xsb3dcblx0XHQgICAgICAgID8gT2JqZWN0LmtleXMoX3N0YXRpYy5mb2xsb3cpXG5cdFx0ICAgICAgICAgICAgICAgIC5yZWR1Y2UoKCByLCBpICkgPT4gKFxuXHRcdFx0ICAgICAgICAgICAgICAgIHJcblx0XHRcdCAgICAgICAgICAgICAgICB8fCBzdGF0ZSAmJiBpcy5mbihfc3RhdGljLmZvbGxvd1tpXSkgJiYgX3N0YXRpYy5mb2xsb3dbaV0uY2FsbCh0aGlzLCBzdGF0ZVtpXSlcblx0XHRcdCAgICAgICAgICAgICAgICB8fCBfc3RhdGljLmZvbGxvd1tpXSAmJiBzdGF0ZVtpXSAhPT0gdGhpcy5zdGF0ZVtpXVxuXHRcdCAgICAgICAgICAgICAgICApLCBmYWxzZSkgOiB0cnVlXG5cdFx0KTtcblx0fVxuXHRcblx0LyoqXG5cdCAqIE92ZXJyaWRhYmxlIGFwcGxpZXIgLyByZW1hcHBlclxuXHQgKiBJZiBzdGF0ZSBvciBsYXN0UHVibGljU3RhdGUgYXJlIHNpbXBsZSBoYXNoIG1hcHMgYXBwbHkgd2lsbCByZXR1cm4gey4uLmRhdGEsXG5cdCAqIC4uLnN0YXRlfSBpZiBub3QgaXQgd2lsbCByZXR1cm4gdGhlIGxhc3QgcHJpdmF0ZSBzdGF0ZVxuXHQgKiBAcGFyYW0gZGF0YVxuXHQgKiBAcGFyYW0gc3RhdGVcblx0ICogQHJldHVybnMgeyp9XG5cdCAqL1xuXHRhcHBseSggZGF0YSwgc3RhdGUsIGNoYW5nZXMgKSB7XG5cdFx0cmV0dXJuIHN0YXRlO1xuXHR9XG5cdFxuXHQvKipcblx0ICogRGVib3VuY2UgdGhpcyBzdG9yZSBwcm9wYWdhdGlvbiAoICYgcmVkdWNpbmcgKVxuXHQgKiBAcGFyYW0gY2Jcblx0ICovXG5cdHN0YWJpbGl6ZSggY2IgKSB7XG5cdFx0Y2IgJiYgdGhpcy5vbmNlKCdzdGFibGUnLCBjYik7XG5cdFx0dGhpcy5fc3RhYmxlICYmIHRoaXMuZW1pdCgndW5zdGFibGUnLCB0aGlzLnN0YXRlLCB0aGlzLmRhdGEpO1xuXHRcdFxuXHRcdHRoaXMuX3N0YWJsZSA9IGZhbHNlO1xuXHRcdFxuXHRcdGlmICggdGhpcy5fc3RhYmlsaXplciApXG5cdFx0XHRyZXR1cm47XG5cdFx0XG5cdFx0dGhpcy5fc3RhYmlsaXplciA9IFRhc2tTZXF1ZW5jZXIucHVzaFRhc2sodGhpcywgJ3B1c2hTdGF0ZScpO1xuXHR9XG5cdFxuXHQvKipcblx0ICogV2FsayBuIGdldFxuXHQgKiBAcGFyYW0gcGF0aFxuXHQgKiBAcGFyYW0gaVxuXHQgKiBAcGFyYW0gb2JqXG5cdCAqIEByZXR1cm5zIHsqfHt9fVxuXHQgKi9cblx0cmV0cmlldmUoIHBhdGgsIGkgPSAwLCBvYmogPSB0aGlzLmRhdGEgKSB7XG5cdFx0cGF0aCA9IGlzLnN0cmluZyhwYXRoKSA/IHBhdGguc3BsaXQoJy4nKSA6IHBhdGg7XG5cdFx0cmV0dXJuICFvYmogfHwgIXBhdGggfHwgIXBhdGgubGVuZ3RoXG5cdFx0ICAgICAgID8gb2JqXG5cdFx0ICAgICAgIDogcGF0aC5sZW5ndGggPT0gaSArIDFcblx0XHQgICAgICAgICA/IG9ialtwYXRoW2ldXVxuXHRcdCAgICAgICAgIDogdGhpcy5yZXRyaWV2ZShwYXRoLCBpICsgMSwgb2JqW3BhdGhbaV1dKTtcblx0fVxuXHRcblx0ZGlzcGF0Y2goIGFjdGlvbiwgLi4uYXJneiApIHtcblx0XHR0aGlzLnNjb3BlT2JqLmRpc3BhdGNoKGFjdGlvbiwgLi4uYXJneik7XG5cdH1cblx0XG5cdHRyaWdnZXIoIGFjdGlvbiwgLi4uYXJneiApIHtcblx0XHRsZXQgeyBhY3Rpb25zIH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXHRcdGlmICggYWN0aW9ucyAmJiBhY3Rpb25zW2FjdGlvbl0gKSB7XG5cdFx0XHRsZXQgbnMgPSBhY3Rpb25zW2FjdGlvbl0uY2FsbCh0aGlzLCAuLi5hcmd6KTtcblx0XHRcdG5zICYmIHRoaXMuc2V0U3RhdGUobnMpO1xuXHRcdH1cblx0fVxuXHRcblx0LyoqXG5cdCAqIFNldCAmIFB1c2ggdGhlIHJlc3VsdCBkYXRhIHRvIGZvbGxvd2VycyBpZiBzdGFibGVcblx0ICogQHBhcmFtIGNiXG5cdCAqL1xuXHRwdXNoKCBkYXRhLCBmb3JjZSwgY2IgKSB7XG5cdFx0Y2IgICAgPSBmb3JjZSA9PT0gdHJ1ZSA/IGNiIDogZm9yY2U7XG5cdFx0Zm9yY2UgPSBmb3JjZSA9PT0gdHJ1ZTtcblx0XHRpZiAoICFmb3JjZSAmJlxuXHRcdFx0KFxuXHRcdFx0XHQhdGhpcy5oYXNEYXRhQ2hhbmdlKGRhdGEpXG5cdFx0XHQpXG5cdFx0KSB7XG5cdFx0XHRjYiAmJiBjYigpO1xuXHRcdFx0aWYgKCAhdGhpcy5fX2xvY2tzLmFsbCApIHtcblx0XHRcdFx0bGV0IHN0YWJsZSAgID0gdGhpcy5fc3RhYmxlO1xuXHRcdFx0XHR0aGlzLl9zdGFibGUgPSB0cnVlO1xuXHRcdFx0XHQhc3RhYmxlICYmIHRoaXMuZW1pdCgnc3RhYmxlJywgdGhpcy5zdGF0ZSwgdGhpcy5kYXRhKTtcblx0XHRcdFx0dGhpcy5fc3RhYmlsaXplciA9IG51bGw7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdFxuXHRcdHRoaXMuZGF0YSA9IGRhdGE7XG5cdFx0dGhpcy53YWl0KCk7XG5cdFx0dGhpcy5yZWxlYXNlKGNiKTtcblx0XHRcblx0fVxuXHRcblx0LyoqXG5cdCAqIENhbGwgdGhlIGFwcGx5IGZuIHVzaW5nIHRoZSBjdXJyZW50IGFjY3VtdWxhdGVkIHN0YXRlIHVwZGF0ZSB0aGVuLCBwdXNoIHRoZVxuXHQgKiByZXN1bHRpbmcgZGF0YSBpZiBzdGFibGVcblx0ICogQHBhcmFtIGZvcmNlZFN0YXRlXG5cdCAqL1xuXHRwdXNoU3RhdGUoIGZvcmNlZFN0YXRlICkge1xuXHRcdGlmICggIWZvcmNlZFN0YXRlICYmICF0aGlzLl9jaGFuZ2VzU1cgJiYgdGhpcy5kYXRhIClcblx0XHRcdHJldHVybjtcblx0XHRcblx0XHRsZXQgbmV4dFN0YXRlID0gZm9yY2VkU3RhdGUgfHwgdGhpcy5fbmV4dFN0YXRlIHx8IHRoaXMuc3RhdGUsXG5cdFx0ICAgIG5leHREYXRhO1xuXHRcdE9iamVjdC5rZXlzKG5leHRTdGF0ZSkuZm9yRWFjaChcblx0XHRcdGtleSA9PiAobmV4dFN0YXRlW2tleV0gPT09IHVuZGVmaW5lZCAmJiAoZGVsZXRlIG5leHRTdGF0ZVtrZXldKSlcblx0XHQpO1xuXHRcdG5leHREYXRhID0gdGhpcy5hcHBseSh0aGlzLmRhdGEsIG5leHRTdGF0ZSwgdGhpcy5fY2hhbmdlc1NXKTtcblx0XHRcblx0XHR0aGlzLl9zdGFiaWxpemVyID0gbnVsbDtcblx0XHR0aGlzLnN0YXRlICAgICAgID0gbmV4dFN0YXRlO1xuXHRcdHRoaXMuX25leHRTdGF0ZSAgPSBudWxsO1xuXHRcdHRoaXMuX2NoYW5nZXNTVyAgPSBudWxsO1xuXHRcdFxuXHRcdGlmICggIWZvcmNlZFN0YXRlICYmXG5cdFx0XHQoXG5cdFx0XHRcdCF0aGlzLmhhc0RhdGFDaGFuZ2UobmV4dERhdGEpXG5cdFx0XHQpXG5cdFx0KSB7XG5cdFx0XHRpZiAoICF0aGlzLl9fbG9ja3MuYWxsICkge1xuXHRcdFx0XHRsZXQgc3RhYmxlICAgPSB0aGlzLl9zdGFibGU7XG5cdFx0XHRcdHRoaXMuX3N0YWJsZSA9IHRydWU7XG5cdFx0XHRcdCFzdGFibGUgJiYgdGhpcy5lbWl0KCdzdGFibGUnLCB0aGlzLnN0YXRlLCB0aGlzLmRhdGEpO1xuXHRcdFx0XHR0aGlzLl9zdGFiaWxpemVyID0gbnVsbDtcblx0XHRcdH1cblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0XG5cdFx0dGhpcy5kYXRhID0gbmV4dERhdGE7XG5cdFx0dGhpcy53YWl0KCk7XG5cdFx0dGhpcy5yZWxlYXNlKCk7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBBZGQgJ3BTdGF0ZScgdG8gdGhlIGN1cnJlbnQgYWNjdW11bGF0ZWQgc3RhdGUgdXBkYXRlc1xuXHQgKiAmIHdhaXQgc291cmNlIHN0b3JlcyBzdGFiaWxpemF0aW9uIGJlZm9yZSBwdXNoaW5nIHRoZXNlIHN0YXRlIHVwZGF0ZXNcblx0ICogQHBhcmFtIHBTdGF0ZVxuXHQgKiBAcGFyYW0gY2Jcblx0ICovXG5cdHNldFN0YXRlKCBwU3RhdGUsIGNiLCBzeW5jICkge1xuXHRcdGxldCBjaGFuZ2UsXG5cdFx0ICAgIGNoYW5nZXMgICA9IHRoaXMuX2NoYW5nZXNTVyA9IHRoaXMuX2NoYW5nZXNTVyB8fCB7fSxcblx0XHQgICAgbmV4dFN0YXRlID0gdGhpcy5fbmV4dFN0YXRlID0gdGhpcy5fbmV4dFN0YXRlIHx8IHsgLi4udGhpcy5zdGF0ZSB9LFxuXHRcdCAgICBrZXk7XG5cdFx0Zm9yICgga2V5IGluIHBTdGF0ZSApXG5cdFx0XHRpZiAoICF0aGlzLnN0YXRlXG5cdFx0XHRcdHx8IGNoYW5nZXMuaGFzT3duUHJvcGVydHkoa2V5KS8vIHRvZG9cblx0XHRcdFx0JiYgKFxuXHRcdFx0XHRcdHBTdGF0ZVtrZXldICE9PSBjaGFuZ2VzW2tleV1cblx0XHRcdFx0KSB8fCBwU3RhdGUuaGFzT3duUHJvcGVydHkoa2V5KVxuXHRcdFx0XHQmJiAoXG5cdFx0XHRcdFx0cFN0YXRlW2tleV0gIT09IHRoaXMuc3RhdGVba2V5XVxuXHRcdFx0XHQpICkge1xuXHRcdFx0XHRjaGFuZ2UgICAgICAgICA9IHRydWU7XG5cdFx0XHRcdG5leHRTdGF0ZVtrZXldID0gY2hhbmdlc1trZXldID0gcFN0YXRlW2tleV07XG5cdFx0XHR9XG5cdFx0XG5cdFx0aWYgKCAhdGhpcy5zaG91bGRBcHBseShuZXh0U3RhdGUpICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRcblx0XHRpZiAoIHN5bmMgKSB7XG5cdFx0XHR0aGlzLnB1c2hTdGF0ZSgpO1xuXHRcdFx0Y2IgJiYgY2IoKTtcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHRpZiAoIGNoYW5nZSApIHtcblx0XHRcdFx0dGhpcy5zdGFiaWxpemUoY2IpO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSBjYiAmJiBjYigpO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXHRcblx0LyoqXG5cdCAqIFVwZGF0ZSB0aGUgY3VycmVudCBzdGF0ZSAmIHB1c2ggaXRcblx0ICogQHBhcmFtIHBTdGF0ZVxuXHQgKiBAcGFyYW0gY2Jcblx0ICovXG5cdHNldFN0YXRlU3luYyggcFN0YXRlICkge1xuXHRcdGxldCBpICAgICAgID0gMCwgY2hhbmdlLFxuXHRcdCAgICBjaGFuZ2VzID0gdGhpcy5fY2hhbmdlc1NXID0gdGhpcy5fY2hhbmdlc1NXIHx8IHt9O1xuXHRcdGZvciAoIGxldCBrIGluIHBTdGF0ZSApXG5cdFx0XHRpZiAoICF0aGlzLnN0YXRlIHx8IHBTdGF0ZS5oYXNPd25Qcm9wZXJ0eShrKVxuXHRcdFx0XHQmJiAoXG5cdFx0XHRcdFx0cFN0YXRlW2tdICE9PSB0aGlzLnN0YXRlW2tdXG5cdFx0XHRcdFx0Ly98fFxuXHRcdFx0XHRcdC8vKHRoaXMuc3RhdGVba10gJiYgcFN0YXRlW2tdICYmIChwU3RhdGVba10uX3JldiAhPSB0aGlzLl9yZXZzW2tdKSkvLyByZXYvaGFzaCB1cGRhdGVcblx0XHRcdFx0KSApIHtcblx0XHRcdFx0Y2hhbmdlICAgICAgICA9IHRydWU7XG5cdFx0XHRcdHRoaXMuX3JldnNba10gPSBwU3RhdGVba10gJiYgcFN0YXRlW2tdLl9yZXYgfHwgdHJ1ZTtcblx0XHRcdFx0Y2hhbmdlc1trXSAgICA9IHBTdGF0ZVtrXTtcblx0XHRcdH1cblx0XHR0aGlzLnNob3VsZEFwcGx5KHsgLi4uKHRoaXMuc3RhdGUgfHwge30pLCAuLi5jaGFuZ2VzIH0pICYmIHRoaXMucHVzaFN0YXRlKCk7XG5cdFx0cmV0dXJuIHRoaXMuZGF0YTtcblx0fVxuXHRcblx0LyoqXG5cdCAqIGdldCBhIHN0b3JlLWtleSBwYWlyIGZvciBTdG9yZTo6bWFwXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG5cdCAqIEByZXR1cm5zIHt7c3RvcmU6IFN0b3JlLCBuYW1lOiAqfX1cblx0ICovXG5cdGFzKCBuYW1lICkge1xuXHRcdHJldHVybiB7IHN0b3JlOiB0aGlzLCBuYW1lIH07XG5cdH1cblx0XG5cdG9uKCBsaXN0cyApIHtcblx0XHRpZiAoICFpcy5zdHJpbmcobGlzdHMpICYmIGxpc3RzIClcblx0XHRcdE9iamVjdC5rZXlzKGxpc3RzKS5mb3JFYWNoKGsgPT4gc3VwZXIub24oaywgbGlzdHNba10pKTtcblx0XHRlbHNlIHN1cGVyLm9uKC4uLmFyZ3VtZW50cyk7XG5cdH1cblx0XG5cdHJlbW92ZUxpc3RlbmVyKCBsaXN0cyApIHtcblx0XHRpZiAoICFpcy5zdHJpbmcobGlzdHMpICYmIGxpc3RzIClcblx0XHRcdE9iamVjdC5rZXlzKGxpc3RzKS5mb3JFYWNoKGsgPT4gc3VwZXIucmVtb3ZlTGlzdGVuZXIoaywgbGlzdHNba10pKTtcblx0XHRlbHNlIHN1cGVyLnJlbW92ZUxpc3RlbmVyKC4uLmFyZ3VtZW50cyk7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBpcyBjb21wbGV0ZSAoYWxsIHJlcXVpZXJlZCBrZXlzIGFyZSBoZXJlKVxuXHQgKiBAcmV0dXJucyBib29sXG5cdCAqL1xuXHRpc0NvbXBsZXRlKCBzdGF0ZSA9IHRoaXMuc3RhdGUgKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdCF0aGlzLl9yZXF1aXJlXG5cdFx0XHR8fCAhdGhpcy5fcmVxdWlyZS5sZW5ndGhcblx0XHRcdHx8IHN0YXRlICYmIHRoaXMuX3JlcXVpcmUucmVkdWNlKFxuXHRcdFx0XHQoIHIsIGtleSApID0+IChyICYmIHN0YXRlW2tleV0pLFxuXHRcdFx0XHR0cnVlXG5cdFx0XHQpXG5cdFx0KTtcblx0fVxuXHRcblx0LyoqXG5cdCAqIGlzIHN0YWJsZVxuXHQgKiBAcmV0dXJucyBib29sXG5cdCAqL1xuXHRpc1N0YWJsZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5fc3RhYmxlO1xuXHR9XG5cdFxuXHQvKipcblx0ICogU2VyaWFsaXplIHN0YXRlICYgZGF0YSB3aXRoIHNvdXJjZXMgcmVmc1xuXHQgKiBAcmV0dXJucyBib29sXG5cdCAqL1xuXHRzZXJpYWxpemUoIGNmZyA9IHt9LCBvdXRwdXQgPSB7fSApIHtcblx0XHRcblx0XHRsZXQgc0lkICAgICAgICA9IGNmZy5wYXJlbnRBbGlhcyB8fCB0aGlzLnNjb3BlT2JqLl9pZCxcblx0XHQgICAgcmVmc0NvdW50ICA9IDAsXG5cdFx0ICAgIHJlZnMgICAgICAgPVxuXHRcdFx0ICAgICFjZmcubm9yZWZzICYmIGlzLmFycmF5KHRoaXMuX3VzZSkgJiYgdGhpcy5fdXNlLnJlZHVjZShcblx0XHRcdCAgICAoIG1hcCwga2V5ICkgPT4ge1xuXHRcdFx0XHQgICAgbGV0IHJlZiAgID0gdGhpcy4kc2NvcGUucGFyc2VSZWYoa2V5KSxcblx0XHRcdFx0ICAgICAgICBzdG9yZSA9IHRoaXMuJHN0b3Jlc1tyZWYuc3RvcmVJZF07XG5cdFx0XHRcdCAgICBpZiAoIHN0b3JlICYmIFN0b3JlLmlzU3RvcmUoc3RvcmUpICYmICFzdG9yZS5zY29wZU9iai5fLmlzTG9jYWxJZCApXG5cdFx0XHRcdFx0ICAgIHJlZnNDb3VudCsrLCBtYXBbcmVmLmFsaWFzXSA9IHJlZi5wYXRoO1xuXHRcdFx0XHRcblx0XHRcdFx0ICAgIHJldHVybiBtYXA7XG5cdFx0XHQgICAgfSwge31cblx0XHRcdCAgICApLFxuXHRcdCAgICBzdGF0ZSAgICAgID0gdGhpcy5zdGF0ZSB8fCB7fSxcblx0XHQgICAgcGVyc2lzdGVudCA9IHRoaXMuc2hvdWxkU2VyaWFsaXplKCk7XG5cdFx0XG5cdFx0aWYgKCAhcGVyc2lzdGVudCApIHtcblx0XHRcdGtleVdhbGtuU2V0KFxuXHRcdFx0XHRvdXRwdXQsXG5cdFx0XHRcdChzSWQgKyAnLycgKyB0aGlzLm5hbWUpLFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0ZGF0YVJlZnM6IGNmZy5kYXRhUmVmcyxcblx0XHRcdFx0XHRyZWZzXG5cdFx0XHRcdH1cblx0XHRcdCk7XG5cdFx0XHRyZXR1cm4gb3V0cHV0O1xuXHRcdH1cblx0XHRcblx0XHRsZXRcblx0XHRcdHN0YXRlS2V5cyAgID0gT2JqZWN0LmtleXMoc3RhdGUpIHx8IFtdLFxuXHRcdFx0c3RhdGVSZWZzICAgPSBzdGF0ZUtleXMubWFwKGsgPT4gc3RhdGVba10pLFxuXHRcdFx0aW5SZWZzQ291bnQgPSAwLFxuXHRcdFx0ZGF0YVJlZnMgICAgPSBjZmcuZGF0YVJlZnMgfHwge30sXG5cdFx0XHRpblJlZnMgICAgICA9XG5cdFx0XHRcdCFjZmcubm9yZWZzICYmIHRoaXMuZGF0YSAmJiAoT2JqZWN0LmtleXModGhpcy5kYXRhKS5yZWR1Y2UoXG5cdFx0XHRcdCggbWFwLCBrZXkgKSA9PiB7XG5cdFx0XHRcdFx0bGV0IHJlZiA9IHN0YXRlUmVmcy5pbmRleE9mKHRoaXMuZGF0YVtrZXldKVxuXHRcdFx0XHRcdGlmICggcmVmICE9IC0xIClcblx0XHRcdFx0XHRcdGluUmVmc0NvdW50KyssIG1hcFtrZXldID0gc3RhdGVLZXlzW3JlZl07XG5cdFx0XHRcdFx0cmV0dXJuIG1hcDtcblx0XHRcdFx0fSwge31cblx0XHRcdFx0KSksXG5cdFx0XHRzbmFwICAgICAgICA9IHtcblx0XHRcdFx0ZGF0YVJlZnM6IGNmZy5kYXRhUmVmcyxcblx0XHRcdFx0c3RhdGUgICA6IHN0YXRlICYmXG5cdFx0XHRcdFx0KFxuXHRcdFx0XHRcdFx0Y2ZnLm5vcmVmc1xuXHRcdFx0XHRcdFx0PyB7IC4uLnN0YXRlIH1cblx0XHRcdFx0XHRcdDogT2JqZWN0LmtleXMoc3RhdGUpLnJlZHVjZSgoIGgsIGsgKSA9PiAoIXJlZnNba10gJiYgKGhba10gPSBzdGF0ZVtrXSksIGgpLCB7fSlcblx0XHRcdFx0XHQpLFxuXHRcdFx0XHRkYXRhICAgIDogKFxuXHRcdFx0XHRcdFx0dGhpcy5kYXRhICYmXG5cdFx0XHRcdFx0XHR0aGlzLmRhdGEuX19wcm90b19fID09PSBvYmpQcm90byA/XG5cdFx0XHRcdFx0XHRPYmplY3Rcblx0XHRcdFx0XHRcdFx0LmtleXModGhpcy5kYXRhKVxuXHRcdFx0XHRcdFx0XHQucmVkdWNlKFxuXHRcdFx0XHRcdFx0XHRcdCggaCwgayApID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdGlmICggIWluUmVmc1trXSAmJiAhZGF0YVJlZnNba10gKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGhba10gPSB0aGlzLmRhdGFba107XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGluUmVmc0NvdW50Kys7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gaFxuXHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0e31cblx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxuXHRcdFx0XHRcdFx0KGlzLmJvb2wodGhpcy5kYXRhKVxuXHRcdFx0XHRcdFx0XHR8fCBpcy5udW1iZXIodGhpcy5kYXRhKVxuXHRcdFx0XHRcdFx0XHR8fCBpcy5zdHJpbmcodGhpcy5kYXRhKSkgJiYgdGhpcy5kYXRhXG5cdFx0XHRcdFx0KVxuXHRcdFx0XHRcdHx8IHVuZGVmaW5lZFxuXHRcdFx0XHRcblx0XHRcdH07XG5cdFx0XG5cdFx0cmVmcyAmJiByZWZzQ291bnQgJiYgKHNuYXAucmVmcyA9IHJlZnMpO1xuXHRcdGluUmVmcyAmJiBpblJlZnNDb3VudCAmJiAoXG5cdFx0XHRzbmFwLmluUmVmcyA9IGluUmVmcyk7XG5cdFx0XG5cdFx0XG5cdFx0a2V5V2Fsa25TZXQoXG5cdFx0XHRvdXRwdXQsXG5cdFx0XHQoc0lkICsgJy8nICsgdGhpcy5uYW1lKSxcblx0XHRcdHNuYXBcblx0XHQpO1xuXHRcdHJldHVybiBvdXRwdXQ7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiByZXN0b3JlIHN0YXRlICYgZGF0YVxuXHQgKiBAcmV0dXJucyBib29sXG5cdCAqL1xuXHRyZXN0b3JlKCBzbmFwc2hvdCwgaW1tZWRpYXRlICkge1xuXHRcdHNuYXBzaG90ID0gc25hcHNob3Rcblx0XHRcdCYmIGtleVdhbGtuR2V0KHNuYXBzaG90LCB0aGlzLnNjb3BlT2JqLl9pZCArICcvJyArIHRoaXMubmFtZSlcblx0XHRcdHx8IHRoaXMuJHNjb3BlLnRha2VTbmFwc2hvdEJ5S2V5KHRoaXMuc2NvcGVPYmouX2lkICsgJy8nICsgdGhpcy5uYW1lKTtcblx0XHRcblx0XHRpZiAoICFzbmFwc2hvdCApXG5cdFx0XHRyZXR1cm47XG5cdFx0XG5cdFx0aWYgKCBzbmFwc2hvdCApIHtcblx0XHRcdFxuXHRcdFx0aWYgKCAhdGhpcy5pc1N0YWJsZSgpICYmICFpbW1lZGlhdGUgKVxuXHRcdFx0XHR0aGlzLnRoZW4oKCkgPT4gcmVzdG9yZShzbmFwc2hvdCkpO1xuXHRcdFx0XG5cdFx0XHR0aGlzLnN0YXRlID0geyAuLi5zbmFwc2hvdC5zdGF0ZSB9O1xuXHRcdFx0c25hcHNob3QucmVmcyAmJiBPYmplY3Qua2V5cyhzbmFwc2hvdC5yZWZzKS5mb3JFYWNoKFxuXHRcdFx0XHQoIGtleSApID0+IHsvL3RvZG9cblx0XHRcdFx0XHR0aGlzLnN0YXRlW2tleV0gPSB0aGlzLiRzY29wZS5yZXRyaWV2ZShzbmFwc2hvdC5yZWZzW2tleV0pO1xuXHRcdFx0XHR9XG5cdFx0XHQpXG5cdFx0XHRcblx0XHRcdFxuXHRcdFx0aWYgKCBzbmFwc2hvdC5pblJlZnMgPT09IHRydWUgKSB7XG5cdFx0XHRcdHRoaXMuZGF0YSA9IHsgLi4udGhpcy5zdGF0ZSB9O1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdHRoaXMuZGF0YSA9IHNuYXBzaG90LmRhdGE7XG5cdFx0XHRcdHNuYXBzaG90LmluUmVmcyAmJiBPYmplY3Qua2V5cyhzbmFwc2hvdC5pblJlZnMpLmZvckVhY2goXG5cdFx0XHRcdFx0KCBrZXkgKSA9PiB7Ly90b2RvXG5cdFx0XHRcdFx0XHR0aGlzLmRhdGFba2V5XSA9IHRoaXMuc3RhdGVbc25hcHNob3QuaW5SZWZzW2tleV1dO1xuXHRcdFx0XHRcdFx0Ly9lbHNlXG5cdFx0XHRcdFx0XHQvLyAgICBjb25zb2xlLndhcm4oJ25vdCBmb3VuZCA6ICcsIGtleSwgc25hcCAmJiBzbmFwLnJlZnNbIGtleSBdKVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0KVxuXHRcdFx0fVxuXHRcdFx0aWYgKCBzbmFwc2hvdC5kYXRhUmVmcyApIHtcblx0XHRcdFx0dGhpcy5kYXRhID0gdGhpcy5kYXRhIHx8IHt9O1xuXHRcdFx0XHRPYmplY3Qua2V5cyhzbmFwc2hvdC5kYXRhUmVmcykuZm9yRWFjaChcblx0XHRcdFx0XHQoIGtleSApID0+IHsvL3RvZG9cblx0XHRcdFx0XHRcdHRoaXMuJHNjb3BlLnJlc3RvcmVSZWZQYXRoKHNuYXBzaG90LmRhdGFSZWZzW2tleV0pO1xuXHRcdFx0XHRcdFx0dGhpcy5kYXRhW2tleV0gPSB0aGlzLiRzY29wZS5yZXRyaWV2ZShzbmFwc2hvdC5kYXRhUmVmc1trZXldKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdClcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0XG5cdFx0fVxuXHR9XG5cdFxuXHQvKipcblx0ICogQmluZCB0aGlzIHN0b3JlIGNoYW5nZXMgdG8gdGhlIGdpdmVuIGNvbXBvbmVudC1rZXlcblx0ICogQHBhcmFtIG9iaiB7UmVhY3QuQ29tcG9uZW50fFN0b3JlfGZ1bmN0aW9uKVxuXHQgKiBAcGFyYW0ga2V5IHtzdHJpbmd9IG9wdGlvbmFsIGtleSB3aGVyZSB0byBtYXAgdGhlIHB1YmxpYyBzdGF0ZVxuXHQgKi9cblx0YmluZCggb2JqLCBrZXksIHNldEluaXRpYWwgPSB0cnVlLCBwYXRoICkge1xuXHRcdHRoaXMuX2ZvbGxvd2Vycy5wdXNoKFtvYmosIGtleSwgcGF0aF0pO1xuXHRcdGlmICggc2V0SW5pdGlhbCAmJiB0aGlzLmRhdGEgJiYgdGhpcy5fc3RhYmxlICkge1xuXHRcdFx0bGV0IGRhdGEgPSBwYXRoID8gdGhpcy5yZXRyaWV2ZShwYXRoKSA6IHRoaXMuZGF0YTtcblx0XHRcdGlmICggdHlwZW9mIG9iaiAhPSBcImZ1bmN0aW9uXCIgKSB7XG5cdFx0XHRcdGlmICgga2V5ICkgb2JqLnNldFN0YXRlKHsgW2tleV06IGRhdGEgfSk7XG5cdFx0XHRcdGVsc2Ugb2JqLnNldFN0YXRlKGRhdGEpO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdG9iaihkYXRhKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBVbiBiaW5kIHRoaXMgc3RvcmUgb2ZmIHRoZSBnaXZlbiBjb21wb25lbnQta2V5XG5cdCAqIEBwYXJhbSBvYmpcblx0ICogQHBhcmFtIGtleVxuXHQgKiBAcmV0dXJucyB7QXJyYXkuPCo+fVxuXHQgKi9cblx0dW5CaW5kKCBvYmosIGtleSwgcGF0aCApIHtcblx0XHRsZXQgZm9sbG93ZXJzID0gdGhpcy5fZm9sbG93ZXJzLFxuXHRcdCAgICBpICAgICAgICAgPSBmb2xsb3dlcnMgJiYgZm9sbG93ZXJzLmxlbmd0aDtcblx0XHR3aGlsZSAoIGZvbGxvd2VycyAmJiBpLS0gKVxuXHRcdFx0aWYgKCBmb2xsb3dlcnNbaV1bMF0gPT09IG9iaiAmJiBmb2xsb3dlcnNbaV1bMV0gPT09IGtleSAmJiBmb2xsb3dlcnNbaV1bMl0gPT09IHBhdGggKVxuXHRcdFx0XHRyZXR1cm4gZm9sbG93ZXJzLnNwbGljZShpLCAxKTtcblx0fVxuXHRcblx0LyoqXG5cdCAqIG9uY2UoJ3N0YWJsZScsIGNiKVxuXHQgKiBAcGFyYW0gb2JqIHtSZWFjdC5Db21wb25lbnR8U3RvcmV8ZnVuY3Rpb24pXG5cdCAqIEBwYXJhbSBrZXkge3N0cmluZ30gb3B0aW9uYWwga2V5IHdoZXJlIHRvIG1hcCB0aGUgcHVibGljIHN0YXRlXG5cdCAqL1xuXHR0aGVuKCBjYiApIHtcblx0XHRpZiAoIHRoaXMuX3N0YWJsZSApXG5cdFx0XHRyZXR1cm4gY2IodGhpcy5kYXRhKTtcblx0XHR0aGlzLm9uY2UoJ3N0YWJsZScsIGUgPT4gY2IodGhpcy5kYXRhKSk7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBBZGQgYSBsb2NrIHNvIHRoZSBzdG9yZSB3aWxsIG5vdCBwcm9wYWcgaXQgZGF0YSB1bnRpbGwgcmVsZWFzZSgpIGlzIGNhbGxcblx0ICogQHBhcmFtIHByZXZpb3VzIHtTdG9yZXxudW1iZXJ8QXJyYXl9IEBvcHRpb25hbCB3ZiB0byB3YWl0LCByZWxlYXNlcyB0byB3YWl0IG9yXG5cdCAqICAgICBhcnJheSBvZiBzdHVmZiB0byB3YWl0XG5cdCAqIEByZXR1cm5zIHt0aGlzfVxuXHQgKi9cblx0d2FpdCggcHJldmlvdXMgKSB7XG5cdFx0aWYgKCB0eXBlb2YgcHJldmlvdXMgPT0gXCJudW1iZXJcIiApXG5cdFx0XHRyZXR1cm4gdGhpcy5fX2xvY2tzLmFsbCArPSBwcmV2aW91cztcblx0XHRpZiAoIGlzLmFycmF5KHByZXZpb3VzKSApXG5cdFx0XHRyZXR1cm4gcHJldmlvdXMubWFwKHRoaXMud2FpdC5iaW5kKHRoaXMpKTtcblx0XHRcblx0XHR0aGlzLl9zdGFibGUgJiYgdGhpcy5lbWl0KCd1bnN0YWJsZScsIHRoaXMuc3RhdGUsIHRoaXMuZGF0YSk7XG5cdFx0dGhpcy5fc3RhYmxlID0gZmFsc2U7XG5cdFx0dGhpcy5fX2xvY2tzLmFsbCsrO1xuXHRcdFxuXHRcdGxldCByZWFzb24gPSBpcy5zdHJpbmcocHJldmlvdXMpID8gcHJldmlvdXMgOiBudWxsO1xuXHRcdGlmICggcmVhc29uICkge1xuXHRcdFx0dGhpcy5fX2xvY2tzW3JlYXNvbl0gPSB0aGlzLl9fbG9ja3NbcmVhc29uXSB8fCAwO1xuXHRcdFx0dGhpcy5fX2xvY2tzW3JlYXNvbl0rKztcblx0XHR9XG5cdFx0aWYgKCBwcmV2aW91cyAmJiBpcy5mbihwcmV2aW91cy50aGVuKSApIHtcblx0XHRcdHByZXZpb3VzLnRoZW4odGhpcy5yZWxlYXNlLmJpbmQodGhpcywgbnVsbCkpO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXHRcblx0LyoqXG5cdCAqIERlY3JlYXNlIGxvY2tzIGZvciB0aGlzIHN0b3JlLCBpZiBpdCByZWFjaCAwICxcblx0ICogaXQgd2lsbCBiZSBwcm9wYWdhdGVkIHRvIHRoZSBmb2xsb3dlcnMsXG5cdCAqIHRoZW4sIGFsbCBzdHVmZiBwYXNzZWQgdG8gXCJ0aGVuXCIgY2FsbCBiYWNrIHdpbGwgYmUgZXhlYyAvIHJlbGVhc2VkXG5cdCAqIEBwYXJhbSBkZXN5bmNcblx0ICogQHJldHVybnMgeyp9XG5cdCAqL1xuXHRyZWxlYXNlKCByZWFzb24sIGNiICkge1xuXHRcdGxldCBfc3RhdGljID0gdGhpcy5jb25zdHJ1Y3RvciwgbWUgPSB0aGlzO1xuXHRcdGxldCBpICAgICAgID0gMCwgd2FzU3RhYmxlID0gdGhpcy5fc3RhYmxlO1xuXHRcdFxuXHRcdGlmICggaXMuZm4ocmVhc29uKSApIHtcblx0XHRcdGNiICAgICA9IHJlYXNvbjtcblx0XHRcdHJlYXNvbiA9IG51bGw7XG5cdFx0fVxuXHRcdFxuXHRcdGlmICggcmVhc29uICkge1xuXHRcdFx0aWYgKCB0aGlzLl9fbG9ja3NbcmVhc29uXSA9PSAwIClcblx0XHRcdFx0Y29uc29sZS5lcnJvcihcIlJlbGVhc2UgbW9yZSB0aGFuIGxvY2tpbmcgIVwiLCByZWFzb24pO1xuXHRcdFx0dGhpcy5fX2xvY2tzW3JlYXNvbl0gPSB0aGlzLl9fbG9ja3NbcmVhc29uXSB8fCAwO1xuXHRcdFx0dGhpcy5fX2xvY2tzW3JlYXNvbl0tLTtcblx0XHR9XG5cdFx0XG5cdFx0aWYgKCAhcmVhc29uICYmIHRoaXMuX19sb2Nrcy5hbGwgPT0gMCApXG5cdFx0XHRjb25zb2xlLmVycm9yKFwiUmVsZWFzZSBtb3JlIHRoYW4gbG9ja2luZyAhXCIpO1xuXHRcdFxuXHRcdGlmICggIS0tdGhpcy5fX2xvY2tzLmFsbCAmJiB0aGlzLmlzQ29tcGxldGUoKSApIHtcblx0XHRcdGxldCBwcm9wYWcgICA9IHRoaXMuc2hvdWxkUHJvcGFnKHRoaXMuZGF0YSk7XG5cdFx0XHR0aGlzLl9zdGFibGUgPSB0cnVlO1xuXHRcdFx0cHJvcGFnICYmIHRoaXMuX3JldisrOy8vXG5cdFx0XHRpZiAoIHByb3BhZyAmJiB0aGlzLl9mb2xsb3dlcnMubGVuZ3RoIClcblx0XHRcdFx0dGhpcy5fZm9sbG93ZXJzLmZvckVhY2goZnVuY3Rpb24gcHJvcGFnKCBmb2xsb3dlciApIHtcblx0XHRcdFx0XHRsZXQgZGF0YSA9IGZvbGxvd2VyWzJdID8gbWUucmV0cmlldmUoZm9sbG93ZXJbMl0pIDogbWUuZGF0YTtcblx0XHRcdFx0XHQvL2lmICggIWRhdGEgKSByZXR1cm47XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0aWYgKCB0eXBlb2YgZm9sbG93ZXJbMF0gPT0gXCJmdW5jdGlvblwiICkge1xuXHRcdFx0XHRcdFx0Zm9sbG93ZXJbMF0oZGF0YSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdFx0Ly9jYiAmJiBpKys7XG5cdFx0XHRcdFx0XHRmb2xsb3dlclswXS5zZXRTdGF0ZShcblx0XHRcdFx0XHRcdFx0KGZvbGxvd2VyWzFdKSA/IHsgW2ZvbGxvd2VyWzFdXTogZGF0YSB9XG5cdFx0XHRcdFx0XHRcdCAgICAgICAgICAgICAgOiBkYXRhXG5cdFx0XHRcdFx0XHRcdC8vLFxuXHRcdFx0XHRcdFx0XHQvL2NiICYmIChcblx0XHRcdFx0XHRcdFx0Ly8gICAgKCkgPT4gKCEoLS1pKSAmJiBjYigpKVxuXHRcdFx0XHRcdFx0XHQvLylcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdC8vZWxzZVxuXHRcdFx0IXdhc1N0YWJsZSAmJiB0aGlzLmVtaXQoJ3N0YWJsZScsIHRoaXMuZGF0YSk7XG5cdFx0XHRwcm9wYWcgJiYgdGhpcy5lbWl0KCd1cGRhdGUnLCB0aGlzLmRhdGEpO1xuXHRcdFx0Y2IgJiYgY2IoKVxuXHRcdH1cblx0XHRlbHNlIGNiICYmIHRoaXMudGhlbihjYik7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblx0XG5cdHByb3BhZyggZGF0YSApIHtcblx0XHR0aGlzLmVtaXQoJ3VwZGF0ZScsIGRhdGEpO1xuXHR9XG5cdFxuXHRyZXRhaW4oIHJlYXNvbiApIHtcblx0XHR0aGlzLl9fcmV0YWlucy5hbGwrKztcblx0XHRpZiAoIHJlYXNvbiApIHtcblx0XHRcdHRoaXMuX19yZXRhaW5zW3JlYXNvbl0gPSB0aGlzLl9fcmV0YWluc1tyZWFzb25dIHx8IDA7XG5cdFx0XHR0aGlzLl9fcmV0YWluc1tyZWFzb25dKys7XG5cdFx0fVxuXHR9XG5cdFxuXHRkaXNwb3NlKCByZWFzb24gKSB7XG5cdFx0Ly9jb25zb2xlLndhcm4oXCJkaXNwb3NlXCIsIHJlYXNvbiwgdGhpcy5fX3JldGFpbnMpO1xuXHRcdGlmICggcmVhc29uICkge1xuXHRcdFx0aWYgKCAhdGhpcy5fX3JldGFpbnNbcmVhc29uXSApXG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIlJTIDogRGlzcG9zZSBtb3JlIHRoYW4gcmV0YWluaW5nIG9uIHN0b3JlICdcIiArIHRoaXMubmFtZSArIFwiJyA6IFwiICsgcmVhc29uKTtcblx0XHRcdFxuXHRcdFx0dGhpcy5fX3JldGFpbnNbcmVhc29uXS0tO1xuXHRcdH1cblx0XHRpZiAoIHRoaXMuX19yZXRhaW5zLmFsbCA9PSAwIClcblx0XHRcdHRocm93IG5ldyBFcnJvcihcIlJTIDogRGlzcG9zZSBtb3JlIHRoYW4gcmV0YWluaW5nIG9uIHN0b3JlIFwiICsgdGhpcy5uYW1lKTtcblx0XHRcblx0XHR0aGlzLl9fcmV0YWlucy5hbGwtLTtcblx0XHRcblx0XHRpZiAoICF0aGlzLl9fcmV0YWlucy5hbGwgKSB7XG5cdFx0XHRpZiAoIHRoaXMuX3BlcnNpc3RlbmNlVG0gKSB7XG5cdFx0XHRcdHRoaXMuX2Rlc3Ryb3lUTSAmJiBjbGVhclRpbWVvdXQodGhpcy5fZGVzdHJveVRNKTtcblx0XHRcdFx0dGhpcy5fZGVzdHJveVRNID0gc2V0VGltZW91dChcblx0XHRcdFx0XHRlID0+IHtcblx0XHRcdFx0XHRcdHRoaXMuX2Rlc3Ryb3lUTSA9IG51bGw7XG5cdFx0XHRcdFx0XHQvL3RoaXMudGhlbihzID0+IHtcblx0XHRcdFx0XHRcdCF0aGlzLl9fcmV0YWlucy5hbGwgJiYgIXRoaXMuZGVhZCAmJiB0aGlzLmRlc3Ryb3koKVxuXHRcdFx0XHRcdFx0Ly99KTtcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHRoaXMuX3BlcnNpc3RlbmNlVG1cblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHQvL3RoaXMudGhlbihzID0+XG5cdFx0XHRcdCghdGhpcy5fX3JldGFpbnMuYWxsICYmICF0aGlzLmRlYWQgJiYgdGhpcy5kZXN0cm95KCkpXG5cdFx0XHRcdC8vKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0XG5cdGRlc3Ryb3koKSB7XG5cdFx0Ly8gIGNvbnNvbGUubG9nKFwiZGVzdHJveVwiLCB0aGlzLl91aWQpO1xuXHRcdFxuXHRcdHRoaXMuZW1pdCgnZGVzdHJveScsIHRoaXMpO1xuXHRcdGlmICggdGhpcy5fc3RhYmlsaXplciApXG5cdFx0XHRjbGVhclRpbWVvdXQodGhpcy5fc3RhYmlsaXplcik7XG5cdFx0XG5cdFx0aWYgKCB0aGlzLl9mb2xsb3dlcnMubGVuZ3RoIClcblx0XHRcdHRoaXMuX2ZvbGxvd2Vycy5mb3JFYWNoKFxuXHRcdFx0XHQoIGZvbGxvd2VyICkgPT4ge1xuXHRcdFx0XHRcdGlmICggdHlwZW9mIGZvbGxvd2VyWzBdICE9PSBcImZ1bmN0aW9uXCIgKSB7XG5cdFx0XHRcdFx0XHRpZiAoIGZvbGxvd2VyWzBdLnN0b3JlcyApXG5cdFx0XHRcdFx0XHRcdGRlbGV0ZSBmb2xsb3dlclswXS5zdG9yZXNbZm9sbG93ZXJbMV1dO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0KTtcblx0XHR0aGlzLl9mb2xsb3dlcnMubGVuZ3RoID0gMDtcblx0XHR0aGlzLmNvbnN0cnVjdG9yLl9yZXYgID0gdGhpcy5yZXY7XG5cdFx0dGhpcy5kZWFkICAgICAgICAgICAgICA9IHRydWU7XG5cdFx0dGhpcy5fcmV2cyAgICAgICAgICAgICA9IHRoaXMuZGF0YSA9IHRoaXMuc3RhdGUgPSB0aGlzLnNjb3BlID0gbnVsbDtcblx0XHR0aGlzLnJlbW92ZUFsbExpc3RlbmVycygpO1xuXHR9XG59XG5cbi8qKlxuICogZ2V0IGEgc3RhdGljIGFsaWFzZWQgcmVmZXJlbmNlIG9mIGEgc3RvcmVcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKiBAcmV0dXJucyB7e3N0b3JlOiBTdG9yZSwgbmFtZTogKn19XG4gKi9cblN0b3JlLmFzID0gZnVuY3Rpb24gKCBuYW1lICkge1xuXHRyZXR1cm4geyBzdG9yZTogdGhpcywgbmFtZSB9O1xufVxuXG4vKipcbiAqIEB0b2RvXG4gKiBNYXAgYWxsIG5hbWVkIHN0b3JlcyBpbiB7a2V5c30gdG8gdGhlIHtvYmplY3R9J3Mgc3RhdGVcbiAqIEhvb2sgY29tcG9uZW50V2lsbFVubW91bnQgKGZvciByZWFjdCBjb21wKSBvciBkZXN0cm95IHRvIHVuQmluZCB0aGVtIGF1dG9tYXRpY2FsbHlcbiAqIEBzdGF0aWNcbiAqIEBwYXJhbSBvYmplY3Qge09iamVjdH0gdGFyZ2V0IHN0YXRlIGF3YXJlIG9iamVjdCAoUmVhY3QuQ29tcG9uZW50fFN0b3JlfC4uLilcbiAqIEBwYXJhbSBrZXlzIHtBcnJheX0gRXggOiBbXCJzZXNzaW9uXCIsIFwib3RoZXJTdGF0aWNOYW1lZFN0b3JlOmtleVwiLFxuICogICAgIHN0b3JlLmFzKCdhbm90aGVyS2V5JyldXG4gKi9cblN0b3JlLm1hcCA9IGZ1bmN0aW9uICggY1N0b3JlLCBrZXlzLCBzY29wZSwgb3JpZ2luLCBzZXRJbml0aWFsID0gZmFsc2UgKSB7XG5cdGxldCB0YXJnZXRSZXZzICAgICA9IGNTdG9yZS5fcmV2cyB8fCB7fTtcblx0bGV0IHRhcmdldFNjb3BlICAgID0gY1N0b3JlLnN0b3JlcyB8fCAoY1N0b3JlLnN0b3JlcyA9IHt9KTtcblx0bGV0IGluaXRpYWxPdXRwdXRzID0ge307XG5cdGtleXMgICAgICAgICAgICAgICA9IGlzLmFycmF5KGtleXMpID8gWy4uLmtleXNdIDogW2tleXNdO1xuXHRcblx0XG5cdHNjb3BlID0gc2NvcGUgfHwgU3RvcmUuc3RhdGljU2NvcGU7XG5cdFxuXHRrZXlzID0ga2V5cy5maWx0ZXIoXG5cdFx0Ly8gQHRvZG8gOiB1c2UgcXVlcnkgcmVmc1xuXHRcdC8vIChzdG9yZSkoXFwuc3RvcmUpKihcXFsoXFwqfChwcm9wcylcXHcrKSspXFxdKT8oXFw6YWxpYXMpXG5cdFx0KCBrZXkgKSA9PiB7XG5cdFx0XHRpZiAoICFrZXkgKSB7XG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoXCJOb3QgYSBtYXBwYWJsZSBzdG9yZSBpdGVtICdcIiArIGtleSArIFwiJyBpbiBcIiArIG9yaWdpbiArICcgISEnKTtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0bGV0IG5hbWUsXG5cdFx0XHQgICAgYWxpYXMsXG5cdFx0XHQgICAgcGF0aCxcblx0XHRcdCAgICBzdG9yZSwgX2tleTtcblx0XHRcdGlmICgga2V5LnN0b3JlICYmIGtleS5uYW1lICkge1xuXHRcdFx0XHRhbGlhcyA9IG5hbWUgPSBrZXkubmFtZTtcblx0XHRcdFx0c3RvcmUgPSBrZXkuc3RvcmU7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIGlmICggaXMuZm4oa2V5KSApIHtcblx0XHRcdFx0bmFtZSAgPSBhbGlhcyA9IGtleS5uYW1lIHx8IGtleS5kZWZhdWx0TmFtZTtcblx0XHRcdFx0c3RvcmUgPSBrZXk7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0X2tleSAgPSBrZXkubWF0Y2goLyhbXlxcLlxcOl0rKSgoPzpcXC5bXlxcLlxcOl0rKSopKD86XFw6KFteXFwuXFw6XSspKT8vKTtcblx0XHRcdFx0bmFtZSAgPSBfa2V5WzFdO1xuXHRcdFx0XHRwYXRoICA9IF9rZXlbMl0gJiYgX2tleVsyXS5zdWJzdHIoMSk7XG5cdFx0XHRcdHN0b3JlID0gc2NvcGUuc3RvcmVzW19rZXlbMV1dO1xuXHRcdFx0XHRhbGlhcyA9IF9rZXlbM10gfHwgcGF0aCAmJiBwYXRoLm1hdGNoKC8oW15cXC5dKikkLylbMF0gfHwgX2tleVsxXTtcblx0XHRcdH1cblx0XHRcdGlmICggIXN0b3JlICkge1xuXHRcdFx0XHRsZXQgaSA9IFtdO1xuXHRcdFx0XHRmb3IgKCBsZXQgbyBpbiBzY29wZS5zdG9yZXMgKVxuXHRcdFx0XHRcdGkucHVzaChvKVxuXHRcdFx0XHRjb25zb2xlLmVycm9yKFwiTm90IGEgbWFwcGFibGUgc3RvcmUgaXRlbSAnXCIgKyBuYW1lICsgXCIvXCIgKyBhbGlhcyArIFwiJyBpbiBcIiArIChjU3RvcmUubmFtZSB8fCBjU3RvcmUpICsgJyAhIScsIHN0b3JlLCBfa2V5LCBzY29wZS5zdG9yZXMsIGkpO1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRpZiAoIFNjb3BlLmlzU2NvcGVDbGFzcyhzdG9yZSkgKSBzY29wZS5fbW91bnQobmFtZSk7XG5cdFx0XHRpZiAoIFNjb3BlLmlzU2NvcGUoc3RvcmUpICkge1xuXHRcdFx0XHRzdG9yZSA9IHNjb3BlLl9tb3VudChrZXkpO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSBpZiAoIHRhcmdldFJldnNbbmFtZV0gKSByZXR1cm4gZmFsc2U7Ly8gaWdub3JlIGRibCB1c2VzIGZvciBub3dcblx0XHRcdFxuXHRcdFx0XG5cdFx0XHRpZiAoIGlzLmZuKHN0b3JlKSApIHtcblx0XHRcdFx0c2NvcGUuX21vdW50KG5hbWUpXG5cdFx0XHRcdHNjb3BlLnN0b3Jlc1tuYW1lXS5iaW5kKGNTdG9yZSwgYWxpYXMsIHNldEluaXRpYWwsIHBhdGgpO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdHN0b3JlLmJpbmQoY1N0b3JlLCBhbGlhcywgc2V0SW5pdGlhbCwgcGF0aCk7XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdC8vIGdpdmUgaW5pdGlhbCBzdG9yZSB3ZWlnaHQgYmFzaW5nIHNvdXJjZXNcblx0XHRcdHNjb3BlLnN0b3Jlc1tuYW1lXS5fc291cmNlcyAmJiBjU3RvcmUuX3NvdXJjZXMucHVzaCguLi5zY29wZS5zdG9yZXNbbmFtZV0uX3NvdXJjZXMpO1xuXHRcdFx0XG5cdFx0XHR0YXJnZXRSZXZzW2FsaWFzXSA9IHRhcmdldFJldnNbYWxpYXNdIHx8IHRydWU7XG5cdFx0XHQhdGFyZ2V0U2NvcGVbbmFtZV0gJiYgKHRhcmdldFNjb3BlW25hbWVdID0gc2NvcGUuc3RvcmVzW25hbWVdKTtcblx0XHRcdGlmICggc2NvcGUuc3RvcmVzW25hbWVdLmhhc093blByb3BlcnR5KCdkYXRhJykgKVxuXHRcdFx0XHRpbml0aWFsT3V0cHV0c1tuYW1lXSA9IHNjb3BlLmRhdGFbbmFtZV07XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdCk7XG5cdFxuXHQvLyAuLi4gQHRvZG9cblx0Y1N0b3JlLm9uY2UoJ2Rlc3Ryb3knLCAoIC4uLmFyZ3ogKSA9PiB7XG5cdFx0a2V5cy5tYXAoXG5cdFx0XHQoIGtleSApID0+IHtcblx0XHRcdFx0bGV0IG5hbWUsXG5cdFx0XHRcdCAgICBhbGlhcywgcGF0aCxcblx0XHRcdFx0ICAgIHN0b3JlO1xuXHRcdFx0XHRpZiAoIGtleS5zdG9yZSAmJiBrZXkubmFtZSApIHtcblx0XHRcdFx0XHRhbGlhcyA9IG5hbWUgPSBrZXkubmFtZTtcblx0XHRcdFx0XHRzdG9yZSA9IGtleS5zdG9yZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlIGlmICggaXMuZm4oa2V5KSApIHtcblx0XHRcdFx0XHRuYW1lICA9IGFsaWFzID0ga2V5Lm5hbWUgfHwga2V5LmRlZmF1bHROYW1lO1xuXHRcdFx0XHRcdHN0b3JlID0gc2NvcGUuc3RvcmVzW25hbWVdO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdGtleSAgID0ga2V5Lm1hdGNoKC8oW15cXC5cXDpdKykoKD86XFwuW15cXC5cXDpdKykqKSg/OlxcOihbXlxcLlxcOl0rKSk/Lyk7XG5cdFx0XHRcdFx0bmFtZSAgPSBrZXlbMV07XG5cdFx0XHRcdFx0cGF0aCAgPSBrZXlbMl0gJiYga2V5WzJdLnN1YnN0cigxKTtcblx0XHRcdFx0XHRzdG9yZSA9IHNjb3BlLnN0b3Jlc1trZXlbMV1dO1xuXHRcdFx0XHRcdGFsaWFzID0ga2V5WzNdIHx8IHBhdGggJiYgcGF0aC5tYXRjaCgvKFteXFwuXSopJC8pWzBdIHx8IGtleVsxXTtcblx0XHRcdFx0fVxuXHRcdFx0XHRcblx0XHRcdFx0c3RvcmUgJiYgIWlzLmZuKHN0b3JlKSAmJiBzdG9yZS51bkJpbmQoY1N0b3JlLCBhbGlhcywgcGF0aClcblx0XHRcdH1cblx0XHQpO1xuXHR9KVxuXHRcblx0cmV0dXJuIGluaXRpYWxPdXRwdXRzO1xufTtcblxuXG5TdG9yZS5pc1N0b3JlICAgICAgPSBTY29wZS5pc1N0b3JlID0gZnVuY3Rpb24gKCBvYmogKSB7XG5cdHJldHVybiBvYmogaW5zdGFuY2VvZiBTdG9yZVxufVxuU3RvcmUuaXNTdG9yZUNsYXNzID0gU2NvcGUuaXNTdG9yZUNsYXNzID0gZnVuY3Rpb24gKCBvYmogKSB7XG5cdHJldHVybiBTdG9yZS5pc1Byb3RvdHlwZU9mKG9iaikgfHwgb2JqID09PSBTdG9yZVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdG9yZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvU3RvcmUuanMiLCIvKlxuICogVGhlIE1JVCBMaWNlbnNlIChNSVQpXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTkuIFdpc2UgV2lsZCBXZWJcbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIOKAnFNvZnR3YXJl4oCdKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIOKAnEFTIElT4oCdLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiAqXG4gKiAgQGF1dGhvciA6IE5hdGhhbmFlbCBCcmF1blxuICogIEBjb250YWN0IDogbjh0ei5qc0BnbWFpbC5jb21cbiAqL1xuXG5pbXBvcnQgaXMgZnJvbSBcImlzXCI7XG5cbi8qKlxuICogTWluaW1hbCBwdXNoIHNlcXVlbmNlciwgYXBwbHkgc3RvcmVzIHNwZWNpZmljIHRhc2sgaW4gdGhlIHJpZ2h0IG9yZGVyXG4gKi9cbmxldCB0YXNrUXVldWUgICAgICA9IFtdLFxuICAgIGN1cldlaWdodCAgICAgID0gMCxcbiAgICBtYXhXZWlnaHQgICAgICA9IDAsXG4gICAgbWluV2VpZ2h0ICAgICAgPSAwLFxuICAgIHRhc2tDb3VudCAgICAgID0gMCxcbiAgICBkZVN5bmMgICAgICAgICA9IGZhbHNlLFxuICAgIGRlU3luY01heFRhc2tzID0gMTAsXG4gICAgdGFzayxcbiAgICBpc1J1bm5pbmcsXG4gICAgZXJyb3JDYXRjaGVyICAgPSB7XG4gICAgICAgIGxhc3RFcnJvcjogbnVsbCxcbiAgICAgICAgZGlzcGF0Y2ggOiBmdW5jdGlvbiAoIGVycm9yICkge1xuICAgICAgICAgICAgZXJyb3JDYXRjaGVyLmRpc2FibGUoKTtcbiAgICAgICAgICAgIGlmICggdGFzayAmJiB0YXNrWyAwIF0uaGFuZGxlRXJyb3IgKSB7XG4gICAgICAgICAgICAgICAgdGFza1sgMCBdLmhhbmRsZUVycm9yKGVycm9yLCB0YXNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKCB0YXNrIClcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiUmVTY29wZSA6IEFuIGFwcGx5IHRhc2sgaGFzIGZhaWxlZCAhIVwiLCB0YXNrWyAxIF0sIFwiIG9uIFwiLCB0YXNrWyAwIF0ubmFtZSB8fCB0YXNrWyAwIF0uY29uc3RydWN0b3IubmFtZSlcbiAgICAgICAgXG4gICAgICAgICAgICBpc1J1bm5pbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIHRhc2sgICAgICA9IG51bGw7XG4gICAgICAgICAgICBydW5Ob3coKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW5hYmxlICAgOiAoIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnIClcbiAgICAgICAgICAgICAgICAgICA/ICgpID0+IHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCBlcnJvckNhdGNoZXIuZGlzcGF0Y2gpXG4gICAgICAgICAgICB9IDogKCkgPT4ge1xuICAgICAgICAgICAgICAgIHByb2Nlc3Mub24oJ3VuY2F1Z2h0RXhjZXB0aW9uJywgZXJyb3JDYXRjaGVyLmRpc3BhdGNoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIGRpc2FibGUgIDogKCB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyApXG4gICAgICAgICAgICAgICAgICAgPyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgZXJyb3JDYXRjaGVyLmRpc3BhdGNoKVxuICAgICAgICAgICAgfSA6ICgpID0+IHtcbiAgICAgICAgICAgICAgICBwcm9jZXNzLnJlbW92ZUxpc3RlbmVyKCd1bmNhdWdodEV4Y2VwdGlvbicsIGVycm9yQ2F0Y2hlci5kaXNwYXRjaCk7XG4gICAgICAgICAgICB9XG4gICAgfVxuO1xuXG5mdW5jdGlvbiBydW5Ob3coKSB7XG4gICAgaWYgKCAhaXNSdW5uaW5nICkge1xuICAgICAgICBydW4oKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJ1bigpIHtcbiAgICBsZXQgZnJvbSAgPSBEYXRlLm5vdygpO1xuICAgIGlzUnVubmluZyA9IHRydWU7XG4gICAgZXJyb3JDYXRjaGVyLmVuYWJsZSgpO1xuICAgIHdoaWxlICggdGFza0NvdW50ICkge1xuICAgICAgICBcbiAgICAgICAgLy8gdHJ5IGZvciB0aGUgY3VycmVudCB3ZWlnaHRcbiAgICAgICAgd2hpbGUgKCAhKCB0YXNrUXVldWVbIGN1cldlaWdodCBdICYmIHRhc2tRdWV1ZVsgY3VyV2VpZ2h0IF0ubGVuZ3RoICkgKVxuICAgICAgICAgICAgY3VyV2VpZ2h0Kys7XG4gICAgICAgIFxuICAgICAgICB0YXNrQ291bnQtLTtcbiAgICAgICAgdGFzayA9IHRhc2tRdWV1ZVsgY3VyV2VpZ2h0IF0uc2hpZnQoKTtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcIlRhc2sgOiBcIiwgdGFza1sxXSwgXCIgb24gXCIsIHRhc2tbMF0ubmFtZSk7XG4gICAgICAgIHRhc2tbIDAgXVsgdGFza1sgMSBdIF0uYXBwbHkodGFza1sgMCBdLCB0YXNrWyAyIF0pO1xuICAgIH1cbiAgICB0YXNrID0gdW5kZWZpbmVkO1xuICAgIGVycm9yQ2F0Y2hlci5kaXNhYmxlKCk7XG4gICAgXG4gICAgaXNSdW5uaW5nID0gZmFsc2U7XG4gICAgaWYgKCB0YXNrQ291bnQgKSB7XG4gICAgICAgIHNldFRpbWVvdXQocnVuTm93KTtcbiAgICB9XG59XG5cbi8vXG4vL2luZGV4LnNldFRhc2tEZVN5bmMgPSAoIG5iICkgPT4ge1xuLy8gICAgaWYgKCBuYiA9PT0gZmFsc2UgKVxuLy8gICAgICAgIHJldHVybiBkZVN5bmMgPSBmYWxzZTtcbi8vICAgIGVsc2UgaWYgKCBuYiA9PT0gdHJ1ZSApIHtcbi8vICAgICAgICBkZVN5bmMgICAgICAgICA9IHRydWU7XG4vLyAgICAgICAgZGVTeW5jTWF4VGFza3MgPSAxMDtcbi8vICAgIH1cbi8vICAgIGVsc2UgKGlzLmludChuYikpXG4vLyAgICB7XG4vLyAgICAgICAgZGVTeW5jICAgICAgICAgPSB0cnVlO1xuLy8gICAgICAgIGRlU3luY01heFRhc2tzID0gbmI7XG4vLyAgICB9XG4vL307XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBwdXNoVGFzayggb2JqLCBmbiwgYXJneiApIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBtb3JlIGEgc3RvcmUgaGF2ZSBzb3VyY2VzLCB0aGUgbW9yZSBpdCBzaG91bGQgYmUgcHJvY2Vzc2VkIGZpcnN0XG4gICAgICAgICAqIFNvIGxlYWZzIHN0b3JlcyBzdGF5IHN5bmMsIGFuZCByb290IHN0b3JlcyByZWNlaXZlIG1lcmdlZCBzdGF0ZSB1cGRhdGVzO1xuICAgICAgICAgKiBnbG9iYWwgc3RhdGUgc3RheSBjb2hlcmVudFxuICAgICAgICAgKlxuICAgICAgICAgKiBUaGlzIG1lYW4gd2hhdGV2ZXIgdGhlIG51bWJlciBvZiBzdG9yZXMgJiB0aGUgY29tcGxleGl0eSBvZiB0aGUgZGVwcyxcbiAgICAgICAgICogdXBkYXRpbmcgYSBzdG9yZSBzdGF0ZSB3aWxsIHVwZGF0ZSBpdHMgc3luY2hyb25lIGNoaWxkIHN0b3JlcyBpbW1lZGlhdGVseVxuICAgICAgICAgKlxuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSB7KnxudW1iZXJ9XG4gICAgICAgICAqL1xuICAgICAgICBsZXQgd2VpZ2h0ID0gb2JqLl9zb3VyY2VzICYmIG9iai5fc291cmNlcy5sZW5ndGggfHwgMSxcbiAgICAgICAgICAgIHN0YWNrICA9IHRhc2tRdWV1ZVsgd2VpZ2h0IF0gPVxuICAgICAgICAgICAgICAgIHRhc2tRdWV1ZVsgd2VpZ2h0IF0gfHwgW107XG4gICAgICAgIFxuICAgICAgICBtYXhXZWlnaHQgPSBNYXRoLm1heChtYXhXZWlnaHQsIHdlaWdodCk7XG4gICAgICAgIGN1cldlaWdodCA9IE1hdGgubWluKGN1cldlaWdodCwgd2VpZ2h0KTtcbiAgICAgICAgdGFza0NvdW50Kys7XG4gICAgICAgIFxuICAgICAgICAvL2NvbnNvbGUubG9nKFwiUHVzaCBUYXNrIDogXCIsIGZuLCBcIiBvbiBcIiwgb2JqLm5hbWUsIHdlaWdodCk7XG4gICAgICAgIHN0YWNrLnB1c2goWyBvYmosIGZuLCBhcmd6IF0pO1xuICAgICAgICBzZXRUaW1lb3V0KHJ1bk5vdywgMCk7XG4gICAgICAgIHJldHVybiBzdGFjay5sZW5ndGg7XG4gICAgfVxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbHMvVGFza1NlcXVlbmNlci5qcyJdLCJzb3VyY2VSb290IjoiIn0=