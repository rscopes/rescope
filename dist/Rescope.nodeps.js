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
	
	var _Context = __webpack_require__(1);
	
	var _Context2 = _interopRequireDefault(_Context);
	
	var _Store = __webpack_require__(5);
	
	var _Store2 = _interopRequireDefault(_Store);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/*
	 * Copyright (c)  2017 Caipi Labs .
	 *
	 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
	 *
	 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
	 *
	 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
	 */
	
	_Context2.default.Store = _Store2.default;
	
	exports.default = { Store: _Store2.default, Context: _Context2.default };
	module.exports = exports["default"];

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	/*
	 * Copyright (c)  2017 Caipi Labs .
	 *
	 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
	 *
	 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
	 *
	 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
	 *
	 * @author : Nathanael Braun
	 * @contact : caipilabs@gmail.com
	 */
	
	/**
	 * @author Nathanael BRAUN
	 *
	 * Date: 13/08/2017
	 * Time: 17:15
	 */
	
	var is = __webpack_require__(2),
	    EventEmitter = __webpack_require__(3),
	    shortid = __webpack_require__(4),
	    __proto__push = function __proto__push(target, id, parent) {
	    var here = _defineProperty({}, id, function () {});
	    here[id].prototype = parent ? new parent["_" + id]() : target[id] || {};
	    target[id] = new here[id]();
	    target['_' + id] = here[id];
	},
	    openContexts = {};
	
	var Context = function (_EventEmitter) {
	    _inherits(Context, _EventEmitter);
	
	    _createClass(Context, null, [{
	        key: 'getContext',
	        // all active contexts
	
	        // if > 0, will wait 'persistenceTm' ms before destroy when dispose reach 0
	        value: function getContext(contexts) {
	            var skey = is.array(contexts) ? contexts.sort(function (a, b) {
	                if (a.firstname < b.firstname) return -1;
	                if (a.firstname > b.firstname) return 1;
	                return 0;
	            }).join('::') : contexts;
	            return openContexts[skey] = openContexts[skey] || new Context({}, { id: skey });
	        }
	    }]);
	
	    /**
	     * Init a Rescope context
	     *
	     * @param storesMap {Object} Object with the origin stores
	     * @param id {string} @optional id ( if this id exist storesMap will be merge on the 'id' context)
	     * @param parent
	     * @param state
	     * @param datas
	     * @param name
	     * @param defaultMaxListeners
	     * @param persistenceTm {number) if > 0, will wait 'persistenceTm' ms before destroy when dispose reach 0
	     * @param autoDestroy  {bool} will trigger retain & dispose after start
	     * @returns {Context}
	     */
	    function Context(storesMap) {
	        var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
	            id = _ref.id,
	            parent = _ref.parent,
	            state = _ref.state,
	            datas = _ref.datas,
	            name = _ref.name,
	            defaultMaxListeners = _ref.defaultMaxListeners,
	            persistenceTm = _ref.persistenceTm,
	            autoDestroy = _ref.autoDestroy;
	
	        _classCallCheck(this, Context);
	
	        var _this = _possibleConstructorReturn(this, (Context.__proto__ || Object.getPrototypeOf(Context)).call(this));
	
	        _this._maxListeners = defaultMaxListeners || _this.constructor.defaultMaxListeners;
	        _this._id = id = id || "_____" + shortid.generate();
	
	        if (openContexts[id]) {
	            var _ret;
	
	            openContexts[id].register(storesMap);
	            return _ret = openContexts[id], _possibleConstructorReturn(_this, _ret);
	        }
	
	        openContexts[id] = _this;
	        _this._isLocalId = true;
	        _this._persistenceTm = persistenceTm || _this.constructor.persistenceTm;
	
	        _this.stores = {};
	        _this.state = {};
	        _this.datas = {};
	        __proto__push(_this, 'stores', parent);
	        __proto__push(_this, 'state', parent);
	        __proto__push(_this, 'datas', parent);
	        _this.parent = parent;
	
	        if (parent) {
	            parent._addChild(_this);
	        }
	
	        _this.sources = [];
	        _this._childContexts = [];
	
	        _this.__retains = { all: 0 };
	        _this.__locks = { all: 1 };
	        _this.__listening = {};
	        _this.__context = {};
	        _this.__mixed = [];
	        _this.__mixedList = [];
	        _this._followers = [];
	        if (parent) {
	            parent.retain("isMyParent");
	            !parent._stable && _this.wait("waitingParent");
	            parent.on(_this.__parentList = {
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
	            // this.register(parent.__context, state, datas);
	        }
	
	        _this.register(storesMap, state, datas);
	        _this.__locks.all--;
	        _this._stable = !_this.__locks.all;
	
	        if (autoDestroy) setTimeout(function (tm) {
	            _this.retain("autoDestroy");
	            _this.dispose("autoDestroy");
	        });
	        return _this;
	    }
	
	    /**
	     *
	     * Mount the stores in storesList, in this context or in its parents or mixed contexts
	     *
	     * @param storesList {string|storeRef} Store name, Array of Store names, or Rescope store ref from Store::as or
	     *     Store:as
	     * @param state
	     * @param datas
	     * @returns {Context}
	     */
	
	
	    _createClass(Context, [{
	        key: 'mount',
	        value: function mount(storesList, state, datas) {
	            var _this2 = this;
	
	            if (is.array(storesList)) {
	                storesList.forEach(function (k) {
	                    return _this2._mount(k, state && state[k], datas && datas[k]);
	                });
	            } else {
	                this._mount.apply(this, arguments);
	            }
	            return this;
	        }
	    }, {
	        key: '_mount',
	        value: function _mount(id, state, datas) {
	            if (typeof id !== 'string') {
	                this.register(_defineProperty({}, id.name, id.store));
	                id = id.name;
	            }
	
	            if (!this.__context[id]) {
	                var _parent;
	
	                //ask mixed || parent
	                if (this.__mixed.reduce(function (mounted, ctx) {
	                    return mounted || ctx._mount(id, state, datas);
	                }, false) || !this.parent) return;
	                return (_parent = this.parent)._mount.apply(_parent, arguments);
	            }
	            //this.constructor.Store.mountStore(id, this, null, state, datas);
	            var store = this.__context[id],
	                ctx = void 0;
	            //console.warn("mount on ", this._id, ' ', id, is.fn(store));
	            if (is.fn(store)) {
	                this.__context[id] = new store(this, { state: state, datas: datas });
	            } else {
	                if (state !== undefined && datas === undefined) store.setState(state);else if (state !== undefined) store.state = state;
	
	                if (datas !== undefined) store.push(datas);
	            }
	
	            //console.warn("mount on ", this.stores[id]);
	            this._watchStore(id);
	
	            return this.__context[id];
	        }
	    }, {
	        key: '_watchStore',
	        value: function _watchStore(id, state, datas) {
	            var _this3 = this;
	
	            if (!this.__context[id]) {
	                var _parent2;
	
	                //ask mixed || parent
	                if (this.__mixed.reduce(function (mounted, ctx) {
	                    return mounted || ctx._watchStore(id, state, datas);
	                }, false) || !this.parent) return;
	                return (_parent2 = this.parent)._watchStore.apply(_parent2, arguments);
	            }
	            if (!this.__listening[id] && !is.fn(this.__context[id])) {
	                !this.__context[id].isStable() && this.wait(id);
	                this.__context[id].on(this.__listening[id] = {
	                    'destroy': function destroy(s) {
	                        delete _this3.__listening[id];
	                        _this3.__context[id] = _this3.__context[id].constructor;
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
	         * Mix targetCtx on this context
	         * Mixed context parents are NOT mapped
	         * @param targetCtx
	         */
	
	    }, {
	        key: 'mixin',
	        value: function mixin(targetCtx) {
	            var _this4 = this;
	
	            var parent = this.parent,
	                lists = void 0;
	            this.__mixed.push(targetCtx);
	            targetCtx.retain();
	            if (!targetCtx._stable) this.wait(targetCtx._id);
	
	            this.__mixedList.push(lists = {
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
	            targetCtx.on(lists);
	            __proto__push(this, 'stores', parent);
	            __proto__push(this, 'state', parent);
	            __proto__push(this, 'datas', parent);
	            targetCtx.relink(targetCtx.__context, this, true);
	
	            __proto__push(this, 'stores', this);
	            __proto__push(this, 'state', this);
	            __proto__push(this, 'datas', this);
	            this.relink(this.__context, this);
	        }
	
	        /**
	         * Register stores in storesMap & link them in the protos
	         * @param storesMap
	         * @param state
	         * @param datas
	         */
	
	    }, {
	        key: 'register',
	        value: function register(storesMap) {
	            var _this5 = this;
	
	            var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	            var datas = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	
	            this.relink(storesMap, this, false, state, datas);
	            Object.keys(storesMap).forEach(function (id) {
	                return is.fn(storesMap[id]) && storesMap[id].singleton && _this5._mount(id, state[id], datas[id]);
	            });
	        }
	
	        /**
	         * Map srcCtx store's on targetCtx headers proto's
	         * @param srcCtx
	         * @param targetCtx
	         * @param state
	         * @param datas
	         */
	
	    }, {
	        key: 'relink',
	        value: function relink(srcCtx) {
	            var targetCtx = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this;
	            var external = arguments[2];
	
	            var _this6 = this;
	
	            var state = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
	            var datas = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
	
	            var lctx = targetCtx._stores.prototype;
	            Object.keys(srcCtx).forEach(function (id) {
	                if (targetCtx.__context[id] === srcCtx[id] || targetCtx.__context[id] && targetCtx.__context[id].constructor === srcCtx[id]) return;
	
	                if (targetCtx.__context[id]) {
	                    if (!external && !is.fn(targetCtx.__context[id])) {
	                        console.info("Rescope Store : ", id, " already exist in this context ! ( try __proto__ hot patch )");
	                        targetCtx.__context[id].__proto__ = srcCtx[id].prototype;
	                    }
	                    if (!external && is.fn(targetCtx.__context[id])) targetCtx.__context[id] = srcCtx[id];
	
	                    return;
	                } else if (!external) _this6.__context[id] = srcCtx[id];
	
	                Object.defineProperty(lctx, id, function (ctx, id) {
	                    return {
	                        get: function get() {
	                            return _this6.__context[id];
	                        }
	                    };
	                }(_this6.__context, id));
	                Object.defineProperty(targetCtx._state.prototype, id, function (ctx, id) {
	                    return {
	                        get: function get() {
	                            return ctx[id] && ctx[id].state;
	                        },
	                        set: function set(v) {
	                            return _this6._mount(id, v);
	                        }
	                    };
	                }(_this6.__context, id));
	                Object.defineProperty(targetCtx._datas.prototype, id, function (ctx, id) {
	                    return {
	                        get: function get() {
	                            return ctx[id] && ctx[id].datas;
	                        },
	                        set: function set(v) {
	                            return _this6._mount(id, undefined, v);
	                        }
	                    };
	                }(_this6.__context, id));
	            });
	        }
	
	        /**
	         * Bind stores from this context, his parents and mixed context
	         *
	         * @param obj {React.Component|Store|function}
	         * @param key {string*} stores keys to bind updates
	         * @param as
	         * @param setInitial=true {bool} false to not propag initial value
	         */
	
	    }, {
	        key: 'bind',
	        value: function bind(obj, key, as) {
	            var setInitial = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
	
	            var lastRevs = void 0,
	                datas = void 0,
	                reKey = void 0;
	            if (key && !is.array(key)) key = [key];
	
	            if (as === false || as === true) {
	                setInitial = as;
	                as = null;
	            }
	
	            reKey = key.map(function (id) {
	                return is.string(id) ? id : id.name;
	            });
	
	            this._followers.push([obj, key, as || undefined, lastRevs = reKey && reKey.reduce(function (revs, id) {
	                return revs[id] = 0, revs;
	            }, {})]);
	
	            this.mount(key);
	
	            if (setInitial && this._stable) {
	                datas = this.getUpdates(lastRevs);
	                if (!datas) return;
	                if (typeof obj != "function") {
	                    if (as) obj.setState(_defineProperty({}, as, datas));else obj.setState(datas);
	                } else {
	                    obj(datas);
	                }
	                // lastRevs &&
	                // key.forEach(id => (lastRevs[id] = this.stores[id] && this.stores[id]._rev || 0));
	            }
	        }
	
	        /**
	         * Un bind this context off the given component-keys
	         * @param obj
	         * @param key
	         * @returns {Array.<*>}
	         */
	
	    }, {
	        key: 'unBind',
	        value: function unBind(obj, key, as) {
	            var followers = this._followers,
	                i = followers && followers.length;
	            while (followers && i--) {
	                if (followers[i][0] === obj && '' + followers[i][1] == '' + key && followers[i][2] == as) return followers.splice(i, 1);
	            }
	        }
	
	        /**
	         * Mount the stores in storesList from this context, its parents and mixed context
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
	            var _this7 = this;
	
	            var bind = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
	
	            var Store = this.constructor.Store;
	            storesList = is.array(storesList) ? storesList : [storesList];
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
	
	                    _this7.unBind(to, storesList);
	                    return to[unMountKey] && to[unMountKey].apply(to, arguments);
	                };
	            }
	            return storesList.reduce(function (datas, id) {
	                return datas[id] = _this7.stores[id] && _this7.stores[id].datas, datas;
	            }, {});
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
	
	            var ctx = this.__context;
	            if (!storesRevMap) {
	                storesRevMap = {};
	            }
	            Object.keys(ctx).forEach(function (id) {
	                if (!is.fn(ctx[id])) {
	                    storesRevMap[id] = ctx[id]._rev;
	                } else if (!storesRevMap.hasOwnProperty(id)) storesRevMap[id] = false;
	            });
	            if (!local) {
	                this.__mixed.reduce(function (updated, ctx) {
	                    return ctx.getStoresRevs(storesRevMap), storesRevMap;
	                }, storesRevMap);
	                this.parent && this.parent.getStoresRevs(storesRevMap);
	            }
	            return storesRevMap;
	        }
	
	        /**
	         * Get or update output basing storesRevMap's revisions.
	         * If a store in 'storesRevMap' is updated; add it to 'output'
	         * @param storesRevMap
	         * @param output
	         * @param updated
	         * @returns {*|{}}
	         */
	
	    }, {
	        key: 'getUpdates',
	        value: function getUpdates(storesRevMap, output, updated) {
	            var _this8 = this;
	
	            var ctx = this.__context;
	
	            output = output || {};
	            Object.keys(ctx).forEach(function (id) {
	                if (!output[id] && (!storesRevMap || storesRevMap.hasOwnProperty(id) && storesRevMap[id] === undefined || !(!storesRevMap.hasOwnProperty(id) || ctx[id]._rev <= storesRevMap[id]))) {
	
	                    updated = true;
	
	                    output[id] = _this8.datas[id];
	                    if (storesRevMap && storesRevMap[id] !== undefined) storesRevMap[id] = ctx[id]._rev;
	                }
	            });
	            updated = this.__mixed.reduce(function (updated, ctx) {
	                return ctx.getUpdates(storesRevMap, output, updated) || updated;
	            }, updated);
	            updated = this.parent && this.parent.getUpdates(storesRevMap, output, updated) || updated;
	            return updated && output;
	        }
	
	        /**
	         *
	         * @param flags_states
	         * @param flags_datas
	         * @returns {{state: {}, datas: {}}}
	         */
	
	    }, {
	        key: 'serialize',
	        value: function serialize() {
	            var _this9 = this;
	
	            var flags_states = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : /.*/;
	            var flags_datas = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : /.*/;
	
	            var ctx = this.__context,
	                output = { state: {}, datas: {} },
	                _flags_states = void 0,
	                _flags_datas = void 0;
	            if (is.array(flags_states)) flags_states.forEach(function (id) {
	                return output.state[id] = _this9.state[id];
	            });
	
	            if (is.array(flags_datas)) flags_datas.forEach(function (id) {
	                return output.datas[id] = _this9.datas[id];
	            });
	
	            if (!is.array(flags_datas) && !is.array(flags_states)) Object.keys(ctx).forEach(function (id) {
	                if (is.fn(ctx[id])) return;
	
	                var flags = ctx[id].constructor.flags;
	
	                flags = is.array(flags) ? flags : [flags || ""];
	
	                if (flags.reduce(function (r, flag) {
	                    return r || _flags_states.test(flag);
	                }, false)) output.state[id] = _this9.state[id];
	
	                if (flags.reduce(function (r, flag) {
	                    return r || _flags_datas.test(flag);
	                }, false)) output.datas[id] = _this9.datas[id];
	            });
	            return output;
	        }
	    }, {
	        key: 'on',
	        value: function on(lists) {
	            var _this10 = this;
	
	            if (!is.string(lists) && lists) Object.keys(lists).forEach(function (k) {
	                return _get(Context.prototype.__proto__ || Object.getPrototypeOf(Context.prototype), 'on', _this10).call(_this10, k, lists[k]);
	            });else _get(Context.prototype.__proto__ || Object.getPrototypeOf(Context.prototype), 'on', this).apply(this, arguments);
	        }
	    }, {
	        key: 'removeListener',
	        value: function removeListener(lists) {
	            var _this11 = this;
	
	            if (!is.string(lists) && lists) Object.keys(lists).forEach(function (k) {
	                return _get(Context.prototype.__proto__ || Object.getPrototypeOf(Context.prototype), 'removeListener', _this11).call(_this11, k, lists[k]);
	            });else _get(Context.prototype.__proto__ || Object.getPrototypeOf(Context.prototype), 'removeListener', this).apply(this, arguments);
	        }
	
	        /**
	         * once('stable', cb)
	         * @param obj {React.Component|Store|function)
	         * @param key {string} optional key where to map the public state
	         */
	
	    }, {
	        key: 'then',
	        value: function then(cb) {
	            var _this12 = this;
	
	            if (this._stable) return cb(null, this.datas);
	            this.once('stable', function (e) {
	                return cb(null, _this12.datas);
	            });
	        }
	    }, {
	        key: 'restore',
	        value: function restore(_ref2, quiet) {
	            var state = _ref2.state,
	                datas = _ref2.datas;
	
	            var ctx = this.__context;
	            Object.keys(datas).forEach(function (id) {
	                quiet ? ctx.datas = datas[id] : ctx.push(datas[id]);
	            });
	            Object.keys(state).forEach(function (id) {
	                quiet ? ctx.state = state[id] : ctx.setState(state[id]);
	            });
	        }
	    }, {
	        key: 'retainStores',
	        value: function retainStores() {
	            var _this13 = this;
	
	            var stores = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	            var reason = arguments[1];
	
	            stores.forEach(function (id) {
	                return _this13.stores[id] && _this13.stores[id].retain && _this13.stores[id].retain(reason);
	            });
	        }
	    }, {
	        key: 'disposeStores',
	        value: function disposeStores() {
	            var _this14 = this;
	
	            var stores = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	            var reason = arguments[1];
	
	            //console.warn("disposeStores", stores, reason, this.stores[stores[0]]);
	
	            stores.forEach(function (id) {
	                return _this14.stores[id] && _this14.stores[id].dispose && _this14.stores[id].dispose(reason);
	            });
	        }
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
	    }, {
	        key: 'release',
	        value: function release(reason) {
	            var _this15 = this;
	
	            //console.log("release", reason);
	            if (reason) {
	                if (this.__locks[reason] == 0) console.error("Release more than locking !", reason);
	                this.__locks[reason] = this.__locks[reason] || 0;
	                this.__locks[reason]--;
	            }
	            if (!reason && this.__locks.all == 0) console.error("Release more than locking !");
	
	            this.__locks.all--;
	            if (!this.__locks.all) {
	                this._stabilizerTM && clearTimeout(this._stabilizerTM);
	                this._propagTM && clearTimeout(this._propagTM);
	
	                this._stabilizerTM = setTimeout(function (e) {
	                    if (_this15.__locks.all) return _this15._stabilizerTM = null;
	
	                    _this15._stable = true;
	                    _this15.emit("stable", _this15);
	
	                    _this15._propag();
	                });
	            }
	        }
	    }, {
	        key: 'propag',
	        value: function propag() {
	            var _this16 = this;
	
	            this._propagTM && clearTimeout(this._propagTM);
	            this._propagTM = setTimeout(function (e) {
	                _this16._propag();
	            }, 15);
	        }
	    }, {
	        key: '_propag',
	        value: function _propag() {
	            var _this17 = this;
	
	            if (this._followers.length) this._followers.forEach(function (_ref3) {
	                var obj = _ref3[0],
	                    key = _ref3[1],
	                    as = _ref3[2],
	                    lastRevs = _ref3[3];
	
	                var datas = _this17.getUpdates(lastRevs);
	                if (!datas) return;
	                if (typeof obj != "function") {
	                    if (as) obj.setState(_defineProperty({}, as, datas));else obj.setState(datas);
	                } else {
	                    obj(datas, lastRevs && [].concat(_toConsumableArray(lastRevs)) || "no revs");
	                }
	                // lastRevs &&
	                // key.forEach(id => (lastRevs[id] = this.stores[id] && this.stores[id]._rev || 0));
	            });
	            this.emit("update", this.getUpdates());
	        }
	    }, {
	        key: '_getAllChilds',
	        value: function _getAllChilds() {
	            var childs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	
	            childs.push.apply(childs, _toConsumableArray(this._childContexts));
	            this._childContexts.forEach(function (ctx) {
	                ctx._getAllChilds(childs);
	            });
	            return childs;
	        }
	    }, {
	        key: '_addChild',
	        value: function _addChild(ctx) {
	            this._childContexts.push(ctx);
	        }
	    }, {
	        key: '_rmChild',
	        value: function _rmChild(ctx) {
	            var i = this._childContexts.indexOf(ctx);
	            if (i != -1) this._childContexts.splice(i, 1);
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
	            var _this18 = this;
	
	            //console.log("dispose", this._id, reason);
	            if (reason) {
	
	                if (this.__retains[reason] == 0) throw new Error("Dispose more than retaining !");
	
	                this.__retains[reason] = this.__retains[reason] || 0;
	                this.__retains[reason]--;
	            }
	
	            if (this.__retains.all == 0) throw new Error("Dispose more than retaining !");
	
	            this.__retains.all--;
	
	            if (!this.__retains.all) {
	                if (this._persistenceTm) {
	                    this._destroyTM && clearTimeout(this._destroyTM);
	                    this._destroyTM = setTimeout(function (e) {
	                        //console.log("wtf ctx", this._id, reason, this.__locks, this._stable);
	                        _this18.then(function (s) {
	                            //console.log("wtf ctx then", this._id, reason, this.__locks);
	                            !_this18.__retains.all && _this18.destroy();
	                        });
	                    }, this._persistenceTm);
	                } else {
	                    this.then(function (s) {
	                        return !_this18.__retains.all && _this18.destroy();
	                    });
	                }
	            }
	        }
	
	        /**
	         * order destroy of local stores
	         */
	
	    }, {
	        key: 'destroy',
	        value: function destroy() {
	            var _this19 = this;
	
	            var ctx = this.__context;
	
	            //console.warn("destroy", this._id);
	            this.emit("destroy");
	            Object.keys(this.__listening).forEach(function (id) {
	                return _this19.__context[id].removeListener(_this19.__listening[id]);
	            });
	
	            this.__listening = {};
	
	            if (this._isLocalId) delete openContexts[this._id];
	            this._followers.length = 0;
	
	            for (var key in ctx) {
	                if (!is.fn(ctx[key])) {
	                    if (ctx[key].contextObj === this) ctx[key].destroy();
	
	                    ctx[key] = ctx[key].constructor;
	                }
	            }while (this.__mixedList.length) {
	                this.__mixed[0].removeListener(this.__mixedList.shift());
	                this.__mixed.shift().dispose();
	            }
	            if (this.parent) {
	                this.parent.removeListener(this.__parentList);
	                this.parent.dispose("isMyParent");
	                this.parent._rmChild(this);
	            }
	            // this.datas = this.state = this.context = this.stores = null;
	            // this._datas = this._state = this._stores = null;
	
	        }
	    }]);
	
	    return Context;
	}(EventEmitter);
	
	Context.defaultMaxListeners = 100;
	Context.persistenceTm = 0;
	Context.Store = null;
	Context.contexts = openContexts;
	exports.default = Context;
	module.exports = exports['default'];

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = require("is");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	module.exports = require("events");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	module.exports = require("shortid");

/***/ }),
/* 5 */
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
	 * Copyright (c)  2017 Caipi Labs .
	 *
	 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
	 *
	 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
	 *
	 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
	 *
	 * @author : Nathanael Braun
	 * @contact : caipilabs@gmail.com
	 */
	
	/**
	 * Ultra scalable state-aware store
	 *
	 * @todo : lot of optims...
	 */
	
	var is = __webpack_require__(2),
	    Context = __webpack_require__(1),
	    EventEmitter = __webpack_require__(3),
	    shortid = __webpack_require__(4),
	    objProto = Object.getPrototypeOf({}),
	    openContexts = {};
	
	var Store = function (_EventEmitter) {
	    _inherits(Store, _EventEmitter);
	
	    /**
	     * Constructor, will build a rescope store
	     *
	     * (context, {require,use,apply,state, datas})
	     * (context)
	     *
	     * @param context {object} context where to find the other stores (default : static staticContext )
	     * @param keys {Array} (passed to Store::map) Ex : ["session", "otherNamedStore:key", otherStore.as("otherKey")]
	     */
	    // default state
	    /**
	     *
	     * @type {number}
	     */
	    // overridable list of store that will allow push if updated
	    function Store() {
	        var _this$_require, _this$_require2;
	
	        _classCallCheck(this, Store);
	
	        var _this = _possibleConstructorReturn(this, (Store.__proto__ || Object.getPrototypeOf(Store)).call(this));
	
	        var argz = [].concat(Array.prototype.slice.call(arguments)),
	            _static = _this.constructor,
	            context = !is.array(argz[0]) && !is.string(argz[0]) ? argz.shift() : _static.staticContext,
	            cfg = argz[0] && !is.array(argz[0]) && !is.string(argz[0]) ? argz.shift() : {},
	            name = is.string(argz[0]) ? argz[0] : cfg.name || _static.name,
	            watchs = is.array(argz[0]) ? argz.shift() : cfg.use || [],
	            // watchs need to be defined after all the
	        // store are registered : so we can't deal
	        // with any "static use" automaticly
	        apply = is.fn(argz[0]) ? argz.shift() : cfg.apply || null,
	            initialState = _static.state || _static.initialState;
	
	        _this._uid = cfg._uid || shortid.generate();
	        _this._maxListeners = cfg.defaultMaxListeners || Store.defaultMaxListeners;
	
	        _this.__retains = { all: 0 };
	        _this.__locks = { all: 0 };
	        _this._onStabilize = [];
	
	        _this._persistenceTm = cfg.persistenceTm || _this.constructor.persistenceTm;
	        if (is.string(argz[0])) {
	            if (context.__context[name]) console.warn("ReScope: Overwriting an existing static named store ( %s ) !!", name);
	            context.__context[name] = _this;
	        }
	
	        if (cfg && cfg.on) {
	            _this.on(cfg.on);
	        }
	        // this.state      = this.state || {};
	
	        _this._use = [].concat(_toConsumableArray(watchs), _toConsumableArray(_static.use || []));
	        _this.name = name;
	
	        if (context.stores) {
	            _this.contextObj = context;
	            _this.context = context.stores;
	        } else {
	            _this.contextObj = new Context(context);
	            _this.context = context.stores;
	        }
	
	        _this._stable = true;
	        _this._rev = 1;
	        _this._revs = {};
	        _this.stores = {};
	        _this._require = [];
	
	        if (_static.require) (_this$_require = _this._require).push.apply(_this$_require, _toConsumableArray(_static.require));
	        if (cfg.require) (_this$_require2 = _this._require).push.apply(_this$_require2, _toConsumableArray(cfg.require));
	
	        _this._followers = [];
	
	        if (_static.datas !== undefined) _this.datas = _extends({}, _static.datas);
	        if (cfg.hasOwnProperty("datas") && cfg.datas !== undefined) _this.datas = cfg.datas;
	        if (cfg.hasOwnProperty("state") && cfg.state !== undefined) initialState = _extends({}, initialState, cfg.state);
	
	        if (apply) _this.apply = apply;
	
	        if (initialState || _this._use.length) {
	            // sync apply
	            _this.state = _extends({}, initialState || {}, context.map(_this, _this._use));
	            if (_this.isComplete() && _this.datas === undefined) _this.datas = _this.apply(_this.datas, _this.state, _this.state);
	        }
	        _this._stable = _this.datas !== undefined; // stable if it have initial result datas
	        !_this._stable && _this.emit('unstable', _this.state);
	        return _this;
	    }
	
	    /**
	     * get a Builder-key pair for Store::map
	     * @param {string} name
	     * @returns {{store: Store, name: *}}
	     */
	
	    /**
	     * if retain goes to 0 :
	     * false to not destroy,
	     * 0 to sync auto destroy
	     * Ms to autodestroy after tm ms if no retain has been called
	     * @type {boolean|Int}
	     */
	    // default state @depreciated
	    // overridable list of source stores
	
	
	    _createClass(Store, [{
	        key: 'shouldPropag',
	
	
	        /**
	         * Overridable method to know if a state change should be propag to the listening stores & components
	         * If static follow is defined, shouldPropag will return true if any of the "follow" keys was updated
	         * If not it will always return true
	         */
	        value: function shouldPropag(nDatas) {
	            var _static = this.constructor,
	                r,
	                cDatas = this.datas;
	
	            // if ( !cState )
	            //     return true;
	            if (!cDatas && (!_static.follow || !_static.follow.length || _static.follow && _static.follow.reduce(function (r, i) {
	                return r || nDatas && nDatas[i];
	            }, false))) return true;
	
	            if (is.array(_static.follow)) _static.follow.forEach(function (key) {
	                r = r || (nDatas ? cDatas[key] !== nDatas[key] : cDatas && cDatas[key]);
	            });else if (_static.follow === 'strict') r = nDatas === cDatas;else {
	                cDatas && Object.keys(cDatas).forEach(function (key) {
	                    r = r || (nDatas ? cDatas[key] !== nDatas[key] : cDatas && cDatas[key]);
	                });
	                nDatas && Object.keys(nDatas).forEach(function (key) {
	                    r = r || (nDatas ? cDatas[key] !== nDatas[key] : cDatas && cDatas[key]);
	                });
	            }
	
	            return !!r;
	        }
	
	        /**
	         * Overridable applier / remapper
	         * If state or lastPublicState are simple hash maps apply will return {...datas, ...state}
	         * if not it will return the last private state
	         * @param datas
	         * @param state
	         * @returns {*}
	         */
	
	    }, {
	        key: 'apply',
	        value: function apply(datas, state, changes) {
	            state = state || this.state;
	
	            if (this.refine) return this.refine.apply(this, arguments);
	
	            if (!datas || datas.__proto__ !== objProto || state.__proto__ !== objProto) return state;else return _extends({}, datas, state);
	        }
	
	        /**
	         * @depreciated
	         * @param datas
	         * @param state
	         * @param changes
	         * @returns {*}
	         */
	
	    }, {
	        key: 'refine',
	        value: function refine(datas, state, changes) {
	            state = state || this.state;
	
	            if (!datas || datas.__proto__ !== objProto || state.__proto__ !== objProto) return state;else return _extends({}, datas, state);
	        }
	
	        /**
	         * Debounce this store propagation ( & reducing )
	         * @param cb
	         */
	
	    }, {
	        key: 'stabilize',
	        value: function stabilize(cb) {
	            var _this2 = this;
	
	            var me = this;
	            cb && me.once('stable', cb);
	            this._stable && this.emit('unstable', this.state, this.datas);
	
	            me._stable = false;
	
	            if (this._stabilizer) clearTimeout(this._stabilizer);
	
	            this._stabilizer = setTimeout(this.push.bind(this, null, function () {
	                //@todo
	                // me._stable       = true;
	                _this2._stabilizer = null;
	                // this.release();
	            }));
	        }
	    }, {
	        key: 'dispatch',
	        value: function dispatch(event) {
	            return;
	        }
	
	        /**
	         * Pull stores in the private state
	         * @param stores  {Array} (passed to Store::map) Ex : ["session", "otherNamedStore:key", otherStore.as("otherKey")]
	         */
	
	    }, {
	        key: 'pull',
	        value: function pull(stores, doWait, origin) {
	            var _this3 = this;
	
	            var initialOutputs = this.contextObj.map(this, stores);
	            if (doWait) {
	                this.wait();
	                stores.forEach(function (s) {
	                    return _this3.context[s] && _this3.wait(_this3.context[s]);
	                });
	                this.release();
	            }
	            return initialOutputs;
	        }
	
	        /**
	         * Apply apply/remap on the private state & push the resulting "public" state to followers
	         * @param cb
	         */
	
	    }, {
	        key: 'push',
	        value: function push(datas, force, cb) {
	            cb = force === true ? cb : force;
	            force = force === true;
	            var i = 0,
	                me = this,
	                nextState = !datas && _extends({}, this.state, this._changesSW) || this.state,
	                nextDatas = datas || (this.isComplete(nextState) ? this.apply(this.datas, nextState, this._changesSW) : this.datas);
	
	            this.state = nextState;
	            if (!force && (!this.datas && this.datas === nextDatas || !this.shouldPropag(nextDatas))) {
	                cb && cb();
	                return false;
	            }
	
	            this.datas = nextDatas;
	            this.__locks.all++;
	            this.release(cb);
	        }
	
	        /**
	         * Update the current private state & push it once the store is stable
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
	                if (!this.state || pState.hasOwnProperty(k) && (pState[k] != this.state[k] || this.state[k] && pState[k] && pState[k]._rev != this._revs[k] // rev/hash update
	                )) {
	                    change = true;
	                    this._revs[k] = pState[k] && pState[k]._rev || true;
	                    changes[k] = pState[k];
	                }
	            }if (sync) {
	                this.push();
	                cb && cb();
	            } else {
	                if (change) {
	                    this.stabilize(cb);
	                } else cb && cb();
	            }
	            return this;
	        }
	
	        /**
	         * Update the current private state & push it once the store is stable
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
	            }this.push();
	            return this.datas;
	        }
	
	        /**
	         * Replace the current private state & push it once the store is stable
	         * @param pState
	         * @param cb
	         */
	
	    }, {
	        key: 'replaceState',
	        value: function replaceState(pState, cb) {
	            var i = 0,
	                me = this;
	            this.state = pState;
	
	            this.stabilize(cb);
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
	         * relink bindings & requires
	         * @param {string} name
	         * @returns {{store: Store, name: *}}
	         */
	
	    }, {
	        key: 'relink',
	        value: function relink(from) {
	            var _this6 = this;
	
	            var context = this.contextObj,
	                _static = this.constructor;
	            if (_static.use) {
	                //todo unlink
	                this.pull(_static.use, false, from);
	            }
	
	            if (this._require) {
	                this._require.forEach(function (store) {
	                    return _this6.wait(context.__context[store]);
	                });
	            }
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
	         * Un bind this store off the given component-key
	         * @param obj
	         * @param key
	         * @returns {Array.<*>}
	         */
	
	    }, {
	        key: 'unBind',
	        value: function unBind(obj, key) {
	            var followers = this._followers,
	                i = followers && followers.length;
	            while (followers && i--) {
	                if (followers[i][0] == obj && followers[i][1] == key) return followers.splice(i, 1);
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
	
	            this._followers.push([obj, key]);
	            if (setInitial && this.datas && this._stable) {
	                if (typeof obj != "function") {
	                    if (key) obj.setState(_defineProperty({}, key, this.datas));else obj.setState(this.datas);
	                } else {
	                    obj(this.datas);
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
	            var _this7 = this;
	
	            if (this._stable) return cb(null, this.datas);
	            this.once('stable', function (e) {
	                return cb(null, _this7.datas);
	            });
	        }
	
	        /**
	         * Add a lock so the store will not propag it state untill release() is call
	         * @param previous {Store|number|Array} @optional wf to wait, releases to wait or array of stuff to wait
	         * @returns {TaskFlow}
	         */
	
	    }, {
	        key: 'wait',
	        value: function wait(previous) {
	            if (typeof previous == "number") return this.__locks.all += previous;
	            if (is.array(previous)) return previous.map(this.wait.bind(this));
	
	            this._stable && this.emit('unstable', this.state, this.datas);
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
	         * Decrease locks for this store, if it reach 0 & it have a public state,
	         * it will be propagated to the followers,
	         * then, all stuff passed to "then" call back will be exec / released
	         * @param desync
	         * @returns {*}
	         */
	
	    }, {
	        key: 'release',
	        value: function release(reason, cb) {
	            var _this8 = this;
	
	            var _static = this.constructor;
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
	
	            if (! --this.__locks.all && this.datas && this.isComplete()) {
	                this._stable = true;
	                this._rev = 1 + (this._rev + 1) % 1000000; //
	                if (this._followers.length) this._followers.forEach(function (follower) {
	                    if (!_this8.datas) return;
	                    if (typeof follower[0] == "function") {
	                        follower[0](_this8.datas);
	                    } else {
	                        //cb && i++;
	                        follower[0].setState(follower[1] ? _defineProperty({}, follower[1], _this8.datas) : _this8.datas
	                        //,
	                        //cb && (
	                        //    () => (!(--i) && cb())
	                        //)
	                        );
	                    }
	                });
	                //else
	                !wasStable && this.emit('stable', this.datas);
	                this.emit('update', this.datas);
	                cb && cb();
	                //
	            } else cb && this.then(cb);
	            return this;
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
	
	                if (!this.__retains[reason]) throw new Error("Dispose more than retaining !");
	
	                this.__retains[reason] = this.__retains[reason] || 0;
	                this.__retains[reason]--;
	            }
	            if (this.__retains.all == 0) throw new Error("Dispose more than retaining !");
	
	            this.__retains.all--;
	
	            //console.warn("disposed", reason, this.__retains);
	
	            if (!this.__retains.all) {
	                if (this._persistenceTm) {
	                    this._destroyTM && clearTimeout(this._destroyTM);
	                    this._destroyTM = setTimeout(function (e) {
	                        _this9.then(function (s) {
	                            //  console.log("wtf   ", reason, !this.__retains.all);
	
	                            !_this9.__retains.all && _this9.destroy();
	                        });
	                    }, this._persistenceTm);
	                } else {
	                    this.then(function (s) {
	                        return !_this9.__retains.all && _this9.destroy();
	                    });
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
	            this.dead = true;
	            this._revs = this.datas = this.state = this.context = null;
	            this.removeAllListeners();
	        }
	    }], [{
	        key: 'as',
	        value: function as(name) {
	            return { store: this, name: name };
	        }
	
	        /**
	         * Map all named stores in {keys} to the {object}'s state
	         * Hook componentWillUnmount (for react comp) or destroy to unBind them automatically
	         * @static
	         * @param object {React.Component|Store|...} target state aware object
	         * @param keys {Array} Ex : ["session", "otherStaticNamedStore:key", store.as('anotherKey')]
	         */
	
	    }, {
	        key: 'map',
	        value: function map(component, keys, context, origin) {
	            var setInitial = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
	
	            var targetRevs = component._revs || {};
	            var targetContext = component.stores || (component.stores = {});
	            var initialOutputs = {};
	            keys = is.array(keys) ? [].concat(_toConsumableArray(keys)) : [keys];
	
	            context = context || Store.staticContext;
	
	            // if (!targetContext.__context)
	            //     debugger;
	
	            keys = keys.filter(
	            // @todo : use query refs
	            // (store)(\.store)*(\[(\*|(props)\w+)+)\])?(\:alias)
	            function (key) {
	                if (!key) {
	                    console.error("Not a mappable store item '" + key + "' in " + origin + ' !!');
	                    return false;
	                }
	                var name = void 0,
	                    alias = void 0,
	                    store = void 0;
	                if (key.store && key.name) {
	                    alias = name = key.name;
	                    store = key.store;
	                } else if (is.fn(key)) {
	                    name = alias = key.name || key.defaultName;
	                    store = key;
	                } else {
	                    key = key.match(/([\w_]+)(?:\:\[(\*)\])?(?:\:(\*))?/);
	                    name = key[0];
	                    store = context.stores[key[0]];
	                    alias = key[1] == '*' ? null : key[2] || key[0]; // allow binding props  ([*])
	                }
	
	                if (targetRevs[name]) return false; // ignore dbl uses for now
	                if (!store) {
	                    console.error("Not a mappable store item '" + name + "/" + alias + "' in " + origin + ' !!', store);
	                    return false;
	                } else if (is.fn(store)) {
	                    context._mount(name);
	
	                    context.stores[name].bind(component, alias, setInitial);
	                    // if ( context.__context[key[0]].state ) {// do sync push after constructor
	                    //     context.__context[key[0]].push();
	                    // }
	                } else {
	                    store.bind(component, alias, setInitial);
	                }
	                targetRevs[alias] = targetRevs[alias] || true;
	                !targetContext[name] && (targetContext[name] = context.stores[name]);
	                if (context.stores[name].hasOwnProperty('datas')) initialOutputs[name] = context.datas[name];
	                return true;
	            });
	            var mixedCWUnmount,
	                unMountKey = component.isReactComponent ? "componentWillUnmount" : "destroy";
	
	            if (component.hasOwnProperty(unMountKey)) {
	                mixedCWUnmount = component[unMountKey];
	            }
	
	            component[unMountKey] = function () {
	                delete component[unMountKey];
	                if (mixedCWUnmount) component[unMountKey] = mixedCWUnmount;
	
	                keys.map(function (key) {
	                    var name = void 0,
	                        alias = void 0,
	                        store = void 0;
	                    if (key.store && key.name) {
	                        alias = name = key.name;
	                        store = key.store;
	                    } else if (is.fn(key)) {
	                        name = alias = key.name || key.defaultName;
	                        store = context.stores[name];
	                    } else {
	                        key = key.split(':');
	                        name = key[0];
	                        store = context.stores[key[0]];
	                        alias = key[1] || key[0];
	                    }
	
	                    store && !is.fn(store) && store.unBind(component, alias);
	                });
	                return component[unMountKey] && component[unMountKey].apply(component, arguments);
	            };
	
	            return initialOutputs;
	        }
	    }]);
	
	    return Store;
	}(EventEmitter);
	
	Store.use = [];
	Store.staticContext = new Context({}, { id: "static" });
	Store.initialState = undefined;
	Store.state = undefined;
	Store.defaultMaxListeners = 100;
	Store.persistenceTm = false;
	exports.default = Store;
	module.exports = exports['default'];

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYTExYmY3YTRmNDFmMjE3ZmMxZTkiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Jlc2NvcGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbnRleHQuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJldmVudHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzaG9ydGlkXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL1N0b3JlLmpzIl0sIm5hbWVzIjpbIlN0b3JlIiwiQ29udGV4dCIsImlzIiwicmVxdWlyZSIsIkV2ZW50RW1pdHRlciIsInNob3J0aWQiLCJfX3Byb3RvX19wdXNoIiwidGFyZ2V0IiwiaWQiLCJwYXJlbnQiLCJoZXJlIiwicHJvdG90eXBlIiwib3BlbkNvbnRleHRzIiwiY29udGV4dHMiLCJza2V5IiwiYXJyYXkiLCJzb3J0IiwiYSIsImIiLCJmaXJzdG5hbWUiLCJqb2luIiwic3RvcmVzTWFwIiwic3RhdGUiLCJkYXRhcyIsIm5hbWUiLCJkZWZhdWx0TWF4TGlzdGVuZXJzIiwicGVyc2lzdGVuY2VUbSIsImF1dG9EZXN0cm95IiwiX21heExpc3RlbmVycyIsImNvbnN0cnVjdG9yIiwiX2lkIiwiZ2VuZXJhdGUiLCJyZWdpc3RlciIsIl9pc0xvY2FsSWQiLCJfcGVyc2lzdGVuY2VUbSIsInN0b3JlcyIsIl9hZGRDaGlsZCIsInNvdXJjZXMiLCJfY2hpbGRDb250ZXh0cyIsIl9fcmV0YWlucyIsImFsbCIsIl9fbG9ja3MiLCJfX2xpc3RlbmluZyIsIl9fY29udGV4dCIsIl9fbWl4ZWQiLCJfX21peGVkTGlzdCIsIl9mb2xsb3dlcnMiLCJyZXRhaW4iLCJfc3RhYmxlIiwid2FpdCIsIm9uIiwiX19wYXJlbnRMaXN0IiwicmVsZWFzZSIsIl9wcm9wYWciLCJzZXRUaW1lb3V0IiwiZGlzcG9zZSIsInN0b3Jlc0xpc3QiLCJmb3JFYWNoIiwiX21vdW50IiwiayIsImFyZ3VtZW50cyIsInN0b3JlIiwicmVkdWNlIiwibW91bnRlZCIsImN0eCIsImZuIiwidW5kZWZpbmVkIiwic2V0U3RhdGUiLCJwdXNoIiwiX3dhdGNoU3RvcmUiLCJpc1N0YWJsZSIsInByb3BhZyIsInRhcmdldEN0eCIsImxpc3RzIiwicmVsaW5rIiwiT2JqZWN0Iiwia2V5cyIsInNpbmdsZXRvbiIsInNyY0N0eCIsImV4dGVybmFsIiwibGN0eCIsIl9zdG9yZXMiLCJjb25zb2xlIiwiaW5mbyIsIl9fcHJvdG9fXyIsImRlZmluZVByb3BlcnR5IiwiZ2V0IiwiX3N0YXRlIiwic2V0IiwidiIsIl9kYXRhcyIsIm9iaiIsImtleSIsImFzIiwic2V0SW5pdGlhbCIsImxhc3RSZXZzIiwicmVLZXkiLCJtYXAiLCJzdHJpbmciLCJyZXZzIiwibW91bnQiLCJnZXRVcGRhdGVzIiwiZm9sbG93ZXJzIiwiaSIsImxlbmd0aCIsInNwbGljZSIsInRvIiwiYmluZCIsIm1peGVkQ1dVbm1vdW50IiwidW5Nb3VudEtleSIsImlzUmVhY3RDb21wb25lbnQiLCJoYXNPd25Qcm9wZXJ0eSIsInVuQmluZCIsInN0b3Jlc1Jldk1hcCIsImxvY2FsIiwiX3JldiIsInVwZGF0ZWQiLCJnZXRTdG9yZXNSZXZzIiwib3V0cHV0IiwiZmxhZ3Nfc3RhdGVzIiwiZmxhZ3NfZGF0YXMiLCJfZmxhZ3Nfc3RhdGVzIiwiX2ZsYWdzX2RhdGFzIiwiZmxhZ3MiLCJyIiwiZmxhZyIsInRlc3QiLCJjYiIsIm9uY2UiLCJxdWlldCIsInJlYXNvbiIsImVtaXQiLCJlcnJvciIsIl9zdGFiaWxpemVyVE0iLCJjbGVhclRpbWVvdXQiLCJfcHJvcGFnVE0iLCJjaGlsZHMiLCJfZ2V0QWxsQ2hpbGRzIiwiaW5kZXhPZiIsIkVycm9yIiwiX2Rlc3Ryb3lUTSIsInRoZW4iLCJkZXN0cm95IiwicmVtb3ZlTGlzdGVuZXIiLCJjb250ZXh0T2JqIiwic2hpZnQiLCJfcm1DaGlsZCIsIm9ialByb3RvIiwiZ2V0UHJvdG90eXBlT2YiLCJhcmd6IiwiX3N0YXRpYyIsImNvbnRleHQiLCJzdGF0aWNDb250ZXh0IiwiY2ZnIiwid2F0Y2hzIiwidXNlIiwiYXBwbHkiLCJpbml0aWFsU3RhdGUiLCJfdWlkIiwiX29uU3RhYmlsaXplIiwid2FybiIsIl91c2UiLCJfcmV2cyIsIl9yZXF1aXJlIiwiaXNDb21wbGV0ZSIsIm5EYXRhcyIsImNEYXRhcyIsImZvbGxvdyIsImNoYW5nZXMiLCJyZWZpbmUiLCJtZSIsIl9zdGFiaWxpemVyIiwiZXZlbnQiLCJkb1dhaXQiLCJvcmlnaW4iLCJpbml0aWFsT3V0cHV0cyIsInMiLCJmb3JjZSIsIm5leHRTdGF0ZSIsIl9jaGFuZ2VzU1ciLCJuZXh0RGF0YXMiLCJzaG91bGRQcm9wYWciLCJwU3RhdGUiLCJzeW5jIiwiY2hhbmdlIiwic3RhYmlsaXplIiwiZnJvbSIsInB1bGwiLCJwcmV2aW91cyIsIndhc1N0YWJsZSIsImZvbGxvd2VyIiwiZGVhZCIsInJlbW92ZUFsbExpc3RlbmVycyIsImNvbXBvbmVudCIsInRhcmdldFJldnMiLCJ0YXJnZXRDb250ZXh0IiwiZmlsdGVyIiwiYWxpYXMiLCJkZWZhdWx0TmFtZSIsIm1hdGNoIiwic3BsaXQiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQzVCQTs7OztBQUNBOzs7Ozs7QUFYQTs7Ozs7Ozs7OztBQWFBLG1CQUFRQSxLQUFSOzttQkFFZSxFQUFDQSxzQkFBRCxFQUFRQywwQkFBUixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmZjs7Ozs7Ozs7Ozs7OztBQWFBOzs7Ozs7O0FBUUEsS0FBSUMsS0FBa0IsbUJBQUFDLENBQVEsQ0FBUixDQUF0QjtBQUFBLEtBQ0lDLGVBQWtCLG1CQUFB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QSxJQUFJNEcsS0FBSixDQUFVLEdBQVYsQ0FBUjtBQUNBaEwsZ0NBQVFvRSxJQUFJLENBQUosQ0FBUjtBQUNBL0IsaUNBQVEwRixRQUFRcEgsTUFBUixDQUFleUQsSUFBSSxDQUFKLENBQWYsQ0FBUjtBQUNBeUcsaUNBQVF6RyxJQUFJLENBQUosS0FBVUEsSUFBSSxDQUFKLENBQWxCO0FBQ0g7O0FBRUQvQiw4QkFBUyxDQUFDM0QsR0FBRytELEVBQUgsQ0FBTUosS0FBTixDQUFWLElBQTBCQSxNQUFNbUQsTUFBTixDQUFhaUYsU0FBYixFQUF3QkksS0FBeEIsQ0FBMUI7QUFDSCxrQkFyQkw7QUF1QkEsd0JBQU9KLFVBQVVwRixVQUFWLEtBQXlCb0YsVUFBVXBGLFVBQVYsNkJBQWhDO0FBQ0gsY0E3QkQ7O0FBK0JBLG9CQUFPa0UsY0FBUDtBQUNIOzs7O0dBcE84QjNLLFk7O0FBQWRKLE0sQ0FFVjJKLEcsR0FBNkIsRTtBQUZuQjNKLE0sQ0FLVndKLGEsR0FBNkIsSUFBSXZKLE9BQUosQ0FBWSxFQUFaLEVBQWdCLEVBQUVPLElBQUksUUFBTixFQUFoQixDO0FBTG5CUixNLENBTVY2SixZLEdBQTZCM0YsUztBQU5uQmxFLE0sQ0FPVnNCLEssR0FBNkI0QyxTO0FBUG5CbEUsTSxDQVlIeUIsbUIsR0FBc0IsRztBQVpuQnpCLE0sQ0FvQkgwQixhLEdBQXNCLEs7bUJBcEJuQjFCLEsiLCJmaWxlIjoiZGlzdC9SZXNjb3BlLm5vZGVwcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBhMTFiZjdhNGY0MWYyMTdmYzFlOSIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpICAyMDE3IENhaXBpIExhYnMgLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4gKi9cblxuaW1wb3J0IENvbnRleHQgZnJvbSBcIi4vQ29udGV4dFwiO1xuaW1wb3J0IFN0b3JlIGZyb20gXCIuL1N0b3JlXCI7XG5cbkNvbnRleHQuU3RvcmUgPSBTdG9yZTtcblxuZXhwb3J0IGRlZmF1bHQge1N0b3JlLCBDb250ZXh0fTtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1Jlc2NvcGUuanMiLCIvKlxuICogQ29weXJpZ2h0IChjKSAgMjAxNyBDYWlwaSBMYWJzIC5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuICpcbiAqIEBhdXRob3IgOiBOYXRoYW5hZWwgQnJhdW5cbiAqIEBjb250YWN0IDogY2FpcGlsYWJzQGdtYWlsLmNvbVxuICovXG5cbi8qKlxuICogQGF1dGhvciBOYXRoYW5hZWwgQlJBVU5cbiAqXG4gKiBEYXRlOiAxMy8wOC8yMDE3XG4gKiBUaW1lOiAxNzoxNVxuICovXG5cblxudmFyIGlzICAgICAgICAgICAgICA9IHJlcXVpcmUoJ2lzJyksXG4gICAgRXZlbnRFbWl0dGVyICAgID0gcmVxdWlyZSgnZXZlbnRzJyksXG4gICAgc2hvcnRpZCAgICAgICAgID0gcmVxdWlyZSgnc2hvcnRpZCcpXG4gICAgLCBfX3Byb3RvX19wdXNoID0gKCB0YXJnZXQsIGlkLCBwYXJlbnQgKSA9PiB7XG4gICAgbGV0IGhlcmUgICAgICAgICAgID0ge1xuICAgICAgICBbaWRdOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGhlcmVbaWRdLnByb3RvdHlwZSA9IHBhcmVudCA/IG5ldyBwYXJlbnRbXCJfXCIgKyBpZF0oKSA6IHRhcmdldFtpZF0gfHwge307XG4gICAgdGFyZ2V0W2lkXSAgICAgICAgID0gbmV3IGhlcmVbaWRdKCk7XG4gICAgdGFyZ2V0WydfJyArIGlkXSAgID0gaGVyZVtpZF07XG59LFxuICAgIG9wZW5Db250ZXh0cyAgICA9IHt9O1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRleHQgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICAgIHN0YXRpYyBkZWZhdWx0TWF4TGlzdGVuZXJzID0gMTAwO1xuICAgIHN0YXRpYyBwZXJzaXN0ZW5jZVRtICAgICAgID0gMDsvLyBpZiA+IDAsIHdpbGwgd2FpdCAncGVyc2lzdGVuY2VUbScgbXMgYmVmb3JlIGRlc3Ryb3kgd2hlbiBkaXNwb3NlIHJlYWNoIDBcbiAgICBzdGF0aWMgU3RvcmUgICAgICAgICAgICAgICA9IG51bGw7XG4gICAgc3RhdGljIGNvbnRleHRzICAgICAgICAgICAgPSBvcGVuQ29udGV4dHM7Ly8gYWxsIGFjdGl2ZSBjb250ZXh0c1xuICAgIFxuICAgIHN0YXRpYyBnZXRDb250ZXh0KCBjb250ZXh0cyApIHtcbiAgICAgICAgbGV0IHNrZXkgPSBpcy5hcnJheShjb250ZXh0cykgPyBjb250ZXh0cy5zb3J0KCggYSwgYiApID0+IHtcbiAgICAgICAgICAgIGlmICggYS5maXJzdG5hbWUgPCBiLmZpcnN0bmFtZSApIHJldHVybiAtMTtcbiAgICAgICAgICAgIGlmICggYS5maXJzdG5hbWUgPiBiLmZpcnN0bmFtZSApIHJldHVybiAxO1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH0pLmpvaW4oJzo6JykgOiBjb250ZXh0cztcbiAgICAgICAgcmV0dXJuIG9wZW5Db250ZXh0c1tza2V5XSA9IG9wZW5Db250ZXh0c1tza2V5XSB8fCBuZXcgQ29udGV4dCh7fSwgeyBpZDogc2tleSB9KTtcbiAgICB9O1xuICAgIFxuICAgIC8qKlxuICAgICAqIEluaXQgYSBSZXNjb3BlIGNvbnRleHRcbiAgICAgKlxuICAgICAqIEBwYXJhbSBzdG9yZXNNYXAge09iamVjdH0gT2JqZWN0IHdpdGggdGhlIG9yaWdpbiBzdG9yZXNcbiAgICAgKiBAcGFyYW0gaWQge3N0cmluZ30gQG9wdGlvbmFsIGlkICggaWYgdGhpcyBpZCBleGlzdCBzdG9yZXNNYXAgd2lsbCBiZSBtZXJnZSBvbiB0aGUgJ2lkJyBjb250ZXh0KVxuICAgICAqIEBwYXJhbSBwYXJlbnRcbiAgICAgKiBAcGFyYW0gc3RhdGVcbiAgICAgKiBAcGFyYW0gZGF0YXNcbiAgICAgKiBAcGFyYW0gbmFtZVxuICAgICAqIEBwYXJhbSBkZWZhdWx0TWF4TGlzdGVuZXJzXG4gICAgICogQHBhcmFtIHBlcnNpc3RlbmNlVG0ge251bWJlcikgaWYgPiAwLCB3aWxsIHdhaXQgJ3BlcnNpc3RlbmNlVG0nIG1zIGJlZm9yZSBkZXN0cm95IHdoZW4gZGlzcG9zZSByZWFjaCAwXG4gICAgICogQHBhcmFtIGF1dG9EZXN0cm95ICB7Ym9vbH0gd2lsbCB0cmlnZ2VyIHJldGFpbiAmIGRpc3Bvc2UgYWZ0ZXIgc3RhcnRcbiAgICAgKiBAcmV0dXJucyB7Q29udGV4dH1cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvciggc3RvcmVzTWFwLCB7IGlkLCBwYXJlbnQsIHN0YXRlLCBkYXRhcywgbmFtZSwgZGVmYXVsdE1heExpc3RlbmVycywgcGVyc2lzdGVuY2VUbSwgYXV0b0Rlc3Ryb3kgfSA9IHt9ICkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fbWF4TGlzdGVuZXJzID0gZGVmYXVsdE1heExpc3RlbmVycyB8fCB0aGlzLmNvbnN0cnVjdG9yLmRlZmF1bHRNYXhMaXN0ZW5lcnM7XG4gICAgICAgIHRoaXMuX2lkICAgICAgICAgICA9IGlkID0gaWQgfHwgKFwiX19fX19cIiArIHNob3J0aWQuZ2VuZXJhdGUoKSk7XG4gICAgICAgIFxuICAgICAgICBpZiAoIG9wZW5Db250ZXh0c1tpZF0gKSB7XG4gICAgICAgICAgICBvcGVuQ29udGV4dHNbaWRdLnJlZ2lzdGVyKHN0b3Jlc01hcCk7XG4gICAgICAgICAgICByZXR1cm4gb3BlbkNvbnRleHRzW2lkXVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBvcGVuQ29udGV4dHNbaWRdICAgID0gdGhpcztcbiAgICAgICAgdGhpcy5faXNMb2NhbElkICAgICA9IHRydWU7XG4gICAgICAgIHRoaXMuX3BlcnNpc3RlbmNlVG0gPSBwZXJzaXN0ZW5jZVRtIHx8IHRoaXMuY29uc3RydWN0b3IucGVyc2lzdGVuY2VUbTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuc3RvcmVzID0ge307XG4gICAgICAgIHRoaXMuc3RhdGUgID0ge307XG4gICAgICAgIHRoaXMuZGF0YXMgID0ge307XG4gICAgICAgIF9fcHJvdG9fX3B1c2godGhpcywgJ3N0b3JlcycsIHBhcmVudCk7XG4gICAgICAgIF9fcHJvdG9fX3B1c2godGhpcywgJ3N0YXRlJywgcGFyZW50KTtcbiAgICAgICAgX19wcm90b19fcHVzaCh0aGlzLCAnZGF0YXMnLCBwYXJlbnQpO1xuICAgICAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgXG4gICAgICAgIGlmICggcGFyZW50ICkge1xuICAgICAgICAgICAgcGFyZW50Ll9hZGRDaGlsZCh0aGlzKTtcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0aGlzLnNvdXJjZXMgICAgICAgID0gW107XG4gICAgICAgIHRoaXMuX2NoaWxkQ29udGV4dHMgPSBbXTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX19yZXRhaW5zICAgPSB7IGFsbDogMCB9O1xuICAgICAgICB0aGlzLl9fbG9ja3MgICAgID0geyBhbGw6IDEgfTtcbiAgICAgICAgdGhpcy5fX2xpc3RlbmluZyA9IHt9O1xuICAgICAgICB0aGlzLl9fY29udGV4dCAgID0ge307XG4gICAgICAgIHRoaXMuX19taXhlZCAgICAgPSBbXTtcbiAgICAgICAgdGhpcy5fX21peGVkTGlzdCA9IFtdO1xuICAgICAgICB0aGlzLl9mb2xsb3dlcnMgID0gW107XG4gICAgICAgIGlmICggcGFyZW50ICkge1xuICAgICAgICAgICAgcGFyZW50LnJldGFpbihcImlzTXlQYXJlbnRcIik7XG4gICAgICAgICAgICAhcGFyZW50Ll9zdGFibGUgJiYgdGhpcy53YWl0KFwid2FpdGluZ1BhcmVudFwiKTtcbiAgICAgICAgICAgIHBhcmVudC5vbih0aGlzLl9fcGFyZW50TGlzdCA9IHtcbiAgICAgICAgICAgICAgICAnc3RhYmxlJyAgOiBzID0+IHRoaXMucmVsZWFzZShcIndhaXRpbmdQYXJlbnRcIiksXG4gICAgICAgICAgICAgICAgJ3Vuc3RhYmxlJzogcyA9PiB0aGlzLndhaXQoXCJ3YWl0aW5nUGFyZW50XCIpLFxuICAgICAgICAgICAgICAgICd1cGRhdGUnICA6IHMgPT4gdGhpcy5fcHJvcGFnKClcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gdGhpcy5yZWdpc3RlcihwYXJlbnQuX19jb250ZXh0LCBzdGF0ZSwgZGF0YXMpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgdGhpcy5yZWdpc3RlcihzdG9yZXNNYXAsIHN0YXRlLCBkYXRhcyk7XG4gICAgICAgIHRoaXMuX19sb2Nrcy5hbGwtLTtcbiAgICAgICAgdGhpcy5fc3RhYmxlID0gIXRoaXMuX19sb2Nrcy5hbGw7XG4gICAgICAgIFxuICAgICAgICBpZiAoIGF1dG9EZXN0cm95IClcbiAgICAgICAgICAgIHNldFRpbWVvdXQoXG4gICAgICAgICAgICAgICAgdG0gPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJldGFpbihcImF1dG9EZXN0cm95XCIpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpc3Bvc2UoXCJhdXRvRGVzdHJveVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApXG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqXG4gICAgICogTW91bnQgdGhlIHN0b3JlcyBpbiBzdG9yZXNMaXN0LCBpbiB0aGlzIGNvbnRleHQgb3IgaW4gaXRzIHBhcmVudHMgb3IgbWl4ZWQgY29udGV4dHNcbiAgICAgKlxuICAgICAqIEBwYXJhbSBzdG9yZXNMaXN0IHtzdHJpbmd8c3RvcmVSZWZ9IFN0b3JlIG5hbWUsIEFycmF5IG9mIFN0b3JlIG5hbWVzLCBvciBSZXNjb3BlIHN0b3JlIHJlZiBmcm9tIFN0b3JlOjphcyBvclxuICAgICAqICAgICBTdG9yZTphc1xuICAgICAqIEBwYXJhbSBzdGF0ZVxuICAgICAqIEBwYXJhbSBkYXRhc1xuICAgICAqIEByZXR1cm5zIHtDb250ZXh0fVxuICAgICAqL1xuICAgIG1vdW50KCBzdG9yZXNMaXN0LCBzdGF0ZSwgZGF0YXMgKSB7XG4gICAgICAgIGlmICggaXMuYXJyYXkoc3RvcmVzTGlzdCkgKSB7XG4gICAgICAgICAgICBzdG9yZXNMaXN0LmZvckVhY2goayA9PiB0aGlzLl9tb3VudChrLCBzdGF0ZSAmJiBzdGF0ZVtrXSwgZGF0YXMgJiYgZGF0YXNba10pKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX21vdW50KC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIFxuICAgIF9tb3VudCggaWQsIHN0YXRlLCBkYXRhcyApIHtcbiAgICAgICAgaWYgKCB0eXBlb2YgaWQgIT09ICdzdHJpbmcnICkge1xuICAgICAgICAgICAgdGhpcy5yZWdpc3Rlcih7IFtpZC5uYW1lXTogaWQuc3RvcmUgfSk7XG4gICAgICAgICAgICBpZCA9IGlkLm5hbWU7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmICggIXRoaXMuX19jb250ZXh0W2lkXSApIHsvL2FzayBtaXhlZCB8fCBwYXJlbnRcbiAgICAgICAgICAgIGlmICggdGhpcy5fX21peGVkLnJlZHVjZSgoIG1vdW50ZWQsIGN0eCApID0+IChtb3VudGVkIHx8IGN0eC5fbW91bnQoaWQsIHN0YXRlLCBkYXRhcykpLCBmYWxzZSkgfHxcbiAgICAgICAgICAgICAgICAhdGhpcy5wYXJlbnQgKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcmVudC5fbW91bnQoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgfVxuICAgICAgICAvL3RoaXMuY29uc3RydWN0b3IuU3RvcmUubW91bnRTdG9yZShpZCwgdGhpcywgbnVsbCwgc3RhdGUsIGRhdGFzKTtcbiAgICAgICAgbGV0IHN0b3JlID0gdGhpcy5fX2NvbnRleHRbaWRdLCBjdHg7XG4gICAgICAgIC8vY29uc29sZS53YXJuKFwibW91bnQgb24gXCIsIHRoaXMuX2lkLCAnICcsIGlkLCBpcy5mbihzdG9yZSkpO1xuICAgICAgICBpZiAoIGlzLmZuKHN0b3JlKSApIHtcbiAgICAgICAgICAgIHRoaXMuX19jb250ZXh0W2lkXSA9IG5ldyBzdG9yZSh0aGlzLCB7IHN0YXRlLCBkYXRhcyB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmICggc3RhdGUgIT09IHVuZGVmaW5lZCAmJiBkYXRhcyA9PT0gdW5kZWZpbmVkIClcbiAgICAgICAgICAgICAgICBzdG9yZS5zZXRTdGF0ZShzdGF0ZSk7XG4gICAgICAgICAgICBlbHNlIGlmICggc3RhdGUgIT09IHVuZGVmaW5lZCApXG4gICAgICAgICAgICAgICAgc3RvcmUuc3RhdGUgPSBzdGF0ZTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKCBkYXRhcyAhPT0gdW5kZWZpbmVkIClcbiAgICAgICAgICAgICAgICBzdG9yZS5wdXNoKGRhdGFzKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIC8vY29uc29sZS53YXJuKFwibW91bnQgb24gXCIsIHRoaXMuc3RvcmVzW2lkXSk7XG4gICAgICAgIHRoaXMuX3dhdGNoU3RvcmUoaWQpO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHRoaXMuX19jb250ZXh0W2lkXTtcbiAgICB9XG4gICAgXG4gICAgX3dhdGNoU3RvcmUoIGlkLCBzdGF0ZSwgZGF0YXMgKSB7XG4gICAgICAgIGlmICggIXRoaXMuX19jb250ZXh0W2lkXSApIHsvL2FzayBtaXhlZCB8fCBwYXJlbnRcbiAgICAgICAgICAgIGlmICggdGhpcy5fX21peGVkLnJlZHVjZSgoIG1vdW50ZWQsIGN0eCApID0+IChtb3VudGVkIHx8IGN0eC5fd2F0Y2hTdG9yZShpZCwgc3RhdGUsIGRhdGFzKSksIGZhbHNlKSB8fFxuICAgICAgICAgICAgICAgICF0aGlzLnBhcmVudCApXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyZW50Ll93YXRjaFN0b3JlKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCAhdGhpcy5fX2xpc3RlbmluZ1tpZF0gJiYgIWlzLmZuKHRoaXMuX19jb250ZXh0W2lkXSkgKSB7XG4gICAgICAgICAgICAhdGhpcy5fX2NvbnRleHRbaWRdLmlzU3RhYmxlKCkgJiYgdGhpcy53YWl0KGlkKTtcbiAgICAgICAgICAgIHRoaXMuX19jb250ZXh0W2lkXS5vbihcbiAgICAgICAgICAgICAgICB0aGlzLl9fbGlzdGVuaW5nW2lkXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgJ2Rlc3Ryb3knIDogcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5fX2xpc3RlbmluZ1tpZF07XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9fY29udGV4dFtpZF0gPSB0aGlzLl9fY29udGV4dFtpZF0uY29uc3RydWN0b3I7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICd1cGRhdGUnICA6IHMgPT4gdGhpcy5wcm9wYWcoKSxcbiAgICAgICAgICAgICAgICAgICAgJ3N0YWJsZScgIDogcyA9PiB0aGlzLnJlbGVhc2UoaWQpLFxuICAgICAgICAgICAgICAgICAgICAndW5zdGFibGUnOiBzID0+IHRoaXMud2FpdChpZClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogTWl4IHRhcmdldEN0eCBvbiB0aGlzIGNvbnRleHRcbiAgICAgKiBNaXhlZCBjb250ZXh0IHBhcmVudHMgYXJlIE5PVCBtYXBwZWRcbiAgICAgKiBAcGFyYW0gdGFyZ2V0Q3R4XG4gICAgICovXG4gICAgbWl4aW4oIHRhcmdldEN0eCApIHtcbiAgICAgICAgbGV0IHBhcmVudCA9IHRoaXMucGFyZW50LCBsaXN0cztcbiAgICAgICAgdGhpcy5fX21peGVkLnB1c2godGFyZ2V0Q3R4KVxuICAgICAgICB0YXJnZXRDdHgucmV0YWluKCk7XG4gICAgICAgIGlmICggIXRhcmdldEN0eC5fc3RhYmxlIClcbiAgICAgICAgICAgIHRoaXMud2FpdCh0YXJnZXRDdHguX2lkKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX19taXhlZExpc3QucHVzaChsaXN0cyA9IHtcbiAgICAgICAgICAgICdzdGFibGUnICA6IHMgPT4gdGhpcy5yZWxlYXNlKHRhcmdldEN0eC5faWQpLFxuICAgICAgICAgICAgJ3Vuc3RhYmxlJzogcyA9PiB0aGlzLndhaXQodGFyZ2V0Q3R4Ll9pZCksXG4gICAgICAgICAgICAndXBkYXRlJyAgOiBzID0+IHRoaXMuX3Byb3BhZygpXG4gICAgICAgIH0pXG4gICAgICAgIHRhcmdldEN0eC5vbihsaXN0cyk7XG4gICAgICAgIF9fcHJvdG9fX3B1c2godGhpcywgJ3N0b3JlcycsIHBhcmVudCk7XG4gICAgICAgIF9fcHJvdG9fX3B1c2godGhpcywgJ3N0YXRlJywgcGFyZW50KTtcbiAgICAgICAgX19wcm90b19fcHVzaCh0aGlzLCAnZGF0YXMnLCBwYXJlbnQpO1xuICAgICAgICB0YXJnZXRDdHgucmVsaW5rKHRhcmdldEN0eC5fX2NvbnRleHQsIHRoaXMsIHRydWUpO1xuICAgICAgICBcbiAgICAgICAgX19wcm90b19fcHVzaCh0aGlzLCAnc3RvcmVzJywgdGhpcyk7XG4gICAgICAgIF9fcHJvdG9fX3B1c2godGhpcywgJ3N0YXRlJywgdGhpcyk7XG4gICAgICAgIF9fcHJvdG9fX3B1c2godGhpcywgJ2RhdGFzJywgdGhpcyk7XG4gICAgICAgIHRoaXMucmVsaW5rKHRoaXMuX19jb250ZXh0LCB0aGlzKTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogUmVnaXN0ZXIgc3RvcmVzIGluIHN0b3Jlc01hcCAmIGxpbmsgdGhlbSBpbiB0aGUgcHJvdG9zXG4gICAgICogQHBhcmFtIHN0b3Jlc01hcFxuICAgICAqIEBwYXJhbSBzdGF0ZVxuICAgICAqIEBwYXJhbSBkYXRhc1xuICAgICAqL1xuICAgIHJlZ2lzdGVyKCBzdG9yZXNNYXAsIHN0YXRlID0ge30sIGRhdGFzID0ge30gKSB7XG4gICAgICAgIHRoaXMucmVsaW5rKHN0b3Jlc01hcCwgdGhpcywgZmFsc2UsIHN0YXRlLCBkYXRhcyk7XG4gICAgICAgIE9iamVjdC5rZXlzKHN0b3Jlc01hcCkuZm9yRWFjaChcbiAgICAgICAgICAgIGlkID0+IChpcy5mbihzdG9yZXNNYXBbaWRdKSAmJiBzdG9yZXNNYXBbaWRdLnNpbmdsZXRvbiAmJiB0aGlzLl9tb3VudChpZCwgc3RhdGVbaWRdLCBkYXRhc1tpZF0pKSlcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogTWFwIHNyY0N0eCBzdG9yZSdzIG9uIHRhcmdldEN0eCBoZWFkZXJzIHByb3RvJ3NcbiAgICAgKiBAcGFyYW0gc3JjQ3R4XG4gICAgICogQHBhcmFtIHRhcmdldEN0eFxuICAgICAqIEBwYXJhbSBzdGF0ZVxuICAgICAqIEBwYXJhbSBkYXRhc1xuICAgICAqL1xuICAgIHJlbGluayggc3JjQ3R4LCB0YXJnZXRDdHggPSB0aGlzLCBleHRlcm5hbCwgc3RhdGUgPSB7fSwgZGF0YXMgPSB7fSApIHtcbiAgICAgICAgbGV0IGxjdHggPSB0YXJnZXRDdHguX3N0b3Jlcy5wcm90b3R5cGU7XG4gICAgICAgIE9iamVjdC5rZXlzKHNyY0N0eClcbiAgICAgICAgICAgICAgLmZvckVhY2goXG4gICAgICAgICAgICAgICAgICBpZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKCB0YXJnZXRDdHguX19jb250ZXh0W2lkXSA9PT0gc3JjQ3R4W2lkXSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRDdHguX19jb250ZXh0W2lkXSAmJiAodGFyZ2V0Q3R4Ll9fY29udGV4dFtpZF0uY29uc3RydWN0b3IgPT09IHNyY0N0eFtpZF0gKSApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoIHRhcmdldEN0eC5fX2NvbnRleHRbaWRdICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoICFleHRlcm5hbCAmJiAhaXMuZm4odGFyZ2V0Q3R4Ll9fY29udGV4dFtpZF0pICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5pbmZvKFwiUmVzY29wZSBTdG9yZSA6IFwiLCBpZCwgXCIgYWxyZWFkeSBleGlzdCBpbiB0aGlzIGNvbnRleHQgISAoIHRyeSBfX3Byb3RvX18gaG90IHBhdGNoIClcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRDdHguX19jb250ZXh0W2lkXS5fX3Byb3RvX18gPSBzcmNDdHhbaWRdLnByb3RvdHlwZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmICggIWV4dGVybmFsICYmIGlzLmZuKHRhcmdldEN0eC5fX2NvbnRleHRbaWRdKSApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRDdHguX19jb250ZXh0W2lkXSA9IHNyY0N0eFtpZF07XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKCAhZXh0ZXJuYWwgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9fY29udGV4dFtpZF0gPSBzcmNDdHhbaWRdO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGN0eCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICgoIGN0eCwgaWQgKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0OiAoKSA9PiB0aGlzLl9fY29udGV4dFtpZF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMuX19jb250ZXh0LCBpZClcbiAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0Q3R4Ll9zdGF0ZS5wcm90b3R5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAoKCBjdHgsIGlkICkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldDogKCkgPT4gKGN0eFtpZF0gJiYgY3R4W2lkXS5zdGF0ZSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0OiAoIHYgKSA9PiAodGhpcy5fbW91bnQoaWQsIHYpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5fX2NvbnRleHQsIGlkKVxuICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRDdHguX2RhdGFzLnByb3RvdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICgoIGN0eCwgaWQgKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0OiAoKSA9PiAoY3R4W2lkXSAmJiBjdHhbaWRdLmRhdGFzKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXQ6ICggdiApID0+ICh0aGlzLl9tb3VudChpZCwgdW5kZWZpbmVkLCB2KSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMuX19jb250ZXh0LCBpZClcbiAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICApXG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIEJpbmQgc3RvcmVzIGZyb20gdGhpcyBjb250ZXh0LCBoaXMgcGFyZW50cyBhbmQgbWl4ZWQgY29udGV4dFxuICAgICAqXG4gICAgICogQHBhcmFtIG9iaiB7UmVhY3QuQ29tcG9uZW50fFN0b3JlfGZ1bmN0aW9ufVxuICAgICAqIEBwYXJhbSBrZXkge3N0cmluZyp9IHN0b3JlcyBrZXlzIHRvIGJpbmQgdXBkYXRlc1xuICAgICAqIEBwYXJhbSBhc1xuICAgICAqIEBwYXJhbSBzZXRJbml0aWFsPXRydWUge2Jvb2x9IGZhbHNlIHRvIG5vdCBwcm9wYWcgaW5pdGlhbCB2YWx1ZVxuICAgICAqL1xuICAgIGJpbmQoIG9iaiwga2V5LCBhcywgc2V0SW5pdGlhbCA9IHRydWUgKSB7XG4gICAgICAgIGxldCBsYXN0UmV2cywgZGF0YXMsIHJlS2V5O1xuICAgICAgICBpZiAoIGtleSAmJiAhaXMuYXJyYXkoa2V5KSApXG4gICAgICAgICAgICBrZXkgPSBba2V5XTtcbiAgICAgICAgXG4gICAgICAgIGlmICggYXMgPT09IGZhbHNlIHx8IGFzID09PSB0cnVlICkge1xuICAgICAgICAgICAgc2V0SW5pdGlhbCA9IGFzO1xuICAgICAgICAgICAgYXMgICAgICAgICA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJlS2V5ID0ga2V5Lm1hcChpZCA9PiAoaXMuc3RyaW5nKGlkKSA/IGlkIDogaWQubmFtZSkpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fZm9sbG93ZXJzLnB1c2goXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgb2JqLFxuICAgICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgICBhcyB8fCB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgbGFzdFJldnMgPSByZUtleSAmJiByZUtleS5yZWR1Y2UoKCByZXZzLCBpZCApID0+IChyZXZzW2lkXSA9IDAsIHJldnMpLCB7fSlcbiAgICAgICAgICAgIF0pO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5tb3VudChrZXkpO1xuICAgICAgICBcbiAgICAgICAgaWYgKCBzZXRJbml0aWFsICYmIHRoaXMuX3N0YWJsZSApIHtcbiAgICAgICAgICAgIGRhdGFzID0gdGhpcy5nZXRVcGRhdGVzKGxhc3RSZXZzKTtcbiAgICAgICAgICAgIGlmICggIWRhdGFzICkgcmV0dXJuO1xuICAgICAgICAgICAgaWYgKCB0eXBlb2Ygb2JqICE9IFwiZnVuY3Rpb25cIiApIHtcbiAgICAgICAgICAgICAgICBpZiAoIGFzICkgb2JqLnNldFN0YXRlKHsgW2FzXTogZGF0YXMgfSk7XG4gICAgICAgICAgICAgICAgZWxzZSBvYmouc2V0U3RhdGUoZGF0YXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgb2JqKGRhdGFzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGxhc3RSZXZzICYmXG4gICAgICAgICAgICAvLyBrZXkuZm9yRWFjaChpZCA9PiAobGFzdFJldnNbaWRdID0gdGhpcy5zdG9yZXNbaWRdICYmIHRoaXMuc3RvcmVzW2lkXS5fcmV2IHx8IDApKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBVbiBiaW5kIHRoaXMgY29udGV4dCBvZmYgdGhlIGdpdmVuIGNvbXBvbmVudC1rZXlzXG4gICAgICogQHBhcmFtIG9ialxuICAgICAqIEBwYXJhbSBrZXlcbiAgICAgKiBAcmV0dXJucyB7QXJyYXkuPCo+fVxuICAgICAqL1xuICAgIHVuQmluZCggb2JqLCBrZXksIGFzICkge1xuICAgICAgICB2YXIgZm9sbG93ZXJzID0gdGhpcy5fZm9sbG93ZXJzLFxuICAgICAgICAgICAgaSAgICAgICAgID0gZm9sbG93ZXJzICYmIGZvbGxvd2Vycy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggZm9sbG93ZXJzICYmIGktLSApXG4gICAgICAgICAgICBpZiAoIGZvbGxvd2Vyc1tpXVswXSA9PT0gb2JqICYmICgnJyArIGZvbGxvd2Vyc1tpXVsxXSkgPT0gKCcnICsga2V5KSAmJlxuICAgICAgICAgICAgICAgIGZvbGxvd2Vyc1tpXVsyXSA9PSBhcyApXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZvbGxvd2Vycy5zcGxpY2UoaSwgMSk7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIE1vdW50IHRoZSBzdG9yZXMgaW4gc3RvcmVzTGlzdCBmcm9tIHRoaXMgY29udGV4dCwgaXRzIHBhcmVudHMgYW5kIG1peGVkIGNvbnRleHRcbiAgICAgKiBCaW5kIHRoZW0gdG8gJ3RvJ1xuICAgICAqIEhvb2sgJ3RvJyBzbyBpdCB3aWxsIGF1dG8gdW5iaW5kIG9uICdkZXN0cm95JyBvciAnY29tcG9uZW50V2lsbFVubW91bnQnXG4gICAgICogQHBhcmFtIHRvXG4gICAgICogQHBhcmFtIHN0b3Jlc0xpc3RcbiAgICAgKiBAcGFyYW0gYmluZFxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IEluaXRpYWwgb3V0cHV0cyBvZiB0aGUgc3RvcmVzIGluICdzdG9yZXNMaXN0J1xuICAgICAqL1xuICAgIG1hcCggdG8sIHN0b3Jlc0xpc3QsIGJpbmQgPSB0cnVlICkge1xuICAgICAgICBsZXQgU3RvcmUgID0gdGhpcy5jb25zdHJ1Y3Rvci5TdG9yZTtcbiAgICAgICAgc3RvcmVzTGlzdCA9IGlzLmFycmF5KHN0b3Jlc0xpc3QpID8gc3RvcmVzTGlzdCA6IFtzdG9yZXNMaXN0XTtcbiAgICAgICAgdGhpcy5tb3VudChzdG9yZXNMaXN0KTtcbiAgICAgICAgaWYgKCBiaW5kICYmIHRvIGluc3RhbmNlb2YgU3RvcmUgKSB7XG4gICAgICAgICAgICBTdG9yZS5tYXAodG8sIHN0b3Jlc0xpc3QsIHRoaXMsIHRoaXMsIGZhbHNlKVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCBiaW5kICkge1xuICAgICAgICAgICAgdGhpcy5iaW5kKHRvLCBzdG9yZXNMaXN0LCB1bmRlZmluZWQsIGZhbHNlKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgbGV0IG1peGVkQ1dVbm1vdW50LFxuICAgICAgICAgICAgICAgIHVuTW91bnRLZXkgPSB0by5pc1JlYWN0Q29tcG9uZW50ID8gXCJjb21wb25lbnRXaWxsVW5tb3VudFwiIDogXCJkZXN0cm95XCI7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmICggdG8uaGFzT3duUHJvcGVydHkodW5Nb3VudEtleSkgKSB7XG4gICAgICAgICAgICAgICAgbWl4ZWRDV1VubW91bnQgPSB0b1t1bk1vdW50S2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdG9bdW5Nb3VudEtleV0gPSAoLi4uYXJneikgPT4ge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSB0b1t1bk1vdW50S2V5XTtcbiAgICAgICAgICAgICAgICBpZiAoIG1peGVkQ1dVbm1vdW50IClcbiAgICAgICAgICAgICAgICAgICAgdG9bdW5Nb3VudEtleV0gPSBtaXhlZENXVW5tb3VudDtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB0aGlzLnVuQmluZCh0bywgc3RvcmVzTGlzdCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRvW3VuTW91bnRLZXldICYmIHRvW3VuTW91bnRLZXldKC4uLmFyZ3opO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0b3Jlc0xpc3QucmVkdWNlKCggZGF0YXMsIGlkICkgPT4gKGRhdGFzW2lkXSA9IHRoaXMuc3RvcmVzW2lkXSAmJiB0aGlzLnN0b3Jlc1tpZF0uZGF0YXMsIGRhdGFzKSwge30pO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBHZXQgb3IgdXBkYXRlIHN0b3Jlc1Jldk1hcCdzIHJldmlzaW9uc1xuICAgICAqIEBwYXJhbSBzdG9yZXNSZXZNYXBcbiAgICAgKiBAcGFyYW0gbG9jYWxcbiAgICAgKiBAcmV0dXJucyB7e319XG4gICAgICovXG4gICAgZ2V0U3RvcmVzUmV2cyggc3RvcmVzUmV2TWFwID0ge30sIGxvY2FsICkge1xuICAgICAgICBsZXQgY3R4ID0gdGhpcy5fX2NvbnRleHQ7XG4gICAgICAgIGlmICggIXN0b3Jlc1Jldk1hcCApIHtcbiAgICAgICAgICAgIHN0b3Jlc1Jldk1hcCA9IHt9O1xuICAgICAgICB9XG4gICAgICAgIE9iamVjdC5rZXlzKGN0eCkuZm9yRWFjaChcbiAgICAgICAgICAgIGlkID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoICFpcy5mbihjdHhbaWRdKVxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICBzdG9yZXNSZXZNYXBbaWRdID0gY3R4W2lkXS5fcmV2O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICggIXN0b3Jlc1Jldk1hcC5oYXNPd25Qcm9wZXJ0eShpZCkgKVxuICAgICAgICAgICAgICAgICAgICBzdG9yZXNSZXZNYXBbaWRdID0gZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgaWYgKCAhbG9jYWwgKSB7XG4gICAgICAgICAgICB0aGlzLl9fbWl4ZWQucmVkdWNlKCggdXBkYXRlZCwgY3R4ICkgPT4gKGN0eC5nZXRTdG9yZXNSZXZzKHN0b3Jlc1Jldk1hcCksIHN0b3Jlc1Jldk1hcCksIHN0b3Jlc1Jldk1hcCk7XG4gICAgICAgICAgICB0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC5nZXRTdG9yZXNSZXZzKHN0b3Jlc1Jldk1hcCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0b3Jlc1Jldk1hcDtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogR2V0IG9yIHVwZGF0ZSBvdXRwdXQgYmFzaW5nIHN0b3Jlc1Jldk1hcCdzIHJldmlzaW9ucy5cbiAgICAgKiBJZiBhIHN0b3JlIGluICdzdG9yZXNSZXZNYXAnIGlzIHVwZGF0ZWQ7IGFkZCBpdCB0byAnb3V0cHV0J1xuICAgICAqIEBwYXJhbSBzdG9yZXNSZXZNYXBcbiAgICAgKiBAcGFyYW0gb3V0cHV0XG4gICAgICogQHBhcmFtIHVwZGF0ZWRcbiAgICAgKiBAcmV0dXJucyB7Knx7fX1cbiAgICAgKi9cbiAgICBnZXRVcGRhdGVzKCBzdG9yZXNSZXZNYXAsIG91dHB1dCwgdXBkYXRlZCApIHtcbiAgICAgICAgbGV0IGN0eCA9IHRoaXMuX19jb250ZXh0O1xuICAgICAgICBcbiAgICAgICAgb3V0cHV0ID0gb3V0cHV0IHx8IHt9O1xuICAgICAgICBPYmplY3Qua2V5cyhjdHgpLmZvckVhY2goXG4gICAgICAgICAgICBpZCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCAhb3V0cHV0W2lkXVxuICAgICAgICAgICAgICAgICAgICAmJiAoICFzdG9yZXNSZXZNYXBcbiAgICAgICAgICAgICAgICAgICAgICAgIHx8IChzdG9yZXNSZXZNYXAuaGFzT3duUHJvcGVydHkoaWQpICYmIHN0b3Jlc1Jldk1hcFtpZF0gPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgICAgIHx8ICEoICFzdG9yZXNSZXZNYXAuaGFzT3duUHJvcGVydHkoaWQpIHx8IGN0eFtpZF0uX3JldiA8PSBzdG9yZXNSZXZNYXBbaWRdICkpXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIG91dHB1dFtpZF0gPSB0aGlzLmRhdGFzW2lkXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBzdG9yZXNSZXZNYXAgJiYgc3RvcmVzUmV2TWFwW2lkXSAhPT0gdW5kZWZpbmVkIClcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3Jlc1Jldk1hcFtpZF0gPSBjdHhbaWRdLl9yZXY7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgdXBkYXRlZCA9IHRoaXMuX19taXhlZC5yZWR1Y2UoKCB1cGRhdGVkLCBjdHggKSA9PiAoY3R4LmdldFVwZGF0ZXMoc3RvcmVzUmV2TWFwLCBvdXRwdXQsIHVwZGF0ZWQpIHx8IHVwZGF0ZWQpLCB1cGRhdGVkKTtcbiAgICAgICAgdXBkYXRlZCA9IHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LmdldFVwZGF0ZXMoc3RvcmVzUmV2TWFwLCBvdXRwdXQsIHVwZGF0ZWQpIHx8IHVwZGF0ZWQ7XG4gICAgICAgIHJldHVybiB1cGRhdGVkICYmIG91dHB1dDtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZmxhZ3Nfc3RhdGVzXG4gICAgICogQHBhcmFtIGZsYWdzX2RhdGFzXG4gICAgICogQHJldHVybnMge3tzdGF0ZToge30sIGRhdGFzOiB7fX19XG4gICAgICovXG4gICAgc2VyaWFsaXplKCBmbGFnc19zdGF0ZXMgPSAvLiovLCBmbGFnc19kYXRhcyA9IC8uKi8gKSB7XG4gICAgICAgIGxldCBjdHggPSB0aGlzLl9fY29udGV4dCwgb3V0cHV0ID0geyBzdGF0ZToge30sIGRhdGFzOiB7fSB9LFxuICAgICAgICAgICAgX2ZsYWdzX3N0YXRlcyxcbiAgICAgICAgICAgIF9mbGFnc19kYXRhcztcbiAgICAgICAgaWYgKCBpcy5hcnJheShmbGFnc19zdGF0ZXMpIClcbiAgICAgICAgICAgIGZsYWdzX3N0YXRlcy5mb3JFYWNoKGlkID0+IChvdXRwdXQuc3RhdGVbaWRdID0gdGhpcy5zdGF0ZVtpZF0pKVxuICAgICAgICBcbiAgICAgICAgaWYgKCBpcy5hcnJheShmbGFnc19kYXRhcykgKVxuICAgICAgICAgICAgZmxhZ3NfZGF0YXMuZm9yRWFjaChpZCA9PiAob3V0cHV0LmRhdGFzW2lkXSA9IHRoaXMuZGF0YXNbaWRdKSlcbiAgICAgICAgXG4gICAgICAgIGlmICggIWlzLmFycmF5KGZsYWdzX2RhdGFzKSAmJiAhaXMuYXJyYXkoZmxhZ3Nfc3RhdGVzKSApXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhjdHgpLmZvckVhY2goXG4gICAgICAgICAgICAgICAgaWQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIGlzLmZuKGN0eFtpZF0pIClcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGxldCBmbGFncyA9IGN0eFtpZF0uY29uc3RydWN0b3IuZmxhZ3M7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBmbGFncyA9IGlzLmFycmF5KGZsYWdzKSA/IGZsYWdzIDogW2ZsYWdzIHx8IFwiXCJdO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBmbGFncy5yZWR1Y2UoKCByLCBmbGFnICkgPT4gKHIgfHwgX2ZsYWdzX3N0YXRlcy50ZXN0KGZsYWcpKSwgZmFsc2UpIClcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dC5zdGF0ZVtpZF0gPSB0aGlzLnN0YXRlW2lkXTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGlmICggZmxhZ3MucmVkdWNlKCggciwgZmxhZyApID0+IChyIHx8IF9mbGFnc19kYXRhcy50ZXN0KGZsYWcpKSwgZmFsc2UpIClcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dC5kYXRhc1tpZF0gPSB0aGlzLmRhdGFzW2lkXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApXG4gICAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgfVxuICAgIFxuICAgIG9uKCBsaXN0cyApIHtcbiAgICAgICAgXG4gICAgICAgIGlmICggIWlzLnN0cmluZyhsaXN0cykgJiYgbGlzdHMgKVxuICAgICAgICAgICAgT2JqZWN0LmtleXMobGlzdHMpLmZvckVhY2goayA9PiBzdXBlci5vbihrLCBsaXN0c1trXSkpO1xuICAgICAgICBlbHNlIHN1cGVyLm9uKC4uLmFyZ3VtZW50cyk7XG4gICAgfVxuICAgIFxuICAgIHJlbW92ZUxpc3RlbmVyKCBsaXN0cyApIHtcbiAgICAgICAgaWYgKCAhaXMuc3RyaW5nKGxpc3RzKSAmJiBsaXN0cyApXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhsaXN0cykuZm9yRWFjaChrID0+IHN1cGVyLnJlbW92ZUxpc3RlbmVyKGssIGxpc3RzW2tdKSk7XG4gICAgICAgIGVsc2Ugc3VwZXIucmVtb3ZlTGlzdGVuZXIoLi4uYXJndW1lbnRzKTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogb25jZSgnc3RhYmxlJywgY2IpXG4gICAgICogQHBhcmFtIG9iaiB7UmVhY3QuQ29tcG9uZW50fFN0b3JlfGZ1bmN0aW9uKVxuICAgICAqIEBwYXJhbSBrZXkge3N0cmluZ30gb3B0aW9uYWwga2V5IHdoZXJlIHRvIG1hcCB0aGUgcHVibGljIHN0YXRlXG4gICAgICovXG4gICAgdGhlbiggY2IgKSB7XG4gICAgICAgIGlmICggdGhpcy5fc3RhYmxlIClcbiAgICAgICAgICAgIHJldHVybiBjYihudWxsLCB0aGlzLmRhdGFzKTtcbiAgICAgICAgdGhpcy5vbmNlKCdzdGFibGUnLCBlID0+IGNiKG51bGwsIHRoaXMuZGF0YXMpKTtcbiAgICB9XG4gICAgXG4gICAgcmVzdG9yZSggeyBzdGF0ZSwgZGF0YXMgfSwgcXVpZXQgKSB7XG4gICAgICAgIGxldCBjdHggPSB0aGlzLl9fY29udGV4dDtcbiAgICAgICAgT2JqZWN0LmtleXMoZGF0YXMpLmZvckVhY2goXG4gICAgICAgICAgICBpZCA9PiB7XG4gICAgICAgICAgICAgICAgcXVpZXQgPyBjdHguZGF0YXMgPSBkYXRhc1tpZF1cbiAgICAgICAgICAgICAgICAgICAgOiBjdHgucHVzaChkYXRhc1tpZF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICBPYmplY3Qua2V5cyhzdGF0ZSkuZm9yRWFjaChcbiAgICAgICAgICAgIGlkID0+IHtcbiAgICAgICAgICAgICAgICBxdWlldCA/IGN0eC5zdGF0ZSA9IHN0YXRlW2lkXVxuICAgICAgICAgICAgICAgICAgICA6IGN0eC5zZXRTdGF0ZShzdGF0ZVtpZF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cbiAgICBcbiAgICByZXRhaW5TdG9yZXMoIHN0b3JlcyA9IFtdLCByZWFzb24gKSB7XG4gICAgICAgIHN0b3Jlcy5mb3JFYWNoKFxuICAgICAgICAgICAgaWQgPT4gKHRoaXMuc3RvcmVzW2lkXSAmJiB0aGlzLnN0b3Jlc1tpZF0ucmV0YWluICYmIHRoaXMuc3RvcmVzW2lkXS5yZXRhaW4ocmVhc29uKSlcbiAgICAgICAgKVxuICAgIH1cbiAgICBcbiAgICBkaXNwb3NlU3RvcmVzKCBzdG9yZXMgPSBbXSwgcmVhc29uICkge1xuICAgICAgICAvL2NvbnNvbGUud2FybihcImRpc3Bvc2VTdG9yZXNcIiwgc3RvcmVzLCByZWFzb24sIHRoaXMuc3RvcmVzW3N0b3Jlc1swXV0pO1xuICAgICAgICBcbiAgICAgICAgc3RvcmVzLmZvckVhY2goXG4gICAgICAgICAgICBpZCA9PiAodGhpcy5zdG9yZXNbaWRdICYmIHRoaXMuc3RvcmVzW2lkXS5kaXNwb3NlICYmIHRoaXMuc3RvcmVzW2lkXS5kaXNwb3NlKHJlYXNvbikpXG4gICAgICAgIClcbiAgICB9XG4gICAgXG4gICAgd2FpdCggcmVhc29uICkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwid2FpdFwiLCByZWFzb24pO1xuICAgICAgICB0aGlzLl9zdGFibGUgJiYgIXRoaXMuX19sb2Nrcy5hbGwgJiYgdGhpcy5lbWl0KFwidW5zdGFibGVcIiwgdGhpcyk7XG4gICAgICAgIHRoaXMuX3N0YWJsZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9fbG9ja3MuYWxsKys7XG4gICAgICAgIGlmICggcmVhc29uICkge1xuICAgICAgICAgICAgdGhpcy5fX2xvY2tzW3JlYXNvbl0gPSB0aGlzLl9fbG9ja3NbcmVhc29uXSB8fCAwO1xuICAgICAgICAgICAgdGhpcy5fX2xvY2tzW3JlYXNvbl0rKztcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICByZWxlYXNlKCByZWFzb24gKSB7XG4gICAgICAgIFxuICAgICAgICAvL2NvbnNvbGUubG9nKFwicmVsZWFzZVwiLCByZWFzb24pO1xuICAgICAgICBpZiAoIHJlYXNvbiApIHtcbiAgICAgICAgICAgIGlmICggdGhpcy5fX2xvY2tzW3JlYXNvbl0gPT0gMCApXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlJlbGVhc2UgbW9yZSB0aGFuIGxvY2tpbmcgIVwiLCByZWFzb24pO1xuICAgICAgICAgICAgdGhpcy5fX2xvY2tzW3JlYXNvbl0gPSB0aGlzLl9fbG9ja3NbcmVhc29uXSB8fCAwO1xuICAgICAgICAgICAgdGhpcy5fX2xvY2tzW3JlYXNvbl0tLTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoICFyZWFzb24gJiYgdGhpcy5fX2xvY2tzLmFsbCA9PSAwIClcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJSZWxlYXNlIG1vcmUgdGhhbiBsb2NraW5nICFcIik7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9fbG9ja3MuYWxsLS07XG4gICAgICAgIGlmICggIXRoaXMuX19sb2Nrcy5hbGwgKSB7XG4gICAgICAgICAgICB0aGlzLl9zdGFiaWxpemVyVE0gJiYgY2xlYXJUaW1lb3V0KHRoaXMuX3N0YWJpbGl6ZXJUTSk7XG4gICAgICAgICAgICB0aGlzLl9wcm9wYWdUTSAmJiBjbGVhclRpbWVvdXQodGhpcy5fcHJvcGFnVE0pO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLl9zdGFiaWxpemVyVE0gPSBzZXRUaW1lb3V0KFxuICAgICAgICAgICAgICAgIGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIHRoaXMuX19sb2Nrcy5hbGwgKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3N0YWJpbGl6ZXJUTSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zdGFibGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXQoXCJzdGFibGVcIiwgdGhpcyk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wcm9wYWcoKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxuICAgIFxuICAgIHByb3BhZygpIHtcbiAgICAgICAgdGhpcy5fcHJvcGFnVE0gJiYgY2xlYXJUaW1lb3V0KHRoaXMuX3Byb3BhZ1RNKTtcbiAgICAgICAgdGhpcy5fcHJvcGFnVE0gPSBzZXRUaW1lb3V0KFxuICAgICAgICAgICAgZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcHJvcGFnKClcbiAgICAgICAgICAgIH0sIDE1XG4gICAgICAgICk7XG4gICAgfVxuICAgIFxuICAgIF9wcm9wYWcoKSB7XG4gICAgICAgIGlmICggdGhpcy5fZm9sbG93ZXJzLmxlbmd0aCApXG4gICAgICAgICAgICB0aGlzLl9mb2xsb3dlcnMuZm9yRWFjaCgoIHsgMDogb2JqLCAxOiBrZXksIDI6IGFzLCAzOiBsYXN0UmV2cyB9ICkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBkYXRhcyA9IHRoaXMuZ2V0VXBkYXRlcyhsYXN0UmV2cyk7XG4gICAgICAgICAgICAgICAgaWYgKCAhZGF0YXMgKSByZXR1cm47XG4gICAgICAgICAgICAgICAgaWYgKCB0eXBlb2Ygb2JqICE9IFwiZnVuY3Rpb25cIiApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBhcyApIG9iai5zZXRTdGF0ZSh7IFthc106IGRhdGFzIH0pO1xuICAgICAgICAgICAgICAgICAgICBlbHNlIG9iai5zZXRTdGF0ZShkYXRhcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBvYmooZGF0YXMsIGxhc3RSZXZzICYmIFsuLi5sYXN0UmV2c10gfHwgXCJubyByZXZzXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBsYXN0UmV2cyAmJlxuICAgICAgICAgICAgICAgIC8vIGtleS5mb3JFYWNoKGlkID0+IChsYXN0UmV2c1tpZF0gPSB0aGlzLnN0b3Jlc1tpZF0gJiYgdGhpcy5zdG9yZXNbaWRdLl9yZXYgfHwgMCkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZW1pdChcInVwZGF0ZVwiLCB0aGlzLmdldFVwZGF0ZXMoKSk7XG4gICAgfVxuICAgIFxuICAgIF9nZXRBbGxDaGlsZHMoIGNoaWxkcyA9IFtdICkge1xuICAgICAgICBjaGlsZHMucHVzaCguLi50aGlzLl9jaGlsZENvbnRleHRzKVxuICAgICAgICB0aGlzLl9jaGlsZENvbnRleHRzLmZvckVhY2goXG4gICAgICAgICAgICBjdHggPT4ge1xuICAgICAgICAgICAgICAgIGN0eC5fZ2V0QWxsQ2hpbGRzKGNoaWxkcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiBjaGlsZHM7XG4gICAgfVxuICAgIFxuICAgIF9hZGRDaGlsZCggY3R4ICkge1xuICAgICAgICB0aGlzLl9jaGlsZENvbnRleHRzLnB1c2goY3R4KTtcbiAgICB9XG4gICAgXG4gICAgX3JtQ2hpbGQoIGN0eCApIHtcbiAgICAgICAgbGV0IGkgPSB0aGlzLl9jaGlsZENvbnRleHRzLmluZGV4T2YoY3R4KTtcbiAgICAgICAgaWYgKCBpICE9IC0xIClcbiAgICAgICAgICAgIHRoaXMuX2NoaWxkQ29udGV4dHMuc3BsaWNlKGksIDEpO1xuICAgIH1cbiAgICBcbiAgICByZXRhaW4oIHJlYXNvbiApIHtcbiAgICAgICAgdGhpcy5fX3JldGFpbnMuYWxsKys7XG4gICAgICAgIC8vY29uc29sZS5sb2coXCJyZXRhaW5cIiwgdGhpcy5faWQsIHJlYXNvbik7XG4gICAgICAgIFxuICAgICAgICBpZiAoIHJlYXNvbiApIHtcbiAgICAgICAgICAgIHRoaXMuX19yZXRhaW5zW3JlYXNvbl0gPSB0aGlzLl9fcmV0YWluc1tyZWFzb25dIHx8IDA7XG4gICAgICAgICAgICB0aGlzLl9fcmV0YWluc1tyZWFzb25dKys7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgZGlzcG9zZSggcmVhc29uICkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwiZGlzcG9zZVwiLCB0aGlzLl9pZCwgcmVhc29uKTtcbiAgICAgICAgaWYgKCByZWFzb24gKSB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmICggdGhpcy5fX3JldGFpbnNbcmVhc29uXSA9PSAwIClcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJEaXNwb3NlIG1vcmUgdGhhbiByZXRhaW5pbmcgIVwiKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5fX3JldGFpbnNbcmVhc29uXSA9IHRoaXMuX19yZXRhaW5zW3JlYXNvbl0gfHwgMDtcbiAgICAgICAgICAgIHRoaXMuX19yZXRhaW5zW3JlYXNvbl0tLTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKCB0aGlzLl9fcmV0YWlucy5hbGwgPT0gMCApXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJEaXNwb3NlIG1vcmUgdGhhbiByZXRhaW5pbmcgIVwiKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX19yZXRhaW5zLmFsbC0tO1xuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIGlmICggIXRoaXMuX19yZXRhaW5zLmFsbCApIHtcbiAgICAgICAgICAgIGlmICggdGhpcy5fcGVyc2lzdGVuY2VUbSApIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9kZXN0cm95VE0gJiYgY2xlYXJUaW1lb3V0KHRoaXMuX2Rlc3Ryb3lUTSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fZGVzdHJveVRNID0gc2V0VGltZW91dChcbiAgICAgICAgICAgICAgICAgICAgZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwid3RmIGN0eFwiLCB0aGlzLl9pZCwgcmVhc29uLCB0aGlzLl9fbG9ja3MsIHRoaXMuX3N0YWJsZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRoZW4ocyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcInd0ZiBjdHggdGhlblwiLCB0aGlzLl9pZCwgcmVhc29uLCB0aGlzLl9fbG9ja3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICF0aGlzLl9fcmV0YWlucy5hbGwgJiYgdGhpcy5kZXN0cm95KClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wZXJzaXN0ZW5jZVRtXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMudGhlbihzID0+ICghdGhpcy5fX3JldGFpbnMuYWxsICYmIHRoaXMuZGVzdHJveSgpKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogb3JkZXIgZGVzdHJveSBvZiBsb2NhbCBzdG9yZXNcbiAgICAgKi9cbiAgICBkZXN0cm95KCkge1xuICAgICAgICBsZXQgY3R4ID0gdGhpcy5fX2NvbnRleHQ7XG4gICAgICAgIFxuICAgICAgICAvL2NvbnNvbGUud2FybihcImRlc3Ryb3lcIiwgdGhpcy5faWQpO1xuICAgICAgICB0aGlzLmVtaXQoXCJkZXN0cm95XCIpO1xuICAgICAgICBPYmplY3Qua2V5cyhcbiAgICAgICAgICAgIHRoaXMuX19saXN0ZW5pbmdcbiAgICAgICAgKS5mb3JFYWNoKFxuICAgICAgICAgICAgaWQgPT4gdGhpcy5fX2NvbnRleHRbaWRdLnJlbW92ZUxpc3RlbmVyKHRoaXMuX19saXN0ZW5pbmdbaWRdKVxuICAgICAgICApO1xuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX19saXN0ZW5pbmcgPSB7fTtcbiAgICAgICAgXG4gICAgICAgIGlmICggdGhpcy5faXNMb2NhbElkIClcbiAgICAgICAgICAgIGRlbGV0ZSBvcGVuQ29udGV4dHNbdGhpcy5faWRdO1xuICAgICAgICB0aGlzLl9mb2xsb3dlcnMubGVuZ3RoID0gMDtcbiAgICAgICAgXG4gICAgICAgIGZvciAoIGxldCBrZXkgaW4gY3R4IClcbiAgICAgICAgICAgIGlmICggIWlzLmZuKGN0eFtrZXldKSApIHtcbiAgICAgICAgICAgICAgICBpZiAoIGN0eFtrZXldLmNvbnRleHRPYmogPT09IHRoaXMgKVxuICAgICAgICAgICAgICAgICAgICBjdHhba2V5XS5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY3R4W2tleV0gPSBjdHhba2V5XS5jb25zdHJ1Y3RvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgd2hpbGUgKCB0aGlzLl9fbWl4ZWRMaXN0Lmxlbmd0aCApIHtcbiAgICAgICAgICAgIHRoaXMuX19taXhlZFswXS5yZW1vdmVMaXN0ZW5lcih0aGlzLl9fbWl4ZWRMaXN0LnNoaWZ0KCkpO1xuICAgICAgICAgICAgdGhpcy5fX21peGVkLnNoaWZ0KCkuZGlzcG9zZSgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICggdGhpcy5wYXJlbnQgKSB7XG4gICAgICAgICAgICB0aGlzLnBhcmVudC5yZW1vdmVMaXN0ZW5lcih0aGlzLl9fcGFyZW50TGlzdCk7XG4gICAgICAgICAgICB0aGlzLnBhcmVudC5kaXNwb3NlKFwiaXNNeVBhcmVudFwiKTtcbiAgICAgICAgICAgIHRoaXMucGFyZW50Ll9ybUNoaWxkKHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIC8vIHRoaXMuZGF0YXMgPSB0aGlzLnN0YXRlID0gdGhpcy5jb250ZXh0ID0gdGhpcy5zdG9yZXMgPSBudWxsO1xuICAgICAgICAvLyB0aGlzLl9kYXRhcyA9IHRoaXMuX3N0YXRlID0gdGhpcy5fc3RvcmVzID0gbnVsbDtcbiAgICAgICAgXG4gICAgICAgIFxuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvQ29udGV4dC5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImlzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiaXNcIlxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJldmVudHNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJldmVudHNcIlxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzaG9ydGlkXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwic2hvcnRpZFwiXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpICAyMDE3IENhaXBpIExhYnMgLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4gKlxuICogQGF1dGhvciA6IE5hdGhhbmFlbCBCcmF1blxuICogQGNvbnRhY3QgOiBjYWlwaWxhYnNAZ21haWwuY29tXG4gKi9cblxuLyoqXG4gKiBVbHRyYSBzY2FsYWJsZSBzdGF0ZS1hd2FyZSBzdG9yZVxuICpcbiAqIEB0b2RvIDogbG90IG9mIG9wdGltcy4uLlxuICovXG5cbnZhciBpcyAgICAgICAgICAgPSByZXF1aXJlKCdpcycpLFxuICAgIENvbnRleHQgICAgICA9IHJlcXVpcmUoJy4vQ29udGV4dCcpLFxuICAgIEV2ZW50RW1pdHRlciA9IHJlcXVpcmUoJ2V2ZW50cycpLFxuICAgIHNob3J0aWQgICAgICA9IHJlcXVpcmUoJ3Nob3J0aWQnKSxcbiAgICBvYmpQcm90byAgICAgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Yoe30pLFxuICAgIG9wZW5Db250ZXh0cyA9IHt9O1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0b3JlIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgICBcbiAgICBzdGF0aWMgdXNlICAgICAgICAgICAgICAgICAgICAgICAgPSBbXTsvLyBvdmVycmlkYWJsZSBsaXN0IG9mIHNvdXJjZSBzdG9yZXNcbiAgICBzdGF0aWMgZm9sbG93Oy8vIG92ZXJyaWRhYmxlIGxpc3Qgb2Ygc3RvcmUgdGhhdCB3aWxsIGFsbG93IHB1c2ggaWYgdXBkYXRlZFxuICAgIHN0YXRpYyByZXF1aXJlO1xuICAgIHN0YXRpYyBzdGF0aWNDb250ZXh0ICAgICAgICAgICAgICA9IG5ldyBDb250ZXh0KHt9LCB7IGlkOiBcInN0YXRpY1wiIH0pO1xuICAgIHN0YXRpYyBpbml0aWFsU3RhdGUgICAgICAgICAgICAgICA9IHVuZGVmaW5lZDsvLyBkZWZhdWx0IHN0YXRlIEBkZXByZWNpYXRlZFxuICAgIHN0YXRpYyBzdGF0ZSAgICAgICAgICAgICAgICAgICAgICA9IHVuZGVmaW5lZDsvLyBkZWZhdWx0IHN0YXRlXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuICAgICAgICAgICBzdGF0aWMgZGVmYXVsdE1heExpc3RlbmVycyA9IDEwMDtcbiAgICAvKipcbiAgICAgKiBpZiByZXRhaW4gZ29lcyB0byAwIDpcbiAgICAgKiBmYWxzZSB0byBub3QgZGVzdHJveSxcbiAgICAgKiAwIHRvIHN5bmMgYXV0byBkZXN0cm95XG4gICAgICogTXMgdG8gYXV0b2Rlc3Ryb3kgYWZ0ZXIgdG0gbXMgaWYgbm8gcmV0YWluIGhhcyBiZWVuIGNhbGxlZFxuICAgICAqIEB0eXBlIHtib29sZWFufEludH1cbiAgICAgKi9cbiAgICAgICAgICAgc3RhdGljIHBlcnNpc3RlbmNlVG0gICAgICAgPSBmYWxzZTtcbiAgICBcbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3Rvciwgd2lsbCBidWlsZCBhIHJlc2NvcGUgc3RvcmVcbiAgICAgKlxuICAgICAqIChjb250ZXh0LCB7cmVxdWlyZSx1c2UsYXBwbHksc3RhdGUsIGRhdGFzfSlcbiAgICAgKiAoY29udGV4dClcbiAgICAgKlxuICAgICAqIEBwYXJhbSBjb250ZXh0IHtvYmplY3R9IGNvbnRleHQgd2hlcmUgdG8gZmluZCB0aGUgb3RoZXIgc3RvcmVzIChkZWZhdWx0IDogc3RhdGljIHN0YXRpY0NvbnRleHQgKVxuICAgICAqIEBwYXJhbSBrZXlzIHtBcnJheX0gKHBhc3NlZCB0byBTdG9yZTo6bWFwKSBFeCA6IFtcInNlc3Npb25cIiwgXCJvdGhlck5hbWVkU3RvcmU6a2V5XCIsIG90aGVyU3RvcmUuYXMoXCJvdGhlcktleVwiKV1cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdmFyIGFyZ3ogICAgICAgICA9IFsuLi5hcmd1bWVudHNdLFxuICAgICAgICAgICAgX3N0YXRpYyAgICAgID0gdGhpcy5jb25zdHJ1Y3RvcixcbiAgICAgICAgICAgIGNvbnRleHQgICAgICA9ICFpcy5hcnJheShhcmd6WzBdKSAmJiAhaXMuc3RyaW5nKGFyZ3pbMF0pID8gYXJnei5zaGlmdCgpIDogX3N0YXRpYy5zdGF0aWNDb250ZXh0LFxuICAgICAgICAgICAgY2ZnICAgICAgICAgID0gYXJnelswXSAmJiAhaXMuYXJyYXkoYXJnelswXSkgJiYgIWlzLnN0cmluZyhhcmd6WzBdKSA/IGFyZ3ouc2hpZnQoKSA6IHt9LFxuICAgICAgICAgICAgbmFtZSAgICAgICAgID0gaXMuc3RyaW5nKGFyZ3pbMF0pID8gYXJnelswXSA6IGNmZy5uYW1lIHx8IF9zdGF0aWMubmFtZSxcbiAgICAgICAgICAgIHdhdGNocyAgICAgICA9IGlzLmFycmF5KGFyZ3pbMF0pID8gYXJnei5zaGlmdCgpIDogY2ZnLnVzZSB8fCBbXSwvLyB3YXRjaHMgbmVlZCB0byBiZSBkZWZpbmVkIGFmdGVyIGFsbCB0aGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzdG9yZSBhcmUgcmVnaXN0ZXJlZCA6IHNvIHdlIGNhbid0IGRlYWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB3aXRoIGFueSBcInN0YXRpYyB1c2VcIiBhdXRvbWF0aWNseVxuICAgICAgICAgICAgYXBwbHkgICAgICAgID0gaXMuZm4oYXJnelswXSkgPyBhcmd6LnNoaWZ0KCkgOiBjZmcuYXBwbHkgfHwgbnVsbCxcbiAgICAgICAgICAgIGluaXRpYWxTdGF0ZSA9IF9zdGF0aWMuc3RhdGUgfHwgX3N0YXRpYy5pbml0aWFsU3RhdGU7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl91aWQgICAgICAgICAgPSBjZmcuX3VpZCB8fCBzaG9ydGlkLmdlbmVyYXRlKCk7XG4gICAgICAgIHRoaXMuX21heExpc3RlbmVycyA9IGNmZy5kZWZhdWx0TWF4TGlzdGVuZXJzIHx8IFN0b3JlLmRlZmF1bHRNYXhMaXN0ZW5lcnM7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9fcmV0YWlucyAgICA9IHsgYWxsOiAwIH07XG4gICAgICAgIHRoaXMuX19sb2NrcyAgICAgID0geyBhbGw6IDAgfTtcbiAgICAgICAgdGhpcy5fb25TdGFiaWxpemUgPSBbXTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX3BlcnNpc3RlbmNlVG0gPSBjZmcucGVyc2lzdGVuY2VUbSB8fCB0aGlzLmNvbnN0cnVjdG9yLnBlcnNpc3RlbmNlVG07XG4gICAgICAgIGlmICggaXMuc3RyaW5nKGFyZ3pbMF0pICkge1xuICAgICAgICAgICAgaWYgKCBjb250ZXh0Ll9fY29udGV4dFtuYW1lXSApXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwiUmVTY29wZTogT3ZlcndyaXRpbmcgYW4gZXhpc3Rpbmcgc3RhdGljIG5hbWVkIHN0b3JlICggJXMgKSAhIVwiLCBuYW1lKTtcbiAgICAgICAgICAgIGNvbnRleHQuX19jb250ZXh0W25hbWVdID0gdGhpcztcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKCBjZmcgJiYgY2ZnLm9uICkge1xuICAgICAgICAgICAgdGhpcy5vbihjZmcub24pO1xuICAgICAgICB9XG4gICAgICAgIC8vIHRoaXMuc3RhdGUgICAgICA9IHRoaXMuc3RhdGUgfHwge307XG4gICAgICAgIFxuICAgICAgICB0aGlzLl91c2UgPSBbLi4ud2F0Y2hzLCAuLi4oX3N0YXRpYy51c2UgfHwgW10pXTtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgXG4gICAgICAgIGlmICggY29udGV4dC5zdG9yZXMgKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRleHRPYmogPSBjb250ZXh0O1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0ICAgID0gY29udGV4dC5zdG9yZXM7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRleHRPYmogPSBuZXcgQ29udGV4dChjb250ZXh0KTtcbiAgICAgICAgICAgIHRoaXMuY29udGV4dCAgICA9IGNvbnRleHQuc3RvcmVzO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgdGhpcy5fc3RhYmxlICA9IHRydWU7XG4gICAgICAgIHRoaXMuX3JldiAgICAgPSAxO1xuICAgICAgICB0aGlzLl9yZXZzICAgID0ge307XG4gICAgICAgIHRoaXMuc3RvcmVzICAgPSB7fTtcbiAgICAgICAgdGhpcy5fcmVxdWlyZSA9IFtdO1xuICAgICAgICBcbiAgICAgICAgaWYgKCBfc3RhdGljLnJlcXVpcmUgKVxuICAgICAgICAgICAgdGhpcy5fcmVxdWlyZS5wdXNoKC4uLl9zdGF0aWMucmVxdWlyZSk7XG4gICAgICAgIGlmICggY2ZnLnJlcXVpcmUgKVxuICAgICAgICAgICAgdGhpcy5fcmVxdWlyZS5wdXNoKC4uLmNmZy5yZXF1aXJlKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX2ZvbGxvd2VycyA9IFtdO1xuICAgICAgICBcbiAgICAgICAgaWYgKCBfc3RhdGljLmRhdGFzICE9PSB1bmRlZmluZWQgKVxuICAgICAgICAgICAgdGhpcy5kYXRhcyA9IHsgLi4uX3N0YXRpYy5kYXRhcyB9O1xuICAgICAgICBpZiAoIGNmZy5oYXNPd25Qcm9wZXJ0eShcImRhdGFzXCIpICYmIGNmZy5kYXRhcyAhPT0gdW5kZWZpbmVkIClcbiAgICAgICAgICAgIHRoaXMuZGF0YXMgPSBjZmcuZGF0YXM7XG4gICAgICAgIGlmICggY2ZnLmhhc093blByb3BlcnR5KFwic3RhdGVcIikgJiYgY2ZnLnN0YXRlICE9PSB1bmRlZmluZWQgKVxuICAgICAgICAgICAgaW5pdGlhbFN0YXRlID0geyAuLi5pbml0aWFsU3RhdGUsIC4uLmNmZy5zdGF0ZSB9O1xuICAgICAgICBcbiAgICAgICAgaWYgKCBhcHBseSApXG4gICAgICAgICAgICB0aGlzLmFwcGx5ID0gYXBwbHk7XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgaWYgKCBpbml0aWFsU3RhdGUgfHwgdGhpcy5fdXNlLmxlbmd0aCApIHsvLyBzeW5jIGFwcGx5XG4gICAgICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgICAgIC4uLihpbml0aWFsU3RhdGUgfHwge30pLFxuICAgICAgICAgICAgICAgIC4uLmNvbnRleHQubWFwKHRoaXMsIHRoaXMuX3VzZSlcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoIHRoaXMuaXNDb21wbGV0ZSgpICYmIHRoaXMuZGF0YXMgPT09IHVuZGVmaW5lZCApXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhcyA9IHRoaXMuYXBwbHkodGhpcy5kYXRhcywgdGhpcy5zdGF0ZSwgdGhpcy5zdGF0ZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fc3RhYmxlID0gdGhpcy5kYXRhcyAhPT0gdW5kZWZpbmVkOy8vIHN0YWJsZSBpZiBpdCBoYXZlIGluaXRpYWwgcmVzdWx0IGRhdGFzXG4gICAgICAgICF0aGlzLl9zdGFibGUgJiYgdGhpcy5lbWl0KCd1bnN0YWJsZScsIHRoaXMuc3RhdGUpO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBnZXQgYSBCdWlsZGVyLWtleSBwYWlyIGZvciBTdG9yZTo6bWFwXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICAgKiBAcmV0dXJucyB7e3N0b3JlOiBTdG9yZSwgbmFtZTogKn19XG4gICAgICovXG4gICAgc3RhdGljIGFzKCBuYW1lICkge1xuICAgICAgICByZXR1cm4geyBzdG9yZTogdGhpcywgbmFtZSB9O1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBNYXAgYWxsIG5hbWVkIHN0b3JlcyBpbiB7a2V5c30gdG8gdGhlIHtvYmplY3R9J3Mgc3RhdGVcbiAgICAgKiBIb29rIGNvbXBvbmVudFdpbGxVbm1vdW50IChmb3IgcmVhY3QgY29tcCkgb3IgZGVzdHJveSB0byB1bkJpbmQgdGhlbSBhdXRvbWF0aWNhbGx5XG4gICAgICogQHN0YXRpY1xuICAgICAqIEBwYXJhbSBvYmplY3Qge1JlYWN0LkNvbXBvbmVudHxTdG9yZXwuLi59IHRhcmdldCBzdGF0ZSBhd2FyZSBvYmplY3RcbiAgICAgKiBAcGFyYW0ga2V5cyB7QXJyYXl9IEV4IDogW1wic2Vzc2lvblwiLCBcIm90aGVyU3RhdGljTmFtZWRTdG9yZTprZXlcIiwgc3RvcmUuYXMoJ2Fub3RoZXJLZXknKV1cbiAgICAgKi9cbiAgICBzdGF0aWMgbWFwKCBjb21wb25lbnQsIGtleXMsIGNvbnRleHQsIG9yaWdpbiwgc2V0SW5pdGlhbCA9IGZhbHNlICkge1xuICAgICAgICB2YXIgdGFyZ2V0UmV2cyAgICAgPSBjb21wb25lbnQuX3JldnMgfHwge307XG4gICAgICAgIHZhciB0YXJnZXRDb250ZXh0ICA9IGNvbXBvbmVudC5zdG9yZXMgfHwgKGNvbXBvbmVudC5zdG9yZXMgPSB7fSk7XG4gICAgICAgIHZhciBpbml0aWFsT3V0cHV0cyA9IHt9O1xuICAgICAgICBrZXlzICAgICAgICAgICAgICAgPSBpcy5hcnJheShrZXlzKSA/IFsuLi5rZXlzXSA6IFtrZXlzXTtcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICBjb250ZXh0ID0gY29udGV4dCB8fCBTdG9yZS5zdGF0aWNDb250ZXh0O1xuICAgICAgICBcbiAgICAgICAgLy8gaWYgKCF0YXJnZXRDb250ZXh0Ll9fY29udGV4dClcbiAgICAgICAgLy8gICAgIGRlYnVnZ2VyO1xuICAgICAgICBcbiAgICAgICAga2V5cyAgICAgICAgICAgPSBrZXlzLmZpbHRlcihcbiAgICAgICAgICAgIC8vIEB0b2RvIDogdXNlIHF1ZXJ5IHJlZnNcbiAgICAgICAgICAgIC8vIChzdG9yZSkoXFwuc3RvcmUpKihcXFsoXFwqfChwcm9wcylcXHcrKSspXFxdKT8oXFw6YWxpYXMpXG4gICAgICAgICAgICAoIGtleSApID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoICFrZXkgKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJOb3QgYSBtYXBwYWJsZSBzdG9yZSBpdGVtICdcIiArIGtleSArIFwiJyBpbiBcIiArIG9yaWdpbiArICcgISEnKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZXQgbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgYWxpYXMsXG4gICAgICAgICAgICAgICAgICAgIHN0b3JlO1xuICAgICAgICAgICAgICAgIGlmICgga2V5LnN0b3JlICYmIGtleS5uYW1lICkge1xuICAgICAgICAgICAgICAgICAgICBhbGlhcyA9IG5hbWUgPSBrZXkubmFtZTtcbiAgICAgICAgICAgICAgICAgICAgc3RvcmUgPSBrZXkuc3RvcmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKCBpcy5mbihrZXkpICkge1xuICAgICAgICAgICAgICAgICAgICBuYW1lID0gYWxpYXMgPSBrZXkubmFtZSB8fCBrZXkuZGVmYXVsdE5hbWU7XG4gICAgICAgICAgICAgICAgICAgIHN0b3JlID0ga2V5O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAga2V5ICAgPSBrZXkubWF0Y2goLyhbXFx3X10rKSg/OlxcOlxcWyhcXCopXFxdKT8oPzpcXDooXFwqKSk/Lyk7XG4gICAgICAgICAgICAgICAgICAgIG5hbWUgID0ga2V5WzBdO1xuICAgICAgICAgICAgICAgICAgICBzdG9yZSA9IGNvbnRleHQuc3RvcmVzW2tleVswXV07XG4gICAgICAgICAgICAgICAgICAgIGFsaWFzID0ga2V5WzFdID09ICcqJyA/IG51bGwgOiBrZXlbMl0gfHwga2V5WzBdOy8vIGFsbG93IGJpbmRpbmcgcHJvcHMgIChbKl0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmICggdGFyZ2V0UmV2c1tuYW1lXSApIHJldHVybiBmYWxzZTsvLyBpZ25vcmUgZGJsIHVzZXMgZm9yIG5vd1xuICAgICAgICAgICAgICAgIGlmICggIXN0b3JlICkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiTm90IGEgbWFwcGFibGUgc3RvcmUgaXRlbSAnXCIgKyBuYW1lICsgXCIvXCIgKyBhbGlhcyArIFwiJyBpbiBcIiArIG9yaWdpbiArICcgISEnLCBzdG9yZSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoIGlzLmZuKHN0b3JlKSApIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5fbW91bnQobmFtZSlcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQuc3RvcmVzW25hbWVdLmJpbmQoY29tcG9uZW50LCBhbGlhcywgc2V0SW5pdGlhbCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIGlmICggY29udGV4dC5fX2NvbnRleHRba2V5WzBdXS5zdGF0ZSApIHsvLyBkbyBzeW5jIHB1c2ggYWZ0ZXIgY29uc3RydWN0b3JcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGNvbnRleHQuX19jb250ZXh0W2tleVswXV0ucHVzaCgpO1xuICAgICAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzdG9yZS5iaW5kKGNvbXBvbmVudCwgYWxpYXMsIHNldEluaXRpYWwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0YXJnZXRSZXZzW2FsaWFzXSA9IHRhcmdldFJldnNbYWxpYXNdIHx8IHRydWU7XG4gICAgICAgICAgICAgICAgIXRhcmdldENvbnRleHRbbmFtZV0gJiYgKHRhcmdldENvbnRleHRbbmFtZV0gPSBjb250ZXh0LnN0b3Jlc1tuYW1lXSk7XG4gICAgICAgICAgICAgICAgaWYgKCBjb250ZXh0LnN0b3Jlc1tuYW1lXS5oYXNPd25Qcm9wZXJ0eSgnZGF0YXMnKSApXG4gICAgICAgICAgICAgICAgICAgIGluaXRpYWxPdXRwdXRzW25hbWVdID0gY29udGV4dC5kYXRhc1tuYW1lXTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgdmFyIG1peGVkQ1dVbm1vdW50LFxuICAgICAgICAgICAgdW5Nb3VudEtleSA9IGNvbXBvbmVudC5pc1JlYWN0Q29tcG9uZW50ID8gXCJjb21wb25lbnRXaWxsVW5tb3VudFwiIDogXCJkZXN0cm95XCI7XG4gICAgICAgIFxuICAgICAgICBpZiAoIGNvbXBvbmVudC5oYXNPd25Qcm9wZXJ0eSh1bk1vdW50S2V5KSApIHtcbiAgICAgICAgICAgIG1peGVkQ1dVbm1vdW50ID0gY29tcG9uZW50W3VuTW91bnRLZXldO1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIGNvbXBvbmVudFt1bk1vdW50S2V5XSA9ICguLi5hcmd6KSA9PiB7XG4gICAgICAgICAgICBkZWxldGUgY29tcG9uZW50W3VuTW91bnRLZXldO1xuICAgICAgICAgICAgaWYgKCBtaXhlZENXVW5tb3VudCApXG4gICAgICAgICAgICAgICAgY29tcG9uZW50W3VuTW91bnRLZXldID0gbWl4ZWRDV1VubW91bnQ7XG4gICAgXG4gICAgICAgICAgICBrZXlzLm1hcChcbiAgICAgICAgICAgICAgICAoIGtleSApID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlhcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIGtleS5zdG9yZSAmJiBrZXkubmFtZSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWFzID0gbmFtZSA9IGtleS5uYW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmUgPSBrZXkuc3RvcmU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoIGlzLmZuKGtleSkgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lID0gYWxpYXMgPSBrZXkubmFtZSB8fCBrZXkuZGVmYXVsdE5hbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9yZSA9IGNvbnRleHQuc3RvcmVzW25hbWVdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5ICAgPSBrZXkuc3BsaXQoJzonKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUgID0ga2V5WzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmUgPSBjb250ZXh0LnN0b3Jlc1trZXlbMF1dO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpYXMgPSBrZXlbMV0gfHwga2V5WzBdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgc3RvcmUgJiYgIWlzLmZuKHN0b3JlKSAmJiBzdG9yZS51bkJpbmQoY29tcG9uZW50LCBhbGlhcylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgcmV0dXJuIGNvbXBvbmVudFt1bk1vdW50S2V5XSAmJiBjb21wb25lbnRbdW5Nb3VudEtleV0oLi4uYXJneik7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiBpbml0aWFsT3V0cHV0cztcbiAgICB9XG4gICAgXG4gICAgXG4gICAgLyoqXG4gICAgICogT3ZlcnJpZGFibGUgbWV0aG9kIHRvIGtub3cgaWYgYSBzdGF0ZSBjaGFuZ2Ugc2hvdWxkIGJlIHByb3BhZyB0byB0aGUgbGlzdGVuaW5nIHN0b3JlcyAmIGNvbXBvbmVudHNcbiAgICAgKiBJZiBzdGF0aWMgZm9sbG93IGlzIGRlZmluZWQsIHNob3VsZFByb3BhZyB3aWxsIHJldHVybiB0cnVlIGlmIGFueSBvZiB0aGUgXCJmb2xsb3dcIiBrZXlzIHdhcyB1cGRhdGVkXG4gICAgICogSWYgbm90IGl0IHdpbGwgYWx3YXlzIHJldHVybiB0cnVlXG4gICAgICovXG4gICAgc2hvdWxkUHJvcGFnKCBuRGF0YXMgKSB7XG4gICAgICAgIHZhciBfc3RhdGljID0gdGhpcy5jb25zdHJ1Y3RvciwgcixcbiAgICAgICAgICAgIGNEYXRhcyAgPSB0aGlzLmRhdGFzO1xuICAgICAgICBcbiAgICAgICAgLy8gaWYgKCAhY1N0YXRlIClcbiAgICAgICAgLy8gICAgIHJldHVybiB0cnVlO1xuICAgICAgICBpZiAoICFjRGF0YXMgJiYgKCFfc3RhdGljLmZvbGxvdyB8fCAhX3N0YXRpYy5mb2xsb3cubGVuZ3RoIHx8XG4gICAgICAgICAgICAgICAgX3N0YXRpYy5mb2xsb3cgJiYgX3N0YXRpYy5mb2xsb3cucmVkdWNlKCggciwgaSApID0+IChyIHx8IG5EYXRhcyAmJiBuRGF0YXNbaV0pLCBmYWxzZSkpIClcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICBcbiAgICAgICAgaWYgKCBpcy5hcnJheShfc3RhdGljLmZvbGxvdykgKVxuICAgICAgICAgICAgX3N0YXRpYy5mb2xsb3cuZm9yRWFjaChcbiAgICAgICAgICAgICAgICAoIGtleSApID0+IHtcbiAgICAgICAgICAgICAgICAgICAgciA9IHIgfHwgKG5EYXRhcyA/IGNEYXRhc1trZXldICE9PSBuRGF0YXNba2V5XSA6IGNEYXRhcyAmJiBjRGF0YXNba2V5XSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICBlbHNlIGlmICggX3N0YXRpYy5mb2xsb3cgPT09ICdzdHJpY3QnIClcbiAgICAgICAgICAgIHIgPSBuRGF0YXMgPT09IGNEYXRhcztcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjRGF0YXMgJiYgT2JqZWN0LmtleXMoY0RhdGFzKS5mb3JFYWNoKFxuICAgICAgICAgICAgICAgICgga2V5ICkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByID0gciB8fCAobkRhdGFzID8gY0RhdGFzW2tleV0gIT09IG5EYXRhc1trZXldIDogY0RhdGFzICYmIGNEYXRhc1trZXldKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBuRGF0YXMgJiYgT2JqZWN0LmtleXMobkRhdGFzKS5mb3JFYWNoKFxuICAgICAgICAgICAgICAgICgga2V5ICkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByID0gciB8fCAobkRhdGFzID8gY0RhdGFzW2tleV0gIT09IG5EYXRhc1trZXldIDogY0RhdGFzICYmIGNEYXRhc1trZXldKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiAhIXI7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIE92ZXJyaWRhYmxlIGFwcGxpZXIgLyByZW1hcHBlclxuICAgICAqIElmIHN0YXRlIG9yIGxhc3RQdWJsaWNTdGF0ZSBhcmUgc2ltcGxlIGhhc2ggbWFwcyBhcHBseSB3aWxsIHJldHVybiB7Li4uZGF0YXMsIC4uLnN0YXRlfVxuICAgICAqIGlmIG5vdCBpdCB3aWxsIHJldHVybiB0aGUgbGFzdCBwcml2YXRlIHN0YXRlXG4gICAgICogQHBhcmFtIGRhdGFzXG4gICAgICogQHBhcmFtIHN0YXRlXG4gICAgICogQHJldHVybnMgeyp9XG4gICAgICovXG4gICAgYXBwbHkoIGRhdGFzLCBzdGF0ZSwgY2hhbmdlcyApIHtcbiAgICAgICAgc3RhdGUgPSBzdGF0ZSB8fCB0aGlzLnN0YXRlO1xuICAgICAgICBcbiAgICAgICAgaWYgKCB0aGlzLnJlZmluZSApXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZWZpbmUoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgXG4gICAgICAgIGlmICggIWRhdGFzIHx8IGRhdGFzLl9fcHJvdG9fXyAhPT0gb2JqUHJvdG8gfHwgc3RhdGUuX19wcm90b19fICE9PSBvYmpQcm90byApXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHJldHVybiB7IC4uLmRhdGFzLCAuLi5zdGF0ZSB9XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIEBkZXByZWNpYXRlZFxuICAgICAqIEBwYXJhbSBkYXRhc1xuICAgICAqIEBwYXJhbSBzdGF0ZVxuICAgICAqIEBwYXJhbSBjaGFuZ2VzXG4gICAgICogQHJldHVybnMgeyp9XG4gICAgICovXG4gICAgcmVmaW5lKCBkYXRhcywgc3RhdGUsIGNoYW5nZXMgKSB7XG4gICAgICAgIHN0YXRlID0gc3RhdGUgfHwgdGhpcy5zdGF0ZTtcbiAgICAgICAgXG4gICAgICAgIGlmICggIWRhdGFzIHx8IGRhdGFzLl9fcHJvdG9fXyAhPT0gb2JqUHJvdG8gfHwgc3RhdGUuX19wcm90b19fICE9PSBvYmpQcm90byApXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHJldHVybiB7IC4uLmRhdGFzLCAuLi5zdGF0ZSB9XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIERlYm91bmNlIHRoaXMgc3RvcmUgcHJvcGFnYXRpb24gKCAmIHJlZHVjaW5nIClcbiAgICAgKiBAcGFyYW0gY2JcbiAgICAgKi9cbiAgICBzdGFiaWxpemUoIGNiICkge1xuICAgICAgICB2YXIgbWUgPSB0aGlzO1xuICAgICAgICBjYiAmJiBtZS5vbmNlKCdzdGFibGUnLCBjYik7XG4gICAgICAgIHRoaXMuX3N0YWJsZSAmJiB0aGlzLmVtaXQoJ3Vuc3RhYmxlJywgdGhpcy5zdGF0ZSwgdGhpcy5kYXRhcyk7XG4gICAgICAgIFxuICAgICAgICBtZS5fc3RhYmxlID0gZmFsc2U7XG4gICAgICAgIFxuICAgICAgICBpZiAoIHRoaXMuX3N0YWJpbGl6ZXIgKVxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX3N0YWJpbGl6ZXIpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fc3RhYmlsaXplciA9IHNldFRpbWVvdXQoXG4gICAgICAgICAgICB0aGlzLnB1c2guYmluZChcbiAgICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgKCkgPT4gey8vQHRvZG9cbiAgICAgICAgICAgICAgICAgICAgLy8gbWUuX3N0YWJsZSAgICAgICA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3N0YWJpbGl6ZXIgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnJlbGVhc2UoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApKTtcbiAgICB9XG4gICAgXG4gICAgZGlzcGF0Y2goIGV2ZW50ICkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIFB1bGwgc3RvcmVzIGluIHRoZSBwcml2YXRlIHN0YXRlXG4gICAgICogQHBhcmFtIHN0b3JlcyAge0FycmF5fSAocGFzc2VkIHRvIFN0b3JlOjptYXApIEV4IDogW1wic2Vzc2lvblwiLCBcIm90aGVyTmFtZWRTdG9yZTprZXlcIiwgb3RoZXJTdG9yZS5hcyhcIm90aGVyS2V5XCIpXVxuICAgICAqL1xuICAgIHB1bGwoIHN0b3JlcywgZG9XYWl0LCBvcmlnaW4gKSB7XG4gICAgICAgIGxldCBpbml0aWFsT3V0cHV0cyA9IHRoaXMuY29udGV4dE9iai5tYXAodGhpcywgc3RvcmVzKTtcbiAgICAgICAgaWYgKCBkb1dhaXQgKSB7XG4gICAgICAgICAgICB0aGlzLndhaXQoKTtcbiAgICAgICAgICAgIHN0b3Jlcy5mb3JFYWNoKCggcyApID0+IHRoaXMuY29udGV4dFtzXSAmJiB0aGlzLndhaXQodGhpcy5jb250ZXh0W3NdKSk7XG4gICAgICAgICAgICB0aGlzLnJlbGVhc2UoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW5pdGlhbE91dHB1dHM7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIEFwcGx5IGFwcGx5L3JlbWFwIG9uIHRoZSBwcml2YXRlIHN0YXRlICYgcHVzaCB0aGUgcmVzdWx0aW5nIFwicHVibGljXCIgc3RhdGUgdG8gZm9sbG93ZXJzXG4gICAgICogQHBhcmFtIGNiXG4gICAgICovXG4gICAgcHVzaCggZGF0YXMsIGZvcmNlLCBjYiApIHtcbiAgICAgICAgY2IgICAgICAgICAgICA9IGZvcmNlID09PSB0cnVlID8gY2IgOiBmb3JjZTtcbiAgICAgICAgZm9yY2UgICAgICAgICA9IGZvcmNlID09PSB0cnVlO1xuICAgICAgICB2YXIgaSAgICAgICAgID0gMCxcbiAgICAgICAgICAgIG1lICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBuZXh0U3RhdGUgPSAhZGF0YXMgJiYgeyAuLi50aGlzLnN0YXRlLCAuLi50aGlzLl9jaGFuZ2VzU1cgfSB8fCB0aGlzLnN0YXRlLFxuICAgICAgICAgICAgbmV4dERhdGFzID0gZGF0YXMgfHxcbiAgICAgICAgICAgICAgICAodGhpcy5pc0NvbXBsZXRlKG5leHRTdGF0ZSkgPyB0aGlzLmFwcGx5KHRoaXMuZGF0YXMsIG5leHRTdGF0ZSwgdGhpcy5fY2hhbmdlc1NXKSA6IHRoaXMuZGF0YXMpO1xuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIHRoaXMuc3RhdGUgPSBuZXh0U3RhdGU7XG4gICAgICAgIGlmICggIWZvcmNlICYmXG4gICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgKCF0aGlzLmRhdGFzICYmIHRoaXMuZGF0YXMgPT09IG5leHREYXRhcykgfHwgIXRoaXMuc2hvdWxkUHJvcGFnKG5leHREYXRhcylcbiAgICAgICAgICAgIClcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBjYiAmJiBjYigpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0aGlzLmRhdGFzID0gbmV4dERhdGFzO1xuICAgICAgICB0aGlzLl9fbG9ja3MuYWxsKys7XG4gICAgICAgIHRoaXMucmVsZWFzZShjYik7XG4gICAgICAgIFxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBVcGRhdGUgdGhlIGN1cnJlbnQgcHJpdmF0ZSBzdGF0ZSAmIHB1c2ggaXQgb25jZSB0aGUgc3RvcmUgaXMgc3RhYmxlXG4gICAgICogQHBhcmFtIHBTdGF0ZVxuICAgICAqIEBwYXJhbSBjYlxuICAgICAqL1xuICAgIHNldFN0YXRlKCBwU3RhdGUsIGNiLCBzeW5jICkge1xuICAgICAgICB2YXIgaSAgICAgICA9IDAsIGNoYW5nZSxcbiAgICAgICAgICAgIGNoYW5nZXMgPSB0aGlzLl9jaGFuZ2VzU1cgPSB0aGlzLl9jaGFuZ2VzU1cgfHwge307XG4gICAgICAgIGZvciAoIHZhciBrIGluIHBTdGF0ZSApXG4gICAgICAgICAgICBpZiAoICF0aGlzLnN0YXRlIHx8IHBTdGF0ZS5oYXNPd25Qcm9wZXJ0eShrKVxuICAgICAgICAgICAgICAgICYmIChcbiAgICAgICAgICAgICAgICAgICAgcFN0YXRlW2tdICE9IHRoaXMuc3RhdGVba11cbiAgICAgICAgICAgICAgICAgICAgfHxcbiAgICAgICAgICAgICAgICAgICAgKHRoaXMuc3RhdGVba10gJiYgcFN0YXRlW2tdICYmIChwU3RhdGVba10uX3JldiAhPSB0aGlzLl9yZXZzW2tdKSkvLyByZXYvaGFzaCB1cGRhdGVcbiAgICAgICAgICAgICAgICApICkge1xuICAgICAgICAgICAgICAgIGNoYW5nZSAgICAgICAgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuX3JldnNba10gPSBwU3RhdGVba10gJiYgcFN0YXRlW2tdLl9yZXYgfHwgdHJ1ZTtcbiAgICAgICAgICAgICAgICBjaGFuZ2VzW2tdICAgID0gcFN0YXRlW2tdO1xuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKCBzeW5jICkge1xuICAgICAgICAgICAgdGhpcy5wdXNoKCk7XG4gICAgICAgICAgICBjYiAmJiBjYigpO1xuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoIGNoYW5nZSApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YWJpbGl6ZShjYik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGNiICYmIGNiKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSB0aGUgY3VycmVudCBwcml2YXRlIHN0YXRlICYgcHVzaCBpdCBvbmNlIHRoZSBzdG9yZSBpcyBzdGFibGVcbiAgICAgKiBAcGFyYW0gcFN0YXRlXG4gICAgICogQHBhcmFtIGNiXG4gICAgICovXG4gICAgc2V0U3RhdGVTeW5jKCBwU3RhdGUgKSB7XG4gICAgICAgIHZhciBpICAgICAgID0gMCwgY2hhbmdlLFxuICAgICAgICAgICAgY2hhbmdlcyA9IHRoaXMuX2NoYW5nZXNTVyA9IHRoaXMuX2NoYW5nZXNTVyB8fCB7fTtcbiAgICAgICAgZm9yICggdmFyIGsgaW4gcFN0YXRlIClcbiAgICAgICAgICAgIGlmICggIXRoaXMuc3RhdGUgfHwgcFN0YXRlLmhhc093blByb3BlcnR5KGspXG4gICAgICAgICAgICAgICAgJiYgKFxuICAgICAgICAgICAgICAgICAgICBwU3RhdGVba10gIT0gdGhpcy5zdGF0ZVtrXVxuICAgICAgICAgICAgICAgICAgICB8fFxuICAgICAgICAgICAgICAgICAgICAodGhpcy5zdGF0ZVtrXSAmJiBwU3RhdGVba10gJiYgKHBTdGF0ZVtrXS5fcmV2ICE9IHRoaXMuX3JldnNba10pKS8vIHJldi9oYXNoIHVwZGF0ZVxuICAgICAgICAgICAgICAgICkgKSB7XG4gICAgICAgICAgICAgICAgY2hhbmdlICAgICAgICA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5fcmV2c1trXSA9IHBTdGF0ZVtrXSAmJiBwU3RhdGVba10uX3JldiB8fCB0cnVlO1xuICAgICAgICAgICAgICAgIGNoYW5nZXNba10gICAgPSBwU3RhdGVba107XG4gICAgICAgICAgICB9XG4gICAgICAgIHRoaXMucHVzaCgpO1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhcztcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogUmVwbGFjZSB0aGUgY3VycmVudCBwcml2YXRlIHN0YXRlICYgcHVzaCBpdCBvbmNlIHRoZSBzdG9yZSBpcyBzdGFibGVcbiAgICAgKiBAcGFyYW0gcFN0YXRlXG4gICAgICogQHBhcmFtIGNiXG4gICAgICovXG4gICAgcmVwbGFjZVN0YXRlKCBwU3RhdGUsIGNiICkge1xuICAgICAgICB2YXIgaSAgICAgID0gMCwgbWUgPSB0aGlzO1xuICAgICAgICB0aGlzLnN0YXRlID0gcFN0YXRlO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5zdGFiaWxpemUoY2IpO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBnZXQgYSBzdG9yZS1rZXkgcGFpciBmb3IgU3RvcmU6Om1hcFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gICAgICogQHJldHVybnMge3tzdG9yZTogU3RvcmUsIG5hbWU6ICp9fVxuICAgICAqL1xuICAgIGFzKCBuYW1lICkge1xuICAgICAgICByZXR1cm4geyBzdG9yZTogdGhpcywgbmFtZSB9O1xuICAgIH1cbiAgICBcbiAgICBvbiggbGlzdHMgKSB7XG4gICAgICAgIGlmICggIWlzLnN0cmluZyhsaXN0cykgJiYgbGlzdHMgKVxuICAgICAgICAgICAgT2JqZWN0LmtleXMobGlzdHMpLmZvckVhY2goayA9PiBzdXBlci5vbihrLCBsaXN0c1trXSkpO1xuICAgICAgICBlbHNlIHN1cGVyLm9uKC4uLmFyZ3VtZW50cyk7XG4gICAgfVxuICAgIFxuICAgIHJlbW92ZUxpc3RlbmVyKCBsaXN0cyApIHtcbiAgICAgICAgaWYgKCAhaXMuc3RyaW5nKGxpc3RzKSAmJiBsaXN0cyApXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhsaXN0cykuZm9yRWFjaChrID0+IHN1cGVyLnJlbW92ZUxpc3RlbmVyKGssIGxpc3RzW2tdKSk7XG4gICAgICAgIGVsc2Ugc3VwZXIucmVtb3ZlTGlzdGVuZXIoLi4uYXJndW1lbnRzKTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogcmVsaW5rIGJpbmRpbmdzICYgcmVxdWlyZXNcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgICAqIEByZXR1cm5zIHt7c3RvcmU6IFN0b3JlLCBuYW1lOiAqfX1cbiAgICAgKi9cbiAgICByZWxpbmsoIGZyb20gKSB7XG4gICAgICAgIGxldCBjb250ZXh0ID0gdGhpcy5jb250ZXh0T2JqLFxuICAgICAgICAgICAgX3N0YXRpYyA9IHRoaXMuY29uc3RydWN0b3I7XG4gICAgICAgIGlmICggX3N0YXRpYy51c2UgKSB7XG4gICAgICAgICAgICAvL3RvZG8gdW5saW5rXG4gICAgICAgICAgICB0aGlzLnB1bGwoX3N0YXRpYy51c2UsIGZhbHNlLCBmcm9tKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKCB0aGlzLl9yZXF1aXJlICkge1xuICAgICAgICAgICAgdGhpcy5fcmVxdWlyZS5mb3JFYWNoKFxuICAgICAgICAgICAgICAgIHN0b3JlID0+IChcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53YWl0KGNvbnRleHQuX19jb250ZXh0W3N0b3JlXSlcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIGlzIGNvbXBsZXRlIChhbGwgcmVxdWllcmVkIGtleXMgYXJlIGhlcmUpXG4gICAgICogQHJldHVybnMgYm9vbFxuICAgICAqL1xuICAgIGlzQ29tcGxldGUoIHN0YXRlID0gdGhpcy5zdGF0ZSApIHtcbiAgICAgICAgdmFyIF9zdGF0aWMgPSB0aGlzLmNvbnN0cnVjdG9yO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgIXRoaXMuX3JlcXVpcmVcbiAgICAgICAgICAgIHx8ICF0aGlzLl9yZXF1aXJlLmxlbmd0aFxuICAgICAgICAgICAgfHwgc3RhdGUgJiYgdGhpcy5fcmVxdWlyZS5yZWR1Y2UoXG4gICAgICAgICAgICAgICAgKCByLCBrZXkgKSA9PiAociAmJiBzdGF0ZVtrZXldKSxcbiAgICAgICAgICAgICAgICB0cnVlXG4gICAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIGlzIHN0YWJsZVxuICAgICAqIEByZXR1cm5zIGJvb2xcbiAgICAgKi9cbiAgICBpc1N0YWJsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0YWJsZTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogVW4gYmluZCB0aGlzIHN0b3JlIG9mZiB0aGUgZ2l2ZW4gY29tcG9uZW50LWtleVxuICAgICAqIEBwYXJhbSBvYmpcbiAgICAgKiBAcGFyYW0ga2V5XG4gICAgICogQHJldHVybnMge0FycmF5LjwqPn1cbiAgICAgKi9cbiAgICB1bkJpbmQoIG9iaiwga2V5ICkge1xuICAgICAgICB2YXIgZm9sbG93ZXJzID0gdGhpcy5fZm9sbG93ZXJzLFxuICAgICAgICAgICAgaSAgICAgICAgID0gZm9sbG93ZXJzICYmIGZvbGxvd2Vycy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggZm9sbG93ZXJzICYmIGktLSApXG4gICAgICAgICAgICBpZiAoIGZvbGxvd2Vyc1tpXVswXSA9PSBvYmogJiYgZm9sbG93ZXJzW2ldWzFdID09IGtleSApXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZvbGxvd2Vycy5zcGxpY2UoaSwgMSk7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIEJpbmQgdGhpcyBzdG9yZSBjaGFuZ2VzIHRvIHRoZSBnaXZlbiBjb21wb25lbnQta2V5XG4gICAgICogQHBhcmFtIG9iaiB7UmVhY3QuQ29tcG9uZW50fFN0b3JlfGZ1bmN0aW9uKVxuICAgICAqIEBwYXJhbSBrZXkge3N0cmluZ30gb3B0aW9uYWwga2V5IHdoZXJlIHRvIG1hcCB0aGUgcHVibGljIHN0YXRlXG4gICAgICovXG4gICAgYmluZCggb2JqLCBrZXksIHNldEluaXRpYWwgPSB0cnVlICkge1xuICAgICAgICB0aGlzLl9mb2xsb3dlcnMucHVzaChbb2JqLCBrZXldKTtcbiAgICAgICAgaWYgKCBzZXRJbml0aWFsICYmIHRoaXMuZGF0YXMgJiYgdGhpcy5fc3RhYmxlICkge1xuICAgICAgICAgICAgaWYgKCB0eXBlb2Ygb2JqICE9IFwiZnVuY3Rpb25cIiApIHtcbiAgICAgICAgICAgICAgICBpZiAoIGtleSApIG9iai5zZXRTdGF0ZSh7IFtrZXldOiB0aGlzLmRhdGFzIH0pO1xuICAgICAgICAgICAgICAgIGVsc2Ugb2JqLnNldFN0YXRlKHRoaXMuZGF0YXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgb2JqKHRoaXMuZGF0YXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIG9uY2UoJ3N0YWJsZScsIGNiKVxuICAgICAqIEBwYXJhbSBvYmoge1JlYWN0LkNvbXBvbmVudHxTdG9yZXxmdW5jdGlvbilcbiAgICAgKiBAcGFyYW0ga2V5IHtzdHJpbmd9IG9wdGlvbmFsIGtleSB3aGVyZSB0byBtYXAgdGhlIHB1YmxpYyBzdGF0ZVxuICAgICAqL1xuICAgIHRoZW4oIGNiICkge1xuICAgICAgICBpZiAoIHRoaXMuX3N0YWJsZSApXG4gICAgICAgICAgICByZXR1cm4gY2IobnVsbCwgdGhpcy5kYXRhcyk7XG4gICAgICAgIHRoaXMub25jZSgnc3RhYmxlJywgZSA9PiBjYihudWxsLCB0aGlzLmRhdGFzKSk7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIEFkZCBhIGxvY2sgc28gdGhlIHN0b3JlIHdpbGwgbm90IHByb3BhZyBpdCBzdGF0ZSB1bnRpbGwgcmVsZWFzZSgpIGlzIGNhbGxcbiAgICAgKiBAcGFyYW0gcHJldmlvdXMge1N0b3JlfG51bWJlcnxBcnJheX0gQG9wdGlvbmFsIHdmIHRvIHdhaXQsIHJlbGVhc2VzIHRvIHdhaXQgb3IgYXJyYXkgb2Ygc3R1ZmYgdG8gd2FpdFxuICAgICAqIEByZXR1cm5zIHtUYXNrRmxvd31cbiAgICAgKi9cbiAgICB3YWl0KCBwcmV2aW91cyApIHtcbiAgICAgICAgaWYgKCB0eXBlb2YgcHJldmlvdXMgPT0gXCJudW1iZXJcIiApXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fX2xvY2tzLmFsbCArPSBwcmV2aW91cztcbiAgICAgICAgaWYgKCBpcy5hcnJheShwcmV2aW91cykgKVxuICAgICAgICAgICAgcmV0dXJuIHByZXZpb3VzLm1hcCh0aGlzLndhaXQuYmluZCh0aGlzKSk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9zdGFibGUgJiYgdGhpcy5lbWl0KCd1bnN0YWJsZScsIHRoaXMuc3RhdGUsIHRoaXMuZGF0YXMpO1xuICAgICAgICB0aGlzLl9zdGFibGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fX2xvY2tzLmFsbCsrO1xuICAgICAgICBcbiAgICAgICAgbGV0IHJlYXNvbiA9IGlzLnN0cmluZyhwcmV2aW91cykgPyBwcmV2aW91cyA6IG51bGw7XG4gICAgICAgIGlmICggcmVhc29uICkge1xuICAgICAgICAgICAgdGhpcy5fX2xvY2tzW3JlYXNvbl0gPSB0aGlzLl9fbG9ja3NbcmVhc29uXSB8fCAwO1xuICAgICAgICAgICAgdGhpcy5fX2xvY2tzW3JlYXNvbl0rKztcbiAgICAgICAgfVxuICAgICAgICBpZiAoIHByZXZpb3VzICYmIGlzLmZuKHByZXZpb3VzLnRoZW4pICkge1xuICAgICAgICAgICAgcHJldmlvdXMudGhlbih0aGlzLnJlbGVhc2UuYmluZCh0aGlzLCBudWxsKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIERlY3JlYXNlIGxvY2tzIGZvciB0aGlzIHN0b3JlLCBpZiBpdCByZWFjaCAwICYgaXQgaGF2ZSBhIHB1YmxpYyBzdGF0ZSxcbiAgICAgKiBpdCB3aWxsIGJlIHByb3BhZ2F0ZWQgdG8gdGhlIGZvbGxvd2VycyxcbiAgICAgKiB0aGVuLCBhbGwgc3R1ZmYgcGFzc2VkIHRvIFwidGhlblwiIGNhbGwgYmFjayB3aWxsIGJlIGV4ZWMgLyByZWxlYXNlZFxuICAgICAqIEBwYXJhbSBkZXN5bmNcbiAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgKi9cbiAgICByZWxlYXNlKCByZWFzb24sIGNiICkge1xuICAgICAgICB2YXIgX3N0YXRpYyA9IHRoaXMuY29uc3RydWN0b3I7XG4gICAgICAgIGxldCBpICAgICAgID0gMCwgd2FzU3RhYmxlID0gdGhpcy5fc3RhYmxlO1xuICAgICAgICBcbiAgICAgICAgaWYgKCBpcy5mbihyZWFzb24pICkge1xuICAgICAgICAgICAgY2IgICAgID0gcmVhc29uO1xuICAgICAgICAgICAgcmVhc29uID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKCByZWFzb24gKSB7XG4gICAgICAgICAgICBpZiAoIHRoaXMuX19sb2Nrc1tyZWFzb25dID09IDAgKVxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJSZWxlYXNlIG1vcmUgdGhhbiBsb2NraW5nICFcIiwgcmVhc29uKTtcbiAgICAgICAgICAgIHRoaXMuX19sb2Nrc1tyZWFzb25dID0gdGhpcy5fX2xvY2tzW3JlYXNvbl0gfHwgMDtcbiAgICAgICAgICAgIHRoaXMuX19sb2Nrc1tyZWFzb25dLS07XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmICggIXJlYXNvbiAmJiB0aGlzLl9fbG9ja3MuYWxsID09IDAgKVxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlJlbGVhc2UgbW9yZSB0aGFuIGxvY2tpbmcgIVwiKTtcbiAgICAgICAgXG4gICAgICAgIGlmICggIS0tdGhpcy5fX2xvY2tzLmFsbCAmJiB0aGlzLmRhdGFzICYmIHRoaXMuaXNDb21wbGV0ZSgpICkge1xuICAgICAgICAgICAgdGhpcy5fc3RhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuX3JldiAgICA9IDEgKyAodGhpcy5fcmV2ICsgMSkgJSAxMDAwMDAwOy8vXG4gICAgICAgICAgICBpZiAoIHRoaXMuX2ZvbGxvd2Vycy5sZW5ndGggKVxuICAgICAgICAgICAgICAgIHRoaXMuX2ZvbGxvd2Vycy5mb3JFYWNoKCggZm9sbG93ZXIgKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICggIXRoaXMuZGF0YXMgKSByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIGlmICggdHlwZW9mIGZvbGxvd2VyWzBdID09IFwiZnVuY3Rpb25cIiApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbGxvd2VyWzBdKHRoaXMuZGF0YXMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9jYiAmJiBpKys7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb2xsb3dlclswXS5zZXRTdGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZm9sbG93ZXJbMV0pID8geyBbZm9sbG93ZXJbMV1dOiB0aGlzLmRhdGFzIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB0aGlzLmRhdGFzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9jYiAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgKCkgPT4gKCEoLS1pKSAmJiBjYigpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vKVxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy9lbHNlXG4gICAgICAgICAgICAhd2FzU3RhYmxlICYmIHRoaXMuZW1pdCgnc3RhYmxlJywgdGhpcy5kYXRhcyk7XG4gICAgICAgICAgICB0aGlzLmVtaXQoJ3VwZGF0ZScsIHRoaXMuZGF0YXMpO1xuICAgICAgICAgICAgY2IgJiYgY2IoKVxuICAgICAgICAgICAgLy9cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGNiICYmIHRoaXMudGhlbihjYik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBcbiAgICByZXRhaW4oIHJlYXNvbiApIHtcbiAgICAgICAgdGhpcy5fX3JldGFpbnMuYWxsKys7XG4gICAgICAgIGlmICggcmVhc29uICkge1xuICAgICAgICAgICAgdGhpcy5fX3JldGFpbnNbcmVhc29uXSA9IHRoaXMuX19yZXRhaW5zW3JlYXNvbl0gfHwgMDtcbiAgICAgICAgICAgIHRoaXMuX19yZXRhaW5zW3JlYXNvbl0rKztcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBkaXNwb3NlKCByZWFzb24gKSB7XG4gICAgICAgIC8vY29uc29sZS53YXJuKFwiZGlzcG9zZVwiLCByZWFzb24sIHRoaXMuX19yZXRhaW5zKTtcbiAgICAgICAgaWYgKCByZWFzb24gKSB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmICggIXRoaXMuX19yZXRhaW5zW3JlYXNvbl0gKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkRpc3Bvc2UgbW9yZSB0aGFuIHJldGFpbmluZyAhXCIpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLl9fcmV0YWluc1tyZWFzb25dID0gdGhpcy5fX3JldGFpbnNbcmVhc29uXSB8fCAwO1xuICAgICAgICAgICAgdGhpcy5fX3JldGFpbnNbcmVhc29uXS0tO1xuICAgICAgICB9XG4gICAgICAgIGlmICggdGhpcy5fX3JldGFpbnMuYWxsID09IDAgKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRGlzcG9zZSBtb3JlIHRoYW4gcmV0YWluaW5nICFcIik7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9fcmV0YWlucy5hbGwtLTtcbiAgICAgICAgXG4gICAgICAgIC8vY29uc29sZS53YXJuKFwiZGlzcG9zZWRcIiwgcmVhc29uLCB0aGlzLl9fcmV0YWlucyk7XG4gICAgICAgIFxuICAgICAgICBpZiAoICF0aGlzLl9fcmV0YWlucy5hbGwgKSB7XG4gICAgICAgICAgICBpZiAoIHRoaXMuX3BlcnNpc3RlbmNlVG0gKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZGVzdHJveVRNICYmIGNsZWFyVGltZW91dCh0aGlzLl9kZXN0cm95VE0pO1xuICAgICAgICAgICAgICAgIHRoaXMuX2Rlc3Ryb3lUTSA9IHNldFRpbWVvdXQoXG4gICAgICAgICAgICAgICAgICAgIGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50aGVuKHMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICBjb25zb2xlLmxvZyhcInd0ZiAgIFwiLCByZWFzb24sICF0aGlzLl9fcmV0YWlucy5hbGwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICF0aGlzLl9fcmV0YWlucy5hbGwgJiYgdGhpcy5kZXN0cm95KClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wZXJzaXN0ZW5jZVRtXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMudGhlbihzID0+ICghdGhpcy5fX3JldGFpbnMuYWxsICYmIHRoaXMuZGVzdHJveSgpKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgLy8gIGNvbnNvbGUubG9nKFwiZGVzdHJveVwiLCB0aGlzLl91aWQpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5lbWl0KCdkZXN0cm95JywgdGhpcyk7XG4gICAgICAgIGlmICggdGhpcy5fc3RhYmlsaXplciApXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5fc3RhYmlsaXplcik7XG4gICAgICAgIFxuICAgICAgICBpZiAoIHRoaXMuX2ZvbGxvd2Vycy5sZW5ndGggKVxuICAgICAgICAgICAgdGhpcy5fZm9sbG93ZXJzLmZvckVhY2goXG4gICAgICAgICAgICAgICAgKCBmb2xsb3dlciApID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCB0eXBlb2YgZm9sbG93ZXJbMF0gIT09IFwiZnVuY3Rpb25cIiApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICggZm9sbG93ZXJbMF0uc3RvcmVzIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgZm9sbG93ZXJbMF0uc3RvcmVzW2ZvbGxvd2VyWzFdXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgIHRoaXMuX2ZvbGxvd2Vycy5sZW5ndGggPSAwO1xuICAgICAgICB0aGlzLmRlYWQgICAgICAgICAgICAgID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fcmV2cyAgICAgICAgICAgICA9IHRoaXMuZGF0YXMgPSB0aGlzLnN0YXRlID0gdGhpcy5jb250ZXh0ID0gbnVsbDtcbiAgICAgICAgdGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoKTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1N0b3JlLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==