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
	            var _this11 = this;
	
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
	
	                    _this11._mount(name); // quiet
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
	            var _this12 = this;
	
	            Object.keys(pState).forEach(function (k) {
	                return _this12.state[k] = pState[k];
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
	            var _this13 = this,
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
	                if (!is.fn(_this13._._scope[id])) (_$_scope$id = _this13._._scope[id]).trigger.apply(_$_scope$id, [action].concat(argz));
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
	            var _this14 = this;
	
	            if (this._stable) return cb(this.data);
	            this.once('stable', function (e) {
	                return cb(_this14.data);
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
	            var _this15 = this;
	
	            var stores = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	            var reason = arguments[1];
	
	            stores.forEach(function (id) {
	                return _this15.stores[id] && _this15.stores[id].retain && _this15.stores[id].retain(reason);
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
	            var _this16 = this;
	
	            var stores = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	            var reason = arguments[1];
	
	            stores.forEach(function (id) {
	                return _this16.stores[id] && _this16.stores[id].dispose && _this16.stores[id].dispose(reason);
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
	            var _this17 = this;
	
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
	                    _this17._.stabilizerTM = null;
	                    if (_this17.__locks.all) return;
	
	                    _this17._.propagTM && clearTimeout(_this17._.propagTM);
	                    _this17._rev++;
	                    _this17._stable = true;
	                    _this17.emit("stable", _this17);
	
	                    !_this17.dead && _this17._propag(); // stability can induce destroy
	                });
	            }
	        }
	
	        /**
	         * Propag stores updates basing theirs last updates
	         */
	
	    }, {
	        key: 'propag',
	        value: function propag() {
	            var _this18 = this;
	
	            this._.propagTM && clearTimeout(this._.propagTM);
	            this._.propagTM = setTimeout(function (e) {
	                _this18._.propagTM = null;
	                _this18._propag();
	            }, 2);
	        }
	    }, {
	        key: '_propag',
	        value: function _propag() {
	            var _this19 = this;
	
	            if (this._.followers.length) this._.followers.forEach(function (_ref3) {
	                var obj = _ref3[0],
	                    key = _ref3[1],
	                    as = _ref3[2],
	                    lastRevs = _ref3[3],
	                    remaps = _ref3[3];
	
	                var data = _this19.getUpdates(lastRevs);
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
	            var _this20 = this;
	
	            this._.childScopes.push(ctx);
	            this._.seenChilds++;
	            var lists = {
	                'stable': function stable(s) {
	                    _this20._.unStableChilds--;
	                    if (!_this20._.unStableChilds) _this20.emit("stableTree", _this20);
	                },
	                'unstable': function unstable(s) {
	                    _this20._.unStableChilds++;
	                    if (1 == _this20._.unStableChilds) _this20.emit("unstableTree", _this20);
	                },
	                'stableTree': function stableTree(s) {
	                    _this20._.unStableChilds--;
	                    if (!_this20._.unStableChilds) _this20.emit("stableTree", _this20);
	                },
	                'unstableTree': function unstableTree(s) {
	                    _this20._.unStableChilds++;
	                    if (1 == _this20._.unStableChilds) _this20.emit("unstableTree", _this20);
	                },
	                'destroy': function destroy(ctx) {
	                    if (ctx._.unStableChilds) _this20._.unStableChilds--;
	                    if (!ctx.isStable()) _this20._.unStableChilds--;
	
	                    if (!_this20._.unStableChilds) _this20.emit("stableTree", _this20);
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
	            var _this21 = this;
	
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
	                        !_this21.__retains.all && !_this21.dead && _this21.destroy();
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
	            var _this22 = this;
	
	            var ctx = this._._scope;
	            //console.warn("destroy", this._id);
	            this._.stabilizerTM && clearTimeout(this._.stabilizerTM);
	            this._.propagTM && clearTimeout(this._.propagTM);
	            Object.keys(this._._listening).forEach(function (id) {
	                return id !== "$parent" && _this22._._scope[id].removeListener(_this22._._listening[id]);
	            });
	            while (this._._mixedList.length) {
	                this._._mixed[0].removeListener(this._._mixedList.shift());
	                this._._mixed.shift().dispose("mixedTo");
	            }
	            [].concat(_toConsumableArray(this._.followers)).map(function (follower) {
	                return _this22.unBind.apply(_this22, _toConsumableArray(follower));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNTUzOWU0YTE3YmJjNjUwYjI3MGYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9TY29wZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvaXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9pcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL0VtaXR0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9zaG9ydGlkL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vc2hvcnRpZC9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9zaG9ydGlkL2xpYi9hbHBoYWJldC5qcyIsIndlYnBhY2s6Ly8vLi9+L3Nob3J0aWQvbGliL3JhbmRvbS9yYW5kb20tZnJvbS1zZWVkLmpzIiwid2VicGFjazovLy8uL34vc2hvcnRpZC9saWIvZW5jb2RlLmpzIiwid2VicGFjazovLy8uL34vc2hvcnRpZC9saWIvcmFuZG9tL3JhbmRvbS1ieXRlLWJyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9zaG9ydGlkL2xpYi9kZWNvZGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9zaG9ydGlkL2xpYi9idWlsZC5qcyIsIndlYnBhY2s6Ly8vLi9+L3Nob3J0aWQvbGliL2lzLXZhbGlkLmpzIiwid2VicGFjazovLy8uL34vc2hvcnRpZC9saWIvdXRpbC9jbHVzdGVyLXdvcmtlci1pZC1icm93c2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9TdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvVGFza1NlcXVlbmNlci5qcyIsIndlYnBhY2s6Ly8vLi9+L3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvc2NvcGFibGUuanMiXSwibmFtZXMiOlsiJGdsb2JhbCIsIndpbmRvdyIsImdsb2JhbCIsIlJTIiwiX19fcmVzY29wZSIsImNvbnNvbGUiLCJ3YXJuIiwiU3RvcmUiLCJTY29wZSIsIkNvbnRleHQiLCJyZVNjb3BlIiwic2NvcGVUb1N0YXRlIiwicmVTY29wZVN0YXRlIiwiYWRkU2NvcGFibGVUeXBlIiwic2NvcGVSZWYiLCJtYXAiLCJrZXkiLCJyZXF1aXJlIiwid2Fsa25TZXQiLCJ3YWxrbkdldCIsImtleVdhbGtuU2V0Iiwia2V5V2Fsa25HZXQiLCJFdmVudEVtaXR0ZXIiLCJzaG9ydGlkIiwiX19wcm90b19fcHVzaCIsInRhcmdldCIsImlkIiwicGFyZW50IiwiZm4iLCJwcm90b3R5cGUiLCJfIiwib3BlblNjb3BlcyIsIlNpbXBsZU9iamVjdFByb3RvIiwiY29uc3RydWN0b3IiLCJzY29wZXMiLCJza2V5IiwiaXMiLCJhcnJheSIsInNvcnQiLCJhIiwiYiIsImZpcnN0bmFtZSIsImpvaW4iLCJzbSIsInN0YXRlIiwiX3JlZnMiLCJhY3Rpb25zIiwicGF0aCIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwiY3BhdGgiLCJwdXNoIiwiRnVuY3Rpb24iLCJhcyIsInN0b3Jlc01hcCIsInNuYXBzaG90IiwiZGF0YSIsImluY3JlbWVudElkIiwicGVyc2lzdGVuY2VUbSIsImF1dG9EZXN0cm95Iiwicm9vdEVtaXR0ZXIiLCJib3VuZGVkQWN0aW9ucyIsImtleUluZGV4IiwiX2lkIiwiaXNMb2NhbElkIiwiZ2VuZXJhdGUiLCJyZWdpc3RlciIsImkiLCJfcmV2Iiwic3RvcmVzIiwiX2F1dG9EZXN0cm95IiwiZGVhZCIsIkVycm9yIiwic291cmNlcyIsImNoaWxkU2NvcGVzIiwiY2hpbGRTY29wZXNMaXN0IiwidW5TdGFibGVDaGlsZHMiLCJzZWVuQ2hpbGRzIiwiX19yZXRhaW5zIiwiYWxsIiwiX19sb2NrcyIsIl9ib3VuZGVkQWN0aW9ucyIsInRlc3QiLCJpbmNsdWRlcyIsImJpbmQiLCJfbGlzdGVuaW5nIiwiX3Njb3BlIiwiX21peGVkIiwiX21peGVkTGlzdCIsImZvbGxvd2VycyIsInJldGFpbiIsIl9zdGFibGUiLCJ3YWl0Iiwib24iLCJfcGFyZW50TGlzdCIsInJlbGVhc2UiLCJfcHJvcGFnIiwiX2FkZENoaWxkIiwicmVzdG9yZSIsInNldFRpbWVvdXQiLCJkaXNwb3NlIiwic3RvcmVzTGlzdCIsIl9tb3VudCIsImsiLCJhcmd1bWVudHMiLCJyZWYiLCJzbmFwIiwicGFyc2VSZWYiLCJzdG9yZUlkIiwicmVkdWNlIiwibW91bnRlZCIsImN0eCIsInN0b3JlIiwidGFza1F1ZXVlIiwicnNTdG9yZSIsIm5hbWUiLCJsZW5ndGgiLCJzaGlmdCIsInJzU2NvcGUiLCIkcGFyZW50IiwibW91bnQiLCJzbGljZSIsInVuZGVmaW5lZCIsInNldFN0YXRlIiwiX3dhdGNoU3RvcmUiLCJpc1N0YWJsZSIsInByb3BhZyIsInRhcmdldEN0eCIsImxpc3RzIiwicmVsaW5rIiwic2luZ2xldG9uIiwic3JjQ3R4IiwiZXh0ZXJuYWwiLCJmb3JjZSIsImxjdHgiLCJpbmZvIiwidG1wIiwiZGVzdHJveSIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsImdldCIsInNldCIsInYiLCJhY3RpdmVBY3Rpb25zIiwiYWN0IiwiaGFzT3duUHJvcGVydHkiLCJfX3RhcmdldFN0b3JlcyIsImRpc3BhdGNoIiwib2JqIiwic2V0SW5pdGlhbCIsImxhc3RSZXZzIiwicmVmS2V5cyIsInN0cmluZyIsInJldnMiLCJyZXYiLCJyZWZzIiwicmV0YWluU3RvcmVzIiwiZ2V0VXBkYXRlcyIsImRpc3Bvc2VTdG9yZXMiLCJzcGxpY2UiLCJ0byIsInJlZkxpc3QiLCJtaXhlZENXVW5tb3VudCIsInVuTW91bnRLZXkiLCJpc1JlYWN0Q29tcG9uZW50IiwidW5CaW5kIiwiYWxpYXMiLCJyZXRyaWV2ZSIsInNwbGl0IiwicmV0cmlldmVTdG9yZSIsInN0b3Jlc1Jldk1hcCIsImxvY2FsIiwidXBkYXRlZCIsImdldFN0b3Jlc1JldnMiLCJyZXZNYXAiLCJvdXRwdXQiLCJjaGlsZHMiLCJfZ2V0QWxsQ2hpbGRzIiwiY2ZnIiwid2l0aENoaWxkcyIsIndpdGhQYXJlbnRzIiwid2l0aE1peGVkIiwibm9yZWZzIiwic2VyaWFsaXplIiwid2l0aENoaWxkIiwiaCIsInN0YXJ0c1dpdGgiLCJzdWJzdHIiLCJib29sIiwidGFrZVNuYXBzaG90QnlLZXkiLCJnZXRTbmFwc2hvdEJ5S2V5IiwicmVwbGFjZSIsImRlbGV0ZVNuYXBzaG90QnlLZXkiLCJwU3RhdGUiLCJfcmVmIiwiYWN0aW9uIiwiYXJneiIsInN0YWNrIiwiYkFjdHMiLCJ0cmlnZ2VyIiwiY2IiLCJvbmNlIiwicmVhc29uIiwiZW1pdCIsImVycm9yIiwic3RhYmlsaXplclRNIiwiY2xlYXJUaW1lb3V0IiwicHJvcGFnVE0iLCJyZW1hcHMiLCJ3YXNTdGFibGUiLCJpbmRleE9mIiwidW4iLCJkZXN0cm95VE0iLCJyZW1vdmVMaXN0ZW5lciIsImZvbGxvd2VyIiwiX3JtQ2hpbGQiLCJ2YWx1ZSIsImlzS2V5IiwiZmlsdGVyIiwiRW1pdHRlciIsIl9ldmVudHMiLCJldnQiLCJUYXNrU2VxdWVuY2VyIiwib2JqUHJvdG8iLCJnZXRQcm90b3R5cGVPZiIsIl9zdGF0aWMiLCJzY29wZSIsImdldFNjb3BlIiwic3RhdGljU2NvcGUiLCJ3YXRjaHMiLCJ1c2UiLCJhcHBseSIsImluaXRpYWxTdGF0ZSIsImRlZmF1bHRTdGF0ZSIsImFwcGxpZWQiLCJfdWlkIiwiX29uU3RhYmlsaXplIiwiX3BlcnNpc3RlbmNlVG0iLCJfY2ZnIiwic2NvcGVPYmoiLCIkc2NvcGUiLCIkc3RvcmVzIiwiJGFjdGlvbnMiLCIkZGlzcGF0Y2giLCJfcmV2cyIsIl9yZXF1aXJlIiwiX3NvdXJjZXMiLCJfdXNlIiwibWF0Y2giLCJyZWYyIiwiX2ZvbGxvd2VycyIsIl9jaGFuZ2VzU1ciLCJfYWZ0ZXJDb25zdHJ1Y3RvciIsImluaXRpYWxEYXRhIiwic2hvdWxkQXBwbHkiLCJtYW5hZ2VkIiwibkRhdGFzIiwiciIsImNEYXRhcyIsImlzQ29tcGxldGUiLCJmb2xsb3ciLCJjYWxsIiwiY2hhbmdlcyIsInJlZmluZSIsIl9fcHJvdG9fXyIsIl9zdGFiaWxpemVyIiwicHVzaFRhc2siLCJucyIsImRvV2FpdCIsIm9yaWdpbiIsImluaXRpYWxPdXRwdXRzIiwicyIsImhhc0RhdGFDaGFuZ2UiLCJzdGFibGUiLCJuZXh0U3RhdGUiLCJfbmV4dFN0YXRlIiwibmV4dERhdGEiLCJzeW5jIiwiY2hhbmdlIiwicHVzaFN0YXRlIiwic3RhYmlsaXplIiwiX2tleSIsImRlZmF1bHROYW1lIiwibnVtYmVyIiwiaW1tZWRpYXRlIiwidGhlbiIsInByZXZpb3VzIiwibWUiLCJzaG91bGRQcm9wYWciLCJfZGVzdHJveVRNIiwicmVtb3ZlQWxsTGlzdGVuZXJzIiwiY1N0b3JlIiwidGFyZ2V0UmV2cyIsInRhcmdldFNjb3BlIiwibyIsImN1cldlaWdodCIsIm1heFdlaWdodCIsIm1pbldlaWdodCIsInRhc2tDb3VudCIsImRlU3luYyIsImRlU3luY01heFRhc2tzIiwidGFzayIsImlzUnVubmluZyIsImVycm9yQ2F0Y2hlciIsImxhc3RFcnJvciIsImRpc2FibGUiLCJoYW5kbGVFcnJvciIsInJ1bk5vdyIsImVuYWJsZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJwcm9jZXNzIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJ1biIsImZyb20iLCJEYXRlIiwibm93Iiwid2VpZ2h0IiwiTWF0aCIsIm1heCIsIm1pbiIsInNjb3BhYmxlcyIsImhhbmRsZSIsIm1lbWJlciIsInN0YXRlU2NvcGUiLCJpc1Njb3BhYmxlVHlwZSIsIkNvbXAiLCJhcHBseVNjb3BhYmxlVHlwZSIsImFyZ3oyIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ1RBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQS9CQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMkJBLEtBQUlBLFVBQVksT0FBT0MsTUFBUCxLQUFrQixXQUFwQixHQUFvQ0EsTUFBcEMsR0FBNkNDLE1BQTNEOztBQU1BLEtBQU1DLEtBQUtILFFBQVFJLFVBQVIsSUFBc0IsRUFBakM7QUFDQSxLQUFLSixRQUFRSSxVQUFiLEVBQTBCO0FBQ3RCQyxhQUFRQyxJQUFSLENBQWEsK0RBQWI7QUFDSCxFQUZELE1BR0s7O0FBRUROLGFBQVFJLFVBQVIsR0FBcUJELEVBQXJCO0FBQ0EscUJBQU1JLEtBQU47QUFDQUosUUFBR0ssS0FBSDtBQUNBTCxRQUFHTSxPQUFIO0FBQ0FOLFFBQUdJLEtBQUg7QUFDQUosUUFBR08sT0FBSDtBQUNBUCxRQUFHUSxZQUFIO0FBQ0FSLFFBQUdTLFlBQUg7QUFDQVQsUUFBR1UsZUFBSDtBQUNBVixRQUFHVyxRQUFILEdBQ0ksU0FBU0EsUUFBVCxDQUFtQkMsR0FBbkIsRUFBd0JDLEdBQXhCLEVBQThCO0FBQzFCRCxhQUFLQyxHQUFMLElBQWEsSUFBSSxnQkFBTUYsUUFBVixDQUFtQkMsSUFBS0MsR0FBTCxDQUFuQixDQUFiO0FBQ0EsZ0JBQU9ELEdBQVA7QUFDSCxNQUpMO0FBTUg7bUJBQ2NaLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkRmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE0QkksVUFBbUQsbUJBQUFjLENBQVEsQ0FBUixDQUFuRDtBQUFBLGdCQUNtRCxtQkFBQUEsQ0FBUSxDQUFSLENBRG5EO0FBQUEsS0FDRUMsUUFERixZQUNFQSxRQURGO0FBQUEsS0FDWUMsUUFEWixZQUNZQSxRQURaO0FBQUEsS0FDc0JDLFdBRHRCLFlBQ3NCQSxXQUR0QjtBQUFBLEtBQ21DQyxXQURuQyxZQUNtQ0EsV0FEbkM7QUFBQSxLQUVBQyxZQUZBLEdBRW1ELG1CQUFBTCxDQUFRLENBQVIsQ0FGbkQ7QUFBQSxLQUdBTSxPQUhBLEdBR21ELG1CQUFBTixDQUFRLENBQVIsQ0FIbkQ7QUFBQSxLQUlFTyxhQUpGLEdBSW1ELFNBQWpEQSxhQUFpRCxDQUFFQyxNQUFGLEVBQVVDLEVBQVYsRUFBY0MsTUFBZCxFQUEwQjtBQUN6RSxTQUFJQyxLQUFhLFNBQWJBLEVBQWEsR0FBWSxDQUM1QixDQUREO0FBRUFBLFFBQUdDLFNBQUgsR0FBaUJGLFNBQVMsSUFBSUEsT0FBT0csQ0FBUCxDQUFVSixFQUFWLENBQUosRUFBVCxHQUFnQ0QsT0FBUUMsRUFBUixLQUFnQixFQUFqRTtBQUNBRCxZQUFRQyxFQUFSLElBQWlCLElBQUlFLEVBQUosRUFBakI7QUFDQUgsWUFBT0ssQ0FBUCxDQUFVSixFQUFWLElBQWlCRSxFQUFqQjtBQUNILEVBVkQ7QUFBQSxLQVdBRyxVQVhBLEdBV21ELEVBWG5EO0FBQUEsS0FZQUMsaUJBWkEsR0FZcUQsRUFBRixDQUFPQyxXQVoxRDs7QUFjSjs7OztLQUdNekIsSzs7Ozs7a0NBQ2UwQixNLEVBQVM7QUFDdEIsaUJBQUlDLE9BQU9DLEdBQUdDLEtBQUgsQ0FBU0gsTUFBVCxJQUFtQkEsT0FBT0ksSUFBUCxDQUFZLFVBQUVDLENBQUYsRUFBS0MsQ0FBTCxFQUFZO0FBQ2xELHFCQUFLRCxFQUFFRSxTQUFGLEdBQWNELEVBQUVDLFNBQXJCLEVBQWlDLE9BQU8sQ0FBQyxDQUFSO0FBQ2pDLHFCQUFLRixFQUFFRSxTQUFGLEdBQWNELEVBQUVDLFNBQXJCLEVBQWlDLE9BQU8sQ0FBUDtBQUNqQyx3QkFBTyxDQUFQO0FBQ0gsY0FKNkIsRUFJM0JDLElBSjJCLENBSXRCLEdBSnNCLENBQW5CLEdBSUlSLE1BSmY7QUFLQSxvQkFBT0gsV0FBWUksSUFBWixJQUFxQkosV0FBWUksSUFBWixLQUFzQixJQUFJM0IsS0FBSixDQUFVLEVBQVYsRUFBYyxFQUFFa0IsSUFBSVMsSUFBTixFQUFkLENBQWxEO0FBQ0g7Ozs7O0FBR0Q7Ozs7OzJDQUswQlEsRSxFQUFzRDtBQUFBLGlCQUFsREMsS0FBa0QsdUVBQTFDLEVBQTBDOztBQUFBLGlCQUF0Q0MsS0FBc0MsdUVBQTlCLEVBQThCOztBQUFBLGlCQUExQkMsT0FBMEIsdUVBQWhCLEVBQWdCO0FBQUEsaUJBQVpDLElBQVksdUVBQUwsRUFBSzs7QUFDNUVDLG9CQUFPQyxJQUFQLENBQVlOLEVBQVosRUFBZ0JPLE9BQWhCLENBQ0ksZUFBTztBQUNILHFCQUFJQyxRQUFRSixPQUFPQSxPQUFPLEdBQVAsR0FBYS9CLEdBQXBCLEdBQTBCQSxHQUF0QztBQUNBMkIsb0JBQUkzQixHQUFKLGFBQXFCUixNQUFNTSxRQUEzQixHQUNFK0IsTUFBTU8sSUFBTixDQUFXVCxHQUFJM0IsR0FBSixFQUFVK0IsSUFBVixHQUFpQixHQUFqQixHQUF1QkksS0FBbEMsQ0FERixHQUVJUixHQUFJM0IsR0FBSixLQUFhMkIsR0FBSTNCLEdBQUosYUFBcUJxQyxRQUFwQyxHQUNFUCxRQUFTOUIsR0FBVCxJQUFpQjJCLEdBQUkzQixHQUFKLENBRG5CLEdBRUkyQixHQUFJM0IsR0FBSixLQUFhMkIsR0FBSTNCLEdBQUosRUFBVWEsU0FBVixZQUErQnJCLE1BQU1ELEtBQXBELEdBQ0VzQyxNQUFNTyxJQUFOLENBQVdULEdBQUkzQixHQUFKLEVBQVVzQyxFQUFWLENBQWFILEtBQWIsQ0FBWCxDQURGLEdBRUVQLE1BQU9PLEtBQVAsSUFBaUJSLEdBQUkzQixHQUFKLENBTnZCO0FBT0E7QUFDSCxjQVhMO0FBYUEsb0JBQU82QixLQUFQO0FBQ0gsVSxDQUV3QjtBQUN6QjtBQUNBOzs7O0FBSzZCOzs7QUFHN0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5QkEsb0JBQWFVLFNBQWIsRUFBd0o7QUFBQSx5RkFBTCxFQUFLO0FBQUEsYUFBOUg1QixNQUE4SCxTQUE5SEEsTUFBOEg7QUFBQSxhQUF0SFgsR0FBc0gsU0FBdEhBLEdBQXNIO0FBQUEsYUFBakhVLEVBQWlILFNBQWpIQSxFQUFpSDtBQUFBLGFBQTdHOEIsUUFBNkcsU0FBN0dBLFFBQTZHO0FBQUEsYUFBbkdaLEtBQW1HLFNBQW5HQSxLQUFtRztBQUFBLGFBQTVGYSxJQUE0RixTQUE1RkEsSUFBNEY7QUFBQSx1Q0FBdEZDLFdBQXNGO0FBQUEsYUFBdEZBLFdBQXNGLHFDQUF4RSxDQUFDLENBQUMxQyxHQUFzRTtBQUFBLGFBQWpFMkMsYUFBaUUsU0FBakVBLGFBQWlFO0FBQUEsYUFBbERDLFdBQWtELFNBQWxEQSxXQUFrRDtBQUFBLGFBQXJDQyxXQUFxQyxTQUFyQ0EsV0FBcUM7QUFBQSxhQUF4QkMsY0FBd0IsU0FBeEJBLGNBQXdCOztBQUFBOztBQUFBOztBQUVwSixhQUFJaEMsSUFBSSxFQUFSO0FBQUEsYUFBWWlDLFFBQVo7O0FBRUFyQyxjQUFLQSxNQUFNVixPQUFTLENBQUVXLFVBQVVBLE9BQU9xQyxHQUFqQixJQUF3QixFQUExQixJQUFpQyxHQUFqQyxHQUF1Q2hELEdBQTNEOztBQUVBYyxXQUFFbUMsU0FBRixHQUFjLENBQUN2QyxFQUFmOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBQSxjQUFLQSxNQUFRLFVBQVVILFFBQVEyQyxRQUFSLEVBQXZCOztBQUVBLGFBQUtuQyxXQUFZTCxFQUFaLENBQUwsRUFBd0I7QUFBQTs7QUFDcEIsbUJBQUtzQyxHQUFMLEdBQVd0QyxFQUFYO0FBQ0FLLHdCQUFZTCxFQUFaLEVBQWlCeUMsUUFBakIsQ0FBMEJaLFNBQTFCO0FBQ0EsMkJBQU94QixXQUFZTCxFQUFaLENBQVA7QUFDSCxVQUpELE1BS0ssSUFBS0ssV0FBWUwsRUFBWixLQUFvQmdDLFdBQXpCLEVBQXVDO0FBQ3hDLGlCQUFJVSxJQUFJLENBQUMsQ0FBVDtBQUNBLG9CQUFRckMsV0FBWUwsS0FBSyxHQUFMLEdBQWEsRUFBRTBDLENBQWYsR0FBcUIsR0FBakMsQ0FBUjtBQUNBMUMsa0JBQUtBLEtBQUssR0FBTCxHQUFXMEMsQ0FBWCxHQUFlLEdBQXBCO0FBQ0g7O0FBRUQsZUFBS0osR0FBTCxHQUFtQnRDLEVBQW5CO0FBQ0EsZUFBSzJDLElBQUwsR0FBbUIsQ0FBbkI7QUFDQXRDLG9CQUFZTCxFQUFaO0FBQ0FJLFdBQUU2QixhQUFGLEdBQW1CQSxpQkFBaUIsTUFBSzFCLFdBQUwsQ0FBaUIwQixhQUFyRDs7QUFFQSxlQUFLYixPQUFMLEdBQWUsRUFBZjtBQUNBLGVBQUt3QixNQUFMLEdBQWUsRUFBZjtBQUNBLGVBQUsxQixLQUFMLEdBQWUsRUFBZjtBQUNBLGVBQUthLElBQUwsR0FBZSxFQUFmOztBQUVBLGVBQUs5QixNQUFMLEdBQW9CQSxNQUFwQjtBQUNBLGVBQUtHLENBQUwsR0FBb0JBLENBQXBCO0FBQ0EsZUFBS3lDLFlBQUwsR0FBb0JYLFdBQXBCOztBQUVBLGFBQUtqQyxVQUFVQSxPQUFPNkMsSUFBdEIsRUFDSSxNQUFNLElBQUlDLEtBQUosQ0FBVSxvQ0FBVixDQUFOOztBQUVKakQsOEJBQW9CLFNBQXBCLEVBQStCRyxNQUEvQjtBQUNBSCw4QkFBb0IsUUFBcEIsRUFBOEJHLE1BQTlCO0FBQ0FILDhCQUFvQixPQUFwQixFQUE2QkcsTUFBN0I7QUFDQUgsOEJBQW9CLE1BQXBCLEVBQTRCRyxNQUE1Qjs7QUFFQSxlQUFLK0MsT0FBTCxHQUFvQixFQUFwQjtBQUNBNUMsV0FBRTZDLFdBQUYsR0FBb0IsRUFBcEI7QUFDQTdDLFdBQUU4QyxlQUFGLEdBQW9CLEVBQXBCO0FBQ0E5QyxXQUFFK0MsY0FBRixHQUFvQixDQUFwQjtBQUNBL0MsV0FBRWdELFVBQUYsR0FBb0IsQ0FBcEI7O0FBRUEsZUFBS0MsU0FBTCxHQUFpQixFQUFFQyxLQUFLLENBQVAsRUFBakI7QUFDQSxlQUFLQyxPQUFMLEdBQWlCLEVBQUVELEtBQUssQ0FBUCxFQUFqQjs7QUFFQTtBQUNBO0FBQ0FsRCxXQUFFb0QsZUFBRixHQUFvQjlDLEdBQUdDLEtBQUgsQ0FBU3lCLGNBQVQsSUFDRSxFQUFFcUIsTUFBTXJCLGVBQWVzQixRQUFmLENBQXdCQyxJQUF4QixDQUE2QnZCLGNBQTdCLENBQVIsRUFERixHQUVFQSxjQUZ0QjtBQUdBaEMsV0FBRXdELFVBQUYsR0FBb0IsRUFBcEI7QUFDQXhELFdBQUV5RCxNQUFGLEdBQW9CLEVBQXBCO0FBQ0F6RCxXQUFFMEQsTUFBRixHQUFvQixFQUFwQjtBQUNBMUQsV0FBRTJELFVBQUYsR0FBb0IsRUFBcEI7QUFDQTNELFdBQUU0RCxTQUFGLEdBQW9CLEVBQXBCO0FBQ0EsYUFBSy9ELE1BQUwsRUFBYztBQUNWQSxvQkFBT2dFLE1BQVAsQ0FBYyxZQUFkO0FBQ0EsaUJBQUssQ0FBQzlCLFdBQU4sRUFBb0I7QUFDaEIsa0JBQUNsQyxPQUFPaUUsT0FBUixJQUFtQixNQUFLQyxJQUFMLENBQVUsZUFBVixDQUFuQjtBQUNBbEUsd0JBQU9tRSxFQUFQLENBQVVoRSxFQUFFaUUsV0FBRixHQUFnQjtBQUN0QiwrQkFBWTtBQUFBLGdDQUFLLE1BQUtDLE9BQUwsQ0FBYSxlQUFiLENBQUw7QUFBQSxzQkFEVTtBQUV0QixpQ0FBWTtBQUFBLGdDQUFLLE1BQUtILElBQUwsQ0FBVSxlQUFWLENBQUw7QUFBQSxzQkFGVTtBQUd0QiwrQkFBWTtBQUFBLGdDQUFLLE1BQUtJLE9BQUwsRUFBTDtBQUFBO0FBSFUsa0JBQTFCO0FBS0gsY0FQRCxNQVFLO0FBQ0R0RSx3QkFBT21FLEVBQVAsQ0FBVWhFLEVBQUVpRSxXQUFGLEdBQWdCO0FBQ3RCLCtCQUFVO0FBQUEsZ0NBQUssTUFBS0UsT0FBTCxFQUFMO0FBQUE7QUFEWSxrQkFBMUI7QUFHSDtBQUNEO0FBQ0g7O0FBR0QsZUFBSzlCLFFBQUwsQ0FBY1osU0FBZCxFQUF5QlgsS0FBekIsRUFBZ0NhLElBQWhDO0FBQ0EsZUFBS3dCLE9BQUwsQ0FBYUQsR0FBYjtBQUNBLGVBQUtZLE9BQUwsR0FBZSxDQUFDLE1BQUtYLE9BQUwsQ0FBYUQsR0FBN0I7O0FBRUEsYUFBS3JELE1BQUwsRUFBYztBQUNWQSxvQkFBT3VFLFNBQVA7QUFDSDs7QUFFRCxlQUFLQyxPQUFMLENBQWEzQyxRQUFiOztBQUVBLGFBQUtJLFdBQUwsRUFDSXdDLFdBQ0ksY0FBTTtBQUNGLG1CQUFLVCxNQUFMLENBQVksYUFBWjtBQUNBLG1CQUFLVSxPQUFMLENBQWEsYUFBYjtBQUNILFVBSkw7O0FBcEdnSjtBQTJHdko7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7OytCQVVPQyxVLEVBQVk5QyxRLEVBQVVaLEssRUFBT2EsSSxFQUFPO0FBQUE7O0FBQ3ZDLGlCQUFLckIsR0FBR0MsS0FBSCxDQUFTaUUsVUFBVCxDQUFMLEVBQTRCO0FBQ3hCQSw0QkFBV3BELE9BQVgsQ0FBbUI7QUFBQSw0QkFBSyxPQUFLcUQsTUFBTCxDQUFZQyxDQUFaLEVBQWVoRCxRQUFmLEVBQXlCWixLQUF6QixFQUFnQ2EsSUFBaEMsQ0FBTDtBQUFBLGtCQUFuQjtBQUNILGNBRkQsTUFHSztBQUNELHNCQUFLOEMsTUFBTCxhQUFlRSxTQUFmO0FBQ0g7QUFDRCxvQkFBTyxJQUFQO0FBQ0g7OztnQ0FFTy9FLEUsRUFBSThCLFEsRUFBVVosSyxFQUFPYSxJLEVBQU87QUFDaEMsaUJBQUlpRCxZQUFKO0FBQUEsaUJBQVNDLGFBQVQ7O0FBRUFELG1CQUFNLEtBQUtFLFFBQUwsQ0FBY2xGLEVBQWQsQ0FBTjs7QUFFQSxpQkFBS0EsTUFBTSxTQUFYLEVBQXVCO0FBQ3ZCLGlCQUFLLENBQUMsS0FBS0ksQ0FBTCxDQUFPeUQsTUFBUCxDQUFlbUIsSUFBSUcsT0FBbkIsQ0FBTixFQUFxQztBQUFBOztBQUFDO0FBQ2xDLHFCQUFLLEtBQUsvRSxDQUFMLENBQU8wRCxNQUFQLENBQWNzQixNQUFkLENBQXFCLFVBQUVDLE9BQUYsRUFBV0MsR0FBWDtBQUFBLDRCQUFzQkQsV0FBV0MsSUFBSVQsTUFBSixDQUFXN0UsRUFBWCxFQUFlOEIsUUFBZixFQUF5QlosS0FBekIsRUFBZ0NhLElBQWhDLENBQWpDO0FBQUEsa0JBQXJCLEVBQStGLEtBQS9GLEtBQ0EsQ0FBQyxLQUFLOUIsTUFEWCxFQUVJO0FBQ0osd0JBQU8sZ0JBQUtBLE1BQUwsRUFBWTRFLE1BQVosZ0JBQXNCRSxTQUF0QixDQUFQO0FBQ0gsY0FMRCxNQU1LO0FBQ0QscUJBQUlRLFFBQVEsS0FBS25GLENBQUwsQ0FBT3lELE1BQVAsQ0FBZW1CLElBQUlHLE9BQW5CLENBQVo7QUFBQSxxQkFBMENLLFlBQVksRUFBdEQ7QUFDQSxxQkFBSzlFLEdBQUcrRSxPQUFILENBQVdGLE1BQU1wRixTQUFqQixDQUFMLEVBQW1DO0FBQy9CLDBCQUFLQyxDQUFMLENBQU95RCxNQUFQLENBQWVtQixJQUFJRyxPQUFuQixJQUErQixJQUFJSSxLQUFKLENBQVUsSUFBVixFQUFnQjtBQUMzQztBQUNBRywrQkFBTVYsSUFBSUcsT0FGaUM7QUFHM0NqRSxxQ0FIMkM7QUFJM0NhO0FBSjJDLHNCQUFoQixFQUs1QnlELFNBTDRCLENBQS9CO0FBTUEsNEJBQVFBLFVBQVVHLE1BQWxCO0FBQTJCSCxtQ0FBVUksS0FBVjtBQUEzQjtBQUNILGtCQVJELE1BU0ssSUFBS2xGLEdBQUdtRixPQUFILENBQVdOLE1BQU1wRixTQUFqQixDQUFMLEVBQW1DO0FBQ3BDb0YsNkJBQVEsS0FBS25GLENBQUwsQ0FBT3lELE1BQVAsQ0FBZW1CLElBQUlHLE9BQW5CLElBQStCLElBQUlJLEtBQUosQ0FBVSxFQUFFTyxTQUFTLElBQVgsRUFBVixFQUE2QjtBQUNoRTlGLDZCQUFJLEtBQUtzQyxHQUFMLEdBQVcsR0FBWCxHQUFpQjBDLElBQUlHO0FBQ3pCO0FBQ0E7QUFIZ0Usc0JBQTdCLENBQXZDO0FBS0E7QUFDQTtBQUNBLHlCQUFLSCxJQUFJM0QsSUFBSixDQUFTc0UsTUFBVCxHQUFrQixDQUF2QixFQUNJLEtBQUt2RixDQUFMLENBQU95RCxNQUFQLENBQWVtQixJQUFJRyxPQUFuQixFQUE2QlksS0FBN0IsQ0FBbUNmLElBQUkzRCxJQUFKLENBQVMyRSxLQUFULENBQWUsQ0FBZixFQUFrQmhGLElBQWxCLENBQXVCLEdBQXZCLENBQW5DLEVBQWdFYyxRQUFoRSxFQUEwRVosS0FBMUUsRUFBaUZhLElBQWpGO0FBQ0o7QUFDSDtBQUNEO0FBQ0E7QUFDQTtBQUNBLHFCQUFLckIsR0FBRytFLE9BQUgsQ0FBV0YsS0FBWCxDQUFMLEVBQXlCO0FBQ3JCLHlCQUFLckUsVUFBVStFLFNBQVYsSUFBdUJsRSxTQUFTa0UsU0FBckMsRUFDSVYsTUFBTVcsUUFBTixDQUFlaEYsS0FBZixFQURKLEtBRUssSUFBS0EsVUFBVStFLFNBQWYsRUFDRFYsTUFBTXJFLEtBQU4sR0FBY0EsS0FBZDs7QUFFSix5QkFBS2EsU0FBU2tFLFNBQWQsRUFDSVYsTUFBTTdELElBQU4sQ0FBV0ssSUFBWDtBQUNQO0FBQ0Qsc0JBQUtvRSxXQUFMLENBQWlCbkIsSUFBSUcsT0FBckI7QUFDSDs7QUFHRCxvQkFBTyxLQUFLL0UsQ0FBTCxDQUFPeUQsTUFBUCxDQUFlbUIsSUFBSUcsT0FBbkIsQ0FBUDtBQUNIOzs7cUNBRVluRixFLEVBQUlrQixLLEVBQU9hLEksRUFBTztBQUFBOztBQUMzQixpQkFBSyxDQUFDLEtBQUszQixDQUFMLENBQU93RCxVQUFQLENBQW1CNUQsRUFBbkIsQ0FBRCxJQUE0QixDQUFDVSxHQUFHUixFQUFILENBQU0sS0FBS0UsQ0FBTCxDQUFPeUQsTUFBUCxDQUFlN0QsRUFBZixDQUFOLENBQWxDLEVBQStEO0FBQzNEO0FBQ0Esa0JBQUMsS0FBS0ksQ0FBTCxDQUFPeUQsTUFBUCxDQUFlN0QsRUFBZixFQUFvQjZDLFlBQXJCLElBQXFDLEtBQUt6QyxDQUFMLENBQU95RCxNQUFQLENBQWU3RCxFQUFmLEVBQW9CaUUsTUFBcEIsQ0FBMkIsUUFBM0IsQ0FBckM7QUFDQSxrQkFBQyxLQUFLN0QsQ0FBTCxDQUFPeUQsTUFBUCxDQUFlN0QsRUFBZixFQUFvQm9HLFFBQXBCLEVBQUQsSUFBbUMsS0FBS2pDLElBQUwsQ0FBVW5FLEVBQVYsQ0FBbkM7QUFDQSxzQkFBS0ksQ0FBTCxDQUFPeUQsTUFBUCxDQUFlN0QsRUFBZixFQUFvQm9FLEVBQXBCLENBQ0ksS0FBS2hFLENBQUwsQ0FBT3dELFVBQVAsQ0FBbUI1RCxFQUFuQixJQUEwQjtBQUN0QixnQ0FBWSxvQkFBSztBQUNiLGdDQUFPLE9BQUtJLENBQUwsQ0FBT3dELFVBQVAsQ0FBbUI1RCxFQUFuQixDQUFQO0FBQ0EsZ0NBQUtJLENBQUwsQ0FBT3lELE1BQVAsQ0FBZTdELEVBQWYsSUFBc0IsT0FBS0ksQ0FBTCxDQUFPeUQsTUFBUCxDQUFlN0QsRUFBZixFQUFvQk8sV0FBMUM7QUFDSCxzQkFKcUI7QUFLdEIsK0JBQVk7QUFBQSxnQ0FBSyxPQUFLOEYsTUFBTCxFQUFMO0FBQUEsc0JBTFU7QUFNdEIsK0JBQVk7QUFBQSxnQ0FBSyxPQUFLL0IsT0FBTCxDQUFhdEUsRUFBYixDQUFMO0FBQUEsc0JBTlU7QUFPdEIsaUNBQVk7QUFBQSxnQ0FBSyxPQUFLbUUsSUFBTCxDQUFVbkUsRUFBVixDQUFMO0FBQUE7QUFQVSxrQkFEOUI7QUFVSDtBQUNELG9CQUFPLElBQVA7QUFDSDs7QUFFRDs7Ozs7Ozs7K0JBS09zRyxTLEVBQVk7QUFBQTs7QUFDZixpQkFBSXJHLFNBQVMsS0FBS0EsTUFBbEI7QUFBQSxpQkFBMEJzRyxjQUExQjtBQUNBLGtCQUFLbkcsQ0FBTCxDQUFPMEQsTUFBUCxDQUFjcEMsSUFBZCxDQUFtQjRFLFNBQW5CO0FBQ0FBLHVCQUFVckMsTUFBVixDQUFpQixTQUFqQjtBQUNBLGlCQUFLLENBQUNxQyxVQUFVcEMsT0FBaEIsRUFDSSxLQUFLQyxJQUFMLENBQVVtQyxVQUFVaEUsR0FBcEI7O0FBRUosa0JBQUtsQyxDQUFMLENBQU8yRCxVQUFQLENBQWtCckMsSUFBbEIsQ0FBdUI2RSxRQUFRO0FBQzNCLDJCQUFZO0FBQUEsNEJBQUssT0FBS2pDLE9BQUwsQ0FBYWdDLFVBQVVoRSxHQUF2QixDQUFMO0FBQUEsa0JBRGU7QUFFM0IsNkJBQVk7QUFBQSw0QkFBSyxPQUFLNkIsSUFBTCxDQUFVbUMsVUFBVWhFLEdBQXBCLENBQUw7QUFBQSxrQkFGZTtBQUczQiwyQkFBWTtBQUFBLDRCQUFLLE9BQUtpQyxPQUFMLEVBQUw7QUFBQTtBQUhlLGNBQS9COztBQU1BLGtCQUFLbkQsT0FBTCxHQUFlLEVBQWY7QUFDQSxrQkFBS3dCLE1BQUwsR0FBZSxFQUFmO0FBQ0Esa0JBQUsxQixLQUFMLEdBQWUsRUFBZjtBQUNBLGtCQUFLYSxJQUFMLEdBQWUsRUFBZjtBQUNBdUUsdUJBQVVsQyxFQUFWLENBQWFtQyxLQUFiO0FBQ0F6RywyQkFBYyxJQUFkLEVBQW9CLFNBQXBCLEVBQStCRyxNQUEvQjtBQUNBSCwyQkFBYyxJQUFkLEVBQW9CLFFBQXBCLEVBQThCRyxNQUE5QjtBQUNBSCwyQkFBYyxJQUFkLEVBQW9CLE9BQXBCLEVBQTZCRyxNQUE3QjtBQUNBSCwyQkFBYyxJQUFkLEVBQW9CLE1BQXBCLEVBQTRCRyxNQUE1Qjs7QUFFQSxrQkFBS3VHLE1BQUwsQ0FBWSxLQUFLcEcsQ0FBTCxDQUFPeUQsTUFBbkIsRUFBMkIsSUFBM0IsRUFBaUMsS0FBakMsRUFBd0MsSUFBeEM7QUFDQSxrQkFBS3pELENBQUwsQ0FBTzBELE1BQVAsQ0FBY3RDLE9BQWQsQ0FDSSxlQUFPO0FBQ0gxQix1Q0FBb0IsU0FBcEI7QUFDQUEsdUNBQW9CLFFBQXBCO0FBQ0FBLHVDQUFvQixPQUFwQjtBQUNBQSx1Q0FBb0IsTUFBcEI7QUFDQXdGLHFCQUFJa0IsTUFBSixDQUFXbEIsSUFBSWxGLENBQUosQ0FBTXlELE1BQWpCLFVBQStCLElBQS9CLEVBQXFDLElBQXJDO0FBQ0gsY0FQTDtBQVNIOztBQUVEOzs7Ozs7Ozs7a0NBTVVoQyxTLEVBQW1DO0FBQUE7O0FBQUEsaUJBQXhCWCxLQUF3Qix1RUFBaEIsRUFBZ0I7QUFBQSxpQkFBWmEsSUFBWSx1RUFBTCxFQUFLOztBQUN6QyxrQkFBS3lFLE1BQUwsQ0FBWTNFLFNBQVosRUFBdUIsSUFBdkIsRUFBNkIsS0FBN0IsRUFBb0MsS0FBcEM7QUFDQVAsb0JBQU9DLElBQVAsQ0FBWU0sU0FBWixFQUF1QkwsT0FBdkIsQ0FDSSxjQUFNO0FBQ0YscUJBQUt4QixNQUFNLFNBQVgsRUFBdUI7QUFDdkIscUJBQUs2QixVQUFXN0IsRUFBWCxFQUFnQnlHLFNBQWhCLElBQStCL0YsR0FBR1IsRUFBSCxDQUFNMkIsVUFBVzdCLEVBQVgsQ0FBTixNQUE0QmtCLE1BQU9sQixFQUFQLEtBQWUrQixLQUFNL0IsRUFBTixDQUEzQyxDQUFwQyxFQUFnRztBQUM1Riw0QkFBSzZFLE1BQUwsQ0FBWTdFLEVBQVosRUFBZ0JpRyxTQUFoQixFQUEyQi9FLE1BQU9sQixFQUFQLENBQTNCLEVBQXdDK0IsS0FBTS9CLEVBQU4sQ0FBeEM7QUFDSCxrQkFGRCxNQUdLLElBQUtrQixNQUFPbEIsRUFBUCxLQUFlK0IsS0FBTS9CLEVBQU4sQ0FBcEIsRUFBaUM7QUFDbEMseUJBQUsrQixLQUFNL0IsRUFBTixDQUFMLEVBQWtCO0FBQ2QsNkJBQUtrQixNQUFPbEIsRUFBUCxDQUFMLEVBQ0ksT0FBSzRDLE1BQUwsQ0FBYTVDLEVBQWIsRUFBa0JrQixLQUFsQixHQUEwQkEsTUFBT2xCLEVBQVAsQ0FBMUI7QUFDSixnQ0FBSzRDLE1BQUwsQ0FBYTVDLEVBQWIsRUFBa0IwQixJQUFsQixDQUF1QkssS0FBTS9CLEVBQU4sQ0FBdkI7QUFDSCxzQkFKRCxNQUtLLElBQUtrQixNQUFPbEIsRUFBUCxDQUFMLEVBQW1CO0FBQ3BCLGdDQUFLNEMsTUFBTCxDQUFhNUMsRUFBYixFQUFrQmtHLFFBQWxCLENBQTJCaEYsTUFBT2xCLEVBQVAsQ0FBM0I7QUFDSDtBQUNKLGtCQVRJLE1BVUE7QUFDRCw0QkFBS21HLFdBQUwsQ0FBaUJuRyxFQUFqQjtBQUNIO0FBQ0osY0FuQkw7QUFzQkg7O0FBRUQ7Ozs7Ozs7Ozs7Z0NBT1EwRyxNLEVBQTRDO0FBQUEsaUJBQXBDSixTQUFvQyx1RUFBeEIsSUFBd0I7O0FBQUE7O0FBQUEsaUJBQWxCSyxRQUFrQjtBQUFBLGlCQUFSQyxLQUFROztBQUNoRCxpQkFBSUMsT0FBT1AsVUFBVWxHLENBQVYsQ0FBWXdDLE1BQVosQ0FBbUJ6QyxTQUE5QjtBQUNBbUIsb0JBQU9DLElBQVAsQ0FBWW1GLE1BQVosRUFDT2xGLE9BRFAsQ0FFVSxjQUFNO0FBQ0YscUJBQUssQ0FBQ29GLEtBQUQsSUFBVU4sVUFBVWxHLENBQVYsQ0FBWXlELE1BQVosQ0FBb0I3RCxFQUFwQixNQUE2QjBHLE9BQVExRyxFQUFSLENBQXZDLElBQ0FzRyxVQUFVbEcsQ0FBVixDQUFZeUQsTUFBWixDQUFvQjdELEVBQXBCLEtBQThCc0csVUFBVWxHLENBQVYsQ0FBWXlELE1BQVosQ0FBb0I3RCxFQUFwQixFQUF5Qk8sV0FBekIsS0FBeUNtRyxPQUFRMUcsRUFBUixDQUQ1RSxFQUVJOztBQUVKLHFCQUFLLENBQUM0RyxLQUFELElBQVVOLFVBQVVsRyxDQUFWLENBQVl5RCxNQUFaLENBQW9CN0QsRUFBcEIsQ0FBZixFQUEwQztBQUN0Qyx5QkFBSyxDQUFDMkcsUUFBRCxJQUFhLENBQUNqRyxHQUFHUixFQUFILENBQU1vRyxVQUFVbEcsQ0FBVixDQUFZeUQsTUFBWixDQUFvQjdELEVBQXBCLENBQU4sQ0FBbkIsRUFBcUQ7QUFDakRyQixpQ0FBUW1JLElBQVIsQ0FBYSxrQkFBYixFQUFpQzlHLEVBQWpDLEVBQXFDLDREQUFyQztBQUNBLDZCQUFJK0csTUFBdUJULFVBQVVsRyxDQUFWLENBQVl5RCxNQUFaLENBQW9CN0QsRUFBcEIsQ0FBM0I7QUFDQXNHLG1DQUFVbEcsQ0FBVixDQUFZeUQsTUFBWixDQUFvQjdELEVBQXBCLElBQTJCc0csVUFBVWxHLENBQVYsQ0FBWXlELE1BQVosQ0FBb0I3RCxFQUFwQixFQUF5Qk8sV0FBcEQ7QUFDQSxnQ0FBS3NFLE1BQUwsQ0FBWTdFLEVBQVosRUFBZ0IsSUFBaEIsRUFBc0IrRyxJQUFJN0YsS0FBMUI7QUFDQTZGLDZCQUFJQyxPQUFKO0FBQ0E7QUFDSDtBQUNELHlCQUFLLENBQUNMLFFBQUQsSUFBYWpHLEdBQUdSLEVBQUgsQ0FBTW9HLFVBQVVsRyxDQUFWLENBQVl5RCxNQUFaLENBQW9CN0QsRUFBcEIsQ0FBTixDQUFsQixFQUNJc0csVUFBVWxHLENBQVYsQ0FBWXlELE1BQVosQ0FBb0I3RCxFQUFwQixJQUEyQjBHLE9BQVExRyxFQUFSLENBQTNCOztBQUVKO0FBQ0gsa0JBYkQsTUFjSyxJQUFLLENBQUM0RyxLQUFELElBQVUsQ0FBQ0QsUUFBaEIsRUFDRCxPQUFLdkcsQ0FBTCxDQUFPeUQsTUFBUCxDQUFlN0QsRUFBZixJQUFzQjBHLE9BQVExRyxFQUFSLENBQXRCOztBQUVKc0Isd0JBQU8yRixjQUFQLENBQ0lKLElBREosRUFFSTdHLEVBRkosRUFHSTtBQUNJa0gsaUNBQWMsSUFEbEI7QUFFSUMsbUNBQWMsSUFGbEI7QUFHSUMsMEJBQWM7QUFBQSxnQ0FBTSxPQUFLaEgsQ0FBTCxDQUFPeUQsTUFBUCxDQUFlN0QsRUFBZixDQUFOO0FBQUE7QUFIbEIsa0JBSEo7QUFTQSxxQkFBS0EsTUFBTSxTQUFYLEVBQXVCO0FBQ3ZCc0Isd0JBQU8yRixjQUFQLENBQ0lYLFVBQVVsRyxDQUFWLENBQVljLEtBQVosQ0FBa0JmLFNBRHRCLEVBRUlILEVBRkosRUFHSTtBQUNJa0gsaUNBQWMsSUFEbEI7QUFFSUMsbUNBQWMsSUFGbEI7QUFHSUMsMEJBQWM7QUFBQSxnQ0FBUSxPQUFLaEgsQ0FBTCxDQUFPeUQsTUFBUCxDQUFlN0QsRUFBZixLQUF1QixPQUFLSSxDQUFMLENBQU95RCxNQUFQLENBQWU3RCxFQUFmLEVBQW9Ca0IsS0FBbkQ7QUFBQSxzQkFIbEI7QUFJSW1HLDBCQUFjLGFBQUVDLENBQUY7QUFBQSxnQ0FBVyxPQUFLekMsTUFBTCxDQUFZN0UsRUFBWixFQUFnQmlHLFNBQWhCLEVBQTJCcUIsQ0FBM0IsQ0FBWDtBQUFBO0FBSmxCLGtCQUhKO0FBVUFoRyx3QkFBTzJGLGNBQVAsQ0FDSVgsVUFBVWxHLENBQVYsQ0FBWTJCLElBQVosQ0FBaUI1QixTQURyQixFQUVJSCxFQUZKLEVBR0k7QUFDSWtILGlDQUFjLElBRGxCO0FBRUlDLG1DQUFjLElBRmxCO0FBR0lDLDBCQUFjO0FBQUEsZ0NBQVEsT0FBS2hILENBQUwsQ0FBT3lELE1BQVAsQ0FBZTdELEVBQWYsS0FBdUIsT0FBS0ksQ0FBTCxDQUFPeUQsTUFBUCxDQUFlN0QsRUFBZixFQUFvQitCLElBQW5EO0FBQUEsc0JBSGxCO0FBSUlzRiwwQkFBYyxhQUFFQyxDQUFGO0FBQUEsZ0NBQVcsT0FBS3pDLE1BQUwsQ0FBWTdFLEVBQVosRUFBZ0JpRyxTQUFoQixFQUEyQkEsU0FBM0IsRUFBc0NxQixDQUF0QyxDQUFYO0FBQUE7QUFKbEIsa0JBSEo7O0FBV0EscUJBQUlsRyxVQUFnQnNGLE9BQVExRyxFQUFSLGFBQXdCbEIsTUFBTUQsS0FBOUIsR0FDRTZILE9BQVExRyxFQUFSLEVBQWFPLFdBQWIsQ0FBeUJhLE9BRDNCLEdBRUVzRixPQUFRMUcsRUFBUixFQUFhb0IsT0FGbkM7QUFBQSxxQkFHSW1HLGdCQUFnQmpCLFVBQVVsRyxDQUFWLENBQVlnQixPQUFaLENBQW9CakIsU0FIeEM7QUFJQSxxQkFBS08sR0FBR21GLE9BQUgsQ0FBVyxPQUFLekYsQ0FBTCxDQUFPeUQsTUFBUCxDQUFlN0QsRUFBZixFQUFvQkcsU0FBL0IsQ0FBTCxFQUNJLE9BQUswRSxNQUFMLENBQVk3RSxFQUFaO0FBQ0oscUJBQUtVLEdBQUdtRixPQUFILENBQVcsT0FBS3pGLENBQUwsQ0FBT3lELE1BQVAsQ0FBZTdELEVBQWYsQ0FBWCxDQUFMLEVBQXVDO0FBQ25DdUgsbUNBQWV2SCxFQUFmLElBQXNCLE9BQUtJLENBQUwsQ0FBT3lELE1BQVAsQ0FBZTdELEVBQWYsRUFBb0JvQixPQUExQztBQUNIO0FBQ0QscUJBQUssQ0FBQ1YsR0FBRytFLE9BQUgsQ0FBVyxPQUFLckYsQ0FBTCxDQUFPeUQsTUFBUCxDQUFlN0QsRUFBZixDQUFYLENBQUQsSUFBb0MsQ0FBQ1UsR0FBRytFLE9BQUgsQ0FBVyxPQUFLckYsQ0FBTCxDQUFPeUQsTUFBUCxDQUFlN0QsRUFBZixFQUFvQkcsU0FBL0IsQ0FBMUMsRUFDSTs7QUFFSmlCLDRCQUNBRSxPQUFPQyxJQUFQLENBQVlILE9BQVosRUFDT0ksT0FEUCxDQUVVLFVBQUVnRyxHQUFGLEVBQVc7QUFDUCx5QkFBS0QsY0FBY0UsY0FBZCxDQUE2QkQsR0FBN0IsQ0FBTCxFQUNJRCxjQUFlQyxHQUFmLEVBQXFCRSxjQUFyQixHQURKLEtBRUs7QUFDREgsdUNBQWVDLEdBQWYsSUFBc0MsT0FBS0csUUFBTCxDQUFjaEUsSUFBZCxTQUF5QjZELEdBQXpCLENBQXRDO0FBQ0FELHVDQUFlQyxHQUFmLEVBQXFCRSxjQUFyQixHQUFzQyxDQUF0QztBQUNIO0FBQ0osa0JBVFgsQ0FEQTtBQVlILGNBL0VYO0FBaUZIOztBQUVEOzs7Ozs7Ozs7Ozs4QkFRTUUsRyxFQUFLdEksRyxFQUFLc0MsRSxFQUF3QjtBQUFBOztBQUFBLGlCQUFwQmlHLFVBQW9CLHVFQUFQLElBQU87O0FBQ3BDLGlCQUFJQyxpQkFBSjtBQUFBLGlCQUFjL0YsYUFBZDtBQUFBLGlCQUFvQmdHLGdCQUFwQjtBQUNBLGlCQUFLekksT0FBTyxDQUFDb0IsR0FBR0MsS0FBSCxDQUFTckIsR0FBVCxDQUFiLEVBQ0lBLE1BQU0sQ0FBRUEsR0FBRixDQUFOOztBQUVKLGlCQUFLc0MsT0FBTyxLQUFQLElBQWdCQSxPQUFPLElBQTVCLEVBQW1DO0FBQy9CaUcsOEJBQWFqRyxFQUFiO0FBQ0FBLHNCQUFhLElBQWI7QUFDSDs7QUFFRG1HLHVCQUFVekksSUFDTEQsR0FESyxDQUNEO0FBQUEsd0JBQVFxQixHQUFHc0gsTUFBSCxDQUFVaEksRUFBVixJQUFnQkEsRUFBaEIsR0FBcUJBLEdBQUcwRixJQUFoQztBQUFBLGNBREMsRUFFTHJHLEdBRkssQ0FFRDtBQUFBLHdCQUFRLE9BQUs2RixRQUFMLENBQWNsRixFQUFkLENBQVI7QUFBQSxjQUZDLENBQVY7O0FBS0Esa0JBQUtJLENBQUwsQ0FBTzRELFNBQVAsQ0FBaUJ0QyxJQUFqQixDQUNJLENBQ0lrRyxHQURKLEVBRUl0SSxHQUZKLEVBR0lzQyxNQUFNcUUsU0FIVixFQUlJNkIsV0FBV0MsUUFBUTNDLE1BQVIsQ0FBZSxVQUFFNkMsSUFBRixFQUFRakQsR0FBUixFQUFpQjtBQUN2Q2lELHNCQUFNakQsSUFBSUcsT0FBVixJQUFzQjhDLEtBQU1qRCxJQUFJRyxPQUFWLEtBQXVCO0FBQ3pDK0MsMEJBQU0sQ0FEbUM7QUFFekNDLDJCQUFNO0FBRm1DLGtCQUE3QztBQUlBRixzQkFBTWpELElBQUlHLE9BQVYsRUFBb0JnRCxJQUFwQixDQUF5QnpHLElBQXpCLENBQThCc0QsR0FBOUI7QUFDQSx3QkFBT2lELElBQVA7QUFDSCxjQVBVLEVBT1IsRUFQUSxDQUpmLENBREo7O0FBZUEsa0JBQUtsQyxLQUFMLENBQVd6RyxHQUFYO0FBQ0Esa0JBQUs4SSxZQUFMLENBQWtCOUcsT0FBT0MsSUFBUCxDQUFZdUcsUUFBWixDQUFsQixFQUF5QyxXQUF6Qzs7QUFFQSxpQkFBS0QsY0FBYyxLQUFLM0QsT0FBeEIsRUFBa0M7QUFDOUJuQyx3QkFBTyxLQUFLc0csVUFBTCxDQUFnQlAsUUFBaEIsQ0FBUDtBQUNBLHFCQUFLLENBQUMvRixJQUFOLEVBQWE7QUFDYixxQkFBSyxPQUFPNkYsR0FBUCxJQUFjLFVBQW5CLEVBQWdDO0FBQzVCLHlCQUFLaEcsRUFBTCxFQUFVZ0csSUFBSTFCLFFBQUoscUJBQWlCdEUsRUFBakIsRUFBdUJHLElBQXZCLEdBQVYsS0FDSzZGLElBQUkxQixRQUFKLENBQWFuRSxJQUFiO0FBQ1Isa0JBSEQsTUFJSztBQUNENkYseUJBQUk3RixJQUFKO0FBQ0g7QUFDSjtBQUNELG9CQUFPLElBQVA7QUFDSDs7QUFFRDs7Ozs7Ozs7O2dDQU1RNkYsRyxFQUFLdEksRyxFQUFLc0MsRSxFQUFLO0FBQ25CLGlCQUFJb0MsWUFBWSxLQUFLNUQsQ0FBTCxDQUFPNEQsU0FBdkI7QUFBQSxpQkFDSXRCLElBQVlzQixhQUFhQSxVQUFVMkIsTUFEdkM7QUFFQSxvQkFBUTNCLGFBQWF0QixHQUFyQjtBQUNJLHFCQUFLc0IsVUFBV3RCLENBQVgsRUFBZ0IsQ0FBaEIsTUFBd0JrRixHQUF4QixJQUFpQyxLQUFLNUQsVUFBV3RCLENBQVgsRUFBZ0IsQ0FBaEIsQ0FBUCxJQUFrQyxLQUFLcEQsR0FBdEUsSUFDQTBFLFVBQVd0QixDQUFYLEVBQWdCLENBQWhCLEtBQXVCZCxFQUQ1QixFQUNpQztBQUM3QiwwQkFBSzBHLGFBQUwsQ0FBbUJoSCxPQUFPQyxJQUFQLENBQVl5QyxVQUFXdEIsQ0FBWCxFQUFnQixDQUFoQixDQUFaLENBQW5CLEVBQXFELFdBQXJEO0FBQ0EsNEJBQU9zQixVQUFVdUUsTUFBVixDQUFpQjdGLENBQWpCLEVBQW9CLENBQXBCLENBQVA7QUFDSDtBQUxMO0FBTUg7O0FBRUQ7Ozs7Ozs7Ozs7Ozs2QkFTSzhGLEUsRUFBSTVELFUsRUFBMEI7QUFBQTs7QUFBQSxpQkFBZGpCLElBQWMsdUVBQVAsSUFBTzs7QUFDL0IsaUJBQUk5RSxRQUFVLEtBQUswQixXQUFMLENBQWlCMUIsS0FBL0I7QUFDQStGLDBCQUFjbEUsR0FBR0MsS0FBSCxDQUFTaUUsVUFBVCxJQUF1QkEsVUFBdkIsR0FBb0MsQ0FBRUEsVUFBRixDQUFsRDtBQUNBLGlCQUFJNkQsVUFBVTdELFdBQVd2RixHQUFYLENBQWUsS0FBSzZGLFFBQXBCLENBQWQ7QUFDQSxrQkFBS2EsS0FBTCxDQUFXbkIsVUFBWDtBQUNBLGlCQUFLakIsUUFBUTZFLGNBQWMzSixLQUEzQixFQUFtQztBQUMvQkEsdUJBQU1RLEdBQU4sQ0FBVW1KLEVBQVYsRUFBYzVELFVBQWQsRUFBMEIsSUFBMUIsRUFBZ0MsSUFBaEMsRUFBc0MsS0FBdEM7QUFDSCxjQUZELE1BR0ssSUFBS2pCLElBQUwsRUFBWTtBQUNiLHNCQUFLQSxJQUFMLENBQVU2RSxFQUFWLEVBQWM1RCxVQUFkLEVBQTBCcUIsU0FBMUIsRUFBcUMsS0FBckM7O0FBRUEscUJBQUl5Qyx1QkFBSjtBQUFBLHFCQUNJQyxhQUFhSCxHQUFHSSxnQkFBSCxHQUFzQixzQkFBdEIsR0FBK0MsU0FEaEU7O0FBR0EscUJBQUtKLEdBQUdmLGNBQUgsQ0FBa0JrQixVQUFsQixDQUFMLEVBQXFDO0FBQ2pDRCxzQ0FBaUJGLEdBQUlHLFVBQUosQ0FBakI7QUFDSDs7QUFFREgsb0JBQUlHLFVBQUosSUFBbUIsWUFBZTtBQUM5Qiw0QkFBT0gsR0FBSUcsVUFBSixDQUFQO0FBQ0EseUJBQUtELGNBQUwsRUFDSUYsR0FBSUcsVUFBSixJQUFtQkQsY0FBbkI7O0FBRUosNEJBQUtHLE1BQUwsQ0FBWUwsRUFBWixFQUFnQjVELFVBQWhCO0FBQ0EsNEJBQU80RCxHQUFJRyxVQUFKLEtBQW9CSCxHQUFJRyxVQUFKLHNCQUEzQjtBQUNILGtCQVBEO0FBU0g7QUFDRCxvQkFBT0YsUUFBUXJELE1BQVIsQ0FBZSxVQUFFckQsSUFBRixFQUFRaUQsR0FBUixFQUFpQjtBQUNuQ3hGLDBCQUFTdUMsSUFBVCxFQUFlaUQsSUFBSThELEtBQUosSUFBYTlELElBQUkzRCxJQUFoQyxFQUFzQyxPQUFLMEgsUUFBTCxDQUFjL0QsSUFBSTNELElBQWxCLENBQXRDO0FBQ0Esd0JBQU9VLElBQVA7QUFDSCxjQUhNLEVBR0osRUFISSxDQUFQO0FBSUg7O0FBRUQ7Ozs7Ozs7O29DQUtzQjtBQUFBLGlCQUFaVixJQUFZLHVFQUFMLEVBQUs7O0FBQ2xCQSxvQkFBT1gsR0FBR3NILE1BQUgsQ0FBVTNHLElBQVYsSUFBa0JBLEtBQUsySCxLQUFMLENBQVcsR0FBWCxDQUFsQixHQUFvQzNILElBQTNDO0FBQ0Esb0JBQU9BLFFBQ0EsS0FBS3VCLE1BQUwsQ0FBYXZCLEtBQU0sQ0FBTixDQUFiLENBREEsSUFFQSxLQUFLdUIsTUFBTCxDQUFhdkIsS0FBTSxDQUFOLENBQWIsRUFBeUIwSCxRQUZ6QixJQUdBLEtBQUtuRyxNQUFMLENBQWF2QixLQUFNLENBQU4sQ0FBYixFQUF5QjBILFFBQXpCLENBQWtDMUgsS0FBSzJFLEtBQUwsQ0FBVyxDQUFYLENBQWxDLENBSFA7QUFJSDs7QUFFRDs7Ozs7Ozs7eUNBSzJCO0FBQUEsaUJBQVozRSxJQUFZLHVFQUFMLEVBQUs7O0FBQ3ZCQSxvQkFBT1gsR0FBR3NILE1BQUgsQ0FBVTNHLElBQVYsSUFBa0JBLEtBQUsySCxLQUFMLENBQVcsR0FBWCxDQUFsQixHQUFvQzNILElBQTNDO0FBQ0Esb0JBQU9BLFFBQ0dBLEtBQUtzRSxNQURSLEtBR0F0RSxLQUFLc0UsTUFBTCxJQUFlLENBQWYsSUFBb0IsS0FBSy9DLE1BQUwsQ0FBYXZCLEtBQU0sQ0FBTixDQUFiLEVBQXlCNEgsYUFBN0MsR0FDRSxLQUFLckcsTUFBTCxDQUFhdkIsS0FBTSxDQUFOLENBQWIsRUFBeUI0SCxhQUF6QixDQUF1QzVILEtBQUsyRSxLQUFMLENBQVcsQ0FBWCxDQUF2QyxDQURGLEdBRUUzRSxLQUFLc0UsTUFBTCxJQUFlLENBQWYsSUFBb0IsS0FBSy9DLE1BQUwsQ0FBYXZCLEtBQU0sQ0FBTixDQUFiLENBTHRCLENBQVA7QUFPSDs7QUFFRDs7Ozs7Ozs7O3lDQU0wQztBQUFBLGlCQUEzQjZILFlBQTJCLHVFQUFaLEVBQVk7QUFBQSxpQkFBUkMsS0FBUTs7QUFDdEMsaUJBQUk3RCxNQUFNLEtBQUtsRixDQUFMLENBQU95RCxNQUFqQjtBQUNBLGlCQUFLLENBQUNxRixZQUFOLEVBQXFCO0FBQ2pCQSxnQ0FBZSxFQUFmO0FBQ0g7QUFDRDVILG9CQUFPQyxJQUFQLENBQVkrRCxHQUFaLEVBQWlCOUQsT0FBakIsQ0FDSSxjQUFNO0FBQ0YscUJBQUt4QixNQUFNLFNBQVgsRUFBdUI7QUFDdkIscUJBQUssQ0FBQ1UsR0FBR1IsRUFBSCxDQUFNb0YsSUFBS3RGLEVBQUwsQ0FBTixDQUFOLEVBQ0U7QUFDRWtKLGtDQUFjbEosRUFBZCxJQUFxQnNGLElBQUt0RixFQUFMLEVBQVUyQyxJQUEvQjtBQUNILGtCQUhELE1BSUssSUFBSyxDQUFDdUcsYUFBYXpCLGNBQWIsQ0FBNEJ6SCxFQUE1QixDQUFOLEVBQ0RrSixhQUFjbEosRUFBZCxJQUFxQixLQUFyQjtBQUNQLGNBVEw7QUFXQSxpQkFBSyxDQUFDbUosS0FBTixFQUFjO0FBQ1Ysc0JBQUsvSSxDQUFMLENBQU8wRCxNQUFQLENBQWNzQixNQUFkLENBQXFCLFVBQUVnRSxPQUFGLEVBQVc5RCxHQUFYO0FBQUEsNEJBQXNCQSxJQUFJK0QsYUFBSixDQUFrQkgsWUFBbEIsR0FBaUNBLFlBQXZEO0FBQUEsa0JBQXJCLEVBQTRGQSxZQUE1RjtBQUNBLHNCQUFLakosTUFBTCxJQUFlLEtBQUtBLE1BQUwsQ0FBWW9KLGFBQVosQ0FBMEJILFlBQTFCLENBQWY7QUFDSDtBQUNELG9CQUFPQSxZQUFQO0FBQ0g7O0FBRUQ7Ozs7Ozs7Ozs7O3dDQVFnQmYsSSxFQUFNbUIsTSxFQUFRQyxNLEVBQVM7QUFBQTs7QUFFbkNELHNCQUFTQSxVQUFVbkIsS0FDZDlJLEdBRGMsQ0FDVjtBQUFBLHdCQUFRcUIsR0FBR3NILE1BQUgsQ0FBVWhJLEVBQVYsSUFBZ0JBLEVBQWhCLEdBQXFCQSxHQUFHMEYsSUFBaEM7QUFBQSxjQURVLEVBRWRyRyxHQUZjLENBRVY7QUFBQSx3QkFBUSxPQUFLNkYsUUFBTCxDQUFjbEYsRUFBZCxDQUFSO0FBQUEsY0FGVSxFQUdkb0YsTUFIYyxDQUdQLFVBQUU2QyxJQUFGLEVBQVFqRCxHQUFSLEVBQWlCO0FBQ3JCaUQsc0JBQU1qRCxJQUFJRyxPQUFWLElBQXNCOEMsS0FBTWpELElBQUlHLE9BQVYsS0FBdUI7QUFDekMrQywwQkFBTSxDQURtQztBQUV6Q0MsMkJBQU07QUFGbUMsa0JBQTdDO0FBSUFGLHNCQUFNakQsSUFBSUcsT0FBVixFQUFvQmdELElBQXBCLENBQXlCekcsSUFBekIsQ0FBOEJzRCxHQUE5QjtBQUNBLHdCQUFPaUQsSUFBUDtBQUNILGNBVmMsRUFVWixFQVZZLENBQW5COztBQVlBLG9CQUFPLEtBQUtJLFVBQUwsQ0FBZ0JpQixNQUFoQixFQUF3QkMsTUFBeEIsQ0FBUDtBQUVIOztBQUVEOzs7Ozs7Ozs7OztvQ0FRWUwsWSxFQUFjSyxNLEVBQVFILE8sRUFBVTtBQUFBOztBQUN4QyxpQkFBSTlELE1BQU0sS0FBS2xGLENBQUwsQ0FBT3lELE1BQWpCOztBQUVBMEYsc0JBQVNBLFVBQVUsRUFBbkI7QUFDQWpJLG9CQUFPQyxJQUFQLENBQVkrRCxHQUFaLEVBQWlCOUQsT0FBakIsQ0FDSSxjQUFNO0FBQ0YscUJBQUt4QixNQUFNLFNBQVgsRUFBdUI7QUFDdkIscUJBQUssQ0FBQ3VKLE9BQU85QixjQUFQLENBQXNCekgsRUFBdEIsQ0FBRCxJQUE4QixDQUFDVSxHQUFHUixFQUFILENBQU1vRixJQUFLdEYsRUFBTCxDQUFOLENBQS9CLEtBQ0ssQ0FBQ2tKLFlBQUQsSUFDS0EsYUFBYXpCLGNBQWIsQ0FBNEJ6SCxFQUE1QixLQUFtQ2tKLGFBQWNsSixFQUFkLE1BQXVCaUcsU0FEL0QsSUFFRyxFQUFHLENBQUNpRCxhQUFhekIsY0FBYixDQUE0QnpILEVBQTVCLENBQUQsSUFBb0NzRixJQUFLdEYsRUFBTCxFQUFVMkMsSUFBVixJQUFrQnVHLGFBQWNsSixFQUFkLEVBQW1Ca0ksR0FBNUUsQ0FIUixDQUFMLEVBSUU7O0FBRUVrQiwrQkFBZSxJQUFmO0FBQ0FHLDRCQUFRdkosRUFBUixJQUFlLFFBQUsrQixJQUFMLENBQVcvQixFQUFYLENBQWY7O0FBRUEseUJBQUtrSixnQkFBZ0JBLGFBQWF6QixjQUFiLENBQTRCekgsRUFBNUIsQ0FBckIsRUFBdUQ7QUFDbkRrSixzQ0FBY2xKLEVBQWQsSUFBeUJrSixhQUFjbEosRUFBZCxLQUFzQixFQUFFa0ksS0FBSyxDQUFQLEVBQVVDLE1BQU0sRUFBaEIsRUFBL0M7QUFDQWUsc0NBQWNsSixFQUFkLEVBQW1Ca0ksR0FBbkIsR0FBeUI1QyxJQUFLdEYsRUFBTCxFQUFVMkMsSUFBbkM7QUFDQXVHLHNDQUFjbEosRUFBZCxFQUFtQm1JLElBQW5CLENBQXdCM0csT0FBeEIsQ0FDSSxlQUFPO0FBQ0g7QUFDQTtBQUNBK0gsb0NBQVF2RSxJQUFJOEQsS0FBWixJQUFzQixRQUFLQyxRQUFMLENBQWMvRCxJQUFJM0QsSUFBbEIsQ0FBdEI7QUFFSCwwQkFOTDtBQVFILHNCQVhELE1BWUs7QUFDRDtBQUNBa0ksZ0NBQVF2SixFQUFSLElBQWUsUUFBSytCLElBQUwsQ0FBVy9CLEVBQVgsQ0FBZjtBQUNIO0FBRUo7QUFDSixjQTlCTDtBQWdDQW9KLHVCQUFVLEtBQUtoSixDQUFMLENBQU8wRCxNQUFQLENBQWNzQixNQUFkLENBQXFCLFVBQUVnRSxPQUFGLEVBQVc5RCxHQUFYO0FBQUEsd0JBQXNCQSxJQUFJK0MsVUFBSixDQUFlYSxZQUFmLEVBQTZCSyxNQUE3QixFQUFxQ0gsT0FBckMsS0FBaURBLE9BQXZFO0FBQUEsY0FBckIsRUFBdUdBLE9BQXZHLENBQVY7QUFDQUEsdUJBQVUsS0FBS25KLE1BQUwsSUFBZSxLQUFLQSxNQUFMLENBQVlvSSxVQUFaLENBQXVCYSxZQUF2QixFQUFxQ0ssTUFBckMsRUFBNkNILE9BQTdDLENBQWYsSUFBd0VBLE9BQWxGO0FBQ0Esb0JBQU9BLFdBQVdHLE1BQWxCO0FBQ0g7O0FBRUQ7Ozs7Ozs7Ozt5Q0FNNkI7QUFBQSxpQkFBZEMsTUFBYyx1RUFBTCxFQUFLOztBQUN6QkEsb0JBQU85SCxJQUFQLGtDQUFlLEtBQUt0QixDQUFMLENBQU82QyxXQUF0QjtBQUNBLGtCQUFLN0MsQ0FBTCxDQUFPNkMsV0FBUCxDQUFtQnpCLE9BQW5CLENBQ0ksZUFBTztBQUNIOEQscUJBQUltRSxhQUFKLENBQWtCRCxNQUFsQjtBQUNILGNBSEw7QUFLQSxvQkFBT0EsTUFBUDtBQUNIOztBQUVEOzs7Ozs7Ozs7O3FDQU9tQztBQUFBLGlCQUF4QkUsR0FBd0IsdUVBQWxCLEVBQWtCO0FBQUEsaUJBQWRILE1BQWMsdUVBQUwsRUFBSztBQUMzQix1QkFBc0UsS0FBS25KLENBQUwsQ0FBT3lELE1BQTdFO0FBQUEsaUJBQ0VpRixLQURGLEdBQ3NFWSxHQUR0RSxDQUNFWixLQURGO0FBQUEsbUNBQ3NFWSxHQUR0RSxDQUNTQyxVQURUO0FBQUEsaUJBQ1NBLFVBRFQsbUNBQ3NCLElBRHRCO0FBQUEsaUJBQzRCQyxXQUQ1QixHQUNzRUYsR0FEdEUsQ0FDNEJFLFdBRDVCO0FBQUEsa0NBQ3NFRixHQUR0RSxDQUN5Q0csU0FEekM7QUFBQSxpQkFDeUNBLFNBRHpDLGtDQUNxRCxJQURyRDtBQUFBLGlCQUMyREMsTUFEM0QsR0FDc0VKLEdBRHRFLENBQzJESSxNQUQzRDs7O0FBR0osaUJBQUtuSyxZQUFZNEosTUFBWixFQUFvQixLQUFLakgsR0FBekIsQ0FBTCxFQUNJLE9BQU9pSCxNQUFQOztBQUVKO0FBQ0E3Six5QkFBWTZKLE1BQVosRUFBb0IsS0FBS2pILEdBQXpCLEVBQThCLEVBQTlCOztBQUVBaEIsb0JBQU9DLElBQVAsQ0FBWStELEdBQVosRUFBaUI5RCxPQUFqQixDQUNJLGNBQU07QUFDRixxQkFBS3hCLE1BQU0sU0FBTixJQUFtQlUsR0FBR1IsRUFBSCxDQUFNb0YsSUFBS3RGLEVBQUwsQ0FBTixDQUF4QixFQUNJOztBQUVKc0YscUJBQUt0RixFQUFMLEVBQVUrSixTQUFWLENBQW9CTCxHQUFwQixFQUF5QkgsTUFBekI7QUFDSCxjQU5MOztBQVNBSyw0QkFBZSxLQUFLM0osTUFBcEIsSUFBOEIsS0FBS0EsTUFBTCxDQUFZOEosU0FBWixDQUFzQjtBQUNJQyw0QkFBYSxLQURqQjtBQUVJSiw4QkFBYSxJQUZqQjtBQUdJQyxxQ0FISjtBQUlJQztBQUpKLGNBQXRCLEVBS3lCUCxNQUx6QixDQUE5Qjs7QUFPQUksMkJBQWMsS0FBS3ZKLENBQUwsQ0FBTzZDLFdBQVAsQ0FBbUJ6QixPQUFuQixDQUNWLGVBQU87QUFDSCxrQkFBQzhELElBQUlsRixDQUFKLENBQU1tQyxTQUFQLElBQW9CK0MsSUFBSXlFLFNBQUosQ0FBYztBQUNJQyxnQ0FBYSxJQURqQjtBQUVJSixrQ0FBYSxLQUZqQjtBQUdJQyx5Q0FISjtBQUlJQztBQUpKLGtCQUFkLEVBS2lCUCxNQUxqQixDQUFwQjtBQU1ILGNBUlMsQ0FBZDs7QUFXQU0sMEJBQWEsS0FBS3pKLENBQUwsQ0FBTzBELE1BQVAsQ0FBY3RDLE9BQWQsQ0FDVCxlQUFPO0FBQ0gsa0JBQUM4RCxJQUFJbEYsQ0FBSixDQUFNbUMsU0FBUCxJQUFvQitDLElBQUl5RSxTQUFKLENBQWM7QUFDSUMsZ0NBQWEsS0FEakI7QUFFSUosa0NBQWEsS0FGakI7QUFHSUMseUNBSEo7QUFJSUM7QUFKSixrQkFBZCxFQUtpQlAsTUFMakIsQ0FBcEI7QUFNSCxjQVJRLENBQWI7O0FBV0EsaUJBQUtULEtBQUwsRUFBYTtBQUNUUywwQkFBU2pJLE9BQU9DLElBQVAsQ0FBWWdJLE1BQVosRUFDT25FLE1BRFAsQ0FFVSxVQUFFNkUsQ0FBRixFQUFLbkYsQ0FBTDtBQUFBLDRCQUNJbUYsRUFBR25GLEVBQUVvRixVQUFGLENBQWFwQixLQUFiLElBQ0VBLFFBQVFoRSxFQUFFcUYsTUFBRixDQUFTckIsTUFBTW5ELE1BQWYsQ0FEVixHQUVFYixDQUZMLElBRVd5RSxPQUFRekUsQ0FBUixDQUZYLEVBR0ltRixDQUpSO0FBQUEsa0JBRlYsRUFRVSxFQVJWLENBQVQ7QUFVSDtBQUNELG9CQUFPVixNQUFQO0FBQ0g7O0FBRUQ7Ozs7Ozs7O2lDQUtTekgsUSxFQUFrRDtBQUFBOztBQUFBLGlCQUF4QzRILEdBQXdDLHVFQUFsQyxFQUFrQztBQUFBLGlCQUE5QjlDLEtBQThCLHVFQUF0QmxHLEdBQUcwSixJQUFILENBQVFWLEdBQVIsS0FBZ0JBLEdBQU07O0FBQ3ZELGlCQUFJcEUsTUFBTyxLQUFLbEYsQ0FBTCxDQUFPeUQsTUFBbEI7QUFBQSxpQkFBMEJvQixhQUExQjtBQUNBbkQsd0JBQVdBLFlBQ0duQyxZQUFZbUMsUUFBWixFQUFzQixLQUFLUSxHQUEzQixDQURILElBRUcsS0FBSytILGlCQUFMLENBQXVCLEtBQUsvSCxHQUE1QixDQUZkOztBQUlBLGlCQUFLLENBQUNSLFFBQU4sRUFDSTs7QUFFSixrQkFBSzFCLENBQUwsQ0FBTzBCLFFBQVAsR0FBa0JBLFFBQWxCOztBQUVBbUQsb0JBQU9uRCxTQUFVLEdBQVYsQ0FBUDs7QUFFQW1ELHFCQUFRM0QsT0FBT0MsSUFBUCxDQUFZMEQsSUFBWixFQUFrQnpELE9BQWxCLENBQ0osZ0JBQVE7QUFDSixxQkFBS2tFLFFBQVEsU0FBYixFQUF5Qjs7QUFFekIscUJBQUtKLElBQUtJLElBQUwsQ0FBTCxFQUFtQjs7QUFFZix5QkFBS2tCLFNBQVMsQ0FBQ2xHLEdBQUdSLEVBQUgsQ0FBTW9GLElBQUtJLElBQUwsQ0FBTixDQUFmLEVBQ0lKLElBQUtJLElBQUwsRUFBWXNCLE9BQVo7O0FBRUosNkJBQUtuQyxNQUFMLENBQVlhLElBQVosRUFMZSxDQUtHO0FBQ3JCO0FBRUosY0FaRyxDQUFSOztBQWVBLGtCQUFLdEYsQ0FBTCxDQUFPMEQsTUFBUCxDQUFjdEMsT0FBZCxDQUNJLGVBQU87QUFDSCxrQkFBQzhELElBQUlsRixDQUFKLENBQU1tQyxTQUFQLElBQW9CK0MsSUFBSWIsT0FBSixDQUFZd0IsU0FBWixFQUF1QlcsS0FBdkIsQ0FBcEI7QUFDSCxjQUhMOztBQU1BLGtCQUFLeEcsQ0FBTCxDQUFPNkMsV0FBUCxDQUFtQnpCLE9BQW5CLENBQ0ksZUFBTztBQUNILGtCQUFDOEQsSUFBSWxGLENBQUosQ0FBTW1DLFNBQVAsSUFBb0IrQyxJQUFJYixPQUFKLENBQVl3QixTQUFaLEVBQXVCVyxLQUF2QixDQUFwQjtBQUNILGNBSEw7QUFNSDs7OzBDQUVpQnRILEcsRUFBSzZKLEssRUFBUTtBQUMzQjtBQUNBLGlCQUFLLEtBQUsvSSxDQUFMLENBQU8wQixRQUFQLElBQW1CeEMsSUFBSTRLLFVBQUosQ0FBZSxLQUFLNUgsR0FBcEIsQ0FBeEIsRUFBbUQ7QUFDL0MscUJBQUlzRixNQUFNakksWUFBWSxLQUFLUyxDQUFMLENBQU8wQixRQUFuQixFQUE2QnhDLElBQUk2SyxNQUFKLENBQVcsS0FBSzdILEdBQUwsQ0FBU3FELE1BQXBCLENBQTdCLENBQVY7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBT2lDLEdBQVA7QUFDSCxjQU5ELE1BT0ssT0FBTyxDQUFDdUIsS0FBRCxJQUNHLEtBQUtsSixNQURSLElBRUcsS0FBS0EsTUFBTCxDQUFZcUssZ0JBQVosQ0FBNkJoTCxHQUE3QixDQUZILElBSUEsS0FBS3NELE1BQUwsQ0FBWWtELE9BQVosSUFDRyxLQUFLbEQsTUFBTCxDQUFZa0QsT0FBWixDQUFvQndFLGdCQUFwQixDQUFxQ2hMLEdBQXJDLENBTFY7QUFPUjs7OzZDQUVvQndDLFEsRUFBVXhDLEcsRUFBSzZKLEssRUFBUTtBQUN4QztBQUNBLGlCQUFLckgsUUFBTCxFQUFnQjtBQUNaLHFCQUFJOEYsTUFBTWpJLFlBQVltQyxRQUFaLEVBQXNCeEMsR0FBdEIsQ0FBVjtBQUNBLHdCQUFPc0ksR0FBUDtBQUNIO0FBRUo7OzsyQ0FFa0J0SSxHLEVBQUs2SixLLEVBQVE7QUFDNUIsaUJBQUssS0FBSy9JLENBQUwsQ0FBTzBCLFFBQVAsSUFBbUJ4QyxJQUFJNEssVUFBSixDQUFlLEtBQUs1SCxHQUFwQixDQUF4QixFQUFtRDtBQUMvQyxxQkFBSXNGLE1BQU1qSSxZQUFZLEtBQUtTLENBQUwsQ0FBTzBCLFFBQW5CLEVBQTZCeEMsSUFBSTZLLE1BQUosQ0FBVyxLQUFLN0gsR0FBTCxDQUFTcUQsTUFBcEIsQ0FBN0IsQ0FBVjtBQUNBLHFCQUFLaUMsR0FBTCxFQUFXO0FBQ1A7QUFDSDtBQUNELHdCQUFPQSxHQUFQO0FBQ0gsY0FORCxNQU9LLE9BQU8sQ0FBQ3VCLEtBQUQsSUFDRyxLQUFLbEosTUFEUixJQUVHLEtBQUtBLE1BQUwsQ0FBWW9LLGlCQUFaLENBQThCL0ssR0FBOUIsQ0FGSCxJQUlBLEtBQUtzRCxNQUFMLENBQVlrRCxPQUFaLElBQ0csS0FBS2xELE1BQUwsQ0FBWWtELE9BQVosQ0FBb0J1RSxpQkFBcEIsQ0FBc0MvSyxHQUF0QyxDQUxWO0FBTVI7Ozs2Q0FFb0JBLEcsRUFBSzZKLEssRUFBUTtBQUM5QixpQkFBSyxLQUFLL0ksQ0FBTCxDQUFPMEIsUUFBUCxJQUFtQnhDLElBQUk0SyxVQUFKLENBQWUsS0FBSzVILEdBQXBCLENBQXhCLEVBQW1EO0FBQy9DLHFCQUFJc0YsTUFBTWpJLFlBQVksS0FBS1MsQ0FBTCxDQUFPMEIsUUFBbkIsRUFBNkJ4QyxJQUFJNkssTUFBSixDQUFXLEtBQUs3SCxHQUFMLENBQVNxRCxNQUFwQixFQUE0QjRFLE9BQTVCLENBQW9DLDBCQUFwQyxFQUFnRSxJQUFoRSxDQUE3QixDQUFWO0FBQ0EscUJBQUszQyxHQUFMLEVBQ0ksT0FBT0EsSUFBS3RJLElBQUlpTCxPQUFKLENBQVksMEJBQVosRUFBd0MsSUFBeEMsQ0FBTCxDQUFQO0FBQ1A7QUFDRCxvQkFBTyxDQUFDcEIsS0FBRCxJQUNHLEtBQUtsSixNQURSLElBRUcsS0FBS0EsTUFBTCxDQUFZdUssbUJBQVosQ0FBZ0NsTCxHQUFoQyxDQUZILElBSUEsS0FBS3NELE1BQUwsQ0FBWWtELE9BQVosSUFDRyxLQUFLbEQsTUFBTCxDQUFZa0QsT0FBWixDQUFvQjBFLG1CQUFwQixDQUF3Q2xMLEdBQXhDLENBTFY7QUFNSDs7O2tDQUVTbUwsTSxFQUFTO0FBQUE7O0FBQ2ZuSixvQkFBT0MsSUFBUCxDQUFZa0osTUFBWixFQUNPakosT0FEUCxDQUNlO0FBQUEsd0JBQU8sUUFBS04sS0FBTCxDQUFZNEQsQ0FBWixJQUFrQjJGLE9BQVEzRixDQUFSLENBQXpCO0FBQUEsY0FEZjtBQUVIOztBQUVEOzs7Ozs7OztrQ0FLVTRGLEksRUFBTztBQUNiLGlCQUFLLE9BQU9BLElBQVAsS0FBZ0IsUUFBckIsRUFBZ0M7QUFDNUIsc0JBQUtqSSxRQUFMLHFCQUFrQmlJLEtBQUtoRixJQUF2QixFQUErQmdGLEtBQUtuRixLQUFwQztBQUNBbUYsd0JBQU9BLEtBQUtoRixJQUFaO0FBQ0g7QUFDRCxpQkFBSVYsTUFBTzBGLEtBQUsxQixLQUFMLENBQVcsR0FBWCxDQUFYO0FBQ0FoRSxpQkFBSyxDQUFMLElBQVdBLElBQUssQ0FBTCxFQUFTZ0UsS0FBVCxDQUFlLEdBQWYsQ0FBWDtBQUNBLG9CQUFPO0FBQ0g3RCwwQkFBU0gsSUFBSyxDQUFMLEVBQVUsQ0FBVixDQUROO0FBRUgzRCx1QkFBUzJELElBQUssQ0FBTCxDQUZOO0FBR0g4RCx3QkFBUzlELElBQUssQ0FBTCxLQUFZQSxJQUFLLENBQUwsRUFBVUEsSUFBSyxDQUFMLEVBQVNXLE1BQVQsR0FBa0IsQ0FBNUIsQ0FIbEI7QUFJSFgsc0JBQVMwRjtBQUpOLGNBQVA7QUFNSDs7QUFFRDs7Ozs7Ozs7OztrQ0FPVUMsTSxFQUFrQjtBQUFBO0FBQUE7O0FBQUEsK0NBQVBDLElBQU87QUFBUEEscUJBQU87QUFBQTs7QUFDeEIsaUJBQUssS0FBSzlILElBQVYsRUFBaUI7QUFDYm5FLHlCQUFRQyxJQUFSLENBQWEsb0ZBQWIsRUFBcUcsSUFBSW1FLEtBQUosRUFBRixDQUFnQjhILEtBQW5IO0FBQ0E7QUFDSDtBQUNELGlCQUFJQyxRQUFRLEtBQUsxSyxDQUFMLENBQU9vRCxlQUFuQjtBQUNBbEMsb0JBQU9DLElBQVAsQ0FBWSxLQUFLbkIsQ0FBTCxDQUFPeUQsTUFBbkIsRUFDT3JDLE9BRFAsQ0FFVSxjQUFNO0FBQUE7O0FBQ0YscUJBQUt4QixNQUFNLFNBQVgsRUFBdUI7QUFDdkIscUJBQUssQ0FBQ1UsR0FBR1IsRUFBSCxDQUFNLFFBQUtFLENBQUwsQ0FBT3lELE1BQVAsQ0FBZTdELEVBQWYsQ0FBTixDQUFOLEVBQ0ksdUJBQUtJLENBQUwsQ0FBT3lELE1BQVAsQ0FBZTdELEVBQWYsR0FBb0IrSyxPQUFwQixxQkFBNEJKLE1BQTVCLFNBQXVDQyxJQUF2QztBQUNQLGNBTlg7O0FBU0EsaUJBQUtFLFNBQVNBLE1BQU1ySCxJQUFOLENBQVdrSCxNQUFYLENBQWQsRUFDSTs7QUFFSixrQkFBS3ZLLENBQUwsQ0FBTzBELE1BQVAsQ0FBY3RDLE9BQWQsQ0FBc0IsVUFBRThELEdBQUY7QUFBQSx3QkFBYUEsSUFBSXFDLFFBQUosYUFBYWdELE1BQWIsU0FBd0JDLElBQXhCLEVBQWI7QUFBQSxjQUF0QjtBQUNBLGtCQUFLM0ssTUFBTCxJQUFlLGlCQUFLQSxNQUFMLEVBQVkwSCxRQUFaLGtCQUFxQmdELE1BQXJCLFNBQWdDQyxJQUFoQyxFQUFmO0FBQ0Esb0JBQU8sSUFBUDtBQUNIOztBQUVEOzs7O21DQUNVO0FBQ04sa0JBQUtqRCxRQUFMLGFBQWlCNUMsU0FBakI7QUFDSDs7QUFFRDs7Ozs7Ozs7OEJBS01pRyxFLEVBQUs7QUFBQTs7QUFDUCxpQkFBSyxLQUFLOUcsT0FBVixFQUNJLE9BQU84RyxHQUFHLEtBQUtqSixJQUFSLENBQVA7QUFDSixrQkFBS2tKLElBQUwsQ0FBVSxRQUFWLEVBQW9CO0FBQUEsd0JBQUtELEdBQUcsUUFBS2pKLElBQVIsQ0FBTDtBQUFBLGNBQXBCO0FBQ0g7O0FBRUQ7Ozs7Ozs7Ozt3Q0FNb0M7QUFBQTs7QUFBQSxpQkFBdEJhLE1BQXNCLHVFQUFiLEVBQWE7QUFBQSxpQkFBVHNJLE1BQVM7O0FBQ2hDdEksb0JBQU9wQixPQUFQLENBQ0k7QUFBQSx3QkFBUSxRQUFLb0IsTUFBTCxDQUFhNUMsRUFBYixLQUFxQixRQUFLNEMsTUFBTCxDQUFhNUMsRUFBYixFQUFrQmlFLE1BQXZDLElBQWlELFFBQUtyQixNQUFMLENBQWE1QyxFQUFiLEVBQWtCaUUsTUFBbEIsQ0FBeUJpSCxNQUF6QixDQUF6RDtBQUFBLGNBREo7QUFHSDs7QUFFRDs7Ozs7Ozs7O3lDQU1xQztBQUFBOztBQUFBLGlCQUF0QnRJLE1BQXNCLHVFQUFiLEVBQWE7QUFBQSxpQkFBVHNJLE1BQVM7O0FBQ2pDdEksb0JBQU9wQixPQUFQLENBQ0k7QUFBQSx3QkFBUSxRQUFLb0IsTUFBTCxDQUFhNUMsRUFBYixLQUFxQixRQUFLNEMsTUFBTCxDQUFhNUMsRUFBYixFQUFrQjJFLE9BQXZDLElBQWtELFFBQUsvQixNQUFMLENBQWE1QyxFQUFiLEVBQWtCMkUsT0FBbEIsQ0FBMEJ1RyxNQUExQixDQUExRDtBQUFBLGNBREo7QUFHSDs7QUFFRDs7Ozs7Ozs4QkFJTUEsTSxFQUFTO0FBQ1g7QUFDQSxrQkFBS2hILE9BQUwsSUFBZ0IsQ0FBQyxLQUFLWCxPQUFMLENBQWFELEdBQTlCLElBQXFDLEtBQUs2SCxJQUFMLENBQVUsVUFBVixFQUFzQixJQUF0QixDQUFyQztBQUNBLGtCQUFLakgsT0FBTCxHQUFlLEtBQWY7QUFDQSxrQkFBS1gsT0FBTCxDQUFhRCxHQUFiO0FBQ0EsaUJBQUs0SCxNQUFMLEVBQWM7QUFDVixzQkFBSzNILE9BQUwsQ0FBYzJILE1BQWQsSUFBeUIsS0FBSzNILE9BQUwsQ0FBYzJILE1BQWQsS0FBMEIsQ0FBbkQ7QUFDQSxzQkFBSzNILE9BQUwsQ0FBYzJILE1BQWQ7QUFDSDtBQUNKOztBQUdEOzs7Ozs7O2lDQUlTQSxNLEVBQVM7QUFBQTs7QUFFZCxpQkFBS0EsTUFBTCxFQUFjO0FBQ1YscUJBQUssS0FBSzNILE9BQUwsQ0FBYzJILE1BQWQsS0FBMEIsQ0FBL0IsRUFDSXZNLFFBQVF5TSxLQUFSLENBQWMsNkJBQWQsRUFBNkNGLE1BQTdDO0FBQ0osc0JBQUszSCxPQUFMLENBQWMySCxNQUFkLElBQXlCLEtBQUszSCxPQUFMLENBQWMySCxNQUFkLEtBQTBCLENBQW5EO0FBQ0Esc0JBQUszSCxPQUFMLENBQWMySCxNQUFkO0FBQ0g7QUFDRCxpQkFBSyxDQUFDQSxNQUFELElBQVcsS0FBSzNILE9BQUwsQ0FBYUQsR0FBYixJQUFvQixDQUFwQyxFQUNJM0UsUUFBUXlNLEtBQVIsQ0FBYyw2QkFBZDs7QUFFSixrQkFBSzdILE9BQUwsQ0FBYUQsR0FBYjtBQUNBLGlCQUFLLENBQUMsS0FBS0MsT0FBTCxDQUFhRCxHQUFuQixFQUF5QjtBQUNyQixzQkFBS2xELENBQUwsQ0FBT2lMLFlBQVAsSUFBdUJDLGFBQWEsS0FBS2xMLENBQUwsQ0FBT2lMLFlBQXBCLENBQXZCOztBQUVBLHNCQUFLakwsQ0FBTCxDQUFPaUwsWUFBUCxHQUFzQjNHLFdBQ2xCLGFBQUs7QUFDRCw2QkFBS3RFLENBQUwsQ0FBT2lMLFlBQVAsR0FBc0IsSUFBdEI7QUFDQSx5QkFBSyxRQUFLOUgsT0FBTCxDQUFhRCxHQUFsQixFQUNJOztBQUVKLDZCQUFLbEQsQ0FBTCxDQUFPbUwsUUFBUCxJQUFtQkQsYUFBYSxRQUFLbEwsQ0FBTCxDQUFPbUwsUUFBcEIsQ0FBbkI7QUFDQSw2QkFBSzVJLElBQUw7QUFDQSw2QkFBS3VCLE9BQUwsR0FBZSxJQUFmO0FBQ0EsNkJBQUtpSCxJQUFMLENBQVUsUUFBVjs7QUFFQSxzQkFBQyxRQUFLckksSUFBTixJQUFjLFFBQUt5QixPQUFMLEVBQWQsQ0FWQyxDQVU0QjtBQUNoQyxrQkFaaUIsQ0FBdEI7QUFjSDtBQUVKOztBQUVEOzs7Ozs7a0NBR1M7QUFBQTs7QUFDTCxrQkFBS25FLENBQUwsQ0FBT21MLFFBQVAsSUFBbUJELGFBQWEsS0FBS2xMLENBQUwsQ0FBT21MLFFBQXBCLENBQW5CO0FBQ0Esa0JBQUtuTCxDQUFMLENBQU9tTCxRQUFQLEdBQWtCN0csV0FDZCxhQUFLO0FBQ0QseUJBQUt0RSxDQUFMLENBQU9tTCxRQUFQLEdBQWtCLElBQWxCO0FBQ0EseUJBQUtoSCxPQUFMO0FBQ0gsY0FKYSxFQUlYLENBSlcsQ0FBbEI7QUFNSDs7O21DQUVTO0FBQUE7O0FBQ04saUJBQUssS0FBS25FLENBQUwsQ0FBTzRELFNBQVAsQ0FBaUIyQixNQUF0QixFQUNJLEtBQUt2RixDQUFMLENBQU80RCxTQUFQLENBQWlCeEMsT0FBakIsQ0FBeUIsaUJBQXlEO0FBQUEscUJBQWxEb0csR0FBa0QsU0FBckQsQ0FBcUQ7QUFBQSxxQkFBMUN0SSxHQUEwQyxTQUE3QyxDQUE2QztBQUFBLHFCQUFsQ3NDLEVBQWtDLFNBQXJDLENBQXFDO0FBQUEscUJBQTNCa0csUUFBMkIsU0FBOUIsQ0FBOEI7QUFBQSxxQkFBZDBELE1BQWMsU0FBakIsQ0FBaUI7O0FBQzlFLHFCQUFJekosT0FBTyxRQUFLc0csVUFBTCxDQUFnQlAsUUFBaEIsQ0FBWDtBQUNBLHFCQUFLLENBQUMvRixJQUFOLEVBQWE7QUFDYixxQkFBSyxPQUFPNkYsR0FBUCxJQUFjLFVBQW5CLEVBQWdDO0FBQzVCO0FBQ0EseUJBQUtoRyxFQUFMLEVBQVVnRyxJQUFJMUIsUUFBSixxQkFBaUJ0RSxFQUFqQixFQUF1QkcsSUFBdkIsR0FBVixLQUNLNkYsSUFBSTFCLFFBQUosQ0FBYW5FLElBQWI7QUFDUixrQkFKRCxNQUtLO0FBQ0Q2Rix5QkFBSTdGLElBQUosRUFBVStGLHlDQUFpQkEsUUFBakIsTUFBK0IsU0FBekM7QUFDSDtBQUNEO0FBQ0E7QUFDQTtBQUNILGNBZEQ7QUFlSixrQkFBS3FELElBQUwsQ0FBVSxRQUFWLEVBQW9CLEtBQUs5QyxVQUFMLEVBQXBCO0FBQ0g7O0FBRUQ7Ozs7Ozs7b0NBSVc7QUFDUCxvQkFBTyxLQUFLbkUsT0FBWjtBQUNIOzs7bUNBRVVvQixHLEVBQU07QUFBQTs7QUFDYixrQkFBS2xGLENBQUwsQ0FBTzZDLFdBQVAsQ0FBbUJ2QixJQUFuQixDQUF3QjRELEdBQXhCO0FBQ0Esa0JBQUtsRixDQUFMLENBQU9nRCxVQUFQO0FBQ0EsaUJBQUltRCxRQUFZO0FBQ1IsMkJBQWdCLG1CQUFLO0FBQ2pCLDZCQUFLbkcsQ0FBTCxDQUFPK0MsY0FBUDtBQUNBLHlCQUFLLENBQUMsUUFBSy9DLENBQUwsQ0FBTytDLGNBQWIsRUFDSSxRQUFLZ0ksSUFBTCxDQUFVLFlBQVY7QUFDUCxrQkFMTztBQU1SLDZCQUFnQixxQkFBSztBQUNqQiw2QkFBSy9LLENBQUwsQ0FBTytDLGNBQVA7QUFDQSx5QkFBSyxLQUFLLFFBQUsvQyxDQUFMLENBQU8rQyxjQUFqQixFQUNJLFFBQUtnSSxJQUFMLENBQVUsY0FBVjtBQUNQLGtCQVZPO0FBV1IsK0JBQWdCLHVCQUFLO0FBQ2pCLDZCQUFLL0ssQ0FBTCxDQUFPK0MsY0FBUDtBQUNBLHlCQUFLLENBQUMsUUFBSy9DLENBQUwsQ0FBTytDLGNBQWIsRUFDSSxRQUFLZ0ksSUFBTCxDQUFVLFlBQVY7QUFDUCxrQkFmTztBQWdCUixpQ0FBZ0IseUJBQUs7QUFDakIsNkJBQUsvSyxDQUFMLENBQU8rQyxjQUFQO0FBQ0EseUJBQUssS0FBSyxRQUFLL0MsQ0FBTCxDQUFPK0MsY0FBakIsRUFDSSxRQUFLZ0ksSUFBTCxDQUFVLGNBQVY7QUFDUCxrQkFwQk87QUFxQlIsNEJBQWdCLHNCQUFPO0FBQ25CLHlCQUFLN0YsSUFBSWxGLENBQUosQ0FBTStDLGNBQVgsRUFDSSxRQUFLL0MsQ0FBTCxDQUFPK0MsY0FBUDtBQUNKLHlCQUFLLENBQUNtQyxJQUFJYyxRQUFKLEVBQU4sRUFDSSxRQUFLaEcsQ0FBTCxDQUFPK0MsY0FBUDs7QUFFSix5QkFBSyxDQUFDLFFBQUsvQyxDQUFMLENBQU8rQyxjQUFiLEVBQ0ksUUFBS2dJLElBQUwsQ0FBVSxZQUFWO0FBQ1A7QUE3Qk8sY0FBaEI7QUFBQSxpQkErQklNLFlBQVksS0FBS3JMLENBQUwsQ0FBTytDLGNBL0J2QjtBQWdDQTtBQUNBLGNBQUNtQyxJQUFJYyxRQUFKLEVBQUQsSUFBbUIsS0FBS2hHLENBQUwsQ0FBTytDLGNBQVAsRUFBbkI7QUFDQW1DLGlCQUFJbEYsQ0FBSixDQUFNK0MsY0FBTixJQUF3QixLQUFLL0MsQ0FBTCxDQUFPK0MsY0FBUCxFQUF4QjtBQUNBLGtCQUFLL0MsQ0FBTCxDQUFPOEMsZUFBUCxDQUF1QnhCLElBQXZCLENBQTRCNkUsS0FBNUI7QUFDQSxpQkFBSyxDQUFDa0YsU0FBRCxJQUFjLEtBQUtyTCxDQUFMLENBQU8rQyxjQUExQixFQUNJLEtBQUtnSSxJQUFMLENBQVUsY0FBVixFQUEwQixJQUExQjtBQUNKN0YsaUJBQUlsQixFQUFKLENBQU9tQyxLQUFQO0FBQ0g7OztrQ0FFU2pCLEcsRUFBTTtBQUNaLGlCQUFJNUMsSUFBWSxLQUFLdEMsQ0FBTCxDQUFPNkMsV0FBUCxDQUFtQnlJLE9BQW5CLENBQTJCcEcsR0FBM0IsQ0FBaEI7QUFBQSxpQkFDSW1HLFlBQVksS0FBS3JMLENBQUwsQ0FBTytDLGNBRHZCO0FBRUEsaUJBQUtULEtBQUssQ0FBQyxDQUFYLEVBQWU7QUFDWCxzQkFBS3RDLENBQUwsQ0FBTzZDLFdBQVAsQ0FBbUJzRixNQUFuQixDQUEwQjdGLENBQTFCLEVBQTZCLENBQTdCO0FBQ0Esa0JBQUM0QyxJQUFJYyxRQUFKLEVBQUQsSUFBbUIsS0FBS2hHLENBQUwsQ0FBTytDLGNBQVAsRUFBbkI7QUFDQW1DLHFCQUFJbEYsQ0FBSixDQUFNK0MsY0FBTixJQUF3QixLQUFLL0MsQ0FBTCxDQUFPK0MsY0FBUCxFQUF4QjtBQUNBbUMscUJBQUlxRyxFQUFKLENBQU8sS0FBS3ZMLENBQUwsQ0FBTzhDLGVBQVAsQ0FBdUJxRixNQUF2QixDQUE4QjdGLENBQTlCLEVBQWlDLENBQWpDLEVBQXFDLENBQXJDLENBQVA7QUFDQSxxQkFBSytJLGFBQWEsQ0FBQyxLQUFLckwsQ0FBTCxDQUFPK0MsY0FBMUIsRUFDSSxLQUFLZ0ksSUFBTCxDQUFVLFlBQVY7QUFDUDtBQUNKOzs7Z0NBRU9ELE0sRUFBUztBQUNiLGtCQUFLN0gsU0FBTCxDQUFlQyxHQUFmO0FBQ0E7QUFDQSxpQkFBSzRILE1BQUwsRUFBYztBQUNWLHNCQUFLN0gsU0FBTCxDQUFnQjZILE1BQWhCLElBQTJCLEtBQUs3SCxTQUFMLENBQWdCNkgsTUFBaEIsS0FBNEIsQ0FBdkQ7QUFDQSxzQkFBSzdILFNBQUwsQ0FBZ0I2SCxNQUFoQjtBQUNIO0FBQ0o7OztpQ0FFUUEsTSxFQUFTO0FBQUE7O0FBQ2Q7QUFDQSxpQkFBS0EsTUFBTCxFQUFjO0FBQ1YscUJBQUssQ0FBQyxLQUFLN0gsU0FBTCxDQUFnQjZILE1BQWhCLENBQU4sRUFDSSxNQUFNLElBQUluSSxLQUFKLENBQVUsbUNBQW1DbUksTUFBN0MsQ0FBTjtBQUNKLHNCQUFLN0gsU0FBTCxDQUFnQjZILE1BQWhCO0FBQ0g7O0FBRUQsaUJBQUssQ0FBQyxLQUFLN0gsU0FBTCxDQUFlQyxHQUFyQixFQUNJLE1BQU0sSUFBSVAsS0FBSixDQUFVLCtCQUFWLENBQU47O0FBRUosa0JBQUtNLFNBQUwsQ0FBZUMsR0FBZjs7QUFFQSxpQkFBSyxDQUFDLEtBQUtELFNBQUwsQ0FBZUMsR0FBckIsRUFBMkI7QUFDdkI7QUFDQSxxQkFBSyxLQUFLbEQsQ0FBTCxDQUFPNkIsYUFBWixFQUE0QjtBQUN4QiwwQkFBSzdCLENBQUwsQ0FBT3dMLFNBQVAsSUFBb0JOLGFBQWEsS0FBS2xMLENBQUwsQ0FBT3dMLFNBQXBCLENBQXBCO0FBQ0EsMEJBQUt4TCxDQUFMLENBQU93TCxTQUFQLEdBQW1CbEgsV0FDZixhQUFLO0FBQ0Q7QUFDQSwwQkFBQyxRQUFLckIsU0FBTCxDQUFlQyxHQUFoQixJQUF1QixDQUFDLFFBQUtSLElBQTdCLElBQXFDLFFBQUtrRSxPQUFMLEVBQXJDO0FBQ0E7QUFDSCxzQkFMYyxFQU1mLEtBQUs1RyxDQUFMLENBQU82QixhQU5RLENBQW5CO0FBUUgsa0JBVkQsTUFXSztBQUNEO0FBQ0Usc0JBQUMsS0FBS29CLFNBQUwsQ0FBZUMsR0FBaEIsSUFBdUIsQ0FBQyxLQUFLUixJQUE3QixJQUFxQyxLQUFLa0UsT0FBTCxFQUF2QztBQUNBO0FBQ0g7QUFDSjtBQUNKOztBQUVEOzs7Ozs7bUNBR1U7QUFBQTs7QUFDTixpQkFBSTFCLE1BQU0sS0FBS2xGLENBQUwsQ0FBT3lELE1BQWpCO0FBQ0E7QUFDQSxrQkFBS3pELENBQUwsQ0FBT2lMLFlBQVAsSUFBdUJDLGFBQWEsS0FBS2xMLENBQUwsQ0FBT2lMLFlBQXBCLENBQXZCO0FBQ0Esa0JBQUtqTCxDQUFMLENBQU9tTCxRQUFQLElBQW1CRCxhQUFhLEtBQUtsTCxDQUFMLENBQU9tTCxRQUFwQixDQUFuQjtBQUNBakssb0JBQU9DLElBQVAsQ0FDSSxLQUFLbkIsQ0FBTCxDQUFPd0QsVUFEWCxFQUVFcEMsT0FGRixDQUdJO0FBQUEsd0JBQVV4QixPQUFPLFNBQVQsSUFBd0IsUUFBS0ksQ0FBTCxDQUFPeUQsTUFBUCxDQUFlN0QsRUFBZixFQUFvQjZMLGNBQXBCLENBQW1DLFFBQUt6TCxDQUFMLENBQU93RCxVQUFQLENBQW1CNUQsRUFBbkIsQ0FBbkMsQ0FBaEM7QUFBQSxjQUhKO0FBS0Esb0JBQVEsS0FBS0ksQ0FBTCxDQUFPMkQsVUFBUCxDQUFrQjRCLE1BQTFCLEVBQW1DO0FBQy9CLHNCQUFLdkYsQ0FBTCxDQUFPMEQsTUFBUCxDQUFlLENBQWYsRUFBbUIrSCxjQUFuQixDQUFrQyxLQUFLekwsQ0FBTCxDQUFPMkQsVUFBUCxDQUFrQjZCLEtBQWxCLEVBQWxDO0FBQ0Esc0JBQUt4RixDQUFMLENBQU8wRCxNQUFQLENBQWM4QixLQUFkLEdBQXNCakIsT0FBdEIsQ0FBOEIsU0FBOUI7QUFDSDtBQUNELDBDQUFLLEtBQUt2RSxDQUFMLENBQU80RCxTQUFaLEdBQXdCM0UsR0FBeEIsQ0FBNEI7QUFBQSx3QkFBWSxRQUFLd0osTUFBTCxtQ0FBZWlELFFBQWYsRUFBWjtBQUFBLGNBQTVCO0FBQ0Esa0JBQU0sSUFBSXhNLEdBQVYsSUFBaUJnRyxHQUFqQjtBQUNJLHFCQUFLLENBQUM1RSxHQUFHUixFQUFILENBQU1vRixJQUFLaEcsR0FBTCxDQUFOLENBQU4sRUFBMEI7QUFDdEIseUJBQUtBLE9BQU8sU0FBWixFQUF3QjtBQUN4QixzQkFBQ2dHLElBQUtoRyxHQUFMLEVBQVd1RCxZQUFaLElBQTRCeUMsSUFBS2hHLEdBQUwsRUFBV3FGLE9BQVgsQ0FBbUIsUUFBbkIsQ0FBNUI7QUFDSDtBQUpMLGNBS0EsSUFBSyxLQUFLdkUsQ0FBTCxDQUFPaUUsV0FBWixFQUEwQjtBQUN0QixzQkFBS3BFLE1BQUwsQ0FBWThMLFFBQVosQ0FBcUIsSUFBckI7QUFDQSxzQkFBSzlMLE1BQUwsQ0FBWTRMLGNBQVosQ0FBMkIsS0FBS3pMLENBQUwsQ0FBT2lFLFdBQWxDO0FBQ0Esc0JBQUtwRSxNQUFMLENBQVkwRSxPQUFaLENBQW9CLFlBQXBCO0FBQ0Esc0JBQUt2RSxDQUFMLENBQU9pRSxXQUFQLEdBQXFCLElBQXJCO0FBQ0g7QUFDRCxrQkFBS3ZCLElBQUwsR0FBWSxJQUFaO0FBQ0Esa0JBQUtxSSxJQUFMLENBQVUsU0FBVixFQUFxQixJQUFyQjs7QUFHQTtBQUNBLG9CQUFPOUssV0FBWSxLQUFLaUMsR0FBakIsQ0FBUDs7QUFFQTtBQUVIOzs7O0dBL3FDZTFDLFk7O0FBQWRkLE0sQ0FpQ0ttRCxhLEdBQWdCLEM7QUFqQ3JCbkQsTSxDQW9DS0QsSyxHQUFXLEk7O0FBcENoQkMsTSxDQXFDS00sUSxHQUFXLFNBQVNBLFFBQVQsQ0FBbUJpQyxJQUFuQixFQUEwQjtBQUN4QyxVQUFLQSxJQUFMLEdBQVlBLElBQVo7QUFDSCxFOztBQXZDQ3ZDLE0sQ0F3Q0swQixNLEdBQVdILFU7OztBQTJvQ3RCSyxJQUFHbUYsT0FBSCxHQUFhLFVBQVcrQixHQUFYLEVBQWlCO0FBQzFCLFlBQU9BLGVBQWU5SSxLQUF0QjtBQUNILEVBRkQ7O21CQUllQSxLOzs7Ozs7Ozs7Ozs7Ozs7QUNwdUNmLEtBQUk0QixLQUFLLG1CQUFBbkIsQ0FBUSxDQUFSLENBQVQ7O2dDQUdPbUIsRTs7Ozs7OztBQ0hQOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9DQUFtQyxFQUFFLGlCQUFpQixFQUFFLGVBQWUsRUFBRSxnQkFBZ0IsRUFBRTtBQUMzRjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxNQUFNO0FBQ2pCLFlBQVcsT0FBTztBQUNsQixhQUFZLFFBQVE7QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLE1BQU07QUFDakIsYUFBWSxRQUFRO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxNQUFNO0FBQ2pCLGFBQVksUUFBUTtBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxNQUFNO0FBQ2pCLFlBQVcsTUFBTTtBQUNqQixhQUFZLFFBQVE7QUFDcEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsTUFBTTtBQUNqQixZQUFXLE1BQU07QUFDakIsYUFBWSxRQUFRO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLE1BQU07QUFDakIsYUFBWSxRQUFRO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxNQUFNO0FBQ2pCLGFBQVksUUFBUTtBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsTUFBTTtBQUNqQixhQUFZLFFBQVE7QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxNQUFNO0FBQ2pCLGFBQVksUUFBUTtBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxNQUFNO0FBQ2pCLGFBQVksUUFBUTtBQUNwQjtBQUNBOztBQUVBO0FB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IFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDU1MzllNGExN2JiYzY1MGIyNzBmIiwiLypcbiAqIENvcHlyaWdodCAoYykgIDIwMTggV2lzZSBXaWxkIFdlYiAuXG4gKlxuICogIE1JVCBMaWNlbnNlXG4gKlxuICogIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqICBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiAgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqICBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqICBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqICBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcbiAqICBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqICBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiAgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiAgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiAgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiAgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcbiAqICBTT0ZUV0FSRS5cbiAqXG4gKiBAYXV0aG9yIDogTmF0aGFuYWVsIEJyYXVuXG4gKiBAY29udGFjdCA6IGNhaXBpbGFic0BnbWFpbC5jb21cbiAqL1xuXG5sZXQgJGdsb2JhbCA9ICggdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgKSA/IHdpbmRvdyA6IGdsb2JhbDtcblxuaW1wb3J0IFNjb3BlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tIFwiLi9TY29wZVwiO1xuaW1wb3J0IFN0b3JlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tIFwiLi9TdG9yZVwiO1xuaW1wb3J0IHsgYWRkU2NvcGFibGVUeXBlLCByZVNjb3BlLCBzY29wZVRvU3RhdGUgfSBmcm9tIFwiLi91dGlscy9zY29wYWJsZVwiO1xuXG5jb25zdCBSUyA9ICRnbG9iYWwuX19fcmVzY29wZSB8fCB7fTtcbmlmICggJGdsb2JhbC5fX19yZXNjb3BlICkge1xuICAgIGNvbnNvbGUud2FybihcIlJlU2NvcGUgaXMgZGVmaW5lZCBtdWx0aXBsZSB0aW1lcyAhISBcXG5DaGVjayB5b3UncmUgcGFja2FnaW5nXCIpXG59XG5lbHNlIHtcbiAgICBcbiAgICAkZ2xvYmFsLl9fX3Jlc2NvcGUgPSBSUztcbiAgICBTY29wZS5TdG9yZSAgICAgICAgPSBTdG9yZTtcbiAgICBSUy5TY29wZSAgICAgICAgICAgPSBTY29wZTtcbiAgICBSUy5Db250ZXh0ICAgICAgICAgPSBTY29wZTtcbiAgICBSUy5TdG9yZSAgICAgICAgICAgPSBTdG9yZTtcbiAgICBSUy5yZVNjb3BlICAgICAgICAgPSByZVNjb3BlO1xuICAgIFJTLnNjb3BlVG9TdGF0ZSAgICA9IHNjb3BlVG9TdGF0ZTtcbiAgICBSUy5yZVNjb3BlU3RhdGUgICAgPSBzY29wZVRvU3RhdGU7XG4gICAgUlMuYWRkU2NvcGFibGVUeXBlID0gYWRkU2NvcGFibGVUeXBlO1xuICAgIFJTLnNjb3BlUmVmICAgICAgICA9XG4gICAgICAgIGZ1bmN0aW9uIHNjb3BlUmVmKCBtYXAsIGtleSApIHtcbiAgICAgICAgICAgIG1hcFsga2V5IF0gPSBuZXcgU2NvcGUuc2NvcGVSZWYobWFwWyBrZXkgXSk7XG4gICAgICAgICAgICByZXR1cm4gbWFwO1xuICAgICAgICB9O1xuICAgIFxufVxuZXhwb3J0IGRlZmF1bHQgUlM7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LmpzIiwiLypcbiAqIENvcHlyaWdodCAoYykgIDIwMTggV2lzZSBXaWxkIFdlYiAuXG4gKlxuICogIE1JVCBMaWNlbnNlXG4gKlxuICogIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqICBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiAgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqICBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqICBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqICBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcbiAqICBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqICBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiAgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiAgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiAgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiAgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcbiAqICBTT0ZUV0FSRS5cbiAqXG4gKiBAYXV0aG9yIDogTmF0aGFuYWVsIEJyYXVuXG4gKiBAY29udGFjdCA6IGNhaXBpbGFic0BnbWFpbC5jb21cbiAqL1xuXG5cbnZhciBpcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL3V0aWxzL2lzJyksXG4gICAgeyB3YWxrblNldCwgd2Fsa25HZXQsIGtleVdhbGtuU2V0LCBrZXlXYWxrbkdldCB9ID0gcmVxdWlyZSgnLi91dGlscy91dGlscycpLFxuICAgIEV2ZW50RW1pdHRlciAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vdXRpbHMvRW1pdHRlcicpLFxuICAgIHNob3J0aWQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJ3Nob3J0aWQnKVxuICAgICwgX19wcm90b19fcHVzaCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA9ICggdGFyZ2V0LCBpZCwgcGFyZW50ICkgPT4ge1xuICAgICAgICBsZXQgZm4gICAgICAgICA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgfTtcbiAgICAgICAgZm4ucHJvdG90eXBlICAgPSBwYXJlbnQgPyBuZXcgcGFyZW50Ll9bIGlkIF0oKSA6IHRhcmdldFsgaWQgXSB8fCB7fTtcbiAgICAgICAgdGFyZ2V0WyBpZCBdICAgPSBuZXcgZm4oKTtcbiAgICAgICAgdGFyZ2V0Ll9bIGlkIF0gPSBmbjtcbiAgICB9LFxuICAgIG9wZW5TY29wZXMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA9IHt9LFxuICAgIFNpbXBsZU9iamVjdFByb3RvICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA9ICgge30gKS5jb25zdHJ1Y3RvcjtcblxuLyoqXG4gKiBCYXNlIFNjb3BlIG9iamVjdFxuICovXG5jbGFzcyBTY29wZSBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gICAgc3RhdGljIGdldFNjb3BlKCBzY29wZXMgKSB7XG4gICAgICAgIGxldCBza2V5ID0gaXMuYXJyYXkoc2NvcGVzKSA/IHNjb3Blcy5zb3J0KCggYSwgYiApID0+IHtcbiAgICAgICAgICAgIGlmICggYS5maXJzdG5hbWUgPCBiLmZpcnN0bmFtZSApIHJldHVybiAtMTtcbiAgICAgICAgICAgIGlmICggYS5maXJzdG5hbWUgPiBiLmZpcnN0bmFtZSApIHJldHVybiAxO1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH0pLmpvaW4oJysnKSA6IHNjb3BlcztcbiAgICAgICAgcmV0dXJuIG9wZW5TY29wZXNbIHNrZXkgXSA9IG9wZW5TY29wZXNbIHNrZXkgXSB8fCBuZXcgU2NvcGUoe30sIHsgaWQ6IHNrZXkgfSk7XG4gICAgfTtcbiAgICBcbiAgICBcbiAgICAvKipcbiAgICAgKiBnZXQgYSBwYXJzZWQgcmVmZXJlbmNlIGxpc3QgZnJvbSBzdGF0ZU1hcFxuICAgICAqIEBwYXJhbSBfcmVmXG4gICAgICogQHJldHVybnMge3tzdG9yZUlkLCBwYXRoLCBhbGlhczogKiwgcmVmOiAqfX1cbiAgICAgKi9cbiAgICBzdGF0aWMgc3RhdGVNYXBUb1JlZkxpc3QoIHNtLCBzdGF0ZSA9IHt9LCBfcmVmcyA9IFtdLCBhY3Rpb25zID0ge30sIHBhdGggPSBcIlwiICkge1xuICAgICAgICBPYmplY3Qua2V5cyhzbSkuZm9yRWFjaChcbiAgICAgICAgICAgIGtleSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGNwYXRoID0gcGF0aCA/IHBhdGggKyAnLicgKyBrZXkgOiBrZXk7XG4gICAgICAgICAgICAgICAgc21bIGtleSBdIGluc3RhbmNlb2YgU2NvcGUuc2NvcGVSZWZcbiAgICAgICAgICAgICAgICA/IF9yZWZzLnB1c2goc21bIGtleSBdLnBhdGggKyAnOicgKyBjcGF0aClcbiAgICAgICAgICAgICAgICA6ICggc21bIGtleSBdICYmIHNtWyBrZXkgXSBpbnN0YW5jZW9mIEZ1bmN0aW9uIClcbiAgICAgICAgICAgICAgICAgID8gYWN0aW9uc1sga2V5IF0gPSBzbVsga2V5IF1cbiAgICAgICAgICAgICAgICAgIDogKCBzbVsga2V5IF0gJiYgc21bIGtleSBdLnByb3RvdHlwZSBpbnN0YW5jZW9mIFNjb3BlLlN0b3JlIClcbiAgICAgICAgICAgICAgICAgICAgPyBfcmVmcy5wdXNoKHNtWyBrZXkgXS5hcyhjcGF0aCkpXG4gICAgICAgICAgICAgICAgICAgIDogc3RhdGVbIGNwYXRoIF0gPSBzbVsga2V5IF1cbiAgICAgICAgICAgICAgICAvLzogdGhpcy5zdGF0ZU1hcFRvUmVmTGlzdChzbVtrZXldLCBfcmVmcywgcGF0aCArICcuJyArIGtleSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgICAgICByZXR1cm4gX3JlZnM7XG4gICAgfVxuICAgIFxuICAgIHN0YXRpYyBwZXJzaXN0ZW5jZVRtID0gMTsvLyBpZiA+IDAsIHdpbGwgd2FpdCAncGVyc2lzdGVuY2VUbScgbXMgYmVmb3JlIGRlc3Ryb3lcbiAgICAvLyB3aGVuXG4gICAgLy8gZGlzcG9zZSByZWFjaCAwXG4gICAgc3RhdGljIFN0b3JlICAgID0gbnVsbDtcbiAgICBzdGF0aWMgc2NvcGVSZWYgPSBmdW5jdGlvbiBzY29wZVJlZiggcGF0aCApIHtcbiAgICAgICAgdGhpcy5wYXRoID0gcGF0aDtcbiAgICB9O1xuICAgIHN0YXRpYyBzY29wZXMgICA9IG9wZW5TY29wZXM7Ly8gYWxsIGFjdGl2ZSBzY29wZXNcbiAgICBcbiAgICBcbiAgICAvKipcbiAgICAgKiBJbml0IGEgUmVTY29wZSBzY29wZVxuICAgICAqXG4gICAgICogQHBhcmFtIHN0b3Jlc01hcCB7T2JqZWN0fSBPYmplY3Qgd2l0aCB0aGUgaW5pdGlhbCBzdG9yZXMgZGVmaW5pdGlvbiAvIGluc3RhbmNlc1xuICAgICAqIEBwYXJhbSBjb25maWcge09iamVjdH0gU2NvcGUgY29uZmlnXG4gICAgICoge1xuICAgICAqICBwYXJlbnQge3Njb3BlfSBAb3B0aW9uYWwgcGFyZW50IHNjb3BlXG4gICAgICpcbiAgICAgKiAgaWQge3N0cmluZ30gQG9wdGlvbmFsIGlkICggaWYgdGhpcyBpZCBleGlzdCBzdG9yZXNNYXAgd2lsbCBiZSBtZXJnZSBvbiB0aGUgJ2lkJ1xuICAgICAqICAgICBzY29wZSkga2V5IHtzdHJpbmd9IEBvcHRpb25hbCBrZXkgb2YgdGhlIHNjb3BlICggaWYgbm8gaWQgaXMgc2V0LCB0aGUgc2NvcGUgaWRcbiAgICAgKiAgICAgd2lsbCBiZSAocGFyZW50LmlkKyc+JytrZXkpIGluY3JlbWVudElkIHtib29sfSBAb3B0aW9uYWwgdHJ1ZSB0byBhZGQgYSBzdWZmaXhcbiAgICAgKiAgICAgaWQsIGlmIHRoZSBwcm92aWRlZCBrZXkgb3IgaWQgZ2xvYmFsbHkgZXhpc3RcbiAgICAgKlxuICAgICAqICBzdGF0ZSB7T2JqZWN0fSBAb3B0aW9uYWwgaW5pdGlhbCBzdGF0ZSBieSBzdG9yZSBhbGlhc1xuICAgICAqICBkYXRhIHtPYmplY3R9IEBvcHRpb25hbCBpbml0aWFsIGRhdGEgYnkgc3RvcmUgYWxpYXNcbiAgICAgKlxuICAgICAqICByb290RW1pdHRlciB7Ym9vbH0gQG9wdGlvbmFsIHRydWUgdG8gbm90IGJlaW5nIGRlc3RhYmlsaXplZCBieSBwYXJlbnRcbiAgICAgKiAgYm91bmRlZEFjdGlvbnMge2FycmF5IHwgcmVnZXhwfSBAb3B0aW9uYWwgbGlzdCBvciByZWdleHAgb2YgYWN0aW9ucyBub3RcbiAgICAgKiAgICAgcHJvcGFnYXRlZCB0byB0aGUgcGFyZW50XG4gICAgICpcbiAgICAgKiAgcGVyc2lzdGVuY2VUbSB7bnVtYmVyKSBpZiA+IDAsIHdpbGwgd2FpdCAncGVyc2lzdGVuY2VUbScgbXMgYmVmb3JlIGRlc3Ryb3kgd2hlblxuICAgICAqICAgICBkaXNwb3NlIHJlYWNoIDAgYXV0b0Rlc3Ryb3kgIHtib29sfSB3aWxsIHRyaWdnZXIgcmV0YWluICYgZGlzcG9zZSBhZnRlciBzdGFydFxuICAgICAqICB9XG4gICAgICogQHJldHVybnMge1Njb3BlfVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKCBzdG9yZXNNYXAsIHsgcGFyZW50LCBrZXksIGlkLCBzbmFwc2hvdCwgc3RhdGUsIGRhdGEsIGluY3JlbWVudElkID0gISFrZXksIHBlcnNpc3RlbmNlVG0sIGF1dG9EZXN0cm95LCByb290RW1pdHRlciwgYm91bmRlZEFjdGlvbnMgfSA9IHt9ICkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB2YXIgXyA9IHt9LCBrZXlJbmRleDtcbiAgICAgICAgXG4gICAgICAgIGlkID0gaWQgfHwga2V5ICYmICggKCBwYXJlbnQgJiYgcGFyZW50Ll9pZCB8fCAnJyApICsgJz4nICsga2V5ICk7XG4gICAgICAgIFxuICAgICAgICBfLmlzTG9jYWxJZCA9ICFpZDtcbiAgICAgICAgXG4gICAgICAgIC8vaWYgKCBwYXJlbnQgJiYga2V5ICkge1xuICAgICAgICAvLyAgICBrZXlJbmRleCA9IHBhcmVudC5fLmNoaWxkU2NvcGVzLmZpbmQoY3R4PT4oY3R4Ll9pZD09aWQpKTtcbiAgICAgICAgLy8gICAgaWYgKCBrZXlJbmRleCA9PSAtMSApIGtleUluZGV4ID0gcGFyZW50Ll8uc2VlbkNoaWxkcztcbiAgICAgICAgLy8gICAga2V5SW5kZXgrKztcbiAgICAgICAgLy8gICAgaWYgKCBrZXlJbmRleCApXG4gICAgICAgIC8vICAgICAgICBpZCA9IGlkICsgJ1snICsga2V5SW5kZXggKyAnXSc7XG4gICAgICAgIC8vfVxuICAgICAgICBcbiAgICAgICAgaWQgPSBpZCB8fCAoIFwiX19fX19cIiArIHNob3J0aWQuZ2VuZXJhdGUoKSApO1xuICAgICAgICBcbiAgICAgICAgaWYgKCBvcGVuU2NvcGVzWyBpZCBdICkge1xuICAgICAgICAgICAgdGhpcy5faWQgPSBpZDtcbiAgICAgICAgICAgIG9wZW5TY29wZXNbIGlkIF0ucmVnaXN0ZXIoc3RvcmVzTWFwKTtcbiAgICAgICAgICAgIHJldHVybiBvcGVuU2NvcGVzWyBpZCBdXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoIG9wZW5TY29wZXNbIGlkIF0gJiYgaW5jcmVtZW50SWQgKSB7XG4gICAgICAgICAgICBsZXQgaSA9IC0xO1xuICAgICAgICAgICAgd2hpbGUgKCBvcGVuU2NvcGVzWyBpZCArICdbJyArICggKytpICkgKyAnXScgXSApIDtcbiAgICAgICAgICAgIGlkID0gaWQgKyAnWycgKyBpICsgJ10nO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9pZCAgICAgICAgID0gaWQ7XG4gICAgICAgIHRoaXMuX3JldiAgICAgICAgPSAwO1xuICAgICAgICBvcGVuU2NvcGVzWyBpZCBdID0gdGhpcztcbiAgICAgICAgXy5wZXJzaXN0ZW5jZVRtICA9IHBlcnNpc3RlbmNlVG0gfHwgdGhpcy5jb25zdHJ1Y3Rvci5wZXJzaXN0ZW5jZVRtO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5hY3Rpb25zID0ge307XG4gICAgICAgIHRoaXMuc3RvcmVzICA9IHt9O1xuICAgICAgICB0aGlzLnN0YXRlICAgPSB7fTtcbiAgICAgICAgdGhpcy5kYXRhICAgID0ge307XG4gICAgICAgIFxuICAgICAgICB0aGlzLnBhcmVudCAgICAgICA9IHBhcmVudDtcbiAgICAgICAgdGhpcy5fICAgICAgICAgICAgPSBfO1xuICAgICAgICB0aGlzLl9hdXRvRGVzdHJveSA9IGF1dG9EZXN0cm95O1xuICAgICAgICBcbiAgICAgICAgaWYgKCBwYXJlbnQgJiYgcGFyZW50LmRlYWQgKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2FuJ3QgdXNlIGEgZGVhZCBzY29wZSBhcyBwYXJlbnQgIVwiKTtcbiAgICAgICAgXG4gICAgICAgIF9fcHJvdG9fX3B1c2godGhpcywgJ2FjdGlvbnMnLCBwYXJlbnQpO1xuICAgICAgICBfX3Byb3RvX19wdXNoKHRoaXMsICdzdG9yZXMnLCBwYXJlbnQpO1xuICAgICAgICBfX3Byb3RvX19wdXNoKHRoaXMsICdzdGF0ZScsIHBhcmVudCk7XG4gICAgICAgIF9fcHJvdG9fX3B1c2godGhpcywgJ2RhdGEnLCBwYXJlbnQpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5zb3VyY2VzICAgICAgPSBbXTtcbiAgICAgICAgXy5jaGlsZFNjb3BlcyAgICAgPSBbXTtcbiAgICAgICAgXy5jaGlsZFNjb3Blc0xpc3QgPSBbXTtcbiAgICAgICAgXy51blN0YWJsZUNoaWxkcyAgPSAwO1xuICAgICAgICBfLnNlZW5DaGlsZHMgICAgICA9IDA7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9fcmV0YWlucyA9IHsgYWxsOiAwIH07XG4gICAgICAgIHRoaXMuX19sb2NrcyAgID0geyBhbGw6IDEgfTtcbiAgICAgICAgXG4gICAgICAgIC8vXy5zbmFwc2hvdCAgICAgICAgPSBzbmFwc2hvdDtcbiAgICAgICAgLy9fLnNuYXBzaG90ICAgICAgICA9IHNuYXBzaG90O1xuICAgICAgICBfLl9ib3VuZGVkQWN0aW9ucyA9IGlzLmFycmF5KGJvdW5kZWRBY3Rpb25zKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8geyB0ZXN0OiBib3VuZGVkQWN0aW9ucy5pbmNsdWRlcy5iaW5kKGJvdW5kZWRBY3Rpb25zKSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBib3VuZGVkQWN0aW9ucztcbiAgICAgICAgXy5fbGlzdGVuaW5nICAgICAgPSB7fTtcbiAgICAgICAgXy5fc2NvcGUgICAgICAgICAgPSB7fTtcbiAgICAgICAgXy5fbWl4ZWQgICAgICAgICAgPSBbXTtcbiAgICAgICAgXy5fbWl4ZWRMaXN0ICAgICAgPSBbXTtcbiAgICAgICAgXy5mb2xsb3dlcnMgICAgICAgPSBbXTtcbiAgICAgICAgaWYgKCBwYXJlbnQgKSB7XG4gICAgICAgICAgICBwYXJlbnQucmV0YWluKFwiaXNNeVBhcmVudFwiKTtcbiAgICAgICAgICAgIGlmICggIXJvb3RFbWl0dGVyICkge1xuICAgICAgICAgICAgICAgICFwYXJlbnQuX3N0YWJsZSAmJiB0aGlzLndhaXQoXCJ3YWl0aW5nUGFyZW50XCIpO1xuICAgICAgICAgICAgICAgIHBhcmVudC5vbihfLl9wYXJlbnRMaXN0ID0ge1xuICAgICAgICAgICAgICAgICAgICAnc3RhYmxlJyAgOiBzID0+IHRoaXMucmVsZWFzZShcIndhaXRpbmdQYXJlbnRcIiksXG4gICAgICAgICAgICAgICAgICAgICd1bnN0YWJsZSc6IHMgPT4gdGhpcy53YWl0KFwid2FpdGluZ1BhcmVudFwiKSxcbiAgICAgICAgICAgICAgICAgICAgJ3VwZGF0ZScgIDogcyA9PiB0aGlzLl9wcm9wYWcoKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcGFyZW50Lm9uKF8uX3BhcmVudExpc3QgPSB7XG4gICAgICAgICAgICAgICAgICAgICd1cGRhdGUnOiBzID0+IHRoaXMuX3Byb3BhZygpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyB0aGlzLnJlZ2lzdGVyKHBhcmVudC5fX3Njb3BlLCBzdGF0ZSwgZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICB0aGlzLnJlZ2lzdGVyKHN0b3Jlc01hcCwgc3RhdGUsIGRhdGEpO1xuICAgICAgICB0aGlzLl9fbG9ja3MuYWxsLS07XG4gICAgICAgIHRoaXMuX3N0YWJsZSA9ICF0aGlzLl9fbG9ja3MuYWxsO1xuICAgICAgICBcbiAgICAgICAgaWYgKCBwYXJlbnQgKSB7XG4gICAgICAgICAgICBwYXJlbnQuX2FkZENoaWxkKHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0aGlzLnJlc3RvcmUoc25hcHNob3QpO1xuICAgICAgICBcbiAgICAgICAgaWYgKCBhdXRvRGVzdHJveSApXG4gICAgICAgICAgICBzZXRUaW1lb3V0KFxuICAgICAgICAgICAgICAgIHRtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXRhaW4oXCJhdXRvRGVzdHJveVwiKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNwb3NlKFwiYXV0b0Rlc3Ryb3lcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKVxuICAgICAgICBcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBNb3VudCB0aGUgc3RvcmVzIGluIHN0b3Jlc0xpc3QsIGluIHRoaXMgc2NvcGUgb3IgaW4gaXRzIHBhcmVudHMgb3IgbWl4ZWQgc2NvcGVzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc3RvcmVzTGlzdCB7c3RyaW5nfHN0b3JlUmVmfSBTdG9yZSBuYW1lLCBBcnJheSBvZiBTdG9yZSBuYW1lcywgb3IgUmVzY29wZVxuICAgICAqICAgICBzdG9yZSByZWYgZnJvbSBTdG9yZTo6YXMgb3IgU3RvcmU6YXNcbiAgICAgKiBAcGFyYW0gc3RhdGVcbiAgICAgKiBAcGFyYW0gZGF0YVxuICAgICAqIEByZXR1cm5zIHtTY29wZX1cbiAgICAgKi9cbiAgICBtb3VudCggc3RvcmVzTGlzdCwgc25hcHNob3QsIHN0YXRlLCBkYXRhICkge1xuICAgICAgICBpZiAoIGlzLmFycmF5KHN0b3Jlc0xpc3QpICkge1xuICAgICAgICAgICAgc3RvcmVzTGlzdC5mb3JFYWNoKGsgPT4gdGhpcy5fbW91bnQoaywgc25hcHNob3QsIHN0YXRlLCBkYXRhKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9tb3VudCguLi5hcmd1bWVudHMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBcbiAgICBfbW91bnQoIGlkLCBzbmFwc2hvdCwgc3RhdGUsIGRhdGEgKSB7XG4gICAgICAgIGxldCByZWYsIHNuYXA7XG4gICAgICAgIFxuICAgICAgICByZWYgPSB0aGlzLnBhcnNlUmVmKGlkKVxuICAgICAgICBcbiAgICAgICAgaWYgKCBpZCA9PSBcIiRwYXJlbnRcIiApIHJldHVybjtcbiAgICAgICAgaWYgKCAhdGhpcy5fLl9zY29wZVsgcmVmLnN0b3JlSWQgXSApIHsvL2FzayBtaXhlZCB8fCBwYXJlbnRcbiAgICAgICAgICAgIGlmICggdGhpcy5fLl9taXhlZC5yZWR1Y2UoKCBtb3VudGVkLCBjdHggKSA9PiAoIG1vdW50ZWQgfHwgY3R4Ll9tb3VudChpZCwgc25hcHNob3QsIHN0YXRlLCBkYXRhKSApLCBmYWxzZSkgfHxcbiAgICAgICAgICAgICAgICAgIXRoaXMucGFyZW50IClcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJlbnQuX21vdW50KC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsZXQgc3RvcmUgPSB0aGlzLl8uX3Njb3BlWyByZWYuc3RvcmVJZCBdLCB0YXNrUXVldWUgPSBbXTtcbiAgICAgICAgICAgIGlmICggaXMucnNTdG9yZShzdG9yZS5wcm90b3R5cGUpICkge1xuICAgICAgICAgICAgICAgIHRoaXMuXy5fc2NvcGVbIHJlZi5zdG9yZUlkIF0gPSBuZXcgc3RvcmUodGhpcywge1xuICAgICAgICAgICAgICAgICAgICAvL3NuYXBzaG90LFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiByZWYuc3RvcmVJZCxcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUsXG4gICAgICAgICAgICAgICAgICAgIGRhdGFcbiAgICAgICAgICAgICAgICB9LCB0YXNrUXVldWUpO1xuICAgICAgICAgICAgICAgIHdoaWxlICggdGFza1F1ZXVlLmxlbmd0aCApIHRhc2tRdWV1ZS5zaGlmdCgpKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICggaXMucnNTY29wZShzdG9yZS5wcm90b3R5cGUpICkge1xuICAgICAgICAgICAgICAgIHN0b3JlID0gdGhpcy5fLl9zY29wZVsgcmVmLnN0b3JlSWQgXSA9IG5ldyBzdG9yZSh7ICRwYXJlbnQ6IHRoaXMgfSwge1xuICAgICAgICAgICAgICAgICAgICBpZDogdGhpcy5faWQgKyAnLycgKyByZWYuc3RvcmVJZCxcbiAgICAgICAgICAgICAgICAgICAgLy9hdXRvRGVzdHJveTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAvL3BhcmVudDogdGhpc1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIC8vdGhpcy5fLl9zY29wZVsgcmVmLnN0b3JlSWQgXS5yZXRhaW4oXCJzY29wZWRDaGlsZFNjb3BlXCIpO1xuICAgICAgICAgICAgICAgIC8vdGhpcy5fd2F0Y2hTdG9yZShyZWYuc3RvcmVJZCk7XG4gICAgICAgICAgICAgICAgaWYgKCByZWYucGF0aC5sZW5ndGggPiAxIClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fLl9zY29wZVsgcmVmLnN0b3JlSWQgXS5tb3VudChyZWYucGF0aC5zbGljZSgxKS5qb2luKCcuJyksIHNuYXBzaG90LCBzdGF0ZSwgZGF0YSlcbiAgICAgICAgICAgICAgICAvL2Vsc2UgcmV0dXJuIHRoaXMuXy5fc2NvcGVbIHJlZi5zdG9yZUlkIF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL2lmICggc25hcHNob3QgJiYgaXMucnNTY29wZShzdG9yZSkgJiYgKCBzbmFwID0ga2V5V2Fsa25HZXQoc25hcHNob3QsXG4gICAgICAgICAgICAvLyBzdG9yZS5faWQpICkgJiYgc25hcFsgJy8nIF0gKSB7IHJldHVybiBzdG9yZS5tb3VudChPYmplY3Qua2V5cyhzbmFwWyAnLydcbiAgICAgICAgICAgIC8vIF0pKSB9IGVsc2UgaWYgKCBzbmFwc2hvdCAmJiBpcy5yc1N0b3JlKHN0b3JlKSApIHN0b3JlLnJlc3RvcmUoKTtcbiAgICAgICAgICAgIGlmICggaXMucnNTdG9yZShzdG9yZSkgKSB7XG4gICAgICAgICAgICAgICAgaWYgKCBzdGF0ZSAhPT0gdW5kZWZpbmVkICYmIGRhdGEgPT09IHVuZGVmaW5lZCApXG4gICAgICAgICAgICAgICAgICAgIHN0b3JlLnNldFN0YXRlKHN0YXRlKTtcbiAgICAgICAgICAgICAgICBlbHNlIGlmICggc3RhdGUgIT09IHVuZGVmaW5lZCApXG4gICAgICAgICAgICAgICAgICAgIHN0b3JlLnN0YXRlID0gc3RhdGU7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKCBkYXRhICE9PSB1bmRlZmluZWQgKVxuICAgICAgICAgICAgICAgICAgICBzdG9yZS5wdXNoKGRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fd2F0Y2hTdG9yZShyZWYuc3RvcmVJZCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICByZXR1cm4gdGhpcy5fLl9zY29wZVsgcmVmLnN0b3JlSWQgXTtcbiAgICB9XG4gICAgXG4gICAgX3dhdGNoU3RvcmUoIGlkLCBzdGF0ZSwgZGF0YSApIHtcbiAgICAgICAgaWYgKCAhdGhpcy5fLl9saXN0ZW5pbmdbIGlkIF0gJiYgIWlzLmZuKHRoaXMuXy5fc2NvcGVbIGlkIF0pICkge1xuICAgICAgICAgICAgLy9pZiAoIGlzLnJzU3RvcmUodGhpcy5fLl9zY29wZVsgaWQgXSkgKSB7XG4gICAgICAgICAgICAhdGhpcy5fLl9zY29wZVsgaWQgXS5fYXV0b0Rlc3Ryb3kgJiYgdGhpcy5fLl9zY29wZVsgaWQgXS5yZXRhaW4oXCJzY29wZWRcIik7XG4gICAgICAgICAgICAhdGhpcy5fLl9zY29wZVsgaWQgXS5pc1N0YWJsZSgpICYmIHRoaXMud2FpdChpZCk7XG4gICAgICAgICAgICB0aGlzLl8uX3Njb3BlWyBpZCBdLm9uKFxuICAgICAgICAgICAgICAgIHRoaXMuXy5fbGlzdGVuaW5nWyBpZCBdID0ge1xuICAgICAgICAgICAgICAgICAgICAnZGVzdHJveScgOiBzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl8uX2xpc3RlbmluZ1sgaWQgXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuXy5fc2NvcGVbIGlkIF0gPSB0aGlzLl8uX3Njb3BlWyBpZCBdLmNvbnN0cnVjdG9yO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAndXBkYXRlJyAgOiBzID0+IHRoaXMucHJvcGFnKCksXG4gICAgICAgICAgICAgICAgICAgICdzdGFibGUnICA6IHMgPT4gdGhpcy5yZWxlYXNlKGlkKSxcbiAgICAgICAgICAgICAgICAgICAgJ3Vuc3RhYmxlJzogcyA9PiB0aGlzLndhaXQoaWQpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIE1peCB0YXJnZXRDdHggb24gdGhpcyBzY29wZVxuICAgICAqIE1peGVkIHNjb3BlIHBhcmVudHMgYXJlIE5PVCBtYXBwZWRcbiAgICAgKiBAcGFyYW0gdGFyZ2V0Q3R4XG4gICAgICovXG4gICAgbWl4aW4oIHRhcmdldEN0eCApIHtcbiAgICAgICAgbGV0IHBhcmVudCA9IHRoaXMucGFyZW50LCBsaXN0cztcbiAgICAgICAgdGhpcy5fLl9taXhlZC5wdXNoKHRhcmdldEN0eClcbiAgICAgICAgdGFyZ2V0Q3R4LnJldGFpbihcIm1peGVkVG9cIik7XG4gICAgICAgIGlmICggIXRhcmdldEN0eC5fc3RhYmxlIClcbiAgICAgICAgICAgIHRoaXMud2FpdCh0YXJnZXRDdHguX2lkKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuXy5fbWl4ZWRMaXN0LnB1c2gobGlzdHMgPSB7XG4gICAgICAgICAgICAnc3RhYmxlJyAgOiBzID0+IHRoaXMucmVsZWFzZSh0YXJnZXRDdHguX2lkKSxcbiAgICAgICAgICAgICd1bnN0YWJsZSc6IHMgPT4gdGhpcy53YWl0KHRhcmdldEN0eC5faWQpLFxuICAgICAgICAgICAgJ3VwZGF0ZScgIDogcyA9PiB0aGlzLl9wcm9wYWcoKVxuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuYWN0aW9ucyA9IHt9O1xuICAgICAgICB0aGlzLnN0b3JlcyAgPSB7fTtcbiAgICAgICAgdGhpcy5zdGF0ZSAgID0ge307XG4gICAgICAgIHRoaXMuZGF0YSAgICA9IHt9O1xuICAgICAgICB0YXJnZXRDdHgub24obGlzdHMpO1xuICAgICAgICBfX3Byb3RvX19wdXNoKHRoaXMsICdhY3Rpb25zJywgcGFyZW50KTtcbiAgICAgICAgX19wcm90b19fcHVzaCh0aGlzLCAnc3RvcmVzJywgcGFyZW50KTtcbiAgICAgICAgX19wcm90b19fcHVzaCh0aGlzLCAnc3RhdGUnLCBwYXJlbnQpO1xuICAgICAgICBfX3Byb3RvX19wdXNoKHRoaXMsICdkYXRhJywgcGFyZW50KTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMucmVsaW5rKHRoaXMuXy5fc2NvcGUsIHRoaXMsIGZhbHNlLCB0cnVlKTtcbiAgICAgICAgdGhpcy5fLl9taXhlZC5mb3JFYWNoKFxuICAgICAgICAgICAgY3R4ID0+IHtcbiAgICAgICAgICAgICAgICBfX3Byb3RvX19wdXNoKHRoaXMsICdhY3Rpb25zJyk7XG4gICAgICAgICAgICAgICAgX19wcm90b19fcHVzaCh0aGlzLCAnc3RvcmVzJyk7XG4gICAgICAgICAgICAgICAgX19wcm90b19fcHVzaCh0aGlzLCAnc3RhdGUnKTtcbiAgICAgICAgICAgICAgICBfX3Byb3RvX19wdXNoKHRoaXMsICdkYXRhJyk7XG4gICAgICAgICAgICAgICAgY3R4LnJlbGluayhjdHguXy5fc2NvcGUsIHRoaXMsIHRydWUsIHRydWUpXG4gICAgICAgICAgICB9XG4gICAgICAgIClcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogUmVnaXN0ZXIgc3RvcmVzIGluIHN0b3Jlc01hcCAmIGxpbmsgdGhlbSBpbiB0aGUgcHJvdG9zXG4gICAgICogQHBhcmFtIHN0b3Jlc01hcFxuICAgICAqIEBwYXJhbSBzdGF0ZVxuICAgICAqIEBwYXJhbSBkYXRhXG4gICAgICovXG4gICAgcmVnaXN0ZXIoIHN0b3Jlc01hcCwgc3RhdGUgPSB7fSwgZGF0YSA9IHt9ICkge1xuICAgICAgICB0aGlzLnJlbGluayhzdG9yZXNNYXAsIHRoaXMsIGZhbHNlLCBmYWxzZSk7XG4gICAgICAgIE9iamVjdC5rZXlzKHN0b3Jlc01hcCkuZm9yRWFjaChcbiAgICAgICAgICAgIGlkID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIGlkID09IFwiJHBhcmVudFwiICkgcmV0dXJuO1xuICAgICAgICAgICAgICAgIGlmICggc3RvcmVzTWFwWyBpZCBdLnNpbmdsZXRvbiB8fCAoIGlzLmZuKHN0b3Jlc01hcFsgaWQgXSkgJiYgKCBzdGF0ZVsgaWQgXSB8fCBkYXRhWyBpZCBdICkgKSApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbW91bnQoaWQsIHVuZGVmaW5lZCwgc3RhdGVbIGlkIF0sIGRhdGFbIGlkIF0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKCBzdGF0ZVsgaWQgXSB8fCBkYXRhWyBpZCBdICkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIGRhdGFbIGlkIF0gKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIHN0YXRlWyBpZCBdIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3Jlc1sgaWQgXS5zdGF0ZSA9IHN0YXRlWyBpZCBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9yZXNbIGlkIF0ucHVzaChkYXRhWyBpZCBdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICggc3RhdGVbIGlkIF0gKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3Jlc1sgaWQgXS5zZXRTdGF0ZShzdGF0ZVsgaWQgXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3dhdGNoU3RvcmUoaWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgICAgICBcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogTWFwIHNyY0N0eCBzdG9yZSdzIG9uIHRhcmdldEN0eCBoZWFkZXJzIHByb3RvJ3NcbiAgICAgKiBAcGFyYW0gc3JjQ3R4XG4gICAgICogQHBhcmFtIHRhcmdldEN0eFxuICAgICAqIEBwYXJhbSBzdGF0ZVxuICAgICAqIEBwYXJhbSBkYXRhXG4gICAgICovXG4gICAgcmVsaW5rKCBzcmNDdHgsIHRhcmdldEN0eCA9IHRoaXMsIGV4dGVybmFsLCBmb3JjZSApIHtcbiAgICAgICAgbGV0IGxjdHggPSB0YXJnZXRDdHguXy5zdG9yZXMucHJvdG90eXBlO1xuICAgICAgICBPYmplY3Qua2V5cyhzcmNDdHgpXG4gICAgICAgICAgICAgIC5mb3JFYWNoKFxuICAgICAgICAgICAgICAgICAgaWQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGlmICggIWZvcmNlICYmIHRhcmdldEN0eC5fLl9zY29wZVsgaWQgXSA9PT0gc3JjQ3R4WyBpZCBdIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRDdHguXy5fc2NvcGVbIGlkIF0gJiYgKCB0YXJnZXRDdHguXy5fc2NvcGVbIGlkIF0uY29uc3RydWN0b3IgPT09IHNyY0N0eFsgaWQgXSApIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgIGlmICggIWZvcmNlICYmIHRhcmdldEN0eC5fLl9zY29wZVsgaWQgXSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCAhZXh0ZXJuYWwgJiYgIWlzLmZuKHRhcmdldEN0eC5fLl9zY29wZVsgaWQgXSkgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmluZm8oXCJSZXNjb3BlIFN0b3JlIDogXCIsIGlkLCBcIiBhbHJlYWR5IGV4aXN0IGluIHRoaXMgc2NvcGUgISAoIEhvdCBzd2l0Y2hpbmcgdGhlIHN0b3JlIClcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdG1wICAgICAgICAgICAgICAgICAgPSB0YXJnZXRDdHguXy5fc2NvcGVbIGlkIF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRDdHguXy5fc2NvcGVbIGlkIF0gPSB0YXJnZXRDdHguXy5fc2NvcGVbIGlkIF0uY29uc3RydWN0b3I7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9tb3VudChpZCwgbnVsbCwgdG1wLnN0YXRlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRtcC5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3RhcmdldEN0eC5fLl9zY29wZVsgaWQgXS5fX3Byb3RvX18gPSB0bXAuX19wcm90b19fO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmICggIWV4dGVybmFsICYmIGlzLmZuKHRhcmdldEN0eC5fLl9zY29wZVsgaWQgXSkgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0Q3R4Ll8uX3Njb3BlWyBpZCBdID0gc3JjQ3R4WyBpZCBdO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICggIWZvcmNlICYmICFleHRlcm5hbCApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuXy5fc2NvcGVbIGlkIF0gPSBzcmNDdHhbIGlkIF07XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBsY3R4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW51bWVyYWJsZSAgOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0ICAgICAgICAgOiAoKSA9PiB0aGlzLl8uX3Njb3BlWyBpZCBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgIGlmICggaWQgPT0gXCIkcGFyZW50XCIgKSByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRDdHguXy5zdGF0ZS5wcm90b3R5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnVtZXJhYmxlICA6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXQgICAgICAgICA6ICgpID0+ICggdGhpcy5fLl9zY29wZVsgaWQgXSAmJiB0aGlzLl8uX3Njb3BlWyBpZCBdLnN0YXRlICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXQgICAgICAgICA6ICggdiApID0+ICggdGhpcy5fbW91bnQoaWQsIHVuZGVmaW5lZCwgdikgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldEN0eC5fLmRhdGEucHJvdG90eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW51bWVyYWJsZSAgOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0ICAgICAgICAgOiAoKSA9PiAoIHRoaXMuXy5fc2NvcGVbIGlkIF0gJiYgdGhpcy5fLl9zY29wZVsgaWQgXS5kYXRhICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXQgICAgICAgICA6ICggdiApID0+ICggdGhpcy5fbW91bnQoaWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB2KSApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgIGxldCBhY3Rpb25zICAgICAgID0gc3JjQ3R4WyBpZCBdIGluc3RhbmNlb2YgU2NvcGUuU3RvcmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gc3JjQ3R4WyBpZCBdLmNvbnN0cnVjdG9yLmFjdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogc3JjQ3R4WyBpZCBdLmFjdGlvbnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZUFjdGlvbnMgPSB0YXJnZXRDdHguXy5hY3Rpb25zLnByb3RvdHlwZTtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoIGlzLnJzU2NvcGUodGhpcy5fLl9zY29wZVsgaWQgXS5wcm90b3R5cGUpIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbW91bnQoaWQpO1xuICAgICAgICAgICAgICAgICAgICAgIGlmICggaXMucnNTY29wZSh0aGlzLl8uX3Njb3BlWyBpZCBdKSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlQWN0aW9uc1sgaWQgXSA9IHRoaXMuXy5fc2NvcGVbIGlkIF0uYWN0aW9ucztcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKCAhaXMucnNTdG9yZSh0aGlzLl8uX3Njb3BlWyBpZCBdKSAmJiAhaXMucnNTdG9yZSh0aGlzLl8uX3Njb3BlWyBpZCBdLnByb3RvdHlwZSkgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgYWN0aW9ucyAmJlxuICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKGFjdGlvbnMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZvckVhY2goXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICggYWN0ICkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBhY3RpdmVBY3Rpb25zLmhhc093blByb3BlcnR5KGFjdCkgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZUFjdGlvbnNbIGFjdCBdLl9fdGFyZ2V0U3RvcmVzKys7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVBY3Rpb25zWyBhY3QgXSAgICAgICAgICAgICAgICA9IHRoaXMuZGlzcGF0Y2guYmluZCh0aGlzLCBhY3QpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZUFjdGlvbnNbIGFjdCBdLl9fdGFyZ2V0U3RvcmVzID0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgKVxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBCaW5kIHN0b3JlcyBmcm9tIHRoaXMgc2NvcGUsIGhpcyBwYXJlbnRzIGFuZCBtaXhlZCBzY29wZVxuICAgICAqXG4gICAgICogQHBhcmFtIG9iaiB7UmVhY3QuQ29tcG9uZW50fFN0b3JlfGZ1bmN0aW9ufVxuICAgICAqIEBwYXJhbSBrZXkge3N0cmluZ30gc3RvcmVzIGtleXMgdG8gYmluZCB1cGRhdGVzXG4gICAgICogQHBhcmFtIGFzXG4gICAgICogQHBhcmFtIHNldEluaXRpYWwge2Jvb2x9IGZhbHNlIHRvIG5vdCBwcm9wYWcgaW5pdGlhbCB2YWx1ZSAoZGVmYXVsdCA6IHRydWUpXG4gICAgICovXG4gICAgYmluZCggb2JqLCBrZXksIGFzLCBzZXRJbml0aWFsID0gdHJ1ZSApIHtcbiAgICAgICAgbGV0IGxhc3RSZXZzLCBkYXRhLCByZWZLZXlzO1xuICAgICAgICBpZiAoIGtleSAmJiAhaXMuYXJyYXkoa2V5KSApXG4gICAgICAgICAgICBrZXkgPSBbIGtleSBdO1xuICAgICAgICBcbiAgICAgICAgaWYgKCBhcyA9PT0gZmFsc2UgfHwgYXMgPT09IHRydWUgKSB7XG4gICAgICAgICAgICBzZXRJbml0aWFsID0gYXM7XG4gICAgICAgICAgICBhcyAgICAgICAgID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmVmS2V5cyA9IGtleVxuICAgICAgICAgICAgLm1hcChpZCA9PiAoIGlzLnN0cmluZyhpZCkgPyBpZCA6IGlkLm5hbWUgKSlcbiAgICAgICAgICAgIC5tYXAoaWQgPT4gKCB0aGlzLnBhcnNlUmVmKGlkKSApKTtcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICB0aGlzLl8uZm9sbG93ZXJzLnB1c2goXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgb2JqLFxuICAgICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgICBhcyB8fCB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgbGFzdFJldnMgPSByZWZLZXlzLnJlZHVjZSgoIHJldnMsIHJlZiApID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV2c1sgcmVmLnN0b3JlSWQgXSA9IHJldnNbIHJlZi5zdG9yZUlkIF0gfHwge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV2IDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZnM6IFtdXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIHJldnNbIHJlZi5zdG9yZUlkIF0ucmVmcy5wdXNoKHJlZik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXZzO1xuICAgICAgICAgICAgICAgIH0sIHt9KVxuICAgICAgICAgICAgXSk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLm1vdW50KGtleSk7XG4gICAgICAgIHRoaXMucmV0YWluU3RvcmVzKE9iamVjdC5rZXlzKGxhc3RSZXZzKSwgJ2xpc3RlbmVycycpO1xuICAgICAgICBcbiAgICAgICAgaWYgKCBzZXRJbml0aWFsICYmIHRoaXMuX3N0YWJsZSApIHtcbiAgICAgICAgICAgIGRhdGEgPSB0aGlzLmdldFVwZGF0ZXMobGFzdFJldnMpO1xuICAgICAgICAgICAgaWYgKCAhZGF0YSApIHJldHVybjtcbiAgICAgICAgICAgIGlmICggdHlwZW9mIG9iaiAhPSBcImZ1bmN0aW9uXCIgKSB7XG4gICAgICAgICAgICAgICAgaWYgKCBhcyApIG9iai5zZXRTdGF0ZSh7IFsgYXMgXTogZGF0YSB9KTtcbiAgICAgICAgICAgICAgICBlbHNlIG9iai5zZXRTdGF0ZShkYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIG9iaihkYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogVW4gYmluZCB0aGlzIHNjb3BlIG9mZiB0aGUgZ2l2ZW4gY29tcG9uZW50LWtleXNcbiAgICAgKiBAcGFyYW0gb2JqXG4gICAgICogQHBhcmFtIGtleVxuICAgICAqIEByZXR1cm5zIHtBcnJheS48Kj59XG4gICAgICovXG4gICAgdW5CaW5kKCBvYmosIGtleSwgYXMgKSB7XG4gICAgICAgIHZhciBmb2xsb3dlcnMgPSB0aGlzLl8uZm9sbG93ZXJzLFxuICAgICAgICAgICAgaSAgICAgICAgID0gZm9sbG93ZXJzICYmIGZvbGxvd2Vycy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggZm9sbG93ZXJzICYmIGktLSApXG4gICAgICAgICAgICBpZiAoIGZvbGxvd2Vyc1sgaSBdWyAwIF0gPT09IG9iaiAmJiAoICcnICsgZm9sbG93ZXJzWyBpIF1bIDEgXSApID09ICggJycgKyBrZXkgKSAmJlxuICAgICAgICAgICAgICAgICBmb2xsb3dlcnNbIGkgXVsgMiBdID09IGFzICkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGlzcG9zZVN0b3JlcyhPYmplY3Qua2V5cyhmb2xsb3dlcnNbIGkgXVsgMyBdKSwgJ2xpc3RlbmVycycpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmb2xsb3dlcnMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBNb3VudCB0aGUgc3RvcmVzIGluIHN0b3Jlc0xpc3QgZnJvbSB0aGlzIHNjb3BlLCBpdHMgcGFyZW50cyBhbmQgbWl4ZWQgc2NvcGVcbiAgICAgKiBCaW5kIHRoZW0gdG8gJ3RvJ1xuICAgICAqIEhvb2sgJ3RvJyBzbyBpdCB3aWxsIGF1dG8gdW5iaW5kIG9uICdkZXN0cm95JyBvciAnY29tcG9uZW50V2lsbFVubW91bnQnXG4gICAgICogQHBhcmFtIHRvXG4gICAgICogQHBhcmFtIHN0b3Jlc0xpc3RcbiAgICAgKiBAcGFyYW0gYmluZFxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IEluaXRpYWwgb3V0cHV0cyBvZiB0aGUgc3RvcmVzIGluICdzdG9yZXNMaXN0J1xuICAgICAqL1xuICAgIG1hcCggdG8sIHN0b3Jlc0xpc3QsIGJpbmQgPSB0cnVlICkge1xuICAgICAgICBsZXQgU3RvcmUgICA9IHRoaXMuY29uc3RydWN0b3IuU3RvcmU7XG4gICAgICAgIHN0b3Jlc0xpc3QgID0gaXMuYXJyYXkoc3RvcmVzTGlzdCkgPyBzdG9yZXNMaXN0IDogWyBzdG9yZXNMaXN0IF07XG4gICAgICAgIGxldCByZWZMaXN0ID0gc3RvcmVzTGlzdC5tYXAodGhpcy5wYXJzZVJlZik7XG4gICAgICAgIHRoaXMubW91bnQoc3RvcmVzTGlzdCk7XG4gICAgICAgIGlmICggYmluZCAmJiB0byBpbnN0YW5jZW9mIFN0b3JlICkge1xuICAgICAgICAgICAgU3RvcmUubWFwKHRvLCBzdG9yZXNMaXN0LCB0aGlzLCB0aGlzLCBmYWxzZSlcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICggYmluZCApIHtcbiAgICAgICAgICAgIHRoaXMuYmluZCh0bywgc3RvcmVzTGlzdCwgdW5kZWZpbmVkLCBmYWxzZSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGxldCBtaXhlZENXVW5tb3VudCxcbiAgICAgICAgICAgICAgICB1bk1vdW50S2V5ID0gdG8uaXNSZWFjdENvbXBvbmVudCA/IFwiY29tcG9uZW50V2lsbFVubW91bnRcIiA6IFwiZGVzdHJveVwiO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoIHRvLmhhc093blByb3BlcnR5KHVuTW91bnRLZXkpICkge1xuICAgICAgICAgICAgICAgIG1peGVkQ1dVbm1vdW50ID0gdG9bIHVuTW91bnRLZXkgXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdG9bIHVuTW91bnRLZXkgXSA9ICggLi4uYXJneiApID0+IHtcbiAgICAgICAgICAgICAgICBkZWxldGUgdG9bIHVuTW91bnRLZXkgXTtcbiAgICAgICAgICAgICAgICBpZiAoIG1peGVkQ1dVbm1vdW50IClcbiAgICAgICAgICAgICAgICAgICAgdG9bIHVuTW91bnRLZXkgXSA9IG1peGVkQ1dVbm1vdW50O1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHRoaXMudW5CaW5kKHRvLCBzdG9yZXNMaXN0KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdG9bIHVuTW91bnRLZXkgXSAmJiB0b1sgdW5Nb3VudEtleSBdKC4uLmFyZ3opO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlZkxpc3QucmVkdWNlKCggZGF0YSwgcmVmICkgPT4ge1xuICAgICAgICAgICAgd2Fsa25TZXQoZGF0YSwgcmVmLmFsaWFzIHx8IHJlZi5wYXRoLCB0aGlzLnJldHJpZXZlKHJlZi5wYXRoKSlcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9LCB7fSk7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIEdldCBjdXJyZW50IGRhdGEgdmFsdWUgZnJvbSBqc29uIHBhdGhcbiAgICAgKiBAcGFyYW0gcGF0aFxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd8Kn1cbiAgICAgKi9cbiAgICByZXRyaWV2ZSggcGF0aCA9IFwiXCIgKSB7XG4gICAgICAgIHBhdGggPSBpcy5zdHJpbmcocGF0aCkgPyBwYXRoLnNwbGl0KCcuJykgOiBwYXRoO1xuICAgICAgICByZXR1cm4gcGF0aCAmJlxuICAgICAgICAgICAgICAgdGhpcy5zdG9yZXNbIHBhdGhbIDAgXSBdICYmXG4gICAgICAgICAgICAgICB0aGlzLnN0b3Jlc1sgcGF0aFsgMCBdIF0ucmV0cmlldmUgJiZcbiAgICAgICAgICAgICAgIHRoaXMuc3RvcmVzWyBwYXRoWyAwIF0gXS5yZXRyaWV2ZShwYXRoLnNsaWNlKDEpKTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogR2V0IGN1cnJlbnQgc3RvcmUgZnJvbSBqc29uIHBhdGhcbiAgICAgKiBAcGFyYW0gcGF0aFxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd8Kn1cbiAgICAgKi9cbiAgICByZXRyaWV2ZVN0b3JlKCBwYXRoID0gXCJcIiApIHtcbiAgICAgICAgcGF0aCA9IGlzLnN0cmluZyhwYXRoKSA/IHBhdGguc3BsaXQoJy4nKSA6IHBhdGg7XG4gICAgICAgIHJldHVybiBwYXRoXG4gICAgICAgICAgICAgICAmJiBwYXRoLmxlbmd0aFxuICAgICAgICAgICAgICAgJiYgKFxuICAgICAgICAgICAgICAgcGF0aC5sZW5ndGggIT0gMSAmJiB0aGlzLnN0b3Jlc1sgcGF0aFsgMCBdIF0ucmV0cmlldmVTdG9yZVxuICAgICAgICAgICAgICAgPyB0aGlzLnN0b3Jlc1sgcGF0aFsgMCBdIF0ucmV0cmlldmVTdG9yZShwYXRoLnNsaWNlKDEpKVxuICAgICAgICAgICAgICAgOiBwYXRoLmxlbmd0aCA9PSAxICYmIHRoaXMuc3RvcmVzWyBwYXRoWyAwIF0gXVxuICAgICAgICAgICAgICAgKTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogR2V0IG9yIHVwZGF0ZSBzdG9yZXNSZXZNYXAncyByZXZpc2lvbnNcbiAgICAgKiBAcGFyYW0gc3RvcmVzUmV2TWFwXG4gICAgICogQHBhcmFtIGxvY2FsXG4gICAgICogQHJldHVybnMge3t9fVxuICAgICAqL1xuICAgIGdldFN0b3Jlc1JldnMoIHN0b3Jlc1Jldk1hcCA9IHt9LCBsb2NhbCApIHtcbiAgICAgICAgbGV0IGN0eCA9IHRoaXMuXy5fc2NvcGU7XG4gICAgICAgIGlmICggIXN0b3Jlc1Jldk1hcCApIHtcbiAgICAgICAgICAgIHN0b3Jlc1Jldk1hcCA9IHt9O1xuICAgICAgICB9XG4gICAgICAgIE9iamVjdC5rZXlzKGN0eCkuZm9yRWFjaChcbiAgICAgICAgICAgIGlkID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIGlkID09IFwiJHBhcmVudFwiICkgcmV0dXJuO1xuICAgICAgICAgICAgICAgIGlmICggIWlzLmZuKGN0eFsgaWQgXSlcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgc3RvcmVzUmV2TWFwWyBpZCBdID0gY3R4WyBpZCBdLl9yZXY7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKCAhc3RvcmVzUmV2TWFwLmhhc093blByb3BlcnR5KGlkKSApXG4gICAgICAgICAgICAgICAgICAgIHN0b3Jlc1Jldk1hcFsgaWQgXSA9IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIGlmICggIWxvY2FsICkge1xuICAgICAgICAgICAgdGhpcy5fLl9taXhlZC5yZWR1Y2UoKCB1cGRhdGVkLCBjdHggKSA9PiAoIGN0eC5nZXRTdG9yZXNSZXZzKHN0b3Jlc1Jldk1hcCksIHN0b3Jlc1Jldk1hcCApLCBzdG9yZXNSZXZNYXApO1xuICAgICAgICAgICAgdGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuZ2V0U3RvcmVzUmV2cyhzdG9yZXNSZXZNYXApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdG9yZXNSZXZNYXA7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIEdldCB1cGRhdGVkIG91dHB1dCBiYXNpbmcgc3RvcmVzUmV2TWFwJ3MgcmV2aXNpb25zLlxuICAgICAqIElmIGEgc3RvcmUgaW4gJ3N0b3Jlc1Jldk1hcCcgd2FzIHVwZGF0ZWQ7IGFkZCBpdCB0byAnb3V0cHV0JyAmIHVwZGF0ZSBzdG9yZXNSZXZNYXBcbiAgICAgKiBAcGFyYW0gc3RvcmVzUmV2TWFwXG4gICAgICogQHBhcmFtIG91dHB1dFxuICAgICAqIEBwYXJhbSB1cGRhdGVkXG4gICAgICogQHJldHVybnMgeyp8e319XG4gICAgICovXG4gICAgZ2V0UmVmc1VwZGF0ZXMoIHJlZnMsIHJldk1hcCwgb3V0cHV0ICkge1xuICAgICAgICBcbiAgICAgICAgcmV2TWFwID0gcmV2TWFwIHx8IHJlZnNcbiAgICAgICAgICAgIC5tYXAoaWQgPT4gKCBpcy5zdHJpbmcoaWQpID8gaWQgOiBpZC5uYW1lICkpXG4gICAgICAgICAgICAubWFwKGlkID0+ICggdGhpcy5wYXJzZVJlZihpZCkgKSlcbiAgICAgICAgICAgIC5yZWR1Y2UoKCByZXZzLCByZWYgKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV2c1sgcmVmLnN0b3JlSWQgXSA9IHJldnNbIHJlZi5zdG9yZUlkIF0gfHwge1xuICAgICAgICAgICAgICAgICAgICByZXYgOiAwLFxuICAgICAgICAgICAgICAgICAgICByZWZzOiBbXVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgcmV2c1sgcmVmLnN0b3JlSWQgXS5yZWZzLnB1c2gocmVmKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmV2cztcbiAgICAgICAgICAgIH0sIHt9KTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiB0aGlzLmdldFVwZGF0ZXMocmV2TWFwLCBvdXRwdXQpXG4gICAgICAgIFxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBHZXQgb3IgdXBkYXRlIG91dHB1dCBiYXNpbmcgc3RvcmVzUmV2TWFwJ3MgcmV2aXNpb25zLlxuICAgICAqIElmIGEgc3RvcmUgaW4gJ3N0b3Jlc1Jldk1hcCcgd2FzIHVwZGF0ZWQ7IGFkZCBpdCB0byAnb3V0cHV0JyAmIHVwZGF0ZSBzdG9yZXNSZXZNYXBcbiAgICAgKiBAcGFyYW0gc3RvcmVzUmV2TWFwXG4gICAgICogQHBhcmFtIG91dHB1dFxuICAgICAqIEBwYXJhbSB1cGRhdGVkXG4gICAgICogQHJldHVybnMgeyp8e319XG4gICAgICovXG4gICAgZ2V0VXBkYXRlcyggc3RvcmVzUmV2TWFwLCBvdXRwdXQsIHVwZGF0ZWQgKSB7XG4gICAgICAgIGxldCBjdHggPSB0aGlzLl8uX3Njb3BlO1xuICAgICAgICBcbiAgICAgICAgb3V0cHV0ID0gb3V0cHV0IHx8IHt9O1xuICAgICAgICBPYmplY3Qua2V5cyhjdHgpLmZvckVhY2goXG4gICAgICAgICAgICBpZCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCBpZCA9PSBcIiRwYXJlbnRcIiApIHJldHVybjtcbiAgICAgICAgICAgICAgICBpZiAoICFvdXRwdXQuaGFzT3duUHJvcGVydHkoaWQpICYmICFpcy5mbihjdHhbIGlkIF0pXG4gICAgICAgICAgICAgICAgICAgICAmJiAoICFzdG9yZXNSZXZNYXBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfHwgKCBzdG9yZXNSZXZNYXAuaGFzT3duUHJvcGVydHkoaWQpICYmIHN0b3Jlc1Jldk1hcFsgaWQgXSA9PT0gdW5kZWZpbmVkIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfHwgISggIXN0b3Jlc1Jldk1hcC5oYXNPd25Qcm9wZXJ0eShpZCkgfHwgY3R4WyBpZCBdLl9yZXYgPD0gc3RvcmVzUmV2TWFwWyBpZCBdLnJldiApIClcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZWQgICAgICA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIG91dHB1dFsgaWQgXSA9IHRoaXMuZGF0YVsgaWQgXTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGlmICggc3RvcmVzUmV2TWFwICYmIHN0b3Jlc1Jldk1hcC5oYXNPd25Qcm9wZXJ0eShpZCkgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9yZXNSZXZNYXBbIGlkIF0gICAgID0gc3RvcmVzUmV2TWFwWyBpZCBdIHx8IHsgcmV2OiAwLCByZWZzOiBbXSB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmVzUmV2TWFwWyBpZCBdLnJldiA9IGN0eFsgaWQgXS5fcmV2O1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmVzUmV2TWFwWyBpZCBdLnJlZnMuZm9yRWFjaChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWYgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUud2FybihcInVwZGF0ZSByZWYgXCIsIHJlZi5yZWYsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMucmV0cmlldmUocmVmLnBhdGgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0WyByZWYuYWxpYXMgXSA9IHRoaXMucmV0cmlldmUocmVmLnBhdGgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS53YXJuKFwidXBkYXRlIFwiLCBpZCwgdGhpcy5kYXRhW2lkXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXRbIGlkIF0gPSB0aGlzLmRhdGFbIGlkIF07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICB1cGRhdGVkID0gdGhpcy5fLl9taXhlZC5yZWR1Y2UoKCB1cGRhdGVkLCBjdHggKSA9PiAoIGN0eC5nZXRVcGRhdGVzKHN0b3Jlc1Jldk1hcCwgb3V0cHV0LCB1cGRhdGVkKSB8fCB1cGRhdGVkICksIHVwZGF0ZWQpO1xuICAgICAgICB1cGRhdGVkID0gdGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuZ2V0VXBkYXRlcyhzdG9yZXNSZXZNYXAsIG91dHB1dCwgdXBkYXRlZCkgfHwgdXBkYXRlZDtcbiAgICAgICAgcmV0dXJuIHVwZGF0ZWQgJiYgb3V0cHV0O1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBSZWN1cnNpdmVseSBnZXQgYWxsIGNoaWxkIHNjb3Blc1xuICAgICAqIEBwYXJhbSBjaGlsZHNcbiAgICAgKiBAcmV0dXJucyB7QXJyYXl9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfZ2V0QWxsQ2hpbGRzKCBjaGlsZHMgPSBbXSApIHtcbiAgICAgICAgY2hpbGRzLnB1c2goLi4udGhpcy5fLmNoaWxkU2NvcGVzKTtcbiAgICAgICAgdGhpcy5fLmNoaWxkU2NvcGVzLmZvckVhY2goXG4gICAgICAgICAgICBjdHggPT4ge1xuICAgICAgICAgICAgICAgIGN0eC5fZ2V0QWxsQ2hpbGRzKGNoaWxkcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiBjaGlsZHM7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIFNlcmlhbGl6ZSBhbGwgYWN0aXZlIHN0b3JlcyBzdGF0ZSAmIGRhdGEgaW4gZXZlcnkgY2hpbGRzICYgbWl4ZWQgc2NvcGVzXG4gICAgICpcbiAgICAgKiBTY29wZXMgd2l0aG91dCBrZXkgb3IgaWQgYXJlIGlnbm9yZWRcbiAgICAgKiBAcGFyYW0gb3V0cHV0XG4gICAgICogQHJldHVybnMge3t9fVxuICAgICAqL1xuICAgIHNlcmlhbGl6ZSggY2ZnID0ge30sIG91dHB1dCA9IHt9ICkge1xuICAgICAgICBsZXQgY3R4ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA9IHRoaXMuXy5fc2NvcGUsXG4gICAgICAgICAgICB7IGFsaWFzLCB3aXRoQ2hpbGRzID0gdHJ1ZSwgd2l0aFBhcmVudHMsIHdpdGhNaXhlZCA9IHRydWUsIG5vcmVmcyB9ID0gY2ZnO1xuICAgICAgICBcbiAgICAgICAgaWYgKCBrZXlXYWxrbkdldChvdXRwdXQsIHRoaXMuX2lkKSApXG4gICAgICAgICAgICByZXR1cm4gb3V0cHV0O1xuICAgICAgICBcbiAgICAgICAgLy9AdG9kbyA6IGJldHRlciBzZXJpYWxpemUgbWV0aG9kXG4gICAgICAgIGtleVdhbGtuU2V0KG91dHB1dCwgdGhpcy5faWQsIHt9KTtcbiAgICAgICAgXG4gICAgICAgIE9iamVjdC5rZXlzKGN0eCkuZm9yRWFjaChcbiAgICAgICAgICAgIGlkID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIGlkID09IFwiJHBhcmVudFwiIHx8IGlzLmZuKGN0eFsgaWQgXSkgKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY3R4WyBpZCBdLnNlcmlhbGl6ZShjZmcsIG91dHB1dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIClcbiAgICAgICAgXG4gICAgICAgIHdpdGhQYXJlbnRzICYmIHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LnNlcmlhbGl6ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aENoaWxkICA6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpdGhQYXJlbnRzOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpdGhNaXhlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JlZnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIG91dHB1dCk7XG4gICAgICAgIFxuICAgICAgICB3aXRoQ2hpbGRzICYmIHRoaXMuXy5jaGlsZFNjb3Blcy5mb3JFYWNoKFxuICAgICAgICAgICAgY3R4ID0+IHtcbiAgICAgICAgICAgICAgICAhY3R4Ll8uaXNMb2NhbElkICYmIGN0eC5zZXJpYWxpemUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aENoaWxkICA6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRoUGFyZW50czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRoTWl4ZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JlZnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgb3V0cHV0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgXG4gICAgICAgIHdpdGhNaXhlZCAmJiB0aGlzLl8uX21peGVkLmZvckVhY2goXG4gICAgICAgICAgICBjdHggPT4ge1xuICAgICAgICAgICAgICAgICFjdHguXy5pc0xvY2FsSWQgJiYgY3R4LnNlcmlhbGl6ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRoQ2hpbGQgIDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRoUGFyZW50czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRoTWl4ZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JlZnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgb3V0cHV0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgXG4gICAgICAgIGlmICggYWxpYXMgKSB7XG4gICAgICAgICAgICBvdXRwdXQgPSBPYmplY3Qua2V5cyhvdXRwdXQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAucmVkdWNlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICggaCwgayApID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaFsgay5zdGFydHNXaXRoKGFsaWFzKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGFsaWFzICsgay5zdWJzdHIoYWxpYXMubGVuZ3RoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGsgXSA9IG91dHB1dFsgayBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb3V0cHV0O1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBSZXN0b3JlIHN0YXRlICYgZGF0YSBmcm9tIHRoZSBzZXJpYWxpemUgZm5cbiAgICAgKiBAcGFyYW0gc25hcHNob3RcbiAgICAgKiBAcGFyYW0gZm9yY2VcbiAgICAgKi9cbiAgICByZXN0b3JlKCBzbmFwc2hvdCwgY2ZnID0ge30sIGZvcmNlID0gaXMuYm9vbChjZmcpICYmIGNmZyApIHtcbiAgICAgICAgbGV0IGN0eCAgPSB0aGlzLl8uX3Njb3BlLCBzbmFwO1xuICAgICAgICBzbmFwc2hvdCA9IHNuYXBzaG90XG4gICAgICAgICAgICAgICAgICAgJiYga2V5V2Fsa25HZXQoc25hcHNob3QsIHRoaXMuX2lkKVxuICAgICAgICAgICAgICAgICAgIHx8IHRoaXMudGFrZVNuYXBzaG90QnlLZXkodGhpcy5faWQpO1xuICAgICAgICBcbiAgICAgICAgaWYgKCAhc25hcHNob3QgKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fLnNuYXBzaG90ID0gc25hcHNob3Q7XG4gICAgICAgIFxuICAgICAgICBzbmFwID0gc25hcHNob3RbICcvJyBdO1xuICAgICAgICBcbiAgICAgICAgc25hcCAmJiBPYmplY3Qua2V5cyhzbmFwKS5mb3JFYWNoKFxuICAgICAgICAgICAgbmFtZSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCBuYW1lID09IFwiJHBhcmVudFwiICkgcmV0dXJuO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmICggY3R4WyBuYW1lIF0gKSB7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpZiAoIGZvcmNlICYmICFpcy5mbihjdHhbIG5hbWUgXSkgKVxuICAgICAgICAgICAgICAgICAgICAgICAgY3R4WyBuYW1lIF0uZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbW91bnQobmFtZSk7Ly8gcXVpZXRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIClcbiAgICAgICAgXG4gICAgICAgIHRoaXMuXy5fbWl4ZWQuZm9yRWFjaChcbiAgICAgICAgICAgIGN0eCA9PiB7XG4gICAgICAgICAgICAgICAgIWN0eC5fLmlzTG9jYWxJZCAmJiBjdHgucmVzdG9yZSh1bmRlZmluZWQsIGZvcmNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuXy5jaGlsZFNjb3Blcy5mb3JFYWNoKFxuICAgICAgICAgICAgY3R4ID0+IHtcbiAgICAgICAgICAgICAgICAhY3R4Ll8uaXNMb2NhbElkICYmIGN0eC5yZXN0b3JlKHVuZGVmaW5lZCwgZm9yY2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICBcbiAgICB9XG4gICAgXG4gICAgZ2V0U25hcHNob3RCeUtleSgga2V5LCBsb2NhbCApIHtcbiAgICAgICAgLy8gb25seSBoYXZlIHRoZSBsb2NhbCBzbmFwXG4gICAgICAgIGlmICggdGhpcy5fLnNuYXBzaG90ICYmIGtleS5zdGFydHNXaXRoKHRoaXMuX2lkKSApIHtcbiAgICAgICAgICAgIGxldCBvYmogPSBrZXlXYWxrbkdldCh0aGlzLl8uc25hcHNob3QsIGtleS5zdWJzdHIodGhpcy5faWQubGVuZ3RoKSlcbiAgICAgICAgICAgIC8vaWYgKCBvYmogKSB7XG4gICAgICAgICAgICAvLyAgICB0aGlzLmRlbGV0ZVNuYXBzaG90QnlLZXkoa2V5KTtcbiAgICAgICAgICAgIC8vfVxuICAgICAgICAgICAgcmV0dXJuIG9iajtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHJldHVybiAhbG9jYWxcbiAgICAgICAgICAgICAgICAgICAgJiYgdGhpcy5wYXJlbnRcbiAgICAgICAgICAgICAgICAgICAgJiYgdGhpcy5wYXJlbnQuZ2V0U25hcHNob3RCeUtleShrZXkpXG4gICAgICAgICAgICAgICAgICAgIHx8XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcmVzLiRwYXJlbnRcbiAgICAgICAgICAgICAgICAgICAgJiYgdGhpcy5zdG9yZXMuJHBhcmVudC5nZXRTbmFwc2hvdEJ5S2V5KGtleSk7XG4gICAgICAgIFxuICAgIH1cbiAgICBcbiAgICBnZXRTbmFwc2hvdEJ5S2V5RXh0KCBzbmFwc2hvdCwga2V5LCBsb2NhbCApIHtcbiAgICAgICAgLy8gb25seSBoYXZlIHRoZSBsb2NhbCBzbmFwXG4gICAgICAgIGlmICggc25hcHNob3QgKSB7XG4gICAgICAgICAgICBsZXQgb2JqID0ga2V5V2Fsa25HZXQoc25hcHNob3QsIGtleSlcbiAgICAgICAgICAgIHJldHVybiBvYmo7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxuICAgIFxuICAgIHRha2VTbmFwc2hvdEJ5S2V5KCBrZXksIGxvY2FsICkge1xuICAgICAgICBpZiAoIHRoaXMuXy5zbmFwc2hvdCAmJiBrZXkuc3RhcnRzV2l0aCh0aGlzLl9pZCkgKSB7XG4gICAgICAgICAgICBsZXQgb2JqID0ga2V5V2Fsa25HZXQodGhpcy5fLnNuYXBzaG90LCBrZXkuc3Vic3RyKHRoaXMuX2lkLmxlbmd0aCkpXG4gICAgICAgICAgICBpZiAoIG9iaiApIHtcbiAgICAgICAgICAgICAgICAvL3RoaXMuZGVsZXRlU25hcHNob3RCeUtleShrZXksIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG9iajtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHJldHVybiAhbG9jYWxcbiAgICAgICAgICAgICAgICAgICAgJiYgdGhpcy5wYXJlbnRcbiAgICAgICAgICAgICAgICAgICAgJiYgdGhpcy5wYXJlbnQudGFrZVNuYXBzaG90QnlLZXkoa2V5KVxuICAgICAgICAgICAgICAgICAgICB8fFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3Jlcy4kcGFyZW50XG4gICAgICAgICAgICAgICAgICAgICYmIHRoaXMuc3RvcmVzLiRwYXJlbnQudGFrZVNuYXBzaG90QnlLZXkoa2V5KTtcbiAgICB9XG4gICAgXG4gICAgZGVsZXRlU25hcHNob3RCeUtleSgga2V5LCBsb2NhbCApIHtcbiAgICAgICAgaWYgKCB0aGlzLl8uc25hcHNob3QgJiYga2V5LnN0YXJ0c1dpdGgodGhpcy5faWQpICkge1xuICAgICAgICAgICAgbGV0IG9iaiA9IGtleVdhbGtuR2V0KHRoaXMuXy5zbmFwc2hvdCwga2V5LnN1YnN0cih0aGlzLl9pZC5sZW5ndGgpLnJlcGxhY2UoL14oLipbXFw+fFxcL10pW15cXD58XFwvXSskL2lnLCAnJDEnKSlcbiAgICAgICAgICAgIGlmICggb2JqIClcbiAgICAgICAgICAgICAgICBkZWxldGUgb2JqWyBrZXkucmVwbGFjZSgvXi4qW1xcPnxcXC9dKFteXFw+fFxcL10rKSQvaWcsICckMScpIF1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gIWxvY2FsXG4gICAgICAgICAgICAgICAmJiB0aGlzLnBhcmVudFxuICAgICAgICAgICAgICAgJiYgdGhpcy5wYXJlbnQuZGVsZXRlU25hcHNob3RCeUtleShrZXkpXG4gICAgICAgICAgICAgICB8fFxuICAgICAgICAgICAgICAgdGhpcy5zdG9yZXMuJHBhcmVudFxuICAgICAgICAgICAgICAgJiYgdGhpcy5zdG9yZXMuJHBhcmVudC5kZWxldGVTbmFwc2hvdEJ5S2V5KGtleSk7XG4gICAgfVxuICAgIFxuICAgIHNldFN0YXRlKCBwU3RhdGUgKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKHBTdGF0ZSlcbiAgICAgICAgICAgICAgLmZvckVhY2goayA9PiAoIHRoaXMuc3RhdGVbIGsgXSA9IHBTdGF0ZVsgayBdICkpXG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIGdldCBhIHBhcnNlZCByZWZlcmVuY2VcbiAgICAgKiBAcGFyYW0gX3JlZlxuICAgICAqIEByZXR1cm5zIHt7c3RvcmVJZCwgcGF0aCwgYWxpYXM6ICosIHJlZjogKn19XG4gICAgICovXG4gICAgcGFyc2VSZWYoIF9yZWYgKSB7XG4gICAgICAgIGlmICggdHlwZW9mIF9yZWYgIT09ICdzdHJpbmcnICkge1xuICAgICAgICAgICAgdGhpcy5yZWdpc3Rlcih7IFsgX3JlZi5uYW1lIF06IF9yZWYuc3RvcmUgfSk7XG4gICAgICAgICAgICBfcmVmID0gX3JlZi5uYW1lO1xuICAgICAgICB9XG4gICAgICAgIGxldCByZWYgID0gX3JlZi5zcGxpdCgnOicpO1xuICAgICAgICByZWZbIDAgXSA9IHJlZlsgMCBdLnNwbGl0KCcuJyk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzdG9yZUlkOiByZWZbIDAgXVsgMCBdLFxuICAgICAgICAgICAgcGF0aCAgIDogcmVmWyAwIF0sXG4gICAgICAgICAgICBhbGlhcyAgOiByZWZbIDEgXSB8fCByZWZbIDAgXVsgcmVmWyAwIF0ubGVuZ3RoIC0gMSBdLFxuICAgICAgICAgICAgcmVmICAgIDogX3JlZlxuICAgICAgICB9O1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBEaXNwYXRjaCBhbiBhY3Rpb24gdG8gdGhlIHRvcCBwYXJlbnQgJiBtaXhlZCBzY29wZXMsIGluIGFsbCBzdG9yZXNcbiAgICAgKlxuICAgICAqIEBwYXJhbSBhY3Rpb25cbiAgICAgKiBAcGFyYW0gZGF0YVxuICAgICAqIEByZXR1cm5zIHtTY29wZX1cbiAgICAgKi9cbiAgICBkaXNwYXRjaCggYWN0aW9uLCAuLi5hcmd6ICkge1xuICAgICAgICBpZiAoIHRoaXMuZGVhZCApIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcIkRpc3BhdGNoIHdhcyBjYWxsZWQgb24gYSBkZWFkIHNjb3BlLCBjaGVjayB5b3UncmUgYXN5bmMgZnVuY3Rpb25zIGluIHRoaXMgc3RhY2suLi5cIiwgKCBuZXcgRXJyb3IoKSApLnN0YWNrKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgYkFjdHMgPSB0aGlzLl8uX2JvdW5kZWRBY3Rpb25zO1xuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLl8uX3Njb3BlKVxuICAgICAgICAgICAgICAuZm9yRWFjaChcbiAgICAgICAgICAgICAgICAgIGlkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoIGlkID09IFwiJHBhcmVudFwiICkgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgIGlmICggIWlzLmZuKHRoaXMuXy5fc2NvcGVbIGlkIF0pIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fLl9zY29wZVsgaWQgXS50cmlnZ2VyKGFjdGlvbiwgLi4uYXJneik7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICk7XG4gICAgICAgIFxuICAgICAgICBpZiAoIGJBY3RzICYmIGJBY3RzLnRlc3QoYWN0aW9uKSApXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIFxuICAgICAgICB0aGlzLl8uX21peGVkLmZvckVhY2goKCBjdHggKSA9PiAoIGN0eC5kaXNwYXRjaChhY3Rpb24sIC4uLmFyZ3opICkpO1xuICAgICAgICB0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC5kaXNwYXRjaChhY3Rpb24sIC4uLmFyZ3opO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgXG4gICAgLy9cbiAgICB0cmlnZ2VyKCkge1xuICAgICAgICB0aGlzLmRpc3BhdGNoKC4uLmFyZ3VtZW50cyk7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIG9uY2UoJ3N0YWJsZScsIGNiKVxuICAgICAqIEBwYXJhbSBvYmoge1JlYWN0LkNvbXBvbmVudHxTdG9yZXxmdW5jdGlvbilcbiAgICAgKiBAcGFyYW0ga2V5IHtzdHJpbmd9IG9wdGlvbmFsIGtleSB3aGVyZSB0byBtYXAgdGhlIHB1YmxpYyBzdGF0ZVxuICAgICAqL1xuICAgIHRoZW4oIGNiICkge1xuICAgICAgICBpZiAoIHRoaXMuX3N0YWJsZSApXG4gICAgICAgICAgICByZXR1cm4gY2IodGhpcy5kYXRhKTtcbiAgICAgICAgdGhpcy5vbmNlKCdzdGFibGUnLCBlID0+IGNiKHRoaXMuZGF0YSkpO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBDYWxsIHJldGFpbiBvbiB0aGUgc2NvcGVkIHN0b3JlcyBiYXNpbmcgZ2l2ZW5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBzdG9yZXNcbiAgICAgKiBAcGFyYW0gcmVhc29uXG4gICAgICovXG4gICAgcmV0YWluU3RvcmVzKCBzdG9yZXMgPSBbXSwgcmVhc29uICkge1xuICAgICAgICBzdG9yZXMuZm9yRWFjaChcbiAgICAgICAgICAgIGlkID0+ICggdGhpcy5zdG9yZXNbIGlkIF0gJiYgdGhpcy5zdG9yZXNbIGlkIF0ucmV0YWluICYmIHRoaXMuc3RvcmVzWyBpZCBdLnJldGFpbihyZWFzb24pIClcbiAgICAgICAgKVxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBDYWxsIHJldGFpbiBvbiB0aGUgc2NvcGVkIHN0b3Jlc1xuICAgICAqXG4gICAgICogQHBhcmFtIHN0b3Jlc1xuICAgICAqIEBwYXJhbSByZWFzb25cbiAgICAgKi9cbiAgICBkaXNwb3NlU3RvcmVzKCBzdG9yZXMgPSBbXSwgcmVhc29uICkge1xuICAgICAgICBzdG9yZXMuZm9yRWFjaChcbiAgICAgICAgICAgIGlkID0+ICggdGhpcy5zdG9yZXNbIGlkIF0gJiYgdGhpcy5zdG9yZXNbIGlkIF0uZGlzcG9zZSAmJiB0aGlzLnN0b3Jlc1sgaWQgXS5kaXNwb3NlKHJlYXNvbikgKVxuICAgICAgICApXG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIEtlZXAgdGhlIHNjb3BlIHVuc3RhYmxlIHVudGlsIHJlbGVhc2UgaXMgY2FsbGVkXG4gICAgICogQHBhcmFtIHJlYXNvblxuICAgICAqL1xuICAgIHdhaXQoIHJlYXNvbiApIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcIndhaXRcIiwgcmVhc29uKTtcbiAgICAgICAgdGhpcy5fc3RhYmxlICYmICF0aGlzLl9fbG9ja3MuYWxsICYmIHRoaXMuZW1pdChcInVuc3RhYmxlXCIsIHRoaXMpO1xuICAgICAgICB0aGlzLl9zdGFibGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fX2xvY2tzLmFsbCsrO1xuICAgICAgICBpZiAoIHJlYXNvbiApIHtcbiAgICAgICAgICAgIHRoaXMuX19sb2Nrc1sgcmVhc29uIF0gPSB0aGlzLl9fbG9ja3NbIHJlYXNvbiBdIHx8IDA7XG4gICAgICAgICAgICB0aGlzLl9fbG9ja3NbIHJlYXNvbiBdKys7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgXG4gICAgLyoqXG4gICAgICogU3RhYmlsaXplIHRoZSBzY29wZSBpZiBubyBtb3JlIGxvY2tzIHJlbWFpbiAod2FpdCBmbilcbiAgICAgKiBAcGFyYW0gcmVhc29uXG4gICAgICovXG4gICAgcmVsZWFzZSggcmVhc29uICkge1xuICAgICAgICBcbiAgICAgICAgaWYgKCByZWFzb24gKSB7XG4gICAgICAgICAgICBpZiAoIHRoaXMuX19sb2Nrc1sgcmVhc29uIF0gPT0gMCApXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlJlbGVhc2UgbW9yZSB0aGFuIGxvY2tpbmcgIVwiLCByZWFzb24pO1xuICAgICAgICAgICAgdGhpcy5fX2xvY2tzWyByZWFzb24gXSA9IHRoaXMuX19sb2Nrc1sgcmVhc29uIF0gfHwgMDtcbiAgICAgICAgICAgIHRoaXMuX19sb2Nrc1sgcmVhc29uIF0tLTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoICFyZWFzb24gJiYgdGhpcy5fX2xvY2tzLmFsbCA9PSAwIClcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJSZWxlYXNlIG1vcmUgdGhhbiBsb2NraW5nICFcIik7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9fbG9ja3MuYWxsLS07XG4gICAgICAgIGlmICggIXRoaXMuX19sb2Nrcy5hbGwgKSB7XG4gICAgICAgICAgICB0aGlzLl8uc3RhYmlsaXplclRNICYmIGNsZWFyVGltZW91dCh0aGlzLl8uc3RhYmlsaXplclRNKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5fLnN0YWJpbGl6ZXJUTSA9IHNldFRpbWVvdXQoXG4gICAgICAgICAgICAgICAgZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuXy5zdGFiaWxpemVyVE0gPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIHRoaXMuX19sb2Nrcy5hbGwgKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fLnByb3BhZ1RNICYmIGNsZWFyVGltZW91dCh0aGlzLl8ucHJvcGFnVE0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9yZXYrKztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc3RhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KFwic3RhYmxlXCIsIHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgIXRoaXMuZGVhZCAmJiB0aGlzLl9wcm9wYWcoKTsvLyBzdGFiaWxpdHkgY2FuIGluZHVjZSBkZXN0cm95XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogUHJvcGFnIHN0b3JlcyB1cGRhdGVzIGJhc2luZyB0aGVpcnMgbGFzdCB1cGRhdGVzXG4gICAgICovXG4gICAgcHJvcGFnKCkge1xuICAgICAgICB0aGlzLl8ucHJvcGFnVE0gJiYgY2xlYXJUaW1lb3V0KHRoaXMuXy5wcm9wYWdUTSk7XG4gICAgICAgIHRoaXMuXy5wcm9wYWdUTSA9IHNldFRpbWVvdXQoXG4gICAgICAgICAgICBlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLl8ucHJvcGFnVE0gPSBudWxsO1xuICAgICAgICAgICAgICAgIHRoaXMuX3Byb3BhZygpXG4gICAgICAgICAgICB9LCAyXG4gICAgICAgICk7XG4gICAgfVxuICAgIFxuICAgIF9wcm9wYWcoKSB7XG4gICAgICAgIGlmICggdGhpcy5fLmZvbGxvd2Vycy5sZW5ndGggKVxuICAgICAgICAgICAgdGhpcy5fLmZvbGxvd2Vycy5mb3JFYWNoKCggeyAwOiBvYmosIDE6IGtleSwgMjogYXMsIDM6IGxhc3RSZXZzLCAzOiByZW1hcHMgfSApID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHRoaXMuZ2V0VXBkYXRlcyhsYXN0UmV2cyk7XG4gICAgICAgICAgICAgICAgaWYgKCAhZGF0YSApIHJldHVybjtcbiAgICAgICAgICAgICAgICBpZiAoIHR5cGVvZiBvYmogIT0gXCJmdW5jdGlvblwiICkge1xuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwic2V0U3RhdGUgXCIsb2JqLCBPYmplY3Qua2V5cyhkYXRhKSlcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBhcyApIG9iai5zZXRTdGF0ZSh7IFsgYXMgXTogZGF0YSB9KTtcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBvYmouc2V0U3RhdGUoZGF0YSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBvYmooZGF0YSwgbGFzdFJldnMgJiYgWyAuLi5sYXN0UmV2cyBdIHx8IFwibm8gcmV2c1wiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gbGFzdFJldnMgJiZcbiAgICAgICAgICAgICAgICAvLyBrZXkuZm9yRWFjaChpZCA9PiAobGFzdFJldnNbaWRdID0gdGhpcy5zdG9yZXNbaWRdICYmXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5zdG9yZXNbaWRdLl9yZXYgfHwgMCkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZW1pdChcInVwZGF0ZVwiLCB0aGlzLmdldFVwZGF0ZXMoKSk7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIGlzIHN0YWJsZVxuICAgICAqIEByZXR1cm5zIGJvb2xcbiAgICAgKi9cbiAgICBpc1N0YWJsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0YWJsZTtcbiAgICB9XG4gICAgXG4gICAgX2FkZENoaWxkKCBjdHggKSB7XG4gICAgICAgIHRoaXMuXy5jaGlsZFNjb3Blcy5wdXNoKGN0eCk7XG4gICAgICAgIHRoaXMuXy5zZWVuQ2hpbGRzKys7XG4gICAgICAgIGxldCBsaXN0cyAgICAgPSB7XG4gICAgICAgICAgICAgICAgJ3N0YWJsZScgICAgICA6IHMgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl8udW5TdGFibGVDaGlsZHMtLTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCAhdGhpcy5fLnVuU3RhYmxlQ2hpbGRzIClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdChcInN0YWJsZVRyZWVcIiwgdGhpcylcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICd1bnN0YWJsZScgICAgOiBzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fLnVuU3RhYmxlQ2hpbGRzKys7XG4gICAgICAgICAgICAgICAgICAgIGlmICggMSA9PSB0aGlzLl8udW5TdGFibGVDaGlsZHMgKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KFwidW5zdGFibGVUcmVlXCIsIHRoaXMpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAnc3RhYmxlVHJlZScgIDogcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuXy51blN0YWJsZUNoaWxkcy0tO1xuICAgICAgICAgICAgICAgICAgICBpZiAoICF0aGlzLl8udW5TdGFibGVDaGlsZHMgKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KFwic3RhYmxlVHJlZVwiLCB0aGlzKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgJ3Vuc3RhYmxlVHJlZSc6IHMgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl8udW5TdGFibGVDaGlsZHMrKztcbiAgICAgICAgICAgICAgICAgICAgaWYgKCAxID09IHRoaXMuXy51blN0YWJsZUNoaWxkcyApXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXQoXCJ1bnN0YWJsZVRyZWVcIiwgdGhpcylcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICdkZXN0cm95JyAgICAgOiBjdHggPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIGN0eC5fLnVuU3RhYmxlQ2hpbGRzIClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuXy51blN0YWJsZUNoaWxkcy0tO1xuICAgICAgICAgICAgICAgICAgICBpZiAoICFjdHguaXNTdGFibGUoKSApXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl8udW5TdGFibGVDaGlsZHMtLTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYgKCAhdGhpcy5fLnVuU3RhYmxlQ2hpbGRzIClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdChcInN0YWJsZVRyZWVcIiwgdGhpcylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgd2FzU3RhYmxlID0gdGhpcy5fLnVuU3RhYmxlQ2hpbGRzO1xuICAgICAgICAvLyFjdHguaXNTdGFibGUoKSAmJiBjb25zb2xlLndhcm4oJ2FkZCB1bnN0YWJsZSBjaGlsZCcpO1xuICAgICAgICAhY3R4LmlzU3RhYmxlKCkgJiYgdGhpcy5fLnVuU3RhYmxlQ2hpbGRzKys7XG4gICAgICAgIGN0eC5fLnVuU3RhYmxlQ2hpbGRzICYmIHRoaXMuXy51blN0YWJsZUNoaWxkcysrO1xuICAgICAgICB0aGlzLl8uY2hpbGRTY29wZXNMaXN0LnB1c2gobGlzdHMpO1xuICAgICAgICBpZiAoICF3YXNTdGFibGUgJiYgdGhpcy5fLnVuU3RhYmxlQ2hpbGRzIClcbiAgICAgICAgICAgIHRoaXMuZW1pdChcInVuc3RhYmxlVHJlZVwiLCB0aGlzKVxuICAgICAgICBjdHgub24obGlzdHMpO1xuICAgIH1cbiAgICBcbiAgICBfcm1DaGlsZCggY3R4ICkge1xuICAgICAgICBsZXQgaSAgICAgICAgID0gdGhpcy5fLmNoaWxkU2NvcGVzLmluZGV4T2YoY3R4KSxcbiAgICAgICAgICAgIHdhc1N0YWJsZSA9IHRoaXMuXy51blN0YWJsZUNoaWxkcztcbiAgICAgICAgaWYgKCBpICE9IC0xICkge1xuICAgICAgICAgICAgdGhpcy5fLmNoaWxkU2NvcGVzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICFjdHguaXNTdGFibGUoKSAmJiB0aGlzLl8udW5TdGFibGVDaGlsZHMtLTtcbiAgICAgICAgICAgIGN0eC5fLnVuU3RhYmxlQ2hpbGRzICYmIHRoaXMuXy51blN0YWJsZUNoaWxkcy0tO1xuICAgICAgICAgICAgY3R4LnVuKHRoaXMuXy5jaGlsZFNjb3Blc0xpc3Quc3BsaWNlKGksIDEpWyAwIF0pO1xuICAgICAgICAgICAgaWYgKCB3YXNTdGFibGUgJiYgIXRoaXMuXy51blN0YWJsZUNoaWxkcyApXG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0KFwic3RhYmxlVHJlZVwiKVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIHJldGFpbiggcmVhc29uICkge1xuICAgICAgICB0aGlzLl9fcmV0YWlucy5hbGwrKztcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcInJldGFpblwiLCB0aGlzLl9pZCwgcmVhc29uKTtcbiAgICAgICAgaWYgKCByZWFzb24gKSB7XG4gICAgICAgICAgICB0aGlzLl9fcmV0YWluc1sgcmVhc29uIF0gPSB0aGlzLl9fcmV0YWluc1sgcmVhc29uIF0gfHwgMDtcbiAgICAgICAgICAgIHRoaXMuX19yZXRhaW5zWyByZWFzb24gXSsrO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGRpc3Bvc2UoIHJlYXNvbiApIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcImRpc3Bvc2VcIiwgdGhpcy5faWQsIHJlYXNvbik7XG4gICAgICAgIGlmICggcmVhc29uICkge1xuICAgICAgICAgICAgaWYgKCAhdGhpcy5fX3JldGFpbnNbIHJlYXNvbiBdIClcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJEaXNwb3NlIG1vcmUgdGhhbiByZXRhaW5pbmcgOiBcIiArIHJlYXNvbik7XG4gICAgICAgICAgICB0aGlzLl9fcmV0YWluc1sgcmVhc29uIF0tLTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKCAhdGhpcy5fX3JldGFpbnMuYWxsIClcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkRpc3Bvc2UgbW9yZSB0aGFuIHJldGFpbmluZyAhXCIpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fX3JldGFpbnMuYWxsLS07XG4gICAgICAgIFxuICAgICAgICBpZiAoICF0aGlzLl9fcmV0YWlucy5hbGwgKSB7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiZGlzcG9zZSBkbyBkZXN0cm95IFwiLCB0aGlzLl9pZCwgdGhpcy5fcGVyc2lzdGVuY2VUbSk7XG4gICAgICAgICAgICBpZiAoIHRoaXMuXy5wZXJzaXN0ZW5jZVRtICkge1xuICAgICAgICAgICAgICAgIHRoaXMuXy5kZXN0cm95VE0gJiYgY2xlYXJUaW1lb3V0KHRoaXMuXy5kZXN0cm95VE0pO1xuICAgICAgICAgICAgICAgIHRoaXMuXy5kZXN0cm95VE0gPSBzZXRUaW1lb3V0KFxuICAgICAgICAgICAgICAgICAgICBlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vdGhpcy50aGVuKHMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgIXRoaXMuX19yZXRhaW5zLmFsbCAmJiAhdGhpcy5kZWFkICYmIHRoaXMuZGVzdHJveSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAvL30pO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB0aGlzLl8ucGVyc2lzdGVuY2VUbVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvL3RoaXMudGhlbihzID0+XG4gICAgICAgICAgICAgICAgKCAhdGhpcy5fX3JldGFpbnMuYWxsICYmICF0aGlzLmRlYWQgJiYgdGhpcy5kZXN0cm95KCkgKVxuICAgICAgICAgICAgICAgIC8vKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBvcmRlciBkZXN0cm95IG9mIGxvY2FsIHN0b3Jlc1xuICAgICAqL1xuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIGxldCBjdHggPSB0aGlzLl8uX3Njb3BlO1xuICAgICAgICAvL2NvbnNvbGUud2FybihcImRlc3Ryb3lcIiwgdGhpcy5faWQpO1xuICAgICAgICB0aGlzLl8uc3RhYmlsaXplclRNICYmIGNsZWFyVGltZW91dCh0aGlzLl8uc3RhYmlsaXplclRNKTtcbiAgICAgICAgdGhpcy5fLnByb3BhZ1RNICYmIGNsZWFyVGltZW91dCh0aGlzLl8ucHJvcGFnVE0pO1xuICAgICAgICBPYmplY3Qua2V5cyhcbiAgICAgICAgICAgIHRoaXMuXy5fbGlzdGVuaW5nXG4gICAgICAgICkuZm9yRWFjaChcbiAgICAgICAgICAgIGlkID0+ICggKCBpZCAhPT0gXCIkcGFyZW50XCIgKSAmJiB0aGlzLl8uX3Njb3BlWyBpZCBdLnJlbW92ZUxpc3RlbmVyKHRoaXMuXy5fbGlzdGVuaW5nWyBpZCBdKSApXG4gICAgICAgICk7XG4gICAgICAgIHdoaWxlICggdGhpcy5fLl9taXhlZExpc3QubGVuZ3RoICkge1xuICAgICAgICAgICAgdGhpcy5fLl9taXhlZFsgMCBdLnJlbW92ZUxpc3RlbmVyKHRoaXMuXy5fbWl4ZWRMaXN0LnNoaWZ0KCkpO1xuICAgICAgICAgICAgdGhpcy5fLl9taXhlZC5zaGlmdCgpLmRpc3Bvc2UoXCJtaXhlZFRvXCIpO1xuICAgICAgICB9XG4gICAgICAgIFsgLi4udGhpcy5fLmZvbGxvd2VycyBdLm1hcChmb2xsb3dlciA9PiB0aGlzLnVuQmluZCguLi5mb2xsb3dlcikpO1xuICAgICAgICBmb3IgKCBsZXQga2V5IGluIGN0eCApXG4gICAgICAgICAgICBpZiAoICFpcy5mbihjdHhbIGtleSBdKSApIHtcbiAgICAgICAgICAgICAgICBpZiAoIGtleSA9PSBcIiRwYXJlbnRcIiApIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICFjdHhbIGtleSBdLl9hdXRvRGVzdHJveSAmJiBjdHhbIGtleSBdLmRpc3Bvc2UoXCJzY29wZWRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIGlmICggdGhpcy5fLl9wYXJlbnRMaXN0ICkge1xuICAgICAgICAgICAgdGhpcy5wYXJlbnQuX3JtQ2hpbGQodGhpcyk7XG4gICAgICAgICAgICB0aGlzLnBhcmVudC5yZW1vdmVMaXN0ZW5lcih0aGlzLl8uX3BhcmVudExpc3QpO1xuICAgICAgICAgICAgdGhpcy5wYXJlbnQuZGlzcG9zZShcImlzTXlQYXJlbnRcIik7XG4gICAgICAgICAgICB0aGlzLl8uX3BhcmVudExpc3QgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGVhZCA9IHRydWU7XG4gICAgICAgIHRoaXMuZW1pdChcImRlc3Ryb3lcIiwgdGhpcyk7XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgLy9pZiAoICF0aGlzLl8uaXNMb2NhbElkIClcbiAgICAgICAgZGVsZXRlIG9wZW5TY29wZXNbIHRoaXMuX2lkIF07XG4gICAgICAgIFxuICAgICAgICAvL3RoaXMuXyA9IG51bGw7XG4gICAgICAgIFxuICAgIH1cbn1cblxuXG5pcy5yc1Njb3BlID0gZnVuY3Rpb24gKCBvYmogKSB7XG4gICAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIFNjb3BlXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNjb3BlO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9TY29wZS5qcyIsInZhciBpcyA9IHJlcXVpcmUoJ2lzJyk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICAuLi5pc1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWxzL2lzLmpzIiwiLyogZ2xvYmFscyB3aW5kb3csIEhUTUxFbGVtZW50ICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqIVxuICogaXNcbiAqIHRoZSBkZWZpbml0aXZlIEphdmFTY3JpcHQgdHlwZSB0ZXN0aW5nIGxpYnJhcnlcbiAqXG4gKiBAY29weXJpZ2h0IDIwMTMtMjAxNCBFbnJpY28gTWFyaW5vIC8gSm9yZGFuIEhhcmJhbmRcbiAqIEBsaWNlbnNlIE1JVFxuICovXG5cbnZhciBvYmpQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG52YXIgb3ducyA9IG9ialByb3RvLmhhc093blByb3BlcnR5O1xudmFyIHRvU3RyID0gb2JqUHJvdG8udG9TdHJpbmc7XG52YXIgc3ltYm9sVmFsdWVPZjtcbmlmICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nKSB7XG4gIHN5bWJvbFZhbHVlT2YgPSBTeW1ib2wucHJvdG90eXBlLnZhbHVlT2Y7XG59XG52YXIgaXNBY3R1YWxOYU4gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9PSB2YWx1ZTtcbn07XG52YXIgTk9OX0hPU1RfVFlQRVMgPSB7XG4gICdib29sZWFuJzogMSxcbiAgbnVtYmVyOiAxLFxuICBzdHJpbmc6IDEsXG4gIHVuZGVmaW5lZDogMVxufTtcblxudmFyIGJhc2U2NFJlZ2V4ID0gL14oW0EtWmEtejAtOSsvXXs0fSkqKFtBLVphLXowLTkrL117NH18W0EtWmEtejAtOSsvXXszfT18W0EtWmEtejAtOSsvXXsyfT09KSQvO1xudmFyIGhleFJlZ2V4ID0gL15bQS1GYS1mMC05XSskLztcblxuLyoqXG4gKiBFeHBvc2UgYGlzYFxuICovXG5cbnZhciBpcyA9IHt9O1xuXG4vKipcbiAqIFRlc3QgZ2VuZXJhbC5cbiAqL1xuXG4vKipcbiAqIGlzLnR5cGVcbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBhIHR5cGUgb2YgYHR5cGVgLlxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIHR5cGVcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgYHZhbHVlYCBpcyBhIHR5cGUgb2YgYHR5cGVgLCBmYWxzZSBvdGhlcndpc2VcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuaXMuYSA9IGlzLnR5cGUgPSBmdW5jdGlvbiAodmFsdWUsIHR5cGUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gdHlwZTtcbn07XG5cbi8qKlxuICogaXMuZGVmaW5lZFxuICogVGVzdCBpZiBgdmFsdWVgIGlzIGRlZmluZWQuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiAndmFsdWUnIGlzIGRlZmluZWQsIGZhbHNlIG90aGVyd2lzZVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5pcy5kZWZpbmVkID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgIT09ICd1bmRlZmluZWQnO1xufTtcblxuLyoqXG4gKiBpcy5lbXB0eVxuICogVGVzdCBpZiBgdmFsdWVgIGlzIGVtcHR5LlxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgYHZhbHVlYCBpcyBlbXB0eSwgZmFsc2Ugb3RoZXJ3aXNlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmlzLmVtcHR5ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHZhciB0eXBlID0gdG9TdHIuY2FsbCh2YWx1ZSk7XG4gIHZhciBrZXk7XG5cbiAgaWYgKHR5cGUgPT09ICdbb2JqZWN0IEFycmF5XScgfHwgdHlwZSA9PT0gJ1tvYmplY3QgQXJndW1lbnRzXScgfHwgdHlwZSA9PT0gJ1tvYmplY3QgU3RyaW5nXScpIHtcbiAgICByZXR1cm4gdmFsdWUubGVuZ3RoID09PSAwO1xuICB9XG5cbiAgaWYgKHR5cGUgPT09ICdbb2JqZWN0IE9iamVjdF0nKSB7XG4gICAgZm9yIChrZXkgaW4gdmFsdWUpIHtcbiAgICAgIGlmIChvd25zLmNhbGwodmFsdWUsIGtleSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiAhdmFsdWU7XG59O1xuXG4vKipcbiAqIGlzLmVxdWFsXG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgZXF1YWwgdG8gYG90aGVyYC5cbiAqXG4gKiBAcGFyYW0ge01peGVkfSB2YWx1ZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcGFyYW0ge01peGVkfSBvdGhlciB2YWx1ZSB0byBjb21wYXJlIHdpdGhcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgYHZhbHVlYCBpcyBlcXVhbCB0byBgb3RoZXJgLCBmYWxzZSBvdGhlcndpc2VcbiAqL1xuXG5pcy5lcXVhbCA9IGZ1bmN0aW9uIGVxdWFsKHZhbHVlLCBvdGhlcikge1xuICBpZiAodmFsdWUgPT09IG90aGVyKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICB2YXIgdHlwZSA9IHRvU3RyLmNhbGwodmFsdWUpO1xuICB2YXIga2V5O1xuXG4gIGlmICh0eXBlICE9PSB0b1N0ci5jYWxsKG90aGVyKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmICh0eXBlID09PSAnW29iamVjdCBPYmplY3RdJykge1xuICAgIGZvciAoa2V5IGluIHZhbHVlKSB7XG4gICAgICBpZiAoIWlzLmVxdWFsKHZhbHVlW2tleV0sIG90aGVyW2tleV0pIHx8ICEoa2V5IGluIG90aGVyKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAoa2V5IGluIG90aGVyKSB7XG4gICAgICBpZiAoIWlzLmVxdWFsKHZhbHVlW2tleV0sIG90aGVyW2tleV0pIHx8ICEoa2V5IGluIHZhbHVlKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKHR5cGUgPT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICBrZXkgPSB2YWx1ZS5sZW5ndGg7XG4gICAgaWYgKGtleSAhPT0gb3RoZXIubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHdoaWxlIChrZXktLSkge1xuICAgICAgaWYgKCFpcy5lcXVhbCh2YWx1ZVtrZXldLCBvdGhlcltrZXldKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKHR5cGUgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXScpIHtcbiAgICByZXR1cm4gdmFsdWUucHJvdG90eXBlID09PSBvdGhlci5wcm90b3R5cGU7XG4gIH1cblxuICBpZiAodHlwZSA9PT0gJ1tvYmplY3QgRGF0ZV0nKSB7XG4gICAgcmV0dXJuIHZhbHVlLmdldFRpbWUoKSA9PT0gb3RoZXIuZ2V0VGltZSgpO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuLyoqXG4gKiBpcy5ob3N0ZWRcbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBob3N0ZWQgYnkgYGhvc3RgLlxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlIHRvIHRlc3RcbiAqIEBwYXJhbSB7TWl4ZWR9IGhvc3QgaG9zdCB0byB0ZXN0IHdpdGhcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgYHZhbHVlYCBpcyBob3N0ZWQgYnkgYGhvc3RgLCBmYWxzZSBvdGhlcndpc2VcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuaXMuaG9zdGVkID0gZnVuY3Rpb24gKHZhbHVlLCBob3N0KSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIGhvc3RbdmFsdWVdO1xuICByZXR1cm4gdHlwZSA9PT0gJ29iamVjdCcgPyAhIWhvc3RbdmFsdWVdIDogIU5PTl9IT1NUX1RZUEVTW3R5cGVdO1xufTtcblxuLyoqXG4gKiBpcy5pbnN0YW5jZVxuICogVGVzdCBpZiBgdmFsdWVgIGlzIGFuIGluc3RhbmNlIG9mIGBjb25zdHJ1Y3RvcmAuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBgdmFsdWVgIGlzIGFuIGluc3RhbmNlIG9mIGBjb25zdHJ1Y3RvcmBcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuaXMuaW5zdGFuY2UgPSBpc1snaW5zdGFuY2VvZiddID0gZnVuY3Rpb24gKHZhbHVlLCBjb25zdHJ1Y3Rvcikge1xuICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBjb25zdHJ1Y3Rvcjtcbn07XG5cbi8qKlxuICogaXMubmlsIC8gaXMubnVsbFxuICogVGVzdCBpZiBgdmFsdWVgIGlzIG51bGwuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBgdmFsdWVgIGlzIG51bGwsIGZhbHNlIG90aGVyd2lzZVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5pcy5uaWwgPSBpc1snbnVsbCddID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA9PT0gbnVsbDtcbn07XG5cbi8qKlxuICogaXMudW5kZWYgLyBpcy51bmRlZmluZWRcbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyB1bmRlZmluZWQuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBgdmFsdWVgIGlzIHVuZGVmaW5lZCwgZmFsc2Ugb3RoZXJ3aXNlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmlzLnVuZGVmID0gaXMudW5kZWZpbmVkID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnO1xufTtcblxuLyoqXG4gKiBUZXN0IGFyZ3VtZW50cy5cbiAqL1xuXG4vKipcbiAqIGlzLmFyZ3NcbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBhbiBhcmd1bWVudHMgb2JqZWN0LlxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgYHZhbHVlYCBpcyBhbiBhcmd1bWVudHMgb2JqZWN0LCBmYWxzZSBvdGhlcndpc2VcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuaXMuYXJncyA9IGlzLmFyZ3VtZW50cyA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICB2YXIgaXNTdGFuZGFyZEFyZ3VtZW50cyA9IHRvU3RyLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBBcmd1bWVudHNdJztcbiAgdmFyIGlzT2xkQXJndW1lbnRzID0gIWlzLmFycmF5KHZhbHVlKSAmJiBpcy5hcnJheWxpa2UodmFsdWUpICYmIGlzLm9iamVjdCh2YWx1ZSkgJiYgaXMuZm4odmFsdWUuY2FsbGVlKTtcbiAgcmV0dXJuIGlzU3RhbmRhcmRBcmd1bWVudHMgfHwgaXNPbGRBcmd1bWVudHM7XG59O1xuXG4vKipcbiAqIFRlc3QgYXJyYXkuXG4gKi9cblxuLyoqXG4gKiBpcy5hcnJheVxuICogVGVzdCBpZiAndmFsdWUnIGlzIGFuIGFycmF5LlxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgYHZhbHVlYCBpcyBhbiBhcnJheSwgZmFsc2Ugb3RoZXJ3aXNlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmlzLmFycmF5ID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIHRvU3RyLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBBcnJheV0nO1xufTtcblxuLyoqXG4gKiBpcy5hcmd1bWVudHMuZW1wdHlcbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBhbiBlbXB0eSBhcmd1bWVudHMgb2JqZWN0LlxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgYHZhbHVlYCBpcyBhbiBlbXB0eSBhcmd1bWVudHMgb2JqZWN0LCBmYWxzZSBvdGhlcndpc2VcbiAqIEBhcGkgcHVibGljXG4gKi9cbmlzLmFyZ3MuZW1wdHkgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIGlzLmFyZ3ModmFsdWUpICYmIHZhbHVlLmxlbmd0aCA9PT0gMDtcbn07XG5cbi8qKlxuICogaXMuYXJyYXkuZW1wdHlcbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBhbiBlbXB0eSBhcnJheS5cbiAqXG4gKiBAcGFyYW0ge01peGVkfSB2YWx1ZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGB2YWx1ZWAgaXMgYW4gZW1wdHkgYXJyYXksIGZhbHNlIG90aGVyd2lzZVxuICogQGFwaSBwdWJsaWNcbiAqL1xuaXMuYXJyYXkuZW1wdHkgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIGlzLmFycmF5KHZhbHVlKSAmJiB2YWx1ZS5sZW5ndGggPT09IDA7XG59O1xuXG4vKipcbiAqIGlzLmFycmF5bGlrZVxuICogVGVzdCBpZiBgdmFsdWVgIGlzIGFuIGFycmF5bGlrZSBvYmplY3QuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBgdmFsdWVgIGlzIGFuIGFyZ3VtZW50cyBvYmplY3QsIGZhbHNlIG90aGVyd2lzZVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5pcy5hcnJheWxpa2UgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuICEhdmFsdWUgJiYgIWlzLmJvb2wodmFsdWUpXG4gICAgJiYgb3ducy5jYWxsKHZhbHVlLCAnbGVuZ3RoJylcbiAgICAmJiBpc0Zpbml0ZSh2YWx1ZS5sZW5ndGgpXG4gICAgJiYgaXMubnVtYmVyKHZhbHVlLmxlbmd0aClcbiAgICAmJiB2YWx1ZS5sZW5ndGggPj0gMDtcbn07XG5cbi8qKlxuICogVGVzdCBib29sZWFuLlxuICovXG5cbi8qKlxuICogaXMuYm9vbFxuICogVGVzdCBpZiBgdmFsdWVgIGlzIGEgYm9vbGVhbi5cbiAqXG4gKiBAcGFyYW0ge01peGVkfSB2YWx1ZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGB2YWx1ZWAgaXMgYSBib29sZWFuLCBmYWxzZSBvdGhlcndpc2VcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuaXMuYm9vbCA9IGlzWydib29sZWFuJ10gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIHRvU3RyLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBCb29sZWFuXSc7XG59O1xuXG4vKipcbiAqIGlzLmZhbHNlXG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgZmFsc2UuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBgdmFsdWVgIGlzIGZhbHNlLCBmYWxzZSBvdGhlcndpc2VcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuaXNbJ2ZhbHNlJ10gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIGlzLmJvb2wodmFsdWUpICYmIEJvb2xlYW4oTnVtYmVyKHZhbHVlKSkgPT09IGZhbHNlO1xufTtcblxuLyoqXG4gKiBpcy50cnVlXG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgdHJ1ZS5cbiAqXG4gKiBAcGFyYW0ge01peGVkfSB2YWx1ZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGB2YWx1ZWAgaXMgdHJ1ZSwgZmFsc2Ugb3RoZXJ3aXNlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmlzWyd0cnVlJ10gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIGlzLmJvb2wodmFsdWUpICYmIEJvb2xlYW4oTnVtYmVyKHZhbHVlKSkgPT09IHRydWU7XG59O1xuXG4vKipcbiAqIFRlc3QgZGF0ZS5cbiAqL1xuXG4vKipcbiAqIGlzLmRhdGVcbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBhIGRhdGUuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBgdmFsdWVgIGlzIGEgZGF0ZSwgZmFsc2Ugb3RoZXJ3aXNlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmlzLmRhdGUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIHRvU3RyLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBEYXRlXSc7XG59O1xuXG4vKipcbiAqIGlzLmRhdGUudmFsaWRcbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGRhdGUuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge0Jvb2xlYW59IHRydWUgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGRhdGUsIGZhbHNlIG90aGVyd2lzZVxuICovXG5pcy5kYXRlLnZhbGlkID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiBpcy5kYXRlKHZhbHVlKSAmJiAhaXNOYU4oTnVtYmVyKHZhbHVlKSk7XG59O1xuXG4vKipcbiAqIFRlc3QgZWxlbWVudC5cbiAqL1xuXG4vKipcbiAqIGlzLmVsZW1lbnRcbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBhbiBodG1sIGVsZW1lbnQuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBgdmFsdWVgIGlzIGFuIEhUTUwgRWxlbWVudCwgZmFsc2Ugb3RoZXJ3aXNlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmlzLmVsZW1lbnQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9PSB1bmRlZmluZWRcbiAgICAmJiB0eXBlb2YgSFRNTEVsZW1lbnQgIT09ICd1bmRlZmluZWQnXG4gICAgJiYgdmFsdWUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudFxuICAgICYmIHZhbHVlLm5vZGVUeXBlID09PSAxO1xufTtcblxuLyoqXG4gKiBUZXN0IGVycm9yLlxuICovXG5cbi8qKlxuICogaXMuZXJyb3JcbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBhbiBlcnJvciBvYmplY3QuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBgdmFsdWVgIGlzIGFuIGVycm9yIG9iamVjdCwgZmFsc2Ugb3RoZXJ3aXNlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmlzLmVycm9yID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiB0b1N0ci5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgRXJyb3JdJztcbn07XG5cbi8qKlxuICogVGVzdCBmdW5jdGlvbi5cbiAqL1xuXG4vKipcbiAqIGlzLmZuIC8gaXMuZnVuY3Rpb24gKGRlcHJlY2F0ZWQpXG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgYSBmdW5jdGlvbi5cbiAqXG4gKiBAcGFyYW0ge01peGVkfSB2YWx1ZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGB2YWx1ZWAgaXMgYSBmdW5jdGlvbiwgZmFsc2Ugb3RoZXJ3aXNlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmlzLmZuID0gaXNbJ2Z1bmN0aW9uJ10gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgdmFyIGlzQWxlcnQgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB2YWx1ZSA9PT0gd2luZG93LmFsZXJ0O1xuICBpZiAoaXNBbGVydCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHZhciBzdHIgPSB0b1N0ci5jYWxsKHZhbHVlKTtcbiAgcmV0dXJuIHN0ciA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJyB8fCBzdHIgPT09ICdbb2JqZWN0IEdlbmVyYXRvckZ1bmN0aW9uXScgfHwgc3RyID09PSAnW29iamVjdCBBc3luY0Z1bmN0aW9uXSc7XG59O1xuXG4vKipcbiAqIFRlc3QgbnVtYmVyLlxuICovXG5cbi8qKlxuICogaXMubnVtYmVyXG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgYSBudW1iZXIuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBgdmFsdWVgIGlzIGEgbnVtYmVyLCBmYWxzZSBvdGhlcndpc2VcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuaXMubnVtYmVyID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiB0b1N0ci5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgTnVtYmVyXSc7XG59O1xuXG4vKipcbiAqIGlzLmluZmluaXRlXG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgcG9zaXRpdmUgb3IgbmVnYXRpdmUgaW5maW5pdHkuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBgdmFsdWVgIGlzIHBvc2l0aXZlIG9yIG5lZ2F0aXZlIEluZmluaXR5LCBmYWxzZSBvdGhlcndpc2VcbiAqIEBhcGkgcHVibGljXG4gKi9cbmlzLmluZmluaXRlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA9PT0gSW5maW5pdHkgfHwgdmFsdWUgPT09IC1JbmZpbml0eTtcbn07XG5cbi8qKlxuICogaXMuZGVjaW1hbFxuICogVGVzdCBpZiBgdmFsdWVgIGlzIGEgZGVjaW1hbCBudW1iZXIuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBgdmFsdWVgIGlzIGEgZGVjaW1hbCBudW1iZXIsIGZhbHNlIG90aGVyd2lzZVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5pcy5kZWNpbWFsID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiBpcy5udW1iZXIodmFsdWUpICYmICFpc0FjdHVhbE5hTih2YWx1ZSkgJiYgIWlzLmluZmluaXRlKHZhbHVlKSAmJiB2YWx1ZSAlIDEgIT09IDA7XG59O1xuXG4vKipcbiAqIGlzLmRpdmlzaWJsZUJ5XG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgZGl2aXNpYmxlIGJ5IGBuYC5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHBhcmFtIHtOdW1iZXJ9IG4gZGl2aWRlbmRcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgYHZhbHVlYCBpcyBkaXZpc2libGUgYnkgYG5gLCBmYWxzZSBvdGhlcndpc2VcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuaXMuZGl2aXNpYmxlQnkgPSBmdW5jdGlvbiAodmFsdWUsIG4pIHtcbiAgdmFyIGlzRGl2aWRlbmRJbmZpbml0ZSA9IGlzLmluZmluaXRlKHZhbHVlKTtcbiAgdmFyIGlzRGl2aXNvckluZmluaXRlID0gaXMuaW5maW5pdGUobik7XG4gIHZhciBpc05vblplcm9OdW1iZXIgPSBpcy5udW1iZXIodmFsdWUpICYmICFpc0FjdHVhbE5hTih2YWx1ZSkgJiYgaXMubnVtYmVyKG4pICYmICFpc0FjdHVhbE5hTihuKSAmJiBuICE9PSAwO1xuICByZXR1cm4gaXNEaXZpZGVuZEluZmluaXRlIHx8IGlzRGl2aXNvckluZmluaXRlIHx8IChpc05vblplcm9OdW1iZXIgJiYgdmFsdWUgJSBuID09PSAwKTtcbn07XG5cbi8qKlxuICogaXMuaW50ZWdlclxuICogVGVzdCBpZiBgdmFsdWVgIGlzIGFuIGludGVnZXIuXG4gKlxuICogQHBhcmFtIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgYHZhbHVlYCBpcyBhbiBpbnRlZ2VyLCBmYWxzZSBvdGhlcndpc2VcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuaXMuaW50ZWdlciA9IGlzWydpbnQnXSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICByZXR1cm4gaXMubnVtYmVyKHZhbHVlKSAmJiAhaXNBY3R1YWxOYU4odmFsdWUpICYmIHZhbHVlICUgMSA9PT0gMDtcbn07XG5cbi8qKlxuICogaXMubWF4aW11bVxuICogVGVzdCBpZiBgdmFsdWVgIGlzIGdyZWF0ZXIgdGhhbiAnb3RoZXJzJyB2YWx1ZXMuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEBwYXJhbSB7QXJyYXl9IG90aGVycyB2YWx1ZXMgdG8gY29tcGFyZSB3aXRoXG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGB2YWx1ZWAgaXMgZ3JlYXRlciB0aGFuIGBvdGhlcnNgIHZhbHVlc1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5pcy5tYXhpbXVtID0gZnVuY3Rpb24gKHZhbHVlLCBvdGhlcnMpIHtcbiAgaWYgKGlzQWN0dWFsTmFOKHZhbHVlKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ05hTiBpcyBub3QgYSB2YWxpZCB2YWx1ZScpO1xuICB9IGVsc2UgaWYgKCFpcy5hcnJheWxpa2Uob3RoZXJzKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ3NlY29uZCBhcmd1bWVudCBtdXN0IGJlIGFycmF5LWxpa2UnKTtcbiAgfVxuICB2YXIgbGVuID0gb3RoZXJzLmxlbmd0aDtcblxuICB3aGlsZSAoLS1sZW4gPj0gMCkge1xuICAgIGlmICh2YWx1ZSA8IG90aGVyc1tsZW5dKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuXG4vKipcbiAqIGlzLm1pbmltdW1cbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBsZXNzIHRoYW4gYG90aGVyc2AgdmFsdWVzLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSB2YWx1ZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcGFyYW0ge0FycmF5fSBvdGhlcnMgdmFsdWVzIHRvIGNvbXBhcmUgd2l0aFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBgdmFsdWVgIGlzIGxlc3MgdGhhbiBgb3RoZXJzYCB2YWx1ZXNcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuaXMubWluaW11bSA9IGZ1bmN0aW9uICh2YWx1ZSwgb3RoZXJzKSB7XG4gIGlmIChpc0FjdHVhbE5hTih2YWx1ZSkpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdOYU4gaXMgbm90IGEgdmFsaWQgdmFsdWUnKTtcbiAgfSBlbHNlIGlmICghaXMuYXJyYXlsaWtlKG90aGVycykpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdzZWNvbmQgYXJndW1lbnQgbXVzdCBiZSBhcnJheS1saWtlJyk7XG4gIH1cbiAgdmFyIGxlbiA9IG90aGVycy5sZW5ndGg7XG5cbiAgd2hpbGUgKC0tbGVuID49IDApIHtcbiAgICBpZiAodmFsdWUgPiBvdGhlcnNbbGVuXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcblxuLyoqXG4gKiBpcy5uYW5cbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBub3QgYSBudW1iZXIuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBgdmFsdWVgIGlzIG5vdCBhIG51bWJlciwgZmFsc2Ugb3RoZXJ3aXNlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmlzLm5hbiA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICByZXR1cm4gIWlzLm51bWJlcih2YWx1ZSkgfHwgdmFsdWUgIT09IHZhbHVlO1xufTtcblxuLyoqXG4gKiBpcy5ldmVuXG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgYW4gZXZlbiBudW1iZXIuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgYHZhbHVlYCBpcyBhbiBldmVuIG51bWJlciwgZmFsc2Ugb3RoZXJ3aXNlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmlzLmV2ZW4gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIGlzLmluZmluaXRlKHZhbHVlKSB8fCAoaXMubnVtYmVyKHZhbHVlKSAmJiB2YWx1ZSA9PT0gdmFsdWUgJiYgdmFsdWUgJSAyID09PSAwKTtcbn07XG5cbi8qKlxuICogaXMub2RkXG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgYW4gb2RkIG51bWJlci5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBgdmFsdWVgIGlzIGFuIG9kZCBudW1iZXIsIGZhbHNlIG90aGVyd2lzZVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5pcy5vZGQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIGlzLmluZmluaXRlKHZhbHVlKSB8fCAoaXMubnVtYmVyKHZhbHVlKSAmJiB2YWx1ZSA9PT0gdmFsdWUgJiYgdmFsdWUgJSAyICE9PSAwKTtcbn07XG5cbi8qKlxuICogaXMuZ2VcbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBncmVhdGVyIHRoYW4gb3IgZXF1YWwgdG8gYG90aGVyYC5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHBhcmFtIHtOdW1iZXJ9IG90aGVyIHZhbHVlIHRvIGNvbXBhcmUgd2l0aFxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuaXMuZ2UgPSBmdW5jdGlvbiAodmFsdWUsIG90aGVyKSB7XG4gIGlmIChpc0FjdHVhbE5hTih2YWx1ZSkgfHwgaXNBY3R1YWxOYU4ob3RoZXIpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignTmFOIGlzIG5vdCBhIHZhbGlkIHZhbHVlJyk7XG4gIH1cbiAgcmV0dXJuICFpcy5pbmZpbml0ZSh2YWx1ZSkgJiYgIWlzLmluZmluaXRlKG90aGVyKSAmJiB2YWx1ZSA+PSBvdGhlcjtcbn07XG5cbi8qKlxuICogaXMuZ3RcbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBncmVhdGVyIHRoYW4gYG90aGVyYC5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHBhcmFtIHtOdW1iZXJ9IG90aGVyIHZhbHVlIHRvIGNvbXBhcmUgd2l0aFxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuaXMuZ3QgPSBmdW5jdGlvbiAodmFsdWUsIG90aGVyKSB7XG4gIGlmIChpc0FjdHVhbE5hTih2YWx1ZSkgfHwgaXNBY3R1YWxOYU4ob3RoZXIpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignTmFOIGlzIG5vdCBhIHZhbGlkIHZhbHVlJyk7XG4gIH1cbiAgcmV0dXJuICFpcy5pbmZpbml0ZSh2YWx1ZSkgJiYgIWlzLmluZmluaXRlKG90aGVyKSAmJiB2YWx1ZSA+IG90aGVyO1xufTtcblxuLyoqXG4gKiBpcy5sZVxuICogVGVzdCBpZiBgdmFsdWVgIGlzIGxlc3MgdGhhbiBvciBlcXVhbCB0byBgb3RoZXJgLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSB2YWx1ZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcGFyYW0ge051bWJlcn0gb3RoZXIgdmFsdWUgdG8gY29tcGFyZSB3aXRoXG4gKiBAcmV0dXJuIHtCb29sZWFufSBpZiAndmFsdWUnIGlzIGxlc3MgdGhhbiBvciBlcXVhbCB0byAnb3RoZXInXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmlzLmxlID0gZnVuY3Rpb24gKHZhbHVlLCBvdGhlcikge1xuICBpZiAoaXNBY3R1YWxOYU4odmFsdWUpIHx8IGlzQWN0dWFsTmFOKG90aGVyKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ05hTiBpcyBub3QgYSB2YWxpZCB2YWx1ZScpO1xuICB9XG4gIHJldHVybiAhaXMuaW5maW5pdGUodmFsdWUpICYmICFpcy5pbmZpbml0ZShvdGhlcikgJiYgdmFsdWUgPD0gb3RoZXI7XG59O1xuXG4vKipcbiAqIGlzLmx0XG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgbGVzcyB0aGFuIGBvdGhlcmAuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEBwYXJhbSB7TnVtYmVyfSBvdGhlciB2YWx1ZSB0byBjb21wYXJlIHdpdGhcbiAqIEByZXR1cm4ge0Jvb2xlYW59IGlmIGB2YWx1ZWAgaXMgbGVzcyB0aGFuIGBvdGhlcmBcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuaXMubHQgPSBmdW5jdGlvbiAodmFsdWUsIG90aGVyKSB7XG4gIGlmIChpc0FjdHVhbE5hTih2YWx1ZSkgfHwgaXNBY3R1YWxOYU4ob3RoZXIpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignTmFOIGlzIG5vdCBhIHZhbGlkIHZhbHVlJyk7XG4gIH1cbiAgcmV0dXJuICFpcy5pbmZpbml0ZSh2YWx1ZSkgJiYgIWlzLmluZmluaXRlKG90aGVyKSAmJiB2YWx1ZSA8IG90aGVyO1xufTtcblxuLyoqXG4gKiBpcy53aXRoaW5cbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyB3aXRoaW4gYHN0YXJ0YCBhbmQgYGZpbmlzaGAuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEBwYXJhbSB7TnVtYmVyfSBzdGFydCBsb3dlciBib3VuZFxuICogQHBhcmFtIHtOdW1iZXJ9IGZpbmlzaCB1cHBlciBib3VuZFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiAndmFsdWUnIGlzIGlzIHdpdGhpbiAnc3RhcnQnIGFuZCAnZmluaXNoJ1xuICogQGFwaSBwdWJsaWNcbiAqL1xuaXMud2l0aGluID0gZnVuY3Rpb24gKHZhbHVlLCBzdGFydCwgZmluaXNoKSB7XG4gIGlmIChpc0FjdHVhbE5hTih2YWx1ZSkgfHwgaXNBY3R1YWxOYU4oc3RhcnQpIHx8IGlzQWN0dWFsTmFOKGZpbmlzaCkpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdOYU4gaXMgbm90IGEgdmFsaWQgdmFsdWUnKTtcbiAgfSBlbHNlIGlmICghaXMubnVtYmVyKHZhbHVlKSB8fCAhaXMubnVtYmVyKHN0YXJ0KSB8fCAhaXMubnVtYmVyKGZpbmlzaCkpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdhbGwgYXJndW1lbnRzIG11c3QgYmUgbnVtYmVycycpO1xuICB9XG4gIHZhciBpc0FueUluZmluaXRlID0gaXMuaW5maW5pdGUodmFsdWUpIHx8IGlzLmluZmluaXRlKHN0YXJ0KSB8fCBpcy5pbmZpbml0ZShmaW5pc2gpO1xuICByZXR1cm4gaXNBbnlJbmZpbml0ZSB8fCAodmFsdWUgPj0gc3RhcnQgJiYgdmFsdWUgPD0gZmluaXNoKTtcbn07XG5cbi8qKlxuICogVGVzdCBvYmplY3QuXG4gKi9cblxuLyoqXG4gKiBpcy5vYmplY3RcbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBhbiBvYmplY3QuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBgdmFsdWVgIGlzIGFuIG9iamVjdCwgZmFsc2Ugb3RoZXJ3aXNlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5pcy5vYmplY3QgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIHRvU3RyLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBPYmplY3RdJztcbn07XG5cbi8qKlxuICogaXMucHJpbWl0aXZlXG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgYSBwcmltaXRpdmUuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBgdmFsdWVgIGlzIGEgcHJpbWl0aXZlLCBmYWxzZSBvdGhlcndpc2VcbiAqIEBhcGkgcHVibGljXG4gKi9cbmlzLnByaW1pdGl2ZSA9IGZ1bmN0aW9uIGlzUHJpbWl0aXZlKHZhbHVlKSB7XG4gIGlmICghdmFsdWUpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyB8fCBpcy5vYmplY3QodmFsdWUpIHx8IGlzLmZuKHZhbHVlKSB8fCBpcy5hcnJheSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59O1xuXG4vKipcbiAqIGlzLmhhc2hcbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBhIGhhc2ggLSBhIHBsYWluIG9iamVjdCBsaXRlcmFsLlxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgYHZhbHVlYCBpcyBhIGhhc2gsIGZhbHNlIG90aGVyd2lzZVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5pcy5oYXNoID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiBpcy5vYmplY3QodmFsdWUpICYmIHZhbHVlLmNvbnN0cnVjdG9yID09PSBPYmplY3QgJiYgIXZhbHVlLm5vZGVUeXBlICYmICF2YWx1ZS5zZXRJbnRlcnZhbDtcbn07XG5cbi8qKlxuICogVGVzdCByZWdleHAuXG4gKi9cblxuLyoqXG4gKiBpcy5yZWdleHBcbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBhIHJlZ3VsYXIgZXhwcmVzc2lvbi5cbiAqXG4gKiBAcGFyYW0ge01peGVkfSB2YWx1ZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGB2YWx1ZWAgaXMgYSByZWdleHAsIGZhbHNlIG90aGVyd2lzZVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5pcy5yZWdleHAgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIHRvU3RyLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBSZWdFeHBdJztcbn07XG5cbi8qKlxuICogVGVzdCBzdHJpbmcuXG4gKi9cblxuLyoqXG4gKiBpcy5zdHJpbmdcbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBhIHN0cmluZy5cbiAqXG4gKiBAcGFyYW0ge01peGVkfSB2YWx1ZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmICd2YWx1ZScgaXMgYSBzdHJpbmcsIGZhbHNlIG90aGVyd2lzZVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5pcy5zdHJpbmcgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIHRvU3RyLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBTdHJpbmddJztcbn07XG5cbi8qKlxuICogVGVzdCBiYXNlNjQgc3RyaW5nLlxuICovXG5cbi8qKlxuICogaXMuYmFzZTY0XG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBiYXNlNjQgZW5jb2RlZCBzdHJpbmcuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiAndmFsdWUnIGlzIGEgYmFzZTY0IGVuY29kZWQgc3RyaW5nLCBmYWxzZSBvdGhlcndpc2VcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuaXMuYmFzZTY0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiBpcy5zdHJpbmcodmFsdWUpICYmICghdmFsdWUubGVuZ3RoIHx8IGJhc2U2NFJlZ2V4LnRlc3QodmFsdWUpKTtcbn07XG5cbi8qKlxuICogVGVzdCBiYXNlNjQgc3RyaW5nLlxuICovXG5cbi8qKlxuICogaXMuaGV4XG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBoZXggZW5jb2RlZCBzdHJpbmcuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiAndmFsdWUnIGlzIGEgaGV4IGVuY29kZWQgc3RyaW5nLCBmYWxzZSBvdGhlcndpc2VcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuaXMuaGV4ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiBpcy5zdHJpbmcodmFsdWUpICYmICghdmFsdWUubGVuZ3RoIHx8IGhleFJlZ2V4LnRlc3QodmFsdWUpKTtcbn07XG5cbi8qKlxuICogaXMuc3ltYm9sXG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgYW4gRVM2IFN5bWJvbFxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgYHZhbHVlYCBpcyBhIFN5bWJvbCwgZmFsc2Ugb3RoZXJpc2VcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuaXMuc3ltYm9sID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIHRvU3RyLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBTeW1ib2xdJyAmJiB0eXBlb2Ygc3ltYm9sVmFsdWVPZi5jYWxsKHZhbHVlKSA9PT0gJ3N5bWJvbCc7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2lzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBpcyA9IHJlcXVpcmUoJy4vaXMnKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB3YWxrblNldCggb2JqLCBwYXRoLCB2YWx1ZSwgc3RhY2sgKSB7XHJcbiAgICBpZiAoIGlzLnN0cmluZyhwYXRoKSApXHJcbiAgICAgICAgcGF0aCA9IHBhdGguc3BsaXQoJy4nKTtcclxuICAgIGlmICggIXBhdGgubGVuZ3RoIClcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICBlbHNlIGlmICggcGF0aC5sZW5ndGggPT0gMSApXHJcbiAgICAgICAgcmV0dXJuIG9ialsgcGF0aFsgMCBdIF0gPSBzdGFja1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBbIC4uLiggb2JqWyBwYXRoWyAwIF0gXSB8fCBbXSApLCB2YWx1ZSBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHZhbHVlO1xyXG4gICAgZWxzZVxyXG4gICAgICAgIHJldHVybiB3YWxrblNldChcclxuICAgICAgICAgICAgb2JqWyBwYXRoWyAwIF0gXSA9XHJcbiAgICAgICAgICAgICAgICBvYmpbIHBhdGhbIDAgXSBdIHx8IHt9LFxyXG4gICAgICAgICAgICBwYXRoLnNsaWNlKDEpLFxyXG4gICAgICAgICAgICB2YWx1ZSwgc3RhY2tcclxuICAgICAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gd2Fsa25HZXQoIG9iaiwgcGF0aCwgaXNLZXkgKSB7XHJcbiAgICBpZiAoIGlzLnN0cmluZyhwYXRoKSApXHJcbiAgICAgICAgcGF0aCA9IHBhdGguc3BsaXQoJy4nKTtcclxuICAgIHJldHVybiBwYXRoLmxlbmd0aFxyXG4gICAgICAgICAgID8gb2JqWyBwYXRoWyAwIF0gXSAmJiB3YWxrbkdldChvYmpbIHBhdGhbIDAgXSBdLCBwYXRoLnNsaWNlKDEpKVxyXG4gICAgICAgICAgIDogb2JqO1xyXG59XHJcblxyXG4vL0B0b2RvXHJcbmV4cG9ydCBmdW5jdGlvbiBrZXlXYWxrblNldCggb2JqLCBwYXRoLCB2YWx1ZSwgc3RhY2sgKSB7XHJcbiAgICBpZiAoIGlzLnN0cmluZyhwYXRoKSApXHJcbiAgICAgICAgcGF0aCA9IHBhdGguc3BsaXQoLyhcXD58XFwvKS9pZykuZmlsdGVyKHYgPT4gKCB2ICE9PSAnPicgJiYgdiApKTtcclxuICAgIHJldHVybiB3YWxrblNldChvYmosIHBhdGgsIHZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGtleVdhbGtuR2V0KCBvYmosIHBhdGgsIGlzS2V5ICkge1xyXG4gICAgaWYgKCBpcy5zdHJpbmcocGF0aCkgKVxyXG4gICAgICAgIHBhdGggPSBwYXRoLnNwbGl0KC8oXFw+fFxcLykvaWcpLmZpbHRlcih2ID0+ICggdiAhPT0gJz4nICYmIHYgKSk7XHJcbiAgICByZXR1cm4gcGF0aC5sZW5ndGhcclxuICAgICAgICAgICA/IG9ialsgcGF0aFsgMCBdIF0gJiYgd2Fsa25HZXQob2JqWyBwYXRoWyAwIF0gXSwgcGF0aC5zbGljZSgxKSlcclxuICAgICAgICAgICA6IG9iajtcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlscy91dGlscy5qcyIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpICAyMDE4IFdpc2UgV2lsZCBXZWIgLlxuICpcbiAqICBNSVQgTGljZW5zZVxuICogIFxuICogIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqICBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiAgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqICBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqICBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICogIFxuICogIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuICogIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKiAgXG4gKiAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqICBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG4gKiAgU09GVFdBUkUuXG4gKiAgXG4gKiBAYXV0aG9yIDogTmF0aGFuYWVsIEJyYXVuXG4gKiBAY29udGFjdCA6IGNhaXBpbGFic0BnbWFpbC5jb21cbiAqL1xudmFyIGlzID0gcmVxdWlyZSgnaXMnKTtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVtaXR0ZXIge1xuICAgIF9ldmVudHMgPSB7fTtcbiAgICBcbiAgICBvbiggZXZ0LCBjYiApIHtcbiAgICAgICAgaWYgKCAhaXMuc3RyaW5nKGV2dCkgJiYgZXZ0IClcbiAgICAgICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhldnQpLmZvckVhY2goayA9PiB0aGlzLm9uKGssIGV2dFtrXSkpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fZXZlbnRzW2V2dF0gPSB0aGlzLl9ldmVudHNbZXZ0XSB8fCBbXTtcbiAgICAgICAgdGhpcy5fZXZlbnRzW2V2dF0ucHVzaChjYik7XG4gICAgICAgIFxuICAgIH1cbiAgICBcbiAgICB1biggZXZ0LCBjYiApIHtcbiAgICAgICAgaWYgKCAhaXMuc3RyaW5nKGV2dCkgJiYgZXZ0IClcbiAgICAgICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhldnQpLmZvckVhY2goayA9PiB0aGlzLnVuKGssIGV2dFtrXSkpO1xuICAgICAgICBcbiAgICAgICAgaWYgKCAhdGhpcy5fZXZlbnRzW2V2dF0gKSByZXR1cm47XG4gICAgICAgIHZhciBpID0gdGhpcy5fZXZlbnRzW2V2dF0uaW5kZXhPZihjYik7XG4gICAgICAgIHRoaXMuX2V2ZW50c1tldnRdLnNwbGljZShpLCAxKTtcbiAgICB9XG4gICAgXG4gICAgZW1pdCggZXZ0LCAuLi5hcmd6ICkge1xuICAgICAgICBpZiAoICF0aGlzLl9ldmVudHNbZXZ0XSApIHJldHVybjtcbiAgICAgICAgbGV0IGxpc3RzID0gWy4uLnRoaXMuX2V2ZW50c1tldnRdXTtcbiAgICAgICAgXG4gICAgICAgIGZvciAoIHZhciBpID0gMDsgaSA8IGxpc3RzLmxlbmd0aDsgaSsrIClcbiAgICAgICAgICAgIGxpc3RzW2ldKC4uLmFyZ3opXG4gICAgfVxuICAgIFxuICAgIGFkZExpc3RlbmVyKCkge1xuICAgICAgICB0aGlzLm9uKC4uLmFyZ3VtZW50cyk7XG4gICAgfVxuICAgIFxuICAgIHJlbW92ZUxpc3RlbmVyKCkge1xuICAgICAgICB0aGlzLnVuKC4uLmFyZ3VtZW50cyk7XG4gICAgfVxuICAgIFxuICAgIHJlbW92ZUFsbExpc3RlbmVycygpIHtcbiAgICAgICAgdGhpcy5fZXZlbnRzID0ge307XG4gICAgfVxuICAgIFxuICAgIG9uY2UoIGV2dCwgY2IgKSB7XG4gICAgICAgIGxldCBmbjtcbiAgICAgICAgdGhpcy5vbihldnQsIGZuID0gKCAuLi5hcmd6ICkgPT4ge1xuICAgICAgICAgICAgdGhpcy51bihldnQsIGZuKTtcbiAgICAgICAgICAgIGNiKC4uLmFyZ3opXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBcbiAgICBcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbHMvRW1pdHRlci5qcyIsIid1c2Ugc3RyaWN0Jztcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9saWIvaW5kZXgnKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zaG9ydGlkL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxudmFyIGFscGhhYmV0ID0gcmVxdWlyZSgnLi9hbHBoYWJldCcpO1xudmFyIGVuY29kZSA9IHJlcXVpcmUoJy4vZW5jb2RlJyk7XG52YXIgZGVjb2RlID0gcmVxdWlyZSgnLi9kZWNvZGUnKTtcbnZhciBidWlsZCA9IHJlcXVpcmUoJy4vYnVpbGQnKTtcbnZhciBpc1ZhbGlkID0gcmVxdWlyZSgnLi9pcy12YWxpZCcpO1xuXG4vLyBpZiB5b3UgYXJlIHVzaW5nIGNsdXN0ZXIgb3IgbXVsdGlwbGUgc2VydmVycyB1c2UgdGhpcyB0byBtYWtlIGVhY2ggaW5zdGFuY2Vcbi8vIGhhcyBhIHVuaXF1ZSB2YWx1ZSBmb3Igd29ya2VyXG4vLyBOb3RlOiBJIGRvbid0IGtub3cgaWYgdGhpcyBpcyBhdXRvbWF0aWNhbGx5IHNldCB3aGVuIHVzaW5nIHRoaXJkXG4vLyBwYXJ0eSBjbHVzdGVyIHNvbHV0aW9ucyBzdWNoIGFzIHBtMi5cbnZhciBjbHVzdGVyV29ya2VySWQgPSByZXF1aXJlKCcuL3V0aWwvY2x1c3Rlci13b3JrZXItaWQnKSB8fCAwO1xuXG4vKipcbiAqIFNldCB0aGUgc2VlZC5cbiAqIEhpZ2hseSByZWNvbW1lbmRlZCBpZiB5b3UgZG9uJ3Qgd2FudCBwZW9wbGUgdG8gdHJ5IHRvIGZpZ3VyZSBvdXQgeW91ciBpZCBzY2hlbWEuXG4gKiBleHBvc2VkIGFzIHNob3J0aWQuc2VlZChpbnQpXG4gKiBAcGFyYW0gc2VlZCBJbnRlZ2VyIHZhbHVlIHRvIHNlZWQgdGhlIHJhbmRvbSBhbHBoYWJldC4gIEFMV0FZUyBVU0UgVEhFIFNBTUUgU0VFRCBvciB5b3UgbWlnaHQgZ2V0IG92ZXJsYXBzLlxuICovXG5mdW5jdGlvbiBzZWVkKHNlZWRWYWx1ZSkge1xuICAgIGFscGhhYmV0LnNlZWQoc2VlZFZhbHVlKTtcbiAgICByZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8qKlxuICogU2V0IHRoZSBjbHVzdGVyIHdvcmtlciBvciBtYWNoaW5lIGlkXG4gKiBleHBvc2VkIGFzIHNob3J0aWQud29ya2VyKGludClcbiAqIEBwYXJhbSB3b3JrZXJJZCB3b3JrZXIgbXVzdCBiZSBwb3NpdGl2ZSBpbnRlZ2VyLiAgTnVtYmVyIGxlc3MgdGhhbiAxNiBpcyByZWNvbW1lbmRlZC5cbiAqIHJldHVybnMgc2hvcnRpZCBtb2R1bGUgc28gaXQgY2FuIGJlIGNoYWluZWQuXG4gKi9cbmZ1bmN0aW9uIHdvcmtlcih3b3JrZXJJZCkge1xuICAgIGNsdXN0ZXJXb3JrZXJJZCA9IHdvcmtlcklkO1xuICAgIHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLyoqXG4gKlxuICogc2V0cyBuZXcgY2hhcmFjdGVycyB0byB1c2UgaW4gdGhlIGFscGhhYmV0XG4gKiByZXR1cm5zIHRoZSBzaHVmZmxlZCBhbHBoYWJldFxuICovXG5mdW5jdGlvbiBjaGFyYWN0ZXJzKG5ld0NoYXJhY3RlcnMpIHtcbiAgICBpZiAobmV3Q2hhcmFjdGVycyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGFscGhhYmV0LmNoYXJhY3RlcnMobmV3Q2hhcmFjdGVycyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFscGhhYmV0LnNodWZmbGVkKCk7XG59XG5cbi8qKlxuICogR2VuZXJhdGUgdW5pcXVlIGlkXG4gKiBSZXR1cm5zIHN0cmluZyBpZFxuICovXG5mdW5jdGlvbiBnZW5lcmF0ZSgpIHtcbiAgcmV0dXJuIGJ1aWxkKGNsdXN0ZXJXb3JrZXJJZCk7XG59XG5cbi8vIEV4cG9ydCBhbGwgb3RoZXIgZnVuY3Rpb25zIGFzIHByb3BlcnRpZXMgb2YgdGhlIGdlbmVyYXRlIGZ1bmN0aW9uXG5tb2R1bGUuZXhwb3J0cyA9IGdlbmVyYXRlO1xubW9kdWxlLmV4cG9ydHMuZ2VuZXJhdGUgPSBnZW5lcmF0ZTtcbm1vZHVsZS5leHBvcnRzLnNlZWQgPSBzZWVkO1xubW9kdWxlLmV4cG9ydHMud29ya2VyID0gd29ya2VyO1xubW9kdWxlLmV4cG9ydHMuY2hhcmFjdGVycyA9IGNoYXJhY3RlcnM7XG5tb2R1bGUuZXhwb3J0cy5kZWNvZGUgPSBkZWNvZGU7XG5tb2R1bGUuZXhwb3J0cy5pc1ZhbGlkID0gaXNWYWxpZDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zaG9ydGlkL2xpYi9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbnZhciByYW5kb21Gcm9tU2VlZCA9IHJlcXVpcmUoJy4vcmFuZG9tL3JhbmRvbS1mcm9tLXNlZWQnKTtcblxudmFyIE9SSUdJTkFMID0gJzAxMjM0NTY3ODlhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ekFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaXy0nO1xudmFyIGFscGhhYmV0O1xudmFyIHByZXZpb3VzU2VlZDtcblxudmFyIHNodWZmbGVkO1xuXG5mdW5jdGlvbiByZXNldCgpIHtcbiAgICBzaHVmZmxlZCA9IGZhbHNlO1xufVxuXG5mdW5jdGlvbiBzZXRDaGFyYWN0ZXJzKF9hbHBoYWJldF8pIHtcbiAgICBpZiAoIV9hbHBoYWJldF8pIHtcbiAgICAgICAgaWYgKGFscGhhYmV0ICE9PSBPUklHSU5BTCkge1xuICAgICAgICAgICAgYWxwaGFiZXQgPSBPUklHSU5BTDtcbiAgICAgICAgICAgIHJlc2V0KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChfYWxwaGFiZXRfID09PSBhbHBoYWJldCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKF9hbHBoYWJldF8ubGVuZ3RoICE9PSBPUklHSU5BTC5sZW5ndGgpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDdXN0b20gYWxwaGFiZXQgZm9yIHNob3J0aWQgbXVzdCBiZSAnICsgT1JJR0lOQUwubGVuZ3RoICsgJyB1bmlxdWUgY2hhcmFjdGVycy4gWW91IHN1Ym1pdHRlZCAnICsgX2FscGhhYmV0Xy5sZW5ndGggKyAnIGNoYXJhY3RlcnM6ICcgKyBfYWxwaGFiZXRfKTtcbiAgICB9XG5cbiAgICB2YXIgdW5pcXVlID0gX2FscGhhYmV0Xy5zcGxpdCgnJykuZmlsdGVyKGZ1bmN0aW9uKGl0ZW0sIGluZCwgYXJyKXtcbiAgICAgICByZXR1cm4gaW5kICE9PSBhcnIubGFzdEluZGV4T2YoaXRlbSk7XG4gICAgfSk7XG5cbiAgICBpZiAodW5pcXVlLmxlbmd0aCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0N1c3RvbSBhbHBoYWJldCBmb3Igc2hvcnRpZCBtdXN0IGJlICcgKyBPUklHSU5BTC5sZW5ndGggKyAnIHVuaXF1ZSBjaGFyYWN0ZXJzLiBUaGVzZSBjaGFyYWN0ZXJzIHdlcmUgbm90IHVuaXF1ZTogJyArIHVuaXF1ZS5qb2luKCcsICcpKTtcbiAgICB9XG5cbiAgICBhbHBoYWJldCA9IF9hbHBoYWJldF87XG4gICAgcmVzZXQoKTtcbn1cblxuZnVuY3Rpb24gY2hhcmFjdGVycyhfYWxwaGFiZXRfKSB7XG4gICAgc2V0Q2hhcmFjdGVycyhfYWxwaGFiZXRfKTtcbiAgICByZXR1cm4gYWxwaGFiZXQ7XG59XG5cbmZ1bmN0aW9uIHNldFNlZWQoc2VlZCkge1xuICAgIHJhbmRvbUZyb21TZWVkLnNlZWQoc2VlZCk7XG4gICAgaWYgKHByZXZpb3VzU2VlZCAhPT0gc2VlZCkge1xuICAgICAgICByZXNldCgpO1xuICAgICAgICBwcmV2aW91c1NlZWQgPSBzZWVkO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gc2h1ZmZsZSgpIHtcbiAgICBpZiAoIWFscGhhYmV0KSB7XG4gICAgICAgIHNldENoYXJhY3RlcnMoT1JJR0lOQUwpO1xuICAgIH1cblxuICAgIHZhciBzb3VyY2VBcnJheSA9IGFscGhhYmV0LnNwbGl0KCcnKTtcbiAgICB2YXIgdGFyZ2V0QXJyYXkgPSBbXTtcbiAgICB2YXIgciA9IHJhbmRvbUZyb21TZWVkLm5leHRWYWx1ZSgpO1xuICAgIHZhciBjaGFyYWN0ZXJJbmRleDtcblxuICAgIHdoaWxlIChzb3VyY2VBcnJheS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHIgPSByYW5kb21Gcm9tU2VlZC5uZXh0VmFsdWUoKTtcbiAgICAgICAgY2hhcmFjdGVySW5kZXggPSBNYXRoLmZsb29yKHIgKiBzb3VyY2VBcnJheS5sZW5ndGgpO1xuICAgICAgICB0YXJnZXRBcnJheS5wdXNoKHNvdXJjZUFycmF5LnNwbGljZShjaGFyYWN0ZXJJbmRleCwgMSlbMF0pO1xuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0QXJyYXkuam9pbignJyk7XG59XG5cbmZ1bmN0aW9uIGdldFNodWZmbGVkKCkge1xuICAgIGlmIChzaHVmZmxlZCkge1xuICAgICAgICByZXR1cm4gc2h1ZmZsZWQ7XG4gICAgfVxuICAgIHNodWZmbGVkID0gc2h1ZmZsZSgpO1xuICAgIHJldHVybiBzaHVmZmxlZDtcbn1cblxuLyoqXG4gKiBsb29rdXAgc2h1ZmZsZWQgbGV0dGVyXG4gKiBAcGFyYW0gaW5kZXhcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGxvb2t1cChpbmRleCkge1xuICAgIHZhciBhbHBoYWJldFNodWZmbGVkID0gZ2V0U2h1ZmZsZWQoKTtcbiAgICByZXR1cm4gYWxwaGFiZXRTaHVmZmxlZFtpbmRleF07XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIGNoYXJhY3RlcnM6IGNoYXJhY3RlcnMsXG4gICAgc2VlZDogc2V0U2VlZCxcbiAgICBsb29rdXA6IGxvb2t1cCxcbiAgICBzaHVmZmxlZDogZ2V0U2h1ZmZsZWRcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc2hvcnRpZC9saWIvYWxwaGFiZXQuanNcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG4vLyBGb3VuZCB0aGlzIHNlZWQtYmFzZWQgcmFuZG9tIGdlbmVyYXRvciBzb21ld2hlcmVcbi8vIEJhc2VkIG9uIFRoZSBDZW50cmFsIFJhbmRvbWl6ZXIgMS4zIChDKSAxOTk3IGJ5IFBhdWwgSG91bGUgKGhvdWxlQG1zYy5jb3JuZWxsLmVkdSlcblxudmFyIHNlZWQgPSAxO1xuXG4vKipcbiAqIHJldHVybiBhIHJhbmRvbSBudW1iZXIgYmFzZWQgb24gYSBzZWVkXG4gKiBAcGFyYW0gc2VlZFxuICogQHJldHVybnMge251bWJlcn1cbiAqL1xuZnVuY3Rpb24gZ2V0TmV4dFZhbHVlKCkge1xuICAgIHNlZWQgPSAoc2VlZCAqIDkzMDEgKyA0OTI5NykgJSAyMzMyODA7XG4gICAgcmV0dXJuIHNlZWQvKDIzMzI4MC4wKTtcbn1cblxuZnVuY3Rpb24gc2V0U2VlZChfc2VlZF8pIHtcbiAgICBzZWVkID0gX3NlZWRfO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBuZXh0VmFsdWU6IGdldE5leHRWYWx1ZSxcbiAgICBzZWVkOiBzZXRTZWVkXG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Nob3J0aWQvbGliL3JhbmRvbS9yYW5kb20tZnJvbS1zZWVkLmpzXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxudmFyIHJhbmRvbUJ5dGUgPSByZXF1aXJlKCcuL3JhbmRvbS9yYW5kb20tYnl0ZScpO1xuXG5mdW5jdGlvbiBlbmNvZGUobG9va3VwLCBudW1iZXIpIHtcbiAgICB2YXIgbG9vcENvdW50ZXIgPSAwO1xuICAgIHZhciBkb25lO1xuXG4gICAgdmFyIHN0ciA9ICcnO1xuXG4gICAgd2hpbGUgKCFkb25lKSB7XG4gICAgICAgIHN0ciA9IHN0ciArIGxvb2t1cCggKCAobnVtYmVyID4+ICg0ICogbG9vcENvdW50ZXIpKSAmIDB4MGYgKSB8IHJhbmRvbUJ5dGUoKSApO1xuICAgICAgICBkb25lID0gbnVtYmVyIDwgKE1hdGgucG93KDE2LCBsb29wQ291bnRlciArIDEgKSApO1xuICAgICAgICBsb29wQ291bnRlcisrO1xuICAgIH1cbiAgICByZXR1cm4gc3RyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGVuY29kZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zaG9ydGlkL2xpYi9lbmNvZGUuanNcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxudmFyIGNyeXB0byA9IHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnICYmICh3aW5kb3cuY3J5cHRvIHx8IHdpbmRvdy5tc0NyeXB0byk7IC8vIElFIDExIHVzZXMgd2luZG93Lm1zQ3J5cHRvXG5cbmZ1bmN0aW9uIHJhbmRvbUJ5dGUoKSB7XG4gICAgaWYgKCFjcnlwdG8gfHwgIWNyeXB0by5nZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDI1NikgJiAweDMwO1xuICAgIH1cbiAgICB2YXIgZGVzdCA9IG5ldyBVaW50OEFycmF5KDEpO1xuICAgIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMoZGVzdCk7XG4gICAgcmV0dXJuIGRlc3RbMF0gJiAweDMwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHJhbmRvbUJ5dGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc2hvcnRpZC9saWIvcmFuZG9tL3JhbmRvbS1ieXRlLWJyb3dzZXIuanNcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcbnZhciBhbHBoYWJldCA9IHJlcXVpcmUoJy4vYWxwaGFiZXQnKTtcblxuLyoqXG4gKiBEZWNvZGUgdGhlIGlkIHRvIGdldCB0aGUgdmVyc2lvbiBhbmQgd29ya2VyXG4gKiBNYWlubHkgZm9yIGRlYnVnZ2luZyBhbmQgdGVzdGluZy5cbiAqIEBwYXJhbSBpZCAtIHRoZSBzaG9ydGlkLWdlbmVyYXRlZCBpZC5cbiAqL1xuZnVuY3Rpb24gZGVjb2RlKGlkKSB7XG4gICAgdmFyIGNoYXJhY3RlcnMgPSBhbHBoYWJldC5zaHVmZmxlZCgpO1xuICAgIHJldHVybiB7XG4gICAgICAgIHZlcnNpb246IGNoYXJhY3RlcnMuaW5kZXhPZihpZC5zdWJzdHIoMCwgMSkpICYgMHgwZixcbiAgICAgICAgd29ya2VyOiBjaGFyYWN0ZXJzLmluZGV4T2YoaWQuc3Vic3RyKDEsIDEpKSAmIDB4MGZcbiAgICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRlY29kZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zaG9ydGlkL2xpYi9kZWNvZGUuanNcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxudmFyIGVuY29kZSA9IHJlcXVpcmUoJy4vZW5jb2RlJyk7XG52YXIgYWxwaGFiZXQgPSByZXF1aXJlKCcuL2FscGhhYmV0Jyk7XG5cbi8vIElnbm9yZSBhbGwgbWlsbGlzZWNvbmRzIGJlZm9yZSBhIGNlcnRhaW4gdGltZSB0byByZWR1Y2UgdGhlIHNpemUgb2YgdGhlIGRhdGUgZW50cm9weSB3aXRob3V0IHNhY3JpZmljaW5nIHVuaXF1ZW5lc3MuXG4vLyBUaGlzIG51bWJlciBzaG91bGQgYmUgdXBkYXRlZCBldmVyeSB5ZWFyIG9yIHNvIHRvIGtlZXAgdGhlIGdlbmVyYXRlZCBpZCBzaG9ydC5cbi8vIFRvIHJlZ2VuZXJhdGUgYG5ldyBEYXRlKCkgLSAwYCBhbmQgYnVtcCB0aGUgdmVyc2lvbi4gQWx3YXlzIGJ1bXAgdGhlIHZlcnNpb24hXG52YXIgUkVEVUNFX1RJTUUgPSAxNDU5NzA3NjA2NTE4O1xuXG4vLyBkb24ndCBjaGFuZ2UgdW5sZXNzIHdlIGNoYW5nZSB0aGUgYWxnb3Mgb3IgUkVEVUNFX1RJTUVcbi8vIG11c3QgYmUgYW4gaW50ZWdlciBhbmQgbGVzcyB0aGFuIDE2XG52YXIgdmVyc2lvbiA9IDY7XG5cbi8vIENvdW50ZXIgaXMgdXNlZCB3aGVuIHNob3J0aWQgaXMgY2FsbGVkIG11bHRpcGxlIHRpbWVzIGluIG9uZSBzZWNvbmQuXG52YXIgY291bnRlcjtcblxuLy8gUmVtZW1iZXIgdGhlIGxhc3QgdGltZSBzaG9ydGlkIHdhcyBjYWxsZWQgaW4gY2FzZSBjb3VudGVyIGlzIG5lZWRlZC5cbnZhciBwcmV2aW91c1NlY29uZHM7XG5cbi8qKlxuICogR2VuZXJhdGUgdW5pcXVlIGlkXG4gKiBSZXR1cm5zIHN0cmluZyBpZFxuICovXG5mdW5jdGlvbiBidWlsZChjbHVzdGVyV29ya2VySWQpIHtcblxuICAgIHZhciBzdHIgPSAnJztcblxuICAgIHZhciBzZWNvbmRzID0gTWF0aC5mbG9vcigoRGF0ZS5ub3coKSAtIFJFRFVDRV9USU1FKSAqIDAuMDAxKTtcblxuICAgIGlmIChzZWNvbmRzID09PSBwcmV2aW91c1NlY29uZHMpIHtcbiAgICAgICAgY291bnRlcisrO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvdW50ZXIgPSAwO1xuICAgICAgICBwcmV2aW91c1NlY29uZHMgPSBzZWNvbmRzO1xuICAgIH1cblxuICAgIHN0ciA9IHN0ciArIGVuY29kZShhbHBoYWJldC5sb29rdXAsIHZlcnNpb24pO1xuICAgIHN0ciA9IHN0ciArIGVuY29kZShhbHBoYWJldC5sb29rdXAsIGNsdXN0ZXJXb3JrZXJJZCk7XG4gICAgaWYgKGNvdW50ZXIgPiAwKSB7XG4gICAgICAgIHN0ciA9IHN0ciArIGVuY29kZShhbHBoYWJldC5sb29rdXAsIGNvdW50ZXIpO1xuICAgIH1cbiAgICBzdHIgPSBzdHIgKyBlbmNvZGUoYWxwaGFiZXQubG9va3VwLCBzZWNvbmRzKTtcblxuICAgIHJldHVybiBzdHI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYnVpbGQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc2hvcnRpZC9saWIvYnVpbGQuanNcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcbnZhciBhbHBoYWJldCA9IHJlcXVpcmUoJy4vYWxwaGFiZXQnKTtcblxuZnVuY3Rpb24gaXNTaG9ydElkKGlkKSB7XG4gICAgaWYgKCFpZCB8fCB0eXBlb2YgaWQgIT09ICdzdHJpbmcnIHx8IGlkLmxlbmd0aCA8IDYgKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICB2YXIgY2hhcmFjdGVycyA9IGFscGhhYmV0LmNoYXJhY3RlcnMoKTtcbiAgICB2YXIgbGVuID0gaWQubGVuZ3RoO1xuICAgIGZvcih2YXIgaSA9IDA7IGkgPCBsZW47aSsrKSB7XG4gICAgICAgIGlmIChjaGFyYWN0ZXJzLmluZGV4T2YoaWRbaV0pID09PSAtMSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzU2hvcnRJZDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zaG9ydGlkL2xpYi9pcy12YWxpZC5qc1xuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IDA7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc2hvcnRpZC9saWIvdXRpbC9jbHVzdGVyLXdvcmtlci1pZC1icm93c2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxuICogQ29weXJpZ2h0IChjKSAgMjAxOCBXaXNlIFdpbGQgV2ViIC5cbiAqXG4gKiAgTUlUIExpY2Vuc2VcbiAqXG4gKiAgUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqICBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiAgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuICogIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqICBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqICBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqICBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiAgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqICBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuICogIFNPRlRXQVJFLlxuICpcbiAqIEBhdXRob3IgOiBOYXRoYW5hZWwgQnJhdW5cbiAqIEBjb250YWN0IDogY2FpcGlsYWJzQGdtYWlsLmNvbVxuICovXG5cbnZhciBpcyAgICAgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi91dGlscy9pcycpLFxuICAgIFNjb3BlICAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL1Njb3BlJyksXG4gICAgeyBrZXlXYWxrblNldCwga2V5V2Fsa25HZXQgfSA9IHJlcXVpcmUoJy4vdXRpbHMvdXRpbHMnKSxcbiAgICBFdmVudEVtaXR0ZXIgICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi91dGlscy9FbWl0dGVyJyksXG4gICAgVGFza1NlcXVlbmNlciAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vdXRpbHMvVGFza1NlcXVlbmNlcicpLFxuICAgIHNob3J0aWQgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlKCdzaG9ydGlkJyksXG4gICAgb2JqUHJvdG8gICAgICAgICAgICAgICAgICAgICA9IE9iamVjdC5nZXRQcm90b3R5cGVPZih7fSk7XG5cbmNsYXNzIFN0b3JlIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgICAvL3N0YXRpYyB1c2UgICAgICAgICAgICAgICAgICA9IFtdOy8vIG92ZXJyaWRhYmxlIGxpc3Qgb2Ygc291cmNlIHN0b3Jlc1xuICAgIHN0YXRpYyBmb2xsb3c7Ly8gb3ZlcnJpZGFibGUgbGlzdCBvZiBzdG9yZSB0aGF0IHdpbGwgYWxsb3cgcHVzaCBpZiB1cGRhdGVkXG4gICAgc3RhdGljIHJlcXVpcmU7XG4gICAgc3RhdGljIHN0YXRpY1Njb3BlICAgICAgICAgID0gbmV3IFNjb3BlKHt9LCB7IGlkOiBcInN0YXRpY1wiIH0pO1xuICAgIHN0YXRpYyBzdGF0ZSAgICAgICAgICAgICAgICA9IHVuZGVmaW5lZDsvLyBkZWZhdWx0IHN0YXRlXG4gICAgLyoqXG4gICAgICogaWYgcmV0YWluIGdvZXMgdG8gMCA6XG4gICAgICogZmFsc2UgdG8gbm90IGRlc3Ryb3ksXG4gICAgICogMCB0byBzeW5jIGF1dG8gZGVzdHJveVxuICAgICAqIE1zIHRvIGF1dG9kZXN0cm95IGFmdGVyIHRtIG1zIGlmIG5vIHJldGFpbiBoYXMgYmVlbiBjYWxsZWRcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbnxJbnR9XG4gICAgICovXG4gICAgICAgICAgIHN0YXRpYyBwZXJzaXN0ZW5jZVRtID0gZmFsc2U7XG4gICAgXG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0b3IsIHdpbGwgYnVpbGQgYSByZXNjb3BlIHN0b3JlXG4gICAgICpcbiAgICAgKiAoc2NvcGUsIHtyZXF1aXJlLHVzZSxhcHBseSxzdGF0ZSwgZGF0YX0pXG4gICAgICogKHNjb3BlKVxuICAgICAqXG4gICAgICogQHBhcmFtIHNjb3BlIHtvYmplY3R9IHNjb3BlIHdoZXJlIHRvIGZpbmQgdGhlIG90aGVyIHN0b3JlcyAoZGVmYXVsdCA6IHN0YXRpY1xuICAgICAqICAgICBzdGF0aWNTY29wZSApXG4gICAgICogQHBhcmFtIGtleXMge0FycmF5fSAocGFzc2VkIHRvIFN0b3JlOjptYXApIEV4IDogW1wic2Vzc2lvblwiLCBcIm90aGVyTmFtZWRTdG9yZTprZXlcIixcbiAgICAgKiAgICAgb3RoZXJTdG9yZS5hcyhcIm90aGVyS2V5XCIpXVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB2YXIgYXJneiAgICAgICAgID0gWyAuLi5hcmd1bWVudHMgXSxcbiAgICAgICAgICAgIF9zdGF0aWMgICAgICA9IHRoaXMuY29uc3RydWN0b3IsXG4gICAgICAgICAgICBzY29wZSAgICAgICAgPSBhcmd6WyAwIF0gaW5zdGFuY2VvZiBTY29wZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBhcmd6LnNoaWZ0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3N0YXRpYy5zY29wZSA/IFNjb3BlLmdldFNjb3BlKF9zdGF0aWMuc2NvcGUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBpcy5zdHJpbmcoYXJnelsgMCBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBTY29wZS5nZXRTY29wZShhcmd6LnNoaWZ0KCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF9zdGF0aWMuc3RhdGljU2NvcGUsXG4gICAgICAgICAgICBjZmcgICAgICAgICAgPSBhcmd6WyAwIF0gJiYgIWlzLmFycmF5KGFyZ3pbIDAgXSkgJiYgIWlzLnN0cmluZyhhcmd6WyAwIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA/IGFyZ3ouc2hpZnQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB7fSxcbiAgICAgICAgICAgIHRhc2tRdWV1ZSAgICA9IGlzLmFycmF5KGFyZ3pbIDAgXSkgPyBhcmd6LnNoaWZ0KCkgOiBudWxsLFxuICAgICAgICAgICAgbmFtZSAgICAgICAgID0gY2ZnLm5hbWUgfHwgX3N0YXRpYy5uYW1lLFxuICAgICAgICAgICAgd2F0Y2hzICAgICAgID0gY2ZnLnVzZSB8fCBbXSxcbiAgICAgICAgICAgIGFwcGx5ICAgICAgICA9IGNmZy5hcHBseSB8fCBudWxsLFxuICAgICAgICAgICAgaW5pdGlhbFN0YXRlID0gX3N0YXRpYy5zdGF0ZSB8fCBfc3RhdGljLmluaXRpYWxTdGF0ZSB8fCBfc3RhdGljLmRlZmF1bHRTdGF0ZSxcbiAgICAgICAgICAgIGFwcGxpZWQ7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl91aWQgPSBjZmcuX3VpZCB8fCBzaG9ydGlkLmdlbmVyYXRlKCk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9fcmV0YWlucyAgICA9IHsgYWxsOiAwIH07XG4gICAgICAgIHRoaXMuX19sb2NrcyAgICAgID0geyBhbGw6IDAgfTtcbiAgICAgICAgdGhpcy5fb25TdGFiaWxpemUgPSBbXTtcbiAgICAgICAgXG4gICAgICAgIC8vIGF1dG9EZXN0cm95VG1cbiAgICAgICAgdGhpcy5fYXV0b0Rlc3Ryb3kgICA9ICEhdGhpcy5fcGVyc2lzdGVuY2VUbTtcbiAgICAgICAgdGhpcy5fcGVyc2lzdGVuY2VUbSA9IGNmZy5wZXJzaXN0ZW5jZVRtIHx8IF9zdGF0aWMucGVyc2lzdGVuY2VUbSB8fCAoIGNmZy5hdXRvRGVzdHJveSB8fCBfc3RhdGljLmF1dG9EZXN0cm95ICkgJiYgNTtcbiAgICAgICAgdGhpcy5fY2ZnICAgICAgICAgICA9IGNmZztcbiAgICAgICAgaWYgKCBjZmcgJiYgY2ZnLm9uICkge1xuICAgICAgICAgICAgdGhpcy5vbihjZmcub24pO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICBcbiAgICAgICAgaWYgKCBzY29wZS5zdG9yZXMgKSB7XG4gICAgICAgICAgICB0aGlzLnNjb3BlT2JqID0gc2NvcGU7XG4gICAgICAgICAgICB0aGlzLnNjb3BlICAgID0gc2NvcGUuc3RvcmVzO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zY29wZU9iaiA9IG5ldyBTY29wZShzY29wZSk7XG4gICAgICAgICAgICB0aGlzLnNjb3BlICAgID0gc2NvcGUuc3RvcmVzO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvLyBzdGFuZGFyZGl6ZWQgc2NvcGUgYWNjZXNzXG4gICAgICAgIHRoaXMuJHNjb3BlICAgID0gdGhpcy5zY29wZU9iajtcbiAgICAgICAgdGhpcy4kc3RvcmVzICAgPSB0aGlzLnNjb3BlT2JqLnN0b3JlcztcbiAgICAgICAgdGhpcy4kYWN0aW9ucyAgPSB0aGlzLnNjb3BlT2JqLmFjdGlvbnM7XG4gICAgICAgIHRoaXMuJGRpc3BhdGNoID0gdGhpcy5zY29wZU9iai5kaXNwYXRjaC5iaW5kKHRoaXMuc2NvcGVPYmopO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fcmV2ICAgICA9IHRoaXMuY29uc3RydWN0b3IuX3JldiB8fCAwO1xuICAgICAgICB0aGlzLl9yZXZzICAgID0ge307XG4gICAgICAgIHRoaXMuc3RvcmVzICAgPSB7fTtcbiAgICAgICAgdGhpcy5fcmVxdWlyZSA9IFtdO1xuICAgICAgICB0aGlzLl9zb3VyY2VzID0gWyBuYW1lIF07XG4gICAgICAgIFxuICAgICAgICBpZiAoIGlzLmFycmF5KF9zdGF0aWMudXNlKSApIHtcbiAgICAgICAgICAgIHRoaXMuX3VzZSA9IFsgLi4ud2F0Y2hzLCAuLi4oIF9zdGF0aWMudXNlIHx8IFtdICkubWFwKFxuICAgICAgICAgICAgICAgIGtleSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCByZWYgPSBrZXkubWF0Y2goL14oXFwhPykoW15cXDpdKikoPzpcXDooLiopKT8kLyk7XG4gICAgICAgICAgICAgICAgICAgIGlmICggcmVmWyAxIF0gKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVmMiA9IHJlZlsgMiBdLnNwbGl0KCcuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9yZXF1aXJlLnB1c2gocmVmWyAzIF0gfHwgcmVmMlsgcmVmMi5sZW5ndGggLSAxIF0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZWZbIDIgXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApIF07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl91c2UgPSBbIC4uLndhdGNocywgLi4uKFxuICAgICAgICAgICAgICAgIF9zdGF0aWMudXNlID8gT2JqZWN0LmtleXMoX3N0YXRpYy51c2UpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZWYgPSBrZXkubWF0Y2goL14oXFwhPykoLiopJC8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWZbIDEgXSAmJiB0aGlzLl9yZXF1aXJlLnB1c2goX3N0YXRpYy51c2VbIGtleSBdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlZlsgMiBdICsgKCAoIF9zdGF0aWMudXNlWyBrZXkgXSA9PT0gdHJ1ZSApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJzonICsgX3N0YXRpYy51c2VbIGtleSBdICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IFtdXG4gICAgICAgICAgICApIF07XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmICggX3N0YXRpYy5yZXF1aXJlIClcbiAgICAgICAgICAgIHRoaXMuX3JlcXVpcmUucHVzaCguLi5fc3RhdGljLnJlcXVpcmUpO1xuICAgICAgICBpZiAoIGNmZy5yZXF1aXJlIClcbiAgICAgICAgICAgIHRoaXMuX3JlcXVpcmUucHVzaCguLi5jZmcucmVxdWlyZSk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9mb2xsb3dlcnMgPSBbXTtcbiAgICAgICAgdGhpcy5fY2hhbmdlc1NXID0gaW5pdGlhbFN0YXRlIHx8IHt9O1xuICAgICAgICB0aGlzLnN0YXRlICAgICAgPSBpbml0aWFsU3RhdGUgJiYge307XG4gICAgICAgIGlmICggYXBwbHkgKVxuICAgICAgICAgICAgdGhpcy5hcHBseSA9IGFwcGx5O1xuICAgICAgICBcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEluaXRpYWwgc3RhdGUgaXNuJ3QgZnVsbHkgaW5pdGlhbGl6ZWQgKCBjaGlsZHMgY29uc3RydWN0b3JzIGNhbiBzZXQgaXQgKVxuICAgICAgICAgKiBTY29wZSBiYXNlZCBpbnN0YW5jZSBoYXZlIHRhc2tRdWV1ZSB0byBkZWxheSBpbml0IHN5bmNocm9ub3VzbHksIGlmIG5vdFxuICAgICAgICAgKiBwcmVzZW50IHdlIHVzZSBzZXRUaW1lb3V0XG4gICAgICAgICAqL1xuICAgICAgICBpZiAoIHRhc2tRdWV1ZSApIHtcbiAgICAgICAgICAgIHRhc2tRdWV1ZS5wdXNoKHRoaXMuX2FmdGVyQ29uc3RydWN0b3IuYmluZCh0aGlzKSlcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgICAgICBzZXRUaW1lb3V0KHRoaXMuX2FmdGVyQ29uc3RydWN0b3IuYmluZCh0aGlzKSlcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBpbmNvbWluZyBzdGF0ZSAoIGZvciBpbW1lZGlhdGUgc3RhdGUgcmVsYXRpdmUgYWN0aW9ucyApXG4gICAgICogQHJldHVybnMge3t9fCp9XG4gICAgICovXG4gICAgZ2V0IG5leHRTdGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NoYW5nZXNTVyAmJiB7IC4uLnRoaXMuc3RhdGUsIC4uLnRoaXMuX2NoYW5nZXNTVyB9IHx8IHRoaXMuc3RhdGU7XG4gICAgfVxuICAgIFxuICAgIF9hZnRlckNvbnN0cnVjdG9yKCkge1xuICAgICAgICBsZXQgY2ZnICAgICAgICAgID0gdGhpcy5fY2ZnLFxuICAgICAgICAgICAgX3N0YXRpYyAgICAgID0gdGhpcy5jb25zdHJ1Y3RvcixcbiAgICAgICAgICAgIHNuYXBzaG90ICAgICA9IHRoaXMucmVzdG9yZSh1bmRlZmluZWQsIHRydWUpLFxuICAgICAgICAgICAgaW5pdGlhbFN0YXRlID0gdGhpcy5zdGF0ZSxcbiAgICAgICAgICAgIGluaXRpYWxEYXRhICA9IHRoaXMuZGF0YSxcbiAgICAgICAgICAgIGFwcGxpZWQ7XG4gICAgICAgIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKCBpbml0aWFsRGF0YSApXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhID0gaW5pdGlhbERhdGE7XG4gICAgICAgICAgICBlbHNlIGlmICggX3N0YXRpYy5kYXRhICE9PSB1bmRlZmluZWQgKVxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YSA9IHsgLi4uX3N0YXRpYy5kYXRhIH07XG4gICAgICAgICAgICBlbHNlIGlmICggY2ZnLmhhc093blByb3BlcnR5KFwiZGF0YVwiKSApXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhID0gY2ZnLmRhdGE7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmICggY2ZnLmhhc093blByb3BlcnR5KFwic3RhdGVcIikgJiYgY2ZnLnN0YXRlICE9PSB1bmRlZmluZWQgKVxuICAgICAgICAgICAgICAgIGluaXRpYWxTdGF0ZSA9IHsgLi4uaW5pdGlhbFN0YXRlLCAuLi5jZmcuc3RhdGUgfTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKCB0aGlzLmRhdGEgPT09IHVuZGVmaW5lZCApIHtcbiAgICAgICAgICAgICAgICBpZiAoIGluaXRpYWxTdGF0ZSB8fCB0aGlzLl91c2UubGVuZ3RoICkgey8vIHN5bmMgYXBwbHlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2hhbmdlc1NXID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgLi4udGhpcy5fY2hhbmdlc1NXLFxuICAgICAgICAgICAgICAgICAgICAgICAgLi4uKCBpbml0aWFsU3RhdGUgfHwge30gKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLnRoaXMuJHNjb3BlLm1hcCh0aGlzLCB0aGlzLl91c2UpXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUgICAgICA9IHt9O1xuICAgICAgICAgICAgICAgICAgICBpZiAoIHRoaXMuc2hvdWxkQXBwbHkodGhpcy5fY2hhbmdlc1NXKSAmJiB0aGlzLmRhdGEgPT09IHVuZGVmaW5lZCApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YSAgICAgICA9IHRoaXMuYXBwbHkodGhpcy5kYXRhLCB0aGlzLl9jaGFuZ2VzU1csIHRoaXMuX2NoYW5nZXNTVyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcHBsaWVkICAgICAgICAgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZSAgICAgID0gdGhpcy5fY2hhbmdlc1NXO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2hhbmdlc1NXID0ge307XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBhcHBsaWVkICAgICAgICAgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUgICAgICA9IHsvLyBhc3N1bWUgdGhpcyBzdGF0ZSBpcyBzeW5jIHdpdGggaW5pdGlhbCBkYXRhXG4gICAgICAgICAgICAgICAgICAgIC4uLnRoaXMuX2NoYW5nZXNTVyxcbiAgICAgICAgICAgICAgICAgICAgLi4uKCBpbml0aWFsU3RhdGUgfHwge30gKSxcbiAgICAgICAgICAgICAgICAgICAgLi4udGhpcy4kc2NvcGUubWFwKHRoaXMsIHRoaXMuX3VzZSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5fY2hhbmdlc1NXID0ge307XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCAoIHRoaXMuZGF0YSAhPT0gdW5kZWZpbmVkIHx8IGFwcGxpZWQgKSAmJiAhdGhpcy5fX2xvY2tzLmFsbCApIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YWJsZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLl9yZXYrKztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgaWYgKCAhX3N0YXRpYy5tYW5hZ2VkICYmICF0aGlzLnN0YXRlICYmICggIXRoaXMuX3VzZSB8fCAhdGhpcy5fdXNlLmxlbmd0aCApICkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIlJlU2NvcGUgc3RvcmUgJ1wiLCB0aGlzLm5hbWUsIFwiJyBoYXZlIG5vIGluaXRpYWwgZGF0YSwgc3RhdGUgb3IgdXNlLiBJdCBjYW4ndCBzdGFiaWxpemUuLi5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgIXRoaXMuX3N0YWJsZSAmJiB0aGlzLmVtaXQoJ3Vuc3RhYmxlJywgdGhpcy5zdGF0ZSk7XG4gICAgICAgIFxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBPdmVycmlkYWJsZSBtZXRob2QgdG8ga25vdyBpZiBhIGRhdGEgY2hhbmdlIHNob3VsZCBiZSBwcm9wYWcgdG8gdGhlIGxpc3RlbmluZ1xuICAgICAqIHN0b3JlcyAmIGNvbXBvbmVudHNcbiAgICAgKi9cbiAgICBzaG91bGRQcm9wYWcoIG5EYXRhcyApIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIFxuICAgIGhhc0RhdGFDaGFuZ2UoIG5EYXRhcyApIHtcbiAgICAgICAgdmFyIF9zdGF0aWMgPSB0aGlzLmNvbnN0cnVjdG9yLCByLFxuICAgICAgICAgICAgY0RhdGFzICA9IHRoaXMuZGF0YTtcbiAgICAgICAgciAgICAgICAgICAgPSAhY0RhdGFzICYmIG5EYXRhcyB8fCBjRGF0YXMgIT09IG5EYXRhcztcbiAgICAgICAgIXIgJiYgY0RhdGFzICYmIE9iamVjdC5rZXlzKGNEYXRhcykuZm9yRWFjaChcbiAgICAgICAgICAgICgga2V5ICkgPT4ge1xuICAgICAgICAgICAgICAgIHIgPSByIHx8ICggbkRhdGFzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA/IGNEYXRhc1sga2V5IF0gIT09IG5EYXRhc1sga2V5IF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDogY0RhdGFzICYmIGNEYXRhc1sga2V5IF0gKVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICAhciAmJiBuRGF0YXMgJiYgT2JqZWN0LmtleXMobkRhdGFzKS5mb3JFYWNoKFxuICAgICAgICAgICAgKCBrZXkgKSA9PiB7XG4gICAgICAgICAgICAgICAgciA9IHIgfHwgKCBuRGF0YXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgID8gY0RhdGFzWyBrZXkgXSAhPT0gbkRhdGFzWyBrZXkgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBjRGF0YXMgJiYgY0RhdGFzWyBrZXkgXSApXG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBPdmVycmlkYWJsZSBtZXRob2QgdG8ga25vdyBpZiBhIHN0YXRlIGNoYW5nZSBzaG91bGQgYmUgYXBwbGllZFxuICAgICAqL1xuICAgIHNob3VsZEFwcGx5KCBzdGF0ZSA9IHRoaXMuc3RhdGUgKSB7XG4gICAgICAgIHZhciBfc3RhdGljID0gdGhpcy5jb25zdHJ1Y3RvcjtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgISF0aGlzLmlzQ29tcGxldGUoc3RhdGUpXG4gICAgICAgICAgICAgICApICYmICggaXMuYXJyYXkoX3N0YXRpYy5mb2xsb3cpXG4gICAgICAgICAgICAgICAgICAgICAgPyBfc3RhdGljLmZvbGxvd1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZWR1Y2UoKCByLCBpICkgPT4gKCByIHx8IHN0YXRlICYmIHN0YXRlWyBpIF0gKSwgZmFsc2UpXG4gICAgICAgICAgICAgICAgICAgICAgOiBfc3RhdGljLmZvbGxvd1xuICAgICAgICAgICAgICAgICAgICAgICAgPyBPYmplY3Qua2V5cyhfc3RhdGljLmZvbGxvdylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlZHVjZSgoIHIsIGkgKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8fCBzdGF0ZSAmJiBpcy5mbihfc3RhdGljLmZvbGxvd1sgaSBdKSAmJiBfc3RhdGljLmZvbGxvd1sgaSBdLmNhbGwodGhpcywgc3RhdGVbIGkgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHx8IF9zdGF0aWMuZm9sbG93WyBpIF0gJiYgc3RhdGVbIGkgXSAhPT0gdGhpcy5zdGF0ZVsgaSBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIGZhbHNlKSA6IHRydWVcbiAgICAgICAgICAgICAgICk7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIE92ZXJyaWRhYmxlIGFwcGxpZXIgLyByZW1hcHBlclxuICAgICAqIElmIHN0YXRlIG9yIGxhc3RQdWJsaWNTdGF0ZSBhcmUgc2ltcGxlIGhhc2ggbWFwcyBhcHBseSB3aWxsIHJldHVybiB7Li4uZGF0YSxcbiAgICAgKiAuLi5zdGF0ZX0gaWYgbm90IGl0IHdpbGwgcmV0dXJuIHRoZSBsYXN0IHByaXZhdGUgc3RhdGVcbiAgICAgKiBAcGFyYW0gZGF0YVxuICAgICAqIEBwYXJhbSBzdGF0ZVxuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqL1xuICAgIGFwcGx5KCBkYXRhLCBzdGF0ZSwgY2hhbmdlcyApIHtcbiAgICAgICAgc3RhdGUgPSBzdGF0ZSB8fCB0aGlzLnN0YXRlO1xuICAgICAgICBcbiAgICAgICAgaWYgKCB0aGlzLnJlZmluZSApXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZWZpbmUoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgXG4gICAgICAgIGlmICggIWRhdGEgfHwgZGF0YS5fX3Byb3RvX18gIT09IG9ialByb3RvIHx8IHN0YXRlLl9fcHJvdG9fXyAhPT0gb2JqUHJvdG8gKVxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICByZXR1cm4geyAuLi5kYXRhLCAuLi5zdGF0ZSB9XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIEBkZXByZWNpYXRlZFxuICAgICAqIEBwYXJhbSBkYXRhXG4gICAgICogQHBhcmFtIHN0YXRlXG4gICAgICogQHBhcmFtIGNoYW5nZXNcbiAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgKi9cbiAgICByZWZpbmUoIGRhdGEsIHN0YXRlLCBjaGFuZ2VzICkge1xuICAgICAgICBzdGF0ZSA9IHN0YXRlIHx8IHRoaXMuc3RhdGU7XG4gICAgICAgIFxuICAgICAgICBpZiAoICFkYXRhIHx8IGRhdGEuX19wcm90b19fICE9PSBvYmpQcm90byB8fCBzdGF0ZS5fX3Byb3RvX18gIT09IG9ialByb3RvIClcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgcmV0dXJuIHsgLi4uZGF0YSwgLi4uc3RhdGUgfVxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBEZWJvdW5jZSB0aGlzIHN0b3JlIHByb3BhZ2F0aW9uICggJiByZWR1Y2luZyApXG4gICAgICogQHBhcmFtIGNiXG4gICAgICovXG4gICAgc3RhYmlsaXplKCBjYiApIHtcbiAgICAgICAgY2IgJiYgdGhpcy5vbmNlKCdzdGFibGUnLCBjYik7XG4gICAgICAgIHRoaXMuX3N0YWJsZSAmJiB0aGlzLmVtaXQoJ3Vuc3RhYmxlJywgdGhpcy5zdGF0ZSwgdGhpcy5kYXRhKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX3N0YWJsZSA9IGZhbHNlO1xuICAgICAgICBcbiAgICAgICAgaWYgKCB0aGlzLl9zdGFiaWxpemVyIClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX3N0YWJpbGl6ZXIgPSBUYXNrU2VxdWVuY2VyLnB1c2hUYXNrKHRoaXMsICdwdXNoU3RhdGUnKTtcbiAgICB9XG4gICAgXG4gICAgcmV0cmlldmUoIHBhdGgsIGkgPSAwLCBvYmogPSB0aGlzLmRhdGEgKSB7XG4gICAgICAgIHBhdGggPSBpcy5zdHJpbmcocGF0aCkgPyBwYXRoLnNwbGl0KCcuJykgOiBwYXRoO1xuICAgICAgICByZXR1cm4gIW9iaiB8fCAhcGF0aCB8fCAhcGF0aC5sZW5ndGhcbiAgICAgICAgICAgICAgID8gb2JqXG4gICAgICAgICAgICAgICA6IHBhdGgubGVuZ3RoID09IGkgKyAxXG4gICAgICAgICAgICAgICAgID8gb2JqWyBwYXRoWyBpIF0gXVxuICAgICAgICAgICAgICAgICA6IHRoaXMucmV0cmlldmUocGF0aCwgaSArIDEsIG9ialsgcGF0aFsgaSBdIF0pO1xuICAgIH1cbiAgICBcbiAgICBkaXNwYXRjaCggYWN0aW9uLCAuLi5hcmd6ICkge1xuICAgICAgICB0aGlzLnNjb3BlT2JqLmRpc3BhdGNoKGFjdGlvbiwgLi4uYXJneik7XG4gICAgfVxuICAgIFxuICAgIHRyaWdnZXIoIGFjdGlvbiwgLi4uYXJneiApIHtcbiAgICAgICAgbGV0IHsgYWN0aW9ucyB9ID0gdGhpcy5jb25zdHJ1Y3RvcjtcbiAgICAgICAgaWYgKCBhY3Rpb25zICYmIGFjdGlvbnNbIGFjdGlvbiBdICkge1xuICAgICAgICAgICAgbGV0IG5zID0gYWN0aW9uc1sgYWN0aW9uIF0uY2FsbCh0aGlzLCAuLi5hcmd6KTtcbiAgICAgICAgICAgIG5zICYmIHRoaXMuc2V0U3RhdGUobnMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIFB1bGwgc3RvcmVzIGluIHRoZSBwcml2YXRlIHN0YXRlXG4gICAgICogQHBhcmFtIHN0b3JlcyAge0FycmF5fSAocGFzc2VkIHRvIFN0b3JlOjptYXApIEV4IDogW1wic2Vzc2lvblwiLFxuICAgICAqICAgICBcIm90aGVyTmFtZWRTdG9yZTprZXlcIiwgb3RoZXJTdG9yZS5hcyhcIm90aGVyS2V5XCIpXVxuICAgICAqL1xuICAgIHB1bGwoIHN0b3JlcywgZG9XYWl0LCBvcmlnaW4gKSB7XG4gICAgICAgIGxldCBpbml0aWFsT3V0cHV0cyA9IHRoaXMuc2NvcGVPYmoubWFwKHRoaXMsIHN0b3Jlcyk7XG4gICAgICAgIGlmICggZG9XYWl0ICkge1xuICAgICAgICAgICAgdGhpcy53YWl0KCk7XG4gICAgICAgICAgICBzdG9yZXMuZm9yRWFjaCgoIHMgKSA9PiB0aGlzLnNjb3BlWyBzIF0gJiYgdGhpcy53YWl0KHRoaXMuc2NvcGVbIHMgXSkpO1xuICAgICAgICAgICAgdGhpcy5yZWxlYXNlKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGluaXRpYWxPdXRwdXRzO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBTZXQgJiBQdXNoIHRoZSByZXN1bHQgZGF0YSB0byBmb2xsb3dlcnMgaWYgc3RhYmxlXG4gICAgICogQHBhcmFtIGNiXG4gICAgICovXG4gICAgcHVzaCggZGF0YSwgZm9yY2UsIGNiICkge1xuICAgICAgICBjYiAgICA9IGZvcmNlID09PSB0cnVlID8gY2IgOiBmb3JjZTtcbiAgICAgICAgZm9yY2UgPSBmb3JjZSA9PT0gdHJ1ZTtcbiAgICAgICAgaWYgKCAhZm9yY2UgJiZcbiAgICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgICF0aGlzLmhhc0RhdGFDaGFuZ2UoZGF0YSlcbiAgICAgICAgICAgICApXG4gICAgICAgICkge1xuICAgICAgICAgICAgY2IgJiYgY2IoKTtcbiAgICAgICAgICAgIGlmICggIXRoaXMuX19sb2Nrcy5hbGwgKSB7XG4gICAgICAgICAgICAgICAgbGV0IHN0YWJsZSAgID0gdGhpcy5fc3RhYmxlO1xuICAgICAgICAgICAgICAgIHRoaXMuX3N0YWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgIXN0YWJsZSAmJiB0aGlzLmVtaXQoJ3N0YWJsZScsIHRoaXMuc3RhdGUsIHRoaXMuZGF0YSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fc3RhYmlsaXplciA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgICAgIHRoaXMud2FpdCgpO1xuICAgICAgICB0aGlzLnJlbGVhc2UoY2IpO1xuICAgICAgICBcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogQ2FsbCB0aGUgYXBwbHkgZm4gdXNpbmcgdGhlIGN1cnJlbnQgYWNjdW11bGF0ZWQgc3RhdGUgdXBkYXRlIHRoZW4sIHB1c2ggdGhlXG4gICAgICogcmVzdWx0aW5nIGRhdGEgaWYgc3RhYmxlXG4gICAgICogQHBhcmFtIGZvcmNlXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgcHVzaFN0YXRlKCBmb3JjZSApIHtcbiAgICAgICAgXG4gICAgICAgIGlmICggIWZvcmNlICYmICF0aGlzLl9jaGFuZ2VzU1cgJiYgdGhpcy5kYXRhIClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgXG4gICAgICAgIHZhciBuZXh0U3RhdGUgPSB0aGlzLl9uZXh0U3RhdGUgfHwgeyAuLi50aGlzLnN0YXRlLCAuLi4oIHRoaXMuX2NoYW5nZXNTVyB8fCB7fSApIH0sXG4gICAgICAgICAgICBuZXh0RGF0YSAgPSB0aGlzLmFwcGx5KHRoaXMuZGF0YSwgbmV4dFN0YXRlLCB0aGlzLl9jaGFuZ2VzU1cpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fc3RhYmlsaXplciA9IG51bGw7XG4gICAgICAgIHRoaXMuc3RhdGUgICAgICAgPSBuZXh0U3RhdGU7XG4gICAgICAgIHRoaXMuX2NoYW5nZXNTVyAgPSBudWxsO1xuICAgICAgICBcbiAgICAgICAgaWYgKCAhZm9yY2UgJiZcbiAgICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgICF0aGlzLmhhc0RhdGFDaGFuZ2UobmV4dERhdGEpXG4gICAgICAgICAgICAgKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIGlmICggIXRoaXMuX19sb2Nrcy5hbGwgKSB7XG4gICAgICAgICAgICAgICAgbGV0IHN0YWJsZSAgID0gdGhpcy5fc3RhYmxlO1xuICAgICAgICAgICAgICAgIHRoaXMuX3N0YWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgIXN0YWJsZSAmJiB0aGlzLmVtaXQoJ3N0YWJsZScsIHRoaXMuc3RhdGUsIHRoaXMuZGF0YSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fc3RhYmlsaXplciA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRoaXMuZGF0YSA9IG5leHREYXRhO1xuICAgICAgICB0aGlzLndhaXQoKTtcbiAgICAgICAgdGhpcy5yZWxlYXNlKCk7XG4gICAgICAgIFxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBBZGQgJ3BTdGF0ZScgdG8gdGhlIGN1cnJlbnQgYWNjdW11bGF0ZWQgc3RhdGUgdXBkYXRlc1xuICAgICAqICYgd2FpdCBzb3VyY2Ugc3RvcmVzIHN0YWJpbGl6YXRpb24gYmVmb3JlIHB1c2hpbmcgdGhlc2Ugc3RhdGUgdXBkYXRlc1xuICAgICAqIEBwYXJhbSBwU3RhdGVcbiAgICAgKiBAcGFyYW0gY2JcbiAgICAgKi9cbiAgICBzZXRTdGF0ZSggcFN0YXRlLCBjYiwgc3luYyApIHtcbiAgICAgICAgdmFyIGkgICAgICAgPSAwLCBjaGFuZ2UsXG4gICAgICAgICAgICBjaGFuZ2VzID0gdGhpcy5fY2hhbmdlc1NXID0gdGhpcy5fY2hhbmdlc1NXIHx8IHt9O1xuICAgICAgICBmb3IgKCB2YXIgayBpbiBwU3RhdGUgKVxuICAgICAgICAgICAgaWYgKCAhdGhpcy5zdGF0ZVxuICAgICAgICAgICAgICAgICB8fCBjaGFuZ2VzLmhhc093blByb3BlcnR5KGspLy8gdG9kb1xuICAgICAgICAgICAgICAgICAmJiAoXG4gICAgICAgICAgICAgICAgICAgICBwU3RhdGVbIGsgXSAhPT0gY2hhbmdlc1sgayBdXG4gICAgICAgICAgICAgICAgICkgfHwgcFN0YXRlLmhhc093blByb3BlcnR5KGspXG4gICAgICAgICAgICAgICAgICYmIChcbiAgICAgICAgICAgICAgICAgcFN0YXRlWyBrIF0gIT09IHRoaXMuc3RhdGVbIGsgXVxuICAgICAgICAgICAgICAgICB8fFxuICAgICAgICAgICAgICAgICAoIHRoaXMuc3RhdGVbIGsgXSAmJiBwU3RhdGVbIGsgXSAmJiAoIHBTdGF0ZVsgayBdLl9yZXYgIT0gdGhpcy5fcmV2c1sgayBdICkgKS8vIHJldi9oYXNoIHVwZGF0ZVxuICAgICAgICAgICAgICAgICApICkge1xuICAgICAgICAgICAgICAgIGNoYW5nZSAgICAgICAgICA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5fcmV2c1sgayBdID0gcFN0YXRlWyBrIF0gJiYgcFN0YXRlWyBrIF0uX3JldiB8fCB0cnVlO1xuICAgICAgICAgICAgICAgIGNoYW5nZXNbIGsgXSAgICA9IHBTdGF0ZVsgayBdO1xuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdGhpcy5fbmV4dFN0YXRlID0geyAuLi50aGlzLnN0YXRlLCAuLi5jaGFuZ2VzIH07XG4gICAgICAgIGlmICggIXRoaXMuc2hvdWxkQXBwbHkodGhpcy5fbmV4dFN0YXRlKSApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKCBzeW5jICkge1xuICAgICAgICAgICAgdGhpcy5wdXNoU3RhdGUoKTtcbiAgICAgICAgICAgIGNiICYmIGNiKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoIGNoYW5nZSApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YWJpbGl6ZShjYik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGNiICYmIGNiKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSB0aGUgY3VycmVudCBzdGF0ZSAmIHB1c2ggaXRcbiAgICAgKiBAcGFyYW0gcFN0YXRlXG4gICAgICogQHBhcmFtIGNiXG4gICAgICovXG4gICAgc2V0U3RhdGVTeW5jKCBwU3RhdGUgKSB7XG4gICAgICAgIHZhciBpICAgICAgID0gMCwgY2hhbmdlLFxuICAgICAgICAgICAgY2hhbmdlcyA9IHRoaXMuX2NoYW5nZXNTVyA9IHRoaXMuX2NoYW5nZXNTVyB8fCB7fTtcbiAgICAgICAgZm9yICggdmFyIGsgaW4gcFN0YXRlIClcbiAgICAgICAgICAgIGlmICggIXRoaXMuc3RhdGUgfHwgcFN0YXRlLmhhc093blByb3BlcnR5KGspXG4gICAgICAgICAgICAgICAgICYmIChcbiAgICAgICAgICAgICAgICAgcFN0YXRlWyBrIF0gIT0gdGhpcy5zdGF0ZVsgayBdXG4gICAgICAgICAgICAgICAgIHx8XG4gICAgICAgICAgICAgICAgICggdGhpcy5zdGF0ZVsgayBdICYmIHBTdGF0ZVsgayBdICYmICggcFN0YXRlWyBrIF0uX3JldiAhPSB0aGlzLl9yZXZzWyBrIF0gKSApLy8gcmV2L2hhc2ggdXBkYXRlXG4gICAgICAgICAgICAgICAgICkgKSB7XG4gICAgICAgICAgICAgICAgY2hhbmdlICAgICAgICAgID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLl9yZXZzWyBrIF0gPSBwU3RhdGVbIGsgXSAmJiBwU3RhdGVbIGsgXS5fcmV2IHx8IHRydWU7XG4gICAgICAgICAgICAgICAgY2hhbmdlc1sgayBdICAgID0gcFN0YXRlWyBrIF07XG4gICAgICAgICAgICB9XG4gICAgICAgIHRoaXMuc2hvdWxkQXBwbHkoeyAuLi4oIHRoaXMuc3RhdGUgfHwge30gKSwgLi4uY2hhbmdlcyB9KSAmJiB0aGlzLnB1c2hTdGF0ZSgpO1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBnZXQgYSBzdG9yZS1rZXkgcGFpciBmb3IgU3RvcmU6Om1hcFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gICAgICogQHJldHVybnMge3tzdG9yZTogU3RvcmUsIG5hbWU6ICp9fVxuICAgICAqL1xuICAgIGFzKCBuYW1lICkge1xuICAgICAgICByZXR1cm4geyBzdG9yZTogdGhpcywgbmFtZSB9O1xuICAgIH1cbiAgICBcbiAgICBvbiggbGlzdHMgKSB7XG4gICAgICAgIGlmICggIWlzLnN0cmluZyhsaXN0cykgJiYgbGlzdHMgKVxuICAgICAgICAgICAgT2JqZWN0LmtleXMobGlzdHMpLmZvckVhY2goayA9PiBzdXBlci5vbihrLCBsaXN0c1sgayBdKSk7XG4gICAgICAgIGVsc2Ugc3VwZXIub24oLi4uYXJndW1lbnRzKTtcbiAgICB9XG4gICAgXG4gICAgcmVtb3ZlTGlzdGVuZXIoIGxpc3RzICkge1xuICAgICAgICBpZiAoICFpcy5zdHJpbmcobGlzdHMpICYmIGxpc3RzIClcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGxpc3RzKS5mb3JFYWNoKGsgPT4gc3VwZXIucmVtb3ZlTGlzdGVuZXIoaywgbGlzdHNbIGsgXSkpO1xuICAgICAgICBlbHNlIHN1cGVyLnJlbW92ZUxpc3RlbmVyKC4uLmFyZ3VtZW50cyk7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIGlzIGNvbXBsZXRlIChhbGwgcmVxdWllcmVkIGtleXMgYXJlIGhlcmUpXG4gICAgICogQHJldHVybnMgYm9vbFxuICAgICAqL1xuICAgIGlzQ29tcGxldGUoIHN0YXRlID0gdGhpcy5zdGF0ZSApIHtcbiAgICAgICAgdmFyIF9zdGF0aWMgPSB0aGlzLmNvbnN0cnVjdG9yO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgIXRoaXMuX3JlcXVpcmVcbiAgICAgICAgICAgIHx8ICF0aGlzLl9yZXF1aXJlLmxlbmd0aFxuICAgICAgICAgICAgfHwgc3RhdGUgJiYgdGhpcy5fcmVxdWlyZS5yZWR1Y2UoXG4gICAgICAgICAgICAgICAgKCByLCBrZXkgKSA9PiAoIHIgJiYgc3RhdGVbIGtleSBdICksXG4gICAgICAgICAgICAgICAgdHJ1ZVxuICAgICAgICAgICAgKVxuICAgICAgICApO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBpcyBzdGFibGVcbiAgICAgKiBAcmV0dXJucyBib29sXG4gICAgICovXG4gICAgaXNTdGFibGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zdGFibGU7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIFNlcmlhbGl6ZSBzdGF0ZSAmIGRhdGEgd2l0aCBzb3VyY2VzIHJlZnNcbiAgICAgKiBAcmV0dXJucyBib29sXG4gICAgICovXG4gICAgc2VyaWFsaXplKCBjZmcgPSB7fSwgb3V0cHV0ID0ge30gKSB7XG4gICAgICAgIGxldCByZWZzID1cbiAgICAgICAgICAgICAgICAhY2ZnLm5vcmVmcyAmJiBpcy5hcnJheSh0aGlzLl91c2UpICYmIHRoaXMuX3VzZS5yZWR1Y2UoXG4gICAgICAgICAgICAgICAgKCBtYXAsIGtleSApID0+IHsvL3RvZG9cbiAgICAgICAgICAgICAgICAgICAgbGV0IG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlhcywgcGF0aCxfa2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmU7XG4gICAgICAgICAgICAgICAgICAgIGlmICgga2V5LnN0b3JlICYmIGtleS5uYW1lICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpYXMgPSBuYW1lID0ga2V5Lm5hbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9yZSA9IGtleS5zdG9yZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICggaXMuZm4oa2V5KSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUgPSBhbGlhcyA9IGtleS5uYW1lIHx8IGtleS5kZWZhdWx0TmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlID0ga2V5O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgX2tleSAgPSBrZXkubWF0Y2goLyhbXFx3X10rKSgoPzpcXC5bXFx3X10rKSopKD86XFw6KFtcXHdfXSspKT8vKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUgID0gX2tleVsgMSBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aCAgPSBfa2V5WyAyIF0gJiYgX2tleVsgMiBdLnN1YnN0cigxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlID0gdGhpcy5zY29wZU9iai5zdG9yZXNbIF9rZXlbIDEgXSBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpYXMgPSBfa2V5WyAzIF0gfHwgcGF0aCAmJiBwYXRoLm1hdGNoKC8oW15cXC5dKikkLylbIDAgXSB8fCBfa2V5WyAxIF07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKCBzdG9yZSAmJiAhc3RvcmUuc2NvcGVPYmouXy5pc0xvY2FsSWQgKVxuICAgICAgICAgICAgICAgICAgICAgICAgbWFwWyBhbGlhcyBdID0gc3RvcmUuc2NvcGVPYmouX2lkICsgJy8nICsgbmFtZTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1hcDtcbiAgICAgICAgICAgICAgICB9LCB7fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgfHwge307XG4gICAgICAgIFxuICAgICAgICBrZXlXYWxrblNldChcbiAgICAgICAgICAgIG91dHB1dCxcbiAgICAgICAgICAgICggdGhpcy5zY29wZU9iai5faWQgKyAnLycgKyB0aGlzLm5hbWUgKSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0ZTogdGhpcy5zdGF0ZSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjZmcubm9yZWZzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA/IHsgLi4udGhpcy5zdGF0ZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICA6IE9iamVjdC5rZXlzKHRoaXMuc3RhdGUpLnJlZHVjZSgoIGgsIGsgKSA9PiAoICFyZWZzWyBrIF0gJiYgKCBoWyBrIF0gPSB0aGlzLnN0YXRlWyBrIF0gKSwgaCApLCB7fSlcbiAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBkYXRhIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGEuX19wcm90b19fID09PSBvYmpQcm90byA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGEgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgKCBpcy5ib29sKHRoaXMuZGF0YSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfHwgaXMubnVtYmVyKHRoaXMuZGF0YSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfHwgaXMuc3RyaW5nKHRoaXMuZGF0YSkgKSAmJiB0aGlzLmRhdGFcbiAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICB8fCB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAsXG4gICAgICAgICAgICAgICAgcmVmc1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gb3V0cHV0O1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiByZXN0b3JlIHN0YXRlICYgZGF0YVxuICAgICAqIEByZXR1cm5zIGJvb2xcbiAgICAgKi9cbiAgICByZXN0b3JlKCBzbmFwc2hvdCwgaW1tZWRpYXRlICkge1xuICAgICAgICBzbmFwc2hvdCA9IHNuYXBzaG90XG4gICAgICAgICAgICAgICAgICAgJiYga2V5V2Fsa25HZXQoc25hcHNob3QsIHRoaXMuc2NvcGVPYmouX2lkICsgJy8nICsgdGhpcy5uYW1lKVxuICAgICAgICAgICAgICAgICAgIHx8IHRoaXMuJHNjb3BlLnRha2VTbmFwc2hvdEJ5S2V5KHRoaXMuc2NvcGVPYmouX2lkICsgJy8nICsgdGhpcy5uYW1lKTtcbiAgICAgICAgXG4gICAgICAgIGlmICggIXNuYXBzaG90IClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgXG4gICAgICAgIGlmICggc25hcHNob3QgKSB7XG4gICAgICAgICAgICBpZiAoICF0aGlzLmlzU3RhYmxlKCkgJiYgIWltbWVkaWF0ZSApXG4gICAgICAgICAgICAgICAgdGhpcy50aGVuKCgpID0+IHJlc3RvcmUoc25hcHNob3QpKVxuICAgICAgICAgICAgbGV0IHNuYXA7XG4gICAgICAgICAgICB0aGlzLnN0YXRlID0geyAuLi5zbmFwc2hvdC5zdGF0ZSB9O1xuICAgICAgICAgICAgT2JqZWN0LmtleXMoc25hcHNob3QucmVmcykuZm9yRWFjaChcbiAgICAgICAgICAgICAgICAoIGtleSApID0+IHsvL3RvZG9cbiAgICAgICAgICAgICAgICAgICAgaWYgKCBzbmFwID0gdGhpcy4kc2NvcGUuZ2V0U25hcHNob3RCeUtleShzbmFwc2hvdC5yZWZzWyBrZXkgXSkgKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZVsga2V5IF0gPSBzbmFwLmRhdGE7XG4gICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2Fybignbm90IGZvdW5kIDogJywga2V5LCBzbmFwLnJlZnNbIGtleSBdKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5kYXRhID0gc25hcHNob3QuZGF0YTtcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIFVuIGJpbmQgdGhpcyBzdG9yZSBvZmYgdGhlIGdpdmVuIGNvbXBvbmVudC1rZXlcbiAgICAgKiBAcGFyYW0gb2JqXG4gICAgICogQHBhcmFtIGtleVxuICAgICAqIEByZXR1cm5zIHtBcnJheS48Kj59XG4gICAgICovXG4gICAgdW5CaW5kKCBvYmosIGtleSwgcGF0aCApIHtcbiAgICAgICAgdmFyIGZvbGxvd2VycyA9IHRoaXMuX2ZvbGxvd2VycyxcbiAgICAgICAgICAgIGkgICAgICAgICA9IGZvbGxvd2VycyAmJiBmb2xsb3dlcnMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGZvbGxvd2VycyAmJiBpLS0gKVxuICAgICAgICAgICAgaWYgKCBmb2xsb3dlcnNbIGkgXVsgMCBdID09PSBvYmogJiYgZm9sbG93ZXJzWyBpIF1bIDEgXSA9PT0ga2V5ICYmIGZvbGxvd2Vyc1sgaSBdWyAyIF0gPT09IHBhdGggKVxuICAgICAgICAgICAgICAgIHJldHVybiBmb2xsb3dlcnMuc3BsaWNlKGksIDEpO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBCaW5kIHRoaXMgc3RvcmUgY2hhbmdlcyB0byB0aGUgZ2l2ZW4gY29tcG9uZW50LWtleVxuICAgICAqIEBwYXJhbSBvYmoge1JlYWN0LkNvbXBvbmVudHxTdG9yZXxmdW5jdGlvbilcbiAgICAgKiBAcGFyYW0ga2V5IHtzdHJpbmd9IG9wdGlvbmFsIGtleSB3aGVyZSB0byBtYXAgdGhlIHB1YmxpYyBzdGF0ZVxuICAgICAqL1xuICAgIGJpbmQoIG9iaiwga2V5LCBzZXRJbml0aWFsID0gdHJ1ZSwgcGF0aCApIHtcbiAgICAgICAgdGhpcy5fZm9sbG93ZXJzLnB1c2goWyBvYmosIGtleSwgcGF0aCBdKTtcbiAgICAgICAgaWYgKCBzZXRJbml0aWFsICYmIHRoaXMuZGF0YSAmJiB0aGlzLl9zdGFibGUgKSB7XG4gICAgICAgICAgICBsZXQgZGF0YSA9IHBhdGggPyB0aGlzLnJldHJpZXZlKHBhdGgpIDogdGhpcy5kYXRhO1xuICAgICAgICAgICAgaWYgKCB0eXBlb2Ygb2JqICE9IFwiZnVuY3Rpb25cIiApIHtcbiAgICAgICAgICAgICAgICBpZiAoIGtleSApIG9iai5zZXRTdGF0ZSh7IFsga2V5IF06IGRhdGEgfSk7XG4gICAgICAgICAgICAgICAgZWxzZSBvYmouc2V0U3RhdGUoZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBvYmooZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogb25jZSgnc3RhYmxlJywgY2IpXG4gICAgICogQHBhcmFtIG9iaiB7UmVhY3QuQ29tcG9uZW50fFN0b3JlfGZ1bmN0aW9uKVxuICAgICAqIEBwYXJhbSBrZXkge3N0cmluZ30gb3B0aW9uYWwga2V5IHdoZXJlIHRvIG1hcCB0aGUgcHVibGljIHN0YXRlXG4gICAgICovXG4gICAgdGhlbiggY2IgKSB7XG4gICAgICAgIGlmICggdGhpcy5fc3RhYmxlIClcbiAgICAgICAgICAgIHJldHVybiBjYih0aGlzLmRhdGEpO1xuICAgICAgICB0aGlzLm9uY2UoJ3N0YWJsZScsIGUgPT4gY2IodGhpcy5kYXRhKSk7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIEFkZCBhIGxvY2sgc28gdGhlIHN0b3JlIHdpbGwgbm90IHByb3BhZyBpdCBkYXRhIHVudGlsbCByZWxlYXNlKCkgaXMgY2FsbFxuICAgICAqIEBwYXJhbSBwcmV2aW91cyB7U3RvcmV8bnVtYmVyfEFycmF5fSBAb3B0aW9uYWwgd2YgdG8gd2FpdCwgcmVsZWFzZXMgdG8gd2FpdCBvclxuICAgICAqICAgICBhcnJheSBvZiBzdHVmZiB0byB3YWl0XG4gICAgICogQHJldHVybnMge3RoaXN9XG4gICAgICovXG4gICAgd2FpdCggcHJldmlvdXMgKSB7XG4gICAgICAgIGlmICggdHlwZW9mIHByZXZpb3VzID09IFwibnVtYmVyXCIgKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX19sb2Nrcy5hbGwgKz0gcHJldmlvdXM7XG4gICAgICAgIGlmICggaXMuYXJyYXkocHJldmlvdXMpIClcbiAgICAgICAgICAgIHJldHVybiBwcmV2aW91cy5tYXAodGhpcy53YWl0LmJpbmQodGhpcykpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fc3RhYmxlICYmIHRoaXMuZW1pdCgndW5zdGFibGUnLCB0aGlzLnN0YXRlLCB0aGlzLmRhdGEpO1xuICAgICAgICB0aGlzLl9zdGFibGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fX2xvY2tzLmFsbCsrO1xuICAgICAgICBcbiAgICAgICAgbGV0IHJlYXNvbiA9IGlzLnN0cmluZyhwcmV2aW91cykgPyBwcmV2aW91cyA6IG51bGw7XG4gICAgICAgIGlmICggcmVhc29uICkge1xuICAgICAgICAgICAgdGhpcy5fX2xvY2tzWyByZWFzb24gXSA9IHRoaXMuX19sb2Nrc1sgcmVhc29uIF0gfHwgMDtcbiAgICAgICAgICAgIHRoaXMuX19sb2Nrc1sgcmVhc29uIF0rKztcbiAgICAgICAgfVxuICAgICAgICBpZiAoIHByZXZpb3VzICYmIGlzLmZuKHByZXZpb3VzLnRoZW4pICkge1xuICAgICAgICAgICAgcHJldmlvdXMudGhlbih0aGlzLnJlbGVhc2UuYmluZCh0aGlzLCBudWxsKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIERlY3JlYXNlIGxvY2tzIGZvciB0aGlzIHN0b3JlLCBpZiBpdCByZWFjaCAwICxcbiAgICAgKiBpdCB3aWxsIGJlIHByb3BhZ2F0ZWQgdG8gdGhlIGZvbGxvd2VycyxcbiAgICAgKiB0aGVuLCBhbGwgc3R1ZmYgcGFzc2VkIHRvIFwidGhlblwiIGNhbGwgYmFjayB3aWxsIGJlIGV4ZWMgLyByZWxlYXNlZFxuICAgICAqIEBwYXJhbSBkZXN5bmNcbiAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgKi9cbiAgICByZWxlYXNlKCByZWFzb24sIGNiICkge1xuICAgICAgICB2YXIgX3N0YXRpYyA9IHRoaXMuY29uc3RydWN0b3IsIG1lID0gdGhpcztcbiAgICAgICAgbGV0IGkgICAgICAgPSAwLCB3YXNTdGFibGUgPSB0aGlzLl9zdGFibGU7XG4gICAgICAgIFxuICAgICAgICBpZiAoIGlzLmZuKHJlYXNvbikgKSB7XG4gICAgICAgICAgICBjYiAgICAgPSByZWFzb247XG4gICAgICAgICAgICByZWFzb24gPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAoIHJlYXNvbiApIHtcbiAgICAgICAgICAgIGlmICggdGhpcy5fX2xvY2tzWyByZWFzb24gXSA9PSAwIClcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiUmVsZWFzZSBtb3JlIHRoYW4gbG9ja2luZyAhXCIsIHJlYXNvbik7XG4gICAgICAgICAgICB0aGlzLl9fbG9ja3NbIHJlYXNvbiBdID0gdGhpcy5fX2xvY2tzWyByZWFzb24gXSB8fCAwO1xuICAgICAgICAgICAgdGhpcy5fX2xvY2tzWyByZWFzb24gXS0tO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAoICFyZWFzb24gJiYgdGhpcy5fX2xvY2tzLmFsbCA9PSAwIClcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJSZWxlYXNlIG1vcmUgdGhhbiBsb2NraW5nICFcIik7XG4gICAgICAgIFxuICAgICAgICBpZiAoICEtLXRoaXMuX19sb2Nrcy5hbGwgJiYgdGhpcy5pc0NvbXBsZXRlKCkgKSB7XG4gICAgICAgICAgICBsZXQgcHJvcGFnICAgPSB0aGlzLnNob3VsZFByb3BhZyh0aGlzLmRhdGEpO1xuICAgICAgICAgICAgdGhpcy5fc3RhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIHByb3BhZyAmJiB0aGlzLl9yZXYrKzsvL1xuICAgICAgICAgICAgaWYgKCBwcm9wYWcgJiYgdGhpcy5fZm9sbG93ZXJzLmxlbmd0aCApXG4gICAgICAgICAgICAgICAgdGhpcy5fZm9sbG93ZXJzLmZvckVhY2goZnVuY3Rpb24gcHJvcGFnKCBmb2xsb3dlciApIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSBmb2xsb3dlclsgMiBdID8gbWUucmV0cmlldmUoZm9sbG93ZXJbIDIgXSkgOiBtZS5kYXRhO1xuICAgICAgICAgICAgICAgICAgICAvL2lmICggIWRhdGEgKSByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpZiAoIHR5cGVvZiBmb2xsb3dlclsgMCBdID09IFwiZnVuY3Rpb25cIiApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbGxvd2VyWyAwIF0oZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NiICYmIGkrKztcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbGxvd2VyWyAwIF0uc2V0U3RhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKCBmb2xsb3dlclsgMSBdICkgPyB7IFsgZm9sbG93ZXJbIDEgXSBdOiBkYXRhIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGRhdGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2NiICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAoKSA9PiAoISgtLWkpICYmIGNiKCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8pXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvL2Vsc2VcbiAgICAgICAgICAgICF3YXNTdGFibGUgJiYgdGhpcy5lbWl0KCdzdGFibGUnLCB0aGlzLmRhdGEpO1xuICAgICAgICAgICAgcHJvcGFnICYmIHRoaXMuZW1pdCgndXBkYXRlJywgdGhpcy5kYXRhKTtcbiAgICAgICAgICAgIGNiICYmIGNiKClcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGNiICYmIHRoaXMudGhlbihjYik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBcbiAgICBwcm9wYWcoIGRhdGEgKSB7XG4gICAgICAgIHRoaXMuZW1pdCgndXBkYXRlJywgZGF0YSk7XG4gICAgfVxuICAgIFxuICAgIHJldGFpbiggcmVhc29uICkge1xuICAgICAgICB0aGlzLl9fcmV0YWlucy5hbGwrKztcbiAgICAgICAgaWYgKCByZWFzb24gKSB7XG4gICAgICAgICAgICB0aGlzLl9fcmV0YWluc1sgcmVhc29uIF0gPSB0aGlzLl9fcmV0YWluc1sgcmVhc29uIF0gfHwgMDtcbiAgICAgICAgICAgIHRoaXMuX19yZXRhaW5zWyByZWFzb24gXSsrO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGRpc3Bvc2UoIHJlYXNvbiApIHtcbiAgICAgICAgLy9jb25zb2xlLndhcm4oXCJkaXNwb3NlXCIsIHJlYXNvbiwgdGhpcy5fX3JldGFpbnMpO1xuICAgICAgICBpZiAoIHJlYXNvbiApIHtcbiAgICAgICAgICAgIGlmICggIXRoaXMuX19yZXRhaW5zWyByZWFzb24gXSApXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRGlzcG9zZSBtb3JlIHRoYW4gcmV0YWluaW5nIDogXCIgKyByZWFzb24pO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLl9fcmV0YWluc1sgcmVhc29uIF0tLTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIHRoaXMuX19yZXRhaW5zLmFsbCA9PSAwIClcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkRpc3Bvc2UgbW9yZSB0aGFuIHJldGFpbmluZyAhXCIpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fX3JldGFpbnMuYWxsLS07XG4gICAgICAgIFxuICAgICAgICBpZiAoICF0aGlzLl9fcmV0YWlucy5hbGwgKSB7XG4gICAgICAgICAgICBpZiAoIHRoaXMuX3BlcnNpc3RlbmNlVG0gKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZGVzdHJveVRNICYmIGNsZWFyVGltZW91dCh0aGlzLl9kZXN0cm95VE0pO1xuICAgICAgICAgICAgICAgIHRoaXMuX2Rlc3Ryb3lUTSA9IHNldFRpbWVvdXQoXG4gICAgICAgICAgICAgICAgICAgIGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fZGVzdHJveVRNID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vdGhpcy50aGVuKHMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgIXRoaXMuX19yZXRhaW5zLmFsbCAmJiAhdGhpcy5kZWFkICYmIHRoaXMuZGVzdHJveSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAvL30pO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wZXJzaXN0ZW5jZVRtXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vdGhpcy50aGVuKHMgPT5cbiAgICAgICAgICAgICAgICAoICF0aGlzLl9fcmV0YWlucy5hbGwgJiYgIXRoaXMuZGVhZCAmJiB0aGlzLmRlc3Ryb3koKSApXG4gICAgICAgICAgICAgICAgLy8pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIC8vICBjb25zb2xlLmxvZyhcImRlc3Ryb3lcIiwgdGhpcy5fdWlkKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuZW1pdCgnZGVzdHJveScsIHRoaXMpO1xuICAgICAgICBpZiAoIHRoaXMuX3N0YWJpbGl6ZXIgKVxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX3N0YWJpbGl6ZXIpO1xuICAgICAgICBcbiAgICAgICAgaWYgKCB0aGlzLl9mb2xsb3dlcnMubGVuZ3RoIClcbiAgICAgICAgICAgIHRoaXMuX2ZvbGxvd2Vycy5mb3JFYWNoKFxuICAgICAgICAgICAgICAgICggZm9sbG93ZXIgKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICggdHlwZW9mIGZvbGxvd2VyWyAwIF0gIT09IFwiZnVuY3Rpb25cIiApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICggZm9sbG93ZXJbIDAgXS5zdG9yZXMgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBmb2xsb3dlclsgMCBdLnN0b3Jlc1sgZm9sbG93ZXJbIDEgXSBdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgdGhpcy5fZm9sbG93ZXJzLmxlbmd0aCA9IDA7XG4gICAgICAgIHRoaXMuY29uc3RydWN0b3IuX3JldiAgPSB0aGlzLnJldjtcbiAgICAgICAgdGhpcy5kZWFkICAgICAgICAgICAgICA9IHRydWU7XG4gICAgICAgIHRoaXMuX3JldnMgICAgICAgICAgICAgPSB0aGlzLmRhdGEgPSB0aGlzLnN0YXRlID0gdGhpcy5zY29wZSA9IG51bGw7XG4gICAgICAgIHRoaXMucmVtb3ZlQWxsTGlzdGVuZXJzKCk7XG4gICAgfVxufVxuXG4vKipcbiAqIGdldCBhIHN0YXRpYyBhbGlhc2VkIHJlZmVyZW5jZSBvZiBhIHN0b3JlXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICogQHJldHVybnMge3tzdG9yZTogU3RvcmUsIG5hbWU6ICp9fVxuICovXG5TdG9yZS5hcyA9IGZ1bmN0aW9uICggbmFtZSApIHtcbiAgICByZXR1cm4geyBzdG9yZTogdGhpcywgbmFtZSB9O1xufVxuXG4vKipcbiAqIE1hcCBhbGwgbmFtZWQgc3RvcmVzIGluIHtrZXlzfSB0byB0aGUge29iamVjdH0ncyBzdGF0ZVxuICogSG9vayBjb21wb25lbnRXaWxsVW5tb3VudCAoZm9yIHJlYWN0IGNvbXApIG9yIGRlc3Ryb3kgdG8gdW5CaW5kIHRoZW0gYXV0b21hdGljYWxseVxuICogQHN0YXRpY1xuICogQHBhcmFtIG9iamVjdCB7T2JqZWN0fSB0YXJnZXQgc3RhdGUgYXdhcmUgb2JqZWN0IChSZWFjdC5Db21wb25lbnR8U3RvcmV8Li4uKVxuICogQHBhcmFtIGtleXMge0FycmF5fSBFeCA6IFtcInNlc3Npb25cIiwgXCJvdGhlclN0YXRpY05hbWVkU3RvcmU6a2V5XCIsXG4gKiAgICAgc3RvcmUuYXMoJ2Fub3RoZXJLZXknKV1cbiAqL1xuU3RvcmUubWFwID0gZnVuY3Rpb24gKCBjU3RvcmUsIGtleXMsIHNjb3BlLCBvcmlnaW4sIHNldEluaXRpYWwgPSBmYWxzZSApIHtcbiAgICB2YXIgdGFyZ2V0UmV2cyAgICAgPSBjU3RvcmUuX3JldnMgfHwge307XG4gICAgdmFyIHRhcmdldFNjb3BlICAgID0gY1N0b3JlLnN0b3JlcyB8fCAoIGNTdG9yZS5zdG9yZXMgPSB7fSApO1xuICAgIHZhciBpbml0aWFsT3V0cHV0cyA9IHt9O1xuICAgIGtleXMgICAgICAgICAgICAgICA9IGlzLmFycmF5KGtleXMpID8gWyAuLi5rZXlzIF0gOiBbIGtleXMgXTtcbiAgICBcbiAgICBcbiAgICBzY29wZSA9IHNjb3BlIHx8IFN0b3JlLnN0YXRpY1Njb3BlO1xuICAgIFxuICAgIGtleXMgPSBrZXlzLmZpbHRlcihcbiAgICAgICAgLy8gQHRvZG8gOiB1c2UgcXVlcnkgcmVmc1xuICAgICAgICAvLyAoc3RvcmUpKFxcLnN0b3JlKSooXFxbKFxcKnwocHJvcHMpXFx3KykrKVxcXSk/KFxcOmFsaWFzKVxuICAgICAgICAoIGtleSApID0+IHtcbiAgICAgICAgICAgIGlmICggIWtleSApIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiTm90IGEgbWFwcGFibGUgc3RvcmUgaXRlbSAnXCIgKyBrZXkgKyBcIicgaW4gXCIgKyBvcmlnaW4gKyAnICEhJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IG5hbWUsXG4gICAgICAgICAgICAgICAgYWxpYXMsXG4gICAgICAgICAgICAgICAgcGF0aCxcbiAgICAgICAgICAgICAgICBzdG9yZSwgX2tleTtcbiAgICAgICAgICAgIGlmICgga2V5LnN0b3JlICYmIGtleS5uYW1lICkge1xuICAgICAgICAgICAgICAgIGFsaWFzID0gbmFtZSA9IGtleS5uYW1lO1xuICAgICAgICAgICAgICAgIHN0b3JlID0ga2V5LnN0b3JlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoIGlzLmZuKGtleSkgKSB7XG4gICAgICAgICAgICAgICAgbmFtZSA9IGFsaWFzID0ga2V5Lm5hbWUgfHwga2V5LmRlZmF1bHROYW1lO1xuICAgICAgICAgICAgICAgIHN0b3JlID0ga2V5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgX2tleSAgPSBrZXkubWF0Y2goLyhbXFx3X10rKSgoPzpcXC5bXFx3X10rKSopKD86XFw6KFtcXHdfXSspKT8vKTtcbiAgICAgICAgICAgICAgICBuYW1lICA9IF9rZXlbIDEgXTtcbiAgICAgICAgICAgICAgICBwYXRoICA9IF9rZXlbIDIgXSAmJiBfa2V5WyAyIF0uc3Vic3RyKDEpO1xuICAgICAgICAgICAgICAgIHN0b3JlID0gc2NvcGUuc3RvcmVzWyBfa2V5WyAxIF0gXTtcbiAgICAgICAgICAgICAgICBhbGlhcyA9IF9rZXlbIDMgXSB8fCBwYXRoICYmIHBhdGgubWF0Y2goLyhbXlxcLl0qKSQvKVsgMCBdIHx8IF9rZXlbIDEgXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICggIXN0b3JlICkge1xuICAgICAgICAgICAgICAgIGxldCBpPVtdO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIG8gaW4gc2NvcGUuc3RvcmVzKVxuICAgICAgICAgICAgICAgICAgICBpLnB1c2gobylcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiTm90IGEgbWFwcGFibGUgc3RvcmUgaXRlbSAnXCIgKyBuYW1lICsgXCIvXCIgKyBhbGlhcyArIFwiJyBpbiBcIiArICggY1N0b3JlLm5hbWUgfHwgY1N0b3JlICkgKyAnICEhJywgc3RvcmUsIF9rZXksIHNjb3BlLnN0b3JlcywgaSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCBpcy5yc1Njb3BlKHN0b3JlLnByb3RvdHlwZSkgKSBzY29wZS5fbW91bnQobmFtZSk7XG4gICAgICAgICAgICBpZiAoIGlzLnJzU2NvcGUoc3RvcmUpICkge1xuICAgICAgICAgICAgICAgIHN0b3JlID0gc2NvcGUuX21vdW50KGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICggdGFyZ2V0UmV2c1sgbmFtZSBdICkgcmV0dXJuIGZhbHNlOy8vIGlnbm9yZSBkYmwgdXNlcyBmb3Igbm93XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKCBpcy5mbihzdG9yZSkgKSB7XG4gICAgICAgICAgICAgICAgc2NvcGUuX21vdW50KG5hbWUpXG4gICAgICAgICAgICAgICAgc2NvcGUuc3RvcmVzWyBuYW1lIF0uYmluZChjU3RvcmUsIGFsaWFzLCBzZXRJbml0aWFsLCBwYXRoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHN0b3JlLmJpbmQoY1N0b3JlLCBhbGlhcywgc2V0SW5pdGlhbCwgcGF0aCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIGdpdmUgaW5pdGlhbCBzdG9yZSB3ZWlnaHQgYmFzaW5nIHNvdXJjZXNcbiAgICAgICAgICAgIHNjb3BlLnN0b3Jlc1sgbmFtZSBdLl9zb3VyY2VzICYmIGNTdG9yZS5fc291cmNlcy5wdXNoKC4uLnNjb3BlLnN0b3Jlc1sgbmFtZSBdLl9zb3VyY2VzKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGFyZ2V0UmV2c1sgYWxpYXMgXSA9IHRhcmdldFJldnNbIGFsaWFzIF0gfHwgdHJ1ZTtcbiAgICAgICAgICAgICF0YXJnZXRTY29wZVsgbmFtZSBdICYmICggdGFyZ2V0U2NvcGVbIG5hbWUgXSA9IHNjb3BlLnN0b3Jlc1sgbmFtZSBdICk7XG4gICAgICAgICAgICBpZiAoIHNjb3BlLnN0b3Jlc1sgbmFtZSBdLmhhc093blByb3BlcnR5KCdkYXRhJykgKVxuICAgICAgICAgICAgICAgIGluaXRpYWxPdXRwdXRzWyBuYW1lIF0gPSBzY29wZS5kYXRhWyBuYW1lIF07XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICk7XG4gICAgXG4gICAgLy8gLi4uIEB0b2RvXG4gICAgY1N0b3JlLm9uY2UoJ2Rlc3Ryb3knLCAoIC4uLmFyZ3ogKSA9PiB7XG4gICAgICAgIGtleXMubWFwKFxuICAgICAgICAgICAgKCBrZXkgKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IG5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGFsaWFzLCBwYXRoLFxuICAgICAgICAgICAgICAgICAgICBzdG9yZTtcbiAgICAgICAgICAgICAgICBpZiAoIGtleS5zdG9yZSAmJiBrZXkubmFtZSApIHtcbiAgICAgICAgICAgICAgICAgICAgYWxpYXMgPSBuYW1lID0ga2V5Lm5hbWU7XG4gICAgICAgICAgICAgICAgICAgIHN0b3JlID0ga2V5LnN0b3JlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICggaXMuZm4oa2V5KSApIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZSA9IGFsaWFzID0ga2V5Lm5hbWUgfHwga2V5LmRlZmF1bHROYW1lO1xuICAgICAgICAgICAgICAgICAgICBzdG9yZSA9IHNjb3BlLnN0b3Jlc1sgbmFtZSBdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAga2V5ICAgPSBrZXkubWF0Y2goLyhbXFx3X10rKSgoPzpcXC5bXFx3X10rKSopKD86XFw6KFtcXHdfXSspKT8vKTtcbiAgICAgICAgICAgICAgICAgICAgbmFtZSAgPSBrZXlbIDEgXTtcbiAgICAgICAgICAgICAgICAgICAgcGF0aCAgPSBrZXlbIDIgXSAmJiBrZXlbIDIgXS5zdWJzdHIoMSk7XG4gICAgICAgICAgICAgICAgICAgIHN0b3JlID0gc2NvcGUuc3RvcmVzWyBrZXlbIDEgXSBdO1xuICAgICAgICAgICAgICAgICAgICBhbGlhcyA9IGtleVsgMyBdIHx8IHBhdGggJiYgcGF0aC5tYXRjaCgvKFteXFwuXSopJC8pWyAwIF0gfHwga2V5WyAxIF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHN0b3JlICYmICFpcy5mbihzdG9yZSkgJiYgc3RvcmUudW5CaW5kKGNTdG9yZSwgYWxpYXMsIHBhdGgpXG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfSlcbiAgICBcbiAgICByZXR1cm4gaW5pdGlhbE91dHB1dHM7XG59O1xuXG5cbmlzLnJzU3RvcmUgPSBmdW5jdGlvbiAoIG9iaiApIHtcbiAgICByZXR1cm4gb2JqIGluc3RhbmNlb2YgU3RvcmVcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RvcmU7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1N0b3JlLmpzIiwiLypcbiAqIENvcHlyaWdodCAoYykgIDIwMTggV2lzZSBXaWxkIFdlYiAuXG4gKlxuICogIE1JVCBMaWNlbnNlXG4gKlxuICogIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqICBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiAgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqICBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqICBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqICBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcbiAqICBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqICBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiAgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiAgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiAgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiAgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcbiAqICBTT0ZUV0FSRS5cbiAqXG4gKiBAYXV0aG9yIDogTmF0aGFuYWVsIEJyYXVuXG4gKiBAY29udGFjdCA6IGNhaXBpbGFic0BnbWFpbC5jb21cbiAqL1xuXG4vL2ltcG9ydCBpbmRleCBmcm9tIFwiLi9pbmRleFwiOy8vIHdpbGwgdXNlIGFzIGV4dGVybmFsIHRoZSBpbmRleCBpbiBkaXN0XG5pbXBvcnQgaXMgZnJvbSBcImlzXCI7XG5cbi8qKlxuICogTWluaW1hbCBwdXNoIHNlcXVlbmNlciwgYXBwbHkgc3RvcmVzIHNwZWNpZmljIHRhc2sgaW4gdGhlIHJpZ2h0IG9yZGVyIChyb290IHN0b3Jlc1xuICogZmlyc3QpXG4gKi9cbmxldCB0YXNrUXVldWUgICAgICA9IFtdLFxuICAgIGN1cldlaWdodCAgICAgID0gMCxcbiAgICBtYXhXZWlnaHQgICAgICA9IDAsXG4gICAgbWluV2VpZ2h0ICAgICAgPSAwLFxuICAgIHRhc2tDb3VudCAgICAgID0gMCxcbiAgICBkZVN5bmMgICAgICAgICA9IGZhbHNlLFxuICAgIGRlU3luY01heFRhc2tzID0gMTAsXG4gICAgdGFzayxcbiAgICBpc1J1bm5pbmcsXG4gICAgZXJyb3JDYXRjaGVyICAgPSB7XG4gICAgICAgIGxhc3RFcnJvcjogbnVsbCxcbiAgICAgICAgZGlzcGF0Y2ggOiBmdW5jdGlvbiAoIGVycm9yICkge1xuICAgICAgICAgICAgZXJyb3JDYXRjaGVyLmRpc2FibGUoKTtcbiAgICAgICAgICAgIGlmICggdGFzayAmJiB0YXNrWyAwIF0uaGFuZGxlRXJyb3IgKSB7XG4gICAgICAgICAgICAgICAgdGFza1sgMCBdLmhhbmRsZUVycm9yKGVycm9yLCB0YXNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKCB0YXNrIClcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiUmVTY29wZSA6IEFuIGFwcGx5IHRhc2sgaGFzIGZhaWxlZCAhIVwiLCB0YXNrWyAxIF0sIFwiIG9uIFwiLCB0YXNrWyAwIF0ubmFtZSB8fCB0YXNrWyAwIF0uY29uc3RydWN0b3IubmFtZSlcbiAgICAgICAgXG4gICAgICAgICAgICBpc1J1bm5pbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIHRhc2sgICAgICA9IG51bGw7XG4gICAgICAgICAgICBydW5Ob3coKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW5hYmxlICAgOiAoIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnIClcbiAgICAgICAgICAgICAgICAgICA/ICgpID0+IHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCBlcnJvckNhdGNoZXIuZGlzcGF0Y2gpXG4gICAgICAgICAgICB9IDogKCkgPT4ge1xuICAgICAgICAgICAgICAgIHByb2Nlc3Mub24oJ3VuY2F1Z2h0RXhjZXB0aW9uJywgZXJyb3JDYXRjaGVyLmRpc3BhdGNoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIGRpc2FibGUgIDogKCB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyApXG4gICAgICAgICAgICAgICAgICAgPyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgZXJyb3JDYXRjaGVyLmRpc3BhdGNoKVxuICAgICAgICAgICAgfSA6ICgpID0+IHtcbiAgICAgICAgICAgICAgICBwcm9jZXNzLnJlbW92ZUxpc3RlbmVyKCd1bmNhdWdodEV4Y2VwdGlvbicsIGVycm9yQ2F0Y2hlci5kaXNwYXRjaCk7XG4gICAgICAgICAgICB9XG4gICAgfVxuO1xuXG5mdW5jdGlvbiBydW5Ob3coKSB7XG4gICAgaWYgKCAhaXNSdW5uaW5nICkge1xuICAgICAgICBydW4oKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJ1bigpIHtcbiAgICBsZXQgZnJvbSAgPSBEYXRlLm5vdygpO1xuICAgIGlzUnVubmluZyA9IHRydWU7XG4gICAgZXJyb3JDYXRjaGVyLmVuYWJsZSgpO1xuICAgIHdoaWxlICggdGFza0NvdW50ICkge1xuICAgICAgICBcbiAgICAgICAgLy8gdHJ5IGZvciB0aGUgY3VycmVudCB3ZWlnaHRcbiAgICAgICAgd2hpbGUgKCAhKCB0YXNrUXVldWVbIGN1cldlaWdodCBdICYmIHRhc2tRdWV1ZVsgY3VyV2VpZ2h0IF0ubGVuZ3RoICkgKVxuICAgICAgICAgICAgY3VyV2VpZ2h0Kys7XG4gICAgICAgIFxuICAgICAgICB0YXNrQ291bnQtLTtcbiAgICAgICAgdGFzayA9IHRhc2tRdWV1ZVsgY3VyV2VpZ2h0IF0uc2hpZnQoKTtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcIlRhc2sgOiBcIiwgdGFza1sxXSwgXCIgb24gXCIsIHRhc2tbMF0ubmFtZSk7XG4gICAgICAgIHRhc2tbIDAgXVsgdGFza1sgMSBdIF0uYXBwbHkodGFza1sgMCBdLCB0YXNrWyAyIF0pO1xuICAgIH1cbiAgICB0YXNrID0gdW5kZWZpbmVkO1xuICAgIGVycm9yQ2F0Y2hlci5kaXNhYmxlKCk7XG4gICAgXG4gICAgaXNSdW5uaW5nID0gZmFsc2U7XG4gICAgaWYgKCB0YXNrQ291bnQgKSB7XG4gICAgICAgIHNldFRpbWVvdXQocnVuTm93KTtcbiAgICB9XG59XG5cbi8vXG4vL2luZGV4LnNldFRhc2tEZVN5bmMgPSAoIG5iICkgPT4ge1xuLy8gICAgaWYgKCBuYiA9PT0gZmFsc2UgKVxuLy8gICAgICAgIHJldHVybiBkZVN5bmMgPSBmYWxzZTtcbi8vICAgIGVsc2UgaWYgKCBuYiA9PT0gdHJ1ZSApIHtcbi8vICAgICAgICBkZVN5bmMgICAgICAgICA9IHRydWU7XG4vLyAgICAgICAgZGVTeW5jTWF4VGFza3MgPSAxMDtcbi8vICAgIH1cbi8vICAgIGVsc2UgKGlzLmludChuYikpXG4vLyAgICB7XG4vLyAgICAgICAgZGVTeW5jICAgICAgICAgPSB0cnVlO1xuLy8gICAgICAgIGRlU3luY01heFRhc2tzID0gbmI7XG4vLyAgICB9XG4vL307XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBwdXNoVGFzayggb2JqLCBmbiwgYXJneiApIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBtb3JlIGEgc3RvcmUgaGF2ZSBzb3VyY2VzLCB0aGUgbW9yZSBpdCBzaG91bGQgYmUgcHJvY2Vzc2VkIGZpcnN0XG4gICAgICAgICAqIFNvIGxlYWZzIHN0b3JlcyBzdGF5IHN5bmMsIGFuZCByb290IHN0b3JlcyByZWNlaXZlIG1lcmdlZCBzdGF0ZSB1cGRhdGVzO1xuICAgICAgICAgKiBnbG9iYWwgc3RhdGUgc3RheSBjb2hlcmVudFxuICAgICAgICAgKlxuICAgICAgICAgKiBUaGlzIG1lYW4gd2hhdGV2ZXIgdGhlIG51bWJlciBvZiBzdG9yZXMgJiB0aGUgY29tcGxleGl0eSBvZiB0aGUgZGVwcyxcbiAgICAgICAgICogdXBkYXRpbmcgYSBzdG9yZSBzdGF0ZSB3aWxsIHVwZGF0ZSBpdHMgc3luY2hyb25lIGNoaWxkIHN0b3JlcyBpbW1lZGlhdGVseVxuICAgICAgICAgKlxuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSB7KnxudW1iZXJ9XG4gICAgICAgICAqL1xuICAgICAgICBsZXQgd2VpZ2h0ID0gb2JqLl9zb3VyY2VzICYmIG9iai5fc291cmNlcy5sZW5ndGggfHwgMSxcbiAgICAgICAgICAgIHN0YWNrICA9IHRhc2tRdWV1ZVsgd2VpZ2h0IF0gPVxuICAgICAgICAgICAgICAgIHRhc2tRdWV1ZVsgd2VpZ2h0IF0gfHwgW107XG4gICAgICAgIFxuICAgICAgICBtYXhXZWlnaHQgPSBNYXRoLm1heChtYXhXZWlnaHQsIHdlaWdodCk7XG4gICAgICAgIGN1cldlaWdodCA9IE1hdGgubWluKGN1cldlaWdodCwgd2VpZ2h0KTtcbiAgICAgICAgdGFza0NvdW50Kys7XG4gICAgICAgIFxuICAgICAgICAvL2NvbnNvbGUubG9nKFwiUHVzaCBUYXNrIDogXCIsIGZuLCBcIiBvbiBcIiwgb2JqLm5hbWUsIHdlaWdodCk7XG4gICAgICAgIHN0YWNrLnB1c2goWyBvYmosIGZuLCBhcmd6IF0pO1xuICAgICAgICBzZXRUaW1lb3V0KHJ1bk5vdywgMCk7XG4gICAgICAgIHJldHVybiBzdGFjay5sZW5ndGg7XG4gICAgfVxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbHMvVGFza1NlcXVlbmNlci5qcyIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcHJvY2Vzcy9icm93c2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxuICogQ29weXJpZ2h0IChjKSAgMjAxOCBXaXNlIFdpbGQgV2ViIC5cbiAqXG4gKiAgTUlUIExpY2Vuc2VcbiAqXG4gKiAgUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqICBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiAgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuICogIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqICBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqICBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqICBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiAgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqICBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuICogIFNPRlRXQVJFLlxuICpcbiAqIEBhdXRob3IgOiBOYXRoYW5hZWwgQnJhdW5cbiAqIEBjb250YWN0IDogY2FpcGlsYWJzQGdtYWlsLmNvbVxuICovXG5cbmltcG9ydCBpcyAgICBmcm9tICdpcydcblxuY29uc3QgU2ltcGxlT2JqZWN0UHJvdG8gPSAoIHt9ICkuY29uc3RydWN0b3I7XG5cbmxldCBzY29wYWJsZXMgPSBbXTtcblxuZnVuY3Rpb24gYWRkU2NvcGFibGVUeXBlKCB0ZXN0LCBoYW5kbGUsIG1lbWJlciA9IGZhbHNlLCBzdGF0ZVNjb3BlID0gZmFsc2UgKSB7XG4gICAgc2NvcGFibGVzLnB1c2goXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRlc3QsXG4gICAgICAgICAgICBtZW1iZXIsXG4gICAgICAgICAgICBzdGF0ZVNjb3BlLFxuICAgICAgICAgICAgaGFuZGxlXG4gICAgICAgIH1cbiAgICApXG59XG5cbi8vXG5mdW5jdGlvbiBpc1Njb3BhYmxlVHlwZSggQ29tcCwgbWVtYmVyLCBzdGF0ZVNjb3BlICkge1xuICAgIFxuICAgIGZvciAoIGxldCBpID0gMDsgaSA8IHNjb3BhYmxlcy5sZW5ndGg7IGkrKyApXG4gICAgICAgIGlmIChcbiAgICAgICAgICAgICggbWVtYmVyID09PSB1bmRlZmluZWQgfHwgbWVtYmVyID09IHNjb3BhYmxlc1sgaSBdLm1lbWJlciApXG4gICAgICAgICAgICAmJiBzdGF0ZVNjb3BlID09IHNjb3BhYmxlc1sgaSBdLnN0YXRlU2NvcGVcbiAgICAgICAgICAgICYmIHNjb3BhYmxlc1sgaSBdLnRlc3QoQ29tcClcbiAgICAgICAgKVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgXG4gICAgcmV0dXJuIGZhbHNlO1xuICAgIFxufVxuXG5mdW5jdGlvbiBhcHBseVNjb3BhYmxlVHlwZSggQ29tcCwgYXJneiwgbWVtYmVyLCBzdGF0ZVNjb3BlICkge1xuICAgIFxuICAgIGZvciAoIGxldCBpID0gMDsgaSA8IHNjb3BhYmxlcy5sZW5ndGg7IGkrKyApXG4gICAgICAgIGlmICggbWVtYmVyID09IHNjb3BhYmxlc1sgaSBdLm1lbWJlciAmJiBzdGF0ZVNjb3BlID09IHNjb3BhYmxlc1sgaSBdLnN0YXRlU2NvcGUgJiYgc2NvcGFibGVzWyBpIF0udGVzdChDb21wKSApXG4gICAgICAgICAgICByZXR1cm4gc2NvcGFibGVzWyBpIF0uaGFuZGxlKENvbXAsIC4uLmFyZ3opO1xuICAgIFxuICAgIGNvbnNvbGUud2FybihcInJlU2NvcGUgOiBVbmtub3duIHR5cGVcIiwgQ29tcClcbiAgICBcbiAgICByZXR1cm4gZmFsc2U7XG4gICAgXG59XG5cbmZ1bmN0aW9uIHJlU2NvcGUoIC4uLmFyZ3ogKSB7XG4gICAgLy8gYXJlIHdlIGRlY29yYXRpbmcgYSBtZW1iZXIgLyB3aXRob3V0IGFyZ3pcbiAgICBpZiAoIGFyZ3pbIDAgXSBpbnN0YW5jZW9mIFNpbXBsZU9iamVjdFByb3RvICYmIGFyZ3pbIDIgXSBpbnN0YW5jZW9mIFNpbXBsZU9iamVjdFByb3RvICYmIGFyZ3pbIDAgXS5oYXNPd25Qcm9wZXJ0eShhcmd6WyAxIF0pICkge1xuICAgICAgICBhcmd6WyAyIF0udmFsdWUgPSBhcHBseVNjb3BhYmxlVHlwZShhcmd6WyAwIF0sIFtdLCB0cnVlLCBmYWxzZSk7XG4gICAgICAgIHJldHVybiBhcmd6WyAwIF07XG4gICAgfVxuICAgIGVsc2UgaWYgKCAhaXNTY29wYWJsZVR5cGUoYXJnelsgMCBdLCB1bmRlZmluZWQsIGZhbHNlKSApIHtcbiAgICAgICAgcmV0dXJuICggLi4uYXJnejIgKSA9PiB7XG4gICAgICAgICAgICAvLyBhcmUgd2UgZGVjb3JhdGluZyBhIG1lbWJlciAvIHdpdGggYXJnelxuICAgICAgICAgICAgaWYgKCBhcmd6MlsgMCBdIGluc3RhbmNlb2YgU2ltcGxlT2JqZWN0UHJvdG8gJiYgYXJnejJbIDIgXSBpbnN0YW5jZW9mIFNpbXBsZU9iamVjdFByb3RvICYmIGFyZ3oyWyAwIF0uaGFzT3duUHJvcGVydHkoYXJnejJbIDEgXSkgKSB7XG4gICAgICAgICAgICAgICAgYXJnejJbIDIgXS52YWx1ZSA9IGFwcGx5U2NvcGFibGVUeXBlKGFyZ3oyWyAwIF0sIGFyZ3osIHRydWUsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXJnejJbIDAgXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVTY29wZShhcmd6MlsgMCBdLCAuLi5hcmd6KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYXBwbHlTY29wYWJsZVR5cGUoYXJnelsgMCBdLCBhcmd6LnNsaWNlKDEpLCBmYWxzZSwgZmFsc2UpO1xufVxuXG5mdW5jdGlvbiBzY29wZVRvU3RhdGUoIC4uLmFyZ3ogKSB7XG4gICAgLy8gYXJlIHdlIGRlY29yYXRpbmcgYSBtZW1iZXIgLyB3aXRob3V0IGFyZ3pcbiAgICBpZiAoIGFyZ3pbIDAgXSBpbnN0YW5jZW9mIFNpbXBsZU9iamVjdFByb3RvICYmIGFyZ3pbIDIgXSBpbnN0YW5jZW9mIFNpbXBsZU9iamVjdFByb3RvICYmIGFyZ3pbIDAgXS5oYXNPd25Qcm9wZXJ0eShhcmd6WyAxIF0pICkge1xuICAgICAgICBhcmd6WyAyIF0udmFsdWUgPSBhcHBseVNjb3BhYmxlVHlwZShhcmd6WyAwIF0sIFtdLCB0cnVlLCB0cnVlKTtcbiAgICAgICAgcmV0dXJuIGFyZ3pbIDAgXTtcbiAgICB9XG4gICAgZWxzZSBpZiAoICFpc1Njb3BhYmxlVHlwZShhcmd6WyAwIF0sIHVuZGVmaW5lZCwgdHJ1ZSkgKSB7XG4gICAgICAgIHJldHVybiAoIC4uLmFyZ3oyICkgPT4ge1xuICAgICAgICAgICAgLy8gYXJlIHdlIGRlY29yYXRpbmcgYSBtZW1iZXIgLyB3aXRoIGFyZ3pcbiAgICAgICAgICAgIGlmICggYXJnejJbIDAgXSBpbnN0YW5jZW9mIFNpbXBsZU9iamVjdFByb3RvICYmIGFyZ3oyWyAyIF0gaW5zdGFuY2VvZiBTaW1wbGVPYmplY3RQcm90byAmJiBhcmd6MlsgMCBdLmhhc093blByb3BlcnR5KGFyZ3oyWyAxIF0pICkge1xuICAgICAgICAgICAgICAgIGFyZ3oyWyAyIF0udmFsdWUgPSBhcHBseVNjb3BhYmxlVHlwZShhcmd6MlsgMCBdLCBhcmd6LCB0cnVlLCB0cnVlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXJnejJbIDAgXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICByZXR1cm4gc2NvcGVUb1N0YXRlKGFyZ3oyWyAwIF0sIC4uLmFyZ3opO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBhcHBseVNjb3BhYmxlVHlwZShhcmd6WyAwIF0sIGFyZ3ouc2xpY2UoMSksIGZhbHNlLCB0cnVlKTtcbn1cblxuLy9cbi8vYWRkU2NvcGFibGVUeXBlKFxuLy8gICAgKCBDb21wICkgPT4gKENvbXAgJiYgQ29tcC5wcm90b3R5cGUgaW5zdGFuY2VvZiBTdG9yZSksXG4vLyAgICBmdW5jdGlvbiByZVNjb3BlKCAuLi5hcmd6ICkge1xuLy8gICAgICAgIGxldCBCYXNlU3RvcmUgICAgPSAoIWFyZ3pbMF0gfHwgYXJnelswXS5wcm90b3R5cGUgaW5zdGFuY2VvZiBTdG9yZSkgJiZcbi8vIGFyZ3ouc2hpZnQoKSwgc2NvcGUgICAgICAgID0gKCFhcmd6WzBdIHx8IGFyZ3pbMF0gaW5zdGFuY2VvZiBTY29wZSB8fCBpcy5mbihhcmd6WzBdKSlcbi8vICYmIGFyZ3ouc2hpZnQoKSwgdXNlICAgICAgICAgID0gKGlzLmFycmF5KGFyZ3pbMF0pKSAmJiBhcmd6LnNoaWZ0KCksIHN0YXRlTWFwICAgICA9XG4vLyAhdXNlICYmICghYXJnelswXSB8fCBhcmd6WzBdIGluc3RhbmNlb2YgU2ltcGxlT2JqZWN0UHJvdG8pICYmIGFyZ3ouc2hpZnQoKSxcbi8vIGluaXRpYWxTdGF0ZSA9IHt9OyAgbGV0IGNvbXBOYW1lID0gQmFzZVN0b3JlLmRpc3BsYXlOYW1lIHx8IEJhc2VTdG9yZS5uYW1lOyAgdXNlID1cbi8vIFsuLi4oQmFzZVN0b3JlLnVzZSB8fCBbXSksIC4uLih1c2UgfHwgW10pXTsgc3RhdGVNYXAgJiZcbi8vIFNjb3BlLnN0YXRlTWFwVG9SZWZMaXN0KHN0YXRlTWFwLCBpbml0aWFsU3RhdGUsIHVzZSk7ICBjbGFzcyBTdGF0ZVNjb3BlZFN0b3JlIGV4dGVuZHNcbi8vIEJhc2VTdG9yZSB7IHN0YXRpYyB1c2UgICAgICAgICA9IHVzZTsgc3RhdGljIGRpc3BsYXlOYW1lID0gXCJzdGF0ZVNjb3BlZChcIiArIGNvbXBOYW1lICtcbi8vIFwiKVwiOyAgY29uc3RydWN0b3IoIC4uLmFyZ3ogKSB7IHN1cGVyKHNjb3BlLCBhcmd6LnNsaWNlKGFyZ3pbMF0gaW5zdGFuY2VvZiBTY29wZSA/IDEgOlxuLy8gMCkpIH0gfSAgcmV0dXJuIFN0YXRlU2NvcGVkU3RvcmU7IH0sIGZhbHNlLCB0cnVlIClcblxuXG5leHBvcnQge1xuICAgIGFkZFNjb3BhYmxlVHlwZSxcbiAgICByZVNjb3BlLFxuICAgIHNjb3BlVG9TdGF0ZVxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbHMvc2NvcGFibGUuanMiXSwic291cmNlUm9vdCI6IiJ9