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
	                if (!data) return lastRevs;
	                if (typeof obj != "function") {
	                    if (as) obj.setState(_defineProperty({}, as, data));else obj.setState(data);
	                } else {
	                    obj(data);
	                }
	            }
	            return lastRevs;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgODY3MDU0MDA4ZDUwZTVlZTk2OTkiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9TY29wZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvaXMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaXNcIiIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL0VtaXR0ZXIuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic2hvcnRpZFwiIiwid2VicGFjazovLy8uL3NyYy9TdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvVGFza1NlcXVlbmNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvc2NvcGFibGUuanMiXSwibmFtZXMiOlsiJGdsb2JhbCIsIndpbmRvdyIsImdsb2JhbCIsIlJTIiwiX19fcmVzY29wZSIsImNvbnNvbGUiLCJ3YXJuIiwiU3RvcmUiLCJTY29wZSIsIkNvbnRleHQiLCJyZVNjb3BlIiwic2NvcGVUb1N0YXRlIiwicmVTY29wZVN0YXRlIiwiYWRkU2NvcGFibGVUeXBlIiwic2NvcGVSZWYiLCJtYXAiLCJrZXkiLCJyZXF1aXJlIiwid2Fsa25TZXQiLCJ3YWxrbkdldCIsImtleVdhbGtuU2V0Iiwia2V5V2Fsa25HZXQiLCJFdmVudEVtaXR0ZXIiLCJzaG9ydGlkIiwiX19wcm90b19fcHVzaCIsInRhcmdldCIsImlkIiwicGFyZW50IiwiZm4iLCJwcm90b3R5cGUiLCJfIiwib3BlblNjb3BlcyIsIlNpbXBsZU9iamVjdFByb3RvIiwiY29uc3RydWN0b3IiLCJzY29wZXMiLCJza2V5IiwiaXMiLCJhcnJheSIsInNvcnQiLCJhIiwiYiIsImZpcnN0bmFtZSIsImpvaW4iLCJzbSIsInN0YXRlIiwiX3JlZnMiLCJhY3Rpb25zIiwicGF0aCIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwiY3BhdGgiLCJwdXNoIiwiRnVuY3Rpb24iLCJhcyIsInN0b3Jlc01hcCIsInNuYXBzaG90IiwiZGF0YSIsImluY3JlbWVudElkIiwicGVyc2lzdGVuY2VUbSIsImF1dG9EZXN0cm95Iiwicm9vdEVtaXR0ZXIiLCJib3VuZGVkQWN0aW9ucyIsImtleUluZGV4IiwiX2lkIiwiZ2VuZXJhdGUiLCJpc0xvY2FsSWQiLCJyZWdpc3RlciIsImkiLCJfcmV2Iiwic3RvcmVzIiwiX2F1dG9EZXN0cm95IiwiZGVhZCIsIkVycm9yIiwic291cmNlcyIsImNoaWxkU2NvcGVzIiwiY2hpbGRTY29wZXNMaXN0IiwidW5TdGFibGVDaGlsZHMiLCJzZWVuQ2hpbGRzIiwiX19yZXRhaW5zIiwiYWxsIiwiX19sb2NrcyIsIl9ib3VuZGVkQWN0aW9ucyIsInRlc3QiLCJpbmNsdWRlcyIsImJpbmQiLCJfbGlzdGVuaW5nIiwiX3Njb3BlIiwiX21peGVkIiwiX21peGVkTGlzdCIsImZvbGxvd2VycyIsInJldGFpbiIsIl9zdGFibGUiLCJ3YWl0Iiwib24iLCJfcGFyZW50TGlzdCIsInJlbGVhc2UiLCJfcHJvcGFnIiwiX2FkZENoaWxkIiwicmVzdG9yZSIsInNldFRpbWVvdXQiLCJkaXNwb3NlIiwic3RvcmVzTGlzdCIsIl9tb3VudCIsImsiLCJhcmd1bWVudHMiLCJyZWYiLCJzbmFwIiwicGFyc2VSZWYiLCJzdG9yZUlkIiwicmVkdWNlIiwibW91bnRlZCIsImN0eCIsInN0b3JlIiwidGFza1F1ZXVlIiwicnNTdG9yZSIsIm5hbWUiLCJsZW5ndGgiLCJzaGlmdCIsInJzU2NvcGUiLCIkcGFyZW50IiwibW91bnQiLCJzbGljZSIsInVuZGVmaW5lZCIsInNldFN0YXRlIiwiX3dhdGNoU3RvcmUiLCJpc1N0YWJsZSIsInByb3BhZyIsInRhcmdldEN0eCIsImxpc3RzIiwicmVsaW5rIiwic2luZ2xldG9uIiwic3JjQ3R4IiwiZXh0ZXJuYWwiLCJmb3JjZSIsImxjdHgiLCJpbmZvIiwidG1wIiwiZGVzdHJveSIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsImdldCIsInNldCIsInYiLCJhY3RpdmVBY3Rpb25zIiwiYWN0IiwiaGFzT3duUHJvcGVydHkiLCJfX3RhcmdldFN0b3JlcyIsImRpc3BhdGNoIiwib2JqIiwic2V0SW5pdGlhbCIsImxhc3RSZXZzIiwicmVmS2V5cyIsInN0cmluZyIsInJldnMiLCJyZXYiLCJyZWZzIiwicmV0YWluU3RvcmVzIiwiZ2V0VXBkYXRlcyIsImRpc3Bvc2VTdG9yZXMiLCJzcGxpY2UiLCJ0byIsInJldk1hcCIsInJlZkxpc3QiLCJtaXhlZENXVW5tb3VudCIsInVuTW91bnRLZXkiLCJpc1JlYWN0Q29tcG9uZW50IiwidW5CaW5kIiwiYWxpYXMiLCJyZXRyaWV2ZSIsInNwbGl0IiwicmV0cmlldmVTdG9yZSIsInN0b3Jlc1Jldk1hcCIsImxvY2FsIiwidXBkYXRlZCIsImdldFN0b3Jlc1JldnMiLCJvdXRwdXQiLCJyZWR1Y2VSaWdodCIsImNoaWxkcyIsIl9nZXRBbGxDaGlsZHMiLCJjZmciLCJ3aXRoQ2hpbGRzIiwid2l0aFBhcmVudHMiLCJ3aXRoTWl4ZWQiLCJub3JlZnMiLCJzZXJpYWxpemUiLCJ3aXRoQ2hpbGQiLCJoIiwic3RhcnRzV2l0aCIsInN1YnN0ciIsImJvb2wiLCJ0YWtlU25hcHNob3RCeUtleSIsImdldFNuYXBzaG90QnlLZXkiLCJkZWxldGVTbmFwc2hvdEJ5S2V5IiwicmVwbGFjZSIsInBTdGF0ZSIsIl9yZWYiLCJhY3Rpb24iLCJhcmd6Iiwic3RhY2siLCJiQWN0cyIsInRyaWdnZXIiLCJjYiIsIm9uY2UiLCJyZWFzb24iLCJlbWl0IiwiZXJyb3IiLCJzdGFiaWxpemVyVE0iLCJjbGVhclRpbWVvdXQiLCJwcm9wYWdUTSIsInJlbWFwcyIsIndhc1N0YWJsZSIsImluZGV4T2YiLCJ1biIsImRlc3Ryb3lUTSIsInJlbW92ZUxpc3RlbmVyIiwiZm9sbG93ZXIiLCJfcm1DaGlsZCIsInZhbHVlIiwiaXNLZXkiLCJmaWx0ZXIiLCJFbWl0dGVyIiwiX2V2ZW50cyIsImV2dCIsIlRhc2tTZXF1ZW5jZXIiLCJvYmpQcm90byIsImdldFByb3RvdHlwZU9mIiwiX3N0YXRpYyIsInNjb3BlIiwiZ2V0U2NvcGUiLCJzdGF0aWNTY29wZSIsIndhdGNocyIsInVzZSIsImFwcGx5IiwiaW5pdGlhbFN0YXRlIiwiZGVmYXVsdFN0YXRlIiwiYXBwbGllZCIsIl91aWQiLCJfb25TdGFiaWxpemUiLCJfcGVyc2lzdGVuY2VUbSIsIl9jZmciLCJzY29wZU9iaiIsIiRzY29wZSIsIiRzdG9yZXMiLCIkYWN0aW9ucyIsIiRkaXNwYXRjaCIsIl9yZXZzIiwiX3JlcXVpcmUiLCJfc291cmNlcyIsIl91c2UiLCJtYXRjaCIsInJlZjIiLCJfZm9sbG93ZXJzIiwiX2NoYW5nZXNTVyIsIl9hZnRlckNvbnN0cnVjdG9yIiwiaW5pdGlhbERhdGEiLCJzaG91bGRBcHBseSIsIm1hbmFnZWQiLCJuRGF0YXMiLCJyIiwiY0RhdGFzIiwiaXNDb21wbGV0ZSIsImZvbGxvdyIsImNhbGwiLCJjaGFuZ2VzIiwicmVmaW5lIiwiX19wcm90b19fIiwiX3N0YWJpbGl6ZXIiLCJwdXNoVGFzayIsIm5zIiwiZG9XYWl0Iiwib3JpZ2luIiwiaW5pdGlhbE91dHB1dHMiLCJzIiwiaGFzRGF0YUNoYW5nZSIsInN0YWJsZSIsIm5leHRTdGF0ZSIsIl9uZXh0U3RhdGUiLCJuZXh0RGF0YSIsInN5bmMiLCJjaGFuZ2UiLCJwdXNoU3RhdGUiLCJzdGFiaWxpemUiLCJfa2V5IiwiZGVmYXVsdE5hbWUiLCJudW1iZXIiLCJpbW1lZGlhdGUiLCJ0aGVuIiwicHJldmlvdXMiLCJtZSIsInNob3VsZFByb3BhZyIsIl9kZXN0cm95VE0iLCJyZW1vdmVBbGxMaXN0ZW5lcnMiLCJjU3RvcmUiLCJ0YXJnZXRSZXZzIiwidGFyZ2V0U2NvcGUiLCJvIiwiY3VyV2VpZ2h0IiwibWF4V2VpZ2h0IiwibWluV2VpZ2h0IiwidGFza0NvdW50IiwiZGVTeW5jIiwiZGVTeW5jTWF4VGFza3MiLCJ0YXNrIiwiaXNSdW5uaW5nIiwiZXJyb3JDYXRjaGVyIiwibGFzdEVycm9yIiwiZGlzYWJsZSIsImhhbmRsZUVycm9yIiwicnVuTm93IiwiZW5hYmxlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInByb2Nlc3MiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicnVuIiwiZnJvbSIsIkRhdGUiLCJub3ciLCJ3ZWlnaHQiLCJNYXRoIiwibWF4IiwibWluIiwic2NvcGFibGVzIiwiaGFuZGxlIiwibWVtYmVyIiwic3RhdGVTY29wZSIsImlzU2NvcGFibGVUeXBlIiwiQ29tcCIsImFwcGx5U2NvcGFibGVUeXBlIiwiYXJnejIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDVEE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBL0JBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEyQkEsS0FBSUEsVUFBWSxPQUFPQyxNQUFQLEtBQWtCLFdBQXBCLEdBQW9DQSxNQUFwQyxHQUE2Q0MsTUFBM0Q7O0FBTUEsS0FBTUMsS0FBS0gsUUFBUUksVUFBUixJQUFzQixFQUFqQztBQUNBLEtBQUtKLFFBQVFJLFVBQWIsRUFBMEI7QUFDdEJDLGFBQVFDLElBQVIsQ0FBYSwrREFBYjtBQUNILEVBRkQsTUFHSzs7QUFFRE4sYUFBUUksVUFBUixHQUFxQkQsRUFBckI7QUFDQSxxQkFBTUksS0FBTjtBQUNBSixRQUFHSyxLQUFIO0FBQ0FMLFFBQUdNLE9BQUg7QUFDQU4sUUFBR0ksS0FBSDtBQUNBSixRQUFHTyxPQUFIO0FBQ0FQLFFBQUdRLFlBQUg7QUFDQVIsUUFBR1MsWUFBSDtBQUNBVCxRQUFHVSxlQUFIO0FBQ0FWLFFBQUdXLFFBQUgsR0FD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RDtBQUNwRCxnQkFBTyxZQUFnQjtBQUFBLGdEQUFYK00sS0FBVztBQUFYQSxzQkFBVztBQUFBOztBQUNuQjtBQUNBLGlCQUFLQSxNQUFPLENBQVAsYUFBc0IxUyxpQkFBdEIsSUFBMkMwUyxNQUFPLENBQVAsYUFBc0IxUyxpQkFBakUsSUFBc0YwUyxNQUFPLENBQVAsRUFBV3ZMLGNBQVgsQ0FBMEJ1TCxNQUFPLENBQVAsQ0FBMUIsQ0FBM0YsRUFBbUk7QUFDL0hBLHVCQUFPLENBQVAsRUFBVy9HLEtBQVgsR0FBbUI4RyxrQkFBa0JDLE1BQU8sQ0FBUCxDQUFsQixFQUE4Qm5JLElBQTlCLEVBQW9DLElBQXBDLEVBQTBDLElBQTFDLENBQW5CO0FBQ0Esd0JBQU9tSSxNQUFPLENBQVAsQ0FBUDtBQUNILGNBSEQsTUFLSSxPQUFPL1QsK0JBQWErVCxNQUFPLENBQVAsQ0FBYixTQUE0Qm5JLElBQTVCLEVBQVA7QUFDUCxVQVJEO0FBU0g7QUFDRCxZQUFPa0ksa0JBQWtCbEksS0FBTSxDQUFOLENBQWxCLEVBQTZCQSxLQUFLN0UsS0FBTCxDQUFXLENBQVgsQ0FBN0IsRUFBNEMsS0FBNUMsRUFBbUQsSUFBbkQsQ0FBUDtBQUNIOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztTQUlJN0csZSxHQUFBQSxlO1NBQ0FILE8sR0FBQUEsTztTQUNBQyxZLEdBQUFBLFkiLCJmaWxlIjoiLi4vLi4vZGlzdC9SZVNjb3BlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDg2NzA1NDAwOGQ1MGU1ZWU5Njk5IiwiLypcbiAqIENvcHlyaWdodCAoYykgIDIwMTggV2lzZSBXaWxkIFdlYiAuXG4gKlxuICogIE1JVCBMaWNlbnNlXG4gKlxuICogIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqICBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiAgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqICBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqICBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqICBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcbiAqICBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqICBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiAgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiAgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiAgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiAgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcbiAqICBTT0ZUV0FSRS5cbiAqXG4gKiBAYXV0aG9yIDogTmF0aGFuYWVsIEJyYXVuXG4gKiBAY29udGFjdCA6IGNhaXBpbGFic0BnbWFpbC5jb21cbiAqL1xuXG5sZXQgJGdsb2JhbCA9ICggdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgKSA/IHdpbmRvdyA6IGdsb2JhbDtcblxuaW1wb3J0IFNjb3BlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tIFwiLi9TY29wZVwiO1xuaW1wb3J0IFN0b3JlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tIFwiLi9TdG9yZVwiO1xuaW1wb3J0IHsgYWRkU2NvcGFibGVUeXBlLCByZVNjb3BlLCBzY29wZVRvU3RhdGUgfSBmcm9tIFwiLi91dGlscy9zY29wYWJsZVwiO1xuXG5jb25zdCBSUyA9ICRnbG9iYWwuX19fcmVzY29wZSB8fCB7fTtcbmlmICggJGdsb2JhbC5fX19yZXNjb3BlICkge1xuICAgIGNvbnNvbGUud2FybihcIlJlU2NvcGUgaXMgZGVmaW5lZCBtdWx0aXBsZSB0aW1lcyAhISBcXG5DaGVjayB5b3UncmUgcGFja2FnaW5nXCIpXG59XG5lbHNlIHtcbiAgICBcbiAgICAkZ2xvYmFsLl9fX3Jlc2NvcGUgPSBSUztcbiAgICBTY29wZS5TdG9yZSAgICAgICAgPSBTdG9yZTtcbiAgICBSUy5TY29wZSAgICAgICAgICAgPSBTY29wZTtcbiAgICBSUy5Db250ZXh0ICAgICAgICAgPSBTY29wZTtcbiAgICBSUy5TdG9yZSAgICAgICAgICAgPSBTdG9yZTtcbiAgICBSUy5yZVNjb3BlICAgICAgICAgPSByZVNjb3BlO1xuICAgIFJTLnNjb3BlVG9TdGF0ZSAgICA9IHNjb3BlVG9TdGF0ZTtcbiAgICBSUy5yZVNjb3BlU3RhdGUgICAgPSBzY29wZVRvU3RhdGU7XG4gICAgUlMuYWRkU2NvcGFibGVUeXBlID0gYWRkU2NvcGFibGVUeXBlO1xuICAgIFJTLnNjb3BlUmVmICAgICAgICA9XG4gICAgICAgIGZ1bmN0aW9uIHNjb3BlUmVmKCBtYXAsIGtleSApIHtcbiAgICAgICAgICAgIG1hcFsga2V5IF0gPSBuZXcgU2NvcGUuc2NvcGVSZWYobWFwWyBrZXkgXSk7XG4gICAgICAgICAgICByZXR1cm4gbWFwO1xuICAgICAgICB9O1xuICAgIFxufVxuZXhwb3J0IGRlZmF1bHQgUlM7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LmpzIiwiLypcbiAqIENvcHlyaWdodCAoYykgIDIwMTggV2lzZSBXaWxkIFdlYiAuXG4gKlxuICogIE1JVCBMaWNlbnNlXG4gKlxuICogIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqICBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiAgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqICBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqICBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqICBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcbiAqICBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqICBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiAgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiAgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiAgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiAgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcbiAqICBTT0ZUV0FSRS5cbiAqXG4gKiBAYXV0aG9yIDogTmF0aGFuYWVsIEJyYXVuXG4gKiBAY29udGFjdCA6IGNhaXBpbGFic0BnbWFpbC5jb21cbiAqL1xuXG5cbnZhciBpcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL3V0aWxzL2lzJyksXG4gICAgeyB3YWxrblNldCwgd2Fsa25HZXQsIGtleVdhbGtuU2V0LCBrZXlXYWxrbkdldCB9ID0gcmVxdWlyZSgnLi91dGlscy91dGlscycpLFxuICAgIEV2ZW50RW1pdHRlciAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vdXRpbHMvRW1pdHRlcicpLFxuICAgIHNob3J0aWQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJ3Nob3J0aWQnKVxuICAgICwgX19wcm90b19fcHVzaCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA9ICggdGFyZ2V0LCBpZCwgcGFyZW50ICkgPT4ge1xuICAgICAgICBsZXQgZm4gICAgICAgICA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgfTtcbiAgICAgICAgZm4ucHJvdG90eXBlICAgPSBwYXJlbnQgPyBuZXcgcGFyZW50Ll9bIGlkIF0oKSA6IHRhcmdldFsgaWQgXSB8fCB7fTtcbiAgICAgICAgdGFyZ2V0WyBpZCBdICAgPSBuZXcgZm4oKTtcbiAgICAgICAgdGFyZ2V0Ll9bIGlkIF0gPSBmbjtcbiAgICB9LFxuICAgIG9wZW5TY29wZXMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA9IHt9LFxuICAgIFNpbXBsZU9iamVjdFByb3RvICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA9ICgge30gKS5jb25zdHJ1Y3RvcjtcblxuLyoqXG4gKiBCYXNlIFNjb3BlIG9iamVjdFxuICovXG5jbGFzcyBTY29wZSBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gICAgc3RhdGljIGdldFNjb3BlKCBzY29wZXMgKSB7XG4gICAgICAgIGxldCBza2V5ID0gaXMuYXJyYXkoc2NvcGVzKSA/IHNjb3Blcy5zb3J0KCggYSwgYiApID0+IHtcbiAgICAgICAgICAgIGlmICggYS5maXJzdG5hbWUgPCBiLmZpcnN0bmFtZSApIHJldHVybiAtMTtcbiAgICAgICAgICAgIGlmICggYS5maXJzdG5hbWUgPiBiLmZpcnN0bmFtZSApIHJldHVybiAxO1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH0pLmpvaW4oJysnKSA6IHNjb3BlcztcbiAgICAgICAgcmV0dXJuIG9wZW5TY29wZXNbIHNrZXkgXSA9IG9wZW5TY29wZXNbIHNrZXkgXSB8fCBuZXcgU2NvcGUoe30sIHsgaWQ6IHNrZXkgfSk7XG4gICAgfTtcbiAgICBcbiAgICBcbiAgICAvKipcbiAgICAgKiBnZXQgYSBwYXJzZWQgcmVmZXJlbmNlIGxpc3QgZnJvbSBzdGF0ZU1hcFxuICAgICAqIEBwYXJhbSBfcmVmXG4gICAgICogQHJldHVybnMge3tzdG9yZUlkLCBwYXRoLCBhbGlhczogKiwgcmVmOiAqfX1cbiAgICAgKi9cbiAgICBzdGF0aWMgc3RhdGVNYXBUb1JlZkxpc3QoIHNtLCBzdGF0ZSA9IHt9LCBfcmVmcyA9IFtdLCBhY3Rpb25zID0ge30sIHBhdGggPSBcIlwiICkge1xuICAgICAgICBPYmplY3Qua2V5cyhzbSkuZm9yRWFjaChcbiAgICAgICAgICAgIGtleSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGNwYXRoID0gcGF0aCA/IHBhdGggKyAnLicgKyBrZXkgOiBrZXk7XG4gICAgICAgICAgICAgICAgc21bIGtleSBdIGluc3RhbmNlb2YgU2NvcGUuc2NvcGVSZWZcbiAgICAgICAgICAgICAgICA/IF9yZWZzLnB1c2goc21bIGtleSBdLnBhdGggKyAnOicgKyBjcGF0aClcbiAgICAgICAgICAgICAgICA6ICggc21bIGtleSBdICYmIHNtWyBrZXkgXSBpbnN0YW5jZW9mIEZ1bmN0aW9uIClcbiAgICAgICAgICAgICAgICAgID8gYWN0aW9uc1sga2V5IF0gPSBzbVsga2V5IF1cbiAgICAgICAgICAgICAgICAgIDogKCBzbVsga2V5IF0gJiYgc21bIGtleSBdLnByb3RvdHlwZSBpbnN0YW5jZW9mIFNjb3BlLlN0b3JlIClcbiAgICAgICAgICAgICAgICAgICAgPyBfcmVmcy5wdXNoKHNtWyBrZXkgXS5hcyhjcGF0aCkpXG4gICAgICAgICAgICAgICAgICAgIDogc3RhdGVbIGNwYXRoIF0gPSBzbVsga2V5IF1cbiAgICAgICAgICAgICAgICAvLzogdGhpcy5zdGF0ZU1hcFRvUmVmTGlzdChzbVtrZXldLCBfcmVmcywgcGF0aCArICcuJyArIGtleSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgICAgICByZXR1cm4gX3JlZnM7XG4gICAgfVxuICAgIFxuICAgIHN0YXRpYyBwZXJzaXN0ZW5jZVRtID0gMTsvLyBpZiA+IDAsIHdpbGwgd2FpdCAncGVyc2lzdGVuY2VUbScgbXMgYmVmb3JlIGRlc3Ryb3lcbiAgICAvLyB3aGVuXG4gICAgLy8gZGlzcG9zZSByZWFjaCAwXG4gICAgc3RhdGljIFN0b3JlICAgID0gbnVsbDtcbiAgICBzdGF0aWMgc2NvcGVSZWYgPSBmdW5jdGlvbiBzY29wZVJlZiggcGF0aCApIHtcbiAgICAgICAgdGhpcy5wYXRoID0gcGF0aDtcbiAgICB9O1xuICAgIHN0YXRpYyBzY29wZXMgICA9IG9wZW5TY29wZXM7Ly8gYWxsIGFjdGl2ZSBzY29wZXNcbiAgICBcbiAgICBcbiAgICAvKipcbiAgICAgKiBJbml0IGEgUmVTY29wZSBzY29wZVxuICAgICAqXG4gICAgICogQHBhcmFtIHN0b3Jlc01hcCB7T2JqZWN0fSBPYmplY3Qgd2l0aCB0aGUgaW5pdGlhbCBzdG9yZXMgZGVmaW5pdGlvbiAvIGluc3RhbmNlc1xuICAgICAqIEBwYXJhbSBjb25maWcge09iamVjdH0gU2NvcGUgY29uZmlnXG4gICAgICoge1xuICAgICAqICBwYXJlbnQge3Njb3BlfSBAb3B0aW9uYWwgcGFyZW50IHNjb3BlXG4gICAgICpcbiAgICAgKiAgaWQge3N0cmluZ30gQG9wdGlvbmFsIGlkICggaWYgdGhpcyBpZCBleGlzdCBzdG9yZXNNYXAgd2lsbCBiZSBtZXJnZSBvbiB0aGUgJ2lkJ1xuICAgICAqICAgICBzY29wZSkga2V5IHtzdHJpbmd9IEBvcHRpb25hbCBrZXkgb2YgdGhlIHNjb3BlICggaWYgbm8gaWQgaXMgc2V0LCB0aGUgc2NvcGUgaWRcbiAgICAgKiAgICAgd2lsbCBiZSAocGFyZW50LmlkKyc+JytrZXkpIGluY3JlbWVudElkIHtib29sfSBAb3B0aW9uYWwgdHJ1ZSB0byBhZGQgYSBzdWZmaXhcbiAgICAgKiAgICAgaWQsIGlmIHRoZSBwcm92aWRlZCBrZXkgb3IgaWQgZ2xvYmFsbHkgZXhpc3RcbiAgICAgKlxuICAgICAqICBzdGF0ZSB7T2JqZWN0fSBAb3B0aW9uYWwgaW5pdGlhbCBzdGF0ZSBieSBzdG9yZSBhbGlhc1xuICAgICAqICBkYXRhIHtPYmplY3R9IEBvcHRpb25hbCBpbml0aWFsIGRhdGEgYnkgc3RvcmUgYWxpYXNcbiAgICAgKlxuICAgICAqICByb290RW1pdHRlciB7Ym9vbH0gQG9wdGlvbmFsIHRydWUgdG8gbm90IGJlaW5nIGRlc3RhYmlsaXplZCBieSBwYXJlbnRcbiAgICAgKiAgYm91bmRlZEFjdGlvbnMge2FycmF5IHwgcmVnZXhwfSBAb3B0aW9uYWwgbGlzdCBvciByZWdleHAgb2YgYWN0aW9ucyBub3RcbiAgICAgKiAgICAgcHJvcGFnYXRlZCB0byB0aGUgcGFyZW50XG4gICAgICpcbiAgICAgKiAgcGVyc2lzdGVuY2VUbSB7bnVtYmVyKSBpZiA+IDAsIHdpbGwgd2FpdCAncGVyc2lzdGVuY2VUbScgbXMgYmVmb3JlIGRlc3Ryb3kgd2hlblxuICAgICAqICAgICBkaXNwb3NlIHJlYWNoIDAgYXV0b0Rlc3Ryb3kgIHtib29sfSB3aWxsIHRyaWdnZXIgcmV0YWluICYgZGlzcG9zZSBhZnRlciBzdGFydFxuICAgICAqICB9XG4gICAgICogQHJldHVybnMge1Njb3BlfVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKCBzdG9yZXNNYXAsIHsgcGFyZW50LCBrZXksIGlkLCBzbmFwc2hvdCwgc3RhdGUsIGRhdGEsIGluY3JlbWVudElkID0gISFrZXksIHBlcnNpc3RlbmNlVG0sIGF1dG9EZXN0cm95LCByb290RW1pdHRlciwgYm91bmRlZEFjdGlvbnMgfSA9IHt9ICkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB2YXIgXyA9IHt9LCBrZXlJbmRleDtcbiAgICAgICAgXG4gICAgICAgIGlkID0gaWQgfHwga2V5ICYmICggKCBwYXJlbnQgJiYgcGFyZW50Ll9pZCB8fCBzaG9ydGlkLmdlbmVyYXRlKCkgKSArICc+JyArIGtleSApO1xuICAgICAgICBcbiAgICAgICAgXy5pc0xvY2FsSWQgPSAhaWQ7XG4gICAgICAgIFxuICAgICAgICAvL2lmICggcGFyZW50ICYmIGtleSApIHtcbiAgICAgICAgLy8gICAga2V5SW5kZXggPSBwYXJlbnQuXy5jaGlsZFNjb3Blcy5maW5kKGN0eD0+KGN0eC5faWQ9PWlkKSk7XG4gICAgICAgIC8vICAgIGlmICgga2V5SW5kZXggPT0gLTEgKSBrZXlJbmRleCA9IHBhcmVudC5fLnNlZW5DaGlsZHM7XG4gICAgICAgIC8vICAgIGtleUluZGV4Kys7XG4gICAgICAgIC8vICAgIGlmICgga2V5SW5kZXggKVxuICAgICAgICAvLyAgICAgICAgaWQgPSBpZCArICdbJyArIGtleUluZGV4ICsgJ10nO1xuICAgICAgICAvL31cbiAgICAgICAgXG4gICAgICAgIGlkID0gaWQgfHwgKCBcIl9fX19fXCIgKyBzaG9ydGlkLmdlbmVyYXRlKCkgKTtcbiAgICAgICAgXG4gICAgICAgIGlmICggb3BlblNjb3Blc1sgaWQgXSApIHtcbiAgICAgICAgICAgIHRoaXMuX2lkID0gaWQ7XG4gICAgICAgICAgICBvcGVuU2NvcGVzWyBpZCBdLnJlZ2lzdGVyKHN0b3Jlc01hcCk7XG4gICAgICAgICAgICByZXR1cm4gb3BlblNjb3Blc1sgaWQgXVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCBvcGVuU2NvcGVzWyBpZCBdICYmIGluY3JlbWVudElkICkge1xuICAgICAgICAgICAgbGV0IGkgPSAtMTtcbiAgICAgICAgICAgIHdoaWxlICggb3BlblNjb3Blc1sgaWQgKyAnWycgKyAoICsraSApICsgJ10nIF0gKSA7XG4gICAgICAgICAgICBpZCA9IGlkICsgJ1snICsgaSArICddJztcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdGhpcy5faWQgICAgICAgICA9IGlkO1xuICAgICAgICB0aGlzLl9yZXYgICAgICAgID0gMDtcbiAgICAgICAgb3BlblNjb3Blc1sgaWQgXSA9IHRoaXM7XG4gICAgICAgIF8ucGVyc2lzdGVuY2VUbSAgPSBwZXJzaXN0ZW5jZVRtIHx8IHRoaXMuY29uc3RydWN0b3IucGVyc2lzdGVuY2VUbTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuYWN0aW9ucyA9IHt9O1xuICAgICAgICB0aGlzLnN0b3JlcyAgPSB7fTtcbiAgICAgICAgdGhpcy5zdGF0ZSAgID0ge307XG4gICAgICAgIHRoaXMuZGF0YSAgICA9IHt9O1xuICAgICAgICBcbiAgICAgICAgdGhpcy5wYXJlbnQgICAgICAgPSBwYXJlbnQ7XG4gICAgICAgIHRoaXMuXyAgICAgICAgICAgID0gXztcbiAgICAgICAgdGhpcy5fYXV0b0Rlc3Ryb3kgPSBhdXRvRGVzdHJveTtcbiAgICAgICAgXG4gICAgICAgIGlmICggcGFyZW50ICYmIHBhcmVudC5kZWFkIClcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbid0IHVzZSBhIGRlYWQgc2NvcGUgYXMgcGFyZW50ICFcIik7XG4gICAgICAgIFxuICAgICAgICBfX3Byb3RvX19wdXNoKHRoaXMsICdhY3Rpb25zJywgcGFyZW50KTtcbiAgICAgICAgX19wcm90b19fcHVzaCh0aGlzLCAnc3RvcmVzJywgcGFyZW50KTtcbiAgICAgICAgX19wcm90b19fcHVzaCh0aGlzLCAnc3RhdGUnLCBwYXJlbnQpO1xuICAgICAgICBfX3Byb3RvX19wdXNoKHRoaXMsICdkYXRhJywgcGFyZW50KTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuc291cmNlcyAgICAgID0gW107XG4gICAgICAgIF8uY2hpbGRTY29wZXMgICAgID0gW107XG4gICAgICAgIF8uY2hpbGRTY29wZXNMaXN0ID0gW107XG4gICAgICAgIF8udW5TdGFibGVDaGlsZHMgID0gMDtcbiAgICAgICAgXy5zZWVuQ2hpbGRzICAgICAgPSAwO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fX3JldGFpbnMgPSB7IGFsbDogMCB9O1xuICAgICAgICB0aGlzLl9fbG9ja3MgICA9IHsgYWxsOiAxIH07XG4gICAgICAgIFxuICAgICAgICAvL18uc25hcHNob3QgICAgICAgID0gc25hcHNob3Q7XG4gICAgICAgIC8vXy5zbmFwc2hvdCAgICAgICAgPSBzbmFwc2hvdDtcbiAgICAgICAgXy5fYm91bmRlZEFjdGlvbnMgPSBpcy5hcnJheShib3VuZGVkQWN0aW9ucylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHsgdGVzdDogYm91bmRlZEFjdGlvbnMuaW5jbHVkZXMuYmluZChib3VuZGVkQWN0aW9ucykgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogYm91bmRlZEFjdGlvbnM7XG4gICAgICAgIF8uX2xpc3RlbmluZyAgICAgID0ge307XG4gICAgICAgIF8uX3Njb3BlICAgICAgICAgID0ge307XG4gICAgICAgIF8uX21peGVkICAgICAgICAgID0gW107XG4gICAgICAgIF8uX21peGVkTGlzdCAgICAgID0gW107XG4gICAgICAgIF8uZm9sbG93ZXJzICAgICAgID0gW107XG4gICAgICAgIGlmICggcGFyZW50ICkge1xuICAgICAgICAgICAgcGFyZW50LnJldGFpbihcImlzTXlQYXJlbnRcIik7XG4gICAgICAgICAgICBpZiAoICFyb290RW1pdHRlciApIHtcbiAgICAgICAgICAgICAgICAhcGFyZW50Ll9zdGFibGUgJiYgdGhpcy53YWl0KFwid2FpdGluZ1BhcmVudFwiKTtcbiAgICAgICAgICAgICAgICBwYXJlbnQub24oXy5fcGFyZW50TGlzdCA9IHtcbiAgICAgICAgICAgICAgICAgICAgJ3N0YWJsZScgIDogcyA9PiB0aGlzLnJlbGVhc2UoXCJ3YWl0aW5nUGFyZW50XCIpLFxuICAgICAgICAgICAgICAgICAgICAndW5zdGFibGUnOiBzID0+IHRoaXMud2FpdChcIndhaXRpbmdQYXJlbnRcIiksXG4gICAgICAgICAgICAgICAgICAgICd1cGRhdGUnICA6IHMgPT4gdGhpcy5fcHJvcGFnKClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhcmVudC5vbihfLl9wYXJlbnRMaXN0ID0ge1xuICAgICAgICAgICAgICAgICAgICAndXBkYXRlJzogcyA9PiB0aGlzLl9wcm9wYWcoKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gdGhpcy5yZWdpc3RlcihwYXJlbnQuX19zY29wZSwgc3RhdGUsIGRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgdGhpcy5yZWdpc3RlcihzdG9yZXNNYXAsIHN0YXRlLCBkYXRhKTtcbiAgICAgICAgdGhpcy5fX2xvY2tzLmFsbC0tO1xuICAgICAgICB0aGlzLl9zdGFibGUgPSAhdGhpcy5fX2xvY2tzLmFsbDtcbiAgICAgICAgXG4gICAgICAgIGlmICggcGFyZW50ICkge1xuICAgICAgICAgICAgcGFyZW50Ll9hZGRDaGlsZCh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdGhpcy5yZXN0b3JlKHNuYXBzaG90KTtcbiAgICAgICAgXG4gICAgICAgIGlmICggYXV0b0Rlc3Ryb3kgKVxuICAgICAgICAgICAgc2V0VGltZW91dChcbiAgICAgICAgICAgICAgICB0bSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmV0YWluKFwiYXV0b0Rlc3Ryb3lcIik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzcG9zZShcImF1dG9EZXN0cm95XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIClcbiAgICAgICAgXG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqXG4gICAgICogTW91bnQgdGhlIHN0b3JlcyBpbiBzdG9yZXNMaXN0LCBpbiB0aGlzIHNjb3BlIG9yIGluIGl0cyBwYXJlbnRzIG9yIG1peGVkIHNjb3Blc1xuICAgICAqXG4gICAgICogQHBhcmFtIHN0b3Jlc0xpc3Qge3N0cmluZ3xzdG9yZVJlZn0gU3RvcmUgbmFtZSwgQXJyYXkgb2YgU3RvcmUgbmFtZXMsIG9yIFJlc2NvcGVcbiAgICAgKiAgICAgc3RvcmUgcmVmIGZyb20gU3RvcmU6OmFzIG9yIFN0b3JlOmFzXG4gICAgICogQHBhcmFtIHN0YXRlXG4gICAgICogQHBhcmFtIGRhdGFcbiAgICAgKiBAcmV0dXJucyB7U2NvcGV9XG4gICAgICovXG4gICAgbW91bnQoIHN0b3Jlc0xpc3QsIHNuYXBzaG90LCBzdGF0ZSwgZGF0YSApIHtcbiAgICAgICAgaWYgKCBpcy5hcnJheShzdG9yZXNMaXN0KSApIHtcbiAgICAgICAgICAgIHN0b3Jlc0xpc3QuZm9yRWFjaChrID0+IHRoaXMuX21vdW50KGssIHNuYXBzaG90LCBzdGF0ZSwgZGF0YSkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fbW91bnQoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgXG4gICAgX21vdW50KCBpZCwgc25hcHNob3QsIHN0YXRlLCBkYXRhICkge1xuICAgICAgICBsZXQgcmVmLCBzbmFwO1xuICAgICAgICBcbiAgICAgICAgcmVmID0gdGhpcy5wYXJzZVJlZihpZClcbiAgICAgICAgXG4gICAgICAgIGlmICggaWQgPT0gXCIkcGFyZW50XCIgKSByZXR1cm47XG4gICAgICAgIGlmICggIXRoaXMuXy5fc2NvcGVbIHJlZi5zdG9yZUlkIF0gKSB7Ly9hc2sgbWl4ZWQgfHwgcGFyZW50XG4gICAgICAgICAgICBpZiAoIHRoaXMuXy5fbWl4ZWQucmVkdWNlKCggbW91bnRlZCwgY3R4ICkgPT4gKCBtb3VudGVkIHx8IGN0eC5fbW91bnQoaWQsIHNuYXBzaG90LCBzdGF0ZSwgZGF0YSkgKSwgZmFsc2UpIHx8XG4gICAgICAgICAgICAgICAgICF0aGlzLnBhcmVudCApXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyZW50Ll9tb3VudCguLi5hcmd1bWVudHMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbGV0IHN0b3JlID0gdGhpcy5fLl9zY29wZVsgcmVmLnN0b3JlSWQgXSwgdGFza1F1ZXVlID0gW107XG4gICAgICAgICAgICBpZiAoIGlzLnJzU3RvcmUoc3RvcmUucHJvdG90eXBlKSApIHtcbiAgICAgICAgICAgICAgICB0aGlzLl8uX3Njb3BlWyByZWYuc3RvcmVJZCBdID0gbmV3IHN0b3JlKHRoaXMsIHtcbiAgICAgICAgICAgICAgICAgICAgLy9zbmFwc2hvdCxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogcmVmLnN0b3JlSWQsXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLFxuICAgICAgICAgICAgICAgICAgICBkYXRhXG4gICAgICAgICAgICAgICAgfSwgdGFza1F1ZXVlKTtcbiAgICAgICAgICAgICAgICB3aGlsZSAoIHRhc2tRdWV1ZS5sZW5ndGggKSB0YXNrUXVldWUuc2hpZnQoKSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoIGlzLnJzU2NvcGUoc3RvcmUucHJvdG90eXBlKSApIHtcbiAgICAgICAgICAgICAgICBzdG9yZSA9IHRoaXMuXy5fc2NvcGVbIHJlZi5zdG9yZUlkIF0gPSBuZXcgc3RvcmUoeyAkcGFyZW50OiB0aGlzIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IHRoaXMuX2lkICsgJy8nICsgcmVmLnN0b3JlSWQsXG4gICAgICAgICAgICAgICAgICAgIC8vYXV0b0Rlc3Ryb3k6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgLy9wYXJlbnQ6IHRoaXNcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAvL3RoaXMuXy5fc2NvcGVbIHJlZi5zdG9yZUlkIF0ucmV0YWluKFwic2NvcGVkQ2hpbGRTY29wZVwiKTtcbiAgICAgICAgICAgICAgICAvL3RoaXMuX3dhdGNoU3RvcmUocmVmLnN0b3JlSWQpO1xuICAgICAgICAgICAgICAgIGlmICggcmVmLnBhdGgubGVuZ3RoID4gMSApXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuXy5fc2NvcGVbIHJlZi5zdG9yZUlkIF0ubW91bnQocmVmLnBhdGguc2xpY2UoMSkuam9pbignLicpLCBzbmFwc2hvdCwgc3RhdGUsIGRhdGEpXG4gICAgICAgICAgICAgICAgLy9lbHNlIHJldHVybiB0aGlzLl8uX3Njb3BlWyByZWYuc3RvcmVJZCBdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9pZiAoIHNuYXBzaG90ICYmIGlzLnJzU2NvcGUoc3RvcmUpICYmICggc25hcCA9IGtleVdhbGtuR2V0KHNuYXBzaG90LFxuICAgICAgICAgICAgLy8gc3RvcmUuX2lkKSApICYmIHNuYXBbICcvJyBdICkgeyByZXR1cm4gc3RvcmUubW91bnQoT2JqZWN0LmtleXMoc25hcFsgJy8nXG4gICAgICAgICAgICAvLyBdKSkgfSBlbHNlIGlmICggc25hcHNob3QgJiYgaXMucnNTdG9yZShzdG9yZSkgKSBzdG9yZS5yZXN0b3JlKCk7XG4gICAgICAgICAgICBpZiAoIGlzLnJzU3RvcmUoc3RvcmUpICkge1xuICAgICAgICAgICAgICAgIGlmICggc3RhdGUgIT09IHVuZGVmaW5lZCAmJiBkYXRhID09PSB1bmRlZmluZWQgKVxuICAgICAgICAgICAgICAgICAgICBzdG9yZS5zZXRTdGF0ZShzdGF0ZSk7XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoIHN0YXRlICE9PSB1bmRlZmluZWQgKVxuICAgICAgICAgICAgICAgICAgICBzdG9yZS5zdGF0ZSA9IHN0YXRlO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmICggZGF0YSAhPT0gdW5kZWZpbmVkIClcbiAgICAgICAgICAgICAgICAgICAgc3RvcmUucHVzaChkYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX3dhdGNoU3RvcmUocmVmLnN0b3JlSWQpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHRoaXMuXy5fc2NvcGVbIHJlZi5zdG9yZUlkIF07XG4gICAgfVxuICAgIFxuICAgIF93YXRjaFN0b3JlKCBpZCwgc3RhdGUsIGRhdGEgKSB7XG4gICAgICAgIGlmICggIXRoaXMuXy5fbGlzdGVuaW5nWyBpZCBdICYmICFpcy5mbih0aGlzLl8uX3Njb3BlWyBpZCBdKSApIHtcbiAgICAgICAgICAgIC8vaWYgKCBpcy5yc1N0b3JlKHRoaXMuXy5fc2NvcGVbIGlkIF0pICkge1xuICAgICAgICAgICAgIXRoaXMuXy5fc2NvcGVbIGlkIF0uX2F1dG9EZXN0cm95ICYmIHRoaXMuXy5fc2NvcGVbIGlkIF0ucmV0YWluKFwic2NvcGVkXCIpO1xuICAgICAgICAgICAgIXRoaXMuXy5fc2NvcGVbIGlkIF0uaXNTdGFibGUoKSAmJiB0aGlzLndhaXQoaWQpO1xuICAgICAgICAgICAgdGhpcy5fLl9zY29wZVsgaWQgXS5vbihcbiAgICAgICAgICAgICAgICB0aGlzLl8uX2xpc3RlbmluZ1sgaWQgXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgJ2Rlc3Ryb3knIDogcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5fLl9saXN0ZW5pbmdbIGlkIF07XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl8uX3Njb3BlWyBpZCBdID0gdGhpcy5fLl9zY29wZVsgaWQgXS5jb25zdHJ1Y3RvcjtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgJ3VwZGF0ZScgIDogcyA9PiB0aGlzLnByb3BhZygpLFxuICAgICAgICAgICAgICAgICAgICAnc3RhYmxlJyAgOiBzID0+IHRoaXMucmVsZWFzZShpZCksXG4gICAgICAgICAgICAgICAgICAgICd1bnN0YWJsZSc6IHMgPT4gdGhpcy53YWl0KGlkKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBNaXggdGFyZ2V0Q3R4IG9uIHRoaXMgc2NvcGVcbiAgICAgKiBNaXhlZCBzY29wZSBwYXJlbnRzIGFyZSBOT1QgbWFwcGVkXG4gICAgICogQHBhcmFtIHRhcmdldEN0eFxuICAgICAqL1xuICAgIG1peGluKCB0YXJnZXRDdHggKSB7XG4gICAgICAgIGxldCBwYXJlbnQgPSB0aGlzLnBhcmVudCwgbGlzdHM7XG4gICAgICAgIHRoaXMuXy5fbWl4ZWQucHVzaCh0YXJnZXRDdHgpXG4gICAgICAgIHRhcmdldEN0eC5yZXRhaW4oXCJtaXhlZFRvXCIpO1xuICAgICAgICBpZiAoICF0YXJnZXRDdHguX3N0YWJsZSApXG4gICAgICAgICAgICB0aGlzLndhaXQodGFyZ2V0Q3R4Ll9pZCk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl8uX21peGVkTGlzdC5wdXNoKGxpc3RzID0ge1xuICAgICAgICAgICAgJ3N0YWJsZScgIDogcyA9PiB0aGlzLnJlbGVhc2UodGFyZ2V0Q3R4Ll9pZCksXG4gICAgICAgICAgICAndW5zdGFibGUnOiBzID0+IHRoaXMud2FpdCh0YXJnZXRDdHguX2lkKSxcbiAgICAgICAgICAgICd1cGRhdGUnICA6IHMgPT4gdGhpcy5fcHJvcGFnKClcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmFjdGlvbnMgPSB7fTtcbiAgICAgICAgdGhpcy5zdG9yZXMgID0ge307XG4gICAgICAgIHRoaXMuc3RhdGUgICA9IHt9O1xuICAgICAgICB0aGlzLmRhdGEgICAgPSB7fTtcbiAgICAgICAgdGFyZ2V0Q3R4Lm9uKGxpc3RzKTtcbiAgICAgICAgX19wcm90b19fcHVzaCh0aGlzLCAnYWN0aW9ucycsIHBhcmVudCk7XG4gICAgICAgIF9fcHJvdG9fX3B1c2godGhpcywgJ3N0b3JlcycsIHBhcmVudCk7XG4gICAgICAgIF9fcHJvdG9fX3B1c2godGhpcywgJ3N0YXRlJywgcGFyZW50KTtcbiAgICAgICAgX19wcm90b19fcHVzaCh0aGlzLCAnZGF0YScsIHBhcmVudCk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLnJlbGluayh0aGlzLl8uX3Njb3BlLCB0aGlzLCBmYWxzZSwgdHJ1ZSk7XG4gICAgICAgIHRoaXMuXy5fbWl4ZWQuZm9yRWFjaChcbiAgICAgICAgICAgIGN0eCA9PiB7XG4gICAgICAgICAgICAgICAgX19wcm90b19fcHVzaCh0aGlzLCAnYWN0aW9ucycpO1xuICAgICAgICAgICAgICAgIF9fcHJvdG9fX3B1c2godGhpcywgJ3N0b3JlcycpO1xuICAgICAgICAgICAgICAgIF9fcHJvdG9fX3B1c2godGhpcywgJ3N0YXRlJyk7XG4gICAgICAgICAgICAgICAgX19wcm90b19fcHVzaCh0aGlzLCAnZGF0YScpO1xuICAgICAgICAgICAgICAgIGN0eC5yZWxpbmsoY3R4Ll8uX3Njb3BlLCB0aGlzLCB0cnVlLCB0cnVlKVxuICAgICAgICAgICAgfVxuICAgICAgICApXG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIFJlZ2lzdGVyIHN0b3JlcyBpbiBzdG9yZXNNYXAgJiBsaW5rIHRoZW0gaW4gdGhlIHByb3Rvc1xuICAgICAqIEBwYXJhbSBzdG9yZXNNYXBcbiAgICAgKiBAcGFyYW0gc3RhdGVcbiAgICAgKiBAcGFyYW0gZGF0YVxuICAgICAqL1xuICAgIHJlZ2lzdGVyKCBzdG9yZXNNYXAsIHN0YXRlID0ge30sIGRhdGEgPSB7fSApIHtcbiAgICAgICAgdGhpcy5yZWxpbmsoc3RvcmVzTWFwLCB0aGlzLCBmYWxzZSwgZmFsc2UpO1xuICAgICAgICBPYmplY3Qua2V5cyhzdG9yZXNNYXApLmZvckVhY2goXG4gICAgICAgICAgICBpZCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCBpZCA9PSBcIiRwYXJlbnRcIiApIHJldHVybjtcbiAgICAgICAgICAgICAgICBpZiAoIHN0b3Jlc01hcFsgaWQgXS5zaW5nbGV0b24gfHwgKCBpcy5mbihzdG9yZXNNYXBbIGlkIF0pICYmICggc3RhdGVbIGlkIF0gfHwgZGF0YVsgaWQgXSApICkgKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX21vdW50KGlkLCB1bmRlZmluZWQsIHN0YXRlWyBpZCBdLCBkYXRhWyBpZCBdKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICggc3RhdGVbIGlkIF0gfHwgZGF0YVsgaWQgXSApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBkYXRhWyBpZCBdICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBzdGF0ZVsgaWQgXSApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9yZXNbIGlkIF0uc3RhdGUgPSBzdGF0ZVsgaWQgXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcmVzWyBpZCBdLnB1c2goZGF0YVsgaWQgXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoIHN0YXRlWyBpZCBdICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9yZXNbIGlkIF0uc2V0U3RhdGUoc3RhdGVbIGlkIF0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl93YXRjaFN0b3JlKGlkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIClcbiAgICAgICAgXG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIE1hcCBzcmNDdHggc3RvcmUncyBvbiB0YXJnZXRDdHggaGVhZGVycyBwcm90bydzXG4gICAgICogQHBhcmFtIHNyY0N0eFxuICAgICAqIEBwYXJhbSB0YXJnZXRDdHhcbiAgICAgKiBAcGFyYW0gc3RhdGVcbiAgICAgKiBAcGFyYW0gZGF0YVxuICAgICAqL1xuICAgIHJlbGluayggc3JjQ3R4LCB0YXJnZXRDdHggPSB0aGlzLCBleHRlcm5hbCwgZm9yY2UgKSB7XG4gICAgICAgIGxldCBsY3R4ID0gdGFyZ2V0Q3R4Ll8uc3RvcmVzLnByb3RvdHlwZTtcbiAgICAgICAgT2JqZWN0LmtleXMoc3JjQ3R4KVxuICAgICAgICAgICAgICAuZm9yRWFjaChcbiAgICAgICAgICAgICAgICAgIGlkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoICFmb3JjZSAmJiB0YXJnZXRDdHguXy5fc2NvcGVbIGlkIF0gPT09IHNyY0N0eFsgaWQgXSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0Q3R4Ll8uX3Njb3BlWyBpZCBdICYmICggdGFyZ2V0Q3R4Ll8uX3Njb3BlWyBpZCBdLmNvbnN0cnVjdG9yID09PSBzcmNDdHhbIGlkIF0gKSApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoICFmb3JjZSAmJiB0YXJnZXRDdHguXy5fc2NvcGVbIGlkIF0gKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmICggIWV4dGVybmFsICYmICFpcy5mbih0YXJnZXRDdHguXy5fc2NvcGVbIGlkIF0pICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5pbmZvKFwiUmVzY29wZSBTdG9yZSA6IFwiLCBpZCwgXCIgYWxyZWFkeSBleGlzdCBpbiB0aGlzIHNjb3BlICEgKCBIb3Qgc3dpdGNoaW5nIHRoZSBzdG9yZSApXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRtcCAgICAgICAgICAgICAgICAgID0gdGFyZ2V0Q3R4Ll8uX3Njb3BlWyBpZCBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0Q3R4Ll8uX3Njb3BlWyBpZCBdID0gdGFyZ2V0Q3R4Ll8uX3Njb3BlWyBpZCBdLmNvbnN0cnVjdG9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbW91bnQoaWQsIG51bGwsIHRtcC5zdGF0ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bXAuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy90YXJnZXRDdHguXy5fc2NvcGVbIGlkIF0uX19wcm90b19fID0gdG1wLl9fcHJvdG9fXztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoICFleHRlcm5hbCAmJiBpcy5mbih0YXJnZXRDdHguXy5fc2NvcGVbIGlkIF0pIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldEN0eC5fLl9zY29wZVsgaWQgXSA9IHNyY0N0eFsgaWQgXTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoICFmb3JjZSAmJiAhZXh0ZXJuYWwgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl8uX3Njb3BlWyBpZCBdID0gc3JjQ3R4WyBpZCBdO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGN0eCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudW1lcmFibGUgIDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldCAgICAgICAgIDogKCkgPT4gdGhpcy5fLl9zY29wZVsgaWQgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoIGlkID09IFwiJHBhcmVudFwiICkgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0Q3R4Ll8uc3RhdGUucHJvdG90eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW51bWVyYWJsZSAgOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0ICAgICAgICAgOiAoKSA9PiAoIHRoaXMuXy5fc2NvcGVbIGlkIF0gJiYgdGhpcy5fLl9zY29wZVsgaWQgXS5zdGF0ZSApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0ICAgICAgICAgOiAoIHYgKSA9PiAoIHRoaXMuX21vdW50KGlkLCB1bmRlZmluZWQsIHYpIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRDdHguXy5kYXRhLnByb3RvdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudW1lcmFibGUgIDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldCAgICAgICAgIDogKCkgPT4gKCB0aGlzLl8uX3Njb3BlWyBpZCBdICYmIHRoaXMuXy5fc2NvcGVbIGlkIF0uZGF0YSApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0ICAgICAgICAgOiAoIHYgKSA9PiAoIHRoaXMuX21vdW50KGlkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdikgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICBsZXQgYWN0aW9ucyAgICAgICA9IHNyY0N0eFsgaWQgXSBpbnN0YW5jZW9mIFNjb3BlLlN0b3JlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHNyY0N0eFsgaWQgXS5jb25zdHJ1Y3Rvci5hY3Rpb25zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHNyY0N0eFsgaWQgXS5hY3Rpb25zLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVBY3Rpb25zID0gdGFyZ2V0Q3R4Ll8uYWN0aW9ucy5wcm90b3R5cGU7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKCBpcy5yc1Njb3BlKHRoaXMuXy5fc2NvcGVbIGlkIF0ucHJvdG90eXBlKSApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX21vdW50KGlkKTtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoIGlzLnJzU2NvcGUodGhpcy5fLl9zY29wZVsgaWQgXSkgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZUFjdGlvbnNbIGlkIF0gPSB0aGlzLl8uX3Njb3BlWyBpZCBdLmFjdGlvbnM7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIGlmICggIWlzLnJzU3RvcmUodGhpcy5fLl9zY29wZVsgaWQgXSkgJiYgIWlzLnJzU3RvcmUodGhpcy5fLl9zY29wZVsgaWQgXS5wcm90b3R5cGUpIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbnMgJiZcbiAgICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhhY3Rpb25zKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5mb3JFYWNoKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoIGFjdCApID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICggYWN0aXZlQWN0aW9ucy5oYXNPd25Qcm9wZXJ0eShhY3QpIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVBY3Rpb25zWyBhY3QgXS5fX3RhcmdldFN0b3JlcysrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlQWN0aW9uc1sgYWN0IF0gICAgICAgICAgICAgICAgPSB0aGlzLmRpc3BhdGNoLmJpbmQodGhpcywgYWN0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVBY3Rpb25zWyBhY3QgXS5fX3RhcmdldFN0b3JlcyA9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIClcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogQmluZCBzdG9yZXMgZnJvbSB0aGlzIHNjb3BlLCBoaXMgcGFyZW50cyBhbmQgbWl4ZWQgc2NvcGVcbiAgICAgKlxuICAgICAqIEBwYXJhbSBvYmoge1JlYWN0LkNvbXBvbmVudHxTdG9yZXxmdW5jdGlvbn1cbiAgICAgKiBAcGFyYW0ga2V5IHtzdHJpbmd9IHN0b3JlcyBrZXlzIHRvIGJpbmQgdXBkYXRlc1xuICAgICAqIEBwYXJhbSBhc1xuICAgICAqIEBwYXJhbSBzZXRJbml0aWFsIHtib29sfSBmYWxzZSB0byBub3QgcHJvcGFnIGluaXRpYWwgdmFsdWUgKGRlZmF1bHQgOiB0cnVlKVxuICAgICAqL1xuICAgIGJpbmQoIG9iaiwga2V5LCBhcywgc2V0SW5pdGlhbCA9IHRydWUgKSB7XG4gICAgICAgIGxldCBsYXN0UmV2cywgZGF0YSwgcmVmS2V5cztcbiAgICAgICAgaWYgKCBrZXkgJiYgIWlzLmFycmF5KGtleSkgKVxuICAgICAgICAgICAga2V5ID0gWyBrZXkgXTtcbiAgICAgICAgXG4gICAgICAgIGlmICggYXMgPT09IGZhbHNlIHx8IGFzID09PSB0cnVlICkge1xuICAgICAgICAgICAgc2V0SW5pdGlhbCA9IGFzO1xuICAgICAgICAgICAgYXMgICAgICAgICA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJlZktleXMgPSBrZXlcbiAgICAgICAgICAgIC5tYXAoaWQgPT4gKCBpcy5zdHJpbmcoaWQpID8gaWQgOiBpZC5uYW1lICkpXG4gICAgICAgICAgICAubWFwKGlkID0+ICggdGhpcy5wYXJzZVJlZihpZCkgKSk7XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgdGhpcy5fLmZvbGxvd2Vycy5wdXNoKFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIG9iaixcbiAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgYXMgfHwgdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIGxhc3RSZXZzID0gcmVmS2V5cy5yZWR1Y2UoKCByZXZzLCByZWYgKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldnNbIHJlZi5zdG9yZUlkIF0gPSByZXZzWyByZWYuc3RvcmVJZCBdIHx8IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldiA6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICByZWZzOiBbXVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICByZXZzWyByZWYuc3RvcmVJZCBdLnJlZnMucHVzaChyZWYpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmV2cztcbiAgICAgICAgICAgICAgICB9LCB7fSlcbiAgICAgICAgICAgIF0pO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5tb3VudChrZXkpO1xuICAgICAgICB0aGlzLnJldGFpblN0b3JlcyhPYmplY3Qua2V5cyhsYXN0UmV2cyksICdsaXN0ZW5lcnMnKTtcbiAgICAgICAgXG4gICAgICAgIGlmICggc2V0SW5pdGlhbCAmJiB0aGlzLl9zdGFibGUgKSB7XG4gICAgICAgICAgICBkYXRhID0gdGhpcy5nZXRVcGRhdGVzKGxhc3RSZXZzKTtcbiAgICAgICAgICAgIGlmICggIWRhdGEgKSByZXR1cm4gbGFzdFJldnM7XG4gICAgICAgICAgICBpZiAoIHR5cGVvZiBvYmogIT0gXCJmdW5jdGlvblwiICkge1xuICAgICAgICAgICAgICAgIGlmICggYXMgKSBvYmouc2V0U3RhdGUoeyBbIGFzIF06IGRhdGEgfSk7XG4gICAgICAgICAgICAgICAgZWxzZSBvYmouc2V0U3RhdGUoZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBvYmooZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxhc3RSZXZzO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBVbiBiaW5kIHRoaXMgc2NvcGUgb2ZmIHRoZSBnaXZlbiBjb21wb25lbnQta2V5c1xuICAgICAqIEBwYXJhbSBvYmpcbiAgICAgKiBAcGFyYW0ga2V5XG4gICAgICogQHJldHVybnMge0FycmF5LjwqPn1cbiAgICAgKi9cbiAgICB1bkJpbmQoIG9iaiwga2V5LCBhcyApIHtcbiAgICAgICAgdmFyIGZvbGxvd2VycyA9IHRoaXMuXy5mb2xsb3dlcnMsXG4gICAgICAgICAgICBpICAgICAgICAgPSBmb2xsb3dlcnMgJiYgZm9sbG93ZXJzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBmb2xsb3dlcnMgJiYgaS0tIClcbiAgICAgICAgICAgIGlmICggZm9sbG93ZXJzWyBpIF1bIDAgXSA9PT0gb2JqICYmICggJycgKyBmb2xsb3dlcnNbIGkgXVsgMSBdICkgPT0gKCAnJyArIGtleSApICYmXG4gICAgICAgICAgICAgICAgIGZvbGxvd2Vyc1sgaSBdWyAyIF0gPT0gYXMgKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kaXNwb3NlU3RvcmVzKE9iamVjdC5rZXlzKGZvbGxvd2Vyc1sgaSBdWyAzIF0pLCAnbGlzdGVuZXJzJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZvbGxvd2Vycy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIE1vdW50IHRoZSBzdG9yZXMgaW4gc3RvcmVzTGlzdCBmcm9tIHRoaXMgc2NvcGUsIGl0cyBwYXJlbnRzIGFuZCBtaXhlZCBzY29wZVxuICAgICAqIEJpbmQgdGhlbSB0byAndG8nXG4gICAgICogSG9vayAndG8nIHNvIGl0IHdpbGwgYXV0byB1bmJpbmQgb24gJ2Rlc3Ryb3knIG9yICdjb21wb25lbnRXaWxsVW5tb3VudCdcbiAgICAgKiBAcGFyYW0gdG9cbiAgICAgKiBAcGFyYW0gc3RvcmVzTGlzdFxuICAgICAqIEBwYXJhbSBiaW5kXG4gICAgICogQHJldHVybnMge09iamVjdH0gSW5pdGlhbCBvdXRwdXRzIG9mIHRoZSBzdG9yZXMgaW4gJ3N0b3Jlc0xpc3QnXG4gICAgICovXG4gICAgbWFwKCB0bywgc3RvcmVzTGlzdCwgYmluZCA9IHRydWUsIHJldk1hcCApIHtcbiAgICAgICAgbGV0IFN0b3JlICAgPSB0aGlzLmNvbnN0cnVjdG9yLlN0b3JlO1xuICAgICAgICBzdG9yZXNMaXN0ICA9IGlzLmFycmF5KHN0b3Jlc0xpc3QpID8gc3RvcmVzTGlzdCA6IFsgc3RvcmVzTGlzdCBdO1xuICAgICAgICBsZXQgcmVmTGlzdCA9IHN0b3Jlc0xpc3QubWFwKHRoaXMucGFyc2VSZWYpO1xuICAgICAgICB0aGlzLm1vdW50KHN0b3Jlc0xpc3QpO1xuICAgICAgICBpZiAoIGJpbmQgJiYgdG8gaW5zdGFuY2VvZiBTdG9yZSApIHtcbiAgICAgICAgICAgIFN0b3JlLm1hcCh0bywgc3RvcmVzTGlzdCwgdGhpcywgdGhpcywgZmFsc2UpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoIGJpbmQgKSB7XG4gICAgICAgICAgICB0aGlzLmJpbmQodG8sIHN0b3Jlc0xpc3QsIHVuZGVmaW5lZCwgZmFsc2UpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBsZXQgbWl4ZWRDV1VubW91bnQsXG4gICAgICAgICAgICAgICAgdW5Nb3VudEtleSA9IHRvLmlzUmVhY3RDb21wb25lbnQgPyBcImNvbXBvbmVudFdpbGxVbm1vdW50XCIgOiBcImRlc3Ryb3lcIjtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKCB0by5oYXNPd25Qcm9wZXJ0eSh1bk1vdW50S2V5KSApIHtcbiAgICAgICAgICAgICAgICBtaXhlZENXVW5tb3VudCA9IHRvWyB1bk1vdW50S2V5IF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRvWyB1bk1vdW50S2V5IF0gPSAoIC4uLmFyZ3ogKSA9PiB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHRvWyB1bk1vdW50S2V5IF07XG4gICAgICAgICAgICAgICAgaWYgKCBtaXhlZENXVW5tb3VudCApXG4gICAgICAgICAgICAgICAgICAgIHRvWyB1bk1vdW50S2V5IF0gPSBtaXhlZENXVW5tb3VudDtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB0aGlzLnVuQmluZCh0bywgc3RvcmVzTGlzdCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRvWyB1bk1vdW50S2V5IF0gJiYgdG9bIHVuTW91bnRLZXkgXSguLi5hcmd6KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXZNYXAgJiYgdGhpcy5nZXRVcGRhdGVzKHJldk1hcCkgfHwgcmVmTGlzdC5yZWR1Y2UoKCBkYXRhLCByZWYgKSA9PiB7XG4gICAgICAgICAgICB3YWxrblNldChkYXRhLCByZWYuYWxpYXMgfHwgcmVmLnBhdGgsIHRoaXMucmV0cmlldmUocmVmLnBhdGgpKVxuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH0sIHt9KTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogR2V0IGN1cnJlbnQgZGF0YSB2YWx1ZSBmcm9tIGpzb24gcGF0aFxuICAgICAqIEBwYXJhbSBwYXRoXG4gICAgICogQHJldHVybnMge3N0cmluZ3wqfVxuICAgICAqL1xuICAgIHJldHJpZXZlKCBwYXRoID0gXCJcIiApIHtcbiAgICAgICAgcGF0aCA9IGlzLnN0cmluZyhwYXRoKSA/IHBhdGguc3BsaXQoJy4nKSA6IHBhdGg7XG4gICAgICAgIHJldHVybiBwYXRoICYmXG4gICAgICAgICAgICAgICB0aGlzLnN0b3Jlc1sgcGF0aFsgMCBdIF0gJiZcbiAgICAgICAgICAgICAgIHRoaXMuc3RvcmVzWyBwYXRoWyAwIF0gXS5yZXRyaWV2ZSAmJlxuICAgICAgICAgICAgICAgdGhpcy5zdG9yZXNbIHBhdGhbIDAgXSBdLnJldHJpZXZlKHBhdGguc2xpY2UoMSkpO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBHZXQgY3VycmVudCBzdG9yZSBmcm9tIGpzb24gcGF0aFxuICAgICAqIEBwYXJhbSBwYXRoXG4gICAgICogQHJldHVybnMge3N0cmluZ3wqfVxuICAgICAqL1xuICAgIHJldHJpZXZlU3RvcmUoIHBhdGggPSBcIlwiICkge1xuICAgICAgICBwYXRoID0gaXMuc3RyaW5nKHBhdGgpID8gcGF0aC5zcGxpdCgnLicpIDogcGF0aDtcbiAgICAgICAgcmV0dXJuIHBhdGhcbiAgICAgICAgICAgICAgICYmIHBhdGgubGVuZ3RoXG4gICAgICAgICAgICAgICAmJiAoXG4gICAgICAgICAgICAgICBwYXRoLmxlbmd0aCAhPSAxICYmIHRoaXMuc3RvcmVzWyBwYXRoWyAwIF0gXS5yZXRyaWV2ZVN0b3JlXG4gICAgICAgICAgICAgICA/IHRoaXMuc3RvcmVzWyBwYXRoWyAwIF0gXS5yZXRyaWV2ZVN0b3JlKHBhdGguc2xpY2UoMSkpXG4gICAgICAgICAgICAgICA6IHBhdGgubGVuZ3RoID09IDEgJiYgdGhpcy5zdG9yZXNbIHBhdGhbIDAgXSBdXG4gICAgICAgICAgICAgICApO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBHZXQgb3IgdXBkYXRlIHN0b3Jlc1Jldk1hcCdzIHJldmlzaW9uc1xuICAgICAqIEBwYXJhbSBzdG9yZXNSZXZNYXBcbiAgICAgKiBAcGFyYW0gbG9jYWxcbiAgICAgKiBAcmV0dXJucyB7e319XG4gICAgICovXG4gICAgZ2V0U3RvcmVzUmV2cyggc3RvcmVzUmV2TWFwID0ge30sIGxvY2FsICkge1xuICAgICAgICBsZXQgY3R4ID0gdGhpcy5fLl9zY29wZTtcbiAgICAgICAgaWYgKCAhc3RvcmVzUmV2TWFwICkge1xuICAgICAgICAgICAgc3RvcmVzUmV2TWFwID0ge307XG4gICAgICAgIH1cbiAgICAgICAgT2JqZWN0LmtleXMoY3R4KS5mb3JFYWNoKFxuICAgICAgICAgICAgaWQgPT4ge1xuICAgICAgICAgICAgICAgIGlmICggaWQgPT0gXCIkcGFyZW50XCIgKSByZXR1cm47XG4gICAgICAgICAgICAgICAgaWYgKCAhaXMuZm4oY3R4WyBpZCBdKVxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICBzdG9yZXNSZXZNYXBbIGlkIF0gPSBjdHhbIGlkIF0uX3JldjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoICFzdG9yZXNSZXZNYXAuaGFzT3duUHJvcGVydHkoaWQpIClcbiAgICAgICAgICAgICAgICAgICAgc3RvcmVzUmV2TWFwWyBpZCBdID0gZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgaWYgKCAhbG9jYWwgKSB7XG4gICAgICAgICAgICB0aGlzLl8uX21peGVkLnJlZHVjZSgoIHVwZGF0ZWQsIGN0eCApID0+ICggY3R4LmdldFN0b3Jlc1JldnMoc3RvcmVzUmV2TWFwKSwgc3RvcmVzUmV2TWFwICksIHN0b3Jlc1Jldk1hcCk7XG4gICAgICAgICAgICB0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC5nZXRTdG9yZXNSZXZzKHN0b3Jlc1Jldk1hcCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0b3Jlc1Jldk1hcDtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogR2V0IHVwZGF0ZWQgb3V0cHV0IGJhc2luZyBzdG9yZXNSZXZNYXAncyByZXZpc2lvbnMuXG4gICAgICogSWYgYSBzdG9yZSBpbiAnc3RvcmVzUmV2TWFwJyB3YXMgdXBkYXRlZDsgYWRkIGl0IHRvICdvdXRwdXQnICYgdXBkYXRlIHN0b3Jlc1Jldk1hcFxuICAgICAqIEBwYXJhbSBzdG9yZXNSZXZNYXBcbiAgICAgKiBAcGFyYW0gb3V0cHV0XG4gICAgICogQHBhcmFtIHVwZGF0ZWRcbiAgICAgKiBAcmV0dXJucyB7Knx7fX1cbiAgICAgKi9cbiAgICBnZXRSZWZzVXBkYXRlcyggcmVmcywgcmV2TWFwLCBvdXRwdXQgKSB7XG4gICAgICAgIFxuICAgICAgICByZXZNYXAgPSByZXZNYXAgfHwgcmVmc1xuICAgICAgICAgICAgLm1hcChpZCA9PiAoIGlzLnN0cmluZyhpZCkgPyBpZCA6IGlkLm5hbWUgKSlcbiAgICAgICAgICAgIC5tYXAoaWQgPT4gKCB0aGlzLnBhcnNlUmVmKGlkKSApKVxuICAgICAgICAgICAgLnJlZHVjZSgoIHJldnMsIHJlZiApID0+IHtcbiAgICAgICAgICAgICAgICByZXZzWyByZWYuc3RvcmVJZCBdID0gcmV2c1sgcmVmLnN0b3JlSWQgXSB8fCB7XG4gICAgICAgICAgICAgICAgICAgIHJldiA6IDAsXG4gICAgICAgICAgICAgICAgICAgIHJlZnM6IFtdXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICByZXZzWyByZWYuc3RvcmVJZCBdLnJlZnMucHVzaChyZWYpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXZzO1xuICAgICAgICAgICAgfSwge30pO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VXBkYXRlcyhyZXZNYXAsIG91dHB1dClcbiAgICAgICAgXG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIEdldCBvciB1cGRhdGUgb3V0cHV0IGJhc2luZyBzdG9yZXNSZXZNYXAncyByZXZpc2lvbnMuXG4gICAgICogSWYgYSBzdG9yZSBpbiAnc3RvcmVzUmV2TWFwJyB3YXMgdXBkYXRlZDsgYWRkIGl0IHRvICdvdXRwdXQnICYgdXBkYXRlIHN0b3Jlc1Jldk1hcFxuICAgICAqIEBwYXJhbSBzdG9yZXNSZXZNYXBcbiAgICAgKiBAcGFyYW0gb3V0cHV0XG4gICAgICogQHBhcmFtIHVwZGF0ZWRcbiAgICAgKiBAcmV0dXJucyB7Knx7fX1cbiAgICAgKi9cbiAgICBnZXRVcGRhdGVzKCBzdG9yZXNSZXZNYXAsIG91dHB1dCwgdXBkYXRlZCApIHtcbiAgICAgICAgbGV0IGN0eCA9IHRoaXMuXy5fc2NvcGU7XG4gICAgICAgIFxuICAgICAgICBvdXRwdXQgPSBvdXRwdXQgfHwge307XG4gICAgICAgIE9iamVjdC5rZXlzKGN0eCkuZm9yRWFjaChcbiAgICAgICAgICAgIGlkID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIGlkID09IFwiJHBhcmVudFwiICkgcmV0dXJuO1xuICAgICAgICAgICAgICAgIGlmICggIW91dHB1dC5oYXNPd25Qcm9wZXJ0eShpZCkgJiYgIWlzLmZuKGN0eFsgaWQgXSlcbiAgICAgICAgICAgICAgICAgICAgICYmICggIXN0b3Jlc1Jldk1hcFxuICAgICAgICAgICAgICAgICAgICAgICAgICB8fCAoIHN0b3Jlc1Jldk1hcC5oYXNPd25Qcm9wZXJ0eShpZCkgJiYgc3RvcmVzUmV2TWFwWyBpZCBdID09PSB1bmRlZmluZWQgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB8fCAhKCAhc3RvcmVzUmV2TWFwLmhhc093blByb3BlcnR5KGlkKSB8fCBjdHhbIGlkIF0uX3JldiA8PSBzdG9yZXNSZXZNYXBbIGlkIF0ucmV2ICkgKVxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlZCAgICAgID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgb3V0cHV0WyBpZCBdID0gdGhpcy5kYXRhWyBpZCBdO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBzdG9yZXNSZXZNYXAgJiYgc3RvcmVzUmV2TWFwLmhhc093blByb3BlcnR5KGlkKSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3Jlc1Jldk1hcFsgaWQgXSAgICAgPSBzdG9yZXNSZXZNYXBbIGlkIF0gfHwgeyByZXY6IDAsIHJlZnM6IFtdIH07XG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9yZXNSZXZNYXBbIGlkIF0ucmV2ID0gY3R4WyBpZCBdLl9yZXY7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9yZXNSZXZNYXBbIGlkIF0ucmVmcy5mb3JFYWNoKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZiA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS53YXJuKFwidXBkYXRlIHJlZiBcIiwgcmVmLnJlZixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5yZXRyaWV2ZShyZWYucGF0aCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXRbIHJlZi5hbGlhcyBdID0gdGhpcy5yZXRyaWV2ZShyZWYucGF0aClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLndhcm4oXCJ1cGRhdGUgXCIsIGlkLCB0aGlzLmRhdGFbaWRdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dFsgaWQgXSA9IHRoaXMuZGF0YVsgaWQgXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHVwZGF0ZWQgPSB0aGlzLl8uX21peGVkLnJlZHVjZVJpZ2h0KCggdXBkYXRlZCwgY3R4ICkgPT4gKCBjdHguZ2V0VXBkYXRlcyhzdG9yZXNSZXZNYXAsIG91dHB1dCwgdXBkYXRlZCkgfHwgdXBkYXRlZCApLCB1cGRhdGVkKTtcbiAgICAgICAgdXBkYXRlZCA9IHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LmdldFVwZGF0ZXMoc3RvcmVzUmV2TWFwLCBvdXRwdXQsIHVwZGF0ZWQpIHx8IHVwZGF0ZWQ7XG4gICAgICAgIHJldHVybiB1cGRhdGVkICYmIG91dHB1dDtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogUmVjdXJzaXZlbHkgZ2V0IGFsbCBjaGlsZCBzY29wZXNcbiAgICAgKiBAcGFyYW0gY2hpbGRzXG4gICAgICogQHJldHVybnMge0FycmF5fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgX2dldEFsbENoaWxkcyggY2hpbGRzID0gW10gKSB7XG4gICAgICAgIGNoaWxkcy5wdXNoKC4uLnRoaXMuXy5jaGlsZFNjb3Blcyk7XG4gICAgICAgIHRoaXMuXy5jaGlsZFNjb3Blcy5mb3JFYWNoKFxuICAgICAgICAgICAgY3R4ID0+IHtcbiAgICAgICAgICAgICAgICBjdHguX2dldEFsbENoaWxkcyhjaGlsZHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gY2hpbGRzO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBTZXJpYWxpemUgYWxsIGFjdGl2ZSBzdG9yZXMgc3RhdGUgJiBkYXRhIGluIGV2ZXJ5IGNoaWxkcyAmIG1peGVkIHNjb3Blc1xuICAgICAqXG4gICAgICogU2NvcGVzIHdpdGhvdXQga2V5IG9yIGlkIGFyZSBpZ25vcmVkXG4gICAgICogQHBhcmFtIG91dHB1dFxuICAgICAqIEByZXR1cm5zIHt7fX1cbiAgICAgKi9cbiAgICBzZXJpYWxpemUoIGNmZyA9IHt9LCBvdXRwdXQgPSB7fSApIHtcbiAgICAgICAgbGV0IGN0eCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSB0aGlzLl8uX3Njb3BlLFxuICAgICAgICAgICAgeyBhbGlhcywgd2l0aENoaWxkcyA9IHRydWUsIHdpdGhQYXJlbnRzLCB3aXRoTWl4ZWQgPSB0cnVlLCBub3JlZnMgfSA9IGNmZztcbiAgICAgICAgXG4gICAgICAgIGlmICgga2V5V2Fsa25HZXQob3V0cHV0LCB0aGlzLl9pZCkgKVxuICAgICAgICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICAgICAgXG4gICAgICAgIC8vQHRvZG8gOiBiZXR0ZXIgc2VyaWFsaXplIG1ldGhvZFxuICAgICAgICBrZXlXYWxrblNldChvdXRwdXQsIHRoaXMuX2lkLCB7fSk7XG4gICAgICAgIFxuICAgICAgICBPYmplY3Qua2V5cyhjdHgpLmZvckVhY2goXG4gICAgICAgICAgICBpZCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCBpZCA9PSBcIiRwYXJlbnRcIiB8fCBpcy5mbihjdHhbIGlkIF0pIClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGN0eFsgaWQgXS5zZXJpYWxpemUoY2ZnLCBvdXRwdXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICApXG4gICAgICAgIFxuICAgICAgICB3aXRoUGFyZW50cyAmJiB0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC5zZXJpYWxpemUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpdGhDaGlsZCAgOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRoUGFyZW50czogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRoTWl4ZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9yZWZzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBvdXRwdXQpO1xuICAgICAgICBcbiAgICAgICAgd2l0aENoaWxkcyAmJiB0aGlzLl8uY2hpbGRTY29wZXMuZm9yRWFjaChcbiAgICAgICAgICAgIGN0eCA9PiB7XG4gICAgICAgICAgICAgICAgIWN0eC5fLmlzTG9jYWxJZCAmJiBjdHguc2VyaWFsaXplKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpdGhDaGlsZCAgOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aFBhcmVudHM6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aE1peGVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9yZWZzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIG91dHB1dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIFxuICAgICAgICB3aXRoTWl4ZWQgJiYgdGhpcy5fLl9taXhlZC5mb3JFYWNoKFxuICAgICAgICAgICAgY3R4ID0+IHtcbiAgICAgICAgICAgICAgICAhY3R4Ll8uaXNMb2NhbElkICYmIGN0eC5zZXJpYWxpemUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aENoaWxkICA6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aFBhcmVudHM6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aE1peGVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9yZWZzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIG91dHB1dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIFxuICAgICAgICBpZiAoIGFsaWFzICkge1xuICAgICAgICAgICAgb3V0cHV0ID0gT2JqZWN0LmtleXMob3V0cHV0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlZHVjZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoIGgsIGsgKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhbIGsuc3RhcnRzV2l0aChhbGlhcylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBhbGlhcyArIGsuc3Vic3RyKGFsaWFzLmxlbmd0aClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBrIF0gPSBvdXRwdXRbIGsgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogUmVzdG9yZSBzdGF0ZSAmIGRhdGEgZnJvbSB0aGUgc2VyaWFsaXplIGZuXG4gICAgICogQHBhcmFtIHNuYXBzaG90XG4gICAgICogQHBhcmFtIGZvcmNlXG4gICAgICovXG4gICAgcmVzdG9yZSggc25hcHNob3QsIGNmZyA9IHt9LCBmb3JjZSA9IGlzLmJvb2woY2ZnKSAmJiBjZmcgKSB7XG4gICAgICAgIGxldCBjdHggID0gdGhpcy5fLl9zY29wZSwgc25hcDtcbiAgICAgICAgc25hcHNob3QgPSBzbmFwc2hvdFxuICAgICAgICAgICAgICAgICAgICYmIGtleVdhbGtuR2V0KHNuYXBzaG90LCB0aGlzLl9pZClcbiAgICAgICAgICAgICAgICAgICB8fCB0aGlzLnRha2VTbmFwc2hvdEJ5S2V5KHRoaXMuX2lkKTtcbiAgICAgICAgXG4gICAgICAgIGlmICggIXNuYXBzaG90IClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuXy5zbmFwc2hvdCA9IHNuYXBzaG90O1xuICAgICAgICBcbiAgICAgICAgc25hcCA9IHNuYXBzaG90WyAnLycgXTtcbiAgICAgICAgXG4gICAgICAgIHNuYXAgJiYgT2JqZWN0LmtleXMoc25hcCkuZm9yRWFjaChcbiAgICAgICAgICAgIG5hbWUgPT4ge1xuICAgICAgICAgICAgICAgIGlmICggbmFtZSA9PSBcIiRwYXJlbnRcIiApIHJldHVybjtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAoIGN0eFsgbmFtZSBdICkge1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBmb3JjZSAmJiAhaXMuZm4oY3R4WyBuYW1lIF0pIClcbiAgICAgICAgICAgICAgICAgICAgICAgIGN0eFsgbmFtZSBdLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX21vdW50KG5hbWUpOy8vIHF1aWV0XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICApXG4gICAgICAgIFxuICAgICAgICB0aGlzLl8uX21peGVkLmZvckVhY2goXG4gICAgICAgICAgICBjdHggPT4ge1xuICAgICAgICAgICAgICAgICFjdHguXy5pc0xvY2FsSWQgJiYgY3R4LnJlc3RvcmUodW5kZWZpbmVkLCBmb3JjZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl8uY2hpbGRTY29wZXMuZm9yRWFjaChcbiAgICAgICAgICAgIGN0eCA9PiB7XG4gICAgICAgICAgICAgICAgIWN0eC5fLmlzTG9jYWxJZCAmJiBjdHgucmVzdG9yZSh1bmRlZmluZWQsIGZvcmNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgXG4gICAgfVxuICAgIFxuICAgIGdldFNuYXBzaG90QnlLZXkoIGtleSwgbG9jYWwgKSB7XG4gICAgICAgIC8vIG9ubHkgaGF2ZSB0aGUgbG9jYWwgc25hcFxuICAgICAgICBpZiAoIHRoaXMuXy5zbmFwc2hvdCAmJiBrZXkuc3RhcnRzV2l0aCh0aGlzLl9pZCkgKSB7XG4gICAgICAgICAgICBsZXQgb2JqID0ga2V5V2Fsa25HZXQodGhpcy5fLnNuYXBzaG90LCBrZXkuc3Vic3RyKHRoaXMuX2lkLmxlbmd0aCkpXG4gICAgICAgICAgICAvL2lmICggb2JqICkge1xuICAgICAgICAgICAgLy8gICAgdGhpcy5kZWxldGVTbmFwc2hvdEJ5S2V5KGtleSk7XG4gICAgICAgICAgICAvL31cbiAgICAgICAgICAgIHJldHVybiBvYmo7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSByZXR1cm4gIWxvY2FsXG4gICAgICAgICAgICAgICAgICAgICYmIHRoaXMucGFyZW50XG4gICAgICAgICAgICAgICAgICAgICYmIHRoaXMucGFyZW50LmdldFNuYXBzaG90QnlLZXkoa2V5KVxuICAgICAgICAgICAgICAgICAgICB8fFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3Jlcy4kcGFyZW50XG4gICAgICAgICAgICAgICAgICAgICYmIHRoaXMuc3RvcmVzLiRwYXJlbnQuZ2V0U25hcHNob3RCeUtleShrZXkpO1xuICAgICAgICBcbiAgICB9XG4gICAgXG4gICAgZ2V0U25hcHNob3RCeUtleUV4dCggc25hcHNob3QsIGtleSwgbG9jYWwgKSB7XG4gICAgICAgIC8vIG9ubHkgaGF2ZSB0aGUgbG9jYWwgc25hcFxuICAgICAgICBpZiAoIHNuYXBzaG90ICkge1xuICAgICAgICAgICAgbGV0IG9iaiA9IGtleVdhbGtuR2V0KHNuYXBzaG90LCBrZXkpXG4gICAgICAgICAgICByZXR1cm4gb2JqO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cbiAgICBcbiAgICB0YWtlU25hcHNob3RCeUtleSgga2V5LCBsb2NhbCApIHtcbiAgICAgICAgaWYgKCB0aGlzLl8uc25hcHNob3QgJiYga2V5LnN0YXJ0c1dpdGgodGhpcy5faWQpICkge1xuICAgICAgICAgICAgbGV0IG9iaiA9IGtleVdhbGtuR2V0KHRoaXMuXy5zbmFwc2hvdCwga2V5LnN1YnN0cih0aGlzLl9pZC5sZW5ndGgpKVxuICAgICAgICAgICAgaWYgKCBvYmogKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kZWxldGVTbmFwc2hvdEJ5S2V5KGtleSwgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gb2JqO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgcmV0dXJuICFsb2NhbFxuICAgICAgICAgICAgICAgICAgICAmJiB0aGlzLnBhcmVudFxuICAgICAgICAgICAgICAgICAgICAmJiB0aGlzLnBhcmVudC50YWtlU25hcHNob3RCeUtleShrZXkpXG4gICAgICAgICAgICAgICAgICAgIHx8XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcmVzLiRwYXJlbnRcbiAgICAgICAgICAgICAgICAgICAgJiYgdGhpcy5zdG9yZXMuJHBhcmVudC50YWtlU25hcHNob3RCeUtleShrZXkpO1xuICAgIH1cbiAgICBcbiAgICBkZWxldGVTbmFwc2hvdEJ5S2V5KCBrZXksIGxvY2FsICkge1xuICAgICAgICBpZiAoIHRoaXMuXy5zbmFwc2hvdCAmJiBrZXkuc3RhcnRzV2l0aCh0aGlzLl9pZCkgKSB7XG4gICAgICAgICAgICBsZXQgb2JqID0ga2V5V2Fsa25HZXQodGhpcy5fLnNuYXBzaG90LCBrZXkuc3Vic3RyKHRoaXMuX2lkLmxlbmd0aCkucmVwbGFjZSgvXiguKltcXD58XFwvXSlbXlxcPnxcXC9dKyQvaWcsICckMScpKVxuICAgICAgICAgICAgaWYgKCBvYmogKVxuICAgICAgICAgICAgICAgIGRlbGV0ZSBvYmpbIGtleS5yZXBsYWNlKC9eLipbXFw+fFxcL10oW15cXD58XFwvXSspJC9pZywgJyQxJykgXVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiAhbG9jYWxcbiAgICAgICAgICAgICAgICYmIHRoaXMucGFyZW50XG4gICAgICAgICAgICAgICAmJiB0aGlzLnBhcmVudC5kZWxldGVTbmFwc2hvdEJ5S2V5KGtleSlcbiAgICAgICAgICAgICAgIHx8XG4gICAgICAgICAgICAgICB0aGlzLnN0b3Jlcy4kcGFyZW50XG4gICAgICAgICAgICAgICAmJiB0aGlzLnN0b3Jlcy4kcGFyZW50LmRlbGV0ZVNuYXBzaG90QnlLZXkoa2V5KTtcbiAgICB9XG4gICAgXG4gICAgc2V0U3RhdGUoIHBTdGF0ZSApIHtcbiAgICAgICAgT2JqZWN0LmtleXMocFN0YXRlKVxuICAgICAgICAgICAgICAuZm9yRWFjaChrID0+ICggdGhpcy5zdGF0ZVsgayBdID0gcFN0YXRlWyBrIF0gKSlcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogZ2V0IGEgcGFyc2VkIHJlZmVyZW5jZVxuICAgICAqIEBwYXJhbSBfcmVmXG4gICAgICogQHJldHVybnMge3tzdG9yZUlkLCBwYXRoLCBhbGlhczogKiwgcmVmOiAqfX1cbiAgICAgKi9cbiAgICBwYXJzZVJlZiggX3JlZiApIHtcbiAgICAgICAgaWYgKCB0eXBlb2YgX3JlZiAhPT0gJ3N0cmluZycgKSB7XG4gICAgICAgICAgICB0aGlzLnJlZ2lzdGVyKHsgWyBfcmVmLm5hbWUgXTogX3JlZi5zdG9yZSB9KTtcbiAgICAgICAgICAgIF9yZWYgPSBfcmVmLm5hbWU7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHJlZiAgPSBfcmVmLnNwbGl0KCc6Jyk7XG4gICAgICAgIHJlZlsgMCBdID0gcmVmWyAwIF0uc3BsaXQoJy4nKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHN0b3JlSWQ6IHJlZlsgMCBdWyAwIF0sXG4gICAgICAgICAgICBwYXRoICAgOiByZWZbIDAgXSxcbiAgICAgICAgICAgIGFsaWFzICA6IHJlZlsgMSBdIHx8IHJlZlsgMCBdWyByZWZbIDAgXS5sZW5ndGggLSAxIF0sXG4gICAgICAgICAgICByZWYgICAgOiBfcmVmXG4gICAgICAgIH07XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIERpc3BhdGNoIGFuIGFjdGlvbiB0byB0aGUgdG9wIHBhcmVudCAmIG1peGVkIHNjb3BlcywgaW4gYWxsIHN0b3Jlc1xuICAgICAqXG4gICAgICogQHBhcmFtIGFjdGlvblxuICAgICAqIEBwYXJhbSBkYXRhXG4gICAgICogQHJldHVybnMge1Njb3BlfVxuICAgICAqL1xuICAgIGRpc3BhdGNoKCBhY3Rpb24sIC4uLmFyZ3ogKSB7XG4gICAgICAgIGlmICggdGhpcy5kZWFkICkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiRGlzcGF0Y2ggd2FzIGNhbGxlZCBvbiBhIGRlYWQgc2NvcGUsIGNoZWNrIHlvdSdyZSBhc3luYyBmdW5jdGlvbnMgaW4gdGhpcyBzdGFjay4uLlwiLCAoIG5ldyBFcnJvcigpICkuc3RhY2spO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCBiQWN0cyA9IHRoaXMuXy5fYm91bmRlZEFjdGlvbnM7XG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMuXy5fc2NvcGUpXG4gICAgICAgICAgICAgIC5mb3JFYWNoKFxuICAgICAgICAgICAgICAgICAgaWQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGlmICggaWQgPT0gXCIkcGFyZW50XCIgKSByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKCAhaXMuZm4odGhpcy5fLl9zY29wZVsgaWQgXSkgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl8uX3Njb3BlWyBpZCBdLnRyaWdnZXIoYWN0aW9uLCAuLi5hcmd6KTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgXG4gICAgICAgIGlmICggYkFjdHMgJiYgYkFjdHMudGVzdChhY3Rpb24pIClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuXy5fbWl4ZWQuZm9yRWFjaCgoIGN0eCApID0+ICggY3R4LmRpc3BhdGNoKGFjdGlvbiwgLi4uYXJneikgKSk7XG4gICAgICAgIHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LmRpc3BhdGNoKGFjdGlvbiwgLi4uYXJneik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBcbiAgICAvL1xuICAgIHRyaWdnZXIoKSB7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2goLi4uYXJndW1lbnRzKTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogb25jZSgnc3RhYmxlJywgY2IpXG4gICAgICogQHBhcmFtIG9iaiB7UmVhY3QuQ29tcG9uZW50fFN0b3JlfGZ1bmN0aW9uKVxuICAgICAqIEBwYXJhbSBrZXkge3N0cmluZ30gb3B0aW9uYWwga2V5IHdoZXJlIHRvIG1hcCB0aGUgcHVibGljIHN0YXRlXG4gICAgICovXG4gICAgdGhlbiggY2IgKSB7XG4gICAgICAgIGlmICggdGhpcy5fc3RhYmxlIClcbiAgICAgICAgICAgIHJldHVybiBjYih0aGlzLmRhdGEpO1xuICAgICAgICB0aGlzLm9uY2UoJ3N0YWJsZScsIGUgPT4gY2IodGhpcy5kYXRhKSk7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIENhbGwgcmV0YWluIG9uIHRoZSBzY29wZWQgc3RvcmVzIGJhc2luZyBnaXZlblxuICAgICAqXG4gICAgICogQHBhcmFtIHN0b3Jlc1xuICAgICAqIEBwYXJhbSByZWFzb25cbiAgICAgKi9cbiAgICByZXRhaW5TdG9yZXMoIHN0b3JlcyA9IFtdLCByZWFzb24gKSB7XG4gICAgICAgIHN0b3Jlcy5mb3JFYWNoKFxuICAgICAgICAgICAgaWQgPT4gKCB0aGlzLnN0b3Jlc1sgaWQgXSAmJiB0aGlzLnN0b3Jlc1sgaWQgXS5yZXRhaW4gJiYgdGhpcy5zdG9yZXNbIGlkIF0ucmV0YWluKHJlYXNvbikgKVxuICAgICAgICApXG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIENhbGwgcmV0YWluIG9uIHRoZSBzY29wZWQgc3RvcmVzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc3RvcmVzXG4gICAgICogQHBhcmFtIHJlYXNvblxuICAgICAqL1xuICAgIGRpc3Bvc2VTdG9yZXMoIHN0b3JlcyA9IFtdLCByZWFzb24gKSB7XG4gICAgICAgIHN0b3Jlcy5mb3JFYWNoKFxuICAgICAgICAgICAgaWQgPT4gKCB0aGlzLnN0b3Jlc1sgaWQgXSAmJiB0aGlzLnN0b3Jlc1sgaWQgXS5kaXNwb3NlICYmIHRoaXMuc3RvcmVzWyBpZCBdLmRpc3Bvc2UocmVhc29uKSApXG4gICAgICAgIClcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogS2VlcCB0aGUgc2NvcGUgdW5zdGFibGUgdW50aWwgcmVsZWFzZSBpcyBjYWxsZWRcbiAgICAgKiBAcGFyYW0gcmVhc29uXG4gICAgICovXG4gICAgd2FpdCggcmVhc29uICkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwid2FpdFwiLCByZWFzb24pO1xuICAgICAgICB0aGlzLl9zdGFibGUgJiYgIXRoaXMuX19sb2Nrcy5hbGwgJiYgdGhpcy5lbWl0KFwidW5zdGFibGVcIiwgdGhpcyk7XG4gICAgICAgIHRoaXMuX3N0YWJsZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9fbG9ja3MuYWxsKys7XG4gICAgICAgIGlmICggcmVhc29uICkge1xuICAgICAgICAgICAgdGhpcy5fX2xvY2tzWyByZWFzb24gXSA9IHRoaXMuX19sb2Nrc1sgcmVhc29uIF0gfHwgMDtcbiAgICAgICAgICAgIHRoaXMuX19sb2Nrc1sgcmVhc29uIF0rKztcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBcbiAgICAvKipcbiAgICAgKiBTdGFiaWxpemUgdGhlIHNjb3BlIGlmIG5vIG1vcmUgbG9ja3MgcmVtYWluICh3YWl0IGZuKVxuICAgICAqIEBwYXJhbSByZWFzb25cbiAgICAgKi9cbiAgICByZWxlYXNlKCByZWFzb24gKSB7XG4gICAgICAgIFxuICAgICAgICBpZiAoIHJlYXNvbiApIHtcbiAgICAgICAgICAgIGlmICggdGhpcy5fX2xvY2tzWyByZWFzb24gXSA9PSAwIClcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiUmVsZWFzZSBtb3JlIHRoYW4gbG9ja2luZyAhXCIsIHJlYXNvbik7XG4gICAgICAgICAgICB0aGlzLl9fbG9ja3NbIHJlYXNvbiBdID0gdGhpcy5fX2xvY2tzWyByZWFzb24gXSB8fCAwO1xuICAgICAgICAgICAgdGhpcy5fX2xvY2tzWyByZWFzb24gXS0tO1xuICAgICAgICB9XG4gICAgICAgIGlmICggIXJlYXNvbiAmJiB0aGlzLl9fbG9ja3MuYWxsID09IDAgKVxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlJlbGVhc2UgbW9yZSB0aGFuIGxvY2tpbmcgIVwiKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX19sb2Nrcy5hbGwtLTtcbiAgICAgICAgaWYgKCAhdGhpcy5fX2xvY2tzLmFsbCApIHtcbiAgICAgICAgICAgIHRoaXMuXy5zdGFiaWxpemVyVE0gJiYgY2xlYXJUaW1lb3V0KHRoaXMuXy5zdGFiaWxpemVyVE0pO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLl8uc3RhYmlsaXplclRNID0gc2V0VGltZW91dChcbiAgICAgICAgICAgICAgICBlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fLnN0YWJpbGl6ZXJUTSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIGlmICggdGhpcy5fX2xvY2tzLmFsbCApXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB0aGlzLl8ucHJvcGFnVE0gJiYgY2xlYXJUaW1lb3V0KHRoaXMuXy5wcm9wYWdUTSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3JldisrO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zdGFibGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXQoXCJzdGFibGVcIiwgdGhpcyk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAhdGhpcy5kZWFkICYmIHRoaXMuX3Byb3BhZygpOy8vIHN0YWJpbGl0eSBjYW4gaW5kdWNlIGRlc3Ryb3lcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBQcm9wYWcgc3RvcmVzIHVwZGF0ZXMgYmFzaW5nIHRoZWlycyBsYXN0IHVwZGF0ZXNcbiAgICAgKi9cbiAgICBwcm9wYWcoKSB7XG4gICAgICAgIHRoaXMuXy5wcm9wYWdUTSAmJiBjbGVhclRpbWVvdXQodGhpcy5fLnByb3BhZ1RNKTtcbiAgICAgICAgdGhpcy5fLnByb3BhZ1RNID0gc2V0VGltZW91dChcbiAgICAgICAgICAgIGUgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuXy5wcm9wYWdUTSA9IG51bGw7XG4gICAgICAgICAgICAgICAgdGhpcy5fcHJvcGFnKClcbiAgICAgICAgICAgIH0sIDJcbiAgICAgICAgKTtcbiAgICB9XG4gICAgXG4gICAgX3Byb3BhZygpIHtcbiAgICAgICAgaWYgKCB0aGlzLl8uZm9sbG93ZXJzLmxlbmd0aCApXG4gICAgICAgICAgICB0aGlzLl8uZm9sbG93ZXJzLmZvckVhY2goKCB7IDA6IG9iaiwgMToga2V5LCAyOiBhcywgMzogbGFzdFJldnMsIDM6IHJlbWFwcyB9ICkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBkYXRhID0gdGhpcy5nZXRVcGRhdGVzKGxhc3RSZXZzKTtcbiAgICAgICAgICAgICAgICBpZiAoICFkYXRhICkgcmV0dXJuO1xuICAgICAgICAgICAgICAgIGlmICggdHlwZW9mIG9iaiAhPSBcImZ1bmN0aW9uXCIgKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJzZXRTdGF0ZSBcIixvYmosIE9iamVjdC5rZXlzKGRhdGEpKVxuICAgICAgICAgICAgICAgICAgICBpZiAoIGFzICkgb2JqLnNldFN0YXRlKHsgWyBhcyBdOiBkYXRhIH0pO1xuICAgICAgICAgICAgICAgICAgICBlbHNlIG9iai5zZXRTdGF0ZShkYXRhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG9iaihkYXRhLCBsYXN0UmV2cyAmJiBbIC4uLmxhc3RSZXZzIF0gfHwgXCJubyByZXZzXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBsYXN0UmV2cyAmJlxuICAgICAgICAgICAgICAgIC8vIGtleS5mb3JFYWNoKGlkID0+IChsYXN0UmV2c1tpZF0gPSB0aGlzLnN0b3Jlc1tpZF0gJiZcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnN0b3Jlc1tpZF0uX3JldiB8fCAwKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5lbWl0KFwidXBkYXRlXCIsIHRoaXMuZ2V0VXBkYXRlcygpKTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogaXMgc3RhYmxlXG4gICAgICogQHJldHVybnMgYm9vbFxuICAgICAqL1xuICAgIGlzU3RhYmxlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc3RhYmxlO1xuICAgIH1cbiAgICBcbiAgICBfYWRkQ2hpbGQoIGN0eCApIHtcbiAgICAgICAgdGhpcy5fLmNoaWxkU2NvcGVzLnB1c2goY3R4KTtcbiAgICAgICAgdGhpcy5fLnNlZW5DaGlsZHMrKztcbiAgICAgICAgbGV0IGxpc3RzICAgICA9IHtcbiAgICAgICAgICAgICAgICAnc3RhYmxlJyAgICAgIDogcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuXy51blN0YWJsZUNoaWxkcy0tO1xuICAgICAgICAgICAgICAgICAgICBpZiAoICF0aGlzLl8udW5TdGFibGVDaGlsZHMgKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KFwic3RhYmxlVHJlZVwiLCB0aGlzKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgJ3Vuc3RhYmxlJyAgICA6IHMgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl8udW5TdGFibGVDaGlsZHMrKztcbiAgICAgICAgICAgICAgICAgICAgaWYgKCAxID09IHRoaXMuXy51blN0YWJsZUNoaWxkcyApXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXQoXCJ1bnN0YWJsZVRyZWVcIiwgdGhpcylcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICdzdGFibGVUcmVlJyAgOiBzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fLnVuU3RhYmxlQ2hpbGRzLS07XG4gICAgICAgICAgICAgICAgICAgIGlmICggIXRoaXMuXy51blN0YWJsZUNoaWxkcyApXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXQoXCJzdGFibGVUcmVlXCIsIHRoaXMpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAndW5zdGFibGVUcmVlJzogcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuXy51blN0YWJsZUNoaWxkcysrO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIDEgPT0gdGhpcy5fLnVuU3RhYmxlQ2hpbGRzIClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdChcInVuc3RhYmxlVHJlZVwiLCB0aGlzKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgJ2Rlc3Ryb3knICAgICA6IGN0eCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICggY3R4Ll8udW5TdGFibGVDaGlsZHMgKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fLnVuU3RhYmxlQ2hpbGRzLS07XG4gICAgICAgICAgICAgICAgICAgIGlmICggIWN0eC5pc1N0YWJsZSgpIClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuXy51blN0YWJsZUNoaWxkcy0tO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpZiAoICF0aGlzLl8udW5TdGFibGVDaGlsZHMgKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KFwic3RhYmxlVHJlZVwiLCB0aGlzKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB3YXNTdGFibGUgPSB0aGlzLl8udW5TdGFibGVDaGlsZHM7XG4gICAgICAgIC8vIWN0eC5pc1N0YWJsZSgpICYmIGNvbnNvbGUud2FybignYWRkIHVuc3RhYmxlIGNoaWxkJyk7XG4gICAgICAgICFjdHguaXNTdGFibGUoKSAmJiB0aGlzLl8udW5TdGFibGVDaGlsZHMrKztcbiAgICAgICAgY3R4Ll8udW5TdGFibGVDaGlsZHMgJiYgdGhpcy5fLnVuU3RhYmxlQ2hpbGRzKys7XG4gICAgICAgIHRoaXMuXy5jaGlsZFNjb3Blc0xpc3QucHVzaChsaXN0cyk7XG4gICAgICAgIGlmICggIXdhc1N0YWJsZSAmJiB0aGlzLl8udW5TdGFibGVDaGlsZHMgKVxuICAgICAgICAgICAgdGhpcy5lbWl0KFwidW5zdGFibGVUcmVlXCIsIHRoaXMpXG4gICAgICAgIGN0eC5vbihsaXN0cyk7XG4gICAgfVxuICAgIFxuICAgIF9ybUNoaWxkKCBjdHggKSB7XG4gICAgICAgIGxldCBpICAgICAgICAgPSB0aGlzLl8uY2hpbGRTY29wZXMuaW5kZXhPZihjdHgpLFxuICAgICAgICAgICAgd2FzU3RhYmxlID0gdGhpcy5fLnVuU3RhYmxlQ2hpbGRzO1xuICAgICAgICBpZiAoIGkgIT0gLTEgKSB7XG4gICAgICAgICAgICB0aGlzLl8uY2hpbGRTY29wZXMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgIWN0eC5pc1N0YWJsZSgpICYmIHRoaXMuXy51blN0YWJsZUNoaWxkcy0tO1xuICAgICAgICAgICAgY3R4Ll8udW5TdGFibGVDaGlsZHMgJiYgdGhpcy5fLnVuU3RhYmxlQ2hpbGRzLS07XG4gICAgICAgICAgICBjdHgudW4odGhpcy5fLmNoaWxkU2NvcGVzTGlzdC5zcGxpY2UoaSwgMSlbIDAgXSk7XG4gICAgICAgICAgICBpZiAoIHdhc1N0YWJsZSAmJiAhdGhpcy5fLnVuU3RhYmxlQ2hpbGRzIClcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXQoXCJzdGFibGVUcmVlXCIpXG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgcmV0YWluKCByZWFzb24gKSB7XG4gICAgICAgIHRoaXMuX19yZXRhaW5zLmFsbCsrO1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwicmV0YWluXCIsIHRoaXMuX2lkLCByZWFzb24pO1xuICAgICAgICBpZiAoIHJlYXNvbiApIHtcbiAgICAgICAgICAgIHRoaXMuX19yZXRhaW5zWyByZWFzb24gXSA9IHRoaXMuX19yZXRhaW5zWyByZWFzb24gXSB8fCAwO1xuICAgICAgICAgICAgdGhpcy5fX3JldGFpbnNbIHJlYXNvbiBdKys7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgZGlzcG9zZSggcmVhc29uICkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwiZGlzcG9zZVwiLCB0aGlzLl9pZCwgcmVhc29uKTtcbiAgICAgICAgaWYgKCByZWFzb24gKSB7XG4gICAgICAgICAgICBpZiAoICF0aGlzLl9fcmV0YWluc1sgcmVhc29uIF0gKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkRpc3Bvc2UgbW9yZSB0aGFuIHJldGFpbmluZyA6IFwiICsgcmVhc29uKTtcbiAgICAgICAgICAgIHRoaXMuX19yZXRhaW5zWyByZWFzb24gXS0tO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAoICF0aGlzLl9fcmV0YWlucy5hbGwgKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRGlzcG9zZSBtb3JlIHRoYW4gcmV0YWluaW5nICFcIik7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9fcmV0YWlucy5hbGwtLTtcbiAgICAgICAgXG4gICAgICAgIGlmICggIXRoaXMuX19yZXRhaW5zLmFsbCApIHtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJkaXNwb3NlIGRvIGRlc3Ryb3kgXCIsIHRoaXMuX2lkLCB0aGlzLl9wZXJzaXN0ZW5jZVRtKTtcbiAgICAgICAgICAgIGlmICggdGhpcy5fLnBlcnNpc3RlbmNlVG0gKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fLmRlc3Ryb3lUTSAmJiBjbGVhclRpbWVvdXQodGhpcy5fLmRlc3Ryb3lUTSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fLmRlc3Ryb3lUTSA9IHNldFRpbWVvdXQoXG4gICAgICAgICAgICAgICAgICAgIGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy90aGlzLnRoZW4ocyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAhdGhpcy5fX3JldGFpbnMuYWxsICYmICF0aGlzLmRlYWQgJiYgdGhpcy5kZXN0cm95KClcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vfSk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuXy5wZXJzaXN0ZW5jZVRtXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vdGhpcy50aGVuKHMgPT5cbiAgICAgICAgICAgICAgICAoICF0aGlzLl9fcmV0YWlucy5hbGwgJiYgIXRoaXMuZGVhZCAmJiB0aGlzLmRlc3Ryb3koKSApXG4gICAgICAgICAgICAgICAgLy8pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIG9yZGVyIGRlc3Ryb3kgb2YgbG9jYWwgc3RvcmVzXG4gICAgICovXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgbGV0IGN0eCA9IHRoaXMuXy5fc2NvcGU7XG4gICAgICAgIC8vY29uc29sZS53YXJuKFwiZGVzdHJveVwiLCB0aGlzLl9pZCk7XG4gICAgICAgIHRoaXMuXy5zdGFiaWxpemVyVE0gJiYgY2xlYXJUaW1lb3V0KHRoaXMuXy5zdGFiaWxpemVyVE0pO1xuICAgICAgICB0aGlzLl8ucHJvcGFnVE0gJiYgY2xlYXJUaW1lb3V0KHRoaXMuXy5wcm9wYWdUTSk7XG4gICAgICAgIE9iamVjdC5rZXlzKFxuICAgICAgICAgICAgdGhpcy5fLl9saXN0ZW5pbmdcbiAgICAgICAgKS5mb3JFYWNoKFxuICAgICAgICAgICAgaWQgPT4gKCAoIGlkICE9PSBcIiRwYXJlbnRcIiApICYmIHRoaXMuXy5fc2NvcGVbIGlkIF0ucmVtb3ZlTGlzdGVuZXIodGhpcy5fLl9saXN0ZW5pbmdbIGlkIF0pIClcbiAgICAgICAgKTtcbiAgICAgICAgd2hpbGUgKCB0aGlzLl8uX21peGVkTGlzdC5sZW5ndGggKSB7XG4gICAgICAgICAgICB0aGlzLl8uX21peGVkWyAwIF0ucmVtb3ZlTGlzdGVuZXIodGhpcy5fLl9taXhlZExpc3Quc2hpZnQoKSk7XG4gICAgICAgICAgICB0aGlzLl8uX21peGVkLnNoaWZ0KCkuZGlzcG9zZShcIm1peGVkVG9cIik7XG4gICAgICAgIH1cbiAgICAgICAgWyAuLi50aGlzLl8uZm9sbG93ZXJzIF0ubWFwKGZvbGxvd2VyID0+IHRoaXMudW5CaW5kKC4uLmZvbGxvd2VyKSk7XG4gICAgICAgIGZvciAoIGxldCBrZXkgaW4gY3R4IClcbiAgICAgICAgICAgIGlmICggIWlzLmZuKGN0eFsga2V5IF0pICkge1xuICAgICAgICAgICAgICAgIGlmICgga2V5ID09IFwiJHBhcmVudFwiICkgY29udGludWU7XG4gICAgICAgICAgICAgICAgIWN0eFsga2V5IF0uX2F1dG9EZXN0cm95ICYmIGN0eFsga2V5IF0uZGlzcG9zZShcInNjb3BlZFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgaWYgKCB0aGlzLl8uX3BhcmVudExpc3QgKSB7XG4gICAgICAgICAgICB0aGlzLnBhcmVudC5fcm1DaGlsZCh0aGlzKTtcbiAgICAgICAgICAgIHRoaXMucGFyZW50LnJlbW92ZUxpc3RlbmVyKHRoaXMuXy5fcGFyZW50TGlzdCk7XG4gICAgICAgICAgICB0aGlzLnBhcmVudC5kaXNwb3NlKFwiaXNNeVBhcmVudFwiKTtcbiAgICAgICAgICAgIHRoaXMuXy5fcGFyZW50TGlzdCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kZWFkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5lbWl0KFwiZGVzdHJveVwiLCB0aGlzKTtcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICAvL2lmICggIXRoaXMuXy5pc0xvY2FsSWQgKVxuICAgICAgICBkZWxldGUgb3BlblNjb3Blc1sgdGhpcy5faWQgXTtcbiAgICAgICAgXG4gICAgICAgIC8vdGhpcy5fID0gbnVsbDtcbiAgICAgICAgXG4gICAgfVxufVxuXG5cbmlzLnJzU2NvcGUgPSBmdW5jdGlvbiAoIG9iaiApIHtcbiAgICByZXR1cm4gb2JqIGluc3RhbmNlb2YgU2NvcGVcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2NvcGU7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1Njb3BlLmpzIiwidmFyIGlzID0gcmVxdWlyZSgnaXMnKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIC4uLmlzXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbHMvaXMuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImlzXCJcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGlzID0gcmVxdWlyZSgnLi9pcycpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHdhbGtuU2V0KCBvYmosIHBhdGgsIHZhbHVlLCBzdGFjayApIHtcclxuICAgIGlmICggaXMuc3RyaW5nKHBhdGgpIClcclxuICAgICAgICBwYXRoID0gcGF0aC5zcGxpdCgnLicpO1xyXG4gICAgaWYgKCAhcGF0aC5sZW5ndGggKVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIGVsc2UgaWYgKCBwYXRoLmxlbmd0aCA9PSAxIClcclxuICAgICAgICByZXR1cm4gb2JqWyBwYXRoWyAwIF0gXSA9IHN0YWNrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFsgLi4uKCBvYmpbIHBhdGhbIDAgXSBdIHx8IFtdICksIHZhbHVlIF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdmFsdWU7XHJcbiAgICBlbHNlXHJcbiAgICAgICAgcmV0dXJuIHdhbGtuU2V0KFxyXG4gICAgICAgICAgICBvYmpbIHBhdGhbIDAgXSBdID1cclxuICAgICAgICAgICAgICAgIG9ialsgcGF0aFsgMCBdIF0gfHwge30sXHJcbiAgICAgICAgICAgIHBhdGguc2xpY2UoMSksXHJcbiAgICAgICAgICAgIHZhbHVlLCBzdGFja1xyXG4gICAgICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB3YWxrbkdldCggb2JqLCBwYXRoLCBpc0tleSApIHtcclxuICAgIGlmICggaXMuc3RyaW5nKHBhdGgpIClcclxuICAgICAgICBwYXRoID0gcGF0aC5zcGxpdCgnLicpO1xyXG4gICAgcmV0dXJuIHBhdGgubGVuZ3RoXHJcbiAgICAgICAgICAgPyBvYmpbIHBhdGhbIDAgXSBdICYmIHdhbGtuR2V0KG9ialsgcGF0aFsgMCBdIF0sIHBhdGguc2xpY2UoMSkpXHJcbiAgICAgICAgICAgOiBvYmo7XHJcbn1cclxuXHJcbi8vQHRvZG9cclxuZXhwb3J0IGZ1bmN0aW9uIGtleVdhbGtuU2V0KCBvYmosIHBhdGgsIHZhbHVlLCBzdGFjayApIHtcclxuICAgIGlmICggaXMuc3RyaW5nKHBhdGgpIClcclxuICAgICAgICBwYXRoID0gcGF0aC5zcGxpdCgvKFxcPnxcXC8pL2lnKS5maWx0ZXIodiA9PiAoIHYgIT09ICc+JyAmJiB2ICkpO1xyXG4gICAgcmV0dXJuIHdhbGtuU2V0KG9iaiwgcGF0aCwgdmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24ga2V5V2Fsa25HZXQoIG9iaiwgcGF0aCwgaXNLZXkgKSB7XHJcbiAgICBpZiAoIGlzLnN0cmluZyhwYXRoKSApXHJcbiAgICAgICAgcGF0aCA9IHBhdGguc3BsaXQoLyhcXD58XFwvKS9pZykuZmlsdGVyKHYgPT4gKCB2ICE9PSAnPicgJiYgdiApKTtcclxuICAgIHJldHVybiBwYXRoLmxlbmd0aFxyXG4gICAgICAgICAgID8gb2JqWyBwYXRoWyAwIF0gXSAmJiB3YWxrbkdldChvYmpbIHBhdGhbIDAgXSBdLCBwYXRoLnNsaWNlKDEpKVxyXG4gICAgICAgICAgIDogb2JqO1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWxzL3V0aWxzLmpzIiwiLypcbiAqIENvcHlyaWdodCAoYykgIDIwMTggV2lzZSBXaWxkIFdlYiAuXG4gKlxuICogIE1JVCBMaWNlbnNlXG4gKiAgXG4gKiAgUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqICBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiAgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKiAgXG4gKiAgVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG4gKiAgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqICBcbiAqICBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiAgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiAgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiAgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiAgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcbiAqICBTT0ZUV0FSRS5cbiAqICBcbiAqIEBhdXRob3IgOiBOYXRoYW5hZWwgQnJhdW5cbiAqIEBjb250YWN0IDogY2FpcGlsYWJzQGdtYWlsLmNvbVxuICovXG52YXIgaXMgPSByZXF1aXJlKCdpcycpO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW1pdHRlciB7XG4gICAgX2V2ZW50cyA9IHt9O1xuICAgIFxuICAgIG9uKCBldnQsIGNiICkge1xuICAgICAgICBpZiAoICFpcy5zdHJpbmcoZXZ0KSAmJiBldnQgKVxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKGV2dCkuZm9yRWFjaChrID0+IHRoaXMub24oaywgZXZ0W2tdKSk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9ldmVudHNbZXZ0XSA9IHRoaXMuX2V2ZW50c1tldnRdIHx8IFtdO1xuICAgICAgICB0aGlzLl9ldmVudHNbZXZ0XS5wdXNoKGNiKTtcbiAgICAgICAgXG4gICAgfVxuICAgIFxuICAgIHVuKCBldnQsIGNiICkge1xuICAgICAgICBpZiAoICFpcy5zdHJpbmcoZXZ0KSAmJiBldnQgKVxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKGV2dCkuZm9yRWFjaChrID0+IHRoaXMudW4oaywgZXZ0W2tdKSk7XG4gICAgICAgIFxuICAgICAgICBpZiAoICF0aGlzLl9ldmVudHNbZXZ0XSApIHJldHVybjtcbiAgICAgICAgdmFyIGkgPSB0aGlzLl9ldmVudHNbZXZ0XS5pbmRleE9mKGNiKTtcbiAgICAgICAgdGhpcy5fZXZlbnRzW2V2dF0uc3BsaWNlKGksIDEpO1xuICAgIH1cbiAgICBcbiAgICBlbWl0KCBldnQsIC4uLmFyZ3ogKSB7XG4gICAgICAgIGlmICggIXRoaXMuX2V2ZW50c1tldnRdICkgcmV0dXJuO1xuICAgICAgICBsZXQgbGlzdHMgPSBbLi4udGhpcy5fZXZlbnRzW2V2dF1dO1xuICAgICAgICBcbiAgICAgICAgZm9yICggdmFyIGkgPSAwOyBpIDwgbGlzdHMubGVuZ3RoOyBpKysgKVxuICAgICAgICAgICAgbGlzdHNbaV0oLi4uYXJneilcbiAgICB9XG4gICAgXG4gICAgYWRkTGlzdGVuZXIoKSB7XG4gICAgICAgIHRoaXMub24oLi4uYXJndW1lbnRzKTtcbiAgICB9XG4gICAgXG4gICAgcmVtb3ZlTGlzdGVuZXIoKSB7XG4gICAgICAgIHRoaXMudW4oLi4uYXJndW1lbnRzKTtcbiAgICB9XG4gICAgXG4gICAgcmVtb3ZlQWxsTGlzdGVuZXJzKCkge1xuICAgICAgICB0aGlzLl9ldmVudHMgPSB7fTtcbiAgICB9XG4gICAgXG4gICAgb25jZSggZXZ0LCBjYiApIHtcbiAgICAgICAgbGV0IGZuO1xuICAgICAgICB0aGlzLm9uKGV2dCwgZm4gPSAoIC4uLmFyZ3ogKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnVuKGV2dCwgZm4pO1xuICAgICAgICAgICAgY2IoLi4uYXJneilcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIFxuICAgIFxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlscy9FbWl0dGVyLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2hvcnRpZFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInNob3J0aWRcIlxuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxuICogQ29weXJpZ2h0IChjKSAgMjAxOCBXaXNlIFdpbGQgV2ViIC5cbiAqXG4gKiAgTUlUIExpY2Vuc2VcbiAqXG4gKiAgUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqICBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiAgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuICogIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqICBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqICBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqICBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiAgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqICBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuICogIFNPRlRXQVJFLlxuICpcbiAqIEBhdXRob3IgOiBOYXRoYW5hZWwgQnJhdW5cbiAqIEBjb250YWN0IDogY2FpcGlsYWJzQGdtYWlsLmNvbVxuICovXG5cbnZhciBpcyAgICAgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi91dGlscy9pcycpLFxuICAgIFNjb3BlICAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL1Njb3BlJyksXG4gICAgeyBrZXlXYWxrblNldCwga2V5V2Fsa25HZXQgfSA9IHJlcXVpcmUoJy4vdXRpbHMvdXRpbHMnKSxcbiAgICBFdmVudEVtaXR0ZXIgICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi91dGlscy9FbWl0dGVyJyksXG4gICAgVGFza1NlcXVlbmNlciAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vdXRpbHMvVGFza1NlcXVlbmNlcicpLFxuICAgIHNob3J0aWQgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlKCdzaG9ydGlkJyksXG4gICAgb2JqUHJvdG8gICAgICAgICAgICAgICAgICAgICA9IE9iamVjdC5nZXRQcm90b3R5cGVPZih7fSk7XG5cbmNsYXNzIFN0b3JlIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgICAvL3N0YXRpYyB1c2UgICAgICAgICAgICAgICAgICA9IFtdOy8vIG92ZXJyaWRhYmxlIGxpc3Qgb2Ygc291cmNlIHN0b3Jlc1xuICAgIHN0YXRpYyBmb2xsb3c7Ly8gb3ZlcnJpZGFibGUgbGlzdCBvZiBzdG9yZSB0aGF0IHdpbGwgYWxsb3cgcHVzaCBpZiB1cGRhdGVkXG4gICAgc3RhdGljIHJlcXVpcmU7XG4gICAgc3RhdGljIHN0YXRpY1Njb3BlICAgICAgICAgID0gbmV3IFNjb3BlKHt9LCB7IGlkOiBcInN0YXRpY1wiIH0pO1xuICAgIHN0YXRpYyBzdGF0ZSAgICAgICAgICAgICAgICA9IHVuZGVmaW5lZDsvLyBkZWZhdWx0IHN0YXRlXG4gICAgLyoqXG4gICAgICogaWYgcmV0YWluIGdvZXMgdG8gMCA6XG4gICAgICogZmFsc2UgdG8gbm90IGRlc3Ryb3ksXG4gICAgICogMCB0byBzeW5jIGF1dG8gZGVzdHJveVxuICAgICAqIE1zIHRvIGF1dG9kZXN0cm95IGFmdGVyIHRtIG1zIGlmIG5vIHJldGFpbiBoYXMgYmVlbiBjYWxsZWRcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbnxJbnR9XG4gICAgICovXG4gICAgICAgICAgIHN0YXRpYyBwZXJzaXN0ZW5jZVRtID0gZmFsc2U7XG4gICAgXG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0b3IsIHdpbGwgYnVpbGQgYSByZXNjb3BlIHN0b3JlXG4gICAgICpcbiAgICAgKiAoc2NvcGUsIHtyZXF1aXJlLHVzZSxhcHBseSxzdGF0ZSwgZGF0YX0pXG4gICAgICogKHNjb3BlKVxuICAgICAqXG4gICAgICogQHBhcmFtIHNjb3BlIHtvYmplY3R9IHNjb3BlIHdoZXJlIHRvIGZpbmQgdGhlIG90aGVyIHN0b3JlcyAoZGVmYXVsdCA6IHN0YXRpY1xuICAgICAqICAgICBzdGF0aWNTY29wZSApXG4gICAgICogQHBhcmFtIGtleXMge0FycmF5fSAocGFzc2VkIHRvIFN0b3JlOjptYXApIEV4IDogW1wic2Vzc2lvblwiLCBcIm90aGVyTmFtZWRTdG9yZTprZXlcIixcbiAgICAgKiAgICAgb3RoZXJTdG9yZS5hcyhcIm90aGVyS2V5XCIpXVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB2YXIgYXJneiAgICAgICAgID0gWyAuLi5hcmd1bWVudHMgXSxcbiAgICAgICAgICAgIF9zdGF0aWMgICAgICA9IHRoaXMuY29uc3RydWN0b3IsXG4gICAgICAgICAgICBzY29wZSAgICAgICAgPSBhcmd6WyAwIF0gaW5zdGFuY2VvZiBTY29wZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBhcmd6LnNoaWZ0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3N0YXRpYy5zY29wZSA/IFNjb3BlLmdldFNjb3BlKF9zdGF0aWMuc2NvcGUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBpcy5zdHJpbmcoYXJnelsgMCBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBTY29wZS5nZXRTY29wZShhcmd6LnNoaWZ0KCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF9zdGF0aWMuc3RhdGljU2NvcGUsXG4gICAgICAgICAgICBjZmcgICAgICAgICAgPSBhcmd6WyAwIF0gJiYgIWlzLmFycmF5KGFyZ3pbIDAgXSkgJiYgIWlzLnN0cmluZyhhcmd6WyAwIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA/IGFyZ3ouc2hpZnQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB7fSxcbiAgICAgICAgICAgIHRhc2tRdWV1ZSAgICA9IGlzLmFycmF5KGFyZ3pbIDAgXSkgPyBhcmd6LnNoaWZ0KCkgOiBudWxsLFxuICAgICAgICAgICAgbmFtZSAgICAgICAgID0gY2ZnLm5hbWUgfHwgX3N0YXRpYy5uYW1lLFxuICAgICAgICAgICAgd2F0Y2hzICAgICAgID0gY2ZnLnVzZSB8fCBbXSxcbiAgICAgICAgICAgIGFwcGx5ICAgICAgICA9IGNmZy5hcHBseSB8fCBudWxsLFxuICAgICAgICAgICAgaW5pdGlhbFN0YXRlID0gX3N0YXRpYy5zdGF0ZSB8fCBfc3RhdGljLmluaXRpYWxTdGF0ZSB8fCBfc3RhdGljLmRlZmF1bHRTdGF0ZSxcbiAgICAgICAgICAgIGFwcGxpZWQ7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl91aWQgPSBjZmcuX3VpZCB8fCBzaG9ydGlkLmdlbmVyYXRlKCk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9fcmV0YWlucyAgICA9IHsgYWxsOiAwIH07XG4gICAgICAgIHRoaXMuX19sb2NrcyAgICAgID0geyBhbGw6IDAgfTtcbiAgICAgICAgdGhpcy5fb25TdGFiaWxpemUgPSBbXTtcbiAgICAgICAgXG4gICAgICAgIC8vIGF1dG9EZXN0cm95VG1cbiAgICAgICAgdGhpcy5fYXV0b0Rlc3Ryb3kgICA9ICEhdGhpcy5fcGVyc2lzdGVuY2VUbTtcbiAgICAgICAgdGhpcy5fcGVyc2lzdGVuY2VUbSA9IGNmZy5wZXJzaXN0ZW5jZVRtIHx8IF9zdGF0aWMucGVyc2lzdGVuY2VUbSB8fCAoIGNmZy5hdXRvRGVzdHJveSB8fCBfc3RhdGljLmF1dG9EZXN0cm95ICkgJiYgNTtcbiAgICAgICAgdGhpcy5fY2ZnICAgICAgICAgICA9IGNmZztcbiAgICAgICAgaWYgKCBjZmcgJiYgY2ZnLm9uICkge1xuICAgICAgICAgICAgdGhpcy5vbihjZmcub24pO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICBcbiAgICAgICAgaWYgKCBzY29wZS5zdG9yZXMgKSB7XG4gICAgICAgICAgICB0aGlzLnNjb3BlT2JqID0gc2NvcGU7XG4gICAgICAgICAgICB0aGlzLnNjb3BlICAgID0gc2NvcGUuc3RvcmVzO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zY29wZU9iaiA9IG5ldyBTY29wZShzY29wZSk7XG4gICAgICAgICAgICB0aGlzLnNjb3BlICAgID0gc2NvcGUuc3RvcmVzO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvLyBzdGFuZGFyZGl6ZWQgc2NvcGUgYWNjZXNzXG4gICAgICAgIHRoaXMuJHNjb3BlICAgID0gdGhpcy5zY29wZU9iajtcbiAgICAgICAgdGhpcy4kc3RvcmVzICAgPSB0aGlzLnNjb3BlT2JqLnN0b3JlcztcbiAgICAgICAgdGhpcy4kYWN0aW9ucyAgPSB0aGlzLnNjb3BlT2JqLmFjdGlvbnM7XG4gICAgICAgIHRoaXMuJGRpc3BhdGNoID0gdGhpcy5zY29wZU9iai5kaXNwYXRjaC5iaW5kKHRoaXMuc2NvcGVPYmopO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fcmV2ICAgICA9IHRoaXMuY29uc3RydWN0b3IuX3JldiB8fCAwO1xuICAgICAgICB0aGlzLl9yZXZzICAgID0ge307XG4gICAgICAgIHRoaXMuc3RvcmVzICAgPSB7fTtcbiAgICAgICAgdGhpcy5fcmVxdWlyZSA9IFtdO1xuICAgICAgICB0aGlzLl9zb3VyY2VzID0gWyBuYW1lIF07XG4gICAgICAgIFxuICAgICAgICBpZiAoIGlzLmFycmF5KF9zdGF0aWMudXNlKSApIHtcbiAgICAgICAgICAgIHRoaXMuX3VzZSA9IFsgLi4ud2F0Y2hzLCAuLi4oIF9zdGF0aWMudXNlIHx8IFtdICkubWFwKFxuICAgICAgICAgICAgICAgIGtleSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCByZWYgPSBrZXkubWF0Y2goL14oXFwhPykoW15cXDpdKikoPzpcXDooLiopKT8kLyk7XG4gICAgICAgICAgICAgICAgICAgIGlmICggcmVmWyAxIF0gKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVmMiA9IHJlZlsgMiBdLnNwbGl0KCcuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9yZXF1aXJlLnB1c2gocmVmWyAzIF0gfHwgcmVmMlsgcmVmMi5sZW5ndGggLSAxIF0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZWZbIDIgXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApIF07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl91c2UgPSBbIC4uLndhdGNocywgLi4uKFxuICAgICAgICAgICAgICAgIF9zdGF0aWMudXNlID8gT2JqZWN0LmtleXMoX3N0YXRpYy51c2UpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZWYgPSBrZXkubWF0Y2goL14oXFwhPykoLiopJC8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWZbIDEgXSAmJiB0aGlzLl9yZXF1aXJlLnB1c2goX3N0YXRpYy51c2VbIGtleSBdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlZlsgMiBdICsgKCAoIF9zdGF0aWMudXNlWyBrZXkgXSA9PT0gdHJ1ZSApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJzonICsgX3N0YXRpYy51c2VbIGtleSBdICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IFtdXG4gICAgICAgICAgICApIF07XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmICggX3N0YXRpYy5yZXF1aXJlIClcbiAgICAgICAgICAgIHRoaXMuX3JlcXVpcmUucHVzaCguLi5fc3RhdGljLnJlcXVpcmUpO1xuICAgICAgICBpZiAoIGNmZy5yZXF1aXJlIClcbiAgICAgICAgICAgIHRoaXMuX3JlcXVpcmUucHVzaCguLi5jZmcucmVxdWlyZSk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9mb2xsb3dlcnMgPSBbXTtcbiAgICAgICAgdGhpcy5fY2hhbmdlc1NXID0gaW5pdGlhbFN0YXRlIHx8IHt9O1xuICAgICAgICB0aGlzLnN0YXRlICAgICAgPSBpbml0aWFsU3RhdGUgJiYge307XG4gICAgICAgIGlmICggYXBwbHkgKVxuICAgICAgICAgICAgdGhpcy5hcHBseSA9IGFwcGx5O1xuICAgICAgICBcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEluaXRpYWwgc3RhdGUgaXNuJ3QgZnVsbHkgaW5pdGlhbGl6ZWQgKCBjaGlsZHMgY29uc3RydWN0b3JzIGNhbiBzZXQgaXQgKVxuICAgICAgICAgKiBTY29wZSBiYXNlZCBpbnN0YW5jZSBoYXZlIHRhc2tRdWV1ZSB0byBkZWxheSBpbml0IHN5bmNocm9ub3VzbHksIGlmIG5vdFxuICAgICAgICAgKiBwcmVzZW50IHdlIHVzZSBzZXRUaW1lb3V0XG4gICAgICAgICAqL1xuICAgICAgICBpZiAoIHRhc2tRdWV1ZSApIHtcbiAgICAgICAgICAgIHRhc2tRdWV1ZS5wdXNoKHRoaXMuX2FmdGVyQ29uc3RydWN0b3IuYmluZCh0aGlzKSlcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgICAgICBzZXRUaW1lb3V0KHRoaXMuX2FmdGVyQ29uc3RydWN0b3IuYmluZCh0aGlzKSlcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBpbmNvbWluZyBzdGF0ZSAoIGZvciBpbW1lZGlhdGUgc3RhdGUgcmVsYXRpdmUgYWN0aW9ucyApXG4gICAgICogQHJldHVybnMge3t9fCp9XG4gICAgICovXG4gICAgZ2V0IG5leHRTdGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NoYW5nZXNTVyAmJiB7IC4uLnRoaXMuc3RhdGUsIC4uLnRoaXMuX2NoYW5nZXNTVyB9IHx8IHRoaXMuc3RhdGU7XG4gICAgfVxuICAgIFxuICAgIF9hZnRlckNvbnN0cnVjdG9yKCkge1xuICAgICAgICBsZXQgY2ZnICAgICAgICAgID0gdGhpcy5fY2ZnLFxuICAgICAgICAgICAgX3N0YXRpYyAgICAgID0gdGhpcy5jb25zdHJ1Y3RvcixcbiAgICAgICAgICAgIHNuYXBzaG90ICAgICA9IHRoaXMucmVzdG9yZSh1bmRlZmluZWQsIHRydWUpLFxuICAgICAgICAgICAgaW5pdGlhbFN0YXRlID0gdGhpcy5zdGF0ZSxcbiAgICAgICAgICAgIGluaXRpYWxEYXRhICA9IHRoaXMuZGF0YSxcbiAgICAgICAgICAgIGFwcGxpZWQ7XG4gICAgICAgIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKCBpbml0aWFsRGF0YSApXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhID0gaW5pdGlhbERhdGE7XG4gICAgICAgICAgICBlbHNlIGlmICggX3N0YXRpYy5kYXRhICE9PSB1bmRlZmluZWQgKVxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YSA9IHsgLi4uX3N0YXRpYy5kYXRhIH07XG4gICAgICAgICAgICBlbHNlIGlmICggY2ZnLmhhc093blByb3BlcnR5KFwiZGF0YVwiKSApXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhID0gY2ZnLmRhdGE7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmICggY2ZnLmhhc093blByb3BlcnR5KFwic3RhdGVcIikgJiYgY2ZnLnN0YXRlICE9PSB1bmRlZmluZWQgKVxuICAgICAgICAgICAgICAgIGluaXRpYWxTdGF0ZSA9IHsgLi4uaW5pdGlhbFN0YXRlLCAuLi5jZmcuc3RhdGUgfTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKCB0aGlzLmRhdGEgPT09IHVuZGVmaW5lZCApIHtcbiAgICAgICAgICAgICAgICBpZiAoIGluaXRpYWxTdGF0ZSB8fCB0aGlzLl91c2UubGVuZ3RoICkgey8vIHN5bmMgYXBwbHlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2hhbmdlc1NXID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgLi4udGhpcy5fY2hhbmdlc1NXLFxuICAgICAgICAgICAgICAgICAgICAgICAgLi4uKCBpbml0aWFsU3RhdGUgfHwge30gKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLnRoaXMuJHNjb3BlLm1hcCh0aGlzLCB0aGlzLl91c2UpXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUgICAgICA9IHt9O1xuICAgICAgICAgICAgICAgICAgICBpZiAoIHRoaXMuc2hvdWxkQXBwbHkodGhpcy5fY2hhbmdlc1NXKSAmJiB0aGlzLmRhdGEgPT09IHVuZGVmaW5lZCApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YSAgICAgICA9IHRoaXMuYXBwbHkodGhpcy5kYXRhLCB0aGlzLl9jaGFuZ2VzU1csIHRoaXMuX2NoYW5nZXNTVyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcHBsaWVkICAgICAgICAgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZSAgICAgID0gdGhpcy5fY2hhbmdlc1NXO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2hhbmdlc1NXID0ge307XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBhcHBsaWVkICAgICAgICAgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUgICAgICA9IHsvLyBhc3N1bWUgdGhpcyBzdGF0ZSBpcyBzeW5jIHdpdGggaW5pdGlhbCBkYXRhXG4gICAgICAgICAgICAgICAgICAgIC4uLnRoaXMuX2NoYW5nZXNTVyxcbiAgICAgICAgICAgICAgICAgICAgLi4uKCBpbml0aWFsU3RhdGUgfHwge30gKSxcbiAgICAgICAgICAgICAgICAgICAgLi4udGhpcy4kc2NvcGUubWFwKHRoaXMsIHRoaXMuX3VzZSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5fY2hhbmdlc1NXID0ge307XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCAoIHRoaXMuZGF0YSAhPT0gdW5kZWZpbmVkIHx8IGFwcGxpZWQgKSAmJiAhdGhpcy5fX2xvY2tzLmFsbCApIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YWJsZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLl9yZXYrKztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgaWYgKCAhX3N0YXRpYy5tYW5hZ2VkICYmICF0aGlzLnN0YXRlICYmICggIXRoaXMuX3VzZSB8fCAhdGhpcy5fdXNlLmxlbmd0aCApICkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIlJlU2NvcGUgc3RvcmUgJ1wiLCB0aGlzLm5hbWUsIFwiJyBoYXZlIG5vIGluaXRpYWwgZGF0YSwgc3RhdGUgb3IgdXNlLiBJdCBjYW4ndCBzdGFiaWxpemUuLi5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgIXRoaXMuX3N0YWJsZSAmJiB0aGlzLmVtaXQoJ3Vuc3RhYmxlJywgdGhpcy5zdGF0ZSk7XG4gICAgICAgIFxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBPdmVycmlkYWJsZSBtZXRob2QgdG8ga25vdyBpZiBhIGRhdGEgY2hhbmdlIHNob3VsZCBiZSBwcm9wYWcgdG8gdGhlIGxpc3RlbmluZ1xuICAgICAqIHN0b3JlcyAmIGNvbXBvbmVudHNcbiAgICAgKi9cbiAgICBzaG91bGRQcm9wYWcoIG5EYXRhcyApIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIFxuICAgIGhhc0RhdGFDaGFuZ2UoIG5EYXRhcyApIHtcbiAgICAgICAgdmFyIF9zdGF0aWMgPSB0aGlzLmNvbnN0cnVjdG9yLCByLFxuICAgICAgICAgICAgY0RhdGFzICA9IHRoaXMuZGF0YTtcbiAgICAgICAgciAgICAgICAgICAgPSAhY0RhdGFzICYmIG5EYXRhcyB8fCBjRGF0YXMgIT09IG5EYXRhcztcbiAgICAgICAgIXIgJiYgY0RhdGFzICYmIE9iamVjdC5rZXlzKGNEYXRhcykuZm9yRWFjaChcbiAgICAgICAgICAgICgga2V5ICkgPT4ge1xuICAgICAgICAgICAgICAgIHIgPSByIHx8ICggbkRhdGFzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA/IGNEYXRhc1sga2V5IF0gIT09IG5EYXRhc1sga2V5IF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDogY0RhdGFzICYmIGNEYXRhc1sga2V5IF0gKVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICAhciAmJiBuRGF0YXMgJiYgT2JqZWN0LmtleXMobkRhdGFzKS5mb3JFYWNoKFxuICAgICAgICAgICAgKCBrZXkgKSA9PiB7XG4gICAgICAgICAgICAgICAgciA9IHIgfHwgKCBuRGF0YXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgID8gY0RhdGFzWyBrZXkgXSAhPT0gbkRhdGFzWyBrZXkgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBjRGF0YXMgJiYgY0RhdGFzWyBrZXkgXSApXG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBPdmVycmlkYWJsZSBtZXRob2QgdG8ga25vdyBpZiBhIHN0YXRlIGNoYW5nZSBzaG91bGQgYmUgYXBwbGllZFxuICAgICAqL1xuICAgIHNob3VsZEFwcGx5KCBzdGF0ZSA9IHRoaXMuc3RhdGUgKSB7XG4gICAgICAgIHZhciBfc3RhdGljID0gdGhpcy5jb25zdHJ1Y3RvcjtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgISF0aGlzLmlzQ29tcGxldGUoc3RhdGUpXG4gICAgICAgICAgICAgICApICYmICggaXMuYXJyYXkoX3N0YXRpYy5mb2xsb3cpXG4gICAgICAgICAgICAgICAgICAgICAgPyBfc3RhdGljLmZvbGxvd1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZWR1Y2UoKCByLCBpICkgPT4gKCByIHx8IHN0YXRlICYmIHN0YXRlWyBpIF0gKSwgZmFsc2UpXG4gICAgICAgICAgICAgICAgICAgICAgOiBfc3RhdGljLmZvbGxvd1xuICAgICAgICAgICAgICAgICAgICAgICAgPyBPYmplY3Qua2V5cyhfc3RhdGljLmZvbGxvdylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlZHVjZSgoIHIsIGkgKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8fCBzdGF0ZSAmJiBpcy5mbihfc3RhdGljLmZvbGxvd1sgaSBdKSAmJiBfc3RhdGljLmZvbGxvd1sgaSBdLmNhbGwodGhpcywgc3RhdGVbIGkgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHx8IF9zdGF0aWMuZm9sbG93WyBpIF0gJiYgc3RhdGVbIGkgXSAhPT0gdGhpcy5zdGF0ZVsgaSBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIGZhbHNlKSA6IHRydWVcbiAgICAgICAgICAgICAgICk7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIE92ZXJyaWRhYmxlIGFwcGxpZXIgLyByZW1hcHBlclxuICAgICAqIElmIHN0YXRlIG9yIGxhc3RQdWJsaWNTdGF0ZSBhcmUgc2ltcGxlIGhhc2ggbWFwcyBhcHBseSB3aWxsIHJldHVybiB7Li4uZGF0YSxcbiAgICAgKiAuLi5zdGF0ZX0gaWYgbm90IGl0IHdpbGwgcmV0dXJuIHRoZSBsYXN0IHByaXZhdGUgc3RhdGVcbiAgICAgKiBAcGFyYW0gZGF0YVxuICAgICAqIEBwYXJhbSBzdGF0ZVxuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqL1xuICAgIGFwcGx5KCBkYXRhLCBzdGF0ZSwgY2hhbmdlcyApIHtcbiAgICAgICAgc3RhdGUgPSBzdGF0ZSB8fCB0aGlzLnN0YXRlO1xuICAgICAgICBcbiAgICAgICAgaWYgKCB0aGlzLnJlZmluZSApXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZWZpbmUoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgXG4gICAgICAgIGlmICggIWRhdGEgfHwgZGF0YS5fX3Byb3RvX18gIT09IG9ialByb3RvIHx8IHN0YXRlLl9fcHJvdG9fXyAhPT0gb2JqUHJvdG8gKVxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICByZXR1cm4geyAuLi5kYXRhLCAuLi5zdGF0ZSB9XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIEBkZXByZWNpYXRlZFxuICAgICAqIEBwYXJhbSBkYXRhXG4gICAgICogQHBhcmFtIHN0YXRlXG4gICAgICogQHBhcmFtIGNoYW5nZXNcbiAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgKi9cbiAgICByZWZpbmUoIGRhdGEsIHN0YXRlLCBjaGFuZ2VzICkge1xuICAgICAgICBzdGF0ZSA9IHN0YXRlIHx8IHRoaXMuc3RhdGU7XG4gICAgICAgIFxuICAgICAgICBpZiAoICFkYXRhIHx8IGRhdGEuX19wcm90b19fICE9PSBvYmpQcm90byB8fCBzdGF0ZS5fX3Byb3RvX18gIT09IG9ialByb3RvIClcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgcmV0dXJuIHsgLi4uZGF0YSwgLi4uc3RhdGUgfVxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBEZWJvdW5jZSB0aGlzIHN0b3JlIHByb3BhZ2F0aW9uICggJiByZWR1Y2luZyApXG4gICAgICogQHBhcmFtIGNiXG4gICAgICovXG4gICAgc3RhYmlsaXplKCBjYiApIHtcbiAgICAgICAgY2IgJiYgdGhpcy5vbmNlKCdzdGFibGUnLCBjYik7XG4gICAgICAgIHRoaXMuX3N0YWJsZSAmJiB0aGlzLmVtaXQoJ3Vuc3RhYmxlJywgdGhpcy5zdGF0ZSwgdGhpcy5kYXRhKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX3N0YWJsZSA9IGZhbHNlO1xuICAgICAgICBcbiAgICAgICAgaWYgKCB0aGlzLl9zdGFiaWxpemVyIClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX3N0YWJpbGl6ZXIgPSBUYXNrU2VxdWVuY2VyLnB1c2hUYXNrKHRoaXMsICdwdXNoU3RhdGUnKTtcbiAgICB9XG4gICAgXG4gICAgcmV0cmlldmUoIHBhdGgsIGkgPSAwLCBvYmogPSB0aGlzLmRhdGEgKSB7XG4gICAgICAgIHBhdGggPSBpcy5zdHJpbmcocGF0aCkgPyBwYXRoLnNwbGl0KCcuJykgOiBwYXRoO1xuICAgICAgICByZXR1cm4gIW9iaiB8fCAhcGF0aCB8fCAhcGF0aC5sZW5ndGhcbiAgICAgICAgICAgICAgID8gb2JqXG4gICAgICAgICAgICAgICA6IHBhdGgubGVuZ3RoID09IGkgKyAxXG4gICAgICAgICAgICAgICAgID8gb2JqWyBwYXRoWyBpIF0gXVxuICAgICAgICAgICAgICAgICA6IHRoaXMucmV0cmlldmUocGF0aCwgaSArIDEsIG9ialsgcGF0aFsgaSBdIF0pO1xuICAgIH1cbiAgICBcbiAgICBkaXNwYXRjaCggYWN0aW9uLCAuLi5hcmd6ICkge1xuICAgICAgICB0aGlzLnNjb3BlT2JqLmRpc3BhdGNoKGFjdGlvbiwgLi4uYXJneik7XG4gICAgfVxuICAgIFxuICAgIHRyaWdnZXIoIGFjdGlvbiwgLi4uYXJneiApIHtcbiAgICAgICAgbGV0IHsgYWN0aW9ucyB9ID0gdGhpcy5jb25zdHJ1Y3RvcjtcbiAgICAgICAgaWYgKCBhY3Rpb25zICYmIGFjdGlvbnNbIGFjdGlvbiBdICkge1xuICAgICAgICAgICAgbGV0IG5zID0gYWN0aW9uc1sgYWN0aW9uIF0uY2FsbCh0aGlzLCAuLi5hcmd6KTtcbiAgICAgICAgICAgIG5zICYmIHRoaXMuc2V0U3RhdGUobnMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIFB1bGwgc3RvcmVzIGluIHRoZSBwcml2YXRlIHN0YXRlXG4gICAgICogQHBhcmFtIHN0b3JlcyAge0FycmF5fSAocGFzc2VkIHRvIFN0b3JlOjptYXApIEV4IDogW1wic2Vzc2lvblwiLFxuICAgICAqICAgICBcIm90aGVyTmFtZWRTdG9yZTprZXlcIiwgb3RoZXJTdG9yZS5hcyhcIm90aGVyS2V5XCIpXVxuICAgICAqL1xuICAgIHB1bGwoIHN0b3JlcywgZG9XYWl0LCBvcmlnaW4gKSB7XG4gICAgICAgIGxldCBpbml0aWFsT3V0cHV0cyA9IHRoaXMuc2NvcGVPYmoubWFwKHRoaXMsIHN0b3Jlcyk7XG4gICAgICAgIGlmICggZG9XYWl0ICkge1xuICAgICAgICAgICAgdGhpcy53YWl0KCk7XG4gICAgICAgICAgICBzdG9yZXMuZm9yRWFjaCgoIHMgKSA9PiB0aGlzLnNjb3BlWyBzIF0gJiYgdGhpcy53YWl0KHRoaXMuc2NvcGVbIHMgXSkpO1xuICAgICAgICAgICAgdGhpcy5yZWxlYXNlKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGluaXRpYWxPdXRwdXRzO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBTZXQgJiBQdXNoIHRoZSByZXN1bHQgZGF0YSB0byBmb2xsb3dlcnMgaWYgc3RhYmxlXG4gICAgICogQHBhcmFtIGNiXG4gICAgICovXG4gICAgcHVzaCggZGF0YSwgZm9yY2UsIGNiICkge1xuICAgICAgICBjYiAgICA9IGZvcmNlID09PSB0cnVlID8gY2IgOiBmb3JjZTtcbiAgICAgICAgZm9yY2UgPSBmb3JjZSA9PT0gdHJ1ZTtcbiAgICAgICAgaWYgKCAhZm9yY2UgJiZcbiAgICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgICF0aGlzLmhhc0RhdGFDaGFuZ2UoZGF0YSlcbiAgICAgICAgICAgICApXG4gICAgICAgICkge1xuICAgICAgICAgICAgY2IgJiYgY2IoKTtcbiAgICAgICAgICAgIGlmICggIXRoaXMuX19sb2Nrcy5hbGwgKSB7XG4gICAgICAgICAgICAgICAgbGV0IHN0YWJsZSAgID0gdGhpcy5fc3RhYmxlO1xuICAgICAgICAgICAgICAgIHRoaXMuX3N0YWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgIXN0YWJsZSAmJiB0aGlzLmVtaXQoJ3N0YWJsZScsIHRoaXMuc3RhdGUsIHRoaXMuZGF0YSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fc3RhYmlsaXplciA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgICAgIHRoaXMud2FpdCgpO1xuICAgICAgICB0aGlzLnJlbGVhc2UoY2IpO1xuICAgICAgICBcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogQ2FsbCB0aGUgYXBwbHkgZm4gdXNpbmcgdGhlIGN1cnJlbnQgYWNjdW11bGF0ZWQgc3RhdGUgdXBkYXRlIHRoZW4sIHB1c2ggdGhlXG4gICAgICogcmVzdWx0aW5nIGRhdGEgaWYgc3RhYmxlXG4gICAgICogQHBhcmFtIGZvcmNlXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgcHVzaFN0YXRlKCBmb3JjZSApIHtcbiAgICAgICAgXG4gICAgICAgIGlmICggIWZvcmNlICYmICF0aGlzLl9jaGFuZ2VzU1cgJiYgdGhpcy5kYXRhIClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgXG4gICAgICAgIHZhciBuZXh0U3RhdGUgPSB0aGlzLl9uZXh0U3RhdGUgfHwgeyAuLi50aGlzLnN0YXRlLCAuLi4oIHRoaXMuX2NoYW5nZXNTVyB8fCB7fSApIH0sXG4gICAgICAgICAgICBuZXh0RGF0YSAgPSB0aGlzLmFwcGx5KHRoaXMuZGF0YSwgbmV4dFN0YXRlLCB0aGlzLl9jaGFuZ2VzU1cpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fc3RhYmlsaXplciA9IG51bGw7XG4gICAgICAgIHRoaXMuc3RhdGUgICAgICAgPSBuZXh0U3RhdGU7XG4gICAgICAgIHRoaXMuX2NoYW5nZXNTVyAgPSBudWxsO1xuICAgICAgICBcbiAgICAgICAgaWYgKCAhZm9yY2UgJiZcbiAgICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgICF0aGlzLmhhc0RhdGFDaGFuZ2UobmV4dERhdGEpXG4gICAgICAgICAgICAgKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIGlmICggIXRoaXMuX19sb2Nrcy5hbGwgKSB7XG4gICAgICAgICAgICAgICAgbGV0IHN0YWJsZSAgID0gdGhpcy5fc3RhYmxlO1xuICAgICAgICAgICAgICAgIHRoaXMuX3N0YWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgIXN0YWJsZSAmJiB0aGlzLmVtaXQoJ3N0YWJsZScsIHRoaXMuc3RhdGUsIHRoaXMuZGF0YSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fc3RhYmlsaXplciA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRoaXMuZGF0YSA9IG5leHREYXRhO1xuICAgICAgICB0aGlzLndhaXQoKTtcbiAgICAgICAgdGhpcy5yZWxlYXNlKCk7XG4gICAgICAgIFxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBBZGQgJ3BTdGF0ZScgdG8gdGhlIGN1cnJlbnQgYWNjdW11bGF0ZWQgc3RhdGUgdXBkYXRlc1xuICAgICAqICYgd2FpdCBzb3VyY2Ugc3RvcmVzIHN0YWJpbGl6YXRpb24gYmVmb3JlIHB1c2hpbmcgdGhlc2Ugc3RhdGUgdXBkYXRlc1xuICAgICAqIEBwYXJhbSBwU3RhdGVcbiAgICAgKiBAcGFyYW0gY2JcbiAgICAgKi9cbiAgICBzZXRTdGF0ZSggcFN0YXRlLCBjYiwgc3luYyApIHtcbiAgICAgICAgdmFyIGkgICAgICAgPSAwLCBjaGFuZ2UsXG4gICAgICAgICAgICBjaGFuZ2VzID0gdGhpcy5fY2hhbmdlc1NXID0gdGhpcy5fY2hhbmdlc1NXIHx8IHt9O1xuICAgICAgICBmb3IgKCB2YXIgayBpbiBwU3RhdGUgKVxuICAgICAgICAgICAgaWYgKCAhdGhpcy5zdGF0ZVxuICAgICAgICAgICAgICAgICB8fCBjaGFuZ2VzLmhhc093blByb3BlcnR5KGspLy8gdG9kb1xuICAgICAgICAgICAgICAgICAmJiAoXG4gICAgICAgICAgICAgICAgICAgICBwU3RhdGVbIGsgXSAhPT0gY2hhbmdlc1sgayBdXG4gICAgICAgICAgICAgICAgICkgfHwgcFN0YXRlLmhhc093blByb3BlcnR5KGspXG4gICAgICAgICAgICAgICAgICYmIChcbiAgICAgICAgICAgICAgICAgcFN0YXRlWyBrIF0gIT09IHRoaXMuc3RhdGVbIGsgXVxuICAgICAgICAgICAgICAgICB8fFxuICAgICAgICAgICAgICAgICAoIHRoaXMuc3RhdGVbIGsgXSAmJiBwU3RhdGVbIGsgXSAmJiAoIHBTdGF0ZVsgayBdLl9yZXYgIT0gdGhpcy5fcmV2c1sgayBdICkgKS8vIHJldi9oYXNoIHVwZGF0ZVxuICAgICAgICAgICAgICAgICApICkge1xuICAgICAgICAgICAgICAgIGNoYW5nZSAgICAgICAgICA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5fcmV2c1sgayBdID0gcFN0YXRlWyBrIF0gJiYgcFN0YXRlWyBrIF0uX3JldiB8fCB0cnVlO1xuICAgICAgICAgICAgICAgIGNoYW5nZXNbIGsgXSAgICA9IHBTdGF0ZVsgayBdO1xuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdGhpcy5fbmV4dFN0YXRlID0geyAuLi50aGlzLnN0YXRlLCAuLi5jaGFuZ2VzIH07XG4gICAgICAgIGlmICggIXRoaXMuc2hvdWxkQXBwbHkodGhpcy5fbmV4dFN0YXRlKSApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKCBzeW5jICkge1xuICAgICAgICAgICAgdGhpcy5wdXNoU3RhdGUoKTtcbiAgICAgICAgICAgIGNiICYmIGNiKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoIGNoYW5nZSApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YWJpbGl6ZShjYik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGNiICYmIGNiKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSB0aGUgY3VycmVudCBzdGF0ZSAmIHB1c2ggaXRcbiAgICAgKiBAcGFyYW0gcFN0YXRlXG4gICAgICogQHBhcmFtIGNiXG4gICAgICovXG4gICAgc2V0U3RhdGVTeW5jKCBwU3RhdGUgKSB7XG4gICAgICAgIHZhciBpICAgICAgID0gMCwgY2hhbmdlLFxuICAgICAgICAgICAgY2hhbmdlcyA9IHRoaXMuX2NoYW5nZXNTVyA9IHRoaXMuX2NoYW5nZXNTVyB8fCB7fTtcbiAgICAgICAgZm9yICggdmFyIGsgaW4gcFN0YXRlIClcbiAgICAgICAgICAgIGlmICggIXRoaXMuc3RhdGUgfHwgcFN0YXRlLmhhc093blByb3BlcnR5KGspXG4gICAgICAgICAgICAgICAgICYmIChcbiAgICAgICAgICAgICAgICAgcFN0YXRlWyBrIF0gIT0gdGhpcy5zdGF0ZVsgayBdXG4gICAgICAgICAgICAgICAgIHx8XG4gICAgICAgICAgICAgICAgICggdGhpcy5zdGF0ZVsgayBdICYmIHBTdGF0ZVsgayBdICYmICggcFN0YXRlWyBrIF0uX3JldiAhPSB0aGlzLl9yZXZzWyBrIF0gKSApLy8gcmV2L2hhc2ggdXBkYXRlXG4gICAgICAgICAgICAgICAgICkgKSB7XG4gICAgICAgICAgICAgICAgY2hhbmdlICAgICAgICAgID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLl9yZXZzWyBrIF0gPSBwU3RhdGVbIGsgXSAmJiBwU3RhdGVbIGsgXS5fcmV2IHx8IHRydWU7XG4gICAgICAgICAgICAgICAgY2hhbmdlc1sgayBdICAgID0gcFN0YXRlWyBrIF07XG4gICAgICAgICAgICB9XG4gICAgICAgIHRoaXMuc2hvdWxkQXBwbHkoeyAuLi4oIHRoaXMuc3RhdGUgfHwge30gKSwgLi4uY2hhbmdlcyB9KSAmJiB0aGlzLnB1c2hTdGF0ZSgpO1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBnZXQgYSBzdG9yZS1rZXkgcGFpciBmb3IgU3RvcmU6Om1hcFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gICAgICogQHJldHVybnMge3tzdG9yZTogU3RvcmUsIG5hbWU6ICp9fVxuICAgICAqL1xuICAgIGFzKCBuYW1lICkge1xuICAgICAgICByZXR1cm4geyBzdG9yZTogdGhpcywgbmFtZSB9O1xuICAgIH1cbiAgICBcbiAgICBvbiggbGlzdHMgKSB7XG4gICAgICAgIGlmICggIWlzLnN0cmluZyhsaXN0cykgJiYgbGlzdHMgKVxuICAgICAgICAgICAgT2JqZWN0LmtleXMobGlzdHMpLmZvckVhY2goayA9PiBzdXBlci5vbihrLCBsaXN0c1sgayBdKSk7XG4gICAgICAgIGVsc2Ugc3VwZXIub24oLi4uYXJndW1lbnRzKTtcbiAgICB9XG4gICAgXG4gICAgcmVtb3ZlTGlzdGVuZXIoIGxpc3RzICkge1xuICAgICAgICBpZiAoICFpcy5zdHJpbmcobGlzdHMpICYmIGxpc3RzIClcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGxpc3RzKS5mb3JFYWNoKGsgPT4gc3VwZXIucmVtb3ZlTGlzdGVuZXIoaywgbGlzdHNbIGsgXSkpO1xuICAgICAgICBlbHNlIHN1cGVyLnJlbW92ZUxpc3RlbmVyKC4uLmFyZ3VtZW50cyk7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIGlzIGNvbXBsZXRlIChhbGwgcmVxdWllcmVkIGtleXMgYXJlIGhlcmUpXG4gICAgICogQHJldHVybnMgYm9vbFxuICAgICAqL1xuICAgIGlzQ29tcGxldGUoIHN0YXRlID0gdGhpcy5zdGF0ZSApIHtcbiAgICAgICAgdmFyIF9zdGF0aWMgPSB0aGlzLmNvbnN0cnVjdG9yO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgIXRoaXMuX3JlcXVpcmVcbiAgICAgICAgICAgIHx8ICF0aGlzLl9yZXF1aXJlLmxlbmd0aFxuICAgICAgICAgICAgfHwgc3RhdGUgJiYgdGhpcy5fcmVxdWlyZS5yZWR1Y2UoXG4gICAgICAgICAgICAgICAgKCByLCBrZXkgKSA9PiAoIHIgJiYgc3RhdGVbIGtleSBdICksXG4gICAgICAgICAgICAgICAgdHJ1ZVxuICAgICAgICAgICAgKVxuICAgICAgICApO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBpcyBzdGFibGVcbiAgICAgKiBAcmV0dXJucyBib29sXG4gICAgICovXG4gICAgaXNTdGFibGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zdGFibGU7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIFNlcmlhbGl6ZSBzdGF0ZSAmIGRhdGEgd2l0aCBzb3VyY2VzIHJlZnNcbiAgICAgKiBAcmV0dXJucyBib29sXG4gICAgICovXG4gICAgc2VyaWFsaXplKCBjZmcgPSB7fSwgb3V0cHV0ID0ge30gKSB7XG4gICAgICAgIGxldCByZWZzID1cbiAgICAgICAgICAgICAgICAhY2ZnLm5vcmVmcyAmJiBpcy5hcnJheSh0aGlzLl91c2UpICYmIHRoaXMuX3VzZS5yZWR1Y2UoXG4gICAgICAgICAgICAgICAgKCBtYXAsIGtleSApID0+IHsvL3RvZG9cbiAgICAgICAgICAgICAgICAgICAgbGV0IG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlhcywgcGF0aCxfa2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmU7XG4gICAgICAgICAgICAgICAgICAgIGlmICgga2V5LnN0b3JlICYmIGtleS5uYW1lICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpYXMgPSBuYW1lID0ga2V5Lm5hbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9yZSA9IGtleS5zdG9yZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICggaXMuZm4oa2V5KSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUgPSBhbGlhcyA9IGtleS5uYW1lIHx8IGtleS5kZWZhdWx0TmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlID0ga2V5O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgX2tleSAgPSBrZXkubWF0Y2goLyhbXFx3X10rKSgoPzpcXC5bXFx3X10rKSopKD86XFw6KFtcXHdfXSspKT8vKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUgID0gX2tleVsgMSBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aCAgPSBfa2V5WyAyIF0gJiYgX2tleVsgMiBdLnN1YnN0cigxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlID0gdGhpcy5zY29wZU9iai5zdG9yZXNbIF9rZXlbIDEgXSBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpYXMgPSBfa2V5WyAzIF0gfHwgcGF0aCAmJiBwYXRoLm1hdGNoKC8oW15cXC5dKikkLylbIDAgXSB8fCBfa2V5WyAxIF07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKCBzdG9yZSAmJiAhc3RvcmUuc2NvcGVPYmouXy5pc0xvY2FsSWQgKVxuICAgICAgICAgICAgICAgICAgICAgICAgbWFwWyBhbGlhcyBdID0gc3RvcmUuc2NvcGVPYmouX2lkICsgJy8nICsgbmFtZTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1hcDtcbiAgICAgICAgICAgICAgICB9LCB7fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgfHwge307XG4gICAgICAgIFxuICAgICAgICBrZXlXYWxrblNldChcbiAgICAgICAgICAgIG91dHB1dCxcbiAgICAgICAgICAgICggdGhpcy5zY29wZU9iai5faWQgKyAnLycgKyB0aGlzLm5hbWUgKSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0ZTogdGhpcy5zdGF0ZSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjZmcubm9yZWZzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA/IHsgLi4udGhpcy5zdGF0ZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICA6IE9iamVjdC5rZXlzKHRoaXMuc3RhdGUpLnJlZHVjZSgoIGgsIGsgKSA9PiAoICFyZWZzWyBrIF0gJiYgKCBoWyBrIF0gPSB0aGlzLnN0YXRlWyBrIF0gKSwgaCApLCB7fSlcbiAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBkYXRhIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGEuX19wcm90b19fID09PSBvYmpQcm90byA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGEgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgKCBpcy5ib29sKHRoaXMuZGF0YSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfHwgaXMubnVtYmVyKHRoaXMuZGF0YSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfHwgaXMuc3RyaW5nKHRoaXMuZGF0YSkgKSAmJiB0aGlzLmRhdGFcbiAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICB8fCB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAsXG4gICAgICAgICAgICAgICAgcmVmc1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gb3V0cHV0O1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiByZXN0b3JlIHN0YXRlICYgZGF0YVxuICAgICAqIEByZXR1cm5zIGJvb2xcbiAgICAgKi9cbiAgICByZXN0b3JlKCBzbmFwc2hvdCwgaW1tZWRpYXRlICkge1xuICAgICAgICBzbmFwc2hvdCA9IHNuYXBzaG90XG4gICAgICAgICAgICAgICAgICAgJiYga2V5V2Fsa25HZXQoc25hcHNob3QsIHRoaXMuc2NvcGVPYmouX2lkICsgJy8nICsgdGhpcy5uYW1lKVxuICAgICAgICAgICAgICAgICAgIHx8IHRoaXMuJHNjb3BlLnRha2VTbmFwc2hvdEJ5S2V5KHRoaXMuc2NvcGVPYmouX2lkICsgJy8nICsgdGhpcy5uYW1lKTtcbiAgICAgICAgXG4gICAgICAgIGlmICggIXNuYXBzaG90IClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgXG4gICAgICAgIGlmICggc25hcHNob3QgKSB7XG4gICAgICAgICAgICBpZiAoICF0aGlzLmlzU3RhYmxlKCkgJiYgIWltbWVkaWF0ZSApXG4gICAgICAgICAgICAgICAgdGhpcy50aGVuKCgpID0+IHJlc3RvcmUoc25hcHNob3QpKVxuICAgICAgICAgICAgbGV0IHNuYXA7XG4gICAgICAgICAgICB0aGlzLnN0YXRlID0geyAuLi5zbmFwc2hvdC5zdGF0ZSB9O1xuICAgICAgICAgICAgT2JqZWN0LmtleXMoc25hcHNob3QucmVmcykuZm9yRWFjaChcbiAgICAgICAgICAgICAgICAoIGtleSApID0+IHsvL3RvZG9cbiAgICAgICAgICAgICAgICAgICAgaWYgKCBzbmFwID0gdGhpcy4kc2NvcGUuZ2V0U25hcHNob3RCeUtleShzbmFwc2hvdC5yZWZzWyBrZXkgXSkgKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZVsga2V5IF0gPSBzbmFwLmRhdGE7XG4gICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2Fybignbm90IGZvdW5kIDogJywga2V5LCBzbmFwLnJlZnNbIGtleSBdKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5kYXRhID0gc25hcHNob3QuZGF0YTtcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIFVuIGJpbmQgdGhpcyBzdG9yZSBvZmYgdGhlIGdpdmVuIGNvbXBvbmVudC1rZXlcbiAgICAgKiBAcGFyYW0gb2JqXG4gICAgICogQHBhcmFtIGtleVxuICAgICAqIEByZXR1cm5zIHtBcnJheS48Kj59XG4gICAgICovXG4gICAgdW5CaW5kKCBvYmosIGtleSwgcGF0aCApIHtcbiAgICAgICAgdmFyIGZvbGxvd2VycyA9IHRoaXMuX2ZvbGxvd2VycyxcbiAgICAgICAgICAgIGkgICAgICAgICA9IGZvbGxvd2VycyAmJiBmb2xsb3dlcnMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGZvbGxvd2VycyAmJiBpLS0gKVxuICAgICAgICAgICAgaWYgKCBmb2xsb3dlcnNbIGkgXVsgMCBdID09PSBvYmogJiYgZm9sbG93ZXJzWyBpIF1bIDEgXSA9PT0ga2V5ICYmIGZvbGxvd2Vyc1sgaSBdWyAyIF0gPT09IHBhdGggKVxuICAgICAgICAgICAgICAgIHJldHVybiBmb2xsb3dlcnMuc3BsaWNlKGksIDEpO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBCaW5kIHRoaXMgc3RvcmUgY2hhbmdlcyB0byB0aGUgZ2l2ZW4gY29tcG9uZW50LWtleVxuICAgICAqIEBwYXJhbSBvYmoge1JlYWN0LkNvbXBvbmVudHxTdG9yZXxmdW5jdGlvbilcbiAgICAgKiBAcGFyYW0ga2V5IHtzdHJpbmd9IG9wdGlvbmFsIGtleSB3aGVyZSB0byBtYXAgdGhlIHB1YmxpYyBzdGF0ZVxuICAgICAqL1xuICAgIGJpbmQoIG9iaiwga2V5LCBzZXRJbml0aWFsID0gdHJ1ZSwgcGF0aCApIHtcbiAgICAgICAgdGhpcy5fZm9sbG93ZXJzLnB1c2goWyBvYmosIGtleSwgcGF0aCBdKTtcbiAgICAgICAgaWYgKCBzZXRJbml0aWFsICYmIHRoaXMuZGF0YSAmJiB0aGlzLl9zdGFibGUgKSB7XG4gICAgICAgICAgICBsZXQgZGF0YSA9IHBhdGggPyB0aGlzLnJldHJpZXZlKHBhdGgpIDogdGhpcy5kYXRhO1xuICAgICAgICAgICAgaWYgKCB0eXBlb2Ygb2JqICE9IFwiZnVuY3Rpb25cIiApIHtcbiAgICAgICAgICAgICAgICBpZiAoIGtleSApIG9iai5zZXRTdGF0ZSh7IFsga2V5IF06IGRhdGEgfSk7XG4gICAgICAgICAgICAgICAgZWxzZSBvYmouc2V0U3RhdGUoZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBvYmooZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogb25jZSgnc3RhYmxlJywgY2IpXG4gICAgICogQHBhcmFtIG9iaiB7UmVhY3QuQ29tcG9uZW50fFN0b3JlfGZ1bmN0aW9uKVxuICAgICAqIEBwYXJhbSBrZXkge3N0cmluZ30gb3B0aW9uYWwga2V5IHdoZXJlIHRvIG1hcCB0aGUgcHVibGljIHN0YXRlXG4gICAgICovXG4gICAgdGhlbiggY2IgKSB7XG4gICAgICAgIGlmICggdGhpcy5fc3RhYmxlIClcbiAgICAgICAgICAgIHJldHVybiBjYih0aGlzLmRhdGEpO1xuICAgICAgICB0aGlzLm9uY2UoJ3N0YWJsZScsIGUgPT4gY2IodGhpcy5kYXRhKSk7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIEFkZCBhIGxvY2sgc28gdGhlIHN0b3JlIHdpbGwgbm90IHByb3BhZyBpdCBkYXRhIHVudGlsbCByZWxlYXNlKCkgaXMgY2FsbFxuICAgICAqIEBwYXJhbSBwcmV2aW91cyB7U3RvcmV8bnVtYmVyfEFycmF5fSBAb3B0aW9uYWwgd2YgdG8gd2FpdCwgcmVsZWFzZXMgdG8gd2FpdCBvclxuICAgICAqICAgICBhcnJheSBvZiBzdHVmZiB0byB3YWl0XG4gICAgICogQHJldHVybnMge3RoaXN9XG4gICAgICovXG4gICAgd2FpdCggcHJldmlvdXMgKSB7XG4gICAgICAgIGlmICggdHlwZW9mIHByZXZpb3VzID09IFwibnVtYmVyXCIgKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX19sb2Nrcy5hbGwgKz0gcHJldmlvdXM7XG4gICAgICAgIGlmICggaXMuYXJyYXkocHJldmlvdXMpIClcbiAgICAgICAgICAgIHJldHVybiBwcmV2aW91cy5tYXAodGhpcy53YWl0LmJpbmQodGhpcykpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fc3RhYmxlICYmIHRoaXMuZW1pdCgndW5zdGFibGUnLCB0aGlzLnN0YXRlLCB0aGlzLmRhdGEpO1xuICAgICAgICB0aGlzLl9zdGFibGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fX2xvY2tzLmFsbCsrO1xuICAgICAgICBcbiAgICAgICAgbGV0IHJlYXNvbiA9IGlzLnN0cmluZyhwcmV2aW91cykgPyBwcmV2aW91cyA6IG51bGw7XG4gICAgICAgIGlmICggcmVhc29uICkge1xuICAgICAgICAgICAgdGhpcy5fX2xvY2tzWyByZWFzb24gXSA9IHRoaXMuX19sb2Nrc1sgcmVhc29uIF0gfHwgMDtcbiAgICAgICAgICAgIHRoaXMuX19sb2Nrc1sgcmVhc29uIF0rKztcbiAgICAgICAgfVxuICAgICAgICBpZiAoIHByZXZpb3VzICYmIGlzLmZuKHByZXZpb3VzLnRoZW4pICkge1xuICAgICAgICAgICAgcHJldmlvdXMudGhlbih0aGlzLnJlbGVhc2UuYmluZCh0aGlzLCBudWxsKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIERlY3JlYXNlIGxvY2tzIGZvciB0aGlzIHN0b3JlLCBpZiBpdCByZWFjaCAwICxcbiAgICAgKiBpdCB3aWxsIGJlIHByb3BhZ2F0ZWQgdG8gdGhlIGZvbGxvd2VycyxcbiAgICAgKiB0aGVuLCBhbGwgc3R1ZmYgcGFzc2VkIHRvIFwidGhlblwiIGNhbGwgYmFjayB3aWxsIGJlIGV4ZWMgLyByZWxlYXNlZFxuICAgICAqIEBwYXJhbSBkZXN5bmNcbiAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgKi9cbiAgICByZWxlYXNlKCByZWFzb24sIGNiICkge1xuICAgICAgICB2YXIgX3N0YXRpYyA9IHRoaXMuY29uc3RydWN0b3IsIG1lID0gdGhpcztcbiAgICAgICAgbGV0IGkgICAgICAgPSAwLCB3YXNTdGFibGUgPSB0aGlzLl9zdGFibGU7XG4gICAgICAgIFxuICAgICAgICBpZiAoIGlzLmZuKHJlYXNvbikgKSB7XG4gICAgICAgICAgICBjYiAgICAgPSByZWFzb247XG4gICAgICAgICAgICByZWFzb24gPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAoIHJlYXNvbiApIHtcbiAgICAgICAgICAgIGlmICggdGhpcy5fX2xvY2tzWyByZWFzb24gXSA9PSAwIClcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiUmVsZWFzZSBtb3JlIHRoYW4gbG9ja2luZyAhXCIsIHJlYXNvbik7XG4gICAgICAgICAgICB0aGlzLl9fbG9ja3NbIHJlYXNvbiBdID0gdGhpcy5fX2xvY2tzWyByZWFzb24gXSB8fCAwO1xuICAgICAgICAgICAgdGhpcy5fX2xvY2tzWyByZWFzb24gXS0tO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAoICFyZWFzb24gJiYgdGhpcy5fX2xvY2tzLmFsbCA9PSAwIClcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJSZWxlYXNlIG1vcmUgdGhhbiBsb2NraW5nICFcIik7XG4gICAgICAgIFxuICAgICAgICBpZiAoICEtLXRoaXMuX19sb2Nrcy5hbGwgJiYgdGhpcy5pc0NvbXBsZXRlKCkgKSB7XG4gICAgICAgICAgICBsZXQgcHJvcGFnICAgPSB0aGlzLnNob3VsZFByb3BhZyh0aGlzLmRhdGEpO1xuICAgICAgICAgICAgdGhpcy5fc3RhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIHByb3BhZyAmJiB0aGlzLl9yZXYrKzsvL1xuICAgICAgICAgICAgaWYgKCBwcm9wYWcgJiYgdGhpcy5fZm9sbG93ZXJzLmxlbmd0aCApXG4gICAgICAgICAgICAgICAgdGhpcy5fZm9sbG93ZXJzLmZvckVhY2goZnVuY3Rpb24gcHJvcGFnKCBmb2xsb3dlciApIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSBmb2xsb3dlclsgMiBdID8gbWUucmV0cmlldmUoZm9sbG93ZXJbIDIgXSkgOiBtZS5kYXRhO1xuICAgICAgICAgICAgICAgICAgICAvL2lmICggIWRhdGEgKSByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpZiAoIHR5cGVvZiBmb2xsb3dlclsgMCBdID09IFwiZnVuY3Rpb25cIiApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbGxvd2VyWyAwIF0oZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NiICYmIGkrKztcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbGxvd2VyWyAwIF0uc2V0U3RhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKCBmb2xsb3dlclsgMSBdICkgPyB7IFsgZm9sbG93ZXJbIDEgXSBdOiBkYXRhIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGRhdGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2NiICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAoKSA9PiAoISgtLWkpICYmIGNiKCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8pXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvL2Vsc2VcbiAgICAgICAgICAgICF3YXNTdGFibGUgJiYgdGhpcy5lbWl0KCdzdGFibGUnLCB0aGlzLmRhdGEpO1xuICAgICAgICAgICAgcHJvcGFnICYmIHRoaXMuZW1pdCgndXBkYXRlJywgdGhpcy5kYXRhKTtcbiAgICAgICAgICAgIGNiICYmIGNiKClcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGNiICYmIHRoaXMudGhlbihjYik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBcbiAgICBwcm9wYWcoIGRhdGEgKSB7XG4gICAgICAgIHRoaXMuZW1pdCgndXBkYXRlJywgZGF0YSk7XG4gICAgfVxuICAgIFxuICAgIHJldGFpbiggcmVhc29uICkge1xuICAgICAgICB0aGlzLl9fcmV0YWlucy5hbGwrKztcbiAgICAgICAgaWYgKCByZWFzb24gKSB7XG4gICAgICAgICAgICB0aGlzLl9fcmV0YWluc1sgcmVhc29uIF0gPSB0aGlzLl9fcmV0YWluc1sgcmVhc29uIF0gfHwgMDtcbiAgICAgICAgICAgIHRoaXMuX19yZXRhaW5zWyByZWFzb24gXSsrO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGRpc3Bvc2UoIHJlYXNvbiApIHtcbiAgICAgICAgLy9jb25zb2xlLndhcm4oXCJkaXNwb3NlXCIsIHJlYXNvbiwgdGhpcy5fX3JldGFpbnMpO1xuICAgICAgICBpZiAoIHJlYXNvbiApIHtcbiAgICAgICAgICAgIGlmICggIXRoaXMuX19yZXRhaW5zWyByZWFzb24gXSApXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRGlzcG9zZSBtb3JlIHRoYW4gcmV0YWluaW5nIDogXCIgKyByZWFzb24pO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLl9fcmV0YWluc1sgcmVhc29uIF0tLTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIHRoaXMuX19yZXRhaW5zLmFsbCA9PSAwIClcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkRpc3Bvc2UgbW9yZSB0aGFuIHJldGFpbmluZyAhXCIpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fX3JldGFpbnMuYWxsLS07XG4gICAgICAgIFxuICAgICAgICBpZiAoICF0aGlzLl9fcmV0YWlucy5hbGwgKSB7XG4gICAgICAgICAgICBpZiAoIHRoaXMuX3BlcnNpc3RlbmNlVG0gKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZGVzdHJveVRNICYmIGNsZWFyVGltZW91dCh0aGlzLl9kZXN0cm95VE0pO1xuICAgICAgICAgICAgICAgIHRoaXMuX2Rlc3Ryb3lUTSA9IHNldFRpbWVvdXQoXG4gICAgICAgICAgICAgICAgICAgIGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fZGVzdHJveVRNID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vdGhpcy50aGVuKHMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgIXRoaXMuX19yZXRhaW5zLmFsbCAmJiAhdGhpcy5kZWFkICYmIHRoaXMuZGVzdHJveSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAvL30pO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wZXJzaXN0ZW5jZVRtXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vdGhpcy50aGVuKHMgPT5cbiAgICAgICAgICAgICAgICAoICF0aGlzLl9fcmV0YWlucy5hbGwgJiYgIXRoaXMuZGVhZCAmJiB0aGlzLmRlc3Ryb3koKSApXG4gICAgICAgICAgICAgICAgLy8pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIC8vICBjb25zb2xlLmxvZyhcImRlc3Ryb3lcIiwgdGhpcy5fdWlkKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuZW1pdCgnZGVzdHJveScsIHRoaXMpO1xuICAgICAgICBpZiAoIHRoaXMuX3N0YWJpbGl6ZXIgKVxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX3N0YWJpbGl6ZXIpO1xuICAgICAgICBcbiAgICAgICAgaWYgKCB0aGlzLl9mb2xsb3dlcnMubGVuZ3RoIClcbiAgICAgICAgICAgIHRoaXMuX2ZvbGxvd2Vycy5mb3JFYWNoKFxuICAgICAgICAgICAgICAgICggZm9sbG93ZXIgKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICggdHlwZW9mIGZvbGxvd2VyWyAwIF0gIT09IFwiZnVuY3Rpb25cIiApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICggZm9sbG93ZXJbIDAgXS5zdG9yZXMgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBmb2xsb3dlclsgMCBdLnN0b3Jlc1sgZm9sbG93ZXJbIDEgXSBdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgdGhpcy5fZm9sbG93ZXJzLmxlbmd0aCA9IDA7XG4gICAgICAgIHRoaXMuY29uc3RydWN0b3IuX3JldiAgPSB0aGlzLnJldjtcbiAgICAgICAgdGhpcy5kZWFkICAgICAgICAgICAgICA9IHRydWU7XG4gICAgICAgIHRoaXMuX3JldnMgICAgICAgICAgICAgPSB0aGlzLmRhdGEgPSB0aGlzLnN0YXRlID0gdGhpcy5zY29wZSA9IG51bGw7XG4gICAgICAgIHRoaXMucmVtb3ZlQWxsTGlzdGVuZXJzKCk7XG4gICAgfVxufVxuXG4vKipcbiAqIGdldCBhIHN0YXRpYyBhbGlhc2VkIHJlZmVyZW5jZSBvZiBhIHN0b3JlXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICogQHJldHVybnMge3tzdG9yZTogU3RvcmUsIG5hbWU6ICp9fVxuICovXG5TdG9yZS5hcyA9IGZ1bmN0aW9uICggbmFtZSApIHtcbiAgICByZXR1cm4geyBzdG9yZTogdGhpcywgbmFtZSB9O1xufVxuXG4vKipcbiAqIE1hcCBhbGwgbmFtZWQgc3RvcmVzIGluIHtrZXlzfSB0byB0aGUge29iamVjdH0ncyBzdGF0ZVxuICogSG9vayBjb21wb25lbnRXaWxsVW5tb3VudCAoZm9yIHJlYWN0IGNvbXApIG9yIGRlc3Ryb3kgdG8gdW5CaW5kIHRoZW0gYXV0b21hdGljYWxseVxuICogQHN0YXRpY1xuICogQHBhcmFtIG9iamVjdCB7T2JqZWN0fSB0YXJnZXQgc3RhdGUgYXdhcmUgb2JqZWN0IChSZWFjdC5Db21wb25lbnR8U3RvcmV8Li4uKVxuICogQHBhcmFtIGtleXMge0FycmF5fSBFeCA6IFtcInNlc3Npb25cIiwgXCJvdGhlclN0YXRpY05hbWVkU3RvcmU6a2V5XCIsXG4gKiAgICAgc3RvcmUuYXMoJ2Fub3RoZXJLZXknKV1cbiAqL1xuU3RvcmUubWFwID0gZnVuY3Rpb24gKCBjU3RvcmUsIGtleXMsIHNjb3BlLCBvcmlnaW4sIHNldEluaXRpYWwgPSBmYWxzZSApIHtcbiAgICB2YXIgdGFyZ2V0UmV2cyAgICAgPSBjU3RvcmUuX3JldnMgfHwge307XG4gICAgdmFyIHRhcmdldFNjb3BlICAgID0gY1N0b3JlLnN0b3JlcyB8fCAoIGNTdG9yZS5zdG9yZXMgPSB7fSApO1xuICAgIHZhciBpbml0aWFsT3V0cHV0cyA9IHt9O1xuICAgIGtleXMgICAgICAgICAgICAgICA9IGlzLmFycmF5KGtleXMpID8gWyAuLi5rZXlzIF0gOiBbIGtleXMgXTtcbiAgICBcbiAgICBcbiAgICBzY29wZSA9IHNjb3BlIHx8IFN0b3JlLnN0YXRpY1Njb3BlO1xuICAgIFxuICAgIGtleXMgPSBrZXlzLmZpbHRlcihcbiAgICAgICAgLy8gQHRvZG8gOiB1c2UgcXVlcnkgcmVmc1xuICAgICAgICAvLyAoc3RvcmUpKFxcLnN0b3JlKSooXFxbKFxcKnwocHJvcHMpXFx3KykrKVxcXSk/KFxcOmFsaWFzKVxuICAgICAgICAoIGtleSApID0+IHtcbiAgICAgICAgICAgIGlmICggIWtleSApIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiTm90IGEgbWFwcGFibGUgc3RvcmUgaXRlbSAnXCIgKyBrZXkgKyBcIicgaW4gXCIgKyBvcmlnaW4gKyAnICEhJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IG5hbWUsXG4gICAgICAgICAgICAgICAgYWxpYXMsXG4gICAgICAgICAgICAgICAgcGF0aCxcbiAgICAgICAgICAgICAgICBzdG9yZSwgX2tleTtcbiAgICAgICAgICAgIGlmICgga2V5LnN0b3JlICYmIGtleS5uYW1lICkge1xuICAgICAgICAgICAgICAgIGFsaWFzID0gbmFtZSA9IGtleS5uYW1lO1xuICAgICAgICAgICAgICAgIHN0b3JlID0ga2V5LnN0b3JlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoIGlzLmZuKGtleSkgKSB7XG4gICAgICAgICAgICAgICAgbmFtZSA9IGFsaWFzID0ga2V5Lm5hbWUgfHwga2V5LmRlZmF1bHROYW1lO1xuICAgICAgICAgICAgICAgIHN0b3JlID0ga2V5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgX2tleSAgPSBrZXkubWF0Y2goLyhbXFx3X10rKSgoPzpcXC5bXFx3X10rKSopKD86XFw6KFtcXHdfXSspKT8vKTtcbiAgICAgICAgICAgICAgICBuYW1lICA9IF9rZXlbIDEgXTtcbiAgICAgICAgICAgICAgICBwYXRoICA9IF9rZXlbIDIgXSAmJiBfa2V5WyAyIF0uc3Vic3RyKDEpO1xuICAgICAgICAgICAgICAgIHN0b3JlID0gc2NvcGUuc3RvcmVzWyBfa2V5WyAxIF0gXTtcbiAgICAgICAgICAgICAgICBhbGlhcyA9IF9rZXlbIDMgXSB8fCBwYXRoICYmIHBhdGgubWF0Y2goLyhbXlxcLl0qKSQvKVsgMCBdIHx8IF9rZXlbIDEgXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICggIXN0b3JlICkge1xuICAgICAgICAgICAgICAgIGxldCBpPVtdO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIG8gaW4gc2NvcGUuc3RvcmVzKVxuICAgICAgICAgICAgICAgICAgICBpLnB1c2gobylcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiTm90IGEgbWFwcGFibGUgc3RvcmUgaXRlbSAnXCIgKyBuYW1lICsgXCIvXCIgKyBhbGlhcyArIFwiJyBpbiBcIiArICggY1N0b3JlLm5hbWUgfHwgY1N0b3JlICkgKyAnICEhJywgc3RvcmUsIF9rZXksIHNjb3BlLnN0b3JlcywgaSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCBpcy5yc1Njb3BlKHN0b3JlLnByb3RvdHlwZSkgKSBzY29wZS5fbW91bnQobmFtZSk7XG4gICAgICAgICAgICBpZiAoIGlzLnJzU2NvcGUoc3RvcmUpICkge1xuICAgICAgICAgICAgICAgIHN0b3JlID0gc2NvcGUuX21vdW50KGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICggdGFyZ2V0UmV2c1sgbmFtZSBdICkgcmV0dXJuIGZhbHNlOy8vIGlnbm9yZSBkYmwgdXNlcyBmb3Igbm93XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKCBpcy5mbihzdG9yZSkgKSB7XG4gICAgICAgICAgICAgICAgc2NvcGUuX21vdW50KG5hbWUpXG4gICAgICAgICAgICAgICAgc2NvcGUuc3RvcmVzWyBuYW1lIF0uYmluZChjU3RvcmUsIGFsaWFzLCBzZXRJbml0aWFsLCBwYXRoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHN0b3JlLmJpbmQoY1N0b3JlLCBhbGlhcywgc2V0SW5pdGlhbCwgcGF0aCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIGdpdmUgaW5pdGlhbCBzdG9yZSB3ZWlnaHQgYmFzaW5nIHNvdXJjZXNcbiAgICAgICAgICAgIHNjb3BlLnN0b3Jlc1sgbmFtZSBdLl9zb3VyY2VzICYmIGNTdG9yZS5fc291cmNlcy5wdXNoKC4uLnNjb3BlLnN0b3Jlc1sgbmFtZSBdLl9zb3VyY2VzKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGFyZ2V0UmV2c1sgYWxpYXMgXSA9IHRhcmdldFJldnNbIGFsaWFzIF0gfHwgdHJ1ZTtcbiAgICAgICAgICAgICF0YXJnZXRTY29wZVsgbmFtZSBdICYmICggdGFyZ2V0U2NvcGVbIG5hbWUgXSA9IHNjb3BlLnN0b3Jlc1sgbmFtZSBdICk7XG4gICAgICAgICAgICBpZiAoIHNjb3BlLnN0b3Jlc1sgbmFtZSBdLmhhc093blByb3BlcnR5KCdkYXRhJykgKVxuICAgICAgICAgICAgICAgIGluaXRpYWxPdXRwdXRzWyBuYW1lIF0gPSBzY29wZS5kYXRhWyBuYW1lIF07XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICk7XG4gICAgXG4gICAgLy8gLi4uIEB0b2RvXG4gICAgY1N0b3JlLm9uY2UoJ2Rlc3Ryb3knLCAoIC4uLmFyZ3ogKSA9PiB7XG4gICAgICAgIGtleXMubWFwKFxuICAgICAgICAgICAgKCBrZXkgKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IG5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGFsaWFzLCBwYXRoLFxuICAgICAgICAgICAgICAgICAgICBzdG9yZTtcbiAgICAgICAgICAgICAgICBpZiAoIGtleS5zdG9yZSAmJiBrZXkubmFtZSApIHtcbiAgICAgICAgICAgICAgICAgICAgYWxpYXMgPSBuYW1lID0ga2V5Lm5hbWU7XG4gICAgICAgICAgICAgICAgICAgIHN0b3JlID0ga2V5LnN0b3JlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICggaXMuZm4oa2V5KSApIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZSA9IGFsaWFzID0ga2V5Lm5hbWUgfHwga2V5LmRlZmF1bHROYW1lO1xuICAgICAgICAgICAgICAgICAgICBzdG9yZSA9IHNjb3BlLnN0b3Jlc1sgbmFtZSBdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAga2V5ICAgPSBrZXkubWF0Y2goLyhbXFx3X10rKSgoPzpcXC5bXFx3X10rKSopKD86XFw6KFtcXHdfXSspKT8vKTtcbiAgICAgICAgICAgICAgICAgICAgbmFtZSAgPSBrZXlbIDEgXTtcbiAgICAgICAgICAgICAgICAgICAgcGF0aCAgPSBrZXlbIDIgXSAmJiBrZXlbIDIgXS5zdWJzdHIoMSk7XG4gICAgICAgICAgICAgICAgICAgIHN0b3JlID0gc2NvcGUuc3RvcmVzWyBrZXlbIDEgXSBdO1xuICAgICAgICAgICAgICAgICAgICBhbGlhcyA9IGtleVsgMyBdIHx8IHBhdGggJiYgcGF0aC5tYXRjaCgvKFteXFwuXSopJC8pWyAwIF0gfHwga2V5WyAxIF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHN0b3JlICYmICFpcy5mbihzdG9yZSkgJiYgc3RvcmUudW5CaW5kKGNTdG9yZSwgYWxpYXMsIHBhdGgpXG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfSlcbiAgICBcbiAgICByZXR1cm4gaW5pdGlhbE91dHB1dHM7XG59O1xuXG5cbmlzLnJzU3RvcmUgPSBmdW5jdGlvbiAoIG9iaiApIHtcbiAgICByZXR1cm4gb2JqIGluc3RhbmNlb2YgU3RvcmVcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RvcmU7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1N0b3JlLmpzIiwiLypcbiAqIENvcHlyaWdodCAoYykgIDIwMTggV2lzZSBXaWxkIFdlYiAuXG4gKlxuICogIE1JVCBMaWNlbnNlXG4gKlxuICogIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqICBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiAgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqICBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqICBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqICBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcbiAqICBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqICBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiAgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiAgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiAgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiAgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcbiAqICBTT0ZUV0FSRS5cbiAqXG4gKiBAYXV0aG9yIDogTmF0aGFuYWVsIEJyYXVuXG4gKiBAY29udGFjdCA6IGNhaXBpbGFic0BnbWFpbC5jb21cbiAqL1xuXG4vL2ltcG9ydCBpbmRleCBmcm9tIFwiLi9pbmRleFwiOy8vIHdpbGwgdXNlIGFzIGV4dGVybmFsIHRoZSBpbmRleCBpbiBkaXN0XG5pbXBvcnQgaXMgZnJvbSBcImlzXCI7XG5cbi8qKlxuICogTWluaW1hbCBwdXNoIHNlcXVlbmNlciwgYXBwbHkgc3RvcmVzIHNwZWNpZmljIHRhc2sgaW4gdGhlIHJpZ2h0IG9yZGVyIChyb290IHN0b3Jlc1xuICogZmlyc3QpXG4gKi9cbmxldCB0YXNrUXVldWUgICAgICA9IFtdLFxuICAgIGN1cldlaWdodCAgICAgID0gMCxcbiAgICBtYXhXZWlnaHQgICAgICA9IDAsXG4gICAgbWluV2VpZ2h0ICAgICAgPSAwLFxuICAgIHRhc2tDb3VudCAgICAgID0gMCxcbiAgICBkZVN5bmMgICAgICAgICA9IGZhbHNlLFxuICAgIGRlU3luY01heFRhc2tzID0gMTAsXG4gICAgdGFzayxcbiAgICBpc1J1bm5pbmcsXG4gICAgZXJyb3JDYXRjaGVyICAgPSB7XG4gICAgICAgIGxhc3RFcnJvcjogbnVsbCxcbiAgICAgICAgZGlzcGF0Y2ggOiBmdW5jdGlvbiAoIGVycm9yICkge1xuICAgICAgICAgICAgZXJyb3JDYXRjaGVyLmRpc2FibGUoKTtcbiAgICAgICAgICAgIGlmICggdGFzayAmJiB0YXNrWyAwIF0uaGFuZGxlRXJyb3IgKSB7XG4gICAgICAgICAgICAgICAgdGFza1sgMCBdLmhhbmRsZUVycm9yKGVycm9yLCB0YXNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKCB0YXNrIClcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiUmVTY29wZSA6IEFuIGFwcGx5IHRhc2sgaGFzIGZhaWxlZCAhIVwiLCB0YXNrWyAxIF0sIFwiIG9uIFwiLCB0YXNrWyAwIF0ubmFtZSB8fCB0YXNrWyAwIF0uY29uc3RydWN0b3IubmFtZSlcbiAgICAgICAgXG4gICAgICAgICAgICBpc1J1bm5pbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIHRhc2sgICAgICA9IG51bGw7XG4gICAgICAgICAgICBydW5Ob3coKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW5hYmxlICAgOiAoIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnIClcbiAgICAgICAgICAgICAgICAgICA/ICgpID0+IHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCBlcnJvckNhdGNoZXIuZGlzcGF0Y2gpXG4gICAgICAgICAgICB9IDogKCkgPT4ge1xuICAgICAgICAgICAgICAgIHByb2Nlc3Mub24oJ3VuY2F1Z2h0RXhjZXB0aW9uJywgZXJyb3JDYXRjaGVyLmRpc3BhdGNoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIGRpc2FibGUgIDogKCB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyApXG4gICAgICAgICAgICAgICAgICAgPyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgZXJyb3JDYXRjaGVyLmRpc3BhdGNoKVxuICAgICAgICAgICAgfSA6ICgpID0+IHtcbiAgICAgICAgICAgICAgICBwcm9jZXNzLnJlbW92ZUxpc3RlbmVyKCd1bmNhdWdodEV4Y2VwdGlvbicsIGVycm9yQ2F0Y2hlci5kaXNwYXRjaCk7XG4gICAgICAgICAgICB9XG4gICAgfVxuO1xuXG5mdW5jdGlvbiBydW5Ob3coKSB7XG4gICAgaWYgKCAhaXNSdW5uaW5nICkge1xuICAgICAgICBydW4oKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJ1bigpIHtcbiAgICBsZXQgZnJvbSAgPSBEYXRlLm5vdygpO1xuICAgIGlzUnVubmluZyA9IHRydWU7XG4gICAgZXJyb3JDYXRjaGVyLmVuYWJsZSgpO1xuICAgIHdoaWxlICggdGFza0NvdW50ICkge1xuICAgICAgICBcbiAgICAgICAgLy8gdHJ5IGZvciB0aGUgY3VycmVudCB3ZWlnaHRcbiAgICAgICAgd2hpbGUgKCAhKCB0YXNrUXVldWVbIGN1cldlaWdodCBdICYmIHRhc2tRdWV1ZVsgY3VyV2VpZ2h0IF0ubGVuZ3RoICkgKVxuICAgICAgICAgICAgY3VyV2VpZ2h0Kys7XG4gICAgICAgIFxuICAgICAgICB0YXNrQ291bnQtLTtcbiAgICAgICAgdGFzayA9IHRhc2tRdWV1ZVsgY3VyV2VpZ2h0IF0uc2hpZnQoKTtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcIlRhc2sgOiBcIiwgdGFza1sxXSwgXCIgb24gXCIsIHRhc2tbMF0ubmFtZSk7XG4gICAgICAgIHRhc2tbIDAgXVsgdGFza1sgMSBdIF0uYXBwbHkodGFza1sgMCBdLCB0YXNrWyAyIF0pO1xuICAgIH1cbiAgICB0YXNrID0gdW5kZWZpbmVkO1xuICAgIGVycm9yQ2F0Y2hlci5kaXNhYmxlKCk7XG4gICAgXG4gICAgaXNSdW5uaW5nID0gZmFsc2U7XG4gICAgaWYgKCB0YXNrQ291bnQgKSB7XG4gICAgICAgIHNldFRpbWVvdXQocnVuTm93KTtcbiAgICB9XG59XG5cbi8vXG4vL2luZGV4LnNldFRhc2tEZVN5bmMgPSAoIG5iICkgPT4ge1xuLy8gICAgaWYgKCBuYiA9PT0gZmFsc2UgKVxuLy8gICAgICAgIHJldHVybiBkZVN5bmMgPSBmYWxzZTtcbi8vICAgIGVsc2UgaWYgKCBuYiA9PT0gdHJ1ZSApIHtcbi8vICAgICAgICBkZVN5bmMgICAgICAgICA9IHRydWU7XG4vLyAgICAgICAgZGVTeW5jTWF4VGFza3MgPSAxMDtcbi8vICAgIH1cbi8vICAgIGVsc2UgKGlzLmludChuYikpXG4vLyAgICB7XG4vLyAgICAgICAgZGVTeW5jICAgICAgICAgPSB0cnVlO1xuLy8gICAgICAgIGRlU3luY01heFRhc2tzID0gbmI7XG4vLyAgICB9XG4vL307XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBwdXNoVGFzayggb2JqLCBmbiwgYXJneiApIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBtb3JlIGEgc3RvcmUgaGF2ZSBzb3VyY2VzLCB0aGUgbW9yZSBpdCBzaG91bGQgYmUgcHJvY2Vzc2VkIGZpcnN0XG4gICAgICAgICAqIFNvIGxlYWZzIHN0b3JlcyBzdGF5IHN5bmMsIGFuZCByb290IHN0b3JlcyByZWNlaXZlIG1lcmdlZCBzdGF0ZSB1cGRhdGVzO1xuICAgICAgICAgKiBnbG9iYWwgc3RhdGUgc3RheSBjb2hlcmVudFxuICAgICAgICAgKlxuICAgICAgICAgKiBUaGlzIG1lYW4gd2hhdGV2ZXIgdGhlIG51bWJlciBvZiBzdG9yZXMgJiB0aGUgY29tcGxleGl0eSBvZiB0aGUgZGVwcyxcbiAgICAgICAgICogdXBkYXRpbmcgYSBzdG9yZSBzdGF0ZSB3aWxsIHVwZGF0ZSBpdHMgc3luY2hyb25lIGNoaWxkIHN0b3JlcyBpbW1lZGlhdGVseVxuICAgICAgICAgKlxuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSB7KnxudW1iZXJ9XG4gICAgICAgICAqL1xuICAgICAgICBsZXQgd2VpZ2h0ID0gb2JqLl9zb3VyY2VzICYmIG9iai5fc291cmNlcy5sZW5ndGggfHwgMSxcbiAgICAgICAgICAgIHN0YWNrICA9IHRhc2tRdWV1ZVsgd2VpZ2h0IF0gPVxuICAgICAgICAgICAgICAgIHRhc2tRdWV1ZVsgd2VpZ2h0IF0gfHwgW107XG4gICAgICAgIFxuICAgICAgICBtYXhXZWlnaHQgPSBNYXRoLm1heChtYXhXZWlnaHQsIHdlaWdodCk7XG4gICAgICAgIGN1cldlaWdodCA9IE1hdGgubWluKGN1cldlaWdodCwgd2VpZ2h0KTtcbiAgICAgICAgdGFza0NvdW50Kys7XG4gICAgICAgIFxuICAgICAgICAvL2NvbnNvbGUubG9nKFwiUHVzaCBUYXNrIDogXCIsIGZuLCBcIiBvbiBcIiwgb2JqLm5hbWUsIHdlaWdodCk7XG4gICAgICAgIHN0YWNrLnB1c2goWyBvYmosIGZuLCBhcmd6IF0pO1xuICAgICAgICBzZXRUaW1lb3V0KHJ1bk5vdywgMCk7XG4gICAgICAgIHJldHVybiBzdGFjay5sZW5ndGg7XG4gICAgfVxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbHMvVGFza1NlcXVlbmNlci5qcyIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpICAyMDE4IFdpc2UgV2lsZCBXZWIgLlxuICpcbiAqICBNSVQgTGljZW5zZVxuICpcbiAqICBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiAgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqICB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiAgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiAgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiAgVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG4gKiAgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqICBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG4gKiAgU09GVFdBUkUuXG4gKlxuICogQGF1dGhvciA6IE5hdGhhbmFlbCBCcmF1blxuICogQGNvbnRhY3QgOiBjYWlwaWxhYnNAZ21haWwuY29tXG4gKi9cblxuaW1wb3J0IGlzICAgIGZyb20gJ2lzJ1xuXG5jb25zdCBTaW1wbGVPYmplY3RQcm90byA9ICgge30gKS5jb25zdHJ1Y3RvcjtcblxubGV0IHNjb3BhYmxlcyA9IFtdO1xuXG5mdW5jdGlvbiBhZGRTY29wYWJsZVR5cGUoIHRlc3QsIGhhbmRsZSwgbWVtYmVyID0gZmFsc2UsIHN0YXRlU2NvcGUgPSBmYWxzZSApIHtcbiAgICBzY29wYWJsZXMucHVzaChcbiAgICAgICAge1xuICAgICAgICAgICAgdGVzdCxcbiAgICAgICAgICAgIG1lbWJlcixcbiAgICAgICAgICAgIHN0YXRlU2NvcGUsXG4gICAgICAgICAgICBoYW5kbGVcbiAgICAgICAgfVxuICAgIClcbn1cblxuLy9cbmZ1bmN0aW9uIGlzU2NvcGFibGVUeXBlKCBDb21wLCBtZW1iZXIsIHN0YXRlU2NvcGUgKSB7XG4gICAgXG4gICAgZm9yICggbGV0IGkgPSAwOyBpIDwgc2NvcGFibGVzLmxlbmd0aDsgaSsrIClcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgKCBtZW1iZXIgPT09IHVuZGVmaW5lZCB8fCBtZW1iZXIgPT0gc2NvcGFibGVzWyBpIF0ubWVtYmVyIClcbiAgICAgICAgICAgICYmIHN0YXRlU2NvcGUgPT0gc2NvcGFibGVzWyBpIF0uc3RhdGVTY29wZVxuICAgICAgICAgICAgJiYgc2NvcGFibGVzWyBpIF0udGVzdChDb21wKVxuICAgICAgICApXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICBcbiAgICByZXR1cm4gZmFsc2U7XG4gICAgXG59XG5cbmZ1bmN0aW9uIGFwcGx5U2NvcGFibGVUeXBlKCBDb21wLCBhcmd6LCBtZW1iZXIsIHN0YXRlU2NvcGUgKSB7XG4gICAgXG4gICAgZm9yICggbGV0IGkgPSAwOyBpIDwgc2NvcGFibGVzLmxlbmd0aDsgaSsrIClcbiAgICAgICAgaWYgKCBtZW1iZXIgPT0gc2NvcGFibGVzWyBpIF0ubWVtYmVyICYmIHN0YXRlU2NvcGUgPT0gc2NvcGFibGVzWyBpIF0uc3RhdGVTY29wZSAmJiBzY29wYWJsZXNbIGkgXS50ZXN0KENvbXApIClcbiAgICAgICAgICAgIHJldHVybiBzY29wYWJsZXNbIGkgXS5oYW5kbGUoQ29tcCwgLi4uYXJneik7XG4gICAgXG4gICAgY29uc29sZS53YXJuKFwicmVTY29wZSA6IFVua25vd24gdHlwZVwiLCBDb21wKVxuICAgIFxuICAgIHJldHVybiBmYWxzZTtcbiAgICBcbn1cblxuZnVuY3Rpb24gcmVTY29wZSggLi4uYXJneiApIHtcbiAgICAvLyBhcmUgd2UgZGVjb3JhdGluZyBhIG1lbWJlciAvIHdpdGhvdXQgYXJnelxuICAgIGlmICggYXJnelsgMCBdIGluc3RhbmNlb2YgU2ltcGxlT2JqZWN0UHJvdG8gJiYgYXJnelsgMiBdIGluc3RhbmNlb2YgU2ltcGxlT2JqZWN0UHJvdG8gJiYgYXJnelsgMCBdLmhhc093blByb3BlcnR5KGFyZ3pbIDEgXSkgKSB7XG4gICAgICAgIGFyZ3pbIDIgXS52YWx1ZSA9IGFwcGx5U2NvcGFibGVUeXBlKGFyZ3pbIDAgXSwgW10sIHRydWUsIGZhbHNlKTtcbiAgICAgICAgcmV0dXJuIGFyZ3pbIDAgXTtcbiAgICB9XG4gICAgZWxzZSBpZiAoICFpc1Njb3BhYmxlVHlwZShhcmd6WyAwIF0sIHVuZGVmaW5lZCwgZmFsc2UpICkge1xuICAgICAgICByZXR1cm4gKCAuLi5hcmd6MiApID0+IHtcbiAgICAgICAgICAgIC8vIGFyZSB3ZSBkZWNvcmF0aW5nIGEgbWVtYmVyIC8gd2l0aCBhcmd6XG4gICAgICAgICAgICBpZiAoIGFyZ3oyWyAwIF0gaW5zdGFuY2VvZiBTaW1wbGVPYmplY3RQcm90byAmJiBhcmd6MlsgMiBdIGluc3RhbmNlb2YgU2ltcGxlT2JqZWN0UHJvdG8gJiYgYXJnejJbIDAgXS5oYXNPd25Qcm9wZXJ0eShhcmd6MlsgMSBdKSApIHtcbiAgICAgICAgICAgICAgICBhcmd6MlsgMiBdLnZhbHVlID0gYXBwbHlTY29wYWJsZVR5cGUoYXJnejJbIDAgXSwgYXJneiwgdHJ1ZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIHJldHVybiBhcmd6MlsgMCBdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHJldHVybiByZVNjb3BlKGFyZ3oyWyAwIF0sIC4uLmFyZ3opO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBhcHBseVNjb3BhYmxlVHlwZShhcmd6WyAwIF0sIGFyZ3ouc2xpY2UoMSksIGZhbHNlLCBmYWxzZSk7XG59XG5cbmZ1bmN0aW9uIHNjb3BlVG9TdGF0ZSggLi4uYXJneiApIHtcbiAgICAvLyBhcmUgd2UgZGVjb3JhdGluZyBhIG1lbWJlciAvIHdpdGhvdXQgYXJnelxuICAgIGlmICggYXJnelsgMCBdIGluc3RhbmNlb2YgU2ltcGxlT2JqZWN0UHJvdG8gJiYgYXJnelsgMiBdIGluc3RhbmNlb2YgU2ltcGxlT2JqZWN0UHJvdG8gJiYgYXJnelsgMCBdLmhhc093blByb3BlcnR5KGFyZ3pbIDEgXSkgKSB7XG4gICAgICAgIGFyZ3pbIDIgXS52YWx1ZSA9IGFwcGx5U2NvcGFibGVUeXBlKGFyZ3pbIDAgXSwgW10sIHRydWUsIHRydWUpO1xuICAgICAgICByZXR1cm4gYXJnelsgMCBdO1xuICAgIH1cbiAgICBlbHNlIGlmICggIWlzU2NvcGFibGVUeXBlKGFyZ3pbIDAgXSwgdW5kZWZpbmVkLCB0cnVlKSApIHtcbiAgICAgICAgcmV0dXJuICggLi4uYXJnejIgKSA9PiB7XG4gICAgICAgICAgICAvLyBhcmUgd2UgZGVjb3JhdGluZyBhIG1lbWJlciAvIHdpdGggYXJnelxuICAgICAgICAgICAgaWYgKCBhcmd6MlsgMCBdIGluc3RhbmNlb2YgU2ltcGxlT2JqZWN0UHJvdG8gJiYgYXJnejJbIDIgXSBpbnN0YW5jZW9mIFNpbXBsZU9iamVjdFByb3RvICYmIGFyZ3oyWyAwIF0uaGFzT3duUHJvcGVydHkoYXJnejJbIDEgXSkgKSB7XG4gICAgICAgICAgICAgICAgYXJnejJbIDIgXS52YWx1ZSA9IGFwcGx5U2NvcGFibGVUeXBlKGFyZ3oyWyAwIF0sIGFyZ3osIHRydWUsIHRydWUpO1xuICAgICAgICAgICAgICAgIHJldHVybiBhcmd6MlsgMCBdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHJldHVybiBzY29wZVRvU3RhdGUoYXJnejJbIDAgXSwgLi4uYXJneik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGFwcGx5U2NvcGFibGVUeXBlKGFyZ3pbIDAgXSwgYXJnei5zbGljZSgxKSwgZmFsc2UsIHRydWUpO1xufVxuXG4vL1xuLy9hZGRTY29wYWJsZVR5cGUoXG4vLyAgICAoIENvbXAgKSA9PiAoQ29tcCAmJiBDb21wLnByb3RvdHlwZSBpbnN0YW5jZW9mIFN0b3JlKSxcbi8vICAgIGZ1bmN0aW9uIHJlU2NvcGUoIC4uLmFyZ3ogKSB7XG4vLyAgICAgICAgbGV0IEJhc2VTdG9yZSAgICA9ICghYXJnelswXSB8fCBhcmd6WzBdLnByb3RvdHlwZSBpbnN0YW5jZW9mIFN0b3JlKSAmJlxuLy8gYXJnei5zaGlmdCgpLCBzY29wZSAgICAgICAgPSAoIWFyZ3pbMF0gfHwgYXJnelswXSBpbnN0YW5jZW9mIFNjb3BlIHx8IGlzLmZuKGFyZ3pbMF0pKVxuLy8gJiYgYXJnei5zaGlmdCgpLCB1c2UgICAgICAgICAgPSAoaXMuYXJyYXkoYXJnelswXSkpICYmIGFyZ3ouc2hpZnQoKSwgc3RhdGVNYXAgICAgID1cbi8vICF1c2UgJiYgKCFhcmd6WzBdIHx8IGFyZ3pbMF0gaW5zdGFuY2VvZiBTaW1wbGVPYmplY3RQcm90bykgJiYgYXJnei5zaGlmdCgpLFxuLy8gaW5pdGlhbFN0YXRlID0ge307ICBsZXQgY29tcE5hbWUgPSBCYXNlU3RvcmUuZGlzcGxheU5hbWUgfHwgQmFzZVN0b3JlLm5hbWU7ICB1c2UgPVxuLy8gWy4uLihCYXNlU3RvcmUudXNlIHx8IFtdKSwgLi4uKHVzZSB8fCBbXSldOyBzdGF0ZU1hcCAmJlxuLy8gU2NvcGUuc3RhdGVNYXBUb1JlZkxpc3Qoc3RhdGVNYXAsIGluaXRpYWxTdGF0ZSwgdXNlKTsgIGNsYXNzIFN0YXRlU2NvcGVkU3RvcmUgZXh0ZW5kc1xuLy8gQmFzZVN0b3JlIHsgc3RhdGljIHVzZSAgICAgICAgID0gdXNlOyBzdGF0aWMgZGlzcGxheU5hbWUgPSBcInN0YXRlU2NvcGVkKFwiICsgY29tcE5hbWUgK1xuLy8gXCIpXCI7ICBjb25zdHJ1Y3RvciggLi4uYXJneiApIHsgc3VwZXIoc2NvcGUsIGFyZ3ouc2xpY2UoYXJnelswXSBpbnN0YW5jZW9mIFNjb3BlID8gMSA6XG4vLyAwKSkgfSB9ICByZXR1cm4gU3RhdGVTY29wZWRTdG9yZTsgfSwgZmFsc2UsIHRydWUgKVxuXG5cbmV4cG9ydCB7XG4gICAgYWRkU2NvcGFibGVUeXBlLFxuICAgIHJlU2NvcGUsXG4gICAgc2NvcGVUb1N0YXRlXG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlscy9zY29wYWJsZS5qcyJdLCJzb3VyY2VSb290IjoiIn0=