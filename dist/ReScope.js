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
	
	var _Store = __webpack_require__(7);
	
	var _Store2 = _interopRequireDefault(_Store);
	
	var _scopable = __webpack_require__(9);
	
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

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _class, _temp;
	
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
	var Scope = (_temp = _class = function (_EventEmitter) {
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
	            //openScopes[ id ].register(storesMap);
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
	                        console.info("Rescope Store : ", id, " already exist in this scope ! ( try __proto__ hot patch )");
	                        targetCtx._._scope[id].__proto__ = srcCtx[id].prototype;
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
	}(EventEmitter), _class.persistenceTm = 1, _class.Store = null, _class.scopeRef = function scopeRef(path) {
	    this.path = path;
	}, _class.scopes = openScopes, _temp);
	
	
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

	module.exports = require("is");

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
/***/ (function(module, exports) {

	module.exports = require("shortid");

/***/ }),
/* 7 */
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
	    TaskSequencer = __webpack_require__(8),
	    shortid = __webpack_require__(6),
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
	            console.error("Not a mappable store item '" + name + "/" + alias + "' in " + (cStore.name || cStore) + ' !!', store);
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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
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
	        } else if (task) console.error("ReScope : A task has failed !!", task[1], " on ", task[0].name || task[0].constructor.name);
	
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
	         * So leafs stores stay sync, root stores get merged state updates and global
	         * state stay coherent
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

/***/ }),
/* 9 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYzU0NDRlZWVjOWM2YmNlNTJmYzgiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9TY29wZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvaXMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaXNcIiIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL0VtaXR0ZXIuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic2hvcnRpZFwiIiwid2VicGFjazovLy8uL3NyYy9TdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvVGFza1NlcXVlbmNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvc2NvcGFibGUuanMiXSwibmFtZXMiOlsiJGdsb2JhbCIsIndpbmRvdyIsImdsb2JhbCIsIlJTIiwiX19fcmVzY29wZSIsImNvbnNvbGUiLCJ3YXJuIiwiU3RvcmUiLCJTY29wZSIsIkNvbnRleHQiLCJyZVNjb3BlIiwic2NvcGVUb1N0YXRlIiwicmVTY29wZVN0YXRlIiwiYWRkU2NvcGFibGVUeXBlIiwic2NvcGVSZWYiLCJtYXAiLCJrZXkiLCJyZXF1aXJlIiwid2Fsa25TZXQiLCJ3YWxrbkdldCIsImtleVdhbGtuU2V0Iiwia2V5V2Fsa25HZXQiLCJFdmVudEVtaXR0ZXIiLCJzaG9ydGlkIiwiX19wcm90b19fcHVzaCIsInRhcmdldCIsImlkIiwicGFyZW50IiwiZm4iLCJwcm90b3R5cGUiLCJfIiwib3BlblNjb3BlcyIsIlNpbXBsZU9iamVjdFByb3RvIiwiY29uc3RydWN0b3IiLCJzY29wZXMiLCJza2V5IiwiaXMiLCJhcnJheSIsInNvcnQiLCJhIiwiYiIsImZpcnN0bmFtZSIsImpvaW4iLCJzbSIsInN0YXRlIiwiX3JlZnMiLCJhY3Rpb25zIiwicGF0aCIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwiY3BhdGgiLCJwdXNoIiwiRnVuY3Rpb24iLCJhcyIsInN0b3Jlc01hcCIsInNuYXBzaG90IiwiZGF0YSIsImluY3JlbWVudElkIiwicGVyc2lzdGVuY2VUbSIsImF1dG9EZXN0cm95Iiwicm9vdEVtaXR0ZXIiLCJib3VuZGVkQWN0aW9ucyIsImtleUluZGV4IiwiX2lkIiwiaXNMb2NhbElkIiwiZ2VuZXJhdGUiLCJpIiwiX3JldiIsInN0b3JlcyIsIl9hdXRvRGVzdHJveSIsImRlYWQiLCJFcnJvciIsInNvdXJjZXMiLCJjaGlsZFNjb3BlcyIsImNoaWxkU2NvcGVzTGlzdCIsInVuU3RhYmxlQ2hpbGRzIiwic2VlbkNoaWxkcyIsIl9fcmV0YWlucyIsImFsbCIsIl9fbG9ja3MiLCJfYm91bmRlZEFjdGlvbnMiLCJ0ZXN0IiwiaW5jbHVkZXMiLCJiaW5kIiwiX2xpc3RlbmluZyIsIl9zY29wZSIsIl9taXhlZCIsIl9taXhlZExpc3QiLCJmb2xsb3dlcnMiLCJyZXRhaW4iLCJfc3RhYmxlIiwid2FpdCIsIm9uIiwiX3BhcmVudExpc3QiLCJyZWxlYXNlIiwiX3Byb3BhZyIsInJlZ2lzdGVyIiwiX2FkZENoaWxkIiwicmVzdG9yZSIsInNldFRpbWVvdXQiLCJkaXNwb3NlIiwic3RvcmVzTGlzdCIsIl9tb3VudCIsImsiLCJhcmd1bWVudHMiLCJyZWYiLCJzbmFwIiwicGFyc2VSZWYiLCJzdG9yZUlkIiwicmVkdWNlIiwibW91bnRlZCIsImN0eCIsInN0b3JlIiwidGFza1F1ZXVlIiwicnNTdG9yZSIsIm5hbWUiLCJsZW5ndGgiLCJzaGlmdCIsInJzU2NvcGUiLCIkcGFyZW50IiwibW91bnQiLCJzbGljZSIsInVuZGVmaW5lZCIsInNldFN0YXRlIiwiX3dhdGNoU3RvcmUiLCJpc1N0YWJsZSIsInByb3BhZyIsInRhcmdldEN0eCIsImxpc3RzIiwicmVsaW5rIiwic2luZ2xldG9uIiwic3JjQ3R4IiwiZXh0ZXJuYWwiLCJmb3JjZSIsImxjdHgiLCJpbmZvIiwiX19wcm90b19fIiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwiZ2V0Iiwic2V0IiwidiIsImFjdGl2ZUFjdGlvbnMiLCJhY3QiLCJoYXNPd25Qcm9wZXJ0eSIsIl9fdGFyZ2V0U3RvcmVzIiwiZGlzcGF0Y2giLCJvYmoiLCJzZXRJbml0aWFsIiwibGFzdFJldnMiLCJyZWZLZXlzIiwic3RyaW5nIiwicmV2cyIsInJldiIsInJlZnMiLCJyZXRhaW5TdG9yZXMiLCJnZXRVcGRhdGVzIiwiZGlzcG9zZVN0b3JlcyIsInNwbGljZSIsInRvIiwicmVmTGlzdCIsIm1peGVkQ1dVbm1vdW50IiwidW5Nb3VudEtleSIsImlzUmVhY3RDb21wb25lbnQiLCJ1bkJpbmQiLCJhbGlhcyIsInJldHJpZXZlIiwic3BsaXQiLCJyZXRyaWV2ZVN0b3JlIiwic3RvcmVzUmV2TWFwIiwibG9jYWwiLCJ1cGRhdGVkIiwiZ2V0U3RvcmVzUmV2cyIsIm91dHB1dCIsImNoaWxkcyIsIl9nZXRBbGxDaGlsZHMiLCJjZmciLCJ3aXRoQ2hpbGRzIiwid2l0aFBhcmVudHMiLCJ3aXRoTWl4ZWQiLCJub3JlZnMiLCJzZXJpYWxpemUiLCJ3aXRoQ2hpbGQiLCJoIiwic3RhcnRzV2l0aCIsInN1YnN0ciIsImJvb2wiLCJ0YWtlU25hcHNob3RCeUtleSIsImRlc3Ryb3kiLCJnZXRTbmFwc2hvdEJ5S2V5IiwicmVwbGFjZSIsImRlbGV0ZVNuYXBzaG90QnlLZXkiLCJwU3RhdGUiLCJfcmVmIiwiYWN0aW9uIiwiYXJneiIsInN0YWNrIiwiYkFjdHMiLCJ0cmlnZ2VyIiwiY2IiLCJvbmNlIiwicmVhc29uIiwiZW1pdCIsImVycm9yIiwic3RhYmlsaXplclRNIiwiY2xlYXJUaW1lb3V0IiwicHJvcGFnVE0iLCJyZW1hcHMiLCJ3YXNTdGFibGUiLCJpbmRleE9mIiwidW4iLCJkZXN0cm95VE0iLCJyZW1vdmVMaXN0ZW5lciIsImZvbGxvd2VyIiwiX3JtQ2hpbGQiLCJ2YWx1ZSIsImlzS2V5IiwiZmlsdGVyIiwiRW1pdHRlciIsIl9ldmVudHMiLCJldnQiLCJUYXNrU2VxdWVuY2VyIiwib2JqUHJvdG8iLCJnZXRQcm90b3R5cGVPZiIsIl9zdGF0aWMiLCJzY29wZSIsImdldFNjb3BlIiwic3RhdGljU2NvcGUiLCJ3YXRjaHMiLCJ1c2UiLCJhcHBseSIsImluaXRpYWxTdGF0ZSIsImRlZmF1bHRTdGF0ZSIsImFwcGxpZWQiLCJfdWlkIiwiX29uU3RhYmlsaXplIiwiX3BlcnNpc3RlbmNlVG0iLCJfY2ZnIiwic2NvcGVPYmoiLCIkc2NvcGUiLCIkc3RvcmVzIiwiJGFjdGlvbnMiLCIkZGlzcGF0Y2giLCJfcmV2cyIsIl9yZXF1aXJlIiwiX3NvdXJjZXMiLCJfdXNlIiwibWF0Y2giLCJyZWYyIiwiX2ZvbGxvd2VycyIsIl9jaGFuZ2VzU1ciLCJfYWZ0ZXJDb25zdHJ1Y3RvciIsImluaXRpYWxEYXRhIiwic2hvdWxkQXBwbHkiLCJtYW5hZ2VkIiwibkRhdGFzIiwiciIsImNEYXRhcyIsImlzQ29tcGxldGUiLCJmb2xsb3ciLCJjYWxsIiwiY2hhbmdlcyIsInJlZmluZSIsIl9zdGFiaWxpemVyIiwicHVzaFRhc2siLCJucyIsImRvV2FpdCIsIm9yaWdpbiIsImluaXRpYWxPdXRwdXRzIiwicyIsImhhc0RhdGFDaGFuZ2UiLCJzdGFibGUiLCJuZXh0U3RhdGUiLCJfbmV4dFN0YXRlIiwibmV4dERhdGEiLCJzeW5jIiwiY2hhbmdlIiwicHVzaFN0YXRlIiwic3RhYmlsaXplIiwiZGVmYXVsdE5hbWUiLCJudW1iZXIiLCJpbW1lZGlhdGUiLCJ0aGVuIiwicHJldmlvdXMiLCJtZSIsInNob3VsZFByb3BhZyIsIl9kZXN0cm95VE0iLCJyZW1vdmVBbGxMaXN0ZW5lcnMiLCJjU3RvcmUiLCJ0YXJnZXRSZXZzIiwidGFyZ2V0U2NvcGUiLCJfa2V5IiwiY3VyV2VpZ2h0IiwibWF4V2VpZ2h0IiwibWluV2VpZ2h0IiwidGFza0NvdW50IiwiZGVTeW5jIiwiZGVTeW5jTWF4VGFza3MiLCJ0YXNrIiwiaXNSdW5uaW5nIiwiZXJyb3JDYXRjaGVyIiwibGFzdEVycm9yIiwiZGlzYWJsZSIsImhhbmRsZUVycm9yIiwicnVuTm93IiwiZW5hYmxlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInByb2Nlc3MiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicnVuIiwiZnJvbSIsIkRhdGUiLCJub3ciLCJ3ZWlnaHQiLCJNYXRoIiwibWF4IiwibWluIiwic2NvcGFibGVzIiwiaGFuZGxlIiwibWVtYmVyIiwic3RhdGVTY29wZSIsImlzU2NvcGFibGVUeXBlIiwiQ29tcCIsImFwcGx5U2NvcGFibGVUeXBlIiwiYXJnejIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDVEE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBL0JBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEyQkEsS0FBSUEsVUFBWSxPQUFPQyxNQUFQLEtBQWtCLFdBQXBCLEdBQW9DQSxNQUFwQyxHQUE2Q0MsTUFBM0Q7O0FBTUEsS0FBTUMsS0FBS0gsUUFBUUksVUFBUixJQUFzQixFQUFqQztBQUNBLEtBQUtKLFFBQVFJLFVBQWIsRUFBMEI7QUFDdEJDLGFBQVFDLElBQVIsQ0FBYSwrREFBYjtBQUNILEVBRkQsTUFHSzs7QUFFRE4sYUFBUUksVUFBUixHQUFxQkQsRUFBckI7QUFDQSxxQkFBTUksS0FBTjtBQUNBSixRQUFHSyxLQUFIO0FBQ0FMLFFBQUdNLE9BQUg7QUFDQU4sUUFBR0ksS0FBSDtBQUNBSixRQUFHTyxPQUFIO0FBQ0FQLFFBQUdRLFlBQUg7QUFDQVIsUUFBR1MsWUFBSDtBQUNBVCxRQUFHVSxlQUFIO0FBQ0FWLFFBQUdXLFFBQUgsR0FDSSxTQUFTQSxRQUFULENBQW1CQyxHQUFuQixFQUF3QkMs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QVAsQ0FBUDtBQUNILGNBSEQsTUFLSSxPQUFPM1QsK0JBQWEyVCxNQUFPLENBQVAsQ0FBYixTQUE0QmpJLElBQTVCLEVBQVA7QUFDUCxVQVJEO0FBU0g7QUFDRCxZQUFPZ0ksa0JBQWtCaEksS0FBTSxDQUFOLENBQWxCLEVBQTZCQSxLQUFLM0UsS0FBTCxDQUFXLENBQVgsQ0FBN0IsRUFBNEMsS0FBNUMsRUFBbUQsSUFBbkQsQ0FBUDtBQUNIOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztTQUlJN0csZSxHQUFBQSxlO1NBQ0FILE8sR0FBQUEsTztTQUNBQyxZLEdBQUFBLFkiLCJmaWxlIjoiLi4vLi4vZGlzdC9SZVNjb3BlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGM1NDQ0ZWVlYzljNmJjZTUyZmM4IiwiLypcbiAqIENvcHlyaWdodCAoYykgIDIwMTggV2lzZSBXaWxkIFdlYiAuXG4gKlxuICogIE1JVCBMaWNlbnNlXG4gKlxuICogIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqICBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiAgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqICBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqICBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqICBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcbiAqICBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqICBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiAgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiAgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiAgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiAgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcbiAqICBTT0ZUV0FSRS5cbiAqXG4gKiBAYXV0aG9yIDogTmF0aGFuYWVsIEJyYXVuXG4gKiBAY29udGFjdCA6IGNhaXBpbGFic0BnbWFpbC5jb21cbiAqL1xuXG5sZXQgJGdsb2JhbCA9ICggdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgKSA/IHdpbmRvdyA6IGdsb2JhbDtcblxuaW1wb3J0IFNjb3BlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tIFwiLi9TY29wZVwiO1xuaW1wb3J0IFN0b3JlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tIFwiLi9TdG9yZVwiO1xuaW1wb3J0IHsgYWRkU2NvcGFibGVUeXBlLCByZVNjb3BlLCBzY29wZVRvU3RhdGUgfSBmcm9tIFwiLi91dGlscy9zY29wYWJsZVwiO1xuXG5jb25zdCBSUyA9ICRnbG9iYWwuX19fcmVzY29wZSB8fCB7fTtcbmlmICggJGdsb2JhbC5fX19yZXNjb3BlICkge1xuICAgIGNvbnNvbGUud2FybihcIlJlU2NvcGUgaXMgZGVmaW5lZCBtdWx0aXBsZSB0aW1lcyAhISBcXG5DaGVjayB5b3UncmUgcGFja2FnaW5nXCIpXG59XG5lbHNlIHtcbiAgICBcbiAgICAkZ2xvYmFsLl9fX3Jlc2NvcGUgPSBSUztcbiAgICBTY29wZS5TdG9yZSAgICAgICAgPSBTdG9yZTtcbiAgICBSUy5TY29wZSAgICAgICAgICAgPSBTY29wZTtcbiAgICBSUy5Db250ZXh0ICAgICAgICAgPSBTY29wZTtcbiAgICBSUy5TdG9yZSAgICAgICAgICAgPSBTdG9yZTtcbiAgICBSUy5yZVNjb3BlICAgICAgICAgPSByZVNjb3BlO1xuICAgIFJTLnNjb3BlVG9TdGF0ZSAgICA9IHNjb3BlVG9TdGF0ZTtcbiAgICBSUy5yZVNjb3BlU3RhdGUgICAgPSBzY29wZVRvU3RhdGU7XG4gICAgUlMuYWRkU2NvcGFibGVUeXBlID0gYWRkU2NvcGFibGVUeXBlO1xuICAgIFJTLnNjb3BlUmVmICAgICAgICA9XG4gICAgICAgIGZ1bmN0aW9uIHNjb3BlUmVmKCBtYXAsIGtleSApIHtcbiAgICAgICAgICAgIG1hcFsga2V5IF0gPSBuZXcgU2NvcGUuc2NvcGVSZWYobWFwWyBrZXkgXSk7XG4gICAgICAgICAgICByZXR1cm4gbWFwO1xuICAgICAgICB9O1xuICAgIFxufVxuZXhwb3J0IGRlZmF1bHQgUlM7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LmpzIiwiLypcbiAqIENvcHlyaWdodCAoYykgIDIwMTggV2lzZSBXaWxkIFdlYiAuXG4gKlxuICogIE1JVCBMaWNlbnNlXG4gKlxuICogIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqICBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiAgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqICBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqICBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqICBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcbiAqICBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqICBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiAgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiAgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiAgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiAgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcbiAqICBTT0ZUV0FSRS5cbiAqXG4gKiBAYXV0aG9yIDogTmF0aGFuYWVsIEJyYXVuXG4gKiBAY29udGFjdCA6IGNhaXBpbGFic0BnbWFpbC5jb21cbiAqL1xuXG5cbnZhciBpcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL3V0aWxzL2lzJyksXG4gICAgeyB3YWxrblNldCwgd2Fsa25HZXQsIGtleVdhbGtuU2V0LCBrZXlXYWxrbkdldCB9ID0gcmVxdWlyZSgnLi91dGlscy91dGlscycpLFxuICAgIEV2ZW50RW1pdHRlciAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vdXRpbHMvRW1pdHRlcicpLFxuICAgIHNob3J0aWQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJ3Nob3J0aWQnKVxuICAgICwgX19wcm90b19fcHVzaCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA9ICggdGFyZ2V0LCBpZCwgcGFyZW50ICkgPT4ge1xuICAgICAgICBsZXQgZm4gICAgICAgICA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgfTtcbiAgICAgICAgZm4ucHJvdG90eXBlICAgPSBwYXJlbnQgPyBuZXcgcGFyZW50Ll9bIGlkIF0oKSA6IHRhcmdldFsgaWQgXSB8fCB7fTtcbiAgICAgICAgdGFyZ2V0WyBpZCBdICAgPSBuZXcgZm4oKTtcbiAgICAgICAgdGFyZ2V0Ll9bIGlkIF0gPSBmbjtcbiAgICB9LFxuICAgIG9wZW5TY29wZXMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA9IHt9LFxuICAgIFNpbXBsZU9iamVjdFByb3RvICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA9ICgge30gKS5jb25zdHJ1Y3RvcjtcblxuLyoqXG4gKiBCYXNlIFNjb3BlIG9iamVjdFxuICovXG5jbGFzcyBTY29wZSBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gICAgc3RhdGljIGdldFNjb3BlKCBzY29wZXMgKSB7XG4gICAgICAgIGxldCBza2V5ID0gaXMuYXJyYXkoc2NvcGVzKSA/IHNjb3Blcy5zb3J0KCggYSwgYiApID0+IHtcbiAgICAgICAgICAgIGlmICggYS5maXJzdG5hbWUgPCBiLmZpcnN0bmFtZSApIHJldHVybiAtMTtcbiAgICAgICAgICAgIGlmICggYS5maXJzdG5hbWUgPiBiLmZpcnN0bmFtZSApIHJldHVybiAxO1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH0pLmpvaW4oJysnKSA6IHNjb3BlcztcbiAgICAgICAgcmV0dXJuIG9wZW5TY29wZXNbIHNrZXkgXSA9IG9wZW5TY29wZXNbIHNrZXkgXSB8fCBuZXcgU2NvcGUoe30sIHsgaWQ6IHNrZXkgfSk7XG4gICAgfTtcbiAgICBcbiAgICBcbiAgICAvKipcbiAgICAgKiBnZXQgYSBwYXJzZWQgcmVmZXJlbmNlIGxpc3QgZnJvbSBzdGF0ZU1hcFxuICAgICAqIEBwYXJhbSBfcmVmXG4gICAgICogQHJldHVybnMge3tzdG9yZUlkLCBwYXRoLCBhbGlhczogKiwgcmVmOiAqfX1cbiAgICAgKi9cbiAgICBzdGF0aWMgc3RhdGVNYXBUb1JlZkxpc3QoIHNtLCBzdGF0ZSA9IHt9LCBfcmVmcyA9IFtdLCBhY3Rpb25zID0ge30sIHBhdGggPSBcIlwiICkge1xuICAgICAgICBPYmplY3Qua2V5cyhzbSkuZm9yRWFjaChcbiAgICAgICAgICAgIGtleSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGNwYXRoID0gcGF0aCA/IHBhdGggKyAnLicgKyBrZXkgOiBrZXk7XG4gICAgICAgICAgICAgICAgc21bIGtleSBdIGluc3RhbmNlb2YgU2NvcGUuc2NvcGVSZWZcbiAgICAgICAgICAgICAgICA/IF9yZWZzLnB1c2goc21bIGtleSBdLnBhdGggKyAnOicgKyBjcGF0aClcbiAgICAgICAgICAgICAgICA6ICggc21bIGtleSBdICYmIHNtWyBrZXkgXSBpbnN0YW5jZW9mIEZ1bmN0aW9uIClcbiAgICAgICAgICAgICAgICAgID8gYWN0aW9uc1sga2V5IF0gPSBzbVsga2V5IF1cbiAgICAgICAgICAgICAgICAgIDogKCBzbVsga2V5IF0gJiYgc21bIGtleSBdLnByb3RvdHlwZSBpbnN0YW5jZW9mIFNjb3BlLlN0b3JlIClcbiAgICAgICAgICAgICAgICAgICAgPyBfcmVmcy5wdXNoKHNtWyBrZXkgXS5hcyhjcGF0aCkpXG4gICAgICAgICAgICAgICAgICAgIDogc3RhdGVbIGNwYXRoIF0gPSBzbVsga2V5IF1cbiAgICAgICAgICAgICAgICAvLzogdGhpcy5zdGF0ZU1hcFRvUmVmTGlzdChzbVtrZXldLCBfcmVmcywgcGF0aCArICcuJyArIGtleSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgICAgICByZXR1cm4gX3JlZnM7XG4gICAgfVxuICAgIFxuICAgIHN0YXRpYyBwZXJzaXN0ZW5jZVRtID0gMTsvLyBpZiA+IDAsIHdpbGwgd2FpdCAncGVyc2lzdGVuY2VUbScgbXMgYmVmb3JlIGRlc3Ryb3lcbiAgICAvLyB3aGVuXG4gICAgLy8gZGlzcG9zZSByZWFjaCAwXG4gICAgc3RhdGljIFN0b3JlICAgID0gbnVsbDtcbiAgICBzdGF0aWMgc2NvcGVSZWYgPSBmdW5jdGlvbiBzY29wZVJlZiggcGF0aCApIHtcbiAgICAgICAgdGhpcy5wYXRoID0gcGF0aDtcbiAgICB9O1xuICAgIHN0YXRpYyBzY29wZXMgICA9IG9wZW5TY29wZXM7Ly8gYWxsIGFjdGl2ZSBzY29wZXNcbiAgICBcbiAgICBcbiAgICAvKipcbiAgICAgKiBJbml0IGEgUmVTY29wZSBzY29wZVxuICAgICAqXG4gICAgICogQHBhcmFtIHN0b3Jlc01hcCB7T2JqZWN0fSBPYmplY3Qgd2l0aCB0aGUgaW5pdGlhbCBzdG9yZXMgZGVmaW5pdGlvbiAvIGluc3RhbmNlc1xuICAgICAqIEBwYXJhbSBjb25maWcge09iamVjdH0gU2NvcGUgY29uZmlnXG4gICAgICoge1xuICAgICAqICBwYXJlbnQge3Njb3BlfSBAb3B0aW9uYWwgcGFyZW50IHNjb3BlXG4gICAgICpcbiAgICAgKiAgaWQge3N0cmluZ30gQG9wdGlvbmFsIGlkICggaWYgdGhpcyBpZCBleGlzdCBzdG9yZXNNYXAgd2lsbCBiZSBtZXJnZSBvbiB0aGUgJ2lkJ1xuICAgICAqICAgICBzY29wZSkga2V5IHtzdHJpbmd9IEBvcHRpb25hbCBrZXkgb2YgdGhlIHNjb3BlICggaWYgbm8gaWQgaXMgc2V0LCB0aGUgc2NvcGUgaWRcbiAgICAgKiAgICAgd2lsbCBiZSAocGFyZW50LmlkKyc+JytrZXkpIGluY3JlbWVudElkIHtib29sfSBAb3B0aW9uYWwgdHJ1ZSB0byBhZGQgYSBzdWZmaXhcbiAgICAgKiAgICAgaWQsIGlmIHRoZSBwcm92aWRlZCBrZXkgb3IgaWQgZ2xvYmFsbHkgZXhpc3RcbiAgICAgKlxuICAgICAqICBzdGF0ZSB7T2JqZWN0fSBAb3B0aW9uYWwgaW5pdGlhbCBzdGF0ZSBieSBzdG9yZSBhbGlhc1xuICAgICAqICBkYXRhIHtPYmplY3R9IEBvcHRpb25hbCBpbml0aWFsIGRhdGEgYnkgc3RvcmUgYWxpYXNcbiAgICAgKlxuICAgICAqICByb290RW1pdHRlciB7Ym9vbH0gQG9wdGlvbmFsIHRydWUgdG8gbm90IGJlaW5nIGRlc3RhYmlsaXplZCBieSBwYXJlbnRcbiAgICAgKiAgYm91bmRlZEFjdGlvbnMge2FycmF5IHwgcmVnZXhwfSBAb3B0aW9uYWwgbGlzdCBvciByZWdleHAgb2YgYWN0aW9ucyBub3RcbiAgICAgKiAgICAgcHJvcGFnYXRlZCB0byB0aGUgcGFyZW50XG4gICAgICpcbiAgICAgKiAgcGVyc2lzdGVuY2VUbSB7bnVtYmVyKSBpZiA+IDAsIHdpbGwgd2FpdCAncGVyc2lzdGVuY2VUbScgbXMgYmVmb3JlIGRlc3Ryb3kgd2hlblxuICAgICAqICAgICBkaXNwb3NlIHJlYWNoIDAgYXV0b0Rlc3Ryb3kgIHtib29sfSB3aWxsIHRyaWdnZXIgcmV0YWluICYgZGlzcG9zZSBhZnRlciBzdGFydFxuICAgICAqICB9XG4gICAgICogQHJldHVybnMge1Njb3BlfVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKCBzdG9yZXNNYXAsIHsgcGFyZW50LCBrZXksIGlkLCBzbmFwc2hvdCwgc3RhdGUsIGRhdGEsIGluY3JlbWVudElkID0gISFrZXksIHBlcnNpc3RlbmNlVG0sIGF1dG9EZXN0cm95LCByb290RW1pdHRlciwgYm91bmRlZEFjdGlvbnMgfSA9IHt9ICkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB2YXIgXyA9IHt9LCBrZXlJbmRleDtcbiAgICAgICAgXG4gICAgICAgIGlkID0gaWQgfHwga2V5ICYmICggKCBwYXJlbnQgJiYgcGFyZW50Ll9pZCB8fCAnJyApICsgJz4nICsga2V5ICk7XG4gICAgICAgIFxuICAgICAgICBfLmlzTG9jYWxJZCA9ICFpZDtcbiAgICAgICAgXG4gICAgICAgIC8vaWYgKCBwYXJlbnQgJiYga2V5ICkge1xuICAgICAgICAvLyAgICBrZXlJbmRleCA9IHBhcmVudC5fLmNoaWxkU2NvcGVzLmZpbmQoY3R4PT4oY3R4Ll9pZD09aWQpKTtcbiAgICAgICAgLy8gICAgaWYgKCBrZXlJbmRleCA9PSAtMSApIGtleUluZGV4ID0gcGFyZW50Ll8uc2VlbkNoaWxkcztcbiAgICAgICAgLy8gICAga2V5SW5kZXgrKztcbiAgICAgICAgLy8gICAgaWYgKCBrZXlJbmRleCApXG4gICAgICAgIC8vICAgICAgICBpZCA9IGlkICsgJ1snICsga2V5SW5kZXggKyAnXSc7XG4gICAgICAgIC8vfVxuICAgICAgICBcbiAgICAgICAgaWQgPSBpZCB8fCAoIFwiX19fX19cIiArIHNob3J0aWQuZ2VuZXJhdGUoKSApO1xuICAgICAgICBcbiAgICAgICAgaWYgKCBvcGVuU2NvcGVzWyBpZCBdICkge1xuICAgICAgICAgICAgdGhpcy5faWQgPSBpZDtcbiAgICAgICAgICAgIC8vb3BlblNjb3Blc1sgaWQgXS5yZWdpc3RlcihzdG9yZXNNYXApO1xuICAgICAgICAgICAgcmV0dXJuIG9wZW5TY29wZXNbIGlkIF1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICggb3BlblNjb3Blc1sgaWQgXSAmJiBpbmNyZW1lbnRJZCApIHtcbiAgICAgICAgICAgIGxldCBpID0gLTE7XG4gICAgICAgICAgICB3aGlsZSAoIG9wZW5TY29wZXNbIGlkICsgJ1snICsgKCArK2kgKSArICddJyBdICkgO1xuICAgICAgICAgICAgaWQgPSBpZCArICdbJyArIGkgKyAnXSc7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRoaXMuX2lkICAgICAgICAgPSBpZDtcbiAgICAgICAgdGhpcy5fcmV2ICAgICAgICA9IDA7XG4gICAgICAgIG9wZW5TY29wZXNbIGlkIF0gPSB0aGlzO1xuICAgICAgICBfLnBlcnNpc3RlbmNlVG0gID0gcGVyc2lzdGVuY2VUbSB8fCB0aGlzLmNvbnN0cnVjdG9yLnBlcnNpc3RlbmNlVG07XG4gICAgICAgIFxuICAgICAgICB0aGlzLmFjdGlvbnMgPSB7fTtcbiAgICAgICAgdGhpcy5zdG9yZXMgID0ge307XG4gICAgICAgIHRoaXMuc3RhdGUgICA9IHt9O1xuICAgICAgICB0aGlzLmRhdGEgICAgPSB7fTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMucGFyZW50ICAgICAgID0gcGFyZW50O1xuICAgICAgICB0aGlzLl8gICAgICAgICAgICA9IF87XG4gICAgICAgIHRoaXMuX2F1dG9EZXN0cm95ID0gYXV0b0Rlc3Ryb3k7XG4gICAgICAgIFxuICAgICAgICBpZiAoIHBhcmVudCAmJiBwYXJlbnQuZGVhZCApXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW4ndCB1c2UgYSBkZWFkIHNjb3BlIGFzIHBhcmVudCAhXCIpO1xuICAgICAgICBcbiAgICAgICAgX19wcm90b19fcHVzaCh0aGlzLCAnYWN0aW9ucycsIHBhcmVudCk7XG4gICAgICAgIF9fcHJvdG9fX3B1c2godGhpcywgJ3N0b3JlcycsIHBhcmVudCk7XG4gICAgICAgIF9fcHJvdG9fX3B1c2godGhpcywgJ3N0YXRlJywgcGFyZW50KTtcbiAgICAgICAgX19wcm90b19fcHVzaCh0aGlzLCAnZGF0YScsIHBhcmVudCk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLnNvdXJjZXMgICAgICA9IFtdO1xuICAgICAgICBfLmNoaWxkU2NvcGVzICAgICA9IFtdO1xuICAgICAgICBfLmNoaWxkU2NvcGVzTGlzdCA9IFtdO1xuICAgICAgICBfLnVuU3RhYmxlQ2hpbGRzICA9IDA7XG4gICAgICAgIF8uc2VlbkNoaWxkcyAgICAgID0gMDtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX19yZXRhaW5zID0geyBhbGw6IDAgfTtcbiAgICAgICAgdGhpcy5fX2xvY2tzICAgPSB7IGFsbDogMSB9O1xuICAgICAgICBcbiAgICAgICAgLy9fLnNuYXBzaG90ICAgICAgICA9IHNuYXBzaG90O1xuICAgICAgICAvL18uc25hcHNob3QgICAgICAgID0gc25hcHNob3Q7XG4gICAgICAgIF8uX2JvdW5kZWRBY3Rpb25zID0gaXMuYXJyYXkoYm91bmRlZEFjdGlvbnMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB7IHRlc3Q6IGJvdW5kZWRBY3Rpb25zLmluY2x1ZGVzLmJpbmQoYm91bmRlZEFjdGlvbnMpIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGJvdW5kZWRBY3Rpb25zO1xuICAgICAgICBfLl9saXN0ZW5pbmcgICAgICA9IHt9O1xuICAgICAgICBfLl9zY29wZSAgICAgICAgICA9IHt9O1xuICAgICAgICBfLl9taXhlZCAgICAgICAgICA9IFtdO1xuICAgICAgICBfLl9taXhlZExpc3QgICAgICA9IFtdO1xuICAgICAgICBfLmZvbGxvd2VycyAgICAgICA9IFtdO1xuICAgICAgICBpZiAoIHBhcmVudCApIHtcbiAgICAgICAgICAgIHBhcmVudC5yZXRhaW4oXCJpc015UGFyZW50XCIpO1xuICAgICAgICAgICAgaWYgKCAhcm9vdEVtaXR0ZXIgKSB7XG4gICAgICAgICAgICAgICAgIXBhcmVudC5fc3RhYmxlICYmIHRoaXMud2FpdChcIndhaXRpbmdQYXJlbnRcIik7XG4gICAgICAgICAgICAgICAgcGFyZW50Lm9uKF8uX3BhcmVudExpc3QgPSB7XG4gICAgICAgICAgICAgICAgICAgICdzdGFibGUnICA6IHMgPT4gdGhpcy5yZWxlYXNlKFwid2FpdGluZ1BhcmVudFwiKSxcbiAgICAgICAgICAgICAgICAgICAgJ3Vuc3RhYmxlJzogcyA9PiB0aGlzLndhaXQoXCJ3YWl0aW5nUGFyZW50XCIpLFxuICAgICAgICAgICAgICAgICAgICAndXBkYXRlJyAgOiBzID0+IHRoaXMuX3Byb3BhZygpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXJlbnQub24oXy5fcGFyZW50TGlzdCA9IHtcbiAgICAgICAgICAgICAgICAgICAgJ3VwZGF0ZSc6IHMgPT4gdGhpcy5fcHJvcGFnKClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHRoaXMucmVnaXN0ZXIocGFyZW50Ll9fc2NvcGUsIHN0YXRlLCBkYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIHRoaXMucmVnaXN0ZXIoc3RvcmVzTWFwLCBzdGF0ZSwgZGF0YSk7XG4gICAgICAgIHRoaXMuX19sb2Nrcy5hbGwtLTtcbiAgICAgICAgdGhpcy5fc3RhYmxlID0gIXRoaXMuX19sb2Nrcy5hbGw7XG4gICAgICAgIFxuICAgICAgICBpZiAoIHBhcmVudCApIHtcbiAgICAgICAgICAgIHBhcmVudC5fYWRkQ2hpbGQodGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRoaXMucmVzdG9yZShzbmFwc2hvdCk7XG4gICAgICAgIFxuICAgICAgICBpZiAoIGF1dG9EZXN0cm95IClcbiAgICAgICAgICAgIHNldFRpbWVvdXQoXG4gICAgICAgICAgICAgICAgdG0gPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJldGFpbihcImF1dG9EZXN0cm95XCIpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpc3Bvc2UoXCJhdXRvRGVzdHJveVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApXG4gICAgICAgIFxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKlxuICAgICAqIE1vdW50IHRoZSBzdG9yZXMgaW4gc3RvcmVzTGlzdCwgaW4gdGhpcyBzY29wZSBvciBpbiBpdHMgcGFyZW50cyBvciBtaXhlZCBzY29wZXNcbiAgICAgKlxuICAgICAqIEBwYXJhbSBzdG9yZXNMaXN0IHtzdHJpbmd8c3RvcmVSZWZ9IFN0b3JlIG5hbWUsIEFycmF5IG9mIFN0b3JlIG5hbWVzLCBvciBSZXNjb3BlXG4gICAgICogICAgIHN0b3JlIHJlZiBmcm9tIFN0b3JlOjphcyBvciBTdG9yZTphc1xuICAgICAqIEBwYXJhbSBzdGF0ZVxuICAgICAqIEBwYXJhbSBkYXRhXG4gICAgICogQHJldHVybnMge1Njb3BlfVxuICAgICAqL1xuICAgIG1vdW50KCBzdG9yZXNMaXN0LCBzbmFwc2hvdCwgc3RhdGUsIGRhdGEgKSB7XG4gICAgICAgIGlmICggaXMuYXJyYXkoc3RvcmVzTGlzdCkgKSB7XG4gICAgICAgICAgICBzdG9yZXNMaXN0LmZvckVhY2goayA9PiB0aGlzLl9tb3VudChrLCBzbmFwc2hvdCwgc3RhdGUsIGRhdGEpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX21vdW50KC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIFxuICAgIF9tb3VudCggaWQsIHNuYXBzaG90LCBzdGF0ZSwgZGF0YSApIHtcbiAgICAgICAgbGV0IHJlZiwgc25hcDtcbiAgICAgICAgXG4gICAgICAgIHJlZiA9IHRoaXMucGFyc2VSZWYoaWQpXG4gICAgICAgIFxuICAgICAgICBpZiAoIGlkID09IFwiJHBhcmVudFwiICkgcmV0dXJuO1xuICAgICAgICBpZiAoICF0aGlzLl8uX3Njb3BlWyByZWYuc3RvcmVJZCBdICkgey8vYXNrIG1peGVkIHx8IHBhcmVudFxuICAgICAgICAgICAgaWYgKCB0aGlzLl8uX21peGVkLnJlZHVjZSgoIG1vdW50ZWQsIGN0eCApID0+ICggbW91bnRlZCB8fCBjdHguX21vdW50KGlkLCBzbmFwc2hvdCwgc3RhdGUsIGRhdGEpICksIGZhbHNlKSB8fFxuICAgICAgICAgICAgICAgICAhdGhpcy5wYXJlbnQgKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcmVudC5fbW91bnQoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxldCBzdG9yZSA9IHRoaXMuXy5fc2NvcGVbIHJlZi5zdG9yZUlkIF0sIHRhc2tRdWV1ZSA9IFtdO1xuICAgICAgICAgICAgaWYgKCBpcy5yc1N0b3JlKHN0b3JlLnByb3RvdHlwZSkgKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fLl9zY29wZVsgcmVmLnN0b3JlSWQgXSA9IG5ldyBzdG9yZSh0aGlzLCB7XG4gICAgICAgICAgICAgICAgICAgIC8vc25hcHNob3QsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IHJlZi5zdG9yZUlkLFxuICAgICAgICAgICAgICAgICAgICBzdGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgZGF0YVxuICAgICAgICAgICAgICAgIH0sIHRhc2tRdWV1ZSk7XG4gICAgICAgICAgICAgICAgd2hpbGUgKCB0YXNrUXVldWUubGVuZ3RoICkgdGFza1F1ZXVlLnNoaWZ0KCkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKCBpcy5yc1Njb3BlKHN0b3JlLnByb3RvdHlwZSkgKSB7XG4gICAgICAgICAgICAgICAgc3RvcmUgPSB0aGlzLl8uX3Njb3BlWyByZWYuc3RvcmVJZCBdID0gbmV3IHN0b3JlKHsgJHBhcmVudDogdGhpcyB9LCB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiB0aGlzLl9pZCArICcvJyArIHJlZi5zdG9yZUlkLFxuICAgICAgICAgICAgICAgICAgICAvL2F1dG9EZXN0cm95OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgIC8vcGFyZW50OiB0aGlzXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgLy90aGlzLl8uX3Njb3BlWyByZWYuc3RvcmVJZCBdLnJldGFpbihcInNjb3BlZENoaWxkU2NvcGVcIik7XG4gICAgICAgICAgICAgICAgLy90aGlzLl93YXRjaFN0b3JlKHJlZi5zdG9yZUlkKTtcbiAgICAgICAgICAgICAgICBpZiAoIHJlZi5wYXRoLmxlbmd0aCA+IDEgKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLl8uX3Njb3BlWyByZWYuc3RvcmVJZCBdLm1vdW50KHJlZi5wYXRoLnNsaWNlKDEpLmpvaW4oJy4nKSwgc25hcHNob3QsIHN0YXRlLCBkYXRhKVxuICAgICAgICAgICAgICAgIC8vZWxzZSByZXR1cm4gdGhpcy5fLl9zY29wZVsgcmVmLnN0b3JlSWQgXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vaWYgKCBzbmFwc2hvdCAmJiBpcy5yc1Njb3BlKHN0b3JlKSAmJiAoIHNuYXAgPSBrZXlXYWxrbkdldChzbmFwc2hvdCxcbiAgICAgICAgICAgIC8vIHN0b3JlLl9pZCkgKSAmJiBzbmFwWyAnLycgXSApIHsgcmV0dXJuIHN0b3JlLm1vdW50KE9iamVjdC5rZXlzKHNuYXBbICcvJ1xuICAgICAgICAgICAgLy8gXSkpIH0gZWxzZSBpZiAoIHNuYXBzaG90ICYmIGlzLnJzU3RvcmUoc3RvcmUpICkgc3RvcmUucmVzdG9yZSgpO1xuICAgICAgICAgICAgaWYgKCBpcy5yc1N0b3JlKHN0b3JlKSApIHtcbiAgICAgICAgICAgICAgICBpZiAoIHN0YXRlICE9PSB1bmRlZmluZWQgJiYgZGF0YSA9PT0gdW5kZWZpbmVkIClcbiAgICAgICAgICAgICAgICAgICAgc3RvcmUuc2V0U3RhdGUoc3RhdGUpO1xuICAgICAgICAgICAgICAgIGVsc2UgaWYgKCBzdGF0ZSAhPT0gdW5kZWZpbmVkIClcbiAgICAgICAgICAgICAgICAgICAgc3RvcmUuc3RhdGUgPSBzdGF0ZTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAoIGRhdGEgIT09IHVuZGVmaW5lZCApXG4gICAgICAgICAgICAgICAgICAgIHN0b3JlLnB1c2goZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl93YXRjaFN0b3JlKHJlZi5zdG9yZUlkKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIHJldHVybiB0aGlzLl8uX3Njb3BlWyByZWYuc3RvcmVJZCBdO1xuICAgIH1cbiAgICBcbiAgICBfd2F0Y2hTdG9yZSggaWQsIHN0YXRlLCBkYXRhICkge1xuICAgICAgICBpZiAoICF0aGlzLl8uX2xpc3RlbmluZ1sgaWQgXSAmJiAhaXMuZm4odGhpcy5fLl9zY29wZVsgaWQgXSkgKSB7XG4gICAgICAgICAgICAvL2lmICggaXMucnNTdG9yZSh0aGlzLl8uX3Njb3BlWyBpZCBdKSApIHtcbiAgICAgICAgICAgICF0aGlzLl8uX3Njb3BlWyBpZCBdLl9hdXRvRGVzdHJveSAmJiB0aGlzLl8uX3Njb3BlWyBpZCBdLnJldGFpbihcInNjb3BlZFwiKTtcbiAgICAgICAgICAgICF0aGlzLl8uX3Njb3BlWyBpZCBdLmlzU3RhYmxlKCkgJiYgdGhpcy53YWl0KGlkKTtcbiAgICAgICAgICAgIHRoaXMuXy5fc2NvcGVbIGlkIF0ub24oXG4gICAgICAgICAgICAgICAgdGhpcy5fLl9saXN0ZW5pbmdbIGlkIF0gPSB7XG4gICAgICAgICAgICAgICAgICAgICdkZXN0cm95JyA6IHMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuXy5fbGlzdGVuaW5nWyBpZCBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fLl9zY29wZVsgaWQgXSA9IHRoaXMuXy5fc2NvcGVbIGlkIF0uY29uc3RydWN0b3I7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICd1cGRhdGUnICA6IHMgPT4gdGhpcy5wcm9wYWcoKSxcbiAgICAgICAgICAgICAgICAgICAgJ3N0YWJsZScgIDogcyA9PiB0aGlzLnJlbGVhc2UoaWQpLFxuICAgICAgICAgICAgICAgICAgICAndW5zdGFibGUnOiBzID0+IHRoaXMud2FpdChpZClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogTWl4IHRhcmdldEN0eCBvbiB0aGlzIHNjb3BlXG4gICAgICogTWl4ZWQgc2NvcGUgcGFyZW50cyBhcmUgTk9UIG1hcHBlZFxuICAgICAqIEBwYXJhbSB0YXJnZXRDdHhcbiAgICAgKi9cbiAgICBtaXhpbiggdGFyZ2V0Q3R4ICkge1xuICAgICAgICBsZXQgcGFyZW50ID0gdGhpcy5wYXJlbnQsIGxpc3RzO1xuICAgICAgICB0aGlzLl8uX21peGVkLnB1c2godGFyZ2V0Q3R4KVxuICAgICAgICB0YXJnZXRDdHgucmV0YWluKFwibWl4ZWRUb1wiKTtcbiAgICAgICAgaWYgKCAhdGFyZ2V0Q3R4Ll9zdGFibGUgKVxuICAgICAgICAgICAgdGhpcy53YWl0KHRhcmdldEN0eC5faWQpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fLl9taXhlZExpc3QucHVzaChsaXN0cyA9IHtcbiAgICAgICAgICAgICdzdGFibGUnICA6IHMgPT4gdGhpcy5yZWxlYXNlKHRhcmdldEN0eC5faWQpLFxuICAgICAgICAgICAgJ3Vuc3RhYmxlJzogcyA9PiB0aGlzLndhaXQodGFyZ2V0Q3R4Ll9pZCksXG4gICAgICAgICAgICAndXBkYXRlJyAgOiBzID0+IHRoaXMuX3Byb3BhZygpXG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5hY3Rpb25zID0ge307XG4gICAgICAgIHRoaXMuc3RvcmVzICA9IHt9O1xuICAgICAgICB0aGlzLnN0YXRlICAgPSB7fTtcbiAgICAgICAgdGhpcy5kYXRhICAgID0ge307XG4gICAgICAgIHRhcmdldEN0eC5vbihsaXN0cyk7XG4gICAgICAgIF9fcHJvdG9fX3B1c2godGhpcywgJ2FjdGlvbnMnLCBwYXJlbnQpO1xuICAgICAgICBfX3Byb3RvX19wdXNoKHRoaXMsICdzdG9yZXMnLCBwYXJlbnQpO1xuICAgICAgICBfX3Byb3RvX19wdXNoKHRoaXMsICdzdGF0ZScsIHBhcmVudCk7XG4gICAgICAgIF9fcHJvdG9fX3B1c2godGhpcywgJ2RhdGEnLCBwYXJlbnQpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5yZWxpbmsodGhpcy5fLl9zY29wZSwgdGhpcywgZmFsc2UsIHRydWUpO1xuICAgICAgICB0aGlzLl8uX21peGVkLmZvckVhY2goXG4gICAgICAgICAgICBjdHggPT4ge1xuICAgICAgICAgICAgICAgIF9fcHJvdG9fX3B1c2godGhpcywgJ2FjdGlvbnMnKTtcbiAgICAgICAgICAgICAgICBfX3Byb3RvX19wdXNoKHRoaXMsICdzdG9yZXMnKTtcbiAgICAgICAgICAgICAgICBfX3Byb3RvX19wdXNoKHRoaXMsICdzdGF0ZScpO1xuICAgICAgICAgICAgICAgIF9fcHJvdG9fX3B1c2godGhpcywgJ2RhdGEnKTtcbiAgICAgICAgICAgICAgICBjdHgucmVsaW5rKGN0eC5fLl9zY29wZSwgdGhpcywgdHJ1ZSwgdHJ1ZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBSZWdpc3RlciBzdG9yZXMgaW4gc3RvcmVzTWFwICYgbGluayB0aGVtIGluIHRoZSBwcm90b3NcbiAgICAgKiBAcGFyYW0gc3RvcmVzTWFwXG4gICAgICogQHBhcmFtIHN0YXRlXG4gICAgICogQHBhcmFtIGRhdGFcbiAgICAgKi9cbiAgICByZWdpc3Rlciggc3RvcmVzTWFwLCBzdGF0ZSA9IHt9LCBkYXRhID0ge30gKSB7XG4gICAgICAgIHRoaXMucmVsaW5rKHN0b3Jlc01hcCwgdGhpcywgZmFsc2UsIGZhbHNlKTtcbiAgICAgICAgT2JqZWN0LmtleXMoc3RvcmVzTWFwKS5mb3JFYWNoKFxuICAgICAgICAgICAgaWQgPT4ge1xuICAgICAgICAgICAgICAgIGlmICggaWQgPT0gXCIkcGFyZW50XCIgKSByZXR1cm47XG4gICAgICAgICAgICAgICAgaWYgKCBzdG9yZXNNYXBbIGlkIF0uc2luZ2xldG9uIHx8ICggaXMuZm4oc3RvcmVzTWFwWyBpZCBdKSAmJiAoIHN0YXRlWyBpZCBdIHx8IGRhdGFbIGlkIF0gKSApICkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9tb3VudChpZCwgdW5kZWZpbmVkLCBzdGF0ZVsgaWQgXSwgZGF0YVsgaWQgXSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoIHN0YXRlWyBpZCBdIHx8IGRhdGFbIGlkIF0gKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICggZGF0YVsgaWQgXSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICggc3RhdGVbIGlkIF0gKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcmVzWyBpZCBdLnN0YXRlID0gc3RhdGVbIGlkIF07XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3Jlc1sgaWQgXS5wdXNoKGRhdGFbIGlkIF0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKCBzdGF0ZVsgaWQgXSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcmVzWyBpZCBdLnNldFN0YXRlKHN0YXRlWyBpZCBdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fd2F0Y2hTdG9yZShpZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICApXG4gICAgICAgIFxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBNYXAgc3JjQ3R4IHN0b3JlJ3Mgb24gdGFyZ2V0Q3R4IGhlYWRlcnMgcHJvdG8nc1xuICAgICAqIEBwYXJhbSBzcmNDdHhcbiAgICAgKiBAcGFyYW0gdGFyZ2V0Q3R4XG4gICAgICogQHBhcmFtIHN0YXRlXG4gICAgICogQHBhcmFtIGRhdGFcbiAgICAgKi9cbiAgICByZWxpbmsoIHNyY0N0eCwgdGFyZ2V0Q3R4ID0gdGhpcywgZXh0ZXJuYWwsIGZvcmNlICkge1xuICAgICAgICBsZXQgbGN0eCA9IHRhcmdldEN0eC5fLnN0b3Jlcy5wcm90b3R5cGU7XG4gICAgICAgIE9iamVjdC5rZXlzKHNyY0N0eClcbiAgICAgICAgICAgICAgLmZvckVhY2goXG4gICAgICAgICAgICAgICAgICBpZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKCAhZm9yY2UgJiYgdGFyZ2V0Q3R4Ll8uX3Njb3BlWyBpZCBdID09PSBzcmNDdHhbIGlkIF0gfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldEN0eC5fLl9zY29wZVsgaWQgXSAmJiAoIHRhcmdldEN0eC5fLl9zY29wZVsgaWQgXS5jb25zdHJ1Y3RvciA9PT0gc3JjQ3R4WyBpZCBdICkgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgaWYgKCAhZm9yY2UgJiYgdGFyZ2V0Q3R4Ll8uX3Njb3BlWyBpZCBdICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoICFleHRlcm5hbCAmJiAhaXMuZm4odGFyZ2V0Q3R4Ll8uX3Njb3BlWyBpZCBdKSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuaW5mbyhcIlJlc2NvcGUgU3RvcmUgOiBcIiwgaWQsIFwiIGFscmVhZHkgZXhpc3QgaW4gdGhpcyBzY29wZSAhICggdHJ5IF9fcHJvdG9fXyBob3QgcGF0Y2ggKVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldEN0eC5fLl9zY29wZVsgaWQgXS5fX3Byb3RvX18gPSBzcmNDdHhbIGlkIF0ucHJvdG90eXBlO1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCAhZXh0ZXJuYWwgJiYgaXMuZm4odGFyZ2V0Q3R4Ll8uX3Njb3BlWyBpZCBdKSApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRDdHguXy5fc2NvcGVbIGlkIF0gPSBzcmNDdHhbIGlkIF07XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKCAhZm9yY2UgJiYgIWV4dGVybmFsIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fLl9zY29wZVsgaWQgXSA9IHNyY0N0eFsgaWQgXTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxjdHgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnVtZXJhYmxlICA6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXQgICAgICAgICA6ICgpID0+IHRoaXMuXy5fc2NvcGVbIGlkIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKCBpZCA9PSBcIiRwYXJlbnRcIiApIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldEN0eC5fLnN0YXRlLnByb3RvdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudW1lcmFibGUgIDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldCAgICAgICAgIDogKCkgPT4gKCB0aGlzLl8uX3Njb3BlWyBpZCBdICYmIHRoaXMuXy5fc2NvcGVbIGlkIF0uc3RhdGUgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldCAgICAgICAgIDogKCB2ICkgPT4gKCB0aGlzLl9tb3VudChpZCwgdW5kZWZpbmVkLCB2KSApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0Q3R4Ll8uZGF0YS5wcm90b3R5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnVtZXJhYmxlICA6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXQgICAgICAgICA6ICgpID0+ICggdGhpcy5fLl9zY29wZVsgaWQgXSAmJiB0aGlzLl8uX3Njb3BlWyBpZCBdLmRhdGEgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldCAgICAgICAgIDogKCB2ICkgPT4gKCB0aGlzLl9tb3VudChpZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHYpIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgbGV0IGFjdGlvbnMgICAgICAgPSBzcmNDdHhbIGlkIF0gaW5zdGFuY2VvZiBTY29wZS5TdG9yZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBzcmNDdHhbIGlkIF0uY29uc3RydWN0b3IuYWN0aW9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBzcmNDdHhbIGlkIF0uYWN0aW9ucyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlQWN0aW9ucyA9IHRhcmdldEN0eC5fLmFjdGlvbnMucHJvdG90eXBlO1xuICAgICAgICAgICAgICAgICAgICAgIGlmICggaXMucnNTY29wZSh0aGlzLl8uX3Njb3BlWyBpZCBdLnByb3RvdHlwZSkgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9tb3VudChpZCk7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKCBpcy5yc1Njb3BlKHRoaXMuXy5fc2NvcGVbIGlkIF0pICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVBY3Rpb25zWyBpZCBdID0gdGhpcy5fLl9zY29wZVsgaWQgXS5hY3Rpb25zO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBpZiAoICFpcy5yc1N0b3JlKHRoaXMuXy5fc2NvcGVbIGlkIF0pICYmICFpcy5yc1N0b3JlKHRoaXMuXy5fc2NvcGVbIGlkIF0ucHJvdG90eXBlKSApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25zICYmXG4gICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoYWN0aW9ucylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZm9yRWFjaChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCBhY3QgKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIGFjdGl2ZUFjdGlvbnMuaGFzT3duUHJvcGVydHkoYWN0KSApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlQWN0aW9uc1sgYWN0IF0uX190YXJnZXRTdG9yZXMrKztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZUFjdGlvbnNbIGFjdCBdICAgICAgICAgICAgICAgID0gdGhpcy5kaXNwYXRjaC5iaW5kKHRoaXMsIGFjdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlQWN0aW9uc1sgYWN0IF0uX190YXJnZXRTdG9yZXMgPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICApXG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIEJpbmQgc3RvcmVzIGZyb20gdGhpcyBzY29wZSwgaGlzIHBhcmVudHMgYW5kIG1peGVkIHNjb3BlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gb2JqIHtSZWFjdC5Db21wb25lbnR8U3RvcmV8ZnVuY3Rpb259XG4gICAgICogQHBhcmFtIGtleSB7c3RyaW5nfSBzdG9yZXMga2V5cyB0byBiaW5kIHVwZGF0ZXNcbiAgICAgKiBAcGFyYW0gYXNcbiAgICAgKiBAcGFyYW0gc2V0SW5pdGlhbCB7Ym9vbH0gZmFsc2UgdG8gbm90IHByb3BhZyBpbml0aWFsIHZhbHVlIChkZWZhdWx0IDogdHJ1ZSlcbiAgICAgKi9cbiAgICBiaW5kKCBvYmosIGtleSwgYXMsIHNldEluaXRpYWwgPSB0cnVlICkge1xuICAgICAgICBsZXQgbGFzdFJldnMsIGRhdGEsIHJlZktleXM7XG4gICAgICAgIGlmICgga2V5ICYmICFpcy5hcnJheShrZXkpIClcbiAgICAgICAgICAgIGtleSA9IFsga2V5IF07XG4gICAgICAgIFxuICAgICAgICBpZiAoIGFzID09PSBmYWxzZSB8fCBhcyA9PT0gdHJ1ZSApIHtcbiAgICAgICAgICAgIHNldEluaXRpYWwgPSBhcztcbiAgICAgICAgICAgIGFzICAgICAgICAgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZWZLZXlzID0ga2V5XG4gICAgICAgICAgICAubWFwKGlkID0+ICggaXMuc3RyaW5nKGlkKSA/IGlkIDogaWQubmFtZSApKVxuICAgICAgICAgICAgLm1hcChpZCA9PiAoIHRoaXMucGFyc2VSZWYoaWQpICkpO1xuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIHRoaXMuXy5mb2xsb3dlcnMucHVzaChcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBvYmosXG4gICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgIGFzIHx8IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICBsYXN0UmV2cyA9IHJlZktleXMucmVkdWNlKCggcmV2cywgcmVmICkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXZzWyByZWYuc3RvcmVJZCBdID0gcmV2c1sgcmVmLnN0b3JlSWQgXSB8fCB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXYgOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmczogW11cbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgcmV2c1sgcmVmLnN0b3JlSWQgXS5yZWZzLnB1c2gocmVmKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJldnM7XG4gICAgICAgICAgICAgICAgfSwge30pXG4gICAgICAgICAgICBdKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMubW91bnQoa2V5KTtcbiAgICAgICAgdGhpcy5yZXRhaW5TdG9yZXMoT2JqZWN0LmtleXMobGFzdFJldnMpLCAnbGlzdGVuZXJzJyk7XG4gICAgICAgIFxuICAgICAgICBpZiAoIHNldEluaXRpYWwgJiYgdGhpcy5fc3RhYmxlICkge1xuICAgICAgICAgICAgZGF0YSA9IHRoaXMuZ2V0VXBkYXRlcyhsYXN0UmV2cyk7XG4gICAgICAgICAgICBpZiAoICFkYXRhICkgcmV0dXJuO1xuICAgICAgICAgICAgaWYgKCB0eXBlb2Ygb2JqICE9IFwiZnVuY3Rpb25cIiApIHtcbiAgICAgICAgICAgICAgICBpZiAoIGFzICkgb2JqLnNldFN0YXRlKHsgWyBhcyBdOiBkYXRhIH0pO1xuICAgICAgICAgICAgICAgIGVsc2Ugb2JqLnNldFN0YXRlKGRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgb2JqKGRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBVbiBiaW5kIHRoaXMgc2NvcGUgb2ZmIHRoZSBnaXZlbiBjb21wb25lbnQta2V5c1xuICAgICAqIEBwYXJhbSBvYmpcbiAgICAgKiBAcGFyYW0ga2V5XG4gICAgICogQHJldHVybnMge0FycmF5LjwqPn1cbiAgICAgKi9cbiAgICB1bkJpbmQoIG9iaiwga2V5LCBhcyApIHtcbiAgICAgICAgdmFyIGZvbGxvd2VycyA9IHRoaXMuXy5mb2xsb3dlcnMsXG4gICAgICAgICAgICBpICAgICAgICAgPSBmb2xsb3dlcnMgJiYgZm9sbG93ZXJzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBmb2xsb3dlcnMgJiYgaS0tIClcbiAgICAgICAgICAgIGlmICggZm9sbG93ZXJzWyBpIF1bIDAgXSA9PT0gb2JqICYmICggJycgKyBmb2xsb3dlcnNbIGkgXVsgMSBdICkgPT0gKCAnJyArIGtleSApICYmXG4gICAgICAgICAgICAgICAgIGZvbGxvd2Vyc1sgaSBdWyAyIF0gPT0gYXMgKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kaXNwb3NlU3RvcmVzKE9iamVjdC5rZXlzKGZvbGxvd2Vyc1sgaSBdWyAzIF0pLCAnbGlzdGVuZXJzJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZvbGxvd2Vycy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIE1vdW50IHRoZSBzdG9yZXMgaW4gc3RvcmVzTGlzdCBmcm9tIHRoaXMgc2NvcGUsIGl0cyBwYXJlbnRzIGFuZCBtaXhlZCBzY29wZVxuICAgICAqIEJpbmQgdGhlbSB0byAndG8nXG4gICAgICogSG9vayAndG8nIHNvIGl0IHdpbGwgYXV0byB1bmJpbmQgb24gJ2Rlc3Ryb3knIG9yICdjb21wb25lbnRXaWxsVW5tb3VudCdcbiAgICAgKiBAcGFyYW0gdG9cbiAgICAgKiBAcGFyYW0gc3RvcmVzTGlzdFxuICAgICAqIEBwYXJhbSBiaW5kXG4gICAgICogQHJldHVybnMge09iamVjdH0gSW5pdGlhbCBvdXRwdXRzIG9mIHRoZSBzdG9yZXMgaW4gJ3N0b3Jlc0xpc3QnXG4gICAgICovXG4gICAgbWFwKCB0bywgc3RvcmVzTGlzdCwgYmluZCA9IHRydWUgKSB7XG4gICAgICAgIGxldCBTdG9yZSAgID0gdGhpcy5jb25zdHJ1Y3Rvci5TdG9yZTtcbiAgICAgICAgc3RvcmVzTGlzdCAgPSBpcy5hcnJheShzdG9yZXNMaXN0KSA/IHN0b3Jlc0xpc3QgOiBbIHN0b3Jlc0xpc3QgXTtcbiAgICAgICAgbGV0IHJlZkxpc3QgPSBzdG9yZXNMaXN0Lm1hcCh0aGlzLnBhcnNlUmVmKTtcbiAgICAgICAgdGhpcy5tb3VudChzdG9yZXNMaXN0KTtcbiAgICAgICAgaWYgKCBiaW5kICYmIHRvIGluc3RhbmNlb2YgU3RvcmUgKSB7XG4gICAgICAgICAgICBTdG9yZS5tYXAodG8sIHN0b3Jlc0xpc3QsIHRoaXMsIHRoaXMsIGZhbHNlKVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCBiaW5kICkge1xuICAgICAgICAgICAgdGhpcy5iaW5kKHRvLCBzdG9yZXNMaXN0LCB1bmRlZmluZWQsIGZhbHNlKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgbGV0IG1peGVkQ1dVbm1vdW50LFxuICAgICAgICAgICAgICAgIHVuTW91bnRLZXkgPSB0by5pc1JlYWN0Q29tcG9uZW50ID8gXCJjb21wb25lbnRXaWxsVW5tb3VudFwiIDogXCJkZXN0cm95XCI7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmICggdG8uaGFzT3duUHJvcGVydHkodW5Nb3VudEtleSkgKSB7XG4gICAgICAgICAgICAgICAgbWl4ZWRDV1VubW91bnQgPSB0b1sgdW5Nb3VudEtleSBdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB0b1sgdW5Nb3VudEtleSBdID0gKCAuLi5hcmd6ICkgPT4ge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSB0b1sgdW5Nb3VudEtleSBdO1xuICAgICAgICAgICAgICAgIGlmICggbWl4ZWRDV1VubW91bnQgKVxuICAgICAgICAgICAgICAgICAgICB0b1sgdW5Nb3VudEtleSBdID0gbWl4ZWRDV1VubW91bnQ7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdGhpcy51bkJpbmQodG8sIHN0b3Jlc0xpc3QpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0b1sgdW5Nb3VudEtleSBdICYmIHRvWyB1bk1vdW50S2V5IF0oLi4uYXJneik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVmTGlzdC5yZWR1Y2UoKCBkYXRhLCByZWYgKSA9PiB7XG4gICAgICAgICAgICB3YWxrblNldChkYXRhLCByZWYuYWxpYXMgfHwgcmVmLnBhdGgsIHRoaXMucmV0cmlldmUocmVmLnBhdGgpKVxuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH0sIHt9KTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogR2V0IGN1cnJlbnQgZGF0YSB2YWx1ZSBmcm9tIGpzb24gcGF0aFxuICAgICAqIEBwYXJhbSBwYXRoXG4gICAgICogQHJldHVybnMge3N0cmluZ3wqfVxuICAgICAqL1xuICAgIHJldHJpZXZlKCBwYXRoID0gXCJcIiApIHtcbiAgICAgICAgcGF0aCA9IGlzLnN0cmluZyhwYXRoKSA/IHBhdGguc3BsaXQoJy4nKSA6IHBhdGg7XG4gICAgICAgIHJldHVybiBwYXRoICYmIHRoaXMuc3RvcmVzWyBwYXRoWyAwIF0gXSAmJlxuICAgICAgICAgICAgICAgdGhpcy5zdG9yZXNbIHBhdGhbIDAgXSBdLnJldHJpZXZlKHBhdGguc2xpY2UoMSkpO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBHZXQgY3VycmVudCBzdG9yZSBmcm9tIGpzb24gcGF0aFxuICAgICAqIEBwYXJhbSBwYXRoXG4gICAgICogQHJldHVybnMge3N0cmluZ3wqfVxuICAgICAqL1xuICAgIHJldHJpZXZlU3RvcmUoIHBhdGggPSBcIlwiICkge1xuICAgICAgICBwYXRoID0gaXMuc3RyaW5nKHBhdGgpID8gcGF0aC5zcGxpdCgnLicpIDogcGF0aDtcbiAgICAgICAgcmV0dXJuIHBhdGhcbiAgICAgICAgICAgICAgICYmIHBhdGgubGVuZ3RoXG4gICAgICAgICAgICAgICAmJiAoXG4gICAgICAgICAgICAgICBwYXRoLmxlbmd0aCAhPSAxICYmIHRoaXMuc3RvcmVzWyBwYXRoWyAwIF0gXS5yZXRyaWV2ZVN0b3JlXG4gICAgICAgICAgICAgICA/IHRoaXMuc3RvcmVzWyBwYXRoWyAwIF0gXS5yZXRyaWV2ZVN0b3JlKHBhdGguc2xpY2UoMSkpXG4gICAgICAgICAgICAgICA6IHBhdGgubGVuZ3RoID09IDEgJiYgdGhpcy5zdG9yZXNbIHBhdGhbIDAgXSBdXG4gICAgICAgICAgICAgICApO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBHZXQgb3IgdXBkYXRlIHN0b3Jlc1Jldk1hcCdzIHJldmlzaW9uc1xuICAgICAqIEBwYXJhbSBzdG9yZXNSZXZNYXBcbiAgICAgKiBAcGFyYW0gbG9jYWxcbiAgICAgKiBAcmV0dXJucyB7e319XG4gICAgICovXG4gICAgZ2V0U3RvcmVzUmV2cyggc3RvcmVzUmV2TWFwID0ge30sIGxvY2FsICkge1xuICAgICAgICBsZXQgY3R4ID0gdGhpcy5fLl9zY29wZTtcbiAgICAgICAgaWYgKCAhc3RvcmVzUmV2TWFwICkge1xuICAgICAgICAgICAgc3RvcmVzUmV2TWFwID0ge307XG4gICAgICAgIH1cbiAgICAgICAgT2JqZWN0LmtleXMoY3R4KS5mb3JFYWNoKFxuICAgICAgICAgICAgaWQgPT4ge1xuICAgICAgICAgICAgICAgIGlmICggaWQgPT0gXCIkcGFyZW50XCIgKSByZXR1cm47XG4gICAgICAgICAgICAgICAgaWYgKCAhaXMuZm4oY3R4WyBpZCBdKVxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICBzdG9yZXNSZXZNYXBbIGlkIF0gPSBjdHhbIGlkIF0uX3JldjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoICFzdG9yZXNSZXZNYXAuaGFzT3duUHJvcGVydHkoaWQpIClcbiAgICAgICAgICAgICAgICAgICAgc3RvcmVzUmV2TWFwWyBpZCBdID0gZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgaWYgKCAhbG9jYWwgKSB7XG4gICAgICAgICAgICB0aGlzLl8uX21peGVkLnJlZHVjZSgoIHVwZGF0ZWQsIGN0eCApID0+ICggY3R4LmdldFN0b3Jlc1JldnMoc3RvcmVzUmV2TWFwKSwgc3RvcmVzUmV2TWFwICksIHN0b3Jlc1Jldk1hcCk7XG4gICAgICAgICAgICB0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC5nZXRTdG9yZXNSZXZzKHN0b3Jlc1Jldk1hcCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0b3Jlc1Jldk1hcDtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogR2V0IG9yIHVwZGF0ZSBvdXRwdXQgYmFzaW5nIHN0b3Jlc1Jldk1hcCdzIHJldmlzaW9ucy5cbiAgICAgKiBJZiBhIHN0b3JlIGluICdzdG9yZXNSZXZNYXAnIHdhcyB1cGRhdGVkOyBhZGQgaXQgdG8gJ291dHB1dCcgJiB1cGRhdGUgc3RvcmVzUmV2TWFwXG4gICAgICogQHBhcmFtIHN0b3Jlc1Jldk1hcFxuICAgICAqIEBwYXJhbSBvdXRwdXRcbiAgICAgKiBAcGFyYW0gdXBkYXRlZFxuICAgICAqIEByZXR1cm5zIHsqfHt9fVxuICAgICAqL1xuICAgIGdldFVwZGF0ZXMoIHN0b3Jlc1Jldk1hcCwgb3V0cHV0LCB1cGRhdGVkICkge1xuICAgICAgICBsZXQgY3R4ID0gdGhpcy5fLl9zY29wZTtcbiAgICAgICAgXG4gICAgICAgIG91dHB1dCA9IG91dHB1dCB8fCB7fTtcbiAgICAgICAgT2JqZWN0LmtleXMoY3R4KS5mb3JFYWNoKFxuICAgICAgICAgICAgaWQgPT4ge1xuICAgICAgICAgICAgICAgIGlmICggaWQgPT0gXCIkcGFyZW50XCIgKSByZXR1cm47XG4gICAgICAgICAgICAgICAgaWYgKCAhb3V0cHV0Lmhhc093blByb3BlcnR5KGlkKSAmJiAhaXMuZm4oY3R4WyBpZCBdKVxuICAgICAgICAgICAgICAgICAgICAgJiYgKCAhc3RvcmVzUmV2TWFwXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHx8ICggc3RvcmVzUmV2TWFwLmhhc093blByb3BlcnR5KGlkKSAmJiBzdG9yZXNSZXZNYXBbIGlkIF0gPT09IHVuZGVmaW5lZCApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHx8ICEoICFzdG9yZXNSZXZNYXAuaGFzT3duUHJvcGVydHkoaWQpIHx8IGN0eFsgaWQgXS5fcmV2IDw9IHN0b3Jlc1Jldk1hcFsgaWQgXS5yZXYgKSApXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVkICAgICAgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBvdXRwdXRbIGlkIF0gPSB0aGlzLmRhdGFbIGlkIF07XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpZiAoIHN0b3Jlc1Jldk1hcCAmJiBzdG9yZXNSZXZNYXAuaGFzT3duUHJvcGVydHkoaWQpICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmVzUmV2TWFwWyBpZCBdLnJldiA9IGN0eFsgaWQgXS5fcmV2O1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmVzUmV2TWFwWyBpZCBdLnJlZnMuZm9yRWFjaChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWYgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUud2FybihcInVwZGF0ZSByZWYgXCIsIHJlZi5yZWYsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMucmV0cmlldmUocmVmLnBhdGgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0WyByZWYuYWxpYXMgXSA9IHRoaXMucmV0cmlldmUocmVmLnBhdGgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS53YXJuKFwidXBkYXRlIFwiLCBpZCwgdGhpcy5kYXRhW2lkXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXRbIGlkIF0gPSB0aGlzLmRhdGFbIGlkIF07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICB1cGRhdGVkID0gdGhpcy5fLl9taXhlZC5yZWR1Y2UoKCB1cGRhdGVkLCBjdHggKSA9PiAoIGN0eC5nZXRVcGRhdGVzKHN0b3Jlc1Jldk1hcCwgb3V0cHV0LCB1cGRhdGVkKSB8fCB1cGRhdGVkICksIHVwZGF0ZWQpO1xuICAgICAgICB1cGRhdGVkID0gdGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuZ2V0VXBkYXRlcyhzdG9yZXNSZXZNYXAsIG91dHB1dCwgdXBkYXRlZCkgfHwgdXBkYXRlZDtcbiAgICAgICAgcmV0dXJuIHVwZGF0ZWQgJiYgb3V0cHV0O1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBSZWN1cnNpdmVseSBnZXQgYWxsIGNoaWxkIHNjb3Blc1xuICAgICAqIEBwYXJhbSBjaGlsZHNcbiAgICAgKiBAcmV0dXJucyB7QXJyYXl9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfZ2V0QWxsQ2hpbGRzKCBjaGlsZHMgPSBbXSApIHtcbiAgICAgICAgY2hpbGRzLnB1c2goLi4udGhpcy5fLmNoaWxkU2NvcGVzKTtcbiAgICAgICAgdGhpcy5fLmNoaWxkU2NvcGVzLmZvckVhY2goXG4gICAgICAgICAgICBjdHggPT4ge1xuICAgICAgICAgICAgICAgIGN0eC5fZ2V0QWxsQ2hpbGRzKGNoaWxkcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiBjaGlsZHM7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIFNlcmlhbGl6ZSBhbGwgYWN0aXZlIHN0b3JlcyBzdGF0ZSAmIGRhdGEgaW4gZXZlcnkgY2hpbGRzICYgbWl4ZWQgc2NvcGVzXG4gICAgICpcbiAgICAgKiBTY29wZXMgd2l0aG91dCBrZXkgb3IgaWQgYXJlIGlnbm9yZWRcbiAgICAgKiBAcGFyYW0gb3V0cHV0XG4gICAgICogQHJldHVybnMge3t9fVxuICAgICAqL1xuICAgIHNlcmlhbGl6ZSggY2ZnID0ge30sIG91dHB1dCA9IHt9ICkge1xuICAgICAgICBsZXQgY3R4ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA9IHRoaXMuXy5fc2NvcGUsXG4gICAgICAgICAgICB7IGFsaWFzLCB3aXRoQ2hpbGRzID0gdHJ1ZSwgd2l0aFBhcmVudHMsIHdpdGhNaXhlZCA9IHRydWUsIG5vcmVmcyB9ID0gY2ZnO1xuICAgICAgICBcbiAgICAgICAgaWYgKCBrZXlXYWxrbkdldChvdXRwdXQsIHRoaXMuX2lkKSApXG4gICAgICAgICAgICByZXR1cm4gb3V0cHV0O1xuICAgICAgICBcbiAgICAgICAgLy9AdG9kbyA6IGJldHRlciBzZXJpYWxpemUgbWV0aG9kXG4gICAgICAgIGtleVdhbGtuU2V0KG91dHB1dCwgdGhpcy5faWQsIHt9KTtcbiAgICAgICAgXG4gICAgICAgIE9iamVjdC5rZXlzKGN0eCkuZm9yRWFjaChcbiAgICAgICAgICAgIGlkID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIGlkID09IFwiJHBhcmVudFwiIHx8IGlzLmZuKGN0eFsgaWQgXSkgKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY3R4WyBpZCBdLnNlcmlhbGl6ZShjZmcsIG91dHB1dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIClcbiAgICAgICAgXG4gICAgICAgIHdpdGhQYXJlbnRzICYmIHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LnNlcmlhbGl6ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aENoaWxkICA6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpdGhQYXJlbnRzOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpdGhNaXhlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JlZnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIG91dHB1dCk7XG4gICAgICAgIFxuICAgICAgICB3aXRoQ2hpbGRzICYmIHRoaXMuXy5jaGlsZFNjb3Blcy5mb3JFYWNoKFxuICAgICAgICAgICAgY3R4ID0+IHtcbiAgICAgICAgICAgICAgICAhY3R4Ll8uaXNMb2NhbElkICYmIGN0eC5zZXJpYWxpemUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aENoaWxkICA6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRoUGFyZW50czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRoTWl4ZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JlZnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgb3V0cHV0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgXG4gICAgICAgIHdpdGhNaXhlZCAmJiB0aGlzLl8uX21peGVkLmZvckVhY2goXG4gICAgICAgICAgICBjdHggPT4ge1xuICAgICAgICAgICAgICAgICFjdHguXy5pc0xvY2FsSWQgJiYgY3R4LnNlcmlhbGl6ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRoQ2hpbGQgIDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRoUGFyZW50czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRoTWl4ZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JlZnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgb3V0cHV0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgXG4gICAgICAgIGlmICggYWxpYXMgKSB7XG4gICAgICAgICAgICBvdXRwdXQgPSBPYmplY3Qua2V5cyhvdXRwdXQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAucmVkdWNlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICggaCwgayApID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaFsgay5zdGFydHNXaXRoKGFsaWFzKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGFsaWFzICsgay5zdWJzdHIoYWxpYXMubGVuZ3RoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGsgXSA9IG91dHB1dFsgayBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb3V0cHV0O1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBSZXN0b3JlIHN0YXRlICYgZGF0YSBmcm9tIHRoZSBzZXJpYWxpemUgZm5cbiAgICAgKiBAcGFyYW0gc25hcHNob3RcbiAgICAgKiBAcGFyYW0gZm9yY2VcbiAgICAgKi9cbiAgICByZXN0b3JlKCBzbmFwc2hvdCwgY2ZnID0ge30sIGZvcmNlID0gaXMuYm9vbChjZmcpICYmIGNmZyApIHtcbiAgICAgICAgbGV0IGN0eCAgPSB0aGlzLl8uX3Njb3BlLCBzbmFwO1xuICAgICAgICBzbmFwc2hvdCA9IHNuYXBzaG90XG4gICAgICAgICAgICAgICAgICAgJiYga2V5V2Fsa25HZXQoc25hcHNob3QsIHRoaXMuX2lkKVxuICAgICAgICAgICAgICAgICAgIHx8IHRoaXMudGFrZVNuYXBzaG90QnlLZXkodGhpcy5faWQpO1xuICAgICAgICBcbiAgICAgICAgaWYgKCAhc25hcHNob3QgKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fLnNuYXBzaG90ID0gc25hcHNob3Q7XG4gICAgICAgIFxuICAgICAgICBzbmFwID0gc25hcHNob3RbICcvJyBdO1xuICAgICAgICBcbiAgICAgICAgc25hcCAmJiBPYmplY3Qua2V5cyhzbmFwKS5mb3JFYWNoKFxuICAgICAgICAgICAgbmFtZSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCBuYW1lID09IFwiJHBhcmVudFwiICkgcmV0dXJuO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmICggY3R4WyBuYW1lIF0gKSB7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpZiAoIGZvcmNlICYmICFpcy5mbihjdHhbIG5hbWUgXSkgKVxuICAgICAgICAgICAgICAgICAgICAgICAgY3R4WyBuYW1lIF0uZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbW91bnQobmFtZSk7Ly8gcXVpZXRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIClcbiAgICAgICAgXG4gICAgICAgIHRoaXMuXy5fbWl4ZWQuZm9yRWFjaChcbiAgICAgICAgICAgIGN0eCA9PiB7XG4gICAgICAgICAgICAgICAgIWN0eC5fLmlzTG9jYWxJZCAmJiBjdHgucmVzdG9yZSh1bmRlZmluZWQsIGZvcmNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuXy5jaGlsZFNjb3Blcy5mb3JFYWNoKFxuICAgICAgICAgICAgY3R4ID0+IHtcbiAgICAgICAgICAgICAgICAhY3R4Ll8uaXNMb2NhbElkICYmIGN0eC5yZXN0b3JlKHVuZGVmaW5lZCwgZm9yY2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICBcbiAgICB9XG4gICAgXG4gICAgZ2V0U25hcHNob3RCeUtleSgga2V5LCBsb2NhbCApIHtcbiAgICAgICAgLy8gb25seSBoYXZlIHRoZSBsb2NhbCBzbmFwXG4gICAgICAgIGlmICggdGhpcy5fLnNuYXBzaG90ICYmIGtleS5zdGFydHNXaXRoKHRoaXMuX2lkKSApIHtcbiAgICAgICAgICAgIGxldCBvYmogPSBrZXlXYWxrbkdldCh0aGlzLl8uc25hcHNob3QsIGtleS5zdWJzdHIodGhpcy5faWQubGVuZ3RoKSlcbiAgICAgICAgICAgIC8vaWYgKCBvYmogKSB7XG4gICAgICAgICAgICAvLyAgICB0aGlzLmRlbGV0ZVNuYXBzaG90QnlLZXkoa2V5KTtcbiAgICAgICAgICAgIC8vfVxuICAgICAgICAgICAgcmV0dXJuIG9iajtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHJldHVybiAhbG9jYWxcbiAgICAgICAgICAgICAgICAgICAgJiYgdGhpcy5wYXJlbnRcbiAgICAgICAgICAgICAgICAgICAgJiYgdGhpcy5wYXJlbnQuZ2V0U25hcHNob3RCeUtleShrZXkpXG4gICAgICAgICAgICAgICAgICAgIHx8XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcmVzLiRwYXJlbnRcbiAgICAgICAgICAgICAgICAgICAgJiYgdGhpcy5zdG9yZXMuJHBhcmVudC5nZXRTbmFwc2hvdEJ5S2V5KGtleSk7XG4gICAgICAgIFxuICAgIH1cbiAgICBcbiAgICBnZXRTbmFwc2hvdEJ5S2V5RXh0KCBzbmFwc2hvdCwga2V5LCBsb2NhbCApIHtcbiAgICAgICAgLy8gb25seSBoYXZlIHRoZSBsb2NhbCBzbmFwXG4gICAgICAgIGlmICggc25hcHNob3QgKSB7XG4gICAgICAgICAgICBsZXQgb2JqID0ga2V5V2Fsa25HZXQoc25hcHNob3QsIGtleSlcbiAgICAgICAgICAgIHJldHVybiBvYmo7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxuICAgIFxuICAgIHRha2VTbmFwc2hvdEJ5S2V5KCBrZXksIGxvY2FsICkge1xuICAgICAgICBpZiAoIHRoaXMuXy5zbmFwc2hvdCAmJiBrZXkuc3RhcnRzV2l0aCh0aGlzLl9pZCkgKSB7XG4gICAgICAgICAgICBsZXQgb2JqID0ga2V5V2Fsa25HZXQodGhpcy5fLnNuYXBzaG90LCBrZXkuc3Vic3RyKHRoaXMuX2lkLmxlbmd0aCkpXG4gICAgICAgICAgICBpZiAoIG9iaiApIHtcbiAgICAgICAgICAgICAgICAvL3RoaXMuZGVsZXRlU25hcHNob3RCeUtleShrZXksIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG9iajtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHJldHVybiAhbG9jYWxcbiAgICAgICAgICAgICAgICAgICAgJiYgdGhpcy5wYXJlbnRcbiAgICAgICAgICAgICAgICAgICAgJiYgdGhpcy5wYXJlbnQudGFrZVNuYXBzaG90QnlLZXkoa2V5KVxuICAgICAgICAgICAgICAgICAgICB8fFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3Jlcy4kcGFyZW50XG4gICAgICAgICAgICAgICAgICAgICYmIHRoaXMuc3RvcmVzLiRwYXJlbnQudGFrZVNuYXBzaG90QnlLZXkoa2V5KTtcbiAgICB9XG4gICAgXG4gICAgZGVsZXRlU25hcHNob3RCeUtleSgga2V5LCBsb2NhbCApIHtcbiAgICAgICAgaWYgKCB0aGlzLl8uc25hcHNob3QgJiYga2V5LnN0YXJ0c1dpdGgodGhpcy5faWQpICkge1xuICAgICAgICAgICAgbGV0IG9iaiA9IGtleVdhbGtuR2V0KHRoaXMuXy5zbmFwc2hvdCwga2V5LnN1YnN0cih0aGlzLl9pZC5sZW5ndGgpLnJlcGxhY2UoL14oLipbXFw+fFxcL10pW15cXD58XFwvXSskL2lnLCAnJDEnKSlcbiAgICAgICAgICAgIGlmICggb2JqIClcbiAgICAgICAgICAgICAgICBkZWxldGUgb2JqWyBrZXkucmVwbGFjZSgvXi4qW1xcPnxcXC9dKFteXFw+fFxcL10rKSQvaWcsICckMScpIF1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gIWxvY2FsXG4gICAgICAgICAgICAgICAmJiB0aGlzLnBhcmVudFxuICAgICAgICAgICAgICAgJiYgdGhpcy5wYXJlbnQuZGVsZXRlU25hcHNob3RCeUtleShrZXkpXG4gICAgICAgICAgICAgICB8fFxuICAgICAgICAgICAgICAgdGhpcy5zdG9yZXMuJHBhcmVudFxuICAgICAgICAgICAgICAgJiYgdGhpcy5zdG9yZXMuJHBhcmVudC5kZWxldGVTbmFwc2hvdEJ5S2V5KGtleSk7XG4gICAgfVxuICAgIFxuICAgIHNldFN0YXRlKCBwU3RhdGUgKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKHBTdGF0ZSlcbiAgICAgICAgICAgICAgLmZvckVhY2goayA9PiAoIHRoaXMuc3RhdGVbIGsgXSA9IHBTdGF0ZVsgayBdICkpXG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIGdldCBhIHBhcnNlZCByZWZlcmVuY2VcbiAgICAgKiBAcGFyYW0gX3JlZlxuICAgICAqIEByZXR1cm5zIHt7c3RvcmVJZCwgcGF0aCwgYWxpYXM6ICosIHJlZjogKn19XG4gICAgICovXG4gICAgcGFyc2VSZWYoIF9yZWYgKSB7XG4gICAgICAgIGlmICggdHlwZW9mIF9yZWYgIT09ICdzdHJpbmcnICkge1xuICAgICAgICAgICAgdGhpcy5yZWdpc3Rlcih7IFsgX3JlZi5uYW1lIF06IF9yZWYuc3RvcmUgfSk7XG4gICAgICAgICAgICBfcmVmID0gX3JlZi5uYW1lO1xuICAgICAgICB9XG4gICAgICAgIGxldCByZWYgID0gX3JlZi5zcGxpdCgnOicpO1xuICAgICAgICByZWZbIDAgXSA9IHJlZlsgMCBdLnNwbGl0KCcuJyk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzdG9yZUlkOiByZWZbIDAgXVsgMCBdLFxuICAgICAgICAgICAgcGF0aCAgIDogcmVmWyAwIF0sXG4gICAgICAgICAgICBhbGlhcyAgOiByZWZbIDEgXSB8fCByZWZbIDAgXVsgcmVmWyAwIF0ubGVuZ3RoIC0gMSBdLFxuICAgICAgICAgICAgcmVmICAgIDogX3JlZlxuICAgICAgICB9O1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBEaXNwYXRjaCBhbiBhY3Rpb24gdG8gdGhlIHRvcCBwYXJlbnQgJiBtaXhlZCBzY29wZXMsIGluIGFsbCBzdG9yZXNcbiAgICAgKlxuICAgICAqIEBwYXJhbSBhY3Rpb25cbiAgICAgKiBAcGFyYW0gZGF0YVxuICAgICAqIEByZXR1cm5zIHtTY29wZX1cbiAgICAgKi9cbiAgICBkaXNwYXRjaCggYWN0aW9uLCAuLi5hcmd6ICkge1xuICAgICAgICBpZiAoIHRoaXMuZGVhZCApIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcIkRpc3BhdGNoIHdhcyBjYWxsZWQgb24gYSBkZWFkIHNjb3BlLCBjaGVjayB5b3UncmUgYXN5bmMgZnVuY3Rpb25zIGluIHRoaXMgc3RhY2suLi5cIiwgKCBuZXcgRXJyb3IoKSApLnN0YWNrKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgYkFjdHMgPSB0aGlzLl8uX2JvdW5kZWRBY3Rpb25zO1xuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLl8uX3Njb3BlKVxuICAgICAgICAgICAgICAuZm9yRWFjaChcbiAgICAgICAgICAgICAgICAgIGlkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoIGlkID09IFwiJHBhcmVudFwiICkgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgIGlmICggIWlzLmZuKHRoaXMuXy5fc2NvcGVbIGlkIF0pIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fLl9zY29wZVsgaWQgXS50cmlnZ2VyKGFjdGlvbiwgLi4uYXJneik7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICk7XG4gICAgICAgIFxuICAgICAgICBpZiAoIGJBY3RzICYmIGJBY3RzLnRlc3QoYWN0aW9uKSApXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIFxuICAgICAgICB0aGlzLl8uX21peGVkLmZvckVhY2goKCBjdHggKSA9PiAoIGN0eC5kaXNwYXRjaChhY3Rpb24sIC4uLmFyZ3opICkpO1xuICAgICAgICB0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC5kaXNwYXRjaChhY3Rpb24sIC4uLmFyZ3opO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgXG4gICAgLy9cbiAgICB0cmlnZ2VyKCkge1xuICAgICAgICB0aGlzLmRpc3BhdGNoKC4uLmFyZ3VtZW50cyk7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIG9uY2UoJ3N0YWJsZScsIGNiKVxuICAgICAqIEBwYXJhbSBvYmoge1JlYWN0LkNvbXBvbmVudHxTdG9yZXxmdW5jdGlvbilcbiAgICAgKiBAcGFyYW0ga2V5IHtzdHJpbmd9IG9wdGlvbmFsIGtleSB3aGVyZSB0byBtYXAgdGhlIHB1YmxpYyBzdGF0ZVxuICAgICAqL1xuICAgIHRoZW4oIGNiICkge1xuICAgICAgICBpZiAoIHRoaXMuX3N0YWJsZSApXG4gICAgICAgICAgICByZXR1cm4gY2IodGhpcy5kYXRhKTtcbiAgICAgICAgdGhpcy5vbmNlKCdzdGFibGUnLCBlID0+IGNiKHRoaXMuZGF0YSkpO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBDYWxsIHJldGFpbiBvbiB0aGUgc2NvcGVkIHN0b3JlcyBiYXNpbmcgZ2l2ZW5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBzdG9yZXNcbiAgICAgKiBAcGFyYW0gcmVhc29uXG4gICAgICovXG4gICAgcmV0YWluU3RvcmVzKCBzdG9yZXMgPSBbXSwgcmVhc29uICkge1xuICAgICAgICBzdG9yZXMuZm9yRWFjaChcbiAgICAgICAgICAgIGlkID0+ICggdGhpcy5zdG9yZXNbIGlkIF0gJiYgdGhpcy5zdG9yZXNbIGlkIF0ucmV0YWluICYmIHRoaXMuc3RvcmVzWyBpZCBdLnJldGFpbihyZWFzb24pIClcbiAgICAgICAgKVxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBDYWxsIHJldGFpbiBvbiB0aGUgc2NvcGVkIHN0b3Jlc1xuICAgICAqXG4gICAgICogQHBhcmFtIHN0b3Jlc1xuICAgICAqIEBwYXJhbSByZWFzb25cbiAgICAgKi9cbiAgICBkaXNwb3NlU3RvcmVzKCBzdG9yZXMgPSBbXSwgcmVhc29uICkge1xuICAgICAgICBzdG9yZXMuZm9yRWFjaChcbiAgICAgICAgICAgIGlkID0+ICggdGhpcy5zdG9yZXNbIGlkIF0gJiYgdGhpcy5zdG9yZXNbIGlkIF0uZGlzcG9zZSAmJiB0aGlzLnN0b3Jlc1sgaWQgXS5kaXNwb3NlKHJlYXNvbikgKVxuICAgICAgICApXG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIEtlZXAgdGhlIHNjb3BlIHVuc3RhYmxlIHVudGlsIHJlbGVhc2UgaXMgY2FsbGVkXG4gICAgICogQHBhcmFtIHJlYXNvblxuICAgICAqL1xuICAgIHdhaXQoIHJlYXNvbiApIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcIndhaXRcIiwgcmVhc29uKTtcbiAgICAgICAgdGhpcy5fc3RhYmxlICYmICF0aGlzLl9fbG9ja3MuYWxsICYmIHRoaXMuZW1pdChcInVuc3RhYmxlXCIsIHRoaXMpO1xuICAgICAgICB0aGlzLl9zdGFibGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fX2xvY2tzLmFsbCsrO1xuICAgICAgICBpZiAoIHJlYXNvbiApIHtcbiAgICAgICAgICAgIHRoaXMuX19sb2Nrc1sgcmVhc29uIF0gPSB0aGlzLl9fbG9ja3NbIHJlYXNvbiBdIHx8IDA7XG4gICAgICAgICAgICB0aGlzLl9fbG9ja3NbIHJlYXNvbiBdKys7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgXG4gICAgLyoqXG4gICAgICogU3RhYmlsaXplIHRoZSBzY29wZSBpZiBubyBtb3JlIGxvY2tzIHJlbWFpbiAod2FpdCBmbilcbiAgICAgKiBAcGFyYW0gcmVhc29uXG4gICAgICovXG4gICAgcmVsZWFzZSggcmVhc29uICkge1xuICAgICAgICBcbiAgICAgICAgaWYgKCByZWFzb24gKSB7XG4gICAgICAgICAgICBpZiAoIHRoaXMuX19sb2Nrc1sgcmVhc29uIF0gPT0gMCApXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlJlbGVhc2UgbW9yZSB0aGFuIGxvY2tpbmcgIVwiLCByZWFzb24pO1xuICAgICAgICAgICAgdGhpcy5fX2xvY2tzWyByZWFzb24gXSA9IHRoaXMuX19sb2Nrc1sgcmVhc29uIF0gfHwgMDtcbiAgICAgICAgICAgIHRoaXMuX19sb2Nrc1sgcmVhc29uIF0tLTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoICFyZWFzb24gJiYgdGhpcy5fX2xvY2tzLmFsbCA9PSAwIClcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJSZWxlYXNlIG1vcmUgdGhhbiBsb2NraW5nICFcIik7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9fbG9ja3MuYWxsLS07XG4gICAgICAgIGlmICggIXRoaXMuX19sb2Nrcy5hbGwgKSB7XG4gICAgICAgICAgICB0aGlzLl8uc3RhYmlsaXplclRNICYmIGNsZWFyVGltZW91dCh0aGlzLl8uc3RhYmlsaXplclRNKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5fLnN0YWJpbGl6ZXJUTSA9IHNldFRpbWVvdXQoXG4gICAgICAgICAgICAgICAgZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuXy5zdGFiaWxpemVyVE0gPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIHRoaXMuX19sb2Nrcy5hbGwgKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fLnByb3BhZ1RNICYmIGNsZWFyVGltZW91dCh0aGlzLl8ucHJvcGFnVE0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9yZXYrKztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc3RhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KFwic3RhYmxlXCIsIHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgIXRoaXMuZGVhZCAmJiB0aGlzLl9wcm9wYWcoKTsvLyBzdGFiaWxpdHkgY2FuIGluZHVjZSBkZXN0cm95XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogUHJvcGFnIHN0b3JlcyB1cGRhdGVzIGJhc2luZyB0aGVpcnMgbGFzdCB1cGRhdGVzXG4gICAgICovXG4gICAgcHJvcGFnKCkge1xuICAgICAgICB0aGlzLl8ucHJvcGFnVE0gJiYgY2xlYXJUaW1lb3V0KHRoaXMuXy5wcm9wYWdUTSk7XG4gICAgICAgIHRoaXMuXy5wcm9wYWdUTSA9IHNldFRpbWVvdXQoXG4gICAgICAgICAgICBlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLl8ucHJvcGFnVE0gPSBudWxsO1xuICAgICAgICAgICAgICAgIHRoaXMuX3Byb3BhZygpXG4gICAgICAgICAgICB9LCAyXG4gICAgICAgICk7XG4gICAgfVxuICAgIFxuICAgIF9wcm9wYWcoKSB7XG4gICAgICAgIGlmICggdGhpcy5fLmZvbGxvd2Vycy5sZW5ndGggKVxuICAgICAgICAgICAgdGhpcy5fLmZvbGxvd2Vycy5mb3JFYWNoKCggeyAwOiBvYmosIDE6IGtleSwgMjogYXMsIDM6IGxhc3RSZXZzLCAzOiByZW1hcHMgfSApID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHRoaXMuZ2V0VXBkYXRlcyhsYXN0UmV2cyk7XG4gICAgICAgICAgICAgICAgaWYgKCAhZGF0YSApIHJldHVybjtcbiAgICAgICAgICAgICAgICBpZiAoIHR5cGVvZiBvYmogIT0gXCJmdW5jdGlvblwiICkge1xuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwic2V0U3RhdGUgXCIsb2JqLCBPYmplY3Qua2V5cyhkYXRhKSlcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBhcyApIG9iai5zZXRTdGF0ZSh7IFsgYXMgXTogZGF0YSB9KTtcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBvYmouc2V0U3RhdGUoZGF0YSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBvYmooZGF0YSwgbGFzdFJldnMgJiYgWyAuLi5sYXN0UmV2cyBdIHx8IFwibm8gcmV2c1wiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gbGFzdFJldnMgJiZcbiAgICAgICAgICAgICAgICAvLyBrZXkuZm9yRWFjaChpZCA9PiAobGFzdFJldnNbaWRdID0gdGhpcy5zdG9yZXNbaWRdICYmXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5zdG9yZXNbaWRdLl9yZXYgfHwgMCkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZW1pdChcInVwZGF0ZVwiLCB0aGlzLmdldFVwZGF0ZXMoKSk7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIGlzIHN0YWJsZVxuICAgICAqIEByZXR1cm5zIGJvb2xcbiAgICAgKi9cbiAgICBpc1N0YWJsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0YWJsZTtcbiAgICB9XG4gICAgXG4gICAgX2FkZENoaWxkKCBjdHggKSB7XG4gICAgICAgIHRoaXMuXy5jaGlsZFNjb3Blcy5wdXNoKGN0eCk7XG4gICAgICAgIHRoaXMuXy5zZWVuQ2hpbGRzKys7XG4gICAgICAgIGxldCBsaXN0cyAgICAgPSB7XG4gICAgICAgICAgICAgICAgJ3N0YWJsZScgICAgICA6IHMgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl8udW5TdGFibGVDaGlsZHMtLTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCAhdGhpcy5fLnVuU3RhYmxlQ2hpbGRzIClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdChcInN0YWJsZVRyZWVcIiwgdGhpcylcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICd1bnN0YWJsZScgICAgOiBzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fLnVuU3RhYmxlQ2hpbGRzKys7XG4gICAgICAgICAgICAgICAgICAgIGlmICggMSA9PSB0aGlzLl8udW5TdGFibGVDaGlsZHMgKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KFwidW5zdGFibGVUcmVlXCIsIHRoaXMpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAnc3RhYmxlVHJlZScgIDogcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuXy51blN0YWJsZUNoaWxkcy0tO1xuICAgICAgICAgICAgICAgICAgICBpZiAoICF0aGlzLl8udW5TdGFibGVDaGlsZHMgKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KFwic3RhYmxlVHJlZVwiLCB0aGlzKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgJ3Vuc3RhYmxlVHJlZSc6IHMgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl8udW5TdGFibGVDaGlsZHMrKztcbiAgICAgICAgICAgICAgICAgICAgaWYgKCAxID09IHRoaXMuXy51blN0YWJsZUNoaWxkcyApXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXQoXCJ1bnN0YWJsZVRyZWVcIiwgdGhpcylcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICdkZXN0cm95JyAgICAgOiBjdHggPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIGN0eC5fLnVuU3RhYmxlQ2hpbGRzIClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuXy51blN0YWJsZUNoaWxkcy0tO1xuICAgICAgICAgICAgICAgICAgICBpZiAoICFjdHguaXNTdGFibGUoKSApXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl8udW5TdGFibGVDaGlsZHMtLTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYgKCAhdGhpcy5fLnVuU3RhYmxlQ2hpbGRzIClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdChcInN0YWJsZVRyZWVcIiwgdGhpcylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgd2FzU3RhYmxlID0gdGhpcy5fLnVuU3RhYmxlQ2hpbGRzO1xuICAgICAgICAvLyFjdHguaXNTdGFibGUoKSAmJiBjb25zb2xlLndhcm4oJ2FkZCB1bnN0YWJsZSBjaGlsZCcpO1xuICAgICAgICAhY3R4LmlzU3RhYmxlKCkgJiYgdGhpcy5fLnVuU3RhYmxlQ2hpbGRzKys7XG4gICAgICAgIGN0eC5fLnVuU3RhYmxlQ2hpbGRzICYmIHRoaXMuXy51blN0YWJsZUNoaWxkcysrO1xuICAgICAgICB0aGlzLl8uY2hpbGRTY29wZXNMaXN0LnB1c2gobGlzdHMpO1xuICAgICAgICBpZiAoICF3YXNTdGFibGUgJiYgdGhpcy5fLnVuU3RhYmxlQ2hpbGRzIClcbiAgICAgICAgICAgIHRoaXMuZW1pdChcInVuc3RhYmxlVHJlZVwiLCB0aGlzKVxuICAgICAgICBjdHgub24obGlzdHMpO1xuICAgIH1cbiAgICBcbiAgICBfcm1DaGlsZCggY3R4ICkge1xuICAgICAgICBsZXQgaSAgICAgICAgID0gdGhpcy5fLmNoaWxkU2NvcGVzLmluZGV4T2YoY3R4KSxcbiAgICAgICAgICAgIHdhc1N0YWJsZSA9IHRoaXMuXy51blN0YWJsZUNoaWxkcztcbiAgICAgICAgaWYgKCBpICE9IC0xICkge1xuICAgICAgICAgICAgdGhpcy5fLmNoaWxkU2NvcGVzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICFjdHguaXNTdGFibGUoKSAmJiB0aGlzLl8udW5TdGFibGVDaGlsZHMtLTtcbiAgICAgICAgICAgIGN0eC5fLnVuU3RhYmxlQ2hpbGRzICYmIHRoaXMuXy51blN0YWJsZUNoaWxkcy0tO1xuICAgICAgICAgICAgY3R4LnVuKHRoaXMuXy5jaGlsZFNjb3Blc0xpc3Quc3BsaWNlKGksIDEpWyAwIF0pO1xuICAgICAgICAgICAgaWYgKCB3YXNTdGFibGUgJiYgIXRoaXMuXy51blN0YWJsZUNoaWxkcyApXG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0KFwic3RhYmxlVHJlZVwiKVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIHJldGFpbiggcmVhc29uICkge1xuICAgICAgICB0aGlzLl9fcmV0YWlucy5hbGwrKztcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcInJldGFpblwiLCB0aGlzLl9pZCwgcmVhc29uKTtcbiAgICAgICAgaWYgKCByZWFzb24gKSB7XG4gICAgICAgICAgICB0aGlzLl9fcmV0YWluc1sgcmVhc29uIF0gPSB0aGlzLl9fcmV0YWluc1sgcmVhc29uIF0gfHwgMDtcbiAgICAgICAgICAgIHRoaXMuX19yZXRhaW5zWyByZWFzb24gXSsrO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGRpc3Bvc2UoIHJlYXNvbiApIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcImRpc3Bvc2VcIiwgdGhpcy5faWQsIHJlYXNvbik7XG4gICAgICAgIGlmICggcmVhc29uICkge1xuICAgICAgICAgICAgaWYgKCAhdGhpcy5fX3JldGFpbnNbIHJlYXNvbiBdIClcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJEaXNwb3NlIG1vcmUgdGhhbiByZXRhaW5pbmcgOiBcIiArIHJlYXNvbik7XG4gICAgICAgICAgICB0aGlzLl9fcmV0YWluc1sgcmVhc29uIF0tLTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKCAhdGhpcy5fX3JldGFpbnMuYWxsIClcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkRpc3Bvc2UgbW9yZSB0aGFuIHJldGFpbmluZyAhXCIpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fX3JldGFpbnMuYWxsLS07XG4gICAgICAgIFxuICAgICAgICBpZiAoICF0aGlzLl9fcmV0YWlucy5hbGwgKSB7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiZGlzcG9zZSBkbyBkZXN0cm95IFwiLCB0aGlzLl9pZCwgdGhpcy5fcGVyc2lzdGVuY2VUbSk7XG4gICAgICAgICAgICBpZiAoIHRoaXMuXy5wZXJzaXN0ZW5jZVRtICkge1xuICAgICAgICAgICAgICAgIHRoaXMuXy5kZXN0cm95VE0gJiYgY2xlYXJUaW1lb3V0KHRoaXMuXy5kZXN0cm95VE0pO1xuICAgICAgICAgICAgICAgIHRoaXMuXy5kZXN0cm95VE0gPSBzZXRUaW1lb3V0KFxuICAgICAgICAgICAgICAgICAgICBlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vdGhpcy50aGVuKHMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgIXRoaXMuX19yZXRhaW5zLmFsbCAmJiAhdGhpcy5kZWFkICYmIHRoaXMuZGVzdHJveSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAvL30pO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB0aGlzLl8ucGVyc2lzdGVuY2VUbVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvL3RoaXMudGhlbihzID0+XG4gICAgICAgICAgICAgICAgKCAhdGhpcy5fX3JldGFpbnMuYWxsICYmICF0aGlzLmRlYWQgJiYgdGhpcy5kZXN0cm95KCkgKVxuICAgICAgICAgICAgICAgIC8vKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBvcmRlciBkZXN0cm95IG9mIGxvY2FsIHN0b3Jlc1xuICAgICAqL1xuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIGxldCBjdHggPSB0aGlzLl8uX3Njb3BlO1xuICAgICAgICAvL2NvbnNvbGUud2FybihcImRlc3Ryb3lcIiwgdGhpcy5faWQpO1xuICAgICAgICB0aGlzLl8uc3RhYmlsaXplclRNICYmIGNsZWFyVGltZW91dCh0aGlzLl8uc3RhYmlsaXplclRNKTtcbiAgICAgICAgdGhpcy5fLnByb3BhZ1RNICYmIGNsZWFyVGltZW91dCh0aGlzLl8ucHJvcGFnVE0pO1xuICAgICAgICBPYmplY3Qua2V5cyhcbiAgICAgICAgICAgIHRoaXMuXy5fbGlzdGVuaW5nXG4gICAgICAgICkuZm9yRWFjaChcbiAgICAgICAgICAgIGlkID0+ICggKCBpZCAhPT0gXCIkcGFyZW50XCIgKSAmJiB0aGlzLl8uX3Njb3BlWyBpZCBdLnJlbW92ZUxpc3RlbmVyKHRoaXMuXy5fbGlzdGVuaW5nWyBpZCBdKSApXG4gICAgICAgICk7XG4gICAgICAgIHdoaWxlICggdGhpcy5fLl9taXhlZExpc3QubGVuZ3RoICkge1xuICAgICAgICAgICAgdGhpcy5fLl9taXhlZFsgMCBdLnJlbW92ZUxpc3RlbmVyKHRoaXMuXy5fbWl4ZWRMaXN0LnNoaWZ0KCkpO1xuICAgICAgICAgICAgdGhpcy5fLl9taXhlZC5zaGlmdCgpLmRpc3Bvc2UoXCJtaXhlZFRvXCIpO1xuICAgICAgICB9XG4gICAgICAgIFsgLi4udGhpcy5fLmZvbGxvd2VycyBdLm1hcChmb2xsb3dlciA9PiB0aGlzLnVuQmluZCguLi5mb2xsb3dlcikpO1xuICAgICAgICBmb3IgKCBsZXQga2V5IGluIGN0eCApXG4gICAgICAgICAgICBpZiAoICFpcy5mbihjdHhbIGtleSBdKSApIHtcbiAgICAgICAgICAgICAgICBpZiAoIGtleSA9PSBcIiRwYXJlbnRcIiApIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICFjdHhbIGtleSBdLl9hdXRvRGVzdHJveSAmJiBjdHhbIGtleSBdLmRpc3Bvc2UoXCJzY29wZWRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIGlmICggdGhpcy5fLl9wYXJlbnRMaXN0ICkge1xuICAgICAgICAgICAgdGhpcy5wYXJlbnQuX3JtQ2hpbGQodGhpcyk7XG4gICAgICAgICAgICB0aGlzLnBhcmVudC5yZW1vdmVMaXN0ZW5lcih0aGlzLl8uX3BhcmVudExpc3QpO1xuICAgICAgICAgICAgdGhpcy5wYXJlbnQuZGlzcG9zZShcImlzTXlQYXJlbnRcIik7XG4gICAgICAgICAgICB0aGlzLl8uX3BhcmVudExpc3QgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGVhZCA9IHRydWU7XG4gICAgICAgIHRoaXMuZW1pdChcImRlc3Ryb3lcIiwgdGhpcyk7XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgLy9pZiAoICF0aGlzLl8uaXNMb2NhbElkIClcbiAgICAgICAgZGVsZXRlIG9wZW5TY29wZXNbIHRoaXMuX2lkIF07XG4gICAgICAgIFxuICAgICAgICAvL3RoaXMuXyA9IG51bGw7XG4gICAgICAgIFxuICAgIH1cbn1cblxuXG5pcy5yc1Njb3BlID0gZnVuY3Rpb24gKCBvYmogKSB7XG4gICAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIFNjb3BlXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNjb3BlO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9TY29wZS5qcyIsInZhciBpcyA9IHJlcXVpcmUoJ2lzJyk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICAuLi5pc1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWxzL2lzLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaXNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJpc1wiXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBpcyA9IHJlcXVpcmUoJy4vaXMnKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB3YWxrblNldCggb2JqLCBwYXRoLCB2YWx1ZSwgc3RhY2sgKSB7XHJcbiAgICBpZiAoIGlzLnN0cmluZyhwYXRoKSApXHJcbiAgICAgICAgcGF0aCA9IHBhdGguc3BsaXQoJy4nKTtcclxuICAgIGlmICggIXBhdGgubGVuZ3RoIClcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICBlbHNlIGlmICggcGF0aC5sZW5ndGggPT0gMSApXHJcbiAgICAgICAgcmV0dXJuIG9ialsgcGF0aFsgMCBdIF0gPSBzdGFja1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBbIC4uLiggb2JqWyBwYXRoWyAwIF0gXSB8fCBbXSApLCB2YWx1ZSBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHZhbHVlO1xyXG4gICAgZWxzZVxyXG4gICAgICAgIHJldHVybiB3YWxrblNldChcclxuICAgICAgICAgICAgb2JqWyBwYXRoWyAwIF0gXSA9XHJcbiAgICAgICAgICAgICAgICBvYmpbIHBhdGhbIDAgXSBdIHx8IHt9LFxyXG4gICAgICAgICAgICBwYXRoLnNsaWNlKDEpLFxyXG4gICAgICAgICAgICB2YWx1ZSwgc3RhY2tcclxuICAgICAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gd2Fsa25HZXQoIG9iaiwgcGF0aCwgaXNLZXkgKSB7XHJcbiAgICBpZiAoIGlzLnN0cmluZyhwYXRoKSApXHJcbiAgICAgICAgcGF0aCA9IHBhdGguc3BsaXQoJy4nKTtcclxuICAgIHJldHVybiBwYXRoLmxlbmd0aFxyXG4gICAgICAgICAgID8gb2JqWyBwYXRoWyAwIF0gXSAmJiB3YWxrbkdldChvYmpbIHBhdGhbIDAgXSBdLCBwYXRoLnNsaWNlKDEpKVxyXG4gICAgICAgICAgIDogb2JqO1xyXG59XHJcblxyXG4vL0B0b2RvXHJcbmV4cG9ydCBmdW5jdGlvbiBrZXlXYWxrblNldCggb2JqLCBwYXRoLCB2YWx1ZSwgc3RhY2sgKSB7XHJcbiAgICBpZiAoIGlzLnN0cmluZyhwYXRoKSApXHJcbiAgICAgICAgcGF0aCA9IHBhdGguc3BsaXQoLyhcXD58XFwvKS9pZykuZmlsdGVyKHYgPT4gKCB2ICE9PSAnPicgJiYgdiApKTtcclxuICAgIHJldHVybiB3YWxrblNldChvYmosIHBhdGgsIHZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGtleVdhbGtuR2V0KCBvYmosIHBhdGgsIGlzS2V5ICkge1xyXG4gICAgaWYgKCBpcy5zdHJpbmcocGF0aCkgKVxyXG4gICAgICAgIHBhdGggPSBwYXRoLnNwbGl0KC8oXFw+fFxcLykvaWcpLmZpbHRlcih2ID0+ICggdiAhPT0gJz4nICYmIHYgKSk7XHJcbiAgICByZXR1cm4gcGF0aC5sZW5ndGhcclxuICAgICAgICAgICA/IG9ialsgcGF0aFsgMCBdIF0gJiYgd2Fsa25HZXQob2JqWyBwYXRoWyAwIF0gXSwgcGF0aC5zbGljZSgxKSlcclxuICAgICAgICAgICA6IG9iajtcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlscy91dGlscy5qcyIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpICAyMDE4IFdpc2UgV2lsZCBXZWIgLlxuICpcbiAqICBNSVQgTGljZW5zZVxuICogIFxuICogIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqICBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiAgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqICBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqICBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICogIFxuICogIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuICogIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKiAgXG4gKiAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqICBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG4gKiAgU09GVFdBUkUuXG4gKiAgXG4gKiBAYXV0aG9yIDogTmF0aGFuYWVsIEJyYXVuXG4gKiBAY29udGFjdCA6IGNhaXBpbGFic0BnbWFpbC5jb21cbiAqL1xudmFyIGlzID0gcmVxdWlyZSgnaXMnKTtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVtaXR0ZXIge1xuICAgIF9ldmVudHMgPSB7fTtcbiAgICBcbiAgICBvbiggZXZ0LCBjYiApIHtcbiAgICAgICAgaWYgKCAhaXMuc3RyaW5nKGV2dCkgJiYgZXZ0IClcbiAgICAgICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhldnQpLmZvckVhY2goayA9PiB0aGlzLm9uKGssIGV2dFtrXSkpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fZXZlbnRzW2V2dF0gPSB0aGlzLl9ldmVudHNbZXZ0XSB8fCBbXTtcbiAgICAgICAgdGhpcy5fZXZlbnRzW2V2dF0ucHVzaChjYik7XG4gICAgICAgIFxuICAgIH1cbiAgICBcbiAgICB1biggZXZ0LCBjYiApIHtcbiAgICAgICAgaWYgKCAhaXMuc3RyaW5nKGV2dCkgJiYgZXZ0IClcbiAgICAgICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhldnQpLmZvckVhY2goayA9PiB0aGlzLnVuKGssIGV2dFtrXSkpO1xuICAgICAgICBcbiAgICAgICAgaWYgKCAhdGhpcy5fZXZlbnRzW2V2dF0gKSByZXR1cm47XG4gICAgICAgIHZhciBpID0gdGhpcy5fZXZlbnRzW2V2dF0uaW5kZXhPZihjYik7XG4gICAgICAgIHRoaXMuX2V2ZW50c1tldnRdLnNwbGljZShpLCAxKTtcbiAgICB9XG4gICAgXG4gICAgZW1pdCggZXZ0LCAuLi5hcmd6ICkge1xuICAgICAgICBpZiAoICF0aGlzLl9ldmVudHNbZXZ0XSApIHJldHVybjtcbiAgICAgICAgbGV0IGxpc3RzID0gWy4uLnRoaXMuX2V2ZW50c1tldnRdXTtcbiAgICAgICAgXG4gICAgICAgIGZvciAoIHZhciBpID0gMDsgaSA8IGxpc3RzLmxlbmd0aDsgaSsrIClcbiAgICAgICAgICAgIGxpc3RzW2ldKC4uLmFyZ3opXG4gICAgfVxuICAgIFxuICAgIGFkZExpc3RlbmVyKCkge1xuICAgICAgICB0aGlzLm9uKC4uLmFyZ3VtZW50cyk7XG4gICAgfVxuICAgIFxuICAgIHJlbW92ZUxpc3RlbmVyKCkge1xuICAgICAgICB0aGlzLnVuKC4uLmFyZ3VtZW50cyk7XG4gICAgfVxuICAgIFxuICAgIHJlbW92ZUFsbExpc3RlbmVycygpIHtcbiAgICAgICAgdGhpcy5fZXZlbnRzID0ge307XG4gICAgfVxuICAgIFxuICAgIG9uY2UoIGV2dCwgY2IgKSB7XG4gICAgICAgIGxldCBmbjtcbiAgICAgICAgdGhpcy5vbihldnQsIGZuID0gKCAuLi5hcmd6ICkgPT4ge1xuICAgICAgICAgICAgdGhpcy51bihldnQsIGZuKTtcbiAgICAgICAgICAgIGNiKC4uLmFyZ3opXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBcbiAgICBcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbHMvRW1pdHRlci5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNob3J0aWRcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJzaG9ydGlkXCJcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcbiAqIENvcHlyaWdodCAoYykgIDIwMTggV2lzZSBXaWxkIFdlYiAuXG4gKlxuICogIE1JVCBMaWNlbnNlXG4gKlxuICogIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqICBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiAgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqICBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqICBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqICBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcbiAqICBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqICBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiAgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiAgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiAgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiAgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcbiAqICBTT0ZUV0FSRS5cbiAqXG4gKiBAYXV0aG9yIDogTmF0aGFuYWVsIEJyYXVuXG4gKiBAY29udGFjdCA6IGNhaXBpbGFic0BnbWFpbC5jb21cbiAqL1xuXG52YXIgaXMgICAgICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vdXRpbHMvaXMnKSxcbiAgICBTY29wZSAgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9TY29wZScpLFxuICAgIHsga2V5V2Fsa25TZXQsIGtleVdhbGtuR2V0IH0gPSByZXF1aXJlKCcuL3V0aWxzL3V0aWxzJyksXG4gICAgRXZlbnRFbWl0dGVyICAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vdXRpbHMvRW1pdHRlcicpLFxuICAgIFRhc2tTZXF1ZW5jZXIgICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL3V0aWxzL1Rhc2tTZXF1ZW5jZXInKSxcbiAgICBzaG9ydGlkICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnc2hvcnRpZCcpLFxuICAgIG9ialByb3RvICAgICAgICAgICAgICAgICAgICAgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Yoe30pO1xuXG5jbGFzcyBTdG9yZSBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gICAgLy9zdGF0aWMgdXNlICAgICAgICAgICAgICAgICAgPSBbXTsvLyBvdmVycmlkYWJsZSBsaXN0IG9mIHNvdXJjZSBzdG9yZXNcbiAgICBzdGF0aWMgZm9sbG93Oy8vIG92ZXJyaWRhYmxlIGxpc3Qgb2Ygc3RvcmUgdGhhdCB3aWxsIGFsbG93IHB1c2ggaWYgdXBkYXRlZFxuICAgIHN0YXRpYyByZXF1aXJlO1xuICAgIHN0YXRpYyBzdGF0aWNTY29wZSAgICAgICAgICA9IG5ldyBTY29wZSh7fSwgeyBpZDogXCJzdGF0aWNcIiB9KTtcbiAgICBzdGF0aWMgc3RhdGUgICAgICAgICAgICAgICAgPSB1bmRlZmluZWQ7Ly8gZGVmYXVsdCBzdGF0ZVxuICAgIC8qKlxuICAgICAqIGlmIHJldGFpbiBnb2VzIHRvIDAgOlxuICAgICAqIGZhbHNlIHRvIG5vdCBkZXN0cm95LFxuICAgICAqIDAgdG8gc3luYyBhdXRvIGRlc3Ryb3lcbiAgICAgKiBNcyB0byBhdXRvZGVzdHJveSBhZnRlciB0bSBtcyBpZiBubyByZXRhaW4gaGFzIGJlZW4gY2FsbGVkXG4gICAgICogQHR5cGUge2Jvb2xlYW58SW50fVxuICAgICAqL1xuICAgICAgICAgICBzdGF0aWMgcGVyc2lzdGVuY2VUbSA9IGZhbHNlO1xuICAgIFxuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdG9yLCB3aWxsIGJ1aWxkIGEgcmVzY29wZSBzdG9yZVxuICAgICAqXG4gICAgICogKHNjb3BlLCB7cmVxdWlyZSx1c2UsYXBwbHksc3RhdGUsIGRhdGF9KVxuICAgICAqIChzY29wZSlcbiAgICAgKlxuICAgICAqIEBwYXJhbSBzY29wZSB7b2JqZWN0fSBzY29wZSB3aGVyZSB0byBmaW5kIHRoZSBvdGhlciBzdG9yZXMgKGRlZmF1bHQgOiBzdGF0aWNcbiAgICAgKiAgICAgc3RhdGljU2NvcGUgKVxuICAgICAqIEBwYXJhbSBrZXlzIHtBcnJheX0gKHBhc3NlZCB0byBTdG9yZTo6bWFwKSBFeCA6IFtcInNlc3Npb25cIiwgXCJvdGhlck5hbWVkU3RvcmU6a2V5XCIsXG4gICAgICogICAgIG90aGVyU3RvcmUuYXMoXCJvdGhlcktleVwiKV1cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdmFyIGFyZ3ogICAgICAgICA9IFsgLi4uYXJndW1lbnRzIF0sXG4gICAgICAgICAgICBfc3RhdGljICAgICAgPSB0aGlzLmNvbnN0cnVjdG9yLFxuICAgICAgICAgICAgc2NvcGUgICAgICAgID0gYXJnelsgMCBdIGluc3RhbmNlb2YgU2NvcGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgID8gYXJnei5zaGlmdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA6IF9zdGF0aWMuc2NvcGUgPyBTY29wZS5nZXRTY29wZShfc3RhdGljLnNjb3BlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogaXMuc3RyaW5nKGFyZ3pbIDAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gU2NvcGUuZ2V0U2NvcGUoYXJnei5zaGlmdCgpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfc3RhdGljLnN0YXRpY1Njb3BlLFxuICAgICAgICAgICAgY2ZnICAgICAgICAgID0gYXJnelsgMCBdICYmICFpcy5hcnJheShhcmd6WyAwIF0pICYmICFpcy5zdHJpbmcoYXJnelsgMCBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBhcmd6LnNoaWZ0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDoge30sXG4gICAgICAgICAgICB0YXNrUXVldWUgICAgPSBpcy5hcnJheShhcmd6WyAwIF0pID8gYXJnei5zaGlmdCgpIDogbnVsbCxcbiAgICAgICAgICAgIG5hbWUgICAgICAgICA9IGNmZy5uYW1lIHx8IF9zdGF0aWMubmFtZSxcbiAgICAgICAgICAgIHdhdGNocyAgICAgICA9IGNmZy51c2UgfHwgW10sXG4gICAgICAgICAgICBhcHBseSAgICAgICAgPSBjZmcuYXBwbHkgfHwgbnVsbCxcbiAgICAgICAgICAgIGluaXRpYWxTdGF0ZSA9IF9zdGF0aWMuc3RhdGUgfHwgX3N0YXRpYy5pbml0aWFsU3RhdGUgfHwgX3N0YXRpYy5kZWZhdWx0U3RhdGUsXG4gICAgICAgICAgICBhcHBsaWVkO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fdWlkID0gY2ZnLl91aWQgfHwgc2hvcnRpZC5nZW5lcmF0ZSgpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fX3JldGFpbnMgICAgPSB7IGFsbDogMCB9O1xuICAgICAgICB0aGlzLl9fbG9ja3MgICAgICA9IHsgYWxsOiAwIH07XG4gICAgICAgIHRoaXMuX29uU3RhYmlsaXplID0gW107XG4gICAgICAgIFxuICAgICAgICAvLyBhdXRvRGVzdHJveVRtXG4gICAgICAgIHRoaXMuX2F1dG9EZXN0cm95ICAgPSAhIXRoaXMuX3BlcnNpc3RlbmNlVG07XG4gICAgICAgIHRoaXMuX3BlcnNpc3RlbmNlVG0gPSBjZmcucGVyc2lzdGVuY2VUbSB8fCBfc3RhdGljLnBlcnNpc3RlbmNlVG0gfHwgKCBjZmcuYXV0b0Rlc3Ryb3kgfHwgX3N0YXRpYy5hdXRvRGVzdHJveSApICYmIDU7XG4gICAgICAgIHRoaXMuX2NmZyAgICAgICAgICAgPSBjZmc7XG4gICAgICAgIGlmICggY2ZnICYmIGNmZy5vbiApIHtcbiAgICAgICAgICAgIHRoaXMub24oY2ZnLm9uKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgXG4gICAgICAgIGlmICggc2NvcGUuc3RvcmVzICkge1xuICAgICAgICAgICAgdGhpcy5zY29wZU9iaiA9IHNjb3BlO1xuICAgICAgICAgICAgdGhpcy5zY29wZSAgICA9IHNjb3BlLnN0b3JlcztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2NvcGVPYmogPSBuZXcgU2NvcGUoc2NvcGUpO1xuICAgICAgICAgICAgdGhpcy5zY29wZSAgICA9IHNjb3BlLnN0b3JlcztcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8gc3RhbmRhcmRpemVkIHNjb3BlIGFjY2Vzc1xuICAgICAgICB0aGlzLiRzY29wZSAgICA9IHRoaXMuc2NvcGVPYmo7XG4gICAgICAgIHRoaXMuJHN0b3JlcyAgID0gdGhpcy5zY29wZU9iai5zdG9yZXM7XG4gICAgICAgIHRoaXMuJGFjdGlvbnMgID0gdGhpcy5zY29wZU9iai5hY3Rpb25zO1xuICAgICAgICB0aGlzLiRkaXNwYXRjaCA9IHRoaXMuc2NvcGVPYmouZGlzcGF0Y2guYmluZCh0aGlzLnNjb3BlT2JqKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX3JldiAgICAgPSB0aGlzLmNvbnN0cnVjdG9yLl9yZXYgfHwgMDtcbiAgICAgICAgdGhpcy5fcmV2cyAgICA9IHt9O1xuICAgICAgICB0aGlzLnN0b3JlcyAgID0ge307XG4gICAgICAgIHRoaXMuX3JlcXVpcmUgPSBbXTtcbiAgICAgICAgdGhpcy5fc291cmNlcyA9IFsgbmFtZSBdO1xuICAgICAgICBcbiAgICAgICAgaWYgKCBpcy5hcnJheShfc3RhdGljLnVzZSkgKSB7XG4gICAgICAgICAgICB0aGlzLl91c2UgPSBbIC4uLndhdGNocywgLi4uKCBfc3RhdGljLnVzZSB8fCBbXSApLm1hcChcbiAgICAgICAgICAgICAgICBrZXkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmVmID0ga2V5Lm1hdGNoKC9eKFxcIT8pKFteXFw6XSopKD86XFw6KC4qKSk/JC8pO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIHJlZlsgMSBdICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlZjIgPSByZWZbIDIgXS5zcGxpdCgnLicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fcmVxdWlyZS5wdXNoKHJlZlsgMyBdIHx8IHJlZjJbIHJlZjIubGVuZ3RoIC0gMSBdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVmWyAyIF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKSBdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fdXNlID0gWyAuLi53YXRjaHMsIC4uLihcbiAgICAgICAgICAgICAgICBfc3RhdGljLnVzZSA/IE9iamVjdC5rZXlzKF9zdGF0aWMudXNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVmID0ga2V5Lm1hdGNoKC9eKFxcIT8pKC4qKSQvKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmWyAxIF0gJiYgdGhpcy5fcmVxdWlyZS5wdXNoKF9zdGF0aWMudXNlWyBrZXkgXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZWZbIDIgXSArICggKCBfc3RhdGljLnVzZVsga2V5IF0gPT09IHRydWUgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICc6JyArIF9zdGF0aWMudXNlWyBrZXkgXSApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBbXVxuICAgICAgICAgICAgKSBdO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAoIF9zdGF0aWMucmVxdWlyZSApXG4gICAgICAgICAgICB0aGlzLl9yZXF1aXJlLnB1c2goLi4uX3N0YXRpYy5yZXF1aXJlKTtcbiAgICAgICAgaWYgKCBjZmcucmVxdWlyZSApXG4gICAgICAgICAgICB0aGlzLl9yZXF1aXJlLnB1c2goLi4uY2ZnLnJlcXVpcmUpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fZm9sbG93ZXJzID0gW107XG4gICAgICAgIHRoaXMuX2NoYW5nZXNTVyA9IGluaXRpYWxTdGF0ZSB8fCB7fTtcbiAgICAgICAgdGhpcy5zdGF0ZSAgICAgID0gaW5pdGlhbFN0YXRlICYmIHt9O1xuICAgICAgICBpZiAoIGFwcGx5IClcbiAgICAgICAgICAgIHRoaXMuYXBwbHkgPSBhcHBseTtcbiAgICAgICAgXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJbml0aWFsIHN0YXRlIGlzbid0IGZ1bGx5IGluaXRpYWxpemVkICggY2hpbGRzIGNvbnN0cnVjdG9ycyBjYW4gc2V0IGl0IClcbiAgICAgICAgICogU2NvcGUgYmFzZWQgaW5zdGFuY2UgaGF2ZSB0YXNrUXVldWUgdG8gZGVsYXkgaW5pdCBzeW5jaHJvbm91c2x5LCBpZiBub3RcbiAgICAgICAgICogcHJlc2VudCB3ZSB1c2Ugc2V0VGltZW91dFxuICAgICAgICAgKi9cbiAgICAgICAgaWYgKCB0YXNrUXVldWUgKSB7XG4gICAgICAgICAgICB0YXNrUXVldWUucHVzaCh0aGlzLl9hZnRlckNvbnN0cnVjdG9yLmJpbmQodGhpcykpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgc2V0VGltZW91dCh0aGlzLl9hZnRlckNvbnN0cnVjdG9yLmJpbmQodGhpcykpXG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgaW5jb21pbmcgc3RhdGUgKCBmb3IgaW1tZWRpYXRlIHN0YXRlIHJlbGF0aXZlIGFjdGlvbnMgKVxuICAgICAqIEByZXR1cm5zIHt7fXwqfVxuICAgICAqL1xuICAgIGdldCBuZXh0U3RhdGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jaGFuZ2VzU1cgJiYgeyAuLi50aGlzLnN0YXRlLCAuLi50aGlzLl9jaGFuZ2VzU1cgfSB8fCB0aGlzLnN0YXRlO1xuICAgIH1cbiAgICBcbiAgICBfYWZ0ZXJDb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgbGV0IGNmZyAgICAgICAgICA9IHRoaXMuX2NmZyxcbiAgICAgICAgICAgIF9zdGF0aWMgICAgICA9IHRoaXMuY29uc3RydWN0b3IsXG4gICAgICAgICAgICBzbmFwc2hvdCAgICAgPSB0aGlzLnJlc3RvcmUodW5kZWZpbmVkLCB0cnVlKSxcbiAgICAgICAgICAgIGluaXRpYWxTdGF0ZSA9IHRoaXMuc3RhdGUsXG4gICAgICAgICAgICBpbml0aWFsRGF0YSAgPSB0aGlzLmRhdGEsXG4gICAgICAgICAgICBhcHBsaWVkO1xuICAgICAgICB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmICggaW5pdGlhbERhdGEgKVxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YSA9IGluaXRpYWxEYXRhO1xuICAgICAgICAgICAgZWxzZSBpZiAoIF9zdGF0aWMuZGF0YSAhPT0gdW5kZWZpbmVkIClcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGEgPSB7IC4uLl9zdGF0aWMuZGF0YSB9O1xuICAgICAgICAgICAgZWxzZSBpZiAoIGNmZy5oYXNPd25Qcm9wZXJ0eShcImRhdGFcIikgKVxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YSA9IGNmZy5kYXRhO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoIGNmZy5oYXNPd25Qcm9wZXJ0eShcInN0YXRlXCIpICYmIGNmZy5zdGF0ZSAhPT0gdW5kZWZpbmVkIClcbiAgICAgICAgICAgICAgICBpbml0aWFsU3RhdGUgPSB7IC4uLmluaXRpYWxTdGF0ZSwgLi4uY2ZnLnN0YXRlIH07XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmICggdGhpcy5kYXRhID09PSB1bmRlZmluZWQgKSB7XG4gICAgICAgICAgICAgICAgaWYgKCBpbml0aWFsU3RhdGUgfHwgdGhpcy5fdXNlLmxlbmd0aCApIHsvLyBzeW5jIGFwcGx5XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2NoYW5nZXNTVyA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLnRoaXMuX2NoYW5nZXNTVyxcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLiggaW5pdGlhbFN0YXRlIHx8IHt9ICksXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi50aGlzLiRzY29wZS5tYXAodGhpcywgdGhpcy5fdXNlKVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlICAgICAgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCB0aGlzLnNob3VsZEFwcGx5KHRoaXMuX2NoYW5nZXNTVykgJiYgdGhpcy5kYXRhID09PSB1bmRlZmluZWQgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGEgICAgICAgPSB0aGlzLmFwcGx5KHRoaXMuZGF0YSwgdGhpcy5fY2hhbmdlc1NXLCB0aGlzLl9jaGFuZ2VzU1cpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXBwbGllZCAgICAgICAgID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUgICAgICA9IHRoaXMuX2NoYW5nZXNTVztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2NoYW5nZXNTVyA9IHt9O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgYXBwbGllZCAgICAgICAgID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlICAgICAgPSB7Ly8gYXNzdW1lIHRoaXMgc3RhdGUgaXMgc3luYyB3aXRoIGluaXRpYWwgZGF0YVxuICAgICAgICAgICAgICAgICAgICAuLi50aGlzLl9jaGFuZ2VzU1csXG4gICAgICAgICAgICAgICAgICAgIC4uLiggaW5pdGlhbFN0YXRlIHx8IHt9ICksXG4gICAgICAgICAgICAgICAgICAgIC4uLnRoaXMuJHNjb3BlLm1hcCh0aGlzLCB0aGlzLl91c2UpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuX2NoYW5nZXNTVyA9IHt9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICggKCB0aGlzLmRhdGEgIT09IHVuZGVmaW5lZCB8fCBhcHBsaWVkICkgJiYgIXRoaXMuX19sb2Nrcy5hbGwgKSB7XG4gICAgICAgICAgICB0aGlzLl9zdGFibGUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5fcmV2Kys7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9zdGFibGUgPSBmYWxzZTtcbiAgICAgICAgICAgIGlmICggIV9zdGF0aWMubWFuYWdlZCAmJiAhdGhpcy5zdGF0ZSAmJiAoICF0aGlzLl91c2UgfHwgIXRoaXMuX3VzZS5sZW5ndGggKSApIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCJSZVNjb3BlIHN0b3JlICdcIiwgdGhpcy5uYW1lLCBcIicgaGF2ZSBubyBpbml0aWFsIGRhdGEsIHN0YXRlIG9yIHVzZS4gSXQgY2FuJ3Qgc3RhYmlsaXplLi4uXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICF0aGlzLl9zdGFibGUgJiYgdGhpcy5lbWl0KCd1bnN0YWJsZScsIHRoaXMuc3RhdGUpO1xuICAgICAgICBcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogT3ZlcnJpZGFibGUgbWV0aG9kIHRvIGtub3cgaWYgYSBkYXRhIGNoYW5nZSBzaG91bGQgYmUgcHJvcGFnIHRvIHRoZSBsaXN0ZW5pbmdcbiAgICAgKiBzdG9yZXMgJiBjb21wb25lbnRzXG4gICAgICovXG4gICAgc2hvdWxkUHJvcGFnKCBuRGF0YXMgKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBcbiAgICBoYXNEYXRhQ2hhbmdlKCBuRGF0YXMgKSB7XG4gICAgICAgIHZhciBfc3RhdGljID0gdGhpcy5jb25zdHJ1Y3RvciwgcixcbiAgICAgICAgICAgIGNEYXRhcyAgPSB0aGlzLmRhdGE7XG4gICAgICAgIHIgICAgICAgICAgID0gIWNEYXRhcyAmJiBuRGF0YXMgfHwgY0RhdGFzICE9PSBuRGF0YXM7XG4gICAgICAgICFyICYmIGNEYXRhcyAmJiBPYmplY3Qua2V5cyhjRGF0YXMpLmZvckVhY2goXG4gICAgICAgICAgICAoIGtleSApID0+IHtcbiAgICAgICAgICAgICAgICByID0gciB8fCAoIG5EYXRhc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBjRGF0YXNbIGtleSBdICE9PSBuRGF0YXNbIGtleSBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA6IGNEYXRhcyAmJiBjRGF0YXNbIGtleSBdIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgIXIgJiYgbkRhdGFzICYmIE9iamVjdC5rZXlzKG5EYXRhcykuZm9yRWFjaChcbiAgICAgICAgICAgICgga2V5ICkgPT4ge1xuICAgICAgICAgICAgICAgIHIgPSByIHx8ICggbkRhdGFzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA/IGNEYXRhc1sga2V5IF0gIT09IG5EYXRhc1sga2V5IF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDogY0RhdGFzICYmIGNEYXRhc1sga2V5IF0gKVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcjtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogT3ZlcnJpZGFibGUgbWV0aG9kIHRvIGtub3cgaWYgYSBzdGF0ZSBjaGFuZ2Ugc2hvdWxkIGJlIGFwcGxpZWRcbiAgICAgKi9cbiAgICBzaG91bGRBcHBseSggc3RhdGUgPSB0aGlzLnN0YXRlICkge1xuICAgICAgICB2YXIgX3N0YXRpYyA9IHRoaXMuY29uc3RydWN0b3I7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICEhdGhpcy5pc0NvbXBsZXRlKHN0YXRlKVxuICAgICAgICAgICAgICAgKSAmJiAoIGlzLmFycmF5KF9zdGF0aWMuZm9sbG93KVxuICAgICAgICAgICAgICAgICAgICAgID8gX3N0YXRpYy5mb2xsb3dcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVkdWNlKCggciwgaSApID0+ICggciB8fCBzdGF0ZSAmJiBzdGF0ZVsgaSBdICksIGZhbHNlKVxuICAgICAgICAgICAgICAgICAgICAgIDogX3N0YXRpYy5mb2xsb3dcbiAgICAgICAgICAgICAgICAgICAgICAgID8gT2JqZWN0LmtleXMoX3N0YXRpYy5mb2xsb3cpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZWR1Y2UoKCByLCBpICkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfHwgc3RhdGUgJiYgaXMuZm4oX3N0YXRpYy5mb2xsb3dbIGkgXSkgJiYgX3N0YXRpYy5mb2xsb3dbIGkgXS5jYWxsKHRoaXMsIHN0YXRlWyBpIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8fCBfc3RhdGljLmZvbGxvd1sgaSBdICYmIHN0YXRlWyBpIF0gIT09IHRoaXMuc3RhdGVbIGkgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBmYWxzZSkgOiB0cnVlXG4gICAgICAgICAgICAgICApO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBPdmVycmlkYWJsZSBhcHBsaWVyIC8gcmVtYXBwZXJcbiAgICAgKiBJZiBzdGF0ZSBvciBsYXN0UHVibGljU3RhdGUgYXJlIHNpbXBsZSBoYXNoIG1hcHMgYXBwbHkgd2lsbCByZXR1cm4gey4uLmRhdGEsXG4gICAgICogLi4uc3RhdGV9IGlmIG5vdCBpdCB3aWxsIHJldHVybiB0aGUgbGFzdCBwcml2YXRlIHN0YXRlXG4gICAgICogQHBhcmFtIGRhdGFcbiAgICAgKiBAcGFyYW0gc3RhdGVcbiAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgKi9cbiAgICBhcHBseSggZGF0YSwgc3RhdGUsIGNoYW5nZXMgKSB7XG4gICAgICAgIHN0YXRlID0gc3RhdGUgfHwgdGhpcy5zdGF0ZTtcbiAgICAgICAgXG4gICAgICAgIGlmICggdGhpcy5yZWZpbmUgKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVmaW5lKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIFxuICAgICAgICBpZiAoICFkYXRhIHx8IGRhdGEuX19wcm90b19fICE9PSBvYmpQcm90byB8fCBzdGF0ZS5fX3Byb3RvX18gIT09IG9ialByb3RvIClcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgcmV0dXJuIHsgLi4uZGF0YSwgLi4uc3RhdGUgfVxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBAZGVwcmVjaWF0ZWRcbiAgICAgKiBAcGFyYW0gZGF0YVxuICAgICAqIEBwYXJhbSBzdGF0ZVxuICAgICAqIEBwYXJhbSBjaGFuZ2VzXG4gICAgICogQHJldHVybnMgeyp9XG4gICAgICovXG4gICAgcmVmaW5lKCBkYXRhLCBzdGF0ZSwgY2hhbmdlcyApIHtcbiAgICAgICAgc3RhdGUgPSBzdGF0ZSB8fCB0aGlzLnN0YXRlO1xuICAgICAgICBcbiAgICAgICAgaWYgKCAhZGF0YSB8fCBkYXRhLl9fcHJvdG9fXyAhPT0gb2JqUHJvdG8gfHwgc3RhdGUuX19wcm90b19fICE9PSBvYmpQcm90byApXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHJldHVybiB7IC4uLmRhdGEsIC4uLnN0YXRlIH1cbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogRGVib3VuY2UgdGhpcyBzdG9yZSBwcm9wYWdhdGlvbiAoICYgcmVkdWNpbmcgKVxuICAgICAqIEBwYXJhbSBjYlxuICAgICAqL1xuICAgIHN0YWJpbGl6ZSggY2IgKSB7XG4gICAgICAgIGNiICYmIHRoaXMub25jZSgnc3RhYmxlJywgY2IpO1xuICAgICAgICB0aGlzLl9zdGFibGUgJiYgdGhpcy5lbWl0KCd1bnN0YWJsZScsIHRoaXMuc3RhdGUsIHRoaXMuZGF0YSk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9zdGFibGUgPSBmYWxzZTtcbiAgICAgICAgXG4gICAgICAgIGlmICggdGhpcy5fc3RhYmlsaXplciApXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9zdGFiaWxpemVyID0gVGFza1NlcXVlbmNlci5wdXNoVGFzayh0aGlzLCAncHVzaFN0YXRlJyk7XG4gICAgfVxuICAgIFxuICAgIHJldHJpZXZlKCBwYXRoLCBpID0gMCwgb2JqID0gdGhpcy5kYXRhICkge1xuICAgICAgICBwYXRoID0gaXMuc3RyaW5nKHBhdGgpID8gcGF0aC5zcGxpdCgnLicpIDogcGF0aDtcbiAgICAgICAgcmV0dXJuICFvYmogfHwgIXBhdGggfHwgIXBhdGgubGVuZ3RoXG4gICAgICAgICAgICAgICA/IG9ialxuICAgICAgICAgICAgICAgOiBwYXRoLmxlbmd0aCA9PSBpICsgMVxuICAgICAgICAgICAgICAgICA/IG9ialsgcGF0aFsgaSBdIF1cbiAgICAgICAgICAgICAgICAgOiB0aGlzLnJldHJpZXZlKHBhdGgsIGkgKyAxLCBvYmpbIHBhdGhbIGkgXSBdKTtcbiAgICB9XG4gICAgXG4gICAgZGlzcGF0Y2goIGFjdGlvbiwgLi4uYXJneiApIHtcbiAgICAgICAgdGhpcy5zY29wZU9iai5kaXNwYXRjaChhY3Rpb24sIC4uLmFyZ3opO1xuICAgIH1cbiAgICBcbiAgICB0cmlnZ2VyKCBhY3Rpb24sIC4uLmFyZ3ogKSB7XG4gICAgICAgIGxldCB7IGFjdGlvbnMgfSA9IHRoaXMuY29uc3RydWN0b3I7XG4gICAgICAgIGlmICggYWN0aW9ucyAmJiBhY3Rpb25zWyBhY3Rpb24gXSApIHtcbiAgICAgICAgICAgIGxldCBucyA9IGFjdGlvbnNbIGFjdGlvbiBdLmNhbGwodGhpcywgLi4uYXJneik7XG4gICAgICAgICAgICBucyAmJiB0aGlzLnNldFN0YXRlKG5zKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBQdWxsIHN0b3JlcyBpbiB0aGUgcHJpdmF0ZSBzdGF0ZVxuICAgICAqIEBwYXJhbSBzdG9yZXMgIHtBcnJheX0gKHBhc3NlZCB0byBTdG9yZTo6bWFwKSBFeCA6IFtcInNlc3Npb25cIixcbiAgICAgKiAgICAgXCJvdGhlck5hbWVkU3RvcmU6a2V5XCIsIG90aGVyU3RvcmUuYXMoXCJvdGhlcktleVwiKV1cbiAgICAgKi9cbiAgICBwdWxsKCBzdG9yZXMsIGRvV2FpdCwgb3JpZ2luICkge1xuICAgICAgICBsZXQgaW5pdGlhbE91dHB1dHMgPSB0aGlzLnNjb3BlT2JqLm1hcCh0aGlzLCBzdG9yZXMpO1xuICAgICAgICBpZiAoIGRvV2FpdCApIHtcbiAgICAgICAgICAgIHRoaXMud2FpdCgpO1xuICAgICAgICAgICAgc3RvcmVzLmZvckVhY2goKCBzICkgPT4gdGhpcy5zY29wZVsgcyBdICYmIHRoaXMud2FpdCh0aGlzLnNjb3BlWyBzIF0pKTtcbiAgICAgICAgICAgIHRoaXMucmVsZWFzZSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpbml0aWFsT3V0cHV0cztcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogU2V0ICYgUHVzaCB0aGUgcmVzdWx0IGRhdGEgdG8gZm9sbG93ZXJzIGlmIHN0YWJsZVxuICAgICAqIEBwYXJhbSBjYlxuICAgICAqL1xuICAgIHB1c2goIGRhdGEsIGZvcmNlLCBjYiApIHtcbiAgICAgICAgY2IgICAgPSBmb3JjZSA9PT0gdHJ1ZSA/IGNiIDogZm9yY2U7XG4gICAgICAgIGZvcmNlID0gZm9yY2UgPT09IHRydWU7XG4gICAgICAgIGlmICggIWZvcmNlICYmXG4gICAgICAgICAgICAgKFxuICAgICAgICAgICAgICAgICAhdGhpcy5oYXNEYXRhQ2hhbmdlKGRhdGEpXG4gICAgICAgICAgICAgKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIGNiICYmIGNiKCk7XG4gICAgICAgICAgICBpZiAoICF0aGlzLl9fbG9ja3MuYWxsICkge1xuICAgICAgICAgICAgICAgIGxldCBzdGFibGUgICA9IHRoaXMuX3N0YWJsZTtcbiAgICAgICAgICAgICAgICB0aGlzLl9zdGFibGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICFzdGFibGUgJiYgdGhpcy5lbWl0KCdzdGFibGUnLCB0aGlzLnN0YXRlLCB0aGlzLmRhdGEpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3N0YWJpbGl6ZXIgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgICAgICB0aGlzLndhaXQoKTtcbiAgICAgICAgdGhpcy5yZWxlYXNlKGNiKTtcbiAgICAgICAgXG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIENhbGwgdGhlIGFwcGx5IGZuIHVzaW5nIHRoZSBjdXJyZW50IGFjY3VtdWxhdGVkIHN0YXRlIHVwZGF0ZSB0aGVuLCBwdXNoIHRoZVxuICAgICAqIHJlc3VsdGluZyBkYXRhIGlmIHN0YWJsZVxuICAgICAqIEBwYXJhbSBmb3JjZVxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIHB1c2hTdGF0ZSggZm9yY2UgKSB7XG4gICAgICAgIFxuICAgICAgICBpZiAoICFmb3JjZSAmJiAhdGhpcy5fY2hhbmdlc1NXICYmIHRoaXMuZGF0YSApXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIFxuICAgICAgICB2YXIgbmV4dFN0YXRlID0gdGhpcy5fbmV4dFN0YXRlIHx8IHsgLi4udGhpcy5zdGF0ZSwgLi4uKCB0aGlzLl9jaGFuZ2VzU1cgfHwge30gKSB9LFxuICAgICAgICAgICAgbmV4dERhdGEgID0gdGhpcy5hcHBseSh0aGlzLmRhdGEsIG5leHRTdGF0ZSwgdGhpcy5fY2hhbmdlc1NXKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX3N0YWJpbGl6ZXIgPSBudWxsO1xuICAgICAgICB0aGlzLnN0YXRlICAgICAgID0gbmV4dFN0YXRlO1xuICAgICAgICB0aGlzLl9jaGFuZ2VzU1cgID0gbnVsbDtcbiAgICAgICAgXG4gICAgICAgIGlmICggIWZvcmNlICYmXG4gICAgICAgICAgICAgKFxuICAgICAgICAgICAgICAgICAhdGhpcy5oYXNEYXRhQ2hhbmdlKG5leHREYXRhKVxuICAgICAgICAgICAgIClcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBpZiAoICF0aGlzLl9fbG9ja3MuYWxsICkge1xuICAgICAgICAgICAgICAgIGxldCBzdGFibGUgICA9IHRoaXMuX3N0YWJsZTtcbiAgICAgICAgICAgICAgICB0aGlzLl9zdGFibGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICFzdGFibGUgJiYgdGhpcy5lbWl0KCdzdGFibGUnLCB0aGlzLnN0YXRlLCB0aGlzLmRhdGEpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3N0YWJpbGl6ZXIgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0aGlzLmRhdGEgPSBuZXh0RGF0YTtcbiAgICAgICAgdGhpcy53YWl0KCk7XG4gICAgICAgIHRoaXMucmVsZWFzZSgpO1xuICAgICAgICBcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogQWRkICdwU3RhdGUnIHRvIHRoZSBjdXJyZW50IGFjY3VtdWxhdGVkIHN0YXRlIHVwZGF0ZXNcbiAgICAgKiAmIHdhaXQgc291cmNlIHN0b3JlcyBzdGFiaWxpemF0aW9uIGJlZm9yZSBwdXNoaW5nIHRoZXNlIHN0YXRlIHVwZGF0ZXNcbiAgICAgKiBAcGFyYW0gcFN0YXRlXG4gICAgICogQHBhcmFtIGNiXG4gICAgICovXG4gICAgc2V0U3RhdGUoIHBTdGF0ZSwgY2IsIHN5bmMgKSB7XG4gICAgICAgIHZhciBpICAgICAgID0gMCwgY2hhbmdlLFxuICAgICAgICAgICAgY2hhbmdlcyA9IHRoaXMuX2NoYW5nZXNTVyA9IHRoaXMuX2NoYW5nZXNTVyB8fCB7fTtcbiAgICAgICAgZm9yICggdmFyIGsgaW4gcFN0YXRlIClcbiAgICAgICAgICAgIGlmICggIXRoaXMuc3RhdGVcbiAgICAgICAgICAgICAgICAgfHwgY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eShrKS8vIHRvZG9cbiAgICAgICAgICAgICAgICAgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgcFN0YXRlWyBrIF0gIT09IGNoYW5nZXNbIGsgXVxuICAgICAgICAgICAgICAgICApIHx8IHBTdGF0ZS5oYXNPd25Qcm9wZXJ0eShrKVxuICAgICAgICAgICAgICAgICAmJiAoXG4gICAgICAgICAgICAgICAgIHBTdGF0ZVsgayBdICE9PSB0aGlzLnN0YXRlWyBrIF1cbiAgICAgICAgICAgICAgICAgfHxcbiAgICAgICAgICAgICAgICAgKCB0aGlzLnN0YXRlWyBrIF0gJiYgcFN0YXRlWyBrIF0gJiYgKCBwU3RhdGVbIGsgXS5fcmV2ICE9IHRoaXMuX3JldnNbIGsgXSApICkvLyByZXYvaGFzaCB1cGRhdGVcbiAgICAgICAgICAgICAgICAgKSApIHtcbiAgICAgICAgICAgICAgICBjaGFuZ2UgICAgICAgICAgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuX3JldnNbIGsgXSA9IHBTdGF0ZVsgayBdICYmIHBTdGF0ZVsgayBdLl9yZXYgfHwgdHJ1ZTtcbiAgICAgICAgICAgICAgICBjaGFuZ2VzWyBrIF0gICAgPSBwU3RhdGVbIGsgXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRoaXMuX25leHRTdGF0ZSA9IHsgLi4udGhpcy5zdGF0ZSwgLi4uY2hhbmdlcyB9O1xuICAgICAgICBpZiAoICF0aGlzLnNob3VsZEFwcGx5KHRoaXMuX25leHRTdGF0ZSkgKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmICggc3luYyApIHtcbiAgICAgICAgICAgIHRoaXMucHVzaFN0YXRlKCk7XG4gICAgICAgICAgICBjYiAmJiBjYigpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKCBjaGFuZ2UgKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGFiaWxpemUoY2IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBjYiAmJiBjYigpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBVcGRhdGUgdGhlIGN1cnJlbnQgc3RhdGUgJiBwdXNoIGl0XG4gICAgICogQHBhcmFtIHBTdGF0ZVxuICAgICAqIEBwYXJhbSBjYlxuICAgICAqL1xuICAgIHNldFN0YXRlU3luYyggcFN0YXRlICkge1xuICAgICAgICB2YXIgaSAgICAgICA9IDAsIGNoYW5nZSxcbiAgICAgICAgICAgIGNoYW5nZXMgPSB0aGlzLl9jaGFuZ2VzU1cgPSB0aGlzLl9jaGFuZ2VzU1cgfHwge307XG4gICAgICAgIGZvciAoIHZhciBrIGluIHBTdGF0ZSApXG4gICAgICAgICAgICBpZiAoICF0aGlzLnN0YXRlIHx8IHBTdGF0ZS5oYXNPd25Qcm9wZXJ0eShrKVxuICAgICAgICAgICAgICAgICAmJiAoXG4gICAgICAgICAgICAgICAgIHBTdGF0ZVsgayBdICE9IHRoaXMuc3RhdGVbIGsgXVxuICAgICAgICAgICAgICAgICB8fFxuICAgICAgICAgICAgICAgICAoIHRoaXMuc3RhdGVbIGsgXSAmJiBwU3RhdGVbIGsgXSAmJiAoIHBTdGF0ZVsgayBdLl9yZXYgIT0gdGhpcy5fcmV2c1sgayBdICkgKS8vIHJldi9oYXNoIHVwZGF0ZVxuICAgICAgICAgICAgICAgICApICkge1xuICAgICAgICAgICAgICAgIGNoYW5nZSAgICAgICAgICA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5fcmV2c1sgayBdID0gcFN0YXRlWyBrIF0gJiYgcFN0YXRlWyBrIF0uX3JldiB8fCB0cnVlO1xuICAgICAgICAgICAgICAgIGNoYW5nZXNbIGsgXSAgICA9IHBTdGF0ZVsgayBdO1xuICAgICAgICAgICAgfVxuICAgICAgICB0aGlzLnNob3VsZEFwcGx5KHsgLi4uKCB0aGlzLnN0YXRlIHx8IHt9ICksIC4uLmNoYW5nZXMgfSkgJiYgdGhpcy5wdXNoU3RhdGUoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogZ2V0IGEgc3RvcmUta2V5IHBhaXIgZm9yIFN0b3JlOjptYXBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgICAqIEByZXR1cm5zIHt7c3RvcmU6IFN0b3JlLCBuYW1lOiAqfX1cbiAgICAgKi9cbiAgICBhcyggbmFtZSApIHtcbiAgICAgICAgcmV0dXJuIHsgc3RvcmU6IHRoaXMsIG5hbWUgfTtcbiAgICB9XG4gICAgXG4gICAgb24oIGxpc3RzICkge1xuICAgICAgICBpZiAoICFpcy5zdHJpbmcobGlzdHMpICYmIGxpc3RzIClcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGxpc3RzKS5mb3JFYWNoKGsgPT4gc3VwZXIub24oaywgbGlzdHNbIGsgXSkpO1xuICAgICAgICBlbHNlIHN1cGVyLm9uKC4uLmFyZ3VtZW50cyk7XG4gICAgfVxuICAgIFxuICAgIHJlbW92ZUxpc3RlbmVyKCBsaXN0cyApIHtcbiAgICAgICAgaWYgKCAhaXMuc3RyaW5nKGxpc3RzKSAmJiBsaXN0cyApXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhsaXN0cykuZm9yRWFjaChrID0+IHN1cGVyLnJlbW92ZUxpc3RlbmVyKGssIGxpc3RzWyBrIF0pKTtcbiAgICAgICAgZWxzZSBzdXBlci5yZW1vdmVMaXN0ZW5lciguLi5hcmd1bWVudHMpO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBpcyBjb21wbGV0ZSAoYWxsIHJlcXVpZXJlZCBrZXlzIGFyZSBoZXJlKVxuICAgICAqIEByZXR1cm5zIGJvb2xcbiAgICAgKi9cbiAgICBpc0NvbXBsZXRlKCBzdGF0ZSA9IHRoaXMuc3RhdGUgKSB7XG4gICAgICAgIHZhciBfc3RhdGljID0gdGhpcy5jb25zdHJ1Y3RvcjtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICF0aGlzLl9yZXF1aXJlXG4gICAgICAgICAgICB8fCAhdGhpcy5fcmVxdWlyZS5sZW5ndGhcbiAgICAgICAgICAgIHx8IHN0YXRlICYmIHRoaXMuX3JlcXVpcmUucmVkdWNlKFxuICAgICAgICAgICAgICAgICggciwga2V5ICkgPT4gKCByICYmIHN0YXRlWyBrZXkgXSApLFxuICAgICAgICAgICAgICAgIHRydWVcbiAgICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogaXMgc3RhYmxlXG4gICAgICogQHJldHVybnMgYm9vbFxuICAgICAqL1xuICAgIGlzU3RhYmxlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc3RhYmxlO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBTZXJpYWxpemUgc3RhdGUgJiBkYXRhIHdpdGggc291cmNlcyByZWZzXG4gICAgICogQHJldHVybnMgYm9vbFxuICAgICAqL1xuICAgIHNlcmlhbGl6ZSggY2ZnID0ge30sIG91dHB1dCA9IHt9ICkge1xuICAgICAgICBsZXQgcmVmcyA9XG4gICAgICAgICAgICAgICAgIWNmZy5ub3JlZnMgJiYgaXMuYXJyYXkodGhpcy5fdXNlKSAmJiB0aGlzLl91c2UucmVkdWNlKFxuICAgICAgICAgICAgICAgICggbWFwLCBrZXkgKSA9PiB7Ly90b2RvXG4gICAgICAgICAgICAgICAgICAgIGxldCBuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpYXMsIHBhdGgsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9yZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBrZXkuc3RvcmUgJiYga2V5Lm5hbWUgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlhcyA9IG5hbWUgPSBrZXkubmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlID0gdGhpcy5zY29wZU9iai5zdG9yZXNbIG5hbWUgXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICggaXMuZm4oa2V5KSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUgPSBhbGlhcyA9IGtleS5uYW1lIHx8IGtleS5kZWZhdWx0TmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlID0gdGhpcy5zY29wZU9iai5zdG9yZXNbIG5hbWUgXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleSAgID0ga2V5Lm1hdGNoKC8oW1xcd19dKykoKD86XFwuW1xcd19dKykqKSg/OlxcOihbXFx3X10rKSk/Lyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lICA9IGtleVsgMSBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aCAgPSBuYW1lICsga2V5WyAyIF07XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlhcyA9IGtleVsgMyBdIHx8IHBhdGggJiYgcGF0aC5tYXRjaCgvKFteXFwuXSopJC8pWyAwIF0gfHwga2V5WyAxIF07XG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9yZSA9IHRoaXMuc2NvcGVPYmoucmV0cmlldmVTdG9yZShwYXRoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoIHN0b3JlICYmICFzdG9yZS5zY29wZU9iai5fLmlzTG9jYWxJZCApXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXBbIGFsaWFzIF0gPSBzdG9yZS5zY29wZU9iai5faWQgKyAnLycgKyBuYW1lO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWFwO1xuICAgICAgICAgICAgICAgIH0sIHt9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB8fCB7fTtcbiAgICAgICAgXG4gICAgICAgIGtleVdhbGtuU2V0KFxuICAgICAgICAgICAgb3V0cHV0LFxuICAgICAgICAgICAgKCB0aGlzLnNjb3BlT2JqLl9pZCArICcvJyArIHRoaXMubmFtZSApLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRlOiB0aGlzLnN0YXRlICYmXG4gICAgICAgICAgICAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNmZy5ub3JlZnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgID8geyAuLi50aGlzLnN0YXRlIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDogT2JqZWN0LmtleXModGhpcy5zdGF0ZSkucmVkdWNlKCggaCwgayApID0+ICggIXJlZnNbIGsgXSAmJiAoIGhbIGsgXSA9IHRoaXMuc3RhdGVbIGsgXSApLCBoICksIHt9KVxuICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIGRhdGEgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGEgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5fX3Byb3RvX18gPT09IG9ialByb3RvID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAoIGlzLmJvb2wodGhpcy5kYXRhKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8fCBpcy5udW1iZXIodGhpcy5kYXRhKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8fCBpcy5zdHJpbmcodGhpcy5kYXRhKSApICYmIHRoaXMuZGF0YVxuICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgIHx8IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICxcbiAgICAgICAgICAgICAgICByZWZzXG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIHJlc3RvcmUgc3RhdGUgJiBkYXRhXG4gICAgICogQHJldHVybnMgYm9vbFxuICAgICAqL1xuICAgIHJlc3RvcmUoIHNuYXBzaG90LCBpbW1lZGlhdGUgKSB7XG4gICAgICAgIHNuYXBzaG90ID0gc25hcHNob3RcbiAgICAgICAgICAgICAgICAgICAmJiBrZXlXYWxrbkdldChzbmFwc2hvdCwgdGhpcy5zY29wZU9iai5faWQgKyAnLycgKyB0aGlzLm5hbWUpXG4gICAgICAgICAgICAgICAgICAgfHwgdGhpcy4kc2NvcGUudGFrZVNuYXBzaG90QnlLZXkodGhpcy5zY29wZU9iai5faWQgKyAnLycgKyB0aGlzLm5hbWUpO1xuICAgICAgICBcbiAgICAgICAgaWYgKCAhc25hcHNob3QgKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBcbiAgICAgICAgaWYgKCBzbmFwc2hvdCApIHtcbiAgICAgICAgICAgIGlmICggIXRoaXMuaXNTdGFibGUoKSAmJiAhaW1tZWRpYXRlIClcbiAgICAgICAgICAgICAgICB0aGlzLnRoZW4oKCkgPT4gcmVzdG9yZShzbmFwc2hvdCkpXG4gICAgICAgICAgICBsZXQgc25hcDtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSB7IC4uLnNuYXBzaG90LnN0YXRlIH07XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhzbmFwc2hvdC5yZWZzKS5mb3JFYWNoKFxuICAgICAgICAgICAgICAgICgga2V5ICkgPT4gey8vdG9kb1xuICAgICAgICAgICAgICAgICAgICBpZiAoIHNuYXAgPSB0aGlzLiRzY29wZS5nZXRTbmFwc2hvdEJ5S2V5KHNuYXBzaG90LnJlZnNbIGtleSBdKSApXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlWyBrZXkgXSA9IHNuYXAuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdub3QgZm91bmQgOiAnLCBrZXksIHNuYXAucmVmc1sga2V5IF0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLmRhdGEgPSBzbmFwc2hvdC5kYXRhO1xuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogVW4gYmluZCB0aGlzIHN0b3JlIG9mZiB0aGUgZ2l2ZW4gY29tcG9uZW50LWtleVxuICAgICAqIEBwYXJhbSBvYmpcbiAgICAgKiBAcGFyYW0ga2V5XG4gICAgICogQHJldHVybnMge0FycmF5LjwqPn1cbiAgICAgKi9cbiAgICB1bkJpbmQoIG9iaiwga2V5LCBwYXRoICkge1xuICAgICAgICB2YXIgZm9sbG93ZXJzID0gdGhpcy5fZm9sbG93ZXJzLFxuICAgICAgICAgICAgaSAgICAgICAgID0gZm9sbG93ZXJzICYmIGZvbGxvd2Vycy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggZm9sbG93ZXJzICYmIGktLSApXG4gICAgICAgICAgICBpZiAoIGZvbGxvd2Vyc1sgaSBdWyAwIF0gPT09IG9iaiAmJiBmb2xsb3dlcnNbIGkgXVsgMSBdID09PSBrZXkgJiYgZm9sbG93ZXJzWyBpIF1bIDIgXSA9PT0gcGF0aCApXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZvbGxvd2Vycy5zcGxpY2UoaSwgMSk7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIEJpbmQgdGhpcyBzdG9yZSBjaGFuZ2VzIHRvIHRoZSBnaXZlbiBjb21wb25lbnQta2V5XG4gICAgICogQHBhcmFtIG9iaiB7UmVhY3QuQ29tcG9uZW50fFN0b3JlfGZ1bmN0aW9uKVxuICAgICAqIEBwYXJhbSBrZXkge3N0cmluZ30gb3B0aW9uYWwga2V5IHdoZXJlIHRvIG1hcCB0aGUgcHVibGljIHN0YXRlXG4gICAgICovXG4gICAgYmluZCggb2JqLCBrZXksIHNldEluaXRpYWwgPSB0cnVlLCBwYXRoICkge1xuICAgICAgICB0aGlzLl9mb2xsb3dlcnMucHVzaChbIG9iaiwga2V5LCBwYXRoIF0pO1xuICAgICAgICBpZiAoIHNldEluaXRpYWwgJiYgdGhpcy5kYXRhICYmIHRoaXMuX3N0YWJsZSApIHtcbiAgICAgICAgICAgIGxldCBkYXRhID0gcGF0aCA/IHRoaXMucmV0cmlldmUocGF0aCkgOiB0aGlzLmRhdGE7XG4gICAgICAgICAgICBpZiAoIHR5cGVvZiBvYmogIT0gXCJmdW5jdGlvblwiICkge1xuICAgICAgICAgICAgICAgIGlmICgga2V5ICkgb2JqLnNldFN0YXRlKHsgWyBrZXkgXTogZGF0YSB9KTtcbiAgICAgICAgICAgICAgICBlbHNlIG9iai5zZXRTdGF0ZShkYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIG9iaihkYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBvbmNlKCdzdGFibGUnLCBjYilcbiAgICAgKiBAcGFyYW0gb2JqIHtSZWFjdC5Db21wb25lbnR8U3RvcmV8ZnVuY3Rpb24pXG4gICAgICogQHBhcmFtIGtleSB7c3RyaW5nfSBvcHRpb25hbCBrZXkgd2hlcmUgdG8gbWFwIHRoZSBwdWJsaWMgc3RhdGVcbiAgICAgKi9cbiAgICB0aGVuKCBjYiApIHtcbiAgICAgICAgaWYgKCB0aGlzLl9zdGFibGUgKVxuICAgICAgICAgICAgcmV0dXJuIGNiKHRoaXMuZGF0YSk7XG4gICAgICAgIHRoaXMub25jZSgnc3RhYmxlJywgZSA9PiBjYih0aGlzLmRhdGEpKTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogQWRkIGEgbG9jayBzbyB0aGUgc3RvcmUgd2lsbCBub3QgcHJvcGFnIGl0IGRhdGEgdW50aWxsIHJlbGVhc2UoKSBpcyBjYWxsXG4gICAgICogQHBhcmFtIHByZXZpb3VzIHtTdG9yZXxudW1iZXJ8QXJyYXl9IEBvcHRpb25hbCB3ZiB0byB3YWl0LCByZWxlYXNlcyB0byB3YWl0IG9yXG4gICAgICogICAgIGFycmF5IG9mIHN0dWZmIHRvIHdhaXRcbiAgICAgKiBAcmV0dXJucyB7dGhpc31cbiAgICAgKi9cbiAgICB3YWl0KCBwcmV2aW91cyApIHtcbiAgICAgICAgaWYgKCB0eXBlb2YgcHJldmlvdXMgPT0gXCJudW1iZXJcIiApXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fX2xvY2tzLmFsbCArPSBwcmV2aW91cztcbiAgICAgICAgaWYgKCBpcy5hcnJheShwcmV2aW91cykgKVxuICAgICAgICAgICAgcmV0dXJuIHByZXZpb3VzLm1hcCh0aGlzLndhaXQuYmluZCh0aGlzKSk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9zdGFibGUgJiYgdGhpcy5lbWl0KCd1bnN0YWJsZScsIHRoaXMuc3RhdGUsIHRoaXMuZGF0YSk7XG4gICAgICAgIHRoaXMuX3N0YWJsZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9fbG9ja3MuYWxsKys7XG4gICAgICAgIFxuICAgICAgICBsZXQgcmVhc29uID0gaXMuc3RyaW5nKHByZXZpb3VzKSA/IHByZXZpb3VzIDogbnVsbDtcbiAgICAgICAgaWYgKCByZWFzb24gKSB7XG4gICAgICAgICAgICB0aGlzLl9fbG9ja3NbIHJlYXNvbiBdID0gdGhpcy5fX2xvY2tzWyByZWFzb24gXSB8fCAwO1xuICAgICAgICAgICAgdGhpcy5fX2xvY2tzWyByZWFzb24gXSsrO1xuICAgICAgICB9XG4gICAgICAgIGlmICggcHJldmlvdXMgJiYgaXMuZm4ocHJldmlvdXMudGhlbikgKSB7XG4gICAgICAgICAgICBwcmV2aW91cy50aGVuKHRoaXMucmVsZWFzZS5iaW5kKHRoaXMsIG51bGwpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogRGVjcmVhc2UgbG9ja3MgZm9yIHRoaXMgc3RvcmUsIGlmIGl0IHJlYWNoIDAgLFxuICAgICAqIGl0IHdpbGwgYmUgcHJvcGFnYXRlZCB0byB0aGUgZm9sbG93ZXJzLFxuICAgICAqIHRoZW4sIGFsbCBzdHVmZiBwYXNzZWQgdG8gXCJ0aGVuXCIgY2FsbCBiYWNrIHdpbGwgYmUgZXhlYyAvIHJlbGVhc2VkXG4gICAgICogQHBhcmFtIGRlc3luY1xuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqL1xuICAgIHJlbGVhc2UoIHJlYXNvbiwgY2IgKSB7XG4gICAgICAgIHZhciBfc3RhdGljID0gdGhpcy5jb25zdHJ1Y3RvciwgbWUgPSB0aGlzO1xuICAgICAgICBsZXQgaSAgICAgICA9IDAsIHdhc1N0YWJsZSA9IHRoaXMuX3N0YWJsZTtcbiAgICAgICAgXG4gICAgICAgIGlmICggaXMuZm4ocmVhc29uKSApIHtcbiAgICAgICAgICAgIGNiICAgICA9IHJlYXNvbjtcbiAgICAgICAgICAgIHJlYXNvbiA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmICggcmVhc29uICkge1xuICAgICAgICAgICAgaWYgKCB0aGlzLl9fbG9ja3NbIHJlYXNvbiBdID09IDAgKVxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJSZWxlYXNlIG1vcmUgdGhhbiBsb2NraW5nICFcIiwgcmVhc29uKTtcbiAgICAgICAgICAgIHRoaXMuX19sb2Nrc1sgcmVhc29uIF0gPSB0aGlzLl9fbG9ja3NbIHJlYXNvbiBdIHx8IDA7XG4gICAgICAgICAgICB0aGlzLl9fbG9ja3NbIHJlYXNvbiBdLS07XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmICggIXJlYXNvbiAmJiB0aGlzLl9fbG9ja3MuYWxsID09IDAgKVxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlJlbGVhc2UgbW9yZSB0aGFuIGxvY2tpbmcgIVwiKTtcbiAgICAgICAgXG4gICAgICAgIGlmICggIS0tdGhpcy5fX2xvY2tzLmFsbCAmJiB0aGlzLmlzQ29tcGxldGUoKSApIHtcbiAgICAgICAgICAgIGxldCBwcm9wYWcgICA9IHRoaXMuc2hvdWxkUHJvcGFnKHRoaXMuZGF0YSk7XG4gICAgICAgICAgICB0aGlzLl9zdGFibGUgPSB0cnVlO1xuICAgICAgICAgICAgcHJvcGFnICYmIHRoaXMuX3JldisrOy8vXG4gICAgICAgICAgICBpZiAoIHByb3BhZyAmJiB0aGlzLl9mb2xsb3dlcnMubGVuZ3RoIClcbiAgICAgICAgICAgICAgICB0aGlzLl9mb2xsb3dlcnMuZm9yRWFjaChmdW5jdGlvbiBwcm9wYWcoIGZvbGxvd2VyICkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IGZvbGxvd2VyWyAyIF0gPyBtZS5yZXRyaWV2ZShmb2xsb3dlclsgMiBdKSA6IG1lLmRhdGE7XG4gICAgICAgICAgICAgICAgICAgIC8vaWYgKCAhZGF0YSApIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGlmICggdHlwZW9mIGZvbGxvd2VyWyAwIF0gPT0gXCJmdW5jdGlvblwiICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9sbG93ZXJbIDAgXShkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY2IgJiYgaSsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9sbG93ZXJbIDAgXS5zZXRTdGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoIGZvbGxvd2VyWyAxIF0gKSA/IHsgWyBmb2xsb3dlclsgMSBdIF06IGRhdGEgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogZGF0YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vY2IgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICgpID0+ICghKC0taSkgJiYgY2IoKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLylcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vZWxzZVxuICAgICAgICAgICAgIXdhc1N0YWJsZSAmJiB0aGlzLmVtaXQoJ3N0YWJsZScsIHRoaXMuZGF0YSk7XG4gICAgICAgICAgICBwcm9wYWcgJiYgdGhpcy5lbWl0KCd1cGRhdGUnLCB0aGlzLmRhdGEpO1xuICAgICAgICAgICAgY2IgJiYgY2IoKVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgY2IgJiYgdGhpcy50aGVuKGNiKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIFxuICAgIHByb3BhZyggZGF0YSApIHtcbiAgICAgICAgdGhpcy5lbWl0KCd1cGRhdGUnLCBkYXRhKTtcbiAgICB9XG4gICAgXG4gICAgcmV0YWluKCByZWFzb24gKSB7XG4gICAgICAgIHRoaXMuX19yZXRhaW5zLmFsbCsrO1xuICAgICAgICBpZiAoIHJlYXNvbiApIHtcbiAgICAgICAgICAgIHRoaXMuX19yZXRhaW5zWyByZWFzb24gXSA9IHRoaXMuX19yZXRhaW5zWyByZWFzb24gXSB8fCAwO1xuICAgICAgICAgICAgdGhpcy5fX3JldGFpbnNbIHJlYXNvbiBdKys7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgZGlzcG9zZSggcmVhc29uICkge1xuICAgICAgICAvL2NvbnNvbGUud2FybihcImRpc3Bvc2VcIiwgcmVhc29uLCB0aGlzLl9fcmV0YWlucyk7XG4gICAgICAgIGlmICggcmVhc29uICkge1xuICAgICAgICAgICAgaWYgKCAhdGhpcy5fX3JldGFpbnNbIHJlYXNvbiBdIClcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJEaXNwb3NlIG1vcmUgdGhhbiByZXRhaW5pbmcgOiBcIiArIHJlYXNvbik7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMuX19yZXRhaW5zWyByZWFzb24gXS0tO1xuICAgICAgICB9XG4gICAgICAgIGlmICggdGhpcy5fX3JldGFpbnMuYWxsID09IDAgKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRGlzcG9zZSBtb3JlIHRoYW4gcmV0YWluaW5nICFcIik7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9fcmV0YWlucy5hbGwtLTtcbiAgICAgICAgXG4gICAgICAgIGlmICggIXRoaXMuX19yZXRhaW5zLmFsbCApIHtcbiAgICAgICAgICAgIGlmICggdGhpcy5fcGVyc2lzdGVuY2VUbSApIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9kZXN0cm95VE0gJiYgY2xlYXJUaW1lb3V0KHRoaXMuX2Rlc3Ryb3lUTSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fZGVzdHJveVRNID0gc2V0VGltZW91dChcbiAgICAgICAgICAgICAgICAgICAgZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9kZXN0cm95VE0gPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy90aGlzLnRoZW4ocyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAhdGhpcy5fX3JldGFpbnMuYWxsICYmICF0aGlzLmRlYWQgJiYgdGhpcy5kZXN0cm95KClcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vfSk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3BlcnNpc3RlbmNlVG1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy90aGlzLnRoZW4ocyA9PlxuICAgICAgICAgICAgICAgICggIXRoaXMuX19yZXRhaW5zLmFsbCAmJiAhdGhpcy5kZWFkICYmIHRoaXMuZGVzdHJveSgpIClcbiAgICAgICAgICAgICAgICAvLyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgLy8gIGNvbnNvbGUubG9nKFwiZGVzdHJveVwiLCB0aGlzLl91aWQpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5lbWl0KCdkZXN0cm95JywgdGhpcyk7XG4gICAgICAgIGlmICggdGhpcy5fc3RhYmlsaXplciApXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5fc3RhYmlsaXplcik7XG4gICAgICAgIFxuICAgICAgICBpZiAoIHRoaXMuX2ZvbGxvd2Vycy5sZW5ndGggKVxuICAgICAgICAgICAgdGhpcy5fZm9sbG93ZXJzLmZvckVhY2goXG4gICAgICAgICAgICAgICAgKCBmb2xsb3dlciApID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCB0eXBlb2YgZm9sbG93ZXJbIDAgXSAhPT0gXCJmdW5jdGlvblwiICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBmb2xsb3dlclsgMCBdLnN0b3JlcyApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGZvbGxvd2VyWyAwIF0uc3RvcmVzWyBmb2xsb3dlclsgMSBdIF07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICB0aGlzLl9mb2xsb3dlcnMubGVuZ3RoID0gMDtcbiAgICAgICAgdGhpcy5jb25zdHJ1Y3Rvci5fcmV2ICA9IHRoaXMucmV2O1xuICAgICAgICB0aGlzLmRlYWQgICAgICAgICAgICAgID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fcmV2cyAgICAgICAgICAgICA9IHRoaXMuZGF0YSA9IHRoaXMuc3RhdGUgPSB0aGlzLnNjb3BlID0gbnVsbDtcbiAgICAgICAgdGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoKTtcbiAgICB9XG59XG5cbi8qKlxuICogZ2V0IGEgc3RhdGljIGFsaWFzZWQgcmVmZXJlbmNlIG9mIGEgc3RvcmVcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKiBAcmV0dXJucyB7e3N0b3JlOiBTdG9yZSwgbmFtZTogKn19XG4gKi9cblN0b3JlLmFzID0gZnVuY3Rpb24gKCBuYW1lICkge1xuICAgIHJldHVybiB7IHN0b3JlOiB0aGlzLCBuYW1lIH07XG59XG5cbi8qKlxuICogTWFwIGFsbCBuYW1lZCBzdG9yZXMgaW4ge2tleXN9IHRvIHRoZSB7b2JqZWN0fSdzIHN0YXRlXG4gKiBIb29rIGNvbXBvbmVudFdpbGxVbm1vdW50IChmb3IgcmVhY3QgY29tcCkgb3IgZGVzdHJveSB0byB1bkJpbmQgdGhlbSBhdXRvbWF0aWNhbGx5XG4gKiBAc3RhdGljXG4gKiBAcGFyYW0gb2JqZWN0IHtPYmplY3R9IHRhcmdldCBzdGF0ZSBhd2FyZSBvYmplY3QgKFJlYWN0LkNvbXBvbmVudHxTdG9yZXwuLi4pXG4gKiBAcGFyYW0ga2V5cyB7QXJyYXl9IEV4IDogW1wic2Vzc2lvblwiLCBcIm90aGVyU3RhdGljTmFtZWRTdG9yZTprZXlcIixcbiAqICAgICBzdG9yZS5hcygnYW5vdGhlcktleScpXVxuICovXG5TdG9yZS5tYXAgPSBmdW5jdGlvbiAoIGNTdG9yZSwga2V5cywgc2NvcGUsIG9yaWdpbiwgc2V0SW5pdGlhbCA9IGZhbHNlICkge1xuICAgIHZhciB0YXJnZXRSZXZzICAgICA9IGNTdG9yZS5fcmV2cyB8fCB7fTtcbiAgICB2YXIgdGFyZ2V0U2NvcGUgICAgPSBjU3RvcmUuc3RvcmVzIHx8ICggY1N0b3JlLnN0b3JlcyA9IHt9ICk7XG4gICAgdmFyIGluaXRpYWxPdXRwdXRzID0ge307XG4gICAga2V5cyAgICAgICAgICAgICAgID0gaXMuYXJyYXkoa2V5cykgPyBbIC4uLmtleXMgXSA6IFsga2V5cyBdO1xuICAgIFxuICAgIFxuICAgIHNjb3BlID0gc2NvcGUgfHwgU3RvcmUuc3RhdGljU2NvcGU7XG4gICAgXG4gICAga2V5cyA9IGtleXMuZmlsdGVyKFxuICAgICAgICAvLyBAdG9kbyA6IHVzZSBxdWVyeSByZWZzXG4gICAgICAgIC8vIChzdG9yZSkoXFwuc3RvcmUpKihcXFsoXFwqfChwcm9wcylcXHcrKSspXFxdKT8oXFw6YWxpYXMpXG4gICAgICAgICgga2V5ICkgPT4ge1xuICAgICAgICAgICAgaWYgKCAha2V5ICkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJOb3QgYSBtYXBwYWJsZSBzdG9yZSBpdGVtICdcIiArIGtleSArIFwiJyBpbiBcIiArIG9yaWdpbiArICcgISEnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgbmFtZSxcbiAgICAgICAgICAgICAgICBhbGlhcyxcbiAgICAgICAgICAgICAgICBwYXRoLFxuICAgICAgICAgICAgICAgIHN0b3JlLCBfa2V5O1xuICAgICAgICAgICAgaWYgKCBrZXkuc3RvcmUgJiYga2V5Lm5hbWUgKSB7XG4gICAgICAgICAgICAgICAgYWxpYXMgPSBuYW1lID0ga2V5Lm5hbWU7XG4gICAgICAgICAgICAgICAgc3RvcmUgPSBrZXkuc3RvcmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICggaXMuZm4oa2V5KSApIHtcbiAgICAgICAgICAgICAgICBuYW1lID0gYWxpYXMgPSBrZXkubmFtZSB8fCBrZXkuZGVmYXVsdE5hbWU7XG4gICAgICAgICAgICAgICAgc3RvcmUgPSBrZXk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBfa2V5ICA9IGtleS5tYXRjaCgvKFtcXHdfXSspKCg/OlxcLltcXHdfXSspKikoPzpcXDooW1xcd19dKykpPy8pO1xuICAgICAgICAgICAgICAgIG5hbWUgID0gX2tleVsgMSBdO1xuICAgICAgICAgICAgICAgIHBhdGggID0gX2tleVsgMiBdICYmIF9rZXlbIDIgXS5zdWJzdHIoMSk7XG4gICAgICAgICAgICAgICAgc3RvcmUgPSBzY29wZS5zdG9yZXNbIF9rZXlbIDEgXSBdO1xuICAgICAgICAgICAgICAgIGFsaWFzID0gX2tleVsgMyBdIHx8IHBhdGggJiYgcGF0aC5tYXRjaCgvKFteXFwuXSopJC8pWyAwIF0gfHwgX2tleVsgMSBdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCAhc3RvcmUgKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIk5vdCBhIG1hcHBhYmxlIHN0b3JlIGl0ZW0gJ1wiICsgbmFtZSArIFwiL1wiICsgYWxpYXMgKyBcIicgaW4gXCIgKyAoIGNTdG9yZS5uYW1lIHx8IGNTdG9yZSApICsgJyAhIScsIHN0b3JlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIGlzLnJzU2NvcGUoc3RvcmUucHJvdG90eXBlKSApIHNjb3BlLl9tb3VudChuYW1lKTtcbiAgICAgICAgICAgIGlmICggaXMucnNTY29wZShzdG9yZSkgKSB7XG4gICAgICAgICAgICAgICAgc3RvcmUgPSBzY29wZS5fbW91bnQoa2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKCB0YXJnZXRSZXZzWyBuYW1lIF0gKSByZXR1cm4gZmFsc2U7Ly8gaWdub3JlIGRibCB1c2VzIGZvciBub3dcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoIGlzLmZuKHN0b3JlKSApIHtcbiAgICAgICAgICAgICAgICBzY29wZS5fbW91bnQobmFtZSlcbiAgICAgICAgICAgICAgICBzY29wZS5zdG9yZXNbIG5hbWUgXS5iaW5kKGNTdG9yZSwgYWxpYXMsIHNldEluaXRpYWwsIHBhdGgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgc3RvcmUuYmluZChjU3RvcmUsIGFsaWFzLCBzZXRJbml0aWFsLCBwYXRoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gZ2l2ZSBpbml0aWFsIHN0b3JlIHdlaWdodCBiYXNpbmcgc291cmNlc1xuICAgICAgICAgICAgc2NvcGUuc3RvcmVzWyBuYW1lIF0uX3NvdXJjZXMgJiYgY1N0b3JlLl9zb3VyY2VzLnB1c2goLi4uc2NvcGUuc3RvcmVzWyBuYW1lIF0uX3NvdXJjZXMpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB0YXJnZXRSZXZzWyBhbGlhcyBdID0gdGFyZ2V0UmV2c1sgYWxpYXMgXSB8fCB0cnVlO1xuICAgICAgICAgICAgIXRhcmdldFNjb3BlWyBuYW1lIF0gJiYgKCB0YXJnZXRTY29wZVsgbmFtZSBdID0gc2NvcGUuc3RvcmVzWyBuYW1lIF0gKTtcbiAgICAgICAgICAgIGlmICggc2NvcGUuc3RvcmVzWyBuYW1lIF0uaGFzT3duUHJvcGVydHkoJ2RhdGEnKSApXG4gICAgICAgICAgICAgICAgaW5pdGlhbE91dHB1dHNbIG5hbWUgXSA9IHNjb3BlLmRhdGFbIG5hbWUgXTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgKTtcbiAgICBcbiAgICAvLyAuLi4gQHRvZG9cbiAgICBjU3RvcmUub25jZSgnZGVzdHJveScsICggLi4uYXJneiApID0+IHtcbiAgICAgICAga2V5cy5tYXAoXG4gICAgICAgICAgICAoIGtleSApID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgYWxpYXMsIHBhdGgsXG4gICAgICAgICAgICAgICAgICAgIHN0b3JlO1xuICAgICAgICAgICAgICAgIGlmICgga2V5LnN0b3JlICYmIGtleS5uYW1lICkge1xuICAgICAgICAgICAgICAgICAgICBhbGlhcyA9IG5hbWUgPSBrZXkubmFtZTtcbiAgICAgICAgICAgICAgICAgICAgc3RvcmUgPSBrZXkuc3RvcmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKCBpcy5mbihrZXkpICkge1xuICAgICAgICAgICAgICAgICAgICBuYW1lID0gYWxpYXMgPSBrZXkubmFtZSB8fCBrZXkuZGVmYXVsdE5hbWU7XG4gICAgICAgICAgICAgICAgICAgIHN0b3JlID0gc2NvcGUuc3RvcmVzWyBuYW1lIF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBrZXkgICA9IGtleS5tYXRjaCgvKFtcXHdfXSspKCg/OlxcLltcXHdfXSspKikoPzpcXDooW1xcd19dKykpPy8pO1xuICAgICAgICAgICAgICAgICAgICBuYW1lICA9IGtleVsgMSBdO1xuICAgICAgICAgICAgICAgICAgICBwYXRoICA9IGtleVsgMiBdICYmIGtleVsgMiBdLnN1YnN0cigxKTtcbiAgICAgICAgICAgICAgICAgICAgc3RvcmUgPSBzY29wZS5zdG9yZXNbIGtleVsgMSBdIF07XG4gICAgICAgICAgICAgICAgICAgIGFsaWFzID0ga2V5WyAzIF0gfHwgcGF0aCAmJiBwYXRoLm1hdGNoKC8oW15cXC5dKikkLylbIDAgXSB8fCBrZXlbIDEgXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgc3RvcmUgJiYgIWlzLmZuKHN0b3JlKSAmJiBzdG9yZS51bkJpbmQoY1N0b3JlLCBhbGlhcywgcGF0aClcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9KVxuICAgIFxuICAgIHJldHVybiBpbml0aWFsT3V0cHV0cztcbn07XG5cblxuaXMucnNTdG9yZSA9IGZ1bmN0aW9uICggb2JqICkge1xuICAgIHJldHVybiBvYmogaW5zdGFuY2VvZiBTdG9yZVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdG9yZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvU3RvcmUuanMiLCIvKlxuICogQ29weXJpZ2h0IChjKSAgMjAxOCBXaXNlIFdpbGQgV2ViIC5cbiAqXG4gKiAgTUlUIExpY2Vuc2VcbiAqXG4gKiAgUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqICBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiAgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuICogIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqICBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqICBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqICBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiAgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqICBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuICogIFNPRlRXQVJFLlxuICpcbiAqIEBhdXRob3IgOiBOYXRoYW5hZWwgQnJhdW5cbiAqIEBjb250YWN0IDogY2FpcGlsYWJzQGdtYWlsLmNvbVxuICovXG5cbi8vaW1wb3J0IGluZGV4IGZyb20gXCIuL2luZGV4XCI7Ly8gd2lsbCB1c2UgYXMgZXh0ZXJuYWwgdGhlIGluZGV4IGluIGRpc3RcbmltcG9ydCBpcyBmcm9tIFwiaXNcIjtcblxuLyoqXG4gKiBNaW5pbWFsIHB1c2ggc2VxdWVuY2VyLCBhcHBseSBzdG9yZXMgc3BlY2lmaWMgdGFzayBpbiB0aGUgcmlnaHQgb3JkZXIgKHJvb3Qgc3RvcmVzXG4gKiBmaXJzdClcbiAqL1xubGV0IHRhc2tRdWV1ZSAgICAgID0gW10sXG4gICAgY3VyV2VpZ2h0ICAgICAgPSAwLFxuICAgIG1heFdlaWdodCAgICAgID0gMCxcbiAgICBtaW5XZWlnaHQgICAgICA9IDAsXG4gICAgdGFza0NvdW50ICAgICAgPSAwLFxuICAgIGRlU3luYyAgICAgICAgID0gZmFsc2UsXG4gICAgZGVTeW5jTWF4VGFza3MgPSAxMCxcbiAgICB0YXNrLFxuICAgIGlzUnVubmluZyxcbiAgICBlcnJvckNhdGNoZXIgICA9IHtcbiAgICAgICAgbGFzdEVycm9yOiBudWxsLFxuICAgICAgICBkaXNwYXRjaCA6IGZ1bmN0aW9uICggZXJyb3IgKSB7XG4gICAgICAgICAgICBlcnJvckNhdGNoZXIuZGlzYWJsZSgpO1xuICAgICAgICAgICAgaWYgKCB0YXNrICYmIHRhc2tbIDAgXS5oYW5kbGVFcnJvciApIHtcbiAgICAgICAgICAgICAgICB0YXNrWyAwIF0uaGFuZGxlRXJyb3IoZXJyb3IsIHRhc2spO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoIHRhc2sgKVxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJSZVNjb3BlIDogQSB0YXNrIGhhcyBmYWlsZWQgISFcIiwgdGFza1sgMSBdLCBcIiBvbiBcIiwgdGFza1sgMCBdLm5hbWUgfHwgdGFza1sgMCBdLmNvbnN0cnVjdG9yLm5hbWUpXG4gICAgICAgIFxuICAgICAgICAgICAgaXNSdW5uaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB0YXNrICAgICAgPSBudWxsO1xuICAgICAgICAgICAgcnVuTm93KCk7XG4gICAgICAgIH0sXG4gICAgICAgIGVuYWJsZSAgIDogKCB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyApXG4gICAgICAgICAgICAgICAgICAgPyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgZXJyb3JDYXRjaGVyLmRpc3BhdGNoKVxuICAgICAgICAgICAgfSA6ICgpID0+IHtcbiAgICAgICAgICAgICAgICBwcm9jZXNzLm9uKCd1bmNhdWdodEV4Y2VwdGlvbicsIGVycm9yQ2F0Y2hlci5kaXNwYXRjaCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICBkaXNhYmxlICA6ICggdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgKVxuICAgICAgICAgICAgICAgICAgID8gKCkgPT4ge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdlcnJvcicsIGVycm9yQ2F0Y2hlci5kaXNwYXRjaClcbiAgICAgICAgICAgIH0gOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgcHJvY2Vzcy5yZW1vdmVMaXN0ZW5lcigndW5jYXVnaHRFeGNlcHRpb24nLCBlcnJvckNhdGNoZXIuZGlzcGF0Y2gpO1xuICAgICAgICAgICAgfVxuICAgIH1cbjtcblxuZnVuY3Rpb24gcnVuTm93KCkge1xuICAgIGlmICggIWlzUnVubmluZyApIHtcbiAgICAgICAgcnVuKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBydW4oKSB7XG4gICAgbGV0IGZyb20gID0gRGF0ZS5ub3coKTtcbiAgICBpc1J1bm5pbmcgPSB0cnVlO1xuICAgIGVycm9yQ2F0Y2hlci5lbmFibGUoKTtcbiAgICB3aGlsZSAoIHRhc2tDb3VudCApIHtcbiAgICAgICAgXG4gICAgICAgIC8vIHRyeSBmb3IgdGhlIGN1cnJlbnQgd2VpZ2h0XG4gICAgICAgIHdoaWxlICggISggdGFza1F1ZXVlWyBjdXJXZWlnaHQgXSAmJiB0YXNrUXVldWVbIGN1cldlaWdodCBdLmxlbmd0aCApIClcbiAgICAgICAgICAgIGN1cldlaWdodCsrO1xuICAgICAgICBcbiAgICAgICAgdGFza0NvdW50LS07XG4gICAgICAgIHRhc2sgPSB0YXNrUXVldWVbIGN1cldlaWdodCBdLnNoaWZ0KCk7XG4gICAgICAgIC8vY29uc29sZS5sb2coXCJUYXNrIDogXCIsIHRhc2tbMV0sIFwiIG9uIFwiLCB0YXNrWzBdLm5hbWUpO1xuICAgICAgICB0YXNrWyAwIF1bIHRhc2tbIDEgXSBdLmFwcGx5KHRhc2tbIDAgXSwgdGFza1sgMiBdKTtcbiAgICB9XG4gICAgdGFzayA9IHVuZGVmaW5lZDtcbiAgICBlcnJvckNhdGNoZXIuZGlzYWJsZSgpO1xuICAgIFxuICAgIGlzUnVubmluZyA9IGZhbHNlO1xuICAgIGlmICggdGFza0NvdW50ICkge1xuICAgICAgICBzZXRUaW1lb3V0KHJ1bk5vdyk7XG4gICAgfVxufVxuXG4vL1xuLy9pbmRleC5zZXRUYXNrRGVTeW5jID0gKCBuYiApID0+IHtcbi8vICAgIGlmICggbmIgPT09IGZhbHNlIClcbi8vICAgICAgICByZXR1cm4gZGVTeW5jID0gZmFsc2U7XG4vLyAgICBlbHNlIGlmICggbmIgPT09IHRydWUgKSB7XG4vLyAgICAgICAgZGVTeW5jICAgICAgICAgPSB0cnVlO1xuLy8gICAgICAgIGRlU3luY01heFRhc2tzID0gMTA7XG4vLyAgICB9XG4vLyAgICBlbHNlIChpcy5pbnQobmIpKVxuLy8gICAge1xuLy8gICAgICAgIGRlU3luYyAgICAgICAgID0gdHJ1ZTtcbi8vICAgICAgICBkZVN5bmNNYXhUYXNrcyA9IG5iO1xuLy8gICAgfVxuLy99O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgcHVzaFRhc2soIG9iaiwgZm4sIGFyZ3ogKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgbW9yZSBhIHN0b3JlIGhhdmUgc291cmNlcywgdGhlIG1vcmUgaXQgc2hvdWxkIGJlIHByb2Nlc3NlZCBmaXJzdFxuICAgICAgICAgKiBTbyBsZWFmcyBzdG9yZXMgc3RheSBzeW5jLCByb290IHN0b3JlcyBnZXQgbWVyZ2VkIHN0YXRlIHVwZGF0ZXMgYW5kIGdsb2JhbFxuICAgICAgICAgKiBzdGF0ZSBzdGF5IGNvaGVyZW50XG4gICAgICAgICAqIEB0eXBlIHsqfG51bWJlcn1cbiAgICAgICAgICovXG4gICAgICAgIGxldCB3ZWlnaHQgPSBvYmouX3NvdXJjZXMgJiYgb2JqLl9zb3VyY2VzLmxlbmd0aCB8fCAxLFxuICAgICAgICAgICAgc3RhY2sgID0gdGFza1F1ZXVlWyB3ZWlnaHQgXSA9XG4gICAgICAgICAgICAgICAgdGFza1F1ZXVlWyB3ZWlnaHQgXSB8fCBbXTtcbiAgICAgICAgXG4gICAgICAgIG1heFdlaWdodCA9IE1hdGgubWF4KG1heFdlaWdodCwgd2VpZ2h0KTtcbiAgICAgICAgY3VyV2VpZ2h0ID0gTWF0aC5taW4oY3VyV2VpZ2h0LCB3ZWlnaHQpO1xuICAgICAgICB0YXNrQ291bnQrKztcbiAgICAgICAgXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJQdXNoIFRhc2sgOiBcIiwgZm4sIFwiIG9uIFwiLCBvYmoubmFtZSwgd2VpZ2h0KTtcbiAgICAgICAgc3RhY2sucHVzaChbIG9iaiwgZm4sIGFyZ3ogXSk7XG4gICAgICAgIHNldFRpbWVvdXQocnVuTm93LCAwKTtcbiAgICAgICAgcmV0dXJuIHN0YWNrLmxlbmd0aDtcbiAgICB9XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlscy9UYXNrU2VxdWVuY2VyLmpzIiwiLypcbiAqIENvcHlyaWdodCAoYykgIDIwMTggV2lzZSBXaWxkIFdlYiAuXG4gKlxuICogIE1JVCBMaWNlbnNlXG4gKlxuICogIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqICBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiAgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqICBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqICBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqICBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcbiAqICBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqICBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiAgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiAgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiAgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiAgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcbiAqICBTT0ZUV0FSRS5cbiAqXG4gKiBAYXV0aG9yIDogTmF0aGFuYWVsIEJyYXVuXG4gKiBAY29udGFjdCA6IGNhaXBpbGFic0BnbWFpbC5jb21cbiAqL1xuXG5pbXBvcnQgaXMgICAgZnJvbSAnaXMnXG5cbmNvbnN0IFNpbXBsZU9iamVjdFByb3RvID0gKCB7fSApLmNvbnN0cnVjdG9yO1xuXG5sZXQgc2NvcGFibGVzID0gW107XG5cbmZ1bmN0aW9uIGFkZFNjb3BhYmxlVHlwZSggdGVzdCwgaGFuZGxlLCBtZW1iZXIgPSBmYWxzZSwgc3RhdGVTY29wZSA9IGZhbHNlICkge1xuICAgIHNjb3BhYmxlcy5wdXNoKFxuICAgICAgICB7XG4gICAgICAgICAgICB0ZXN0LFxuICAgICAgICAgICAgbWVtYmVyLFxuICAgICAgICAgICAgc3RhdGVTY29wZSxcbiAgICAgICAgICAgIGhhbmRsZVxuICAgICAgICB9XG4gICAgKVxufVxuXG4vL1xuZnVuY3Rpb24gaXNTY29wYWJsZVR5cGUoIENvbXAsIG1lbWJlciwgc3RhdGVTY29wZSApIHtcbiAgICBcbiAgICBmb3IgKCBsZXQgaSA9IDA7IGkgPCBzY29wYWJsZXMubGVuZ3RoOyBpKysgKVxuICAgICAgICBpZiAoXG4gICAgICAgICAgICAoIG1lbWJlciA9PT0gdW5kZWZpbmVkIHx8IG1lbWJlciA9PSBzY29wYWJsZXNbIGkgXS5tZW1iZXIgKVxuICAgICAgICAgICAgJiYgc3RhdGVTY29wZSA9PSBzY29wYWJsZXNbIGkgXS5zdGF0ZVNjb3BlXG4gICAgICAgICAgICAmJiBzY29wYWJsZXNbIGkgXS50ZXN0KENvbXApXG4gICAgICAgIClcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgIFxuICAgIHJldHVybiBmYWxzZTtcbiAgICBcbn1cblxuZnVuY3Rpb24gYXBwbHlTY29wYWJsZVR5cGUoIENvbXAsIGFyZ3osIG1lbWJlciwgc3RhdGVTY29wZSApIHtcbiAgICBcbiAgICBmb3IgKCBsZXQgaSA9IDA7IGkgPCBzY29wYWJsZXMubGVuZ3RoOyBpKysgKVxuICAgICAgICBpZiAoIG1lbWJlciA9PSBzY29wYWJsZXNbIGkgXS5tZW1iZXIgJiYgc3RhdGVTY29wZSA9PSBzY29wYWJsZXNbIGkgXS5zdGF0ZVNjb3BlICYmIHNjb3BhYmxlc1sgaSBdLnRlc3QoQ29tcCkgKVxuICAgICAgICAgICAgcmV0dXJuIHNjb3BhYmxlc1sgaSBdLmhhbmRsZShDb21wLCAuLi5hcmd6KTtcbiAgICBcbiAgICBjb25zb2xlLndhcm4oXCJyZVNjb3BlIDogVW5rbm93biB0eXBlXCIsIENvbXApXG4gICAgXG4gICAgcmV0dXJuIGZhbHNlO1xuICAgIFxufVxuXG5mdW5jdGlvbiByZVNjb3BlKCAuLi5hcmd6ICkge1xuICAgIC8vIGFyZSB3ZSBkZWNvcmF0aW5nIGEgbWVtYmVyIC8gd2l0aG91dCBhcmd6XG4gICAgaWYgKCBhcmd6WyAwIF0gaW5zdGFuY2VvZiBTaW1wbGVPYmplY3RQcm90byAmJiBhcmd6WyAyIF0gaW5zdGFuY2VvZiBTaW1wbGVPYmplY3RQcm90byAmJiBhcmd6WyAwIF0uaGFzT3duUHJvcGVydHkoYXJnelsgMSBdKSApIHtcbiAgICAgICAgYXJnelsgMiBdLnZhbHVlID0gYXBwbHlTY29wYWJsZVR5cGUoYXJnelsgMCBdLCBbXSwgdHJ1ZSwgZmFsc2UpO1xuICAgICAgICByZXR1cm4gYXJnelsgMCBdO1xuICAgIH1cbiAgICBlbHNlIGlmICggIWlzU2NvcGFibGVUeXBlKGFyZ3pbIDAgXSwgdW5kZWZpbmVkLCBmYWxzZSkgKSB7XG4gICAgICAgIHJldHVybiAoIC4uLmFyZ3oyICkgPT4ge1xuICAgICAgICAgICAgLy8gYXJlIHdlIGRlY29yYXRpbmcgYSBtZW1iZXIgLyB3aXRoIGFyZ3pcbiAgICAgICAgICAgIGlmICggYXJnejJbIDAgXSBpbnN0YW5jZW9mIFNpbXBsZU9iamVjdFByb3RvICYmIGFyZ3oyWyAyIF0gaW5zdGFuY2VvZiBTaW1wbGVPYmplY3RQcm90byAmJiBhcmd6MlsgMCBdLmhhc093blByb3BlcnR5KGFyZ3oyWyAxIF0pICkge1xuICAgICAgICAgICAgICAgIGFyZ3oyWyAyIF0udmFsdWUgPSBhcHBseVNjb3BhYmxlVHlwZShhcmd6MlsgMCBdLCBhcmd6LCB0cnVlLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFyZ3oyWyAwIF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlU2NvcGUoYXJnejJbIDAgXSwgLi4uYXJneik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGFwcGx5U2NvcGFibGVUeXBlKGFyZ3pbIDAgXSwgYXJnei5zbGljZSgxKSwgZmFsc2UsIGZhbHNlKTtcbn1cblxuZnVuY3Rpb24gc2NvcGVUb1N0YXRlKCAuLi5hcmd6ICkge1xuICAgIC8vIGFyZSB3ZSBkZWNvcmF0aW5nIGEgbWVtYmVyIC8gd2l0aG91dCBhcmd6XG4gICAgaWYgKCBhcmd6WyAwIF0gaW5zdGFuY2VvZiBTaW1wbGVPYmplY3RQcm90byAmJiBhcmd6WyAyIF0gaW5zdGFuY2VvZiBTaW1wbGVPYmplY3RQcm90byAmJiBhcmd6WyAwIF0uaGFzT3duUHJvcGVydHkoYXJnelsgMSBdKSApIHtcbiAgICAgICAgYXJnelsgMiBdLnZhbHVlID0gYXBwbHlTY29wYWJsZVR5cGUoYXJnelsgMCBdLCBbXSwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgIHJldHVybiBhcmd6WyAwIF07XG4gICAgfVxuICAgIGVsc2UgaWYgKCAhaXNTY29wYWJsZVR5cGUoYXJnelsgMCBdLCB1bmRlZmluZWQsIHRydWUpICkge1xuICAgICAgICByZXR1cm4gKCAuLi5hcmd6MiApID0+IHtcbiAgICAgICAgICAgIC8vIGFyZSB3ZSBkZWNvcmF0aW5nIGEgbWVtYmVyIC8gd2l0aCBhcmd6XG4gICAgICAgICAgICBpZiAoIGFyZ3oyWyAwIF0gaW5zdGFuY2VvZiBTaW1wbGVPYmplY3RQcm90byAmJiBhcmd6MlsgMiBdIGluc3RhbmNlb2YgU2ltcGxlT2JqZWN0UHJvdG8gJiYgYXJnejJbIDAgXS5oYXNPd25Qcm9wZXJ0eShhcmd6MlsgMSBdKSApIHtcbiAgICAgICAgICAgICAgICBhcmd6MlsgMiBdLnZhbHVlID0gYXBwbHlTY29wYWJsZVR5cGUoYXJnejJbIDAgXSwgYXJneiwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFyZ3oyWyAwIF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNjb3BlVG9TdGF0ZShhcmd6MlsgMCBdLCAuLi5hcmd6KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYXBwbHlTY29wYWJsZVR5cGUoYXJnelsgMCBdLCBhcmd6LnNsaWNlKDEpLCBmYWxzZSwgdHJ1ZSk7XG59XG5cbi8vXG4vL2FkZFNjb3BhYmxlVHlwZShcbi8vICAgICggQ29tcCApID0+IChDb21wICYmIENvbXAucHJvdG90eXBlIGluc3RhbmNlb2YgU3RvcmUpLFxuLy8gICAgZnVuY3Rpb24gcmVTY29wZSggLi4uYXJneiApIHtcbi8vICAgICAgICBsZXQgQmFzZVN0b3JlICAgID0gKCFhcmd6WzBdIHx8IGFyZ3pbMF0ucHJvdG90eXBlIGluc3RhbmNlb2YgU3RvcmUpICYmXG4vLyBhcmd6LnNoaWZ0KCksIHNjb3BlICAgICAgICA9ICghYXJnelswXSB8fCBhcmd6WzBdIGluc3RhbmNlb2YgU2NvcGUgfHwgaXMuZm4oYXJnelswXSkpXG4vLyAmJiBhcmd6LnNoaWZ0KCksIHVzZSAgICAgICAgICA9IChpcy5hcnJheShhcmd6WzBdKSkgJiYgYXJnei5zaGlmdCgpLCBzdGF0ZU1hcCAgICAgPVxuLy8gIXVzZSAmJiAoIWFyZ3pbMF0gfHwgYXJnelswXSBpbnN0YW5jZW9mIFNpbXBsZU9iamVjdFByb3RvKSAmJiBhcmd6LnNoaWZ0KCksXG4vLyBpbml0aWFsU3RhdGUgPSB7fTsgIGxldCBjb21wTmFtZSA9IEJhc2VTdG9yZS5kaXNwbGF5TmFtZSB8fCBCYXNlU3RvcmUubmFtZTsgIHVzZSA9XG4vLyBbLi4uKEJhc2VTdG9yZS51c2UgfHwgW10pLCAuLi4odXNlIHx8IFtdKV07IHN0YXRlTWFwICYmXG4vLyBTY29wZS5zdGF0ZU1hcFRvUmVmTGlzdChzdGF0ZU1hcCwgaW5pdGlhbFN0YXRlLCB1c2UpOyAgY2xhc3MgU3RhdGVTY29wZWRTdG9yZSBleHRlbmRzXG4vLyBCYXNlU3RvcmUgeyBzdGF0aWMgdXNlICAgICAgICAgPSB1c2U7IHN0YXRpYyBkaXNwbGF5TmFtZSA9IFwic3RhdGVTY29wZWQoXCIgKyBjb21wTmFtZSArXG4vLyBcIilcIjsgIGNvbnN0cnVjdG9yKCAuLi5hcmd6ICkgeyBzdXBlcihzY29wZSwgYXJnei5zbGljZShhcmd6WzBdIGluc3RhbmNlb2YgU2NvcGUgPyAxIDpcbi8vIDApKSB9IH0gIHJldHVybiBTdGF0ZVNjb3BlZFN0b3JlOyB9LCBmYWxzZSwgdHJ1ZSApXG5cblxuZXhwb3J0IHtcbiAgICBhZGRTY29wYWJsZVR5cGUsXG4gICAgcmVTY29wZSxcbiAgICBzY29wZVRvU3RhdGVcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWxzL3Njb3BhYmxlLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==