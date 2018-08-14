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
	
	        id = id || key && (parent && parent._id || shortid.generate()) + '>' + key;
	
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
	                    if (snap = _this7.$scope.getSnapshotByKey(snapshot.refs[key])) _this7.state[key] = snap.data;else console.warn('not found : ', key, snap && snap.refs[key]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZGI1MTkxMjI4ODFmNGE1ZWFlNDMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9TY29wZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvaXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9pcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL0VtaXR0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9zaG9ydGlkL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vc2hvcnRpZC9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9zaG9ydGlkL2xpYi9hbHBoYWJldC5qcyIsIndlYnBhY2s6Ly8vLi9+L3Nob3J0aWQvbGliL3JhbmRvbS9yYW5kb20tZnJvbS1zZWVkLmpzIiwid2VicGFjazovLy8uL34vc2hvcnRpZC9saWIvZW5jb2RlLmpzIiwid2VicGFjazovLy8uL34vc2hvcnRpZC9saWIvcmFuZG9tL3JhbmRvbS1ieXRlLWJyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9zaG9ydGlkL2xpYi9kZWNvZGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9zaG9ydGlkL2xpYi9idWlsZC5qcyIsIndlYnBhY2s6Ly8vLi9+L3Nob3J0aWQvbGliL2lzLXZhbGlkLmpzIiwid2VicGFjazovLy8uL34vc2hvcnRpZC9saWIvdXRpbC9jbHVzdGVyLXdvcmtlci1pZC1icm93c2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9TdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvVGFza1NlcXVlbmNlci5qcyIsIndlYnBhY2s6Ly8vLi9+L3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvc2NvcGFibGUuanMiXSwibmFtZXMiOlsiJGdsb2JhbCIsIndpbmRvdyIsImdsb2JhbCIsIlJTIiwiX19fcmVzY29wZSIsImNvbnNvbGUiLCJ3YXJuIiwiU3RvcmUiLCJTY29wZSIsIkNvbnRleHQiLCJyZVNjb3BlIiwic2NvcGVUb1N0YXRlIiwicmVTY29wZVN0YXRlIiwiYWRkU2NvcGFibGVUeXBlIiwic2NvcGVSZWYiLCJtYXAiLCJrZXkiLCJyZXF1aXJlIiwid2Fsa25TZXQiLCJ3YWxrbkdldCIsImtleVdhbGtuU2V0Iiwia2V5V2Fsa25HZXQiLCJFdmVudEVtaXR0ZXIiLCJzaG9ydGlkIiwiX19wcm90b19fcHVzaCIsInRhcmdldCIsImlkIiwicGFyZW50IiwiZm4iLCJwcm90b3R5cGUiLCJfIiwib3BlblNjb3BlcyIsIlNpbXBsZU9iamVjdFByb3RvIiwiY29uc3RydWN0b3IiLCJzY29wZXMiLCJza2V5IiwiaXMiLCJhcnJheSIsInNvcnQiLCJhIiwiYiIsImZpcnN0bmFtZSIsImpvaW4iLCJzbSIsInN0YXRlIiwiX3JlZnMiLCJhY3Rpb25zIiwicGF0aCIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwiY3BhdGgiLCJwdXNoIiwiRnVuY3Rpb24iLCJhcyIsInN0b3Jlc01hcCIsInNuYXBzaG90IiwiZGF0YSIsImluY3JlbWVudElkIiwicGVyc2lzdGVuY2VUbSIsImF1dG9EZXN0cm95Iiwicm9vdEVtaXR0ZXIiLCJib3VuZGVkQWN0aW9ucyIsImtleUluZGV4IiwiX2lkIiwiZ2VuZXJhdGUiLCJpc0xvY2FsSWQiLCJyZWdpc3RlciIsImkiLCJfcmV2Iiwic3RvcmVzIiwiX2F1dG9EZXN0cm95IiwiZGVhZCIsIkVycm9yIiwic291cmNlcyIsImNoaWxkU2NvcGVzIiwiY2hpbGRTY29wZXNMaXN0IiwidW5TdGFibGVDaGlsZHMiLCJzZWVuQ2hpbGRzIiwiX19yZXRhaW5zIiwiYWxsIiwiX19sb2NrcyIsIl9ib3VuZGVkQWN0aW9ucyIsInRlc3QiLCJpbmNsdWRlcyIsImJpbmQiLCJfbGlzdGVuaW5nIiwiX3Njb3BlIiwiX21peGVkIiwiX21peGVkTGlzdCIsImZvbGxvd2VycyIsInJldGFpbiIsIl9zdGFibGUiLCJ3YWl0Iiwib24iLCJfcGFyZW50TGlzdCIsInJlbGVhc2UiLCJfcHJvcGFnIiwiX2FkZENoaWxkIiwicmVzdG9yZSIsInNldFRpbWVvdXQiLCJkaXNwb3NlIiwic3RvcmVzTGlzdCIsIl9tb3VudCIsImsiLCJhcmd1bWVudHMiLCJyZWYiLCJzbmFwIiwicGFyc2VSZWYiLCJzdG9yZUlkIiwicmVkdWNlIiwibW91bnRlZCIsImN0eCIsInN0b3JlIiwidGFza1F1ZXVlIiwicnNTdG9yZSIsIm5hbWUiLCJsZW5ndGgiLCJzaGlmdCIsInJzU2NvcGUiLCIkcGFyZW50IiwibW91bnQiLCJzbGljZSIsInVuZGVmaW5lZCIsInNldFN0YXRlIiwiX3dhdGNoU3RvcmUiLCJpc1N0YWJsZSIsInByb3BhZyIsInRhcmdldEN0eCIsImxpc3RzIiwicmVsaW5rIiwic2luZ2xldG9uIiwic3JjQ3R4IiwiZXh0ZXJuYWwiLCJmb3JjZSIsImxjdHgiLCJpbmZvIiwidG1wIiwiZGVzdHJveSIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsImdldCIsInNldCIsInYiLCJhY3RpdmVBY3Rpb25zIiwiYWN0IiwiaGFzT3duUHJvcGVydHkiLCJfX3RhcmdldFN0b3JlcyIsImRpc3BhdGNoIiwib2JqIiwic2V0SW5pdGlhbCIsInJldk1hcCIsImxhc3RSZXZzIiwicmVmS2V5cyIsInN0cmluZyIsInJldnMiLCJyZXYiLCJyZWZzIiwicmV0YWluU3RvcmVzIiwiZ2V0VXBkYXRlcyIsImRpc3Bvc2VTdG9yZXMiLCJzcGxpY2UiLCJ0byIsInJlZkxpc3QiLCJtaXhlZENXVW5tb3VudCIsInVuTW91bnRLZXkiLCJpc1JlYWN0Q29tcG9uZW50IiwidW5CaW5kIiwiYWxpYXMiLCJyZXRyaWV2ZSIsInNwbGl0IiwicmV0cmlldmVTdG9yZSIsInN0b3Jlc1Jldk1hcCIsImxvY2FsIiwidXBkYXRlZCIsImdldFN0b3Jlc1JldnMiLCJvdXRwdXQiLCJyZWR1Y2VSaWdodCIsImNoaWxkcyIsIl9nZXRBbGxDaGlsZHMiLCJjZmciLCJ3aXRoQ2hpbGRzIiwid2l0aFBhcmVudHMiLCJ3aXRoTWl4ZWQiLCJub3JlZnMiLCJzZXJpYWxpemUiLCJ3aXRoQ2hpbGQiLCJoIiwic3RhcnRzV2l0aCIsInN1YnN0ciIsImJvb2wiLCJ0YWtlU25hcHNob3RCeUtleSIsImdldFNuYXBzaG90QnlLZXkiLCJkZWxldGVTbmFwc2hvdEJ5S2V5IiwicmVwbGFjZSIsInBTdGF0ZSIsIl9yZWYiLCJhY3Rpb24iLCJhcmd6Iiwic3RhY2siLCJiQWN0cyIsInRyaWdnZXIiLCJjYiIsIm9uY2UiLCJyZWFzb24iLCJlbWl0IiwiZXJyb3IiLCJzdGFiaWxpemVyVE0iLCJjbGVhclRpbWVvdXQiLCJwcm9wYWdUTSIsInJlbWFwcyIsIndhc1N0YWJsZSIsImluZGV4T2YiLCJ1biIsImRlc3Ryb3lUTSIsInJlbW92ZUxpc3RlbmVyIiwiZm9sbG93ZXIiLCJfcm1DaGlsZCIsInZhbHVlIiwiaXNLZXkiLCJmaWx0ZXIiLCJFbWl0dGVyIiwiX2V2ZW50cyIsImV2dCIsIlRhc2tTZXF1ZW5jZXIiLCJvYmpQcm90byIsImdldFByb3RvdHlwZU9mIiwiX3N0YXRpYyIsInNjb3BlIiwiZ2V0U2NvcGUiLCJzdGF0aWNTY29wZSIsIndhdGNocyIsInVzZSIsImFwcGx5IiwiaW5pdGlhbFN0YXRlIiwiZGVmYXVsdFN0YXRlIiwiYXBwbGllZCIsIl91aWQiLCJfb25TdGFiaWxpemUiLCJfcGVyc2lzdGVuY2VUbSIsIl9jZmciLCJzY29wZU9iaiIsIiRzY29wZSIsIiRzdG9yZXMiLCIkYWN0aW9ucyIsIiRkaXNwYXRjaCIsIl9yZXZzIiwiX3JlcXVpcmUiLCJfc291cmNlcyIsIl91c2UiLCJtYXRjaCIsInJlZjIiLCJfZm9sbG93ZXJzIiwiX2NoYW5nZXNTVyIsIl9hZnRlckNvbnN0cnVjdG9yIiwiaW5pdGlhbERhdGEiLCJzaG91bGRBcHBseSIsIm1hbmFnZWQiLCJuRGF0YXMiLCJyIiwiY0RhdGFzIiwiaXNDb21wbGV0ZSIsImZvbGxvdyIsImNhbGwiLCJjaGFuZ2VzIiwicmVmaW5lIiwiX19wcm90b19fIiwiX3N0YWJpbGl6ZXIiLCJwdXNoVGFzayIsIm5zIiwiZG9XYWl0Iiwib3JpZ2luIiwiaW5pdGlhbE91dHB1dHMiLCJzIiwiaGFzRGF0YUNoYW5nZSIsInN0YWJsZSIsIm5leHRTdGF0ZSIsIl9uZXh0U3RhdGUiLCJuZXh0RGF0YSIsInN5bmMiLCJjaGFuZ2UiLCJwdXNoU3RhdGUiLCJzdGFiaWxpemUiLCJfa2V5IiwiZGVmYXVsdE5hbWUiLCJudW1iZXIiLCJpbW1lZGlhdGUiLCJ0aGVuIiwicHJldmlvdXMiLCJtZSIsInNob3VsZFByb3BhZyIsIl9kZXN0cm95VE0iLCJyZW1vdmVBbGxMaXN0ZW5lcnMiLCJjU3RvcmUiLCJ0YXJnZXRSZXZzIiwidGFyZ2V0U2NvcGUiLCJvIiwiY3VyV2VpZ2h0IiwibWF4V2VpZ2h0IiwibWluV2VpZ2h0IiwidGFza0NvdW50IiwiZGVTeW5jIiwiZGVTeW5jTWF4VGFza3MiLCJ0YXNrIiwiaXNSdW5uaW5nIiwiZXJyb3JDYXRjaGVyIiwibGFzdEVycm9yIiwiZGlzYWJsZSIsImhhbmRsZUVycm9yIiwicnVuTm93IiwiZW5hYmxlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInByb2Nlc3MiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicnVuIiwiZnJvbSIsIkRhdGUiLCJub3ciLCJ3ZWlnaHQiLCJNYXRoIiwibWF4IiwibWluIiwic2NvcGFibGVzIiwiaGFuZGxlIiwibWVtYmVyIiwic3RhdGVTY29wZSIsImlzU2NvcGFibGVUeXBlIiwiQ29tcCIsImFwcGx5U2NvcGFibGVUeXBlIiwiYXJnejIiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7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O0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxNQUFNO0FBQ2pCLGFBQVksUUFBUTtBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsTUFBTTtBQUNqQixhQUFZLFFBQVE7QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsTUFBTTtBQUNqQixZQUFXLE1BQU07QUFDakIsYUFBWSxRQUFRO0FBQ3BCOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLE1BQU07QUFDakIsWUFBVyxNQUFNO0FBQ2pCLGFBQVksUUFBUTtBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxNQUFNO0FBQ2pCLGFBQVksUUFBUTtBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsTUFBTTtBQUNqQixhQUFZLFFBQVE7QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLE1BQU07QUFDakIsYUFBWSxRQUFRO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsTUFBTTtBQUNqQixhQUFZLFFBQVE7QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsTUFBTTtBQUNqQixhQUFZLFFBQVE7QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLE1BQU07QUFDakIsYUFBWSxRQUFRO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLE1BQU07QUFDakIsYUFBWSxRQUFRO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLE1BQU07QUFDakIsYUFBWSxRQUFRO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxNQUFNO0FBQ2pCLGFBQVksUUFBUTtBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsTUFBTTtBQUNqQixhQUFZLFFBQVE7QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLE1BQU07QUFDakIsYUFBWSxRQUFRO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsTUFBTTtBQUNqQixhQUFZLFFBQVE7QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLE1BQU07QUFDakIsY0FBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsTUFBTTtBQUNqQixhQUFZLFFBQVE7QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxNQUFNO0FBQ2pCLGFBQVksUUFBUTtBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLE1BQU07QUFDakIsYUFBWSxRQUFRO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLE1BQU07QUFDakIsYUFBWSxRQUFRO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxNQUFNO0FBQ2pCLGFBQVksUUFBUTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxNQUFNO0FBQ2pCLGFBQVksUUFBUTtBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsT0FBTztBQUNsQixZQUFXLE9BQU87QUFDbEIsYUFBWSxRQUFRO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFZLFFBQVE7QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLE9BQU87QUFDbEIsWUFBVyxNQUFNO0FBQ2pCLGFBQVksUUFBUTtBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxPQUFPO0FBQ2xCLFlBQVcsTUFBTTtBQUNqQixhQUFZLFFBQVE7QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsTUFBTTtBQUNqQixhQUFZLFFBQVE7QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLE9BQU87QUFDbEIsYUFBWSxRQUFRO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxPQUFPO0FBQ2xCLGFBQVksUUFBUTtBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsT0FBTztBQUNsQixZQUFXLE9BQU87QUFDbEIsYUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxPQUFPO0FBQ2xCLFlBQVcsT0FBTztBQUNsQixhQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLE9BQU87QUFDbEIsWUFBVyxPQUFPO0FBQ2xCLGFBQVksUUFBUTtBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsT0FBTztBQUNsQixZQUFXLE9BQU87QUFDbEIsYUFBWSxRQUFRO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxPQUFPO0FBQ2xCLFlBQVcsT0FBTztBQUNsQixZQUFXLE9BQU87QUFDbEIsYUFBWSxRQUFRO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLE1BQU07QUFDakIsYUFBWSxRQUFRO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLE1BQU07QUFDakIsYUFBWSxRQUFRO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLE1BQU07QUFDakIsYUFBWSxRQUFRO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsTUFBTTtBQUNqQixhQUFZLFFBQVE7QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxNQUFNO0FBQ2pCLGFBQVksUUFBUTtBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLE1BQU07QUFDakIsYUFBWSxRQUFRO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsTUFBTTtBQUNqQixhQUFZLFFBQVE7QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLE1BQU07QUFDakIsYUFBWSxRQUFRO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7U0M3eEJnQmxCLFEsR0FBQUEsUTtTQWtCQUMsUSxHQUFBQSxRO1NBU0FDLFcsR0FBQUEsVztTQU1BQyxXLEdBQUFBLFc7Ozs7QUFuQ2hCLEtBQUllLEtBQUssbUJBQUFuQixDQUFRLENBQVIsQ0FBVDs7QUFFTyxVQUFTQyxRQUFULENBQW1Cb0ksR0FBbkIsRUFBd0J2RyxJQUF4QixFQUE4QjRLLEtBQTlCLEVBQXFDbkIsS0FBckMsRUFBNkM7QUFDaEQsU0FBS3BLLEdBQUd1SCxNQUFILENBQVU1RyxJQUFWLENBQUwsRUFDSUEsT0FBT0EsS0FBSzRILEtBQUwsQ0FBVyxHQUFYLENBQVA7QUFDSixTQUFLLENBQUM1SCxLQUFLc0UsTUFBWCxFQUNJLE9BQU8sS0FBUCxDQURKLEtBRUssSUFBS3RFLEtBQUtzRSxNQUFMLElBQWUsQ0FBcEIsRUFDRCxPQUFPaUMsSUFBS3ZHLEtBQU0sQ0FBTixDQUFMLElBQW1CeUoscUNBQ1NsRCxJQUFLdkcsS0FBTSxDQUFOLENBQUwsS0FBb0IsRUFEN0IsSUFDbUM0SyxLQURuQyxLQUVFQSxLQUY1QixDQURDLEtBS0QsT0FBT3pNLFNBQ0hvSSxJQUFLdkcsS0FBTSxDQUFOLENBQUwsSUFDSXVHLElBQUt2RyxLQUFNLENBQU4sQ0FBTCxLQUFvQixFQUZyQixFQUdIQSxLQUFLMkUsS0FBTCxDQUFXLENBQVgsQ0FIRyxFQUlIaUcsS0FKRyxFQUlJbkIsS0FKSixDQUFQO0FBTVA7O0FBRU0sVUFBU3JMLFFBQVQsQ0FBbUJtSSxHQUFuQixFQUF3QnZHLElBQXhCLEVBQThCNkssS0FBOUIsRUFBc0M7QUFDekMsU0FBS3hMLEdBQUd1SCxNQUFILENBQVU1RyxJQUFWLENBQUwsRUFDSUEsT0FBT0EsS0FBSzRILEtBQUwsQ0FBVyxHQUFYLENBQVA7QUFDSixZQUFPNUgsS0FBS3NFLE1BQUwsR0FDRWlDLElBQUt2RyxLQUFNLENBQU4sQ0FBTCxLQUFvQjVCLFNBQVNtSSxJQUFLdkcsS0FBTSxDQUFOLENBQUwsQ0FBVCxFQUEyQkEsS0FBSzJFLEtBQUwsQ0FBVyxDQUFYLENBQTNCLENBRHRCLEdBRUU0QixHQUZUO0FBR0g7O0FBRUQ7QUFDTyxVQUFTbEksV0FBVCxDQUFzQmtJLEdBQXRCLEVBQTJCdkcsSUFBM0IsRUFBaUM0SyxLQUFqQyxFQUF3Q25CLEtBQXhDLEVBQWdEO0FBQ25ELFNBQUtwSyxHQUFHdUgsTUFBSCxDQUFVNUcsSUFBVixDQUFMLEVBQ0lBLE9BQU9BLEtBQUs0SCxLQUFMLENBQVcsV0FBWCxFQUF3QmtELE1BQXhCLENBQStCO0FBQUEsZ0JBQU83RSxNQUFNLEdBQU4sSUFBYUEsQ0FBcEI7QUFBQSxNQUEvQixDQUFQO0FBQ0osWUFBTzlILFNBQVNvSSxHQUFULEVBQWN2RyxJQUFkLEVBQW9CNEssS0FBcEIsQ0FBUDtBQUNIOztBQUVNLFVBQVN0TSxXQUFULENBQXNCaUksR0FBdEIsRUFBMkJ2RyxJQUEzQixFQUFpQzZLLEtBQWpDLEVBQXlDO0FBQzVDLFNBQUt4TCxHQUFHdUgsTUFBSCxDQUFVNUcsSUFBVixDQUFMLEVBQ0lBLE9BQU9BLEtBQUs0SCxLQUFMLENBQVcsV0FBWCxFQUF3QmtELE1BQXhCLENBQStCO0FBQUEsZ0JBQU83RSxNQUFNLEdBQU4sSUFBYUEsQ0FBcEI7QUFBQSxNQUEvQixDQUFQO0FBQ0osWUFBT2pHLEtBQUtzRSxNQUFMLEdBQ0VpQyxJQUFLdkcsS0FBTSxDQUFOLENBQUwsS0FBb0I1QixTQUFTbUksSUFBS3ZHLEtBQU0sQ0FBTixDQUFMLENBQVQsRUFBMkJBLEtBQUsyRSxLQUFMLENBQVcsQ0FBWCxDQUEzQixDQUR0QixHQUVFNEIsR0FGVDtBQUdILEU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwQkEsS0FBSWxILEtBQUssbUJBQUFuQixDQUFRLENBQVIsQ0FBVDs7S0FDcUI2TSxPOzs7O2NBQ2pCQyxPLEdBQVUsRTs7Ozs7NEJBRU5DLEcsRUFBS3JCLEUsRUFBSztBQUFBOztBQUNWLGlCQUFLLENBQUN2SyxHQUFHdUgsTUFBSCxDQUFVcUUsR0FBVixDQUFELElBQW1CQSxHQUF4QixFQUNJLE9BQU9oTCxPQUFPQyxJQUFQLENBQVkrSyxHQUFaLEVBQWlCOUssT0FBakIsQ0FBeUI7QUFBQSx3QkFBSyxNQUFLNEMsRUFBTCxDQUFRVSxDQUFSLEVBQVd3SCxJQUFJeEgsQ0FBSixDQUFYLENBQUw7QUFBQSxjQUF6QixDQUFQOztBQUVKLGtCQUFLdUgsT0FBTCxDQUFhQyxHQUFiLElBQW9CLEtBQUtELE9BQUwsQ0FBYUMsR0FBYixLQUFxQixFQUF6QztBQUNBLGtCQUFLRCxPQUFMLENBQWFDLEdBQWIsRUFBa0I1SyxJQUFsQixDQUF1QnVKLEVBQXZCO0FBRUg7Ozs0QkFFR3FCLEcsRUFBS3JCLEUsRUFBSztBQUFBOztBQUNWLGlCQUFLLENBQUN2SyxHQUFHdUgsTUFBSCxDQUFVcUUsR0FBVixDQUFELElBQW1CQSxHQUF4QixFQUNJLE9BQU9oTCxPQUFPQyxJQUFQLENBQVkrSyxHQUFaLEVBQWlCOUssT0FBakIsQ0FBeUI7QUFBQSx3QkFBSyxPQUFLb0ssRUFBTCxDQUFROUcsQ0FBUixFQUFXd0gsSUFBSXhILENBQUosQ0FBWCxDQUFMO0FBQUEsY0FBekIsQ0FBUDs7QUFFSixpQkFBSyxDQUFDLEtBQUt1SCxPQUFMLENBQWFDLEdBQWIsQ0FBTixFQUEwQjtBQUMxQixpQkFBSTVKLElBQUksS0FBSzJKLE9BQUwsQ0FBYUMsR0FBYixFQUFrQlgsT0FBbEIsQ0FBMEJWLEVBQTFCLENBQVI7QUFDQSxrQkFBS29CLE9BQUwsQ0FBYUMsR0FBYixFQUFrQjlELE1BQWxCLENBQXlCOUYsQ0FBekIsRUFBNEIsQ0FBNUI7QUFDSDs7OzhCQUVLNEosRyxFQUFlO0FBQ2pCLGlCQUFLLENBQUMsS0FBS0QsT0FBTCxDQUFhQyxHQUFiLENBQU4sRUFBMEI7QUFDMUIsaUJBQUkvRixxQ0FBWSxLQUFLOEYsT0FBTCxDQUFhQyxHQUFiLENBQVosRUFBSjs7QUFGaUIsK0NBQVB6QixJQUFPO0FBQVBBLHFCQUFPO0FBQUE7O0FBSWpCLGtCQUFNLElBQUluSSxJQUFJLENBQWQsRUFBaUJBLElBQUk2RCxNQUFNWixNQUEzQixFQUFtQ2pELEdBQW5DO0FBQ0k2RCx1QkFBTTdELENBQU4sZUFBWW1JLElBQVo7QUFESjtBQUVIOzs7dUNBRWE7QUFDVixrQkFBS3pHLEVBQUwsYUFBV1csU0FBWDtBQUNIOzs7MENBRWdCO0FBQ2Isa0JBQUs2RyxFQUFMLGFBQVc3RyxTQUFYO0FBQ0g7Ozs4Q0FFb0I7QUFDakIsa0JBQUtzSCxPQUFMLEdBQWUsRUFBZjtBQUNIOzs7OEJBRUtDLEcsRUFBS3JCLEUsRUFBSztBQUFBOztBQUNaLGlCQUFJL0ssWUFBSjtBQUNBLGtCQUFLa0UsRUFBTCxDQUFRa0ksR0FBUixFQUFhcE0sTUFBSyxjQUFlO0FBQzdCLHdCQUFLMEwsRUFBTCxDQUFRVSxHQUFSLEVBQWFwTSxHQUFiO0FBQ0ErSztBQUNILGNBSEQ7QUFJSDs7Ozs7O21CQS9DZ0JtQixPOzs7Ozs7O0FDM0JyQjtBQUNBOzs7Ozs7O0FDREE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNoRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNqR0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUN4QkE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDbEJBOztBQUVBLCtFQUE4RTs7QUFFOUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQ2JBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDaEJBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7O0FDL0NBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1CQUFrQixTQUFTO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQ2xCQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMkJJLFVBQStCLG1CQUFBN00sQ0FBUSxDQUFSLENBQS9CO0FBQUEsS0FDQVQsS0FEQSxHQUMr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O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O1NBSUk3RyxlLEdBQUFBLGU7U0FDQUgsTyxHQUFBQSxPO1NBQ0FDLFksR0FBQUEsWSIsImZpbGUiOiIuLi8uLi9kaXN0L1JlU2NvcGUuYnJvd3Nlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBkYjUxOTEyMjg4MWY0YTVlYWU0MyIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpICAyMDE4IFdpc2UgV2lsZCBXZWIgLlxuICpcbiAqICBNSVQgTGljZW5zZVxuICpcbiAqICBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiAgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqICB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiAgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiAgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiAgVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG4gKiAgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqICBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG4gKiAgU09GVFdBUkUuXG4gKlxuICogQGF1dGhvciA6IE5hdGhhbmFlbCBCcmF1blxuICogQGNvbnRhY3QgOiBjYWlwaWxhYnNAZ21haWwuY29tXG4gKi9cblxubGV0ICRnbG9iYWwgPSAoIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICkgPyB3aW5kb3cgOiBnbG9iYWw7XG5cbmltcG9ydCBTY29wZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSBcIi4vU2NvcGVcIjtcbmltcG9ydCBTdG9yZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSBcIi4vU3RvcmVcIjtcbmltcG9ydCB7IGFkZFNjb3BhYmxlVHlwZSwgcmVTY29wZSwgc2NvcGVUb1N0YXRlIH0gZnJvbSBcIi4vdXRpbHMvc2NvcGFibGVcIjtcblxuY29uc3QgUlMgPSAkZ2xvYmFsLl9fX3Jlc2NvcGUgfHwge307XG5pZiAoICRnbG9iYWwuX19fcmVzY29wZSApIHtcbiAgICBjb25zb2xlLndhcm4oXCJSZVNjb3BlIGlzIGRlZmluZWQgbXVsdGlwbGUgdGltZXMgISEgXFxuQ2hlY2sgeW91J3JlIHBhY2thZ2luZ1wiKVxufVxuZWxzZSB7XG4gICAgXG4gICAgJGdsb2JhbC5fX19yZXNjb3BlID0gUlM7XG4gICAgU2NvcGUuU3RvcmUgICAgICAgID0gU3RvcmU7XG4gICAgUlMuU2NvcGUgICAgICAgICAgID0gU2NvcGU7XG4gICAgUlMuQ29udGV4dCAgICAgICAgID0gU2NvcGU7XG4gICAgUlMuU3RvcmUgICAgICAgICAgID0gU3RvcmU7XG4gICAgUlMucmVTY29wZSAgICAgICAgID0gcmVTY29wZTtcbiAgICBSUy5zY29wZVRvU3RhdGUgICAgPSBzY29wZVRvU3RhdGU7XG4gICAgUlMucmVTY29wZVN0YXRlICAgID0gc2NvcGVUb1N0YXRlO1xuICAgIFJTLmFkZFNjb3BhYmxlVHlwZSA9IGFkZFNjb3BhYmxlVHlwZTtcbiAgICBSUy5zY29wZVJlZiAgICAgICAgPVxuICAgICAgICBmdW5jdGlvbiBzY29wZVJlZiggbWFwLCBrZXkgKSB7XG4gICAgICAgICAgICBtYXBbIGtleSBdID0gbmV3IFNjb3BlLnNjb3BlUmVmKG1hcFsga2V5IF0pO1xuICAgICAgICAgICAgcmV0dXJuIG1hcDtcbiAgICAgICAgfTtcbiAgICBcbn1cbmV4cG9ydCBkZWZhdWx0IFJTO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC5qcyIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpICAyMDE4IFdpc2UgV2lsZCBXZWIgLlxuICpcbiAqICBNSVQgTGljZW5zZVxuICpcbiAqICBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiAgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqICB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiAgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiAgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiAgVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG4gKiAgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqICBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG4gKiAgU09GVFdBUkUuXG4gKlxuICogQGF1dGhvciA6IE5hdGhhbmFlbCBCcmF1blxuICogQGNvbnRhY3QgOiBjYWlwaWxhYnNAZ21haWwuY29tXG4gKi9cblxuXG52YXIgaXMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi91dGlscy9pcycpLFxuICAgIHsgd2Fsa25TZXQsIHdhbGtuR2V0LCBrZXlXYWxrblNldCwga2V5V2Fsa25HZXQgfSA9IHJlcXVpcmUoJy4vdXRpbHMvdXRpbHMnKSxcbiAgICBFdmVudEVtaXR0ZXIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL3V0aWxzL0VtaXR0ZXInKSxcbiAgICBzaG9ydGlkICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlKCdzaG9ydGlkJylcbiAgICAsIF9fcHJvdG9fX3B1c2ggICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSAoIHRhcmdldCwgaWQsIHBhcmVudCApID0+IHtcbiAgICAgICAgbGV0IGZuICAgICAgICAgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIH07XG4gICAgICAgIGZuLnByb3RvdHlwZSAgID0gcGFyZW50ID8gbmV3IHBhcmVudC5fWyBpZCBdKCkgOiB0YXJnZXRbIGlkIF0gfHwge307XG4gICAgICAgIHRhcmdldFsgaWQgXSAgID0gbmV3IGZuKCk7XG4gICAgICAgIHRhcmdldC5fWyBpZCBdID0gZm47XG4gICAgfSxcbiAgICBvcGVuU2NvcGVzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSB7fSxcbiAgICBTaW1wbGVPYmplY3RQcm90byAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSAoIHt9ICkuY29uc3RydWN0b3I7XG5cbi8qKlxuICogQmFzZSBTY29wZSBvYmplY3RcbiAqL1xuY2xhc3MgU2NvcGUgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICAgIHN0YXRpYyBnZXRTY29wZSggc2NvcGVzICkge1xuICAgICAgICBsZXQgc2tleSA9IGlzLmFycmF5KHNjb3BlcykgPyBzY29wZXMuc29ydCgoIGEsIGIgKSA9PiB7XG4gICAgICAgICAgICBpZiAoIGEuZmlyc3RuYW1lIDwgYi5maXJzdG5hbWUgKSByZXR1cm4gLTE7XG4gICAgICAgICAgICBpZiAoIGEuZmlyc3RuYW1lID4gYi5maXJzdG5hbWUgKSByZXR1cm4gMTtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9KS5qb2luKCcrJykgOiBzY29wZXM7XG4gICAgICAgIHJldHVybiBvcGVuU2NvcGVzWyBza2V5IF0gPSBvcGVuU2NvcGVzWyBza2V5IF0gfHwgbmV3IFNjb3BlKHt9LCB7IGlkOiBza2V5IH0pO1xuICAgIH07XG4gICAgXG4gICAgXG4gICAgLyoqXG4gICAgICogZ2V0IGEgcGFyc2VkIHJlZmVyZW5jZSBsaXN0IGZyb20gc3RhdGVNYXBcbiAgICAgKiBAcGFyYW0gX3JlZlxuICAgICAqIEByZXR1cm5zIHt7c3RvcmVJZCwgcGF0aCwgYWxpYXM6ICosIHJlZjogKn19XG4gICAgICovXG4gICAgc3RhdGljIHN0YXRlTWFwVG9SZWZMaXN0KCBzbSwgc3RhdGUgPSB7fSwgX3JlZnMgPSBbXSwgYWN0aW9ucyA9IHt9LCBwYXRoID0gXCJcIiApIHtcbiAgICAgICAgT2JqZWN0LmtleXMoc20pLmZvckVhY2goXG4gICAgICAgICAgICBrZXkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBjcGF0aCA9IHBhdGggPyBwYXRoICsgJy4nICsga2V5IDoga2V5O1xuICAgICAgICAgICAgICAgIHNtWyBrZXkgXSBpbnN0YW5jZW9mIFNjb3BlLnNjb3BlUmVmXG4gICAgICAgICAgICAgICAgPyBfcmVmcy5wdXNoKHNtWyBrZXkgXS5wYXRoICsgJzonICsgY3BhdGgpXG4gICAgICAgICAgICAgICAgOiAoIHNtWyBrZXkgXSAmJiBzbVsga2V5IF0gaW5zdGFuY2VvZiBGdW5jdGlvbiApXG4gICAgICAgICAgICAgICAgICA/IGFjdGlvbnNbIGtleSBdID0gc21bIGtleSBdXG4gICAgICAgICAgICAgICAgICA6ICggc21bIGtleSBdICYmIHNtWyBrZXkgXS5wcm90b3R5cGUgaW5zdGFuY2VvZiBTY29wZS5TdG9yZSApXG4gICAgICAgICAgICAgICAgICAgID8gX3JlZnMucHVzaChzbVsga2V5IF0uYXMoY3BhdGgpKVxuICAgICAgICAgICAgICAgICAgICA6IHN0YXRlWyBjcGF0aCBdID0gc21bIGtleSBdXG4gICAgICAgICAgICAgICAgLy86IHRoaXMuc3RhdGVNYXBUb1JlZkxpc3Qoc21ba2V5XSwgX3JlZnMsIHBhdGggKyAnLicgKyBrZXkpXG4gICAgICAgICAgICB9XG4gICAgICAgIClcbiAgICAgICAgcmV0dXJuIF9yZWZzO1xuICAgIH1cbiAgICBcbiAgICBzdGF0aWMgcGVyc2lzdGVuY2VUbSA9IDE7Ly8gaWYgPiAwLCB3aWxsIHdhaXQgJ3BlcnNpc3RlbmNlVG0nIG1zIGJlZm9yZSBkZXN0cm95XG4gICAgLy8gd2hlblxuICAgIC8vIGRpc3Bvc2UgcmVhY2ggMFxuICAgIHN0YXRpYyBTdG9yZSAgICA9IG51bGw7XG4gICAgc3RhdGljIHNjb3BlUmVmID0gZnVuY3Rpb24gc2NvcGVSZWYoIHBhdGggKSB7XG4gICAgICAgIHRoaXMucGF0aCA9IHBhdGg7XG4gICAgfTtcbiAgICBzdGF0aWMgc2NvcGVzICAgPSBvcGVuU2NvcGVzOy8vIGFsbCBhY3RpdmUgc2NvcGVzXG4gICAgXG4gICAgXG4gICAgLyoqXG4gICAgICogSW5pdCBhIFJlU2NvcGUgc2NvcGVcbiAgICAgKlxuICAgICAqIEBwYXJhbSBzdG9yZXNNYXAge09iamVjdH0gT2JqZWN0IHdpdGggdGhlIGluaXRpYWwgc3RvcmVzIGRlZmluaXRpb24gLyBpbnN0YW5jZXNcbiAgICAgKiBAcGFyYW0gY29uZmlnIHtPYmplY3R9IFNjb3BlIGNvbmZpZ1xuICAgICAqIHtcbiAgICAgKiAgcGFyZW50IHtzY29wZX0gQG9wdGlvbmFsIHBhcmVudCBzY29wZVxuICAgICAqXG4gICAgICogIGlkIHtzdHJpbmd9IEBvcHRpb25hbCBpZCAoIGlmIHRoaXMgaWQgZXhpc3Qgc3RvcmVzTWFwIHdpbGwgYmUgbWVyZ2Ugb24gdGhlICdpZCdcbiAgICAgKiAgICAgc2NvcGUpIGtleSB7c3RyaW5nfSBAb3B0aW9uYWwga2V5IG9mIHRoZSBzY29wZSAoIGlmIG5vIGlkIGlzIHNldCwgdGhlIHNjb3BlIGlkXG4gICAgICogICAgIHdpbGwgYmUgKHBhcmVudC5pZCsnPicra2V5KSBpbmNyZW1lbnRJZCB7Ym9vbH0gQG9wdGlvbmFsIHRydWUgdG8gYWRkIGEgc3VmZml4XG4gICAgICogICAgIGlkLCBpZiB0aGUgcHJvdmlkZWQga2V5IG9yIGlkIGdsb2JhbGx5IGV4aXN0XG4gICAgICpcbiAgICAgKiAgc3RhdGUge09iamVjdH0gQG9wdGlvbmFsIGluaXRpYWwgc3RhdGUgYnkgc3RvcmUgYWxpYXNcbiAgICAgKiAgZGF0YSB7T2JqZWN0fSBAb3B0aW9uYWwgaW5pdGlhbCBkYXRhIGJ5IHN0b3JlIGFsaWFzXG4gICAgICpcbiAgICAgKiAgcm9vdEVtaXR0ZXIge2Jvb2x9IEBvcHRpb25hbCB0cnVlIHRvIG5vdCBiZWluZyBkZXN0YWJpbGl6ZWQgYnkgcGFyZW50XG4gICAgICogIGJvdW5kZWRBY3Rpb25zIHthcnJheSB8IHJlZ2V4cH0gQG9wdGlvbmFsIGxpc3Qgb3IgcmVnZXhwIG9mIGFjdGlvbnMgbm90XG4gICAgICogICAgIHByb3BhZ2F0ZWQgdG8gdGhlIHBhcmVudFxuICAgICAqXG4gICAgICogIHBlcnNpc3RlbmNlVG0ge251bWJlcikgaWYgPiAwLCB3aWxsIHdhaXQgJ3BlcnNpc3RlbmNlVG0nIG1zIGJlZm9yZSBkZXN0cm95IHdoZW5cbiAgICAgKiAgICAgZGlzcG9zZSByZWFjaCAwIGF1dG9EZXN0cm95ICB7Ym9vbH0gd2lsbCB0cmlnZ2VyIHJldGFpbiAmIGRpc3Bvc2UgYWZ0ZXIgc3RhcnRcbiAgICAgKiAgfVxuICAgICAqIEByZXR1cm5zIHtTY29wZX1cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvciggc3RvcmVzTWFwLCB7IHBhcmVudCwga2V5LCBpZCwgc25hcHNob3QsIHN0YXRlLCBkYXRhLCBpbmNyZW1lbnRJZCA9ICEha2V5LCBwZXJzaXN0ZW5jZVRtLCBhdXRvRGVzdHJveSwgcm9vdEVtaXR0ZXIsIGJvdW5kZWRBY3Rpb25zIH0gPSB7fSApIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdmFyIF8gPSB7fSwga2V5SW5kZXg7XG4gICAgICAgIFxuICAgICAgICBpZCA9IGlkIHx8IGtleSAmJiAoICggcGFyZW50ICYmIHBhcmVudC5faWQgfHwgc2hvcnRpZC5nZW5lcmF0ZSgpICkgKyAnPicgKyBrZXkgKTtcbiAgICAgICAgXG4gICAgICAgIF8uaXNMb2NhbElkID0gIWlkO1xuICAgICAgICBcbiAgICAgICAgLy9pZiAoIHBhcmVudCAmJiBrZXkgKSB7XG4gICAgICAgIC8vICAgIGtleUluZGV4ID0gcGFyZW50Ll8uY2hpbGRTY29wZXMuZmluZChjdHg9PihjdHguX2lkPT1pZCkpO1xuICAgICAgICAvLyAgICBpZiAoIGtleUluZGV4ID09IC0xICkga2V5SW5kZXggPSBwYXJlbnQuXy5zZWVuQ2hpbGRzO1xuICAgICAgICAvLyAgICBrZXlJbmRleCsrO1xuICAgICAgICAvLyAgICBpZiAoIGtleUluZGV4IClcbiAgICAgICAgLy8gICAgICAgIGlkID0gaWQgKyAnWycgKyBrZXlJbmRleCArICddJztcbiAgICAgICAgLy99XG4gICAgICAgIFxuICAgICAgICBpZCA9IGlkIHx8ICggXCJfX19fX1wiICsgc2hvcnRpZC5nZW5lcmF0ZSgpICk7XG4gICAgICAgIFxuICAgICAgICBpZiAoIG9wZW5TY29wZXNbIGlkIF0gKSB7XG4gICAgICAgICAgICB0aGlzLl9pZCA9IGlkO1xuICAgICAgICAgICAgb3BlblNjb3Blc1sgaWQgXS5yZWdpc3RlcihzdG9yZXNNYXApO1xuICAgICAgICAgICAgcmV0dXJuIG9wZW5TY29wZXNbIGlkIF1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICggb3BlblNjb3Blc1sgaWQgXSAmJiBpbmNyZW1lbnRJZCApIHtcbiAgICAgICAgICAgIGxldCBpID0gLTE7XG4gICAgICAgICAgICB3aGlsZSAoIG9wZW5TY29wZXNbIGlkICsgJ1snICsgKCArK2kgKSArICddJyBdICkgO1xuICAgICAgICAgICAgaWQgPSBpZCArICdbJyArIGkgKyAnXSc7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRoaXMuX2lkICAgICAgICAgPSBpZDtcbiAgICAgICAgdGhpcy5fcmV2ICAgICAgICA9IDA7XG4gICAgICAgIG9wZW5TY29wZXNbIGlkIF0gPSB0aGlzO1xuICAgICAgICBfLnBlcnNpc3RlbmNlVG0gID0gcGVyc2lzdGVuY2VUbSB8fCB0aGlzLmNvbnN0cnVjdG9yLnBlcnNpc3RlbmNlVG07XG4gICAgICAgIFxuICAgICAgICB0aGlzLmFjdGlvbnMgPSB7fTtcbiAgICAgICAgdGhpcy5zdG9yZXMgID0ge307XG4gICAgICAgIHRoaXMuc3RhdGUgICA9IHt9O1xuICAgICAgICB0aGlzLmRhdGEgICAgPSB7fTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMucGFyZW50ICAgICAgID0gcGFyZW50O1xuICAgICAgICB0aGlzLl8gICAgICAgICAgICA9IF87XG4gICAgICAgIHRoaXMuX2F1dG9EZXN0cm95ID0gYXV0b0Rlc3Ryb3k7XG4gICAgICAgIFxuICAgICAgICBpZiAoIHBhcmVudCAmJiBwYXJlbnQuZGVhZCApXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW4ndCB1c2UgYSBkZWFkIHNjb3BlIGFzIHBhcmVudCAhXCIpO1xuICAgICAgICBcbiAgICAgICAgX19wcm90b19fcHVzaCh0aGlzLCAnYWN0aW9ucycsIHBhcmVudCk7XG4gICAgICAgIF9fcHJvdG9fX3B1c2godGhpcywgJ3N0b3JlcycsIHBhcmVudCk7XG4gICAgICAgIF9fcHJvdG9fX3B1c2godGhpcywgJ3N0YXRlJywgcGFyZW50KTtcbiAgICAgICAgX19wcm90b19fcHVzaCh0aGlzLCAnZGF0YScsIHBhcmVudCk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLnNvdXJjZXMgICAgICA9IFtdO1xuICAgICAgICBfLmNoaWxkU2NvcGVzICAgICA9IFtdO1xuICAgICAgICBfLmNoaWxkU2NvcGVzTGlzdCA9IFtdO1xuICAgICAgICBfLnVuU3RhYmxlQ2hpbGRzICA9IDA7XG4gICAgICAgIF8uc2VlbkNoaWxkcyAgICAgID0gMDtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX19yZXRhaW5zID0geyBhbGw6IDAgfTtcbiAgICAgICAgdGhpcy5fX2xvY2tzICAgPSB7IGFsbDogMSB9O1xuICAgICAgICBcbiAgICAgICAgLy9fLnNuYXBzaG90ICAgICAgICA9IHNuYXBzaG90O1xuICAgICAgICAvL18uc25hcHNob3QgICAgICAgID0gc25hcHNob3Q7XG4gICAgICAgIF8uX2JvdW5kZWRBY3Rpb25zID0gaXMuYXJyYXkoYm91bmRlZEFjdGlvbnMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB7IHRlc3Q6IGJvdW5kZWRBY3Rpb25zLmluY2x1ZGVzLmJpbmQoYm91bmRlZEFjdGlvbnMpIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGJvdW5kZWRBY3Rpb25zO1xuICAgICAgICBfLl9saXN0ZW5pbmcgICAgICA9IHt9O1xuICAgICAgICBfLl9zY29wZSAgICAgICAgICA9IHt9O1xuICAgICAgICBfLl9taXhlZCAgICAgICAgICA9IFtdO1xuICAgICAgICBfLl9taXhlZExpc3QgICAgICA9IFtdO1xuICAgICAgICBfLmZvbGxvd2VycyAgICAgICA9IFtdO1xuICAgICAgICBpZiAoIHBhcmVudCApIHtcbiAgICAgICAgICAgIHBhcmVudC5yZXRhaW4oXCJpc015UGFyZW50XCIpO1xuICAgICAgICAgICAgaWYgKCAhcm9vdEVtaXR0ZXIgKSB7XG4gICAgICAgICAgICAgICAgIXBhcmVudC5fc3RhYmxlICYmIHRoaXMud2FpdChcIndhaXRpbmdQYXJlbnRcIik7XG4gICAgICAgICAgICAgICAgcGFyZW50Lm9uKF8uX3BhcmVudExpc3QgPSB7XG4gICAgICAgICAgICAgICAgICAgICdzdGFibGUnICA6IHMgPT4gdGhpcy5yZWxlYXNlKFwid2FpdGluZ1BhcmVudFwiKSxcbiAgICAgICAgICAgICAgICAgICAgJ3Vuc3RhYmxlJzogcyA9PiB0aGlzLndhaXQoXCJ3YWl0aW5nUGFyZW50XCIpLFxuICAgICAgICAgICAgICAgICAgICAndXBkYXRlJyAgOiBzID0+IHRoaXMuX3Byb3BhZygpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXJlbnQub24oXy5fcGFyZW50TGlzdCA9IHtcbiAgICAgICAgICAgICAgICAgICAgJ3VwZGF0ZSc6IHMgPT4gdGhpcy5fcHJvcGFnKClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHRoaXMucmVnaXN0ZXIocGFyZW50Ll9fc2NvcGUsIHN0YXRlLCBkYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIHRoaXMucmVnaXN0ZXIoc3RvcmVzTWFwLCBzdGF0ZSwgZGF0YSk7XG4gICAgICAgIHRoaXMuX19sb2Nrcy5hbGwtLTtcbiAgICAgICAgdGhpcy5fc3RhYmxlID0gIXRoaXMuX19sb2Nrcy5hbGw7XG4gICAgICAgIFxuICAgICAgICBpZiAoIHBhcmVudCApIHtcbiAgICAgICAgICAgIHBhcmVudC5fYWRkQ2hpbGQodGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRoaXMucmVzdG9yZShzbmFwc2hvdCk7XG4gICAgICAgIFxuICAgICAgICBpZiAoIGF1dG9EZXN0cm95IClcbiAgICAgICAgICAgIHNldFRpbWVvdXQoXG4gICAgICAgICAgICAgICAgdG0gPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJldGFpbihcImF1dG9EZXN0cm95XCIpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpc3Bvc2UoXCJhdXRvRGVzdHJveVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApXG4gICAgICAgIFxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKlxuICAgICAqIE1vdW50IHRoZSBzdG9yZXMgaW4gc3RvcmVzTGlzdCwgaW4gdGhpcyBzY29wZSBvciBpbiBpdHMgcGFyZW50cyBvciBtaXhlZCBzY29wZXNcbiAgICAgKlxuICAgICAqIEBwYXJhbSBzdG9yZXNMaXN0IHtzdHJpbmd8c3RvcmVSZWZ9IFN0b3JlIG5hbWUsIEFycmF5IG9mIFN0b3JlIG5hbWVzLCBvciBSZXNjb3BlXG4gICAgICogICAgIHN0b3JlIHJlZiBmcm9tIFN0b3JlOjphcyBvciBTdG9yZTphc1xuICAgICAqIEBwYXJhbSBzdGF0ZVxuICAgICAqIEBwYXJhbSBkYXRhXG4gICAgICogQHJldHVybnMge1Njb3BlfVxuICAgICAqL1xuICAgIG1vdW50KCBzdG9yZXNMaXN0LCBzbmFwc2hvdCwgc3RhdGUsIGRhdGEgKSB7XG4gICAgICAgIGlmICggaXMuYXJyYXkoc3RvcmVzTGlzdCkgKSB7XG4gICAgICAgICAgICBzdG9yZXNMaXN0LmZvckVhY2goayA9PiB0aGlzLl9tb3VudChrLCBzbmFwc2hvdCwgc3RhdGUsIGRhdGEpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX21vdW50KC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIFxuICAgIF9tb3VudCggaWQsIHNuYXBzaG90LCBzdGF0ZSwgZGF0YSApIHtcbiAgICAgICAgbGV0IHJlZiwgc25hcDtcbiAgICAgICAgXG4gICAgICAgIHJlZiA9IHRoaXMucGFyc2VSZWYoaWQpXG4gICAgICAgIFxuICAgICAgICBpZiAoIGlkID09IFwiJHBhcmVudFwiICkgcmV0dXJuO1xuICAgICAgICBpZiAoICF0aGlzLl8uX3Njb3BlWyByZWYuc3RvcmVJZCBdICkgey8vYXNrIG1peGVkIHx8IHBhcmVudFxuICAgICAgICAgICAgaWYgKCB0aGlzLl8uX21peGVkLnJlZHVjZSgoIG1vdW50ZWQsIGN0eCApID0+ICggbW91bnRlZCB8fCBjdHguX21vdW50KGlkLCBzbmFwc2hvdCwgc3RhdGUsIGRhdGEpICksIGZhbHNlKSB8fFxuICAgICAgICAgICAgICAgICAhdGhpcy5wYXJlbnQgKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcmVudC5fbW91bnQoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxldCBzdG9yZSA9IHRoaXMuXy5fc2NvcGVbIHJlZi5zdG9yZUlkIF0sIHRhc2tRdWV1ZSA9IFtdO1xuICAgICAgICAgICAgaWYgKCBpcy5yc1N0b3JlKHN0b3JlLnByb3RvdHlwZSkgKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fLl9zY29wZVsgcmVmLnN0b3JlSWQgXSA9IG5ldyBzdG9yZSh0aGlzLCB7XG4gICAgICAgICAgICAgICAgICAgIC8vc25hcHNob3QsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IHJlZi5zdG9yZUlkLFxuICAgICAgICAgICAgICAgICAgICBzdGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgZGF0YVxuICAgICAgICAgICAgICAgIH0sIHRhc2tRdWV1ZSk7XG4gICAgICAgICAgICAgICAgd2hpbGUgKCB0YXNrUXVldWUubGVuZ3RoICkgdGFza1F1ZXVlLnNoaWZ0KCkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKCBpcy5yc1Njb3BlKHN0b3JlLnByb3RvdHlwZSkgKSB7XG4gICAgICAgICAgICAgICAgc3RvcmUgPSB0aGlzLl8uX3Njb3BlWyByZWYuc3RvcmVJZCBdID0gbmV3IHN0b3JlKHsgJHBhcmVudDogdGhpcyB9LCB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiB0aGlzLl9pZCArICcvJyArIHJlZi5zdG9yZUlkLFxuICAgICAgICAgICAgICAgICAgICAvL2F1dG9EZXN0cm95OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgIC8vcGFyZW50OiB0aGlzXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgLy90aGlzLl8uX3Njb3BlWyByZWYuc3RvcmVJZCBdLnJldGFpbihcInNjb3BlZENoaWxkU2NvcGVcIik7XG4gICAgICAgICAgICAgICAgLy90aGlzLl93YXRjaFN0b3JlKHJlZi5zdG9yZUlkKTtcbiAgICAgICAgICAgICAgICBpZiAoIHJlZi5wYXRoLmxlbmd0aCA+IDEgKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLl8uX3Njb3BlWyByZWYuc3RvcmVJZCBdLm1vdW50KHJlZi5wYXRoLnNsaWNlKDEpLmpvaW4oJy4nKSwgc25hcHNob3QsIHN0YXRlLCBkYXRhKVxuICAgICAgICAgICAgICAgIC8vZWxzZSByZXR1cm4gdGhpcy5fLl9zY29wZVsgcmVmLnN0b3JlSWQgXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vaWYgKCBzbmFwc2hvdCAmJiBpcy5yc1Njb3BlKHN0b3JlKSAmJiAoIHNuYXAgPSBrZXlXYWxrbkdldChzbmFwc2hvdCxcbiAgICAgICAgICAgIC8vIHN0b3JlLl9pZCkgKSAmJiBzbmFwWyAnLycgXSApIHsgcmV0dXJuIHN0b3JlLm1vdW50KE9iamVjdC5rZXlzKHNuYXBbICcvJ1xuICAgICAgICAgICAgLy8gXSkpIH0gZWxzZSBpZiAoIHNuYXBzaG90ICYmIGlzLnJzU3RvcmUoc3RvcmUpICkgc3RvcmUucmVzdG9yZSgpO1xuICAgICAgICAgICAgaWYgKCBpcy5yc1N0b3JlKHN0b3JlKSApIHtcbiAgICAgICAgICAgICAgICBpZiAoIHN0YXRlICE9PSB1bmRlZmluZWQgJiYgZGF0YSA9PT0gdW5kZWZpbmVkIClcbiAgICAgICAgICAgICAgICAgICAgc3RvcmUuc2V0U3RhdGUoc3RhdGUpO1xuICAgICAgICAgICAgICAgIGVsc2UgaWYgKCBzdGF0ZSAhPT0gdW5kZWZpbmVkIClcbiAgICAgICAgICAgICAgICAgICAgc3RvcmUuc3RhdGUgPSBzdGF0ZTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAoIGRhdGEgIT09IHVuZGVmaW5lZCApXG4gICAgICAgICAgICAgICAgICAgIHN0b3JlLnB1c2goZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl93YXRjaFN0b3JlKHJlZi5zdG9yZUlkKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIHJldHVybiB0aGlzLl8uX3Njb3BlWyByZWYuc3RvcmVJZCBdO1xuICAgIH1cbiAgICBcbiAgICBfd2F0Y2hTdG9yZSggaWQsIHN0YXRlLCBkYXRhICkge1xuICAgICAgICBpZiAoICF0aGlzLl8uX2xpc3RlbmluZ1sgaWQgXSAmJiAhaXMuZm4odGhpcy5fLl9zY29wZVsgaWQgXSkgKSB7XG4gICAgICAgICAgICAvL2lmICggaXMucnNTdG9yZSh0aGlzLl8uX3Njb3BlWyBpZCBdKSApIHtcbiAgICAgICAgICAgICF0aGlzLl8uX3Njb3BlWyBpZCBdLl9hdXRvRGVzdHJveSAmJiB0aGlzLl8uX3Njb3BlWyBpZCBdLnJldGFpbihcInNjb3BlZFwiKTtcbiAgICAgICAgICAgICF0aGlzLl8uX3Njb3BlWyBpZCBdLmlzU3RhYmxlKCkgJiYgdGhpcy53YWl0KGlkKTtcbiAgICAgICAgICAgIHRoaXMuXy5fc2NvcGVbIGlkIF0ub24oXG4gICAgICAgICAgICAgICAgdGhpcy5fLl9saXN0ZW5pbmdbIGlkIF0gPSB7XG4gICAgICAgICAgICAgICAgICAgICdkZXN0cm95JyA6IHMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuXy5fbGlzdGVuaW5nWyBpZCBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fLl9zY29wZVsgaWQgXSA9IHRoaXMuXy5fc2NvcGVbIGlkIF0uY29uc3RydWN0b3I7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICd1cGRhdGUnICA6IHMgPT4gdGhpcy5wcm9wYWcoKSxcbiAgICAgICAgICAgICAgICAgICAgJ3N0YWJsZScgIDogcyA9PiB0aGlzLnJlbGVhc2UoaWQpLFxuICAgICAgICAgICAgICAgICAgICAndW5zdGFibGUnOiBzID0+IHRoaXMud2FpdChpZClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogTWl4IHRhcmdldEN0eCBvbiB0aGlzIHNjb3BlXG4gICAgICogTWl4ZWQgc2NvcGUgcGFyZW50cyBhcmUgTk9UIG1hcHBlZFxuICAgICAqIEBwYXJhbSB0YXJnZXRDdHhcbiAgICAgKi9cbiAgICBtaXhpbiggdGFyZ2V0Q3R4ICkge1xuICAgICAgICBsZXQgcGFyZW50ID0gdGhpcy5wYXJlbnQsIGxpc3RzO1xuICAgICAgICB0aGlzLl8uX21peGVkLnB1c2godGFyZ2V0Q3R4KVxuICAgICAgICB0YXJnZXRDdHgucmV0YWluKFwibWl4ZWRUb1wiKTtcbiAgICAgICAgaWYgKCAhdGFyZ2V0Q3R4Ll9zdGFibGUgKVxuICAgICAgICAgICAgdGhpcy53YWl0KHRhcmdldEN0eC5faWQpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fLl9taXhlZExpc3QucHVzaChsaXN0cyA9IHtcbiAgICAgICAgICAgICdzdGFibGUnICA6IHMgPT4gdGhpcy5yZWxlYXNlKHRhcmdldEN0eC5faWQpLFxuICAgICAgICAgICAgJ3Vuc3RhYmxlJzogcyA9PiB0aGlzLndhaXQodGFyZ2V0Q3R4Ll9pZCksXG4gICAgICAgICAgICAndXBkYXRlJyAgOiBzID0+IHRoaXMuX3Byb3BhZygpXG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5hY3Rpb25zID0ge307XG4gICAgICAgIHRoaXMuc3RvcmVzICA9IHt9O1xuICAgICAgICB0aGlzLnN0YXRlICAgPSB7fTtcbiAgICAgICAgdGhpcy5kYXRhICAgID0ge307XG4gICAgICAgIHRhcmdldEN0eC5vbihsaXN0cyk7XG4gICAgICAgIF9fcHJvdG9fX3B1c2godGhpcywgJ2FjdGlvbnMnLCBwYXJlbnQpO1xuICAgICAgICBfX3Byb3RvX19wdXNoKHRoaXMsICdzdG9yZXMnLCBwYXJlbnQpO1xuICAgICAgICBfX3Byb3RvX19wdXNoKHRoaXMsICdzdGF0ZScsIHBhcmVudCk7XG4gICAgICAgIF9fcHJvdG9fX3B1c2godGhpcywgJ2RhdGEnLCBwYXJlbnQpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5yZWxpbmsodGhpcy5fLl9zY29wZSwgdGhpcywgZmFsc2UsIHRydWUpO1xuICAgICAgICB0aGlzLl8uX21peGVkLmZvckVhY2goXG4gICAgICAgICAgICBjdHggPT4ge1xuICAgICAgICAgICAgICAgIF9fcHJvdG9fX3B1c2godGhpcywgJ2FjdGlvbnMnKTtcbiAgICAgICAgICAgICAgICBfX3Byb3RvX19wdXNoKHRoaXMsICdzdG9yZXMnKTtcbiAgICAgICAgICAgICAgICBfX3Byb3RvX19wdXNoKHRoaXMsICdzdGF0ZScpO1xuICAgICAgICAgICAgICAgIF9fcHJvdG9fX3B1c2godGhpcywgJ2RhdGEnKTtcbiAgICAgICAgICAgICAgICBjdHgucmVsaW5rKGN0eC5fLl9zY29wZSwgdGhpcywgdHJ1ZSwgdHJ1ZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBSZWdpc3RlciBzdG9yZXMgaW4gc3RvcmVzTWFwICYgbGluayB0aGVtIGluIHRoZSBwcm90b3NcbiAgICAgKiBAcGFyYW0gc3RvcmVzTWFwXG4gICAgICogQHBhcmFtIHN0YXRlXG4gICAgICogQHBhcmFtIGRhdGFcbiAgICAgKi9cbiAgICByZWdpc3Rlciggc3RvcmVzTWFwLCBzdGF0ZSA9IHt9LCBkYXRhID0ge30gKSB7XG4gICAgICAgIHRoaXMucmVsaW5rKHN0b3Jlc01hcCwgdGhpcywgZmFsc2UsIGZhbHNlKTtcbiAgICAgICAgT2JqZWN0LmtleXMoc3RvcmVzTWFwKS5mb3JFYWNoKFxuICAgICAgICAgICAgaWQgPT4ge1xuICAgICAgICAgICAgICAgIGlmICggaWQgPT0gXCIkcGFyZW50XCIgKSByZXR1cm47XG4gICAgICAgICAgICAgICAgaWYgKCBzdG9yZXNNYXBbIGlkIF0uc2luZ2xldG9uIHx8ICggaXMuZm4oc3RvcmVzTWFwWyBpZCBdKSAmJiAoIHN0YXRlWyBpZCBdIHx8IGRhdGFbIGlkIF0gKSApICkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9tb3VudChpZCwgdW5kZWZpbmVkLCBzdGF0ZVsgaWQgXSwgZGF0YVsgaWQgXSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoIHN0YXRlWyBpZCBdIHx8IGRhdGFbIGlkIF0gKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICggZGF0YVsgaWQgXSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICggc3RhdGVbIGlkIF0gKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcmVzWyBpZCBdLnN0YXRlID0gc3RhdGVbIGlkIF07XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3Jlc1sgaWQgXS5wdXNoKGRhdGFbIGlkIF0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKCBzdGF0ZVsgaWQgXSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcmVzWyBpZCBdLnNldFN0YXRlKHN0YXRlWyBpZCBdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fd2F0Y2hTdG9yZShpZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICApXG4gICAgICAgIFxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBNYXAgc3JjQ3R4IHN0b3JlJ3Mgb24gdGFyZ2V0Q3R4IGhlYWRlcnMgcHJvdG8nc1xuICAgICAqIEBwYXJhbSBzcmNDdHhcbiAgICAgKiBAcGFyYW0gdGFyZ2V0Q3R4XG4gICAgICogQHBhcmFtIHN0YXRlXG4gICAgICogQHBhcmFtIGRhdGFcbiAgICAgKi9cbiAgICByZWxpbmsoIHNyY0N0eCwgdGFyZ2V0Q3R4ID0gdGhpcywgZXh0ZXJuYWwsIGZvcmNlICkge1xuICAgICAgICBsZXQgbGN0eCA9IHRhcmdldEN0eC5fLnN0b3Jlcy5wcm90b3R5cGU7XG4gICAgICAgIE9iamVjdC5rZXlzKHNyY0N0eClcbiAgICAgICAgICAgICAgLmZvckVhY2goXG4gICAgICAgICAgICAgICAgICBpZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKCAhZm9yY2UgJiYgdGFyZ2V0Q3R4Ll8uX3Njb3BlWyBpZCBdID09PSBzcmNDdHhbIGlkIF0gfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldEN0eC5fLl9zY29wZVsgaWQgXSAmJiAoIHRhcmdldEN0eC5fLl9zY29wZVsgaWQgXS5jb25zdHJ1Y3RvciA9PT0gc3JjQ3R4WyBpZCBdICkgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgaWYgKCAhZm9yY2UgJiYgdGFyZ2V0Q3R4Ll8uX3Njb3BlWyBpZCBdICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoICFleHRlcm5hbCAmJiAhaXMuZm4odGFyZ2V0Q3R4Ll8uX3Njb3BlWyBpZCBdKSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuaW5mbyhcIlJlc2NvcGUgU3RvcmUgOiBcIiwgaWQsIFwiIGFscmVhZHkgZXhpc3QgaW4gdGhpcyBzY29wZSAhICggSG90IHN3aXRjaGluZyB0aGUgc3RvcmUgKVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0bXAgICAgICAgICAgICAgICAgICA9IHRhcmdldEN0eC5fLl9zY29wZVsgaWQgXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldEN0eC5fLl9zY29wZVsgaWQgXSA9IHRhcmdldEN0eC5fLl9zY29wZVsgaWQgXS5jb25zdHJ1Y3RvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX21vdW50KGlkLCBudWxsLCB0bXAuc3RhdGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG1wLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vdGFyZ2V0Q3R4Ll8uX3Njb3BlWyBpZCBdLl9fcHJvdG9fXyA9IHRtcC5fX3Byb3RvX187XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCAhZXh0ZXJuYWwgJiYgaXMuZm4odGFyZ2V0Q3R4Ll8uX3Njb3BlWyBpZCBdKSApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRDdHguXy5fc2NvcGVbIGlkIF0gPSBzcmNDdHhbIGlkIF07XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKCAhZm9yY2UgJiYgIWV4dGVybmFsIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fLl9zY29wZVsgaWQgXSA9IHNyY0N0eFsgaWQgXTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxjdHgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnVtZXJhYmxlICA6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXQgICAgICAgICA6ICgpID0+IHRoaXMuXy5fc2NvcGVbIGlkIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKCBpZCA9PSBcIiRwYXJlbnRcIiApIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldEN0eC5fLnN0YXRlLnByb3RvdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudW1lcmFibGUgIDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldCAgICAgICAgIDogKCkgPT4gKCB0aGlzLl8uX3Njb3BlWyBpZCBdICYmIHRoaXMuXy5fc2NvcGVbIGlkIF0uc3RhdGUgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldCAgICAgICAgIDogKCB2ICkgPT4gKCB0aGlzLl9tb3VudChpZCwgdW5kZWZpbmVkLCB2KSApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0Q3R4Ll8uZGF0YS5wcm90b3R5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnVtZXJhYmxlICA6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXQgICAgICAgICA6ICgpID0+ICggdGhpcy5fLl9zY29wZVsgaWQgXSAmJiB0aGlzLl8uX3Njb3BlWyBpZCBdLmRhdGEgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldCAgICAgICAgIDogKCB2ICkgPT4gKCB0aGlzLl9tb3VudChpZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHYpIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgbGV0IGFjdGlvbnMgICAgICAgPSBzcmNDdHhbIGlkIF0gaW5zdGFuY2VvZiBTY29wZS5TdG9yZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBzcmNDdHhbIGlkIF0uY29uc3RydWN0b3IuYWN0aW9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBzcmNDdHhbIGlkIF0uYWN0aW9ucyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlQWN0aW9ucyA9IHRhcmdldEN0eC5fLmFjdGlvbnMucHJvdG90eXBlO1xuICAgICAgICAgICAgICAgICAgICAgIGlmICggaXMucnNTY29wZSh0aGlzLl8uX3Njb3BlWyBpZCBdLnByb3RvdHlwZSkgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9tb3VudChpZCk7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKCBpcy5yc1Njb3BlKHRoaXMuXy5fc2NvcGVbIGlkIF0pICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVBY3Rpb25zWyBpZCBdID0gdGhpcy5fLl9zY29wZVsgaWQgXS5hY3Rpb25zO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBpZiAoICFpcy5yc1N0b3JlKHRoaXMuXy5fc2NvcGVbIGlkIF0pICYmICFpcy5yc1N0b3JlKHRoaXMuXy5fc2NvcGVbIGlkIF0ucHJvdG90eXBlKSApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25zICYmXG4gICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoYWN0aW9ucylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZm9yRWFjaChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCBhY3QgKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIGFjdGl2ZUFjdGlvbnMuaGFzT3duUHJvcGVydHkoYWN0KSApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlQWN0aW9uc1sgYWN0IF0uX190YXJnZXRTdG9yZXMrKztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZUFjdGlvbnNbIGFjdCBdICAgICAgICAgICAgICAgID0gdGhpcy5kaXNwYXRjaC5iaW5kKHRoaXMsIGFjdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlQWN0aW9uc1sgYWN0IF0uX190YXJnZXRTdG9yZXMgPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICApXG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIEJpbmQgc3RvcmVzIGZyb20gdGhpcyBzY29wZSwgaGlzIHBhcmVudHMgYW5kIG1peGVkIHNjb3BlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gb2JqIHtSZWFjdC5Db21wb25lbnR8U3RvcmV8ZnVuY3Rpb259XG4gICAgICogQHBhcmFtIGtleSB7c3RyaW5nfSBzdG9yZXMga2V5cyB0byBiaW5kIHVwZGF0ZXNcbiAgICAgKiBAcGFyYW0gYXNcbiAgICAgKiBAcGFyYW0gc2V0SW5pdGlhbCB7Ym9vbH0gZmFsc2UgdG8gbm90IHByb3BhZyBpbml0aWFsIHZhbHVlIChkZWZhdWx0IDogdHJ1ZSlcbiAgICAgKi9cbiAgICBiaW5kKCBvYmosIGtleSwgYXMsIHNldEluaXRpYWwgPSB0cnVlLCByZXZNYXAgPSB7fSApIHtcbiAgICAgICAgbGV0IGxhc3RSZXZzLCBkYXRhLCByZWZLZXlzO1xuICAgICAgICBpZiAoIGtleSAmJiAhaXMuYXJyYXkoa2V5KSApXG4gICAgICAgICAgICBrZXkgPSBbIGtleSBdO1xuICAgICAgICBcbiAgICAgICAgaWYgKCBhcyA9PT0gZmFsc2UgfHwgYXMgPT09IHRydWUgKSB7XG4gICAgICAgICAgICBzZXRJbml0aWFsID0gYXM7XG4gICAgICAgICAgICBhcyAgICAgICAgID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmVmS2V5cyA9IGtleVxuICAgICAgICAgICAgLm1hcChpZCA9PiAoIGlzLnN0cmluZyhpZCkgPyBpZCA6IGlkLm5hbWUgKSlcbiAgICAgICAgICAgIC5tYXAoaWQgPT4gKCB0aGlzLnBhcnNlUmVmKGlkKSApKTtcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICB0aGlzLl8uZm9sbG93ZXJzLnB1c2goXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgb2JqLFxuICAgICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgICBhcyB8fCB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgbGFzdFJldnMgPSByZWZLZXlzLnJlZHVjZSgoIHJldnMsIHJlZiApID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV2c1sgcmVmLnN0b3JlSWQgXSA9IHJldnNbIHJlZi5zdG9yZUlkIF0gfHwge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV2IDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZnM6IFtdXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIHJldnNbIHJlZi5zdG9yZUlkIF0ucmVmcy5wdXNoKHJlZik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXZzO1xuICAgICAgICAgICAgICAgIH0sIHJldk1hcClcbiAgICAgICAgICAgIF0pO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5tb3VudChrZXkpO1xuICAgICAgICB0aGlzLnJldGFpblN0b3JlcyhPYmplY3Qua2V5cyhsYXN0UmV2cyksICdsaXN0ZW5lcnMnKTtcbiAgICAgICAgXG4gICAgICAgIGlmICggc2V0SW5pdGlhbCAmJiB0aGlzLl9zdGFibGUgKSB7XG4gICAgICAgICAgICBkYXRhID0gdGhpcy5nZXRVcGRhdGVzKGxhc3RSZXZzKTtcbiAgICAgICAgICAgIGlmICggIWRhdGEgKSByZXR1cm4gdGhpcztcbiAgICAgICAgICAgIGlmICggdHlwZW9mIG9iaiAhPSBcImZ1bmN0aW9uXCIgKSB7XG4gICAgICAgICAgICAgICAgaWYgKCBhcyApIG9iai5zZXRTdGF0ZSh7IFsgYXMgXTogZGF0YSB9KTtcbiAgICAgICAgICAgICAgICBlbHNlIG9iai5zZXRTdGF0ZShkYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIG9iaihkYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogVW4gYmluZCB0aGlzIHNjb3BlIG9mZiB0aGUgZ2l2ZW4gY29tcG9uZW50LWtleXNcbiAgICAgKiBAcGFyYW0gb2JqXG4gICAgICogQHBhcmFtIGtleVxuICAgICAqIEByZXR1cm5zIHtBcnJheS48Kj59XG4gICAgICovXG4gICAgdW5CaW5kKCBvYmosIGtleSwgYXMgKSB7XG4gICAgICAgIHZhciBmb2xsb3dlcnMgPSB0aGlzLl8uZm9sbG93ZXJzLFxuICAgICAgICAgICAgaSAgICAgICAgID0gZm9sbG93ZXJzICYmIGZvbGxvd2Vycy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggZm9sbG93ZXJzICYmIGktLSApXG4gICAgICAgICAgICBpZiAoIGZvbGxvd2Vyc1sgaSBdWyAwIF0gPT09IG9iaiAmJiAoICcnICsgZm9sbG93ZXJzWyBpIF1bIDEgXSApID09ICggJycgKyBrZXkgKSAmJlxuICAgICAgICAgICAgICAgICBmb2xsb3dlcnNbIGkgXVsgMiBdID09IGFzICkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGlzcG9zZVN0b3JlcyhPYmplY3Qua2V5cyhmb2xsb3dlcnNbIGkgXVsgMyBdKSwgJ2xpc3RlbmVycycpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmb2xsb3dlcnMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBNb3VudCB0aGUgc3RvcmVzIGluIHN0b3Jlc0xpc3QgZnJvbSB0aGlzIHNjb3BlLCBpdHMgcGFyZW50cyBhbmQgbWl4ZWQgc2NvcGVcbiAgICAgKiBCaW5kIHRoZW0gdG8gJ3RvJ1xuICAgICAqIEhvb2sgJ3RvJyBzbyBpdCB3aWxsIGF1dG8gdW5iaW5kIG9uICdkZXN0cm95JyBvciAnY29tcG9uZW50V2lsbFVubW91bnQnXG4gICAgICogQHBhcmFtIHRvXG4gICAgICogQHBhcmFtIHN0b3Jlc0xpc3RcbiAgICAgKiBAcGFyYW0gYmluZFxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IEluaXRpYWwgb3V0cHV0cyBvZiB0aGUgc3RvcmVzIGluICdzdG9yZXNMaXN0J1xuICAgICAqL1xuICAgIG1hcCggdG8sIHN0b3Jlc0xpc3QsIGJpbmQgPSB0cnVlLCByZXZNYXAgKSB7XG4gICAgICAgIGxldCBTdG9yZSAgID0gdGhpcy5jb25zdHJ1Y3Rvci5TdG9yZTtcbiAgICAgICAgc3RvcmVzTGlzdCAgPSBpcy5hcnJheShzdG9yZXNMaXN0KSA/IHN0b3Jlc0xpc3QgOiBbIHN0b3Jlc0xpc3QgXTtcbiAgICAgICAgbGV0IHJlZkxpc3QgPSBzdG9yZXNMaXN0Lm1hcCh0aGlzLnBhcnNlUmVmKTtcbiAgICAgICAgdGhpcy5tb3VudChzdG9yZXNMaXN0KTtcbiAgICAgICAgaWYgKCBiaW5kICYmIHRvIGluc3RhbmNlb2YgU3RvcmUgKSB7XG4gICAgICAgICAgICBTdG9yZS5tYXAodG8sIHN0b3Jlc0xpc3QsIHRoaXMsIHRoaXMsIGZhbHNlKVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCBiaW5kICkge1xuICAgICAgICAgICAgdGhpcy5iaW5kKHRvLCBzdG9yZXNMaXN0LCB1bmRlZmluZWQsIGZhbHNlKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgbGV0IG1peGVkQ1dVbm1vdW50LFxuICAgICAgICAgICAgICAgIHVuTW91bnRLZXkgPSB0by5pc1JlYWN0Q29tcG9uZW50ID8gXCJjb21wb25lbnRXaWxsVW5tb3VudFwiIDogXCJkZXN0cm95XCI7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmICggdG8uaGFzT3duUHJvcGVydHkodW5Nb3VudEtleSkgKSB7XG4gICAgICAgICAgICAgICAgbWl4ZWRDV1VubW91bnQgPSB0b1sgdW5Nb3VudEtleSBdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB0b1sgdW5Nb3VudEtleSBdID0gKCAuLi5hcmd6ICkgPT4ge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSB0b1sgdW5Nb3VudEtleSBdO1xuICAgICAgICAgICAgICAgIGlmICggbWl4ZWRDV1VubW91bnQgKVxuICAgICAgICAgICAgICAgICAgICB0b1sgdW5Nb3VudEtleSBdID0gbWl4ZWRDV1VubW91bnQ7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdGhpcy51bkJpbmQodG8sIHN0b3Jlc0xpc3QpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0b1sgdW5Nb3VudEtleSBdICYmIHRvWyB1bk1vdW50S2V5IF0oLi4uYXJneik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmV2TWFwICYmIHRoaXMuZ2V0VXBkYXRlcyhyZXZNYXApIHx8IHJlZkxpc3QucmVkdWNlKCggZGF0YSwgcmVmICkgPT4ge1xuICAgICAgICAgICAgd2Fsa25TZXQoZGF0YSwgcmVmLmFsaWFzIHx8IHJlZi5wYXRoLCB0aGlzLnJldHJpZXZlKHJlZi5wYXRoKSlcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9LCB7fSk7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIEdldCBjdXJyZW50IGRhdGEgdmFsdWUgZnJvbSBqc29uIHBhdGhcbiAgICAgKiBAcGFyYW0gcGF0aFxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd8Kn1cbiAgICAgKi9cbiAgICByZXRyaWV2ZSggcGF0aCA9IFwiXCIgKSB7XG4gICAgICAgIHBhdGggPSBpcy5zdHJpbmcocGF0aCkgPyBwYXRoLnNwbGl0KCcuJykgOiBwYXRoO1xuICAgICAgICByZXR1cm4gcGF0aCAmJlxuICAgICAgICAgICAgICAgdGhpcy5zdG9yZXNbIHBhdGhbIDAgXSBdICYmXG4gICAgICAgICAgICAgICB0aGlzLnN0b3Jlc1sgcGF0aFsgMCBdIF0ucmV0cmlldmUgJiZcbiAgICAgICAgICAgICAgIHRoaXMuc3RvcmVzWyBwYXRoWyAwIF0gXS5yZXRyaWV2ZShwYXRoLnNsaWNlKDEpKTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogR2V0IGN1cnJlbnQgc3RvcmUgZnJvbSBqc29uIHBhdGhcbiAgICAgKiBAcGFyYW0gcGF0aFxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd8Kn1cbiAgICAgKi9cbiAgICByZXRyaWV2ZVN0b3JlKCBwYXRoID0gXCJcIiApIHtcbiAgICAgICAgcGF0aCA9IGlzLnN0cmluZyhwYXRoKSA/IHBhdGguc3BsaXQoJy4nKSA6IHBhdGg7XG4gICAgICAgIHJldHVybiBwYXRoXG4gICAgICAgICAgICAgICAmJiBwYXRoLmxlbmd0aFxuICAgICAgICAgICAgICAgJiYgKFxuICAgICAgICAgICAgICAgcGF0aC5sZW5ndGggIT0gMSAmJiB0aGlzLnN0b3Jlc1sgcGF0aFsgMCBdIF0ucmV0cmlldmVTdG9yZVxuICAgICAgICAgICAgICAgPyB0aGlzLnN0b3Jlc1sgcGF0aFsgMCBdIF0ucmV0cmlldmVTdG9yZShwYXRoLnNsaWNlKDEpKVxuICAgICAgICAgICAgICAgOiBwYXRoLmxlbmd0aCA9PSAxICYmIHRoaXMuc3RvcmVzWyBwYXRoWyAwIF0gXVxuICAgICAgICAgICAgICAgKTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogR2V0IG9yIHVwZGF0ZSBzdG9yZXNSZXZNYXAncyByZXZpc2lvbnNcbiAgICAgKiBAcGFyYW0gc3RvcmVzUmV2TWFwXG4gICAgICogQHBhcmFtIGxvY2FsXG4gICAgICogQHJldHVybnMge3t9fVxuICAgICAqL1xuICAgIGdldFN0b3Jlc1JldnMoIHN0b3Jlc1Jldk1hcCA9IHt9LCBsb2NhbCApIHtcbiAgICAgICAgbGV0IGN0eCA9IHRoaXMuXy5fc2NvcGU7XG4gICAgICAgIGlmICggIXN0b3Jlc1Jldk1hcCApIHtcbiAgICAgICAgICAgIHN0b3Jlc1Jldk1hcCA9IHt9O1xuICAgICAgICB9XG4gICAgICAgIE9iamVjdC5rZXlzKGN0eCkuZm9yRWFjaChcbiAgICAgICAgICAgIGlkID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIGlkID09IFwiJHBhcmVudFwiICkgcmV0dXJuO1xuICAgICAgICAgICAgICAgIGlmICggIWlzLmZuKGN0eFsgaWQgXSlcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgc3RvcmVzUmV2TWFwWyBpZCBdID0gY3R4WyBpZCBdLl9yZXY7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKCAhc3RvcmVzUmV2TWFwLmhhc093blByb3BlcnR5KGlkKSApXG4gICAgICAgICAgICAgICAgICAgIHN0b3Jlc1Jldk1hcFsgaWQgXSA9IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIGlmICggIWxvY2FsICkge1xuICAgICAgICAgICAgdGhpcy5fLl9taXhlZC5yZWR1Y2UoKCB1cGRhdGVkLCBjdHggKSA9PiAoIGN0eC5nZXRTdG9yZXNSZXZzKHN0b3Jlc1Jldk1hcCksIHN0b3Jlc1Jldk1hcCApLCBzdG9yZXNSZXZNYXApO1xuICAgICAgICAgICAgdGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuZ2V0U3RvcmVzUmV2cyhzdG9yZXNSZXZNYXApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdG9yZXNSZXZNYXA7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIEdldCB1cGRhdGVkIG91dHB1dCBiYXNpbmcgc3RvcmVzUmV2TWFwJ3MgcmV2aXNpb25zLlxuICAgICAqIElmIGEgc3RvcmUgaW4gJ3N0b3Jlc1Jldk1hcCcgd2FzIHVwZGF0ZWQ7IGFkZCBpdCB0byAnb3V0cHV0JyAmIHVwZGF0ZSBzdG9yZXNSZXZNYXBcbiAgICAgKiBAcGFyYW0gc3RvcmVzUmV2TWFwXG4gICAgICogQHBhcmFtIG91dHB1dFxuICAgICAqIEBwYXJhbSB1cGRhdGVkXG4gICAgICogQHJldHVybnMgeyp8e319XG4gICAgICovXG4gICAgZ2V0UmVmc1VwZGF0ZXMoIHJlZnMsIHJldk1hcCwgb3V0cHV0ICkge1xuICAgICAgICBcbiAgICAgICAgcmV2TWFwID0gcmV2TWFwIHx8IHJlZnNcbiAgICAgICAgICAgIC5tYXAoaWQgPT4gKCBpcy5zdHJpbmcoaWQpID8gaWQgOiBpZC5uYW1lICkpXG4gICAgICAgICAgICAubWFwKGlkID0+ICggdGhpcy5wYXJzZVJlZihpZCkgKSlcbiAgICAgICAgICAgIC5yZWR1Y2UoKCByZXZzLCByZWYgKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV2c1sgcmVmLnN0b3JlSWQgXSA9IHJldnNbIHJlZi5zdG9yZUlkIF0gfHwge1xuICAgICAgICAgICAgICAgICAgICByZXYgOiAwLFxuICAgICAgICAgICAgICAgICAgICByZWZzOiBbXVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgcmV2c1sgcmVmLnN0b3JlSWQgXS5yZWZzLnB1c2gocmVmKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmV2cztcbiAgICAgICAgICAgIH0sIHt9KTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiB0aGlzLmdldFVwZGF0ZXMocmV2TWFwLCBvdXRwdXQpXG4gICAgICAgIFxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBHZXQgb3IgdXBkYXRlIG91dHB1dCBiYXNpbmcgc3RvcmVzUmV2TWFwJ3MgcmV2aXNpb25zLlxuICAgICAqIElmIGEgc3RvcmUgaW4gJ3N0b3Jlc1Jldk1hcCcgd2FzIHVwZGF0ZWQ7IGFkZCBpdCB0byAnb3V0cHV0JyAmIHVwZGF0ZSBzdG9yZXNSZXZNYXBcbiAgICAgKiBAcGFyYW0gc3RvcmVzUmV2TWFwXG4gICAgICogQHBhcmFtIG91dHB1dFxuICAgICAqIEBwYXJhbSB1cGRhdGVkXG4gICAgICogQHJldHVybnMgeyp8e319XG4gICAgICovXG4gICAgZ2V0VXBkYXRlcyggc3RvcmVzUmV2TWFwLCBvdXRwdXQsIHVwZGF0ZWQgKSB7XG4gICAgICAgIGxldCBjdHggPSB0aGlzLl8uX3Njb3BlO1xuICAgICAgICBcbiAgICAgICAgb3V0cHV0ID0gb3V0cHV0IHx8IHt9O1xuICAgICAgICBPYmplY3Qua2V5cyhjdHgpLmZvckVhY2goXG4gICAgICAgICAgICBpZCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCBpZCA9PSBcIiRwYXJlbnRcIiApIHJldHVybjtcbiAgICAgICAgICAgICAgICBpZiAoICFvdXRwdXQuaGFzT3duUHJvcGVydHkoaWQpICYmICFpcy5mbihjdHhbIGlkIF0pXG4gICAgICAgICAgICAgICAgICAgICAmJiAoICFzdG9yZXNSZXZNYXBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfHwgKCBzdG9yZXNSZXZNYXAuaGFzT3duUHJvcGVydHkoaWQpICYmIHN0b3Jlc1Jldk1hcFsgaWQgXSA9PT0gdW5kZWZpbmVkIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfHwgISggIXN0b3Jlc1Jldk1hcC5oYXNPd25Qcm9wZXJ0eShpZCkgfHwgY3R4WyBpZCBdLl9yZXYgPD0gc3RvcmVzUmV2TWFwWyBpZCBdLnJldiApIClcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZWQgICAgICA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIG91dHB1dFsgaWQgXSA9IHRoaXMuZGF0YVsgaWQgXTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGlmICggc3RvcmVzUmV2TWFwICYmIHN0b3Jlc1Jldk1hcC5oYXNPd25Qcm9wZXJ0eShpZCkgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9yZXNSZXZNYXBbIGlkIF0gICAgID0gc3RvcmVzUmV2TWFwWyBpZCBdIHx8IHsgcmV2OiAwLCByZWZzOiBbXSB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmVzUmV2TWFwWyBpZCBdLnJldiA9IGN0eFsgaWQgXS5fcmV2O1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmVzUmV2TWFwWyBpZCBdLnJlZnMuZm9yRWFjaChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWYgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUud2FybihcInVwZGF0ZSByZWYgXCIsIHJlZi5yZWYsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMucmV0cmlldmUocmVmLnBhdGgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0WyByZWYuYWxpYXMgXSA9IHRoaXMucmV0cmlldmUocmVmLnBhdGgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS53YXJuKFwidXBkYXRlIFwiLCBpZCwgdGhpcy5kYXRhW2lkXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXRbIGlkIF0gPSB0aGlzLmRhdGFbIGlkIF07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICB1cGRhdGVkID0gdGhpcy5fLl9taXhlZC5yZWR1Y2VSaWdodCgoIHVwZGF0ZWQsIGN0eCApID0+ICggY3R4LmdldFVwZGF0ZXMoc3RvcmVzUmV2TWFwLCBvdXRwdXQsIHVwZGF0ZWQpIHx8IHVwZGF0ZWQgKSwgdXBkYXRlZCk7XG4gICAgICAgIHVwZGF0ZWQgPSB0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC5nZXRVcGRhdGVzKHN0b3Jlc1Jldk1hcCwgb3V0cHV0LCB1cGRhdGVkKSB8fCB1cGRhdGVkO1xuICAgICAgICByZXR1cm4gdXBkYXRlZCAmJiBvdXRwdXQ7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIFJlY3Vyc2l2ZWx5IGdldCBhbGwgY2hpbGQgc2NvcGVzXG4gICAgICogQHBhcmFtIGNoaWxkc1xuICAgICAqIEByZXR1cm5zIHtBcnJheX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF9nZXRBbGxDaGlsZHMoIGNoaWxkcyA9IFtdICkge1xuICAgICAgICBjaGlsZHMucHVzaCguLi50aGlzLl8uY2hpbGRTY29wZXMpO1xuICAgICAgICB0aGlzLl8uY2hpbGRTY29wZXMuZm9yRWFjaChcbiAgICAgICAgICAgIGN0eCA9PiB7XG4gICAgICAgICAgICAgICAgY3R4Ll9nZXRBbGxDaGlsZHMoY2hpbGRzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIGNoaWxkcztcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogU2VyaWFsaXplIGFsbCBhY3RpdmUgc3RvcmVzIHN0YXRlICYgZGF0YSBpbiBldmVyeSBjaGlsZHMgJiBtaXhlZCBzY29wZXNcbiAgICAgKlxuICAgICAqIFNjb3BlcyB3aXRob3V0IGtleSBvciBpZCBhcmUgaWdub3JlZFxuICAgICAqIEBwYXJhbSBvdXRwdXRcbiAgICAgKiBAcmV0dXJucyB7e319XG4gICAgICovXG4gICAgc2VyaWFsaXplKCBjZmcgPSB7fSwgb3V0cHV0ID0ge30gKSB7XG4gICAgICAgIGxldCBjdHggICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID0gdGhpcy5fLl9zY29wZSxcbiAgICAgICAgICAgIHsgYWxpYXMsIHdpdGhDaGlsZHMgPSB0cnVlLCB3aXRoUGFyZW50cywgd2l0aE1peGVkID0gdHJ1ZSwgbm9yZWZzIH0gPSBjZmc7XG4gICAgICAgIFxuICAgICAgICBpZiAoIGtleVdhbGtuR2V0KG91dHB1dCwgdGhpcy5faWQpIClcbiAgICAgICAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgICAgIFxuICAgICAgICAvL0B0b2RvIDogYmV0dGVyIHNlcmlhbGl6ZSBtZXRob2RcbiAgICAgICAga2V5V2Fsa25TZXQob3V0cHV0LCB0aGlzLl9pZCwge30pO1xuICAgICAgICBcbiAgICAgICAgT2JqZWN0LmtleXMoY3R4KS5mb3JFYWNoKFxuICAgICAgICAgICAgaWQgPT4ge1xuICAgICAgICAgICAgICAgIGlmICggaWQgPT0gXCIkcGFyZW50XCIgfHwgaXMuZm4oY3R4WyBpZCBdKSApXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBjdHhbIGlkIF0uc2VyaWFsaXplKGNmZywgb3V0cHV0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgICAgICBcbiAgICAgICAgd2l0aFBhcmVudHMgJiYgdGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuc2VyaWFsaXplKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRoQ2hpbGQgIDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aFBhcmVudHM6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aE1peGVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcmVmc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgb3V0cHV0KTtcbiAgICAgICAgXG4gICAgICAgIHdpdGhDaGlsZHMgJiYgdGhpcy5fLmNoaWxkU2NvcGVzLmZvckVhY2goXG4gICAgICAgICAgICBjdHggPT4ge1xuICAgICAgICAgICAgICAgICFjdHguXy5pc0xvY2FsSWQgJiYgY3R4LnNlcmlhbGl6ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRoQ2hpbGQgIDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpdGhQYXJlbnRzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpdGhNaXhlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcmVmc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBvdXRwdXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICBcbiAgICAgICAgd2l0aE1peGVkICYmIHRoaXMuXy5fbWl4ZWQuZm9yRWFjaChcbiAgICAgICAgICAgIGN0eCA9PiB7XG4gICAgICAgICAgICAgICAgIWN0eC5fLmlzTG9jYWxJZCAmJiBjdHguc2VyaWFsaXplKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpdGhDaGlsZCAgOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpdGhQYXJlbnRzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpdGhNaXhlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcmVmc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBvdXRwdXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICBcbiAgICAgICAgaWYgKCBhbGlhcyApIHtcbiAgICAgICAgICAgIG91dHB1dCA9IE9iamVjdC5rZXlzKG91dHB1dClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZWR1Y2UoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCBoLCBrICkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoWyBrLnN0YXJ0c1dpdGgoYWxpYXMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gYWxpYXMgKyBrLnN1YnN0cihhbGlhcy5sZW5ndGgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogayBdID0gb3V0cHV0WyBrIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIFJlc3RvcmUgc3RhdGUgJiBkYXRhIGZyb20gdGhlIHNlcmlhbGl6ZSBmblxuICAgICAqIEBwYXJhbSBzbmFwc2hvdFxuICAgICAqIEBwYXJhbSBmb3JjZVxuICAgICAqL1xuICAgIHJlc3RvcmUoIHNuYXBzaG90LCBjZmcgPSB7fSwgZm9yY2UgPSBpcy5ib29sKGNmZykgJiYgY2ZnICkge1xuICAgICAgICBsZXQgY3R4ICA9IHRoaXMuXy5fc2NvcGUsIHNuYXA7XG4gICAgICAgIHNuYXBzaG90ID0gc25hcHNob3RcbiAgICAgICAgICAgICAgICAgICAmJiBrZXlXYWxrbkdldChzbmFwc2hvdCwgdGhpcy5faWQpXG4gICAgICAgICAgICAgICAgICAgfHwgdGhpcy50YWtlU25hcHNob3RCeUtleSh0aGlzLl9pZCk7XG4gICAgICAgIFxuICAgICAgICBpZiAoICFzbmFwc2hvdCApXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIFxuICAgICAgICB0aGlzLl8uc25hcHNob3QgPSBzbmFwc2hvdDtcbiAgICAgICAgXG4gICAgICAgIHNuYXAgPSBzbmFwc2hvdFsgJy8nIF07XG4gICAgICAgIFxuICAgICAgICBzbmFwICYmIE9iamVjdC5rZXlzKHNuYXApLmZvckVhY2goXG4gICAgICAgICAgICBuYW1lID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIG5hbWUgPT0gXCIkcGFyZW50XCIgKSByZXR1cm47XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKCBjdHhbIG5hbWUgXSApIHtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGlmICggZm9yY2UgJiYgIWlzLmZuKGN0eFsgbmFtZSBdKSApXG4gICAgICAgICAgICAgICAgICAgICAgICBjdHhbIG5hbWUgXS5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9tb3VudChuYW1lKTsvLyBxdWlldFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgICAgICBcbiAgICAgICAgdGhpcy5fLl9taXhlZC5mb3JFYWNoKFxuICAgICAgICAgICAgY3R4ID0+IHtcbiAgICAgICAgICAgICAgICAhY3R4Ll8uaXNMb2NhbElkICYmIGN0eC5yZXN0b3JlKHVuZGVmaW5lZCwgZm9yY2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fLmNoaWxkU2NvcGVzLmZvckVhY2goXG4gICAgICAgICAgICBjdHggPT4ge1xuICAgICAgICAgICAgICAgICFjdHguXy5pc0xvY2FsSWQgJiYgY3R4LnJlc3RvcmUodW5kZWZpbmVkLCBmb3JjZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIFxuICAgIH1cbiAgICBcbiAgICBnZXRTbmFwc2hvdEJ5S2V5KCBrZXksIGxvY2FsICkge1xuICAgICAgICAvLyBvbmx5IGhhdmUgdGhlIGxvY2FsIHNuYXBcbiAgICAgICAgaWYgKCB0aGlzLl8uc25hcHNob3QgJiYga2V5LnN0YXJ0c1dpdGgodGhpcy5faWQpICkge1xuICAgICAgICAgICAgbGV0IG9iaiA9IGtleVdhbGtuR2V0KHRoaXMuXy5zbmFwc2hvdCwga2V5LnN1YnN0cih0aGlzLl9pZC5sZW5ndGgpKVxuICAgICAgICAgICAgLy9pZiAoIG9iaiApIHtcbiAgICAgICAgICAgIC8vICAgIHRoaXMuZGVsZXRlU25hcHNob3RCeUtleShrZXkpO1xuICAgICAgICAgICAgLy99XG4gICAgICAgICAgICByZXR1cm4gb2JqO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgcmV0dXJuICFsb2NhbFxuICAgICAgICAgICAgICAgICAgICAmJiB0aGlzLnBhcmVudFxuICAgICAgICAgICAgICAgICAgICAmJiB0aGlzLnBhcmVudC5nZXRTbmFwc2hvdEJ5S2V5KGtleSlcbiAgICAgICAgICAgICAgICAgICAgfHxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9yZXMuJHBhcmVudFxuICAgICAgICAgICAgICAgICAgICAmJiB0aGlzLnN0b3Jlcy4kcGFyZW50LmdldFNuYXBzaG90QnlLZXkoa2V5KTtcbiAgICAgICAgXG4gICAgfVxuICAgIFxuICAgIGdldFNuYXBzaG90QnlLZXlFeHQoIHNuYXBzaG90LCBrZXksIGxvY2FsICkge1xuICAgICAgICAvLyBvbmx5IGhhdmUgdGhlIGxvY2FsIHNuYXBcbiAgICAgICAgaWYgKCBzbmFwc2hvdCApIHtcbiAgICAgICAgICAgIGxldCBvYmogPSBrZXlXYWxrbkdldChzbmFwc2hvdCwga2V5KVxuICAgICAgICAgICAgcmV0dXJuIG9iajtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG4gICAgXG4gICAgdGFrZVNuYXBzaG90QnlLZXkoIGtleSwgbG9jYWwgKSB7XG4gICAgICAgIGlmICggdGhpcy5fLnNuYXBzaG90ICYmIGtleS5zdGFydHNXaXRoKHRoaXMuX2lkKSApIHtcbiAgICAgICAgICAgIGxldCBvYmogPSBrZXlXYWxrbkdldCh0aGlzLl8uc25hcHNob3QsIGtleS5zdWJzdHIodGhpcy5faWQubGVuZ3RoKSlcbiAgICAgICAgICAgIGlmICggb2JqICkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlU25hcHNob3RCeUtleShrZXksIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG9iajtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHJldHVybiAhbG9jYWxcbiAgICAgICAgICAgICAgICAgICAgJiYgdGhpcy5wYXJlbnRcbiAgICAgICAgICAgICAgICAgICAgJiYgdGhpcy5wYXJlbnQudGFrZVNuYXBzaG90QnlLZXkoa2V5KVxuICAgICAgICAgICAgICAgICAgICB8fFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3Jlcy4kcGFyZW50XG4gICAgICAgICAgICAgICAgICAgICYmIHRoaXMuc3RvcmVzLiRwYXJlbnQudGFrZVNuYXBzaG90QnlLZXkoa2V5KTtcbiAgICB9XG4gICAgXG4gICAgZGVsZXRlU25hcHNob3RCeUtleSgga2V5LCBsb2NhbCApIHtcbiAgICAgICAgaWYgKCB0aGlzLl8uc25hcHNob3QgJiYga2V5LnN0YXJ0c1dpdGgodGhpcy5faWQpICkge1xuICAgICAgICAgICAgbGV0IG9iaiA9IGtleVdhbGtuR2V0KHRoaXMuXy5zbmFwc2hvdCwga2V5LnN1YnN0cih0aGlzLl9pZC5sZW5ndGgpLnJlcGxhY2UoL14oLipbXFw+fFxcL10pW15cXD58XFwvXSskL2lnLCAnJDEnKSlcbiAgICAgICAgICAgIGlmICggb2JqIClcbiAgICAgICAgICAgICAgICBkZWxldGUgb2JqWyBrZXkucmVwbGFjZSgvXi4qW1xcPnxcXC9dKFteXFw+fFxcL10rKSQvaWcsICckMScpIF1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gIWxvY2FsXG4gICAgICAgICAgICAgICAmJiB0aGlzLnBhcmVudFxuICAgICAgICAgICAgICAgJiYgdGhpcy5wYXJlbnQuZGVsZXRlU25hcHNob3RCeUtleShrZXkpXG4gICAgICAgICAgICAgICB8fFxuICAgICAgICAgICAgICAgdGhpcy5zdG9yZXMuJHBhcmVudFxuICAgICAgICAgICAgICAgJiYgdGhpcy5zdG9yZXMuJHBhcmVudC5kZWxldGVTbmFwc2hvdEJ5S2V5KGtleSk7XG4gICAgfVxuICAgIFxuICAgIHNldFN0YXRlKCBwU3RhdGUgKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKHBTdGF0ZSlcbiAgICAgICAgICAgICAgLmZvckVhY2goayA9PiAoIHRoaXMuc3RhdGVbIGsgXSA9IHBTdGF0ZVsgayBdICkpXG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIGdldCBhIHBhcnNlZCByZWZlcmVuY2VcbiAgICAgKiBAcGFyYW0gX3JlZlxuICAgICAqIEByZXR1cm5zIHt7c3RvcmVJZCwgcGF0aCwgYWxpYXM6ICosIHJlZjogKn19XG4gICAgICovXG4gICAgcGFyc2VSZWYoIF9yZWYgKSB7XG4gICAgICAgIGlmICggdHlwZW9mIF9yZWYgIT09ICdzdHJpbmcnICkge1xuICAgICAgICAgICAgdGhpcy5yZWdpc3Rlcih7IFsgX3JlZi5uYW1lIF06IF9yZWYuc3RvcmUgfSk7XG4gICAgICAgICAgICBfcmVmID0gX3JlZi5uYW1lO1xuICAgICAgICB9XG4gICAgICAgIGxldCByZWYgID0gX3JlZi5zcGxpdCgnOicpO1xuICAgICAgICByZWZbIDAgXSA9IHJlZlsgMCBdLnNwbGl0KCcuJyk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzdG9yZUlkOiByZWZbIDAgXVsgMCBdLFxuICAgICAgICAgICAgcGF0aCAgIDogcmVmWyAwIF0sXG4gICAgICAgICAgICBhbGlhcyAgOiByZWZbIDEgXSB8fCByZWZbIDAgXVsgcmVmWyAwIF0ubGVuZ3RoIC0gMSBdLFxuICAgICAgICAgICAgcmVmICAgIDogX3JlZlxuICAgICAgICB9O1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBEaXNwYXRjaCBhbiBhY3Rpb24gdG8gdGhlIHRvcCBwYXJlbnQgJiBtaXhlZCBzY29wZXMsIGluIGFsbCBzdG9yZXNcbiAgICAgKlxuICAgICAqIEBwYXJhbSBhY3Rpb25cbiAgICAgKiBAcGFyYW0gZGF0YVxuICAgICAqIEByZXR1cm5zIHtTY29wZX1cbiAgICAgKi9cbiAgICBkaXNwYXRjaCggYWN0aW9uLCAuLi5hcmd6ICkge1xuICAgICAgICBpZiAoIHRoaXMuZGVhZCApIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcIkRpc3BhdGNoIHdhcyBjYWxsZWQgb24gYSBkZWFkIHNjb3BlLCBjaGVjayB5b3UncmUgYXN5bmMgZnVuY3Rpb25zIGluIHRoaXMgc3RhY2suLi5cIiwgKCBuZXcgRXJyb3IoKSApLnN0YWNrKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgYkFjdHMgPSB0aGlzLl8uX2JvdW5kZWRBY3Rpb25zO1xuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLl8uX3Njb3BlKVxuICAgICAgICAgICAgICAuZm9yRWFjaChcbiAgICAgICAgICAgICAgICAgIGlkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoIGlkID09IFwiJHBhcmVudFwiICkgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgIGlmICggIWlzLmZuKHRoaXMuXy5fc2NvcGVbIGlkIF0pIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fLl9zY29wZVsgaWQgXS50cmlnZ2VyKGFjdGlvbiwgLi4uYXJneik7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICk7XG4gICAgICAgIFxuICAgICAgICBpZiAoIGJBY3RzICYmIGJBY3RzLnRlc3QoYWN0aW9uKSApXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIFxuICAgICAgICB0aGlzLl8uX21peGVkLmZvckVhY2goKCBjdHggKSA9PiAoIGN0eC5kaXNwYXRjaChhY3Rpb24sIC4uLmFyZ3opICkpO1xuICAgICAgICB0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC5kaXNwYXRjaChhY3Rpb24sIC4uLmFyZ3opO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgXG4gICAgLy9cbiAgICB0cmlnZ2VyKCkge1xuICAgICAgICB0aGlzLmRpc3BhdGNoKC4uLmFyZ3VtZW50cyk7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIG9uY2UoJ3N0YWJsZScsIGNiKVxuICAgICAqIEBwYXJhbSBvYmoge1JlYWN0LkNvbXBvbmVudHxTdG9yZXxmdW5jdGlvbilcbiAgICAgKiBAcGFyYW0ga2V5IHtzdHJpbmd9IG9wdGlvbmFsIGtleSB3aGVyZSB0byBtYXAgdGhlIHB1YmxpYyBzdGF0ZVxuICAgICAqL1xuICAgIHRoZW4oIGNiICkge1xuICAgICAgICBpZiAoIHRoaXMuX3N0YWJsZSApXG4gICAgICAgICAgICByZXR1cm4gY2IodGhpcy5kYXRhKTtcbiAgICAgICAgdGhpcy5vbmNlKCdzdGFibGUnLCBlID0+IGNiKHRoaXMuZGF0YSkpO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBDYWxsIHJldGFpbiBvbiB0aGUgc2NvcGVkIHN0b3JlcyBiYXNpbmcgZ2l2ZW5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBzdG9yZXNcbiAgICAgKiBAcGFyYW0gcmVhc29uXG4gICAgICovXG4gICAgcmV0YWluU3RvcmVzKCBzdG9yZXMgPSBbXSwgcmVhc29uICkge1xuICAgICAgICBzdG9yZXMuZm9yRWFjaChcbiAgICAgICAgICAgIGlkID0+ICggdGhpcy5zdG9yZXNbIGlkIF0gJiYgdGhpcy5zdG9yZXNbIGlkIF0ucmV0YWluICYmIHRoaXMuc3RvcmVzWyBpZCBdLnJldGFpbihyZWFzb24pIClcbiAgICAgICAgKVxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBDYWxsIHJldGFpbiBvbiB0aGUgc2NvcGVkIHN0b3Jlc1xuICAgICAqXG4gICAgICogQHBhcmFtIHN0b3Jlc1xuICAgICAqIEBwYXJhbSByZWFzb25cbiAgICAgKi9cbiAgICBkaXNwb3NlU3RvcmVzKCBzdG9yZXMgPSBbXSwgcmVhc29uICkge1xuICAgICAgICBzdG9yZXMuZm9yRWFjaChcbiAgICAgICAgICAgIGlkID0+ICggdGhpcy5zdG9yZXNbIGlkIF0gJiYgdGhpcy5zdG9yZXNbIGlkIF0uZGlzcG9zZSAmJiB0aGlzLnN0b3Jlc1sgaWQgXS5kaXNwb3NlKHJlYXNvbikgKVxuICAgICAgICApXG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIEtlZXAgdGhlIHNjb3BlIHVuc3RhYmxlIHVudGlsIHJlbGVhc2UgaXMgY2FsbGVkXG4gICAgICogQHBhcmFtIHJlYXNvblxuICAgICAqL1xuICAgIHdhaXQoIHJlYXNvbiApIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcIndhaXRcIiwgcmVhc29uKTtcbiAgICAgICAgdGhpcy5fc3RhYmxlICYmICF0aGlzLl9fbG9ja3MuYWxsICYmIHRoaXMuZW1pdChcInVuc3RhYmxlXCIsIHRoaXMpO1xuICAgICAgICB0aGlzLl9zdGFibGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fX2xvY2tzLmFsbCsrO1xuICAgICAgICBpZiAoIHJlYXNvbiApIHtcbiAgICAgICAgICAgIHRoaXMuX19sb2Nrc1sgcmVhc29uIF0gPSB0aGlzLl9fbG9ja3NbIHJlYXNvbiBdIHx8IDA7XG4gICAgICAgICAgICB0aGlzLl9fbG9ja3NbIHJlYXNvbiBdKys7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgXG4gICAgLyoqXG4gICAgICogU3RhYmlsaXplIHRoZSBzY29wZSBpZiBubyBtb3JlIGxvY2tzIHJlbWFpbiAod2FpdCBmbilcbiAgICAgKiBAcGFyYW0gcmVhc29uXG4gICAgICovXG4gICAgcmVsZWFzZSggcmVhc29uICkge1xuICAgICAgICBcbiAgICAgICAgaWYgKCByZWFzb24gKSB7XG4gICAgICAgICAgICBpZiAoIHRoaXMuX19sb2Nrc1sgcmVhc29uIF0gPT0gMCApXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlJlbGVhc2UgbW9yZSB0aGFuIGxvY2tpbmcgIVwiLCByZWFzb24pO1xuICAgICAgICAgICAgdGhpcy5fX2xvY2tzWyByZWFzb24gXSA9IHRoaXMuX19sb2Nrc1sgcmVhc29uIF0gfHwgMDtcbiAgICAgICAgICAgIHRoaXMuX19sb2Nrc1sgcmVhc29uIF0tLTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoICFyZWFzb24gJiYgdGhpcy5fX2xvY2tzLmFsbCA9PSAwIClcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJSZWxlYXNlIG1vcmUgdGhhbiBsb2NraW5nICFcIik7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9fbG9ja3MuYWxsLS07XG4gICAgICAgIGlmICggIXRoaXMuX19sb2Nrcy5hbGwgKSB7XG4gICAgICAgICAgICB0aGlzLl8uc3RhYmlsaXplclRNICYmIGNsZWFyVGltZW91dCh0aGlzLl8uc3RhYmlsaXplclRNKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5fLnN0YWJpbGl6ZXJUTSA9IHNldFRpbWVvdXQoXG4gICAgICAgICAgICAgICAgZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuXy5zdGFiaWxpemVyVE0gPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIHRoaXMuX19sb2Nrcy5hbGwgKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fLnByb3BhZ1RNICYmIGNsZWFyVGltZW91dCh0aGlzLl8ucHJvcGFnVE0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9yZXYrKztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc3RhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KFwic3RhYmxlXCIsIHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgIXRoaXMuZGVhZCAmJiB0aGlzLl9wcm9wYWcoKTsvLyBzdGFiaWxpdHkgY2FuIGluZHVjZSBkZXN0cm95XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogUHJvcGFnIHN0b3JlcyB1cGRhdGVzIGJhc2luZyB0aGVpcnMgbGFzdCB1cGRhdGVzXG4gICAgICovXG4gICAgcHJvcGFnKCkge1xuICAgICAgICB0aGlzLl8ucHJvcGFnVE0gJiYgY2xlYXJUaW1lb3V0KHRoaXMuXy5wcm9wYWdUTSk7XG4gICAgICAgIHRoaXMuXy5wcm9wYWdUTSA9IHNldFRpbWVvdXQoXG4gICAgICAgICAgICBlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLl8ucHJvcGFnVE0gPSBudWxsO1xuICAgICAgICAgICAgICAgIHRoaXMuX3Byb3BhZygpXG4gICAgICAgICAgICB9LCAyXG4gICAgICAgICk7XG4gICAgfVxuICAgIFxuICAgIF9wcm9wYWcoKSB7XG4gICAgICAgIGlmICggdGhpcy5fLmZvbGxvd2Vycy5sZW5ndGggKVxuICAgICAgICAgICAgdGhpcy5fLmZvbGxvd2Vycy5mb3JFYWNoKCggeyAwOiBvYmosIDE6IGtleSwgMjogYXMsIDM6IGxhc3RSZXZzLCAzOiByZW1hcHMgfSApID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHRoaXMuZ2V0VXBkYXRlcyhsYXN0UmV2cyk7XG4gICAgICAgICAgICAgICAgaWYgKCAhZGF0YSApIHJldHVybjtcbiAgICAgICAgICAgICAgICBpZiAoIHR5cGVvZiBvYmogIT0gXCJmdW5jdGlvblwiICkge1xuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwic2V0U3RhdGUgXCIsb2JqLCBPYmplY3Qua2V5cyhkYXRhKSlcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBhcyApIG9iai5zZXRTdGF0ZSh7IFsgYXMgXTogZGF0YSB9KTtcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBvYmouc2V0U3RhdGUoZGF0YSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBvYmooZGF0YSwgbGFzdFJldnMgJiYgWyAuLi5sYXN0UmV2cyBdIHx8IFwibm8gcmV2c1wiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gbGFzdFJldnMgJiZcbiAgICAgICAgICAgICAgICAvLyBrZXkuZm9yRWFjaChpZCA9PiAobGFzdFJldnNbaWRdID0gdGhpcy5zdG9yZXNbaWRdICYmXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5zdG9yZXNbaWRdLl9yZXYgfHwgMCkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZW1pdChcInVwZGF0ZVwiLCB0aGlzLmdldFVwZGF0ZXMoKSk7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIGlzIHN0YWJsZVxuICAgICAqIEByZXR1cm5zIGJvb2xcbiAgICAgKi9cbiAgICBpc1N0YWJsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0YWJsZTtcbiAgICB9XG4gICAgXG4gICAgX2FkZENoaWxkKCBjdHggKSB7XG4gICAgICAgIHRoaXMuXy5jaGlsZFNjb3Blcy5wdXNoKGN0eCk7XG4gICAgICAgIHRoaXMuXy5zZWVuQ2hpbGRzKys7XG4gICAgICAgIGxldCBsaXN0cyAgICAgPSB7XG4gICAgICAgICAgICAgICAgJ3N0YWJsZScgICAgICA6IHMgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl8udW5TdGFibGVDaGlsZHMtLTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCAhdGhpcy5fLnVuU3RhYmxlQ2hpbGRzIClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdChcInN0YWJsZVRyZWVcIiwgdGhpcylcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICd1bnN0YWJsZScgICAgOiBzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fLnVuU3RhYmxlQ2hpbGRzKys7XG4gICAgICAgICAgICAgICAgICAgIGlmICggMSA9PSB0aGlzLl8udW5TdGFibGVDaGlsZHMgKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KFwidW5zdGFibGVUcmVlXCIsIHRoaXMpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAnc3RhYmxlVHJlZScgIDogcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuXy51blN0YWJsZUNoaWxkcy0tO1xuICAgICAgICAgICAgICAgICAgICBpZiAoICF0aGlzLl8udW5TdGFibGVDaGlsZHMgKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KFwic3RhYmxlVHJlZVwiLCB0aGlzKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgJ3Vuc3RhYmxlVHJlZSc6IHMgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl8udW5TdGFibGVDaGlsZHMrKztcbiAgICAgICAgICAgICAgICAgICAgaWYgKCAxID09IHRoaXMuXy51blN0YWJsZUNoaWxkcyApXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXQoXCJ1bnN0YWJsZVRyZWVcIiwgdGhpcylcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICdkZXN0cm95JyAgICAgOiBjdHggPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIGN0eC5fLnVuU3RhYmxlQ2hpbGRzIClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuXy51blN0YWJsZUNoaWxkcy0tO1xuICAgICAgICAgICAgICAgICAgICBpZiAoICFjdHguaXNTdGFibGUoKSApXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl8udW5TdGFibGVDaGlsZHMtLTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYgKCAhdGhpcy5fLnVuU3RhYmxlQ2hpbGRzIClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdChcInN0YWJsZVRyZWVcIiwgdGhpcylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgd2FzU3RhYmxlID0gdGhpcy5fLnVuU3RhYmxlQ2hpbGRzO1xuICAgICAgICAvLyFjdHguaXNTdGFibGUoKSAmJiBjb25zb2xlLndhcm4oJ2FkZCB1bnN0YWJsZSBjaGlsZCcpO1xuICAgICAgICAhY3R4LmlzU3RhYmxlKCkgJiYgdGhpcy5fLnVuU3RhYmxlQ2hpbGRzKys7XG4gICAgICAgIGN0eC5fLnVuU3RhYmxlQ2hpbGRzICYmIHRoaXMuXy51blN0YWJsZUNoaWxkcysrO1xuICAgICAgICB0aGlzLl8uY2hpbGRTY29wZXNMaXN0LnB1c2gobGlzdHMpO1xuICAgICAgICBpZiAoICF3YXNTdGFibGUgJiYgdGhpcy5fLnVuU3RhYmxlQ2hpbGRzIClcbiAgICAgICAgICAgIHRoaXMuZW1pdChcInVuc3RhYmxlVHJlZVwiLCB0aGlzKVxuICAgICAgICBjdHgub24obGlzdHMpO1xuICAgIH1cbiAgICBcbiAgICBfcm1DaGlsZCggY3R4ICkge1xuICAgICAgICBsZXQgaSAgICAgICAgID0gdGhpcy5fLmNoaWxkU2NvcGVzLmluZGV4T2YoY3R4KSxcbiAgICAgICAgICAgIHdhc1N0YWJsZSA9IHRoaXMuXy51blN0YWJsZUNoaWxkcztcbiAgICAgICAgaWYgKCBpICE9IC0xICkge1xuICAgICAgICAgICAgdGhpcy5fLmNoaWxkU2NvcGVzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICFjdHguaXNTdGFibGUoKSAmJiB0aGlzLl8udW5TdGFibGVDaGlsZHMtLTtcbiAgICAgICAgICAgIGN0eC5fLnVuU3RhYmxlQ2hpbGRzICYmIHRoaXMuXy51blN0YWJsZUNoaWxkcy0tO1xuICAgICAgICAgICAgY3R4LnVuKHRoaXMuXy5jaGlsZFNjb3Blc0xpc3Quc3BsaWNlKGksIDEpWyAwIF0pO1xuICAgICAgICAgICAgaWYgKCB3YXNTdGFibGUgJiYgIXRoaXMuXy51blN0YWJsZUNoaWxkcyApXG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0KFwic3RhYmxlVHJlZVwiKVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIHJldGFpbiggcmVhc29uICkge1xuICAgICAgICB0aGlzLl9fcmV0YWlucy5hbGwrKztcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcInJldGFpblwiLCB0aGlzLl9pZCwgcmVhc29uKTtcbiAgICAgICAgaWYgKCByZWFzb24gKSB7XG4gICAgICAgICAgICB0aGlzLl9fcmV0YWluc1sgcmVhc29uIF0gPSB0aGlzLl9fcmV0YWluc1sgcmVhc29uIF0gfHwgMDtcbiAgICAgICAgICAgIHRoaXMuX19yZXRhaW5zWyByZWFzb24gXSsrO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGRpc3Bvc2UoIHJlYXNvbiApIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcImRpc3Bvc2VcIiwgdGhpcy5faWQsIHJlYXNvbik7XG4gICAgICAgIGlmICggcmVhc29uICkge1xuICAgICAgICAgICAgaWYgKCAhdGhpcy5fX3JldGFpbnNbIHJlYXNvbiBdIClcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJEaXNwb3NlIG1vcmUgdGhhbiByZXRhaW5pbmcgOiBcIiArIHJlYXNvbik7XG4gICAgICAgICAgICB0aGlzLl9fcmV0YWluc1sgcmVhc29uIF0tLTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKCAhdGhpcy5fX3JldGFpbnMuYWxsIClcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkRpc3Bvc2UgbW9yZSB0aGFuIHJldGFpbmluZyAhXCIpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fX3JldGFpbnMuYWxsLS07XG4gICAgICAgIFxuICAgICAgICBpZiAoICF0aGlzLl9fcmV0YWlucy5hbGwgKSB7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiZGlzcG9zZSBkbyBkZXN0cm95IFwiLCB0aGlzLl9pZCwgdGhpcy5fcGVyc2lzdGVuY2VUbSk7XG4gICAgICAgICAgICBpZiAoIHRoaXMuXy5wZXJzaXN0ZW5jZVRtICkge1xuICAgICAgICAgICAgICAgIHRoaXMuXy5kZXN0cm95VE0gJiYgY2xlYXJUaW1lb3V0KHRoaXMuXy5kZXN0cm95VE0pO1xuICAgICAgICAgICAgICAgIHRoaXMuXy5kZXN0cm95VE0gPSBzZXRUaW1lb3V0KFxuICAgICAgICAgICAgICAgICAgICBlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vdGhpcy50aGVuKHMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgIXRoaXMuX19yZXRhaW5zLmFsbCAmJiAhdGhpcy5kZWFkICYmIHRoaXMuZGVzdHJveSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAvL30pO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB0aGlzLl8ucGVyc2lzdGVuY2VUbVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvL3RoaXMudGhlbihzID0+XG4gICAgICAgICAgICAgICAgKCAhdGhpcy5fX3JldGFpbnMuYWxsICYmICF0aGlzLmRlYWQgJiYgdGhpcy5kZXN0cm95KCkgKVxuICAgICAgICAgICAgICAgIC8vKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBvcmRlciBkZXN0cm95IG9mIGxvY2FsIHN0b3Jlc1xuICAgICAqL1xuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIGxldCBjdHggPSB0aGlzLl8uX3Njb3BlO1xuICAgICAgICAvL2NvbnNvbGUud2FybihcImRlc3Ryb3lcIiwgdGhpcy5faWQpO1xuICAgICAgICB0aGlzLl8uc3RhYmlsaXplclRNICYmIGNsZWFyVGltZW91dCh0aGlzLl8uc3RhYmlsaXplclRNKTtcbiAgICAgICAgdGhpcy5fLnByb3BhZ1RNICYmIGNsZWFyVGltZW91dCh0aGlzLl8ucHJvcGFnVE0pO1xuICAgICAgICBPYmplY3Qua2V5cyhcbiAgICAgICAgICAgIHRoaXMuXy5fbGlzdGVuaW5nXG4gICAgICAgICkuZm9yRWFjaChcbiAgICAgICAgICAgIGlkID0+ICggKCBpZCAhPT0gXCIkcGFyZW50XCIgKSAmJiB0aGlzLl8uX3Njb3BlWyBpZCBdLnJlbW92ZUxpc3RlbmVyKHRoaXMuXy5fbGlzdGVuaW5nWyBpZCBdKSApXG4gICAgICAgICk7XG4gICAgICAgIHdoaWxlICggdGhpcy5fLl9taXhlZExpc3QubGVuZ3RoICkge1xuICAgICAgICAgICAgdGhpcy5fLl9taXhlZFsgMCBdLnJlbW92ZUxpc3RlbmVyKHRoaXMuXy5fbWl4ZWRMaXN0LnNoaWZ0KCkpO1xuICAgICAgICAgICAgdGhpcy5fLl9taXhlZC5zaGlmdCgpLmRpc3Bvc2UoXCJtaXhlZFRvXCIpO1xuICAgICAgICB9XG4gICAgICAgIFsgLi4udGhpcy5fLmZvbGxvd2VycyBdLm1hcChmb2xsb3dlciA9PiB0aGlzLnVuQmluZCguLi5mb2xsb3dlcikpO1xuICAgICAgICBmb3IgKCBsZXQga2V5IGluIGN0eCApXG4gICAgICAgICAgICBpZiAoICFpcy5mbihjdHhbIGtleSBdKSApIHtcbiAgICAgICAgICAgICAgICBpZiAoIGtleSA9PSBcIiRwYXJlbnRcIiApIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICFjdHhbIGtleSBdLl9hdXRvRGVzdHJveSAmJiBjdHhbIGtleSBdLmRpc3Bvc2UoXCJzY29wZWRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIGlmICggdGhpcy5fLl9wYXJlbnRMaXN0ICkge1xuICAgICAgICAgICAgdGhpcy5wYXJlbnQuX3JtQ2hpbGQodGhpcyk7XG4gICAgICAgICAgICB0aGlzLnBhcmVudC5yZW1vdmVMaXN0ZW5lcih0aGlzLl8uX3BhcmVudExpc3QpO1xuICAgICAgICAgICAgdGhpcy5wYXJlbnQuZGlzcG9zZShcImlzTXlQYXJlbnRcIik7XG4gICAgICAgICAgICB0aGlzLl8uX3BhcmVudExpc3QgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGVhZCA9IHRydWU7XG4gICAgICAgIHRoaXMuZW1pdChcImRlc3Ryb3lcIiwgdGhpcyk7XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgLy9pZiAoICF0aGlzLl8uaXNMb2NhbElkIClcbiAgICAgICAgZGVsZXRlIG9wZW5TY29wZXNbIHRoaXMuX2lkIF07XG4gICAgICAgIFxuICAgICAgICAvL3RoaXMuXyA9IG51bGw7XG4gICAgICAgIFxuICAgIH1cbn1cblxuXG5pcy5yc1Njb3BlID0gZnVuY3Rpb24gKCBvYmogKSB7XG4gICAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIFNjb3BlXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNjb3BlO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9TY29wZS5qcyIsInZhciBpcyA9IHJlcXVpcmUoJ2lzJyk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICAuLi5pc1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWxzL2lzLmpzIiwiLyogZ2xvYmFscyB3aW5kb3csIEhUTUxFbGVtZW50ICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqIVxuICogaXNcbiAqIHRoZSBkZWZpbml0aXZlIEphdmFTY3JpcHQgdHlwZSB0ZXN0aW5nIGxpYnJhcnlcbiAqXG4gKiBAY29weXJpZ2h0IDIwMTMtMjAxNCBFbnJpY28gTWFyaW5vIC8gSm9yZGFuIEhhcmJhbmRcbiAqIEBsaWNlbnNlIE1JVFxuICovXG5cbnZhciBvYmpQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG52YXIgb3ducyA9IG9ialByb3RvLmhhc093blByb3BlcnR5O1xudmFyIHRvU3RyID0gb2JqUHJvdG8udG9TdHJpbmc7XG52YXIgc3ltYm9sVmFsdWVPZjtcbmlmICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nKSB7XG4gIHN5bWJvbFZhbHVlT2YgPSBTeW1ib2wucHJvdG90eXBlLnZhbHVlT2Y7XG59XG52YXIgaXNBY3R1YWxOYU4gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9PSB2YWx1ZTtcbn07XG52YXIgTk9OX0hPU1RfVFlQRVMgPSB7XG4gICdib29sZWFuJzogMSxcbiAgbnVtYmVyOiAxLFxuICBzdHJpbmc6IDEsXG4gIHVuZGVmaW5lZDogMVxufTtcblxudmFyIGJhc2U2NFJlZ2V4ID0gL14oW0EtWmEtejAtOSsvXXs0fSkqKFtBLVphLXowLTkrL117NH18W0EtWmEtejAtOSsvXXszfT18W0EtWmEtejAtOSsvXXsyfT09KSQvO1xudmFyIGhleFJlZ2V4ID0gL15bQS1GYS1mMC05XSskLztcblxuLyoqXG4gKiBFeHBvc2UgYGlzYFxuICovXG5cbnZhciBpcyA9IHt9O1xuXG4vKipcbiAqIFRlc3QgZ2VuZXJhbC5cbiAqL1xuXG4vKipcbiAqIGlzLnR5cGVcbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBhIHR5cGUgb2YgYHR5cGVgLlxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIHR5cGVcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgYHZhbHVlYCBpcyBhIHR5cGUgb2YgYHR5cGVgLCBmYWxzZSBvdGhlcndpc2VcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuaXMuYSA9IGlzLnR5cGUgPSBmdW5jdGlvbiAodmFsdWUsIHR5cGUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gdHlwZTtcbn07XG5cbi8qKlxuICogaXMuZGVmaW5lZFxuICogVGVzdCBpZiBgdmFsdWVgIGlzIGRlZmluZWQuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiAndmFsdWUnIGlzIGRlZmluZWQsIGZhbHNlIG90aGVyd2lzZVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5pcy5kZWZpbmVkID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgIT09ICd1bmRlZmluZWQnO1xufTtcblxuLyoqXG4gKiBpcy5lbXB0eVxuICogVGVzdCBpZiBgdmFsdWVgIGlzIGVtcHR5LlxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgYHZhbHVlYCBpcyBlbXB0eSwgZmFsc2Ugb3RoZXJ3aXNlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmlzLmVtcHR5ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHZhciB0eXBlID0gdG9TdHIuY2FsbCh2YWx1ZSk7XG4gIHZhciBrZXk7XG5cbiAgaWYgKHR5cGUgPT09ICdbb2JqZWN0IEFycmF5XScgfHwgdHlwZSA9PT0gJ1tvYmplY3QgQXJndW1lbnRzXScgfHwgdHlwZSA9PT0gJ1tvYmplY3QgU3RyaW5nXScpIHtcbiAgICByZXR1cm4gdmFsdWUubGVuZ3RoID09PSAwO1xuICB9XG5cbiAgaWYgKHR5cGUgPT09ICdbb2JqZWN0IE9iamVjdF0nKSB7XG4gICAgZm9yIChrZXkgaW4gdmFsdWUpIHtcbiAgICAgIGlmIChvd25zLmNhbGwodmFsdWUsIGtleSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiAhdmFsdWU7XG59O1xuXG4vKipcbiAqIGlzLmVxdWFsXG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgZXF1YWwgdG8gYG90aGVyYC5cbiAqXG4gKiBAcGFyYW0ge01peGVkfSB2YWx1ZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcGFyYW0ge01peGVkfSBvdGhlciB2YWx1ZSB0byBjb21wYXJlIHdpdGhcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgYHZhbHVlYCBpcyBlcXVhbCB0byBgb3RoZXJgLCBmYWxzZSBvdGhlcndpc2VcbiAqL1xuXG5pcy5lcXVhbCA9IGZ1bmN0aW9uIGVxdWFsKHZhbHVlLCBvdGhlcikge1xuICBpZiAodmFsdWUgPT09IG90aGVyKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICB2YXIgdHlwZSA9IHRvU3RyLmNhbGwodmFsdWUpO1xuICB2YXIga2V5O1xuXG4gIGlmICh0eXBlICE9PSB0b1N0ci5jYWxsKG90aGVyKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmICh0eXBlID09PSAnW29iamVjdCBPYmplY3RdJykge1xuICAgIGZvciAoa2V5IGluIHZhbHVlKSB7XG4gICAgICBpZiAoIWlzLmVxdWFsKHZhbHVlW2tleV0sIG90aGVyW2tleV0pIHx8ICEoa2V5IGluIG90aGVyKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAoa2V5IGluIG90aGVyKSB7XG4gICAgICBpZiAoIWlzLmVxdWFsKHZhbHVlW2tleV0sIG90aGVyW2tleV0pIHx8ICEoa2V5IGluIHZhbHVlKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKHR5cGUgPT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICBrZXkgPSB2YWx1ZS5sZW5ndGg7XG4gICAgaWYgKGtleSAhPT0gb3RoZXIubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHdoaWxlIChrZXktLSkge1xuICAgICAgaWYgKCFpcy5lcXVhbCh2YWx1ZVtrZXldLCBvdGhlcltrZXldKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKHR5cGUgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXScpIHtcbiAgICByZXR1cm4gdmFsdWUucHJvdG90eXBlID09PSBvdGhlci5wcm90b3R5cGU7XG4gIH1cblxuICBpZiAodHlwZSA9PT0gJ1tvYmplY3QgRGF0ZV0nKSB7XG4gICAgcmV0dXJuIHZhbHVlLmdldFRpbWUoKSA9PT0gb3RoZXIuZ2V0VGltZSgpO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuLyoqXG4gKiBpcy5ob3N0ZWRcbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBob3N0ZWQgYnkgYGhvc3RgLlxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlIHRvIHRlc3RcbiAqIEBwYXJhbSB7TWl4ZWR9IGhvc3QgaG9zdCB0byB0ZXN0IHdpdGhcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgYHZhbHVlYCBpcyBob3N0ZWQgYnkgYGhvc3RgLCBmYWxzZSBvdGhlcndpc2VcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuaXMuaG9zdGVkID0gZnVuY3Rpb24gKHZhbHVlLCBob3N0KSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIGhvc3RbdmFsdWVdO1xuICByZXR1cm4gdHlwZSA9PT0gJ29iamVjdCcgPyAhIWhvc3RbdmFsdWVdIDogIU5PTl9IT1NUX1RZUEVTW3R5cGVdO1xufTtcblxuLyoqXG4gKiBpcy5pbnN0YW5jZVxuICogVGVzdCBpZiBgdmFsdWVgIGlzIGFuIGluc3RhbmNlIG9mIGBjb25zdHJ1Y3RvcmAuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBgdmFsdWVgIGlzIGFuIGluc3RhbmNlIG9mIGBjb25zdHJ1Y3RvcmBcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuaXMuaW5zdGFuY2UgPSBpc1snaW5zdGFuY2VvZiddID0gZnVuY3Rpb24gKHZhbHVlLCBjb25zdHJ1Y3Rvcikge1xuICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBjb25zdHJ1Y3Rvcjtcbn07XG5cbi8qKlxuICogaXMubmlsIC8gaXMubnVsbFxuICogVGVzdCBpZiBgdmFsdWVgIGlzIG51bGwuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBgdmFsdWVgIGlzIG51bGwsIGZhbHNlIG90aGVyd2lzZVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5pcy5uaWwgPSBpc1snbnVsbCddID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA9PT0gbnVsbDtcbn07XG5cbi8qKlxuICogaXMudW5kZWYgLyBpcy51bmRlZmluZWRcbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyB1bmRlZmluZWQuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBgdmFsdWVgIGlzIHVuZGVmaW5lZCwgZmFsc2Ugb3RoZXJ3aXNlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmlzLnVuZGVmID0gaXMudW5kZWZpbmVkID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnO1xufTtcblxuLyoqXG4gKiBUZXN0IGFyZ3VtZW50cy5cbiAqL1xuXG4vKipcbiAqIGlzLmFyZ3NcbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBhbiBhcmd1bWVudHMgb2JqZWN0LlxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgYHZhbHVlYCBpcyBhbiBhcmd1bWVudHMgb2JqZWN0LCBmYWxzZSBvdGhlcndpc2VcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuaXMuYXJncyA9IGlzLmFyZ3VtZW50cyA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICB2YXIgaXNTdGFuZGFyZEFyZ3VtZW50cyA9IHRvU3RyLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBBcmd1bWVudHNdJztcbiAgdmFyIGlzT2xkQXJndW1lbnRzID0gIWlzLmFycmF5KHZhbHVlKSAmJiBpcy5hcnJheWxpa2UodmFsdWUpICYmIGlzLm9iamVjdCh2YWx1ZSkgJiYgaXMuZm4odmFsdWUuY2FsbGVlKTtcbiAgcmV0dXJuIGlzU3RhbmRhcmRBcmd1bWVudHMgfHwgaXNPbGRBcmd1bWVudHM7XG59O1xuXG4vKipcbiAqIFRlc3QgYXJyYXkuXG4gKi9cblxuLyoqXG4gKiBpcy5hcnJheVxuICogVGVzdCBpZiAndmFsdWUnIGlzIGFuIGFycmF5LlxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgYHZhbHVlYCBpcyBhbiBhcnJheSwgZmFsc2Ugb3RoZXJ3aXNlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmlzLmFycmF5ID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIHRvU3RyLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBBcnJheV0nO1xufTtcblxuLyoqXG4gKiBpcy5hcmd1bWVudHMuZW1wdHlcbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBhbiBlbXB0eSBhcmd1bWVudHMgb2JqZWN0LlxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgYHZhbHVlYCBpcyBhbiBlbXB0eSBhcmd1bWVudHMgb2JqZWN0LCBmYWxzZSBvdGhlcndpc2VcbiAqIEBhcGkgcHVibGljXG4gKi9cbmlzLmFyZ3MuZW1wdHkgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIGlzLmFyZ3ModmFsdWUpICYmIHZhbHVlLmxlbmd0aCA9PT0gMDtcbn07XG5cbi8qKlxuICogaXMuYXJyYXkuZW1wdHlcbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBhbiBlbXB0eSBhcnJheS5cbiAqXG4gKiBAcGFyYW0ge01peGVkfSB2YWx1ZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGB2YWx1ZWAgaXMgYW4gZW1wdHkgYXJyYXksIGZhbHNlIG90aGVyd2lzZVxuICogQGFwaSBwdWJsaWNcbiAqL1xuaXMuYXJyYXkuZW1wdHkgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIGlzLmFycmF5KHZhbHVlKSAmJiB2YWx1ZS5sZW5ndGggPT09IDA7XG59O1xuXG4vKipcbiAqIGlzLmFycmF5bGlrZVxuICogVGVzdCBpZiBgdmFsdWVgIGlzIGFuIGFycmF5bGlrZSBvYmplY3QuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBgdmFsdWVgIGlzIGFuIGFyZ3VtZW50cyBvYmplY3QsIGZhbHNlIG90aGVyd2lzZVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5pcy5hcnJheWxpa2UgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuICEhdmFsdWUgJiYgIWlzLmJvb2wodmFsdWUpXG4gICAgJiYgb3ducy5jYWxsKHZhbHVlLCAnbGVuZ3RoJylcbiAgICAmJiBpc0Zpbml0ZSh2YWx1ZS5sZW5ndGgpXG4gICAgJiYgaXMubnVtYmVyKHZhbHVlLmxlbmd0aClcbiAgICAmJiB2YWx1ZS5sZW5ndGggPj0gMDtcbn07XG5cbi8qKlxuICogVGVzdCBib29sZWFuLlxuICovXG5cbi8qKlxuICogaXMuYm9vbFxuICogVGVzdCBpZiBgdmFsdWVgIGlzIGEgYm9vbGVhbi5cbiAqXG4gKiBAcGFyYW0ge01peGVkfSB2YWx1ZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGB2YWx1ZWAgaXMgYSBib29sZWFuLCBmYWxzZSBvdGhlcndpc2VcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuaXMuYm9vbCA9IGlzWydib29sZWFuJ10gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIHRvU3RyLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBCb29sZWFuXSc7XG59O1xuXG4vKipcbiAqIGlzLmZhbHNlXG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgZmFsc2UuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBgdmFsdWVgIGlzIGZhbHNlLCBmYWxzZSBvdGhlcndpc2VcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuaXNbJ2ZhbHNlJ10gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIGlzLmJvb2wodmFsdWUpICYmIEJvb2xlYW4oTnVtYmVyKHZhbHVlKSkgPT09IGZhbHNlO1xufTtcblxuLyoqXG4gKiBpcy50cnVlXG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgdHJ1ZS5cbiAqXG4gKiBAcGFyYW0ge01peGVkfSB2YWx1ZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGB2YWx1ZWAgaXMgdHJ1ZSwgZmFsc2Ugb3RoZXJ3aXNlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmlzWyd0cnVlJ10gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIGlzLmJvb2wodmFsdWUpICYmIEJvb2xlYW4oTnVtYmVyKHZhbHVlKSkgPT09IHRydWU7XG59O1xuXG4vKipcbiAqIFRlc3QgZGF0ZS5cbiAqL1xuXG4vKipcbiAqIGlzLmRhdGVcbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBhIGRhdGUuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBgdmFsdWVgIGlzIGEgZGF0ZSwgZmFsc2Ugb3RoZXJ3aXNlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmlzLmRhdGUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIHRvU3RyLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBEYXRlXSc7XG59O1xuXG4vKipcbiAqIGlzLmRhdGUudmFsaWRcbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGRhdGUuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge0Jvb2xlYW59IHRydWUgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGRhdGUsIGZhbHNlIG90aGVyd2lzZVxuICovXG5pcy5kYXRlLnZhbGlkID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiBpcy5kYXRlKHZhbHVlKSAmJiAhaXNOYU4oTnVtYmVyKHZhbHVlKSk7XG59O1xuXG4vKipcbiAqIFRlc3QgZWxlbWVudC5cbiAqL1xuXG4vKipcbiAqIGlzLmVsZW1lbnRcbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBhbiBodG1sIGVsZW1lbnQuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBgdmFsdWVgIGlzIGFuIEhUTUwgRWxlbWVudCwgZmFsc2Ugb3RoZXJ3aXNlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmlzLmVsZW1lbnQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9PSB1bmRlZmluZWRcbiAgICAmJiB0eXBlb2YgSFRNTEVsZW1lbnQgIT09ICd1bmRlZmluZWQnXG4gICAgJiYgdmFsdWUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudFxuICAgICYmIHZhbHVlLm5vZGVUeXBlID09PSAxO1xufTtcblxuLyoqXG4gKiBUZXN0IGVycm9yLlxuICovXG5cbi8qKlxuICogaXMuZXJyb3JcbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBhbiBlcnJvciBvYmplY3QuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBgdmFsdWVgIGlzIGFuIGVycm9yIG9iamVjdCwgZmFsc2Ugb3RoZXJ3aXNlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmlzLmVycm9yID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiB0b1N0ci5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgRXJyb3JdJztcbn07XG5cbi8qKlxuICogVGVzdCBmdW5jdGlvbi5cbiAqL1xuXG4vKipcbiAqIGlzLmZuIC8gaXMuZnVuY3Rpb24gKGRlcHJlY2F0ZWQpXG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgYSBmdW5jdGlvbi5cbiAqXG4gKiBAcGFyYW0ge01peGVkfSB2YWx1ZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGB2YWx1ZWAgaXMgYSBmdW5jdGlvbiwgZmFsc2Ugb3RoZXJ3aXNlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmlzLmZuID0gaXNbJ2Z1bmN0aW9uJ10gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgdmFyIGlzQWxlcnQgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB2YWx1ZSA9PT0gd2luZG93LmFsZXJ0O1xuICBpZiAoaXNBbGVydCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHZhciBzdHIgPSB0b1N0ci5jYWxsKHZhbHVlKTtcbiAgcmV0dXJuIHN0ciA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJyB8fCBzdHIgPT09ICdbb2JqZWN0IEdlbmVyYXRvckZ1bmN0aW9uXScgfHwgc3RyID09PSAnW29iamVjdCBBc3luY0Z1bmN0aW9uXSc7XG59O1xuXG4vKipcbiAqIFRlc3QgbnVtYmVyLlxuICovXG5cbi8qKlxuICogaXMubnVtYmVyXG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgYSBudW1iZXIuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBgdmFsdWVgIGlzIGEgbnVtYmVyLCBmYWxzZSBvdGhlcndpc2VcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuaXMubnVtYmVyID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiB0b1N0ci5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgTnVtYmVyXSc7XG59O1xuXG4vKipcbiAqIGlzLmluZmluaXRlXG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgcG9zaXRpdmUgb3IgbmVnYXRpdmUgaW5maW5pdHkuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBgdmFsdWVgIGlzIHBvc2l0aXZlIG9yIG5lZ2F0aXZlIEluZmluaXR5LCBmYWxzZSBvdGhlcndpc2VcbiAqIEBhcGkgcHVibGljXG4gKi9cbmlzLmluZmluaXRlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA9PT0gSW5maW5pdHkgfHwgdmFsdWUgPT09IC1JbmZpbml0eTtcbn07XG5cbi8qKlxuICogaXMuZGVjaW1hbFxuICogVGVzdCBpZiBgdmFsdWVgIGlzIGEgZGVjaW1hbCBudW1iZXIuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBgdmFsdWVgIGlzIGEgZGVjaW1hbCBudW1iZXIsIGZhbHNlIG90aGVyd2lzZVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5pcy5kZWNpbWFsID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiBpcy5udW1iZXIodmFsdWUpICYmICFpc0FjdHVhbE5hTih2YWx1ZSkgJiYgIWlzLmluZmluaXRlKHZhbHVlKSAmJiB2YWx1ZSAlIDEgIT09IDA7XG59O1xuXG4vKipcbiAqIGlzLmRpdmlzaWJsZUJ5XG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgZGl2aXNpYmxlIGJ5IGBuYC5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHBhcmFtIHtOdW1iZXJ9IG4gZGl2aWRlbmRcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgYHZhbHVlYCBpcyBkaXZpc2libGUgYnkgYG5gLCBmYWxzZSBvdGhlcndpc2VcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuaXMuZGl2aXNpYmxlQnkgPSBmdW5jdGlvbiAodmFsdWUsIG4pIHtcbiAgdmFyIGlzRGl2aWRlbmRJbmZpbml0ZSA9IGlzLmluZmluaXRlKHZhbHVlKTtcbiAgdmFyIGlzRGl2aXNvckluZmluaXRlID0gaXMuaW5maW5pdGUobik7XG4gIHZhciBpc05vblplcm9OdW1iZXIgPSBpcy5udW1iZXIodmFsdWUpICYmICFpc0FjdHVhbE5hTih2YWx1ZSkgJiYgaXMubnVtYmVyKG4pICYmICFpc0FjdHVhbE5hTihuKSAmJiBuICE9PSAwO1xuICByZXR1cm4gaXNEaXZpZGVuZEluZmluaXRlIHx8IGlzRGl2aXNvckluZmluaXRlIHx8IChpc05vblplcm9OdW1iZXIgJiYgdmFsdWUgJSBuID09PSAwKTtcbn07XG5cbi8qKlxuICogaXMuaW50ZWdlclxuICogVGVzdCBpZiBgdmFsdWVgIGlzIGFuIGludGVnZXIuXG4gKlxuICogQHBhcmFtIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgYHZhbHVlYCBpcyBhbiBpbnRlZ2VyLCBmYWxzZSBvdGhlcndpc2VcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuaXMuaW50ZWdlciA9IGlzWydpbnQnXSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICByZXR1cm4gaXMubnVtYmVyKHZhbHVlKSAmJiAhaXNBY3R1YWxOYU4odmFsdWUpICYmIHZhbHVlICUgMSA9PT0gMDtcbn07XG5cbi8qKlxuICogaXMubWF4aW11bVxuICogVGVzdCBpZiBgdmFsdWVgIGlzIGdyZWF0ZXIgdGhhbiAnb3RoZXJzJyB2YWx1ZXMuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEBwYXJhbSB7QXJyYXl9IG90aGVycyB2YWx1ZXMgdG8gY29tcGFyZSB3aXRoXG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGB2YWx1ZWAgaXMgZ3JlYXRlciB0aGFuIGBvdGhlcnNgIHZhbHVlc1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5pcy5tYXhpbXVtID0gZnVuY3Rpb24gKHZhbHVlLCBvdGhlcnMpIHtcbiAgaWYgKGlzQWN0dWFsTmFOKHZhbHVlKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ05hTiBpcyBub3QgYSB2YWxpZCB2YWx1ZScpO1xuICB9IGVsc2UgaWYgKCFpcy5hcnJheWxpa2Uob3RoZXJzKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ3NlY29uZCBhcmd1bWVudCBtdXN0IGJlIGFycmF5LWxpa2UnKTtcbiAgfVxuICB2YXIgbGVuID0gb3RoZXJzLmxlbmd0aDtcblxuICB3aGlsZSAoLS1sZW4gPj0gMCkge1xuICAgIGlmICh2YWx1ZSA8IG90aGVyc1tsZW5dKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuXG4vKipcbiAqIGlzLm1pbmltdW1cbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBsZXNzIHRoYW4gYG90aGVyc2AgdmFsdWVzLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSB2YWx1ZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcGFyYW0ge0FycmF5fSBvdGhlcnMgdmFsdWVzIHRvIGNvbXBhcmUgd2l0aFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBgdmFsdWVgIGlzIGxlc3MgdGhhbiBgb3RoZXJzYCB2YWx1ZXNcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuaXMubWluaW11bSA9IGZ1bmN0aW9uICh2YWx1ZSwgb3RoZXJzKSB7XG4gIGlmIChpc0FjdHVhbE5hTih2YWx1ZSkpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdOYU4gaXMgbm90IGEgdmFsaWQgdmFsdWUnKTtcbiAgfSBlbHNlIGlmICghaXMuYXJyYXlsaWtlKG90aGVycykpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdzZWNvbmQgYXJndW1lbnQgbXVzdCBiZSBhcnJheS1saWtlJyk7XG4gIH1cbiAgdmFyIGxlbiA9IG90aGVycy5sZW5ndGg7XG5cbiAgd2hpbGUgKC0tbGVuID49IDApIHtcbiAgICBpZiAodmFsdWUgPiBvdGhlcnNbbGVuXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcblxuLyoqXG4gKiBpcy5uYW5cbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBub3QgYSBudW1iZXIuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBgdmFsdWVgIGlzIG5vdCBhIG51bWJlciwgZmFsc2Ugb3RoZXJ3aXNlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmlzLm5hbiA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICByZXR1cm4gIWlzLm51bWJlcih2YWx1ZSkgfHwgdmFsdWUgIT09IHZhbHVlO1xufTtcblxuLyoqXG4gKiBpcy5ldmVuXG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgYW4gZXZlbiBudW1iZXIuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgYHZhbHVlYCBpcyBhbiBldmVuIG51bWJlciwgZmFsc2Ugb3RoZXJ3aXNlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmlzLmV2ZW4gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIGlzLmluZmluaXRlKHZhbHVlKSB8fCAoaXMubnVtYmVyKHZhbHVlKSAmJiB2YWx1ZSA9PT0gdmFsdWUgJiYgdmFsdWUgJSAyID09PSAwKTtcbn07XG5cbi8qKlxuICogaXMub2RkXG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgYW4gb2RkIG51bWJlci5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBgdmFsdWVgIGlzIGFuIG9kZCBudW1iZXIsIGZhbHNlIG90aGVyd2lzZVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5pcy5vZGQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIGlzLmluZmluaXRlKHZhbHVlKSB8fCAoaXMubnVtYmVyKHZhbHVlKSAmJiB2YWx1ZSA9PT0gdmFsdWUgJiYgdmFsdWUgJSAyICE9PSAwKTtcbn07XG5cbi8qKlxuICogaXMuZ2VcbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBncmVhdGVyIHRoYW4gb3IgZXF1YWwgdG8gYG90aGVyYC5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHBhcmFtIHtOdW1iZXJ9IG90aGVyIHZhbHVlIHRvIGNvbXBhcmUgd2l0aFxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuaXMuZ2UgPSBmdW5jdGlvbiAodmFsdWUsIG90aGVyKSB7XG4gIGlmIChpc0FjdHVhbE5hTih2YWx1ZSkgfHwgaXNBY3R1YWxOYU4ob3RoZXIpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignTmFOIGlzIG5vdCBhIHZhbGlkIHZhbHVlJyk7XG4gIH1cbiAgcmV0dXJuICFpcy5pbmZpbml0ZSh2YWx1ZSkgJiYgIWlzLmluZmluaXRlKG90aGVyKSAmJiB2YWx1ZSA+PSBvdGhlcjtcbn07XG5cbi8qKlxuICogaXMuZ3RcbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBncmVhdGVyIHRoYW4gYG90aGVyYC5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHBhcmFtIHtOdW1iZXJ9IG90aGVyIHZhbHVlIHRvIGNvbXBhcmUgd2l0aFxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuaXMuZ3QgPSBmdW5jdGlvbiAodmFsdWUsIG90aGVyKSB7XG4gIGlmIChpc0FjdHVhbE5hTih2YWx1ZSkgfHwgaXNBY3R1YWxOYU4ob3RoZXIpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignTmFOIGlzIG5vdCBhIHZhbGlkIHZhbHVlJyk7XG4gIH1cbiAgcmV0dXJuICFpcy5pbmZpbml0ZSh2YWx1ZSkgJiYgIWlzLmluZmluaXRlKG90aGVyKSAmJiB2YWx1ZSA+IG90aGVyO1xufTtcblxuLyoqXG4gKiBpcy5sZVxuICogVGVzdCBpZiBgdmFsdWVgIGlzIGxlc3MgdGhhbiBvciBlcXVhbCB0byBgb3RoZXJgLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSB2YWx1ZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcGFyYW0ge051bWJlcn0gb3RoZXIgdmFsdWUgdG8gY29tcGFyZSB3aXRoXG4gKiBAcmV0dXJuIHtCb29sZWFufSBpZiAndmFsdWUnIGlzIGxlc3MgdGhhbiBvciBlcXVhbCB0byAnb3RoZXInXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmlzLmxlID0gZnVuY3Rpb24gKHZhbHVlLCBvdGhlcikge1xuICBpZiAoaXNBY3R1YWxOYU4odmFsdWUpIHx8IGlzQWN0dWFsTmFOKG90aGVyKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ05hTiBpcyBub3QgYSB2YWxpZCB2YWx1ZScpO1xuICB9XG4gIHJldHVybiAhaXMuaW5maW5pdGUodmFsdWUpICYmICFpcy5pbmZpbml0ZShvdGhlcikgJiYgdmFsdWUgPD0gb3RoZXI7XG59O1xuXG4vKipcbiAqIGlzLmx0XG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgbGVzcyB0aGFuIGBvdGhlcmAuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEBwYXJhbSB7TnVtYmVyfSBvdGhlciB2YWx1ZSB0byBjb21wYXJlIHdpdGhcbiAqIEByZXR1cm4ge0Jvb2xlYW59IGlmIGB2YWx1ZWAgaXMgbGVzcyB0aGFuIGBvdGhlcmBcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuaXMubHQgPSBmdW5jdGlvbiAodmFsdWUsIG90aGVyKSB7XG4gIGlmIChpc0FjdHVhbE5hTih2YWx1ZSkgfHwgaXNBY3R1YWxOYU4ob3RoZXIpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignTmFOIGlzIG5vdCBhIHZhbGlkIHZhbHVlJyk7XG4gIH1cbiAgcmV0dXJuICFpcy5pbmZpbml0ZSh2YWx1ZSkgJiYgIWlzLmluZmluaXRlKG90aGVyKSAmJiB2YWx1ZSA8IG90aGVyO1xufTtcblxuLyoqXG4gKiBpcy53aXRoaW5cbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyB3aXRoaW4gYHN0YXJ0YCBhbmQgYGZpbmlzaGAuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEBwYXJhbSB7TnVtYmVyfSBzdGFydCBsb3dlciBib3VuZFxuICogQHBhcmFtIHtOdW1iZXJ9IGZpbmlzaCB1cHBlciBib3VuZFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiAndmFsdWUnIGlzIGlzIHdpdGhpbiAnc3RhcnQnIGFuZCAnZmluaXNoJ1xuICogQGFwaSBwdWJsaWNcbiAqL1xuaXMud2l0aGluID0gZnVuY3Rpb24gKHZhbHVlLCBzdGFydCwgZmluaXNoKSB7XG4gIGlmIChpc0FjdHVhbE5hTih2YWx1ZSkgfHwgaXNBY3R1YWxOYU4oc3RhcnQpIHx8IGlzQWN0dWFsTmFOKGZpbmlzaCkpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdOYU4gaXMgbm90IGEgdmFsaWQgdmFsdWUnKTtcbiAgfSBlbHNlIGlmICghaXMubnVtYmVyKHZhbHVlKSB8fCAhaXMubnVtYmVyKHN0YXJ0KSB8fCAhaXMubnVtYmVyKGZpbmlzaCkpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdhbGwgYXJndW1lbnRzIG11c3QgYmUgbnVtYmVycycpO1xuICB9XG4gIHZhciBpc0FueUluZmluaXRlID0gaXMuaW5maW5pdGUodmFsdWUpIHx8IGlzLmluZmluaXRlKHN0YXJ0KSB8fCBpcy5pbmZpbml0ZShmaW5pc2gpO1xuICByZXR1cm4gaXNBbnlJbmZpbml0ZSB8fCAodmFsdWUgPj0gc3RhcnQgJiYgdmFsdWUgPD0gZmluaXNoKTtcbn07XG5cbi8qKlxuICogVGVzdCBvYmplY3QuXG4gKi9cblxuLyoqXG4gKiBpcy5vYmplY3RcbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBhbiBvYmplY3QuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBgdmFsdWVgIGlzIGFuIG9iamVjdCwgZmFsc2Ugb3RoZXJ3aXNlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5pcy5vYmplY3QgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIHRvU3RyLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBPYmplY3RdJztcbn07XG5cbi8qKlxuICogaXMucHJpbWl0aXZlXG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgYSBwcmltaXRpdmUuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBgdmFsdWVgIGlzIGEgcHJpbWl0aXZlLCBmYWxzZSBvdGhlcndpc2VcbiAqIEBhcGkgcHVibGljXG4gKi9cbmlzLnByaW1pdGl2ZSA9IGZ1bmN0aW9uIGlzUHJpbWl0aXZlKHZhbHVlKSB7XG4gIGlmICghdmFsdWUpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyB8fCBpcy5vYmplY3QodmFsdWUpIHx8IGlzLmZuKHZhbHVlKSB8fCBpcy5hcnJheSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59O1xuXG4vKipcbiAqIGlzLmhhc2hcbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBhIGhhc2ggLSBhIHBsYWluIG9iamVjdCBsaXRlcmFsLlxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgYHZhbHVlYCBpcyBhIGhhc2gsIGZhbHNlIG90aGVyd2lzZVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5pcy5oYXNoID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiBpcy5vYmplY3QodmFsdWUpICYmIHZhbHVlLmNvbnN0cnVjdG9yID09PSBPYmplY3QgJiYgIXZhbHVlLm5vZGVUeXBlICYmICF2YWx1ZS5zZXRJbnRlcnZhbDtcbn07XG5cbi8qKlxuICogVGVzdCByZWdleHAuXG4gKi9cblxuLyoqXG4gKiBpcy5yZWdleHBcbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBhIHJlZ3VsYXIgZXhwcmVzc2lvbi5cbiAqXG4gKiBAcGFyYW0ge01peGVkfSB2YWx1ZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGB2YWx1ZWAgaXMgYSByZWdleHAsIGZhbHNlIG90aGVyd2lzZVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5pcy5yZWdleHAgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIHRvU3RyLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBSZWdFeHBdJztcbn07XG5cbi8qKlxuICogVGVzdCBzdHJpbmcuXG4gKi9cblxuLyoqXG4gKiBpcy5zdHJpbmdcbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBhIHN0cmluZy5cbiAqXG4gKiBAcGFyYW0ge01peGVkfSB2YWx1ZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmICd2YWx1ZScgaXMgYSBzdHJpbmcsIGZhbHNlIG90aGVyd2lzZVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5pcy5zdHJpbmcgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIHRvU3RyLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBTdHJpbmddJztcbn07XG5cbi8qKlxuICogVGVzdCBiYXNlNjQgc3RyaW5nLlxuICovXG5cbi8qKlxuICogaXMuYmFzZTY0XG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBiYXNlNjQgZW5jb2RlZCBzdHJpbmcuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiAndmFsdWUnIGlzIGEgYmFzZTY0IGVuY29kZWQgc3RyaW5nLCBmYWxzZSBvdGhlcndpc2VcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuaXMuYmFzZTY0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiBpcy5zdHJpbmcodmFsdWUpICYmICghdmFsdWUubGVuZ3RoIHx8IGJhc2U2NFJlZ2V4LnRlc3QodmFsdWUpKTtcbn07XG5cbi8qKlxuICogVGVzdCBiYXNlNjQgc3RyaW5nLlxuICovXG5cbi8qKlxuICogaXMuaGV4XG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBoZXggZW5jb2RlZCBzdHJpbmcuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiAndmFsdWUnIGlzIGEgaGV4IGVuY29kZWQgc3RyaW5nLCBmYWxzZSBvdGhlcndpc2VcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuaXMuaGV4ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiBpcy5zdHJpbmcodmFsdWUpICYmICghdmFsdWUubGVuZ3RoIHx8IGhleFJlZ2V4LnRlc3QodmFsdWUpKTtcbn07XG5cbi8qKlxuICogaXMuc3ltYm9sXG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgYW4gRVM2IFN5bWJvbFxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgYHZhbHVlYCBpcyBhIFN5bWJvbCwgZmFsc2Ugb3RoZXJpc2VcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuaXMuc3ltYm9sID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIHRvU3RyLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBTeW1ib2xdJyAmJiB0eXBlb2Ygc3ltYm9sVmFsdWVPZi5jYWxsKHZhbHVlKSA9PT0gJ3N5bWJvbCc7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2lzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBpcyA9IHJlcXVpcmUoJy4vaXMnKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB3YWxrblNldCggb2JqLCBwYXRoLCB2YWx1ZSwgc3RhY2sgKSB7XHJcbiAgICBpZiAoIGlzLnN0cmluZyhwYXRoKSApXHJcbiAgICAgICAgcGF0aCA9IHBhdGguc3BsaXQoJy4nKTtcclxuICAgIGlmICggIXBhdGgubGVuZ3RoIClcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICBlbHNlIGlmICggcGF0aC5sZW5ndGggPT0gMSApXHJcbiAgICAgICAgcmV0dXJuIG9ialsgcGF0aFsgMCBdIF0gPSBzdGFja1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBbIC4uLiggb2JqWyBwYXRoWyAwIF0gXSB8fCBbXSApLCB2YWx1ZSBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHZhbHVlO1xyXG4gICAgZWxzZVxyXG4gICAgICAgIHJldHVybiB3YWxrblNldChcclxuICAgICAgICAgICAgb2JqWyBwYXRoWyAwIF0gXSA9XHJcbiAgICAgICAgICAgICAgICBvYmpbIHBhdGhbIDAgXSBdIHx8IHt9LFxyXG4gICAgICAgICAgICBwYXRoLnNsaWNlKDEpLFxyXG4gICAgICAgICAgICB2YWx1ZSwgc3RhY2tcclxuICAgICAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gd2Fsa25HZXQoIG9iaiwgcGF0aCwgaXNLZXkgKSB7XHJcbiAgICBpZiAoIGlzLnN0cmluZyhwYXRoKSApXHJcbiAgICAgICAgcGF0aCA9IHBhdGguc3BsaXQoJy4nKTtcclxuICAgIHJldHVybiBwYXRoLmxlbmd0aFxyXG4gICAgICAgICAgID8gb2JqWyBwYXRoWyAwIF0gXSAmJiB3YWxrbkdldChvYmpbIHBhdGhbIDAgXSBdLCBwYXRoLnNsaWNlKDEpKVxyXG4gICAgICAgICAgIDogb2JqO1xyXG59XHJcblxyXG4vL0B0b2RvXHJcbmV4cG9ydCBmdW5jdGlvbiBrZXlXYWxrblNldCggb2JqLCBwYXRoLCB2YWx1ZSwgc3RhY2sgKSB7XHJcbiAgICBpZiAoIGlzLnN0cmluZyhwYXRoKSApXHJcbiAgICAgICAgcGF0aCA9IHBhdGguc3BsaXQoLyhcXD58XFwvKS9pZykuZmlsdGVyKHYgPT4gKCB2ICE9PSAnPicgJiYgdiApKTtcclxuICAgIHJldHVybiB3YWxrblNldChvYmosIHBhdGgsIHZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGtleVdhbGtuR2V0KCBvYmosIHBhdGgsIGlzS2V5ICkge1xyXG4gICAgaWYgKCBpcy5zdHJpbmcocGF0aCkgKVxyXG4gICAgICAgIHBhdGggPSBwYXRoLnNwbGl0KC8oXFw+fFxcLykvaWcpLmZpbHRlcih2ID0+ICggdiAhPT0gJz4nICYmIHYgKSk7XHJcbiAgICByZXR1cm4gcGF0aC5sZW5ndGhcclxuICAgICAgICAgICA/IG9ialsgcGF0aFsgMCBdIF0gJiYgd2Fsa25HZXQob2JqWyBwYXRoWyAwIF0gXSwgcGF0aC5zbGljZSgxKSlcclxuICAgICAgICAgICA6IG9iajtcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlscy91dGlscy5qcyIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpICAyMDE4IFdpc2UgV2lsZCBXZWIgLlxuICpcbiAqICBNSVQgTGljZW5zZVxuICogIFxuICogIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqICBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiAgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqICBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqICBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICogIFxuICogIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuICogIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKiAgXG4gKiAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqICBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG4gKiAgU09GVFdBUkUuXG4gKiAgXG4gKiBAYXV0aG9yIDogTmF0aGFuYWVsIEJyYXVuXG4gKiBAY29udGFjdCA6IGNhaXBpbGFic0BnbWFpbC5jb21cbiAqL1xudmFyIGlzID0gcmVxdWlyZSgnaXMnKTtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVtaXR0ZXIge1xuICAgIF9ldmVudHMgPSB7fTtcbiAgICBcbiAgICBvbiggZXZ0LCBjYiApIHtcbiAgICAgICAgaWYgKCAhaXMuc3RyaW5nKGV2dCkgJiYgZXZ0IClcbiAgICAgICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhldnQpLmZvckVhY2goayA9PiB0aGlzLm9uKGssIGV2dFtrXSkpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fZXZlbnRzW2V2dF0gPSB0aGlzLl9ldmVudHNbZXZ0XSB8fCBbXTtcbiAgICAgICAgdGhpcy5fZXZlbnRzW2V2dF0ucHVzaChjYik7XG4gICAgICAgIFxuICAgIH1cbiAgICBcbiAgICB1biggZXZ0LCBjYiApIHtcbiAgICAgICAgaWYgKCAhaXMuc3RyaW5nKGV2dCkgJiYgZXZ0IClcbiAgICAgICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhldnQpLmZvckVhY2goayA9PiB0aGlzLnVuKGssIGV2dFtrXSkpO1xuICAgICAgICBcbiAgICAgICAgaWYgKCAhdGhpcy5fZXZlbnRzW2V2dF0gKSByZXR1cm47XG4gICAgICAgIHZhciBpID0gdGhpcy5fZXZlbnRzW2V2dF0uaW5kZXhPZihjYik7XG4gICAgICAgIHRoaXMuX2V2ZW50c1tldnRdLnNwbGljZShpLCAxKTtcbiAgICB9XG4gICAgXG4gICAgZW1pdCggZXZ0LCAuLi5hcmd6ICkge1xuICAgICAgICBpZiAoICF0aGlzLl9ldmVudHNbZXZ0XSApIHJldHVybjtcbiAgICAgICAgbGV0IGxpc3RzID0gWy4uLnRoaXMuX2V2ZW50c1tldnRdXTtcbiAgICAgICAgXG4gICAgICAgIGZvciAoIHZhciBpID0gMDsgaSA8IGxpc3RzLmxlbmd0aDsgaSsrIClcbiAgICAgICAgICAgIGxpc3RzW2ldKC4uLmFyZ3opXG4gICAgfVxuICAgIFxuICAgIGFkZExpc3RlbmVyKCkge1xuICAgICAgICB0aGlzLm9uKC4uLmFyZ3VtZW50cyk7XG4gICAgfVxuICAgIFxuICAgIHJlbW92ZUxpc3RlbmVyKCkge1xuICAgICAgICB0aGlzLnVuKC4uLmFyZ3VtZW50cyk7XG4gICAgfVxuICAgIFxuICAgIHJlbW92ZUFsbExpc3RlbmVycygpIHtcbiAgICAgICAgdGhpcy5fZXZlbnRzID0ge307XG4gICAgfVxuICAgIFxuICAgIG9uY2UoIGV2dCwgY2IgKSB7XG4gICAgICAgIGxldCBmbjtcbiAgICAgICAgdGhpcy5vbihldnQsIGZuID0gKCAuLi5hcmd6ICkgPT4ge1xuICAgICAgICAgICAgdGhpcy51bihldnQsIGZuKTtcbiAgICAgICAgICAgIGNiKC4uLmFyZ3opXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBcbiAgICBcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbHMvRW1pdHRlci5qcyIsIid1c2Ugc3RyaWN0Jztcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9saWIvaW5kZXgnKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zaG9ydGlkL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxudmFyIGFscGhhYmV0ID0gcmVxdWlyZSgnLi9hbHBoYWJldCcpO1xudmFyIGVuY29kZSA9IHJlcXVpcmUoJy4vZW5jb2RlJyk7XG52YXIgZGVjb2RlID0gcmVxdWlyZSgnLi9kZWNvZGUnKTtcbnZhciBidWlsZCA9IHJlcXVpcmUoJy4vYnVpbGQnKTtcbnZhciBpc1ZhbGlkID0gcmVxdWlyZSgnLi9pcy12YWxpZCcpO1xuXG4vLyBpZiB5b3UgYXJlIHVzaW5nIGNsdXN0ZXIgb3IgbXVsdGlwbGUgc2VydmVycyB1c2UgdGhpcyB0byBtYWtlIGVhY2ggaW5zdGFuY2Vcbi8vIGhhcyBhIHVuaXF1ZSB2YWx1ZSBmb3Igd29ya2VyXG4vLyBOb3RlOiBJIGRvbid0IGtub3cgaWYgdGhpcyBpcyBhdXRvbWF0aWNhbGx5IHNldCB3aGVuIHVzaW5nIHRoaXJkXG4vLyBwYXJ0eSBjbHVzdGVyIHNvbHV0aW9ucyBzdWNoIGFzIHBtMi5cbnZhciBjbHVzdGVyV29ya2VySWQgPSByZXF1aXJlKCcuL3V0aWwvY2x1c3Rlci13b3JrZXItaWQnKSB8fCAwO1xuXG4vKipcbiAqIFNldCB0aGUgc2VlZC5cbiAqIEhpZ2hseSByZWNvbW1lbmRlZCBpZiB5b3UgZG9uJ3Qgd2FudCBwZW9wbGUgdG8gdHJ5IHRvIGZpZ3VyZSBvdXQgeW91ciBpZCBzY2hlbWEuXG4gKiBleHBvc2VkIGFzIHNob3J0aWQuc2VlZChpbnQpXG4gKiBAcGFyYW0gc2VlZCBJbnRlZ2VyIHZhbHVlIHRvIHNlZWQgdGhlIHJhbmRvbSBhbHBoYWJldC4gIEFMV0FZUyBVU0UgVEhFIFNBTUUgU0VFRCBvciB5b3UgbWlnaHQgZ2V0IG92ZXJsYXBzLlxuICovXG5mdW5jdGlvbiBzZWVkKHNlZWRWYWx1ZSkge1xuICAgIGFscGhhYmV0LnNlZWQoc2VlZFZhbHVlKTtcbiAgICByZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8qKlxuICogU2V0IHRoZSBjbHVzdGVyIHdvcmtlciBvciBtYWNoaW5lIGlkXG4gKiBleHBvc2VkIGFzIHNob3J0aWQud29ya2VyKGludClcbiAqIEBwYXJhbSB3b3JrZXJJZCB3b3JrZXIgbXVzdCBiZSBwb3NpdGl2ZSBpbnRlZ2VyLiAgTnVtYmVyIGxlc3MgdGhhbiAxNiBpcyByZWNvbW1lbmRlZC5cbiAqIHJldHVybnMgc2hvcnRpZCBtb2R1bGUgc28gaXQgY2FuIGJlIGNoYWluZWQuXG4gKi9cbmZ1bmN0aW9uIHdvcmtlcih3b3JrZXJJZCkge1xuICAgIGNsdXN0ZXJXb3JrZXJJZCA9IHdvcmtlcklkO1xuICAgIHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLyoqXG4gKlxuICogc2V0cyBuZXcgY2hhcmFjdGVycyB0byB1c2UgaW4gdGhlIGFscGhhYmV0XG4gKiByZXR1cm5zIHRoZSBzaHVmZmxlZCBhbHBoYWJldFxuICovXG5mdW5jdGlvbiBjaGFyYWN0ZXJzKG5ld0NoYXJhY3RlcnMpIHtcbiAgICBpZiAobmV3Q2hhcmFjdGVycyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGFscGhhYmV0LmNoYXJhY3RlcnMobmV3Q2hhcmFjdGVycyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFscGhhYmV0LnNodWZmbGVkKCk7XG59XG5cbi8qKlxuICogR2VuZXJhdGUgdW5pcXVlIGlkXG4gKiBSZXR1cm5zIHN0cmluZyBpZFxuICovXG5mdW5jdGlvbiBnZW5lcmF0ZSgpIHtcbiAgcmV0dXJuIGJ1aWxkKGNsdXN0ZXJXb3JrZXJJZCk7XG59XG5cbi8vIEV4cG9ydCBhbGwgb3RoZXIgZnVuY3Rpb25zIGFzIHByb3BlcnRpZXMgb2YgdGhlIGdlbmVyYXRlIGZ1bmN0aW9uXG5tb2R1bGUuZXhwb3J0cyA9IGdlbmVyYXRlO1xubW9kdWxlLmV4cG9ydHMuZ2VuZXJhdGUgPSBnZW5lcmF0ZTtcbm1vZHVsZS5leHBvcnRzLnNlZWQgPSBzZWVkO1xubW9kdWxlLmV4cG9ydHMud29ya2VyID0gd29ya2VyO1xubW9kdWxlLmV4cG9ydHMuY2hhcmFjdGVycyA9IGNoYXJhY3RlcnM7XG5tb2R1bGUuZXhwb3J0cy5kZWNvZGUgPSBkZWNvZGU7XG5tb2R1bGUuZXhwb3J0cy5pc1ZhbGlkID0gaXNWYWxpZDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zaG9ydGlkL2xpYi9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbnZhciByYW5kb21Gcm9tU2VlZCA9IHJlcXVpcmUoJy4vcmFuZG9tL3JhbmRvbS1mcm9tLXNlZWQnKTtcblxudmFyIE9SSUdJTkFMID0gJzAxMjM0NTY3ODlhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ekFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaXy0nO1xudmFyIGFscGhhYmV0O1xudmFyIHByZXZpb3VzU2VlZDtcblxudmFyIHNodWZmbGVkO1xuXG5mdW5jdGlvbiByZXNldCgpIHtcbiAgICBzaHVmZmxlZCA9IGZhbHNlO1xufVxuXG5mdW5jdGlvbiBzZXRDaGFyYWN0ZXJzKF9hbHBoYWJldF8pIHtcbiAgICBpZiAoIV9hbHBoYWJldF8pIHtcbiAgICAgICAgaWYgKGFscGhhYmV0ICE9PSBPUklHSU5BTCkge1xuICAgICAgICAgICAgYWxwaGFiZXQgPSBPUklHSU5BTDtcbiAgICAgICAgICAgIHJlc2V0KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChfYWxwaGFiZXRfID09PSBhbHBoYWJldCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKF9hbHBoYWJldF8ubGVuZ3RoICE9PSBPUklHSU5BTC5sZW5ndGgpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDdXN0b20gYWxwaGFiZXQgZm9yIHNob3J0aWQgbXVzdCBiZSAnICsgT1JJR0lOQUwubGVuZ3RoICsgJyB1bmlxdWUgY2hhcmFjdGVycy4gWW91IHN1Ym1pdHRlZCAnICsgX2FscGhhYmV0Xy5sZW5ndGggKyAnIGNoYXJhY3RlcnM6ICcgKyBfYWxwaGFiZXRfKTtcbiAgICB9XG5cbiAgICB2YXIgdW5pcXVlID0gX2FscGhhYmV0Xy5zcGxpdCgnJykuZmlsdGVyKGZ1bmN0aW9uKGl0ZW0sIGluZCwgYXJyKXtcbiAgICAgICByZXR1cm4gaW5kICE9PSBhcnIubGFzdEluZGV4T2YoaXRlbSk7XG4gICAgfSk7XG5cbiAgICBpZiAodW5pcXVlLmxlbmd0aCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0N1c3RvbSBhbHBoYWJldCBmb3Igc2hvcnRpZCBtdXN0IGJlICcgKyBPUklHSU5BTC5sZW5ndGggKyAnIHVuaXF1ZSBjaGFyYWN0ZXJzLiBUaGVzZSBjaGFyYWN0ZXJzIHdlcmUgbm90IHVuaXF1ZTogJyArIHVuaXF1ZS5qb2luKCcsICcpKTtcbiAgICB9XG5cbiAgICBhbHBoYWJldCA9IF9hbHBoYWJldF87XG4gICAgcmVzZXQoKTtcbn1cblxuZnVuY3Rpb24gY2hhcmFjdGVycyhfYWxwaGFiZXRfKSB7XG4gICAgc2V0Q2hhcmFjdGVycyhfYWxwaGFiZXRfKTtcbiAgICByZXR1cm4gYWxwaGFiZXQ7XG59XG5cbmZ1bmN0aW9uIHNldFNlZWQoc2VlZCkge1xuICAgIHJhbmRvbUZyb21TZWVkLnNlZWQoc2VlZCk7XG4gICAgaWYgKHByZXZpb3VzU2VlZCAhPT0gc2VlZCkge1xuICAgICAgICByZXNldCgpO1xuICAgICAgICBwcmV2aW91c1NlZWQgPSBzZWVkO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gc2h1ZmZsZSgpIHtcbiAgICBpZiAoIWFscGhhYmV0KSB7XG4gICAgICAgIHNldENoYXJhY3RlcnMoT1JJR0lOQUwpO1xuICAgIH1cblxuICAgIHZhciBzb3VyY2VBcnJheSA9IGFscGhhYmV0LnNwbGl0KCcnKTtcbiAgICB2YXIgdGFyZ2V0QXJyYXkgPSBbXTtcbiAgICB2YXIgciA9IHJhbmRvbUZyb21TZWVkLm5leHRWYWx1ZSgpO1xuICAgIHZhciBjaGFyYWN0ZXJJbmRleDtcblxuICAgIHdoaWxlIChzb3VyY2VBcnJheS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHIgPSByYW5kb21Gcm9tU2VlZC5uZXh0VmFsdWUoKTtcbiAgICAgICAgY2hhcmFjdGVySW5kZXggPSBNYXRoLmZsb29yKHIgKiBzb3VyY2VBcnJheS5sZW5ndGgpO1xuICAgICAgICB0YXJnZXRBcnJheS5wdXNoKHNvdXJjZUFycmF5LnNwbGljZShjaGFyYWN0ZXJJbmRleCwgMSlbMF0pO1xuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0QXJyYXkuam9pbignJyk7XG59XG5cbmZ1bmN0aW9uIGdldFNodWZmbGVkKCkge1xuICAgIGlmIChzaHVmZmxlZCkge1xuICAgICAgICByZXR1cm4gc2h1ZmZsZWQ7XG4gICAgfVxuICAgIHNodWZmbGVkID0gc2h1ZmZsZSgpO1xuICAgIHJldHVybiBzaHVmZmxlZDtcbn1cblxuLyoqXG4gKiBsb29rdXAgc2h1ZmZsZWQgbGV0dGVyXG4gKiBAcGFyYW0gaW5kZXhcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGxvb2t1cChpbmRleCkge1xuICAgIHZhciBhbHBoYWJldFNodWZmbGVkID0gZ2V0U2h1ZmZsZWQoKTtcbiAgICByZXR1cm4gYWxwaGFiZXRTaHVmZmxlZFtpbmRleF07XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIGNoYXJhY3RlcnM6IGNoYXJhY3RlcnMsXG4gICAgc2VlZDogc2V0U2VlZCxcbiAgICBsb29rdXA6IGxvb2t1cCxcbiAgICBzaHVmZmxlZDogZ2V0U2h1ZmZsZWRcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc2hvcnRpZC9saWIvYWxwaGFiZXQuanNcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG4vLyBGb3VuZCB0aGlzIHNlZWQtYmFzZWQgcmFuZG9tIGdlbmVyYXRvciBzb21ld2hlcmVcbi8vIEJhc2VkIG9uIFRoZSBDZW50cmFsIFJhbmRvbWl6ZXIgMS4zIChDKSAxOTk3IGJ5IFBhdWwgSG91bGUgKGhvdWxlQG1zYy5jb3JuZWxsLmVkdSlcblxudmFyIHNlZWQgPSAxO1xuXG4vKipcbiAqIHJldHVybiBhIHJhbmRvbSBudW1iZXIgYmFzZWQgb24gYSBzZWVkXG4gKiBAcGFyYW0gc2VlZFxuICogQHJldHVybnMge251bWJlcn1cbiAqL1xuZnVuY3Rpb24gZ2V0TmV4dFZhbHVlKCkge1xuICAgIHNlZWQgPSAoc2VlZCAqIDkzMDEgKyA0OTI5NykgJSAyMzMyODA7XG4gICAgcmV0dXJuIHNlZWQvKDIzMzI4MC4wKTtcbn1cblxuZnVuY3Rpb24gc2V0U2VlZChfc2VlZF8pIHtcbiAgICBzZWVkID0gX3NlZWRfO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBuZXh0VmFsdWU6IGdldE5leHRWYWx1ZSxcbiAgICBzZWVkOiBzZXRTZWVkXG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Nob3J0aWQvbGliL3JhbmRvbS9yYW5kb20tZnJvbS1zZWVkLmpzXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxudmFyIHJhbmRvbUJ5dGUgPSByZXF1aXJlKCcuL3JhbmRvbS9yYW5kb20tYnl0ZScpO1xuXG5mdW5jdGlvbiBlbmNvZGUobG9va3VwLCBudW1iZXIpIHtcbiAgICB2YXIgbG9vcENvdW50ZXIgPSAwO1xuICAgIHZhciBkb25lO1xuXG4gICAgdmFyIHN0ciA9ICcnO1xuXG4gICAgd2hpbGUgKCFkb25lKSB7XG4gICAgICAgIHN0ciA9IHN0ciArIGxvb2t1cCggKCAobnVtYmVyID4+ICg0ICogbG9vcENvdW50ZXIpKSAmIDB4MGYgKSB8IHJhbmRvbUJ5dGUoKSApO1xuICAgICAgICBkb25lID0gbnVtYmVyIDwgKE1hdGgucG93KDE2LCBsb29wQ291bnRlciArIDEgKSApO1xuICAgICAgICBsb29wQ291bnRlcisrO1xuICAgIH1cbiAgICByZXR1cm4gc3RyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGVuY29kZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zaG9ydGlkL2xpYi9lbmNvZGUuanNcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxudmFyIGNyeXB0byA9IHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnICYmICh3aW5kb3cuY3J5cHRvIHx8IHdpbmRvdy5tc0NyeXB0byk7IC8vIElFIDExIHVzZXMgd2luZG93Lm1zQ3J5cHRvXG5cbmZ1bmN0aW9uIHJhbmRvbUJ5dGUoKSB7XG4gICAgaWYgKCFjcnlwdG8gfHwgIWNyeXB0by5nZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDI1NikgJiAweDMwO1xuICAgIH1cbiAgICB2YXIgZGVzdCA9IG5ldyBVaW50OEFycmF5KDEpO1xuICAgIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMoZGVzdCk7XG4gICAgcmV0dXJuIGRlc3RbMF0gJiAweDMwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHJhbmRvbUJ5dGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc2hvcnRpZC9saWIvcmFuZG9tL3JhbmRvbS1ieXRlLWJyb3dzZXIuanNcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcbnZhciBhbHBoYWJldCA9IHJlcXVpcmUoJy4vYWxwaGFiZXQnKTtcblxuLyoqXG4gKiBEZWNvZGUgdGhlIGlkIHRvIGdldCB0aGUgdmVyc2lvbiBhbmQgd29ya2VyXG4gKiBNYWlubHkgZm9yIGRlYnVnZ2luZyBhbmQgdGVzdGluZy5cbiAqIEBwYXJhbSBpZCAtIHRoZSBzaG9ydGlkLWdlbmVyYXRlZCBpZC5cbiAqL1xuZnVuY3Rpb24gZGVjb2RlKGlkKSB7XG4gICAgdmFyIGNoYXJhY3RlcnMgPSBhbHBoYWJldC5zaHVmZmxlZCgpO1xuICAgIHJldHVybiB7XG4gICAgICAgIHZlcnNpb246IGNoYXJhY3RlcnMuaW5kZXhPZihpZC5zdWJzdHIoMCwgMSkpICYgMHgwZixcbiAgICAgICAgd29ya2VyOiBjaGFyYWN0ZXJzLmluZGV4T2YoaWQuc3Vic3RyKDEsIDEpKSAmIDB4MGZcbiAgICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRlY29kZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zaG9ydGlkL2xpYi9kZWNvZGUuanNcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxudmFyIGVuY29kZSA9IHJlcXVpcmUoJy4vZW5jb2RlJyk7XG52YXIgYWxwaGFiZXQgPSByZXF1aXJlKCcuL2FscGhhYmV0Jyk7XG5cbi8vIElnbm9yZSBhbGwgbWlsbGlzZWNvbmRzIGJlZm9yZSBhIGNlcnRhaW4gdGltZSB0byByZWR1Y2UgdGhlIHNpemUgb2YgdGhlIGRhdGUgZW50cm9weSB3aXRob3V0IHNhY3JpZmljaW5nIHVuaXF1ZW5lc3MuXG4vLyBUaGlzIG51bWJlciBzaG91bGQgYmUgdXBkYXRlZCBldmVyeSB5ZWFyIG9yIHNvIHRvIGtlZXAgdGhlIGdlbmVyYXRlZCBpZCBzaG9ydC5cbi8vIFRvIHJlZ2VuZXJhdGUgYG5ldyBEYXRlKCkgLSAwYCBhbmQgYnVtcCB0aGUgdmVyc2lvbi4gQWx3YXlzIGJ1bXAgdGhlIHZlcnNpb24hXG52YXIgUkVEVUNFX1RJTUUgPSAxNDU5NzA3NjA2NTE4O1xuXG4vLyBkb24ndCBjaGFuZ2UgdW5sZXNzIHdlIGNoYW5nZSB0aGUgYWxnb3Mgb3IgUkVEVUNFX1RJTUVcbi8vIG11c3QgYmUgYW4gaW50ZWdlciBhbmQgbGVzcyB0aGFuIDE2XG52YXIgdmVyc2lvbiA9IDY7XG5cbi8vIENvdW50ZXIgaXMgdXNlZCB3aGVuIHNob3J0aWQgaXMgY2FsbGVkIG11bHRpcGxlIHRpbWVzIGluIG9uZSBzZWNvbmQuXG52YXIgY291bnRlcjtcblxuLy8gUmVtZW1iZXIgdGhlIGxhc3QgdGltZSBzaG9ydGlkIHdhcyBjYWxsZWQgaW4gY2FzZSBjb3VudGVyIGlzIG5lZWRlZC5cbnZhciBwcmV2aW91c1NlY29uZHM7XG5cbi8qKlxuICogR2VuZXJhdGUgdW5pcXVlIGlkXG4gKiBSZXR1cm5zIHN0cmluZyBpZFxuICovXG5mdW5jdGlvbiBidWlsZChjbHVzdGVyV29ya2VySWQpIHtcblxuICAgIHZhciBzdHIgPSAnJztcblxuICAgIHZhciBzZWNvbmRzID0gTWF0aC5mbG9vcigoRGF0ZS5ub3coKSAtIFJFRFVDRV9USU1FKSAqIDAuMDAxKTtcblxuICAgIGlmIChzZWNvbmRzID09PSBwcmV2aW91c1NlY29uZHMpIHtcbiAgICAgICAgY291bnRlcisrO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvdW50ZXIgPSAwO1xuICAgICAgICBwcmV2aW91c1NlY29uZHMgPSBzZWNvbmRzO1xuICAgIH1cblxuICAgIHN0ciA9IHN0ciArIGVuY29kZShhbHBoYWJldC5sb29rdXAsIHZlcnNpb24pO1xuICAgIHN0ciA9IHN0ciArIGVuY29kZShhbHBoYWJldC5sb29rdXAsIGNsdXN0ZXJXb3JrZXJJZCk7XG4gICAgaWYgKGNvdW50ZXIgPiAwKSB7XG4gICAgICAgIHN0ciA9IHN0ciArIGVuY29kZShhbHBoYWJldC5sb29rdXAsIGNvdW50ZXIpO1xuICAgIH1cbiAgICBzdHIgPSBzdHIgKyBlbmNvZGUoYWxwaGFiZXQubG9va3VwLCBzZWNvbmRzKTtcblxuICAgIHJldHVybiBzdHI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYnVpbGQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc2hvcnRpZC9saWIvYnVpbGQuanNcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcbnZhciBhbHBoYWJldCA9IHJlcXVpcmUoJy4vYWxwaGFiZXQnKTtcblxuZnVuY3Rpb24gaXNTaG9ydElkKGlkKSB7XG4gICAgaWYgKCFpZCB8fCB0eXBlb2YgaWQgIT09ICdzdHJpbmcnIHx8IGlkLmxlbmd0aCA8IDYgKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICB2YXIgY2hhcmFjdGVycyA9IGFscGhhYmV0LmNoYXJhY3RlcnMoKTtcbiAgICB2YXIgbGVuID0gaWQubGVuZ3RoO1xuICAgIGZvcih2YXIgaSA9IDA7IGkgPCBsZW47aSsrKSB7XG4gICAgICAgIGlmIChjaGFyYWN0ZXJzLmluZGV4T2YoaWRbaV0pID09PSAtMSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzU2hvcnRJZDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zaG9ydGlkL2xpYi9pcy12YWxpZC5qc1xuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IDA7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc2hvcnRpZC9saWIvdXRpbC9jbHVzdGVyLXdvcmtlci1pZC1icm93c2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxuICogQ29weXJpZ2h0IChjKSAgMjAxOCBXaXNlIFdpbGQgV2ViIC5cbiAqXG4gKiAgTUlUIExpY2Vuc2VcbiAqXG4gKiAgUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqICBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiAgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuICogIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqICBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqICBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqICBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiAgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqICBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuICogIFNPRlRXQVJFLlxuICpcbiAqIEBhdXRob3IgOiBOYXRoYW5hZWwgQnJhdW5cbiAqIEBjb250YWN0IDogY2FpcGlsYWJzQGdtYWlsLmNvbVxuICovXG5cbnZhciBpcyAgICAgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi91dGlscy9pcycpLFxuICAgIFNjb3BlICAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL1Njb3BlJyksXG4gICAgeyBrZXlXYWxrblNldCwga2V5V2Fsa25HZXQgfSA9IHJlcXVpcmUoJy4vdXRpbHMvdXRpbHMnKSxcbiAgICBFdmVudEVtaXR0ZXIgICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi91dGlscy9FbWl0dGVyJyksXG4gICAgVGFza1NlcXVlbmNlciAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vdXRpbHMvVGFza1NlcXVlbmNlcicpLFxuICAgIHNob3J0aWQgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlKCdzaG9ydGlkJyksXG4gICAgb2JqUHJvdG8gICAgICAgICAgICAgICAgICAgICA9IE9iamVjdC5nZXRQcm90b3R5cGVPZih7fSk7XG5cbmNsYXNzIFN0b3JlIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgICAvL3N0YXRpYyB1c2UgICAgICAgICAgICAgICAgICA9IFtdOy8vIG92ZXJyaWRhYmxlIGxpc3Qgb2Ygc291cmNlIHN0b3Jlc1xuICAgIHN0YXRpYyBmb2xsb3c7Ly8gb3ZlcnJpZGFibGUgbGlzdCBvZiBzdG9yZSB0aGF0IHdpbGwgYWxsb3cgcHVzaCBpZiB1cGRhdGVkXG4gICAgc3RhdGljIHJlcXVpcmU7XG4gICAgc3RhdGljIHN0YXRpY1Njb3BlICAgICAgICAgID0gbmV3IFNjb3BlKHt9LCB7IGlkOiBcInN0YXRpY1wiIH0pO1xuICAgIHN0YXRpYyBzdGF0ZSAgICAgICAgICAgICAgICA9IHVuZGVmaW5lZDsvLyBkZWZhdWx0IHN0YXRlXG4gICAgLyoqXG4gICAgICogaWYgcmV0YWluIGdvZXMgdG8gMCA6XG4gICAgICogZmFsc2UgdG8gbm90IGRlc3Ryb3ksXG4gICAgICogMCB0byBzeW5jIGF1dG8gZGVzdHJveVxuICAgICAqIE1zIHRvIGF1dG9kZXN0cm95IGFmdGVyIHRtIG1zIGlmIG5vIHJldGFpbiBoYXMgYmVlbiBjYWxsZWRcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbnxJbnR9XG4gICAgICovXG4gICAgICAgICAgIHN0YXRpYyBwZXJzaXN0ZW5jZVRtID0gZmFsc2U7XG4gICAgXG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0b3IsIHdpbGwgYnVpbGQgYSByZXNjb3BlIHN0b3JlXG4gICAgICpcbiAgICAgKiAoc2NvcGUsIHtyZXF1aXJlLHVzZSxhcHBseSxzdGF0ZSwgZGF0YX0pXG4gICAgICogKHNjb3BlKVxuICAgICAqXG4gICAgICogQHBhcmFtIHNjb3BlIHtvYmplY3R9IHNjb3BlIHdoZXJlIHRvIGZpbmQgdGhlIG90aGVyIHN0b3JlcyAoZGVmYXVsdCA6IHN0YXRpY1xuICAgICAqICAgICBzdGF0aWNTY29wZSApXG4gICAgICogQHBhcmFtIGtleXMge0FycmF5fSAocGFzc2VkIHRvIFN0b3JlOjptYXApIEV4IDogW1wic2Vzc2lvblwiLCBcIm90aGVyTmFtZWRTdG9yZTprZXlcIixcbiAgICAgKiAgICAgb3RoZXJTdG9yZS5hcyhcIm90aGVyS2V5XCIpXVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB2YXIgYXJneiAgICAgICAgID0gWyAuLi5hcmd1bWVudHMgXSxcbiAgICAgICAgICAgIF9zdGF0aWMgICAgICA9IHRoaXMuY29uc3RydWN0b3IsXG4gICAgICAgICAgICBzY29wZSAgICAgICAgPSBhcmd6WyAwIF0gaW5zdGFuY2VvZiBTY29wZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBhcmd6LnNoaWZ0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3N0YXRpYy5zY29wZSA/IFNjb3BlLmdldFNjb3BlKF9zdGF0aWMuc2NvcGUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBpcy5zdHJpbmcoYXJnelsgMCBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBTY29wZS5nZXRTY29wZShhcmd6LnNoaWZ0KCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF9zdGF0aWMuc3RhdGljU2NvcGUsXG4gICAgICAgICAgICBjZmcgICAgICAgICAgPSBhcmd6WyAwIF0gJiYgIWlzLmFycmF5KGFyZ3pbIDAgXSkgJiYgIWlzLnN0cmluZyhhcmd6WyAwIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA/IGFyZ3ouc2hpZnQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB7fSxcbiAgICAgICAgICAgIHRhc2tRdWV1ZSAgICA9IGlzLmFycmF5KGFyZ3pbIDAgXSkgPyBhcmd6LnNoaWZ0KCkgOiBudWxsLFxuICAgICAgICAgICAgbmFtZSAgICAgICAgID0gY2ZnLm5hbWUgfHwgX3N0YXRpYy5uYW1lLFxuICAgICAgICAgICAgd2F0Y2hzICAgICAgID0gY2ZnLnVzZSB8fCBbXSxcbiAgICAgICAgICAgIGFwcGx5ICAgICAgICA9IGNmZy5hcHBseSB8fCBudWxsLFxuICAgICAgICAgICAgaW5pdGlhbFN0YXRlID0gX3N0YXRpYy5zdGF0ZSB8fCBfc3RhdGljLmluaXRpYWxTdGF0ZSB8fCBfc3RhdGljLmRlZmF1bHRTdGF0ZSxcbiAgICAgICAgICAgIGFwcGxpZWQ7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl91aWQgPSBjZmcuX3VpZCB8fCBzaG9ydGlkLmdlbmVyYXRlKCk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9fcmV0YWlucyAgICA9IHsgYWxsOiAwIH07XG4gICAgICAgIHRoaXMuX19sb2NrcyAgICAgID0geyBhbGw6IDAgfTtcbiAgICAgICAgdGhpcy5fb25TdGFiaWxpemUgPSBbXTtcbiAgICAgICAgXG4gICAgICAgIC8vIGF1dG9EZXN0cm95VG1cbiAgICAgICAgdGhpcy5fYXV0b0Rlc3Ryb3kgICA9ICEhdGhpcy5fcGVyc2lzdGVuY2VUbTtcbiAgICAgICAgdGhpcy5fcGVyc2lzdGVuY2VUbSA9IGNmZy5wZXJzaXN0ZW5jZVRtIHx8IF9zdGF0aWMucGVyc2lzdGVuY2VUbSB8fCAoIGNmZy5hdXRvRGVzdHJveSB8fCBfc3RhdGljLmF1dG9EZXN0cm95ICkgJiYgNTtcbiAgICAgICAgdGhpcy5fY2ZnICAgICAgICAgICA9IGNmZztcbiAgICAgICAgaWYgKCBjZmcgJiYgY2ZnLm9uICkge1xuICAgICAgICAgICAgdGhpcy5vbihjZmcub24pO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICBcbiAgICAgICAgaWYgKCBzY29wZS5zdG9yZXMgKSB7XG4gICAgICAgICAgICB0aGlzLnNjb3BlT2JqID0gc2NvcGU7XG4gICAgICAgICAgICB0aGlzLnNjb3BlICAgID0gc2NvcGUuc3RvcmVzO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zY29wZU9iaiA9IG5ldyBTY29wZShzY29wZSk7XG4gICAgICAgICAgICB0aGlzLnNjb3BlICAgID0gc2NvcGUuc3RvcmVzO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvLyBzdGFuZGFyZGl6ZWQgc2NvcGUgYWNjZXNzXG4gICAgICAgIHRoaXMuJHNjb3BlICAgID0gdGhpcy5zY29wZU9iajtcbiAgICAgICAgdGhpcy4kc3RvcmVzICAgPSB0aGlzLnNjb3BlT2JqLnN0b3JlcztcbiAgICAgICAgdGhpcy4kYWN0aW9ucyAgPSB0aGlzLnNjb3BlT2JqLmFjdGlvbnM7XG4gICAgICAgIHRoaXMuJGRpc3BhdGNoID0gdGhpcy5zY29wZU9iai5kaXNwYXRjaC5iaW5kKHRoaXMuc2NvcGVPYmopO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fcmV2ICAgICA9IHRoaXMuY29uc3RydWN0b3IuX3JldiB8fCAwO1xuICAgICAgICB0aGlzLl9yZXZzICAgID0ge307XG4gICAgICAgIHRoaXMuc3RvcmVzICAgPSB7fTtcbiAgICAgICAgdGhpcy5fcmVxdWlyZSA9IFtdO1xuICAgICAgICB0aGlzLl9zb3VyY2VzID0gWyBuYW1lIF07XG4gICAgICAgIFxuICAgICAgICBpZiAoIGlzLmFycmF5KF9zdGF0aWMudXNlKSApIHtcbiAgICAgICAgICAgIHRoaXMuX3VzZSA9IFsgLi4ud2F0Y2hzLCAuLi4oIF9zdGF0aWMudXNlIHx8IFtdICkubWFwKFxuICAgICAgICAgICAgICAgIGtleSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCByZWYgPSBrZXkubWF0Y2goL14oXFwhPykoW15cXDpdKikoPzpcXDooLiopKT8kLyk7XG4gICAgICAgICAgICAgICAgICAgIGlmICggcmVmWyAxIF0gKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVmMiA9IHJlZlsgMiBdLnNwbGl0KCcuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9yZXF1aXJlLnB1c2gocmVmWyAzIF0gfHwgcmVmMlsgcmVmMi5sZW5ndGggLSAxIF0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZWZbIDIgXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApIF07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl91c2UgPSBbIC4uLndhdGNocywgLi4uKFxuICAgICAgICAgICAgICAgIF9zdGF0aWMudXNlID8gT2JqZWN0LmtleXMoX3N0YXRpYy51c2UpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZWYgPSBrZXkubWF0Y2goL14oXFwhPykoLiopJC8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWZbIDEgXSAmJiB0aGlzLl9yZXF1aXJlLnB1c2goX3N0YXRpYy51c2VbIGtleSBdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlZlsgMiBdICsgKCAoIF9zdGF0aWMudXNlWyBrZXkgXSA9PT0gdHJ1ZSApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJzonICsgX3N0YXRpYy51c2VbIGtleSBdICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IFtdXG4gICAgICAgICAgICApIF07XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmICggX3N0YXRpYy5yZXF1aXJlIClcbiAgICAgICAgICAgIHRoaXMuX3JlcXVpcmUucHVzaCguLi5fc3RhdGljLnJlcXVpcmUpO1xuICAgICAgICBpZiAoIGNmZy5yZXF1aXJlIClcbiAgICAgICAgICAgIHRoaXMuX3JlcXVpcmUucHVzaCguLi5jZmcucmVxdWlyZSk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9mb2xsb3dlcnMgPSBbXTtcbiAgICAgICAgdGhpcy5fY2hhbmdlc1NXID0gaW5pdGlhbFN0YXRlIHx8IHt9O1xuICAgICAgICB0aGlzLnN0YXRlICAgICAgPSBpbml0aWFsU3RhdGUgJiYge307XG4gICAgICAgIGlmICggYXBwbHkgKVxuICAgICAgICAgICAgdGhpcy5hcHBseSA9IGFwcGx5O1xuICAgICAgICBcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEluaXRpYWwgc3RhdGUgaXNuJ3QgZnVsbHkgaW5pdGlhbGl6ZWQgKCBjaGlsZHMgY29uc3RydWN0b3JzIGNhbiBzZXQgaXQgKVxuICAgICAgICAgKiBTY29wZSBiYXNlZCBpbnN0YW5jZSBoYXZlIHRhc2tRdWV1ZSB0byBkZWxheSBpbml0IHN5bmNocm9ub3VzbHksIGlmIG5vdFxuICAgICAgICAgKiBwcmVzZW50IHdlIHVzZSBzZXRUaW1lb3V0XG4gICAgICAgICAqL1xuICAgICAgICBpZiAoIHRhc2tRdWV1ZSApIHtcbiAgICAgICAgICAgIHRhc2tRdWV1ZS5wdXNoKHRoaXMuX2FmdGVyQ29uc3RydWN0b3IuYmluZCh0aGlzKSlcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgICAgICBzZXRUaW1lb3V0KHRoaXMuX2FmdGVyQ29uc3RydWN0b3IuYmluZCh0aGlzKSlcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBpbmNvbWluZyBzdGF0ZSAoIGZvciBpbW1lZGlhdGUgc3RhdGUgcmVsYXRpdmUgYWN0aW9ucyApXG4gICAgICogQHJldHVybnMge3t9fCp9XG4gICAgICovXG4gICAgZ2V0IG5leHRTdGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NoYW5nZXNTVyAmJiB7IC4uLnRoaXMuc3RhdGUsIC4uLnRoaXMuX2NoYW5nZXNTVyB9IHx8IHRoaXMuc3RhdGU7XG4gICAgfVxuICAgIFxuICAgIF9hZnRlckNvbnN0cnVjdG9yKCkge1xuICAgICAgICBsZXQgY2ZnICAgICAgICAgID0gdGhpcy5fY2ZnLFxuICAgICAgICAgICAgX3N0YXRpYyAgICAgID0gdGhpcy5jb25zdHJ1Y3RvcixcbiAgICAgICAgICAgIHNuYXBzaG90ICAgICA9IHRoaXMucmVzdG9yZSh1bmRlZmluZWQsIHRydWUpLFxuICAgICAgICAgICAgaW5pdGlhbFN0YXRlID0gdGhpcy5zdGF0ZSxcbiAgICAgICAgICAgIGluaXRpYWxEYXRhICA9IHRoaXMuZGF0YSxcbiAgICAgICAgICAgIGFwcGxpZWQ7XG4gICAgICAgIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKCBpbml0aWFsRGF0YSApXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhID0gaW5pdGlhbERhdGE7XG4gICAgICAgICAgICBlbHNlIGlmICggX3N0YXRpYy5kYXRhICE9PSB1bmRlZmluZWQgKVxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YSA9IHsgLi4uX3N0YXRpYy5kYXRhIH07XG4gICAgICAgICAgICBlbHNlIGlmICggY2ZnLmhhc093blByb3BlcnR5KFwiZGF0YVwiKSApXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhID0gY2ZnLmRhdGE7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmICggY2ZnLmhhc093blByb3BlcnR5KFwic3RhdGVcIikgJiYgY2ZnLnN0YXRlICE9PSB1bmRlZmluZWQgKVxuICAgICAgICAgICAgICAgIGluaXRpYWxTdGF0ZSA9IHsgLi4uaW5pdGlhbFN0YXRlLCAuLi5jZmcuc3RhdGUgfTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKCB0aGlzLmRhdGEgPT09IHVuZGVmaW5lZCApIHtcbiAgICAgICAgICAgICAgICBpZiAoIGluaXRpYWxTdGF0ZSB8fCB0aGlzLl91c2UubGVuZ3RoICkgey8vIHN5bmMgYXBwbHlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2hhbmdlc1NXID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgLi4udGhpcy5fY2hhbmdlc1NXLFxuICAgICAgICAgICAgICAgICAgICAgICAgLi4uKCBpbml0aWFsU3RhdGUgfHwge30gKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLnRoaXMuJHNjb3BlLm1hcCh0aGlzLCB0aGlzLl91c2UpXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUgICAgICA9IHt9O1xuICAgICAgICAgICAgICAgICAgICBpZiAoIHRoaXMuc2hvdWxkQXBwbHkodGhpcy5fY2hhbmdlc1NXKSAmJiB0aGlzLmRhdGEgPT09IHVuZGVmaW5lZCApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YSAgICAgICA9IHRoaXMuYXBwbHkodGhpcy5kYXRhLCB0aGlzLl9jaGFuZ2VzU1csIHRoaXMuX2NoYW5nZXNTVyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcHBsaWVkICAgICAgICAgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZSAgICAgID0gdGhpcy5fY2hhbmdlc1NXO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2hhbmdlc1NXID0ge307XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBhcHBsaWVkICAgICAgICAgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUgICAgICA9IHsvLyBhc3N1bWUgdGhpcyBzdGF0ZSBpcyBzeW5jIHdpdGggaW5pdGlhbCBkYXRhXG4gICAgICAgICAgICAgICAgICAgIC4uLnRoaXMuX2NoYW5nZXNTVyxcbiAgICAgICAgICAgICAgICAgICAgLi4uKCBpbml0aWFsU3RhdGUgfHwge30gKSxcbiAgICAgICAgICAgICAgICAgICAgLi4udGhpcy4kc2NvcGUubWFwKHRoaXMsIHRoaXMuX3VzZSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5fY2hhbmdlc1NXID0ge307XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCAoIHRoaXMuZGF0YSAhPT0gdW5kZWZpbmVkIHx8IGFwcGxpZWQgKSAmJiAhdGhpcy5fX2xvY2tzLmFsbCApIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YWJsZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLl9yZXYrKztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgaWYgKCAhX3N0YXRpYy5tYW5hZ2VkICYmICF0aGlzLnN0YXRlICYmICggIXRoaXMuX3VzZSB8fCAhdGhpcy5fdXNlLmxlbmd0aCApICkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIlJlU2NvcGUgc3RvcmUgJ1wiLCB0aGlzLm5hbWUsIFwiJyBoYXZlIG5vIGluaXRpYWwgZGF0YSwgc3RhdGUgb3IgdXNlLiBJdCBjYW4ndCBzdGFiaWxpemUuLi5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgIXRoaXMuX3N0YWJsZSAmJiB0aGlzLmVtaXQoJ3Vuc3RhYmxlJywgdGhpcy5zdGF0ZSk7XG4gICAgICAgIFxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBPdmVycmlkYWJsZSBtZXRob2QgdG8ga25vdyBpZiBhIGRhdGEgY2hhbmdlIHNob3VsZCBiZSBwcm9wYWcgdG8gdGhlIGxpc3RlbmluZ1xuICAgICAqIHN0b3JlcyAmIGNvbXBvbmVudHNcbiAgICAgKi9cbiAgICBzaG91bGRQcm9wYWcoIG5EYXRhcyApIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIFxuICAgIGhhc0RhdGFDaGFuZ2UoIG5EYXRhcyApIHtcbiAgICAgICAgdmFyIF9zdGF0aWMgPSB0aGlzLmNvbnN0cnVjdG9yLCByLFxuICAgICAgICAgICAgY0RhdGFzICA9IHRoaXMuZGF0YTtcbiAgICAgICAgciAgICAgICAgICAgPSAhY0RhdGFzICYmIG5EYXRhcyB8fCBjRGF0YXMgIT09IG5EYXRhcztcbiAgICAgICAgIXIgJiYgY0RhdGFzICYmIE9iamVjdC5rZXlzKGNEYXRhcykuZm9yRWFjaChcbiAgICAgICAgICAgICgga2V5ICkgPT4ge1xuICAgICAgICAgICAgICAgIHIgPSByIHx8ICggbkRhdGFzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA/IGNEYXRhc1sga2V5IF0gIT09IG5EYXRhc1sga2V5IF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDogY0RhdGFzICYmIGNEYXRhc1sga2V5IF0gKVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICAhciAmJiBuRGF0YXMgJiYgT2JqZWN0LmtleXMobkRhdGFzKS5mb3JFYWNoKFxuICAgICAgICAgICAgKCBrZXkgKSA9PiB7XG4gICAgICAgICAgICAgICAgciA9IHIgfHwgKCBuRGF0YXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgID8gY0RhdGFzWyBrZXkgXSAhPT0gbkRhdGFzWyBrZXkgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBjRGF0YXMgJiYgY0RhdGFzWyBrZXkgXSApXG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBPdmVycmlkYWJsZSBtZXRob2QgdG8ga25vdyBpZiBhIHN0YXRlIGNoYW5nZSBzaG91bGQgYmUgYXBwbGllZFxuICAgICAqL1xuICAgIHNob3VsZEFwcGx5KCBzdGF0ZSA9IHRoaXMuc3RhdGUgKSB7XG4gICAgICAgIHZhciBfc3RhdGljID0gdGhpcy5jb25zdHJ1Y3RvcjtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgISF0aGlzLmlzQ29tcGxldGUoc3RhdGUpXG4gICAgICAgICAgICAgICApICYmICggaXMuYXJyYXkoX3N0YXRpYy5mb2xsb3cpXG4gICAgICAgICAgICAgICAgICAgICAgPyBfc3RhdGljLmZvbGxvd1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZWR1Y2UoKCByLCBpICkgPT4gKCByIHx8IHN0YXRlICYmIHN0YXRlWyBpIF0gKSwgZmFsc2UpXG4gICAgICAgICAgICAgICAgICAgICAgOiBfc3RhdGljLmZvbGxvd1xuICAgICAgICAgICAgICAgICAgICAgICAgPyBPYmplY3Qua2V5cyhfc3RhdGljLmZvbGxvdylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlZHVjZSgoIHIsIGkgKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8fCBzdGF0ZSAmJiBpcy5mbihfc3RhdGljLmZvbGxvd1sgaSBdKSAmJiBfc3RhdGljLmZvbGxvd1sgaSBdLmNhbGwodGhpcywgc3RhdGVbIGkgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHx8IF9zdGF0aWMuZm9sbG93WyBpIF0gJiYgc3RhdGVbIGkgXSAhPT0gdGhpcy5zdGF0ZVsgaSBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIGZhbHNlKSA6IHRydWVcbiAgICAgICAgICAgICAgICk7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIE92ZXJyaWRhYmxlIGFwcGxpZXIgLyByZW1hcHBlclxuICAgICAqIElmIHN0YXRlIG9yIGxhc3RQdWJsaWNTdGF0ZSBhcmUgc2ltcGxlIGhhc2ggbWFwcyBhcHBseSB3aWxsIHJldHVybiB7Li4uZGF0YSxcbiAgICAgKiAuLi5zdGF0ZX0gaWYgbm90IGl0IHdpbGwgcmV0dXJuIHRoZSBsYXN0IHByaXZhdGUgc3RhdGVcbiAgICAgKiBAcGFyYW0gZGF0YVxuICAgICAqIEBwYXJhbSBzdGF0ZVxuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqL1xuICAgIGFwcGx5KCBkYXRhLCBzdGF0ZSwgY2hhbmdlcyApIHtcbiAgICAgICAgc3RhdGUgPSBzdGF0ZSB8fCB0aGlzLnN0YXRlO1xuICAgICAgICBcbiAgICAgICAgaWYgKCB0aGlzLnJlZmluZSApXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZWZpbmUoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgXG4gICAgICAgIGlmICggIWRhdGEgfHwgZGF0YS5fX3Byb3RvX18gIT09IG9ialByb3RvIHx8IHN0YXRlLl9fcHJvdG9fXyAhPT0gb2JqUHJvdG8gKVxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICByZXR1cm4geyAuLi5kYXRhLCAuLi5zdGF0ZSB9XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIEBkZXByZWNpYXRlZFxuICAgICAqIEBwYXJhbSBkYXRhXG4gICAgICogQHBhcmFtIHN0YXRlXG4gICAgICogQHBhcmFtIGNoYW5nZXNcbiAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgKi9cbiAgICByZWZpbmUoIGRhdGEsIHN0YXRlLCBjaGFuZ2VzICkge1xuICAgICAgICBzdGF0ZSA9IHN0YXRlIHx8IHRoaXMuc3RhdGU7XG4gICAgICAgIFxuICAgICAgICBpZiAoICFkYXRhIHx8IGRhdGEuX19wcm90b19fICE9PSBvYmpQcm90byB8fCBzdGF0ZS5fX3Byb3RvX18gIT09IG9ialByb3RvIClcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgcmV0dXJuIHsgLi4uZGF0YSwgLi4uc3RhdGUgfVxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBEZWJvdW5jZSB0aGlzIHN0b3JlIHByb3BhZ2F0aW9uICggJiByZWR1Y2luZyApXG4gICAgICogQHBhcmFtIGNiXG4gICAgICovXG4gICAgc3RhYmlsaXplKCBjYiApIHtcbiAgICAgICAgY2IgJiYgdGhpcy5vbmNlKCdzdGFibGUnLCBjYik7XG4gICAgICAgIHRoaXMuX3N0YWJsZSAmJiB0aGlzLmVtaXQoJ3Vuc3RhYmxlJywgdGhpcy5zdGF0ZSwgdGhpcy5kYXRhKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX3N0YWJsZSA9IGZhbHNlO1xuICAgICAgICBcbiAgICAgICAgaWYgKCB0aGlzLl9zdGFiaWxpemVyIClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX3N0YWJpbGl6ZXIgPSBUYXNrU2VxdWVuY2VyLnB1c2hUYXNrKHRoaXMsICdwdXNoU3RhdGUnKTtcbiAgICB9XG4gICAgXG4gICAgcmV0cmlldmUoIHBhdGgsIGkgPSAwLCBvYmogPSB0aGlzLmRhdGEgKSB7XG4gICAgICAgIHBhdGggPSBpcy5zdHJpbmcocGF0aCkgPyBwYXRoLnNwbGl0KCcuJykgOiBwYXRoO1xuICAgICAgICByZXR1cm4gIW9iaiB8fCAhcGF0aCB8fCAhcGF0aC5sZW5ndGhcbiAgICAgICAgICAgICAgID8gb2JqXG4gICAgICAgICAgICAgICA6IHBhdGgubGVuZ3RoID09IGkgKyAxXG4gICAgICAgICAgICAgICAgID8gb2JqWyBwYXRoWyBpIF0gXVxuICAgICAgICAgICAgICAgICA6IHRoaXMucmV0cmlldmUocGF0aCwgaSArIDEsIG9ialsgcGF0aFsgaSBdIF0pO1xuICAgIH1cbiAgICBcbiAgICBkaXNwYXRjaCggYWN0aW9uLCAuLi5hcmd6ICkge1xuICAgICAgICB0aGlzLnNjb3BlT2JqLmRpc3BhdGNoKGFjdGlvbiwgLi4uYXJneik7XG4gICAgfVxuICAgIFxuICAgIHRyaWdnZXIoIGFjdGlvbiwgLi4uYXJneiApIHtcbiAgICAgICAgbGV0IHsgYWN0aW9ucyB9ID0gdGhpcy5jb25zdHJ1Y3RvcjtcbiAgICAgICAgaWYgKCBhY3Rpb25zICYmIGFjdGlvbnNbIGFjdGlvbiBdICkge1xuICAgICAgICAgICAgbGV0IG5zID0gYWN0aW9uc1sgYWN0aW9uIF0uY2FsbCh0aGlzLCAuLi5hcmd6KTtcbiAgICAgICAgICAgIG5zICYmIHRoaXMuc2V0U3RhdGUobnMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIFB1bGwgc3RvcmVzIGluIHRoZSBwcml2YXRlIHN0YXRlXG4gICAgICogQHBhcmFtIHN0b3JlcyAge0FycmF5fSAocGFzc2VkIHRvIFN0b3JlOjptYXApIEV4IDogW1wic2Vzc2lvblwiLFxuICAgICAqICAgICBcIm90aGVyTmFtZWRTdG9yZTprZXlcIiwgb3RoZXJTdG9yZS5hcyhcIm90aGVyS2V5XCIpXVxuICAgICAqL1xuICAgIHB1bGwoIHN0b3JlcywgZG9XYWl0LCBvcmlnaW4gKSB7XG4gICAgICAgIGxldCBpbml0aWFsT3V0cHV0cyA9IHRoaXMuc2NvcGVPYmoubWFwKHRoaXMsIHN0b3Jlcyk7XG4gICAgICAgIGlmICggZG9XYWl0ICkge1xuICAgICAgICAgICAgdGhpcy53YWl0KCk7XG4gICAgICAgICAgICBzdG9yZXMuZm9yRWFjaCgoIHMgKSA9PiB0aGlzLnNjb3BlWyBzIF0gJiYgdGhpcy53YWl0KHRoaXMuc2NvcGVbIHMgXSkpO1xuICAgICAgICAgICAgdGhpcy5yZWxlYXNlKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGluaXRpYWxPdXRwdXRzO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBTZXQgJiBQdXNoIHRoZSByZXN1bHQgZGF0YSB0byBmb2xsb3dlcnMgaWYgc3RhYmxlXG4gICAgICogQHBhcmFtIGNiXG4gICAgICovXG4gICAgcHVzaCggZGF0YSwgZm9yY2UsIGNiICkge1xuICAgICAgICBjYiAgICA9IGZvcmNlID09PSB0cnVlID8gY2IgOiBmb3JjZTtcbiAgICAgICAgZm9yY2UgPSBmb3JjZSA9PT0gdHJ1ZTtcbiAgICAgICAgaWYgKCAhZm9yY2UgJiZcbiAgICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgICF0aGlzLmhhc0RhdGFDaGFuZ2UoZGF0YSlcbiAgICAgICAgICAgICApXG4gICAgICAgICkge1xuICAgICAgICAgICAgY2IgJiYgY2IoKTtcbiAgICAgICAgICAgIGlmICggIXRoaXMuX19sb2Nrcy5hbGwgKSB7XG4gICAgICAgICAgICAgICAgbGV0IHN0YWJsZSAgID0gdGhpcy5fc3RhYmxlO1xuICAgICAgICAgICAgICAgIHRoaXMuX3N0YWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgIXN0YWJsZSAmJiB0aGlzLmVtaXQoJ3N0YWJsZScsIHRoaXMuc3RhdGUsIHRoaXMuZGF0YSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fc3RhYmlsaXplciA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgICAgIHRoaXMud2FpdCgpO1xuICAgICAgICB0aGlzLnJlbGVhc2UoY2IpO1xuICAgICAgICBcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogQ2FsbCB0aGUgYXBwbHkgZm4gdXNpbmcgdGhlIGN1cnJlbnQgYWNjdW11bGF0ZWQgc3RhdGUgdXBkYXRlIHRoZW4sIHB1c2ggdGhlXG4gICAgICogcmVzdWx0aW5nIGRhdGEgaWYgc3RhYmxlXG4gICAgICogQHBhcmFtIGZvcmNlXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgcHVzaFN0YXRlKCBmb3JjZSApIHtcbiAgICAgICAgXG4gICAgICAgIGlmICggIWZvcmNlICYmICF0aGlzLl9jaGFuZ2VzU1cgJiYgdGhpcy5kYXRhIClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgXG4gICAgICAgIHZhciBuZXh0U3RhdGUgPSB0aGlzLl9uZXh0U3RhdGUgfHwgeyAuLi50aGlzLnN0YXRlLCAuLi4oIHRoaXMuX2NoYW5nZXNTVyB8fCB7fSApIH0sXG4gICAgICAgICAgICBuZXh0RGF0YSAgPSB0aGlzLmFwcGx5KHRoaXMuZGF0YSwgbmV4dFN0YXRlLCB0aGlzLl9jaGFuZ2VzU1cpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fc3RhYmlsaXplciA9IG51bGw7XG4gICAgICAgIHRoaXMuc3RhdGUgICAgICAgPSBuZXh0U3RhdGU7XG4gICAgICAgIHRoaXMuX2NoYW5nZXNTVyAgPSBudWxsO1xuICAgICAgICBcbiAgICAgICAgaWYgKCAhZm9yY2UgJiZcbiAgICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgICF0aGlzLmhhc0RhdGFDaGFuZ2UobmV4dERhdGEpXG4gICAgICAgICAgICAgKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIGlmICggIXRoaXMuX19sb2Nrcy5hbGwgKSB7XG4gICAgICAgICAgICAgICAgbGV0IHN0YWJsZSAgID0gdGhpcy5fc3RhYmxlO1xuICAgICAgICAgICAgICAgIHRoaXMuX3N0YWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgIXN0YWJsZSAmJiB0aGlzLmVtaXQoJ3N0YWJsZScsIHRoaXMuc3RhdGUsIHRoaXMuZGF0YSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fc3RhYmlsaXplciA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRoaXMuZGF0YSA9IG5leHREYXRhO1xuICAgICAgICB0aGlzLndhaXQoKTtcbiAgICAgICAgdGhpcy5yZWxlYXNlKCk7XG4gICAgICAgIFxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBBZGQgJ3BTdGF0ZScgdG8gdGhlIGN1cnJlbnQgYWNjdW11bGF0ZWQgc3RhdGUgdXBkYXRlc1xuICAgICAqICYgd2FpdCBzb3VyY2Ugc3RvcmVzIHN0YWJpbGl6YXRpb24gYmVmb3JlIHB1c2hpbmcgdGhlc2Ugc3RhdGUgdXBkYXRlc1xuICAgICAqIEBwYXJhbSBwU3RhdGVcbiAgICAgKiBAcGFyYW0gY2JcbiAgICAgKi9cbiAgICBzZXRTdGF0ZSggcFN0YXRlLCBjYiwgc3luYyApIHtcbiAgICAgICAgdmFyIGkgICAgICAgPSAwLCBjaGFuZ2UsXG4gICAgICAgICAgICBjaGFuZ2VzID0gdGhpcy5fY2hhbmdlc1NXID0gdGhpcy5fY2hhbmdlc1NXIHx8IHt9O1xuICAgICAgICBmb3IgKCB2YXIgayBpbiBwU3RhdGUgKVxuICAgICAgICAgICAgaWYgKCAhdGhpcy5zdGF0ZVxuICAgICAgICAgICAgICAgICB8fCBjaGFuZ2VzLmhhc093blByb3BlcnR5KGspLy8gdG9kb1xuICAgICAgICAgICAgICAgICAmJiAoXG4gICAgICAgICAgICAgICAgICAgICBwU3RhdGVbIGsgXSAhPT0gY2hhbmdlc1sgayBdXG4gICAgICAgICAgICAgICAgICkgfHwgcFN0YXRlLmhhc093blByb3BlcnR5KGspXG4gICAgICAgICAgICAgICAgICYmIChcbiAgICAgICAgICAgICAgICAgcFN0YXRlWyBrIF0gIT09IHRoaXMuc3RhdGVbIGsgXVxuICAgICAgICAgICAgICAgICB8fFxuICAgICAgICAgICAgICAgICAoIHRoaXMuc3RhdGVbIGsgXSAmJiBwU3RhdGVbIGsgXSAmJiAoIHBTdGF0ZVsgayBdLl9yZXYgIT0gdGhpcy5fcmV2c1sgayBdICkgKS8vIHJldi9oYXNoIHVwZGF0ZVxuICAgICAgICAgICAgICAgICApICkge1xuICAgICAgICAgICAgICAgIGNoYW5nZSAgICAgICAgICA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5fcmV2c1sgayBdID0gcFN0YXRlWyBrIF0gJiYgcFN0YXRlWyBrIF0uX3JldiB8fCB0cnVlO1xuICAgICAgICAgICAgICAgIGNoYW5nZXNbIGsgXSAgICA9IHBTdGF0ZVsgayBdO1xuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdGhpcy5fbmV4dFN0YXRlID0geyAuLi50aGlzLnN0YXRlLCAuLi5jaGFuZ2VzIH07XG4gICAgICAgIGlmICggIXRoaXMuc2hvdWxkQXBwbHkodGhpcy5fbmV4dFN0YXRlKSApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKCBzeW5jICkge1xuICAgICAgICAgICAgdGhpcy5wdXNoU3RhdGUoKTtcbiAgICAgICAgICAgIGNiICYmIGNiKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoIGNoYW5nZSApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YWJpbGl6ZShjYik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGNiICYmIGNiKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSB0aGUgY3VycmVudCBzdGF0ZSAmIHB1c2ggaXRcbiAgICAgKiBAcGFyYW0gcFN0YXRlXG4gICAgICogQHBhcmFtIGNiXG4gICAgICovXG4gICAgc2V0U3RhdGVTeW5jKCBwU3RhdGUgKSB7XG4gICAgICAgIHZhciBpICAgICAgID0gMCwgY2hhbmdlLFxuICAgICAgICAgICAgY2hhbmdlcyA9IHRoaXMuX2NoYW5nZXNTVyA9IHRoaXMuX2NoYW5nZXNTVyB8fCB7fTtcbiAgICAgICAgZm9yICggdmFyIGsgaW4gcFN0YXRlIClcbiAgICAgICAgICAgIGlmICggIXRoaXMuc3RhdGUgfHwgcFN0YXRlLmhhc093blByb3BlcnR5KGspXG4gICAgICAgICAgICAgICAgICYmIChcbiAgICAgICAgICAgICAgICAgcFN0YXRlWyBrIF0gIT0gdGhpcy5zdGF0ZVsgayBdXG4gICAgICAgICAgICAgICAgIHx8XG4gICAgICAgICAgICAgICAgICggdGhpcy5zdGF0ZVsgayBdICYmIHBTdGF0ZVsgayBdICYmICggcFN0YXRlWyBrIF0uX3JldiAhPSB0aGlzLl9yZXZzWyBrIF0gKSApLy8gcmV2L2hhc2ggdXBkYXRlXG4gICAgICAgICAgICAgICAgICkgKSB7XG4gICAgICAgICAgICAgICAgY2hhbmdlICAgICAgICAgID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLl9yZXZzWyBrIF0gPSBwU3RhdGVbIGsgXSAmJiBwU3RhdGVbIGsgXS5fcmV2IHx8IHRydWU7XG4gICAgICAgICAgICAgICAgY2hhbmdlc1sgayBdICAgID0gcFN0YXRlWyBrIF07XG4gICAgICAgICAgICB9XG4gICAgICAgIHRoaXMuc2hvdWxkQXBwbHkoeyAuLi4oIHRoaXMuc3RhdGUgfHwge30gKSwgLi4uY2hhbmdlcyB9KSAmJiB0aGlzLnB1c2hTdGF0ZSgpO1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBnZXQgYSBzdG9yZS1rZXkgcGFpciBmb3IgU3RvcmU6Om1hcFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gICAgICogQHJldHVybnMge3tzdG9yZTogU3RvcmUsIG5hbWU6ICp9fVxuICAgICAqL1xuICAgIGFzKCBuYW1lICkge1xuICAgICAgICByZXR1cm4geyBzdG9yZTogdGhpcywgbmFtZSB9O1xuICAgIH1cbiAgICBcbiAgICBvbiggbGlzdHMgKSB7XG4gICAgICAgIGlmICggIWlzLnN0cmluZyhsaXN0cykgJiYgbGlzdHMgKVxuICAgICAgICAgICAgT2JqZWN0LmtleXMobGlzdHMpLmZvckVhY2goayA9PiBzdXBlci5vbihrLCBsaXN0c1sgayBdKSk7XG4gICAgICAgIGVsc2Ugc3VwZXIub24oLi4uYXJndW1lbnRzKTtcbiAgICB9XG4gICAgXG4gICAgcmVtb3ZlTGlzdGVuZXIoIGxpc3RzICkge1xuICAgICAgICBpZiAoICFpcy5zdHJpbmcobGlzdHMpICYmIGxpc3RzIClcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGxpc3RzKS5mb3JFYWNoKGsgPT4gc3VwZXIucmVtb3ZlTGlzdGVuZXIoaywgbGlzdHNbIGsgXSkpO1xuICAgICAgICBlbHNlIHN1cGVyLnJlbW92ZUxpc3RlbmVyKC4uLmFyZ3VtZW50cyk7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIGlzIGNvbXBsZXRlIChhbGwgcmVxdWllcmVkIGtleXMgYXJlIGhlcmUpXG4gICAgICogQHJldHVybnMgYm9vbFxuICAgICAqL1xuICAgIGlzQ29tcGxldGUoIHN0YXRlID0gdGhpcy5zdGF0ZSApIHtcbiAgICAgICAgdmFyIF9zdGF0aWMgPSB0aGlzLmNvbnN0cnVjdG9yO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgIXRoaXMuX3JlcXVpcmVcbiAgICAgICAgICAgIHx8ICF0aGlzLl9yZXF1aXJlLmxlbmd0aFxuICAgICAgICAgICAgfHwgc3RhdGUgJiYgdGhpcy5fcmVxdWlyZS5yZWR1Y2UoXG4gICAgICAgICAgICAgICAgKCByLCBrZXkgKSA9PiAoIHIgJiYgc3RhdGVbIGtleSBdICksXG4gICAgICAgICAgICAgICAgdHJ1ZVxuICAgICAgICAgICAgKVxuICAgICAgICApO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBpcyBzdGFibGVcbiAgICAgKiBAcmV0dXJucyBib29sXG4gICAgICovXG4gICAgaXNTdGFibGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zdGFibGU7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIFNlcmlhbGl6ZSBzdGF0ZSAmIGRhdGEgd2l0aCBzb3VyY2VzIHJlZnNcbiAgICAgKiBAcmV0dXJucyBib29sXG4gICAgICovXG4gICAgc2VyaWFsaXplKCBjZmcgPSB7fSwgb3V0cHV0ID0ge30gKSB7XG4gICAgICAgIGxldCByZWZzID1cbiAgICAgICAgICAgICAgICAhY2ZnLm5vcmVmcyAmJiBpcy5hcnJheSh0aGlzLl91c2UpICYmIHRoaXMuX3VzZS5yZWR1Y2UoXG4gICAgICAgICAgICAgICAgKCBtYXAsIGtleSApID0+IHsvL3RvZG9cbiAgICAgICAgICAgICAgICAgICAgbGV0IG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlhcywgcGF0aCxfa2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmU7XG4gICAgICAgICAgICAgICAgICAgIGlmICgga2V5LnN0b3JlICYmIGtleS5uYW1lICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpYXMgPSBuYW1lID0ga2V5Lm5hbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9yZSA9IGtleS5zdG9yZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICggaXMuZm4oa2V5KSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUgPSBhbGlhcyA9IGtleS5uYW1lIHx8IGtleS5kZWZhdWx0TmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlID0ga2V5O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgX2tleSAgPSBrZXkubWF0Y2goLyhbXFx3X10rKSgoPzpcXC5bXFx3X10rKSopKD86XFw6KFtcXHdfXSspKT8vKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUgID0gX2tleVsgMSBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aCAgPSBfa2V5WyAyIF0gJiYgX2tleVsgMiBdLnN1YnN0cigxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlID0gdGhpcy5zY29wZU9iai5zdG9yZXNbIF9rZXlbIDEgXSBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpYXMgPSBfa2V5WyAzIF0gfHwgcGF0aCAmJiBwYXRoLm1hdGNoKC8oW15cXC5dKikkLylbIDAgXSB8fCBfa2V5WyAxIF07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKCBzdG9yZSAmJiAhc3RvcmUuc2NvcGVPYmouXy5pc0xvY2FsSWQgKVxuICAgICAgICAgICAgICAgICAgICAgICAgbWFwWyBhbGlhcyBdID0gc3RvcmUuc2NvcGVPYmouX2lkICsgJy8nICsgbmFtZTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1hcDtcbiAgICAgICAgICAgICAgICB9LCB7fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgfHwge307XG4gICAgICAgIFxuICAgICAgICBrZXlXYWxrblNldChcbiAgICAgICAgICAgIG91dHB1dCxcbiAgICAgICAgICAgICggdGhpcy5zY29wZU9iai5faWQgKyAnLycgKyB0aGlzLm5hbWUgKSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0ZTogdGhpcy5zdGF0ZSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjZmcubm9yZWZzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA/IHsgLi4udGhpcy5zdGF0ZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICA6IE9iamVjdC5rZXlzKHRoaXMuc3RhdGUpLnJlZHVjZSgoIGgsIGsgKSA9PiAoICFyZWZzWyBrIF0gJiYgKCBoWyBrIF0gPSB0aGlzLnN0YXRlWyBrIF0gKSwgaCApLCB7fSlcbiAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBkYXRhIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGEuX19wcm90b19fID09PSBvYmpQcm90byA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGEgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgKCBpcy5ib29sKHRoaXMuZGF0YSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfHwgaXMubnVtYmVyKHRoaXMuZGF0YSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfHwgaXMuc3RyaW5nKHRoaXMuZGF0YSkgKSAmJiB0aGlzLmRhdGFcbiAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICB8fCB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAsXG4gICAgICAgICAgICAgICAgcmVmc1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gb3V0cHV0O1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiByZXN0b3JlIHN0YXRlICYgZGF0YVxuICAgICAqIEByZXR1cm5zIGJvb2xcbiAgICAgKi9cbiAgICByZXN0b3JlKCBzbmFwc2hvdCwgaW1tZWRpYXRlICkge1xuICAgICAgICBzbmFwc2hvdCA9IHNuYXBzaG90XG4gICAgICAgICAgICAgICAgICAgJiYga2V5V2Fsa25HZXQoc25hcHNob3QsIHRoaXMuc2NvcGVPYmouX2lkICsgJy8nICsgdGhpcy5uYW1lKVxuICAgICAgICAgICAgICAgICAgIHx8IHRoaXMuJHNjb3BlLnRha2VTbmFwc2hvdEJ5S2V5KHRoaXMuc2NvcGVPYmouX2lkICsgJy8nICsgdGhpcy5uYW1lKTtcbiAgICAgICAgXG4gICAgICAgIGlmICggIXNuYXBzaG90IClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgXG4gICAgICAgIGlmICggc25hcHNob3QgKSB7XG4gICAgICAgICAgICBpZiAoICF0aGlzLmlzU3RhYmxlKCkgJiYgIWltbWVkaWF0ZSApXG4gICAgICAgICAgICAgICAgdGhpcy50aGVuKCgpID0+IHJlc3RvcmUoc25hcHNob3QpKVxuICAgICAgICAgICAgbGV0IHNuYXA7XG4gICAgICAgICAgICB0aGlzLnN0YXRlID0geyAuLi5zbmFwc2hvdC5zdGF0ZSB9O1xuICAgICAgICAgICAgT2JqZWN0LmtleXMoc25hcHNob3QucmVmcykuZm9yRWFjaChcbiAgICAgICAgICAgICAgICAoIGtleSApID0+IHsvL3RvZG9cbiAgICAgICAgICAgICAgICAgICAgaWYgKCBzbmFwID0gdGhpcy4kc2NvcGUuZ2V0U25hcHNob3RCeUtleShzbmFwc2hvdC5yZWZzWyBrZXkgXSkgKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZVsga2V5IF0gPSBzbmFwLmRhdGE7XG4gICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2Fybignbm90IGZvdW5kIDogJywga2V5LCBzbmFwJiZzbmFwLnJlZnNbIGtleSBdKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5kYXRhID0gc25hcHNob3QuZGF0YTtcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIFVuIGJpbmQgdGhpcyBzdG9yZSBvZmYgdGhlIGdpdmVuIGNvbXBvbmVudC1rZXlcbiAgICAgKiBAcGFyYW0gb2JqXG4gICAgICogQHBhcmFtIGtleVxuICAgICAqIEByZXR1cm5zIHtBcnJheS48Kj59XG4gICAgICovXG4gICAgdW5CaW5kKCBvYmosIGtleSwgcGF0aCApIHtcbiAgICAgICAgdmFyIGZvbGxvd2VycyA9IHRoaXMuX2ZvbGxvd2VycyxcbiAgICAgICAgICAgIGkgICAgICAgICA9IGZvbGxvd2VycyAmJiBmb2xsb3dlcnMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGZvbGxvd2VycyAmJiBpLS0gKVxuICAgICAgICAgICAgaWYgKCBmb2xsb3dlcnNbIGkgXVsgMCBdID09PSBvYmogJiYgZm9sbG93ZXJzWyBpIF1bIDEgXSA9PT0ga2V5ICYmIGZvbGxvd2Vyc1sgaSBdWyAyIF0gPT09IHBhdGggKVxuICAgICAgICAgICAgICAgIHJldHVybiBmb2xsb3dlcnMuc3BsaWNlKGksIDEpO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBCaW5kIHRoaXMgc3RvcmUgY2hhbmdlcyB0byB0aGUgZ2l2ZW4gY29tcG9uZW50LWtleVxuICAgICAqIEBwYXJhbSBvYmoge1JlYWN0LkNvbXBvbmVudHxTdG9yZXxmdW5jdGlvbilcbiAgICAgKiBAcGFyYW0ga2V5IHtzdHJpbmd9IG9wdGlvbmFsIGtleSB3aGVyZSB0byBtYXAgdGhlIHB1YmxpYyBzdGF0ZVxuICAgICAqL1xuICAgIGJpbmQoIG9iaiwga2V5LCBzZXRJbml0aWFsID0gdHJ1ZSwgcGF0aCApIHtcbiAgICAgICAgdGhpcy5fZm9sbG93ZXJzLnB1c2goWyBvYmosIGtleSwgcGF0aCBdKTtcbiAgICAgICAgaWYgKCBzZXRJbml0aWFsICYmIHRoaXMuZGF0YSAmJiB0aGlzLl9zdGFibGUgKSB7XG4gICAgICAgICAgICBsZXQgZGF0YSA9IHBhdGggPyB0aGlzLnJldHJpZXZlKHBhdGgpIDogdGhpcy5kYXRhO1xuICAgICAgICAgICAgaWYgKCB0eXBlb2Ygb2JqICE9IFwiZnVuY3Rpb25cIiApIHtcbiAgICAgICAgICAgICAgICBpZiAoIGtleSApIG9iai5zZXRTdGF0ZSh7IFsga2V5IF06IGRhdGEgfSk7XG4gICAgICAgICAgICAgICAgZWxzZSBvYmouc2V0U3RhdGUoZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBvYmooZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogb25jZSgnc3RhYmxlJywgY2IpXG4gICAgICogQHBhcmFtIG9iaiB7UmVhY3QuQ29tcG9uZW50fFN0b3JlfGZ1bmN0aW9uKVxuICAgICAqIEBwYXJhbSBrZXkge3N0cmluZ30gb3B0aW9uYWwga2V5IHdoZXJlIHRvIG1hcCB0aGUgcHVibGljIHN0YXRlXG4gICAgICovXG4gICAgdGhlbiggY2IgKSB7XG4gICAgICAgIGlmICggdGhpcy5fc3RhYmxlIClcbiAgICAgICAgICAgIHJldHVybiBjYih0aGlzLmRhdGEpO1xuICAgICAgICB0aGlzLm9uY2UoJ3N0YWJsZScsIGUgPT4gY2IodGhpcy5kYXRhKSk7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIEFkZCBhIGxvY2sgc28gdGhlIHN0b3JlIHdpbGwgbm90IHByb3BhZyBpdCBkYXRhIHVudGlsbCByZWxlYXNlKCkgaXMgY2FsbFxuICAgICAqIEBwYXJhbSBwcmV2aW91cyB7U3RvcmV8bnVtYmVyfEFycmF5fSBAb3B0aW9uYWwgd2YgdG8gd2FpdCwgcmVsZWFzZXMgdG8gd2FpdCBvclxuICAgICAqICAgICBhcnJheSBvZiBzdHVmZiB0byB3YWl0XG4gICAgICogQHJldHVybnMge3RoaXN9XG4gICAgICovXG4gICAgd2FpdCggcHJldmlvdXMgKSB7XG4gICAgICAgIGlmICggdHlwZW9mIHByZXZpb3VzID09IFwibnVtYmVyXCIgKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX19sb2Nrcy5hbGwgKz0gcHJldmlvdXM7XG4gICAgICAgIGlmICggaXMuYXJyYXkocHJldmlvdXMpIClcbiAgICAgICAgICAgIHJldHVybiBwcmV2aW91cy5tYXAodGhpcy53YWl0LmJpbmQodGhpcykpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fc3RhYmxlICYmIHRoaXMuZW1pdCgndW5zdGFibGUnLCB0aGlzLnN0YXRlLCB0aGlzLmRhdGEpO1xuICAgICAgICB0aGlzLl9zdGFibGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fX2xvY2tzLmFsbCsrO1xuICAgICAgICBcbiAgICAgICAgbGV0IHJlYXNvbiA9IGlzLnN0cmluZyhwcmV2aW91cykgPyBwcmV2aW91cyA6IG51bGw7XG4gICAgICAgIGlmICggcmVhc29uICkge1xuICAgICAgICAgICAgdGhpcy5fX2xvY2tzWyByZWFzb24gXSA9IHRoaXMuX19sb2Nrc1sgcmVhc29uIF0gfHwgMDtcbiAgICAgICAgICAgIHRoaXMuX19sb2Nrc1sgcmVhc29uIF0rKztcbiAgICAgICAgfVxuICAgICAgICBpZiAoIHByZXZpb3VzICYmIGlzLmZuKHByZXZpb3VzLnRoZW4pICkge1xuICAgICAgICAgICAgcHJldmlvdXMudGhlbih0aGlzLnJlbGVhc2UuYmluZCh0aGlzLCBudWxsKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIERlY3JlYXNlIGxvY2tzIGZvciB0aGlzIHN0b3JlLCBpZiBpdCByZWFjaCAwICxcbiAgICAgKiBpdCB3aWxsIGJlIHByb3BhZ2F0ZWQgdG8gdGhlIGZvbGxvd2VycyxcbiAgICAgKiB0aGVuLCBhbGwgc3R1ZmYgcGFzc2VkIHRvIFwidGhlblwiIGNhbGwgYmFjayB3aWxsIGJlIGV4ZWMgLyByZWxlYXNlZFxuICAgICAqIEBwYXJhbSBkZXN5bmNcbiAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgKi9cbiAgICByZWxlYXNlKCByZWFzb24sIGNiICkge1xuICAgICAgICB2YXIgX3N0YXRpYyA9IHRoaXMuY29uc3RydWN0b3IsIG1lID0gdGhpcztcbiAgICAgICAgbGV0IGkgICAgICAgPSAwLCB3YXNTdGFibGUgPSB0aGlzLl9zdGFibGU7XG4gICAgICAgIFxuICAgICAgICBpZiAoIGlzLmZuKHJlYXNvbikgKSB7XG4gICAgICAgICAgICBjYiAgICAgPSByZWFzb247XG4gICAgICAgICAgICByZWFzb24gPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAoIHJlYXNvbiApIHtcbiAgICAgICAgICAgIGlmICggdGhpcy5fX2xvY2tzWyByZWFzb24gXSA9PSAwIClcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiUmVsZWFzZSBtb3JlIHRoYW4gbG9ja2luZyAhXCIsIHJlYXNvbik7XG4gICAgICAgICAgICB0aGlzLl9fbG9ja3NbIHJlYXNvbiBdID0gdGhpcy5fX2xvY2tzWyByZWFzb24gXSB8fCAwO1xuICAgICAgICAgICAgdGhpcy5fX2xvY2tzWyByZWFzb24gXS0tO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAoICFyZWFzb24gJiYgdGhpcy5fX2xvY2tzLmFsbCA9PSAwIClcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJSZWxlYXNlIG1vcmUgdGhhbiBsb2NraW5nICFcIik7XG4gICAgICAgIFxuICAgICAgICBpZiAoICEtLXRoaXMuX19sb2Nrcy5hbGwgJiYgdGhpcy5pc0NvbXBsZXRlKCkgKSB7XG4gICAgICAgICAgICBsZXQgcHJvcGFnICAgPSB0aGlzLnNob3VsZFByb3BhZyh0aGlzLmRhdGEpO1xuICAgICAgICAgICAgdGhpcy5fc3RhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIHByb3BhZyAmJiB0aGlzLl9yZXYrKzsvL1xuICAgICAgICAgICAgaWYgKCBwcm9wYWcgJiYgdGhpcy5fZm9sbG93ZXJzLmxlbmd0aCApXG4gICAgICAgICAgICAgICAgdGhpcy5fZm9sbG93ZXJzLmZvckVhY2goZnVuY3Rpb24gcHJvcGFnKCBmb2xsb3dlciApIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSBmb2xsb3dlclsgMiBdID8gbWUucmV0cmlldmUoZm9sbG93ZXJbIDIgXSkgOiBtZS5kYXRhO1xuICAgICAgICAgICAgICAgICAgICAvL2lmICggIWRhdGEgKSByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpZiAoIHR5cGVvZiBmb2xsb3dlclsgMCBdID09IFwiZnVuY3Rpb25cIiApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbGxvd2VyWyAwIF0oZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NiICYmIGkrKztcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbGxvd2VyWyAwIF0uc2V0U3RhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKCBmb2xsb3dlclsgMSBdICkgPyB7IFsgZm9sbG93ZXJbIDEgXSBdOiBkYXRhIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGRhdGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2NiICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAoKSA9PiAoISgtLWkpICYmIGNiKCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8pXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvL2Vsc2VcbiAgICAgICAgICAgICF3YXNTdGFibGUgJiYgdGhpcy5lbWl0KCdzdGFibGUnLCB0aGlzLmRhdGEpO1xuICAgICAgICAgICAgcHJvcGFnICYmIHRoaXMuZW1pdCgndXBkYXRlJywgdGhpcy5kYXRhKTtcbiAgICAgICAgICAgIGNiICYmIGNiKClcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGNiICYmIHRoaXMudGhlbihjYik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBcbiAgICBwcm9wYWcoIGRhdGEgKSB7XG4gICAgICAgIHRoaXMuZW1pdCgndXBkYXRlJywgZGF0YSk7XG4gICAgfVxuICAgIFxuICAgIHJldGFpbiggcmVhc29uICkge1xuICAgICAgICB0aGlzLl9fcmV0YWlucy5hbGwrKztcbiAgICAgICAgaWYgKCByZWFzb24gKSB7XG4gICAgICAgICAgICB0aGlzLl9fcmV0YWluc1sgcmVhc29uIF0gPSB0aGlzLl9fcmV0YWluc1sgcmVhc29uIF0gfHwgMDtcbiAgICAgICAgICAgIHRoaXMuX19yZXRhaW5zWyByZWFzb24gXSsrO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGRpc3Bvc2UoIHJlYXNvbiApIHtcbiAgICAgICAgLy9jb25zb2xlLndhcm4oXCJkaXNwb3NlXCIsIHJlYXNvbiwgdGhpcy5fX3JldGFpbnMpO1xuICAgICAgICBpZiAoIHJlYXNvbiApIHtcbiAgICAgICAgICAgIGlmICggIXRoaXMuX19yZXRhaW5zWyByZWFzb24gXSApXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRGlzcG9zZSBtb3JlIHRoYW4gcmV0YWluaW5nIDogXCIgKyByZWFzb24pO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLl9fcmV0YWluc1sgcmVhc29uIF0tLTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIHRoaXMuX19yZXRhaW5zLmFsbCA9PSAwIClcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkRpc3Bvc2UgbW9yZSB0aGFuIHJldGFpbmluZyAhXCIpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fX3JldGFpbnMuYWxsLS07XG4gICAgICAgIFxuICAgICAgICBpZiAoICF0aGlzLl9fcmV0YWlucy5hbGwgKSB7XG4gICAgICAgICAgICBpZiAoIHRoaXMuX3BlcnNpc3RlbmNlVG0gKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZGVzdHJveVRNICYmIGNsZWFyVGltZW91dCh0aGlzLl9kZXN0cm95VE0pO1xuICAgICAgICAgICAgICAgIHRoaXMuX2Rlc3Ryb3lUTSA9IHNldFRpbWVvdXQoXG4gICAgICAgICAgICAgICAgICAgIGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fZGVzdHJveVRNID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vdGhpcy50aGVuKHMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgIXRoaXMuX19yZXRhaW5zLmFsbCAmJiAhdGhpcy5kZWFkICYmIHRoaXMuZGVzdHJveSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAvL30pO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wZXJzaXN0ZW5jZVRtXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vdGhpcy50aGVuKHMgPT5cbiAgICAgICAgICAgICAgICAoICF0aGlzLl9fcmV0YWlucy5hbGwgJiYgIXRoaXMuZGVhZCAmJiB0aGlzLmRlc3Ryb3koKSApXG4gICAgICAgICAgICAgICAgLy8pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIC8vICBjb25zb2xlLmxvZyhcImRlc3Ryb3lcIiwgdGhpcy5fdWlkKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuZW1pdCgnZGVzdHJveScsIHRoaXMpO1xuICAgICAgICBpZiAoIHRoaXMuX3N0YWJpbGl6ZXIgKVxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX3N0YWJpbGl6ZXIpO1xuICAgICAgICBcbiAgICAgICAgaWYgKCB0aGlzLl9mb2xsb3dlcnMubGVuZ3RoIClcbiAgICAgICAgICAgIHRoaXMuX2ZvbGxvd2Vycy5mb3JFYWNoKFxuICAgICAgICAgICAgICAgICggZm9sbG93ZXIgKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICggdHlwZW9mIGZvbGxvd2VyWyAwIF0gIT09IFwiZnVuY3Rpb25cIiApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICggZm9sbG93ZXJbIDAgXS5zdG9yZXMgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBmb2xsb3dlclsgMCBdLnN0b3Jlc1sgZm9sbG93ZXJbIDEgXSBdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgdGhpcy5fZm9sbG93ZXJzLmxlbmd0aCA9IDA7XG4gICAgICAgIHRoaXMuY29uc3RydWN0b3IuX3JldiAgPSB0aGlzLnJldjtcbiAgICAgICAgdGhpcy5kZWFkICAgICAgICAgICAgICA9IHRydWU7XG4gICAgICAgIHRoaXMuX3JldnMgICAgICAgICAgICAgPSB0aGlzLmRhdGEgPSB0aGlzLnN0YXRlID0gdGhpcy5zY29wZSA9IG51bGw7XG4gICAgICAgIHRoaXMucmVtb3ZlQWxsTGlzdGVuZXJzKCk7XG4gICAgfVxufVxuXG4vKipcbiAqIGdldCBhIHN0YXRpYyBhbGlhc2VkIHJlZmVyZW5jZSBvZiBhIHN0b3JlXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICogQHJldHVybnMge3tzdG9yZTogU3RvcmUsIG5hbWU6ICp9fVxuICovXG5TdG9yZS5hcyA9IGZ1bmN0aW9uICggbmFtZSApIHtcbiAgICByZXR1cm4geyBzdG9yZTogdGhpcywgbmFtZSB9O1xufVxuXG4vKipcbiAqIE1hcCBhbGwgbmFtZWQgc3RvcmVzIGluIHtrZXlzfSB0byB0aGUge29iamVjdH0ncyBzdGF0ZVxuICogSG9vayBjb21wb25lbnRXaWxsVW5tb3VudCAoZm9yIHJlYWN0IGNvbXApIG9yIGRlc3Ryb3kgdG8gdW5CaW5kIHRoZW0gYXV0b21hdGljYWxseVxuICogQHN0YXRpY1xuICogQHBhcmFtIG9iamVjdCB7T2JqZWN0fSB0YXJnZXQgc3RhdGUgYXdhcmUgb2JqZWN0IChSZWFjdC5Db21wb25lbnR8U3RvcmV8Li4uKVxuICogQHBhcmFtIGtleXMge0FycmF5fSBFeCA6IFtcInNlc3Npb25cIiwgXCJvdGhlclN0YXRpY05hbWVkU3RvcmU6a2V5XCIsXG4gKiAgICAgc3RvcmUuYXMoJ2Fub3RoZXJLZXknKV1cbiAqL1xuU3RvcmUubWFwID0gZnVuY3Rpb24gKCBjU3RvcmUsIGtleXMsIHNjb3BlLCBvcmlnaW4sIHNldEluaXRpYWwgPSBmYWxzZSApIHtcbiAgICB2YXIgdGFyZ2V0UmV2cyAgICAgPSBjU3RvcmUuX3JldnMgfHwge307XG4gICAgdmFyIHRhcmdldFNjb3BlICAgID0gY1N0b3JlLnN0b3JlcyB8fCAoIGNTdG9yZS5zdG9yZXMgPSB7fSApO1xuICAgIHZhciBpbml0aWFsT3V0cHV0cyA9IHt9O1xuICAgIGtleXMgICAgICAgICAgICAgICA9IGlzLmFycmF5KGtleXMpID8gWyAuLi5rZXlzIF0gOiBbIGtleXMgXTtcbiAgICBcbiAgICBcbiAgICBzY29wZSA9IHNjb3BlIHx8IFN0b3JlLnN0YXRpY1Njb3BlO1xuICAgIFxuICAgIGtleXMgPSBrZXlzLmZpbHRlcihcbiAgICAgICAgLy8gQHRvZG8gOiB1c2UgcXVlcnkgcmVmc1xuICAgICAgICAvLyAoc3RvcmUpKFxcLnN0b3JlKSooXFxbKFxcKnwocHJvcHMpXFx3KykrKVxcXSk/KFxcOmFsaWFzKVxuICAgICAgICAoIGtleSApID0+IHtcbiAgICAgICAgICAgIGlmICggIWtleSApIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiTm90IGEgbWFwcGFibGUgc3RvcmUgaXRlbSAnXCIgKyBrZXkgKyBcIicgaW4gXCIgKyBvcmlnaW4gKyAnICEhJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IG5hbWUsXG4gICAgICAgICAgICAgICAgYWxpYXMsXG4gICAgICAgICAgICAgICAgcGF0aCxcbiAgICAgICAgICAgICAgICBzdG9yZSwgX2tleTtcbiAgICAgICAgICAgIGlmICgga2V5LnN0b3JlICYmIGtleS5uYW1lICkge1xuICAgICAgICAgICAgICAgIGFsaWFzID0gbmFtZSA9IGtleS5uYW1lO1xuICAgICAgICAgICAgICAgIHN0b3JlID0ga2V5LnN0b3JlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoIGlzLmZuKGtleSkgKSB7XG4gICAgICAgICAgICAgICAgbmFtZSA9IGFsaWFzID0ga2V5Lm5hbWUgfHwga2V5LmRlZmF1bHROYW1lO1xuICAgICAgICAgICAgICAgIHN0b3JlID0ga2V5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgX2tleSAgPSBrZXkubWF0Y2goLyhbXFx3X10rKSgoPzpcXC5bXFx3X10rKSopKD86XFw6KFtcXHdfXSspKT8vKTtcbiAgICAgICAgICAgICAgICBuYW1lICA9IF9rZXlbIDEgXTtcbiAgICAgICAgICAgICAgICBwYXRoICA9IF9rZXlbIDIgXSAmJiBfa2V5WyAyIF0uc3Vic3RyKDEpO1xuICAgICAgICAgICAgICAgIHN0b3JlID0gc2NvcGUuc3RvcmVzWyBfa2V5WyAxIF0gXTtcbiAgICAgICAgICAgICAgICBhbGlhcyA9IF9rZXlbIDMgXSB8fCBwYXRoICYmIHBhdGgubWF0Y2goLyhbXlxcLl0qKSQvKVsgMCBdIHx8IF9rZXlbIDEgXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICggIXN0b3JlICkge1xuICAgICAgICAgICAgICAgIGxldCBpPVtdO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIG8gaW4gc2NvcGUuc3RvcmVzKVxuICAgICAgICAgICAgICAgICAgICBpLnB1c2gobylcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiTm90IGEgbWFwcGFibGUgc3RvcmUgaXRlbSAnXCIgKyBuYW1lICsgXCIvXCIgKyBhbGlhcyArIFwiJyBpbiBcIiArICggY1N0b3JlLm5hbWUgfHwgY1N0b3JlICkgKyAnICEhJywgc3RvcmUsIF9rZXksIHNjb3BlLnN0b3JlcywgaSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCBpcy5yc1Njb3BlKHN0b3JlLnByb3RvdHlwZSkgKSBzY29wZS5fbW91bnQobmFtZSk7XG4gICAgICAgICAgICBpZiAoIGlzLnJzU2NvcGUoc3RvcmUpICkge1xuICAgICAgICAgICAgICAgIHN0b3JlID0gc2NvcGUuX21vdW50KGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICggdGFyZ2V0UmV2c1sgbmFtZSBdICkgcmV0dXJuIGZhbHNlOy8vIGlnbm9yZSBkYmwgdXNlcyBmb3Igbm93XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKCBpcy5mbihzdG9yZSkgKSB7XG4gICAgICAgICAgICAgICAgc2NvcGUuX21vdW50KG5hbWUpXG4gICAgICAgICAgICAgICAgc2NvcGUuc3RvcmVzWyBuYW1lIF0uYmluZChjU3RvcmUsIGFsaWFzLCBzZXRJbml0aWFsLCBwYXRoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHN0b3JlLmJpbmQoY1N0b3JlLCBhbGlhcywgc2V0SW5pdGlhbCwgcGF0aCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIGdpdmUgaW5pdGlhbCBzdG9yZSB3ZWlnaHQgYmFzaW5nIHNvdXJjZXNcbiAgICAgICAgICAgIHNjb3BlLnN0b3Jlc1sgbmFtZSBdLl9zb3VyY2VzICYmIGNTdG9yZS5fc291cmNlcy5wdXNoKC4uLnNjb3BlLnN0b3Jlc1sgbmFtZSBdLl9zb3VyY2VzKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGFyZ2V0UmV2c1sgYWxpYXMgXSA9IHRhcmdldFJldnNbIGFsaWFzIF0gfHwgdHJ1ZTtcbiAgICAgICAgICAgICF0YXJnZXRTY29wZVsgbmFtZSBdICYmICggdGFyZ2V0U2NvcGVbIG5hbWUgXSA9IHNjb3BlLnN0b3Jlc1sgbmFtZSBdICk7XG4gICAgICAgICAgICBpZiAoIHNjb3BlLnN0b3Jlc1sgbmFtZSBdLmhhc093blByb3BlcnR5KCdkYXRhJykgKVxuICAgICAgICAgICAgICAgIGluaXRpYWxPdXRwdXRzWyBuYW1lIF0gPSBzY29wZS5kYXRhWyBuYW1lIF07XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICk7XG4gICAgXG4gICAgLy8gLi4uIEB0b2RvXG4gICAgY1N0b3JlLm9uY2UoJ2Rlc3Ryb3knLCAoIC4uLmFyZ3ogKSA9PiB7XG4gICAgICAgIGtleXMubWFwKFxuICAgICAgICAgICAgKCBrZXkgKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IG5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGFsaWFzLCBwYXRoLFxuICAgICAgICAgICAgICAgICAgICBzdG9yZTtcbiAgICAgICAgICAgICAgICBpZiAoIGtleS5zdG9yZSAmJiBrZXkubmFtZSApIHtcbiAgICAgICAgICAgICAgICAgICAgYWxpYXMgPSBuYW1lID0ga2V5Lm5hbWU7XG4gICAgICAgICAgICAgICAgICAgIHN0b3JlID0ga2V5LnN0b3JlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICggaXMuZm4oa2V5KSApIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZSA9IGFsaWFzID0ga2V5Lm5hbWUgfHwga2V5LmRlZmF1bHROYW1lO1xuICAgICAgICAgICAgICAgICAgICBzdG9yZSA9IHNjb3BlLnN0b3Jlc1sgbmFtZSBdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAga2V5ICAgPSBrZXkubWF0Y2goLyhbXFx3X10rKSgoPzpcXC5bXFx3X10rKSopKD86XFw6KFtcXHdfXSspKT8vKTtcbiAgICAgICAgICAgICAgICAgICAgbmFtZSAgPSBrZXlbIDEgXTtcbiAgICAgICAgICAgICAgICAgICAgcGF0aCAgPSBrZXlbIDIgXSAmJiBrZXlbIDIgXS5zdWJzdHIoMSk7XG4gICAgICAgICAgICAgICAgICAgIHN0b3JlID0gc2NvcGUuc3RvcmVzWyBrZXlbIDEgXSBdO1xuICAgICAgICAgICAgICAgICAgICBhbGlhcyA9IGtleVsgMyBdIHx8IHBhdGggJiYgcGF0aC5tYXRjaCgvKFteXFwuXSopJC8pWyAwIF0gfHwga2V5WyAxIF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHN0b3JlICYmICFpcy5mbihzdG9yZSkgJiYgc3RvcmUudW5CaW5kKGNTdG9yZSwgYWxpYXMsIHBhdGgpXG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfSlcbiAgICBcbiAgICByZXR1cm4gaW5pdGlhbE91dHB1dHM7XG59O1xuXG5cbmlzLnJzU3RvcmUgPSBmdW5jdGlvbiAoIG9iaiApIHtcbiAgICByZXR1cm4gb2JqIGluc3RhbmNlb2YgU3RvcmVcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RvcmU7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1N0b3JlLmpzIiwiLypcbiAqIENvcHlyaWdodCAoYykgIDIwMTggV2lzZSBXaWxkIFdlYiAuXG4gKlxuICogIE1JVCBMaWNlbnNlXG4gKlxuICogIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqICBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiAgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqICBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqICBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqICBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcbiAqICBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqICBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiAgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiAgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiAgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiAgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcbiAqICBTT0ZUV0FSRS5cbiAqXG4gKiBAYXV0aG9yIDogTmF0aGFuYWVsIEJyYXVuXG4gKiBAY29udGFjdCA6IGNhaXBpbGFic0BnbWFpbC5jb21cbiAqL1xuXG4vL2ltcG9ydCBpbmRleCBmcm9tIFwiLi9pbmRleFwiOy8vIHdpbGwgdXNlIGFzIGV4dGVybmFsIHRoZSBpbmRleCBpbiBkaXN0XG5pbXBvcnQgaXMgZnJvbSBcImlzXCI7XG5cbi8qKlxuICogTWluaW1hbCBwdXNoIHNlcXVlbmNlciwgYXBwbHkgc3RvcmVzIHNwZWNpZmljIHRhc2sgaW4gdGhlIHJpZ2h0IG9yZGVyIChyb290IHN0b3Jlc1xuICogZmlyc3QpXG4gKi9cbmxldCB0YXNrUXVldWUgICAgICA9IFtdLFxuICAgIGN1cldlaWdodCAgICAgID0gMCxcbiAgICBtYXhXZWlnaHQgICAgICA9IDAsXG4gICAgbWluV2VpZ2h0ICAgICAgPSAwLFxuICAgIHRhc2tDb3VudCAgICAgID0gMCxcbiAgICBkZVN5bmMgICAgICAgICA9IGZhbHNlLFxuICAgIGRlU3luY01heFRhc2tzID0gMTAsXG4gICAgdGFzayxcbiAgICBpc1J1bm5pbmcsXG4gICAgZXJyb3JDYXRjaGVyICAgPSB7XG4gICAgICAgIGxhc3RFcnJvcjogbnVsbCxcbiAgICAgICAgZGlzcGF0Y2ggOiBmdW5jdGlvbiAoIGVycm9yICkge1xuICAgICAgICAgICAgZXJyb3JDYXRjaGVyLmRpc2FibGUoKTtcbiAgICAgICAgICAgIGlmICggdGFzayAmJiB0YXNrWyAwIF0uaGFuZGxlRXJyb3IgKSB7XG4gICAgICAgICAgICAgICAgdGFza1sgMCBdLmhhbmRsZUVycm9yKGVycm9yLCB0YXNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKCB0YXNrIClcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiUmVTY29wZSA6IEFuIGFwcGx5IHRhc2sgaGFzIGZhaWxlZCAhIVwiLCB0YXNrWyAxIF0sIFwiIG9uIFwiLCB0YXNrWyAwIF0ubmFtZSB8fCB0YXNrWyAwIF0uY29uc3RydWN0b3IubmFtZSlcbiAgICAgICAgXG4gICAgICAgICAgICBpc1J1bm5pbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIHRhc2sgICAgICA9IG51bGw7XG4gICAgICAgICAgICBydW5Ob3coKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW5hYmxlICAgOiAoIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnIClcbiAgICAgICAgICAgICAgICAgICA/ICgpID0+IHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCBlcnJvckNhdGNoZXIuZGlzcGF0Y2gpXG4gICAgICAgICAgICB9IDogKCkgPT4ge1xuICAgICAgICAgICAgICAgIHByb2Nlc3Mub24oJ3VuY2F1Z2h0RXhjZXB0aW9uJywgZXJyb3JDYXRjaGVyLmRpc3BhdGNoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIGRpc2FibGUgIDogKCB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyApXG4gICAgICAgICAgICAgICAgICAgPyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgZXJyb3JDYXRjaGVyLmRpc3BhdGNoKVxuICAgICAgICAgICAgfSA6ICgpID0+IHtcbiAgICAgICAgICAgICAgICBwcm9jZXNzLnJlbW92ZUxpc3RlbmVyKCd1bmNhdWdodEV4Y2VwdGlvbicsIGVycm9yQ2F0Y2hlci5kaXNwYXRjaCk7XG4gICAgICAgICAgICB9XG4gICAgfVxuO1xuXG5mdW5jdGlvbiBydW5Ob3coKSB7XG4gICAgaWYgKCAhaXNSdW5uaW5nICkge1xuICAgICAgICBydW4oKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJ1bigpIHtcbiAgICBsZXQgZnJvbSAgPSBEYXRlLm5vdygpO1xuICAgIGlzUnVubmluZyA9IHRydWU7XG4gICAgZXJyb3JDYXRjaGVyLmVuYWJsZSgpO1xuICAgIHdoaWxlICggdGFza0NvdW50ICkge1xuICAgICAgICBcbiAgICAgICAgLy8gdHJ5IGZvciB0aGUgY3VycmVudCB3ZWlnaHRcbiAgICAgICAgd2hpbGUgKCAhKCB0YXNrUXVldWVbIGN1cldlaWdodCBdICYmIHRhc2tRdWV1ZVsgY3VyV2VpZ2h0IF0ubGVuZ3RoICkgKVxuICAgICAgICAgICAgY3VyV2VpZ2h0Kys7XG4gICAgICAgIFxuICAgICAgICB0YXNrQ291bnQtLTtcbiAgICAgICAgdGFzayA9IHRhc2tRdWV1ZVsgY3VyV2VpZ2h0IF0uc2hpZnQoKTtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcIlRhc2sgOiBcIiwgdGFza1sxXSwgXCIgb24gXCIsIHRhc2tbMF0ubmFtZSk7XG4gICAgICAgIHRhc2tbIDAgXVsgdGFza1sgMSBdIF0uYXBwbHkodGFza1sgMCBdLCB0YXNrWyAyIF0pO1xuICAgIH1cbiAgICB0YXNrID0gdW5kZWZpbmVkO1xuICAgIGVycm9yQ2F0Y2hlci5kaXNhYmxlKCk7XG4gICAgXG4gICAgaXNSdW5uaW5nID0gZmFsc2U7XG4gICAgaWYgKCB0YXNrQ291bnQgKSB7XG4gICAgICAgIHNldFRpbWVvdXQocnVuTm93KTtcbiAgICB9XG59XG5cbi8vXG4vL2luZGV4LnNldFRhc2tEZVN5bmMgPSAoIG5iICkgPT4ge1xuLy8gICAgaWYgKCBuYiA9PT0gZmFsc2UgKVxuLy8gICAgICAgIHJldHVybiBkZVN5bmMgPSBmYWxzZTtcbi8vICAgIGVsc2UgaWYgKCBuYiA9PT0gdHJ1ZSApIHtcbi8vICAgICAgICBkZVN5bmMgICAgICAgICA9IHRydWU7XG4vLyAgICAgICAgZGVTeW5jTWF4VGFza3MgPSAxMDtcbi8vICAgIH1cbi8vICAgIGVsc2UgKGlzLmludChuYikpXG4vLyAgICB7XG4vLyAgICAgICAgZGVTeW5jICAgICAgICAgPSB0cnVlO1xuLy8gICAgICAgIGRlU3luY01heFRhc2tzID0gbmI7XG4vLyAgICB9XG4vL307XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBwdXNoVGFzayggb2JqLCBmbiwgYXJneiApIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBtb3JlIGEgc3RvcmUgaGF2ZSBzb3VyY2VzLCB0aGUgbW9yZSBpdCBzaG91bGQgYmUgcHJvY2Vzc2VkIGZpcnN0XG4gICAgICAgICAqIFNvIGxlYWZzIHN0b3JlcyBzdGF5IHN5bmMsIGFuZCByb290IHN0b3JlcyByZWNlaXZlIG1lcmdlZCBzdGF0ZSB1cGRhdGVzO1xuICAgICAgICAgKiBnbG9iYWwgc3RhdGUgc3RheSBjb2hlcmVudFxuICAgICAgICAgKlxuICAgICAgICAgKiBUaGlzIG1lYW4gd2hhdGV2ZXIgdGhlIG51bWJlciBvZiBzdG9yZXMgJiB0aGUgY29tcGxleGl0eSBvZiB0aGUgZGVwcyxcbiAgICAgICAgICogdXBkYXRpbmcgYSBzdG9yZSBzdGF0ZSB3aWxsIHVwZGF0ZSBpdHMgc3luY2hyb25lIGNoaWxkIHN0b3JlcyBpbW1lZGlhdGVseVxuICAgICAgICAgKlxuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSB7KnxudW1iZXJ9XG4gICAgICAgICAqL1xuICAgICAgICBsZXQgd2VpZ2h0ID0gb2JqLl9zb3VyY2VzICYmIG9iai5fc291cmNlcy5sZW5ndGggfHwgMSxcbiAgICAgICAgICAgIHN0YWNrICA9IHRhc2tRdWV1ZVsgd2VpZ2h0IF0gPVxuICAgICAgICAgICAgICAgIHRhc2tRdWV1ZVsgd2VpZ2h0IF0gfHwgW107XG4gICAgICAgIFxuICAgICAgICBtYXhXZWlnaHQgPSBNYXRoLm1heChtYXhXZWlnaHQsIHdlaWdodCk7XG4gICAgICAgIGN1cldlaWdodCA9IE1hdGgubWluKGN1cldlaWdodCwgd2VpZ2h0KTtcbiAgICAgICAgdGFza0NvdW50Kys7XG4gICAgICAgIFxuICAgICAgICAvL2NvbnNvbGUubG9nKFwiUHVzaCBUYXNrIDogXCIsIGZuLCBcIiBvbiBcIiwgb2JqLm5hbWUsIHdlaWdodCk7XG4gICAgICAgIHN0YWNrLnB1c2goWyBvYmosIGZuLCBhcmd6IF0pO1xuICAgICAgICBzZXRUaW1lb3V0KHJ1bk5vdywgMCk7XG4gICAgICAgIHJldHVybiBzdGFjay5sZW5ndGg7XG4gICAgfVxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbHMvVGFza1NlcXVlbmNlci5qcyIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcHJvY2Vzcy9icm93c2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxuICogQ29weXJpZ2h0IChjKSAgMjAxOCBXaXNlIFdpbGQgV2ViIC5cbiAqXG4gKiAgTUlUIExpY2Vuc2VcbiAqXG4gKiAgUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqICBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiAgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuICogIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqICBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqICBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqICBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiAgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqICBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuICogIFNPRlRXQVJFLlxuICpcbiAqIEBhdXRob3IgOiBOYXRoYW5hZWwgQnJhdW5cbiAqIEBjb250YWN0IDogY2FpcGlsYWJzQGdtYWlsLmNvbVxuICovXG5cbmltcG9ydCBpcyAgICBmcm9tICdpcydcblxuY29uc3QgU2ltcGxlT2JqZWN0UHJvdG8gPSAoIHt9ICkuY29uc3RydWN0b3I7XG5cbmxldCBzY29wYWJsZXMgPSBbXTtcblxuZnVuY3Rpb24gYWRkU2NvcGFibGVUeXBlKCB0ZXN0LCBoYW5kbGUsIG1lbWJlciA9IGZhbHNlLCBzdGF0ZVNjb3BlID0gZmFsc2UgKSB7XG4gICAgc2NvcGFibGVzLnB1c2goXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRlc3QsXG4gICAgICAgICAgICBtZW1iZXIsXG4gICAgICAgICAgICBzdGF0ZVNjb3BlLFxuICAgICAgICAgICAgaGFuZGxlXG4gICAgICAgIH1cbiAgICApXG59XG5cbi8vXG5mdW5jdGlvbiBpc1Njb3BhYmxlVHlwZSggQ29tcCwgbWVtYmVyLCBzdGF0ZVNjb3BlICkge1xuICAgIFxuICAgIGZvciAoIGxldCBpID0gMDsgaSA8IHNjb3BhYmxlcy5sZW5ndGg7IGkrKyApXG4gICAgICAgIGlmIChcbiAgICAgICAgICAgICggbWVtYmVyID09PSB1bmRlZmluZWQgfHwgbWVtYmVyID09IHNjb3BhYmxlc1sgaSBdLm1lbWJlciApXG4gICAgICAgICAgICAmJiBzdGF0ZVNjb3BlID09IHNjb3BhYmxlc1sgaSBdLnN0YXRlU2NvcGVcbiAgICAgICAgICAgICYmIHNjb3BhYmxlc1sgaSBdLnRlc3QoQ29tcClcbiAgICAgICAgKVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgXG4gICAgcmV0dXJuIGZhbHNlO1xuICAgIFxufVxuXG5mdW5jdGlvbiBhcHBseVNjb3BhYmxlVHlwZSggQ29tcCwgYXJneiwgbWVtYmVyLCBzdGF0ZVNjb3BlICkge1xuICAgIFxuICAgIGZvciAoIGxldCBpID0gMDsgaSA8IHNjb3BhYmxlcy5sZW5ndGg7IGkrKyApXG4gICAgICAgIGlmICggbWVtYmVyID09IHNjb3BhYmxlc1sgaSBdLm1lbWJlciAmJiBzdGF0ZVNjb3BlID09IHNjb3BhYmxlc1sgaSBdLnN0YXRlU2NvcGUgJiYgc2NvcGFibGVzWyBpIF0udGVzdChDb21wKSApXG4gICAgICAgICAgICByZXR1cm4gc2NvcGFibGVzWyBpIF0uaGFuZGxlKENvbXAsIC4uLmFyZ3opO1xuICAgIFxuICAgIGNvbnNvbGUud2FybihcInJlU2NvcGUgOiBVbmtub3duIHR5cGVcIiwgQ29tcClcbiAgICBcbiAgICByZXR1cm4gZmFsc2U7XG4gICAgXG59XG5cbmZ1bmN0aW9uIHJlU2NvcGUoIC4uLmFyZ3ogKSB7XG4gICAgLy8gYXJlIHdlIGRlY29yYXRpbmcgYSBtZW1iZXIgLyB3aXRob3V0IGFyZ3pcbiAgICBpZiAoIGFyZ3pbIDAgXSBpbnN0YW5jZW9mIFNpbXBsZU9iamVjdFByb3RvICYmIGFyZ3pbIDIgXSBpbnN0YW5jZW9mIFNpbXBsZU9iamVjdFByb3RvICYmIGFyZ3pbIDAgXS5oYXNPd25Qcm9wZXJ0eShhcmd6WyAxIF0pICkge1xuICAgICAgICBhcmd6WyAyIF0udmFsdWUgPSBhcHBseVNjb3BhYmxlVHlwZShhcmd6WyAwIF0sIFtdLCB0cnVlLCBmYWxzZSk7XG4gICAgICAgIHJldHVybiBhcmd6WyAwIF07XG4gICAgfVxuICAgIGVsc2UgaWYgKCAhaXNTY29wYWJsZVR5cGUoYXJnelsgMCBdLCB1bmRlZmluZWQsIGZhbHNlKSApIHtcbiAgICAgICAgcmV0dXJuICggLi4uYXJnejIgKSA9PiB7XG4gICAgICAgICAgICAvLyBhcmUgd2UgZGVjb3JhdGluZyBhIG1lbWJlciAvIHdpdGggYXJnelxuICAgICAgICAgICAgaWYgKCBhcmd6MlsgMCBdIGluc3RhbmNlb2YgU2ltcGxlT2JqZWN0UHJvdG8gJiYgYXJnejJbIDIgXSBpbnN0YW5jZW9mIFNpbXBsZU9iamVjdFByb3RvICYmIGFyZ3oyWyAwIF0uaGFzT3duUHJvcGVydHkoYXJnejJbIDEgXSkgKSB7XG4gICAgICAgICAgICAgICAgYXJnejJbIDIgXS52YWx1ZSA9IGFwcGx5U2NvcGFibGVUeXBlKGFyZ3oyWyAwIF0sIGFyZ3osIHRydWUsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXJnejJbIDAgXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVTY29wZShhcmd6MlsgMCBdLCAuLi5hcmd6KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYXBwbHlTY29wYWJsZVR5cGUoYXJnelsgMCBdLCBhcmd6LnNsaWNlKDEpLCBmYWxzZSwgZmFsc2UpO1xufVxuXG5mdW5jdGlvbiBzY29wZVRvU3RhdGUoIC4uLmFyZ3ogKSB7XG4gICAgLy8gYXJlIHdlIGRlY29yYXRpbmcgYSBtZW1iZXIgLyB3aXRob3V0IGFyZ3pcbiAgICBpZiAoIGFyZ3pbIDAgXSBpbnN0YW5jZW9mIFNpbXBsZU9iamVjdFByb3RvICYmIGFyZ3pbIDIgXSBpbnN0YW5jZW9mIFNpbXBsZU9iamVjdFByb3RvICYmIGFyZ3pbIDAgXS5oYXNPd25Qcm9wZXJ0eShhcmd6WyAxIF0pICkge1xuICAgICAgICBhcmd6WyAyIF0udmFsdWUgPSBhcHBseVNjb3BhYmxlVHlwZShhcmd6WyAwIF0sIFtdLCB0cnVlLCB0cnVlKTtcbiAgICAgICAgcmV0dXJuIGFyZ3pbIDAgXTtcbiAgICB9XG4gICAgZWxzZSBpZiAoICFpc1Njb3BhYmxlVHlwZShhcmd6WyAwIF0sIHVuZGVmaW5lZCwgdHJ1ZSkgKSB7XG4gICAgICAgIHJldHVybiAoIC4uLmFyZ3oyICkgPT4ge1xuICAgICAgICAgICAgLy8gYXJlIHdlIGRlY29yYXRpbmcgYSBtZW1iZXIgLyB3aXRoIGFyZ3pcbiAgICAgICAgICAgIGlmICggYXJnejJbIDAgXSBpbnN0YW5jZW9mIFNpbXBsZU9iamVjdFByb3RvICYmIGFyZ3oyWyAyIF0gaW5zdGFuY2VvZiBTaW1wbGVPYmplY3RQcm90byAmJiBhcmd6MlsgMCBdLmhhc093blByb3BlcnR5KGFyZ3oyWyAxIF0pICkge1xuICAgICAgICAgICAgICAgIGFyZ3oyWyAyIF0udmFsdWUgPSBhcHBseVNjb3BhYmxlVHlwZShhcmd6MlsgMCBdLCBhcmd6LCB0cnVlLCB0cnVlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXJnejJbIDAgXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICByZXR1cm4gc2NvcGVUb1N0YXRlKGFyZ3oyWyAwIF0sIC4uLmFyZ3opO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBhcHBseVNjb3BhYmxlVHlwZShhcmd6WyAwIF0sIGFyZ3ouc2xpY2UoMSksIGZhbHNlLCB0cnVlKTtcbn1cblxuLy9cbi8vYWRkU2NvcGFibGVUeXBlKFxuLy8gICAgKCBDb21wICkgPT4gKENvbXAgJiYgQ29tcC5wcm90b3R5cGUgaW5zdGFuY2VvZiBTdG9yZSksXG4vLyAgICBmdW5jdGlvbiByZVNjb3BlKCAuLi5hcmd6ICkge1xuLy8gICAgICAgIGxldCBCYXNlU3RvcmUgICAgPSAoIWFyZ3pbMF0gfHwgYXJnelswXS5wcm90b3R5cGUgaW5zdGFuY2VvZiBTdG9yZSkgJiZcbi8vIGFyZ3ouc2hpZnQoKSwgc2NvcGUgICAgICAgID0gKCFhcmd6WzBdIHx8IGFyZ3pbMF0gaW5zdGFuY2VvZiBTY29wZSB8fCBpcy5mbihhcmd6WzBdKSlcbi8vICYmIGFyZ3ouc2hpZnQoKSwgdXNlICAgICAgICAgID0gKGlzLmFycmF5KGFyZ3pbMF0pKSAmJiBhcmd6LnNoaWZ0KCksIHN0YXRlTWFwICAgICA9XG4vLyAhdXNlICYmICghYXJnelswXSB8fCBhcmd6WzBdIGluc3RhbmNlb2YgU2ltcGxlT2JqZWN0UHJvdG8pICYmIGFyZ3ouc2hpZnQoKSxcbi8vIGluaXRpYWxTdGF0ZSA9IHt9OyAgbGV0IGNvbXBOYW1lID0gQmFzZVN0b3JlLmRpc3BsYXlOYW1lIHx8IEJhc2VTdG9yZS5uYW1lOyAgdXNlID1cbi8vIFsuLi4oQmFzZVN0b3JlLnVzZSB8fCBbXSksIC4uLih1c2UgfHwgW10pXTsgc3RhdGVNYXAgJiZcbi8vIFNjb3BlLnN0YXRlTWFwVG9SZWZMaXN0KHN0YXRlTWFwLCBpbml0aWFsU3RhdGUsIHVzZSk7ICBjbGFzcyBTdGF0ZVNjb3BlZFN0b3JlIGV4dGVuZHNcbi8vIEJhc2VTdG9yZSB7IHN0YXRpYyB1c2UgICAgICAgICA9IHVzZTsgc3RhdGljIGRpc3BsYXlOYW1lID0gXCJzdGF0ZVNjb3BlZChcIiArIGNvbXBOYW1lICtcbi8vIFwiKVwiOyAgY29uc3RydWN0b3IoIC4uLmFyZ3ogKSB7IHN1cGVyKHNjb3BlLCBhcmd6LnNsaWNlKGFyZ3pbMF0gaW5zdGFuY2VvZiBTY29wZSA/IDEgOlxuLy8gMCkpIH0gfSAgcmV0dXJuIFN0YXRlU2NvcGVkU3RvcmU7IH0sIGZhbHNlLCB0cnVlIClcblxuXG5leHBvcnQge1xuICAgIGFkZFNjb3BhYmxlVHlwZSxcbiAgICByZVNjb3BlLFxuICAgIHNjb3BlVG9TdGF0ZVxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbHMvc2NvcGFibGUuanMiXSwic291cmNlUm9vdCI6IiJ9