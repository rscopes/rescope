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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOTJmZmQyYjUwOWI3ZDBjNzVmYjQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9TY29wZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvaXMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaXNcIiIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL0VtaXR0ZXIuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic2hvcnRpZFwiIiwid2VicGFjazovLy8uL3NyYy9TdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvVGFza1NlcXVlbmNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvc2NvcGFibGUuanMiXSwibmFtZXMiOlsiJGdsb2JhbCIsIndpbmRvdyIsImdsb2JhbCIsIlJTIiwiX19fcmVzY29wZSIsImNvbnNvbGUiLCJ3YXJuIiwiU3RvcmUiLCJTY29wZSIsIkNvbnRleHQiLCJyZVNjb3BlIiwic2NvcGVUb1N0YXRlIiwicmVTY29wZVN0YXRlIiwiYWRkU2NvcGFibGVUeXBlIiwic2NvcGVSZWYiLCJtYXAiLCJrZXkiLCJyZXF1aXJlIiwid2Fsa25TZXQiLCJ3YWxrbkdldCIsImtleVdhbGtuU2V0Iiwia2V5V2Fsa25HZXQiLCJFdmVudEVtaXR0ZXIiLCJzaG9ydGlkIiwiX19wcm90b19fcHVzaCIsInRhcmdldCIsImlkIiwicGFyZW50IiwiZm4iLCJwcm90b3R5cGUiLCJfIiwib3BlblNjb3BlcyIsIlNpbXBsZU9iamVjdFByb3RvIiwiY29uc3RydWN0b3IiLCJzY29wZXMiLCJza2V5IiwiaXMiLCJhcnJheSIsInNvcnQiLCJhIiwiYiIsImZpcnN0bmFtZSIsImpvaW4iLCJzbSIsInN0YXRlIiwiX3JlZnMiLCJhY3Rpb25zIiwicGF0aCIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwiY3BhdGgiLCJwdXNoIiwiRnVuY3Rpb24iLCJhcyIsInN0b3Jlc01hcCIsInNuYXBzaG90IiwiZGF0YSIsImluY3JlbWVudElkIiwicGVyc2lzdGVuY2VUbSIsImF1dG9EZXN0cm95Iiwicm9vdEVtaXR0ZXIiLCJib3VuZGVkQWN0aW9ucyIsImtleUluZGV4IiwiX2lkIiwiZ2VuZXJhdGUiLCJpc0xvY2FsSWQiLCJyZWdpc3RlciIsImkiLCJfcmV2Iiwic3RvcmVzIiwiX2F1dG9EZXN0cm95IiwiZGVhZCIsIkVycm9yIiwic291cmNlcyIsImNoaWxkU2NvcGVzIiwiY2hpbGRTY29wZXNMaXN0IiwidW5TdGFibGVDaGlsZHMiLCJzZWVuQ2hpbGRzIiwiX19yZXRhaW5zIiwiYWxsIiwiX19sb2NrcyIsIl9ib3VuZGVkQWN0aW9ucyIsInRlc3QiLCJpbmNsdWRlcyIsImJpbmQiLCJfbGlzdGVuaW5nIiwiX3Njb3BlIiwiX21peGVkIiwiX21peGVkTGlzdCIsImZvbGxvd2VycyIsInJldGFpbiIsIl9zdGFibGUiLCJ3YWl0Iiwib24iLCJfcGFyZW50TGlzdCIsInJlbGVhc2UiLCJfcHJvcGFnIiwiX2FkZENoaWxkIiwicmVzdG9yZSIsInNldFRpbWVvdXQiLCJkaXNwb3NlIiwic3RvcmVzTGlzdCIsIl9tb3VudCIsImsiLCJhcmd1bWVudHMiLCJyZWYiLCJzbmFwIiwicGFyc2VSZWYiLCJzdG9yZUlkIiwicmVkdWNlUmlnaHQiLCJtb3VudGVkIiwiY3R4Iiwic3RvcmUiLCJ0YXNrUXVldWUiLCJyc1N0b3JlIiwibmFtZSIsImxlbmd0aCIsInNoaWZ0IiwicnNTY29wZSIsIiRwYXJlbnQiLCJtb3VudCIsInNsaWNlIiwidW5kZWZpbmVkIiwic2V0U3RhdGUiLCJfd2F0Y2hTdG9yZSIsImlzU3RhYmxlIiwicHJvcGFnIiwidGFyZ2V0Q3R4IiwibGlzdHMiLCJyZWxpbmsiLCJfX29yaWdpbiIsInNpbmdsZXRvbiIsInNyY0N0eCIsImV4dGVybmFsIiwiZm9yY2UiLCJsY3R4IiwiaW5mbyIsInRtcCIsImRlc3Ryb3kiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJnZXQiLCJzZXQiLCJ2IiwiYWN0aXZlQWN0aW9ucyIsImFjdCIsImhhc093blByb3BlcnR5IiwiX190YXJnZXRTdG9yZXMiLCJkaXNwYXRjaCIsIm9iaiIsInNldEluaXRpYWwiLCJyZXZNYXAiLCJsYXN0UmV2cyIsInJlZktleXMiLCJzdHJpbmciLCJyZWR1Y2UiLCJyZXZzIiwicmV2IiwicmVmcyIsInJldGFpblN0b3JlcyIsImdldFVwZGF0ZXMiLCJkaXNwb3NlU3RvcmVzIiwic3BsaWNlIiwidG8iLCJyZWZMaXN0IiwibWl4ZWRDV1VubW91bnQiLCJ1bk1vdW50S2V5IiwiaXNSZWFjdENvbXBvbmVudCIsInVuQmluZCIsImFsaWFzIiwicmV0cmlldmUiLCJzcGxpdCIsInJldHJpZXZlU3RvcmUiLCJzdG9yZXNSZXZNYXAiLCJsb2NhbCIsInVwZGF0ZWQiLCJnZXRTdG9yZXNSZXZzIiwib3V0cHV0IiwiY2hpbGRzIiwiX2dldEFsbENoaWxkcyIsImNmZyIsIndpdGhDaGlsZHMiLCJ3aXRoUGFyZW50cyIsIndpdGhNaXhlZCIsIm5vcmVmcyIsInNlcmlhbGl6ZSIsIndpdGhDaGlsZCIsImgiLCJzdGFydHNXaXRoIiwic3Vic3RyIiwiYm9vbCIsInRha2VTbmFwc2hvdEJ5S2V5IiwiZ2V0U25hcHNob3RCeUtleSIsImRlbGV0ZVNuYXBzaG90QnlLZXkiLCJyZXBsYWNlIiwicFN0YXRlIiwiX3JlZiIsImFjdGlvbiIsImFyZ3oiLCJzdGFjayIsImJBY3RzIiwidHJpZ2dlciIsImNiIiwib25jZSIsInJlYXNvbiIsImVtaXQiLCJlcnJvciIsInN0YWJpbGl6ZXJUTSIsImNsZWFyVGltZW91dCIsInByb3BhZ1RNIiwicmVtYXBzIiwid2FzU3RhYmxlIiwiaW5kZXhPZiIsInVuIiwiZGVzdHJveVRNIiwicmVtb3ZlTGlzdGVuZXIiLCJmb2xsb3dlciIsIl9ybUNoaWxkIiwidmFsdWUiLCJpc0tleSIsImZpbHRlciIsIkVtaXR0ZXIiLCJfZXZlbnRzIiwiZXZ0IiwiVGFza1NlcXVlbmNlciIsIm9ialByb3RvIiwiZ2V0UHJvdG90eXBlT2YiLCJfc3RhdGljIiwic2NvcGUiLCJnZXRTY29wZSIsInN0YXRpY1Njb3BlIiwid2F0Y2hzIiwidXNlIiwiYXBwbHkiLCJpbml0aWFsU3RhdGUiLCJkZWZhdWx0U3RhdGUiLCJhcHBsaWVkIiwiX3VpZCIsIl9vblN0YWJpbGl6ZSIsIl9wZXJzaXN0ZW5jZVRtIiwiX2NmZyIsInNjb3BlT2JqIiwiJHNjb3BlIiwiJHN0b3JlcyIsIiRhY3Rpb25zIiwiJGRpc3BhdGNoIiwiX3JldnMiLCJfcmVxdWlyZSIsIl9zb3VyY2VzIiwiX3VzZSIsIm1hdGNoIiwicmVmMiIsIl9mb2xsb3dlcnMiLCJfY2hhbmdlc1NXIiwiX2FmdGVyQ29uc3RydWN0b3IiLCJpbml0aWFsRGF0YSIsInNob3VsZEFwcGx5IiwibWFuYWdlZCIsIm5EYXRhcyIsInIiLCJjRGF0YXMiLCJpc0NvbXBsZXRlIiwiZm9sbG93IiwiY2FsbCIsImNoYW5nZXMiLCJyZWZpbmUiLCJfX3Byb3RvX18iLCJfc3RhYmlsaXplciIsInB1c2hUYXNrIiwibnMiLCJkb1dhaXQiLCJvcmlnaW4iLCJpbml0aWFsT3V0cHV0cyIsInMiLCJoYXNEYXRhQ2hhbmdlIiwic3RhYmxlIiwibmV4dFN0YXRlIiwiX25leHRTdGF0ZSIsIm5leHREYXRhIiwic3luYyIsImNoYW5nZSIsInB1c2hTdGF0ZSIsInN0YWJpbGl6ZSIsIl9rZXkiLCJkZWZhdWx0TmFtZSIsIm51bWJlciIsImltbWVkaWF0ZSIsInRoZW4iLCJwcmV2aW91cyIsIm1lIiwic2hvdWxkUHJvcGFnIiwiX2Rlc3Ryb3lUTSIsInJlbW92ZUFsbExpc3RlbmVycyIsImNTdG9yZSIsInRhcmdldFJldnMiLCJ0YXJnZXRTY29wZSIsIm8iLCJjdXJXZWlnaHQiLCJtYXhXZWlnaHQiLCJtaW5XZWlnaHQiLCJ0YXNrQ291bnQiLCJkZVN5bmMiLCJkZVN5bmNNYXhUYXNrcyIsInRhc2siLCJpc1J1bm5pbmciLCJlcnJvckNhdGNoZXIiLCJsYXN0RXJyb3IiLCJkaXNhYmxlIiwiaGFuZGxlRXJyb3IiLCJydW5Ob3ciLCJlbmFibGUiLCJhZGRFdmVudExpc3RlbmVyIiwicHJvY2VzcyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJydW4iLCJmcm9tIiwiRGF0ZSIsIm5vdyIsIndlaWdodCIsIk1hdGgiLCJtYXgiLCJtaW4iLCJzY29wYWJsZXMiLCJoYW5kbGUiLCJtZW1iZXIiLCJzdGF0ZVNjb3BlIiwiaXNTY29wYWJsZVR5cGUiLCJDb21wIiwiYXBwbHlTY29wYWJsZVR5cGUiLCJhcmd6MiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNUQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUEvQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTJCQSxLQUFJQSxVQUFZLE9BQU9DLE1BQVAsS0FBa0IsV0FBcEIsR0FBb0NBLE1BQXBDLEdBQTZDQyxNQUEzRDs7QUFNQSxLQUFNQyxLQUFLSCxRQUFRSSxVQUFSLElBQXNCLEVBQWpDO0FBQ0EsS0FBS0osUUFBUUksVUFBYixFQUEwQjtBQUN0QkMsYUFBUUMsSUFBUixDQUFhLCtEQUFiO0FBQ0gsRUFGRCxNQUdLOztBQUVETixhQUFRSSxVQUFSLEdBQXFCRCxFQUFyQjtBQUNBLHFCQUFNSSxLQUFOO0FBQ0E7QUFDQUosUUFBR0ssS0FBSDtBQUNBTCxRQUFHTSxPQUFIO0FBQ0FOLFFBQUdJLEtBQUg7QUFDQUosUUFBR08sT0FBSDtBQUNBUCxRQUFHUSxZQUFIO0FBQ0FSLFFBQUdTLFlBQUg7QUFDQVQsUUFBR1UsZUFBSDtBQUNB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bEI7QUFDQSxnQkFBT0EsS0FBTSxDQUFOLENBQVA7QUFDSCxNQUhELE1BSUssSUFBSyxDQUFDZ0ksZUFBZWhJLEtBQU0sQ0FBTixDQUFmLEVBQTBCN0UsU0FBMUIsRUFBcUMsSUFBckMsQ0FBTixFQUFtRDtBQUNwRCxnQkFBTyxZQUFnQjtBQUFBLGdEQUFYZ04sS0FBVztBQUFYQSxzQkFBVztBQUFBOztBQUNuQjtBQUNBLGlCQUFLQSxNQUFPLENBQVAsYUFBc0IzUyxpQkFBdEIsSUFBMkMyUyxNQUFPLENBQVAsYUFBc0IzUyxpQkFBakUsSUFBc0YyUyxNQUFPLENBQVAsRUFBV3ZMLGNBQVgsQ0FBMEJ1TCxNQUFPLENBQVAsQ0FBMUIsQ0FBM0YsRUFBbUk7QUFDL0hBLHVCQUFPLENBQVAsRUFBVy9HLEtBQVgsR0FBbUI4RyxrQkFBa0JDLE1BQU8sQ0FBUCxDQUFsQixFQUE4Qm5JLElBQTlCLEVBQW9DLElBQXBDLEVBQTBDLElBQTFDLENBQW5CO0FBQ0Esd0JBQU9tSSxNQUFPLENBQVAsQ0FBUDtBQUNILGNBSEQsTUFLSSxPQUFPaFUsK0JBQWFnVSxNQUFPLENBQVAsQ0FBYixTQUE0Qm5JLElBQTVCLEVBQVA7QUFDUCxVQVJEO0FBU0g7QUFDRCxZQUFPa0ksa0JBQWtCbEksS0FBTSxDQUFOLENBQWxCLEVBQTZCQSxLQUFLOUUsS0FBTCxDQUFXLENBQVgsQ0FBN0IsRUFBNEMsS0FBNUMsRUFBbUQsSUFBbkQsQ0FBUDtBQUNIOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztTQUlJN0csZSxHQUFBQSxlO1NBQ0FILE8sR0FBQUEsTztTQUNBQyxZLEdBQUFBLFkiLCJmaWxlIjoiLi4vLi4vZGlzdC9SZVNjb3BlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDkyZmZkMmI1MDliN2QwYzc1ZmI0IiwiLypcbiAqIENvcHlyaWdodCAoYykgIDIwMTggV2lzZSBXaWxkIFdlYiAuXG4gKlxuICogIE1JVCBMaWNlbnNlXG4gKlxuICogIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqICBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiAgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqICBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqICBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqICBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcbiAqICBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqICBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiAgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiAgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiAgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiAgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcbiAqICBTT0ZUV0FSRS5cbiAqXG4gKiBAYXV0aG9yIDogTmF0aGFuYWVsIEJyYXVuXG4gKiBAY29udGFjdCA6IGNhaXBpbGFic0BnbWFpbC5jb21cbiAqL1xuXG5sZXQgJGdsb2JhbCA9ICggdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgKSA/IHdpbmRvdyA6IGdsb2JhbDtcblxuaW1wb3J0IFNjb3BlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tIFwiLi9TY29wZVwiO1xuaW1wb3J0IFN0b3JlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tIFwiLi9TdG9yZVwiO1xuaW1wb3J0IHsgYWRkU2NvcGFibGVUeXBlLCByZVNjb3BlLCBzY29wZVRvU3RhdGUgfSBmcm9tIFwiLi91dGlscy9zY29wYWJsZVwiO1xuXG5jb25zdCBSUyA9ICRnbG9iYWwuX19fcmVzY29wZSB8fCB7fTtcbmlmICggJGdsb2JhbC5fX19yZXNjb3BlICkge1xuICAgIGNvbnNvbGUud2FybihcIlJlU2NvcGUgaXMgZGVmaW5lZCBtdWx0aXBsZSB0aW1lcyAhISBcXG5DaGVjayB5b3UncmUgcGFja2FnaW5nXCIpXG59XG5lbHNlIHtcbiAgICBcbiAgICAkZ2xvYmFsLl9fX3Jlc2NvcGUgPSBSUztcbiAgICBTY29wZS5TdG9yZSAgICAgICAgPSBTdG9yZTtcbiAgICAvL1JTLmNvbnNvbGUgICAgICAgICA9IGNvbnNvbGU7XG4gICAgUlMuU2NvcGUgICAgICAgICAgID0gU2NvcGU7XG4gICAgUlMuQ29udGV4dCAgICAgICAgID0gU2NvcGU7XG4gICAgUlMuU3RvcmUgICAgICAgICAgID0gU3RvcmU7XG4gICAgUlMucmVTY29wZSAgICAgICAgID0gcmVTY29wZTtcbiAgICBSUy5zY29wZVRvU3RhdGUgICAgPSBzY29wZVRvU3RhdGU7XG4gICAgUlMucmVTY29wZVN0YXRlICAgID0gc2NvcGVUb1N0YXRlO1xuICAgIFJTLmFkZFNjb3BhYmxlVHlwZSA9IGFkZFNjb3BhYmxlVHlwZTtcbiAgICBSUy5zY29wZVJlZiAgICAgICAgPVxuICAgICAgICBmdW5jdGlvbiBzY29wZVJlZiggbWFwLCBrZXkgKSB7XG4gICAgICAgICAgICBtYXBbIGtleSBdID0gbmV3IFNjb3BlLnNjb3BlUmVmKG1hcFsga2V5IF0pO1xuICAgICAgICAgICAgcmV0dXJuIG1hcDtcbiAgICAgICAgfTtcbiAgICBcbn1cbmV4cG9ydCBkZWZhdWx0IFJTO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC5qcyIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpICAyMDE4IFdpc2UgV2lsZCBXZWIgLlxuICpcbiAqICBNSVQgTGljZW5zZVxuICpcbiAqICBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiAgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqICB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiAgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiAgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiAgVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG4gKiAgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqICBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG4gKiAgU09GVFdBUkUuXG4gKlxuICogQGF1dGhvciA6IE5hdGhhbmFlbCBCcmF1blxuICogQGNvbnRhY3QgOiBjYWlwaWxhYnNAZ21haWwuY29tXG4gKi9cblxuXG52YXIgaXMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi91dGlscy9pcycpLFxuICAgIHsgd2Fsa25TZXQsIHdhbGtuR2V0LCBrZXlXYWxrblNldCwga2V5V2Fsa25HZXQgfSA9IHJlcXVpcmUoJy4vdXRpbHMvdXRpbHMnKSxcbiAgICBFdmVudEVtaXR0ZXIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL3V0aWxzL0VtaXR0ZXInKSxcbiAgICBzaG9ydGlkICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlKCdzaG9ydGlkJylcbiAgICAsIF9fcHJvdG9fX3B1c2ggICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSAoIHRhcmdldCwgaWQsIHBhcmVudCApID0+IHtcbiAgICAgICAgbGV0IGZuICAgICAgICAgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIH07XG4gICAgICAgIGZuLnByb3RvdHlwZSAgID0gcGFyZW50ID8gbmV3IHBhcmVudC5fWyBpZCBdKCkgOiB0YXJnZXRbIGlkIF0gfHwge307XG4gICAgICAgIHRhcmdldFsgaWQgXSAgID0gbmV3IGZuKCk7XG4gICAgICAgIHRhcmdldC5fWyBpZCBdID0gZm47XG4gICAgfSxcbiAgICBvcGVuU2NvcGVzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSB7fSxcbiAgICBTaW1wbGVPYmplY3RQcm90byAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSAoIHt9ICkuY29uc3RydWN0b3I7XG5cbi8qKlxuICogQmFzZSBTY29wZSBvYmplY3RcbiAqL1xuY2xhc3MgU2NvcGUgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICAgIHN0YXRpYyBnZXRTY29wZSggc2NvcGVzICkge1xuICAgICAgICBsZXQgc2tleSA9IGlzLmFycmF5KHNjb3BlcykgPyBzY29wZXMuc29ydCgoIGEsIGIgKSA9PiB7XG4gICAgICAgICAgICBpZiAoIGEuZmlyc3RuYW1lIDwgYi5maXJzdG5hbWUgKSByZXR1cm4gLTE7XG4gICAgICAgICAgICBpZiAoIGEuZmlyc3RuYW1lID4gYi5maXJzdG5hbWUgKSByZXR1cm4gMTtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9KS5qb2luKCcrJykgOiBzY29wZXM7XG4gICAgICAgIHJldHVybiBvcGVuU2NvcGVzWyBza2V5IF0gPSBvcGVuU2NvcGVzWyBza2V5IF0gfHwgbmV3IFNjb3BlKHt9LCB7IGlkOiBza2V5IH0pO1xuICAgIH07XG4gICAgXG4gICAgXG4gICAgLyoqXG4gICAgICogZ2V0IGEgcGFyc2VkIHJlZmVyZW5jZSBsaXN0IGZyb20gc3RhdGVNYXBcbiAgICAgKiBAcGFyYW0gX3JlZlxuICAgICAqIEByZXR1cm5zIHt7c3RvcmVJZCwgcGF0aCwgYWxpYXM6ICosIHJlZjogKn19XG4gICAgICovXG4gICAgc3RhdGljIHN0YXRlTWFwVG9SZWZMaXN0KCBzbSwgc3RhdGUgPSB7fSwgX3JlZnMgPSBbXSwgYWN0aW9ucyA9IHt9LCBwYXRoID0gXCJcIiApIHtcbiAgICAgICAgT2JqZWN0LmtleXMoc20pLmZvckVhY2goXG4gICAgICAgICAgICBrZXkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBjcGF0aCA9IHBhdGggPyBwYXRoICsgJy4nICsga2V5IDoga2V5O1xuICAgICAgICAgICAgICAgIHNtWyBrZXkgXSBpbnN0YW5jZW9mIFNjb3BlLnNjb3BlUmVmXG4gICAgICAgICAgICAgICAgPyBfcmVmcy5wdXNoKHNtWyBrZXkgXS5wYXRoICsgJzonICsgY3BhdGgpXG4gICAgICAgICAgICAgICAgOiAoIHNtWyBrZXkgXSAmJiBzbVsga2V5IF0gaW5zdGFuY2VvZiBGdW5jdGlvbiApXG4gICAgICAgICAgICAgICAgICA/IGFjdGlvbnNbIGtleSBdID0gc21bIGtleSBdXG4gICAgICAgICAgICAgICAgICA6ICggc21bIGtleSBdICYmIHNtWyBrZXkgXS5wcm90b3R5cGUgaW5zdGFuY2VvZiBTY29wZS5TdG9yZSApXG4gICAgICAgICAgICAgICAgICAgID8gX3JlZnMucHVzaChzbVsga2V5IF0uYXMoY3BhdGgpKVxuICAgICAgICAgICAgICAgICAgICA6IHN0YXRlWyBjcGF0aCBdID0gc21bIGtleSBdXG4gICAgICAgICAgICAgICAgLy86IHRoaXMuc3RhdGVNYXBUb1JlZkxpc3Qoc21ba2V5XSwgX3JlZnMsIHBhdGggKyAnLicgKyBrZXkpXG4gICAgICAgICAgICB9XG4gICAgICAgIClcbiAgICAgICAgcmV0dXJuIF9yZWZzO1xuICAgIH1cbiAgICBcbiAgICBzdGF0aWMgcGVyc2lzdGVuY2VUbSA9IDE7Ly8gaWYgPiAwLCB3aWxsIHdhaXQgJ3BlcnNpc3RlbmNlVG0nIG1zIGJlZm9yZSBkZXN0cm95XG4gICAgLy8gd2hlblxuICAgIC8vIGRpc3Bvc2UgcmVhY2ggMFxuICAgIHN0YXRpYyBTdG9yZSAgICA9IG51bGw7XG4gICAgc3RhdGljIHNjb3BlUmVmID0gZnVuY3Rpb24gc2NvcGVSZWYoIHBhdGggKSB7XG4gICAgICAgIHRoaXMucGF0aCA9IHBhdGg7XG4gICAgfTtcbiAgICBzdGF0aWMgc2NvcGVzICAgPSBvcGVuU2NvcGVzOy8vIGFsbCBhY3RpdmUgc2NvcGVzXG4gICAgXG4gICAgXG4gICAgLyoqXG4gICAgICogSW5pdCBhIFJlU2NvcGUgc2NvcGVcbiAgICAgKlxuICAgICAqIEBwYXJhbSBzdG9yZXNNYXAge09iamVjdH0gT2JqZWN0IHdpdGggdGhlIGluaXRpYWwgc3RvcmVzIGRlZmluaXRpb24gLyBpbnN0YW5jZXNcbiAgICAgKiBAcGFyYW0gY29uZmlnIHtPYmplY3R9IFNjb3BlIGNvbmZpZ1xuICAgICAqIHtcbiAgICAgKiAgcGFyZW50IHtzY29wZX0gQG9wdGlvbmFsIHBhcmVudCBzY29wZVxuICAgICAqXG4gICAgICogIGlkIHtzdHJpbmd9IEBvcHRpb25hbCBpZCAoIGlmIHRoaXMgaWQgZXhpc3Qgc3RvcmVzTWFwIHdpbGwgYmUgbWVyZ2Ugb24gdGhlICdpZCdcbiAgICAgKiAgICAgc2NvcGUpIGtleSB7c3RyaW5nfSBAb3B0aW9uYWwga2V5IG9mIHRoZSBzY29wZSAoIGlmIG5vIGlkIGlzIHNldCwgdGhlIHNjb3BlIGlkXG4gICAgICogICAgIHdpbGwgYmUgKHBhcmVudC5pZCsnPicra2V5KSBpbmNyZW1lbnRJZCB7Ym9vbH0gQG9wdGlvbmFsIHRydWUgdG8gYWRkIGEgc3VmZml4XG4gICAgICogICAgIGlkLCBpZiB0aGUgcHJvdmlkZWQga2V5IG9yIGlkIGdsb2JhbGx5IGV4aXN0XG4gICAgICpcbiAgICAgKiAgc3RhdGUge09iamVjdH0gQG9wdGlvbmFsIGluaXRpYWwgc3RhdGUgYnkgc3RvcmUgYWxpYXNcbiAgICAgKiAgZGF0YSB7T2JqZWN0fSBAb3B0aW9uYWwgaW5pdGlhbCBkYXRhIGJ5IHN0b3JlIGFsaWFzXG4gICAgICpcbiAgICAgKiAgcm9vdEVtaXR0ZXIge2Jvb2x9IEBvcHRpb25hbCB0cnVlIHRvIG5vdCBiZWluZyBkZXN0YWJpbGl6ZWQgYnkgcGFyZW50XG4gICAgICogIGJvdW5kZWRBY3Rpb25zIHthcnJheSB8IHJlZ2V4cH0gQG9wdGlvbmFsIGxpc3Qgb3IgcmVnZXhwIG9mIGFjdGlvbnMgbm90XG4gICAgICogICAgIHByb3BhZ2F0ZWQgdG8gdGhlIHBhcmVudFxuICAgICAqXG4gICAgICogIHBlcnNpc3RlbmNlVG0ge251bWJlcikgaWYgPiAwLCB3aWxsIHdhaXQgJ3BlcnNpc3RlbmNlVG0nIG1zIGJlZm9yZSBkZXN0cm95IHdoZW5cbiAgICAgKiAgICAgZGlzcG9zZSByZWFjaCAwIGF1dG9EZXN0cm95ICB7Ym9vbH0gd2lsbCB0cmlnZ2VyIHJldGFpbiAmIGRpc3Bvc2UgYWZ0ZXIgc3RhcnRcbiAgICAgKiAgfVxuICAgICAqIEByZXR1cm5zIHtTY29wZX1cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvciggc3RvcmVzTWFwLCB7IHBhcmVudCwga2V5LCBpZCwgc25hcHNob3QsIHN0YXRlLCBkYXRhLCBpbmNyZW1lbnRJZCA9ICEha2V5LCBwZXJzaXN0ZW5jZVRtLCBhdXRvRGVzdHJveSwgcm9vdEVtaXR0ZXIsIGJvdW5kZWRBY3Rpb25zIH0gPSB7fSApIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdmFyIF8gPSB7fSwga2V5SW5kZXg7XG4gICAgICAgIFxuICAgICAgICBpZCA9IGlkIHx8IGtleSAmJiAoICggcGFyZW50ICYmIHBhcmVudC5faWQgfHwgc2hvcnRpZC5nZW5lcmF0ZSgpICkgKyAnPicgKyBrZXkgKTtcbiAgICAgICAgXG4gICAgICAgIF8uaXNMb2NhbElkID0gIWlkO1xuICAgICAgICBcbiAgICAgICAgLy9pZiAoIHBhcmVudCAmJiBrZXkgKSB7XG4gICAgICAgIC8vICAgIGtleUluZGV4ID0gcGFyZW50Ll8uY2hpbGRTY29wZXMuZmluZChjdHg9PihjdHguX2lkPT1pZCkpO1xuICAgICAgICAvLyAgICBpZiAoIGtleUluZGV4ID09IC0xICkga2V5SW5kZXggPSBwYXJlbnQuXy5zZWVuQ2hpbGRzO1xuICAgICAgICAvLyAgICBrZXlJbmRleCsrO1xuICAgICAgICAvLyAgICBpZiAoIGtleUluZGV4IClcbiAgICAgICAgLy8gICAgICAgIGlkID0gaWQgKyAnWycgKyBrZXlJbmRleCArICddJztcbiAgICAgICAgLy99XG4gICAgICAgIFxuICAgICAgICBpZCA9IGlkIHx8ICggXCJfX19fX1wiICsgc2hvcnRpZC5nZW5lcmF0ZSgpICk7XG4gICAgICAgIFxuICAgICAgICBpZiAoIG9wZW5TY29wZXNbIGlkIF0gJiYgIWluY3JlbWVudElkICkge1xuICAgICAgICAgICAgdGhpcy5faWQgPSBpZDtcbiAgICAgICAgICAgIG9wZW5TY29wZXNbIGlkIF0ucmVnaXN0ZXIoc3RvcmVzTWFwKTtcbiAgICAgICAgICAgIHJldHVybiBvcGVuU2NvcGVzWyBpZCBdXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoIG9wZW5TY29wZXNbIGlkIF0gJiYgaW5jcmVtZW50SWQgKSB7XG4gICAgICAgICAgICBsZXQgaSA9IC0xO1xuICAgICAgICAgICAgd2hpbGUgKCBvcGVuU2NvcGVzWyBpZCArICdbJyArICggKytpICkgKyAnXScgXSApIDtcbiAgICAgICAgICAgIGlkID0gaWQgKyAnWycgKyBpICsgJ10nO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9pZCAgICAgICAgID0gaWQ7XG4gICAgICAgIHRoaXMuX3JldiAgICAgICAgPSAwO1xuICAgICAgICBvcGVuU2NvcGVzWyBpZCBdID0gdGhpcztcbiAgICAgICAgXy5wZXJzaXN0ZW5jZVRtICA9IHBlcnNpc3RlbmNlVG0gfHwgdGhpcy5jb25zdHJ1Y3Rvci5wZXJzaXN0ZW5jZVRtO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5hY3Rpb25zID0ge307XG4gICAgICAgIHRoaXMuc3RvcmVzICA9IHt9O1xuICAgICAgICB0aGlzLnN0YXRlICAgPSB7fTtcbiAgICAgICAgdGhpcy5kYXRhICAgID0ge307XG4gICAgICAgIFxuICAgICAgICB0aGlzLnBhcmVudCAgICAgICA9IHBhcmVudDtcbiAgICAgICAgdGhpcy5fICAgICAgICAgICAgPSBfO1xuICAgICAgICB0aGlzLl9hdXRvRGVzdHJveSA9IGF1dG9EZXN0cm95O1xuICAgICAgICBcbiAgICAgICAgaWYgKCBwYXJlbnQgJiYgcGFyZW50LmRlYWQgKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2FuJ3QgdXNlIGEgZGVhZCBzY29wZSBhcyBwYXJlbnQgIVwiKTtcbiAgICAgICAgXG4gICAgICAgIF9fcHJvdG9fX3B1c2godGhpcywgJ2FjdGlvbnMnLCBwYXJlbnQpO1xuICAgICAgICBfX3Byb3RvX19wdXNoKHRoaXMsICdzdG9yZXMnLCBwYXJlbnQpO1xuICAgICAgICBfX3Byb3RvX19wdXNoKHRoaXMsICdzdGF0ZScsIHBhcmVudCk7XG4gICAgICAgIF9fcHJvdG9fX3B1c2godGhpcywgJ2RhdGEnLCBwYXJlbnQpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5zb3VyY2VzICAgICAgPSBbXTtcbiAgICAgICAgXy5jaGlsZFNjb3BlcyAgICAgPSBbXTtcbiAgICAgICAgXy5jaGlsZFNjb3Blc0xpc3QgPSBbXTtcbiAgICAgICAgXy51blN0YWJsZUNoaWxkcyAgPSAwO1xuICAgICAgICBfLnNlZW5DaGlsZHMgICAgICA9IDA7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9fcmV0YWlucyA9IHsgYWxsOiAwIH07XG4gICAgICAgIHRoaXMuX19sb2NrcyAgID0geyBhbGw6IDEgfTtcbiAgICAgICAgXG4gICAgICAgIC8vXy5zbmFwc2hvdCAgICAgICAgPSBzbmFwc2hvdDtcbiAgICAgICAgLy9fLnNuYXBzaG90ICAgICAgICA9IHNuYXBzaG90O1xuICAgICAgICBfLl9ib3VuZGVkQWN0aW9ucyA9IGlzLmFycmF5KGJvdW5kZWRBY3Rpb25zKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8geyB0ZXN0OiBib3VuZGVkQWN0aW9ucy5pbmNsdWRlcy5iaW5kKGJvdW5kZWRBY3Rpb25zKSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBib3VuZGVkQWN0aW9ucztcbiAgICAgICAgXy5fbGlzdGVuaW5nICAgICAgPSB7fTtcbiAgICAgICAgXy5fc2NvcGUgICAgICAgICAgPSB7fTtcbiAgICAgICAgXy5fbWl4ZWQgICAgICAgICAgPSBbXTtcbiAgICAgICAgXy5fbWl4ZWRMaXN0ICAgICAgPSBbXTtcbiAgICAgICAgXy5mb2xsb3dlcnMgICAgICAgPSBbXTtcbiAgICAgICAgaWYgKCBwYXJlbnQgKSB7XG4gICAgICAgICAgICBwYXJlbnQucmV0YWluKFwiaXNNeVBhcmVudFwiKTtcbiAgICAgICAgICAgIGlmICggIXJvb3RFbWl0dGVyICkge1xuICAgICAgICAgICAgICAgICFwYXJlbnQuX3N0YWJsZSAmJiB0aGlzLndhaXQoXCJ3YWl0aW5nUGFyZW50XCIpO1xuICAgICAgICAgICAgICAgIHBhcmVudC5vbihfLl9wYXJlbnRMaXN0ID0ge1xuICAgICAgICAgICAgICAgICAgICAnc3RhYmxlJyAgOiBzID0+IHRoaXMucmVsZWFzZShcIndhaXRpbmdQYXJlbnRcIiksXG4gICAgICAgICAgICAgICAgICAgICd1bnN0YWJsZSc6IHMgPT4gdGhpcy53YWl0KFwid2FpdGluZ1BhcmVudFwiKSxcbiAgICAgICAgICAgICAgICAgICAgJ3VwZGF0ZScgIDogcyA9PiB0aGlzLl9wcm9wYWcoKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcGFyZW50Lm9uKF8uX3BhcmVudExpc3QgPSB7XG4gICAgICAgICAgICAgICAgICAgICd1cGRhdGUnOiBzID0+IHRoaXMuX3Byb3BhZygpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyB0aGlzLnJlZ2lzdGVyKHBhcmVudC5fX3Njb3BlLCBzdGF0ZSwgZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICB0aGlzLnJlZ2lzdGVyKHN0b3Jlc01hcCwgc3RhdGUsIGRhdGEpO1xuICAgICAgICB0aGlzLl9fbG9ja3MuYWxsLS07XG4gICAgICAgIHRoaXMuX3N0YWJsZSA9ICF0aGlzLl9fbG9ja3MuYWxsO1xuICAgICAgICBcbiAgICAgICAgaWYgKCBwYXJlbnQgKSB7XG4gICAgICAgICAgICBwYXJlbnQuX2FkZENoaWxkKHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0aGlzLnJlc3RvcmUoc25hcHNob3QpO1xuICAgICAgICBcbiAgICAgICAgaWYgKCBhdXRvRGVzdHJveSApXG4gICAgICAgICAgICBzZXRUaW1lb3V0KFxuICAgICAgICAgICAgICAgIHRtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXRhaW4oXCJhdXRvRGVzdHJveVwiKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNwb3NlKFwiYXV0b0Rlc3Ryb3lcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKVxuICAgICAgICBcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBNb3VudCB0aGUgc3RvcmVzIGluIHN0b3Jlc0xpc3QsIGluIHRoaXMgc2NvcGUgb3IgaW4gaXRzIHBhcmVudHMgb3IgbWl4ZWQgc2NvcGVzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc3RvcmVzTGlzdCB7c3RyaW5nfHN0b3JlUmVmfSBTdG9yZSBuYW1lLCBBcnJheSBvZiBTdG9yZSBuYW1lcywgb3IgUmVzY29wZVxuICAgICAqICAgICBzdG9yZSByZWYgZnJvbSBTdG9yZTo6YXMgb3IgU3RvcmU6YXNcbiAgICAgKiBAcGFyYW0gc3RhdGVcbiAgICAgKiBAcGFyYW0gZGF0YVxuICAgICAqIEByZXR1cm5zIHtTY29wZX1cbiAgICAgKi9cbiAgICBtb3VudCggc3RvcmVzTGlzdCwgc25hcHNob3QsIHN0YXRlLCBkYXRhICkge1xuICAgICAgICBpZiAoIGlzLmFycmF5KHN0b3Jlc0xpc3QpICkge1xuICAgICAgICAgICAgc3RvcmVzTGlzdC5mb3JFYWNoKGsgPT4gdGhpcy5fbW91bnQoaywgc25hcHNob3QsIHN0YXRlLCBkYXRhKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9tb3VudCguLi5hcmd1bWVudHMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBcbiAgICBfbW91bnQoIGlkLCBzbmFwc2hvdCwgc3RhdGUsIGRhdGEgKSB7XG4gICAgICAgIGxldCByZWYsIHNuYXA7XG4gICAgICAgIFxuICAgICAgICByZWYgPSB0aGlzLnBhcnNlUmVmKGlkKVxuICAgICAgICBcbiAgICAgICAgaWYgKCBpZCA9PSBcIiRwYXJlbnRcIiApIHJldHVybjtcbiAgICAgICAgaWYgKCAhdGhpcy5fLl9zY29wZVsgcmVmLnN0b3JlSWQgXSApIHsvL2FzayBtaXhlZCB8fCBwYXJlbnRcbiAgICAgICAgICAgIGlmICggdGhpcy5fLl9taXhlZC5yZWR1Y2VSaWdodCgoIG1vdW50ZWQsIGN0eCApID0+ICggbW91bnRlZCB8fCBjdHguX21vdW50KGlkLCBzbmFwc2hvdCwgc3RhdGUsIGRhdGEpICksIGZhbHNlKSB8fFxuICAgICAgICAgICAgICAgICAhdGhpcy5wYXJlbnQgKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcmVudC5fbW91bnQoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxldCBzdG9yZSA9IHRoaXMuXy5fc2NvcGVbIHJlZi5zdG9yZUlkIF0sIHRhc2tRdWV1ZSA9IFtdO1xuICAgICAgICAgICAgaWYgKCBpcy5yc1N0b3JlKHN0b3JlLnByb3RvdHlwZSkgKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fLl9zY29wZVsgcmVmLnN0b3JlSWQgXSA9IG5ldyBzdG9yZSh0aGlzLCB7XG4gICAgICAgICAgICAgICAgICAgIC8vc25hcHNob3QsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IHJlZi5zdG9yZUlkLFxuICAgICAgICAgICAgICAgICAgICBzdGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgZGF0YVxuICAgICAgICAgICAgICAgIH0sIHRhc2tRdWV1ZSk7XG4gICAgICAgICAgICAgICAgd2hpbGUgKCB0YXNrUXVldWUubGVuZ3RoICkgdGFza1F1ZXVlLnNoaWZ0KCkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKCBpcy5yc1Njb3BlKHN0b3JlLnByb3RvdHlwZSkgKSB7XG4gICAgICAgICAgICAgICAgc3RvcmUgPSB0aGlzLl8uX3Njb3BlWyByZWYuc3RvcmVJZCBdID0gbmV3IHN0b3JlKHsgJHBhcmVudDogdGhpcyB9LCB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiB0aGlzLl9pZCArICcvJyArIHJlZi5zdG9yZUlkLFxuICAgICAgICAgICAgICAgICAgICAvL2F1dG9EZXN0cm95OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgIC8vcGFyZW50OiB0aGlzXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgLy90aGlzLl8uX3Njb3BlWyByZWYuc3RvcmVJZCBdLnJldGFpbihcInNjb3BlZENoaWxkU2NvcGVcIik7XG4gICAgICAgICAgICAgICAgLy90aGlzLl93YXRjaFN0b3JlKHJlZi5zdG9yZUlkKTtcbiAgICAgICAgICAgICAgICBpZiAoIHJlZi5wYXRoLmxlbmd0aCA+IDEgKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLl8uX3Njb3BlWyByZWYuc3RvcmVJZCBdLm1vdW50KHJlZi5wYXRoLnNsaWNlKDEpLmpvaW4oJy4nKSwgc25hcHNob3QsIHN0YXRlLCBkYXRhKVxuICAgICAgICAgICAgICAgIC8vZWxzZSByZXR1cm4gdGhpcy5fLl9zY29wZVsgcmVmLnN0b3JlSWQgXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vaWYgKCBzbmFwc2hvdCAmJiBpcy5yc1Njb3BlKHN0b3JlKSAmJiAoIHNuYXAgPSBrZXlXYWxrbkdldChzbmFwc2hvdCxcbiAgICAgICAgICAgIC8vIHN0b3JlLl9pZCkgKSAmJiBzbmFwWyAnLycgXSApIHsgcmV0dXJuIHN0b3JlLm1vdW50KE9iamVjdC5rZXlzKHNuYXBbICcvJ1xuICAgICAgICAgICAgLy8gXSkpIH0gZWxzZSBpZiAoIHNuYXBzaG90ICYmIGlzLnJzU3RvcmUoc3RvcmUpICkgc3RvcmUucmVzdG9yZSgpO1xuICAgICAgICAgICAgaWYgKCBpcy5yc1N0b3JlKHN0b3JlKSApIHtcbiAgICAgICAgICAgICAgICBpZiAoIHN0YXRlICE9PSB1bmRlZmluZWQgJiYgZGF0YSA9PT0gdW5kZWZpbmVkIClcbiAgICAgICAgICAgICAgICAgICAgc3RvcmUuc2V0U3RhdGUoc3RhdGUpO1xuICAgICAgICAgICAgICAgIGVsc2UgaWYgKCBzdGF0ZSAhPT0gdW5kZWZpbmVkIClcbiAgICAgICAgICAgICAgICAgICAgc3RvcmUuc3RhdGUgPSBzdGF0ZTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAoIGRhdGEgIT09IHVuZGVmaW5lZCApXG4gICAgICAgICAgICAgICAgICAgIHN0b3JlLnB1c2goZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl93YXRjaFN0b3JlKHJlZi5zdG9yZUlkKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIHJldHVybiB0aGlzLl8uX3Njb3BlWyByZWYuc3RvcmVJZCBdO1xuICAgIH1cbiAgICBcbiAgICBfd2F0Y2hTdG9yZSggaWQsIHN0YXRlLCBkYXRhICkge1xuICAgICAgICBpZiAoICF0aGlzLl8uX2xpc3RlbmluZ1sgaWQgXSAmJiAhaXMuZm4odGhpcy5fLl9zY29wZVsgaWQgXSkgKSB7XG4gICAgICAgICAgICAvL2lmICggaXMucnNTdG9yZSh0aGlzLl8uX3Njb3BlWyBpZCBdKSApIHtcbiAgICAgICAgICAgICF0aGlzLl8uX3Njb3BlWyBpZCBdLl9hdXRvRGVzdHJveSAmJiB0aGlzLl8uX3Njb3BlWyBpZCBdLnJldGFpbihcInNjb3BlZFwiKTtcbiAgICAgICAgICAgICF0aGlzLl8uX3Njb3BlWyBpZCBdLmlzU3RhYmxlKCkgJiYgdGhpcy53YWl0KGlkKTtcbiAgICAgICAgICAgIHRoaXMuXy5fc2NvcGVbIGlkIF0ub24oXG4gICAgICAgICAgICAgICAgdGhpcy5fLl9saXN0ZW5pbmdbIGlkIF0gPSB7XG4gICAgICAgICAgICAgICAgICAgICdkZXN0cm95JyA6IHMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuXy5fbGlzdGVuaW5nWyBpZCBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fLl9zY29wZVsgaWQgXSA9IHRoaXMuXy5fc2NvcGVbIGlkIF0uY29uc3RydWN0b3I7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICd1cGRhdGUnICA6IHMgPT4gdGhpcy5wcm9wYWcoKSxcbiAgICAgICAgICAgICAgICAgICAgJ3N0YWJsZScgIDogcyA9PiB0aGlzLnJlbGVhc2UoaWQpLFxuICAgICAgICAgICAgICAgICAgICAndW5zdGFibGUnOiBzID0+IHRoaXMud2FpdChpZClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogTWl4IHRhcmdldEN0eCBvbiB0aGlzIHNjb3BlXG4gICAgICogTWl4ZWQgc2NvcGUgcGFyZW50cyBhcmUgTk9UIG1hcHBlZFxuICAgICAqIEBwYXJhbSB0YXJnZXRDdHhcbiAgICAgKi9cbiAgICBtaXhpbiggdGFyZ2V0Q3R4ICkge1xuICAgICAgICBsZXQgcGFyZW50ID0gdGhpcy5wYXJlbnQsIGxpc3RzO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fLl9taXhlZC5wdXNoKHRhcmdldEN0eClcbiAgICAgICAgdGFyZ2V0Q3R4LnJldGFpbihcIm1peGVkVG9cIik7XG4gICAgICAgIGlmICggIXRhcmdldEN0eC5fc3RhYmxlIClcbiAgICAgICAgICAgIHRoaXMud2FpdCh0YXJnZXRDdHguX2lkKTtcbiAgICAgICAgdGhpcy5fLl9taXhlZExpc3QucHVzaChsaXN0cyA9IHtcbiAgICAgICAgICAgICdzdGFibGUnICA6IHMgPT4gdGhpcy5yZWxlYXNlKHRhcmdldEN0eC5faWQpLFxuICAgICAgICAgICAgJ3Vuc3RhYmxlJzogcyA9PiB0aGlzLndhaXQodGFyZ2V0Q3R4Ll9pZCksXG4gICAgICAgICAgICAndXBkYXRlJyAgOiBzID0+IHRoaXMuX3Byb3BhZygpXG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgLy90aGlzLmFjdGlvbnMgPSB7fTtcbiAgICAgICAgLy90aGlzLnN0b3JlcyAgPSB7fTtcbiAgICAgICAgLy90aGlzLnN0YXRlICAgPSB7fTtcbiAgICAgICAgLy90aGlzLmRhdGEgICAgPSB7fTtcbiAgICAgICAgdGFyZ2V0Q3R4Lm9uKGxpc3RzKTtcbiAgICAgICAgXG4gICAgICAgIC8vIHJlc2V0IHByb3Rvc1xuICAgICAgICAvLyBwdXNoIG5ldyBwcm90byB3aXRoIHBhcmVudFxuICAgICAgICBfX3Byb3RvX19wdXNoKHRoaXMsICdhY3Rpb25zJywgcGFyZW50KTtcbiAgICAgICAgX19wcm90b19fcHVzaCh0aGlzLCAnc3RvcmVzJywgcGFyZW50KTtcbiAgICAgICAgX19wcm90b19fcHVzaCh0aGlzLCAnc3RhdGUnLCBwYXJlbnQpO1xuICAgICAgICBfX3Byb3RvX19wdXNoKHRoaXMsICdkYXRhJywgcGFyZW50KTtcbiAgICAgICAgLy8gcHJpbnQgbG9jYWx6IGFjY2Vzc29yc1xuICAgICAgICB0aGlzLnJlbGluayh0aGlzLl8uX3Njb3BlLCB0aGlzLCBmYWxzZSwgdHJ1ZSk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl8uX21peGVkLmZvckVhY2goXG4gICAgICAgICAgICBjdHggPT4ge1xuICAgICAgICAgICAgICAgIC8vIHB1c2ggcHJvdG9zXG4gICAgICAgICAgICAgICAgX19wcm90b19fcHVzaCh0aGlzLCAnYWN0aW9ucycpO1xuICAgICAgICAgICAgICAgIF9fcHJvdG9fX3B1c2godGhpcywgJ3N0b3JlcycpO1xuICAgICAgICAgICAgICAgIF9fcHJvdG9fX3B1c2godGhpcywgJ3N0YXRlJyk7XG4gICAgICAgICAgICAgICAgX19wcm90b19fcHVzaCh0aGlzLCAnZGF0YScpO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RvcmVzLl9fb3JpZ2luID0gXCJtaXhlZCBcIiArIGN0eC5faWQ7XG4gICAgICAgICAgICAgICAgLy8gd3JpdGUgbWl4ZWQgYWNjZXNzb3JzXG4gICAgICAgICAgICAgICAgY3R4LnJlbGluayhjdHguXy5fc2NvcGUsIHRoaXMsIHRydWUsIHRydWUpXG4gICAgICAgICAgICB9XG4gICAgICAgIClcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogUmVnaXN0ZXIgc3RvcmVzIGluIHN0b3Jlc01hcCAmIGxpbmsgdGhlbSBpbiB0aGUgcHJvdG9zXG4gICAgICogQHBhcmFtIHN0b3Jlc01hcFxuICAgICAqIEBwYXJhbSBzdGF0ZVxuICAgICAqIEBwYXJhbSBkYXRhXG4gICAgICovXG4gICAgcmVnaXN0ZXIoIHN0b3Jlc01hcCwgc3RhdGUgPSB7fSwgZGF0YSA9IHt9ICkge1xuICAgICAgICB0aGlzLnJlbGluayhzdG9yZXNNYXAsIHRoaXMsIGZhbHNlLCBmYWxzZSk7XG4gICAgICAgIE9iamVjdC5rZXlzKHN0b3Jlc01hcCkuZm9yRWFjaChcbiAgICAgICAgICAgIGlkID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIGlkID09IFwiJHBhcmVudFwiICkgcmV0dXJuO1xuICAgICAgICAgICAgICAgIGlmICggc3RvcmVzTWFwWyBpZCBdLnNpbmdsZXRvbiB8fCAoIGlzLmZuKHN0b3Jlc01hcFsgaWQgXSkgJiYgKCBzdGF0ZVsgaWQgXSB8fCBkYXRhWyBpZCBdICkgKSApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbW91bnQoaWQsIHVuZGVmaW5lZCwgc3RhdGVbIGlkIF0sIGRhdGFbIGlkIF0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKCBzdGF0ZVsgaWQgXSB8fCBkYXRhWyBpZCBdICkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIGRhdGFbIGlkIF0gKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIHN0YXRlWyBpZCBdIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3Jlc1sgaWQgXS5zdGF0ZSA9IHN0YXRlWyBpZCBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9yZXNbIGlkIF0ucHVzaChkYXRhWyBpZCBdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICggc3RhdGVbIGlkIF0gKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3Jlc1sgaWQgXS5zZXRTdGF0ZShzdGF0ZVsgaWQgXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3dhdGNoU3RvcmUoaWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgICAgICBcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogTWFwIHNyY0N0eCBzdG9yZSdzIG9uIHRhcmdldEN0eCBoZWFkZXJzIHByb3RvJ3NcbiAgICAgKiBAcGFyYW0gc3JjQ3R4XG4gICAgICogQHBhcmFtIHRhcmdldEN0eFxuICAgICAqIEBwYXJhbSBzdGF0ZVxuICAgICAqIEBwYXJhbSBkYXRhXG4gICAgICovXG4gICAgcmVsaW5rKCBzcmNDdHgsIHRhcmdldEN0eCA9IHRoaXMsIGV4dGVybmFsLCBmb3JjZSApIHtcbiAgICAgICAgbGV0IGxjdHggPSB0YXJnZXRDdHguXy5zdG9yZXMucHJvdG90eXBlO1xuICAgICAgICBPYmplY3Qua2V5cyhzcmNDdHgpXG4gICAgICAgICAgICAgIC5mb3JFYWNoKFxuICAgICAgICAgICAgICAgICAgaWQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGlmICggIWZvcmNlICYmIHRhcmdldEN0eC5fLl9zY29wZVsgaWQgXSA9PT0gc3JjQ3R4WyBpZCBdIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRDdHguXy5fc2NvcGVbIGlkIF0gJiYgKCB0YXJnZXRDdHguXy5fc2NvcGVbIGlkIF0uY29uc3RydWN0b3IgPT09IHNyY0N0eFsgaWQgXSApIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgIGlmICggIWZvcmNlICYmIHRhcmdldEN0eC5fLl9zY29wZVsgaWQgXSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCAhZXh0ZXJuYWwgJiYgIWlzLmZuKHRhcmdldEN0eC5fLl9zY29wZVsgaWQgXSkgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmluZm8oXCJSZXNjb3BlIFN0b3JlIDogXCIsIGlkLCBcIiBhbHJlYWR5IGV4aXN0IGluIHRoaXMgc2NvcGUgISAoIEhvdCBzd2l0Y2hpbmcgdGhlIHN0b3JlIClcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdG1wICAgICAgICAgICAgICAgICAgPSB0YXJnZXRDdHguXy5fc2NvcGVbIGlkIF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRDdHguXy5fc2NvcGVbIGlkIF0gPSB0YXJnZXRDdHguXy5fc2NvcGVbIGlkIF0uY29uc3RydWN0b3I7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9tb3VudChpZCwgbnVsbCwgdG1wLnN0YXRlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRtcC5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3RhcmdldEN0eC5fLl9zY29wZVsgaWQgXS5fX3Byb3RvX18gPSB0bXAuX19wcm90b19fO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmICggIWV4dGVybmFsICYmIGlzLmZuKHRhcmdldEN0eC5fLl9zY29wZVsgaWQgXSkgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0Q3R4Ll8uX3Njb3BlWyBpZCBdID0gc3JjQ3R4WyBpZCBdO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICggIWZvcmNlICYmICFleHRlcm5hbCApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuXy5fc2NvcGVbIGlkIF0gPSBzcmNDdHhbIGlkIF07XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBsY3R4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW51bWVyYWJsZSAgOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0ICAgICAgICAgOiAoKSA9PiB0aGlzLl8uX3Njb3BlWyBpZCBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgIGlmICggaWQgPT0gXCIkcGFyZW50XCIgKSByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRDdHguXy5zdGF0ZS5wcm90b3R5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnVtZXJhYmxlICA6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXQgICAgICAgICA6ICgpID0+ICggdGhpcy5fLl9zY29wZVsgaWQgXSAmJiB0aGlzLl8uX3Njb3BlWyBpZCBdLnN0YXRlICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXQgICAgICAgICA6ICggdiApID0+ICggdGhpcy5fbW91bnQoaWQsIHVuZGVmaW5lZCwgdikgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldEN0eC5fLmRhdGEucHJvdG90eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW51bWVyYWJsZSAgOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0ICAgICAgICAgOiAoKSA9PiAoIHRoaXMuXy5fc2NvcGVbIGlkIF0gJiYgdGhpcy5fLl9zY29wZVsgaWQgXS5kYXRhICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXQgICAgICAgICA6ICggdiApID0+ICggdGhpcy5fbW91bnQoaWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB2KSApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgIGxldCBhY3Rpb25zICAgICAgID0gc3JjQ3R4WyBpZCBdIGluc3RhbmNlb2YgU2NvcGUuU3RvcmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gc3JjQ3R4WyBpZCBdLmNvbnN0cnVjdG9yLmFjdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogc3JjQ3R4WyBpZCBdLmFjdGlvbnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZUFjdGlvbnMgPSB0YXJnZXRDdHguXy5hY3Rpb25zLnByb3RvdHlwZTtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoIGlzLnJzU2NvcGUodGhpcy5fLl9zY29wZVsgaWQgXS5wcm90b3R5cGUpIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbW91bnQoaWQpO1xuICAgICAgICAgICAgICAgICAgICAgIGlmICggaXMucnNTY29wZSh0aGlzLl8uX3Njb3BlWyBpZCBdKSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlQWN0aW9uc1sgaWQgXSA9IHRoaXMuXy5fc2NvcGVbIGlkIF0uYWN0aW9ucztcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKCAhaXMucnNTdG9yZSh0aGlzLl8uX3Njb3BlWyBpZCBdKSAmJiAhaXMucnNTdG9yZSh0aGlzLl8uX3Njb3BlWyBpZCBdLnByb3RvdHlwZSkgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgYWN0aW9ucyAmJlxuICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKGFjdGlvbnMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZvckVhY2goXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICggYWN0ICkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBhY3RpdmVBY3Rpb25zLmhhc093blByb3BlcnR5KGFjdCkgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZUFjdGlvbnNbIGFjdCBdLl9fdGFyZ2V0U3RvcmVzKys7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVBY3Rpb25zWyBhY3QgXSAgICAgICAgICAgICAgICA9IHRoaXMuZGlzcGF0Y2guYmluZCh0aGlzLCBhY3QpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZUFjdGlvbnNbIGFjdCBdLl9fdGFyZ2V0U3RvcmVzID0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgKVxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBCaW5kIHN0b3JlcyBmcm9tIHRoaXMgc2NvcGUsIGhpcyBwYXJlbnRzIGFuZCBtaXhlZCBzY29wZVxuICAgICAqXG4gICAgICogQHBhcmFtIG9iaiB7UmVhY3QuQ29tcG9uZW50fFN0b3JlfGZ1bmN0aW9ufVxuICAgICAqIEBwYXJhbSBrZXkge3N0cmluZ30gc3RvcmVzIGtleXMgdG8gYmluZCB1cGRhdGVzXG4gICAgICogQHBhcmFtIGFzXG4gICAgICogQHBhcmFtIHNldEluaXRpYWwge2Jvb2x9IGZhbHNlIHRvIG5vdCBwcm9wYWcgaW5pdGlhbCB2YWx1ZSAoZGVmYXVsdCA6IHRydWUpXG4gICAgICovXG4gICAgYmluZCggb2JqLCBrZXksIGFzLCBzZXRJbml0aWFsID0gdHJ1ZSwgcmV2TWFwID0ge30gKSB7XG4gICAgICAgIGxldCBsYXN0UmV2cywgZGF0YSwgcmVmS2V5cztcbiAgICAgICAgaWYgKCBrZXkgJiYgIWlzLmFycmF5KGtleSkgKVxuICAgICAgICAgICAga2V5ID0gWyBrZXkgXTtcbiAgICAgICAgXG4gICAgICAgIGlmICggYXMgPT09IGZhbHNlIHx8IGFzID09PSB0cnVlICkge1xuICAgICAgICAgICAgc2V0SW5pdGlhbCA9IGFzO1xuICAgICAgICAgICAgYXMgICAgICAgICA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJlZktleXMgPSBrZXlcbiAgICAgICAgICAgIC5tYXAoaWQgPT4gKCBpcy5zdHJpbmcoaWQpID8gaWQgOiBpZC5uYW1lICkpXG4gICAgICAgICAgICAubWFwKGlkID0+ICggdGhpcy5wYXJzZVJlZihpZCkgKSk7XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgdGhpcy5fLmZvbGxvd2Vycy5wdXNoKFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIG9iaixcbiAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgYXMgfHwgdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIGxhc3RSZXZzID0gcmVmS2V5cy5yZWR1Y2UoKCByZXZzLCByZWYgKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldnNbIHJlZi5zdG9yZUlkIF0gPSByZXZzWyByZWYuc3RvcmVJZCBdIHx8IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldiA6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICByZWZzOiBbXVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICByZXZzWyByZWYuc3RvcmVJZCBdLnJlZnMucHVzaChyZWYpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmV2cztcbiAgICAgICAgICAgICAgICB9LCByZXZNYXApXG4gICAgICAgICAgICBdKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMubW91bnQoa2V5KTtcbiAgICAgICAgdGhpcy5yZXRhaW5TdG9yZXMoT2JqZWN0LmtleXMobGFzdFJldnMpLCAnbGlzdGVuZXJzJyk7XG4gICAgICAgIFxuICAgICAgICBpZiAoIHNldEluaXRpYWwgJiYgdGhpcy5fc3RhYmxlICkge1xuICAgICAgICAgICAgZGF0YSA9IHRoaXMuZ2V0VXBkYXRlcyhsYXN0UmV2cyk7XG4gICAgICAgICAgICBpZiAoICFkYXRhICkgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICBpZiAoIHR5cGVvZiBvYmogIT0gXCJmdW5jdGlvblwiICkge1xuICAgICAgICAgICAgICAgIGlmICggYXMgKSBvYmouc2V0U3RhdGUoeyBbIGFzIF06IGRhdGEgfSk7XG4gICAgICAgICAgICAgICAgZWxzZSBvYmouc2V0U3RhdGUoZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBvYmooZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIFVuIGJpbmQgdGhpcyBzY29wZSBvZmYgdGhlIGdpdmVuIGNvbXBvbmVudC1rZXlzXG4gICAgICogQHBhcmFtIG9ialxuICAgICAqIEBwYXJhbSBrZXlcbiAgICAgKiBAcmV0dXJucyB7QXJyYXkuPCo+fVxuICAgICAqL1xuICAgIHVuQmluZCggb2JqLCBrZXksIGFzICkge1xuICAgICAgICB2YXIgZm9sbG93ZXJzID0gdGhpcy5fLmZvbGxvd2VycyxcbiAgICAgICAgICAgIGkgICAgICAgICA9IGZvbGxvd2VycyAmJiBmb2xsb3dlcnMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGZvbGxvd2VycyAmJiBpLS0gKVxuICAgICAgICAgICAgaWYgKCBmb2xsb3dlcnNbIGkgXVsgMCBdID09PSBvYmogJiZcbiAgICAgICAgICAgICAgICAgKCAnJyArIGZvbGxvd2Vyc1sgaSBdWyAxIF0gKSA9PSAoICcnICsga2V5ICkgJiZcbiAgICAgICAgICAgICAgICAgZm9sbG93ZXJzWyBpIF1bIDIgXSA9PSBhcyApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3Bvc2VTdG9yZXMoT2JqZWN0LmtleXMoZm9sbG93ZXJzWyBpIF1bIDMgXSksICdsaXN0ZW5lcnMnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZm9sbG93ZXJzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogTW91bnQgdGhlIHN0b3JlcyBpbiBzdG9yZXNMaXN0IGZyb20gdGhpcyBzY29wZSwgaXRzIHBhcmVudHMgYW5kIG1peGVkIHNjb3BlXG4gICAgICogQmluZCB0aGVtIHRvICd0bydcbiAgICAgKiBIb29rICd0bycgc28gaXQgd2lsbCBhdXRvIHVuYmluZCBvbiAnZGVzdHJveScgb3IgJ2NvbXBvbmVudFdpbGxVbm1vdW50J1xuICAgICAqIEBwYXJhbSB0b1xuICAgICAqIEBwYXJhbSBzdG9yZXNMaXN0XG4gICAgICogQHBhcmFtIGJpbmRcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSBJbml0aWFsIG91dHB1dHMgb2YgdGhlIHN0b3JlcyBpbiAnc3RvcmVzTGlzdCdcbiAgICAgKi9cbiAgICBtYXAoIHRvLCBzdG9yZXNMaXN0LCBiaW5kID0gdHJ1ZSwgcmV2TWFwICkge1xuICAgICAgICBsZXQgU3RvcmUgICA9IHRoaXMuY29uc3RydWN0b3IuU3RvcmU7XG4gICAgICAgIHN0b3Jlc0xpc3QgID0gaXMuYXJyYXkoc3RvcmVzTGlzdCkgPyBzdG9yZXNMaXN0IDogWyBzdG9yZXNMaXN0IF07XG4gICAgICAgIGxldCByZWZMaXN0ID0gc3RvcmVzTGlzdC5tYXAodGhpcy5wYXJzZVJlZik7XG4gICAgICAgIHRoaXMubW91bnQoc3RvcmVzTGlzdCk7XG4gICAgICAgIGlmICggYmluZCAmJiB0byBpbnN0YW5jZW9mIFN0b3JlICkge1xuICAgICAgICAgICAgU3RvcmUubWFwKHRvLCBzdG9yZXNMaXN0LCB0aGlzLCB0aGlzLCBmYWxzZSlcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICggYmluZCApIHtcbiAgICAgICAgICAgIHRoaXMuYmluZCh0bywgc3RvcmVzTGlzdCwgdW5kZWZpbmVkLCBmYWxzZSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGxldCBtaXhlZENXVW5tb3VudCxcbiAgICAgICAgICAgICAgICB1bk1vdW50S2V5ID0gdG8uaXNSZWFjdENvbXBvbmVudCA/IFwiY29tcG9uZW50V2lsbFVubW91bnRcIiA6IFwiZGVzdHJveVwiO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoIHRvLmhhc093blByb3BlcnR5KHVuTW91bnRLZXkpICkge1xuICAgICAgICAgICAgICAgIG1peGVkQ1dVbm1vdW50ID0gdG9bIHVuTW91bnRLZXkgXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdG9bIHVuTW91bnRLZXkgXSA9ICggLi4uYXJneiApID0+IHtcbiAgICAgICAgICAgICAgICBkZWxldGUgdG9bIHVuTW91bnRLZXkgXTtcbiAgICAgICAgICAgICAgICBpZiAoIG1peGVkQ1dVbm1vdW50IClcbiAgICAgICAgICAgICAgICAgICAgdG9bIHVuTW91bnRLZXkgXSA9IG1peGVkQ1dVbm1vdW50O1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHRoaXMudW5CaW5kKHRvLCBzdG9yZXNMaXN0KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdG9bIHVuTW91bnRLZXkgXSAmJiB0b1sgdW5Nb3VudEtleSBdKC4uLmFyZ3opO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJldk1hcCAmJiB0aGlzLmdldFVwZGF0ZXMocmV2TWFwKSB8fCByZWZMaXN0LnJlZHVjZSgoIGRhdGEsIHJlZiApID0+IHtcbiAgICAgICAgICAgIHdhbGtuU2V0KGRhdGEsIHJlZi5hbGlhcyB8fCByZWYucGF0aCwgdGhpcy5yZXRyaWV2ZShyZWYucGF0aCkpXG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfSwge30pO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBHZXQgY3VycmVudCBkYXRhIHZhbHVlIGZyb20ganNvbiBwYXRoXG4gICAgICogQHBhcmFtIHBhdGhcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfCp9XG4gICAgICovXG4gICAgcmV0cmlldmUoIHBhdGggPSBcIlwiICkge1xuICAgICAgICBwYXRoID0gaXMuc3RyaW5nKHBhdGgpID8gcGF0aC5zcGxpdCgnLicpIDogcGF0aDtcbiAgICAgICAgcmV0dXJuIHBhdGggJiZcbiAgICAgICAgICAgICAgIHRoaXMuc3RvcmVzWyBwYXRoWyAwIF0gXSAmJlxuICAgICAgICAgICAgICAgdGhpcy5zdG9yZXNbIHBhdGhbIDAgXSBdLnJldHJpZXZlICYmXG4gICAgICAgICAgICAgICB0aGlzLnN0b3Jlc1sgcGF0aFsgMCBdIF0ucmV0cmlldmUocGF0aC5zbGljZSgxKSk7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIEdldCBjdXJyZW50IHN0b3JlIGZyb20ganNvbiBwYXRoXG4gICAgICogQHBhcmFtIHBhdGhcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfCp9XG4gICAgICovXG4gICAgcmV0cmlldmVTdG9yZSggcGF0aCA9IFwiXCIgKSB7XG4gICAgICAgIHBhdGggPSBpcy5zdHJpbmcocGF0aCkgPyBwYXRoLnNwbGl0KCcuJykgOiBwYXRoO1xuICAgICAgICByZXR1cm4gcGF0aFxuICAgICAgICAgICAgICAgJiYgcGF0aC5sZW5ndGhcbiAgICAgICAgICAgICAgICYmIChcbiAgICAgICAgICAgICAgIHBhdGgubGVuZ3RoICE9IDEgJiYgdGhpcy5zdG9yZXNbIHBhdGhbIDAgXSBdLnJldHJpZXZlU3RvcmVcbiAgICAgICAgICAgICAgID8gdGhpcy5zdG9yZXNbIHBhdGhbIDAgXSBdLnJldHJpZXZlU3RvcmUocGF0aC5zbGljZSgxKSlcbiAgICAgICAgICAgICAgIDogcGF0aC5sZW5ndGggPT0gMSAmJiB0aGlzLnN0b3Jlc1sgcGF0aFsgMCBdIF1cbiAgICAgICAgICAgICAgICk7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIEdldCBvciB1cGRhdGUgc3RvcmVzUmV2TWFwJ3MgcmV2aXNpb25zXG4gICAgICogQHBhcmFtIHN0b3Jlc1Jldk1hcFxuICAgICAqIEBwYXJhbSBsb2NhbFxuICAgICAqIEByZXR1cm5zIHt7fX1cbiAgICAgKi9cbiAgICBnZXRTdG9yZXNSZXZzKCBzdG9yZXNSZXZNYXAgPSB7fSwgbG9jYWwgKSB7XG4gICAgICAgIGxldCBjdHggPSB0aGlzLl8uX3Njb3BlO1xuICAgICAgICBpZiAoICFzdG9yZXNSZXZNYXAgKSB7XG4gICAgICAgICAgICBzdG9yZXNSZXZNYXAgPSB7fTtcbiAgICAgICAgfVxuICAgICAgICBPYmplY3Qua2V5cyhjdHgpLmZvckVhY2goXG4gICAgICAgICAgICBpZCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCBpZCA9PSBcIiRwYXJlbnRcIiApIHJldHVybjtcbiAgICAgICAgICAgICAgICBpZiAoICFpcy5mbihjdHhbIGlkIF0pXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0b3Jlc1Jldk1hcFsgaWQgXSA9IGN0eFsgaWQgXS5fcmV2O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICggIXN0b3Jlc1Jldk1hcC5oYXNPd25Qcm9wZXJ0eShpZCkgKVxuICAgICAgICAgICAgICAgICAgICBzdG9yZXNSZXZNYXBbIGlkIF0gPSBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICBpZiAoICFsb2NhbCApIHtcbiAgICAgICAgICAgIHRoaXMuXy5fbWl4ZWQucmVkdWNlKCggdXBkYXRlZCwgY3R4ICkgPT4gKCBjdHguZ2V0U3RvcmVzUmV2cyhzdG9yZXNSZXZNYXApLCBzdG9yZXNSZXZNYXAgKSwgc3RvcmVzUmV2TWFwKTtcbiAgICAgICAgICAgIHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LmdldFN0b3Jlc1JldnMoc3RvcmVzUmV2TWFwKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3RvcmVzUmV2TWFwO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBHZXQgdXBkYXRlZCBvdXRwdXQgYmFzaW5nIHN0b3Jlc1Jldk1hcCdzIHJldmlzaW9ucy5cbiAgICAgKiBJZiBhIHN0b3JlIGluICdzdG9yZXNSZXZNYXAnIHdhcyB1cGRhdGVkOyBhZGQgaXQgdG8gJ291dHB1dCcgJiB1cGRhdGUgc3RvcmVzUmV2TWFwXG4gICAgICogQHBhcmFtIHN0b3Jlc1Jldk1hcFxuICAgICAqIEBwYXJhbSBvdXRwdXRcbiAgICAgKiBAcGFyYW0gdXBkYXRlZFxuICAgICAqIEByZXR1cm5zIHsqfHt9fVxuICAgICAqL1xuICAgIGdldFJlZnNVcGRhdGVzKCByZWZzLCByZXZNYXAsIG91dHB1dCApIHtcbiAgICAgICAgXG4gICAgICAgIHJldk1hcCA9IHJldk1hcCB8fCByZWZzXG4gICAgICAgICAgICAubWFwKGlkID0+ICggaXMuc3RyaW5nKGlkKSA/IGlkIDogaWQubmFtZSApKVxuICAgICAgICAgICAgLm1hcChpZCA9PiAoIHRoaXMucGFyc2VSZWYoaWQpICkpXG4gICAgICAgICAgICAucmVkdWNlKCggcmV2cywgcmVmICkgPT4ge1xuICAgICAgICAgICAgICAgIHJldnNbIHJlZi5zdG9yZUlkIF0gPSByZXZzWyByZWYuc3RvcmVJZCBdIHx8IHtcbiAgICAgICAgICAgICAgICAgICAgcmV2IDogMCxcbiAgICAgICAgICAgICAgICAgICAgcmVmczogW11cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHJldnNbIHJlZi5zdG9yZUlkIF0ucmVmcy5wdXNoKHJlZik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJldnM7XG4gICAgICAgICAgICB9LCB7fSk7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gdGhpcy5nZXRVcGRhdGVzKHJldk1hcCwgb3V0cHV0KVxuICAgICAgICBcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogR2V0IG9yIHVwZGF0ZSBvdXRwdXQgYmFzaW5nIHN0b3Jlc1Jldk1hcCdzIHJldmlzaW9ucy5cbiAgICAgKiBJZiBhIHN0b3JlIGluICdzdG9yZXNSZXZNYXAnIHdhcyB1cGRhdGVkOyBhZGQgaXQgdG8gJ291dHB1dCcgJiB1cGRhdGUgc3RvcmVzUmV2TWFwXG4gICAgICogQHBhcmFtIHN0b3Jlc1Jldk1hcFxuICAgICAqIEBwYXJhbSBvdXRwdXRcbiAgICAgKiBAcGFyYW0gdXBkYXRlZFxuICAgICAqIEByZXR1cm5zIHsqfHt9fVxuICAgICAqL1xuICAgIGdldFVwZGF0ZXMoIHN0b3Jlc1Jldk1hcCwgb3V0cHV0LCB1cGRhdGVkICkge1xuICAgICAgICBsZXQgY3R4ID0gdGhpcy5fLl9zY29wZTtcbiAgICAgICAgXG4gICAgICAgIG91dHB1dCA9IG91dHB1dCB8fCB7fTtcbiAgICAgICAgT2JqZWN0LmtleXMoY3R4KS5mb3JFYWNoKFxuICAgICAgICAgICAgaWQgPT4ge1xuICAgICAgICAgICAgICAgIGlmICggaWQgPT0gXCIkcGFyZW50XCIgKSByZXR1cm47XG4gICAgICAgICAgICAgICAgaWYgKCAhb3V0cHV0Lmhhc093blByb3BlcnR5KGlkKSAmJiAhaXMuZm4oY3R4WyBpZCBdKVxuICAgICAgICAgICAgICAgICAgICAgJiYgKCAhc3RvcmVzUmV2TWFwXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHx8ICggc3RvcmVzUmV2TWFwLmhhc093blByb3BlcnR5KGlkKSAmJiBzdG9yZXNSZXZNYXBbIGlkIF0gPT09IHVuZGVmaW5lZCApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHx8ICEoICFzdG9yZXNSZXZNYXAuaGFzT3duUHJvcGVydHkoaWQpIHx8IGN0eFsgaWQgXS5fcmV2IDw9IHN0b3Jlc1Jldk1hcFsgaWQgXS5yZXYgKSApXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVkICAgICAgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBvdXRwdXRbIGlkIF0gPSB0aGlzLmRhdGFbIGlkIF07XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpZiAoIHN0b3Jlc1Jldk1hcCAmJiBzdG9yZXNSZXZNYXAuaGFzT3duUHJvcGVydHkoaWQpICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmVzUmV2TWFwWyBpZCBdICAgICA9IHN0b3Jlc1Jldk1hcFsgaWQgXSB8fCB7IHJldjogMCwgcmVmczogW10gfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3Jlc1Jldk1hcFsgaWQgXS5yZXYgPSBjdHhbIGlkIF0uX3JldjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3Jlc1Jldk1hcFsgaWQgXS5yZWZzLmZvckVhY2goXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLndhcm4oXCJ1cGRhdGUgcmVmIFwiLCByZWYucmVmLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnJldHJpZXZlKHJlZi5wYXRoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dFsgcmVmLmFsaWFzIF0gPSB0aGlzLnJldHJpZXZlKHJlZi5wYXRoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUud2FybihcInVwZGF0ZSBcIiwgaWQsIHRoaXMuZGF0YVtpZF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0WyBpZCBdID0gdGhpcy5kYXRhWyBpZCBdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgdXBkYXRlZCA9IHRoaXMuXy5fbWl4ZWQucmVkdWNlUmlnaHQoKCB1cGRhdGVkLCBjdHggKSA9PiAoIGN0eC5nZXRVcGRhdGVzKHN0b3Jlc1Jldk1hcCwgb3V0cHV0LCB1cGRhdGVkKSB8fCB1cGRhdGVkICksIHVwZGF0ZWQpO1xuICAgICAgICB1cGRhdGVkID0gdGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuZ2V0VXBkYXRlcyhzdG9yZXNSZXZNYXAsIG91dHB1dCwgdXBkYXRlZCkgfHwgdXBkYXRlZDtcbiAgICAgICAgcmV0dXJuIHVwZGF0ZWQgJiYgb3V0cHV0O1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBSZWN1cnNpdmVseSBnZXQgYWxsIGNoaWxkIHNjb3Blc1xuICAgICAqIEBwYXJhbSBjaGlsZHNcbiAgICAgKiBAcmV0dXJucyB7QXJyYXl9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfZ2V0QWxsQ2hpbGRzKCBjaGlsZHMgPSBbXSApIHtcbiAgICAgICAgY2hpbGRzLnB1c2goLi4udGhpcy5fLmNoaWxkU2NvcGVzKTtcbiAgICAgICAgdGhpcy5fLmNoaWxkU2NvcGVzLmZvckVhY2goXG4gICAgICAgICAgICBjdHggPT4ge1xuICAgICAgICAgICAgICAgIGN0eC5fZ2V0QWxsQ2hpbGRzKGNoaWxkcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiBjaGlsZHM7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIFNlcmlhbGl6ZSBhbGwgYWN0aXZlIHN0b3JlcyBzdGF0ZSAmIGRhdGEgaW4gZXZlcnkgY2hpbGRzICYgbWl4ZWQgc2NvcGVzXG4gICAgICpcbiAgICAgKiBTY29wZXMgd2l0aG91dCBrZXkgb3IgaWQgYXJlIGlnbm9yZWRcbiAgICAgKiBAcGFyYW0gb3V0cHV0XG4gICAgICogQHJldHVybnMge3t9fVxuICAgICAqL1xuICAgIHNlcmlhbGl6ZSggY2ZnID0ge30sIG91dHB1dCA9IHt9ICkge1xuICAgICAgICBsZXQgY3R4ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA9IHRoaXMuXy5fc2NvcGUsXG4gICAgICAgICAgICB7IGFsaWFzLCB3aXRoQ2hpbGRzID0gdHJ1ZSwgd2l0aFBhcmVudHMsIHdpdGhNaXhlZCA9IHRydWUsIG5vcmVmcyB9ID0gY2ZnO1xuICAgICAgICBcbiAgICAgICAgaWYgKCBrZXlXYWxrbkdldChvdXRwdXQsIHRoaXMuX2lkKSApXG4gICAgICAgICAgICByZXR1cm4gb3V0cHV0O1xuICAgICAgICBcbiAgICAgICAgLy9AdG9kbyA6IGJldHRlciBzZXJpYWxpemUgbWV0aG9kXG4gICAgICAgIGtleVdhbGtuU2V0KG91dHB1dCwgdGhpcy5faWQsIHt9KTtcbiAgICAgICAgXG4gICAgICAgIE9iamVjdC5rZXlzKGN0eCkuZm9yRWFjaChcbiAgICAgICAgICAgIGlkID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIGlkID09IFwiJHBhcmVudFwiIHx8IGlzLmZuKGN0eFsgaWQgXSkgKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY3R4WyBpZCBdLnNlcmlhbGl6ZShjZmcsIG91dHB1dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIClcbiAgICAgICAgXG4gICAgICAgIHdpdGhQYXJlbnRzICYmIHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LnNlcmlhbGl6ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aENoaWxkICA6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpdGhQYXJlbnRzOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpdGhNaXhlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JlZnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIG91dHB1dCk7XG4gICAgICAgIFxuICAgICAgICB3aXRoQ2hpbGRzICYmIHRoaXMuXy5jaGlsZFNjb3Blcy5mb3JFYWNoKFxuICAgICAgICAgICAgY3R4ID0+IHtcbiAgICAgICAgICAgICAgICAhY3R4Ll8uaXNMb2NhbElkICYmIGN0eC5zZXJpYWxpemUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aENoaWxkICA6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRoUGFyZW50czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRoTWl4ZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JlZnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgb3V0cHV0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgXG4gICAgICAgIHdpdGhNaXhlZCAmJiB0aGlzLl8uX21peGVkLmZvckVhY2goXG4gICAgICAgICAgICBjdHggPT4ge1xuICAgICAgICAgICAgICAgICFjdHguXy5pc0xvY2FsSWQgJiYgY3R4LnNlcmlhbGl6ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRoQ2hpbGQgIDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRoUGFyZW50czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRoTWl4ZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JlZnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgb3V0cHV0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgXG4gICAgICAgIGlmICggYWxpYXMgKSB7XG4gICAgICAgICAgICBvdXRwdXQgPSBPYmplY3Qua2V5cyhvdXRwdXQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAucmVkdWNlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICggaCwgayApID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaFsgay5zdGFydHNXaXRoKGFsaWFzKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGFsaWFzICsgay5zdWJzdHIoYWxpYXMubGVuZ3RoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGsgXSA9IG91dHB1dFsgayBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb3V0cHV0O1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBSZXN0b3JlIHN0YXRlICYgZGF0YSBmcm9tIHRoZSBzZXJpYWxpemUgZm5cbiAgICAgKiBAcGFyYW0gc25hcHNob3RcbiAgICAgKiBAcGFyYW0gZm9yY2VcbiAgICAgKi9cbiAgICByZXN0b3JlKCBzbmFwc2hvdCwgY2ZnID0ge30sIGZvcmNlID0gaXMuYm9vbChjZmcpICYmIGNmZyApIHtcbiAgICAgICAgbGV0IGN0eCAgPSB0aGlzLl8uX3Njb3BlLCBzbmFwO1xuICAgICAgICBzbmFwc2hvdCA9IHNuYXBzaG90XG4gICAgICAgICAgICAgICAgICAgJiYga2V5V2Fsa25HZXQoc25hcHNob3QsIHRoaXMuX2lkKVxuICAgICAgICAgICAgICAgICAgIHx8IHRoaXMudGFrZVNuYXBzaG90QnlLZXkodGhpcy5faWQpO1xuICAgICAgICBcbiAgICAgICAgaWYgKCAhc25hcHNob3QgKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fLnNuYXBzaG90ID0gc25hcHNob3Q7XG4gICAgICAgIFxuICAgICAgICBzbmFwID0gc25hcHNob3RbICcvJyBdO1xuICAgICAgICBcbiAgICAgICAgc25hcCAmJiBPYmplY3Qua2V5cyhzbmFwKS5mb3JFYWNoKFxuICAgICAgICAgICAgbmFtZSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCBuYW1lID09IFwiJHBhcmVudFwiICkgcmV0dXJuO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmICggY3R4WyBuYW1lIF0gKSB7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpZiAoIGZvcmNlICYmICFpcy5mbihjdHhbIG5hbWUgXSkgKVxuICAgICAgICAgICAgICAgICAgICAgICAgY3R4WyBuYW1lIF0uZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbW91bnQobmFtZSk7Ly8gcXVpZXRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIClcbiAgICAgICAgXG4gICAgICAgIHRoaXMuXy5fbWl4ZWQuZm9yRWFjaChcbiAgICAgICAgICAgIGN0eCA9PiB7XG4gICAgICAgICAgICAgICAgIWN0eC5fLmlzTG9jYWxJZCAmJiBjdHgucmVzdG9yZSh1bmRlZmluZWQsIGZvcmNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuXy5jaGlsZFNjb3Blcy5mb3JFYWNoKFxuICAgICAgICAgICAgY3R4ID0+IHtcbiAgICAgICAgICAgICAgICAhY3R4Ll8uaXNMb2NhbElkICYmIGN0eC5yZXN0b3JlKHVuZGVmaW5lZCwgZm9yY2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICBcbiAgICB9XG4gICAgXG4gICAgZ2V0U25hcHNob3RCeUtleSgga2V5LCBsb2NhbCApIHtcbiAgICAgICAgLy8gb25seSBoYXZlIHRoZSBsb2NhbCBzbmFwXG4gICAgICAgIGlmICggdGhpcy5fLnNuYXBzaG90ICYmIGtleS5zdGFydHNXaXRoKHRoaXMuX2lkKSApIHtcbiAgICAgICAgICAgIGxldCBvYmogPSBrZXlXYWxrbkdldCh0aGlzLl8uc25hcHNob3QsIGtleS5zdWJzdHIodGhpcy5faWQubGVuZ3RoKSlcbiAgICAgICAgICAgIC8vaWYgKCBvYmogKSB7XG4gICAgICAgICAgICAvLyAgICB0aGlzLmRlbGV0ZVNuYXBzaG90QnlLZXkoa2V5KTtcbiAgICAgICAgICAgIC8vfVxuICAgICAgICAgICAgcmV0dXJuIG9iajtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHJldHVybiAhbG9jYWxcbiAgICAgICAgICAgICAgICAgICAgJiYgdGhpcy5wYXJlbnRcbiAgICAgICAgICAgICAgICAgICAgJiYgdGhpcy5wYXJlbnQuZ2V0U25hcHNob3RCeUtleShrZXkpXG4gICAgICAgICAgICAgICAgICAgIHx8XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcmVzLiRwYXJlbnRcbiAgICAgICAgICAgICAgICAgICAgJiYgdGhpcy5zdG9yZXMuJHBhcmVudC5nZXRTbmFwc2hvdEJ5S2V5KGtleSk7XG4gICAgICAgIFxuICAgIH1cbiAgICBcbiAgICBnZXRTbmFwc2hvdEJ5S2V5RXh0KCBzbmFwc2hvdCwga2V5LCBsb2NhbCApIHtcbiAgICAgICAgLy8gb25seSBoYXZlIHRoZSBsb2NhbCBzbmFwXG4gICAgICAgIGlmICggc25hcHNob3QgKSB7XG4gICAgICAgICAgICBsZXQgb2JqID0ga2V5V2Fsa25HZXQoc25hcHNob3QsIGtleSlcbiAgICAgICAgICAgIHJldHVybiBvYmo7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxuICAgIFxuICAgIHRha2VTbmFwc2hvdEJ5S2V5KCBrZXksIGxvY2FsICkge1xuICAgICAgICBpZiAoIHRoaXMuXy5zbmFwc2hvdCAmJiBrZXkuc3RhcnRzV2l0aCh0aGlzLl9pZCkgKSB7XG4gICAgICAgICAgICBsZXQgb2JqID0ga2V5V2Fsa25HZXQodGhpcy5fLnNuYXBzaG90LCBrZXkuc3Vic3RyKHRoaXMuX2lkLmxlbmd0aCkpXG4gICAgICAgICAgICBpZiAoIG9iaiApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZVNuYXBzaG90QnlLZXkoa2V5LCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBvYmo7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSByZXR1cm4gIWxvY2FsXG4gICAgICAgICAgICAgICAgICAgICYmIHRoaXMucGFyZW50XG4gICAgICAgICAgICAgICAgICAgICYmIHRoaXMucGFyZW50LnRha2VTbmFwc2hvdEJ5S2V5KGtleSlcbiAgICAgICAgICAgICAgICAgICAgfHxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9yZXMuJHBhcmVudFxuICAgICAgICAgICAgICAgICAgICAmJiB0aGlzLnN0b3Jlcy4kcGFyZW50LnRha2VTbmFwc2hvdEJ5S2V5KGtleSk7XG4gICAgfVxuICAgIFxuICAgIGRlbGV0ZVNuYXBzaG90QnlLZXkoIGtleSwgbG9jYWwgKSB7XG4gICAgICAgIGlmICggdGhpcy5fLnNuYXBzaG90ICYmIGtleS5zdGFydHNXaXRoKHRoaXMuX2lkKSApIHtcbiAgICAgICAgICAgIGxldCBvYmogPSBrZXlXYWxrbkdldCh0aGlzLl8uc25hcHNob3QsIGtleS5zdWJzdHIodGhpcy5faWQubGVuZ3RoKS5yZXBsYWNlKC9eKC4qW1xcPnxcXC9dKVteXFw+fFxcL10rJC9pZywgJyQxJykpXG4gICAgICAgICAgICBpZiAoIG9iaiApXG4gICAgICAgICAgICAgICAgZGVsZXRlIG9ialsga2V5LnJlcGxhY2UoL14uKltcXD58XFwvXShbXlxcPnxcXC9dKykkL2lnLCAnJDEnKSBdXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICFsb2NhbFxuICAgICAgICAgICAgICAgJiYgdGhpcy5wYXJlbnRcbiAgICAgICAgICAgICAgICYmIHRoaXMucGFyZW50LmRlbGV0ZVNuYXBzaG90QnlLZXkoa2V5KVxuICAgICAgICAgICAgICAgfHxcbiAgICAgICAgICAgICAgIHRoaXMuc3RvcmVzLiRwYXJlbnRcbiAgICAgICAgICAgICAgICYmIHRoaXMuc3RvcmVzLiRwYXJlbnQuZGVsZXRlU25hcHNob3RCeUtleShrZXkpO1xuICAgIH1cbiAgICBcbiAgICBzZXRTdGF0ZSggcFN0YXRlICkge1xuICAgICAgICBPYmplY3Qua2V5cyhwU3RhdGUpXG4gICAgICAgICAgICAgIC5mb3JFYWNoKGsgPT4gKCB0aGlzLnN0YXRlWyBrIF0gPSBwU3RhdGVbIGsgXSApKVxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBnZXQgYSBwYXJzZWQgcmVmZXJlbmNlXG4gICAgICogQHBhcmFtIF9yZWZcbiAgICAgKiBAcmV0dXJucyB7e3N0b3JlSWQsIHBhdGgsIGFsaWFzOiAqLCByZWY6ICp9fVxuICAgICAqL1xuICAgIHBhcnNlUmVmKCBfcmVmICkge1xuICAgICAgICBpZiAoIHR5cGVvZiBfcmVmICE9PSAnc3RyaW5nJyApIHtcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXIoeyBbIF9yZWYubmFtZSBdOiBfcmVmLnN0b3JlIH0pO1xuICAgICAgICAgICAgX3JlZiA9IF9yZWYubmFtZTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcmVmICA9IF9yZWYuc3BsaXQoJzonKTtcbiAgICAgICAgcmVmWyAwIF0gPSByZWZbIDAgXS5zcGxpdCgnLicpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3RvcmVJZDogcmVmWyAwIF1bIDAgXSxcbiAgICAgICAgICAgIHBhdGggICA6IHJlZlsgMCBdLFxuICAgICAgICAgICAgYWxpYXMgIDogcmVmWyAxIF0gfHwgcmVmWyAwIF1bIHJlZlsgMCBdLmxlbmd0aCAtIDEgXSxcbiAgICAgICAgICAgIHJlZiAgICA6IF9yZWZcbiAgICAgICAgfTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogRGlzcGF0Y2ggYW4gYWN0aW9uIHRvIHRoZSB0b3AgcGFyZW50ICYgbWl4ZWQgc2NvcGVzLCBpbiBhbGwgc3RvcmVzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gYWN0aW9uXG4gICAgICogQHBhcmFtIGRhdGFcbiAgICAgKiBAcmV0dXJucyB7U2NvcGV9XG4gICAgICovXG4gICAgZGlzcGF0Y2goIGFjdGlvbiwgLi4uYXJneiApIHtcbiAgICAgICAgaWYgKCB0aGlzLmRlYWQgKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJEaXNwYXRjaCB3YXMgY2FsbGVkIG9uIGEgZGVhZCBzY29wZSwgY2hlY2sgeW91J3JlIGFzeW5jIGZ1bmN0aW9ucyBpbiB0aGlzIHN0YWNrLi4uXCIsICggbmV3IEVycm9yKCkgKS5zdGFjayk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGJBY3RzID0gdGhpcy5fLl9ib3VuZGVkQWN0aW9ucztcbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5fLl9zY29wZSlcbiAgICAgICAgICAgICAgLmZvckVhY2goXG4gICAgICAgICAgICAgICAgICBpZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKCBpZCA9PSBcIiRwYXJlbnRcIiApIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoICFpcy5mbih0aGlzLl8uX3Njb3BlWyBpZCBdKSApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuXy5fc2NvcGVbIGlkIF0udHJpZ2dlcihhY3Rpb24sIC4uLmFyZ3opO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICApO1xuICAgICAgICBcbiAgICAgICAgaWYgKCBiQWN0cyAmJiBiQWN0cy50ZXN0KGFjdGlvbikgKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fLl9taXhlZC5mb3JFYWNoKCggY3R4ICkgPT4gKCBjdHguZGlzcGF0Y2goYWN0aW9uLCAuLi5hcmd6KSApKTtcbiAgICAgICAgdGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuZGlzcGF0Y2goYWN0aW9uLCAuLi5hcmd6KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIFxuICAgIC8vXG4gICAgdHJpZ2dlcigpIHtcbiAgICAgICAgdGhpcy5kaXNwYXRjaCguLi5hcmd1bWVudHMpO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBvbmNlKCdzdGFibGUnLCBjYilcbiAgICAgKiBAcGFyYW0gb2JqIHtSZWFjdC5Db21wb25lbnR8U3RvcmV8ZnVuY3Rpb24pXG4gICAgICogQHBhcmFtIGtleSB7c3RyaW5nfSBvcHRpb25hbCBrZXkgd2hlcmUgdG8gbWFwIHRoZSBwdWJsaWMgc3RhdGVcbiAgICAgKi9cbiAgICB0aGVuKCBjYiApIHtcbiAgICAgICAgaWYgKCB0aGlzLl9zdGFibGUgKVxuICAgICAgICAgICAgcmV0dXJuIGNiKHRoaXMuZGF0YSk7XG4gICAgICAgIHRoaXMub25jZSgnc3RhYmxlJywgZSA9PiBjYih0aGlzLmRhdGEpKTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogQ2FsbCByZXRhaW4gb24gdGhlIHNjb3BlZCBzdG9yZXMgYmFzaW5nIGdpdmVuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc3RvcmVzXG4gICAgICogQHBhcmFtIHJlYXNvblxuICAgICAqL1xuICAgIHJldGFpblN0b3Jlcyggc3RvcmVzID0gW10sIHJlYXNvbiApIHtcbiAgICAgICAgLy9zdG9yZXMuZm9yRWFjaChcbiAgICAgICAgLy8gICAgaWQgPT4gKCAoICF0aGlzLnN0b3Jlc1sgaWQgXSB8fCAhdGhpcy5zdG9yZXNbIGlkIF0ucmV0YWluICkgJiYgY29uc29sZS53YXJuKGlkLCByZWFzb24pIClcbiAgICAgICAgLy8pXG4gICAgICAgIHN0b3Jlcy5mb3JFYWNoKFxuICAgICAgICAgICAgaWQgPT4gKCB0aGlzLnN0b3Jlc1sgaWQgXSAmJiB0aGlzLnN0b3Jlc1sgaWQgXS5yZXRhaW4gJiYgdGhpcy5zdG9yZXNbIGlkIF0ucmV0YWluKHJlYXNvbikgKVxuICAgICAgICApXG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIENhbGwgcmV0YWluIG9uIHRoZSBzY29wZWQgc3RvcmVzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc3RvcmVzXG4gICAgICogQHBhcmFtIHJlYXNvblxuICAgICAqL1xuICAgIGRpc3Bvc2VTdG9yZXMoIHN0b3JlcyA9IFtdLCByZWFzb24gKSB7XG4gICAgICAgIHN0b3Jlcy5mb3JFYWNoKFxuICAgICAgICAgICAgaWQgPT4gKCB0aGlzLnN0b3Jlc1sgaWQgXSAmJiB0aGlzLnN0b3Jlc1sgaWQgXS5kaXNwb3NlICYmIHRoaXMuc3RvcmVzWyBpZCBdLmRpc3Bvc2UocmVhc29uKSApXG4gICAgICAgIClcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogS2VlcCB0aGUgc2NvcGUgdW5zdGFibGUgdW50aWwgcmVsZWFzZSBpcyBjYWxsZWRcbiAgICAgKiBAcGFyYW0gcmVhc29uXG4gICAgICovXG4gICAgd2FpdCggcmVhc29uICkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwid2FpdFwiLCByZWFzb24pO1xuICAgICAgICB0aGlzLl9zdGFibGUgJiYgIXRoaXMuX19sb2Nrcy5hbGwgJiYgdGhpcy5lbWl0KFwidW5zdGFibGVcIiwgdGhpcyk7XG4gICAgICAgIHRoaXMuX3N0YWJsZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9fbG9ja3MuYWxsKys7XG4gICAgICAgIGlmICggcmVhc29uICkge1xuICAgICAgICAgICAgdGhpcy5fX2xvY2tzWyByZWFzb24gXSA9IHRoaXMuX19sb2Nrc1sgcmVhc29uIF0gfHwgMDtcbiAgICAgICAgICAgIHRoaXMuX19sb2Nrc1sgcmVhc29uIF0rKztcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBcbiAgICAvKipcbiAgICAgKiBTdGFiaWxpemUgdGhlIHNjb3BlIGlmIG5vIG1vcmUgbG9ja3MgcmVtYWluICh3YWl0IGZuKVxuICAgICAqIEBwYXJhbSByZWFzb25cbiAgICAgKi9cbiAgICByZWxlYXNlKCByZWFzb24gKSB7XG4gICAgICAgIFxuICAgICAgICBpZiAoIHJlYXNvbiApIHtcbiAgICAgICAgICAgIGlmICggdGhpcy5fX2xvY2tzWyByZWFzb24gXSA9PSAwIClcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiUmVsZWFzZSBtb3JlIHRoYW4gbG9ja2luZyAhXCIsIHJlYXNvbik7XG4gICAgICAgICAgICB0aGlzLl9fbG9ja3NbIHJlYXNvbiBdID0gdGhpcy5fX2xvY2tzWyByZWFzb24gXSB8fCAwO1xuICAgICAgICAgICAgdGhpcy5fX2xvY2tzWyByZWFzb24gXS0tO1xuICAgICAgICB9XG4gICAgICAgIGlmICggIXJlYXNvbiAmJiB0aGlzLl9fbG9ja3MuYWxsID09IDAgKVxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlJlbGVhc2UgbW9yZSB0aGFuIGxvY2tpbmcgIVwiKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX19sb2Nrcy5hbGwtLTtcbiAgICAgICAgaWYgKCAhdGhpcy5fX2xvY2tzLmFsbCApIHtcbiAgICAgICAgICAgIHRoaXMuXy5zdGFiaWxpemVyVE0gJiYgY2xlYXJUaW1lb3V0KHRoaXMuXy5zdGFiaWxpemVyVE0pO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLl8uc3RhYmlsaXplclRNID0gc2V0VGltZW91dChcbiAgICAgICAgICAgICAgICBlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fLnN0YWJpbGl6ZXJUTSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIGlmICggdGhpcy5fX2xvY2tzLmFsbCApXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB0aGlzLl8ucHJvcGFnVE0gJiYgY2xlYXJUaW1lb3V0KHRoaXMuXy5wcm9wYWdUTSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3JldisrO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zdGFibGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXQoXCJzdGFibGVcIiwgdGhpcyk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAhdGhpcy5kZWFkICYmIHRoaXMuX3Byb3BhZygpOy8vIHN0YWJpbGl0eSBjYW4gaW5kdWNlIGRlc3Ryb3lcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBQcm9wYWcgc3RvcmVzIHVwZGF0ZXMgYmFzaW5nIHRoZWlycyBsYXN0IHVwZGF0ZXNcbiAgICAgKi9cbiAgICBwcm9wYWcoKSB7XG4gICAgICAgIHRoaXMuXy5wcm9wYWdUTSAmJiBjbGVhclRpbWVvdXQodGhpcy5fLnByb3BhZ1RNKTtcbiAgICAgICAgdGhpcy5fLnByb3BhZ1RNID0gc2V0VGltZW91dChcbiAgICAgICAgICAgIGUgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuXy5wcm9wYWdUTSA9IG51bGw7XG4gICAgICAgICAgICAgICAgdGhpcy5fcHJvcGFnKClcbiAgICAgICAgICAgIH0sIDJcbiAgICAgICAgKTtcbiAgICB9XG4gICAgXG4gICAgX3Byb3BhZygpIHtcbiAgICAgICAgaWYgKCB0aGlzLl8uZm9sbG93ZXJzLmxlbmd0aCApXG4gICAgICAgICAgICB0aGlzLl8uZm9sbG93ZXJzLmZvckVhY2goKCB7IDA6IG9iaiwgMToga2V5LCAyOiBhcywgMzogbGFzdFJldnMsIDM6IHJlbWFwcyB9ICkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBkYXRhID0gdGhpcy5nZXRVcGRhdGVzKGxhc3RSZXZzKTtcbiAgICAgICAgICAgICAgICBpZiAoICFkYXRhICkgcmV0dXJuO1xuICAgICAgICAgICAgICAgIGlmICggdHlwZW9mIG9iaiAhPSBcImZ1bmN0aW9uXCIgKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJzZXRTdGF0ZSBcIixvYmosIE9iamVjdC5rZXlzKGRhdGEpKVxuICAgICAgICAgICAgICAgICAgICBpZiAoIGFzICkgb2JqLnNldFN0YXRlKHsgWyBhcyBdOiBkYXRhIH0pO1xuICAgICAgICAgICAgICAgICAgICBlbHNlIG9iai5zZXRTdGF0ZShkYXRhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG9iaihkYXRhLCBsYXN0UmV2cyAmJiBbIC4uLmxhc3RSZXZzIF0gfHwgXCJubyByZXZzXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBsYXN0UmV2cyAmJlxuICAgICAgICAgICAgICAgIC8vIGtleS5mb3JFYWNoKGlkID0+IChsYXN0UmV2c1tpZF0gPSB0aGlzLnN0b3Jlc1tpZF0gJiZcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnN0b3Jlc1tpZF0uX3JldiB8fCAwKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5lbWl0KFwidXBkYXRlXCIsIHRoaXMuZ2V0VXBkYXRlcygpKTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogaXMgc3RhYmxlXG4gICAgICogQHJldHVybnMgYm9vbFxuICAgICAqL1xuICAgIGlzU3RhYmxlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc3RhYmxlO1xuICAgIH1cbiAgICBcbiAgICBfYWRkQ2hpbGQoIGN0eCApIHtcbiAgICAgICAgdGhpcy5fLmNoaWxkU2NvcGVzLnB1c2goY3R4KTtcbiAgICAgICAgdGhpcy5fLnNlZW5DaGlsZHMrKztcbiAgICAgICAgbGV0IGxpc3RzICAgICA9IHtcbiAgICAgICAgICAgICAgICAnc3RhYmxlJyAgICAgIDogcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuXy51blN0YWJsZUNoaWxkcy0tO1xuICAgICAgICAgICAgICAgICAgICBpZiAoICF0aGlzLl8udW5TdGFibGVDaGlsZHMgKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KFwic3RhYmxlVHJlZVwiLCB0aGlzKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgJ3Vuc3RhYmxlJyAgICA6IHMgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl8udW5TdGFibGVDaGlsZHMrKztcbiAgICAgICAgICAgICAgICAgICAgaWYgKCAxID09IHRoaXMuXy51blN0YWJsZUNoaWxkcyApXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXQoXCJ1bnN0YWJsZVRyZWVcIiwgdGhpcylcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICdzdGFibGVUcmVlJyAgOiBzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fLnVuU3RhYmxlQ2hpbGRzLS07XG4gICAgICAgICAgICAgICAgICAgIGlmICggIXRoaXMuXy51blN0YWJsZUNoaWxkcyApXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXQoXCJzdGFibGVUcmVlXCIsIHRoaXMpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAndW5zdGFibGVUcmVlJzogcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuXy51blN0YWJsZUNoaWxkcysrO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIDEgPT0gdGhpcy5fLnVuU3RhYmxlQ2hpbGRzIClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdChcInVuc3RhYmxlVHJlZVwiLCB0aGlzKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgJ2Rlc3Ryb3knICAgICA6IGN0eCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICggY3R4Ll8udW5TdGFibGVDaGlsZHMgKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fLnVuU3RhYmxlQ2hpbGRzLS07XG4gICAgICAgICAgICAgICAgICAgIGlmICggIWN0eC5pc1N0YWJsZSgpIClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuXy51blN0YWJsZUNoaWxkcy0tO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpZiAoICF0aGlzLl8udW5TdGFibGVDaGlsZHMgKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KFwic3RhYmxlVHJlZVwiLCB0aGlzKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB3YXNTdGFibGUgPSB0aGlzLl8udW5TdGFibGVDaGlsZHM7XG4gICAgICAgIC8vIWN0eC5pc1N0YWJsZSgpICYmIGNvbnNvbGUud2FybignYWRkIHVuc3RhYmxlIGNoaWxkJyk7XG4gICAgICAgICFjdHguaXNTdGFibGUoKSAmJiB0aGlzLl8udW5TdGFibGVDaGlsZHMrKztcbiAgICAgICAgY3R4Ll8udW5TdGFibGVDaGlsZHMgJiYgdGhpcy5fLnVuU3RhYmxlQ2hpbGRzKys7XG4gICAgICAgIHRoaXMuXy5jaGlsZFNjb3Blc0xpc3QucHVzaChsaXN0cyk7XG4gICAgICAgIGlmICggIXdhc1N0YWJsZSAmJiB0aGlzLl8udW5TdGFibGVDaGlsZHMgKVxuICAgICAgICAgICAgdGhpcy5lbWl0KFwidW5zdGFibGVUcmVlXCIsIHRoaXMpXG4gICAgICAgIGN0eC5vbihsaXN0cyk7XG4gICAgfVxuICAgIFxuICAgIF9ybUNoaWxkKCBjdHggKSB7XG4gICAgICAgIGxldCBpICAgICAgICAgPSB0aGlzLl8uY2hpbGRTY29wZXMuaW5kZXhPZihjdHgpLFxuICAgICAgICAgICAgd2FzU3RhYmxlID0gdGhpcy5fLnVuU3RhYmxlQ2hpbGRzO1xuICAgICAgICBpZiAoIGkgIT0gLTEgKSB7XG4gICAgICAgICAgICB0aGlzLl8uY2hpbGRTY29wZXMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgIWN0eC5pc1N0YWJsZSgpICYmIHRoaXMuXy51blN0YWJsZUNoaWxkcy0tO1xuICAgICAgICAgICAgY3R4Ll8udW5TdGFibGVDaGlsZHMgJiYgdGhpcy5fLnVuU3RhYmxlQ2hpbGRzLS07XG4gICAgICAgICAgICBjdHgudW4odGhpcy5fLmNoaWxkU2NvcGVzTGlzdC5zcGxpY2UoaSwgMSlbIDAgXSk7XG4gICAgICAgICAgICBpZiAoIHdhc1N0YWJsZSAmJiAhdGhpcy5fLnVuU3RhYmxlQ2hpbGRzIClcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXQoXCJzdGFibGVUcmVlXCIpXG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgcmV0YWluKCByZWFzb24gKSB7XG4gICAgICAgIHRoaXMuX19yZXRhaW5zLmFsbCsrO1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwicmV0YWluXCIsIHRoaXMuX2lkLCByZWFzb24pO1xuICAgICAgICBpZiAoIHJlYXNvbiApIHtcbiAgICAgICAgICAgIHRoaXMuX19yZXRhaW5zWyByZWFzb24gXSA9IHRoaXMuX19yZXRhaW5zWyByZWFzb24gXSB8fCAwO1xuICAgICAgICAgICAgdGhpcy5fX3JldGFpbnNbIHJlYXNvbiBdKys7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgZGlzcG9zZSggcmVhc29uICkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwiZGlzcG9zZVwiLCB0aGlzLl9pZCwgcmVhc29uKTtcbiAgICAgICAgaWYgKCByZWFzb24gKSB7XG4gICAgICAgICAgICBpZiAoICF0aGlzLl9fcmV0YWluc1sgcmVhc29uIF0gKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkRpc3Bvc2UgbW9yZSB0aGFuIHJldGFpbmluZyA6IFwiICsgcmVhc29uKTtcbiAgICAgICAgICAgIHRoaXMuX19yZXRhaW5zWyByZWFzb24gXS0tO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAoICF0aGlzLl9fcmV0YWlucy5hbGwgKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRGlzcG9zZSBtb3JlIHRoYW4gcmV0YWluaW5nICFcIik7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9fcmV0YWlucy5hbGwtLTtcbiAgICAgICAgXG4gICAgICAgIGlmICggIXRoaXMuX19yZXRhaW5zLmFsbCApIHtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJkaXNwb3NlIGRvIGRlc3Ryb3kgXCIsIHRoaXMuX2lkLCB0aGlzLl9wZXJzaXN0ZW5jZVRtKTtcbiAgICAgICAgICAgIGlmICggdGhpcy5fLnBlcnNpc3RlbmNlVG0gKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fLmRlc3Ryb3lUTSAmJiBjbGVhclRpbWVvdXQodGhpcy5fLmRlc3Ryb3lUTSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fLmRlc3Ryb3lUTSA9IHNldFRpbWVvdXQoXG4gICAgICAgICAgICAgICAgICAgIGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy90aGlzLnRoZW4ocyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAhdGhpcy5fX3JldGFpbnMuYWxsICYmICF0aGlzLmRlYWQgJiYgdGhpcy5kZXN0cm95KClcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vfSk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuXy5wZXJzaXN0ZW5jZVRtXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vdGhpcy50aGVuKHMgPT5cbiAgICAgICAgICAgICAgICAoICF0aGlzLl9fcmV0YWlucy5hbGwgJiYgIXRoaXMuZGVhZCAmJiB0aGlzLmRlc3Ryb3koKSApXG4gICAgICAgICAgICAgICAgLy8pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIG9yZGVyIGRlc3Ryb3kgb2YgbG9jYWwgc3RvcmVzXG4gICAgICovXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgbGV0IGN0eCA9IHRoaXMuXy5fc2NvcGU7XG4gICAgICAgIC8vY29uc29sZS53YXJuKFwiZGVzdHJveVwiLCB0aGlzLl9pZCk7XG4gICAgICAgIHRoaXMuXy5zdGFiaWxpemVyVE0gJiYgY2xlYXJUaW1lb3V0KHRoaXMuXy5zdGFiaWxpemVyVE0pO1xuICAgICAgICB0aGlzLl8ucHJvcGFnVE0gJiYgY2xlYXJUaW1lb3V0KHRoaXMuXy5wcm9wYWdUTSk7XG4gICAgICAgIE9iamVjdC5rZXlzKFxuICAgICAgICAgICAgdGhpcy5fLl9saXN0ZW5pbmdcbiAgICAgICAgKS5mb3JFYWNoKFxuICAgICAgICAgICAgaWQgPT4gKCAoIGlkICE9PSBcIiRwYXJlbnRcIiApICYmIHRoaXMuXy5fc2NvcGVbIGlkIF0ucmVtb3ZlTGlzdGVuZXIodGhpcy5fLl9saXN0ZW5pbmdbIGlkIF0pIClcbiAgICAgICAgKTtcbiAgICAgICAgd2hpbGUgKCB0aGlzLl8uX21peGVkTGlzdC5sZW5ndGggKSB7XG4gICAgICAgICAgICB0aGlzLl8uX21peGVkWyAwIF0ucmVtb3ZlTGlzdGVuZXIodGhpcy5fLl9taXhlZExpc3Quc2hpZnQoKSk7XG4gICAgICAgICAgICB0aGlzLl8uX21peGVkLnNoaWZ0KCkuZGlzcG9zZShcIm1peGVkVG9cIik7XG4gICAgICAgIH1cbiAgICAgICAgWyAuLi50aGlzLl8uZm9sbG93ZXJzIF0ubWFwKGZvbGxvd2VyID0+IHRoaXMudW5CaW5kKC4uLmZvbGxvd2VyKSk7XG4gICAgICAgIGZvciAoIGxldCBrZXkgaW4gY3R4IClcbiAgICAgICAgICAgIGlmICggIWlzLmZuKGN0eFsga2V5IF0pICkge1xuICAgICAgICAgICAgICAgIGlmICgga2V5ID09IFwiJHBhcmVudFwiICkgY29udGludWU7XG4gICAgICAgICAgICAgICAgIWN0eFsga2V5IF0uX2F1dG9EZXN0cm95ICYmIGN0eFsga2V5IF0uZGlzcG9zZShcInNjb3BlZFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgaWYgKCB0aGlzLl8uX3BhcmVudExpc3QgKSB7XG4gICAgICAgICAgICB0aGlzLnBhcmVudC5fcm1DaGlsZCh0aGlzKTtcbiAgICAgICAgICAgIHRoaXMucGFyZW50LnJlbW92ZUxpc3RlbmVyKHRoaXMuXy5fcGFyZW50TGlzdCk7XG4gICAgICAgICAgICB0aGlzLnBhcmVudC5kaXNwb3NlKFwiaXNNeVBhcmVudFwiKTtcbiAgICAgICAgICAgIHRoaXMuXy5fcGFyZW50TGlzdCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kZWFkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5lbWl0KFwiZGVzdHJveVwiLCB0aGlzKTtcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICAvL2lmICggIXRoaXMuXy5pc0xvY2FsSWQgKVxuICAgICAgICBkZWxldGUgb3BlblNjb3Blc1sgdGhpcy5faWQgXTtcbiAgICAgICAgXG4gICAgICAgIC8vdGhpcy5fID0gbnVsbDtcbiAgICAgICAgXG4gICAgfVxufVxuXG5cbmlzLnJzU2NvcGUgPSBmdW5jdGlvbiAoIG9iaiApIHtcbiAgICByZXR1cm4gb2JqIGluc3RhbmNlb2YgU2NvcGVcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2NvcGU7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1Njb3BlLmpzIiwidmFyIGlzID0gcmVxdWlyZSgnaXMnKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIC4uLmlzXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbHMvaXMuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImlzXCJcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGlzID0gcmVxdWlyZSgnLi9pcycpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHdhbGtuU2V0KCBvYmosIHBhdGgsIHZhbHVlLCBzdGFjayApIHtcclxuICAgIGlmICggaXMuc3RyaW5nKHBhdGgpIClcclxuICAgICAgICBwYXRoID0gcGF0aC5zcGxpdCgnLicpO1xyXG4gICAgaWYgKCAhcGF0aC5sZW5ndGggKVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIGVsc2UgaWYgKCBwYXRoLmxlbmd0aCA9PSAxIClcclxuICAgICAgICByZXR1cm4gb2JqWyBwYXRoWyAwIF0gXSA9IHN0YWNrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFsgLi4uKCBvYmpbIHBhdGhbIDAgXSBdIHx8IFtdICksIHZhbHVlIF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdmFsdWU7XHJcbiAgICBlbHNlXHJcbiAgICAgICAgcmV0dXJuIHdhbGtuU2V0KFxyXG4gICAgICAgICAgICBvYmpbIHBhdGhbIDAgXSBdID1cclxuICAgICAgICAgICAgICAgIG9ialsgcGF0aFsgMCBdIF0gfHwge30sXHJcbiAgICAgICAgICAgIHBhdGguc2xpY2UoMSksXHJcbiAgICAgICAgICAgIHZhbHVlLCBzdGFja1xyXG4gICAgICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB3YWxrbkdldCggb2JqLCBwYXRoLCBpc0tleSApIHtcclxuICAgIGlmICggaXMuc3RyaW5nKHBhdGgpIClcclxuICAgICAgICBwYXRoID0gcGF0aC5zcGxpdCgnLicpO1xyXG4gICAgcmV0dXJuIHBhdGgubGVuZ3RoXHJcbiAgICAgICAgICAgPyBvYmpbIHBhdGhbIDAgXSBdICYmIHdhbGtuR2V0KG9ialsgcGF0aFsgMCBdIF0sIHBhdGguc2xpY2UoMSkpXHJcbiAgICAgICAgICAgOiBvYmo7XHJcbn1cclxuXHJcbi8vQHRvZG9cclxuZXhwb3J0IGZ1bmN0aW9uIGtleVdhbGtuU2V0KCBvYmosIHBhdGgsIHZhbHVlLCBzdGFjayApIHtcclxuICAgIGlmICggaXMuc3RyaW5nKHBhdGgpIClcclxuICAgICAgICBwYXRoID0gcGF0aC5zcGxpdCgvKFxcPnxcXC8pL2lnKS5maWx0ZXIodiA9PiAoIHYgIT09ICc+JyAmJiB2ICkpO1xyXG4gICAgcmV0dXJuIHdhbGtuU2V0KG9iaiwgcGF0aCwgdmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24ga2V5V2Fsa25HZXQoIG9iaiwgcGF0aCwgaXNLZXkgKSB7XHJcbiAgICBpZiAoIGlzLnN0cmluZyhwYXRoKSApXHJcbiAgICAgICAgcGF0aCA9IHBhdGguc3BsaXQoLyhcXD58XFwvKS9pZykuZmlsdGVyKHYgPT4gKCB2ICE9PSAnPicgJiYgdiApKTtcclxuICAgIHJldHVybiBwYXRoLmxlbmd0aFxyXG4gICAgICAgICAgID8gb2JqWyBwYXRoWyAwIF0gXSAmJiB3YWxrbkdldChvYmpbIHBhdGhbIDAgXSBdLCBwYXRoLnNsaWNlKDEpKVxyXG4gICAgICAgICAgIDogb2JqO1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWxzL3V0aWxzLmpzIiwiLypcbiAqIENvcHlyaWdodCAoYykgIDIwMTggV2lzZSBXaWxkIFdlYiAuXG4gKlxuICogIE1JVCBMaWNlbnNlXG4gKiAgXG4gKiAgUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqICBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiAgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKiAgXG4gKiAgVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG4gKiAgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqICBcbiAqICBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiAgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiAgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiAgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiAgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcbiAqICBTT0ZUV0FSRS5cbiAqICBcbiAqIEBhdXRob3IgOiBOYXRoYW5hZWwgQnJhdW5cbiAqIEBjb250YWN0IDogY2FpcGlsYWJzQGdtYWlsLmNvbVxuICovXG52YXIgaXMgPSByZXF1aXJlKCdpcycpO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW1pdHRlciB7XG4gICAgX2V2ZW50cyA9IHt9O1xuICAgIFxuICAgIG9uKCBldnQsIGNiICkge1xuICAgICAgICBpZiAoICFpcy5zdHJpbmcoZXZ0KSAmJiBldnQgKVxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKGV2dCkuZm9yRWFjaChrID0+IHRoaXMub24oaywgZXZ0W2tdKSk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9ldmVudHNbZXZ0XSA9IHRoaXMuX2V2ZW50c1tldnRdIHx8IFtdO1xuICAgICAgICB0aGlzLl9ldmVudHNbZXZ0XS5wdXNoKGNiKTtcbiAgICAgICAgXG4gICAgfVxuICAgIFxuICAgIHVuKCBldnQsIGNiICkge1xuICAgICAgICBpZiAoICFpcy5zdHJpbmcoZXZ0KSAmJiBldnQgKVxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKGV2dCkuZm9yRWFjaChrID0+IHRoaXMudW4oaywgZXZ0W2tdKSk7XG4gICAgICAgIFxuICAgICAgICBpZiAoICF0aGlzLl9ldmVudHNbZXZ0XSApIHJldHVybjtcbiAgICAgICAgdmFyIGkgPSB0aGlzLl9ldmVudHNbZXZ0XS5pbmRleE9mKGNiKTtcbiAgICAgICAgdGhpcy5fZXZlbnRzW2V2dF0uc3BsaWNlKGksIDEpO1xuICAgIH1cbiAgICBcbiAgICBlbWl0KCBldnQsIC4uLmFyZ3ogKSB7XG4gICAgICAgIGlmICggIXRoaXMuX2V2ZW50c1tldnRdICkgcmV0dXJuO1xuICAgICAgICBsZXQgbGlzdHMgPSBbLi4udGhpcy5fZXZlbnRzW2V2dF1dO1xuICAgICAgICBcbiAgICAgICAgZm9yICggdmFyIGkgPSAwOyBpIDwgbGlzdHMubGVuZ3RoOyBpKysgKVxuICAgICAgICAgICAgbGlzdHNbaV0oLi4uYXJneilcbiAgICB9XG4gICAgXG4gICAgYWRkTGlzdGVuZXIoKSB7XG4gICAgICAgIHRoaXMub24oLi4uYXJndW1lbnRzKTtcbiAgICB9XG4gICAgXG4gICAgcmVtb3ZlTGlzdGVuZXIoKSB7XG4gICAgICAgIHRoaXMudW4oLi4uYXJndW1lbnRzKTtcbiAgICB9XG4gICAgXG4gICAgcmVtb3ZlQWxsTGlzdGVuZXJzKCkge1xuICAgICAgICB0aGlzLl9ldmVudHMgPSB7fTtcbiAgICB9XG4gICAgXG4gICAgb25jZSggZXZ0LCBjYiApIHtcbiAgICAgICAgbGV0IGZuO1xuICAgICAgICB0aGlzLm9uKGV2dCwgZm4gPSAoIC4uLmFyZ3ogKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnVuKGV2dCwgZm4pO1xuICAgICAgICAgICAgY2IoLi4uYXJneilcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIFxuICAgIFxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlscy9FbWl0dGVyLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2hvcnRpZFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInNob3J0aWRcIlxuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxuICogQ29weXJpZ2h0IChjKSAgMjAxOCBXaXNlIFdpbGQgV2ViIC5cbiAqXG4gKiAgTUlUIExpY2Vuc2VcbiAqXG4gKiAgUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqICBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiAgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuICogIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqICBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqICBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqICBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiAgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqICBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuICogIFNPRlRXQVJFLlxuICpcbiAqIEBhdXRob3IgOiBOYXRoYW5hZWwgQnJhdW5cbiAqIEBjb250YWN0IDogY2FpcGlsYWJzQGdtYWlsLmNvbVxuICovXG5cbnZhciBpcyAgICAgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi91dGlscy9pcycpLFxuICAgIFNjb3BlICAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL1Njb3BlJyksXG4gICAgeyBrZXlXYWxrblNldCwga2V5V2Fsa25HZXQgfSA9IHJlcXVpcmUoJy4vdXRpbHMvdXRpbHMnKSxcbiAgICBFdmVudEVtaXR0ZXIgICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi91dGlscy9FbWl0dGVyJyksXG4gICAgVGFza1NlcXVlbmNlciAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vdXRpbHMvVGFza1NlcXVlbmNlcicpLFxuICAgIHNob3J0aWQgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlKCdzaG9ydGlkJyksXG4gICAgb2JqUHJvdG8gICAgICAgICAgICAgICAgICAgICA9IE9iamVjdC5nZXRQcm90b3R5cGVPZih7fSk7XG5cbmNsYXNzIFN0b3JlIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgICAvL3N0YXRpYyB1c2UgICAgICAgICAgICAgICAgICA9IFtdOy8vIG92ZXJyaWRhYmxlIGxpc3Qgb2Ygc291cmNlIHN0b3Jlc1xuICAgIHN0YXRpYyBmb2xsb3c7Ly8gb3ZlcnJpZGFibGUgbGlzdCBvZiBzdG9yZSB0aGF0IHdpbGwgYWxsb3cgcHVzaCBpZiB1cGRhdGVkXG4gICAgc3RhdGljIHJlcXVpcmU7XG4gICAgc3RhdGljIHN0YXRpY1Njb3BlICAgICAgICAgID0gbmV3IFNjb3BlKHt9LCB7IGlkOiBcInN0YXRpY1wiIH0pO1xuICAgIHN0YXRpYyBzdGF0ZSAgICAgICAgICAgICAgICA9IHVuZGVmaW5lZDsvLyBkZWZhdWx0IHN0YXRlXG4gICAgLyoqXG4gICAgICogaWYgcmV0YWluIGdvZXMgdG8gMCA6XG4gICAgICogZmFsc2UgdG8gbm90IGRlc3Ryb3ksXG4gICAgICogMCB0byBzeW5jIGF1dG8gZGVzdHJveVxuICAgICAqIE1zIHRvIGF1dG9kZXN0cm95IGFmdGVyIHRtIG1zIGlmIG5vIHJldGFpbiBoYXMgYmVlbiBjYWxsZWRcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbnxJbnR9XG4gICAgICovXG4gICAgICAgICAgIHN0YXRpYyBwZXJzaXN0ZW5jZVRtID0gZmFsc2U7XG4gICAgXG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0b3IsIHdpbGwgYnVpbGQgYSByZXNjb3BlIHN0b3JlXG4gICAgICpcbiAgICAgKiAoc2NvcGUsIHtyZXF1aXJlLHVzZSxhcHBseSxzdGF0ZSwgZGF0YX0pXG4gICAgICogKHNjb3BlKVxuICAgICAqXG4gICAgICogQHBhcmFtIHNjb3BlIHtvYmplY3R9IHNjb3BlIHdoZXJlIHRvIGZpbmQgdGhlIG90aGVyIHN0b3JlcyAoZGVmYXVsdCA6IHN0YXRpY1xuICAgICAqICAgICBzdGF0aWNTY29wZSApXG4gICAgICogQHBhcmFtIGtleXMge0FycmF5fSAocGFzc2VkIHRvIFN0b3JlOjptYXApIEV4IDogW1wic2Vzc2lvblwiLCBcIm90aGVyTmFtZWRTdG9yZTprZXlcIixcbiAgICAgKiAgICAgb3RoZXJTdG9yZS5hcyhcIm90aGVyS2V5XCIpXVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB2YXIgYXJneiAgICAgICAgID0gWyAuLi5hcmd1bWVudHMgXSxcbiAgICAgICAgICAgIF9zdGF0aWMgICAgICA9IHRoaXMuY29uc3RydWN0b3IsXG4gICAgICAgICAgICBzY29wZSAgICAgICAgPSBhcmd6WyAwIF0gaW5zdGFuY2VvZiBTY29wZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBhcmd6LnNoaWZ0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3N0YXRpYy5zY29wZSA/IFNjb3BlLmdldFNjb3BlKF9zdGF0aWMuc2NvcGUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBpcy5zdHJpbmcoYXJnelsgMCBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBTY29wZS5nZXRTY29wZShhcmd6LnNoaWZ0KCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF9zdGF0aWMuc3RhdGljU2NvcGUsXG4gICAgICAgICAgICBjZmcgICAgICAgICAgPSBhcmd6WyAwIF0gJiYgIWlzLmFycmF5KGFyZ3pbIDAgXSkgJiYgIWlzLnN0cmluZyhhcmd6WyAwIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA/IGFyZ3ouc2hpZnQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB7fSxcbiAgICAgICAgICAgIHRhc2tRdWV1ZSAgICA9IGlzLmFycmF5KGFyZ3pbIDAgXSkgPyBhcmd6LnNoaWZ0KCkgOiBudWxsLFxuICAgICAgICAgICAgbmFtZSAgICAgICAgID0gY2ZnLm5hbWUgfHwgX3N0YXRpYy5uYW1lLFxuICAgICAgICAgICAgd2F0Y2hzICAgICAgID0gY2ZnLnVzZSB8fCBbXSxcbiAgICAgICAgICAgIGFwcGx5ICAgICAgICA9IGNmZy5hcHBseSB8fCBudWxsLFxuICAgICAgICAgICAgaW5pdGlhbFN0YXRlID0gX3N0YXRpYy5zdGF0ZSB8fCBfc3RhdGljLmluaXRpYWxTdGF0ZSB8fCBfc3RhdGljLmRlZmF1bHRTdGF0ZSxcbiAgICAgICAgICAgIGFwcGxpZWQ7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl91aWQgPSBjZmcuX3VpZCB8fCBzaG9ydGlkLmdlbmVyYXRlKCk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9fcmV0YWlucyAgICA9IHsgYWxsOiAwIH07XG4gICAgICAgIHRoaXMuX19sb2NrcyAgICAgID0geyBhbGw6IDAgfTtcbiAgICAgICAgdGhpcy5fb25TdGFiaWxpemUgPSBbXTtcbiAgICAgICAgXG4gICAgICAgIC8vIGF1dG9EZXN0cm95VG1cbiAgICAgICAgdGhpcy5fYXV0b0Rlc3Ryb3kgICA9ICEhdGhpcy5fcGVyc2lzdGVuY2VUbTtcbiAgICAgICAgdGhpcy5fcGVyc2lzdGVuY2VUbSA9IGNmZy5wZXJzaXN0ZW5jZVRtIHx8IF9zdGF0aWMucGVyc2lzdGVuY2VUbSB8fCAoIGNmZy5hdXRvRGVzdHJveSB8fCBfc3RhdGljLmF1dG9EZXN0cm95ICkgJiYgNTtcbiAgICAgICAgdGhpcy5fY2ZnICAgICAgICAgICA9IGNmZztcbiAgICAgICAgaWYgKCBjZmcgJiYgY2ZnLm9uICkge1xuICAgICAgICAgICAgdGhpcy5vbihjZmcub24pO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICBcbiAgICAgICAgaWYgKCBzY29wZS5zdG9yZXMgKSB7XG4gICAgICAgICAgICB0aGlzLnNjb3BlT2JqID0gc2NvcGU7XG4gICAgICAgICAgICB0aGlzLnNjb3BlICAgID0gc2NvcGUuc3RvcmVzO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zY29wZU9iaiA9IG5ldyBTY29wZShzY29wZSk7XG4gICAgICAgICAgICB0aGlzLnNjb3BlICAgID0gc2NvcGUuc3RvcmVzO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvLyBzdGFuZGFyZGl6ZWQgc2NvcGUgYWNjZXNzXG4gICAgICAgIHRoaXMuJHNjb3BlICAgID0gdGhpcy5zY29wZU9iajtcbiAgICAgICAgdGhpcy4kc3RvcmVzICAgPSB0aGlzLnNjb3BlT2JqLnN0b3JlcztcbiAgICAgICAgdGhpcy4kYWN0aW9ucyAgPSB0aGlzLnNjb3BlT2JqLmFjdGlvbnM7XG4gICAgICAgIHRoaXMuJGRpc3BhdGNoID0gdGhpcy5zY29wZU9iai5kaXNwYXRjaC5iaW5kKHRoaXMuc2NvcGVPYmopO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fcmV2ICAgICA9IHRoaXMuY29uc3RydWN0b3IuX3JldiB8fCAwO1xuICAgICAgICB0aGlzLl9yZXZzICAgID0ge307XG4gICAgICAgIHRoaXMuc3RvcmVzICAgPSB7fTtcbiAgICAgICAgdGhpcy5fcmVxdWlyZSA9IFtdO1xuICAgICAgICB0aGlzLl9zb3VyY2VzID0gWyBuYW1lIF07XG4gICAgICAgIFxuICAgICAgICBpZiAoIGlzLmFycmF5KF9zdGF0aWMudXNlKSApIHtcbiAgICAgICAgICAgIHRoaXMuX3VzZSA9IFsgLi4ud2F0Y2hzLCAuLi4oIF9zdGF0aWMudXNlIHx8IFtdICkubWFwKFxuICAgICAgICAgICAgICAgIGtleSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCByZWYgPSBrZXkubWF0Y2goL14oXFwhPykoW15cXDpdKikoPzpcXDooLiopKT8kLyk7XG4gICAgICAgICAgICAgICAgICAgIGlmICggcmVmWyAxIF0gKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVmMiA9IHJlZlsgMiBdLnNwbGl0KCcuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9yZXF1aXJlLnB1c2gocmVmWyAzIF0gfHwgcmVmMlsgcmVmMi5sZW5ndGggLSAxIF0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZWZbIDIgXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApIF07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl91c2UgPSBbIC4uLndhdGNocywgLi4uKFxuICAgICAgICAgICAgICAgIF9zdGF0aWMudXNlID8gT2JqZWN0LmtleXMoX3N0YXRpYy51c2UpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZWYgPSBrZXkubWF0Y2goL14oXFwhPykoLiopJC8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWZbIDEgXSAmJiB0aGlzLl9yZXF1aXJlLnB1c2goX3N0YXRpYy51c2VbIGtleSBdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlZlsgMiBdICsgKCAoIF9zdGF0aWMudXNlWyBrZXkgXSA9PT0gdHJ1ZSApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJzonICsgX3N0YXRpYy51c2VbIGtleSBdICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IFtdXG4gICAgICAgICAgICApIF07XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmICggX3N0YXRpYy5yZXF1aXJlIClcbiAgICAgICAgICAgIHRoaXMuX3JlcXVpcmUucHVzaCguLi5fc3RhdGljLnJlcXVpcmUpO1xuICAgICAgICBpZiAoIGNmZy5yZXF1aXJlIClcbiAgICAgICAgICAgIHRoaXMuX3JlcXVpcmUucHVzaCguLi5jZmcucmVxdWlyZSk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9mb2xsb3dlcnMgPSBbXTtcbiAgICAgICAgdGhpcy5fY2hhbmdlc1NXID0gaW5pdGlhbFN0YXRlIHx8IHt9O1xuICAgICAgICB0aGlzLnN0YXRlICAgICAgPSBpbml0aWFsU3RhdGUgJiYge307XG4gICAgICAgIGlmICggYXBwbHkgKVxuICAgICAgICAgICAgdGhpcy5hcHBseSA9IGFwcGx5O1xuICAgICAgICBcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEluaXRpYWwgc3RhdGUgaXNuJ3QgZnVsbHkgaW5pdGlhbGl6ZWQgKCBjaGlsZHMgY29uc3RydWN0b3JzIGNhbiBzZXQgaXQgKVxuICAgICAgICAgKiBTY29wZSBiYXNlZCBpbnN0YW5jZSBoYXZlIHRhc2tRdWV1ZSB0byBkZWxheSBpbml0IHN5bmNocm9ub3VzbHksIGlmIG5vdFxuICAgICAgICAgKiBwcmVzZW50IHdlIHVzZSBzZXRUaW1lb3V0XG4gICAgICAgICAqL1xuICAgICAgICBpZiAoIHRhc2tRdWV1ZSApIHtcbiAgICAgICAgICAgIHRhc2tRdWV1ZS5wdXNoKHRoaXMuX2FmdGVyQ29uc3RydWN0b3IuYmluZCh0aGlzKSlcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgICAgICBzZXRUaW1lb3V0KHRoaXMuX2FmdGVyQ29uc3RydWN0b3IuYmluZCh0aGlzKSlcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBpbmNvbWluZyBzdGF0ZSAoIGZvciBpbW1lZGlhdGUgc3RhdGUgcmVsYXRpdmUgYWN0aW9ucyApXG4gICAgICogQHJldHVybnMge3t9fCp9XG4gICAgICovXG4gICAgZ2V0IG5leHRTdGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NoYW5nZXNTVyAmJiB7IC4uLnRoaXMuc3RhdGUsIC4uLnRoaXMuX2NoYW5nZXNTVyB9IHx8IHRoaXMuc3RhdGU7XG4gICAgfVxuICAgIFxuICAgIF9hZnRlckNvbnN0cnVjdG9yKCkge1xuICAgICAgICBsZXQgY2ZnICAgICAgICAgID0gdGhpcy5fY2ZnLFxuICAgICAgICAgICAgX3N0YXRpYyAgICAgID0gdGhpcy5jb25zdHJ1Y3RvcixcbiAgICAgICAgICAgIHNuYXBzaG90ICAgICA9IHRoaXMucmVzdG9yZSh1bmRlZmluZWQsIHRydWUpLFxuICAgICAgICAgICAgaW5pdGlhbFN0YXRlID0gdGhpcy5zdGF0ZSxcbiAgICAgICAgICAgIGluaXRpYWxEYXRhICA9IHRoaXMuZGF0YSxcbiAgICAgICAgICAgIGFwcGxpZWQ7XG4gICAgICAgIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKCBpbml0aWFsRGF0YSApXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhID0gaW5pdGlhbERhdGE7XG4gICAgICAgICAgICBlbHNlIGlmICggX3N0YXRpYy5kYXRhICE9PSB1bmRlZmluZWQgKVxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YSA9IHsgLi4uX3N0YXRpYy5kYXRhIH07XG4gICAgICAgICAgICBlbHNlIGlmICggY2ZnLmhhc093blByb3BlcnR5KFwiZGF0YVwiKSApXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhID0gY2ZnLmRhdGE7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmICggY2ZnLmhhc093blByb3BlcnR5KFwic3RhdGVcIikgJiYgY2ZnLnN0YXRlICE9PSB1bmRlZmluZWQgKVxuICAgICAgICAgICAgICAgIGluaXRpYWxTdGF0ZSA9IHsgLi4uaW5pdGlhbFN0YXRlLCAuLi5jZmcuc3RhdGUgfTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKCB0aGlzLmRhdGEgPT09IHVuZGVmaW5lZCApIHtcbiAgICAgICAgICAgICAgICBpZiAoIGluaXRpYWxTdGF0ZSB8fCB0aGlzLl91c2UubGVuZ3RoICkgey8vIHN5bmMgYXBwbHlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2hhbmdlc1NXID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgLi4udGhpcy5fY2hhbmdlc1NXLFxuICAgICAgICAgICAgICAgICAgICAgICAgLi4uKCBpbml0aWFsU3RhdGUgfHwge30gKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLnRoaXMuJHNjb3BlLm1hcCh0aGlzLCB0aGlzLl91c2UpXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUgICAgICA9IHt9O1xuICAgICAgICAgICAgICAgICAgICBpZiAoIHRoaXMuc2hvdWxkQXBwbHkodGhpcy5fY2hhbmdlc1NXKSAmJiB0aGlzLmRhdGEgPT09IHVuZGVmaW5lZCApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YSAgICAgICA9IHRoaXMuYXBwbHkodGhpcy5kYXRhLCB0aGlzLl9jaGFuZ2VzU1csIHRoaXMuX2NoYW5nZXNTVyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcHBsaWVkICAgICAgICAgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZSAgICAgID0gdGhpcy5fY2hhbmdlc1NXO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2hhbmdlc1NXID0ge307XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBhcHBsaWVkICAgICAgICAgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUgICAgICA9IHsvLyBhc3N1bWUgdGhpcyBzdGF0ZSBpcyBzeW5jIHdpdGggaW5pdGlhbCBkYXRhXG4gICAgICAgICAgICAgICAgICAgIC4uLnRoaXMuX2NoYW5nZXNTVyxcbiAgICAgICAgICAgICAgICAgICAgLi4uKCBpbml0aWFsU3RhdGUgfHwge30gKSxcbiAgICAgICAgICAgICAgICAgICAgLi4udGhpcy4kc2NvcGUubWFwKHRoaXMsIHRoaXMuX3VzZSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5fY2hhbmdlc1NXID0ge307XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCAoIHRoaXMuZGF0YSAhPT0gdW5kZWZpbmVkIHx8IGFwcGxpZWQgKSAmJiAhdGhpcy5fX2xvY2tzLmFsbCApIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YWJsZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLl9yZXYrKztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgaWYgKCAhX3N0YXRpYy5tYW5hZ2VkICYmICF0aGlzLnN0YXRlICYmICggIXRoaXMuX3VzZSB8fCAhdGhpcy5fdXNlLmxlbmd0aCApICkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIlJlU2NvcGUgc3RvcmUgJ1wiLCB0aGlzLm5hbWUsIFwiJyBoYXZlIG5vIGluaXRpYWwgZGF0YSwgc3RhdGUgb3IgdXNlLiBJdCBjYW4ndCBzdGFiaWxpemUuLi5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgIXRoaXMuX3N0YWJsZSAmJiB0aGlzLmVtaXQoJ3Vuc3RhYmxlJywgdGhpcy5zdGF0ZSk7XG4gICAgICAgIFxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBPdmVycmlkYWJsZSBtZXRob2QgdG8ga25vdyBpZiBhIGRhdGEgY2hhbmdlIHNob3VsZCBiZSBwcm9wYWcgdG8gdGhlIGxpc3RlbmluZ1xuICAgICAqIHN0b3JlcyAmIGNvbXBvbmVudHNcbiAgICAgKi9cbiAgICBzaG91bGRQcm9wYWcoIG5EYXRhcyApIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIFxuICAgIGhhc0RhdGFDaGFuZ2UoIG5EYXRhcyApIHtcbiAgICAgICAgdmFyIF9zdGF0aWMgPSB0aGlzLmNvbnN0cnVjdG9yLCByLFxuICAgICAgICAgICAgY0RhdGFzICA9IHRoaXMuZGF0YTtcbiAgICAgICAgciAgICAgICAgICAgPSAhY0RhdGFzICYmIG5EYXRhcyB8fCBjRGF0YXMgIT09IG5EYXRhcztcbiAgICAgICAgIXIgJiYgY0RhdGFzICYmIE9iamVjdC5rZXlzKGNEYXRhcykuZm9yRWFjaChcbiAgICAgICAgICAgICgga2V5ICkgPT4ge1xuICAgICAgICAgICAgICAgIHIgPSByIHx8ICggbkRhdGFzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA/IGNEYXRhc1sga2V5IF0gIT09IG5EYXRhc1sga2V5IF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDogY0RhdGFzICYmIGNEYXRhc1sga2V5IF0gKVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICAhciAmJiBuRGF0YXMgJiYgT2JqZWN0LmtleXMobkRhdGFzKS5mb3JFYWNoKFxuICAgICAgICAgICAgKCBrZXkgKSA9PiB7XG4gICAgICAgICAgICAgICAgciA9IHIgfHwgKCBuRGF0YXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgID8gY0RhdGFzWyBrZXkgXSAhPT0gbkRhdGFzWyBrZXkgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBjRGF0YXMgJiYgY0RhdGFzWyBrZXkgXSApXG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBPdmVycmlkYWJsZSBtZXRob2QgdG8ga25vdyBpZiBhIHN0YXRlIGNoYW5nZSBzaG91bGQgYmUgYXBwbGllZFxuICAgICAqL1xuICAgIHNob3VsZEFwcGx5KCBzdGF0ZSA9IHRoaXMuc3RhdGUgKSB7XG4gICAgICAgIHZhciBfc3RhdGljID0gdGhpcy5jb25zdHJ1Y3RvcjtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgISF0aGlzLmlzQ29tcGxldGUoc3RhdGUpXG4gICAgICAgICAgICAgICApICYmICggaXMuYXJyYXkoX3N0YXRpYy5mb2xsb3cpXG4gICAgICAgICAgICAgICAgICAgICAgPyBfc3RhdGljLmZvbGxvd1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZWR1Y2UoKCByLCBpICkgPT4gKCByIHx8IHN0YXRlICYmIHN0YXRlWyBpIF0gKSwgZmFsc2UpXG4gICAgICAgICAgICAgICAgICAgICAgOiBfc3RhdGljLmZvbGxvd1xuICAgICAgICAgICAgICAgICAgICAgICAgPyBPYmplY3Qua2V5cyhfc3RhdGljLmZvbGxvdylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlZHVjZSgoIHIsIGkgKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8fCBzdGF0ZSAmJiBpcy5mbihfc3RhdGljLmZvbGxvd1sgaSBdKSAmJiBfc3RhdGljLmZvbGxvd1sgaSBdLmNhbGwodGhpcywgc3RhdGVbIGkgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHx8IF9zdGF0aWMuZm9sbG93WyBpIF0gJiYgc3RhdGVbIGkgXSAhPT0gdGhpcy5zdGF0ZVsgaSBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIGZhbHNlKSA6IHRydWVcbiAgICAgICAgICAgICAgICk7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIE92ZXJyaWRhYmxlIGFwcGxpZXIgLyByZW1hcHBlclxuICAgICAqIElmIHN0YXRlIG9yIGxhc3RQdWJsaWNTdGF0ZSBhcmUgc2ltcGxlIGhhc2ggbWFwcyBhcHBseSB3aWxsIHJldHVybiB7Li4uZGF0YSxcbiAgICAgKiAuLi5zdGF0ZX0gaWYgbm90IGl0IHdpbGwgcmV0dXJuIHRoZSBsYXN0IHByaXZhdGUgc3RhdGVcbiAgICAgKiBAcGFyYW0gZGF0YVxuICAgICAqIEBwYXJhbSBzdGF0ZVxuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqL1xuICAgIGFwcGx5KCBkYXRhLCBzdGF0ZSwgY2hhbmdlcyApIHtcbiAgICAgICAgc3RhdGUgPSBzdGF0ZSB8fCB0aGlzLnN0YXRlO1xuICAgICAgICBcbiAgICAgICAgaWYgKCB0aGlzLnJlZmluZSApXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZWZpbmUoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgXG4gICAgICAgIGlmICggIWRhdGEgfHwgZGF0YS5fX3Byb3RvX18gIT09IG9ialByb3RvIHx8IHN0YXRlLl9fcHJvdG9fXyAhPT0gb2JqUHJvdG8gKVxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICByZXR1cm4geyAuLi5kYXRhLCAuLi5zdGF0ZSB9XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIEBkZXByZWNpYXRlZFxuICAgICAqIEBwYXJhbSBkYXRhXG4gICAgICogQHBhcmFtIHN0YXRlXG4gICAgICogQHBhcmFtIGNoYW5nZXNcbiAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgKi9cbiAgICByZWZpbmUoIGRhdGEsIHN0YXRlLCBjaGFuZ2VzICkge1xuICAgICAgICBzdGF0ZSA9IHN0YXRlIHx8IHRoaXMuc3RhdGU7XG4gICAgICAgIFxuICAgICAgICBpZiAoICFkYXRhIHx8IGRhdGEuX19wcm90b19fICE9PSBvYmpQcm90byB8fCBzdGF0ZS5fX3Byb3RvX18gIT09IG9ialByb3RvIClcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgcmV0dXJuIHsgLi4uZGF0YSwgLi4uc3RhdGUgfVxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBEZWJvdW5jZSB0aGlzIHN0b3JlIHByb3BhZ2F0aW9uICggJiByZWR1Y2luZyApXG4gICAgICogQHBhcmFtIGNiXG4gICAgICovXG4gICAgc3RhYmlsaXplKCBjYiApIHtcbiAgICAgICAgY2IgJiYgdGhpcy5vbmNlKCdzdGFibGUnLCBjYik7XG4gICAgICAgIHRoaXMuX3N0YWJsZSAmJiB0aGlzLmVtaXQoJ3Vuc3RhYmxlJywgdGhpcy5zdGF0ZSwgdGhpcy5kYXRhKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX3N0YWJsZSA9IGZhbHNlO1xuICAgICAgICBcbiAgICAgICAgaWYgKCB0aGlzLl9zdGFiaWxpemVyIClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX3N0YWJpbGl6ZXIgPSBUYXNrU2VxdWVuY2VyLnB1c2hUYXNrKHRoaXMsICdwdXNoU3RhdGUnKTtcbiAgICB9XG4gICAgXG4gICAgcmV0cmlldmUoIHBhdGgsIGkgPSAwLCBvYmogPSB0aGlzLmRhdGEgKSB7XG4gICAgICAgIHBhdGggPSBpcy5zdHJpbmcocGF0aCkgPyBwYXRoLnNwbGl0KCcuJykgOiBwYXRoO1xuICAgICAgICByZXR1cm4gIW9iaiB8fCAhcGF0aCB8fCAhcGF0aC5sZW5ndGhcbiAgICAgICAgICAgICAgID8gb2JqXG4gICAgICAgICAgICAgICA6IHBhdGgubGVuZ3RoID09IGkgKyAxXG4gICAgICAgICAgICAgICAgID8gb2JqWyBwYXRoWyBpIF0gXVxuICAgICAgICAgICAgICAgICA6IHRoaXMucmV0cmlldmUocGF0aCwgaSArIDEsIG9ialsgcGF0aFsgaSBdIF0pO1xuICAgIH1cbiAgICBcbiAgICBkaXNwYXRjaCggYWN0aW9uLCAuLi5hcmd6ICkge1xuICAgICAgICB0aGlzLnNjb3BlT2JqLmRpc3BhdGNoKGFjdGlvbiwgLi4uYXJneik7XG4gICAgfVxuICAgIFxuICAgIHRyaWdnZXIoIGFjdGlvbiwgLi4uYXJneiApIHtcbiAgICAgICAgbGV0IHsgYWN0aW9ucyB9ID0gdGhpcy5jb25zdHJ1Y3RvcjtcbiAgICAgICAgaWYgKCBhY3Rpb25zICYmIGFjdGlvbnNbIGFjdGlvbiBdICkge1xuICAgICAgICAgICAgbGV0IG5zID0gYWN0aW9uc1sgYWN0aW9uIF0uY2FsbCh0aGlzLCAuLi5hcmd6KTtcbiAgICAgICAgICAgIG5zICYmIHRoaXMuc2V0U3RhdGUobnMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIFB1bGwgc3RvcmVzIGluIHRoZSBwcml2YXRlIHN0YXRlXG4gICAgICogQHBhcmFtIHN0b3JlcyAge0FycmF5fSAocGFzc2VkIHRvIFN0b3JlOjptYXApIEV4IDogW1wic2Vzc2lvblwiLFxuICAgICAqICAgICBcIm90aGVyTmFtZWRTdG9yZTprZXlcIiwgb3RoZXJTdG9yZS5hcyhcIm90aGVyS2V5XCIpXVxuICAgICAqL1xuICAgIHB1bGwoIHN0b3JlcywgZG9XYWl0LCBvcmlnaW4gKSB7XG4gICAgICAgIGxldCBpbml0aWFsT3V0cHV0cyA9IHRoaXMuc2NvcGVPYmoubWFwKHRoaXMsIHN0b3Jlcyk7XG4gICAgICAgIGlmICggZG9XYWl0ICkge1xuICAgICAgICAgICAgdGhpcy53YWl0KCk7XG4gICAgICAgICAgICBzdG9yZXMuZm9yRWFjaCgoIHMgKSA9PiB0aGlzLnNjb3BlWyBzIF0gJiYgdGhpcy53YWl0KHRoaXMuc2NvcGVbIHMgXSkpO1xuICAgICAgICAgICAgdGhpcy5yZWxlYXNlKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGluaXRpYWxPdXRwdXRzO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBTZXQgJiBQdXNoIHRoZSByZXN1bHQgZGF0YSB0byBmb2xsb3dlcnMgaWYgc3RhYmxlXG4gICAgICogQHBhcmFtIGNiXG4gICAgICovXG4gICAgcHVzaCggZGF0YSwgZm9yY2UsIGNiICkge1xuICAgICAgICBjYiAgICA9IGZvcmNlID09PSB0cnVlID8gY2IgOiBmb3JjZTtcbiAgICAgICAgZm9yY2UgPSBmb3JjZSA9PT0gdHJ1ZTtcbiAgICAgICAgaWYgKCAhZm9yY2UgJiZcbiAgICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgICF0aGlzLmhhc0RhdGFDaGFuZ2UoZGF0YSlcbiAgICAgICAgICAgICApXG4gICAgICAgICkge1xuICAgICAgICAgICAgY2IgJiYgY2IoKTtcbiAgICAgICAgICAgIGlmICggIXRoaXMuX19sb2Nrcy5hbGwgKSB7XG4gICAgICAgICAgICAgICAgbGV0IHN0YWJsZSAgID0gdGhpcy5fc3RhYmxlO1xuICAgICAgICAgICAgICAgIHRoaXMuX3N0YWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgIXN0YWJsZSAmJiB0aGlzLmVtaXQoJ3N0YWJsZScsIHRoaXMuc3RhdGUsIHRoaXMuZGF0YSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fc3RhYmlsaXplciA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgICAgIHRoaXMud2FpdCgpO1xuICAgICAgICB0aGlzLnJlbGVhc2UoY2IpO1xuICAgICAgICBcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogQ2FsbCB0aGUgYXBwbHkgZm4gdXNpbmcgdGhlIGN1cnJlbnQgYWNjdW11bGF0ZWQgc3RhdGUgdXBkYXRlIHRoZW4sIHB1c2ggdGhlXG4gICAgICogcmVzdWx0aW5nIGRhdGEgaWYgc3RhYmxlXG4gICAgICogQHBhcmFtIGZvcmNlXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgcHVzaFN0YXRlKCBmb3JjZSApIHtcbiAgICAgICAgXG4gICAgICAgIGlmICggIWZvcmNlICYmICF0aGlzLl9jaGFuZ2VzU1cgJiYgdGhpcy5kYXRhIClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgXG4gICAgICAgIHZhciBuZXh0U3RhdGUgPSB0aGlzLl9uZXh0U3RhdGUgfHwgeyAuLi50aGlzLnN0YXRlLCAuLi4oIHRoaXMuX2NoYW5nZXNTVyB8fCB7fSApIH0sXG4gICAgICAgICAgICBuZXh0RGF0YSAgPSB0aGlzLmFwcGx5KHRoaXMuZGF0YSwgbmV4dFN0YXRlLCB0aGlzLl9jaGFuZ2VzU1cpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fc3RhYmlsaXplciA9IG51bGw7XG4gICAgICAgIHRoaXMuc3RhdGUgICAgICAgPSBuZXh0U3RhdGU7XG4gICAgICAgIHRoaXMuX2NoYW5nZXNTVyAgPSBudWxsO1xuICAgICAgICBcbiAgICAgICAgaWYgKCAhZm9yY2UgJiZcbiAgICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgICF0aGlzLmhhc0RhdGFDaGFuZ2UobmV4dERhdGEpXG4gICAgICAgICAgICAgKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIGlmICggIXRoaXMuX19sb2Nrcy5hbGwgKSB7XG4gICAgICAgICAgICAgICAgbGV0IHN0YWJsZSAgID0gdGhpcy5fc3RhYmxlO1xuICAgICAgICAgICAgICAgIHRoaXMuX3N0YWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgIXN0YWJsZSAmJiB0aGlzLmVtaXQoJ3N0YWJsZScsIHRoaXMuc3RhdGUsIHRoaXMuZGF0YSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fc3RhYmlsaXplciA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRoaXMuZGF0YSA9IG5leHREYXRhO1xuICAgICAgICB0aGlzLndhaXQoKTtcbiAgICAgICAgdGhpcy5yZWxlYXNlKCk7XG4gICAgICAgIFxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBBZGQgJ3BTdGF0ZScgdG8gdGhlIGN1cnJlbnQgYWNjdW11bGF0ZWQgc3RhdGUgdXBkYXRlc1xuICAgICAqICYgd2FpdCBzb3VyY2Ugc3RvcmVzIHN0YWJpbGl6YXRpb24gYmVmb3JlIHB1c2hpbmcgdGhlc2Ugc3RhdGUgdXBkYXRlc1xuICAgICAqIEBwYXJhbSBwU3RhdGVcbiAgICAgKiBAcGFyYW0gY2JcbiAgICAgKi9cbiAgICBzZXRTdGF0ZSggcFN0YXRlLCBjYiwgc3luYyApIHtcbiAgICAgICAgdmFyIGkgICAgICAgPSAwLCBjaGFuZ2UsXG4gICAgICAgICAgICBjaGFuZ2VzID0gdGhpcy5fY2hhbmdlc1NXID0gdGhpcy5fY2hhbmdlc1NXIHx8IHt9O1xuICAgICAgICBmb3IgKCB2YXIgayBpbiBwU3RhdGUgKVxuICAgICAgICAgICAgaWYgKCAhdGhpcy5zdGF0ZVxuICAgICAgICAgICAgICAgICB8fCBjaGFuZ2VzLmhhc093blByb3BlcnR5KGspLy8gdG9kb1xuICAgICAgICAgICAgICAgICAmJiAoXG4gICAgICAgICAgICAgICAgICAgICBwU3RhdGVbIGsgXSAhPT0gY2hhbmdlc1sgayBdXG4gICAgICAgICAgICAgICAgICkgfHwgcFN0YXRlLmhhc093blByb3BlcnR5KGspXG4gICAgICAgICAgICAgICAgICYmIChcbiAgICAgICAgICAgICAgICAgcFN0YXRlWyBrIF0gIT09IHRoaXMuc3RhdGVbIGsgXVxuICAgICAgICAgICAgICAgICB8fFxuICAgICAgICAgICAgICAgICAoIHRoaXMuc3RhdGVbIGsgXSAmJiBwU3RhdGVbIGsgXSAmJiAoIHBTdGF0ZVsgayBdLl9yZXYgIT0gdGhpcy5fcmV2c1sgayBdICkgKS8vIHJldi9oYXNoIHVwZGF0ZVxuICAgICAgICAgICAgICAgICApICkge1xuICAgICAgICAgICAgICAgIGNoYW5nZSAgICAgICAgICA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5fcmV2c1sgayBdID0gcFN0YXRlWyBrIF0gJiYgcFN0YXRlWyBrIF0uX3JldiB8fCB0cnVlO1xuICAgICAgICAgICAgICAgIGNoYW5nZXNbIGsgXSAgICA9IHBTdGF0ZVsgayBdO1xuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdGhpcy5fbmV4dFN0YXRlID0geyAuLi50aGlzLnN0YXRlLCAuLi5jaGFuZ2VzIH07XG4gICAgICAgIGlmICggIXRoaXMuc2hvdWxkQXBwbHkodGhpcy5fbmV4dFN0YXRlKSApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKCBzeW5jICkge1xuICAgICAgICAgICAgdGhpcy5wdXNoU3RhdGUoKTtcbiAgICAgICAgICAgIGNiICYmIGNiKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoIGNoYW5nZSApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YWJpbGl6ZShjYik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGNiICYmIGNiKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSB0aGUgY3VycmVudCBzdGF0ZSAmIHB1c2ggaXRcbiAgICAgKiBAcGFyYW0gcFN0YXRlXG4gICAgICogQHBhcmFtIGNiXG4gICAgICovXG4gICAgc2V0U3RhdGVTeW5jKCBwU3RhdGUgKSB7XG4gICAgICAgIHZhciBpICAgICAgID0gMCwgY2hhbmdlLFxuICAgICAgICAgICAgY2hhbmdlcyA9IHRoaXMuX2NoYW5nZXNTVyA9IHRoaXMuX2NoYW5nZXNTVyB8fCB7fTtcbiAgICAgICAgZm9yICggdmFyIGsgaW4gcFN0YXRlIClcbiAgICAgICAgICAgIGlmICggIXRoaXMuc3RhdGUgfHwgcFN0YXRlLmhhc093blByb3BlcnR5KGspXG4gICAgICAgICAgICAgICAgICYmIChcbiAgICAgICAgICAgICAgICAgcFN0YXRlWyBrIF0gIT0gdGhpcy5zdGF0ZVsgayBdXG4gICAgICAgICAgICAgICAgIHx8XG4gICAgICAgICAgICAgICAgICggdGhpcy5zdGF0ZVsgayBdICYmIHBTdGF0ZVsgayBdICYmICggcFN0YXRlWyBrIF0uX3JldiAhPSB0aGlzLl9yZXZzWyBrIF0gKSApLy8gcmV2L2hhc2ggdXBkYXRlXG4gICAgICAgICAgICAgICAgICkgKSB7XG4gICAgICAgICAgICAgICAgY2hhbmdlICAgICAgICAgID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLl9yZXZzWyBrIF0gPSBwU3RhdGVbIGsgXSAmJiBwU3RhdGVbIGsgXS5fcmV2IHx8IHRydWU7XG4gICAgICAgICAgICAgICAgY2hhbmdlc1sgayBdICAgID0gcFN0YXRlWyBrIF07XG4gICAgICAgICAgICB9XG4gICAgICAgIHRoaXMuc2hvdWxkQXBwbHkoeyAuLi4oIHRoaXMuc3RhdGUgfHwge30gKSwgLi4uY2hhbmdlcyB9KSAmJiB0aGlzLnB1c2hTdGF0ZSgpO1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBnZXQgYSBzdG9yZS1rZXkgcGFpciBmb3IgU3RvcmU6Om1hcFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gICAgICogQHJldHVybnMge3tzdG9yZTogU3RvcmUsIG5hbWU6ICp9fVxuICAgICAqL1xuICAgIGFzKCBuYW1lICkge1xuICAgICAgICByZXR1cm4geyBzdG9yZTogdGhpcywgbmFtZSB9O1xuICAgIH1cbiAgICBcbiAgICBvbiggbGlzdHMgKSB7XG4gICAgICAgIGlmICggIWlzLnN0cmluZyhsaXN0cykgJiYgbGlzdHMgKVxuICAgICAgICAgICAgT2JqZWN0LmtleXMobGlzdHMpLmZvckVhY2goayA9PiBzdXBlci5vbihrLCBsaXN0c1sgayBdKSk7XG4gICAgICAgIGVsc2Ugc3VwZXIub24oLi4uYXJndW1lbnRzKTtcbiAgICB9XG4gICAgXG4gICAgcmVtb3ZlTGlzdGVuZXIoIGxpc3RzICkge1xuICAgICAgICBpZiAoICFpcy5zdHJpbmcobGlzdHMpICYmIGxpc3RzIClcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGxpc3RzKS5mb3JFYWNoKGsgPT4gc3VwZXIucmVtb3ZlTGlzdGVuZXIoaywgbGlzdHNbIGsgXSkpO1xuICAgICAgICBlbHNlIHN1cGVyLnJlbW92ZUxpc3RlbmVyKC4uLmFyZ3VtZW50cyk7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIGlzIGNvbXBsZXRlIChhbGwgcmVxdWllcmVkIGtleXMgYXJlIGhlcmUpXG4gICAgICogQHJldHVybnMgYm9vbFxuICAgICAqL1xuICAgIGlzQ29tcGxldGUoIHN0YXRlID0gdGhpcy5zdGF0ZSApIHtcbiAgICAgICAgdmFyIF9zdGF0aWMgPSB0aGlzLmNvbnN0cnVjdG9yO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgIXRoaXMuX3JlcXVpcmVcbiAgICAgICAgICAgIHx8ICF0aGlzLl9yZXF1aXJlLmxlbmd0aFxuICAgICAgICAgICAgfHwgc3RhdGUgJiYgdGhpcy5fcmVxdWlyZS5yZWR1Y2UoXG4gICAgICAgICAgICAgICAgKCByLCBrZXkgKSA9PiAoIHIgJiYgc3RhdGVbIGtleSBdICksXG4gICAgICAgICAgICAgICAgdHJ1ZVxuICAgICAgICAgICAgKVxuICAgICAgICApO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBpcyBzdGFibGVcbiAgICAgKiBAcmV0dXJucyBib29sXG4gICAgICovXG4gICAgaXNTdGFibGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zdGFibGU7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIFNlcmlhbGl6ZSBzdGF0ZSAmIGRhdGEgd2l0aCBzb3VyY2VzIHJlZnNcbiAgICAgKiBAcmV0dXJucyBib29sXG4gICAgICovXG4gICAgc2VyaWFsaXplKCBjZmcgPSB7fSwgb3V0cHV0ID0ge30gKSB7XG4gICAgICAgIGxldCByZWZzID1cbiAgICAgICAgICAgICAgICAhY2ZnLm5vcmVmcyAmJiBpcy5hcnJheSh0aGlzLl91c2UpICYmIHRoaXMuX3VzZS5yZWR1Y2UoXG4gICAgICAgICAgICAgICAgKCBtYXAsIGtleSApID0+IHsvL3RvZG9cbiAgICAgICAgICAgICAgICAgICAgbGV0IG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlhcywgcGF0aCwgX2tleSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIGtleS5zdG9yZSAmJiBrZXkubmFtZSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWFzID0gbmFtZSA9IGtleS5uYW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmUgPSBrZXkuc3RvcmU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoIGlzLmZuKGtleSkgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lID0gYWxpYXMgPSBrZXkubmFtZSB8fCBrZXkuZGVmYXVsdE5hbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9yZSA9IGtleTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9rZXkgID0ga2V5Lm1hdGNoKC8oW1xcd19dKykoKD86XFwuW1xcd19dKykqKSg/OlxcOihbXFx3X10rKSk/Lyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lICA9IF9rZXlbIDEgXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGggID0gX2tleVsgMiBdICYmIF9rZXlbIDIgXS5zdWJzdHIoMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9yZSA9IHRoaXMuc2NvcGVPYmouc3RvcmVzWyBfa2V5WyAxIF0gXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWFzID0gX2tleVsgMyBdIHx8IHBhdGggJiYgcGF0aC5tYXRjaCgvKFteXFwuXSopJC8pWyAwIF0gfHwgX2tleVsgMSBdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICggc3RvcmUgJiYgIXN0b3JlLnNjb3BlT2JqLl8uaXNMb2NhbElkIClcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcFsgYWxpYXMgXSA9IHN0b3JlLnNjb3BlT2JqLl9pZCArICcvJyArIG5hbWU7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtYXA7XG4gICAgICAgICAgICAgICAgfSwge31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHx8IHt9O1xuICAgICAgICBcbiAgICAgICAga2V5V2Fsa25TZXQoXG4gICAgICAgICAgICBvdXRwdXQsXG4gICAgICAgICAgICAoIHRoaXMuc2NvcGVPYmouX2lkICsgJy8nICsgdGhpcy5uYW1lICksXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGU6IHRoaXMuc3RhdGUgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgY2ZnLm5vcmVmc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB7IC4uLnRoaXMuc3RhdGUgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBPYmplY3Qua2V5cyh0aGlzLnN0YXRlKS5yZWR1Y2UoKCBoLCBrICkgPT4gKCAhcmVmc1sgayBdICYmICggaFsgayBdID0gdGhpcy5zdGF0ZVsgayBdICksIGggKSwge30pXG4gICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgZGF0YSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhLl9fcHJvdG9fXyA9PT0gb2JqUHJvdG8gP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICggaXMuYm9vbCh0aGlzLmRhdGEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHx8IGlzLm51bWJlcih0aGlzLmRhdGEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHx8IGlzLnN0cmluZyh0aGlzLmRhdGEpICkgJiYgdGhpcy5kYXRhXG4gICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgfHwgdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLFxuICAgICAgICAgICAgICAgIHJlZnNcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogcmVzdG9yZSBzdGF0ZSAmIGRhdGFcbiAgICAgKiBAcmV0dXJucyBib29sXG4gICAgICovXG4gICAgcmVzdG9yZSggc25hcHNob3QsIGltbWVkaWF0ZSApIHtcbiAgICAgICAgc25hcHNob3QgPSBzbmFwc2hvdFxuICAgICAgICAgICAgICAgICAgICYmIGtleVdhbGtuR2V0KHNuYXBzaG90LCB0aGlzLnNjb3BlT2JqLl9pZCArICcvJyArIHRoaXMubmFtZSlcbiAgICAgICAgICAgICAgICAgICB8fCB0aGlzLiRzY29wZS50YWtlU25hcHNob3RCeUtleSh0aGlzLnNjb3BlT2JqLl9pZCArICcvJyArIHRoaXMubmFtZSk7XG4gICAgICAgIFxuICAgICAgICBpZiAoICFzbmFwc2hvdCApXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIFxuICAgICAgICBpZiAoIHNuYXBzaG90ICkge1xuICAgICAgICAgICAgaWYgKCAhdGhpcy5pc1N0YWJsZSgpICYmICFpbW1lZGlhdGUgKVxuICAgICAgICAgICAgICAgIHRoaXMudGhlbigoKSA9PiByZXN0b3JlKHNuYXBzaG90KSlcbiAgICAgICAgICAgIGxldCBzbmFwO1xuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IHsgLi4uc25hcHNob3Quc3RhdGUgfTtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHNuYXBzaG90LnJlZnMpLmZvckVhY2goXG4gICAgICAgICAgICAgICAgKCBrZXkgKSA9PiB7Ly90b2RvXG4gICAgICAgICAgICAgICAgICAgIGlmICggc25hcCA9IHRoaXMuJHNjb3BlLmdldFNuYXBzaG90QnlLZXkoc25hcHNob3QucmVmc1sga2V5IF0pIClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGVbIGtleSBdID0gc25hcC5kYXRhO1xuICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ25vdCBmb3VuZCA6ICcsIGtleSwgc25hcCAmJiBzbmFwLnJlZnNbIGtleSBdKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5kYXRhID0gc25hcHNob3QuZGF0YTtcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIFVuIGJpbmQgdGhpcyBzdG9yZSBvZmYgdGhlIGdpdmVuIGNvbXBvbmVudC1rZXlcbiAgICAgKiBAcGFyYW0gb2JqXG4gICAgICogQHBhcmFtIGtleVxuICAgICAqIEByZXR1cm5zIHtBcnJheS48Kj59XG4gICAgICovXG4gICAgdW5CaW5kKCBvYmosIGtleSwgcGF0aCApIHtcbiAgICAgICAgdmFyIGZvbGxvd2VycyA9IHRoaXMuX2ZvbGxvd2VycyxcbiAgICAgICAgICAgIGkgICAgICAgICA9IGZvbGxvd2VycyAmJiBmb2xsb3dlcnMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGZvbGxvd2VycyAmJiBpLS0gKVxuICAgICAgICAgICAgaWYgKCBmb2xsb3dlcnNbIGkgXVsgMCBdID09PSBvYmogJiYgZm9sbG93ZXJzWyBpIF1bIDEgXSA9PT0ga2V5ICYmIGZvbGxvd2Vyc1sgaSBdWyAyIF0gPT09IHBhdGggKVxuICAgICAgICAgICAgICAgIHJldHVybiBmb2xsb3dlcnMuc3BsaWNlKGksIDEpO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBCaW5kIHRoaXMgc3RvcmUgY2hhbmdlcyB0byB0aGUgZ2l2ZW4gY29tcG9uZW50LWtleVxuICAgICAqIEBwYXJhbSBvYmoge1JlYWN0LkNvbXBvbmVudHxTdG9yZXxmdW5jdGlvbilcbiAgICAgKiBAcGFyYW0ga2V5IHtzdHJpbmd9IG9wdGlvbmFsIGtleSB3aGVyZSB0byBtYXAgdGhlIHB1YmxpYyBzdGF0ZVxuICAgICAqL1xuICAgIGJpbmQoIG9iaiwga2V5LCBzZXRJbml0aWFsID0gdHJ1ZSwgcGF0aCApIHtcbiAgICAgICAgdGhpcy5fZm9sbG93ZXJzLnB1c2goWyBvYmosIGtleSwgcGF0aCBdKTtcbiAgICAgICAgaWYgKCBzZXRJbml0aWFsICYmIHRoaXMuZGF0YSAmJiB0aGlzLl9zdGFibGUgKSB7XG4gICAgICAgICAgICBsZXQgZGF0YSA9IHBhdGggPyB0aGlzLnJldHJpZXZlKHBhdGgpIDogdGhpcy5kYXRhO1xuICAgICAgICAgICAgaWYgKCB0eXBlb2Ygb2JqICE9IFwiZnVuY3Rpb25cIiApIHtcbiAgICAgICAgICAgICAgICBpZiAoIGtleSApIG9iai5zZXRTdGF0ZSh7IFsga2V5IF06IGRhdGEgfSk7XG4gICAgICAgICAgICAgICAgZWxzZSBvYmouc2V0U3RhdGUoZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBvYmooZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogb25jZSgnc3RhYmxlJywgY2IpXG4gICAgICogQHBhcmFtIG9iaiB7UmVhY3QuQ29tcG9uZW50fFN0b3JlfGZ1bmN0aW9uKVxuICAgICAqIEBwYXJhbSBrZXkge3N0cmluZ30gb3B0aW9uYWwga2V5IHdoZXJlIHRvIG1hcCB0aGUgcHVibGljIHN0YXRlXG4gICAgICovXG4gICAgdGhlbiggY2IgKSB7XG4gICAgICAgIGlmICggdGhpcy5fc3RhYmxlIClcbiAgICAgICAgICAgIHJldHVybiBjYih0aGlzLmRhdGEpO1xuICAgICAgICB0aGlzLm9uY2UoJ3N0YWJsZScsIGUgPT4gY2IodGhpcy5kYXRhKSk7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIEFkZCBhIGxvY2sgc28gdGhlIHN0b3JlIHdpbGwgbm90IHByb3BhZyBpdCBkYXRhIHVudGlsbCByZWxlYXNlKCkgaXMgY2FsbFxuICAgICAqIEBwYXJhbSBwcmV2aW91cyB7U3RvcmV8bnVtYmVyfEFycmF5fSBAb3B0aW9uYWwgd2YgdG8gd2FpdCwgcmVsZWFzZXMgdG8gd2FpdCBvclxuICAgICAqICAgICBhcnJheSBvZiBzdHVmZiB0byB3YWl0XG4gICAgICogQHJldHVybnMge3RoaXN9XG4gICAgICovXG4gICAgd2FpdCggcHJldmlvdXMgKSB7XG4gICAgICAgIGlmICggdHlwZW9mIHByZXZpb3VzID09IFwibnVtYmVyXCIgKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX19sb2Nrcy5hbGwgKz0gcHJldmlvdXM7XG4gICAgICAgIGlmICggaXMuYXJyYXkocHJldmlvdXMpIClcbiAgICAgICAgICAgIHJldHVybiBwcmV2aW91cy5tYXAodGhpcy53YWl0LmJpbmQodGhpcykpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fc3RhYmxlICYmIHRoaXMuZW1pdCgndW5zdGFibGUnLCB0aGlzLnN0YXRlLCB0aGlzLmRhdGEpO1xuICAgICAgICB0aGlzLl9zdGFibGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fX2xvY2tzLmFsbCsrO1xuICAgICAgICBcbiAgICAgICAgbGV0IHJlYXNvbiA9IGlzLnN0cmluZyhwcmV2aW91cykgPyBwcmV2aW91cyA6IG51bGw7XG4gICAgICAgIGlmICggcmVhc29uICkge1xuICAgICAgICAgICAgdGhpcy5fX2xvY2tzWyByZWFzb24gXSA9IHRoaXMuX19sb2Nrc1sgcmVhc29uIF0gfHwgMDtcbiAgICAgICAgICAgIHRoaXMuX19sb2Nrc1sgcmVhc29uIF0rKztcbiAgICAgICAgfVxuICAgICAgICBpZiAoIHByZXZpb3VzICYmIGlzLmZuKHByZXZpb3VzLnRoZW4pICkge1xuICAgICAgICAgICAgcHJldmlvdXMudGhlbih0aGlzLnJlbGVhc2UuYmluZCh0aGlzLCBudWxsKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIERlY3JlYXNlIGxvY2tzIGZvciB0aGlzIHN0b3JlLCBpZiBpdCByZWFjaCAwICxcbiAgICAgKiBpdCB3aWxsIGJlIHByb3BhZ2F0ZWQgdG8gdGhlIGZvbGxvd2VycyxcbiAgICAgKiB0aGVuLCBhbGwgc3R1ZmYgcGFzc2VkIHRvIFwidGhlblwiIGNhbGwgYmFjayB3aWxsIGJlIGV4ZWMgLyByZWxlYXNlZFxuICAgICAqIEBwYXJhbSBkZXN5bmNcbiAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgKi9cbiAgICByZWxlYXNlKCByZWFzb24sIGNiICkge1xuICAgICAgICB2YXIgX3N0YXRpYyA9IHRoaXMuY29uc3RydWN0b3IsIG1lID0gdGhpcztcbiAgICAgICAgbGV0IGkgICAgICAgPSAwLCB3YXNTdGFibGUgPSB0aGlzLl9zdGFibGU7XG4gICAgICAgIFxuICAgICAgICBpZiAoIGlzLmZuKHJlYXNvbikgKSB7XG4gICAgICAgICAgICBjYiAgICAgPSByZWFzb247XG4gICAgICAgICAgICByZWFzb24gPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAoIHJlYXNvbiApIHtcbiAgICAgICAgICAgIGlmICggdGhpcy5fX2xvY2tzWyByZWFzb24gXSA9PSAwIClcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiUmVsZWFzZSBtb3JlIHRoYW4gbG9ja2luZyAhXCIsIHJlYXNvbik7XG4gICAgICAgICAgICB0aGlzLl9fbG9ja3NbIHJlYXNvbiBdID0gdGhpcy5fX2xvY2tzWyByZWFzb24gXSB8fCAwO1xuICAgICAgICAgICAgdGhpcy5fX2xvY2tzWyByZWFzb24gXS0tO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAoICFyZWFzb24gJiYgdGhpcy5fX2xvY2tzLmFsbCA9PSAwIClcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJSZWxlYXNlIG1vcmUgdGhhbiBsb2NraW5nICFcIik7XG4gICAgICAgIFxuICAgICAgICBpZiAoICEtLXRoaXMuX19sb2Nrcy5hbGwgJiYgdGhpcy5pc0NvbXBsZXRlKCkgKSB7XG4gICAgICAgICAgICBsZXQgcHJvcGFnICAgPSB0aGlzLnNob3VsZFByb3BhZyh0aGlzLmRhdGEpO1xuICAgICAgICAgICAgdGhpcy5fc3RhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIHByb3BhZyAmJiB0aGlzLl9yZXYrKzsvL1xuICAgICAgICAgICAgaWYgKCBwcm9wYWcgJiYgdGhpcy5fZm9sbG93ZXJzLmxlbmd0aCApXG4gICAgICAgICAgICAgICAgdGhpcy5fZm9sbG93ZXJzLmZvckVhY2goZnVuY3Rpb24gcHJvcGFnKCBmb2xsb3dlciApIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSBmb2xsb3dlclsgMiBdID8gbWUucmV0cmlldmUoZm9sbG93ZXJbIDIgXSkgOiBtZS5kYXRhO1xuICAgICAgICAgICAgICAgICAgICAvL2lmICggIWRhdGEgKSByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpZiAoIHR5cGVvZiBmb2xsb3dlclsgMCBdID09IFwiZnVuY3Rpb25cIiApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbGxvd2VyWyAwIF0oZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NiICYmIGkrKztcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbGxvd2VyWyAwIF0uc2V0U3RhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKCBmb2xsb3dlclsgMSBdICkgPyB7IFsgZm9sbG93ZXJbIDEgXSBdOiBkYXRhIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGRhdGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2NiICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAoKSA9PiAoISgtLWkpICYmIGNiKCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8pXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvL2Vsc2VcbiAgICAgICAgICAgICF3YXNTdGFibGUgJiYgdGhpcy5lbWl0KCdzdGFibGUnLCB0aGlzLmRhdGEpO1xuICAgICAgICAgICAgcHJvcGFnICYmIHRoaXMuZW1pdCgndXBkYXRlJywgdGhpcy5kYXRhKTtcbiAgICAgICAgICAgIGNiICYmIGNiKClcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGNiICYmIHRoaXMudGhlbihjYik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBcbiAgICBwcm9wYWcoIGRhdGEgKSB7XG4gICAgICAgIHRoaXMuZW1pdCgndXBkYXRlJywgZGF0YSk7XG4gICAgfVxuICAgIFxuICAgIHJldGFpbiggcmVhc29uICkge1xuICAgICAgICB0aGlzLl9fcmV0YWlucy5hbGwrKztcbiAgICAgICAgaWYgKCByZWFzb24gKSB7XG4gICAgICAgICAgICB0aGlzLl9fcmV0YWluc1sgcmVhc29uIF0gPSB0aGlzLl9fcmV0YWluc1sgcmVhc29uIF0gfHwgMDtcbiAgICAgICAgICAgIHRoaXMuX19yZXRhaW5zWyByZWFzb24gXSsrO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGRpc3Bvc2UoIHJlYXNvbiApIHtcbiAgICAgICAgLy9jb25zb2xlLndhcm4oXCJkaXNwb3NlXCIsIHJlYXNvbiwgdGhpcy5fX3JldGFpbnMpO1xuICAgICAgICBpZiAoIHJlYXNvbiApIHtcbiAgICAgICAgICAgIGlmICggIXRoaXMuX19yZXRhaW5zWyByZWFzb24gXSApXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUlMgOiBEaXNwb3NlIG1vcmUgdGhhbiByZXRhaW5pbmcgb24gc3RvcmUgJ1wiICsgdGhpcy5uYW1lICsgXCInIDogXCIgKyByZWFzb24pO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLl9fcmV0YWluc1sgcmVhc29uIF0tLTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIHRoaXMuX19yZXRhaW5zLmFsbCA9PSAwIClcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlJTIDogRGlzcG9zZSBtb3JlIHRoYW4gcmV0YWluaW5nIG9uIHN0b3JlIFwiICsgdGhpcy5uYW1lICk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9fcmV0YWlucy5hbGwtLTtcbiAgICAgICAgXG4gICAgICAgIGlmICggIXRoaXMuX19yZXRhaW5zLmFsbCApIHtcbiAgICAgICAgICAgIGlmICggdGhpcy5fcGVyc2lzdGVuY2VUbSApIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9kZXN0cm95VE0gJiYgY2xlYXJUaW1lb3V0KHRoaXMuX2Rlc3Ryb3lUTSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fZGVzdHJveVRNID0gc2V0VGltZW91dChcbiAgICAgICAgICAgICAgICAgICAgZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9kZXN0cm95VE0gPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy90aGlzLnRoZW4ocyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAhdGhpcy5fX3JldGFpbnMuYWxsICYmICF0aGlzLmRlYWQgJiYgdGhpcy5kZXN0cm95KClcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vfSk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3BlcnNpc3RlbmNlVG1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy90aGlzLnRoZW4ocyA9PlxuICAgICAgICAgICAgICAgICggIXRoaXMuX19yZXRhaW5zLmFsbCAmJiAhdGhpcy5kZWFkICYmIHRoaXMuZGVzdHJveSgpIClcbiAgICAgICAgICAgICAgICAvLyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgLy8gIGNvbnNvbGUubG9nKFwiZGVzdHJveVwiLCB0aGlzLl91aWQpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5lbWl0KCdkZXN0cm95JywgdGhpcyk7XG4gICAgICAgIGlmICggdGhpcy5fc3RhYmlsaXplciApXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5fc3RhYmlsaXplcik7XG4gICAgICAgIFxuICAgICAgICBpZiAoIHRoaXMuX2ZvbGxvd2Vycy5sZW5ndGggKVxuICAgICAgICAgICAgdGhpcy5fZm9sbG93ZXJzLmZvckVhY2goXG4gICAgICAgICAgICAgICAgKCBmb2xsb3dlciApID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCB0eXBlb2YgZm9sbG93ZXJbIDAgXSAhPT0gXCJmdW5jdGlvblwiICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBmb2xsb3dlclsgMCBdLnN0b3JlcyApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGZvbGxvd2VyWyAwIF0uc3RvcmVzWyBmb2xsb3dlclsgMSBdIF07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICB0aGlzLl9mb2xsb3dlcnMubGVuZ3RoID0gMDtcbiAgICAgICAgdGhpcy5jb25zdHJ1Y3Rvci5fcmV2ICA9IHRoaXMucmV2O1xuICAgICAgICB0aGlzLmRlYWQgICAgICAgICAgICAgID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fcmV2cyAgICAgICAgICAgICA9IHRoaXMuZGF0YSA9IHRoaXMuc3RhdGUgPSB0aGlzLnNjb3BlID0gbnVsbDtcbiAgICAgICAgdGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoKTtcbiAgICB9XG59XG5cbi8qKlxuICogZ2V0IGEgc3RhdGljIGFsaWFzZWQgcmVmZXJlbmNlIG9mIGEgc3RvcmVcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKiBAcmV0dXJucyB7e3N0b3JlOiBTdG9yZSwgbmFtZTogKn19XG4gKi9cblN0b3JlLmFzID0gZnVuY3Rpb24gKCBuYW1lICkge1xuICAgIHJldHVybiB7IHN0b3JlOiB0aGlzLCBuYW1lIH07XG59XG5cbi8qKlxuICogTWFwIGFsbCBuYW1lZCBzdG9yZXMgaW4ge2tleXN9IHRvIHRoZSB7b2JqZWN0fSdzIHN0YXRlXG4gKiBIb29rIGNvbXBvbmVudFdpbGxVbm1vdW50IChmb3IgcmVhY3QgY29tcCkgb3IgZGVzdHJveSB0byB1bkJpbmQgdGhlbSBhdXRvbWF0aWNhbGx5XG4gKiBAc3RhdGljXG4gKiBAcGFyYW0gb2JqZWN0IHtPYmplY3R9IHRhcmdldCBzdGF0ZSBhd2FyZSBvYmplY3QgKFJlYWN0LkNvbXBvbmVudHxTdG9yZXwuLi4pXG4gKiBAcGFyYW0ga2V5cyB7QXJyYXl9IEV4IDogW1wic2Vzc2lvblwiLCBcIm90aGVyU3RhdGljTmFtZWRTdG9yZTprZXlcIixcbiAqICAgICBzdG9yZS5hcygnYW5vdGhlcktleScpXVxuICovXG5TdG9yZS5tYXAgPSBmdW5jdGlvbiAoIGNTdG9yZSwga2V5cywgc2NvcGUsIG9yaWdpbiwgc2V0SW5pdGlhbCA9IGZhbHNlICkge1xuICAgIHZhciB0YXJnZXRSZXZzICAgICA9IGNTdG9yZS5fcmV2cyB8fCB7fTtcbiAgICB2YXIgdGFyZ2V0U2NvcGUgICAgPSBjU3RvcmUuc3RvcmVzIHx8ICggY1N0b3JlLnN0b3JlcyA9IHt9ICk7XG4gICAgdmFyIGluaXRpYWxPdXRwdXRzID0ge307XG4gICAga2V5cyAgICAgICAgICAgICAgID0gaXMuYXJyYXkoa2V5cykgPyBbIC4uLmtleXMgXSA6IFsga2V5cyBdO1xuICAgIFxuICAgIFxuICAgIHNjb3BlID0gc2NvcGUgfHwgU3RvcmUuc3RhdGljU2NvcGU7XG4gICAgXG4gICAga2V5cyA9IGtleXMuZmlsdGVyKFxuICAgICAgICAvLyBAdG9kbyA6IHVzZSBxdWVyeSByZWZzXG4gICAgICAgIC8vIChzdG9yZSkoXFwuc3RvcmUpKihcXFsoXFwqfChwcm9wcylcXHcrKSspXFxdKT8oXFw6YWxpYXMpXG4gICAgICAgICgga2V5ICkgPT4ge1xuICAgICAgICAgICAgaWYgKCAha2V5ICkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJOb3QgYSBtYXBwYWJsZSBzdG9yZSBpdGVtICdcIiArIGtleSArIFwiJyBpbiBcIiArIG9yaWdpbiArICcgISEnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgbmFtZSxcbiAgICAgICAgICAgICAgICBhbGlhcyxcbiAgICAgICAgICAgICAgICBwYXRoLFxuICAgICAgICAgICAgICAgIHN0b3JlLCBfa2V5O1xuICAgICAgICAgICAgaWYgKCBrZXkuc3RvcmUgJiYga2V5Lm5hbWUgKSB7XG4gICAgICAgICAgICAgICAgYWxpYXMgPSBuYW1lID0ga2V5Lm5hbWU7XG4gICAgICAgICAgICAgICAgc3RvcmUgPSBrZXkuc3RvcmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICggaXMuZm4oa2V5KSApIHtcbiAgICAgICAgICAgICAgICBuYW1lID0gYWxpYXMgPSBrZXkubmFtZSB8fCBrZXkuZGVmYXVsdE5hbWU7XG4gICAgICAgICAgICAgICAgc3RvcmUgPSBrZXk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBfa2V5ICA9IGtleS5tYXRjaCgvKFtcXHdfXSspKCg/OlxcLltcXHdfXSspKikoPzpcXDooW1xcd19dKykpPy8pO1xuICAgICAgICAgICAgICAgIG5hbWUgID0gX2tleVsgMSBdO1xuICAgICAgICAgICAgICAgIHBhdGggID0gX2tleVsgMiBdICYmIF9rZXlbIDIgXS5zdWJzdHIoMSk7XG4gICAgICAgICAgICAgICAgc3RvcmUgPSBzY29wZS5zdG9yZXNbIF9rZXlbIDEgXSBdO1xuICAgICAgICAgICAgICAgIGFsaWFzID0gX2tleVsgMyBdIHx8IHBhdGggJiYgcGF0aC5tYXRjaCgvKFteXFwuXSopJC8pWyAwIF0gfHwgX2tleVsgMSBdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCAhc3RvcmUgKSB7XG4gICAgICAgICAgICAgICAgbGV0IGkgPSBbXTtcbiAgICAgICAgICAgICAgICBmb3IgKCB2YXIgbyBpbiBzY29wZS5zdG9yZXMgKVxuICAgICAgICAgICAgICAgICAgICBpLnB1c2gobylcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiTm90IGEgbWFwcGFibGUgc3RvcmUgaXRlbSAnXCIgKyBuYW1lICsgXCIvXCIgKyBhbGlhcyArIFwiJyBpbiBcIiArICggY1N0b3JlLm5hbWUgfHwgY1N0b3JlICkgKyAnICEhJywgc3RvcmUsIF9rZXksIHNjb3BlLnN0b3JlcywgaSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCBpcy5yc1Njb3BlKHN0b3JlLnByb3RvdHlwZSkgKSBzY29wZS5fbW91bnQobmFtZSk7XG4gICAgICAgICAgICBpZiAoIGlzLnJzU2NvcGUoc3RvcmUpICkge1xuICAgICAgICAgICAgICAgIHN0b3JlID0gc2NvcGUuX21vdW50KGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICggdGFyZ2V0UmV2c1sgbmFtZSBdICkgcmV0dXJuIGZhbHNlOy8vIGlnbm9yZSBkYmwgdXNlcyBmb3Igbm93XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKCBpcy5mbihzdG9yZSkgKSB7XG4gICAgICAgICAgICAgICAgc2NvcGUuX21vdW50KG5hbWUpXG4gICAgICAgICAgICAgICAgc2NvcGUuc3RvcmVzWyBuYW1lIF0uYmluZChjU3RvcmUsIGFsaWFzLCBzZXRJbml0aWFsLCBwYXRoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHN0b3JlLmJpbmQoY1N0b3JlLCBhbGlhcywgc2V0SW5pdGlhbCwgcGF0aCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIGdpdmUgaW5pdGlhbCBzdG9yZSB3ZWlnaHQgYmFzaW5nIHNvdXJjZXNcbiAgICAgICAgICAgIHNjb3BlLnN0b3Jlc1sgbmFtZSBdLl9zb3VyY2VzICYmIGNTdG9yZS5fc291cmNlcy5wdXNoKC4uLnNjb3BlLnN0b3Jlc1sgbmFtZSBdLl9zb3VyY2VzKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGFyZ2V0UmV2c1sgYWxpYXMgXSA9IHRhcmdldFJldnNbIGFsaWFzIF0gfHwgdHJ1ZTtcbiAgICAgICAgICAgICF0YXJnZXRTY29wZVsgbmFtZSBdICYmICggdGFyZ2V0U2NvcGVbIG5hbWUgXSA9IHNjb3BlLnN0b3Jlc1sgbmFtZSBdICk7XG4gICAgICAgICAgICBpZiAoIHNjb3BlLnN0b3Jlc1sgbmFtZSBdLmhhc093blByb3BlcnR5KCdkYXRhJykgKVxuICAgICAgICAgICAgICAgIGluaXRpYWxPdXRwdXRzWyBuYW1lIF0gPSBzY29wZS5kYXRhWyBuYW1lIF07XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICk7XG4gICAgXG4gICAgLy8gLi4uIEB0b2RvXG4gICAgY1N0b3JlLm9uY2UoJ2Rlc3Ryb3knLCAoIC4uLmFyZ3ogKSA9PiB7XG4gICAgICAgIGtleXMubWFwKFxuICAgICAgICAgICAgKCBrZXkgKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IG5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGFsaWFzLCBwYXRoLFxuICAgICAgICAgICAgICAgICAgICBzdG9yZTtcbiAgICAgICAgICAgICAgICBpZiAoIGtleS5zdG9yZSAmJiBrZXkubmFtZSApIHtcbiAgICAgICAgICAgICAgICAgICAgYWxpYXMgPSBuYW1lID0ga2V5Lm5hbWU7XG4gICAgICAgICAgICAgICAgICAgIHN0b3JlID0ga2V5LnN0b3JlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICggaXMuZm4oa2V5KSApIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZSA9IGFsaWFzID0ga2V5Lm5hbWUgfHwga2V5LmRlZmF1bHROYW1lO1xuICAgICAgICAgICAgICAgICAgICBzdG9yZSA9IHNjb3BlLnN0b3Jlc1sgbmFtZSBdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAga2V5ICAgPSBrZXkubWF0Y2goLyhbXFx3X10rKSgoPzpcXC5bXFx3X10rKSopKD86XFw6KFtcXHdfXSspKT8vKTtcbiAgICAgICAgICAgICAgICAgICAgbmFtZSAgPSBrZXlbIDEgXTtcbiAgICAgICAgICAgICAgICAgICAgcGF0aCAgPSBrZXlbIDIgXSAmJiBrZXlbIDIgXS5zdWJzdHIoMSk7XG4gICAgICAgICAgICAgICAgICAgIHN0b3JlID0gc2NvcGUuc3RvcmVzWyBrZXlbIDEgXSBdO1xuICAgICAgICAgICAgICAgICAgICBhbGlhcyA9IGtleVsgMyBdIHx8IHBhdGggJiYgcGF0aC5tYXRjaCgvKFteXFwuXSopJC8pWyAwIF0gfHwga2V5WyAxIF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHN0b3JlICYmICFpcy5mbihzdG9yZSkgJiYgc3RvcmUudW5CaW5kKGNTdG9yZSwgYWxpYXMsIHBhdGgpXG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfSlcbiAgICBcbiAgICByZXR1cm4gaW5pdGlhbE91dHB1dHM7XG59O1xuXG5cbmlzLnJzU3RvcmUgPSBmdW5jdGlvbiAoIG9iaiApIHtcbiAgICByZXR1cm4gb2JqIGluc3RhbmNlb2YgU3RvcmVcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RvcmU7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1N0b3JlLmpzIiwiLypcbiAqIENvcHlyaWdodCAoYykgIDIwMTggV2lzZSBXaWxkIFdlYiAuXG4gKlxuICogIE1JVCBMaWNlbnNlXG4gKlxuICogIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqICBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiAgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqICBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqICBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqICBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcbiAqICBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqICBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiAgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiAgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiAgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiAgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcbiAqICBTT0ZUV0FSRS5cbiAqXG4gKiBAYXV0aG9yIDogTmF0aGFuYWVsIEJyYXVuXG4gKiBAY29udGFjdCA6IGNhaXBpbGFic0BnbWFpbC5jb21cbiAqL1xuXG4vL2ltcG9ydCBpbmRleCBmcm9tIFwiLi9pbmRleFwiOy8vIHdpbGwgdXNlIGFzIGV4dGVybmFsIHRoZSBpbmRleCBpbiBkaXN0XG5pbXBvcnQgaXMgZnJvbSBcImlzXCI7XG5cbi8qKlxuICogTWluaW1hbCBwdXNoIHNlcXVlbmNlciwgYXBwbHkgc3RvcmVzIHNwZWNpZmljIHRhc2sgaW4gdGhlIHJpZ2h0IG9yZGVyIChyb290IHN0b3Jlc1xuICogZmlyc3QpXG4gKi9cbmxldCB0YXNrUXVldWUgICAgICA9IFtdLFxuICAgIGN1cldlaWdodCAgICAgID0gMCxcbiAgICBtYXhXZWlnaHQgICAgICA9IDAsXG4gICAgbWluV2VpZ2h0ICAgICAgPSAwLFxuICAgIHRhc2tDb3VudCAgICAgID0gMCxcbiAgICBkZVN5bmMgICAgICAgICA9IGZhbHNlLFxuICAgIGRlU3luY01heFRhc2tzID0gMTAsXG4gICAgdGFzayxcbiAgICBpc1J1bm5pbmcsXG4gICAgZXJyb3JDYXRjaGVyICAgPSB7XG4gICAgICAgIGxhc3RFcnJvcjogbnVsbCxcbiAgICAgICAgZGlzcGF0Y2ggOiBmdW5jdGlvbiAoIGVycm9yICkge1xuICAgICAgICAgICAgZXJyb3JDYXRjaGVyLmRpc2FibGUoKTtcbiAgICAgICAgICAgIGlmICggdGFzayAmJiB0YXNrWyAwIF0uaGFuZGxlRXJyb3IgKSB7XG4gICAgICAgICAgICAgICAgdGFza1sgMCBdLmhhbmRsZUVycm9yKGVycm9yLCB0YXNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKCB0YXNrIClcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiUmVTY29wZSA6IEFuIGFwcGx5IHRhc2sgaGFzIGZhaWxlZCAhIVwiLCB0YXNrWyAxIF0sIFwiIG9uIFwiLCB0YXNrWyAwIF0ubmFtZSB8fCB0YXNrWyAwIF0uY29uc3RydWN0b3IubmFtZSlcbiAgICAgICAgXG4gICAgICAgICAgICBpc1J1bm5pbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIHRhc2sgICAgICA9IG51bGw7XG4gICAgICAgICAgICBydW5Ob3coKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW5hYmxlICAgOiAoIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnIClcbiAgICAgICAgICAgICAgICAgICA/ICgpID0+IHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCBlcnJvckNhdGNoZXIuZGlzcGF0Y2gpXG4gICAgICAgICAgICB9IDogKCkgPT4ge1xuICAgICAgICAgICAgICAgIHByb2Nlc3Mub24oJ3VuY2F1Z2h0RXhjZXB0aW9uJywgZXJyb3JDYXRjaGVyLmRpc3BhdGNoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIGRpc2FibGUgIDogKCB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyApXG4gICAgICAgICAgICAgICAgICAgPyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgZXJyb3JDYXRjaGVyLmRpc3BhdGNoKVxuICAgICAgICAgICAgfSA6ICgpID0+IHtcbiAgICAgICAgICAgICAgICBwcm9jZXNzLnJlbW92ZUxpc3RlbmVyKCd1bmNhdWdodEV4Y2VwdGlvbicsIGVycm9yQ2F0Y2hlci5kaXNwYXRjaCk7XG4gICAgICAgICAgICB9XG4gICAgfVxuO1xuXG5mdW5jdGlvbiBydW5Ob3coKSB7XG4gICAgaWYgKCAhaXNSdW5uaW5nICkge1xuICAgICAgICBydW4oKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJ1bigpIHtcbiAgICBsZXQgZnJvbSAgPSBEYXRlLm5vdygpO1xuICAgIGlzUnVubmluZyA9IHRydWU7XG4gICAgZXJyb3JDYXRjaGVyLmVuYWJsZSgpO1xuICAgIHdoaWxlICggdGFza0NvdW50ICkge1xuICAgICAgICBcbiAgICAgICAgLy8gdHJ5IGZvciB0aGUgY3VycmVudCB3ZWlnaHRcbiAgICAgICAgd2hpbGUgKCAhKCB0YXNrUXVldWVbIGN1cldlaWdodCBdICYmIHRhc2tRdWV1ZVsgY3VyV2VpZ2h0IF0ubGVuZ3RoICkgKVxuICAgICAgICAgICAgY3VyV2VpZ2h0Kys7XG4gICAgICAgIFxuICAgICAgICB0YXNrQ291bnQtLTtcbiAgICAgICAgdGFzayA9IHRhc2tRdWV1ZVsgY3VyV2VpZ2h0IF0uc2hpZnQoKTtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcIlRhc2sgOiBcIiwgdGFza1sxXSwgXCIgb24gXCIsIHRhc2tbMF0ubmFtZSk7XG4gICAgICAgIHRhc2tbIDAgXVsgdGFza1sgMSBdIF0uYXBwbHkodGFza1sgMCBdLCB0YXNrWyAyIF0pO1xuICAgIH1cbiAgICB0YXNrID0gdW5kZWZpbmVkO1xuICAgIGVycm9yQ2F0Y2hlci5kaXNhYmxlKCk7XG4gICAgXG4gICAgaXNSdW5uaW5nID0gZmFsc2U7XG4gICAgaWYgKCB0YXNrQ291bnQgKSB7XG4gICAgICAgIHNldFRpbWVvdXQocnVuTm93KTtcbiAgICB9XG59XG5cbi8vXG4vL2luZGV4LnNldFRhc2tEZVN5bmMgPSAoIG5iICkgPT4ge1xuLy8gICAgaWYgKCBuYiA9PT0gZmFsc2UgKVxuLy8gICAgICAgIHJldHVybiBkZVN5bmMgPSBmYWxzZTtcbi8vICAgIGVsc2UgaWYgKCBuYiA9PT0gdHJ1ZSApIHtcbi8vICAgICAgICBkZVN5bmMgICAgICAgICA9IHRydWU7XG4vLyAgICAgICAgZGVTeW5jTWF4VGFza3MgPSAxMDtcbi8vICAgIH1cbi8vICAgIGVsc2UgKGlzLmludChuYikpXG4vLyAgICB7XG4vLyAgICAgICAgZGVTeW5jICAgICAgICAgPSB0cnVlO1xuLy8gICAgICAgIGRlU3luY01heFRhc2tzID0gbmI7XG4vLyAgICB9XG4vL307XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBwdXNoVGFzayggb2JqLCBmbiwgYXJneiApIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBtb3JlIGEgc3RvcmUgaGF2ZSBzb3VyY2VzLCB0aGUgbW9yZSBpdCBzaG91bGQgYmUgcHJvY2Vzc2VkIGZpcnN0XG4gICAgICAgICAqIFNvIGxlYWZzIHN0b3JlcyBzdGF5IHN5bmMsIGFuZCByb290IHN0b3JlcyByZWNlaXZlIG1lcmdlZCBzdGF0ZSB1cGRhdGVzO1xuICAgICAgICAgKiBnbG9iYWwgc3RhdGUgc3RheSBjb2hlcmVudFxuICAgICAgICAgKlxuICAgICAgICAgKiBUaGlzIG1lYW4gd2hhdGV2ZXIgdGhlIG51bWJlciBvZiBzdG9yZXMgJiB0aGUgY29tcGxleGl0eSBvZiB0aGUgZGVwcyxcbiAgICAgICAgICogdXBkYXRpbmcgYSBzdG9yZSBzdGF0ZSB3aWxsIHVwZGF0ZSBpdHMgc3luY2hyb25lIGNoaWxkIHN0b3JlcyBpbW1lZGlhdGVseVxuICAgICAgICAgKlxuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSB7KnxudW1iZXJ9XG4gICAgICAgICAqL1xuICAgICAgICBsZXQgd2VpZ2h0ID0gb2JqLl9zb3VyY2VzICYmIG9iai5fc291cmNlcy5sZW5ndGggfHwgMSxcbiAgICAgICAgICAgIHN0YWNrICA9IHRhc2tRdWV1ZVsgd2VpZ2h0IF0gPVxuICAgICAgICAgICAgICAgIHRhc2tRdWV1ZVsgd2VpZ2h0IF0gfHwgW107XG4gICAgICAgIFxuICAgICAgICBtYXhXZWlnaHQgPSBNYXRoLm1heChtYXhXZWlnaHQsIHdlaWdodCk7XG4gICAgICAgIGN1cldlaWdodCA9IE1hdGgubWluKGN1cldlaWdodCwgd2VpZ2h0KTtcbiAgICAgICAgdGFza0NvdW50Kys7XG4gICAgICAgIFxuICAgICAgICAvL2NvbnNvbGUubG9nKFwiUHVzaCBUYXNrIDogXCIsIGZuLCBcIiBvbiBcIiwgb2JqLm5hbWUsIHdlaWdodCk7XG4gICAgICAgIHN0YWNrLnB1c2goWyBvYmosIGZuLCBhcmd6IF0pO1xuICAgICAgICBzZXRUaW1lb3V0KHJ1bk5vdywgMCk7XG4gICAgICAgIHJldHVybiBzdGFjay5sZW5ndGg7XG4gICAgfVxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbHMvVGFza1NlcXVlbmNlci5qcyIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpICAyMDE4IFdpc2UgV2lsZCBXZWIgLlxuICpcbiAqICBNSVQgTGljZW5zZVxuICpcbiAqICBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiAgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqICB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiAgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiAgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiAgVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG4gKiAgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqICBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG4gKiAgU09GVFdBUkUuXG4gKlxuICogQGF1dGhvciA6IE5hdGhhbmFlbCBCcmF1blxuICogQGNvbnRhY3QgOiBjYWlwaWxhYnNAZ21haWwuY29tXG4gKi9cblxuaW1wb3J0IGlzICAgIGZyb20gJ2lzJ1xuXG5jb25zdCBTaW1wbGVPYmplY3RQcm90byA9ICgge30gKS5jb25zdHJ1Y3RvcjtcblxubGV0IHNjb3BhYmxlcyA9IFtdO1xuXG5mdW5jdGlvbiBhZGRTY29wYWJsZVR5cGUoIHRlc3QsIGhhbmRsZSwgbWVtYmVyID0gZmFsc2UsIHN0YXRlU2NvcGUgPSBmYWxzZSApIHtcbiAgICBzY29wYWJsZXMucHVzaChcbiAgICAgICAge1xuICAgICAgICAgICAgdGVzdCxcbiAgICAgICAgICAgIG1lbWJlcixcbiAgICAgICAgICAgIHN0YXRlU2NvcGUsXG4gICAgICAgICAgICBoYW5kbGVcbiAgICAgICAgfVxuICAgIClcbn1cblxuLy9cbmZ1bmN0aW9uIGlzU2NvcGFibGVUeXBlKCBDb21wLCBtZW1iZXIsIHN0YXRlU2NvcGUgKSB7XG4gICAgXG4gICAgZm9yICggbGV0IGkgPSAwOyBpIDwgc2NvcGFibGVzLmxlbmd0aDsgaSsrIClcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgKCBtZW1iZXIgPT09IHVuZGVmaW5lZCB8fCBtZW1iZXIgPT0gc2NvcGFibGVzWyBpIF0ubWVtYmVyIClcbiAgICAgICAgICAgICYmIHN0YXRlU2NvcGUgPT0gc2NvcGFibGVzWyBpIF0uc3RhdGVTY29wZVxuICAgICAgICAgICAgJiYgc2NvcGFibGVzWyBpIF0udGVzdChDb21wKVxuICAgICAgICApXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICBcbiAgICByZXR1cm4gZmFsc2U7XG4gICAgXG59XG5cbmZ1bmN0aW9uIGFwcGx5U2NvcGFibGVUeXBlKCBDb21wLCBhcmd6LCBtZW1iZXIsIHN0YXRlU2NvcGUgKSB7XG4gICAgXG4gICAgZm9yICggbGV0IGkgPSAwOyBpIDwgc2NvcGFibGVzLmxlbmd0aDsgaSsrIClcbiAgICAgICAgaWYgKCBtZW1iZXIgPT0gc2NvcGFibGVzWyBpIF0ubWVtYmVyICYmIHN0YXRlU2NvcGUgPT0gc2NvcGFibGVzWyBpIF0uc3RhdGVTY29wZSAmJiBzY29wYWJsZXNbIGkgXS50ZXN0KENvbXApIClcbiAgICAgICAgICAgIHJldHVybiBzY29wYWJsZXNbIGkgXS5oYW5kbGUoQ29tcCwgLi4uYXJneik7XG4gICAgXG4gICAgY29uc29sZS53YXJuKFwicmVTY29wZSA6IFVua25vd24gdHlwZVwiLCBDb21wKVxuICAgIFxuICAgIHJldHVybiBmYWxzZTtcbiAgICBcbn1cblxuZnVuY3Rpb24gcmVTY29wZSggLi4uYXJneiApIHtcbiAgICAvLyBhcmUgd2UgZGVjb3JhdGluZyBhIG1lbWJlciAvIHdpdGhvdXQgYXJnelxuICAgIGlmICggYXJnelsgMCBdIGluc3RhbmNlb2YgU2ltcGxlT2JqZWN0UHJvdG8gJiYgYXJnelsgMiBdIGluc3RhbmNlb2YgU2ltcGxlT2JqZWN0UHJvdG8gJiYgYXJnelsgMCBdLmhhc093blByb3BlcnR5KGFyZ3pbIDEgXSkgKSB7XG4gICAgICAgIGFyZ3pbIDIgXS52YWx1ZSA9IGFwcGx5U2NvcGFibGVUeXBlKGFyZ3pbIDAgXSwgW10sIHRydWUsIGZhbHNlKTtcbiAgICAgICAgcmV0dXJuIGFyZ3pbIDAgXTtcbiAgICB9XG4gICAgZWxzZSBpZiAoICFpc1Njb3BhYmxlVHlwZShhcmd6WyAwIF0sIHVuZGVmaW5lZCwgZmFsc2UpICkge1xuICAgICAgICByZXR1cm4gKCAuLi5hcmd6MiApID0+IHtcbiAgICAgICAgICAgIC8vIGFyZSB3ZSBkZWNvcmF0aW5nIGEgbWVtYmVyIC8gd2l0aCBhcmd6XG4gICAgICAgICAgICBpZiAoIGFyZ3oyWyAwIF0gaW5zdGFuY2VvZiBTaW1wbGVPYmplY3RQcm90byAmJiBhcmd6MlsgMiBdIGluc3RhbmNlb2YgU2ltcGxlT2JqZWN0UHJvdG8gJiYgYXJnejJbIDAgXS5oYXNPd25Qcm9wZXJ0eShhcmd6MlsgMSBdKSApIHtcbiAgICAgICAgICAgICAgICBhcmd6MlsgMiBdLnZhbHVlID0gYXBwbHlTY29wYWJsZVR5cGUoYXJnejJbIDAgXSwgYXJneiwgdHJ1ZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIHJldHVybiBhcmd6MlsgMCBdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHJldHVybiByZVNjb3BlKGFyZ3oyWyAwIF0sIC4uLmFyZ3opO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBhcHBseVNjb3BhYmxlVHlwZShhcmd6WyAwIF0sIGFyZ3ouc2xpY2UoMSksIGZhbHNlLCBmYWxzZSk7XG59XG5cbmZ1bmN0aW9uIHNjb3BlVG9TdGF0ZSggLi4uYXJneiApIHtcbiAgICAvLyBhcmUgd2UgZGVjb3JhdGluZyBhIG1lbWJlciAvIHdpdGhvdXQgYXJnelxuICAgIGlmICggYXJnelsgMCBdIGluc3RhbmNlb2YgU2ltcGxlT2JqZWN0UHJvdG8gJiYgYXJnelsgMiBdIGluc3RhbmNlb2YgU2ltcGxlT2JqZWN0UHJvdG8gJiYgYXJnelsgMCBdLmhhc093blByb3BlcnR5KGFyZ3pbIDEgXSkgKSB7XG4gICAgICAgIGFyZ3pbIDIgXS52YWx1ZSA9IGFwcGx5U2NvcGFibGVUeXBlKGFyZ3pbIDAgXSwgW10sIHRydWUsIHRydWUpO1xuICAgICAgICByZXR1cm4gYXJnelsgMCBdO1xuICAgIH1cbiAgICBlbHNlIGlmICggIWlzU2NvcGFibGVUeXBlKGFyZ3pbIDAgXSwgdW5kZWZpbmVkLCB0cnVlKSApIHtcbiAgICAgICAgcmV0dXJuICggLi4uYXJnejIgKSA9PiB7XG4gICAgICAgICAgICAvLyBhcmUgd2UgZGVjb3JhdGluZyBhIG1lbWJlciAvIHdpdGggYXJnelxuICAgICAgICAgICAgaWYgKCBhcmd6MlsgMCBdIGluc3RhbmNlb2YgU2ltcGxlT2JqZWN0UHJvdG8gJiYgYXJnejJbIDIgXSBpbnN0YW5jZW9mIFNpbXBsZU9iamVjdFByb3RvICYmIGFyZ3oyWyAwIF0uaGFzT3duUHJvcGVydHkoYXJnejJbIDEgXSkgKSB7XG4gICAgICAgICAgICAgICAgYXJnejJbIDIgXS52YWx1ZSA9IGFwcGx5U2NvcGFibGVUeXBlKGFyZ3oyWyAwIF0sIGFyZ3osIHRydWUsIHRydWUpO1xuICAgICAgICAgICAgICAgIHJldHVybiBhcmd6MlsgMCBdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHJldHVybiBzY29wZVRvU3RhdGUoYXJnejJbIDAgXSwgLi4uYXJneik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGFwcGx5U2NvcGFibGVUeXBlKGFyZ3pbIDAgXSwgYXJnei5zbGljZSgxKSwgZmFsc2UsIHRydWUpO1xufVxuXG4vL1xuLy9hZGRTY29wYWJsZVR5cGUoXG4vLyAgICAoIENvbXAgKSA9PiAoQ29tcCAmJiBDb21wLnByb3RvdHlwZSBpbnN0YW5jZW9mIFN0b3JlKSxcbi8vICAgIGZ1bmN0aW9uIHJlU2NvcGUoIC4uLmFyZ3ogKSB7XG4vLyAgICAgICAgbGV0IEJhc2VTdG9yZSAgICA9ICghYXJnelswXSB8fCBhcmd6WzBdLnByb3RvdHlwZSBpbnN0YW5jZW9mIFN0b3JlKSAmJlxuLy8gYXJnei5zaGlmdCgpLCBzY29wZSAgICAgICAgPSAoIWFyZ3pbMF0gfHwgYXJnelswXSBpbnN0YW5jZW9mIFNjb3BlIHx8IGlzLmZuKGFyZ3pbMF0pKVxuLy8gJiYgYXJnei5zaGlmdCgpLCB1c2UgICAgICAgICAgPSAoaXMuYXJyYXkoYXJnelswXSkpICYmIGFyZ3ouc2hpZnQoKSwgc3RhdGVNYXAgICAgID1cbi8vICF1c2UgJiYgKCFhcmd6WzBdIHx8IGFyZ3pbMF0gaW5zdGFuY2VvZiBTaW1wbGVPYmplY3RQcm90bykgJiYgYXJnei5zaGlmdCgpLFxuLy8gaW5pdGlhbFN0YXRlID0ge307ICBsZXQgY29tcE5hbWUgPSBCYXNlU3RvcmUuZGlzcGxheU5hbWUgfHwgQmFzZVN0b3JlLm5hbWU7ICB1c2UgPVxuLy8gWy4uLihCYXNlU3RvcmUudXNlIHx8IFtdKSwgLi4uKHVzZSB8fCBbXSldOyBzdGF0ZU1hcCAmJlxuLy8gU2NvcGUuc3RhdGVNYXBUb1JlZkxpc3Qoc3RhdGVNYXAsIGluaXRpYWxTdGF0ZSwgdXNlKTsgIGNsYXNzIFN0YXRlU2NvcGVkU3RvcmUgZXh0ZW5kc1xuLy8gQmFzZVN0b3JlIHsgc3RhdGljIHVzZSAgICAgICAgID0gdXNlOyBzdGF0aWMgZGlzcGxheU5hbWUgPSBcInN0YXRlU2NvcGVkKFwiICsgY29tcE5hbWUgK1xuLy8gXCIpXCI7ICBjb25zdHJ1Y3RvciggLi4uYXJneiApIHsgc3VwZXIoc2NvcGUsIGFyZ3ouc2xpY2UoYXJnelswXSBpbnN0YW5jZW9mIFNjb3BlID8gMSA6XG4vLyAwKSkgfSB9ICByZXR1cm4gU3RhdGVTY29wZWRTdG9yZTsgfSwgZmFsc2UsIHRydWUgKVxuXG5cbmV4cG9ydCB7XG4gICAgYWRkU2NvcGFibGVUeXBlLFxuICAgIHJlU2NvcGUsXG4gICAgc2NvcGVUb1N0YXRlXG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlscy9zY29wYWJsZS5qcyJdLCJzb3VyY2VSb290IjoiIn0=