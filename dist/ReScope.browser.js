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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOWFmMTk3MTExMmY4N2U4YjEyNDEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9TY29wZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2lzL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vc2hvcnRpZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3Nob3J0aWQvbGliL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vc2hvcnRpZC9saWIvYWxwaGFiZXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9zaG9ydGlkL2xpYi9yYW5kb20vcmFuZG9tLWZyb20tc2VlZC5qcyIsIndlYnBhY2s6Ly8vLi9+L3Nob3J0aWQvbGliL2VuY29kZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3Nob3J0aWQvbGliL3JhbmRvbS9yYW5kb20tYnl0ZS1icm93c2VyLmpzIiwid2VicGFjazovLy8uL34vc2hvcnRpZC9saWIvZGVjb2RlLmpzIiwid2VicGFjazovLy8uL34vc2hvcnRpZC9saWIvYnVpbGQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9zaG9ydGlkL2xpYi9pcy12YWxpZC5qcyIsIndlYnBhY2s6Ly8vLi9+L3Nob3J0aWQvbGliL3V0aWwvY2x1c3Rlci13b3JrZXItaWQtYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvRW1pdHRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1N0b3JlLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9UYXNrU2VxdWVuY2VyLmpzIiwid2VicGFjazovLy8uL34vcHJvY2Vzcy9icm93c2VyLmpzIl0sIm5hbWVzIjpbIiRnbG9iYWwiLCJ3aW5kb3ciLCJnbG9iYWwiLCJSUyIsIl9fX3Jlc2NvcGUiLCJjb25zb2xlIiwid2FybiIsIlNjb3BlIiwiU3RvcmUiLCJzY29wZVJlZiIsIm1hcCIsImtleSIsIl9fcHJvdG9fX3B1c2giLCJ0YXJnZXQiLCJpZCIsInBhcmVudCIsImZuIiwicHJvdG90eXBlIiwiXyIsImFsbFNjb3BlcyIsInNtIiwic3RhdGUiLCJfcmVmcyIsImFjdGlvbnMiLCJwYXRoIiwiYXBwbGllciIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwiY3BhdGgiLCJwdXNoIiwiRnVuY3Rpb24iLCJhcyIsInNjb3BlcyIsInNrZXkiLCJpcyIsImFycmF5Iiwic29ydCIsImEiLCJiIiwiZmlyc3RuYW1lIiwiam9pbiIsInN0b3Jlc01hcCIsInVwcGVyU2NvcGUiLCJzbmFwc2hvdCIsImRhdGEiLCJpbmNyZW1lbnRJZCIsInBlcnNpc3RlbmNlVG0iLCJhdXRvRGVzdHJveSIsInJvb3RFbWl0dGVyIiwiYm91bmRlZEFjdGlvbnMiLCJrZXlQSUQiLCJfaWQiLCJzaG9ydGlkIiwiZ2VuZXJhdGUiLCJiYXNlSWQiLCJpc0xvY2FsSWQiLCJyZWdpc3RlciIsImkiLCJfcmV2Iiwic3RvcmVzIiwiX2F1dG9EZXN0cm95IiwiY29uc3RydWN0b3IiLCJkZWFkIiwiRXJyb3IiLCJzb3VyY2VzIiwiY2hpbGRTY29wZXMiLCJjaGlsZFNjb3Blc0xpc3QiLCJ1blN0YWJsZUNoaWxkcyIsInNlZW5DaGlsZHMiLCJfbGlzdGVuaW5nIiwiX3Njb3BlIiwiX21peGVkIiwiX21peGVkTGlzdCIsImZvbGxvd2VycyIsIl9fcmV0YWlucyIsImFsbCIsIl9fbG9ja3MiLCJfYm91bmRlZEFjdGlvbnMiLCJ0ZXN0IiwiaW5jbHVkZXMiLCJiaW5kIiwicmV0YWluIiwiX3N0YWJsZSIsIndhaXQiLCJvbiIsIl9wYXJlbnRMaXN0IiwicmVsZWFzZSIsIl9wcm9wYWciLCJfYWRkQ2hpbGQiLCJyZXN0b3JlIiwic2V0VGltZW91dCIsImRpc3Bvc2UiLCJzdG9yZUlkTGlzdCIsIl9tb3VudCIsInN0b3JlSWQiLCJhcmd1bWVudHMiLCJyZWYiLCJwYXJzZVJlZiIsInJlZHVjZVJpZ2h0IiwibW91bnRlZCIsImN0eCIsInN0b3JlIiwidGFza1F1ZXVlIiwiaXNTdG9yZUNsYXNzIiwibmFtZSIsImxlbmd0aCIsInNoaWZ0IiwiaXNTY29wZUNsYXNzIiwiJHBhcmVudCIsIm1vdW50Iiwic2xpY2UiLCJpc1N0b3JlIiwidW5kZWZpbmVkIiwic2V0U3RhdGUiLCJpc1Njb3BlIiwiX3dhdGNoU3RvcmUiLCJyZWxpbmsiLCJzaW5nbGV0b24iLCJzcmNDdHgiLCJ0YXJnZXRDdHgiLCJleHRlcm5hbCIsImZvcmNlIiwiaG90UmVsb2FkaW5nIiwiYWN0aXZlQWN0aW9ucyIsImluZm8iLCJ0bXAiLCJuZXh0U3RhdGUiLCJkZXN0cm95IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwiZ2V0Iiwic2V0IiwidiIsImFjdCIsImhhc093blByb3BlcnR5IiwiX190YXJnZXRTdG9yZXMiLCJkaXNwYXRjaCIsImlzU3RhYmxlIiwicHJvcGFnIiwibGlzdHMiLCJfX29yaWdpbiIsInNldEluaXRpYWwiLCJyZXZNYXAiLCJsYXN0UmV2cyIsInJlZktleXMiLCJzdHJpbmciLCJyZWR1Y2UiLCJyZXZzIiwicmV2IiwicmVmcyIsInJldGFpblN0b3JlcyIsImdldFVwZGF0ZXMiLCJkaXNwb3NlU3RvcmVzIiwic3BsaWNlIiwicmVmTGlzdCIsIm1peGVkQ1dVbm1vdW50IiwidW5Nb3VudEtleSIsImlzUmVhY3RDb21wb25lbnQiLCJ1bkJpbmQiLCJhbGlhcyIsInJldHJpZXZlIiwic3BsaXQiLCJvYmoiLCJjU2NvcGUiLCJyZXRyaWV2ZVN0b3JlIiwic3RvcmVzUmV2TWFwIiwibG9jYWwiLCJ1cGRhdGVkIiwiZ2V0U3RvcmVzUmV2cyIsIl9nZXRSZXZNYXAiLCJvdXRwdXQiLCJjaGlsZHMiLCJfZ2V0QWxsQ2hpbGRzIiwiY2ZnIiwicGFyZW50QWxpYXMiLCJzaWQiLCJzZXJpYWxpemVfZXgiLCJleGNsdWRlIiwid2l0aENoaWxkcyIsIndpdGhNaXhlZCIsIm5vcmVmcyIsInNlcmlhbGl6ZSIsIndpdGhDaGlsZCIsIndpdGhQYXJlbnRzIiwiaCIsImsiLCJib29sIiwic25hcCIsInRha2VTbmFwc2hvdEJ5S2V5Iiwic3RhcnRzV2l0aCIsInN1YnN0ciIsImdldFNuYXBzaG90QnlLZXkiLCJkZWxldGVTbmFwc2hvdEJ5S2V5IiwicmVwbGFjZSIsInBTdGF0ZSIsIl9yZWYiLCJhY3Rpb24iLCJhcmd6Iiwic3RhY2siLCJiQWN0cyIsInRyaWdnZXIiLCJjYiIsIm9uY2UiLCJ0aGVuIiwib25jZVN0YWJsZVRyZWUiLCJyZWFzb24iLCJlbWl0IiwiZXJyb3IiLCJzdGFiaWxpemVyVE0iLCJjbGVhclRpbWVvdXQiLCJwcm9wYWdUTSIsInJlbWFwcyIsInNjb3BlIiwid2FzU3RhYmxlIiwiaW5kZXhPZiIsInVuIiwiZGVzdHJveVRNIiwicmVtb3ZlTGlzdGVuZXIiLCJmb2xsb3dlciIsIl9ybUNoaWxkIiwiRXZlbnRFbWl0dGVyIiwiaXNQcm90b3R5cGVPZiIsIkVtaXR0ZXIiLCJfZXZlbnRzIiwiZXZ0Iiwid2Fsa25TZXQiLCJ3YWxrbkdldCIsImtleVdhbGtuU2V0Iiwia2V5V2Fsa25HZXQiLCJyZXF1aXJlIiwidmFsdWUiLCJpc0tleSIsImZpbHRlciIsIlRhc2tTZXF1ZW5jZXIiLCJvYmpQcm90byIsImdldFByb3RvdHlwZU9mIiwiX3N0YXRpYyIsImdldFNjb3BlIiwic3RhdGljU2NvcGUiLCJ3YXRjaHMiLCJ1c2UiLCJhcHBseSIsImluaXRpYWxTdGF0ZSIsImRlZmF1bHRTdGF0ZSIsIl91aWQiLCJfb25TdGFiaWxpemUiLCJfcGVyc2lzdGVuY2VUbSIsIl9jZmciLCJzY29wZU9iaiIsIiRzY29wZSIsIiRzdG9yZXMiLCIkYWN0aW9ucyIsIiRkaXNwYXRjaCIsIl9yZXZzIiwiX3JlcXVpcmUiLCJfc291cmNlcyIsIl91c2UiLCJtYXRjaCIsInJlZjIiLCJfZm9sbG93ZXJzIiwiX2NoYW5nZXNTVyIsIl9hZnRlckNvbnN0cnVjdG9yIiwiaW5pdGlhbERhdGEiLCJhcHBsaWVkIiwiX25leHRTdGF0ZSIsInNob3VsZEFwcGx5IiwibWFuYWdlZCIsIm5EYXRhcyIsInIiLCJjRGF0YXMiLCJpc0NvbXBsZXRlIiwiZm9sbG93IiwiY2FsbCIsImNoYW5nZXMiLCJfc3RhYmlsaXplciIsInB1c2hUYXNrIiwibnMiLCJoYXNEYXRhQ2hhbmdlIiwic3RhYmxlIiwiZm9yY2VkU3RhdGUiLCJuZXh0RGF0YSIsInN5bmMiLCJjaGFuZ2UiLCJwdXNoU3RhdGUiLCJzdGFiaWxpemUiLCJzSWQiLCJyZWZzQ291bnQiLCJwZXJzaXN0ZW50Iiwic2hvdWxkU2VyaWFsaXplIiwiZGF0YVJlZnMiLCJzdGF0ZUtleXMiLCJzdGF0ZVJlZnMiLCJpblJlZnNDb3VudCIsImluUmVmcyIsIl9fcHJvdG9fXyIsIm51bWJlciIsImltbWVkaWF0ZSIsInJlc3RvcmVSZWZQYXRoIiwicHJldmlvdXMiLCJtZSIsInNob3VsZFByb3BhZyIsIl9kZXN0cm95VE0iLCJyZW1vdmVBbGxMaXN0ZW5lcnMiLCJjU3RvcmUiLCJvcmlnaW4iLCJ0YXJnZXRSZXZzIiwidGFyZ2V0U2NvcGUiLCJpbml0aWFsT3V0cHV0cyIsIl9rZXkiLCJkZWZhdWx0TmFtZSIsIm8iLCJjdXJXZWlnaHQiLCJtYXhXZWlnaHQiLCJtaW5XZWlnaHQiLCJ0YXNrQ291bnQiLCJkZVN5bmMiLCJkZVN5bmNNYXhUYXNrcyIsInRhc2siLCJpc1J1bm5pbmciLCJlcnJvckNhdGNoZXIiLCJsYXN0RXJyb3IiLCJkaXNhYmxlIiwiaGFuZGxlRXJyb3IiLCJydW5Ob3ciLCJlbmFibGUiLCJhZGRFdmVudExpc3RlbmVyIiwicHJvY2VzcyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJydW4iLCJmcm9tIiwiRGF0ZSIsIm5vdyIsIndlaWdodCIsIk1hdGgiLCJtYXgiLCJtaW4iXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztB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QUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLE1BQU07QUFDakIsWUFBVyxNQUFNO0FBQ2pCLGFBQVksUUFBUTtBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxNQUFNO0FBQ2pCLGFBQVksUUFBUTtBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsTUFBTTtBQUNqQixhQUFZLFFBQVE7QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLE1BQU07QUFDakIsYUFBWSxRQUFRO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsTUFBTTtBQUNqQixhQUFZLFFBQVE7QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsTUFBTTtBQUNqQixhQUFZLFFBQVE7QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLE1BQU07QUFDakIsYUFBWSxRQUFRO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLE1BQU07QUFDakIsYUFBWSxRQUFRO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtB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QUFDQTtBQUNBLFlBQVcsTUFBTTtBQUNqQixhQUFZLFFBQVE7QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxNQUFNO0FBQ2pCLGFBQVksUUFBUTtBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLE1BQU07QUFDakIsYUFBWSxRQUFRO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsTUFBTTtBQUNqQixhQUFZLFFBQVE7QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLE1BQU07QUFDakIsYUFBWSxRQUFRO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDL3hCQTtBQUNBOzs7Ozs7O0FDREE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNoRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNqR0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUN4QkE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDbEJBOztBQUVBLCtFQUE4RTs7QUFFOUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQ2JBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDaEJBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7O0FDL0NBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1C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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBcUI7QUFDckI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNDQUFxQzs7QUFFckM7QUFDQTtBQUNBOztBQUVBLDRCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSw2QkFBNEIsVUFBVSIsImZpbGUiOiIuLi8uLi9kaXN0L1JlU2NvcGUuYnJvd3Nlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA5YWYxOTcxMTEyZjg3ZThiMTI0MSIsIi8qXG4gKiBUaGUgTUlUIExpY2Vuc2UgKE1JVClcbiAqIENvcHlyaWdodCAoYykgMjAxOS4gV2lzZSBXaWxkIFdlYlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUg4oCcU29mdHdhcmXigJ0pLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQg4oCcQVMgSVPigJ0sIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuICpcbiAqICBAYXV0aG9yIDogTmF0aGFuYWVsIEJyYXVuXG4gKiAgQGNvbnRhY3QgOiBuOHR6LmpzQGdtYWlsLmNvbVxuICovXG5cbmxldCAkZ2xvYmFsID0gKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSA/IHdpbmRvdyA6IGdsb2JhbDtcblxuaW1wb3J0IFNjb3BlIGZyb20gXCIuL1Njb3BlXCI7XG5pbXBvcnQgU3RvcmUgZnJvbSBcIi4vU3RvcmVcIjtcblxuY29uc3QgUlMgPSAkZ2xvYmFsLl9fX3Jlc2NvcGUgfHwge307XG5cbmlmICggJGdsb2JhbC5fX19yZXNjb3BlICkge1xuXHRjb25zb2xlLndhcm4oXCJSZVNjb3BlIGlzIGRlZmluZWQgbXVsdGlwbGUgdGltZXMgISEgXFxuQ2hlY2sgeW91J3JlIHBhY2thZ2luZ1wiKVxufVxuZWxzZSB7XG5cdFxuXHQkZ2xvYmFsLl9fX3Jlc2NvcGUgPSBSUztcblx0U2NvcGUuU3RvcmUgICAgICAgID0gU3RvcmU7XG5cdFJTLlNjb3BlICAgICAgICAgICA9IFNjb3BlO1xuXHRSUy5TdG9yZSAgICAgICAgICAgPSBTdG9yZTtcblx0UlMuc2NvcGVSZWYgICAgICAgID1cblx0XHRmdW5jdGlvbiBzY29wZVJlZiggbWFwLCBrZXkgKSB7XG5cdFx0XHRtYXBba2V5XSA9IG5ldyBTY29wZS5zY29wZVJlZihtYXBba2V5XSk7XG5cdFx0XHRyZXR1cm4gbWFwO1xuXHRcdH07XG5cdFxufVxuZXhwb3J0IGRlZmF1bHQgUlM7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LmpzIiwiLypcbiAqIFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuICogQ29weXJpZ2h0IChjKSAyMDE5LiBXaXNlIFdpbGQgV2ViXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSDigJxTb2Z0d2FyZeKAnSksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCDigJxBUyBJU+KAnSwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4gKlxuICogIEBhdXRob3IgOiBOYXRoYW5hZWwgQnJhdW5cbiAqICBAY29udGFjdCA6IG44dHouanNAZ21haWwuY29tXG4gKi9cblxuaW1wb3J0IGlzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSBcImlzXCI7XG5pbXBvcnQgc2hvcnRpZCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tIFwic2hvcnRpZFwiO1xuaW1wb3J0IEV2ZW50RW1pdHRlciAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSBcIi4vdXRpbHMvRW1pdHRlclwiO1xuaW1wb3J0IHt3YWxrblNldCwgd2Fsa25HZXQsIGtleVdhbGtuU2V0LCBrZXlXYWxrbkdldH0gZnJvbSAnLi91dGlscy91dGlscyc7XG5cbmNvbnN0IF9fcHJvdG9fX3B1c2ggPSAoIHRhcmdldCwgaWQsIHBhcmVudCApID0+IHtcblx0ICAgICAgbGV0IGZuICAgICAgID0gZnVuY3Rpb24gKCkge1xuXHQgICAgICB9O1xuXHQgICAgICBmbi5wcm90b3R5cGUgPSBwYXJlbnQgPyBuZXcgcGFyZW50Ll9baWRdKCkgOiB0YXJnZXRbaWRdIHx8IHt9O1xuXHQgICAgICB0YXJnZXRbaWRdICAgPSBuZXcgZm4oKTtcblx0ICAgICAgdGFyZ2V0Ll9baWRdID0gZm47XG4gICAgICB9LFxuICAgICAgYWxsU2NvcGVzICAgICA9IHt9O1xuXG5cbi8qKlxuICogQmFzZSBTY29wZSBvYmplY3RcbiAqL1xuY2xhc3MgU2NvcGUgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuXHRcblx0c3RhdGljIHBlcnNpc3RlbmNlVG0gPSAxOy8vIGlmID4gMCwgd2lsbCB3YWl0ICdwZXJzaXN0ZW5jZVRtJyBtcyBiZWZvcmUgZGVzdHJveSB3aGVuIGRpc3Bvc2UgcmVhY2ggMFxuXHRzdGF0aWMgU3RvcmUgICAgICAgICA9IG51bGw7XG5cdHN0YXRpYyBzY29wZVJlZiAgICAgID0gZnVuY3Rpb24gc2NvcGVSZWYoIHBhdGggKSB7XG5cdFx0dGhpcy5wYXRoID0gcGF0aDtcblx0fTtcblx0c3RhdGljIHNjb3BlcyAgICAgICAgPSBhbGxTY29wZXM7Ly8gYWxsIGFjdGl2ZSBzY29wZXNcblx0LyoqXG5cdCAqIGdldCBhIHBhcnNlZCByZWZlcmVuY2UgbGlzdCBmcm9tIHN0YXRlTWFwXG5cdCAqIEBwYXJhbSBfcmVmXG5cdCAqIEByZXR1cm5zIHt7c3RvcmVJZCwgcGF0aCwgYWxpYXM6ICosIHJlZjogKn19XG5cdCAqL1xuXHRzdGF0aWMgc3RhdGVNYXBUb1JlZkxpc3QoIHNtLCBzdGF0ZSA9IHt9LCBfcmVmcyA9IFtdLCBhY3Rpb25zID0ge30sIHBhdGggPSBcIlwiICkge1xuXHRcdGxldCBhcHBsaWVyO1xuXHRcdE9iamVjdC5rZXlzKHNtKS5mb3JFYWNoKFxuXHRcdFx0a2V5ID0+IHtcblx0XHRcdFx0bGV0IGNwYXRoID0gcGF0aCA/IHBhdGggKyAnLicgKyBrZXkgOiBrZXk7XG5cdFx0XHRcdFxuXHRcdFx0XHRzbVtrZXldIGluc3RhbmNlb2YgU2NvcGUuc2NvcGVSZWZcblx0XHRcdFx0PyBfcmVmcy5wdXNoKHNtW2tleV0ucGF0aCArICc6JyArIGNwYXRoKVxuXHRcdFx0XHQ6IChzbVtrZXldICYmIHNtW2tleV0gaW5zdGFuY2VvZiBGdW5jdGlvbilcblx0XHRcdFx0ICA/IGtleSA9PSBcIiRhcHBseVwiXG5cdFx0XHRcdCAgICA/IGFwcGxpZXIgPSBzbVtrZXldXG5cdFx0XHRcdCAgICA6IGFjdGlvbnNba2V5XSA9IHNtW2tleV1cblx0XHRcdFx0ICA6IChzbVtrZXldICYmIHNtW2tleV0ucHJvdG90eXBlIGluc3RhbmNlb2YgU2NvcGUuU3RvcmUpXG5cdFx0XHRcdCAgICA/IF9yZWZzLnB1c2goc21ba2V5XS5hcyhjcGF0aCkpXG5cdFx0XHRcdCAgICA6IHN0YXRlW2NwYXRoXSA9IHNtW2tleV1cblx0XHRcdFx0Ly86IHRoaXMuc3RhdGVNYXBUb1JlZkxpc3Qoc21ba2V5XSwgX3JlZnMsIHBhdGggKyAnLicgKyBrZXkpXG5cdFx0XHR9XG5cdFx0KVxuXHRcdHJldHVybiBhcHBsaWVyO1xuXHR9XG5cdFxuXHRzdGF0aWMgZ2V0U2NvcGUoIHNjb3BlcyApIHtcblx0XHRsZXQgc2tleSA9IGlzLmFycmF5KHNjb3BlcykgPyBzY29wZXMuc29ydCgoIGEsIGIgKSA9PiB7XG5cdFx0XHRpZiAoIGEuZmlyc3RuYW1lIDwgYi5maXJzdG5hbWUgKSByZXR1cm4gLTE7XG5cdFx0XHRpZiAoIGEuZmlyc3RuYW1lID4gYi5maXJzdG5hbWUgKSByZXR1cm4gMTtcblx0XHRcdHJldHVybiAwO1xuXHRcdH0pLmpvaW4oJysnKSA6IHNjb3Blcztcblx0XHRyZXR1cm4gYWxsU2NvcGVzW3NrZXldID0gYWxsU2NvcGVzW3NrZXldIHx8IG5ldyBTY29wZSh7fSwgeyBpZDogc2tleSB9KTtcblx0fTtcblx0XG5cdFxuXHQvKipcblx0ICogSW5pdCBhIFJlU2NvcGUgc2NvcGVcblx0ICpcblx0ICogQHBhcmFtIHN0b3Jlc01hcCB7T2JqZWN0fSBPYmplY3Qgd2l0aCB0aGUgaW5pdGlhbCBzdG9yZXMgZGVmaW5pdGlvbiAvIGluc3RhbmNlc1xuXHQgKiBAcGFyYW0gY29uZmlnIHtPYmplY3R9IFNjb3BlIGNvbmZpZ1xuXHQgKiB7XG5cdCAqICAgICBwYXJlbnQge3Njb3BlfSBAb3B0aW9uYWwgcGFyZW50IHNjb3BlXG5cdCAqXG5cdCAqICAgICBpZCB7c3RyaW5nfSBAb3B0aW9uYWwgaWQgKCBpZiB0aGlzIGlkIGV4aXN0IHN0b3Jlc01hcCB3aWxsIGJlIG1lcmdlIG9uIHRoZSAnaWQnXG5cdCAqICAgICBzY29wZSlcblx0ICogICAgIGtleSB7c3RyaW5nfSBAb3B0aW9uYWwga2V5IG9mIHRoZSBzY29wZSAoIGlmIG5vIGlkIGlzIHNldCwgdGhlIHNjb3BlIGlkIHdpbGwgYmUgKHBhcmVudC5pZCsnPicra2V5KVxuXHQgKiAgICAgaW5jcmVtZW50SWQge2Jvb2x9IEBvcHRpb25hbCB0cnVlIHRvIGFkZCBhIHN1ZmZpeCBpZCwgaWYgdGhlIHByb3ZpZGVkIGtleSBvciBpZCBnbG9iYWxseSBleGlzdFxuXHQgKlxuXHQgKiAgICAgc3RhdGUge09iamVjdH0gQG9wdGlvbmFsIGluaXRpYWwgc3RhdGUgYnkgc3RvcmUgYWxpYXNcblx0ICogICAgIGRhdGEge09iamVjdH0gQG9wdGlvbmFsIGluaXRpYWwgZGF0YSBieSBzdG9yZSBhbGlhc1xuXHQgKlxuXHQgKiAgICAgcm9vdEVtaXR0ZXIge2Jvb2x9IEBvcHRpb25hbCB0cnVlIHRvIG5vdCBiZWluZyBkZXN0YWJpbGl6ZWQgYnkgcGFyZW50XG5cdCAqICAgICBib3VuZGVkQWN0aW9ucyB7YXJyYXkgfCByZWdleHB9IEBvcHRpb25hbCBsaXN0IG9yIHJlZ2V4cCBvZiBhY3Rpb25zIG5vdCBwcm9wYWdhdGVkIHRvIHRoZSBwYXJlbnRcblx0ICogICAgIGF1dG9EZXN0cm95IHt0cnVlIHwgZmFsc2UgfCAnaW5oZXJpdCd9XG5cdCAqICAgICBwZXJzaXN0ZW5jZVRtIHtudW1iZXIpIGlmID4gMCwgd2lsbCB3YWl0ICdwZXJzaXN0ZW5jZVRtJyBtcyBiZWZvcmUgZGVzdHJveSB3aGVuXG5cdCAqICAgICBkaXNwb3NlIHJlYWNoIDAgYXV0b0Rlc3Ryb3kgIHtib29sfSB3aWxsIHRyaWdnZXIgcmV0YWluICYgZGlzcG9zZSBhZnRlciBzdGFydFxuXHQgKiAgfVxuXHQgKiBAcmV0dXJucyB7U2NvcGV9XG5cdCAqL1xuXHRjb25zdHJ1Y3Rvciggc3RvcmVzTWFwLCB7IHBhcmVudCwgdXBwZXJTY29wZSwga2V5LCBpZCwgc25hcHNob3QsIHN0YXRlLCBkYXRhLCBpbmNyZW1lbnRJZCA9ICEha2V5LCBwZXJzaXN0ZW5jZVRtLCBhdXRvRGVzdHJveSwgcm9vdEVtaXR0ZXIsIGJvdW5kZWRBY3Rpb25zIH0gPSB7fSApIHtcblx0XHRzdXBlcigpO1xuXHRcdGxldCBfID0ge1xuXHRcdFx0a2V5UElEOiAodXBwZXJTY29wZSAmJiB1cHBlclNjb3BlLl9pZCB8fCBwYXJlbnQgJiYgcGFyZW50Ll9pZCB8fCBzaG9ydGlkLmdlbmVyYXRlKCkpLFxuXHRcdFx0a2V5LFxuXHRcdFx0aW5jcmVtZW50SWQsXG5cdFx0XHRiYXNlSWQ6IGlkXG5cdFx0fTtcblx0XHRcblx0XHRcblx0XHQvLyBnZW5lcmF0ZSAvIHNldCB0aGlzIHNjb3BlIGlkXG5cdFx0aWQgPSBpZCB8fCBrZXkgJiYgKF8ua2V5UElEICsgJz4nICsga2V5KTtcblx0XHRcblx0XHRfLmlzTG9jYWxJZCA9ICFpZDtcblx0XHRcblx0XHRpZCA9IGlkIHx8IChcIl9fX19fXCIgKyBzaG9ydGlkLmdlbmVyYXRlKCkpO1xuXHRcdFxuXHRcdGlmICggYWxsU2NvcGVzW2lkXSAmJiAhaW5jcmVtZW50SWQgKSB7Ly8gb3ZlcndyaXRlIGV4aXN0aW5nIHNjb3BlXG5cdFx0XHR0aGlzLl9pZCA9IGlkO1xuXHRcdFx0YWxsU2NvcGVzW2lkXS5yZWdpc3RlcihzdG9yZXNNYXApO1xuXHRcdFx0cmV0dXJuIGFsbFNjb3Blc1tpZF1cblx0XHR9XG5cdFx0ZWxzZSBpZiAoIGFsbFNjb3Blc1tpZF0gJiYgaW5jcmVtZW50SWQgKSB7Ly8gZ2VuZXJhdGUga2V5IGlkXG5cdFx0XHRsZXQgaSA9IC0xO1xuXHRcdFx0d2hpbGUgKCBhbGxTY29wZXNbaWQgKyAnWycgKyAoKytpKSArICddJ10gKSA7XG5cdFx0XHRpZCA9IGlkICsgJ1snICsgaSArICddJztcblx0XHR9XG5cdFx0XG5cdFx0Ly8gcmVnaXN0ZXIgdGhpcyBzY29wZSBpbiB0aGUgc3RhdGljIFNjb3BlLnNjb3Blc1xuXHRcdGFsbFNjb3Blc1tpZF0gPSB0aGlzO1xuXHRcdFxuXHRcdHRoaXMuX2lkICA9IGlkO1xuXHRcdHRoaXMuX3JldiA9IDA7XG5cdFx0XG5cdFx0dGhpcy5fID0gXztcblx0XHRcblx0XHR0aGlzLmFjdGlvbnMgPSB7fTtcblx0XHR0aGlzLnN0b3JlcyAgPSB7fTtcblx0XHR0aGlzLnN0YXRlICAgPSB7fTtcblx0XHR0aGlzLmRhdGEgICAgPSB7fTtcblx0XHRcblx0XHR0aGlzLnBhcmVudCA9IHBhcmVudDtcblx0XHRcblx0XHRpZiAoIGF1dG9EZXN0cm95ID09ICdpbmhlcml0JyApXG5cdFx0XHRhdXRvRGVzdHJveSA9IHBhcmVudCAmJiBwYXJlbnQuX2F1dG9EZXN0cm95O1xuXHRcdFxuXHRcdHRoaXMuX2F1dG9EZXN0cm95ID0gYXV0b0Rlc3Ryb3k7XG5cdFx0Xy5wZXJzaXN0ZW5jZVRtICAgPSBwZXJzaXN0ZW5jZVRtIHx8IHRoaXMuY29uc3RydWN0b3IucGVyc2lzdGVuY2VUbTtcblx0XHRcblx0XHRpZiAoIHBhcmVudCAmJiBwYXJlbnQuZGVhZCApXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDYW4ndCB1c2UgYSBkZWFkIHNjb3BlIGFzIHBhcmVudCAhXCIpO1xuXHRcdFxuXHRcdF9fcHJvdG9fX3B1c2godGhpcywgJ2FjdGlvbnMnLCBwYXJlbnQpO1xuXHRcdF9fcHJvdG9fX3B1c2godGhpcywgJ3N0b3JlcycsIHBhcmVudCk7XG5cdFx0X19wcm90b19fcHVzaCh0aGlzLCAnc3RhdGUnLCBwYXJlbnQpO1xuXHRcdF9fcHJvdG9fX3B1c2godGhpcywgJ2RhdGEnLCBwYXJlbnQpO1xuXHRcdFxuXHRcdHRoaXMuc291cmNlcyAgICAgID0gW107XG5cdFx0Xy5jaGlsZFNjb3BlcyAgICAgPSBbXTtcblx0XHRfLmNoaWxkU2NvcGVzTGlzdCA9IFtdO1xuXHRcdF8udW5TdGFibGVDaGlsZHMgID0gMDtcblx0XHRfLnNlZW5DaGlsZHMgICAgICA9IDA7XG5cdFx0Xy5fbGlzdGVuaW5nICAgICAgPSB7fTtcblx0XHRfLl9zY29wZSAgICAgICAgICA9IHt9O1xuXHRcdF8uX21peGVkICAgICAgICAgID0gW107XG5cdFx0Xy5fbWl4ZWRMaXN0ICAgICAgPSBbXTtcblx0XHRfLmZvbGxvd2VycyAgICAgICA9IFtdO1xuXHRcdFxuXHRcdHRoaXMuX19yZXRhaW5zID0geyBhbGw6IDAgfTtcblx0XHR0aGlzLl9fbG9ja3MgICA9IHsgYWxsOiAxIH07XG5cdFx0XG5cdFx0Ly8gdG9kb1xuXHRcdF8uX2JvdW5kZWRBY3Rpb25zID0gaXMuYXJyYXkoYm91bmRlZEFjdGlvbnMpXG5cdFx0ICAgICAgICAgICAgICAgICAgICA/IHsgdGVzdDogYm91bmRlZEFjdGlvbnMuaW5jbHVkZXMuYmluZChib3VuZGVkQWN0aW9ucykgfVxuXHRcdCAgICAgICAgICAgICAgICAgICAgOiBib3VuZGVkQWN0aW9ucztcblx0XHRcblx0XHQvLyByZWdpc3RlciB0byB0aGUgcGFyZW50IHNjb3BlXG5cdFx0aWYgKCBwYXJlbnQgKSB7XG5cdFx0XHRwYXJlbnQucmV0YWluKFwiaXNNeVBhcmVudFwiKTtcblx0XHRcdGlmICggIXJvb3RFbWl0dGVyICkge1xuXHRcdFx0XHQhcGFyZW50Ll9zdGFibGUgJiYgdGhpcy53YWl0KFwid2FpdGluZ1BhcmVudFwiKTtcblx0XHRcdFx0cGFyZW50Lm9uKF8uX3BhcmVudExpc3QgPSB7XG5cdFx0XHRcdFx0J3N0YWJsZScgIDogcyA9PiB0aGlzLnJlbGVhc2UoXCJ3YWl0aW5nUGFyZW50XCIpLFxuXHRcdFx0XHRcdCd1bnN0YWJsZSc6IHMgPT4gdGhpcy53YWl0KFwid2FpdGluZ1BhcmVudFwiKSxcblx0XHRcdFx0XHQndXBkYXRlJyAgOiBzID0+IHRoaXMuX3Byb3BhZygpXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdHBhcmVudC5vbihfLl9wYXJlbnRMaXN0ID0ge1xuXHRcdFx0XHRcdCd1cGRhdGUnOiBzID0+IHRoaXMuX3Byb3BhZygpXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdFx0Ly8gdGhpcy5yZWdpc3RlcihwYXJlbnQuX19zY29wZSwgc3RhdGUsIGRhdGEpO1xuXHRcdH1cblx0XHRcblx0XHQvLyByZWdpc3RlciB0aGlzIHNjb3BlIHN0b3Jlc1xuXHRcdHRoaXMucmVnaXN0ZXIoc3RvcmVzTWFwLCBzdGF0ZSwgZGF0YSk7XG5cdFx0dGhpcy5fX2xvY2tzLmFsbC0tO1xuXHRcdHRoaXMuX3N0YWJsZSA9ICF0aGlzLl9fbG9ja3MuYWxsO1xuXHRcdFxuXHRcdGlmICggcGFyZW50ICkge1xuXHRcdFx0cGFyZW50Ll9hZGRDaGlsZCh0aGlzKTtcblx0XHR9XG5cdFx0XG5cdFx0XG5cdFx0Ly8gcmVzdG9yZSBzbmFwc2hvdHNcblx0XHR0aGlzLnJlc3RvcmUoc25hcHNob3QpO1xuXHRcdFxuXHRcdFxuXHRcdGlmICggYXV0b0Rlc3Ryb3kgKVxuXHRcdFx0c2V0VGltZW91dChcblx0XHRcdFx0dG0gPT4ge1xuXHRcdFx0XHRcdHRoaXMucmV0YWluKFwiYXV0b0Rlc3Ryb3lcIik7XG5cdFx0XHRcdFx0dGhpcy5kaXNwb3NlKFwiYXV0b0Rlc3Ryb3lcIik7XG5cdFx0XHRcdH1cblx0XHRcdClcblx0XHRcblx0fVxuXHRcblx0LyoqXG5cdCAqXG5cdCAqIE1vdW50IHRoZSBzdG9yZXMgaW4gc3RvcmVzTGlzdCwgaW4gdGhpcyBzY29wZSBvciBpbiBpdHMgcGFyZW50cyBvciBtaXhlZCBzY29wZXNcblx0ICpcblx0ICogQHBhcmFtIHN0b3JlSWRMaXN0IHtzdHJpbmd8c3RvcmVSZWZ9IFN0b3JlIG5hbWUsIEFycmF5IG9mIFN0b3JlIG5hbWVzLCBvciBSZXNjb3BlXG5cdCAqICAgICBzdG9yZSByZWYgZnJvbSBTdG9yZTo6YXMgb3IgU3RvcmU6YXNcblx0ICogQHBhcmFtIHN0YXRlXG5cdCAqIEBwYXJhbSBkYXRhXG5cdCAqIEByZXR1cm5zIHtTY29wZX1cblx0ICovXG5cdG1vdW50KCBzdG9yZUlkTGlzdCwgc25hcHNob3QsIHN0YXRlLCBkYXRhICkge1xuXHRcdGlmICggaXMuYXJyYXkoc3RvcmVJZExpc3QpICkge1xuXHRcdFx0c3RvcmVJZExpc3QuZm9yRWFjaChzdG9yZUlkID0+IHRoaXMuX21vdW50KHN0b3JlSWQsIHNuYXBzaG90LCBzdGF0ZSwgZGF0YSkpO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdHRoaXMuX21vdW50KC4uLmFyZ3VtZW50cyk7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cdFxuXHRfbW91bnQoIGlkLCBzbmFwc2hvdCwgc3RhdGUsIGRhdGEgKSB7XG5cdFx0bGV0IHJlZiwgXyA9IHRoaXMuXztcblx0XHRcblx0XHRyZWYgPSB0aGlzLnBhcnNlUmVmKGlkKVxuXHRcdFxuXHRcdGlmICggaWQgPT0gXCIkcGFyZW50XCIgKSByZXR1cm47XG5cdFx0aWYgKCAhXy5fc2NvcGVbcmVmLnN0b3JlSWRdICkgey8vYXNrIG1peGVkIHx8IHBhcmVudFxuXHRcdFx0aWYgKCBfLl9taXhlZC5yZWR1Y2VSaWdodCgoIG1vdW50ZWQsIGN0eCApID0+IChtb3VudGVkIHx8IGN0eC5fbW91bnQoaWQsIHNuYXBzaG90LCBzdGF0ZSwgZGF0YSkpLCBmYWxzZSkgfHxcblx0XHRcdFx0IXRoaXMucGFyZW50IClcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0cmV0dXJuIHRoaXMucGFyZW50Ll9tb3VudCguLi5hcmd1bWVudHMpO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdGxldCBzdG9yZSA9IF8uX3Njb3BlW3JlZi5zdG9yZUlkXSwgdGFza1F1ZXVlID0gW107XG5cdFx0XHRpZiAoIFNjb3BlLmlzU3RvcmVDbGFzcyhzdG9yZSkgKSB7XG5cdFx0XHRcdF8uX3Njb3BlW3JlZi5zdG9yZUlkXSA9IG5ldyBzdG9yZSh0aGlzLCB7XG5cdFx0XHRcdFx0Ly9zbmFwc2hvdCxcblx0XHRcdFx0XHRuYW1lOiByZWYuc3RvcmVJZCxcblx0XHRcdFx0XHRzdGF0ZSxcblx0XHRcdFx0XHRkYXRhXG5cdFx0XHRcdH0sIHRhc2tRdWV1ZSk7XG5cdFx0XHRcdHdoaWxlICggdGFza1F1ZXVlLmxlbmd0aCApIHRhc2tRdWV1ZS5zaGlmdCgpKCk7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIGlmICggU2NvcGUuaXNTY29wZUNsYXNzKHN0b3JlKSApIHtcblx0XHRcdFx0c3RvcmUgPSBfLl9zY29wZVtyZWYuc3RvcmVJZF0gPSBuZXcgc3RvcmUoeyAkcGFyZW50OiB0aGlzIH0sIHtcblx0XHRcdFx0XHRrZXkgICAgICAgIDogcmVmLnN0b3JlSWQsXG5cdFx0XHRcdFx0aW5jcmVtZW50SWQ6IHRydWUsXG5cdFx0XHRcdFx0dXBwZXJTY29wZSA6IHRoaXNcblx0XHRcdFx0XHQvL2F1dG9EZXN0cm95OiB0cnVlXG5cdFx0XHRcdFx0Ly9wYXJlbnQ6IHRoaXNcblx0XHRcdFx0fSk7XG5cdFx0XHRcdC8vXy5fc2NvcGVbIHJlZi5zdG9yZUlkIF0ucmV0YWluKFwic2NvcGVkQ2hpbGRTY29wZVwiKTtcblx0XHRcdFx0Ly9fd2F0Y2hTdG9yZShyZWYuc3RvcmVJZCk7XG5cdFx0XHRcdGlmICggcmVmLnBhdGgubGVuZ3RoID4gMSApXG5cdFx0XHRcdFx0Xy5fc2NvcGVbcmVmLnN0b3JlSWRdLm1vdW50KHJlZi5wYXRoLnNsaWNlKDEpLmpvaW4oJy4nKSwgc25hcHNob3QsIHN0YXRlLCBkYXRhKVxuXHRcdFx0XHQvL2Vsc2UgcmV0dXJuIF8uX3Njb3BlWyByZWYuc3RvcmVJZCBdO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCBTY29wZS5pc1N0b3JlKHN0b3JlKSApIHtcblx0XHRcdFx0aWYgKCBzdGF0ZSAhPT0gdW5kZWZpbmVkICYmIGRhdGEgPT09IHVuZGVmaW5lZCApXG5cdFx0XHRcdFx0c3RvcmUuc2V0U3RhdGUoc3RhdGUpO1xuXHRcdFx0XHRlbHNlIGlmICggc3RhdGUgIT09IHVuZGVmaW5lZCApXG5cdFx0XHRcdFx0c3RvcmUuc3RhdGUgPSBzdGF0ZTtcblx0XHRcdFx0XG5cdFx0XHRcdGlmICggZGF0YSAhPT0gdW5kZWZpbmVkIClcblx0XHRcdFx0XHRzdG9yZS5wdXNoKGRhdGEpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCBTY29wZS5pc1Njb3BlKHN0b3JlKSApIHtcblx0XHRcdFx0aWYgKCBzdGF0ZSAhPT0gdW5kZWZpbmVkIClcblx0XHRcdFx0XHRzdG9yZS5zZXRTdGF0ZShzdGF0ZSk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLl93YXRjaFN0b3JlKHJlZi5zdG9yZUlkKTtcblx0XHR9XG5cdFx0XG5cdFx0XG5cdFx0cmV0dXJuIF8uX3Njb3BlW3JlZi5zdG9yZUlkXTtcblx0fVxuXHRcblx0LyoqXG5cdCAqIFJlZ2lzdGVyIHN0b3JlcyBpbiBzdG9yZXNNYXAgJiBsaW5rIHRoZW0gaW4gdGhlIHByb3Rvc1xuXHQgKiBAcGFyYW0gc3RvcmVzTWFwXG5cdCAqIEBwYXJhbSBzdGF0ZVxuXHQgKiBAcGFyYW0gZGF0YVxuXHQgKi9cblx0cmVnaXN0ZXIoIHN0b3Jlc01hcCwgc3RhdGUgPSB7fSwgZGF0YSA9IHt9ICkge1xuXHRcdHRoaXMucmVsaW5rKHN0b3Jlc01hcCwgdGhpcywgZmFsc2UsIGZhbHNlKTtcblx0XHRPYmplY3Qua2V5cyhzdG9yZXNNYXApLmZvckVhY2goXG5cdFx0XHRpZCA9PiB7XG5cdFx0XHRcdGlmICggaWQgPT0gXCIkcGFyZW50XCIgKSByZXR1cm47XG5cdFx0XHRcdGlmICggc3RvcmVzTWFwW2lkXS5zaW5nbGV0b24gfHwgKGlzLmZuKHN0b3Jlc01hcFtpZF0pICYmIChzdGF0ZVtpZF0gfHwgZGF0YVtpZF0pKSApIHtcblx0XHRcdFx0XHR0aGlzLl9tb3VudChpZCwgdW5kZWZpbmVkLCBzdGF0ZVtpZF0sIGRhdGFbaWRdKVxuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2UgaWYgKCBzdGF0ZVtpZF0gfHwgZGF0YVtpZF0gKSB7XG5cdFx0XHRcdFx0aWYgKCBkYXRhW2lkXSApIHtcblx0XHRcdFx0XHRcdGlmICggc3RhdGVbaWRdIClcblx0XHRcdFx0XHRcdFx0dGhpcy5zdG9yZXNbaWRdLnN0YXRlID0gc3RhdGVbaWRdO1xuXHRcdFx0XHRcdFx0dGhpcy5zdG9yZXNbaWRdLnB1c2goZGF0YVtpZF0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRlbHNlIGlmICggc3RhdGVbaWRdICkge1xuXHRcdFx0XHRcdFx0dGhpcy5zdG9yZXNbaWRdLnNldFN0YXRlKHN0YXRlW2lkXSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMuX3dhdGNoU3RvcmUoaWQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0KVxuXHRcdFxuXHR9XG5cdFxuXHQvKipcblx0ICogTWFwIHNyY0N0eCBzdG9yZSdzIG9uIHRhcmdldEN0eCBoZWFkZXJzIHByb3RvJ3Ncblx0ICogQHBhcmFtIHNyY0N0eFxuXHQgKiBAcGFyYW0gdGFyZ2V0Q3R4XG5cdCAqIEBwYXJhbSBzdGF0ZVxuXHQgKiBAcGFyYW0gZGF0YVxuXHQgKi9cblx0cmVsaW5rKCBzcmNDdHgsIHRhcmdldEN0eCA9IHRoaXMsIGV4dGVybmFsLCBmb3JjZSApIHtcblx0XHRsZXQgXyA9IHRoaXMuXztcblx0XHRPYmplY3Qua2V5cyhzcmNDdHgpXG5cdFx0ICAgICAgLmZvckVhY2goXG5cdFx0XHQgICAgICBpZCA9PiB7XG5cdFx0XHRcdCAgICAgIGxldCBob3RSZWxvYWRpbmcsIGFjdGlvbnMsIGFjdGl2ZUFjdGlvbnM7XG5cdFx0XHRcdFxuXHRcdFx0XHQgICAgICAvLyBzYW1lIHN0b3JlIGRlZiA6IGlnbm9yZVxuXHRcdFx0XHQgICAgICBpZiAoICFmb3JjZSAmJiB0YXJnZXRDdHguXy5fc2NvcGVbaWRdID09PSBzcmNDdHhbaWRdIHx8XG5cdFx0XHRcdFx0ICAgICAgdGFyZ2V0Q3R4Ll8uX3Njb3BlW2lkXSAmJiAodGFyZ2V0Q3R4Ll8uX3Njb3BlW2lkXS5jb25zdHJ1Y3RvciA9PT0gc3JjQ3R4W2lkXSkgKVxuXHRcdFx0XHRcdCAgICAgIHJldHVybjtcblx0XHRcdFx0XG5cdFx0XHRcdCAgICAgIC8vIGhvdCBzd2l0Y2hcblx0XHRcdFx0ICAgICAgaWYgKCAhZm9yY2UgJiYgdGFyZ2V0Q3R4Ll8uX3Njb3BlW2lkXSApIHtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHQgICAgICBpZiAoICFleHRlcm5hbCAmJiAhaXMuZm4odGFyZ2V0Q3R4Ll8uX3Njb3BlW2lkXSkgKSB7XG5cdFx0XHRcdFx0XHQgICAgICBjb25zb2xlLmluZm8oXCJSZXNjb3BlIFN0b3JlIDogXCIsIGlkLCBcIiBhbHJlYWR5IGV4aXN0IGluIHRoaXMgc2NvcGUgISAoIEhvdCBzd2l0Y2hpbmcgdGhlIHN0b3JlICkgISEhXCIpO1xuXHRcdFx0XHRcdFx0ICAgICAgbGV0IHRtcCAgICAgICAgICAgICAgICA9IHRhcmdldEN0eC5fLl9zY29wZVtpZF07XG5cdFx0XHRcdFx0XHQgICAgICB0YXJnZXRDdHguXy5fc2NvcGVbaWRdID0gc3JjQ3R4W2lkXTtcblx0XHRcdFx0XHRcdCAgICAgIGhvdFJlbG9hZGluZyAgICAgICAgICAgPSB0bXAubmV4dFN0YXRlO1xuXHRcdFx0XHRcdFx0ICAgICAgdG1wLmRlc3Ryb3koKTtcblx0XHRcdFx0XHQgICAgICB9XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0ICAgICAgaWYgKCAhZXh0ZXJuYWwgJiYgaXMuZm4odGFyZ2V0Q3R4Ll8uX3Njb3BlW2lkXSkgKVxuXHRcdFx0XHRcdFx0ICAgICAgdGFyZ2V0Q3R4Ll8uX3Njb3BlW2lkXSA9IHNyY0N0eFtpZF07XG5cdFx0XHRcdFx0XG5cdFx0XHRcdCAgICAgIH1cblx0XHRcdFx0ICAgICAgZWxzZSBpZiAoICFmb3JjZSAmJiAhZXh0ZXJuYWwgKVxuXHRcdFx0XHRcdCAgICAgIF8uX3Njb3BlW2lkXSA9IHNyY0N0eFtpZF07XG5cdFx0XHRcdFxuXHRcdFx0XHRcblx0XHRcdFx0ICAgICAgLy8gbWFwIHRoZSBzdG9yZSBpZFxuXHRcdFx0XHQgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoXG5cdFx0XHRcdFx0ICAgICAgdGFyZ2V0Q3R4Ll8uc3RvcmVzLnByb3RvdHlwZSxcblx0XHRcdFx0XHQgICAgICBpZCxcblx0XHRcdFx0XHQgICAgICB7XG5cdFx0XHRcdFx0XHQgICAgICBlbnVtZXJhYmxlICA6IHRydWUsXG5cdFx0XHRcdFx0XHQgICAgICBjb25maWd1cmFibGU6IHRydWUsXG5cdFx0XHRcdFx0XHQgICAgICBnZXQgICAgICAgICA6ICgpID0+IF8uX3Njb3BlW2lkXVxuXHRcdFx0XHRcdCAgICAgIH1cblx0XHRcdFx0ICAgICAgKTtcblx0XHRcdFx0XG5cdFx0XHRcdCAgICAgIGFjdGl2ZUFjdGlvbnMgPSB0YXJnZXRDdHguXy5hY3Rpb25zLnByb3RvdHlwZTtcblx0XHRcdFx0ICAgICAgLy8gbm90IG1hcHBpbmcgaGllcmFyY2hpYyBzY29wZXNcblx0XHRcdFx0ICAgICAgaWYgKCBpZCAhPT0gXCIkcGFyZW50XCIgKSB7XG5cdFx0XHRcdFx0ICAgICAgLy8gbWFwIHN0YXRlICYgZGF0YVxuXHRcdFx0XHRcdCAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShcblx0XHRcdFx0XHRcdCAgICAgIHRhcmdldEN0eC5fLnN0YXRlLnByb3RvdHlwZSxcblx0XHRcdFx0XHRcdCAgICAgIGlkLFxuXHRcdFx0XHRcdFx0ICAgICAge1xuXHRcdFx0XHRcdFx0XHQgICAgICBlbnVtZXJhYmxlICA6IHRydWUsXG5cdFx0XHRcdFx0XHRcdCAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcblx0XHRcdFx0XHRcdFx0ICAgICAgZ2V0ICAgICAgICAgOiAoKSA9PiAoXy5fc2NvcGVbaWRdICYmIF8uX3Njb3BlW2lkXS5zdGF0ZSksXG5cdFx0XHRcdFx0XHRcdCAgICAgIHNldCAgICAgICAgIDogKCB2ICkgPT4gKHRoaXMuX21vdW50KGlkLCB1bmRlZmluZWQsIHYpKVxuXHRcdFx0XHRcdFx0ICAgICAgfVxuXHRcdFx0XHRcdCAgICAgICk7XG5cdFx0XHRcdFx0ICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFxuXHRcdFx0XHRcdFx0ICAgICAgdGFyZ2V0Q3R4Ll8uZGF0YS5wcm90b3R5cGUsXG5cdFx0XHRcdFx0XHQgICAgICBpZCxcblx0XHRcdFx0XHRcdCAgICAgIHtcblx0XHRcdFx0XHRcdFx0ICAgICAgZW51bWVyYWJsZSAgOiB0cnVlLFxuXHRcdFx0XHRcdFx0XHQgICAgICBjb25maWd1cmFibGU6IHRydWUsXG5cdFx0XHRcdFx0XHRcdCAgICAgIGdldCAgICAgICAgIDogKCkgPT4gKF8uX3Njb3BlW2lkXSAmJiBfLl9zY29wZVtpZF0uZGF0YSksXG5cdFx0XHRcdFx0XHRcdCAgICAgIHNldCAgICAgICAgIDogKCB2ICkgPT4gKHRoaXMuX21vdW50KGlkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdikpXG5cdFx0XHRcdFx0XHQgICAgICB9XG5cdFx0XHRcdFx0ICAgICAgKTtcblx0XHRcdFx0XHQgICAgICAvLyBhY3Rpb24gbWFwcGluZ1xuXHRcdFx0XHRcdCAgICAgIGFjdGlvbnMgPSBzcmNDdHhbaWRdIGluc3RhbmNlb2YgU2NvcGUuU3RvcmVcblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgPyBzcmNDdHhbaWRdLmNvbnN0cnVjdG9yLmFjdGlvbnNcblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgOiBzcmNDdHhbaWRdLmFjdGlvbnM7XG5cdFx0XHRcdFx0ICAgICAgaWYgKCBTY29wZS5pc1Njb3BlQ2xhc3MoXy5fc2NvcGVbaWRdKSApXG5cdFx0XHRcdFx0XHQgICAgICB0aGlzLl9tb3VudChpZCk7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0ICAgICAgaWYgKCBTY29wZS5pc1Njb3BlKF8uX3Njb3BlW2lkXSkgKSB7Ly8gbWFwIGhpZXJhcmNoaWMgc2NvcGVzXG5cdFx0XHRcdFx0XHQgICAgICBhY3RpdmVBY3Rpb25zW2lkXSA9IF8uX3Njb3BlW2lkXS5hY3Rpb25zO1xuXHRcdFx0XHRcdCAgICAgIH1cblx0XHRcdFx0XHQgICAgICBlbHNlIGlmICggIVNjb3BlLmlzU3RvcmUoXy5fc2NvcGVbaWRdKSAmJiAhU2NvcGUuaXNTdG9yZUNsYXNzKF8uX3Njb3BlW2lkXSkgKVxuXHRcdFx0XHRcdFx0ICAgICAgcmV0dXJuO1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdCAgICAgIGFjdGlvbnMgJiZcblx0XHRcdFx0XHQgICAgICBPYmplY3Qua2V5cyhhY3Rpb25zKVxuXHRcdFx0XHRcdCAgICAgICAgICAgIC5mb3JFYWNoKFxuXHRcdFx0XHRcdFx0ICAgICAgICAgICAgKCBhY3QgKSA9PiB7XG5cdFx0XHRcdFx0XHRcdCAgICAgICAgICAgIGlmICggYWN0aXZlQWN0aW9ucy5oYXNPd25Qcm9wZXJ0eShhY3QpIClcblx0XHRcdFx0XHRcdFx0XHQgICAgICAgICAgICBhY3RpdmVBY3Rpb25zW2FjdF0uX190YXJnZXRTdG9yZXMrKztcblx0XHRcdFx0XHRcdFx0ICAgICAgICAgICAgZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0ICAgICAgICAgICAgYWN0aXZlQWN0aW9uc1thY3RdICAgICAgICAgICAgICAgID0gdGhpcy5kaXNwYXRjaC5iaW5kKHRoaXMsIGFjdCk7XG5cdFx0XHRcdFx0XHRcdFx0ICAgICAgICAgICAgYWN0aXZlQWN0aW9uc1thY3RdLl9fdGFyZ2V0U3RvcmVzID0gMTtcblx0XHRcdFx0XHRcdFx0ICAgICAgICAgICAgfVxuXHRcdFx0XHRcdFx0ICAgICAgICAgICAgfVxuXHRcdFx0XHRcdCAgICAgICAgICAgICk7XG5cdFx0XHRcdCAgICAgIH1cblx0XHRcdFx0ICAgICAgZWxzZSB7XG5cdFx0XHRcdFx0ICAgICAgYWN0aXZlQWN0aW9uc1tpZF0gPSBzcmNDdHhbaWRdLmFjdGlvbnM7XG5cdFx0XHRcdCAgICAgIH1cblx0XHRcdFx0XG5cdFx0XHRcdFxuXHRcdFx0XHQgICAgICAvLyByZW1vdW50IHRoZSBzdG9yZSBpZiBpdCB3YXMgaG90IHJlbG9hZGVkXG5cdFx0XHRcdCAgICAgIGlmICggaG90UmVsb2FkaW5nIClcblx0XHRcdFx0XHQgICAgICB0aGlzLl9tb3VudChpZCwgbnVsbCwgaG90UmVsb2FkaW5nKTtcblx0XHRcdCAgICAgIH1cblx0XHQgICAgICApXG5cdH1cblx0XG5cdC8qKlxuXHQgKiBNYWtlIHRoaXMgc2NvcGUgd2F0Y2hpbmcgdGhlIGxvY2FsIHN0b3JlICdpZCdcblx0ICogQHBhcmFtIGlkXG5cdCAqIEByZXR1cm5zIHtib29sZWFufVxuXHQgKiBAcHJpdmF0ZVxuXHQgKi9cblx0X3dhdGNoU3RvcmUoIGlkICkge1xuXHRcdGxldCBfID0gdGhpcy5fO1xuXHRcdGlmICggIV8uX2xpc3RlbmluZ1tpZF0gJiYgIWlzLmZuKF8uX3Njb3BlW2lkXSkgKSB7XG5cdFx0XHQhXy5fc2NvcGVbaWRdLl9hdXRvRGVzdHJveSAmJiBfLl9zY29wZVtpZF0ucmV0YWluKFwic2NvcGVkXCIpO1xuXHRcdFx0IV8uX3Njb3BlW2lkXS5pc1N0YWJsZSgpICYmIHRoaXMud2FpdChpZCk7XG5cdFx0XHRfLl9zY29wZVtpZF0ub24oXG5cdFx0XHRcdF8uX2xpc3RlbmluZ1tpZF0gPSB7XG5cdFx0XHRcdFx0J2Rlc3Ryb3knIDogcyA9PiB7XG5cdFx0XHRcdFx0XHRkZWxldGUgXy5fbGlzdGVuaW5nW2lkXTtcblx0XHRcdFx0XHRcdF8uX3Njb3BlW2lkXSA9IF8uX3Njb3BlW2lkXS5jb25zdHJ1Y3Rvcjtcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdCd1cGRhdGUnICA6IHMgPT4gdGhpcy5wcm9wYWcoKSxcblx0XHRcdFx0XHQnc3RhYmxlJyAgOiBzID0+IHRoaXMucmVsZWFzZShpZCksXG5cdFx0XHRcdFx0J3Vuc3RhYmxlJzogcyA9PiB0aGlzLndhaXQoaWQpXG5cdFx0XHRcdH0pO1xuXHRcdH1cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXHRcblx0LyoqXG5cdCAqIE1peCB0YXJnZXRDdHggb24gdGhpcyBzY29wZVxuXHQgKiBNaXhlZCBzY29wZSBwYXJlbnRzIGFyZSBOT1QgbWFwcGVkXG5cdCAqIEBwYXJhbSB0YXJnZXRDdHhcblx0ICovXG5cdG1peGluKCB0YXJnZXRDdHggKSB7XG5cdFx0bGV0IHBhcmVudCA9IHRoaXMucGFyZW50LFxuXHRcdCAgICBsaXN0cyxcblx0XHQgICAgXyAgICAgID0gdGhpcy5fO1xuXHRcdFxuXHRcdF8uX21peGVkLnB1c2godGFyZ2V0Q3R4KTtcblx0XHRcblx0XHR0YXJnZXRDdHgucmV0YWluKFwibWl4ZWRUb1wiKTtcblx0XHRcblx0XHRpZiAoICF0YXJnZXRDdHguX3N0YWJsZSApXG5cdFx0XHR0aGlzLndhaXQodGFyZ2V0Q3R4Ll9pZCk7XG5cdFx0XG5cdFx0Xy5fbWl4ZWRMaXN0LnB1c2gobGlzdHMgPSB7XG5cdFx0XHQnc3RhYmxlJyAgOiBzID0+IHRoaXMucmVsZWFzZSh0YXJnZXRDdHguX2lkKSxcblx0XHRcdCd1bnN0YWJsZSc6IHMgPT4gdGhpcy53YWl0KHRhcmdldEN0eC5faWQpLFxuXHRcdFx0J3VwZGF0ZScgIDogcyA9PiB0aGlzLl9wcm9wYWcoKVxuXHRcdH0pO1xuXHRcdFxuXHRcdHRhcmdldEN0eC5vbihsaXN0cyk7XG5cdFx0XG5cdFx0Ly8gcmVzZXQgcHJvdG9zXG5cdFx0Ly8gcHVzaCBuZXcgcHJvdG8gd2l0aCBwYXJlbnRcblx0XHRfX3Byb3RvX19wdXNoKHRoaXMsICdhY3Rpb25zJywgcGFyZW50KTtcblx0XHRfX3Byb3RvX19wdXNoKHRoaXMsICdzdG9yZXMnLCBwYXJlbnQpO1xuXHRcdF9fcHJvdG9fX3B1c2godGhpcywgJ3N0YXRlJywgcGFyZW50KTtcblx0XHRfX3Byb3RvX19wdXNoKHRoaXMsICdkYXRhJywgcGFyZW50KTtcblx0XHRcblx0XHQvLyBiaW5kIGxvY2FsIGFjY2Vzc29ycyBpbiB0aGUgbmV3IHByb3RvXG5cdFx0dGhpcy5yZWxpbmsoXy5fc2NvcGUsIHRoaXMsIGZhbHNlLCB0cnVlKTtcblx0XHRcblx0XHRfLl9taXhlZC5mb3JFYWNoKFxuXHRcdFx0Y3R4ID0+IHtcblx0XHRcdFx0Ly8gcHVzaCBwcm90b3Ncblx0XHRcdFx0X19wcm90b19fcHVzaCh0aGlzLCAnYWN0aW9ucycpO1xuXHRcdFx0XHRfX3Byb3RvX19wdXNoKHRoaXMsICdzdG9yZXMnKTtcblx0XHRcdFx0X19wcm90b19fcHVzaCh0aGlzLCAnc3RhdGUnKTtcblx0XHRcdFx0X19wcm90b19fcHVzaCh0aGlzLCAnZGF0YScpO1xuXHRcdFx0XHR0aGlzLnN0b3Jlcy5fX29yaWdpbiA9IFwibWl4ZWQgXCIgKyBjdHguX2lkO1xuXHRcdFx0XHQvLyB3cml0ZSBtaXhlZCBhY2Nlc3NvcnNcblx0XHRcdFx0Y3R4LnJlbGluayhjdHguXy5fc2NvcGUsIHRoaXMsIHRydWUsIHRydWUpXG5cdFx0XHR9XG5cdFx0KVxuXHR9XG5cdFxuXHQvKipcblx0ICogQmluZCBzdG9yZXMgZnJvbSB0aGlzIHNjb3BlLCBoaXMgcGFyZW50cyBvciBtaXhlZCBzY29wZXMgdG8gb2JqXG5cdCAqXG5cdCAqIEBwYXJhbSB0YXJnZXQge1JlYWN0LkNvbXBvbmVudHxTdG9yZXxmdW5jdGlvbn1cblx0ICogQHBhcmFtIGtleSB7c3RyaW5nfSBzdG9yZXMga2V5cyB0byBiaW5kIHVwZGF0ZXNcblx0ICogQHBhcmFtIGFzXG5cdCAqIEBwYXJhbSBzZXRJbml0aWFsIHtib29sZWFufSBmYWxzZSB0byBub3QgcHJvcGFnIGluaXRpYWwgdmFsdWUgKGRlZmF1bHQgOiB0cnVlKVxuXHQgKi9cblx0YmluZCggdGFyZ2V0LCBrZXksIGFzLCBzZXRJbml0aWFsID0gdHJ1ZSwgcmV2TWFwID0ge30gKSB7XG5cdFx0bGV0IGxhc3RSZXZzLCBkYXRhLCByZWZLZXlzO1xuXHRcdGlmICgga2V5ICYmICFpcy5hcnJheShrZXkpIClcblx0XHRcdGtleSA9IFtrZXldO1xuXHRcdFxuXHRcdGlmICggYXMgPT09IGZhbHNlIHx8IGFzID09PSB0cnVlICkge1xuXHRcdFx0c2V0SW5pdGlhbCA9IGFzO1xuXHRcdFx0YXMgICAgICAgICA9IG51bGw7XG5cdFx0fVxuXHRcdFxuXHRcdHJlZktleXMgPSBrZXlcblx0XHRcdC5tYXAoaWQgPT4gKGlzLnN0cmluZyhpZCkgPyBpZCA6IGlkLm5hbWUpKVxuXHRcdFx0Lm1hcChpZCA9PiAodGhpcy5wYXJzZVJlZihpZCkpKTtcblx0XHRcblx0XHRcblx0XHR0aGlzLl8uZm9sbG93ZXJzLnB1c2goXG5cdFx0XHRbXG5cdFx0XHRcdHRhcmdldCxcblx0XHRcdFx0a2V5LFxuXHRcdFx0XHRhcyB8fCB1bmRlZmluZWQsXG5cdFx0XHRcdGxhc3RSZXZzID0gcmVmS2V5cy5yZWR1Y2UoKCByZXZzLCByZWYgKSA9PiB7XG5cdFx0XHRcdFx0cmV2c1tyZWYuc3RvcmVJZF0gPSByZXZzW3JlZi5zdG9yZUlkXSB8fCB7XG5cdFx0XHRcdFx0XHRyZXYgOiAwLFxuXHRcdFx0XHRcdFx0cmVmczogW11cblx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdHJldnNbcmVmLnN0b3JlSWRdLnJlZnMucHVzaChyZWYpO1xuXHRcdFx0XHRcdHJldHVybiByZXZzO1xuXHRcdFx0XHR9LCByZXZNYXApXG5cdFx0XHRdKTtcblx0XHRcblx0XHR0aGlzLm1vdW50KGtleSk7XG5cdFx0dGhpcy5yZXRhaW5TdG9yZXMoT2JqZWN0LmtleXMobGFzdFJldnMpLCAnbGlzdGVuZXJzJyk7XG5cdFx0XG5cdFx0aWYgKCBzZXRJbml0aWFsICYmIHRoaXMuX3N0YWJsZSApIHtcblx0XHRcdGRhdGEgPSB0aGlzLmdldFVwZGF0ZXMobGFzdFJldnMpO1xuXHRcdFx0aWYgKCAhZGF0YSApIHJldHVybiB0aGlzO1xuXHRcdFx0aWYgKCB0eXBlb2YgdGFyZ2V0ICE9IFwiZnVuY3Rpb25cIiApIHtcblx0XHRcdFx0aWYgKCBhcyApIHRhcmdldC5zZXRTdGF0ZSh7IFthc106IGRhdGEgfSk7XG5cdFx0XHRcdGVsc2UgdGFyZ2V0LnNldFN0YXRlKGRhdGEpO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdHRhcmdldChkYXRhKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBVbiBiaW5kIHRoaXMgc2NvcGUgb2ZmIHRoZSBnaXZlbiBjb21wb25lbnQta2V5c1xuXHQgKiBAcGFyYW0gdGFyZ2V0XG5cdCAqIEBwYXJhbSBrZXlcblx0ICogQHJldHVybnMge0FycmF5LjwqPn1cblx0ICovXG5cdHVuQmluZCggdGFyZ2V0LCBrZXksIGFzICkge1xuXHRcdGxldCBmb2xsb3dlcnMgPSB0aGlzLl8uZm9sbG93ZXJzLFxuXHRcdCAgICBpICAgICAgICAgPSBmb2xsb3dlcnMgJiYgZm9sbG93ZXJzLmxlbmd0aDtcblx0XHR3aGlsZSAoIGZvbGxvd2VycyAmJiBpLS0gKVxuXHRcdFx0aWYgKCBmb2xsb3dlcnNbaV1bMF0gPT09IHRhcmdldCAmJlxuXHRcdFx0XHQoJycgKyBmb2xsb3dlcnNbaV1bMV0pID09ICgnJyArIGtleSkgJiZcblx0XHRcdFx0Zm9sbG93ZXJzW2ldWzJdID09IGFzICkge1xuXHRcdFx0XHR0aGlzLmRpc3Bvc2VTdG9yZXMoT2JqZWN0LmtleXMoZm9sbG93ZXJzW2ldWzNdKSwgJ2xpc3RlbmVycycpO1xuXHRcdFx0XHRyZXR1cm4gZm9sbG93ZXJzLnNwbGljZShpLCAxKTtcblx0XHRcdH1cblx0fVxuXHRcblx0LyoqXG5cdCAqIE1vdW50IHRoZSBzdG9yZXMgaW4gc3RvcmVJZExpc3QgZnJvbSB0aGlzIHNjb3BlLCBpdHMgcGFyZW50cyBhbmQgbWl4ZWQgc2NvcGVcblx0ICogQmluZCB0aGVtIHRvICd0bydcblx0ICogSG9vayAndG8nIHNvIGl0IHdpbGwgYXV0byB1bmJpbmQgb24gJ2Rlc3Ryb3knIG9yICdjb21wb25lbnRXaWxsVW5tb3VudCdcblx0ICogQHBhcmFtIHRhcmdldFxuXHQgKiBAcGFyYW0gc3RvcmVJZExpc3Rcblx0ICogQHBhcmFtIGJpbmRcblx0ICogQHJldHVybnMge09iamVjdH0gSW5pdGlhbCBvdXRwdXRzIG9mIHRoZSBzdG9yZXMgaW4gJ3N0b3Jlc0xpc3QnXG5cdCAqL1xuXHRtYXAoIHRhcmdldCwgc3RvcmVJZExpc3QsIGJpbmQgPSB0cnVlLCByZXZNYXAgKSB7XG5cdFx0bGV0IFN0b3JlICAgPSB0aGlzLmNvbnN0cnVjdG9yLlN0b3JlO1xuXHRcdHN0b3JlSWRMaXN0ID0gaXMuYXJyYXkoc3RvcmVJZExpc3QpID8gc3RvcmVJZExpc3QgOiBbc3RvcmVJZExpc3RdO1xuXHRcdGxldCByZWZMaXN0ID0gc3RvcmVJZExpc3QubWFwKHRoaXMucGFyc2VSZWYpO1xuXHRcdHRoaXMubW91bnQoc3RvcmVJZExpc3QpO1xuXHRcdGlmICggYmluZCAmJiB0YXJnZXQgaW5zdGFuY2VvZiBTdG9yZSApIHtcblx0XHRcdFN0b3JlLm1hcCh0YXJnZXQsIHN0b3JlSWRMaXN0LCB0aGlzLCB0aGlzLCBmYWxzZSlcblx0XHR9XG5cdFx0ZWxzZSBpZiAoIGJpbmQgKSB7XG5cdFx0XHR0aGlzLmJpbmQodGFyZ2V0LCBzdG9yZUlkTGlzdCwgdW5kZWZpbmVkLCBmYWxzZSk7XG5cdFx0XHRcblx0XHRcdGxldCBtaXhlZENXVW5tb3VudCxcblx0XHRcdCAgICB1bk1vdW50S2V5ID0gdGFyZ2V0LmlzUmVhY3RDb21wb25lbnQgPyBcImNvbXBvbmVudFdpbGxVbm1vdW50XCIgOiBcImRlc3Ryb3lcIjtcblx0XHRcdFxuXHRcdFx0aWYgKCB0YXJnZXQuaGFzT3duUHJvcGVydHkodW5Nb3VudEtleSkgKSB7XG5cdFx0XHRcdG1peGVkQ1dVbm1vdW50ID0gdGFyZ2V0W3VuTW91bnRLZXldO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHR0YXJnZXRbdW5Nb3VudEtleV0gPSAoIC4uLmFyZ3ogKSA9PiB7XG5cdFx0XHRcdGRlbGV0ZSB0YXJnZXRbdW5Nb3VudEtleV07XG5cdFx0XHRcdGlmICggbWl4ZWRDV1VubW91bnQgKVxuXHRcdFx0XHRcdHRhcmdldFt1bk1vdW50S2V5XSA9IG1peGVkQ1dVbm1vdW50O1xuXHRcdFx0XHRcblx0XHRcdFx0dGhpcy51bkJpbmQodGFyZ2V0LCBzdG9yZUlkTGlzdCk7XG5cdFx0XHRcdHJldHVybiB0YXJnZXRbdW5Nb3VudEtleV0gJiYgdGFyZ2V0W3VuTW91bnRLZXldKC4uLmFyZ3opO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0fVxuXHRcdHJldHVybiByZXZNYXAgJiYgdGhpcy5nZXRVcGRhdGVzKHJldk1hcClcblx0XHRcdHx8IHJlZkxpc3QucmVkdWNlKCggZGF0YSwgcmVmICkgPT4ge1xuXHRcdFx0XHR3YWxrblNldChkYXRhLCByZWYuYWxpYXMgfHwgcmVmLnBhdGgsIHRoaXMucmV0cmlldmUocmVmLnBhdGgpKVxuXHRcdFx0XHRyZXR1cm4gZGF0YTtcblx0XHRcdH0sIHt9KTtcblx0fVxuXHRcblx0LyoqXG5cdCAqIEdldCBjdXJyZW50IGRhdGEgdmFsdWUgZnJvbSBqc29uIHBhdGhcblx0ICogQHBhcmFtIHBhdGhcblx0ICogQHJldHVybnMge3N0cmluZ3wqfVxuXHQgKi9cblx0cmV0cmlldmUoIHBhdGggPSBcIlwiICkge1xuXHRcdHBhdGggPSBpcy5zdHJpbmcocGF0aCkgPyBwYXRoLnNwbGl0KCcuJykgOiBwYXRoO1xuXHRcdFxuXHRcdFxuXHRcdHJldHVybiBwYXRoICYmXG5cdFx0XHR0aGlzLnN0b3Jlc1twYXRoWzBdXSAmJlxuXHRcdFx0dGhpcy5zdG9yZXNbcGF0aFswXV0ucmV0cmlldmUgJiZcblx0XHRcdHRoaXMuc3RvcmVzW3BhdGhbMF1dLnJldHJpZXZlKHBhdGguc2xpY2UoMSkpO1xuXHR9XG5cdFxuXHQvKipcblx0ICogUmVzdG9yZSBhbGwgbm9kZXMgaW4gYSBqc29uUGF0aFxuXHQgKiBAcGFyYW0gcGF0aFxuXHQgKiBAcmV0dXJucyB7c3RyaW5nfCp9XG5cdCAqL1xuXHRyZXN0b3JlUmVmUGF0aCggcGF0aCA9IFwiXCIgKSB7XG5cdFx0cGF0aCA9IGlzLnN0cmluZyhwYXRoKSA/IHBhdGguc3BsaXQoJy4nKSA6IHBhdGg7XG5cdFx0XG5cdFx0bGV0IG9iaiwgaSA9IDAsIGNTY29wZSA9IHRoaXM7XG5cdFx0XG5cdFx0d2hpbGUgKCBpIDwgcGF0aC5sZW5ndGggKSB7XG5cdFx0XHRvYmogPSBjU2NvcGUuc3RvcmVzW3BhdGhbaV1dO1xuXHRcdFx0aWYgKCBTY29wZS5pc1Njb3BlQ2xhc3Mob2JqKVxuXHRcdFx0XHR8fFxuXHRcdFx0XHRTY29wZS5pc1N0b3JlQ2xhc3Mob2JqKSApIHtcblx0XHRcdFx0Y1Njb3BlLm1vdW50KHBhdGhbMF0pO1xuXHRcdFx0XHRvYmogPSBjU2NvcGUuc3RvcmVzW3BhdGhbaV1dO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHRpZiAoIFNjb3BlLmlzU2NvcGUob2JqKSApIHtcblx0XHRcdFx0Y1Njb3BlID0gb2JqO1xuXHRcdFx0XHRpKys7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIGlmICggU2NvcGUuaXNTdG9yZShvYmopICkge1xuXHRcdFx0XHRvYmoucmVzdG9yZSgpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cdFx0XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBHZXQgdGFyZ2V0IHN0b3JlIGZyb20ganNvbiBwYXRoXG5cdCAqIEBwYXJhbSBwYXRoXG5cdCAqIEByZXR1cm5zIHtzdHJpbmd8Kn1cblx0ICovXG5cdHJldHJpZXZlU3RvcmUoIHBhdGggPSBcIlwiICkge1xuXHRcdHBhdGggPSBpcy5zdHJpbmcocGF0aCkgPyBwYXRoLnNwbGl0KCcuJykgOiBwYXRoO1xuXHRcdHJldHVybiBwYXRoXG5cdFx0XHQmJiBwYXRoLmxlbmd0aFxuXHRcdFx0JiYgKFxuXHRcdFx0XHRwYXRoLmxlbmd0aCAhPSAxICYmIHRoaXMuc3RvcmVzW3BhdGhbMF1dLnJldHJpZXZlU3RvcmVcblx0XHRcdFx0PyB0aGlzLnN0b3Jlc1twYXRoWzBdXS5yZXRyaWV2ZVN0b3JlKHBhdGguc2xpY2UoMSkpXG5cdFx0XHRcdDogcGF0aC5sZW5ndGggPT0gMSAmJiB0aGlzLnN0b3Jlc1twYXRoWzBdXVxuXHRcdFx0KTtcblx0fVxuXHRcblx0LyoqXG5cdCAqIEdldCBvciB1cGRhdGUgc3RvcmVzIHJldmlzaW9ucyBpbiAnc3RvcmVzUmV2TWFwJ1xuXHQgKiBAcGFyYW0gc3RvcmVzUmV2TWFwXG5cdCAqIEBwYXJhbSBsb2NhbFxuXHQgKiBAcmV0dXJucyB7e319XG5cdCAqL1xuXHRnZXRTdG9yZXNSZXZzKCBzdG9yZXNSZXZNYXAgPSB7fSwgbG9jYWwgKSB7XG5cdFx0bGV0IGN0eCA9IHRoaXMuXy5fc2NvcGU7XG5cdFx0aWYgKCAhc3RvcmVzUmV2TWFwICkge1xuXHRcdFx0c3RvcmVzUmV2TWFwID0ge307XG5cdFx0fVxuXHRcdE9iamVjdC5rZXlzKGN0eCkuZm9yRWFjaChcblx0XHRcdGlkID0+IHtcblx0XHRcdFx0aWYgKCBpZCA9PSBcIiRwYXJlbnRcIiApIHJldHVybjtcblx0XHRcdFx0aWYgKCAhaXMuZm4oY3R4W2lkXSlcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0c3RvcmVzUmV2TWFwW2lkXSA9IGN0eFtpZF0uX3Jldjtcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlIGlmICggIXN0b3Jlc1Jldk1hcC5oYXNPd25Qcm9wZXJ0eShpZCkgKVxuXHRcdFx0XHRcdHN0b3Jlc1Jldk1hcFtpZF0gPSBmYWxzZVxuXHRcdFx0fVxuXHRcdCk7XG5cdFx0aWYgKCAhbG9jYWwgKSB7XG5cdFx0XHR0aGlzLl8uX21peGVkLnJlZHVjZSgoIHVwZGF0ZWQsIGN0eCApID0+IChjdHguZ2V0U3RvcmVzUmV2cyhzdG9yZXNSZXZNYXApLCBzdG9yZXNSZXZNYXApLCBzdG9yZXNSZXZNYXApO1xuXHRcdFx0dGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuZ2V0U3RvcmVzUmV2cyhzdG9yZXNSZXZNYXApO1xuXHRcdH1cblx0XHRyZXR1cm4gc3RvcmVzUmV2TWFwO1xuXHR9XG5cdFxuXHQvKipcblx0ICogUmVjdXJzaXZlbHkgZ2V0IGFsbCBzdG9yZXMgcmV2c1xuXHQgKiBAcGFyYW0gY2hpbGRzXG5cdCAqIEByZXR1cm5zIHtBcnJheX1cblx0ICogQHByaXZhdGVcblx0ICovXG5cdF9nZXRSZXZNYXAoIHN0b3Jlc1Jldk1hcCA9IHt9ICkge1xuXHRcdGxldCBjdHggPSB0aGlzLl8uX3Njb3BlO1xuXHRcdE9iamVjdC5rZXlzKGN0eCkuZm9yRWFjaChcblx0XHRcdGlkID0+IHtcblx0XHRcdFx0aWYgKCBpZCA9PSBcIiRwYXJlbnRcIiB8fCBzdG9yZXNSZXZNYXBbaWRdICkgcmV0dXJuO1xuXHRcdFx0XHRzdG9yZXNSZXZNYXBbaWRdID0geyByZXY6IGN0eFtpZF0uX3JldiwgcmVmczogW10gfTtcblx0XHRcdFx0XG5cdFx0XHR9KTtcblx0XHR0aGlzLl8uX21peGVkLnJlZHVjZVJpZ2h0KFxuXHRcdFx0KCBzdG9yZXNSZXZNYXAsIGN0eCApID0+IChjdHguX2dldFJldk1hcChzdG9yZXNSZXZNYXApKSwgc3RvcmVzUmV2TWFwKTtcblx0XHR0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC5fZ2V0UmV2TWFwKHN0b3Jlc1Jldk1hcCk7XG5cdFx0cmV0dXJuIHN0b3Jlc1Jldk1hcDtcblx0fVxuXHRcblx0LyoqXG5cdCAqIEdldCB1cGRhdGVkIG91dHB1dCBiYXNpbmcgc3RvcmVzUmV2TWFwJ3MgcmV2aXNpb25zLlxuXHQgKiBJZiBhIHN0b3JlIGluICdzdG9yZXNSZXZNYXAnIHdhcyB1cGRhdGVkOyBhZGQgaXQgdG8gJ291dHB1dCcgJiB1cGRhdGUgc3RvcmVzUmV2TWFwXG5cdCAqIEBwYXJhbSBzdG9yZXNSZXZNYXBcblx0ICogQHBhcmFtIG91dHB1dFxuXHQgKiBAcGFyYW0gdXBkYXRlZFxuXHQgKiBAcmV0dXJucyB7Knx7fX1cblx0ICovXG5cdGdldFJlZnNVcGRhdGVzKCByZWZzLCByZXZNYXAsIG91dHB1dCApIHtcblx0XHRyZXZNYXAgPSByZXZNYXAgfHwgcmVmc1xuXHRcdFx0Lm1hcChpZCA9PiAoaXMuc3RyaW5nKGlkKSA/IGlkIDogaWQubmFtZSkpXG5cdFx0XHQubWFwKGlkID0+ICh0aGlzLnBhcnNlUmVmKGlkKSkpXG5cdFx0XHQucmVkdWNlKCggcmV2cywgcmVmICkgPT4ge1xuXHRcdFx0XHRyZXZzW3JlZi5zdG9yZUlkXSA9IHJldnNbcmVmLnN0b3JlSWRdIHx8IHtcblx0XHRcdFx0XHRyZXYgOiAwLFxuXHRcdFx0XHRcdHJlZnM6IFtdXG5cdFx0XHRcdH07XG5cdFx0XHRcdHJldnNbcmVmLnN0b3JlSWRdLnJlZnMucHVzaChyZWYpO1xuXHRcdFx0XHRyZXR1cm4gcmV2cztcblx0XHRcdH0sIHt9KTtcblx0XHRcblx0XHRyZXR1cm4gdGhpcy5nZXRVcGRhdGVzKHJldk1hcCwgb3V0cHV0KVxuXHR9XG5cdFxuXHQvKipcblx0ICogR2V0IG9yIHVwZGF0ZSBvdXRwdXQgYmFzaW5nIHN0b3Jlc1Jldk1hcCdzIHJldmlzaW9ucy5cblx0ICogSWYgYSBzdG9yZSBpbiAnc3RvcmVzUmV2TWFwJyB3YXMgdXBkYXRlZDsgYWRkIGl0IHRvICdvdXRwdXQnICYgdXBkYXRlIHN0b3Jlc1Jldk1hcFxuXHQgKiBAcGFyYW0gc3RvcmVzUmV2TWFwXG5cdCAqIEBwYXJhbSBvdXRwdXRcblx0ICogQHBhcmFtIHVwZGF0ZWRcblx0ICogQHJldHVybnMgeyp8e319XG5cdCAqL1xuXHRnZXRVcGRhdGVzKCBzdG9yZXNSZXZNYXAsIG91dHB1dCwgdXBkYXRlZCApIHtcblx0XHRvdXRwdXQgICAgICAgPSBvdXRwdXQgfHwge307XG5cdFx0c3RvcmVzUmV2TWFwID0gc3RvcmVzUmV2TWFwIHx8IHRoaXMuX2dldFJldk1hcCgpO1xuXHRcdE9iamVjdC5rZXlzKHN0b3Jlc1Jldk1hcCkuZm9yRWFjaChcblx0XHRcdGlkID0+IHtcblx0XHRcdFx0bGV0IHN0b3JlICAgICAgICA9IHRoaXMuc3RvcmVzW2lkXTtcblx0XHRcdFx0c3RvcmVzUmV2TWFwW2lkXSA9IHN0b3Jlc1Jldk1hcFtpZF0gfHwgeyByZXY6IDAsIHJlZnM6IFtdIH07XG5cdFx0XHRcdFxuXHRcdFx0XHRpZiAoIHN0b3JlICYmIGlzLmZuKHN0b3JlKSApIHtcblx0XHRcdFx0XHR1cGRhdGVkICAgID0gdHJ1ZTtcblx0XHRcdFx0XHRvdXRwdXRbaWRdID0gdW5kZWZpbmVkO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2UgaWYgKCBzdG9yZSAmJiBzdG9yZS5fcmV2ID4gc3RvcmVzUmV2TWFwW2lkXS5yZXYgKSB7XG5cdFx0XHRcdFx0c3RvcmVzUmV2TWFwW2lkXS5yZXYgPSBzdG9yZS5fcmV2O1xuXHRcdFx0XHRcdHVwZGF0ZWQgICAgICAgICAgICAgID0gdHJ1ZTtcblx0XHRcdFx0XHRzdG9yZXNSZXZNYXBbaWRdLnJlZnMuZm9yRWFjaChcblx0XHRcdFx0XHRcdHJlZiA9PiB7XG5cdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0XHRvdXRwdXRbcmVmLmFsaWFzXSA9IHRoaXMucmV0cmlldmUocmVmLnBhdGgpXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0KVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0KVxuXHRcdHJldHVybiB1cGRhdGVkICYmIG91dHB1dDtcblx0fVxuXHRcblx0LyoqXG5cdCAqIFJlY3Vyc2l2ZWx5IGdldCBhbGwgY2hpbGQgc2NvcGVzXG5cdCAqIEBwYXJhbSBjaGlsZHNcblx0ICogQHJldHVybnMge0FycmF5fVxuXHQgKiBAcHJpdmF0ZVxuXHQgKi9cblx0X2dldEFsbENoaWxkcyggY2hpbGRzID0gW10gKSB7XG5cdFx0Y2hpbGRzLnB1c2goLi4udGhpcy5fLmNoaWxkU2NvcGVzKTtcblx0XHR0aGlzLl8uY2hpbGRTY29wZXMuZm9yRWFjaChcblx0XHRcdGN0eCA9PiB7XG5cdFx0XHRcdGN0eC5fZ2V0QWxsQ2hpbGRzKGNoaWxkcyk7XG5cdFx0XHR9XG5cdFx0KTtcblx0XHRyZXR1cm4gY2hpbGRzO1xuXHR9XG5cdFxuXHQvKipcblx0ICogU2VyaWFsaXplIGFsbCBhY3RpdmUgc3RvcmVzIHN0YXRlICYgZGF0YSBpbiBldmVyeSBjaGlsZHMgJiBtaXhlZCBzY29wZXNcblx0ICpcblx0ICogU2NvcGVzIHdpdGhvdXQga2V5IG9yIGlkIGFyZSBpZ25vcmVkXG5cdCAqIEBwYXJhbSBvdXRwdXRcblx0ICogQHJldHVybnMge3t9fVxuXHQgKi9cblx0c2VyaWFsaXplKCBjZmcgPSB7fSwgb3V0cHV0ID0ge30gKSB7XG5cdFx0bGV0IGN0eCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA9IHRoaXMuXy5fc2NvcGUsXG5cdFx0ICAgIHsgYmFzZUlkLCBrZXksIGtleVBJRCwgaW5jcmVtZW50SWQgfSA9IHRoaXMuXyxcblx0XHQgICAge1xuXHRcdFx0ICAgIGFsaWFzLFxuXHRcdFx0ICAgIHBhcmVudEFsaWFzLFxuXHRcdCAgICB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSBjZmcsXG5cdFx0ICAgIHNpZCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA9IGtleVxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IChwYXJlbnRBbGlhcyB8fCBrZXlQSUQpICsgJz4nICsga2V5XG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogYWxpYXMgfHwgcGFyZW50QWxpYXMgJiYgKHBhcmVudEFsaWFzICsgJy8nICsgYmFzZUlkKSB8fCB0aGlzLl9pZDtcblx0XHRcblx0XHRcblx0XHQvL2FsaWFzID0gYWxpYXMgfHwgYmFzZUlkO1xuXHRcdHJldHVybiB0aGlzLnNlcmlhbGl6ZV9leChjZmcsIG91dHB1dCwgc2lkLCBhbGlhcywgW1wiJHBhcmVudFwiXSlcblx0fVxuXHRcblx0c2VyaWFsaXplX2V4KCBjZmcgPSB7fSwgb3V0cHV0ID0ge30sIHNpZCwgYWxpYXMsIGV4Y2x1ZGUgKSB7XG5cdFx0bGV0IF8gICAgICAgICAgICAgICA9IHRoaXMuXyxcblx0XHQgICAgY3R4ICAgICAgICAgICAgID0gXy5fc2NvcGUsXG5cdFx0ICAgIHsgaW5jcmVtZW50SWQgfSA9IF8sXG5cdFx0ICAgIHtcblx0XHRcdCAgICB3aXRoQ2hpbGRzID0gdHJ1ZSxcblx0XHRcdCAgICB3aXRoTWl4ZWQgID0gdHJ1ZSxcblx0XHRcdCAgICBub3JlZnMsXG5cdFx0ICAgIH0gICAgICAgICAgICAgICA9IGNmZztcblx0XHRcblx0XHRpZiAoIGtleVdhbGtuR2V0KG91dHB1dCwgc2lkKSApIHtcblx0XHRcdGlmICggIWluY3JlbWVudElkICkvLyBkb25lXG5cdFx0XHRcdHJldHVybiBvdXRwdXQ7XG5cdFx0XHRlbHNlIGlmICggaW5jcmVtZW50SWQgKSB7Ly8gZ2VuZXJhdGUga2V5IGlkXG5cdFx0XHRcdGxldCBpID0gLTE7XG5cdFx0XHRcdHdoaWxlICgga2V5V2Fsa25HZXQob3V0cHV0LCBzaWQgKyAnWycgKyAoKytpKSArICddJykgKSA7XG5cdFx0XHRcdHNpZCA9IHNpZCArICdbJyArIGkgKyAnXSc7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdFxuXHRcdGtleVdhbGtuU2V0KG91dHB1dCwgc2lkLCB7fSk7XG5cdFx0XG5cdFx0T2JqZWN0LmtleXMoY3R4KS5mb3JFYWNoKFxuXHRcdFx0aWQgPT4ge1xuXHRcdFx0XHRpZiAoIGV4Y2x1ZGUuaW5jbHVkZXMoaWQpIHx8IFNjb3BlLmlzU3RvcmVDbGFzcyhjdHhbaWRdKSB8fCBTY29wZS5pc1Njb3BlQ2xhc3MoY3R4W2lkXSkgKVxuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XG5cdFx0XHRcdGN0eFtpZF0uc2VyaWFsaXplKHsgLi4uY2ZnLCBwYXJlbnRBbGlhczogc2lkIH0sIG91dHB1dCk7XG5cdFx0XHR9XG5cdFx0KVxuXHRcdFxuXHRcdHdpdGhDaGlsZHMgJiYgXy5jaGlsZFNjb3Blcy5mb3JFYWNoKFxuXHRcdFx0Y3R4ID0+IHtcblx0XHRcdFx0IWN0eC5fLmlzTG9jYWxJZCAmJiBjdHguc2VyaWFsaXplKHtcblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aENoaWxkICA6IHRydWUsXG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpdGhQYXJlbnRzOiBmYWxzZSxcblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50QWxpYXM6IHNpZCxcblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aE1peGVkLFxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JlZnMsXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBvdXRwdXQpO1xuXHRcdFx0fVxuXHRcdCk7XG5cdFx0XG5cdFx0d2l0aE1peGVkICYmIF8uX21peGVkLmZvckVhY2goXG5cdFx0XHRjdHggPT4ge1xuXHRcdFx0XHQhY3R4Ll8uaXNMb2NhbElkICYmIGN0eC5zZXJpYWxpemUoe1xuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRoQ2hpbGQgIDogZmFsc2UsXG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpdGhQYXJlbnRzOiBmYWxzZSxcblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aE1peGVkLFxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JlZnNcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIG91dHB1dCk7XG5cdFx0XHR9XG5cdFx0KTtcblx0XHRcblx0XHRpZiAoIGFsaWFzICkge1xuXHRcdFx0b3V0cHV0ID0gT2JqZWN0LmtleXMob3V0cHV0KVxuXHRcdFx0ICAgICAgICAgICAgICAgLnJlZHVjZShcblx0XHRcdFx0ICAgICAgICAgICAgICAgKCBoLCBrICkgPT4gKFxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgIGhbayA9PT0gdGhpcy5faWRcblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgID8gYWxpYXNcblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgIDoga10gPSBvdXRwdXRba10sXG5cdFx0XHRcdFx0XHQgICAgICAgICAgICAgICBoXG5cdFx0XHRcdCAgICAgICAgICAgICAgICksXG5cdFx0XHRcdCAgICAgICAgICAgICAgIHt9XG5cdFx0XHQgICAgICAgICAgICAgICApXG5cdFx0fVxuXHRcdHJldHVybiBvdXRwdXQ7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBSZXN0b3JlIHN0YXRlICYgZGF0YSBmcm9tIHRoZSBzZXJpYWxpemUgZm5cblx0ICogQHBhcmFtIHNuYXBzaG90XG5cdCAqIEBwYXJhbSBmb3JjZVxuXHQgKi9cblx0cmVzdG9yZSggc25hcHNob3QsIGNmZyA9IHt9LCBmb3JjZSA9IGlzLmJvb2woY2ZnKSAmJiBjZmcgKSB7XG5cdFx0bGV0IGN0eCA9IHRoaXMuXy5fc2NvcGUsIHNuYXA7XG5cdFx0XG5cdFx0aWYgKCBzbmFwc2hvdCAmJiBjZmcgJiYgY2ZnLmFsaWFzICYmIGNmZy5hbGlhcyAhPSB0aGlzLl9pZCApIHtcblx0XHRcdHNuYXAgPSB7XG5cdFx0XHRcdC4uLnNuYXBzaG90LFxuXHRcdFx0XHRbdGhpcy5faWRdOiBzbmFwc2hvdFtjZmcuYWxpYXNdXG5cdFx0XHR9XG5cdFx0XHRkZWxldGUgc25hcFtjZmcuYWxpYXNdO1xuXHRcdFx0c25hcHNob3QgPSBzbmFwO1xuXHRcdH1cblx0XHRzbmFwc2hvdCA9IHNuYXBzaG90XG5cdFx0XHQmJiBrZXlXYWxrbkdldChzbmFwc2hvdCwgdGhpcy5faWQpXG5cdFx0XHR8fCB0aGlzLnRha2VTbmFwc2hvdEJ5S2V5KHRoaXMuX2lkKTtcblx0XHRcblx0XHRcblx0XHRpZiAoICFzbmFwc2hvdCApXG5cdFx0XHRyZXR1cm47XG5cdFx0XG5cdFx0dGhpcy5fLnNuYXBzaG90ID0geyAuLi5zbmFwc2hvdCB9O1xuXHRcdFxuXHRcdHNuYXAgICAgICAgICAgPSBzbmFwc2hvdFsnLyddO1xuXHRcdHNuYXBzaG90WycvJ10gPSB7IC4uLnNuYXAgfTtcblx0XHRzbmFwICYmIE9iamVjdC5rZXlzKHNuYXApLmZvckVhY2goXG5cdFx0XHRuYW1lID0+IHtcblx0XHRcdFx0aWYgKCBuYW1lID09IFwiJHBhcmVudFwiICkgcmV0dXJuO1xuXHRcdFx0XHRcblx0XHRcdFx0aWYgKCBjdHhbbmFtZV0gKSB7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0aWYgKCBmb3JjZSAmJiAhaXMuZm4oY3R4W25hbWVdKSApXG5cdFx0XHRcdFx0XHRjdHhbbmFtZV0uZGVzdHJveSgpO1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdHRoaXMuX21vdW50KG5hbWUpOy8vIHF1aWV0XG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHR9XG5cdFx0KVxuXHRcdFxuXHRcdHRoaXMuXy5fbWl4ZWQuZm9yRWFjaChcblx0XHRcdGN0eCA9PiB7XG5cdFx0XHRcdCFjdHguXy5pc0xvY2FsSWQgJiYgY3R4LnJlc3RvcmUodW5kZWZpbmVkLCBmb3JjZSk7XG5cdFx0XHR9XG5cdFx0KTtcblx0XHRcblx0XHR0aGlzLl8uY2hpbGRTY29wZXMuZm9yRWFjaChcblx0XHRcdGN0eCA9PiB7XG5cdFx0XHRcdCFjdHguXy5pc0xvY2FsSWQgJiYgY3R4LnJlc3RvcmUodW5kZWZpbmVkLCBmb3JjZSk7XG5cdFx0XHR9XG5cdFx0KTtcblx0fVxuXHRcblx0Z2V0U25hcHNob3RCeUtleSgga2V5LCBsb2NhbCApIHtcblx0XHQvLyBvbmx5IGhhdmUgdGhlIGxvY2FsIHNuYXBcblx0XHRpZiAoIHRoaXMuXy5zbmFwc2hvdCAmJiBrZXkuc3RhcnRzV2l0aCh0aGlzLl9pZCkgKSB7XG5cdFx0XHRsZXQgb2JqID0ga2V5V2Fsa25HZXQodGhpcy5fLnNuYXBzaG90LCBrZXkuc3Vic3RyKHRoaXMuX2lkLmxlbmd0aCkpXG5cdFx0XHRyZXR1cm4gb2JqO1xuXHRcdH1cblx0XHRlbHNlIHJldHVybiAhbG9jYWxcblx0XHRcdCYmIHRoaXMucGFyZW50XG5cdFx0XHQmJiB0aGlzLnBhcmVudC5nZXRTbmFwc2hvdEJ5S2V5KGtleSlcblx0XHRcdHx8XG5cdFx0XHR0aGlzLnN0b3Jlcy4kcGFyZW50XG5cdFx0XHQmJiB0aGlzLnN0b3Jlcy4kcGFyZW50LmdldFNuYXBzaG90QnlLZXkoa2V5KTtcblx0XHRcblx0fVxuXHRcblx0Z2V0U25hcHNob3RCeUtleUV4dCggc25hcHNob3QsIGtleSwgbG9jYWwgKSB7XG5cdFx0Ly8gb25seSBoYXZlIHRoZSBsb2NhbCBzbmFwXG5cdFx0aWYgKCBzbmFwc2hvdCApIHtcblx0XHRcdGxldCBvYmogPSBrZXlXYWxrbkdldChzbmFwc2hvdCwga2V5KVxuXHRcdFx0cmV0dXJuIG9iajtcblx0XHR9XG5cdFx0XG5cdH1cblx0XG5cdHRha2VTbmFwc2hvdEJ5S2V5KCBrZXksIGxvY2FsICkge1xuXHRcdGlmICggdGhpcy5fLnNuYXBzaG90ICYmIGtleS5zdGFydHNXaXRoKHRoaXMuX2lkKSApIHtcblx0XHRcdGxldCBvYmogPSBrZXlXYWxrbkdldCh0aGlzLl8uc25hcHNob3QsIGtleS5zdWJzdHIodGhpcy5faWQubGVuZ3RoKSlcblx0XHRcdGlmICggb2JqICkge1xuXHRcdFx0XHR0aGlzLmRlbGV0ZVNuYXBzaG90QnlLZXkoa2V5LCB0cnVlKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBvYmo7XG5cdFx0fVxuXHRcdGVsc2UgcmV0dXJuICFsb2NhbFxuXHRcdFx0JiYgdGhpcy5wYXJlbnRcblx0XHRcdCYmIHRoaXMucGFyZW50LnRha2VTbmFwc2hvdEJ5S2V5KGtleSlcblx0XHRcdHx8XG5cdFx0XHR0aGlzLnN0b3Jlcy4kcGFyZW50XG5cdFx0XHQmJiB0aGlzLnN0b3Jlcy4kcGFyZW50LnRha2VTbmFwc2hvdEJ5S2V5KGtleSk7XG5cdH1cblx0XG5cdGRlbGV0ZVNuYXBzaG90QnlLZXkoIGtleSwgbG9jYWwgKSB7XG5cdFx0aWYgKCB0aGlzLl8uc25hcHNob3QgJiYga2V5LnN0YXJ0c1dpdGgodGhpcy5faWQpICkge1xuXHRcdFx0bGV0IG9iaiA9IGtleVdhbGtuR2V0KHRoaXMuXy5zbmFwc2hvdCwga2V5LnN1YnN0cih0aGlzLl9pZC5sZW5ndGgpLnJlcGxhY2UoL14oLipbXFw+fFxcL10pW15cXD58XFwvXSskL2lnLCAnJDEnKSlcblx0XHRcdGlmICggb2JqIClcblx0XHRcdFx0ZGVsZXRlIG9ialtrZXkucmVwbGFjZSgvXi4qW1xcPnxcXC9dKFteXFw+fFxcL10rKSQvaWcsICckMScpXVxuXHRcdH1cblx0XHRyZXR1cm4gIWxvY2FsXG5cdFx0XHQmJiB0aGlzLnBhcmVudFxuXHRcdFx0JiYgdGhpcy5wYXJlbnQuZGVsZXRlU25hcHNob3RCeUtleShrZXkpXG5cdFx0XHR8fFxuXHRcdFx0dGhpcy5zdG9yZXMuJHBhcmVudFxuXHRcdFx0JiYgdGhpcy5zdG9yZXMuJHBhcmVudC5kZWxldGVTbmFwc2hvdEJ5S2V5KGtleSk7XG5cdH1cblx0XG5cdHNldFN0YXRlKCBwU3RhdGUgKSB7XG5cdFx0T2JqZWN0LmtleXMocFN0YXRlKVxuXHRcdCAgICAgIC5mb3JFYWNoKGsgPT4gKHRoaXMuc3RhdGVba10gPSBwU3RhdGVba10pKVxuXHR9XG5cdFxuXHQvKipcblx0ICogZ2V0IGEgcGFyc2VkIHJlZmVyZW5jZVxuXHQgKiBAcGFyYW0gX3JlZlxuXHQgKiBAcmV0dXJucyB7e3N0b3JlSWQsIHBhdGgsIGFsaWFzOiAqLCByZWY6ICp9fVxuXHQgKi9cblx0cGFyc2VSZWYoIF9yZWYgKSB7XG5cdFx0aWYgKCB0eXBlb2YgX3JlZiAhPT0gJ3N0cmluZycgKSB7Ly8gQHRvZG8gOiBybSB0aGlzXG5cdFx0XHR0aGlzLnJlZ2lzdGVyKHsgW19yZWYubmFtZV06IF9yZWYuc3RvcmUgfSk7XG5cdFx0XHRfcmVmID0gX3JlZi5uYW1lO1xuXHRcdH1cblx0XHRsZXQgcmVmID0gX3JlZi5zcGxpdCgnOicpO1xuXHRcdHJlZlswXSAgPSByZWZbMF0uc3BsaXQoJy4nKTtcblx0XHRyZXR1cm4ge1xuXHRcdFx0c3RvcmVJZDogcmVmWzBdWzBdLFxuXHRcdFx0cGF0aCAgIDogcmVmWzBdLFxuXHRcdFx0YWxpYXMgIDogcmVmWzFdIHx8IHJlZlswXVtyZWZbMF0ubGVuZ3RoIC0gMV0sXG5cdFx0XHRyZWYgICAgOiBfcmVmXG5cdFx0fTtcblx0fVxuXHRcblx0LyoqXG5cdCAqIERpc3BhdGNoIGFuIGFjdGlvbiB0byB0aGUgdG9wIHBhcmVudCAmIG1peGVkIHNjb3BlcywgaW4gYWxsIHN0b3Jlc1xuXHQgKlxuXHQgKiBAcGFyYW0gYWN0aW9uXG5cdCAqIEBwYXJhbSBkYXRhXG5cdCAqIEByZXR1cm5zIHtTY29wZX1cblx0ICovXG5cdGRpc3BhdGNoKCBhY3Rpb24sIC4uLmFyZ3ogKSB7XG5cdFx0aWYgKCB0aGlzLmRlYWQgKSB7XG5cdFx0XHRjb25zb2xlLndhcm4oXCJEaXNwYXRjaCB3YXMgY2FsbGVkIG9uIGEgZGVhZCBzY29wZSwgY2hlY2sgeW91J3JlIGFzeW5jIGZ1bmN0aW9ucyBpbiB0aGlzIHN0YWNrLi4uXCIsIChuZXcgRXJyb3IoKSkuc3RhY2spO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRsZXQgYkFjdHMgPSB0aGlzLl8uX2JvdW5kZWRBY3Rpb25zO1xuXHRcdE9iamVjdC5rZXlzKHRoaXMuXy5fc2NvcGUpXG5cdFx0ICAgICAgLmZvckVhY2goXG5cdFx0XHQgICAgICBpZCA9PiB7XG5cdFx0XHRcdCAgICAgIGlmICggaWQgPT0gXCIkcGFyZW50XCIgKSByZXR1cm47XG5cdFx0XHRcdCAgICAgIGlmICggIWlzLmZuKHRoaXMuXy5fc2NvcGVbaWRdKSApXG5cdFx0XHRcdFx0ICAgICAgdGhpcy5fLl9zY29wZVtpZF0udHJpZ2dlcihhY3Rpb24sIC4uLmFyZ3opO1xuXHRcdFx0ICAgICAgfVxuXHRcdCAgICAgICk7XG5cdFx0XG5cdFx0aWYgKCBiQWN0cyAmJiBiQWN0cy50ZXN0KGFjdGlvbikgKVxuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XG5cdFx0dGhpcy5fLl9taXhlZC5mb3JFYWNoKCggY3R4ICkgPT4gKGN0eC5kaXNwYXRjaChhY3Rpb24sIC4uLmFyZ3opKSk7XG5cdFx0dGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuZGlzcGF0Y2goYWN0aW9uLCAuLi5hcmd6KTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXHRcblx0dHJpZ2dlcigpIHtcblx0XHR0aGlzLmRpc3BhdGNoKC4uLmFyZ3VtZW50cyk7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBvbmNlKCdzdGFibGUnLCBjYilcblx0ICogQHBhcmFtIG9iaiB7UmVhY3QuQ29tcG9uZW50fFN0b3JlfGZ1bmN0aW9uKVxuXHQgKiBAcGFyYW0ga2V5IHtzdHJpbmd9IG9wdGlvbmFsIGtleSB3aGVyZSB0byBtYXAgdGhlIHB1YmxpYyBzdGF0ZVxuXHQgKi9cblx0dGhlbiggY2IgKSB7XG5cdFx0aWYgKCAhdGhpcy5fc3RhYmxlIClcblx0XHRcdHJldHVybiB0aGlzLm9uY2UoJ3N0YWJsZScsIGUgPT4gdGhpcy50aGVuKGNiKSk7XG5cdFx0XG5cdFx0cmV0dXJuIGNiKHRoaXMuZGF0YSk7XG5cdH1cblx0XG5cdG9uY2VTdGFibGVUcmVlKCBjYiApIHtcblx0XHRpZiAoIHRoaXMuXy51blN0YWJsZUNoaWxkcyApXG5cdFx0XHRyZXR1cm4gdGhpcy5vbmNlKCdzdGFibGVUcmVlJywgZSA9PiB0aGlzLm9uY2VTdGFibGVUcmVlKGNiKSk7XG5cdFx0cmV0dXJuIGNiKHRoaXMuZGF0YSk7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBDYWxsIHJldGFpbiBvbiB0aGUgc2NvcGVkIHN0b3JlcyBiYXNpbmcgdGhlIGdpdmVuIGxpc3Rcblx0ICpcblx0ICogQHBhcmFtIHN0b3Jlc1xuXHQgKiBAcGFyYW0gcmVhc29uXG5cdCAqL1xuXHRyZXRhaW5TdG9yZXMoIHN0b3JlcyA9IFtdLCByZWFzb24gKSB7XG5cdFx0c3RvcmVzLmZvckVhY2goXG5cdFx0XHRpZCA9PiAodGhpcy5zdG9yZXNbaWRdICYmIHRoaXMuc3RvcmVzW2lkXS5yZXRhaW4gJiYgdGhpcy5zdG9yZXNbaWRdLnJldGFpbihyZWFzb24pKVxuXHRcdClcblx0fVxuXHRcblx0LyoqXG5cdCAqIENhbGwgcmV0YWluIG9uIHRoZSBzY29wZWQgc3RvcmVzXG5cdCAqXG5cdCAqIEBwYXJhbSBzdG9yZXNcblx0ICogQHBhcmFtIHJlYXNvblxuXHQgKi9cblx0ZGlzcG9zZVN0b3Jlcyggc3RvcmVzID0gW10sIHJlYXNvbiApIHtcblx0XHRzdG9yZXMuZm9yRWFjaChcblx0XHRcdGlkID0+ICh0aGlzLnN0b3Jlc1tpZF0gJiYgdGhpcy5zdG9yZXNbaWRdLmRpc3Bvc2UgJiYgdGhpcy5zdG9yZXNbaWRdLmRpc3Bvc2UocmVhc29uKSlcblx0XHQpXG5cdH1cblx0XG5cdC8qKlxuXHQgKiBLZWVwIHRoZSBzY29wZSB1bnN0YWJsZSB1bnRpbCByZWxlYXNlIGlzIGNhbGxlZFxuXHQgKiBAcGFyYW0gcmVhc29uXG5cdCAqL1xuXHR3YWl0KCByZWFzb24gKSB7XG5cdFx0Ly9jb25zb2xlLmxvZyhcIndhaXRcIiwgcmVhc29uKTtcblx0XHR0aGlzLl9zdGFibGUgJiYgIXRoaXMuX19sb2Nrcy5hbGwgJiYgdGhpcy5lbWl0KFwidW5zdGFibGVcIiwgdGhpcyk7XG5cdFx0dGhpcy5fc3RhYmxlID0gZmFsc2U7XG5cdFx0dGhpcy5fX2xvY2tzLmFsbCsrO1xuXHRcdGlmICggcmVhc29uICkge1xuXHRcdFx0dGhpcy5fX2xvY2tzW3JlYXNvbl0gPSB0aGlzLl9fbG9ja3NbcmVhc29uXSB8fCAwO1xuXHRcdFx0dGhpcy5fX2xvY2tzW3JlYXNvbl0rKztcblx0XHR9XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBTdGFiaWxpemUgdGhlIHNjb3BlIGlmIG5vIG1vcmUgbG9ja3MgcmVtYWluICh3YWl0IGZuKVxuXHQgKiBAcGFyYW0gcmVhc29uXG5cdCAqL1xuXHRyZWxlYXNlKCByZWFzb24gKSB7XG5cdFx0XG5cdFx0aWYgKCByZWFzb24gKSB7XG5cdFx0XHRpZiAoIHRoaXMuX19sb2Nrc1tyZWFzb25dID09IDAgKVxuXHRcdFx0XHRjb25zb2xlLmVycm9yKFwiUmVsZWFzZSBtb3JlIHRoYW4gbG9ja2luZyAhXCIsIHJlYXNvbik7XG5cdFx0XHR0aGlzLl9fbG9ja3NbcmVhc29uXSA9IHRoaXMuX19sb2Nrc1tyZWFzb25dIHx8IDA7XG5cdFx0XHR0aGlzLl9fbG9ja3NbcmVhc29uXS0tO1xuXHRcdH1cblx0XHRpZiAoICFyZWFzb24gJiYgdGhpcy5fX2xvY2tzLmFsbCA9PSAwIClcblx0XHRcdGNvbnNvbGUuZXJyb3IoXCJSZWxlYXNlIG1vcmUgdGhhbiBsb2NraW5nICFcIik7XG5cdFx0XG5cdFx0dGhpcy5fX2xvY2tzLmFsbC0tO1xuXHRcdGlmICggIXRoaXMuX19sb2Nrcy5hbGwgKSB7XG5cdFx0XHRpZiAoIHRoaXMuXy5zdGFiaWxpemVyVE0gKVxuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR0aGlzLl8uc3RhYmlsaXplclRNICYmIGNsZWFyVGltZW91dCh0aGlzLl8uc3RhYmlsaXplclRNKTtcblx0XHRcdFxuXHRcdFx0dGhpcy5fLnN0YWJpbGl6ZXJUTSA9IHNldFRpbWVvdXQoXG5cdFx0XHRcdGUgPT4ge1xuXHRcdFx0XHRcdHRoaXMuXy5zdGFiaWxpemVyVE0gPSBudWxsO1xuXHRcdFx0XHRcdGlmICggdGhpcy5fX2xvY2tzLmFsbCApXG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0dGhpcy5fLnByb3BhZ1RNICYmIGNsZWFyVGltZW91dCh0aGlzLl8ucHJvcGFnVE0pO1xuXHRcdFx0XHRcdHRoaXMuX3JldisrO1xuXHRcdFx0XHRcdHRoaXMuX3N0YWJsZSA9IHRydWU7XG5cdFx0XHRcdFx0dGhpcy5lbWl0KFwic3RhYmxlXCIsIHRoaXMpO1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdCF0aGlzLmRlYWQgJiYgdGhpcy5fcHJvcGFnKCk7Ly8gc3RhYmlsaXR5IGNhbiBpbmR1Y2UgZGVzdHJveVxuXHRcdFx0XHR9XG5cdFx0XHQpO1xuXHRcdH1cblx0XHRcblx0fVxuXHRcblx0LyoqXG5cdCAqIFByb3BhZyBzdG9yZXMgdXBkYXRlcyBiYXNpbmcgdGhlaXJzIGxhc3QgdXBkYXRlc1xuXHQgKi9cblx0cHJvcGFnKCkge1xuXHRcdHRoaXMuXy5wcm9wYWdUTSAmJiBjbGVhclRpbWVvdXQodGhpcy5fLnByb3BhZ1RNKTtcblx0XHR0aGlzLl8ucHJvcGFnVE0gPSBzZXRUaW1lb3V0KFxuXHRcdFx0ZSA9PiB7XG5cdFx0XHRcdHRoaXMuXy5wcm9wYWdUTSA9IG51bGw7XG5cdFx0XHRcdHRoaXMuX3Byb3BhZygpXG5cdFx0XHR9LCAyXG5cdFx0KTtcblx0fVxuXHRcblx0X3Byb3BhZygpIHtcblx0XHRpZiAoIHRoaXMuXy5mb2xsb3dlcnMubGVuZ3RoIClcblx0XHRcdHRoaXMuXy5mb2xsb3dlcnMuZm9yRWFjaCgoIHsgMDogb2JqLCAxOiBrZXksIDI6IGFzLCAzOiBsYXN0UmV2cywgMzogcmVtYXBzIH0gKSA9PiB7XG5cdFx0XHRcdGxldCBkYXRhID0gdGhpcy5nZXRVcGRhdGVzKGxhc3RSZXZzKTtcblx0XHRcdFx0aWYgKCAhZGF0YSApIHJldHVybjtcblx0XHRcdFx0Ly9jb25zb2xlLmxvZyhkYXRhLCBsYXN0UmV2cylcblx0XHRcdFx0aWYgKCB0eXBlb2Ygb2JqICE9IFwiZnVuY3Rpb25cIiApIHtcblx0XHRcdFx0XHQvL2NvbnNvbGUubG9nKFwic2V0U3RhdGUgXCIsb2JqLCBPYmplY3Qua2V5cyhkYXRhKSlcblx0XHRcdFx0XHRpZiAoIGFzICkgb2JqLnNldFN0YXRlKHsgW2FzXTogZGF0YSB9KTtcblx0XHRcdFx0XHRlbHNlIG9iai5zZXRTdGF0ZShkYXRhKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHRvYmooZGF0YSwgbGFzdFJldnMgJiYgWy4uLmxhc3RSZXZzXSB8fCBcIm5vIHJldnNcIik7XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gbGFzdFJldnMgJiZcblx0XHRcdFx0Ly8ga2V5LmZvckVhY2goaWQgPT4gKGxhc3RSZXZzW2lkXSA9IHRoaXMuc3RvcmVzW2lkXSAmJlxuXHRcdFx0XHQvLyB0aGlzLnN0b3Jlc1tpZF0uX3JldiB8fCAwKSk7XG5cdFx0XHR9KTtcblx0XHR0aGlzLmVtaXQoXCJ1cGRhdGVcIiwgdGhpcy5nZXRVcGRhdGVzKCkpO1xuXHR9XG5cdFxuXHQvKipcblx0ICogaXMgc3RhYmxlXG5cdCAqIEByZXR1cm5zIGJvb2xcblx0ICovXG5cdGlzU3RhYmxlKCkge1xuXHRcdHJldHVybiB0aGlzLl9zdGFibGU7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBpcyBzdGFibGUgdHJlZVxuXHQgKiBAcmV0dXJucyBib29sXG5cdCAqL1xuXHRpc1N0YWJsZVRyZWUoKSB7XG5cdFx0cmV0dXJuICF0aGlzLl8udW5TdGFibGVDaGlsZHM7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBSZWdpc3RlciBjaGlsZHJlblxuXHQgKiBAcGFyYW0gc2NvcGVcblx0ICogQHByaXZhdGVcblx0ICovXG5cdF9hZGRDaGlsZCggc2NvcGUgKSB7XG5cdFx0dGhpcy5fLmNoaWxkU2NvcGVzLnB1c2goc2NvcGUpO1xuXHRcdHRoaXMuXy5zZWVuQ2hpbGRzKys7XG5cdFx0bGV0IGxpc3RzICAgICA9IHtcblx0XHRcdCAgICAnc3RhYmxlJyAgICAgIDogcyA9PiB7XG5cdFx0XHRcdCAgICB0aGlzLl8udW5TdGFibGVDaGlsZHMtLTtcblx0XHRcdFx0ICAgIGlmICggIXRoaXMuXy51blN0YWJsZUNoaWxkcyApXG5cdFx0XHRcdFx0ICAgIHRoaXMuZW1pdChcInN0YWJsZVRyZWVcIiwgdGhpcylcblx0XHRcdCAgICB9LFxuXHRcdFx0ICAgICd1bnN0YWJsZScgICAgOiBzID0+IHtcblx0XHRcdFx0ICAgIHRoaXMuXy51blN0YWJsZUNoaWxkcysrO1xuXHRcdFx0XHQgICAgaWYgKCAxID09IHRoaXMuXy51blN0YWJsZUNoaWxkcyApXG5cdFx0XHRcdFx0ICAgIHRoaXMuZW1pdChcInVuc3RhYmxlVHJlZVwiLCB0aGlzKVxuXHRcdFx0ICAgIH0sXG5cdFx0XHQgICAgJ3N0YWJsZVRyZWUnICA6IHMgPT4ge1xuXHRcdFx0XHQgICAgdGhpcy5fLnVuU3RhYmxlQ2hpbGRzLS07XG5cdFx0XHRcdCAgICBpZiAoICF0aGlzLl8udW5TdGFibGVDaGlsZHMgKVxuXHRcdFx0XHRcdCAgICB0aGlzLmVtaXQoXCJzdGFibGVUcmVlXCIsIHRoaXMpXG5cdFx0XHQgICAgfSxcblx0XHRcdCAgICAndW5zdGFibGVUcmVlJzogcyA9PiB7XG5cdFx0XHRcdCAgICB0aGlzLl8udW5TdGFibGVDaGlsZHMrKztcblx0XHRcdFx0ICAgIGlmICggMSA9PSB0aGlzLl8udW5TdGFibGVDaGlsZHMgKVxuXHRcdFx0XHRcdCAgICB0aGlzLmVtaXQoXCJ1bnN0YWJsZVRyZWVcIiwgdGhpcylcblx0XHRcdCAgICB9LFxuXHRcdFx0ICAgICdkZXN0cm95JyAgICAgOiBjdHggPT4ge1xuXHRcdFx0XHQgICAgaWYgKCBjdHguXy51blN0YWJsZUNoaWxkcyApXG5cdFx0XHRcdFx0ICAgIHRoaXMuXy51blN0YWJsZUNoaWxkcy0tO1xuXHRcdFx0XHQgICAgaWYgKCAhY3R4LmlzU3RhYmxlKCkgKVxuXHRcdFx0XHRcdCAgICB0aGlzLl8udW5TdGFibGVDaGlsZHMtLTtcblx0XHRcdFx0XG5cdFx0XHRcdCAgICBpZiAoICF0aGlzLl8udW5TdGFibGVDaGlsZHMgKVxuXHRcdFx0XHRcdCAgICB0aGlzLmVtaXQoXCJzdGFibGVUcmVlXCIsIHRoaXMpXG5cdFx0XHQgICAgfVxuXHRcdCAgICB9LFxuXHRcdCAgICB3YXNTdGFibGUgPSB0aGlzLl8udW5TdGFibGVDaGlsZHM7XG5cdFx0XG5cdFx0IXNjb3BlLmlzU3RhYmxlKCkgJiYgdGhpcy5fLnVuU3RhYmxlQ2hpbGRzKys7XG5cdFx0c2NvcGUuXy51blN0YWJsZUNoaWxkcyAmJiB0aGlzLl8udW5TdGFibGVDaGlsZHMrKztcblx0XHR0aGlzLl8uY2hpbGRTY29wZXNMaXN0LnB1c2gobGlzdHMpO1xuXHRcdFxuXHRcdGlmICggIXdhc1N0YWJsZSAmJiB0aGlzLl8udW5TdGFibGVDaGlsZHMgKVxuXHRcdFx0dGhpcy5lbWl0KFwidW5zdGFibGVUcmVlXCIsIHRoaXMpO1xuXHRcdFxuXHRcdHNjb3BlLm9uKGxpc3RzKTtcblx0fVxuXHRcblx0X3JtQ2hpbGQoIGN0eCApIHtcblx0XHRsZXQgaSAgICAgICAgID0gdGhpcy5fLmNoaWxkU2NvcGVzLmluZGV4T2YoY3R4KSxcblx0XHQgICAgd2FzU3RhYmxlID0gdGhpcy5fLnVuU3RhYmxlQ2hpbGRzO1xuXHRcdGlmICggaSAhPSAtMSApIHtcblx0XHRcdHRoaXMuXy5jaGlsZFNjb3Blcy5zcGxpY2UoaSwgMSk7XG5cdFx0XHQhY3R4LmlzU3RhYmxlKCkgJiYgdGhpcy5fLnVuU3RhYmxlQ2hpbGRzLS07XG5cdFx0XHRjdHguXy51blN0YWJsZUNoaWxkcyAmJiB0aGlzLl8udW5TdGFibGVDaGlsZHMtLTtcblx0XHRcdGN0eC51bih0aGlzLl8uY2hpbGRTY29wZXNMaXN0LnNwbGljZShpLCAxKVswXSk7XG5cdFx0XHRpZiAoIHdhc1N0YWJsZSAmJiAhdGhpcy5fLnVuU3RhYmxlQ2hpbGRzIClcblx0XHRcdFx0dGhpcy5lbWl0KFwic3RhYmxlVHJlZVwiKVxuXHRcdH1cblx0fVxuXHRcblx0cmV0YWluKCByZWFzb24gKSB7XG5cdFx0dGhpcy5fX3JldGFpbnMuYWxsKys7XG5cdFx0Ly9jb25zb2xlLmxvZyhcInJldGFpblwiLCB0aGlzLl9pZCwgcmVhc29uKTtcblx0XHRpZiAoIHJlYXNvbiApIHtcblx0XHRcdHRoaXMuX19yZXRhaW5zW3JlYXNvbl0gPSB0aGlzLl9fcmV0YWluc1tyZWFzb25dIHx8IDA7XG5cdFx0XHR0aGlzLl9fcmV0YWluc1tyZWFzb25dKys7XG5cdFx0fVxuXHR9XG5cdFxuXHRkaXNwb3NlKCByZWFzb24gKSB7XG5cdFx0Ly9jb25zb2xlLmxvZyhcImRpc3Bvc2VcIiwgdGhpcy5faWQsIHJlYXNvbik7XG5cdFx0aWYgKCByZWFzb24gKSB7XG5cdFx0XHRpZiAoICF0aGlzLl9fcmV0YWluc1tyZWFzb25dIClcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiRGlzcG9zZSBtb3JlIHRoYW4gcmV0YWluaW5nIDogXCIgKyByZWFzb24pO1xuXHRcdFx0dGhpcy5fX3JldGFpbnNbcmVhc29uXS0tO1xuXHRcdH1cblx0XHRcblx0XHRpZiAoICF0aGlzLl9fcmV0YWlucy5hbGwgKVxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiRGlzcG9zZSBtb3JlIHRoYW4gcmV0YWluaW5nICFcIik7XG5cdFx0XG5cdFx0dGhpcy5fX3JldGFpbnMuYWxsLS07XG5cdFx0XG5cdFx0aWYgKCAhdGhpcy5fX3JldGFpbnMuYWxsICkge1xuXHRcdFx0Ly9jb25zb2xlLmxvZyhcImRpc3Bvc2UgZG8gZGVzdHJveSBcIiwgdGhpcy5faWQsIHRoaXMuX3BlcnNpc3RlbmNlVG0pO1xuXHRcdFx0aWYgKCB0aGlzLl8ucGVyc2lzdGVuY2VUbSApIHtcblx0XHRcdFx0dGhpcy5fLmRlc3Ryb3lUTSAmJiBjbGVhclRpbWVvdXQodGhpcy5fLmRlc3Ryb3lUTSk7XG5cdFx0XHRcdHRoaXMuXy5kZXN0cm95VE0gPSBzZXRUaW1lb3V0KFxuXHRcdFx0XHRcdGUgPT4ge1xuXHRcdFx0XHRcdFx0dGhpcy50aGVuKHMgPT4ge1xuXHRcdFx0XHRcdFx0XHQhdGhpcy5fX3JldGFpbnMuYWxsICYmICF0aGlzLmRlYWQgJiYgdGhpcy5kZXN0cm95KClcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0dGhpcy5fLnBlcnNpc3RlbmNlVG1cblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHR0aGlzLnRoZW4ocyA9PlxuXHRcdFx0XHRcdCAgICAgICAgICAoIXRoaXMuX19yZXRhaW5zLmFsbCAmJiAhdGhpcy5kZWFkICYmIHRoaXMuZGVzdHJveSgpKVxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRcblx0LyoqXG5cdCAqIG9yZGVyIGRlc3Ryb3kgb2YgbG9jYWwgc3RvcmVzXG5cdCAqL1xuXHRkZXN0cm95KCkge1xuXHRcdGxldCBjdHggPSB0aGlzLl8uX3Njb3BlO1xuXHRcdC8vY29uc29sZS53YXJuKFwiZGVzdHJveVwiLCB0aGlzLl9pZCk7XG5cdFx0dGhpcy5fZ2V0QWxsQ2hpbGRzKCkubWFwKHNjb3BlID0+IHNjb3BlLmRlc3Ryb3koKSlcblx0XHRmb3IgKCBsZXQga2V5IGluIGN0eCApXG5cdFx0XHRpZiAoICFpcy5mbihjdHhba2V5XSkgKSB7XG5cdFx0XHRcdGlmICgga2V5ID09IFwiJHBhcmVudFwiICkgY29udGludWU7XG5cdFx0XHRcdCFjdHhba2V5XS5fYXV0b0Rlc3Ryb3kgJiYgY3R4W2tleV0uZGlzcG9zZShcInNjb3BlZFwiKTtcblx0XHRcdH1cblx0XHR0aGlzLl8uc3RhYmlsaXplclRNICYmIGNsZWFyVGltZW91dCh0aGlzLl8uc3RhYmlsaXplclRNKTtcblx0XHR0aGlzLl8ucHJvcGFnVE0gJiYgY2xlYXJUaW1lb3V0KHRoaXMuXy5wcm9wYWdUTSk7XG5cdFx0T2JqZWN0LmtleXMoXG5cdFx0XHR0aGlzLl8uX2xpc3RlbmluZ1xuXHRcdCkuZm9yRWFjaChcblx0XHRcdGlkID0+ICgoaWQgIT09IFwiJHBhcmVudFwiKSAmJiB0aGlzLl8uX3Njb3BlW2lkXS5yZW1vdmVMaXN0ZW5lcih0aGlzLl8uX2xpc3RlbmluZ1tpZF0pKVxuXHRcdCk7XG5cdFx0d2hpbGUgKCB0aGlzLl8uX21peGVkTGlzdC5sZW5ndGggKSB7XG5cdFx0XHR0aGlzLl8uX21peGVkWzBdLnJlbW92ZUxpc3RlbmVyKHRoaXMuXy5fbWl4ZWRMaXN0LnNoaWZ0KCkpO1xuXHRcdFx0dGhpcy5fLl9taXhlZC5zaGlmdCgpLmRpc3Bvc2UoXCJtaXhlZFRvXCIpO1xuXHRcdH1cblx0XHRbLi4udGhpcy5fLmZvbGxvd2Vyc10ubWFwKGZvbGxvd2VyID0+IHRoaXMudW5CaW5kKC4uLmZvbGxvd2VyKSk7XG5cdFx0aWYgKCB0aGlzLl8uX3BhcmVudExpc3QgKSB7XG5cdFx0XHR0aGlzLnBhcmVudC5fcm1DaGlsZCh0aGlzKTtcblx0XHRcdHRoaXMucGFyZW50LnJlbW92ZUxpc3RlbmVyKHRoaXMuXy5fcGFyZW50TGlzdCk7XG5cdFx0XHR0aGlzLnBhcmVudC5kaXNwb3NlKFwiaXNNeVBhcmVudFwiKTtcblx0XHRcdHRoaXMuXy5fcGFyZW50TGlzdCA9IG51bGw7XG5cdFx0fVxuXHRcdHRoaXMuZGVhZCA9IHRydWU7XG5cdFx0ZGVsZXRlIGFsbFNjb3Blc1t0aGlzLl9pZF07XG5cdFx0dGhpcy5lbWl0KFwiZGVzdHJveVwiLCB0aGlzKTtcblx0XHRcblx0XHRcblx0fVxufVxuXG5cblNjb3BlLmlzU2NvcGUgPSBmdW5jdGlvbiAoIG9iaiApIHtcblx0cmV0dXJuIG9iaiBpbnN0YW5jZW9mIFNjb3BlXG59O1xuXG5TY29wZS5pc1Njb3BlQ2xhc3MgPSBmdW5jdGlvbiAoIG9iaiApIHtcblx0cmV0dXJuIFNjb3BlLmlzUHJvdG90eXBlT2Yob2JqKSB8fCBvYmogPT09IFNjb3BlXG59O1xuZXhwb3J0IGRlZmF1bHQgU2NvcGU7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1Njb3BlLmpzIiwiLyogZ2xvYmFscyB3aW5kb3csIEhUTUxFbGVtZW50ICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqIVxuICogaXNcbiAqIHRoZSBkZWZpbml0aXZlIEphdmFTY3JpcHQgdHlwZSB0ZXN0aW5nIGxpYnJhcnlcbiAqXG4gKiBAY29weXJpZ2h0IDIwMTMtMjAxNCBFbnJpY28gTWFyaW5vIC8gSm9yZGFuIEhhcmJhbmRcbiAqIEBsaWNlbnNlIE1JVFxuICovXG5cbnZhciBvYmpQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG52YXIgb3ducyA9IG9ialByb3RvLmhhc093blByb3BlcnR5O1xudmFyIHRvU3RyID0gb2JqUHJvdG8udG9TdHJpbmc7XG52YXIgc3ltYm9sVmFsdWVPZjtcbmlmICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nKSB7XG4gIHN5bWJvbFZhbHVlT2YgPSBTeW1ib2wucHJvdG90eXBlLnZhbHVlT2Y7XG59XG52YXIgaXNBY3R1YWxOYU4gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9PSB2YWx1ZTtcbn07XG52YXIgTk9OX0hPU1RfVFlQRVMgPSB7XG4gICdib29sZWFuJzogMSxcbiAgbnVtYmVyOiAxLFxuICBzdHJpbmc6IDEsXG4gIHVuZGVmaW5lZDogMVxufTtcblxudmFyIGJhc2U2NFJlZ2V4ID0gL14oW0EtWmEtejAtOSsvXXs0fSkqKFtBLVphLXowLTkrL117NH18W0EtWmEtejAtOSsvXXszfT18W0EtWmEtejAtOSsvXXsyfT09KSQvO1xudmFyIGhleFJlZ2V4ID0gL15bQS1GYS1mMC05XSskLztcblxuLyoqXG4gKiBFeHBvc2UgYGlzYFxuICovXG5cbnZhciBpcyA9IHt9O1xuXG4vKipcbiAqIFRlc3QgZ2VuZXJhbC5cbiAqL1xuXG4vKipcbiAqIGlzLnR5cGVcbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBhIHR5cGUgb2YgYHR5cGVgLlxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIHR5cGVcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgYHZhbHVlYCBpcyBhIHR5cGUgb2YgYHR5cGVgLCBmYWxzZSBvdGhlcndpc2VcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuaXMuYSA9IGlzLnR5cGUgPSBmdW5jdGlvbiAodmFsdWUsIHR5cGUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gdHlwZTtcbn07XG5cbi8qKlxuICogaXMuZGVmaW5lZFxuICogVGVzdCBpZiBgdmFsdWVgIGlzIGRlZmluZWQuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiAndmFsdWUnIGlzIGRlZmluZWQsIGZhbHNlIG90aGVyd2lzZVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5pcy5kZWZpbmVkID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgIT09ICd1bmRlZmluZWQnO1xufTtcblxuLyoqXG4gKiBpcy5lbXB0eVxuICogVGVzdCBpZiBgdmFsdWVgIGlzIGVtcHR5LlxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgYHZhbHVlYCBpcyBlbXB0eSwgZmFsc2Ugb3RoZXJ3aXNlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmlzLmVtcHR5ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHZhciB0eXBlID0gdG9TdHIuY2FsbCh2YWx1ZSk7XG4gIHZhciBrZXk7XG5cbiAgaWYgKHR5cGUgPT09ICdbb2JqZWN0IEFycmF5XScgfHwgdHlwZSA9PT0gJ1tvYmplY3QgQXJndW1lbnRzXScgfHwgdHlwZSA9PT0gJ1tvYmplY3QgU3RyaW5nXScpIHtcbiAgICByZXR1cm4gdmFsdWUubGVuZ3RoID09PSAwO1xuICB9XG5cbiAgaWYgKHR5cGUgPT09ICdbb2JqZWN0IE9iamVjdF0nKSB7XG4gICAgZm9yIChrZXkgaW4gdmFsdWUpIHtcbiAgICAgIGlmIChvd25zLmNhbGwodmFsdWUsIGtleSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiAhdmFsdWU7XG59O1xuXG4vKipcbiAqIGlzLmVxdWFsXG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgZXF1YWwgdG8gYG90aGVyYC5cbiAqXG4gKiBAcGFyYW0ge01peGVkfSB2YWx1ZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcGFyYW0ge01peGVkfSBvdGhlciB2YWx1ZSB0byBjb21wYXJlIHdpdGhcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgYHZhbHVlYCBpcyBlcXVhbCB0byBgb3RoZXJgLCBmYWxzZSBvdGhlcndpc2VcbiAqL1xuXG5pcy5lcXVhbCA9IGZ1bmN0aW9uIGVxdWFsKHZhbHVlLCBvdGhlcikge1xuICBpZiAodmFsdWUgPT09IG90aGVyKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICB2YXIgdHlwZSA9IHRvU3RyLmNhbGwodmFsdWUpO1xuICB2YXIga2V5O1xuXG4gIGlmICh0eXBlICE9PSB0b1N0ci5jYWxsKG90aGVyKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmICh0eXBlID09PSAnW29iamVjdCBPYmplY3RdJykge1xuICAgIGZvciAoa2V5IGluIHZhbHVlKSB7XG4gICAgICBpZiAoIWlzLmVxdWFsKHZhbHVlW2tleV0sIG90aGVyW2tleV0pIHx8ICEoa2V5IGluIG90aGVyKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAoa2V5IGluIG90aGVyKSB7XG4gICAgICBpZiAoIWlzLmVxdWFsKHZhbHVlW2tleV0sIG90aGVyW2tleV0pIHx8ICEoa2V5IGluIHZhbHVlKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKHR5cGUgPT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICBrZXkgPSB2YWx1ZS5sZW5ndGg7XG4gICAgaWYgKGtleSAhPT0gb3RoZXIubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHdoaWxlIChrZXktLSkge1xuICAgICAgaWYgKCFpcy5lcXVhbCh2YWx1ZVtrZXldLCBvdGhlcltrZXldKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKHR5cGUgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXScpIHtcbiAgICByZXR1cm4gdmFsdWUucHJvdG90eXBlID09PSBvdGhlci5wcm90b3R5cGU7XG4gIH1cblxuICBpZiAodHlwZSA9PT0gJ1tvYmplY3QgRGF0ZV0nKSB7XG4gICAgcmV0dXJuIHZhbHVlLmdldFRpbWUoKSA9PT0gb3RoZXIuZ2V0VGltZSgpO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuLyoqXG4gKiBpcy5ob3N0ZWRcbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBob3N0ZWQgYnkgYGhvc3RgLlxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlIHRvIHRlc3RcbiAqIEBwYXJhbSB7TWl4ZWR9IGhvc3QgaG9zdCB0byB0ZXN0IHdpdGhcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgYHZhbHVlYCBpcyBob3N0ZWQgYnkgYGhvc3RgLCBmYWxzZSBvdGhlcndpc2VcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuaXMuaG9zdGVkID0gZnVuY3Rpb24gKHZhbHVlLCBob3N0KSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIGhvc3RbdmFsdWVdO1xuICByZXR1cm4gdHlwZSA9PT0gJ29iamVjdCcgPyAhIWhvc3RbdmFsdWVdIDogIU5PTl9IT1NUX1RZUEVTW3R5cGVdO1xufTtcblxuLyoqXG4gKiBpcy5pbnN0YW5jZVxuICogVGVzdCBpZiBgdmFsdWVgIGlzIGFuIGluc3RhbmNlIG9mIGBjb25zdHJ1Y3RvcmAuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBgdmFsdWVgIGlzIGFuIGluc3RhbmNlIG9mIGBjb25zdHJ1Y3RvcmBcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuaXMuaW5zdGFuY2UgPSBpc1snaW5zdGFuY2VvZiddID0gZnVuY3Rpb24gKHZhbHVlLCBjb25zdHJ1Y3Rvcikge1xuICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBjb25zdHJ1Y3Rvcjtcbn07XG5cbi8qKlxuICogaXMubmlsIC8gaXMubnVsbFxuICogVGVzdCBpZiBgdmFsdWVgIGlzIG51bGwuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBgdmFsdWVgIGlzIG51bGwsIGZhbHNlIG90aGVyd2lzZVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5pcy5uaWwgPSBpc1snbnVsbCddID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA9PT0gbnVsbDtcbn07XG5cbi8qKlxuICogaXMudW5kZWYgLyBpcy51bmRlZmluZWRcbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyB1bmRlZmluZWQuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBgdmFsdWVgIGlzIHVuZGVmaW5lZCwgZmFsc2Ugb3RoZXJ3aXNlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmlzLnVuZGVmID0gaXMudW5kZWZpbmVkID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnO1xufTtcblxuLyoqXG4gKiBUZXN0IGFyZ3VtZW50cy5cbiAqL1xuXG4vKipcbiAqIGlzLmFyZ3NcbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBhbiBhcmd1bWVudHMgb2JqZWN0LlxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgYHZhbHVlYCBpcyBhbiBhcmd1bWVudHMgb2JqZWN0LCBmYWxzZSBvdGhlcndpc2VcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuaXMuYXJncyA9IGlzLmFyZ3VtZW50cyA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICB2YXIgaXNTdGFuZGFyZEFyZ3VtZW50cyA9IHRvU3RyLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBBcmd1bWVudHNdJztcbiAgdmFyIGlzT2xkQXJndW1lbnRzID0gIWlzLmFycmF5KHZhbHVlKSAmJiBpcy5hcnJheWxpa2UodmFsdWUpICYmIGlzLm9iamVjdCh2YWx1ZSkgJiYgaXMuZm4odmFsdWUuY2FsbGVlKTtcbiAgcmV0dXJuIGlzU3RhbmRhcmRBcmd1bWVudHMgfHwgaXNPbGRBcmd1bWVudHM7XG59O1xuXG4vKipcbiAqIFRlc3QgYXJyYXkuXG4gKi9cblxuLyoqXG4gKiBpcy5hcnJheVxuICogVGVzdCBpZiAndmFsdWUnIGlzIGFuIGFycmF5LlxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgYHZhbHVlYCBpcyBhbiBhcnJheSwgZmFsc2Ugb3RoZXJ3aXNlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmlzLmFycmF5ID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIHRvU3RyLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBBcnJheV0nO1xufTtcblxuLyoqXG4gKiBpcy5hcmd1bWVudHMuZW1wdHlcbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBhbiBlbXB0eSBhcmd1bWVudHMgb2JqZWN0LlxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgYHZhbHVlYCBpcyBhbiBlbXB0eSBhcmd1bWVudHMgb2JqZWN0LCBmYWxzZSBvdGhlcndpc2VcbiAqIEBhcGkgcHVibGljXG4gKi9cbmlzLmFyZ3MuZW1wdHkgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIGlzLmFyZ3ModmFsdWUpICYmIHZhbHVlLmxlbmd0aCA9PT0gMDtcbn07XG5cbi8qKlxuICogaXMuYXJyYXkuZW1wdHlcbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBhbiBlbXB0eSBhcnJheS5cbiAqXG4gKiBAcGFyYW0ge01peGVkfSB2YWx1ZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGB2YWx1ZWAgaXMgYW4gZW1wdHkgYXJyYXksIGZhbHNlIG90aGVyd2lzZVxuICogQGFwaSBwdWJsaWNcbiAqL1xuaXMuYXJyYXkuZW1wdHkgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIGlzLmFycmF5KHZhbHVlKSAmJiB2YWx1ZS5sZW5ndGggPT09IDA7XG59O1xuXG4vKipcbiAqIGlzLmFycmF5bGlrZVxuICogVGVzdCBpZiBgdmFsdWVgIGlzIGFuIGFycmF5bGlrZSBvYmplY3QuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBgdmFsdWVgIGlzIGFuIGFyZ3VtZW50cyBvYmplY3QsIGZhbHNlIG90aGVyd2lzZVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5pcy5hcnJheWxpa2UgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuICEhdmFsdWUgJiYgIWlzLmJvb2wodmFsdWUpXG4gICAgJiYgb3ducy5jYWxsKHZhbHVlLCAnbGVuZ3RoJylcbiAgICAmJiBpc0Zpbml0ZSh2YWx1ZS5sZW5ndGgpXG4gICAgJiYgaXMubnVtYmVyKHZhbHVlLmxlbmd0aClcbiAgICAmJiB2YWx1ZS5sZW5ndGggPj0gMDtcbn07XG5cbi8qKlxuICogVGVzdCBib29sZWFuLlxuICovXG5cbi8qKlxuICogaXMuYm9vbFxuICogVGVzdCBpZiBgdmFsdWVgIGlzIGEgYm9vbGVhbi5cbiAqXG4gKiBAcGFyYW0ge01peGVkfSB2YWx1ZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGB2YWx1ZWAgaXMgYSBib29sZWFuLCBmYWxzZSBvdGhlcndpc2VcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuaXMuYm9vbCA9IGlzWydib29sZWFuJ10gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIHRvU3RyLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBCb29sZWFuXSc7XG59O1xuXG4vKipcbiAqIGlzLmZhbHNlXG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgZmFsc2UuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBgdmFsdWVgIGlzIGZhbHNlLCBmYWxzZSBvdGhlcndpc2VcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuaXNbJ2ZhbHNlJ10gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIGlzLmJvb2wodmFsdWUpICYmIEJvb2xlYW4oTnVtYmVyKHZhbHVlKSkgPT09IGZhbHNlO1xufTtcblxuLyoqXG4gKiBpcy50cnVlXG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgdHJ1ZS5cbiAqXG4gKiBAcGFyYW0ge01peGVkfSB2YWx1ZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGB2YWx1ZWAgaXMgdHJ1ZSwgZmFsc2Ugb3RoZXJ3aXNlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmlzWyd0cnVlJ10gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIGlzLmJvb2wodmFsdWUpICYmIEJvb2xlYW4oTnVtYmVyKHZhbHVlKSkgPT09IHRydWU7XG59O1xuXG4vKipcbiAqIFRlc3QgZGF0ZS5cbiAqL1xuXG4vKipcbiAqIGlzLmRhdGVcbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBhIGRhdGUuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBgdmFsdWVgIGlzIGEgZGF0ZSwgZmFsc2Ugb3RoZXJ3aXNlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmlzLmRhdGUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIHRvU3RyLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBEYXRlXSc7XG59O1xuXG4vKipcbiAqIGlzLmRhdGUudmFsaWRcbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGRhdGUuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge0Jvb2xlYW59IHRydWUgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGRhdGUsIGZhbHNlIG90aGVyd2lzZVxuICovXG5pcy5kYXRlLnZhbGlkID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiBpcy5kYXRlKHZhbHVlKSAmJiAhaXNOYU4oTnVtYmVyKHZhbHVlKSk7XG59O1xuXG4vKipcbiAqIFRlc3QgZWxlbWVudC5cbiAqL1xuXG4vKipcbiAqIGlzLmVsZW1lbnRcbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBhbiBodG1sIGVsZW1lbnQuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBgdmFsdWVgIGlzIGFuIEhUTUwgRWxlbWVudCwgZmFsc2Ugb3RoZXJ3aXNlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmlzLmVsZW1lbnQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9PSB1bmRlZmluZWRcbiAgICAmJiB0eXBlb2YgSFRNTEVsZW1lbnQgIT09ICd1bmRlZmluZWQnXG4gICAgJiYgdmFsdWUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudFxuICAgICYmIHZhbHVlLm5vZGVUeXBlID09PSAxO1xufTtcblxuLyoqXG4gKiBUZXN0IGVycm9yLlxuICovXG5cbi8qKlxuICogaXMuZXJyb3JcbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBhbiBlcnJvciBvYmplY3QuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBgdmFsdWVgIGlzIGFuIGVycm9yIG9iamVjdCwgZmFsc2Ugb3RoZXJ3aXNlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmlzLmVycm9yID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiB0b1N0ci5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgRXJyb3JdJztcbn07XG5cbi8qKlxuICogVGVzdCBmdW5jdGlvbi5cbiAqL1xuXG4vKipcbiAqIGlzLmZuIC8gaXMuZnVuY3Rpb24gKGRlcHJlY2F0ZWQpXG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgYSBmdW5jdGlvbi5cbiAqXG4gKiBAcGFyYW0ge01peGVkfSB2YWx1ZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGB2YWx1ZWAgaXMgYSBmdW5jdGlvbiwgZmFsc2Ugb3RoZXJ3aXNlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmlzLmZuID0gaXNbJ2Z1bmN0aW9uJ10gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgdmFyIGlzQWxlcnQgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB2YWx1ZSA9PT0gd2luZG93LmFsZXJ0O1xuICBpZiAoaXNBbGVydCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHZhciBzdHIgPSB0b1N0ci5jYWxsKHZhbHVlKTtcbiAgcmV0dXJuIHN0ciA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJyB8fCBzdHIgPT09ICdbb2JqZWN0IEdlbmVyYXRvckZ1bmN0aW9uXScgfHwgc3RyID09PSAnW29iamVjdCBBc3luY0Z1bmN0aW9uXSc7XG59O1xuXG4vKipcbiAqIFRlc3QgbnVtYmVyLlxuICovXG5cbi8qKlxuICogaXMubnVtYmVyXG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgYSBudW1iZXIuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBgdmFsdWVgIGlzIGEgbnVtYmVyLCBmYWxzZSBvdGhlcndpc2VcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuaXMubnVtYmVyID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiB0b1N0ci5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgTnVtYmVyXSc7XG59O1xuXG4vKipcbiAqIGlzLmluZmluaXRlXG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgcG9zaXRpdmUgb3IgbmVnYXRpdmUgaW5maW5pdHkuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBgdmFsdWVgIGlzIHBvc2l0aXZlIG9yIG5lZ2F0aXZlIEluZmluaXR5LCBmYWxzZSBvdGhlcndpc2VcbiAqIEBhcGkgcHVibGljXG4gKi9cbmlzLmluZmluaXRlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA9PT0gSW5maW5pdHkgfHwgdmFsdWUgPT09IC1JbmZpbml0eTtcbn07XG5cbi8qKlxuICogaXMuZGVjaW1hbFxuICogVGVzdCBpZiBgdmFsdWVgIGlzIGEgZGVjaW1hbCBudW1iZXIuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBgdmFsdWVgIGlzIGEgZGVjaW1hbCBudW1iZXIsIGZhbHNlIG90aGVyd2lzZVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5pcy5kZWNpbWFsID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiBpcy5udW1iZXIodmFsdWUpICYmICFpc0FjdHVhbE5hTih2YWx1ZSkgJiYgIWlzLmluZmluaXRlKHZhbHVlKSAmJiB2YWx1ZSAlIDEgIT09IDA7XG59O1xuXG4vKipcbiAqIGlzLmRpdmlzaWJsZUJ5XG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgZGl2aXNpYmxlIGJ5IGBuYC5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHBhcmFtIHtOdW1iZXJ9IG4gZGl2aWRlbmRcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgYHZhbHVlYCBpcyBkaXZpc2libGUgYnkgYG5gLCBmYWxzZSBvdGhlcndpc2VcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuaXMuZGl2aXNpYmxlQnkgPSBmdW5jdGlvbiAodmFsdWUsIG4pIHtcbiAgdmFyIGlzRGl2aWRlbmRJbmZpbml0ZSA9IGlzLmluZmluaXRlKHZhbHVlKTtcbiAgdmFyIGlzRGl2aXNvckluZmluaXRlID0gaXMuaW5maW5pdGUobik7XG4gIHZhciBpc05vblplcm9OdW1iZXIgPSBpcy5udW1iZXIodmFsdWUpICYmICFpc0FjdHVhbE5hTih2YWx1ZSkgJiYgaXMubnVtYmVyKG4pICYmICFpc0FjdHVhbE5hTihuKSAmJiBuICE9PSAwO1xuICByZXR1cm4gaXNEaXZpZGVuZEluZmluaXRlIHx8IGlzRGl2aXNvckluZmluaXRlIHx8IChpc05vblplcm9OdW1iZXIgJiYgdmFsdWUgJSBuID09PSAwKTtcbn07XG5cbi8qKlxuICogaXMuaW50ZWdlclxuICogVGVzdCBpZiBgdmFsdWVgIGlzIGFuIGludGVnZXIuXG4gKlxuICogQHBhcmFtIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgYHZhbHVlYCBpcyBhbiBpbnRlZ2VyLCBmYWxzZSBvdGhlcndpc2VcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuaXMuaW50ZWdlciA9IGlzWydpbnQnXSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICByZXR1cm4gaXMubnVtYmVyKHZhbHVlKSAmJiAhaXNBY3R1YWxOYU4odmFsdWUpICYmIHZhbHVlICUgMSA9PT0gMDtcbn07XG5cbi8qKlxuICogaXMubWF4aW11bVxuICogVGVzdCBpZiBgdmFsdWVgIGlzIGdyZWF0ZXIgdGhhbiAnb3RoZXJzJyB2YWx1ZXMuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEBwYXJhbSB7QXJyYXl9IG90aGVycyB2YWx1ZXMgdG8gY29tcGFyZSB3aXRoXG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGB2YWx1ZWAgaXMgZ3JlYXRlciB0aGFuIGBvdGhlcnNgIHZhbHVlc1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5pcy5tYXhpbXVtID0gZnVuY3Rpb24gKHZhbHVlLCBvdGhlcnMpIHtcbiAgaWYgKGlzQWN0dWFsTmFOKHZhbHVlKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ05hTiBpcyBub3QgYSB2YWxpZCB2YWx1ZScpO1xuICB9IGVsc2UgaWYgKCFpcy5hcnJheWxpa2Uob3RoZXJzKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ3NlY29uZCBhcmd1bWVudCBtdXN0IGJlIGFycmF5LWxpa2UnKTtcbiAgfVxuICB2YXIgbGVuID0gb3RoZXJzLmxlbmd0aDtcblxuICB3aGlsZSAoLS1sZW4gPj0gMCkge1xuICAgIGlmICh2YWx1ZSA8IG90aGVyc1tsZW5dKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuXG4vKipcbiAqIGlzLm1pbmltdW1cbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBsZXNzIHRoYW4gYG90aGVyc2AgdmFsdWVzLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSB2YWx1ZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcGFyYW0ge0FycmF5fSBvdGhlcnMgdmFsdWVzIHRvIGNvbXBhcmUgd2l0aFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBgdmFsdWVgIGlzIGxlc3MgdGhhbiBgb3RoZXJzYCB2YWx1ZXNcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuaXMubWluaW11bSA9IGZ1bmN0aW9uICh2YWx1ZSwgb3RoZXJzKSB7XG4gIGlmIChpc0FjdHVhbE5hTih2YWx1ZSkpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdOYU4gaXMgbm90IGEgdmFsaWQgdmFsdWUnKTtcbiAgfSBlbHNlIGlmICghaXMuYXJyYXlsaWtlKG90aGVycykpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdzZWNvbmQgYXJndW1lbnQgbXVzdCBiZSBhcnJheS1saWtlJyk7XG4gIH1cbiAgdmFyIGxlbiA9IG90aGVycy5sZW5ndGg7XG5cbiAgd2hpbGUgKC0tbGVuID49IDApIHtcbiAgICBpZiAodmFsdWUgPiBvdGhlcnNbbGVuXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcblxuLyoqXG4gKiBpcy5uYW5cbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBub3QgYSBudW1iZXIuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBgdmFsdWVgIGlzIG5vdCBhIG51bWJlciwgZmFsc2Ugb3RoZXJ3aXNlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmlzLm5hbiA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICByZXR1cm4gIWlzLm51bWJlcih2YWx1ZSkgfHwgdmFsdWUgIT09IHZhbHVlO1xufTtcblxuLyoqXG4gKiBpcy5ldmVuXG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgYW4gZXZlbiBudW1iZXIuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgYHZhbHVlYCBpcyBhbiBldmVuIG51bWJlciwgZmFsc2Ugb3RoZXJ3aXNlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmlzLmV2ZW4gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIGlzLmluZmluaXRlKHZhbHVlKSB8fCAoaXMubnVtYmVyKHZhbHVlKSAmJiB2YWx1ZSA9PT0gdmFsdWUgJiYgdmFsdWUgJSAyID09PSAwKTtcbn07XG5cbi8qKlxuICogaXMub2RkXG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgYW4gb2RkIG51bWJlci5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBgdmFsdWVgIGlzIGFuIG9kZCBudW1iZXIsIGZhbHNlIG90aGVyd2lzZVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5pcy5vZGQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIGlzLmluZmluaXRlKHZhbHVlKSB8fCAoaXMubnVtYmVyKHZhbHVlKSAmJiB2YWx1ZSA9PT0gdmFsdWUgJiYgdmFsdWUgJSAyICE9PSAwKTtcbn07XG5cbi8qKlxuICogaXMuZ2VcbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBncmVhdGVyIHRoYW4gb3IgZXF1YWwgdG8gYG90aGVyYC5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHBhcmFtIHtOdW1iZXJ9IG90aGVyIHZhbHVlIHRvIGNvbXBhcmUgd2l0aFxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuaXMuZ2UgPSBmdW5jdGlvbiAodmFsdWUsIG90aGVyKSB7XG4gIGlmIChpc0FjdHVhbE5hTih2YWx1ZSkgfHwgaXNBY3R1YWxOYU4ob3RoZXIpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignTmFOIGlzIG5vdCBhIHZhbGlkIHZhbHVlJyk7XG4gIH1cbiAgcmV0dXJuICFpcy5pbmZpbml0ZSh2YWx1ZSkgJiYgIWlzLmluZmluaXRlKG90aGVyKSAmJiB2YWx1ZSA+PSBvdGhlcjtcbn07XG5cbi8qKlxuICogaXMuZ3RcbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBncmVhdGVyIHRoYW4gYG90aGVyYC5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHBhcmFtIHtOdW1iZXJ9IG90aGVyIHZhbHVlIHRvIGNvbXBhcmUgd2l0aFxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuaXMuZ3QgPSBmdW5jdGlvbiAodmFsdWUsIG90aGVyKSB7XG4gIGlmIChpc0FjdHVhbE5hTih2YWx1ZSkgfHwgaXNBY3R1YWxOYU4ob3RoZXIpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignTmFOIGlzIG5vdCBhIHZhbGlkIHZhbHVlJyk7XG4gIH1cbiAgcmV0dXJuICFpcy5pbmZpbml0ZSh2YWx1ZSkgJiYgIWlzLmluZmluaXRlKG90aGVyKSAmJiB2YWx1ZSA+IG90aGVyO1xufTtcblxuLyoqXG4gKiBpcy5sZVxuICogVGVzdCBpZiBgdmFsdWVgIGlzIGxlc3MgdGhhbiBvciBlcXVhbCB0byBgb3RoZXJgLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSB2YWx1ZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcGFyYW0ge051bWJlcn0gb3RoZXIgdmFsdWUgdG8gY29tcGFyZSB3aXRoXG4gKiBAcmV0dXJuIHtCb29sZWFufSBpZiAndmFsdWUnIGlzIGxlc3MgdGhhbiBvciBlcXVhbCB0byAnb3RoZXInXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmlzLmxlID0gZnVuY3Rpb24gKHZhbHVlLCBvdGhlcikge1xuICBpZiAoaXNBY3R1YWxOYU4odmFsdWUpIHx8IGlzQWN0dWFsTmFOKG90aGVyKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ05hTiBpcyBub3QgYSB2YWxpZCB2YWx1ZScpO1xuICB9XG4gIHJldHVybiAhaXMuaW5maW5pdGUodmFsdWUpICYmICFpcy5pbmZpbml0ZShvdGhlcikgJiYgdmFsdWUgPD0gb3RoZXI7XG59O1xuXG4vKipcbiAqIGlzLmx0XG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgbGVzcyB0aGFuIGBvdGhlcmAuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEBwYXJhbSB7TnVtYmVyfSBvdGhlciB2YWx1ZSB0byBjb21wYXJlIHdpdGhcbiAqIEByZXR1cm4ge0Jvb2xlYW59IGlmIGB2YWx1ZWAgaXMgbGVzcyB0aGFuIGBvdGhlcmBcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuaXMubHQgPSBmdW5jdGlvbiAodmFsdWUsIG90aGVyKSB7XG4gIGlmIChpc0FjdHVhbE5hTih2YWx1ZSkgfHwgaXNBY3R1YWxOYU4ob3RoZXIpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignTmFOIGlzIG5vdCBhIHZhbGlkIHZhbHVlJyk7XG4gIH1cbiAgcmV0dXJuICFpcy5pbmZpbml0ZSh2YWx1ZSkgJiYgIWlzLmluZmluaXRlKG90aGVyKSAmJiB2YWx1ZSA8IG90aGVyO1xufTtcblxuLyoqXG4gKiBpcy53aXRoaW5cbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyB3aXRoaW4gYHN0YXJ0YCBhbmQgYGZpbmlzaGAuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEBwYXJhbSB7TnVtYmVyfSBzdGFydCBsb3dlciBib3VuZFxuICogQHBhcmFtIHtOdW1iZXJ9IGZpbmlzaCB1cHBlciBib3VuZFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiAndmFsdWUnIGlzIGlzIHdpdGhpbiAnc3RhcnQnIGFuZCAnZmluaXNoJ1xuICogQGFwaSBwdWJsaWNcbiAqL1xuaXMud2l0aGluID0gZnVuY3Rpb24gKHZhbHVlLCBzdGFydCwgZmluaXNoKSB7XG4gIGlmIChpc0FjdHVhbE5hTih2YWx1ZSkgfHwgaXNBY3R1YWxOYU4oc3RhcnQpIHx8IGlzQWN0dWFsTmFOKGZpbmlzaCkpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdOYU4gaXMgbm90IGEgdmFsaWQgdmFsdWUnKTtcbiAgfSBlbHNlIGlmICghaXMubnVtYmVyKHZhbHVlKSB8fCAhaXMubnVtYmVyKHN0YXJ0KSB8fCAhaXMubnVtYmVyKGZpbmlzaCkpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdhbGwgYXJndW1lbnRzIG11c3QgYmUgbnVtYmVycycpO1xuICB9XG4gIHZhciBpc0FueUluZmluaXRlID0gaXMuaW5maW5pdGUodmFsdWUpIHx8IGlzLmluZmluaXRlKHN0YXJ0KSB8fCBpcy5pbmZpbml0ZShmaW5pc2gpO1xuICByZXR1cm4gaXNBbnlJbmZpbml0ZSB8fCAodmFsdWUgPj0gc3RhcnQgJiYgdmFsdWUgPD0gZmluaXNoKTtcbn07XG5cbi8qKlxuICogVGVzdCBvYmplY3QuXG4gKi9cblxuLyoqXG4gKiBpcy5vYmplY3RcbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBhbiBvYmplY3QuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBgdmFsdWVgIGlzIGFuIG9iamVjdCwgZmFsc2Ugb3RoZXJ3aXNlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5pcy5vYmplY3QgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIHRvU3RyLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBPYmplY3RdJztcbn07XG5cbi8qKlxuICogaXMucHJpbWl0aXZlXG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgYSBwcmltaXRpdmUuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBgdmFsdWVgIGlzIGEgcHJpbWl0aXZlLCBmYWxzZSBvdGhlcndpc2VcbiAqIEBhcGkgcHVibGljXG4gKi9cbmlzLnByaW1pdGl2ZSA9IGZ1bmN0aW9uIGlzUHJpbWl0aXZlKHZhbHVlKSB7XG4gIGlmICghdmFsdWUpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyB8fCBpcy5vYmplY3QodmFsdWUpIHx8IGlzLmZuKHZhbHVlKSB8fCBpcy5hcnJheSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59O1xuXG4vKipcbiAqIGlzLmhhc2hcbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBhIGhhc2ggLSBhIHBsYWluIG9iamVjdCBsaXRlcmFsLlxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgYHZhbHVlYCBpcyBhIGhhc2gsIGZhbHNlIG90aGVyd2lzZVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5pcy5oYXNoID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiBpcy5vYmplY3QodmFsdWUpICYmIHZhbHVlLmNvbnN0cnVjdG9yID09PSBPYmplY3QgJiYgIXZhbHVlLm5vZGVUeXBlICYmICF2YWx1ZS5zZXRJbnRlcnZhbDtcbn07XG5cbi8qKlxuICogVGVzdCByZWdleHAuXG4gKi9cblxuLyoqXG4gKiBpcy5yZWdleHBcbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBhIHJlZ3VsYXIgZXhwcmVzc2lvbi5cbiAqXG4gKiBAcGFyYW0ge01peGVkfSB2YWx1ZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGB2YWx1ZWAgaXMgYSByZWdleHAsIGZhbHNlIG90aGVyd2lzZVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5pcy5yZWdleHAgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIHRvU3RyLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBSZWdFeHBdJztcbn07XG5cbi8qKlxuICogVGVzdCBzdHJpbmcuXG4gKi9cblxuLyoqXG4gKiBpcy5zdHJpbmdcbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBhIHN0cmluZy5cbiAqXG4gKiBAcGFyYW0ge01peGVkfSB2YWx1ZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmICd2YWx1ZScgaXMgYSBzdHJpbmcsIGZhbHNlIG90aGVyd2lzZVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5pcy5zdHJpbmcgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIHRvU3RyLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBTdHJpbmddJztcbn07XG5cbi8qKlxuICogVGVzdCBiYXNlNjQgc3RyaW5nLlxuICovXG5cbi8qKlxuICogaXMuYmFzZTY0XG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBiYXNlNjQgZW5jb2RlZCBzdHJpbmcuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiAndmFsdWUnIGlzIGEgYmFzZTY0IGVuY29kZWQgc3RyaW5nLCBmYWxzZSBvdGhlcndpc2VcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuaXMuYmFzZTY0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiBpcy5zdHJpbmcodmFsdWUpICYmICghdmFsdWUubGVuZ3RoIHx8IGJhc2U2NFJlZ2V4LnRlc3QodmFsdWUpKTtcbn07XG5cbi8qKlxuICogVGVzdCBiYXNlNjQgc3RyaW5nLlxuICovXG5cbi8qKlxuICogaXMuaGV4XG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBoZXggZW5jb2RlZCBzdHJpbmcuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiAndmFsdWUnIGlzIGEgaGV4IGVuY29kZWQgc3RyaW5nLCBmYWxzZSBvdGhlcndpc2VcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuaXMuaGV4ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiBpcy5zdHJpbmcodmFsdWUpICYmICghdmFsdWUubGVuZ3RoIHx8IGhleFJlZ2V4LnRlc3QodmFsdWUpKTtcbn07XG5cbi8qKlxuICogaXMuc3ltYm9sXG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgYW4gRVM2IFN5bWJvbFxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgYHZhbHVlYCBpcyBhIFN5bWJvbCwgZmFsc2Ugb3RoZXJpc2VcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuaXMuc3ltYm9sID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIHRvU3RyLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBTeW1ib2xdJyAmJiB0eXBlb2Ygc3ltYm9sVmFsdWVPZi5jYWxsKHZhbHVlKSA9PT0gJ3N5bWJvbCc7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2lzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0Jztcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9saWIvaW5kZXgnKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zaG9ydGlkL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxudmFyIGFscGhhYmV0ID0gcmVxdWlyZSgnLi9hbHBoYWJldCcpO1xudmFyIGVuY29kZSA9IHJlcXVpcmUoJy4vZW5jb2RlJyk7XG52YXIgZGVjb2RlID0gcmVxdWlyZSgnLi9kZWNvZGUnKTtcbnZhciBidWlsZCA9IHJlcXVpcmUoJy4vYnVpbGQnKTtcbnZhciBpc1ZhbGlkID0gcmVxdWlyZSgnLi9pcy12YWxpZCcpO1xuXG4vLyBpZiB5b3UgYXJlIHVzaW5nIGNsdXN0ZXIgb3IgbXVsdGlwbGUgc2VydmVycyB1c2UgdGhpcyB0byBtYWtlIGVhY2ggaW5zdGFuY2Vcbi8vIGhhcyBhIHVuaXF1ZSB2YWx1ZSBmb3Igd29ya2VyXG4vLyBOb3RlOiBJIGRvbid0IGtub3cgaWYgdGhpcyBpcyBhdXRvbWF0aWNhbGx5IHNldCB3aGVuIHVzaW5nIHRoaXJkXG4vLyBwYXJ0eSBjbHVzdGVyIHNvbHV0aW9ucyBzdWNoIGFzIHBtMi5cbnZhciBjbHVzdGVyV29ya2VySWQgPSByZXF1aXJlKCcuL3V0aWwvY2x1c3Rlci13b3JrZXItaWQnKSB8fCAwO1xuXG4vKipcbiAqIFNldCB0aGUgc2VlZC5cbiAqIEhpZ2hseSByZWNvbW1lbmRlZCBpZiB5b3UgZG9uJ3Qgd2FudCBwZW9wbGUgdG8gdHJ5IHRvIGZpZ3VyZSBvdXQgeW91ciBpZCBzY2hlbWEuXG4gKiBleHBvc2VkIGFzIHNob3J0aWQuc2VlZChpbnQpXG4gKiBAcGFyYW0gc2VlZCBJbnRlZ2VyIHZhbHVlIHRvIHNlZWQgdGhlIHJhbmRvbSBhbHBoYWJldC4gIEFMV0FZUyBVU0UgVEhFIFNBTUUgU0VFRCBvciB5b3UgbWlnaHQgZ2V0IG92ZXJsYXBzLlxuICovXG5mdW5jdGlvbiBzZWVkKHNlZWRWYWx1ZSkge1xuICAgIGFscGhhYmV0LnNlZWQoc2VlZFZhbHVlKTtcbiAgICByZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8qKlxuICogU2V0IHRoZSBjbHVzdGVyIHdvcmtlciBvciBtYWNoaW5lIGlkXG4gKiBleHBvc2VkIGFzIHNob3J0aWQud29ya2VyKGludClcbiAqIEBwYXJhbSB3b3JrZXJJZCB3b3JrZXIgbXVzdCBiZSBwb3NpdGl2ZSBpbnRlZ2VyLiAgTnVtYmVyIGxlc3MgdGhhbiAxNiBpcyByZWNvbW1lbmRlZC5cbiAqIHJldHVybnMgc2hvcnRpZCBtb2R1bGUgc28gaXQgY2FuIGJlIGNoYWluZWQuXG4gKi9cbmZ1bmN0aW9uIHdvcmtlcih3b3JrZXJJZCkge1xuICAgIGNsdXN0ZXJXb3JrZXJJZCA9IHdvcmtlcklkO1xuICAgIHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLyoqXG4gKlxuICogc2V0cyBuZXcgY2hhcmFjdGVycyB0byB1c2UgaW4gdGhlIGFscGhhYmV0XG4gKiByZXR1cm5zIHRoZSBzaHVmZmxlZCBhbHBoYWJldFxuICovXG5mdW5jdGlvbiBjaGFyYWN0ZXJzKG5ld0NoYXJhY3RlcnMpIHtcbiAgICBpZiAobmV3Q2hhcmFjdGVycyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGFscGhhYmV0LmNoYXJhY3RlcnMobmV3Q2hhcmFjdGVycyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFscGhhYmV0LnNodWZmbGVkKCk7XG59XG5cbi8qKlxuICogR2VuZXJhdGUgdW5pcXVlIGlkXG4gKiBSZXR1cm5zIHN0cmluZyBpZFxuICovXG5mdW5jdGlvbiBnZW5lcmF0ZSgpIHtcbiAgcmV0dXJuIGJ1aWxkKGNsdXN0ZXJXb3JrZXJJZCk7XG59XG5cbi8vIEV4cG9ydCBhbGwgb3RoZXIgZnVuY3Rpb25zIGFzIHByb3BlcnRpZXMgb2YgdGhlIGdlbmVyYXRlIGZ1bmN0aW9uXG5tb2R1bGUuZXhwb3J0cyA9IGdlbmVyYXRlO1xubW9kdWxlLmV4cG9ydHMuZ2VuZXJhdGUgPSBnZW5lcmF0ZTtcbm1vZHVsZS5leHBvcnRzLnNlZWQgPSBzZWVkO1xubW9kdWxlLmV4cG9ydHMud29ya2VyID0gd29ya2VyO1xubW9kdWxlLmV4cG9ydHMuY2hhcmFjdGVycyA9IGNoYXJhY3RlcnM7XG5tb2R1bGUuZXhwb3J0cy5kZWNvZGUgPSBkZWNvZGU7XG5tb2R1bGUuZXhwb3J0cy5pc1ZhbGlkID0gaXNWYWxpZDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zaG9ydGlkL2xpYi9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbnZhciByYW5kb21Gcm9tU2VlZCA9IHJlcXVpcmUoJy4vcmFuZG9tL3JhbmRvbS1mcm9tLXNlZWQnKTtcblxudmFyIE9SSUdJTkFMID0gJzAxMjM0NTY3ODlhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ekFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaXy0nO1xudmFyIGFscGhhYmV0O1xudmFyIHByZXZpb3VzU2VlZDtcblxudmFyIHNodWZmbGVkO1xuXG5mdW5jdGlvbiByZXNldCgpIHtcbiAgICBzaHVmZmxlZCA9IGZhbHNlO1xufVxuXG5mdW5jdGlvbiBzZXRDaGFyYWN0ZXJzKF9hbHBoYWJldF8pIHtcbiAgICBpZiAoIV9hbHBoYWJldF8pIHtcbiAgICAgICAgaWYgKGFscGhhYmV0ICE9PSBPUklHSU5BTCkge1xuICAgICAgICAgICAgYWxwaGFiZXQgPSBPUklHSU5BTDtcbiAgICAgICAgICAgIHJlc2V0KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChfYWxwaGFiZXRfID09PSBhbHBoYWJldCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKF9hbHBoYWJldF8ubGVuZ3RoICE9PSBPUklHSU5BTC5sZW5ndGgpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDdXN0b20gYWxwaGFiZXQgZm9yIHNob3J0aWQgbXVzdCBiZSAnICsgT1JJR0lOQUwubGVuZ3RoICsgJyB1bmlxdWUgY2hhcmFjdGVycy4gWW91IHN1Ym1pdHRlZCAnICsgX2FscGhhYmV0Xy5sZW5ndGggKyAnIGNoYXJhY3RlcnM6ICcgKyBfYWxwaGFiZXRfKTtcbiAgICB9XG5cbiAgICB2YXIgdW5pcXVlID0gX2FscGhhYmV0Xy5zcGxpdCgnJykuZmlsdGVyKGZ1bmN0aW9uKGl0ZW0sIGluZCwgYXJyKXtcbiAgICAgICByZXR1cm4gaW5kICE9PSBhcnIubGFzdEluZGV4T2YoaXRlbSk7XG4gICAgfSk7XG5cbiAgICBpZiAodW5pcXVlLmxlbmd0aCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0N1c3RvbSBhbHBoYWJldCBmb3Igc2hvcnRpZCBtdXN0IGJlICcgKyBPUklHSU5BTC5sZW5ndGggKyAnIHVuaXF1ZSBjaGFyYWN0ZXJzLiBUaGVzZSBjaGFyYWN0ZXJzIHdlcmUgbm90IHVuaXF1ZTogJyArIHVuaXF1ZS5qb2luKCcsICcpKTtcbiAgICB9XG5cbiAgICBhbHBoYWJldCA9IF9hbHBoYWJldF87XG4gICAgcmVzZXQoKTtcbn1cblxuZnVuY3Rpb24gY2hhcmFjdGVycyhfYWxwaGFiZXRfKSB7XG4gICAgc2V0Q2hhcmFjdGVycyhfYWxwaGFiZXRfKTtcbiAgICByZXR1cm4gYWxwaGFiZXQ7XG59XG5cbmZ1bmN0aW9uIHNldFNlZWQoc2VlZCkge1xuICAgIHJhbmRvbUZyb21TZWVkLnNlZWQoc2VlZCk7XG4gICAgaWYgKHByZXZpb3VzU2VlZCAhPT0gc2VlZCkge1xuICAgICAgICByZXNldCgpO1xuICAgICAgICBwcmV2aW91c1NlZWQgPSBzZWVkO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gc2h1ZmZsZSgpIHtcbiAgICBpZiAoIWFscGhhYmV0KSB7XG4gICAgICAgIHNldENoYXJhY3RlcnMoT1JJR0lOQUwpO1xuICAgIH1cblxuICAgIHZhciBzb3VyY2VBcnJheSA9IGFscGhhYmV0LnNwbGl0KCcnKTtcbiAgICB2YXIgdGFyZ2V0QXJyYXkgPSBbXTtcbiAgICB2YXIgciA9IHJhbmRvbUZyb21TZWVkLm5leHRWYWx1ZSgpO1xuICAgIHZhciBjaGFyYWN0ZXJJbmRleDtcblxuICAgIHdoaWxlIChzb3VyY2VBcnJheS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHIgPSByYW5kb21Gcm9tU2VlZC5uZXh0VmFsdWUoKTtcbiAgICAgICAgY2hhcmFjdGVySW5kZXggPSBNYXRoLmZsb29yKHIgKiBzb3VyY2VBcnJheS5sZW5ndGgpO1xuICAgICAgICB0YXJnZXRBcnJheS5wdXNoKHNvdXJjZUFycmF5LnNwbGljZShjaGFyYWN0ZXJJbmRleCwgMSlbMF0pO1xuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0QXJyYXkuam9pbignJyk7XG59XG5cbmZ1bmN0aW9uIGdldFNodWZmbGVkKCkge1xuICAgIGlmIChzaHVmZmxlZCkge1xuICAgICAgICByZXR1cm4gc2h1ZmZsZWQ7XG4gICAgfVxuICAgIHNodWZmbGVkID0gc2h1ZmZsZSgpO1xuICAgIHJldHVybiBzaHVmZmxlZDtcbn1cblxuLyoqXG4gKiBsb29rdXAgc2h1ZmZsZWQgbGV0dGVyXG4gKiBAcGFyYW0gaW5kZXhcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGxvb2t1cChpbmRleCkge1xuICAgIHZhciBhbHBoYWJldFNodWZmbGVkID0gZ2V0U2h1ZmZsZWQoKTtcbiAgICByZXR1cm4gYWxwaGFiZXRTaHVmZmxlZFtpbmRleF07XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIGNoYXJhY3RlcnM6IGNoYXJhY3RlcnMsXG4gICAgc2VlZDogc2V0U2VlZCxcbiAgICBsb29rdXA6IGxvb2t1cCxcbiAgICBzaHVmZmxlZDogZ2V0U2h1ZmZsZWRcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc2hvcnRpZC9saWIvYWxwaGFiZXQuanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG4vLyBGb3VuZCB0aGlzIHNlZWQtYmFzZWQgcmFuZG9tIGdlbmVyYXRvciBzb21ld2hlcmVcbi8vIEJhc2VkIG9uIFRoZSBDZW50cmFsIFJhbmRvbWl6ZXIgMS4zIChDKSAxOTk3IGJ5IFBhdWwgSG91bGUgKGhvdWxlQG1zYy5jb3JuZWxsLmVkdSlcblxudmFyIHNlZWQgPSAxO1xuXG4vKipcbiAqIHJldHVybiBhIHJhbmRvbSBudW1iZXIgYmFzZWQgb24gYSBzZWVkXG4gKiBAcGFyYW0gc2VlZFxuICogQHJldHVybnMge251bWJlcn1cbiAqL1xuZnVuY3Rpb24gZ2V0TmV4dFZhbHVlKCkge1xuICAgIHNlZWQgPSAoc2VlZCAqIDkzMDEgKyA0OTI5NykgJSAyMzMyODA7XG4gICAgcmV0dXJuIHNlZWQvKDIzMzI4MC4wKTtcbn1cblxuZnVuY3Rpb24gc2V0U2VlZChfc2VlZF8pIHtcbiAgICBzZWVkID0gX3NlZWRfO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBuZXh0VmFsdWU6IGdldE5leHRWYWx1ZSxcbiAgICBzZWVkOiBzZXRTZWVkXG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Nob3J0aWQvbGliL3JhbmRvbS9yYW5kb20tZnJvbS1zZWVkLmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxudmFyIHJhbmRvbUJ5dGUgPSByZXF1aXJlKCcuL3JhbmRvbS9yYW5kb20tYnl0ZScpO1xuXG5mdW5jdGlvbiBlbmNvZGUobG9va3VwLCBudW1iZXIpIHtcbiAgICB2YXIgbG9vcENvdW50ZXIgPSAwO1xuICAgIHZhciBkb25lO1xuXG4gICAgdmFyIHN0ciA9ICcnO1xuXG4gICAgd2hpbGUgKCFkb25lKSB7XG4gICAgICAgIHN0ciA9IHN0ciArIGxvb2t1cCggKCAobnVtYmVyID4+ICg0ICogbG9vcENvdW50ZXIpKSAmIDB4MGYgKSB8IHJhbmRvbUJ5dGUoKSApO1xuICAgICAgICBkb25lID0gbnVtYmVyIDwgKE1hdGgucG93KDE2LCBsb29wQ291bnRlciArIDEgKSApO1xuICAgICAgICBsb29wQ291bnRlcisrO1xuICAgIH1cbiAgICByZXR1cm4gc3RyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGVuY29kZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zaG9ydGlkL2xpYi9lbmNvZGUuanNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgY3J5cHRvID0gdHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcgJiYgKHdpbmRvdy5jcnlwdG8gfHwgd2luZG93Lm1zQ3J5cHRvKTsgLy8gSUUgMTEgdXNlcyB3aW5kb3cubXNDcnlwdG9cblxuZnVuY3Rpb24gcmFuZG9tQnl0ZSgpIHtcbiAgICBpZiAoIWNyeXB0byB8fCAhY3J5cHRvLmdldFJhbmRvbVZhbHVlcykge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjU2KSAmIDB4MzA7XG4gICAgfVxuICAgIHZhciBkZXN0ID0gbmV3IFVpbnQ4QXJyYXkoMSk7XG4gICAgY3J5cHRvLmdldFJhbmRvbVZhbHVlcyhkZXN0KTtcbiAgICByZXR1cm4gZGVzdFswXSAmIDB4MzA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcmFuZG9tQnl0ZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zaG9ydGlkL2xpYi9yYW5kb20vcmFuZG9tLWJ5dGUtYnJvd3Nlci5qc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG52YXIgYWxwaGFiZXQgPSByZXF1aXJlKCcuL2FscGhhYmV0Jyk7XG5cbi8qKlxuICogRGVjb2RlIHRoZSBpZCB0byBnZXQgdGhlIHZlcnNpb24gYW5kIHdvcmtlclxuICogTWFpbmx5IGZvciBkZWJ1Z2dpbmcgYW5kIHRlc3RpbmcuXG4gKiBAcGFyYW0gaWQgLSB0aGUgc2hvcnRpZC1nZW5lcmF0ZWQgaWQuXG4gKi9cbmZ1bmN0aW9uIGRlY29kZShpZCkge1xuICAgIHZhciBjaGFyYWN0ZXJzID0gYWxwaGFiZXQuc2h1ZmZsZWQoKTtcbiAgICByZXR1cm4ge1xuICAgICAgICB2ZXJzaW9uOiBjaGFyYWN0ZXJzLmluZGV4T2YoaWQuc3Vic3RyKDAsIDEpKSAmIDB4MGYsXG4gICAgICAgIHdvcmtlcjogY2hhcmFjdGVycy5pbmRleE9mKGlkLnN1YnN0cigxLCAxKSkgJiAweDBmXG4gICAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkZWNvZGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc2hvcnRpZC9saWIvZGVjb2RlLmpzXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxudmFyIGVuY29kZSA9IHJlcXVpcmUoJy4vZW5jb2RlJyk7XG52YXIgYWxwaGFiZXQgPSByZXF1aXJlKCcuL2FscGhhYmV0Jyk7XG5cbi8vIElnbm9yZSBhbGwgbWlsbGlzZWNvbmRzIGJlZm9yZSBhIGNlcnRhaW4gdGltZSB0byByZWR1Y2UgdGhlIHNpemUgb2YgdGhlIGRhdGUgZW50cm9weSB3aXRob3V0IHNhY3JpZmljaW5nIHVuaXF1ZW5lc3MuXG4vLyBUaGlzIG51bWJlciBzaG91bGQgYmUgdXBkYXRlZCBldmVyeSB5ZWFyIG9yIHNvIHRvIGtlZXAgdGhlIGdlbmVyYXRlZCBpZCBzaG9ydC5cbi8vIFRvIHJlZ2VuZXJhdGUgYG5ldyBEYXRlKCkgLSAwYCBhbmQgYnVtcCB0aGUgdmVyc2lvbi4gQWx3YXlzIGJ1bXAgdGhlIHZlcnNpb24hXG52YXIgUkVEVUNFX1RJTUUgPSAxNDU5NzA3NjA2NTE4O1xuXG4vLyBkb24ndCBjaGFuZ2UgdW5sZXNzIHdlIGNoYW5nZSB0aGUgYWxnb3Mgb3IgUkVEVUNFX1RJTUVcbi8vIG11c3QgYmUgYW4gaW50ZWdlciBhbmQgbGVzcyB0aGFuIDE2XG52YXIgdmVyc2lvbiA9IDY7XG5cbi8vIENvdW50ZXIgaXMgdXNlZCB3aGVuIHNob3J0aWQgaXMgY2FsbGVkIG11bHRpcGxlIHRpbWVzIGluIG9uZSBzZWNvbmQuXG52YXIgY291bnRlcjtcblxuLy8gUmVtZW1iZXIgdGhlIGxhc3QgdGltZSBzaG9ydGlkIHdhcyBjYWxsZWQgaW4gY2FzZSBjb3VudGVyIGlzIG5lZWRlZC5cbnZhciBwcmV2aW91c1NlY29uZHM7XG5cbi8qKlxuICogR2VuZXJhdGUgdW5pcXVlIGlkXG4gKiBSZXR1cm5zIHN0cmluZyBpZFxuICovXG5mdW5jdGlvbiBidWlsZChjbHVzdGVyV29ya2VySWQpIHtcblxuICAgIHZhciBzdHIgPSAnJztcblxuICAgIHZhciBzZWNvbmRzID0gTWF0aC5mbG9vcigoRGF0ZS5ub3coKSAtIFJFRFVDRV9USU1FKSAqIDAuMDAxKTtcblxuICAgIGlmIChzZWNvbmRzID09PSBwcmV2aW91c1NlY29uZHMpIHtcbiAgICAgICAgY291bnRlcisrO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvdW50ZXIgPSAwO1xuICAgICAgICBwcmV2aW91c1NlY29uZHMgPSBzZWNvbmRzO1xuICAgIH1cblxuICAgIHN0ciA9IHN0ciArIGVuY29kZShhbHBoYWJldC5sb29rdXAsIHZlcnNpb24pO1xuICAgIHN0ciA9IHN0ciArIGVuY29kZShhbHBoYWJldC5sb29rdXAsIGNsdXN0ZXJXb3JrZXJJZCk7XG4gICAgaWYgKGNvdW50ZXIgPiAwKSB7XG4gICAgICAgIHN0ciA9IHN0ciArIGVuY29kZShhbHBoYWJldC5sb29rdXAsIGNvdW50ZXIpO1xuICAgIH1cbiAgICBzdHIgPSBzdHIgKyBlbmNvZGUoYWxwaGFiZXQubG9va3VwLCBzZWNvbmRzKTtcblxuICAgIHJldHVybiBzdHI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYnVpbGQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc2hvcnRpZC9saWIvYnVpbGQuanNcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcbnZhciBhbHBoYWJldCA9IHJlcXVpcmUoJy4vYWxwaGFiZXQnKTtcblxuZnVuY3Rpb24gaXNTaG9ydElkKGlkKSB7XG4gICAgaWYgKCFpZCB8fCB0eXBlb2YgaWQgIT09ICdzdHJpbmcnIHx8IGlkLmxlbmd0aCA8IDYgKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICB2YXIgY2hhcmFjdGVycyA9IGFscGhhYmV0LmNoYXJhY3RlcnMoKTtcbiAgICB2YXIgbGVuID0gaWQubGVuZ3RoO1xuICAgIGZvcih2YXIgaSA9IDA7IGkgPCBsZW47aSsrKSB7XG4gICAgICAgIGlmIChjaGFyYWN0ZXJzLmluZGV4T2YoaWRbaV0pID09PSAtMSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzU2hvcnRJZDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zaG9ydGlkL2xpYi9pcy12YWxpZC5qc1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IDA7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc2hvcnRpZC9saWIvdXRpbC9jbHVzdGVyLXdvcmtlci1pZC1icm93c2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxuICogVGhlIE1JVCBMaWNlbnNlIChNSVQpXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTkuIFdpc2UgV2lsZCBXZWJcbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIOKAnFNvZnR3YXJl4oCdKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIOKAnEFTIElT4oCdLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiAqXG4gKiAgQGF1dGhvciA6IE5hdGhhbmFlbCBCcmF1blxuICogIEBjb250YWN0IDogbjh0ei5qc0BnbWFpbC5jb21cbiAqL1xuXG5pbXBvcnQgaXMgZnJvbSAnaXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbWl0dGVyIHtcblx0X2V2ZW50cyA9IHt9O1xuXHRcblx0b24oIGV2dCwgY2IgKSB7XG5cdFx0aWYgKCAhaXMuc3RyaW5nKGV2dCkgJiYgZXZ0IClcblx0XHRcdHJldHVybiBPYmplY3Qua2V5cyhldnQpLmZvckVhY2goayA9PiB0aGlzLm9uKGssIGV2dFtrXSkpO1xuXHRcdFxuXHRcdHRoaXMuX2V2ZW50c1tldnRdID0gdGhpcy5fZXZlbnRzW2V2dF0gfHwgW107XG5cdFx0dGhpcy5fZXZlbnRzW2V2dF0ucHVzaChjYik7XG5cdH1cblx0XG5cdHVuKCBldnQsIGNiICkge1xuXHRcdGlmICggIWlzLnN0cmluZyhldnQpICYmIGV2dCApXG5cdFx0XHRyZXR1cm4gT2JqZWN0LmtleXMoZXZ0KS5mb3JFYWNoKGsgPT4gdGhpcy51bihrLCBldnRba10pKTtcblx0XHRcblx0XHRpZiAoICF0aGlzLl9ldmVudHNbZXZ0XSApIHJldHVybjtcblx0XHRsZXQgaSA9IHRoaXMuX2V2ZW50c1tldnRdLmluZGV4T2YoY2IpO1xuXHRcdHRoaXMuX2V2ZW50c1tldnRdLnNwbGljZShpLCAxKTtcblx0fVxuXHRcblx0ZW1pdCggZXZ0LCAuLi5hcmd6ICkge1xuXHRcdGlmICggIXRoaXMuX2V2ZW50c1tldnRdICkgcmV0dXJuO1xuXHRcdGxldCBsaXN0cyA9IFsuLi50aGlzLl9ldmVudHNbZXZ0XV07XG5cdFx0XG5cdFx0Zm9yICggbGV0IGkgPSAwOyBpIDwgbGlzdHMubGVuZ3RoOyBpKysgKVxuXHRcdFx0bGlzdHNbaV0oLi4uYXJneilcblx0fVxuXHRcblx0YWRkTGlzdGVuZXIoKSB7XG5cdFx0dGhpcy5vbiguLi5hcmd1bWVudHMpO1xuXHR9XG5cdFxuXHRyZW1vdmVMaXN0ZW5lcigpIHtcblx0XHR0aGlzLnVuKC4uLmFyZ3VtZW50cyk7XG5cdH1cblx0XG5cdHJlbW92ZUFsbExpc3RlbmVycygpIHtcblx0XHR0aGlzLl9ldmVudHMgPSB7fTtcblx0fVxuXHRcblx0b25jZSggZXZ0LCBjYiApIHtcblx0XHRsZXQgZm47XG5cdFx0dGhpcy5vbihldnQsIGZuID0gKCAuLi5hcmd6ICkgPT4ge1xuXHRcdFx0dGhpcy51bihldnQsIGZuKTtcblx0XHRcdGNiKC4uLmFyZ3opXG5cdFx0fSk7XG5cdH1cblx0XG5cdFxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlscy9FbWl0dGVyLmpzIiwiLypcbiAqIFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuICogQ29weXJpZ2h0IChjKSAyMDE5LiBXaXNlIFdpbGQgV2ViXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSDigJxTb2Z0d2FyZeKAnSksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCDigJxBUyBJU+KAnSwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4gKlxuICogIEBhdXRob3IgOiBOYXRoYW5hZWwgQnJhdW5cbiAqICBAY29udGFjdCA6IG44dHouanNAZ21haWwuY29tXG4gKi9cblxuY29uc3QgaXMgPSByZXF1aXJlKCdpcycpO1xuXG5leHBvcnQgZnVuY3Rpb24gd2Fsa25TZXQoIG9iaiwgcGF0aCwgdmFsdWUsIHN0YWNrICkge1xuXHRpZiAoIGlzLnN0cmluZyhwYXRoKSApXG5cdFx0cGF0aCA9IHBhdGguc3BsaXQoJy4nKTtcblx0aWYgKCAhcGF0aC5sZW5ndGggKVxuXHRcdHJldHVybiBmYWxzZTtcblx0ZWxzZSBpZiAoIHBhdGgubGVuZ3RoID09IDEgKVxuXHRcdHJldHVybiBvYmpbcGF0aFswXV0gPSBzdGFja1xuXHRcdCAgICAgICAgICAgICAgICAgICAgICA/IFsuLi4ob2JqW3BhdGhbMF1dIHx8IFtdKSwgdmFsdWVdXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgIDogdmFsdWU7XG5cdGVsc2Vcblx0XHRyZXR1cm4gd2Fsa25TZXQoXG5cdFx0XHRvYmpbcGF0aFswXV0gPVxuXHRcdFx0XHRvYmpbcGF0aFswXV0gfHwge30sXG5cdFx0XHRwYXRoLnNsaWNlKDEpLFxuXHRcdFx0dmFsdWUsIHN0YWNrXG5cdFx0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHdhbGtuR2V0KCBvYmosIHBhdGgsIGlzS2V5ICkge1xuXHRpZiAoIGlzLnN0cmluZyhwYXRoKSApXG5cdFx0cGF0aCA9IHBhdGguc3BsaXQoJy4nKTtcblx0cmV0dXJuIHBhdGgubGVuZ3RoXG5cdCAgICAgICA/IG9ialtwYXRoWzBdXSAmJiB3YWxrbkdldChvYmpbcGF0aFswXV0sIHBhdGguc2xpY2UoMSkpXG5cdCAgICAgICA6IG9iajtcbn1cblxuLy9AdG9kb1xuZXhwb3J0IGZ1bmN0aW9uIGtleVdhbGtuU2V0KCBvYmosIHBhdGgsIHZhbHVlLCBzdGFjayApIHtcblx0aWYgKCBpcy5zdHJpbmcocGF0aCkgKVxuXHRcdHBhdGggPSBwYXRoLnNwbGl0KC8oXFw+fFxcLykvaWcpLmZpbHRlcih2ID0+ICh2ICE9PSAnPicgJiYgdikpO1xuXHRyZXR1cm4gd2Fsa25TZXQob2JqLCBwYXRoLCB2YWx1ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBrZXlXYWxrbkdldCggb2JqLCBwYXRoLCBpc0tleSApIHtcblx0aWYgKCBpcy5zdHJpbmcocGF0aCkgKVxuXHRcdHBhdGggPSBwYXRoLnNwbGl0KC8oXFw+fFxcLykvaWcpLmZpbHRlcih2ID0+ICh2ICE9PSAnPicgJiYgdikpO1xuXHRyZXR1cm4gcGF0aC5sZW5ndGhcblx0ICAgICAgID8gb2JqW3BhdGhbMF1dICYmIHdhbGtuR2V0KG9ialtwYXRoWzBdXSwgcGF0aC5zbGljZSgxKSlcblx0ICAgICAgIDogb2JqO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlscy91dGlscy5qcyIsIi8qXG4gKiBUaGUgTUlUIExpY2Vuc2UgKE1JVClcbiAqIENvcHlyaWdodCAoYykgMjAxOS4gV2lzZSBXaWxkIFdlYlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUg4oCcU29mdHdhcmXigJ0pLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQg4oCcQVMgSVPigJ0sIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuICpcbiAqICBAYXV0aG9yIDogTmF0aGFuYWVsIEJyYXVuXG4gKiAgQGNvbnRhY3QgOiBuOHR6LmpzQGdtYWlsLmNvbVxuICovXG5cbmNvbnN0IGlzICAgICAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlKCdpcycpLFxuICAgICAgU2NvcGUgICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vU2NvcGUnKSxcbiAgICAgIHsga2V5V2Fsa25TZXQsIGtleVdhbGtuR2V0IH0gPSByZXF1aXJlKCcuL3V0aWxzL3V0aWxzJyksXG4gICAgICBFdmVudEVtaXR0ZXIgICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi91dGlscy9FbWl0dGVyJyksXG4gICAgICBUYXNrU2VxdWVuY2VyICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi91dGlscy9UYXNrU2VxdWVuY2VyJyksXG4gICAgICBzaG9ydGlkICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnc2hvcnRpZCcpLFxuICAgICAgb2JqUHJvdG8gICAgICAgICAgICAgICAgICAgICA9IE9iamVjdC5nZXRQcm90b3R5cGVPZih7fSk7XG5cbmNsYXNzIFN0b3JlIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcblx0Ly9zdGF0aWMgdXNlICAgICAgICAgICAgICAgICAgPSBbXTsvLyBvdmVycmlkYWJsZSBsaXN0IG9mIHNvdXJjZSBzdG9yZXNcblx0c3RhdGljIGZvbGxvdzsvLyBvdmVycmlkYWJsZSBsaXN0IG9mIHN0b3JlIHRoYXQgd2lsbCBhbGxvdyBwdXNoIGlmIHVwZGF0ZWRcblx0c3RhdGljIHJlcXVpcmU7XG5cdHN0YXRpYyBzdGF0aWNTY29wZSAgID0gbmV3IFNjb3BlKHt9LCB7IGlkOiBcInN0YXRpY1wiIH0pO1xuXHRzdGF0aWMgc3RhdGUgICAgICAgICA9IHVuZGVmaW5lZDsvLyBkZWZhdWx0IHN0YXRlXG5cdC8qKlxuXHQgKiBpZiByZXRhaW4gZ29lcyB0byAwIDpcblx0ICogZmFsc2UgdG8gbm90IGRlc3Ryb3ksXG5cdCAqIDAgdG8gc3luYyBhdXRvIGRlc3Ryb3lcblx0ICogTXMgdG8gYXV0b2Rlc3Ryb3kgYWZ0ZXIgdG0gbXMgaWYgbm8gcmV0YWluIGhhcyBiZWVuIGNhbGxlZFxuXHQgKiBAdHlwZSB7Ym9vbGVhbnxJbnR9XG5cdCAqL1xuXHRzdGF0aWMgcGVyc2lzdGVuY2VUbSA9IGZhbHNlO1xuXHRcblx0LyoqXG5cdCAqIENvbnN0cnVjdG9yLCB3aWxsIGJ1aWxkIGEgcmVzY29wZSBzdG9yZVxuXHQgKlxuXHQgKiAoc2NvcGUsIHtyZXF1aXJlLHVzZSxhcHBseSxzdGF0ZSwgZGF0YX0pXG5cdCAqIChzY29wZSlcblx0ICpcblx0ICogQHBhcmFtIHNjb3BlIHtvYmplY3R9IHNjb3BlIHdoZXJlIHRvIGZpbmQgdGhlIG90aGVyIHN0b3JlcyAoZGVmYXVsdCA6IHN0YXRpY1xuXHQgKiAgICAgc3RhdGljU2NvcGUgKVxuXHQgKiBAcGFyYW0ga2V5cyB7QXJyYXl9IChwYXNzZWQgdG8gU3RvcmU6Om1hcCkgRXggOiBbXCJzZXNzaW9uXCIsIFwib3RoZXJOYW1lZFN0b3JlOmtleVwiLFxuXHQgKiAgICAgb3RoZXJTdG9yZS5hcyhcIm90aGVyS2V5XCIpXVxuXHQgKi9cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0XHRsZXQgYXJneiAgICAgICAgID0gWy4uLmFyZ3VtZW50c10sXG5cdFx0ICAgIF9zdGF0aWMgICAgICA9IHRoaXMuY29uc3RydWN0b3IsXG5cdFx0ICAgIHNjb3BlICAgICAgICA9IGFyZ3pbMF0gaW5zdGFuY2VvZiBTY29wZVxuXHRcdCAgICAgICAgICAgICAgICAgICA/IGFyZ3ouc2hpZnQoKVxuXHRcdCAgICAgICAgICAgICAgICAgICA6IF9zdGF0aWMuc2NvcGUgPyBTY29wZS5nZXRTY29wZShfc3RhdGljLnNjb3BlKVxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBpcy5zdHJpbmcoYXJnelswXSlcblx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBTY29wZS5nZXRTY29wZShhcmd6LnNoaWZ0KCkpXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3N0YXRpYy5zdGF0aWNTY29wZSxcblx0XHQgICAgY2ZnICAgICAgICAgID0gYXJnelswXSAmJiAhaXMuYXJyYXkoYXJnelswXSkgJiYgIWlzLnN0cmluZyhhcmd6WzBdKVxuXHRcdCAgICAgICAgICAgICAgICAgICA/IGFyZ3ouc2hpZnQoKVxuXHRcdCAgICAgICAgICAgICAgICAgICA6IHt9LFxuXHRcdCAgICB0YXNrUXVldWUgICAgPSBpcy5hcnJheShhcmd6WzBdKSA/IGFyZ3ouc2hpZnQoKSA6IG51bGwsXG5cdFx0ICAgIG5hbWUgICAgICAgICA9IGNmZy5uYW1lIHx8IF9zdGF0aWMubmFtZSxcblx0XHQgICAgd2F0Y2hzICAgICAgID0gY2ZnLnVzZSB8fCBbXSxcblx0XHQgICAgYXBwbHkgICAgICAgID0gY2ZnLmFwcGx5IHx8IG51bGwsXG5cdFx0ICAgIGluaXRpYWxTdGF0ZSA9IF9zdGF0aWMuc3RhdGUgfHwgX3N0YXRpYy5pbml0aWFsU3RhdGUgfHwgX3N0YXRpYy5kZWZhdWx0U3RhdGU7XG5cdFx0XG5cdFx0dGhpcy5fdWlkID0gY2ZnLl91aWQgfHwgc2hvcnRpZC5nZW5lcmF0ZSgpO1xuXHRcdFxuXHRcdHRoaXMuX19yZXRhaW5zICAgID0geyBhbGw6IDAgfTtcblx0XHR0aGlzLl9fbG9ja3MgICAgICA9IHsgYWxsOiAwIH07XG5cdFx0dGhpcy5fb25TdGFiaWxpemUgPSBbXTtcblx0XHRcblx0XHQvLyBhdXRvRGVzdHJveVRtXG5cdFx0dGhpcy5fYXV0b0Rlc3Ryb3kgICA9ICEhdGhpcy5fcGVyc2lzdGVuY2VUbTtcblx0XHR0aGlzLl9wZXJzaXN0ZW5jZVRtID0gY2ZnLnBlcnNpc3RlbmNlVG0gfHwgX3N0YXRpYy5wZXJzaXN0ZW5jZVRtIHx8IChjZmcuYXV0b0Rlc3Ryb3kgfHwgX3N0YXRpYy5hdXRvRGVzdHJveSkgJiYgNTtcblx0XHR0aGlzLl9jZmcgICAgICAgICAgID0gY2ZnO1xuXHRcdFxuXHRcdGlmICggY2ZnICYmIGNmZy5vbiApIHtcblx0XHRcdHRoaXMub24oY2ZnLm9uKTtcblx0XHR9XG5cdFx0XG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0XHRcblx0XHRpZiAoIHNjb3BlLnN0b3JlcyApIHtcblx0XHRcdHRoaXMuc2NvcGVPYmogPSBzY29wZTtcblx0XHRcdHRoaXMuc2NvcGUgICAgPSBzY29wZS5zdG9yZXM7XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0dGhpcy5zY29wZU9iaiA9IG5ldyBTY29wZShzY29wZSk7XG5cdFx0XHR0aGlzLnNjb3BlICAgID0gc2NvcGUuc3RvcmVzO1xuXHRcdH1cblx0XHRcblx0XHQvLyBzdGFuZGFyZGl6ZWQgc2NvcGUgYWNjZXNzXG5cdFx0dGhpcy4kc2NvcGUgICAgPSB0aGlzLnNjb3BlT2JqO1xuXHRcdHRoaXMuJHN0b3JlcyAgID0gdGhpcy5zY29wZU9iai5zdG9yZXM7XG5cdFx0dGhpcy4kYWN0aW9ucyAgPSB0aGlzLnNjb3BlT2JqLmFjdGlvbnM7XG5cdFx0dGhpcy4kZGlzcGF0Y2ggPSB0aGlzLnNjb3BlT2JqLmRpc3BhdGNoLmJpbmQodGhpcy5zY29wZU9iaik7XG5cdFx0XG5cdFx0dGhpcy5fcmV2ICAgICA9IHRoaXMuY29uc3RydWN0b3IuX3JldiB8fCAwO1xuXHRcdHRoaXMuX3JldnMgICAgPSB7fTtcblx0XHR0aGlzLnN0b3JlcyAgID0ge307XG5cdFx0dGhpcy5fcmVxdWlyZSA9IFtdO1xuXHRcdHRoaXMuX3NvdXJjZXMgPSBbbmFtZV07XG5cdFx0XG5cdFx0Ly8gcmVnaXN0ZXIgc291cmNlIHN0b3Jlc1xuXHRcdGlmICggaXMuYXJyYXkoX3N0YXRpYy51c2UpICkge1xuXHRcdFx0dGhpcy5fdXNlID0gWy4uLndhdGNocywgLi4uKF9zdGF0aWMudXNlIHx8IFtdKS5tYXAoXG5cdFx0XHRcdGtleSA9PiB7XG5cdFx0XHRcdFx0bGV0IHJlZiA9IGtleS5tYXRjaCgvXihcXCE/KShbXlxcOl0qKSg/OlxcOiguKikpPyQvKTtcblx0XHRcdFx0XHRpZiAoIHJlZlsxXSApIHtcblx0XHRcdFx0XHRcdGxldCByZWYyID0gcmVmWzJdLnNwbGl0KCcuJyk7XG5cdFx0XHRcdFx0XHR0aGlzLl9yZXF1aXJlLnB1c2gocmVmWzNdIHx8IHJlZjJbcmVmMi5sZW5ndGggLSAxXSk7Ly8gcmVxdWlyZSBjaGVjayB2YWx1ZSBvZiB0aGUgYWxpYXNlZFxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaW1wb3J0ZWQgdmFsdWVcblx0XHRcdFx0XHRcdHJldHVybiBrZXkuc3Vic3RyKDEpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm4ga2V5O1xuXHRcdFx0XHR9XG5cdFx0XHQpXTtcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHR0aGlzLl91c2UgPSBbLi4ud2F0Y2hzLCAuLi4oXG5cdFx0XHRcdF9zdGF0aWMudXNlID8gT2JqZWN0LmtleXMoX3N0YXRpYy51c2UpXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgLm1hcChcblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgIGtleSA9PiB7XG5cdFx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgIGxldCByZWYgPSBrZXkubWF0Y2goL14oXFwhPykoLiopJC8pO1xuXHRcdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICByZWZbMV0gJiYgdGhpcy5fcmVxdWlyZS5wdXNoKF9zdGF0aWMudXNlW2tleV0pO1xuXHRcdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVmWzJdICsgKChfc3RhdGljLnVzZVtrZXldID09PSB0cnVlKVxuXHRcdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJydcblx0XHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICc6JyArIF9zdGF0aWMudXNlW2tleV0pO1xuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgfVxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICkgOiBbXVxuXHRcdFx0KV07XG5cdFx0fVxuXHRcdFxuXHRcdGlmICggX3N0YXRpYy5yZXF1aXJlIClcblx0XHRcdHRoaXMuX3JlcXVpcmUucHVzaCguLi5fc3RhdGljLnJlcXVpcmUpO1xuXHRcdGlmICggY2ZnLnJlcXVpcmUgKVxuXHRcdFx0dGhpcy5fcmVxdWlyZS5wdXNoKC4uLmNmZy5yZXF1aXJlKTtcblx0XHRcblx0XHR0aGlzLl9mb2xsb3dlcnMgPSBbXTtcblx0XHR0aGlzLl9jaGFuZ2VzU1cgPSBpbml0aWFsU3RhdGUgfHwge307XG5cdFx0dGhpcy5zdGF0ZSAgICAgID0gaW5pdGlhbFN0YXRlICYmIHt9O1xuXHRcdFxuXHRcdGlmICggYXBwbHkgKVxuXHRcdFx0dGhpcy5hcHBseSA9IGFwcGx5O1xuXHRcdFxuXHRcdC8qKlxuXHRcdCAqIEluaXRpYWwgc3RhdGUgaXNuJ3QgZnVsbHkgaW5pdGlhbGl6ZWQgKCBjaGlsZHMgY29uc3RydWN0b3JzIGNhbiBzZXQgaXQgKVxuXHRcdCAqIFNjb3BlIGJhc2VkIGluc3RhbmNlIGhhdmUgdGFza1F1ZXVlIHRvIGRlbGF5IGluaXQgc3luY2hyb25vdXNseSwgaWYgbm90XG5cdFx0ICogcHJlc2VudCB3ZSB1c2Ugc2V0VGltZW91dFxuXHRcdCAqL1xuXHRcdGlmICggdGFza1F1ZXVlICkge1xuXHRcdFx0dGFza1F1ZXVlLnB1c2godGhpcy5fYWZ0ZXJDb25zdHJ1Y3Rvci5iaW5kKHRoaXMpKVxuXHRcdH1cblx0XHRlbHNlXG5cdFx0XHRzZXRUaW1lb3V0KHRoaXMuX2FmdGVyQ29uc3RydWN0b3IuYmluZCh0aGlzKSlcblx0fVxuXHRcblx0LyoqXG5cdCAqIEdldCB0aGUgaW5jb21pbmcgc3RhdGUgKCBmb3IgaW1tZWRpYXRlIHN0YXRlIHJlbGF0aXZlIGFjdGlvbnMgKVxuXHQgKiBAcmV0dXJucyB7e318Kn1cblx0ICovXG5cdGdldCBuZXh0U3RhdGUoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX25leHRTdGF0ZSB8fCB0aGlzLnN0YXRlO1xuXHR9XG5cdFxuXHRfYWZ0ZXJDb25zdHJ1Y3RvcigpIHtcblx0XHRsZXQgY2ZnICAgICAgICAgID0gdGhpcy5fY2ZnLFxuXHRcdCAgICBfc3RhdGljICAgICAgPSB0aGlzLmNvbnN0cnVjdG9yLFxuXHRcdCAgICBzbmFwc2hvdCAgICAgPSB0aGlzLnJlc3RvcmUodW5kZWZpbmVkLCB0cnVlKSxcblx0XHQgICAgaW5pdGlhbFN0YXRlID0gdGhpcy5zdGF0ZSxcblx0XHQgICAgaW5pdGlhbERhdGEgID0gdGhpcy5kYXRhLFxuXHRcdCAgICBhcHBsaWVkO1xuXHRcdHtcblx0XHRcdFxuXHRcdFx0aWYgKCBpbml0aWFsRGF0YSApXG5cdFx0XHRcdHRoaXMuZGF0YSA9IGluaXRpYWxEYXRhO1xuXHRcdFx0ZWxzZSBpZiAoIF9zdGF0aWMuZGF0YSAhPT0gdW5kZWZpbmVkIClcblx0XHRcdFx0dGhpcy5kYXRhID0geyAuLi5fc3RhdGljLmRhdGEgfTtcblx0XHRcdGVsc2UgaWYgKCBjZmcuaGFzT3duUHJvcGVydHkoXCJkYXRhXCIpIClcblx0XHRcdFx0dGhpcy5kYXRhID0gY2ZnLmRhdGE7XG5cdFx0XHRcblx0XHRcdGlmICggY2ZnLmhhc093blByb3BlcnR5KFwic3RhdGVcIikgJiYgY2ZnLnN0YXRlICE9PSB1bmRlZmluZWQgKVxuXHRcdFx0XHRpbml0aWFsU3RhdGUgPSB7IC4uLmluaXRpYWxTdGF0ZSwgLi4uY2ZnLnN0YXRlIH07XG5cdFx0XHRcblx0XHRcdGlmICggdGhpcy5kYXRhID09PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRcdGlmICggaW5pdGlhbFN0YXRlIHx8IHRoaXMuX3VzZS5sZW5ndGggKSB7Ly8gc3luYyBhcHBseVxuXHRcdFx0XHRcdHRoaXMuX25leHRTdGF0ZSA9IHRoaXMuX2NoYW5nZXNTVyA9IHtcblx0XHRcdFx0XHRcdC4uLnRoaXMuX2NoYW5nZXNTVyxcblx0XHRcdFx0XHRcdC4uLihpbml0aWFsU3RhdGUgfHwge30pLFxuXHRcdFx0XHRcdFx0Li4udGhpcy4kc2NvcGUubWFwKHRoaXMsIHRoaXMuX3VzZSlcblx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgICAgICA9IHt9O1xuXHRcdFx0XHRcdGlmICggdGhpcy5zaG91bGRBcHBseSh0aGlzLl9uZXh0U3RhdGUpICYmIHRoaXMuZGF0YSA9PT0gdW5kZWZpbmVkICkge1xuXHRcdFx0XHRcdFx0dGhpcy5kYXRhICAgICAgID0gdGhpcy5hcHBseSh0aGlzLmRhdGEsIHRoaXMuX25leHRTdGF0ZSwgdGhpcy5fY2hhbmdlc1NXKTtcblx0XHRcdFx0XHRcdGFwcGxpZWQgICAgICAgICA9IHRydWU7XG5cdFx0XHRcdFx0XHR0aGlzLnN0YXRlICAgICAgPSB0aGlzLl9jaGFuZ2VzU1c7XG5cdFx0XHRcdFx0XHR0aGlzLl9uZXh0U3RhdGUgPSB0aGlzLl9jaGFuZ2VzU1cgPSBudWxsO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdGFwcGxpZWQgICAgICAgICA9IHRydWU7XG5cdFx0XHRcdHRoaXMuc3RhdGUgICAgICA9IHsvLyBhc3N1bWUgdGhpcyBzdGF0ZSBpcyBzeW5jIHdpdGggaW5pdGlhbCBkYXRhXG5cdFx0XHRcdFx0Li4udGhpcy5fY2hhbmdlc1NXLFxuXHRcdFx0XHRcdC4uLihpbml0aWFsU3RhdGUgfHwge30pLFxuXHRcdFx0XHRcdC4uLnRoaXMuJHNjb3BlLm1hcCh0aGlzLCB0aGlzLl91c2UpXG5cdFx0XHRcdH07XG5cdFx0XHRcdHRoaXMuX25leHRTdGF0ZSA9IHRoaXMuX2NoYW5nZXNTVyA9IG51bGw7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmICggKHRoaXMuZGF0YSAhPT0gdW5kZWZpbmVkIHx8IGFwcGxpZWQpICYmICF0aGlzLl9fbG9ja3MuYWxsICkge1xuXHRcdFx0dGhpcy5fc3RhYmxlID0gdHJ1ZTtcblx0XHRcdHRoaXMuX3JldisrO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdHRoaXMuX3N0YWJsZSA9IGZhbHNlO1xuXHRcdFx0aWYgKCAhX3N0YXRpYy5tYW5hZ2VkICYmICF0aGlzLnN0YXRlICYmICghdGhpcy5fdXNlIHx8ICF0aGlzLl91c2UubGVuZ3RoKSApIHtcblx0XHRcdFx0Y29uc29sZS53YXJuKFwiUmVTY29wZSBzdG9yZSAnXCIsIHRoaXMubmFtZSwgXCInIGhhdmUgbm8gaW5pdGlhbCBkYXRhLCBzdGF0ZSBvciB1c2UuIEl0IGNhbid0IHN0YWJpbGl6ZS4uLlwiKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0IXRoaXMuX3N0YWJsZSAmJiB0aGlzLmVtaXQoJ3Vuc3RhYmxlJywgdGhpcy5zdGF0ZSk7XG5cdFx0XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBPdmVycmlkYWJsZSBtZXRob2QgdG8ga25vdyBpZiBhIGRhdGEgY2hhbmdlIHNob3VsZCBiZSBwcm9wYWcgdG8gdGhlIGxpc3RlbmluZ1xuXHQgKiBzdG9yZXMgJiBjb21wb25lbnRzXG5cdCAqL1xuXHRzaG91bGRQcm9wYWcoIG5EYXRhcyApIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXHRcblx0LyoqXG5cdCAqIE92ZXJyaWRhYmxlIG1ldGhvZCB0byBjaG9vc2UgaWYgdGhpcyBzdG9yZSBzaG91bGQgYmUgc2VyaWFsaXplZCxcblx0ICogSWYgbm90IGl0IHdpbGwgYmUgYXBwbGllZCBub3JtYWxseSB3aGVuIHJlc3RvcmluZ1xuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cblx0ICovXG5cdHNob3VsZFNlcmlhbGl6ZSgpIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXHRcblx0aGFzRGF0YUNoYW5nZSggbkRhdGFzICkge1xuXHRcdGxldCBfc3RhdGljID0gdGhpcy5jb25zdHJ1Y3Rvciwgcixcblx0XHQgICAgY0RhdGFzICA9IHRoaXMuZGF0YTtcblx0XHRyICAgICAgICAgICA9ICFjRGF0YXMgJiYgbkRhdGFzIHx8IGNEYXRhcyAhPT0gbkRhdGFzO1xuXHRcdCFyICYmIGNEYXRhcyAmJiBPYmplY3Qua2V5cyhjRGF0YXMpLmZvckVhY2goXG5cdFx0XHQoIGtleSApID0+IHtcblx0XHRcdFx0ciA9IHIgfHwgKG5EYXRhc1xuXHRcdFx0XHQgICAgICAgICAgPyBjRGF0YXNba2V5XSAhPT0gbkRhdGFzW2tleV1cblx0XHRcdFx0ICAgICAgICAgIDogY0RhdGFzICYmIGNEYXRhc1trZXldKVxuXHRcdFx0fVxuXHRcdCk7XG5cdFx0IXIgJiYgbkRhdGFzICYmIE9iamVjdC5rZXlzKG5EYXRhcykuZm9yRWFjaChcblx0XHRcdCgga2V5ICkgPT4ge1xuXHRcdFx0XHRyID0gciB8fCAobkRhdGFzXG5cdFx0XHRcdCAgICAgICAgICA/IGNEYXRhc1trZXldICE9PSBuRGF0YXNba2V5XVxuXHRcdFx0XHQgICAgICAgICAgOiBjRGF0YXMgJiYgY0RhdGFzW2tleV0pXG5cdFx0XHR9XG5cdFx0KTtcblx0XHRyZXR1cm4gcjtcblx0fVxuXHRcblx0LyoqXG5cdCAqIE92ZXJyaWRhYmxlIG1ldGhvZCB0byBrbm93IGlmIGEgc3RhdGUgY2hhbmdlIHNob3VsZCBiZSBhcHBsaWVkXG5cdCAqL1xuXHRzaG91bGRBcHBseSggc3RhdGUgPSB0aGlzLnN0YXRlICkge1xuXHRcdGxldCBfc3RhdGljID0gdGhpcy5jb25zdHJ1Y3Rvcjtcblx0XHRcblx0XHRyZXR1cm4gKFxuXHRcdFx0ISF0aGlzLmlzQ29tcGxldGUoc3RhdGUpXG5cdFx0KSAmJiAoaXMuYXJyYXkoX3N0YXRpYy5mb2xsb3cpXG5cdFx0ICAgICAgPyBfc3RhdGljLmZvbGxvd1xuXHRcdCAgICAgICAgICAgICAgIC5yZWR1Y2UoKCByLCBpICkgPT4gKHIgfHwgc3RhdGUgJiYgc3RhdGVbaV0pLCBmYWxzZSlcblx0XHQgICAgICA6IF9zdGF0aWMuZm9sbG93XG5cdFx0ICAgICAgICA/IE9iamVjdC5rZXlzKF9zdGF0aWMuZm9sbG93KVxuXHRcdCAgICAgICAgICAgICAgICAucmVkdWNlKCggciwgaSApID0+IChcblx0XHRcdCAgICAgICAgICAgICAgICByXG5cdFx0XHQgICAgICAgICAgICAgICAgfHwgc3RhdGUgJiYgaXMuZm4oX3N0YXRpYy5mb2xsb3dbaV0pICYmIF9zdGF0aWMuZm9sbG93W2ldLmNhbGwodGhpcywgc3RhdGVbaV0pXG5cdFx0XHQgICAgICAgICAgICAgICAgfHwgX3N0YXRpYy5mb2xsb3dbaV0gJiYgc3RhdGVbaV0gIT09IHRoaXMuc3RhdGVbaV1cblx0XHQgICAgICAgICAgICAgICAgKSwgZmFsc2UpIDogdHJ1ZVxuXHRcdCk7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBPdmVycmlkYWJsZSBhcHBsaWVyIC8gcmVtYXBwZXJcblx0ICogSWYgc3RhdGUgb3IgbGFzdFB1YmxpY1N0YXRlIGFyZSBzaW1wbGUgaGFzaCBtYXBzIGFwcGx5IHdpbGwgcmV0dXJuIHsuLi5kYXRhLFxuXHQgKiAuLi5zdGF0ZX0gaWYgbm90IGl0IHdpbGwgcmV0dXJuIHRoZSBsYXN0IHByaXZhdGUgc3RhdGVcblx0ICogQHBhcmFtIGRhdGFcblx0ICogQHBhcmFtIHN0YXRlXG5cdCAqIEByZXR1cm5zIHsqfVxuXHQgKi9cblx0YXBwbHkoIGRhdGEsIHN0YXRlLCBjaGFuZ2VzICkge1xuXHRcdHJldHVybiBzdGF0ZTtcblx0fVxuXHRcblx0LyoqXG5cdCAqIERlYm91bmNlIHRoaXMgc3RvcmUgcHJvcGFnYXRpb24gKCAmIHJlZHVjaW5nIClcblx0ICogQHBhcmFtIGNiXG5cdCAqL1xuXHRzdGFiaWxpemUoIGNiICkge1xuXHRcdGNiICYmIHRoaXMub25jZSgnc3RhYmxlJywgY2IpO1xuXHRcdHRoaXMuX3N0YWJsZSAmJiB0aGlzLmVtaXQoJ3Vuc3RhYmxlJywgdGhpcy5zdGF0ZSwgdGhpcy5kYXRhKTtcblx0XHRcblx0XHR0aGlzLl9zdGFibGUgPSBmYWxzZTtcblx0XHRcblx0XHRpZiAoIHRoaXMuX3N0YWJpbGl6ZXIgKVxuXHRcdFx0cmV0dXJuO1xuXHRcdFxuXHRcdHRoaXMuX3N0YWJpbGl6ZXIgPSBUYXNrU2VxdWVuY2VyLnB1c2hUYXNrKHRoaXMsICdwdXNoU3RhdGUnKTtcblx0fVxuXHRcblx0LyoqXG5cdCAqIFdhbGsgbiBnZXRcblx0ICogQHBhcmFtIHBhdGhcblx0ICogQHBhcmFtIGlcblx0ICogQHBhcmFtIG9ialxuXHQgKiBAcmV0dXJucyB7Knx7fX1cblx0ICovXG5cdHJldHJpZXZlKCBwYXRoLCBpID0gMCwgb2JqID0gdGhpcy5kYXRhICkge1xuXHRcdHBhdGggPSBpcy5zdHJpbmcocGF0aCkgPyBwYXRoLnNwbGl0KCcuJykgOiBwYXRoO1xuXHRcdHJldHVybiAhb2JqIHx8ICFwYXRoIHx8ICFwYXRoLmxlbmd0aFxuXHRcdCAgICAgICA/IG9ialxuXHRcdCAgICAgICA6IHBhdGgubGVuZ3RoID09IGkgKyAxXG5cdFx0ICAgICAgICAgPyBvYmpbcGF0aFtpXV1cblx0XHQgICAgICAgICA6IHRoaXMucmV0cmlldmUocGF0aCwgaSArIDEsIG9ialtwYXRoW2ldXSk7XG5cdH1cblx0XG5cdGRpc3BhdGNoKCBhY3Rpb24sIC4uLmFyZ3ogKSB7XG5cdFx0dGhpcy5zY29wZU9iai5kaXNwYXRjaChhY3Rpb24sIC4uLmFyZ3opO1xuXHR9XG5cdFxuXHR0cmlnZ2VyKCBhY3Rpb24sIC4uLmFyZ3ogKSB7XG5cdFx0bGV0IHsgYWN0aW9ucyB9ID0gdGhpcy5jb25zdHJ1Y3Rvcjtcblx0XHRpZiAoIGFjdGlvbnMgJiYgYWN0aW9uc1thY3Rpb25dICkge1xuXHRcdFx0bGV0IG5zID0gYWN0aW9uc1thY3Rpb25dLmNhbGwodGhpcywgLi4uYXJneik7XG5cdFx0XHRucyAmJiB0aGlzLnNldFN0YXRlKG5zKTtcblx0XHR9XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBTZXQgJiBQdXNoIHRoZSByZXN1bHQgZGF0YSB0byBmb2xsb3dlcnMgaWYgc3RhYmxlXG5cdCAqIEBwYXJhbSBjYlxuXHQgKi9cblx0cHVzaCggZGF0YSwgZm9yY2UsIGNiICkge1xuXHRcdGNiICAgID0gZm9yY2UgPT09IHRydWUgPyBjYiA6IGZvcmNlO1xuXHRcdGZvcmNlID0gZm9yY2UgPT09IHRydWU7XG5cdFx0aWYgKCAhZm9yY2UgJiZcblx0XHRcdChcblx0XHRcdFx0IXRoaXMuaGFzRGF0YUNoYW5nZShkYXRhKVxuXHRcdFx0KVxuXHRcdCkge1xuXHRcdFx0Y2IgJiYgY2IoKTtcblx0XHRcdGlmICggIXRoaXMuX19sb2Nrcy5hbGwgKSB7XG5cdFx0XHRcdGxldCBzdGFibGUgICA9IHRoaXMuX3N0YWJsZTtcblx0XHRcdFx0dGhpcy5fc3RhYmxlID0gdHJ1ZTtcblx0XHRcdFx0IXN0YWJsZSAmJiB0aGlzLmVtaXQoJ3N0YWJsZScsIHRoaXMuc3RhdGUsIHRoaXMuZGF0YSk7XG5cdFx0XHRcdHRoaXMuX3N0YWJpbGl6ZXIgPSBudWxsO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRcblx0XHR0aGlzLmRhdGEgPSBkYXRhO1xuXHRcdHRoaXMud2FpdCgpO1xuXHRcdHRoaXMucmVsZWFzZShjYik7XG5cdFx0XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBDYWxsIHRoZSBhcHBseSBmbiB1c2luZyB0aGUgY3VycmVudCBhY2N1bXVsYXRlZCBzdGF0ZSB1cGRhdGUgdGhlbiwgcHVzaCB0aGVcblx0ICogcmVzdWx0aW5nIGRhdGEgaWYgc3RhYmxlXG5cdCAqIEBwYXJhbSBmb3JjZWRTdGF0ZVxuXHQgKi9cblx0cHVzaFN0YXRlKCBmb3JjZWRTdGF0ZSApIHtcblx0XHRpZiAoICFmb3JjZWRTdGF0ZSAmJiAhdGhpcy5fY2hhbmdlc1NXICYmIHRoaXMuZGF0YSApXG5cdFx0XHRyZXR1cm47XG5cdFx0XG5cdFx0bGV0IG5leHRTdGF0ZSA9IGZvcmNlZFN0YXRlIHx8IHRoaXMuX25leHRTdGF0ZSB8fCB0aGlzLnN0YXRlLFxuXHRcdCAgICBuZXh0RGF0YTtcblx0XHRPYmplY3Qua2V5cyhuZXh0U3RhdGUpLmZvckVhY2goXG5cdFx0XHRrZXkgPT4gKG5leHRTdGF0ZVtrZXldID09PSB1bmRlZmluZWQgJiYgKGRlbGV0ZSBuZXh0U3RhdGVba2V5XSkpXG5cdFx0KTtcblx0XHRuZXh0RGF0YSA9IHRoaXMuYXBwbHkodGhpcy5kYXRhLCBuZXh0U3RhdGUsIHRoaXMuX2NoYW5nZXNTVyk7XG5cdFx0XG5cdFx0dGhpcy5fc3RhYmlsaXplciA9IG51bGw7XG5cdFx0dGhpcy5zdGF0ZSAgICAgICA9IG5leHRTdGF0ZTtcblx0XHR0aGlzLl9uZXh0U3RhdGUgID0gbnVsbDtcblx0XHR0aGlzLl9jaGFuZ2VzU1cgID0gbnVsbDtcblx0XHRcblx0XHRpZiAoICFmb3JjZWRTdGF0ZSAmJlxuXHRcdFx0KFxuXHRcdFx0XHQhdGhpcy5oYXNEYXRhQ2hhbmdlKG5leHREYXRhKVxuXHRcdFx0KVxuXHRcdCkge1xuXHRcdFx0aWYgKCAhdGhpcy5fX2xvY2tzLmFsbCApIHtcblx0XHRcdFx0bGV0IHN0YWJsZSAgID0gdGhpcy5fc3RhYmxlO1xuXHRcdFx0XHR0aGlzLl9zdGFibGUgPSB0cnVlO1xuXHRcdFx0XHQhc3RhYmxlICYmIHRoaXMuZW1pdCgnc3RhYmxlJywgdGhpcy5zdGF0ZSwgdGhpcy5kYXRhKTtcblx0XHRcdFx0dGhpcy5fc3RhYmlsaXplciA9IG51bGw7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdFxuXHRcdHRoaXMuZGF0YSA9IG5leHREYXRhO1xuXHRcdHRoaXMud2FpdCgpO1xuXHRcdHRoaXMucmVsZWFzZSgpO1xuXHR9XG5cdFxuXHQvKipcblx0ICogQWRkICdwU3RhdGUnIHRvIHRoZSBjdXJyZW50IGFjY3VtdWxhdGVkIHN0YXRlIHVwZGF0ZXNcblx0ICogJiB3YWl0IHNvdXJjZSBzdG9yZXMgc3RhYmlsaXphdGlvbiBiZWZvcmUgcHVzaGluZyB0aGVzZSBzdGF0ZSB1cGRhdGVzXG5cdCAqIEBwYXJhbSBwU3RhdGVcblx0ICogQHBhcmFtIGNiXG5cdCAqL1xuXHRzZXRTdGF0ZSggcFN0YXRlLCBjYiwgc3luYyApIHtcblx0XHRsZXQgY2hhbmdlLFxuXHRcdCAgICBjaGFuZ2VzICAgPSB0aGlzLl9jaGFuZ2VzU1cgPSB0aGlzLl9jaGFuZ2VzU1cgfHwge30sXG5cdFx0ICAgIG5leHRTdGF0ZSA9IHRoaXMuX25leHRTdGF0ZSA9IHRoaXMuX25leHRTdGF0ZSB8fCB7IC4uLnRoaXMuc3RhdGUgfSxcblx0XHQgICAga2V5O1xuXHRcdGZvciAoIGtleSBpbiBwU3RhdGUgKVxuXHRcdFx0aWYgKCAhdGhpcy5zdGF0ZVxuXHRcdFx0XHR8fCBjaGFuZ2VzLmhhc093blByb3BlcnR5KGtleSkvLyB0b2RvXG5cdFx0XHRcdCYmIChcblx0XHRcdFx0XHRwU3RhdGVba2V5XSAhPT0gY2hhbmdlc1trZXldXG5cdFx0XHRcdCkgfHwgcFN0YXRlLmhhc093blByb3BlcnR5KGtleSlcblx0XHRcdFx0JiYgKFxuXHRcdFx0XHRcdHBTdGF0ZVtrZXldICE9PSB0aGlzLnN0YXRlW2tleV1cblx0XHRcdFx0KSApIHtcblx0XHRcdFx0Y2hhbmdlICAgICAgICAgPSB0cnVlO1xuXHRcdFx0XHRuZXh0U3RhdGVba2V5XSA9IGNoYW5nZXNba2V5XSA9IHBTdGF0ZVtrZXldO1xuXHRcdFx0fVxuXHRcdFxuXHRcdGlmICggIXRoaXMuc2hvdWxkQXBwbHkobmV4dFN0YXRlKSApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0XG5cdFx0aWYgKCBzeW5jICkge1xuXHRcdFx0dGhpcy5wdXNoU3RhdGUoKTtcblx0XHRcdGNiICYmIGNiKCk7XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0aWYgKCBjaGFuZ2UgKSB7XG5cdFx0XHRcdHRoaXMuc3RhYmlsaXplKGNiKTtcblx0XHRcdH1cblx0XHRcdGVsc2UgY2IgJiYgY2IoKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBVcGRhdGUgdGhlIGN1cnJlbnQgc3RhdGUgJiBwdXNoIGl0XG5cdCAqIEBwYXJhbSBwU3RhdGVcblx0ICogQHBhcmFtIGNiXG5cdCAqL1xuXHRzZXRTdGF0ZVN5bmMoIHBTdGF0ZSApIHtcblx0XHRsZXQgaSAgICAgICA9IDAsIGNoYW5nZSxcblx0XHQgICAgY2hhbmdlcyA9IHRoaXMuX2NoYW5nZXNTVyA9IHRoaXMuX2NoYW5nZXNTVyB8fCB7fTtcblx0XHRmb3IgKCBsZXQgayBpbiBwU3RhdGUgKVxuXHRcdFx0aWYgKCAhdGhpcy5zdGF0ZSB8fCBwU3RhdGUuaGFzT3duUHJvcGVydHkoaylcblx0XHRcdFx0JiYgKFxuXHRcdFx0XHRcdHBTdGF0ZVtrXSAhPT0gdGhpcy5zdGF0ZVtrXVxuXHRcdFx0XHRcdC8vfHxcblx0XHRcdFx0XHQvLyh0aGlzLnN0YXRlW2tdICYmIHBTdGF0ZVtrXSAmJiAocFN0YXRlW2tdLl9yZXYgIT0gdGhpcy5fcmV2c1trXSkpLy8gcmV2L2hhc2ggdXBkYXRlXG5cdFx0XHRcdCkgKSB7XG5cdFx0XHRcdGNoYW5nZSAgICAgICAgPSB0cnVlO1xuXHRcdFx0XHR0aGlzLl9yZXZzW2tdID0gcFN0YXRlW2tdICYmIHBTdGF0ZVtrXS5fcmV2IHx8IHRydWU7XG5cdFx0XHRcdGNoYW5nZXNba10gICAgPSBwU3RhdGVba107XG5cdFx0XHR9XG5cdFx0dGhpcy5zaG91bGRBcHBseSh7IC4uLih0aGlzLnN0YXRlIHx8IHt9KSwgLi4uY2hhbmdlcyB9KSAmJiB0aGlzLnB1c2hTdGF0ZSgpO1xuXHRcdHJldHVybiB0aGlzLmRhdGE7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBnZXQgYSBzdG9yZS1rZXkgcGFpciBmb3IgU3RvcmU6Om1hcFxuXHQgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuXHQgKiBAcmV0dXJucyB7e3N0b3JlOiBTdG9yZSwgbmFtZTogKn19XG5cdCAqL1xuXHRhcyggbmFtZSApIHtcblx0XHRyZXR1cm4geyBzdG9yZTogdGhpcywgbmFtZSB9O1xuXHR9XG5cdFxuXHRvbiggbGlzdHMgKSB7XG5cdFx0aWYgKCAhaXMuc3RyaW5nKGxpc3RzKSAmJiBsaXN0cyApXG5cdFx0XHRPYmplY3Qua2V5cyhsaXN0cykuZm9yRWFjaChrID0+IHN1cGVyLm9uKGssIGxpc3RzW2tdKSk7XG5cdFx0ZWxzZSBzdXBlci5vbiguLi5hcmd1bWVudHMpO1xuXHR9XG5cdFxuXHRyZW1vdmVMaXN0ZW5lciggbGlzdHMgKSB7XG5cdFx0aWYgKCAhaXMuc3RyaW5nKGxpc3RzKSAmJiBsaXN0cyApXG5cdFx0XHRPYmplY3Qua2V5cyhsaXN0cykuZm9yRWFjaChrID0+IHN1cGVyLnJlbW92ZUxpc3RlbmVyKGssIGxpc3RzW2tdKSk7XG5cdFx0ZWxzZSBzdXBlci5yZW1vdmVMaXN0ZW5lciguLi5hcmd1bWVudHMpO1xuXHR9XG5cdFxuXHQvKipcblx0ICogaXMgY29tcGxldGUgKGFsbCByZXF1aWVyZWQga2V5cyBhcmUgaGVyZSlcblx0ICogQHJldHVybnMgYm9vbFxuXHQgKi9cblx0aXNDb21wbGV0ZSggc3RhdGUgPSB0aGlzLnN0YXRlICkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQhdGhpcy5fcmVxdWlyZVxuXHRcdFx0fHwgIXRoaXMuX3JlcXVpcmUubGVuZ3RoXG5cdFx0XHR8fCBzdGF0ZSAmJiB0aGlzLl9yZXF1aXJlLnJlZHVjZShcblx0XHRcdFx0KCByLCBrZXkgKSA9PiAociAmJiBzdGF0ZVtrZXldKSxcblx0XHRcdFx0dHJ1ZVxuXHRcdFx0KVxuXHRcdCk7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBpcyBzdGFibGVcblx0ICogQHJldHVybnMgYm9vbFxuXHQgKi9cblx0aXNTdGFibGUoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX3N0YWJsZTtcblx0fVxuXHRcblx0LyoqXG5cdCAqIFNlcmlhbGl6ZSBzdGF0ZSAmIGRhdGEgd2l0aCBzb3VyY2VzIHJlZnNcblx0ICogQHJldHVybnMgYm9vbFxuXHQgKi9cblx0c2VyaWFsaXplKCBjZmcgPSB7fSwgb3V0cHV0ID0ge30gKSB7XG5cdFx0XG5cdFx0bGV0IHNJZCAgICAgICAgPSBjZmcucGFyZW50QWxpYXMgfHwgdGhpcy5zY29wZU9iai5faWQsXG5cdFx0ICAgIHJlZnNDb3VudCAgPSAwLFxuXHRcdCAgICByZWZzICAgICAgID1cblx0XHRcdCAgICAhY2ZnLm5vcmVmcyAmJiBpcy5hcnJheSh0aGlzLl91c2UpICYmIHRoaXMuX3VzZS5yZWR1Y2UoXG5cdFx0XHQgICAgKCBtYXAsIGtleSApID0+IHtcblx0XHRcdFx0ICAgIGxldCByZWYgICA9IHRoaXMuJHNjb3BlLnBhcnNlUmVmKGtleSksXG5cdFx0XHRcdCAgICAgICAgc3RvcmUgPSB0aGlzLiRzdG9yZXNbcmVmLnN0b3JlSWRdO1xuXHRcdFx0XHQgICAgaWYgKCBzdG9yZSAmJiBTdG9yZS5pc1N0b3JlKHN0b3JlKSAmJiAhc3RvcmUuc2NvcGVPYmouXy5pc0xvY2FsSWQgKVxuXHRcdFx0XHRcdCAgICByZWZzQ291bnQrKywgbWFwW3JlZi5hbGlhc10gPSByZWYucGF0aDtcblx0XHRcdFx0XG5cdFx0XHRcdCAgICByZXR1cm4gbWFwO1xuXHRcdFx0ICAgIH0sIHt9XG5cdFx0XHQgICAgKSxcblx0XHQgICAgc3RhdGUgICAgICA9IHRoaXMuc3RhdGUgfHwge30sXG5cdFx0ICAgIHBlcnNpc3RlbnQgPSB0aGlzLnNob3VsZFNlcmlhbGl6ZSgpO1xuXHRcdFxuXHRcdGlmICggIXBlcnNpc3RlbnQgKSB7XG5cdFx0XHRrZXlXYWxrblNldChcblx0XHRcdFx0b3V0cHV0LFxuXHRcdFx0XHQoc0lkICsgJy8nICsgdGhpcy5uYW1lKSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGRhdGFSZWZzOiBjZmcuZGF0YVJlZnMsXG5cdFx0XHRcdFx0cmVmc1xuXHRcdFx0XHR9XG5cdFx0XHQpO1xuXHRcdFx0cmV0dXJuIG91dHB1dDtcblx0XHR9XG5cdFx0XG5cdFx0bGV0XG5cdFx0XHRzdGF0ZUtleXMgICA9IE9iamVjdC5rZXlzKHN0YXRlKSB8fCBbXSxcblx0XHRcdHN0YXRlUmVmcyAgID0gc3RhdGVLZXlzLm1hcChrID0+IHN0YXRlW2tdKSxcblx0XHRcdGluUmVmc0NvdW50ID0gMCxcblx0XHRcdGRhdGFSZWZzICAgID0gY2ZnLmRhdGFSZWZzIHx8IHt9LFxuXHRcdFx0aW5SZWZzICAgICAgPVxuXHRcdFx0XHQhY2ZnLm5vcmVmcyAmJiB0aGlzLmRhdGEgJiYgKE9iamVjdC5rZXlzKHRoaXMuZGF0YSkucmVkdWNlKFxuXHRcdFx0XHQoIG1hcCwga2V5ICkgPT4ge1xuXHRcdFx0XHRcdGxldCByZWYgPSBzdGF0ZVJlZnMuaW5kZXhPZih0aGlzLmRhdGFba2V5XSlcblx0XHRcdFx0XHRpZiAoIHJlZiAhPSAtMSApXG5cdFx0XHRcdFx0XHRpblJlZnNDb3VudCsrLCBtYXBba2V5XSA9IHN0YXRlS2V5c1tyZWZdO1xuXHRcdFx0XHRcdHJldHVybiBtYXA7XG5cdFx0XHRcdH0sIHt9XG5cdFx0XHRcdCkpLFxuXHRcdFx0c25hcCAgICAgICAgPSB7XG5cdFx0XHRcdGRhdGFSZWZzOiBjZmcuZGF0YVJlZnMsXG5cdFx0XHRcdHN0YXRlICAgOiBzdGF0ZSAmJlxuXHRcdFx0XHRcdChcblx0XHRcdFx0XHRcdGNmZy5ub3JlZnNcblx0XHRcdFx0XHRcdD8geyAuLi5zdGF0ZSB9XG5cdFx0XHRcdFx0XHQ6IE9iamVjdC5rZXlzKHN0YXRlKS5yZWR1Y2UoKCBoLCBrICkgPT4gKCFyZWZzW2tdICYmIChoW2tdID0gc3RhdGVba10pLCBoKSwge30pXG5cdFx0XHRcdFx0KSxcblx0XHRcdFx0ZGF0YSAgICA6IChcblx0XHRcdFx0XHRcdHRoaXMuZGF0YSAmJlxuXHRcdFx0XHRcdFx0dGhpcy5kYXRhLl9fcHJvdG9fXyA9PT0gb2JqUHJvdG8gP1xuXHRcdFx0XHRcdFx0T2JqZWN0XG5cdFx0XHRcdFx0XHRcdC5rZXlzKHRoaXMuZGF0YSlcblx0XHRcdFx0XHRcdFx0LnJlZHVjZShcblx0XHRcdFx0XHRcdFx0XHQoIGgsIGsgKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAoICFpblJlZnNba10gJiYgIWRhdGFSZWZzW2tdICkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRoW2tdID0gdGhpcy5kYXRhW2tdO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRpblJlZnNDb3VudCsrO1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIGhcblx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdHt9XG5cdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcblx0XHRcdFx0XHRcdChpcy5ib29sKHRoaXMuZGF0YSlcblx0XHRcdFx0XHRcdFx0fHwgaXMubnVtYmVyKHRoaXMuZGF0YSlcblx0XHRcdFx0XHRcdFx0fHwgaXMuc3RyaW5nKHRoaXMuZGF0YSkpICYmIHRoaXMuZGF0YVxuXHRcdFx0XHRcdClcblx0XHRcdFx0XHR8fCB1bmRlZmluZWRcblx0XHRcdFx0XG5cdFx0XHR9O1xuXHRcdFxuXHRcdHJlZnMgJiYgcmVmc0NvdW50ICYmIChzbmFwLnJlZnMgPSByZWZzKTtcblx0XHRpblJlZnMgJiYgaW5SZWZzQ291bnQgJiYgKFxuXHRcdFx0c25hcC5pblJlZnMgPSBpblJlZnMpO1xuXHRcdFxuXHRcdFxuXHRcdGtleVdhbGtuU2V0KFxuXHRcdFx0b3V0cHV0LFxuXHRcdFx0KHNJZCArICcvJyArIHRoaXMubmFtZSksXG5cdFx0XHRzbmFwXG5cdFx0KTtcblx0XHRyZXR1cm4gb3V0cHV0O1xuXHR9XG5cdFxuXHQvKipcblx0ICogcmVzdG9yZSBzdGF0ZSAmIGRhdGFcblx0ICogQHJldHVybnMgYm9vbFxuXHQgKi9cblx0cmVzdG9yZSggc25hcHNob3QsIGltbWVkaWF0ZSApIHtcblx0XHRzbmFwc2hvdCA9IHNuYXBzaG90XG5cdFx0XHQmJiBrZXlXYWxrbkdldChzbmFwc2hvdCwgdGhpcy5zY29wZU9iai5faWQgKyAnLycgKyB0aGlzLm5hbWUpXG5cdFx0XHR8fCB0aGlzLiRzY29wZS50YWtlU25hcHNob3RCeUtleSh0aGlzLnNjb3BlT2JqLl9pZCArICcvJyArIHRoaXMubmFtZSk7XG5cdFx0XG5cdFx0aWYgKCAhc25hcHNob3QgKVxuXHRcdFx0cmV0dXJuO1xuXHRcdFxuXHRcdGlmICggc25hcHNob3QgKSB7XG5cdFx0XHRcblx0XHRcdGlmICggIXRoaXMuaXNTdGFibGUoKSAmJiAhaW1tZWRpYXRlIClcblx0XHRcdFx0dGhpcy50aGVuKCgpID0+IHJlc3RvcmUoc25hcHNob3QpKTtcblx0XHRcdFxuXHRcdFx0dGhpcy5zdGF0ZSA9IHsgLi4uc25hcHNob3Quc3RhdGUgfTtcblx0XHRcdHNuYXBzaG90LnJlZnMgJiYgT2JqZWN0LmtleXMoc25hcHNob3QucmVmcykuZm9yRWFjaChcblx0XHRcdFx0KCBrZXkgKSA9PiB7Ly90b2RvXG5cdFx0XHRcdFx0dGhpcy5zdGF0ZVtrZXldID0gdGhpcy4kc2NvcGUucmV0cmlldmUoc25hcHNob3QucmVmc1trZXldKTtcblx0XHRcdFx0fVxuXHRcdFx0KVxuXHRcdFx0XG5cdFx0XHRcblx0XHRcdGlmICggc25hcHNob3QuaW5SZWZzID09PSB0cnVlICkge1xuXHRcdFx0XHR0aGlzLmRhdGEgPSB7IC4uLnRoaXMuc3RhdGUgfTtcblx0XHRcdH1cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHR0aGlzLmRhdGEgPSBzbmFwc2hvdC5kYXRhO1xuXHRcdFx0XHRzbmFwc2hvdC5pblJlZnMgJiYgT2JqZWN0LmtleXMoc25hcHNob3QuaW5SZWZzKS5mb3JFYWNoKFxuXHRcdFx0XHRcdCgga2V5ICkgPT4gey8vdG9kb1xuXHRcdFx0XHRcdFx0dGhpcy5kYXRhW2tleV0gPSB0aGlzLnN0YXRlW3NuYXBzaG90LmluUmVmc1trZXldXTtcblx0XHRcdFx0XHRcdC8vZWxzZVxuXHRcdFx0XHRcdFx0Ly8gICAgY29uc29sZS53YXJuKCdub3QgZm91bmQgOiAnLCBrZXksIHNuYXAgJiYgc25hcC5yZWZzWyBrZXkgXSlcblx0XHRcdFx0XHR9XG5cdFx0XHRcdClcblx0XHRcdH1cblx0XHRcdGlmICggc25hcHNob3QuZGF0YVJlZnMgKSB7XG5cdFx0XHRcdHRoaXMuZGF0YSA9IHRoaXMuZGF0YSB8fCB7fTtcblx0XHRcdFx0T2JqZWN0LmtleXMoc25hcHNob3QuZGF0YVJlZnMpLmZvckVhY2goXG5cdFx0XHRcdFx0KCBrZXkgKSA9PiB7Ly90b2RvXG5cdFx0XHRcdFx0XHR0aGlzLiRzY29wZS5yZXN0b3JlUmVmUGF0aChzbmFwc2hvdC5kYXRhUmVmc1trZXldKTtcblx0XHRcdFx0XHRcdHRoaXMuZGF0YVtrZXldID0gdGhpcy4kc2NvcGUucmV0cmlldmUoc25hcHNob3QuZGF0YVJlZnNba2V5XSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQpXG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdFxuXHRcdH1cblx0fVxuXHRcblx0LyoqXG5cdCAqIEJpbmQgdGhpcyBzdG9yZSBjaGFuZ2VzIHRvIHRoZSBnaXZlbiBjb21wb25lbnQta2V5XG5cdCAqIEBwYXJhbSBvYmoge1JlYWN0LkNvbXBvbmVudHxTdG9yZXxmdW5jdGlvbilcblx0ICogQHBhcmFtIGtleSB7c3RyaW5nfSBvcHRpb25hbCBrZXkgd2hlcmUgdG8gbWFwIHRoZSBwdWJsaWMgc3RhdGVcblx0ICovXG5cdGJpbmQoIG9iaiwga2V5LCBzZXRJbml0aWFsID0gdHJ1ZSwgcGF0aCApIHtcblx0XHR0aGlzLl9mb2xsb3dlcnMucHVzaChbb2JqLCBrZXksIHBhdGhdKTtcblx0XHRpZiAoIHNldEluaXRpYWwgJiYgdGhpcy5kYXRhICYmIHRoaXMuX3N0YWJsZSApIHtcblx0XHRcdGxldCBkYXRhID0gcGF0aCA/IHRoaXMucmV0cmlldmUocGF0aCkgOiB0aGlzLmRhdGE7XG5cdFx0XHRpZiAoIHR5cGVvZiBvYmogIT0gXCJmdW5jdGlvblwiICkge1xuXHRcdFx0XHRpZiAoIGtleSApIG9iai5zZXRTdGF0ZSh7IFtrZXldOiBkYXRhIH0pO1xuXHRcdFx0XHRlbHNlIG9iai5zZXRTdGF0ZShkYXRhKTtcblx0XHRcdH1cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHRvYmooZGF0YSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdFxuXHQvKipcblx0ICogVW4gYmluZCB0aGlzIHN0b3JlIG9mZiB0aGUgZ2l2ZW4gY29tcG9uZW50LWtleVxuXHQgKiBAcGFyYW0gb2JqXG5cdCAqIEBwYXJhbSBrZXlcblx0ICogQHJldHVybnMge0FycmF5LjwqPn1cblx0ICovXG5cdHVuQmluZCggb2JqLCBrZXksIHBhdGggKSB7XG5cdFx0bGV0IGZvbGxvd2VycyA9IHRoaXMuX2ZvbGxvd2Vycyxcblx0XHQgICAgaSAgICAgICAgID0gZm9sbG93ZXJzICYmIGZvbGxvd2Vycy5sZW5ndGg7XG5cdFx0d2hpbGUgKCBmb2xsb3dlcnMgJiYgaS0tIClcblx0XHRcdGlmICggZm9sbG93ZXJzW2ldWzBdID09PSBvYmogJiYgZm9sbG93ZXJzW2ldWzFdID09PSBrZXkgJiYgZm9sbG93ZXJzW2ldWzJdID09PSBwYXRoIClcblx0XHRcdFx0cmV0dXJuIGZvbGxvd2Vycy5zcGxpY2UoaSwgMSk7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBvbmNlKCdzdGFibGUnLCBjYilcblx0ICogQHBhcmFtIG9iaiB7UmVhY3QuQ29tcG9uZW50fFN0b3JlfGZ1bmN0aW9uKVxuXHQgKiBAcGFyYW0ga2V5IHtzdHJpbmd9IG9wdGlvbmFsIGtleSB3aGVyZSB0byBtYXAgdGhlIHB1YmxpYyBzdGF0ZVxuXHQgKi9cblx0dGhlbiggY2IgKSB7XG5cdFx0aWYgKCB0aGlzLl9zdGFibGUgKVxuXHRcdFx0cmV0dXJuIGNiKHRoaXMuZGF0YSk7XG5cdFx0dGhpcy5vbmNlKCdzdGFibGUnLCBlID0+IGNiKHRoaXMuZGF0YSkpO1xuXHR9XG5cdFxuXHQvKipcblx0ICogQWRkIGEgbG9jayBzbyB0aGUgc3RvcmUgd2lsbCBub3QgcHJvcGFnIGl0IGRhdGEgdW50aWxsIHJlbGVhc2UoKSBpcyBjYWxsXG5cdCAqIEBwYXJhbSBwcmV2aW91cyB7U3RvcmV8bnVtYmVyfEFycmF5fSBAb3B0aW9uYWwgd2YgdG8gd2FpdCwgcmVsZWFzZXMgdG8gd2FpdCBvclxuXHQgKiAgICAgYXJyYXkgb2Ygc3R1ZmYgdG8gd2FpdFxuXHQgKiBAcmV0dXJucyB7dGhpc31cblx0ICovXG5cdHdhaXQoIHByZXZpb3VzICkge1xuXHRcdGlmICggdHlwZW9mIHByZXZpb3VzID09IFwibnVtYmVyXCIgKVxuXHRcdFx0cmV0dXJuIHRoaXMuX19sb2Nrcy5hbGwgKz0gcHJldmlvdXM7XG5cdFx0aWYgKCBpcy5hcnJheShwcmV2aW91cykgKVxuXHRcdFx0cmV0dXJuIHByZXZpb3VzLm1hcCh0aGlzLndhaXQuYmluZCh0aGlzKSk7XG5cdFx0XG5cdFx0dGhpcy5fc3RhYmxlICYmIHRoaXMuZW1pdCgndW5zdGFibGUnLCB0aGlzLnN0YXRlLCB0aGlzLmRhdGEpO1xuXHRcdHRoaXMuX3N0YWJsZSA9IGZhbHNlO1xuXHRcdHRoaXMuX19sb2Nrcy5hbGwrKztcblx0XHRcblx0XHRsZXQgcmVhc29uID0gaXMuc3RyaW5nKHByZXZpb3VzKSA/IHByZXZpb3VzIDogbnVsbDtcblx0XHRpZiAoIHJlYXNvbiApIHtcblx0XHRcdHRoaXMuX19sb2Nrc1tyZWFzb25dID0gdGhpcy5fX2xvY2tzW3JlYXNvbl0gfHwgMDtcblx0XHRcdHRoaXMuX19sb2Nrc1tyZWFzb25dKys7XG5cdFx0fVxuXHRcdGlmICggcHJldmlvdXMgJiYgaXMuZm4ocHJldmlvdXMudGhlbikgKSB7XG5cdFx0XHRwcmV2aW91cy50aGVuKHRoaXMucmVsZWFzZS5iaW5kKHRoaXMsIG51bGwpKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBEZWNyZWFzZSBsb2NrcyBmb3IgdGhpcyBzdG9yZSwgaWYgaXQgcmVhY2ggMCAsXG5cdCAqIGl0IHdpbGwgYmUgcHJvcGFnYXRlZCB0byB0aGUgZm9sbG93ZXJzLFxuXHQgKiB0aGVuLCBhbGwgc3R1ZmYgcGFzc2VkIHRvIFwidGhlblwiIGNhbGwgYmFjayB3aWxsIGJlIGV4ZWMgLyByZWxlYXNlZFxuXHQgKiBAcGFyYW0gZGVzeW5jXG5cdCAqIEByZXR1cm5zIHsqfVxuXHQgKi9cblx0cmVsZWFzZSggcmVhc29uLCBjYiApIHtcblx0XHRsZXQgX3N0YXRpYyA9IHRoaXMuY29uc3RydWN0b3IsIG1lID0gdGhpcztcblx0XHRsZXQgaSAgICAgICA9IDAsIHdhc1N0YWJsZSA9IHRoaXMuX3N0YWJsZTtcblx0XHRcblx0XHRpZiAoIGlzLmZuKHJlYXNvbikgKSB7XG5cdFx0XHRjYiAgICAgPSByZWFzb247XG5cdFx0XHRyZWFzb24gPSBudWxsO1xuXHRcdH1cblx0XHRcblx0XHRpZiAoIHJlYXNvbiApIHtcblx0XHRcdGlmICggdGhpcy5fX2xvY2tzW3JlYXNvbl0gPT0gMCApXG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoXCJSZWxlYXNlIG1vcmUgdGhhbiBsb2NraW5nICFcIiwgcmVhc29uKTtcblx0XHRcdHRoaXMuX19sb2Nrc1tyZWFzb25dID0gdGhpcy5fX2xvY2tzW3JlYXNvbl0gfHwgMDtcblx0XHRcdHRoaXMuX19sb2Nrc1tyZWFzb25dLS07XG5cdFx0fVxuXHRcdFxuXHRcdGlmICggIXJlYXNvbiAmJiB0aGlzLl9fbG9ja3MuYWxsID09IDAgKVxuXHRcdFx0Y29uc29sZS5lcnJvcihcIlJlbGVhc2UgbW9yZSB0aGFuIGxvY2tpbmcgIVwiKTtcblx0XHRcblx0XHRpZiAoICEtLXRoaXMuX19sb2Nrcy5hbGwgJiYgdGhpcy5pc0NvbXBsZXRlKCkgKSB7XG5cdFx0XHRsZXQgcHJvcGFnICAgPSB0aGlzLnNob3VsZFByb3BhZyh0aGlzLmRhdGEpO1xuXHRcdFx0dGhpcy5fc3RhYmxlID0gdHJ1ZTtcblx0XHRcdHByb3BhZyAmJiB0aGlzLl9yZXYrKzsvL1xuXHRcdFx0aWYgKCBwcm9wYWcgJiYgdGhpcy5fZm9sbG93ZXJzLmxlbmd0aCApXG5cdFx0XHRcdHRoaXMuX2ZvbGxvd2Vycy5mb3JFYWNoKGZ1bmN0aW9uIHByb3BhZyggZm9sbG93ZXIgKSB7XG5cdFx0XHRcdFx0bGV0IGRhdGEgPSBmb2xsb3dlclsyXSA/IG1lLnJldHJpZXZlKGZvbGxvd2VyWzJdKSA6IG1lLmRhdGE7XG5cdFx0XHRcdFx0Ly9pZiAoICFkYXRhICkgcmV0dXJuO1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdGlmICggdHlwZW9mIGZvbGxvd2VyWzBdID09IFwiZnVuY3Rpb25cIiApIHtcblx0XHRcdFx0XHRcdGZvbGxvd2VyWzBdKGRhdGEpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHRcdC8vY2IgJiYgaSsrO1xuXHRcdFx0XHRcdFx0Zm9sbG93ZXJbMF0uc2V0U3RhdGUoXG5cdFx0XHRcdFx0XHRcdChmb2xsb3dlclsxXSkgPyB7IFtmb2xsb3dlclsxXV06IGRhdGEgfVxuXHRcdFx0XHRcdFx0XHQgICAgICAgICAgICAgIDogZGF0YVxuXHRcdFx0XHRcdFx0XHQvLyxcblx0XHRcdFx0XHRcdFx0Ly9jYiAmJiAoXG5cdFx0XHRcdFx0XHRcdC8vICAgICgpID0+ICghKC0taSkgJiYgY2IoKSlcblx0XHRcdFx0XHRcdFx0Ly8pXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHQvL2Vsc2Vcblx0XHRcdCF3YXNTdGFibGUgJiYgdGhpcy5lbWl0KCdzdGFibGUnLCB0aGlzLmRhdGEpO1xuXHRcdFx0cHJvcGFnICYmIHRoaXMuZW1pdCgndXBkYXRlJywgdGhpcy5kYXRhKTtcblx0XHRcdGNiICYmIGNiKClcblx0XHR9XG5cdFx0ZWxzZSBjYiAmJiB0aGlzLnRoZW4oY2IpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cdFxuXHRwcm9wYWcoIGRhdGEgKSB7XG5cdFx0dGhpcy5lbWl0KCd1cGRhdGUnLCBkYXRhKTtcblx0fVxuXHRcblx0cmV0YWluKCByZWFzb24gKSB7XG5cdFx0dGhpcy5fX3JldGFpbnMuYWxsKys7XG5cdFx0aWYgKCByZWFzb24gKSB7XG5cdFx0XHR0aGlzLl9fcmV0YWluc1tyZWFzb25dID0gdGhpcy5fX3JldGFpbnNbcmVhc29uXSB8fCAwO1xuXHRcdFx0dGhpcy5fX3JldGFpbnNbcmVhc29uXSsrO1xuXHRcdH1cblx0fVxuXHRcblx0ZGlzcG9zZSggcmVhc29uICkge1xuXHRcdC8vY29uc29sZS53YXJuKFwiZGlzcG9zZVwiLCByZWFzb24sIHRoaXMuX19yZXRhaW5zKTtcblx0XHRpZiAoIHJlYXNvbiApIHtcblx0XHRcdGlmICggIXRoaXMuX19yZXRhaW5zW3JlYXNvbl0gKVxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJSUyA6IERpc3Bvc2UgbW9yZSB0aGFuIHJldGFpbmluZyBvbiBzdG9yZSAnXCIgKyB0aGlzLm5hbWUgKyBcIicgOiBcIiArIHJlYXNvbik7XG5cdFx0XHRcblx0XHRcdHRoaXMuX19yZXRhaW5zW3JlYXNvbl0tLTtcblx0XHR9XG5cdFx0aWYgKCB0aGlzLl9fcmV0YWlucy5hbGwgPT0gMCApXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJSUyA6IERpc3Bvc2UgbW9yZSB0aGFuIHJldGFpbmluZyBvbiBzdG9yZSBcIiArIHRoaXMubmFtZSk7XG5cdFx0XG5cdFx0dGhpcy5fX3JldGFpbnMuYWxsLS07XG5cdFx0XG5cdFx0aWYgKCAhdGhpcy5fX3JldGFpbnMuYWxsICkge1xuXHRcdFx0aWYgKCB0aGlzLl9wZXJzaXN0ZW5jZVRtICkge1xuXHRcdFx0XHR0aGlzLl9kZXN0cm95VE0gJiYgY2xlYXJUaW1lb3V0KHRoaXMuX2Rlc3Ryb3lUTSk7XG5cdFx0XHRcdHRoaXMuX2Rlc3Ryb3lUTSA9IHNldFRpbWVvdXQoXG5cdFx0XHRcdFx0ZSA9PiB7XG5cdFx0XHRcdFx0XHR0aGlzLl9kZXN0cm95VE0gPSBudWxsO1xuXHRcdFx0XHRcdFx0Ly90aGlzLnRoZW4ocyA9PiB7XG5cdFx0XHRcdFx0XHQhdGhpcy5fX3JldGFpbnMuYWxsICYmICF0aGlzLmRlYWQgJiYgdGhpcy5kZXN0cm95KClcblx0XHRcdFx0XHRcdC8vfSk7XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR0aGlzLl9wZXJzaXN0ZW5jZVRtXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0Ly90aGlzLnRoZW4ocyA9PlxuXHRcdFx0XHQoIXRoaXMuX19yZXRhaW5zLmFsbCAmJiAhdGhpcy5kZWFkICYmIHRoaXMuZGVzdHJveSgpKVxuXHRcdFx0XHQvLyk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdFxuXHRkZXN0cm95KCkge1xuXHRcdC8vICBjb25zb2xlLmxvZyhcImRlc3Ryb3lcIiwgdGhpcy5fdWlkKTtcblx0XHRcblx0XHR0aGlzLmVtaXQoJ2Rlc3Ryb3knLCB0aGlzKTtcblx0XHRpZiAoIHRoaXMuX3N0YWJpbGl6ZXIgKVxuXHRcdFx0Y2xlYXJUaW1lb3V0KHRoaXMuX3N0YWJpbGl6ZXIpO1xuXHRcdFxuXHRcdGlmICggdGhpcy5fZm9sbG93ZXJzLmxlbmd0aCApXG5cdFx0XHR0aGlzLl9mb2xsb3dlcnMuZm9yRWFjaChcblx0XHRcdFx0KCBmb2xsb3dlciApID0+IHtcblx0XHRcdFx0XHRpZiAoIHR5cGVvZiBmb2xsb3dlclswXSAhPT0gXCJmdW5jdGlvblwiICkge1xuXHRcdFx0XHRcdFx0aWYgKCBmb2xsb3dlclswXS5zdG9yZXMgKVxuXHRcdFx0XHRcdFx0XHRkZWxldGUgZm9sbG93ZXJbMF0uc3RvcmVzW2ZvbGxvd2VyWzFdXTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdCk7XG5cdFx0dGhpcy5fZm9sbG93ZXJzLmxlbmd0aCA9IDA7XG5cdFx0dGhpcy5jb25zdHJ1Y3Rvci5fcmV2ICA9IHRoaXMucmV2O1xuXHRcdHRoaXMuZGVhZCAgICAgICAgICAgICAgPSB0cnVlO1xuXHRcdHRoaXMuX3JldnMgICAgICAgICAgICAgPSB0aGlzLmRhdGEgPSB0aGlzLnN0YXRlID0gdGhpcy5zY29wZSA9IG51bGw7XG5cdFx0dGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoKTtcblx0fVxufVxuXG4vKipcbiAqIGdldCBhIHN0YXRpYyBhbGlhc2VkIHJlZmVyZW5jZSBvZiBhIHN0b3JlXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICogQHJldHVybnMge3tzdG9yZTogU3RvcmUsIG5hbWU6ICp9fVxuICovXG5TdG9yZS5hcyA9IGZ1bmN0aW9uICggbmFtZSApIHtcblx0cmV0dXJuIHsgc3RvcmU6IHRoaXMsIG5hbWUgfTtcbn1cblxuLyoqXG4gKiBAdG9kb1xuICogTWFwIGFsbCBuYW1lZCBzdG9yZXMgaW4ge2tleXN9IHRvIHRoZSB7b2JqZWN0fSdzIHN0YXRlXG4gKiBIb29rIGNvbXBvbmVudFdpbGxVbm1vdW50IChmb3IgcmVhY3QgY29tcCkgb3IgZGVzdHJveSB0byB1bkJpbmQgdGhlbSBhdXRvbWF0aWNhbGx5XG4gKiBAc3RhdGljXG4gKiBAcGFyYW0gb2JqZWN0IHtPYmplY3R9IHRhcmdldCBzdGF0ZSBhd2FyZSBvYmplY3QgKFJlYWN0LkNvbXBvbmVudHxTdG9yZXwuLi4pXG4gKiBAcGFyYW0ga2V5cyB7QXJyYXl9IEV4IDogW1wic2Vzc2lvblwiLCBcIm90aGVyU3RhdGljTmFtZWRTdG9yZTprZXlcIixcbiAqICAgICBzdG9yZS5hcygnYW5vdGhlcktleScpXVxuICovXG5TdG9yZS5tYXAgPSBmdW5jdGlvbiAoIGNTdG9yZSwga2V5cywgc2NvcGUsIG9yaWdpbiwgc2V0SW5pdGlhbCA9IGZhbHNlICkge1xuXHRsZXQgdGFyZ2V0UmV2cyAgICAgPSBjU3RvcmUuX3JldnMgfHwge307XG5cdGxldCB0YXJnZXRTY29wZSAgICA9IGNTdG9yZS5zdG9yZXMgfHwgKGNTdG9yZS5zdG9yZXMgPSB7fSk7XG5cdGxldCBpbml0aWFsT3V0cHV0cyA9IHt9O1xuXHRrZXlzICAgICAgICAgICAgICAgPSBpcy5hcnJheShrZXlzKSA/IFsuLi5rZXlzXSA6IFtrZXlzXTtcblx0XG5cdFxuXHRzY29wZSA9IHNjb3BlIHx8IFN0b3JlLnN0YXRpY1Njb3BlO1xuXHRcblx0a2V5cyA9IGtleXMuZmlsdGVyKFxuXHRcdC8vIEB0b2RvIDogdXNlIHF1ZXJ5IHJlZnNcblx0XHQvLyAoc3RvcmUpKFxcLnN0b3JlKSooXFxbKFxcKnwocHJvcHMpXFx3KykrKVxcXSk/KFxcOmFsaWFzKVxuXHRcdCgga2V5ICkgPT4ge1xuXHRcdFx0aWYgKCAha2V5ICkge1xuXHRcdFx0XHRjb25zb2xlLmVycm9yKFwiTm90IGEgbWFwcGFibGUgc3RvcmUgaXRlbSAnXCIgKyBrZXkgKyBcIicgaW4gXCIgKyBvcmlnaW4gKyAnICEhJyk7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdGxldCBuYW1lLFxuXHRcdFx0ICAgIGFsaWFzLFxuXHRcdFx0ICAgIHBhdGgsXG5cdFx0XHQgICAgc3RvcmUsIF9rZXk7XG5cdFx0XHRpZiAoIGtleS5zdG9yZSAmJiBrZXkubmFtZSApIHtcblx0XHRcdFx0YWxpYXMgPSBuYW1lID0ga2V5Lm5hbWU7XG5cdFx0XHRcdHN0b3JlID0ga2V5LnN0b3JlO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSBpZiAoIGlzLmZuKGtleSkgKSB7XG5cdFx0XHRcdG5hbWUgID0gYWxpYXMgPSBrZXkubmFtZSB8fCBrZXkuZGVmYXVsdE5hbWU7XG5cdFx0XHRcdHN0b3JlID0ga2V5O1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdF9rZXkgID0ga2V5Lm1hdGNoKC8oW15cXC5cXDpdKykoKD86XFwuW15cXC5cXDpdKykqKSg/OlxcOihbXlxcLlxcOl0rKSk/Lyk7XG5cdFx0XHRcdG5hbWUgID0gX2tleVsxXTtcblx0XHRcdFx0cGF0aCAgPSBfa2V5WzJdICYmIF9rZXlbMl0uc3Vic3RyKDEpO1xuXHRcdFx0XHRzdG9yZSA9IHNjb3BlLnN0b3Jlc1tfa2V5WzFdXTtcblx0XHRcdFx0YWxpYXMgPSBfa2V5WzNdIHx8IHBhdGggJiYgcGF0aC5tYXRjaCgvKFteXFwuXSopJC8pWzBdIHx8IF9rZXlbMV07XG5cdFx0XHR9XG5cdFx0XHRpZiAoICFzdG9yZSApIHtcblx0XHRcdFx0bGV0IGkgPSBbXTtcblx0XHRcdFx0Zm9yICggbGV0IG8gaW4gc2NvcGUuc3RvcmVzIClcblx0XHRcdFx0XHRpLnB1c2gobylcblx0XHRcdFx0Y29uc29sZS5lcnJvcihcIk5vdCBhIG1hcHBhYmxlIHN0b3JlIGl0ZW0gJ1wiICsgbmFtZSArIFwiL1wiICsgYWxpYXMgKyBcIicgaW4gXCIgKyAoY1N0b3JlLm5hbWUgfHwgY1N0b3JlKSArICcgISEnLCBzdG9yZSwgX2tleSwgc2NvcGUuc3RvcmVzLCBpKTtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCBTY29wZS5pc1Njb3BlQ2xhc3Moc3RvcmUpICkgc2NvcGUuX21vdW50KG5hbWUpO1xuXHRcdFx0aWYgKCBTY29wZS5pc1Njb3BlKHN0b3JlKSApIHtcblx0XHRcdFx0c3RvcmUgPSBzY29wZS5fbW91bnQoa2V5KTtcblx0XHRcdH1cblx0XHRcdGVsc2UgaWYgKCB0YXJnZXRSZXZzW25hbWVdICkgcmV0dXJuIGZhbHNlOy8vIGlnbm9yZSBkYmwgdXNlcyBmb3Igbm93XG5cdFx0XHRcblx0XHRcdFxuXHRcdFx0aWYgKCBpcy5mbihzdG9yZSkgKSB7XG5cdFx0XHRcdHNjb3BlLl9tb3VudChuYW1lKVxuXHRcdFx0XHRzY29wZS5zdG9yZXNbbmFtZV0uYmluZChjU3RvcmUsIGFsaWFzLCBzZXRJbml0aWFsLCBwYXRoKTtcblx0XHRcdH1cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHRzdG9yZS5iaW5kKGNTdG9yZSwgYWxpYXMsIHNldEluaXRpYWwsIHBhdGgpO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHQvLyBnaXZlIGluaXRpYWwgc3RvcmUgd2VpZ2h0IGJhc2luZyBzb3VyY2VzXG5cdFx0XHRzY29wZS5zdG9yZXNbbmFtZV0uX3NvdXJjZXMgJiYgY1N0b3JlLl9zb3VyY2VzLnB1c2goLi4uc2NvcGUuc3RvcmVzW25hbWVdLl9zb3VyY2VzKTtcblx0XHRcdFxuXHRcdFx0dGFyZ2V0UmV2c1thbGlhc10gPSB0YXJnZXRSZXZzW2FsaWFzXSB8fCB0cnVlO1xuXHRcdFx0IXRhcmdldFNjb3BlW25hbWVdICYmICh0YXJnZXRTY29wZVtuYW1lXSA9IHNjb3BlLnN0b3Jlc1tuYW1lXSk7XG5cdFx0XHRpZiAoIHNjb3BlLnN0b3Jlc1tuYW1lXS5oYXNPd25Qcm9wZXJ0eSgnZGF0YScpIClcblx0XHRcdFx0aW5pdGlhbE91dHB1dHNbbmFtZV0gPSBzY29wZS5kYXRhW25hbWVdO1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHQpO1xuXHRcblx0Ly8gLi4uIEB0b2RvXG5cdGNTdG9yZS5vbmNlKCdkZXN0cm95JywgKCAuLi5hcmd6ICkgPT4ge1xuXHRcdGtleXMubWFwKFxuXHRcdFx0KCBrZXkgKSA9PiB7XG5cdFx0XHRcdGxldCBuYW1lLFxuXHRcdFx0XHQgICAgYWxpYXMsIHBhdGgsXG5cdFx0XHRcdCAgICBzdG9yZTtcblx0XHRcdFx0aWYgKCBrZXkuc3RvcmUgJiYga2V5Lm5hbWUgKSB7XG5cdFx0XHRcdFx0YWxpYXMgPSBuYW1lID0ga2V5Lm5hbWU7XG5cdFx0XHRcdFx0c3RvcmUgPSBrZXkuc3RvcmU7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZSBpZiAoIGlzLmZuKGtleSkgKSB7XG5cdFx0XHRcdFx0bmFtZSAgPSBhbGlhcyA9IGtleS5uYW1lIHx8IGtleS5kZWZhdWx0TmFtZTtcblx0XHRcdFx0XHRzdG9yZSA9IHNjb3BlLnN0b3Jlc1tuYW1lXTtcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHRrZXkgICA9IGtleS5tYXRjaCgvKFteXFwuXFw6XSspKCg/OlxcLlteXFwuXFw6XSspKikoPzpcXDooW15cXC5cXDpdKykpPy8pO1xuXHRcdFx0XHRcdG5hbWUgID0ga2V5WzFdO1xuXHRcdFx0XHRcdHBhdGggID0ga2V5WzJdICYmIGtleVsyXS5zdWJzdHIoMSk7XG5cdFx0XHRcdFx0c3RvcmUgPSBzY29wZS5zdG9yZXNba2V5WzFdXTtcblx0XHRcdFx0XHRhbGlhcyA9IGtleVszXSB8fCBwYXRoICYmIHBhdGgubWF0Y2goLyhbXlxcLl0qKSQvKVswXSB8fCBrZXlbMV07XG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHRcdHN0b3JlICYmICFpcy5mbihzdG9yZSkgJiYgc3RvcmUudW5CaW5kKGNTdG9yZSwgYWxpYXMsIHBhdGgpXG5cdFx0XHR9XG5cdFx0KTtcblx0fSlcblx0XG5cdHJldHVybiBpbml0aWFsT3V0cHV0cztcbn07XG5cblxuU3RvcmUuaXNTdG9yZSAgICAgID0gU2NvcGUuaXNTdG9yZSA9IGZ1bmN0aW9uICggb2JqICkge1xuXHRyZXR1cm4gb2JqIGluc3RhbmNlb2YgU3RvcmVcbn1cblN0b3JlLmlzU3RvcmVDbGFzcyA9IFNjb3BlLmlzU3RvcmVDbGFzcyA9IGZ1bmN0aW9uICggb2JqICkge1xuXHRyZXR1cm4gU3RvcmUuaXNQcm90b3R5cGVPZihvYmopIHx8IG9iaiA9PT0gU3RvcmVcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RvcmU7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1N0b3JlLmpzIiwiLypcbiAqIFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuICogQ29weXJpZ2h0IChjKSAyMDE5LiBXaXNlIFdpbGQgV2ViXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSDigJxTb2Z0d2FyZeKAnSksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCDigJxBUyBJU+KAnSwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4gKlxuICogIEBhdXRob3IgOiBOYXRoYW5hZWwgQnJhdW5cbiAqICBAY29udGFjdCA6IG44dHouanNAZ21haWwuY29tXG4gKi9cblxuaW1wb3J0IGlzIGZyb20gXCJpc1wiO1xuXG4vKipcbiAqIE1pbmltYWwgcHVzaCBzZXF1ZW5jZXIsIGFwcGx5IHN0b3JlcyBzcGVjaWZpYyB0YXNrIGluIHRoZSByaWdodCBvcmRlclxuICovXG5sZXQgdGFza1F1ZXVlICAgICAgPSBbXSxcbiAgICBjdXJXZWlnaHQgICAgICA9IDAsXG4gICAgbWF4V2VpZ2h0ICAgICAgPSAwLFxuICAgIG1pbldlaWdodCAgICAgID0gMCxcbiAgICB0YXNrQ291bnQgICAgICA9IDAsXG4gICAgZGVTeW5jICAgICAgICAgPSBmYWxzZSxcbiAgICBkZVN5bmNNYXhUYXNrcyA9IDEwLFxuICAgIHRhc2ssXG4gICAgaXNSdW5uaW5nLFxuICAgIGVycm9yQ2F0Y2hlciAgID0ge1xuICAgICAgICBsYXN0RXJyb3I6IG51bGwsXG4gICAgICAgIGRpc3BhdGNoIDogZnVuY3Rpb24gKCBlcnJvciApIHtcbiAgICAgICAgICAgIGVycm9yQ2F0Y2hlci5kaXNhYmxlKCk7XG4gICAgICAgICAgICBpZiAoIHRhc2sgJiYgdGFza1sgMCBdLmhhbmRsZUVycm9yICkge1xuICAgICAgICAgICAgICAgIHRhc2tbIDAgXS5oYW5kbGVFcnJvcihlcnJvciwgdGFzayk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICggdGFzayApXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlJlU2NvcGUgOiBBbiBhcHBseSB0YXNrIGhhcyBmYWlsZWQgISFcIiwgdGFza1sgMSBdLCBcIiBvbiBcIiwgdGFza1sgMCBdLm5hbWUgfHwgdGFza1sgMCBdLmNvbnN0cnVjdG9yLm5hbWUpXG4gICAgICAgIFxuICAgICAgICAgICAgaXNSdW5uaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB0YXNrICAgICAgPSBudWxsO1xuICAgICAgICAgICAgcnVuTm93KCk7XG4gICAgICAgIH0sXG4gICAgICAgIGVuYWJsZSAgIDogKCB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyApXG4gICAgICAgICAgICAgICAgICAgPyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgZXJyb3JDYXRjaGVyLmRpc3BhdGNoKVxuICAgICAgICAgICAgfSA6ICgpID0+IHtcbiAgICAgICAgICAgICAgICBwcm9jZXNzLm9uKCd1bmNhdWdodEV4Y2VwdGlvbicsIGVycm9yQ2F0Y2hlci5kaXNwYXRjaCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICBkaXNhYmxlICA6ICggdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgKVxuICAgICAgICAgICAgICAgICAgID8gKCkgPT4ge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdlcnJvcicsIGVycm9yQ2F0Y2hlci5kaXNwYXRjaClcbiAgICAgICAgICAgIH0gOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgcHJvY2Vzcy5yZW1vdmVMaXN0ZW5lcigndW5jYXVnaHRFeGNlcHRpb24nLCBlcnJvckNhdGNoZXIuZGlzcGF0Y2gpO1xuICAgICAgICAgICAgfVxuICAgIH1cbjtcblxuZnVuY3Rpb24gcnVuTm93KCkge1xuICAgIGlmICggIWlzUnVubmluZyApIHtcbiAgICAgICAgcnVuKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBydW4oKSB7XG4gICAgbGV0IGZyb20gID0gRGF0ZS5ub3coKTtcbiAgICBpc1J1bm5pbmcgPSB0cnVlO1xuICAgIGVycm9yQ2F0Y2hlci5lbmFibGUoKTtcbiAgICB3aGlsZSAoIHRhc2tDb3VudCApIHtcbiAgICAgICAgXG4gICAgICAgIC8vIHRyeSBmb3IgdGhlIGN1cnJlbnQgd2VpZ2h0XG4gICAgICAgIHdoaWxlICggISggdGFza1F1ZXVlWyBjdXJXZWlnaHQgXSAmJiB0YXNrUXVldWVbIGN1cldlaWdodCBdLmxlbmd0aCApIClcbiAgICAgICAgICAgIGN1cldlaWdodCsrO1xuICAgICAgICBcbiAgICAgICAgdGFza0NvdW50LS07XG4gICAgICAgIHRhc2sgPSB0YXNrUXVldWVbIGN1cldlaWdodCBdLnNoaWZ0KCk7XG4gICAgICAgIC8vY29uc29sZS5sb2coXCJUYXNrIDogXCIsIHRhc2tbMV0sIFwiIG9uIFwiLCB0YXNrWzBdLm5hbWUpO1xuICAgICAgICB0YXNrWyAwIF1bIHRhc2tbIDEgXSBdLmFwcGx5KHRhc2tbIDAgXSwgdGFza1sgMiBdKTtcbiAgICB9XG4gICAgdGFzayA9IHVuZGVmaW5lZDtcbiAgICBlcnJvckNhdGNoZXIuZGlzYWJsZSgpO1xuICAgIFxuICAgIGlzUnVubmluZyA9IGZhbHNlO1xuICAgIGlmICggdGFza0NvdW50ICkge1xuICAgICAgICBzZXRUaW1lb3V0KHJ1bk5vdyk7XG4gICAgfVxufVxuXG4vL1xuLy9pbmRleC5zZXRUYXNrRGVTeW5jID0gKCBuYiApID0+IHtcbi8vICAgIGlmICggbmIgPT09IGZhbHNlIClcbi8vICAgICAgICByZXR1cm4gZGVTeW5jID0gZmFsc2U7XG4vLyAgICBlbHNlIGlmICggbmIgPT09IHRydWUgKSB7XG4vLyAgICAgICAgZGVTeW5jICAgICAgICAgPSB0cnVlO1xuLy8gICAgICAgIGRlU3luY01heFRhc2tzID0gMTA7XG4vLyAgICB9XG4vLyAgICBlbHNlIChpcy5pbnQobmIpKVxuLy8gICAge1xuLy8gICAgICAgIGRlU3luYyAgICAgICAgID0gdHJ1ZTtcbi8vICAgICAgICBkZVN5bmNNYXhUYXNrcyA9IG5iO1xuLy8gICAgfVxuLy99O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgcHVzaFRhc2soIG9iaiwgZm4sIGFyZ3ogKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgbW9yZSBhIHN0b3JlIGhhdmUgc291cmNlcywgdGhlIG1vcmUgaXQgc2hvdWxkIGJlIHByb2Nlc3NlZCBmaXJzdFxuICAgICAgICAgKiBTbyBsZWFmcyBzdG9yZXMgc3RheSBzeW5jLCBhbmQgcm9vdCBzdG9yZXMgcmVjZWl2ZSBtZXJnZWQgc3RhdGUgdXBkYXRlcztcbiAgICAgICAgICogZ2xvYmFsIHN0YXRlIHN0YXkgY29oZXJlbnRcbiAgICAgICAgICpcbiAgICAgICAgICogVGhpcyBtZWFuIHdoYXRldmVyIHRoZSBudW1iZXIgb2Ygc3RvcmVzICYgdGhlIGNvbXBsZXhpdHkgb2YgdGhlIGRlcHMsXG4gICAgICAgICAqIHVwZGF0aW5nIGEgc3RvcmUgc3RhdGUgd2lsbCB1cGRhdGUgaXRzIHN5bmNocm9uZSBjaGlsZCBzdG9yZXMgaW1tZWRpYXRlbHlcbiAgICAgICAgICpcbiAgICAgICAgICpcbiAgICAgICAgICogQHR5cGUgeyp8bnVtYmVyfVxuICAgICAgICAgKi9cbiAgICAgICAgbGV0IHdlaWdodCA9IG9iai5fc291cmNlcyAmJiBvYmouX3NvdXJjZXMubGVuZ3RoIHx8IDEsXG4gICAgICAgICAgICBzdGFjayAgPSB0YXNrUXVldWVbIHdlaWdodCBdID1cbiAgICAgICAgICAgICAgICB0YXNrUXVldWVbIHdlaWdodCBdIHx8IFtdO1xuICAgICAgICBcbiAgICAgICAgbWF4V2VpZ2h0ID0gTWF0aC5tYXgobWF4V2VpZ2h0LCB3ZWlnaHQpO1xuICAgICAgICBjdXJXZWlnaHQgPSBNYXRoLm1pbihjdXJXZWlnaHQsIHdlaWdodCk7XG4gICAgICAgIHRhc2tDb3VudCsrO1xuICAgICAgICBcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcIlB1c2ggVGFzayA6IFwiLCBmbiwgXCIgb24gXCIsIG9iai5uYW1lLCB3ZWlnaHQpO1xuICAgICAgICBzdGFjay5wdXNoKFsgb2JqLCBmbiwgYXJneiBdKTtcbiAgICAgICAgc2V0VGltZW91dChydW5Ob3csIDApO1xuICAgICAgICByZXR1cm4gc3RhY2subGVuZ3RoO1xuICAgIH1cbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWxzL1Rhc2tTZXF1ZW5jZXIuanMiLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Byb2Nlc3MvYnJvd3Nlci5qc1xuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==