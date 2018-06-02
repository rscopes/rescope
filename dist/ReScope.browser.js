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
	
	var _Store = __webpack_require__(16);
	
	var _Store2 = _interopRequireDefault(_Store);
	
	var _scopable = __webpack_require__(19);
	
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
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
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
	
	var Scope = function (_EventEmitter) {
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
	
	        var _ = {},
	            keyIndex;
	
	        id = id || key && (parent && parent._id || '') + '>' + key;
	
	        _.isLocalId = !id;
	
	        //if ( parent && key ) {
	        //    keyIndex = parent._.childScopes.find(ctx=>(ctx._id==id));
	        //    if ( keyIndex == -1 ) keyIndex = parent._.seenChilds;
	        //    keyIndex++;
	        //    if ( keyIndex )
	        //        id = id + '[' + keyIndex + ']';
	        //}
	
	        id = id || "_____" + shortid.generate();
	
	        if (openScopes[id]) {
	            var _ret;
	
	            _this._id = id;
	            openScopes[id].register(storesMap);
	            return _ret = openScopes[id], _possibleConstructorReturn(_this, _ret);
	        } else if (openScopes[id] && incrementId) {
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
	                if (this._._mixed.reduce(function (mounted, ctx) {
	                    return mounted || ctx._mount(id, snapshot, state, data);
	                }, false) || !this.parent) return;
	                return (_parent = this.parent)._mount.apply(_parent, arguments);
	            } else {
	                var store = this._._scope[ref.storeId],
	                    taskQueue = [];
	                if (is.rsStore(store.prototype)) {
	                    this._._scope[ref.storeId] = new store(this, {
	                        //snapshot,
	                        name: ref.storeId,
	                        state: state,
	                        data: data
	                    }, taskQueue);
	                    while (taskQueue.length) {
	                        taskQueue.shift()();
	                    }
	                } else if (is.rsScope(store.prototype)) {
	                    store = this._._scope[ref.storeId] = new store({ $parent: this }, {
	                        id: this._id + '/' + ref.storeId
	                        //autoDestroy: true
	                        //parent: this
	                    });
	                    //this._._scope[ ref.storeId ].retain("scopedChildScope");
	                    //this._watchStore(ref.storeId);
	                    if (ref.path.length > 1) this._._scope[ref.storeId].mount(ref.path.slice(1).join('.'), snapshot, state, data);
	                    //else return this._._scope[ ref.storeId ];
	                }
	                //if ( snapshot && is.rsScope(store) && ( snap = keyWalknGet(snapshot,
	                // store._id) ) && snap[ '/' ] ) { return store.mount(Object.keys(snap[ '/'
	                // ])) } else if ( snapshot && is.rsStore(store) ) store.restore();
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
	
	            this.actions = {};
	            this.stores = {};
	            this.state = {};
	            this.data = {};
	            targetCtx.on(lists);
	            __proto__push(this, 'actions', parent);
	            __proto__push(this, 'stores', parent);
	            __proto__push(this, 'state', parent);
	            __proto__push(this, 'data', parent);
	
	            this.relink(this._._scope, this, false, true);
	            this._._mixed.forEach(function (ctx) {
	                __proto__push(_this4, 'actions');
	                __proto__push(_this4, 'stores');
	                __proto__push(_this4, 'state');
	                __proto__push(_this4, 'data');
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
	                if (!is.rsStore(_this6._._scope[id]) && !is.rsStore(_this6._._scope[id].prototype)) return;
	
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
	            }, {})]);
	
	            this.mount(key);
	            this.retainStores(Object.keys(lastRevs), 'listeners');
	
	            if (setInitial && this._stable) {
	                data = this.getUpdates(lastRevs);
	                if (!data) return;
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
	            return refList.reduce(function (data, ref) {
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
	            return path && this.stores[path[0]] && this.stores[path[0]].retrieve(path.slice(1));
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
	         * Get or update output basing storesRevMap's revisions.
	         * If a store in 'storesRevMap' was updated; add it to 'output' & update storesRevMap
	         * @param storesRevMap
	         * @param output
	         * @param updated
	         * @returns {*|{}}
	         */
	
	    }, {
	        key: 'getUpdates',
	        value: function getUpdates(storesRevMap, output, updated) {
	            var _this9 = this;
	
	            var ctx = this._._scope;
	
	            output = output || {};
	            Object.keys(ctx).forEach(function (id) {
	                if (id == "$parent") return;
	                if (!output.hasOwnProperty(id) && !is.fn(ctx[id]) && (!storesRevMap || storesRevMap.hasOwnProperty(id) && storesRevMap[id] === undefined || !(!storesRevMap.hasOwnProperty(id) || ctx[id]._rev <= storesRevMap[id].rev))) {
	
	                    updated = true;
	                    output[id] = _this9.data[id];
	
	                    if (storesRevMap && storesRevMap.hasOwnProperty(id)) {
	                        storesRevMap[id].rev = ctx[id]._rev;
	                        storesRevMap[id].refs.forEach(function (ref) {
	                            //console.warn("update ref ", ref.ref,
	                            // this.retrieve(ref.path));
	                            output[ref.alias] = _this9.retrieve(ref.path);
	                        });
	                    } else {
	                        //console.warn("update ", id, this.data[id]);
	                        output[id] = _this9.data[id];
	                    }
	                }
	            });
	            updated = this._._mixed.reduce(function (updated, ctx) {
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
	                alias = cfg.alias,
	                _cfg$withChilds = cfg.withChilds,
	                withChilds = _cfg$withChilds === undefined ? true : _cfg$withChilds,
	                withParents = cfg.withParents,
	                _cfg$withMixed = cfg.withMixed,
	                withMixed = _cfg$withMixed === undefined ? true : _cfg$withMixed,
	                norefs = cfg.norefs;
	
	
	            if (keyWalknGet(output, this._id)) return output;
	
	            //@todo : better serialize method
	            keyWalknSet(output, this._id, {});
	
	            Object.keys(ctx).forEach(function (id) {
	                if (id == "$parent" || is.fn(ctx[id])) return;
	
	                ctx[id].serialize(cfg, output);
	            });
	
	            withParents && this.parent && this.parent.serialize({
	                withChild: false,
	                withParents: true,
	                withMixed: withMixed,
	                norefs: norefs
	            }, output);
	
	            withChilds && this._.childScopes.forEach(function (ctx) {
	                !ctx._.isLocalId && ctx.serialize({
	                    withChild: true,
	                    withParents: false,
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
	                    return h[k.startsWith(alias) ? alias + k.substr(alias.length) : k] = output[k], h;
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
	            var _this10 = this;
	
	            var cfg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	            var force = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : is.bool(cfg) && cfg;
	
	            var ctx = this._._scope,
	                snap = void 0;
	            snapshot = snapshot && keyWalknGet(snapshot, this._id) || this.takeSnapshotByKey(this._id);
	
	            if (!snapshot) return;
	
	            this._.snapshot = snapshot;
	
	            snap = snapshot['/'];
	
	            snap && Object.keys(snap).forEach(function (name) {
	                if (name == "$parent") return;
	
	                if (ctx[name]) {
	
	                    if (force && !is.fn(ctx[name])) ctx[name].destroy();
	
	                    _this10._mount(name); // quiet
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
	                    //this.deleteSnapshotByKey(key, true);
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
	            var _this11 = this;
	
	            Object.keys(pState).forEach(function (k) {
	                return _this11.state[k] = pState[k];
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
	            var _this12 = this,
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
	                if (!is.fn(_this12._._scope[id])) (_$_scope$id = _this12._._scope[id]).trigger.apply(_$_scope$id, [action].concat(argz));
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
	            var _this13 = this;
	
	            if (this._stable) return cb(this.data);
	            this.once('stable', function (e) {
	                return cb(_this13.data);
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
	            var _this14 = this;
	
	            var stores = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	            var reason = arguments[1];
	
	            stores.forEach(function (id) {
	                return _this14.stores[id] && _this14.stores[id].retain && _this14.stores[id].retain(reason);
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
	            var _this15 = this;
	
	            var stores = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	            var reason = arguments[1];
	
	            stores.forEach(function (id) {
	                return _this15.stores[id] && _this15.stores[id].dispose && _this15.stores[id].dispose(reason);
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
	            var _this16 = this;
	
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
	                    _this16._.stabilizerTM = null;
	                    if (_this16.__locks.all) return;
	
	                    _this16._.propagTM && clearTimeout(_this16._.propagTM);
	                    _this16._rev++;
	                    _this16._stable = true;
	                    _this16.emit("stable", _this16);
	
	                    !_this16.dead && _this16._propag(); // stability can induce destroy
	                });
	            }
	        }
	
	        /**
	         * Propag stores updates basing theirs last updates
	         */
	
	    }, {
	        key: 'propag',
	        value: function propag() {
	            var _this17 = this;
	
	            this._.propagTM && clearTimeout(this._.propagTM);
	            this._.propagTM = setTimeout(function (e) {
	                _this17._.propagTM = null;
	                _this17._propag();
	            }, 2);
	        }
	    }, {
	        key: '_propag',
	        value: function _propag() {
	            var _this18 = this;
	
	            if (this._.followers.length) this._.followers.forEach(function (_ref3) {
	                var obj = _ref3[0],
	                    key = _ref3[1],
	                    as = _ref3[2],
	                    lastRevs = _ref3[3],
	                    remaps = _ref3[3];
	
	                var data = _this18.getUpdates(lastRevs);
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
	            var _this19 = this;
	
	            this._.childScopes.push(ctx);
	            this._.seenChilds++;
	            var lists = {
	                'stable': function stable(s) {
	                    _this19._.unStableChilds--;
	                    if (!_this19._.unStableChilds) _this19.emit("stableTree", _this19);
	                },
	                'unstable': function unstable(s) {
	                    _this19._.unStableChilds++;
	                    if (1 == _this19._.unStableChilds) _this19.emit("unstableTree", _this19);
	                },
	                'stableTree': function stableTree(s) {
	                    _this19._.unStableChilds--;
	                    if (!_this19._.unStableChilds) _this19.emit("stableTree", _this19);
	                },
	                'unstableTree': function unstableTree(s) {
	                    _this19._.unStableChilds++;
	                    if (1 == _this19._.unStableChilds) _this19.emit("unstableTree", _this19);
	                },
	                'destroy': function destroy(ctx) {
	                    if (ctx._.unStableChilds) _this19._.unStableChilds--;
	                    if (!ctx.isStable()) _this19._.unStableChilds--;
	
	                    if (!_this19._.unStableChilds) _this19.emit("stableTree", _this19);
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
	            var _this20 = this;
	
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
	                        !_this20.__retains.all && !_this20.dead && _this20.destroy();
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
	            var _this21 = this;
	
	            var ctx = this._._scope;
	            //console.warn("destroy", this._id);
	            this._.stabilizerTM && clearTimeout(this._.stabilizerTM);
	            this._.propagTM && clearTimeout(this._.propagTM);
	            Object.keys(this._._listening).forEach(function (id) {
	                return id !== "$parent" && _this21._._scope[id].removeListener(_this21._._listening[id]);
	            });
	            while (this._._mixedList.length) {
	                this._._mixed[0].removeListener(this._._mixedList.shift());
	                this._._mixed.shift().dispose("mixedTo");
	            }
	            [].concat(_toConsumableArray(this._.followers)).map(function (follower) {
	                return _this21.unBind.apply(_this21, _toConsumableArray(follower));
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
	}(EventEmitter);
	
	Scope.persistenceTm = 1;
	Scope.Store = null;
	
	Scope.scopeRef = function scopeRef(path) {
	    this.path = path;
	};
	
	Scope.scopes = openScopes;
	
	
	is.rsScope = function (obj) {
	    return obj instanceof Scope;
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
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	module.exports = __webpack_require__(7);


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var alphabet = __webpack_require__(8);
	var encode = __webpack_require__(10);
	var decode = __webpack_require__(12);
	var build = __webpack_require__(13);
	var isValid = __webpack_require__(14);
	
	// if you are using cluster or multiple servers use this to make each instance
	// has a unique value for worker
	// Note: I don't know if this is automatically set when using third
	// party cluster solutions such as pm2.
	var clusterWorkerId = __webpack_require__(15) || 0;
	
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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var randomFromSeed = __webpack_require__(9);
	
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
/* 9 */
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
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var randomByte = __webpack_require__(11);
	
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
/* 11 */
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
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var alphabet = __webpack_require__(8);
	
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
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var encode = __webpack_require__(10);
	var alphabet = __webpack_require__(8);
	
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
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var alphabet = __webpack_require__(8);
	
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
/* 15 */
/***/ (function(module, exports) {

	'use strict';
	
	module.exports = 0;


/***/ }),
/* 16 */
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
	    TaskSequencer = __webpack_require__(17),
	    shortid = __webpack_require__(6),
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
	
	            var refs = !cfg.norefs && is.array(this._use) && this._use.reduce(function (map, key) {
	                //todo
	                var name = void 0,
	                    alias = void 0,
	                    path = void 0,
	                    store = void 0;
	                if (key.store && key.name) {
	                    alias = name = key.name;
	                    store = _this6.scopeObj.stores[name];
	                } else if (is.fn(key)) {
	                    name = alias = key.name || key.defaultName;
	                    store = _this6.scopeObj.stores[name];
	                } else {
	                    key = key.match(/([\w_]+)((?:\.[\w_]+)*)(?:\:([\w_]+))?/);
	                    name = key[1];
	                    path = name + key[2];
	                    alias = key[3] || path && path.match(/([^\.]*)$/)[0] || key[1];
	                    store = _this6.scopeObj.retrieveStore(path);
	                }
	                if (store && !store.scopeObj._.isLocalId) map[alias] = store.scopeObj._id + '/' + name;
	
	                return map;
	            }, {}) || {};
	
	            keyWalknSet(output, this.scopeObj._id + '/' + this.name, {
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
	                    if (snap = _this7.$scope.getSnapshotByKey(snapshot.refs[key])) _this7.state[key] = snap.data;else console.warn('not found : ', key, snap.refs[key]);
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
	                if (!this.__retains[reason]) throw new Error("Dispose more than retaining : " + reason);
	
	                this.__retains[reason]--;
	            }
	            if (this.__retains.all == 0) throw new Error("Dispose more than retaining !");
	
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
	        if (is.rsScope(store.prototype)) scope._mount(name);
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
	
	exports.default = Store;
	module.exports = exports['default'];

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";
	
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(18)))

/***/ }),
/* 18 */
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


/***/ }),
/* 19 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYzFhNWNiODBkZTEyMGVkMDY4YjAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9TY29wZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvaXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9pcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL0VtaXR0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9zaG9ydGlkL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vc2hvcnRpZC9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9zaG9ydGlkL2xpYi9hbHBoYWJldC5qcyIsIndlYnBhY2s6Ly8vLi9+L3Nob3J0aWQvbGliL3JhbmRvbS9yYW5kb20tZnJvbS1zZWVkLmpzIiwid2VicGFjazovLy8uL34vc2hvcnRpZC9saWIvZW5jb2RlLmpzIiwid2VicGFjazovLy8uL34vc2hvcnRpZC9saWIvcmFuZG9tL3JhbmRvbS1ieXRlLWJyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9zaG9ydGlkL2xpYi9kZWNvZGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9zaG9ydGlkL2xpYi9idWlsZC5qcyIsIndlYnBhY2s6Ly8vLi9+L3Nob3J0aWQvbGliL2lzLXZhbGlkLmpzIiwid2VicGFjazovLy8uL34vc2hvcnRpZC9saWIvdXRpbC9jbHVzdGVyLXdvcmtlci1pZC1icm93c2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9TdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvVGFza1NlcXVlbmNlci5qcyIsIndlYnBhY2s6Ly8vLi9+L3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvc2NvcGFibGUuanMiXSwibmFtZXMiOlsiJGdsb2JhbCIsIndpbmRvdyIsImdsb2JhbCIsIlJTIiwiX19fcmVzY29wZSIsImNvbnNvbGUiLCJ3YXJuIiwiU3RvcmUiLCJTY29wZSIsIkNvbnRleHQiLCJyZVNjb3BlIiwic2NvcGVUb1N0YXRlIiwicmVTY29wZVN0YXRlIiwiYWRkU2NvcGFibGVUeXBlIiwic2NvcGVSZWYiLCJtYXAiLCJrZXkiLCJyZXF1aXJlIiwid2Fsa25TZXQiLCJ3YWxrbkdldCIsImtleVdhbGtuU2V0Iiwia2V5V2Fsa25HZXQiLCJFdmVudEVtaXR0ZXIiLCJzaG9ydGlkIiwiX19wcm90b19fcHVzaCIsInRhcmdldCIsImlkIiwicGFyZW50IiwiZm4iLCJwcm90b3R5cGUiLCJfIiwib3BlblNjb3BlcyIsIlNpbXBsZU9iamVjdFByb3RvIiwiY29uc3RydWN0b3IiLCJzY29wZXMiLCJza2V5IiwiaXMiLCJhcnJheSIsInNvcnQiLCJhIiwiYiIsImZpcnN0bmFtZSIsImpvaW4iLCJzbSIsInN0YXRlIiwiX3JlZnMiLCJhY3Rpb25zIiwicGF0aCIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwiY3BhdGgiLCJwdXNoIiwiRnVuY3Rpb24iLCJhcyIsInN0b3Jlc01hcCIsInNuYXBzaG90IiwiZGF0YSIsImluY3JlbWVudElkIiwicGVyc2lzdGVuY2VUbSIsImF1dG9EZXN0cm95Iiwicm9vdEVtaXR0ZXIiLCJib3VuZGVkQWN0aW9ucyIsImtleUluZGV4IiwiX2lkIiwiaXNMb2NhbElkIiwiZ2VuZXJhdGUiLCJyZWdpc3RlciIsImkiLCJfcmV2Iiwic3RvcmVzIiwiX2F1dG9EZXN0cm95IiwiZGVhZCIsIkVycm9yIiwic291cmNlcyIsImNoaWxkU2NvcGVzIiwiY2hpbGRTY29wZXNMaXN0IiwidW5TdGFibGVDaGlsZHMiLCJzZWVuQ2hpbGRzIiwiX19yZXRhaW5zIiwiYWxsIiwiX19sb2NrcyIsIl9ib3VuZGVkQWN0aW9ucyIsInRlc3QiLCJpbmNsdWRlcyIsImJpbmQiLCJfbGlzdGVuaW5nIiwiX3Njb3BlIiwiX21peGVkIiwiX21peGVkTGlzdCIsImZvbGxvd2VycyIsInJldGFpbiIsIl9zdGFibGUiLCJ3YWl0Iiwib24iLCJfcGFyZW50TGlzdCIsInJlbGVhc2UiLCJfcHJvcGFnIiwiX2FkZENoaWxkIiwicmVzdG9yZSIsInNldFRpbWVvdXQiLCJkaXNwb3NlIiwic3RvcmVzTGlzdCIsIl9tb3VudCIsImsiLCJhcmd1bWVudHMiLCJyZWYiLCJzbmFwIiwicGFyc2VSZWYiLCJzdG9yZUlkIiwicmVkdWNlIiwibW91bnRlZCIsImN0eCIsInN0b3JlIiwidGFza1F1ZXVlIiwicnNTdG9yZSIsIm5hbWUiLCJsZW5ndGgiLCJzaGlmdCIsInJzU2NvcGUiLCIkcGFyZW50IiwibW91bnQiLCJzbGljZSIsInVuZGVmaW5lZCIsInNldFN0YXRlIiwiX3dhdGNoU3RvcmUiLCJpc1N0YWJsZSIsInByb3BhZyIsInRhcmdldEN0eCIsImxpc3RzIiwicmVsaW5rIiwic2luZ2xldG9uIiwic3JjQ3R4IiwiZXh0ZXJuYWwiLCJmb3JjZSIsImxjdHgiLCJpbmZvIiwidG1wIiwiZGVzdHJveSIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsImdldCIsInNldCIsInYiLCJhY3RpdmVBY3Rpb25zIiwiYWN0IiwiaGFzT3duUHJvcGVydHkiLCJfX3RhcmdldFN0b3JlcyIsImRpc3BhdGNoIiwib2JqIiwic2V0SW5pdGlhbCIsImxhc3RSZXZzIiwicmVmS2V5cyIsInN0cmluZyIsInJldnMiLCJyZXYiLCJyZWZzIiwicmV0YWluU3RvcmVzIiwiZ2V0VXBkYXRlcyIsImRpc3Bvc2VTdG9yZXMiLCJzcGxpY2UiLCJ0byIsInJlZkxpc3QiLCJtaXhlZENXVW5tb3VudCIsInVuTW91bnRLZXkiLCJpc1JlYWN0Q29tcG9uZW50IiwidW5CaW5kIiwiYWxpYXMiLCJyZXRyaWV2ZSIsInNwbGl0IiwicmV0cmlldmVTdG9yZSIsInN0b3Jlc1Jldk1hcCIsImxvY2FsIiwidXBkYXRlZCIsImdldFN0b3Jlc1JldnMiLCJvdXRwdXQiLCJjaGlsZHMiLCJfZ2V0QWxsQ2hpbGRzIiwiY2ZnIiwid2l0aENoaWxkcyIsIndpdGhQYXJlbnRzIiwid2l0aE1peGVkIiwibm9yZWZzIiwic2VyaWFsaXplIiwid2l0aENoaWxkIiwiaCIsInN0YXJ0c1dpdGgiLCJzdWJzdHIiLCJib29sIiwidGFrZVNuYXBzaG90QnlLZXkiLCJnZXRTbmFwc2hvdEJ5S2V5IiwicmVwbGFjZSIsImRlbGV0ZVNuYXBzaG90QnlLZXkiLCJwU3RhdGUiLCJfcmVmIiwiYWN0aW9uIiwiYXJneiIsInN0YWNrIiwiYkFjdHMiLCJ0cmlnZ2VyIiwiY2IiLCJvbmNlIiwicmVhc29uIiwiZW1pdCIsImVycm9yIiwic3RhYmlsaXplclRNIiwiY2xlYXJUaW1lb3V0IiwicHJvcGFnVE0iLCJyZW1hcHMiLCJ3YXNTdGFibGUiLCJpbmRleE9mIiwidW4iLCJkZXN0cm95VE0iLCJyZW1vdmVMaXN0ZW5lciIsImZvbGxvd2VyIiwiX3JtQ2hpbGQiLCJ2YWx1ZSIsImlzS2V5IiwiZmlsdGVyIiwiRW1pdHRlciIsIl9ldmVudHMiLCJldnQiLCJUYXNrU2VxdWVuY2VyIiwib2JqUHJvdG8iLCJnZXRQcm90b3R5cGVPZiIsIl9zdGF0aWMiLCJzY29wZSIsImdldFNjb3BlIiwic3RhdGljU2NvcGUiLCJ3YXRjaHMiLCJ1c2UiLCJhcHBseSIsImluaXRpYWxTdGF0ZSIsImRlZmF1bHRTdGF0ZSIsImFwcGxpZWQiLCJfdWlkIiwiX29uU3RhYmlsaXplIiwiX3BlcnNpc3RlbmNlVG0iLCJfY2ZnIiwic2NvcGVPYmoiLCIkc2NvcGUiLCIkc3RvcmVzIiwiJGFjdGlvbnMiLCIkZGlzcGF0Y2giLCJfcmV2cyIsIl9yZXF1aXJlIiwiX3NvdXJjZXMiLCJfdXNlIiwibWF0Y2giLCJyZWYyIiwiX2ZvbGxvd2VycyIsIl9jaGFuZ2VzU1ciLCJfYWZ0ZXJDb25zdHJ1Y3RvciIsImluaXRpYWxEYXRhIiwic2hvdWxkQXBwbHkiLCJtYW5hZ2VkIiwibkRhdGFzIiwiciIsImNEYXRhcyIsImlzQ29tcGxldGUiLCJmb2xsb3ciLCJjYWxsIiwiY2hhbmdlcyIsInJlZmluZSIsIl9fcHJvdG9fXyIsIl9zdGFiaWxpemVyIiwicHVzaFRhc2siLCJucyIsImRvV2FpdCIsIm9yaWdpbiIsImluaXRpYWxPdXRwdXRzIiwicyIsImhhc0RhdGFDaGFuZ2UiLCJzdGFibGUiLCJuZXh0U3RhdGUiLCJfbmV4dFN0YXRlIiwibmV4dERhdGEiLCJzeW5jIiwiY2hhbmdlIiwicHVzaFN0YXRlIiwic3RhYmlsaXplIiwiZGVmYXVsdE5hbWUiLCJudW1iZXIiLCJpbW1lZGlhdGUiLCJ0aGVuIiwicHJldmlvdXMiLCJtZSIsInNob3VsZFByb3BhZyIsIl9kZXN0cm95VE0iLCJyZW1vdmVBbGxMaXN0ZW5lcnMiLCJjU3RvcmUiLCJ0YXJnZXRSZXZzIiwidGFyZ2V0U2NvcGUiLCJfa2V5IiwibyIsImN1cldlaWdodCIsIm1heFdlaWdodCIsIm1pbldlaWdodCIsInRhc2tDb3VudCIsImRlU3luYyIsImRlU3luY01heFRhc2tzIiwidGFzayIsImlzUnVubmluZyIsImVycm9yQ2F0Y2hlciIsImxhc3RFcnJvciIsImRpc2FibGUiLCJoYW5kbGVFcnJvciIsInJ1bk5vdyIsImVuYWJsZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJwcm9jZXNzIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJ1biIsImZyb20iLCJEYXRlIiwibm93Iiwid2VpZ2h0IiwiTWF0aCIsIm1heCIsIm1pbiIsInNjb3BhYmxlcyIsImhhbmRsZSIsIm1lbWJlciIsInN0YXRlU2NvcGUiLCJpc1Njb3BhYmxlVHlwZSIsIkNvbXAiLCJhcHBseVNjb3BhYmxlVHlwZSIsImFyZ3oyIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ1RBOzs7O0FBQ0E7Ozs7QUFD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O0FBQ2xCLGFBQVksUUFBUTtBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsTUFBTTtBQUNqQixhQUFZLFFBQVE7QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLE1BQU07QUFDakIsYUFBWSxRQUFRO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLE1BQU07QUFDakIsWUFBVyxNQUFNO0FBQ2pCLGFBQVksUUFBUTtBQUNwQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxNQUFNO0FBQ2pCLFlBQVcsTUFBTTtBQUNqQixhQUFZLFFBQVE7QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsTUFBTTtBQUNqQixhQUFZLFFBQVE7QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLE1BQU07QUFDakIsYUFBWSxRQUFRO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxNQUFNO0FBQ2pCLGFBQVksUUFBUTtBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7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Q0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDakdBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDeEJBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQ2xCQTs7QUFFQSwrRUFBOEU7O0FBRTlFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUNiQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQ2hCQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7OztBQy9DQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQkFBa0IsU0FBUztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUNsQkE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTJCSSxVQUErQixtQkFBQTNNLENBQVEsQ0FBUixDQUEvQjtBQUFB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Q0FBUDtBQUNIOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztTQUlJN0csZSxHQUFBQSxlO1NBQ0FILE8sR0FBQUEsTztTQUNBQyxZLEdBQUFBLFkiLCJmaWxlIjoiLi4vLi4vZGlzdC9SZVNjb3BlLmJyb3dzZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgYzFhNWNiODBkZTEyMGVkMDY4YjAiLCIvKlxuICogQ29weXJpZ2h0IChjKSAgMjAxOCBXaXNlIFdpbGQgV2ViIC5cbiAqXG4gKiAgTUlUIExpY2Vuc2VcbiAqXG4gKiAgUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqICBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiAgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuICogIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqICBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqICBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqICBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiAgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqICBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuICogIFNPRlRXQVJFLlxuICpcbiAqIEBhdXRob3IgOiBOYXRoYW5hZWwgQnJhdW5cbiAqIEBjb250YWN0IDogY2FpcGlsYWJzQGdtYWlsLmNvbVxuICovXG5cbmxldCAkZ2xvYmFsID0gKCB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyApID8gd2luZG93IDogZ2xvYmFsO1xuXG5pbXBvcnQgU2NvcGUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gXCIuL1Njb3BlXCI7XG5pbXBvcnQgU3RvcmUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gXCIuL1N0b3JlXCI7XG5pbXBvcnQgeyBhZGRTY29wYWJsZVR5cGUsIHJlU2NvcGUsIHNjb3BlVG9TdGF0ZSB9IGZyb20gXCIuL3V0aWxzL3Njb3BhYmxlXCI7XG5cbmNvbnN0IFJTID0gJGdsb2JhbC5fX19yZXNjb3BlIHx8IHt9O1xuaWYgKCAkZ2xvYmFsLl9fX3Jlc2NvcGUgKSB7XG4gICAgY29uc29sZS53YXJuKFwiUmVTY29wZSBpcyBkZWZpbmVkIG11bHRpcGxlIHRpbWVzICEhIFxcbkNoZWNrIHlvdSdyZSBwYWNrYWdpbmdcIilcbn1cbmVsc2Uge1xuICAgIFxuICAgICRnbG9iYWwuX19fcmVzY29wZSA9IFJTO1xuICAgIFNjb3BlLlN0b3JlICAgICAgICA9IFN0b3JlO1xuICAgIFJTLlNjb3BlICAgICAgICAgICA9IFNjb3BlO1xuICAgIFJTLkNvbnRleHQgICAgICAgICA9IFNjb3BlO1xuICAgIFJTLlN0b3JlICAgICAgICAgICA9IFN0b3JlO1xuICAgIFJTLnJlU2NvcGUgICAgICAgICA9IHJlU2NvcGU7XG4gICAgUlMuc2NvcGVUb1N0YXRlICAgID0gc2NvcGVUb1N0YXRlO1xuICAgIFJTLnJlU2NvcGVTdGF0ZSAgICA9IHNjb3BlVG9TdGF0ZTtcbiAgICBSUy5hZGRTY29wYWJsZVR5cGUgPSBhZGRTY29wYWJsZVR5cGU7XG4gICAgUlMuc2NvcGVSZWYgICAgICAgID1cbiAgICAgICAgZnVuY3Rpb24gc2NvcGVSZWYoIG1hcCwga2V5ICkge1xuICAgICAgICAgICAgbWFwWyBrZXkgXSA9IG5ldyBTY29wZS5zY29wZVJlZihtYXBbIGtleSBdKTtcbiAgICAgICAgICAgIHJldHVybiBtYXA7XG4gICAgICAgIH07XG4gICAgXG59XG5leHBvcnQgZGVmYXVsdCBSUztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXguanMiLCIvKlxuICogQ29weXJpZ2h0IChjKSAgMjAxOCBXaXNlIFdpbGQgV2ViIC5cbiAqXG4gKiAgTUlUIExpY2Vuc2VcbiAqXG4gKiAgUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqICBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiAgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuICogIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqICBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqICBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqICBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiAgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqICBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuICogIFNPRlRXQVJFLlxuICpcbiAqIEBhdXRob3IgOiBOYXRoYW5hZWwgQnJhdW5cbiAqIEBjb250YWN0IDogY2FpcGlsYWJzQGdtYWlsLmNvbVxuICovXG5cblxudmFyIGlzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vdXRpbHMvaXMnKSxcbiAgICB7IHdhbGtuU2V0LCB3YWxrbkdldCwga2V5V2Fsa25TZXQsIGtleVdhbGtuR2V0IH0gPSByZXF1aXJlKCcuL3V0aWxzL3V0aWxzJyksXG4gICAgRXZlbnRFbWl0dGVyICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi91dGlscy9FbWl0dGVyJyksXG4gICAgc2hvcnRpZCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnc2hvcnRpZCcpXG4gICAgLCBfX3Byb3RvX19wdXNoICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID0gKCB0YXJnZXQsIGlkLCBwYXJlbnQgKSA9PiB7XG4gICAgICAgIGxldCBmbiAgICAgICAgID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB9O1xuICAgICAgICBmbi5wcm90b3R5cGUgICA9IHBhcmVudCA/IG5ldyBwYXJlbnQuX1sgaWQgXSgpIDogdGFyZ2V0WyBpZCBdIHx8IHt9O1xuICAgICAgICB0YXJnZXRbIGlkIF0gICA9IG5ldyBmbigpO1xuICAgICAgICB0YXJnZXQuX1sgaWQgXSA9IGZuO1xuICAgIH0sXG4gICAgb3BlblNjb3BlcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID0ge30sXG4gICAgU2ltcGxlT2JqZWN0UHJvdG8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID0gKCB7fSApLmNvbnN0cnVjdG9yO1xuXG4vKipcbiAqIEJhc2UgU2NvcGUgb2JqZWN0XG4gKi9cbmNsYXNzIFNjb3BlIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgICBzdGF0aWMgZ2V0U2NvcGUoIHNjb3BlcyApIHtcbiAgICAgICAgbGV0IHNrZXkgPSBpcy5hcnJheShzY29wZXMpID8gc2NvcGVzLnNvcnQoKCBhLCBiICkgPT4ge1xuICAgICAgICAgICAgaWYgKCBhLmZpcnN0bmFtZSA8IGIuZmlyc3RuYW1lICkgcmV0dXJuIC0xO1xuICAgICAgICAgICAgaWYgKCBhLmZpcnN0bmFtZSA+IGIuZmlyc3RuYW1lICkgcmV0dXJuIDE7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfSkuam9pbignKycpIDogc2NvcGVzO1xuICAgICAgICByZXR1cm4gb3BlblNjb3Blc1sgc2tleSBdID0gb3BlblNjb3Blc1sgc2tleSBdIHx8IG5ldyBTY29wZSh7fSwgeyBpZDogc2tleSB9KTtcbiAgICB9O1xuICAgIFxuICAgIFxuICAgIC8qKlxuICAgICAqIGdldCBhIHBhcnNlZCByZWZlcmVuY2UgbGlzdCBmcm9tIHN0YXRlTWFwXG4gICAgICogQHBhcmFtIF9yZWZcbiAgICAgKiBAcmV0dXJucyB7e3N0b3JlSWQsIHBhdGgsIGFsaWFzOiAqLCByZWY6ICp9fVxuICAgICAqL1xuICAgIHN0YXRpYyBzdGF0ZU1hcFRvUmVmTGlzdCggc20sIHN0YXRlID0ge30sIF9yZWZzID0gW10sIGFjdGlvbnMgPSB7fSwgcGF0aCA9IFwiXCIgKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKHNtKS5mb3JFYWNoKFxuICAgICAgICAgICAga2V5ID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgY3BhdGggPSBwYXRoID8gcGF0aCArICcuJyArIGtleSA6IGtleTtcbiAgICAgICAgICAgICAgICBzbVsga2V5IF0gaW5zdGFuY2VvZiBTY29wZS5zY29wZVJlZlxuICAgICAgICAgICAgICAgID8gX3JlZnMucHVzaChzbVsga2V5IF0ucGF0aCArICc6JyArIGNwYXRoKVxuICAgICAgICAgICAgICAgIDogKCBzbVsga2V5IF0gJiYgc21bIGtleSBdIGluc3RhbmNlb2YgRnVuY3Rpb24gKVxuICAgICAgICAgICAgICAgICAgPyBhY3Rpb25zWyBrZXkgXSA9IHNtWyBrZXkgXVxuICAgICAgICAgICAgICAgICAgOiAoIHNtWyBrZXkgXSAmJiBzbVsga2V5IF0ucHJvdG90eXBlIGluc3RhbmNlb2YgU2NvcGUuU3RvcmUgKVxuICAgICAgICAgICAgICAgICAgICA/IF9yZWZzLnB1c2goc21bIGtleSBdLmFzKGNwYXRoKSlcbiAgICAgICAgICAgICAgICAgICAgOiBzdGF0ZVsgY3BhdGggXSA9IHNtWyBrZXkgXVxuICAgICAgICAgICAgICAgIC8vOiB0aGlzLnN0YXRlTWFwVG9SZWZMaXN0KHNtW2tleV0sIF9yZWZzLCBwYXRoICsgJy4nICsga2V5KVxuICAgICAgICAgICAgfVxuICAgICAgICApXG4gICAgICAgIHJldHVybiBfcmVmcztcbiAgICB9XG4gICAgXG4gICAgc3RhdGljIHBlcnNpc3RlbmNlVG0gPSAxOy8vIGlmID4gMCwgd2lsbCB3YWl0ICdwZXJzaXN0ZW5jZVRtJyBtcyBiZWZvcmUgZGVzdHJveVxuICAgIC8vIHdoZW5cbiAgICAvLyBkaXNwb3NlIHJlYWNoIDBcbiAgICBzdGF0aWMgU3RvcmUgICAgPSBudWxsO1xuICAgIHN0YXRpYyBzY29wZVJlZiA9IGZ1bmN0aW9uIHNjb3BlUmVmKCBwYXRoICkge1xuICAgICAgICB0aGlzLnBhdGggPSBwYXRoO1xuICAgIH07XG4gICAgc3RhdGljIHNjb3BlcyAgID0gb3BlblNjb3BlczsvLyBhbGwgYWN0aXZlIHNjb3Blc1xuICAgIFxuICAgIFxuICAgIC8qKlxuICAgICAqIEluaXQgYSBSZVNjb3BlIHNjb3BlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc3RvcmVzTWFwIHtPYmplY3R9IE9iamVjdCB3aXRoIHRoZSBpbml0aWFsIHN0b3JlcyBkZWZpbml0aW9uIC8gaW5zdGFuY2VzXG4gICAgICogQHBhcmFtIGNvbmZpZyB7T2JqZWN0fSBTY29wZSBjb25maWdcbiAgICAgKiB7XG4gICAgICogIHBhcmVudCB7c2NvcGV9IEBvcHRpb25hbCBwYXJlbnQgc2NvcGVcbiAgICAgKlxuICAgICAqICBpZCB7c3RyaW5nfSBAb3B0aW9uYWwgaWQgKCBpZiB0aGlzIGlkIGV4aXN0IHN0b3Jlc01hcCB3aWxsIGJlIG1lcmdlIG9uIHRoZSAnaWQnXG4gICAgICogICAgIHNjb3BlKSBrZXkge3N0cmluZ30gQG9wdGlvbmFsIGtleSBvZiB0aGUgc2NvcGUgKCBpZiBubyBpZCBpcyBzZXQsIHRoZSBzY29wZSBpZFxuICAgICAqICAgICB3aWxsIGJlIChwYXJlbnQuaWQrJz4nK2tleSkgaW5jcmVtZW50SWQge2Jvb2x9IEBvcHRpb25hbCB0cnVlIHRvIGFkZCBhIHN1ZmZpeFxuICAgICAqICAgICBpZCwgaWYgdGhlIHByb3ZpZGVkIGtleSBvciBpZCBnbG9iYWxseSBleGlzdFxuICAgICAqXG4gICAgICogIHN0YXRlIHtPYmplY3R9IEBvcHRpb25hbCBpbml0aWFsIHN0YXRlIGJ5IHN0b3JlIGFsaWFzXG4gICAgICogIGRhdGEge09iamVjdH0gQG9wdGlvbmFsIGluaXRpYWwgZGF0YSBieSBzdG9yZSBhbGlhc1xuICAgICAqXG4gICAgICogIHJvb3RFbWl0dGVyIHtib29sfSBAb3B0aW9uYWwgdHJ1ZSB0byBub3QgYmVpbmcgZGVzdGFiaWxpemVkIGJ5IHBhcmVudFxuICAgICAqICBib3VuZGVkQWN0aW9ucyB7YXJyYXkgfCByZWdleHB9IEBvcHRpb25hbCBsaXN0IG9yIHJlZ2V4cCBvZiBhY3Rpb25zIG5vdFxuICAgICAqICAgICBwcm9wYWdhdGVkIHRvIHRoZSBwYXJlbnRcbiAgICAgKlxuICAgICAqICBwZXJzaXN0ZW5jZVRtIHtudW1iZXIpIGlmID4gMCwgd2lsbCB3YWl0ICdwZXJzaXN0ZW5jZVRtJyBtcyBiZWZvcmUgZGVzdHJveSB3aGVuXG4gICAgICogICAgIGRpc3Bvc2UgcmVhY2ggMCBhdXRvRGVzdHJveSAge2Jvb2x9IHdpbGwgdHJpZ2dlciByZXRhaW4gJiBkaXNwb3NlIGFmdGVyIHN0YXJ0XG4gICAgICogIH1cbiAgICAgKiBAcmV0dXJucyB7U2NvcGV9XG4gICAgICovXG4gICAgY29uc3RydWN0b3IoIHN0b3Jlc01hcCwgeyBwYXJlbnQsIGtleSwgaWQsIHNuYXBzaG90LCBzdGF0ZSwgZGF0YSwgaW5jcmVtZW50SWQgPSAhIWtleSwgcGVyc2lzdGVuY2VUbSwgYXV0b0Rlc3Ryb3ksIHJvb3RFbWl0dGVyLCBib3VuZGVkQWN0aW9ucyB9ID0ge30gKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHZhciBfID0ge30sIGtleUluZGV4O1xuICAgICAgICBcbiAgICAgICAgaWQgPSBpZCB8fCBrZXkgJiYgKCAoIHBhcmVudCAmJiBwYXJlbnQuX2lkIHx8ICcnICkgKyAnPicgKyBrZXkgKTtcbiAgICAgICAgXG4gICAgICAgIF8uaXNMb2NhbElkID0gIWlkO1xuICAgICAgICBcbiAgICAgICAgLy9pZiAoIHBhcmVudCAmJiBrZXkgKSB7XG4gICAgICAgIC8vICAgIGtleUluZGV4ID0gcGFyZW50Ll8uY2hpbGRTY29wZXMuZmluZChjdHg9PihjdHguX2lkPT1pZCkpO1xuICAgICAgICAvLyAgICBpZiAoIGtleUluZGV4ID09IC0xICkga2V5SW5kZXggPSBwYXJlbnQuXy5zZWVuQ2hpbGRzO1xuICAgICAgICAvLyAgICBrZXlJbmRleCsrO1xuICAgICAgICAvLyAgICBpZiAoIGtleUluZGV4IClcbiAgICAgICAgLy8gICAgICAgIGlkID0gaWQgKyAnWycgKyBrZXlJbmRleCArICddJztcbiAgICAgICAgLy99XG4gICAgICAgIFxuICAgICAgICBpZCA9IGlkIHx8ICggXCJfX19fX1wiICsgc2hvcnRpZC5nZW5lcmF0ZSgpICk7XG4gICAgICAgIFxuICAgICAgICBpZiAoIG9wZW5TY29wZXNbIGlkIF0gKSB7XG4gICAgICAgICAgICB0aGlzLl9pZCA9IGlkO1xuICAgICAgICAgICAgb3BlblNjb3Blc1sgaWQgXS5yZWdpc3RlcihzdG9yZXNNYXApO1xuICAgICAgICAgICAgcmV0dXJuIG9wZW5TY29wZXNbIGlkIF1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICggb3BlblNjb3Blc1sgaWQgXSAmJiBpbmNyZW1lbnRJZCApIHtcbiAgICAgICAgICAgIGxldCBpID0gLTE7XG4gICAgICAgICAgICB3aGlsZSAoIG9wZW5TY29wZXNbIGlkICsgJ1snICsgKCArK2kgKSArICddJyBdICkgO1xuICAgICAgICAgICAgaWQgPSBpZCArICdbJyArIGkgKyAnXSc7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRoaXMuX2lkICAgICAgICAgPSBpZDtcbiAgICAgICAgdGhpcy5fcmV2ICAgICAgICA9IDA7XG4gICAgICAgIG9wZW5TY29wZXNbIGlkIF0gPSB0aGlzO1xuICAgICAgICBfLnBlcnNpc3RlbmNlVG0gID0gcGVyc2lzdGVuY2VUbSB8fCB0aGlzLmNvbnN0cnVjdG9yLnBlcnNpc3RlbmNlVG07XG4gICAgICAgIFxuICAgICAgICB0aGlzLmFjdGlvbnMgPSB7fTtcbiAgICAgICAgdGhpcy5zdG9yZXMgID0ge307XG4gICAgICAgIHRoaXMuc3RhdGUgICA9IHt9O1xuICAgICAgICB0aGlzLmRhdGEgICAgPSB7fTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMucGFyZW50ICAgICAgID0gcGFyZW50O1xuICAgICAgICB0aGlzLl8gICAgICAgICAgICA9IF87XG4gICAgICAgIHRoaXMuX2F1dG9EZXN0cm95ID0gYXV0b0Rlc3Ryb3k7XG4gICAgICAgIFxuICAgICAgICBpZiAoIHBhcmVudCAmJiBwYXJlbnQuZGVhZCApXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW4ndCB1c2UgYSBkZWFkIHNjb3BlIGFzIHBhcmVudCAhXCIpO1xuICAgICAgICBcbiAgICAgICAgX19wcm90b19fcHVzaCh0aGlzLCAnYWN0aW9ucycsIHBhcmVudCk7XG4gICAgICAgIF9fcHJvdG9fX3B1c2godGhpcywgJ3N0b3JlcycsIHBhcmVudCk7XG4gICAgICAgIF9fcHJvdG9fX3B1c2godGhpcywgJ3N0YXRlJywgcGFyZW50KTtcbiAgICAgICAgX19wcm90b19fcHVzaCh0aGlzLCAnZGF0YScsIHBhcmVudCk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLnNvdXJjZXMgICAgICA9IFtdO1xuICAgICAgICBfLmNoaWxkU2NvcGVzICAgICA9IFtdO1xuICAgICAgICBfLmNoaWxkU2NvcGVzTGlzdCA9IFtdO1xuICAgICAgICBfLnVuU3RhYmxlQ2hpbGRzICA9IDA7XG4gICAgICAgIF8uc2VlbkNoaWxkcyAgICAgID0gMDtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX19yZXRhaW5zID0geyBhbGw6IDAgfTtcbiAgICAgICAgdGhpcy5fX2xvY2tzICAgPSB7IGFsbDogMSB9O1xuICAgICAgICBcbiAgICAgICAgLy9fLnNuYXBzaG90ICAgICAgICA9IHNuYXBzaG90O1xuICAgICAgICAvL18uc25hcHNob3QgICAgICAgID0gc25hcHNob3Q7XG4gICAgICAgIF8uX2JvdW5kZWRBY3Rpb25zID0gaXMuYXJyYXkoYm91bmRlZEFjdGlvbnMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB7IHRlc3Q6IGJvdW5kZWRBY3Rpb25zLmluY2x1ZGVzLmJpbmQoYm91bmRlZEFjdGlvbnMpIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGJvdW5kZWRBY3Rpb25zO1xuICAgICAgICBfLl9saXN0ZW5pbmcgICAgICA9IHt9O1xuICAgICAgICBfLl9zY29wZSAgICAgICAgICA9IHt9O1xuICAgICAgICBfLl9taXhlZCAgICAgICAgICA9IFtdO1xuICAgICAgICBfLl9taXhlZExpc3QgICAgICA9IFtdO1xuICAgICAgICBfLmZvbGxvd2VycyAgICAgICA9IFtdO1xuICAgICAgICBpZiAoIHBhcmVudCApIHtcbiAgICAgICAgICAgIHBhcmVudC5yZXRhaW4oXCJpc015UGFyZW50XCIpO1xuICAgICAgICAgICAgaWYgKCAhcm9vdEVtaXR0ZXIgKSB7XG4gICAgICAgICAgICAgICAgIXBhcmVudC5fc3RhYmxlICYmIHRoaXMud2FpdChcIndhaXRpbmdQYXJlbnRcIik7XG4gICAgICAgICAgICAgICAgcGFyZW50Lm9uKF8uX3BhcmVudExpc3QgPSB7XG4gICAgICAgICAgICAgICAgICAgICdzdGFibGUnICA6IHMgPT4gdGhpcy5yZWxlYXNlKFwid2FpdGluZ1BhcmVudFwiKSxcbiAgICAgICAgICAgICAgICAgICAgJ3Vuc3RhYmxlJzogcyA9PiB0aGlzLndhaXQoXCJ3YWl0aW5nUGFyZW50XCIpLFxuICAgICAgICAgICAgICAgICAgICAndXBkYXRlJyAgOiBzID0+IHRoaXMuX3Byb3BhZygpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXJlbnQub24oXy5fcGFyZW50TGlzdCA9IHtcbiAgICAgICAgICAgICAgICAgICAgJ3VwZGF0ZSc6IHMgPT4gdGhpcy5fcHJvcGFnKClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHRoaXMucmVnaXN0ZXIocGFyZW50Ll9fc2NvcGUsIHN0YXRlLCBkYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIHRoaXMucmVnaXN0ZXIoc3RvcmVzTWFwLCBzdGF0ZSwgZGF0YSk7XG4gICAgICAgIHRoaXMuX19sb2Nrcy5hbGwtLTtcbiAgICAgICAgdGhpcy5fc3RhYmxlID0gIXRoaXMuX19sb2Nrcy5hbGw7XG4gICAgICAgIFxuICAgICAgICBpZiAoIHBhcmVudCApIHtcbiAgICAgICAgICAgIHBhcmVudC5fYWRkQ2hpbGQodGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRoaXMucmVzdG9yZShzbmFwc2hvdCk7XG4gICAgICAgIFxuICAgICAgICBpZiAoIGF1dG9EZXN0cm95IClcbiAgICAgICAgICAgIHNldFRpbWVvdXQoXG4gICAgICAgICAgICAgICAgdG0gPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJldGFpbihcImF1dG9EZXN0cm95XCIpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpc3Bvc2UoXCJhdXRvRGVzdHJveVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApXG4gICAgICAgIFxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKlxuICAgICAqIE1vdW50IHRoZSBzdG9yZXMgaW4gc3RvcmVzTGlzdCwgaW4gdGhpcyBzY29wZSBvciBpbiBpdHMgcGFyZW50cyBvciBtaXhlZCBzY29wZXNcbiAgICAgKlxuICAgICAqIEBwYXJhbSBzdG9yZXNMaXN0IHtzdHJpbmd8c3RvcmVSZWZ9IFN0b3JlIG5hbWUsIEFycmF5IG9mIFN0b3JlIG5hbWVzLCBvciBSZXNjb3BlXG4gICAgICogICAgIHN0b3JlIHJlZiBmcm9tIFN0b3JlOjphcyBvciBTdG9yZTphc1xuICAgICAqIEBwYXJhbSBzdGF0ZVxuICAgICAqIEBwYXJhbSBkYXRhXG4gICAgICogQHJldHVybnMge1Njb3BlfVxuICAgICAqL1xuICAgIG1vdW50KCBzdG9yZXNMaXN0LCBzbmFwc2hvdCwgc3RhdGUsIGRhdGEgKSB7XG4gICAgICAgIGlmICggaXMuYXJyYXkoc3RvcmVzTGlzdCkgKSB7XG4gICAgICAgICAgICBzdG9yZXNMaXN0LmZvckVhY2goayA9PiB0aGlzLl9tb3VudChrLCBzbmFwc2hvdCwgc3RhdGUsIGRhdGEpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX21vdW50KC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIFxuICAgIF9tb3VudCggaWQsIHNuYXBzaG90LCBzdGF0ZSwgZGF0YSApIHtcbiAgICAgICAgbGV0IHJlZiwgc25hcDtcbiAgICAgICAgXG4gICAgICAgIHJlZiA9IHRoaXMucGFyc2VSZWYoaWQpXG4gICAgICAgIFxuICAgICAgICBpZiAoIGlkID09IFwiJHBhcmVudFwiICkgcmV0dXJuO1xuICAgICAgICBpZiAoICF0aGlzLl8uX3Njb3BlWyByZWYuc3RvcmVJZCBdICkgey8vYXNrIG1peGVkIHx8IHBhcmVudFxuICAgICAgICAgICAgaWYgKCB0aGlzLl8uX21peGVkLnJlZHVjZSgoIG1vdW50ZWQsIGN0eCApID0+ICggbW91bnRlZCB8fCBjdHguX21vdW50KGlkLCBzbmFwc2hvdCwgc3RhdGUsIGRhdGEpICksIGZhbHNlKSB8fFxuICAgICAgICAgICAgICAgICAhdGhpcy5wYXJlbnQgKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcmVudC5fbW91bnQoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxldCBzdG9yZSA9IHRoaXMuXy5fc2NvcGVbIHJlZi5zdG9yZUlkIF0sIHRhc2tRdWV1ZSA9IFtdO1xuICAgICAgICAgICAgaWYgKCBpcy5yc1N0b3JlKHN0b3JlLnByb3RvdHlwZSkgKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fLl9zY29wZVsgcmVmLnN0b3JlSWQgXSA9IG5ldyBzdG9yZSh0aGlzLCB7XG4gICAgICAgICAgICAgICAgICAgIC8vc25hcHNob3QsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IHJlZi5zdG9yZUlkLFxuICAgICAgICAgICAgICAgICAgICBzdGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgZGF0YVxuICAgICAgICAgICAgICAgIH0sIHRhc2tRdWV1ZSk7XG4gICAgICAgICAgICAgICAgd2hpbGUgKCB0YXNrUXVldWUubGVuZ3RoICkgdGFza1F1ZXVlLnNoaWZ0KCkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKCBpcy5yc1Njb3BlKHN0b3JlLnByb3RvdHlwZSkgKSB7XG4gICAgICAgICAgICAgICAgc3RvcmUgPSB0aGlzLl8uX3Njb3BlWyByZWYuc3RvcmVJZCBdID0gbmV3IHN0b3JlKHsgJHBhcmVudDogdGhpcyB9LCB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiB0aGlzLl9pZCArICcvJyArIHJlZi5zdG9yZUlkLFxuICAgICAgICAgICAgICAgICAgICAvL2F1dG9EZXN0cm95OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgIC8vcGFyZW50OiB0aGlzXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgLy90aGlzLl8uX3Njb3BlWyByZWYuc3RvcmVJZCBdLnJldGFpbihcInNjb3BlZENoaWxkU2NvcGVcIik7XG4gICAgICAgICAgICAgICAgLy90aGlzLl93YXRjaFN0b3JlKHJlZi5zdG9yZUlkKTtcbiAgICAgICAgICAgICAgICBpZiAoIHJlZi5wYXRoLmxlbmd0aCA+IDEgKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLl8uX3Njb3BlWyByZWYuc3RvcmVJZCBdLm1vdW50KHJlZi5wYXRoLnNsaWNlKDEpLmpvaW4oJy4nKSwgc25hcHNob3QsIHN0YXRlLCBkYXRhKVxuICAgICAgICAgICAgICAgIC8vZWxzZSByZXR1cm4gdGhpcy5fLl9zY29wZVsgcmVmLnN0b3JlSWQgXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vaWYgKCBzbmFwc2hvdCAmJiBpcy5yc1Njb3BlKHN0b3JlKSAmJiAoIHNuYXAgPSBrZXlXYWxrbkdldChzbmFwc2hvdCxcbiAgICAgICAgICAgIC8vIHN0b3JlLl9pZCkgKSAmJiBzbmFwWyAnLycgXSApIHsgcmV0dXJuIHN0b3JlLm1vdW50KE9iamVjdC5rZXlzKHNuYXBbICcvJ1xuICAgICAgICAgICAgLy8gXSkpIH0gZWxzZSBpZiAoIHNuYXBzaG90ICYmIGlzLnJzU3RvcmUoc3RvcmUpICkgc3RvcmUucmVzdG9yZSgpO1xuICAgICAgICAgICAgaWYgKCBpcy5yc1N0b3JlKHN0b3JlKSApIHtcbiAgICAgICAgICAgICAgICBpZiAoIHN0YXRlICE9PSB1bmRlZmluZWQgJiYgZGF0YSA9PT0gdW5kZWZpbmVkIClcbiAgICAgICAgICAgICAgICAgICAgc3RvcmUuc2V0U3RhdGUoc3RhdGUpO1xuICAgICAgICAgICAgICAgIGVsc2UgaWYgKCBzdGF0ZSAhPT0gdW5kZWZpbmVkIClcbiAgICAgICAgICAgICAgICAgICAgc3RvcmUuc3RhdGUgPSBzdGF0ZTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAoIGRhdGEgIT09IHVuZGVmaW5lZCApXG4gICAgICAgICAgICAgICAgICAgIHN0b3JlLnB1c2goZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl93YXRjaFN0b3JlKHJlZi5zdG9yZUlkKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIHJldHVybiB0aGlzLl8uX3Njb3BlWyByZWYuc3RvcmVJZCBdO1xuICAgIH1cbiAgICBcbiAgICBfd2F0Y2hTdG9yZSggaWQsIHN0YXRlLCBkYXRhICkge1xuICAgICAgICBpZiAoICF0aGlzLl8uX2xpc3RlbmluZ1sgaWQgXSAmJiAhaXMuZm4odGhpcy5fLl9zY29wZVsgaWQgXSkgKSB7XG4gICAgICAgICAgICAvL2lmICggaXMucnNTdG9yZSh0aGlzLl8uX3Njb3BlWyBpZCBdKSApIHtcbiAgICAgICAgICAgICF0aGlzLl8uX3Njb3BlWyBpZCBdLl9hdXRvRGVzdHJveSAmJiB0aGlzLl8uX3Njb3BlWyBpZCBdLnJldGFpbihcInNjb3BlZFwiKTtcbiAgICAgICAgICAgICF0aGlzLl8uX3Njb3BlWyBpZCBdLmlzU3RhYmxlKCkgJiYgdGhpcy53YWl0KGlkKTtcbiAgICAgICAgICAgIHRoaXMuXy5fc2NvcGVbIGlkIF0ub24oXG4gICAgICAgICAgICAgICAgdGhpcy5fLl9saXN0ZW5pbmdbIGlkIF0gPSB7XG4gICAgICAgICAgICAgICAgICAgICdkZXN0cm95JyA6IHMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuXy5fbGlzdGVuaW5nWyBpZCBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fLl9zY29wZVsgaWQgXSA9IHRoaXMuXy5fc2NvcGVbIGlkIF0uY29uc3RydWN0b3I7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICd1cGRhdGUnICA6IHMgPT4gdGhpcy5wcm9wYWcoKSxcbiAgICAgICAgICAgICAgICAgICAgJ3N0YWJsZScgIDogcyA9PiB0aGlzLnJlbGVhc2UoaWQpLFxuICAgICAgICAgICAgICAgICAgICAndW5zdGFibGUnOiBzID0+IHRoaXMud2FpdChpZClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogTWl4IHRhcmdldEN0eCBvbiB0aGlzIHNjb3BlXG4gICAgICogTWl4ZWQgc2NvcGUgcGFyZW50cyBhcmUgTk9UIG1hcHBlZFxuICAgICAqIEBwYXJhbSB0YXJnZXRDdHhcbiAgICAgKi9cbiAgICBtaXhpbiggdGFyZ2V0Q3R4ICkge1xuICAgICAgICBsZXQgcGFyZW50ID0gdGhpcy5wYXJlbnQsIGxpc3RzO1xuICAgICAgICB0aGlzLl8uX21peGVkLnB1c2godGFyZ2V0Q3R4KVxuICAgICAgICB0YXJnZXRDdHgucmV0YWluKFwibWl4ZWRUb1wiKTtcbiAgICAgICAgaWYgKCAhdGFyZ2V0Q3R4Ll9zdGFibGUgKVxuICAgICAgICAgICAgdGhpcy53YWl0KHRhcmdldEN0eC5faWQpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fLl9taXhlZExpc3QucHVzaChsaXN0cyA9IHtcbiAgICAgICAgICAgICdzdGFibGUnICA6IHMgPT4gdGhpcy5yZWxlYXNlKHRhcmdldEN0eC5faWQpLFxuICAgICAgICAgICAgJ3Vuc3RhYmxlJzogcyA9PiB0aGlzLndhaXQodGFyZ2V0Q3R4Ll9pZCksXG4gICAgICAgICAgICAndXBkYXRlJyAgOiBzID0+IHRoaXMuX3Byb3BhZygpXG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5hY3Rpb25zID0ge307XG4gICAgICAgIHRoaXMuc3RvcmVzICA9IHt9O1xuICAgICAgICB0aGlzLnN0YXRlICAgPSB7fTtcbiAgICAgICAgdGhpcy5kYXRhICAgID0ge307XG4gICAgICAgIHRhcmdldEN0eC5vbihsaXN0cyk7XG4gICAgICAgIF9fcHJvdG9fX3B1c2godGhpcywgJ2FjdGlvbnMnLCBwYXJlbnQpO1xuICAgICAgICBfX3Byb3RvX19wdXNoKHRoaXMsICdzdG9yZXMnLCBwYXJlbnQpO1xuICAgICAgICBfX3Byb3RvX19wdXNoKHRoaXMsICdzdGF0ZScsIHBhcmVudCk7XG4gICAgICAgIF9fcHJvdG9fX3B1c2godGhpcywgJ2RhdGEnLCBwYXJlbnQpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5yZWxpbmsodGhpcy5fLl9zY29wZSwgdGhpcywgZmFsc2UsIHRydWUpO1xuICAgICAgICB0aGlzLl8uX21peGVkLmZvckVhY2goXG4gICAgICAgICAgICBjdHggPT4ge1xuICAgICAgICAgICAgICAgIF9fcHJvdG9fX3B1c2godGhpcywgJ2FjdGlvbnMnKTtcbiAgICAgICAgICAgICAgICBfX3Byb3RvX19wdXNoKHRoaXMsICdzdG9yZXMnKTtcbiAgICAgICAgICAgICAgICBfX3Byb3RvX19wdXNoKHRoaXMsICdzdGF0ZScpO1xuICAgICAgICAgICAgICAgIF9fcHJvdG9fX3B1c2godGhpcywgJ2RhdGEnKTtcbiAgICAgICAgICAgICAgICBjdHgucmVsaW5rKGN0eC5fLl9zY29wZSwgdGhpcywgdHJ1ZSwgdHJ1ZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBSZWdpc3RlciBzdG9yZXMgaW4gc3RvcmVzTWFwICYgbGluayB0aGVtIGluIHRoZSBwcm90b3NcbiAgICAgKiBAcGFyYW0gc3RvcmVzTWFwXG4gICAgICogQHBhcmFtIHN0YXRlXG4gICAgICogQHBhcmFtIGRhdGFcbiAgICAgKi9cbiAgICByZWdpc3Rlciggc3RvcmVzTWFwLCBzdGF0ZSA9IHt9LCBkYXRhID0ge30gKSB7XG4gICAgICAgIHRoaXMucmVsaW5rKHN0b3Jlc01hcCwgdGhpcywgZmFsc2UsIGZhbHNlKTtcbiAgICAgICAgT2JqZWN0LmtleXMoc3RvcmVzTWFwKS5mb3JFYWNoKFxuICAgICAgICAgICAgaWQgPT4ge1xuICAgICAgICAgICAgICAgIGlmICggaWQgPT0gXCIkcGFyZW50XCIgKSByZXR1cm47XG4gICAgICAgICAgICAgICAgaWYgKCBzdG9yZXNNYXBbIGlkIF0uc2luZ2xldG9uIHx8ICggaXMuZm4oc3RvcmVzTWFwWyBpZCBdKSAmJiAoIHN0YXRlWyBpZCBdIHx8IGRhdGFbIGlkIF0gKSApICkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9tb3VudChpZCwgdW5kZWZpbmVkLCBzdGF0ZVsgaWQgXSwgZGF0YVsgaWQgXSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoIHN0YXRlWyBpZCBdIHx8IGRhdGFbIGlkIF0gKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICggZGF0YVsgaWQgXSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICggc3RhdGVbIGlkIF0gKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcmVzWyBpZCBdLnN0YXRlID0gc3RhdGVbIGlkIF07XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3Jlc1sgaWQgXS5wdXNoKGRhdGFbIGlkIF0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKCBzdGF0ZVsgaWQgXSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcmVzWyBpZCBdLnNldFN0YXRlKHN0YXRlWyBpZCBdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fd2F0Y2hTdG9yZShpZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICApXG4gICAgICAgIFxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBNYXAgc3JjQ3R4IHN0b3JlJ3Mgb24gdGFyZ2V0Q3R4IGhlYWRlcnMgcHJvdG8nc1xuICAgICAqIEBwYXJhbSBzcmNDdHhcbiAgICAgKiBAcGFyYW0gdGFyZ2V0Q3R4XG4gICAgICogQHBhcmFtIHN0YXRlXG4gICAgICogQHBhcmFtIGRhdGFcbiAgICAgKi9cbiAgICByZWxpbmsoIHNyY0N0eCwgdGFyZ2V0Q3R4ID0gdGhpcywgZXh0ZXJuYWwsIGZvcmNlICkge1xuICAgICAgICBsZXQgbGN0eCA9IHRhcmdldEN0eC5fLnN0b3Jlcy5wcm90b3R5cGU7XG4gICAgICAgIE9iamVjdC5rZXlzKHNyY0N0eClcbiAgICAgICAgICAgICAgLmZvckVhY2goXG4gICAgICAgICAgICAgICAgICBpZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKCAhZm9yY2UgJiYgdGFyZ2V0Q3R4Ll8uX3Njb3BlWyBpZCBdID09PSBzcmNDdHhbIGlkIF0gfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldEN0eC5fLl9zY29wZVsgaWQgXSAmJiAoIHRhcmdldEN0eC5fLl9zY29wZVsgaWQgXS5jb25zdHJ1Y3RvciA9PT0gc3JjQ3R4WyBpZCBdICkgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgaWYgKCAhZm9yY2UgJiYgdGFyZ2V0Q3R4Ll8uX3Njb3BlWyBpZCBdICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoICFleHRlcm5hbCAmJiAhaXMuZm4odGFyZ2V0Q3R4Ll8uX3Njb3BlWyBpZCBdKSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuaW5mbyhcIlJlc2NvcGUgU3RvcmUgOiBcIiwgaWQsIFwiIGFscmVhZHkgZXhpc3QgaW4gdGhpcyBzY29wZSAhICggSG90IHN3aXRjaGluZyB0aGUgc3RvcmUgKVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0bXAgICAgICAgICAgICAgICAgICA9IHRhcmdldEN0eC5fLl9zY29wZVsgaWQgXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldEN0eC5fLl9zY29wZVsgaWQgXSA9IHRhcmdldEN0eC5fLl9zY29wZVsgaWQgXS5jb25zdHJ1Y3RvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX21vdW50KGlkLCBudWxsLCB0bXAuc3RhdGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG1wLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vdGFyZ2V0Q3R4Ll8uX3Njb3BlWyBpZCBdLl9fcHJvdG9fXyA9IHRtcC5fX3Byb3RvX187XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCAhZXh0ZXJuYWwgJiYgaXMuZm4odGFyZ2V0Q3R4Ll8uX3Njb3BlWyBpZCBdKSApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRDdHguXy5fc2NvcGVbIGlkIF0gPSBzcmNDdHhbIGlkIF07XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKCAhZm9yY2UgJiYgIWV4dGVybmFsIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fLl9zY29wZVsgaWQgXSA9IHNyY0N0eFsgaWQgXTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxjdHgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnVtZXJhYmxlICA6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXQgICAgICAgICA6ICgpID0+IHRoaXMuXy5fc2NvcGVbIGlkIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKCBpZCA9PSBcIiRwYXJlbnRcIiApIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldEN0eC5fLnN0YXRlLnByb3RvdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudW1lcmFibGUgIDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldCAgICAgICAgIDogKCkgPT4gKCB0aGlzLl8uX3Njb3BlWyBpZCBdICYmIHRoaXMuXy5fc2NvcGVbIGlkIF0uc3RhdGUgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldCAgICAgICAgIDogKCB2ICkgPT4gKCB0aGlzLl9tb3VudChpZCwgdW5kZWZpbmVkLCB2KSApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0Q3R4Ll8uZGF0YS5wcm90b3R5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnVtZXJhYmxlICA6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXQgICAgICAgICA6ICgpID0+ICggdGhpcy5fLl9zY29wZVsgaWQgXSAmJiB0aGlzLl8uX3Njb3BlWyBpZCBdLmRhdGEgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldCAgICAgICAgIDogKCB2ICkgPT4gKCB0aGlzLl9tb3VudChpZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHYpIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgbGV0IGFjdGlvbnMgICAgICAgPSBzcmNDdHhbIGlkIF0gaW5zdGFuY2VvZiBTY29wZS5TdG9yZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBzcmNDdHhbIGlkIF0uY29uc3RydWN0b3IuYWN0aW9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBzcmNDdHhbIGlkIF0uYWN0aW9ucyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlQWN0aW9ucyA9IHRhcmdldEN0eC5fLmFjdGlvbnMucHJvdG90eXBlO1xuICAgICAgICAgICAgICAgICAgICAgIGlmICggaXMucnNTY29wZSh0aGlzLl8uX3Njb3BlWyBpZCBdLnByb3RvdHlwZSkgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9tb3VudChpZCk7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKCBpcy5yc1Njb3BlKHRoaXMuXy5fc2NvcGVbIGlkIF0pICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVBY3Rpb25zWyBpZCBdID0gdGhpcy5fLl9zY29wZVsgaWQgXS5hY3Rpb25zO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBpZiAoICFpcy5yc1N0b3JlKHRoaXMuXy5fc2NvcGVbIGlkIF0pICYmICFpcy5yc1N0b3JlKHRoaXMuXy5fc2NvcGVbIGlkIF0ucHJvdG90eXBlKSApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25zICYmXG4gICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoYWN0aW9ucylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZm9yRWFjaChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCBhY3QgKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIGFjdGl2ZUFjdGlvbnMuaGFzT3duUHJvcGVydHkoYWN0KSApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlQWN0aW9uc1sgYWN0IF0uX190YXJnZXRTdG9yZXMrKztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZUFjdGlvbnNbIGFjdCBdICAgICAgICAgICAgICAgID0gdGhpcy5kaXNwYXRjaC5iaW5kKHRoaXMsIGFjdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlQWN0aW9uc1sgYWN0IF0uX190YXJnZXRTdG9yZXMgPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICApXG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIEJpbmQgc3RvcmVzIGZyb20gdGhpcyBzY29wZSwgaGlzIHBhcmVudHMgYW5kIG1peGVkIHNjb3BlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gb2JqIHtSZWFjdC5Db21wb25lbnR8U3RvcmV8ZnVuY3Rpb259XG4gICAgICogQHBhcmFtIGtleSB7c3RyaW5nfSBzdG9yZXMga2V5cyB0byBiaW5kIHVwZGF0ZXNcbiAgICAgKiBAcGFyYW0gYXNcbiAgICAgKiBAcGFyYW0gc2V0SW5pdGlhbCB7Ym9vbH0gZmFsc2UgdG8gbm90IHByb3BhZyBpbml0aWFsIHZhbHVlIChkZWZhdWx0IDogdHJ1ZSlcbiAgICAgKi9cbiAgICBiaW5kKCBvYmosIGtleSwgYXMsIHNldEluaXRpYWwgPSB0cnVlICkge1xuICAgICAgICBsZXQgbGFzdFJldnMsIGRhdGEsIHJlZktleXM7XG4gICAgICAgIGlmICgga2V5ICYmICFpcy5hcnJheShrZXkpIClcbiAgICAgICAgICAgIGtleSA9IFsga2V5IF07XG4gICAgICAgIFxuICAgICAgICBpZiAoIGFzID09PSBmYWxzZSB8fCBhcyA9PT0gdHJ1ZSApIHtcbiAgICAgICAgICAgIHNldEluaXRpYWwgPSBhcztcbiAgICAgICAgICAgIGFzICAgICAgICAgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZWZLZXlzID0ga2V5XG4gICAgICAgICAgICAubWFwKGlkID0+ICggaXMuc3RyaW5nKGlkKSA/IGlkIDogaWQubmFtZSApKVxuICAgICAgICAgICAgLm1hcChpZCA9PiAoIHRoaXMucGFyc2VSZWYoaWQpICkpO1xuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIHRoaXMuXy5mb2xsb3dlcnMucHVzaChcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBvYmosXG4gICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgIGFzIHx8IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICBsYXN0UmV2cyA9IHJlZktleXMucmVkdWNlKCggcmV2cywgcmVmICkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXZzWyByZWYuc3RvcmVJZCBdID0gcmV2c1sgcmVmLnN0b3JlSWQgXSB8fCB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXYgOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmczogW11cbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgcmV2c1sgcmVmLnN0b3JlSWQgXS5yZWZzLnB1c2gocmVmKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJldnM7XG4gICAgICAgICAgICAgICAgfSwge30pXG4gICAgICAgICAgICBdKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMubW91bnQoa2V5KTtcbiAgICAgICAgdGhpcy5yZXRhaW5TdG9yZXMoT2JqZWN0LmtleXMobGFzdFJldnMpLCAnbGlzdGVuZXJzJyk7XG4gICAgICAgIFxuICAgICAgICBpZiAoIHNldEluaXRpYWwgJiYgdGhpcy5fc3RhYmxlICkge1xuICAgICAgICAgICAgZGF0YSA9IHRoaXMuZ2V0VXBkYXRlcyhsYXN0UmV2cyk7XG4gICAgICAgICAgICBpZiAoICFkYXRhICkgcmV0dXJuO1xuICAgICAgICAgICAgaWYgKCB0eXBlb2Ygb2JqICE9IFwiZnVuY3Rpb25cIiApIHtcbiAgICAgICAgICAgICAgICBpZiAoIGFzICkgb2JqLnNldFN0YXRlKHsgWyBhcyBdOiBkYXRhIH0pO1xuICAgICAgICAgICAgICAgIGVsc2Ugb2JqLnNldFN0YXRlKGRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgb2JqKGRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBVbiBiaW5kIHRoaXMgc2NvcGUgb2ZmIHRoZSBnaXZlbiBjb21wb25lbnQta2V5c1xuICAgICAqIEBwYXJhbSBvYmpcbiAgICAgKiBAcGFyYW0ga2V5XG4gICAgICogQHJldHVybnMge0FycmF5LjwqPn1cbiAgICAgKi9cbiAgICB1bkJpbmQoIG9iaiwga2V5LCBhcyApIHtcbiAgICAgICAgdmFyIGZvbGxvd2VycyA9IHRoaXMuXy5mb2xsb3dlcnMsXG4gICAgICAgICAgICBpICAgICAgICAgPSBmb2xsb3dlcnMgJiYgZm9sbG93ZXJzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBmb2xsb3dlcnMgJiYgaS0tIClcbiAgICAgICAgICAgIGlmICggZm9sbG93ZXJzWyBpIF1bIDAgXSA9PT0gb2JqICYmICggJycgKyBmb2xsb3dlcnNbIGkgXVsgMSBdICkgPT0gKCAnJyArIGtleSApICYmXG4gICAgICAgICAgICAgICAgIGZvbGxvd2Vyc1sgaSBdWyAyIF0gPT0gYXMgKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kaXNwb3NlU3RvcmVzKE9iamVjdC5rZXlzKGZvbGxvd2Vyc1sgaSBdWyAzIF0pLCAnbGlzdGVuZXJzJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZvbGxvd2Vycy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIE1vdW50IHRoZSBzdG9yZXMgaW4gc3RvcmVzTGlzdCBmcm9tIHRoaXMgc2NvcGUsIGl0cyBwYXJlbnRzIGFuZCBtaXhlZCBzY29wZVxuICAgICAqIEJpbmQgdGhlbSB0byAndG8nXG4gICAgICogSG9vayAndG8nIHNvIGl0IHdpbGwgYXV0byB1bmJpbmQgb24gJ2Rlc3Ryb3knIG9yICdjb21wb25lbnRXaWxsVW5tb3VudCdcbiAgICAgKiBAcGFyYW0gdG9cbiAgICAgKiBAcGFyYW0gc3RvcmVzTGlzdFxuICAgICAqIEBwYXJhbSBiaW5kXG4gICAgICogQHJldHVybnMge09iamVjdH0gSW5pdGlhbCBvdXRwdXRzIG9mIHRoZSBzdG9yZXMgaW4gJ3N0b3Jlc0xpc3QnXG4gICAgICovXG4gICAgbWFwKCB0bywgc3RvcmVzTGlzdCwgYmluZCA9IHRydWUgKSB7XG4gICAgICAgIGxldCBTdG9yZSAgID0gdGhpcy5jb25zdHJ1Y3Rvci5TdG9yZTtcbiAgICAgICAgc3RvcmVzTGlzdCAgPSBpcy5hcnJheShzdG9yZXNMaXN0KSA/IHN0b3Jlc0xpc3QgOiBbIHN0b3Jlc0xpc3QgXTtcbiAgICAgICAgbGV0IHJlZkxpc3QgPSBzdG9yZXNMaXN0Lm1hcCh0aGlzLnBhcnNlUmVmKTtcbiAgICAgICAgdGhpcy5tb3VudChzdG9yZXNMaXN0KTtcbiAgICAgICAgaWYgKCBiaW5kICYmIHRvIGluc3RhbmNlb2YgU3RvcmUgKSB7XG4gICAgICAgICAgICBTdG9yZS5tYXAodG8sIHN0b3Jlc0xpc3QsIHRoaXMsIHRoaXMsIGZhbHNlKVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCBiaW5kICkge1xuICAgICAgICAgICAgdGhpcy5iaW5kKHRvLCBzdG9yZXNMaXN0LCB1bmRlZmluZWQsIGZhbHNlKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgbGV0IG1peGVkQ1dVbm1vdW50LFxuICAgICAgICAgICAgICAgIHVuTW91bnRLZXkgPSB0by5pc1JlYWN0Q29tcG9uZW50ID8gXCJjb21wb25lbnRXaWxsVW5tb3VudFwiIDogXCJkZXN0cm95XCI7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmICggdG8uaGFzT3duUHJvcGVydHkodW5Nb3VudEtleSkgKSB7XG4gICAgICAgICAgICAgICAgbWl4ZWRDV1VubW91bnQgPSB0b1sgdW5Nb3VudEtleSBdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB0b1sgdW5Nb3VudEtleSBdID0gKCAuLi5hcmd6ICkgPT4ge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSB0b1sgdW5Nb3VudEtleSBdO1xuICAgICAgICAgICAgICAgIGlmICggbWl4ZWRDV1VubW91bnQgKVxuICAgICAgICAgICAgICAgICAgICB0b1sgdW5Nb3VudEtleSBdID0gbWl4ZWRDV1VubW91bnQ7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdGhpcy51bkJpbmQodG8sIHN0b3Jlc0xpc3QpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0b1sgdW5Nb3VudEtleSBdICYmIHRvWyB1bk1vdW50S2V5IF0oLi4uYXJneik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVmTGlzdC5yZWR1Y2UoKCBkYXRhLCByZWYgKSA9PiB7XG4gICAgICAgICAgICB3YWxrblNldChkYXRhLCByZWYuYWxpYXMgfHwgcmVmLnBhdGgsIHRoaXMucmV0cmlldmUocmVmLnBhdGgpKVxuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH0sIHt9KTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogR2V0IGN1cnJlbnQgZGF0YSB2YWx1ZSBmcm9tIGpzb24gcGF0aFxuICAgICAqIEBwYXJhbSBwYXRoXG4gICAgICogQHJldHVybnMge3N0cmluZ3wqfVxuICAgICAqL1xuICAgIHJldHJpZXZlKCBwYXRoID0gXCJcIiApIHtcbiAgICAgICAgcGF0aCA9IGlzLnN0cmluZyhwYXRoKSA/IHBhdGguc3BsaXQoJy4nKSA6IHBhdGg7XG4gICAgICAgIHJldHVybiBwYXRoICYmIHRoaXMuc3RvcmVzWyBwYXRoWyAwIF0gXSAmJlxuICAgICAgICAgICAgICAgdGhpcy5zdG9yZXNbIHBhdGhbIDAgXSBdLnJldHJpZXZlKHBhdGguc2xpY2UoMSkpO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBHZXQgY3VycmVudCBzdG9yZSBmcm9tIGpzb24gcGF0aFxuICAgICAqIEBwYXJhbSBwYXRoXG4gICAgICogQHJldHVybnMge3N0cmluZ3wqfVxuICAgICAqL1xuICAgIHJldHJpZXZlU3RvcmUoIHBhdGggPSBcIlwiICkge1xuICAgICAgICBwYXRoID0gaXMuc3RyaW5nKHBhdGgpID8gcGF0aC5zcGxpdCgnLicpIDogcGF0aDtcbiAgICAgICAgcmV0dXJuIHBhdGhcbiAgICAgICAgICAgICAgICYmIHBhdGgubGVuZ3RoXG4gICAgICAgICAgICAgICAmJiAoXG4gICAgICAgICAgICAgICBwYXRoLmxlbmd0aCAhPSAxICYmIHRoaXMuc3RvcmVzWyBwYXRoWyAwIF0gXS5yZXRyaWV2ZVN0b3JlXG4gICAgICAgICAgICAgICA/IHRoaXMuc3RvcmVzWyBwYXRoWyAwIF0gXS5yZXRyaWV2ZVN0b3JlKHBhdGguc2xpY2UoMSkpXG4gICAgICAgICAgICAgICA6IHBhdGgubGVuZ3RoID09IDEgJiYgdGhpcy5zdG9yZXNbIHBhdGhbIDAgXSBdXG4gICAgICAgICAgICAgICApO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBHZXQgb3IgdXBkYXRlIHN0b3Jlc1Jldk1hcCdzIHJldmlzaW9uc1xuICAgICAqIEBwYXJhbSBzdG9yZXNSZXZNYXBcbiAgICAgKiBAcGFyYW0gbG9jYWxcbiAgICAgKiBAcmV0dXJucyB7e319XG4gICAgICovXG4gICAgZ2V0U3RvcmVzUmV2cyggc3RvcmVzUmV2TWFwID0ge30sIGxvY2FsICkge1xuICAgICAgICBsZXQgY3R4ID0gdGhpcy5fLl9zY29wZTtcbiAgICAgICAgaWYgKCAhc3RvcmVzUmV2TWFwICkge1xuICAgICAgICAgICAgc3RvcmVzUmV2TWFwID0ge307XG4gICAgICAgIH1cbiAgICAgICAgT2JqZWN0LmtleXMoY3R4KS5mb3JFYWNoKFxuICAgICAgICAgICAgaWQgPT4ge1xuICAgICAgICAgICAgICAgIGlmICggaWQgPT0gXCIkcGFyZW50XCIgKSByZXR1cm47XG4gICAgICAgICAgICAgICAgaWYgKCAhaXMuZm4oY3R4WyBpZCBdKVxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICBzdG9yZXNSZXZNYXBbIGlkIF0gPSBjdHhbIGlkIF0uX3JldjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoICFzdG9yZXNSZXZNYXAuaGFzT3duUHJvcGVydHkoaWQpIClcbiAgICAgICAgICAgICAgICAgICAgc3RvcmVzUmV2TWFwWyBpZCBdID0gZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgaWYgKCAhbG9jYWwgKSB7XG4gICAgICAgICAgICB0aGlzLl8uX21peGVkLnJlZHVjZSgoIHVwZGF0ZWQsIGN0eCApID0+ICggY3R4LmdldFN0b3Jlc1JldnMoc3RvcmVzUmV2TWFwKSwgc3RvcmVzUmV2TWFwICksIHN0b3Jlc1Jldk1hcCk7XG4gICAgICAgICAgICB0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC5nZXRTdG9yZXNSZXZzKHN0b3Jlc1Jldk1hcCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0b3Jlc1Jldk1hcDtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogR2V0IG9yIHVwZGF0ZSBvdXRwdXQgYmFzaW5nIHN0b3Jlc1Jldk1hcCdzIHJldmlzaW9ucy5cbiAgICAgKiBJZiBhIHN0b3JlIGluICdzdG9yZXNSZXZNYXAnIHdhcyB1cGRhdGVkOyBhZGQgaXQgdG8gJ291dHB1dCcgJiB1cGRhdGUgc3RvcmVzUmV2TWFwXG4gICAgICogQHBhcmFtIHN0b3Jlc1Jldk1hcFxuICAgICAqIEBwYXJhbSBvdXRwdXRcbiAgICAgKiBAcGFyYW0gdXBkYXRlZFxuICAgICAqIEByZXR1cm5zIHsqfHt9fVxuICAgICAqL1xuICAgIGdldFVwZGF0ZXMoIHN0b3Jlc1Jldk1hcCwgb3V0cHV0LCB1cGRhdGVkICkge1xuICAgICAgICBsZXQgY3R4ID0gdGhpcy5fLl9zY29wZTtcbiAgICAgICAgXG4gICAgICAgIG91dHB1dCA9IG91dHB1dCB8fCB7fTtcbiAgICAgICAgT2JqZWN0LmtleXMoY3R4KS5mb3JFYWNoKFxuICAgICAgICAgICAgaWQgPT4ge1xuICAgICAgICAgICAgICAgIGlmICggaWQgPT0gXCIkcGFyZW50XCIgKSByZXR1cm47XG4gICAgICAgICAgICAgICAgaWYgKCAhb3V0cHV0Lmhhc093blByb3BlcnR5KGlkKSAmJiAhaXMuZm4oY3R4WyBpZCBdKVxuICAgICAgICAgICAgICAgICAgICAgJiYgKCAhc3RvcmVzUmV2TWFwXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHx8ICggc3RvcmVzUmV2TWFwLmhhc093blByb3BlcnR5KGlkKSAmJiBzdG9yZXNSZXZNYXBbIGlkIF0gPT09IHVuZGVmaW5lZCApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHx8ICEoICFzdG9yZXNSZXZNYXAuaGFzT3duUHJvcGVydHkoaWQpIHx8IGN0eFsgaWQgXS5fcmV2IDw9IHN0b3Jlc1Jldk1hcFsgaWQgXS5yZXYgKSApXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVkICAgICAgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBvdXRwdXRbIGlkIF0gPSB0aGlzLmRhdGFbIGlkIF07XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpZiAoIHN0b3Jlc1Jldk1hcCAmJiBzdG9yZXNSZXZNYXAuaGFzT3duUHJvcGVydHkoaWQpICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmVzUmV2TWFwWyBpZCBdLnJldiA9IGN0eFsgaWQgXS5fcmV2O1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmVzUmV2TWFwWyBpZCBdLnJlZnMuZm9yRWFjaChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWYgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUud2FybihcInVwZGF0ZSByZWYgXCIsIHJlZi5yZWYsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMucmV0cmlldmUocmVmLnBhdGgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0WyByZWYuYWxpYXMgXSA9IHRoaXMucmV0cmlldmUocmVmLnBhdGgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS53YXJuKFwidXBkYXRlIFwiLCBpZCwgdGhpcy5kYXRhW2lkXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXRbIGlkIF0gPSB0aGlzLmRhdGFbIGlkIF07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICB1cGRhdGVkID0gdGhpcy5fLl9taXhlZC5yZWR1Y2UoKCB1cGRhdGVkLCBjdHggKSA9PiAoIGN0eC5nZXRVcGRhdGVzKHN0b3Jlc1Jldk1hcCwgb3V0cHV0LCB1cGRhdGVkKSB8fCB1cGRhdGVkICksIHVwZGF0ZWQpO1xuICAgICAgICB1cGRhdGVkID0gdGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuZ2V0VXBkYXRlcyhzdG9yZXNSZXZNYXAsIG91dHB1dCwgdXBkYXRlZCkgfHwgdXBkYXRlZDtcbiAgICAgICAgcmV0dXJuIHVwZGF0ZWQgJiYgb3V0cHV0O1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBSZWN1cnNpdmVseSBnZXQgYWxsIGNoaWxkIHNjb3Blc1xuICAgICAqIEBwYXJhbSBjaGlsZHNcbiAgICAgKiBAcmV0dXJucyB7QXJyYXl9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfZ2V0QWxsQ2hpbGRzKCBjaGlsZHMgPSBbXSApIHtcbiAgICAgICAgY2hpbGRzLnB1c2goLi4udGhpcy5fLmNoaWxkU2NvcGVzKTtcbiAgICAgICAgdGhpcy5fLmNoaWxkU2NvcGVzLmZvckVhY2goXG4gICAgICAgICAgICBjdHggPT4ge1xuICAgICAgICAgICAgICAgIGN0eC5fZ2V0QWxsQ2hpbGRzKGNoaWxkcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiBjaGlsZHM7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIFNlcmlhbGl6ZSBhbGwgYWN0aXZlIHN0b3JlcyBzdGF0ZSAmIGRhdGEgaW4gZXZlcnkgY2hpbGRzICYgbWl4ZWQgc2NvcGVzXG4gICAgICpcbiAgICAgKiBTY29wZXMgd2l0aG91dCBrZXkgb3IgaWQgYXJlIGlnbm9yZWRcbiAgICAgKiBAcGFyYW0gb3V0cHV0XG4gICAgICogQHJldHVybnMge3t9fVxuICAgICAqL1xuICAgIHNlcmlhbGl6ZSggY2ZnID0ge30sIG91dHB1dCA9IHt9ICkge1xuICAgICAgICBsZXQgY3R4ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA9IHRoaXMuXy5fc2NvcGUsXG4gICAgICAgICAgICB7IGFsaWFzLCB3aXRoQ2hpbGRzID0gdHJ1ZSwgd2l0aFBhcmVudHMsIHdpdGhNaXhlZCA9IHRydWUsIG5vcmVmcyB9ID0gY2ZnO1xuICAgICAgICBcbiAgICAgICAgaWYgKCBrZXlXYWxrbkdldChvdXRwdXQsIHRoaXMuX2lkKSApXG4gICAgICAgICAgICByZXR1cm4gb3V0cHV0O1xuICAgICAgICBcbiAgICAgICAgLy9AdG9kbyA6IGJldHRlciBzZXJpYWxpemUgbWV0aG9kXG4gICAgICAgIGtleVdhbGtuU2V0KG91dHB1dCwgdGhpcy5faWQsIHt9KTtcbiAgICAgICAgXG4gICAgICAgIE9iamVjdC5rZXlzKGN0eCkuZm9yRWFjaChcbiAgICAgICAgICAgIGlkID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIGlkID09IFwiJHBhcmVudFwiIHx8IGlzLmZuKGN0eFsgaWQgXSkgKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY3R4WyBpZCBdLnNlcmlhbGl6ZShjZmcsIG91dHB1dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIClcbiAgICAgICAgXG4gICAgICAgIHdpdGhQYXJlbnRzICYmIHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LnNlcmlhbGl6ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aENoaWxkICA6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpdGhQYXJlbnRzOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpdGhNaXhlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JlZnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIG91dHB1dCk7XG4gICAgICAgIFxuICAgICAgICB3aXRoQ2hpbGRzICYmIHRoaXMuXy5jaGlsZFNjb3Blcy5mb3JFYWNoKFxuICAgICAgICAgICAgY3R4ID0+IHtcbiAgICAgICAgICAgICAgICAhY3R4Ll8uaXNMb2NhbElkICYmIGN0eC5zZXJpYWxpemUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aENoaWxkICA6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRoUGFyZW50czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRoTWl4ZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JlZnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgb3V0cHV0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgXG4gICAgICAgIHdpdGhNaXhlZCAmJiB0aGlzLl8uX21peGVkLmZvckVhY2goXG4gICAgICAgICAgICBjdHggPT4ge1xuICAgICAgICAgICAgICAgICFjdHguXy5pc0xvY2FsSWQgJiYgY3R4LnNlcmlhbGl6ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRoQ2hpbGQgIDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRoUGFyZW50czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRoTWl4ZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JlZnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgb3V0cHV0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgXG4gICAgICAgIGlmICggYWxpYXMgKSB7XG4gICAgICAgICAgICBvdXRwdXQgPSBPYmplY3Qua2V5cyhvdXRwdXQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAucmVkdWNlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICggaCwgayApID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaFsgay5zdGFydHNXaXRoKGFsaWFzKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGFsaWFzICsgay5zdWJzdHIoYWxpYXMubGVuZ3RoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGsgXSA9IG91dHB1dFsgayBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb3V0cHV0O1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBSZXN0b3JlIHN0YXRlICYgZGF0YSBmcm9tIHRoZSBzZXJpYWxpemUgZm5cbiAgICAgKiBAcGFyYW0gc25hcHNob3RcbiAgICAgKiBAcGFyYW0gZm9yY2VcbiAgICAgKi9cbiAgICByZXN0b3JlKCBzbmFwc2hvdCwgY2ZnID0ge30sIGZvcmNlID0gaXMuYm9vbChjZmcpICYmIGNmZyApIHtcbiAgICAgICAgbGV0IGN0eCAgPSB0aGlzLl8uX3Njb3BlLCBzbmFwO1xuICAgICAgICBzbmFwc2hvdCA9IHNuYXBzaG90XG4gICAgICAgICAgICAgICAgICAgJiYga2V5V2Fsa25HZXQoc25hcHNob3QsIHRoaXMuX2lkKVxuICAgICAgICAgICAgICAgICAgIHx8IHRoaXMudGFrZVNuYXBzaG90QnlLZXkodGhpcy5faWQpO1xuICAgICAgICBcbiAgICAgICAgaWYgKCAhc25hcHNob3QgKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fLnNuYXBzaG90ID0gc25hcHNob3Q7XG4gICAgICAgIFxuICAgICAgICBzbmFwID0gc25hcHNob3RbICcvJyBdO1xuICAgICAgICBcbiAgICAgICAgc25hcCAmJiBPYmplY3Qua2V5cyhzbmFwKS5mb3JFYWNoKFxuICAgICAgICAgICAgbmFtZSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCBuYW1lID09IFwiJHBhcmVudFwiICkgcmV0dXJuO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmICggY3R4WyBuYW1lIF0gKSB7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpZiAoIGZvcmNlICYmICFpcy5mbihjdHhbIG5hbWUgXSkgKVxuICAgICAgICAgICAgICAgICAgICAgICAgY3R4WyBuYW1lIF0uZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbW91bnQobmFtZSk7Ly8gcXVpZXRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIClcbiAgICAgICAgXG4gICAgICAgIHRoaXMuXy5fbWl4ZWQuZm9yRWFjaChcbiAgICAgICAgICAgIGN0eCA9PiB7XG4gICAgICAgICAgICAgICAgIWN0eC5fLmlzTG9jYWxJZCAmJiBjdHgucmVzdG9yZSh1bmRlZmluZWQsIGZvcmNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuXy5jaGlsZFNjb3Blcy5mb3JFYWNoKFxuICAgICAgICAgICAgY3R4ID0+IHtcbiAgICAgICAgICAgICAgICAhY3R4Ll8uaXNMb2NhbElkICYmIGN0eC5yZXN0b3JlKHVuZGVmaW5lZCwgZm9yY2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICBcbiAgICB9XG4gICAgXG4gICAgZ2V0U25hcHNob3RCeUtleSgga2V5LCBsb2NhbCApIHtcbiAgICAgICAgLy8gb25seSBoYXZlIHRoZSBsb2NhbCBzbmFwXG4gICAgICAgIGlmICggdGhpcy5fLnNuYXBzaG90ICYmIGtleS5zdGFydHNXaXRoKHRoaXMuX2lkKSApIHtcbiAgICAgICAgICAgIGxldCBvYmogPSBrZXlXYWxrbkdldCh0aGlzLl8uc25hcHNob3QsIGtleS5zdWJzdHIodGhpcy5faWQubGVuZ3RoKSlcbiAgICAgICAgICAgIC8vaWYgKCBvYmogKSB7XG4gICAgICAgICAgICAvLyAgICB0aGlzLmRlbGV0ZVNuYXBzaG90QnlLZXkoa2V5KTtcbiAgICAgICAgICAgIC8vfVxuICAgICAgICAgICAgcmV0dXJuIG9iajtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHJldHVybiAhbG9jYWxcbiAgICAgICAgICAgICAgICAgICAgJiYgdGhpcy5wYXJlbnRcbiAgICAgICAgICAgICAgICAgICAgJiYgdGhpcy5wYXJlbnQuZ2V0U25hcHNob3RCeUtleShrZXkpXG4gICAgICAgICAgICAgICAgICAgIHx8XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcmVzLiRwYXJlbnRcbiAgICAgICAgICAgICAgICAgICAgJiYgdGhpcy5zdG9yZXMuJHBhcmVudC5nZXRTbmFwc2hvdEJ5S2V5KGtleSk7XG4gICAgICAgIFxuICAgIH1cbiAgICBcbiAgICBnZXRTbmFwc2hvdEJ5S2V5RXh0KCBzbmFwc2hvdCwga2V5LCBsb2NhbCApIHtcbiAgICAgICAgLy8gb25seSBoYXZlIHRoZSBsb2NhbCBzbmFwXG4gICAgICAgIGlmICggc25hcHNob3QgKSB7XG4gICAgICAgICAgICBsZXQgb2JqID0ga2V5V2Fsa25HZXQoc25hcHNob3QsIGtleSlcbiAgICAgICAgICAgIHJldHVybiBvYmo7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxuICAgIFxuICAgIHRha2VTbmFwc2hvdEJ5S2V5KCBrZXksIGxvY2FsICkge1xuICAgICAgICBpZiAoIHRoaXMuXy5zbmFwc2hvdCAmJiBrZXkuc3RhcnRzV2l0aCh0aGlzLl9pZCkgKSB7XG4gICAgICAgICAgICBsZXQgb2JqID0ga2V5V2Fsa25HZXQodGhpcy5fLnNuYXBzaG90LCBrZXkuc3Vic3RyKHRoaXMuX2lkLmxlbmd0aCkpXG4gICAgICAgICAgICBpZiAoIG9iaiApIHtcbiAgICAgICAgICAgICAgICAvL3RoaXMuZGVsZXRlU25hcHNob3RCeUtleShrZXksIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG9iajtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHJldHVybiAhbG9jYWxcbiAgICAgICAgICAgICAgICAgICAgJiYgdGhpcy5wYXJlbnRcbiAgICAgICAgICAgICAgICAgICAgJiYgdGhpcy5wYXJlbnQudGFrZVNuYXBzaG90QnlLZXkoa2V5KVxuICAgICAgICAgICAgICAgICAgICB8fFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3Jlcy4kcGFyZW50XG4gICAgICAgICAgICAgICAgICAgICYmIHRoaXMuc3RvcmVzLiRwYXJlbnQudGFrZVNuYXBzaG90QnlLZXkoa2V5KTtcbiAgICB9XG4gICAgXG4gICAgZGVsZXRlU25hcHNob3RCeUtleSgga2V5LCBsb2NhbCApIHtcbiAgICAgICAgaWYgKCB0aGlzLl8uc25hcHNob3QgJiYga2V5LnN0YXJ0c1dpdGgodGhpcy5faWQpICkge1xuICAgICAgICAgICAgbGV0IG9iaiA9IGtleVdhbGtuR2V0KHRoaXMuXy5zbmFwc2hvdCwga2V5LnN1YnN0cih0aGlzLl9pZC5sZW5ndGgpLnJlcGxhY2UoL14oLipbXFw+fFxcL10pW15cXD58XFwvXSskL2lnLCAnJDEnKSlcbiAgICAgICAgICAgIGlmICggb2JqIClcbiAgICAgICAgICAgICAgICBkZWxldGUgb2JqWyBrZXkucmVwbGFjZSgvXi4qW1xcPnxcXC9dKFteXFw+fFxcL10rKSQvaWcsICckMScpIF1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gIWxvY2FsXG4gICAgICAgICAgICAgICAmJiB0aGlzLnBhcmVudFxuICAgICAgICAgICAgICAgJiYgdGhpcy5wYXJlbnQuZGVsZXRlU25hcHNob3RCeUtleShrZXkpXG4gICAgICAgICAgICAgICB8fFxuICAgICAgICAgICAgICAgdGhpcy5zdG9yZXMuJHBhcmVudFxuICAgICAgICAgICAgICAgJiYgdGhpcy5zdG9yZXMuJHBhcmVudC5kZWxldGVTbmFwc2hvdEJ5S2V5KGtleSk7XG4gICAgfVxuICAgIFxuICAgIHNldFN0YXRlKCBwU3RhdGUgKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKHBTdGF0ZSlcbiAgICAgICAgICAgICAgLmZvckVhY2goayA9PiAoIHRoaXMuc3RhdGVbIGsgXSA9IHBTdGF0ZVsgayBdICkpXG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIGdldCBhIHBhcnNlZCByZWZlcmVuY2VcbiAgICAgKiBAcGFyYW0gX3JlZlxuICAgICAqIEByZXR1cm5zIHt7c3RvcmVJZCwgcGF0aCwgYWxpYXM6ICosIHJlZjogKn19XG4gICAgICovXG4gICAgcGFyc2VSZWYoIF9yZWYgKSB7XG4gICAgICAgIGlmICggdHlwZW9mIF9yZWYgIT09ICdzdHJpbmcnICkge1xuICAgICAgICAgICAgdGhpcy5yZWdpc3Rlcih7IFsgX3JlZi5uYW1lIF06IF9yZWYuc3RvcmUgfSk7XG4gICAgICAgICAgICBfcmVmID0gX3JlZi5uYW1lO1xuICAgICAgICB9XG4gICAgICAgIGxldCByZWYgID0gX3JlZi5zcGxpdCgnOicpO1xuICAgICAgICByZWZbIDAgXSA9IHJlZlsgMCBdLnNwbGl0KCcuJyk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzdG9yZUlkOiByZWZbIDAgXVsgMCBdLFxuICAgICAgICAgICAgcGF0aCAgIDogcmVmWyAwIF0sXG4gICAgICAgICAgICBhbGlhcyAgOiByZWZbIDEgXSB8fCByZWZbIDAgXVsgcmVmWyAwIF0ubGVuZ3RoIC0gMSBdLFxuICAgICAgICAgICAgcmVmICAgIDogX3JlZlxuICAgICAgICB9O1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBEaXNwYXRjaCBhbiBhY3Rpb24gdG8gdGhlIHRvcCBwYXJlbnQgJiBtaXhlZCBzY29wZXMsIGluIGFsbCBzdG9yZXNcbiAgICAgKlxuICAgICAqIEBwYXJhbSBhY3Rpb25cbiAgICAgKiBAcGFyYW0gZGF0YVxuICAgICAqIEByZXR1cm5zIHtTY29wZX1cbiAgICAgKi9cbiAgICBkaXNwYXRjaCggYWN0aW9uLCAuLi5hcmd6ICkge1xuICAgICAgICBpZiAoIHRoaXMuZGVhZCApIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcIkRpc3BhdGNoIHdhcyBjYWxsZWQgb24gYSBkZWFkIHNjb3BlLCBjaGVjayB5b3UncmUgYXN5bmMgZnVuY3Rpb25zIGluIHRoaXMgc3RhY2suLi5cIiwgKCBuZXcgRXJyb3IoKSApLnN0YWNrKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgYkFjdHMgPSB0aGlzLl8uX2JvdW5kZWRBY3Rpb25zO1xuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLl8uX3Njb3BlKVxuICAgICAgICAgICAgICAuZm9yRWFjaChcbiAgICAgICAgICAgICAgICAgIGlkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoIGlkID09IFwiJHBhcmVudFwiICkgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgIGlmICggIWlzLmZuKHRoaXMuXy5fc2NvcGVbIGlkIF0pIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fLl9zY29wZVsgaWQgXS50cmlnZ2VyKGFjdGlvbiwgLi4uYXJneik7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICk7XG4gICAgICAgIFxuICAgICAgICBpZiAoIGJBY3RzICYmIGJBY3RzLnRlc3QoYWN0aW9uKSApXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIFxuICAgICAgICB0aGlzLl8uX21peGVkLmZvckVhY2goKCBjdHggKSA9PiAoIGN0eC5kaXNwYXRjaChhY3Rpb24sIC4uLmFyZ3opICkpO1xuICAgICAgICB0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC5kaXNwYXRjaChhY3Rpb24sIC4uLmFyZ3opO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgXG4gICAgLy9cbiAgICB0cmlnZ2VyKCkge1xuICAgICAgICB0aGlzLmRpc3BhdGNoKC4uLmFyZ3VtZW50cyk7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIG9uY2UoJ3N0YWJsZScsIGNiKVxuICAgICAqIEBwYXJhbSBvYmoge1JlYWN0LkNvbXBvbmVudHxTdG9yZXxmdW5jdGlvbilcbiAgICAgKiBAcGFyYW0ga2V5IHtzdHJpbmd9IG9wdGlvbmFsIGtleSB3aGVyZSB0byBtYXAgdGhlIHB1YmxpYyBzdGF0ZVxuICAgICAqL1xuICAgIHRoZW4oIGNiICkge1xuICAgICAgICBpZiAoIHRoaXMuX3N0YWJsZSApXG4gICAgICAgICAgICByZXR1cm4gY2IodGhpcy5kYXRhKTtcbiAgICAgICAgdGhpcy5vbmNlKCdzdGFibGUnLCBlID0+IGNiKHRoaXMuZGF0YSkpO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBDYWxsIHJldGFpbiBvbiB0aGUgc2NvcGVkIHN0b3JlcyBiYXNpbmcgZ2l2ZW5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBzdG9yZXNcbiAgICAgKiBAcGFyYW0gcmVhc29uXG4gICAgICovXG4gICAgcmV0YWluU3RvcmVzKCBzdG9yZXMgPSBbXSwgcmVhc29uICkge1xuICAgICAgICBzdG9yZXMuZm9yRWFjaChcbiAgICAgICAgICAgIGlkID0+ICggdGhpcy5zdG9yZXNbIGlkIF0gJiYgdGhpcy5zdG9yZXNbIGlkIF0ucmV0YWluICYmIHRoaXMuc3RvcmVzWyBpZCBdLnJldGFpbihyZWFzb24pIClcbiAgICAgICAgKVxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBDYWxsIHJldGFpbiBvbiB0aGUgc2NvcGVkIHN0b3Jlc1xuICAgICAqXG4gICAgICogQHBhcmFtIHN0b3Jlc1xuICAgICAqIEBwYXJhbSByZWFzb25cbiAgICAgKi9cbiAgICBkaXNwb3NlU3RvcmVzKCBzdG9yZXMgPSBbXSwgcmVhc29uICkge1xuICAgICAgICBzdG9yZXMuZm9yRWFjaChcbiAgICAgICAgICAgIGlkID0+ICggdGhpcy5zdG9yZXNbIGlkIF0gJiYgdGhpcy5zdG9yZXNbIGlkIF0uZGlzcG9zZSAmJiB0aGlzLnN0b3Jlc1sgaWQgXS5kaXNwb3NlKHJlYXNvbikgKVxuICAgICAgICApXG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIEtlZXAgdGhlIHNjb3BlIHVuc3RhYmxlIHVudGlsIHJlbGVhc2UgaXMgY2FsbGVkXG4gICAgICogQHBhcmFtIHJlYXNvblxuICAgICAqL1xuICAgIHdhaXQoIHJlYXNvbiApIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcIndhaXRcIiwgcmVhc29uKTtcbiAgICAgICAgdGhpcy5fc3RhYmxlICYmICF0aGlzLl9fbG9ja3MuYWxsICYmIHRoaXMuZW1pdChcInVuc3RhYmxlXCIsIHRoaXMpO1xuICAgICAgICB0aGlzLl9zdGFibGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fX2xvY2tzLmFsbCsrO1xuICAgICAgICBpZiAoIHJlYXNvbiApIHtcbiAgICAgICAgICAgIHRoaXMuX19sb2Nrc1sgcmVhc29uIF0gPSB0aGlzLl9fbG9ja3NbIHJlYXNvbiBdIHx8IDA7XG4gICAgICAgICAgICB0aGlzLl9fbG9ja3NbIHJlYXNvbiBdKys7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgXG4gICAgLyoqXG4gICAgICogU3RhYmlsaXplIHRoZSBzY29wZSBpZiBubyBtb3JlIGxvY2tzIHJlbWFpbiAod2FpdCBmbilcbiAgICAgKiBAcGFyYW0gcmVhc29uXG4gICAgICovXG4gICAgcmVsZWFzZSggcmVhc29uICkge1xuICAgICAgICBcbiAgICAgICAgaWYgKCByZWFzb24gKSB7XG4gICAgICAgICAgICBpZiAoIHRoaXMuX19sb2Nrc1sgcmVhc29uIF0gPT0gMCApXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlJlbGVhc2UgbW9yZSB0aGFuIGxvY2tpbmcgIVwiLCByZWFzb24pO1xuICAgICAgICAgICAgdGhpcy5fX2xvY2tzWyByZWFzb24gXSA9IHRoaXMuX19sb2Nrc1sgcmVhc29uIF0gfHwgMDtcbiAgICAgICAgICAgIHRoaXMuX19sb2Nrc1sgcmVhc29uIF0tLTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoICFyZWFzb24gJiYgdGhpcy5fX2xvY2tzLmFsbCA9PSAwIClcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJSZWxlYXNlIG1vcmUgdGhhbiBsb2NraW5nICFcIik7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9fbG9ja3MuYWxsLS07XG4gICAgICAgIGlmICggIXRoaXMuX19sb2Nrcy5hbGwgKSB7XG4gICAgICAgICAgICB0aGlzLl8uc3RhYmlsaXplclRNICYmIGNsZWFyVGltZW91dCh0aGlzLl8uc3RhYmlsaXplclRNKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5fLnN0YWJpbGl6ZXJUTSA9IHNldFRpbWVvdXQoXG4gICAgICAgICAgICAgICAgZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuXy5zdGFiaWxpemVyVE0gPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIHRoaXMuX19sb2Nrcy5hbGwgKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fLnByb3BhZ1RNICYmIGNsZWFyVGltZW91dCh0aGlzLl8ucHJvcGFnVE0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9yZXYrKztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc3RhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KFwic3RhYmxlXCIsIHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgIXRoaXMuZGVhZCAmJiB0aGlzLl9wcm9wYWcoKTsvLyBzdGFiaWxpdHkgY2FuIGluZHVjZSBkZXN0cm95XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogUHJvcGFnIHN0b3JlcyB1cGRhdGVzIGJhc2luZyB0aGVpcnMgbGFzdCB1cGRhdGVzXG4gICAgICovXG4gICAgcHJvcGFnKCkge1xuICAgICAgICB0aGlzLl8ucHJvcGFnVE0gJiYgY2xlYXJUaW1lb3V0KHRoaXMuXy5wcm9wYWdUTSk7XG4gICAgICAgIHRoaXMuXy5wcm9wYWdUTSA9IHNldFRpbWVvdXQoXG4gICAgICAgICAgICBlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLl8ucHJvcGFnVE0gPSBudWxsO1xuICAgICAgICAgICAgICAgIHRoaXMuX3Byb3BhZygpXG4gICAgICAgICAgICB9LCAyXG4gICAgICAgICk7XG4gICAgfVxuICAgIFxuICAgIF9wcm9wYWcoKSB7XG4gICAgICAgIGlmICggdGhpcy5fLmZvbGxvd2Vycy5sZW5ndGggKVxuICAgICAgICAgICAgdGhpcy5fLmZvbGxvd2Vycy5mb3JFYWNoKCggeyAwOiBvYmosIDE6IGtleSwgMjogYXMsIDM6IGxhc3RSZXZzLCAzOiByZW1hcHMgfSApID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHRoaXMuZ2V0VXBkYXRlcyhsYXN0UmV2cyk7XG4gICAgICAgICAgICAgICAgaWYgKCAhZGF0YSApIHJldHVybjtcbiAgICAgICAgICAgICAgICBpZiAoIHR5cGVvZiBvYmogIT0gXCJmdW5jdGlvblwiICkge1xuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwic2V0U3RhdGUgXCIsb2JqLCBPYmplY3Qua2V5cyhkYXRhKSlcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBhcyApIG9iai5zZXRTdGF0ZSh7IFsgYXMgXTogZGF0YSB9KTtcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBvYmouc2V0U3RhdGUoZGF0YSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBvYmooZGF0YSwgbGFzdFJldnMgJiYgWyAuLi5sYXN0UmV2cyBdIHx8IFwibm8gcmV2c1wiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gbGFzdFJldnMgJiZcbiAgICAgICAgICAgICAgICAvLyBrZXkuZm9yRWFjaChpZCA9PiAobGFzdFJldnNbaWRdID0gdGhpcy5zdG9yZXNbaWRdICYmXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5zdG9yZXNbaWRdLl9yZXYgfHwgMCkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZW1pdChcInVwZGF0ZVwiLCB0aGlzLmdldFVwZGF0ZXMoKSk7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIGlzIHN0YWJsZVxuICAgICAqIEByZXR1cm5zIGJvb2xcbiAgICAgKi9cbiAgICBpc1N0YWJsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0YWJsZTtcbiAgICB9XG4gICAgXG4gICAgX2FkZENoaWxkKCBjdHggKSB7XG4gICAgICAgIHRoaXMuXy5jaGlsZFNjb3Blcy5wdXNoKGN0eCk7XG4gICAgICAgIHRoaXMuXy5zZWVuQ2hpbGRzKys7XG4gICAgICAgIGxldCBsaXN0cyAgICAgPSB7XG4gICAgICAgICAgICAgICAgJ3N0YWJsZScgICAgICA6IHMgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl8udW5TdGFibGVDaGlsZHMtLTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCAhdGhpcy5fLnVuU3RhYmxlQ2hpbGRzIClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdChcInN0YWJsZVRyZWVcIiwgdGhpcylcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICd1bnN0YWJsZScgICAgOiBzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fLnVuU3RhYmxlQ2hpbGRzKys7XG4gICAgICAgICAgICAgICAgICAgIGlmICggMSA9PSB0aGlzLl8udW5TdGFibGVDaGlsZHMgKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KFwidW5zdGFibGVUcmVlXCIsIHRoaXMpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAnc3RhYmxlVHJlZScgIDogcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuXy51blN0YWJsZUNoaWxkcy0tO1xuICAgICAgICAgICAgICAgICAgICBpZiAoICF0aGlzLl8udW5TdGFibGVDaGlsZHMgKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KFwic3RhYmxlVHJlZVwiLCB0aGlzKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgJ3Vuc3RhYmxlVHJlZSc6IHMgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl8udW5TdGFibGVDaGlsZHMrKztcbiAgICAgICAgICAgICAgICAgICAgaWYgKCAxID09IHRoaXMuXy51blN0YWJsZUNoaWxkcyApXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXQoXCJ1bnN0YWJsZVRyZWVcIiwgdGhpcylcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICdkZXN0cm95JyAgICAgOiBjdHggPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIGN0eC5fLnVuU3RhYmxlQ2hpbGRzIClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuXy51blN0YWJsZUNoaWxkcy0tO1xuICAgICAgICAgICAgICAgICAgICBpZiAoICFjdHguaXNTdGFibGUoKSApXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl8udW5TdGFibGVDaGlsZHMtLTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYgKCAhdGhpcy5fLnVuU3RhYmxlQ2hpbGRzIClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdChcInN0YWJsZVRyZWVcIiwgdGhpcylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgd2FzU3RhYmxlID0gdGhpcy5fLnVuU3RhYmxlQ2hpbGRzO1xuICAgICAgICAvLyFjdHguaXNTdGFibGUoKSAmJiBjb25zb2xlLndhcm4oJ2FkZCB1bnN0YWJsZSBjaGlsZCcpO1xuICAgICAgICAhY3R4LmlzU3RhYmxlKCkgJiYgdGhpcy5fLnVuU3RhYmxlQ2hpbGRzKys7XG4gICAgICAgIGN0eC5fLnVuU3RhYmxlQ2hpbGRzICYmIHRoaXMuXy51blN0YWJsZUNoaWxkcysrO1xuICAgICAgICB0aGlzLl8uY2hpbGRTY29wZXNMaXN0LnB1c2gobGlzdHMpO1xuICAgICAgICBpZiAoICF3YXNTdGFibGUgJiYgdGhpcy5fLnVuU3RhYmxlQ2hpbGRzIClcbiAgICAgICAgICAgIHRoaXMuZW1pdChcInVuc3RhYmxlVHJlZVwiLCB0aGlzKVxuICAgICAgICBjdHgub24obGlzdHMpO1xuICAgIH1cbiAgICBcbiAgICBfcm1DaGlsZCggY3R4ICkge1xuICAgICAgICBsZXQgaSAgICAgICAgID0gdGhpcy5fLmNoaWxkU2NvcGVzLmluZGV4T2YoY3R4KSxcbiAgICAgICAgICAgIHdhc1N0YWJsZSA9IHRoaXMuXy51blN0YWJsZUNoaWxkcztcbiAgICAgICAgaWYgKCBpICE9IC0xICkge1xuICAgICAgICAgICAgdGhpcy5fLmNoaWxkU2NvcGVzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICFjdHguaXNTdGFibGUoKSAmJiB0aGlzLl8udW5TdGFibGVDaGlsZHMtLTtcbiAgICAgICAgICAgIGN0eC5fLnVuU3RhYmxlQ2hpbGRzICYmIHRoaXMuXy51blN0YWJsZUNoaWxkcy0tO1xuICAgICAgICAgICAgY3R4LnVuKHRoaXMuXy5jaGlsZFNjb3Blc0xpc3Quc3BsaWNlKGksIDEpWyAwIF0pO1xuICAgICAgICAgICAgaWYgKCB3YXNTdGFibGUgJiYgIXRoaXMuXy51blN0YWJsZUNoaWxkcyApXG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0KFwic3RhYmxlVHJlZVwiKVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIHJldGFpbiggcmVhc29uICkge1xuICAgICAgICB0aGlzLl9fcmV0YWlucy5hbGwrKztcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcInJldGFpblwiLCB0aGlzLl9pZCwgcmVhc29uKTtcbiAgICAgICAgaWYgKCByZWFzb24gKSB7XG4gICAgICAgICAgICB0aGlzLl9fcmV0YWluc1sgcmVhc29uIF0gPSB0aGlzLl9fcmV0YWluc1sgcmVhc29uIF0gfHwgMDtcbiAgICAgICAgICAgIHRoaXMuX19yZXRhaW5zWyByZWFzb24gXSsrO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGRpc3Bvc2UoIHJlYXNvbiApIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcImRpc3Bvc2VcIiwgdGhpcy5faWQsIHJlYXNvbik7XG4gICAgICAgIGlmICggcmVhc29uICkge1xuICAgICAgICAgICAgaWYgKCAhdGhpcy5fX3JldGFpbnNbIHJlYXNvbiBdIClcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJEaXNwb3NlIG1vcmUgdGhhbiByZXRhaW5pbmcgOiBcIiArIHJlYXNvbik7XG4gICAgICAgICAgICB0aGlzLl9fcmV0YWluc1sgcmVhc29uIF0tLTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKCAhdGhpcy5fX3JldGFpbnMuYWxsIClcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkRpc3Bvc2UgbW9yZSB0aGFuIHJldGFpbmluZyAhXCIpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fX3JldGFpbnMuYWxsLS07XG4gICAgICAgIFxuICAgICAgICBpZiAoICF0aGlzLl9fcmV0YWlucy5hbGwgKSB7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiZGlzcG9zZSBkbyBkZXN0cm95IFwiLCB0aGlzLl9pZCwgdGhpcy5fcGVyc2lzdGVuY2VUbSk7XG4gICAgICAgICAgICBpZiAoIHRoaXMuXy5wZXJzaXN0ZW5jZVRtICkge1xuICAgICAgICAgICAgICAgIHRoaXMuXy5kZXN0cm95VE0gJiYgY2xlYXJUaW1lb3V0KHRoaXMuXy5kZXN0cm95VE0pO1xuICAgICAgICAgICAgICAgIHRoaXMuXy5kZXN0cm95VE0gPSBzZXRUaW1lb3V0KFxuICAgICAgICAgICAgICAgICAgICBlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vdGhpcy50aGVuKHMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgIXRoaXMuX19yZXRhaW5zLmFsbCAmJiAhdGhpcy5kZWFkICYmIHRoaXMuZGVzdHJveSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAvL30pO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB0aGlzLl8ucGVyc2lzdGVuY2VUbVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvL3RoaXMudGhlbihzID0+XG4gICAgICAgICAgICAgICAgKCAhdGhpcy5fX3JldGFpbnMuYWxsICYmICF0aGlzLmRlYWQgJiYgdGhpcy5kZXN0cm95KCkgKVxuICAgICAgICAgICAgICAgIC8vKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBvcmRlciBkZXN0cm95IG9mIGxvY2FsIHN0b3Jlc1xuICAgICAqL1xuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIGxldCBjdHggPSB0aGlzLl8uX3Njb3BlO1xuICAgICAgICAvL2NvbnNvbGUud2FybihcImRlc3Ryb3lcIiwgdGhpcy5faWQpO1xuICAgICAgICB0aGlzLl8uc3RhYmlsaXplclRNICYmIGNsZWFyVGltZW91dCh0aGlzLl8uc3RhYmlsaXplclRNKTtcbiAgICAgICAgdGhpcy5fLnByb3BhZ1RNICYmIGNsZWFyVGltZW91dCh0aGlzLl8ucHJvcGFnVE0pO1xuICAgICAgICBPYmplY3Qua2V5cyhcbiAgICAgICAgICAgIHRoaXMuXy5fbGlzdGVuaW5nXG4gICAgICAgICkuZm9yRWFjaChcbiAgICAgICAgICAgIGlkID0+ICggKCBpZCAhPT0gXCIkcGFyZW50XCIgKSAmJiB0aGlzLl8uX3Njb3BlWyBpZCBdLnJlbW92ZUxpc3RlbmVyKHRoaXMuXy5fbGlzdGVuaW5nWyBpZCBdKSApXG4gICAgICAgICk7XG4gICAgICAgIHdoaWxlICggdGhpcy5fLl9taXhlZExpc3QubGVuZ3RoICkge1xuICAgICAgICAgICAgdGhpcy5fLl9taXhlZFsgMCBdLnJlbW92ZUxpc3RlbmVyKHRoaXMuXy5fbWl4ZWRMaXN0LnNoaWZ0KCkpO1xuICAgICAgICAgICAgdGhpcy5fLl9taXhlZC5zaGlmdCgpLmRpc3Bvc2UoXCJtaXhlZFRvXCIpO1xuICAgICAgICB9XG4gICAgICAgIFsgLi4udGhpcy5fLmZvbGxvd2VycyBdLm1hcChmb2xsb3dlciA9PiB0aGlzLnVuQmluZCguLi5mb2xsb3dlcikpO1xuICAgICAgICBmb3IgKCBsZXQga2V5IGluIGN0eCApXG4gICAgICAgICAgICBpZiAoICFpcy5mbihjdHhbIGtleSBdKSApIHtcbiAgICAgICAgICAgICAgICBpZiAoIGtleSA9PSBcIiRwYXJlbnRcIiApIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICFjdHhbIGtleSBdLl9hdXRvRGVzdHJveSAmJiBjdHhbIGtleSBdLmRpc3Bvc2UoXCJzY29wZWRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIGlmICggdGhpcy5fLl9wYXJlbnRMaXN0ICkge1xuICAgICAgICAgICAgdGhpcy5wYXJlbnQuX3JtQ2hpbGQodGhpcyk7XG4gICAgICAgICAgICB0aGlzLnBhcmVudC5yZW1vdmVMaXN0ZW5lcih0aGlzLl8uX3BhcmVudExpc3QpO1xuICAgICAgICAgICAgdGhpcy5wYXJlbnQuZGlzcG9zZShcImlzTXlQYXJlbnRcIik7XG4gICAgICAgICAgICB0aGlzLl8uX3BhcmVudExpc3QgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGVhZCA9IHRydWU7XG4gICAgICAgIHRoaXMuZW1pdChcImRlc3Ryb3lcIiwgdGhpcyk7XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgLy9pZiAoICF0aGlzLl8uaXNMb2NhbElkIClcbiAgICAgICAgZGVsZXRlIG9wZW5TY29wZXNbIHRoaXMuX2lkIF07XG4gICAgICAgIFxuICAgICAgICAvL3RoaXMuXyA9IG51bGw7XG4gICAgICAgIFxuICAgIH1cbn1cblxuXG5pcy5yc1Njb3BlID0gZnVuY3Rpb24gKCBvYmogKSB7XG4gICAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIFNjb3BlXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNjb3BlO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9TY29wZS5qcyIsInZhciBpcyA9IHJlcXVpcmUoJ2lzJyk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICAuLi5pc1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWxzL2lzLmpzIiwiLyogZ2xvYmFscyB3aW5kb3csIEhUTUxFbGVtZW50ICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqIVxuICogaXNcbiAqIHRoZSBkZWZpbml0aXZlIEphdmFTY3JpcHQgdHlwZSB0ZXN0aW5nIGxpYnJhcnlcbiAqXG4gKiBAY29weXJpZ2h0IDIwMTMtMjAxNCBFbnJpY28gTWFyaW5vIC8gSm9yZGFuIEhhcmJhbmRcbiAqIEBsaWNlbnNlIE1JVFxuICovXG5cbnZhciBvYmpQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG52YXIgb3ducyA9IG9ialByb3RvLmhhc093blByb3BlcnR5O1xudmFyIHRvU3RyID0gb2JqUHJvdG8udG9TdHJpbmc7XG52YXIgc3ltYm9sVmFsdWVPZjtcbmlmICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nKSB7XG4gIHN5bWJvbFZhbHVlT2YgPSBTeW1ib2wucHJvdG90eXBlLnZhbHVlT2Y7XG59XG52YXIgaXNBY3R1YWxOYU4gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9PSB2YWx1ZTtcbn07XG52YXIgTk9OX0hPU1RfVFlQRVMgPSB7XG4gICdib29sZWFuJzogMSxcbiAgbnVtYmVyOiAxLFxuICBzdHJpbmc6IDEsXG4gIHVuZGVmaW5lZDogMVxufTtcblxudmFyIGJhc2U2NFJlZ2V4ID0gL14oW0EtWmEtejAtOSsvXXs0fSkqKFtBLVphLXowLTkrL117NH18W0EtWmEtejAtOSsvXXszfT18W0EtWmEtejAtOSsvXXsyfT09KSQvO1xudmFyIGhleFJlZ2V4ID0gL15bQS1GYS1mMC05XSskLztcblxuLyoqXG4gKiBFeHBvc2UgYGlzYFxuICovXG5cbnZhciBpcyA9IHt9O1xuXG4vKipcbiAqIFRlc3QgZ2VuZXJhbC5cbiAqL1xuXG4vKipcbiAqIGlzLnR5cGVcbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBhIHR5cGUgb2YgYHR5cGVgLlxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIHR5cGVcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgYHZhbHVlYCBpcyBhIHR5cGUgb2YgYHR5cGVgLCBmYWxzZSBvdGhlcndpc2VcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuaXMuYSA9IGlzLnR5cGUgPSBmdW5jdGlvbiAodmFsdWUsIHR5cGUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gdHlwZTtcbn07XG5cbi8qKlxuICogaXMuZGVmaW5lZFxuICogVGVzdCBpZiBgdmFsdWVgIGlzIGRlZmluZWQuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiAndmFsdWUnIGlzIGRlZmluZWQsIGZhbHNlIG90aGVyd2lzZVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5pcy5kZWZpbmVkID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgIT09ICd1bmRlZmluZWQnO1xufTtcblxuLyoqXG4gKiBpcy5lbXB0eVxuICogVGVzdCBpZiBgdmFsdWVgIGlzIGVtcHR5LlxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgYHZhbHVlYCBpcyBlbXB0eSwgZmFsc2Ugb3RoZXJ3aXNlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmlzLmVtcHR5ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHZhciB0eXBlID0gdG9TdHIuY2FsbCh2YWx1ZSk7XG4gIHZhciBrZXk7XG5cbiAgaWYgKHR5cGUgPT09ICdbb2JqZWN0IEFycmF5XScgfHwgdHlwZSA9PT0gJ1tvYmplY3QgQXJndW1lbnRzXScgfHwgdHlwZSA9PT0gJ1tvYmplY3QgU3RyaW5nXScpIHtcbiAgICByZXR1cm4gdmFsdWUubGVuZ3RoID09PSAwO1xuICB9XG5cbiAgaWYgKHR5cGUgPT09ICdbb2JqZWN0IE9iamVjdF0nKSB7XG4gICAgZm9yIChrZXkgaW4gdmFsdWUpIHtcbiAgICAgIGlmIChvd25zLmNhbGwodmFsdWUsIGtleSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiAhdmFsdWU7XG59O1xuXG4vKipcbiAqIGlzLmVxdWFsXG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgZXF1YWwgdG8gYG90aGVyYC5cbiAqXG4gKiBAcGFyYW0ge01peGVkfSB2YWx1ZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcGFyYW0ge01peGVkfSBvdGhlciB2YWx1ZSB0byBjb21wYXJlIHdpdGhcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgYHZhbHVlYCBpcyBlcXVhbCB0byBgb3RoZXJgLCBmYWxzZSBvdGhlcndpc2VcbiAqL1xuXG5pcy5lcXVhbCA9IGZ1bmN0aW9uIGVxdWFsKHZhbHVlLCBvdGhlcikge1xuICBpZiAodmFsdWUgPT09IG90aGVyKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICB2YXIgdHlwZSA9IHRvU3RyLmNhbGwodmFsdWUpO1xuICB2YXIga2V5O1xuXG4gIGlmICh0eXBlICE9PSB0b1N0ci5jYWxsKG90aGVyKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmICh0eXBlID09PSAnW29iamVjdCBPYmplY3RdJykge1xuICAgIGZvciAoa2V5IGluIHZhbHVlKSB7XG4gICAgICBpZiAoIWlzLmVxdWFsKHZhbHVlW2tleV0sIG90aGVyW2tleV0pIHx8ICEoa2V5IGluIG90aGVyKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAoa2V5IGluIG90aGVyKSB7XG4gICAgICBpZiAoIWlzLmVxdWFsKHZhbHVlW2tleV0sIG90aGVyW2tleV0pIHx8ICEoa2V5IGluIHZhbHVlKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKHR5cGUgPT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICBrZXkgPSB2YWx1ZS5sZW5ndGg7XG4gICAgaWYgKGtleSAhPT0gb3RoZXIubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHdoaWxlIChrZXktLSkge1xuICAgICAgaWYgKCFpcy5lcXVhbCh2YWx1ZVtrZXldLCBvdGhlcltrZXldKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKHR5cGUgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXScpIHtcbiAgICByZXR1cm4gdmFsdWUucHJvdG90eXBlID09PSBvdGhlci5wcm90b3R5cGU7XG4gIH1cblxuICBpZiAodHlwZSA9PT0gJ1tvYmplY3QgRGF0ZV0nKSB7XG4gICAgcmV0dXJuIHZhbHVlLmdldFRpbWUoKSA9PT0gb3RoZXIuZ2V0VGltZSgpO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuLyoqXG4gKiBpcy5ob3N0ZWRcbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBob3N0ZWQgYnkgYGhvc3RgLlxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlIHRvIHRlc3RcbiAqIEBwYXJhbSB7TWl4ZWR9IGhvc3QgaG9zdCB0byB0ZXN0IHdpdGhcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgYHZhbHVlYCBpcyBob3N0ZWQgYnkgYGhvc3RgLCBmYWxzZSBvdGhlcndpc2VcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuaXMuaG9zdGVkID0gZnVuY3Rpb24gKHZhbHVlLCBob3N0KSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIGhvc3RbdmFsdWVdO1xuICByZXR1cm4gdHlwZSA9PT0gJ29iamVjdCcgPyAhIWhvc3RbdmFsdWVdIDogIU5PTl9IT1NUX1RZUEVTW3R5cGVdO1xufTtcblxuLyoqXG4gKiBpcy5pbnN0YW5jZVxuICogVGVzdCBpZiBgdmFsdWVgIGlzIGFuIGluc3RhbmNlIG9mIGBjb25zdHJ1Y3RvcmAuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBgdmFsdWVgIGlzIGFuIGluc3RhbmNlIG9mIGBjb25zdHJ1Y3RvcmBcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuaXMuaW5zdGFuY2UgPSBpc1snaW5zdGFuY2VvZiddID0gZnVuY3Rpb24gKHZhbHVlLCBjb25zdHJ1Y3Rvcikge1xuICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBjb25zdHJ1Y3Rvcjtcbn07XG5cbi8qKlxuICogaXMubmlsIC8gaXMubnVsbFxuICogVGVzdCBpZiBgdmFsdWVgIGlzIG51bGwuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBgdmFsdWVgIGlzIG51bGwsIGZhbHNlIG90aGVyd2lzZVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5pcy5uaWwgPSBpc1snbnVsbCddID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA9PT0gbnVsbDtcbn07XG5cbi8qKlxuICogaXMudW5kZWYgLyBpcy51bmRlZmluZWRcbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyB1bmRlZmluZWQuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBgdmFsdWVgIGlzIHVuZGVmaW5lZCwgZmFsc2Ugb3RoZXJ3aXNlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmlzLnVuZGVmID0gaXMudW5kZWZpbmVkID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnO1xufTtcblxuLyoqXG4gKiBUZXN0IGFyZ3VtZW50cy5cbiAqL1xuXG4vKipcbiAqIGlzLmFyZ3NcbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBhbiBhcmd1bWVudHMgb2JqZWN0LlxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgYHZhbHVlYCBpcyBhbiBhcmd1bWVudHMgb2JqZWN0LCBmYWxzZSBvdGhlcndpc2VcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuaXMuYXJncyA9IGlzLmFyZ3VtZW50cyA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICB2YXIgaXNTdGFuZGFyZEFyZ3VtZW50cyA9IHRvU3RyLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBBcmd1bWVudHNdJztcbiAgdmFyIGlzT2xkQXJndW1lbnRzID0gIWlzLmFycmF5KHZhbHVlKSAmJiBpcy5hcnJheWxpa2UodmFsdWUpICYmIGlzLm9iamVjdCh2YWx1ZSkgJiYgaXMuZm4odmFsdWUuY2FsbGVlKTtcbiAgcmV0dXJuIGlzU3RhbmRhcmRBcmd1bWVudHMgfHwgaXNPbGRBcmd1bWVudHM7XG59O1xuXG4vKipcbiAqIFRlc3QgYXJyYXkuXG4gKi9cblxuLyoqXG4gKiBpcy5hcnJheVxuICogVGVzdCBpZiAndmFsdWUnIGlzIGFuIGFycmF5LlxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgYHZhbHVlYCBpcyBhbiBhcnJheSwgZmFsc2Ugb3RoZXJ3aXNlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmlzLmFycmF5ID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIHRvU3RyLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBBcnJheV0nO1xufTtcblxuLyoqXG4gKiBpcy5hcmd1bWVudHMuZW1wdHlcbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBhbiBlbXB0eSBhcmd1bWVudHMgb2JqZWN0LlxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgYHZhbHVlYCBpcyBhbiBlbXB0eSBhcmd1bWVudHMgb2JqZWN0LCBmYWxzZSBvdGhlcndpc2VcbiAqIEBhcGkgcHVibGljXG4gKi9cbmlzLmFyZ3MuZW1wdHkgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIGlzLmFyZ3ModmFsdWUpICYmIHZhbHVlLmxlbmd0aCA9PT0gMDtcbn07XG5cbi8qKlxuICogaXMuYXJyYXkuZW1wdHlcbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBhbiBlbXB0eSBhcnJheS5cbiAqXG4gKiBAcGFyYW0ge01peGVkfSB2YWx1ZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGB2YWx1ZWAgaXMgYW4gZW1wdHkgYXJyYXksIGZhbHNlIG90aGVyd2lzZVxuICogQGFwaSBwdWJsaWNcbiAqL1xuaXMuYXJyYXkuZW1wdHkgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIGlzLmFycmF5KHZhbHVlKSAmJiB2YWx1ZS5sZW5ndGggPT09IDA7XG59O1xuXG4vKipcbiAqIGlzLmFycmF5bGlrZVxuICogVGVzdCBpZiBgdmFsdWVgIGlzIGFuIGFycmF5bGlrZSBvYmplY3QuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBgdmFsdWVgIGlzIGFuIGFyZ3VtZW50cyBvYmplY3QsIGZhbHNlIG90aGVyd2lzZVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5pcy5hcnJheWxpa2UgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuICEhdmFsdWUgJiYgIWlzLmJvb2wodmFsdWUpXG4gICAgJiYgb3ducy5jYWxsKHZhbHVlLCAnbGVuZ3RoJylcbiAgICAmJiBpc0Zpbml0ZSh2YWx1ZS5sZW5ndGgpXG4gICAgJiYgaXMubnVtYmVyKHZhbHVlLmxlbmd0aClcbiAgICAmJiB2YWx1ZS5sZW5ndGggPj0gMDtcbn07XG5cbi8qKlxuICogVGVzdCBib29sZWFuLlxuICovXG5cbi8qKlxuICogaXMuYm9vbFxuICogVGVzdCBpZiBgdmFsdWVgIGlzIGEgYm9vbGVhbi5cbiAqXG4gKiBAcGFyYW0ge01peGVkfSB2YWx1ZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGB2YWx1ZWAgaXMgYSBib29sZWFuLCBmYWxzZSBvdGhlcndpc2VcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuaXMuYm9vbCA9IGlzWydib29sZWFuJ10gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIHRvU3RyLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBCb29sZWFuXSc7XG59O1xuXG4vKipcbiAqIGlzLmZhbHNlXG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgZmFsc2UuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBgdmFsdWVgIGlzIGZhbHNlLCBmYWxzZSBvdGhlcndpc2VcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuaXNbJ2ZhbHNlJ10gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIGlzLmJvb2wodmFsdWUpICYmIEJvb2xlYW4oTnVtYmVyKHZhbHVlKSkgPT09IGZhbHNlO1xufTtcblxuLyoqXG4gKiBpcy50cnVlXG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgdHJ1ZS5cbiAqXG4gKiBAcGFyYW0ge01peGVkfSB2YWx1ZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGB2YWx1ZWAgaXMgdHJ1ZSwgZmFsc2Ugb3RoZXJ3aXNlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmlzWyd0cnVlJ10gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIGlzLmJvb2wodmFsdWUpICYmIEJvb2xlYW4oTnVtYmVyKHZhbHVlKSkgPT09IHRydWU7XG59O1xuXG4vKipcbiAqIFRlc3QgZGF0ZS5cbiAqL1xuXG4vKipcbiAqIGlzLmRhdGVcbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBhIGRhdGUuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBgdmFsdWVgIGlzIGEgZGF0ZSwgZmFsc2Ugb3RoZXJ3aXNlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmlzLmRhdGUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIHRvU3RyLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBEYXRlXSc7XG59O1xuXG4vKipcbiAqIGlzLmRhdGUudmFsaWRcbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGRhdGUuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge0Jvb2xlYW59IHRydWUgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGRhdGUsIGZhbHNlIG90aGVyd2lzZVxuICovXG5pcy5kYXRlLnZhbGlkID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiBpcy5kYXRlKHZhbHVlKSAmJiAhaXNOYU4oTnVtYmVyKHZhbHVlKSk7XG59O1xuXG4vKipcbiAqIFRlc3QgZWxlbWVudC5cbiAqL1xuXG4vKipcbiAqIGlzLmVsZW1lbnRcbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBhbiBodG1sIGVsZW1lbnQuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBgdmFsdWVgIGlzIGFuIEhUTUwgRWxlbWVudCwgZmFsc2Ugb3RoZXJ3aXNlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmlzLmVsZW1lbnQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9PSB1bmRlZmluZWRcbiAgICAmJiB0eXBlb2YgSFRNTEVsZW1lbnQgIT09ICd1bmRlZmluZWQnXG4gICAgJiYgdmFsdWUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudFxuICAgICYmIHZhbHVlLm5vZGVUeXBlID09PSAxO1xufTtcblxuLyoqXG4gKiBUZXN0IGVycm9yLlxuICovXG5cbi8qKlxuICogaXMuZXJyb3JcbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBhbiBlcnJvciBvYmplY3QuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBgdmFsdWVgIGlzIGFuIGVycm9yIG9iamVjdCwgZmFsc2Ugb3RoZXJ3aXNlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmlzLmVycm9yID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiB0b1N0ci5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgRXJyb3JdJztcbn07XG5cbi8qKlxuICogVGVzdCBmdW5jdGlvbi5cbiAqL1xuXG4vKipcbiAqIGlzLmZuIC8gaXMuZnVuY3Rpb24gKGRlcHJlY2F0ZWQpXG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgYSBmdW5jdGlvbi5cbiAqXG4gKiBAcGFyYW0ge01peGVkfSB2YWx1ZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGB2YWx1ZWAgaXMgYSBmdW5jdGlvbiwgZmFsc2Ugb3RoZXJ3aXNlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmlzLmZuID0gaXNbJ2Z1bmN0aW9uJ10gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgdmFyIGlzQWxlcnQgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB2YWx1ZSA9PT0gd2luZG93LmFsZXJ0O1xuICBpZiAoaXNBbGVydCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHZhciBzdHIgPSB0b1N0ci5jYWxsKHZhbHVlKTtcbiAgcmV0dXJuIHN0ciA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJyB8fCBzdHIgPT09ICdbb2JqZWN0IEdlbmVyYXRvckZ1bmN0aW9uXScgfHwgc3RyID09PSAnW29iamVjdCBBc3luY0Z1bmN0aW9uXSc7XG59O1xuXG4vKipcbiAqIFRlc3QgbnVtYmVyLlxuICovXG5cbi8qKlxuICogaXMubnVtYmVyXG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgYSBudW1iZXIuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBgdmFsdWVgIGlzIGEgbnVtYmVyLCBmYWxzZSBvdGhlcndpc2VcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuaXMubnVtYmVyID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiB0b1N0ci5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgTnVtYmVyXSc7XG59O1xuXG4vKipcbiAqIGlzLmluZmluaXRlXG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgcG9zaXRpdmUgb3IgbmVnYXRpdmUgaW5maW5pdHkuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBgdmFsdWVgIGlzIHBvc2l0aXZlIG9yIG5lZ2F0aXZlIEluZmluaXR5LCBmYWxzZSBvdGhlcndpc2VcbiAqIEBhcGkgcHVibGljXG4gKi9cbmlzLmluZmluaXRlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA9PT0gSW5maW5pdHkgfHwgdmFsdWUgPT09IC1JbmZpbml0eTtcbn07XG5cbi8qKlxuICogaXMuZGVjaW1hbFxuICogVGVzdCBpZiBgdmFsdWVgIGlzIGEgZGVjaW1hbCBudW1iZXIuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBgdmFsdWVgIGlzIGEgZGVjaW1hbCBudW1iZXIsIGZhbHNlIG90aGVyd2lzZVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5pcy5kZWNpbWFsID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiBpcy5udW1iZXIodmFsdWUpICYmICFpc0FjdHVhbE5hTih2YWx1ZSkgJiYgIWlzLmluZmluaXRlKHZhbHVlKSAmJiB2YWx1ZSAlIDEgIT09IDA7XG59O1xuXG4vKipcbiAqIGlzLmRpdmlzaWJsZUJ5XG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgZGl2aXNpYmxlIGJ5IGBuYC5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHBhcmFtIHtOdW1iZXJ9IG4gZGl2aWRlbmRcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgYHZhbHVlYCBpcyBkaXZpc2libGUgYnkgYG5gLCBmYWxzZSBvdGhlcndpc2VcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuaXMuZGl2aXNpYmxlQnkgPSBmdW5jdGlvbiAodmFsdWUsIG4pIHtcbiAgdmFyIGlzRGl2aWRlbmRJbmZpbml0ZSA9IGlzLmluZmluaXRlKHZhbHVlKTtcbiAgdmFyIGlzRGl2aXNvckluZmluaXRlID0gaXMuaW5maW5pdGUobik7XG4gIHZhciBpc05vblplcm9OdW1iZXIgPSBpcy5udW1iZXIodmFsdWUpICYmICFpc0FjdHVhbE5hTih2YWx1ZSkgJiYgaXMubnVtYmVyKG4pICYmICFpc0FjdHVhbE5hTihuKSAmJiBuICE9PSAwO1xuICByZXR1cm4gaXNEaXZpZGVuZEluZmluaXRlIHx8IGlzRGl2aXNvckluZmluaXRlIHx8IChpc05vblplcm9OdW1iZXIgJiYgdmFsdWUgJSBuID09PSAwKTtcbn07XG5cbi8qKlxuICogaXMuaW50ZWdlclxuICogVGVzdCBpZiBgdmFsdWVgIGlzIGFuIGludGVnZXIuXG4gKlxuICogQHBhcmFtIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgYHZhbHVlYCBpcyBhbiBpbnRlZ2VyLCBmYWxzZSBvdGhlcndpc2VcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuaXMuaW50ZWdlciA9IGlzWydpbnQnXSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICByZXR1cm4gaXMubnVtYmVyKHZhbHVlKSAmJiAhaXNBY3R1YWxOYU4odmFsdWUpICYmIHZhbHVlICUgMSA9PT0gMDtcbn07XG5cbi8qKlxuICogaXMubWF4aW11bVxuICogVGVzdCBpZiBgdmFsdWVgIGlzIGdyZWF0ZXIgdGhhbiAnb3RoZXJzJyB2YWx1ZXMuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEBwYXJhbSB7QXJyYXl9IG90aGVycyB2YWx1ZXMgdG8gY29tcGFyZSB3aXRoXG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGB2YWx1ZWAgaXMgZ3JlYXRlciB0aGFuIGBvdGhlcnNgIHZhbHVlc1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5pcy5tYXhpbXVtID0gZnVuY3Rpb24gKHZhbHVlLCBvdGhlcnMpIHtcbiAgaWYgKGlzQWN0dWFsTmFOKHZhbHVlKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ05hTiBpcyBub3QgYSB2YWxpZCB2YWx1ZScpO1xuICB9IGVsc2UgaWYgKCFpcy5hcnJheWxpa2Uob3RoZXJzKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ3NlY29uZCBhcmd1bWVudCBtdXN0IGJlIGFycmF5LWxpa2UnKTtcbiAgfVxuICB2YXIgbGVuID0gb3RoZXJzLmxlbmd0aDtcblxuICB3aGlsZSAoLS1sZW4gPj0gMCkge1xuICAgIGlmICh2YWx1ZSA8IG90aGVyc1tsZW5dKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuXG4vKipcbiAqIGlzLm1pbmltdW1cbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBsZXNzIHRoYW4gYG90aGVyc2AgdmFsdWVzLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSB2YWx1ZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcGFyYW0ge0FycmF5fSBvdGhlcnMgdmFsdWVzIHRvIGNvbXBhcmUgd2l0aFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBgdmFsdWVgIGlzIGxlc3MgdGhhbiBgb3RoZXJzYCB2YWx1ZXNcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuaXMubWluaW11bSA9IGZ1bmN0aW9uICh2YWx1ZSwgb3RoZXJzKSB7XG4gIGlmIChpc0FjdHVhbE5hTih2YWx1ZSkpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdOYU4gaXMgbm90IGEgdmFsaWQgdmFsdWUnKTtcbiAgfSBlbHNlIGlmICghaXMuYXJyYXlsaWtlKG90aGVycykpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdzZWNvbmQgYXJndW1lbnQgbXVzdCBiZSBhcnJheS1saWtlJyk7XG4gIH1cbiAgdmFyIGxlbiA9IG90aGVycy5sZW5ndGg7XG5cbiAgd2hpbGUgKC0tbGVuID49IDApIHtcbiAgICBpZiAodmFsdWUgPiBvdGhlcnNbbGVuXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcblxuLyoqXG4gKiBpcy5uYW5cbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBub3QgYSBudW1iZXIuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBgdmFsdWVgIGlzIG5vdCBhIG51bWJlciwgZmFsc2Ugb3RoZXJ3aXNlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmlzLm5hbiA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICByZXR1cm4gIWlzLm51bWJlcih2YWx1ZSkgfHwgdmFsdWUgIT09IHZhbHVlO1xufTtcblxuLyoqXG4gKiBpcy5ldmVuXG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgYW4gZXZlbiBudW1iZXIuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgYHZhbHVlYCBpcyBhbiBldmVuIG51bWJlciwgZmFsc2Ugb3RoZXJ3aXNlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmlzLmV2ZW4gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIGlzLmluZmluaXRlKHZhbHVlKSB8fCAoaXMubnVtYmVyKHZhbHVlKSAmJiB2YWx1ZSA9PT0gdmFsdWUgJiYgdmFsdWUgJSAyID09PSAwKTtcbn07XG5cbi8qKlxuICogaXMub2RkXG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgYW4gb2RkIG51bWJlci5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBgdmFsdWVgIGlzIGFuIG9kZCBudW1iZXIsIGZhbHNlIG90aGVyd2lzZVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5pcy5vZGQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIGlzLmluZmluaXRlKHZhbHVlKSB8fCAoaXMubnVtYmVyKHZhbHVlKSAmJiB2YWx1ZSA9PT0gdmFsdWUgJiYgdmFsdWUgJSAyICE9PSAwKTtcbn07XG5cbi8qKlxuICogaXMuZ2VcbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBncmVhdGVyIHRoYW4gb3IgZXF1YWwgdG8gYG90aGVyYC5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHBhcmFtIHtOdW1iZXJ9IG90aGVyIHZhbHVlIHRvIGNvbXBhcmUgd2l0aFxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuaXMuZ2UgPSBmdW5jdGlvbiAodmFsdWUsIG90aGVyKSB7XG4gIGlmIChpc0FjdHVhbE5hTih2YWx1ZSkgfHwgaXNBY3R1YWxOYU4ob3RoZXIpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignTmFOIGlzIG5vdCBhIHZhbGlkIHZhbHVlJyk7XG4gIH1cbiAgcmV0dXJuICFpcy5pbmZpbml0ZSh2YWx1ZSkgJiYgIWlzLmluZmluaXRlKG90aGVyKSAmJiB2YWx1ZSA+PSBvdGhlcjtcbn07XG5cbi8qKlxuICogaXMuZ3RcbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBncmVhdGVyIHRoYW4gYG90aGVyYC5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHBhcmFtIHtOdW1iZXJ9IG90aGVyIHZhbHVlIHRvIGNvbXBhcmUgd2l0aFxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuaXMuZ3QgPSBmdW5jdGlvbiAodmFsdWUsIG90aGVyKSB7XG4gIGlmIChpc0FjdHVhbE5hTih2YWx1ZSkgfHwgaXNBY3R1YWxOYU4ob3RoZXIpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignTmFOIGlzIG5vdCBhIHZhbGlkIHZhbHVlJyk7XG4gIH1cbiAgcmV0dXJuICFpcy5pbmZpbml0ZSh2YWx1ZSkgJiYgIWlzLmluZmluaXRlKG90aGVyKSAmJiB2YWx1ZSA+IG90aGVyO1xufTtcblxuLyoqXG4gKiBpcy5sZVxuICogVGVzdCBpZiBgdmFsdWVgIGlzIGxlc3MgdGhhbiBvciBlcXVhbCB0byBgb3RoZXJgLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSB2YWx1ZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcGFyYW0ge051bWJlcn0gb3RoZXIgdmFsdWUgdG8gY29tcGFyZSB3aXRoXG4gKiBAcmV0dXJuIHtCb29sZWFufSBpZiAndmFsdWUnIGlzIGxlc3MgdGhhbiBvciBlcXVhbCB0byAnb3RoZXInXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmlzLmxlID0gZnVuY3Rpb24gKHZhbHVlLCBvdGhlcikge1xuICBpZiAoaXNBY3R1YWxOYU4odmFsdWUpIHx8IGlzQWN0dWFsTmFOKG90aGVyKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ05hTiBpcyBub3QgYSB2YWxpZCB2YWx1ZScpO1xuICB9XG4gIHJldHVybiAhaXMuaW5maW5pdGUodmFsdWUpICYmICFpcy5pbmZpbml0ZShvdGhlcikgJiYgdmFsdWUgPD0gb3RoZXI7XG59O1xuXG4vKipcbiAqIGlzLmx0XG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgbGVzcyB0aGFuIGBvdGhlcmAuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEBwYXJhbSB7TnVtYmVyfSBvdGhlciB2YWx1ZSB0byBjb21wYXJlIHdpdGhcbiAqIEByZXR1cm4ge0Jvb2xlYW59IGlmIGB2YWx1ZWAgaXMgbGVzcyB0aGFuIGBvdGhlcmBcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuaXMubHQgPSBmdW5jdGlvbiAodmFsdWUsIG90aGVyKSB7XG4gIGlmIChpc0FjdHVhbE5hTih2YWx1ZSkgfHwgaXNBY3R1YWxOYU4ob3RoZXIpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignTmFOIGlzIG5vdCBhIHZhbGlkIHZhbHVlJyk7XG4gIH1cbiAgcmV0dXJuICFpcy5pbmZpbml0ZSh2YWx1ZSkgJiYgIWlzLmluZmluaXRlKG90aGVyKSAmJiB2YWx1ZSA8IG90aGVyO1xufTtcblxuLyoqXG4gKiBpcy53aXRoaW5cbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyB3aXRoaW4gYHN0YXJ0YCBhbmQgYGZpbmlzaGAuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEBwYXJhbSB7TnVtYmVyfSBzdGFydCBsb3dlciBib3VuZFxuICogQHBhcmFtIHtOdW1iZXJ9IGZpbmlzaCB1cHBlciBib3VuZFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiAndmFsdWUnIGlzIGlzIHdpdGhpbiAnc3RhcnQnIGFuZCAnZmluaXNoJ1xuICogQGFwaSBwdWJsaWNcbiAqL1xuaXMud2l0aGluID0gZnVuY3Rpb24gKHZhbHVlLCBzdGFydCwgZmluaXNoKSB7XG4gIGlmIChpc0FjdHVhbE5hTih2YWx1ZSkgfHwgaXNBY3R1YWxOYU4oc3RhcnQpIHx8IGlzQWN0dWFsTmFOKGZpbmlzaCkpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdOYU4gaXMgbm90IGEgdmFsaWQgdmFsdWUnKTtcbiAgfSBlbHNlIGlmICghaXMubnVtYmVyKHZhbHVlKSB8fCAhaXMubnVtYmVyKHN0YXJ0KSB8fCAhaXMubnVtYmVyKGZpbmlzaCkpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdhbGwgYXJndW1lbnRzIG11c3QgYmUgbnVtYmVycycpO1xuICB9XG4gIHZhciBpc0FueUluZmluaXRlID0gaXMuaW5maW5pdGUodmFsdWUpIHx8IGlzLmluZmluaXRlKHN0YXJ0KSB8fCBpcy5pbmZpbml0ZShmaW5pc2gpO1xuICByZXR1cm4gaXNBbnlJbmZpbml0ZSB8fCAodmFsdWUgPj0gc3RhcnQgJiYgdmFsdWUgPD0gZmluaXNoKTtcbn07XG5cbi8qKlxuICogVGVzdCBvYmplY3QuXG4gKi9cblxuLyoqXG4gKiBpcy5vYmplY3RcbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBhbiBvYmplY3QuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBgdmFsdWVgIGlzIGFuIG9iamVjdCwgZmFsc2Ugb3RoZXJ3aXNlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5pcy5vYmplY3QgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIHRvU3RyLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBPYmplY3RdJztcbn07XG5cbi8qKlxuICogaXMucHJpbWl0aXZlXG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgYSBwcmltaXRpdmUuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBgdmFsdWVgIGlzIGEgcHJpbWl0aXZlLCBmYWxzZSBvdGhlcndpc2VcbiAqIEBhcGkgcHVibGljXG4gKi9cbmlzLnByaW1pdGl2ZSA9IGZ1bmN0aW9uIGlzUHJpbWl0aXZlKHZhbHVlKSB7XG4gIGlmICghdmFsdWUpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyB8fCBpcy5vYmplY3QodmFsdWUpIHx8IGlzLmZuKHZhbHVlKSB8fCBpcy5hcnJheSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59O1xuXG4vKipcbiAqIGlzLmhhc2hcbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBhIGhhc2ggLSBhIHBsYWluIG9iamVjdCBsaXRlcmFsLlxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgYHZhbHVlYCBpcyBhIGhhc2gsIGZhbHNlIG90aGVyd2lzZVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5pcy5oYXNoID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiBpcy5vYmplY3QodmFsdWUpICYmIHZhbHVlLmNvbnN0cnVjdG9yID09PSBPYmplY3QgJiYgIXZhbHVlLm5vZGVUeXBlICYmICF2YWx1ZS5zZXRJbnRlcnZhbDtcbn07XG5cbi8qKlxuICogVGVzdCByZWdleHAuXG4gKi9cblxuLyoqXG4gKiBpcy5yZWdleHBcbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBhIHJlZ3VsYXIgZXhwcmVzc2lvbi5cbiAqXG4gKiBAcGFyYW0ge01peGVkfSB2YWx1ZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGB2YWx1ZWAgaXMgYSByZWdleHAsIGZhbHNlIG90aGVyd2lzZVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5pcy5yZWdleHAgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIHRvU3RyLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBSZWdFeHBdJztcbn07XG5cbi8qKlxuICogVGVzdCBzdHJpbmcuXG4gKi9cblxuLyoqXG4gKiBpcy5zdHJpbmdcbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBhIHN0cmluZy5cbiAqXG4gKiBAcGFyYW0ge01peGVkfSB2YWx1ZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmICd2YWx1ZScgaXMgYSBzdHJpbmcsIGZhbHNlIG90aGVyd2lzZVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5pcy5zdHJpbmcgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIHRvU3RyLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBTdHJpbmddJztcbn07XG5cbi8qKlxuICogVGVzdCBiYXNlNjQgc3RyaW5nLlxuICovXG5cbi8qKlxuICogaXMuYmFzZTY0XG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBiYXNlNjQgZW5jb2RlZCBzdHJpbmcuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiAndmFsdWUnIGlzIGEgYmFzZTY0IGVuY29kZWQgc3RyaW5nLCBmYWxzZSBvdGhlcndpc2VcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuaXMuYmFzZTY0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiBpcy5zdHJpbmcodmFsdWUpICYmICghdmFsdWUubGVuZ3RoIHx8IGJhc2U2NFJlZ2V4LnRlc3QodmFsdWUpKTtcbn07XG5cbi8qKlxuICogVGVzdCBiYXNlNjQgc3RyaW5nLlxuICovXG5cbi8qKlxuICogaXMuaGV4XG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBoZXggZW5jb2RlZCBzdHJpbmcuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiAndmFsdWUnIGlzIGEgaGV4IGVuY29kZWQgc3RyaW5nLCBmYWxzZSBvdGhlcndpc2VcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuaXMuaGV4ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiBpcy5zdHJpbmcodmFsdWUpICYmICghdmFsdWUubGVuZ3RoIHx8IGhleFJlZ2V4LnRlc3QodmFsdWUpKTtcbn07XG5cbi8qKlxuICogaXMuc3ltYm9sXG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgYW4gRVM2IFN5bWJvbFxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgYHZhbHVlYCBpcyBhIFN5bWJvbCwgZmFsc2Ugb3RoZXJpc2VcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuaXMuc3ltYm9sID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIHRvU3RyLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBTeW1ib2xdJyAmJiB0eXBlb2Ygc3ltYm9sVmFsdWVPZi5jYWxsKHZhbHVlKSA9PT0gJ3N5bWJvbCc7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2lzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBpcyA9IHJlcXVpcmUoJy4vaXMnKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB3YWxrblNldCggb2JqLCBwYXRoLCB2YWx1ZSwgc3RhY2sgKSB7XHJcbiAgICBpZiAoIGlzLnN0cmluZyhwYXRoKSApXHJcbiAgICAgICAgcGF0aCA9IHBhdGguc3BsaXQoJy4nKTtcclxuICAgIGlmICggIXBhdGgubGVuZ3RoIClcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICBlbHNlIGlmICggcGF0aC5sZW5ndGggPT0gMSApXHJcbiAgICAgICAgcmV0dXJuIG9ialsgcGF0aFsgMCBdIF0gPSBzdGFja1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBbIC4uLiggb2JqWyBwYXRoWyAwIF0gXSB8fCBbXSApLCB2YWx1ZSBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHZhbHVlO1xyXG4gICAgZWxzZVxyXG4gICAgICAgIHJldHVybiB3YWxrblNldChcclxuICAgICAgICAgICAgb2JqWyBwYXRoWyAwIF0gXSA9XHJcbiAgICAgICAgICAgICAgICBvYmpbIHBhdGhbIDAgXSBdIHx8IHt9LFxyXG4gICAgICAgICAgICBwYXRoLnNsaWNlKDEpLFxyXG4gICAgICAgICAgICB2YWx1ZSwgc3RhY2tcclxuICAgICAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gd2Fsa25HZXQoIG9iaiwgcGF0aCwgaXNLZXkgKSB7XHJcbiAgICBpZiAoIGlzLnN0cmluZyhwYXRoKSApXHJcbiAgICAgICAgcGF0aCA9IHBhdGguc3BsaXQoJy4nKTtcclxuICAgIHJldHVybiBwYXRoLmxlbmd0aFxyXG4gICAgICAgICAgID8gb2JqWyBwYXRoWyAwIF0gXSAmJiB3YWxrbkdldChvYmpbIHBhdGhbIDAgXSBdLCBwYXRoLnNsaWNlKDEpKVxyXG4gICAgICAgICAgIDogb2JqO1xyXG59XHJcblxyXG4vL0B0b2RvXHJcbmV4cG9ydCBmdW5jdGlvbiBrZXlXYWxrblNldCggb2JqLCBwYXRoLCB2YWx1ZSwgc3RhY2sgKSB7XHJcbiAgICBpZiAoIGlzLnN0cmluZyhwYXRoKSApXHJcbiAgICAgICAgcGF0aCA9IHBhdGguc3BsaXQoLyhcXD58XFwvKS9pZykuZmlsdGVyKHYgPT4gKCB2ICE9PSAnPicgJiYgdiApKTtcclxuICAgIHJldHVybiB3YWxrblNldChvYmosIHBhdGgsIHZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGtleVdhbGtuR2V0KCBvYmosIHBhdGgsIGlzS2V5ICkge1xyXG4gICAgaWYgKCBpcy5zdHJpbmcocGF0aCkgKVxyXG4gICAgICAgIHBhdGggPSBwYXRoLnNwbGl0KC8oXFw+fFxcLykvaWcpLmZpbHRlcih2ID0+ICggdiAhPT0gJz4nICYmIHYgKSk7XHJcbiAgICByZXR1cm4gcGF0aC5sZW5ndGhcclxuICAgICAgICAgICA/IG9ialsgcGF0aFsgMCBdIF0gJiYgd2Fsa25HZXQob2JqWyBwYXRoWyAwIF0gXSwgcGF0aC5zbGljZSgxKSlcclxuICAgICAgICAgICA6IG9iajtcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlscy91dGlscy5qcyIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpICAyMDE4IFdpc2UgV2lsZCBXZWIgLlxuICpcbiAqICBNSVQgTGljZW5zZVxuICogIFxuICogIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqICBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiAgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqICBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqICBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICogIFxuICogIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuICogIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKiAgXG4gKiAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqICBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG4gKiAgU09GVFdBUkUuXG4gKiAgXG4gKiBAYXV0aG9yIDogTmF0aGFuYWVsIEJyYXVuXG4gKiBAY29udGFjdCA6IGNhaXBpbGFic0BnbWFpbC5jb21cbiAqL1xudmFyIGlzID0gcmVxdWlyZSgnaXMnKTtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVtaXR0ZXIge1xuICAgIF9ldmVudHMgPSB7fTtcbiAgICBcbiAgICBvbiggZXZ0LCBjYiApIHtcbiAgICAgICAgaWYgKCAhaXMuc3RyaW5nKGV2dCkgJiYgZXZ0IClcbiAgICAgICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhldnQpLmZvckVhY2goayA9PiB0aGlzLm9uKGssIGV2dFtrXSkpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fZXZlbnRzW2V2dF0gPSB0aGlzLl9ldmVudHNbZXZ0XSB8fCBbXTtcbiAgICAgICAgdGhpcy5fZXZlbnRzW2V2dF0ucHVzaChjYik7XG4gICAgICAgIFxuICAgIH1cbiAgICBcbiAgICB1biggZXZ0LCBjYiApIHtcbiAgICAgICAgaWYgKCAhaXMuc3RyaW5nKGV2dCkgJiYgZXZ0IClcbiAgICAgICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhldnQpLmZvckVhY2goayA9PiB0aGlzLnVuKGssIGV2dFtrXSkpO1xuICAgICAgICBcbiAgICAgICAgaWYgKCAhdGhpcy5fZXZlbnRzW2V2dF0gKSByZXR1cm47XG4gICAgICAgIHZhciBpID0gdGhpcy5fZXZlbnRzW2V2dF0uaW5kZXhPZihjYik7XG4gICAgICAgIHRoaXMuX2V2ZW50c1tldnRdLnNwbGljZShpLCAxKTtcbiAgICB9XG4gICAgXG4gICAgZW1pdCggZXZ0LCAuLi5hcmd6ICkge1xuICAgICAgICBpZiAoICF0aGlzLl9ldmVudHNbZXZ0XSApIHJldHVybjtcbiAgICAgICAgbGV0IGxpc3RzID0gWy4uLnRoaXMuX2V2ZW50c1tldnRdXTtcbiAgICAgICAgXG4gICAgICAgIGZvciAoIHZhciBpID0gMDsgaSA8IGxpc3RzLmxlbmd0aDsgaSsrIClcbiAgICAgICAgICAgIGxpc3RzW2ldKC4uLmFyZ3opXG4gICAgfVxuICAgIFxuICAgIGFkZExpc3RlbmVyKCkge1xuICAgICAgICB0aGlzLm9uKC4uLmFyZ3VtZW50cyk7XG4gICAgfVxuICAgIFxuICAgIHJlbW92ZUxpc3RlbmVyKCkge1xuICAgICAgICB0aGlzLnVuKC4uLmFyZ3VtZW50cyk7XG4gICAgfVxuICAgIFxuICAgIHJlbW92ZUFsbExpc3RlbmVycygpIHtcbiAgICAgICAgdGhpcy5fZXZlbnRzID0ge307XG4gICAgfVxuICAgIFxuICAgIG9uY2UoIGV2dCwgY2IgKSB7XG4gICAgICAgIGxldCBmbjtcbiAgICAgICAgdGhpcy5vbihldnQsIGZuID0gKCAuLi5hcmd6ICkgPT4ge1xuICAgICAgICAgICAgdGhpcy51bihldnQsIGZuKTtcbiAgICAgICAgICAgIGNiKC4uLmFyZ3opXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBcbiAgICBcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbHMvRW1pdHRlci5qcyIsIid1c2Ugc3RyaWN0Jztcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9saWIvaW5kZXgnKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zaG9ydGlkL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxudmFyIGFscGhhYmV0ID0gcmVxdWlyZSgnLi9hbHBoYWJldCcpO1xudmFyIGVuY29kZSA9IHJlcXVpcmUoJy4vZW5jb2RlJyk7XG52YXIgZGVjb2RlID0gcmVxdWlyZSgnLi9kZWNvZGUnKTtcbnZhciBidWlsZCA9IHJlcXVpcmUoJy4vYnVpbGQnKTtcbnZhciBpc1ZhbGlkID0gcmVxdWlyZSgnLi9pcy12YWxpZCcpO1xuXG4vLyBpZiB5b3UgYXJlIHVzaW5nIGNsdXN0ZXIgb3IgbXVsdGlwbGUgc2VydmVycyB1c2UgdGhpcyB0byBtYWtlIGVhY2ggaW5zdGFuY2Vcbi8vIGhhcyBhIHVuaXF1ZSB2YWx1ZSBmb3Igd29ya2VyXG4vLyBOb3RlOiBJIGRvbid0IGtub3cgaWYgdGhpcyBpcyBhdXRvbWF0aWNhbGx5IHNldCB3aGVuIHVzaW5nIHRoaXJkXG4vLyBwYXJ0eSBjbHVzdGVyIHNvbHV0aW9ucyBzdWNoIGFzIHBtMi5cbnZhciBjbHVzdGVyV29ya2VySWQgPSByZXF1aXJlKCcuL3V0aWwvY2x1c3Rlci13b3JrZXItaWQnKSB8fCAwO1xuXG4vKipcbiAqIFNldCB0aGUgc2VlZC5cbiAqIEhpZ2hseSByZWNvbW1lbmRlZCBpZiB5b3UgZG9uJ3Qgd2FudCBwZW9wbGUgdG8gdHJ5IHRvIGZpZ3VyZSBvdXQgeW91ciBpZCBzY2hlbWEuXG4gKiBleHBvc2VkIGFzIHNob3J0aWQuc2VlZChpbnQpXG4gKiBAcGFyYW0gc2VlZCBJbnRlZ2VyIHZhbHVlIHRvIHNlZWQgdGhlIHJhbmRvbSBhbHBoYWJldC4gIEFMV0FZUyBVU0UgVEhFIFNBTUUgU0VFRCBvciB5b3UgbWlnaHQgZ2V0IG92ZXJsYXBzLlxuICovXG5mdW5jdGlvbiBzZWVkKHNlZWRWYWx1ZSkge1xuICAgIGFscGhhYmV0LnNlZWQoc2VlZFZhbHVlKTtcbiAgICByZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8qKlxuICogU2V0IHRoZSBjbHVzdGVyIHdvcmtlciBvciBtYWNoaW5lIGlkXG4gKiBleHBvc2VkIGFzIHNob3J0aWQud29ya2VyKGludClcbiAqIEBwYXJhbSB3b3JrZXJJZCB3b3JrZXIgbXVzdCBiZSBwb3NpdGl2ZSBpbnRlZ2VyLiAgTnVtYmVyIGxlc3MgdGhhbiAxNiBpcyByZWNvbW1lbmRlZC5cbiAqIHJldHVybnMgc2hvcnRpZCBtb2R1bGUgc28gaXQgY2FuIGJlIGNoYWluZWQuXG4gKi9cbmZ1bmN0aW9uIHdvcmtlcih3b3JrZXJJZCkge1xuICAgIGNsdXN0ZXJXb3JrZXJJZCA9IHdvcmtlcklkO1xuICAgIHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLyoqXG4gKlxuICogc2V0cyBuZXcgY2hhcmFjdGVycyB0byB1c2UgaW4gdGhlIGFscGhhYmV0XG4gKiByZXR1cm5zIHRoZSBzaHVmZmxlZCBhbHBoYWJldFxuICovXG5mdW5jdGlvbiBjaGFyYWN0ZXJzKG5ld0NoYXJhY3RlcnMpIHtcbiAgICBpZiAobmV3Q2hhcmFjdGVycyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGFscGhhYmV0LmNoYXJhY3RlcnMobmV3Q2hhcmFjdGVycyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFscGhhYmV0LnNodWZmbGVkKCk7XG59XG5cbi8qKlxuICogR2VuZXJhdGUgdW5pcXVlIGlkXG4gKiBSZXR1cm5zIHN0cmluZyBpZFxuICovXG5mdW5jdGlvbiBnZW5lcmF0ZSgpIHtcbiAgcmV0dXJuIGJ1aWxkKGNsdXN0ZXJXb3JrZXJJZCk7XG59XG5cbi8vIEV4cG9ydCBhbGwgb3RoZXIgZnVuY3Rpb25zIGFzIHByb3BlcnRpZXMgb2YgdGhlIGdlbmVyYXRlIGZ1bmN0aW9uXG5tb2R1bGUuZXhwb3J0cyA9IGdlbmVyYXRlO1xubW9kdWxlLmV4cG9ydHMuZ2VuZXJhdGUgPSBnZW5lcmF0ZTtcbm1vZHVsZS5leHBvcnRzLnNlZWQgPSBzZWVkO1xubW9kdWxlLmV4cG9ydHMud29ya2VyID0gd29ya2VyO1xubW9kdWxlLmV4cG9ydHMuY2hhcmFjdGVycyA9IGNoYXJhY3RlcnM7XG5tb2R1bGUuZXhwb3J0cy5kZWNvZGUgPSBkZWNvZGU7XG5tb2R1bGUuZXhwb3J0cy5pc1ZhbGlkID0gaXNWYWxpZDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zaG9ydGlkL2xpYi9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbnZhciByYW5kb21Gcm9tU2VlZCA9IHJlcXVpcmUoJy4vcmFuZG9tL3JhbmRvbS1mcm9tLXNlZWQnKTtcblxudmFyIE9SSUdJTkFMID0gJzAxMjM0NTY3ODlhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ekFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaXy0nO1xudmFyIGFscGhhYmV0O1xudmFyIHByZXZpb3VzU2VlZDtcblxudmFyIHNodWZmbGVkO1xuXG5mdW5jdGlvbiByZXNldCgpIHtcbiAgICBzaHVmZmxlZCA9IGZhbHNlO1xufVxuXG5mdW5jdGlvbiBzZXRDaGFyYWN0ZXJzKF9hbHBoYWJldF8pIHtcbiAgICBpZiAoIV9hbHBoYWJldF8pIHtcbiAgICAgICAgaWYgKGFscGhhYmV0ICE9PSBPUklHSU5BTCkge1xuICAgICAgICAgICAgYWxwaGFiZXQgPSBPUklHSU5BTDtcbiAgICAgICAgICAgIHJlc2V0KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChfYWxwaGFiZXRfID09PSBhbHBoYWJldCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKF9hbHBoYWJldF8ubGVuZ3RoICE9PSBPUklHSU5BTC5sZW5ndGgpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDdXN0b20gYWxwaGFiZXQgZm9yIHNob3J0aWQgbXVzdCBiZSAnICsgT1JJR0lOQUwubGVuZ3RoICsgJyB1bmlxdWUgY2hhcmFjdGVycy4gWW91IHN1Ym1pdHRlZCAnICsgX2FscGhhYmV0Xy5sZW5ndGggKyAnIGNoYXJhY3RlcnM6ICcgKyBfYWxwaGFiZXRfKTtcbiAgICB9XG5cbiAgICB2YXIgdW5pcXVlID0gX2FscGhhYmV0Xy5zcGxpdCgnJykuZmlsdGVyKGZ1bmN0aW9uKGl0ZW0sIGluZCwgYXJyKXtcbiAgICAgICByZXR1cm4gaW5kICE9PSBhcnIubGFzdEluZGV4T2YoaXRlbSk7XG4gICAgfSk7XG5cbiAgICBpZiAodW5pcXVlLmxlbmd0aCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0N1c3RvbSBhbHBoYWJldCBmb3Igc2hvcnRpZCBtdXN0IGJlICcgKyBPUklHSU5BTC5sZW5ndGggKyAnIHVuaXF1ZSBjaGFyYWN0ZXJzLiBUaGVzZSBjaGFyYWN0ZXJzIHdlcmUgbm90IHVuaXF1ZTogJyArIHVuaXF1ZS5qb2luKCcsICcpKTtcbiAgICB9XG5cbiAgICBhbHBoYWJldCA9IF9hbHBoYWJldF87XG4gICAgcmVzZXQoKTtcbn1cblxuZnVuY3Rpb24gY2hhcmFjdGVycyhfYWxwaGFiZXRfKSB7XG4gICAgc2V0Q2hhcmFjdGVycyhfYWxwaGFiZXRfKTtcbiAgICByZXR1cm4gYWxwaGFiZXQ7XG59XG5cbmZ1bmN0aW9uIHNldFNlZWQoc2VlZCkge1xuICAgIHJhbmRvbUZyb21TZWVkLnNlZWQoc2VlZCk7XG4gICAgaWYgKHByZXZpb3VzU2VlZCAhPT0gc2VlZCkge1xuICAgICAgICByZXNldCgpO1xuICAgICAgICBwcmV2aW91c1NlZWQgPSBzZWVkO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gc2h1ZmZsZSgpIHtcbiAgICBpZiAoIWFscGhhYmV0KSB7XG4gICAgICAgIHNldENoYXJhY3RlcnMoT1JJR0lOQUwpO1xuICAgIH1cblxuICAgIHZhciBzb3VyY2VBcnJheSA9IGFscGhhYmV0LnNwbGl0KCcnKTtcbiAgICB2YXIgdGFyZ2V0QXJyYXkgPSBbXTtcbiAgICB2YXIgciA9IHJhbmRvbUZyb21TZWVkLm5leHRWYWx1ZSgpO1xuICAgIHZhciBjaGFyYWN0ZXJJbmRleDtcblxuICAgIHdoaWxlIChzb3VyY2VBcnJheS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHIgPSByYW5kb21Gcm9tU2VlZC5uZXh0VmFsdWUoKTtcbiAgICAgICAgY2hhcmFjdGVySW5kZXggPSBNYXRoLmZsb29yKHIgKiBzb3VyY2VBcnJheS5sZW5ndGgpO1xuICAgICAgICB0YXJnZXRBcnJheS5wdXNoKHNvdXJjZUFycmF5LnNwbGljZShjaGFyYWN0ZXJJbmRleCwgMSlbMF0pO1xuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0QXJyYXkuam9pbignJyk7XG59XG5cbmZ1bmN0aW9uIGdldFNodWZmbGVkKCkge1xuICAgIGlmIChzaHVmZmxlZCkge1xuICAgICAgICByZXR1cm4gc2h1ZmZsZWQ7XG4gICAgfVxuICAgIHNodWZmbGVkID0gc2h1ZmZsZSgpO1xuICAgIHJldHVybiBzaHVmZmxlZDtcbn1cblxuLyoqXG4gKiBsb29rdXAgc2h1ZmZsZWQgbGV0dGVyXG4gKiBAcGFyYW0gaW5kZXhcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGxvb2t1cChpbmRleCkge1xuICAgIHZhciBhbHBoYWJldFNodWZmbGVkID0gZ2V0U2h1ZmZsZWQoKTtcbiAgICByZXR1cm4gYWxwaGFiZXRTaHVmZmxlZFtpbmRleF07XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIGNoYXJhY3RlcnM6IGNoYXJhY3RlcnMsXG4gICAgc2VlZDogc2V0U2VlZCxcbiAgICBsb29rdXA6IGxvb2t1cCxcbiAgICBzaHVmZmxlZDogZ2V0U2h1ZmZsZWRcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc2hvcnRpZC9saWIvYWxwaGFiZXQuanNcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG4vLyBGb3VuZCB0aGlzIHNlZWQtYmFzZWQgcmFuZG9tIGdlbmVyYXRvciBzb21ld2hlcmVcbi8vIEJhc2VkIG9uIFRoZSBDZW50cmFsIFJhbmRvbWl6ZXIgMS4zIChDKSAxOTk3IGJ5IFBhdWwgSG91bGUgKGhvdWxlQG1zYy5jb3JuZWxsLmVkdSlcblxudmFyIHNlZWQgPSAxO1xuXG4vKipcbiAqIHJldHVybiBhIHJhbmRvbSBudW1iZXIgYmFzZWQgb24gYSBzZWVkXG4gKiBAcGFyYW0gc2VlZFxuICogQHJldHVybnMge251bWJlcn1cbiAqL1xuZnVuY3Rpb24gZ2V0TmV4dFZhbHVlKCkge1xuICAgIHNlZWQgPSAoc2VlZCAqIDkzMDEgKyA0OTI5NykgJSAyMzMyODA7XG4gICAgcmV0dXJuIHNlZWQvKDIzMzI4MC4wKTtcbn1cblxuZnVuY3Rpb24gc2V0U2VlZChfc2VlZF8pIHtcbiAgICBzZWVkID0gX3NlZWRfO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBuZXh0VmFsdWU6IGdldE5leHRWYWx1ZSxcbiAgICBzZWVkOiBzZXRTZWVkXG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Nob3J0aWQvbGliL3JhbmRvbS9yYW5kb20tZnJvbS1zZWVkLmpzXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxudmFyIHJhbmRvbUJ5dGUgPSByZXF1aXJlKCcuL3JhbmRvbS9yYW5kb20tYnl0ZScpO1xuXG5mdW5jdGlvbiBlbmNvZGUobG9va3VwLCBudW1iZXIpIHtcbiAgICB2YXIgbG9vcENvdW50ZXIgPSAwO1xuICAgIHZhciBkb25lO1xuXG4gICAgdmFyIHN0ciA9ICcnO1xuXG4gICAgd2hpbGUgKCFkb25lKSB7XG4gICAgICAgIHN0ciA9IHN0ciArIGxvb2t1cCggKCAobnVtYmVyID4+ICg0ICogbG9vcENvdW50ZXIpKSAmIDB4MGYgKSB8IHJhbmRvbUJ5dGUoKSApO1xuICAgICAgICBkb25lID0gbnVtYmVyIDwgKE1hdGgucG93KDE2LCBsb29wQ291bnRlciArIDEgKSApO1xuICAgICAgICBsb29wQ291bnRlcisrO1xuICAgIH1cbiAgICByZXR1cm4gc3RyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGVuY29kZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zaG9ydGlkL2xpYi9lbmNvZGUuanNcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxudmFyIGNyeXB0byA9IHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnICYmICh3aW5kb3cuY3J5cHRvIHx8IHdpbmRvdy5tc0NyeXB0byk7IC8vIElFIDExIHVzZXMgd2luZG93Lm1zQ3J5cHRvXG5cbmZ1bmN0aW9uIHJhbmRvbUJ5dGUoKSB7XG4gICAgaWYgKCFjcnlwdG8gfHwgIWNyeXB0by5nZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDI1NikgJiAweDMwO1xuICAgIH1cbiAgICB2YXIgZGVzdCA9IG5ldyBVaW50OEFycmF5KDEpO1xuICAgIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMoZGVzdCk7XG4gICAgcmV0dXJuIGRlc3RbMF0gJiAweDMwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHJhbmRvbUJ5dGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc2hvcnRpZC9saWIvcmFuZG9tL3JhbmRvbS1ieXRlLWJyb3dzZXIuanNcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcbnZhciBhbHBoYWJldCA9IHJlcXVpcmUoJy4vYWxwaGFiZXQnKTtcblxuLyoqXG4gKiBEZWNvZGUgdGhlIGlkIHRvIGdldCB0aGUgdmVyc2lvbiBhbmQgd29ya2VyXG4gKiBNYWlubHkgZm9yIGRlYnVnZ2luZyBhbmQgdGVzdGluZy5cbiAqIEBwYXJhbSBpZCAtIHRoZSBzaG9ydGlkLWdlbmVyYXRlZCBpZC5cbiAqL1xuZnVuY3Rpb24gZGVjb2RlKGlkKSB7XG4gICAgdmFyIGNoYXJhY3RlcnMgPSBhbHBoYWJldC5zaHVmZmxlZCgpO1xuICAgIHJldHVybiB7XG4gICAgICAgIHZlcnNpb246IGNoYXJhY3RlcnMuaW5kZXhPZihpZC5zdWJzdHIoMCwgMSkpICYgMHgwZixcbiAgICAgICAgd29ya2VyOiBjaGFyYWN0ZXJzLmluZGV4T2YoaWQuc3Vic3RyKDEsIDEpKSAmIDB4MGZcbiAgICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRlY29kZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zaG9ydGlkL2xpYi9kZWNvZGUuanNcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxudmFyIGVuY29kZSA9IHJlcXVpcmUoJy4vZW5jb2RlJyk7XG52YXIgYWxwaGFiZXQgPSByZXF1aXJlKCcuL2FscGhhYmV0Jyk7XG5cbi8vIElnbm9yZSBhbGwgbWlsbGlzZWNvbmRzIGJlZm9yZSBhIGNlcnRhaW4gdGltZSB0byByZWR1Y2UgdGhlIHNpemUgb2YgdGhlIGRhdGUgZW50cm9weSB3aXRob3V0IHNhY3JpZmljaW5nIHVuaXF1ZW5lc3MuXG4vLyBUaGlzIG51bWJlciBzaG91bGQgYmUgdXBkYXRlZCBldmVyeSB5ZWFyIG9yIHNvIHRvIGtlZXAgdGhlIGdlbmVyYXRlZCBpZCBzaG9ydC5cbi8vIFRvIHJlZ2VuZXJhdGUgYG5ldyBEYXRlKCkgLSAwYCBhbmQgYnVtcCB0aGUgdmVyc2lvbi4gQWx3YXlzIGJ1bXAgdGhlIHZlcnNpb24hXG52YXIgUkVEVUNFX1RJTUUgPSAxNDU5NzA3NjA2NTE4O1xuXG4vLyBkb24ndCBjaGFuZ2UgdW5sZXNzIHdlIGNoYW5nZSB0aGUgYWxnb3Mgb3IgUkVEVUNFX1RJTUVcbi8vIG11c3QgYmUgYW4gaW50ZWdlciBhbmQgbGVzcyB0aGFuIDE2XG52YXIgdmVyc2lvbiA9IDY7XG5cbi8vIENvdW50ZXIgaXMgdXNlZCB3aGVuIHNob3J0aWQgaXMgY2FsbGVkIG11bHRpcGxlIHRpbWVzIGluIG9uZSBzZWNvbmQuXG52YXIgY291bnRlcjtcblxuLy8gUmVtZW1iZXIgdGhlIGxhc3QgdGltZSBzaG9ydGlkIHdhcyBjYWxsZWQgaW4gY2FzZSBjb3VudGVyIGlzIG5lZWRlZC5cbnZhciBwcmV2aW91c1NlY29uZHM7XG5cbi8qKlxuICogR2VuZXJhdGUgdW5pcXVlIGlkXG4gKiBSZXR1cm5zIHN0cmluZyBpZFxuICovXG5mdW5jdGlvbiBidWlsZChjbHVzdGVyV29ya2VySWQpIHtcblxuICAgIHZhciBzdHIgPSAnJztcblxuICAgIHZhciBzZWNvbmRzID0gTWF0aC5mbG9vcigoRGF0ZS5ub3coKSAtIFJFRFVDRV9USU1FKSAqIDAuMDAxKTtcblxuICAgIGlmIChzZWNvbmRzID09PSBwcmV2aW91c1NlY29uZHMpIHtcbiAgICAgICAgY291bnRlcisrO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvdW50ZXIgPSAwO1xuICAgICAgICBwcmV2aW91c1NlY29uZHMgPSBzZWNvbmRzO1xuICAgIH1cblxuICAgIHN0ciA9IHN0ciArIGVuY29kZShhbHBoYWJldC5sb29rdXAsIHZlcnNpb24pO1xuICAgIHN0ciA9IHN0ciArIGVuY29kZShhbHBoYWJldC5sb29rdXAsIGNsdXN0ZXJXb3JrZXJJZCk7XG4gICAgaWYgKGNvdW50ZXIgPiAwKSB7XG4gICAgICAgIHN0ciA9IHN0ciArIGVuY29kZShhbHBoYWJldC5sb29rdXAsIGNvdW50ZXIpO1xuICAgIH1cbiAgICBzdHIgPSBzdHIgKyBlbmNvZGUoYWxwaGFiZXQubG9va3VwLCBzZWNvbmRzKTtcblxuICAgIHJldHVybiBzdHI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYnVpbGQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc2hvcnRpZC9saWIvYnVpbGQuanNcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcbnZhciBhbHBoYWJldCA9IHJlcXVpcmUoJy4vYWxwaGFiZXQnKTtcblxuZnVuY3Rpb24gaXNTaG9ydElkKGlkKSB7XG4gICAgaWYgKCFpZCB8fCB0eXBlb2YgaWQgIT09ICdzdHJpbmcnIHx8IGlkLmxlbmd0aCA8IDYgKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICB2YXIgY2hhcmFjdGVycyA9IGFscGhhYmV0LmNoYXJhY3RlcnMoKTtcbiAgICB2YXIgbGVuID0gaWQubGVuZ3RoO1xuICAgIGZvcih2YXIgaSA9IDA7IGkgPCBsZW47aSsrKSB7XG4gICAgICAgIGlmIChjaGFyYWN0ZXJzLmluZGV4T2YoaWRbaV0pID09PSAtMSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzU2hvcnRJZDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zaG9ydGlkL2xpYi9pcy12YWxpZC5qc1xuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IDA7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc2hvcnRpZC9saWIvdXRpbC9jbHVzdGVyLXdvcmtlci1pZC1icm93c2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxuICogQ29weXJpZ2h0IChjKSAgMjAxOCBXaXNlIFdpbGQgV2ViIC5cbiAqXG4gKiAgTUlUIExpY2Vuc2VcbiAqXG4gKiAgUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqICBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiAgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuICogIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqICBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqICBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqICBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiAgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqICBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuICogIFNPRlRXQVJFLlxuICpcbiAqIEBhdXRob3IgOiBOYXRoYW5hZWwgQnJhdW5cbiAqIEBjb250YWN0IDogY2FpcGlsYWJzQGdtYWlsLmNvbVxuICovXG5cbnZhciBpcyAgICAgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi91dGlscy9pcycpLFxuICAgIFNjb3BlICAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL1Njb3BlJyksXG4gICAgeyBrZXlXYWxrblNldCwga2V5V2Fsa25HZXQgfSA9IHJlcXVpcmUoJy4vdXRpbHMvdXRpbHMnKSxcbiAgICBFdmVudEVtaXR0ZXIgICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi91dGlscy9FbWl0dGVyJyksXG4gICAgVGFza1NlcXVlbmNlciAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vdXRpbHMvVGFza1NlcXVlbmNlcicpLFxuICAgIHNob3J0aWQgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlKCdzaG9ydGlkJyksXG4gICAgb2JqUHJvdG8gICAgICAgICAgICAgICAgICAgICA9IE9iamVjdC5nZXRQcm90b3R5cGVPZih7fSk7XG5cbmNsYXNzIFN0b3JlIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgICAvL3N0YXRpYyB1c2UgICAgICAgICAgICAgICAgICA9IFtdOy8vIG92ZXJyaWRhYmxlIGxpc3Qgb2Ygc291cmNlIHN0b3Jlc1xuICAgIHN0YXRpYyBmb2xsb3c7Ly8gb3ZlcnJpZGFibGUgbGlzdCBvZiBzdG9yZSB0aGF0IHdpbGwgYWxsb3cgcHVzaCBpZiB1cGRhdGVkXG4gICAgc3RhdGljIHJlcXVpcmU7XG4gICAgc3RhdGljIHN0YXRpY1Njb3BlICAgICAgICAgID0gbmV3IFNjb3BlKHt9LCB7IGlkOiBcInN0YXRpY1wiIH0pO1xuICAgIHN0YXRpYyBzdGF0ZSAgICAgICAgICAgICAgICA9IHVuZGVmaW5lZDsvLyBkZWZhdWx0IHN0YXRlXG4gICAgLyoqXG4gICAgICogaWYgcmV0YWluIGdvZXMgdG8gMCA6XG4gICAgICogZmFsc2UgdG8gbm90IGRlc3Ryb3ksXG4gICAgICogMCB0byBzeW5jIGF1dG8gZGVzdHJveVxuICAgICAqIE1zIHRvIGF1dG9kZXN0cm95IGFmdGVyIHRtIG1zIGlmIG5vIHJldGFpbiBoYXMgYmVlbiBjYWxsZWRcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbnxJbnR9XG4gICAgICovXG4gICAgICAgICAgIHN0YXRpYyBwZXJzaXN0ZW5jZVRtID0gZmFsc2U7XG4gICAgXG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0b3IsIHdpbGwgYnVpbGQgYSByZXNjb3BlIHN0b3JlXG4gICAgICpcbiAgICAgKiAoc2NvcGUsIHtyZXF1aXJlLHVzZSxhcHBseSxzdGF0ZSwgZGF0YX0pXG4gICAgICogKHNjb3BlKVxuICAgICAqXG4gICAgICogQHBhcmFtIHNjb3BlIHtvYmplY3R9IHNjb3BlIHdoZXJlIHRvIGZpbmQgdGhlIG90aGVyIHN0b3JlcyAoZGVmYXVsdCA6IHN0YXRpY1xuICAgICAqICAgICBzdGF0aWNTY29wZSApXG4gICAgICogQHBhcmFtIGtleXMge0FycmF5fSAocGFzc2VkIHRvIFN0b3JlOjptYXApIEV4IDogW1wic2Vzc2lvblwiLCBcIm90aGVyTmFtZWRTdG9yZTprZXlcIixcbiAgICAgKiAgICAgb3RoZXJTdG9yZS5hcyhcIm90aGVyS2V5XCIpXVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB2YXIgYXJneiAgICAgICAgID0gWyAuLi5hcmd1bWVudHMgXSxcbiAgICAgICAgICAgIF9zdGF0aWMgICAgICA9IHRoaXMuY29uc3RydWN0b3IsXG4gICAgICAgICAgICBzY29wZSAgICAgICAgPSBhcmd6WyAwIF0gaW5zdGFuY2VvZiBTY29wZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBhcmd6LnNoaWZ0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3N0YXRpYy5zY29wZSA/IFNjb3BlLmdldFNjb3BlKF9zdGF0aWMuc2NvcGUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBpcy5zdHJpbmcoYXJnelsgMCBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBTY29wZS5nZXRTY29wZShhcmd6LnNoaWZ0KCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF9zdGF0aWMuc3RhdGljU2NvcGUsXG4gICAgICAgICAgICBjZmcgICAgICAgICAgPSBhcmd6WyAwIF0gJiYgIWlzLmFycmF5KGFyZ3pbIDAgXSkgJiYgIWlzLnN0cmluZyhhcmd6WyAwIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA/IGFyZ3ouc2hpZnQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB7fSxcbiAgICAgICAgICAgIHRhc2tRdWV1ZSAgICA9IGlzLmFycmF5KGFyZ3pbIDAgXSkgPyBhcmd6LnNoaWZ0KCkgOiBudWxsLFxuICAgICAgICAgICAgbmFtZSAgICAgICAgID0gY2ZnLm5hbWUgfHwgX3N0YXRpYy5uYW1lLFxuICAgICAgICAgICAgd2F0Y2hzICAgICAgID0gY2ZnLnVzZSB8fCBbXSxcbiAgICAgICAgICAgIGFwcGx5ICAgICAgICA9IGNmZy5hcHBseSB8fCBudWxsLFxuICAgICAgICAgICAgaW5pdGlhbFN0YXRlID0gX3N0YXRpYy5zdGF0ZSB8fCBfc3RhdGljLmluaXRpYWxTdGF0ZSB8fCBfc3RhdGljLmRlZmF1bHRTdGF0ZSxcbiAgICAgICAgICAgIGFwcGxpZWQ7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl91aWQgPSBjZmcuX3VpZCB8fCBzaG9ydGlkLmdlbmVyYXRlKCk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9fcmV0YWlucyAgICA9IHsgYWxsOiAwIH07XG4gICAgICAgIHRoaXMuX19sb2NrcyAgICAgID0geyBhbGw6IDAgfTtcbiAgICAgICAgdGhpcy5fb25TdGFiaWxpemUgPSBbXTtcbiAgICAgICAgXG4gICAgICAgIC8vIGF1dG9EZXN0cm95VG1cbiAgICAgICAgdGhpcy5fYXV0b0Rlc3Ryb3kgICA9ICEhdGhpcy5fcGVyc2lzdGVuY2VUbTtcbiAgICAgICAgdGhpcy5fcGVyc2lzdGVuY2VUbSA9IGNmZy5wZXJzaXN0ZW5jZVRtIHx8IF9zdGF0aWMucGVyc2lzdGVuY2VUbSB8fCAoIGNmZy5hdXRvRGVzdHJveSB8fCBfc3RhdGljLmF1dG9EZXN0cm95ICkgJiYgNTtcbiAgICAgICAgdGhpcy5fY2ZnICAgICAgICAgICA9IGNmZztcbiAgICAgICAgaWYgKCBjZmcgJiYgY2ZnLm9uICkge1xuICAgICAgICAgICAgdGhpcy5vbihjZmcub24pO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICBcbiAgICAgICAgaWYgKCBzY29wZS5zdG9yZXMgKSB7XG4gICAgICAgICAgICB0aGlzLnNjb3BlT2JqID0gc2NvcGU7XG4gICAgICAgICAgICB0aGlzLnNjb3BlICAgID0gc2NvcGUuc3RvcmVzO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zY29wZU9iaiA9IG5ldyBTY29wZShzY29wZSk7XG4gICAgICAgICAgICB0aGlzLnNjb3BlICAgID0gc2NvcGUuc3RvcmVzO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvLyBzdGFuZGFyZGl6ZWQgc2NvcGUgYWNjZXNzXG4gICAgICAgIHRoaXMuJHNjb3BlICAgID0gdGhpcy5zY29wZU9iajtcbiAgICAgICAgdGhpcy4kc3RvcmVzICAgPSB0aGlzLnNjb3BlT2JqLnN0b3JlcztcbiAgICAgICAgdGhpcy4kYWN0aW9ucyAgPSB0aGlzLnNjb3BlT2JqLmFjdGlvbnM7XG4gICAgICAgIHRoaXMuJGRpc3BhdGNoID0gdGhpcy5zY29wZU9iai5kaXNwYXRjaC5iaW5kKHRoaXMuc2NvcGVPYmopO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fcmV2ICAgICA9IHRoaXMuY29uc3RydWN0b3IuX3JldiB8fCAwO1xuICAgICAgICB0aGlzLl9yZXZzICAgID0ge307XG4gICAgICAgIHRoaXMuc3RvcmVzICAgPSB7fTtcbiAgICAgICAgdGhpcy5fcmVxdWlyZSA9IFtdO1xuICAgICAgICB0aGlzLl9zb3VyY2VzID0gWyBuYW1lIF07XG4gICAgICAgIFxuICAgICAgICBpZiAoIGlzLmFycmF5KF9zdGF0aWMudXNlKSApIHtcbiAgICAgICAgICAgIHRoaXMuX3VzZSA9IFsgLi4ud2F0Y2hzLCAuLi4oIF9zdGF0aWMudXNlIHx8IFtdICkubWFwKFxuICAgICAgICAgICAgICAgIGtleSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCByZWYgPSBrZXkubWF0Y2goL14oXFwhPykoW15cXDpdKikoPzpcXDooLiopKT8kLyk7XG4gICAgICAgICAgICAgICAgICAgIGlmICggcmVmWyAxIF0gKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVmMiA9IHJlZlsgMiBdLnNwbGl0KCcuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9yZXF1aXJlLnB1c2gocmVmWyAzIF0gfHwgcmVmMlsgcmVmMi5sZW5ndGggLSAxIF0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZWZbIDIgXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApIF07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl91c2UgPSBbIC4uLndhdGNocywgLi4uKFxuICAgICAgICAgICAgICAgIF9zdGF0aWMudXNlID8gT2JqZWN0LmtleXMoX3N0YXRpYy51c2UpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZWYgPSBrZXkubWF0Y2goL14oXFwhPykoLiopJC8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWZbIDEgXSAmJiB0aGlzLl9yZXF1aXJlLnB1c2goX3N0YXRpYy51c2VbIGtleSBdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlZlsgMiBdICsgKCAoIF9zdGF0aWMudXNlWyBrZXkgXSA9PT0gdHJ1ZSApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJzonICsgX3N0YXRpYy51c2VbIGtleSBdICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IFtdXG4gICAgICAgICAgICApIF07XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmICggX3N0YXRpYy5yZXF1aXJlIClcbiAgICAgICAgICAgIHRoaXMuX3JlcXVpcmUucHVzaCguLi5fc3RhdGljLnJlcXVpcmUpO1xuICAgICAgICBpZiAoIGNmZy5yZXF1aXJlIClcbiAgICAgICAgICAgIHRoaXMuX3JlcXVpcmUucHVzaCguLi5jZmcucmVxdWlyZSk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9mb2xsb3dlcnMgPSBbXTtcbiAgICAgICAgdGhpcy5fY2hhbmdlc1NXID0gaW5pdGlhbFN0YXRlIHx8IHt9O1xuICAgICAgICB0aGlzLnN0YXRlICAgICAgPSBpbml0aWFsU3RhdGUgJiYge307XG4gICAgICAgIGlmICggYXBwbHkgKVxuICAgICAgICAgICAgdGhpcy5hcHBseSA9IGFwcGx5O1xuICAgICAgICBcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEluaXRpYWwgc3RhdGUgaXNuJ3QgZnVsbHkgaW5pdGlhbGl6ZWQgKCBjaGlsZHMgY29uc3RydWN0b3JzIGNhbiBzZXQgaXQgKVxuICAgICAgICAgKiBTY29wZSBiYXNlZCBpbnN0YW5jZSBoYXZlIHRhc2tRdWV1ZSB0byBkZWxheSBpbml0IHN5bmNocm9ub3VzbHksIGlmIG5vdFxuICAgICAgICAgKiBwcmVzZW50IHdlIHVzZSBzZXRUaW1lb3V0XG4gICAgICAgICAqL1xuICAgICAgICBpZiAoIHRhc2tRdWV1ZSApIHtcbiAgICAgICAgICAgIHRhc2tRdWV1ZS5wdXNoKHRoaXMuX2FmdGVyQ29uc3RydWN0b3IuYmluZCh0aGlzKSlcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgICAgICBzZXRUaW1lb3V0KHRoaXMuX2FmdGVyQ29uc3RydWN0b3IuYmluZCh0aGlzKSlcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBpbmNvbWluZyBzdGF0ZSAoIGZvciBpbW1lZGlhdGUgc3RhdGUgcmVsYXRpdmUgYWN0aW9ucyApXG4gICAgICogQHJldHVybnMge3t9fCp9XG4gICAgICovXG4gICAgZ2V0IG5leHRTdGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NoYW5nZXNTVyAmJiB7IC4uLnRoaXMuc3RhdGUsIC4uLnRoaXMuX2NoYW5nZXNTVyB9IHx8IHRoaXMuc3RhdGU7XG4gICAgfVxuICAgIFxuICAgIF9hZnRlckNvbnN0cnVjdG9yKCkge1xuICAgICAgICBsZXQgY2ZnICAgICAgICAgID0gdGhpcy5fY2ZnLFxuICAgICAgICAgICAgX3N0YXRpYyAgICAgID0gdGhpcy5jb25zdHJ1Y3RvcixcbiAgICAgICAgICAgIHNuYXBzaG90ICAgICA9IHRoaXMucmVzdG9yZSh1bmRlZmluZWQsIHRydWUpLFxuICAgICAgICAgICAgaW5pdGlhbFN0YXRlID0gdGhpcy5zdGF0ZSxcbiAgICAgICAgICAgIGluaXRpYWxEYXRhICA9IHRoaXMuZGF0YSxcbiAgICAgICAgICAgIGFwcGxpZWQ7XG4gICAgICAgIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKCBpbml0aWFsRGF0YSApXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhID0gaW5pdGlhbERhdGE7XG4gICAgICAgICAgICBlbHNlIGlmICggX3N0YXRpYy5kYXRhICE9PSB1bmRlZmluZWQgKVxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YSA9IHsgLi4uX3N0YXRpYy5kYXRhIH07XG4gICAgICAgICAgICBlbHNlIGlmICggY2ZnLmhhc093blByb3BlcnR5KFwiZGF0YVwiKSApXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhID0gY2ZnLmRhdGE7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmICggY2ZnLmhhc093blByb3BlcnR5KFwic3RhdGVcIikgJiYgY2ZnLnN0YXRlICE9PSB1bmRlZmluZWQgKVxuICAgICAgICAgICAgICAgIGluaXRpYWxTdGF0ZSA9IHsgLi4uaW5pdGlhbFN0YXRlLCAuLi5jZmcuc3RhdGUgfTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKCB0aGlzLmRhdGEgPT09IHVuZGVmaW5lZCApIHtcbiAgICAgICAgICAgICAgICBpZiAoIGluaXRpYWxTdGF0ZSB8fCB0aGlzLl91c2UubGVuZ3RoICkgey8vIHN5bmMgYXBwbHlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2hhbmdlc1NXID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgLi4udGhpcy5fY2hhbmdlc1NXLFxuICAgICAgICAgICAgICAgICAgICAgICAgLi4uKCBpbml0aWFsU3RhdGUgfHwge30gKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLnRoaXMuJHNjb3BlLm1hcCh0aGlzLCB0aGlzLl91c2UpXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUgICAgICA9IHt9O1xuICAgICAgICAgICAgICAgICAgICBpZiAoIHRoaXMuc2hvdWxkQXBwbHkodGhpcy5fY2hhbmdlc1NXKSAmJiB0aGlzLmRhdGEgPT09IHVuZGVmaW5lZCApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YSAgICAgICA9IHRoaXMuYXBwbHkodGhpcy5kYXRhLCB0aGlzLl9jaGFuZ2VzU1csIHRoaXMuX2NoYW5nZXNTVyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcHBsaWVkICAgICAgICAgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZSAgICAgID0gdGhpcy5fY2hhbmdlc1NXO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2hhbmdlc1NXID0ge307XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBhcHBsaWVkICAgICAgICAgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUgICAgICA9IHsvLyBhc3N1bWUgdGhpcyBzdGF0ZSBpcyBzeW5jIHdpdGggaW5pdGlhbCBkYXRhXG4gICAgICAgICAgICAgICAgICAgIC4uLnRoaXMuX2NoYW5nZXNTVyxcbiAgICAgICAgICAgICAgICAgICAgLi4uKCBpbml0aWFsU3RhdGUgfHwge30gKSxcbiAgICAgICAgICAgICAgICAgICAgLi4udGhpcy4kc2NvcGUubWFwKHRoaXMsIHRoaXMuX3VzZSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5fY2hhbmdlc1NXID0ge307XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCAoIHRoaXMuZGF0YSAhPT0gdW5kZWZpbmVkIHx8IGFwcGxpZWQgKSAmJiAhdGhpcy5fX2xvY2tzLmFsbCApIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YWJsZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLl9yZXYrKztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgaWYgKCAhX3N0YXRpYy5tYW5hZ2VkICYmICF0aGlzLnN0YXRlICYmICggIXRoaXMuX3VzZSB8fCAhdGhpcy5fdXNlLmxlbmd0aCApICkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIlJlU2NvcGUgc3RvcmUgJ1wiLCB0aGlzLm5hbWUsIFwiJyBoYXZlIG5vIGluaXRpYWwgZGF0YSwgc3RhdGUgb3IgdXNlLiBJdCBjYW4ndCBzdGFiaWxpemUuLi5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgIXRoaXMuX3N0YWJsZSAmJiB0aGlzLmVtaXQoJ3Vuc3RhYmxlJywgdGhpcy5zdGF0ZSk7XG4gICAgICAgIFxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBPdmVycmlkYWJsZSBtZXRob2QgdG8ga25vdyBpZiBhIGRhdGEgY2hhbmdlIHNob3VsZCBiZSBwcm9wYWcgdG8gdGhlIGxpc3RlbmluZ1xuICAgICAqIHN0b3JlcyAmIGNvbXBvbmVudHNcbiAgICAgKi9cbiAgICBzaG91bGRQcm9wYWcoIG5EYXRhcyApIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIFxuICAgIGhhc0RhdGFDaGFuZ2UoIG5EYXRhcyApIHtcbiAgICAgICAgdmFyIF9zdGF0aWMgPSB0aGlzLmNvbnN0cnVjdG9yLCByLFxuICAgICAgICAgICAgY0RhdGFzICA9IHRoaXMuZGF0YTtcbiAgICAgICAgciAgICAgICAgICAgPSAhY0RhdGFzICYmIG5EYXRhcyB8fCBjRGF0YXMgIT09IG5EYXRhcztcbiAgICAgICAgIXIgJiYgY0RhdGFzICYmIE9iamVjdC5rZXlzKGNEYXRhcykuZm9yRWFjaChcbiAgICAgICAgICAgICgga2V5ICkgPT4ge1xuICAgICAgICAgICAgICAgIHIgPSByIHx8ICggbkRhdGFzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA/IGNEYXRhc1sga2V5IF0gIT09IG5EYXRhc1sga2V5IF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDogY0RhdGFzICYmIGNEYXRhc1sga2V5IF0gKVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICAhciAmJiBuRGF0YXMgJiYgT2JqZWN0LmtleXMobkRhdGFzKS5mb3JFYWNoKFxuICAgICAgICAgICAgKCBrZXkgKSA9PiB7XG4gICAgICAgICAgICAgICAgciA9IHIgfHwgKCBuRGF0YXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgID8gY0RhdGFzWyBrZXkgXSAhPT0gbkRhdGFzWyBrZXkgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBjRGF0YXMgJiYgY0RhdGFzWyBrZXkgXSApXG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBPdmVycmlkYWJsZSBtZXRob2QgdG8ga25vdyBpZiBhIHN0YXRlIGNoYW5nZSBzaG91bGQgYmUgYXBwbGllZFxuICAgICAqL1xuICAgIHNob3VsZEFwcGx5KCBzdGF0ZSA9IHRoaXMuc3RhdGUgKSB7XG4gICAgICAgIHZhciBfc3RhdGljID0gdGhpcy5jb25zdHJ1Y3RvcjtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgISF0aGlzLmlzQ29tcGxldGUoc3RhdGUpXG4gICAgICAgICAgICAgICApICYmICggaXMuYXJyYXkoX3N0YXRpYy5mb2xsb3cpXG4gICAgICAgICAgICAgICAgICAgICAgPyBfc3RhdGljLmZvbGxvd1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZWR1Y2UoKCByLCBpICkgPT4gKCByIHx8IHN0YXRlICYmIHN0YXRlWyBpIF0gKSwgZmFsc2UpXG4gICAgICAgICAgICAgICAgICAgICAgOiBfc3RhdGljLmZvbGxvd1xuICAgICAgICAgICAgICAgICAgICAgICAgPyBPYmplY3Qua2V5cyhfc3RhdGljLmZvbGxvdylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlZHVjZSgoIHIsIGkgKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8fCBzdGF0ZSAmJiBpcy5mbihfc3RhdGljLmZvbGxvd1sgaSBdKSAmJiBfc3RhdGljLmZvbGxvd1sgaSBdLmNhbGwodGhpcywgc3RhdGVbIGkgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHx8IF9zdGF0aWMuZm9sbG93WyBpIF0gJiYgc3RhdGVbIGkgXSAhPT0gdGhpcy5zdGF0ZVsgaSBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIGZhbHNlKSA6IHRydWVcbiAgICAgICAgICAgICAgICk7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIE92ZXJyaWRhYmxlIGFwcGxpZXIgLyByZW1hcHBlclxuICAgICAqIElmIHN0YXRlIG9yIGxhc3RQdWJsaWNTdGF0ZSBhcmUgc2ltcGxlIGhhc2ggbWFwcyBhcHBseSB3aWxsIHJldHVybiB7Li4uZGF0YSxcbiAgICAgKiAuLi5zdGF0ZX0gaWYgbm90IGl0IHdpbGwgcmV0dXJuIHRoZSBsYXN0IHByaXZhdGUgc3RhdGVcbiAgICAgKiBAcGFyYW0gZGF0YVxuICAgICAqIEBwYXJhbSBzdGF0ZVxuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqL1xuICAgIGFwcGx5KCBkYXRhLCBzdGF0ZSwgY2hhbmdlcyApIHtcbiAgICAgICAgc3RhdGUgPSBzdGF0ZSB8fCB0aGlzLnN0YXRlO1xuICAgICAgICBcbiAgICAgICAgaWYgKCB0aGlzLnJlZmluZSApXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZWZpbmUoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgXG4gICAgICAgIGlmICggIWRhdGEgfHwgZGF0YS5fX3Byb3RvX18gIT09IG9ialByb3RvIHx8IHN0YXRlLl9fcHJvdG9fXyAhPT0gb2JqUHJvdG8gKVxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICByZXR1cm4geyAuLi5kYXRhLCAuLi5zdGF0ZSB9XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIEBkZXByZWNpYXRlZFxuICAgICAqIEBwYXJhbSBkYXRhXG4gICAgICogQHBhcmFtIHN0YXRlXG4gICAgICogQHBhcmFtIGNoYW5nZXNcbiAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgKi9cbiAgICByZWZpbmUoIGRhdGEsIHN0YXRlLCBjaGFuZ2VzICkge1xuICAgICAgICBzdGF0ZSA9IHN0YXRlIHx8IHRoaXMuc3RhdGU7XG4gICAgICAgIFxuICAgICAgICBpZiAoICFkYXRhIHx8IGRhdGEuX19wcm90b19fICE9PSBvYmpQcm90byB8fCBzdGF0ZS5fX3Byb3RvX18gIT09IG9ialByb3RvIClcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgcmV0dXJuIHsgLi4uZGF0YSwgLi4uc3RhdGUgfVxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBEZWJvdW5jZSB0aGlzIHN0b3JlIHByb3BhZ2F0aW9uICggJiByZWR1Y2luZyApXG4gICAgICogQHBhcmFtIGNiXG4gICAgICovXG4gICAgc3RhYmlsaXplKCBjYiApIHtcbiAgICAgICAgY2IgJiYgdGhpcy5vbmNlKCdzdGFibGUnLCBjYik7XG4gICAgICAgIHRoaXMuX3N0YWJsZSAmJiB0aGlzLmVtaXQoJ3Vuc3RhYmxlJywgdGhpcy5zdGF0ZSwgdGhpcy5kYXRhKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX3N0YWJsZSA9IGZhbHNlO1xuICAgICAgICBcbiAgICAgICAgaWYgKCB0aGlzLl9zdGFiaWxpemVyIClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX3N0YWJpbGl6ZXIgPSBUYXNrU2VxdWVuY2VyLnB1c2hUYXNrKHRoaXMsICdwdXNoU3RhdGUnKTtcbiAgICB9XG4gICAgXG4gICAgcmV0cmlldmUoIHBhdGgsIGkgPSAwLCBvYmogPSB0aGlzLmRhdGEgKSB7XG4gICAgICAgIHBhdGggPSBpcy5zdHJpbmcocGF0aCkgPyBwYXRoLnNwbGl0KCcuJykgOiBwYXRoO1xuICAgICAgICByZXR1cm4gIW9iaiB8fCAhcGF0aCB8fCAhcGF0aC5sZW5ndGhcbiAgICAgICAgICAgICAgID8gb2JqXG4gICAgICAgICAgICAgICA6IHBhdGgubGVuZ3RoID09IGkgKyAxXG4gICAgICAgICAgICAgICAgID8gb2JqWyBwYXRoWyBpIF0gXVxuICAgICAgICAgICAgICAgICA6IHRoaXMucmV0cmlldmUocGF0aCwgaSArIDEsIG9ialsgcGF0aFsgaSBdIF0pO1xuICAgIH1cbiAgICBcbiAgICBkaXNwYXRjaCggYWN0aW9uLCAuLi5hcmd6ICkge1xuICAgICAgICB0aGlzLnNjb3BlT2JqLmRpc3BhdGNoKGFjdGlvbiwgLi4uYXJneik7XG4gICAgfVxuICAgIFxuICAgIHRyaWdnZXIoIGFjdGlvbiwgLi4uYXJneiApIHtcbiAgICAgICAgbGV0IHsgYWN0aW9ucyB9ID0gdGhpcy5jb25zdHJ1Y3RvcjtcbiAgICAgICAgaWYgKCBhY3Rpb25zICYmIGFjdGlvbnNbIGFjdGlvbiBdICkge1xuICAgICAgICAgICAgbGV0IG5zID0gYWN0aW9uc1sgYWN0aW9uIF0uY2FsbCh0aGlzLCAuLi5hcmd6KTtcbiAgICAgICAgICAgIG5zICYmIHRoaXMuc2V0U3RhdGUobnMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIFB1bGwgc3RvcmVzIGluIHRoZSBwcml2YXRlIHN0YXRlXG4gICAgICogQHBhcmFtIHN0b3JlcyAge0FycmF5fSAocGFzc2VkIHRvIFN0b3JlOjptYXApIEV4IDogW1wic2Vzc2lvblwiLFxuICAgICAqICAgICBcIm90aGVyTmFtZWRTdG9yZTprZXlcIiwgb3RoZXJTdG9yZS5hcyhcIm90aGVyS2V5XCIpXVxuICAgICAqL1xuICAgIHB1bGwoIHN0b3JlcywgZG9XYWl0LCBvcmlnaW4gKSB7XG4gICAgICAgIGxldCBpbml0aWFsT3V0cHV0cyA9IHRoaXMuc2NvcGVPYmoubWFwKHRoaXMsIHN0b3Jlcyk7XG4gICAgICAgIGlmICggZG9XYWl0ICkge1xuICAgICAgICAgICAgdGhpcy53YWl0KCk7XG4gICAgICAgICAgICBzdG9yZXMuZm9yRWFjaCgoIHMgKSA9PiB0aGlzLnNjb3BlWyBzIF0gJiYgdGhpcy53YWl0KHRoaXMuc2NvcGVbIHMgXSkpO1xuICAgICAgICAgICAgdGhpcy5yZWxlYXNlKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGluaXRpYWxPdXRwdXRzO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBTZXQgJiBQdXNoIHRoZSByZXN1bHQgZGF0YSB0byBmb2xsb3dlcnMgaWYgc3RhYmxlXG4gICAgICogQHBhcmFtIGNiXG4gICAgICovXG4gICAgcHVzaCggZGF0YSwgZm9yY2UsIGNiICkge1xuICAgICAgICBjYiAgICA9IGZvcmNlID09PSB0cnVlID8gY2IgOiBmb3JjZTtcbiAgICAgICAgZm9yY2UgPSBmb3JjZSA9PT0gdHJ1ZTtcbiAgICAgICAgaWYgKCAhZm9yY2UgJiZcbiAgICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgICF0aGlzLmhhc0RhdGFDaGFuZ2UoZGF0YSlcbiAgICAgICAgICAgICApXG4gICAgICAgICkge1xuICAgICAgICAgICAgY2IgJiYgY2IoKTtcbiAgICAgICAgICAgIGlmICggIXRoaXMuX19sb2Nrcy5hbGwgKSB7XG4gICAgICAgICAgICAgICAgbGV0IHN0YWJsZSAgID0gdGhpcy5fc3RhYmxlO1xuICAgICAgICAgICAgICAgIHRoaXMuX3N0YWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgIXN0YWJsZSAmJiB0aGlzLmVtaXQoJ3N0YWJsZScsIHRoaXMuc3RhdGUsIHRoaXMuZGF0YSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fc3RhYmlsaXplciA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgICAgIHRoaXMud2FpdCgpO1xuICAgICAgICB0aGlzLnJlbGVhc2UoY2IpO1xuICAgICAgICBcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogQ2FsbCB0aGUgYXBwbHkgZm4gdXNpbmcgdGhlIGN1cnJlbnQgYWNjdW11bGF0ZWQgc3RhdGUgdXBkYXRlIHRoZW4sIHB1c2ggdGhlXG4gICAgICogcmVzdWx0aW5nIGRhdGEgaWYgc3RhYmxlXG4gICAgICogQHBhcmFtIGZvcmNlXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgcHVzaFN0YXRlKCBmb3JjZSApIHtcbiAgICAgICAgXG4gICAgICAgIGlmICggIWZvcmNlICYmICF0aGlzLl9jaGFuZ2VzU1cgJiYgdGhpcy5kYXRhIClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgXG4gICAgICAgIHZhciBuZXh0U3RhdGUgPSB0aGlzLl9uZXh0U3RhdGUgfHwgeyAuLi50aGlzLnN0YXRlLCAuLi4oIHRoaXMuX2NoYW5nZXNTVyB8fCB7fSApIH0sXG4gICAgICAgICAgICBuZXh0RGF0YSAgPSB0aGlzLmFwcGx5KHRoaXMuZGF0YSwgbmV4dFN0YXRlLCB0aGlzLl9jaGFuZ2VzU1cpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fc3RhYmlsaXplciA9IG51bGw7XG4gICAgICAgIHRoaXMuc3RhdGUgICAgICAgPSBuZXh0U3RhdGU7XG4gICAgICAgIHRoaXMuX2NoYW5nZXNTVyAgPSBudWxsO1xuICAgICAgICBcbiAgICAgICAgaWYgKCAhZm9yY2UgJiZcbiAgICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgICF0aGlzLmhhc0RhdGFDaGFuZ2UobmV4dERhdGEpXG4gICAgICAgICAgICAgKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIGlmICggIXRoaXMuX19sb2Nrcy5hbGwgKSB7XG4gICAgICAgICAgICAgICAgbGV0IHN0YWJsZSAgID0gdGhpcy5fc3RhYmxlO1xuICAgICAgICAgICAgICAgIHRoaXMuX3N0YWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgIXN0YWJsZSAmJiB0aGlzLmVtaXQoJ3N0YWJsZScsIHRoaXMuc3RhdGUsIHRoaXMuZGF0YSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fc3RhYmlsaXplciA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRoaXMuZGF0YSA9IG5leHREYXRhO1xuICAgICAgICB0aGlzLndhaXQoKTtcbiAgICAgICAgdGhpcy5yZWxlYXNlKCk7XG4gICAgICAgIFxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBBZGQgJ3BTdGF0ZScgdG8gdGhlIGN1cnJlbnQgYWNjdW11bGF0ZWQgc3RhdGUgdXBkYXRlc1xuICAgICAqICYgd2FpdCBzb3VyY2Ugc3RvcmVzIHN0YWJpbGl6YXRpb24gYmVmb3JlIHB1c2hpbmcgdGhlc2Ugc3RhdGUgdXBkYXRlc1xuICAgICAqIEBwYXJhbSBwU3RhdGVcbiAgICAgKiBAcGFyYW0gY2JcbiAgICAgKi9cbiAgICBzZXRTdGF0ZSggcFN0YXRlLCBjYiwgc3luYyApIHtcbiAgICAgICAgdmFyIGkgICAgICAgPSAwLCBjaGFuZ2UsXG4gICAgICAgICAgICBjaGFuZ2VzID0gdGhpcy5fY2hhbmdlc1NXID0gdGhpcy5fY2hhbmdlc1NXIHx8IHt9O1xuICAgICAgICBmb3IgKCB2YXIgayBpbiBwU3RhdGUgKVxuICAgICAgICAgICAgaWYgKCAhdGhpcy5zdGF0ZVxuICAgICAgICAgICAgICAgICB8fCBjaGFuZ2VzLmhhc093blByb3BlcnR5KGspLy8gdG9kb1xuICAgICAgICAgICAgICAgICAmJiAoXG4gICAgICAgICAgICAgICAgICAgICBwU3RhdGVbIGsgXSAhPT0gY2hhbmdlc1sgayBdXG4gICAgICAgICAgICAgICAgICkgfHwgcFN0YXRlLmhhc093blByb3BlcnR5KGspXG4gICAgICAgICAgICAgICAgICYmIChcbiAgICAgICAgICAgICAgICAgcFN0YXRlWyBrIF0gIT09IHRoaXMuc3RhdGVbIGsgXVxuICAgICAgICAgICAgICAgICB8fFxuICAgICAgICAgICAgICAgICAoIHRoaXMuc3RhdGVbIGsgXSAmJiBwU3RhdGVbIGsgXSAmJiAoIHBTdGF0ZVsgayBdLl9yZXYgIT0gdGhpcy5fcmV2c1sgayBdICkgKS8vIHJldi9oYXNoIHVwZGF0ZVxuICAgICAgICAgICAgICAgICApICkge1xuICAgICAgICAgICAgICAgIGNoYW5nZSAgICAgICAgICA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5fcmV2c1sgayBdID0gcFN0YXRlWyBrIF0gJiYgcFN0YXRlWyBrIF0uX3JldiB8fCB0cnVlO1xuICAgICAgICAgICAgICAgIGNoYW5nZXNbIGsgXSAgICA9IHBTdGF0ZVsgayBdO1xuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdGhpcy5fbmV4dFN0YXRlID0geyAuLi50aGlzLnN0YXRlLCAuLi5jaGFuZ2VzIH07XG4gICAgICAgIGlmICggIXRoaXMuc2hvdWxkQXBwbHkodGhpcy5fbmV4dFN0YXRlKSApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKCBzeW5jICkge1xuICAgICAgICAgICAgdGhpcy5wdXNoU3RhdGUoKTtcbiAgICAgICAgICAgIGNiICYmIGNiKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoIGNoYW5nZSApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YWJpbGl6ZShjYik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGNiICYmIGNiKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSB0aGUgY3VycmVudCBzdGF0ZSAmIHB1c2ggaXRcbiAgICAgKiBAcGFyYW0gcFN0YXRlXG4gICAgICogQHBhcmFtIGNiXG4gICAgICovXG4gICAgc2V0U3RhdGVTeW5jKCBwU3RhdGUgKSB7XG4gICAgICAgIHZhciBpICAgICAgID0gMCwgY2hhbmdlLFxuICAgICAgICAgICAgY2hhbmdlcyA9IHRoaXMuX2NoYW5nZXNTVyA9IHRoaXMuX2NoYW5nZXNTVyB8fCB7fTtcbiAgICAgICAgZm9yICggdmFyIGsgaW4gcFN0YXRlIClcbiAgICAgICAgICAgIGlmICggIXRoaXMuc3RhdGUgfHwgcFN0YXRlLmhhc093blByb3BlcnR5KGspXG4gICAgICAgICAgICAgICAgICYmIChcbiAgICAgICAgICAgICAgICAgcFN0YXRlWyBrIF0gIT0gdGhpcy5zdGF0ZVsgayBdXG4gICAgICAgICAgICAgICAgIHx8XG4gICAgICAgICAgICAgICAgICggdGhpcy5zdGF0ZVsgayBdICYmIHBTdGF0ZVsgayBdICYmICggcFN0YXRlWyBrIF0uX3JldiAhPSB0aGlzLl9yZXZzWyBrIF0gKSApLy8gcmV2L2hhc2ggdXBkYXRlXG4gICAgICAgICAgICAgICAgICkgKSB7XG4gICAgICAgICAgICAgICAgY2hhbmdlICAgICAgICAgID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLl9yZXZzWyBrIF0gPSBwU3RhdGVbIGsgXSAmJiBwU3RhdGVbIGsgXS5fcmV2IHx8IHRydWU7XG4gICAgICAgICAgICAgICAgY2hhbmdlc1sgayBdICAgID0gcFN0YXRlWyBrIF07XG4gICAgICAgICAgICB9XG4gICAgICAgIHRoaXMuc2hvdWxkQXBwbHkoeyAuLi4oIHRoaXMuc3RhdGUgfHwge30gKSwgLi4uY2hhbmdlcyB9KSAmJiB0aGlzLnB1c2hTdGF0ZSgpO1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBnZXQgYSBzdG9yZS1rZXkgcGFpciBmb3IgU3RvcmU6Om1hcFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gICAgICogQHJldHVybnMge3tzdG9yZTogU3RvcmUsIG5hbWU6ICp9fVxuICAgICAqL1xuICAgIGFzKCBuYW1lICkge1xuICAgICAgICByZXR1cm4geyBzdG9yZTogdGhpcywgbmFtZSB9O1xuICAgIH1cbiAgICBcbiAgICBvbiggbGlzdHMgKSB7XG4gICAgICAgIGlmICggIWlzLnN0cmluZyhsaXN0cykgJiYgbGlzdHMgKVxuICAgICAgICAgICAgT2JqZWN0LmtleXMobGlzdHMpLmZvckVhY2goayA9PiBzdXBlci5vbihrLCBsaXN0c1sgayBdKSk7XG4gICAgICAgIGVsc2Ugc3VwZXIub24oLi4uYXJndW1lbnRzKTtcbiAgICB9XG4gICAgXG4gICAgcmVtb3ZlTGlzdGVuZXIoIGxpc3RzICkge1xuICAgICAgICBpZiAoICFpcy5zdHJpbmcobGlzdHMpICYmIGxpc3RzIClcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGxpc3RzKS5mb3JFYWNoKGsgPT4gc3VwZXIucmVtb3ZlTGlzdGVuZXIoaywgbGlzdHNbIGsgXSkpO1xuICAgICAgICBlbHNlIHN1cGVyLnJlbW92ZUxpc3RlbmVyKC4uLmFyZ3VtZW50cyk7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIGlzIGNvbXBsZXRlIChhbGwgcmVxdWllcmVkIGtleXMgYXJlIGhlcmUpXG4gICAgICogQHJldHVybnMgYm9vbFxuICAgICAqL1xuICAgIGlzQ29tcGxldGUoIHN0YXRlID0gdGhpcy5zdGF0ZSApIHtcbiAgICAgICAgdmFyIF9zdGF0aWMgPSB0aGlzLmNvbnN0cnVjdG9yO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgIXRoaXMuX3JlcXVpcmVcbiAgICAgICAgICAgIHx8ICF0aGlzLl9yZXF1aXJlLmxlbmd0aFxuICAgICAgICAgICAgfHwgc3RhdGUgJiYgdGhpcy5fcmVxdWlyZS5yZWR1Y2UoXG4gICAgICAgICAgICAgICAgKCByLCBrZXkgKSA9PiAoIHIgJiYgc3RhdGVbIGtleSBdICksXG4gICAgICAgICAgICAgICAgdHJ1ZVxuICAgICAgICAgICAgKVxuICAgICAgICApO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBpcyBzdGFibGVcbiAgICAgKiBAcmV0dXJucyBib29sXG4gICAgICovXG4gICAgaXNTdGFibGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zdGFibGU7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIFNlcmlhbGl6ZSBzdGF0ZSAmIGRhdGEgd2l0aCBzb3VyY2VzIHJlZnNcbiAgICAgKiBAcmV0dXJucyBib29sXG4gICAgICovXG4gICAgc2VyaWFsaXplKCBjZmcgPSB7fSwgb3V0cHV0ID0ge30gKSB7XG4gICAgICAgIGxldCByZWZzID1cbiAgICAgICAgICAgICAgICAhY2ZnLm5vcmVmcyAmJiBpcy5hcnJheSh0aGlzLl91c2UpICYmIHRoaXMuX3VzZS5yZWR1Y2UoXG4gICAgICAgICAgICAgICAgKCBtYXAsIGtleSApID0+IHsvL3RvZG9cbiAgICAgICAgICAgICAgICAgICAgbGV0IG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlhcywgcGF0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIGtleS5zdG9yZSAmJiBrZXkubmFtZSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWFzID0gbmFtZSA9IGtleS5uYW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmUgPSB0aGlzLnNjb3BlT2JqLnN0b3Jlc1sgbmFtZSBdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKCBpcy5mbihrZXkpICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZSA9IGFsaWFzID0ga2V5Lm5hbWUgfHwga2V5LmRlZmF1bHROYW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmUgPSB0aGlzLnNjb3BlT2JqLnN0b3Jlc1sgbmFtZSBdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5ICAgPSBrZXkubWF0Y2goLyhbXFx3X10rKSgoPzpcXC5bXFx3X10rKSopKD86XFw6KFtcXHdfXSspKT8vKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUgID0ga2V5WyAxIF07XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRoICA9IG5hbWUgKyBrZXlbIDIgXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWFzID0ga2V5WyAzIF0gfHwgcGF0aCAmJiBwYXRoLm1hdGNoKC8oW15cXC5dKikkLylbIDAgXSB8fCBrZXlbIDEgXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlID0gdGhpcy5zY29wZU9iai5yZXRyaWV2ZVN0b3JlKHBhdGgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICggc3RvcmUgJiYgIXN0b3JlLnNjb3BlT2JqLl8uaXNMb2NhbElkIClcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcFsgYWxpYXMgXSA9IHN0b3JlLnNjb3BlT2JqLl9pZCArICcvJyArIG5hbWU7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtYXA7XG4gICAgICAgICAgICAgICAgfSwge31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHx8IHt9O1xuICAgICAgICBcbiAgICAgICAga2V5V2Fsa25TZXQoXG4gICAgICAgICAgICBvdXRwdXQsXG4gICAgICAgICAgICAoIHRoaXMuc2NvcGVPYmouX2lkICsgJy8nICsgdGhpcy5uYW1lICksXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGU6IHRoaXMuc3RhdGUgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgY2ZnLm5vcmVmc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB7IC4uLnRoaXMuc3RhdGUgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBPYmplY3Qua2V5cyh0aGlzLnN0YXRlKS5yZWR1Y2UoKCBoLCBrICkgPT4gKCAhcmVmc1sgayBdICYmICggaFsgayBdID0gdGhpcy5zdGF0ZVsgayBdICksIGggKSwge30pXG4gICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgZGF0YSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhLl9fcHJvdG9fXyA9PT0gb2JqUHJvdG8gP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICggaXMuYm9vbCh0aGlzLmRhdGEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHx8IGlzLm51bWJlcih0aGlzLmRhdGEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHx8IGlzLnN0cmluZyh0aGlzLmRhdGEpICkgJiYgdGhpcy5kYXRhXG4gICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgfHwgdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLFxuICAgICAgICAgICAgICAgIHJlZnNcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogcmVzdG9yZSBzdGF0ZSAmIGRhdGFcbiAgICAgKiBAcmV0dXJucyBib29sXG4gICAgICovXG4gICAgcmVzdG9yZSggc25hcHNob3QsIGltbWVkaWF0ZSApIHtcbiAgICAgICAgc25hcHNob3QgPSBzbmFwc2hvdFxuICAgICAgICAgICAgICAgICAgICYmIGtleVdhbGtuR2V0KHNuYXBzaG90LCB0aGlzLnNjb3BlT2JqLl9pZCArICcvJyArIHRoaXMubmFtZSlcbiAgICAgICAgICAgICAgICAgICB8fCB0aGlzLiRzY29wZS50YWtlU25hcHNob3RCeUtleSh0aGlzLnNjb3BlT2JqLl9pZCArICcvJyArIHRoaXMubmFtZSk7XG4gICAgICAgIFxuICAgICAgICBpZiAoICFzbmFwc2hvdCApXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIFxuICAgICAgICBpZiAoIHNuYXBzaG90ICkge1xuICAgICAgICAgICAgaWYgKCAhdGhpcy5pc1N0YWJsZSgpICYmICFpbW1lZGlhdGUgKVxuICAgICAgICAgICAgICAgIHRoaXMudGhlbigoKSA9PiByZXN0b3JlKHNuYXBzaG90KSlcbiAgICAgICAgICAgIGxldCBzbmFwO1xuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IHsgLi4uc25hcHNob3Quc3RhdGUgfTtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHNuYXBzaG90LnJlZnMpLmZvckVhY2goXG4gICAgICAgICAgICAgICAgKCBrZXkgKSA9PiB7Ly90b2RvXG4gICAgICAgICAgICAgICAgICAgIGlmICggc25hcCA9IHRoaXMuJHNjb3BlLmdldFNuYXBzaG90QnlLZXkoc25hcHNob3QucmVmc1sga2V5IF0pIClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGVbIGtleSBdID0gc25hcC5kYXRhO1xuICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ25vdCBmb3VuZCA6ICcsIGtleSwgc25hcC5yZWZzWyBrZXkgXSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMuZGF0YSA9IHNuYXBzaG90LmRhdGE7XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBVbiBiaW5kIHRoaXMgc3RvcmUgb2ZmIHRoZSBnaXZlbiBjb21wb25lbnQta2V5XG4gICAgICogQHBhcmFtIG9ialxuICAgICAqIEBwYXJhbSBrZXlcbiAgICAgKiBAcmV0dXJucyB7QXJyYXkuPCo+fVxuICAgICAqL1xuICAgIHVuQmluZCggb2JqLCBrZXksIHBhdGggKSB7XG4gICAgICAgIHZhciBmb2xsb3dlcnMgPSB0aGlzLl9mb2xsb3dlcnMsXG4gICAgICAgICAgICBpICAgICAgICAgPSBmb2xsb3dlcnMgJiYgZm9sbG93ZXJzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBmb2xsb3dlcnMgJiYgaS0tIClcbiAgICAgICAgICAgIGlmICggZm9sbG93ZXJzWyBpIF1bIDAgXSA9PT0gb2JqICYmIGZvbGxvd2Vyc1sgaSBdWyAxIF0gPT09IGtleSAmJiBmb2xsb3dlcnNbIGkgXVsgMiBdID09PSBwYXRoIClcbiAgICAgICAgICAgICAgICByZXR1cm4gZm9sbG93ZXJzLnNwbGljZShpLCAxKTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogQmluZCB0aGlzIHN0b3JlIGNoYW5nZXMgdG8gdGhlIGdpdmVuIGNvbXBvbmVudC1rZXlcbiAgICAgKiBAcGFyYW0gb2JqIHtSZWFjdC5Db21wb25lbnR8U3RvcmV8ZnVuY3Rpb24pXG4gICAgICogQHBhcmFtIGtleSB7c3RyaW5nfSBvcHRpb25hbCBrZXkgd2hlcmUgdG8gbWFwIHRoZSBwdWJsaWMgc3RhdGVcbiAgICAgKi9cbiAgICBiaW5kKCBvYmosIGtleSwgc2V0SW5pdGlhbCA9IHRydWUsIHBhdGggKSB7XG4gICAgICAgIHRoaXMuX2ZvbGxvd2Vycy5wdXNoKFsgb2JqLCBrZXksIHBhdGggXSk7XG4gICAgICAgIGlmICggc2V0SW5pdGlhbCAmJiB0aGlzLmRhdGEgJiYgdGhpcy5fc3RhYmxlICkge1xuICAgICAgICAgICAgbGV0IGRhdGEgPSBwYXRoID8gdGhpcy5yZXRyaWV2ZShwYXRoKSA6IHRoaXMuZGF0YTtcbiAgICAgICAgICAgIGlmICggdHlwZW9mIG9iaiAhPSBcImZ1bmN0aW9uXCIgKSB7XG4gICAgICAgICAgICAgICAgaWYgKCBrZXkgKSBvYmouc2V0U3RhdGUoeyBbIGtleSBdOiBkYXRhIH0pO1xuICAgICAgICAgICAgICAgIGVsc2Ugb2JqLnNldFN0YXRlKGRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgb2JqKGRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIG9uY2UoJ3N0YWJsZScsIGNiKVxuICAgICAqIEBwYXJhbSBvYmoge1JlYWN0LkNvbXBvbmVudHxTdG9yZXxmdW5jdGlvbilcbiAgICAgKiBAcGFyYW0ga2V5IHtzdHJpbmd9IG9wdGlvbmFsIGtleSB3aGVyZSB0byBtYXAgdGhlIHB1YmxpYyBzdGF0ZVxuICAgICAqL1xuICAgIHRoZW4oIGNiICkge1xuICAgICAgICBpZiAoIHRoaXMuX3N0YWJsZSApXG4gICAgICAgICAgICByZXR1cm4gY2IodGhpcy5kYXRhKTtcbiAgICAgICAgdGhpcy5vbmNlKCdzdGFibGUnLCBlID0+IGNiKHRoaXMuZGF0YSkpO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBBZGQgYSBsb2NrIHNvIHRoZSBzdG9yZSB3aWxsIG5vdCBwcm9wYWcgaXQgZGF0YSB1bnRpbGwgcmVsZWFzZSgpIGlzIGNhbGxcbiAgICAgKiBAcGFyYW0gcHJldmlvdXMge1N0b3JlfG51bWJlcnxBcnJheX0gQG9wdGlvbmFsIHdmIHRvIHdhaXQsIHJlbGVhc2VzIHRvIHdhaXQgb3JcbiAgICAgKiAgICAgYXJyYXkgb2Ygc3R1ZmYgdG8gd2FpdFxuICAgICAqIEByZXR1cm5zIHt0aGlzfVxuICAgICAqL1xuICAgIHdhaXQoIHByZXZpb3VzICkge1xuICAgICAgICBpZiAoIHR5cGVvZiBwcmV2aW91cyA9PSBcIm51bWJlclwiIClcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9fbG9ja3MuYWxsICs9IHByZXZpb3VzO1xuICAgICAgICBpZiAoIGlzLmFycmF5KHByZXZpb3VzKSApXG4gICAgICAgICAgICByZXR1cm4gcHJldmlvdXMubWFwKHRoaXMud2FpdC5iaW5kKHRoaXMpKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX3N0YWJsZSAmJiB0aGlzLmVtaXQoJ3Vuc3RhYmxlJywgdGhpcy5zdGF0ZSwgdGhpcy5kYXRhKTtcbiAgICAgICAgdGhpcy5fc3RhYmxlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX19sb2Nrcy5hbGwrKztcbiAgICAgICAgXG4gICAgICAgIGxldCByZWFzb24gPSBpcy5zdHJpbmcocHJldmlvdXMpID8gcHJldmlvdXMgOiBudWxsO1xuICAgICAgICBpZiAoIHJlYXNvbiApIHtcbiAgICAgICAgICAgIHRoaXMuX19sb2Nrc1sgcmVhc29uIF0gPSB0aGlzLl9fbG9ja3NbIHJlYXNvbiBdIHx8IDA7XG4gICAgICAgICAgICB0aGlzLl9fbG9ja3NbIHJlYXNvbiBdKys7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCBwcmV2aW91cyAmJiBpcy5mbihwcmV2aW91cy50aGVuKSApIHtcbiAgICAgICAgICAgIHByZXZpb3VzLnRoZW4odGhpcy5yZWxlYXNlLmJpbmQodGhpcywgbnVsbCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBEZWNyZWFzZSBsb2NrcyBmb3IgdGhpcyBzdG9yZSwgaWYgaXQgcmVhY2ggMCAsXG4gICAgICogaXQgd2lsbCBiZSBwcm9wYWdhdGVkIHRvIHRoZSBmb2xsb3dlcnMsXG4gICAgICogdGhlbiwgYWxsIHN0dWZmIHBhc3NlZCB0byBcInRoZW5cIiBjYWxsIGJhY2sgd2lsbCBiZSBleGVjIC8gcmVsZWFzZWRcbiAgICAgKiBAcGFyYW0gZGVzeW5jXG4gICAgICogQHJldHVybnMgeyp9XG4gICAgICovXG4gICAgcmVsZWFzZSggcmVhc29uLCBjYiApIHtcbiAgICAgICAgdmFyIF9zdGF0aWMgPSB0aGlzLmNvbnN0cnVjdG9yLCBtZSA9IHRoaXM7XG4gICAgICAgIGxldCBpICAgICAgID0gMCwgd2FzU3RhYmxlID0gdGhpcy5fc3RhYmxlO1xuICAgICAgICBcbiAgICAgICAgaWYgKCBpcy5mbihyZWFzb24pICkge1xuICAgICAgICAgICAgY2IgICAgID0gcmVhc29uO1xuICAgICAgICAgICAgcmVhc29uID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKCByZWFzb24gKSB7XG4gICAgICAgICAgICBpZiAoIHRoaXMuX19sb2Nrc1sgcmVhc29uIF0gPT0gMCApXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlJlbGVhc2UgbW9yZSB0aGFuIGxvY2tpbmcgIVwiLCByZWFzb24pO1xuICAgICAgICAgICAgdGhpcy5fX2xvY2tzWyByZWFzb24gXSA9IHRoaXMuX19sb2Nrc1sgcmVhc29uIF0gfHwgMDtcbiAgICAgICAgICAgIHRoaXMuX19sb2Nrc1sgcmVhc29uIF0tLTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKCAhcmVhc29uICYmIHRoaXMuX19sb2Nrcy5hbGwgPT0gMCApXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiUmVsZWFzZSBtb3JlIHRoYW4gbG9ja2luZyAhXCIpO1xuICAgICAgICBcbiAgICAgICAgaWYgKCAhLS10aGlzLl9fbG9ja3MuYWxsICYmIHRoaXMuaXNDb21wbGV0ZSgpICkge1xuICAgICAgICAgICAgbGV0IHByb3BhZyAgID0gdGhpcy5zaG91bGRQcm9wYWcodGhpcy5kYXRhKTtcbiAgICAgICAgICAgIHRoaXMuX3N0YWJsZSA9IHRydWU7XG4gICAgICAgICAgICBwcm9wYWcgJiYgdGhpcy5fcmV2Kys7Ly9cbiAgICAgICAgICAgIGlmICggcHJvcGFnICYmIHRoaXMuX2ZvbGxvd2Vycy5sZW5ndGggKVxuICAgICAgICAgICAgICAgIHRoaXMuX2ZvbGxvd2Vycy5mb3JFYWNoKGZ1bmN0aW9uIHByb3BhZyggZm9sbG93ZXIgKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0gZm9sbG93ZXJbIDIgXSA/IG1lLnJldHJpZXZlKGZvbGxvd2VyWyAyIF0pIDogbWUuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgLy9pZiAoICFkYXRhICkgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYgKCB0eXBlb2YgZm9sbG93ZXJbIDAgXSA9PSBcImZ1bmN0aW9uXCIgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb2xsb3dlclsgMCBdKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9jYiAmJiBpKys7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb2xsb3dlclsgMCBdLnNldFN0YXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICggZm9sbG93ZXJbIDEgXSApID8geyBbIGZvbGxvd2VyWyAxIF0gXTogZGF0YSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBkYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9jYiAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgKCkgPT4gKCEoLS1pKSAmJiBjYigpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vKVxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy9lbHNlXG4gICAgICAgICAgICAhd2FzU3RhYmxlICYmIHRoaXMuZW1pdCgnc3RhYmxlJywgdGhpcy5kYXRhKTtcbiAgICAgICAgICAgIHByb3BhZyAmJiB0aGlzLmVtaXQoJ3VwZGF0ZScsIHRoaXMuZGF0YSk7XG4gICAgICAgICAgICBjYiAmJiBjYigpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBjYiAmJiB0aGlzLnRoZW4oY2IpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgXG4gICAgcHJvcGFnKCBkYXRhICkge1xuICAgICAgICB0aGlzLmVtaXQoJ3VwZGF0ZScsIGRhdGEpO1xuICAgIH1cbiAgICBcbiAgICByZXRhaW4oIHJlYXNvbiApIHtcbiAgICAgICAgdGhpcy5fX3JldGFpbnMuYWxsKys7XG4gICAgICAgIGlmICggcmVhc29uICkge1xuICAgICAgICAgICAgdGhpcy5fX3JldGFpbnNbIHJlYXNvbiBdID0gdGhpcy5fX3JldGFpbnNbIHJlYXNvbiBdIHx8IDA7XG4gICAgICAgICAgICB0aGlzLl9fcmV0YWluc1sgcmVhc29uIF0rKztcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBkaXNwb3NlKCByZWFzb24gKSB7XG4gICAgICAgIC8vY29uc29sZS53YXJuKFwiZGlzcG9zZVwiLCByZWFzb24sIHRoaXMuX19yZXRhaW5zKTtcbiAgICAgICAgaWYgKCByZWFzb24gKSB7XG4gICAgICAgICAgICBpZiAoICF0aGlzLl9fcmV0YWluc1sgcmVhc29uIF0gKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkRpc3Bvc2UgbW9yZSB0aGFuIHJldGFpbmluZyA6IFwiICsgcmVhc29uKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5fX3JldGFpbnNbIHJlYXNvbiBdLS07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCB0aGlzLl9fcmV0YWlucy5hbGwgPT0gMCApXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJEaXNwb3NlIG1vcmUgdGhhbiByZXRhaW5pbmcgIVwiKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX19yZXRhaW5zLmFsbC0tO1xuICAgICAgICBcbiAgICAgICAgaWYgKCAhdGhpcy5fX3JldGFpbnMuYWxsICkge1xuICAgICAgICAgICAgaWYgKCB0aGlzLl9wZXJzaXN0ZW5jZVRtICkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2Rlc3Ryb3lUTSAmJiBjbGVhclRpbWVvdXQodGhpcy5fZGVzdHJveVRNKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9kZXN0cm95VE0gPSBzZXRUaW1lb3V0KFxuICAgICAgICAgICAgICAgICAgICBlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2Rlc3Ryb3lUTSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL3RoaXMudGhlbihzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICF0aGlzLl9fcmV0YWlucy5hbGwgJiYgIXRoaXMuZGVhZCAmJiB0aGlzLmRlc3Ryb3koKVxuICAgICAgICAgICAgICAgICAgICAgICAgLy99KTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcGVyc2lzdGVuY2VUbVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvL3RoaXMudGhlbihzID0+XG4gICAgICAgICAgICAgICAgKCAhdGhpcy5fX3JldGFpbnMuYWxsICYmICF0aGlzLmRlYWQgJiYgdGhpcy5kZXN0cm95KCkgKVxuICAgICAgICAgICAgICAgIC8vKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBkZXN0cm95KCkge1xuICAgICAgICAvLyAgY29uc29sZS5sb2coXCJkZXN0cm95XCIsIHRoaXMuX3VpZCk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmVtaXQoJ2Rlc3Ryb3knLCB0aGlzKTtcbiAgICAgICAgaWYgKCB0aGlzLl9zdGFiaWxpemVyIClcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9zdGFiaWxpemVyKTtcbiAgICAgICAgXG4gICAgICAgIGlmICggdGhpcy5fZm9sbG93ZXJzLmxlbmd0aCApXG4gICAgICAgICAgICB0aGlzLl9mb2xsb3dlcnMuZm9yRWFjaChcbiAgICAgICAgICAgICAgICAoIGZvbGxvd2VyICkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIHR5cGVvZiBmb2xsb3dlclsgMCBdICE9PSBcImZ1bmN0aW9uXCIgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIGZvbGxvd2VyWyAwIF0uc3RvcmVzIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgZm9sbG93ZXJbIDAgXS5zdG9yZXNbIGZvbGxvd2VyWyAxIF0gXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgIHRoaXMuX2ZvbGxvd2Vycy5sZW5ndGggPSAwO1xuICAgICAgICB0aGlzLmNvbnN0cnVjdG9yLl9yZXYgID0gdGhpcy5yZXY7XG4gICAgICAgIHRoaXMuZGVhZCAgICAgICAgICAgICAgPSB0cnVlO1xuICAgICAgICB0aGlzLl9yZXZzICAgICAgICAgICAgID0gdGhpcy5kYXRhID0gdGhpcy5zdGF0ZSA9IHRoaXMuc2NvcGUgPSBudWxsO1xuICAgICAgICB0aGlzLnJlbW92ZUFsbExpc3RlbmVycygpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBnZXQgYSBzdGF0aWMgYWxpYXNlZCByZWZlcmVuY2Ugb2YgYSBzdG9yZVxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqIEByZXR1cm5zIHt7c3RvcmU6IFN0b3JlLCBuYW1lOiAqfX1cbiAqL1xuU3RvcmUuYXMgPSBmdW5jdGlvbiAoIG5hbWUgKSB7XG4gICAgcmV0dXJuIHsgc3RvcmU6IHRoaXMsIG5hbWUgfTtcbn1cblxuLyoqXG4gKiBNYXAgYWxsIG5hbWVkIHN0b3JlcyBpbiB7a2V5c30gdG8gdGhlIHtvYmplY3R9J3Mgc3RhdGVcbiAqIEhvb2sgY29tcG9uZW50V2lsbFVubW91bnQgKGZvciByZWFjdCBjb21wKSBvciBkZXN0cm95IHRvIHVuQmluZCB0aGVtIGF1dG9tYXRpY2FsbHlcbiAqIEBzdGF0aWNcbiAqIEBwYXJhbSBvYmplY3Qge09iamVjdH0gdGFyZ2V0IHN0YXRlIGF3YXJlIG9iamVjdCAoUmVhY3QuQ29tcG9uZW50fFN0b3JlfC4uLilcbiAqIEBwYXJhbSBrZXlzIHtBcnJheX0gRXggOiBbXCJzZXNzaW9uXCIsIFwib3RoZXJTdGF0aWNOYW1lZFN0b3JlOmtleVwiLFxuICogICAgIHN0b3JlLmFzKCdhbm90aGVyS2V5JyldXG4gKi9cblN0b3JlLm1hcCA9IGZ1bmN0aW9uICggY1N0b3JlLCBrZXlzLCBzY29wZSwgb3JpZ2luLCBzZXRJbml0aWFsID0gZmFsc2UgKSB7XG4gICAgdmFyIHRhcmdldFJldnMgICAgID0gY1N0b3JlLl9yZXZzIHx8IHt9O1xuICAgIHZhciB0YXJnZXRTY29wZSAgICA9IGNTdG9yZS5zdG9yZXMgfHwgKCBjU3RvcmUuc3RvcmVzID0ge30gKTtcbiAgICB2YXIgaW5pdGlhbE91dHB1dHMgPSB7fTtcbiAgICBrZXlzICAgICAgICAgICAgICAgPSBpcy5hcnJheShrZXlzKSA/IFsgLi4ua2V5cyBdIDogWyBrZXlzIF07XG4gICAgXG4gICAgXG4gICAgc2NvcGUgPSBzY29wZSB8fCBTdG9yZS5zdGF0aWNTY29wZTtcbiAgICBcbiAgICBrZXlzID0ga2V5cy5maWx0ZXIoXG4gICAgICAgIC8vIEB0b2RvIDogdXNlIHF1ZXJ5IHJlZnNcbiAgICAgICAgLy8gKHN0b3JlKShcXC5zdG9yZSkqKFxcWyhcXCp8KHByb3BzKVxcdyspKylcXF0pPyhcXDphbGlhcylcbiAgICAgICAgKCBrZXkgKSA9PiB7XG4gICAgICAgICAgICBpZiAoICFrZXkgKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIk5vdCBhIG1hcHBhYmxlIHN0b3JlIGl0ZW0gJ1wiICsga2V5ICsgXCInIGluIFwiICsgb3JpZ2luICsgJyAhIScpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBuYW1lLFxuICAgICAgICAgICAgICAgIGFsaWFzLFxuICAgICAgICAgICAgICAgIHBhdGgsXG4gICAgICAgICAgICAgICAgc3RvcmUsIF9rZXk7XG4gICAgICAgICAgICBpZiAoIGtleS5zdG9yZSAmJiBrZXkubmFtZSApIHtcbiAgICAgICAgICAgICAgICBhbGlhcyA9IG5hbWUgPSBrZXkubmFtZTtcbiAgICAgICAgICAgICAgICBzdG9yZSA9IGtleS5zdG9yZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKCBpcy5mbihrZXkpICkge1xuICAgICAgICAgICAgICAgIG5hbWUgPSBhbGlhcyA9IGtleS5uYW1lIHx8IGtleS5kZWZhdWx0TmFtZTtcbiAgICAgICAgICAgICAgICBzdG9yZSA9IGtleTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIF9rZXkgID0ga2V5Lm1hdGNoKC8oW1xcd19dKykoKD86XFwuW1xcd19dKykqKSg/OlxcOihbXFx3X10rKSk/Lyk7XG4gICAgICAgICAgICAgICAgbmFtZSAgPSBfa2V5WyAxIF07XG4gICAgICAgICAgICAgICAgcGF0aCAgPSBfa2V5WyAyIF0gJiYgX2tleVsgMiBdLnN1YnN0cigxKTtcbiAgICAgICAgICAgICAgICBzdG9yZSA9IHNjb3BlLnN0b3Jlc1sgX2tleVsgMSBdIF07XG4gICAgICAgICAgICAgICAgYWxpYXMgPSBfa2V5WyAzIF0gfHwgcGF0aCAmJiBwYXRoLm1hdGNoKC8oW15cXC5dKikkLylbIDAgXSB8fCBfa2V5WyAxIF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoICFzdG9yZSApIHtcbiAgICAgICAgICAgICAgICBsZXQgaT1bXTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBvIGluIHNjb3BlLnN0b3JlcylcbiAgICAgICAgICAgICAgICAgICAgaS5wdXNoKG8pXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIk5vdCBhIG1hcHBhYmxlIHN0b3JlIGl0ZW0gJ1wiICsgbmFtZSArIFwiL1wiICsgYWxpYXMgKyBcIicgaW4gXCIgKyAoIGNTdG9yZS5uYW1lIHx8IGNTdG9yZSApICsgJyAhIScsIHN0b3JlLCBfa2V5LCBzY29wZS5zdG9yZXMsIGkpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICggaXMucnNTY29wZShzdG9yZS5wcm90b3R5cGUpICkgc2NvcGUuX21vdW50KG5hbWUpO1xuICAgICAgICAgICAgaWYgKCBpcy5yc1Njb3BlKHN0b3JlKSApIHtcbiAgICAgICAgICAgICAgICBzdG9yZSA9IHNjb3BlLl9tb3VudChrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoIHRhcmdldFJldnNbIG5hbWUgXSApIHJldHVybiBmYWxzZTsvLyBpZ25vcmUgZGJsIHVzZXMgZm9yIG5vd1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmICggaXMuZm4oc3RvcmUpICkge1xuICAgICAgICAgICAgICAgIHNjb3BlLl9tb3VudChuYW1lKVxuICAgICAgICAgICAgICAgIHNjb3BlLnN0b3Jlc1sgbmFtZSBdLmJpbmQoY1N0b3JlLCBhbGlhcywgc2V0SW5pdGlhbCwgcGF0aCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBzdG9yZS5iaW5kKGNTdG9yZSwgYWxpYXMsIHNldEluaXRpYWwsIHBhdGgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBnaXZlIGluaXRpYWwgc3RvcmUgd2VpZ2h0IGJhc2luZyBzb3VyY2VzXG4gICAgICAgICAgICBzY29wZS5zdG9yZXNbIG5hbWUgXS5fc291cmNlcyAmJiBjU3RvcmUuX3NvdXJjZXMucHVzaCguLi5zY29wZS5zdG9yZXNbIG5hbWUgXS5fc291cmNlcyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRhcmdldFJldnNbIGFsaWFzIF0gPSB0YXJnZXRSZXZzWyBhbGlhcyBdIHx8IHRydWU7XG4gICAgICAgICAgICAhdGFyZ2V0U2NvcGVbIG5hbWUgXSAmJiAoIHRhcmdldFNjb3BlWyBuYW1lIF0gPSBzY29wZS5zdG9yZXNbIG5hbWUgXSApO1xuICAgICAgICAgICAgaWYgKCBzY29wZS5zdG9yZXNbIG5hbWUgXS5oYXNPd25Qcm9wZXJ0eSgnZGF0YScpIClcbiAgICAgICAgICAgICAgICBpbml0aWFsT3V0cHV0c1sgbmFtZSBdID0gc2NvcGUuZGF0YVsgbmFtZSBdO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICApO1xuICAgIFxuICAgIC8vIC4uLiBAdG9kb1xuICAgIGNTdG9yZS5vbmNlKCdkZXN0cm95JywgKCAuLi5hcmd6ICkgPT4ge1xuICAgICAgICBrZXlzLm1hcChcbiAgICAgICAgICAgICgga2V5ICkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBuYW1lLFxuICAgICAgICAgICAgICAgICAgICBhbGlhcywgcGF0aCxcbiAgICAgICAgICAgICAgICAgICAgc3RvcmU7XG4gICAgICAgICAgICAgICAgaWYgKCBrZXkuc3RvcmUgJiYga2V5Lm5hbWUgKSB7XG4gICAgICAgICAgICAgICAgICAgIGFsaWFzID0gbmFtZSA9IGtleS5uYW1lO1xuICAgICAgICAgICAgICAgICAgICBzdG9yZSA9IGtleS5zdG9yZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoIGlzLmZuKGtleSkgKSB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWUgPSBhbGlhcyA9IGtleS5uYW1lIHx8IGtleS5kZWZhdWx0TmFtZTtcbiAgICAgICAgICAgICAgICAgICAgc3RvcmUgPSBzY29wZS5zdG9yZXNbIG5hbWUgXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGtleSAgID0ga2V5Lm1hdGNoKC8oW1xcd19dKykoKD86XFwuW1xcd19dKykqKSg/OlxcOihbXFx3X10rKSk/Lyk7XG4gICAgICAgICAgICAgICAgICAgIG5hbWUgID0ga2V5WyAxIF07XG4gICAgICAgICAgICAgICAgICAgIHBhdGggID0ga2V5WyAyIF0gJiYga2V5WyAyIF0uc3Vic3RyKDEpO1xuICAgICAgICAgICAgICAgICAgICBzdG9yZSA9IHNjb3BlLnN0b3Jlc1sga2V5WyAxIF0gXTtcbiAgICAgICAgICAgICAgICAgICAgYWxpYXMgPSBrZXlbIDMgXSB8fCBwYXRoICYmIHBhdGgubWF0Y2goLyhbXlxcLl0qKSQvKVsgMCBdIHx8IGtleVsgMSBdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBzdG9yZSAmJiAhaXMuZm4oc3RvcmUpICYmIHN0b3JlLnVuQmluZChjU3RvcmUsIGFsaWFzLCBwYXRoKVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH0pXG4gICAgXG4gICAgcmV0dXJuIGluaXRpYWxPdXRwdXRzO1xufTtcblxuXG5pcy5yc1N0b3JlID0gZnVuY3Rpb24gKCBvYmogKSB7XG4gICAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIFN0b3JlXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0b3JlO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9TdG9yZS5qcyIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpICAyMDE4IFdpc2UgV2lsZCBXZWIgLlxuICpcbiAqICBNSVQgTGljZW5zZVxuICpcbiAqICBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiAgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqICB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiAgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiAgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiAgVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG4gKiAgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqICBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG4gKiAgU09GVFdBUkUuXG4gKlxuICogQGF1dGhvciA6IE5hdGhhbmFlbCBCcmF1blxuICogQGNvbnRhY3QgOiBjYWlwaWxhYnNAZ21haWwuY29tXG4gKi9cblxuLy9pbXBvcnQgaW5kZXggZnJvbSBcIi4vaW5kZXhcIjsvLyB3aWxsIHVzZSBhcyBleHRlcm5hbCB0aGUgaW5kZXggaW4gZGlzdFxuaW1wb3J0IGlzIGZyb20gXCJpc1wiO1xuXG4vKipcbiAqIE1pbmltYWwgcHVzaCBzZXF1ZW5jZXIsIGFwcGx5IHN0b3JlcyBzcGVjaWZpYyB0YXNrIGluIHRoZSByaWdodCBvcmRlciAocm9vdCBzdG9yZXNcbiAqIGZpcnN0KVxuICovXG5sZXQgdGFza1F1ZXVlICAgICAgPSBbXSxcbiAgICBjdXJXZWlnaHQgICAgICA9IDAsXG4gICAgbWF4V2VpZ2h0ICAgICAgPSAwLFxuICAgIG1pbldlaWdodCAgICAgID0gMCxcbiAgICB0YXNrQ291bnQgICAgICA9IDAsXG4gICAgZGVTeW5jICAgICAgICAgPSBmYWxzZSxcbiAgICBkZVN5bmNNYXhUYXNrcyA9IDEwLFxuICAgIHRhc2ssXG4gICAgaXNSdW5uaW5nLFxuICAgIGVycm9yQ2F0Y2hlciAgID0ge1xuICAgICAgICBsYXN0RXJyb3I6IG51bGwsXG4gICAgICAgIGRpc3BhdGNoIDogZnVuY3Rpb24gKCBlcnJvciApIHtcbiAgICAgICAgICAgIGVycm9yQ2F0Y2hlci5kaXNhYmxlKCk7XG4gICAgICAgICAgICBpZiAoIHRhc2sgJiYgdGFza1sgMCBdLmhhbmRsZUVycm9yICkge1xuICAgICAgICAgICAgICAgIHRhc2tbIDAgXS5oYW5kbGVFcnJvcihlcnJvciwgdGFzayk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICggdGFzayApXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlJlU2NvcGUgOiBBbiBhcHBseSB0YXNrIGhhcyBmYWlsZWQgISFcIiwgdGFza1sgMSBdLCBcIiBvbiBcIiwgdGFza1sgMCBdLm5hbWUgfHwgdGFza1sgMCBdLmNvbnN0cnVjdG9yLm5hbWUpXG4gICAgICAgIFxuICAgICAgICAgICAgaXNSdW5uaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB0YXNrICAgICAgPSBudWxsO1xuICAgICAgICAgICAgcnVuTm93KCk7XG4gICAgICAgIH0sXG4gICAgICAgIGVuYWJsZSAgIDogKCB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyApXG4gICAgICAgICAgICAgICAgICAgPyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgZXJyb3JDYXRjaGVyLmRpc3BhdGNoKVxuICAgICAgICAgICAgfSA6ICgpID0+IHtcbiAgICAgICAgICAgICAgICBwcm9jZXNzLm9uKCd1bmNhdWdodEV4Y2VwdGlvbicsIGVycm9yQ2F0Y2hlci5kaXNwYXRjaCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICBkaXNhYmxlICA6ICggdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgKVxuICAgICAgICAgICAgICAgICAgID8gKCkgPT4ge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdlcnJvcicsIGVycm9yQ2F0Y2hlci5kaXNwYXRjaClcbiAgICAgICAgICAgIH0gOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgcHJvY2Vzcy5yZW1vdmVMaXN0ZW5lcigndW5jYXVnaHRFeGNlcHRpb24nLCBlcnJvckNhdGNoZXIuZGlzcGF0Y2gpO1xuICAgICAgICAgICAgfVxuICAgIH1cbjtcblxuZnVuY3Rpb24gcnVuTm93KCkge1xuICAgIGlmICggIWlzUnVubmluZyApIHtcbiAgICAgICAgcnVuKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBydW4oKSB7XG4gICAgbGV0IGZyb20gID0gRGF0ZS5ub3coKTtcbiAgICBpc1J1bm5pbmcgPSB0cnVlO1xuICAgIGVycm9yQ2F0Y2hlci5lbmFibGUoKTtcbiAgICB3aGlsZSAoIHRhc2tDb3VudCApIHtcbiAgICAgICAgXG4gICAgICAgIC8vIHRyeSBmb3IgdGhlIGN1cnJlbnQgd2VpZ2h0XG4gICAgICAgIHdoaWxlICggISggdGFza1F1ZXVlWyBjdXJXZWlnaHQgXSAmJiB0YXNrUXVldWVbIGN1cldlaWdodCBdLmxlbmd0aCApIClcbiAgICAgICAgICAgIGN1cldlaWdodCsrO1xuICAgICAgICBcbiAgICAgICAgdGFza0NvdW50LS07XG4gICAgICAgIHRhc2sgPSB0YXNrUXVldWVbIGN1cldlaWdodCBdLnNoaWZ0KCk7XG4gICAgICAgIC8vY29uc29sZS5sb2coXCJUYXNrIDogXCIsIHRhc2tbMV0sIFwiIG9uIFwiLCB0YXNrWzBdLm5hbWUpO1xuICAgICAgICB0YXNrWyAwIF1bIHRhc2tbIDEgXSBdLmFwcGx5KHRhc2tbIDAgXSwgdGFza1sgMiBdKTtcbiAgICB9XG4gICAgdGFzayA9IHVuZGVmaW5lZDtcbiAgICBlcnJvckNhdGNoZXIuZGlzYWJsZSgpO1xuICAgIFxuICAgIGlzUnVubmluZyA9IGZhbHNlO1xuICAgIGlmICggdGFza0NvdW50ICkge1xuICAgICAgICBzZXRUaW1lb3V0KHJ1bk5vdyk7XG4gICAgfVxufVxuXG4vL1xuLy9pbmRleC5zZXRUYXNrRGVTeW5jID0gKCBuYiApID0+IHtcbi8vICAgIGlmICggbmIgPT09IGZhbHNlIClcbi8vICAgICAgICByZXR1cm4gZGVTeW5jID0gZmFsc2U7XG4vLyAgICBlbHNlIGlmICggbmIgPT09IHRydWUgKSB7XG4vLyAgICAgICAgZGVTeW5jICAgICAgICAgPSB0cnVlO1xuLy8gICAgICAgIGRlU3luY01heFRhc2tzID0gMTA7XG4vLyAgICB9XG4vLyAgICBlbHNlIChpcy5pbnQobmIpKVxuLy8gICAge1xuLy8gICAgICAgIGRlU3luYyAgICAgICAgID0gdHJ1ZTtcbi8vICAgICAgICBkZVN5bmNNYXhUYXNrcyA9IG5iO1xuLy8gICAgfVxuLy99O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgcHVzaFRhc2soIG9iaiwgZm4sIGFyZ3ogKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgbW9yZSBhIHN0b3JlIGhhdmUgc291cmNlcywgdGhlIG1vcmUgaXQgc2hvdWxkIGJlIHByb2Nlc3NlZCBmaXJzdFxuICAgICAgICAgKiBTbyBsZWFmcyBzdG9yZXMgc3RheSBzeW5jLCBhbmQgcm9vdCBzdG9yZXMgcmVjZWl2ZSBtZXJnZWQgc3RhdGUgdXBkYXRlcztcbiAgICAgICAgICogZ2xvYmFsIHN0YXRlIHN0YXkgY29oZXJlbnRcbiAgICAgICAgICpcbiAgICAgICAgICogVGhpcyBtZWFuIHdoYXRldmVyIHRoZSBudW1iZXIgb2Ygc3RvcmVzICYgdGhlIGNvbXBsZXhpdHkgb2YgdGhlIGRlcHMsXG4gICAgICAgICAqIHVwZGF0aW5nIGEgc3RvcmUgc3RhdGUgd2lsbCB1cGRhdGUgaXRzIHN5bmNocm9uZSBjaGlsZCBzdG9yZXMgaW1tZWRpYXRlbHlcbiAgICAgICAgICpcbiAgICAgICAgICpcbiAgICAgICAgICogQHR5cGUgeyp8bnVtYmVyfVxuICAgICAgICAgKi9cbiAgICAgICAgbGV0IHdlaWdodCA9IG9iai5fc291cmNlcyAmJiBvYmouX3NvdXJjZXMubGVuZ3RoIHx8IDEsXG4gICAgICAgICAgICBzdGFjayAgPSB0YXNrUXVldWVbIHdlaWdodCBdID1cbiAgICAgICAgICAgICAgICB0YXNrUXVldWVbIHdlaWdodCBdIHx8IFtdO1xuICAgICAgICBcbiAgICAgICAgbWF4V2VpZ2h0ID0gTWF0aC5tYXgobWF4V2VpZ2h0LCB3ZWlnaHQpO1xuICAgICAgICBjdXJXZWlnaHQgPSBNYXRoLm1pbihjdXJXZWlnaHQsIHdlaWdodCk7XG4gICAgICAgIHRhc2tDb3VudCsrO1xuICAgICAgICBcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcIlB1c2ggVGFzayA6IFwiLCBmbiwgXCIgb24gXCIsIG9iai5uYW1lLCB3ZWlnaHQpO1xuICAgICAgICBzdGFjay5wdXNoKFsgb2JqLCBmbiwgYXJneiBdKTtcbiAgICAgICAgc2V0VGltZW91dChydW5Ob3csIDApO1xuICAgICAgICByZXR1cm4gc3RhY2subGVuZ3RoO1xuICAgIH1cbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWxzL1Rhc2tTZXF1ZW5jZXIuanMiLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Byb2Nlc3MvYnJvd3Nlci5qc1xuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcbiAqIENvcHlyaWdodCAoYykgIDIwMTggV2lzZSBXaWxkIFdlYiAuXG4gKlxuICogIE1JVCBMaWNlbnNlXG4gKlxuICogIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqICBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiAgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqICBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqICBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqICBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcbiAqICBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqICBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiAgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiAgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiAgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiAgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcbiAqICBTT0ZUV0FSRS5cbiAqXG4gKiBAYXV0aG9yIDogTmF0aGFuYWVsIEJyYXVuXG4gKiBAY29udGFjdCA6IGNhaXBpbGFic0BnbWFpbC5jb21cbiAqL1xuXG5pbXBvcnQgaXMgICAgZnJvbSAnaXMnXG5cbmNvbnN0IFNpbXBsZU9iamVjdFByb3RvID0gKCB7fSApLmNvbnN0cnVjdG9yO1xuXG5sZXQgc2NvcGFibGVzID0gW107XG5cbmZ1bmN0aW9uIGFkZFNjb3BhYmxlVHlwZSggdGVzdCwgaGFuZGxlLCBtZW1iZXIgPSBmYWxzZSwgc3RhdGVTY29wZSA9IGZhbHNlICkge1xuICAgIHNjb3BhYmxlcy5wdXNoKFxuICAgICAgICB7XG4gICAgICAgICAgICB0ZXN0LFxuICAgICAgICAgICAgbWVtYmVyLFxuICAgICAgICAgICAgc3RhdGVTY29wZSxcbiAgICAgICAgICAgIGhhbmRsZVxuICAgICAgICB9XG4gICAgKVxufVxuXG4vL1xuZnVuY3Rpb24gaXNTY29wYWJsZVR5cGUoIENvbXAsIG1lbWJlciwgc3RhdGVTY29wZSApIHtcbiAgICBcbiAgICBmb3IgKCBsZXQgaSA9IDA7IGkgPCBzY29wYWJsZXMubGVuZ3RoOyBpKysgKVxuICAgICAgICBpZiAoXG4gICAgICAgICAgICAoIG1lbWJlciA9PT0gdW5kZWZpbmVkIHx8IG1lbWJlciA9PSBzY29wYWJsZXNbIGkgXS5tZW1iZXIgKVxuICAgICAgICAgICAgJiYgc3RhdGVTY29wZSA9PSBzY29wYWJsZXNbIGkgXS5zdGF0ZVNjb3BlXG4gICAgICAgICAgICAmJiBzY29wYWJsZXNbIGkgXS50ZXN0KENvbXApXG4gICAgICAgIClcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgIFxuICAgIHJldHVybiBmYWxzZTtcbiAgICBcbn1cblxuZnVuY3Rpb24gYXBwbHlTY29wYWJsZVR5cGUoIENvbXAsIGFyZ3osIG1lbWJlciwgc3RhdGVTY29wZSApIHtcbiAgICBcbiAgICBmb3IgKCBsZXQgaSA9IDA7IGkgPCBzY29wYWJsZXMubGVuZ3RoOyBpKysgKVxuICAgICAgICBpZiAoIG1lbWJlciA9PSBzY29wYWJsZXNbIGkgXS5tZW1iZXIgJiYgc3RhdGVTY29wZSA9PSBzY29wYWJsZXNbIGkgXS5zdGF0ZVNjb3BlICYmIHNjb3BhYmxlc1sgaSBdLnRlc3QoQ29tcCkgKVxuICAgICAgICAgICAgcmV0dXJuIHNjb3BhYmxlc1sgaSBdLmhhbmRsZShDb21wLCAuLi5hcmd6KTtcbiAgICBcbiAgICBjb25zb2xlLndhcm4oXCJyZVNjb3BlIDogVW5rbm93biB0eXBlXCIsIENvbXApXG4gICAgXG4gICAgcmV0dXJuIGZhbHNlO1xuICAgIFxufVxuXG5mdW5jdGlvbiByZVNjb3BlKCAuLi5hcmd6ICkge1xuICAgIC8vIGFyZSB3ZSBkZWNvcmF0aW5nIGEgbWVtYmVyIC8gd2l0aG91dCBhcmd6XG4gICAgaWYgKCBhcmd6WyAwIF0gaW5zdGFuY2VvZiBTaW1wbGVPYmplY3RQcm90byAmJiBhcmd6WyAyIF0gaW5zdGFuY2VvZiBTaW1wbGVPYmplY3RQcm90byAmJiBhcmd6WyAwIF0uaGFzT3duUHJvcGVydHkoYXJnelsgMSBdKSApIHtcbiAgICAgICAgYXJnelsgMiBdLnZhbHVlID0gYXBwbHlTY29wYWJsZVR5cGUoYXJnelsgMCBdLCBbXSwgdHJ1ZSwgZmFsc2UpO1xuICAgICAgICByZXR1cm4gYXJnelsgMCBdO1xuICAgIH1cbiAgICBlbHNlIGlmICggIWlzU2NvcGFibGVUeXBlKGFyZ3pbIDAgXSwgdW5kZWZpbmVkLCBmYWxzZSkgKSB7XG4gICAgICAgIHJldHVybiAoIC4uLmFyZ3oyICkgPT4ge1xuICAgICAgICAgICAgLy8gYXJlIHdlIGRlY29yYXRpbmcgYSBtZW1iZXIgLyB3aXRoIGFyZ3pcbiAgICAgICAgICAgIGlmICggYXJnejJbIDAgXSBpbnN0YW5jZW9mIFNpbXBsZU9iamVjdFByb3RvICYmIGFyZ3oyWyAyIF0gaW5zdGFuY2VvZiBTaW1wbGVPYmplY3RQcm90byAmJiBhcmd6MlsgMCBdLmhhc093blByb3BlcnR5KGFyZ3oyWyAxIF0pICkge1xuICAgICAgICAgICAgICAgIGFyZ3oyWyAyIF0udmFsdWUgPSBhcHBseVNjb3BhYmxlVHlwZShhcmd6MlsgMCBdLCBhcmd6LCB0cnVlLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFyZ3oyWyAwIF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlU2NvcGUoYXJnejJbIDAgXSwgLi4uYXJneik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGFwcGx5U2NvcGFibGVUeXBlKGFyZ3pbIDAgXSwgYXJnei5zbGljZSgxKSwgZmFsc2UsIGZhbHNlKTtcbn1cblxuZnVuY3Rpb24gc2NvcGVUb1N0YXRlKCAuLi5hcmd6ICkge1xuICAgIC8vIGFyZSB3ZSBkZWNvcmF0aW5nIGEgbWVtYmVyIC8gd2l0aG91dCBhcmd6XG4gICAgaWYgKCBhcmd6WyAwIF0gaW5zdGFuY2VvZiBTaW1wbGVPYmplY3RQcm90byAmJiBhcmd6WyAyIF0gaW5zdGFuY2VvZiBTaW1wbGVPYmplY3RQcm90byAmJiBhcmd6WyAwIF0uaGFzT3duUHJvcGVydHkoYXJnelsgMSBdKSApIHtcbiAgICAgICAgYXJnelsgMiBdLnZhbHVlID0gYXBwbHlTY29wYWJsZVR5cGUoYXJnelsgMCBdLCBbXSwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgIHJldHVybiBhcmd6WyAwIF07XG4gICAgfVxuICAgIGVsc2UgaWYgKCAhaXNTY29wYWJsZVR5cGUoYXJnelsgMCBdLCB1bmRlZmluZWQsIHRydWUpICkge1xuICAgICAgICByZXR1cm4gKCAuLi5hcmd6MiApID0+IHtcbiAgICAgICAgICAgIC8vIGFyZSB3ZSBkZWNvcmF0aW5nIGEgbWVtYmVyIC8gd2l0aCBhcmd6XG4gICAgICAgICAgICBpZiAoIGFyZ3oyWyAwIF0gaW5zdGFuY2VvZiBTaW1wbGVPYmplY3RQcm90byAmJiBhcmd6MlsgMiBdIGluc3RhbmNlb2YgU2ltcGxlT2JqZWN0UHJvdG8gJiYgYXJnejJbIDAgXS5oYXNPd25Qcm9wZXJ0eShhcmd6MlsgMSBdKSApIHtcbiAgICAgICAgICAgICAgICBhcmd6MlsgMiBdLnZhbHVlID0gYXBwbHlTY29wYWJsZVR5cGUoYXJnejJbIDAgXSwgYXJneiwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFyZ3oyWyAwIF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNjb3BlVG9TdGF0ZShhcmd6MlsgMCBdLCAuLi5hcmd6KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYXBwbHlTY29wYWJsZVR5cGUoYXJnelsgMCBdLCBhcmd6LnNsaWNlKDEpLCBmYWxzZSwgdHJ1ZSk7XG59XG5cbi8vXG4vL2FkZFNjb3BhYmxlVHlwZShcbi8vICAgICggQ29tcCApID0+IChDb21wICYmIENvbXAucHJvdG90eXBlIGluc3RhbmNlb2YgU3RvcmUpLFxuLy8gICAgZnVuY3Rpb24gcmVTY29wZSggLi4uYXJneiApIHtcbi8vICAgICAgICBsZXQgQmFzZVN0b3JlICAgID0gKCFhcmd6WzBdIHx8IGFyZ3pbMF0ucHJvdG90eXBlIGluc3RhbmNlb2YgU3RvcmUpICYmXG4vLyBhcmd6LnNoaWZ0KCksIHNjb3BlICAgICAgICA9ICghYXJnelswXSB8fCBhcmd6WzBdIGluc3RhbmNlb2YgU2NvcGUgfHwgaXMuZm4oYXJnelswXSkpXG4vLyAmJiBhcmd6LnNoaWZ0KCksIHVzZSAgICAgICAgICA9IChpcy5hcnJheShhcmd6WzBdKSkgJiYgYXJnei5zaGlmdCgpLCBzdGF0ZU1hcCAgICAgPVxuLy8gIXVzZSAmJiAoIWFyZ3pbMF0gfHwgYXJnelswXSBpbnN0YW5jZW9mIFNpbXBsZU9iamVjdFByb3RvKSAmJiBhcmd6LnNoaWZ0KCksXG4vLyBpbml0aWFsU3RhdGUgPSB7fTsgIGxldCBjb21wTmFtZSA9IEJhc2VTdG9yZS5kaXNwbGF5TmFtZSB8fCBCYXNlU3RvcmUubmFtZTsgIHVzZSA9XG4vLyBbLi4uKEJhc2VTdG9yZS51c2UgfHwgW10pLCAuLi4odXNlIHx8IFtdKV07IHN0YXRlTWFwICYmXG4vLyBTY29wZS5zdGF0ZU1hcFRvUmVmTGlzdChzdGF0ZU1hcCwgaW5pdGlhbFN0YXRlLCB1c2UpOyAgY2xhc3MgU3RhdGVTY29wZWRTdG9yZSBleHRlbmRzXG4vLyBCYXNlU3RvcmUgeyBzdGF0aWMgdXNlICAgICAgICAgPSB1c2U7IHN0YXRpYyBkaXNwbGF5TmFtZSA9IFwic3RhdGVTY29wZWQoXCIgKyBjb21wTmFtZSArXG4vLyBcIilcIjsgIGNvbnN0cnVjdG9yKCAuLi5hcmd6ICkgeyBzdXBlcihzY29wZSwgYXJnei5zbGljZShhcmd6WzBdIGluc3RhbmNlb2YgU2NvcGUgPyAxIDpcbi8vIDApKSB9IH0gIHJldHVybiBTdGF0ZVNjb3BlZFN0b3JlOyB9LCBmYWxzZSwgdHJ1ZSApXG5cblxuZXhwb3J0IHtcbiAgICBhZGRTY29wYWJsZVR5cGUsXG4gICAgcmVTY29wZSxcbiAgICBzY29wZVRvU3RhdGVcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWxzL3Njb3BhYmxlLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==