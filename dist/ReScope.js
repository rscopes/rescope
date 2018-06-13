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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYzk1YWM4ZjVkMWRkYTA2NzJlODQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9TY29wZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvaXMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaXNcIiIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL0VtaXR0ZXIuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic2hvcnRpZFwiIiwid2VicGFjazovLy8uL3NyYy9TdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvVGFza1NlcXVlbmNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvc2NvcGFibGUuanMiXSwibmFtZXMiOlsiJGdsb2JhbCIsIndpbmRvdyIsImdsb2JhbCIsIlJTIiwiX19fcmVzY29wZSIsImNvbnNvbGUiLCJ3YXJuIiwiU3RvcmUiLCJTY29wZSIsIkNvbnRleHQiLCJyZVNjb3BlIiwic2NvcGVUb1N0YXRlIiwicmVTY29wZVN0YXRlIiwiYWRkU2NvcGFibGVUeXBlIiwic2NvcGVSZWYiLCJtYXAiLCJrZXkiLCJyZXF1aXJlIiwid2Fsa25TZXQiLCJ3YWxrbkdldCIsImtleVdhbGtuU2V0Iiwia2V5V2Fsa25HZXQiLCJFdmVudEVtaXR0ZXIiLCJzaG9ydGlkIiwiX19wcm90b19fcHVzaCIsInRhcmdldCIsImlkIiwicGFyZW50IiwiZm4iLCJwcm90b3R5cGUiLCJfIiwib3BlblNjb3BlcyIsIlNpbXBsZU9iamVjdFByb3RvIiwiY29uc3RydWN0b3IiLCJzY29wZXMiLCJza2V5IiwiaXMiLCJhcnJheSIsInNvcnQiLCJhIiwiYiIsImZpcnN0bmFtZSIsImpvaW4iLCJzbSIsInN0YXRlIiwiX3JlZnMiLCJhY3Rpb25zIiwicGF0aCIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwiY3BhdGgiLCJwdXNoIiwiRnVuY3Rpb24iLCJhcyIsInN0b3Jlc01hcCIsInNuYXBzaG90IiwiZGF0YSIsImluY3JlbWVudElkIiwicGVyc2lzdGVuY2VUbSIsImF1dG9EZXN0cm95Iiwicm9vdEVtaXR0ZXIiLCJib3VuZGVkQWN0aW9ucyIsImtleUluZGV4IiwiX2lkIiwiZ2VuZXJhdGUiLCJpc0xvY2FsSWQiLCJyZWdpc3RlciIsImkiLCJfcmV2Iiwic3RvcmVzIiwiX2F1dG9EZXN0cm95IiwiZGVhZCIsIkVycm9yIiwic291cmNlcyIsImNoaWxkU2NvcGVzIiwiY2hpbGRTY29wZXNMaXN0IiwidW5TdGFibGVDaGlsZHMiLCJzZWVuQ2hpbGRzIiwiX19yZXRhaW5zIiwiYWxsIiwiX19sb2NrcyIsIl9ib3VuZGVkQWN0aW9ucyIsInRlc3QiLCJpbmNsdWRlcyIsImJpbmQiLCJfbGlzdGVuaW5nIiwiX3Njb3BlIiwiX21peGVkIiwiX21peGVkTGlzdCIsImZvbGxvd2VycyIsInJldGFpbiIsIl9zdGFibGUiLCJ3YWl0Iiwib24iLCJfcGFyZW50TGlzdCIsInJlbGVhc2UiLCJfcHJvcGFnIiwiX2FkZENoaWxkIiwicmVzdG9yZSIsInNldFRpbWVvdXQiLCJkaXNwb3NlIiwic3RvcmVzTGlzdCIsIl9tb3VudCIsImsiLCJhcmd1bWVudHMiLCJyZWYiLCJzbmFwIiwicGFyc2VSZWYiLCJzdG9yZUlkIiwicmVkdWNlIiwibW91bnRlZCIsImN0eCIsInN0b3JlIiwidGFza1F1ZXVlIiwicnNTdG9yZSIsIm5hbWUiLCJsZW5ndGgiLCJzaGlmdCIsInJzU2NvcGUiLCIkcGFyZW50IiwibW91bnQiLCJzbGljZSIsInVuZGVmaW5lZCIsInNldFN0YXRlIiwiX3dhdGNoU3RvcmUiLCJpc1N0YWJsZSIsInByb3BhZyIsInRhcmdldEN0eCIsImxpc3RzIiwicmVsaW5rIiwic2luZ2xldG9uIiwic3JjQ3R4IiwiZXh0ZXJuYWwiLCJmb3JjZSIsImxjdHgiLCJpbmZvIiwidG1wIiwiZGVzdHJveSIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsImdldCIsInNldCIsInYiLCJhY3RpdmVBY3Rpb25zIiwiYWN0IiwiaGFzT3duUHJvcGVydHkiLCJfX3RhcmdldFN0b3JlcyIsImRpc3BhdGNoIiwib2JqIiwic2V0SW5pdGlhbCIsImxhc3RSZXZzIiwicmVmS2V5cyIsInN0cmluZyIsInJldnMiLCJyZXYiLCJyZWZzIiwicmV0YWluU3RvcmVzIiwiZ2V0VXBkYXRlcyIsImRpc3Bvc2VTdG9yZXMiLCJzcGxpY2UiLCJ0byIsInJlZkxpc3QiLCJtaXhlZENXVW5tb3VudCIsInVuTW91bnRLZXkiLCJpc1JlYWN0Q29tcG9uZW50IiwidW5CaW5kIiwiYWxpYXMiLCJyZXRyaWV2ZSIsInNwbGl0IiwicmV0cmlldmVTdG9yZSIsInN0b3Jlc1Jldk1hcCIsImxvY2FsIiwidXBkYXRlZCIsImdldFN0b3Jlc1JldnMiLCJyZXZNYXAiLCJvdXRwdXQiLCJjaGlsZHMiLCJfZ2V0QWxsQ2hpbGRzIiwiY2ZnIiwid2l0aENoaWxkcyIsIndpdGhQYXJlbnRzIiwid2l0aE1peGVkIiwibm9yZWZzIiwic2VyaWFsaXplIiwid2l0aENoaWxkIiwiaCIsInN0YXJ0c1dpdGgiLCJzdWJzdHIiLCJib29sIiwidGFrZVNuYXBzaG90QnlLZXkiLCJnZXRTbmFwc2hvdEJ5S2V5IiwicmVwbGFjZSIsImRlbGV0ZVNuYXBzaG90QnlLZXkiLCJwU3RhdGUiLCJfcmVmIiwiYWN0aW9uIiwiYXJneiIsInN0YWNrIiwiYkFjdHMiLCJ0cmlnZ2VyIiwiY2IiLCJvbmNlIiwicmVhc29uIiwiZW1pdCIsImVycm9yIiwic3RhYmlsaXplclRNIiwiY2xlYXJUaW1lb3V0IiwicHJvcGFnVE0iLCJyZW1hcHMiLCJ3YXNTdGFibGUiLCJpbmRleE9mIiwidW4iLCJkZXN0cm95VE0iLCJyZW1vdmVMaXN0ZW5lciIsImZvbGxvd2VyIiwiX3JtQ2hpbGQiLCJ2YWx1ZSIsImlzS2V5IiwiZmlsdGVyIiwiRW1pdHRlciIsIl9ldmVudHMiLCJldnQiLCJUYXNrU2VxdWVuY2VyIiwib2JqUHJvdG8iLCJnZXRQcm90b3R5cGVPZiIsIl9zdGF0aWMiLCJzY29wZSIsImdldFNjb3BlIiwic3RhdGljU2NvcGUiLCJ3YXRjaHMiLCJ1c2UiLCJhcHBseSIsImluaXRpYWxTdGF0ZSIsImRlZmF1bHRTdGF0ZSIsImFwcGxpZWQiLCJfdWlkIiwiX29uU3RhYmlsaXplIiwiX3BlcnNpc3RlbmNlVG0iLCJfY2ZnIiwic2NvcGVPYmoiLCIkc2NvcGUiLCIkc3RvcmVzIiwiJGFjdGlvbnMiLCIkZGlzcGF0Y2giLCJfcmV2cyIsIl9yZXF1aXJlIiwiX3NvdXJjZXMiLCJfdXNlIiwibWF0Y2giLCJyZWYyIiwiX2ZvbGxvd2VycyIsIl9jaGFuZ2VzU1ciLCJfYWZ0ZXJDb25zdHJ1Y3RvciIsImluaXRpYWxEYXRhIiwic2hvdWxkQXBwbHkiLCJtYW5hZ2VkIiwibkRhdGFzIiwiciIsImNEYXRhcyIsImlzQ29tcGxldGUiLCJmb2xsb3ciLCJjYWxsIiwiY2hhbmdlcyIsInJlZmluZSIsIl9fcHJvdG9fXyIsIl9zdGFiaWxpemVyIiwicHVzaFRhc2siLCJucyIsImRvV2FpdCIsIm9yaWdpbiIsImluaXRpYWxPdXRwdXRzIiwicyIsImhhc0RhdGFDaGFuZ2UiLCJzdGFibGUiLCJuZXh0U3RhdGUiLCJfbmV4dFN0YXRlIiwibmV4dERhdGEiLCJzeW5jIiwiY2hhbmdlIiwicHVzaFN0YXRlIiwic3RhYmlsaXplIiwiX2tleSIsImRlZmF1bHROYW1lIiwibnVtYmVyIiwiaW1tZWRpYXRlIiwidGhlbiIsInByZXZpb3VzIiwibWUiLCJzaG91bGRQcm9wYWciLCJfZGVzdHJveVRNIiwicmVtb3ZlQWxsTGlzdGVuZXJzIiwiY1N0b3JlIiwidGFyZ2V0UmV2cyIsInRhcmdldFNjb3BlIiwibyIsImN1cldlaWdodCIsIm1heFdlaWdodCIsIm1pbldlaWdodCIsInRhc2tDb3VudCIsImRlU3luYyIsImRlU3luY01heFRhc2tzIiwidGFzayIsImlzUnVubmluZyIsImVycm9yQ2F0Y2hlciIsImxhc3RFcnJvciIsImRpc2FibGUiLCJoYW5kbGVFcnJvciIsInJ1bk5vdyIsImVuYWJsZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJwcm9jZXNzIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJ1biIsImZyb20iLCJEYXRlIiwibm93Iiwid2VpZ2h0IiwiTWF0aCIsIm1heCIsIm1pbiIsInNjb3BhYmxlcyIsImhhbmRsZSIsIm1lbWJlciIsInN0YXRlU2NvcGUiLCJpc1Njb3BhYmxlVHlwZSIsIkNvbXAiLCJhcHBseVNjb3BhYmxlVHlwZSIsImFyZ3oyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ1RBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQS9CQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMkJBLEtBQUlBLFVBQVksT0FBT0MsTUFBUCxLQUFrQixXQUFwQixHQUFvQ0EsTUFBcEMsR0FBNkNDLE1BQTNEOztBQU1BLEtBQU1DLEtBQUtILFFBQVFJLFVBQVIsSUFBc0IsRUFBakM7QUFDQSxLQUFLSixRQUFRSSxVQUFiLEVBQTBCO0FBQ3RCQyxhQUFRQyxJQUFSLENBQWEsK0RBQWI7QUFDSCxFQUZELE1BR0s7O0FBRUROLGFBQVFJLFVBQVIsR0FBcUJELEVBQXJCO0FBQ0EscUJBQU1JLEtBQU47QUFDQUosUUFBR0ssS0FBSDtBQUNBTCxRQUFHTSxPQUFIO0FBQ0FOLFFBQUdJLEtBQUg7QUFDQUosUUFBR08sT0FBSDtBQUNBUCxRQUFHUSxZQUFIO0FBQ0FSLFFBQUdTLFlBQUg7QUFDQVQsUUFBR1UsZUFBSDtBQUNBVixRQUFHVyxRQUFILEdBQ0ksU0FBU0EsUUFBVCxD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RSxJQUFzRnlTLE1BQU8sQ0FBUCxFQUFXdEwsY0FBWCxDQUEwQnNMLE1BQU8sQ0FBUCxDQUExQixDQUEzRixFQUFtSTtBQUMvSEEsdUJBQU8sQ0FBUCxFQUFXL0csS0FBWCxHQUFtQjhHLGtCQUFrQkMsTUFBTyxDQUFQLENBQWxCLEVBQThCbkksSUFBOUIsRUFBb0MsSUFBcEMsRUFBMEMsSUFBMUMsQ0FBbkI7QUFDQSx3QkFBT21JLE1BQU8sQ0FBUCxDQUFQO0FBQ0gsY0FIRCxNQUtJLE9BQU85VCwrQkFBYThULE1BQU8sQ0FBUCxDQUFiLFNBQTRCbkksSUFBNUIsRUFBUDtBQUNQLFVBUkQ7QUFTSDtBQUNELFlBQU9rSSxrQkFBa0JsSSxLQUFNLENBQU4sQ0FBbEIsRUFBNkJBLEtBQUs1RSxLQUFMLENBQVcsQ0FBWCxDQUE3QixFQUE0QyxLQUE1QyxFQUFtRCxJQUFuRCxDQUFQO0FBQ0g7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O1NBSUk3RyxlLEdBQUFBLGU7U0FDQUgsTyxHQUFBQSxPO1NBQ0FDLFksR0FBQUEsWSIsImZpbGUiOiIuLi8uLi9kaXN0L1JlU2NvcGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgYzk1YWM4ZjVkMWRkYTA2NzJlODQiLCIvKlxuICogQ29weXJpZ2h0IChjKSAgMjAxOCBXaXNlIFdpbGQgV2ViIC5cbiAqXG4gKiAgTUlUIExpY2Vuc2VcbiAqXG4gKiAgUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqICBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiAgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuICogIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqICBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqICBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqICBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiAgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqICBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuICogIFNPRlRXQVJFLlxuICpcbiAqIEBhdXRob3IgOiBOYXRoYW5hZWwgQnJhdW5cbiAqIEBjb250YWN0IDogY2FpcGlsYWJzQGdtYWlsLmNvbVxuICovXG5cbmxldCAkZ2xvYmFsID0gKCB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyApID8gd2luZG93IDogZ2xvYmFsO1xuXG5pbXBvcnQgU2NvcGUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gXCIuL1Njb3BlXCI7XG5pbXBvcnQgU3RvcmUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gXCIuL1N0b3JlXCI7XG5pbXBvcnQgeyBhZGRTY29wYWJsZVR5cGUsIHJlU2NvcGUsIHNjb3BlVG9TdGF0ZSB9IGZyb20gXCIuL3V0aWxzL3Njb3BhYmxlXCI7XG5cbmNvbnN0IFJTID0gJGdsb2JhbC5fX19yZXNjb3BlIHx8IHt9O1xuaWYgKCAkZ2xvYmFsLl9fX3Jlc2NvcGUgKSB7XG4gICAgY29uc29sZS53YXJuKFwiUmVTY29wZSBpcyBkZWZpbmVkIG11bHRpcGxlIHRpbWVzICEhIFxcbkNoZWNrIHlvdSdyZSBwYWNrYWdpbmdcIilcbn1cbmVsc2Uge1xuICAgIFxuICAgICRnbG9iYWwuX19fcmVzY29wZSA9IFJTO1xuICAgIFNjb3BlLlN0b3JlICAgICAgICA9IFN0b3JlO1xuICAgIFJTLlNjb3BlICAgICAgICAgICA9IFNjb3BlO1xuICAgIFJTLkNvbnRleHQgICAgICAgICA9IFNjb3BlO1xuICAgIFJTLlN0b3JlICAgICAgICAgICA9IFN0b3JlO1xuICAgIFJTLnJlU2NvcGUgICAgICAgICA9IHJlU2NvcGU7XG4gICAgUlMuc2NvcGVUb1N0YXRlICAgID0gc2NvcGVUb1N0YXRlO1xuICAgIFJTLnJlU2NvcGVTdGF0ZSAgICA9IHNjb3BlVG9TdGF0ZTtcbiAgICBSUy5hZGRTY29wYWJsZVR5cGUgPSBhZGRTY29wYWJsZVR5cGU7XG4gICAgUlMuc2NvcGVSZWYgICAgICAgID1cbiAgICAgICAgZnVuY3Rpb24gc2NvcGVSZWYoIG1hcCwga2V5ICkge1xuICAgICAgICAgICAgbWFwWyBrZXkgXSA9IG5ldyBTY29wZS5zY29wZVJlZihtYXBbIGtleSBdKTtcbiAgICAgICAgICAgIHJldHVybiBtYXA7XG4gICAgICAgIH07XG4gICAgXG59XG5leHBvcnQgZGVmYXVsdCBSUztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXguanMiLCIvKlxuICogQ29weXJpZ2h0IChjKSAgMjAxOCBXaXNlIFdpbGQgV2ViIC5cbiAqXG4gKiAgTUlUIExpY2Vuc2VcbiAqXG4gKiAgUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqICBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiAgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuICogIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqICBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqICBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqICBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiAgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqICBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuICogIFNPRlRXQVJFLlxuICpcbiAqIEBhdXRob3IgOiBOYXRoYW5hZWwgQnJhdW5cbiAqIEBjb250YWN0IDogY2FpcGlsYWJzQGdtYWlsLmNvbVxuICovXG5cblxudmFyIGlzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vdXRpbHMvaXMnKSxcbiAgICB7IHdhbGtuU2V0LCB3YWxrbkdldCwga2V5V2Fsa25TZXQsIGtleVdhbGtuR2V0IH0gPSByZXF1aXJlKCcuL3V0aWxzL3V0aWxzJyksXG4gICAgRXZlbnRFbWl0dGVyICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi91dGlscy9FbWl0dGVyJyksXG4gICAgc2hvcnRpZCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnc2hvcnRpZCcpXG4gICAgLCBfX3Byb3RvX19wdXNoICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID0gKCB0YXJnZXQsIGlkLCBwYXJlbnQgKSA9PiB7XG4gICAgICAgIGxldCBmbiAgICAgICAgID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB9O1xuICAgICAgICBmbi5wcm90b3R5cGUgICA9IHBhcmVudCA/IG5ldyBwYXJlbnQuX1sgaWQgXSgpIDogdGFyZ2V0WyBpZCBdIHx8IHt9O1xuICAgICAgICB0YXJnZXRbIGlkIF0gICA9IG5ldyBmbigpO1xuICAgICAgICB0YXJnZXQuX1sgaWQgXSA9IGZuO1xuICAgIH0sXG4gICAgb3BlblNjb3BlcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID0ge30sXG4gICAgU2ltcGxlT2JqZWN0UHJvdG8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID0gKCB7fSApLmNvbnN0cnVjdG9yO1xuXG4vKipcbiAqIEJhc2UgU2NvcGUgb2JqZWN0XG4gKi9cbmNsYXNzIFNjb3BlIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgICBzdGF0aWMgZ2V0U2NvcGUoIHNjb3BlcyApIHtcbiAgICAgICAgbGV0IHNrZXkgPSBpcy5hcnJheShzY29wZXMpID8gc2NvcGVzLnNvcnQoKCBhLCBiICkgPT4ge1xuICAgICAgICAgICAgaWYgKCBhLmZpcnN0bmFtZSA8IGIuZmlyc3RuYW1lICkgcmV0dXJuIC0xO1xuICAgICAgICAgICAgaWYgKCBhLmZpcnN0bmFtZSA+IGIuZmlyc3RuYW1lICkgcmV0dXJuIDE7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfSkuam9pbignKycpIDogc2NvcGVzO1xuICAgICAgICByZXR1cm4gb3BlblNjb3Blc1sgc2tleSBdID0gb3BlblNjb3Blc1sgc2tleSBdIHx8IG5ldyBTY29wZSh7fSwgeyBpZDogc2tleSB9KTtcbiAgICB9O1xuICAgIFxuICAgIFxuICAgIC8qKlxuICAgICAqIGdldCBhIHBhcnNlZCByZWZlcmVuY2UgbGlzdCBmcm9tIHN0YXRlTWFwXG4gICAgICogQHBhcmFtIF9yZWZcbiAgICAgKiBAcmV0dXJucyB7e3N0b3JlSWQsIHBhdGgsIGFsaWFzOiAqLCByZWY6ICp9fVxuICAgICAqL1xuICAgIHN0YXRpYyBzdGF0ZU1hcFRvUmVmTGlzdCggc20sIHN0YXRlID0ge30sIF9yZWZzID0gW10sIGFjdGlvbnMgPSB7fSwgcGF0aCA9IFwiXCIgKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKHNtKS5mb3JFYWNoKFxuICAgICAgICAgICAga2V5ID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgY3BhdGggPSBwYXRoID8gcGF0aCArICcuJyArIGtleSA6IGtleTtcbiAgICAgICAgICAgICAgICBzbVsga2V5IF0gaW5zdGFuY2VvZiBTY29wZS5zY29wZVJlZlxuICAgICAgICAgICAgICAgID8gX3JlZnMucHVzaChzbVsga2V5IF0ucGF0aCArICc6JyArIGNwYXRoKVxuICAgICAgICAgICAgICAgIDogKCBzbVsga2V5IF0gJiYgc21bIGtleSBdIGluc3RhbmNlb2YgRnVuY3Rpb24gKVxuICAgICAgICAgICAgICAgICAgPyBhY3Rpb25zWyBrZXkgXSA9IHNtWyBrZXkgXVxuICAgICAgICAgICAgICAgICAgOiAoIHNtWyBrZXkgXSAmJiBzbVsga2V5IF0ucHJvdG90eXBlIGluc3RhbmNlb2YgU2NvcGUuU3RvcmUgKVxuICAgICAgICAgICAgICAgICAgICA/IF9yZWZzLnB1c2goc21bIGtleSBdLmFzKGNwYXRoKSlcbiAgICAgICAgICAgICAgICAgICAgOiBzdGF0ZVsgY3BhdGggXSA9IHNtWyBrZXkgXVxuICAgICAgICAgICAgICAgIC8vOiB0aGlzLnN0YXRlTWFwVG9SZWZMaXN0KHNtW2tleV0sIF9yZWZzLCBwYXRoICsgJy4nICsga2V5KVxuICAgICAgICAgICAgfVxuICAgICAgICApXG4gICAgICAgIHJldHVybiBfcmVmcztcbiAgICB9XG4gICAgXG4gICAgc3RhdGljIHBlcnNpc3RlbmNlVG0gPSAxOy8vIGlmID4gMCwgd2lsbCB3YWl0ICdwZXJzaXN0ZW5jZVRtJyBtcyBiZWZvcmUgZGVzdHJveVxuICAgIC8vIHdoZW5cbiAgICAvLyBkaXNwb3NlIHJlYWNoIDBcbiAgICBzdGF0aWMgU3RvcmUgICAgPSBudWxsO1xuICAgIHN0YXRpYyBzY29wZVJlZiA9IGZ1bmN0aW9uIHNjb3BlUmVmKCBwYXRoICkge1xuICAgICAgICB0aGlzLnBhdGggPSBwYXRoO1xuICAgIH07XG4gICAgc3RhdGljIHNjb3BlcyAgID0gb3BlblNjb3BlczsvLyBhbGwgYWN0aXZlIHNjb3Blc1xuICAgIFxuICAgIFxuICAgIC8qKlxuICAgICAqIEluaXQgYSBSZVNjb3BlIHNjb3BlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc3RvcmVzTWFwIHtPYmplY3R9IE9iamVjdCB3aXRoIHRoZSBpbml0aWFsIHN0b3JlcyBkZWZpbml0aW9uIC8gaW5zdGFuY2VzXG4gICAgICogQHBhcmFtIGNvbmZpZyB7T2JqZWN0fSBTY29wZSBjb25maWdcbiAgICAgKiB7XG4gICAgICogIHBhcmVudCB7c2NvcGV9IEBvcHRpb25hbCBwYXJlbnQgc2NvcGVcbiAgICAgKlxuICAgICAqICBpZCB7c3RyaW5nfSBAb3B0aW9uYWwgaWQgKCBpZiB0aGlzIGlkIGV4aXN0IHN0b3Jlc01hcCB3aWxsIGJlIG1lcmdlIG9uIHRoZSAnaWQnXG4gICAgICogICAgIHNjb3BlKSBrZXkge3N0cmluZ30gQG9wdGlvbmFsIGtleSBvZiB0aGUgc2NvcGUgKCBpZiBubyBpZCBpcyBzZXQsIHRoZSBzY29wZSBpZFxuICAgICAqICAgICB3aWxsIGJlIChwYXJlbnQuaWQrJz4nK2tleSkgaW5jcmVtZW50SWQge2Jvb2x9IEBvcHRpb25hbCB0cnVlIHRvIGFkZCBhIHN1ZmZpeFxuICAgICAqICAgICBpZCwgaWYgdGhlIHByb3ZpZGVkIGtleSBvciBpZCBnbG9iYWxseSBleGlzdFxuICAgICAqXG4gICAgICogIHN0YXRlIHtPYmplY3R9IEBvcHRpb25hbCBpbml0aWFsIHN0YXRlIGJ5IHN0b3JlIGFsaWFzXG4gICAgICogIGRhdGEge09iamVjdH0gQG9wdGlvbmFsIGluaXRpYWwgZGF0YSBieSBzdG9yZSBhbGlhc1xuICAgICAqXG4gICAgICogIHJvb3RFbWl0dGVyIHtib29sfSBAb3B0aW9uYWwgdHJ1ZSB0byBub3QgYmVpbmcgZGVzdGFiaWxpemVkIGJ5IHBhcmVudFxuICAgICAqICBib3VuZGVkQWN0aW9ucyB7YXJyYXkgfCByZWdleHB9IEBvcHRpb25hbCBsaXN0IG9yIHJlZ2V4cCBvZiBhY3Rpb25zIG5vdFxuICAgICAqICAgICBwcm9wYWdhdGVkIHRvIHRoZSBwYXJlbnRcbiAgICAgKlxuICAgICAqICBwZXJzaXN0ZW5jZVRtIHtudW1iZXIpIGlmID4gMCwgd2lsbCB3YWl0ICdwZXJzaXN0ZW5jZVRtJyBtcyBiZWZvcmUgZGVzdHJveSB3aGVuXG4gICAgICogICAgIGRpc3Bvc2UgcmVhY2ggMCBhdXRvRGVzdHJveSAge2Jvb2x9IHdpbGwgdHJpZ2dlciByZXRhaW4gJiBkaXNwb3NlIGFmdGVyIHN0YXJ0XG4gICAgICogIH1cbiAgICAgKiBAcmV0dXJucyB7U2NvcGV9XG4gICAgICovXG4gICAgY29uc3RydWN0b3IoIHN0b3Jlc01hcCwgeyBwYXJlbnQsIGtleSwgaWQsIHNuYXBzaG90LCBzdGF0ZSwgZGF0YSwgaW5jcmVtZW50SWQgPSAhIWtleSwgcGVyc2lzdGVuY2VUbSwgYXV0b0Rlc3Ryb3ksIHJvb3RFbWl0dGVyLCBib3VuZGVkQWN0aW9ucyB9ID0ge30gKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHZhciBfID0ge30sIGtleUluZGV4O1xuICAgICAgICBcbiAgICAgICAgaWQgPSBpZCB8fCBrZXkgJiYgKCAoIHBhcmVudCAmJiBwYXJlbnQuX2lkIHx8IHNob3J0aWQuZ2VuZXJhdGUoKSApICsgJz4nICsga2V5ICk7XG4gICAgICAgIFxuICAgICAgICBfLmlzTG9jYWxJZCA9ICFpZDtcbiAgICAgICAgXG4gICAgICAgIC8vaWYgKCBwYXJlbnQgJiYga2V5ICkge1xuICAgICAgICAvLyAgICBrZXlJbmRleCA9IHBhcmVudC5fLmNoaWxkU2NvcGVzLmZpbmQoY3R4PT4oY3R4Ll9pZD09aWQpKTtcbiAgICAgICAgLy8gICAgaWYgKCBrZXlJbmRleCA9PSAtMSApIGtleUluZGV4ID0gcGFyZW50Ll8uc2VlbkNoaWxkcztcbiAgICAgICAgLy8gICAga2V5SW5kZXgrKztcbiAgICAgICAgLy8gICAgaWYgKCBrZXlJbmRleCApXG4gICAgICAgIC8vICAgICAgICBpZCA9IGlkICsgJ1snICsga2V5SW5kZXggKyAnXSc7XG4gICAgICAgIC8vfVxuICAgICAgICBcbiAgICAgICAgaWQgPSBpZCB8fCAoIFwiX19fX19cIiArIHNob3J0aWQuZ2VuZXJhdGUoKSApO1xuICAgICAgICBcbiAgICAgICAgaWYgKCBvcGVuU2NvcGVzWyBpZCBdICkge1xuICAgICAgICAgICAgdGhpcy5faWQgPSBpZDtcbiAgICAgICAgICAgIG9wZW5TY29wZXNbIGlkIF0ucmVnaXN0ZXIoc3RvcmVzTWFwKTtcbiAgICAgICAgICAgIHJldHVybiBvcGVuU2NvcGVzWyBpZCBdXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoIG9wZW5TY29wZXNbIGlkIF0gJiYgaW5jcmVtZW50SWQgKSB7XG4gICAgICAgICAgICBsZXQgaSA9IC0xO1xuICAgICAgICAgICAgd2hpbGUgKCBvcGVuU2NvcGVzWyBpZCArICdbJyArICggKytpICkgKyAnXScgXSApIDtcbiAgICAgICAgICAgIGlkID0gaWQgKyAnWycgKyBpICsgJ10nO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9pZCAgICAgICAgID0gaWQ7XG4gICAgICAgIHRoaXMuX3JldiAgICAgICAgPSAwO1xuICAgICAgICBvcGVuU2NvcGVzWyBpZCBdID0gdGhpcztcbiAgICAgICAgXy5wZXJzaXN0ZW5jZVRtICA9IHBlcnNpc3RlbmNlVG0gfHwgdGhpcy5jb25zdHJ1Y3Rvci5wZXJzaXN0ZW5jZVRtO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5hY3Rpb25zID0ge307XG4gICAgICAgIHRoaXMuc3RvcmVzICA9IHt9O1xuICAgICAgICB0aGlzLnN0YXRlICAgPSB7fTtcbiAgICAgICAgdGhpcy5kYXRhICAgID0ge307XG4gICAgICAgIFxuICAgICAgICB0aGlzLnBhcmVudCAgICAgICA9IHBhcmVudDtcbiAgICAgICAgdGhpcy5fICAgICAgICAgICAgPSBfO1xuICAgICAgICB0aGlzLl9hdXRvRGVzdHJveSA9IGF1dG9EZXN0cm95O1xuICAgICAgICBcbiAgICAgICAgaWYgKCBwYXJlbnQgJiYgcGFyZW50LmRlYWQgKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2FuJ3QgdXNlIGEgZGVhZCBzY29wZSBhcyBwYXJlbnQgIVwiKTtcbiAgICAgICAgXG4gICAgICAgIF9fcHJvdG9fX3B1c2godGhpcywgJ2FjdGlvbnMnLCBwYXJlbnQpO1xuICAgICAgICBfX3Byb3RvX19wdXNoKHRoaXMsICdzdG9yZXMnLCBwYXJlbnQpO1xuICAgICAgICBfX3Byb3RvX19wdXNoKHRoaXMsICdzdGF0ZScsIHBhcmVudCk7XG4gICAgICAgIF9fcHJvdG9fX3B1c2godGhpcywgJ2RhdGEnLCBwYXJlbnQpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5zb3VyY2VzICAgICAgPSBbXTtcbiAgICAgICAgXy5jaGlsZFNjb3BlcyAgICAgPSBbXTtcbiAgICAgICAgXy5jaGlsZFNjb3Blc0xpc3QgPSBbXTtcbiAgICAgICAgXy51blN0YWJsZUNoaWxkcyAgPSAwO1xuICAgICAgICBfLnNlZW5DaGlsZHMgICAgICA9IDA7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9fcmV0YWlucyA9IHsgYWxsOiAwIH07XG4gICAgICAgIHRoaXMuX19sb2NrcyAgID0geyBhbGw6IDEgfTtcbiAgICAgICAgXG4gICAgICAgIC8vXy5zbmFwc2hvdCAgICAgICAgPSBzbmFwc2hvdDtcbiAgICAgICAgLy9fLnNuYXBzaG90ICAgICAgICA9IHNuYXBzaG90O1xuICAgICAgICBfLl9ib3VuZGVkQWN0aW9ucyA9IGlzLmFycmF5KGJvdW5kZWRBY3Rpb25zKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8geyB0ZXN0OiBib3VuZGVkQWN0aW9ucy5pbmNsdWRlcy5iaW5kKGJvdW5kZWRBY3Rpb25zKSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBib3VuZGVkQWN0aW9ucztcbiAgICAgICAgXy5fbGlzdGVuaW5nICAgICAgPSB7fTtcbiAgICAgICAgXy5fc2NvcGUgICAgICAgICAgPSB7fTtcbiAgICAgICAgXy5fbWl4ZWQgICAgICAgICAgPSBbXTtcbiAgICAgICAgXy5fbWl4ZWRMaXN0ICAgICAgPSBbXTtcbiAgICAgICAgXy5mb2xsb3dlcnMgICAgICAgPSBbXTtcbiAgICAgICAgaWYgKCBwYXJlbnQgKSB7XG4gICAgICAgICAgICBwYXJlbnQucmV0YWluKFwiaXNNeVBhcmVudFwiKTtcbiAgICAgICAgICAgIGlmICggIXJvb3RFbWl0dGVyICkge1xuICAgICAgICAgICAgICAgICFwYXJlbnQuX3N0YWJsZSAmJiB0aGlzLndhaXQoXCJ3YWl0aW5nUGFyZW50XCIpO1xuICAgICAgICAgICAgICAgIHBhcmVudC5vbihfLl9wYXJlbnRMaXN0ID0ge1xuICAgICAgICAgICAgICAgICAgICAnc3RhYmxlJyAgOiBzID0+IHRoaXMucmVsZWFzZShcIndhaXRpbmdQYXJlbnRcIiksXG4gICAgICAgICAgICAgICAgICAgICd1bnN0YWJsZSc6IHMgPT4gdGhpcy53YWl0KFwid2FpdGluZ1BhcmVudFwiKSxcbiAgICAgICAgICAgICAgICAgICAgJ3VwZGF0ZScgIDogcyA9PiB0aGlzLl9wcm9wYWcoKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcGFyZW50Lm9uKF8uX3BhcmVudExpc3QgPSB7XG4gICAgICAgICAgICAgICAgICAgICd1cGRhdGUnOiBzID0+IHRoaXMuX3Byb3BhZygpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyB0aGlzLnJlZ2lzdGVyKHBhcmVudC5fX3Njb3BlLCBzdGF0ZSwgZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICB0aGlzLnJlZ2lzdGVyKHN0b3Jlc01hcCwgc3RhdGUsIGRhdGEpO1xuICAgICAgICB0aGlzLl9fbG9ja3MuYWxsLS07XG4gICAgICAgIHRoaXMuX3N0YWJsZSA9ICF0aGlzLl9fbG9ja3MuYWxsO1xuICAgICAgICBcbiAgICAgICAgaWYgKCBwYXJlbnQgKSB7XG4gICAgICAgICAgICBwYXJlbnQuX2FkZENoaWxkKHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0aGlzLnJlc3RvcmUoc25hcHNob3QpO1xuICAgICAgICBcbiAgICAgICAgaWYgKCBhdXRvRGVzdHJveSApXG4gICAgICAgICAgICBzZXRUaW1lb3V0KFxuICAgICAgICAgICAgICAgIHRtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXRhaW4oXCJhdXRvRGVzdHJveVwiKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNwb3NlKFwiYXV0b0Rlc3Ryb3lcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKVxuICAgICAgICBcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBNb3VudCB0aGUgc3RvcmVzIGluIHN0b3Jlc0xpc3QsIGluIHRoaXMgc2NvcGUgb3IgaW4gaXRzIHBhcmVudHMgb3IgbWl4ZWQgc2NvcGVzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc3RvcmVzTGlzdCB7c3RyaW5nfHN0b3JlUmVmfSBTdG9yZSBuYW1lLCBBcnJheSBvZiBTdG9yZSBuYW1lcywgb3IgUmVzY29wZVxuICAgICAqICAgICBzdG9yZSByZWYgZnJvbSBTdG9yZTo6YXMgb3IgU3RvcmU6YXNcbiAgICAgKiBAcGFyYW0gc3RhdGVcbiAgICAgKiBAcGFyYW0gZGF0YVxuICAgICAqIEByZXR1cm5zIHtTY29wZX1cbiAgICAgKi9cbiAgICBtb3VudCggc3RvcmVzTGlzdCwgc25hcHNob3QsIHN0YXRlLCBkYXRhICkge1xuICAgICAgICBpZiAoIGlzLmFycmF5KHN0b3Jlc0xpc3QpICkge1xuICAgICAgICAgICAgc3RvcmVzTGlzdC5mb3JFYWNoKGsgPT4gdGhpcy5fbW91bnQoaywgc25hcHNob3QsIHN0YXRlLCBkYXRhKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9tb3VudCguLi5hcmd1bWVudHMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBcbiAgICBfbW91bnQoIGlkLCBzbmFwc2hvdCwgc3RhdGUsIGRhdGEgKSB7XG4gICAgICAgIGxldCByZWYsIHNuYXA7XG4gICAgICAgIFxuICAgICAgICByZWYgPSB0aGlzLnBhcnNlUmVmKGlkKVxuICAgICAgICBcbiAgICAgICAgaWYgKCBpZCA9PSBcIiRwYXJlbnRcIiApIHJldHVybjtcbiAgICAgICAgaWYgKCAhdGhpcy5fLl9zY29wZVsgcmVmLnN0b3JlSWQgXSApIHsvL2FzayBtaXhlZCB8fCBwYXJlbnRcbiAgICAgICAgICAgIGlmICggdGhpcy5fLl9taXhlZC5yZWR1Y2UoKCBtb3VudGVkLCBjdHggKSA9PiAoIG1vdW50ZWQgfHwgY3R4Ll9tb3VudChpZCwgc25hcHNob3QsIHN0YXRlLCBkYXRhKSApLCBmYWxzZSkgfHxcbiAgICAgICAgICAgICAgICAgIXRoaXMucGFyZW50IClcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJlbnQuX21vdW50KC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsZXQgc3RvcmUgPSB0aGlzLl8uX3Njb3BlWyByZWYuc3RvcmVJZCBdLCB0YXNrUXVldWUgPSBbXTtcbiAgICAgICAgICAgIGlmICggaXMucnNTdG9yZShzdG9yZS5wcm90b3R5cGUpICkge1xuICAgICAgICAgICAgICAgIHRoaXMuXy5fc2NvcGVbIHJlZi5zdG9yZUlkIF0gPSBuZXcgc3RvcmUodGhpcywge1xuICAgICAgICAgICAgICAgICAgICAvL3NuYXBzaG90LFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiByZWYuc3RvcmVJZCxcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUsXG4gICAgICAgICAgICAgICAgICAgIGRhdGFcbiAgICAgICAgICAgICAgICB9LCB0YXNrUXVldWUpO1xuICAgICAgICAgICAgICAgIHdoaWxlICggdGFza1F1ZXVlLmxlbmd0aCApIHRhc2tRdWV1ZS5zaGlmdCgpKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICggaXMucnNTY29wZShzdG9yZS5wcm90b3R5cGUpICkge1xuICAgICAgICAgICAgICAgIHN0b3JlID0gdGhpcy5fLl9zY29wZVsgcmVmLnN0b3JlSWQgXSA9IG5ldyBzdG9yZSh7ICRwYXJlbnQ6IHRoaXMgfSwge1xuICAgICAgICAgICAgICAgICAgICBpZDogdGhpcy5faWQgKyAnLycgKyByZWYuc3RvcmVJZCxcbiAgICAgICAgICAgICAgICAgICAgLy9hdXRvRGVzdHJveTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAvL3BhcmVudDogdGhpc1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIC8vdGhpcy5fLl9zY29wZVsgcmVmLnN0b3JlSWQgXS5yZXRhaW4oXCJzY29wZWRDaGlsZFNjb3BlXCIpO1xuICAgICAgICAgICAgICAgIC8vdGhpcy5fd2F0Y2hTdG9yZShyZWYuc3RvcmVJZCk7XG4gICAgICAgICAgICAgICAgaWYgKCByZWYucGF0aC5sZW5ndGggPiAxIClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fLl9zY29wZVsgcmVmLnN0b3JlSWQgXS5tb3VudChyZWYucGF0aC5zbGljZSgxKS5qb2luKCcuJyksIHNuYXBzaG90LCBzdGF0ZSwgZGF0YSlcbiAgICAgICAgICAgICAgICAvL2Vsc2UgcmV0dXJuIHRoaXMuXy5fc2NvcGVbIHJlZi5zdG9yZUlkIF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL2lmICggc25hcHNob3QgJiYgaXMucnNTY29wZShzdG9yZSkgJiYgKCBzbmFwID0ga2V5V2Fsa25HZXQoc25hcHNob3QsXG4gICAgICAgICAgICAvLyBzdG9yZS5faWQpICkgJiYgc25hcFsgJy8nIF0gKSB7IHJldHVybiBzdG9yZS5tb3VudChPYmplY3Qua2V5cyhzbmFwWyAnLydcbiAgICAgICAgICAgIC8vIF0pKSB9IGVsc2UgaWYgKCBzbmFwc2hvdCAmJiBpcy5yc1N0b3JlKHN0b3JlKSApIHN0b3JlLnJlc3RvcmUoKTtcbiAgICAgICAgICAgIGlmICggaXMucnNTdG9yZShzdG9yZSkgKSB7XG4gICAgICAgICAgICAgICAgaWYgKCBzdGF0ZSAhPT0gdW5kZWZpbmVkICYmIGRhdGEgPT09IHVuZGVmaW5lZCApXG4gICAgICAgICAgICAgICAgICAgIHN0b3JlLnNldFN0YXRlKHN0YXRlKTtcbiAgICAgICAgICAgICAgICBlbHNlIGlmICggc3RhdGUgIT09IHVuZGVmaW5lZCApXG4gICAgICAgICAgICAgICAgICAgIHN0b3JlLnN0YXRlID0gc3RhdGU7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKCBkYXRhICE9PSB1bmRlZmluZWQgKVxuICAgICAgICAgICAgICAgICAgICBzdG9yZS5wdXNoKGRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fd2F0Y2hTdG9yZShyZWYuc3RvcmVJZCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICByZXR1cm4gdGhpcy5fLl9zY29wZVsgcmVmLnN0b3JlSWQgXTtcbiAgICB9XG4gICAgXG4gICAgX3dhdGNoU3RvcmUoIGlkLCBzdGF0ZSwgZGF0YSApIHtcbiAgICAgICAgaWYgKCAhdGhpcy5fLl9saXN0ZW5pbmdbIGlkIF0gJiYgIWlzLmZuKHRoaXMuXy5fc2NvcGVbIGlkIF0pICkge1xuICAgICAgICAgICAgLy9pZiAoIGlzLnJzU3RvcmUodGhpcy5fLl9zY29wZVsgaWQgXSkgKSB7XG4gICAgICAgICAgICAhdGhpcy5fLl9zY29wZVsgaWQgXS5fYXV0b0Rlc3Ryb3kgJiYgdGhpcy5fLl9zY29wZVsgaWQgXS5yZXRhaW4oXCJzY29wZWRcIik7XG4gICAgICAgICAgICAhdGhpcy5fLl9zY29wZVsgaWQgXS5pc1N0YWJsZSgpICYmIHRoaXMud2FpdChpZCk7XG4gICAgICAgICAgICB0aGlzLl8uX3Njb3BlWyBpZCBdLm9uKFxuICAgICAgICAgICAgICAgIHRoaXMuXy5fbGlzdGVuaW5nWyBpZCBdID0ge1xuICAgICAgICAgICAgICAgICAgICAnZGVzdHJveScgOiBzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl8uX2xpc3RlbmluZ1sgaWQgXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuXy5fc2NvcGVbIGlkIF0gPSB0aGlzLl8uX3Njb3BlWyBpZCBdLmNvbnN0cnVjdG9yO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAndXBkYXRlJyAgOiBzID0+IHRoaXMucHJvcGFnKCksXG4gICAgICAgICAgICAgICAgICAgICdzdGFibGUnICA6IHMgPT4gdGhpcy5yZWxlYXNlKGlkKSxcbiAgICAgICAgICAgICAgICAgICAgJ3Vuc3RhYmxlJzogcyA9PiB0aGlzLndhaXQoaWQpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIE1peCB0YXJnZXRDdHggb24gdGhpcyBzY29wZVxuICAgICAqIE1peGVkIHNjb3BlIHBhcmVudHMgYXJlIE5PVCBtYXBwZWRcbiAgICAgKiBAcGFyYW0gdGFyZ2V0Q3R4XG4gICAgICovXG4gICAgbWl4aW4oIHRhcmdldEN0eCApIHtcbiAgICAgICAgbGV0IHBhcmVudCA9IHRoaXMucGFyZW50LCBsaXN0cztcbiAgICAgICAgdGhpcy5fLl9taXhlZC5wdXNoKHRhcmdldEN0eClcbiAgICAgICAgdGFyZ2V0Q3R4LnJldGFpbihcIm1peGVkVG9cIik7XG4gICAgICAgIGlmICggIXRhcmdldEN0eC5fc3RhYmxlIClcbiAgICAgICAgICAgIHRoaXMud2FpdCh0YXJnZXRDdHguX2lkKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuXy5fbWl4ZWRMaXN0LnB1c2gobGlzdHMgPSB7XG4gICAgICAgICAgICAnc3RhYmxlJyAgOiBzID0+IHRoaXMucmVsZWFzZSh0YXJnZXRDdHguX2lkKSxcbiAgICAgICAgICAgICd1bnN0YWJsZSc6IHMgPT4gdGhpcy53YWl0KHRhcmdldEN0eC5faWQpLFxuICAgICAgICAgICAgJ3VwZGF0ZScgIDogcyA9PiB0aGlzLl9wcm9wYWcoKVxuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuYWN0aW9ucyA9IHt9O1xuICAgICAgICB0aGlzLnN0b3JlcyAgPSB7fTtcbiAgICAgICAgdGhpcy5zdGF0ZSAgID0ge307XG4gICAgICAgIHRoaXMuZGF0YSAgICA9IHt9O1xuICAgICAgICB0YXJnZXRDdHgub24obGlzdHMpO1xuICAgICAgICBfX3Byb3RvX19wdXNoKHRoaXMsICdhY3Rpb25zJywgcGFyZW50KTtcbiAgICAgICAgX19wcm90b19fcHVzaCh0aGlzLCAnc3RvcmVzJywgcGFyZW50KTtcbiAgICAgICAgX19wcm90b19fcHVzaCh0aGlzLCAnc3RhdGUnLCBwYXJlbnQpO1xuICAgICAgICBfX3Byb3RvX19wdXNoKHRoaXMsICdkYXRhJywgcGFyZW50KTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMucmVsaW5rKHRoaXMuXy5fc2NvcGUsIHRoaXMsIGZhbHNlLCB0cnVlKTtcbiAgICAgICAgdGhpcy5fLl9taXhlZC5mb3JFYWNoKFxuICAgICAgICAgICAgY3R4ID0+IHtcbiAgICAgICAgICAgICAgICBfX3Byb3RvX19wdXNoKHRoaXMsICdhY3Rpb25zJyk7XG4gICAgICAgICAgICAgICAgX19wcm90b19fcHVzaCh0aGlzLCAnc3RvcmVzJyk7XG4gICAgICAgICAgICAgICAgX19wcm90b19fcHVzaCh0aGlzLCAnc3RhdGUnKTtcbiAgICAgICAgICAgICAgICBfX3Byb3RvX19wdXNoKHRoaXMsICdkYXRhJyk7XG4gICAgICAgICAgICAgICAgY3R4LnJlbGluayhjdHguXy5fc2NvcGUsIHRoaXMsIHRydWUsIHRydWUpXG4gICAgICAgICAgICB9XG4gICAgICAgIClcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogUmVnaXN0ZXIgc3RvcmVzIGluIHN0b3Jlc01hcCAmIGxpbmsgdGhlbSBpbiB0aGUgcHJvdG9zXG4gICAgICogQHBhcmFtIHN0b3Jlc01hcFxuICAgICAqIEBwYXJhbSBzdGF0ZVxuICAgICAqIEBwYXJhbSBkYXRhXG4gICAgICovXG4gICAgcmVnaXN0ZXIoIHN0b3Jlc01hcCwgc3RhdGUgPSB7fSwgZGF0YSA9IHt9ICkge1xuICAgICAgICB0aGlzLnJlbGluayhzdG9yZXNNYXAsIHRoaXMsIGZhbHNlLCBmYWxzZSk7XG4gICAgICAgIE9iamVjdC5rZXlzKHN0b3Jlc01hcCkuZm9yRWFjaChcbiAgICAgICAgICAgIGlkID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIGlkID09IFwiJHBhcmVudFwiICkgcmV0dXJuO1xuICAgICAgICAgICAgICAgIGlmICggc3RvcmVzTWFwWyBpZCBdLnNpbmdsZXRvbiB8fCAoIGlzLmZuKHN0b3Jlc01hcFsgaWQgXSkgJiYgKCBzdGF0ZVsgaWQgXSB8fCBkYXRhWyBpZCBdICkgKSApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbW91bnQoaWQsIHVuZGVmaW5lZCwgc3RhdGVbIGlkIF0sIGRhdGFbIGlkIF0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKCBzdGF0ZVsgaWQgXSB8fCBkYXRhWyBpZCBdICkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIGRhdGFbIGlkIF0gKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIHN0YXRlWyBpZCBdIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3Jlc1sgaWQgXS5zdGF0ZSA9IHN0YXRlWyBpZCBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9yZXNbIGlkIF0ucHVzaChkYXRhWyBpZCBdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICggc3RhdGVbIGlkIF0gKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3Jlc1sgaWQgXS5zZXRTdGF0ZShzdGF0ZVsgaWQgXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3dhdGNoU3RvcmUoaWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgICAgICBcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogTWFwIHNyY0N0eCBzdG9yZSdzIG9uIHRhcmdldEN0eCBoZWFkZXJzIHByb3RvJ3NcbiAgICAgKiBAcGFyYW0gc3JjQ3R4XG4gICAgICogQHBhcmFtIHRhcmdldEN0eFxuICAgICAqIEBwYXJhbSBzdGF0ZVxuICAgICAqIEBwYXJhbSBkYXRhXG4gICAgICovXG4gICAgcmVsaW5rKCBzcmNDdHgsIHRhcmdldEN0eCA9IHRoaXMsIGV4dGVybmFsLCBmb3JjZSApIHtcbiAgICAgICAgbGV0IGxjdHggPSB0YXJnZXRDdHguXy5zdG9yZXMucHJvdG90eXBlO1xuICAgICAgICBPYmplY3Qua2V5cyhzcmNDdHgpXG4gICAgICAgICAgICAgIC5mb3JFYWNoKFxuICAgICAgICAgICAgICAgICAgaWQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGlmICggIWZvcmNlICYmIHRhcmdldEN0eC5fLl9zY29wZVsgaWQgXSA9PT0gc3JjQ3R4WyBpZCBdIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRDdHguXy5fc2NvcGVbIGlkIF0gJiYgKCB0YXJnZXRDdHguXy5fc2NvcGVbIGlkIF0uY29uc3RydWN0b3IgPT09IHNyY0N0eFsgaWQgXSApIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgIGlmICggIWZvcmNlICYmIHRhcmdldEN0eC5fLl9zY29wZVsgaWQgXSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCAhZXh0ZXJuYWwgJiYgIWlzLmZuKHRhcmdldEN0eC5fLl9zY29wZVsgaWQgXSkgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmluZm8oXCJSZXNjb3BlIFN0b3JlIDogXCIsIGlkLCBcIiBhbHJlYWR5IGV4aXN0IGluIHRoaXMgc2NvcGUgISAoIEhvdCBzd2l0Y2hpbmcgdGhlIHN0b3JlIClcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdG1wICAgICAgICAgICAgICAgICAgPSB0YXJnZXRDdHguXy5fc2NvcGVbIGlkIF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRDdHguXy5fc2NvcGVbIGlkIF0gPSB0YXJnZXRDdHguXy5fc2NvcGVbIGlkIF0uY29uc3RydWN0b3I7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9tb3VudChpZCwgbnVsbCwgdG1wLnN0YXRlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRtcC5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3RhcmdldEN0eC5fLl9zY29wZVsgaWQgXS5fX3Byb3RvX18gPSB0bXAuX19wcm90b19fO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmICggIWV4dGVybmFsICYmIGlzLmZuKHRhcmdldEN0eC5fLl9zY29wZVsgaWQgXSkgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0Q3R4Ll8uX3Njb3BlWyBpZCBdID0gc3JjQ3R4WyBpZCBdO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICggIWZvcmNlICYmICFleHRlcm5hbCApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuXy5fc2NvcGVbIGlkIF0gPSBzcmNDdHhbIGlkIF07XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBsY3R4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW51bWVyYWJsZSAgOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0ICAgICAgICAgOiAoKSA9PiB0aGlzLl8uX3Njb3BlWyBpZCBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgIGlmICggaWQgPT0gXCIkcGFyZW50XCIgKSByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRDdHguXy5zdGF0ZS5wcm90b3R5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnVtZXJhYmxlICA6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXQgICAgICAgICA6ICgpID0+ICggdGhpcy5fLl9zY29wZVsgaWQgXSAmJiB0aGlzLl8uX3Njb3BlWyBpZCBdLnN0YXRlICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXQgICAgICAgICA6ICggdiApID0+ICggdGhpcy5fbW91bnQoaWQsIHVuZGVmaW5lZCwgdikgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldEN0eC5fLmRhdGEucHJvdG90eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW51bWVyYWJsZSAgOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0ICAgICAgICAgOiAoKSA9PiAoIHRoaXMuXy5fc2NvcGVbIGlkIF0gJiYgdGhpcy5fLl9zY29wZVsgaWQgXS5kYXRhICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXQgICAgICAgICA6ICggdiApID0+ICggdGhpcy5fbW91bnQoaWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB2KSApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgIGxldCBhY3Rpb25zICAgICAgID0gc3JjQ3R4WyBpZCBdIGluc3RhbmNlb2YgU2NvcGUuU3RvcmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gc3JjQ3R4WyBpZCBdLmNvbnN0cnVjdG9yLmFjdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogc3JjQ3R4WyBpZCBdLmFjdGlvbnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZUFjdGlvbnMgPSB0YXJnZXRDdHguXy5hY3Rpb25zLnByb3RvdHlwZTtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoIGlzLnJzU2NvcGUodGhpcy5fLl9zY29wZVsgaWQgXS5wcm90b3R5cGUpIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbW91bnQoaWQpO1xuICAgICAgICAgICAgICAgICAgICAgIGlmICggaXMucnNTY29wZSh0aGlzLl8uX3Njb3BlWyBpZCBdKSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlQWN0aW9uc1sgaWQgXSA9IHRoaXMuXy5fc2NvcGVbIGlkIF0uYWN0aW9ucztcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKCAhaXMucnNTdG9yZSh0aGlzLl8uX3Njb3BlWyBpZCBdKSAmJiAhaXMucnNTdG9yZSh0aGlzLl8uX3Njb3BlWyBpZCBdLnByb3RvdHlwZSkgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgYWN0aW9ucyAmJlxuICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKGFjdGlvbnMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZvckVhY2goXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICggYWN0ICkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBhY3RpdmVBY3Rpb25zLmhhc093blByb3BlcnR5KGFjdCkgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZUFjdGlvbnNbIGFjdCBdLl9fdGFyZ2V0U3RvcmVzKys7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVBY3Rpb25zWyBhY3QgXSAgICAgICAgICAgICAgICA9IHRoaXMuZGlzcGF0Y2guYmluZCh0aGlzLCBhY3QpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZUFjdGlvbnNbIGFjdCBdLl9fdGFyZ2V0U3RvcmVzID0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgKVxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBCaW5kIHN0b3JlcyBmcm9tIHRoaXMgc2NvcGUsIGhpcyBwYXJlbnRzIGFuZCBtaXhlZCBzY29wZVxuICAgICAqXG4gICAgICogQHBhcmFtIG9iaiB7UmVhY3QuQ29tcG9uZW50fFN0b3JlfGZ1bmN0aW9ufVxuICAgICAqIEBwYXJhbSBrZXkge3N0cmluZ30gc3RvcmVzIGtleXMgdG8gYmluZCB1cGRhdGVzXG4gICAgICogQHBhcmFtIGFzXG4gICAgICogQHBhcmFtIHNldEluaXRpYWwge2Jvb2x9IGZhbHNlIHRvIG5vdCBwcm9wYWcgaW5pdGlhbCB2YWx1ZSAoZGVmYXVsdCA6IHRydWUpXG4gICAgICovXG4gICAgYmluZCggb2JqLCBrZXksIGFzLCBzZXRJbml0aWFsID0gdHJ1ZSApIHtcbiAgICAgICAgbGV0IGxhc3RSZXZzLCBkYXRhLCByZWZLZXlzO1xuICAgICAgICBpZiAoIGtleSAmJiAhaXMuYXJyYXkoa2V5KSApXG4gICAgICAgICAgICBrZXkgPSBbIGtleSBdO1xuICAgICAgICBcbiAgICAgICAgaWYgKCBhcyA9PT0gZmFsc2UgfHwgYXMgPT09IHRydWUgKSB7XG4gICAgICAgICAgICBzZXRJbml0aWFsID0gYXM7XG4gICAgICAgICAgICBhcyAgICAgICAgID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmVmS2V5cyA9IGtleVxuICAgICAgICAgICAgLm1hcChpZCA9PiAoIGlzLnN0cmluZyhpZCkgPyBpZCA6IGlkLm5hbWUgKSlcbiAgICAgICAgICAgIC5tYXAoaWQgPT4gKCB0aGlzLnBhcnNlUmVmKGlkKSApKTtcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICB0aGlzLl8uZm9sbG93ZXJzLnB1c2goXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgb2JqLFxuICAgICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgICBhcyB8fCB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgbGFzdFJldnMgPSByZWZLZXlzLnJlZHVjZSgoIHJldnMsIHJlZiApID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV2c1sgcmVmLnN0b3JlSWQgXSA9IHJldnNbIHJlZi5zdG9yZUlkIF0gfHwge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV2IDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZnM6IFtdXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIHJldnNbIHJlZi5zdG9yZUlkIF0ucmVmcy5wdXNoKHJlZik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXZzO1xuICAgICAgICAgICAgICAgIH0sIHt9KVxuICAgICAgICAgICAgXSk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLm1vdW50KGtleSk7XG4gICAgICAgIHRoaXMucmV0YWluU3RvcmVzKE9iamVjdC5rZXlzKGxhc3RSZXZzKSwgJ2xpc3RlbmVycycpO1xuICAgICAgICBcbiAgICAgICAgaWYgKCBzZXRJbml0aWFsICYmIHRoaXMuX3N0YWJsZSApIHtcbiAgICAgICAgICAgIGRhdGEgPSB0aGlzLmdldFVwZGF0ZXMobGFzdFJldnMpO1xuICAgICAgICAgICAgaWYgKCAhZGF0YSApIHJldHVybjtcbiAgICAgICAgICAgIGlmICggdHlwZW9mIG9iaiAhPSBcImZ1bmN0aW9uXCIgKSB7XG4gICAgICAgICAgICAgICAgaWYgKCBhcyApIG9iai5zZXRTdGF0ZSh7IFsgYXMgXTogZGF0YSB9KTtcbiAgICAgICAgICAgICAgICBlbHNlIG9iai5zZXRTdGF0ZShkYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIG9iaihkYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogVW4gYmluZCB0aGlzIHNjb3BlIG9mZiB0aGUgZ2l2ZW4gY29tcG9uZW50LWtleXNcbiAgICAgKiBAcGFyYW0gb2JqXG4gICAgICogQHBhcmFtIGtleVxuICAgICAqIEByZXR1cm5zIHtBcnJheS48Kj59XG4gICAgICovXG4gICAgdW5CaW5kKCBvYmosIGtleSwgYXMgKSB7XG4gICAgICAgIHZhciBmb2xsb3dlcnMgPSB0aGlzLl8uZm9sbG93ZXJzLFxuICAgICAgICAgICAgaSAgICAgICAgID0gZm9sbG93ZXJzICYmIGZvbGxvd2Vycy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggZm9sbG93ZXJzICYmIGktLSApXG4gICAgICAgICAgICBpZiAoIGZvbGxvd2Vyc1sgaSBdWyAwIF0gPT09IG9iaiAmJiAoICcnICsgZm9sbG93ZXJzWyBpIF1bIDEgXSApID09ICggJycgKyBrZXkgKSAmJlxuICAgICAgICAgICAgICAgICBmb2xsb3dlcnNbIGkgXVsgMiBdID09IGFzICkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGlzcG9zZVN0b3JlcyhPYmplY3Qua2V5cyhmb2xsb3dlcnNbIGkgXVsgMyBdKSwgJ2xpc3RlbmVycycpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmb2xsb3dlcnMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBNb3VudCB0aGUgc3RvcmVzIGluIHN0b3Jlc0xpc3QgZnJvbSB0aGlzIHNjb3BlLCBpdHMgcGFyZW50cyBhbmQgbWl4ZWQgc2NvcGVcbiAgICAgKiBCaW5kIHRoZW0gdG8gJ3RvJ1xuICAgICAqIEhvb2sgJ3RvJyBzbyBpdCB3aWxsIGF1dG8gdW5iaW5kIG9uICdkZXN0cm95JyBvciAnY29tcG9uZW50V2lsbFVubW91bnQnXG4gICAgICogQHBhcmFtIHRvXG4gICAgICogQHBhcmFtIHN0b3Jlc0xpc3RcbiAgICAgKiBAcGFyYW0gYmluZFxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IEluaXRpYWwgb3V0cHV0cyBvZiB0aGUgc3RvcmVzIGluICdzdG9yZXNMaXN0J1xuICAgICAqL1xuICAgIG1hcCggdG8sIHN0b3Jlc0xpc3QsIGJpbmQgPSB0cnVlICkge1xuICAgICAgICBsZXQgU3RvcmUgICA9IHRoaXMuY29uc3RydWN0b3IuU3RvcmU7XG4gICAgICAgIHN0b3Jlc0xpc3QgID0gaXMuYXJyYXkoc3RvcmVzTGlzdCkgPyBzdG9yZXNMaXN0IDogWyBzdG9yZXNMaXN0IF07XG4gICAgICAgIGxldCByZWZMaXN0ID0gc3RvcmVzTGlzdC5tYXAodGhpcy5wYXJzZVJlZik7XG4gICAgICAgIHRoaXMubW91bnQoc3RvcmVzTGlzdCk7XG4gICAgICAgIGlmICggYmluZCAmJiB0byBpbnN0YW5jZW9mIFN0b3JlICkge1xuICAgICAgICAgICAgU3RvcmUubWFwKHRvLCBzdG9yZXNMaXN0LCB0aGlzLCB0aGlzLCBmYWxzZSlcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICggYmluZCApIHtcbiAgICAgICAgICAgIHRoaXMuYmluZCh0bywgc3RvcmVzTGlzdCwgdW5kZWZpbmVkLCBmYWxzZSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGxldCBtaXhlZENXVW5tb3VudCxcbiAgICAgICAgICAgICAgICB1bk1vdW50S2V5ID0gdG8uaXNSZWFjdENvbXBvbmVudCA/IFwiY29tcG9uZW50V2lsbFVubW91bnRcIiA6IFwiZGVzdHJveVwiO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoIHRvLmhhc093blByb3BlcnR5KHVuTW91bnRLZXkpICkge1xuICAgICAgICAgICAgICAgIG1peGVkQ1dVbm1vdW50ID0gdG9bIHVuTW91bnRLZXkgXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdG9bIHVuTW91bnRLZXkgXSA9ICggLi4uYXJneiApID0+IHtcbiAgICAgICAgICAgICAgICBkZWxldGUgdG9bIHVuTW91bnRLZXkgXTtcbiAgICAgICAgICAgICAgICBpZiAoIG1peGVkQ1dVbm1vdW50IClcbiAgICAgICAgICAgICAgICAgICAgdG9bIHVuTW91bnRLZXkgXSA9IG1peGVkQ1dVbm1vdW50O1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHRoaXMudW5CaW5kKHRvLCBzdG9yZXNMaXN0KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdG9bIHVuTW91bnRLZXkgXSAmJiB0b1sgdW5Nb3VudEtleSBdKC4uLmFyZ3opO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlZkxpc3QucmVkdWNlKCggZGF0YSwgcmVmICkgPT4ge1xuICAgICAgICAgICAgd2Fsa25TZXQoZGF0YSwgcmVmLmFsaWFzIHx8IHJlZi5wYXRoLCB0aGlzLnJldHJpZXZlKHJlZi5wYXRoKSlcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9LCB7fSk7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIEdldCBjdXJyZW50IGRhdGEgdmFsdWUgZnJvbSBqc29uIHBhdGhcbiAgICAgKiBAcGFyYW0gcGF0aFxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd8Kn1cbiAgICAgKi9cbiAgICByZXRyaWV2ZSggcGF0aCA9IFwiXCIgKSB7XG4gICAgICAgIHBhdGggPSBpcy5zdHJpbmcocGF0aCkgPyBwYXRoLnNwbGl0KCcuJykgOiBwYXRoO1xuICAgICAgICByZXR1cm4gcGF0aCAmJlxuICAgICAgICAgICAgICAgdGhpcy5zdG9yZXNbIHBhdGhbIDAgXSBdICYmXG4gICAgICAgICAgICAgICB0aGlzLnN0b3Jlc1sgcGF0aFsgMCBdIF0ucmV0cmlldmUgJiZcbiAgICAgICAgICAgICAgIHRoaXMuc3RvcmVzWyBwYXRoWyAwIF0gXS5yZXRyaWV2ZShwYXRoLnNsaWNlKDEpKTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogR2V0IGN1cnJlbnQgc3RvcmUgZnJvbSBqc29uIHBhdGhcbiAgICAgKiBAcGFyYW0gcGF0aFxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd8Kn1cbiAgICAgKi9cbiAgICByZXRyaWV2ZVN0b3JlKCBwYXRoID0gXCJcIiApIHtcbiAgICAgICAgcGF0aCA9IGlzLnN0cmluZyhwYXRoKSA/IHBhdGguc3BsaXQoJy4nKSA6IHBhdGg7XG4gICAgICAgIHJldHVybiBwYXRoXG4gICAgICAgICAgICAgICAmJiBwYXRoLmxlbmd0aFxuICAgICAgICAgICAgICAgJiYgKFxuICAgICAgICAgICAgICAgcGF0aC5sZW5ndGggIT0gMSAmJiB0aGlzLnN0b3Jlc1sgcGF0aFsgMCBdIF0ucmV0cmlldmVTdG9yZVxuICAgICAgICAgICAgICAgPyB0aGlzLnN0b3Jlc1sgcGF0aFsgMCBdIF0ucmV0cmlldmVTdG9yZShwYXRoLnNsaWNlKDEpKVxuICAgICAgICAgICAgICAgOiBwYXRoLmxlbmd0aCA9PSAxICYmIHRoaXMuc3RvcmVzWyBwYXRoWyAwIF0gXVxuICAgICAgICAgICAgICAgKTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogR2V0IG9yIHVwZGF0ZSBzdG9yZXNSZXZNYXAncyByZXZpc2lvbnNcbiAgICAgKiBAcGFyYW0gc3RvcmVzUmV2TWFwXG4gICAgICogQHBhcmFtIGxvY2FsXG4gICAgICogQHJldHVybnMge3t9fVxuICAgICAqL1xuICAgIGdldFN0b3Jlc1JldnMoIHN0b3Jlc1Jldk1hcCA9IHt9LCBsb2NhbCApIHtcbiAgICAgICAgbGV0IGN0eCA9IHRoaXMuXy5fc2NvcGU7XG4gICAgICAgIGlmICggIXN0b3Jlc1Jldk1hcCApIHtcbiAgICAgICAgICAgIHN0b3Jlc1Jldk1hcCA9IHt9O1xuICAgICAgICB9XG4gICAgICAgIE9iamVjdC5rZXlzKGN0eCkuZm9yRWFjaChcbiAgICAgICAgICAgIGlkID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIGlkID09IFwiJHBhcmVudFwiICkgcmV0dXJuO1xuICAgICAgICAgICAgICAgIGlmICggIWlzLmZuKGN0eFsgaWQgXSlcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgc3RvcmVzUmV2TWFwWyBpZCBdID0gY3R4WyBpZCBdLl9yZXY7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKCAhc3RvcmVzUmV2TWFwLmhhc093blByb3BlcnR5KGlkKSApXG4gICAgICAgICAgICAgICAgICAgIHN0b3Jlc1Jldk1hcFsgaWQgXSA9IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIGlmICggIWxvY2FsICkge1xuICAgICAgICAgICAgdGhpcy5fLl9taXhlZC5yZWR1Y2UoKCB1cGRhdGVkLCBjdHggKSA9PiAoIGN0eC5nZXRTdG9yZXNSZXZzKHN0b3Jlc1Jldk1hcCksIHN0b3Jlc1Jldk1hcCApLCBzdG9yZXNSZXZNYXApO1xuICAgICAgICAgICAgdGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuZ2V0U3RvcmVzUmV2cyhzdG9yZXNSZXZNYXApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdG9yZXNSZXZNYXA7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIEdldCB1cGRhdGVkIG91dHB1dCBiYXNpbmcgc3RvcmVzUmV2TWFwJ3MgcmV2aXNpb25zLlxuICAgICAqIElmIGEgc3RvcmUgaW4gJ3N0b3Jlc1Jldk1hcCcgd2FzIHVwZGF0ZWQ7IGFkZCBpdCB0byAnb3V0cHV0JyAmIHVwZGF0ZSBzdG9yZXNSZXZNYXBcbiAgICAgKiBAcGFyYW0gc3RvcmVzUmV2TWFwXG4gICAgICogQHBhcmFtIG91dHB1dFxuICAgICAqIEBwYXJhbSB1cGRhdGVkXG4gICAgICogQHJldHVybnMgeyp8e319XG4gICAgICovXG4gICAgZ2V0UmVmc1VwZGF0ZXMoIHJlZnMsIHJldk1hcCwgb3V0cHV0ICkge1xuICAgICAgICBcbiAgICAgICAgcmV2TWFwID0gcmV2TWFwIHx8IHJlZnNcbiAgICAgICAgICAgIC5tYXAoaWQgPT4gKCBpcy5zdHJpbmcoaWQpID8gaWQgOiBpZC5uYW1lICkpXG4gICAgICAgICAgICAubWFwKGlkID0+ICggdGhpcy5wYXJzZVJlZihpZCkgKSlcbiAgICAgICAgICAgIC5yZWR1Y2UoKCByZXZzLCByZWYgKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV2c1sgcmVmLnN0b3JlSWQgXSA9IHJldnNbIHJlZi5zdG9yZUlkIF0gfHwge1xuICAgICAgICAgICAgICAgICAgICByZXYgOiAwLFxuICAgICAgICAgICAgICAgICAgICByZWZzOiBbXVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgcmV2c1sgcmVmLnN0b3JlSWQgXS5yZWZzLnB1c2gocmVmKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmV2cztcbiAgICAgICAgICAgIH0sIHt9KTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiB0aGlzLmdldFVwZGF0ZXMocmV2TWFwLCBvdXRwdXQpXG4gICAgICAgIFxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBHZXQgb3IgdXBkYXRlIG91dHB1dCBiYXNpbmcgc3RvcmVzUmV2TWFwJ3MgcmV2aXNpb25zLlxuICAgICAqIElmIGEgc3RvcmUgaW4gJ3N0b3Jlc1Jldk1hcCcgd2FzIHVwZGF0ZWQ7IGFkZCBpdCB0byAnb3V0cHV0JyAmIHVwZGF0ZSBzdG9yZXNSZXZNYXBcbiAgICAgKiBAcGFyYW0gc3RvcmVzUmV2TWFwXG4gICAgICogQHBhcmFtIG91dHB1dFxuICAgICAqIEBwYXJhbSB1cGRhdGVkXG4gICAgICogQHJldHVybnMgeyp8e319XG4gICAgICovXG4gICAgZ2V0VXBkYXRlcyggc3RvcmVzUmV2TWFwLCBvdXRwdXQsIHVwZGF0ZWQgKSB7XG4gICAgICAgIGxldCBjdHggPSB0aGlzLl8uX3Njb3BlO1xuICAgICAgICBcbiAgICAgICAgb3V0cHV0ID0gb3V0cHV0IHx8IHt9O1xuICAgICAgICBPYmplY3Qua2V5cyhjdHgpLmZvckVhY2goXG4gICAgICAgICAgICBpZCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCBpZCA9PSBcIiRwYXJlbnRcIiApIHJldHVybjtcbiAgICAgICAgICAgICAgICBpZiAoICFvdXRwdXQuaGFzT3duUHJvcGVydHkoaWQpICYmICFpcy5mbihjdHhbIGlkIF0pXG4gICAgICAgICAgICAgICAgICAgICAmJiAoICFzdG9yZXNSZXZNYXBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfHwgKCBzdG9yZXNSZXZNYXAuaGFzT3duUHJvcGVydHkoaWQpICYmIHN0b3Jlc1Jldk1hcFsgaWQgXSA9PT0gdW5kZWZpbmVkIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfHwgISggIXN0b3Jlc1Jldk1hcC5oYXNPd25Qcm9wZXJ0eShpZCkgfHwgY3R4WyBpZCBdLl9yZXYgPD0gc3RvcmVzUmV2TWFwWyBpZCBdLnJldiApIClcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZWQgICAgICA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIG91dHB1dFsgaWQgXSA9IHRoaXMuZGF0YVsgaWQgXTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGlmICggc3RvcmVzUmV2TWFwICYmIHN0b3Jlc1Jldk1hcC5oYXNPd25Qcm9wZXJ0eShpZCkgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9yZXNSZXZNYXBbIGlkIF0gICAgID0gc3RvcmVzUmV2TWFwWyBpZCBdIHx8IHsgcmV2OiAwLCByZWZzOiBbXSB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmVzUmV2TWFwWyBpZCBdLnJldiA9IGN0eFsgaWQgXS5fcmV2O1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmVzUmV2TWFwWyBpZCBdLnJlZnMuZm9yRWFjaChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWYgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUud2FybihcInVwZGF0ZSByZWYgXCIsIHJlZi5yZWYsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMucmV0cmlldmUocmVmLnBhdGgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0WyByZWYuYWxpYXMgXSA9IHRoaXMucmV0cmlldmUocmVmLnBhdGgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS53YXJuKFwidXBkYXRlIFwiLCBpZCwgdGhpcy5kYXRhW2lkXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXRbIGlkIF0gPSB0aGlzLmRhdGFbIGlkIF07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICB1cGRhdGVkID0gdGhpcy5fLl9taXhlZC5yZWR1Y2UoKCB1cGRhdGVkLCBjdHggKSA9PiAoIGN0eC5nZXRVcGRhdGVzKHN0b3Jlc1Jldk1hcCwgb3V0cHV0LCB1cGRhdGVkKSB8fCB1cGRhdGVkICksIHVwZGF0ZWQpO1xuICAgICAgICB1cGRhdGVkID0gdGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuZ2V0VXBkYXRlcyhzdG9yZXNSZXZNYXAsIG91dHB1dCwgdXBkYXRlZCkgfHwgdXBkYXRlZDtcbiAgICAgICAgcmV0dXJuIHVwZGF0ZWQgJiYgb3V0cHV0O1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBSZWN1cnNpdmVseSBnZXQgYWxsIGNoaWxkIHNjb3Blc1xuICAgICAqIEBwYXJhbSBjaGlsZHNcbiAgICAgKiBAcmV0dXJucyB7QXJyYXl9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfZ2V0QWxsQ2hpbGRzKCBjaGlsZHMgPSBbXSApIHtcbiAgICAgICAgY2hpbGRzLnB1c2goLi4udGhpcy5fLmNoaWxkU2NvcGVzKTtcbiAgICAgICAgdGhpcy5fLmNoaWxkU2NvcGVzLmZvckVhY2goXG4gICAgICAgICAgICBjdHggPT4ge1xuICAgICAgICAgICAgICAgIGN0eC5fZ2V0QWxsQ2hpbGRzKGNoaWxkcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiBjaGlsZHM7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIFNlcmlhbGl6ZSBhbGwgYWN0aXZlIHN0b3JlcyBzdGF0ZSAmIGRhdGEgaW4gZXZlcnkgY2hpbGRzICYgbWl4ZWQgc2NvcGVzXG4gICAgICpcbiAgICAgKiBTY29wZXMgd2l0aG91dCBrZXkgb3IgaWQgYXJlIGlnbm9yZWRcbiAgICAgKiBAcGFyYW0gb3V0cHV0XG4gICAgICogQHJldHVybnMge3t9fVxuICAgICAqL1xuICAgIHNlcmlhbGl6ZSggY2ZnID0ge30sIG91dHB1dCA9IHt9ICkge1xuICAgICAgICBsZXQgY3R4ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA9IHRoaXMuXy5fc2NvcGUsXG4gICAgICAgICAgICB7IGFsaWFzLCB3aXRoQ2hpbGRzID0gdHJ1ZSwgd2l0aFBhcmVudHMsIHdpdGhNaXhlZCA9IHRydWUsIG5vcmVmcyB9ID0gY2ZnO1xuICAgICAgICBcbiAgICAgICAgaWYgKCBrZXlXYWxrbkdldChvdXRwdXQsIHRoaXMuX2lkKSApXG4gICAgICAgICAgICByZXR1cm4gb3V0cHV0O1xuICAgICAgICBcbiAgICAgICAgLy9AdG9kbyA6IGJldHRlciBzZXJpYWxpemUgbWV0aG9kXG4gICAgICAgIGtleVdhbGtuU2V0KG91dHB1dCwgdGhpcy5faWQsIHt9KTtcbiAgICAgICAgXG4gICAgICAgIE9iamVjdC5rZXlzKGN0eCkuZm9yRWFjaChcbiAgICAgICAgICAgIGlkID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIGlkID09IFwiJHBhcmVudFwiIHx8IGlzLmZuKGN0eFsgaWQgXSkgKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY3R4WyBpZCBdLnNlcmlhbGl6ZShjZmcsIG91dHB1dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIClcbiAgICAgICAgXG4gICAgICAgIHdpdGhQYXJlbnRzICYmIHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LnNlcmlhbGl6ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aENoaWxkICA6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpdGhQYXJlbnRzOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpdGhNaXhlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JlZnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIG91dHB1dCk7XG4gICAgICAgIFxuICAgICAgICB3aXRoQ2hpbGRzICYmIHRoaXMuXy5jaGlsZFNjb3Blcy5mb3JFYWNoKFxuICAgICAgICAgICAgY3R4ID0+IHtcbiAgICAgICAgICAgICAgICAhY3R4Ll8uaXNMb2NhbElkICYmIGN0eC5zZXJpYWxpemUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aENoaWxkICA6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRoUGFyZW50czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRoTWl4ZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JlZnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgb3V0cHV0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgXG4gICAgICAgIHdpdGhNaXhlZCAmJiB0aGlzLl8uX21peGVkLmZvckVhY2goXG4gICAgICAgICAgICBjdHggPT4ge1xuICAgICAgICAgICAgICAgICFjdHguXy5pc0xvY2FsSWQgJiYgY3R4LnNlcmlhbGl6ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRoQ2hpbGQgIDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRoUGFyZW50czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRoTWl4ZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JlZnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgb3V0cHV0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgXG4gICAgICAgIGlmICggYWxpYXMgKSB7XG4gICAgICAgICAgICBvdXRwdXQgPSBPYmplY3Qua2V5cyhvdXRwdXQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAucmVkdWNlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICggaCwgayApID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaFsgay5zdGFydHNXaXRoKGFsaWFzKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGFsaWFzICsgay5zdWJzdHIoYWxpYXMubGVuZ3RoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGsgXSA9IG91dHB1dFsgayBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb3V0cHV0O1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBSZXN0b3JlIHN0YXRlICYgZGF0YSBmcm9tIHRoZSBzZXJpYWxpemUgZm5cbiAgICAgKiBAcGFyYW0gc25hcHNob3RcbiAgICAgKiBAcGFyYW0gZm9yY2VcbiAgICAgKi9cbiAgICByZXN0b3JlKCBzbmFwc2hvdCwgY2ZnID0ge30sIGZvcmNlID0gaXMuYm9vbChjZmcpICYmIGNmZyApIHtcbiAgICAgICAgbGV0IGN0eCAgPSB0aGlzLl8uX3Njb3BlLCBzbmFwO1xuICAgICAgICBzbmFwc2hvdCA9IHNuYXBzaG90XG4gICAgICAgICAgICAgICAgICAgJiYga2V5V2Fsa25HZXQoc25hcHNob3QsIHRoaXMuX2lkKVxuICAgICAgICAgICAgICAgICAgIHx8IHRoaXMudGFrZVNuYXBzaG90QnlLZXkodGhpcy5faWQpO1xuICAgICAgICBcbiAgICAgICAgaWYgKCAhc25hcHNob3QgKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fLnNuYXBzaG90ID0gc25hcHNob3Q7XG4gICAgICAgIFxuICAgICAgICBzbmFwID0gc25hcHNob3RbICcvJyBdO1xuICAgICAgICBcbiAgICAgICAgc25hcCAmJiBPYmplY3Qua2V5cyhzbmFwKS5mb3JFYWNoKFxuICAgICAgICAgICAgbmFtZSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCBuYW1lID09IFwiJHBhcmVudFwiICkgcmV0dXJuO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmICggY3R4WyBuYW1lIF0gKSB7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpZiAoIGZvcmNlICYmICFpcy5mbihjdHhbIG5hbWUgXSkgKVxuICAgICAgICAgICAgICAgICAgICAgICAgY3R4WyBuYW1lIF0uZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbW91bnQobmFtZSk7Ly8gcXVpZXRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIClcbiAgICAgICAgXG4gICAgICAgIHRoaXMuXy5fbWl4ZWQuZm9yRWFjaChcbiAgICAgICAgICAgIGN0eCA9PiB7XG4gICAgICAgICAgICAgICAgIWN0eC5fLmlzTG9jYWxJZCAmJiBjdHgucmVzdG9yZSh1bmRlZmluZWQsIGZvcmNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuXy5jaGlsZFNjb3Blcy5mb3JFYWNoKFxuICAgICAgICAgICAgY3R4ID0+IHtcbiAgICAgICAgICAgICAgICAhY3R4Ll8uaXNMb2NhbElkICYmIGN0eC5yZXN0b3JlKHVuZGVmaW5lZCwgZm9yY2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICBcbiAgICB9XG4gICAgXG4gICAgZ2V0U25hcHNob3RCeUtleSgga2V5LCBsb2NhbCApIHtcbiAgICAgICAgLy8gb25seSBoYXZlIHRoZSBsb2NhbCBzbmFwXG4gICAgICAgIGlmICggdGhpcy5fLnNuYXBzaG90ICYmIGtleS5zdGFydHNXaXRoKHRoaXMuX2lkKSApIHtcbiAgICAgICAgICAgIGxldCBvYmogPSBrZXlXYWxrbkdldCh0aGlzLl8uc25hcHNob3QsIGtleS5zdWJzdHIodGhpcy5faWQubGVuZ3RoKSlcbiAgICAgICAgICAgIC8vaWYgKCBvYmogKSB7XG4gICAgICAgICAgICAvLyAgICB0aGlzLmRlbGV0ZVNuYXBzaG90QnlLZXkoa2V5KTtcbiAgICAgICAgICAgIC8vfVxuICAgICAgICAgICAgcmV0dXJuIG9iajtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHJldHVybiAhbG9jYWxcbiAgICAgICAgICAgICAgICAgICAgJiYgdGhpcy5wYXJlbnRcbiAgICAgICAgICAgICAgICAgICAgJiYgdGhpcy5wYXJlbnQuZ2V0U25hcHNob3RCeUtleShrZXkpXG4gICAgICAgICAgICAgICAgICAgIHx8XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcmVzLiRwYXJlbnRcbiAgICAgICAgICAgICAgICAgICAgJiYgdGhpcy5zdG9yZXMuJHBhcmVudC5nZXRTbmFwc2hvdEJ5S2V5KGtleSk7XG4gICAgICAgIFxuICAgIH1cbiAgICBcbiAgICBnZXRTbmFwc2hvdEJ5S2V5RXh0KCBzbmFwc2hvdCwga2V5LCBsb2NhbCApIHtcbiAgICAgICAgLy8gb25seSBoYXZlIHRoZSBsb2NhbCBzbmFwXG4gICAgICAgIGlmICggc25hcHNob3QgKSB7XG4gICAgICAgICAgICBsZXQgb2JqID0ga2V5V2Fsa25HZXQoc25hcHNob3QsIGtleSlcbiAgICAgICAgICAgIHJldHVybiBvYmo7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxuICAgIFxuICAgIHRha2VTbmFwc2hvdEJ5S2V5KCBrZXksIGxvY2FsICkge1xuICAgICAgICBpZiAoIHRoaXMuXy5zbmFwc2hvdCAmJiBrZXkuc3RhcnRzV2l0aCh0aGlzLl9pZCkgKSB7XG4gICAgICAgICAgICBsZXQgb2JqID0ga2V5V2Fsa25HZXQodGhpcy5fLnNuYXBzaG90LCBrZXkuc3Vic3RyKHRoaXMuX2lkLmxlbmd0aCkpXG4gICAgICAgICAgICBpZiAoIG9iaiApIHtcbiAgICAgICAgICAgICAgICAvL3RoaXMuZGVsZXRlU25hcHNob3RCeUtleShrZXksIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG9iajtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHJldHVybiAhbG9jYWxcbiAgICAgICAgICAgICAgICAgICAgJiYgdGhpcy5wYXJlbnRcbiAgICAgICAgICAgICAgICAgICAgJiYgdGhpcy5wYXJlbnQudGFrZVNuYXBzaG90QnlLZXkoa2V5KVxuICAgICAgICAgICAgICAgICAgICB8fFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3Jlcy4kcGFyZW50XG4gICAgICAgICAgICAgICAgICAgICYmIHRoaXMuc3RvcmVzLiRwYXJlbnQudGFrZVNuYXBzaG90QnlLZXkoa2V5KTtcbiAgICB9XG4gICAgXG4gICAgZGVsZXRlU25hcHNob3RCeUtleSgga2V5LCBsb2NhbCApIHtcbiAgICAgICAgaWYgKCB0aGlzLl8uc25hcHNob3QgJiYga2V5LnN0YXJ0c1dpdGgodGhpcy5faWQpICkge1xuICAgICAgICAgICAgbGV0IG9iaiA9IGtleVdhbGtuR2V0KHRoaXMuXy5zbmFwc2hvdCwga2V5LnN1YnN0cih0aGlzLl9pZC5sZW5ndGgpLnJlcGxhY2UoL14oLipbXFw+fFxcL10pW15cXD58XFwvXSskL2lnLCAnJDEnKSlcbiAgICAgICAgICAgIGlmICggb2JqIClcbiAgICAgICAgICAgICAgICBkZWxldGUgb2JqWyBrZXkucmVwbGFjZSgvXi4qW1xcPnxcXC9dKFteXFw+fFxcL10rKSQvaWcsICckMScpIF1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gIWxvY2FsXG4gICAgICAgICAgICAgICAmJiB0aGlzLnBhcmVudFxuICAgICAgICAgICAgICAgJiYgdGhpcy5wYXJlbnQuZGVsZXRlU25hcHNob3RCeUtleShrZXkpXG4gICAgICAgICAgICAgICB8fFxuICAgICAgICAgICAgICAgdGhpcy5zdG9yZXMuJHBhcmVudFxuICAgICAgICAgICAgICAgJiYgdGhpcy5zdG9yZXMuJHBhcmVudC5kZWxldGVTbmFwc2hvdEJ5S2V5KGtleSk7XG4gICAgfVxuICAgIFxuICAgIHNldFN0YXRlKCBwU3RhdGUgKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKHBTdGF0ZSlcbiAgICAgICAgICAgICAgLmZvckVhY2goayA9PiAoIHRoaXMuc3RhdGVbIGsgXSA9IHBTdGF0ZVsgayBdICkpXG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIGdldCBhIHBhcnNlZCByZWZlcmVuY2VcbiAgICAgKiBAcGFyYW0gX3JlZlxuICAgICAqIEByZXR1cm5zIHt7c3RvcmVJZCwgcGF0aCwgYWxpYXM6ICosIHJlZjogKn19XG4gICAgICovXG4gICAgcGFyc2VSZWYoIF9yZWYgKSB7XG4gICAgICAgIGlmICggdHlwZW9mIF9yZWYgIT09ICdzdHJpbmcnICkge1xuICAgICAgICAgICAgdGhpcy5yZWdpc3Rlcih7IFsgX3JlZi5uYW1lIF06IF9yZWYuc3RvcmUgfSk7XG4gICAgICAgICAgICBfcmVmID0gX3JlZi5uYW1lO1xuICAgICAgICB9XG4gICAgICAgIGxldCByZWYgID0gX3JlZi5zcGxpdCgnOicpO1xuICAgICAgICByZWZbIDAgXSA9IHJlZlsgMCBdLnNwbGl0KCcuJyk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzdG9yZUlkOiByZWZbIDAgXVsgMCBdLFxuICAgICAgICAgICAgcGF0aCAgIDogcmVmWyAwIF0sXG4gICAgICAgICAgICBhbGlhcyAgOiByZWZbIDEgXSB8fCByZWZbIDAgXVsgcmVmWyAwIF0ubGVuZ3RoIC0gMSBdLFxuICAgICAgICAgICAgcmVmICAgIDogX3JlZlxuICAgICAgICB9O1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBEaXNwYXRjaCBhbiBhY3Rpb24gdG8gdGhlIHRvcCBwYXJlbnQgJiBtaXhlZCBzY29wZXMsIGluIGFsbCBzdG9yZXNcbiAgICAgKlxuICAgICAqIEBwYXJhbSBhY3Rpb25cbiAgICAgKiBAcGFyYW0gZGF0YVxuICAgICAqIEByZXR1cm5zIHtTY29wZX1cbiAgICAgKi9cbiAgICBkaXNwYXRjaCggYWN0aW9uLCAuLi5hcmd6ICkge1xuICAgICAgICBpZiAoIHRoaXMuZGVhZCApIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcIkRpc3BhdGNoIHdhcyBjYWxsZWQgb24gYSBkZWFkIHNjb3BlLCBjaGVjayB5b3UncmUgYXN5bmMgZnVuY3Rpb25zIGluIHRoaXMgc3RhY2suLi5cIiwgKCBuZXcgRXJyb3IoKSApLnN0YWNrKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgYkFjdHMgPSB0aGlzLl8uX2JvdW5kZWRBY3Rpb25zO1xuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLl8uX3Njb3BlKVxuICAgICAgICAgICAgICAuZm9yRWFjaChcbiAgICAgICAgICAgICAgICAgIGlkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoIGlkID09IFwiJHBhcmVudFwiICkgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgIGlmICggIWlzLmZuKHRoaXMuXy5fc2NvcGVbIGlkIF0pIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fLl9zY29wZVsgaWQgXS50cmlnZ2VyKGFjdGlvbiwgLi4uYXJneik7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICk7XG4gICAgICAgIFxuICAgICAgICBpZiAoIGJBY3RzICYmIGJBY3RzLnRlc3QoYWN0aW9uKSApXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIFxuICAgICAgICB0aGlzLl8uX21peGVkLmZvckVhY2goKCBjdHggKSA9PiAoIGN0eC5kaXNwYXRjaChhY3Rpb24sIC4uLmFyZ3opICkpO1xuICAgICAgICB0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC5kaXNwYXRjaChhY3Rpb24sIC4uLmFyZ3opO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgXG4gICAgLy9cbiAgICB0cmlnZ2VyKCkge1xuICAgICAgICB0aGlzLmRpc3BhdGNoKC4uLmFyZ3VtZW50cyk7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIG9uY2UoJ3N0YWJsZScsIGNiKVxuICAgICAqIEBwYXJhbSBvYmoge1JlYWN0LkNvbXBvbmVudHxTdG9yZXxmdW5jdGlvbilcbiAgICAgKiBAcGFyYW0ga2V5IHtzdHJpbmd9IG9wdGlvbmFsIGtleSB3aGVyZSB0byBtYXAgdGhlIHB1YmxpYyBzdGF0ZVxuICAgICAqL1xuICAgIHRoZW4oIGNiICkge1xuICAgICAgICBpZiAoIHRoaXMuX3N0YWJsZSApXG4gICAgICAgICAgICByZXR1cm4gY2IodGhpcy5kYXRhKTtcbiAgICAgICAgdGhpcy5vbmNlKCdzdGFibGUnLCBlID0+IGNiKHRoaXMuZGF0YSkpO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBDYWxsIHJldGFpbiBvbiB0aGUgc2NvcGVkIHN0b3JlcyBiYXNpbmcgZ2l2ZW5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBzdG9yZXNcbiAgICAgKiBAcGFyYW0gcmVhc29uXG4gICAgICovXG4gICAgcmV0YWluU3RvcmVzKCBzdG9yZXMgPSBbXSwgcmVhc29uICkge1xuICAgICAgICBzdG9yZXMuZm9yRWFjaChcbiAgICAgICAgICAgIGlkID0+ICggdGhpcy5zdG9yZXNbIGlkIF0gJiYgdGhpcy5zdG9yZXNbIGlkIF0ucmV0YWluICYmIHRoaXMuc3RvcmVzWyBpZCBdLnJldGFpbihyZWFzb24pIClcbiAgICAgICAgKVxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBDYWxsIHJldGFpbiBvbiB0aGUgc2NvcGVkIHN0b3Jlc1xuICAgICAqXG4gICAgICogQHBhcmFtIHN0b3Jlc1xuICAgICAqIEBwYXJhbSByZWFzb25cbiAgICAgKi9cbiAgICBkaXNwb3NlU3RvcmVzKCBzdG9yZXMgPSBbXSwgcmVhc29uICkge1xuICAgICAgICBzdG9yZXMuZm9yRWFjaChcbiAgICAgICAgICAgIGlkID0+ICggdGhpcy5zdG9yZXNbIGlkIF0gJiYgdGhpcy5zdG9yZXNbIGlkIF0uZGlzcG9zZSAmJiB0aGlzLnN0b3Jlc1sgaWQgXS5kaXNwb3NlKHJlYXNvbikgKVxuICAgICAgICApXG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIEtlZXAgdGhlIHNjb3BlIHVuc3RhYmxlIHVudGlsIHJlbGVhc2UgaXMgY2FsbGVkXG4gICAgICogQHBhcmFtIHJlYXNvblxuICAgICAqL1xuICAgIHdhaXQoIHJlYXNvbiApIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcIndhaXRcIiwgcmVhc29uKTtcbiAgICAgICAgdGhpcy5fc3RhYmxlICYmICF0aGlzLl9fbG9ja3MuYWxsICYmIHRoaXMuZW1pdChcInVuc3RhYmxlXCIsIHRoaXMpO1xuICAgICAgICB0aGlzLl9zdGFibGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fX2xvY2tzLmFsbCsrO1xuICAgICAgICBpZiAoIHJlYXNvbiApIHtcbiAgICAgICAgICAgIHRoaXMuX19sb2Nrc1sgcmVhc29uIF0gPSB0aGlzLl9fbG9ja3NbIHJlYXNvbiBdIHx8IDA7XG4gICAgICAgICAgICB0aGlzLl9fbG9ja3NbIHJlYXNvbiBdKys7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgXG4gICAgLyoqXG4gICAgICogU3RhYmlsaXplIHRoZSBzY29wZSBpZiBubyBtb3JlIGxvY2tzIHJlbWFpbiAod2FpdCBmbilcbiAgICAgKiBAcGFyYW0gcmVhc29uXG4gICAgICovXG4gICAgcmVsZWFzZSggcmVhc29uICkge1xuICAgICAgICBcbiAgICAgICAgaWYgKCByZWFzb24gKSB7XG4gICAgICAgICAgICBpZiAoIHRoaXMuX19sb2Nrc1sgcmVhc29uIF0gPT0gMCApXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlJlbGVhc2UgbW9yZSB0aGFuIGxvY2tpbmcgIVwiLCByZWFzb24pO1xuICAgICAgICAgICAgdGhpcy5fX2xvY2tzWyByZWFzb24gXSA9IHRoaXMuX19sb2Nrc1sgcmVhc29uIF0gfHwgMDtcbiAgICAgICAgICAgIHRoaXMuX19sb2Nrc1sgcmVhc29uIF0tLTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoICFyZWFzb24gJiYgdGhpcy5fX2xvY2tzLmFsbCA9PSAwIClcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJSZWxlYXNlIG1vcmUgdGhhbiBsb2NraW5nICFcIik7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9fbG9ja3MuYWxsLS07XG4gICAgICAgIGlmICggIXRoaXMuX19sb2Nrcy5hbGwgKSB7XG4gICAgICAgICAgICB0aGlzLl8uc3RhYmlsaXplclRNICYmIGNsZWFyVGltZW91dCh0aGlzLl8uc3RhYmlsaXplclRNKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5fLnN0YWJpbGl6ZXJUTSA9IHNldFRpbWVvdXQoXG4gICAgICAgICAgICAgICAgZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuXy5zdGFiaWxpemVyVE0gPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIHRoaXMuX19sb2Nrcy5hbGwgKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fLnByb3BhZ1RNICYmIGNsZWFyVGltZW91dCh0aGlzLl8ucHJvcGFnVE0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9yZXYrKztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc3RhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KFwic3RhYmxlXCIsIHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgIXRoaXMuZGVhZCAmJiB0aGlzLl9wcm9wYWcoKTsvLyBzdGFiaWxpdHkgY2FuIGluZHVjZSBkZXN0cm95XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogUHJvcGFnIHN0b3JlcyB1cGRhdGVzIGJhc2luZyB0aGVpcnMgbGFzdCB1cGRhdGVzXG4gICAgICovXG4gICAgcHJvcGFnKCkge1xuICAgICAgICB0aGlzLl8ucHJvcGFnVE0gJiYgY2xlYXJUaW1lb3V0KHRoaXMuXy5wcm9wYWdUTSk7XG4gICAgICAgIHRoaXMuXy5wcm9wYWdUTSA9IHNldFRpbWVvdXQoXG4gICAgICAgICAgICBlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLl8ucHJvcGFnVE0gPSBudWxsO1xuICAgICAgICAgICAgICAgIHRoaXMuX3Byb3BhZygpXG4gICAgICAgICAgICB9LCAyXG4gICAgICAgICk7XG4gICAgfVxuICAgIFxuICAgIF9wcm9wYWcoKSB7XG4gICAgICAgIGlmICggdGhpcy5fLmZvbGxvd2Vycy5sZW5ndGggKVxuICAgICAgICAgICAgdGhpcy5fLmZvbGxvd2Vycy5mb3JFYWNoKCggeyAwOiBvYmosIDE6IGtleSwgMjogYXMsIDM6IGxhc3RSZXZzLCAzOiByZW1hcHMgfSApID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHRoaXMuZ2V0VXBkYXRlcyhsYXN0UmV2cyk7XG4gICAgICAgICAgICAgICAgaWYgKCAhZGF0YSApIHJldHVybjtcbiAgICAgICAgICAgICAgICBpZiAoIHR5cGVvZiBvYmogIT0gXCJmdW5jdGlvblwiICkge1xuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwic2V0U3RhdGUgXCIsb2JqLCBPYmplY3Qua2V5cyhkYXRhKSlcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBhcyApIG9iai5zZXRTdGF0ZSh7IFsgYXMgXTogZGF0YSB9KTtcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBvYmouc2V0U3RhdGUoZGF0YSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBvYmooZGF0YSwgbGFzdFJldnMgJiYgWyAuLi5sYXN0UmV2cyBdIHx8IFwibm8gcmV2c1wiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gbGFzdFJldnMgJiZcbiAgICAgICAgICAgICAgICAvLyBrZXkuZm9yRWFjaChpZCA9PiAobGFzdFJldnNbaWRdID0gdGhpcy5zdG9yZXNbaWRdICYmXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5zdG9yZXNbaWRdLl9yZXYgfHwgMCkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZW1pdChcInVwZGF0ZVwiLCB0aGlzLmdldFVwZGF0ZXMoKSk7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIGlzIHN0YWJsZVxuICAgICAqIEByZXR1cm5zIGJvb2xcbiAgICAgKi9cbiAgICBpc1N0YWJsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0YWJsZTtcbiAgICB9XG4gICAgXG4gICAgX2FkZENoaWxkKCBjdHggKSB7XG4gICAgICAgIHRoaXMuXy5jaGlsZFNjb3Blcy5wdXNoKGN0eCk7XG4gICAgICAgIHRoaXMuXy5zZWVuQ2hpbGRzKys7XG4gICAgICAgIGxldCBsaXN0cyAgICAgPSB7XG4gICAgICAgICAgICAgICAgJ3N0YWJsZScgICAgICA6IHMgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl8udW5TdGFibGVDaGlsZHMtLTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCAhdGhpcy5fLnVuU3RhYmxlQ2hpbGRzIClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdChcInN0YWJsZVRyZWVcIiwgdGhpcylcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICd1bnN0YWJsZScgICAgOiBzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fLnVuU3RhYmxlQ2hpbGRzKys7XG4gICAgICAgICAgICAgICAgICAgIGlmICggMSA9PSB0aGlzLl8udW5TdGFibGVDaGlsZHMgKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KFwidW5zdGFibGVUcmVlXCIsIHRoaXMpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAnc3RhYmxlVHJlZScgIDogcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuXy51blN0YWJsZUNoaWxkcy0tO1xuICAgICAgICAgICAgICAgICAgICBpZiAoICF0aGlzLl8udW5TdGFibGVDaGlsZHMgKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KFwic3RhYmxlVHJlZVwiLCB0aGlzKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgJ3Vuc3RhYmxlVHJlZSc6IHMgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl8udW5TdGFibGVDaGlsZHMrKztcbiAgICAgICAgICAgICAgICAgICAgaWYgKCAxID09IHRoaXMuXy51blN0YWJsZUNoaWxkcyApXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXQoXCJ1bnN0YWJsZVRyZWVcIiwgdGhpcylcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICdkZXN0cm95JyAgICAgOiBjdHggPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIGN0eC5fLnVuU3RhYmxlQ2hpbGRzIClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuXy51blN0YWJsZUNoaWxkcy0tO1xuICAgICAgICAgICAgICAgICAgICBpZiAoICFjdHguaXNTdGFibGUoKSApXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl8udW5TdGFibGVDaGlsZHMtLTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYgKCAhdGhpcy5fLnVuU3RhYmxlQ2hpbGRzIClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdChcInN0YWJsZVRyZWVcIiwgdGhpcylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgd2FzU3RhYmxlID0gdGhpcy5fLnVuU3RhYmxlQ2hpbGRzO1xuICAgICAgICAvLyFjdHguaXNTdGFibGUoKSAmJiBjb25zb2xlLndhcm4oJ2FkZCB1bnN0YWJsZSBjaGlsZCcpO1xuICAgICAgICAhY3R4LmlzU3RhYmxlKCkgJiYgdGhpcy5fLnVuU3RhYmxlQ2hpbGRzKys7XG4gICAgICAgIGN0eC5fLnVuU3RhYmxlQ2hpbGRzICYmIHRoaXMuXy51blN0YWJsZUNoaWxkcysrO1xuICAgICAgICB0aGlzLl8uY2hpbGRTY29wZXNMaXN0LnB1c2gobGlzdHMpO1xuICAgICAgICBpZiAoICF3YXNTdGFibGUgJiYgdGhpcy5fLnVuU3RhYmxlQ2hpbGRzIClcbiAgICAgICAgICAgIHRoaXMuZW1pdChcInVuc3RhYmxlVHJlZVwiLCB0aGlzKVxuICAgICAgICBjdHgub24obGlzdHMpO1xuICAgIH1cbiAgICBcbiAgICBfcm1DaGlsZCggY3R4ICkge1xuICAgICAgICBsZXQgaSAgICAgICAgID0gdGhpcy5fLmNoaWxkU2NvcGVzLmluZGV4T2YoY3R4KSxcbiAgICAgICAgICAgIHdhc1N0YWJsZSA9IHRoaXMuXy51blN0YWJsZUNoaWxkcztcbiAgICAgICAgaWYgKCBpICE9IC0xICkge1xuICAgICAgICAgICAgdGhpcy5fLmNoaWxkU2NvcGVzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICFjdHguaXNTdGFibGUoKSAmJiB0aGlzLl8udW5TdGFibGVDaGlsZHMtLTtcbiAgICAgICAgICAgIGN0eC5fLnVuU3RhYmxlQ2hpbGRzICYmIHRoaXMuXy51blN0YWJsZUNoaWxkcy0tO1xuICAgICAgICAgICAgY3R4LnVuKHRoaXMuXy5jaGlsZFNjb3Blc0xpc3Quc3BsaWNlKGksIDEpWyAwIF0pO1xuICAgICAgICAgICAgaWYgKCB3YXNTdGFibGUgJiYgIXRoaXMuXy51blN0YWJsZUNoaWxkcyApXG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0KFwic3RhYmxlVHJlZVwiKVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIHJldGFpbiggcmVhc29uICkge1xuICAgICAgICB0aGlzLl9fcmV0YWlucy5hbGwrKztcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcInJldGFpblwiLCB0aGlzLl9pZCwgcmVhc29uKTtcbiAgICAgICAgaWYgKCByZWFzb24gKSB7XG4gICAgICAgICAgICB0aGlzLl9fcmV0YWluc1sgcmVhc29uIF0gPSB0aGlzLl9fcmV0YWluc1sgcmVhc29uIF0gfHwgMDtcbiAgICAgICAgICAgIHRoaXMuX19yZXRhaW5zWyByZWFzb24gXSsrO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGRpc3Bvc2UoIHJlYXNvbiApIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcImRpc3Bvc2VcIiwgdGhpcy5faWQsIHJlYXNvbik7XG4gICAgICAgIGlmICggcmVhc29uICkge1xuICAgICAgICAgICAgaWYgKCAhdGhpcy5fX3JldGFpbnNbIHJlYXNvbiBdIClcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJEaXNwb3NlIG1vcmUgdGhhbiByZXRhaW5pbmcgOiBcIiArIHJlYXNvbik7XG4gICAgICAgICAgICB0aGlzLl9fcmV0YWluc1sgcmVhc29uIF0tLTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKCAhdGhpcy5fX3JldGFpbnMuYWxsIClcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkRpc3Bvc2UgbW9yZSB0aGFuIHJldGFpbmluZyAhXCIpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fX3JldGFpbnMuYWxsLS07XG4gICAgICAgIFxuICAgICAgICBpZiAoICF0aGlzLl9fcmV0YWlucy5hbGwgKSB7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiZGlzcG9zZSBkbyBkZXN0cm95IFwiLCB0aGlzLl9pZCwgdGhpcy5fcGVyc2lzdGVuY2VUbSk7XG4gICAgICAgICAgICBpZiAoIHRoaXMuXy5wZXJzaXN0ZW5jZVRtICkge1xuICAgICAgICAgICAgICAgIHRoaXMuXy5kZXN0cm95VE0gJiYgY2xlYXJUaW1lb3V0KHRoaXMuXy5kZXN0cm95VE0pO1xuICAgICAgICAgICAgICAgIHRoaXMuXy5kZXN0cm95VE0gPSBzZXRUaW1lb3V0KFxuICAgICAgICAgICAgICAgICAgICBlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vdGhpcy50aGVuKHMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgIXRoaXMuX19yZXRhaW5zLmFsbCAmJiAhdGhpcy5kZWFkICYmIHRoaXMuZGVzdHJveSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAvL30pO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB0aGlzLl8ucGVyc2lzdGVuY2VUbVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvL3RoaXMudGhlbihzID0+XG4gICAgICAgICAgICAgICAgKCAhdGhpcy5fX3JldGFpbnMuYWxsICYmICF0aGlzLmRlYWQgJiYgdGhpcy5kZXN0cm95KCkgKVxuICAgICAgICAgICAgICAgIC8vKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBvcmRlciBkZXN0cm95IG9mIGxvY2FsIHN0b3Jlc1xuICAgICAqL1xuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIGxldCBjdHggPSB0aGlzLl8uX3Njb3BlO1xuICAgICAgICAvL2NvbnNvbGUud2FybihcImRlc3Ryb3lcIiwgdGhpcy5faWQpO1xuICAgICAgICB0aGlzLl8uc3RhYmlsaXplclRNICYmIGNsZWFyVGltZW91dCh0aGlzLl8uc3RhYmlsaXplclRNKTtcbiAgICAgICAgdGhpcy5fLnByb3BhZ1RNICYmIGNsZWFyVGltZW91dCh0aGlzLl8ucHJvcGFnVE0pO1xuICAgICAgICBPYmplY3Qua2V5cyhcbiAgICAgICAgICAgIHRoaXMuXy5fbGlzdGVuaW5nXG4gICAgICAgICkuZm9yRWFjaChcbiAgICAgICAgICAgIGlkID0+ICggKCBpZCAhPT0gXCIkcGFyZW50XCIgKSAmJiB0aGlzLl8uX3Njb3BlWyBpZCBdLnJlbW92ZUxpc3RlbmVyKHRoaXMuXy5fbGlzdGVuaW5nWyBpZCBdKSApXG4gICAgICAgICk7XG4gICAgICAgIHdoaWxlICggdGhpcy5fLl9taXhlZExpc3QubGVuZ3RoICkge1xuICAgICAgICAgICAgdGhpcy5fLl9taXhlZFsgMCBdLnJlbW92ZUxpc3RlbmVyKHRoaXMuXy5fbWl4ZWRMaXN0LnNoaWZ0KCkpO1xuICAgICAgICAgICAgdGhpcy5fLl9taXhlZC5zaGlmdCgpLmRpc3Bvc2UoXCJtaXhlZFRvXCIpO1xuICAgICAgICB9XG4gICAgICAgIFsgLi4udGhpcy5fLmZvbGxvd2VycyBdLm1hcChmb2xsb3dlciA9PiB0aGlzLnVuQmluZCguLi5mb2xsb3dlcikpO1xuICAgICAgICBmb3IgKCBsZXQga2V5IGluIGN0eCApXG4gICAgICAgICAgICBpZiAoICFpcy5mbihjdHhbIGtleSBdKSApIHtcbiAgICAgICAgICAgICAgICBpZiAoIGtleSA9PSBcIiRwYXJlbnRcIiApIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICFjdHhbIGtleSBdLl9hdXRvRGVzdHJveSAmJiBjdHhbIGtleSBdLmRpc3Bvc2UoXCJzY29wZWRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIGlmICggdGhpcy5fLl9wYXJlbnRMaXN0ICkge1xuICAgICAgICAgICAgdGhpcy5wYXJlbnQuX3JtQ2hpbGQodGhpcyk7XG4gICAgICAgICAgICB0aGlzLnBhcmVudC5yZW1vdmVMaXN0ZW5lcih0aGlzLl8uX3BhcmVudExpc3QpO1xuICAgICAgICAgICAgdGhpcy5wYXJlbnQuZGlzcG9zZShcImlzTXlQYXJlbnRcIik7XG4gICAgICAgICAgICB0aGlzLl8uX3BhcmVudExpc3QgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGVhZCA9IHRydWU7XG4gICAgICAgIHRoaXMuZW1pdChcImRlc3Ryb3lcIiwgdGhpcyk7XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgLy9pZiAoICF0aGlzLl8uaXNMb2NhbElkIClcbiAgICAgICAgZGVsZXRlIG9wZW5TY29wZXNbIHRoaXMuX2lkIF07XG4gICAgICAgIFxuICAgICAgICAvL3RoaXMuXyA9IG51bGw7XG4gICAgICAgIFxuICAgIH1cbn1cblxuXG5pcy5yc1Njb3BlID0gZnVuY3Rpb24gKCBvYmogKSB7XG4gICAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIFNjb3BlXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNjb3BlO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9TY29wZS5qcyIsInZhciBpcyA9IHJlcXVpcmUoJ2lzJyk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICAuLi5pc1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWxzL2lzLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaXNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJpc1wiXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBpcyA9IHJlcXVpcmUoJy4vaXMnKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB3YWxrblNldCggb2JqLCBwYXRoLCB2YWx1ZSwgc3RhY2sgKSB7XHJcbiAgICBpZiAoIGlzLnN0cmluZyhwYXRoKSApXHJcbiAgICAgICAgcGF0aCA9IHBhdGguc3BsaXQoJy4nKTtcclxuICAgIGlmICggIXBhdGgubGVuZ3RoIClcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICBlbHNlIGlmICggcGF0aC5sZW5ndGggPT0gMSApXHJcbiAgICAgICAgcmV0dXJuIG9ialsgcGF0aFsgMCBdIF0gPSBzdGFja1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBbIC4uLiggb2JqWyBwYXRoWyAwIF0gXSB8fCBbXSApLCB2YWx1ZSBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHZhbHVlO1xyXG4gICAgZWxzZVxyXG4gICAgICAgIHJldHVybiB3YWxrblNldChcclxuICAgICAgICAgICAgb2JqWyBwYXRoWyAwIF0gXSA9XHJcbiAgICAgICAgICAgICAgICBvYmpbIHBhdGhbIDAgXSBdIHx8IHt9LFxyXG4gICAgICAgICAgICBwYXRoLnNsaWNlKDEpLFxyXG4gICAgICAgICAgICB2YWx1ZSwgc3RhY2tcclxuICAgICAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gd2Fsa25HZXQoIG9iaiwgcGF0aCwgaXNLZXkgKSB7XHJcbiAgICBpZiAoIGlzLnN0cmluZyhwYXRoKSApXHJcbiAgICAgICAgcGF0aCA9IHBhdGguc3BsaXQoJy4nKTtcclxuICAgIHJldHVybiBwYXRoLmxlbmd0aFxyXG4gICAgICAgICAgID8gb2JqWyBwYXRoWyAwIF0gXSAmJiB3YWxrbkdldChvYmpbIHBhdGhbIDAgXSBdLCBwYXRoLnNsaWNlKDEpKVxyXG4gICAgICAgICAgIDogb2JqO1xyXG59XHJcblxyXG4vL0B0b2RvXHJcbmV4cG9ydCBmdW5jdGlvbiBrZXlXYWxrblNldCggb2JqLCBwYXRoLCB2YWx1ZSwgc3RhY2sgKSB7XHJcbiAgICBpZiAoIGlzLnN0cmluZyhwYXRoKSApXHJcbiAgICAgICAgcGF0aCA9IHBhdGguc3BsaXQoLyhcXD58XFwvKS9pZykuZmlsdGVyKHYgPT4gKCB2ICE9PSAnPicgJiYgdiApKTtcclxuICAgIHJldHVybiB3YWxrblNldChvYmosIHBhdGgsIHZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGtleVdhbGtuR2V0KCBvYmosIHBhdGgsIGlzS2V5ICkge1xyXG4gICAgaWYgKCBpcy5zdHJpbmcocGF0aCkgKVxyXG4gICAgICAgIHBhdGggPSBwYXRoLnNwbGl0KC8oXFw+fFxcLykvaWcpLmZpbHRlcih2ID0+ICggdiAhPT0gJz4nICYmIHYgKSk7XHJcbiAgICByZXR1cm4gcGF0aC5sZW5ndGhcclxuICAgICAgICAgICA/IG9ialsgcGF0aFsgMCBdIF0gJiYgd2Fsa25HZXQob2JqWyBwYXRoWyAwIF0gXSwgcGF0aC5zbGljZSgxKSlcclxuICAgICAgICAgICA6IG9iajtcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlscy91dGlscy5qcyIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpICAyMDE4IFdpc2UgV2lsZCBXZWIgLlxuICpcbiAqICBNSVQgTGljZW5zZVxuICogIFxuICogIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqICBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiAgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqICBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqICBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICogIFxuICogIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuICogIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKiAgXG4gKiAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqICBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG4gKiAgU09GVFdBUkUuXG4gKiAgXG4gKiBAYXV0aG9yIDogTmF0aGFuYWVsIEJyYXVuXG4gKiBAY29udGFjdCA6IGNhaXBpbGFic0BnbWFpbC5jb21cbiAqL1xudmFyIGlzID0gcmVxdWlyZSgnaXMnKTtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVtaXR0ZXIge1xuICAgIF9ldmVudHMgPSB7fTtcbiAgICBcbiAgICBvbiggZXZ0LCBjYiApIHtcbiAgICAgICAgaWYgKCAhaXMuc3RyaW5nKGV2dCkgJiYgZXZ0IClcbiAgICAgICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhldnQpLmZvckVhY2goayA9PiB0aGlzLm9uKGssIGV2dFtrXSkpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fZXZlbnRzW2V2dF0gPSB0aGlzLl9ldmVudHNbZXZ0XSB8fCBbXTtcbiAgICAgICAgdGhpcy5fZXZlbnRzW2V2dF0ucHVzaChjYik7XG4gICAgICAgIFxuICAgIH1cbiAgICBcbiAgICB1biggZXZ0LCBjYiApIHtcbiAgICAgICAgaWYgKCAhaXMuc3RyaW5nKGV2dCkgJiYgZXZ0IClcbiAgICAgICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhldnQpLmZvckVhY2goayA9PiB0aGlzLnVuKGssIGV2dFtrXSkpO1xuICAgICAgICBcbiAgICAgICAgaWYgKCAhdGhpcy5fZXZlbnRzW2V2dF0gKSByZXR1cm47XG4gICAgICAgIHZhciBpID0gdGhpcy5fZXZlbnRzW2V2dF0uaW5kZXhPZihjYik7XG4gICAgICAgIHRoaXMuX2V2ZW50c1tldnRdLnNwbGljZShpLCAxKTtcbiAgICB9XG4gICAgXG4gICAgZW1pdCggZXZ0LCAuLi5hcmd6ICkge1xuICAgICAgICBpZiAoICF0aGlzLl9ldmVudHNbZXZ0XSApIHJldHVybjtcbiAgICAgICAgbGV0IGxpc3RzID0gWy4uLnRoaXMuX2V2ZW50c1tldnRdXTtcbiAgICAgICAgXG4gICAgICAgIGZvciAoIHZhciBpID0gMDsgaSA8IGxpc3RzLmxlbmd0aDsgaSsrIClcbiAgICAgICAgICAgIGxpc3RzW2ldKC4uLmFyZ3opXG4gICAgfVxuICAgIFxuICAgIGFkZExpc3RlbmVyKCkge1xuICAgICAgICB0aGlzLm9uKC4uLmFyZ3VtZW50cyk7XG4gICAgfVxuICAgIFxuICAgIHJlbW92ZUxpc3RlbmVyKCkge1xuICAgICAgICB0aGlzLnVuKC4uLmFyZ3VtZW50cyk7XG4gICAgfVxuICAgIFxuICAgIHJlbW92ZUFsbExpc3RlbmVycygpIHtcbiAgICAgICAgdGhpcy5fZXZlbnRzID0ge307XG4gICAgfVxuICAgIFxuICAgIG9uY2UoIGV2dCwgY2IgKSB7XG4gICAgICAgIGxldCBmbjtcbiAgICAgICAgdGhpcy5vbihldnQsIGZuID0gKCAuLi5hcmd6ICkgPT4ge1xuICAgICAgICAgICAgdGhpcy51bihldnQsIGZuKTtcbiAgICAgICAgICAgIGNiKC4uLmFyZ3opXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBcbiAgICBcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbHMvRW1pdHRlci5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNob3J0aWRcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJzaG9ydGlkXCJcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcbiAqIENvcHlyaWdodCAoYykgIDIwMTggV2lzZSBXaWxkIFdlYiAuXG4gKlxuICogIE1JVCBMaWNlbnNlXG4gKlxuICogIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqICBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiAgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqICBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqICBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqICBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcbiAqICBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqICBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiAgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiAgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiAgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiAgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcbiAqICBTT0ZUV0FSRS5cbiAqXG4gKiBAYXV0aG9yIDogTmF0aGFuYWVsIEJyYXVuXG4gKiBAY29udGFjdCA6IGNhaXBpbGFic0BnbWFpbC5jb21cbiAqL1xuXG52YXIgaXMgICAgICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vdXRpbHMvaXMnKSxcbiAgICBTY29wZSAgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9TY29wZScpLFxuICAgIHsga2V5V2Fsa25TZXQsIGtleVdhbGtuR2V0IH0gPSByZXF1aXJlKCcuL3V0aWxzL3V0aWxzJyksXG4gICAgRXZlbnRFbWl0dGVyICAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vdXRpbHMvRW1pdHRlcicpLFxuICAgIFRhc2tTZXF1ZW5jZXIgICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL3V0aWxzL1Rhc2tTZXF1ZW5jZXInKSxcbiAgICBzaG9ydGlkICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnc2hvcnRpZCcpLFxuICAgIG9ialByb3RvICAgICAgICAgICAgICAgICAgICAgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Yoe30pO1xuXG5jbGFzcyBTdG9yZSBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gICAgLy9zdGF0aWMgdXNlICAgICAgICAgICAgICAgICAgPSBbXTsvLyBvdmVycmlkYWJsZSBsaXN0IG9mIHNvdXJjZSBzdG9yZXNcbiAgICBzdGF0aWMgZm9sbG93Oy8vIG92ZXJyaWRhYmxlIGxpc3Qgb2Ygc3RvcmUgdGhhdCB3aWxsIGFsbG93IHB1c2ggaWYgdXBkYXRlZFxuICAgIHN0YXRpYyByZXF1aXJlO1xuICAgIHN0YXRpYyBzdGF0aWNTY29wZSAgICAgICAgICA9IG5ldyBTY29wZSh7fSwgeyBpZDogXCJzdGF0aWNcIiB9KTtcbiAgICBzdGF0aWMgc3RhdGUgICAgICAgICAgICAgICAgPSB1bmRlZmluZWQ7Ly8gZGVmYXVsdCBzdGF0ZVxuICAgIC8qKlxuICAgICAqIGlmIHJldGFpbiBnb2VzIHRvIDAgOlxuICAgICAqIGZhbHNlIHRvIG5vdCBkZXN0cm95LFxuICAgICAqIDAgdG8gc3luYyBhdXRvIGRlc3Ryb3lcbiAgICAgKiBNcyB0byBhdXRvZGVzdHJveSBhZnRlciB0bSBtcyBpZiBubyByZXRhaW4gaGFzIGJlZW4gY2FsbGVkXG4gICAgICogQHR5cGUge2Jvb2xlYW58SW50fVxuICAgICAqL1xuICAgICAgICAgICBzdGF0aWMgcGVyc2lzdGVuY2VUbSA9IGZhbHNlO1xuICAgIFxuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdG9yLCB3aWxsIGJ1aWxkIGEgcmVzY29wZSBzdG9yZVxuICAgICAqXG4gICAgICogKHNjb3BlLCB7cmVxdWlyZSx1c2UsYXBwbHksc3RhdGUsIGRhdGF9KVxuICAgICAqIChzY29wZSlcbiAgICAgKlxuICAgICAqIEBwYXJhbSBzY29wZSB7b2JqZWN0fSBzY29wZSB3aGVyZSB0byBmaW5kIHRoZSBvdGhlciBzdG9yZXMgKGRlZmF1bHQgOiBzdGF0aWNcbiAgICAgKiAgICAgc3RhdGljU2NvcGUgKVxuICAgICAqIEBwYXJhbSBrZXlzIHtBcnJheX0gKHBhc3NlZCB0byBTdG9yZTo6bWFwKSBFeCA6IFtcInNlc3Npb25cIiwgXCJvdGhlck5hbWVkU3RvcmU6a2V5XCIsXG4gICAgICogICAgIG90aGVyU3RvcmUuYXMoXCJvdGhlcktleVwiKV1cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdmFyIGFyZ3ogICAgICAgICA9IFsgLi4uYXJndW1lbnRzIF0sXG4gICAgICAgICAgICBfc3RhdGljICAgICAgPSB0aGlzLmNvbnN0cnVjdG9yLFxuICAgICAgICAgICAgc2NvcGUgICAgICAgID0gYXJnelsgMCBdIGluc3RhbmNlb2YgU2NvcGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgID8gYXJnei5zaGlmdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA6IF9zdGF0aWMuc2NvcGUgPyBTY29wZS5nZXRTY29wZShfc3RhdGljLnNjb3BlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogaXMuc3RyaW5nKGFyZ3pbIDAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gU2NvcGUuZ2V0U2NvcGUoYXJnei5zaGlmdCgpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfc3RhdGljLnN0YXRpY1Njb3BlLFxuICAgICAgICAgICAgY2ZnICAgICAgICAgID0gYXJnelsgMCBdICYmICFpcy5hcnJheShhcmd6WyAwIF0pICYmICFpcy5zdHJpbmcoYXJnelsgMCBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBhcmd6LnNoaWZ0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDoge30sXG4gICAgICAgICAgICB0YXNrUXVldWUgICAgPSBpcy5hcnJheShhcmd6WyAwIF0pID8gYXJnei5zaGlmdCgpIDogbnVsbCxcbiAgICAgICAgICAgIG5hbWUgICAgICAgICA9IGNmZy5uYW1lIHx8IF9zdGF0aWMubmFtZSxcbiAgICAgICAgICAgIHdhdGNocyAgICAgICA9IGNmZy51c2UgfHwgW10sXG4gICAgICAgICAgICBhcHBseSAgICAgICAgPSBjZmcuYXBwbHkgfHwgbnVsbCxcbiAgICAgICAgICAgIGluaXRpYWxTdGF0ZSA9IF9zdGF0aWMuc3RhdGUgfHwgX3N0YXRpYy5pbml0aWFsU3RhdGUgfHwgX3N0YXRpYy5kZWZhdWx0U3RhdGUsXG4gICAgICAgICAgICBhcHBsaWVkO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fdWlkID0gY2ZnLl91aWQgfHwgc2hvcnRpZC5nZW5lcmF0ZSgpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fX3JldGFpbnMgICAgPSB7IGFsbDogMCB9O1xuICAgICAgICB0aGlzLl9fbG9ja3MgICAgICA9IHsgYWxsOiAwIH07XG4gICAgICAgIHRoaXMuX29uU3RhYmlsaXplID0gW107XG4gICAgICAgIFxuICAgICAgICAvLyBhdXRvRGVzdHJveVRtXG4gICAgICAgIHRoaXMuX2F1dG9EZXN0cm95ICAgPSAhIXRoaXMuX3BlcnNpc3RlbmNlVG07XG4gICAgICAgIHRoaXMuX3BlcnNpc3RlbmNlVG0gPSBjZmcucGVyc2lzdGVuY2VUbSB8fCBfc3RhdGljLnBlcnNpc3RlbmNlVG0gfHwgKCBjZmcuYXV0b0Rlc3Ryb3kgfHwgX3N0YXRpYy5hdXRvRGVzdHJveSApICYmIDU7XG4gICAgICAgIHRoaXMuX2NmZyAgICAgICAgICAgPSBjZmc7XG4gICAgICAgIGlmICggY2ZnICYmIGNmZy5vbiApIHtcbiAgICAgICAgICAgIHRoaXMub24oY2ZnLm9uKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgXG4gICAgICAgIGlmICggc2NvcGUuc3RvcmVzICkge1xuICAgICAgICAgICAgdGhpcy5zY29wZU9iaiA9IHNjb3BlO1xuICAgICAgICAgICAgdGhpcy5zY29wZSAgICA9IHNjb3BlLnN0b3JlcztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2NvcGVPYmogPSBuZXcgU2NvcGUoc2NvcGUpO1xuICAgICAgICAgICAgdGhpcy5zY29wZSAgICA9IHNjb3BlLnN0b3JlcztcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8gc3RhbmRhcmRpemVkIHNjb3BlIGFjY2Vzc1xuICAgICAgICB0aGlzLiRzY29wZSAgICA9IHRoaXMuc2NvcGVPYmo7XG4gICAgICAgIHRoaXMuJHN0b3JlcyAgID0gdGhpcy5zY29wZU9iai5zdG9yZXM7XG4gICAgICAgIHRoaXMuJGFjdGlvbnMgID0gdGhpcy5zY29wZU9iai5hY3Rpb25zO1xuICAgICAgICB0aGlzLiRkaXNwYXRjaCA9IHRoaXMuc2NvcGVPYmouZGlzcGF0Y2guYmluZCh0aGlzLnNjb3BlT2JqKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX3JldiAgICAgPSB0aGlzLmNvbnN0cnVjdG9yLl9yZXYgfHwgMDtcbiAgICAgICAgdGhpcy5fcmV2cyAgICA9IHt9O1xuICAgICAgICB0aGlzLnN0b3JlcyAgID0ge307XG4gICAgICAgIHRoaXMuX3JlcXVpcmUgPSBbXTtcbiAgICAgICAgdGhpcy5fc291cmNlcyA9IFsgbmFtZSBdO1xuICAgICAgICBcbiAgICAgICAgaWYgKCBpcy5hcnJheShfc3RhdGljLnVzZSkgKSB7XG4gICAgICAgICAgICB0aGlzLl91c2UgPSBbIC4uLndhdGNocywgLi4uKCBfc3RhdGljLnVzZSB8fCBbXSApLm1hcChcbiAgICAgICAgICAgICAgICBrZXkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmVmID0ga2V5Lm1hdGNoKC9eKFxcIT8pKFteXFw6XSopKD86XFw6KC4qKSk/JC8pO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIHJlZlsgMSBdICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlZjIgPSByZWZbIDIgXS5zcGxpdCgnLicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fcmVxdWlyZS5wdXNoKHJlZlsgMyBdIHx8IHJlZjJbIHJlZjIubGVuZ3RoIC0gMSBdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVmWyAyIF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKSBdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fdXNlID0gWyAuLi53YXRjaHMsIC4uLihcbiAgICAgICAgICAgICAgICBfc3RhdGljLnVzZSA/IE9iamVjdC5rZXlzKF9zdGF0aWMudXNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVmID0ga2V5Lm1hdGNoKC9eKFxcIT8pKC4qKSQvKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmWyAxIF0gJiYgdGhpcy5fcmVxdWlyZS5wdXNoKF9zdGF0aWMudXNlWyBrZXkgXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZWZbIDIgXSArICggKCBfc3RhdGljLnVzZVsga2V5IF0gPT09IHRydWUgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICc6JyArIF9zdGF0aWMudXNlWyBrZXkgXSApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBbXVxuICAgICAgICAgICAgKSBdO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAoIF9zdGF0aWMucmVxdWlyZSApXG4gICAgICAgICAgICB0aGlzLl9yZXF1aXJlLnB1c2goLi4uX3N0YXRpYy5yZXF1aXJlKTtcbiAgICAgICAgaWYgKCBjZmcucmVxdWlyZSApXG4gICAgICAgICAgICB0aGlzLl9yZXF1aXJlLnB1c2goLi4uY2ZnLnJlcXVpcmUpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fZm9sbG93ZXJzID0gW107XG4gICAgICAgIHRoaXMuX2NoYW5nZXNTVyA9IGluaXRpYWxTdGF0ZSB8fCB7fTtcbiAgICAgICAgdGhpcy5zdGF0ZSAgICAgID0gaW5pdGlhbFN0YXRlICYmIHt9O1xuICAgICAgICBpZiAoIGFwcGx5IClcbiAgICAgICAgICAgIHRoaXMuYXBwbHkgPSBhcHBseTtcbiAgICAgICAgXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJbml0aWFsIHN0YXRlIGlzbid0IGZ1bGx5IGluaXRpYWxpemVkICggY2hpbGRzIGNvbnN0cnVjdG9ycyBjYW4gc2V0IGl0IClcbiAgICAgICAgICogU2NvcGUgYmFzZWQgaW5zdGFuY2UgaGF2ZSB0YXNrUXVldWUgdG8gZGVsYXkgaW5pdCBzeW5jaHJvbm91c2x5LCBpZiBub3RcbiAgICAgICAgICogcHJlc2VudCB3ZSB1c2Ugc2V0VGltZW91dFxuICAgICAgICAgKi9cbiAgICAgICAgaWYgKCB0YXNrUXVldWUgKSB7XG4gICAgICAgICAgICB0YXNrUXVldWUucHVzaCh0aGlzLl9hZnRlckNvbnN0cnVjdG9yLmJpbmQodGhpcykpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgc2V0VGltZW91dCh0aGlzLl9hZnRlckNvbnN0cnVjdG9yLmJpbmQodGhpcykpXG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgaW5jb21pbmcgc3RhdGUgKCBmb3IgaW1tZWRpYXRlIHN0YXRlIHJlbGF0aXZlIGFjdGlvbnMgKVxuICAgICAqIEByZXR1cm5zIHt7fXwqfVxuICAgICAqL1xuICAgIGdldCBuZXh0U3RhdGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jaGFuZ2VzU1cgJiYgeyAuLi50aGlzLnN0YXRlLCAuLi50aGlzLl9jaGFuZ2VzU1cgfSB8fCB0aGlzLnN0YXRlO1xuICAgIH1cbiAgICBcbiAgICBfYWZ0ZXJDb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgbGV0IGNmZyAgICAgICAgICA9IHRoaXMuX2NmZyxcbiAgICAgICAgICAgIF9zdGF0aWMgICAgICA9IHRoaXMuY29uc3RydWN0b3IsXG4gICAgICAgICAgICBzbmFwc2hvdCAgICAgPSB0aGlzLnJlc3RvcmUodW5kZWZpbmVkLCB0cnVlKSxcbiAgICAgICAgICAgIGluaXRpYWxTdGF0ZSA9IHRoaXMuc3RhdGUsXG4gICAgICAgICAgICBpbml0aWFsRGF0YSAgPSB0aGlzLmRhdGEsXG4gICAgICAgICAgICBhcHBsaWVkO1xuICAgICAgICB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmICggaW5pdGlhbERhdGEgKVxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YSA9IGluaXRpYWxEYXRhO1xuICAgICAgICAgICAgZWxzZSBpZiAoIF9zdGF0aWMuZGF0YSAhPT0gdW5kZWZpbmVkIClcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGEgPSB7IC4uLl9zdGF0aWMuZGF0YSB9O1xuICAgICAgICAgICAgZWxzZSBpZiAoIGNmZy5oYXNPd25Qcm9wZXJ0eShcImRhdGFcIikgKVxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YSA9IGNmZy5kYXRhO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoIGNmZy5oYXNPd25Qcm9wZXJ0eShcInN0YXRlXCIpICYmIGNmZy5zdGF0ZSAhPT0gdW5kZWZpbmVkIClcbiAgICAgICAgICAgICAgICBpbml0aWFsU3RhdGUgPSB7IC4uLmluaXRpYWxTdGF0ZSwgLi4uY2ZnLnN0YXRlIH07XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmICggdGhpcy5kYXRhID09PSB1bmRlZmluZWQgKSB7XG4gICAgICAgICAgICAgICAgaWYgKCBpbml0aWFsU3RhdGUgfHwgdGhpcy5fdXNlLmxlbmd0aCApIHsvLyBzeW5jIGFwcGx5XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2NoYW5nZXNTVyA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLnRoaXMuX2NoYW5nZXNTVyxcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLiggaW5pdGlhbFN0YXRlIHx8IHt9ICksXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi50aGlzLiRzY29wZS5tYXAodGhpcywgdGhpcy5fdXNlKVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlICAgICAgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCB0aGlzLnNob3VsZEFwcGx5KHRoaXMuX2NoYW5nZXNTVykgJiYgdGhpcy5kYXRhID09PSB1bmRlZmluZWQgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGEgICAgICAgPSB0aGlzLmFwcGx5KHRoaXMuZGF0YSwgdGhpcy5fY2hhbmdlc1NXLCB0aGlzLl9jaGFuZ2VzU1cpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXBwbGllZCAgICAgICAgID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUgICAgICA9IHRoaXMuX2NoYW5nZXNTVztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2NoYW5nZXNTVyA9IHt9O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgYXBwbGllZCAgICAgICAgID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlICAgICAgPSB7Ly8gYXNzdW1lIHRoaXMgc3RhdGUgaXMgc3luYyB3aXRoIGluaXRpYWwgZGF0YVxuICAgICAgICAgICAgICAgICAgICAuLi50aGlzLl9jaGFuZ2VzU1csXG4gICAgICAgICAgICAgICAgICAgIC4uLiggaW5pdGlhbFN0YXRlIHx8IHt9ICksXG4gICAgICAgICAgICAgICAgICAgIC4uLnRoaXMuJHNjb3BlLm1hcCh0aGlzLCB0aGlzLl91c2UpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuX2NoYW5nZXNTVyA9IHt9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICggKCB0aGlzLmRhdGEgIT09IHVuZGVmaW5lZCB8fCBhcHBsaWVkICkgJiYgIXRoaXMuX19sb2Nrcy5hbGwgKSB7XG4gICAgICAgICAgICB0aGlzLl9zdGFibGUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5fcmV2Kys7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9zdGFibGUgPSBmYWxzZTtcbiAgICAgICAgICAgIGlmICggIV9zdGF0aWMubWFuYWdlZCAmJiAhdGhpcy5zdGF0ZSAmJiAoICF0aGlzLl91c2UgfHwgIXRoaXMuX3VzZS5sZW5ndGggKSApIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCJSZVNjb3BlIHN0b3JlICdcIiwgdGhpcy5uYW1lLCBcIicgaGF2ZSBubyBpbml0aWFsIGRhdGEsIHN0YXRlIG9yIHVzZS4gSXQgY2FuJ3Qgc3RhYmlsaXplLi4uXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICF0aGlzLl9zdGFibGUgJiYgdGhpcy5lbWl0KCd1bnN0YWJsZScsIHRoaXMuc3RhdGUpO1xuICAgICAgICBcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogT3ZlcnJpZGFibGUgbWV0aG9kIHRvIGtub3cgaWYgYSBkYXRhIGNoYW5nZSBzaG91bGQgYmUgcHJvcGFnIHRvIHRoZSBsaXN0ZW5pbmdcbiAgICAgKiBzdG9yZXMgJiBjb21wb25lbnRzXG4gICAgICovXG4gICAgc2hvdWxkUHJvcGFnKCBuRGF0YXMgKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBcbiAgICBoYXNEYXRhQ2hhbmdlKCBuRGF0YXMgKSB7XG4gICAgICAgIHZhciBfc3RhdGljID0gdGhpcy5jb25zdHJ1Y3RvciwgcixcbiAgICAgICAgICAgIGNEYXRhcyAgPSB0aGlzLmRhdGE7XG4gICAgICAgIHIgICAgICAgICAgID0gIWNEYXRhcyAmJiBuRGF0YXMgfHwgY0RhdGFzICE9PSBuRGF0YXM7XG4gICAgICAgICFyICYmIGNEYXRhcyAmJiBPYmplY3Qua2V5cyhjRGF0YXMpLmZvckVhY2goXG4gICAgICAgICAgICAoIGtleSApID0+IHtcbiAgICAgICAgICAgICAgICByID0gciB8fCAoIG5EYXRhc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBjRGF0YXNbIGtleSBdICE9PSBuRGF0YXNbIGtleSBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA6IGNEYXRhcyAmJiBjRGF0YXNbIGtleSBdIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgIXIgJiYgbkRhdGFzICYmIE9iamVjdC5rZXlzKG5EYXRhcykuZm9yRWFjaChcbiAgICAgICAgICAgICgga2V5ICkgPT4ge1xuICAgICAgICAgICAgICAgIHIgPSByIHx8ICggbkRhdGFzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA/IGNEYXRhc1sga2V5IF0gIT09IG5EYXRhc1sga2V5IF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDogY0RhdGFzICYmIGNEYXRhc1sga2V5IF0gKVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcjtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogT3ZlcnJpZGFibGUgbWV0aG9kIHRvIGtub3cgaWYgYSBzdGF0ZSBjaGFuZ2Ugc2hvdWxkIGJlIGFwcGxpZWRcbiAgICAgKi9cbiAgICBzaG91bGRBcHBseSggc3RhdGUgPSB0aGlzLnN0YXRlICkge1xuICAgICAgICB2YXIgX3N0YXRpYyA9IHRoaXMuY29uc3RydWN0b3I7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICEhdGhpcy5pc0NvbXBsZXRlKHN0YXRlKVxuICAgICAgICAgICAgICAgKSAmJiAoIGlzLmFycmF5KF9zdGF0aWMuZm9sbG93KVxuICAgICAgICAgICAgICAgICAgICAgID8gX3N0YXRpYy5mb2xsb3dcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVkdWNlKCggciwgaSApID0+ICggciB8fCBzdGF0ZSAmJiBzdGF0ZVsgaSBdICksIGZhbHNlKVxuICAgICAgICAgICAgICAgICAgICAgIDogX3N0YXRpYy5mb2xsb3dcbiAgICAgICAgICAgICAgICAgICAgICAgID8gT2JqZWN0LmtleXMoX3N0YXRpYy5mb2xsb3cpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZWR1Y2UoKCByLCBpICkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfHwgc3RhdGUgJiYgaXMuZm4oX3N0YXRpYy5mb2xsb3dbIGkgXSkgJiYgX3N0YXRpYy5mb2xsb3dbIGkgXS5jYWxsKHRoaXMsIHN0YXRlWyBpIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8fCBfc3RhdGljLmZvbGxvd1sgaSBdICYmIHN0YXRlWyBpIF0gIT09IHRoaXMuc3RhdGVbIGkgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCBmYWxzZSkgOiB0cnVlXG4gICAgICAgICAgICAgICApO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBPdmVycmlkYWJsZSBhcHBsaWVyIC8gcmVtYXBwZXJcbiAgICAgKiBJZiBzdGF0ZSBvciBsYXN0UHVibGljU3RhdGUgYXJlIHNpbXBsZSBoYXNoIG1hcHMgYXBwbHkgd2lsbCByZXR1cm4gey4uLmRhdGEsXG4gICAgICogLi4uc3RhdGV9IGlmIG5vdCBpdCB3aWxsIHJldHVybiB0aGUgbGFzdCBwcml2YXRlIHN0YXRlXG4gICAgICogQHBhcmFtIGRhdGFcbiAgICAgKiBAcGFyYW0gc3RhdGVcbiAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgKi9cbiAgICBhcHBseSggZGF0YSwgc3RhdGUsIGNoYW5nZXMgKSB7XG4gICAgICAgIHN0YXRlID0gc3RhdGUgfHwgdGhpcy5zdGF0ZTtcbiAgICAgICAgXG4gICAgICAgIGlmICggdGhpcy5yZWZpbmUgKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVmaW5lKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIFxuICAgICAgICBpZiAoICFkYXRhIHx8IGRhdGEuX19wcm90b19fICE9PSBvYmpQcm90byB8fCBzdGF0ZS5fX3Byb3RvX18gIT09IG9ialByb3RvIClcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgcmV0dXJuIHsgLi4uZGF0YSwgLi4uc3RhdGUgfVxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBAZGVwcmVjaWF0ZWRcbiAgICAgKiBAcGFyYW0gZGF0YVxuICAgICAqIEBwYXJhbSBzdGF0ZVxuICAgICAqIEBwYXJhbSBjaGFuZ2VzXG4gICAgICogQHJldHVybnMgeyp9XG4gICAgICovXG4gICAgcmVmaW5lKCBkYXRhLCBzdGF0ZSwgY2hhbmdlcyApIHtcbiAgICAgICAgc3RhdGUgPSBzdGF0ZSB8fCB0aGlzLnN0YXRlO1xuICAgICAgICBcbiAgICAgICAgaWYgKCAhZGF0YSB8fCBkYXRhLl9fcHJvdG9fXyAhPT0gb2JqUHJvdG8gfHwgc3RhdGUuX19wcm90b19fICE9PSBvYmpQcm90byApXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHJldHVybiB7IC4uLmRhdGEsIC4uLnN0YXRlIH1cbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogRGVib3VuY2UgdGhpcyBzdG9yZSBwcm9wYWdhdGlvbiAoICYgcmVkdWNpbmcgKVxuICAgICAqIEBwYXJhbSBjYlxuICAgICAqL1xuICAgIHN0YWJpbGl6ZSggY2IgKSB7XG4gICAgICAgIGNiICYmIHRoaXMub25jZSgnc3RhYmxlJywgY2IpO1xuICAgICAgICB0aGlzLl9zdGFibGUgJiYgdGhpcy5lbWl0KCd1bnN0YWJsZScsIHRoaXMuc3RhdGUsIHRoaXMuZGF0YSk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9zdGFibGUgPSBmYWxzZTtcbiAgICAgICAgXG4gICAgICAgIGlmICggdGhpcy5fc3RhYmlsaXplciApXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9zdGFiaWxpemVyID0gVGFza1NlcXVlbmNlci5wdXNoVGFzayh0aGlzLCAncHVzaFN0YXRlJyk7XG4gICAgfVxuICAgIFxuICAgIHJldHJpZXZlKCBwYXRoLCBpID0gMCwgb2JqID0gdGhpcy5kYXRhICkge1xuICAgICAgICBwYXRoID0gaXMuc3RyaW5nKHBhdGgpID8gcGF0aC5zcGxpdCgnLicpIDogcGF0aDtcbiAgICAgICAgcmV0dXJuICFvYmogfHwgIXBhdGggfHwgIXBhdGgubGVuZ3RoXG4gICAgICAgICAgICAgICA/IG9ialxuICAgICAgICAgICAgICAgOiBwYXRoLmxlbmd0aCA9PSBpICsgMVxuICAgICAgICAgICAgICAgICA/IG9ialsgcGF0aFsgaSBdIF1cbiAgICAgICAgICAgICAgICAgOiB0aGlzLnJldHJpZXZlKHBhdGgsIGkgKyAxLCBvYmpbIHBhdGhbIGkgXSBdKTtcbiAgICB9XG4gICAgXG4gICAgZGlzcGF0Y2goIGFjdGlvbiwgLi4uYXJneiApIHtcbiAgICAgICAgdGhpcy5zY29wZU9iai5kaXNwYXRjaChhY3Rpb24sIC4uLmFyZ3opO1xuICAgIH1cbiAgICBcbiAgICB0cmlnZ2VyKCBhY3Rpb24sIC4uLmFyZ3ogKSB7XG4gICAgICAgIGxldCB7IGFjdGlvbnMgfSA9IHRoaXMuY29uc3RydWN0b3I7XG4gICAgICAgIGlmICggYWN0aW9ucyAmJiBhY3Rpb25zWyBhY3Rpb24gXSApIHtcbiAgICAgICAgICAgIGxldCBucyA9IGFjdGlvbnNbIGFjdGlvbiBdLmNhbGwodGhpcywgLi4uYXJneik7XG4gICAgICAgICAgICBucyAmJiB0aGlzLnNldFN0YXRlKG5zKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBQdWxsIHN0b3JlcyBpbiB0aGUgcHJpdmF0ZSBzdGF0ZVxuICAgICAqIEBwYXJhbSBzdG9yZXMgIHtBcnJheX0gKHBhc3NlZCB0byBTdG9yZTo6bWFwKSBFeCA6IFtcInNlc3Npb25cIixcbiAgICAgKiAgICAgXCJvdGhlck5hbWVkU3RvcmU6a2V5XCIsIG90aGVyU3RvcmUuYXMoXCJvdGhlcktleVwiKV1cbiAgICAgKi9cbiAgICBwdWxsKCBzdG9yZXMsIGRvV2FpdCwgb3JpZ2luICkge1xuICAgICAgICBsZXQgaW5pdGlhbE91dHB1dHMgPSB0aGlzLnNjb3BlT2JqLm1hcCh0aGlzLCBzdG9yZXMpO1xuICAgICAgICBpZiAoIGRvV2FpdCApIHtcbiAgICAgICAgICAgIHRoaXMud2FpdCgpO1xuICAgICAgICAgICAgc3RvcmVzLmZvckVhY2goKCBzICkgPT4gdGhpcy5zY29wZVsgcyBdICYmIHRoaXMud2FpdCh0aGlzLnNjb3BlWyBzIF0pKTtcbiAgICAgICAgICAgIHRoaXMucmVsZWFzZSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpbml0aWFsT3V0cHV0cztcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogU2V0ICYgUHVzaCB0aGUgcmVzdWx0IGRhdGEgdG8gZm9sbG93ZXJzIGlmIHN0YWJsZVxuICAgICAqIEBwYXJhbSBjYlxuICAgICAqL1xuICAgIHB1c2goIGRhdGEsIGZvcmNlLCBjYiApIHtcbiAgICAgICAgY2IgICAgPSBmb3JjZSA9PT0gdHJ1ZSA/IGNiIDogZm9yY2U7XG4gICAgICAgIGZvcmNlID0gZm9yY2UgPT09IHRydWU7XG4gICAgICAgIGlmICggIWZvcmNlICYmXG4gICAgICAgICAgICAgKFxuICAgICAgICAgICAgICAgICAhdGhpcy5oYXNEYXRhQ2hhbmdlKGRhdGEpXG4gICAgICAgICAgICAgKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIGNiICYmIGNiKCk7XG4gICAgICAgICAgICBpZiAoICF0aGlzLl9fbG9ja3MuYWxsICkge1xuICAgICAgICAgICAgICAgIGxldCBzdGFibGUgICA9IHRoaXMuX3N0YWJsZTtcbiAgICAgICAgICAgICAgICB0aGlzLl9zdGFibGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICFzdGFibGUgJiYgdGhpcy5lbWl0KCdzdGFibGUnLCB0aGlzLnN0YXRlLCB0aGlzLmRhdGEpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3N0YWJpbGl6ZXIgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgICAgICB0aGlzLndhaXQoKTtcbiAgICAgICAgdGhpcy5yZWxlYXNlKGNiKTtcbiAgICAgICAgXG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIENhbGwgdGhlIGFwcGx5IGZuIHVzaW5nIHRoZSBjdXJyZW50IGFjY3VtdWxhdGVkIHN0YXRlIHVwZGF0ZSB0aGVuLCBwdXNoIHRoZVxuICAgICAqIHJlc3VsdGluZyBkYXRhIGlmIHN0YWJsZVxuICAgICAqIEBwYXJhbSBmb3JjZVxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIHB1c2hTdGF0ZSggZm9yY2UgKSB7XG4gICAgICAgIFxuICAgICAgICBpZiAoICFmb3JjZSAmJiAhdGhpcy5fY2hhbmdlc1NXICYmIHRoaXMuZGF0YSApXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIFxuICAgICAgICB2YXIgbmV4dFN0YXRlID0gdGhpcy5fbmV4dFN0YXRlIHx8IHsgLi4udGhpcy5zdGF0ZSwgLi4uKCB0aGlzLl9jaGFuZ2VzU1cgfHwge30gKSB9LFxuICAgICAgICAgICAgbmV4dERhdGEgID0gdGhpcy5hcHBseSh0aGlzLmRhdGEsIG5leHRTdGF0ZSwgdGhpcy5fY2hhbmdlc1NXKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX3N0YWJpbGl6ZXIgPSBudWxsO1xuICAgICAgICB0aGlzLnN0YXRlICAgICAgID0gbmV4dFN0YXRlO1xuICAgICAgICB0aGlzLl9jaGFuZ2VzU1cgID0gbnVsbDtcbiAgICAgICAgXG4gICAgICAgIGlmICggIWZvcmNlICYmXG4gICAgICAgICAgICAgKFxuICAgICAgICAgICAgICAgICAhdGhpcy5oYXNEYXRhQ2hhbmdlKG5leHREYXRhKVxuICAgICAgICAgICAgIClcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBpZiAoICF0aGlzLl9fbG9ja3MuYWxsICkge1xuICAgICAgICAgICAgICAgIGxldCBzdGFibGUgICA9IHRoaXMuX3N0YWJsZTtcbiAgICAgICAgICAgICAgICB0aGlzLl9zdGFibGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICFzdGFibGUgJiYgdGhpcy5lbWl0KCdzdGFibGUnLCB0aGlzLnN0YXRlLCB0aGlzLmRhdGEpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3N0YWJpbGl6ZXIgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0aGlzLmRhdGEgPSBuZXh0RGF0YTtcbiAgICAgICAgdGhpcy53YWl0KCk7XG4gICAgICAgIHRoaXMucmVsZWFzZSgpO1xuICAgICAgICBcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogQWRkICdwU3RhdGUnIHRvIHRoZSBjdXJyZW50IGFjY3VtdWxhdGVkIHN0YXRlIHVwZGF0ZXNcbiAgICAgKiAmIHdhaXQgc291cmNlIHN0b3JlcyBzdGFiaWxpemF0aW9uIGJlZm9yZSBwdXNoaW5nIHRoZXNlIHN0YXRlIHVwZGF0ZXNcbiAgICAgKiBAcGFyYW0gcFN0YXRlXG4gICAgICogQHBhcmFtIGNiXG4gICAgICovXG4gICAgc2V0U3RhdGUoIHBTdGF0ZSwgY2IsIHN5bmMgKSB7XG4gICAgICAgIHZhciBpICAgICAgID0gMCwgY2hhbmdlLFxuICAgICAgICAgICAgY2hhbmdlcyA9IHRoaXMuX2NoYW5nZXNTVyA9IHRoaXMuX2NoYW5nZXNTVyB8fCB7fTtcbiAgICAgICAgZm9yICggdmFyIGsgaW4gcFN0YXRlIClcbiAgICAgICAgICAgIGlmICggIXRoaXMuc3RhdGVcbiAgICAgICAgICAgICAgICAgfHwgY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eShrKS8vIHRvZG9cbiAgICAgICAgICAgICAgICAgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgcFN0YXRlWyBrIF0gIT09IGNoYW5nZXNbIGsgXVxuICAgICAgICAgICAgICAgICApIHx8IHBTdGF0ZS5oYXNPd25Qcm9wZXJ0eShrKVxuICAgICAgICAgICAgICAgICAmJiAoXG4gICAgICAgICAgICAgICAgIHBTdGF0ZVsgayBdICE9PSB0aGlzLnN0YXRlWyBrIF1cbiAgICAgICAgICAgICAgICAgfHxcbiAgICAgICAgICAgICAgICAgKCB0aGlzLnN0YXRlWyBrIF0gJiYgcFN0YXRlWyBrIF0gJiYgKCBwU3RhdGVbIGsgXS5fcmV2ICE9IHRoaXMuX3JldnNbIGsgXSApICkvLyByZXYvaGFzaCB1cGRhdGVcbiAgICAgICAgICAgICAgICAgKSApIHtcbiAgICAgICAgICAgICAgICBjaGFuZ2UgICAgICAgICAgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuX3JldnNbIGsgXSA9IHBTdGF0ZVsgayBdICYmIHBTdGF0ZVsgayBdLl9yZXYgfHwgdHJ1ZTtcbiAgICAgICAgICAgICAgICBjaGFuZ2VzWyBrIF0gICAgPSBwU3RhdGVbIGsgXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRoaXMuX25leHRTdGF0ZSA9IHsgLi4udGhpcy5zdGF0ZSwgLi4uY2hhbmdlcyB9O1xuICAgICAgICBpZiAoICF0aGlzLnNob3VsZEFwcGx5KHRoaXMuX25leHRTdGF0ZSkgKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmICggc3luYyApIHtcbiAgICAgICAgICAgIHRoaXMucHVzaFN0YXRlKCk7XG4gICAgICAgICAgICBjYiAmJiBjYigpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKCBjaGFuZ2UgKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGFiaWxpemUoY2IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBjYiAmJiBjYigpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBVcGRhdGUgdGhlIGN1cnJlbnQgc3RhdGUgJiBwdXNoIGl0XG4gICAgICogQHBhcmFtIHBTdGF0ZVxuICAgICAqIEBwYXJhbSBjYlxuICAgICAqL1xuICAgIHNldFN0YXRlU3luYyggcFN0YXRlICkge1xuICAgICAgICB2YXIgaSAgICAgICA9IDAsIGNoYW5nZSxcbiAgICAgICAgICAgIGNoYW5nZXMgPSB0aGlzLl9jaGFuZ2VzU1cgPSB0aGlzLl9jaGFuZ2VzU1cgfHwge307XG4gICAgICAgIGZvciAoIHZhciBrIGluIHBTdGF0ZSApXG4gICAgICAgICAgICBpZiAoICF0aGlzLnN0YXRlIHx8IHBTdGF0ZS5oYXNPd25Qcm9wZXJ0eShrKVxuICAgICAgICAgICAgICAgICAmJiAoXG4gICAgICAgICAgICAgICAgIHBTdGF0ZVsgayBdICE9IHRoaXMuc3RhdGVbIGsgXVxuICAgICAgICAgICAgICAgICB8fFxuICAgICAgICAgICAgICAgICAoIHRoaXMuc3RhdGVbIGsgXSAmJiBwU3RhdGVbIGsgXSAmJiAoIHBTdGF0ZVsgayBdLl9yZXYgIT0gdGhpcy5fcmV2c1sgayBdICkgKS8vIHJldi9oYXNoIHVwZGF0ZVxuICAgICAgICAgICAgICAgICApICkge1xuICAgICAgICAgICAgICAgIGNoYW5nZSAgICAgICAgICA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5fcmV2c1sgayBdID0gcFN0YXRlWyBrIF0gJiYgcFN0YXRlWyBrIF0uX3JldiB8fCB0cnVlO1xuICAgICAgICAgICAgICAgIGNoYW5nZXNbIGsgXSAgICA9IHBTdGF0ZVsgayBdO1xuICAgICAgICAgICAgfVxuICAgICAgICB0aGlzLnNob3VsZEFwcGx5KHsgLi4uKCB0aGlzLnN0YXRlIHx8IHt9ICksIC4uLmNoYW5nZXMgfSkgJiYgdGhpcy5wdXNoU3RhdGUoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogZ2V0IGEgc3RvcmUta2V5IHBhaXIgZm9yIFN0b3JlOjptYXBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgICAqIEByZXR1cm5zIHt7c3RvcmU6IFN0b3JlLCBuYW1lOiAqfX1cbiAgICAgKi9cbiAgICBhcyggbmFtZSApIHtcbiAgICAgICAgcmV0dXJuIHsgc3RvcmU6IHRoaXMsIG5hbWUgfTtcbiAgICB9XG4gICAgXG4gICAgb24oIGxpc3RzICkge1xuICAgICAgICBpZiAoICFpcy5zdHJpbmcobGlzdHMpICYmIGxpc3RzIClcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGxpc3RzKS5mb3JFYWNoKGsgPT4gc3VwZXIub24oaywgbGlzdHNbIGsgXSkpO1xuICAgICAgICBlbHNlIHN1cGVyLm9uKC4uLmFyZ3VtZW50cyk7XG4gICAgfVxuICAgIFxuICAgIHJlbW92ZUxpc3RlbmVyKCBsaXN0cyApIHtcbiAgICAgICAgaWYgKCAhaXMuc3RyaW5nKGxpc3RzKSAmJiBsaXN0cyApXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhsaXN0cykuZm9yRWFjaChrID0+IHN1cGVyLnJlbW92ZUxpc3RlbmVyKGssIGxpc3RzWyBrIF0pKTtcbiAgICAgICAgZWxzZSBzdXBlci5yZW1vdmVMaXN0ZW5lciguLi5hcmd1bWVudHMpO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBpcyBjb21wbGV0ZSAoYWxsIHJlcXVpZXJlZCBrZXlzIGFyZSBoZXJlKVxuICAgICAqIEByZXR1cm5zIGJvb2xcbiAgICAgKi9cbiAgICBpc0NvbXBsZXRlKCBzdGF0ZSA9IHRoaXMuc3RhdGUgKSB7XG4gICAgICAgIHZhciBfc3RhdGljID0gdGhpcy5jb25zdHJ1Y3RvcjtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICF0aGlzLl9yZXF1aXJlXG4gICAgICAgICAgICB8fCAhdGhpcy5fcmVxdWlyZS5sZW5ndGhcbiAgICAgICAgICAgIHx8IHN0YXRlICYmIHRoaXMuX3JlcXVpcmUucmVkdWNlKFxuICAgICAgICAgICAgICAgICggciwga2V5ICkgPT4gKCByICYmIHN0YXRlWyBrZXkgXSApLFxuICAgICAgICAgICAgICAgIHRydWVcbiAgICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogaXMgc3RhYmxlXG4gICAgICogQHJldHVybnMgYm9vbFxuICAgICAqL1xuICAgIGlzU3RhYmxlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc3RhYmxlO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBTZXJpYWxpemUgc3RhdGUgJiBkYXRhIHdpdGggc291cmNlcyByZWZzXG4gICAgICogQHJldHVybnMgYm9vbFxuICAgICAqL1xuICAgIHNlcmlhbGl6ZSggY2ZnID0ge30sIG91dHB1dCA9IHt9ICkge1xuICAgICAgICBsZXQgcmVmcyA9XG4gICAgICAgICAgICAgICAgIWNmZy5ub3JlZnMgJiYgaXMuYXJyYXkodGhpcy5fdXNlKSAmJiB0aGlzLl91c2UucmVkdWNlKFxuICAgICAgICAgICAgICAgICggbWFwLCBrZXkgKSA9PiB7Ly90b2RvXG4gICAgICAgICAgICAgICAgICAgIGxldCBuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpYXMsIHBhdGgsX2tleSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIGtleS5zdG9yZSAmJiBrZXkubmFtZSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWFzID0gbmFtZSA9IGtleS5uYW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmUgPSBrZXkuc3RvcmU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoIGlzLmZuKGtleSkgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lID0gYWxpYXMgPSBrZXkubmFtZSB8fCBrZXkuZGVmYXVsdE5hbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9yZSA9IGtleTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9rZXkgID0ga2V5Lm1hdGNoKC8oW1xcd19dKykoKD86XFwuW1xcd19dKykqKSg/OlxcOihbXFx3X10rKSk/Lyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lICA9IF9rZXlbIDEgXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGggID0gX2tleVsgMiBdICYmIF9rZXlbIDIgXS5zdWJzdHIoMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9yZSA9IHRoaXMuc2NvcGVPYmouc3RvcmVzWyBfa2V5WyAxIF0gXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWFzID0gX2tleVsgMyBdIHx8IHBhdGggJiYgcGF0aC5tYXRjaCgvKFteXFwuXSopJC8pWyAwIF0gfHwgX2tleVsgMSBdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICggc3RvcmUgJiYgIXN0b3JlLnNjb3BlT2JqLl8uaXNMb2NhbElkIClcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcFsgYWxpYXMgXSA9IHN0b3JlLnNjb3BlT2JqLl9pZCArICcvJyArIG5hbWU7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtYXA7XG4gICAgICAgICAgICAgICAgfSwge31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHx8IHt9O1xuICAgICAgICBcbiAgICAgICAga2V5V2Fsa25TZXQoXG4gICAgICAgICAgICBvdXRwdXQsXG4gICAgICAgICAgICAoIHRoaXMuc2NvcGVPYmouX2lkICsgJy8nICsgdGhpcy5uYW1lICksXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGU6IHRoaXMuc3RhdGUgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgY2ZnLm5vcmVmc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB7IC4uLnRoaXMuc3RhdGUgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBPYmplY3Qua2V5cyh0aGlzLnN0YXRlKS5yZWR1Y2UoKCBoLCBrICkgPT4gKCAhcmVmc1sgayBdICYmICggaFsgayBdID0gdGhpcy5zdGF0ZVsgayBdICksIGggKSwge30pXG4gICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgZGF0YSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhLl9fcHJvdG9fXyA9PT0gb2JqUHJvdG8gP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICggaXMuYm9vbCh0aGlzLmRhdGEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHx8IGlzLm51bWJlcih0aGlzLmRhdGEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHx8IGlzLnN0cmluZyh0aGlzLmRhdGEpICkgJiYgdGhpcy5kYXRhXG4gICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgfHwgdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLFxuICAgICAgICAgICAgICAgIHJlZnNcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogcmVzdG9yZSBzdGF0ZSAmIGRhdGFcbiAgICAgKiBAcmV0dXJucyBib29sXG4gICAgICovXG4gICAgcmVzdG9yZSggc25hcHNob3QsIGltbWVkaWF0ZSApIHtcbiAgICAgICAgc25hcHNob3QgPSBzbmFwc2hvdFxuICAgICAgICAgICAgICAgICAgICYmIGtleVdhbGtuR2V0KHNuYXBzaG90LCB0aGlzLnNjb3BlT2JqLl9pZCArICcvJyArIHRoaXMubmFtZSlcbiAgICAgICAgICAgICAgICAgICB8fCB0aGlzLiRzY29wZS50YWtlU25hcHNob3RCeUtleSh0aGlzLnNjb3BlT2JqLl9pZCArICcvJyArIHRoaXMubmFtZSk7XG4gICAgICAgIFxuICAgICAgICBpZiAoICFzbmFwc2hvdCApXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIFxuICAgICAgICBpZiAoIHNuYXBzaG90ICkge1xuICAgICAgICAgICAgaWYgKCAhdGhpcy5pc1N0YWJsZSgpICYmICFpbW1lZGlhdGUgKVxuICAgICAgICAgICAgICAgIHRoaXMudGhlbigoKSA9PiByZXN0b3JlKHNuYXBzaG90KSlcbiAgICAgICAgICAgIGxldCBzbmFwO1xuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IHsgLi4uc25hcHNob3Quc3RhdGUgfTtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHNuYXBzaG90LnJlZnMpLmZvckVhY2goXG4gICAgICAgICAgICAgICAgKCBrZXkgKSA9PiB7Ly90b2RvXG4gICAgICAgICAgICAgICAgICAgIGlmICggc25hcCA9IHRoaXMuJHNjb3BlLmdldFNuYXBzaG90QnlLZXkoc25hcHNob3QucmVmc1sga2V5IF0pIClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGVbIGtleSBdID0gc25hcC5kYXRhO1xuICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ25vdCBmb3VuZCA6ICcsIGtleSwgc25hcC5yZWZzWyBrZXkgXSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMuZGF0YSA9IHNuYXBzaG90LmRhdGE7XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBVbiBiaW5kIHRoaXMgc3RvcmUgb2ZmIHRoZSBnaXZlbiBjb21wb25lbnQta2V5XG4gICAgICogQHBhcmFtIG9ialxuICAgICAqIEBwYXJhbSBrZXlcbiAgICAgKiBAcmV0dXJucyB7QXJyYXkuPCo+fVxuICAgICAqL1xuICAgIHVuQmluZCggb2JqLCBrZXksIHBhdGggKSB7XG4gICAgICAgIHZhciBmb2xsb3dlcnMgPSB0aGlzLl9mb2xsb3dlcnMsXG4gICAgICAgICAgICBpICAgICAgICAgPSBmb2xsb3dlcnMgJiYgZm9sbG93ZXJzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBmb2xsb3dlcnMgJiYgaS0tIClcbiAgICAgICAgICAgIGlmICggZm9sbG93ZXJzWyBpIF1bIDAgXSA9PT0gb2JqICYmIGZvbGxvd2Vyc1sgaSBdWyAxIF0gPT09IGtleSAmJiBmb2xsb3dlcnNbIGkgXVsgMiBdID09PSBwYXRoIClcbiAgICAgICAgICAgICAgICByZXR1cm4gZm9sbG93ZXJzLnNwbGljZShpLCAxKTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogQmluZCB0aGlzIHN0b3JlIGNoYW5nZXMgdG8gdGhlIGdpdmVuIGNvbXBvbmVudC1rZXlcbiAgICAgKiBAcGFyYW0gb2JqIHtSZWFjdC5Db21wb25lbnR8U3RvcmV8ZnVuY3Rpb24pXG4gICAgICogQHBhcmFtIGtleSB7c3RyaW5nfSBvcHRpb25hbCBrZXkgd2hlcmUgdG8gbWFwIHRoZSBwdWJsaWMgc3RhdGVcbiAgICAgKi9cbiAgICBiaW5kKCBvYmosIGtleSwgc2V0SW5pdGlhbCA9IHRydWUsIHBhdGggKSB7XG4gICAgICAgIHRoaXMuX2ZvbGxvd2Vycy5wdXNoKFsgb2JqLCBrZXksIHBhdGggXSk7XG4gICAgICAgIGlmICggc2V0SW5pdGlhbCAmJiB0aGlzLmRhdGEgJiYgdGhpcy5fc3RhYmxlICkge1xuICAgICAgICAgICAgbGV0IGRhdGEgPSBwYXRoID8gdGhpcy5yZXRyaWV2ZShwYXRoKSA6IHRoaXMuZGF0YTtcbiAgICAgICAgICAgIGlmICggdHlwZW9mIG9iaiAhPSBcImZ1bmN0aW9uXCIgKSB7XG4gICAgICAgICAgICAgICAgaWYgKCBrZXkgKSBvYmouc2V0U3RhdGUoeyBbIGtleSBdOiBkYXRhIH0pO1xuICAgICAgICAgICAgICAgIGVsc2Ugb2JqLnNldFN0YXRlKGRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgb2JqKGRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIG9uY2UoJ3N0YWJsZScsIGNiKVxuICAgICAqIEBwYXJhbSBvYmoge1JlYWN0LkNvbXBvbmVudHxTdG9yZXxmdW5jdGlvbilcbiAgICAgKiBAcGFyYW0ga2V5IHtzdHJpbmd9IG9wdGlvbmFsIGtleSB3aGVyZSB0byBtYXAgdGhlIHB1YmxpYyBzdGF0ZVxuICAgICAqL1xuICAgIHRoZW4oIGNiICkge1xuICAgICAgICBpZiAoIHRoaXMuX3N0YWJsZSApXG4gICAgICAgICAgICByZXR1cm4gY2IodGhpcy5kYXRhKTtcbiAgICAgICAgdGhpcy5vbmNlKCdzdGFibGUnLCBlID0+IGNiKHRoaXMuZGF0YSkpO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBBZGQgYSBsb2NrIHNvIHRoZSBzdG9yZSB3aWxsIG5vdCBwcm9wYWcgaXQgZGF0YSB1bnRpbGwgcmVsZWFzZSgpIGlzIGNhbGxcbiAgICAgKiBAcGFyYW0gcHJldmlvdXMge1N0b3JlfG51bWJlcnxBcnJheX0gQG9wdGlvbmFsIHdmIHRvIHdhaXQsIHJlbGVhc2VzIHRvIHdhaXQgb3JcbiAgICAgKiAgICAgYXJyYXkgb2Ygc3R1ZmYgdG8gd2FpdFxuICAgICAqIEByZXR1cm5zIHt0aGlzfVxuICAgICAqL1xuICAgIHdhaXQoIHByZXZpb3VzICkge1xuICAgICAgICBpZiAoIHR5cGVvZiBwcmV2aW91cyA9PSBcIm51bWJlclwiIClcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9fbG9ja3MuYWxsICs9IHByZXZpb3VzO1xuICAgICAgICBpZiAoIGlzLmFycmF5KHByZXZpb3VzKSApXG4gICAgICAgICAgICByZXR1cm4gcHJldmlvdXMubWFwKHRoaXMud2FpdC5iaW5kKHRoaXMpKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX3N0YWJsZSAmJiB0aGlzLmVtaXQoJ3Vuc3RhYmxlJywgdGhpcy5zdGF0ZSwgdGhpcy5kYXRhKTtcbiAgICAgICAgdGhpcy5fc3RhYmxlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX19sb2Nrcy5hbGwrKztcbiAgICAgICAgXG4gICAgICAgIGxldCByZWFzb24gPSBpcy5zdHJpbmcocHJldmlvdXMpID8gcHJldmlvdXMgOiBudWxsO1xuICAgICAgICBpZiAoIHJlYXNvbiApIHtcbiAgICAgICAgICAgIHRoaXMuX19sb2Nrc1sgcmVhc29uIF0gPSB0aGlzLl9fbG9ja3NbIHJlYXNvbiBdIHx8IDA7XG4gICAgICAgICAgICB0aGlzLl9fbG9ja3NbIHJlYXNvbiBdKys7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCBwcmV2aW91cyAmJiBpcy5mbihwcmV2aW91cy50aGVuKSApIHtcbiAgICAgICAgICAgIHByZXZpb3VzLnRoZW4odGhpcy5yZWxlYXNlLmJpbmQodGhpcywgbnVsbCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBEZWNyZWFzZSBsb2NrcyBmb3IgdGhpcyBzdG9yZSwgaWYgaXQgcmVhY2ggMCAsXG4gICAgICogaXQgd2lsbCBiZSBwcm9wYWdhdGVkIHRvIHRoZSBmb2xsb3dlcnMsXG4gICAgICogdGhlbiwgYWxsIHN0dWZmIHBhc3NlZCB0byBcInRoZW5cIiBjYWxsIGJhY2sgd2lsbCBiZSBleGVjIC8gcmVsZWFzZWRcbiAgICAgKiBAcGFyYW0gZGVzeW5jXG4gICAgICogQHJldHVybnMgeyp9XG4gICAgICovXG4gICAgcmVsZWFzZSggcmVhc29uLCBjYiApIHtcbiAgICAgICAgdmFyIF9zdGF0aWMgPSB0aGlzLmNvbnN0cnVjdG9yLCBtZSA9IHRoaXM7XG4gICAgICAgIGxldCBpICAgICAgID0gMCwgd2FzU3RhYmxlID0gdGhpcy5fc3RhYmxlO1xuICAgICAgICBcbiAgICAgICAgaWYgKCBpcy5mbihyZWFzb24pICkge1xuICAgICAgICAgICAgY2IgICAgID0gcmVhc29uO1xuICAgICAgICAgICAgcmVhc29uID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKCByZWFzb24gKSB7XG4gICAgICAgICAgICBpZiAoIHRoaXMuX19sb2Nrc1sgcmVhc29uIF0gPT0gMCApXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlJlbGVhc2UgbW9yZSB0aGFuIGxvY2tpbmcgIVwiLCByZWFzb24pO1xuICAgICAgICAgICAgdGhpcy5fX2xvY2tzWyByZWFzb24gXSA9IHRoaXMuX19sb2Nrc1sgcmVhc29uIF0gfHwgMDtcbiAgICAgICAgICAgIHRoaXMuX19sb2Nrc1sgcmVhc29uIF0tLTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKCAhcmVhc29uICYmIHRoaXMuX19sb2Nrcy5hbGwgPT0gMCApXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiUmVsZWFzZSBtb3JlIHRoYW4gbG9ja2luZyAhXCIpO1xuICAgICAgICBcbiAgICAgICAgaWYgKCAhLS10aGlzLl9fbG9ja3MuYWxsICYmIHRoaXMuaXNDb21wbGV0ZSgpICkge1xuICAgICAgICAgICAgbGV0IHByb3BhZyAgID0gdGhpcy5zaG91bGRQcm9wYWcodGhpcy5kYXRhKTtcbiAgICAgICAgICAgIHRoaXMuX3N0YWJsZSA9IHRydWU7XG4gICAgICAgICAgICBwcm9wYWcgJiYgdGhpcy5fcmV2Kys7Ly9cbiAgICAgICAgICAgIGlmICggcHJvcGFnICYmIHRoaXMuX2ZvbGxvd2Vycy5sZW5ndGggKVxuICAgICAgICAgICAgICAgIHRoaXMuX2ZvbGxvd2Vycy5mb3JFYWNoKGZ1bmN0aW9uIHByb3BhZyggZm9sbG93ZXIgKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0gZm9sbG93ZXJbIDIgXSA/IG1lLnJldHJpZXZlKGZvbGxvd2VyWyAyIF0pIDogbWUuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgLy9pZiAoICFkYXRhICkgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYgKCB0eXBlb2YgZm9sbG93ZXJbIDAgXSA9PSBcImZ1bmN0aW9uXCIgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb2xsb3dlclsgMCBdKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9jYiAmJiBpKys7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb2xsb3dlclsgMCBdLnNldFN0YXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICggZm9sbG93ZXJbIDEgXSApID8geyBbIGZvbGxvd2VyWyAxIF0gXTogZGF0YSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBkYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9jYiAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgKCkgPT4gKCEoLS1pKSAmJiBjYigpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vKVxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy9lbHNlXG4gICAgICAgICAgICAhd2FzU3RhYmxlICYmIHRoaXMuZW1pdCgnc3RhYmxlJywgdGhpcy5kYXRhKTtcbiAgICAgICAgICAgIHByb3BhZyAmJiB0aGlzLmVtaXQoJ3VwZGF0ZScsIHRoaXMuZGF0YSk7XG4gICAgICAgICAgICBjYiAmJiBjYigpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBjYiAmJiB0aGlzLnRoZW4oY2IpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgXG4gICAgcHJvcGFnKCBkYXRhICkge1xuICAgICAgICB0aGlzLmVtaXQoJ3VwZGF0ZScsIGRhdGEpO1xuICAgIH1cbiAgICBcbiAgICByZXRhaW4oIHJlYXNvbiApIHtcbiAgICAgICAgdGhpcy5fX3JldGFpbnMuYWxsKys7XG4gICAgICAgIGlmICggcmVhc29uICkge1xuICAgICAgICAgICAgdGhpcy5fX3JldGFpbnNbIHJlYXNvbiBdID0gdGhpcy5fX3JldGFpbnNbIHJlYXNvbiBdIHx8IDA7XG4gICAgICAgICAgICB0aGlzLl9fcmV0YWluc1sgcmVhc29uIF0rKztcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBkaXNwb3NlKCByZWFzb24gKSB7XG4gICAgICAgIC8vY29uc29sZS53YXJuKFwiZGlzcG9zZVwiLCByZWFzb24sIHRoaXMuX19yZXRhaW5zKTtcbiAgICAgICAgaWYgKCByZWFzb24gKSB7XG4gICAgICAgICAgICBpZiAoICF0aGlzLl9fcmV0YWluc1sgcmVhc29uIF0gKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkRpc3Bvc2UgbW9yZSB0aGFuIHJldGFpbmluZyA6IFwiICsgcmVhc29uKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5fX3JldGFpbnNbIHJlYXNvbiBdLS07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCB0aGlzLl9fcmV0YWlucy5hbGwgPT0gMCApXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJEaXNwb3NlIG1vcmUgdGhhbiByZXRhaW5pbmcgIVwiKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX19yZXRhaW5zLmFsbC0tO1xuICAgICAgICBcbiAgICAgICAgaWYgKCAhdGhpcy5fX3JldGFpbnMuYWxsICkge1xuICAgICAgICAgICAgaWYgKCB0aGlzLl9wZXJzaXN0ZW5jZVRtICkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2Rlc3Ryb3lUTSAmJiBjbGVhclRpbWVvdXQodGhpcy5fZGVzdHJveVRNKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9kZXN0cm95VE0gPSBzZXRUaW1lb3V0KFxuICAgICAgICAgICAgICAgICAgICBlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2Rlc3Ryb3lUTSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL3RoaXMudGhlbihzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICF0aGlzLl9fcmV0YWlucy5hbGwgJiYgIXRoaXMuZGVhZCAmJiB0aGlzLmRlc3Ryb3koKVxuICAgICAgICAgICAgICAgICAgICAgICAgLy99KTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcGVyc2lzdGVuY2VUbVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvL3RoaXMudGhlbihzID0+XG4gICAgICAgICAgICAgICAgKCAhdGhpcy5fX3JldGFpbnMuYWxsICYmICF0aGlzLmRlYWQgJiYgdGhpcy5kZXN0cm95KCkgKVxuICAgICAgICAgICAgICAgIC8vKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBkZXN0cm95KCkge1xuICAgICAgICAvLyAgY29uc29sZS5sb2coXCJkZXN0cm95XCIsIHRoaXMuX3VpZCk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmVtaXQoJ2Rlc3Ryb3knLCB0aGlzKTtcbiAgICAgICAgaWYgKCB0aGlzLl9zdGFiaWxpemVyIClcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9zdGFiaWxpemVyKTtcbiAgICAgICAgXG4gICAgICAgIGlmICggdGhpcy5fZm9sbG93ZXJzLmxlbmd0aCApXG4gICAgICAgICAgICB0aGlzLl9mb2xsb3dlcnMuZm9yRWFjaChcbiAgICAgICAgICAgICAgICAoIGZvbGxvd2VyICkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIHR5cGVvZiBmb2xsb3dlclsgMCBdICE9PSBcImZ1bmN0aW9uXCIgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIGZvbGxvd2VyWyAwIF0uc3RvcmVzIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgZm9sbG93ZXJbIDAgXS5zdG9yZXNbIGZvbGxvd2VyWyAxIF0gXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgIHRoaXMuX2ZvbGxvd2Vycy5sZW5ndGggPSAwO1xuICAgICAgICB0aGlzLmNvbnN0cnVjdG9yLl9yZXYgID0gdGhpcy5yZXY7XG4gICAgICAgIHRoaXMuZGVhZCAgICAgICAgICAgICAgPSB0cnVlO1xuICAgICAgICB0aGlzLl9yZXZzICAgICAgICAgICAgID0gdGhpcy5kYXRhID0gdGhpcy5zdGF0ZSA9IHRoaXMuc2NvcGUgPSBudWxsO1xuICAgICAgICB0aGlzLnJlbW92ZUFsbExpc3RlbmVycygpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBnZXQgYSBzdGF0aWMgYWxpYXNlZCByZWZlcmVuY2Ugb2YgYSBzdG9yZVxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqIEByZXR1cm5zIHt7c3RvcmU6IFN0b3JlLCBuYW1lOiAqfX1cbiAqL1xuU3RvcmUuYXMgPSBmdW5jdGlvbiAoIG5hbWUgKSB7XG4gICAgcmV0dXJuIHsgc3RvcmU6IHRoaXMsIG5hbWUgfTtcbn1cblxuLyoqXG4gKiBNYXAgYWxsIG5hbWVkIHN0b3JlcyBpbiB7a2V5c30gdG8gdGhlIHtvYmplY3R9J3Mgc3RhdGVcbiAqIEhvb2sgY29tcG9uZW50V2lsbFVubW91bnQgKGZvciByZWFjdCBjb21wKSBvciBkZXN0cm95IHRvIHVuQmluZCB0aGVtIGF1dG9tYXRpY2FsbHlcbiAqIEBzdGF0aWNcbiAqIEBwYXJhbSBvYmplY3Qge09iamVjdH0gdGFyZ2V0IHN0YXRlIGF3YXJlIG9iamVjdCAoUmVhY3QuQ29tcG9uZW50fFN0b3JlfC4uLilcbiAqIEBwYXJhbSBrZXlzIHtBcnJheX0gRXggOiBbXCJzZXNzaW9uXCIsIFwib3RoZXJTdGF0aWNOYW1lZFN0b3JlOmtleVwiLFxuICogICAgIHN0b3JlLmFzKCdhbm90aGVyS2V5JyldXG4gKi9cblN0b3JlLm1hcCA9IGZ1bmN0aW9uICggY1N0b3JlLCBrZXlzLCBzY29wZSwgb3JpZ2luLCBzZXRJbml0aWFsID0gZmFsc2UgKSB7XG4gICAgdmFyIHRhcmdldFJldnMgICAgID0gY1N0b3JlLl9yZXZzIHx8IHt9O1xuICAgIHZhciB0YXJnZXRTY29wZSAgICA9IGNTdG9yZS5zdG9yZXMgfHwgKCBjU3RvcmUuc3RvcmVzID0ge30gKTtcbiAgICB2YXIgaW5pdGlhbE91dHB1dHMgPSB7fTtcbiAgICBrZXlzICAgICAgICAgICAgICAgPSBpcy5hcnJheShrZXlzKSA/IFsgLi4ua2V5cyBdIDogWyBrZXlzIF07XG4gICAgXG4gICAgXG4gICAgc2NvcGUgPSBzY29wZSB8fCBTdG9yZS5zdGF0aWNTY29wZTtcbiAgICBcbiAgICBrZXlzID0ga2V5cy5maWx0ZXIoXG4gICAgICAgIC8vIEB0b2RvIDogdXNlIHF1ZXJ5IHJlZnNcbiAgICAgICAgLy8gKHN0b3JlKShcXC5zdG9yZSkqKFxcWyhcXCp8KHByb3BzKVxcdyspKylcXF0pPyhcXDphbGlhcylcbiAgICAgICAgKCBrZXkgKSA9PiB7XG4gICAgICAgICAgICBpZiAoICFrZXkgKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIk5vdCBhIG1hcHBhYmxlIHN0b3JlIGl0ZW0gJ1wiICsga2V5ICsgXCInIGluIFwiICsgb3JpZ2luICsgJyAhIScpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBuYW1lLFxuICAgICAgICAgICAgICAgIGFsaWFzLFxuICAgICAgICAgICAgICAgIHBhdGgsXG4gICAgICAgICAgICAgICAgc3RvcmUsIF9rZXk7XG4gICAgICAgICAgICBpZiAoIGtleS5zdG9yZSAmJiBrZXkubmFtZSApIHtcbiAgICAgICAgICAgICAgICBhbGlhcyA9IG5hbWUgPSBrZXkubmFtZTtcbiAgICAgICAgICAgICAgICBzdG9yZSA9IGtleS5zdG9yZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKCBpcy5mbihrZXkpICkge1xuICAgICAgICAgICAgICAgIG5hbWUgPSBhbGlhcyA9IGtleS5uYW1lIHx8IGtleS5kZWZhdWx0TmFtZTtcbiAgICAgICAgICAgICAgICBzdG9yZSA9IGtleTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIF9rZXkgID0ga2V5Lm1hdGNoKC8oW1xcd19dKykoKD86XFwuW1xcd19dKykqKSg/OlxcOihbXFx3X10rKSk/Lyk7XG4gICAgICAgICAgICAgICAgbmFtZSAgPSBfa2V5WyAxIF07XG4gICAgICAgICAgICAgICAgcGF0aCAgPSBfa2V5WyAyIF0gJiYgX2tleVsgMiBdLnN1YnN0cigxKTtcbiAgICAgICAgICAgICAgICBzdG9yZSA9IHNjb3BlLnN0b3Jlc1sgX2tleVsgMSBdIF07XG4gICAgICAgICAgICAgICAgYWxpYXMgPSBfa2V5WyAzIF0gfHwgcGF0aCAmJiBwYXRoLm1hdGNoKC8oW15cXC5dKikkLylbIDAgXSB8fCBfa2V5WyAxIF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoICFzdG9yZSApIHtcbiAgICAgICAgICAgICAgICBsZXQgaT1bXTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBvIGluIHNjb3BlLnN0b3JlcylcbiAgICAgICAgICAgICAgICAgICAgaS5wdXNoKG8pXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIk5vdCBhIG1hcHBhYmxlIHN0b3JlIGl0ZW0gJ1wiICsgbmFtZSArIFwiL1wiICsgYWxpYXMgKyBcIicgaW4gXCIgKyAoIGNTdG9yZS5uYW1lIHx8IGNTdG9yZSApICsgJyAhIScsIHN0b3JlLCBfa2V5LCBzY29wZS5zdG9yZXMsIGkpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICggaXMucnNTY29wZShzdG9yZS5wcm90b3R5cGUpICkgc2NvcGUuX21vdW50KG5hbWUpO1xuICAgICAgICAgICAgaWYgKCBpcy5yc1Njb3BlKHN0b3JlKSApIHtcbiAgICAgICAgICAgICAgICBzdG9yZSA9IHNjb3BlLl9tb3VudChrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoIHRhcmdldFJldnNbIG5hbWUgXSApIHJldHVybiBmYWxzZTsvLyBpZ25vcmUgZGJsIHVzZXMgZm9yIG5vd1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmICggaXMuZm4oc3RvcmUpICkge1xuICAgICAgICAgICAgICAgIHNjb3BlLl9tb3VudChuYW1lKVxuICAgICAgICAgICAgICAgIHNjb3BlLnN0b3Jlc1sgbmFtZSBdLmJpbmQoY1N0b3JlLCBhbGlhcywgc2V0SW5pdGlhbCwgcGF0aCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBzdG9yZS5iaW5kKGNTdG9yZSwgYWxpYXMsIHNldEluaXRpYWwsIHBhdGgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBnaXZlIGluaXRpYWwgc3RvcmUgd2VpZ2h0IGJhc2luZyBzb3VyY2VzXG4gICAgICAgICAgICBzY29wZS5zdG9yZXNbIG5hbWUgXS5fc291cmNlcyAmJiBjU3RvcmUuX3NvdXJjZXMucHVzaCguLi5zY29wZS5zdG9yZXNbIG5hbWUgXS5fc291cmNlcyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRhcmdldFJldnNbIGFsaWFzIF0gPSB0YXJnZXRSZXZzWyBhbGlhcyBdIHx8IHRydWU7XG4gICAgICAgICAgICAhdGFyZ2V0U2NvcGVbIG5hbWUgXSAmJiAoIHRhcmdldFNjb3BlWyBuYW1lIF0gPSBzY29wZS5zdG9yZXNbIG5hbWUgXSApO1xuICAgICAgICAgICAgaWYgKCBzY29wZS5zdG9yZXNbIG5hbWUgXS5oYXNPd25Qcm9wZXJ0eSgnZGF0YScpIClcbiAgICAgICAgICAgICAgICBpbml0aWFsT3V0cHV0c1sgbmFtZSBdID0gc2NvcGUuZGF0YVsgbmFtZSBdO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICApO1xuICAgIFxuICAgIC8vIC4uLiBAdG9kb1xuICAgIGNTdG9yZS5vbmNlKCdkZXN0cm95JywgKCAuLi5hcmd6ICkgPT4ge1xuICAgICAgICBrZXlzLm1hcChcbiAgICAgICAgICAgICgga2V5ICkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBuYW1lLFxuICAgICAgICAgICAgICAgICAgICBhbGlhcywgcGF0aCxcbiAgICAgICAgICAgICAgICAgICAgc3RvcmU7XG4gICAgICAgICAgICAgICAgaWYgKCBrZXkuc3RvcmUgJiYga2V5Lm5hbWUgKSB7XG4gICAgICAgICAgICAgICAgICAgIGFsaWFzID0gbmFtZSA9IGtleS5uYW1lO1xuICAgICAgICAgICAgICAgICAgICBzdG9yZSA9IGtleS5zdG9yZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoIGlzLmZuKGtleSkgKSB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWUgPSBhbGlhcyA9IGtleS5uYW1lIHx8IGtleS5kZWZhdWx0TmFtZTtcbiAgICAgICAgICAgICAgICAgICAgc3RvcmUgPSBzY29wZS5zdG9yZXNbIG5hbWUgXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGtleSAgID0ga2V5Lm1hdGNoKC8oW1xcd19dKykoKD86XFwuW1xcd19dKykqKSg/OlxcOihbXFx3X10rKSk/Lyk7XG4gICAgICAgICAgICAgICAgICAgIG5hbWUgID0ga2V5WyAxIF07XG4gICAgICAgICAgICAgICAgICAgIHBhdGggID0ga2V5WyAyIF0gJiYga2V5WyAyIF0uc3Vic3RyKDEpO1xuICAgICAgICAgICAgICAgICAgICBzdG9yZSA9IHNjb3BlLnN0b3Jlc1sga2V5WyAxIF0gXTtcbiAgICAgICAgICAgICAgICAgICAgYWxpYXMgPSBrZXlbIDMgXSB8fCBwYXRoICYmIHBhdGgubWF0Y2goLyhbXlxcLl0qKSQvKVsgMCBdIHx8IGtleVsgMSBdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBzdG9yZSAmJiAhaXMuZm4oc3RvcmUpICYmIHN0b3JlLnVuQmluZChjU3RvcmUsIGFsaWFzLCBwYXRoKVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH0pXG4gICAgXG4gICAgcmV0dXJuIGluaXRpYWxPdXRwdXRzO1xufTtcblxuXG5pcy5yc1N0b3JlID0gZnVuY3Rpb24gKCBvYmogKSB7XG4gICAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIFN0b3JlXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0b3JlO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9TdG9yZS5qcyIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpICAyMDE4IFdpc2UgV2lsZCBXZWIgLlxuICpcbiAqICBNSVQgTGljZW5zZVxuICpcbiAqICBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiAgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqICB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiAgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiAgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiAgVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG4gKiAgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqICBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG4gKiAgU09GVFdBUkUuXG4gKlxuICogQGF1dGhvciA6IE5hdGhhbmFlbCBCcmF1blxuICogQGNvbnRhY3QgOiBjYWlwaWxhYnNAZ21haWwuY29tXG4gKi9cblxuLy9pbXBvcnQgaW5kZXggZnJvbSBcIi4vaW5kZXhcIjsvLyB3aWxsIHVzZSBhcyBleHRlcm5hbCB0aGUgaW5kZXggaW4gZGlzdFxuaW1wb3J0IGlzIGZyb20gXCJpc1wiO1xuXG4vKipcbiAqIE1pbmltYWwgcHVzaCBzZXF1ZW5jZXIsIGFwcGx5IHN0b3JlcyBzcGVjaWZpYyB0YXNrIGluIHRoZSByaWdodCBvcmRlciAocm9vdCBzdG9yZXNcbiAqIGZpcnN0KVxuICovXG5sZXQgdGFza1F1ZXVlICAgICAgPSBbXSxcbiAgICBjdXJXZWlnaHQgICAgICA9IDAsXG4gICAgbWF4V2VpZ2h0ICAgICAgPSAwLFxuICAgIG1pbldlaWdodCAgICAgID0gMCxcbiAgICB0YXNrQ291bnQgICAgICA9IDAsXG4gICAgZGVTeW5jICAgICAgICAgPSBmYWxzZSxcbiAgICBkZVN5bmNNYXhUYXNrcyA9IDEwLFxuICAgIHRhc2ssXG4gICAgaXNSdW5uaW5nLFxuICAgIGVycm9yQ2F0Y2hlciAgID0ge1xuICAgICAgICBsYXN0RXJyb3I6IG51bGwsXG4gICAgICAgIGRpc3BhdGNoIDogZnVuY3Rpb24gKCBlcnJvciApIHtcbiAgICAgICAgICAgIGVycm9yQ2F0Y2hlci5kaXNhYmxlKCk7XG4gICAgICAgICAgICBpZiAoIHRhc2sgJiYgdGFza1sgMCBdLmhhbmRsZUVycm9yICkge1xuICAgICAgICAgICAgICAgIHRhc2tbIDAgXS5oYW5kbGVFcnJvcihlcnJvciwgdGFzayk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICggdGFzayApXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlJlU2NvcGUgOiBBbiBhcHBseSB0YXNrIGhhcyBmYWlsZWQgISFcIiwgdGFza1sgMSBdLCBcIiBvbiBcIiwgdGFza1sgMCBdLm5hbWUgfHwgdGFza1sgMCBdLmNvbnN0cnVjdG9yLm5hbWUpXG4gICAgICAgIFxuICAgICAgICAgICAgaXNSdW5uaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB0YXNrICAgICAgPSBudWxsO1xuICAgICAgICAgICAgcnVuTm93KCk7XG4gICAgICAgIH0sXG4gICAgICAgIGVuYWJsZSAgIDogKCB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyApXG4gICAgICAgICAgICAgICAgICAgPyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgZXJyb3JDYXRjaGVyLmRpc3BhdGNoKVxuICAgICAgICAgICAgfSA6ICgpID0+IHtcbiAgICAgICAgICAgICAgICBwcm9jZXNzLm9uKCd1bmNhdWdodEV4Y2VwdGlvbicsIGVycm9yQ2F0Y2hlci5kaXNwYXRjaCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICBkaXNhYmxlICA6ICggdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgKVxuICAgICAgICAgICAgICAgICAgID8gKCkgPT4ge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdlcnJvcicsIGVycm9yQ2F0Y2hlci5kaXNwYXRjaClcbiAgICAgICAgICAgIH0gOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgcHJvY2Vzcy5yZW1vdmVMaXN0ZW5lcigndW5jYXVnaHRFeGNlcHRpb24nLCBlcnJvckNhdGNoZXIuZGlzcGF0Y2gpO1xuICAgICAgICAgICAgfVxuICAgIH1cbjtcblxuZnVuY3Rpb24gcnVuTm93KCkge1xuICAgIGlmICggIWlzUnVubmluZyApIHtcbiAgICAgICAgcnVuKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBydW4oKSB7XG4gICAgbGV0IGZyb20gID0gRGF0ZS5ub3coKTtcbiAgICBpc1J1bm5pbmcgPSB0cnVlO1xuICAgIGVycm9yQ2F0Y2hlci5lbmFibGUoKTtcbiAgICB3aGlsZSAoIHRhc2tDb3VudCApIHtcbiAgICAgICAgXG4gICAgICAgIC8vIHRyeSBmb3IgdGhlIGN1cnJlbnQgd2VpZ2h0XG4gICAgICAgIHdoaWxlICggISggdGFza1F1ZXVlWyBjdXJXZWlnaHQgXSAmJiB0YXNrUXVldWVbIGN1cldlaWdodCBdLmxlbmd0aCApIClcbiAgICAgICAgICAgIGN1cldlaWdodCsrO1xuICAgICAgICBcbiAgICAgICAgdGFza0NvdW50LS07XG4gICAgICAgIHRhc2sgPSB0YXNrUXVldWVbIGN1cldlaWdodCBdLnNoaWZ0KCk7XG4gICAgICAgIC8vY29uc29sZS5sb2coXCJUYXNrIDogXCIsIHRhc2tbMV0sIFwiIG9uIFwiLCB0YXNrWzBdLm5hbWUpO1xuICAgICAgICB0YXNrWyAwIF1bIHRhc2tbIDEgXSBdLmFwcGx5KHRhc2tbIDAgXSwgdGFza1sgMiBdKTtcbiAgICB9XG4gICAgdGFzayA9IHVuZGVmaW5lZDtcbiAgICBlcnJvckNhdGNoZXIuZGlzYWJsZSgpO1xuICAgIFxuICAgIGlzUnVubmluZyA9IGZhbHNlO1xuICAgIGlmICggdGFza0NvdW50ICkge1xuICAgICAgICBzZXRUaW1lb3V0KHJ1bk5vdyk7XG4gICAgfVxufVxuXG4vL1xuLy9pbmRleC5zZXRUYXNrRGVTeW5jID0gKCBuYiApID0+IHtcbi8vICAgIGlmICggbmIgPT09IGZhbHNlIClcbi8vICAgICAgICByZXR1cm4gZGVTeW5jID0gZmFsc2U7XG4vLyAgICBlbHNlIGlmICggbmIgPT09IHRydWUgKSB7XG4vLyAgICAgICAgZGVTeW5jICAgICAgICAgPSB0cnVlO1xuLy8gICAgICAgIGRlU3luY01heFRhc2tzID0gMTA7XG4vLyAgICB9XG4vLyAgICBlbHNlIChpcy5pbnQobmIpKVxuLy8gICAge1xuLy8gICAgICAgIGRlU3luYyAgICAgICAgID0gdHJ1ZTtcbi8vICAgICAgICBkZVN5bmNNYXhUYXNrcyA9IG5iO1xuLy8gICAgfVxuLy99O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgcHVzaFRhc2soIG9iaiwgZm4sIGFyZ3ogKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgbW9yZSBhIHN0b3JlIGhhdmUgc291cmNlcywgdGhlIG1vcmUgaXQgc2hvdWxkIGJlIHByb2Nlc3NlZCBmaXJzdFxuICAgICAgICAgKiBTbyBsZWFmcyBzdG9yZXMgc3RheSBzeW5jLCBhbmQgcm9vdCBzdG9yZXMgcmVjZWl2ZSBtZXJnZWQgc3RhdGUgdXBkYXRlcztcbiAgICAgICAgICogZ2xvYmFsIHN0YXRlIHN0YXkgY29oZXJlbnRcbiAgICAgICAgICpcbiAgICAgICAgICogVGhpcyBtZWFuIHdoYXRldmVyIHRoZSBudW1iZXIgb2Ygc3RvcmVzICYgdGhlIGNvbXBsZXhpdHkgb2YgdGhlIGRlcHMsXG4gICAgICAgICAqIHVwZGF0aW5nIGEgc3RvcmUgc3RhdGUgd2lsbCB1cGRhdGUgaXRzIHN5bmNocm9uZSBjaGlsZCBzdG9yZXMgaW1tZWRpYXRlbHlcbiAgICAgICAgICpcbiAgICAgICAgICpcbiAgICAgICAgICogQHR5cGUgeyp8bnVtYmVyfVxuICAgICAgICAgKi9cbiAgICAgICAgbGV0IHdlaWdodCA9IG9iai5fc291cmNlcyAmJiBvYmouX3NvdXJjZXMubGVuZ3RoIHx8IDEsXG4gICAgICAgICAgICBzdGFjayAgPSB0YXNrUXVldWVbIHdlaWdodCBdID1cbiAgICAgICAgICAgICAgICB0YXNrUXVldWVbIHdlaWdodCBdIHx8IFtdO1xuICAgICAgICBcbiAgICAgICAgbWF4V2VpZ2h0ID0gTWF0aC5tYXgobWF4V2VpZ2h0LCB3ZWlnaHQpO1xuICAgICAgICBjdXJXZWlnaHQgPSBNYXRoLm1pbihjdXJXZWlnaHQsIHdlaWdodCk7XG4gICAgICAgIHRhc2tDb3VudCsrO1xuICAgICAgICBcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcIlB1c2ggVGFzayA6IFwiLCBmbiwgXCIgb24gXCIsIG9iai5uYW1lLCB3ZWlnaHQpO1xuICAgICAgICBzdGFjay5wdXNoKFsgb2JqLCBmbiwgYXJneiBdKTtcbiAgICAgICAgc2V0VGltZW91dChydW5Ob3csIDApO1xuICAgICAgICByZXR1cm4gc3RhY2subGVuZ3RoO1xuICAgIH1cbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWxzL1Rhc2tTZXF1ZW5jZXIuanMiLCIvKlxuICogQ29weXJpZ2h0IChjKSAgMjAxOCBXaXNlIFdpbGQgV2ViIC5cbiAqXG4gKiAgTUlUIExpY2Vuc2VcbiAqXG4gKiAgUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqICBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiAgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuICogIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqICBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqICBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqICBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiAgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqICBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuICogIFNPRlRXQVJFLlxuICpcbiAqIEBhdXRob3IgOiBOYXRoYW5hZWwgQnJhdW5cbiAqIEBjb250YWN0IDogY2FpcGlsYWJzQGdtYWlsLmNvbVxuICovXG5cbmltcG9ydCBpcyAgICBmcm9tICdpcydcblxuY29uc3QgU2ltcGxlT2JqZWN0UHJvdG8gPSAoIHt9ICkuY29uc3RydWN0b3I7XG5cbmxldCBzY29wYWJsZXMgPSBbXTtcblxuZnVuY3Rpb24gYWRkU2NvcGFibGVUeXBlKCB0ZXN0LCBoYW5kbGUsIG1lbWJlciA9IGZhbHNlLCBzdGF0ZVNjb3BlID0gZmFsc2UgKSB7XG4gICAgc2NvcGFibGVzLnB1c2goXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRlc3QsXG4gICAgICAgICAgICBtZW1iZXIsXG4gICAgICAgICAgICBzdGF0ZVNjb3BlLFxuICAgICAgICAgICAgaGFuZGxlXG4gICAgICAgIH1cbiAgICApXG59XG5cbi8vXG5mdW5jdGlvbiBpc1Njb3BhYmxlVHlwZSggQ29tcCwgbWVtYmVyLCBzdGF0ZVNjb3BlICkge1xuICAgIFxuICAgIGZvciAoIGxldCBpID0gMDsgaSA8IHNjb3BhYmxlcy5sZW5ndGg7IGkrKyApXG4gICAgICAgIGlmIChcbiAgICAgICAgICAgICggbWVtYmVyID09PSB1bmRlZmluZWQgfHwgbWVtYmVyID09IHNjb3BhYmxlc1sgaSBdLm1lbWJlciApXG4gICAgICAgICAgICAmJiBzdGF0ZVNjb3BlID09IHNjb3BhYmxlc1sgaSBdLnN0YXRlU2NvcGVcbiAgICAgICAgICAgICYmIHNjb3BhYmxlc1sgaSBdLnRlc3QoQ29tcClcbiAgICAgICAgKVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgXG4gICAgcmV0dXJuIGZhbHNlO1xuICAgIFxufVxuXG5mdW5jdGlvbiBhcHBseVNjb3BhYmxlVHlwZSggQ29tcCwgYXJneiwgbWVtYmVyLCBzdGF0ZVNjb3BlICkge1xuICAgIFxuICAgIGZvciAoIGxldCBpID0gMDsgaSA8IHNjb3BhYmxlcy5sZW5ndGg7IGkrKyApXG4gICAgICAgIGlmICggbWVtYmVyID09IHNjb3BhYmxlc1sgaSBdLm1lbWJlciAmJiBzdGF0ZVNjb3BlID09IHNjb3BhYmxlc1sgaSBdLnN0YXRlU2NvcGUgJiYgc2NvcGFibGVzWyBpIF0udGVzdChDb21wKSApXG4gICAgICAgICAgICByZXR1cm4gc2NvcGFibGVzWyBpIF0uaGFuZGxlKENvbXAsIC4uLmFyZ3opO1xuICAgIFxuICAgIGNvbnNvbGUud2FybihcInJlU2NvcGUgOiBVbmtub3duIHR5cGVcIiwgQ29tcClcbiAgICBcbiAgICByZXR1cm4gZmFsc2U7XG4gICAgXG59XG5cbmZ1bmN0aW9uIHJlU2NvcGUoIC4uLmFyZ3ogKSB7XG4gICAgLy8gYXJlIHdlIGRlY29yYXRpbmcgYSBtZW1iZXIgLyB3aXRob3V0IGFyZ3pcbiAgICBpZiAoIGFyZ3pbIDAgXSBpbnN0YW5jZW9mIFNpbXBsZU9iamVjdFByb3RvICYmIGFyZ3pbIDIgXSBpbnN0YW5jZW9mIFNpbXBsZU9iamVjdFByb3RvICYmIGFyZ3pbIDAgXS5oYXNPd25Qcm9wZXJ0eShhcmd6WyAxIF0pICkge1xuICAgICAgICBhcmd6WyAyIF0udmFsdWUgPSBhcHBseVNjb3BhYmxlVHlwZShhcmd6WyAwIF0sIFtdLCB0cnVlLCBmYWxzZSk7XG4gICAgICAgIHJldHVybiBhcmd6WyAwIF07XG4gICAgfVxuICAgIGVsc2UgaWYgKCAhaXNTY29wYWJsZVR5cGUoYXJnelsgMCBdLCB1bmRlZmluZWQsIGZhbHNlKSApIHtcbiAgICAgICAgcmV0dXJuICggLi4uYXJnejIgKSA9PiB7XG4gICAgICAgICAgICAvLyBhcmUgd2UgZGVjb3JhdGluZyBhIG1lbWJlciAvIHdpdGggYXJnelxuICAgICAgICAgICAgaWYgKCBhcmd6MlsgMCBdIGluc3RhbmNlb2YgU2ltcGxlT2JqZWN0UHJvdG8gJiYgYXJnejJbIDIgXSBpbnN0YW5jZW9mIFNpbXBsZU9iamVjdFByb3RvICYmIGFyZ3oyWyAwIF0uaGFzT3duUHJvcGVydHkoYXJnejJbIDEgXSkgKSB7XG4gICAgICAgICAgICAgICAgYXJnejJbIDIgXS52YWx1ZSA9IGFwcGx5U2NvcGFibGVUeXBlKGFyZ3oyWyAwIF0sIGFyZ3osIHRydWUsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXJnejJbIDAgXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVTY29wZShhcmd6MlsgMCBdLCAuLi5hcmd6KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYXBwbHlTY29wYWJsZVR5cGUoYXJnelsgMCBdLCBhcmd6LnNsaWNlKDEpLCBmYWxzZSwgZmFsc2UpO1xufVxuXG5mdW5jdGlvbiBzY29wZVRvU3RhdGUoIC4uLmFyZ3ogKSB7XG4gICAgLy8gYXJlIHdlIGRlY29yYXRpbmcgYSBtZW1iZXIgLyB3aXRob3V0IGFyZ3pcbiAgICBpZiAoIGFyZ3pbIDAgXSBpbnN0YW5jZW9mIFNpbXBsZU9iamVjdFByb3RvICYmIGFyZ3pbIDIgXSBpbnN0YW5jZW9mIFNpbXBsZU9iamVjdFByb3RvICYmIGFyZ3pbIDAgXS5oYXNPd25Qcm9wZXJ0eShhcmd6WyAxIF0pICkge1xuICAgICAgICBhcmd6WyAyIF0udmFsdWUgPSBhcHBseVNjb3BhYmxlVHlwZShhcmd6WyAwIF0sIFtdLCB0cnVlLCB0cnVlKTtcbiAgICAgICAgcmV0dXJuIGFyZ3pbIDAgXTtcbiAgICB9XG4gICAgZWxzZSBpZiAoICFpc1Njb3BhYmxlVHlwZShhcmd6WyAwIF0sIHVuZGVmaW5lZCwgdHJ1ZSkgKSB7XG4gICAgICAgIHJldHVybiAoIC4uLmFyZ3oyICkgPT4ge1xuICAgICAgICAgICAgLy8gYXJlIHdlIGRlY29yYXRpbmcgYSBtZW1iZXIgLyB3aXRoIGFyZ3pcbiAgICAgICAgICAgIGlmICggYXJnejJbIDAgXSBpbnN0YW5jZW9mIFNpbXBsZU9iamVjdFByb3RvICYmIGFyZ3oyWyAyIF0gaW5zdGFuY2VvZiBTaW1wbGVPYmplY3RQcm90byAmJiBhcmd6MlsgMCBdLmhhc093blByb3BlcnR5KGFyZ3oyWyAxIF0pICkge1xuICAgICAgICAgICAgICAgIGFyZ3oyWyAyIF0udmFsdWUgPSBhcHBseVNjb3BhYmxlVHlwZShhcmd6MlsgMCBdLCBhcmd6LCB0cnVlLCB0cnVlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXJnejJbIDAgXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICByZXR1cm4gc2NvcGVUb1N0YXRlKGFyZ3oyWyAwIF0sIC4uLmFyZ3opO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBhcHBseVNjb3BhYmxlVHlwZShhcmd6WyAwIF0sIGFyZ3ouc2xpY2UoMSksIGZhbHNlLCB0cnVlKTtcbn1cblxuLy9cbi8vYWRkU2NvcGFibGVUeXBlKFxuLy8gICAgKCBDb21wICkgPT4gKENvbXAgJiYgQ29tcC5wcm90b3R5cGUgaW5zdGFuY2VvZiBTdG9yZSksXG4vLyAgICBmdW5jdGlvbiByZVNjb3BlKCAuLi5hcmd6ICkge1xuLy8gICAgICAgIGxldCBCYXNlU3RvcmUgICAgPSAoIWFyZ3pbMF0gfHwgYXJnelswXS5wcm90b3R5cGUgaW5zdGFuY2VvZiBTdG9yZSkgJiZcbi8vIGFyZ3ouc2hpZnQoKSwgc2NvcGUgICAgICAgID0gKCFhcmd6WzBdIHx8IGFyZ3pbMF0gaW5zdGFuY2VvZiBTY29wZSB8fCBpcy5mbihhcmd6WzBdKSlcbi8vICYmIGFyZ3ouc2hpZnQoKSwgdXNlICAgICAgICAgID0gKGlzLmFycmF5KGFyZ3pbMF0pKSAmJiBhcmd6LnNoaWZ0KCksIHN0YXRlTWFwICAgICA9XG4vLyAhdXNlICYmICghYXJnelswXSB8fCBhcmd6WzBdIGluc3RhbmNlb2YgU2ltcGxlT2JqZWN0UHJvdG8pICYmIGFyZ3ouc2hpZnQoKSxcbi8vIGluaXRpYWxTdGF0ZSA9IHt9OyAgbGV0IGNvbXBOYW1lID0gQmFzZVN0b3JlLmRpc3BsYXlOYW1lIHx8IEJhc2VTdG9yZS5uYW1lOyAgdXNlID1cbi8vIFsuLi4oQmFzZVN0b3JlLnVzZSB8fCBbXSksIC4uLih1c2UgfHwgW10pXTsgc3RhdGVNYXAgJiZcbi8vIFNjb3BlLnN0YXRlTWFwVG9SZWZMaXN0KHN0YXRlTWFwLCBpbml0aWFsU3RhdGUsIHVzZSk7ICBjbGFzcyBTdGF0ZVNjb3BlZFN0b3JlIGV4dGVuZHNcbi8vIEJhc2VTdG9yZSB7IHN0YXRpYyB1c2UgICAgICAgICA9IHVzZTsgc3RhdGljIGRpc3BsYXlOYW1lID0gXCJzdGF0ZVNjb3BlZChcIiArIGNvbXBOYW1lICtcbi8vIFwiKVwiOyAgY29uc3RydWN0b3IoIC4uLmFyZ3ogKSB7IHN1cGVyKHNjb3BlLCBhcmd6LnNsaWNlKGFyZ3pbMF0gaW5zdGFuY2VvZiBTY29wZSA/IDEgOlxuLy8gMCkpIH0gfSAgcmV0dXJuIFN0YXRlU2NvcGVkU3RvcmU7IH0sIGZhbHNlLCB0cnVlIClcblxuXG5leHBvcnQge1xuICAgIGFkZFNjb3BhYmxlVHlwZSxcbiAgICByZVNjb3BlLFxuICAgIHNjb3BlVG9TdGF0ZVxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbHMvc2NvcGFibGUuanMiXSwic291cmNlUm9vdCI6IiJ9