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
	
	var _Store = __webpack_require__(15);
	
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
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _is = __webpack_require__(2);
	
	var _is2 = _interopRequireDefault(_is);
	
	var _shortid = __webpack_require__(3);
	
	var _shortid2 = _interopRequireDefault(_shortid);
	
	var _Emitter = __webpack_require__(13);
	
	var _Emitter2 = _interopRequireDefault(_Emitter);
	
	var _utils = __webpack_require__(14);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
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
	
	var Scope = function (_EventEmitter) {
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
	}(_Emitter2.default);
	
	Scope.persistenceTm = 1;
	Scope.Store = null;
	
	Scope.scopeRef = function scopeRef(path) {
		this.path = path;
	};
	
	Scope.scopes = allScopes;
	
	
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
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	module.exports = __webpack_require__(4);


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var alphabet = __webpack_require__(5);
	var encode = __webpack_require__(7);
	var decode = __webpack_require__(9);
	var build = __webpack_require__(10);
	var isValid = __webpack_require__(11);
	
	// if you are using cluster or multiple servers use this to make each instance
	// has a unique value for worker
	// Note: I don't know if this is automatically set when using third
	// party cluster solutions such as pm2.
	var clusterWorkerId = __webpack_require__(12) || 0;
	
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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var randomFromSeed = __webpack_require__(6);
	
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
/* 6 */
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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var randomByte = __webpack_require__(8);
	
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
/* 8 */
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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var alphabet = __webpack_require__(5);
	
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
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var encode = __webpack_require__(7);
	var alphabet = __webpack_require__(5);
	
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
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var alphabet = __webpack_require__(5);
	
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
/* 12 */
/***/ (function(module, exports) {

	'use strict';
	
	module.exports = 0;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
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
/* 14 */
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
/* 15 */
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
	
	var is = __webpack_require__(2),
	    Scope = __webpack_require__(1),
	    _require = __webpack_require__(14),
	    keyWalknSet = _require.keyWalknSet,
	    keyWalknGet = _require.keyWalknGet,
	    EventEmitter = __webpack_require__(13),
	    TaskSequencer = __webpack_require__(16),
	    shortid = __webpack_require__(3),
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
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";
	
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(17)))

/***/ }),
/* 17 */
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


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYTE3NTc2YmY5MzZmYTY3YTViMTIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9TY29wZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2lzL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vc2hvcnRpZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3Nob3J0aWQvbGliL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vc2hvcnRpZC9saWIvYWxwaGFiZXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9zaG9ydGlkL2xpYi9yYW5kb20vcmFuZG9tLWZyb20tc2VlZC5qcyIsIndlYnBhY2s6Ly8vLi9+L3Nob3J0aWQvbGliL2VuY29kZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3Nob3J0aWQvbGliL3JhbmRvbS9yYW5kb20tYnl0ZS1icm93c2VyLmpzIiwid2VicGFjazovLy8uL34vc2hvcnRpZC9saWIvZGVjb2RlLmpzIiwid2VicGFjazovLy8uL34vc2hvcnRpZC9saWIvYnVpbGQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9zaG9ydGlkL2xpYi9pcy12YWxpZC5qcyIsIndlYnBhY2s6Ly8vLi9+L3Nob3J0aWQvbGliL3V0aWwvY2x1c3Rlci13b3JrZXItaWQtYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvRW1pdHRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1N0b3JlLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9UYXNrU2VxdWVuY2VyLmpzIiwid2VicGFjazovLy8uL34vcHJvY2Vzcy9icm93c2VyLmpzIl0sIm5hbWVzIjpbIiRnbG9iYWwiLCJ3aW5kb3ciLCJnbG9iYWwiLCJSUyIsIl9fX3Jlc2NvcGUiLCJjb25zb2xlIiwid2FybiIsIlNjb3BlIiwiU3RvcmUiLCJzY29wZVJlZiIsIm1hcCIsImtleSIsIl9fcHJvdG9fX3B1c2giLCJ0YXJnZXQiLCJpZCIsInBhcmVudCIsImZuIiwicHJvdG90eXBlIiwiXyIsImFsbFNjb3BlcyIsInNtIiwic3RhdGUiLCJfcmVmcyIsImFjdGlvbnMiLCJwYXRoIiwiYXBwbGllciIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwiY3BhdGgiLCJwdXNoIiwiRnVuY3Rpb24iLCJhcyIsInNjb3BlcyIsInNrZXkiLCJpcyIsImFycmF5Iiwic29ydCIsImEiLCJiIiwiZmlyc3RuYW1lIiwiam9pbiIsInN0b3Jlc01hcCIsInVwcGVyU2NvcGUiLCJzbmFwc2hvdCIsImRhdGEiLCJpbmNyZW1lbnRJZCIsInBlcnNpc3RlbmNlVG0iLCJhdXRvRGVzdHJveSIsInJvb3RFbWl0dGVyIiwiYm91bmRlZEFjdGlvbnMiLCJrZXlQSUQiLCJfaWQiLCJzaG9ydGlkIiwiZ2VuZXJhdGUiLCJiYXNlSWQiLCJpc0xvY2FsSWQiLCJyZWdpc3RlciIsImkiLCJfcmV2Iiwic3RvcmVzIiwiX2F1dG9EZXN0cm95IiwiY29uc3RydWN0b3IiLCJkZWFkIiwiRXJyb3IiLCJzb3VyY2VzIiwiY2hpbGRTY29wZXMiLCJjaGlsZFNjb3Blc0xpc3QiLCJ1blN0YWJsZUNoaWxkcyIsInNlZW5DaGlsZHMiLCJfbGlzdGVuaW5nIiwiX3Njb3BlIiwiX21peGVkIiwiX21peGVkTGlzdCIsImZvbGxvd2VycyIsIl9fcmV0YWlucyIsImFsbCIsIl9fbG9ja3MiLCJfYm91bmRlZEFjdGlvbnMiLCJ0ZXN0IiwiaW5jbHVkZXMiLCJiaW5kIiwicmV0YWluIiwiX3N0YWJsZSIsIndhaXQiLCJvbiIsIl9wYXJlbnRMaXN0IiwicmVsZWFzZSIsIl9wcm9wYWciLCJfYWRkQ2hpbGQiLCJyZXN0b3JlIiwic2V0VGltZW91dCIsImRpc3Bvc2UiLCJzdG9yZUlkTGlzdCIsIl9tb3VudCIsInN0b3JlSWQiLCJhcmd1bWVudHMiLCJyZWYiLCJwYXJzZVJlZiIsInJlZHVjZVJpZ2h0IiwibW91bnRlZCIsImN0eCIsInN0b3JlIiwidGFza1F1ZXVlIiwiaXNTdG9yZUNsYXNzIiwibmFtZSIsImxlbmd0aCIsInNoaWZ0IiwiaXNTY29wZUNsYXNzIiwiJHBhcmVudCIsIm1vdW50Iiwic2xpY2UiLCJpc1N0b3JlIiwidW5kZWZpbmVkIiwic2V0U3RhdGUiLCJpc1Njb3BlIiwiX3dhdGNoU3RvcmUiLCJyZWxpbmsiLCJzaW5nbGV0b24iLCJzcmNDdHgiLCJ0YXJnZXRDdHgiLCJleHRlcm5hbCIsImZvcmNlIiwiaG90UmVsb2FkaW5nIiwiYWN0aXZlQWN0aW9ucyIsImluZm8iLCJ0bXAiLCJuZXh0U3RhdGUiLCJkZXN0cm95IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwiZ2V0Iiwic2V0IiwidiIsImFjdCIsImhhc093blByb3BlcnR5IiwiX190YXJnZXRTdG9yZXMiLCJkaXNwYXRjaCIsImlzU3RhYmxlIiwicHJvcGFnIiwibGlzdHMiLCJfX29yaWdpbiIsInNldEluaXRpYWwiLCJyZXZNYXAiLCJsYXN0UmV2cyIsInJlZktleXMiLCJzdHJpbmciLCJyZWR1Y2UiLCJyZXZzIiwicmV2IiwicmVmcyIsInJldGFpblN0b3JlcyIsImdldFVwZGF0ZXMiLCJkaXNwb3NlU3RvcmVzIiwic3BsaWNlIiwicmVmTGlzdCIsIm1peGVkQ1dVbm1vdW50IiwidW5Nb3VudEtleSIsImlzUmVhY3RDb21wb25lbnQiLCJ1bkJpbmQiLCJhbGlhcyIsInJldHJpZXZlIiwic3BsaXQiLCJvYmoiLCJjU2NvcGUiLCJyZXRyaWV2ZVN0b3JlIiwic3RvcmVzUmV2TWFwIiwibG9jYWwiLCJ1cGRhdGVkIiwiZ2V0U3RvcmVzUmV2cyIsIl9nZXRSZXZNYXAiLCJvdXRwdXQiLCJjaGlsZHMiLCJfZ2V0QWxsQ2hpbGRzIiwiY2ZnIiwicGFyZW50QWxpYXMiLCJzaWQiLCJzZXJpYWxpemVfZXgiLCJleGNsdWRlIiwid2l0aENoaWxkcyIsIndpdGhNaXhlZCIsIm5vcmVmcyIsInNlcmlhbGl6ZSIsIndpdGhDaGlsZCIsIndpdGhQYXJlbnRzIiwiaCIsImsiLCJib29sIiwic25hcCIsInRha2VTbmFwc2hvdEJ5S2V5Iiwic3RhcnRzV2l0aCIsInN1YnN0ciIsImdldFNuYXBzaG90QnlLZXkiLCJkZWxldGVTbmFwc2hvdEJ5S2V5IiwicmVwbGFjZSIsInBTdGF0ZSIsIl9yZWYiLCJhY3Rpb24iLCJhcmd6Iiwic3RhY2siLCJiQWN0cyIsInRyaWdnZXIiLCJjYiIsIm9uY2UiLCJ0aGVuIiwib25jZVN0YWJsZVRyZWUiLCJyZWFzb24iLCJlbWl0IiwiZXJyb3IiLCJzdGFiaWxpemVyVE0iLCJjbGVhclRpbWVvdXQiLCJwcm9wYWdUTSIsInJlbWFwcyIsInNjb3BlIiwid2FzU3RhYmxlIiwiaW5kZXhPZiIsInVuIiwiZGVzdHJveVRNIiwicmVtb3ZlTGlzdGVuZXIiLCJmb2xsb3dlciIsIl9ybUNoaWxkIiwiRXZlbnRFbWl0dGVyIiwiaXNQcm90b3R5cGVPZiIsIkVtaXR0ZXIiLCJfZXZlbnRzIiwiZXZ0Iiwid2Fsa25TZXQiLCJ3YWxrbkdldCIsImtleVdhbGtuU2V0Iiwia2V5V2Fsa25HZXQiLCJyZXF1aXJlIiwidmFsdWUiLCJpc0tleSIsImZpbHRlciIsIlRhc2tTZXF1ZW5jZXIiLCJvYmpQcm90byIsImdldFByb3RvdHlwZU9mIiwiX3N0YXRpYyIsImdldFNjb3BlIiwic3RhdGljU2NvcGUiLCJ3YXRjaHMiLCJ1c2UiLCJhcHBseSIsImluaXRpYWxTdGF0ZSIsImRlZmF1bHRTdGF0ZSIsIl91aWQiLCJfb25TdGFiaWxpemUiLCJfcGVyc2lzdGVuY2VUbSIsIl9jZmciLCJzY29wZU9iaiIsIiRzY29wZSIsIiRzdG9yZXMiLCIkYWN0aW9ucyIsIiRkaXNwYXRjaCIsIl9yZXZzIiwiX3JlcXVpcmUiLCJfc291cmNlcyIsIl91c2UiLCJtYXRjaCIsInJlZjIiLCJfZm9sbG93ZXJzIiwiX2NoYW5nZXNTVyIsIl9hZnRlckNvbnN0cnVjdG9yIiwiaW5pdGlhbERhdGEiLCJhcHBsaWVkIiwiX25leHRTdGF0ZSIsInNob3VsZEFwcGx5IiwibWFuYWdlZCIsIm5EYXRhcyIsInIiLCJjRGF0YXMiLCJpc0NvbXBsZXRlIiwiZm9sbG93IiwiY2FsbCIsImNoYW5nZXMiLCJfc3RhYmlsaXplciIsInB1c2hUYXNrIiwibnMiLCJoYXNEYXRhQ2hhbmdlIiwic3RhYmxlIiwiZm9yY2VkU3RhdGUiLCJuZXh0RGF0YSIsInN5bmMiLCJjaGFuZ2UiLCJwdXNoU3RhdGUiLCJzdGFiaWxpemUiLCJzSWQiLCJyZWZzQ291bnQiLCJwZXJzaXN0ZW50Iiwic2hvdWxkU2VyaWFsaXplIiwiZGF0YVJlZnMiLCJzdGF0ZUtleXMiLCJzdGF0ZVJlZnMiLCJpblJlZnNDb3VudCIsImluUmVmcyIsIl9fcHJvdG9fXyIsIm51bWJlciIsImltbWVkaWF0ZSIsInJlc3RvcmVSZWZQYXRoIiwicHJldmlvdXMiLCJtZSIsInNob3VsZFByb3BhZyIsIl9kZXN0cm95VE0iLCJyZW1vdmVBbGxMaXN0ZW5lcnMiLCJjU3RvcmUiLCJvcmlnaW4iLCJ0YXJnZXRSZXZzIiwidGFyZ2V0U2NvcGUiLCJpbml0aWFsT3V0cHV0cyIsIl9rZXkiLCJkZWZhdWx0TmFtZSIsIm8iLCJjdXJXZWlnaHQiLCJtYXhXZWlnaHQiLCJtaW5XZWlnaHQiLCJ0YXNrQ291bnQiLCJkZVN5bmMiLCJkZVN5bmNNYXhUYXNrcyIsInRhc2siLCJpc1J1bm5pbmciLCJlcnJvckNhdGNoZXIiLCJsYXN0RXJyb3IiLCJkaXNhYmxlIiwiaGFuZGxlRXJyb3IiLCJydW5Ob3ciLCJlbmFibGUiLCJhZGRFdmVudExpc3RlbmVyIiwicHJvY2VzcyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJydW4iLCJmcm9tIiwiRGF0ZSIsIm5vdyIsIndlaWdodCIsIk1hdGgiLCJtYXgiLCJtaW4iXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztB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QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLE1BQU07QUFDakIsWUFBVyxNQUFNO0FBQ2pCLGFBQVksUUFBUTtBQUNwQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxNQUFNO0FBQ2pCLFlBQVcsTUFBTTtBQUNqQixhQUFZLFFBQVE7QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsTUFBTTtBQUNqQixhQUFZLFFBQVE7QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLE1BQU07QUFDakIsYUFBWSxRQUFRO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxNQUFNO0FBQ2pCLGFBQVksUUFBUTtBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLE1BQU07QUFDakIsYUFBWSxRQUFRO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLE1BQU07QUFDakIsYUFBWSxRQUFRO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFD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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxNQUFNO0FBQ2pCLGFBQVksUUFBUTtBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLE1BQU07QUFDakIsYUFBWSxRQUFRO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsTUFBTTtBQUNqQixhQUFZLFFBQVE7QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxNQUFNO0FBQ2pCLGFBQVksUUFBUTtBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLE1BQU07QUFDakIsYUFBWSxRQUFRO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxNQUFNO0FBQ2pCLGFBQVksUUFBUTtBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQy94QkE7QUFDQTs7Ozs7OztBQ0RBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDaEVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDakdBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDeEJBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQ2xCQTs7QUFFQSwrRUFBOEU7O0FBRTlFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUNiQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQ2hCQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFD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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXFCO0FBQ3JCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzQ0FBcUM7O0FBRXJDO0FBQ0E7QUFDQTs7QUFFQSw0QkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsNkJBQTRCLFVBQVUiLCJmaWxlIjoiLi4vLi4vZGlzdC9SZVNjb3BlLmJyb3dzZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgYTE3NTc2YmY5MzZmYTY3YTViMTIiLCIvKlxuICogVGhlIE1JVCBMaWNlbnNlIChNSVQpXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTkuIFdpc2UgV2lsZCBXZWJcbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIOKAnFNvZnR3YXJl4oCdKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIOKAnEFTIElT4oCdLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiAqXG4gKiAgQGF1dGhvciA6IE5hdGhhbmFlbCBCcmF1blxuICogIEBjb250YWN0IDogbjh0ei5qc0BnbWFpbC5jb21cbiAqL1xuXG5sZXQgJGdsb2JhbCA9ICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykgPyB3aW5kb3cgOiBnbG9iYWw7XG5cbmltcG9ydCBTY29wZSBmcm9tIFwiLi9TY29wZVwiO1xuaW1wb3J0IFN0b3JlIGZyb20gXCIuL1N0b3JlXCI7XG5cbmNvbnN0IFJTID0gJGdsb2JhbC5fX19yZXNjb3BlIHx8IHt9O1xuXG5pZiAoICRnbG9iYWwuX19fcmVzY29wZSApIHtcblx0Y29uc29sZS53YXJuKFwiUmVTY29wZSBpcyBkZWZpbmVkIG11bHRpcGxlIHRpbWVzICEhIFxcbkNoZWNrIHlvdSdyZSBwYWNrYWdpbmdcIilcbn1cbmVsc2Uge1xuXHRcblx0JGdsb2JhbC5fX19yZXNjb3BlID0gUlM7XG5cdFNjb3BlLlN0b3JlICAgICAgICA9IFN0b3JlO1xuXHRSUy5TY29wZSAgICAgICAgICAgPSBTY29wZTtcblx0UlMuU3RvcmUgICAgICAgICAgID0gU3RvcmU7XG5cdFJTLnNjb3BlUmVmICAgICAgICA9XG5cdFx0ZnVuY3Rpb24gc2NvcGVSZWYoIG1hcCwga2V5ICkge1xuXHRcdFx0bWFwW2tleV0gPSBuZXcgU2NvcGUuc2NvcGVSZWYobWFwW2tleV0pO1xuXHRcdFx0cmV0dXJuIG1hcDtcblx0XHR9O1xuXHRcbn1cbmV4cG9ydCBkZWZhdWx0IFJTO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC5qcyIsIi8qXG4gKlxuICogQ29weXJpZ2h0IChDKSAyMDE5IE5hdGhhbmFlbCBCcmF1blxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cblxuaW1wb3J0IGlzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSBcImlzXCI7XG5pbXBvcnQgc2hvcnRpZCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tIFwic2hvcnRpZFwiO1xuaW1wb3J0IEV2ZW50RW1pdHRlciAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSBcIi4vdXRpbHMvRW1pdHRlclwiO1xuaW1wb3J0IHt3YWxrblNldCwgd2Fsa25HZXQsIGtleVdhbGtuU2V0LCBrZXlXYWxrbkdldH0gZnJvbSAnLi91dGlscy91dGlscyc7XG5cbmNvbnN0IF9fcHJvdG9fX3B1c2ggPSAoIHRhcmdldCwgaWQsIHBhcmVudCApID0+IHtcblx0ICAgICAgbGV0IGZuICAgICAgID0gZnVuY3Rpb24gKCkge1xuXHQgICAgICB9O1xuXHQgICAgICBmbi5wcm90b3R5cGUgPSBwYXJlbnQgPyBuZXcgcGFyZW50Ll9baWRdKCkgOiB0YXJnZXRbaWRdIHx8IHt9O1xuXHQgICAgICB0YXJnZXRbaWRdICAgPSBuZXcgZm4oKTtcblx0ICAgICAgdGFyZ2V0Ll9baWRdID0gZm47XG4gICAgICB9LFxuICAgICAgYWxsU2NvcGVzICAgICA9IHt9O1xuXG5cbi8qKlxuICogQmFzZSBTY29wZSBvYmplY3RcbiAqL1xuY2xhc3MgU2NvcGUgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuXHRcblx0c3RhdGljIHBlcnNpc3RlbmNlVG0gPSAxOy8vIGlmID4gMCwgd2lsbCB3YWl0ICdwZXJzaXN0ZW5jZVRtJyBtcyBiZWZvcmUgZGVzdHJveSB3aGVuIGRpc3Bvc2UgcmVhY2ggMFxuXHRzdGF0aWMgU3RvcmUgICAgICAgICA9IG51bGw7XG5cdHN0YXRpYyBzY29wZVJlZiAgICAgID0gZnVuY3Rpb24gc2NvcGVSZWYoIHBhdGggKSB7XG5cdFx0dGhpcy5wYXRoID0gcGF0aDtcblx0fTtcblx0c3RhdGljIHNjb3BlcyAgICAgICAgPSBhbGxTY29wZXM7Ly8gYWxsIGFjdGl2ZSBzY29wZXNcblx0LyoqXG5cdCAqIGdldCBhIHBhcnNlZCByZWZlcmVuY2UgbGlzdCBmcm9tIHN0YXRlTWFwXG5cdCAqIEBwYXJhbSBfcmVmXG5cdCAqIEByZXR1cm5zIHt7c3RvcmVJZCwgcGF0aCwgYWxpYXM6ICosIHJlZjogKn19XG5cdCAqL1xuXHRzdGF0aWMgc3RhdGVNYXBUb1JlZkxpc3QoIHNtLCBzdGF0ZSA9IHt9LCBfcmVmcyA9IFtdLCBhY3Rpb25zID0ge30sIHBhdGggPSBcIlwiICkge1xuXHRcdGxldCBhcHBsaWVyO1xuXHRcdE9iamVjdC5rZXlzKHNtKS5mb3JFYWNoKFxuXHRcdFx0a2V5ID0+IHtcblx0XHRcdFx0bGV0IGNwYXRoID0gcGF0aCA/IHBhdGggKyAnLicgKyBrZXkgOiBrZXk7XG5cdFx0XHRcdFxuXHRcdFx0XHRzbVtrZXldIGluc3RhbmNlb2YgU2NvcGUuc2NvcGVSZWZcblx0XHRcdFx0PyBfcmVmcy5wdXNoKHNtW2tleV0ucGF0aCArICc6JyArIGNwYXRoKVxuXHRcdFx0XHQ6IChzbVtrZXldICYmIHNtW2tleV0gaW5zdGFuY2VvZiBGdW5jdGlvbilcblx0XHRcdFx0ICA/IGtleSA9PSBcIiRhcHBseVwiXG5cdFx0XHRcdCAgICA/IGFwcGxpZXIgPSBzbVtrZXldXG5cdFx0XHRcdCAgICA6IGFjdGlvbnNba2V5XSA9IHNtW2tleV1cblx0XHRcdFx0ICA6IChzbVtrZXldICYmIHNtW2tleV0ucHJvdG90eXBlIGluc3RhbmNlb2YgU2NvcGUuU3RvcmUpXG5cdFx0XHRcdCAgICA/IF9yZWZzLnB1c2goc21ba2V5XS5hcyhjcGF0aCkpXG5cdFx0XHRcdCAgICA6IHN0YXRlW2NwYXRoXSA9IHNtW2tleV1cblx0XHRcdFx0Ly86IHRoaXMuc3RhdGVNYXBUb1JlZkxpc3Qoc21ba2V5XSwgX3JlZnMsIHBhdGggKyAnLicgKyBrZXkpXG5cdFx0XHR9XG5cdFx0KVxuXHRcdHJldHVybiBhcHBsaWVyO1xuXHR9XG5cdFxuXHRzdGF0aWMgZ2V0U2NvcGUoIHNjb3BlcyApIHtcblx0XHRsZXQgc2tleSA9IGlzLmFycmF5KHNjb3BlcykgPyBzY29wZXMuc29ydCgoIGEsIGIgKSA9PiB7XG5cdFx0XHRpZiAoIGEuZmlyc3RuYW1lIDwgYi5maXJzdG5hbWUgKSByZXR1cm4gLTE7XG5cdFx0XHRpZiAoIGEuZmlyc3RuYW1lID4gYi5maXJzdG5hbWUgKSByZXR1cm4gMTtcblx0XHRcdHJldHVybiAwO1xuXHRcdH0pLmpvaW4oJysnKSA6IHNjb3Blcztcblx0XHRyZXR1cm4gYWxsU2NvcGVzW3NrZXldID0gYWxsU2NvcGVzW3NrZXldIHx8IG5ldyBTY29wZSh7fSwgeyBpZDogc2tleSB9KTtcblx0fTtcblx0XG5cdFxuXHQvKipcblx0ICogSW5pdCBhIFJlU2NvcGUgc2NvcGVcblx0ICpcblx0ICogQHBhcmFtIHN0b3Jlc01hcCB7T2JqZWN0fSBPYmplY3Qgd2l0aCB0aGUgaW5pdGlhbCBzdG9yZXMgZGVmaW5pdGlvbiAvIGluc3RhbmNlc1xuXHQgKiBAcGFyYW0gY29uZmlnIHtPYmplY3R9IFNjb3BlIGNvbmZpZ1xuXHQgKiB7XG5cdCAqICAgICBwYXJlbnQge3Njb3BlfSBAb3B0aW9uYWwgcGFyZW50IHNjb3BlXG5cdCAqXG5cdCAqICAgICBpZCB7c3RyaW5nfSBAb3B0aW9uYWwgaWQgKCBpZiB0aGlzIGlkIGV4aXN0IHN0b3Jlc01hcCB3aWxsIGJlIG1lcmdlIG9uIHRoZSAnaWQnXG5cdCAqICAgICBzY29wZSlcblx0ICogICAgIGtleSB7c3RyaW5nfSBAb3B0aW9uYWwga2V5IG9mIHRoZSBzY29wZSAoIGlmIG5vIGlkIGlzIHNldCwgdGhlIHNjb3BlIGlkIHdpbGwgYmUgKHBhcmVudC5pZCsnPicra2V5KVxuXHQgKiAgICAgaW5jcmVtZW50SWQge2Jvb2x9IEBvcHRpb25hbCB0cnVlIHRvIGFkZCBhIHN1ZmZpeCBpZCwgaWYgdGhlIHByb3ZpZGVkIGtleSBvciBpZCBnbG9iYWxseSBleGlzdFxuXHQgKlxuXHQgKiAgICAgc3RhdGUge09iamVjdH0gQG9wdGlvbmFsIGluaXRpYWwgc3RhdGUgYnkgc3RvcmUgYWxpYXNcblx0ICogICAgIGRhdGEge09iamVjdH0gQG9wdGlvbmFsIGluaXRpYWwgZGF0YSBieSBzdG9yZSBhbGlhc1xuXHQgKlxuXHQgKiAgICAgcm9vdEVtaXR0ZXIge2Jvb2x9IEBvcHRpb25hbCB0cnVlIHRvIG5vdCBiZWluZyBkZXN0YWJpbGl6ZWQgYnkgcGFyZW50XG5cdCAqICAgICBib3VuZGVkQWN0aW9ucyB7YXJyYXkgfCByZWdleHB9IEBvcHRpb25hbCBsaXN0IG9yIHJlZ2V4cCBvZiBhY3Rpb25zIG5vdCBwcm9wYWdhdGVkIHRvIHRoZSBwYXJlbnRcblx0ICogICAgIGF1dG9EZXN0cm95IHt0cnVlIHwgZmFsc2UgfCAnaW5oZXJpdCd9XG5cdCAqICAgICBwZXJzaXN0ZW5jZVRtIHtudW1iZXIpIGlmID4gMCwgd2lsbCB3YWl0ICdwZXJzaXN0ZW5jZVRtJyBtcyBiZWZvcmUgZGVzdHJveSB3aGVuXG5cdCAqICAgICBkaXNwb3NlIHJlYWNoIDAgYXV0b0Rlc3Ryb3kgIHtib29sfSB3aWxsIHRyaWdnZXIgcmV0YWluICYgZGlzcG9zZSBhZnRlciBzdGFydFxuXHQgKiAgfVxuXHQgKiBAcmV0dXJucyB7U2NvcGV9XG5cdCAqL1xuXHRjb25zdHJ1Y3Rvciggc3RvcmVzTWFwLCB7IHBhcmVudCwgdXBwZXJTY29wZSwga2V5LCBpZCwgc25hcHNob3QsIHN0YXRlLCBkYXRhLCBpbmNyZW1lbnRJZCA9ICEha2V5LCBwZXJzaXN0ZW5jZVRtLCBhdXRvRGVzdHJveSwgcm9vdEVtaXR0ZXIsIGJvdW5kZWRBY3Rpb25zIH0gPSB7fSApIHtcblx0XHRzdXBlcigpO1xuXHRcdGxldCBfID0ge1xuXHRcdFx0a2V5UElEOiAodXBwZXJTY29wZSAmJiB1cHBlclNjb3BlLl9pZCB8fCBwYXJlbnQgJiYgcGFyZW50Ll9pZCB8fCBzaG9ydGlkLmdlbmVyYXRlKCkpLFxuXHRcdFx0a2V5LFxuXHRcdFx0aW5jcmVtZW50SWQsXG5cdFx0XHRiYXNlSWQ6IGlkXG5cdFx0fTtcblx0XHRcblx0XHRcblx0XHQvLyBnZW5lcmF0ZSAvIHNldCB0aGlzIHNjb3BlIGlkXG5cdFx0aWQgPSBpZCB8fCBrZXkgJiYgKF8ua2V5UElEICsgJz4nICsga2V5KTtcblx0XHRcblx0XHRfLmlzTG9jYWxJZCA9ICFpZDtcblx0XHRcblx0XHRpZCA9IGlkIHx8IChcIl9fX19fXCIgKyBzaG9ydGlkLmdlbmVyYXRlKCkpO1xuXHRcdFxuXHRcdGlmICggYWxsU2NvcGVzW2lkXSAmJiAhaW5jcmVtZW50SWQgKSB7Ly8gb3ZlcndyaXRlIGV4aXN0aW5nIHNjb3BlXG5cdFx0XHR0aGlzLl9pZCA9IGlkO1xuXHRcdFx0YWxsU2NvcGVzW2lkXS5yZWdpc3RlcihzdG9yZXNNYXApO1xuXHRcdFx0cmV0dXJuIGFsbFNjb3Blc1tpZF1cblx0XHR9XG5cdFx0ZWxzZSBpZiAoIGFsbFNjb3Blc1tpZF0gJiYgaW5jcmVtZW50SWQgKSB7Ly8gZ2VuZXJhdGUga2V5IGlkXG5cdFx0XHRsZXQgaSA9IC0xO1xuXHRcdFx0d2hpbGUgKCBhbGxTY29wZXNbaWQgKyAnWycgKyAoKytpKSArICddJ10gKSA7XG5cdFx0XHRpZCA9IGlkICsgJ1snICsgaSArICddJztcblx0XHR9XG5cdFx0XG5cdFx0Ly8gcmVnaXN0ZXIgdGhpcyBzY29wZSBpbiB0aGUgc3RhdGljIFNjb3BlLnNjb3Blc1xuXHRcdGFsbFNjb3Blc1tpZF0gPSB0aGlzO1xuXHRcdFxuXHRcdHRoaXMuX2lkICA9IGlkO1xuXHRcdHRoaXMuX3JldiA9IDA7XG5cdFx0XG5cdFx0dGhpcy5fID0gXztcblx0XHRcblx0XHR0aGlzLmFjdGlvbnMgPSB7fTtcblx0XHR0aGlzLnN0b3JlcyAgPSB7fTtcblx0XHR0aGlzLnN0YXRlICAgPSB7fTtcblx0XHR0aGlzLmRhdGEgICAgPSB7fTtcblx0XHRcblx0XHR0aGlzLnBhcmVudCA9IHBhcmVudDtcblx0XHRcblx0XHRpZiAoIGF1dG9EZXN0cm95ID09ICdpbmhlcml0JyApXG5cdFx0XHRhdXRvRGVzdHJveSA9IHBhcmVudCAmJiBwYXJlbnQuX2F1dG9EZXN0cm95O1xuXHRcdFxuXHRcdHRoaXMuX2F1dG9EZXN0cm95ID0gYXV0b0Rlc3Ryb3k7XG5cdFx0Xy5wZXJzaXN0ZW5jZVRtICAgPSBwZXJzaXN0ZW5jZVRtIHx8IHRoaXMuY29uc3RydWN0b3IucGVyc2lzdGVuY2VUbTtcblx0XHRcblx0XHRpZiAoIHBhcmVudCAmJiBwYXJlbnQuZGVhZCApXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDYW4ndCB1c2UgYSBkZWFkIHNjb3BlIGFzIHBhcmVudCAhXCIpO1xuXHRcdFxuXHRcdF9fcHJvdG9fX3B1c2godGhpcywgJ2FjdGlvbnMnLCBwYXJlbnQpO1xuXHRcdF9fcHJvdG9fX3B1c2godGhpcywgJ3N0b3JlcycsIHBhcmVudCk7XG5cdFx0X19wcm90b19fcHVzaCh0aGlzLCAnc3RhdGUnLCBwYXJlbnQpO1xuXHRcdF9fcHJvdG9fX3B1c2godGhpcywgJ2RhdGEnLCBwYXJlbnQpO1xuXHRcdFxuXHRcdHRoaXMuc291cmNlcyAgICAgID0gW107XG5cdFx0Xy5jaGlsZFNjb3BlcyAgICAgPSBbXTtcblx0XHRfLmNoaWxkU2NvcGVzTGlzdCA9IFtdO1xuXHRcdF8udW5TdGFibGVDaGlsZHMgID0gMDtcblx0XHRfLnNlZW5DaGlsZHMgICAgICA9IDA7XG5cdFx0Xy5fbGlzdGVuaW5nICAgICAgPSB7fTtcblx0XHRfLl9zY29wZSAgICAgICAgICA9IHt9O1xuXHRcdF8uX21peGVkICAgICAgICAgID0gW107XG5cdFx0Xy5fbWl4ZWRMaXN0ICAgICAgPSBbXTtcblx0XHRfLmZvbGxvd2VycyAgICAgICA9IFtdO1xuXHRcdFxuXHRcdHRoaXMuX19yZXRhaW5zID0geyBhbGw6IDAgfTtcblx0XHR0aGlzLl9fbG9ja3MgICA9IHsgYWxsOiAxIH07XG5cdFx0XG5cdFx0Ly8gdG9kb1xuXHRcdF8uX2JvdW5kZWRBY3Rpb25zID0gaXMuYXJyYXkoYm91bmRlZEFjdGlvbnMpXG5cdFx0ICAgICAgICAgICAgICAgICAgICA/IHsgdGVzdDogYm91bmRlZEFjdGlvbnMuaW5jbHVkZXMuYmluZChib3VuZGVkQWN0aW9ucykgfVxuXHRcdCAgICAgICAgICAgICAgICAgICAgOiBib3VuZGVkQWN0aW9ucztcblx0XHRcblx0XHQvLyByZWdpc3RlciB0byB0aGUgcGFyZW50IHNjb3BlXG5cdFx0aWYgKCBwYXJlbnQgKSB7XG5cdFx0XHRwYXJlbnQucmV0YWluKFwiaXNNeVBhcmVudFwiKTtcblx0XHRcdGlmICggIXJvb3RFbWl0dGVyICkge1xuXHRcdFx0XHQhcGFyZW50Ll9zdGFibGUgJiYgdGhpcy53YWl0KFwid2FpdGluZ1BhcmVudFwiKTtcblx0XHRcdFx0cGFyZW50Lm9uKF8uX3BhcmVudExpc3QgPSB7XG5cdFx0XHRcdFx0J3N0YWJsZScgIDogcyA9PiB0aGlzLnJlbGVhc2UoXCJ3YWl0aW5nUGFyZW50XCIpLFxuXHRcdFx0XHRcdCd1bnN0YWJsZSc6IHMgPT4gdGhpcy53YWl0KFwid2FpdGluZ1BhcmVudFwiKSxcblx0XHRcdFx0XHQndXBkYXRlJyAgOiBzID0+IHRoaXMuX3Byb3BhZygpXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdHBhcmVudC5vbihfLl9wYXJlbnRMaXN0ID0ge1xuXHRcdFx0XHRcdCd1cGRhdGUnOiBzID0+IHRoaXMuX3Byb3BhZygpXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdFx0Ly8gdGhpcy5yZWdpc3RlcihwYXJlbnQuX19zY29wZSwgc3RhdGUsIGRhdGEpO1xuXHRcdH1cblx0XHRcblx0XHQvLyByZWdpc3RlciB0aGlzIHNjb3BlIHN0b3Jlc1xuXHRcdHRoaXMucmVnaXN0ZXIoc3RvcmVzTWFwLCBzdGF0ZSwgZGF0YSk7XG5cdFx0dGhpcy5fX2xvY2tzLmFsbC0tO1xuXHRcdHRoaXMuX3N0YWJsZSA9ICF0aGlzLl9fbG9ja3MuYWxsO1xuXHRcdFxuXHRcdGlmICggcGFyZW50ICkge1xuXHRcdFx0cGFyZW50Ll9hZGRDaGlsZCh0aGlzKTtcblx0XHR9XG5cdFx0XG5cdFx0XG5cdFx0Ly8gcmVzdG9yZSBzbmFwc2hvdHNcblx0XHR0aGlzLnJlc3RvcmUoc25hcHNob3QpO1xuXHRcdFxuXHRcdFxuXHRcdGlmICggYXV0b0Rlc3Ryb3kgKVxuXHRcdFx0c2V0VGltZW91dChcblx0XHRcdFx0dG0gPT4ge1xuXHRcdFx0XHRcdHRoaXMucmV0YWluKFwiYXV0b0Rlc3Ryb3lcIik7XG5cdFx0XHRcdFx0dGhpcy5kaXNwb3NlKFwiYXV0b0Rlc3Ryb3lcIik7XG5cdFx0XHRcdH1cblx0XHRcdClcblx0XHRcblx0fVxuXHRcblx0LyoqXG5cdCAqXG5cdCAqIE1vdW50IHRoZSBzdG9yZXMgaW4gc3RvcmVzTGlzdCwgaW4gdGhpcyBzY29wZSBvciBpbiBpdHMgcGFyZW50cyBvciBtaXhlZCBzY29wZXNcblx0ICpcblx0ICogQHBhcmFtIHN0b3JlSWRMaXN0IHtzdHJpbmd8c3RvcmVSZWZ9IFN0b3JlIG5hbWUsIEFycmF5IG9mIFN0b3JlIG5hbWVzLCBvciBSZXNjb3BlXG5cdCAqICAgICBzdG9yZSByZWYgZnJvbSBTdG9yZTo6YXMgb3IgU3RvcmU6YXNcblx0ICogQHBhcmFtIHN0YXRlXG5cdCAqIEBwYXJhbSBkYXRhXG5cdCAqIEByZXR1cm5zIHtTY29wZX1cblx0ICovXG5cdG1vdW50KCBzdG9yZUlkTGlzdCwgc25hcHNob3QsIHN0YXRlLCBkYXRhICkge1xuXHRcdGlmICggaXMuYXJyYXkoc3RvcmVJZExpc3QpICkge1xuXHRcdFx0c3RvcmVJZExpc3QuZm9yRWFjaChzdG9yZUlkID0+IHRoaXMuX21vdW50KHN0b3JlSWQsIHNuYXBzaG90LCBzdGF0ZSwgZGF0YSkpO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdHRoaXMuX21vdW50KC4uLmFyZ3VtZW50cyk7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cdFxuXHRfbW91bnQoIGlkLCBzbmFwc2hvdCwgc3RhdGUsIGRhdGEgKSB7XG5cdFx0bGV0IHJlZiwgXyA9IHRoaXMuXztcblx0XHRcblx0XHRyZWYgPSB0aGlzLnBhcnNlUmVmKGlkKVxuXHRcdFxuXHRcdGlmICggaWQgPT0gXCIkcGFyZW50XCIgKSByZXR1cm47XG5cdFx0aWYgKCAhXy5fc2NvcGVbcmVmLnN0b3JlSWRdICkgey8vYXNrIG1peGVkIHx8IHBhcmVudFxuXHRcdFx0aWYgKCBfLl9taXhlZC5yZWR1Y2VSaWdodCgoIG1vdW50ZWQsIGN0eCApID0+IChtb3VudGVkIHx8IGN0eC5fbW91bnQoaWQsIHNuYXBzaG90LCBzdGF0ZSwgZGF0YSkpLCBmYWxzZSkgfHxcblx0XHRcdFx0IXRoaXMucGFyZW50IClcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0cmV0dXJuIHRoaXMucGFyZW50Ll9tb3VudCguLi5hcmd1bWVudHMpO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdGxldCBzdG9yZSA9IF8uX3Njb3BlW3JlZi5zdG9yZUlkXSwgdGFza1F1ZXVlID0gW107XG5cdFx0XHRpZiAoIFNjb3BlLmlzU3RvcmVDbGFzcyhzdG9yZSkgKSB7XG5cdFx0XHRcdF8uX3Njb3BlW3JlZi5zdG9yZUlkXSA9IG5ldyBzdG9yZSh0aGlzLCB7XG5cdFx0XHRcdFx0Ly9zbmFwc2hvdCxcblx0XHRcdFx0XHRuYW1lOiByZWYuc3RvcmVJZCxcblx0XHRcdFx0XHRzdGF0ZSxcblx0XHRcdFx0XHRkYXRhXG5cdFx0XHRcdH0sIHRhc2tRdWV1ZSk7XG5cdFx0XHRcdHdoaWxlICggdGFza1F1ZXVlLmxlbmd0aCApIHRhc2tRdWV1ZS5zaGlmdCgpKCk7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIGlmICggU2NvcGUuaXNTY29wZUNsYXNzKHN0b3JlKSApIHtcblx0XHRcdFx0c3RvcmUgPSBfLl9zY29wZVtyZWYuc3RvcmVJZF0gPSBuZXcgc3RvcmUoeyAkcGFyZW50OiB0aGlzIH0sIHtcblx0XHRcdFx0XHRrZXkgICAgICAgIDogcmVmLnN0b3JlSWQsXG5cdFx0XHRcdFx0aW5jcmVtZW50SWQ6IHRydWUsXG5cdFx0XHRcdFx0dXBwZXJTY29wZSA6IHRoaXNcblx0XHRcdFx0XHQvL2F1dG9EZXN0cm95OiB0cnVlXG5cdFx0XHRcdFx0Ly9wYXJlbnQ6IHRoaXNcblx0XHRcdFx0fSk7XG5cdFx0XHRcdC8vXy5fc2NvcGVbIHJlZi5zdG9yZUlkIF0ucmV0YWluKFwic2NvcGVkQ2hpbGRTY29wZVwiKTtcblx0XHRcdFx0Ly9fd2F0Y2hTdG9yZShyZWYuc3RvcmVJZCk7XG5cdFx0XHRcdGlmICggcmVmLnBhdGgubGVuZ3RoID4gMSApXG5cdFx0XHRcdFx0Xy5fc2NvcGVbcmVmLnN0b3JlSWRdLm1vdW50KHJlZi5wYXRoLnNsaWNlKDEpLmpvaW4oJy4nKSwgc25hcHNob3QsIHN0YXRlLCBkYXRhKVxuXHRcdFx0XHQvL2Vsc2UgcmV0dXJuIF8uX3Njb3BlWyByZWYuc3RvcmVJZCBdO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCBTY29wZS5pc1N0b3JlKHN0b3JlKSApIHtcblx0XHRcdFx0aWYgKCBzdGF0ZSAhPT0gdW5kZWZpbmVkICYmIGRhdGEgPT09IHVuZGVmaW5lZCApXG5cdFx0XHRcdFx0c3RvcmUuc2V0U3RhdGUoc3RhdGUpO1xuXHRcdFx0XHRlbHNlIGlmICggc3RhdGUgIT09IHVuZGVmaW5lZCApXG5cdFx0XHRcdFx0c3RvcmUuc3RhdGUgPSBzdGF0ZTtcblx0XHRcdFx0XG5cdFx0XHRcdGlmICggZGF0YSAhPT0gdW5kZWZpbmVkIClcblx0XHRcdFx0XHRzdG9yZS5wdXNoKGRhdGEpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCBTY29wZS5pc1Njb3BlKHN0b3JlKSApIHtcblx0XHRcdFx0aWYgKCBzdGF0ZSAhPT0gdW5kZWZpbmVkIClcblx0XHRcdFx0XHRzdG9yZS5zZXRTdGF0ZShzdGF0ZSk7XG5cdFx0XHRcdGlmICggcmVmLnBhdGgubGVuZ3RoID4gMSApXG5cdFx0XHRcdFx0c3RvcmUuX21vdW50KHJlZi5wYXRoLnNsaWNlKDEpLmpvaW4oJy4nKSlcblx0XHRcdH1cblx0XHRcdHRoaXMuX3dhdGNoU3RvcmUocmVmLnN0b3JlSWQpO1xuXHRcdH1cblx0XHRcblx0XHRcblx0XHRyZXR1cm4gXy5fc2NvcGVbcmVmLnN0b3JlSWRdO1xuXHR9XG5cdFxuXHQvKipcblx0ICogUmVnaXN0ZXIgc3RvcmVzIGluIHN0b3Jlc01hcCAmIGxpbmsgdGhlbSBpbiB0aGUgcHJvdG9zXG5cdCAqIEBwYXJhbSBzdG9yZXNNYXBcblx0ICogQHBhcmFtIHN0YXRlXG5cdCAqIEBwYXJhbSBkYXRhXG5cdCAqL1xuXHRyZWdpc3Rlciggc3RvcmVzTWFwLCBzdGF0ZSA9IHt9LCBkYXRhID0ge30gKSB7XG5cdFx0dGhpcy5yZWxpbmsoc3RvcmVzTWFwLCB0aGlzLCBmYWxzZSwgZmFsc2UpO1xuXHRcdE9iamVjdC5rZXlzKHN0b3Jlc01hcCkuZm9yRWFjaChcblx0XHRcdGlkID0+IHtcblx0XHRcdFx0aWYgKCBpZCA9PSBcIiRwYXJlbnRcIiApIHJldHVybjtcblx0XHRcdFx0aWYgKCBzdG9yZXNNYXBbaWRdLnNpbmdsZXRvbiB8fCAoaXMuZm4oc3RvcmVzTWFwW2lkXSkgJiYgKHN0YXRlW2lkXSB8fCBkYXRhW2lkXSkpICkge1xuXHRcdFx0XHRcdHRoaXMuX21vdW50KGlkLCB1bmRlZmluZWQsIHN0YXRlW2lkXSwgZGF0YVtpZF0pXG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZSBpZiAoIHN0YXRlW2lkXSB8fCBkYXRhW2lkXSApIHtcblx0XHRcdFx0XHRpZiAoIGRhdGFbaWRdICkge1xuXHRcdFx0XHRcdFx0aWYgKCBzdGF0ZVtpZF0gKVxuXHRcdFx0XHRcdFx0XHR0aGlzLnN0b3Jlc1tpZF0uc3RhdGUgPSBzdGF0ZVtpZF07XG5cdFx0XHRcdFx0XHR0aGlzLnN0b3Jlc1tpZF0ucHVzaChkYXRhW2lkXSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGVsc2UgaWYgKCBzdGF0ZVtpZF0gKSB7XG5cdFx0XHRcdFx0XHR0aGlzLnN0b3Jlc1tpZF0uc2V0U3RhdGUoc3RhdGVbaWRdKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5fd2F0Y2hTdG9yZShpZCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHQpXG5cdFx0XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBNYXAgc3JjQ3R4IHN0b3JlJ3Mgb24gdGFyZ2V0Q3R4IGhlYWRlcnMgcHJvdG8nc1xuXHQgKiBAcGFyYW0gc3JjQ3R4XG5cdCAqIEBwYXJhbSB0YXJnZXRDdHhcblx0ICogQHBhcmFtIHN0YXRlXG5cdCAqIEBwYXJhbSBkYXRhXG5cdCAqL1xuXHRyZWxpbmsoIHNyY0N0eCwgdGFyZ2V0Q3R4ID0gdGhpcywgZXh0ZXJuYWwsIGZvcmNlICkge1xuXHRcdGxldCBfID0gdGhpcy5fO1xuXHRcdE9iamVjdC5rZXlzKHNyY0N0eClcblx0XHQgICAgICAuZm9yRWFjaChcblx0XHRcdCAgICAgIGlkID0+IHtcblx0XHRcdFx0ICAgICAgbGV0IGhvdFJlbG9hZGluZywgYWN0aW9ucywgYWN0aXZlQWN0aW9ucztcblx0XHRcdFx0XG5cdFx0XHRcdCAgICAgIC8vIHNhbWUgc3RvcmUgZGVmIDogaWdub3JlXG5cdFx0XHRcdCAgICAgIGlmICggIWZvcmNlICYmIHRhcmdldEN0eC5fLl9zY29wZVtpZF0gPT09IHNyY0N0eFtpZF0gfHxcblx0XHRcdFx0XHQgICAgICB0YXJnZXRDdHguXy5fc2NvcGVbaWRdICYmICh0YXJnZXRDdHguXy5fc2NvcGVbaWRdLmNvbnN0cnVjdG9yID09PSBzcmNDdHhbaWRdKSApXG5cdFx0XHRcdFx0ICAgICAgcmV0dXJuO1xuXHRcdFx0XHRcblx0XHRcdFx0ICAgICAgLy8gaG90IHN3aXRjaFxuXHRcdFx0XHQgICAgICBpZiAoICFmb3JjZSAmJiB0YXJnZXRDdHguXy5fc2NvcGVbaWRdICkge1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdCAgICAgIGlmICggIWV4dGVybmFsICYmICFpcy5mbih0YXJnZXRDdHguXy5fc2NvcGVbaWRdKSApIHtcblx0XHRcdFx0XHRcdCAgICAgIGNvbnNvbGUuaW5mbyhcIlJlc2NvcGUgU3RvcmUgOiBcIiwgaWQsIFwiIGFscmVhZHkgZXhpc3QgaW4gdGhpcyBzY29wZSAhICggSG90IHN3aXRjaGluZyB0aGUgc3RvcmUgKSAhISFcIik7XG5cdFx0XHRcdFx0XHQgICAgICBsZXQgdG1wICAgICAgICAgICAgICAgID0gdGFyZ2V0Q3R4Ll8uX3Njb3BlW2lkXTtcblx0XHRcdFx0XHRcdCAgICAgIHRhcmdldEN0eC5fLl9zY29wZVtpZF0gPSBzcmNDdHhbaWRdO1xuXHRcdFx0XHRcdFx0ICAgICAgaG90UmVsb2FkaW5nICAgICAgICAgICA9IHRtcC5uZXh0U3RhdGU7XG5cdFx0XHRcdFx0XHQgICAgICB0bXAuZGVzdHJveSgpO1xuXHRcdFx0XHRcdCAgICAgIH1cblx0XHRcdFx0XHRcblx0XHRcdFx0XHQgICAgICBpZiAoICFleHRlcm5hbCAmJiBpcy5mbih0YXJnZXRDdHguXy5fc2NvcGVbaWRdKSApXG5cdFx0XHRcdFx0XHQgICAgICB0YXJnZXRDdHguXy5fc2NvcGVbaWRdID0gc3JjQ3R4W2lkXTtcblx0XHRcdFx0XHRcblx0XHRcdFx0ICAgICAgfVxuXHRcdFx0XHQgICAgICBlbHNlIGlmICggIWZvcmNlICYmICFleHRlcm5hbCApXG5cdFx0XHRcdFx0ICAgICAgXy5fc2NvcGVbaWRdID0gc3JjQ3R4W2lkXTtcblx0XHRcdFx0XG5cdFx0XHRcdFxuXHRcdFx0XHQgICAgICAvLyBtYXAgdGhlIHN0b3JlIGlkXG5cdFx0XHRcdCAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShcblx0XHRcdFx0XHQgICAgICB0YXJnZXRDdHguXy5zdG9yZXMucHJvdG90eXBlLFxuXHRcdFx0XHRcdCAgICAgIGlkLFxuXHRcdFx0XHRcdCAgICAgIHtcblx0XHRcdFx0XHRcdCAgICAgIGVudW1lcmFibGUgIDogdHJ1ZSxcblx0XHRcdFx0XHRcdCAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcblx0XHRcdFx0XHRcdCAgICAgIGdldCAgICAgICAgIDogKCkgPT4gXy5fc2NvcGVbaWRdXG5cdFx0XHRcdFx0ICAgICAgfVxuXHRcdFx0XHQgICAgICApO1xuXHRcdFx0XHRcblx0XHRcdFx0ICAgICAgYWN0aXZlQWN0aW9ucyA9IHRhcmdldEN0eC5fLmFjdGlvbnMucHJvdG90eXBlO1xuXHRcdFx0XHQgICAgICAvLyBub3QgbWFwcGluZyBoaWVyYXJjaGljIHNjb3Blc1xuXHRcdFx0XHQgICAgICBpZiAoIGlkICE9PSBcIiRwYXJlbnRcIiApIHtcblx0XHRcdFx0XHQgICAgICAvLyBtYXAgc3RhdGUgJiBkYXRhXG5cdFx0XHRcdFx0ICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFxuXHRcdFx0XHRcdFx0ICAgICAgdGFyZ2V0Q3R4Ll8uc3RhdGUucHJvdG90eXBlLFxuXHRcdFx0XHRcdFx0ICAgICAgaWQsXG5cdFx0XHRcdFx0XHQgICAgICB7XG5cdFx0XHRcdFx0XHRcdCAgICAgIGVudW1lcmFibGUgIDogdHJ1ZSxcblx0XHRcdFx0XHRcdFx0ICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuXHRcdFx0XHRcdFx0XHQgICAgICBnZXQgICAgICAgICA6ICgpID0+IChfLl9zY29wZVtpZF0gJiYgXy5fc2NvcGVbaWRdLnN0YXRlKSxcblx0XHRcdFx0XHRcdFx0ICAgICAgc2V0ICAgICAgICAgOiAoIHYgKSA9PiAodGhpcy5fbW91bnQoaWQsIHVuZGVmaW5lZCwgdikpXG5cdFx0XHRcdFx0XHQgICAgICB9XG5cdFx0XHRcdFx0ICAgICAgKTtcblx0XHRcdFx0XHQgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoXG5cdFx0XHRcdFx0XHQgICAgICB0YXJnZXRDdHguXy5kYXRhLnByb3RvdHlwZSxcblx0XHRcdFx0XHRcdCAgICAgIGlkLFxuXHRcdFx0XHRcdFx0ICAgICAge1xuXHRcdFx0XHRcdFx0XHQgICAgICBlbnVtZXJhYmxlICA6IHRydWUsXG5cdFx0XHRcdFx0XHRcdCAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcblx0XHRcdFx0XHRcdFx0ICAgICAgZ2V0ICAgICAgICAgOiAoKSA9PiAoXy5fc2NvcGVbaWRdICYmIF8uX3Njb3BlW2lkXS5kYXRhKSxcblx0XHRcdFx0XHRcdFx0ICAgICAgc2V0ICAgICAgICAgOiAoIHYgKSA9PiAodGhpcy5fbW91bnQoaWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB2KSlcblx0XHRcdFx0XHRcdCAgICAgIH1cblx0XHRcdFx0XHQgICAgICApO1xuXHRcdFx0XHRcdCAgICAgIC8vIGFjdGlvbiBtYXBwaW5nXG5cdFx0XHRcdFx0ICAgICAgYWN0aW9ucyA9IHNyY0N0eFtpZF0gaW5zdGFuY2VvZiBTY29wZS5TdG9yZVxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICA/IHNyY0N0eFtpZF0uY29uc3RydWN0b3IuYWN0aW9uc1xuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICA6IHNyY0N0eFtpZF0uYWN0aW9ucztcblx0XHRcdFx0XHRcblx0XHRcdFx0XHQgICAgICBpZiAoIFNjb3BlLmlzU2NvcGVDbGFzcyhfLl9zY29wZVtpZF0pIClcblx0XHRcdFx0XHRcdCAgICAgIHRoaXMuX21vdW50KGlkKTtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHQgICAgICBpZiAoIFNjb3BlLmlzU2NvcGUoXy5fc2NvcGVbaWRdKSApIHsvLyBtYXAgaGllcmFyY2hpYyBzY29wZXNcblx0XHRcdFx0XHRcdCAgICAgIGFjdGl2ZUFjdGlvbnNbaWRdID0gXy5fc2NvcGVbaWRdLmFjdGlvbnM7XG5cdFx0XHRcdFx0ICAgICAgfVxuXHRcdFx0XHRcdCAgICAgIGVsc2UgaWYgKCAhU2NvcGUuaXNTdG9yZShfLl9zY29wZVtpZF0pICYmICFTY29wZS5pc1N0b3JlQ2xhc3MoXy5fc2NvcGVbaWRdKSApXG5cdFx0XHRcdFx0XHQgICAgICByZXR1cm47XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0ICAgICAgYWN0aW9ucyAmJlxuXHRcdFx0XHRcdCAgICAgIE9iamVjdC5rZXlzKGFjdGlvbnMpXG5cdFx0XHRcdFx0ICAgICAgICAgICAgLmZvckVhY2goXG5cdFx0XHRcdFx0XHQgICAgICAgICAgICAoIGFjdCApID0+IHtcblx0XHRcdFx0XHRcdFx0ICAgICAgICAgICAgaWYgKCBhY3RpdmVBY3Rpb25zLmhhc093blByb3BlcnR5KGFjdCkgKVxuXHRcdFx0XHRcdFx0XHRcdCAgICAgICAgICAgIGFjdGl2ZUFjdGlvbnNbYWN0XS5fX3RhcmdldFN0b3JlcysrO1xuXHRcdFx0XHRcdFx0XHQgICAgICAgICAgICBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHQgICAgICAgICAgICBhY3RpdmVBY3Rpb25zW2FjdF0gICAgICAgICAgICAgICAgPSB0aGlzLmRpc3BhdGNoLmJpbmQodGhpcywgYWN0KTtcblx0XHRcdFx0XHRcdFx0XHQgICAgICAgICAgICBhY3RpdmVBY3Rpb25zW2FjdF0uX190YXJnZXRTdG9yZXMgPSAxO1xuXHRcdFx0XHRcdFx0XHQgICAgICAgICAgICB9XG5cdFx0XHRcdFx0XHQgICAgICAgICAgICB9XG5cdFx0XHRcdFx0ICAgICAgICAgICAgKTtcblx0XHRcdFx0ICAgICAgfVxuXHRcdFx0XHQgICAgICBlbHNlIHtcblx0XHRcdFx0XHQgICAgICBhY3RpdmVBY3Rpb25zW2lkXSA9IHNyY0N0eFtpZF0uYWN0aW9ucztcblx0XHRcdFx0ICAgICAgfVxuXHRcdFx0XHRcblx0XHRcdFx0XG5cdFx0XHRcdCAgICAgIC8vIHJlbW91bnQgdGhlIHN0b3JlIGlmIGl0IHdhcyBob3QgcmVsb2FkZWRcblx0XHRcdFx0ICAgICAgaWYgKCBob3RSZWxvYWRpbmcgKVxuXHRcdFx0XHRcdCAgICAgIHRoaXMuX21vdW50KGlkLCBudWxsLCBob3RSZWxvYWRpbmcpO1xuXHRcdFx0ICAgICAgfVxuXHRcdCAgICAgIClcblx0fVxuXHRcblx0LyoqXG5cdCAqIE1ha2UgdGhpcyBzY29wZSB3YXRjaGluZyB0aGUgbG9jYWwgc3RvcmUgJ2lkJ1xuXHQgKiBAcGFyYW0gaWRcblx0ICogQHJldHVybnMge2Jvb2xlYW59XG5cdCAqIEBwcml2YXRlXG5cdCAqL1xuXHRfd2F0Y2hTdG9yZSggaWQgKSB7XG5cdFx0bGV0IF8gPSB0aGlzLl87XG5cdFx0aWYgKCAhXy5fbGlzdGVuaW5nW2lkXSAmJiAhaXMuZm4oXy5fc2NvcGVbaWRdKSApIHtcblx0XHRcdCFfLl9zY29wZVtpZF0uX2F1dG9EZXN0cm95ICYmIF8uX3Njb3BlW2lkXS5yZXRhaW4oXCJzY29wZWRcIik7XG5cdFx0XHQhXy5fc2NvcGVbaWRdLmlzU3RhYmxlKCkgJiYgdGhpcy53YWl0KGlkKTtcblx0XHRcdF8uX3Njb3BlW2lkXS5vbihcblx0XHRcdFx0Xy5fbGlzdGVuaW5nW2lkXSA9IHtcblx0XHRcdFx0XHQnZGVzdHJveScgOiBzID0+IHtcblx0XHRcdFx0XHRcdGRlbGV0ZSBfLl9saXN0ZW5pbmdbaWRdO1xuXHRcdFx0XHRcdFx0Xy5fc2NvcGVbaWRdID0gXy5fc2NvcGVbaWRdLmNvbnN0cnVjdG9yO1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0J3VwZGF0ZScgIDogcyA9PiB0aGlzLnByb3BhZygpLFxuXHRcdFx0XHRcdCdzdGFibGUnICA6IHMgPT4gdGhpcy5yZWxlYXNlKGlkKSxcblx0XHRcdFx0XHQndW5zdGFibGUnOiBzID0+IHRoaXMud2FpdChpZClcblx0XHRcdFx0fSk7XG5cdFx0fVxuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cdFxuXHQvKipcblx0ICogTWl4IHRhcmdldEN0eCBvbiB0aGlzIHNjb3BlXG5cdCAqIE1peGVkIHNjb3BlIHBhcmVudHMgYXJlIE5PVCBtYXBwZWRcblx0ICogQHBhcmFtIHRhcmdldEN0eFxuXHQgKi9cblx0bWl4aW4oIHRhcmdldEN0eCApIHtcblx0XHRsZXQgcGFyZW50ID0gdGhpcy5wYXJlbnQsXG5cdFx0ICAgIGxpc3RzLFxuXHRcdCAgICBfICAgICAgPSB0aGlzLl87XG5cdFx0XG5cdFx0Xy5fbWl4ZWQucHVzaCh0YXJnZXRDdHgpO1xuXHRcdFxuXHRcdHRhcmdldEN0eC5yZXRhaW4oXCJtaXhlZFRvXCIpO1xuXHRcdFxuXHRcdGlmICggIXRhcmdldEN0eC5fc3RhYmxlIClcblx0XHRcdHRoaXMud2FpdCh0YXJnZXRDdHguX2lkKTtcblx0XHRcblx0XHRfLl9taXhlZExpc3QucHVzaChsaXN0cyA9IHtcblx0XHRcdCdzdGFibGUnICA6IHMgPT4gdGhpcy5yZWxlYXNlKHRhcmdldEN0eC5faWQpLFxuXHRcdFx0J3Vuc3RhYmxlJzogcyA9PiB0aGlzLndhaXQodGFyZ2V0Q3R4Ll9pZCksXG5cdFx0XHQndXBkYXRlJyAgOiBzID0+IHRoaXMuX3Byb3BhZygpXG5cdFx0fSk7XG5cdFx0XG5cdFx0dGFyZ2V0Q3R4Lm9uKGxpc3RzKTtcblx0XHRcblx0XHQvLyByZXNldCBwcm90b3Ncblx0XHQvLyBwdXNoIG5ldyBwcm90byB3aXRoIHBhcmVudFxuXHRcdF9fcHJvdG9fX3B1c2godGhpcywgJ2FjdGlvbnMnLCBwYXJlbnQpO1xuXHRcdF9fcHJvdG9fX3B1c2godGhpcywgJ3N0b3JlcycsIHBhcmVudCk7XG5cdFx0X19wcm90b19fcHVzaCh0aGlzLCAnc3RhdGUnLCBwYXJlbnQpO1xuXHRcdF9fcHJvdG9fX3B1c2godGhpcywgJ2RhdGEnLCBwYXJlbnQpO1xuXHRcdFxuXHRcdC8vIGJpbmQgbG9jYWwgYWNjZXNzb3JzIGluIHRoZSBuZXcgcHJvdG9cblx0XHR0aGlzLnJlbGluayhfLl9zY29wZSwgdGhpcywgZmFsc2UsIHRydWUpO1xuXHRcdFxuXHRcdF8uX21peGVkLmZvckVhY2goXG5cdFx0XHRjdHggPT4ge1xuXHRcdFx0XHQvLyBwdXNoIHByb3Rvc1xuXHRcdFx0XHRfX3Byb3RvX19wdXNoKHRoaXMsICdhY3Rpb25zJyk7XG5cdFx0XHRcdF9fcHJvdG9fX3B1c2godGhpcywgJ3N0b3JlcycpO1xuXHRcdFx0XHRfX3Byb3RvX19wdXNoKHRoaXMsICdzdGF0ZScpO1xuXHRcdFx0XHRfX3Byb3RvX19wdXNoKHRoaXMsICdkYXRhJyk7XG5cdFx0XHRcdHRoaXMuc3RvcmVzLl9fb3JpZ2luID0gXCJtaXhlZCBcIiArIGN0eC5faWQ7XG5cdFx0XHRcdC8vIHdyaXRlIG1peGVkIGFjY2Vzc29yc1xuXHRcdFx0XHRjdHgucmVsaW5rKGN0eC5fLl9zY29wZSwgdGhpcywgdHJ1ZSwgdHJ1ZSlcblx0XHRcdH1cblx0XHQpXG5cdH1cblx0XG5cdC8qKlxuXHQgKiBCaW5kIHN0b3JlcyBmcm9tIHRoaXMgc2NvcGUsIGhpcyBwYXJlbnRzIG9yIG1peGVkIHNjb3BlcyB0byBvYmpcblx0ICpcblx0ICogQHBhcmFtIHRhcmdldCB7UmVhY3QuQ29tcG9uZW50fFN0b3JlfGZ1bmN0aW9ufVxuXHQgKiBAcGFyYW0ga2V5IHtzdHJpbmd9IHN0b3JlcyBrZXlzIHRvIGJpbmQgdXBkYXRlc1xuXHQgKiBAcGFyYW0gYXNcblx0ICogQHBhcmFtIHNldEluaXRpYWwge2Jvb2xlYW59IGZhbHNlIHRvIG5vdCBwcm9wYWcgaW5pdGlhbCB2YWx1ZSAoZGVmYXVsdCA6IHRydWUpXG5cdCAqL1xuXHRiaW5kKCB0YXJnZXQsIGtleSwgYXMsIHNldEluaXRpYWwgPSB0cnVlLCByZXZNYXAgPSB7fSApIHtcblx0XHRsZXQgbGFzdFJldnMsIGRhdGEsIHJlZktleXM7XG5cdFx0aWYgKCBrZXkgJiYgIWlzLmFycmF5KGtleSkgKVxuXHRcdFx0a2V5ID0gW2tleV07XG5cdFx0XG5cdFx0aWYgKCBhcyA9PT0gZmFsc2UgfHwgYXMgPT09IHRydWUgKSB7XG5cdFx0XHRzZXRJbml0aWFsID0gYXM7XG5cdFx0XHRhcyAgICAgICAgID0gbnVsbDtcblx0XHR9XG5cdFx0XG5cdFx0cmVmS2V5cyA9IGtleVxuXHRcdFx0Lm1hcChpZCA9PiAoaXMuc3RyaW5nKGlkKSA/IGlkIDogaWQubmFtZSkpXG5cdFx0XHQubWFwKGlkID0+ICh0aGlzLnBhcnNlUmVmKGlkKSkpO1xuXHRcdFxuXHRcdFxuXHRcdHRoaXMuXy5mb2xsb3dlcnMucHVzaChcblx0XHRcdFtcblx0XHRcdFx0dGFyZ2V0LFxuXHRcdFx0XHRrZXksXG5cdFx0XHRcdGFzIHx8IHVuZGVmaW5lZCxcblx0XHRcdFx0bGFzdFJldnMgPSByZWZLZXlzLnJlZHVjZSgoIHJldnMsIHJlZiApID0+IHtcblx0XHRcdFx0XHRyZXZzW3JlZi5zdG9yZUlkXSA9IHJldnNbcmVmLnN0b3JlSWRdIHx8IHtcblx0XHRcdFx0XHRcdHJldiA6IDAsXG5cdFx0XHRcdFx0XHRyZWZzOiBbXVxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0cmV2c1tyZWYuc3RvcmVJZF0ucmVmcy5wdXNoKHJlZik7XG5cdFx0XHRcdFx0cmV0dXJuIHJldnM7XG5cdFx0XHRcdH0sIHJldk1hcClcblx0XHRcdF0pO1xuXHRcdFxuXHRcdHRoaXMubW91bnQoa2V5KTtcblx0XHR0aGlzLnJldGFpblN0b3JlcyhPYmplY3Qua2V5cyhsYXN0UmV2cyksICdsaXN0ZW5lcnMnKTtcblx0XHRcblx0XHRpZiAoIHNldEluaXRpYWwgJiYgdGhpcy5fc3RhYmxlICkge1xuXHRcdFx0ZGF0YSA9IHRoaXMuZ2V0VXBkYXRlcyhsYXN0UmV2cyk7XG5cdFx0XHRpZiAoICFkYXRhICkgcmV0dXJuIHRoaXM7XG5cdFx0XHRpZiAoIHR5cGVvZiB0YXJnZXQgIT0gXCJmdW5jdGlvblwiICkge1xuXHRcdFx0XHRpZiAoIGFzICkgdGFyZ2V0LnNldFN0YXRlKHsgW2FzXTogZGF0YSB9KTtcblx0XHRcdFx0ZWxzZSB0YXJnZXQuc2V0U3RhdGUoZGF0YSk7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0dGFyZ2V0KGRhdGEpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXHRcblx0LyoqXG5cdCAqIFVuIGJpbmQgdGhpcyBzY29wZSBvZmYgdGhlIGdpdmVuIGNvbXBvbmVudC1rZXlzXG5cdCAqIEBwYXJhbSB0YXJnZXRcblx0ICogQHBhcmFtIGtleVxuXHQgKiBAcmV0dXJucyB7QXJyYXkuPCo+fVxuXHQgKi9cblx0dW5CaW5kKCB0YXJnZXQsIGtleSwgYXMgKSB7XG5cdFx0bGV0IGZvbGxvd2VycyA9IHRoaXMuXy5mb2xsb3dlcnMsXG5cdFx0ICAgIGkgICAgICAgICA9IGZvbGxvd2VycyAmJiBmb2xsb3dlcnMubGVuZ3RoO1xuXHRcdHdoaWxlICggZm9sbG93ZXJzICYmIGktLSApXG5cdFx0XHRpZiAoIGZvbGxvd2Vyc1tpXVswXSA9PT0gdGFyZ2V0ICYmXG5cdFx0XHRcdCgnJyArIGZvbGxvd2Vyc1tpXVsxXSkgPT0gKCcnICsga2V5KSAmJlxuXHRcdFx0XHRmb2xsb3dlcnNbaV1bMl0gPT0gYXMgKSB7XG5cdFx0XHRcdHRoaXMuZGlzcG9zZVN0b3JlcyhPYmplY3Qua2V5cyhmb2xsb3dlcnNbaV1bM10pLCAnbGlzdGVuZXJzJyk7XG5cdFx0XHRcdHJldHVybiBmb2xsb3dlcnMuc3BsaWNlKGksIDEpO1xuXHRcdFx0fVxuXHR9XG5cdFxuXHQvKipcblx0ICogTW91bnQgdGhlIHN0b3JlcyBpbiBzdG9yZUlkTGlzdCBmcm9tIHRoaXMgc2NvcGUsIGl0cyBwYXJlbnRzIGFuZCBtaXhlZCBzY29wZVxuXHQgKiBCaW5kIHRoZW0gdG8gJ3RvJ1xuXHQgKiBIb29rICd0bycgc28gaXQgd2lsbCBhdXRvIHVuYmluZCBvbiAnZGVzdHJveScgb3IgJ2NvbXBvbmVudFdpbGxVbm1vdW50J1xuXHQgKiBAcGFyYW0gdGFyZ2V0XG5cdCAqIEBwYXJhbSBzdG9yZUlkTGlzdFxuXHQgKiBAcGFyYW0gYmluZFxuXHQgKiBAcmV0dXJucyB7T2JqZWN0fSBJbml0aWFsIG91dHB1dHMgb2YgdGhlIHN0b3JlcyBpbiAnc3RvcmVzTGlzdCdcblx0ICovXG5cdG1hcCggdGFyZ2V0LCBzdG9yZUlkTGlzdCwgYmluZCA9IHRydWUsIHJldk1hcCApIHtcblx0XHRsZXQgU3RvcmUgICA9IHRoaXMuY29uc3RydWN0b3IuU3RvcmU7XG5cdFx0c3RvcmVJZExpc3QgPSBpcy5hcnJheShzdG9yZUlkTGlzdCkgPyBzdG9yZUlkTGlzdCA6IFtzdG9yZUlkTGlzdF07XG5cdFx0bGV0IHJlZkxpc3QgPSBzdG9yZUlkTGlzdC5tYXAodGhpcy5wYXJzZVJlZik7XG5cdFx0dGhpcy5tb3VudChzdG9yZUlkTGlzdCk7XG5cdFx0aWYgKCBiaW5kICYmIHRhcmdldCBpbnN0YW5jZW9mIFN0b3JlICkge1xuXHRcdFx0U3RvcmUubWFwKHRhcmdldCwgc3RvcmVJZExpc3QsIHRoaXMsIHRoaXMsIGZhbHNlKVxuXHRcdH1cblx0XHRlbHNlIGlmICggYmluZCApIHtcblx0XHRcdHRoaXMuYmluZCh0YXJnZXQsIHN0b3JlSWRMaXN0LCB1bmRlZmluZWQsIGZhbHNlKTtcblx0XHRcdFxuXHRcdFx0bGV0IG1peGVkQ1dVbm1vdW50LFxuXHRcdFx0ICAgIHVuTW91bnRLZXkgPSB0YXJnZXQuaXNSZWFjdENvbXBvbmVudCA/IFwiY29tcG9uZW50V2lsbFVubW91bnRcIiA6IFwiZGVzdHJveVwiO1xuXHRcdFx0XG5cdFx0XHRpZiAoIHRhcmdldC5oYXNPd25Qcm9wZXJ0eSh1bk1vdW50S2V5KSApIHtcblx0XHRcdFx0bWl4ZWRDV1VubW91bnQgPSB0YXJnZXRbdW5Nb3VudEtleV07XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdHRhcmdldFt1bk1vdW50S2V5XSA9ICggLi4uYXJneiApID0+IHtcblx0XHRcdFx0ZGVsZXRlIHRhcmdldFt1bk1vdW50S2V5XTtcblx0XHRcdFx0aWYgKCBtaXhlZENXVW5tb3VudCApXG5cdFx0XHRcdFx0dGFyZ2V0W3VuTW91bnRLZXldID0gbWl4ZWRDV1VubW91bnQ7XG5cdFx0XHRcdFxuXHRcdFx0XHR0aGlzLnVuQmluZCh0YXJnZXQsIHN0b3JlSWRMaXN0KTtcblx0XHRcdFx0cmV0dXJuIHRhcmdldFt1bk1vdW50S2V5XSAmJiB0YXJnZXRbdW5Nb3VudEtleV0oLi4uYXJneik7XG5cdFx0XHR9XG5cdFx0XHRcblx0XHR9XG5cdFx0cmV0dXJuIHJldk1hcCAmJiB0aGlzLmdldFVwZGF0ZXMocmV2TWFwKVxuXHRcdFx0fHwgcmVmTGlzdC5yZWR1Y2UoKCBkYXRhLCByZWYgKSA9PiB7XG5cdFx0XHRcdHdhbGtuU2V0KGRhdGEsIHJlZi5hbGlhcyB8fCByZWYucGF0aCwgdGhpcy5yZXRyaWV2ZShyZWYucGF0aCkpXG5cdFx0XHRcdHJldHVybiBkYXRhO1xuXHRcdFx0fSwge30pO1xuXHR9XG5cdFxuXHQvKipcblx0ICogR2V0IGN1cnJlbnQgZGF0YSB2YWx1ZSBmcm9tIGpzb24gcGF0aFxuXHQgKiBAcGFyYW0gcGF0aFxuXHQgKiBAcmV0dXJucyB7c3RyaW5nfCp9XG5cdCAqL1xuXHRyZXRyaWV2ZSggcGF0aCA9IFwiXCIgKSB7XG5cdFx0cGF0aCA9IGlzLnN0cmluZyhwYXRoKSA/IHBhdGguc3BsaXQoJy4nKSA6IHBhdGg7XG5cdFx0XG5cdFx0XG5cdFx0cmV0dXJuIHBhdGggJiZcblx0XHRcdHRoaXMuc3RvcmVzW3BhdGhbMF1dICYmXG5cdFx0XHR0aGlzLnN0b3Jlc1twYXRoWzBdXS5yZXRyaWV2ZSAmJlxuXHRcdFx0dGhpcy5zdG9yZXNbcGF0aFswXV0ucmV0cmlldmUocGF0aC5zbGljZSgxKSk7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBSZXN0b3JlIGFsbCBub2RlcyBpbiBhIGpzb25QYXRoXG5cdCAqIEBwYXJhbSBwYXRoXG5cdCAqIEByZXR1cm5zIHtzdHJpbmd8Kn1cblx0ICovXG5cdHJlc3RvcmVSZWZQYXRoKCBwYXRoID0gXCJcIiApIHtcblx0XHRwYXRoID0gaXMuc3RyaW5nKHBhdGgpID8gcGF0aC5zcGxpdCgnLicpIDogcGF0aDtcblx0XHRcblx0XHRsZXQgb2JqLCBpID0gMCwgY1Njb3BlID0gdGhpcztcblx0XHRcblx0XHR3aGlsZSAoIGkgPCBwYXRoLmxlbmd0aCApIHtcblx0XHRcdG9iaiA9IGNTY29wZS5zdG9yZXNbcGF0aFtpXV07XG5cdFx0XHRpZiAoIFNjb3BlLmlzU2NvcGVDbGFzcyhvYmopXG5cdFx0XHRcdHx8XG5cdFx0XHRcdFNjb3BlLmlzU3RvcmVDbGFzcyhvYmopICkge1xuXHRcdFx0XHRjU2NvcGUubW91bnQocGF0aFswXSk7XG5cdFx0XHRcdG9iaiA9IGNTY29wZS5zdG9yZXNbcGF0aFtpXV07XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdGlmICggU2NvcGUuaXNTY29wZShvYmopICkge1xuXHRcdFx0XHRjU2NvcGUgPSBvYmo7XG5cdFx0XHRcdGkrKztcblx0XHRcdH1cblx0XHRcdGVsc2UgaWYgKCBTY29wZS5pc1N0b3JlKG9iaikgKSB7XG5cdFx0XHRcdG9iai5yZXN0b3JlKCk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRcblx0fVxuXHRcblx0LyoqXG5cdCAqIEdldCB0YXJnZXQgc3RvcmUgZnJvbSBqc29uIHBhdGhcblx0ICogQHBhcmFtIHBhdGhcblx0ICogQHJldHVybnMge3N0cmluZ3wqfVxuXHQgKi9cblx0cmV0cmlldmVTdG9yZSggcGF0aCA9IFwiXCIgKSB7XG5cdFx0cGF0aCA9IGlzLnN0cmluZyhwYXRoKSA/IHBhdGguc3BsaXQoJy4nKSA6IHBhdGg7XG5cdFx0cmV0dXJuIHBhdGhcblx0XHRcdCYmIHBhdGgubGVuZ3RoXG5cdFx0XHQmJiAoXG5cdFx0XHRcdHBhdGgubGVuZ3RoICE9IDEgJiYgdGhpcy5zdG9yZXNbcGF0aFswXV0ucmV0cmlldmVTdG9yZVxuXHRcdFx0XHQ/IHRoaXMuc3RvcmVzW3BhdGhbMF1dLnJldHJpZXZlU3RvcmUocGF0aC5zbGljZSgxKSlcblx0XHRcdFx0OiBwYXRoLmxlbmd0aCA9PSAxICYmIHRoaXMuc3RvcmVzW3BhdGhbMF1dXG5cdFx0XHQpO1xuXHR9XG5cdFxuXHQvKipcblx0ICogR2V0IG9yIHVwZGF0ZSBzdG9yZXMgcmV2aXNpb25zIGluICdzdG9yZXNSZXZNYXAnXG5cdCAqIEBwYXJhbSBzdG9yZXNSZXZNYXBcblx0ICogQHBhcmFtIGxvY2FsXG5cdCAqIEByZXR1cm5zIHt7fX1cblx0ICovXG5cdGdldFN0b3Jlc1JldnMoIHN0b3Jlc1Jldk1hcCA9IHt9LCBsb2NhbCApIHtcblx0XHRsZXQgY3R4ID0gdGhpcy5fLl9zY29wZTtcblx0XHRpZiAoICFzdG9yZXNSZXZNYXAgKSB7XG5cdFx0XHRzdG9yZXNSZXZNYXAgPSB7fTtcblx0XHR9XG5cdFx0T2JqZWN0LmtleXMoY3R4KS5mb3JFYWNoKFxuXHRcdFx0aWQgPT4ge1xuXHRcdFx0XHRpZiAoIGlkID09IFwiJHBhcmVudFwiICkgcmV0dXJuO1xuXHRcdFx0XHRpZiAoICFpcy5mbihjdHhbaWRdKVxuXHRcdFx0XHQpIHtcblx0XHRcdFx0XHRzdG9yZXNSZXZNYXBbaWRdID0gY3R4W2lkXS5fcmV2O1xuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2UgaWYgKCAhc3RvcmVzUmV2TWFwLmhhc093blByb3BlcnR5KGlkKSApXG5cdFx0XHRcdFx0c3RvcmVzUmV2TWFwW2lkXSA9IGZhbHNlXG5cdFx0XHR9XG5cdFx0KTtcblx0XHRpZiAoICFsb2NhbCApIHtcblx0XHRcdHRoaXMuXy5fbWl4ZWQucmVkdWNlKCggdXBkYXRlZCwgY3R4ICkgPT4gKGN0eC5nZXRTdG9yZXNSZXZzKHN0b3Jlc1Jldk1hcCksIHN0b3Jlc1Jldk1hcCksIHN0b3Jlc1Jldk1hcCk7XG5cdFx0XHR0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC5nZXRTdG9yZXNSZXZzKHN0b3Jlc1Jldk1hcCk7XG5cdFx0fVxuXHRcdHJldHVybiBzdG9yZXNSZXZNYXA7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBSZWN1cnNpdmVseSBnZXQgYWxsIHN0b3JlcyByZXZzXG5cdCAqIEBwYXJhbSBjaGlsZHNcblx0ICogQHJldHVybnMge0FycmF5fVxuXHQgKiBAcHJpdmF0ZVxuXHQgKi9cblx0X2dldFJldk1hcCggc3RvcmVzUmV2TWFwID0ge30gKSB7XG5cdFx0bGV0IGN0eCA9IHRoaXMuXy5fc2NvcGU7XG5cdFx0T2JqZWN0LmtleXMoY3R4KS5mb3JFYWNoKFxuXHRcdFx0aWQgPT4ge1xuXHRcdFx0XHRpZiAoIGlkID09IFwiJHBhcmVudFwiIHx8IHN0b3Jlc1Jldk1hcFtpZF0gKSByZXR1cm47XG5cdFx0XHRcdHN0b3Jlc1Jldk1hcFtpZF0gPSB7IHJldjogY3R4W2lkXS5fcmV2LCByZWZzOiBbXSB9O1xuXHRcdFx0XHRcblx0XHRcdH0pO1xuXHRcdHRoaXMuXy5fbWl4ZWQucmVkdWNlUmlnaHQoXG5cdFx0XHQoIHN0b3Jlc1Jldk1hcCwgY3R4ICkgPT4gKGN0eC5fZ2V0UmV2TWFwKHN0b3Jlc1Jldk1hcCkpLCBzdG9yZXNSZXZNYXApO1xuXHRcdHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50Ll9nZXRSZXZNYXAoc3RvcmVzUmV2TWFwKTtcblx0XHRyZXR1cm4gc3RvcmVzUmV2TWFwO1xuXHR9XG5cdFxuXHQvKipcblx0ICogR2V0IHVwZGF0ZWQgb3V0cHV0IGJhc2luZyBzdG9yZXNSZXZNYXAncyByZXZpc2lvbnMuXG5cdCAqIElmIGEgc3RvcmUgaW4gJ3N0b3Jlc1Jldk1hcCcgd2FzIHVwZGF0ZWQ7IGFkZCBpdCB0byAnb3V0cHV0JyAmIHVwZGF0ZSBzdG9yZXNSZXZNYXBcblx0ICogQHBhcmFtIHN0b3Jlc1Jldk1hcFxuXHQgKiBAcGFyYW0gb3V0cHV0XG5cdCAqIEBwYXJhbSB1cGRhdGVkXG5cdCAqIEByZXR1cm5zIHsqfHt9fVxuXHQgKi9cblx0Z2V0UmVmc1VwZGF0ZXMoIHJlZnMsIHJldk1hcCwgb3V0cHV0ICkge1xuXHRcdHJldk1hcCA9IHJldk1hcCB8fCByZWZzXG5cdFx0XHQubWFwKGlkID0+IChpcy5zdHJpbmcoaWQpID8gaWQgOiBpZC5uYW1lKSlcblx0XHRcdC5tYXAoaWQgPT4gKHRoaXMucGFyc2VSZWYoaWQpKSlcblx0XHRcdC5yZWR1Y2UoKCByZXZzLCByZWYgKSA9PiB7XG5cdFx0XHRcdHJldnNbcmVmLnN0b3JlSWRdID0gcmV2c1tyZWYuc3RvcmVJZF0gfHwge1xuXHRcdFx0XHRcdHJldiA6IDAsXG5cdFx0XHRcdFx0cmVmczogW11cblx0XHRcdFx0fTtcblx0XHRcdFx0cmV2c1tyZWYuc3RvcmVJZF0ucmVmcy5wdXNoKHJlZik7XG5cdFx0XHRcdHJldHVybiByZXZzO1xuXHRcdFx0fSwge30pO1xuXHRcdFxuXHRcdHJldHVybiB0aGlzLmdldFVwZGF0ZXMocmV2TWFwLCBvdXRwdXQpXG5cdH1cblx0XG5cdC8qKlxuXHQgKiBHZXQgb3IgdXBkYXRlIG91dHB1dCBiYXNpbmcgc3RvcmVzUmV2TWFwJ3MgcmV2aXNpb25zLlxuXHQgKiBJZiBhIHN0b3JlIGluICdzdG9yZXNSZXZNYXAnIHdhcyB1cGRhdGVkOyBhZGQgaXQgdG8gJ291dHB1dCcgJiB1cGRhdGUgc3RvcmVzUmV2TWFwXG5cdCAqIEBwYXJhbSBzdG9yZXNSZXZNYXBcblx0ICogQHBhcmFtIG91dHB1dFxuXHQgKiBAcGFyYW0gdXBkYXRlZFxuXHQgKiBAcmV0dXJucyB7Knx7fX1cblx0ICovXG5cdGdldFVwZGF0ZXMoIHN0b3Jlc1Jldk1hcCwgb3V0cHV0LCB1cGRhdGVkICkge1xuXHRcdG91dHB1dCAgICAgICA9IG91dHB1dCB8fCB7fTtcblx0XHRzdG9yZXNSZXZNYXAgPSBzdG9yZXNSZXZNYXAgfHwgdGhpcy5fZ2V0UmV2TWFwKCk7XG5cdFx0T2JqZWN0LmtleXMoc3RvcmVzUmV2TWFwKS5mb3JFYWNoKFxuXHRcdFx0aWQgPT4ge1xuXHRcdFx0XHRsZXQgc3RvcmUgICAgICAgID0gdGhpcy5zdG9yZXNbaWRdO1xuXHRcdFx0XHRzdG9yZXNSZXZNYXBbaWRdID0gc3RvcmVzUmV2TWFwW2lkXSB8fCB7IHJldjogMCwgcmVmczogW10gfTtcblx0XHRcdFx0XG5cdFx0XHRcdGlmICggc3RvcmUgJiYgaXMuZm4oc3RvcmUpICkge1xuXHRcdFx0XHRcdHVwZGF0ZWQgICAgPSB0cnVlO1xuXHRcdFx0XHRcdG91dHB1dFtpZF0gPSB1bmRlZmluZWQ7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZSBpZiAoIHN0b3JlICYmIHN0b3JlLl9yZXYgPiBzdG9yZXNSZXZNYXBbaWRdLnJldiApIHtcblx0XHRcdFx0XHRzdG9yZXNSZXZNYXBbaWRdLnJldiA9IHN0b3JlLl9yZXY7XG5cdFx0XHRcdFx0dXBkYXRlZCAgICAgICAgICAgICAgPSB0cnVlO1xuXHRcdFx0XHRcdHN0b3Jlc1Jldk1hcFtpZF0ucmVmcy5mb3JFYWNoKFxuXHRcdFx0XHRcdFx0cmVmID0+IHtcblx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRcdG91dHB1dFtyZWYuYWxpYXNdID0gdGhpcy5yZXRyaWV2ZShyZWYucGF0aClcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHQpXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHQpXG5cdFx0cmV0dXJuIHVwZGF0ZWQgJiYgb3V0cHV0O1xuXHR9XG5cdFxuXHQvKipcblx0ICogUmVjdXJzaXZlbHkgZ2V0IGFsbCBjaGlsZCBzY29wZXNcblx0ICogQHBhcmFtIGNoaWxkc1xuXHQgKiBAcmV0dXJucyB7QXJyYXl9XG5cdCAqIEBwcml2YXRlXG5cdCAqL1xuXHRfZ2V0QWxsQ2hpbGRzKCBjaGlsZHMgPSBbXSApIHtcblx0XHRjaGlsZHMucHVzaCguLi50aGlzLl8uY2hpbGRTY29wZXMpO1xuXHRcdHRoaXMuXy5jaGlsZFNjb3Blcy5mb3JFYWNoKFxuXHRcdFx0Y3R4ID0+IHtcblx0XHRcdFx0Y3R4Ll9nZXRBbGxDaGlsZHMoY2hpbGRzKTtcblx0XHRcdH1cblx0XHQpO1xuXHRcdHJldHVybiBjaGlsZHM7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBTZXJpYWxpemUgYWxsIGFjdGl2ZSBzdG9yZXMgc3RhdGUgJiBkYXRhIGluIGV2ZXJ5IGNoaWxkcyAmIG1peGVkIHNjb3Blc1xuXHQgKlxuXHQgKiBTY29wZXMgd2l0aG91dCBrZXkgb3IgaWQgYXJlIGlnbm9yZWRcblx0ICogQHBhcmFtIG91dHB1dFxuXHQgKiBAcmV0dXJucyB7e319XG5cdCAqL1xuXHRzZXJpYWxpemUoIGNmZyA9IHt9LCBvdXRwdXQgPSB7fSApIHtcblx0XHRsZXQgY3R4ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID0gdGhpcy5fLl9zY29wZSxcblx0XHQgICAgeyBiYXNlSWQsIGtleSwga2V5UElELCBpbmNyZW1lbnRJZCB9ID0gdGhpcy5fLFxuXHRcdCAgICB7XG5cdFx0XHQgICAgYWxpYXMsXG5cdFx0XHQgICAgcGFyZW50QWxpYXMsXG5cdFx0ICAgIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA9IGNmZyxcblx0XHQgICAgc2lkICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID0ga2V5XG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gKHBhcmVudEFsaWFzIHx8IGtleVBJRCkgKyAnPicgKyBrZXlcblx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBhbGlhcyB8fCBwYXJlbnRBbGlhcyAmJiAocGFyZW50QWxpYXMgKyAnLycgKyBiYXNlSWQpIHx8IHRoaXMuX2lkO1xuXHRcdFxuXHRcdFxuXHRcdC8vYWxpYXMgPSBhbGlhcyB8fCBiYXNlSWQ7XG5cdFx0cmV0dXJuIHRoaXMuc2VyaWFsaXplX2V4KGNmZywgb3V0cHV0LCBzaWQsIGFsaWFzLCBbXCIkcGFyZW50XCJdKVxuXHR9XG5cdFxuXHRzZXJpYWxpemVfZXgoIGNmZyA9IHt9LCBvdXRwdXQgPSB7fSwgc2lkLCBhbGlhcywgZXhjbHVkZSApIHtcblx0XHRsZXQgXyAgICAgICAgICAgICAgID0gdGhpcy5fLFxuXHRcdCAgICBjdHggICAgICAgICAgICAgPSBfLl9zY29wZSxcblx0XHQgICAgeyBpbmNyZW1lbnRJZCB9ID0gXyxcblx0XHQgICAge1xuXHRcdFx0ICAgIHdpdGhDaGlsZHMgPSB0cnVlLFxuXHRcdFx0ICAgIHdpdGhNaXhlZCAgPSB0cnVlLFxuXHRcdFx0ICAgIG5vcmVmcyxcblx0XHQgICAgfSAgICAgICAgICAgICAgID0gY2ZnO1xuXHRcdFxuXHRcdGlmICgga2V5V2Fsa25HZXQob3V0cHV0LCBzaWQpICkge1xuXHRcdFx0aWYgKCAhaW5jcmVtZW50SWQgKS8vIGRvbmVcblx0XHRcdFx0cmV0dXJuIG91dHB1dDtcblx0XHRcdGVsc2UgaWYgKCBpbmNyZW1lbnRJZCApIHsvLyBnZW5lcmF0ZSBrZXkgaWRcblx0XHRcdFx0bGV0IGkgPSAtMTtcblx0XHRcdFx0d2hpbGUgKCBrZXlXYWxrbkdldChvdXRwdXQsIHNpZCArICdbJyArICgrK2kpICsgJ10nKSApIDtcblx0XHRcdFx0c2lkID0gc2lkICsgJ1snICsgaSArICddJztcblx0XHRcdH1cblx0XHR9XG5cdFx0XG5cdFx0a2V5V2Fsa25TZXQob3V0cHV0LCBzaWQsIHt9KTtcblx0XHRcblx0XHRPYmplY3Qua2V5cyhjdHgpLmZvckVhY2goXG5cdFx0XHRpZCA9PiB7XG5cdFx0XHRcdGlmICggZXhjbHVkZS5pbmNsdWRlcyhpZCkgfHwgU2NvcGUuaXNTdG9yZUNsYXNzKGN0eFtpZF0pIHx8IFNjb3BlLmlzU2NvcGVDbGFzcyhjdHhbaWRdKSApXG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcblx0XHRcdFx0Y3R4W2lkXS5zZXJpYWxpemUoeyAuLi5jZmcsIHBhcmVudEFsaWFzOiBzaWQgfSwgb3V0cHV0KTtcblx0XHRcdH1cblx0XHQpXG5cdFx0XG5cdFx0d2l0aENoaWxkcyAmJiBfLmNoaWxkU2NvcGVzLmZvckVhY2goXG5cdFx0XHRjdHggPT4ge1xuXHRcdFx0XHQhY3R4Ll8uaXNMb2NhbElkICYmIGN0eC5zZXJpYWxpemUoe1xuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRoQ2hpbGQgIDogdHJ1ZSxcblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aFBhcmVudHM6IGZhbHNlLFxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRBbGlhczogc2lkLFxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRoTWl4ZWQsXG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcmVmcyxcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIG91dHB1dCk7XG5cdFx0XHR9XG5cdFx0KTtcblx0XHRcblx0XHR3aXRoTWl4ZWQgJiYgXy5fbWl4ZWQuZm9yRWFjaChcblx0XHRcdGN0eCA9PiB7XG5cdFx0XHRcdCFjdHguXy5pc0xvY2FsSWQgJiYgY3R4LnNlcmlhbGl6ZSh7XG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpdGhDaGlsZCAgOiBmYWxzZSxcblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aFBhcmVudHM6IGZhbHNlLFxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRoTWl4ZWQsXG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcmVmc1xuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgb3V0cHV0KTtcblx0XHRcdH1cblx0XHQpO1xuXHRcdFxuXHRcdGlmICggYWxpYXMgKSB7XG5cdFx0XHRvdXRwdXQgPSBPYmplY3Qua2V5cyhvdXRwdXQpXG5cdFx0XHQgICAgICAgICAgICAgICAucmVkdWNlKFxuXHRcdFx0XHQgICAgICAgICAgICAgICAoIGgsIGsgKSA9PiAoXG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgaFtrID09PSB0aGlzLl9pZFxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgPyBhbGlhc1xuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgOiBrXSA9IG91dHB1dFtrXSxcblx0XHRcdFx0XHRcdCAgICAgICAgICAgICAgIGhcblx0XHRcdFx0ICAgICAgICAgICAgICAgKSxcblx0XHRcdFx0ICAgICAgICAgICAgICAge31cblx0XHRcdCAgICAgICAgICAgICAgIClcblx0XHR9XG5cdFx0cmV0dXJuIG91dHB1dDtcblx0fVxuXHRcblx0LyoqXG5cdCAqIFJlc3RvcmUgc3RhdGUgJiBkYXRhIGZyb20gdGhlIHNlcmlhbGl6ZSBmblxuXHQgKiBAcGFyYW0gc25hcHNob3Rcblx0ICogQHBhcmFtIGZvcmNlXG5cdCAqL1xuXHRyZXN0b3JlKCBzbmFwc2hvdCwgY2ZnID0ge30sIGZvcmNlID0gaXMuYm9vbChjZmcpICYmIGNmZyApIHtcblx0XHRsZXQgY3R4ID0gdGhpcy5fLl9zY29wZSwgc25hcDtcblx0XHRcblx0XHRpZiAoIHNuYXBzaG90ICYmIGNmZyAmJiBjZmcuYWxpYXMgJiYgY2ZnLmFsaWFzICE9IHRoaXMuX2lkICkge1xuXHRcdFx0c25hcCA9IHtcblx0XHRcdFx0Li4uc25hcHNob3QsXG5cdFx0XHRcdFt0aGlzLl9pZF06IHNuYXBzaG90W2NmZy5hbGlhc11cblx0XHRcdH1cblx0XHRcdGRlbGV0ZSBzbmFwW2NmZy5hbGlhc107XG5cdFx0XHRzbmFwc2hvdCA9IHNuYXA7XG5cdFx0fVxuXHRcdHNuYXBzaG90ID0gc25hcHNob3Rcblx0XHRcdCYmIGtleVdhbGtuR2V0KHNuYXBzaG90LCB0aGlzLl9pZClcblx0XHRcdHx8IHRoaXMudGFrZVNuYXBzaG90QnlLZXkodGhpcy5faWQpO1xuXHRcdFxuXHRcdFxuXHRcdGlmICggIXNuYXBzaG90IClcblx0XHRcdHJldHVybjtcblx0XHRcblx0XHR0aGlzLl8uc25hcHNob3QgPSB7IC4uLnNuYXBzaG90IH07XG5cdFx0XG5cdFx0c25hcCAgICAgICAgICA9IHNuYXBzaG90WycvJ107XG5cdFx0c25hcHNob3RbJy8nXSA9IHsgLi4uc25hcCB9O1xuXHRcdHNuYXAgJiYgT2JqZWN0LmtleXMoc25hcCkuZm9yRWFjaChcblx0XHRcdG5hbWUgPT4ge1xuXHRcdFx0XHRpZiAoIG5hbWUgPT0gXCIkcGFyZW50XCIgKSByZXR1cm47XG5cdFx0XHRcdFxuXHRcdFx0XHRpZiAoIGN0eFtuYW1lXSApIHtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHRpZiAoIGZvcmNlICYmICFpcy5mbihjdHhbbmFtZV0pIClcblx0XHRcdFx0XHRcdGN0eFtuYW1lXS5kZXN0cm95KCk7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0dGhpcy5fbW91bnQobmFtZSk7Ly8gcXVpZXRcblx0XHRcdFx0fVxuXHRcdFx0XHRcblx0XHRcdH1cblx0XHQpXG5cdFx0XG5cdFx0dGhpcy5fLl9taXhlZC5mb3JFYWNoKFxuXHRcdFx0Y3R4ID0+IHtcblx0XHRcdFx0IWN0eC5fLmlzTG9jYWxJZCAmJiBjdHgucmVzdG9yZSh1bmRlZmluZWQsIGZvcmNlKTtcblx0XHRcdH1cblx0XHQpO1xuXHRcdFxuXHRcdHRoaXMuXy5jaGlsZFNjb3Blcy5mb3JFYWNoKFxuXHRcdFx0Y3R4ID0+IHtcblx0XHRcdFx0IWN0eC5fLmlzTG9jYWxJZCAmJiBjdHgucmVzdG9yZSh1bmRlZmluZWQsIGZvcmNlKTtcblx0XHRcdH1cblx0XHQpO1xuXHR9XG5cdFxuXHRnZXRTbmFwc2hvdEJ5S2V5KCBrZXksIGxvY2FsICkge1xuXHRcdC8vIG9ubHkgaGF2ZSB0aGUgbG9jYWwgc25hcFxuXHRcdGlmICggdGhpcy5fLnNuYXBzaG90ICYmIGtleS5zdGFydHNXaXRoKHRoaXMuX2lkKSApIHtcblx0XHRcdGxldCBvYmogPSBrZXlXYWxrbkdldCh0aGlzLl8uc25hcHNob3QsIGtleS5zdWJzdHIodGhpcy5faWQubGVuZ3RoKSlcblx0XHRcdHJldHVybiBvYmo7XG5cdFx0fVxuXHRcdGVsc2UgcmV0dXJuICFsb2NhbFxuXHRcdFx0JiYgdGhpcy5wYXJlbnRcblx0XHRcdCYmIHRoaXMucGFyZW50LmdldFNuYXBzaG90QnlLZXkoa2V5KVxuXHRcdFx0fHxcblx0XHRcdHRoaXMuc3RvcmVzLiRwYXJlbnRcblx0XHRcdCYmIHRoaXMuc3RvcmVzLiRwYXJlbnQuZ2V0U25hcHNob3RCeUtleShrZXkpO1xuXHRcdFxuXHR9XG5cdFxuXHRnZXRTbmFwc2hvdEJ5S2V5RXh0KCBzbmFwc2hvdCwga2V5LCBsb2NhbCApIHtcblx0XHQvLyBvbmx5IGhhdmUgdGhlIGxvY2FsIHNuYXBcblx0XHRpZiAoIHNuYXBzaG90ICkge1xuXHRcdFx0bGV0IG9iaiA9IGtleVdhbGtuR2V0KHNuYXBzaG90LCBrZXkpXG5cdFx0XHRyZXR1cm4gb2JqO1xuXHRcdH1cblx0XHRcblx0fVxuXHRcblx0dGFrZVNuYXBzaG90QnlLZXkoIGtleSwgbG9jYWwgKSB7XG5cdFx0aWYgKCB0aGlzLl8uc25hcHNob3QgJiYga2V5LnN0YXJ0c1dpdGgodGhpcy5faWQpICkge1xuXHRcdFx0bGV0IG9iaiA9IGtleVdhbGtuR2V0KHRoaXMuXy5zbmFwc2hvdCwga2V5LnN1YnN0cih0aGlzLl9pZC5sZW5ndGgpKVxuXHRcdFx0aWYgKCBvYmogKSB7XG5cdFx0XHRcdHRoaXMuZGVsZXRlU25hcHNob3RCeUtleShrZXksIHRydWUpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIG9iajtcblx0XHR9XG5cdFx0ZWxzZSByZXR1cm4gIWxvY2FsXG5cdFx0XHQmJiB0aGlzLnBhcmVudFxuXHRcdFx0JiYgdGhpcy5wYXJlbnQudGFrZVNuYXBzaG90QnlLZXkoa2V5KVxuXHRcdFx0fHxcblx0XHRcdHRoaXMuc3RvcmVzLiRwYXJlbnRcblx0XHRcdCYmIHRoaXMuc3RvcmVzLiRwYXJlbnQudGFrZVNuYXBzaG90QnlLZXkoa2V5KTtcblx0fVxuXHRcblx0ZGVsZXRlU25hcHNob3RCeUtleSgga2V5LCBsb2NhbCApIHtcblx0XHRpZiAoIHRoaXMuXy5zbmFwc2hvdCAmJiBrZXkuc3RhcnRzV2l0aCh0aGlzLl9pZCkgKSB7XG5cdFx0XHRsZXQgb2JqID0ga2V5V2Fsa25HZXQodGhpcy5fLnNuYXBzaG90LCBrZXkuc3Vic3RyKHRoaXMuX2lkLmxlbmd0aCkucmVwbGFjZSgvXiguKltcXD58XFwvXSlbXlxcPnxcXC9dKyQvaWcsICckMScpKVxuXHRcdFx0aWYgKCBvYmogKVxuXHRcdFx0XHRkZWxldGUgb2JqW2tleS5yZXBsYWNlKC9eLipbXFw+fFxcL10oW15cXD58XFwvXSspJC9pZywgJyQxJyldXG5cdFx0fVxuXHRcdHJldHVybiAhbG9jYWxcblx0XHRcdCYmIHRoaXMucGFyZW50XG5cdFx0XHQmJiB0aGlzLnBhcmVudC5kZWxldGVTbmFwc2hvdEJ5S2V5KGtleSlcblx0XHRcdHx8XG5cdFx0XHR0aGlzLnN0b3Jlcy4kcGFyZW50XG5cdFx0XHQmJiB0aGlzLnN0b3Jlcy4kcGFyZW50LmRlbGV0ZVNuYXBzaG90QnlLZXkoa2V5KTtcblx0fVxuXHRcblx0c2V0U3RhdGUoIHBTdGF0ZSApIHtcblx0XHRPYmplY3Qua2V5cyhwU3RhdGUpXG5cdFx0ICAgICAgLmZvckVhY2goayA9PiAodGhpcy5zdGF0ZVtrXSA9IHBTdGF0ZVtrXSkpXG5cdH1cblx0XG5cdC8qKlxuXHQgKiBnZXQgYSBwYXJzZWQgcmVmZXJlbmNlXG5cdCAqIEBwYXJhbSBfcmVmXG5cdCAqIEByZXR1cm5zIHt7c3RvcmVJZCwgcGF0aCwgYWxpYXM6ICosIHJlZjogKn19XG5cdCAqL1xuXHRwYXJzZVJlZiggX3JlZiApIHtcblx0XHRpZiAoIHR5cGVvZiBfcmVmICE9PSAnc3RyaW5nJyApIHsvLyBAdG9kbyA6IHJtIHRoaXNcblx0XHRcdHRoaXMucmVnaXN0ZXIoeyBbX3JlZi5uYW1lXTogX3JlZi5zdG9yZSB9KTtcblx0XHRcdF9yZWYgPSBfcmVmLm5hbWU7XG5cdFx0fVxuXHRcdGxldCByZWYgPSBfcmVmLnNwbGl0KCc6Jyk7XG5cdFx0cmVmWzBdICA9IHJlZlswXS5zcGxpdCgnLicpO1xuXHRcdHJldHVybiB7XG5cdFx0XHRzdG9yZUlkOiByZWZbMF1bMF0sXG5cdFx0XHRwYXRoICAgOiByZWZbMF0sXG5cdFx0XHRhbGlhcyAgOiByZWZbMV0gfHwgcmVmWzBdW3JlZlswXS5sZW5ndGggLSAxXSxcblx0XHRcdHJlZiAgICA6IF9yZWZcblx0XHR9O1xuXHR9XG5cdFxuXHQvKipcblx0ICogRGlzcGF0Y2ggYW4gYWN0aW9uIHRvIHRoZSB0b3AgcGFyZW50ICYgbWl4ZWQgc2NvcGVzLCBpbiBhbGwgc3RvcmVzXG5cdCAqXG5cdCAqIEBwYXJhbSBhY3Rpb25cblx0ICogQHBhcmFtIGRhdGFcblx0ICogQHJldHVybnMge1Njb3BlfVxuXHQgKi9cblx0ZGlzcGF0Y2goIGFjdGlvbiwgLi4uYXJneiApIHtcblx0XHRpZiAoIHRoaXMuZGVhZCApIHtcblx0XHRcdGNvbnNvbGUud2FybihcIkRpc3BhdGNoIHdhcyBjYWxsZWQgb24gYSBkZWFkIHNjb3BlLCBjaGVjayB5b3UncmUgYXN5bmMgZnVuY3Rpb25zIGluIHRoaXMgc3RhY2suLi5cIiwgKG5ldyBFcnJvcigpKS5zdGFjayk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGxldCBiQWN0cyA9IHRoaXMuXy5fYm91bmRlZEFjdGlvbnM7XG5cdFx0T2JqZWN0LmtleXModGhpcy5fLl9zY29wZSlcblx0XHQgICAgICAuZm9yRWFjaChcblx0XHRcdCAgICAgIGlkID0+IHtcblx0XHRcdFx0ICAgICAgaWYgKCBpZCA9PSBcIiRwYXJlbnRcIiApIHJldHVybjtcblx0XHRcdFx0ICAgICAgaWYgKCAhaXMuZm4odGhpcy5fLl9zY29wZVtpZF0pIClcblx0XHRcdFx0XHQgICAgICB0aGlzLl8uX3Njb3BlW2lkXS50cmlnZ2VyKGFjdGlvbiwgLi4uYXJneik7XG5cdFx0XHQgICAgICB9XG5cdFx0ICAgICAgKTtcblx0XHRcblx0XHRpZiAoIGJBY3RzICYmIGJBY3RzLnRlc3QoYWN0aW9uKSApXG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcblx0XHR0aGlzLl8uX21peGVkLmZvckVhY2goKCBjdHggKSA9PiAoY3R4LmRpc3BhdGNoKGFjdGlvbiwgLi4uYXJneikpKTtcblx0XHR0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC5kaXNwYXRjaChhY3Rpb24sIC4uLmFyZ3opO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cdFxuXHR0cmlnZ2VyKCkge1xuXHRcdHRoaXMuZGlzcGF0Y2goLi4uYXJndW1lbnRzKTtcblx0fVxuXHRcblx0LyoqXG5cdCAqIG9uY2UoJ3N0YWJsZScsIGNiKVxuXHQgKiBAcGFyYW0gb2JqIHtSZWFjdC5Db21wb25lbnR8U3RvcmV8ZnVuY3Rpb24pXG5cdCAqIEBwYXJhbSBrZXkge3N0cmluZ30gb3B0aW9uYWwga2V5IHdoZXJlIHRvIG1hcCB0aGUgcHVibGljIHN0YXRlXG5cdCAqL1xuXHR0aGVuKCBjYiApIHtcblx0XHRpZiAoICF0aGlzLl9zdGFibGUgKVxuXHRcdFx0cmV0dXJuIHRoaXMub25jZSgnc3RhYmxlJywgZSA9PiB0aGlzLnRoZW4oY2IpKTtcblx0XHRcblx0XHRyZXR1cm4gY2IodGhpcy5kYXRhKTtcblx0fVxuXHRcblx0b25jZVN0YWJsZVRyZWUoIGNiICkge1xuXHRcdGlmICggdGhpcy5fLnVuU3RhYmxlQ2hpbGRzIClcblx0XHRcdHJldHVybiB0aGlzLm9uY2UoJ3N0YWJsZVRyZWUnLCBlID0+IHRoaXMub25jZVN0YWJsZVRyZWUoY2IpKTtcblx0XHRyZXR1cm4gY2IodGhpcy5kYXRhKTtcblx0fVxuXHRcblx0LyoqXG5cdCAqIENhbGwgcmV0YWluIG9uIHRoZSBzY29wZWQgc3RvcmVzIGJhc2luZyB0aGUgZ2l2ZW4gbGlzdFxuXHQgKlxuXHQgKiBAcGFyYW0gc3RvcmVzXG5cdCAqIEBwYXJhbSByZWFzb25cblx0ICovXG5cdHJldGFpblN0b3Jlcyggc3RvcmVzID0gW10sIHJlYXNvbiApIHtcblx0XHRzdG9yZXMuZm9yRWFjaChcblx0XHRcdGlkID0+ICh0aGlzLnN0b3Jlc1tpZF0gJiYgdGhpcy5zdG9yZXNbaWRdLnJldGFpbiAmJiB0aGlzLnN0b3Jlc1tpZF0ucmV0YWluKHJlYXNvbikpXG5cdFx0KVxuXHR9XG5cdFxuXHQvKipcblx0ICogQ2FsbCByZXRhaW4gb24gdGhlIHNjb3BlZCBzdG9yZXNcblx0ICpcblx0ICogQHBhcmFtIHN0b3Jlc1xuXHQgKiBAcGFyYW0gcmVhc29uXG5cdCAqL1xuXHRkaXNwb3NlU3RvcmVzKCBzdG9yZXMgPSBbXSwgcmVhc29uICkge1xuXHRcdHN0b3Jlcy5mb3JFYWNoKFxuXHRcdFx0aWQgPT4gKHRoaXMuc3RvcmVzW2lkXSAmJiB0aGlzLnN0b3Jlc1tpZF0uZGlzcG9zZSAmJiB0aGlzLnN0b3Jlc1tpZF0uZGlzcG9zZShyZWFzb24pKVxuXHRcdClcblx0fVxuXHRcblx0LyoqXG5cdCAqIEtlZXAgdGhlIHNjb3BlIHVuc3RhYmxlIHVudGlsIHJlbGVhc2UgaXMgY2FsbGVkXG5cdCAqIEBwYXJhbSByZWFzb25cblx0ICovXG5cdHdhaXQoIHJlYXNvbiApIHtcblx0XHQvL2NvbnNvbGUubG9nKFwid2FpdFwiLCByZWFzb24pO1xuXHRcdHRoaXMuX3N0YWJsZSAmJiAhdGhpcy5fX2xvY2tzLmFsbCAmJiB0aGlzLmVtaXQoXCJ1bnN0YWJsZVwiLCB0aGlzKTtcblx0XHR0aGlzLl9zdGFibGUgPSBmYWxzZTtcblx0XHR0aGlzLl9fbG9ja3MuYWxsKys7XG5cdFx0aWYgKCByZWFzb24gKSB7XG5cdFx0XHR0aGlzLl9fbG9ja3NbcmVhc29uXSA9IHRoaXMuX19sb2Nrc1tyZWFzb25dIHx8IDA7XG5cdFx0XHR0aGlzLl9fbG9ja3NbcmVhc29uXSsrO1xuXHRcdH1cblx0fVxuXHRcblx0LyoqXG5cdCAqIFN0YWJpbGl6ZSB0aGUgc2NvcGUgaWYgbm8gbW9yZSBsb2NrcyByZW1haW4gKHdhaXQgZm4pXG5cdCAqIEBwYXJhbSByZWFzb25cblx0ICovXG5cdHJlbGVhc2UoIHJlYXNvbiApIHtcblx0XHRcblx0XHRpZiAoIHJlYXNvbiApIHtcblx0XHRcdGlmICggdGhpcy5fX2xvY2tzW3JlYXNvbl0gPT0gMCApXG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoXCJSZWxlYXNlIG1vcmUgdGhhbiBsb2NraW5nICFcIiwgcmVhc29uKTtcblx0XHRcdHRoaXMuX19sb2Nrc1tyZWFzb25dID0gdGhpcy5fX2xvY2tzW3JlYXNvbl0gfHwgMDtcblx0XHRcdHRoaXMuX19sb2Nrc1tyZWFzb25dLS07XG5cdFx0fVxuXHRcdGlmICggIXJlYXNvbiAmJiB0aGlzLl9fbG9ja3MuYWxsID09IDAgKVxuXHRcdFx0Y29uc29sZS5lcnJvcihcIlJlbGVhc2UgbW9yZSB0aGFuIGxvY2tpbmcgIVwiKTtcblx0XHRcblx0XHR0aGlzLl9fbG9ja3MuYWxsLS07XG5cdFx0aWYgKCAhdGhpcy5fX2xvY2tzLmFsbCApIHtcblx0XHRcdGlmICggdGhpcy5fLnN0YWJpbGl6ZXJUTSApXG5cdFx0XHRcdHJldHVybjtcblx0XHRcdHRoaXMuXy5zdGFiaWxpemVyVE0gJiYgY2xlYXJUaW1lb3V0KHRoaXMuXy5zdGFiaWxpemVyVE0pO1xuXHRcdFx0XG5cdFx0XHR0aGlzLl8uc3RhYmlsaXplclRNID0gc2V0VGltZW91dChcblx0XHRcdFx0ZSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5fLnN0YWJpbGl6ZXJUTSA9IG51bGw7XG5cdFx0XHRcdFx0aWYgKCB0aGlzLl9fbG9ja3MuYWxsIClcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHR0aGlzLl8ucHJvcGFnVE0gJiYgY2xlYXJUaW1lb3V0KHRoaXMuXy5wcm9wYWdUTSk7XG5cdFx0XHRcdFx0dGhpcy5fcmV2Kys7XG5cdFx0XHRcdFx0dGhpcy5fc3RhYmxlID0gdHJ1ZTtcblx0XHRcdFx0XHR0aGlzLmVtaXQoXCJzdGFibGVcIiwgdGhpcyk7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0IXRoaXMuZGVhZCAmJiB0aGlzLl9wcm9wYWcoKTsvLyBzdGFiaWxpdHkgY2FuIGluZHVjZSBkZXN0cm95XG5cdFx0XHRcdH1cblx0XHRcdCk7XG5cdFx0fVxuXHRcdFxuXHR9XG5cdFxuXHQvKipcblx0ICogUHJvcGFnIHN0b3JlcyB1cGRhdGVzIGJhc2luZyB0aGVpcnMgbGFzdCB1cGRhdGVzXG5cdCAqL1xuXHRwcm9wYWcoKSB7XG5cdFx0dGhpcy5fLnByb3BhZ1RNICYmIGNsZWFyVGltZW91dCh0aGlzLl8ucHJvcGFnVE0pO1xuXHRcdHRoaXMuXy5wcm9wYWdUTSA9IHNldFRpbWVvdXQoXG5cdFx0XHRlID0+IHtcblx0XHRcdFx0dGhpcy5fLnByb3BhZ1RNID0gbnVsbDtcblx0XHRcdFx0dGhpcy5fcHJvcGFnKClcblx0XHRcdH0sIDJcblx0XHQpO1xuXHR9XG5cdFxuXHRfcHJvcGFnKCkge1xuXHRcdGlmICggdGhpcy5fLmZvbGxvd2Vycy5sZW5ndGggKVxuXHRcdFx0dGhpcy5fLmZvbGxvd2Vycy5mb3JFYWNoKCggeyAwOiBvYmosIDE6IGtleSwgMjogYXMsIDM6IGxhc3RSZXZzLCAzOiByZW1hcHMgfSApID0+IHtcblx0XHRcdFx0bGV0IGRhdGEgPSB0aGlzLmdldFVwZGF0ZXMobGFzdFJldnMpO1xuXHRcdFx0XHRpZiAoICFkYXRhICkgcmV0dXJuO1xuXHRcdFx0XHQvL2NvbnNvbGUubG9nKGRhdGEsIGxhc3RSZXZzKVxuXHRcdFx0XHRpZiAoIHR5cGVvZiBvYmogIT0gXCJmdW5jdGlvblwiICkge1xuXHRcdFx0XHRcdC8vY29uc29sZS5sb2coXCJzZXRTdGF0ZSBcIixvYmosIE9iamVjdC5rZXlzKGRhdGEpKVxuXHRcdFx0XHRcdGlmICggYXMgKSBvYmouc2V0U3RhdGUoeyBbYXNdOiBkYXRhIH0pO1xuXHRcdFx0XHRcdGVsc2Ugb2JqLnNldFN0YXRlKGRhdGEpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdG9iaihkYXRhLCBsYXN0UmV2cyAmJiBbLi4ubGFzdFJldnNdIHx8IFwibm8gcmV2c1wiKTtcblx0XHRcdFx0fVxuXHRcdFx0XHQvLyBsYXN0UmV2cyAmJlxuXHRcdFx0XHQvLyBrZXkuZm9yRWFjaChpZCA9PiAobGFzdFJldnNbaWRdID0gdGhpcy5zdG9yZXNbaWRdICYmXG5cdFx0XHRcdC8vIHRoaXMuc3RvcmVzW2lkXS5fcmV2IHx8IDApKTtcblx0XHRcdH0pO1xuXHRcdHRoaXMuZW1pdChcInVwZGF0ZVwiLCB0aGlzLmdldFVwZGF0ZXMoKSk7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBpcyBzdGFibGVcblx0ICogQHJldHVybnMgYm9vbFxuXHQgKi9cblx0aXNTdGFibGUoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX3N0YWJsZTtcblx0fVxuXHRcblx0LyoqXG5cdCAqIGlzIHN0YWJsZSB0cmVlXG5cdCAqIEByZXR1cm5zIGJvb2xcblx0ICovXG5cdGlzU3RhYmxlVHJlZSgpIHtcblx0XHRyZXR1cm4gIXRoaXMuXy51blN0YWJsZUNoaWxkcztcblx0fVxuXHRcblx0LyoqXG5cdCAqIFJlZ2lzdGVyIGNoaWxkcmVuXG5cdCAqIEBwYXJhbSBzY29wZVxuXHQgKiBAcHJpdmF0ZVxuXHQgKi9cblx0X2FkZENoaWxkKCBzY29wZSApIHtcblx0XHR0aGlzLl8uY2hpbGRTY29wZXMucHVzaChzY29wZSk7XG5cdFx0dGhpcy5fLnNlZW5DaGlsZHMrKztcblx0XHRsZXQgbGlzdHMgICAgID0ge1xuXHRcdFx0ICAgICdzdGFibGUnICAgICAgOiBzID0+IHtcblx0XHRcdFx0ICAgIHRoaXMuXy51blN0YWJsZUNoaWxkcy0tO1xuXHRcdFx0XHQgICAgaWYgKCAhdGhpcy5fLnVuU3RhYmxlQ2hpbGRzIClcblx0XHRcdFx0XHQgICAgdGhpcy5lbWl0KFwic3RhYmxlVHJlZVwiLCB0aGlzKVxuXHRcdFx0ICAgIH0sXG5cdFx0XHQgICAgJ3Vuc3RhYmxlJyAgICA6IHMgPT4ge1xuXHRcdFx0XHQgICAgdGhpcy5fLnVuU3RhYmxlQ2hpbGRzKys7XG5cdFx0XHRcdCAgICBpZiAoIDEgPT0gdGhpcy5fLnVuU3RhYmxlQ2hpbGRzIClcblx0XHRcdFx0XHQgICAgdGhpcy5lbWl0KFwidW5zdGFibGVUcmVlXCIsIHRoaXMpXG5cdFx0XHQgICAgfSxcblx0XHRcdCAgICAnc3RhYmxlVHJlZScgIDogcyA9PiB7XG5cdFx0XHRcdCAgICB0aGlzLl8udW5TdGFibGVDaGlsZHMtLTtcblx0XHRcdFx0ICAgIGlmICggIXRoaXMuXy51blN0YWJsZUNoaWxkcyApXG5cdFx0XHRcdFx0ICAgIHRoaXMuZW1pdChcInN0YWJsZVRyZWVcIiwgdGhpcylcblx0XHRcdCAgICB9LFxuXHRcdFx0ICAgICd1bnN0YWJsZVRyZWUnOiBzID0+IHtcblx0XHRcdFx0ICAgIHRoaXMuXy51blN0YWJsZUNoaWxkcysrO1xuXHRcdFx0XHQgICAgaWYgKCAxID09IHRoaXMuXy51blN0YWJsZUNoaWxkcyApXG5cdFx0XHRcdFx0ICAgIHRoaXMuZW1pdChcInVuc3RhYmxlVHJlZVwiLCB0aGlzKVxuXHRcdFx0ICAgIH0sXG5cdFx0XHQgICAgJ2Rlc3Ryb3knICAgICA6IGN0eCA9PiB7XG5cdFx0XHRcdCAgICBpZiAoIGN0eC5fLnVuU3RhYmxlQ2hpbGRzIClcblx0XHRcdFx0XHQgICAgdGhpcy5fLnVuU3RhYmxlQ2hpbGRzLS07XG5cdFx0XHRcdCAgICBpZiAoICFjdHguaXNTdGFibGUoKSApXG5cdFx0XHRcdFx0ICAgIHRoaXMuXy51blN0YWJsZUNoaWxkcy0tO1xuXHRcdFx0XHRcblx0XHRcdFx0ICAgIGlmICggIXRoaXMuXy51blN0YWJsZUNoaWxkcyApXG5cdFx0XHRcdFx0ICAgIHRoaXMuZW1pdChcInN0YWJsZVRyZWVcIiwgdGhpcylcblx0XHRcdCAgICB9XG5cdFx0ICAgIH0sXG5cdFx0ICAgIHdhc1N0YWJsZSA9IHRoaXMuXy51blN0YWJsZUNoaWxkcztcblx0XHRcblx0XHQhc2NvcGUuaXNTdGFibGUoKSAmJiB0aGlzLl8udW5TdGFibGVDaGlsZHMrKztcblx0XHRzY29wZS5fLnVuU3RhYmxlQ2hpbGRzICYmIHRoaXMuXy51blN0YWJsZUNoaWxkcysrO1xuXHRcdHRoaXMuXy5jaGlsZFNjb3Blc0xpc3QucHVzaChsaXN0cyk7XG5cdFx0XG5cdFx0aWYgKCAhd2FzU3RhYmxlICYmIHRoaXMuXy51blN0YWJsZUNoaWxkcyApXG5cdFx0XHR0aGlzLmVtaXQoXCJ1bnN0YWJsZVRyZWVcIiwgdGhpcyk7XG5cdFx0XG5cdFx0c2NvcGUub24obGlzdHMpO1xuXHR9XG5cdFxuXHRfcm1DaGlsZCggY3R4ICkge1xuXHRcdGxldCBpICAgICAgICAgPSB0aGlzLl8uY2hpbGRTY29wZXMuaW5kZXhPZihjdHgpLFxuXHRcdCAgICB3YXNTdGFibGUgPSB0aGlzLl8udW5TdGFibGVDaGlsZHM7XG5cdFx0aWYgKCBpICE9IC0xICkge1xuXHRcdFx0dGhpcy5fLmNoaWxkU2NvcGVzLnNwbGljZShpLCAxKTtcblx0XHRcdCFjdHguaXNTdGFibGUoKSAmJiB0aGlzLl8udW5TdGFibGVDaGlsZHMtLTtcblx0XHRcdGN0eC5fLnVuU3RhYmxlQ2hpbGRzICYmIHRoaXMuXy51blN0YWJsZUNoaWxkcy0tO1xuXHRcdFx0Y3R4LnVuKHRoaXMuXy5jaGlsZFNjb3Blc0xpc3Quc3BsaWNlKGksIDEpWzBdKTtcblx0XHRcdGlmICggd2FzU3RhYmxlICYmICF0aGlzLl8udW5TdGFibGVDaGlsZHMgKVxuXHRcdFx0XHR0aGlzLmVtaXQoXCJzdGFibGVUcmVlXCIpXG5cdFx0fVxuXHR9XG5cdFxuXHRyZXRhaW4oIHJlYXNvbiApIHtcblx0XHR0aGlzLl9fcmV0YWlucy5hbGwrKztcblx0XHQvL2NvbnNvbGUubG9nKFwicmV0YWluXCIsIHRoaXMuX2lkLCByZWFzb24pO1xuXHRcdGlmICggcmVhc29uICkge1xuXHRcdFx0dGhpcy5fX3JldGFpbnNbcmVhc29uXSA9IHRoaXMuX19yZXRhaW5zW3JlYXNvbl0gfHwgMDtcblx0XHRcdHRoaXMuX19yZXRhaW5zW3JlYXNvbl0rKztcblx0XHR9XG5cdH1cblx0XG5cdGRpc3Bvc2UoIHJlYXNvbiApIHtcblx0XHQvL2NvbnNvbGUubG9nKFwiZGlzcG9zZVwiLCB0aGlzLl9pZCwgcmVhc29uKTtcblx0XHRpZiAoIHJlYXNvbiApIHtcblx0XHRcdGlmICggIXRoaXMuX19yZXRhaW5zW3JlYXNvbl0gKVxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJEaXNwb3NlIG1vcmUgdGhhbiByZXRhaW5pbmcgOiBcIiArIHJlYXNvbik7XG5cdFx0XHR0aGlzLl9fcmV0YWluc1tyZWFzb25dLS07XG5cdFx0fVxuXHRcdFxuXHRcdGlmICggIXRoaXMuX19yZXRhaW5zLmFsbCApXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJEaXNwb3NlIG1vcmUgdGhhbiByZXRhaW5pbmcgIVwiKTtcblx0XHRcblx0XHR0aGlzLl9fcmV0YWlucy5hbGwtLTtcblx0XHRcblx0XHRpZiAoICF0aGlzLl9fcmV0YWlucy5hbGwgKSB7XG5cdFx0XHQvL2NvbnNvbGUubG9nKFwiZGlzcG9zZSBkbyBkZXN0cm95IFwiLCB0aGlzLl9pZCwgdGhpcy5fcGVyc2lzdGVuY2VUbSk7XG5cdFx0XHRpZiAoIHRoaXMuXy5wZXJzaXN0ZW5jZVRtICkge1xuXHRcdFx0XHR0aGlzLl8uZGVzdHJveVRNICYmIGNsZWFyVGltZW91dCh0aGlzLl8uZGVzdHJveVRNKTtcblx0XHRcdFx0dGhpcy5fLmRlc3Ryb3lUTSA9IHNldFRpbWVvdXQoXG5cdFx0XHRcdFx0ZSA9PiB7XG5cdFx0XHRcdFx0XHR0aGlzLnRoZW4ocyA9PiB7XG5cdFx0XHRcdFx0XHRcdCF0aGlzLl9fcmV0YWlucy5hbGwgJiYgIXRoaXMuZGVhZCAmJiB0aGlzLmRlc3Ryb3koKVxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR0aGlzLl8ucGVyc2lzdGVuY2VUbVxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdHRoaXMudGhlbihzID0+XG5cdFx0XHRcdFx0ICAgICAgICAgICghdGhpcy5fX3JldGFpbnMuYWxsICYmICF0aGlzLmRlYWQgJiYgdGhpcy5kZXN0cm95KCkpXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdFxuXHQvKipcblx0ICogb3JkZXIgZGVzdHJveSBvZiBsb2NhbCBzdG9yZXNcblx0ICovXG5cdGRlc3Ryb3koKSB7XG5cdFx0bGV0IGN0eCA9IHRoaXMuXy5fc2NvcGU7XG5cdFx0Wy4uLnRoaXMuXy5jaGlsZFNjb3Blc10ubWFwKHNjb3BlID0+IHNjb3BlLmRlc3Ryb3koKSlcblx0XHRmb3IgKCBsZXQga2V5IGluIGN0eCApXG5cdFx0XHRpZiAoICFpcy5mbihjdHhba2V5XSkgKSB7XG5cdFx0XHRcdGlmICgga2V5ID09IFwiJHBhcmVudFwiICkgY29udGludWU7XG5cdFx0XHRcdCFjdHhba2V5XS5fYXV0b0Rlc3Ryb3kgJiYgY3R4W2tleV0uZGlzcG9zZShcInNjb3BlZFwiKTtcblx0XHRcdH1cblx0XHR0aGlzLl8uc3RhYmlsaXplclRNICYmIGNsZWFyVGltZW91dCh0aGlzLl8uc3RhYmlsaXplclRNKTtcblx0XHR0aGlzLl8ucHJvcGFnVE0gJiYgY2xlYXJUaW1lb3V0KHRoaXMuXy5wcm9wYWdUTSk7XG5cdFx0T2JqZWN0LmtleXMoXG5cdFx0XHR0aGlzLl8uX2xpc3RlbmluZ1xuXHRcdCkuZm9yRWFjaChcblx0XHRcdGlkID0+ICgoaWQgIT09IFwiJHBhcmVudFwiKSAmJiB0aGlzLl8uX3Njb3BlW2lkXS5yZW1vdmVMaXN0ZW5lcih0aGlzLl8uX2xpc3RlbmluZ1tpZF0pKVxuXHRcdCk7XG5cdFx0d2hpbGUgKCB0aGlzLl8uX21peGVkTGlzdC5sZW5ndGggKSB7XG5cdFx0XHR0aGlzLl8uX21peGVkWzBdLnJlbW92ZUxpc3RlbmVyKHRoaXMuXy5fbWl4ZWRMaXN0LnNoaWZ0KCkpO1xuXHRcdFx0dGhpcy5fLl9taXhlZC5zaGlmdCgpLmRpc3Bvc2UoXCJtaXhlZFRvXCIpO1xuXHRcdH1cblx0XHRbLi4udGhpcy5fLmZvbGxvd2Vyc10ubWFwKGZvbGxvd2VyID0+IHRoaXMudW5CaW5kKC4uLmZvbGxvd2VyKSk7XG5cdFx0aWYgKCB0aGlzLl8uX3BhcmVudExpc3QgKSB7XG5cdFx0XHR0aGlzLnBhcmVudC5fcm1DaGlsZCh0aGlzKTtcblx0XHRcdHRoaXMucGFyZW50LnJlbW92ZUxpc3RlbmVyKHRoaXMuXy5fcGFyZW50TGlzdCk7XG5cdFx0XHR0aGlzLnBhcmVudC5kaXNwb3NlKFwiaXNNeVBhcmVudFwiKTtcblx0XHRcdHRoaXMuXy5fcGFyZW50TGlzdCA9IG51bGw7XG5cdFx0fVxuXHRcdHRoaXMuZGVhZCA9IHRydWU7XG5cdFx0ZGVsZXRlIGFsbFNjb3Blc1t0aGlzLl9pZF07XG5cdFx0dGhpcy5lbWl0KFwiZGVzdHJveVwiLCB0aGlzKTtcblx0XHRcblx0XHRcblx0fVxufVxuXG5cblNjb3BlLmlzU2NvcGUgPSBmdW5jdGlvbiAoIG9iaiApIHtcblx0cmV0dXJuIG9iaiBpbnN0YW5jZW9mIFNjb3BlXG59O1xuXG5TY29wZS5pc1Njb3BlQ2xhc3MgPSBmdW5jdGlvbiAoIG9iaiApIHtcblx0cmV0dXJuIFNjb3BlLmlzUHJvdG90eXBlT2Yob2JqKSB8fCBvYmogPT09IFNjb3BlXG59O1xuZXhwb3J0IGRlZmF1bHQgU2NvcGU7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1Njb3BlLmpzIiwiLyogZ2xvYmFscyB3aW5kb3csIEhUTUxFbGVtZW50ICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqIVxuICogaXNcbiAqIHRoZSBkZWZpbml0aXZlIEphdmFTY3JpcHQgdHlwZSB0ZXN0aW5nIGxpYnJhcnlcbiAqXG4gKiBAY29weXJpZ2h0IDIwMTMtMjAxNCBFbnJpY28gTWFyaW5vIC8gSm9yZGFuIEhhcmJhbmRcbiAqIEBsaWNlbnNlIE1JVFxuICovXG5cbnZhciBvYmpQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG52YXIgb3ducyA9IG9ialByb3RvLmhhc093blByb3BlcnR5O1xudmFyIHRvU3RyID0gb2JqUHJvdG8udG9TdHJpbmc7XG52YXIgc3ltYm9sVmFsdWVPZjtcbmlmICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nKSB7XG4gIHN5bWJvbFZhbHVlT2YgPSBTeW1ib2wucHJvdG90eXBlLnZhbHVlT2Y7XG59XG52YXIgaXNBY3R1YWxOYU4gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9PSB2YWx1ZTtcbn07XG52YXIgTk9OX0hPU1RfVFlQRVMgPSB7XG4gICdib29sZWFuJzogMSxcbiAgbnVtYmVyOiAxLFxuICBzdHJpbmc6IDEsXG4gIHVuZGVmaW5lZDogMVxufTtcblxudmFyIGJhc2U2NFJlZ2V4ID0gL14oW0EtWmEtejAtOSsvXXs0fSkqKFtBLVphLXowLTkrL117NH18W0EtWmEtejAtOSsvXXszfT18W0EtWmEtejAtOSsvXXsyfT09KSQvO1xudmFyIGhleFJlZ2V4ID0gL15bQS1GYS1mMC05XSskLztcblxuLyoqXG4gKiBFeHBvc2UgYGlzYFxuICovXG5cbnZhciBpcyA9IHt9O1xuXG4vKipcbiAqIFRlc3QgZ2VuZXJhbC5cbiAqL1xuXG4vKipcbiAqIGlzLnR5cGVcbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBhIHR5cGUgb2YgYHR5cGVgLlxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIHR5cGVcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgYHZhbHVlYCBpcyBhIHR5cGUgb2YgYHR5cGVgLCBmYWxzZSBvdGhlcndpc2VcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuaXMuYSA9IGlzLnR5cGUgPSBmdW5jdGlvbiAodmFsdWUsIHR5cGUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gdHlwZTtcbn07XG5cbi8qKlxuICogaXMuZGVmaW5lZFxuICogVGVzdCBpZiBgdmFsdWVgIGlzIGRlZmluZWQuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiAndmFsdWUnIGlzIGRlZmluZWQsIGZhbHNlIG90aGVyd2lzZVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5pcy5kZWZpbmVkID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgIT09ICd1bmRlZmluZWQnO1xufTtcblxuLyoqXG4gKiBpcy5lbXB0eVxuICogVGVzdCBpZiBgdmFsdWVgIGlzIGVtcHR5LlxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgYHZhbHVlYCBpcyBlbXB0eSwgZmFsc2Ugb3RoZXJ3aXNlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmlzLmVtcHR5ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHZhciB0eXBlID0gdG9TdHIuY2FsbCh2YWx1ZSk7XG4gIHZhciBrZXk7XG5cbiAgaWYgKHR5cGUgPT09ICdbb2JqZWN0IEFycmF5XScgfHwgdHlwZSA9PT0gJ1tvYmplY3QgQXJndW1lbnRzXScgfHwgdHlwZSA9PT0gJ1tvYmplY3QgU3RyaW5nXScpIHtcbiAgICByZXR1cm4gdmFsdWUubGVuZ3RoID09PSAwO1xuICB9XG5cbiAgaWYgKHR5cGUgPT09ICdbb2JqZWN0IE9iamVjdF0nKSB7XG4gICAgZm9yIChrZXkgaW4gdmFsdWUpIHtcbiAgICAgIGlmIChvd25zLmNhbGwodmFsdWUsIGtleSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiAhdmFsdWU7XG59O1xuXG4vKipcbiAqIGlzLmVxdWFsXG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgZXF1YWwgdG8gYG90aGVyYC5cbiAqXG4gKiBAcGFyYW0ge01peGVkfSB2YWx1ZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcGFyYW0ge01peGVkfSBvdGhlciB2YWx1ZSB0byBjb21wYXJlIHdpdGhcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgYHZhbHVlYCBpcyBlcXVhbCB0byBgb3RoZXJgLCBmYWxzZSBvdGhlcndpc2VcbiAqL1xuXG5pcy5lcXVhbCA9IGZ1bmN0aW9uIGVxdWFsKHZhbHVlLCBvdGhlcikge1xuICBpZiAodmFsdWUgPT09IG90aGVyKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICB2YXIgdHlwZSA9IHRvU3RyLmNhbGwodmFsdWUpO1xuICB2YXIga2V5O1xuXG4gIGlmICh0eXBlICE9PSB0b1N0ci5jYWxsKG90aGVyKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmICh0eXBlID09PSAnW29iamVjdCBPYmplY3RdJykge1xuICAgIGZvciAoa2V5IGluIHZhbHVlKSB7XG4gICAgICBpZiAoIWlzLmVxdWFsKHZhbHVlW2tleV0sIG90aGVyW2tleV0pIHx8ICEoa2V5IGluIG90aGVyKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAoa2V5IGluIG90aGVyKSB7XG4gICAgICBpZiAoIWlzLmVxdWFsKHZhbHVlW2tleV0sIG90aGVyW2tleV0pIHx8ICEoa2V5IGluIHZhbHVlKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKHR5cGUgPT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICBrZXkgPSB2YWx1ZS5sZW5ndGg7XG4gICAgaWYgKGtleSAhPT0gb3RoZXIubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHdoaWxlIChrZXktLSkge1xuICAgICAgaWYgKCFpcy5lcXVhbCh2YWx1ZVtrZXldLCBvdGhlcltrZXldKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKHR5cGUgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXScpIHtcbiAgICByZXR1cm4gdmFsdWUucHJvdG90eXBlID09PSBvdGhlci5wcm90b3R5cGU7XG4gIH1cblxuICBpZiAodHlwZSA9PT0gJ1tvYmplY3QgRGF0ZV0nKSB7XG4gICAgcmV0dXJuIHZhbHVlLmdldFRpbWUoKSA9PT0gb3RoZXIuZ2V0VGltZSgpO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuLyoqXG4gKiBpcy5ob3N0ZWRcbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBob3N0ZWQgYnkgYGhvc3RgLlxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlIHRvIHRlc3RcbiAqIEBwYXJhbSB7TWl4ZWR9IGhvc3QgaG9zdCB0byB0ZXN0IHdpdGhcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgYHZhbHVlYCBpcyBob3N0ZWQgYnkgYGhvc3RgLCBmYWxzZSBvdGhlcndpc2VcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuaXMuaG9zdGVkID0gZnVuY3Rpb24gKHZhbHVlLCBob3N0KSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIGhvc3RbdmFsdWVdO1xuICByZXR1cm4gdHlwZSA9PT0gJ29iamVjdCcgPyAhIWhvc3RbdmFsdWVdIDogIU5PTl9IT1NUX1RZUEVTW3R5cGVdO1xufTtcblxuLyoqXG4gKiBpcy5pbnN0YW5jZVxuICogVGVzdCBpZiBgdmFsdWVgIGlzIGFuIGluc3RhbmNlIG9mIGBjb25zdHJ1Y3RvcmAuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBgdmFsdWVgIGlzIGFuIGluc3RhbmNlIG9mIGBjb25zdHJ1Y3RvcmBcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuaXMuaW5zdGFuY2UgPSBpc1snaW5zdGFuY2VvZiddID0gZnVuY3Rpb24gKHZhbHVlLCBjb25zdHJ1Y3Rvcikge1xuICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBjb25zdHJ1Y3Rvcjtcbn07XG5cbi8qKlxuICogaXMubmlsIC8gaXMubnVsbFxuICogVGVzdCBpZiBgdmFsdWVgIGlzIG51bGwuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBgdmFsdWVgIGlzIG51bGwsIGZhbHNlIG90aGVyd2lzZVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5pcy5uaWwgPSBpc1snbnVsbCddID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA9PT0gbnVsbDtcbn07XG5cbi8qKlxuICogaXMudW5kZWYgLyBpcy51bmRlZmluZWRcbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyB1bmRlZmluZWQuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBgdmFsdWVgIGlzIHVuZGVmaW5lZCwgZmFsc2Ugb3RoZXJ3aXNlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmlzLnVuZGVmID0gaXMudW5kZWZpbmVkID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnO1xufTtcblxuLyoqXG4gKiBUZXN0IGFyZ3VtZW50cy5cbiAqL1xuXG4vKipcbiAqIGlzLmFyZ3NcbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBhbiBhcmd1bWVudHMgb2JqZWN0LlxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgYHZhbHVlYCBpcyBhbiBhcmd1bWVudHMgb2JqZWN0LCBmYWxzZSBvdGhlcndpc2VcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuaXMuYXJncyA9IGlzLmFyZ3VtZW50cyA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICB2YXIgaXNTdGFuZGFyZEFyZ3VtZW50cyA9IHRvU3RyLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBBcmd1bWVudHNdJztcbiAgdmFyIGlzT2xkQXJndW1lbnRzID0gIWlzLmFycmF5KHZhbHVlKSAmJiBpcy5hcnJheWxpa2UodmFsdWUpICYmIGlzLm9iamVjdCh2YWx1ZSkgJiYgaXMuZm4odmFsdWUuY2FsbGVlKTtcbiAgcmV0dXJuIGlzU3RhbmRhcmRBcmd1bWVudHMgfHwgaXNPbGRBcmd1bWVudHM7XG59O1xuXG4vKipcbiAqIFRlc3QgYXJyYXkuXG4gKi9cblxuLyoqXG4gKiBpcy5hcnJheVxuICogVGVzdCBpZiAndmFsdWUnIGlzIGFuIGFycmF5LlxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgYHZhbHVlYCBpcyBhbiBhcnJheSwgZmFsc2Ugb3RoZXJ3aXNlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmlzLmFycmF5ID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIHRvU3RyLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBBcnJheV0nO1xufTtcblxuLyoqXG4gKiBpcy5hcmd1bWVudHMuZW1wdHlcbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBhbiBlbXB0eSBhcmd1bWVudHMgb2JqZWN0LlxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgYHZhbHVlYCBpcyBhbiBlbXB0eSBhcmd1bWVudHMgb2JqZWN0LCBmYWxzZSBvdGhlcndpc2VcbiAqIEBhcGkgcHVibGljXG4gKi9cbmlzLmFyZ3MuZW1wdHkgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIGlzLmFyZ3ModmFsdWUpICYmIHZhbHVlLmxlbmd0aCA9PT0gMDtcbn07XG5cbi8qKlxuICogaXMuYXJyYXkuZW1wdHlcbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBhbiBlbXB0eSBhcnJheS5cbiAqXG4gKiBAcGFyYW0ge01peGVkfSB2YWx1ZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGB2YWx1ZWAgaXMgYW4gZW1wdHkgYXJyYXksIGZhbHNlIG90aGVyd2lzZVxuICogQGFwaSBwdWJsaWNcbiAqL1xuaXMuYXJyYXkuZW1wdHkgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIGlzLmFycmF5KHZhbHVlKSAmJiB2YWx1ZS5sZW5ndGggPT09IDA7XG59O1xuXG4vKipcbiAqIGlzLmFycmF5bGlrZVxuICogVGVzdCBpZiBgdmFsdWVgIGlzIGFuIGFycmF5bGlrZSBvYmplY3QuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBgdmFsdWVgIGlzIGFuIGFyZ3VtZW50cyBvYmplY3QsIGZhbHNlIG90aGVyd2lzZVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5pcy5hcnJheWxpa2UgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuICEhdmFsdWUgJiYgIWlzLmJvb2wodmFsdWUpXG4gICAgJiYgb3ducy5jYWxsKHZhbHVlLCAnbGVuZ3RoJylcbiAgICAmJiBpc0Zpbml0ZSh2YWx1ZS5sZW5ndGgpXG4gICAgJiYgaXMubnVtYmVyKHZhbHVlLmxlbmd0aClcbiAgICAmJiB2YWx1ZS5sZW5ndGggPj0gMDtcbn07XG5cbi8qKlxuICogVGVzdCBib29sZWFuLlxuICovXG5cbi8qKlxuICogaXMuYm9vbFxuICogVGVzdCBpZiBgdmFsdWVgIGlzIGEgYm9vbGVhbi5cbiAqXG4gKiBAcGFyYW0ge01peGVkfSB2YWx1ZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGB2YWx1ZWAgaXMgYSBib29sZWFuLCBmYWxzZSBvdGhlcndpc2VcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuaXMuYm9vbCA9IGlzWydib29sZWFuJ10gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIHRvU3RyLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBCb29sZWFuXSc7XG59O1xuXG4vKipcbiAqIGlzLmZhbHNlXG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgZmFsc2UuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBgdmFsdWVgIGlzIGZhbHNlLCBmYWxzZSBvdGhlcndpc2VcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuaXNbJ2ZhbHNlJ10gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIGlzLmJvb2wodmFsdWUpICYmIEJvb2xlYW4oTnVtYmVyKHZhbHVlKSkgPT09IGZhbHNlO1xufTtcblxuLyoqXG4gKiBpcy50cnVlXG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgdHJ1ZS5cbiAqXG4gKiBAcGFyYW0ge01peGVkfSB2YWx1ZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGB2YWx1ZWAgaXMgdHJ1ZSwgZmFsc2Ugb3RoZXJ3aXNlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmlzWyd0cnVlJ10gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIGlzLmJvb2wodmFsdWUpICYmIEJvb2xlYW4oTnVtYmVyKHZhbHVlKSkgPT09IHRydWU7XG59O1xuXG4vKipcbiAqIFRlc3QgZGF0ZS5cbiAqL1xuXG4vKipcbiAqIGlzLmRhdGVcbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBhIGRhdGUuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBgdmFsdWVgIGlzIGEgZGF0ZSwgZmFsc2Ugb3RoZXJ3aXNlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmlzLmRhdGUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIHRvU3RyLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBEYXRlXSc7XG59O1xuXG4vKipcbiAqIGlzLmRhdGUudmFsaWRcbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGRhdGUuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge0Jvb2xlYW59IHRydWUgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGRhdGUsIGZhbHNlIG90aGVyd2lzZVxuICovXG5pcy5kYXRlLnZhbGlkID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiBpcy5kYXRlKHZhbHVlKSAmJiAhaXNOYU4oTnVtYmVyKHZhbHVlKSk7XG59O1xuXG4vKipcbiAqIFRlc3QgZWxlbWVudC5cbiAqL1xuXG4vKipcbiAqIGlzLmVsZW1lbnRcbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBhbiBodG1sIGVsZW1lbnQuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBgdmFsdWVgIGlzIGFuIEhUTUwgRWxlbWVudCwgZmFsc2Ugb3RoZXJ3aXNlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmlzLmVsZW1lbnQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9PSB1bmRlZmluZWRcbiAgICAmJiB0eXBlb2YgSFRNTEVsZW1lbnQgIT09ICd1bmRlZmluZWQnXG4gICAgJiYgdmFsdWUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudFxuICAgICYmIHZhbHVlLm5vZGVUeXBlID09PSAxO1xufTtcblxuLyoqXG4gKiBUZXN0IGVycm9yLlxuICovXG5cbi8qKlxuICogaXMuZXJyb3JcbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBhbiBlcnJvciBvYmplY3QuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBgdmFsdWVgIGlzIGFuIGVycm9yIG9iamVjdCwgZmFsc2Ugb3RoZXJ3aXNlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmlzLmVycm9yID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiB0b1N0ci5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgRXJyb3JdJztcbn07XG5cbi8qKlxuICogVGVzdCBmdW5jdGlvbi5cbiAqL1xuXG4vKipcbiAqIGlzLmZuIC8gaXMuZnVuY3Rpb24gKGRlcHJlY2F0ZWQpXG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgYSBmdW5jdGlvbi5cbiAqXG4gKiBAcGFyYW0ge01peGVkfSB2YWx1ZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGB2YWx1ZWAgaXMgYSBmdW5jdGlvbiwgZmFsc2Ugb3RoZXJ3aXNlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmlzLmZuID0gaXNbJ2Z1bmN0aW9uJ10gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgdmFyIGlzQWxlcnQgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB2YWx1ZSA9PT0gd2luZG93LmFsZXJ0O1xuICBpZiAoaXNBbGVydCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHZhciBzdHIgPSB0b1N0ci5jYWxsKHZhbHVlKTtcbiAgcmV0dXJuIHN0ciA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJyB8fCBzdHIgPT09ICdbb2JqZWN0IEdlbmVyYXRvckZ1bmN0aW9uXScgfHwgc3RyID09PSAnW29iamVjdCBBc3luY0Z1bmN0aW9uXSc7XG59O1xuXG4vKipcbiAqIFRlc3QgbnVtYmVyLlxuICovXG5cbi8qKlxuICogaXMubnVtYmVyXG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgYSBudW1iZXIuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBgdmFsdWVgIGlzIGEgbnVtYmVyLCBmYWxzZSBvdGhlcndpc2VcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuaXMubnVtYmVyID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiB0b1N0ci5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgTnVtYmVyXSc7XG59O1xuXG4vKipcbiAqIGlzLmluZmluaXRlXG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgcG9zaXRpdmUgb3IgbmVnYXRpdmUgaW5maW5pdHkuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBgdmFsdWVgIGlzIHBvc2l0aXZlIG9yIG5lZ2F0aXZlIEluZmluaXR5LCBmYWxzZSBvdGhlcndpc2VcbiAqIEBhcGkgcHVibGljXG4gKi9cbmlzLmluZmluaXRlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA9PT0gSW5maW5pdHkgfHwgdmFsdWUgPT09IC1JbmZpbml0eTtcbn07XG5cbi8qKlxuICogaXMuZGVjaW1hbFxuICogVGVzdCBpZiBgdmFsdWVgIGlzIGEgZGVjaW1hbCBudW1iZXIuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBgdmFsdWVgIGlzIGEgZGVjaW1hbCBudW1iZXIsIGZhbHNlIG90aGVyd2lzZVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5pcy5kZWNpbWFsID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiBpcy5udW1iZXIodmFsdWUpICYmICFpc0FjdHVhbE5hTih2YWx1ZSkgJiYgIWlzLmluZmluaXRlKHZhbHVlKSAmJiB2YWx1ZSAlIDEgIT09IDA7XG59O1xuXG4vKipcbiAqIGlzLmRpdmlzaWJsZUJ5XG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgZGl2aXNpYmxlIGJ5IGBuYC5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHBhcmFtIHtOdW1iZXJ9IG4gZGl2aWRlbmRcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgYHZhbHVlYCBpcyBkaXZpc2libGUgYnkgYG5gLCBmYWxzZSBvdGhlcndpc2VcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuaXMuZGl2aXNpYmxlQnkgPSBmdW5jdGlvbiAodmFsdWUsIG4pIHtcbiAgdmFyIGlzRGl2aWRlbmRJbmZpbml0ZSA9IGlzLmluZmluaXRlKHZhbHVlKTtcbiAgdmFyIGlzRGl2aXNvckluZmluaXRlID0gaXMuaW5maW5pdGUobik7XG4gIHZhciBpc05vblplcm9OdW1iZXIgPSBpcy5udW1iZXIodmFsdWUpICYmICFpc0FjdHVhbE5hTih2YWx1ZSkgJiYgaXMubnVtYmVyKG4pICYmICFpc0FjdHVhbE5hTihuKSAmJiBuICE9PSAwO1xuICByZXR1cm4gaXNEaXZpZGVuZEluZmluaXRlIHx8IGlzRGl2aXNvckluZmluaXRlIHx8IChpc05vblplcm9OdW1iZXIgJiYgdmFsdWUgJSBuID09PSAwKTtcbn07XG5cbi8qKlxuICogaXMuaW50ZWdlclxuICogVGVzdCBpZiBgdmFsdWVgIGlzIGFuIGludGVnZXIuXG4gKlxuICogQHBhcmFtIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgYHZhbHVlYCBpcyBhbiBpbnRlZ2VyLCBmYWxzZSBvdGhlcndpc2VcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuaXMuaW50ZWdlciA9IGlzWydpbnQnXSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICByZXR1cm4gaXMubnVtYmVyKHZhbHVlKSAmJiAhaXNBY3R1YWxOYU4odmFsdWUpICYmIHZhbHVlICUgMSA9PT0gMDtcbn07XG5cbi8qKlxuICogaXMubWF4aW11bVxuICogVGVzdCBpZiBgdmFsdWVgIGlzIGdyZWF0ZXIgdGhhbiAnb3RoZXJzJyB2YWx1ZXMuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEBwYXJhbSB7QXJyYXl9IG90aGVycyB2YWx1ZXMgdG8gY29tcGFyZSB3aXRoXG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGB2YWx1ZWAgaXMgZ3JlYXRlciB0aGFuIGBvdGhlcnNgIHZhbHVlc1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5pcy5tYXhpbXVtID0gZnVuY3Rpb24gKHZhbHVlLCBvdGhlcnMpIHtcbiAgaWYgKGlzQWN0dWFsTmFOKHZhbHVlKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ05hTiBpcyBub3QgYSB2YWxpZCB2YWx1ZScpO1xuICB9IGVsc2UgaWYgKCFpcy5hcnJheWxpa2Uob3RoZXJzKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ3NlY29uZCBhcmd1bWVudCBtdXN0IGJlIGFycmF5LWxpa2UnKTtcbiAgfVxuICB2YXIgbGVuID0gb3RoZXJzLmxlbmd0aDtcblxuICB3aGlsZSAoLS1sZW4gPj0gMCkge1xuICAgIGlmICh2YWx1ZSA8IG90aGVyc1tsZW5dKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuXG4vKipcbiAqIGlzLm1pbmltdW1cbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBsZXNzIHRoYW4gYG90aGVyc2AgdmFsdWVzLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSB2YWx1ZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcGFyYW0ge0FycmF5fSBvdGhlcnMgdmFsdWVzIHRvIGNvbXBhcmUgd2l0aFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBgdmFsdWVgIGlzIGxlc3MgdGhhbiBgb3RoZXJzYCB2YWx1ZXNcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuaXMubWluaW11bSA9IGZ1bmN0aW9uICh2YWx1ZSwgb3RoZXJzKSB7XG4gIGlmIChpc0FjdHVhbE5hTih2YWx1ZSkpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdOYU4gaXMgbm90IGEgdmFsaWQgdmFsdWUnKTtcbiAgfSBlbHNlIGlmICghaXMuYXJyYXlsaWtlKG90aGVycykpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdzZWNvbmQgYXJndW1lbnQgbXVzdCBiZSBhcnJheS1saWtlJyk7XG4gIH1cbiAgdmFyIGxlbiA9IG90aGVycy5sZW5ndGg7XG5cbiAgd2hpbGUgKC0tbGVuID49IDApIHtcbiAgICBpZiAodmFsdWUgPiBvdGhlcnNbbGVuXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcblxuLyoqXG4gKiBpcy5uYW5cbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBub3QgYSBudW1iZXIuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBgdmFsdWVgIGlzIG5vdCBhIG51bWJlciwgZmFsc2Ugb3RoZXJ3aXNlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmlzLm5hbiA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICByZXR1cm4gIWlzLm51bWJlcih2YWx1ZSkgfHwgdmFsdWUgIT09IHZhbHVlO1xufTtcblxuLyoqXG4gKiBpcy5ldmVuXG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgYW4gZXZlbiBudW1iZXIuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgYHZhbHVlYCBpcyBhbiBldmVuIG51bWJlciwgZmFsc2Ugb3RoZXJ3aXNlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmlzLmV2ZW4gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIGlzLmluZmluaXRlKHZhbHVlKSB8fCAoaXMubnVtYmVyKHZhbHVlKSAmJiB2YWx1ZSA9PT0gdmFsdWUgJiYgdmFsdWUgJSAyID09PSAwKTtcbn07XG5cbi8qKlxuICogaXMub2RkXG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgYW4gb2RkIG51bWJlci5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBgdmFsdWVgIGlzIGFuIG9kZCBudW1iZXIsIGZhbHNlIG90aGVyd2lzZVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5pcy5vZGQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIGlzLmluZmluaXRlKHZhbHVlKSB8fCAoaXMubnVtYmVyKHZhbHVlKSAmJiB2YWx1ZSA9PT0gdmFsdWUgJiYgdmFsdWUgJSAyICE9PSAwKTtcbn07XG5cbi8qKlxuICogaXMuZ2VcbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBncmVhdGVyIHRoYW4gb3IgZXF1YWwgdG8gYG90aGVyYC5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHBhcmFtIHtOdW1iZXJ9IG90aGVyIHZhbHVlIHRvIGNvbXBhcmUgd2l0aFxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuaXMuZ2UgPSBmdW5jdGlvbiAodmFsdWUsIG90aGVyKSB7XG4gIGlmIChpc0FjdHVhbE5hTih2YWx1ZSkgfHwgaXNBY3R1YWxOYU4ob3RoZXIpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignTmFOIGlzIG5vdCBhIHZhbGlkIHZhbHVlJyk7XG4gIH1cbiAgcmV0dXJuICFpcy5pbmZpbml0ZSh2YWx1ZSkgJiYgIWlzLmluZmluaXRlKG90aGVyKSAmJiB2YWx1ZSA+PSBvdGhlcjtcbn07XG5cbi8qKlxuICogaXMuZ3RcbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBncmVhdGVyIHRoYW4gYG90aGVyYC5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHBhcmFtIHtOdW1iZXJ9IG90aGVyIHZhbHVlIHRvIGNvbXBhcmUgd2l0aFxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuaXMuZ3QgPSBmdW5jdGlvbiAodmFsdWUsIG90aGVyKSB7XG4gIGlmIChpc0FjdHVhbE5hTih2YWx1ZSkgfHwgaXNBY3R1YWxOYU4ob3RoZXIpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignTmFOIGlzIG5vdCBhIHZhbGlkIHZhbHVlJyk7XG4gIH1cbiAgcmV0dXJuICFpcy5pbmZpbml0ZSh2YWx1ZSkgJiYgIWlzLmluZmluaXRlKG90aGVyKSAmJiB2YWx1ZSA+IG90aGVyO1xufTtcblxuLyoqXG4gKiBpcy5sZVxuICogVGVzdCBpZiBgdmFsdWVgIGlzIGxlc3MgdGhhbiBvciBlcXVhbCB0byBgb3RoZXJgLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSB2YWx1ZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcGFyYW0ge051bWJlcn0gb3RoZXIgdmFsdWUgdG8gY29tcGFyZSB3aXRoXG4gKiBAcmV0dXJuIHtCb29sZWFufSBpZiAndmFsdWUnIGlzIGxlc3MgdGhhbiBvciBlcXVhbCB0byAnb3RoZXInXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmlzLmxlID0gZnVuY3Rpb24gKHZhbHVlLCBvdGhlcikge1xuICBpZiAoaXNBY3R1YWxOYU4odmFsdWUpIHx8IGlzQWN0dWFsTmFOKG90aGVyKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ05hTiBpcyBub3QgYSB2YWxpZCB2YWx1ZScpO1xuICB9XG4gIHJldHVybiAhaXMuaW5maW5pdGUodmFsdWUpICYmICFpcy5pbmZpbml0ZShvdGhlcikgJiYgdmFsdWUgPD0gb3RoZXI7XG59O1xuXG4vKipcbiAqIGlzLmx0XG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgbGVzcyB0aGFuIGBvdGhlcmAuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEBwYXJhbSB7TnVtYmVyfSBvdGhlciB2YWx1ZSB0byBjb21wYXJlIHdpdGhcbiAqIEByZXR1cm4ge0Jvb2xlYW59IGlmIGB2YWx1ZWAgaXMgbGVzcyB0aGFuIGBvdGhlcmBcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuaXMubHQgPSBmdW5jdGlvbiAodmFsdWUsIG90aGVyKSB7XG4gIGlmIChpc0FjdHVhbE5hTih2YWx1ZSkgfHwgaXNBY3R1YWxOYU4ob3RoZXIpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignTmFOIGlzIG5vdCBhIHZhbGlkIHZhbHVlJyk7XG4gIH1cbiAgcmV0dXJuICFpcy5pbmZpbml0ZSh2YWx1ZSkgJiYgIWlzLmluZmluaXRlKG90aGVyKSAmJiB2YWx1ZSA8IG90aGVyO1xufTtcblxuLyoqXG4gKiBpcy53aXRoaW5cbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyB3aXRoaW4gYHN0YXJ0YCBhbmQgYGZpbmlzaGAuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEBwYXJhbSB7TnVtYmVyfSBzdGFydCBsb3dlciBib3VuZFxuICogQHBhcmFtIHtOdW1iZXJ9IGZpbmlzaCB1cHBlciBib3VuZFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiAndmFsdWUnIGlzIGlzIHdpdGhpbiAnc3RhcnQnIGFuZCAnZmluaXNoJ1xuICogQGFwaSBwdWJsaWNcbiAqL1xuaXMud2l0aGluID0gZnVuY3Rpb24gKHZhbHVlLCBzdGFydCwgZmluaXNoKSB7XG4gIGlmIChpc0FjdHVhbE5hTih2YWx1ZSkgfHwgaXNBY3R1YWxOYU4oc3RhcnQpIHx8IGlzQWN0dWFsTmFOKGZpbmlzaCkpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdOYU4gaXMgbm90IGEgdmFsaWQgdmFsdWUnKTtcbiAgfSBlbHNlIGlmICghaXMubnVtYmVyKHZhbHVlKSB8fCAhaXMubnVtYmVyKHN0YXJ0KSB8fCAhaXMubnVtYmVyKGZpbmlzaCkpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdhbGwgYXJndW1lbnRzIG11c3QgYmUgbnVtYmVycycpO1xuICB9XG4gIHZhciBpc0FueUluZmluaXRlID0gaXMuaW5maW5pdGUodmFsdWUpIHx8IGlzLmluZmluaXRlKHN0YXJ0KSB8fCBpcy5pbmZpbml0ZShmaW5pc2gpO1xuICByZXR1cm4gaXNBbnlJbmZpbml0ZSB8fCAodmFsdWUgPj0gc3RhcnQgJiYgdmFsdWUgPD0gZmluaXNoKTtcbn07XG5cbi8qKlxuICogVGVzdCBvYmplY3QuXG4gKi9cblxuLyoqXG4gKiBpcy5vYmplY3RcbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBhbiBvYmplY3QuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBgdmFsdWVgIGlzIGFuIG9iamVjdCwgZmFsc2Ugb3RoZXJ3aXNlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5pcy5vYmplY3QgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIHRvU3RyLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBPYmplY3RdJztcbn07XG5cbi8qKlxuICogaXMucHJpbWl0aXZlXG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgYSBwcmltaXRpdmUuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBgdmFsdWVgIGlzIGEgcHJpbWl0aXZlLCBmYWxzZSBvdGhlcndpc2VcbiAqIEBhcGkgcHVibGljXG4gKi9cbmlzLnByaW1pdGl2ZSA9IGZ1bmN0aW9uIGlzUHJpbWl0aXZlKHZhbHVlKSB7XG4gIGlmICghdmFsdWUpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyB8fCBpcy5vYmplY3QodmFsdWUpIHx8IGlzLmZuKHZhbHVlKSB8fCBpcy5hcnJheSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59O1xuXG4vKipcbiAqIGlzLmhhc2hcbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBhIGhhc2ggLSBhIHBsYWluIG9iamVjdCBsaXRlcmFsLlxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgYHZhbHVlYCBpcyBhIGhhc2gsIGZhbHNlIG90aGVyd2lzZVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5pcy5oYXNoID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiBpcy5vYmplY3QodmFsdWUpICYmIHZhbHVlLmNvbnN0cnVjdG9yID09PSBPYmplY3QgJiYgIXZhbHVlLm5vZGVUeXBlICYmICF2YWx1ZS5zZXRJbnRlcnZhbDtcbn07XG5cbi8qKlxuICogVGVzdCByZWdleHAuXG4gKi9cblxuLyoqXG4gKiBpcy5yZWdleHBcbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBhIHJlZ3VsYXIgZXhwcmVzc2lvbi5cbiAqXG4gKiBAcGFyYW0ge01peGVkfSB2YWx1ZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGB2YWx1ZWAgaXMgYSByZWdleHAsIGZhbHNlIG90aGVyd2lzZVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5pcy5yZWdleHAgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIHRvU3RyLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBSZWdFeHBdJztcbn07XG5cbi8qKlxuICogVGVzdCBzdHJpbmcuXG4gKi9cblxuLyoqXG4gKiBpcy5zdHJpbmdcbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBhIHN0cmluZy5cbiAqXG4gKiBAcGFyYW0ge01peGVkfSB2YWx1ZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmICd2YWx1ZScgaXMgYSBzdHJpbmcsIGZhbHNlIG90aGVyd2lzZVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5pcy5zdHJpbmcgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIHRvU3RyLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBTdHJpbmddJztcbn07XG5cbi8qKlxuICogVGVzdCBiYXNlNjQgc3RyaW5nLlxuICovXG5cbi8qKlxuICogaXMuYmFzZTY0XG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBiYXNlNjQgZW5jb2RlZCBzdHJpbmcuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiAndmFsdWUnIGlzIGEgYmFzZTY0IGVuY29kZWQgc3RyaW5nLCBmYWxzZSBvdGhlcndpc2VcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuaXMuYmFzZTY0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiBpcy5zdHJpbmcodmFsdWUpICYmICghdmFsdWUubGVuZ3RoIHx8IGJhc2U2NFJlZ2V4LnRlc3QodmFsdWUpKTtcbn07XG5cbi8qKlxuICogVGVzdCBiYXNlNjQgc3RyaW5nLlxuICovXG5cbi8qKlxuICogaXMuaGV4XG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBoZXggZW5jb2RlZCBzdHJpbmcuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiAndmFsdWUnIGlzIGEgaGV4IGVuY29kZWQgc3RyaW5nLCBmYWxzZSBvdGhlcndpc2VcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuaXMuaGV4ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiBpcy5zdHJpbmcodmFsdWUpICYmICghdmFsdWUubGVuZ3RoIHx8IGhleFJlZ2V4LnRlc3QodmFsdWUpKTtcbn07XG5cbi8qKlxuICogaXMuc3ltYm9sXG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgYW4gRVM2IFN5bWJvbFxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgYHZhbHVlYCBpcyBhIFN5bWJvbCwgZmFsc2Ugb3RoZXJpc2VcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuaXMuc3ltYm9sID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIHRvU3RyLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBTeW1ib2xdJyAmJiB0eXBlb2Ygc3ltYm9sVmFsdWVPZi5jYWxsKHZhbHVlKSA9PT0gJ3N5bWJvbCc7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2lzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0Jztcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9saWIvaW5kZXgnKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zaG9ydGlkL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxudmFyIGFscGhhYmV0ID0gcmVxdWlyZSgnLi9hbHBoYWJldCcpO1xudmFyIGVuY29kZSA9IHJlcXVpcmUoJy4vZW5jb2RlJyk7XG52YXIgZGVjb2RlID0gcmVxdWlyZSgnLi9kZWNvZGUnKTtcbnZhciBidWlsZCA9IHJlcXVpcmUoJy4vYnVpbGQnKTtcbnZhciBpc1ZhbGlkID0gcmVxdWlyZSgnLi9pcy12YWxpZCcpO1xuXG4vLyBpZiB5b3UgYXJlIHVzaW5nIGNsdXN0ZXIgb3IgbXVsdGlwbGUgc2VydmVycyB1c2UgdGhpcyB0byBtYWtlIGVhY2ggaW5zdGFuY2Vcbi8vIGhhcyBhIHVuaXF1ZSB2YWx1ZSBmb3Igd29ya2VyXG4vLyBOb3RlOiBJIGRvbid0IGtub3cgaWYgdGhpcyBpcyBhdXRvbWF0aWNhbGx5IHNldCB3aGVuIHVzaW5nIHRoaXJkXG4vLyBwYXJ0eSBjbHVzdGVyIHNvbHV0aW9ucyBzdWNoIGFzIHBtMi5cbnZhciBjbHVzdGVyV29ya2VySWQgPSByZXF1aXJlKCcuL3V0aWwvY2x1c3Rlci13b3JrZXItaWQnKSB8fCAwO1xuXG4vKipcbiAqIFNldCB0aGUgc2VlZC5cbiAqIEhpZ2hseSByZWNvbW1lbmRlZCBpZiB5b3UgZG9uJ3Qgd2FudCBwZW9wbGUgdG8gdHJ5IHRvIGZpZ3VyZSBvdXQgeW91ciBpZCBzY2hlbWEuXG4gKiBleHBvc2VkIGFzIHNob3J0aWQuc2VlZChpbnQpXG4gKiBAcGFyYW0gc2VlZCBJbnRlZ2VyIHZhbHVlIHRvIHNlZWQgdGhlIHJhbmRvbSBhbHBoYWJldC4gIEFMV0FZUyBVU0UgVEhFIFNBTUUgU0VFRCBvciB5b3UgbWlnaHQgZ2V0IG92ZXJsYXBzLlxuICovXG5mdW5jdGlvbiBzZWVkKHNlZWRWYWx1ZSkge1xuICAgIGFscGhhYmV0LnNlZWQoc2VlZFZhbHVlKTtcbiAgICByZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8qKlxuICogU2V0IHRoZSBjbHVzdGVyIHdvcmtlciBvciBtYWNoaW5lIGlkXG4gKiBleHBvc2VkIGFzIHNob3J0aWQud29ya2VyKGludClcbiAqIEBwYXJhbSB3b3JrZXJJZCB3b3JrZXIgbXVzdCBiZSBwb3NpdGl2ZSBpbnRlZ2VyLiAgTnVtYmVyIGxlc3MgdGhhbiAxNiBpcyByZWNvbW1lbmRlZC5cbiAqIHJldHVybnMgc2hvcnRpZCBtb2R1bGUgc28gaXQgY2FuIGJlIGNoYWluZWQuXG4gKi9cbmZ1bmN0aW9uIHdvcmtlcih3b3JrZXJJZCkge1xuICAgIGNsdXN0ZXJXb3JrZXJJZCA9IHdvcmtlcklkO1xuICAgIHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLyoqXG4gKlxuICogc2V0cyBuZXcgY2hhcmFjdGVycyB0byB1c2UgaW4gdGhlIGFscGhhYmV0XG4gKiByZXR1cm5zIHRoZSBzaHVmZmxlZCBhbHBoYWJldFxuICovXG5mdW5jdGlvbiBjaGFyYWN0ZXJzKG5ld0NoYXJhY3RlcnMpIHtcbiAgICBpZiAobmV3Q2hhcmFjdGVycyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGFscGhhYmV0LmNoYXJhY3RlcnMobmV3Q2hhcmFjdGVycyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFscGhhYmV0LnNodWZmbGVkKCk7XG59XG5cbi8qKlxuICogR2VuZXJhdGUgdW5pcXVlIGlkXG4gKiBSZXR1cm5zIHN0cmluZyBpZFxuICovXG5mdW5jdGlvbiBnZW5lcmF0ZSgpIHtcbiAgcmV0dXJuIGJ1aWxkKGNsdXN0ZXJXb3JrZXJJZCk7XG59XG5cbi8vIEV4cG9ydCBhbGwgb3RoZXIgZnVuY3Rpb25zIGFzIHByb3BlcnRpZXMgb2YgdGhlIGdlbmVyYXRlIGZ1bmN0aW9uXG5tb2R1bGUuZXhwb3J0cyA9IGdlbmVyYXRlO1xubW9kdWxlLmV4cG9ydHMuZ2VuZXJhdGUgPSBnZW5lcmF0ZTtcbm1vZHVsZS5leHBvcnRzLnNlZWQgPSBzZWVkO1xubW9kdWxlLmV4cG9ydHMud29ya2VyID0gd29ya2VyO1xubW9kdWxlLmV4cG9ydHMuY2hhcmFjdGVycyA9IGNoYXJhY3RlcnM7XG5tb2R1bGUuZXhwb3J0cy5kZWNvZGUgPSBkZWNvZGU7XG5tb2R1bGUuZXhwb3J0cy5pc1ZhbGlkID0gaXNWYWxpZDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zaG9ydGlkL2xpYi9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbnZhciByYW5kb21Gcm9tU2VlZCA9IHJlcXVpcmUoJy4vcmFuZG9tL3JhbmRvbS1mcm9tLXNlZWQnKTtcblxudmFyIE9SSUdJTkFMID0gJzAxMjM0NTY3ODlhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ekFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaXy0nO1xudmFyIGFscGhhYmV0O1xudmFyIHByZXZpb3VzU2VlZDtcblxudmFyIHNodWZmbGVkO1xuXG5mdW5jdGlvbiByZXNldCgpIHtcbiAgICBzaHVmZmxlZCA9IGZhbHNlO1xufVxuXG5mdW5jdGlvbiBzZXRDaGFyYWN0ZXJzKF9hbHBoYWJldF8pIHtcbiAgICBpZiAoIV9hbHBoYWJldF8pIHtcbiAgICAgICAgaWYgKGFscGhhYmV0ICE9PSBPUklHSU5BTCkge1xuICAgICAgICAgICAgYWxwaGFiZXQgPSBPUklHSU5BTDtcbiAgICAgICAgICAgIHJlc2V0KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChfYWxwaGFiZXRfID09PSBhbHBoYWJldCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKF9hbHBoYWJldF8ubGVuZ3RoICE9PSBPUklHSU5BTC5sZW5ndGgpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDdXN0b20gYWxwaGFiZXQgZm9yIHNob3J0aWQgbXVzdCBiZSAnICsgT1JJR0lOQUwubGVuZ3RoICsgJyB1bmlxdWUgY2hhcmFjdGVycy4gWW91IHN1Ym1pdHRlZCAnICsgX2FscGhhYmV0Xy5sZW5ndGggKyAnIGNoYXJhY3RlcnM6ICcgKyBfYWxwaGFiZXRfKTtcbiAgICB9XG5cbiAgICB2YXIgdW5pcXVlID0gX2FscGhhYmV0Xy5zcGxpdCgnJykuZmlsdGVyKGZ1bmN0aW9uKGl0ZW0sIGluZCwgYXJyKXtcbiAgICAgICByZXR1cm4gaW5kICE9PSBhcnIubGFzdEluZGV4T2YoaXRlbSk7XG4gICAgfSk7XG5cbiAgICBpZiAodW5pcXVlLmxlbmd0aCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0N1c3RvbSBhbHBoYWJldCBmb3Igc2hvcnRpZCBtdXN0IGJlICcgKyBPUklHSU5BTC5sZW5ndGggKyAnIHVuaXF1ZSBjaGFyYWN0ZXJzLiBUaGVzZSBjaGFyYWN0ZXJzIHdlcmUgbm90IHVuaXF1ZTogJyArIHVuaXF1ZS5qb2luKCcsICcpKTtcbiAgICB9XG5cbiAgICBhbHBoYWJldCA9IF9hbHBoYWJldF87XG4gICAgcmVzZXQoKTtcbn1cblxuZnVuY3Rpb24gY2hhcmFjdGVycyhfYWxwaGFiZXRfKSB7XG4gICAgc2V0Q2hhcmFjdGVycyhfYWxwaGFiZXRfKTtcbiAgICByZXR1cm4gYWxwaGFiZXQ7XG59XG5cbmZ1bmN0aW9uIHNldFNlZWQoc2VlZCkge1xuICAgIHJhbmRvbUZyb21TZWVkLnNlZWQoc2VlZCk7XG4gICAgaWYgKHByZXZpb3VzU2VlZCAhPT0gc2VlZCkge1xuICAgICAgICByZXNldCgpO1xuICAgICAgICBwcmV2aW91c1NlZWQgPSBzZWVkO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gc2h1ZmZsZSgpIHtcbiAgICBpZiAoIWFscGhhYmV0KSB7XG4gICAgICAgIHNldENoYXJhY3RlcnMoT1JJR0lOQUwpO1xuICAgIH1cblxuICAgIHZhciBzb3VyY2VBcnJheSA9IGFscGhhYmV0LnNwbGl0KCcnKTtcbiAgICB2YXIgdGFyZ2V0QXJyYXkgPSBbXTtcbiAgICB2YXIgciA9IHJhbmRvbUZyb21TZWVkLm5leHRWYWx1ZSgpO1xuICAgIHZhciBjaGFyYWN0ZXJJbmRleDtcblxuICAgIHdoaWxlIChzb3VyY2VBcnJheS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHIgPSByYW5kb21Gcm9tU2VlZC5uZXh0VmFsdWUoKTtcbiAgICAgICAgY2hhcmFjdGVySW5kZXggPSBNYXRoLmZsb29yKHIgKiBzb3VyY2VBcnJheS5sZW5ndGgpO1xuICAgICAgICB0YXJnZXRBcnJheS5wdXNoKHNvdXJjZUFycmF5LnNwbGljZShjaGFyYWN0ZXJJbmRleCwgMSlbMF0pO1xuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0QXJyYXkuam9pbignJyk7XG59XG5cbmZ1bmN0aW9uIGdldFNodWZmbGVkKCkge1xuICAgIGlmIChzaHVmZmxlZCkge1xuICAgICAgICByZXR1cm4gc2h1ZmZsZWQ7XG4gICAgfVxuICAgIHNodWZmbGVkID0gc2h1ZmZsZSgpO1xuICAgIHJldHVybiBzaHVmZmxlZDtcbn1cblxuLyoqXG4gKiBsb29rdXAgc2h1ZmZsZWQgbGV0dGVyXG4gKiBAcGFyYW0gaW5kZXhcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGxvb2t1cChpbmRleCkge1xuICAgIHZhciBhbHBoYWJldFNodWZmbGVkID0gZ2V0U2h1ZmZsZWQoKTtcbiAgICByZXR1cm4gYWxwaGFiZXRTaHVmZmxlZFtpbmRleF07XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIGNoYXJhY3RlcnM6IGNoYXJhY3RlcnMsXG4gICAgc2VlZDogc2V0U2VlZCxcbiAgICBsb29rdXA6IGxvb2t1cCxcbiAgICBzaHVmZmxlZDogZ2V0U2h1ZmZsZWRcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc2hvcnRpZC9saWIvYWxwaGFiZXQuanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG4vLyBGb3VuZCB0aGlzIHNlZWQtYmFzZWQgcmFuZG9tIGdlbmVyYXRvciBzb21ld2hlcmVcbi8vIEJhc2VkIG9uIFRoZSBDZW50cmFsIFJhbmRvbWl6ZXIgMS4zIChDKSAxOTk3IGJ5IFBhdWwgSG91bGUgKGhvdWxlQG1zYy5jb3JuZWxsLmVkdSlcblxudmFyIHNlZWQgPSAxO1xuXG4vKipcbiAqIHJldHVybiBhIHJhbmRvbSBudW1iZXIgYmFzZWQgb24gYSBzZWVkXG4gKiBAcGFyYW0gc2VlZFxuICogQHJldHVybnMge251bWJlcn1cbiAqL1xuZnVuY3Rpb24gZ2V0TmV4dFZhbHVlKCkge1xuICAgIHNlZWQgPSAoc2VlZCAqIDkzMDEgKyA0OTI5NykgJSAyMzMyODA7XG4gICAgcmV0dXJuIHNlZWQvKDIzMzI4MC4wKTtcbn1cblxuZnVuY3Rpb24gc2V0U2VlZChfc2VlZF8pIHtcbiAgICBzZWVkID0gX3NlZWRfO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBuZXh0VmFsdWU6IGdldE5leHRWYWx1ZSxcbiAgICBzZWVkOiBzZXRTZWVkXG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Nob3J0aWQvbGliL3JhbmRvbS9yYW5kb20tZnJvbS1zZWVkLmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxudmFyIHJhbmRvbUJ5dGUgPSByZXF1aXJlKCcuL3JhbmRvbS9yYW5kb20tYnl0ZScpO1xuXG5mdW5jdGlvbiBlbmNvZGUobG9va3VwLCBudW1iZXIpIHtcbiAgICB2YXIgbG9vcENvdW50ZXIgPSAwO1xuICAgIHZhciBkb25lO1xuXG4gICAgdmFyIHN0ciA9ICcnO1xuXG4gICAgd2hpbGUgKCFkb25lKSB7XG4gICAgICAgIHN0ciA9IHN0ciArIGxvb2t1cCggKCAobnVtYmVyID4+ICg0ICogbG9vcENvdW50ZXIpKSAmIDB4MGYgKSB8IHJhbmRvbUJ5dGUoKSApO1xuICAgICAgICBkb25lID0gbnVtYmVyIDwgKE1hdGgucG93KDE2LCBsb29wQ291bnRlciArIDEgKSApO1xuICAgICAgICBsb29wQ291bnRlcisrO1xuICAgIH1cbiAgICByZXR1cm4gc3RyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGVuY29kZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zaG9ydGlkL2xpYi9lbmNvZGUuanNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgY3J5cHRvID0gdHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcgJiYgKHdpbmRvdy5jcnlwdG8gfHwgd2luZG93Lm1zQ3J5cHRvKTsgLy8gSUUgMTEgdXNlcyB3aW5kb3cubXNDcnlwdG9cblxuZnVuY3Rpb24gcmFuZG9tQnl0ZSgpIHtcbiAgICBpZiAoIWNyeXB0byB8fCAhY3J5cHRvLmdldFJhbmRvbVZhbHVlcykge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjU2KSAmIDB4MzA7XG4gICAgfVxuICAgIHZhciBkZXN0ID0gbmV3IFVpbnQ4QXJyYXkoMSk7XG4gICAgY3J5cHRvLmdldFJhbmRvbVZhbHVlcyhkZXN0KTtcbiAgICByZXR1cm4gZGVzdFswXSAmIDB4MzA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcmFuZG9tQnl0ZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zaG9ydGlkL2xpYi9yYW5kb20vcmFuZG9tLWJ5dGUtYnJvd3Nlci5qc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG52YXIgYWxwaGFiZXQgPSByZXF1aXJlKCcuL2FscGhhYmV0Jyk7XG5cbi8qKlxuICogRGVjb2RlIHRoZSBpZCB0byBnZXQgdGhlIHZlcnNpb24gYW5kIHdvcmtlclxuICogTWFpbmx5IGZvciBkZWJ1Z2dpbmcgYW5kIHRlc3RpbmcuXG4gKiBAcGFyYW0gaWQgLSB0aGUgc2hvcnRpZC1nZW5lcmF0ZWQgaWQuXG4gKi9cbmZ1bmN0aW9uIGRlY29kZShpZCkge1xuICAgIHZhciBjaGFyYWN0ZXJzID0gYWxwaGFiZXQuc2h1ZmZsZWQoKTtcbiAgICByZXR1cm4ge1xuICAgICAgICB2ZXJzaW9uOiBjaGFyYWN0ZXJzLmluZGV4T2YoaWQuc3Vic3RyKDAsIDEpKSAmIDB4MGYsXG4gICAgICAgIHdvcmtlcjogY2hhcmFjdGVycy5pbmRleE9mKGlkLnN1YnN0cigxLCAxKSkgJiAweDBmXG4gICAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkZWNvZGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc2hvcnRpZC9saWIvZGVjb2RlLmpzXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxudmFyIGVuY29kZSA9IHJlcXVpcmUoJy4vZW5jb2RlJyk7XG52YXIgYWxwaGFiZXQgPSByZXF1aXJlKCcuL2FscGhhYmV0Jyk7XG5cbi8vIElnbm9yZSBhbGwgbWlsbGlzZWNvbmRzIGJlZm9yZSBhIGNlcnRhaW4gdGltZSB0byByZWR1Y2UgdGhlIHNpemUgb2YgdGhlIGRhdGUgZW50cm9weSB3aXRob3V0IHNhY3JpZmljaW5nIHVuaXF1ZW5lc3MuXG4vLyBUaGlzIG51bWJlciBzaG91bGQgYmUgdXBkYXRlZCBldmVyeSB5ZWFyIG9yIHNvIHRvIGtlZXAgdGhlIGdlbmVyYXRlZCBpZCBzaG9ydC5cbi8vIFRvIHJlZ2VuZXJhdGUgYG5ldyBEYXRlKCkgLSAwYCBhbmQgYnVtcCB0aGUgdmVyc2lvbi4gQWx3YXlzIGJ1bXAgdGhlIHZlcnNpb24hXG52YXIgUkVEVUNFX1RJTUUgPSAxNDU5NzA3NjA2NTE4O1xuXG4vLyBkb24ndCBjaGFuZ2UgdW5sZXNzIHdlIGNoYW5nZSB0aGUgYWxnb3Mgb3IgUkVEVUNFX1RJTUVcbi8vIG11c3QgYmUgYW4gaW50ZWdlciBhbmQgbGVzcyB0aGFuIDE2XG52YXIgdmVyc2lvbiA9IDY7XG5cbi8vIENvdW50ZXIgaXMgdXNlZCB3aGVuIHNob3J0aWQgaXMgY2FsbGVkIG11bHRpcGxlIHRpbWVzIGluIG9uZSBzZWNvbmQuXG52YXIgY291bnRlcjtcblxuLy8gUmVtZW1iZXIgdGhlIGxhc3QgdGltZSBzaG9ydGlkIHdhcyBjYWxsZWQgaW4gY2FzZSBjb3VudGVyIGlzIG5lZWRlZC5cbnZhciBwcmV2aW91c1NlY29uZHM7XG5cbi8qKlxuICogR2VuZXJhdGUgdW5pcXVlIGlkXG4gKiBSZXR1cm5zIHN0cmluZyBpZFxuICovXG5mdW5jdGlvbiBidWlsZChjbHVzdGVyV29ya2VySWQpIHtcblxuICAgIHZhciBzdHIgPSAnJztcblxuICAgIHZhciBzZWNvbmRzID0gTWF0aC5mbG9vcigoRGF0ZS5ub3coKSAtIFJFRFVDRV9USU1FKSAqIDAuMDAxKTtcblxuICAgIGlmIChzZWNvbmRzID09PSBwcmV2aW91c1NlY29uZHMpIHtcbiAgICAgICAgY291bnRlcisrO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvdW50ZXIgPSAwO1xuICAgICAgICBwcmV2aW91c1NlY29uZHMgPSBzZWNvbmRzO1xuICAgIH1cblxuICAgIHN0ciA9IHN0ciArIGVuY29kZShhbHBoYWJldC5sb29rdXAsIHZlcnNpb24pO1xuICAgIHN0ciA9IHN0ciArIGVuY29kZShhbHBoYWJldC5sb29rdXAsIGNsdXN0ZXJXb3JrZXJJZCk7XG4gICAgaWYgKGNvdW50ZXIgPiAwKSB7XG4gICAgICAgIHN0ciA9IHN0ciArIGVuY29kZShhbHBoYWJldC5sb29rdXAsIGNvdW50ZXIpO1xuICAgIH1cbiAgICBzdHIgPSBzdHIgKyBlbmNvZGUoYWxwaGFiZXQubG9va3VwLCBzZWNvbmRzKTtcblxuICAgIHJldHVybiBzdHI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYnVpbGQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc2hvcnRpZC9saWIvYnVpbGQuanNcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcbnZhciBhbHBoYWJldCA9IHJlcXVpcmUoJy4vYWxwaGFiZXQnKTtcblxuZnVuY3Rpb24gaXNTaG9ydElkKGlkKSB7XG4gICAgaWYgKCFpZCB8fCB0eXBlb2YgaWQgIT09ICdzdHJpbmcnIHx8IGlkLmxlbmd0aCA8IDYgKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICB2YXIgY2hhcmFjdGVycyA9IGFscGhhYmV0LmNoYXJhY3RlcnMoKTtcbiAgICB2YXIgbGVuID0gaWQubGVuZ3RoO1xuICAgIGZvcih2YXIgaSA9IDA7IGkgPCBsZW47aSsrKSB7XG4gICAgICAgIGlmIChjaGFyYWN0ZXJzLmluZGV4T2YoaWRbaV0pID09PSAtMSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzU2hvcnRJZDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zaG9ydGlkL2xpYi9pcy12YWxpZC5qc1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IDA7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc2hvcnRpZC9saWIvdXRpbC9jbHVzdGVyLXdvcmtlci1pZC1icm93c2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxuICogVGhlIE1JVCBMaWNlbnNlIChNSVQpXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTkuIFdpc2UgV2lsZCBXZWJcbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIOKAnFNvZnR3YXJl4oCdKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIOKAnEFTIElT4oCdLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiAqXG4gKiAgQGF1dGhvciA6IE5hdGhhbmFlbCBCcmF1blxuICogIEBjb250YWN0IDogbjh0ei5qc0BnbWFpbC5jb21cbiAqL1xuXG5pbXBvcnQgaXMgZnJvbSAnaXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbWl0dGVyIHtcblx0X2V2ZW50cyA9IHt9O1xuXHRcblx0b24oIGV2dCwgY2IgKSB7XG5cdFx0aWYgKCAhaXMuc3RyaW5nKGV2dCkgJiYgZXZ0IClcblx0XHRcdHJldHVybiBPYmplY3Qua2V5cyhldnQpLmZvckVhY2goayA9PiB0aGlzLm9uKGssIGV2dFtrXSkpO1xuXHRcdFxuXHRcdHRoaXMuX2V2ZW50c1tldnRdID0gdGhpcy5fZXZlbnRzW2V2dF0gfHwgW107XG5cdFx0dGhpcy5fZXZlbnRzW2V2dF0ucHVzaChjYik7XG5cdH1cblx0XG5cdHVuKCBldnQsIGNiICkge1xuXHRcdGlmICggIWlzLnN0cmluZyhldnQpICYmIGV2dCApXG5cdFx0XHRyZXR1cm4gT2JqZWN0LmtleXMoZXZ0KS5mb3JFYWNoKGsgPT4gdGhpcy51bihrLCBldnRba10pKTtcblx0XHRcblx0XHRpZiAoICF0aGlzLl9ldmVudHNbZXZ0XSApIHJldHVybjtcblx0XHRsZXQgaSA9IHRoaXMuX2V2ZW50c1tldnRdLmluZGV4T2YoY2IpO1xuXHRcdHRoaXMuX2V2ZW50c1tldnRdLnNwbGljZShpLCAxKTtcblx0fVxuXHRcblx0ZW1pdCggZXZ0LCAuLi5hcmd6ICkge1xuXHRcdGlmICggIXRoaXMuX2V2ZW50c1tldnRdICkgcmV0dXJuO1xuXHRcdGxldCBsaXN0cyA9IFsuLi50aGlzLl9ldmVudHNbZXZ0XV07XG5cdFx0XG5cdFx0Zm9yICggbGV0IGkgPSAwOyBpIDwgbGlzdHMubGVuZ3RoOyBpKysgKVxuXHRcdFx0bGlzdHNbaV0oLi4uYXJneilcblx0fVxuXHRcblx0YWRkTGlzdGVuZXIoKSB7XG5cdFx0dGhpcy5vbiguLi5hcmd1bWVudHMpO1xuXHR9XG5cdFxuXHRyZW1vdmVMaXN0ZW5lcigpIHtcblx0XHR0aGlzLnVuKC4uLmFyZ3VtZW50cyk7XG5cdH1cblx0XG5cdHJlbW92ZUFsbExpc3RlbmVycygpIHtcblx0XHR0aGlzLl9ldmVudHMgPSB7fTtcblx0fVxuXHRcblx0b25jZSggZXZ0LCBjYiApIHtcblx0XHRsZXQgZm47XG5cdFx0dGhpcy5vbihldnQsIGZuID0gKCAuLi5hcmd6ICkgPT4ge1xuXHRcdFx0dGhpcy51bihldnQsIGZuKTtcblx0XHRcdGNiKC4uLmFyZ3opXG5cdFx0fSk7XG5cdH1cblx0XG5cdFxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlscy9FbWl0dGVyLmpzIiwiLypcbiAqIFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuICogQ29weXJpZ2h0IChjKSAyMDE5LiBXaXNlIFdpbGQgV2ViXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSDigJxTb2Z0d2FyZeKAnSksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCDigJxBUyBJU+KAnSwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4gKlxuICogIEBhdXRob3IgOiBOYXRoYW5hZWwgQnJhdW5cbiAqICBAY29udGFjdCA6IG44dHouanNAZ21haWwuY29tXG4gKi9cblxuY29uc3QgaXMgPSByZXF1aXJlKCdpcycpO1xuXG5leHBvcnQgZnVuY3Rpb24gd2Fsa25TZXQoIG9iaiwgcGF0aCwgdmFsdWUsIHN0YWNrICkge1xuXHRpZiAoIGlzLnN0cmluZyhwYXRoKSApXG5cdFx0cGF0aCA9IHBhdGguc3BsaXQoJy4nKTtcblx0aWYgKCAhcGF0aC5sZW5ndGggKVxuXHRcdHJldHVybiBmYWxzZTtcblx0ZWxzZSBpZiAoIHBhdGgubGVuZ3RoID09IDEgKVxuXHRcdHJldHVybiBvYmpbcGF0aFswXV0gPSBzdGFja1xuXHRcdCAgICAgICAgICAgICAgICAgICAgICA/IFsuLi4ob2JqW3BhdGhbMF1dIHx8IFtdKSwgdmFsdWVdXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgIDogdmFsdWU7XG5cdGVsc2Vcblx0XHRyZXR1cm4gd2Fsa25TZXQoXG5cdFx0XHRvYmpbcGF0aFswXV0gPVxuXHRcdFx0XHRvYmpbcGF0aFswXV0gfHwge30sXG5cdFx0XHRwYXRoLnNsaWNlKDEpLFxuXHRcdFx0dmFsdWUsIHN0YWNrXG5cdFx0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHdhbGtuR2V0KCBvYmosIHBhdGgsIGlzS2V5ICkge1xuXHRpZiAoIGlzLnN0cmluZyhwYXRoKSApXG5cdFx0cGF0aCA9IHBhdGguc3BsaXQoJy4nKTtcblx0cmV0dXJuIHBhdGgubGVuZ3RoXG5cdCAgICAgICA/IG9ialtwYXRoWzBdXSAmJiB3YWxrbkdldChvYmpbcGF0aFswXV0sIHBhdGguc2xpY2UoMSkpXG5cdCAgICAgICA6IG9iajtcbn1cblxuLy9AdG9kb1xuZXhwb3J0IGZ1bmN0aW9uIGtleVdhbGtuU2V0KCBvYmosIHBhdGgsIHZhbHVlLCBzdGFjayApIHtcblx0aWYgKCBpcy5zdHJpbmcocGF0aCkgKVxuXHRcdHBhdGggPSBwYXRoLnNwbGl0KC8oXFw+fFxcLykvaWcpLmZpbHRlcih2ID0+ICh2ICE9PSAnPicgJiYgdikpO1xuXHRyZXR1cm4gd2Fsa25TZXQob2JqLCBwYXRoLCB2YWx1ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBrZXlXYWxrbkdldCggb2JqLCBwYXRoLCBpc0tleSApIHtcblx0aWYgKCBpcy5zdHJpbmcocGF0aCkgKVxuXHRcdHBhdGggPSBwYXRoLnNwbGl0KC8oXFw+fFxcLykvaWcpLmZpbHRlcih2ID0+ICh2ICE9PSAnPicgJiYgdikpO1xuXHRyZXR1cm4gcGF0aC5sZW5ndGhcblx0ICAgICAgID8gb2JqW3BhdGhbMF1dICYmIHdhbGtuR2V0KG9ialtwYXRoWzBdXSwgcGF0aC5zbGljZSgxKSlcblx0ICAgICAgIDogb2JqO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlscy91dGlscy5qcyIsIi8qXG4gKlxuICogQ29weXJpZ2h0IChDKSAyMDE5IE5hdGhhbmFlbCBCcmF1blxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cblxuY29uc3QgaXMgICAgICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJ2lzJyksXG4gICAgICBTY29wZSAgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9TY29wZScpLFxuICAgICAgeyBrZXlXYWxrblNldCwga2V5V2Fsa25HZXQgfSA9IHJlcXVpcmUoJy4vdXRpbHMvdXRpbHMnKSxcbiAgICAgIEV2ZW50RW1pdHRlciAgICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL3V0aWxzL0VtaXR0ZXInKSxcbiAgICAgIFRhc2tTZXF1ZW5jZXIgICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL3V0aWxzL1Rhc2tTZXF1ZW5jZXInKSxcbiAgICAgIHNob3J0aWQgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlKCdzaG9ydGlkJyksXG4gICAgICBvYmpQcm90byAgICAgICAgICAgICAgICAgICAgID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHt9KTtcblxuY2xhc3MgU3RvcmUgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuXHQvL3N0YXRpYyB1c2UgICAgICAgICAgICAgICAgICA9IFtdOy8vIG92ZXJyaWRhYmxlIGxpc3Qgb2Ygc291cmNlIHN0b3Jlc1xuXHRzdGF0aWMgZm9sbG93Oy8vIG92ZXJyaWRhYmxlIGxpc3Qgb2Ygc3RvcmUgdGhhdCB3aWxsIGFsbG93IHB1c2ggaWYgdXBkYXRlZFxuXHRzdGF0aWMgcmVxdWlyZTtcblx0c3RhdGljIHN0YXRpY1Njb3BlICAgPSBuZXcgU2NvcGUoe30sIHsgaWQ6IFwic3RhdGljXCIgfSk7XG5cdHN0YXRpYyBzdGF0ZSAgICAgICAgID0gdW5kZWZpbmVkOy8vIGRlZmF1bHQgc3RhdGVcblx0LyoqXG5cdCAqIGlmIHJldGFpbiBnb2VzIHRvIDAgOlxuXHQgKiBmYWxzZSB0byBub3QgZGVzdHJveSxcblx0ICogMCB0byBzeW5jIGF1dG8gZGVzdHJveVxuXHQgKiBNcyB0byBhdXRvZGVzdHJveSBhZnRlciB0bSBtcyBpZiBubyByZXRhaW4gaGFzIGJlZW4gY2FsbGVkXG5cdCAqIEB0eXBlIHtib29sZWFufEludH1cblx0ICovXG5cdHN0YXRpYyBwZXJzaXN0ZW5jZVRtID0gZmFsc2U7XG5cdFxuXHQvKipcblx0ICogQ29uc3RydWN0b3IsIHdpbGwgYnVpbGQgYSByZXNjb3BlIHN0b3JlXG5cdCAqXG5cdCAqIChzY29wZSwge3JlcXVpcmUsdXNlLGFwcGx5LHN0YXRlLCBkYXRhfSlcblx0ICogKHNjb3BlKVxuXHQgKlxuXHQgKiBAcGFyYW0gc2NvcGUge29iamVjdH0gc2NvcGUgd2hlcmUgdG8gZmluZCB0aGUgb3RoZXIgc3RvcmVzIChkZWZhdWx0IDogc3RhdGljXG5cdCAqICAgICBzdGF0aWNTY29wZSApXG5cdCAqIEBwYXJhbSBrZXlzIHtBcnJheX0gKHBhc3NlZCB0byBTdG9yZTo6bWFwKSBFeCA6IFtcInNlc3Npb25cIiwgXCJvdGhlck5hbWVkU3RvcmU6a2V5XCIsXG5cdCAqICAgICBvdGhlclN0b3JlLmFzKFwib3RoZXJLZXlcIildXG5cdCAqL1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHRcdGxldCBhcmd6ICAgICAgICAgPSBbLi4uYXJndW1lbnRzXSxcblx0XHQgICAgX3N0YXRpYyAgICAgID0gdGhpcy5jb25zdHJ1Y3Rvcixcblx0XHQgICAgc2NvcGUgICAgICAgID0gYXJnelswXSBpbnN0YW5jZW9mIFNjb3BlXG5cdFx0ICAgICAgICAgICAgICAgICAgID8gYXJnei5zaGlmdCgpXG5cdFx0ICAgICAgICAgICAgICAgICAgIDogX3N0YXRpYy5zY29wZSA/IFNjb3BlLmdldFNjb3BlKF9zdGF0aWMuc2NvcGUpXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGlzLnN0cmluZyhhcmd6WzBdKVxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFNjb3BlLmdldFNjb3BlKGFyZ3ouc2hpZnQoKSlcblx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfc3RhdGljLnN0YXRpY1Njb3BlLFxuXHRcdCAgICBjZmcgICAgICAgICAgPSBhcmd6WzBdICYmICFpcy5hcnJheShhcmd6WzBdKSAmJiAhaXMuc3RyaW5nKGFyZ3pbMF0pXG5cdFx0ICAgICAgICAgICAgICAgICAgID8gYXJnei5zaGlmdCgpXG5cdFx0ICAgICAgICAgICAgICAgICAgIDoge30sXG5cdFx0ICAgIHRhc2tRdWV1ZSAgICA9IGlzLmFycmF5KGFyZ3pbMF0pID8gYXJnei5zaGlmdCgpIDogbnVsbCxcblx0XHQgICAgbmFtZSAgICAgICAgID0gY2ZnLm5hbWUgfHwgX3N0YXRpYy5uYW1lLFxuXHRcdCAgICB3YXRjaHMgICAgICAgPSBjZmcudXNlIHx8IFtdLFxuXHRcdCAgICBhcHBseSAgICAgICAgPSBjZmcuYXBwbHkgfHwgbnVsbCxcblx0XHQgICAgaW5pdGlhbFN0YXRlID0gX3N0YXRpYy5zdGF0ZSB8fCBfc3RhdGljLmluaXRpYWxTdGF0ZSB8fCBfc3RhdGljLmRlZmF1bHRTdGF0ZTtcblx0XHRcblx0XHR0aGlzLl91aWQgPSBjZmcuX3VpZCB8fCBzaG9ydGlkLmdlbmVyYXRlKCk7XG5cdFx0XG5cdFx0dGhpcy5fX3JldGFpbnMgICAgPSB7IGFsbDogMCB9O1xuXHRcdHRoaXMuX19sb2NrcyAgICAgID0geyBhbGw6IDAgfTtcblx0XHR0aGlzLl9vblN0YWJpbGl6ZSA9IFtdO1xuXHRcdFxuXHRcdC8vIGF1dG9EZXN0cm95VG1cblx0XHR0aGlzLl9hdXRvRGVzdHJveSAgID0gISF0aGlzLl9wZXJzaXN0ZW5jZVRtO1xuXHRcdHRoaXMuX3BlcnNpc3RlbmNlVG0gPSBjZmcucGVyc2lzdGVuY2VUbSB8fCBfc3RhdGljLnBlcnNpc3RlbmNlVG0gfHwgKGNmZy5hdXRvRGVzdHJveSB8fCBfc3RhdGljLmF1dG9EZXN0cm95KSAmJiA1O1xuXHRcdHRoaXMuX2NmZyAgICAgICAgICAgPSBjZmc7XG5cdFx0XG5cdFx0aWYgKCBjZmcgJiYgY2ZnLm9uICkge1xuXHRcdFx0dGhpcy5vbihjZmcub24pO1xuXHRcdH1cblx0XHRcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuXHRcdFxuXHRcdGlmICggc2NvcGUuc3RvcmVzICkge1xuXHRcdFx0dGhpcy5zY29wZU9iaiA9IHNjb3BlO1xuXHRcdFx0dGhpcy5zY29wZSAgICA9IHNjb3BlLnN0b3Jlcztcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHR0aGlzLnNjb3BlT2JqID0gbmV3IFNjb3BlKHNjb3BlKTtcblx0XHRcdHRoaXMuc2NvcGUgICAgPSBzY29wZS5zdG9yZXM7XG5cdFx0fVxuXHRcdFxuXHRcdC8vIHN0YW5kYXJkaXplZCBzY29wZSBhY2Nlc3Ncblx0XHR0aGlzLiRzY29wZSAgICA9IHRoaXMuc2NvcGVPYmo7XG5cdFx0dGhpcy4kc3RvcmVzICAgPSB0aGlzLnNjb3BlT2JqLnN0b3Jlcztcblx0XHR0aGlzLiRhY3Rpb25zICA9IHRoaXMuc2NvcGVPYmouYWN0aW9ucztcblx0XHR0aGlzLiRkaXNwYXRjaCA9IHRoaXMuc2NvcGVPYmouZGlzcGF0Y2guYmluZCh0aGlzLnNjb3BlT2JqKTtcblx0XHRcblx0XHR0aGlzLl9yZXYgICAgID0gdGhpcy5jb25zdHJ1Y3Rvci5fcmV2IHx8IDA7XG5cdFx0dGhpcy5fcmV2cyAgICA9IHt9O1xuXHRcdHRoaXMuc3RvcmVzICAgPSB7fTtcblx0XHR0aGlzLl9yZXF1aXJlID0gW107XG5cdFx0dGhpcy5fc291cmNlcyA9IFtuYW1lXTtcblx0XHRcblx0XHQvLyByZWdpc3RlciBzb3VyY2Ugc3RvcmVzXG5cdFx0aWYgKCBpcy5hcnJheShfc3RhdGljLnVzZSkgKSB7XG5cdFx0XHR0aGlzLl91c2UgPSBbLi4ud2F0Y2hzLCAuLi4oX3N0YXRpYy51c2UgfHwgW10pLm1hcChcblx0XHRcdFx0a2V5ID0+IHtcblx0XHRcdFx0XHRsZXQgcmVmID0ga2V5Lm1hdGNoKC9eKFxcIT8pKFteXFw6XSopKD86XFw6KC4qKSk/JC8pO1xuXHRcdFx0XHRcdGlmICggcmVmWzFdICkge1xuXHRcdFx0XHRcdFx0bGV0IHJlZjIgPSByZWZbMl0uc3BsaXQoJy4nKTtcblx0XHRcdFx0XHRcdHRoaXMuX3JlcXVpcmUucHVzaChyZWZbM10gfHwgcmVmMltyZWYyLmxlbmd0aCAtIDFdKTsvLyByZXF1aXJlIGNoZWNrIHZhbHVlIG9mIHRoZSBhbGlhc2VkXG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpbXBvcnRlZCB2YWx1ZVxuXHRcdFx0XHRcdFx0cmV0dXJuIGtleS5zdWJzdHIoMSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybiBrZXk7XG5cdFx0XHRcdH1cblx0XHRcdCldO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdHRoaXMuX3VzZSA9IFsuLi53YXRjaHMsIC4uLihcblx0XHRcdFx0X3N0YXRpYy51c2UgPyBPYmplY3Qua2V5cyhfc3RhdGljLnVzZSlcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAubWFwKFxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAga2V5ID0+IHtcblx0XHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgbGV0IHJlZiA9IGtleS5tYXRjaCgvXihcXCE/KSguKikkLyk7XG5cdFx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgIHJlZlsxXSAmJiB0aGlzLl9yZXF1aXJlLnB1c2goX3N0YXRpYy51c2Vba2V5XSk7XG5cdFx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgIHJldHVybiByZWZbMl0gKyAoKF9zdGF0aWMudXNlW2tleV0gPT09IHRydWUpXG5cdFx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAnJ1xuXHRcdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJzonICsgX3N0YXRpYy51c2Vba2V5XSk7XG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICB9XG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgKSA6IFtdXG5cdFx0XHQpXTtcblx0XHR9XG5cdFx0XG5cdFx0aWYgKCBfc3RhdGljLnJlcXVpcmUgKVxuXHRcdFx0dGhpcy5fcmVxdWlyZS5wdXNoKC4uLl9zdGF0aWMucmVxdWlyZSk7XG5cdFx0aWYgKCBjZmcucmVxdWlyZSApXG5cdFx0XHR0aGlzLl9yZXF1aXJlLnB1c2goLi4uY2ZnLnJlcXVpcmUpO1xuXHRcdFxuXHRcdHRoaXMuX2ZvbGxvd2VycyA9IFtdO1xuXHRcdHRoaXMuX2NoYW5nZXNTVyA9IGluaXRpYWxTdGF0ZSB8fCB7fTtcblx0XHR0aGlzLnN0YXRlICAgICAgPSBpbml0aWFsU3RhdGUgJiYge307XG5cdFx0XG5cdFx0aWYgKCBhcHBseSApXG5cdFx0XHR0aGlzLmFwcGx5ID0gYXBwbHk7XG5cdFx0XG5cdFx0LyoqXG5cdFx0ICogSW5pdGlhbCBzdGF0ZSBpc24ndCBmdWxseSBpbml0aWFsaXplZCAoIGNoaWxkcyBjb25zdHJ1Y3RvcnMgY2FuIHNldCBpdCApXG5cdFx0ICogU2NvcGUgYmFzZWQgaW5zdGFuY2UgaGF2ZSB0YXNrUXVldWUgdG8gZGVsYXkgaW5pdCBzeW5jaHJvbm91c2x5LCBpZiBub3Rcblx0XHQgKiBwcmVzZW50IHdlIHVzZSBzZXRUaW1lb3V0XG5cdFx0ICovXG5cdFx0aWYgKCB0YXNrUXVldWUgKSB7XG5cdFx0XHR0YXNrUXVldWUucHVzaCh0aGlzLl9hZnRlckNvbnN0cnVjdG9yLmJpbmQodGhpcykpXG5cdFx0fVxuXHRcdGVsc2Vcblx0XHRcdHNldFRpbWVvdXQodGhpcy5fYWZ0ZXJDb25zdHJ1Y3Rvci5iaW5kKHRoaXMpKVxuXHR9XG5cdFxuXHQvKipcblx0ICogR2V0IHRoZSBpbmNvbWluZyBzdGF0ZSAoIGZvciBpbW1lZGlhdGUgc3RhdGUgcmVsYXRpdmUgYWN0aW9ucyApXG5cdCAqIEByZXR1cm5zIHt7fXwqfVxuXHQgKi9cblx0Z2V0IG5leHRTdGF0ZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5fbmV4dFN0YXRlIHx8IHRoaXMuc3RhdGU7XG5cdH1cblx0XG5cdF9hZnRlckNvbnN0cnVjdG9yKCkge1xuXHRcdGxldCBjZmcgICAgICAgICAgPSB0aGlzLl9jZmcsXG5cdFx0ICAgIF9zdGF0aWMgICAgICA9IHRoaXMuY29uc3RydWN0b3IsXG5cdFx0ICAgIHNuYXBzaG90ICAgICA9IHRoaXMucmVzdG9yZSh1bmRlZmluZWQsIHRydWUpLFxuXHRcdCAgICBpbml0aWFsU3RhdGUgPSB0aGlzLnN0YXRlLFxuXHRcdCAgICBpbml0aWFsRGF0YSAgPSB0aGlzLmRhdGEsXG5cdFx0ICAgIGFwcGxpZWQ7XG5cdFx0e1xuXHRcdFx0XG5cdFx0XHRpZiAoIGluaXRpYWxEYXRhIClcblx0XHRcdFx0dGhpcy5kYXRhID0gaW5pdGlhbERhdGE7XG5cdFx0XHRlbHNlIGlmICggX3N0YXRpYy5kYXRhICE9PSB1bmRlZmluZWQgKVxuXHRcdFx0XHR0aGlzLmRhdGEgPSB7IC4uLl9zdGF0aWMuZGF0YSB9O1xuXHRcdFx0ZWxzZSBpZiAoIGNmZy5oYXNPd25Qcm9wZXJ0eShcImRhdGFcIikgKVxuXHRcdFx0XHR0aGlzLmRhdGEgPSBjZmcuZGF0YTtcblx0XHRcdFxuXHRcdFx0aWYgKCBjZmcuaGFzT3duUHJvcGVydHkoXCJzdGF0ZVwiKSAmJiBjZmcuc3RhdGUgIT09IHVuZGVmaW5lZCApXG5cdFx0XHRcdGluaXRpYWxTdGF0ZSA9IHsgLi4uaW5pdGlhbFN0YXRlLCAuLi5jZmcuc3RhdGUgfTtcblx0XHRcdFxuXHRcdFx0aWYgKCB0aGlzLmRhdGEgPT09IHVuZGVmaW5lZCApIHtcblx0XHRcdFx0aWYgKCBpbml0aWFsU3RhdGUgfHwgdGhpcy5fdXNlLmxlbmd0aCApIHsvLyBzeW5jIGFwcGx5XG5cdFx0XHRcdFx0dGhpcy5fbmV4dFN0YXRlID0gdGhpcy5fY2hhbmdlc1NXID0ge1xuXHRcdFx0XHRcdFx0Li4udGhpcy5fY2hhbmdlc1NXLFxuXHRcdFx0XHRcdFx0Li4uKGluaXRpYWxTdGF0ZSB8fCB7fSksXG5cdFx0XHRcdFx0XHQuLi50aGlzLiRzY29wZS5tYXAodGhpcywgdGhpcy5fdXNlKVxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSAgICAgID0ge307XG5cdFx0XHRcdFx0aWYgKCB0aGlzLnNob3VsZEFwcGx5KHRoaXMuX25leHRTdGF0ZSkgJiYgdGhpcy5kYXRhID09PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRcdFx0XHR0aGlzLmRhdGEgICAgICAgPSB0aGlzLmFwcGx5KHRoaXMuZGF0YSwgdGhpcy5fbmV4dFN0YXRlLCB0aGlzLl9jaGFuZ2VzU1cpO1xuXHRcdFx0XHRcdFx0YXBwbGllZCAgICAgICAgID0gdHJ1ZTtcblx0XHRcdFx0XHRcdHRoaXMuc3RhdGUgICAgICA9IHRoaXMuX2NoYW5nZXNTVztcblx0XHRcdFx0XHRcdHRoaXMuX25leHRTdGF0ZSA9IHRoaXMuX2NoYW5nZXNTVyA9IG51bGw7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0YXBwbGllZCAgICAgICAgID0gdHJ1ZTtcblx0XHRcdFx0dGhpcy5zdGF0ZSAgICAgID0gey8vIGFzc3VtZSB0aGlzIHN0YXRlIGlzIHN5bmMgd2l0aCBpbml0aWFsIGRhdGFcblx0XHRcdFx0XHQuLi50aGlzLl9jaGFuZ2VzU1csXG5cdFx0XHRcdFx0Li4uKGluaXRpYWxTdGF0ZSB8fCB7fSksXG5cdFx0XHRcdFx0Li4udGhpcy4kc2NvcGUubWFwKHRoaXMsIHRoaXMuX3VzZSlcblx0XHRcdFx0fTtcblx0XHRcdFx0dGhpcy5fbmV4dFN0YXRlID0gdGhpcy5fY2hhbmdlc1NXID0gbnVsbDtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKCAodGhpcy5kYXRhICE9PSB1bmRlZmluZWQgfHwgYXBwbGllZCkgJiYgIXRoaXMuX19sb2Nrcy5hbGwgKSB7XG5cdFx0XHR0aGlzLl9zdGFibGUgPSB0cnVlO1xuXHRcdFx0dGhpcy5fcmV2Kys7XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0dGhpcy5fc3RhYmxlID0gZmFsc2U7XG5cdFx0XHRpZiAoICFfc3RhdGljLm1hbmFnZWQgJiYgIXRoaXMuc3RhdGUgJiYgKCF0aGlzLl91c2UgfHwgIXRoaXMuX3VzZS5sZW5ndGgpICkge1xuXHRcdFx0XHRjb25zb2xlLndhcm4oXCJSZVNjb3BlIHN0b3JlICdcIiwgdGhpcy5uYW1lLCBcIicgaGF2ZSBubyBpbml0aWFsIGRhdGEsIHN0YXRlIG9yIHVzZS4gSXQgY2FuJ3Qgc3RhYmlsaXplLi4uXCIpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHQhdGhpcy5fc3RhYmxlICYmIHRoaXMuZW1pdCgndW5zdGFibGUnLCB0aGlzLnN0YXRlKTtcblx0XHRcblx0fVxuXHRcblx0LyoqXG5cdCAqIE92ZXJyaWRhYmxlIG1ldGhvZCB0byBrbm93IGlmIGEgZGF0YSBjaGFuZ2Ugc2hvdWxkIGJlIHByb3BhZyB0byB0aGUgbGlzdGVuaW5nXG5cdCAqIHN0b3JlcyAmIGNvbXBvbmVudHNcblx0ICovXG5cdHNob3VsZFByb3BhZyggbkRhdGFzICkge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cdFxuXHQvKipcblx0ICogT3ZlcnJpZGFibGUgbWV0aG9kIHRvIGNob29zZSBpZiB0aGlzIHN0b3JlIHNob3VsZCBiZSBzZXJpYWxpemVkLFxuXHQgKiBJZiBub3QgaXQgd2lsbCBiZSBhcHBsaWVkIG5vcm1hbGx5IHdoZW4gcmVzdG9yaW5nXG5cdCAqIEByZXR1cm5zIHtib29sZWFufVxuXHQgKi9cblx0c2hvdWxkU2VyaWFsaXplKCkge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cdFxuXHRoYXNEYXRhQ2hhbmdlKCBuRGF0YXMgKSB7XG5cdFx0bGV0IF9zdGF0aWMgPSB0aGlzLmNvbnN0cnVjdG9yLCByLFxuXHRcdCAgICBjRGF0YXMgID0gdGhpcy5kYXRhO1xuXHRcdHIgICAgICAgICAgID0gIWNEYXRhcyAmJiBuRGF0YXMgfHwgY0RhdGFzICE9PSBuRGF0YXM7XG5cdFx0IXIgJiYgY0RhdGFzICYmIE9iamVjdC5rZXlzKGNEYXRhcykuZm9yRWFjaChcblx0XHRcdCgga2V5ICkgPT4ge1xuXHRcdFx0XHRyID0gciB8fCAobkRhdGFzXG5cdFx0XHRcdCAgICAgICAgICA/IGNEYXRhc1trZXldICE9PSBuRGF0YXNba2V5XVxuXHRcdFx0XHQgICAgICAgICAgOiBjRGF0YXMgJiYgY0RhdGFzW2tleV0pXG5cdFx0XHR9XG5cdFx0KTtcblx0XHQhciAmJiBuRGF0YXMgJiYgT2JqZWN0LmtleXMobkRhdGFzKS5mb3JFYWNoKFxuXHRcdFx0KCBrZXkgKSA9PiB7XG5cdFx0XHRcdHIgPSByIHx8IChuRGF0YXNcblx0XHRcdFx0ICAgICAgICAgID8gY0RhdGFzW2tleV0gIT09IG5EYXRhc1trZXldXG5cdFx0XHRcdCAgICAgICAgICA6IGNEYXRhcyAmJiBjRGF0YXNba2V5XSlcblx0XHRcdH1cblx0XHQpO1xuXHRcdHJldHVybiByO1xuXHR9XG5cdFxuXHQvKipcblx0ICogT3ZlcnJpZGFibGUgbWV0aG9kIHRvIGtub3cgaWYgYSBzdGF0ZSBjaGFuZ2Ugc2hvdWxkIGJlIGFwcGxpZWRcblx0ICovXG5cdHNob3VsZEFwcGx5KCBzdGF0ZSA9IHRoaXMuc3RhdGUgKSB7XG5cdFx0bGV0IF9zdGF0aWMgPSB0aGlzLmNvbnN0cnVjdG9yO1xuXHRcdFxuXHRcdHJldHVybiAoXG5cdFx0XHQhIXRoaXMuaXNDb21wbGV0ZShzdGF0ZSlcblx0XHQpICYmIChpcy5hcnJheShfc3RhdGljLmZvbGxvdylcblx0XHQgICAgICA/IF9zdGF0aWMuZm9sbG93XG5cdFx0ICAgICAgICAgICAgICAgLnJlZHVjZSgoIHIsIGkgKSA9PiAociB8fCBzdGF0ZSAmJiBzdGF0ZVtpXSksIGZhbHNlKVxuXHRcdCAgICAgIDogX3N0YXRpYy5mb2xsb3dcblx0XHQgICAgICAgID8gT2JqZWN0LmtleXMoX3N0YXRpYy5mb2xsb3cpXG5cdFx0ICAgICAgICAgICAgICAgIC5yZWR1Y2UoKCByLCBpICkgPT4gKFxuXHRcdFx0ICAgICAgICAgICAgICAgIHJcblx0XHRcdCAgICAgICAgICAgICAgICB8fCBzdGF0ZSAmJiBpcy5mbihfc3RhdGljLmZvbGxvd1tpXSkgJiYgX3N0YXRpYy5mb2xsb3dbaV0uY2FsbCh0aGlzLCBzdGF0ZVtpXSlcblx0XHRcdCAgICAgICAgICAgICAgICB8fCBfc3RhdGljLmZvbGxvd1tpXSAmJiBzdGF0ZVtpXSAhPT0gdGhpcy5zdGF0ZVtpXVxuXHRcdCAgICAgICAgICAgICAgICApLCBmYWxzZSkgOiB0cnVlXG5cdFx0KTtcblx0fVxuXHRcblx0LyoqXG5cdCAqIE92ZXJyaWRhYmxlIGFwcGxpZXIgLyByZW1hcHBlclxuXHQgKiBJZiBzdGF0ZSBvciBsYXN0UHVibGljU3RhdGUgYXJlIHNpbXBsZSBoYXNoIG1hcHMgYXBwbHkgd2lsbCByZXR1cm4gey4uLmRhdGEsXG5cdCAqIC4uLnN0YXRlfSBpZiBub3QgaXQgd2lsbCByZXR1cm4gdGhlIGxhc3QgcHJpdmF0ZSBzdGF0ZVxuXHQgKiBAcGFyYW0gZGF0YVxuXHQgKiBAcGFyYW0gc3RhdGVcblx0ICogQHJldHVybnMgeyp9XG5cdCAqL1xuXHRhcHBseSggZGF0YSwgc3RhdGUsIGNoYW5nZXMgKSB7XG5cdFx0cmV0dXJuIHN0YXRlO1xuXHR9XG5cdFxuXHQvKipcblx0ICogRGVib3VuY2UgdGhpcyBzdG9yZSBwcm9wYWdhdGlvbiAoICYgcmVkdWNpbmcgKVxuXHQgKiBAcGFyYW0gY2Jcblx0ICovXG5cdHN0YWJpbGl6ZSggY2IgKSB7XG5cdFx0Y2IgJiYgdGhpcy5vbmNlKCdzdGFibGUnLCBjYik7XG5cdFx0dGhpcy5fc3RhYmxlICYmIHRoaXMuZW1pdCgndW5zdGFibGUnLCB0aGlzLnN0YXRlLCB0aGlzLmRhdGEpO1xuXHRcdFxuXHRcdHRoaXMuX3N0YWJsZSA9IGZhbHNlO1xuXHRcdFxuXHRcdGlmICggdGhpcy5fc3RhYmlsaXplciApXG5cdFx0XHRyZXR1cm47XG5cdFx0XG5cdFx0dGhpcy5fc3RhYmlsaXplciA9IFRhc2tTZXF1ZW5jZXIucHVzaFRhc2sodGhpcywgJ3B1c2hTdGF0ZScpO1xuXHR9XG5cdFxuXHQvKipcblx0ICogV2FsayBuIGdldFxuXHQgKiBAcGFyYW0gcGF0aFxuXHQgKiBAcGFyYW0gaVxuXHQgKiBAcGFyYW0gb2JqXG5cdCAqIEByZXR1cm5zIHsqfHt9fVxuXHQgKi9cblx0cmV0cmlldmUoIHBhdGgsIGkgPSAwLCBvYmogPSB0aGlzLmRhdGEgKSB7XG5cdFx0cGF0aCA9IGlzLnN0cmluZyhwYXRoKSA/IHBhdGguc3BsaXQoJy4nKSA6IHBhdGg7XG5cdFx0cmV0dXJuICFvYmogfHwgIXBhdGggfHwgIXBhdGgubGVuZ3RoXG5cdFx0ICAgICAgID8gb2JqXG5cdFx0ICAgICAgIDogcGF0aC5sZW5ndGggPT0gaSArIDFcblx0XHQgICAgICAgICA/IG9ialtwYXRoW2ldXVxuXHRcdCAgICAgICAgIDogdGhpcy5yZXRyaWV2ZShwYXRoLCBpICsgMSwgb2JqW3BhdGhbaV1dKTtcblx0fVxuXHRcblx0ZGlzcGF0Y2goIGFjdGlvbiwgLi4uYXJneiApIHtcblx0XHR0aGlzLnNjb3BlT2JqLmRpc3BhdGNoKGFjdGlvbiwgLi4uYXJneik7XG5cdH1cblx0XG5cdHRyaWdnZXIoIGFjdGlvbiwgLi4uYXJneiApIHtcblx0XHRsZXQgeyBhY3Rpb25zIH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXHRcdGlmICggYWN0aW9ucyAmJiBhY3Rpb25zW2FjdGlvbl0gKSB7XG5cdFx0XHRsZXQgbnMgPSBhY3Rpb25zW2FjdGlvbl0uY2FsbCh0aGlzLCAuLi5hcmd6KTtcblx0XHRcdG5zICYmIHRoaXMuc2V0U3RhdGUobnMpO1xuXHRcdH1cblx0fVxuXHRcblx0LyoqXG5cdCAqIFNldCAmIFB1c2ggdGhlIHJlc3VsdCBkYXRhIHRvIGZvbGxvd2VycyBpZiBzdGFibGVcblx0ICogQHBhcmFtIGNiXG5cdCAqL1xuXHRwdXNoKCBkYXRhLCBmb3JjZSwgY2IgKSB7XG5cdFx0Y2IgICAgPSBmb3JjZSA9PT0gdHJ1ZSA/IGNiIDogZm9yY2U7XG5cdFx0Zm9yY2UgPSBmb3JjZSA9PT0gdHJ1ZTtcblx0XHRpZiAoICFmb3JjZSAmJlxuXHRcdFx0KFxuXHRcdFx0XHQhdGhpcy5oYXNEYXRhQ2hhbmdlKGRhdGEpXG5cdFx0XHQpXG5cdFx0KSB7XG5cdFx0XHRjYiAmJiBjYigpO1xuXHRcdFx0aWYgKCAhdGhpcy5fX2xvY2tzLmFsbCApIHtcblx0XHRcdFx0bGV0IHN0YWJsZSAgID0gdGhpcy5fc3RhYmxlO1xuXHRcdFx0XHR0aGlzLl9zdGFibGUgPSB0cnVlO1xuXHRcdFx0XHQhc3RhYmxlICYmIHRoaXMuZW1pdCgnc3RhYmxlJywgdGhpcy5zdGF0ZSwgdGhpcy5kYXRhKTtcblx0XHRcdFx0dGhpcy5fc3RhYmlsaXplciA9IG51bGw7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdFxuXHRcdHRoaXMuZGF0YSA9IGRhdGE7XG5cdFx0dGhpcy53YWl0KCk7XG5cdFx0dGhpcy5yZWxlYXNlKGNiKTtcblx0XHRcblx0fVxuXHRcblx0LyoqXG5cdCAqIENhbGwgdGhlIGFwcGx5IGZuIHVzaW5nIHRoZSBjdXJyZW50IGFjY3VtdWxhdGVkIHN0YXRlIHVwZGF0ZSB0aGVuLCBwdXNoIHRoZVxuXHQgKiByZXN1bHRpbmcgZGF0YSBpZiBzdGFibGVcblx0ICogQHBhcmFtIGZvcmNlZFN0YXRlXG5cdCAqL1xuXHRwdXNoU3RhdGUoIGZvcmNlZFN0YXRlICkge1xuXHRcdGlmICggIWZvcmNlZFN0YXRlICYmICF0aGlzLl9jaGFuZ2VzU1cgJiYgdGhpcy5kYXRhIClcblx0XHRcdHJldHVybjtcblx0XHRcblx0XHRsZXQgbmV4dFN0YXRlID0gZm9yY2VkU3RhdGUgfHwgdGhpcy5fbmV4dFN0YXRlIHx8IHRoaXMuc3RhdGUsXG5cdFx0ICAgIG5leHREYXRhO1xuXHRcdE9iamVjdC5rZXlzKG5leHRTdGF0ZSkuZm9yRWFjaChcblx0XHRcdGtleSA9PiAobmV4dFN0YXRlW2tleV0gPT09IHVuZGVmaW5lZCAmJiAoZGVsZXRlIG5leHRTdGF0ZVtrZXldKSlcblx0XHQpO1xuXHRcdG5leHREYXRhID0gdGhpcy5hcHBseSh0aGlzLmRhdGEsIG5leHRTdGF0ZSwgdGhpcy5fY2hhbmdlc1NXKTtcblx0XHRcblx0XHR0aGlzLl9zdGFiaWxpemVyID0gbnVsbDtcblx0XHR0aGlzLnN0YXRlICAgICAgID0gbmV4dFN0YXRlO1xuXHRcdHRoaXMuX25leHRTdGF0ZSAgPSBudWxsO1xuXHRcdHRoaXMuX2NoYW5nZXNTVyAgPSBudWxsO1xuXHRcdFxuXHRcdGlmICggIWZvcmNlZFN0YXRlICYmXG5cdFx0XHQoXG5cdFx0XHRcdCF0aGlzLmhhc0RhdGFDaGFuZ2UobmV4dERhdGEpXG5cdFx0XHQpXG5cdFx0KSB7XG5cdFx0XHRpZiAoICF0aGlzLl9fbG9ja3MuYWxsICkge1xuXHRcdFx0XHRsZXQgc3RhYmxlICAgPSB0aGlzLl9zdGFibGU7XG5cdFx0XHRcdHRoaXMuX3N0YWJsZSA9IHRydWU7XG5cdFx0XHRcdCFzdGFibGUgJiYgdGhpcy5lbWl0KCdzdGFibGUnLCB0aGlzLnN0YXRlLCB0aGlzLmRhdGEpO1xuXHRcdFx0XHR0aGlzLl9zdGFiaWxpemVyID0gbnVsbDtcblx0XHRcdH1cblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0XG5cdFx0dGhpcy5kYXRhID0gbmV4dERhdGE7XG5cdFx0dGhpcy53YWl0KCk7XG5cdFx0dGhpcy5yZWxlYXNlKCk7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBBZGQgJ3BTdGF0ZScgdG8gdGhlIGN1cnJlbnQgYWNjdW11bGF0ZWQgc3RhdGUgdXBkYXRlc1xuXHQgKiAmIHdhaXQgc291cmNlIHN0b3JlcyBzdGFiaWxpemF0aW9uIGJlZm9yZSBwdXNoaW5nIHRoZXNlIHN0YXRlIHVwZGF0ZXNcblx0ICogQHBhcmFtIHBTdGF0ZVxuXHQgKiBAcGFyYW0gY2Jcblx0ICovXG5cdHNldFN0YXRlKCBwU3RhdGUsIGNiLCBzeW5jICkge1xuXHRcdGxldCBjaGFuZ2UsXG5cdFx0ICAgIGNoYW5nZXMgICA9IHRoaXMuX2NoYW5nZXNTVyA9IHRoaXMuX2NoYW5nZXNTVyB8fCB7fSxcblx0XHQgICAgbmV4dFN0YXRlID0gdGhpcy5fbmV4dFN0YXRlID0gdGhpcy5fbmV4dFN0YXRlIHx8IHsgLi4udGhpcy5zdGF0ZSB9LFxuXHRcdCAgICBrZXk7XG5cdFx0Zm9yICgga2V5IGluIHBTdGF0ZSApXG5cdFx0XHRpZiAoICF0aGlzLnN0YXRlXG5cdFx0XHRcdHx8IGNoYW5nZXMuaGFzT3duUHJvcGVydHkoa2V5KS8vIHRvZG9cblx0XHRcdFx0JiYgKFxuXHRcdFx0XHRcdHBTdGF0ZVtrZXldICE9PSBjaGFuZ2VzW2tleV1cblx0XHRcdFx0KSB8fCBwU3RhdGUuaGFzT3duUHJvcGVydHkoa2V5KVxuXHRcdFx0XHQmJiAoXG5cdFx0XHRcdFx0cFN0YXRlW2tleV0gIT09IHRoaXMuc3RhdGVba2V5XVxuXHRcdFx0XHQpICkge1xuXHRcdFx0XHRjaGFuZ2UgICAgICAgICA9IHRydWU7XG5cdFx0XHRcdG5leHRTdGF0ZVtrZXldID0gY2hhbmdlc1trZXldID0gcFN0YXRlW2tleV07XG5cdFx0XHR9XG5cdFx0XG5cdFx0aWYgKCAhdGhpcy5zaG91bGRBcHBseShuZXh0U3RhdGUpICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRcblx0XHRpZiAoIHN5bmMgKSB7XG5cdFx0XHR0aGlzLnB1c2hTdGF0ZSgpO1xuXHRcdFx0Y2IgJiYgY2IoKTtcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHRpZiAoIGNoYW5nZSApIHtcblx0XHRcdFx0dGhpcy5zdGFiaWxpemUoY2IpO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSBjYiAmJiBjYigpO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXHRcblx0LyoqXG5cdCAqIFVwZGF0ZSB0aGUgY3VycmVudCBzdGF0ZSAmIHB1c2ggaXRcblx0ICogQHBhcmFtIHBTdGF0ZVxuXHQgKiBAcGFyYW0gY2Jcblx0ICovXG5cdHNldFN0YXRlU3luYyggcFN0YXRlICkge1xuXHRcdGxldCBpICAgICAgID0gMCwgY2hhbmdlLFxuXHRcdCAgICBjaGFuZ2VzID0gdGhpcy5fY2hhbmdlc1NXID0gdGhpcy5fY2hhbmdlc1NXIHx8IHt9O1xuXHRcdGZvciAoIGxldCBrIGluIHBTdGF0ZSApXG5cdFx0XHRpZiAoICF0aGlzLnN0YXRlIHx8IHBTdGF0ZS5oYXNPd25Qcm9wZXJ0eShrKVxuXHRcdFx0XHQmJiAoXG5cdFx0XHRcdFx0cFN0YXRlW2tdICE9PSB0aGlzLnN0YXRlW2tdXG5cdFx0XHRcdFx0Ly98fFxuXHRcdFx0XHRcdC8vKHRoaXMuc3RhdGVba10gJiYgcFN0YXRlW2tdICYmIChwU3RhdGVba10uX3JldiAhPSB0aGlzLl9yZXZzW2tdKSkvLyByZXYvaGFzaCB1cGRhdGVcblx0XHRcdFx0KSApIHtcblx0XHRcdFx0Y2hhbmdlICAgICAgICA9IHRydWU7XG5cdFx0XHRcdHRoaXMuX3JldnNba10gPSBwU3RhdGVba10gJiYgcFN0YXRlW2tdLl9yZXYgfHwgdHJ1ZTtcblx0XHRcdFx0Y2hhbmdlc1trXSAgICA9IHBTdGF0ZVtrXTtcblx0XHRcdH1cblx0XHR0aGlzLnNob3VsZEFwcGx5KHsgLi4uKHRoaXMuc3RhdGUgfHwge30pLCAuLi5jaGFuZ2VzIH0pICYmIHRoaXMucHVzaFN0YXRlKCk7XG5cdFx0cmV0dXJuIHRoaXMuZGF0YTtcblx0fVxuXHRcblx0LyoqXG5cdCAqIGdldCBhIHN0b3JlLWtleSBwYWlyIGZvciBTdG9yZTo6bWFwXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG5cdCAqIEByZXR1cm5zIHt7c3RvcmU6IFN0b3JlLCBuYW1lOiAqfX1cblx0ICovXG5cdGFzKCBuYW1lICkge1xuXHRcdHJldHVybiB7IHN0b3JlOiB0aGlzLCBuYW1lIH07XG5cdH1cblx0XG5cdG9uKCBsaXN0cyApIHtcblx0XHRpZiAoICFpcy5zdHJpbmcobGlzdHMpICYmIGxpc3RzIClcblx0XHRcdE9iamVjdC5rZXlzKGxpc3RzKS5mb3JFYWNoKGsgPT4gc3VwZXIub24oaywgbGlzdHNba10pKTtcblx0XHRlbHNlIHN1cGVyLm9uKC4uLmFyZ3VtZW50cyk7XG5cdH1cblx0XG5cdHJlbW92ZUxpc3RlbmVyKCBsaXN0cyApIHtcblx0XHRpZiAoICFpcy5zdHJpbmcobGlzdHMpICYmIGxpc3RzIClcblx0XHRcdE9iamVjdC5rZXlzKGxpc3RzKS5mb3JFYWNoKGsgPT4gc3VwZXIucmVtb3ZlTGlzdGVuZXIoaywgbGlzdHNba10pKTtcblx0XHRlbHNlIHN1cGVyLnJlbW92ZUxpc3RlbmVyKC4uLmFyZ3VtZW50cyk7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBpcyBjb21wbGV0ZSAoYWxsIHJlcXVpZXJlZCBrZXlzIGFyZSBoZXJlKVxuXHQgKiBAcmV0dXJucyBib29sXG5cdCAqL1xuXHRpc0NvbXBsZXRlKCBzdGF0ZSA9IHRoaXMuc3RhdGUgKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdCF0aGlzLl9yZXF1aXJlXG5cdFx0XHR8fCAhdGhpcy5fcmVxdWlyZS5sZW5ndGhcblx0XHRcdHx8IHN0YXRlICYmIHRoaXMuX3JlcXVpcmUucmVkdWNlKFxuXHRcdFx0XHQoIHIsIGtleSApID0+IChyICYmIHN0YXRlW2tleV0pLFxuXHRcdFx0XHR0cnVlXG5cdFx0XHQpXG5cdFx0KTtcblx0fVxuXHRcblx0LyoqXG5cdCAqIGlzIHN0YWJsZVxuXHQgKiBAcmV0dXJucyBib29sXG5cdCAqL1xuXHRpc1N0YWJsZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5fc3RhYmxlO1xuXHR9XG5cdFxuXHQvKipcblx0ICogU2VyaWFsaXplIHN0YXRlICYgZGF0YSB3aXRoIHNvdXJjZXMgcmVmc1xuXHQgKiBAcmV0dXJucyBib29sXG5cdCAqL1xuXHRzZXJpYWxpemUoIGNmZyA9IHt9LCBvdXRwdXQgPSB7fSApIHtcblx0XHRcblx0XHRsZXQgc0lkICAgICAgICA9IGNmZy5wYXJlbnRBbGlhcyB8fCB0aGlzLnNjb3BlT2JqLl9pZCxcblx0XHQgICAgcmVmc0NvdW50ICA9IDAsXG5cdFx0ICAgIHJlZnMgICAgICAgPVxuXHRcdFx0ICAgICFjZmcubm9yZWZzICYmIGlzLmFycmF5KHRoaXMuX3VzZSkgJiYgdGhpcy5fdXNlLnJlZHVjZShcblx0XHRcdCAgICAoIG1hcCwga2V5ICkgPT4ge1xuXHRcdFx0XHQgICAgbGV0IHJlZiAgID0gdGhpcy4kc2NvcGUucGFyc2VSZWYoa2V5KSxcblx0XHRcdFx0ICAgICAgICBzdG9yZSA9IHRoaXMuJHN0b3Jlc1tyZWYuc3RvcmVJZF07XG5cdFx0XHRcdCAgICBpZiAoIHN0b3JlICYmIFN0b3JlLmlzU3RvcmUoc3RvcmUpICYmICFzdG9yZS5zY29wZU9iai5fLmlzTG9jYWxJZCApXG5cdFx0XHRcdFx0ICAgIHJlZnNDb3VudCsrLCBtYXBbcmVmLmFsaWFzXSA9IHJlZi5wYXRoO1xuXHRcdFx0XHRcblx0XHRcdFx0ICAgIHJldHVybiBtYXA7XG5cdFx0XHQgICAgfSwge31cblx0XHRcdCAgICApLFxuXHRcdCAgICBzdGF0ZSAgICAgID0gdGhpcy5zdGF0ZSB8fCB7fSxcblx0XHQgICAgcGVyc2lzdGVudCA9IHRoaXMuc2hvdWxkU2VyaWFsaXplKCk7XG5cdFx0XG5cdFx0aWYgKCAhcGVyc2lzdGVudCApIHtcblx0XHRcdGtleVdhbGtuU2V0KFxuXHRcdFx0XHRvdXRwdXQsXG5cdFx0XHRcdChzSWQgKyAnLycgKyB0aGlzLm5hbWUpLFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0ZGF0YVJlZnM6IGNmZy5kYXRhUmVmcyxcblx0XHRcdFx0XHRyZWZzXG5cdFx0XHRcdH1cblx0XHRcdCk7XG5cdFx0XHRyZXR1cm4gb3V0cHV0O1xuXHRcdH1cblx0XHRcblx0XHRsZXRcblx0XHRcdHN0YXRlS2V5cyAgID0gT2JqZWN0LmtleXMoc3RhdGUpIHx8IFtdLFxuXHRcdFx0c3RhdGVSZWZzICAgPSBzdGF0ZUtleXMubWFwKGsgPT4gc3RhdGVba10pLFxuXHRcdFx0aW5SZWZzQ291bnQgPSAwLFxuXHRcdFx0ZGF0YVJlZnMgICAgPSBjZmcuZGF0YVJlZnMgfHwge30sXG5cdFx0XHRpblJlZnMgICAgICA9XG5cdFx0XHRcdCFjZmcubm9yZWZzICYmIHRoaXMuZGF0YSAmJiAoT2JqZWN0LmtleXModGhpcy5kYXRhKS5yZWR1Y2UoXG5cdFx0XHRcdCggbWFwLCBrZXkgKSA9PiB7XG5cdFx0XHRcdFx0bGV0IHJlZiA9IHN0YXRlUmVmcy5pbmRleE9mKHRoaXMuZGF0YVtrZXldKVxuXHRcdFx0XHRcdGlmICggcmVmICE9IC0xIClcblx0XHRcdFx0XHRcdGluUmVmc0NvdW50KyssIG1hcFtrZXldID0gc3RhdGVLZXlzW3JlZl07XG5cdFx0XHRcdFx0cmV0dXJuIG1hcDtcblx0XHRcdFx0fSwge31cblx0XHRcdFx0KSksXG5cdFx0XHRzbmFwICAgICAgICA9IHtcblx0XHRcdFx0ZGF0YVJlZnM6IGNmZy5kYXRhUmVmcyxcblx0XHRcdFx0c3RhdGUgICA6IHN0YXRlICYmXG5cdFx0XHRcdFx0KFxuXHRcdFx0XHRcdFx0Y2ZnLm5vcmVmc1xuXHRcdFx0XHRcdFx0PyB7IC4uLnN0YXRlIH1cblx0XHRcdFx0XHRcdDogT2JqZWN0LmtleXMoc3RhdGUpLnJlZHVjZSgoIGgsIGsgKSA9PiAoIXJlZnNba10gJiYgKGhba10gPSBzdGF0ZVtrXSksIGgpLCB7fSlcblx0XHRcdFx0XHQpLFxuXHRcdFx0XHRkYXRhICAgIDogKFxuXHRcdFx0XHRcdFx0dGhpcy5kYXRhICYmXG5cdFx0XHRcdFx0XHR0aGlzLmRhdGEuX19wcm90b19fID09PSBvYmpQcm90byA/XG5cdFx0XHRcdFx0XHRPYmplY3Rcblx0XHRcdFx0XHRcdFx0LmtleXModGhpcy5kYXRhKVxuXHRcdFx0XHRcdFx0XHQucmVkdWNlKFxuXHRcdFx0XHRcdFx0XHRcdCggaCwgayApID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdGlmICggIWluUmVmc1trXSAmJiAhZGF0YVJlZnNba10gKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGhba10gPSB0aGlzLmRhdGFba107XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGluUmVmc0NvdW50Kys7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gaFxuXHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0e31cblx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxuXHRcdFx0XHRcdFx0KGlzLmJvb2wodGhpcy5kYXRhKVxuXHRcdFx0XHRcdFx0XHR8fCBpcy5udW1iZXIodGhpcy5kYXRhKVxuXHRcdFx0XHRcdFx0XHR8fCBpcy5zdHJpbmcodGhpcy5kYXRhKSkgJiYgdGhpcy5kYXRhXG5cdFx0XHRcdFx0KVxuXHRcdFx0XHRcdHx8IHVuZGVmaW5lZFxuXHRcdFx0XHRcblx0XHRcdH07XG5cdFx0XG5cdFx0cmVmcyAmJiByZWZzQ291bnQgJiYgKHNuYXAucmVmcyA9IHJlZnMpO1xuXHRcdGluUmVmcyAmJiBpblJlZnNDb3VudCAmJiAoXG5cdFx0XHRzbmFwLmluUmVmcyA9IGluUmVmcyk7XG5cdFx0XG5cdFx0XG5cdFx0a2V5V2Fsa25TZXQoXG5cdFx0XHRvdXRwdXQsXG5cdFx0XHQoc0lkICsgJy8nICsgdGhpcy5uYW1lKSxcblx0XHRcdHNuYXBcblx0XHQpO1xuXHRcdHJldHVybiBvdXRwdXQ7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiByZXN0b3JlIHN0YXRlICYgZGF0YVxuXHQgKiBAcmV0dXJucyBib29sXG5cdCAqL1xuXHRyZXN0b3JlKCBzbmFwc2hvdCwgaW1tZWRpYXRlICkge1xuXHRcdHNuYXBzaG90ID0gc25hcHNob3Rcblx0XHRcdCYmIGtleVdhbGtuR2V0KHNuYXBzaG90LCB0aGlzLnNjb3BlT2JqLl9pZCArICcvJyArIHRoaXMubmFtZSlcblx0XHRcdHx8IHRoaXMuJHNjb3BlLnRha2VTbmFwc2hvdEJ5S2V5KHRoaXMuc2NvcGVPYmouX2lkICsgJy8nICsgdGhpcy5uYW1lKTtcblx0XHRcblx0XHRpZiAoICFzbmFwc2hvdCApXG5cdFx0XHRyZXR1cm47XG5cdFx0XG5cdFx0aWYgKCBzbmFwc2hvdCApIHtcblx0XHRcdFxuXHRcdFx0aWYgKCAhdGhpcy5pc1N0YWJsZSgpICYmICFpbW1lZGlhdGUgKVxuXHRcdFx0XHR0aGlzLnRoZW4oKCkgPT4gdGhpcy5yZXN0b3JlKHNuYXBzaG90KSk7XG5cdFx0XHRcblx0XHRcdHRoaXMuc3RhdGUgPSB7IC4uLnNuYXBzaG90LnN0YXRlIH07XG5cdFx0XHRzbmFwc2hvdC5yZWZzICYmIE9iamVjdC5rZXlzKHNuYXBzaG90LnJlZnMpLmZvckVhY2goXG5cdFx0XHRcdCgga2V5ICkgPT4gey8vdG9kb1xuXHRcdFx0XHRcdHRoaXMuc3RhdGVba2V5XSA9IHRoaXMuJHNjb3BlLnJldHJpZXZlKHNuYXBzaG90LnJlZnNba2V5XSk7XG5cdFx0XHRcdH1cblx0XHRcdClcblx0XHRcdFxuXHRcdFx0XG5cdFx0XHRpZiAoIHNuYXBzaG90LmluUmVmcyA9PT0gdHJ1ZSApIHtcblx0XHRcdFx0dGhpcy5kYXRhID0geyAuLi50aGlzLnN0YXRlIH07XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0dGhpcy5kYXRhID0gc25hcHNob3QuZGF0YTtcblx0XHRcdFx0c25hcHNob3QuaW5SZWZzICYmIE9iamVjdC5rZXlzKHNuYXBzaG90LmluUmVmcykuZm9yRWFjaChcblx0XHRcdFx0XHQoIGtleSApID0+IHsvL3RvZG9cblx0XHRcdFx0XHRcdHRoaXMuZGF0YVtrZXldID0gdGhpcy5zdGF0ZVtzbmFwc2hvdC5pblJlZnNba2V5XV07XG5cdFx0XHRcdFx0XHQvL2Vsc2Vcblx0XHRcdFx0XHRcdC8vICAgIGNvbnNvbGUud2Fybignbm90IGZvdW5kIDogJywga2V5LCBzbmFwICYmIHNuYXAucmVmc1sga2V5IF0pXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQpXG5cdFx0XHR9XG5cdFx0XHRpZiAoIHNuYXBzaG90LmRhdGFSZWZzICkge1xuXHRcdFx0XHR0aGlzLmRhdGEgPSB0aGlzLmRhdGEgfHwge307XG5cdFx0XHRcdE9iamVjdC5rZXlzKHNuYXBzaG90LmRhdGFSZWZzKS5mb3JFYWNoKFxuXHRcdFx0XHRcdCgga2V5ICkgPT4gey8vdG9kb1xuXHRcdFx0XHRcdFx0dGhpcy4kc2NvcGUucmVzdG9yZVJlZlBhdGgoc25hcHNob3QuZGF0YVJlZnNba2V5XSk7XG5cdFx0XHRcdFx0XHR0aGlzLmRhdGFba2V5XSA9IHRoaXMuJHNjb3BlLnJldHJpZXZlKHNuYXBzaG90LmRhdGFSZWZzW2tleV0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0KVxuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHRcblx0XHR9XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBCaW5kIHRoaXMgc3RvcmUgY2hhbmdlcyB0byB0aGUgZ2l2ZW4gY29tcG9uZW50LWtleVxuXHQgKiBAcGFyYW0gb2JqIHtSZWFjdC5Db21wb25lbnR8U3RvcmV8ZnVuY3Rpb24pXG5cdCAqIEBwYXJhbSBrZXkge3N0cmluZ30gb3B0aW9uYWwga2V5IHdoZXJlIHRvIG1hcCB0aGUgcHVibGljIHN0YXRlXG5cdCAqL1xuXHRiaW5kKCBvYmosIGtleSwgc2V0SW5pdGlhbCA9IHRydWUsIHBhdGggKSB7XG5cdFx0dGhpcy5fZm9sbG93ZXJzLnB1c2goW29iaiwga2V5LCBwYXRoXSk7XG5cdFx0aWYgKCBzZXRJbml0aWFsICYmIHRoaXMuZGF0YSAmJiB0aGlzLl9zdGFibGUgKSB7XG5cdFx0XHRsZXQgZGF0YSA9IHBhdGggPyB0aGlzLnJldHJpZXZlKHBhdGgpIDogdGhpcy5kYXRhO1xuXHRcdFx0aWYgKCB0eXBlb2Ygb2JqICE9IFwiZnVuY3Rpb25cIiApIHtcblx0XHRcdFx0aWYgKCBrZXkgKSBvYmouc2V0U3RhdGUoeyBba2V5XTogZGF0YSB9KTtcblx0XHRcdFx0ZWxzZSBvYmouc2V0U3RhdGUoZGF0YSk7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0b2JqKGRhdGEpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRcblx0LyoqXG5cdCAqIFVuIGJpbmQgdGhpcyBzdG9yZSBvZmYgdGhlIGdpdmVuIGNvbXBvbmVudC1rZXlcblx0ICogQHBhcmFtIG9ialxuXHQgKiBAcGFyYW0ga2V5XG5cdCAqIEByZXR1cm5zIHtBcnJheS48Kj59XG5cdCAqL1xuXHR1bkJpbmQoIG9iaiwga2V5LCBwYXRoICkge1xuXHRcdGxldCBmb2xsb3dlcnMgPSB0aGlzLl9mb2xsb3dlcnMsXG5cdFx0ICAgIGkgICAgICAgICA9IGZvbGxvd2VycyAmJiBmb2xsb3dlcnMubGVuZ3RoO1xuXHRcdHdoaWxlICggZm9sbG93ZXJzICYmIGktLSApXG5cdFx0XHRpZiAoIGZvbGxvd2Vyc1tpXVswXSA9PT0gb2JqICYmIGZvbGxvd2Vyc1tpXVsxXSA9PT0ga2V5ICYmIGZvbGxvd2Vyc1tpXVsyXSA9PT0gcGF0aCApXG5cdFx0XHRcdHJldHVybiBmb2xsb3dlcnMuc3BsaWNlKGksIDEpO1xuXHR9XG5cdFxuXHQvKipcblx0ICogb25jZSgnc3RhYmxlJywgY2IpXG5cdCAqIEBwYXJhbSBvYmoge1JlYWN0LkNvbXBvbmVudHxTdG9yZXxmdW5jdGlvbilcblx0ICogQHBhcmFtIGtleSB7c3RyaW5nfSBvcHRpb25hbCBrZXkgd2hlcmUgdG8gbWFwIHRoZSBwdWJsaWMgc3RhdGVcblx0ICovXG5cdHRoZW4oIGNiICkge1xuXHRcdGlmICggdGhpcy5fc3RhYmxlIClcblx0XHRcdHJldHVybiBjYih0aGlzLmRhdGEpO1xuXHRcdHRoaXMub25jZSgnc3RhYmxlJywgZSA9PiBjYih0aGlzLmRhdGEpKTtcblx0fVxuXHRcblx0LyoqXG5cdCAqIEFkZCBhIGxvY2sgc28gdGhlIHN0b3JlIHdpbGwgbm90IHByb3BhZyBpdCBkYXRhIHVudGlsbCByZWxlYXNlKCkgaXMgY2FsbFxuXHQgKiBAcGFyYW0gcHJldmlvdXMge1N0b3JlfG51bWJlcnxBcnJheX0gQG9wdGlvbmFsIHdmIHRvIHdhaXQsIHJlbGVhc2VzIHRvIHdhaXQgb3Jcblx0ICogICAgIGFycmF5IG9mIHN0dWZmIHRvIHdhaXRcblx0ICogQHJldHVybnMge3RoaXN9XG5cdCAqL1xuXHR3YWl0KCBwcmV2aW91cyApIHtcblx0XHRpZiAoIHR5cGVvZiBwcmV2aW91cyA9PSBcIm51bWJlclwiIClcblx0XHRcdHJldHVybiB0aGlzLl9fbG9ja3MuYWxsICs9IHByZXZpb3VzO1xuXHRcdGlmICggaXMuYXJyYXkocHJldmlvdXMpIClcblx0XHRcdHJldHVybiBwcmV2aW91cy5tYXAodGhpcy53YWl0LmJpbmQodGhpcykpO1xuXHRcdFxuXHRcdHRoaXMuX3N0YWJsZSAmJiB0aGlzLmVtaXQoJ3Vuc3RhYmxlJywgdGhpcy5zdGF0ZSwgdGhpcy5kYXRhKTtcblx0XHR0aGlzLl9zdGFibGUgPSBmYWxzZTtcblx0XHR0aGlzLl9fbG9ja3MuYWxsKys7XG5cdFx0XG5cdFx0bGV0IHJlYXNvbiA9IGlzLnN0cmluZyhwcmV2aW91cykgPyBwcmV2aW91cyA6IG51bGw7XG5cdFx0aWYgKCByZWFzb24gKSB7XG5cdFx0XHR0aGlzLl9fbG9ja3NbcmVhc29uXSA9IHRoaXMuX19sb2Nrc1tyZWFzb25dIHx8IDA7XG5cdFx0XHR0aGlzLl9fbG9ja3NbcmVhc29uXSsrO1xuXHRcdH1cblx0XHRpZiAoIHByZXZpb3VzICYmIGlzLmZuKHByZXZpb3VzLnRoZW4pICkge1xuXHRcdFx0cHJldmlvdXMudGhlbih0aGlzLnJlbGVhc2UuYmluZCh0aGlzLCBudWxsKSk7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cdFxuXHQvKipcblx0ICogRGVjcmVhc2UgbG9ja3MgZm9yIHRoaXMgc3RvcmUsIGlmIGl0IHJlYWNoIDAgLFxuXHQgKiBpdCB3aWxsIGJlIHByb3BhZ2F0ZWQgdG8gdGhlIGZvbGxvd2Vycyxcblx0ICogdGhlbiwgYWxsIHN0dWZmIHBhc3NlZCB0byBcInRoZW5cIiBjYWxsIGJhY2sgd2lsbCBiZSBleGVjIC8gcmVsZWFzZWRcblx0ICogQHBhcmFtIGRlc3luY1xuXHQgKiBAcmV0dXJucyB7Kn1cblx0ICovXG5cdHJlbGVhc2UoIHJlYXNvbiwgY2IgKSB7XG5cdFx0bGV0IF9zdGF0aWMgPSB0aGlzLmNvbnN0cnVjdG9yLCBtZSA9IHRoaXM7XG5cdFx0bGV0IGkgICAgICAgPSAwLCB3YXNTdGFibGUgPSB0aGlzLl9zdGFibGU7XG5cdFx0XG5cdFx0aWYgKCBpcy5mbihyZWFzb24pICkge1xuXHRcdFx0Y2IgICAgID0gcmVhc29uO1xuXHRcdFx0cmVhc29uID0gbnVsbDtcblx0XHR9XG5cdFx0XG5cdFx0aWYgKCByZWFzb24gKSB7XG5cdFx0XHRpZiAoIHRoaXMuX19sb2Nrc1tyZWFzb25dID09IDAgKVxuXHRcdFx0XHRjb25zb2xlLmVycm9yKFwiUmVsZWFzZSBtb3JlIHRoYW4gbG9ja2luZyAhXCIsIHJlYXNvbik7XG5cdFx0XHR0aGlzLl9fbG9ja3NbcmVhc29uXSA9IHRoaXMuX19sb2Nrc1tyZWFzb25dIHx8IDA7XG5cdFx0XHR0aGlzLl9fbG9ja3NbcmVhc29uXS0tO1xuXHRcdH1cblx0XHRcblx0XHRpZiAoICFyZWFzb24gJiYgdGhpcy5fX2xvY2tzLmFsbCA9PSAwIClcblx0XHRcdGNvbnNvbGUuZXJyb3IoXCJSZWxlYXNlIG1vcmUgdGhhbiBsb2NraW5nICFcIik7XG5cdFx0XG5cdFx0aWYgKCAhLS10aGlzLl9fbG9ja3MuYWxsICYmIHRoaXMuaXNDb21wbGV0ZSgpICkge1xuXHRcdFx0bGV0IHByb3BhZyAgID0gdGhpcy5zaG91bGRQcm9wYWcodGhpcy5kYXRhKTtcblx0XHRcdHRoaXMuX3N0YWJsZSA9IHRydWU7XG5cdFx0XHRwcm9wYWcgJiYgdGhpcy5fcmV2Kys7Ly9cblx0XHRcdGlmICggcHJvcGFnICYmIHRoaXMuX2ZvbGxvd2Vycy5sZW5ndGggKVxuXHRcdFx0XHR0aGlzLl9mb2xsb3dlcnMuZm9yRWFjaChmdW5jdGlvbiBwcm9wYWcoIGZvbGxvd2VyICkge1xuXHRcdFx0XHRcdGxldCBkYXRhID0gZm9sbG93ZXJbMl0gPyBtZS5yZXRyaWV2ZShmb2xsb3dlclsyXSkgOiBtZS5kYXRhO1xuXHRcdFx0XHRcdC8vaWYgKCAhZGF0YSApIHJldHVybjtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHRpZiAoIHR5cGVvZiBmb2xsb3dlclswXSA9PSBcImZ1bmN0aW9uXCIgKSB7XG5cdFx0XHRcdFx0XHRmb2xsb3dlclswXShkYXRhKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0XHQvL2NiICYmIGkrKztcblx0XHRcdFx0XHRcdGZvbGxvd2VyWzBdLnNldFN0YXRlKFxuXHRcdFx0XHRcdFx0XHQoZm9sbG93ZXJbMV0pID8geyBbZm9sbG93ZXJbMV1dOiBkYXRhIH1cblx0XHRcdFx0XHRcdFx0ICAgICAgICAgICAgICA6IGRhdGFcblx0XHRcdFx0XHRcdFx0Ly8sXG5cdFx0XHRcdFx0XHRcdC8vY2IgJiYgKFxuXHRcdFx0XHRcdFx0XHQvLyAgICAoKSA9PiAoISgtLWkpICYmIGNiKCkpXG5cdFx0XHRcdFx0XHRcdC8vKVxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0Ly9lbHNlXG5cdFx0XHQhd2FzU3RhYmxlICYmIHRoaXMuZW1pdCgnc3RhYmxlJywgdGhpcy5kYXRhKTtcblx0XHRcdHByb3BhZyAmJiB0aGlzLmVtaXQoJ3VwZGF0ZScsIHRoaXMuZGF0YSk7XG5cdFx0XHRjYiAmJiBjYigpXG5cdFx0fVxuXHRcdGVsc2UgY2IgJiYgdGhpcy50aGVuKGNiKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXHRcblx0cHJvcGFnKCBkYXRhICkge1xuXHRcdHRoaXMuZW1pdCgndXBkYXRlJywgZGF0YSk7XG5cdH1cblx0XG5cdHJldGFpbiggcmVhc29uICkge1xuXHRcdHRoaXMuX19yZXRhaW5zLmFsbCsrO1xuXHRcdGlmICggcmVhc29uICkge1xuXHRcdFx0dGhpcy5fX3JldGFpbnNbcmVhc29uXSA9IHRoaXMuX19yZXRhaW5zW3JlYXNvbl0gfHwgMDtcblx0XHRcdHRoaXMuX19yZXRhaW5zW3JlYXNvbl0rKztcblx0XHR9XG5cdH1cblx0XG5cdGRpc3Bvc2UoIHJlYXNvbiApIHtcblx0XHQvL2NvbnNvbGUud2FybihcImRpc3Bvc2VcIiwgcmVhc29uLCB0aGlzLl9fcmV0YWlucyk7XG5cdFx0aWYgKCByZWFzb24gKSB7XG5cdFx0XHRpZiAoICF0aGlzLl9fcmV0YWluc1tyZWFzb25dIClcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiUlMgOiBEaXNwb3NlIG1vcmUgdGhhbiByZXRhaW5pbmcgb24gc3RvcmUgJ1wiICsgdGhpcy5uYW1lICsgXCInIDogXCIgKyByZWFzb24pO1xuXHRcdFx0XG5cdFx0XHR0aGlzLl9fcmV0YWluc1tyZWFzb25dLS07XG5cdFx0fVxuXHRcdGlmICggdGhpcy5fX3JldGFpbnMuYWxsID09IDAgKVxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiUlMgOiBEaXNwb3NlIG1vcmUgdGhhbiByZXRhaW5pbmcgb24gc3RvcmUgXCIgKyB0aGlzLm5hbWUpO1xuXHRcdFxuXHRcdHRoaXMuX19yZXRhaW5zLmFsbC0tO1xuXHRcdFxuXHRcdGlmICggIXRoaXMuX19yZXRhaW5zLmFsbCApIHtcblx0XHRcdGlmICggdGhpcy5fcGVyc2lzdGVuY2VUbSApIHtcblx0XHRcdFx0dGhpcy5fZGVzdHJveVRNICYmIGNsZWFyVGltZW91dCh0aGlzLl9kZXN0cm95VE0pO1xuXHRcdFx0XHR0aGlzLl9kZXN0cm95VE0gPSBzZXRUaW1lb3V0KFxuXHRcdFx0XHRcdGUgPT4ge1xuXHRcdFx0XHRcdFx0dGhpcy5fZGVzdHJveVRNID0gbnVsbDtcblx0XHRcdFx0XHRcdC8vdGhpcy50aGVuKHMgPT4ge1xuXHRcdFx0XHRcdFx0IXRoaXMuX19yZXRhaW5zLmFsbCAmJiAhdGhpcy5kZWFkICYmIHRoaXMuZGVzdHJveSgpXG5cdFx0XHRcdFx0XHQvL30pO1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0dGhpcy5fcGVyc2lzdGVuY2VUbVxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdC8vdGhpcy50aGVuKHMgPT5cblx0XHRcdFx0KCF0aGlzLl9fcmV0YWlucy5hbGwgJiYgIXRoaXMuZGVhZCAmJiB0aGlzLmRlc3Ryb3koKSlcblx0XHRcdFx0Ly8pO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRcblx0ZGVzdHJveSgpIHtcblx0XHQvLyAgY29uc29sZS5sb2coXCJkZXN0cm95XCIsIHRoaXMuX3VpZCk7XG5cdFx0XG5cdFx0dGhpcy5lbWl0KCdkZXN0cm95JywgdGhpcyk7XG5cdFx0aWYgKCB0aGlzLl9zdGFiaWxpemVyIClcblx0XHRcdGNsZWFyVGltZW91dCh0aGlzLl9zdGFiaWxpemVyKTtcblx0XHRcblx0XHRpZiAoIHRoaXMuX2ZvbGxvd2Vycy5sZW5ndGggKVxuXHRcdFx0dGhpcy5fZm9sbG93ZXJzLmZvckVhY2goXG5cdFx0XHRcdCggZm9sbG93ZXIgKSA9PiB7XG5cdFx0XHRcdFx0aWYgKCB0eXBlb2YgZm9sbG93ZXJbMF0gIT09IFwiZnVuY3Rpb25cIiApIHtcblx0XHRcdFx0XHRcdGlmICggZm9sbG93ZXJbMF0uc3RvcmVzIClcblx0XHRcdFx0XHRcdFx0ZGVsZXRlIGZvbGxvd2VyWzBdLnN0b3Jlc1tmb2xsb3dlclsxXV07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHQpO1xuXHRcdHRoaXMuX2ZvbGxvd2Vycy5sZW5ndGggPSAwO1xuXHRcdHRoaXMuY29uc3RydWN0b3IuX3JldiAgPSB0aGlzLnJldjtcblx0XHR0aGlzLmRlYWQgICAgICAgICAgICAgID0gdHJ1ZTtcblx0XHR0aGlzLl9yZXZzICAgICAgICAgICAgID0gdGhpcy5kYXRhID0gdGhpcy5zdGF0ZSA9IHRoaXMuc2NvcGUgPSBudWxsO1xuXHRcdHRoaXMucmVtb3ZlQWxsTGlzdGVuZXJzKCk7XG5cdH1cbn1cblxuLyoqXG4gKiBnZXQgYSBzdGF0aWMgYWxpYXNlZCByZWZlcmVuY2Ugb2YgYSBzdG9yZVxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqIEByZXR1cm5zIHt7c3RvcmU6IFN0b3JlLCBuYW1lOiAqfX1cbiAqL1xuU3RvcmUuYXMgPSBmdW5jdGlvbiAoIG5hbWUgKSB7XG5cdHJldHVybiB7IHN0b3JlOiB0aGlzLCBuYW1lIH07XG59XG5cbi8qKlxuICogQHRvZG9cbiAqIE1hcCBhbGwgbmFtZWQgc3RvcmVzIGluIHtrZXlzfSB0byB0aGUge29iamVjdH0ncyBzdGF0ZVxuICogSG9vayBjb21wb25lbnRXaWxsVW5tb3VudCAoZm9yIHJlYWN0IGNvbXApIG9yIGRlc3Ryb3kgdG8gdW5CaW5kIHRoZW0gYXV0b21hdGljYWxseVxuICogQHN0YXRpY1xuICogQHBhcmFtIG9iamVjdCB7T2JqZWN0fSB0YXJnZXQgc3RhdGUgYXdhcmUgb2JqZWN0IChSZWFjdC5Db21wb25lbnR8U3RvcmV8Li4uKVxuICogQHBhcmFtIGtleXMge0FycmF5fSBFeCA6IFtcInNlc3Npb25cIiwgXCJvdGhlclN0YXRpY05hbWVkU3RvcmU6a2V5XCIsXG4gKiAgICAgc3RvcmUuYXMoJ2Fub3RoZXJLZXknKV1cbiAqL1xuU3RvcmUubWFwID0gZnVuY3Rpb24gKCBjU3RvcmUsIGtleXMsIHNjb3BlLCBvcmlnaW4sIHNldEluaXRpYWwgPSBmYWxzZSApIHtcblx0bGV0IHRhcmdldFJldnMgICAgID0gY1N0b3JlLl9yZXZzIHx8IHt9O1xuXHRsZXQgdGFyZ2V0U2NvcGUgICAgPSBjU3RvcmUuc3RvcmVzIHx8IChjU3RvcmUuc3RvcmVzID0ge30pO1xuXHRsZXQgaW5pdGlhbE91dHB1dHMgPSB7fTtcblx0a2V5cyAgICAgICAgICAgICAgID0gaXMuYXJyYXkoa2V5cykgPyBbLi4ua2V5c10gOiBba2V5c107XG5cdFxuXHRcblx0c2NvcGUgPSBzY29wZSB8fCBTdG9yZS5zdGF0aWNTY29wZTtcblx0XG5cdGtleXMgPSBrZXlzLmZpbHRlcihcblx0XHQvLyBAdG9kbyA6IHVzZSBxdWVyeSByZWZzXG5cdFx0Ly8gKHN0b3JlKShcXC5zdG9yZSkqKFxcWyhcXCp8KHByb3BzKVxcdyspKylcXF0pPyhcXDphbGlhcylcblx0XHQoIGtleSApID0+IHtcblx0XHRcdGlmICggIWtleSApIHtcblx0XHRcdFx0Y29uc29sZS5lcnJvcihcIk5vdCBhIG1hcHBhYmxlIHN0b3JlIGl0ZW0gJ1wiICsga2V5ICsgXCInIGluIFwiICsgb3JpZ2luICsgJyAhIScpO1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRsZXQgbmFtZSxcblx0XHRcdCAgICBhbGlhcyxcblx0XHRcdCAgICBwYXRoLFxuXHRcdFx0ICAgIHN0b3JlLCBfa2V5O1xuXHRcdFx0aWYgKCBrZXkuc3RvcmUgJiYga2V5Lm5hbWUgKSB7XG5cdFx0XHRcdGFsaWFzID0gbmFtZSA9IGtleS5uYW1lO1xuXHRcdFx0XHRzdG9yZSA9IGtleS5zdG9yZTtcblx0XHRcdH1cblx0XHRcdGVsc2UgaWYgKCBpcy5mbihrZXkpICkge1xuXHRcdFx0XHRuYW1lICA9IGFsaWFzID0ga2V5Lm5hbWUgfHwga2V5LmRlZmF1bHROYW1lO1xuXHRcdFx0XHRzdG9yZSA9IGtleTtcblx0XHRcdH1cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHRfa2V5ICA9IGtleS5tYXRjaCgvKFteXFwuXFw6XSspKCg/OlxcLlteXFwuXFw6XSspKikoPzpcXDooW15cXC5cXDpdKykpPy8pO1xuXHRcdFx0XHRuYW1lICA9IF9rZXlbMV07XG5cdFx0XHRcdHBhdGggID0gX2tleVsyXSAmJiBfa2V5WzJdLnN1YnN0cigxKTtcblx0XHRcdFx0c3RvcmUgPSBzY29wZS5zdG9yZXNbX2tleVsxXV07XG5cdFx0XHRcdGFsaWFzID0gX2tleVszXSB8fCBwYXRoICYmIHBhdGgubWF0Y2goLyhbXlxcLl0qKSQvKVswXSB8fCBfa2V5WzFdO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCAhc3RvcmUgKSB7XG5cdFx0XHRcdGxldCBpID0gW107XG5cdFx0XHRcdGZvciAoIGxldCBvIGluIHNjb3BlLnN0b3JlcyApXG5cdFx0XHRcdFx0aS5wdXNoKG8pXG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoXCJOb3QgYSBtYXBwYWJsZSBzdG9yZSBpdGVtICdcIiArIG5hbWUgKyBcIi9cIiArIGFsaWFzICsgXCInIGluIFwiICsgKGNTdG9yZS5uYW1lIHx8IGNTdG9yZSkgKyAnICEhJywgc3RvcmUsIF9rZXksIHNjb3BlLnN0b3JlcywgaSk7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdGlmICggU2NvcGUuaXNTY29wZUNsYXNzKHN0b3JlKSApIHNjb3BlLl9tb3VudChuYW1lKTtcblx0XHRcdGlmICggU2NvcGUuaXNTY29wZShzdG9yZSkgKSB7XG5cdFx0XHRcdHN0b3JlID0gc2NvcGUuX21vdW50KGtleSk7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIGlmICggdGFyZ2V0UmV2c1tuYW1lXSApIHJldHVybiBmYWxzZTsvLyBpZ25vcmUgZGJsIHVzZXMgZm9yIG5vd1xuXHRcdFx0XG5cdFx0XHRcblx0XHRcdGlmICggaXMuZm4oc3RvcmUpICkge1xuXHRcdFx0XHRzY29wZS5fbW91bnQobmFtZSlcblx0XHRcdFx0c2NvcGUuc3RvcmVzW25hbWVdLmJpbmQoY1N0b3JlLCBhbGlhcywgc2V0SW5pdGlhbCwgcGF0aCk7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0c3RvcmUuYmluZChjU3RvcmUsIGFsaWFzLCBzZXRJbml0aWFsLCBwYXRoKTtcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0Ly8gZ2l2ZSBpbml0aWFsIHN0b3JlIHdlaWdodCBiYXNpbmcgc291cmNlc1xuXHRcdFx0c2NvcGUuc3RvcmVzW25hbWVdLl9zb3VyY2VzICYmIGNTdG9yZS5fc291cmNlcy5wdXNoKC4uLnNjb3BlLnN0b3Jlc1tuYW1lXS5fc291cmNlcyk7XG5cdFx0XHRcblx0XHRcdHRhcmdldFJldnNbYWxpYXNdID0gdGFyZ2V0UmV2c1thbGlhc10gfHwgdHJ1ZTtcblx0XHRcdCF0YXJnZXRTY29wZVtuYW1lXSAmJiAodGFyZ2V0U2NvcGVbbmFtZV0gPSBzY29wZS5zdG9yZXNbbmFtZV0pO1xuXHRcdFx0aWYgKCBzY29wZS5zdG9yZXNbbmFtZV0uaGFzT3duUHJvcGVydHkoJ2RhdGEnKSApXG5cdFx0XHRcdGluaXRpYWxPdXRwdXRzW25hbWVdID0gc2NvcGUuZGF0YVtuYW1lXTtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0KTtcblx0XG5cdC8vIC4uLiBAdG9kb1xuXHRjU3RvcmUub25jZSgnZGVzdHJveScsICggLi4uYXJneiApID0+IHtcblx0XHRrZXlzLm1hcChcblx0XHRcdCgga2V5ICkgPT4ge1xuXHRcdFx0XHRsZXQgbmFtZSxcblx0XHRcdFx0ICAgIGFsaWFzLCBwYXRoLFxuXHRcdFx0XHQgICAgc3RvcmU7XG5cdFx0XHRcdGlmICgga2V5LnN0b3JlICYmIGtleS5uYW1lICkge1xuXHRcdFx0XHRcdGFsaWFzID0gbmFtZSA9IGtleS5uYW1lO1xuXHRcdFx0XHRcdHN0b3JlID0ga2V5LnN0b3JlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2UgaWYgKCBpcy5mbihrZXkpICkge1xuXHRcdFx0XHRcdG5hbWUgID0gYWxpYXMgPSBrZXkubmFtZSB8fCBrZXkuZGVmYXVsdE5hbWU7XG5cdFx0XHRcdFx0c3RvcmUgPSBzY29wZS5zdG9yZXNbbmFtZV07XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0a2V5ICAgPSBrZXkubWF0Y2goLyhbXlxcLlxcOl0rKSgoPzpcXC5bXlxcLlxcOl0rKSopKD86XFw6KFteXFwuXFw6XSspKT8vKTtcblx0XHRcdFx0XHRuYW1lICA9IGtleVsxXTtcblx0XHRcdFx0XHRwYXRoICA9IGtleVsyXSAmJiBrZXlbMl0uc3Vic3RyKDEpO1xuXHRcdFx0XHRcdHN0b3JlID0gc2NvcGUuc3RvcmVzW2tleVsxXV07XG5cdFx0XHRcdFx0YWxpYXMgPSBrZXlbM10gfHwgcGF0aCAmJiBwYXRoLm1hdGNoKC8oW15cXC5dKikkLylbMF0gfHwga2V5WzFdO1xuXHRcdFx0XHR9XG5cdFx0XHRcdFxuXHRcdFx0XHRzdG9yZSAmJiAhaXMuZm4oc3RvcmUpICYmIHN0b3JlLnVuQmluZChjU3RvcmUsIGFsaWFzLCBwYXRoKVxuXHRcdFx0fVxuXHRcdCk7XG5cdH0pXG5cdFxuXHRyZXR1cm4gaW5pdGlhbE91dHB1dHM7XG59O1xuXG5cblN0b3JlLmlzU3RvcmUgICAgICA9IFNjb3BlLmlzU3RvcmUgPSBmdW5jdGlvbiAoIG9iaiApIHtcblx0cmV0dXJuIG9iaiBpbnN0YW5jZW9mIFN0b3JlXG59XG5TdG9yZS5pc1N0b3JlQ2xhc3MgPSBTY29wZS5pc1N0b3JlQ2xhc3MgPSBmdW5jdGlvbiAoIG9iaiApIHtcblx0cmV0dXJuIFN0b3JlLmlzUHJvdG90eXBlT2Yob2JqKSB8fCBvYmogPT09IFN0b3JlXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0b3JlO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9TdG9yZS5qcyIsIi8qXG4gKiBUaGUgTUlUIExpY2Vuc2UgKE1JVClcbiAqIENvcHlyaWdodCAoYykgMjAxOS4gV2lzZSBXaWxkIFdlYlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUg4oCcU29mdHdhcmXigJ0pLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQg4oCcQVMgSVPigJ0sIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuICpcbiAqICBAYXV0aG9yIDogTmF0aGFuYWVsIEJyYXVuXG4gKiAgQGNvbnRhY3QgOiBuOHR6LmpzQGdtYWlsLmNvbVxuICovXG5cbmltcG9ydCBpcyBmcm9tIFwiaXNcIjtcblxuLyoqXG4gKiBNaW5pbWFsIHB1c2ggc2VxdWVuY2VyLCBhcHBseSBzdG9yZXMgc3BlY2lmaWMgdGFzayBpbiB0aGUgcmlnaHQgb3JkZXJcbiAqL1xubGV0IHRhc2tRdWV1ZSAgICAgID0gW10sXG4gICAgY3VyV2VpZ2h0ICAgICAgPSAwLFxuICAgIG1heFdlaWdodCAgICAgID0gMCxcbiAgICBtaW5XZWlnaHQgICAgICA9IDAsXG4gICAgdGFza0NvdW50ICAgICAgPSAwLFxuICAgIGRlU3luYyAgICAgICAgID0gZmFsc2UsXG4gICAgZGVTeW5jTWF4VGFza3MgPSAxMCxcbiAgICB0YXNrLFxuICAgIGlzUnVubmluZyxcbiAgICBlcnJvckNhdGNoZXIgICA9IHtcblx0ICAgIGxhc3RFcnJvcjogbnVsbCxcblx0ICAgIGRpc3BhdGNoIDogZnVuY3Rpb24gKCBlcnJvciApIHtcblx0XHQgICAgZXJyb3JDYXRjaGVyLmRpc2FibGUoKTtcblx0XHQgICAgaWYgKCB0YXNrICYmIHRhc2tbMF0uaGFuZGxlRXJyb3IgKSB7XG5cdFx0XHQgICAgdGFza1swXS5oYW5kbGVFcnJvcihlcnJvciwgdGFzayk7XG5cdFx0ICAgIH1cblx0XHQgICAgZWxzZSBpZiAoIHRhc2sgKVxuXHRcdFx0ICAgIGNvbnNvbGUuZXJyb3IoXCJSZVNjb3BlIDogQW4gYXBwbHkgdGFzayBoYXMgZmFpbGVkICEhXCIsIHRhc2tbMV0sIFwiIG9uIFwiLCB0YXNrWzBdLm5hbWUgfHwgdGFza1swXS5jb25zdHJ1Y3Rvci5uYW1lKVxuXHRcdFxuXHRcdCAgICBpc1J1bm5pbmcgPSBmYWxzZTtcblx0XHQgICAgdGFzayAgICAgID0gbnVsbDtcblx0XHQgICAgcnVuTm93KCk7XG5cdCAgICB9LFxuXHQgICAgZW5hYmxlICAgOiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpXG5cdCAgICAgICAgICAgICAgID8gKCkgPT4ge1xuXHRcdFx0ICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIGVycm9yQ2F0Y2hlci5kaXNwYXRjaClcblx0XHQgICAgfSA6ICgpID0+IHtcblx0XHRcdCAgICBwcm9jZXNzLm9uKCd1bmNhdWdodEV4Y2VwdGlvbicsIGVycm9yQ2F0Y2hlci5kaXNwYXRjaCk7XG5cdFx0ICAgIH0sXG5cdCAgICBkaXNhYmxlICA6ICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJylcblx0ICAgICAgICAgICAgICAgPyAoKSA9PiB7XG5cdFx0XHQgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgZXJyb3JDYXRjaGVyLmRpc3BhdGNoKVxuXHRcdCAgICB9IDogKCkgPT4ge1xuXHRcdFx0ICAgIHByb2Nlc3MucmVtb3ZlTGlzdGVuZXIoJ3VuY2F1Z2h0RXhjZXB0aW9uJywgZXJyb3JDYXRjaGVyLmRpc3BhdGNoKTtcblx0XHQgICAgfVxuICAgIH1cbjtcblxuZnVuY3Rpb24gcnVuTm93KCkge1xuXHRpZiAoICFpc1J1bm5pbmcgKSB7XG5cdFx0cnVuKCk7XG5cdH1cbn1cblxuZnVuY3Rpb24gcnVuKCkge1xuXHRsZXQgZnJvbSAgPSBEYXRlLm5vdygpO1xuXHRpc1J1bm5pbmcgPSB0cnVlO1xuXHRlcnJvckNhdGNoZXIuZW5hYmxlKCk7XG5cdHdoaWxlICggdGFza0NvdW50ICkge1xuXHRcdFxuXHRcdC8vIHRyeSBmb3IgdGhlIGN1cnJlbnQgd2VpZ2h0XG5cdFx0d2hpbGUgKCAhKHRhc2tRdWV1ZVtjdXJXZWlnaHRdICYmIHRhc2tRdWV1ZVtjdXJXZWlnaHRdLmxlbmd0aCkgKVxuXHRcdFx0Y3VyV2VpZ2h0Kys7XG5cdFx0XG5cdFx0dGFza0NvdW50LS07XG5cdFx0dGFzayA9IHRhc2tRdWV1ZVtjdXJXZWlnaHRdLnNoaWZ0KCk7XG5cdFx0Ly9jb25zb2xlLmxvZyhcIlRhc2sgOiBcIiwgdGFza1sxXSwgXCIgb24gXCIsIHRhc2tbMF0ubmFtZSk7XG5cdFx0IXRhc2tbMF0uZGVhZCAmJiB0YXNrWzBdW3Rhc2tbMV1dKHRhc2tbMl0pO1xuXHR9XG5cdHRhc2sgPSB1bmRlZmluZWQ7XG5cdGVycm9yQ2F0Y2hlci5kaXNhYmxlKCk7XG5cdFxuXHRpc1J1bm5pbmcgPSBmYWxzZTtcblx0aWYgKCB0YXNrQ291bnQgKSB7XG5cdFx0c2V0VGltZW91dChydW5Ob3cpO1xuXHR9XG59XG5cbi8vXG4vL2luZGV4LnNldFRhc2tEZVN5bmMgPSAoIG5iICkgPT4ge1xuLy8gICAgaWYgKCBuYiA9PT0gZmFsc2UgKVxuLy8gICAgICAgIHJldHVybiBkZVN5bmMgPSBmYWxzZTtcbi8vICAgIGVsc2UgaWYgKCBuYiA9PT0gdHJ1ZSApIHtcbi8vICAgICAgICBkZVN5bmMgICAgICAgICA9IHRydWU7XG4vLyAgICAgICAgZGVTeW5jTWF4VGFza3MgPSAxMDtcbi8vICAgIH1cbi8vICAgIGVsc2UgKGlzLmludChuYikpXG4vLyAgICB7XG4vLyAgICAgICAgZGVTeW5jICAgICAgICAgPSB0cnVlO1xuLy8gICAgICAgIGRlU3luY01heFRhc2tzID0gbmI7XG4vLyAgICB9XG4vL307XG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0cHVzaFRhc2soIG9iaiwgZm4sIGFyZ3ogKSB7XG5cdFx0LyoqXG5cdFx0ICogVGhlIG1vcmUgYSBzdG9yZSBoYXZlIHNvdXJjZXMsIHRoZSBtb3JlIGl0IHNob3VsZCBiZSBwcm9jZXNzZWQgZmlyc3Rcblx0XHQgKiBTbyBsZWFmcyBzdG9yZXMgc3RheSBzeW5jLCBhbmQgcm9vdCBzdG9yZXMgcmVjZWl2ZSBtZXJnZWQgc3RhdGUgdXBkYXRlcztcblx0XHQgKiBnbG9iYWwgc3RhdGUgc3RheSBjb2hlcmVudFxuXHRcdCAqXG5cdFx0ICogVGhpcyBtZWFuIHdoYXRldmVyIHRoZSBudW1iZXIgb2Ygc3RvcmVzICYgdGhlIGNvbXBsZXhpdHkgb2YgdGhlIGRlcHMsXG5cdFx0ICogdXBkYXRpbmcgYSBzdG9yZSBzdGF0ZSB3aWxsIHVwZGF0ZSBpdHMgc3luY2hyb25lIGNoaWxkIHN0b3JlcyBpbW1lZGlhdGVseVxuXHRcdCAqXG5cdFx0ICpcblx0XHQgKiBAdHlwZSB7KnxudW1iZXJ9XG5cdFx0ICovXG5cdFx0bGV0IHdlaWdodCA9IG9iai5fc291cmNlcyAmJiBvYmouX3NvdXJjZXMubGVuZ3RoIHx8IDEsXG5cdFx0ICAgIHN0YWNrICA9IHRhc2tRdWV1ZVt3ZWlnaHRdID1cblx0XHRcdCAgICB0YXNrUXVldWVbd2VpZ2h0XSB8fCBbXTtcblx0XHRcblx0XHRtYXhXZWlnaHQgPSBNYXRoLm1heChtYXhXZWlnaHQsIHdlaWdodCk7XG5cdFx0Y3VyV2VpZ2h0ID0gTWF0aC5taW4oY3VyV2VpZ2h0LCB3ZWlnaHQpO1xuXHRcdHRhc2tDb3VudCsrO1xuXHRcdFxuXHRcdC8vY29uc29sZS5sb2coXCJQdXNoIFRhc2sgOiBcIiwgZm4sIFwiIG9uIFwiLCBvYmoubmFtZSwgd2VpZ2h0KTtcblx0XHRzdGFjay5wdXNoKFtvYmosIGZuLCBhcmd6XSk7XG5cdFx0c2V0VGltZW91dChydW5Ob3csIDApO1xuXHRcdHJldHVybiBzdGFjay5sZW5ndGg7XG5cdH1cbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWxzL1Rhc2tTZXF1ZW5jZXIuanMiLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Byb2Nlc3MvYnJvd3Nlci5qc1xuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==