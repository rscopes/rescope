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
	
	        if (openScopes[id] && !incrementId) {
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
	                if (this._._mixed.reduceRight(function (mounted, ctx) {
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
	
	            //stores.forEach(
	            //    id => ( ( !this.stores[ id ] || !this.stores[ id ].retain ) && console.warn(id, reason) )
	            //)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMGZiMWFmNzVjZmI2ZTQwYzA4NDQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9TY29wZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvaXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9pcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL0VtaXR0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9zaG9ydGlkL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vc2hvcnRpZC9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9zaG9ydGlkL2xpYi9hbHBoYWJldC5qcyIsIndlYnBhY2s6Ly8vLi9+L3Nob3J0aWQvbGliL3JhbmRvbS9yYW5kb20tZnJvbS1zZWVkLmpzIiwid2VicGFjazovLy8uL34vc2hvcnRpZC9saWIvZW5jb2RlLmpzIiwid2VicGFjazovLy8uL34vc2hvcnRpZC9saWIvcmFuZG9tL3JhbmRvbS1ieXRlLWJyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9zaG9ydGlkL2xpYi9kZWNvZGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9zaG9ydGlkL2xpYi9idWlsZC5qcyIsIndlYnBhY2s6Ly8vLi9+L3Nob3J0aWQvbGliL2lzLXZhbGlkLmpzIiwid2VicGFjazovLy8uL34vc2hvcnRpZC9saWIvdXRpbC9jbHVzdGVyLXdvcmtlci1pZC1icm93c2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9TdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvVGFza1NlcXVlbmNlci5qcyIsIndlYnBhY2s6Ly8vLi9+L3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvc2NvcGFibGUuanMiXSwibmFtZXMiOlsiJGdsb2JhbCIsIndpbmRvdyIsImdsb2JhbCIsIlJTIiwiX19fcmVzY29wZSIsImNvbnNvbGUiLCJ3YXJuIiwiU3RvcmUiLCJTY29wZSIsIkNvbnRleHQiLCJyZVNjb3BlIiwic2NvcGVUb1N0YXRlIiwicmVTY29wZVN0YXRlIiwiYWRkU2NvcGFibGVUeXBlIiwic2NvcGVSZWYiLCJtYXAiLCJrZXkiLCJyZXF1aXJlIiwid2Fsa25TZXQiLCJ3YWxrbkdldCIsImtleVdhbGtuU2V0Iiwia2V5V2Fsa25HZXQiLCJFdmVudEVtaXR0ZXIiLCJzaG9ydGlkIiwiX19wcm90b19fcHVzaCIsInRhcmdldCIsImlkIiwicGFyZW50IiwiZm4iLCJwcm90b3R5cGUiLCJfIiwib3BlblNjb3BlcyIsIlNpbXBsZU9iamVjdFByb3RvIiwiY29uc3RydWN0b3IiLCJzY29wZXMiLCJza2V5IiwiaXMiLCJhcnJheSIsInNvcnQiLCJhIiwiYiIsImZpcnN0bmFtZSIsImpvaW4iLCJzbSIsInN0YXRlIiwiX3JlZnMiLCJhY3Rpb25zIiwicGF0aCIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwiY3BhdGgiLCJwdXNoIiwiRnVuY3Rpb24iLCJhcyIsInN0b3Jlc01hcCIsInNuYXBzaG90IiwiZGF0YSIsImluY3JlbWVudElkIiwicGVyc2lzdGVuY2VUbSIsImF1dG9EZXN0cm95Iiwicm9vdEVtaXR0ZXIiLCJib3VuZGVkQWN0aW9ucyIsImtleUluZGV4IiwiX2lkIiwiZ2VuZXJhdGUiLCJpc0xvY2FsSWQiLCJyZWdpc3RlciIsImkiLCJfcmV2Iiwic3RvcmVzIiwiX2F1dG9EZXN0cm95IiwiZGVhZCIsIkVycm9yIiwic291cmNlcyIsImNoaWxkU2NvcGVzIiwiY2hpbGRTY29wZXNMaXN0IiwidW5TdGFibGVDaGlsZHMiLCJzZWVuQ2hpbGRzIiwiX19yZXRhaW5zIiwiYWxsIiwiX19sb2NrcyIsIl9ib3VuZGVkQWN0aW9ucyIsInRlc3QiLCJpbmNsdWRlcyIsImJpbmQiLCJfbGlzdGVuaW5nIiwiX3Njb3BlIiwiX21peGVkIiwiX21peGVkTGlzdCIsImZvbGxvd2VycyIsInJldGFpbiIsIl9zdGFibGUiLCJ3YWl0Iiwib24iLCJfcGFyZW50TGlzdCIsInJlbGVhc2UiLCJfcHJvcGFnIiwiX2FkZENoaWxkIiwicmVzdG9yZSIsInNldFRpbWVvdXQiLCJkaXNwb3NlIiwic3RvcmVzTGlzdCIsIl9tb3VudCIsImsiLCJhcmd1bWVudHMiLCJyZWYiLCJzbmFwIiwicGFyc2VSZWYiLCJzdG9yZUlkIiwicmVkdWNlUmlnaHQiLCJtb3VudGVkIiwiY3R4Iiwic3RvcmUiLCJ0YXNrUXVldWUiLCJyc1N0b3JlIiwibmFtZSIsImxlbmd0aCIsInNoaWZ0IiwicnNTY29wZSIsIiRwYXJlbnQiLCJtb3VudCIsInNsaWNlIiwidW5kZWZpbmVkIiwic2V0U3RhdGUiLCJfd2F0Y2hTdG9yZSIsImlzU3RhYmxlIiwicHJvcGFnIiwidGFyZ2V0Q3R4IiwibGlzdHMiLCJyZWxpbmsiLCJfX29yaWdpbiIsInNpbmdsZXRvbiIsInNyY0N0eCIsImV4dGVybmFsIiwiZm9yY2UiLCJsY3R4IiwiaW5mbyIsInRtcCIsImRlc3Ryb3kiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJnZXQiLCJzZXQiLCJ2IiwiYWN0aXZlQWN0aW9ucyIsImFjdCIsImhhc093blByb3BlcnR5IiwiX190YXJnZXRTdG9yZXMiLCJkaXNwYXRjaCIsIm9iaiIsInNldEluaXRpYWwiLCJyZXZNYXAiLCJsYXN0UmV2cyIsInJlZktleXMiLCJzdHJpbmciLCJyZWR1Y2UiLCJyZXZzIiwicmV2IiwicmVmcyIsInJldGFpblN0b3JlcyIsImdldFVwZGF0ZXMiLCJkaXNwb3NlU3RvcmVzIiwic3BsaWNlIiwidG8iLCJyZWZMaXN0IiwibWl4ZWRDV1VubW91bnQiLCJ1bk1vdW50S2V5IiwiaXNSZWFjdENvbXBvbmVudCIsInVuQmluZCIsImFsaWFzIiwicmV0cmlldmUiLCJzcGxpdCIsInJldHJpZXZlU3RvcmUiLCJzdG9yZXNSZXZNYXAiLCJsb2NhbCIsInVwZGF0ZWQiLCJnZXRTdG9yZXNSZXZzIiwib3V0cHV0IiwiY2hpbGRzIiwiX2dldEFsbENoaWxkcyIsImNmZyIsIndpdGhDaGlsZHMiLCJ3aXRoUGFyZW50cyIsIndpdGhNaXhlZCIsIm5vcmVmcyIsInNlcmlhbGl6ZSIsIndpdGhDaGlsZCIsImgiLCJzdGFydHNXaXRoIiwic3Vic3RyIiwiYm9vbCIsInRha2VTbmFwc2hvdEJ5S2V5IiwiZ2V0U25hcHNob3RCeUtleSIsImRlbGV0ZVNuYXBzaG90QnlLZXkiLCJyZXBsYWNlIiwicFN0YXRlIiwiX3JlZiIsImFjdGlvbiIsImFyZ3oiLCJzdGFjayIsImJBY3RzIiwidHJpZ2dlciIsImNiIiwib25jZSIsInJlYXNvbiIsImVtaXQiLCJlcnJvciIsInN0YWJpbGl6ZXJUTSIsImNsZWFyVGltZW91dCIsInByb3BhZ1RNIiwicmVtYXBzIiwid2FzU3RhYmxlIiwiaW5kZXhPZiIsInVuIiwiZGVzdHJveVRNIiwicmVtb3ZlTGlzdGVuZXIiLCJmb2xsb3dlciIsIl9ybUNoaWxkIiwidmFsdWUiLCJpc0tleSIsImZpbHRlciIsIkVtaXR0ZXIiLCJfZXZlbnRzIiwiZXZ0IiwiVGFza1NlcXVlbmNlciIsIm9ialByb3RvIiwiZ2V0UHJvdG90eXBlT2YiLCJfc3RhdGljIiwic2NvcGUiLCJnZXRTY29wZSIsInN0YXRpY1Njb3BlIiwid2F0Y2hzIiwidXNlIiwiYXBwbHkiLCJpbml0aWFsU3RhdGUiLCJkZWZhdWx0U3RhdGUiLCJhcHBsaWVkIiwiX3VpZCIsIl9vblN0YWJpbGl6ZSIsIl9wZXJzaXN0ZW5jZVRtIiwiX2NmZyIsInNjb3BlT2JqIiwiJHNjb3BlIiwiJHN0b3JlcyIsIiRhY3Rpb25zIiwiJGRpc3BhdGNoIiwiX3JldnMiLCJfcmVxdWlyZSIsIl9zb3VyY2VzIiwiX3VzZSIsIm1hdGNoIiwicmVmMiIsIl9mb2xsb3dlcnMiLCJfY2hhbmdlc1NXIiwiX2FmdGVyQ29uc3RydWN0b3IiLCJpbml0aWFsRGF0YSIsInNob3VsZEFwcGx5IiwibWFuYWdlZCIsIm5EYXRhcyIsInIiLCJjRGF0YXMiLCJpc0NvbXBsZXRlIiwiZm9sbG93IiwiY2FsbCIsImNoYW5nZXMiLCJyZWZpbmUiLCJfX3Byb3RvX18iLCJfc3RhYmlsaXplciIsInB1c2hUYXNrIiwibnMiLCJkb1dhaXQiLCJvcmlnaW4iLCJpbml0aWFsT3V0cHV0cyIsInMiLCJoYXNEYXRhQ2hhbmdlIiwic3RhYmxlIiwibmV4dFN0YXRlIiwiX25leHRTdGF0ZSIsIm5leHREYXRhIiwic3luYyIsImNoYW5nZSIsInB1c2hTdGF0ZSIsInN0YWJpbGl6ZSIsIl9rZXkiLCJkZWZhdWx0TmFtZSIsIm51bWJlciIsImltbWVkaWF0ZSIsInRoZW4iLCJwcmV2aW91cyIsIm1lIiwic2hvdWxkUHJvcGFnIiwiX2Rlc3Ryb3lUTSIsInJlbW92ZUFsbExpc3RlbmVycyIsImNTdG9yZSIsInRhcmdldFJldnMiLCJ0YXJnZXRTY29wZSIsIm8iLCJjdXJXZWlnaHQiLCJtYXhXZWlnaHQiLCJtaW5XZWlnaHQiLCJ0YXNrQ291bnQiLCJkZVN5bmMiLCJkZVN5bmNNYXhUYXNrcyIsInRhc2siLCJpc1J1bm5pbmciLCJlcnJvckNhdGNoZXIiLCJsYXN0RXJyb3IiLCJkaXNhYmxlIiwiaGFuZGxlRXJyb3IiLCJydW5Ob3ciLCJlbmFibGUiLCJhZGRFdmVudExpc3RlbmVyIiwicHJvY2VzcyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJydW4iLCJmcm9tIiwiRGF0ZSIsIm5vdyIsIndlaWdodCIsIk1hdGgiLCJtYXgiLCJtaW4iLCJzY29wYWJsZXMiLCJoYW5kbGUiLCJtZW1iZXIiLCJzdGF0ZVNjb3BlIiwiaXNTY29wYWJsZVR5cGUiLCJDb21wIiwiYXBwbHlTY29wYWJsZVR5cGUiLCJhcmd6MiJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FB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Q0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDakdBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDeEJBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQ2xCQTs7QUFFQSwrRUFBOEU7O0FBRTlFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUNiQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQ2hCQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7OztBQy9DQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQkFBa0IsU0FBUztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUNsQkE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTJCSSxVQUErQixtQkFBQTlNLENBQVEs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TixDQUFsQixFQUE2QkEsS0FBSzlFLEtBQUwsQ0FBVyxDQUFYLENBQTdCLEVBQTRDLEtBQTVDLEVBQW1ELElBQW5ELENBQVA7QUFDSDs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7U0FJSTdHLGUsR0FBQUEsZTtTQUNBSCxPLEdBQUFBLE87U0FDQUMsWSxHQUFBQSxZIiwiZmlsZSI6Ii4uLy4uL2Rpc3QvUmVTY29wZS5icm93c2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDBmYjFhZjc1Y2ZiNmU0MGMwODQ0IiwiLypcbiAqIENvcHlyaWdodCAoYykgIDIwMTggV2lzZSBXaWxkIFdlYiAuXG4gKlxuICogIE1JVCBMaWNlbnNlXG4gKlxuICogIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqICBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiAgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqICBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqICBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqICBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcbiAqICBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqICBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiAgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiAgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiAgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiAgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcbiAqICBTT0ZUV0FSRS5cbiAqXG4gKiBAYXV0aG9yIDogTmF0aGFuYWVsIEJyYXVuXG4gKiBAY29udGFjdCA6IGNhaXBpbGFic0BnbWFpbC5jb21cbiAqL1xuXG5sZXQgJGdsb2JhbCA9ICggdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgKSA/IHdpbmRvdyA6IGdsb2JhbDtcblxuaW1wb3J0IFNjb3BlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tIFwiLi9TY29wZVwiO1xuaW1wb3J0IFN0b3JlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tIFwiLi9TdG9yZVwiO1xuaW1wb3J0IHsgYWRkU2NvcGFibGVUeXBlLCByZVNjb3BlLCBzY29wZVRvU3RhdGUgfSBmcm9tIFwiLi91dGlscy9zY29wYWJsZVwiO1xuXG5jb25zdCBSUyA9ICRnbG9iYWwuX19fcmVzY29wZSB8fCB7fTtcbmlmICggJGdsb2JhbC5fX19yZXNjb3BlICkge1xuICAgIGNvbnNvbGUud2FybihcIlJlU2NvcGUgaXMgZGVmaW5lZCBtdWx0aXBsZSB0aW1lcyAhISBcXG5DaGVjayB5b3UncmUgcGFja2FnaW5nXCIpXG59XG5lbHNlIHtcbiAgICBcbiAgICAkZ2xvYmFsLl9fX3Jlc2NvcGUgPSBSUztcbiAgICBTY29wZS5TdG9yZSAgICAgICAgPSBTdG9yZTtcbiAgICAvL1JTLmNvbnNvbGUgICAgICAgICA9IGNvbnNvbGU7XG4gICAgUlMuU2NvcGUgICAgICAgICAgID0gU2NvcGU7XG4gICAgUlMuQ29udGV4dCAgICAgICAgID0gU2NvcGU7XG4gICAgUlMuU3RvcmUgICAgICAgICAgID0gU3RvcmU7XG4gICAgUlMucmVTY29wZSAgICAgICAgID0gcmVTY29wZTtcbiAgICBSUy5zY29wZVRvU3RhdGUgICAgPSBzY29wZVRvU3RhdGU7XG4gICAgUlMucmVTY29wZVN0YXRlICAgID0gc2NvcGVUb1N0YXRlO1xuICAgIFJTLmFkZFNjb3BhYmxlVHlwZSA9IGFkZFNjb3BhYmxlVHlwZTtcbiAgICBSUy5zY29wZVJlZiAgICAgICAgPVxuICAgICAgICBmdW5jdGlvbiBzY29wZVJlZiggbWFwLCBrZXkgKSB7XG4gICAgICAgICAgICBtYXBbIGtleSBdID0gbmV3IFNjb3BlLnNjb3BlUmVmKG1hcFsga2V5IF0pO1xuICAgICAgICAgICAgcmV0dXJuIG1hcDtcbiAgICAgICAgfTtcbiAgICBcbn1cbmV4cG9ydCBkZWZhdWx0IFJTO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC5qcyIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpICAyMDE4IFdpc2UgV2lsZCBXZWIgLlxuICpcbiAqICBNSVQgTGljZW5zZVxuICpcbiAqICBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiAgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqICB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiAgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiAgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiAgVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG4gKiAgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqICBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG4gKiAgU09GVFdBUkUuXG4gKlxuICogQGF1dGhvciA6IE5hdGhhbmFlbCBCcmF1blxuICogQGNvbnRhY3QgOiBjYWlwaWxhYnNAZ21haWwuY29tXG4gKi9cblxuXG52YXIgaXMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi91dGlscy9pcycpLFxuICAgIHsgd2Fsa25TZXQsIHdhbGtuR2V0LCBrZXlXYWxrblNldCwga2V5V2Fsa25HZXQgfSA9IHJlcXVpcmUoJy4vdXRpbHMvdXRpbHMnKSxcbiAgICBFdmVudEVtaXR0ZXIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL3V0aWxzL0VtaXR0ZXInKSxcbiAgICBzaG9ydGlkICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlKCdzaG9ydGlkJylcbiAgICAsIF9fcHJvdG9fX3B1c2ggICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSAoIHRhcmdldCwgaWQsIHBhcmVudCApID0+IHtcbiAgICAgICAgbGV0IGZuICAgICAgICAgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIH07XG4gICAgICAgIGZuLnByb3RvdHlwZSAgID0gcGFyZW50ID8gbmV3IHBhcmVudC5fWyBpZCBdKCkgOiB0YXJnZXRbIGlkIF0gfHwge307XG4gICAgICAgIHRhcmdldFsgaWQgXSAgID0gbmV3IGZuKCk7XG4gICAgICAgIHRhcmdldC5fWyBpZCBdID0gZm47XG4gICAgfSxcbiAgICBvcGVuU2NvcGVzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSB7fSxcbiAgICBTaW1wbGVPYmplY3RQcm90byAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSAoIHt9ICkuY29uc3RydWN0b3I7XG5cbi8qKlxuICogQmFzZSBTY29wZSBvYmplY3RcbiAqL1xuY2xhc3MgU2NvcGUgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICAgIHN0YXRpYyBnZXRTY29wZSggc2NvcGVzICkge1xuICAgICAgICBsZXQgc2tleSA9IGlzLmFycmF5KHNjb3BlcykgPyBzY29wZXMuc29ydCgoIGEsIGIgKSA9PiB7XG4gICAgICAgICAgICBpZiAoIGEuZmlyc3RuYW1lIDwgYi5maXJzdG5hbWUgKSByZXR1cm4gLTE7XG4gICAgICAgICAgICBpZiAoIGEuZmlyc3RuYW1lID4gYi5maXJzdG5hbWUgKSByZXR1cm4gMTtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9KS5qb2luKCcrJykgOiBzY29wZXM7XG4gICAgICAgIHJldHVybiBvcGVuU2NvcGVzWyBza2V5IF0gPSBvcGVuU2NvcGVzWyBza2V5IF0gfHwgbmV3IFNjb3BlKHt9LCB7IGlkOiBza2V5IH0pO1xuICAgIH07XG4gICAgXG4gICAgXG4gICAgLyoqXG4gICAgICogZ2V0IGEgcGFyc2VkIHJlZmVyZW5jZSBsaXN0IGZyb20gc3RhdGVNYXBcbiAgICAgKiBAcGFyYW0gX3JlZlxuICAgICAqIEByZXR1cm5zIHt7c3RvcmVJZCwgcGF0aCwgYWxpYXM6ICosIHJlZjogKn19XG4gICAgICovXG4gICAgc3RhdGljIHN0YXRlTWFwVG9SZWZMaXN0KCBzbSwgc3RhdGUgPSB7fSwgX3JlZnMgPSBbXSwgYWN0aW9ucyA9IHt9LCBwYXRoID0gXCJcIiApIHtcbiAgICAgICAgT2JqZWN0LmtleXMoc20pLmZvckVhY2goXG4gICAgICAgICAgICBrZXkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBjcGF0aCA9IHBhdGggPyBwYXRoICsgJy4nICsga2V5IDoga2V5O1xuICAgICAgICAgICAgICAgIHNtWyBrZXkgXSBpbnN0YW5jZW9mIFNjb3BlLnNjb3BlUmVmXG4gICAgICAgICAgICAgICAgPyBfcmVmcy5wdXNoKHNtWyBrZXkgXS5wYXRoICsgJzonICsgY3BhdGgpXG4gICAgICAgICAgICAgICAgOiAoIHNtWyBrZXkgXSAmJiBzbVsga2V5IF0gaW5zdGFuY2VvZiBGdW5jdGlvbiApXG4gICAgICAgICAgICAgICAgICA/IGFjdGlvbnNbIGtleSBdID0gc21bIGtleSBdXG4gICAgICAgICAgICAgICAgICA6ICggc21bIGtleSBdICYmIHNtWyBrZXkgXS5wcm90b3R5cGUgaW5zdGFuY2VvZiBTY29wZS5TdG9yZSApXG4gICAgICAgICAgICAgICAgICAgID8gX3JlZnMucHVzaChzbVsga2V5IF0uYXMoY3BhdGgpKVxuICAgICAgICAgICAgICAgICAgICA6IHN0YXRlWyBjcGF0aCBdID0gc21bIGtleSBdXG4gICAgICAgICAgICAgICAgLy86IHRoaXMuc3RhdGVNYXBUb1JlZkxpc3Qoc21ba2V5XSwgX3JlZnMsIHBhdGggKyAnLicgKyBrZXkpXG4gICAgICAgICAgICB9XG4gICAgICAgIClcbiAgICAgICAgcmV0dXJuIF9yZWZzO1xuICAgIH1cbiAgICBcbiAgICBzdGF0aWMgcGVyc2lzdGVuY2VUbSA9IDE7Ly8gaWYgPiAwLCB3aWxsIHdhaXQgJ3BlcnNpc3RlbmNlVG0nIG1zIGJlZm9yZSBkZXN0cm95XG4gICAgLy8gd2hlblxuICAgIC8vIGRpc3Bvc2UgcmVhY2ggMFxuICAgIHN0YXRpYyBTdG9yZSAgICA9IG51bGw7XG4gICAgc3RhdGljIHNjb3BlUmVmID0gZnVuY3Rpb24gc2NvcGVSZWYoIHBhdGggKSB7XG4gICAgICAgIHRoaXMucGF0aCA9IHBhdGg7XG4gICAgfTtcbiAgICBzdGF0aWMgc2NvcGVzICAgPSBvcGVuU2NvcGVzOy8vIGFsbCBhY3RpdmUgc2NvcGVzXG4gICAgXG4gICAgXG4gICAgLyoqXG4gICAgICogSW5pdCBhIFJlU2NvcGUgc2NvcGVcbiAgICAgKlxuICAgICAqIEBwYXJhbSBzdG9yZXNNYXAge09iamVjdH0gT2JqZWN0IHdpdGggdGhlIGluaXRpYWwgc3RvcmVzIGRlZmluaXRpb24gLyBpbnN0YW5jZXNcbiAgICAgKiBAcGFyYW0gY29uZmlnIHtPYmplY3R9IFNjb3BlIGNvbmZpZ1xuICAgICAqIHtcbiAgICAgKiAgcGFyZW50IHtzY29wZX0gQG9wdGlvbmFsIHBhcmVudCBzY29wZVxuICAgICAqXG4gICAgICogIGlkIHtzdHJpbmd9IEBvcHRpb25hbCBpZCAoIGlmIHRoaXMgaWQgZXhpc3Qgc3RvcmVzTWFwIHdpbGwgYmUgbWVyZ2Ugb24gdGhlICdpZCdcbiAgICAgKiAgICAgc2NvcGUpIGtleSB7c3RyaW5nfSBAb3B0aW9uYWwga2V5IG9mIHRoZSBzY29wZSAoIGlmIG5vIGlkIGlzIHNldCwgdGhlIHNjb3BlIGlkXG4gICAgICogICAgIHdpbGwgYmUgKHBhcmVudC5pZCsnPicra2V5KSBpbmNyZW1lbnRJZCB7Ym9vbH0gQG9wdGlvbmFsIHRydWUgdG8gYWRkIGEgc3VmZml4XG4gICAgICogICAgIGlkLCBpZiB0aGUgcHJvdmlkZWQga2V5IG9yIGlkIGdsb2JhbGx5IGV4aXN0XG4gICAgICpcbiAgICAgKiAgc3RhdGUge09iamVjdH0gQG9wdGlvbmFsIGluaXRpYWwgc3RhdGUgYnkgc3RvcmUgYWxpYXNcbiAgICAgKiAgZGF0YSB7T2JqZWN0fSBAb3B0aW9uYWwgaW5pdGlhbCBkYXRhIGJ5IHN0b3JlIGFsaWFzXG4gICAgICpcbiAgICAgKiAgcm9vdEVtaXR0ZXIge2Jvb2x9IEBvcHRpb25hbCB0cnVlIHRvIG5vdCBiZWluZyBkZXN0YWJpbGl6ZWQgYnkgcGFyZW50XG4gICAgICogIGJvdW5kZWRBY3Rpb25zIHthcnJheSB8IHJlZ2V4cH0gQG9wdGlvbmFsIGxpc3Qgb3IgcmVnZXhwIG9mIGFjdGlvbnMgbm90XG4gICAgICogICAgIHByb3BhZ2F0ZWQgdG8gdGhlIHBhcmVudFxuICAgICAqXG4gICAgICogIHBlcnNpc3RlbmNlVG0ge251bWJlcikgaWYgPiAwLCB3aWxsIHdhaXQgJ3BlcnNpc3RlbmNlVG0nIG1zIGJlZm9yZSBkZXN0cm95IHdoZW5cbiAgICAgKiAgICAgZGlzcG9zZSByZWFjaCAwIGF1dG9EZXN0cm95ICB7Ym9vbH0gd2lsbCB0cmlnZ2VyIHJldGFpbiAmIGRpc3Bvc2UgYWZ0ZXIgc3RhcnRcbiAgICAgKiAgfVxuICAgICAqIEByZXR1cm5zIHtTY29wZX1cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvciggc3RvcmVzTWFwLCB7IHBhcmVudCwga2V5LCBpZCwgc25hcHNob3QsIHN0YXRlLCBkYXRhLCBpbmNyZW1lbnRJZCA9ICEha2V5LCBwZXJzaXN0ZW5jZVRtLCBhdXRvRGVzdHJveSwgcm9vdEVtaXR0ZXIsIGJvdW5kZWRBY3Rpb25zIH0gPSB7fSApIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdmFyIF8gPSB7fSwga2V5SW5kZXg7XG4gICAgICAgIFxuICAgICAgICBpZCA9IGlkIHx8IGtleSAmJiAoICggcGFyZW50ICYmIHBhcmVudC5faWQgfHwgc2hvcnRpZC5nZW5lcmF0ZSgpICkgKyAnPicgKyBrZXkgKTtcbiAgICAgICAgXG4gICAgICAgIF8uaXNMb2NhbElkID0gIWlkO1xuICAgICAgICBcbiAgICAgICAgLy9pZiAoIHBhcmVudCAmJiBrZXkgKSB7XG4gICAgICAgIC8vICAgIGtleUluZGV4ID0gcGFyZW50Ll8uY2hpbGRTY29wZXMuZmluZChjdHg9PihjdHguX2lkPT1pZCkpO1xuICAgICAgICAvLyAgICBpZiAoIGtleUluZGV4ID09IC0xICkga2V5SW5kZXggPSBwYXJlbnQuXy5zZWVuQ2hpbGRzO1xuICAgICAgICAvLyAgICBrZXlJbmRleCsrO1xuICAgICAgICAvLyAgICBpZiAoIGtleUluZGV4IClcbiAgICAgICAgLy8gICAgICAgIGlkID0gaWQgKyAnWycgKyBrZXlJbmRleCArICddJztcbiAgICAgICAgLy99XG4gICAgICAgIFxuICAgICAgICBpZCA9IGlkIHx8ICggXCJfX19fX1wiICsgc2hvcnRpZC5nZW5lcmF0ZSgpICk7XG4gICAgICAgIFxuICAgICAgICBpZiAoIG9wZW5TY29wZXNbIGlkIF0gJiYgIWluY3JlbWVudElkICkge1xuICAgICAgICAgICAgdGhpcy5faWQgPSBpZDtcbiAgICAgICAgICAgIG9wZW5TY29wZXNbIGlkIF0ucmVnaXN0ZXIoc3RvcmVzTWFwKTtcbiAgICAgICAgICAgIHJldHVybiBvcGVuU2NvcGVzWyBpZCBdXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoIG9wZW5TY29wZXNbIGlkIF0gJiYgaW5jcmVtZW50SWQgKSB7XG4gICAgICAgICAgICBsZXQgaSA9IC0xO1xuICAgICAgICAgICAgd2hpbGUgKCBvcGVuU2NvcGVzWyBpZCArICdbJyArICggKytpICkgKyAnXScgXSApIDtcbiAgICAgICAgICAgIGlkID0gaWQgKyAnWycgKyBpICsgJ10nO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9pZCAgICAgICAgID0gaWQ7XG4gICAgICAgIHRoaXMuX3JldiAgICAgICAgPSAwO1xuICAgICAgICBvcGVuU2NvcGVzWyBpZCBdID0gdGhpcztcbiAgICAgICAgXy5wZXJzaXN0ZW5jZVRtICA9IHBlcnNpc3RlbmNlVG0gfHwgdGhpcy5jb25zdHJ1Y3Rvci5wZXJzaXN0ZW5jZVRtO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5hY3Rpb25zID0ge307XG4gICAgICAgIHRoaXMuc3RvcmVzICA9IHt9O1xuICAgICAgICB0aGlzLnN0YXRlICAgPSB7fTtcbiAgICAgICAgdGhpcy5kYXRhICAgID0ge307XG4gICAgICAgIFxuICAgICAgICB0aGlzLnBhcmVudCAgICAgICA9IHBhcmVudDtcbiAgICAgICAgdGhpcy5fICAgICAgICAgICAgPSBfO1xuICAgICAgICB0aGlzLl9hdXRvRGVzdHJveSA9IGF1dG9EZXN0cm95O1xuICAgICAgICBcbiAgICAgICAgaWYgKCBwYXJlbnQgJiYgcGFyZW50LmRlYWQgKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2FuJ3QgdXNlIGEgZGVhZCBzY29wZSBhcyBwYXJlbnQgIVwiKTtcbiAgICAgICAgXG4gICAgICAgIF9fcHJvdG9fX3B1c2godGhpcywgJ2FjdGlvbnMnLCBwYXJlbnQpO1xuICAgICAgICBfX3Byb3RvX19wdXNoKHRoaXMsICdzdG9yZXMnLCBwYXJlbnQpO1xuICAgICAgICBfX3Byb3RvX19wdXNoKHRoaXMsICdzdGF0ZScsIHBhcmVudCk7XG4gICAgICAgIF9fcHJvdG9fX3B1c2godGhpcywgJ2RhdGEnLCBwYXJlbnQpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5zb3VyY2VzICAgICAgPSBbXTtcbiAgICAgICAgXy5jaGlsZFNjb3BlcyAgICAgPSBbXTtcbiAgICAgICAgXy5jaGlsZFNjb3Blc0xpc3QgPSBbXTtcbiAgICAgICAgXy51blN0YWJsZUNoaWxkcyAgPSAwO1xuICAgICAgICBfLnNlZW5DaGlsZHMgICAgICA9IDA7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9fcmV0YWlucyA9IHsgYWxsOiAwIH07XG4gICAgICAgIHRoaXMuX19sb2NrcyAgID0geyBhbGw6IDEgfTtcbiAgICAgICAgXG4gICAgICAgIC8vXy5zbmFwc2hvdCAgICAgICAgPSBzbmFwc2hvdDtcbiAgICAgICAgLy9fLnNuYXBzaG90ICAgICAgICA9IHNuYXBzaG90O1xuICAgICAgICBfLl9ib3VuZGVkQWN0aW9ucyA9IGlzLmFycmF5KGJvdW5kZWRBY3Rpb25zKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8geyB0ZXN0OiBib3VuZGVkQWN0aW9ucy5pbmNsdWRlcy5iaW5kKGJvdW5kZWRBY3Rpb25zKSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBib3VuZGVkQWN0aW9ucztcbiAgICAgICAgXy5fbGlzdGVuaW5nICAgICAgPSB7fTtcbiAgICAgICAgXy5fc2NvcGUgICAgICAgICAgPSB7fTtcbiAgICAgICAgXy5fbWl4ZWQgICAgICAgICAgPSBbXTtcbiAgICAgICAgXy5fbWl4ZWRMaXN0ICAgICAgPSBbXTtcbiAgICAgICAgXy5mb2xsb3dlcnMgICAgICAgPSBbXTtcbiAgICAgICAgaWYgKCBwYXJlbnQgKSB7XG4gICAgICAgICAgICBwYXJlbnQucmV0YWluKFwiaXNNeVBhcmVudFwiKTtcbiAgICAgICAgICAgIGlmICggIXJvb3RFbWl0dGVyICkge1xuICAgICAgICAgICAgICAgICFwYXJlbnQuX3N0YWJsZSAmJiB0aGlzLndhaXQoXCJ3YWl0aW5nUGFyZW50XCIpO1xuICAgICAgICAgICAgICAgIHBhcmVudC5vbihfLl9wYXJlbnRMaXN0ID0ge1xuICAgICAgICAgICAgICAgICAgICAnc3RhYmxlJyAgOiBzID0+IHRoaXMucmVsZWFzZShcIndhaXRpbmdQYXJlbnRcIiksXG4gICAgICAgICAgICAgICAgICAgICd1bnN0YWJsZSc6IHMgPT4gdGhpcy53YWl0KFwid2FpdGluZ1BhcmVudFwiKSxcbiAgICAgICAgICAgICAgICAgICAgJ3VwZGF0ZScgIDogcyA9PiB0aGlzLl9wcm9wYWcoKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcGFyZW50Lm9uKF8uX3BhcmVudExpc3QgPSB7XG4gICAgICAgICAgICAgICAgICAgICd1cGRhdGUnOiBzID0+IHRoaXMuX3Byb3BhZygpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyB0aGlzLnJlZ2lzdGVyKHBhcmVudC5fX3Njb3BlLCBzdGF0ZSwgZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICB0aGlzLnJlZ2lzdGVyKHN0b3Jlc01hcCwgc3RhdGUsIGRhdGEpO1xuICAgICAgICB0aGlzLl9fbG9ja3MuYWxsLS07XG4gICAgICAgIHRoaXMuX3N0YWJsZSA9ICF0aGlzLl9fbG9ja3MuYWxsO1xuICAgICAgICBcbiAgICAgICAgaWYgKCBwYXJlbnQgKSB7XG4gICAgICAgICAgICBwYXJlbnQuX2FkZENoaWxkKHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0aGlzLnJlc3RvcmUoc25hcHNob3QpO1xuICAgICAgICBcbiAgICAgICAgaWYgKCBhdXRvRGVzdHJveSApXG4gICAgICAgICAgICBzZXRUaW1lb3V0KFxuICAgICAgICAgICAgICAgIHRtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXRhaW4oXCJhdXRvRGVzdHJveVwiKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNwb3NlKFwiYXV0b0Rlc3Ryb3lcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKVxuICAgICAgICBcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBNb3VudCB0aGUgc3RvcmVzIGluIHN0b3Jlc0xpc3QsIGluIHRoaXMgc2NvcGUgb3IgaW4gaXRzIHBhcmVudHMgb3IgbWl4ZWQgc2NvcGVzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc3RvcmVzTGlzdCB7c3RyaW5nfHN0b3JlUmVmfSBTdG9yZSBuYW1lLCBBcnJheSBvZiBTdG9yZSBuYW1lcywgb3IgUmVzY29wZVxuICAgICAqICAgICBzdG9yZSByZWYgZnJvbSBTdG9yZTo6YXMgb3IgU3RvcmU6YXNcbiAgICAgKiBAcGFyYW0gc3RhdGVcbiAgICAgKiBAcGFyYW0gZGF0YVxuICAgICAqIEByZXR1cm5zIHtTY29wZX1cbiAgICAgKi9cbiAgICBtb3VudCggc3RvcmVzTGlzdCwgc25hcHNob3QsIHN0YXRlLCBkYXRhICkge1xuICAgICAgICBpZiAoIGlzLmFycmF5KHN0b3Jlc0xpc3QpICkge1xuICAgICAgICAgICAgc3RvcmVzTGlzdC5mb3JFYWNoKGsgPT4gdGhpcy5fbW91bnQoaywgc25hcHNob3QsIHN0YXRlLCBkYXRhKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9tb3VudCguLi5hcmd1bWVudHMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBcbiAgICBfbW91bnQoIGlkLCBzbmFwc2hvdCwgc3RhdGUsIGRhdGEgKSB7XG4gICAgICAgIGxldCByZWYsIHNuYXA7XG4gICAgICAgIFxuICAgICAgICByZWYgPSB0aGlzLnBhcnNlUmVmKGlkKVxuICAgICAgICBcbiAgICAgICAgaWYgKCBpZCA9PSBcIiRwYXJlbnRcIiApIHJldHVybjtcbiAgICAgICAgaWYgKCAhdGhpcy5fLl9zY29wZVsgcmVmLnN0b3JlSWQgXSApIHsvL2FzayBtaXhlZCB8fCBwYXJlbnRcbiAgICAgICAgICAgIGlmICggdGhpcy5fLl9taXhlZC5yZWR1Y2VSaWdodCgoIG1vdW50ZWQsIGN0eCApID0+ICggbW91bnRlZCB8fCBjdHguX21vdW50KGlkLCBzbmFwc2hvdCwgc3RhdGUsIGRhdGEpICksIGZhbHNlKSB8fFxuICAgICAgICAgICAgICAgICAhdGhpcy5wYXJlbnQgKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcmVudC5fbW91bnQoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxldCBzdG9yZSA9IHRoaXMuXy5fc2NvcGVbIHJlZi5zdG9yZUlkIF0sIHRhc2tRdWV1ZSA9IFtdO1xuICAgICAgICAgICAgaWYgKCBpcy5yc1N0b3JlKHN0b3JlLnByb3RvdHlwZSkgKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fLl9zY29wZVsgcmVmLnN0b3JlSWQgXSA9IG5ldyBzdG9yZSh0aGlzLCB7XG4gICAgICAgICAgICAgICAgICAgIC8vc25hcHNob3QsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IHJlZi5zdG9yZUlkLFxuICAgICAgICAgICAgICAgICAgICBzdGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgZGF0YVxuICAgICAgICAgICAgICAgIH0sIHRhc2tRdWV1ZSk7XG4gICAgICAgICAgICAgICAgd2hpbGUgKCB0YXNrUXVldWUubGVuZ3RoICkgdGFza1F1ZXVlLnNoaWZ0KCkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKCBpcy5yc1Njb3BlKHN0b3JlLnByb3RvdHlwZSkgKSB7XG4gICAgICAgICAgICAgICAgc3RvcmUgPSB0aGlzLl8uX3Njb3BlWyByZWYuc3RvcmVJZCBdID0gbmV3IHN0b3JlKHsgJHBhcmVudDogdGhpcyB9LCB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiB0aGlzLl9pZCArICcvJyArIHJlZi5zdG9yZUlkLFxuICAgICAgICAgICAgICAgICAgICAvL2F1dG9EZXN0cm95OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgIC8vcGFyZW50OiB0aGlzXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgLy90aGlzLl8uX3Njb3BlWyByZWYuc3RvcmVJZCBdLnJldGFpbihcInNjb3BlZENoaWxkU2NvcGVcIik7XG4gICAgICAgICAgICAgICAgLy90aGlzLl93YXRjaFN0b3JlKHJlZi5zdG9yZUlkKTtcbiAgICAgICAgICAgICAgICBpZiAoIHJlZi5wYXRoLmxlbmd0aCA+IDEgKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLl8uX3Njb3BlWyByZWYuc3RvcmVJZCBdLm1vdW50KHJlZi5wYXRoLnNsaWNlKDEpLmpvaW4oJy4nKSwgc25hcHNob3QsIHN0YXRlLCBkYXRhKVxuICAgICAgICAgICAgICAgIC8vZWxzZSByZXR1cm4gdGhpcy5fLl9zY29wZVsgcmVmLnN0b3JlSWQgXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vaWYgKCBzbmFwc2hvdCAmJiBpcy5yc1Njb3BlKHN0b3JlKSAmJiAoIHNuYXAgPSBrZXlXYWxrbkdldChzbmFwc2hvdCxcbiAgICAgICAgICAgIC8vIHN0b3JlLl9pZCkgKSAmJiBzbmFwWyAnLycgXSApIHsgcmV0dXJuIHN0b3JlLm1vdW50KE9iamVjdC5rZXlzKHNuYXBbICcvJ1xuICAgICAgICAgICAgLy8gXSkpIH0gZWxzZSBpZiAoIHNuYXBzaG90ICYmIGlzLnJzU3RvcmUoc3RvcmUpICkgc3RvcmUucmVzdG9yZSgpO1xuICAgICAgICAgICAgaWYgKCBpcy5yc1N0b3JlKHN0b3JlKSApIHtcbiAgICAgICAgICAgICAgICBpZiAoIHN0YXRlICE9PSB1bmRlZmluZWQgJiYgZGF0YSA9PT0gdW5kZWZpbmVkIClcbiAgICAgICAgICAgICAgICAgICAgc3RvcmUuc2V0U3RhdGUoc3RhdGUpO1xuICAgICAgICAgICAgICAgIGVsc2UgaWYgKCBzdGF0ZSAhPT0gdW5kZWZpbmVkIClcbiAgICAgICAgICAgICAgICAgICAgc3RvcmUuc3RhdGUgPSBzdGF0ZTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAoIGRhdGEgIT09IHVuZGVmaW5lZCApXG4gICAgICAgICAgICAgICAgICAgIHN0b3JlLnB1c2goZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl93YXRjaFN0b3JlKHJlZi5zdG9yZUlkKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIHJldHVybiB0aGlzLl8uX3Njb3BlWyByZWYuc3RvcmVJZCBdO1xuICAgIH1cbiAgICBcbiAgICBfd2F0Y2hTdG9yZSggaWQsIHN0YXRlLCBkYXRhICkge1xuICAgICAgICBpZiAoICF0aGlzLl8uX2xpc3RlbmluZ1sgaWQgXSAmJiAhaXMuZm4odGhpcy5fLl9zY29wZVsgaWQgXSkgKSB7XG4gICAgICAgICAgICAvL2lmICggaXMucnNTdG9yZSh0aGlzLl8uX3Njb3BlWyBpZCBdKSApIHtcbiAgICAgICAgICAgICF0aGlzLl8uX3Njb3BlWyBpZCBdLl9hdXRvRGVzdHJveSAmJiB0aGlzLl8uX3Njb3BlWyBpZCBdLnJldGFpbihcInNjb3BlZFwiKTtcbiAgICAgICAgICAgICF0aGlzLl8uX3Njb3BlWyBpZCBdLmlzU3RhYmxlKCkgJiYgdGhpcy53YWl0KGlkKTtcbiAgICAgICAgICAgIHRoaXMuXy5fc2NvcGVbIGlkIF0ub24oXG4gICAgICAgICAgICAgICAgdGhpcy5fLl9saXN0ZW5pbmdbIGlkIF0gPSB7XG4gICAgICAgICAgICAgICAgICAgICdkZXN0cm95JyA6IHMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuXy5fbGlzdGVuaW5nWyBpZCBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fLl9zY29wZVsgaWQgXSA9IHRoaXMuXy5fc2NvcGVbIGlkIF0uY29uc3RydWN0b3I7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICd1cGRhdGUnICA6IHMgPT4gdGhpcy5wcm9wYWcoKSxcbiAgICAgICAgICAgICAgICAgICAgJ3N0YWJsZScgIDogcyA9PiB0aGlzLnJlbGVhc2UoaWQpLFxuICAgICAgICAgICAgICAgICAgICAndW5zdGFibGUnOiBzID0+IHRoaXMud2FpdChpZClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogTWl4IHRhcmdldEN0eCBvbiB0aGlzIHNjb3BlXG4gICAgICogTWl4ZWQgc2NvcGUgcGFyZW50cyBhcmUgTk9UIG1hcHBlZFxuICAgICAqIEBwYXJhbSB0YXJnZXRDdHhcbiAgICAgKi9cbiAgICBtaXhpbiggdGFyZ2V0Q3R4ICkge1xuICAgICAgICBsZXQgcGFyZW50ID0gdGhpcy5wYXJlbnQsIGxpc3RzO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fLl9taXhlZC5wdXNoKHRhcmdldEN0eClcbiAgICAgICAgdGFyZ2V0Q3R4LnJldGFpbihcIm1peGVkVG9cIik7XG4gICAgICAgIGlmICggIXRhcmdldEN0eC5fc3RhYmxlIClcbiAgICAgICAgICAgIHRoaXMud2FpdCh0YXJnZXRDdHguX2lkKTtcbiAgICAgICAgdGhpcy5fLl9taXhlZExpc3QucHVzaChsaXN0cyA9IHtcbiAgICAgICAgICAgICdzdGFibGUnICA6IHMgPT4gdGhpcy5yZWxlYXNlKHRhcmdldEN0eC5faWQpLFxuICAgICAgICAgICAgJ3Vuc3RhYmxlJzogcyA9PiB0aGlzLndhaXQodGFyZ2V0Q3R4Ll9pZCksXG4gICAgICAgICAgICAndXBkYXRlJyAgOiBzID0+IHRoaXMuX3Byb3BhZygpXG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgLy90aGlzLmFjdGlvbnMgPSB7fTtcbiAgICAgICAgLy90aGlzLnN0b3JlcyAgPSB7fTtcbiAgICAgICAgLy90aGlzLnN0YXRlICAgPSB7fTtcbiAgICAgICAgLy90aGlzLmRhdGEgICAgPSB7fTtcbiAgICAgICAgdGFyZ2V0Q3R4Lm9uKGxpc3RzKTtcbiAgICAgICAgXG4gICAgICAgIC8vIHJlc2V0IHByb3Rvc1xuICAgICAgICAvLyBwdXNoIG5ldyBwcm90byB3aXRoIHBhcmVudFxuICAgICAgICBfX3Byb3RvX19wdXNoKHRoaXMsICdhY3Rpb25zJywgcGFyZW50KTtcbiAgICAgICAgX19wcm90b19fcHVzaCh0aGlzLCAnc3RvcmVzJywgcGFyZW50KTtcbiAgICAgICAgX19wcm90b19fcHVzaCh0aGlzLCAnc3RhdGUnLCBwYXJlbnQpO1xuICAgICAgICBfX3Byb3RvX19wdXNoKHRoaXMsICdkYXRhJywgcGFyZW50KTtcbiAgICAgICAgLy8gcHJpbnQgbG9jYWx6IGFjY2Vzc29yc1xuICAgICAgICB0aGlzLnJlbGluayh0aGlzLl8uX3Njb3BlLCB0aGlzLCBmYWxzZSwgdHJ1ZSk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl8uX21peGVkLmZvckVhY2goXG4gICAgICAgICAgICBjdHggPT4ge1xuICAgICAgICAgICAgICAgIC8vIHB1c2ggcHJvdG9zXG4gICAgICAgICAgICAgICAgX19wcm90b19fcHVzaCh0aGlzLCAnYWN0aW9ucycpO1xuICAgICAgICAgICAgICAgIF9fcHJvdG9fX3B1c2godGhpcywgJ3N0b3JlcycpO1xuICAgICAgICAgICAgICAgIF9fcHJvdG9fX3B1c2godGhpcywgJ3N0YXRlJyk7XG4gICAgICAgICAgICAgICAgX19wcm90b19fcHVzaCh0aGlzLCAnZGF0YScpO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RvcmVzLl9fb3JpZ2luID0gXCJtaXhlZCBcIiArIGN0eC5faWQ7XG4gICAgICAgICAgICAgICAgLy8gd3JpdGUgbWl4ZWQgYWNjZXNzb3JzXG4gICAgICAgICAgICAgICAgY3R4LnJlbGluayhjdHguXy5fc2NvcGUsIHRoaXMsIHRydWUsIHRydWUpXG4gICAgICAgICAgICB9XG4gICAgICAgIClcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogUmVnaXN0ZXIgc3RvcmVzIGluIHN0b3Jlc01hcCAmIGxpbmsgdGhlbSBpbiB0aGUgcHJvdG9zXG4gICAgICogQHBhcmFtIHN0b3Jlc01hcFxuICAgICAqIEBwYXJhbSBzdGF0ZVxuICAgICAqIEBwYXJhbSBkYXRhXG4gICAgICovXG4gICAgcmVnaXN0ZXIoIHN0b3Jlc01hcCwgc3RhdGUgPSB7fSwgZGF0YSA9IHt9ICkge1xuICAgICAgICB0aGlzLnJlbGluayhzdG9yZXNNYXAsIHRoaXMsIGZhbHNlLCBmYWxzZSk7XG4gICAgICAgIE9iamVjdC5rZXlzKHN0b3Jlc01hcCkuZm9yRWFjaChcbiAgICAgICAgICAgIGlkID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIGlkID09IFwiJHBhcmVudFwiICkgcmV0dXJuO1xuICAgICAgICAgICAgICAgIGlmICggc3RvcmVzTWFwWyBpZCBdLnNpbmdsZXRvbiB8fCAoIGlzLmZuKHN0b3Jlc01hcFsgaWQgXSkgJiYgKCBzdGF0ZVsgaWQgXSB8fCBkYXRhWyBpZCBdICkgKSApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbW91bnQoaWQsIHVuZGVmaW5lZCwgc3RhdGVbIGlkIF0sIGRhdGFbIGlkIF0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKCBzdGF0ZVsgaWQgXSB8fCBkYXRhWyBpZCBdICkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIGRhdGFbIGlkIF0gKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIHN0YXRlWyBpZCBdIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3Jlc1sgaWQgXS5zdGF0ZSA9IHN0YXRlWyBpZCBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9yZXNbIGlkIF0ucHVzaChkYXRhWyBpZCBdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICggc3RhdGVbIGlkIF0gKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3Jlc1sgaWQgXS5zZXRTdGF0ZShzdGF0ZVsgaWQgXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3dhdGNoU3RvcmUoaWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgICAgICBcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogTWFwIHNyY0N0eCBzdG9yZSdzIG9uIHRhcmdldEN0eCBoZWFkZXJzIHByb3RvJ3NcbiAgICAgKiBAcGFyYW0gc3JjQ3R4XG4gICAgICogQHBhcmFtIHRhcmdldEN0eFxuICAgICAqIEBwYXJhbSBzdGF0ZVxuICAgICAqIEBwYXJhbSBkYXRhXG4gICAgICovXG4gICAgcmVsaW5rKCBzcmNDdHgsIHRhcmdldEN0eCA9IHRoaXMsIGV4dGVybmFsLCBmb3JjZSApIHtcbiAgICAgICAgbGV0IGxjdHggPSB0YXJnZXRDdHguXy5zdG9yZXMucHJvdG90eXBlO1xuICAgICAgICBPYmplY3Qua2V5cyhzcmNDdHgpXG4gICAgICAgICAgICAgIC5mb3JFYWNoKFxuICAgICAgICAgICAgICAgICAgaWQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGlmICggIWZvcmNlICYmIHRhcmdldEN0eC5fLl9zY29wZVsgaWQgXSA9PT0gc3JjQ3R4WyBpZCBdIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRDdHguXy5fc2NvcGVbIGlkIF0gJiYgKCB0YXJnZXRDdHguXy5fc2NvcGVbIGlkIF0uY29uc3RydWN0b3IgPT09IHNyY0N0eFsgaWQgXSApIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgIGlmICggIWZvcmNlICYmIHRhcmdldEN0eC5fLl9zY29wZVsgaWQgXSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCAhZXh0ZXJuYWwgJiYgIWlzLmZuKHRhcmdldEN0eC5fLl9zY29wZVsgaWQgXSkgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmluZm8oXCJSZXNjb3BlIFN0b3JlIDogXCIsIGlkLCBcIiBhbHJlYWR5IGV4aXN0IGluIHRoaXMgc2NvcGUgISAoIEhvdCBzd2l0Y2hpbmcgdGhlIHN0b3JlIClcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdG1wICAgICAgICAgICAgICAgICAgPSB0YXJnZXRDdHguXy5fc2NvcGVbIGlkIF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRDdHguXy5fc2NvcGVbIGlkIF0gPSB0YXJnZXRDdHguXy5fc2NvcGVbIGlkIF0uY29uc3RydWN0b3I7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9tb3VudChpZCwgbnVsbCwgdG1wLnN0YXRlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRtcC5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3RhcmdldEN0eC5fLl9zY29wZVsgaWQgXS5fX3Byb3RvX18gPSB0bXAuX19wcm90b19fO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmICggIWV4dGVybmFsICYmIGlzLmZuKHRhcmdldEN0eC5fLl9zY29wZVsgaWQgXSkgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0Q3R4Ll8uX3Njb3BlWyBpZCBdID0gc3JjQ3R4WyBpZCBdO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICggIWZvcmNlICYmICFleHRlcm5hbCApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuXy5fc2NvcGVbIGlkIF0gPSBzcmNDdHhbIGlkIF07XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBsY3R4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW51bWVyYWJsZSAgOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0ICAgICAgICAgOiAoKSA9PiB0aGlzLl8uX3Njb3BlWyBpZCBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgIGlmICggaWQgPT0gXCIkcGFyZW50XCIgKSByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRDdHguXy5zdGF0ZS5wcm90b3R5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnVtZXJhYmxlICA6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXQgICAgICAgICA6ICgpID0+ICggdGhpcy5fLl9zY29wZVsgaWQgXSAmJiB0aGlzLl8uX3Njb3BlWyBpZCBdLnN0YXRlICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXQgICAgICAgICA6ICggdiApID0+ICggdGhpcy5fbW91bnQoaWQsIHVuZGVmaW5lZCwgdikgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldEN0eC5fLmRhdGEucHJvdG90eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW51bWVyYWJsZSAgOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0ICAgICAgICAgOiAoKSA9PiAoIHRoaXMuXy5fc2NvcGVbIGlkIF0gJiYgdGhpcy5fLl9zY29wZVsgaWQgXS5kYXRhICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXQgICAgICAgICA6ICggdiApID0+ICggdGhpcy5fbW91bnQoaWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB2KSApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgIGxldCBhY3Rpb25zICAgICAgID0gc3JjQ3R4WyBpZCBdIGluc3RhbmNlb2YgU2NvcGUuU3RvcmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gc3JjQ3R4WyBpZCBdLmNvbnN0cnVjdG9yLmFjdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogc3JjQ3R4WyBpZCBdLmFjdGlvbnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZUFjdGlvbnMgPSB0YXJnZXRDdHguXy5hY3Rpb25zLnByb3RvdHlwZTtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoIGlzLnJzU2NvcGUodGhpcy5fLl9zY29wZVsgaWQgXS5wcm90b3R5cGUpIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbW91bnQoaWQpO1xuICAgICAgICAgICAgICAgICAgICAgIGlmICggaXMucnNTY29wZSh0aGlzLl8uX3Njb3BlWyBpZCBdKSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlQWN0aW9uc1sgaWQgXSA9IHRoaXMuXy5fc2NvcGVbIGlkIF0uYWN0aW9ucztcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKCAhaXMucnNTdG9yZSh0aGlzLl8uX3Njb3BlWyBpZCBdKSAmJiAhaXMucnNTdG9yZSh0aGlzLl8uX3Njb3BlWyBpZCBdLnByb3RvdHlwZSkgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgYWN0aW9ucyAmJlxuICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKGFjdGlvbnMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZvckVhY2goXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICggYWN0ICkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBhY3RpdmVBY3Rpb25zLmhhc093blByb3BlcnR5KGFjdCkgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZUFjdGlvbnNbIGFjdCBdLl9fdGFyZ2V0U3RvcmVzKys7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVBY3Rpb25zWyBhY3QgXSAgICAgICAgICAgICAgICA9IHRoaXMuZGlzcGF0Y2guYmluZCh0aGlzLCBhY3QpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZUFjdGlvbnNbIGFjdCBdLl9fdGFyZ2V0U3RvcmVzID0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgKVxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBCaW5kIHN0b3JlcyBmcm9tIHRoaXMgc2NvcGUsIGhpcyBwYXJlbnRzIGFuZCBtaXhlZCBzY29wZVxuICAgICAqXG4gICAgICogQHBhcmFtIG9iaiB7UmVhY3QuQ29tcG9uZW50fFN0b3JlfGZ1bmN0aW9ufVxuICAgICAqIEBwYXJhbSBrZXkge3N0cmluZ30gc3RvcmVzIGtleXMgdG8gYmluZCB1cGRhdGVzXG4gICAgICogQHBhcmFtIGFzXG4gICAgICogQHBhcmFtIHNldEluaXRpYWwge2Jvb2x9IGZhbHNlIHRvIG5vdCBwcm9wYWcgaW5pdGlhbCB2YWx1ZSAoZGVmYXVsdCA6IHRydWUpXG4gICAgICovXG4gICAgYmluZCggb2JqLCBrZXksIGFzLCBzZXRJbml0aWFsID0gdHJ1ZSwgcmV2TWFwID0ge30gKSB7XG4gICAgICAgIGxldCBsYXN0UmV2cywgZGF0YSwgcmVmS2V5cztcbiAgICAgICAgaWYgKCBrZXkgJiYgIWlzLmFycmF5KGtleSkgKVxuICAgICAgICAgICAga2V5ID0gWyBrZXkgXTtcbiAgICAgICAgXG4gICAgICAgIGlmICggYXMgPT09IGZhbHNlIHx8IGFzID09PSB0cnVlICkge1xuICAgICAgICAgICAgc2V0SW5pdGlhbCA9IGFzO1xuICAgICAgICAgICAgYXMgICAgICAgICA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJlZktleXMgPSBrZXlcbiAgICAgICAgICAgIC5tYXAoaWQgPT4gKCBpcy5zdHJpbmcoaWQpID8gaWQgOiBpZC5uYW1lICkpXG4gICAgICAgICAgICAubWFwKGlkID0+ICggdGhpcy5wYXJzZVJlZihpZCkgKSk7XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgdGhpcy5fLmZvbGxvd2Vycy5wdXNoKFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIG9iaixcbiAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgYXMgfHwgdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIGxhc3RSZXZzID0gcmVmS2V5cy5yZWR1Y2UoKCByZXZzLCByZWYgKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldnNbIHJlZi5zdG9yZUlkIF0gPSByZXZzWyByZWYuc3RvcmVJZCBdIHx8IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldiA6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICByZWZzOiBbXVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICByZXZzWyByZWYuc3RvcmVJZCBdLnJlZnMucHVzaChyZWYpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmV2cztcbiAgICAgICAgICAgICAgICB9LCByZXZNYXApXG4gICAgICAgICAgICBdKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMubW91bnQoa2V5KTtcbiAgICAgICAgdGhpcy5yZXRhaW5TdG9yZXMoT2JqZWN0LmtleXMobGFzdFJldnMpLCAnbGlzdGVuZXJzJyk7XG4gICAgICAgIFxuICAgICAgICBpZiAoIHNldEluaXRpYWwgJiYgdGhpcy5fc3RhYmxlICkge1xuICAgICAgICAgICAgZGF0YSA9IHRoaXMuZ2V0VXBkYXRlcyhsYXN0UmV2cyk7XG4gICAgICAgICAgICBpZiAoICFkYXRhICkgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICBpZiAoIHR5cGVvZiBvYmogIT0gXCJmdW5jdGlvblwiICkge1xuICAgICAgICAgICAgICAgIGlmICggYXMgKSBvYmouc2V0U3RhdGUoeyBbIGFzIF06IGRhdGEgfSk7XG4gICAgICAgICAgICAgICAgZWxzZSBvYmouc2V0U3RhdGUoZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBvYmooZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIFVuIGJpbmQgdGhpcyBzY29wZSBvZmYgdGhlIGdpdmVuIGNvbXBvbmVudC1rZXlzXG4gICAgICogQHBhcmFtIG9ialxuICAgICAqIEBwYXJhbSBrZXlcbiAgICAgKiBAcmV0dXJucyB7QXJyYXkuPCo+fVxuICAgICAqL1xuICAgIHVuQmluZCggb2JqLCBrZXksIGFzICkge1xuICAgICAgICB2YXIgZm9sbG93ZXJzID0gdGhpcy5fLmZvbGxvd2VycyxcbiAgICAgICAgICAgIGkgICAgICAgICA9IGZvbGxvd2VycyAmJiBmb2xsb3dlcnMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGZvbGxvd2VycyAmJiBpLS0gKVxuICAgICAgICAgICAgaWYgKCBmb2xsb3dlcnNbIGkgXVsgMCBdID09PSBvYmogJiZcbiAgICAgICAgICAgICAgICAgKCAnJyArIGZvbGxvd2Vyc1sgaSBdWyAxIF0gKSA9PSAoICcnICsga2V5ICkgJiZcbiAgICAgICAgICAgICAgICAgZm9sbG93ZXJzWyBpIF1bIDIgXSA9PSBhcyApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3Bvc2VTdG9yZXMoT2JqZWN0LmtleXMoZm9sbG93ZXJzWyBpIF1bIDMgXSksICdsaXN0ZW5lcnMnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZm9sbG93ZXJzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogTW91bnQgdGhlIHN0b3JlcyBpbiBzdG9yZXNMaXN0IGZyb20gdGhpcyBzY29wZSwgaXRzIHBhcmVudHMgYW5kIG1peGVkIHNjb3BlXG4gICAgICogQmluZCB0aGVtIHRvICd0bydcbiAgICAgKiBIb29rICd0bycgc28gaXQgd2lsbCBhdXRvIHVuYmluZCBvbiAnZGVzdHJveScgb3IgJ2NvbXBvbmVudFdpbGxVbm1vdW50J1xuICAgICAqIEBwYXJhbSB0b1xuICAgICAqIEBwYXJhbSBzdG9yZXNMaXN0XG4gICAgICogQHBhcmFtIGJpbmRcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSBJbml0aWFsIG91dHB1dHMgb2YgdGhlIHN0b3JlcyBpbiAnc3RvcmVzTGlzdCdcbiAgICAgKi9cbiAgICBtYXAoIHRvLCBzdG9yZXNMaXN0LCBiaW5kID0gdHJ1ZSwgcmV2TWFwICkge1xuICAgICAgICBsZXQgU3RvcmUgICA9IHRoaXMuY29uc3RydWN0b3IuU3RvcmU7XG4gICAgICAgIHN0b3Jlc0xpc3QgID0gaXMuYXJyYXkoc3RvcmVzTGlzdCkgPyBzdG9yZXNMaXN0IDogWyBzdG9yZXNMaXN0IF07XG4gICAgICAgIGxldCByZWZMaXN0ID0gc3RvcmVzTGlzdC5tYXAodGhpcy5wYXJzZVJlZik7XG4gICAgICAgIHRoaXMubW91bnQoc3RvcmVzTGlzdCk7XG4gICAgICAgIGlmICggYmluZCAmJiB0byBpbnN0YW5jZW9mIFN0b3JlICkge1xuICAgICAgICAgICAgU3RvcmUubWFwKHRvLCBzdG9yZXNMaXN0LCB0aGlzLCB0aGlzLCBmYWxzZSlcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICggYmluZCApIHtcbiAgICAgICAgICAgIHRoaXMuYmluZCh0bywgc3RvcmVzTGlzdCwgdW5kZWZpbmVkLCBmYWxzZSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGxldCBtaXhlZENXVW5tb3VudCxcbiAgICAgICAgICAgICAgICB1bk1vdW50S2V5ID0gdG8uaXNSZWFjdENvbXBvbmVudCA/IFwiY29tcG9uZW50V2lsbFVubW91bnRcIiA6IFwiZGVzdHJveVwiO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoIHRvLmhhc093blByb3BlcnR5KHVuTW91bnRLZXkpICkge1xuICAgICAgICAgICAgICAgIG1peGVkQ1dVbm1vdW50ID0gdG9bIHVuTW91bnRLZXkgXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdG9bIHVuTW91bnRLZXkgXSA9ICggLi4uYXJneiApID0+IHtcbiAgICAgICAgICAgICAgICBkZWxldGUgdG9bIHVuTW91bnRLZXkgXTtcbiAgICAgICAgICAgICAgICBpZiAoIG1peGVkQ1dVbm1vdW50IClcbiAgICAgICAgICAgICAgICAgICAgdG9bIHVuTW91bnRLZXkgXSA9IG1peGVkQ1dVbm1vdW50O1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHRoaXMudW5CaW5kKHRvLCBzdG9yZXNMaXN0KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdG9bIHVuTW91bnRLZXkgXSAmJiB0b1sgdW5Nb3VudEtleSBdKC4uLmFyZ3opO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJldk1hcCAmJiB0aGlzLmdldFVwZGF0ZXMocmV2TWFwKSB8fCByZWZMaXN0LnJlZHVjZSgoIGRhdGEsIHJlZiApID0+IHtcbiAgICAgICAgICAgIHdhbGtuU2V0KGRhdGEsIHJlZi5hbGlhcyB8fCByZWYucGF0aCwgdGhpcy5yZXRyaWV2ZShyZWYucGF0aCkpXG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfSwge30pO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBHZXQgY3VycmVudCBkYXRhIHZhbHVlIGZyb20ganNvbiBwYXRoXG4gICAgICogQHBhcmFtIHBhdGhcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfCp9XG4gICAgICovXG4gICAgcmV0cmlldmUoIHBhdGggPSBcIlwiICkge1xuICAgICAgICBwYXRoID0gaXMuc3RyaW5nKHBhdGgpID8gcGF0aC5zcGxpdCgnLicpIDogcGF0aDtcbiAgICAgICAgcmV0dXJuIHBhdGggJiZcbiAgICAgICAgICAgICAgIHRoaXMuc3RvcmVzWyBwYXRoWyAwIF0gXSAmJlxuICAgICAgICAgICAgICAgdGhpcy5zdG9yZXNbIHBhdGhbIDAgXSBdLnJldHJpZXZlICYmXG4gICAgICAgICAgICAgICB0aGlzLnN0b3Jlc1sgcGF0aFsgMCBdIF0ucmV0cmlldmUocGF0aC5zbGljZSgxKSk7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIEdldCBjdXJyZW50IHN0b3JlIGZyb20ganNvbiBwYXRoXG4gICAgICogQHBhcmFtIHBhdGhcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfCp9XG4gICAgICovXG4gICAgcmV0cmlldmVTdG9yZSggcGF0aCA9IFwiXCIgKSB7XG4gICAgICAgIHBhdGggPSBpcy5zdHJpbmcocGF0aCkgPyBwYXRoLnNwbGl0KCcuJykgOiBwYXRoO1xuICAgICAgICByZXR1cm4gcGF0aFxuICAgICAgICAgICAgICAgJiYgcGF0aC5sZW5ndGhcbiAgICAgICAgICAgICAgICYmIChcbiAgICAgICAgICAgICAgIHBhdGgubGVuZ3RoICE9IDEgJiYgdGhpcy5zdG9yZXNbIHBhdGhbIDAgXSBdLnJldHJpZXZlU3RvcmVcbiAgICAgICAgICAgICAgID8gdGhpcy5zdG9yZXNbIHBhdGhbIDAgXSBdLnJldHJpZXZlU3RvcmUocGF0aC5zbGljZSgxKSlcbiAgICAgICAgICAgICAgIDogcGF0aC5sZW5ndGggPT0gMSAmJiB0aGlzLnN0b3Jlc1sgcGF0aFsgMCBdIF1cbiAgICAgICAgICAgICAgICk7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIEdldCBvciB1cGRhdGUgc3RvcmVzUmV2TWFwJ3MgcmV2aXNpb25zXG4gICAgICogQHBhcmFtIHN0b3Jlc1Jldk1hcFxuICAgICAqIEBwYXJhbSBsb2NhbFxuICAgICAqIEByZXR1cm5zIHt7fX1cbiAgICAgKi9cbiAgICBnZXRTdG9yZXNSZXZzKCBzdG9yZXNSZXZNYXAgPSB7fSwgbG9jYWwgKSB7XG4gICAgICAgIGxldCBjdHggPSB0aGlzLl8uX3Njb3BlO1xuICAgICAgICBpZiAoICFzdG9yZXNSZXZNYXAgKSB7XG4gICAgICAgICAgICBzdG9yZXNSZXZNYXAgPSB7fTtcbiAgICAgICAgfVxuICAgICAgICBPYmplY3Qua2V5cyhjdHgpLmZvckVhY2goXG4gICAgICAgICAgICBpZCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCBpZCA9PSBcIiRwYXJlbnRcIiApIHJldHVybjtcbiAgICAgICAgICAgICAgICBpZiAoICFpcy5mbihjdHhbIGlkIF0pXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0b3Jlc1Jldk1hcFsgaWQgXSA9IGN0eFsgaWQgXS5fcmV2O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICggIXN0b3Jlc1Jldk1hcC5oYXNPd25Qcm9wZXJ0eShpZCkgKVxuICAgICAgICAgICAgICAgICAgICBzdG9yZXNSZXZNYXBbIGlkIF0gPSBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICBpZiAoICFsb2NhbCApIHtcbiAgICAgICAgICAgIHRoaXMuXy5fbWl4ZWQucmVkdWNlKCggdXBkYXRlZCwgY3R4ICkgPT4gKCBjdHguZ2V0U3RvcmVzUmV2cyhzdG9yZXNSZXZNYXApLCBzdG9yZXNSZXZNYXAgKSwgc3RvcmVzUmV2TWFwKTtcbiAgICAgICAgICAgIHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LmdldFN0b3Jlc1JldnMoc3RvcmVzUmV2TWFwKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3RvcmVzUmV2TWFwO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBHZXQgdXBkYXRlZCBvdXRwdXQgYmFzaW5nIHN0b3Jlc1Jldk1hcCdzIHJldmlzaW9ucy5cbiAgICAgKiBJZiBhIHN0b3JlIGluICdzdG9yZXNSZXZNYXAnIHdhcyB1cGRhdGVkOyBhZGQgaXQgdG8gJ291dHB1dCcgJiB1cGRhdGUgc3RvcmVzUmV2TWFwXG4gICAgICogQHBhcmFtIHN0b3Jlc1Jldk1hcFxuICAgICAqIEBwYXJhbSBvdXRwdXRcbiAgICAgKiBAcGFyYW0gdXBkYXRlZFxuICAgICAqIEByZXR1cm5zIHsqfHt9fVxuICAgICAqL1xuICAgIGdldFJlZnNVcGRhdGVzKCByZWZzLCByZXZNYXAsIG91dHB1dCApIHtcbiAgICAgICAgXG4gICAgICAgIHJldk1hcCA9IHJldk1hcCB8fCByZWZzXG4gICAgICAgICAgICAubWFwKGlkID0+ICggaXMuc3RyaW5nKGlkKSA/IGlkIDogaWQubmFtZSApKVxuICAgICAgICAgICAgLm1hcChpZCA9PiAoIHRoaXMucGFyc2VSZWYoaWQpICkpXG4gICAgICAgICAgICAucmVkdWNlKCggcmV2cywgcmVmICkgPT4ge1xuICAgICAgICAgICAgICAgIHJldnNbIHJlZi5zdG9yZUlkIF0gPSByZXZzWyByZWYuc3RvcmVJZCBdIHx8IHtcbiAgICAgICAgICAgICAgICAgICAgcmV2IDogMCxcbiAgICAgICAgICAgICAgICAgICAgcmVmczogW11cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHJldnNbIHJlZi5zdG9yZUlkIF0ucmVmcy5wdXNoKHJlZik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJldnM7XG4gICAgICAgICAgICB9LCB7fSk7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gdGhpcy5nZXRVcGRhdGVzKHJldk1hcCwgb3V0cHV0KVxuICAgICAgICBcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogR2V0IG9yIHVwZGF0ZSBvdXRwdXQgYmFzaW5nIHN0b3Jlc1Jldk1hcCdzIHJldmlzaW9ucy5cbiAgICAgKiBJZiBhIHN0b3JlIGluICdzdG9yZXNSZXZNYXAnIHdhcyB1cGRhdGVkOyBhZGQgaXQgdG8gJ291dHB1dCcgJiB1cGRhdGUgc3RvcmVzUmV2TWFwXG4gICAgICogQHBhcmFtIHN0b3Jlc1Jldk1hcFxuICAgICAqIEBwYXJhbSBvdXRwdXRcbiAgICAgKiBAcGFyYW0gdXBkYXRlZFxuICAgICAqIEByZXR1cm5zIHsqfHt9fVxuICAgICAqL1xuICAgIGdldFVwZGF0ZXMoIHN0b3Jlc1Jldk1hcCwgb3V0cHV0LCB1cGRhdGVkICkge1xuICAgICAgICBsZXQgY3R4ID0gdGhpcy5fLl9zY29wZTtcbiAgICAgICAgXG4gICAgICAgIG91dHB1dCA9IG91dHB1dCB8fCB7fTtcbiAgICAgICAgT2JqZWN0LmtleXMoY3R4KS5mb3JFYWNoKFxuICAgICAgICAgICAgaWQgPT4ge1xuICAgICAgICAgICAgICAgIGlmICggaWQgPT0gXCIkcGFyZW50XCIgKSByZXR1cm47XG4gICAgICAgICAgICAgICAgaWYgKCAhb3V0cHV0Lmhhc093blByb3BlcnR5KGlkKSAmJiAhaXMuZm4oY3R4WyBpZCBdKVxuICAgICAgICAgICAgICAgICAgICAgJiYgKCAhc3RvcmVzUmV2TWFwXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHx8ICggc3RvcmVzUmV2TWFwLmhhc093blByb3BlcnR5KGlkKSAmJiBzdG9yZXNSZXZNYXBbIGlkIF0gPT09IHVuZGVmaW5lZCApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHx8ICEoICFzdG9yZXNSZXZNYXAuaGFzT3duUHJvcGVydHkoaWQpIHx8IGN0eFsgaWQgXS5fcmV2IDw9IHN0b3Jlc1Jldk1hcFsgaWQgXS5yZXYgKSApXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVkICAgICAgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBvdXRwdXRbIGlkIF0gPSB0aGlzLmRhdGFbIGlkIF07XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpZiAoIHN0b3Jlc1Jldk1hcCAmJiBzdG9yZXNSZXZNYXAuaGFzT3duUHJvcGVydHkoaWQpICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmVzUmV2TWFwWyBpZCBdICAgICA9IHN0b3Jlc1Jldk1hcFsgaWQgXSB8fCB7IHJldjogMCwgcmVmczogW10gfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3Jlc1Jldk1hcFsgaWQgXS5yZXYgPSBjdHhbIGlkIF0uX3JldjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3Jlc1Jldk1hcFsgaWQgXS5yZWZzLmZvckVhY2goXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLndhcm4oXCJ1cGRhdGUgcmVmIFwiLCByZWYucmVmLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnJldHJpZXZlKHJlZi5wYXRoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dFsgcmVmLmFsaWFzIF0gPSB0aGlzLnJldHJpZXZlKHJlZi5wYXRoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUud2FybihcInVwZGF0ZSBcIiwgaWQsIHRoaXMuZGF0YVtpZF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0WyBpZCBdID0gdGhpcy5kYXRhWyBpZCBdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgdXBkYXRlZCA9IHRoaXMuXy5fbWl4ZWQucmVkdWNlUmlnaHQoKCB1cGRhdGVkLCBjdHggKSA9PiAoIGN0eC5nZXRVcGRhdGVzKHN0b3Jlc1Jldk1hcCwgb3V0cHV0LCB1cGRhdGVkKSB8fCB1cGRhdGVkICksIHVwZGF0ZWQpO1xuICAgICAgICB1cGRhdGVkID0gdGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuZ2V0VXBkYXRlcyhzdG9yZXNSZXZNYXAsIG91dHB1dCwgdXBkYXRlZCkgfHwgdXBkYXRlZDtcbiAgICAgICAgcmV0dXJuIHVwZGF0ZWQgJiYgb3V0cHV0O1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBSZWN1cnNpdmVseSBnZXQgYWxsIGNoaWxkIHNjb3Blc1xuICAgICAqIEBwYXJhbSBjaGlsZHNcbiAgICAgKiBAcmV0dXJucyB7QXJyYXl9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfZ2V0QWxsQ2hpbGRzKCBjaGlsZHMgPSBbXSApIHtcbiAgICAgICAgY2hpbGRzLnB1c2goLi4udGhpcy5fLmNoaWxkU2NvcGVzKTtcbiAgICAgICAgdGhpcy5fLmNoaWxkU2NvcGVzLmZvckVhY2goXG4gICAgICAgICAgICBjdHggPT4ge1xuICAgICAgICAgICAgICAgIGN0eC5fZ2V0QWxsQ2hpbGRzKGNoaWxkcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiBjaGlsZHM7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIFNlcmlhbGl6ZSBhbGwgYWN0aXZlIHN0b3JlcyBzdGF0ZSAmIGRhdGEgaW4gZXZlcnkgY2hpbGRzICYgbWl4ZWQgc2NvcGVzXG4gICAgICpcbiAgICAgKiBTY29wZXMgd2l0aG91dCBrZXkgb3IgaWQgYXJlIGlnbm9yZWRcbiAgICAgKiBAcGFyYW0gb3V0cHV0XG4gICAgICogQHJldHVybnMge3t9fVxuICAgICAqL1xuICAgIHNlcmlhbGl6ZSggY2ZnID0ge30sIG91dHB1dCA9IHt9ICkge1xuICAgICAgICBsZXQgY3R4ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA9IHRoaXMuXy5fc2NvcGUsXG4gICAgICAgICAgICB7IGFsaWFzLCB3aXRoQ2hpbGRzID0gdHJ1ZSwgd2l0aFBhcmVudHMsIHdpdGhNaXhlZCA9IHRydWUsIG5vcmVmcyB9ID0gY2ZnO1xuICAgICAgICBcbiAgICAgICAgaWYgKCBrZXlXYWxrbkdldChvdXRwdXQsIHRoaXMuX2lkKSApXG4gICAgICAgICAgICByZXR1cm4gb3V0cHV0O1xuICAgICAgICBcbiAgICAgICAgLy9AdG9kbyA6IGJldHRlciBzZXJpYWxpemUgbWV0aG9kXG4gICAgICAgIGtleVdhbGtuU2V0KG91dHB1dCwgdGhpcy5faWQsIHt9KTtcbiAgICAgICAgXG4gICAgICAgIE9iamVjdC5rZXlzKGN0eCkuZm9yRWFjaChcbiAgICAgICAgICAgIGlkID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIGlkID09IFwiJHBhcmVudFwiIHx8IGlzLmZuKGN0eFsgaWQgXSkgKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY3R4WyBpZCBdLnNlcmlhbGl6ZShjZmcsIG91dHB1dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIClcbiAgICAgICAgXG4gICAgICAgIHdpdGhQYXJlbnRzICYmIHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LnNlcmlhbGl6ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aENoaWxkICA6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpdGhQYXJlbnRzOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpdGhNaXhlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JlZnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIG91dHB1dCk7XG4gICAgICAgIFxuICAgICAgICB3aXRoQ2hpbGRzICYmIHRoaXMuXy5jaGlsZFNjb3Blcy5mb3JFYWNoKFxuICAgICAgICAgICAgY3R4ID0+IHtcbiAgICAgICAgICAgICAgICAhY3R4Ll8uaXNMb2NhbElkICYmIGN0eC5zZXJpYWxpemUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aENoaWxkICA6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRoUGFyZW50czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRoTWl4ZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JlZnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgb3V0cHV0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgXG4gICAgICAgIHdpdGhNaXhlZCAmJiB0aGlzLl8uX21peGVkLmZvckVhY2goXG4gICAgICAgICAgICBjdHggPT4ge1xuICAgICAgICAgICAgICAgICFjdHguXy5pc0xvY2FsSWQgJiYgY3R4LnNlcmlhbGl6ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRoQ2hpbGQgIDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRoUGFyZW50czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRoTWl4ZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JlZnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgb3V0cHV0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgXG4gICAgICAgIGlmICggYWxpYXMgKSB7XG4gICAgICAgICAgICBvdXRwdXQgPSBPYmplY3Qua2V5cyhvdXRwdXQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAucmVkdWNlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICggaCwgayApID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaFsgay5zdGFydHNXaXRoKGFsaWFzKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGFsaWFzICsgay5zdWJzdHIoYWxpYXMubGVuZ3RoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGsgXSA9IG91dHB1dFsgayBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb3V0cHV0O1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBSZXN0b3JlIHN0YXRlICYgZGF0YSBmcm9tIHRoZSBzZXJpYWxpemUgZm5cbiAgICAgKiBAcGFyYW0gc25hcHNob3RcbiAgICAgKiBAcGFyYW0gZm9yY2VcbiAgICAgKi9cbiAgICByZXN0b3JlKCBzbmFwc2hvdCwgY2ZnID0ge30sIGZvcmNlID0gaXMuYm9vbChjZmcpICYmIGNmZyApIHtcbiAgICAgICAgbGV0IGN0eCAgPSB0aGlzLl8uX3Njb3BlLCBzbmFwO1xuICAgICAgICBzbmFwc2hvdCA9IHNuYXBzaG90XG4gICAgICAgICAgICAgICAgICAgJiYga2V5V2Fsa25HZXQoc25hcHNob3QsIHRoaXMuX2lkKVxuICAgICAgICAgICAgICAgICAgIHx8IHRoaXMudGFrZVNuYXBzaG90QnlLZXkodGhpcy5faWQpO1xuICAgICAgICBcbiAgICAgICAgaWYgKCAhc25hcHNob3QgKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fLnNuYXBzaG90ID0gc25hcHNob3Q7XG4gICAgICAgIFxuICAgICAgICBzbmFwID0gc25hcHNob3RbICcvJyBdO1xuICAgICAgICBcbiAgICAgICAgc25hcCAmJiBPYmplY3Qua2V5cyhzbmFwKS5mb3JFYWNoKFxuICAgICAgICAgICAgbmFtZSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCBuYW1lID09IFwiJHBhcmVudFwiICkgcmV0dXJuO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmICggY3R4WyBuYW1lIF0gKSB7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpZiAoIGZvcmNlICYmICFpcy5mbihjdHhbIG5hbWUgXSkgKVxuICAgICAgICAgICAgICAgICAgICAgICAgY3R4WyBuYW1lIF0uZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbW91bnQobmFtZSk7Ly8gcXVpZXRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIClcbiAgICAgICAgXG4gICAgICAgIHRoaXMuXy5fbWl4ZWQuZm9yRWFjaChcbiAgICAgICAgICAgIGN0eCA9PiB7XG4gICAgICAgICAgICAgICAgIWN0eC5fLmlzTG9jYWxJZCAmJiBjdHgucmVzdG9yZSh1bmRlZmluZWQsIGZvcmNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuXy5jaGlsZFNjb3Blcy5mb3JFYWNoKFxuICAgICAgICAgICAgY3R4ID0+IHtcbiAgICAgICAgICAgICAgICAhY3R4Ll8uaXNMb2NhbElkICYmIGN0eC5yZXN0b3JlKHVuZGVmaW5lZCwgZm9yY2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICBcbiAgICB9XG4gICAgXG4gICAgZ2V0U25hcHNob3RCeUtleSgga2V5LCBsb2NhbCApIHtcbiAgICAgICAgLy8gb25seSBoYXZlIHRoZSBsb2NhbCBzbmFwXG4gICAgICAgIGlmICggdGhpcy5fLnNuYXBzaG90ICYmIGtleS5zdGFydHNXaXRoKHRoaXMuX2lkKSApIHtcbiAgICAgICAgICAgIGxldCBvYmogPSBrZXlXYWxrbkdldCh0aGlzLl8uc25hcHNob3QsIGtleS5zdWJzdHIodGhpcy5faWQubGVuZ3RoKSlcbiAgICAgICAgICAgIC8vaWYgKCBvYmogKSB7XG4gICAgICAgICAgICAvLyAgICB0aGlzLmRlbGV0ZVNuYXBzaG90QnlLZXkoa2V5KTtcbiAgICAgICAgICAgIC8vfVxuICAgICAgICAgICAgcmV0dXJuIG9iajtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHJldHVybiAhbG9jYWxcbiAgICAgICAgICAgICAgICAgICAgJiYgdGhpcy5wYXJlbnRcbiAgICAgICAgICAgICAgICAgICAgJiYgdGhpcy5wYXJlbnQuZ2V0U25hcHNob3RCeUtleShrZXkpXG4gICAgICAgICAgICAgICAgICAgIHx8XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcmVzLiRwYXJlbnRcbiAgICAgICAgICAgICAgICAgICAgJiYgdGhpcy5zdG9yZXMuJHBhcmVudC5nZXRTbmFwc2hvdEJ5S2V5KGtleSk7XG4gICAgICAgIFxuICAgIH1cbiAgICBcbiAgICBnZXRTbmFwc2hvdEJ5S2V5RXh0KCBzbmFwc2hvdCwga2V5LCBsb2NhbCApIHtcbiAgICAgICAgLy8gb25seSBoYXZlIHRoZSBsb2NhbCBzbmFwXG4gICAgICAgIGlmICggc25hcHNob3QgKSB7XG4gICAgICAgICAgICBsZXQgb2JqID0ga2V5V2Fsa25HZXQoc25hcHNob3QsIGtleSlcbiAgICAgICAgICAgIHJldHVybiBvYmo7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxuICAgIFxuICAgIHRha2VTbmFwc2hvdEJ5S2V5KCBrZXksIGxvY2FsICkge1xuICAgICAgICBpZiAoIHRoaXMuXy5zbmFwc2hvdCAmJiBrZXkuc3RhcnRzV2l0aCh0aGlzLl9pZCkgKSB7XG4gICAgICAgICAgICBsZXQgb2JqID0ga2V5V2Fsa25HZXQodGhpcy5fLnNuYXBzaG90LCBrZXkuc3Vic3RyKHRoaXMuX2lkLmxlbmd0aCkpXG4gICAgICAgICAgICBpZiAoIG9iaiApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZVNuYXBzaG90QnlLZXkoa2V5LCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBvYmo7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSByZXR1cm4gIWxvY2FsXG4gICAgICAgICAgICAgICAgICAgICYmIHRoaXMucGFyZW50XG4gICAgICAgICAgICAgICAgICAgICYmIHRoaXMucGFyZW50LnRha2VTbmFwc2hvdEJ5S2V5KGtleSlcbiAgICAgICAgICAgICAgICAgICAgfHxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9yZXMuJHBhcmVudFxuICAgICAgICAgICAgICAgICAgICAmJiB0aGlzLnN0b3Jlcy4kcGFyZW50LnRha2VTbmFwc2hvdEJ5S2V5KGtleSk7XG4gICAgfVxuICAgIFxuICAgIGRlbGV0ZVNuYXBzaG90QnlLZXkoIGtleSwgbG9jYWwgKSB7XG4gICAgICAgIGlmICggdGhpcy5fLnNuYXBzaG90ICYmIGtleS5zdGFydHNXaXRoKHRoaXMuX2lkKSApIHtcbiAgICAgICAgICAgIGxldCBvYmogPSBrZXlXYWxrbkdldCh0aGlzLl8uc25hcHNob3QsIGtleS5zdWJzdHIodGhpcy5faWQubGVuZ3RoKS5yZXBsYWNlKC9eKC4qW1xcPnxcXC9dKVteXFw+fFxcL10rJC9pZywgJyQxJykpXG4gICAgICAgICAgICBpZiAoIG9iaiApXG4gICAgICAgICAgICAgICAgZGVsZXRlIG9ialsga2V5LnJlcGxhY2UoL14uKltcXD58XFwvXShbXlxcPnxcXC9dKykkL2lnLCAnJDEnKSBdXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICFsb2NhbFxuICAgICAgICAgICAgICAgJiYgdGhpcy5wYXJlbnRcbiAgICAgICAgICAgICAgICYmIHRoaXMucGFyZW50LmRlbGV0ZVNuYXBzaG90QnlLZXkoa2V5KVxuICAgICAgICAgICAgICAgfHxcbiAgICAgICAgICAgICAgIHRoaXMuc3RvcmVzLiRwYXJlbnRcbiAgICAgICAgICAgICAgICYmIHRoaXMuc3RvcmVzLiRwYXJlbnQuZGVsZXRlU25hcHNob3RCeUtleShrZXkpO1xuICAgIH1cbiAgICBcbiAgICBzZXRTdGF0ZSggcFN0YXRlICkge1xuICAgICAgICBPYmplY3Qua2V5cyhwU3RhdGUpXG4gICAgICAgICAgICAgIC5mb3JFYWNoKGsgPT4gKCB0aGlzLnN0YXRlWyBrIF0gPSBwU3RhdGVbIGsgXSApKVxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBnZXQgYSBwYXJzZWQgcmVmZXJlbmNlXG4gICAgICogQHBhcmFtIF9yZWZcbiAgICAgKiBAcmV0dXJucyB7e3N0b3JlSWQsIHBhdGgsIGFsaWFzOiAqLCByZWY6ICp9fVxuICAgICAqL1xuICAgIHBhcnNlUmVmKCBfcmVmICkge1xuICAgICAgICBpZiAoIHR5cGVvZiBfcmVmICE9PSAnc3RyaW5nJyApIHtcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXIoeyBbIF9yZWYubmFtZSBdOiBfcmVmLnN0b3JlIH0pO1xuICAgICAgICAgICAgX3JlZiA9IF9yZWYubmFtZTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcmVmICA9IF9yZWYuc3BsaXQoJzonKTtcbiAgICAgICAgcmVmWyAwIF0gPSByZWZbIDAgXS5zcGxpdCgnLicpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3RvcmVJZDogcmVmWyAwIF1bIDAgXSxcbiAgICAgICAgICAgIHBhdGggICA6IHJlZlsgMCBdLFxuICAgICAgICAgICAgYWxpYXMgIDogcmVmWyAxIF0gfHwgcmVmWyAwIF1bIHJlZlsgMCBdLmxlbmd0aCAtIDEgXSxcbiAgICAgICAgICAgIHJlZiAgICA6IF9yZWZcbiAgICAgICAgfTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogRGlzcGF0Y2ggYW4gYWN0aW9uIHRvIHRoZSB0b3AgcGFyZW50ICYgbWl4ZWQgc2NvcGVzLCBpbiBhbGwgc3RvcmVzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gYWN0aW9uXG4gICAgICogQHBhcmFtIGRhdGFcbiAgICAgKiBAcmV0dXJucyB7U2NvcGV9XG4gICAgICovXG4gICAgZGlzcGF0Y2goIGFjdGlvbiwgLi4uYXJneiApIHtcbiAgICAgICAgaWYgKCB0aGlzLmRlYWQgKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJEaXNwYXRjaCB3YXMgY2FsbGVkIG9uIGEgZGVhZCBzY29wZSwgY2hlY2sgeW91J3JlIGFzeW5jIGZ1bmN0aW9ucyBpbiB0aGlzIHN0YWNrLi4uXCIsICggbmV3IEVycm9yKCkgKS5zdGFjayk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGJBY3RzID0gdGhpcy5fLl9ib3VuZGVkQWN0aW9ucztcbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5fLl9zY29wZSlcbiAgICAgICAgICAgICAgLmZvckVhY2goXG4gICAgICAgICAgICAgICAgICBpZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKCBpZCA9PSBcIiRwYXJlbnRcIiApIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoICFpcy5mbih0aGlzLl8uX3Njb3BlWyBpZCBdKSApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuXy5fc2NvcGVbIGlkIF0udHJpZ2dlcihhY3Rpb24sIC4uLmFyZ3opO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICApO1xuICAgICAgICBcbiAgICAgICAgaWYgKCBiQWN0cyAmJiBiQWN0cy50ZXN0KGFjdGlvbikgKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fLl9taXhlZC5mb3JFYWNoKCggY3R4ICkgPT4gKCBjdHguZGlzcGF0Y2goYWN0aW9uLCAuLi5hcmd6KSApKTtcbiAgICAgICAgdGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuZGlzcGF0Y2goYWN0aW9uLCAuLi5hcmd6KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIFxuICAgIC8vXG4gICAgdHJpZ2dlcigpIHtcbiAgICAgICAgdGhpcy5kaXNwYXRjaCguLi5hcmd1bWVudHMpO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBvbmNlKCdzdGFibGUnLCBjYilcbiAgICAgKiBAcGFyYW0gb2JqIHtSZWFjdC5Db21wb25lbnR8U3RvcmV8ZnVuY3Rpb24pXG4gICAgICogQHBhcmFtIGtleSB7c3RyaW5nfSBvcHRpb25hbCBrZXkgd2hlcmUgdG8gbWFwIHRoZSBwdWJsaWMgc3RhdGVcbiAgICAgKi9cbiAgICB0aGVuKCBjYiApIHtcbiAgICAgICAgaWYgKCB0aGlzLl9zdGFibGUgKVxuICAgICAgICAgICAgcmV0dXJuIGNiKHRoaXMuZGF0YSk7XG4gICAgICAgIHRoaXMub25jZSgnc3RhYmxlJywgZSA9PiBjYih0aGlzLmRhdGEpKTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogQ2FsbCByZXRhaW4gb24gdGhlIHNjb3BlZCBzdG9yZXMgYmFzaW5nIGdpdmVuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc3RvcmVzXG4gICAgICogQHBhcmFtIHJlYXNvblxuICAgICAqL1xuICAgIHJldGFpblN0b3Jlcyggc3RvcmVzID0gW10sIHJlYXNvbiApIHtcbiAgICAgICAgLy9zdG9yZXMuZm9yRWFjaChcbiAgICAgICAgLy8gICAgaWQgPT4gKCAoICF0aGlzLnN0b3Jlc1sgaWQgXSB8fCAhdGhpcy5zdG9yZXNbIGlkIF0ucmV0YWluICkgJiYgY29uc29sZS53YXJuKGlkLCByZWFzb24pIClcbiAgICAgICAgLy8pXG4gICAgICAgIHN0b3Jlcy5mb3JFYWNoKFxuICAgICAgICAgICAgaWQgPT4gKCB0aGlzLnN0b3Jlc1sgaWQgXSAmJiB0aGlzLnN0b3Jlc1sgaWQgXS5yZXRhaW4gJiYgdGhpcy5zdG9yZXNbIGlkIF0ucmV0YWluKHJlYXNvbikgKVxuICAgICAgICApXG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIENhbGwgcmV0YWluIG9uIHRoZSBzY29wZWQgc3RvcmVzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc3RvcmVzXG4gICAgICogQHBhcmFtIHJlYXNvblxuICAgICAqL1xuICAgIGRpc3Bvc2VTdG9yZXMoIHN0b3JlcyA9IFtdLCByZWFzb24gKSB7XG4gICAgICAgIHN0b3Jlcy5mb3JFYWNoKFxuICAgICAgICAgICAgaWQgPT4gKCB0aGlzLnN0b3Jlc1sgaWQgXSAmJiB0aGlzLnN0b3Jlc1sgaWQgXS5kaXNwb3NlICYmIHRoaXMuc3RvcmVzWyBpZCBdLmRpc3Bvc2UocmVhc29uKSApXG4gICAgICAgIClcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogS2VlcCB0aGUgc2NvcGUgdW5zdGFibGUgdW50aWwgcmVsZWFzZSBpcyBjYWxsZWRcbiAgICAgKiBAcGFyYW0gcmVhc29uXG4gICAgICovXG4gICAgd2FpdCggcmVhc29uICkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwid2FpdFwiLCByZWFzb24pO1xuICAgICAgICB0aGlzLl9zdGFibGUgJiYgIXRoaXMuX19sb2Nrcy5hbGwgJiYgdGhpcy5lbWl0KFwidW5zdGFibGVcIiwgdGhpcyk7XG4gICAgICAgIHRoaXMuX3N0YWJsZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9fbG9ja3MuYWxsKys7XG4gICAgICAgIGlmICggcmVhc29uICkge1xuICAgICAgICAgICAgdGhpcy5fX2xvY2tzWyByZWFzb24gXSA9IHRoaXMuX19sb2Nrc1sgcmVhc29uIF0gfHwgMDtcbiAgICAgICAgICAgIHRoaXMuX19sb2Nrc1sgcmVhc29uIF0rKztcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBcbiAgICAvKipcbiAgICAgKiBTdGFiaWxpemUgdGhlIHNjb3BlIGlmIG5vIG1vcmUgbG9ja3MgcmVtYWluICh3YWl0IGZuKVxuICAgICAqIEBwYXJhbSByZWFzb25cbiAgICAgKi9cbiAgICByZWxlYXNlKCByZWFzb24gKSB7XG4gICAgICAgIFxuICAgICAgICBpZiAoIHJlYXNvbiApIHtcbiAgICAgICAgICAgIGlmICggdGhpcy5fX2xvY2tzWyByZWFzb24gXSA9PSAwIClcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiUmVsZWFzZSBtb3JlIHRoYW4gbG9ja2luZyAhXCIsIHJlYXNvbik7XG4gICAgICAgICAgICB0aGlzLl9fbG9ja3NbIHJlYXNvbiBdID0gdGhpcy5fX2xvY2tzWyByZWFzb24gXSB8fCAwO1xuICAgICAgICAgICAgdGhpcy5fX2xvY2tzWyByZWFzb24gXS0tO1xuICAgICAgICB9XG4gICAgICAgIGlmICggIXJlYXNvbiAmJiB0aGlzLl9fbG9ja3MuYWxsID09IDAgKVxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlJlbGVhc2UgbW9yZSB0aGFuIGxvY2tpbmcgIVwiKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX19sb2Nrcy5hbGwtLTtcbiAgICAgICAgaWYgKCAhdGhpcy5fX2xvY2tzLmFsbCApIHtcbiAgICAgICAgICAgIHRoaXMuXy5zdGFiaWxpemVyVE0gJiYgY2xlYXJUaW1lb3V0KHRoaXMuXy5zdGFiaWxpemVyVE0pO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLl8uc3RhYmlsaXplclRNID0gc2V0VGltZW91dChcbiAgICAgICAgICAgICAgICBlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fLnN0YWJpbGl6ZXJUTSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIGlmICggdGhpcy5fX2xvY2tzLmFsbCApXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB0aGlzLl8ucHJvcGFnVE0gJiYgY2xlYXJUaW1lb3V0KHRoaXMuXy5wcm9wYWdUTSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3JldisrO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zdGFibGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXQoXCJzdGFibGVcIiwgdGhpcyk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAhdGhpcy5kZWFkICYmIHRoaXMuX3Byb3BhZygpOy8vIHN0YWJpbGl0eSBjYW4gaW5kdWNlIGRlc3Ryb3lcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBQcm9wYWcgc3RvcmVzIHVwZGF0ZXMgYmFzaW5nIHRoZWlycyBsYXN0IHVwZGF0ZXNcbiAgICAgKi9cbiAgICBwcm9wYWcoKSB7XG4gICAgICAgIHRoaXMuXy5wcm9wYWdUTSAmJiBjbGVhclRpbWVvdXQodGhpcy5fLnByb3BhZ1RNKTtcbiAgICAgICAgdGhpcy5fLnByb3BhZ1RNID0gc2V0VGltZW91dChcbiAgICAgICAgICAgIGUgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuXy5wcm9wYWdUTSA9IG51bGw7XG4gICAgICAgICAgICAgICAgdGhpcy5fcHJvcGFnKClcbiAgICAgICAgICAgIH0sIDJcbiAgICAgICAgKTtcbiAgICB9XG4gICAgXG4gICAgX3Byb3BhZygpIHtcbiAgICAgICAgaWYgKCB0aGlzLl8uZm9sbG93ZXJzLmxlbmd0aCApXG4gICAgICAgICAgICB0aGlzLl8uZm9sbG93ZXJzLmZvckVhY2goKCB7IDA6IG9iaiwgMToga2V5LCAyOiBhcywgMzogbGFzdFJldnMsIDM6IHJlbWFwcyB9ICkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBkYXRhID0gdGhpcy5nZXRVcGRhdGVzKGxhc3RSZXZzKTtcbiAgICAgICAgICAgICAgICBpZiAoICFkYXRhICkgcmV0dXJuO1xuICAgICAgICAgICAgICAgIGlmICggdHlwZW9mIG9iaiAhPSBcImZ1bmN0aW9uXCIgKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJzZXRTdGF0ZSBcIixvYmosIE9iamVjdC5rZXlzKGRhdGEpKVxuICAgICAgICAgICAgICAgICAgICBpZiAoIGFzICkgb2JqLnNldFN0YXRlKHsgWyBhcyBdOiBkYXRhIH0pO1xuICAgICAgICAgICAgICAgICAgICBlbHNlIG9iai5zZXRTdGF0ZShkYXRhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG9iaihkYXRhLCBsYXN0UmV2cyAmJiBbIC4uLmxhc3RSZXZzIF0gfHwgXCJubyByZXZzXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBsYXN0UmV2cyAmJlxuICAgICAgICAgICAgICAgIC8vIGtleS5mb3JFYWNoKGlkID0+IChsYXN0UmV2c1tpZF0gPSB0aGlzLnN0b3Jlc1tpZF0gJiZcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnN0b3Jlc1tpZF0uX3JldiB8fCAwKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5lbWl0KFwidXBkYXRlXCIsIHRoaXMuZ2V0VXBkYXRlcygpKTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogaXMgc3RhYmxlXG4gICAgICogQHJldHVybnMgYm9vbFxuICAgICAqL1xuICAgIGlzU3RhYmxlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc3RhYmxlO1xuICAgIH1cbiAgICBcbiAgICBfYWRkQ2hpbGQoIGN0eCApIHtcbiAgICAgICAgdGhpcy5fLmNoaWxkU2NvcGVzLnB1c2goY3R4KTtcbiAgICAgICAgdGhpcy5fLnNlZW5DaGlsZHMrKztcbiAgICAgICAgbGV0IGxpc3RzICAgICA9IHtcbiAgICAgICAgICAgICAgICAnc3RhYmxlJyAgICAgIDogcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuXy51blN0YWJsZUNoaWxkcy0tO1xuICAgICAgICAgICAgICAgICAgICBpZiAoICF0aGlzLl8udW5TdGFibGVDaGlsZHMgKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KFwic3RhYmxlVHJlZVwiLCB0aGlzKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgJ3Vuc3RhYmxlJyAgICA6IHMgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl8udW5TdGFibGVDaGlsZHMrKztcbiAgICAgICAgICAgICAgICAgICAgaWYgKCAxID09IHRoaXMuXy51blN0YWJsZUNoaWxkcyApXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXQoXCJ1bnN0YWJsZVRyZWVcIiwgdGhpcylcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICdzdGFibGVUcmVlJyAgOiBzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fLnVuU3RhYmxlQ2hpbGRzLS07XG4gICAgICAgICAgICAgICAgICAgIGlmICggIXRoaXMuXy51blN0YWJsZUNoaWxkcyApXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXQoXCJzdGFibGVUcmVlXCIsIHRoaXMpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAndW5zdGFibGVUcmVlJzogcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuXy51blN0YWJsZUNoaWxkcysrO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIDEgPT0gdGhpcy5fLnVuU3RhYmxlQ2hpbGRzIClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdChcInVuc3RhYmxlVHJlZVwiLCB0aGlzKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgJ2Rlc3Ryb3knICAgICA6IGN0eCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICggY3R4Ll8udW5TdGFibGVDaGlsZHMgKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fLnVuU3RhYmxlQ2hpbGRzLS07XG4gICAgICAgICAgICAgICAgICAgIGlmICggIWN0eC5pc1N0YWJsZSgpIClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuXy51blN0YWJsZUNoaWxkcy0tO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpZiAoICF0aGlzLl8udW5TdGFibGVDaGlsZHMgKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KFwic3RhYmxlVHJlZVwiLCB0aGlzKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB3YXNTdGFibGUgPSB0aGlzLl8udW5TdGFibGVDaGlsZHM7XG4gICAgICAgIC8vIWN0eC5pc1N0YWJsZSgpICYmIGNvbnNvbGUud2FybignYWRkIHVuc3RhYmxlIGNoaWxkJyk7XG4gICAgICAgICFjdHguaXNTdGFibGUoKSAmJiB0aGlzLl8udW5TdGFibGVDaGlsZHMrKztcbiAgICAgICAgY3R4Ll8udW5TdGFibGVDaGlsZHMgJiYgdGhpcy5fLnVuU3RhYmxlQ2hpbGRzKys7XG4gICAgICAgIHRoaXMuXy5jaGlsZFNjb3Blc0xpc3QucHVzaChsaXN0cyk7XG4gICAgICAgIGlmICggIXdhc1N0YWJsZSAmJiB0aGlzLl8udW5TdGFibGVDaGlsZHMgKVxuICAgICAgICAgICAgdGhpcy5lbWl0KFwidW5zdGFibGVUcmVlXCIsIHRoaXMpXG4gICAgICAgIGN0eC5vbihsaXN0cyk7XG4gICAgfVxuICAgIFxuICAgIF9ybUNoaWxkKCBjdHggKSB7XG4gICAgICAgIGxldCBpICAgICAgICAgPSB0aGlzLl8uY2hpbGRTY29wZXMuaW5kZXhPZihjdHgpLFxuICAgICAgICAgICAgd2FzU3RhYmxlID0gdGhpcy5fLnVuU3RhYmxlQ2hpbGRzO1xuICAgICAgICBpZiAoIGkgIT0gLTEgKSB7XG4gICAgICAgICAgICB0aGlzLl8uY2hpbGRTY29wZXMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgIWN0eC5pc1N0YWJsZSgpICYmIHRoaXMuXy51blN0YWJsZUNoaWxkcy0tO1xuICAgICAgICAgICAgY3R4Ll8udW5TdGFibGVDaGlsZHMgJiYgdGhpcy5fLnVuU3RhYmxlQ2hpbGRzLS07XG4gICAgICAgICAgICBjdHgudW4odGhpcy5fLmNoaWxkU2NvcGVzTGlzdC5zcGxpY2UoaSwgMSlbIDAgXSk7XG4gICAgICAgICAgICBpZiAoIHdhc1N0YWJsZSAmJiAhdGhpcy5fLnVuU3RhYmxlQ2hpbGRzIClcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXQoXCJzdGFibGVUcmVlXCIpXG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgcmV0YWluKCByZWFzb24gKSB7XG4gICAgICAgIHRoaXMuX19yZXRhaW5zLmFsbCsrO1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwicmV0YWluXCIsIHRoaXMuX2lkLCByZWFzb24pO1xuICAgICAgICBpZiAoIHJlYXNvbiApIHtcbiAgICAgICAgICAgIHRoaXMuX19yZXRhaW5zWyByZWFzb24gXSA9IHRoaXMuX19yZXRhaW5zWyByZWFzb24gXSB8fCAwO1xuICAgICAgICAgICAgdGhpcy5fX3JldGFpbnNbIHJlYXNvbiBdKys7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgZGlzcG9zZSggcmVhc29uICkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwiZGlzcG9zZVwiLCB0aGlzLl9pZCwgcmVhc29uKTtcbiAgICAgICAgaWYgKCByZWFzb24gKSB7XG4gICAgICAgICAgICBpZiAoICF0aGlzLl9fcmV0YWluc1sgcmVhc29uIF0gKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkRpc3Bvc2UgbW9yZSB0aGFuIHJldGFpbmluZyA6IFwiICsgcmVhc29uKTtcbiAgICAgICAgICAgIHRoaXMuX19yZXRhaW5zWyByZWFzb24gXS0tO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAoICF0aGlzLl9fcmV0YWlucy5hbGwgKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRGlzcG9zZSBtb3JlIHRoYW4gcmV0YWluaW5nICFcIik7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9fcmV0YWlucy5hbGwtLTtcbiAgICAgICAgXG4gICAgICAgIGlmICggIXRoaXMuX19yZXRhaW5zLmFsbCApIHtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJkaXNwb3NlIGRvIGRlc3Ryb3kgXCIsIHRoaXMuX2lkLCB0aGlzLl9wZXJzaXN0ZW5jZVRtKTtcbiAgICAgICAgICAgIGlmICggdGhpcy5fLnBlcnNpc3RlbmNlVG0gKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fLmRlc3Ryb3lUTSAmJiBjbGVhclRpbWVvdXQodGhpcy5fLmRlc3Ryb3lUTSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fLmRlc3Ryb3lUTSA9IHNldFRpbWVvdXQoXG4gICAgICAgICAgICAgICAgICAgIGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy90aGlzLnRoZW4ocyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAhdGhpcy5fX3JldGFpbnMuYWxsICYmICF0aGlzLmRlYWQgJiYgdGhpcy5kZXN0cm95KClcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vfSk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuXy5wZXJzaXN0ZW5jZVRtXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vdGhpcy50aGVuKHMgPT5cbiAgICAgICAgICAgICAgICAoICF0aGlzLl9fcmV0YWlucy5hbGwgJiYgIXRoaXMuZGVhZCAmJiB0aGlzLmRlc3Ryb3koKSApXG4gICAgICAgICAgICAgICAgLy8pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIG9yZGVyIGRlc3Ryb3kgb2YgbG9jYWwgc3RvcmVzXG4gICAgICovXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgbGV0IGN0eCA9IHRoaXMuXy5fc2NvcGU7XG4gICAgICAgIC8vY29uc29sZS53YXJuKFwiZGVzdHJveVwiLCB0aGlzLl9pZCk7XG4gICAgICAgIHRoaXMuXy5zdGFiaWxpemVyVE0gJiYgY2xlYXJUaW1lb3V0KHRoaXMuXy5zdGFiaWxpemVyVE0pO1xuICAgICAgICB0aGlzLl8ucHJvcGFnVE0gJiYgY2xlYXJUaW1lb3V0KHRoaXMuXy5wcm9wYWdUTSk7XG4gICAgICAgIE9iamVjdC5rZXlzKFxuICAgICAgICAgICAgdGhpcy5fLl9saXN0ZW5pbmdcbiAgICAgICAgKS5mb3JFYWNoKFxuICAgICAgICAgICAgaWQgPT4gKCAoIGlkICE9PSBcIiRwYXJlbnRcIiApICYmIHRoaXMuXy5fc2NvcGVbIGlkIF0ucmVtb3ZlTGlzdGVuZXIodGhpcy5fLl9saXN0ZW5pbmdbIGlkIF0pIClcbiAgICAgICAgKTtcbiAgICAgICAgd2hpbGUgKCB0aGlzLl8uX21peGVkTGlzdC5sZW5ndGggKSB7XG4gICAgICAgICAgICB0aGlzLl8uX21peGVkWyAwIF0ucmVtb3ZlTGlzdGVuZXIodGhpcy5fLl9taXhlZExpc3Quc2hpZnQoKSk7XG4gICAgICAgICAgICB0aGlzLl8uX21peGVkLnNoaWZ0KCkuZGlzcG9zZShcIm1peGVkVG9cIik7XG4gICAgICAgIH1cbiAgICAgICAgWyAuLi50aGlzLl8uZm9sbG93ZXJzIF0ubWFwKGZvbGxvd2VyID0+IHRoaXMudW5CaW5kKC4uLmZvbGxvd2VyKSk7XG4gICAgICAgIGZvciAoIGxldCBrZXkgaW4gY3R4IClcbiAgICAgICAgICAgIGlmICggIWlzLmZuKGN0eFsga2V5IF0pICkge1xuICAgICAgICAgICAgICAgIGlmICgga2V5ID09IFwiJHBhcmVudFwiICkgY29udGludWU7XG4gICAgICAgICAgICAgICAgIWN0eFsga2V5IF0uX2F1dG9EZXN0cm95ICYmIGN0eFsga2V5IF0uZGlzcG9zZShcInNjb3BlZFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgaWYgKCB0aGlzLl8uX3BhcmVudExpc3QgKSB7XG4gICAgICAgICAgICB0aGlzLnBhcmVudC5fcm1DaGlsZCh0aGlzKTtcbiAgICAgICAgICAgIHRoaXMucGFyZW50LnJlbW92ZUxpc3RlbmVyKHRoaXMuXy5fcGFyZW50TGlzdCk7XG4gICAgICAgICAgICB0aGlzLnBhcmVudC5kaXNwb3NlKFwiaXNNeVBhcmVudFwiKTtcbiAgICAgICAgICAgIHRoaXMuXy5fcGFyZW50TGlzdCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kZWFkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5lbWl0KFwiZGVzdHJveVwiLCB0aGlzKTtcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICAvL2lmICggIXRoaXMuXy5pc0xvY2FsSWQgKVxuICAgICAgICBkZWxldGUgb3BlblNjb3Blc1sgdGhpcy5faWQgXTtcbiAgICAgICAgXG4gICAgICAgIC8vdGhpcy5fID0gbnVsbDtcbiAgICAgICAgXG4gICAgfVxufVxuXG5cbmlzLnJzU2NvcGUgPSBmdW5jdGlvbiAoIG9iaiApIHtcbiAgICByZXR1cm4gb2JqIGluc3RhbmNlb2YgU2NvcGVcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2NvcGU7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1Njb3BlLmpzIiwidmFyIGlzID0gcmVxdWlyZSgnaXMnKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIC4uLmlzXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbHMvaXMuanMiLCIvKiBnbG9iYWxzIHdpbmRvdywgSFRNTEVsZW1lbnQgKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKiohXG4gKiBpc1xuICogdGhlIGRlZmluaXRpdmUgSmF2YVNjcmlwdCB0eXBlIHRlc3RpbmcgbGlicmFyeVxuICpcbiAqIEBjb3B5cmlnaHQgMjAxMy0yMDE0IEVucmljbyBNYXJpbm8gLyBKb3JkYW4gSGFyYmFuZFxuICogQGxpY2Vuc2UgTUlUXG4gKi9cblxudmFyIG9ialByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcbnZhciBvd25zID0gb2JqUHJvdG8uaGFzT3duUHJvcGVydHk7XG52YXIgdG9TdHIgPSBvYmpQcm90by50b1N0cmluZztcbnZhciBzeW1ib2xWYWx1ZU9mO1xuaWYgKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicpIHtcbiAgc3ltYm9sVmFsdWVPZiA9IFN5bWJvbC5wcm90b3R5cGUudmFsdWVPZjtcbn1cbnZhciBpc0FjdHVhbE5hTiA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT09IHZhbHVlO1xufTtcbnZhciBOT05fSE9TVF9UWVBFUyA9IHtcbiAgJ2Jvb2xlYW4nOiAxLFxuICBudW1iZXI6IDEsXG4gIHN0cmluZzogMSxcbiAgdW5kZWZpbmVkOiAxXG59O1xuXG52YXIgYmFzZTY0UmVnZXggPSAvXihbQS1aYS16MC05Ky9dezR9KSooW0EtWmEtejAtOSsvXXs0fXxbQS1aYS16MC05Ky9dezN9PXxbQS1aYS16MC05Ky9dezJ9PT0pJC87XG52YXIgaGV4UmVnZXggPSAvXltBLUZhLWYwLTldKyQvO1xuXG4vKipcbiAqIEV4cG9zZSBgaXNgXG4gKi9cblxudmFyIGlzID0ge307XG5cbi8qKlxuICogVGVzdCBnZW5lcmFsLlxuICovXG5cbi8qKlxuICogaXMudHlwZVxuICogVGVzdCBpZiBgdmFsdWVgIGlzIGEgdHlwZSBvZiBgdHlwZWAuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGUgdHlwZVxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBgdmFsdWVgIGlzIGEgdHlwZSBvZiBgdHlwZWAsIGZhbHNlIG90aGVyd2lzZVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5pcy5hID0gaXMudHlwZSA9IGZ1bmN0aW9uICh2YWx1ZSwgdHlwZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSB0eXBlO1xufTtcblxuLyoqXG4gKiBpcy5kZWZpbmVkXG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgZGVmaW5lZC5cbiAqXG4gKiBAcGFyYW0ge01peGVkfSB2YWx1ZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmICd2YWx1ZScgaXMgZGVmaW5lZCwgZmFsc2Ugb3RoZXJ3aXNlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmlzLmRlZmluZWQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCc7XG59O1xuXG4vKipcbiAqIGlzLmVtcHR5XG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgZW1wdHkuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBgdmFsdWVgIGlzIGVtcHR5LCBmYWxzZSBvdGhlcndpc2VcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuaXMuZW1wdHkgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0b1N0ci5jYWxsKHZhbHVlKTtcbiAgdmFyIGtleTtcblxuICBpZiAodHlwZSA9PT0gJ1tvYmplY3QgQXJyYXldJyB8fCB0eXBlID09PSAnW29iamVjdCBBcmd1bWVudHNdJyB8fCB0eXBlID09PSAnW29iamVjdCBTdHJpbmddJykge1xuICAgIHJldHVybiB2YWx1ZS5sZW5ndGggPT09IDA7XG4gIH1cblxuICBpZiAodHlwZSA9PT0gJ1tvYmplY3QgT2JqZWN0XScpIHtcbiAgICBmb3IgKGtleSBpbiB2YWx1ZSkge1xuICAgICAgaWYgKG93bnMuY2FsbCh2YWx1ZSwga2V5KSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuICF2YWx1ZTtcbn07XG5cbi8qKlxuICogaXMuZXF1YWxcbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBlcXVhbCB0byBgb3RoZXJgLlxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEBwYXJhbSB7TWl4ZWR9IG90aGVyIHZhbHVlIHRvIGNvbXBhcmUgd2l0aFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBgdmFsdWVgIGlzIGVxdWFsIHRvIGBvdGhlcmAsIGZhbHNlIG90aGVyd2lzZVxuICovXG5cbmlzLmVxdWFsID0gZnVuY3Rpb24gZXF1YWwodmFsdWUsIG90aGVyKSB7XG4gIGlmICh2YWx1ZSA9PT0gb3RoZXIpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHZhciB0eXBlID0gdG9TdHIuY2FsbCh2YWx1ZSk7XG4gIHZhciBrZXk7XG5cbiAgaWYgKHR5cGUgIT09IHRvU3RyLmNhbGwob3RoZXIpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKHR5cGUgPT09ICdbb2JqZWN0IE9iamVjdF0nKSB7XG4gICAgZm9yIChrZXkgaW4gdmFsdWUpIHtcbiAgICAgIGlmICghaXMuZXF1YWwodmFsdWVba2V5XSwgb3RoZXJba2V5XSkgfHwgIShrZXkgaW4gb3RoZXIpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgZm9yIChrZXkgaW4gb3RoZXIpIHtcbiAgICAgIGlmICghaXMuZXF1YWwodmFsdWVba2V5XSwgb3RoZXJba2V5XSkgfHwgIShrZXkgaW4gdmFsdWUpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAodHlwZSA9PT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgIGtleSA9IHZhbHVlLmxlbmd0aDtcbiAgICBpZiAoa2V5ICE9PSBvdGhlci5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgd2hpbGUgKGtleS0tKSB7XG4gICAgICBpZiAoIWlzLmVxdWFsKHZhbHVlW2tleV0sIG90aGVyW2tleV0pKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAodHlwZSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJykge1xuICAgIHJldHVybiB2YWx1ZS5wcm90b3R5cGUgPT09IG90aGVyLnByb3RvdHlwZTtcbiAgfVxuXG4gIGlmICh0eXBlID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICByZXR1cm4gdmFsdWUuZ2V0VGltZSgpID09PSBvdGhlci5nZXRUaW1lKCk7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59O1xuXG4vKipcbiAqIGlzLmhvc3RlZFxuICogVGVzdCBpZiBgdmFsdWVgIGlzIGhvc3RlZCBieSBgaG9zdGAuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgdG8gdGVzdFxuICogQHBhcmFtIHtNaXhlZH0gaG9zdCBob3N0IHRvIHRlc3Qgd2l0aFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBgdmFsdWVgIGlzIGhvc3RlZCBieSBgaG9zdGAsIGZhbHNlIG90aGVyd2lzZVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5pcy5ob3N0ZWQgPSBmdW5jdGlvbiAodmFsdWUsIGhvc3QpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgaG9zdFt2YWx1ZV07XG4gIHJldHVybiB0eXBlID09PSAnb2JqZWN0JyA/ICEhaG9zdFt2YWx1ZV0gOiAhTk9OX0hPU1RfVFlQRVNbdHlwZV07XG59O1xuXG4vKipcbiAqIGlzLmluc3RhbmNlXG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgYW4gaW5zdGFuY2Ugb2YgYGNvbnN0cnVjdG9yYC5cbiAqXG4gKiBAcGFyYW0ge01peGVkfSB2YWx1ZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGB2YWx1ZWAgaXMgYW4gaW5zdGFuY2Ugb2YgYGNvbnN0cnVjdG9yYFxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5pcy5pbnN0YW5jZSA9IGlzWydpbnN0YW5jZW9mJ10gPSBmdW5jdGlvbiAodmFsdWUsIGNvbnN0cnVjdG9yKSB7XG4gIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIGNvbnN0cnVjdG9yO1xufTtcblxuLyoqXG4gKiBpcy5uaWwgLyBpcy5udWxsXG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgbnVsbC5cbiAqXG4gKiBAcGFyYW0ge01peGVkfSB2YWx1ZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGB2YWx1ZWAgaXMgbnVsbCwgZmFsc2Ugb3RoZXJ3aXNlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmlzLm5pbCA9IGlzWydudWxsJ10gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID09PSBudWxsO1xufTtcblxuLyoqXG4gKiBpcy51bmRlZiAvIGlzLnVuZGVmaW5lZFxuICogVGVzdCBpZiBgdmFsdWVgIGlzIHVuZGVmaW5lZC5cbiAqXG4gKiBAcGFyYW0ge01peGVkfSB2YWx1ZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGB2YWx1ZWAgaXMgdW5kZWZpbmVkLCBmYWxzZSBvdGhlcndpc2VcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuaXMudW5kZWYgPSBpcy51bmRlZmluZWQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCc7XG59O1xuXG4vKipcbiAqIFRlc3QgYXJndW1lbnRzLlxuICovXG5cbi8qKlxuICogaXMuYXJnc1xuICogVGVzdCBpZiBgdmFsdWVgIGlzIGFuIGFyZ3VtZW50cyBvYmplY3QuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBgdmFsdWVgIGlzIGFuIGFyZ3VtZW50cyBvYmplY3QsIGZhbHNlIG90aGVyd2lzZVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5pcy5hcmdzID0gaXMuYXJndW1lbnRzID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHZhciBpc1N0YW5kYXJkQXJndW1lbnRzID0gdG9TdHIuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IEFyZ3VtZW50c10nO1xuICB2YXIgaXNPbGRBcmd1bWVudHMgPSAhaXMuYXJyYXkodmFsdWUpICYmIGlzLmFycmF5bGlrZSh2YWx1ZSkgJiYgaXMub2JqZWN0KHZhbHVlKSAmJiBpcy5mbih2YWx1ZS5jYWxsZWUpO1xuICByZXR1cm4gaXNTdGFuZGFyZEFyZ3VtZW50cyB8fCBpc09sZEFyZ3VtZW50cztcbn07XG5cbi8qKlxuICogVGVzdCBhcnJheS5cbiAqL1xuXG4vKipcbiAqIGlzLmFycmF5XG4gKiBUZXN0IGlmICd2YWx1ZScgaXMgYW4gYXJyYXkuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBgdmFsdWVgIGlzIGFuIGFycmF5LCBmYWxzZSBvdGhlcndpc2VcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuaXMuYXJyYXkgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uICh2YWx1ZSkge1xuICByZXR1cm4gdG9TdHIuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IEFycmF5XSc7XG59O1xuXG4vKipcbiAqIGlzLmFyZ3VtZW50cy5lbXB0eVxuICogVGVzdCBpZiBgdmFsdWVgIGlzIGFuIGVtcHR5IGFyZ3VtZW50cyBvYmplY3QuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBgdmFsdWVgIGlzIGFuIGVtcHR5IGFyZ3VtZW50cyBvYmplY3QsIGZhbHNlIG90aGVyd2lzZVxuICogQGFwaSBwdWJsaWNcbiAqL1xuaXMuYXJncy5lbXB0eSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICByZXR1cm4gaXMuYXJncyh2YWx1ZSkgJiYgdmFsdWUubGVuZ3RoID09PSAwO1xufTtcblxuLyoqXG4gKiBpcy5hcnJheS5lbXB0eVxuICogVGVzdCBpZiBgdmFsdWVgIGlzIGFuIGVtcHR5IGFycmF5LlxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgYHZhbHVlYCBpcyBhbiBlbXB0eSBhcnJheSwgZmFsc2Ugb3RoZXJ3aXNlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5pcy5hcnJheS5lbXB0eSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICByZXR1cm4gaXMuYXJyYXkodmFsdWUpICYmIHZhbHVlLmxlbmd0aCA9PT0gMDtcbn07XG5cbi8qKlxuICogaXMuYXJyYXlsaWtlXG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgYW4gYXJyYXlsaWtlIG9iamVjdC5cbiAqXG4gKiBAcGFyYW0ge01peGVkfSB2YWx1ZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGB2YWx1ZWAgaXMgYW4gYXJndW1lbnRzIG9iamVjdCwgZmFsc2Ugb3RoZXJ3aXNlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmlzLmFycmF5bGlrZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICByZXR1cm4gISF2YWx1ZSAmJiAhaXMuYm9vbCh2YWx1ZSlcbiAgICAmJiBvd25zLmNhbGwodmFsdWUsICdsZW5ndGgnKVxuICAgICYmIGlzRmluaXRlKHZhbHVlLmxlbmd0aClcbiAgICAmJiBpcy5udW1iZXIodmFsdWUubGVuZ3RoKVxuICAgICYmIHZhbHVlLmxlbmd0aCA+PSAwO1xufTtcblxuLyoqXG4gKiBUZXN0IGJvb2xlYW4uXG4gKi9cblxuLyoqXG4gKiBpcy5ib29sXG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgYSBib29sZWFuLlxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgYHZhbHVlYCBpcyBhIGJvb2xlYW4sIGZhbHNlIG90aGVyd2lzZVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5pcy5ib29sID0gaXNbJ2Jvb2xlYW4nXSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICByZXR1cm4gdG9TdHIuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IEJvb2xlYW5dJztcbn07XG5cbi8qKlxuICogaXMuZmFsc2VcbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBmYWxzZS5cbiAqXG4gKiBAcGFyYW0ge01peGVkfSB2YWx1ZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGB2YWx1ZWAgaXMgZmFsc2UsIGZhbHNlIG90aGVyd2lzZVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5pc1snZmFsc2UnXSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICByZXR1cm4gaXMuYm9vbCh2YWx1ZSkgJiYgQm9vbGVhbihOdW1iZXIodmFsdWUpKSA9PT0gZmFsc2U7XG59O1xuXG4vKipcbiAqIGlzLnRydWVcbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyB0cnVlLlxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgYHZhbHVlYCBpcyB0cnVlLCBmYWxzZSBvdGhlcndpc2VcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuaXNbJ3RydWUnXSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICByZXR1cm4gaXMuYm9vbCh2YWx1ZSkgJiYgQm9vbGVhbihOdW1iZXIodmFsdWUpKSA9PT0gdHJ1ZTtcbn07XG5cbi8qKlxuICogVGVzdCBkYXRlLlxuICovXG5cbi8qKlxuICogaXMuZGF0ZVxuICogVGVzdCBpZiBgdmFsdWVgIGlzIGEgZGF0ZS5cbiAqXG4gKiBAcGFyYW0ge01peGVkfSB2YWx1ZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGB2YWx1ZWAgaXMgYSBkYXRlLCBmYWxzZSBvdGhlcndpc2VcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuaXMuZGF0ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICByZXR1cm4gdG9TdHIuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IERhdGVdJztcbn07XG5cbi8qKlxuICogaXMuZGF0ZS52YWxpZFxuICogVGVzdCBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgZGF0ZS5cbiAqXG4gKiBAcGFyYW0ge01peGVkfSB2YWx1ZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdHJ1ZSBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgZGF0ZSwgZmFsc2Ugb3RoZXJ3aXNlXG4gKi9cbmlzLmRhdGUudmFsaWQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIGlzLmRhdGUodmFsdWUpICYmICFpc05hTihOdW1iZXIodmFsdWUpKTtcbn07XG5cbi8qKlxuICogVGVzdCBlbGVtZW50LlxuICovXG5cbi8qKlxuICogaXMuZWxlbWVudFxuICogVGVzdCBpZiBgdmFsdWVgIGlzIGFuIGh0bWwgZWxlbWVudC5cbiAqXG4gKiBAcGFyYW0ge01peGVkfSB2YWx1ZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGB2YWx1ZWAgaXMgYW4gSFRNTCBFbGVtZW50LCBmYWxzZSBvdGhlcndpc2VcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuaXMuZWxlbWVudCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT09IHVuZGVmaW5lZFxuICAgICYmIHR5cGVvZiBIVE1MRWxlbWVudCAhPT0gJ3VuZGVmaW5lZCdcbiAgICAmJiB2YWx1ZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50XG4gICAgJiYgdmFsdWUubm9kZVR5cGUgPT09IDE7XG59O1xuXG4vKipcbiAqIFRlc3QgZXJyb3IuXG4gKi9cblxuLyoqXG4gKiBpcy5lcnJvclxuICogVGVzdCBpZiBgdmFsdWVgIGlzIGFuIGVycm9yIG9iamVjdC5cbiAqXG4gKiBAcGFyYW0ge01peGVkfSB2YWx1ZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGB2YWx1ZWAgaXMgYW4gZXJyb3Igb2JqZWN0LCBmYWxzZSBvdGhlcndpc2VcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuaXMuZXJyb3IgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIHRvU3RyLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBFcnJvcl0nO1xufTtcblxuLyoqXG4gKiBUZXN0IGZ1bmN0aW9uLlxuICovXG5cbi8qKlxuICogaXMuZm4gLyBpcy5mdW5jdGlvbiAoZGVwcmVjYXRlZClcbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBhIGZ1bmN0aW9uLlxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgYHZhbHVlYCBpcyBhIGZ1bmN0aW9uLCBmYWxzZSBvdGhlcndpc2VcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuaXMuZm4gPSBpc1snZnVuY3Rpb24nXSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICB2YXIgaXNBbGVydCA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHZhbHVlID09PSB3aW5kb3cuYWxlcnQ7XG4gIGlmIChpc0FsZXJ0KSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgdmFyIHN0ciA9IHRvU3RyLmNhbGwodmFsdWUpO1xuICByZXR1cm4gc3RyID09PSAnW29iamVjdCBGdW5jdGlvbl0nIHx8IHN0ciA9PT0gJ1tvYmplY3QgR2VuZXJhdG9yRnVuY3Rpb25dJyB8fCBzdHIgPT09ICdbb2JqZWN0IEFzeW5jRnVuY3Rpb25dJztcbn07XG5cbi8qKlxuICogVGVzdCBudW1iZXIuXG4gKi9cblxuLyoqXG4gKiBpcy5udW1iZXJcbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBhIG51bWJlci5cbiAqXG4gKiBAcGFyYW0ge01peGVkfSB2YWx1ZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGB2YWx1ZWAgaXMgYSBudW1iZXIsIGZhbHNlIG90aGVyd2lzZVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5pcy5udW1iZXIgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIHRvU3RyLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBOdW1iZXJdJztcbn07XG5cbi8qKlxuICogaXMuaW5maW5pdGVcbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBwb3NpdGl2ZSBvciBuZWdhdGl2ZSBpbmZpbml0eS5cbiAqXG4gKiBAcGFyYW0ge01peGVkfSB2YWx1ZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGB2YWx1ZWAgaXMgcG9zaXRpdmUgb3IgbmVnYXRpdmUgSW5maW5pdHksIGZhbHNlIG90aGVyd2lzZVxuICogQGFwaSBwdWJsaWNcbiAqL1xuaXMuaW5maW5pdGUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID09PSBJbmZpbml0eSB8fCB2YWx1ZSA9PT0gLUluZmluaXR5O1xufTtcblxuLyoqXG4gKiBpcy5kZWNpbWFsXG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgYSBkZWNpbWFsIG51bWJlci5cbiAqXG4gKiBAcGFyYW0ge01peGVkfSB2YWx1ZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGB2YWx1ZWAgaXMgYSBkZWNpbWFsIG51bWJlciwgZmFsc2Ugb3RoZXJ3aXNlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmlzLmRlY2ltYWwgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIGlzLm51bWJlcih2YWx1ZSkgJiYgIWlzQWN0dWFsTmFOKHZhbHVlKSAmJiAhaXMuaW5maW5pdGUodmFsdWUpICYmIHZhbHVlICUgMSAhPT0gMDtcbn07XG5cbi8qKlxuICogaXMuZGl2aXNpYmxlQnlcbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBkaXZpc2libGUgYnkgYG5gLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSB2YWx1ZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcGFyYW0ge051bWJlcn0gbiBkaXZpZGVuZFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBgdmFsdWVgIGlzIGRpdmlzaWJsZSBieSBgbmAsIGZhbHNlIG90aGVyd2lzZVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5pcy5kaXZpc2libGVCeSA9IGZ1bmN0aW9uICh2YWx1ZSwgbikge1xuICB2YXIgaXNEaXZpZGVuZEluZmluaXRlID0gaXMuaW5maW5pdGUodmFsdWUpO1xuICB2YXIgaXNEaXZpc29ySW5maW5pdGUgPSBpcy5pbmZpbml0ZShuKTtcbiAgdmFyIGlzTm9uWmVyb051bWJlciA9IGlzLm51bWJlcih2YWx1ZSkgJiYgIWlzQWN0dWFsTmFOKHZhbHVlKSAmJiBpcy5udW1iZXIobikgJiYgIWlzQWN0dWFsTmFOKG4pICYmIG4gIT09IDA7XG4gIHJldHVybiBpc0RpdmlkZW5kSW5maW5pdGUgfHwgaXNEaXZpc29ySW5maW5pdGUgfHwgKGlzTm9uWmVyb051bWJlciAmJiB2YWx1ZSAlIG4gPT09IDApO1xufTtcblxuLyoqXG4gKiBpcy5pbnRlZ2VyXG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgYW4gaW50ZWdlci5cbiAqXG4gKiBAcGFyYW0gdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBgdmFsdWVgIGlzIGFuIGludGVnZXIsIGZhbHNlIG90aGVyd2lzZVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5pcy5pbnRlZ2VyID0gaXNbJ2ludCddID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiBpcy5udW1iZXIodmFsdWUpICYmICFpc0FjdHVhbE5hTih2YWx1ZSkgJiYgdmFsdWUgJSAxID09PSAwO1xufTtcblxuLyoqXG4gKiBpcy5tYXhpbXVtXG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgZ3JlYXRlciB0aGFuICdvdGhlcnMnIHZhbHVlcy5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHBhcmFtIHtBcnJheX0gb3RoZXJzIHZhbHVlcyB0byBjb21wYXJlIHdpdGhcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgYHZhbHVlYCBpcyBncmVhdGVyIHRoYW4gYG90aGVyc2AgdmFsdWVzXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmlzLm1heGltdW0gPSBmdW5jdGlvbiAodmFsdWUsIG90aGVycykge1xuICBpZiAoaXNBY3R1YWxOYU4odmFsdWUpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignTmFOIGlzIG5vdCBhIHZhbGlkIHZhbHVlJyk7XG4gIH0gZWxzZSBpZiAoIWlzLmFycmF5bGlrZShvdGhlcnMpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignc2Vjb25kIGFyZ3VtZW50IG11c3QgYmUgYXJyYXktbGlrZScpO1xuICB9XG4gIHZhciBsZW4gPSBvdGhlcnMubGVuZ3RoO1xuXG4gIHdoaWxlICgtLWxlbiA+PSAwKSB7XG4gICAgaWYgKHZhbHVlIDwgb3RoZXJzW2xlbl0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbi8qKlxuICogaXMubWluaW11bVxuICogVGVzdCBpZiBgdmFsdWVgIGlzIGxlc3MgdGhhbiBgb3RoZXJzYCB2YWx1ZXMuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEBwYXJhbSB7QXJyYXl9IG90aGVycyB2YWx1ZXMgdG8gY29tcGFyZSB3aXRoXG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGB2YWx1ZWAgaXMgbGVzcyB0aGFuIGBvdGhlcnNgIHZhbHVlc1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5pcy5taW5pbXVtID0gZnVuY3Rpb24gKHZhbHVlLCBvdGhlcnMpIHtcbiAgaWYgKGlzQWN0dWFsTmFOKHZhbHVlKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ05hTiBpcyBub3QgYSB2YWxpZCB2YWx1ZScpO1xuICB9IGVsc2UgaWYgKCFpcy5hcnJheWxpa2Uob3RoZXJzKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ3NlY29uZCBhcmd1bWVudCBtdXN0IGJlIGFycmF5LWxpa2UnKTtcbiAgfVxuICB2YXIgbGVuID0gb3RoZXJzLmxlbmd0aDtcblxuICB3aGlsZSAoLS1sZW4gPj0gMCkge1xuICAgIGlmICh2YWx1ZSA+IG90aGVyc1tsZW5dKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuXG4vKipcbiAqIGlzLm5hblxuICogVGVzdCBpZiBgdmFsdWVgIGlzIG5vdCBhIG51bWJlci5cbiAqXG4gKiBAcGFyYW0ge01peGVkfSB2YWx1ZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGB2YWx1ZWAgaXMgbm90IGEgbnVtYmVyLCBmYWxzZSBvdGhlcndpc2VcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuaXMubmFuID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiAhaXMubnVtYmVyKHZhbHVlKSB8fCB2YWx1ZSAhPT0gdmFsdWU7XG59O1xuXG4vKipcbiAqIGlzLmV2ZW5cbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBhbiBldmVuIG51bWJlci5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBgdmFsdWVgIGlzIGFuIGV2ZW4gbnVtYmVyLCBmYWxzZSBvdGhlcndpc2VcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuaXMuZXZlbiA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICByZXR1cm4gaXMuaW5maW5pdGUodmFsdWUpIHx8IChpcy5udW1iZXIodmFsdWUpICYmIHZhbHVlID09PSB2YWx1ZSAmJiB2YWx1ZSAlIDIgPT09IDApO1xufTtcblxuLyoqXG4gKiBpcy5vZGRcbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBhbiBvZGQgbnVtYmVyLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSB2YWx1ZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGB2YWx1ZWAgaXMgYW4gb2RkIG51bWJlciwgZmFsc2Ugb3RoZXJ3aXNlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmlzLm9kZCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICByZXR1cm4gaXMuaW5maW5pdGUodmFsdWUpIHx8IChpcy5udW1iZXIodmFsdWUpICYmIHZhbHVlID09PSB2YWx1ZSAmJiB2YWx1ZSAlIDIgIT09IDApO1xufTtcblxuLyoqXG4gKiBpcy5nZVxuICogVGVzdCBpZiBgdmFsdWVgIGlzIGdyZWF0ZXIgdGhhbiBvciBlcXVhbCB0byBgb3RoZXJgLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSB2YWx1ZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcGFyYW0ge051bWJlcn0gb3RoZXIgdmFsdWUgdG8gY29tcGFyZSB3aXRoXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5pcy5nZSA9IGZ1bmN0aW9uICh2YWx1ZSwgb3RoZXIpIHtcbiAgaWYgKGlzQWN0dWFsTmFOKHZhbHVlKSB8fCBpc0FjdHVhbE5hTihvdGhlcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdOYU4gaXMgbm90IGEgdmFsaWQgdmFsdWUnKTtcbiAgfVxuICByZXR1cm4gIWlzLmluZmluaXRlKHZhbHVlKSAmJiAhaXMuaW5maW5pdGUob3RoZXIpICYmIHZhbHVlID49IG90aGVyO1xufTtcblxuLyoqXG4gKiBpcy5ndFxuICogVGVzdCBpZiBgdmFsdWVgIGlzIGdyZWF0ZXIgdGhhbiBgb3RoZXJgLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSB2YWx1ZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcGFyYW0ge051bWJlcn0gb3RoZXIgdmFsdWUgdG8gY29tcGFyZSB3aXRoXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5pcy5ndCA9IGZ1bmN0aW9uICh2YWx1ZSwgb3RoZXIpIHtcbiAgaWYgKGlzQWN0dWFsTmFOKHZhbHVlKSB8fCBpc0FjdHVhbE5hTihvdGhlcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdOYU4gaXMgbm90IGEgdmFsaWQgdmFsdWUnKTtcbiAgfVxuICByZXR1cm4gIWlzLmluZmluaXRlKHZhbHVlKSAmJiAhaXMuaW5maW5pdGUob3RoZXIpICYmIHZhbHVlID4gb3RoZXI7XG59O1xuXG4vKipcbiAqIGlzLmxlXG4gKiBUZXN0IGlmIGB2YWx1ZWAgaXMgbGVzcyB0aGFuIG9yIGVxdWFsIHRvIGBvdGhlcmAuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEBwYXJhbSB7TnVtYmVyfSBvdGhlciB2YWx1ZSB0byBjb21wYXJlIHdpdGhcbiAqIEByZXR1cm4ge0Jvb2xlYW59IGlmICd2YWx1ZScgaXMgbGVzcyB0aGFuIG9yIGVxdWFsIHRvICdvdGhlcidcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuaXMubGUgPSBmdW5jdGlvbiAodmFsdWUsIG90aGVyKSB7XG4gIGlmIChpc0FjdHVhbE5hTih2YWx1ZSkgfHwgaXNBY3R1YWxOYU4ob3RoZXIpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignTmFOIGlzIG5vdCBhIHZhbGlkIHZhbHVlJyk7XG4gIH1cbiAgcmV0dXJuICFpcy5pbmZpbml0ZSh2YWx1ZSkgJiYgIWlzLmluZmluaXRlKG90aGVyKSAmJiB2YWx1ZSA8PSBvdGhlcjtcbn07XG5cbi8qKlxuICogaXMubHRcbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBsZXNzIHRoYW4gYG90aGVyYC5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHBhcmFtIHtOdW1iZXJ9IG90aGVyIHZhbHVlIHRvIGNvbXBhcmUgd2l0aFxuICogQHJldHVybiB7Qm9vbGVhbn0gaWYgYHZhbHVlYCBpcyBsZXNzIHRoYW4gYG90aGVyYFxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5pcy5sdCA9IGZ1bmN0aW9uICh2YWx1ZSwgb3RoZXIpIHtcbiAgaWYgKGlzQWN0dWFsTmFOKHZhbHVlKSB8fCBpc0FjdHVhbE5hTihvdGhlcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdOYU4gaXMgbm90IGEgdmFsaWQgdmFsdWUnKTtcbiAgfVxuICByZXR1cm4gIWlzLmluZmluaXRlKHZhbHVlKSAmJiAhaXMuaW5maW5pdGUob3RoZXIpICYmIHZhbHVlIDwgb3RoZXI7XG59O1xuXG4vKipcbiAqIGlzLndpdGhpblxuICogVGVzdCBpZiBgdmFsdWVgIGlzIHdpdGhpbiBgc3RhcnRgIGFuZCBgZmluaXNoYC5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHBhcmFtIHtOdW1iZXJ9IHN0YXJ0IGxvd2VyIGJvdW5kXG4gKiBAcGFyYW0ge051bWJlcn0gZmluaXNoIHVwcGVyIGJvdW5kXG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmICd2YWx1ZScgaXMgaXMgd2l0aGluICdzdGFydCcgYW5kICdmaW5pc2gnXG4gKiBAYXBpIHB1YmxpY1xuICovXG5pcy53aXRoaW4gPSBmdW5jdGlvbiAodmFsdWUsIHN0YXJ0LCBmaW5pc2gpIHtcbiAgaWYgKGlzQWN0dWFsTmFOKHZhbHVlKSB8fCBpc0FjdHVhbE5hTihzdGFydCkgfHwgaXNBY3R1YWxOYU4oZmluaXNoKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ05hTiBpcyBub3QgYSB2YWxpZCB2YWx1ZScpO1xuICB9IGVsc2UgaWYgKCFpcy5udW1iZXIodmFsdWUpIHx8ICFpcy5udW1iZXIoc3RhcnQpIHx8ICFpcy5udW1iZXIoZmluaXNoKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2FsbCBhcmd1bWVudHMgbXVzdCBiZSBudW1iZXJzJyk7XG4gIH1cbiAgdmFyIGlzQW55SW5maW5pdGUgPSBpcy5pbmZpbml0ZSh2YWx1ZSkgfHwgaXMuaW5maW5pdGUoc3RhcnQpIHx8IGlzLmluZmluaXRlKGZpbmlzaCk7XG4gIHJldHVybiBpc0FueUluZmluaXRlIHx8ICh2YWx1ZSA+PSBzdGFydCAmJiB2YWx1ZSA8PSBmaW5pc2gpO1xufTtcblxuLyoqXG4gKiBUZXN0IG9iamVjdC5cbiAqL1xuXG4vKipcbiAqIGlzLm9iamVjdFxuICogVGVzdCBpZiBgdmFsdWVgIGlzIGFuIG9iamVjdC5cbiAqXG4gKiBAcGFyYW0ge01peGVkfSB2YWx1ZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGB2YWx1ZWAgaXMgYW4gb2JqZWN0LCBmYWxzZSBvdGhlcndpc2VcbiAqIEBhcGkgcHVibGljXG4gKi9cbmlzLm9iamVjdCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICByZXR1cm4gdG9TdHIuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IE9iamVjdF0nO1xufTtcblxuLyoqXG4gKiBpcy5wcmltaXRpdmVcbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBhIHByaW1pdGl2ZS5cbiAqXG4gKiBAcGFyYW0ge01peGVkfSB2YWx1ZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGB2YWx1ZWAgaXMgYSBwcmltaXRpdmUsIGZhbHNlIG90aGVyd2lzZVxuICogQGFwaSBwdWJsaWNcbiAqL1xuaXMucHJpbWl0aXZlID0gZnVuY3Rpb24gaXNQcmltaXRpdmUodmFsdWUpIHtcbiAgaWYgKCF2YWx1ZSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnIHx8IGlzLm9iamVjdCh2YWx1ZSkgfHwgaXMuZm4odmFsdWUpIHx8IGlzLmFycmF5KHZhbHVlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbi8qKlxuICogaXMuaGFzaFxuICogVGVzdCBpZiBgdmFsdWVgIGlzIGEgaGFzaCAtIGEgcGxhaW4gb2JqZWN0IGxpdGVyYWwuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBgdmFsdWVgIGlzIGEgaGFzaCwgZmFsc2Ugb3RoZXJ3aXNlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmlzLmhhc2ggPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIGlzLm9iamVjdCh2YWx1ZSkgJiYgdmFsdWUuY29uc3RydWN0b3IgPT09IE9iamVjdCAmJiAhdmFsdWUubm9kZVR5cGUgJiYgIXZhbHVlLnNldEludGVydmFsO1xufTtcblxuLyoqXG4gKiBUZXN0IHJlZ2V4cC5cbiAqL1xuXG4vKipcbiAqIGlzLnJlZ2V4cFxuICogVGVzdCBpZiBgdmFsdWVgIGlzIGEgcmVndWxhciBleHByZXNzaW9uLlxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgYHZhbHVlYCBpcyBhIHJlZ2V4cCwgZmFsc2Ugb3RoZXJ3aXNlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmlzLnJlZ2V4cCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICByZXR1cm4gdG9TdHIuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IFJlZ0V4cF0nO1xufTtcblxuLyoqXG4gKiBUZXN0IHN0cmluZy5cbiAqL1xuXG4vKipcbiAqIGlzLnN0cmluZ1xuICogVGVzdCBpZiBgdmFsdWVgIGlzIGEgc3RyaW5nLlxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgJ3ZhbHVlJyBpcyBhIHN0cmluZywgZmFsc2Ugb3RoZXJ3aXNlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmlzLnN0cmluZyA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICByZXR1cm4gdG9TdHIuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IFN0cmluZ10nO1xufTtcblxuLyoqXG4gKiBUZXN0IGJhc2U2NCBzdHJpbmcuXG4gKi9cblxuLyoqXG4gKiBpcy5iYXNlNjRcbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGJhc2U2NCBlbmNvZGVkIHN0cmluZy5cbiAqXG4gKiBAcGFyYW0ge01peGVkfSB2YWx1ZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmICd2YWx1ZScgaXMgYSBiYXNlNjQgZW5jb2RlZCBzdHJpbmcsIGZhbHNlIG90aGVyd2lzZVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5pcy5iYXNlNjQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIGlzLnN0cmluZyh2YWx1ZSkgJiYgKCF2YWx1ZS5sZW5ndGggfHwgYmFzZTY0UmVnZXgudGVzdCh2YWx1ZSkpO1xufTtcblxuLyoqXG4gKiBUZXN0IGJhc2U2NCBzdHJpbmcuXG4gKi9cblxuLyoqXG4gKiBpcy5oZXhcbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGhleCBlbmNvZGVkIHN0cmluZy5cbiAqXG4gKiBAcGFyYW0ge01peGVkfSB2YWx1ZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmICd2YWx1ZScgaXMgYSBoZXggZW5jb2RlZCBzdHJpbmcsIGZhbHNlIG90aGVyd2lzZVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5pcy5oZXggPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIGlzLnN0cmluZyh2YWx1ZSkgJiYgKCF2YWx1ZS5sZW5ndGggfHwgaGV4UmVnZXgudGVzdCh2YWx1ZSkpO1xufTtcblxuLyoqXG4gKiBpcy5zeW1ib2xcbiAqIFRlc3QgaWYgYHZhbHVlYCBpcyBhbiBFUzYgU3ltYm9sXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBgdmFsdWVgIGlzIGEgU3ltYm9sLCBmYWxzZSBvdGhlcmlzZVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5pcy5zeW1ib2wgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgdG9TdHIuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IFN5bWJvbF0nICYmIHR5cGVvZiBzeW1ib2xWYWx1ZU9mLmNhbGwodmFsdWUpID09PSAnc3ltYm9sJztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gaXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vaXMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGlzID0gcmVxdWlyZSgnLi9pcycpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHdhbGtuU2V0KCBvYmosIHBhdGgsIHZhbHVlLCBzdGFjayApIHtcclxuICAgIGlmICggaXMuc3RyaW5nKHBhdGgpIClcclxuICAgICAgICBwYXRoID0gcGF0aC5zcGxpdCgnLicpO1xyXG4gICAgaWYgKCAhcGF0aC5sZW5ndGggKVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIGVsc2UgaWYgKCBwYXRoLmxlbmd0aCA9PSAxIClcclxuICAgICAgICByZXR1cm4gb2JqWyBwYXRoWyAwIF0gXSA9IHN0YWNrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFsgLi4uKCBvYmpbIHBhdGhbIDAgXSBdIHx8IFtdICksIHZhbHVlIF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdmFsdWU7XHJcbiAgICBlbHNlXHJcbiAgICAgICAgcmV0dXJuIHdhbGtuU2V0KFxyXG4gICAgICAgICAgICBvYmpbIHBhdGhbIDAgXSBdID1cclxuICAgICAgICAgICAgICAgIG9ialsgcGF0aFsgMCBdIF0gfHwge30sXHJcbiAgICAgICAgICAgIHBhdGguc2xpY2UoMSksXHJcbiAgICAgICAgICAgIHZhbHVlLCBzdGFja1xyXG4gICAgICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB3YWxrbkdldCggb2JqLCBwYXRoLCBpc0tleSApIHtcclxuICAgIGlmICggaXMuc3RyaW5nKHBhdGgpIClcclxuICAgICAgICBwYXRoID0gcGF0aC5zcGxpdCgnLicpO1xyXG4gICAgcmV0dXJuIHBhdGgubGVuZ3RoXHJcbiAgICAgICAgICAgPyBvYmpbIHBhdGhbIDAgXSBdICYmIHdhbGtuR2V0KG9ialsgcGF0aFsgMCBdIF0sIHBhdGguc2xpY2UoMSkpXHJcbiAgICAgICAgICAgOiBvYmo7XHJcbn1cclxuXHJcbi8vQHRvZG9cclxuZXhwb3J0IGZ1bmN0aW9uIGtleVdhbGtuU2V0KCBvYmosIHBhdGgsIHZhbHVlLCBzdGFjayApIHtcclxuICAgIGlmICggaXMuc3RyaW5nKHBhdGgpIClcclxuICAgICAgICBwYXRoID0gcGF0aC5zcGxpdCgvKFxcPnxcXC8pL2lnKS5maWx0ZXIodiA9PiAoIHYgIT09ICc+JyAmJiB2ICkpO1xyXG4gICAgcmV0dXJuIHdhbGtuU2V0KG9iaiwgcGF0aCwgdmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24ga2V5V2Fsa25HZXQoIG9iaiwgcGF0aCwgaXNLZXkgKSB7XHJcbiAgICBpZiAoIGlzLnN0cmluZyhwYXRoKSApXHJcbiAgICAgICAgcGF0aCA9IHBhdGguc3BsaXQoLyhcXD58XFwvKS9pZykuZmlsdGVyKHYgPT4gKCB2ICE9PSAnPicgJiYgdiApKTtcclxuICAgIHJldHVybiBwYXRoLmxlbmd0aFxyXG4gICAgICAgICAgID8gb2JqWyBwYXRoWyAwIF0gXSAmJiB3YWxrbkdldChvYmpbIHBhdGhbIDAgXSBdLCBwYXRoLnNsaWNlKDEpKVxyXG4gICAgICAgICAgIDogb2JqO1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWxzL3V0aWxzLmpzIiwiLypcbiAqIENvcHlyaWdodCAoYykgIDIwMTggV2lzZSBXaWxkIFdlYiAuXG4gKlxuICogIE1JVCBMaWNlbnNlXG4gKiAgXG4gKiAgUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqICBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiAgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKiAgXG4gKiAgVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG4gKiAgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqICBcbiAqICBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiAgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiAgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiAgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiAgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcbiAqICBTT0ZUV0FSRS5cbiAqICBcbiAqIEBhdXRob3IgOiBOYXRoYW5hZWwgQnJhdW5cbiAqIEBjb250YWN0IDogY2FpcGlsYWJzQGdtYWlsLmNvbVxuICovXG52YXIgaXMgPSByZXF1aXJlKCdpcycpO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW1pdHRlciB7XG4gICAgX2V2ZW50cyA9IHt9O1xuICAgIFxuICAgIG9uKCBldnQsIGNiICkge1xuICAgICAgICBpZiAoICFpcy5zdHJpbmcoZXZ0KSAmJiBldnQgKVxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKGV2dCkuZm9yRWFjaChrID0+IHRoaXMub24oaywgZXZ0W2tdKSk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9ldmVudHNbZXZ0XSA9IHRoaXMuX2V2ZW50c1tldnRdIHx8IFtdO1xuICAgICAgICB0aGlzLl9ldmVudHNbZXZ0XS5wdXNoKGNiKTtcbiAgICAgICAgXG4gICAgfVxuICAgIFxuICAgIHVuKCBldnQsIGNiICkge1xuICAgICAgICBpZiAoICFpcy5zdHJpbmcoZXZ0KSAmJiBldnQgKVxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKGV2dCkuZm9yRWFjaChrID0+IHRoaXMudW4oaywgZXZ0W2tdKSk7XG4gICAgICAgIFxuICAgICAgICBpZiAoICF0aGlzLl9ldmVudHNbZXZ0XSApIHJldHVybjtcbiAgICAgICAgdmFyIGkgPSB0aGlzLl9ldmVudHNbZXZ0XS5pbmRleE9mKGNiKTtcbiAgICAgICAgdGhpcy5fZXZlbnRzW2V2dF0uc3BsaWNlKGksIDEpO1xuICAgIH1cbiAgICBcbiAgICBlbWl0KCBldnQsIC4uLmFyZ3ogKSB7XG4gICAgICAgIGlmICggIXRoaXMuX2V2ZW50c1tldnRdICkgcmV0dXJuO1xuICAgICAgICBsZXQgbGlzdHMgPSBbLi4udGhpcy5fZXZlbnRzW2V2dF1dO1xuICAgICAgICBcbiAgICAgICAgZm9yICggdmFyIGkgPSAwOyBpIDwgbGlzdHMubGVuZ3RoOyBpKysgKVxuICAgICAgICAgICAgbGlzdHNbaV0oLi4uYXJneilcbiAgICB9XG4gICAgXG4gICAgYWRkTGlzdGVuZXIoKSB7XG4gICAgICAgIHRoaXMub24oLi4uYXJndW1lbnRzKTtcbiAgICB9XG4gICAgXG4gICAgcmVtb3ZlTGlzdGVuZXIoKSB7XG4gICAgICAgIHRoaXMudW4oLi4uYXJndW1lbnRzKTtcbiAgICB9XG4gICAgXG4gICAgcmVtb3ZlQWxsTGlzdGVuZXJzKCkge1xuICAgICAgICB0aGlzLl9ldmVudHMgPSB7fTtcbiAgICB9XG4gICAgXG4gICAgb25jZSggZXZ0LCBjYiApIHtcbiAgICAgICAgbGV0IGZuO1xuICAgICAgICB0aGlzLm9uKGV2dCwgZm4gPSAoIC4uLmFyZ3ogKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnVuKGV2dCwgZm4pO1xuICAgICAgICAgICAgY2IoLi4uYXJneilcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIFxuICAgIFxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlscy9FbWl0dGVyLmpzIiwiJ3VzZSBzdHJpY3QnO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2xpYi9pbmRleCcpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Nob3J0aWQvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYWxwaGFiZXQgPSByZXF1aXJlKCcuL2FscGhhYmV0Jyk7XG52YXIgZW5jb2RlID0gcmVxdWlyZSgnLi9lbmNvZGUnKTtcbnZhciBkZWNvZGUgPSByZXF1aXJlKCcuL2RlY29kZScpO1xudmFyIGJ1aWxkID0gcmVxdWlyZSgnLi9idWlsZCcpO1xudmFyIGlzVmFsaWQgPSByZXF1aXJlKCcuL2lzLXZhbGlkJyk7XG5cbi8vIGlmIHlvdSBhcmUgdXNpbmcgY2x1c3RlciBvciBtdWx0aXBsZSBzZXJ2ZXJzIHVzZSB0aGlzIHRvIG1ha2UgZWFjaCBpbnN0YW5jZVxuLy8gaGFzIGEgdW5pcXVlIHZhbHVlIGZvciB3b3JrZXJcbi8vIE5vdGU6IEkgZG9uJ3Qga25vdyBpZiB0aGlzIGlzIGF1dG9tYXRpY2FsbHkgc2V0IHdoZW4gdXNpbmcgdGhpcmRcbi8vIHBhcnR5IGNsdXN0ZXIgc29sdXRpb25zIHN1Y2ggYXMgcG0yLlxudmFyIGNsdXN0ZXJXb3JrZXJJZCA9IHJlcXVpcmUoJy4vdXRpbC9jbHVzdGVyLXdvcmtlci1pZCcpIHx8IDA7XG5cbi8qKlxuICogU2V0IHRoZSBzZWVkLlxuICogSGlnaGx5IHJlY29tbWVuZGVkIGlmIHlvdSBkb24ndCB3YW50IHBlb3BsZSB0byB0cnkgdG8gZmlndXJlIG91dCB5b3VyIGlkIHNjaGVtYS5cbiAqIGV4cG9zZWQgYXMgc2hvcnRpZC5zZWVkKGludClcbiAqIEBwYXJhbSBzZWVkIEludGVnZXIgdmFsdWUgdG8gc2VlZCB0aGUgcmFuZG9tIGFscGhhYmV0LiAgQUxXQVlTIFVTRSBUSEUgU0FNRSBTRUVEIG9yIHlvdSBtaWdodCBnZXQgb3ZlcmxhcHMuXG4gKi9cbmZ1bmN0aW9uIHNlZWQoc2VlZFZhbHVlKSB7XG4gICAgYWxwaGFiZXQuc2VlZChzZWVkVmFsdWUpO1xuICAgIHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLyoqXG4gKiBTZXQgdGhlIGNsdXN0ZXIgd29ya2VyIG9yIG1hY2hpbmUgaWRcbiAqIGV4cG9zZWQgYXMgc2hvcnRpZC53b3JrZXIoaW50KVxuICogQHBhcmFtIHdvcmtlcklkIHdvcmtlciBtdXN0IGJlIHBvc2l0aXZlIGludGVnZXIuICBOdW1iZXIgbGVzcyB0aGFuIDE2IGlzIHJlY29tbWVuZGVkLlxuICogcmV0dXJucyBzaG9ydGlkIG1vZHVsZSBzbyBpdCBjYW4gYmUgY2hhaW5lZC5cbiAqL1xuZnVuY3Rpb24gd29ya2VyKHdvcmtlcklkKSB7XG4gICAgY2x1c3RlcldvcmtlcklkID0gd29ya2VySWQ7XG4gICAgcmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vKipcbiAqXG4gKiBzZXRzIG5ldyBjaGFyYWN0ZXJzIHRvIHVzZSBpbiB0aGUgYWxwaGFiZXRcbiAqIHJldHVybnMgdGhlIHNodWZmbGVkIGFscGhhYmV0XG4gKi9cbmZ1bmN0aW9uIGNoYXJhY3RlcnMobmV3Q2hhcmFjdGVycykge1xuICAgIGlmIChuZXdDaGFyYWN0ZXJzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgYWxwaGFiZXQuY2hhcmFjdGVycyhuZXdDaGFyYWN0ZXJzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWxwaGFiZXQuc2h1ZmZsZWQoKTtcbn1cblxuLyoqXG4gKiBHZW5lcmF0ZSB1bmlxdWUgaWRcbiAqIFJldHVybnMgc3RyaW5nIGlkXG4gKi9cbmZ1bmN0aW9uIGdlbmVyYXRlKCkge1xuICByZXR1cm4gYnVpbGQoY2x1c3RlcldvcmtlcklkKTtcbn1cblxuLy8gRXhwb3J0IGFsbCBvdGhlciBmdW5jdGlvbnMgYXMgcHJvcGVydGllcyBvZiB0aGUgZ2VuZXJhdGUgZnVuY3Rpb25cbm1vZHVsZS5leHBvcnRzID0gZ2VuZXJhdGU7XG5tb2R1bGUuZXhwb3J0cy5nZW5lcmF0ZSA9IGdlbmVyYXRlO1xubW9kdWxlLmV4cG9ydHMuc2VlZCA9IHNlZWQ7XG5tb2R1bGUuZXhwb3J0cy53b3JrZXIgPSB3b3JrZXI7XG5tb2R1bGUuZXhwb3J0cy5jaGFyYWN0ZXJzID0gY2hhcmFjdGVycztcbm1vZHVsZS5leHBvcnRzLmRlY29kZSA9IGRlY29kZTtcbm1vZHVsZS5leHBvcnRzLmlzVmFsaWQgPSBpc1ZhbGlkO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Nob3J0aWQvbGliL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxudmFyIHJhbmRvbUZyb21TZWVkID0gcmVxdWlyZSgnLi9yYW5kb20vcmFuZG9tLWZyb20tc2VlZCcpO1xuXG52YXIgT1JJR0lOQUwgPSAnMDEyMzQ1Njc4OWFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6QUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVpfLSc7XG52YXIgYWxwaGFiZXQ7XG52YXIgcHJldmlvdXNTZWVkO1xuXG52YXIgc2h1ZmZsZWQ7XG5cbmZ1bmN0aW9uIHJlc2V0KCkge1xuICAgIHNodWZmbGVkID0gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIHNldENoYXJhY3RlcnMoX2FscGhhYmV0Xykge1xuICAgIGlmICghX2FscGhhYmV0Xykge1xuICAgICAgICBpZiAoYWxwaGFiZXQgIT09IE9SSUdJTkFMKSB7XG4gICAgICAgICAgICBhbHBoYWJldCA9IE9SSUdJTkFMO1xuICAgICAgICAgICAgcmVzZXQoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKF9hbHBoYWJldF8gPT09IGFscGhhYmV0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoX2FscGhhYmV0Xy5sZW5ndGggIT09IE9SSUdJTkFMLmxlbmd0aCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0N1c3RvbSBhbHBoYWJldCBmb3Igc2hvcnRpZCBtdXN0IGJlICcgKyBPUklHSU5BTC5sZW5ndGggKyAnIHVuaXF1ZSBjaGFyYWN0ZXJzLiBZb3Ugc3VibWl0dGVkICcgKyBfYWxwaGFiZXRfLmxlbmd0aCArICcgY2hhcmFjdGVyczogJyArIF9hbHBoYWJldF8pO1xuICAgIH1cblxuICAgIHZhciB1bmlxdWUgPSBfYWxwaGFiZXRfLnNwbGl0KCcnKS5maWx0ZXIoZnVuY3Rpb24oaXRlbSwgaW5kLCBhcnIpe1xuICAgICAgIHJldHVybiBpbmQgIT09IGFyci5sYXN0SW5kZXhPZihpdGVtKTtcbiAgICB9KTtcblxuICAgIGlmICh1bmlxdWUubGVuZ3RoKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQ3VzdG9tIGFscGhhYmV0IGZvciBzaG9ydGlkIG11c3QgYmUgJyArIE9SSUdJTkFMLmxlbmd0aCArICcgdW5pcXVlIGNoYXJhY3RlcnMuIFRoZXNlIGNoYXJhY3RlcnMgd2VyZSBub3QgdW5pcXVlOiAnICsgdW5pcXVlLmpvaW4oJywgJykpO1xuICAgIH1cblxuICAgIGFscGhhYmV0ID0gX2FscGhhYmV0XztcbiAgICByZXNldCgpO1xufVxuXG5mdW5jdGlvbiBjaGFyYWN0ZXJzKF9hbHBoYWJldF8pIHtcbiAgICBzZXRDaGFyYWN0ZXJzKF9hbHBoYWJldF8pO1xuICAgIHJldHVybiBhbHBoYWJldDtcbn1cblxuZnVuY3Rpb24gc2V0U2VlZChzZWVkKSB7XG4gICAgcmFuZG9tRnJvbVNlZWQuc2VlZChzZWVkKTtcbiAgICBpZiAocHJldmlvdXNTZWVkICE9PSBzZWVkKSB7XG4gICAgICAgIHJlc2V0KCk7XG4gICAgICAgIHByZXZpb3VzU2VlZCA9IHNlZWQ7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBzaHVmZmxlKCkge1xuICAgIGlmICghYWxwaGFiZXQpIHtcbiAgICAgICAgc2V0Q2hhcmFjdGVycyhPUklHSU5BTCk7XG4gICAgfVxuXG4gICAgdmFyIHNvdXJjZUFycmF5ID0gYWxwaGFiZXQuc3BsaXQoJycpO1xuICAgIHZhciB0YXJnZXRBcnJheSA9IFtdO1xuICAgIHZhciByID0gcmFuZG9tRnJvbVNlZWQubmV4dFZhbHVlKCk7XG4gICAgdmFyIGNoYXJhY3RlckluZGV4O1xuXG4gICAgd2hpbGUgKHNvdXJjZUFycmF5Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgciA9IHJhbmRvbUZyb21TZWVkLm5leHRWYWx1ZSgpO1xuICAgICAgICBjaGFyYWN0ZXJJbmRleCA9IE1hdGguZmxvb3IociAqIHNvdXJjZUFycmF5Lmxlbmd0aCk7XG4gICAgICAgIHRhcmdldEFycmF5LnB1c2goc291cmNlQXJyYXkuc3BsaWNlKGNoYXJhY3RlckluZGV4LCAxKVswXSk7XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXRBcnJheS5qb2luKCcnKTtcbn1cblxuZnVuY3Rpb24gZ2V0U2h1ZmZsZWQoKSB7XG4gICAgaWYgKHNodWZmbGVkKSB7XG4gICAgICAgIHJldHVybiBzaHVmZmxlZDtcbiAgICB9XG4gICAgc2h1ZmZsZWQgPSBzaHVmZmxlKCk7XG4gICAgcmV0dXJuIHNodWZmbGVkO1xufVxuXG4vKipcbiAqIGxvb2t1cCBzaHVmZmxlZCBsZXR0ZXJcbiAqIEBwYXJhbSBpbmRleFxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gbG9va3VwKGluZGV4KSB7XG4gICAgdmFyIGFscGhhYmV0U2h1ZmZsZWQgPSBnZXRTaHVmZmxlZCgpO1xuICAgIHJldHVybiBhbHBoYWJldFNodWZmbGVkW2luZGV4XTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgY2hhcmFjdGVyczogY2hhcmFjdGVycyxcbiAgICBzZWVkOiBzZXRTZWVkLFxuICAgIGxvb2t1cDogbG9va3VwLFxuICAgIHNodWZmbGVkOiBnZXRTaHVmZmxlZFxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zaG9ydGlkL2xpYi9hbHBoYWJldC5qc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbi8vIEZvdW5kIHRoaXMgc2VlZC1iYXNlZCByYW5kb20gZ2VuZXJhdG9yIHNvbWV3aGVyZVxuLy8gQmFzZWQgb24gVGhlIENlbnRyYWwgUmFuZG9taXplciAxLjMgKEMpIDE5OTcgYnkgUGF1bCBIb3VsZSAoaG91bGVAbXNjLmNvcm5lbGwuZWR1KVxuXG52YXIgc2VlZCA9IDE7XG5cbi8qKlxuICogcmV0dXJuIGEgcmFuZG9tIG51bWJlciBiYXNlZCBvbiBhIHNlZWRcbiAqIEBwYXJhbSBzZWVkXG4gKiBAcmV0dXJucyB7bnVtYmVyfVxuICovXG5mdW5jdGlvbiBnZXROZXh0VmFsdWUoKSB7XG4gICAgc2VlZCA9IChzZWVkICogOTMwMSArIDQ5Mjk3KSAlIDIzMzI4MDtcbiAgICByZXR1cm4gc2VlZC8oMjMzMjgwLjApO1xufVxuXG5mdW5jdGlvbiBzZXRTZWVkKF9zZWVkXykge1xuICAgIHNlZWQgPSBfc2VlZF87XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIG5leHRWYWx1ZTogZ2V0TmV4dFZhbHVlLFxuICAgIHNlZWQ6IHNldFNlZWRcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc2hvcnRpZC9saWIvcmFuZG9tL3JhbmRvbS1mcm9tLXNlZWQuanNcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgcmFuZG9tQnl0ZSA9IHJlcXVpcmUoJy4vcmFuZG9tL3JhbmRvbS1ieXRlJyk7XG5cbmZ1bmN0aW9uIGVuY29kZShsb29rdXAsIG51bWJlcikge1xuICAgIHZhciBsb29wQ291bnRlciA9IDA7XG4gICAgdmFyIGRvbmU7XG5cbiAgICB2YXIgc3RyID0gJyc7XG5cbiAgICB3aGlsZSAoIWRvbmUpIHtcbiAgICAgICAgc3RyID0gc3RyICsgbG9va3VwKCAoIChudW1iZXIgPj4gKDQgKiBsb29wQ291bnRlcikpICYgMHgwZiApIHwgcmFuZG9tQnl0ZSgpICk7XG4gICAgICAgIGRvbmUgPSBudW1iZXIgPCAoTWF0aC5wb3coMTYsIGxvb3BDb3VudGVyICsgMSApICk7XG4gICAgICAgIGxvb3BDb3VudGVyKys7XG4gICAgfVxuICAgIHJldHVybiBzdHI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZW5jb2RlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Nob3J0aWQvbGliL2VuY29kZS5qc1xuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgY3J5cHRvID0gdHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcgJiYgKHdpbmRvdy5jcnlwdG8gfHwgd2luZG93Lm1zQ3J5cHRvKTsgLy8gSUUgMTEgdXNlcyB3aW5kb3cubXNDcnlwdG9cblxuZnVuY3Rpb24gcmFuZG9tQnl0ZSgpIHtcbiAgICBpZiAoIWNyeXB0byB8fCAhY3J5cHRvLmdldFJhbmRvbVZhbHVlcykge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjU2KSAmIDB4MzA7XG4gICAgfVxuICAgIHZhciBkZXN0ID0gbmV3IFVpbnQ4QXJyYXkoMSk7XG4gICAgY3J5cHRvLmdldFJhbmRvbVZhbHVlcyhkZXN0KTtcbiAgICByZXR1cm4gZGVzdFswXSAmIDB4MzA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcmFuZG9tQnl0ZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zaG9ydGlkL2xpYi9yYW5kb20vcmFuZG9tLWJ5dGUtYnJvd3Nlci5qc1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFscGhhYmV0ID0gcmVxdWlyZSgnLi9hbHBoYWJldCcpO1xuXG4vKipcbiAqIERlY29kZSB0aGUgaWQgdG8gZ2V0IHRoZSB2ZXJzaW9uIGFuZCB3b3JrZXJcbiAqIE1haW5seSBmb3IgZGVidWdnaW5nIGFuZCB0ZXN0aW5nLlxuICogQHBhcmFtIGlkIC0gdGhlIHNob3J0aWQtZ2VuZXJhdGVkIGlkLlxuICovXG5mdW5jdGlvbiBkZWNvZGUoaWQpIHtcbiAgICB2YXIgY2hhcmFjdGVycyA9IGFscGhhYmV0LnNodWZmbGVkKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdmVyc2lvbjogY2hhcmFjdGVycy5pbmRleE9mKGlkLnN1YnN0cigwLCAxKSkgJiAweDBmLFxuICAgICAgICB3b3JrZXI6IGNoYXJhY3RlcnMuaW5kZXhPZihpZC5zdWJzdHIoMSwgMSkpICYgMHgwZlxuICAgIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZGVjb2RlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Nob3J0aWQvbGliL2RlY29kZS5qc1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZW5jb2RlID0gcmVxdWlyZSgnLi9lbmNvZGUnKTtcbnZhciBhbHBoYWJldCA9IHJlcXVpcmUoJy4vYWxwaGFiZXQnKTtcblxuLy8gSWdub3JlIGFsbCBtaWxsaXNlY29uZHMgYmVmb3JlIGEgY2VydGFpbiB0aW1lIHRvIHJlZHVjZSB0aGUgc2l6ZSBvZiB0aGUgZGF0ZSBlbnRyb3B5IHdpdGhvdXQgc2FjcmlmaWNpbmcgdW5pcXVlbmVzcy5cbi8vIFRoaXMgbnVtYmVyIHNob3VsZCBiZSB1cGRhdGVkIGV2ZXJ5IHllYXIgb3Igc28gdG8ga2VlcCB0aGUgZ2VuZXJhdGVkIGlkIHNob3J0LlxuLy8gVG8gcmVnZW5lcmF0ZSBgbmV3IERhdGUoKSAtIDBgIGFuZCBidW1wIHRoZSB2ZXJzaW9uLiBBbHdheXMgYnVtcCB0aGUgdmVyc2lvbiFcbnZhciBSRURVQ0VfVElNRSA9IDE0NTk3MDc2MDY1MTg7XG5cbi8vIGRvbid0IGNoYW5nZSB1bmxlc3Mgd2UgY2hhbmdlIHRoZSBhbGdvcyBvciBSRURVQ0VfVElNRVxuLy8gbXVzdCBiZSBhbiBpbnRlZ2VyIGFuZCBsZXNzIHRoYW4gMTZcbnZhciB2ZXJzaW9uID0gNjtcblxuLy8gQ291bnRlciBpcyB1c2VkIHdoZW4gc2hvcnRpZCBpcyBjYWxsZWQgbXVsdGlwbGUgdGltZXMgaW4gb25lIHNlY29uZC5cbnZhciBjb3VudGVyO1xuXG4vLyBSZW1lbWJlciB0aGUgbGFzdCB0aW1lIHNob3J0aWQgd2FzIGNhbGxlZCBpbiBjYXNlIGNvdW50ZXIgaXMgbmVlZGVkLlxudmFyIHByZXZpb3VzU2Vjb25kcztcblxuLyoqXG4gKiBHZW5lcmF0ZSB1bmlxdWUgaWRcbiAqIFJldHVybnMgc3RyaW5nIGlkXG4gKi9cbmZ1bmN0aW9uIGJ1aWxkKGNsdXN0ZXJXb3JrZXJJZCkge1xuXG4gICAgdmFyIHN0ciA9ICcnO1xuXG4gICAgdmFyIHNlY29uZHMgPSBNYXRoLmZsb29yKChEYXRlLm5vdygpIC0gUkVEVUNFX1RJTUUpICogMC4wMDEpO1xuXG4gICAgaWYgKHNlY29uZHMgPT09IHByZXZpb3VzU2Vjb25kcykge1xuICAgICAgICBjb3VudGVyKys7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY291bnRlciA9IDA7XG4gICAgICAgIHByZXZpb3VzU2Vjb25kcyA9IHNlY29uZHM7XG4gICAgfVxuXG4gICAgc3RyID0gc3RyICsgZW5jb2RlKGFscGhhYmV0Lmxvb2t1cCwgdmVyc2lvbik7XG4gICAgc3RyID0gc3RyICsgZW5jb2RlKGFscGhhYmV0Lmxvb2t1cCwgY2x1c3RlcldvcmtlcklkKTtcbiAgICBpZiAoY291bnRlciA+IDApIHtcbiAgICAgICAgc3RyID0gc3RyICsgZW5jb2RlKGFscGhhYmV0Lmxvb2t1cCwgY291bnRlcik7XG4gICAgfVxuICAgIHN0ciA9IHN0ciArIGVuY29kZShhbHBoYWJldC5sb29rdXAsIHNlY29uZHMpO1xuXG4gICAgcmV0dXJuIHN0cjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBidWlsZDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zaG9ydGlkL2xpYi9idWlsZC5qc1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFscGhhYmV0ID0gcmVxdWlyZSgnLi9hbHBoYWJldCcpO1xuXG5mdW5jdGlvbiBpc1Nob3J0SWQoaWQpIHtcbiAgICBpZiAoIWlkIHx8IHR5cGVvZiBpZCAhPT0gJ3N0cmluZycgfHwgaWQubGVuZ3RoIDwgNiApIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHZhciBjaGFyYWN0ZXJzID0gYWxwaGFiZXQuY2hhcmFjdGVycygpO1xuICAgIHZhciBsZW4gPSBpZC5sZW5ndGg7XG4gICAgZm9yKHZhciBpID0gMDsgaSA8IGxlbjtpKyspIHtcbiAgICAgICAgaWYgKGNoYXJhY3RlcnMuaW5kZXhPZihpZFtpXSkgPT09IC0xKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNTaG9ydElkO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Nob3J0aWQvbGliL2lzLXZhbGlkLmpzXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gMDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zaG9ydGlkL2xpYi91dGlsL2NsdXN0ZXItd29ya2VyLWlkLWJyb3dzZXIuanNcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpICAyMDE4IFdpc2UgV2lsZCBXZWIgLlxuICpcbiAqICBNSVQgTGljZW5zZVxuICpcbiAqICBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiAgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqICB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiAgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiAgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiAgVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG4gKiAgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqICBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG4gKiAgU09GVFdBUkUuXG4gKlxuICogQGF1dGhvciA6IE5hdGhhbmFlbCBCcmF1blxuICogQGNvbnRhY3QgOiBjYWlwaWxhYnNAZ21haWwuY29tXG4gKi9cblxudmFyIGlzICAgICAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL3V0aWxzL2lzJyksXG4gICAgU2NvcGUgICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vU2NvcGUnKSxcbiAgICB7IGtleVdhbGtuU2V0LCBrZXlXYWxrbkdldCB9ID0gcmVxdWlyZSgnLi91dGlscy91dGlscycpLFxuICAgIEV2ZW50RW1pdHRlciAgICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL3V0aWxzL0VtaXR0ZXInKSxcbiAgICBUYXNrU2VxdWVuY2VyICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi91dGlscy9UYXNrU2VxdWVuY2VyJyksXG4gICAgc2hvcnRpZCAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJ3Nob3J0aWQnKSxcbiAgICBvYmpQcm90byAgICAgICAgICAgICAgICAgICAgID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHt9KTtcblxuY2xhc3MgU3RvcmUgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICAgIC8vc3RhdGljIHVzZSAgICAgICAgICAgICAgICAgID0gW107Ly8gb3ZlcnJpZGFibGUgbGlzdCBvZiBzb3VyY2Ugc3RvcmVzXG4gICAgc3RhdGljIGZvbGxvdzsvLyBvdmVycmlkYWJsZSBsaXN0IG9mIHN0b3JlIHRoYXQgd2lsbCBhbGxvdyBwdXNoIGlmIHVwZGF0ZWRcbiAgICBzdGF0aWMgcmVxdWlyZTtcbiAgICBzdGF0aWMgc3RhdGljU2NvcGUgICAgICAgICAgPSBuZXcgU2NvcGUoe30sIHsgaWQ6IFwic3RhdGljXCIgfSk7XG4gICAgc3RhdGljIHN0YXRlICAgICAgICAgICAgICAgID0gdW5kZWZpbmVkOy8vIGRlZmF1bHQgc3RhdGVcbiAgICAvKipcbiAgICAgKiBpZiByZXRhaW4gZ29lcyB0byAwIDpcbiAgICAgKiBmYWxzZSB0byBub3QgZGVzdHJveSxcbiAgICAgKiAwIHRvIHN5bmMgYXV0byBkZXN0cm95XG4gICAgICogTXMgdG8gYXV0b2Rlc3Ryb3kgYWZ0ZXIgdG0gbXMgaWYgbm8gcmV0YWluIGhhcyBiZWVuIGNhbGxlZFxuICAgICAqIEB0eXBlIHtib29sZWFufEludH1cbiAgICAgKi9cbiAgICAgICAgICAgc3RhdGljIHBlcnNpc3RlbmNlVG0gPSBmYWxzZTtcbiAgICBcbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3Rvciwgd2lsbCBidWlsZCBhIHJlc2NvcGUgc3RvcmVcbiAgICAgKlxuICAgICAqIChzY29wZSwge3JlcXVpcmUsdXNlLGFwcGx5LHN0YXRlLCBkYXRhfSlcbiAgICAgKiAoc2NvcGUpXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc2NvcGUge29iamVjdH0gc2NvcGUgd2hlcmUgdG8gZmluZCB0aGUgb3RoZXIgc3RvcmVzIChkZWZhdWx0IDogc3RhdGljXG4gICAgICogICAgIHN0YXRpY1Njb3BlIClcbiAgICAgKiBAcGFyYW0ga2V5cyB7QXJyYXl9IChwYXNzZWQgdG8gU3RvcmU6Om1hcCkgRXggOiBbXCJzZXNzaW9uXCIsIFwib3RoZXJOYW1lZFN0b3JlOmtleVwiLFxuICAgICAqICAgICBvdGhlclN0b3JlLmFzKFwib3RoZXJLZXlcIildXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHZhciBhcmd6ICAgICAgICAgPSBbIC4uLmFyZ3VtZW50cyBdLFxuICAgICAgICAgICAgX3N0YXRpYyAgICAgID0gdGhpcy5jb25zdHJ1Y3RvcixcbiAgICAgICAgICAgIHNjb3BlICAgICAgICA9IGFyZ3pbIDAgXSBpbnN0YW5jZW9mIFNjb3BlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA/IGFyZ3ouc2hpZnQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfc3RhdGljLnNjb3BlID8gU2NvcGUuZ2V0U2NvcGUoX3N0YXRpYy5zY29wZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGlzLnN0cmluZyhhcmd6WyAwIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFNjb3BlLmdldFNjb3BlKGFyZ3ouc2hpZnQoKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3N0YXRpYy5zdGF0aWNTY29wZSxcbiAgICAgICAgICAgIGNmZyAgICAgICAgICA9IGFyZ3pbIDAgXSAmJiAhaXMuYXJyYXkoYXJnelsgMCBdKSAmJiAhaXMuc3RyaW5nKGFyZ3pbIDAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgID8gYXJnei5zaGlmdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA6IHt9LFxuICAgICAgICAgICAgdGFza1F1ZXVlICAgID0gaXMuYXJyYXkoYXJnelsgMCBdKSA/IGFyZ3ouc2hpZnQoKSA6IG51bGwsXG4gICAgICAgICAgICBuYW1lICAgICAgICAgPSBjZmcubmFtZSB8fCBfc3RhdGljLm5hbWUsXG4gICAgICAgICAgICB3YXRjaHMgICAgICAgPSBjZmcudXNlIHx8IFtdLFxuICAgICAgICAgICAgYXBwbHkgICAgICAgID0gY2ZnLmFwcGx5IHx8IG51bGwsXG4gICAgICAgICAgICBpbml0aWFsU3RhdGUgPSBfc3RhdGljLnN0YXRlIHx8IF9zdGF0aWMuaW5pdGlhbFN0YXRlIHx8IF9zdGF0aWMuZGVmYXVsdFN0YXRlLFxuICAgICAgICAgICAgYXBwbGllZDtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX3VpZCA9IGNmZy5fdWlkIHx8IHNob3J0aWQuZ2VuZXJhdGUoKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX19yZXRhaW5zICAgID0geyBhbGw6IDAgfTtcbiAgICAgICAgdGhpcy5fX2xvY2tzICAgICAgPSB7IGFsbDogMCB9O1xuICAgICAgICB0aGlzLl9vblN0YWJpbGl6ZSA9IFtdO1xuICAgICAgICBcbiAgICAgICAgLy8gYXV0b0Rlc3Ryb3lUbVxuICAgICAgICB0aGlzLl9hdXRvRGVzdHJveSAgID0gISF0aGlzLl9wZXJzaXN0ZW5jZVRtO1xuICAgICAgICB0aGlzLl9wZXJzaXN0ZW5jZVRtID0gY2ZnLnBlcnNpc3RlbmNlVG0gfHwgX3N0YXRpYy5wZXJzaXN0ZW5jZVRtIHx8ICggY2ZnLmF1dG9EZXN0cm95IHx8IF9zdGF0aWMuYXV0b0Rlc3Ryb3kgKSAmJiA1O1xuICAgICAgICB0aGlzLl9jZmcgICAgICAgICAgID0gY2ZnO1xuICAgICAgICBpZiAoIGNmZyAmJiBjZmcub24gKSB7XG4gICAgICAgICAgICB0aGlzLm9uKGNmZy5vbik7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIFxuICAgICAgICBpZiAoIHNjb3BlLnN0b3JlcyApIHtcbiAgICAgICAgICAgIHRoaXMuc2NvcGVPYmogPSBzY29wZTtcbiAgICAgICAgICAgIHRoaXMuc2NvcGUgICAgPSBzY29wZS5zdG9yZXM7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNjb3BlT2JqID0gbmV3IFNjb3BlKHNjb3BlKTtcbiAgICAgICAgICAgIHRoaXMuc2NvcGUgICAgPSBzY29wZS5zdG9yZXM7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vIHN0YW5kYXJkaXplZCBzY29wZSBhY2Nlc3NcbiAgICAgICAgdGhpcy4kc2NvcGUgICAgPSB0aGlzLnNjb3BlT2JqO1xuICAgICAgICB0aGlzLiRzdG9yZXMgICA9IHRoaXMuc2NvcGVPYmouc3RvcmVzO1xuICAgICAgICB0aGlzLiRhY3Rpb25zICA9IHRoaXMuc2NvcGVPYmouYWN0aW9ucztcbiAgICAgICAgdGhpcy4kZGlzcGF0Y2ggPSB0aGlzLnNjb3BlT2JqLmRpc3BhdGNoLmJpbmQodGhpcy5zY29wZU9iaik7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9yZXYgICAgID0gdGhpcy5jb25zdHJ1Y3Rvci5fcmV2IHx8IDA7XG4gICAgICAgIHRoaXMuX3JldnMgICAgPSB7fTtcbiAgICAgICAgdGhpcy5zdG9yZXMgICA9IHt9O1xuICAgICAgICB0aGlzLl9yZXF1aXJlID0gW107XG4gICAgICAgIHRoaXMuX3NvdXJjZXMgPSBbIG5hbWUgXTtcbiAgICAgICAgXG4gICAgICAgIGlmICggaXMuYXJyYXkoX3N0YXRpYy51c2UpICkge1xuICAgICAgICAgICAgdGhpcy5fdXNlID0gWyAuLi53YXRjaHMsIC4uLiggX3N0YXRpYy51c2UgfHwgW10gKS5tYXAoXG4gICAgICAgICAgICAgICAga2V5ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlZiA9IGtleS5tYXRjaCgvXihcXCE/KShbXlxcOl0qKSg/OlxcOiguKikpPyQvKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCByZWZbIDEgXSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZWYyID0gcmVmWyAyIF0uc3BsaXQoJy4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3JlcXVpcmUucHVzaChyZWZbIDMgXSB8fCByZWYyWyByZWYyLmxlbmd0aCAtIDEgXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlZlsgMiBdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICkgXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3VzZSA9IFsgLi4ud2F0Y2hzLCAuLi4oXG4gICAgICAgICAgICAgICAgX3N0YXRpYy51c2UgPyBPYmplY3Qua2V5cyhfc3RhdGljLnVzZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlZiA9IGtleS5tYXRjaCgvXihcXCE/KSguKikkLyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZlsgMSBdICYmIHRoaXMuX3JlcXVpcmUucHVzaChfc3RhdGljLnVzZVsga2V5IF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVmWyAyIF0gKyAoICggX3N0YXRpYy51c2VbIGtleSBdID09PSB0cnVlIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnOicgKyBfc3RhdGljLnVzZVsga2V5IF0gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogW11cbiAgICAgICAgICAgICkgXTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKCBfc3RhdGljLnJlcXVpcmUgKVxuICAgICAgICAgICAgdGhpcy5fcmVxdWlyZS5wdXNoKC4uLl9zdGF0aWMucmVxdWlyZSk7XG4gICAgICAgIGlmICggY2ZnLnJlcXVpcmUgKVxuICAgICAgICAgICAgdGhpcy5fcmVxdWlyZS5wdXNoKC4uLmNmZy5yZXF1aXJlKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX2ZvbGxvd2VycyA9IFtdO1xuICAgICAgICB0aGlzLl9jaGFuZ2VzU1cgPSBpbml0aWFsU3RhdGUgfHwge307XG4gICAgICAgIHRoaXMuc3RhdGUgICAgICA9IGluaXRpYWxTdGF0ZSAmJiB7fTtcbiAgICAgICAgaWYgKCBhcHBseSApXG4gICAgICAgICAgICB0aGlzLmFwcGx5ID0gYXBwbHk7XG4gICAgICAgIFxuICAgICAgICAvKipcbiAgICAgICAgICogSW5pdGlhbCBzdGF0ZSBpc24ndCBmdWxseSBpbml0aWFsaXplZCAoIGNoaWxkcyBjb25zdHJ1Y3RvcnMgY2FuIHNldCBpdCApXG4gICAgICAgICAqIFNjb3BlIGJhc2VkIGluc3RhbmNlIGhhdmUgdGFza1F1ZXVlIHRvIGRlbGF5IGluaXQgc3luY2hyb25vdXNseSwgaWYgbm90XG4gICAgICAgICAqIHByZXNlbnQgd2UgdXNlIHNldFRpbWVvdXRcbiAgICAgICAgICovXG4gICAgICAgIGlmICggdGFza1F1ZXVlICkge1xuICAgICAgICAgICAgdGFza1F1ZXVlLnB1c2godGhpcy5fYWZ0ZXJDb25zdHJ1Y3Rvci5iaW5kKHRoaXMpKVxuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHNldFRpbWVvdXQodGhpcy5fYWZ0ZXJDb25zdHJ1Y3Rvci5iaW5kKHRoaXMpKVxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGluY29taW5nIHN0YXRlICggZm9yIGltbWVkaWF0ZSBzdGF0ZSByZWxhdGl2ZSBhY3Rpb25zIClcbiAgICAgKiBAcmV0dXJucyB7e318Kn1cbiAgICAgKi9cbiAgICBnZXQgbmV4dFN0YXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY2hhbmdlc1NXICYmIHsgLi4udGhpcy5zdGF0ZSwgLi4udGhpcy5fY2hhbmdlc1NXIH0gfHwgdGhpcy5zdGF0ZTtcbiAgICB9XG4gICAgXG4gICAgX2FmdGVyQ29uc3RydWN0b3IoKSB7XG4gICAgICAgIGxldCBjZmcgICAgICAgICAgPSB0aGlzLl9jZmcsXG4gICAgICAgICAgICBfc3RhdGljICAgICAgPSB0aGlzLmNvbnN0cnVjdG9yLFxuICAgICAgICAgICAgc25hcHNob3QgICAgID0gdGhpcy5yZXN0b3JlKHVuZGVmaW5lZCwgdHJ1ZSksXG4gICAgICAgICAgICBpbml0aWFsU3RhdGUgPSB0aGlzLnN0YXRlLFxuICAgICAgICAgICAgaW5pdGlhbERhdGEgID0gdGhpcy5kYXRhLFxuICAgICAgICAgICAgYXBwbGllZDtcbiAgICAgICAge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoIGluaXRpYWxEYXRhIClcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGEgPSBpbml0aWFsRGF0YTtcbiAgICAgICAgICAgIGVsc2UgaWYgKCBfc3RhdGljLmRhdGEgIT09IHVuZGVmaW5lZCApXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhID0geyAuLi5fc3RhdGljLmRhdGEgfTtcbiAgICAgICAgICAgIGVsc2UgaWYgKCBjZmcuaGFzT3duUHJvcGVydHkoXCJkYXRhXCIpIClcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGEgPSBjZmcuZGF0YTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKCBjZmcuaGFzT3duUHJvcGVydHkoXCJzdGF0ZVwiKSAmJiBjZmcuc3RhdGUgIT09IHVuZGVmaW5lZCApXG4gICAgICAgICAgICAgICAgaW5pdGlhbFN0YXRlID0geyAuLi5pbml0aWFsU3RhdGUsIC4uLmNmZy5zdGF0ZSB9O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoIHRoaXMuZGF0YSA9PT0gdW5kZWZpbmVkICkge1xuICAgICAgICAgICAgICAgIGlmICggaW5pdGlhbFN0YXRlIHx8IHRoaXMuX3VzZS5sZW5ndGggKSB7Ly8gc3luYyBhcHBseVxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jaGFuZ2VzU1cgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAuLi50aGlzLl9jaGFuZ2VzU1csXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi4oIGluaXRpYWxTdGF0ZSB8fCB7fSApLFxuICAgICAgICAgICAgICAgICAgICAgICAgLi4udGhpcy4kc2NvcGUubWFwKHRoaXMsIHRoaXMuX3VzZSlcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZSAgICAgID0ge307XG4gICAgICAgICAgICAgICAgICAgIGlmICggdGhpcy5zaG91bGRBcHBseSh0aGlzLl9jaGFuZ2VzU1cpICYmIHRoaXMuZGF0YSA9PT0gdW5kZWZpbmVkICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhICAgICAgID0gdGhpcy5hcHBseSh0aGlzLmRhdGEsIHRoaXMuX2NoYW5nZXNTVywgdGhpcy5fY2hhbmdlc1NXKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwcGxpZWQgICAgICAgICA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlICAgICAgPSB0aGlzLl9jaGFuZ2VzU1c7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9jaGFuZ2VzU1cgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGFwcGxpZWQgICAgICAgICA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZSAgICAgID0gey8vIGFzc3VtZSB0aGlzIHN0YXRlIGlzIHN5bmMgd2l0aCBpbml0aWFsIGRhdGFcbiAgICAgICAgICAgICAgICAgICAgLi4udGhpcy5fY2hhbmdlc1NXLFxuICAgICAgICAgICAgICAgICAgICAuLi4oIGluaXRpYWxTdGF0ZSB8fCB7fSApLFxuICAgICAgICAgICAgICAgICAgICAuLi50aGlzLiRzY29wZS5tYXAodGhpcywgdGhpcy5fdXNlKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLl9jaGFuZ2VzU1cgPSB7fTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoICggdGhpcy5kYXRhICE9PSB1bmRlZmluZWQgfHwgYXBwbGllZCApICYmICF0aGlzLl9fbG9ja3MuYWxsICkge1xuICAgICAgICAgICAgdGhpcy5fc3RhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuX3JldisrO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fc3RhYmxlID0gZmFsc2U7XG4gICAgICAgICAgICBpZiAoICFfc3RhdGljLm1hbmFnZWQgJiYgIXRoaXMuc3RhdGUgJiYgKCAhdGhpcy5fdXNlIHx8ICF0aGlzLl91c2UubGVuZ3RoICkgKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwiUmVTY29wZSBzdG9yZSAnXCIsIHRoaXMubmFtZSwgXCInIGhhdmUgbm8gaW5pdGlhbCBkYXRhLCBzdGF0ZSBvciB1c2UuIEl0IGNhbid0IHN0YWJpbGl6ZS4uLlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAhdGhpcy5fc3RhYmxlICYmIHRoaXMuZW1pdCgndW5zdGFibGUnLCB0aGlzLnN0YXRlKTtcbiAgICAgICAgXG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIE92ZXJyaWRhYmxlIG1ldGhvZCB0byBrbm93IGlmIGEgZGF0YSBjaGFuZ2Ugc2hvdWxkIGJlIHByb3BhZyB0byB0aGUgbGlzdGVuaW5nXG4gICAgICogc3RvcmVzICYgY29tcG9uZW50c1xuICAgICAqL1xuICAgIHNob3VsZFByb3BhZyggbkRhdGFzICkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgXG4gICAgaGFzRGF0YUNoYW5nZSggbkRhdGFzICkge1xuICAgICAgICB2YXIgX3N0YXRpYyA9IHRoaXMuY29uc3RydWN0b3IsIHIsXG4gICAgICAgICAgICBjRGF0YXMgID0gdGhpcy5kYXRhO1xuICAgICAgICByICAgICAgICAgICA9ICFjRGF0YXMgJiYgbkRhdGFzIHx8IGNEYXRhcyAhPT0gbkRhdGFzO1xuICAgICAgICAhciAmJiBjRGF0YXMgJiYgT2JqZWN0LmtleXMoY0RhdGFzKS5mb3JFYWNoKFxuICAgICAgICAgICAgKCBrZXkgKSA9PiB7XG4gICAgICAgICAgICAgICAgciA9IHIgfHwgKCBuRGF0YXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgID8gY0RhdGFzWyBrZXkgXSAhPT0gbkRhdGFzWyBrZXkgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBjRGF0YXMgJiYgY0RhdGFzWyBrZXkgXSApXG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgICFyICYmIG5EYXRhcyAmJiBPYmplY3Qua2V5cyhuRGF0YXMpLmZvckVhY2goXG4gICAgICAgICAgICAoIGtleSApID0+IHtcbiAgICAgICAgICAgICAgICByID0gciB8fCAoIG5EYXRhc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBjRGF0YXNbIGtleSBdICE9PSBuRGF0YXNbIGtleSBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA6IGNEYXRhcyAmJiBjRGF0YXNbIGtleSBdIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHI7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIE92ZXJyaWRhYmxlIG1ldGhvZCB0byBrbm93IGlmIGEgc3RhdGUgY2hhbmdlIHNob3VsZCBiZSBhcHBsaWVkXG4gICAgICovXG4gICAgc2hvdWxkQXBwbHkoIHN0YXRlID0gdGhpcy5zdGF0ZSApIHtcbiAgICAgICAgdmFyIF9zdGF0aWMgPSB0aGlzLmNvbnN0cnVjdG9yO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAhIXRoaXMuaXNDb21wbGV0ZShzdGF0ZSlcbiAgICAgICAgICAgICAgICkgJiYgKCBpcy5hcnJheShfc3RhdGljLmZvbGxvdylcbiAgICAgICAgICAgICAgICAgICAgICA/IF9zdGF0aWMuZm9sbG93XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlZHVjZSgoIHIsIGkgKSA9PiAoIHIgfHwgc3RhdGUgJiYgc3RhdGVbIGkgXSApLCBmYWxzZSlcbiAgICAgICAgICAgICAgICAgICAgICA6IF9zdGF0aWMuZm9sbG93XG4gICAgICAgICAgICAgICAgICAgICAgICA/IE9iamVjdC5rZXlzKF9zdGF0aWMuZm9sbG93KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVkdWNlKCggciwgaSApID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHx8IHN0YXRlICYmIGlzLmZuKF9zdGF0aWMuZm9sbG93WyBpIF0pICYmIF9zdGF0aWMuZm9sbG93WyBpIF0uY2FsbCh0aGlzLCBzdGF0ZVsgaSBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfHwgX3N0YXRpYy5mb2xsb3dbIGkgXSAmJiBzdGF0ZVsgaSBdICE9PSB0aGlzLnN0YXRlWyBpIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgZmFsc2UpIDogdHJ1ZVxuICAgICAgICAgICAgICAgKTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogT3ZlcnJpZGFibGUgYXBwbGllciAvIHJlbWFwcGVyXG4gICAgICogSWYgc3RhdGUgb3IgbGFzdFB1YmxpY1N0YXRlIGFyZSBzaW1wbGUgaGFzaCBtYXBzIGFwcGx5IHdpbGwgcmV0dXJuIHsuLi5kYXRhLFxuICAgICAqIC4uLnN0YXRlfSBpZiBub3QgaXQgd2lsbCByZXR1cm4gdGhlIGxhc3QgcHJpdmF0ZSBzdGF0ZVxuICAgICAqIEBwYXJhbSBkYXRhXG4gICAgICogQHBhcmFtIHN0YXRlXG4gICAgICogQHJldHVybnMgeyp9XG4gICAgICovXG4gICAgYXBwbHkoIGRhdGEsIHN0YXRlLCBjaGFuZ2VzICkge1xuICAgICAgICBzdGF0ZSA9IHN0YXRlIHx8IHRoaXMuc3RhdGU7XG4gICAgICAgIFxuICAgICAgICBpZiAoIHRoaXMucmVmaW5lIClcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlZmluZSguLi5hcmd1bWVudHMpO1xuICAgICAgICBcbiAgICAgICAgaWYgKCAhZGF0YSB8fCBkYXRhLl9fcHJvdG9fXyAhPT0gb2JqUHJvdG8gfHwgc3RhdGUuX19wcm90b19fICE9PSBvYmpQcm90byApXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHJldHVybiB7IC4uLmRhdGEsIC4uLnN0YXRlIH1cbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogQGRlcHJlY2lhdGVkXG4gICAgICogQHBhcmFtIGRhdGFcbiAgICAgKiBAcGFyYW0gc3RhdGVcbiAgICAgKiBAcGFyYW0gY2hhbmdlc1xuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqL1xuICAgIHJlZmluZSggZGF0YSwgc3RhdGUsIGNoYW5nZXMgKSB7XG4gICAgICAgIHN0YXRlID0gc3RhdGUgfHwgdGhpcy5zdGF0ZTtcbiAgICAgICAgXG4gICAgICAgIGlmICggIWRhdGEgfHwgZGF0YS5fX3Byb3RvX18gIT09IG9ialByb3RvIHx8IHN0YXRlLl9fcHJvdG9fXyAhPT0gb2JqUHJvdG8gKVxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICByZXR1cm4geyAuLi5kYXRhLCAuLi5zdGF0ZSB9XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIERlYm91bmNlIHRoaXMgc3RvcmUgcHJvcGFnYXRpb24gKCAmIHJlZHVjaW5nIClcbiAgICAgKiBAcGFyYW0gY2JcbiAgICAgKi9cbiAgICBzdGFiaWxpemUoIGNiICkge1xuICAgICAgICBjYiAmJiB0aGlzLm9uY2UoJ3N0YWJsZScsIGNiKTtcbiAgICAgICAgdGhpcy5fc3RhYmxlICYmIHRoaXMuZW1pdCgndW5zdGFibGUnLCB0aGlzLnN0YXRlLCB0aGlzLmRhdGEpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fc3RhYmxlID0gZmFsc2U7XG4gICAgICAgIFxuICAgICAgICBpZiAoIHRoaXMuX3N0YWJpbGl6ZXIgKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fc3RhYmlsaXplciA9IFRhc2tTZXF1ZW5jZXIucHVzaFRhc2sodGhpcywgJ3B1c2hTdGF0ZScpO1xuICAgIH1cbiAgICBcbiAgICByZXRyaWV2ZSggcGF0aCwgaSA9IDAsIG9iaiA9IHRoaXMuZGF0YSApIHtcbiAgICAgICAgcGF0aCA9IGlzLnN0cmluZyhwYXRoKSA/IHBhdGguc3BsaXQoJy4nKSA6IHBhdGg7XG4gICAgICAgIHJldHVybiAhb2JqIHx8ICFwYXRoIHx8ICFwYXRoLmxlbmd0aFxuICAgICAgICAgICAgICAgPyBvYmpcbiAgICAgICAgICAgICAgIDogcGF0aC5sZW5ndGggPT0gaSArIDFcbiAgICAgICAgICAgICAgICAgPyBvYmpbIHBhdGhbIGkgXSBdXG4gICAgICAgICAgICAgICAgIDogdGhpcy5yZXRyaWV2ZShwYXRoLCBpICsgMSwgb2JqWyBwYXRoWyBpIF0gXSk7XG4gICAgfVxuICAgIFxuICAgIGRpc3BhdGNoKCBhY3Rpb24sIC4uLmFyZ3ogKSB7XG4gICAgICAgIHRoaXMuc2NvcGVPYmouZGlzcGF0Y2goYWN0aW9uLCAuLi5hcmd6KTtcbiAgICB9XG4gICAgXG4gICAgdHJpZ2dlciggYWN0aW9uLCAuLi5hcmd6ICkge1xuICAgICAgICBsZXQgeyBhY3Rpb25zIH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuICAgICAgICBpZiAoIGFjdGlvbnMgJiYgYWN0aW9uc1sgYWN0aW9uIF0gKSB7XG4gICAgICAgICAgICBsZXQgbnMgPSBhY3Rpb25zWyBhY3Rpb24gXS5jYWxsKHRoaXMsIC4uLmFyZ3opO1xuICAgICAgICAgICAgbnMgJiYgdGhpcy5zZXRTdGF0ZShucyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogUHVsbCBzdG9yZXMgaW4gdGhlIHByaXZhdGUgc3RhdGVcbiAgICAgKiBAcGFyYW0gc3RvcmVzICB7QXJyYXl9IChwYXNzZWQgdG8gU3RvcmU6Om1hcCkgRXggOiBbXCJzZXNzaW9uXCIsXG4gICAgICogICAgIFwib3RoZXJOYW1lZFN0b3JlOmtleVwiLCBvdGhlclN0b3JlLmFzKFwib3RoZXJLZXlcIildXG4gICAgICovXG4gICAgcHVsbCggc3RvcmVzLCBkb1dhaXQsIG9yaWdpbiApIHtcbiAgICAgICAgbGV0IGluaXRpYWxPdXRwdXRzID0gdGhpcy5zY29wZU9iai5tYXAodGhpcywgc3RvcmVzKTtcbiAgICAgICAgaWYgKCBkb1dhaXQgKSB7XG4gICAgICAgICAgICB0aGlzLndhaXQoKTtcbiAgICAgICAgICAgIHN0b3Jlcy5mb3JFYWNoKCggcyApID0+IHRoaXMuc2NvcGVbIHMgXSAmJiB0aGlzLndhaXQodGhpcy5zY29wZVsgcyBdKSk7XG4gICAgICAgICAgICB0aGlzLnJlbGVhc2UoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW5pdGlhbE91dHB1dHM7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIFNldCAmIFB1c2ggdGhlIHJlc3VsdCBkYXRhIHRvIGZvbGxvd2VycyBpZiBzdGFibGVcbiAgICAgKiBAcGFyYW0gY2JcbiAgICAgKi9cbiAgICBwdXNoKCBkYXRhLCBmb3JjZSwgY2IgKSB7XG4gICAgICAgIGNiICAgID0gZm9yY2UgPT09IHRydWUgPyBjYiA6IGZvcmNlO1xuICAgICAgICBmb3JjZSA9IGZvcmNlID09PSB0cnVlO1xuICAgICAgICBpZiAoICFmb3JjZSAmJlxuICAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgICAgIXRoaXMuaGFzRGF0YUNoYW5nZShkYXRhKVxuICAgICAgICAgICAgIClcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBjYiAmJiBjYigpO1xuICAgICAgICAgICAgaWYgKCAhdGhpcy5fX2xvY2tzLmFsbCApIHtcbiAgICAgICAgICAgICAgICBsZXQgc3RhYmxlICAgPSB0aGlzLl9zdGFibGU7XG4gICAgICAgICAgICAgICAgdGhpcy5fc3RhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAhc3RhYmxlICYmIHRoaXMuZW1pdCgnc3RhYmxlJywgdGhpcy5zdGF0ZSwgdGhpcy5kYXRhKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9zdGFiaWxpemVyID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICAgICAgdGhpcy53YWl0KCk7XG4gICAgICAgIHRoaXMucmVsZWFzZShjYik7XG4gICAgICAgIFxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBDYWxsIHRoZSBhcHBseSBmbiB1c2luZyB0aGUgY3VycmVudCBhY2N1bXVsYXRlZCBzdGF0ZSB1cGRhdGUgdGhlbiwgcHVzaCB0aGVcbiAgICAgKiByZXN1bHRpbmcgZGF0YSBpZiBzdGFibGVcbiAgICAgKiBAcGFyYW0gZm9yY2VcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBwdXNoU3RhdGUoIGZvcmNlICkge1xuICAgICAgICBcbiAgICAgICAgaWYgKCAhZm9yY2UgJiYgIXRoaXMuX2NoYW5nZXNTVyAmJiB0aGlzLmRhdGEgKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBcbiAgICAgICAgdmFyIG5leHRTdGF0ZSA9IHRoaXMuX25leHRTdGF0ZSB8fCB7IC4uLnRoaXMuc3RhdGUsIC4uLiggdGhpcy5fY2hhbmdlc1NXIHx8IHt9ICkgfSxcbiAgICAgICAgICAgIG5leHREYXRhICA9IHRoaXMuYXBwbHkodGhpcy5kYXRhLCBuZXh0U3RhdGUsIHRoaXMuX2NoYW5nZXNTVyk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9zdGFiaWxpemVyID0gbnVsbDtcbiAgICAgICAgdGhpcy5zdGF0ZSAgICAgICA9IG5leHRTdGF0ZTtcbiAgICAgICAgdGhpcy5fY2hhbmdlc1NXICA9IG51bGw7XG4gICAgICAgIFxuICAgICAgICBpZiAoICFmb3JjZSAmJlxuICAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgICAgIXRoaXMuaGFzRGF0YUNoYW5nZShuZXh0RGF0YSlcbiAgICAgICAgICAgICApXG4gICAgICAgICkge1xuICAgICAgICAgICAgaWYgKCAhdGhpcy5fX2xvY2tzLmFsbCApIHtcbiAgICAgICAgICAgICAgICBsZXQgc3RhYmxlICAgPSB0aGlzLl9zdGFibGU7XG4gICAgICAgICAgICAgICAgdGhpcy5fc3RhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAhc3RhYmxlICYmIHRoaXMuZW1pdCgnc3RhYmxlJywgdGhpcy5zdGF0ZSwgdGhpcy5kYXRhKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9zdGFiaWxpemVyID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdGhpcy5kYXRhID0gbmV4dERhdGE7XG4gICAgICAgIHRoaXMud2FpdCgpO1xuICAgICAgICB0aGlzLnJlbGVhc2UoKTtcbiAgICAgICAgXG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIEFkZCAncFN0YXRlJyB0byB0aGUgY3VycmVudCBhY2N1bXVsYXRlZCBzdGF0ZSB1cGRhdGVzXG4gICAgICogJiB3YWl0IHNvdXJjZSBzdG9yZXMgc3RhYmlsaXphdGlvbiBiZWZvcmUgcHVzaGluZyB0aGVzZSBzdGF0ZSB1cGRhdGVzXG4gICAgICogQHBhcmFtIHBTdGF0ZVxuICAgICAqIEBwYXJhbSBjYlxuICAgICAqL1xuICAgIHNldFN0YXRlKCBwU3RhdGUsIGNiLCBzeW5jICkge1xuICAgICAgICB2YXIgaSAgICAgICA9IDAsIGNoYW5nZSxcbiAgICAgICAgICAgIGNoYW5nZXMgPSB0aGlzLl9jaGFuZ2VzU1cgPSB0aGlzLl9jaGFuZ2VzU1cgfHwge307XG4gICAgICAgIGZvciAoIHZhciBrIGluIHBTdGF0ZSApXG4gICAgICAgICAgICBpZiAoICF0aGlzLnN0YXRlXG4gICAgICAgICAgICAgICAgIHx8IGNoYW5nZXMuaGFzT3duUHJvcGVydHkoaykvLyB0b2RvXG4gICAgICAgICAgICAgICAgICYmIChcbiAgICAgICAgICAgICAgICAgICAgIHBTdGF0ZVsgayBdICE9PSBjaGFuZ2VzWyBrIF1cbiAgICAgICAgICAgICAgICAgKSB8fCBwU3RhdGUuaGFzT3duUHJvcGVydHkoaylcbiAgICAgICAgICAgICAgICAgJiYgKFxuICAgICAgICAgICAgICAgICBwU3RhdGVbIGsgXSAhPT0gdGhpcy5zdGF0ZVsgayBdXG4gICAgICAgICAgICAgICAgIHx8XG4gICAgICAgICAgICAgICAgICggdGhpcy5zdGF0ZVsgayBdICYmIHBTdGF0ZVsgayBdICYmICggcFN0YXRlWyBrIF0uX3JldiAhPSB0aGlzLl9yZXZzWyBrIF0gKSApLy8gcmV2L2hhc2ggdXBkYXRlXG4gICAgICAgICAgICAgICAgICkgKSB7XG4gICAgICAgICAgICAgICAgY2hhbmdlICAgICAgICAgID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLl9yZXZzWyBrIF0gPSBwU3RhdGVbIGsgXSAmJiBwU3RhdGVbIGsgXS5fcmV2IHx8IHRydWU7XG4gICAgICAgICAgICAgICAgY2hhbmdlc1sgayBdICAgID0gcFN0YXRlWyBrIF07XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9uZXh0U3RhdGUgPSB7IC4uLnRoaXMuc3RhdGUsIC4uLmNoYW5nZXMgfTtcbiAgICAgICAgaWYgKCAhdGhpcy5zaG91bGRBcHBseSh0aGlzLl9uZXh0U3RhdGUpICkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAoIHN5bmMgKSB7XG4gICAgICAgICAgICB0aGlzLnB1c2hTdGF0ZSgpO1xuICAgICAgICAgICAgY2IgJiYgY2IoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmICggY2hhbmdlICkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhYmlsaXplKGNiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgY2IgJiYgY2IoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogVXBkYXRlIHRoZSBjdXJyZW50IHN0YXRlICYgcHVzaCBpdFxuICAgICAqIEBwYXJhbSBwU3RhdGVcbiAgICAgKiBAcGFyYW0gY2JcbiAgICAgKi9cbiAgICBzZXRTdGF0ZVN5bmMoIHBTdGF0ZSApIHtcbiAgICAgICAgdmFyIGkgICAgICAgPSAwLCBjaGFuZ2UsXG4gICAgICAgICAgICBjaGFuZ2VzID0gdGhpcy5fY2hhbmdlc1NXID0gdGhpcy5fY2hhbmdlc1NXIHx8IHt9O1xuICAgICAgICBmb3IgKCB2YXIgayBpbiBwU3RhdGUgKVxuICAgICAgICAgICAgaWYgKCAhdGhpcy5zdGF0ZSB8fCBwU3RhdGUuaGFzT3duUHJvcGVydHkoaylcbiAgICAgICAgICAgICAgICAgJiYgKFxuICAgICAgICAgICAgICAgICBwU3RhdGVbIGsgXSAhPSB0aGlzLnN0YXRlWyBrIF1cbiAgICAgICAgICAgICAgICAgfHxcbiAgICAgICAgICAgICAgICAgKCB0aGlzLnN0YXRlWyBrIF0gJiYgcFN0YXRlWyBrIF0gJiYgKCBwU3RhdGVbIGsgXS5fcmV2ICE9IHRoaXMuX3JldnNbIGsgXSApICkvLyByZXYvaGFzaCB1cGRhdGVcbiAgICAgICAgICAgICAgICAgKSApIHtcbiAgICAgICAgICAgICAgICBjaGFuZ2UgICAgICAgICAgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuX3JldnNbIGsgXSA9IHBTdGF0ZVsgayBdICYmIHBTdGF0ZVsgayBdLl9yZXYgfHwgdHJ1ZTtcbiAgICAgICAgICAgICAgICBjaGFuZ2VzWyBrIF0gICAgPSBwU3RhdGVbIGsgXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgdGhpcy5zaG91bGRBcHBseSh7IC4uLiggdGhpcy5zdGF0ZSB8fCB7fSApLCAuLi5jaGFuZ2VzIH0pICYmIHRoaXMucHVzaFN0YXRlKCk7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGE7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIGdldCBhIHN0b3JlLWtleSBwYWlyIGZvciBTdG9yZTo6bWFwXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICAgKiBAcmV0dXJucyB7e3N0b3JlOiBTdG9yZSwgbmFtZTogKn19XG4gICAgICovXG4gICAgYXMoIG5hbWUgKSB7XG4gICAgICAgIHJldHVybiB7IHN0b3JlOiB0aGlzLCBuYW1lIH07XG4gICAgfVxuICAgIFxuICAgIG9uKCBsaXN0cyApIHtcbiAgICAgICAgaWYgKCAhaXMuc3RyaW5nKGxpc3RzKSAmJiBsaXN0cyApXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhsaXN0cykuZm9yRWFjaChrID0+IHN1cGVyLm9uKGssIGxpc3RzWyBrIF0pKTtcbiAgICAgICAgZWxzZSBzdXBlci5vbiguLi5hcmd1bWVudHMpO1xuICAgIH1cbiAgICBcbiAgICByZW1vdmVMaXN0ZW5lciggbGlzdHMgKSB7XG4gICAgICAgIGlmICggIWlzLnN0cmluZyhsaXN0cykgJiYgbGlzdHMgKVxuICAgICAgICAgICAgT2JqZWN0LmtleXMobGlzdHMpLmZvckVhY2goayA9PiBzdXBlci5yZW1vdmVMaXN0ZW5lcihrLCBsaXN0c1sgayBdKSk7XG4gICAgICAgIGVsc2Ugc3VwZXIucmVtb3ZlTGlzdGVuZXIoLi4uYXJndW1lbnRzKTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogaXMgY29tcGxldGUgKGFsbCByZXF1aWVyZWQga2V5cyBhcmUgaGVyZSlcbiAgICAgKiBAcmV0dXJucyBib29sXG4gICAgICovXG4gICAgaXNDb21wbGV0ZSggc3RhdGUgPSB0aGlzLnN0YXRlICkge1xuICAgICAgICB2YXIgX3N0YXRpYyA9IHRoaXMuY29uc3RydWN0b3I7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAhdGhpcy5fcmVxdWlyZVxuICAgICAgICAgICAgfHwgIXRoaXMuX3JlcXVpcmUubGVuZ3RoXG4gICAgICAgICAgICB8fCBzdGF0ZSAmJiB0aGlzLl9yZXF1aXJlLnJlZHVjZShcbiAgICAgICAgICAgICAgICAoIHIsIGtleSApID0+ICggciAmJiBzdGF0ZVsga2V5IF0gKSxcbiAgICAgICAgICAgICAgICB0cnVlXG4gICAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIGlzIHN0YWJsZVxuICAgICAqIEByZXR1cm5zIGJvb2xcbiAgICAgKi9cbiAgICBpc1N0YWJsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0YWJsZTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogU2VyaWFsaXplIHN0YXRlICYgZGF0YSB3aXRoIHNvdXJjZXMgcmVmc1xuICAgICAqIEByZXR1cm5zIGJvb2xcbiAgICAgKi9cbiAgICBzZXJpYWxpemUoIGNmZyA9IHt9LCBvdXRwdXQgPSB7fSApIHtcbiAgICAgICAgbGV0IHJlZnMgPVxuICAgICAgICAgICAgICAgICFjZmcubm9yZWZzICYmIGlzLmFycmF5KHRoaXMuX3VzZSkgJiYgdGhpcy5fdXNlLnJlZHVjZShcbiAgICAgICAgICAgICAgICAoIG1hcCwga2V5ICkgPT4gey8vdG9kb1xuICAgICAgICAgICAgICAgICAgICBsZXQgbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWFzLCBwYXRoLCBfa2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmU7XG4gICAgICAgICAgICAgICAgICAgIGlmICgga2V5LnN0b3JlICYmIGtleS5uYW1lICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpYXMgPSBuYW1lID0ga2V5Lm5hbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9yZSA9IGtleS5zdG9yZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICggaXMuZm4oa2V5KSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUgPSBhbGlhcyA9IGtleS5uYW1lIHx8IGtleS5kZWZhdWx0TmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlID0ga2V5O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgX2tleSAgPSBrZXkubWF0Y2goLyhbXFx3X10rKSgoPzpcXC5bXFx3X10rKSopKD86XFw6KFtcXHdfXSspKT8vKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUgID0gX2tleVsgMSBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aCAgPSBfa2V5WyAyIF0gJiYgX2tleVsgMiBdLnN1YnN0cigxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlID0gdGhpcy5zY29wZU9iai5zdG9yZXNbIF9rZXlbIDEgXSBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpYXMgPSBfa2V5WyAzIF0gfHwgcGF0aCAmJiBwYXRoLm1hdGNoKC8oW15cXC5dKikkLylbIDAgXSB8fCBfa2V5WyAxIF07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKCBzdG9yZSAmJiAhc3RvcmUuc2NvcGVPYmouXy5pc0xvY2FsSWQgKVxuICAgICAgICAgICAgICAgICAgICAgICAgbWFwWyBhbGlhcyBdID0gc3RvcmUuc2NvcGVPYmouX2lkICsgJy8nICsgbmFtZTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1hcDtcbiAgICAgICAgICAgICAgICB9LCB7fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgfHwge307XG4gICAgICAgIFxuICAgICAgICBrZXlXYWxrblNldChcbiAgICAgICAgICAgIG91dHB1dCxcbiAgICAgICAgICAgICggdGhpcy5zY29wZU9iai5faWQgKyAnLycgKyB0aGlzLm5hbWUgKSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0ZTogdGhpcy5zdGF0ZSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjZmcubm9yZWZzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA/IHsgLi4udGhpcy5zdGF0ZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICA6IE9iamVjdC5rZXlzKHRoaXMuc3RhdGUpLnJlZHVjZSgoIGgsIGsgKSA9PiAoICFyZWZzWyBrIF0gJiYgKCBoWyBrIF0gPSB0aGlzLnN0YXRlWyBrIF0gKSwgaCApLCB7fSlcbiAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBkYXRhIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGEuX19wcm90b19fID09PSBvYmpQcm90byA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGEgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgKCBpcy5ib29sKHRoaXMuZGF0YSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfHwgaXMubnVtYmVyKHRoaXMuZGF0YSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfHwgaXMuc3RyaW5nKHRoaXMuZGF0YSkgKSAmJiB0aGlzLmRhdGFcbiAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICB8fCB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAsXG4gICAgICAgICAgICAgICAgcmVmc1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gb3V0cHV0O1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiByZXN0b3JlIHN0YXRlICYgZGF0YVxuICAgICAqIEByZXR1cm5zIGJvb2xcbiAgICAgKi9cbiAgICByZXN0b3JlKCBzbmFwc2hvdCwgaW1tZWRpYXRlICkge1xuICAgICAgICBzbmFwc2hvdCA9IHNuYXBzaG90XG4gICAgICAgICAgICAgICAgICAgJiYga2V5V2Fsa25HZXQoc25hcHNob3QsIHRoaXMuc2NvcGVPYmouX2lkICsgJy8nICsgdGhpcy5uYW1lKVxuICAgICAgICAgICAgICAgICAgIHx8IHRoaXMuJHNjb3BlLnRha2VTbmFwc2hvdEJ5S2V5KHRoaXMuc2NvcGVPYmouX2lkICsgJy8nICsgdGhpcy5uYW1lKTtcbiAgICAgICAgXG4gICAgICAgIGlmICggIXNuYXBzaG90IClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgXG4gICAgICAgIGlmICggc25hcHNob3QgKSB7XG4gICAgICAgICAgICBpZiAoICF0aGlzLmlzU3RhYmxlKCkgJiYgIWltbWVkaWF0ZSApXG4gICAgICAgICAgICAgICAgdGhpcy50aGVuKCgpID0+IHJlc3RvcmUoc25hcHNob3QpKVxuICAgICAgICAgICAgbGV0IHNuYXA7XG4gICAgICAgICAgICB0aGlzLnN0YXRlID0geyAuLi5zbmFwc2hvdC5zdGF0ZSB9O1xuICAgICAgICAgICAgT2JqZWN0LmtleXMoc25hcHNob3QucmVmcykuZm9yRWFjaChcbiAgICAgICAgICAgICAgICAoIGtleSApID0+IHsvL3RvZG9cbiAgICAgICAgICAgICAgICAgICAgaWYgKCBzbmFwID0gdGhpcy4kc2NvcGUuZ2V0U25hcHNob3RCeUtleShzbmFwc2hvdC5yZWZzWyBrZXkgXSkgKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZVsga2V5IF0gPSBzbmFwLmRhdGE7XG4gICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2Fybignbm90IGZvdW5kIDogJywga2V5LCBzbmFwICYmIHNuYXAucmVmc1sga2V5IF0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLmRhdGEgPSBzbmFwc2hvdC5kYXRhO1xuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogVW4gYmluZCB0aGlzIHN0b3JlIG9mZiB0aGUgZ2l2ZW4gY29tcG9uZW50LWtleVxuICAgICAqIEBwYXJhbSBvYmpcbiAgICAgKiBAcGFyYW0ga2V5XG4gICAgICogQHJldHVybnMge0FycmF5LjwqPn1cbiAgICAgKi9cbiAgICB1bkJpbmQoIG9iaiwga2V5LCBwYXRoICkge1xuICAgICAgICB2YXIgZm9sbG93ZXJzID0gdGhpcy5fZm9sbG93ZXJzLFxuICAgICAgICAgICAgaSAgICAgICAgID0gZm9sbG93ZXJzICYmIGZvbGxvd2Vycy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggZm9sbG93ZXJzICYmIGktLSApXG4gICAgICAgICAgICBpZiAoIGZvbGxvd2Vyc1sgaSBdWyAwIF0gPT09IG9iaiAmJiBmb2xsb3dlcnNbIGkgXVsgMSBdID09PSBrZXkgJiYgZm9sbG93ZXJzWyBpIF1bIDIgXSA9PT0gcGF0aCApXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZvbGxvd2Vycy5zcGxpY2UoaSwgMSk7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIEJpbmQgdGhpcyBzdG9yZSBjaGFuZ2VzIHRvIHRoZSBnaXZlbiBjb21wb25lbnQta2V5XG4gICAgICogQHBhcmFtIG9iaiB7UmVhY3QuQ29tcG9uZW50fFN0b3JlfGZ1bmN0aW9uKVxuICAgICAqIEBwYXJhbSBrZXkge3N0cmluZ30gb3B0aW9uYWwga2V5IHdoZXJlIHRvIG1hcCB0aGUgcHVibGljIHN0YXRlXG4gICAgICovXG4gICAgYmluZCggb2JqLCBrZXksIHNldEluaXRpYWwgPSB0cnVlLCBwYXRoICkge1xuICAgICAgICB0aGlzLl9mb2xsb3dlcnMucHVzaChbIG9iaiwga2V5LCBwYXRoIF0pO1xuICAgICAgICBpZiAoIHNldEluaXRpYWwgJiYgdGhpcy5kYXRhICYmIHRoaXMuX3N0YWJsZSApIHtcbiAgICAgICAgICAgIGxldCBkYXRhID0gcGF0aCA/IHRoaXMucmV0cmlldmUocGF0aCkgOiB0aGlzLmRhdGE7XG4gICAgICAgICAgICBpZiAoIHR5cGVvZiBvYmogIT0gXCJmdW5jdGlvblwiICkge1xuICAgICAgICAgICAgICAgIGlmICgga2V5ICkgb2JqLnNldFN0YXRlKHsgWyBrZXkgXTogZGF0YSB9KTtcbiAgICAgICAgICAgICAgICBlbHNlIG9iai5zZXRTdGF0ZShkYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIG9iaihkYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBvbmNlKCdzdGFibGUnLCBjYilcbiAgICAgKiBAcGFyYW0gb2JqIHtSZWFjdC5Db21wb25lbnR8U3RvcmV8ZnVuY3Rpb24pXG4gICAgICogQHBhcmFtIGtleSB7c3RyaW5nfSBvcHRpb25hbCBrZXkgd2hlcmUgdG8gbWFwIHRoZSBwdWJsaWMgc3RhdGVcbiAgICAgKi9cbiAgICB0aGVuKCBjYiApIHtcbiAgICAgICAgaWYgKCB0aGlzLl9zdGFibGUgKVxuICAgICAgICAgICAgcmV0dXJuIGNiKHRoaXMuZGF0YSk7XG4gICAgICAgIHRoaXMub25jZSgnc3RhYmxlJywgZSA9PiBjYih0aGlzLmRhdGEpKTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogQWRkIGEgbG9jayBzbyB0aGUgc3RvcmUgd2lsbCBub3QgcHJvcGFnIGl0IGRhdGEgdW50aWxsIHJlbGVhc2UoKSBpcyBjYWxsXG4gICAgICogQHBhcmFtIHByZXZpb3VzIHtTdG9yZXxudW1iZXJ8QXJyYXl9IEBvcHRpb25hbCB3ZiB0byB3YWl0LCByZWxlYXNlcyB0byB3YWl0IG9yXG4gICAgICogICAgIGFycmF5IG9mIHN0dWZmIHRvIHdhaXRcbiAgICAgKiBAcmV0dXJucyB7dGhpc31cbiAgICAgKi9cbiAgICB3YWl0KCBwcmV2aW91cyApIHtcbiAgICAgICAgaWYgKCB0eXBlb2YgcHJldmlvdXMgPT0gXCJudW1iZXJcIiApXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fX2xvY2tzLmFsbCArPSBwcmV2aW91cztcbiAgICAgICAgaWYgKCBpcy5hcnJheShwcmV2aW91cykgKVxuICAgICAgICAgICAgcmV0dXJuIHByZXZpb3VzLm1hcCh0aGlzLndhaXQuYmluZCh0aGlzKSk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9zdGFibGUgJiYgdGhpcy5lbWl0KCd1bnN0YWJsZScsIHRoaXMuc3RhdGUsIHRoaXMuZGF0YSk7XG4gICAgICAgIHRoaXMuX3N0YWJsZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9fbG9ja3MuYWxsKys7XG4gICAgICAgIFxuICAgICAgICBsZXQgcmVhc29uID0gaXMuc3RyaW5nKHByZXZpb3VzKSA/IHByZXZpb3VzIDogbnVsbDtcbiAgICAgICAgaWYgKCByZWFzb24gKSB7XG4gICAgICAgICAgICB0aGlzLl9fbG9ja3NbIHJlYXNvbiBdID0gdGhpcy5fX2xvY2tzWyByZWFzb24gXSB8fCAwO1xuICAgICAgICAgICAgdGhpcy5fX2xvY2tzWyByZWFzb24gXSsrO1xuICAgICAgICB9XG4gICAgICAgIGlmICggcHJldmlvdXMgJiYgaXMuZm4ocHJldmlvdXMudGhlbikgKSB7XG4gICAgICAgICAgICBwcmV2aW91cy50aGVuKHRoaXMucmVsZWFzZS5iaW5kKHRoaXMsIG51bGwpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogRGVjcmVhc2UgbG9ja3MgZm9yIHRoaXMgc3RvcmUsIGlmIGl0IHJlYWNoIDAgLFxuICAgICAqIGl0IHdpbGwgYmUgcHJvcGFnYXRlZCB0byB0aGUgZm9sbG93ZXJzLFxuICAgICAqIHRoZW4sIGFsbCBzdHVmZiBwYXNzZWQgdG8gXCJ0aGVuXCIgY2FsbCBiYWNrIHdpbGwgYmUgZXhlYyAvIHJlbGVhc2VkXG4gICAgICogQHBhcmFtIGRlc3luY1xuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqL1xuICAgIHJlbGVhc2UoIHJlYXNvbiwgY2IgKSB7XG4gICAgICAgIHZhciBfc3RhdGljID0gdGhpcy5jb25zdHJ1Y3RvciwgbWUgPSB0aGlzO1xuICAgICAgICBsZXQgaSAgICAgICA9IDAsIHdhc1N0YWJsZSA9IHRoaXMuX3N0YWJsZTtcbiAgICAgICAgXG4gICAgICAgIGlmICggaXMuZm4ocmVhc29uKSApIHtcbiAgICAgICAgICAgIGNiICAgICA9IHJlYXNvbjtcbiAgICAgICAgICAgIHJlYXNvbiA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmICggcmVhc29uICkge1xuICAgICAgICAgICAgaWYgKCB0aGlzLl9fbG9ja3NbIHJlYXNvbiBdID09IDAgKVxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJSZWxlYXNlIG1vcmUgdGhhbiBsb2NraW5nICFcIiwgcmVhc29uKTtcbiAgICAgICAgICAgIHRoaXMuX19sb2Nrc1sgcmVhc29uIF0gPSB0aGlzLl9fbG9ja3NbIHJlYXNvbiBdIHx8IDA7XG4gICAgICAgICAgICB0aGlzLl9fbG9ja3NbIHJlYXNvbiBdLS07XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmICggIXJlYXNvbiAmJiB0aGlzLl9fbG9ja3MuYWxsID09IDAgKVxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlJlbGVhc2UgbW9yZSB0aGFuIGxvY2tpbmcgIVwiKTtcbiAgICAgICAgXG4gICAgICAgIGlmICggIS0tdGhpcy5fX2xvY2tzLmFsbCAmJiB0aGlzLmlzQ29tcGxldGUoKSApIHtcbiAgICAgICAgICAgIGxldCBwcm9wYWcgICA9IHRoaXMuc2hvdWxkUHJvcGFnKHRoaXMuZGF0YSk7XG4gICAgICAgICAgICB0aGlzLl9zdGFibGUgPSB0cnVlO1xuICAgICAgICAgICAgcHJvcGFnICYmIHRoaXMuX3JldisrOy8vXG4gICAgICAgICAgICBpZiAoIHByb3BhZyAmJiB0aGlzLl9mb2xsb3dlcnMubGVuZ3RoIClcbiAgICAgICAgICAgICAgICB0aGlzLl9mb2xsb3dlcnMuZm9yRWFjaChmdW5jdGlvbiBwcm9wYWcoIGZvbGxvd2VyICkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IGZvbGxvd2VyWyAyIF0gPyBtZS5yZXRyaWV2ZShmb2xsb3dlclsgMiBdKSA6IG1lLmRhdGE7XG4gICAgICAgICAgICAgICAgICAgIC8vaWYgKCAhZGF0YSApIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGlmICggdHlwZW9mIGZvbGxvd2VyWyAwIF0gPT0gXCJmdW5jdGlvblwiICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9sbG93ZXJbIDAgXShkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY2IgJiYgaSsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9sbG93ZXJbIDAgXS5zZXRTdGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoIGZvbGxvd2VyWyAxIF0gKSA/IHsgWyBmb2xsb3dlclsgMSBdIF06IGRhdGEgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogZGF0YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vY2IgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICgpID0+ICghKC0taSkgJiYgY2IoKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLylcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vZWxzZVxuICAgICAgICAgICAgIXdhc1N0YWJsZSAmJiB0aGlzLmVtaXQoJ3N0YWJsZScsIHRoaXMuZGF0YSk7XG4gICAgICAgICAgICBwcm9wYWcgJiYgdGhpcy5lbWl0KCd1cGRhdGUnLCB0aGlzLmRhdGEpO1xuICAgICAgICAgICAgY2IgJiYgY2IoKVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgY2IgJiYgdGhpcy50aGVuKGNiKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIFxuICAgIHByb3BhZyggZGF0YSApIHtcbiAgICAgICAgdGhpcy5lbWl0KCd1cGRhdGUnLCBkYXRhKTtcbiAgICB9XG4gICAgXG4gICAgcmV0YWluKCByZWFzb24gKSB7XG4gICAgICAgIHRoaXMuX19yZXRhaW5zLmFsbCsrO1xuICAgICAgICBpZiAoIHJlYXNvbiApIHtcbiAgICAgICAgICAgIHRoaXMuX19yZXRhaW5zWyByZWFzb24gXSA9IHRoaXMuX19yZXRhaW5zWyByZWFzb24gXSB8fCAwO1xuICAgICAgICAgICAgdGhpcy5fX3JldGFpbnNbIHJlYXNvbiBdKys7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgZGlzcG9zZSggcmVhc29uICkge1xuICAgICAgICAvL2NvbnNvbGUud2FybihcImRpc3Bvc2VcIiwgcmVhc29uLCB0aGlzLl9fcmV0YWlucyk7XG4gICAgICAgIGlmICggcmVhc29uICkge1xuICAgICAgICAgICAgaWYgKCAhdGhpcy5fX3JldGFpbnNbIHJlYXNvbiBdIClcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJSUyA6IERpc3Bvc2UgbW9yZSB0aGFuIHJldGFpbmluZyBvbiBzdG9yZSAnXCIgKyB0aGlzLm5hbWUgKyBcIicgOiBcIiArIHJlYXNvbik7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMuX19yZXRhaW5zWyByZWFzb24gXS0tO1xuICAgICAgICB9XG4gICAgICAgIGlmICggdGhpcy5fX3JldGFpbnMuYWxsID09IDAgKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUlMgOiBEaXNwb3NlIG1vcmUgdGhhbiByZXRhaW5pbmcgb24gc3RvcmUgXCIgKyB0aGlzLm5hbWUgKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX19yZXRhaW5zLmFsbC0tO1xuICAgICAgICBcbiAgICAgICAgaWYgKCAhdGhpcy5fX3JldGFpbnMuYWxsICkge1xuICAgICAgICAgICAgaWYgKCB0aGlzLl9wZXJzaXN0ZW5jZVRtICkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2Rlc3Ryb3lUTSAmJiBjbGVhclRpbWVvdXQodGhpcy5fZGVzdHJveVRNKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9kZXN0cm95VE0gPSBzZXRUaW1lb3V0KFxuICAgICAgICAgICAgICAgICAgICBlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2Rlc3Ryb3lUTSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL3RoaXMudGhlbihzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICF0aGlzLl9fcmV0YWlucy5hbGwgJiYgIXRoaXMuZGVhZCAmJiB0aGlzLmRlc3Ryb3koKVxuICAgICAgICAgICAgICAgICAgICAgICAgLy99KTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcGVyc2lzdGVuY2VUbVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvL3RoaXMudGhlbihzID0+XG4gICAgICAgICAgICAgICAgKCAhdGhpcy5fX3JldGFpbnMuYWxsICYmICF0aGlzLmRlYWQgJiYgdGhpcy5kZXN0cm95KCkgKVxuICAgICAgICAgICAgICAgIC8vKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBkZXN0cm95KCkge1xuICAgICAgICAvLyAgY29uc29sZS5sb2coXCJkZXN0cm95XCIsIHRoaXMuX3VpZCk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmVtaXQoJ2Rlc3Ryb3knLCB0aGlzKTtcbiAgICAgICAgaWYgKCB0aGlzLl9zdGFiaWxpemVyIClcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9zdGFiaWxpemVyKTtcbiAgICAgICAgXG4gICAgICAgIGlmICggdGhpcy5fZm9sbG93ZXJzLmxlbmd0aCApXG4gICAgICAgICAgICB0aGlzLl9mb2xsb3dlcnMuZm9yRWFjaChcbiAgICAgICAgICAgICAgICAoIGZvbGxvd2VyICkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIHR5cGVvZiBmb2xsb3dlclsgMCBdICE9PSBcImZ1bmN0aW9uXCIgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIGZvbGxvd2VyWyAwIF0uc3RvcmVzIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgZm9sbG93ZXJbIDAgXS5zdG9yZXNbIGZvbGxvd2VyWyAxIF0gXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgIHRoaXMuX2ZvbGxvd2Vycy5sZW5ndGggPSAwO1xuICAgICAgICB0aGlzLmNvbnN0cnVjdG9yLl9yZXYgID0gdGhpcy5yZXY7XG4gICAgICAgIHRoaXMuZGVhZCAgICAgICAgICAgICAgPSB0cnVlO1xuICAgICAgICB0aGlzLl9yZXZzICAgICAgICAgICAgID0gdGhpcy5kYXRhID0gdGhpcy5zdGF0ZSA9IHRoaXMuc2NvcGUgPSBudWxsO1xuICAgICAgICB0aGlzLnJlbW92ZUFsbExpc3RlbmVycygpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBnZXQgYSBzdGF0aWMgYWxpYXNlZCByZWZlcmVuY2Ugb2YgYSBzdG9yZVxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqIEByZXR1cm5zIHt7c3RvcmU6IFN0b3JlLCBuYW1lOiAqfX1cbiAqL1xuU3RvcmUuYXMgPSBmdW5jdGlvbiAoIG5hbWUgKSB7XG4gICAgcmV0dXJuIHsgc3RvcmU6IHRoaXMsIG5hbWUgfTtcbn1cblxuLyoqXG4gKiBNYXAgYWxsIG5hbWVkIHN0b3JlcyBpbiB7a2V5c30gdG8gdGhlIHtvYmplY3R9J3Mgc3RhdGVcbiAqIEhvb2sgY29tcG9uZW50V2lsbFVubW91bnQgKGZvciByZWFjdCBjb21wKSBvciBkZXN0cm95IHRvIHVuQmluZCB0aGVtIGF1dG9tYXRpY2FsbHlcbiAqIEBzdGF0aWNcbiAqIEBwYXJhbSBvYmplY3Qge09iamVjdH0gdGFyZ2V0IHN0YXRlIGF3YXJlIG9iamVjdCAoUmVhY3QuQ29tcG9uZW50fFN0b3JlfC4uLilcbiAqIEBwYXJhbSBrZXlzIHtBcnJheX0gRXggOiBbXCJzZXNzaW9uXCIsIFwib3RoZXJTdGF0aWNOYW1lZFN0b3JlOmtleVwiLFxuICogICAgIHN0b3JlLmFzKCdhbm90aGVyS2V5JyldXG4gKi9cblN0b3JlLm1hcCA9IGZ1bmN0aW9uICggY1N0b3JlLCBrZXlzLCBzY29wZSwgb3JpZ2luLCBzZXRJbml0aWFsID0gZmFsc2UgKSB7XG4gICAgdmFyIHRhcmdldFJldnMgICAgID0gY1N0b3JlLl9yZXZzIHx8IHt9O1xuICAgIHZhciB0YXJnZXRTY29wZSAgICA9IGNTdG9yZS5zdG9yZXMgfHwgKCBjU3RvcmUuc3RvcmVzID0ge30gKTtcbiAgICB2YXIgaW5pdGlhbE91dHB1dHMgPSB7fTtcbiAgICBrZXlzICAgICAgICAgICAgICAgPSBpcy5hcnJheShrZXlzKSA/IFsgLi4ua2V5cyBdIDogWyBrZXlzIF07XG4gICAgXG4gICAgXG4gICAgc2NvcGUgPSBzY29wZSB8fCBTdG9yZS5zdGF0aWNTY29wZTtcbiAgICBcbiAgICBrZXlzID0ga2V5cy5maWx0ZXIoXG4gICAgICAgIC8vIEB0b2RvIDogdXNlIHF1ZXJ5IHJlZnNcbiAgICAgICAgLy8gKHN0b3JlKShcXC5zdG9yZSkqKFxcWyhcXCp8KHByb3BzKVxcdyspKylcXF0pPyhcXDphbGlhcylcbiAgICAgICAgKCBrZXkgKSA9PiB7XG4gICAgICAgICAgICBpZiAoICFrZXkgKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIk5vdCBhIG1hcHBhYmxlIHN0b3JlIGl0ZW0gJ1wiICsga2V5ICsgXCInIGluIFwiICsgb3JpZ2luICsgJyAhIScpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBuYW1lLFxuICAgICAgICAgICAgICAgIGFsaWFzLFxuICAgICAgICAgICAgICAgIHBhdGgsXG4gICAgICAgICAgICAgICAgc3RvcmUsIF9rZXk7XG4gICAgICAgICAgICBpZiAoIGtleS5zdG9yZSAmJiBrZXkubmFtZSApIHtcbiAgICAgICAgICAgICAgICBhbGlhcyA9IG5hbWUgPSBrZXkubmFtZTtcbiAgICAgICAgICAgICAgICBzdG9yZSA9IGtleS5zdG9yZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKCBpcy5mbihrZXkpICkge1xuICAgICAgICAgICAgICAgIG5hbWUgPSBhbGlhcyA9IGtleS5uYW1lIHx8IGtleS5kZWZhdWx0TmFtZTtcbiAgICAgICAgICAgICAgICBzdG9yZSA9IGtleTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIF9rZXkgID0ga2V5Lm1hdGNoKC8oW1xcd19dKykoKD86XFwuW1xcd19dKykqKSg/OlxcOihbXFx3X10rKSk/Lyk7XG4gICAgICAgICAgICAgICAgbmFtZSAgPSBfa2V5WyAxIF07XG4gICAgICAgICAgICAgICAgcGF0aCAgPSBfa2V5WyAyIF0gJiYgX2tleVsgMiBdLnN1YnN0cigxKTtcbiAgICAgICAgICAgICAgICBzdG9yZSA9IHNjb3BlLnN0b3Jlc1sgX2tleVsgMSBdIF07XG4gICAgICAgICAgICAgICAgYWxpYXMgPSBfa2V5WyAzIF0gfHwgcGF0aCAmJiBwYXRoLm1hdGNoKC8oW15cXC5dKikkLylbIDAgXSB8fCBfa2V5WyAxIF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoICFzdG9yZSApIHtcbiAgICAgICAgICAgICAgICBsZXQgaSA9IFtdO1xuICAgICAgICAgICAgICAgIGZvciAoIHZhciBvIGluIHNjb3BlLnN0b3JlcyApXG4gICAgICAgICAgICAgICAgICAgIGkucHVzaChvKVxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJOb3QgYSBtYXBwYWJsZSBzdG9yZSBpdGVtICdcIiArIG5hbWUgKyBcIi9cIiArIGFsaWFzICsgXCInIGluIFwiICsgKCBjU3RvcmUubmFtZSB8fCBjU3RvcmUgKSArICcgISEnLCBzdG9yZSwgX2tleSwgc2NvcGUuc3RvcmVzLCBpKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIGlzLnJzU2NvcGUoc3RvcmUucHJvdG90eXBlKSApIHNjb3BlLl9tb3VudChuYW1lKTtcbiAgICAgICAgICAgIGlmICggaXMucnNTY29wZShzdG9yZSkgKSB7XG4gICAgICAgICAgICAgICAgc3RvcmUgPSBzY29wZS5fbW91bnQoa2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKCB0YXJnZXRSZXZzWyBuYW1lIF0gKSByZXR1cm4gZmFsc2U7Ly8gaWdub3JlIGRibCB1c2VzIGZvciBub3dcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoIGlzLmZuKHN0b3JlKSApIHtcbiAgICAgICAgICAgICAgICBzY29wZS5fbW91bnQobmFtZSlcbiAgICAgICAgICAgICAgICBzY29wZS5zdG9yZXNbIG5hbWUgXS5iaW5kKGNTdG9yZSwgYWxpYXMsIHNldEluaXRpYWwsIHBhdGgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgc3RvcmUuYmluZChjU3RvcmUsIGFsaWFzLCBzZXRJbml0aWFsLCBwYXRoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gZ2l2ZSBpbml0aWFsIHN0b3JlIHdlaWdodCBiYXNpbmcgc291cmNlc1xuICAgICAgICAgICAgc2NvcGUuc3RvcmVzWyBuYW1lIF0uX3NvdXJjZXMgJiYgY1N0b3JlLl9zb3VyY2VzLnB1c2goLi4uc2NvcGUuc3RvcmVzWyBuYW1lIF0uX3NvdXJjZXMpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB0YXJnZXRSZXZzWyBhbGlhcyBdID0gdGFyZ2V0UmV2c1sgYWxpYXMgXSB8fCB0cnVlO1xuICAgICAgICAgICAgIXRhcmdldFNjb3BlWyBuYW1lIF0gJiYgKCB0YXJnZXRTY29wZVsgbmFtZSBdID0gc2NvcGUuc3RvcmVzWyBuYW1lIF0gKTtcbiAgICAgICAgICAgIGlmICggc2NvcGUuc3RvcmVzWyBuYW1lIF0uaGFzT3duUHJvcGVydHkoJ2RhdGEnKSApXG4gICAgICAgICAgICAgICAgaW5pdGlhbE91dHB1dHNbIG5hbWUgXSA9IHNjb3BlLmRhdGFbIG5hbWUgXTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgKTtcbiAgICBcbiAgICAvLyAuLi4gQHRvZG9cbiAgICBjU3RvcmUub25jZSgnZGVzdHJveScsICggLi4uYXJneiApID0+IHtcbiAgICAgICAga2V5cy5tYXAoXG4gICAgICAgICAgICAoIGtleSApID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgYWxpYXMsIHBhdGgsXG4gICAgICAgICAgICAgICAgICAgIHN0b3JlO1xuICAgICAgICAgICAgICAgIGlmICgga2V5LnN0b3JlICYmIGtleS5uYW1lICkge1xuICAgICAgICAgICAgICAgICAgICBhbGlhcyA9IG5hbWUgPSBrZXkubmFtZTtcbiAgICAgICAgICAgICAgICAgICAgc3RvcmUgPSBrZXkuc3RvcmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKCBpcy5mbihrZXkpICkge1xuICAgICAgICAgICAgICAgICAgICBuYW1lID0gYWxpYXMgPSBrZXkubmFtZSB8fCBrZXkuZGVmYXVsdE5hbWU7XG4gICAgICAgICAgICAgICAgICAgIHN0b3JlID0gc2NvcGUuc3RvcmVzWyBuYW1lIF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBrZXkgICA9IGtleS5tYXRjaCgvKFtcXHdfXSspKCg/OlxcLltcXHdfXSspKikoPzpcXDooW1xcd19dKykpPy8pO1xuICAgICAgICAgICAgICAgICAgICBuYW1lICA9IGtleVsgMSBdO1xuICAgICAgICAgICAgICAgICAgICBwYXRoICA9IGtleVsgMiBdICYmIGtleVsgMiBdLnN1YnN0cigxKTtcbiAgICAgICAgICAgICAgICAgICAgc3RvcmUgPSBzY29wZS5zdG9yZXNbIGtleVsgMSBdIF07XG4gICAgICAgICAgICAgICAgICAgIGFsaWFzID0ga2V5WyAzIF0gfHwgcGF0aCAmJiBwYXRoLm1hdGNoKC8oW15cXC5dKikkLylbIDAgXSB8fCBrZXlbIDEgXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgc3RvcmUgJiYgIWlzLmZuKHN0b3JlKSAmJiBzdG9yZS51bkJpbmQoY1N0b3JlLCBhbGlhcywgcGF0aClcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9KVxuICAgIFxuICAgIHJldHVybiBpbml0aWFsT3V0cHV0cztcbn07XG5cblxuaXMucnNTdG9yZSA9IGZ1bmN0aW9uICggb2JqICkge1xuICAgIHJldHVybiBvYmogaW5zdGFuY2VvZiBTdG9yZVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdG9yZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvU3RvcmUuanMiLCIvKlxuICogQ29weXJpZ2h0IChjKSAgMjAxOCBXaXNlIFdpbGQgV2ViIC5cbiAqXG4gKiAgTUlUIExpY2Vuc2VcbiAqXG4gKiAgUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqICBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiAgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuICogIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqICBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqICBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqICBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiAgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqICBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuICogIFNPRlRXQVJFLlxuICpcbiAqIEBhdXRob3IgOiBOYXRoYW5hZWwgQnJhdW5cbiAqIEBjb250YWN0IDogY2FpcGlsYWJzQGdtYWlsLmNvbVxuICovXG5cbi8vaW1wb3J0IGluZGV4IGZyb20gXCIuL2luZGV4XCI7Ly8gd2lsbCB1c2UgYXMgZXh0ZXJuYWwgdGhlIGluZGV4IGluIGRpc3RcbmltcG9ydCBpcyBmcm9tIFwiaXNcIjtcblxuLyoqXG4gKiBNaW5pbWFsIHB1c2ggc2VxdWVuY2VyLCBhcHBseSBzdG9yZXMgc3BlY2lmaWMgdGFzayBpbiB0aGUgcmlnaHQgb3JkZXIgKHJvb3Qgc3RvcmVzXG4gKiBmaXJzdClcbiAqL1xubGV0IHRhc2tRdWV1ZSAgICAgID0gW10sXG4gICAgY3VyV2VpZ2h0ICAgICAgPSAwLFxuICAgIG1heFdlaWdodCAgICAgID0gMCxcbiAgICBtaW5XZWlnaHQgICAgICA9IDAsXG4gICAgdGFza0NvdW50ICAgICAgPSAwLFxuICAgIGRlU3luYyAgICAgICAgID0gZmFsc2UsXG4gICAgZGVTeW5jTWF4VGFza3MgPSAxMCxcbiAgICB0YXNrLFxuICAgIGlzUnVubmluZyxcbiAgICBlcnJvckNhdGNoZXIgICA9IHtcbiAgICAgICAgbGFzdEVycm9yOiBudWxsLFxuICAgICAgICBkaXNwYXRjaCA6IGZ1bmN0aW9uICggZXJyb3IgKSB7XG4gICAgICAgICAgICBlcnJvckNhdGNoZXIuZGlzYWJsZSgpO1xuICAgICAgICAgICAgaWYgKCB0YXNrICYmIHRhc2tbIDAgXS5oYW5kbGVFcnJvciApIHtcbiAgICAgICAgICAgICAgICB0YXNrWyAwIF0uaGFuZGxlRXJyb3IoZXJyb3IsIHRhc2spO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoIHRhc2sgKVxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJSZVNjb3BlIDogQW4gYXBwbHkgdGFzayBoYXMgZmFpbGVkICEhXCIsIHRhc2tbIDEgXSwgXCIgb24gXCIsIHRhc2tbIDAgXS5uYW1lIHx8IHRhc2tbIDAgXS5jb25zdHJ1Y3Rvci5uYW1lKVxuICAgICAgICBcbiAgICAgICAgICAgIGlzUnVubmluZyA9IGZhbHNlO1xuICAgICAgICAgICAgdGFzayAgICAgID0gbnVsbDtcbiAgICAgICAgICAgIHJ1bk5vdygpO1xuICAgICAgICB9LFxuICAgICAgICBlbmFibGUgICA6ICggdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgKVxuICAgICAgICAgICAgICAgICAgID8gKCkgPT4ge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIGVycm9yQ2F0Y2hlci5kaXNwYXRjaClcbiAgICAgICAgICAgIH0gOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgcHJvY2Vzcy5vbigndW5jYXVnaHRFeGNlcHRpb24nLCBlcnJvckNhdGNoZXIuZGlzcGF0Y2gpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgZGlzYWJsZSAgOiAoIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnIClcbiAgICAgICAgICAgICAgICAgICA/ICgpID0+IHtcbiAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignZXJyb3InLCBlcnJvckNhdGNoZXIuZGlzcGF0Y2gpXG4gICAgICAgICAgICB9IDogKCkgPT4ge1xuICAgICAgICAgICAgICAgIHByb2Nlc3MucmVtb3ZlTGlzdGVuZXIoJ3VuY2F1Z2h0RXhjZXB0aW9uJywgZXJyb3JDYXRjaGVyLmRpc3BhdGNoKTtcbiAgICAgICAgICAgIH1cbiAgICB9XG47XG5cbmZ1bmN0aW9uIHJ1bk5vdygpIHtcbiAgICBpZiAoICFpc1J1bm5pbmcgKSB7XG4gICAgICAgIHJ1bigpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gcnVuKCkge1xuICAgIGxldCBmcm9tICA9IERhdGUubm93KCk7XG4gICAgaXNSdW5uaW5nID0gdHJ1ZTtcbiAgICBlcnJvckNhdGNoZXIuZW5hYmxlKCk7XG4gICAgd2hpbGUgKCB0YXNrQ291bnQgKSB7XG4gICAgICAgIFxuICAgICAgICAvLyB0cnkgZm9yIHRoZSBjdXJyZW50IHdlaWdodFxuICAgICAgICB3aGlsZSAoICEoIHRhc2tRdWV1ZVsgY3VyV2VpZ2h0IF0gJiYgdGFza1F1ZXVlWyBjdXJXZWlnaHQgXS5sZW5ndGggKSApXG4gICAgICAgICAgICBjdXJXZWlnaHQrKztcbiAgICAgICAgXG4gICAgICAgIHRhc2tDb3VudC0tO1xuICAgICAgICB0YXNrID0gdGFza1F1ZXVlWyBjdXJXZWlnaHQgXS5zaGlmdCgpO1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwiVGFzayA6IFwiLCB0YXNrWzFdLCBcIiBvbiBcIiwgdGFza1swXS5uYW1lKTtcbiAgICAgICAgdGFza1sgMCBdWyB0YXNrWyAxIF0gXS5hcHBseSh0YXNrWyAwIF0sIHRhc2tbIDIgXSk7XG4gICAgfVxuICAgIHRhc2sgPSB1bmRlZmluZWQ7XG4gICAgZXJyb3JDYXRjaGVyLmRpc2FibGUoKTtcbiAgICBcbiAgICBpc1J1bm5pbmcgPSBmYWxzZTtcbiAgICBpZiAoIHRhc2tDb3VudCApIHtcbiAgICAgICAgc2V0VGltZW91dChydW5Ob3cpO1xuICAgIH1cbn1cblxuLy9cbi8vaW5kZXguc2V0VGFza0RlU3luYyA9ICggbmIgKSA9PiB7XG4vLyAgICBpZiAoIG5iID09PSBmYWxzZSApXG4vLyAgICAgICAgcmV0dXJuIGRlU3luYyA9IGZhbHNlO1xuLy8gICAgZWxzZSBpZiAoIG5iID09PSB0cnVlICkge1xuLy8gICAgICAgIGRlU3luYyAgICAgICAgID0gdHJ1ZTtcbi8vICAgICAgICBkZVN5bmNNYXhUYXNrcyA9IDEwO1xuLy8gICAgfVxuLy8gICAgZWxzZSAoaXMuaW50KG5iKSlcbi8vICAgIHtcbi8vICAgICAgICBkZVN5bmMgICAgICAgICA9IHRydWU7XG4vLyAgICAgICAgZGVTeW5jTWF4VGFza3MgPSBuYjtcbi8vICAgIH1cbi8vfTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHB1c2hUYXNrKCBvYmosIGZuLCBhcmd6ICkge1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIG1vcmUgYSBzdG9yZSBoYXZlIHNvdXJjZXMsIHRoZSBtb3JlIGl0IHNob3VsZCBiZSBwcm9jZXNzZWQgZmlyc3RcbiAgICAgICAgICogU28gbGVhZnMgc3RvcmVzIHN0YXkgc3luYywgYW5kIHJvb3Qgc3RvcmVzIHJlY2VpdmUgbWVyZ2VkIHN0YXRlIHVwZGF0ZXM7XG4gICAgICAgICAqIGdsb2JhbCBzdGF0ZSBzdGF5IGNvaGVyZW50XG4gICAgICAgICAqXG4gICAgICAgICAqIFRoaXMgbWVhbiB3aGF0ZXZlciB0aGUgbnVtYmVyIG9mIHN0b3JlcyAmIHRoZSBjb21wbGV4aXR5IG9mIHRoZSBkZXBzLFxuICAgICAgICAgKiB1cGRhdGluZyBhIHN0b3JlIHN0YXRlIHdpbGwgdXBkYXRlIGl0cyBzeW5jaHJvbmUgY2hpbGQgc3RvcmVzIGltbWVkaWF0ZWx5XG4gICAgICAgICAqXG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBlIHsqfG51bWJlcn1cbiAgICAgICAgICovXG4gICAgICAgIGxldCB3ZWlnaHQgPSBvYmouX3NvdXJjZXMgJiYgb2JqLl9zb3VyY2VzLmxlbmd0aCB8fCAxLFxuICAgICAgICAgICAgc3RhY2sgID0gdGFza1F1ZXVlWyB3ZWlnaHQgXSA9XG4gICAgICAgICAgICAgICAgdGFza1F1ZXVlWyB3ZWlnaHQgXSB8fCBbXTtcbiAgICAgICAgXG4gICAgICAgIG1heFdlaWdodCA9IE1hdGgubWF4KG1heFdlaWdodCwgd2VpZ2h0KTtcbiAgICAgICAgY3VyV2VpZ2h0ID0gTWF0aC5taW4oY3VyV2VpZ2h0LCB3ZWlnaHQpO1xuICAgICAgICB0YXNrQ291bnQrKztcbiAgICAgICAgXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJQdXNoIFRhc2sgOiBcIiwgZm4sIFwiIG9uIFwiLCBvYmoubmFtZSwgd2VpZ2h0KTtcbiAgICAgICAgc3RhY2sucHVzaChbIG9iaiwgZm4sIGFyZ3ogXSk7XG4gICAgICAgIHNldFRpbWVvdXQocnVuTm93LCAwKTtcbiAgICAgICAgcmV0dXJuIHN0YWNrLmxlbmd0aDtcbiAgICB9XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlscy9UYXNrU2VxdWVuY2VyLmpzIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9wcm9jZXNzL2Jyb3dzZXIuanNcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpICAyMDE4IFdpc2UgV2lsZCBXZWIgLlxuICpcbiAqICBNSVQgTGljZW5zZVxuICpcbiAqICBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiAgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqICB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiAgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiAgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiAgVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG4gKiAgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqICBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG4gKiAgU09GVFdBUkUuXG4gKlxuICogQGF1dGhvciA6IE5hdGhhbmFlbCBCcmF1blxuICogQGNvbnRhY3QgOiBjYWlwaWxhYnNAZ21haWwuY29tXG4gKi9cblxuaW1wb3J0IGlzICAgIGZyb20gJ2lzJ1xuXG5jb25zdCBTaW1wbGVPYmplY3RQcm90byA9ICgge30gKS5jb25zdHJ1Y3RvcjtcblxubGV0IHNjb3BhYmxlcyA9IFtdO1xuXG5mdW5jdGlvbiBhZGRTY29wYWJsZVR5cGUoIHRlc3QsIGhhbmRsZSwgbWVtYmVyID0gZmFsc2UsIHN0YXRlU2NvcGUgPSBmYWxzZSApIHtcbiAgICBzY29wYWJsZXMucHVzaChcbiAgICAgICAge1xuICAgICAgICAgICAgdGVzdCxcbiAgICAgICAgICAgIG1lbWJlcixcbiAgICAgICAgICAgIHN0YXRlU2NvcGUsXG4gICAgICAgICAgICBoYW5kbGVcbiAgICAgICAgfVxuICAgIClcbn1cblxuLy9cbmZ1bmN0aW9uIGlzU2NvcGFibGVUeXBlKCBDb21wLCBtZW1iZXIsIHN0YXRlU2NvcGUgKSB7XG4gICAgXG4gICAgZm9yICggbGV0IGkgPSAwOyBpIDwgc2NvcGFibGVzLmxlbmd0aDsgaSsrIClcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgKCBtZW1iZXIgPT09IHVuZGVmaW5lZCB8fCBtZW1iZXIgPT0gc2NvcGFibGVzWyBpIF0ubWVtYmVyIClcbiAgICAgICAgICAgICYmIHN0YXRlU2NvcGUgPT0gc2NvcGFibGVzWyBpIF0uc3RhdGVTY29wZVxuICAgICAgICAgICAgJiYgc2NvcGFibGVzWyBpIF0udGVzdChDb21wKVxuICAgICAgICApXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICBcbiAgICByZXR1cm4gZmFsc2U7XG4gICAgXG59XG5cbmZ1bmN0aW9uIGFwcGx5U2NvcGFibGVUeXBlKCBDb21wLCBhcmd6LCBtZW1iZXIsIHN0YXRlU2NvcGUgKSB7XG4gICAgXG4gICAgZm9yICggbGV0IGkgPSAwOyBpIDwgc2NvcGFibGVzLmxlbmd0aDsgaSsrIClcbiAgICAgICAgaWYgKCBtZW1iZXIgPT0gc2NvcGFibGVzWyBpIF0ubWVtYmVyICYmIHN0YXRlU2NvcGUgPT0gc2NvcGFibGVzWyBpIF0uc3RhdGVTY29wZSAmJiBzY29wYWJsZXNbIGkgXS50ZXN0KENvbXApIClcbiAgICAgICAgICAgIHJldHVybiBzY29wYWJsZXNbIGkgXS5oYW5kbGUoQ29tcCwgLi4uYXJneik7XG4gICAgXG4gICAgY29uc29sZS53YXJuKFwicmVTY29wZSA6IFVua25vd24gdHlwZVwiLCBDb21wKVxuICAgIFxuICAgIHJldHVybiBmYWxzZTtcbiAgICBcbn1cblxuZnVuY3Rpb24gcmVTY29wZSggLi4uYXJneiApIHtcbiAgICAvLyBhcmUgd2UgZGVjb3JhdGluZyBhIG1lbWJlciAvIHdpdGhvdXQgYXJnelxuICAgIGlmICggYXJnelsgMCBdIGluc3RhbmNlb2YgU2ltcGxlT2JqZWN0UHJvdG8gJiYgYXJnelsgMiBdIGluc3RhbmNlb2YgU2ltcGxlT2JqZWN0UHJvdG8gJiYgYXJnelsgMCBdLmhhc093blByb3BlcnR5KGFyZ3pbIDEgXSkgKSB7XG4gICAgICAgIGFyZ3pbIDIgXS52YWx1ZSA9IGFwcGx5U2NvcGFibGVUeXBlKGFyZ3pbIDAgXSwgW10sIHRydWUsIGZhbHNlKTtcbiAgICAgICAgcmV0dXJuIGFyZ3pbIDAgXTtcbiAgICB9XG4gICAgZWxzZSBpZiAoICFpc1Njb3BhYmxlVHlwZShhcmd6WyAwIF0sIHVuZGVmaW5lZCwgZmFsc2UpICkge1xuICAgICAgICByZXR1cm4gKCAuLi5hcmd6MiApID0+IHtcbiAgICAgICAgICAgIC8vIGFyZSB3ZSBkZWNvcmF0aW5nIGEgbWVtYmVyIC8gd2l0aCBhcmd6XG4gICAgICAgICAgICBpZiAoIGFyZ3oyWyAwIF0gaW5zdGFuY2VvZiBTaW1wbGVPYmplY3RQcm90byAmJiBhcmd6MlsgMiBdIGluc3RhbmNlb2YgU2ltcGxlT2JqZWN0UHJvdG8gJiYgYXJnejJbIDAgXS5oYXNPd25Qcm9wZXJ0eShhcmd6MlsgMSBdKSApIHtcbiAgICAgICAgICAgICAgICBhcmd6MlsgMiBdLnZhbHVlID0gYXBwbHlTY29wYWJsZVR5cGUoYXJnejJbIDAgXSwgYXJneiwgdHJ1ZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIHJldHVybiBhcmd6MlsgMCBdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHJldHVybiByZVNjb3BlKGFyZ3oyWyAwIF0sIC4uLmFyZ3opO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBhcHBseVNjb3BhYmxlVHlwZShhcmd6WyAwIF0sIGFyZ3ouc2xpY2UoMSksIGZhbHNlLCBmYWxzZSk7XG59XG5cbmZ1bmN0aW9uIHNjb3BlVG9TdGF0ZSggLi4uYXJneiApIHtcbiAgICAvLyBhcmUgd2UgZGVjb3JhdGluZyBhIG1lbWJlciAvIHdpdGhvdXQgYXJnelxuICAgIGlmICggYXJnelsgMCBdIGluc3RhbmNlb2YgU2ltcGxlT2JqZWN0UHJvdG8gJiYgYXJnelsgMiBdIGluc3RhbmNlb2YgU2ltcGxlT2JqZWN0UHJvdG8gJiYgYXJnelsgMCBdLmhhc093blByb3BlcnR5KGFyZ3pbIDEgXSkgKSB7XG4gICAgICAgIGFyZ3pbIDIgXS52YWx1ZSA9IGFwcGx5U2NvcGFibGVUeXBlKGFyZ3pbIDAgXSwgW10sIHRydWUsIHRydWUpO1xuICAgICAgICByZXR1cm4gYXJnelsgMCBdO1xuICAgIH1cbiAgICBlbHNlIGlmICggIWlzU2NvcGFibGVUeXBlKGFyZ3pbIDAgXSwgdW5kZWZpbmVkLCB0cnVlKSApIHtcbiAgICAgICAgcmV0dXJuICggLi4uYXJnejIgKSA9PiB7XG4gICAgICAgICAgICAvLyBhcmUgd2UgZGVjb3JhdGluZyBhIG1lbWJlciAvIHdpdGggYXJnelxuICAgICAgICAgICAgaWYgKCBhcmd6MlsgMCBdIGluc3RhbmNlb2YgU2ltcGxlT2JqZWN0UHJvdG8gJiYgYXJnejJbIDIgXSBpbnN0YW5jZW9mIFNpbXBsZU9iamVjdFByb3RvICYmIGFyZ3oyWyAwIF0uaGFzT3duUHJvcGVydHkoYXJnejJbIDEgXSkgKSB7XG4gICAgICAgICAgICAgICAgYXJnejJbIDIgXS52YWx1ZSA9IGFwcGx5U2NvcGFibGVUeXBlKGFyZ3oyWyAwIF0sIGFyZ3osIHRydWUsIHRydWUpO1xuICAgICAgICAgICAgICAgIHJldHVybiBhcmd6MlsgMCBdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHJldHVybiBzY29wZVRvU3RhdGUoYXJnejJbIDAgXSwgLi4uYXJneik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGFwcGx5U2NvcGFibGVUeXBlKGFyZ3pbIDAgXSwgYXJnei5zbGljZSgxKSwgZmFsc2UsIHRydWUpO1xufVxuXG4vL1xuLy9hZGRTY29wYWJsZVR5cGUoXG4vLyAgICAoIENvbXAgKSA9PiAoQ29tcCAmJiBDb21wLnByb3RvdHlwZSBpbnN0YW5jZW9mIFN0b3JlKSxcbi8vICAgIGZ1bmN0aW9uIHJlU2NvcGUoIC4uLmFyZ3ogKSB7XG4vLyAgICAgICAgbGV0IEJhc2VTdG9yZSAgICA9ICghYXJnelswXSB8fCBhcmd6WzBdLnByb3RvdHlwZSBpbnN0YW5jZW9mIFN0b3JlKSAmJlxuLy8gYXJnei5zaGlmdCgpLCBzY29wZSAgICAgICAgPSAoIWFyZ3pbMF0gfHwgYXJnelswXSBpbnN0YW5jZW9mIFNjb3BlIHx8IGlzLmZuKGFyZ3pbMF0pKVxuLy8gJiYgYXJnei5zaGlmdCgpLCB1c2UgICAgICAgICAgPSAoaXMuYXJyYXkoYXJnelswXSkpICYmIGFyZ3ouc2hpZnQoKSwgc3RhdGVNYXAgICAgID1cbi8vICF1c2UgJiYgKCFhcmd6WzBdIHx8IGFyZ3pbMF0gaW5zdGFuY2VvZiBTaW1wbGVPYmplY3RQcm90bykgJiYgYXJnei5zaGlmdCgpLFxuLy8gaW5pdGlhbFN0YXRlID0ge307ICBsZXQgY29tcE5hbWUgPSBCYXNlU3RvcmUuZGlzcGxheU5hbWUgfHwgQmFzZVN0b3JlLm5hbWU7ICB1c2UgPVxuLy8gWy4uLihCYXNlU3RvcmUudXNlIHx8IFtdKSwgLi4uKHVzZSB8fCBbXSldOyBzdGF0ZU1hcCAmJlxuLy8gU2NvcGUuc3RhdGVNYXBUb1JlZkxpc3Qoc3RhdGVNYXAsIGluaXRpYWxTdGF0ZSwgdXNlKTsgIGNsYXNzIFN0YXRlU2NvcGVkU3RvcmUgZXh0ZW5kc1xuLy8gQmFzZVN0b3JlIHsgc3RhdGljIHVzZSAgICAgICAgID0gdXNlOyBzdGF0aWMgZGlzcGxheU5hbWUgPSBcInN0YXRlU2NvcGVkKFwiICsgY29tcE5hbWUgK1xuLy8gXCIpXCI7ICBjb25zdHJ1Y3RvciggLi4uYXJneiApIHsgc3VwZXIoc2NvcGUsIGFyZ3ouc2xpY2UoYXJnelswXSBpbnN0YW5jZW9mIFNjb3BlID8gMSA6XG4vLyAwKSkgfSB9ICByZXR1cm4gU3RhdGVTY29wZWRTdG9yZTsgfSwgZmFsc2UsIHRydWUgKVxuXG5cbmV4cG9ydCB7XG4gICAgYWRkU2NvcGFibGVUeXBlLFxuICAgIHJlU2NvcGUsXG4gICAgc2NvcGVUb1N0YXRlXG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlscy9zY29wYWJsZS5qcyJdLCJzb3VyY2VSb290IjoiIn0=