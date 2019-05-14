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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMDRjYjllM2EyY2E3YWU3MjBhMGUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9TY29wZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2lzL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vc2hvcnRpZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3Nob3J0aWQvbGliL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vc2hvcnRpZC9saWIvYWxwaGFiZXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9zaG9ydGlkL2xpYi9yYW5kb20vcmFuZG9tLWZyb20tc2VlZC5qcyIsIndlYnBhY2s6Ly8vLi9+L3Nob3J0aWQvbGliL2VuY29kZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3Nob3J0aWQvbGliL3JhbmRvbS9yYW5kb20tYnl0ZS1icm93c2VyLmpzIiwid2VicGFjazovLy8uL34vc2hvcnRpZC9saWIvZGVjb2RlLmpzIiwid2VicGFjazovLy8uL34vc2hvcnRpZC9saWIvYnVpbGQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9zaG9ydGlkL2xpYi9pcy12YWxpZC5qcyIsIndlYnBhY2s6Ly8vLi9+L3Nob3J0aWQvbGliL3V0aWwvY2x1c3Rlci13b3JrZXItaWQtYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvRW1pdHRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1N0b3JlLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9UYXNrU2VxdWVuY2VyLmpzIiwid2VicGFjazovLy8uL34vcHJvY2Vzcy9icm93c2VyLmpzIl0sIm5hbWVzIjpbIiRnbG9iYWwiLCJ3aW5kb3ciLCJnbG9iYWwiLCJSUyIsIl9fX3Jlc2NvcGUiLCJjb25zb2xlIiwid2FybiIsIlNjb3BlIiwiU3RvcmUiLCJzY29wZVJlZiIsIm1hcCIsImtleSIsIl9fcHJvdG9fX3B1c2giLCJ0YXJnZXQiLCJpZCIsInBhcmVudCIsImZuIiwicHJvdG90eXBlIiwiXyIsImFsbFNjb3BlcyIsInNtIiwic3RhdGUiLCJfcmVmcyIsImFjdGlvbnMiLCJwYXRoIiwiYXBwbGllciIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwiY3BhdGgiLCJwdXNoIiwiRnVuY3Rpb24iLCJhcyIsInNjb3BlcyIsInNrZXkiLCJpcyIsImFycmF5Iiwic29ydCIsImEiLCJiIiwiZmlyc3RuYW1lIiwiam9pbiIsInN0b3Jlc01hcCIsInVwcGVyU2NvcGUiLCJzbmFwc2hvdCIsImRhdGEiLCJpbmNyZW1lbnRJZCIsInBlcnNpc3RlbmNlVG0iLCJhdXRvRGVzdHJveSIsInJvb3RFbWl0dGVyIiwiYm91bmRlZEFjdGlvbnMiLCJrZXlQSUQiLCJfaWQiLCJzaG9ydGlkIiwiZ2VuZXJhdGUiLCJiYXNlSWQiLCJpc0xvY2FsSWQiLCJyZWdpc3RlciIsImkiLCJfcmV2Iiwic3RvcmVzIiwiX2F1dG9EZXN0cm95IiwiY29uc3RydWN0b3IiLCJkZWFkIiwiRXJyb3IiLCJzb3VyY2VzIiwiY2hpbGRTY29wZXMiLCJjaGlsZFNjb3Blc0xpc3QiLCJ1blN0YWJsZUNoaWxkcyIsInNlZW5DaGlsZHMiLCJfbGlzdGVuaW5nIiwiX3Njb3BlIiwiX21peGVkIiwiX21peGVkTGlzdCIsImZvbGxvd2VycyIsIl9fcmV0YWlucyIsImFsbCIsIl9fbG9ja3MiLCJfYm91bmRlZEFjdGlvbnMiLCJ0ZXN0IiwiaW5jbHVkZXMiLCJiaW5kIiwicmV0YWluIiwiX3N0YWJsZSIsIndhaXQiLCJvbiIsIl9wYXJlbnRMaXN0IiwicmVsZWFzZSIsIl9wcm9wYWciLCJfYWRkQ2hpbGQiLCJyZXN0b3JlIiwic2V0VGltZW91dCIsImRpc3Bvc2UiLCJzdG9yZUlkTGlzdCIsIl9tb3VudCIsInN0b3JlSWQiLCJhcmd1bWVudHMiLCJyZWYiLCJwYXJzZVJlZiIsInJlZHVjZVJpZ2h0IiwibW91bnRlZCIsImN0eCIsInN0b3JlIiwidGFza1F1ZXVlIiwiaXNTdG9yZUNsYXNzIiwibmFtZSIsImxlbmd0aCIsInNoaWZ0IiwiaXNTY29wZUNsYXNzIiwiJHBhcmVudCIsIm1vdW50Iiwic2xpY2UiLCJpc1N0b3JlIiwidW5kZWZpbmVkIiwic2V0U3RhdGUiLCJfd2F0Y2hTdG9yZSIsInJlbGluayIsInNpbmdsZXRvbiIsInNyY0N0eCIsInRhcmdldEN0eCIsImV4dGVybmFsIiwiZm9yY2UiLCJob3RSZWxvYWRpbmciLCJpbmZvIiwidG1wIiwibmV4dFN0YXRlIiwiZGVzdHJveSIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsImdldCIsInNldCIsInYiLCJhY3RpdmVBY3Rpb25zIiwiaXNTY29wZSIsImFjdCIsImhhc093blByb3BlcnR5IiwiX190YXJnZXRTdG9yZXMiLCJkaXNwYXRjaCIsImlzU3RhYmxlIiwicHJvcGFnIiwibGlzdHMiLCJfX29yaWdpbiIsInNldEluaXRpYWwiLCJyZXZNYXAiLCJsYXN0UmV2cyIsInJlZktleXMiLCJzdHJpbmciLCJyZWR1Y2UiLCJyZXZzIiwicmV2IiwicmVmcyIsInJldGFpblN0b3JlcyIsImdldFVwZGF0ZXMiLCJkaXNwb3NlU3RvcmVzIiwic3BsaWNlIiwicmVmTGlzdCIsIm1peGVkQ1dVbm1vdW50IiwidW5Nb3VudEtleSIsImlzUmVhY3RDb21wb25lbnQiLCJ1bkJpbmQiLCJhbGlhcyIsInJldHJpZXZlIiwic3BsaXQiLCJvYmoiLCJjU2NvcGUiLCJyZXRyaWV2ZVN0b3JlIiwic3RvcmVzUmV2TWFwIiwibG9jYWwiLCJ1cGRhdGVkIiwiZ2V0U3RvcmVzUmV2cyIsIl9nZXRSZXZNYXAiLCJvdXRwdXQiLCJjaGlsZHMiLCJfZ2V0QWxsQ2hpbGRzIiwiY2ZnIiwicGFyZW50QWxpYXMiLCJzaWQiLCJzZXJpYWxpemVfZXgiLCJleGNsdWRlIiwid2l0aENoaWxkcyIsIndpdGhNaXhlZCIsIm5vcmVmcyIsInNlcmlhbGl6ZSIsIndpdGhDaGlsZCIsIndpdGhQYXJlbnRzIiwiaCIsImsiLCJib29sIiwic25hcCIsInRha2VTbmFwc2hvdEJ5S2V5Iiwic3RhcnRzV2l0aCIsInN1YnN0ciIsImdldFNuYXBzaG90QnlLZXkiLCJkZWxldGVTbmFwc2hvdEJ5S2V5IiwicmVwbGFjZSIsInBTdGF0ZSIsIl9yZWYiLCJhY3Rpb24iLCJhcmd6Iiwic3RhY2siLCJiQWN0cyIsInRyaWdnZXIiLCJjYiIsIm9uY2UiLCJ0aGVuIiwib25jZVN0YWJsZVRyZWUiLCJyZWFzb24iLCJlbWl0IiwiZXJyb3IiLCJzdGFiaWxpemVyVE0iLCJjbGVhclRpbWVvdXQiLCJwcm9wYWdUTSIsInJlbWFwcyIsInNjb3BlIiwid2FzU3RhYmxlIiwiaW5kZXhPZiIsInVuIiwiZGVzdHJveVRNIiwicmVtb3ZlTGlzdGVuZXIiLCJmb2xsb3dlciIsIl9ybUNoaWxkIiwiRXZlbnRFbWl0dGVyIiwiaXNQcm90b3R5cGVPZiIsIkVtaXR0ZXIiLCJfZXZlbnRzIiwiZXZ0Iiwid2Fsa25TZXQiLCJ3YWxrbkdldCIsImtleVdhbGtuU2V0Iiwia2V5V2Fsa25HZXQiLCJyZXF1aXJlIiwidmFsdWUiLCJpc0tleSIsImZpbHRlciIsIlRhc2tTZXF1ZW5jZXIiLCJvYmpQcm90byIsImdldFByb3RvdHlwZU9mIiwiX3N0YXRpYyIsImdldFNjb3BlIiwic3RhdGljU2NvcGUiLCJ3YXRjaHMiLCJ1c2UiLCJhcHBseSIsImluaXRpYWxTdGF0ZSIsImRlZmF1bHRTdGF0ZSIsIl91aWQiLCJfb25TdGFiaWxpemUiLCJfcGVyc2lzdGVuY2VUbSIsIl9jZmciLCJzY29wZU9iaiIsIiRzY29wZSIsIiRzdG9yZXMiLCIkYWN0aW9ucyIsIiRkaXNwYXRjaCIsIl9yZXZzIiwiX3JlcXVpcmUiLCJfc291cmNlcyIsIl91c2UiLCJtYXRjaCIsInJlZjIiLCJfZm9sbG93ZXJzIiwiX2NoYW5nZXNTVyIsIl9hZnRlckNvbnN0cnVjdG9yIiwiaW5pdGlhbERhdGEiLCJhcHBsaWVkIiwic2hvdWxkQXBwbHkiLCJtYW5hZ2VkIiwibkRhdGFzIiwiciIsImNEYXRhcyIsImlzQ29tcGxldGUiLCJmb2xsb3ciLCJjYWxsIiwiY2hhbmdlcyIsIl9fcHJvdG9fXyIsIl9zdGFiaWxpemVyIiwicHVzaFRhc2siLCJucyIsImhhc0RhdGFDaGFuZ2UiLCJzdGFibGUiLCJfbmV4dFN0YXRlIiwibmV4dERhdGEiLCJzeW5jIiwiY2hhbmdlIiwicHVzaFN0YXRlIiwic3RhYmlsaXplIiwic0lkIiwicmVmc0NvdW50IiwicGVyc2lzdGVudCIsInNob3VsZFNlcmlhbGl6ZSIsImRhdGFSZWZzIiwic3RhdGVLZXlzIiwic3RhdGVSZWZzIiwiaW5SZWZzQ291bnQiLCJpblJlZnMiLCJudW1iZXIiLCJpbW1lZGlhdGUiLCJyZXN0b3JlUmVmUGF0aCIsInByZXZpb3VzIiwibWUiLCJzaG91bGRQcm9wYWciLCJfZGVzdHJveVRNIiwicmVtb3ZlQWxsTGlzdGVuZXJzIiwiY1N0b3JlIiwib3JpZ2luIiwidGFyZ2V0UmV2cyIsInRhcmdldFNjb3BlIiwiaW5pdGlhbE91dHB1dHMiLCJfa2V5IiwiZGVmYXVsdE5hbWUiLCJvIiwiY3VyV2VpZ2h0IiwibWF4V2VpZ2h0IiwibWluV2VpZ2h0IiwidGFza0NvdW50IiwiZGVTeW5jIiwiZGVTeW5jTWF4VGFza3MiLCJ0YXNrIiwiaXNSdW5uaW5nIiwiZXJyb3JDYXRjaGVyIiwibGFzdEVycm9yIiwiZGlzYWJsZSIsImhhbmRsZUVycm9yIiwicnVuTm93IiwiZW5hYmxlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInByb2Nlc3MiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicnVuIiwiZnJvbSIsIkRhdGUiLCJub3ciLCJ3ZWlnaHQiLCJNYXRoIiwibWF4IiwibWluIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVB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O0FBQ2pCLFlBQVcsTUFBTTtBQUNqQixhQUFZLFFBQVE7QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsTUFBTTtBQUNqQixhQUFZLFFBQVE7QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLE1BQU07QUFDakIsYUFBWSxRQUFRO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxNQUFNO0FBQ2pCLGFBQVksUUFBUTtBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLE1BQU07QUFDakIsYUFBWSxRQUFRO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLE1BQU07QUFDakIsYUFBWSxRQUFRO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxNQUFNO0FBQ2pCLGFBQVksUUFBUTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxNQUFNO0FBQ2pCLGFBQVksUUFBUTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxNQUFNO0FBQ2pCLGFBQVksUUFBUTtBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsTUFBTTtBQUNqQixhQUFZLFFBQVE7QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLE1BQU07QUFDakIsYUFBWSxR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QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLE1BQU07QUFDakIsYUFBWSxRQUFRO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxNQUFNO0FBQ2pCLGFBQVksUUFBUTtBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQy94QkE7QUFDQTs7Ozs7OztBQ0RBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDaEVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYTtB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QjtBQUNBLGdCQUFPNUgsTUFBTTlGLE1BQWI7QUFDSDtBQXpCVSxFOzs7Ozs7OztBQ3RHZjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0JBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFxQjtBQUNyQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0NBQXFDOztBQUVyQztBQUNBO0FBQ0E7O0FBRUEsNEJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLDZCQUE0QixVQUFVIiwiZmlsZSI6Ii4uLy4uL2Rpc3QvUmVTY29wZS5icm93c2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDA0Y2I5ZTNhMmNhN2FlNzIwYTBlIiwiLypcbiAqIFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuICogQ29weXJpZ2h0IChjKSAyMDE5LiBXaXNlIFdpbGQgV2ViXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSDigJxTb2Z0d2FyZeKAnSksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCDigJxBUyBJU+KAnSwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4gKlxuICogIEBhdXRob3IgOiBOYXRoYW5hZWwgQnJhdW5cbiAqICBAY29udGFjdCA6IG44dHouanNAZ21haWwuY29tXG4gKi9cblxubGV0ICRnbG9iYWwgPSAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpID8gd2luZG93IDogZ2xvYmFsO1xuXG5pbXBvcnQgU2NvcGUgZnJvbSBcIi4vU2NvcGVcIjtcbmltcG9ydCBTdG9yZSBmcm9tIFwiLi9TdG9yZVwiO1xuXG5jb25zdCBSUyA9ICRnbG9iYWwuX19fcmVzY29wZSB8fCB7fTtcblxuaWYgKCAkZ2xvYmFsLl9fX3Jlc2NvcGUgKSB7XG5cdGNvbnNvbGUud2FybihcIlJlU2NvcGUgaXMgZGVmaW5lZCBtdWx0aXBsZSB0aW1lcyAhISBcXG5DaGVjayB5b3UncmUgcGFja2FnaW5nXCIpXG59XG5lbHNlIHtcblx0XG5cdCRnbG9iYWwuX19fcmVzY29wZSA9IFJTO1xuXHRTY29wZS5TdG9yZSAgICAgICAgPSBTdG9yZTtcblx0UlMuU2NvcGUgICAgICAgICAgID0gU2NvcGU7XG5cdFJTLlN0b3JlICAgICAgICAgICA9IFN0b3JlO1xuXHRSUy5zY29wZVJlZiAgICAgICAgPVxuXHRcdGZ1bmN0aW9uIHNjb3BlUmVmKCBtYXAsIGtleSApIHtcblx0XHRcdG1hcFtrZXldID0gbmV3IFNjb3BlLnNjb3BlUmVmKG1hcFtrZXldKTtcblx0XHRcdHJldHVybiBtYXA7XG5cdFx0fTtcblx0XG59XG5leHBvcnQgZGVmYXVsdCBSUztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXguanMiLCIvKlxuICogVGhlIE1JVCBMaWNlbnNlIChNSVQpXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTkuIFdpc2UgV2lsZCBXZWJcbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIOKAnFNvZnR3YXJl4oCdKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIOKAnEFTIElT4oCdLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiAqXG4gKiAgQGF1dGhvciA6IE5hdGhhbmFlbCBCcmF1blxuICogIEBjb250YWN0IDogbjh0ei5qc0BnbWFpbC5jb21cbiAqL1xuXG5pbXBvcnQgaXMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tIFwiaXNcIjtcbmltcG9ydCBzaG9ydGlkICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gXCJzaG9ydGlkXCI7XG5pbXBvcnQgRXZlbnRFbWl0dGVyICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tIFwiLi91dGlscy9FbWl0dGVyXCI7XG5pbXBvcnQge3dhbGtuU2V0LCB3YWxrbkdldCwga2V5V2Fsa25TZXQsIGtleVdhbGtuR2V0fSBmcm9tICcuL3V0aWxzL3V0aWxzJztcblxuY29uc3QgX19wcm90b19fcHVzaCA9ICggdGFyZ2V0LCBpZCwgcGFyZW50ICkgPT4ge1xuXHQgICAgICBsZXQgZm4gICAgICAgPSBmdW5jdGlvbiAoKSB7XG5cdCAgICAgIH07XG5cdCAgICAgIGZuLnByb3RvdHlwZSA9IHBhcmVudCA/IG5ldyBwYXJlbnQuX1tpZF0oKSA6IHRhcmdldFtpZF0gfHwge307XG5cdCAgICAgIHRhcmdldFtpZF0gICA9IG5ldyBmbigpO1xuXHQgICAgICB0YXJnZXQuX1tpZF0gPSBmbjtcbiAgICAgIH0sXG4gICAgICBhbGxTY29wZXMgICAgID0ge307XG5cblxuLyoqXG4gKiBCYXNlIFNjb3BlIG9iamVjdFxuICovXG5jbGFzcyBTY29wZSBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG5cdFxuXHRzdGF0aWMgcGVyc2lzdGVuY2VUbSA9IDE7Ly8gaWYgPiAwLCB3aWxsIHdhaXQgJ3BlcnNpc3RlbmNlVG0nIG1zIGJlZm9yZSBkZXN0cm95IHdoZW4gZGlzcG9zZSByZWFjaCAwXG5cdHN0YXRpYyBTdG9yZSAgICAgICAgID0gbnVsbDtcblx0c3RhdGljIHNjb3BlUmVmICAgICAgPSBmdW5jdGlvbiBzY29wZVJlZiggcGF0aCApIHtcblx0XHR0aGlzLnBhdGggPSBwYXRoO1xuXHR9O1xuXHRzdGF0aWMgc2NvcGVzICAgICAgICA9IGFsbFNjb3BlczsvLyBhbGwgYWN0aXZlIHNjb3Blc1xuXHQvKipcblx0ICogZ2V0IGEgcGFyc2VkIHJlZmVyZW5jZSBsaXN0IGZyb20gc3RhdGVNYXBcblx0ICogQHBhcmFtIF9yZWZcblx0ICogQHJldHVybnMge3tzdG9yZUlkLCBwYXRoLCBhbGlhczogKiwgcmVmOiAqfX1cblx0ICovXG5cdHN0YXRpYyBzdGF0ZU1hcFRvUmVmTGlzdCggc20sIHN0YXRlID0ge30sIF9yZWZzID0gW10sIGFjdGlvbnMgPSB7fSwgcGF0aCA9IFwiXCIgKSB7XG5cdFx0bGV0IGFwcGxpZXI7XG5cdFx0T2JqZWN0LmtleXMoc20pLmZvckVhY2goXG5cdFx0XHRrZXkgPT4ge1xuXHRcdFx0XHRsZXQgY3BhdGggPSBwYXRoID8gcGF0aCArICcuJyArIGtleSA6IGtleTtcblx0XHRcdFx0XG5cdFx0XHRcdHNtW2tleV0gaW5zdGFuY2VvZiBTY29wZS5zY29wZVJlZlxuXHRcdFx0XHQ/IF9yZWZzLnB1c2goc21ba2V5XS5wYXRoICsgJzonICsgY3BhdGgpXG5cdFx0XHRcdDogKHNtW2tleV0gJiYgc21ba2V5XSBpbnN0YW5jZW9mIEZ1bmN0aW9uKVxuXHRcdFx0XHQgID8ga2V5ID09IFwiJGFwcGx5XCJcblx0XHRcdFx0ICAgID8gYXBwbGllciA9IHNtW2tleV1cblx0XHRcdFx0ICAgIDogYWN0aW9uc1trZXldID0gc21ba2V5XVxuXHRcdFx0XHQgIDogKHNtW2tleV0gJiYgc21ba2V5XS5wcm90b3R5cGUgaW5zdGFuY2VvZiBTY29wZS5TdG9yZSlcblx0XHRcdFx0ICAgID8gX3JlZnMucHVzaChzbVtrZXldLmFzKGNwYXRoKSlcblx0XHRcdFx0ICAgIDogc3RhdGVbY3BhdGhdID0gc21ba2V5XVxuXHRcdFx0XHQvLzogdGhpcy5zdGF0ZU1hcFRvUmVmTGlzdChzbVtrZXldLCBfcmVmcywgcGF0aCArICcuJyArIGtleSlcblx0XHRcdH1cblx0XHQpXG5cdFx0cmV0dXJuIGFwcGxpZXI7XG5cdH1cblx0XG5cdHN0YXRpYyBnZXRTY29wZSggc2NvcGVzICkge1xuXHRcdGxldCBza2V5ID0gaXMuYXJyYXkoc2NvcGVzKSA/IHNjb3Blcy5zb3J0KCggYSwgYiApID0+IHtcblx0XHRcdGlmICggYS5maXJzdG5hbWUgPCBiLmZpcnN0bmFtZSApIHJldHVybiAtMTtcblx0XHRcdGlmICggYS5maXJzdG5hbWUgPiBiLmZpcnN0bmFtZSApIHJldHVybiAxO1xuXHRcdFx0cmV0dXJuIDA7XG5cdFx0fSkuam9pbignKycpIDogc2NvcGVzO1xuXHRcdHJldHVybiBhbGxTY29wZXNbc2tleV0gPSBhbGxTY29wZXNbc2tleV0gfHwgbmV3IFNjb3BlKHt9LCB7IGlkOiBza2V5IH0pO1xuXHR9O1xuXHRcblx0XG5cdC8qKlxuXHQgKiBJbml0IGEgUmVTY29wZSBzY29wZVxuXHQgKlxuXHQgKiBAcGFyYW0gc3RvcmVzTWFwIHtPYmplY3R9IE9iamVjdCB3aXRoIHRoZSBpbml0aWFsIHN0b3JlcyBkZWZpbml0aW9uIC8gaW5zdGFuY2VzXG5cdCAqIEBwYXJhbSBjb25maWcge09iamVjdH0gU2NvcGUgY29uZmlnXG5cdCAqIHtcblx0ICogICAgIHBhcmVudCB7c2NvcGV9IEBvcHRpb25hbCBwYXJlbnQgc2NvcGVcblx0ICpcblx0ICogICAgIGlkIHtzdHJpbmd9IEBvcHRpb25hbCBpZCAoIGlmIHRoaXMgaWQgZXhpc3Qgc3RvcmVzTWFwIHdpbGwgYmUgbWVyZ2Ugb24gdGhlICdpZCdcblx0ICogICAgIHNjb3BlKVxuXHQgKiAgICAga2V5IHtzdHJpbmd9IEBvcHRpb25hbCBrZXkgb2YgdGhlIHNjb3BlICggaWYgbm8gaWQgaXMgc2V0LCB0aGUgc2NvcGUgaWQgd2lsbCBiZSAocGFyZW50LmlkKyc+JytrZXkpXG5cdCAqICAgICBpbmNyZW1lbnRJZCB7Ym9vbH0gQG9wdGlvbmFsIHRydWUgdG8gYWRkIGEgc3VmZml4IGlkLCBpZiB0aGUgcHJvdmlkZWQga2V5IG9yIGlkIGdsb2JhbGx5IGV4aXN0XG5cdCAqXG5cdCAqICAgICBzdGF0ZSB7T2JqZWN0fSBAb3B0aW9uYWwgaW5pdGlhbCBzdGF0ZSBieSBzdG9yZSBhbGlhc1xuXHQgKiAgICAgZGF0YSB7T2JqZWN0fSBAb3B0aW9uYWwgaW5pdGlhbCBkYXRhIGJ5IHN0b3JlIGFsaWFzXG5cdCAqXG5cdCAqICAgICByb290RW1pdHRlciB7Ym9vbH0gQG9wdGlvbmFsIHRydWUgdG8gbm90IGJlaW5nIGRlc3RhYmlsaXplZCBieSBwYXJlbnRcblx0ICogICAgIGJvdW5kZWRBY3Rpb25zIHthcnJheSB8IHJlZ2V4cH0gQG9wdGlvbmFsIGxpc3Qgb3IgcmVnZXhwIG9mIGFjdGlvbnMgbm90IHByb3BhZ2F0ZWQgdG8gdGhlIHBhcmVudFxuXHQgKiAgICAgYXV0b0Rlc3Ryb3kge3RydWUgfCBmYWxzZSB8ICdpbmhlcml0J31cblx0ICogICAgIHBlcnNpc3RlbmNlVG0ge251bWJlcikgaWYgPiAwLCB3aWxsIHdhaXQgJ3BlcnNpc3RlbmNlVG0nIG1zIGJlZm9yZSBkZXN0cm95IHdoZW5cblx0ICogICAgIGRpc3Bvc2UgcmVhY2ggMCBhdXRvRGVzdHJveSAge2Jvb2x9IHdpbGwgdHJpZ2dlciByZXRhaW4gJiBkaXNwb3NlIGFmdGVyIHN0YXJ0XG5cdCAqICB9XG5cdCAqIEByZXR1cm5zIHtTY29wZX1cblx0ICovXG5cdGNvbnN0cnVjdG9yKCBzdG9yZXNNYXAsIHsgcGFyZW50LCB1cHBlclNjb3BlLCBrZXksIGlkLCBzbmFwc2hvdCwgc3RhdGUsIGRhdGEsIGluY3JlbWVudElkID0gISFrZXksIHBlcnNpc3RlbmNlVG0sIGF1dG9EZXN0cm95LCByb290RW1pdHRlciwgYm91bmRlZEFjdGlvbnMgfSA9IHt9ICkge1xuXHRcdHN1cGVyKCk7XG5cdFx0bGV0IF8gPSB7XG5cdFx0XHRrZXlQSUQ6ICh1cHBlclNjb3BlICYmIHVwcGVyU2NvcGUuX2lkIHx8IHBhcmVudCAmJiBwYXJlbnQuX2lkIHx8IHNob3J0aWQuZ2VuZXJhdGUoKSksXG5cdFx0XHRrZXksXG5cdFx0XHRpbmNyZW1lbnRJZCxcblx0XHRcdGJhc2VJZDogaWRcblx0XHR9O1xuXHRcdFxuXHRcdFxuXHRcdC8vIGdlbmVyYXRlIC8gc2V0IHRoaXMgc2NvcGUgaWRcblx0XHRpZCA9IGlkIHx8IGtleSAmJiAoXy5rZXlQSUQgKyAnPicgKyBrZXkpO1xuXHRcdFxuXHRcdF8uaXNMb2NhbElkID0gIWlkO1xuXHRcdFxuXHRcdGlkID0gaWQgfHwgKFwiX19fX19cIiArIHNob3J0aWQuZ2VuZXJhdGUoKSk7XG5cdFx0XG5cdFx0aWYgKCBhbGxTY29wZXNbaWRdICYmICFpbmNyZW1lbnRJZCApIHsvLyBvdmVyd3JpdGUgZXhpc3Rpbmcgc2NvcGVcblx0XHRcdHRoaXMuX2lkID0gaWQ7XG5cdFx0XHRhbGxTY29wZXNbaWRdLnJlZ2lzdGVyKHN0b3Jlc01hcCk7XG5cdFx0XHRyZXR1cm4gYWxsU2NvcGVzW2lkXVxuXHRcdH1cblx0XHRlbHNlIGlmICggYWxsU2NvcGVzW2lkXSAmJiBpbmNyZW1lbnRJZCApIHsvLyBnZW5lcmF0ZSBrZXkgaWRcblx0XHRcdGxldCBpID0gLTE7XG5cdFx0XHR3aGlsZSAoIGFsbFNjb3Blc1tpZCArICdbJyArICgrK2kpICsgJ10nXSApIDtcblx0XHRcdGlkID0gaWQgKyAnWycgKyBpICsgJ10nO1xuXHRcdH1cblx0XHRcblx0XHQvLyByZWdpc3RlciB0aGlzIHNjb3BlIGluIHRoZSBzdGF0aWMgU2NvcGUuc2NvcGVzXG5cdFx0YWxsU2NvcGVzW2lkXSA9IHRoaXM7XG5cdFx0XG5cdFx0dGhpcy5faWQgID0gaWQ7XG5cdFx0dGhpcy5fcmV2ID0gMDtcblx0XHRcblx0XHR0aGlzLl8gPSBfO1xuXHRcdFxuXHRcdHRoaXMuYWN0aW9ucyA9IHt9O1xuXHRcdHRoaXMuc3RvcmVzICA9IHt9O1xuXHRcdHRoaXMuc3RhdGUgICA9IHt9O1xuXHRcdHRoaXMuZGF0YSAgICA9IHt9O1xuXHRcdFxuXHRcdHRoaXMucGFyZW50ID0gcGFyZW50O1xuXHRcdFxuXHRcdGlmICggYXV0b0Rlc3Ryb3kgPT0gJ2luaGVyaXQnIClcblx0XHRcdGF1dG9EZXN0cm95ID0gcGFyZW50ICYmIHBhcmVudC5fYXV0b0Rlc3Ryb3k7XG5cdFx0XG5cdFx0dGhpcy5fYXV0b0Rlc3Ryb3kgPSBhdXRvRGVzdHJveTtcblx0XHRfLnBlcnNpc3RlbmNlVG0gICA9IHBlcnNpc3RlbmNlVG0gfHwgdGhpcy5jb25zdHJ1Y3Rvci5wZXJzaXN0ZW5jZVRtO1xuXHRcdFxuXHRcdGlmICggcGFyZW50ICYmIHBhcmVudC5kZWFkIClcblx0XHRcdHRocm93IG5ldyBFcnJvcihcIkNhbid0IHVzZSBhIGRlYWQgc2NvcGUgYXMgcGFyZW50ICFcIik7XG5cdFx0XG5cdFx0X19wcm90b19fcHVzaCh0aGlzLCAnYWN0aW9ucycsIHBhcmVudCk7XG5cdFx0X19wcm90b19fcHVzaCh0aGlzLCAnc3RvcmVzJywgcGFyZW50KTtcblx0XHRfX3Byb3RvX19wdXNoKHRoaXMsICdzdGF0ZScsIHBhcmVudCk7XG5cdFx0X19wcm90b19fcHVzaCh0aGlzLCAnZGF0YScsIHBhcmVudCk7XG5cdFx0XG5cdFx0dGhpcy5zb3VyY2VzICAgICAgPSBbXTtcblx0XHRfLmNoaWxkU2NvcGVzICAgICA9IFtdO1xuXHRcdF8uY2hpbGRTY29wZXNMaXN0ID0gW107XG5cdFx0Xy51blN0YWJsZUNoaWxkcyAgPSAwO1xuXHRcdF8uc2VlbkNoaWxkcyAgICAgID0gMDtcblx0XHRfLl9saXN0ZW5pbmcgICAgICA9IHt9O1xuXHRcdF8uX3Njb3BlICAgICAgICAgID0ge307XG5cdFx0Xy5fbWl4ZWQgICAgICAgICAgPSBbXTtcblx0XHRfLl9taXhlZExpc3QgICAgICA9IFtdO1xuXHRcdF8uZm9sbG93ZXJzICAgICAgID0gW107XG5cdFx0XG5cdFx0dGhpcy5fX3JldGFpbnMgPSB7IGFsbDogMCB9O1xuXHRcdHRoaXMuX19sb2NrcyAgID0geyBhbGw6IDEgfTtcblx0XHRcblx0XHQvLyB0b2RvXG5cdFx0Xy5fYm91bmRlZEFjdGlvbnMgPSBpcy5hcnJheShib3VuZGVkQWN0aW9ucylcblx0XHQgICAgICAgICAgICAgICAgICAgID8geyB0ZXN0OiBib3VuZGVkQWN0aW9ucy5pbmNsdWRlcy5iaW5kKGJvdW5kZWRBY3Rpb25zKSB9XG5cdFx0ICAgICAgICAgICAgICAgICAgICA6IGJvdW5kZWRBY3Rpb25zO1xuXHRcdFxuXHRcdC8vIHJlZ2lzdGVyIHRvIHRoZSBwYXJlbnQgc2NvcGVcblx0XHRpZiAoIHBhcmVudCApIHtcblx0XHRcdHBhcmVudC5yZXRhaW4oXCJpc015UGFyZW50XCIpO1xuXHRcdFx0aWYgKCAhcm9vdEVtaXR0ZXIgKSB7XG5cdFx0XHRcdCFwYXJlbnQuX3N0YWJsZSAmJiB0aGlzLndhaXQoXCJ3YWl0aW5nUGFyZW50XCIpO1xuXHRcdFx0XHRwYXJlbnQub24oXy5fcGFyZW50TGlzdCA9IHtcblx0XHRcdFx0XHQnc3RhYmxlJyAgOiBzID0+IHRoaXMucmVsZWFzZShcIndhaXRpbmdQYXJlbnRcIiksXG5cdFx0XHRcdFx0J3Vuc3RhYmxlJzogcyA9PiB0aGlzLndhaXQoXCJ3YWl0aW5nUGFyZW50XCIpLFxuXHRcdFx0XHRcdCd1cGRhdGUnICA6IHMgPT4gdGhpcy5fcHJvcGFnKClcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0cGFyZW50Lm9uKF8uX3BhcmVudExpc3QgPSB7XG5cdFx0XHRcdFx0J3VwZGF0ZSc6IHMgPT4gdGhpcy5fcHJvcGFnKClcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0XHQvLyB0aGlzLnJlZ2lzdGVyKHBhcmVudC5fX3Njb3BlLCBzdGF0ZSwgZGF0YSk7XG5cdFx0fVxuXHRcdFxuXHRcdC8vIHJlZ2lzdGVyIHRoaXMgc2NvcGUgc3RvcmVzXG5cdFx0dGhpcy5yZWdpc3RlcihzdG9yZXNNYXAsIHN0YXRlLCBkYXRhKTtcblx0XHR0aGlzLl9fbG9ja3MuYWxsLS07XG5cdFx0dGhpcy5fc3RhYmxlID0gIXRoaXMuX19sb2Nrcy5hbGw7XG5cdFx0XG5cdFx0aWYgKCBwYXJlbnQgKSB7XG5cdFx0XHRwYXJlbnQuX2FkZENoaWxkKHRoaXMpO1xuXHRcdH1cblx0XHRcblx0XHRcblx0XHQvLyByZXN0b3JlIHNuYXBzaG90c1xuXHRcdHRoaXMucmVzdG9yZShzbmFwc2hvdCk7XG5cdFx0XG5cdFx0XG5cdFx0aWYgKCBhdXRvRGVzdHJveSApXG5cdFx0XHRzZXRUaW1lb3V0KFxuXHRcdFx0XHR0bSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5yZXRhaW4oXCJhdXRvRGVzdHJveVwiKTtcblx0XHRcdFx0XHR0aGlzLmRpc3Bvc2UoXCJhdXRvRGVzdHJveVwiKTtcblx0XHRcdFx0fVxuXHRcdFx0KVxuXHRcdFxuXHR9XG5cdFxuXHQvKipcblx0ICpcblx0ICogTW91bnQgdGhlIHN0b3JlcyBpbiBzdG9yZXNMaXN0LCBpbiB0aGlzIHNjb3BlIG9yIGluIGl0cyBwYXJlbnRzIG9yIG1peGVkIHNjb3Blc1xuXHQgKlxuXHQgKiBAcGFyYW0gc3RvcmVJZExpc3Qge3N0cmluZ3xzdG9yZVJlZn0gU3RvcmUgbmFtZSwgQXJyYXkgb2YgU3RvcmUgbmFtZXMsIG9yIFJlc2NvcGVcblx0ICogICAgIHN0b3JlIHJlZiBmcm9tIFN0b3JlOjphcyBvciBTdG9yZTphc1xuXHQgKiBAcGFyYW0gc3RhdGVcblx0ICogQHBhcmFtIGRhdGFcblx0ICogQHJldHVybnMge1Njb3BlfVxuXHQgKi9cblx0bW91bnQoIHN0b3JlSWRMaXN0LCBzbmFwc2hvdCwgc3RhdGUsIGRhdGEgKSB7XG5cdFx0aWYgKCBpcy5hcnJheShzdG9yZUlkTGlzdCkgKSB7XG5cdFx0XHRzdG9yZUlkTGlzdC5mb3JFYWNoKHN0b3JlSWQgPT4gdGhpcy5fbW91bnQoc3RvcmVJZCwgc25hcHNob3QsIHN0YXRlLCBkYXRhKSk7XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0dGhpcy5fbW91bnQoLi4uYXJndW1lbnRzKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblx0XG5cdF9tb3VudCggaWQsIHNuYXBzaG90LCBzdGF0ZSwgZGF0YSApIHtcblx0XHRsZXQgcmVmLCBfID0gdGhpcy5fO1xuXHRcdFxuXHRcdHJlZiA9IHRoaXMucGFyc2VSZWYoaWQpXG5cdFx0XG5cdFx0aWYgKCBpZCA9PSBcIiRwYXJlbnRcIiApIHJldHVybjtcblx0XHRpZiAoICFfLl9zY29wZVtyZWYuc3RvcmVJZF0gKSB7Ly9hc2sgbWl4ZWQgfHwgcGFyZW50XG5cdFx0XHRpZiAoIF8uX21peGVkLnJlZHVjZVJpZ2h0KCggbW91bnRlZCwgY3R4ICkgPT4gKG1vdW50ZWQgfHwgY3R4Ll9tb3VudChpZCwgc25hcHNob3QsIHN0YXRlLCBkYXRhKSksIGZhbHNlKSB8fFxuXHRcdFx0XHQhdGhpcy5wYXJlbnQgKVxuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHRyZXR1cm4gdGhpcy5wYXJlbnQuX21vdW50KC4uLmFyZ3VtZW50cyk7XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0bGV0IHN0b3JlID0gXy5fc2NvcGVbcmVmLnN0b3JlSWRdLCB0YXNrUXVldWUgPSBbXTtcblx0XHRcdGlmICggU2NvcGUuaXNTdG9yZUNsYXNzKHN0b3JlKSApIHtcblx0XHRcdFx0Xy5fc2NvcGVbcmVmLnN0b3JlSWRdID0gbmV3IHN0b3JlKHRoaXMsIHtcblx0XHRcdFx0XHQvL3NuYXBzaG90LFxuXHRcdFx0XHRcdG5hbWU6IHJlZi5zdG9yZUlkLFxuXHRcdFx0XHRcdHN0YXRlLFxuXHRcdFx0XHRcdGRhdGFcblx0XHRcdFx0fSwgdGFza1F1ZXVlKTtcblx0XHRcdFx0d2hpbGUgKCB0YXNrUXVldWUubGVuZ3RoICkgdGFza1F1ZXVlLnNoaWZ0KCkoKTtcblx0XHRcdH1cblx0XHRcdGVsc2UgaWYgKCBTY29wZS5pc1Njb3BlQ2xhc3Moc3RvcmUpICkge1xuXHRcdFx0XHRzdG9yZSA9IF8uX3Njb3BlW3JlZi5zdG9yZUlkXSA9IG5ldyBzdG9yZSh7ICRwYXJlbnQ6IHRoaXMgfSwge1xuXHRcdFx0XHRcdGtleSAgICAgICAgOiByZWYuc3RvcmVJZCxcblx0XHRcdFx0XHRpbmNyZW1lbnRJZDogdHJ1ZSxcblx0XHRcdFx0XHR1cHBlclNjb3BlIDogdGhpc1xuXHRcdFx0XHRcdC8vYXV0b0Rlc3Ryb3k6IHRydWVcblx0XHRcdFx0XHQvL3BhcmVudDogdGhpc1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0Ly9fLl9zY29wZVsgcmVmLnN0b3JlSWQgXS5yZXRhaW4oXCJzY29wZWRDaGlsZFNjb3BlXCIpO1xuXHRcdFx0XHQvL193YXRjaFN0b3JlKHJlZi5zdG9yZUlkKTtcblx0XHRcdFx0aWYgKCByZWYucGF0aC5sZW5ndGggPiAxIClcblx0XHRcdFx0XHRfLl9zY29wZVtyZWYuc3RvcmVJZF0ubW91bnQocmVmLnBhdGguc2xpY2UoMSkuam9pbignLicpLCBzbmFwc2hvdCwgc3RhdGUsIGRhdGEpXG5cdFx0XHRcdC8vZWxzZSByZXR1cm4gXy5fc2NvcGVbIHJlZi5zdG9yZUlkIF07XG5cdFx0XHR9XG5cdFx0XHRpZiAoIFNjb3BlLmlzU3RvcmUoc3RvcmUpICkge1xuXHRcdFx0XHRpZiAoIHN0YXRlICE9PSB1bmRlZmluZWQgJiYgZGF0YSA9PT0gdW5kZWZpbmVkIClcblx0XHRcdFx0XHRzdG9yZS5zZXRTdGF0ZShzdGF0ZSk7XG5cdFx0XHRcdGVsc2UgaWYgKCBzdGF0ZSAhPT0gdW5kZWZpbmVkIClcblx0XHRcdFx0XHRzdG9yZS5zdGF0ZSA9IHN0YXRlO1xuXHRcdFx0XHRcblx0XHRcdFx0aWYgKCBkYXRhICE9PSB1bmRlZmluZWQgKVxuXHRcdFx0XHRcdHN0b3JlLnB1c2goZGF0YSk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLl93YXRjaFN0b3JlKHJlZi5zdG9yZUlkKTtcblx0XHR9XG5cdFx0XG5cdFx0XG5cdFx0cmV0dXJuIF8uX3Njb3BlW3JlZi5zdG9yZUlkXTtcblx0fVxuXHRcblx0LyoqXG5cdCAqIFJlZ2lzdGVyIHN0b3JlcyBpbiBzdG9yZXNNYXAgJiBsaW5rIHRoZW0gaW4gdGhlIHByb3Rvc1xuXHQgKiBAcGFyYW0gc3RvcmVzTWFwXG5cdCAqIEBwYXJhbSBzdGF0ZVxuXHQgKiBAcGFyYW0gZGF0YVxuXHQgKi9cblx0cmVnaXN0ZXIoIHN0b3Jlc01hcCwgc3RhdGUgPSB7fSwgZGF0YSA9IHt9ICkge1xuXHRcdHRoaXMucmVsaW5rKHN0b3Jlc01hcCwgdGhpcywgZmFsc2UsIGZhbHNlKTtcblx0XHRPYmplY3Qua2V5cyhzdG9yZXNNYXApLmZvckVhY2goXG5cdFx0XHRpZCA9PiB7XG5cdFx0XHRcdGlmICggaWQgPT0gXCIkcGFyZW50XCIgKSByZXR1cm47XG5cdFx0XHRcdGlmICggc3RvcmVzTWFwW2lkXS5zaW5nbGV0b24gfHwgKGlzLmZuKHN0b3Jlc01hcFtpZF0pICYmIChzdGF0ZVtpZF0gfHwgZGF0YVtpZF0pKSApIHtcblx0XHRcdFx0XHR0aGlzLl9tb3VudChpZCwgdW5kZWZpbmVkLCBzdGF0ZVtpZF0sIGRhdGFbaWRdKVxuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2UgaWYgKCBzdGF0ZVtpZF0gfHwgZGF0YVtpZF0gKSB7XG5cdFx0XHRcdFx0aWYgKCBkYXRhW2lkXSApIHtcblx0XHRcdFx0XHRcdGlmICggc3RhdGVbaWRdIClcblx0XHRcdFx0XHRcdFx0dGhpcy5zdG9yZXNbaWRdLnN0YXRlID0gc3RhdGVbaWRdO1xuXHRcdFx0XHRcdFx0dGhpcy5zdG9yZXNbaWRdLnB1c2goZGF0YVtpZF0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRlbHNlIGlmICggc3RhdGVbaWRdICkge1xuXHRcdFx0XHRcdFx0dGhpcy5zdG9yZXNbaWRdLnNldFN0YXRlKHN0YXRlW2lkXSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMuX3dhdGNoU3RvcmUoaWQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0KVxuXHRcdFxuXHR9XG5cdFxuXHQvKipcblx0ICogTWFwIHNyY0N0eCBzdG9yZSdzIG9uIHRhcmdldEN0eCBoZWFkZXJzIHByb3RvJ3Ncblx0ICogQHBhcmFtIHNyY0N0eFxuXHQgKiBAcGFyYW0gdGFyZ2V0Q3R4XG5cdCAqIEBwYXJhbSBzdGF0ZVxuXHQgKiBAcGFyYW0gZGF0YVxuXHQgKi9cblx0cmVsaW5rKCBzcmNDdHgsIHRhcmdldEN0eCA9IHRoaXMsIGV4dGVybmFsLCBmb3JjZSApIHtcblx0XHRsZXQgXyA9IHRoaXMuXztcblx0XHRPYmplY3Qua2V5cyhzcmNDdHgpXG5cdFx0ICAgICAgLmZvckVhY2goXG5cdFx0XHQgICAgICBpZCA9PiB7XG5cdFx0XHRcdCAgICAgIGxldCBob3RSZWxvYWRpbmc7XG5cdFx0XHRcdFxuXHRcdFx0XHQgICAgICAvLyBzYW1lIHN0b3JlIGRlZiA6IGlnbm9yZVxuXHRcdFx0XHQgICAgICBpZiAoICFmb3JjZSAmJiB0YXJnZXRDdHguXy5fc2NvcGVbaWRdID09PSBzcmNDdHhbaWRdIHx8XG5cdFx0XHRcdFx0ICAgICAgdGFyZ2V0Q3R4Ll8uX3Njb3BlW2lkXSAmJiAodGFyZ2V0Q3R4Ll8uX3Njb3BlW2lkXS5jb25zdHJ1Y3RvciA9PT0gc3JjQ3R4W2lkXSkgKVxuXHRcdFx0XHRcdCAgICAgIHJldHVybjtcblx0XHRcdFx0XG5cdFx0XHRcdCAgICAgIC8vIGhvdCBzd2l0Y2hcblx0XHRcdFx0ICAgICAgaWYgKCAhZm9yY2UgJiYgdGFyZ2V0Q3R4Ll8uX3Njb3BlW2lkXSApIHtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHQgICAgICBpZiAoICFleHRlcm5hbCAmJiAhaXMuZm4odGFyZ2V0Q3R4Ll8uX3Njb3BlW2lkXSkgKSB7XG5cdFx0XHRcdFx0XHQgICAgICBjb25zb2xlLmluZm8oXCJSZXNjb3BlIFN0b3JlIDogXCIsIGlkLCBcIiBhbHJlYWR5IGV4aXN0IGluIHRoaXMgc2NvcGUgISAoIEhvdCBzd2l0Y2hpbmcgdGhlIHN0b3JlICkgISEhXCIpO1xuXHRcdFx0XHRcdFx0ICAgICAgbGV0IHRtcCAgICAgICAgICAgICAgICA9IHRhcmdldEN0eC5fLl9zY29wZVtpZF07XG5cdFx0XHRcdFx0XHQgICAgICB0YXJnZXRDdHguXy5fc2NvcGVbaWRdID0gc3JjQ3R4W2lkXTtcblx0XHRcdFx0XHRcdCAgICAgIGhvdFJlbG9hZGluZyAgICAgICAgICAgPSB0bXAubmV4dFN0YXRlO1xuXHRcdFx0XHRcdFx0ICAgICAgdG1wLmRlc3Ryb3koKTtcblx0XHRcdFx0XHQgICAgICB9XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0ICAgICAgaWYgKCAhZXh0ZXJuYWwgJiYgaXMuZm4odGFyZ2V0Q3R4Ll8uX3Njb3BlW2lkXSkgKVxuXHRcdFx0XHRcdFx0ICAgICAgdGFyZ2V0Q3R4Ll8uX3Njb3BlW2lkXSA9IHNyY0N0eFtpZF07XG5cdFx0XHRcdFx0XG5cdFx0XHRcdCAgICAgIH1cblx0XHRcdFx0ICAgICAgZWxzZSBpZiAoICFmb3JjZSAmJiAhZXh0ZXJuYWwgKVxuXHRcdFx0XHRcdCAgICAgIF8uX3Njb3BlW2lkXSA9IHNyY0N0eFtpZF07XG5cdFx0XHRcdFxuXHRcdFx0XHRcblx0XHRcdFx0ICAgICAgLy8gbWFwIHRoZSBzdG9yZSBpZFxuXHRcdFx0XHQgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoXG5cdFx0XHRcdFx0ICAgICAgdGFyZ2V0Q3R4Ll8uc3RvcmVzLnByb3RvdHlwZSxcblx0XHRcdFx0XHQgICAgICBpZCxcblx0XHRcdFx0XHQgICAgICB7XG5cdFx0XHRcdFx0XHQgICAgICBlbnVtZXJhYmxlICA6IHRydWUsXG5cdFx0XHRcdFx0XHQgICAgICBjb25maWd1cmFibGU6IHRydWUsXG5cdFx0XHRcdFx0XHQgICAgICBnZXQgICAgICAgICA6ICgpID0+IF8uX3Njb3BlW2lkXVxuXHRcdFx0XHRcdCAgICAgIH1cblx0XHRcdFx0ICAgICAgKTtcblx0XHRcdFx0XG5cdFx0XHRcdCAgICAgIC8vIG5vdCBtYXBwaW5nIGhpZXJhcmNoaWMgc2NvcGVzXG5cdFx0XHRcdCAgICAgIGlmICggaWQgPT09IFwiJHBhcmVudFwiICkgcmV0dXJuO1xuXHRcdFx0XHRcblx0XHRcdFx0ICAgICAgLy8gbWFwIHN0YXRlICYgZGF0YVxuXHRcdFx0XHQgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoXG5cdFx0XHRcdFx0ICAgICAgdGFyZ2V0Q3R4Ll8uc3RhdGUucHJvdG90eXBlLFxuXHRcdFx0XHRcdCAgICAgIGlkLFxuXHRcdFx0XHRcdCAgICAgIHtcblx0XHRcdFx0XHRcdCAgICAgIGVudW1lcmFibGUgIDogdHJ1ZSxcblx0XHRcdFx0XHRcdCAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcblx0XHRcdFx0XHRcdCAgICAgIGdldCAgICAgICAgIDogKCkgPT4gKF8uX3Njb3BlW2lkXSAmJiBfLl9zY29wZVtpZF0uc3RhdGUpLFxuXHRcdFx0XHRcdFx0ICAgICAgc2V0ICAgICAgICAgOiAoIHYgKSA9PiAodGhpcy5fbW91bnQoaWQsIHVuZGVmaW5lZCwgdikpXG5cdFx0XHRcdFx0ICAgICAgfVxuXHRcdFx0XHQgICAgICApO1xuXHRcdFx0XHQgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoXG5cdFx0XHRcdFx0ICAgICAgdGFyZ2V0Q3R4Ll8uZGF0YS5wcm90b3R5cGUsXG5cdFx0XHRcdFx0ICAgICAgaWQsXG5cdFx0XHRcdFx0ICAgICAge1xuXHRcdFx0XHRcdFx0ICAgICAgZW51bWVyYWJsZSAgOiB0cnVlLFxuXHRcdFx0XHRcdFx0ICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuXHRcdFx0XHRcdFx0ICAgICAgZ2V0ICAgICAgICAgOiAoKSA9PiAoXy5fc2NvcGVbaWRdICYmIF8uX3Njb3BlW2lkXS5kYXRhKSxcblx0XHRcdFx0XHRcdCAgICAgIHNldCAgICAgICAgIDogKCB2ICkgPT4gKHRoaXMuX21vdW50KGlkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdikpXG5cdFx0XHRcdFx0ICAgICAgfVxuXHRcdFx0XHQgICAgICApO1xuXHRcdFx0XHRcblx0XHRcdFx0XG5cdFx0XHRcdCAgICAgIC8vIGFjdGlvbiBtYXBwaW5nXG5cdFx0XHRcdCAgICAgIGxldCBhY3Rpb25zICAgICAgID0gc3JjQ3R4W2lkXSBpbnN0YW5jZW9mIFNjb3BlLlN0b3JlXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgPyBzcmNDdHhbaWRdLmNvbnN0cnVjdG9yLmFjdGlvbnNcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICA6IHNyY0N0eFtpZF0uYWN0aW9ucyxcblx0XHRcdFx0ICAgICAgICAgIGFjdGl2ZUFjdGlvbnMgPSB0YXJnZXRDdHguXy5hY3Rpb25zLnByb3RvdHlwZTtcblx0XHRcdFx0ICAgICAgaWYgKCBTY29wZS5pc1Njb3BlKF8uX3Njb3BlW2lkXS5wcm90b3R5cGUpIClcblx0XHRcdFx0XHQgICAgICB0aGlzLl9tb3VudChpZCk7XG5cdFx0XHRcdCAgICAgIGlmICggU2NvcGUuaXNTY29wZShfLl9zY29wZVtpZF0pICkge1xuXHRcdFx0XHRcdCAgICAgIGFjdGl2ZUFjdGlvbnNbaWRdID0gXy5fc2NvcGVbaWRdLmFjdGlvbnM7XG5cdFx0XHRcdCAgICAgIH1cblx0XHRcdFx0ICAgICAgaWYgKCAhU2NvcGUuaXNTdG9yZShfLl9zY29wZVtpZF0pICYmICFTY29wZS5pc1N0b3JlQ2xhc3MoXy5fc2NvcGVbaWRdKSApXG5cdFx0XHRcdFx0ICAgICAgcmV0dXJuO1xuXHRcdFx0XHRcblx0XHRcdFx0ICAgICAgYWN0aW9ucyAmJlxuXHRcdFx0XHQgICAgICBPYmplY3Qua2V5cyhhY3Rpb25zKVxuXHRcdFx0XHQgICAgICAgICAgICAuZm9yRWFjaChcblx0XHRcdFx0XHQgICAgICAgICAgICAoIGFjdCApID0+IHtcblx0XHRcdFx0XHRcdCAgICAgICAgICAgIGlmICggYWN0aXZlQWN0aW9ucy5oYXNPd25Qcm9wZXJ0eShhY3QpIClcblx0XHRcdFx0XHRcdFx0ICAgICAgICAgICAgYWN0aXZlQWN0aW9uc1thY3RdLl9fdGFyZ2V0U3RvcmVzKys7XG5cdFx0XHRcdFx0XHQgICAgICAgICAgICBlbHNlIHtcblx0XHRcdFx0XHRcdFx0ICAgICAgICAgICAgYWN0aXZlQWN0aW9uc1thY3RdICAgICAgICAgICAgICAgID0gdGhpcy5kaXNwYXRjaC5iaW5kKHRoaXMsIGFjdCk7XG5cdFx0XHRcdFx0XHRcdCAgICAgICAgICAgIGFjdGl2ZUFjdGlvbnNbYWN0XS5fX3RhcmdldFN0b3JlcyA9IDE7XG5cdFx0XHRcdFx0XHQgICAgICAgICAgICB9XG5cdFx0XHRcdFx0ICAgICAgICAgICAgfVxuXHRcdFx0XHQgICAgICAgICAgICApO1xuXHRcdFx0XHRcblx0XHRcdFx0ICAgICAgLy8gcmVtb3VudCB0aGUgc3RvcmUgaWYgaXQgd2FzIGhvdCByZWxvYWRlZFxuXHRcdFx0XHQgICAgICBpZiAoIGhvdFJlbG9hZGluZyApXG5cdFx0XHRcdFx0ICAgICAgdGhpcy5fbW91bnQoaWQsIG51bGwsIGhvdFJlbG9hZGluZyk7XG5cdFx0XHQgICAgICB9XG5cdFx0ICAgICAgKVxuXHR9XG5cdFxuXHQvKipcblx0ICogTWFrZSB0aGlzIHNjb3BlIHdhdGNoaW5nIHRoZSBsb2NhbCBzdG9yZSAnaWQnXG5cdCAqIEBwYXJhbSBpZFxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cblx0ICogQHByaXZhdGVcblx0ICovXG5cdF93YXRjaFN0b3JlKCBpZCApIHtcblx0XHRsZXQgXyA9IHRoaXMuXztcblx0XHRpZiAoICFfLl9saXN0ZW5pbmdbaWRdICYmICFpcy5mbihfLl9zY29wZVtpZF0pICkge1xuXHRcdFx0IV8uX3Njb3BlW2lkXS5fYXV0b0Rlc3Ryb3kgJiYgXy5fc2NvcGVbaWRdLnJldGFpbihcInNjb3BlZFwiKTtcblx0XHRcdCFfLl9zY29wZVtpZF0uaXNTdGFibGUoKSAmJiB0aGlzLndhaXQoaWQpO1xuXHRcdFx0Xy5fc2NvcGVbaWRdLm9uKFxuXHRcdFx0XHRfLl9saXN0ZW5pbmdbaWRdID0ge1xuXHRcdFx0XHRcdCdkZXN0cm95JyA6IHMgPT4ge1xuXHRcdFx0XHRcdFx0ZGVsZXRlIF8uX2xpc3RlbmluZ1tpZF07XG5cdFx0XHRcdFx0XHRfLl9zY29wZVtpZF0gPSBfLl9zY29wZVtpZF0uY29uc3RydWN0b3I7XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHQndXBkYXRlJyAgOiBzID0+IHRoaXMucHJvcGFnKCksXG5cdFx0XHRcdFx0J3N0YWJsZScgIDogcyA9PiB0aGlzLnJlbGVhc2UoaWQpLFxuXHRcdFx0XHRcdCd1bnN0YWJsZSc6IHMgPT4gdGhpcy53YWl0KGlkKVxuXHRcdFx0XHR9KTtcblx0XHR9XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBNaXggdGFyZ2V0Q3R4IG9uIHRoaXMgc2NvcGVcblx0ICogTWl4ZWQgc2NvcGUgcGFyZW50cyBhcmUgTk9UIG1hcHBlZFxuXHQgKiBAcGFyYW0gdGFyZ2V0Q3R4XG5cdCAqL1xuXHRtaXhpbiggdGFyZ2V0Q3R4ICkge1xuXHRcdGxldCBwYXJlbnQgPSB0aGlzLnBhcmVudCxcblx0XHQgICAgbGlzdHMsXG5cdFx0ICAgIF8gICAgICA9IHRoaXMuXztcblx0XHRcblx0XHRfLl9taXhlZC5wdXNoKHRhcmdldEN0eCk7XG5cdFx0XG5cdFx0dGFyZ2V0Q3R4LnJldGFpbihcIm1peGVkVG9cIik7XG5cdFx0XG5cdFx0aWYgKCAhdGFyZ2V0Q3R4Ll9zdGFibGUgKVxuXHRcdFx0dGhpcy53YWl0KHRhcmdldEN0eC5faWQpO1xuXHRcdFxuXHRcdF8uX21peGVkTGlzdC5wdXNoKGxpc3RzID0ge1xuXHRcdFx0J3N0YWJsZScgIDogcyA9PiB0aGlzLnJlbGVhc2UodGFyZ2V0Q3R4Ll9pZCksXG5cdFx0XHQndW5zdGFibGUnOiBzID0+IHRoaXMud2FpdCh0YXJnZXRDdHguX2lkKSxcblx0XHRcdCd1cGRhdGUnICA6IHMgPT4gdGhpcy5fcHJvcGFnKClcblx0XHR9KTtcblx0XHRcblx0XHR0YXJnZXRDdHgub24obGlzdHMpO1xuXHRcdFxuXHRcdC8vIHJlc2V0IHByb3Rvc1xuXHRcdC8vIHB1c2ggbmV3IHByb3RvIHdpdGggcGFyZW50XG5cdFx0X19wcm90b19fcHVzaCh0aGlzLCAnYWN0aW9ucycsIHBhcmVudCk7XG5cdFx0X19wcm90b19fcHVzaCh0aGlzLCAnc3RvcmVzJywgcGFyZW50KTtcblx0XHRfX3Byb3RvX19wdXNoKHRoaXMsICdzdGF0ZScsIHBhcmVudCk7XG5cdFx0X19wcm90b19fcHVzaCh0aGlzLCAnZGF0YScsIHBhcmVudCk7XG5cdFx0XG5cdFx0Ly8gYmluZCBsb2NhbCBhY2Nlc3NvcnMgaW4gdGhlIG5ldyBwcm90b1xuXHRcdHRoaXMucmVsaW5rKF8uX3Njb3BlLCB0aGlzLCBmYWxzZSwgdHJ1ZSk7XG5cdFx0XG5cdFx0Xy5fbWl4ZWQuZm9yRWFjaChcblx0XHRcdGN0eCA9PiB7XG5cdFx0XHRcdC8vIHB1c2ggcHJvdG9zXG5cdFx0XHRcdF9fcHJvdG9fX3B1c2godGhpcywgJ2FjdGlvbnMnKTtcblx0XHRcdFx0X19wcm90b19fcHVzaCh0aGlzLCAnc3RvcmVzJyk7XG5cdFx0XHRcdF9fcHJvdG9fX3B1c2godGhpcywgJ3N0YXRlJyk7XG5cdFx0XHRcdF9fcHJvdG9fX3B1c2godGhpcywgJ2RhdGEnKTtcblx0XHRcdFx0dGhpcy5zdG9yZXMuX19vcmlnaW4gPSBcIm1peGVkIFwiICsgY3R4Ll9pZDtcblx0XHRcdFx0Ly8gd3JpdGUgbWl4ZWQgYWNjZXNzb3JzXG5cdFx0XHRcdGN0eC5yZWxpbmsoY3R4Ll8uX3Njb3BlLCB0aGlzLCB0cnVlLCB0cnVlKVxuXHRcdFx0fVxuXHRcdClcblx0fVxuXHRcblx0LyoqXG5cdCAqIEJpbmQgc3RvcmVzIGZyb20gdGhpcyBzY29wZSwgaGlzIHBhcmVudHMgb3IgbWl4ZWQgc2NvcGVzIHRvIG9ialxuXHQgKlxuXHQgKiBAcGFyYW0gdGFyZ2V0IHtSZWFjdC5Db21wb25lbnR8U3RvcmV8ZnVuY3Rpb259XG5cdCAqIEBwYXJhbSBrZXkge3N0cmluZ30gc3RvcmVzIGtleXMgdG8gYmluZCB1cGRhdGVzXG5cdCAqIEBwYXJhbSBhc1xuXHQgKiBAcGFyYW0gc2V0SW5pdGlhbCB7Ym9vbGVhbn0gZmFsc2UgdG8gbm90IHByb3BhZyBpbml0aWFsIHZhbHVlIChkZWZhdWx0IDogdHJ1ZSlcblx0ICovXG5cdGJpbmQoIHRhcmdldCwga2V5LCBhcywgc2V0SW5pdGlhbCA9IHRydWUsIHJldk1hcCA9IHt9ICkge1xuXHRcdGxldCBsYXN0UmV2cywgZGF0YSwgcmVmS2V5cztcblx0XHRpZiAoIGtleSAmJiAhaXMuYXJyYXkoa2V5KSApXG5cdFx0XHRrZXkgPSBba2V5XTtcblx0XHRcblx0XHRpZiAoIGFzID09PSBmYWxzZSB8fCBhcyA9PT0gdHJ1ZSApIHtcblx0XHRcdHNldEluaXRpYWwgPSBhcztcblx0XHRcdGFzICAgICAgICAgPSBudWxsO1xuXHRcdH1cblx0XHRcblx0XHRyZWZLZXlzID0ga2V5XG5cdFx0XHQubWFwKGlkID0+IChpcy5zdHJpbmcoaWQpID8gaWQgOiBpZC5uYW1lKSlcblx0XHRcdC5tYXAoaWQgPT4gKHRoaXMucGFyc2VSZWYoaWQpKSk7XG5cdFx0XG5cdFx0XG5cdFx0dGhpcy5fLmZvbGxvd2Vycy5wdXNoKFxuXHRcdFx0W1xuXHRcdFx0XHR0YXJnZXQsXG5cdFx0XHRcdGtleSxcblx0XHRcdFx0YXMgfHwgdW5kZWZpbmVkLFxuXHRcdFx0XHRsYXN0UmV2cyA9IHJlZktleXMucmVkdWNlKCggcmV2cywgcmVmICkgPT4ge1xuXHRcdFx0XHRcdHJldnNbcmVmLnN0b3JlSWRdID0gcmV2c1tyZWYuc3RvcmVJZF0gfHwge1xuXHRcdFx0XHRcdFx0cmV2IDogMCxcblx0XHRcdFx0XHRcdHJlZnM6IFtdXG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRyZXZzW3JlZi5zdG9yZUlkXS5yZWZzLnB1c2gocmVmKTtcblx0XHRcdFx0XHRyZXR1cm4gcmV2cztcblx0XHRcdFx0fSwgcmV2TWFwKVxuXHRcdFx0XSk7XG5cdFx0XG5cdFx0dGhpcy5tb3VudChrZXkpO1xuXHRcdHRoaXMucmV0YWluU3RvcmVzKE9iamVjdC5rZXlzKGxhc3RSZXZzKSwgJ2xpc3RlbmVycycpO1xuXHRcdFxuXHRcdGlmICggc2V0SW5pdGlhbCAmJiB0aGlzLl9zdGFibGUgKSB7XG5cdFx0XHRkYXRhID0gdGhpcy5nZXRVcGRhdGVzKGxhc3RSZXZzKTtcblx0XHRcdGlmICggIWRhdGEgKSByZXR1cm4gdGhpcztcblx0XHRcdGlmICggdHlwZW9mIHRhcmdldCAhPSBcImZ1bmN0aW9uXCIgKSB7XG5cdFx0XHRcdGlmICggYXMgKSB0YXJnZXQuc2V0U3RhdGUoeyBbYXNdOiBkYXRhIH0pO1xuXHRcdFx0XHRlbHNlIHRhcmdldC5zZXRTdGF0ZShkYXRhKTtcblx0XHRcdH1cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHR0YXJnZXQoZGF0YSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cdFxuXHQvKipcblx0ICogVW4gYmluZCB0aGlzIHNjb3BlIG9mZiB0aGUgZ2l2ZW4gY29tcG9uZW50LWtleXNcblx0ICogQHBhcmFtIHRhcmdldFxuXHQgKiBAcGFyYW0ga2V5XG5cdCAqIEByZXR1cm5zIHtBcnJheS48Kj59XG5cdCAqL1xuXHR1bkJpbmQoIHRhcmdldCwga2V5LCBhcyApIHtcblx0XHRsZXQgZm9sbG93ZXJzID0gdGhpcy5fLmZvbGxvd2Vycyxcblx0XHQgICAgaSAgICAgICAgID0gZm9sbG93ZXJzICYmIGZvbGxvd2Vycy5sZW5ndGg7XG5cdFx0d2hpbGUgKCBmb2xsb3dlcnMgJiYgaS0tIClcblx0XHRcdGlmICggZm9sbG93ZXJzW2ldWzBdID09PSB0YXJnZXQgJiZcblx0XHRcdFx0KCcnICsgZm9sbG93ZXJzW2ldWzFdKSA9PSAoJycgKyBrZXkpICYmXG5cdFx0XHRcdGZvbGxvd2Vyc1tpXVsyXSA9PSBhcyApIHtcblx0XHRcdFx0dGhpcy5kaXNwb3NlU3RvcmVzKE9iamVjdC5rZXlzKGZvbGxvd2Vyc1tpXVszXSksICdsaXN0ZW5lcnMnKTtcblx0XHRcdFx0cmV0dXJuIGZvbGxvd2Vycy5zcGxpY2UoaSwgMSk7XG5cdFx0XHR9XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBNb3VudCB0aGUgc3RvcmVzIGluIHN0b3JlSWRMaXN0IGZyb20gdGhpcyBzY29wZSwgaXRzIHBhcmVudHMgYW5kIG1peGVkIHNjb3BlXG5cdCAqIEJpbmQgdGhlbSB0byAndG8nXG5cdCAqIEhvb2sgJ3RvJyBzbyBpdCB3aWxsIGF1dG8gdW5iaW5kIG9uICdkZXN0cm95JyBvciAnY29tcG9uZW50V2lsbFVubW91bnQnXG5cdCAqIEBwYXJhbSB0YXJnZXRcblx0ICogQHBhcmFtIHN0b3JlSWRMaXN0XG5cdCAqIEBwYXJhbSBiaW5kXG5cdCAqIEByZXR1cm5zIHtPYmplY3R9IEluaXRpYWwgb3V0cHV0cyBvZiB0aGUgc3RvcmVzIGluICdzdG9yZXNMaXN0J1xuXHQgKi9cblx0bWFwKCB0YXJnZXQsIHN0b3JlSWRMaXN0LCBiaW5kID0gdHJ1ZSwgcmV2TWFwICkge1xuXHRcdGxldCBTdG9yZSAgID0gdGhpcy5jb25zdHJ1Y3Rvci5TdG9yZTtcblx0XHRzdG9yZUlkTGlzdCA9IGlzLmFycmF5KHN0b3JlSWRMaXN0KSA/IHN0b3JlSWRMaXN0IDogW3N0b3JlSWRMaXN0XTtcblx0XHRsZXQgcmVmTGlzdCA9IHN0b3JlSWRMaXN0Lm1hcCh0aGlzLnBhcnNlUmVmKTtcblx0XHR0aGlzLm1vdW50KHN0b3JlSWRMaXN0KTtcblx0XHRpZiAoIGJpbmQgJiYgdGFyZ2V0IGluc3RhbmNlb2YgU3RvcmUgKSB7XG5cdFx0XHRTdG9yZS5tYXAodGFyZ2V0LCBzdG9yZUlkTGlzdCwgdGhpcywgdGhpcywgZmFsc2UpXG5cdFx0fVxuXHRcdGVsc2UgaWYgKCBiaW5kICkge1xuXHRcdFx0dGhpcy5iaW5kKHRhcmdldCwgc3RvcmVJZExpc3QsIHVuZGVmaW5lZCwgZmFsc2UpO1xuXHRcdFx0XG5cdFx0XHRsZXQgbWl4ZWRDV1VubW91bnQsXG5cdFx0XHQgICAgdW5Nb3VudEtleSA9IHRhcmdldC5pc1JlYWN0Q29tcG9uZW50ID8gXCJjb21wb25lbnRXaWxsVW5tb3VudFwiIDogXCJkZXN0cm95XCI7XG5cdFx0XHRcblx0XHRcdGlmICggdGFyZ2V0Lmhhc093blByb3BlcnR5KHVuTW91bnRLZXkpICkge1xuXHRcdFx0XHRtaXhlZENXVW5tb3VudCA9IHRhcmdldFt1bk1vdW50S2V5XTtcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0dGFyZ2V0W3VuTW91bnRLZXldID0gKCAuLi5hcmd6ICkgPT4ge1xuXHRcdFx0XHRkZWxldGUgdGFyZ2V0W3VuTW91bnRLZXldO1xuXHRcdFx0XHRpZiAoIG1peGVkQ1dVbm1vdW50IClcblx0XHRcdFx0XHR0YXJnZXRbdW5Nb3VudEtleV0gPSBtaXhlZENXVW5tb3VudDtcblx0XHRcdFx0XG5cdFx0XHRcdHRoaXMudW5CaW5kKHRhcmdldCwgc3RvcmVJZExpc3QpO1xuXHRcdFx0XHRyZXR1cm4gdGFyZ2V0W3VuTW91bnRLZXldICYmIHRhcmdldFt1bk1vdW50S2V5XSguLi5hcmd6KTtcblx0XHRcdH1cblx0XHRcdFxuXHRcdH1cblx0XHRyZXR1cm4gcmV2TWFwICYmIHRoaXMuZ2V0VXBkYXRlcyhyZXZNYXApXG5cdFx0XHR8fCByZWZMaXN0LnJlZHVjZSgoIGRhdGEsIHJlZiApID0+IHtcblx0XHRcdFx0d2Fsa25TZXQoZGF0YSwgcmVmLmFsaWFzIHx8IHJlZi5wYXRoLCB0aGlzLnJldHJpZXZlKHJlZi5wYXRoKSlcblx0XHRcdFx0cmV0dXJuIGRhdGE7XG5cdFx0XHR9LCB7fSk7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBHZXQgY3VycmVudCBkYXRhIHZhbHVlIGZyb20ganNvbiBwYXRoXG5cdCAqIEBwYXJhbSBwYXRoXG5cdCAqIEByZXR1cm5zIHtzdHJpbmd8Kn1cblx0ICovXG5cdHJldHJpZXZlKCBwYXRoID0gXCJcIiApIHtcblx0XHRwYXRoID0gaXMuc3RyaW5nKHBhdGgpID8gcGF0aC5zcGxpdCgnLicpIDogcGF0aDtcblx0XHRcblx0XHRcblx0XHRyZXR1cm4gcGF0aCAmJlxuXHRcdFx0dGhpcy5zdG9yZXNbcGF0aFswXV0gJiZcblx0XHRcdHRoaXMuc3RvcmVzW3BhdGhbMF1dLnJldHJpZXZlICYmXG5cdFx0XHR0aGlzLnN0b3Jlc1twYXRoWzBdXS5yZXRyaWV2ZShwYXRoLnNsaWNlKDEpKTtcblx0fVxuXHRcblx0LyoqXG5cdCAqIFJlc3RvcmUgYWxsIG5vZGVzIGluIGEganNvblBhdGhcblx0ICogQHBhcmFtIHBhdGhcblx0ICogQHJldHVybnMge3N0cmluZ3wqfVxuXHQgKi9cblx0cmVzdG9yZVJlZlBhdGgoIHBhdGggPSBcIlwiICkge1xuXHRcdHBhdGggPSBpcy5zdHJpbmcocGF0aCkgPyBwYXRoLnNwbGl0KCcuJykgOiBwYXRoO1xuXHRcdFxuXHRcdGxldCBvYmosIGkgPSAwLCBjU2NvcGUgPSB0aGlzO1xuXHRcdFxuXHRcdHdoaWxlICggaSA8IHBhdGgubGVuZ3RoICkge1xuXHRcdFx0b2JqID0gY1Njb3BlLnN0b3Jlc1twYXRoW2ldXTtcblx0XHRcdGlmICggU2NvcGUuaXNTY29wZUNsYXNzKG9iailcblx0XHRcdFx0fHxcblx0XHRcdFx0U2NvcGUuaXNTdG9yZUNsYXNzKG9iaikgKSB7XG5cdFx0XHRcdGNTY29wZS5tb3VudChwYXRoWzBdKTtcblx0XHRcdFx0b2JqID0gY1Njb3BlLnN0b3Jlc1twYXRoW2ldXTtcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0aWYgKCBTY29wZS5pc1Njb3BlKG9iaikgKSB7XG5cdFx0XHRcdGNTY29wZSA9IG9iajtcblx0XHRcdFx0aSsrO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSBpZiAoIFNjb3BlLmlzU3RvcmUob2JqKSApIHtcblx0XHRcdFx0b2JqLnJlc3RvcmUoKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdFxuXHR9XG5cdFxuXHQvKipcblx0ICogR2V0IHRhcmdldCBzdG9yZSBmcm9tIGpzb24gcGF0aFxuXHQgKiBAcGFyYW0gcGF0aFxuXHQgKiBAcmV0dXJucyB7c3RyaW5nfCp9XG5cdCAqL1xuXHRyZXRyaWV2ZVN0b3JlKCBwYXRoID0gXCJcIiApIHtcblx0XHRwYXRoID0gaXMuc3RyaW5nKHBhdGgpID8gcGF0aC5zcGxpdCgnLicpIDogcGF0aDtcblx0XHRyZXR1cm4gcGF0aFxuXHRcdFx0JiYgcGF0aC5sZW5ndGhcblx0XHRcdCYmIChcblx0XHRcdFx0cGF0aC5sZW5ndGggIT0gMSAmJiB0aGlzLnN0b3Jlc1twYXRoWzBdXS5yZXRyaWV2ZVN0b3JlXG5cdFx0XHRcdD8gdGhpcy5zdG9yZXNbcGF0aFswXV0ucmV0cmlldmVTdG9yZShwYXRoLnNsaWNlKDEpKVxuXHRcdFx0XHQ6IHBhdGgubGVuZ3RoID09IDEgJiYgdGhpcy5zdG9yZXNbcGF0aFswXV1cblx0XHRcdCk7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBHZXQgb3IgdXBkYXRlIHN0b3JlcyByZXZpc2lvbnMgaW4gJ3N0b3Jlc1Jldk1hcCdcblx0ICogQHBhcmFtIHN0b3Jlc1Jldk1hcFxuXHQgKiBAcGFyYW0gbG9jYWxcblx0ICogQHJldHVybnMge3t9fVxuXHQgKi9cblx0Z2V0U3RvcmVzUmV2cyggc3RvcmVzUmV2TWFwID0ge30sIGxvY2FsICkge1xuXHRcdGxldCBjdHggPSB0aGlzLl8uX3Njb3BlO1xuXHRcdGlmICggIXN0b3Jlc1Jldk1hcCApIHtcblx0XHRcdHN0b3Jlc1Jldk1hcCA9IHt9O1xuXHRcdH1cblx0XHRPYmplY3Qua2V5cyhjdHgpLmZvckVhY2goXG5cdFx0XHRpZCA9PiB7XG5cdFx0XHRcdGlmICggaWQgPT0gXCIkcGFyZW50XCIgKSByZXR1cm47XG5cdFx0XHRcdGlmICggIWlzLmZuKGN0eFtpZF0pXG5cdFx0XHRcdCkge1xuXHRcdFx0XHRcdHN0b3Jlc1Jldk1hcFtpZF0gPSBjdHhbaWRdLl9yZXY7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZSBpZiAoICFzdG9yZXNSZXZNYXAuaGFzT3duUHJvcGVydHkoaWQpIClcblx0XHRcdFx0XHRzdG9yZXNSZXZNYXBbaWRdID0gZmFsc2Vcblx0XHRcdH1cblx0XHQpO1xuXHRcdGlmICggIWxvY2FsICkge1xuXHRcdFx0dGhpcy5fLl9taXhlZC5yZWR1Y2UoKCB1cGRhdGVkLCBjdHggKSA9PiAoY3R4LmdldFN0b3Jlc1JldnMoc3RvcmVzUmV2TWFwKSwgc3RvcmVzUmV2TWFwKSwgc3RvcmVzUmV2TWFwKTtcblx0XHRcdHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LmdldFN0b3Jlc1JldnMoc3RvcmVzUmV2TWFwKTtcblx0XHR9XG5cdFx0cmV0dXJuIHN0b3Jlc1Jldk1hcDtcblx0fVxuXHRcblx0LyoqXG5cdCAqIFJlY3Vyc2l2ZWx5IGdldCBhbGwgc3RvcmVzIHJldnNcblx0ICogQHBhcmFtIGNoaWxkc1xuXHQgKiBAcmV0dXJucyB7QXJyYXl9XG5cdCAqIEBwcml2YXRlXG5cdCAqL1xuXHRfZ2V0UmV2TWFwKCBzdG9yZXNSZXZNYXAgPSB7fSApIHtcblx0XHRsZXQgY3R4ID0gdGhpcy5fLl9zY29wZTtcblx0XHRPYmplY3Qua2V5cyhjdHgpLmZvckVhY2goXG5cdFx0XHRpZCA9PiB7XG5cdFx0XHRcdGlmICggaWQgPT0gXCIkcGFyZW50XCIgfHwgc3RvcmVzUmV2TWFwW2lkXSApIHJldHVybjtcblx0XHRcdFx0c3RvcmVzUmV2TWFwW2lkXSA9IHsgcmV2OiBjdHhbaWRdLl9yZXYsIHJlZnM6IFtdIH07XG5cdFx0XHRcdFxuXHRcdFx0fSk7XG5cdFx0dGhpcy5fLl9taXhlZC5yZWR1Y2VSaWdodChcblx0XHRcdCggc3RvcmVzUmV2TWFwLCBjdHggKSA9PiAoY3R4Ll9nZXRSZXZNYXAoc3RvcmVzUmV2TWFwKSksIHN0b3Jlc1Jldk1hcCk7XG5cdFx0dGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuX2dldFJldk1hcChzdG9yZXNSZXZNYXApO1xuXHRcdHJldHVybiBzdG9yZXNSZXZNYXA7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBHZXQgdXBkYXRlZCBvdXRwdXQgYmFzaW5nIHN0b3Jlc1Jldk1hcCdzIHJldmlzaW9ucy5cblx0ICogSWYgYSBzdG9yZSBpbiAnc3RvcmVzUmV2TWFwJyB3YXMgdXBkYXRlZDsgYWRkIGl0IHRvICdvdXRwdXQnICYgdXBkYXRlIHN0b3Jlc1Jldk1hcFxuXHQgKiBAcGFyYW0gc3RvcmVzUmV2TWFwXG5cdCAqIEBwYXJhbSBvdXRwdXRcblx0ICogQHBhcmFtIHVwZGF0ZWRcblx0ICogQHJldHVybnMgeyp8e319XG5cdCAqL1xuXHRnZXRSZWZzVXBkYXRlcyggcmVmcywgcmV2TWFwLCBvdXRwdXQgKSB7XG5cdFx0cmV2TWFwID0gcmV2TWFwIHx8IHJlZnNcblx0XHRcdC5tYXAoaWQgPT4gKGlzLnN0cmluZyhpZCkgPyBpZCA6IGlkLm5hbWUpKVxuXHRcdFx0Lm1hcChpZCA9PiAodGhpcy5wYXJzZVJlZihpZCkpKVxuXHRcdFx0LnJlZHVjZSgoIHJldnMsIHJlZiApID0+IHtcblx0XHRcdFx0cmV2c1tyZWYuc3RvcmVJZF0gPSByZXZzW3JlZi5zdG9yZUlkXSB8fCB7XG5cdFx0XHRcdFx0cmV2IDogMCxcblx0XHRcdFx0XHRyZWZzOiBbXVxuXHRcdFx0XHR9O1xuXHRcdFx0XHRyZXZzW3JlZi5zdG9yZUlkXS5yZWZzLnB1c2gocmVmKTtcblx0XHRcdFx0cmV0dXJuIHJldnM7XG5cdFx0XHR9LCB7fSk7XG5cdFx0XG5cdFx0cmV0dXJuIHRoaXMuZ2V0VXBkYXRlcyhyZXZNYXAsIG91dHB1dClcblx0fVxuXHRcblx0LyoqXG5cdCAqIEdldCBvciB1cGRhdGUgb3V0cHV0IGJhc2luZyBzdG9yZXNSZXZNYXAncyByZXZpc2lvbnMuXG5cdCAqIElmIGEgc3RvcmUgaW4gJ3N0b3Jlc1Jldk1hcCcgd2FzIHVwZGF0ZWQ7IGFkZCBpdCB0byAnb3V0cHV0JyAmIHVwZGF0ZSBzdG9yZXNSZXZNYXBcblx0ICogQHBhcmFtIHN0b3Jlc1Jldk1hcFxuXHQgKiBAcGFyYW0gb3V0cHV0XG5cdCAqIEBwYXJhbSB1cGRhdGVkXG5cdCAqIEByZXR1cm5zIHsqfHt9fVxuXHQgKi9cblx0Z2V0VXBkYXRlcyggc3RvcmVzUmV2TWFwLCBvdXRwdXQsIHVwZGF0ZWQgKSB7XG5cdFx0b3V0cHV0ICAgICAgID0gb3V0cHV0IHx8IHt9O1xuXHRcdHN0b3Jlc1Jldk1hcCA9IHN0b3Jlc1Jldk1hcCB8fCB0aGlzLl9nZXRSZXZNYXAoKTtcblx0XHRPYmplY3Qua2V5cyhzdG9yZXNSZXZNYXApLmZvckVhY2goXG5cdFx0XHRpZCA9PiB7XG5cdFx0XHRcdGxldCBzdG9yZSAgICAgICAgPSB0aGlzLnN0b3Jlc1tpZF07XG5cdFx0XHRcdHN0b3Jlc1Jldk1hcFtpZF0gPSBzdG9yZXNSZXZNYXBbaWRdIHx8IHsgcmV2OiAwLCByZWZzOiBbXSB9O1xuXHRcdFx0XHRcblx0XHRcdFx0aWYgKCBzdG9yZSAmJiBpcy5mbihzdG9yZSkgKSB7XG5cdFx0XHRcdFx0dXBkYXRlZCAgICA9IHRydWU7XG5cdFx0XHRcdFx0b3V0cHV0W2lkXSA9IHVuZGVmaW5lZDtcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlIGlmICggc3RvcmUgJiYgc3RvcmUuX3JldiA+IHN0b3Jlc1Jldk1hcFtpZF0ucmV2ICkge1xuXHRcdFx0XHRcdHN0b3Jlc1Jldk1hcFtpZF0ucmV2ID0gc3RvcmUuX3Jldjtcblx0XHRcdFx0XHR1cGRhdGVkICAgICAgICAgICAgICA9IHRydWU7XG5cdFx0XHRcdFx0c3RvcmVzUmV2TWFwW2lkXS5yZWZzLmZvckVhY2goXG5cdFx0XHRcdFx0XHRyZWYgPT4ge1xuXHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0b3V0cHV0W3JlZi5hbGlhc10gPSB0aGlzLnJldHJpZXZlKHJlZi5wYXRoKVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdClcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdClcblx0XHRyZXR1cm4gdXBkYXRlZCAmJiBvdXRwdXQ7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBSZWN1cnNpdmVseSBnZXQgYWxsIGNoaWxkIHNjb3Blc1xuXHQgKiBAcGFyYW0gY2hpbGRzXG5cdCAqIEByZXR1cm5zIHtBcnJheX1cblx0ICogQHByaXZhdGVcblx0ICovXG5cdF9nZXRBbGxDaGlsZHMoIGNoaWxkcyA9IFtdICkge1xuXHRcdGNoaWxkcy5wdXNoKC4uLnRoaXMuXy5jaGlsZFNjb3Blcyk7XG5cdFx0dGhpcy5fLmNoaWxkU2NvcGVzLmZvckVhY2goXG5cdFx0XHRjdHggPT4ge1xuXHRcdFx0XHRjdHguX2dldEFsbENoaWxkcyhjaGlsZHMpO1xuXHRcdFx0fVxuXHRcdCk7XG5cdFx0cmV0dXJuIGNoaWxkcztcblx0fVxuXHRcblx0LyoqXG5cdCAqIFNlcmlhbGl6ZSBhbGwgYWN0aXZlIHN0b3JlcyBzdGF0ZSAmIGRhdGEgaW4gZXZlcnkgY2hpbGRzICYgbWl4ZWQgc2NvcGVzXG5cdCAqXG5cdCAqIFNjb3BlcyB3aXRob3V0IGtleSBvciBpZCBhcmUgaWdub3JlZFxuXHQgKiBAcGFyYW0gb3V0cHV0XG5cdCAqIEByZXR1cm5zIHt7fX1cblx0ICovXG5cdHNlcmlhbGl6ZSggY2ZnID0ge30sIG91dHB1dCA9IHt9ICkge1xuXHRcdGxldCBjdHggICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSB0aGlzLl8uX3Njb3BlLFxuXHRcdCAgICB7IGJhc2VJZCwga2V5LCBrZXlQSUQsIGluY3JlbWVudElkIH0gPSB0aGlzLl8sXG5cdFx0ICAgIHtcblx0XHRcdCAgICBhbGlhcyxcblx0XHRcdCAgICBwYXJlbnRBbGlhcyxcblx0XHQgICAgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID0gY2ZnLFxuXHRcdCAgICBzaWQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSBrZXlcblx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAocGFyZW50QWxpYXMgfHwga2V5UElEKSArICc+JyArIGtleVxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGFsaWFzIHx8IHBhcmVudEFsaWFzICYmIChwYXJlbnRBbGlhcyArICcvJyArIGJhc2VJZCkgfHwgdGhpcy5faWQ7XG5cdFx0XG5cdFx0XG5cdFx0Ly9hbGlhcyA9IGFsaWFzIHx8IGJhc2VJZDtcblx0XHRyZXR1cm4gdGhpcy5zZXJpYWxpemVfZXgoY2ZnLCBvdXRwdXQsIHNpZCwgYWxpYXMsIFtcIiRwYXJlbnRcIl0pXG5cdH1cblx0XG5cdHNlcmlhbGl6ZV9leCggY2ZnID0ge30sIG91dHB1dCA9IHt9LCBzaWQsIGFsaWFzLCBleGNsdWRlICkge1xuXHRcdGxldCBfICAgICAgICAgICAgICAgPSB0aGlzLl8sXG5cdFx0ICAgIGN0eCAgICAgICAgICAgICA9IF8uX3Njb3BlLFxuXHRcdCAgICB7IGluY3JlbWVudElkIH0gPSBfLFxuXHRcdCAgICB7XG5cdFx0XHQgICAgd2l0aENoaWxkcyA9IHRydWUsXG5cdFx0XHQgICAgd2l0aE1peGVkICA9IHRydWUsXG5cdFx0XHQgICAgbm9yZWZzLFxuXHRcdCAgICB9ICAgICAgICAgICAgICAgPSBjZmc7XG5cdFx0XG5cdFx0aWYgKCBrZXlXYWxrbkdldChvdXRwdXQsIHNpZCkgKSB7XG5cdFx0XHRpZiAoICFpbmNyZW1lbnRJZCApLy8gZG9uZVxuXHRcdFx0XHRyZXR1cm4gb3V0cHV0O1xuXHRcdFx0ZWxzZSBpZiAoIGluY3JlbWVudElkICkgey8vIGdlbmVyYXRlIGtleSBpZFxuXHRcdFx0XHRsZXQgaSA9IC0xO1xuXHRcdFx0XHR3aGlsZSAoIGtleVdhbGtuR2V0KG91dHB1dCwgc2lkICsgJ1snICsgKCsraSkgKyAnXScpICkgO1xuXHRcdFx0XHRzaWQgPSBzaWQgKyAnWycgKyBpICsgJ10nO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRcblx0XHRrZXlXYWxrblNldChvdXRwdXQsIHNpZCwge30pO1xuXHRcdFxuXHRcdE9iamVjdC5rZXlzKGN0eCkuZm9yRWFjaChcblx0XHRcdGlkID0+IHtcblx0XHRcdFx0aWYgKCBleGNsdWRlLmluY2x1ZGVzKGlkKSB8fCBTY29wZS5pc1N0b3JlQ2xhc3MoY3R4W2lkXSkgfHwgU2NvcGUuaXNTY29wZUNsYXNzKGN0eFtpZF0pIClcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFxuXHRcdFx0XHRjdHhbaWRdLnNlcmlhbGl6ZSh7IC4uLmNmZywgcGFyZW50QWxpYXM6IHNpZCB9LCBvdXRwdXQpO1xuXHRcdFx0fVxuXHRcdClcblx0XHRcblx0XHR3aXRoQ2hpbGRzICYmIF8uY2hpbGRTY29wZXMuZm9yRWFjaChcblx0XHRcdGN0eCA9PiB7XG5cdFx0XHRcdCFjdHguXy5pc0xvY2FsSWQgJiYgY3R4LnNlcmlhbGl6ZSh7XG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpdGhDaGlsZCAgOiB0cnVlLFxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRoUGFyZW50czogZmFsc2UsXG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudEFsaWFzOiBzaWQsXG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpdGhNaXhlZCxcblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9yZWZzLFxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgb3V0cHV0KTtcblx0XHRcdH1cblx0XHQpO1xuXHRcdFxuXHRcdHdpdGhNaXhlZCAmJiBfLl9taXhlZC5mb3JFYWNoKFxuXHRcdFx0Y3R4ID0+IHtcblx0XHRcdFx0IWN0eC5fLmlzTG9jYWxJZCAmJiBjdHguc2VyaWFsaXplKHtcblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aENoaWxkICA6IGZhbHNlLFxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRoUGFyZW50czogZmFsc2UsXG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpdGhNaXhlZCxcblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9yZWZzXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBvdXRwdXQpO1xuXHRcdFx0fVxuXHRcdCk7XG5cdFx0XG5cdFx0aWYgKCBhbGlhcyApIHtcblx0XHRcdG91dHB1dCA9IE9iamVjdC5rZXlzKG91dHB1dClcblx0XHRcdCAgICAgICAgICAgICAgIC5yZWR1Y2UoXG5cdFx0XHRcdCAgICAgICAgICAgICAgICggaCwgayApID0+IChcblx0XHRcdFx0XHQgICAgICAgICAgICAgICBoW2sgPT09IHRoaXMuX2lkXG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICA/IGFsaWFzXG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICA6IGtdID0gb3V0cHV0W2tdLFxuXHRcdFx0XHRcdFx0ICAgICAgICAgICAgICAgaFxuXHRcdFx0XHQgICAgICAgICAgICAgICApLFxuXHRcdFx0XHQgICAgICAgICAgICAgICB7fVxuXHRcdFx0ICAgICAgICAgICAgICAgKVxuXHRcdH1cblx0XHRyZXR1cm4gb3V0cHV0O1xuXHR9XG5cdFxuXHQvKipcblx0ICogUmVzdG9yZSBzdGF0ZSAmIGRhdGEgZnJvbSB0aGUgc2VyaWFsaXplIGZuXG5cdCAqIEBwYXJhbSBzbmFwc2hvdFxuXHQgKiBAcGFyYW0gZm9yY2Vcblx0ICovXG5cdHJlc3RvcmUoIHNuYXBzaG90LCBjZmcgPSB7fSwgZm9yY2UgPSBpcy5ib29sKGNmZykgJiYgY2ZnICkge1xuXHRcdGxldCBjdHggPSB0aGlzLl8uX3Njb3BlLCBzbmFwO1xuXHRcdFxuXHRcdGlmICggc25hcHNob3QgJiYgY2ZnICYmIGNmZy5hbGlhcyAmJiBjZmcuYWxpYXMgIT0gdGhpcy5faWQgKSB7XG5cdFx0XHRzbmFwID0ge1xuXHRcdFx0XHQuLi5zbmFwc2hvdCxcblx0XHRcdFx0W3RoaXMuX2lkXTogc25hcHNob3RbY2ZnLmFsaWFzXVxuXHRcdFx0fVxuXHRcdFx0ZGVsZXRlIHNuYXBbY2ZnLmFsaWFzXTtcblx0XHRcdHNuYXBzaG90ID0gc25hcDtcblx0XHR9XG5cdFx0c25hcHNob3QgPSBzbmFwc2hvdFxuXHRcdFx0JiYga2V5V2Fsa25HZXQoc25hcHNob3QsIHRoaXMuX2lkKVxuXHRcdFx0fHwgdGhpcy50YWtlU25hcHNob3RCeUtleSh0aGlzLl9pZCk7XG5cdFx0XG5cdFx0XG5cdFx0aWYgKCAhc25hcHNob3QgKVxuXHRcdFx0cmV0dXJuO1xuXHRcdFxuXHRcdHRoaXMuXy5zbmFwc2hvdCA9IHsgLi4uc25hcHNob3QgfTtcblx0XHRcblx0XHRzbmFwICAgICAgICAgID0gc25hcHNob3RbJy8nXTtcblx0XHRzbmFwc2hvdFsnLyddID0geyAuLi5zbmFwIH07XG5cdFx0c25hcCAmJiBPYmplY3Qua2V5cyhzbmFwKS5mb3JFYWNoKFxuXHRcdFx0bmFtZSA9PiB7XG5cdFx0XHRcdGlmICggbmFtZSA9PSBcIiRwYXJlbnRcIiApIHJldHVybjtcblx0XHRcdFx0XG5cdFx0XHRcdGlmICggY3R4W25hbWVdICkge1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdGlmICggZm9yY2UgJiYgIWlzLmZuKGN0eFtuYW1lXSkgKVxuXHRcdFx0XHRcdFx0Y3R4W25hbWVdLmRlc3Ryb3koKTtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHR0aGlzLl9tb3VudChuYW1lKTsvLyBxdWlldFxuXHRcdFx0XHR9XG5cdFx0XHRcdFxuXHRcdFx0fVxuXHRcdClcblx0XHRcblx0XHR0aGlzLl8uX21peGVkLmZvckVhY2goXG5cdFx0XHRjdHggPT4ge1xuXHRcdFx0XHQhY3R4Ll8uaXNMb2NhbElkICYmIGN0eC5yZXN0b3JlKHVuZGVmaW5lZCwgZm9yY2UpO1xuXHRcdFx0fVxuXHRcdCk7XG5cdFx0XG5cdFx0dGhpcy5fLmNoaWxkU2NvcGVzLmZvckVhY2goXG5cdFx0XHRjdHggPT4ge1xuXHRcdFx0XHQhY3R4Ll8uaXNMb2NhbElkICYmIGN0eC5yZXN0b3JlKHVuZGVmaW5lZCwgZm9yY2UpO1xuXHRcdFx0fVxuXHRcdCk7XG5cdH1cblx0XG5cdGdldFNuYXBzaG90QnlLZXkoIGtleSwgbG9jYWwgKSB7XG5cdFx0Ly8gb25seSBoYXZlIHRoZSBsb2NhbCBzbmFwXG5cdFx0aWYgKCB0aGlzLl8uc25hcHNob3QgJiYga2V5LnN0YXJ0c1dpdGgodGhpcy5faWQpICkge1xuXHRcdFx0bGV0IG9iaiA9IGtleVdhbGtuR2V0KHRoaXMuXy5zbmFwc2hvdCwga2V5LnN1YnN0cih0aGlzLl9pZC5sZW5ndGgpKVxuXHRcdFx0cmV0dXJuIG9iajtcblx0XHR9XG5cdFx0ZWxzZSByZXR1cm4gIWxvY2FsXG5cdFx0XHQmJiB0aGlzLnBhcmVudFxuXHRcdFx0JiYgdGhpcy5wYXJlbnQuZ2V0U25hcHNob3RCeUtleShrZXkpXG5cdFx0XHR8fFxuXHRcdFx0dGhpcy5zdG9yZXMuJHBhcmVudFxuXHRcdFx0JiYgdGhpcy5zdG9yZXMuJHBhcmVudC5nZXRTbmFwc2hvdEJ5S2V5KGtleSk7XG5cdFx0XG5cdH1cblx0XG5cdGdldFNuYXBzaG90QnlLZXlFeHQoIHNuYXBzaG90LCBrZXksIGxvY2FsICkge1xuXHRcdC8vIG9ubHkgaGF2ZSB0aGUgbG9jYWwgc25hcFxuXHRcdGlmICggc25hcHNob3QgKSB7XG5cdFx0XHRsZXQgb2JqID0ga2V5V2Fsa25HZXQoc25hcHNob3QsIGtleSlcblx0XHRcdHJldHVybiBvYmo7XG5cdFx0fVxuXHRcdFxuXHR9XG5cdFxuXHR0YWtlU25hcHNob3RCeUtleSgga2V5LCBsb2NhbCApIHtcblx0XHRpZiAoIHRoaXMuXy5zbmFwc2hvdCAmJiBrZXkuc3RhcnRzV2l0aCh0aGlzLl9pZCkgKSB7XG5cdFx0XHRsZXQgb2JqID0ga2V5V2Fsa25HZXQodGhpcy5fLnNuYXBzaG90LCBrZXkuc3Vic3RyKHRoaXMuX2lkLmxlbmd0aCkpXG5cdFx0XHRpZiAoIG9iaiApIHtcblx0XHRcdFx0dGhpcy5kZWxldGVTbmFwc2hvdEJ5S2V5KGtleSwgdHJ1ZSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gb2JqO1xuXHRcdH1cblx0XHRlbHNlIHJldHVybiAhbG9jYWxcblx0XHRcdCYmIHRoaXMucGFyZW50XG5cdFx0XHQmJiB0aGlzLnBhcmVudC50YWtlU25hcHNob3RCeUtleShrZXkpXG5cdFx0XHR8fFxuXHRcdFx0dGhpcy5zdG9yZXMuJHBhcmVudFxuXHRcdFx0JiYgdGhpcy5zdG9yZXMuJHBhcmVudC50YWtlU25hcHNob3RCeUtleShrZXkpO1xuXHR9XG5cdFxuXHRkZWxldGVTbmFwc2hvdEJ5S2V5KCBrZXksIGxvY2FsICkge1xuXHRcdGlmICggdGhpcy5fLnNuYXBzaG90ICYmIGtleS5zdGFydHNXaXRoKHRoaXMuX2lkKSApIHtcblx0XHRcdGxldCBvYmogPSBrZXlXYWxrbkdldCh0aGlzLl8uc25hcHNob3QsIGtleS5zdWJzdHIodGhpcy5faWQubGVuZ3RoKS5yZXBsYWNlKC9eKC4qW1xcPnxcXC9dKVteXFw+fFxcL10rJC9pZywgJyQxJykpXG5cdFx0XHRpZiAoIG9iaiApXG5cdFx0XHRcdGRlbGV0ZSBvYmpba2V5LnJlcGxhY2UoL14uKltcXD58XFwvXShbXlxcPnxcXC9dKykkL2lnLCAnJDEnKV1cblx0XHR9XG5cdFx0cmV0dXJuICFsb2NhbFxuXHRcdFx0JiYgdGhpcy5wYXJlbnRcblx0XHRcdCYmIHRoaXMucGFyZW50LmRlbGV0ZVNuYXBzaG90QnlLZXkoa2V5KVxuXHRcdFx0fHxcblx0XHRcdHRoaXMuc3RvcmVzLiRwYXJlbnRcblx0XHRcdCYmIHRoaXMuc3RvcmVzLiRwYXJlbnQuZGVsZXRlU25hcHNob3RCeUtleShrZXkpO1xuXHR9XG5cdFxuXHRzZXRTdGF0ZSggcFN0YXRlICkge1xuXHRcdE9iamVjdC5rZXlzKHBTdGF0ZSlcblx0XHQgICAgICAuZm9yRWFjaChrID0+ICh0aGlzLnN0YXRlW2tdID0gcFN0YXRlW2tdKSlcblx0fVxuXHRcblx0LyoqXG5cdCAqIGdldCBhIHBhcnNlZCByZWZlcmVuY2Vcblx0ICogQHBhcmFtIF9yZWZcblx0ICogQHJldHVybnMge3tzdG9yZUlkLCBwYXRoLCBhbGlhczogKiwgcmVmOiAqfX1cblx0ICovXG5cdHBhcnNlUmVmKCBfcmVmICkge1xuXHRcdGlmICggdHlwZW9mIF9yZWYgIT09ICdzdHJpbmcnICkgey8vIEB0b2RvIDogcm0gdGhpc1xuXHRcdFx0dGhpcy5yZWdpc3Rlcih7IFtfcmVmLm5hbWVdOiBfcmVmLnN0b3JlIH0pO1xuXHRcdFx0X3JlZiA9IF9yZWYubmFtZTtcblx0XHR9XG5cdFx0bGV0IHJlZiA9IF9yZWYuc3BsaXQoJzonKTtcblx0XHRyZWZbMF0gID0gcmVmWzBdLnNwbGl0KCcuJyk7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHN0b3JlSWQ6IHJlZlswXVswXSxcblx0XHRcdHBhdGggICA6IHJlZlswXSxcblx0XHRcdGFsaWFzICA6IHJlZlsxXSB8fCByZWZbMF1bcmVmWzBdLmxlbmd0aCAtIDFdLFxuXHRcdFx0cmVmICAgIDogX3JlZlxuXHRcdH07XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBEaXNwYXRjaCBhbiBhY3Rpb24gdG8gdGhlIHRvcCBwYXJlbnQgJiBtaXhlZCBzY29wZXMsIGluIGFsbCBzdG9yZXNcblx0ICpcblx0ICogQHBhcmFtIGFjdGlvblxuXHQgKiBAcGFyYW0gZGF0YVxuXHQgKiBAcmV0dXJucyB7U2NvcGV9XG5cdCAqL1xuXHRkaXNwYXRjaCggYWN0aW9uLCAuLi5hcmd6ICkge1xuXHRcdGlmICggdGhpcy5kZWFkICkge1xuXHRcdFx0Y29uc29sZS53YXJuKFwiRGlzcGF0Y2ggd2FzIGNhbGxlZCBvbiBhIGRlYWQgc2NvcGUsIGNoZWNrIHlvdSdyZSBhc3luYyBmdW5jdGlvbnMgaW4gdGhpcyBzdGFjay4uLlwiLCAobmV3IEVycm9yKCkpLnN0YWNrKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0bGV0IGJBY3RzID0gdGhpcy5fLl9ib3VuZGVkQWN0aW9ucztcblx0XHRPYmplY3Qua2V5cyh0aGlzLl8uX3Njb3BlKVxuXHRcdCAgICAgIC5mb3JFYWNoKFxuXHRcdFx0ICAgICAgaWQgPT4ge1xuXHRcdFx0XHQgICAgICBpZiAoIGlkID09IFwiJHBhcmVudFwiICkgcmV0dXJuO1xuXHRcdFx0XHQgICAgICBpZiAoICFpcy5mbih0aGlzLl8uX3Njb3BlW2lkXSkgKVxuXHRcdFx0XHRcdCAgICAgIHRoaXMuXy5fc2NvcGVbaWRdLnRyaWdnZXIoYWN0aW9uLCAuLi5hcmd6KTtcblx0XHRcdCAgICAgIH1cblx0XHQgICAgICApO1xuXHRcdFxuXHRcdGlmICggYkFjdHMgJiYgYkFjdHMudGVzdChhY3Rpb24pIClcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFxuXHRcdHRoaXMuXy5fbWl4ZWQuZm9yRWFjaCgoIGN0eCApID0+IChjdHguZGlzcGF0Y2goYWN0aW9uLCAuLi5hcmd6KSkpO1xuXHRcdHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LmRpc3BhdGNoKGFjdGlvbiwgLi4uYXJneik7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblx0XG5cdHRyaWdnZXIoKSB7XG5cdFx0dGhpcy5kaXNwYXRjaCguLi5hcmd1bWVudHMpO1xuXHR9XG5cdFxuXHQvKipcblx0ICogb25jZSgnc3RhYmxlJywgY2IpXG5cdCAqIEBwYXJhbSBvYmoge1JlYWN0LkNvbXBvbmVudHxTdG9yZXxmdW5jdGlvbilcblx0ICogQHBhcmFtIGtleSB7c3RyaW5nfSBvcHRpb25hbCBrZXkgd2hlcmUgdG8gbWFwIHRoZSBwdWJsaWMgc3RhdGVcblx0ICovXG5cdHRoZW4oIGNiICkge1xuXHRcdGlmICggIXRoaXMuX3N0YWJsZSApXG5cdFx0XHRyZXR1cm4gdGhpcy5vbmNlKCdzdGFibGUnLCBlID0+IHRoaXMudGhlbihjYikpO1xuXHRcdFxuXHRcdHJldHVybiBjYih0aGlzLmRhdGEpO1xuXHR9XG5cdFxuXHRvbmNlU3RhYmxlVHJlZSggY2IgKSB7XG5cdFx0aWYgKCB0aGlzLl8udW5TdGFibGVDaGlsZHMgKVxuXHRcdFx0cmV0dXJuIHRoaXMub25jZSgnc3RhYmxlVHJlZScsIGUgPT4gdGhpcy5vbmNlU3RhYmxlVHJlZShjYikpO1xuXHRcdHJldHVybiBjYih0aGlzLmRhdGEpO1xuXHR9XG5cdFxuXHQvKipcblx0ICogQ2FsbCByZXRhaW4gb24gdGhlIHNjb3BlZCBzdG9yZXMgYmFzaW5nIHRoZSBnaXZlbiBsaXN0XG5cdCAqXG5cdCAqIEBwYXJhbSBzdG9yZXNcblx0ICogQHBhcmFtIHJlYXNvblxuXHQgKi9cblx0cmV0YWluU3RvcmVzKCBzdG9yZXMgPSBbXSwgcmVhc29uICkge1xuXHRcdHN0b3Jlcy5mb3JFYWNoKFxuXHRcdFx0aWQgPT4gKHRoaXMuc3RvcmVzW2lkXSAmJiB0aGlzLnN0b3Jlc1tpZF0ucmV0YWluICYmIHRoaXMuc3RvcmVzW2lkXS5yZXRhaW4ocmVhc29uKSlcblx0XHQpXG5cdH1cblx0XG5cdC8qKlxuXHQgKiBDYWxsIHJldGFpbiBvbiB0aGUgc2NvcGVkIHN0b3Jlc1xuXHQgKlxuXHQgKiBAcGFyYW0gc3RvcmVzXG5cdCAqIEBwYXJhbSByZWFzb25cblx0ICovXG5cdGRpc3Bvc2VTdG9yZXMoIHN0b3JlcyA9IFtdLCByZWFzb24gKSB7XG5cdFx0c3RvcmVzLmZvckVhY2goXG5cdFx0XHRpZCA9PiAodGhpcy5zdG9yZXNbaWRdICYmIHRoaXMuc3RvcmVzW2lkXS5kaXNwb3NlICYmIHRoaXMuc3RvcmVzW2lkXS5kaXNwb3NlKHJlYXNvbikpXG5cdFx0KVxuXHR9XG5cdFxuXHQvKipcblx0ICogS2VlcCB0aGUgc2NvcGUgdW5zdGFibGUgdW50aWwgcmVsZWFzZSBpcyBjYWxsZWRcblx0ICogQHBhcmFtIHJlYXNvblxuXHQgKi9cblx0d2FpdCggcmVhc29uICkge1xuXHRcdC8vY29uc29sZS5sb2coXCJ3YWl0XCIsIHJlYXNvbik7XG5cdFx0dGhpcy5fc3RhYmxlICYmICF0aGlzLl9fbG9ja3MuYWxsICYmIHRoaXMuZW1pdChcInVuc3RhYmxlXCIsIHRoaXMpO1xuXHRcdHRoaXMuX3N0YWJsZSA9IGZhbHNlO1xuXHRcdHRoaXMuX19sb2Nrcy5hbGwrKztcblx0XHRpZiAoIHJlYXNvbiApIHtcblx0XHRcdHRoaXMuX19sb2Nrc1tyZWFzb25dID0gdGhpcy5fX2xvY2tzW3JlYXNvbl0gfHwgMDtcblx0XHRcdHRoaXMuX19sb2Nrc1tyZWFzb25dKys7XG5cdFx0fVxuXHR9XG5cdFxuXHQvKipcblx0ICogU3RhYmlsaXplIHRoZSBzY29wZSBpZiBubyBtb3JlIGxvY2tzIHJlbWFpbiAod2FpdCBmbilcblx0ICogQHBhcmFtIHJlYXNvblxuXHQgKi9cblx0cmVsZWFzZSggcmVhc29uICkge1xuXHRcdFxuXHRcdGlmICggcmVhc29uICkge1xuXHRcdFx0aWYgKCB0aGlzLl9fbG9ja3NbcmVhc29uXSA9PSAwIClcblx0XHRcdFx0Y29uc29sZS5lcnJvcihcIlJlbGVhc2UgbW9yZSB0aGFuIGxvY2tpbmcgIVwiLCByZWFzb24pO1xuXHRcdFx0dGhpcy5fX2xvY2tzW3JlYXNvbl0gPSB0aGlzLl9fbG9ja3NbcmVhc29uXSB8fCAwO1xuXHRcdFx0dGhpcy5fX2xvY2tzW3JlYXNvbl0tLTtcblx0XHR9XG5cdFx0aWYgKCAhcmVhc29uICYmIHRoaXMuX19sb2Nrcy5hbGwgPT0gMCApXG5cdFx0XHRjb25zb2xlLmVycm9yKFwiUmVsZWFzZSBtb3JlIHRoYW4gbG9ja2luZyAhXCIpO1xuXHRcdFxuXHRcdHRoaXMuX19sb2Nrcy5hbGwtLTtcblx0XHRpZiAoICF0aGlzLl9fbG9ja3MuYWxsICkge1xuXHRcdFx0aWYgKCB0aGlzLl8uc3RhYmlsaXplclRNIClcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0dGhpcy5fLnN0YWJpbGl6ZXJUTSAmJiBjbGVhclRpbWVvdXQodGhpcy5fLnN0YWJpbGl6ZXJUTSk7XG5cdFx0XHRcblx0XHRcdHRoaXMuXy5zdGFiaWxpemVyVE0gPSBzZXRUaW1lb3V0KFxuXHRcdFx0XHRlID0+IHtcblx0XHRcdFx0XHR0aGlzLl8uc3RhYmlsaXplclRNID0gbnVsbDtcblx0XHRcdFx0XHRpZiAoIHRoaXMuX19sb2Nrcy5hbGwgKVxuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdHRoaXMuXy5wcm9wYWdUTSAmJiBjbGVhclRpbWVvdXQodGhpcy5fLnByb3BhZ1RNKTtcblx0XHRcdFx0XHR0aGlzLl9yZXYrKztcblx0XHRcdFx0XHR0aGlzLl9zdGFibGUgPSB0cnVlO1xuXHRcdFx0XHRcdHRoaXMuZW1pdChcInN0YWJsZVwiLCB0aGlzKTtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHQhdGhpcy5kZWFkICYmIHRoaXMuX3Byb3BhZygpOy8vIHN0YWJpbGl0eSBjYW4gaW5kdWNlIGRlc3Ryb3lcblx0XHRcdFx0fVxuXHRcdFx0KTtcblx0XHR9XG5cdFx0XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBQcm9wYWcgc3RvcmVzIHVwZGF0ZXMgYmFzaW5nIHRoZWlycyBsYXN0IHVwZGF0ZXNcblx0ICovXG5cdHByb3BhZygpIHtcblx0XHR0aGlzLl8ucHJvcGFnVE0gJiYgY2xlYXJUaW1lb3V0KHRoaXMuXy5wcm9wYWdUTSk7XG5cdFx0dGhpcy5fLnByb3BhZ1RNID0gc2V0VGltZW91dChcblx0XHRcdGUgPT4ge1xuXHRcdFx0XHR0aGlzLl8ucHJvcGFnVE0gPSBudWxsO1xuXHRcdFx0XHR0aGlzLl9wcm9wYWcoKVxuXHRcdFx0fSwgMlxuXHRcdCk7XG5cdH1cblx0XG5cdF9wcm9wYWcoKSB7XG5cdFx0aWYgKCB0aGlzLl8uZm9sbG93ZXJzLmxlbmd0aCApXG5cdFx0XHR0aGlzLl8uZm9sbG93ZXJzLmZvckVhY2goKCB7IDA6IG9iaiwgMToga2V5LCAyOiBhcywgMzogbGFzdFJldnMsIDM6IHJlbWFwcyB9ICkgPT4ge1xuXHRcdFx0XHRsZXQgZGF0YSA9IHRoaXMuZ2V0VXBkYXRlcyhsYXN0UmV2cyk7XG5cdFx0XHRcdGlmICggIWRhdGEgKSByZXR1cm47XG5cdFx0XHRcdC8vY29uc29sZS5sb2coZGF0YSwgbGFzdFJldnMpXG5cdFx0XHRcdGlmICggdHlwZW9mIG9iaiAhPSBcImZ1bmN0aW9uXCIgKSB7XG5cdFx0XHRcdFx0Ly9jb25zb2xlLmxvZyhcInNldFN0YXRlIFwiLG9iaiwgT2JqZWN0LmtleXMoZGF0YSkpXG5cdFx0XHRcdFx0aWYgKCBhcyApIG9iai5zZXRTdGF0ZSh7IFthc106IGRhdGEgfSk7XG5cdFx0XHRcdFx0ZWxzZSBvYmouc2V0U3RhdGUoZGF0YSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0b2JqKGRhdGEsIGxhc3RSZXZzICYmIFsuLi5sYXN0UmV2c10gfHwgXCJubyByZXZzXCIpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIGxhc3RSZXZzICYmXG5cdFx0XHRcdC8vIGtleS5mb3JFYWNoKGlkID0+IChsYXN0UmV2c1tpZF0gPSB0aGlzLnN0b3Jlc1tpZF0gJiZcblx0XHRcdFx0Ly8gdGhpcy5zdG9yZXNbaWRdLl9yZXYgfHwgMCkpO1xuXHRcdFx0fSk7XG5cdFx0dGhpcy5lbWl0KFwidXBkYXRlXCIsIHRoaXMuZ2V0VXBkYXRlcygpKTtcblx0fVxuXHRcblx0LyoqXG5cdCAqIGlzIHN0YWJsZVxuXHQgKiBAcmV0dXJucyBib29sXG5cdCAqL1xuXHRpc1N0YWJsZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5fc3RhYmxlO1xuXHR9XG5cdFxuXHQvKipcblx0ICogaXMgc3RhYmxlIHRyZWVcblx0ICogQHJldHVybnMgYm9vbFxuXHQgKi9cblx0aXNTdGFibGVUcmVlKCkge1xuXHRcdHJldHVybiAhdGhpcy5fLnVuU3RhYmxlQ2hpbGRzO1xuXHR9XG5cdFxuXHQvKipcblx0ICogUmVnaXN0ZXIgY2hpbGRyZW5cblx0ICogQHBhcmFtIHNjb3BlXG5cdCAqIEBwcml2YXRlXG5cdCAqL1xuXHRfYWRkQ2hpbGQoIHNjb3BlICkge1xuXHRcdHRoaXMuXy5jaGlsZFNjb3Blcy5wdXNoKHNjb3BlKTtcblx0XHR0aGlzLl8uc2VlbkNoaWxkcysrO1xuXHRcdGxldCBsaXN0cyAgICAgPSB7XG5cdFx0XHQgICAgJ3N0YWJsZScgICAgICA6IHMgPT4ge1xuXHRcdFx0XHQgICAgdGhpcy5fLnVuU3RhYmxlQ2hpbGRzLS07XG5cdFx0XHRcdCAgICBpZiAoICF0aGlzLl8udW5TdGFibGVDaGlsZHMgKVxuXHRcdFx0XHRcdCAgICB0aGlzLmVtaXQoXCJzdGFibGVUcmVlXCIsIHRoaXMpXG5cdFx0XHQgICAgfSxcblx0XHRcdCAgICAndW5zdGFibGUnICAgIDogcyA9PiB7XG5cdFx0XHRcdCAgICB0aGlzLl8udW5TdGFibGVDaGlsZHMrKztcblx0XHRcdFx0ICAgIGlmICggMSA9PSB0aGlzLl8udW5TdGFibGVDaGlsZHMgKVxuXHRcdFx0XHRcdCAgICB0aGlzLmVtaXQoXCJ1bnN0YWJsZVRyZWVcIiwgdGhpcylcblx0XHRcdCAgICB9LFxuXHRcdFx0ICAgICdzdGFibGVUcmVlJyAgOiBzID0+IHtcblx0XHRcdFx0ICAgIHRoaXMuXy51blN0YWJsZUNoaWxkcy0tO1xuXHRcdFx0XHQgICAgaWYgKCAhdGhpcy5fLnVuU3RhYmxlQ2hpbGRzIClcblx0XHRcdFx0XHQgICAgdGhpcy5lbWl0KFwic3RhYmxlVHJlZVwiLCB0aGlzKVxuXHRcdFx0ICAgIH0sXG5cdFx0XHQgICAgJ3Vuc3RhYmxlVHJlZSc6IHMgPT4ge1xuXHRcdFx0XHQgICAgdGhpcy5fLnVuU3RhYmxlQ2hpbGRzKys7XG5cdFx0XHRcdCAgICBpZiAoIDEgPT0gdGhpcy5fLnVuU3RhYmxlQ2hpbGRzIClcblx0XHRcdFx0XHQgICAgdGhpcy5lbWl0KFwidW5zdGFibGVUcmVlXCIsIHRoaXMpXG5cdFx0XHQgICAgfSxcblx0XHRcdCAgICAnZGVzdHJveScgICAgIDogY3R4ID0+IHtcblx0XHRcdFx0ICAgIGlmICggY3R4Ll8udW5TdGFibGVDaGlsZHMgKVxuXHRcdFx0XHRcdCAgICB0aGlzLl8udW5TdGFibGVDaGlsZHMtLTtcblx0XHRcdFx0ICAgIGlmICggIWN0eC5pc1N0YWJsZSgpIClcblx0XHRcdFx0XHQgICAgdGhpcy5fLnVuU3RhYmxlQ2hpbGRzLS07XG5cdFx0XHRcdFxuXHRcdFx0XHQgICAgaWYgKCAhdGhpcy5fLnVuU3RhYmxlQ2hpbGRzIClcblx0XHRcdFx0XHQgICAgdGhpcy5lbWl0KFwic3RhYmxlVHJlZVwiLCB0aGlzKVxuXHRcdFx0ICAgIH1cblx0XHQgICAgfSxcblx0XHQgICAgd2FzU3RhYmxlID0gdGhpcy5fLnVuU3RhYmxlQ2hpbGRzO1xuXHRcdFxuXHRcdCFzY29wZS5pc1N0YWJsZSgpICYmIHRoaXMuXy51blN0YWJsZUNoaWxkcysrO1xuXHRcdHNjb3BlLl8udW5TdGFibGVDaGlsZHMgJiYgdGhpcy5fLnVuU3RhYmxlQ2hpbGRzKys7XG5cdFx0dGhpcy5fLmNoaWxkU2NvcGVzTGlzdC5wdXNoKGxpc3RzKTtcblx0XHRcblx0XHRpZiAoICF3YXNTdGFibGUgJiYgdGhpcy5fLnVuU3RhYmxlQ2hpbGRzIClcblx0XHRcdHRoaXMuZW1pdChcInVuc3RhYmxlVHJlZVwiLCB0aGlzKTtcblx0XHRcblx0XHRzY29wZS5vbihsaXN0cyk7XG5cdH1cblx0XG5cdF9ybUNoaWxkKCBjdHggKSB7XG5cdFx0bGV0IGkgICAgICAgICA9IHRoaXMuXy5jaGlsZFNjb3Blcy5pbmRleE9mKGN0eCksXG5cdFx0ICAgIHdhc1N0YWJsZSA9IHRoaXMuXy51blN0YWJsZUNoaWxkcztcblx0XHRpZiAoIGkgIT0gLTEgKSB7XG5cdFx0XHR0aGlzLl8uY2hpbGRTY29wZXMuc3BsaWNlKGksIDEpO1xuXHRcdFx0IWN0eC5pc1N0YWJsZSgpICYmIHRoaXMuXy51blN0YWJsZUNoaWxkcy0tO1xuXHRcdFx0Y3R4Ll8udW5TdGFibGVDaGlsZHMgJiYgdGhpcy5fLnVuU3RhYmxlQ2hpbGRzLS07XG5cdFx0XHRjdHgudW4odGhpcy5fLmNoaWxkU2NvcGVzTGlzdC5zcGxpY2UoaSwgMSlbMF0pO1xuXHRcdFx0aWYgKCB3YXNTdGFibGUgJiYgIXRoaXMuXy51blN0YWJsZUNoaWxkcyApXG5cdFx0XHRcdHRoaXMuZW1pdChcInN0YWJsZVRyZWVcIilcblx0XHR9XG5cdH1cblx0XG5cdHJldGFpbiggcmVhc29uICkge1xuXHRcdHRoaXMuX19yZXRhaW5zLmFsbCsrO1xuXHRcdC8vY29uc29sZS5sb2coXCJyZXRhaW5cIiwgdGhpcy5faWQsIHJlYXNvbik7XG5cdFx0aWYgKCByZWFzb24gKSB7XG5cdFx0XHR0aGlzLl9fcmV0YWluc1tyZWFzb25dID0gdGhpcy5fX3JldGFpbnNbcmVhc29uXSB8fCAwO1xuXHRcdFx0dGhpcy5fX3JldGFpbnNbcmVhc29uXSsrO1xuXHRcdH1cblx0fVxuXHRcblx0ZGlzcG9zZSggcmVhc29uICkge1xuXHRcdC8vY29uc29sZS5sb2coXCJkaXNwb3NlXCIsIHRoaXMuX2lkLCByZWFzb24pO1xuXHRcdGlmICggcmVhc29uICkge1xuXHRcdFx0aWYgKCAhdGhpcy5fX3JldGFpbnNbcmVhc29uXSApXG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIkRpc3Bvc2UgbW9yZSB0aGFuIHJldGFpbmluZyA6IFwiICsgcmVhc29uKTtcblx0XHRcdHRoaXMuX19yZXRhaW5zW3JlYXNvbl0tLTtcblx0XHR9XG5cdFx0XG5cdFx0aWYgKCAhdGhpcy5fX3JldGFpbnMuYWxsIClcblx0XHRcdHRocm93IG5ldyBFcnJvcihcIkRpc3Bvc2UgbW9yZSB0aGFuIHJldGFpbmluZyAhXCIpO1xuXHRcdFxuXHRcdHRoaXMuX19yZXRhaW5zLmFsbC0tO1xuXHRcdFxuXHRcdGlmICggIXRoaXMuX19yZXRhaW5zLmFsbCApIHtcblx0XHRcdC8vY29uc29sZS5sb2coXCJkaXNwb3NlIGRvIGRlc3Ryb3kgXCIsIHRoaXMuX2lkLCB0aGlzLl9wZXJzaXN0ZW5jZVRtKTtcblx0XHRcdGlmICggdGhpcy5fLnBlcnNpc3RlbmNlVG0gKSB7XG5cdFx0XHRcdHRoaXMuXy5kZXN0cm95VE0gJiYgY2xlYXJUaW1lb3V0KHRoaXMuXy5kZXN0cm95VE0pO1xuXHRcdFx0XHR0aGlzLl8uZGVzdHJveVRNID0gc2V0VGltZW91dChcblx0XHRcdFx0XHRlID0+IHtcblx0XHRcdFx0XHRcdHRoaXMudGhlbihzID0+IHtcblx0XHRcdFx0XHRcdFx0IXRoaXMuX19yZXRhaW5zLmFsbCAmJiAhdGhpcy5kZWFkICYmIHRoaXMuZGVzdHJveSgpXG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHRoaXMuXy5wZXJzaXN0ZW5jZVRtXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0dGhpcy50aGVuKHMgPT5cblx0XHRcdFx0XHQgICAgICAgICAgKCF0aGlzLl9fcmV0YWlucy5hbGwgJiYgIXRoaXMuZGVhZCAmJiB0aGlzLmRlc3Ryb3koKSlcblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBvcmRlciBkZXN0cm95IG9mIGxvY2FsIHN0b3Jlc1xuXHQgKi9cblx0ZGVzdHJveSgpIHtcblx0XHRsZXQgY3R4ID0gdGhpcy5fLl9zY29wZTtcblx0XHQvL2NvbnNvbGUud2FybihcImRlc3Ryb3lcIiwgdGhpcy5faWQpO1xuXHRcdHRoaXMuX2dldEFsbENoaWxkcygpLm1hcChzY29wZSA9PiBzY29wZS5kZXN0cm95KCkpXG5cdFx0Zm9yICggbGV0IGtleSBpbiBjdHggKVxuXHRcdFx0aWYgKCAhaXMuZm4oY3R4W2tleV0pICkge1xuXHRcdFx0XHRpZiAoIGtleSA9PSBcIiRwYXJlbnRcIiApIGNvbnRpbnVlO1xuXHRcdFx0XHQhY3R4W2tleV0uX2F1dG9EZXN0cm95ICYmIGN0eFtrZXldLmRpc3Bvc2UoXCJzY29wZWRcIik7XG5cdFx0XHR9XG5cdFx0dGhpcy5fLnN0YWJpbGl6ZXJUTSAmJiBjbGVhclRpbWVvdXQodGhpcy5fLnN0YWJpbGl6ZXJUTSk7XG5cdFx0dGhpcy5fLnByb3BhZ1RNICYmIGNsZWFyVGltZW91dCh0aGlzLl8ucHJvcGFnVE0pO1xuXHRcdE9iamVjdC5rZXlzKFxuXHRcdFx0dGhpcy5fLl9saXN0ZW5pbmdcblx0XHQpLmZvckVhY2goXG5cdFx0XHRpZCA9PiAoKGlkICE9PSBcIiRwYXJlbnRcIikgJiYgdGhpcy5fLl9zY29wZVtpZF0ucmVtb3ZlTGlzdGVuZXIodGhpcy5fLl9saXN0ZW5pbmdbaWRdKSlcblx0XHQpO1xuXHRcdHdoaWxlICggdGhpcy5fLl9taXhlZExpc3QubGVuZ3RoICkge1xuXHRcdFx0dGhpcy5fLl9taXhlZFswXS5yZW1vdmVMaXN0ZW5lcih0aGlzLl8uX21peGVkTGlzdC5zaGlmdCgpKTtcblx0XHRcdHRoaXMuXy5fbWl4ZWQuc2hpZnQoKS5kaXNwb3NlKFwibWl4ZWRUb1wiKTtcblx0XHR9XG5cdFx0Wy4uLnRoaXMuXy5mb2xsb3dlcnNdLm1hcChmb2xsb3dlciA9PiB0aGlzLnVuQmluZCguLi5mb2xsb3dlcikpO1xuXHRcdGlmICggdGhpcy5fLl9wYXJlbnRMaXN0ICkge1xuXHRcdFx0dGhpcy5wYXJlbnQuX3JtQ2hpbGQodGhpcyk7XG5cdFx0XHR0aGlzLnBhcmVudC5yZW1vdmVMaXN0ZW5lcih0aGlzLl8uX3BhcmVudExpc3QpO1xuXHRcdFx0dGhpcy5wYXJlbnQuZGlzcG9zZShcImlzTXlQYXJlbnRcIik7XG5cdFx0XHR0aGlzLl8uX3BhcmVudExpc3QgPSBudWxsO1xuXHRcdH1cblx0XHR0aGlzLmRlYWQgPSB0cnVlO1xuXHRcdGRlbGV0ZSBhbGxTY29wZXNbdGhpcy5faWRdO1xuXHRcdHRoaXMuZW1pdChcImRlc3Ryb3lcIiwgdGhpcyk7XG5cdFx0XG5cdFx0XG5cdH1cbn1cblxuXG5TY29wZS5pc1Njb3BlID0gZnVuY3Rpb24gKCBvYmogKSB7XG5cdHJldHVybiBvYmogaW5zdGFuY2VvZiBTY29wZVxufTtcblxuU2NvcGUuaXNTY29wZUNsYXNzID0gZnVuY3Rpb24gKCBvYmogKSB7XG5cdHJldHVybiBTY29wZS5pc1Byb3RvdHlwZU9mKG9iaikgfHwgb2JqID09PSBTY29wZVxufTtcbmV4cG9ydCBkZWZhdWx0IFNjb3BlO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9TY29wZS5qcyIsIi8qIGdsb2JhbHMgd2luZG93LCBIVE1MRWxlbWVudCAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qKiFcbiAqIGlzXG4gKiB0aGUgZGVmaW5pdGl2ZSBKYXZhU2NyaXB0IHR5cGUgdGVzdGluZyBsaWJyYXJ5XG4gKlxuICogQGNvcHlyaWdodCAyMDEzLTIwMTQgRW5yaWNvIE1hcmlubyAvIEpvcmRhbiBIYXJiYW5kXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuXG52YXIgb2JqUHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xudmFyIG93bnMgPSBvYmpQcm90by5oYXNPd25Qcm9wZXJ0eTtcbnZhciB0b1N0ciA9IG9ialByb3RvLnRvU3RyaW5nO1xudmFyIHN5bWJvbFZhbHVlT2Y7XG5pZiAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJykge1xuICBzeW1ib2xWYWx1ZU9mID0gU3ltYm9sLnByb3RvdHlwZS52YWx1ZU9mO1xufVxudmFyIGlzQWN0dWFsTmFOID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPT0gdmFsdWU7XG59O1xudmFyIE5PTl9IT1NUX1RZUEVTID0ge1xuICAnYm9vbGVhbic6IDEsXG4gIG51bWJlcjogMSxcbiAgc3RyaW5nOiAxLFxuICB1bmRlZmluZWQ6IDFcbn07XG5cbnZhciBiYXNlNjRSZWdleCA9IC9eKFtBLVphLXowLTkrL117NH0pKihbQS1aYS16MC05Ky9dezR9fFtBLVphLXowLTkrL117M309fFtBLVphLXowLTkrL117Mn09PSkkLztcbnZhciBoZXhSZWdleCA9IC9eW0EtRmEtZjAtOV0rJC87XG5cbi8qKlxuICogRXhwb3NlIGBpc2BcbiAqL1xuXG52YXIgaXMgPSB7fTtcblxuLyoqXG4gKiBUZXN0IGdlbmVyYWwuXG4gKi9cblxuLyoqXG4gKiBpcy50eXBlXG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgYSB0eXBlIG9mIGB0eXBlYC5cbiAqXG4gKiBAcGFyYW0ge01peGVkfSB2YWx1ZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZSB0eXBlXG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGB2YWx1ZWAgaXMgYSB0eXBlIG9mIGB0eXBlYCwgZmFsc2Ugb3RoZXJ3aXNlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmlzLmEgPSBpcy50eXBlID0gZnVuY3Rpb24gKHZhbHVlLCB0eXBlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09IHR5cGU7XG59O1xuXG4vKipcbiAqIGlzLmRlZmluZWRcbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBkZWZpbmVkLlxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgJ3ZhbHVlJyBpcyBkZWZpbmVkLCBmYWxzZSBvdGhlcndpc2VcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuaXMuZGVmaW5lZCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJztcbn07XG5cbi8qKlxuICogaXMuZW1wdHlcbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBlbXB0eS5cbiAqXG4gKiBAcGFyYW0ge01peGVkfSB2YWx1ZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGB2YWx1ZWAgaXMgZW1wdHksIGZhbHNlIG90aGVyd2lzZVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5pcy5lbXB0eSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHRvU3RyLmNhbGwodmFsdWUpO1xuICB2YXIga2V5O1xuXG4gIGlmICh0eXBlID09PSAnW29iamVjdCBBcnJheV0nIHx8IHR5cGUgPT09ICdbb2JqZWN0IEFyZ3VtZW50c10nIHx8IHR5cGUgPT09ICdbb2JqZWN0IFN0cmluZ10nKSB7XG4gICAgcmV0dXJuIHZhbHVlLmxlbmd0aCA9PT0gMDtcbiAgfVxuXG4gIGlmICh0eXBlID09PSAnW29iamVjdCBPYmplY3RdJykge1xuICAgIGZvciAoa2V5IGluIHZhbHVlKSB7XG4gICAgICBpZiAob3ducy5jYWxsKHZhbHVlLCBrZXkpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gIXZhbHVlO1xufTtcblxuLyoqXG4gKiBpcy5lcXVhbFxuICogVGVzdCBpZiBgdmFsdWVgIGlzIGVxdWFsIHRvIGBvdGhlcmAuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHBhcmFtIHtNaXhlZH0gb3RoZXIgdmFsdWUgdG8gY29tcGFyZSB3aXRoXG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGB2YWx1ZWAgaXMgZXF1YWwgdG8gYG90aGVyYCwgZmFsc2Ugb3RoZXJ3aXNlXG4gKi9cblxuaXMuZXF1YWwgPSBmdW5jdGlvbiBlcXVhbCh2YWx1ZSwgb3RoZXIpIHtcbiAgaWYgKHZhbHVlID09PSBvdGhlcikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgdmFyIHR5cGUgPSB0b1N0ci5jYWxsKHZhbHVlKTtcbiAgdmFyIGtleTtcblxuICBpZiAodHlwZSAhPT0gdG9TdHIuY2FsbChvdGhlcikpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAodHlwZSA9PT0gJ1tvYmplY3QgT2JqZWN0XScpIHtcbiAgICBmb3IgKGtleSBpbiB2YWx1ZSkge1xuICAgICAgaWYgKCFpcy5lcXVhbCh2YWx1ZVtrZXldLCBvdGhlcltrZXldKSB8fCAhKGtleSBpbiBvdGhlcikpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKGtleSBpbiBvdGhlcikge1xuICAgICAgaWYgKCFpcy5lcXVhbCh2YWx1ZVtrZXldLCBvdGhlcltrZXldKSB8fCAhKGtleSBpbiB2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmICh0eXBlID09PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAga2V5ID0gdmFsdWUubGVuZ3RoO1xuICAgIGlmIChrZXkgIT09IG90aGVyLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB3aGlsZSAoa2V5LS0pIHtcbiAgICAgIGlmICghaXMuZXF1YWwodmFsdWVba2V5XSwgb3RoZXJba2V5XSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmICh0eXBlID09PSAnW29iamVjdCBGdW5jdGlvbl0nKSB7XG4gICAgcmV0dXJuIHZhbHVlLnByb3RvdHlwZSA9PT0gb3RoZXIucHJvdG90eXBlO1xuICB9XG5cbiAgaWYgKHR5cGUgPT09ICdbb2JqZWN0IERhdGVdJykge1xuICAgIHJldHVybiB2YWx1ZS5nZXRUaW1lKCkgPT09IG90aGVyLmdldFRpbWUoKTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn07XG5cbi8qKlxuICogaXMuaG9zdGVkXG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgaG9zdGVkIGJ5IGBob3N0YC5cbiAqXG4gKiBAcGFyYW0ge01peGVkfSB2YWx1ZSB0byB0ZXN0XG4gKiBAcGFyYW0ge01peGVkfSBob3N0IGhvc3QgdG8gdGVzdCB3aXRoXG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGB2YWx1ZWAgaXMgaG9zdGVkIGJ5IGBob3N0YCwgZmFsc2Ugb3RoZXJ3aXNlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmlzLmhvc3RlZCA9IGZ1bmN0aW9uICh2YWx1ZSwgaG9zdCkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiBob3N0W3ZhbHVlXTtcbiAgcmV0dXJuIHR5cGUgPT09ICdvYmplY3QnID8gISFob3N0W3ZhbHVlXSA6ICFOT05fSE9TVF9UWVBFU1t0eXBlXTtcbn07XG5cbi8qKlxuICogaXMuaW5zdGFuY2VcbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBhbiBpbnN0YW5jZSBvZiBgY29uc3RydWN0b3JgLlxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgYHZhbHVlYCBpcyBhbiBpbnN0YW5jZSBvZiBgY29uc3RydWN0b3JgXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmlzLmluc3RhbmNlID0gaXNbJ2luc3RhbmNlb2YnXSA9IGZ1bmN0aW9uICh2YWx1ZSwgY29uc3RydWN0b3IpIHtcbiAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgY29uc3RydWN0b3I7XG59O1xuXG4vKipcbiAqIGlzLm5pbCAvIGlzLm51bGxcbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBudWxsLlxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgYHZhbHVlYCBpcyBudWxsLCBmYWxzZSBvdGhlcndpc2VcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuaXMubmlsID0gaXNbJ251bGwnXSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPT09IG51bGw7XG59O1xuXG4vKipcbiAqIGlzLnVuZGVmIC8gaXMudW5kZWZpbmVkXG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgdW5kZWZpbmVkLlxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgYHZhbHVlYCBpcyB1bmRlZmluZWQsIGZhbHNlIG90aGVyd2lzZVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5pcy51bmRlZiA9IGlzLnVuZGVmaW5lZCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJztcbn07XG5cbi8qKlxuICogVGVzdCBhcmd1bWVudHMuXG4gKi9cblxuLyoqXG4gKiBpcy5hcmdzXG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgYW4gYXJndW1lbnRzIG9iamVjdC5cbiAqXG4gKiBAcGFyYW0ge01peGVkfSB2YWx1ZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGB2YWx1ZWAgaXMgYW4gYXJndW1lbnRzIG9iamVjdCwgZmFsc2Ugb3RoZXJ3aXNlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmlzLmFyZ3MgPSBpcy5hcmd1bWVudHMgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgdmFyIGlzU3RhbmRhcmRBcmd1bWVudHMgPSB0b1N0ci5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgQXJndW1lbnRzXSc7XG4gIHZhciBpc09sZEFyZ3VtZW50cyA9ICFpcy5hcnJheSh2YWx1ZSkgJiYgaXMuYXJyYXlsaWtlKHZhbHVlKSAmJiBpcy5vYmplY3QodmFsdWUpICYmIGlzLmZuKHZhbHVlLmNhbGxlZSk7XG4gIHJldHVybiBpc1N0YW5kYXJkQXJndW1lbnRzIHx8IGlzT2xkQXJndW1lbnRzO1xufTtcblxuLyoqXG4gKiBUZXN0IGFycmF5LlxuICovXG5cbi8qKlxuICogaXMuYXJyYXlcbiAqIFRlc3QgaWYgJ3ZhbHVlJyBpcyBhbiBhcnJheS5cbiAqXG4gKiBAcGFyYW0ge01peGVkfSB2YWx1ZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGB2YWx1ZWAgaXMgYW4gYXJyYXksIGZhbHNlIG90aGVyd2lzZVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5pcy5hcnJheSA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiB0b1N0ci5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbn07XG5cbi8qKlxuICogaXMuYXJndW1lbnRzLmVtcHR5XG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgYW4gZW1wdHkgYXJndW1lbnRzIG9iamVjdC5cbiAqXG4gKiBAcGFyYW0ge01peGVkfSB2YWx1ZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGB2YWx1ZWAgaXMgYW4gZW1wdHkgYXJndW1lbnRzIG9iamVjdCwgZmFsc2Ugb3RoZXJ3aXNlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5pcy5hcmdzLmVtcHR5ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiBpcy5hcmdzKHZhbHVlKSAmJiB2YWx1ZS5sZW5ndGggPT09IDA7XG59O1xuXG4vKipcbiAqIGlzLmFycmF5LmVtcHR5XG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgYW4gZW1wdHkgYXJyYXkuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBgdmFsdWVgIGlzIGFuIGVtcHR5IGFycmF5LCBmYWxzZSBvdGhlcndpc2VcbiAqIEBhcGkgcHVibGljXG4gKi9cbmlzLmFycmF5LmVtcHR5ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiBpcy5hcnJheSh2YWx1ZSkgJiYgdmFsdWUubGVuZ3RoID09PSAwO1xufTtcblxuLyoqXG4gKiBpcy5hcnJheWxpa2VcbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBhbiBhcnJheWxpa2Ugb2JqZWN0LlxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgYHZhbHVlYCBpcyBhbiBhcmd1bWVudHMgb2JqZWN0LCBmYWxzZSBvdGhlcndpc2VcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuaXMuYXJyYXlsaWtlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiAhIXZhbHVlICYmICFpcy5ib29sKHZhbHVlKVxuICAgICYmIG93bnMuY2FsbCh2YWx1ZSwgJ2xlbmd0aCcpXG4gICAgJiYgaXNGaW5pdGUodmFsdWUubGVuZ3RoKVxuICAgICYmIGlzLm51bWJlcih2YWx1ZS5sZW5ndGgpXG4gICAgJiYgdmFsdWUubGVuZ3RoID49IDA7XG59O1xuXG4vKipcbiAqIFRlc3QgYm9vbGVhbi5cbiAqL1xuXG4vKipcbiAqIGlzLmJvb2xcbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBhIGJvb2xlYW4uXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBgdmFsdWVgIGlzIGEgYm9vbGVhbiwgZmFsc2Ugb3RoZXJ3aXNlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmlzLmJvb2wgPSBpc1snYm9vbGVhbiddID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiB0b1N0ci5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgQm9vbGVhbl0nO1xufTtcblxuLyoqXG4gKiBpcy5mYWxzZVxuICogVGVzdCBpZiBgdmFsdWVgIGlzIGZhbHNlLlxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgYHZhbHVlYCBpcyBmYWxzZSwgZmFsc2Ugb3RoZXJ3aXNlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmlzWydmYWxzZSddID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiBpcy5ib29sKHZhbHVlKSAmJiBCb29sZWFuKE51bWJlcih2YWx1ZSkpID09PSBmYWxzZTtcbn07XG5cbi8qKlxuICogaXMudHJ1ZVxuICogVGVzdCBpZiBgdmFsdWVgIGlzIHRydWUuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBgdmFsdWVgIGlzIHRydWUsIGZhbHNlIG90aGVyd2lzZVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5pc1sndHJ1ZSddID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiBpcy5ib29sKHZhbHVlKSAmJiBCb29sZWFuKE51bWJlcih2YWx1ZSkpID09PSB0cnVlO1xufTtcblxuLyoqXG4gKiBUZXN0IGRhdGUuXG4gKi9cblxuLyoqXG4gKiBpcy5kYXRlXG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgYSBkYXRlLlxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgYHZhbHVlYCBpcyBhIGRhdGUsIGZhbHNlIG90aGVyd2lzZVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5pcy5kYXRlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiB0b1N0ci5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgRGF0ZV0nO1xufTtcblxuLyoqXG4gKiBpcy5kYXRlLnZhbGlkXG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBkYXRlLlxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0cnVlIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBkYXRlLCBmYWxzZSBvdGhlcndpc2VcbiAqL1xuaXMuZGF0ZS52YWxpZCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICByZXR1cm4gaXMuZGF0ZSh2YWx1ZSkgJiYgIWlzTmFOKE51bWJlcih2YWx1ZSkpO1xufTtcblxuLyoqXG4gKiBUZXN0IGVsZW1lbnQuXG4gKi9cblxuLyoqXG4gKiBpcy5lbGVtZW50XG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgYW4gaHRtbCBlbGVtZW50LlxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgYHZhbHVlYCBpcyBhbiBIVE1MIEVsZW1lbnQsIGZhbHNlIG90aGVyd2lzZVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5pcy5lbGVtZW50ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPT0gdW5kZWZpbmVkXG4gICAgJiYgdHlwZW9mIEhUTUxFbGVtZW50ICE9PSAndW5kZWZpbmVkJ1xuICAgICYmIHZhbHVlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnRcbiAgICAmJiB2YWx1ZS5ub2RlVHlwZSA9PT0gMTtcbn07XG5cbi8qKlxuICogVGVzdCBlcnJvci5cbiAqL1xuXG4vKipcbiAqIGlzLmVycm9yXG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgYW4gZXJyb3Igb2JqZWN0LlxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgYHZhbHVlYCBpcyBhbiBlcnJvciBvYmplY3QsIGZhbHNlIG90aGVyd2lzZVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5pcy5lcnJvciA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICByZXR1cm4gdG9TdHIuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IEVycm9yXSc7XG59O1xuXG4vKipcbiAqIFRlc3QgZnVuY3Rpb24uXG4gKi9cblxuLyoqXG4gKiBpcy5mbiAvIGlzLmZ1bmN0aW9uIChkZXByZWNhdGVkKVxuICogVGVzdCBpZiBgdmFsdWVgIGlzIGEgZnVuY3Rpb24uXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBgdmFsdWVgIGlzIGEgZnVuY3Rpb24sIGZhbHNlIG90aGVyd2lzZVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5pcy5mbiA9IGlzWydmdW5jdGlvbiddID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHZhciBpc0FsZXJ0ID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgdmFsdWUgPT09IHdpbmRvdy5hbGVydDtcbiAgaWYgKGlzQWxlcnQpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICB2YXIgc3RyID0gdG9TdHIuY2FsbCh2YWx1ZSk7XG4gIHJldHVybiBzdHIgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXScgfHwgc3RyID09PSAnW29iamVjdCBHZW5lcmF0b3JGdW5jdGlvbl0nIHx8IHN0ciA9PT0gJ1tvYmplY3QgQXN5bmNGdW5jdGlvbl0nO1xufTtcblxuLyoqXG4gKiBUZXN0IG51bWJlci5cbiAqL1xuXG4vKipcbiAqIGlzLm51bWJlclxuICogVGVzdCBpZiBgdmFsdWVgIGlzIGEgbnVtYmVyLlxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgYHZhbHVlYCBpcyBhIG51bWJlciwgZmFsc2Ugb3RoZXJ3aXNlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmlzLm51bWJlciA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICByZXR1cm4gdG9TdHIuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IE51bWJlcl0nO1xufTtcblxuLyoqXG4gKiBpcy5pbmZpbml0ZVxuICogVGVzdCBpZiBgdmFsdWVgIGlzIHBvc2l0aXZlIG9yIG5lZ2F0aXZlIGluZmluaXR5LlxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgYHZhbHVlYCBpcyBwb3NpdGl2ZSBvciBuZWdhdGl2ZSBJbmZpbml0eSwgZmFsc2Ugb3RoZXJ3aXNlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5pcy5pbmZpbml0ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPT09IEluZmluaXR5IHx8IHZhbHVlID09PSAtSW5maW5pdHk7XG59O1xuXG4vKipcbiAqIGlzLmRlY2ltYWxcbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBhIGRlY2ltYWwgbnVtYmVyLlxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgYHZhbHVlYCBpcyBhIGRlY2ltYWwgbnVtYmVyLCBmYWxzZSBvdGhlcndpc2VcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuaXMuZGVjaW1hbCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICByZXR1cm4gaXMubnVtYmVyKHZhbHVlKSAmJiAhaXNBY3R1YWxOYU4odmFsdWUpICYmICFpcy5pbmZpbml0ZSh2YWx1ZSkgJiYgdmFsdWUgJSAxICE9PSAwO1xufTtcblxuLyoqXG4gKiBpcy5kaXZpc2libGVCeVxuICogVGVzdCBpZiBgdmFsdWVgIGlzIGRpdmlzaWJsZSBieSBgbmAuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEBwYXJhbSB7TnVtYmVyfSBuIGRpdmlkZW5kXG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGB2YWx1ZWAgaXMgZGl2aXNpYmxlIGJ5IGBuYCwgZmFsc2Ugb3RoZXJ3aXNlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmlzLmRpdmlzaWJsZUJ5ID0gZnVuY3Rpb24gKHZhbHVlLCBuKSB7XG4gIHZhciBpc0RpdmlkZW5kSW5maW5pdGUgPSBpcy5pbmZpbml0ZSh2YWx1ZSk7XG4gIHZhciBpc0Rpdmlzb3JJbmZpbml0ZSA9IGlzLmluZmluaXRlKG4pO1xuICB2YXIgaXNOb25aZXJvTnVtYmVyID0gaXMubnVtYmVyKHZhbHVlKSAmJiAhaXNBY3R1YWxOYU4odmFsdWUpICYmIGlzLm51bWJlcihuKSAmJiAhaXNBY3R1YWxOYU4obikgJiYgbiAhPT0gMDtcbiAgcmV0dXJuIGlzRGl2aWRlbmRJbmZpbml0ZSB8fCBpc0Rpdmlzb3JJbmZpbml0ZSB8fCAoaXNOb25aZXJvTnVtYmVyICYmIHZhbHVlICUgbiA9PT0gMCk7XG59O1xuXG4vKipcbiAqIGlzLmludGVnZXJcbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBhbiBpbnRlZ2VyLlxuICpcbiAqIEBwYXJhbSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGB2YWx1ZWAgaXMgYW4gaW50ZWdlciwgZmFsc2Ugb3RoZXJ3aXNlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmlzLmludGVnZXIgPSBpc1snaW50J10gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIGlzLm51bWJlcih2YWx1ZSkgJiYgIWlzQWN0dWFsTmFOKHZhbHVlKSAmJiB2YWx1ZSAlIDEgPT09IDA7XG59O1xuXG4vKipcbiAqIGlzLm1heGltdW1cbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBncmVhdGVyIHRoYW4gJ290aGVycycgdmFsdWVzLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSB2YWx1ZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcGFyYW0ge0FycmF5fSBvdGhlcnMgdmFsdWVzIHRvIGNvbXBhcmUgd2l0aFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBgdmFsdWVgIGlzIGdyZWF0ZXIgdGhhbiBgb3RoZXJzYCB2YWx1ZXNcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuaXMubWF4aW11bSA9IGZ1bmN0aW9uICh2YWx1ZSwgb3RoZXJzKSB7XG4gIGlmIChpc0FjdHVhbE5hTih2YWx1ZSkpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdOYU4gaXMgbm90IGEgdmFsaWQgdmFsdWUnKTtcbiAgfSBlbHNlIGlmICghaXMuYXJyYXlsaWtlKG90aGVycykpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdzZWNvbmQgYXJndW1lbnQgbXVzdCBiZSBhcnJheS1saWtlJyk7XG4gIH1cbiAgdmFyIGxlbiA9IG90aGVycy5sZW5ndGg7XG5cbiAgd2hpbGUgKC0tbGVuID49IDApIHtcbiAgICBpZiAodmFsdWUgPCBvdGhlcnNbbGVuXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcblxuLyoqXG4gKiBpcy5taW5pbXVtXG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgbGVzcyB0aGFuIGBvdGhlcnNgIHZhbHVlcy5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHBhcmFtIHtBcnJheX0gb3RoZXJzIHZhbHVlcyB0byBjb21wYXJlIHdpdGhcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgYHZhbHVlYCBpcyBsZXNzIHRoYW4gYG90aGVyc2AgdmFsdWVzXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmlzLm1pbmltdW0gPSBmdW5jdGlvbiAodmFsdWUsIG90aGVycykge1xuICBpZiAoaXNBY3R1YWxOYU4odmFsdWUpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignTmFOIGlzIG5vdCBhIHZhbGlkIHZhbHVlJyk7XG4gIH0gZWxzZSBpZiAoIWlzLmFycmF5bGlrZShvdGhlcnMpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignc2Vjb25kIGFyZ3VtZW50IG11c3QgYmUgYXJyYXktbGlrZScpO1xuICB9XG4gIHZhciBsZW4gPSBvdGhlcnMubGVuZ3RoO1xuXG4gIHdoaWxlICgtLWxlbiA+PSAwKSB7XG4gICAgaWYgKHZhbHVlID4gb3RoZXJzW2xlbl0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbi8qKlxuICogaXMubmFuXG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgbm90IGEgbnVtYmVyLlxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgYHZhbHVlYCBpcyBub3QgYSBudW1iZXIsIGZhbHNlIG90aGVyd2lzZVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5pcy5uYW4gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuICFpcy5udW1iZXIodmFsdWUpIHx8IHZhbHVlICE9PSB2YWx1ZTtcbn07XG5cbi8qKlxuICogaXMuZXZlblxuICogVGVzdCBpZiBgdmFsdWVgIGlzIGFuIGV2ZW4gbnVtYmVyLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSB2YWx1ZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGB2YWx1ZWAgaXMgYW4gZXZlbiBudW1iZXIsIGZhbHNlIG90aGVyd2lzZVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5pcy5ldmVuID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiBpcy5pbmZpbml0ZSh2YWx1ZSkgfHwgKGlzLm51bWJlcih2YWx1ZSkgJiYgdmFsdWUgPT09IHZhbHVlICYmIHZhbHVlICUgMiA9PT0gMCk7XG59O1xuXG4vKipcbiAqIGlzLm9kZFxuICogVGVzdCBpZiBgdmFsdWVgIGlzIGFuIG9kZCBudW1iZXIuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgYHZhbHVlYCBpcyBhbiBvZGQgbnVtYmVyLCBmYWxzZSBvdGhlcndpc2VcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuaXMub2RkID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiBpcy5pbmZpbml0ZSh2YWx1ZSkgfHwgKGlzLm51bWJlcih2YWx1ZSkgJiYgdmFsdWUgPT09IHZhbHVlICYmIHZhbHVlICUgMiAhPT0gMCk7XG59O1xuXG4vKipcbiAqIGlzLmdlXG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgZ3JlYXRlciB0aGFuIG9yIGVxdWFsIHRvIGBvdGhlcmAuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEBwYXJhbSB7TnVtYmVyfSBvdGhlciB2YWx1ZSB0byBjb21wYXJlIHdpdGhcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmlzLmdlID0gZnVuY3Rpb24gKHZhbHVlLCBvdGhlcikge1xuICBpZiAoaXNBY3R1YWxOYU4odmFsdWUpIHx8IGlzQWN0dWFsTmFOKG90aGVyKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ05hTiBpcyBub3QgYSB2YWxpZCB2YWx1ZScpO1xuICB9XG4gIHJldHVybiAhaXMuaW5maW5pdGUodmFsdWUpICYmICFpcy5pbmZpbml0ZShvdGhlcikgJiYgdmFsdWUgPj0gb3RoZXI7XG59O1xuXG4vKipcbiAqIGlzLmd0XG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgZ3JlYXRlciB0aGFuIGBvdGhlcmAuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEBwYXJhbSB7TnVtYmVyfSBvdGhlciB2YWx1ZSB0byBjb21wYXJlIHdpdGhcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmlzLmd0ID0gZnVuY3Rpb24gKHZhbHVlLCBvdGhlcikge1xuICBpZiAoaXNBY3R1YWxOYU4odmFsdWUpIHx8IGlzQWN0dWFsTmFOKG90aGVyKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ05hTiBpcyBub3QgYSB2YWxpZCB2YWx1ZScpO1xuICB9XG4gIHJldHVybiAhaXMuaW5maW5pdGUodmFsdWUpICYmICFpcy5pbmZpbml0ZShvdGhlcikgJiYgdmFsdWUgPiBvdGhlcjtcbn07XG5cbi8qKlxuICogaXMubGVcbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gYG90aGVyYC5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHBhcmFtIHtOdW1iZXJ9IG90aGVyIHZhbHVlIHRvIGNvbXBhcmUgd2l0aFxuICogQHJldHVybiB7Qm9vbGVhbn0gaWYgJ3ZhbHVlJyBpcyBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gJ290aGVyJ1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5pcy5sZSA9IGZ1bmN0aW9uICh2YWx1ZSwgb3RoZXIpIHtcbiAgaWYgKGlzQWN0dWFsTmFOKHZhbHVlKSB8fCBpc0FjdHVhbE5hTihvdGhlcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdOYU4gaXMgbm90IGEgdmFsaWQgdmFsdWUnKTtcbiAgfVxuICByZXR1cm4gIWlzLmluZmluaXRlKHZhbHVlKSAmJiAhaXMuaW5maW5pdGUob3RoZXIpICYmIHZhbHVlIDw9IG90aGVyO1xufTtcblxuLyoqXG4gKiBpcy5sdFxuICogVGVzdCBpZiBgdmFsdWVgIGlzIGxlc3MgdGhhbiBgb3RoZXJgLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSB2YWx1ZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcGFyYW0ge051bWJlcn0gb3RoZXIgdmFsdWUgdG8gY29tcGFyZSB3aXRoXG4gKiBAcmV0dXJuIHtCb29sZWFufSBpZiBgdmFsdWVgIGlzIGxlc3MgdGhhbiBgb3RoZXJgXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmlzLmx0ID0gZnVuY3Rpb24gKHZhbHVlLCBvdGhlcikge1xuICBpZiAoaXNBY3R1YWxOYU4odmFsdWUpIHx8IGlzQWN0dWFsTmFOKG90aGVyKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ05hTiBpcyBub3QgYSB2YWxpZCB2YWx1ZScpO1xuICB9XG4gIHJldHVybiAhaXMuaW5maW5pdGUodmFsdWUpICYmICFpcy5pbmZpbml0ZShvdGhlcikgJiYgdmFsdWUgPCBvdGhlcjtcbn07XG5cbi8qKlxuICogaXMud2l0aGluXG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgd2l0aGluIGBzdGFydGAgYW5kIGBmaW5pc2hgLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSB2YWx1ZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcGFyYW0ge051bWJlcn0gc3RhcnQgbG93ZXIgYm91bmRcbiAqIEBwYXJhbSB7TnVtYmVyfSBmaW5pc2ggdXBwZXIgYm91bmRcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgJ3ZhbHVlJyBpcyBpcyB3aXRoaW4gJ3N0YXJ0JyBhbmQgJ2ZpbmlzaCdcbiAqIEBhcGkgcHVibGljXG4gKi9cbmlzLndpdGhpbiA9IGZ1bmN0aW9uICh2YWx1ZSwgc3RhcnQsIGZpbmlzaCkge1xuICBpZiAoaXNBY3R1YWxOYU4odmFsdWUpIHx8IGlzQWN0dWFsTmFOKHN0YXJ0KSB8fCBpc0FjdHVhbE5hTihmaW5pc2gpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignTmFOIGlzIG5vdCBhIHZhbGlkIHZhbHVlJyk7XG4gIH0gZWxzZSBpZiAoIWlzLm51bWJlcih2YWx1ZSkgfHwgIWlzLm51bWJlcihzdGFydCkgfHwgIWlzLm51bWJlcihmaW5pc2gpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignYWxsIGFyZ3VtZW50cyBtdXN0IGJlIG51bWJlcnMnKTtcbiAgfVxuICB2YXIgaXNBbnlJbmZpbml0ZSA9IGlzLmluZmluaXRlKHZhbHVlKSB8fCBpcy5pbmZpbml0ZShzdGFydCkgfHwgaXMuaW5maW5pdGUoZmluaXNoKTtcbiAgcmV0dXJuIGlzQW55SW5maW5pdGUgfHwgKHZhbHVlID49IHN0YXJ0ICYmIHZhbHVlIDw9IGZpbmlzaCk7XG59O1xuXG4vKipcbiAqIFRlc3Qgb2JqZWN0LlxuICovXG5cbi8qKlxuICogaXMub2JqZWN0XG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgYW4gb2JqZWN0LlxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgYHZhbHVlYCBpcyBhbiBvYmplY3QsIGZhbHNlIG90aGVyd2lzZVxuICogQGFwaSBwdWJsaWNcbiAqL1xuaXMub2JqZWN0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiB0b1N0ci5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgT2JqZWN0XSc7XG59O1xuXG4vKipcbiAqIGlzLnByaW1pdGl2ZVxuICogVGVzdCBpZiBgdmFsdWVgIGlzIGEgcHJpbWl0aXZlLlxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgYHZhbHVlYCBpcyBhIHByaW1pdGl2ZSwgZmFsc2Ugb3RoZXJ3aXNlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5pcy5wcmltaXRpdmUgPSBmdW5jdGlvbiBpc1ByaW1pdGl2ZSh2YWx1ZSkge1xuICBpZiAoIXZhbHVlKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgfHwgaXMub2JqZWN0KHZhbHVlKSB8fCBpcy5mbih2YWx1ZSkgfHwgaXMuYXJyYXkodmFsdWUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiB0cnVlO1xufTtcblxuLyoqXG4gKiBpcy5oYXNoXG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgYSBoYXNoIC0gYSBwbGFpbiBvYmplY3QgbGl0ZXJhbC5cbiAqXG4gKiBAcGFyYW0ge01peGVkfSB2YWx1ZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGB2YWx1ZWAgaXMgYSBoYXNoLCBmYWxzZSBvdGhlcndpc2VcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuaXMuaGFzaCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICByZXR1cm4gaXMub2JqZWN0KHZhbHVlKSAmJiB2YWx1ZS5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0ICYmICF2YWx1ZS5ub2RlVHlwZSAmJiAhdmFsdWUuc2V0SW50ZXJ2YWw7XG59O1xuXG4vKipcbiAqIFRlc3QgcmVnZXhwLlxuICovXG5cbi8qKlxuICogaXMucmVnZXhwXG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgYSByZWd1bGFyIGV4cHJlc3Npb24uXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBgdmFsdWVgIGlzIGEgcmVnZXhwLCBmYWxzZSBvdGhlcndpc2VcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuaXMucmVnZXhwID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiB0b1N0ci5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgUmVnRXhwXSc7XG59O1xuXG4vKipcbiAqIFRlc3Qgc3RyaW5nLlxuICovXG5cbi8qKlxuICogaXMuc3RyaW5nXG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgYSBzdHJpbmcuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiAndmFsdWUnIGlzIGEgc3RyaW5nLCBmYWxzZSBvdGhlcndpc2VcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuaXMuc3RyaW5nID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiB0b1N0ci5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgU3RyaW5nXSc7XG59O1xuXG4vKipcbiAqIFRlc3QgYmFzZTY0IHN0cmluZy5cbiAqL1xuXG4vKipcbiAqIGlzLmJhc2U2NFxuICogVGVzdCBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgYmFzZTY0IGVuY29kZWQgc3RyaW5nLlxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgJ3ZhbHVlJyBpcyBhIGJhc2U2NCBlbmNvZGVkIHN0cmluZywgZmFsc2Ugb3RoZXJ3aXNlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmlzLmJhc2U2NCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICByZXR1cm4gaXMuc3RyaW5nKHZhbHVlKSAmJiAoIXZhbHVlLmxlbmd0aCB8fCBiYXNlNjRSZWdleC50ZXN0KHZhbHVlKSk7XG59O1xuXG4vKipcbiAqIFRlc3QgYmFzZTY0IHN0cmluZy5cbiAqL1xuXG4vKipcbiAqIGlzLmhleFxuICogVGVzdCBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgaGV4IGVuY29kZWQgc3RyaW5nLlxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgJ3ZhbHVlJyBpcyBhIGhleCBlbmNvZGVkIHN0cmluZywgZmFsc2Ugb3RoZXJ3aXNlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmlzLmhleCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICByZXR1cm4gaXMuc3RyaW5nKHZhbHVlKSAmJiAoIXZhbHVlLmxlbmd0aCB8fCBoZXhSZWdleC50ZXN0KHZhbHVlKSk7XG59O1xuXG4vKipcbiAqIGlzLnN5bWJvbFxuICogVGVzdCBpZiBgdmFsdWVgIGlzIGFuIEVTNiBTeW1ib2xcbiAqXG4gKiBAcGFyYW0ge01peGVkfSB2YWx1ZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGB2YWx1ZWAgaXMgYSBTeW1ib2wsIGZhbHNlIG90aGVyaXNlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmlzLnN5bWJvbCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiB0b1N0ci5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgU3ltYm9sXScgJiYgdHlwZW9mIHN5bWJvbFZhbHVlT2YuY2FsbCh2YWx1ZSkgPT09ICdzeW1ib2wnO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBpcztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9pcy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vbGliL2luZGV4Jyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc2hvcnRpZC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbnZhciBhbHBoYWJldCA9IHJlcXVpcmUoJy4vYWxwaGFiZXQnKTtcbnZhciBlbmNvZGUgPSByZXF1aXJlKCcuL2VuY29kZScpO1xudmFyIGRlY29kZSA9IHJlcXVpcmUoJy4vZGVjb2RlJyk7XG52YXIgYnVpbGQgPSByZXF1aXJlKCcuL2J1aWxkJyk7XG52YXIgaXNWYWxpZCA9IHJlcXVpcmUoJy4vaXMtdmFsaWQnKTtcblxuLy8gaWYgeW91IGFyZSB1c2luZyBjbHVzdGVyIG9yIG11bHRpcGxlIHNlcnZlcnMgdXNlIHRoaXMgdG8gbWFrZSBlYWNoIGluc3RhbmNlXG4vLyBoYXMgYSB1bmlxdWUgdmFsdWUgZm9yIHdvcmtlclxuLy8gTm90ZTogSSBkb24ndCBrbm93IGlmIHRoaXMgaXMgYXV0b21hdGljYWxseSBzZXQgd2hlbiB1c2luZyB0aGlyZFxuLy8gcGFydHkgY2x1c3RlciBzb2x1dGlvbnMgc3VjaCBhcyBwbTIuXG52YXIgY2x1c3RlcldvcmtlcklkID0gcmVxdWlyZSgnLi91dGlsL2NsdXN0ZXItd29ya2VyLWlkJykgfHwgMDtcblxuLyoqXG4gKiBTZXQgdGhlIHNlZWQuXG4gKiBIaWdobHkgcmVjb21tZW5kZWQgaWYgeW91IGRvbid0IHdhbnQgcGVvcGxlIHRvIHRyeSB0byBmaWd1cmUgb3V0IHlvdXIgaWQgc2NoZW1hLlxuICogZXhwb3NlZCBhcyBzaG9ydGlkLnNlZWQoaW50KVxuICogQHBhcmFtIHNlZWQgSW50ZWdlciB2YWx1ZSB0byBzZWVkIHRoZSByYW5kb20gYWxwaGFiZXQuICBBTFdBWVMgVVNFIFRIRSBTQU1FIFNFRUQgb3IgeW91IG1pZ2h0IGdldCBvdmVybGFwcy5cbiAqL1xuZnVuY3Rpb24gc2VlZChzZWVkVmFsdWUpIHtcbiAgICBhbHBoYWJldC5zZWVkKHNlZWRWYWx1ZSk7XG4gICAgcmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vKipcbiAqIFNldCB0aGUgY2x1c3RlciB3b3JrZXIgb3IgbWFjaGluZSBpZFxuICogZXhwb3NlZCBhcyBzaG9ydGlkLndvcmtlcihpbnQpXG4gKiBAcGFyYW0gd29ya2VySWQgd29ya2VyIG11c3QgYmUgcG9zaXRpdmUgaW50ZWdlci4gIE51bWJlciBsZXNzIHRoYW4gMTYgaXMgcmVjb21tZW5kZWQuXG4gKiByZXR1cm5zIHNob3J0aWQgbW9kdWxlIHNvIGl0IGNhbiBiZSBjaGFpbmVkLlxuICovXG5mdW5jdGlvbiB3b3JrZXIod29ya2VySWQpIHtcbiAgICBjbHVzdGVyV29ya2VySWQgPSB3b3JrZXJJZDtcbiAgICByZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8qKlxuICpcbiAqIHNldHMgbmV3IGNoYXJhY3RlcnMgdG8gdXNlIGluIHRoZSBhbHBoYWJldFxuICogcmV0dXJucyB0aGUgc2h1ZmZsZWQgYWxwaGFiZXRcbiAqL1xuZnVuY3Rpb24gY2hhcmFjdGVycyhuZXdDaGFyYWN0ZXJzKSB7XG4gICAgaWYgKG5ld0NoYXJhY3RlcnMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBhbHBoYWJldC5jaGFyYWN0ZXJzKG5ld0NoYXJhY3RlcnMpO1xuICAgIH1cblxuICAgIHJldHVybiBhbHBoYWJldC5zaHVmZmxlZCgpO1xufVxuXG4vKipcbiAqIEdlbmVyYXRlIHVuaXF1ZSBpZFxuICogUmV0dXJucyBzdHJpbmcgaWRcbiAqL1xuZnVuY3Rpb24gZ2VuZXJhdGUoKSB7XG4gIHJldHVybiBidWlsZChjbHVzdGVyV29ya2VySWQpO1xufVxuXG4vLyBFeHBvcnQgYWxsIG90aGVyIGZ1bmN0aW9ucyBhcyBwcm9wZXJ0aWVzIG9mIHRoZSBnZW5lcmF0ZSBmdW5jdGlvblxubW9kdWxlLmV4cG9ydHMgPSBnZW5lcmF0ZTtcbm1vZHVsZS5leHBvcnRzLmdlbmVyYXRlID0gZ2VuZXJhdGU7XG5tb2R1bGUuZXhwb3J0cy5zZWVkID0gc2VlZDtcbm1vZHVsZS5leHBvcnRzLndvcmtlciA9IHdvcmtlcjtcbm1vZHVsZS5leHBvcnRzLmNoYXJhY3RlcnMgPSBjaGFyYWN0ZXJzO1xubW9kdWxlLmV4cG9ydHMuZGVjb2RlID0gZGVjb2RlO1xubW9kdWxlLmV4cG9ydHMuaXNWYWxpZCA9IGlzVmFsaWQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc2hvcnRpZC9saWIvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgcmFuZG9tRnJvbVNlZWQgPSByZXF1aXJlKCcuL3JhbmRvbS9yYW5kb20tZnJvbS1zZWVkJyk7XG5cbnZhciBPUklHSU5BTCA9ICcwMTIzNDU2Nzg5YWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXpBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWl8tJztcbnZhciBhbHBoYWJldDtcbnZhciBwcmV2aW91c1NlZWQ7XG5cbnZhciBzaHVmZmxlZDtcblxuZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgc2h1ZmZsZWQgPSBmYWxzZTtcbn1cblxuZnVuY3Rpb24gc2V0Q2hhcmFjdGVycyhfYWxwaGFiZXRfKSB7XG4gICAgaWYgKCFfYWxwaGFiZXRfKSB7XG4gICAgICAgIGlmIChhbHBoYWJldCAhPT0gT1JJR0lOQUwpIHtcbiAgICAgICAgICAgIGFscGhhYmV0ID0gT1JJR0lOQUw7XG4gICAgICAgICAgICByZXNldCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoX2FscGhhYmV0XyA9PT0gYWxwaGFiZXQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChfYWxwaGFiZXRfLmxlbmd0aCAhPT0gT1JJR0lOQUwubGVuZ3RoKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQ3VzdG9tIGFscGhhYmV0IGZvciBzaG9ydGlkIG11c3QgYmUgJyArIE9SSUdJTkFMLmxlbmd0aCArICcgdW5pcXVlIGNoYXJhY3RlcnMuIFlvdSBzdWJtaXR0ZWQgJyArIF9hbHBoYWJldF8ubGVuZ3RoICsgJyBjaGFyYWN0ZXJzOiAnICsgX2FscGhhYmV0Xyk7XG4gICAgfVxuXG4gICAgdmFyIHVuaXF1ZSA9IF9hbHBoYWJldF8uc3BsaXQoJycpLmZpbHRlcihmdW5jdGlvbihpdGVtLCBpbmQsIGFycil7XG4gICAgICAgcmV0dXJuIGluZCAhPT0gYXJyLmxhc3RJbmRleE9mKGl0ZW0pO1xuICAgIH0pO1xuXG4gICAgaWYgKHVuaXF1ZS5sZW5ndGgpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDdXN0b20gYWxwaGFiZXQgZm9yIHNob3J0aWQgbXVzdCBiZSAnICsgT1JJR0lOQUwubGVuZ3RoICsgJyB1bmlxdWUgY2hhcmFjdGVycy4gVGhlc2UgY2hhcmFjdGVycyB3ZXJlIG5vdCB1bmlxdWU6ICcgKyB1bmlxdWUuam9pbignLCAnKSk7XG4gICAgfVxuXG4gICAgYWxwaGFiZXQgPSBfYWxwaGFiZXRfO1xuICAgIHJlc2V0KCk7XG59XG5cbmZ1bmN0aW9uIGNoYXJhY3RlcnMoX2FscGhhYmV0Xykge1xuICAgIHNldENoYXJhY3RlcnMoX2FscGhhYmV0Xyk7XG4gICAgcmV0dXJuIGFscGhhYmV0O1xufVxuXG5mdW5jdGlvbiBzZXRTZWVkKHNlZWQpIHtcbiAgICByYW5kb21Gcm9tU2VlZC5zZWVkKHNlZWQpO1xuICAgIGlmIChwcmV2aW91c1NlZWQgIT09IHNlZWQpIHtcbiAgICAgICAgcmVzZXQoKTtcbiAgICAgICAgcHJldmlvdXNTZWVkID0gc2VlZDtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHNodWZmbGUoKSB7XG4gICAgaWYgKCFhbHBoYWJldCkge1xuICAgICAgICBzZXRDaGFyYWN0ZXJzKE9SSUdJTkFMKTtcbiAgICB9XG5cbiAgICB2YXIgc291cmNlQXJyYXkgPSBhbHBoYWJldC5zcGxpdCgnJyk7XG4gICAgdmFyIHRhcmdldEFycmF5ID0gW107XG4gICAgdmFyIHIgPSByYW5kb21Gcm9tU2VlZC5uZXh0VmFsdWUoKTtcbiAgICB2YXIgY2hhcmFjdGVySW5kZXg7XG5cbiAgICB3aGlsZSAoc291cmNlQXJyYXkubGVuZ3RoID4gMCkge1xuICAgICAgICByID0gcmFuZG9tRnJvbVNlZWQubmV4dFZhbHVlKCk7XG4gICAgICAgIGNoYXJhY3RlckluZGV4ID0gTWF0aC5mbG9vcihyICogc291cmNlQXJyYXkubGVuZ3RoKTtcbiAgICAgICAgdGFyZ2V0QXJyYXkucHVzaChzb3VyY2VBcnJheS5zcGxpY2UoY2hhcmFjdGVySW5kZXgsIDEpWzBdKTtcbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldEFycmF5LmpvaW4oJycpO1xufVxuXG5mdW5jdGlvbiBnZXRTaHVmZmxlZCgpIHtcbiAgICBpZiAoc2h1ZmZsZWQpIHtcbiAgICAgICAgcmV0dXJuIHNodWZmbGVkO1xuICAgIH1cbiAgICBzaHVmZmxlZCA9IHNodWZmbGUoKTtcbiAgICByZXR1cm4gc2h1ZmZsZWQ7XG59XG5cbi8qKlxuICogbG9va3VwIHNodWZmbGVkIGxldHRlclxuICogQHBhcmFtIGluZGV4XG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBsb29rdXAoaW5kZXgpIHtcbiAgICB2YXIgYWxwaGFiZXRTaHVmZmxlZCA9IGdldFNodWZmbGVkKCk7XG4gICAgcmV0dXJuIGFscGhhYmV0U2h1ZmZsZWRbaW5kZXhdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBjaGFyYWN0ZXJzOiBjaGFyYWN0ZXJzLFxuICAgIHNlZWQ6IHNldFNlZWQsXG4gICAgbG9va3VwOiBsb29rdXAsXG4gICAgc2h1ZmZsZWQ6IGdldFNodWZmbGVkXG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Nob3J0aWQvbGliL2FscGhhYmV0LmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuLy8gRm91bmQgdGhpcyBzZWVkLWJhc2VkIHJhbmRvbSBnZW5lcmF0b3Igc29tZXdoZXJlXG4vLyBCYXNlZCBvbiBUaGUgQ2VudHJhbCBSYW5kb21pemVyIDEuMyAoQykgMTk5NyBieSBQYXVsIEhvdWxlIChob3VsZUBtc2MuY29ybmVsbC5lZHUpXG5cbnZhciBzZWVkID0gMTtcblxuLyoqXG4gKiByZXR1cm4gYSByYW5kb20gbnVtYmVyIGJhc2VkIG9uIGEgc2VlZFxuICogQHBhcmFtIHNlZWRcbiAqIEByZXR1cm5zIHtudW1iZXJ9XG4gKi9cbmZ1bmN0aW9uIGdldE5leHRWYWx1ZSgpIHtcbiAgICBzZWVkID0gKHNlZWQgKiA5MzAxICsgNDkyOTcpICUgMjMzMjgwO1xuICAgIHJldHVybiBzZWVkLygyMzMyODAuMCk7XG59XG5cbmZ1bmN0aW9uIHNldFNlZWQoX3NlZWRfKSB7XG4gICAgc2VlZCA9IF9zZWVkXztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgbmV4dFZhbHVlOiBnZXROZXh0VmFsdWUsXG4gICAgc2VlZDogc2V0U2VlZFxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zaG9ydGlkL2xpYi9yYW5kb20vcmFuZG9tLWZyb20tc2VlZC5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbnZhciByYW5kb21CeXRlID0gcmVxdWlyZSgnLi9yYW5kb20vcmFuZG9tLWJ5dGUnKTtcblxuZnVuY3Rpb24gZW5jb2RlKGxvb2t1cCwgbnVtYmVyKSB7XG4gICAgdmFyIGxvb3BDb3VudGVyID0gMDtcbiAgICB2YXIgZG9uZTtcblxuICAgIHZhciBzdHIgPSAnJztcblxuICAgIHdoaWxlICghZG9uZSkge1xuICAgICAgICBzdHIgPSBzdHIgKyBsb29rdXAoICggKG51bWJlciA+PiAoNCAqIGxvb3BDb3VudGVyKSkgJiAweDBmICkgfCByYW5kb21CeXRlKCkgKTtcbiAgICAgICAgZG9uZSA9IG51bWJlciA8IChNYXRoLnBvdygxNiwgbG9vcENvdW50ZXIgKyAxICkgKTtcbiAgICAgICAgbG9vcENvdW50ZXIrKztcbiAgICB9XG4gICAgcmV0dXJuIHN0cjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBlbmNvZGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc2hvcnRpZC9saWIvZW5jb2RlLmpzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxudmFyIGNyeXB0byA9IHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnICYmICh3aW5kb3cuY3J5cHRvIHx8IHdpbmRvdy5tc0NyeXB0byk7IC8vIElFIDExIHVzZXMgd2luZG93Lm1zQ3J5cHRvXG5cbmZ1bmN0aW9uIHJhbmRvbUJ5dGUoKSB7XG4gICAgaWYgKCFjcnlwdG8gfHwgIWNyeXB0by5nZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDI1NikgJiAweDMwO1xuICAgIH1cbiAgICB2YXIgZGVzdCA9IG5ldyBVaW50OEFycmF5KDEpO1xuICAgIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMoZGVzdCk7XG4gICAgcmV0dXJuIGRlc3RbMF0gJiAweDMwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHJhbmRvbUJ5dGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc2hvcnRpZC9saWIvcmFuZG9tL3JhbmRvbS1ieXRlLWJyb3dzZXIuanNcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFscGhhYmV0ID0gcmVxdWlyZSgnLi9hbHBoYWJldCcpO1xuXG4vKipcbiAqIERlY29kZSB0aGUgaWQgdG8gZ2V0IHRoZSB2ZXJzaW9uIGFuZCB3b3JrZXJcbiAqIE1haW5seSBmb3IgZGVidWdnaW5nIGFuZCB0ZXN0aW5nLlxuICogQHBhcmFtIGlkIC0gdGhlIHNob3J0aWQtZ2VuZXJhdGVkIGlkLlxuICovXG5mdW5jdGlvbiBkZWNvZGUoaWQpIHtcbiAgICB2YXIgY2hhcmFjdGVycyA9IGFscGhhYmV0LnNodWZmbGVkKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdmVyc2lvbjogY2hhcmFjdGVycy5pbmRleE9mKGlkLnN1YnN0cigwLCAxKSkgJiAweDBmLFxuICAgICAgICB3b3JrZXI6IGNoYXJhY3RlcnMuaW5kZXhPZihpZC5zdWJzdHIoMSwgMSkpICYgMHgwZlxuICAgIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZGVjb2RlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Nob3J0aWQvbGliL2RlY29kZS5qc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbnZhciBlbmNvZGUgPSByZXF1aXJlKCcuL2VuY29kZScpO1xudmFyIGFscGhhYmV0ID0gcmVxdWlyZSgnLi9hbHBoYWJldCcpO1xuXG4vLyBJZ25vcmUgYWxsIG1pbGxpc2Vjb25kcyBiZWZvcmUgYSBjZXJ0YWluIHRpbWUgdG8gcmVkdWNlIHRoZSBzaXplIG9mIHRoZSBkYXRlIGVudHJvcHkgd2l0aG91dCBzYWNyaWZpY2luZyB1bmlxdWVuZXNzLlxuLy8gVGhpcyBudW1iZXIgc2hvdWxkIGJlIHVwZGF0ZWQgZXZlcnkgeWVhciBvciBzbyB0byBrZWVwIHRoZSBnZW5lcmF0ZWQgaWQgc2hvcnQuXG4vLyBUbyByZWdlbmVyYXRlIGBuZXcgRGF0ZSgpIC0gMGAgYW5kIGJ1bXAgdGhlIHZlcnNpb24uIEFsd2F5cyBidW1wIHRoZSB2ZXJzaW9uIVxudmFyIFJFRFVDRV9USU1FID0gMTQ1OTcwNzYwNjUxODtcblxuLy8gZG9uJ3QgY2hhbmdlIHVubGVzcyB3ZSBjaGFuZ2UgdGhlIGFsZ29zIG9yIFJFRFVDRV9USU1FXG4vLyBtdXN0IGJlIGFuIGludGVnZXIgYW5kIGxlc3MgdGhhbiAxNlxudmFyIHZlcnNpb24gPSA2O1xuXG4vLyBDb3VudGVyIGlzIHVzZWQgd2hlbiBzaG9ydGlkIGlzIGNhbGxlZCBtdWx0aXBsZSB0aW1lcyBpbiBvbmUgc2Vjb25kLlxudmFyIGNvdW50ZXI7XG5cbi8vIFJlbWVtYmVyIHRoZSBsYXN0IHRpbWUgc2hvcnRpZCB3YXMgY2FsbGVkIGluIGNhc2UgY291bnRlciBpcyBuZWVkZWQuXG52YXIgcHJldmlvdXNTZWNvbmRzO1xuXG4vKipcbiAqIEdlbmVyYXRlIHVuaXF1ZSBpZFxuICogUmV0dXJucyBzdHJpbmcgaWRcbiAqL1xuZnVuY3Rpb24gYnVpbGQoY2x1c3RlcldvcmtlcklkKSB7XG5cbiAgICB2YXIgc3RyID0gJyc7XG5cbiAgICB2YXIgc2Vjb25kcyA9IE1hdGguZmxvb3IoKERhdGUubm93KCkgLSBSRURVQ0VfVElNRSkgKiAwLjAwMSk7XG5cbiAgICBpZiAoc2Vjb25kcyA9PT0gcHJldmlvdXNTZWNvbmRzKSB7XG4gICAgICAgIGNvdW50ZXIrKztcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb3VudGVyID0gMDtcbiAgICAgICAgcHJldmlvdXNTZWNvbmRzID0gc2Vjb25kcztcbiAgICB9XG5cbiAgICBzdHIgPSBzdHIgKyBlbmNvZGUoYWxwaGFiZXQubG9va3VwLCB2ZXJzaW9uKTtcbiAgICBzdHIgPSBzdHIgKyBlbmNvZGUoYWxwaGFiZXQubG9va3VwLCBjbHVzdGVyV29ya2VySWQpO1xuICAgIGlmIChjb3VudGVyID4gMCkge1xuICAgICAgICBzdHIgPSBzdHIgKyBlbmNvZGUoYWxwaGFiZXQubG9va3VwLCBjb3VudGVyKTtcbiAgICB9XG4gICAgc3RyID0gc3RyICsgZW5jb2RlKGFscGhhYmV0Lmxvb2t1cCwgc2Vjb25kcyk7XG5cbiAgICByZXR1cm4gc3RyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJ1aWxkO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Nob3J0aWQvbGliL2J1aWxkLmpzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG52YXIgYWxwaGFiZXQgPSByZXF1aXJlKCcuL2FscGhhYmV0Jyk7XG5cbmZ1bmN0aW9uIGlzU2hvcnRJZChpZCkge1xuICAgIGlmICghaWQgfHwgdHlwZW9mIGlkICE9PSAnc3RyaW5nJyB8fCBpZC5sZW5ndGggPCA2ICkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIGNoYXJhY3RlcnMgPSBhbHBoYWJldC5jaGFyYWN0ZXJzKCk7XG4gICAgdmFyIGxlbiA9IGlkLmxlbmd0aDtcbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgbGVuO2krKykge1xuICAgICAgICBpZiAoY2hhcmFjdGVycy5pbmRleE9mKGlkW2ldKSA9PT0gLTEpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc1Nob3J0SWQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc2hvcnRpZC9saWIvaXMtdmFsaWQuanNcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSAwO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Nob3J0aWQvbGliL3V0aWwvY2x1c3Rlci13b3JrZXItaWQtYnJvd3Nlci5qc1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcbiAqIFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuICogQ29weXJpZ2h0IChjKSAyMDE5LiBXaXNlIFdpbGQgV2ViXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSDigJxTb2Z0d2FyZeKAnSksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCDigJxBUyBJU+KAnSwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4gKlxuICogIEBhdXRob3IgOiBOYXRoYW5hZWwgQnJhdW5cbiAqICBAY29udGFjdCA6IG44dHouanNAZ21haWwuY29tXG4gKi9cblxuaW1wb3J0IGlzIGZyb20gJ2lzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW1pdHRlciB7XG5cdF9ldmVudHMgPSB7fTtcblx0XG5cdG9uKCBldnQsIGNiICkge1xuXHRcdGlmICggIWlzLnN0cmluZyhldnQpICYmIGV2dCApXG5cdFx0XHRyZXR1cm4gT2JqZWN0LmtleXMoZXZ0KS5mb3JFYWNoKGsgPT4gdGhpcy5vbihrLCBldnRba10pKTtcblx0XHRcblx0XHR0aGlzLl9ldmVudHNbZXZ0XSA9IHRoaXMuX2V2ZW50c1tldnRdIHx8IFtdO1xuXHRcdHRoaXMuX2V2ZW50c1tldnRdLnB1c2goY2IpO1xuXHR9XG5cdFxuXHR1biggZXZ0LCBjYiApIHtcblx0XHRpZiAoICFpcy5zdHJpbmcoZXZ0KSAmJiBldnQgKVxuXHRcdFx0cmV0dXJuIE9iamVjdC5rZXlzKGV2dCkuZm9yRWFjaChrID0+IHRoaXMudW4oaywgZXZ0W2tdKSk7XG5cdFx0XG5cdFx0aWYgKCAhdGhpcy5fZXZlbnRzW2V2dF0gKSByZXR1cm47XG5cdFx0bGV0IGkgPSB0aGlzLl9ldmVudHNbZXZ0XS5pbmRleE9mKGNiKTtcblx0XHR0aGlzLl9ldmVudHNbZXZ0XS5zcGxpY2UoaSwgMSk7XG5cdH1cblx0XG5cdGVtaXQoIGV2dCwgLi4uYXJneiApIHtcblx0XHRpZiAoICF0aGlzLl9ldmVudHNbZXZ0XSApIHJldHVybjtcblx0XHRsZXQgbGlzdHMgPSBbLi4udGhpcy5fZXZlbnRzW2V2dF1dO1xuXHRcdFxuXHRcdGZvciAoIGxldCBpID0gMDsgaSA8IGxpc3RzLmxlbmd0aDsgaSsrIClcblx0XHRcdGxpc3RzW2ldKC4uLmFyZ3opXG5cdH1cblx0XG5cdGFkZExpc3RlbmVyKCkge1xuXHRcdHRoaXMub24oLi4uYXJndW1lbnRzKTtcblx0fVxuXHRcblx0cmVtb3ZlTGlzdGVuZXIoKSB7XG5cdFx0dGhpcy51biguLi5hcmd1bWVudHMpO1xuXHR9XG5cdFxuXHRyZW1vdmVBbGxMaXN0ZW5lcnMoKSB7XG5cdFx0dGhpcy5fZXZlbnRzID0ge307XG5cdH1cblx0XG5cdG9uY2UoIGV2dCwgY2IgKSB7XG5cdFx0bGV0IGZuO1xuXHRcdHRoaXMub24oZXZ0LCBmbiA9ICggLi4uYXJneiApID0+IHtcblx0XHRcdHRoaXMudW4oZXZ0LCBmbik7XG5cdFx0XHRjYiguLi5hcmd6KVxuXHRcdH0pO1xuXHR9XG5cdFxuXHRcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbHMvRW1pdHRlci5qcyIsIi8qXG4gKiBUaGUgTUlUIExpY2Vuc2UgKE1JVClcbiAqIENvcHlyaWdodCAoYykgMjAxOS4gV2lzZSBXaWxkIFdlYlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUg4oCcU29mdHdhcmXigJ0pLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQg4oCcQVMgSVPigJ0sIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuICpcbiAqICBAYXV0aG9yIDogTmF0aGFuYWVsIEJyYXVuXG4gKiAgQGNvbnRhY3QgOiBuOHR6LmpzQGdtYWlsLmNvbVxuICovXG5cbmNvbnN0IGlzID0gcmVxdWlyZSgnaXMnKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHdhbGtuU2V0KCBvYmosIHBhdGgsIHZhbHVlLCBzdGFjayApIHtcblx0aWYgKCBpcy5zdHJpbmcocGF0aCkgKVxuXHRcdHBhdGggPSBwYXRoLnNwbGl0KCcuJyk7XG5cdGlmICggIXBhdGgubGVuZ3RoIClcblx0XHRyZXR1cm4gZmFsc2U7XG5cdGVsc2UgaWYgKCBwYXRoLmxlbmd0aCA9PSAxIClcblx0XHRyZXR1cm4gb2JqW3BhdGhbMF1dID0gc3RhY2tcblx0XHQgICAgICAgICAgICAgICAgICAgICAgPyBbLi4uKG9ialtwYXRoWzBdXSB8fCBbXSksIHZhbHVlXVxuXHRcdCAgICAgICAgICAgICAgICAgICAgICA6IHZhbHVlO1xuXHRlbHNlXG5cdFx0cmV0dXJuIHdhbGtuU2V0KFxuXHRcdFx0b2JqW3BhdGhbMF1dID1cblx0XHRcdFx0b2JqW3BhdGhbMF1dIHx8IHt9LFxuXHRcdFx0cGF0aC5zbGljZSgxKSxcblx0XHRcdHZhbHVlLCBzdGFja1xuXHRcdCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB3YWxrbkdldCggb2JqLCBwYXRoLCBpc0tleSApIHtcblx0aWYgKCBpcy5zdHJpbmcocGF0aCkgKVxuXHRcdHBhdGggPSBwYXRoLnNwbGl0KCcuJyk7XG5cdHJldHVybiBwYXRoLmxlbmd0aFxuXHQgICAgICAgPyBvYmpbcGF0aFswXV0gJiYgd2Fsa25HZXQob2JqW3BhdGhbMF1dLCBwYXRoLnNsaWNlKDEpKVxuXHQgICAgICAgOiBvYmo7XG59XG5cbi8vQHRvZG9cbmV4cG9ydCBmdW5jdGlvbiBrZXlXYWxrblNldCggb2JqLCBwYXRoLCB2YWx1ZSwgc3RhY2sgKSB7XG5cdGlmICggaXMuc3RyaW5nKHBhdGgpIClcblx0XHRwYXRoID0gcGF0aC5zcGxpdCgvKFxcPnxcXC8pL2lnKS5maWx0ZXIodiA9PiAodiAhPT0gJz4nICYmIHYpKTtcblx0cmV0dXJuIHdhbGtuU2V0KG9iaiwgcGF0aCwgdmFsdWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24ga2V5V2Fsa25HZXQoIG9iaiwgcGF0aCwgaXNLZXkgKSB7XG5cdGlmICggaXMuc3RyaW5nKHBhdGgpIClcblx0XHRwYXRoID0gcGF0aC5zcGxpdCgvKFxcPnxcXC8pL2lnKS5maWx0ZXIodiA9PiAodiAhPT0gJz4nICYmIHYpKTtcblx0cmV0dXJuIHBhdGgubGVuZ3RoXG5cdCAgICAgICA/IG9ialtwYXRoWzBdXSAmJiB3YWxrbkdldChvYmpbcGF0aFswXV0sIHBhdGguc2xpY2UoMSkpXG5cdCAgICAgICA6IG9iajtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbHMvdXRpbHMuanMiLCIvKlxuICogVGhlIE1JVCBMaWNlbnNlIChNSVQpXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTkuIFdpc2UgV2lsZCBXZWJcbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIOKAnFNvZnR3YXJl4oCdKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIOKAnEFTIElT4oCdLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiAqXG4gKiAgQGF1dGhvciA6IE5hdGhhbmFlbCBCcmF1blxuICogIEBjb250YWN0IDogbjh0ei5qc0BnbWFpbC5jb21cbiAqL1xuXG5jb25zdCBpcyAgICAgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnaXMnKSxcbiAgICAgIFNjb3BlICAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL1Njb3BlJyksXG4gICAgICB7IGtleVdhbGtuU2V0LCBrZXlXYWxrbkdldCB9ID0gcmVxdWlyZSgnLi91dGlscy91dGlscycpLFxuICAgICAgRXZlbnRFbWl0dGVyICAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vdXRpbHMvRW1pdHRlcicpLFxuICAgICAgVGFza1NlcXVlbmNlciAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vdXRpbHMvVGFza1NlcXVlbmNlcicpLFxuICAgICAgc2hvcnRpZCAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJ3Nob3J0aWQnKSxcbiAgICAgIG9ialByb3RvICAgICAgICAgICAgICAgICAgICAgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Yoe30pO1xuXG5jbGFzcyBTdG9yZSBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG5cdC8vc3RhdGljIHVzZSAgICAgICAgICAgICAgICAgID0gW107Ly8gb3ZlcnJpZGFibGUgbGlzdCBvZiBzb3VyY2Ugc3RvcmVzXG5cdHN0YXRpYyBmb2xsb3c7Ly8gb3ZlcnJpZGFibGUgbGlzdCBvZiBzdG9yZSB0aGF0IHdpbGwgYWxsb3cgcHVzaCBpZiB1cGRhdGVkXG5cdHN0YXRpYyByZXF1aXJlO1xuXHRzdGF0aWMgc3RhdGljU2NvcGUgICA9IG5ldyBTY29wZSh7fSwgeyBpZDogXCJzdGF0aWNcIiB9KTtcblx0c3RhdGljIHN0YXRlICAgICAgICAgPSB1bmRlZmluZWQ7Ly8gZGVmYXVsdCBzdGF0ZVxuXHQvKipcblx0ICogaWYgcmV0YWluIGdvZXMgdG8gMCA6XG5cdCAqIGZhbHNlIHRvIG5vdCBkZXN0cm95LFxuXHQgKiAwIHRvIHN5bmMgYXV0byBkZXN0cm95XG5cdCAqIE1zIHRvIGF1dG9kZXN0cm95IGFmdGVyIHRtIG1zIGlmIG5vIHJldGFpbiBoYXMgYmVlbiBjYWxsZWRcblx0ICogQHR5cGUge2Jvb2xlYW58SW50fVxuXHQgKi9cblx0c3RhdGljIHBlcnNpc3RlbmNlVG0gPSBmYWxzZTtcblx0XG5cdC8qKlxuXHQgKiBDb25zdHJ1Y3Rvciwgd2lsbCBidWlsZCBhIHJlc2NvcGUgc3RvcmVcblx0ICpcblx0ICogKHNjb3BlLCB7cmVxdWlyZSx1c2UsYXBwbHksc3RhdGUsIGRhdGF9KVxuXHQgKiAoc2NvcGUpXG5cdCAqXG5cdCAqIEBwYXJhbSBzY29wZSB7b2JqZWN0fSBzY29wZSB3aGVyZSB0byBmaW5kIHRoZSBvdGhlciBzdG9yZXMgKGRlZmF1bHQgOiBzdGF0aWNcblx0ICogICAgIHN0YXRpY1Njb3BlIClcblx0ICogQHBhcmFtIGtleXMge0FycmF5fSAocGFzc2VkIHRvIFN0b3JlOjptYXApIEV4IDogW1wic2Vzc2lvblwiLCBcIm90aGVyTmFtZWRTdG9yZTprZXlcIixcblx0ICogICAgIG90aGVyU3RvcmUuYXMoXCJvdGhlcktleVwiKV1cblx0ICovXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdFx0bGV0IGFyZ3ogICAgICAgICA9IFsuLi5hcmd1bWVudHNdLFxuXHRcdCAgICBfc3RhdGljICAgICAgPSB0aGlzLmNvbnN0cnVjdG9yLFxuXHRcdCAgICBzY29wZSAgICAgICAgPSBhcmd6WzBdIGluc3RhbmNlb2YgU2NvcGVcblx0XHQgICAgICAgICAgICAgICAgICAgPyBhcmd6LnNoaWZ0KClcblx0XHQgICAgICAgICAgICAgICAgICAgOiBfc3RhdGljLnNjb3BlID8gU2NvcGUuZ2V0U2NvcGUoX3N0YXRpYy5zY29wZSlcblx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogaXMuc3RyaW5nKGFyZ3pbMF0pXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gU2NvcGUuZ2V0U2NvcGUoYXJnei5zaGlmdCgpKVxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF9zdGF0aWMuc3RhdGljU2NvcGUsXG5cdFx0ICAgIGNmZyAgICAgICAgICA9IGFyZ3pbMF0gJiYgIWlzLmFycmF5KGFyZ3pbMF0pICYmICFpcy5zdHJpbmcoYXJnelswXSlcblx0XHQgICAgICAgICAgICAgICAgICAgPyBhcmd6LnNoaWZ0KClcblx0XHQgICAgICAgICAgICAgICAgICAgOiB7fSxcblx0XHQgICAgdGFza1F1ZXVlICAgID0gaXMuYXJyYXkoYXJnelswXSkgPyBhcmd6LnNoaWZ0KCkgOiBudWxsLFxuXHRcdCAgICBuYW1lICAgICAgICAgPSBjZmcubmFtZSB8fCBfc3RhdGljLm5hbWUsXG5cdFx0ICAgIHdhdGNocyAgICAgICA9IGNmZy51c2UgfHwgW10sXG5cdFx0ICAgIGFwcGx5ICAgICAgICA9IGNmZy5hcHBseSB8fCBudWxsLFxuXHRcdCAgICBpbml0aWFsU3RhdGUgPSBfc3RhdGljLnN0YXRlIHx8IF9zdGF0aWMuaW5pdGlhbFN0YXRlIHx8IF9zdGF0aWMuZGVmYXVsdFN0YXRlO1xuXHRcdFxuXHRcdHRoaXMuX3VpZCA9IGNmZy5fdWlkIHx8IHNob3J0aWQuZ2VuZXJhdGUoKTtcblx0XHRcblx0XHR0aGlzLl9fcmV0YWlucyAgICA9IHsgYWxsOiAwIH07XG5cdFx0dGhpcy5fX2xvY2tzICAgICAgPSB7IGFsbDogMCB9O1xuXHRcdHRoaXMuX29uU3RhYmlsaXplID0gW107XG5cdFx0XG5cdFx0Ly8gYXV0b0Rlc3Ryb3lUbVxuXHRcdHRoaXMuX2F1dG9EZXN0cm95ICAgPSAhIXRoaXMuX3BlcnNpc3RlbmNlVG07XG5cdFx0dGhpcy5fcGVyc2lzdGVuY2VUbSA9IGNmZy5wZXJzaXN0ZW5jZVRtIHx8IF9zdGF0aWMucGVyc2lzdGVuY2VUbSB8fCAoY2ZnLmF1dG9EZXN0cm95IHx8IF9zdGF0aWMuYXV0b0Rlc3Ryb3kpICYmIDU7XG5cdFx0dGhpcy5fY2ZnICAgICAgICAgICA9IGNmZztcblx0XHRcblx0XHRpZiAoIGNmZyAmJiBjZmcub24gKSB7XG5cdFx0XHR0aGlzLm9uKGNmZy5vbik7XG5cdFx0fVxuXHRcdFxuXHRcdHRoaXMubmFtZSA9IG5hbWU7XG5cdFx0XG5cdFx0aWYgKCBzY29wZS5zdG9yZXMgKSB7XG5cdFx0XHR0aGlzLnNjb3BlT2JqID0gc2NvcGU7XG5cdFx0XHR0aGlzLnNjb3BlICAgID0gc2NvcGUuc3RvcmVzO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdHRoaXMuc2NvcGVPYmogPSBuZXcgU2NvcGUoc2NvcGUpO1xuXHRcdFx0dGhpcy5zY29wZSAgICA9IHNjb3BlLnN0b3Jlcztcblx0XHR9XG5cdFx0XG5cdFx0Ly8gc3RhbmRhcmRpemVkIHNjb3BlIGFjY2Vzc1xuXHRcdHRoaXMuJHNjb3BlICAgID0gdGhpcy5zY29wZU9iajtcblx0XHR0aGlzLiRzdG9yZXMgICA9IHRoaXMuc2NvcGVPYmouc3RvcmVzO1xuXHRcdHRoaXMuJGFjdGlvbnMgID0gdGhpcy5zY29wZU9iai5hY3Rpb25zO1xuXHRcdHRoaXMuJGRpc3BhdGNoID0gdGhpcy5zY29wZU9iai5kaXNwYXRjaC5iaW5kKHRoaXMuc2NvcGVPYmopO1xuXHRcdFxuXHRcdHRoaXMuX3JldiAgICAgPSB0aGlzLmNvbnN0cnVjdG9yLl9yZXYgfHwgMDtcblx0XHR0aGlzLl9yZXZzICAgID0ge307XG5cdFx0dGhpcy5zdG9yZXMgICA9IHt9O1xuXHRcdHRoaXMuX3JlcXVpcmUgPSBbXTtcblx0XHR0aGlzLl9zb3VyY2VzID0gW25hbWVdO1xuXHRcdFxuXHRcdC8vIHJlZ2lzdGVyIHNvdXJjZSBzdG9yZXNcblx0XHRpZiAoIGlzLmFycmF5KF9zdGF0aWMudXNlKSApIHtcblx0XHRcdHRoaXMuX3VzZSA9IFsuLi53YXRjaHMsIC4uLihfc3RhdGljLnVzZSB8fCBbXSkubWFwKFxuXHRcdFx0XHRrZXkgPT4ge1xuXHRcdFx0XHRcdGxldCByZWYgPSBrZXkubWF0Y2goL14oXFwhPykoW15cXDpdKikoPzpcXDooLiopKT8kLyk7XG5cdFx0XHRcdFx0aWYgKCByZWZbMV0gKSB7XG5cdFx0XHRcdFx0XHRsZXQgcmVmMiA9IHJlZlsyXS5zcGxpdCgnLicpO1xuXHRcdFx0XHRcdFx0dGhpcy5fcmVxdWlyZS5wdXNoKHJlZlszXSB8fCByZWYyW3JlZjIubGVuZ3RoIC0gMV0pOy8vIHJlcXVpcmUgY2hlY2sgdmFsdWUgb2YgdGhlIGFsaWFzZWRcblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGltcG9ydGVkIHZhbHVlXG5cdFx0XHRcdFx0XHRyZXR1cm4ga2V5LnN1YnN0cigxKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmV0dXJuIGtleTtcblx0XHRcdFx0fVxuXHRcdFx0KV07XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0dGhpcy5fdXNlID0gWy4uLndhdGNocywgLi4uKFxuXHRcdFx0XHRfc3RhdGljLnVzZSA/IE9iamVjdC5rZXlzKF9zdGF0aWMudXNlKVxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgIC5tYXAoXG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICBrZXkgPT4ge1xuXHRcdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICBsZXQgcmVmID0ga2V5Lm1hdGNoKC9eKFxcIT8pKC4qKSQvKTtcblx0XHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgcmVmWzFdICYmIHRoaXMuX3JlcXVpcmUucHVzaChfc3RhdGljLnVzZVtrZXldKTtcblx0XHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlZlsyXSArICgoX3N0YXRpYy51c2Vba2V5XSA9PT0gdHJ1ZSlcblx0XHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICcnXG5cdFx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnOicgKyBfc3RhdGljLnVzZVtrZXldKTtcblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgIH1cblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICApIDogW11cblx0XHRcdCldO1xuXHRcdH1cblx0XHRcblx0XHRpZiAoIF9zdGF0aWMucmVxdWlyZSApXG5cdFx0XHR0aGlzLl9yZXF1aXJlLnB1c2goLi4uX3N0YXRpYy5yZXF1aXJlKTtcblx0XHRpZiAoIGNmZy5yZXF1aXJlIClcblx0XHRcdHRoaXMuX3JlcXVpcmUucHVzaCguLi5jZmcucmVxdWlyZSk7XG5cdFx0XG5cdFx0dGhpcy5fZm9sbG93ZXJzID0gW107XG5cdFx0dGhpcy5fY2hhbmdlc1NXID0gaW5pdGlhbFN0YXRlIHx8IHt9O1xuXHRcdHRoaXMuc3RhdGUgICAgICA9IGluaXRpYWxTdGF0ZSAmJiB7fTtcblx0XHRcblx0XHRpZiAoIGFwcGx5IClcblx0XHRcdHRoaXMuYXBwbHkgPSBhcHBseTtcblx0XHRcblx0XHQvKipcblx0XHQgKiBJbml0aWFsIHN0YXRlIGlzbid0IGZ1bGx5IGluaXRpYWxpemVkICggY2hpbGRzIGNvbnN0cnVjdG9ycyBjYW4gc2V0IGl0IClcblx0XHQgKiBTY29wZSBiYXNlZCBpbnN0YW5jZSBoYXZlIHRhc2tRdWV1ZSB0byBkZWxheSBpbml0IHN5bmNocm9ub3VzbHksIGlmIG5vdFxuXHRcdCAqIHByZXNlbnQgd2UgdXNlIHNldFRpbWVvdXRcblx0XHQgKi9cblx0XHRpZiAoIHRhc2tRdWV1ZSApIHtcblx0XHRcdHRhc2tRdWV1ZS5wdXNoKHRoaXMuX2FmdGVyQ29uc3RydWN0b3IuYmluZCh0aGlzKSlcblx0XHR9XG5cdFx0ZWxzZVxuXHRcdFx0c2V0VGltZW91dCh0aGlzLl9hZnRlckNvbnN0cnVjdG9yLmJpbmQodGhpcykpXG5cdH1cblx0XG5cdC8qKlxuXHQgKiBHZXQgdGhlIGluY29taW5nIHN0YXRlICggZm9yIGltbWVkaWF0ZSBzdGF0ZSByZWxhdGl2ZSBhY3Rpb25zIClcblx0ICogQHJldHVybnMge3t9fCp9XG5cdCAqL1xuXHRnZXQgbmV4dFN0YXRlKCkge1xuXHRcdHJldHVybiB0aGlzLl9jaGFuZ2VzU1cgJiYgeyAuLi50aGlzLnN0YXRlLCAuLi50aGlzLl9jaGFuZ2VzU1cgfSB8fCB0aGlzLnN0YXRlO1xuXHR9XG5cdFxuXHRfYWZ0ZXJDb25zdHJ1Y3RvcigpIHtcblx0XHRsZXQgY2ZnICAgICAgICAgID0gdGhpcy5fY2ZnLFxuXHRcdCAgICBfc3RhdGljICAgICAgPSB0aGlzLmNvbnN0cnVjdG9yLFxuXHRcdCAgICBzbmFwc2hvdCAgICAgPSB0aGlzLnJlc3RvcmUodW5kZWZpbmVkLCB0cnVlKSxcblx0XHQgICAgaW5pdGlhbFN0YXRlID0gdGhpcy5zdGF0ZSxcblx0XHQgICAgaW5pdGlhbERhdGEgID0gdGhpcy5kYXRhLFxuXHRcdCAgICBhcHBsaWVkO1xuXHRcdHtcblx0XHRcdFxuXHRcdFx0aWYgKCBpbml0aWFsRGF0YSApXG5cdFx0XHRcdHRoaXMuZGF0YSA9IGluaXRpYWxEYXRhO1xuXHRcdFx0ZWxzZSBpZiAoIF9zdGF0aWMuZGF0YSAhPT0gdW5kZWZpbmVkIClcblx0XHRcdFx0dGhpcy5kYXRhID0geyAuLi5fc3RhdGljLmRhdGEgfTtcblx0XHRcdGVsc2UgaWYgKCBjZmcuaGFzT3duUHJvcGVydHkoXCJkYXRhXCIpIClcblx0XHRcdFx0dGhpcy5kYXRhID0gY2ZnLmRhdGE7XG5cdFx0XHRcblx0XHRcdGlmICggY2ZnLmhhc093blByb3BlcnR5KFwic3RhdGVcIikgJiYgY2ZnLnN0YXRlICE9PSB1bmRlZmluZWQgKVxuXHRcdFx0XHRpbml0aWFsU3RhdGUgPSB7IC4uLmluaXRpYWxTdGF0ZSwgLi4uY2ZnLnN0YXRlIH07XG5cdFx0XHRcblx0XHRcdGlmICggdGhpcy5kYXRhID09PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRcdGlmICggaW5pdGlhbFN0YXRlIHx8IHRoaXMuX3VzZS5sZW5ndGggKSB7Ly8gc3luYyBhcHBseVxuXHRcdFx0XHRcdHRoaXMuX2NoYW5nZXNTVyA9IHtcblx0XHRcdFx0XHRcdC4uLnRoaXMuX2NoYW5nZXNTVyxcblx0XHRcdFx0XHRcdC4uLihpbml0aWFsU3RhdGUgfHwge30pLFxuXHRcdFx0XHRcdFx0Li4udGhpcy4kc2NvcGUubWFwKHRoaXMsIHRoaXMuX3VzZSlcblx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgICAgICA9IHt9O1xuXHRcdFx0XHRcdGlmICggdGhpcy5zaG91bGRBcHBseSh0aGlzLl9jaGFuZ2VzU1cpICYmIHRoaXMuZGF0YSA9PT0gdW5kZWZpbmVkICkge1xuXHRcdFx0XHRcdFx0dGhpcy5kYXRhICAgICAgID0gdGhpcy5hcHBseSh0aGlzLmRhdGEsIHRoaXMuX2NoYW5nZXNTVywgdGhpcy5fY2hhbmdlc1NXKTtcblx0XHRcdFx0XHRcdGFwcGxpZWQgICAgICAgICA9IHRydWU7XG5cdFx0XHRcdFx0XHR0aGlzLnN0YXRlICAgICAgPSB0aGlzLl9jaGFuZ2VzU1c7XG5cdFx0XHRcdFx0XHR0aGlzLl9jaGFuZ2VzU1cgPSB7fTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHRhcHBsaWVkICAgICAgICAgPSB0cnVlO1xuXHRcdFx0XHR0aGlzLnN0YXRlICAgICAgPSB7Ly8gYXNzdW1lIHRoaXMgc3RhdGUgaXMgc3luYyB3aXRoIGluaXRpYWwgZGF0YVxuXHRcdFx0XHRcdC4uLnRoaXMuX2NoYW5nZXNTVyxcblx0XHRcdFx0XHQuLi4oaW5pdGlhbFN0YXRlIHx8IHt9KSxcblx0XHRcdFx0XHQuLi50aGlzLiRzY29wZS5tYXAodGhpcywgdGhpcy5fdXNlKVxuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuX2NoYW5nZXNTVyA9IHt9O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAoICh0aGlzLmRhdGEgIT09IHVuZGVmaW5lZCB8fCBhcHBsaWVkKSAmJiAhdGhpcy5fX2xvY2tzLmFsbCApIHtcblx0XHRcdHRoaXMuX3N0YWJsZSA9IHRydWU7XG5cdFx0XHR0aGlzLl9yZXYrKztcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHR0aGlzLl9zdGFibGUgPSBmYWxzZTtcblx0XHRcdGlmICggIV9zdGF0aWMubWFuYWdlZCAmJiAhdGhpcy5zdGF0ZSAmJiAoIXRoaXMuX3VzZSB8fCAhdGhpcy5fdXNlLmxlbmd0aCkgKSB7XG5cdFx0XHRcdGNvbnNvbGUud2FybihcIlJlU2NvcGUgc3RvcmUgJ1wiLCB0aGlzLm5hbWUsIFwiJyBoYXZlIG5vIGluaXRpYWwgZGF0YSwgc3RhdGUgb3IgdXNlLiBJdCBjYW4ndCBzdGFiaWxpemUuLi5cIik7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdCF0aGlzLl9zdGFibGUgJiYgdGhpcy5lbWl0KCd1bnN0YWJsZScsIHRoaXMuc3RhdGUpO1xuXHRcdFxuXHR9XG5cdFxuXHQvKipcblx0ICogT3ZlcnJpZGFibGUgbWV0aG9kIHRvIGtub3cgaWYgYSBkYXRhIGNoYW5nZSBzaG91bGQgYmUgcHJvcGFnIHRvIHRoZSBsaXN0ZW5pbmdcblx0ICogc3RvcmVzICYgY29tcG9uZW50c1xuXHQgKi9cblx0c2hvdWxkUHJvcGFnKCBuRGF0YXMgKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBPdmVycmlkYWJsZSBtZXRob2QgdG8gY2hvb3NlIGlmIHRoaXMgc3RvcmUgc2hvdWxkIGJlIHNlcmlhbGl6ZWQsXG5cdCAqIElmIG5vdCBpdCB3aWxsIGJlIGFwcGxpZWQgbm9ybWFsbHkgd2hlbiByZXN0b3Jpbmdcblx0ICogQHJldHVybnMge2Jvb2xlYW59XG5cdCAqL1xuXHRzaG91bGRTZXJpYWxpemUoKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblx0XG5cdGhhc0RhdGFDaGFuZ2UoIG5EYXRhcyApIHtcblx0XHRsZXQgX3N0YXRpYyA9IHRoaXMuY29uc3RydWN0b3IsIHIsXG5cdFx0ICAgIGNEYXRhcyAgPSB0aGlzLmRhdGE7XG5cdFx0ciAgICAgICAgICAgPSAhY0RhdGFzICYmIG5EYXRhcyB8fCBjRGF0YXMgIT09IG5EYXRhcztcblx0XHQhciAmJiBjRGF0YXMgJiYgT2JqZWN0LmtleXMoY0RhdGFzKS5mb3JFYWNoKFxuXHRcdFx0KCBrZXkgKSA9PiB7XG5cdFx0XHRcdHIgPSByIHx8IChuRGF0YXNcblx0XHRcdFx0ICAgICAgICAgID8gY0RhdGFzW2tleV0gIT09IG5EYXRhc1trZXldXG5cdFx0XHRcdCAgICAgICAgICA6IGNEYXRhcyAmJiBjRGF0YXNba2V5XSlcblx0XHRcdH1cblx0XHQpO1xuXHRcdCFyICYmIG5EYXRhcyAmJiBPYmplY3Qua2V5cyhuRGF0YXMpLmZvckVhY2goXG5cdFx0XHQoIGtleSApID0+IHtcblx0XHRcdFx0ciA9IHIgfHwgKG5EYXRhc1xuXHRcdFx0XHQgICAgICAgICAgPyBjRGF0YXNba2V5XSAhPT0gbkRhdGFzW2tleV1cblx0XHRcdFx0ICAgICAgICAgIDogY0RhdGFzICYmIGNEYXRhc1trZXldKVxuXHRcdFx0fVxuXHRcdCk7XG5cdFx0cmV0dXJuIHI7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBPdmVycmlkYWJsZSBtZXRob2QgdG8ga25vdyBpZiBhIHN0YXRlIGNoYW5nZSBzaG91bGQgYmUgYXBwbGllZFxuXHQgKi9cblx0c2hvdWxkQXBwbHkoIHN0YXRlID0gdGhpcy5zdGF0ZSApIHtcblx0XHRsZXQgX3N0YXRpYyA9IHRoaXMuY29uc3RydWN0b3I7XG5cdFx0XG5cdFx0cmV0dXJuIChcblx0XHRcdCEhdGhpcy5pc0NvbXBsZXRlKHN0YXRlKVxuXHRcdCkgJiYgKGlzLmFycmF5KF9zdGF0aWMuZm9sbG93KVxuXHRcdCAgICAgID8gX3N0YXRpYy5mb2xsb3dcblx0XHQgICAgICAgICAgICAgICAucmVkdWNlKCggciwgaSApID0+IChyIHx8IHN0YXRlICYmIHN0YXRlW2ldKSwgZmFsc2UpXG5cdFx0ICAgICAgOiBfc3RhdGljLmZvbGxvd1xuXHRcdCAgICAgICAgPyBPYmplY3Qua2V5cyhfc3RhdGljLmZvbGxvdylcblx0XHQgICAgICAgICAgICAgICAgLnJlZHVjZSgoIHIsIGkgKSA9PiAoXG5cdFx0XHQgICAgICAgICAgICAgICAgclxuXHRcdFx0ICAgICAgICAgICAgICAgIHx8IHN0YXRlICYmIGlzLmZuKF9zdGF0aWMuZm9sbG93W2ldKSAmJiBfc3RhdGljLmZvbGxvd1tpXS5jYWxsKHRoaXMsIHN0YXRlW2ldKVxuXHRcdFx0ICAgICAgICAgICAgICAgIHx8IF9zdGF0aWMuZm9sbG93W2ldICYmIHN0YXRlW2ldICE9PSB0aGlzLnN0YXRlW2ldXG5cdFx0ICAgICAgICAgICAgICAgICksIGZhbHNlKSA6IHRydWVcblx0XHQpO1xuXHR9XG5cdFxuXHQvKipcblx0ICogT3ZlcnJpZGFibGUgYXBwbGllciAvIHJlbWFwcGVyXG5cdCAqIElmIHN0YXRlIG9yIGxhc3RQdWJsaWNTdGF0ZSBhcmUgc2ltcGxlIGhhc2ggbWFwcyBhcHBseSB3aWxsIHJldHVybiB7Li4uZGF0YSxcblx0ICogLi4uc3RhdGV9IGlmIG5vdCBpdCB3aWxsIHJldHVybiB0aGUgbGFzdCBwcml2YXRlIHN0YXRlXG5cdCAqIEBwYXJhbSBkYXRhXG5cdCAqIEBwYXJhbSBzdGF0ZVxuXHQgKiBAcmV0dXJucyB7Kn1cblx0ICovXG5cdGFwcGx5KCBkYXRhLCBzdGF0ZSwgY2hhbmdlcyApIHtcblx0XHRzdGF0ZSA9IHN0YXRlIHx8IHRoaXMuc3RhdGU7XG5cdFx0XG5cdFx0aWYgKCAhZGF0YSB8fCBkYXRhLl9fcHJvdG9fXyAhPT0gb2JqUHJvdG8gfHwgc3RhdGUuX19wcm90b19fICE9PSBvYmpQcm90byApXG5cdFx0XHRyZXR1cm4gc3RhdGU7XG5cdFx0ZWxzZVxuXHRcdFx0cmV0dXJuIHsgLi4uZGF0YSwgLi4uc3RhdGUgfVxuXHR9XG5cdFxuXHQvKipcblx0ICogRGVib3VuY2UgdGhpcyBzdG9yZSBwcm9wYWdhdGlvbiAoICYgcmVkdWNpbmcgKVxuXHQgKiBAcGFyYW0gY2Jcblx0ICovXG5cdHN0YWJpbGl6ZSggY2IgKSB7XG5cdFx0Y2IgJiYgdGhpcy5vbmNlKCdzdGFibGUnLCBjYik7XG5cdFx0dGhpcy5fc3RhYmxlICYmIHRoaXMuZW1pdCgndW5zdGFibGUnLCB0aGlzLnN0YXRlLCB0aGlzLmRhdGEpO1xuXHRcdFxuXHRcdHRoaXMuX3N0YWJsZSA9IGZhbHNlO1xuXHRcdFxuXHRcdGlmICggdGhpcy5fc3RhYmlsaXplciApXG5cdFx0XHRyZXR1cm47XG5cdFx0XG5cdFx0dGhpcy5fc3RhYmlsaXplciA9IFRhc2tTZXF1ZW5jZXIucHVzaFRhc2sodGhpcywgJ3B1c2hTdGF0ZScpO1xuXHR9XG5cdFxuXHQvKipcblx0ICogV2FsayBuIGdldFxuXHQgKiBAcGFyYW0gcGF0aFxuXHQgKiBAcGFyYW0gaVxuXHQgKiBAcGFyYW0gb2JqXG5cdCAqIEByZXR1cm5zIHsqfHt9fVxuXHQgKi9cblx0cmV0cmlldmUoIHBhdGgsIGkgPSAwLCBvYmogPSB0aGlzLmRhdGEgKSB7XG5cdFx0cGF0aCA9IGlzLnN0cmluZyhwYXRoKSA/IHBhdGguc3BsaXQoJy4nKSA6IHBhdGg7XG5cdFx0cmV0dXJuICFvYmogfHwgIXBhdGggfHwgIXBhdGgubGVuZ3RoXG5cdFx0ICAgICAgID8gb2JqXG5cdFx0ICAgICAgIDogcGF0aC5sZW5ndGggPT0gaSArIDFcblx0XHQgICAgICAgICA/IG9ialtwYXRoW2ldXVxuXHRcdCAgICAgICAgIDogdGhpcy5yZXRyaWV2ZShwYXRoLCBpICsgMSwgb2JqW3BhdGhbaV1dKTtcblx0fVxuXHRcblx0ZGlzcGF0Y2goIGFjdGlvbiwgLi4uYXJneiApIHtcblx0XHR0aGlzLnNjb3BlT2JqLmRpc3BhdGNoKGFjdGlvbiwgLi4uYXJneik7XG5cdH1cblx0XG5cdHRyaWdnZXIoIGFjdGlvbiwgLi4uYXJneiApIHtcblx0XHRsZXQgeyBhY3Rpb25zIH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXHRcdGlmICggYWN0aW9ucyAmJiBhY3Rpb25zW2FjdGlvbl0gKSB7XG5cdFx0XHRsZXQgbnMgPSBhY3Rpb25zW2FjdGlvbl0uY2FsbCh0aGlzLCAuLi5hcmd6KTtcblx0XHRcdG5zICYmIHRoaXMuc2V0U3RhdGUobnMpO1xuXHRcdH1cblx0fVxuXHRcblx0LyoqXG5cdCAqIFNldCAmIFB1c2ggdGhlIHJlc3VsdCBkYXRhIHRvIGZvbGxvd2VycyBpZiBzdGFibGVcblx0ICogQHBhcmFtIGNiXG5cdCAqL1xuXHRwdXNoKCBkYXRhLCBmb3JjZSwgY2IgKSB7XG5cdFx0Y2IgICAgPSBmb3JjZSA9PT0gdHJ1ZSA/IGNiIDogZm9yY2U7XG5cdFx0Zm9yY2UgPSBmb3JjZSA9PT0gdHJ1ZTtcblx0XHRpZiAoICFmb3JjZSAmJlxuXHRcdFx0KFxuXHRcdFx0XHQhdGhpcy5oYXNEYXRhQ2hhbmdlKGRhdGEpXG5cdFx0XHQpXG5cdFx0KSB7XG5cdFx0XHRjYiAmJiBjYigpO1xuXHRcdFx0aWYgKCAhdGhpcy5fX2xvY2tzLmFsbCApIHtcblx0XHRcdFx0bGV0IHN0YWJsZSAgID0gdGhpcy5fc3RhYmxlO1xuXHRcdFx0XHR0aGlzLl9zdGFibGUgPSB0cnVlO1xuXHRcdFx0XHQhc3RhYmxlICYmIHRoaXMuZW1pdCgnc3RhYmxlJywgdGhpcy5zdGF0ZSwgdGhpcy5kYXRhKTtcblx0XHRcdFx0dGhpcy5fc3RhYmlsaXplciA9IG51bGw7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdFxuXHRcdHRoaXMuZGF0YSA9IGRhdGE7XG5cdFx0dGhpcy53YWl0KCk7XG5cdFx0dGhpcy5yZWxlYXNlKGNiKTtcblx0XHRcblx0fVxuXHRcblx0LyoqXG5cdCAqIENhbGwgdGhlIGFwcGx5IGZuIHVzaW5nIHRoZSBjdXJyZW50IGFjY3VtdWxhdGVkIHN0YXRlIHVwZGF0ZSB0aGVuLCBwdXNoIHRoZVxuXHQgKiByZXN1bHRpbmcgZGF0YSBpZiBzdGFibGVcblx0ICogQHBhcmFtIGZvcmNlXG5cdCAqL1xuXHRwdXNoU3RhdGUoIGZvcmNlICkge1xuXHRcdFxuXHRcdGlmICggIWZvcmNlICYmICF0aGlzLl9jaGFuZ2VzU1cgJiYgdGhpcy5kYXRhIClcblx0XHRcdHJldHVybjtcblx0XHRcblx0XHRsZXQgbmV4dFN0YXRlID0gdGhpcy5fbmV4dFN0YXRlIHx8IHsgLi4udGhpcy5zdGF0ZSwgLi4uKHRoaXMuX2NoYW5nZXNTVyB8fCB7fSkgfSxcblx0XHQgICAgbmV4dERhdGEgID0gdGhpcy5hcHBseSh0aGlzLmRhdGEsIG5leHRTdGF0ZSwgdGhpcy5fY2hhbmdlc1NXKTtcblx0XHRcblx0XHR0aGlzLl9zdGFiaWxpemVyID0gbnVsbDtcblx0XHR0aGlzLnN0YXRlICAgICAgID0gbmV4dFN0YXRlO1xuXHRcdHRoaXMuX2NoYW5nZXNTVyAgPSBudWxsO1xuXHRcdFxuXHRcdGlmICggIWZvcmNlICYmXG5cdFx0XHQoXG5cdFx0XHRcdCF0aGlzLmhhc0RhdGFDaGFuZ2UobmV4dERhdGEpXG5cdFx0XHQpXG5cdFx0KSB7XG5cdFx0XHRpZiAoICF0aGlzLl9fbG9ja3MuYWxsICkge1xuXHRcdFx0XHRsZXQgc3RhYmxlICAgPSB0aGlzLl9zdGFibGU7XG5cdFx0XHRcdHRoaXMuX3N0YWJsZSA9IHRydWU7XG5cdFx0XHRcdCFzdGFibGUgJiYgdGhpcy5lbWl0KCdzdGFibGUnLCB0aGlzLnN0YXRlLCB0aGlzLmRhdGEpO1xuXHRcdFx0XHR0aGlzLl9zdGFiaWxpemVyID0gbnVsbDtcblx0XHRcdH1cblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0XG5cdFx0dGhpcy5kYXRhID0gbmV4dERhdGE7XG5cdFx0dGhpcy53YWl0KCk7XG5cdFx0dGhpcy5yZWxlYXNlKCk7XG5cdFx0XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBBZGQgJ3BTdGF0ZScgdG8gdGhlIGN1cnJlbnQgYWNjdW11bGF0ZWQgc3RhdGUgdXBkYXRlc1xuXHQgKiAmIHdhaXQgc291cmNlIHN0b3JlcyBzdGFiaWxpemF0aW9uIGJlZm9yZSBwdXNoaW5nIHRoZXNlIHN0YXRlIHVwZGF0ZXNcblx0ICogQHBhcmFtIHBTdGF0ZVxuXHQgKiBAcGFyYW0gY2Jcblx0ICovXG5cdHNldFN0YXRlKCBwU3RhdGUsIGNiLCBzeW5jICkge1xuXHRcdGxldCBpICAgICAgID0gMCwgY2hhbmdlLFxuXHRcdCAgICBjaGFuZ2VzID0gdGhpcy5fY2hhbmdlc1NXID0gdGhpcy5fY2hhbmdlc1NXIHx8IHt9O1xuXHRcdGZvciAoIGxldCBrIGluIHBTdGF0ZSApXG5cdFx0XHRpZiAoICF0aGlzLnN0YXRlXG5cdFx0XHRcdHx8IGNoYW5nZXMuaGFzT3duUHJvcGVydHkoaykvLyB0b2RvXG5cdFx0XHRcdCYmIChcblx0XHRcdFx0XHRwU3RhdGVba10gIT09IGNoYW5nZXNba11cblx0XHRcdFx0KSB8fCBwU3RhdGUuaGFzT3duUHJvcGVydHkoaylcblx0XHRcdFx0JiYgKFxuXHRcdFx0XHRcdHBTdGF0ZVtrXSAhPT0gdGhpcy5zdGF0ZVtrXVxuXHRcdFx0XHRcdC8vfHxcblx0XHRcdFx0XHQvLyh0aGlzLnN0YXRlW2tdICYmIHBTdGF0ZVtrXSAmJiAocFN0YXRlW2tdLl9yZXYgIT0gdGhpcy5fcmV2c1trXSkpLy8gcmV2L2hhc2ggdXBkYXRlXG5cdFx0XHRcdCkgKSB7XG5cdFx0XHRcdGNoYW5nZSAgICAgICAgPSB0cnVlO1xuXHRcdFx0XHQvL3RoaXMuX3JldnNba10gPSBwU3RhdGVba10gJiYgcFN0YXRlW2tdLl9yZXYgfHwgdHJ1ZTtcblx0XHRcdFx0Y2hhbmdlc1trXSAgICA9IHBTdGF0ZVtrXTtcblx0XHRcdH1cblx0XHRcblx0XHR0aGlzLl9uZXh0U3RhdGUgPSB7IC4uLnRoaXMuc3RhdGUsIC4uLmNoYW5nZXMgfTtcblx0XHRpZiAoICF0aGlzLnNob3VsZEFwcGx5KHRoaXMuX25leHRTdGF0ZSkgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdFxuXHRcdGlmICggc3luYyApIHtcblx0XHRcdHRoaXMucHVzaFN0YXRlKCk7XG5cdFx0XHRjYiAmJiBjYigpO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdGlmICggY2hhbmdlICkge1xuXHRcdFx0XHR0aGlzLnN0YWJpbGl6ZShjYik7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIGNiICYmIGNiKCk7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cdFxuXHQvKipcblx0ICogVXBkYXRlIHRoZSBjdXJyZW50IHN0YXRlICYgcHVzaCBpdFxuXHQgKiBAcGFyYW0gcFN0YXRlXG5cdCAqIEBwYXJhbSBjYlxuXHQgKi9cblx0c2V0U3RhdGVTeW5jKCBwU3RhdGUgKSB7XG5cdFx0bGV0IGkgICAgICAgPSAwLCBjaGFuZ2UsXG5cdFx0ICAgIGNoYW5nZXMgPSB0aGlzLl9jaGFuZ2VzU1cgPSB0aGlzLl9jaGFuZ2VzU1cgfHwge307XG5cdFx0Zm9yICggbGV0IGsgaW4gcFN0YXRlIClcblx0XHRcdGlmICggIXRoaXMuc3RhdGUgfHwgcFN0YXRlLmhhc093blByb3BlcnR5KGspXG5cdFx0XHRcdCYmIChcblx0XHRcdFx0XHRwU3RhdGVba10gIT09IHRoaXMuc3RhdGVba11cblx0XHRcdFx0XHQvL3x8XG5cdFx0XHRcdFx0Ly8odGhpcy5zdGF0ZVtrXSAmJiBwU3RhdGVba10gJiYgKHBTdGF0ZVtrXS5fcmV2ICE9IHRoaXMuX3JldnNba10pKS8vIHJldi9oYXNoIHVwZGF0ZVxuXHRcdFx0XHQpICkge1xuXHRcdFx0XHRjaGFuZ2UgICAgICAgID0gdHJ1ZTtcblx0XHRcdFx0dGhpcy5fcmV2c1trXSA9IHBTdGF0ZVtrXSAmJiBwU3RhdGVba10uX3JldiB8fCB0cnVlO1xuXHRcdFx0XHRjaGFuZ2VzW2tdICAgID0gcFN0YXRlW2tdO1xuXHRcdFx0fVxuXHRcdHRoaXMuc2hvdWxkQXBwbHkoeyAuLi4odGhpcy5zdGF0ZSB8fCB7fSksIC4uLmNoYW5nZXMgfSkgJiYgdGhpcy5wdXNoU3RhdGUoKTtcblx0XHRyZXR1cm4gdGhpcy5kYXRhO1xuXHR9XG5cdFxuXHQvKipcblx0ICogZ2V0IGEgc3RvcmUta2V5IHBhaXIgZm9yIFN0b3JlOjptYXBcblx0ICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcblx0ICogQHJldHVybnMge3tzdG9yZTogU3RvcmUsIG5hbWU6ICp9fVxuXHQgKi9cblx0YXMoIG5hbWUgKSB7XG5cdFx0cmV0dXJuIHsgc3RvcmU6IHRoaXMsIG5hbWUgfTtcblx0fVxuXHRcblx0b24oIGxpc3RzICkge1xuXHRcdGlmICggIWlzLnN0cmluZyhsaXN0cykgJiYgbGlzdHMgKVxuXHRcdFx0T2JqZWN0LmtleXMobGlzdHMpLmZvckVhY2goayA9PiBzdXBlci5vbihrLCBsaXN0c1trXSkpO1xuXHRcdGVsc2Ugc3VwZXIub24oLi4uYXJndW1lbnRzKTtcblx0fVxuXHRcblx0cmVtb3ZlTGlzdGVuZXIoIGxpc3RzICkge1xuXHRcdGlmICggIWlzLnN0cmluZyhsaXN0cykgJiYgbGlzdHMgKVxuXHRcdFx0T2JqZWN0LmtleXMobGlzdHMpLmZvckVhY2goayA9PiBzdXBlci5yZW1vdmVMaXN0ZW5lcihrLCBsaXN0c1trXSkpO1xuXHRcdGVsc2Ugc3VwZXIucmVtb3ZlTGlzdGVuZXIoLi4uYXJndW1lbnRzKTtcblx0fVxuXHRcblx0LyoqXG5cdCAqIGlzIGNvbXBsZXRlIChhbGwgcmVxdWllcmVkIGtleXMgYXJlIGhlcmUpXG5cdCAqIEByZXR1cm5zIGJvb2xcblx0ICovXG5cdGlzQ29tcGxldGUoIHN0YXRlID0gdGhpcy5zdGF0ZSApIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0IXRoaXMuX3JlcXVpcmVcblx0XHRcdHx8ICF0aGlzLl9yZXF1aXJlLmxlbmd0aFxuXHRcdFx0fHwgc3RhdGUgJiYgdGhpcy5fcmVxdWlyZS5yZWR1Y2UoXG5cdFx0XHRcdCggciwga2V5ICkgPT4gKHIgJiYgc3RhdGVba2V5XSksXG5cdFx0XHRcdHRydWVcblx0XHRcdClcblx0XHQpO1xuXHR9XG5cdFxuXHQvKipcblx0ICogaXMgc3RhYmxlXG5cdCAqIEByZXR1cm5zIGJvb2xcblx0ICovXG5cdGlzU3RhYmxlKCkge1xuXHRcdHJldHVybiB0aGlzLl9zdGFibGU7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBTZXJpYWxpemUgc3RhdGUgJiBkYXRhIHdpdGggc291cmNlcyByZWZzXG5cdCAqIEByZXR1cm5zIGJvb2xcblx0ICovXG5cdHNlcmlhbGl6ZSggY2ZnID0ge30sIG91dHB1dCA9IHt9ICkge1xuXHRcdFxuXHRcdGxldCBzSWQgICAgICAgID0gY2ZnLnBhcmVudEFsaWFzIHx8IHRoaXMuc2NvcGVPYmouX2lkLFxuXHRcdCAgICByZWZzQ291bnQgID0gMCxcblx0XHQgICAgcmVmcyAgICAgICA9XG5cdFx0XHQgICAgIWNmZy5ub3JlZnMgJiYgaXMuYXJyYXkodGhpcy5fdXNlKSAmJiB0aGlzLl91c2UucmVkdWNlKFxuXHRcdFx0ICAgICggbWFwLCBrZXkgKSA9PiB7XG5cdFx0XHRcdCAgICBsZXQgcmVmICAgPSB0aGlzLiRzY29wZS5wYXJzZVJlZihrZXkpLFxuXHRcdFx0XHQgICAgICAgIHN0b3JlID0gdGhpcy4kc3RvcmVzW3JlZi5zdG9yZUlkXTtcblx0XHRcdFx0ICAgIGlmICggc3RvcmUgJiYgU3RvcmUuaXNTdG9yZShzdG9yZSkgJiYgIXN0b3JlLnNjb3BlT2JqLl8uaXNMb2NhbElkIClcblx0XHRcdFx0XHQgICAgcmVmc0NvdW50KyssIG1hcFtyZWYuYWxpYXNdID0gcmVmLnBhdGg7XG5cdFx0XHRcdFxuXHRcdFx0XHQgICAgcmV0dXJuIG1hcDtcblx0XHRcdCAgICB9LCB7fVxuXHRcdFx0ICAgICksXG5cdFx0ICAgIHN0YXRlICAgICAgPSB0aGlzLnN0YXRlIHx8IHt9LFxuXHRcdCAgICBwZXJzaXN0ZW50ID0gdGhpcy5zaG91bGRTZXJpYWxpemUoKTtcblx0XHRcblx0XHRpZiAoICFwZXJzaXN0ZW50ICkge1xuXHRcdFx0a2V5V2Fsa25TZXQoXG5cdFx0XHRcdG91dHB1dCxcblx0XHRcdFx0KHNJZCArICcvJyArIHRoaXMubmFtZSksXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRkYXRhUmVmczogY2ZnLmRhdGFSZWZzLFxuXHRcdFx0XHRcdHJlZnNcblx0XHRcdFx0fVxuXHRcdFx0KTtcblx0XHRcdHJldHVybiBvdXRwdXQ7XG5cdFx0fVxuXHRcdFxuXHRcdGxldFxuXHRcdFx0c3RhdGVLZXlzICAgPSBPYmplY3Qua2V5cyhzdGF0ZSkgfHwgW10sXG5cdFx0XHRzdGF0ZVJlZnMgICA9IHN0YXRlS2V5cy5tYXAoayA9PiBzdGF0ZVtrXSksXG5cdFx0XHRpblJlZnNDb3VudCA9IDAsXG5cdFx0XHRkYXRhUmVmcyAgICA9IGNmZy5kYXRhUmVmcyB8fCB7fSxcblx0XHRcdGluUmVmcyAgICAgID1cblx0XHRcdFx0IWNmZy5ub3JlZnMgJiYgdGhpcy5kYXRhICYmIChPYmplY3Qua2V5cyh0aGlzLmRhdGEpLnJlZHVjZShcblx0XHRcdFx0KCBtYXAsIGtleSApID0+IHtcblx0XHRcdFx0XHRsZXQgcmVmID0gc3RhdGVSZWZzLmluZGV4T2YodGhpcy5kYXRhW2tleV0pXG5cdFx0XHRcdFx0aWYgKCByZWYgIT0gLTEgKVxuXHRcdFx0XHRcdFx0aW5SZWZzQ291bnQrKywgbWFwW2tleV0gPSBzdGF0ZUtleXNbcmVmXTtcblx0XHRcdFx0XHRyZXR1cm4gbWFwO1xuXHRcdFx0XHR9LCB7fVxuXHRcdFx0XHQpKSxcblx0XHRcdHNuYXAgICAgICAgID0ge1xuXHRcdFx0XHRkYXRhUmVmczogY2ZnLmRhdGFSZWZzLFxuXHRcdFx0XHRzdGF0ZSAgIDogc3RhdGUgJiZcblx0XHRcdFx0XHQoXG5cdFx0XHRcdFx0XHRjZmcubm9yZWZzXG5cdFx0XHRcdFx0XHQ/IHsgLi4uc3RhdGUgfVxuXHRcdFx0XHRcdFx0OiBPYmplY3Qua2V5cyhzdGF0ZSkucmVkdWNlKCggaCwgayApID0+ICghcmVmc1trXSAmJiAoaFtrXSA9IHN0YXRlW2tdKSwgaCksIHt9KVxuXHRcdFx0XHRcdCksXG5cdFx0XHRcdGRhdGEgICAgOiAoXG5cdFx0XHRcdFx0XHR0aGlzLmRhdGEgJiZcblx0XHRcdFx0XHRcdHRoaXMuZGF0YS5fX3Byb3RvX18gPT09IG9ialByb3RvID9cblx0XHRcdFx0XHRcdE9iamVjdFxuXHRcdFx0XHRcdFx0XHQua2V5cyh0aGlzLmRhdGEpXG5cdFx0XHRcdFx0XHRcdC5yZWR1Y2UoXG5cdFx0XHRcdFx0XHRcdFx0KCBoLCBrICkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKCAhaW5SZWZzW2tdICYmICFkYXRhUmVmc1trXSApIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0aFtrXSA9IHRoaXMuZGF0YVtrXTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0aW5SZWZzQ291bnQrKztcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBoXG5cdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHR7fVxuXHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XG5cdFx0XHRcdFx0XHQoaXMuYm9vbCh0aGlzLmRhdGEpXG5cdFx0XHRcdFx0XHRcdHx8IGlzLm51bWJlcih0aGlzLmRhdGEpXG5cdFx0XHRcdFx0XHRcdHx8IGlzLnN0cmluZyh0aGlzLmRhdGEpKSAmJiB0aGlzLmRhdGFcblx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0fHwgdW5kZWZpbmVkXG5cdFx0XHRcdFxuXHRcdFx0fTtcblx0XHRcblx0XHRyZWZzICYmIHJlZnNDb3VudCAmJiAoc25hcC5yZWZzID0gcmVmcyk7XG5cdFx0aW5SZWZzICYmIGluUmVmc0NvdW50ICYmIChcblx0XHRcdHNuYXAuaW5SZWZzID0gaW5SZWZzKTtcblx0XHRcblx0XHRcblx0XHRrZXlXYWxrblNldChcblx0XHRcdG91dHB1dCxcblx0XHRcdChzSWQgKyAnLycgKyB0aGlzLm5hbWUpLFxuXHRcdFx0c25hcFxuXHRcdCk7XG5cdFx0cmV0dXJuIG91dHB1dDtcblx0fVxuXHRcblx0LyoqXG5cdCAqIHJlc3RvcmUgc3RhdGUgJiBkYXRhXG5cdCAqIEByZXR1cm5zIGJvb2xcblx0ICovXG5cdHJlc3RvcmUoIHNuYXBzaG90LCBpbW1lZGlhdGUgKSB7XG5cdFx0c25hcHNob3QgPSBzbmFwc2hvdFxuXHRcdFx0JiYga2V5V2Fsa25HZXQoc25hcHNob3QsIHRoaXMuc2NvcGVPYmouX2lkICsgJy8nICsgdGhpcy5uYW1lKVxuXHRcdFx0fHwgdGhpcy4kc2NvcGUudGFrZVNuYXBzaG90QnlLZXkodGhpcy5zY29wZU9iai5faWQgKyAnLycgKyB0aGlzLm5hbWUpO1xuXHRcdFxuXHRcdGlmICggIXNuYXBzaG90IClcblx0XHRcdHJldHVybjtcblx0XHRcblx0XHRpZiAoIHNuYXBzaG90ICkge1xuXHRcdFx0XG5cdFx0XHRpZiAoICF0aGlzLmlzU3RhYmxlKCkgJiYgIWltbWVkaWF0ZSApXG5cdFx0XHRcdHRoaXMudGhlbigoKSA9PiByZXN0b3JlKHNuYXBzaG90KSk7XG5cdFx0XHRcblx0XHRcdHRoaXMuc3RhdGUgPSB7IC4uLnNuYXBzaG90LnN0YXRlIH07XG5cdFx0XHRzbmFwc2hvdC5yZWZzICYmIE9iamVjdC5rZXlzKHNuYXBzaG90LnJlZnMpLmZvckVhY2goXG5cdFx0XHRcdCgga2V5ICkgPT4gey8vdG9kb1xuXHRcdFx0XHRcdHRoaXMuc3RhdGVba2V5XSA9IHRoaXMuJHNjb3BlLnJldHJpZXZlKHNuYXBzaG90LnJlZnNba2V5XSk7XG5cdFx0XHRcdH1cblx0XHRcdClcblx0XHRcdFxuXHRcdFx0XG5cdFx0XHRpZiAoIHNuYXBzaG90LmluUmVmcyA9PT0gdHJ1ZSApIHtcblx0XHRcdFx0dGhpcy5kYXRhID0geyAuLi50aGlzLnN0YXRlIH07XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0dGhpcy5kYXRhID0gc25hcHNob3QuZGF0YTtcblx0XHRcdFx0c25hcHNob3QuaW5SZWZzICYmIE9iamVjdC5rZXlzKHNuYXBzaG90LmluUmVmcykuZm9yRWFjaChcblx0XHRcdFx0XHQoIGtleSApID0+IHsvL3RvZG9cblx0XHRcdFx0XHRcdHRoaXMuZGF0YVtrZXldID0gdGhpcy5zdGF0ZVtzbmFwc2hvdC5pblJlZnNba2V5XV07XG5cdFx0XHRcdFx0XHQvL2Vsc2Vcblx0XHRcdFx0XHRcdC8vICAgIGNvbnNvbGUud2Fybignbm90IGZvdW5kIDogJywga2V5LCBzbmFwICYmIHNuYXAucmVmc1sga2V5IF0pXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQpXG5cdFx0XHR9XG5cdFx0XHRpZiAoIHNuYXBzaG90LmRhdGFSZWZzICkge1xuXHRcdFx0XHR0aGlzLmRhdGEgPSB0aGlzLmRhdGEgfHwge307XG5cdFx0XHRcdE9iamVjdC5rZXlzKHNuYXBzaG90LmRhdGFSZWZzKS5mb3JFYWNoKFxuXHRcdFx0XHRcdCgga2V5ICkgPT4gey8vdG9kb1xuXHRcdFx0XHRcdFx0dGhpcy4kc2NvcGUucmVzdG9yZVJlZlBhdGgoc25hcHNob3QuZGF0YVJlZnNba2V5XSk7XG5cdFx0XHRcdFx0XHR0aGlzLmRhdGFba2V5XSA9IHRoaXMuJHNjb3BlLnJldHJpZXZlKHNuYXBzaG90LmRhdGFSZWZzW2tleV0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0KVxuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHRcblx0XHR9XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBCaW5kIHRoaXMgc3RvcmUgY2hhbmdlcyB0byB0aGUgZ2l2ZW4gY29tcG9uZW50LWtleVxuXHQgKiBAcGFyYW0gb2JqIHtSZWFjdC5Db21wb25lbnR8U3RvcmV8ZnVuY3Rpb24pXG5cdCAqIEBwYXJhbSBrZXkge3N0cmluZ30gb3B0aW9uYWwga2V5IHdoZXJlIHRvIG1hcCB0aGUgcHVibGljIHN0YXRlXG5cdCAqL1xuXHRiaW5kKCBvYmosIGtleSwgc2V0SW5pdGlhbCA9IHRydWUsIHBhdGggKSB7XG5cdFx0dGhpcy5fZm9sbG93ZXJzLnB1c2goW29iaiwga2V5LCBwYXRoXSk7XG5cdFx0aWYgKCBzZXRJbml0aWFsICYmIHRoaXMuZGF0YSAmJiB0aGlzLl9zdGFibGUgKSB7XG5cdFx0XHRsZXQgZGF0YSA9IHBhdGggPyB0aGlzLnJldHJpZXZlKHBhdGgpIDogdGhpcy5kYXRhO1xuXHRcdFx0aWYgKCB0eXBlb2Ygb2JqICE9IFwiZnVuY3Rpb25cIiApIHtcblx0XHRcdFx0aWYgKCBrZXkgKSBvYmouc2V0U3RhdGUoeyBba2V5XTogZGF0YSB9KTtcblx0XHRcdFx0ZWxzZSBvYmouc2V0U3RhdGUoZGF0YSk7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0b2JqKGRhdGEpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRcblx0LyoqXG5cdCAqIFVuIGJpbmQgdGhpcyBzdG9yZSBvZmYgdGhlIGdpdmVuIGNvbXBvbmVudC1rZXlcblx0ICogQHBhcmFtIG9ialxuXHQgKiBAcGFyYW0ga2V5XG5cdCAqIEByZXR1cm5zIHtBcnJheS48Kj59XG5cdCAqL1xuXHR1bkJpbmQoIG9iaiwga2V5LCBwYXRoICkge1xuXHRcdGxldCBmb2xsb3dlcnMgPSB0aGlzLl9mb2xsb3dlcnMsXG5cdFx0ICAgIGkgICAgICAgICA9IGZvbGxvd2VycyAmJiBmb2xsb3dlcnMubGVuZ3RoO1xuXHRcdHdoaWxlICggZm9sbG93ZXJzICYmIGktLSApXG5cdFx0XHRpZiAoIGZvbGxvd2Vyc1tpXVswXSA9PT0gb2JqICYmIGZvbGxvd2Vyc1tpXVsxXSA9PT0ga2V5ICYmIGZvbGxvd2Vyc1tpXVsyXSA9PT0gcGF0aCApXG5cdFx0XHRcdHJldHVybiBmb2xsb3dlcnMuc3BsaWNlKGksIDEpO1xuXHR9XG5cdFxuXHRcblx0LyoqXG5cdCAqIG9uY2UoJ3N0YWJsZScsIGNiKVxuXHQgKiBAcGFyYW0gb2JqIHtSZWFjdC5Db21wb25lbnR8U3RvcmV8ZnVuY3Rpb24pXG5cdCAqIEBwYXJhbSBrZXkge3N0cmluZ30gb3B0aW9uYWwga2V5IHdoZXJlIHRvIG1hcCB0aGUgcHVibGljIHN0YXRlXG5cdCAqL1xuXHR0aGVuKCBjYiApIHtcblx0XHRpZiAoIHRoaXMuX3N0YWJsZSApXG5cdFx0XHRyZXR1cm4gY2IodGhpcy5kYXRhKTtcblx0XHR0aGlzLm9uY2UoJ3N0YWJsZScsIGUgPT4gY2IodGhpcy5kYXRhKSk7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBBZGQgYSBsb2NrIHNvIHRoZSBzdG9yZSB3aWxsIG5vdCBwcm9wYWcgaXQgZGF0YSB1bnRpbGwgcmVsZWFzZSgpIGlzIGNhbGxcblx0ICogQHBhcmFtIHByZXZpb3VzIHtTdG9yZXxudW1iZXJ8QXJyYXl9IEBvcHRpb25hbCB3ZiB0byB3YWl0LCByZWxlYXNlcyB0byB3YWl0IG9yXG5cdCAqICAgICBhcnJheSBvZiBzdHVmZiB0byB3YWl0XG5cdCAqIEByZXR1cm5zIHt0aGlzfVxuXHQgKi9cblx0d2FpdCggcHJldmlvdXMgKSB7XG5cdFx0aWYgKCB0eXBlb2YgcHJldmlvdXMgPT0gXCJudW1iZXJcIiApXG5cdFx0XHRyZXR1cm4gdGhpcy5fX2xvY2tzLmFsbCArPSBwcmV2aW91cztcblx0XHRpZiAoIGlzLmFycmF5KHByZXZpb3VzKSApXG5cdFx0XHRyZXR1cm4gcHJldmlvdXMubWFwKHRoaXMud2FpdC5iaW5kKHRoaXMpKTtcblx0XHRcblx0XHR0aGlzLl9zdGFibGUgJiYgdGhpcy5lbWl0KCd1bnN0YWJsZScsIHRoaXMuc3RhdGUsIHRoaXMuZGF0YSk7XG5cdFx0dGhpcy5fc3RhYmxlID0gZmFsc2U7XG5cdFx0dGhpcy5fX2xvY2tzLmFsbCsrO1xuXHRcdFxuXHRcdGxldCByZWFzb24gPSBpcy5zdHJpbmcocHJldmlvdXMpID8gcHJldmlvdXMgOiBudWxsO1xuXHRcdGlmICggcmVhc29uICkge1xuXHRcdFx0dGhpcy5fX2xvY2tzW3JlYXNvbl0gPSB0aGlzLl9fbG9ja3NbcmVhc29uXSB8fCAwO1xuXHRcdFx0dGhpcy5fX2xvY2tzW3JlYXNvbl0rKztcblx0XHR9XG5cdFx0aWYgKCBwcmV2aW91cyAmJiBpcy5mbihwcmV2aW91cy50aGVuKSApIHtcblx0XHRcdHByZXZpb3VzLnRoZW4odGhpcy5yZWxlYXNlLmJpbmQodGhpcywgbnVsbCkpO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXHRcblx0LyoqXG5cdCAqIERlY3JlYXNlIGxvY2tzIGZvciB0aGlzIHN0b3JlLCBpZiBpdCByZWFjaCAwICxcblx0ICogaXQgd2lsbCBiZSBwcm9wYWdhdGVkIHRvIHRoZSBmb2xsb3dlcnMsXG5cdCAqIHRoZW4sIGFsbCBzdHVmZiBwYXNzZWQgdG8gXCJ0aGVuXCIgY2FsbCBiYWNrIHdpbGwgYmUgZXhlYyAvIHJlbGVhc2VkXG5cdCAqIEBwYXJhbSBkZXN5bmNcblx0ICogQHJldHVybnMgeyp9XG5cdCAqL1xuXHRyZWxlYXNlKCByZWFzb24sIGNiICkge1xuXHRcdGxldCBfc3RhdGljID0gdGhpcy5jb25zdHJ1Y3RvciwgbWUgPSB0aGlzO1xuXHRcdGxldCBpICAgICAgID0gMCwgd2FzU3RhYmxlID0gdGhpcy5fc3RhYmxlO1xuXHRcdFxuXHRcdGlmICggaXMuZm4ocmVhc29uKSApIHtcblx0XHRcdGNiICAgICA9IHJlYXNvbjtcblx0XHRcdHJlYXNvbiA9IG51bGw7XG5cdFx0fVxuXHRcdFxuXHRcdGlmICggcmVhc29uICkge1xuXHRcdFx0aWYgKCB0aGlzLl9fbG9ja3NbcmVhc29uXSA9PSAwIClcblx0XHRcdFx0Y29uc29sZS5lcnJvcihcIlJlbGVhc2UgbW9yZSB0aGFuIGxvY2tpbmcgIVwiLCByZWFzb24pO1xuXHRcdFx0dGhpcy5fX2xvY2tzW3JlYXNvbl0gPSB0aGlzLl9fbG9ja3NbcmVhc29uXSB8fCAwO1xuXHRcdFx0dGhpcy5fX2xvY2tzW3JlYXNvbl0tLTtcblx0XHR9XG5cdFx0XG5cdFx0aWYgKCAhcmVhc29uICYmIHRoaXMuX19sb2Nrcy5hbGwgPT0gMCApXG5cdFx0XHRjb25zb2xlLmVycm9yKFwiUmVsZWFzZSBtb3JlIHRoYW4gbG9ja2luZyAhXCIpO1xuXHRcdFxuXHRcdGlmICggIS0tdGhpcy5fX2xvY2tzLmFsbCAmJiB0aGlzLmlzQ29tcGxldGUoKSApIHtcblx0XHRcdGxldCBwcm9wYWcgICA9IHRoaXMuc2hvdWxkUHJvcGFnKHRoaXMuZGF0YSk7XG5cdFx0XHR0aGlzLl9zdGFibGUgPSB0cnVlO1xuXHRcdFx0cHJvcGFnICYmIHRoaXMuX3JldisrOy8vXG5cdFx0XHRpZiAoIHByb3BhZyAmJiB0aGlzLl9mb2xsb3dlcnMubGVuZ3RoIClcblx0XHRcdFx0dGhpcy5fZm9sbG93ZXJzLmZvckVhY2goZnVuY3Rpb24gcHJvcGFnKCBmb2xsb3dlciApIHtcblx0XHRcdFx0XHRsZXQgZGF0YSA9IGZvbGxvd2VyWzJdID8gbWUucmV0cmlldmUoZm9sbG93ZXJbMl0pIDogbWUuZGF0YTtcblx0XHRcdFx0XHQvL2lmICggIWRhdGEgKSByZXR1cm47XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0aWYgKCB0eXBlb2YgZm9sbG93ZXJbMF0gPT0gXCJmdW5jdGlvblwiICkge1xuXHRcdFx0XHRcdFx0Zm9sbG93ZXJbMF0oZGF0YSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdFx0Ly9jYiAmJiBpKys7XG5cdFx0XHRcdFx0XHRmb2xsb3dlclswXS5zZXRTdGF0ZShcblx0XHRcdFx0XHRcdFx0KGZvbGxvd2VyWzFdKSA/IHsgW2ZvbGxvd2VyWzFdXTogZGF0YSB9XG5cdFx0XHRcdFx0XHRcdCAgICAgICAgICAgICAgOiBkYXRhXG5cdFx0XHRcdFx0XHRcdC8vLFxuXHRcdFx0XHRcdFx0XHQvL2NiICYmIChcblx0XHRcdFx0XHRcdFx0Ly8gICAgKCkgPT4gKCEoLS1pKSAmJiBjYigpKVxuXHRcdFx0XHRcdFx0XHQvLylcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdC8vZWxzZVxuXHRcdFx0IXdhc1N0YWJsZSAmJiB0aGlzLmVtaXQoJ3N0YWJsZScsIHRoaXMuZGF0YSk7XG5cdFx0XHRwcm9wYWcgJiYgdGhpcy5lbWl0KCd1cGRhdGUnLCB0aGlzLmRhdGEpO1xuXHRcdFx0Y2IgJiYgY2IoKVxuXHRcdH1cblx0XHRlbHNlIGNiICYmIHRoaXMudGhlbihjYik7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblx0XG5cdHByb3BhZyggZGF0YSApIHtcblx0XHR0aGlzLmVtaXQoJ3VwZGF0ZScsIGRhdGEpO1xuXHR9XG5cdFxuXHRyZXRhaW4oIHJlYXNvbiApIHtcblx0XHR0aGlzLl9fcmV0YWlucy5hbGwrKztcblx0XHRpZiAoIHJlYXNvbiApIHtcblx0XHRcdHRoaXMuX19yZXRhaW5zW3JlYXNvbl0gPSB0aGlzLl9fcmV0YWluc1tyZWFzb25dIHx8IDA7XG5cdFx0XHR0aGlzLl9fcmV0YWluc1tyZWFzb25dKys7XG5cdFx0fVxuXHR9XG5cdFxuXHRkaXNwb3NlKCByZWFzb24gKSB7XG5cdFx0Ly9jb25zb2xlLndhcm4oXCJkaXNwb3NlXCIsIHJlYXNvbiwgdGhpcy5fX3JldGFpbnMpO1xuXHRcdGlmICggcmVhc29uICkge1xuXHRcdFx0aWYgKCAhdGhpcy5fX3JldGFpbnNbcmVhc29uXSApXG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIlJTIDogRGlzcG9zZSBtb3JlIHRoYW4gcmV0YWluaW5nIG9uIHN0b3JlICdcIiArIHRoaXMubmFtZSArIFwiJyA6IFwiICsgcmVhc29uKTtcblx0XHRcdFxuXHRcdFx0dGhpcy5fX3JldGFpbnNbcmVhc29uXS0tO1xuXHRcdH1cblx0XHRpZiAoIHRoaXMuX19yZXRhaW5zLmFsbCA9PSAwIClcblx0XHRcdHRocm93IG5ldyBFcnJvcihcIlJTIDogRGlzcG9zZSBtb3JlIHRoYW4gcmV0YWluaW5nIG9uIHN0b3JlIFwiICsgdGhpcy5uYW1lKTtcblx0XHRcblx0XHR0aGlzLl9fcmV0YWlucy5hbGwtLTtcblx0XHRcblx0XHRpZiAoICF0aGlzLl9fcmV0YWlucy5hbGwgKSB7XG5cdFx0XHRpZiAoIHRoaXMuX3BlcnNpc3RlbmNlVG0gKSB7XG5cdFx0XHRcdHRoaXMuX2Rlc3Ryb3lUTSAmJiBjbGVhclRpbWVvdXQodGhpcy5fZGVzdHJveVRNKTtcblx0XHRcdFx0dGhpcy5fZGVzdHJveVRNID0gc2V0VGltZW91dChcblx0XHRcdFx0XHRlID0+IHtcblx0XHRcdFx0XHRcdHRoaXMuX2Rlc3Ryb3lUTSA9IG51bGw7XG5cdFx0XHRcdFx0XHQvL3RoaXMudGhlbihzID0+IHtcblx0XHRcdFx0XHRcdCF0aGlzLl9fcmV0YWlucy5hbGwgJiYgIXRoaXMuZGVhZCAmJiB0aGlzLmRlc3Ryb3koKVxuXHRcdFx0XHRcdFx0Ly99KTtcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHRoaXMuX3BlcnNpc3RlbmNlVG1cblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHQvL3RoaXMudGhlbihzID0+XG5cdFx0XHRcdCghdGhpcy5fX3JldGFpbnMuYWxsICYmICF0aGlzLmRlYWQgJiYgdGhpcy5kZXN0cm95KCkpXG5cdFx0XHRcdC8vKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0XG5cdGRlc3Ryb3koKSB7XG5cdFx0Ly8gIGNvbnNvbGUubG9nKFwiZGVzdHJveVwiLCB0aGlzLl91aWQpO1xuXHRcdFxuXHRcdHRoaXMuZW1pdCgnZGVzdHJveScsIHRoaXMpO1xuXHRcdGlmICggdGhpcy5fc3RhYmlsaXplciApXG5cdFx0XHRjbGVhclRpbWVvdXQodGhpcy5fc3RhYmlsaXplcik7XG5cdFx0XG5cdFx0aWYgKCB0aGlzLl9mb2xsb3dlcnMubGVuZ3RoIClcblx0XHRcdHRoaXMuX2ZvbGxvd2Vycy5mb3JFYWNoKFxuXHRcdFx0XHQoIGZvbGxvd2VyICkgPT4ge1xuXHRcdFx0XHRcdGlmICggdHlwZW9mIGZvbGxvd2VyWzBdICE9PSBcImZ1bmN0aW9uXCIgKSB7XG5cdFx0XHRcdFx0XHRpZiAoIGZvbGxvd2VyWzBdLnN0b3JlcyApXG5cdFx0XHRcdFx0XHRcdGRlbGV0ZSBmb2xsb3dlclswXS5zdG9yZXNbZm9sbG93ZXJbMV1dO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0KTtcblx0XHR0aGlzLl9mb2xsb3dlcnMubGVuZ3RoID0gMDtcblx0XHR0aGlzLmNvbnN0cnVjdG9yLl9yZXYgID0gdGhpcy5yZXY7XG5cdFx0dGhpcy5kZWFkICAgICAgICAgICAgICA9IHRydWU7XG5cdFx0dGhpcy5fcmV2cyAgICAgICAgICAgICA9IHRoaXMuZGF0YSA9IHRoaXMuc3RhdGUgPSB0aGlzLnNjb3BlID0gbnVsbDtcblx0XHR0aGlzLnJlbW92ZUFsbExpc3RlbmVycygpO1xuXHR9XG59XG5cbi8qKlxuICogZ2V0IGEgc3RhdGljIGFsaWFzZWQgcmVmZXJlbmNlIG9mIGEgc3RvcmVcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKiBAcmV0dXJucyB7e3N0b3JlOiBTdG9yZSwgbmFtZTogKn19XG4gKi9cblN0b3JlLmFzID0gZnVuY3Rpb24gKCBuYW1lICkge1xuXHRyZXR1cm4geyBzdG9yZTogdGhpcywgbmFtZSB9O1xufVxuXG4vKipcbiAqIEB0b2RvXG4gKiBNYXAgYWxsIG5hbWVkIHN0b3JlcyBpbiB7a2V5c30gdG8gdGhlIHtvYmplY3R9J3Mgc3RhdGVcbiAqIEhvb2sgY29tcG9uZW50V2lsbFVubW91bnQgKGZvciByZWFjdCBjb21wKSBvciBkZXN0cm95IHRvIHVuQmluZCB0aGVtIGF1dG9tYXRpY2FsbHlcbiAqIEBzdGF0aWNcbiAqIEBwYXJhbSBvYmplY3Qge09iamVjdH0gdGFyZ2V0IHN0YXRlIGF3YXJlIG9iamVjdCAoUmVhY3QuQ29tcG9uZW50fFN0b3JlfC4uLilcbiAqIEBwYXJhbSBrZXlzIHtBcnJheX0gRXggOiBbXCJzZXNzaW9uXCIsIFwib3RoZXJTdGF0aWNOYW1lZFN0b3JlOmtleVwiLFxuICogICAgIHN0b3JlLmFzKCdhbm90aGVyS2V5JyldXG4gKi9cblN0b3JlLm1hcCA9IGZ1bmN0aW9uICggY1N0b3JlLCBrZXlzLCBzY29wZSwgb3JpZ2luLCBzZXRJbml0aWFsID0gZmFsc2UgKSB7XG5cdGxldCB0YXJnZXRSZXZzICAgICA9IGNTdG9yZS5fcmV2cyB8fCB7fTtcblx0bGV0IHRhcmdldFNjb3BlICAgID0gY1N0b3JlLnN0b3JlcyB8fCAoY1N0b3JlLnN0b3JlcyA9IHt9KTtcblx0bGV0IGluaXRpYWxPdXRwdXRzID0ge307XG5cdGtleXMgICAgICAgICAgICAgICA9IGlzLmFycmF5KGtleXMpID8gWy4uLmtleXNdIDogW2tleXNdO1xuXHRcblx0XG5cdHNjb3BlID0gc2NvcGUgfHwgU3RvcmUuc3RhdGljU2NvcGU7XG5cdFxuXHRrZXlzID0ga2V5cy5maWx0ZXIoXG5cdFx0Ly8gQHRvZG8gOiB1c2UgcXVlcnkgcmVmc1xuXHRcdC8vIChzdG9yZSkoXFwuc3RvcmUpKihcXFsoXFwqfChwcm9wcylcXHcrKSspXFxdKT8oXFw6YWxpYXMpXG5cdFx0KCBrZXkgKSA9PiB7XG5cdFx0XHRpZiAoICFrZXkgKSB7XG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoXCJOb3QgYSBtYXBwYWJsZSBzdG9yZSBpdGVtICdcIiArIGtleSArIFwiJyBpbiBcIiArIG9yaWdpbiArICcgISEnKTtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0bGV0IG5hbWUsXG5cdFx0XHQgICAgYWxpYXMsXG5cdFx0XHQgICAgcGF0aCxcblx0XHRcdCAgICBzdG9yZSwgX2tleTtcblx0XHRcdGlmICgga2V5LnN0b3JlICYmIGtleS5uYW1lICkge1xuXHRcdFx0XHRhbGlhcyA9IG5hbWUgPSBrZXkubmFtZTtcblx0XHRcdFx0c3RvcmUgPSBrZXkuc3RvcmU7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIGlmICggaXMuZm4oa2V5KSApIHtcblx0XHRcdFx0bmFtZSAgPSBhbGlhcyA9IGtleS5uYW1lIHx8IGtleS5kZWZhdWx0TmFtZTtcblx0XHRcdFx0c3RvcmUgPSBrZXk7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0X2tleSAgPSBrZXkubWF0Y2goLyhbXlxcLlxcOl0rKSgoPzpcXC5bXlxcLlxcOl0rKSopKD86XFw6KFteXFwuXFw6XSspKT8vKTtcblx0XHRcdFx0bmFtZSAgPSBfa2V5WzFdO1xuXHRcdFx0XHRwYXRoICA9IF9rZXlbMl0gJiYgX2tleVsyXS5zdWJzdHIoMSk7XG5cdFx0XHRcdHN0b3JlID0gc2NvcGUuc3RvcmVzW19rZXlbMV1dO1xuXHRcdFx0XHRhbGlhcyA9IF9rZXlbM10gfHwgcGF0aCAmJiBwYXRoLm1hdGNoKC8oW15cXC5dKikkLylbMF0gfHwgX2tleVsxXTtcblx0XHRcdH1cblx0XHRcdGlmICggIXN0b3JlICkge1xuXHRcdFx0XHRsZXQgaSA9IFtdO1xuXHRcdFx0XHRmb3IgKCBsZXQgbyBpbiBzY29wZS5zdG9yZXMgKVxuXHRcdFx0XHRcdGkucHVzaChvKVxuXHRcdFx0XHRjb25zb2xlLmVycm9yKFwiTm90IGEgbWFwcGFibGUgc3RvcmUgaXRlbSAnXCIgKyBuYW1lICsgXCIvXCIgKyBhbGlhcyArIFwiJyBpbiBcIiArIChjU3RvcmUubmFtZSB8fCBjU3RvcmUpICsgJyAhIScsIHN0b3JlLCBfa2V5LCBzY29wZS5zdG9yZXMsIGkpO1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRpZiAoIFNjb3BlLmlzU2NvcGVDbGFzcyhzdG9yZSkgKSBzY29wZS5fbW91bnQobmFtZSk7XG5cdFx0XHRpZiAoIFNjb3BlLmlzU2NvcGUoc3RvcmUpICkge1xuXHRcdFx0XHRzdG9yZSA9IHNjb3BlLl9tb3VudChrZXkpO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSBpZiAoIHRhcmdldFJldnNbbmFtZV0gKSByZXR1cm4gZmFsc2U7Ly8gaWdub3JlIGRibCB1c2VzIGZvciBub3dcblx0XHRcdFxuXHRcdFx0XG5cdFx0XHRpZiAoIGlzLmZuKHN0b3JlKSApIHtcblx0XHRcdFx0c2NvcGUuX21vdW50KG5hbWUpXG5cdFx0XHRcdHNjb3BlLnN0b3Jlc1tuYW1lXS5iaW5kKGNTdG9yZSwgYWxpYXMsIHNldEluaXRpYWwsIHBhdGgpO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdHN0b3JlLmJpbmQoY1N0b3JlLCBhbGlhcywgc2V0SW5pdGlhbCwgcGF0aCk7XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdC8vIGdpdmUgaW5pdGlhbCBzdG9yZSB3ZWlnaHQgYmFzaW5nIHNvdXJjZXNcblx0XHRcdHNjb3BlLnN0b3Jlc1tuYW1lXS5fc291cmNlcyAmJiBjU3RvcmUuX3NvdXJjZXMucHVzaCguLi5zY29wZS5zdG9yZXNbbmFtZV0uX3NvdXJjZXMpO1xuXHRcdFx0XG5cdFx0XHR0YXJnZXRSZXZzW2FsaWFzXSA9IHRhcmdldFJldnNbYWxpYXNdIHx8IHRydWU7XG5cdFx0XHQhdGFyZ2V0U2NvcGVbbmFtZV0gJiYgKHRhcmdldFNjb3BlW25hbWVdID0gc2NvcGUuc3RvcmVzW25hbWVdKTtcblx0XHRcdGlmICggc2NvcGUuc3RvcmVzW25hbWVdLmhhc093blByb3BlcnR5KCdkYXRhJykgKVxuXHRcdFx0XHRpbml0aWFsT3V0cHV0c1tuYW1lXSA9IHNjb3BlLmRhdGFbbmFtZV07XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdCk7XG5cdFxuXHQvLyAuLi4gQHRvZG9cblx0Y1N0b3JlLm9uY2UoJ2Rlc3Ryb3knLCAoIC4uLmFyZ3ogKSA9PiB7XG5cdFx0a2V5cy5tYXAoXG5cdFx0XHQoIGtleSApID0+IHtcblx0XHRcdFx0bGV0IG5hbWUsXG5cdFx0XHRcdCAgICBhbGlhcywgcGF0aCxcblx0XHRcdFx0ICAgIHN0b3JlO1xuXHRcdFx0XHRpZiAoIGtleS5zdG9yZSAmJiBrZXkubmFtZSApIHtcblx0XHRcdFx0XHRhbGlhcyA9IG5hbWUgPSBrZXkubmFtZTtcblx0XHRcdFx0XHRzdG9yZSA9IGtleS5zdG9yZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlIGlmICggaXMuZm4oa2V5KSApIHtcblx0XHRcdFx0XHRuYW1lICA9IGFsaWFzID0ga2V5Lm5hbWUgfHwga2V5LmRlZmF1bHROYW1lO1xuXHRcdFx0XHRcdHN0b3JlID0gc2NvcGUuc3RvcmVzW25hbWVdO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdGtleSAgID0ga2V5Lm1hdGNoKC8oW15cXC5cXDpdKykoKD86XFwuW15cXC5cXDpdKykqKSg/OlxcOihbXlxcLlxcOl0rKSk/Lyk7XG5cdFx0XHRcdFx0bmFtZSAgPSBrZXlbMV07XG5cdFx0XHRcdFx0cGF0aCAgPSBrZXlbMl0gJiYga2V5WzJdLnN1YnN0cigxKTtcblx0XHRcdFx0XHRzdG9yZSA9IHNjb3BlLnN0b3Jlc1trZXlbMV1dO1xuXHRcdFx0XHRcdGFsaWFzID0ga2V5WzNdIHx8IHBhdGggJiYgcGF0aC5tYXRjaCgvKFteXFwuXSopJC8pWzBdIHx8IGtleVsxXTtcblx0XHRcdFx0fVxuXHRcdFx0XHRcblx0XHRcdFx0c3RvcmUgJiYgIWlzLmZuKHN0b3JlKSAmJiBzdG9yZS51bkJpbmQoY1N0b3JlLCBhbGlhcywgcGF0aClcblx0XHRcdH1cblx0XHQpO1xuXHR9KVxuXHRcblx0cmV0dXJuIGluaXRpYWxPdXRwdXRzO1xufTtcblxuXG5TdG9yZS5pc1N0b3JlICAgICAgPSBTY29wZS5pc1N0b3JlID0gZnVuY3Rpb24gKCBvYmogKSB7XG5cdHJldHVybiBvYmogaW5zdGFuY2VvZiBTdG9yZVxufVxuU3RvcmUuaXNTdG9yZUNsYXNzID0gU2NvcGUuaXNTdG9yZUNsYXNzID0gZnVuY3Rpb24gKCBvYmogKSB7XG5cdHJldHVybiBTdG9yZS5pc1Byb3RvdHlwZU9mKG9iaikgfHwgb2JqID09PSBTdG9yZVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdG9yZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvU3RvcmUuanMiLCIvKlxuICogVGhlIE1JVCBMaWNlbnNlIChNSVQpXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTkuIFdpc2UgV2lsZCBXZWJcbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIOKAnFNvZnR3YXJl4oCdKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIOKAnEFTIElT4oCdLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiAqXG4gKiAgQGF1dGhvciA6IE5hdGhhbmFlbCBCcmF1blxuICogIEBjb250YWN0IDogbjh0ei5qc0BnbWFpbC5jb21cbiAqL1xuXG5pbXBvcnQgaXMgZnJvbSBcImlzXCI7XG5cbi8qKlxuICogTWluaW1hbCBwdXNoIHNlcXVlbmNlciwgYXBwbHkgc3RvcmVzIHNwZWNpZmljIHRhc2sgaW4gdGhlIHJpZ2h0IG9yZGVyXG4gKi9cbmxldCB0YXNrUXVldWUgICAgICA9IFtdLFxuICAgIGN1cldlaWdodCAgICAgID0gMCxcbiAgICBtYXhXZWlnaHQgICAgICA9IDAsXG4gICAgbWluV2VpZ2h0ICAgICAgPSAwLFxuICAgIHRhc2tDb3VudCAgICAgID0gMCxcbiAgICBkZVN5bmMgICAgICAgICA9IGZhbHNlLFxuICAgIGRlU3luY01heFRhc2tzID0gMTAsXG4gICAgdGFzayxcbiAgICBpc1J1bm5pbmcsXG4gICAgZXJyb3JDYXRjaGVyICAgPSB7XG4gICAgICAgIGxhc3RFcnJvcjogbnVsbCxcbiAgICAgICAgZGlzcGF0Y2ggOiBmdW5jdGlvbiAoIGVycm9yICkge1xuICAgICAgICAgICAgZXJyb3JDYXRjaGVyLmRpc2FibGUoKTtcbiAgICAgICAgICAgIGlmICggdGFzayAmJiB0YXNrWyAwIF0uaGFuZGxlRXJyb3IgKSB7XG4gICAgICAgICAgICAgICAgdGFza1sgMCBdLmhhbmRsZUVycm9yKGVycm9yLCB0YXNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKCB0YXNrIClcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiUmVTY29wZSA6IEFuIGFwcGx5IHRhc2sgaGFzIGZhaWxlZCAhIVwiLCB0YXNrWyAxIF0sIFwiIG9uIFwiLCB0YXNrWyAwIF0ubmFtZSB8fCB0YXNrWyAwIF0uY29uc3RydWN0b3IubmFtZSlcbiAgICAgICAgXG4gICAgICAgICAgICBpc1J1bm5pbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIHRhc2sgICAgICA9IG51bGw7XG4gICAgICAgICAgICBydW5Ob3coKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW5hYmxlICAgOiAoIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnIClcbiAgICAgICAgICAgICAgICAgICA/ICgpID0+IHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCBlcnJvckNhdGNoZXIuZGlzcGF0Y2gpXG4gICAgICAgICAgICB9IDogKCkgPT4ge1xuICAgICAgICAgICAgICAgIHByb2Nlc3Mub24oJ3VuY2F1Z2h0RXhjZXB0aW9uJywgZXJyb3JDYXRjaGVyLmRpc3BhdGNoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIGRpc2FibGUgIDogKCB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyApXG4gICAgICAgICAgICAgICAgICAgPyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgZXJyb3JDYXRjaGVyLmRpc3BhdGNoKVxuICAgICAgICAgICAgfSA6ICgpID0+IHtcbiAgICAgICAgICAgICAgICBwcm9jZXNzLnJlbW92ZUxpc3RlbmVyKCd1bmNhdWdodEV4Y2VwdGlvbicsIGVycm9yQ2F0Y2hlci5kaXNwYXRjaCk7XG4gICAgICAgICAgICB9XG4gICAgfVxuO1xuXG5mdW5jdGlvbiBydW5Ob3coKSB7XG4gICAgaWYgKCAhaXNSdW5uaW5nICkge1xuICAgICAgICBydW4oKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJ1bigpIHtcbiAgICBsZXQgZnJvbSAgPSBEYXRlLm5vdygpO1xuICAgIGlzUnVubmluZyA9IHRydWU7XG4gICAgZXJyb3JDYXRjaGVyLmVuYWJsZSgpO1xuICAgIHdoaWxlICggdGFza0NvdW50ICkge1xuICAgICAgICBcbiAgICAgICAgLy8gdHJ5IGZvciB0aGUgY3VycmVudCB3ZWlnaHRcbiAgICAgICAgd2hpbGUgKCAhKCB0YXNrUXVldWVbIGN1cldlaWdodCBdICYmIHRhc2tRdWV1ZVsgY3VyV2VpZ2h0IF0ubGVuZ3RoICkgKVxuICAgICAgICAgICAgY3VyV2VpZ2h0Kys7XG4gICAgICAgIFxuICAgICAgICB0YXNrQ291bnQtLTtcbiAgICAgICAgdGFzayA9IHRhc2tRdWV1ZVsgY3VyV2VpZ2h0IF0uc2hpZnQoKTtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcIlRhc2sgOiBcIiwgdGFza1sxXSwgXCIgb24gXCIsIHRhc2tbMF0ubmFtZSk7XG4gICAgICAgIHRhc2tbIDAgXVsgdGFza1sgMSBdIF0uYXBwbHkodGFza1sgMCBdLCB0YXNrWyAyIF0pO1xuICAgIH1cbiAgICB0YXNrID0gdW5kZWZpbmVkO1xuICAgIGVycm9yQ2F0Y2hlci5kaXNhYmxlKCk7XG4gICAgXG4gICAgaXNSdW5uaW5nID0gZmFsc2U7XG4gICAgaWYgKCB0YXNrQ291bnQgKSB7XG4gICAgICAgIHNldFRpbWVvdXQocnVuTm93KTtcbiAgICB9XG59XG5cbi8vXG4vL2luZGV4LnNldFRhc2tEZVN5bmMgPSAoIG5iICkgPT4ge1xuLy8gICAgaWYgKCBuYiA9PT0gZmFsc2UgKVxuLy8gICAgICAgIHJldHVybiBkZVN5bmMgPSBmYWxzZTtcbi8vICAgIGVsc2UgaWYgKCBuYiA9PT0gdHJ1ZSApIHtcbi8vICAgICAgICBkZVN5bmMgICAgICAgICA9IHRydWU7XG4vLyAgICAgICAgZGVTeW5jTWF4VGFza3MgPSAxMDtcbi8vICAgIH1cbi8vICAgIGVsc2UgKGlzLmludChuYikpXG4vLyAgICB7XG4vLyAgICAgICAgZGVTeW5jICAgICAgICAgPSB0cnVlO1xuLy8gICAgICAgIGRlU3luY01heFRhc2tzID0gbmI7XG4vLyAgICB9XG4vL307XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBwdXNoVGFzayggb2JqLCBmbiwgYXJneiApIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBtb3JlIGEgc3RvcmUgaGF2ZSBzb3VyY2VzLCB0aGUgbW9yZSBpdCBzaG91bGQgYmUgcHJvY2Vzc2VkIGZpcnN0XG4gICAgICAgICAqIFNvIGxlYWZzIHN0b3JlcyBzdGF5IHN5bmMsIGFuZCByb290IHN0b3JlcyByZWNlaXZlIG1lcmdlZCBzdGF0ZSB1cGRhdGVzO1xuICAgICAgICAgKiBnbG9iYWwgc3RhdGUgc3RheSBjb2hlcmVudFxuICAgICAgICAgKlxuICAgICAgICAgKiBUaGlzIG1lYW4gd2hhdGV2ZXIgdGhlIG51bWJlciBvZiBzdG9yZXMgJiB0aGUgY29tcGxleGl0eSBvZiB0aGUgZGVwcyxcbiAgICAgICAgICogdXBkYXRpbmcgYSBzdG9yZSBzdGF0ZSB3aWxsIHVwZGF0ZSBpdHMgc3luY2hyb25lIGNoaWxkIHN0b3JlcyBpbW1lZGlhdGVseVxuICAgICAgICAgKlxuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSB7KnxudW1iZXJ9XG4gICAgICAgICAqL1xuICAgICAgICBsZXQgd2VpZ2h0ID0gb2JqLl9zb3VyY2VzICYmIG9iai5fc291cmNlcy5sZW5ndGggfHwgMSxcbiAgICAgICAgICAgIHN0YWNrICA9IHRhc2tRdWV1ZVsgd2VpZ2h0IF0gPVxuICAgICAgICAgICAgICAgIHRhc2tRdWV1ZVsgd2VpZ2h0IF0gfHwgW107XG4gICAgICAgIFxuICAgICAgICBtYXhXZWlnaHQgPSBNYXRoLm1heChtYXhXZWlnaHQsIHdlaWdodCk7XG4gICAgICAgIGN1cldlaWdodCA9IE1hdGgubWluKGN1cldlaWdodCwgd2VpZ2h0KTtcbiAgICAgICAgdGFza0NvdW50Kys7XG4gICAgICAgIFxuICAgICAgICAvL2NvbnNvbGUubG9nKFwiUHVzaCBUYXNrIDogXCIsIGZuLCBcIiBvbiBcIiwgb2JqLm5hbWUsIHdlaWdodCk7XG4gICAgICAgIHN0YWNrLnB1c2goWyBvYmosIGZuLCBhcmd6IF0pO1xuICAgICAgICBzZXRUaW1lb3V0KHJ1bk5vdywgMCk7XG4gICAgICAgIHJldHVybiBzdGFjay5sZW5ndGg7XG4gICAgfVxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbHMvVGFza1NlcXVlbmNlci5qcyIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcHJvY2Vzcy9icm93c2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9