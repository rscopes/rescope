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
	     * @param data
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
	            data = _ref.data,
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
	        _this.data = {};
	
	        if (parent && parent.dead) throw new Error("Can't use a dead context as parent !");
	
	        __proto__push(_this, 'stores', parent);
	        __proto__push(_this, 'state', parent);
	        __proto__push(_this, 'data', parent);
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
	            // this.register(parent.__context, state, data);
	        }
	
	        _this.register(storesMap, state, data);
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
	     * @param data
	     * @returns {Context}
	     */
	
	
	    _createClass(Context, [{
	        key: 'mount',
	        value: function mount(storesList, state, data) {
	            var _this2 = this;
	
	            if (is.array(storesList)) {
	                storesList.forEach(function (k) {
	                    return _this2._mount(k, state && state[k], data && data[k]);
	                });
	            } else {
	                this._mount.apply(this, arguments);
	            }
	            return this;
	        }
	    }, {
	        key: '_mount',
	        value: function _mount(id, state, data) {
	            if (typeof id !== 'string') {
	                this.register(_defineProperty({}, id.name, id.store));
	                id = id.name;
	            }
	
	            if (!this.__context[id]) {
	                var _parent;
	
	                //ask mixed || parent
	                if (this.__mixed.reduce(function (mounted, ctx) {
	                    return mounted || ctx._mount(id, state, data);
	                }, false) || !this.parent) return;
	                return (_parent = this.parent)._mount.apply(_parent, arguments);
	            }
	            //this.constructor.Store.mountStore(id, this, null, state, data);
	            var store = this.__context[id],
	                ctx = void 0;
	            //console.warn("mount on ", this._id, ' ', id, is.fn(store));
	            if (is.fn(store)) {
	                this.__context[id] = new store(this, { state: state, data: data });
	            } else {
	                if (state !== undefined && data === undefined) store.setState(state);else if (state !== undefined) store.state = state;
	
	                if (data !== undefined) store.push(data);
	            }
	
	            //console.warn("mount on ", this.stores[id]);
	            this._watchStore(id);
	
	            return this.__context[id];
	        }
	    }, {
	        key: '_watchStore',
	        value: function _watchStore(id, state, data) {
	            var _this3 = this;
	
	            if (!this.__context[id]) {
	                var _parent2;
	
	                //ask mixed || parent
	                if (this.__mixed.reduce(function (mounted, ctx) {
	                    return mounted || ctx._watchStore(id, state, data);
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
	            targetCtx.retain("mixedTo");
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
	
	            this.stores = {};
	            this.state = {};
	            this.data = {};
	            targetCtx.on(lists);
	            __proto__push(this, 'stores', parent);
	            __proto__push(this, 'state', parent);
	            __proto__push(this, 'data', parent);
	
	            this.relink(this.__context, this, false, true);
	            this.__mixed.forEach(function (ctx) {
	                __proto__push(_this4, 'stores');
	                __proto__push(_this4, 'state');
	                __proto__push(_this4, 'data');
	                ctx.relink(ctx.__context, _this4, true, true);
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
	
	            this.relink(storesMap, this, false, false, state, data);
	            Object.keys(storesMap).forEach(function (id) {
	                if (is.fn(storesMap[id])) {
	                    storesMap[id].singleton && _this5._mount(id, state[id], data[id]);
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
	            var external = arguments[2];
	            var force = arguments[3];
	
	            var _this6 = this;
	
	            var state = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
	            var data = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};
	
	            var lctx = targetCtx._stores.prototype;
	            Object.keys(srcCtx).forEach(function (id) {
	                if (!force && targetCtx.__context[id] === srcCtx[id] || targetCtx.__context[id] && targetCtx.__context[id].constructor === srcCtx[id]) return;
	
	                if (!force && targetCtx.__context[id]) {
	                    if (!external && !is.fn(targetCtx.__context[id])) {
	                        console.info("Rescope Store : ", id, " already exist in this context ! ( try __proto__ hot patch )");
	                        targetCtx.__context[id].__proto__ = srcCtx[id].prototype;
	                    }
	                    if (!external && is.fn(targetCtx.__context[id])) targetCtx.__context[id] = srcCtx[id];
	
	                    return;
	                } else if (!force && !external) _this6.__context[id] = srcCtx[id];
	
	                Object.defineProperty(lctx, id, {
	                    get: function get() {
	                        return _this6.__context[id];
	                    }
	                });
	                Object.defineProperty(targetCtx._state.prototype, id, {
	                    get: function get() {
	                        return _this6.__context[id] && _this6.__context[id].state;
	                    },
	                    set: function set(v) {
	                        return _this6._mount(id, v);
	                    }
	                });
	                Object.defineProperty(targetCtx._data.prototype, id, {
	                    get: function get() {
	                        return _this6.__context[id] && _this6.__context[id].data;
	                    },
	                    set: function set(v) {
	                        return _this6._mount(id, undefined, v);
	                    }
	                });
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
	                data = void 0,
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
	                data = this.getUpdates(lastRevs);
	                if (!data) return;
	                if (typeof obj != "function") {
	                    if (as) obj.setState(_defineProperty({}, as, data));else obj.setState(data);
	                } else {
	                    obj(data);
	                }
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
	            return storesList.reduce(function (data, id) {
	                return data[id] = _this7.stores[id] && _this7.stores[id].data, data;
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
	                    output[id] = _this8.data[id];
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
	         * @param flags_data
	         * @returns {{state: {}, data: {}}}
	         */
	
	    }, {
	        key: 'serialize',
	        value: function serialize() {
	            var _this9 = this;
	
	            var flags_states = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : /.*/;
	            var flags_data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : /.*/;
	
	            var ctx = this.__context,
	                output = { state: {}, data: {} },
	                _flags_states = void 0,
	                _flags_data = void 0;
	            if (is.array(flags_states)) flags_states.forEach(function (id) {
	                return output.state[id] = _this9.state[id];
	            });
	
	            if (is.array(flags_data)) flags_data.forEach(function (id) {
	                return output.data[id] = _this9.data[id];
	            });
	
	            if (!is.array(flags_data) && !is.array(flags_states)) Object.keys(ctx).forEach(function (id) {
	                if (is.fn(ctx[id])) return;
	
	                var flags = ctx[id].constructor.flags;
	
	                flags = is.array(flags) ? flags : [flags || ""];
	
	                if (flags.reduce(function (r, flag) {
	                    return r || _flags_states.test(flag);
	                }, false)) output.state[id] = _this9.state[id];
	
	                if (flags.reduce(function (r, flag) {
	                    return r || _flags_data.test(flag);
	                }, false)) output.data[id] = _this9.data[id];
	            });
	            return output;
	        }
	    }, {
	        key: 'dispatch',
	        value: function dispatch(action, data) {
	            var _this10 = this;
	
	            Object.keys(this.__context).forEach(function (id) {
	                if (!is.fn(_this10.__context[id])) _this10.__context[id].dispatch(action, data);
	            });
	
	            this.__mixed.forEach(function (ctx) {
	                return ctx.dispatch(action, data);
	            });
	            this.parent && this.parent.dispatch(action, data);
	            return this;
	        }
	
	        /**
	         * once('stable', cb)
	         * @param obj {React.Component|Store|function)
	         * @param key {string} optional key where to map the public state
	         */
	
	    }, {
	        key: 'then',
	        value: function then(cb) {
	            var _this11 = this;
	
	            if (this._stable) return cb(null, this.data);
	            this.once('stable', function (e) {
	                return cb(null, _this11.data);
	            });
	        }
	    }, {
	        key: 'restore',
	        value: function restore(_ref2, quiet) {
	            var state = _ref2.state,
	                data = _ref2.data;
	
	            var ctx = this.__context;
	            Object.keys(data).forEach(function (id) {
	                quiet ? ctx.data = data[id] : ctx.push(data[id]);
	            });
	            Object.keys(state).forEach(function (id) {
	                quiet ? ctx.state = state[id] : ctx.setState(state[id]);
	            });
	        }
	    }, {
	        key: 'retainStores',
	        value: function retainStores() {
	            var _this12 = this;
	
	            var stores = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	            var reason = arguments[1];
	
	            stores.forEach(function (id) {
	                return _this12.stores[id] && _this12.stores[id].retain && _this12.stores[id].retain(reason);
	            });
	        }
	    }, {
	        key: 'disposeStores',
	        value: function disposeStores() {
	            var _this13 = this;
	
	            var stores = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	            var reason = arguments[1];
	
	            stores.forEach(function (id) {
	                return _this13.stores[id] && _this13.stores[id].dispose && _this13.stores[id].dispose(reason);
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
	            var _this14 = this;
	
	            if (reason) {
	                if (this.__locks[reason] == 0) console.error("Release more than locking !", reason);
	                this.__locks[reason] = this.__locks[reason] || 0;
	                this.__locks[reason]--;
	            }
	            if (!reason && this.__locks.all == 0) console.error("Release more than locking !");
	
	            this.__locks.all--;
	            if (!this.__locks.all) {
	                this._stabilizerTM && clearTimeout(this._stabilizerTM);
	
	                this._stabilizerTM = setTimeout(function (e) {
	                    _this14._stabilizerTM = null;
	                    if (_this14.__locks.all) return;
	
	                    _this14._propagTM && clearTimeout(_this14._propagTM);
	
	                    _this14._stable = true;
	                    _this14.emit("stable", _this14);
	
	                    !_this14.dead && _this14._propag(); // stability can induce destroy
	                });
	            }
	        }
	    }, {
	        key: 'propag',
	        value: function propag() {
	            var _this15 = this;
	
	            this._propagTM && clearTimeout(this._propagTM);
	            this._propagTM = setTimeout(function (e) {
	                _this15._propagTM = null;
	                _this15._propag();
	            }, 2);
	        }
	    }, {
	        key: '_propag',
	        value: function _propag() {
	            var _this16 = this;
	
	            if (this._followers.length) this._followers.forEach(function (_ref3) {
	                var obj = _ref3[0],
	                    key = _ref3[1],
	                    as = _ref3[2],
	                    lastRevs = _ref3[3];
	
	                var data = _this16.getUpdates(lastRevs);
	                if (!data) return;
	                if (typeof obj != "function") {
	                    if (as) obj.setState(_defineProperty({}, as, data));else obj.setState(data);
	                } else {
	                    obj(data, lastRevs && [].concat(_toConsumableArray(lastRevs)) || "no revs");
	                }
	                // lastRevs &&
	                // key.forEach(id => (lastRevs[id] = this.stores[id] && this.stores[id]._rev || 0));
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
	            var _this17 = this;
	
	            //console.log("dispose", this._id, reason);
	            if (reason) {
	
	                if (this.__retains[reason] == 0) throw new Error("Dispose more than retaining !");
	
	                this.__retains[reason] = this.__retains[reason] || 0;
	                this.__retains[reason]--;
	            }
	
	            if (this.__retains.all == 0) throw new Error("Dispose more than retaining !");
	
	            this.__retains.all--;
	
	            if (!this.__retains.all) {
	                //console.log("dispose do destroy ", this._id, this._persistenceTm);
	                if (this._persistenceTm) {
	                    this._destroyTM && clearTimeout(this._destroyTM);
	                    this._destroyTM = setTimeout(function (e) {
	                        //console.log("wtf ctx", this._id, reason, this.__locks, this._stable);
	                        _this17.then(function (s) {
	                            //console.log("wtf ctx then", this._id, reason, this.__locks);
	                            !_this17.__retains.all && _this17.destroy();
	                        });
	                    }, this._persistenceTm);
	                } else {
	                    this.then(function (s) {
	                        return !_this17.__retains.all && _this17.destroy();
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
	            var _this18 = this;
	
	            var ctx = this.__context;
	            //console.warn("destroy", this._id);
	            this.dead = true;
	            this.emit("destroy");
	            Object.keys(this.__listening).forEach(function (id) {
	                return _this18.__context[id].removeListener(_this18.__listening[id]);
	            });
	
	            this._stabilizerTM && clearTimeout(this._stabilizerTM);
	            this._propagTM && clearTimeout(this._propagTM);
	            this.__listening = {};
	
	            if (this._isLocalId) delete openContexts[this._id];
	            this._followers.length = 0;
	
	            while (this.__mixedList.length) {
	                this.__mixed[0].removeListener(this.__mixedList.shift());
	                this.__mixed.shift().dispose("mixedTo");
	            }
	            if (this.__parentList) {
	                this.parent._rmChild(this);
	                this.parent.removeListener(this.__parentList);
	                this.parent.dispose("isMyParent");
	                this.__parentList = null;
	            }
	            //for ( let key in ctx )
	            //    if ( !is.fn(ctx[key]) ) {
	            //        if ( ctx[key].contextObj === this )
	            //            ctx[key].dispose();
	            //
	            //        ctx[key] = ctx[key].constructor;
	            //    }
	            this.__mixed = this.data = this.state = this.context = this.stores = null;
	            this._data = this._state = this._stores = null;
	        }
	    }]);
	
	    return Context;
	}(EventEmitter);
	
	Context.defaultMaxListeners = 100;
	Context.persistenceTm = 1;
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
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
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
	var is = __webpack_require__(2);
	
	var Emitter = function () {
	    function Emitter() {
	        _classCallCheck(this, Emitter);
	
	        this._events = {};
	        this.__retains = {};
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
	
	            for (var _len = arguments.length, argz = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	                argz[_key - 1] = arguments[_key];
	            }
	
	            for (var i = 0; i < this._events[evt].length; i++) {
	                var _events$evt;
	
	                (_events$evt = this._events[evt])[i].apply(_events$evt, argz);
	            }
	        }
	    }, {
	        key: 'removeListener',
	        value: function removeListener() {
	            this.un.apply(this, arguments);
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
	    }, {
	        key: 'addListener',
	        value: function addListener() {
	            this.on.apply(this, arguments);
	        }
	    }]);
	
	    return Emitter;
	}();
	
	exports.default = Emitter;
	module.exports = exports['default'];

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
	     * (context, {require,use,apply,state, data})
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
	
	        if (_static.data !== undefined) _this.data = _extends({}, _static.data);
	        if (cfg.hasOwnProperty("data") && cfg.data !== undefined) _this.data = cfg.data;
	        if (cfg.hasOwnProperty("state") && cfg.state !== undefined) initialState = _extends({}, initialState, cfg.state);
	
	        if (apply) _this.apply = apply;
	
	        if (initialState || _this._use.length) {
	            // sync apply
	            _this.state = _extends({}, initialState || {}, context.map(_this, _this._use));
	            if (_this.isComplete() && _this.data === undefined) _this.data = _this.apply(_this.data, _this.state, _this.state);
	        }
	        _this._stable = _this.data !== undefined; // stable if it have initial result data
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
	                cDatas = this.data;
	
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
	         * If state or lastPublicState are simple hash maps apply will return {...data, ...state}
	         * if not it will return the last private state
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
	            var _this2 = this;
	
	            cb && this.once('stable', cb);
	            this._stable && this.emit('unstable', this.state, this.data);
	
	            this._stable = false;
	
	            if (this._stabilizer) clearTimeout(this._stabilizer);
	
	            this._stabilizer = setTimeout(this.push.bind(this, null, function () {
	                //@todo
	
	                var stable = _this2._stable;
	                _this2._stable = true;
	                !stable && _this2.emit('stable', _this2.state, _this2.data);
	                _this2._stabilizer = null;
	                // this.release();
	            }));
	        }
	    }, {
	        key: 'dispatch',
	        value: function dispatch(action, data) {
	            var actions = this.constructor.actions,
	                ns = void 0;
	
	            if (actions && actions[action]) {
	                ns = actions[action].call(this, data);
	                ns && this.setState(ns);
	            }
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
	        value: function push(data, force, cb) {
	            cb = force === true ? cb : force;
	            force = force === true;
	            var i = 0,
	                me = this,
	                nextState = !data && _extends({}, this.state, this._changesSW) || this.state,
	                nextDatas = data || (this.isComplete(nextState) ? this.apply(this.data, nextState, this._changesSW) : this.data);
	
	            this.state = nextState;
	            if (!force && (!this.data && this.data === nextDatas || !this.shouldPropag(nextDatas))) {
	                cb && cb();
	                return false;
	            }
	
	            this.data = nextDatas;
	            //this.__locks.all++;
	            this.wait();
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
	            return this.data;
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
	            if (setInitial && this.data && this._stable) {
	                if (typeof obj != "function") {
	                    if (key) obj.setState(_defineProperty({}, key, this.data));else obj.setState(this.data);
	                } else {
	                    obj(this.data);
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
	
	            if (this._stable) return cb(null, this.data);
	            this.once('stable', function (e) {
	                return cb(null, _this7.data);
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
	
	            if (! --this.__locks.all && this.data && this.isComplete()) {
	                this._stable = true;
	                this._rev = 1 + (this._rev + 1) % 1000000; //
	                if (this._followers.length) this._followers.forEach(function (follower) {
	                    if (!_this8.data) return;
	                    if (typeof follower[0] == "function") {
	                        follower[0](_this8.data);
	                    } else {
	                        //cb && i++;
	                        follower[0].setState(follower[1] ? _defineProperty({}, follower[1], _this8.data) : _this8.data
	                        //,
	                        //cb && (
	                        //    () => (!(--i) && cb())
	                        //)
	                        );
	                    }
	                });
	                //else
	                !wasStable && this.emit('stable', this.data);
	                this.emit('update', this.data);
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
	
	            if (!this.__retains.all) {
	                if (this._persistenceTm) {
	                    this._destroyTM && clearTimeout(this._destroyTM);
	                    this._destroyTM = setTimeout(function (e) {
	                        _this9._destroyTM = null;
	                        _this9.then(function (s) {
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
	            this._revs = this.data = this.state = this.context = null;
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
	                if (context.stores[name].hasOwnProperty('data')) initialOutputs[name] = context.data[name];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYjRkY2RmMGEyOTU0YTE4ODcwYzciLCJ3ZWJwYWNrOi8vLy4vc3JjL1Jlc2NvcGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbnRleHQuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaXNcIiIsIndlYnBhY2s6Ly8vLi9zcmMvRW1pdHRlci5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzaG9ydGlkXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL1N0b3JlLmpzIl0sIm5hbWVzIjpbIlN0b3JlIiwiQ29udGV4dCIsImlzIiwicmVxdWlyZSIsIkV2ZW50RW1pdHRlciIsInNob3J0aWQiLCJfX3Byb3RvX19wdXNoIiwidGFyZ2V0IiwiaWQiLCJwYXJlbnQiLCJoZXJlIiwicHJvdG90eXBlIiwib3BlbkNvbnRleHRzIiwiY29udGV4dHMiLCJza2V5IiwiYXJyYXkiLCJzb3J0IiwiYSIsImIiLCJmaXJzdG5hbWUiLCJqb2luIiwic3RvcmVzTWFwIiwic3RhdGUiLCJkYXRhIiwibmFtZSIsImRlZmF1bHRNYXhMaXN0ZW5lcnMiLCJwZXJzaXN0ZW5jZVRtIiwiYXV0b0Rlc3Ryb3kiLCJfbWF4TGlzdGVuZXJzIiwiY29uc3RydWN0b3IiLCJfaWQiLCJnZW5lcmF0ZSIsInJlZ2lzdGVyIiwiX2lzTG9jYWxJZCIsIl9wZXJzaXN0ZW5jZVRtIiwic3RvcmVzIiwiZGVhZCIsIkVycm9yIiwiX2FkZENoaWxkIiwic291cmNlcyIsIl9jaGlsZENvbnRleHRzIiwiX19yZXRhaW5zIiwiYWxsIiwiX19sb2NrcyIsIl9fbGlzdGVuaW5nIiwiX19jb250ZXh0IiwiX19taXhlZCIsIl9fbWl4ZWRMaXN0IiwiX2ZvbGxvd2VycyIsInJldGFpbiIsIl9zdGFibGUiLCJ3YWl0Iiwib24iLCJfX3BhcmVudExpc3QiLCJyZWxlYXNlIiwiX3Byb3BhZyIsInNldFRpbWVvdXQiLCJkaXNwb3NlIiwic3RvcmVzTGlzdCIsImZvckVhY2giLCJfbW91bnQiLCJrIiwiYXJndW1lbnRzIiwic3RvcmUiLCJyZWR1Y2UiLCJtb3VudGVkIiwiY3R4IiwiZm4iLCJ1bmRlZmluZWQiLCJzZXRTdGF0ZSIsInB1c2giLCJfd2F0Y2hTdG9yZSIsImlzU3RhYmxlIiwicHJvcGFnIiwidGFyZ2V0Q3R4IiwibGlzdHMiLCJyZWxpbmsiLCJPYmplY3QiLCJrZXlzIiwic2luZ2xldG9uIiwic3JjQ3R4IiwiZXh0ZXJuYWwiLCJmb3JjZSIsImxjdHgiLCJfc3RvcmVzIiwiY29uc29sZSIsImluZm8iLCJfX3Byb3RvX18iLCJkZWZpbmVQcm9wZXJ0eSIsImdldCIsIl9zdGF0ZSIsInNldCIsInYiLCJfZGF0YSIsIm9iaiIsImtleSIsImFzIiwic2V0SW5pdGlhbCIsImxhc3RSZXZzIiwicmVLZXkiLCJtYXAiLCJzdHJpbmciLCJyZXZzIiwibW91bnQiLCJnZXRVcGRhdGVzIiwiZm9sbG93ZXJzIiwiaSIsImxlbmd0aCIsInNwbGljZSIsInRvIiwiYmluZCIsIm1peGVkQ1dVbm1vdW50IiwidW5Nb3VudEtleSIsImlzUmVhY3RDb21wb25lbnQiLCJoYXNPd25Qcm9wZXJ0eSIsInVuQmluZCIsInN0b3Jlc1Jldk1hcCIsImxvY2FsIiwiX3JldiIsInVwZGF0ZWQiLCJnZXRTdG9yZXNSZXZzIiwib3V0cHV0IiwiZmxhZ3Nfc3RhdGVzIiwiZmxhZ3NfZGF0YSIsIl9mbGFnc19zdGF0ZXMiLCJfZmxhZ3NfZGF0YSIsImZsYWdzIiwiciIsImZsYWciLCJ0ZXN0IiwiYWN0aW9uIiwiZGlzcGF0Y2giLCJjYiIsIm9uY2UiLCJxdWlldCIsInJlYXNvbiIsImVtaXQiLCJlcnJvciIsIl9zdGFiaWxpemVyVE0iLCJjbGVhclRpbWVvdXQiLCJfcHJvcGFnVE0iLCJjaGlsZHMiLCJfZ2V0QWxsQ2hpbGRzIiwiaW5kZXhPZiIsIl9kZXN0cm95VE0iLCJ0aGVuIiwiZGVzdHJveSIsInJlbW92ZUxpc3RlbmVyIiwic2hpZnQiLCJfcm1DaGlsZCIsImNvbnRleHQiLCJFbWl0dGVyIiwiX2V2ZW50cyIsImV2dCIsInVuIiwiYXJneiIsIm9ialByb3RvIiwiZ2V0UHJvdG90eXBlT2YiLCJfc3RhdGljIiwic3RhdGljQ29udGV4dCIsImNmZyIsIndhdGNocyIsInVzZSIsImFwcGx5IiwiaW5pdGlhbFN0YXRlIiwiX3VpZCIsIl9vblN0YWJpbGl6ZSIsIndhcm4iLCJfdXNlIiwiY29udGV4dE9iaiIsIl9yZXZzIiwiX3JlcXVpcmUiLCJpc0NvbXBsZXRlIiwibkRhdGFzIiwiY0RhdGFzIiwiZm9sbG93IiwiY2hhbmdlcyIsInJlZmluZSIsIl9zdGFiaWxpemVyIiwic3RhYmxlIiwiYWN0aW9ucyIsIm5zIiwiY2FsbCIsImRvV2FpdCIsIm9yaWdpbiIsImluaXRpYWxPdXRwdXRzIiwicyIsIm1lIiwibmV4dFN0YXRlIiwiX2NoYW5nZXNTVyIsIm5leHREYXRhcyIsInNob3VsZFByb3BhZyIsInBTdGF0ZSIsInN5bmMiLCJjaGFuZ2UiLCJzdGFiaWxpemUiLCJmcm9tIiwicHVsbCIsInByZXZpb3VzIiwid2FzU3RhYmxlIiwiZm9sbG93ZXIiLCJyZW1vdmVBbGxMaXN0ZW5lcnMiLCJjb21wb25lbnQiLCJ0YXJnZXRSZXZzIiwidGFyZ2V0Q29udGV4dCIsImZpbHRlciIsImFsaWFzIiwiZGVmYXVsdE5hbWUiLCJtYXRjaCIsInNwbGl0Il0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM1QkE7Ozs7QUFDQTs7Ozs7O0FBWEE7Ozs7Ozs7Ozs7QUFhQSxtQkFBUUEsS0FBUjs7bUJBRWUsRUFBQ0Esc0JBQUQsRUFBUUMsMEJBQVIsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZmOzs7Ozs7Ozs7Ozs7O0FBY0EsS0FB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LFM7QUFQbkJwRSxNLENBWUh5QixtQixHQUFzQixHO0FBWm5CekIsTSxDQW9CSDBCLGEsR0FBc0IsSzttQkFwQm5CMUIsSyIsImZpbGUiOiJkaXN0L1Jlc2NvcGUubm9kZXBzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGI0ZGNkZjBhMjk1NGExODg3MGM3IiwiLypcbiAqIENvcHlyaWdodCAoYykgIDIwMTcgQ2FpcGkgTGFicyAuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG5pbXBvcnQgQ29udGV4dCBmcm9tIFwiLi9Db250ZXh0XCI7XG5pbXBvcnQgU3RvcmUgZnJvbSBcIi4vU3RvcmVcIjtcblxuQ29udGV4dC5TdG9yZSA9IFN0b3JlO1xuXG5leHBvcnQgZGVmYXVsdCB7U3RvcmUsIENvbnRleHR9O1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvUmVzY29wZS5qcyIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpICAyMDE3IENhaXBpIExhYnMgLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4gKlxuICogQGF1dGhvciA6IE5hdGhhbmFlbCBCcmF1blxuICogQGNvbnRhY3QgOiBjYWlwaWxhYnNAZ21haWwuY29tXG4gKi9cblxuXG52YXIgaXMgICAgICAgICAgICAgID0gcmVxdWlyZSgnaXMnKSxcbiAgICBFdmVudEVtaXR0ZXIgICAgPSByZXF1aXJlKCcuL0VtaXR0ZXInKSxcbiAgICBzaG9ydGlkICAgICAgICAgPSByZXF1aXJlKCdzaG9ydGlkJylcbiAgICAsIF9fcHJvdG9fX3B1c2ggPSAoIHRhcmdldCwgaWQsIHBhcmVudCApID0+IHtcbiAgICAgICAgbGV0IGhlcmUgICAgICAgICAgID0ge1xuICAgICAgICAgICAgW2lkXTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBoZXJlW2lkXS5wcm90b3R5cGUgPSBwYXJlbnQgPyBuZXcgcGFyZW50W1wiX1wiICsgaWRdKCkgOiB0YXJnZXRbaWRdIHx8IHt9O1xuICAgICAgICB0YXJnZXRbaWRdICAgICAgICAgPSBuZXcgaGVyZVtpZF0oKTtcbiAgICAgICAgdGFyZ2V0WydfJyArIGlkXSAgID0gaGVyZVtpZF07XG4gICAgfSxcbiAgICBvcGVuQ29udGV4dHMgICAgPSB7fTtcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250ZXh0IGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgICBzdGF0aWMgZGVmYXVsdE1heExpc3RlbmVycyA9IDEwMDtcbiAgICBzdGF0aWMgcGVyc2lzdGVuY2VUbSAgICAgICA9IDE7Ly8gaWYgPiAwLCB3aWxsIHdhaXQgJ3BlcnNpc3RlbmNlVG0nIG1zIGJlZm9yZSBkZXN0cm95IHdoZW4gZGlzcG9zZSByZWFjaCAwXG4gICAgc3RhdGljIFN0b3JlICAgICAgICAgICAgICAgPSBudWxsO1xuICAgIHN0YXRpYyBjb250ZXh0cyAgICAgICAgICAgID0gb3BlbkNvbnRleHRzOy8vIGFsbCBhY3RpdmUgY29udGV4dHNcbiAgICBcbiAgICBzdGF0aWMgZ2V0Q29udGV4dCggY29udGV4dHMgKSB7XG4gICAgICAgIGxldCBza2V5ID0gaXMuYXJyYXkoY29udGV4dHMpID8gY29udGV4dHMuc29ydCgoIGEsIGIgKSA9PiB7XG4gICAgICAgICAgICBpZiAoIGEuZmlyc3RuYW1lIDwgYi5maXJzdG5hbWUgKSByZXR1cm4gLTE7XG4gICAgICAgICAgICBpZiAoIGEuZmlyc3RuYW1lID4gYi5maXJzdG5hbWUgKSByZXR1cm4gMTtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9KS5qb2luKCc6OicpIDogY29udGV4dHM7XG4gICAgICAgIHJldHVybiBvcGVuQ29udGV4dHNbc2tleV0gPSBvcGVuQ29udGV4dHNbc2tleV0gfHwgbmV3IENvbnRleHQoe30sIHsgaWQ6IHNrZXkgfSk7XG4gICAgfTtcbiAgICBcbiAgICAvKipcbiAgICAgKiBJbml0IGEgUmVzY29wZSBjb250ZXh0XG4gICAgICpcbiAgICAgKiBAcGFyYW0gc3RvcmVzTWFwIHtPYmplY3R9IE9iamVjdCB3aXRoIHRoZSBvcmlnaW4gc3RvcmVzXG4gICAgICogQHBhcmFtIGlkIHtzdHJpbmd9IEBvcHRpb25hbCBpZCAoIGlmIHRoaXMgaWQgZXhpc3Qgc3RvcmVzTWFwIHdpbGwgYmUgbWVyZ2Ugb24gdGhlICdpZCcgY29udGV4dClcbiAgICAgKiBAcGFyYW0gcGFyZW50XG4gICAgICogQHBhcmFtIHN0YXRlXG4gICAgICogQHBhcmFtIGRhdGFcbiAgICAgKiBAcGFyYW0gbmFtZVxuICAgICAqIEBwYXJhbSBkZWZhdWx0TWF4TGlzdGVuZXJzXG4gICAgICogQHBhcmFtIHBlcnNpc3RlbmNlVG0ge251bWJlcikgaWYgPiAwLCB3aWxsIHdhaXQgJ3BlcnNpc3RlbmNlVG0nIG1zIGJlZm9yZSBkZXN0cm95IHdoZW4gZGlzcG9zZSByZWFjaCAwXG4gICAgICogQHBhcmFtIGF1dG9EZXN0cm95ICB7Ym9vbH0gd2lsbCB0cmlnZ2VyIHJldGFpbiAmIGRpc3Bvc2UgYWZ0ZXIgc3RhcnRcbiAgICAgKiBAcmV0dXJucyB7Q29udGV4dH1cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvciggc3RvcmVzTWFwLCB7IGlkLCBwYXJlbnQsIHN0YXRlLCBkYXRhLCBuYW1lLCBkZWZhdWx0TWF4TGlzdGVuZXJzLCBwZXJzaXN0ZW5jZVRtLCBhdXRvRGVzdHJveSB9ID0ge30gKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9tYXhMaXN0ZW5lcnMgPSBkZWZhdWx0TWF4TGlzdGVuZXJzIHx8IHRoaXMuY29uc3RydWN0b3IuZGVmYXVsdE1heExpc3RlbmVycztcbiAgICAgICAgdGhpcy5faWQgICAgICAgICAgID0gaWQgPSBpZCB8fCAoXCJfX19fX1wiICsgc2hvcnRpZC5nZW5lcmF0ZSgpKTtcbiAgICAgICAgXG4gICAgICAgIGlmICggb3BlbkNvbnRleHRzW2lkXSApIHtcbiAgICAgICAgICAgIG9wZW5Db250ZXh0c1tpZF0ucmVnaXN0ZXIoc3RvcmVzTWFwKTtcbiAgICAgICAgICAgIHJldHVybiBvcGVuQ29udGV4dHNbaWRdXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIG9wZW5Db250ZXh0c1tpZF0gICAgPSB0aGlzO1xuICAgICAgICB0aGlzLl9pc0xvY2FsSWQgICAgID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fcGVyc2lzdGVuY2VUbSA9IHBlcnNpc3RlbmNlVG0gfHwgdGhpcy5jb25zdHJ1Y3Rvci5wZXJzaXN0ZW5jZVRtO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5zdG9yZXMgPSB7fTtcbiAgICAgICAgdGhpcy5zdGF0ZSAgPSB7fTtcbiAgICAgICAgdGhpcy5kYXRhICAgPSB7fTtcbiAgICAgICAgXG4gICAgICAgIGlmICggcGFyZW50ICYmIHBhcmVudC5kZWFkIClcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbid0IHVzZSBhIGRlYWQgY29udGV4dCBhcyBwYXJlbnQgIVwiKTtcbiAgICAgICAgXG4gICAgICAgIF9fcHJvdG9fX3B1c2godGhpcywgJ3N0b3JlcycsIHBhcmVudCk7XG4gICAgICAgIF9fcHJvdG9fX3B1c2godGhpcywgJ3N0YXRlJywgcGFyZW50KTtcbiAgICAgICAgX19wcm90b19fcHVzaCh0aGlzLCAnZGF0YScsIHBhcmVudCk7XG4gICAgICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuICAgICAgICBcbiAgICAgICAgaWYgKCBwYXJlbnQgKSB7XG4gICAgICAgICAgICBwYXJlbnQuX2FkZENoaWxkKHRoaXMpO1xuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRoaXMuc291cmNlcyAgICAgICAgPSBbXTtcbiAgICAgICAgdGhpcy5fY2hpbGRDb250ZXh0cyA9IFtdO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fX3JldGFpbnMgICA9IHsgYWxsOiAwIH07XG4gICAgICAgIHRoaXMuX19sb2NrcyAgICAgPSB7IGFsbDogMSB9O1xuICAgICAgICB0aGlzLl9fbGlzdGVuaW5nID0ge307XG4gICAgICAgIHRoaXMuX19jb250ZXh0ICAgPSB7fTtcbiAgICAgICAgdGhpcy5fX21peGVkICAgICA9IFtdO1xuICAgICAgICB0aGlzLl9fbWl4ZWRMaXN0ID0gW107XG4gICAgICAgIHRoaXMuX2ZvbGxvd2VycyAgPSBbXTtcbiAgICAgICAgaWYgKCBwYXJlbnQgKSB7XG4gICAgICAgICAgICBwYXJlbnQucmV0YWluKFwiaXNNeVBhcmVudFwiKTtcbiAgICAgICAgICAgICFwYXJlbnQuX3N0YWJsZSAmJiB0aGlzLndhaXQoXCJ3YWl0aW5nUGFyZW50XCIpO1xuICAgICAgICAgICAgcGFyZW50Lm9uKHRoaXMuX19wYXJlbnRMaXN0ID0ge1xuICAgICAgICAgICAgICAgICdzdGFibGUnICA6IHMgPT4gdGhpcy5yZWxlYXNlKFwid2FpdGluZ1BhcmVudFwiKSxcbiAgICAgICAgICAgICAgICAndW5zdGFibGUnOiBzID0+IHRoaXMud2FpdChcIndhaXRpbmdQYXJlbnRcIiksXG4gICAgICAgICAgICAgICAgJ3VwZGF0ZScgIDogcyA9PiB0aGlzLl9wcm9wYWcoKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyB0aGlzLnJlZ2lzdGVyKHBhcmVudC5fX2NvbnRleHQsIHN0YXRlLCBkYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIHRoaXMucmVnaXN0ZXIoc3RvcmVzTWFwLCBzdGF0ZSwgZGF0YSk7XG4gICAgICAgIHRoaXMuX19sb2Nrcy5hbGwtLTtcbiAgICAgICAgdGhpcy5fc3RhYmxlID0gIXRoaXMuX19sb2Nrcy5hbGw7XG4gICAgICAgIFxuICAgICAgICBpZiAoIGF1dG9EZXN0cm95IClcbiAgICAgICAgICAgIHNldFRpbWVvdXQoXG4gICAgICAgICAgICAgICAgdG0gPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJldGFpbihcImF1dG9EZXN0cm95XCIpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpc3Bvc2UoXCJhdXRvRGVzdHJveVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApXG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqXG4gICAgICogTW91bnQgdGhlIHN0b3JlcyBpbiBzdG9yZXNMaXN0LCBpbiB0aGlzIGNvbnRleHQgb3IgaW4gaXRzIHBhcmVudHMgb3IgbWl4ZWQgY29udGV4dHNcbiAgICAgKlxuICAgICAqIEBwYXJhbSBzdG9yZXNMaXN0IHtzdHJpbmd8c3RvcmVSZWZ9IFN0b3JlIG5hbWUsIEFycmF5IG9mIFN0b3JlIG5hbWVzLCBvciBSZXNjb3BlIHN0b3JlIHJlZiBmcm9tIFN0b3JlOjphcyBvclxuICAgICAqICAgICBTdG9yZTphc1xuICAgICAqIEBwYXJhbSBzdGF0ZVxuICAgICAqIEBwYXJhbSBkYXRhXG4gICAgICogQHJldHVybnMge0NvbnRleHR9XG4gICAgICovXG4gICAgbW91bnQoIHN0b3Jlc0xpc3QsIHN0YXRlLCBkYXRhICkge1xuICAgICAgICBpZiAoIGlzLmFycmF5KHN0b3Jlc0xpc3QpICkge1xuICAgICAgICAgICAgc3RvcmVzTGlzdC5mb3JFYWNoKGsgPT4gdGhpcy5fbW91bnQoaywgc3RhdGUgJiYgc3RhdGVba10sIGRhdGEgJiYgZGF0YVtrXSkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fbW91bnQoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgXG4gICAgX21vdW50KCBpZCwgc3RhdGUsIGRhdGEgKSB7XG4gICAgICAgIGlmICggdHlwZW9mIGlkICE9PSAnc3RyaW5nJyApIHtcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXIoeyBbaWQubmFtZV06IGlkLnN0b3JlIH0pO1xuICAgICAgICAgICAgaWQgPSBpZC5uYW1lO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAoICF0aGlzLl9fY29udGV4dFtpZF0gKSB7Ly9hc2sgbWl4ZWQgfHwgcGFyZW50XG4gICAgICAgICAgICBpZiAoIHRoaXMuX19taXhlZC5yZWR1Y2UoKCBtb3VudGVkLCBjdHggKSA9PiAobW91bnRlZCB8fCBjdHguX21vdW50KGlkLCBzdGF0ZSwgZGF0YSkpLCBmYWxzZSkgfHxcbiAgICAgICAgICAgICAgICAhdGhpcy5wYXJlbnQgKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcmVudC5fbW91bnQoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgfVxuICAgICAgICAvL3RoaXMuY29uc3RydWN0b3IuU3RvcmUubW91bnRTdG9yZShpZCwgdGhpcywgbnVsbCwgc3RhdGUsIGRhdGEpO1xuICAgICAgICBsZXQgc3RvcmUgPSB0aGlzLl9fY29udGV4dFtpZF0sIGN0eDtcbiAgICAgICAgLy9jb25zb2xlLndhcm4oXCJtb3VudCBvbiBcIiwgdGhpcy5faWQsICcgJywgaWQsIGlzLmZuKHN0b3JlKSk7XG4gICAgICAgIGlmICggaXMuZm4oc3RvcmUpICkge1xuICAgICAgICAgICAgdGhpcy5fX2NvbnRleHRbaWRdID0gbmV3IHN0b3JlKHRoaXMsIHsgc3RhdGUsIGRhdGEgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoIHN0YXRlICE9PSB1bmRlZmluZWQgJiYgZGF0YSA9PT0gdW5kZWZpbmVkIClcbiAgICAgICAgICAgICAgICBzdG9yZS5zZXRTdGF0ZShzdGF0ZSk7XG4gICAgICAgICAgICBlbHNlIGlmICggc3RhdGUgIT09IHVuZGVmaW5lZCApXG4gICAgICAgICAgICAgICAgc3RvcmUuc3RhdGUgPSBzdGF0ZTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKCBkYXRhICE9PSB1bmRlZmluZWQgKVxuICAgICAgICAgICAgICAgIHN0b3JlLnB1c2goZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICAvL2NvbnNvbGUud2FybihcIm1vdW50IG9uIFwiLCB0aGlzLnN0b3Jlc1tpZF0pO1xuICAgICAgICB0aGlzLl93YXRjaFN0b3JlKGlkKTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiB0aGlzLl9fY29udGV4dFtpZF07XG4gICAgfVxuICAgIFxuICAgIF93YXRjaFN0b3JlKCBpZCwgc3RhdGUsIGRhdGEgKSB7XG4gICAgICAgIGlmICggIXRoaXMuX19jb250ZXh0W2lkXSApIHsvL2FzayBtaXhlZCB8fCBwYXJlbnRcbiAgICAgICAgICAgIGlmICggdGhpcy5fX21peGVkLnJlZHVjZSgoIG1vdW50ZWQsIGN0eCApID0+IChtb3VudGVkIHx8IGN0eC5fd2F0Y2hTdG9yZShpZCwgc3RhdGUsIGRhdGEpKSwgZmFsc2UpIHx8XG4gICAgICAgICAgICAgICAgIXRoaXMucGFyZW50IClcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJlbnQuX3dhdGNoU3RvcmUoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoICF0aGlzLl9fbGlzdGVuaW5nW2lkXSAmJiAhaXMuZm4odGhpcy5fX2NvbnRleHRbaWRdKSApIHtcbiAgICAgICAgICAgICF0aGlzLl9fY29udGV4dFtpZF0uaXNTdGFibGUoKSAmJiB0aGlzLndhaXQoaWQpO1xuICAgICAgICAgICAgdGhpcy5fX2NvbnRleHRbaWRdLm9uKFxuICAgICAgICAgICAgICAgIHRoaXMuX19saXN0ZW5pbmdbaWRdID0ge1xuICAgICAgICAgICAgICAgICAgICAnZGVzdHJveScgOiBzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl9fbGlzdGVuaW5nW2lkXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX19jb250ZXh0W2lkXSA9IHRoaXMuX19jb250ZXh0W2lkXS5jb25zdHJ1Y3RvcjtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgJ3VwZGF0ZScgIDogcyA9PiB0aGlzLnByb3BhZygpLFxuICAgICAgICAgICAgICAgICAgICAnc3RhYmxlJyAgOiBzID0+IHRoaXMucmVsZWFzZShpZCksXG4gICAgICAgICAgICAgICAgICAgICd1bnN0YWJsZSc6IHMgPT4gdGhpcy53YWl0KGlkKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBNaXggdGFyZ2V0Q3R4IG9uIHRoaXMgY29udGV4dFxuICAgICAqIE1peGVkIGNvbnRleHQgcGFyZW50cyBhcmUgTk9UIG1hcHBlZFxuICAgICAqIEBwYXJhbSB0YXJnZXRDdHhcbiAgICAgKi9cbiAgICBtaXhpbiggdGFyZ2V0Q3R4ICkge1xuICAgICAgICBsZXQgcGFyZW50ID0gdGhpcy5wYXJlbnQsIGxpc3RzO1xuICAgICAgICB0aGlzLl9fbWl4ZWQucHVzaCh0YXJnZXRDdHgpXG4gICAgICAgIHRhcmdldEN0eC5yZXRhaW4oXCJtaXhlZFRvXCIpO1xuICAgICAgICBpZiAoICF0YXJnZXRDdHguX3N0YWJsZSApXG4gICAgICAgICAgICB0aGlzLndhaXQodGFyZ2V0Q3R4Ll9pZCk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9fbWl4ZWRMaXN0LnB1c2gobGlzdHMgPSB7XG4gICAgICAgICAgICAnc3RhYmxlJyAgOiBzID0+IHRoaXMucmVsZWFzZSh0YXJnZXRDdHguX2lkKSxcbiAgICAgICAgICAgICd1bnN0YWJsZSc6IHMgPT4gdGhpcy53YWl0KHRhcmdldEN0eC5faWQpLFxuICAgICAgICAgICAgJ3VwZGF0ZScgIDogcyA9PiB0aGlzLl9wcm9wYWcoKVxuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuc3RvcmVzID0ge307XG4gICAgICAgIHRoaXMuc3RhdGUgID0ge307XG4gICAgICAgIHRoaXMuZGF0YSAgID0ge307XG4gICAgICAgIHRhcmdldEN0eC5vbihsaXN0cyk7XG4gICAgICAgIF9fcHJvdG9fX3B1c2godGhpcywgJ3N0b3JlcycsIHBhcmVudCk7XG4gICAgICAgIF9fcHJvdG9fX3B1c2godGhpcywgJ3N0YXRlJywgcGFyZW50KTtcbiAgICAgICAgX19wcm90b19fcHVzaCh0aGlzLCAnZGF0YScsIHBhcmVudCk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLnJlbGluayh0aGlzLl9fY29udGV4dCwgdGhpcywgZmFsc2UsIHRydWUpO1xuICAgICAgICB0aGlzLl9fbWl4ZWQuZm9yRWFjaChcbiAgICAgICAgICAgIGN0eCA9PiB7XG4gICAgICAgICAgICAgICAgX19wcm90b19fcHVzaCh0aGlzLCAnc3RvcmVzJyk7XG4gICAgICAgICAgICAgICAgX19wcm90b19fcHVzaCh0aGlzLCAnc3RhdGUnKTtcbiAgICAgICAgICAgICAgICBfX3Byb3RvX19wdXNoKHRoaXMsICdkYXRhJyk7XG4gICAgICAgICAgICAgICAgY3R4LnJlbGluayhjdHguX19jb250ZXh0LCB0aGlzLCB0cnVlLCB0cnVlKVxuICAgICAgICAgICAgfVxuICAgICAgICApXG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIFJlZ2lzdGVyIHN0b3JlcyBpbiBzdG9yZXNNYXAgJiBsaW5rIHRoZW0gaW4gdGhlIHByb3Rvc1xuICAgICAqIEBwYXJhbSBzdG9yZXNNYXBcbiAgICAgKiBAcGFyYW0gc3RhdGVcbiAgICAgKiBAcGFyYW0gZGF0YVxuICAgICAqL1xuICAgIHJlZ2lzdGVyKCBzdG9yZXNNYXAsIHN0YXRlID0ge30sIGRhdGEgPSB7fSApIHtcbiAgICAgICAgdGhpcy5yZWxpbmsoc3RvcmVzTWFwLCB0aGlzLCBmYWxzZSwgZmFsc2UsIHN0YXRlLCBkYXRhKTtcbiAgICAgICAgT2JqZWN0LmtleXMoc3RvcmVzTWFwKS5mb3JFYWNoKFxuICAgICAgICAgICAgaWQgPT4ge1xuICAgICAgICAgICAgICAgIGlmICggaXMuZm4oc3RvcmVzTWFwW2lkXSkgKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0b3Jlc01hcFtpZF0uc2luZ2xldG9uICYmIHRoaXMuX21vdW50KGlkLCBzdGF0ZVtpZF0sIGRhdGFbaWRdKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fd2F0Y2hTdG9yZShpZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICApXG4gICAgICAgIFxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBNYXAgc3JjQ3R4IHN0b3JlJ3Mgb24gdGFyZ2V0Q3R4IGhlYWRlcnMgcHJvdG8nc1xuICAgICAqIEBwYXJhbSBzcmNDdHhcbiAgICAgKiBAcGFyYW0gdGFyZ2V0Q3R4XG4gICAgICogQHBhcmFtIHN0YXRlXG4gICAgICogQHBhcmFtIGRhdGFcbiAgICAgKi9cbiAgICByZWxpbmsoIHNyY0N0eCwgdGFyZ2V0Q3R4ID0gdGhpcywgZXh0ZXJuYWwsIGZvcmNlLCBzdGF0ZSA9IHt9LCBkYXRhID0ge30gKSB7XG4gICAgICAgIGxldCBsY3R4ID0gdGFyZ2V0Q3R4Ll9zdG9yZXMucHJvdG90eXBlO1xuICAgICAgICBPYmplY3Qua2V5cyhzcmNDdHgpXG4gICAgICAgICAgICAgIC5mb3JFYWNoKFxuICAgICAgICAgICAgICAgICAgaWQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGlmICggIWZvcmNlICYmIHRhcmdldEN0eC5fX2NvbnRleHRbaWRdID09PSBzcmNDdHhbaWRdIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldEN0eC5fX2NvbnRleHRbaWRdICYmICh0YXJnZXRDdHguX19jb250ZXh0W2lkXS5jb25zdHJ1Y3RvciA9PT0gc3JjQ3R4W2lkXSApIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgIGlmICggIWZvcmNlICYmIHRhcmdldEN0eC5fX2NvbnRleHRbaWRdICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoICFleHRlcm5hbCAmJiAhaXMuZm4odGFyZ2V0Q3R4Ll9fY29udGV4dFtpZF0pICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5pbmZvKFwiUmVzY29wZSBTdG9yZSA6IFwiLCBpZCwgXCIgYWxyZWFkeSBleGlzdCBpbiB0aGlzIGNvbnRleHQgISAoIHRyeSBfX3Byb3RvX18gaG90IHBhdGNoIClcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRDdHguX19jb250ZXh0W2lkXS5fX3Byb3RvX18gPSBzcmNDdHhbaWRdLnByb3RvdHlwZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmICggIWV4dGVybmFsICYmIGlzLmZuKHRhcmdldEN0eC5fX2NvbnRleHRbaWRdKSApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRDdHguX19jb250ZXh0W2lkXSA9IHNyY0N0eFtpZF07XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKCAhZm9yY2UgJiYgIWV4dGVybmFsIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fX2NvbnRleHRbaWRdID0gc3JjQ3R4W2lkXTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxjdHgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXQ6ICgpID0+IHRoaXMuX19jb250ZXh0W2lkXVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldEN0eC5fc3RhdGUucHJvdG90eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0OiAoKSA9PiAodGhpcy5fX2NvbnRleHRbaWRdICYmIHRoaXMuX19jb250ZXh0W2lkXS5zdGF0ZSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXQ6ICggdiApID0+ICh0aGlzLl9tb3VudChpZCwgdikpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0Q3R4Ll9kYXRhLnByb3RvdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldDogKCkgPT4gKHRoaXMuX19jb250ZXh0W2lkXSAmJiB0aGlzLl9fY29udGV4dFtpZF0uZGF0YSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXQ6ICggdiApID0+ICh0aGlzLl9tb3VudChpZCwgdW5kZWZpbmVkLCB2KSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIClcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogQmluZCBzdG9yZXMgZnJvbSB0aGlzIGNvbnRleHQsIGhpcyBwYXJlbnRzIGFuZCBtaXhlZCBjb250ZXh0XG4gICAgICpcbiAgICAgKiBAcGFyYW0gb2JqIHtSZWFjdC5Db21wb25lbnR8U3RvcmV8ZnVuY3Rpb259XG4gICAgICogQHBhcmFtIGtleSB7c3RyaW5nKn0gc3RvcmVzIGtleXMgdG8gYmluZCB1cGRhdGVzXG4gICAgICogQHBhcmFtIGFzXG4gICAgICogQHBhcmFtIHNldEluaXRpYWw9dHJ1ZSB7Ym9vbH0gZmFsc2UgdG8gbm90IHByb3BhZyBpbml0aWFsIHZhbHVlXG4gICAgICovXG4gICAgYmluZCggb2JqLCBrZXksIGFzLCBzZXRJbml0aWFsID0gdHJ1ZSApIHtcbiAgICAgICAgbGV0IGxhc3RSZXZzLCBkYXRhLCByZUtleTtcbiAgICAgICAgaWYgKCBrZXkgJiYgIWlzLmFycmF5KGtleSkgKVxuICAgICAgICAgICAga2V5ID0gW2tleV07XG4gICAgICAgIFxuICAgICAgICBpZiAoIGFzID09PSBmYWxzZSB8fCBhcyA9PT0gdHJ1ZSApIHtcbiAgICAgICAgICAgIHNldEluaXRpYWwgPSBhcztcbiAgICAgICAgICAgIGFzICAgICAgICAgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZUtleSA9IGtleS5tYXAoaWQgPT4gKGlzLnN0cmluZyhpZCkgPyBpZCA6IGlkLm5hbWUpKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX2ZvbGxvd2Vycy5wdXNoKFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIG9iaixcbiAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgYXMgfHwgdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIGxhc3RSZXZzID0gcmVLZXkgJiYgcmVLZXkucmVkdWNlKCggcmV2cywgaWQgKSA9PiAocmV2c1tpZF0gPSAwLCByZXZzKSwge30pXG4gICAgICAgICAgICBdKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMubW91bnQoa2V5KTtcbiAgICAgICAgXG4gICAgICAgIGlmICggc2V0SW5pdGlhbCAmJiB0aGlzLl9zdGFibGUgKSB7XG4gICAgICAgICAgICBkYXRhID0gdGhpcy5nZXRVcGRhdGVzKGxhc3RSZXZzKTtcbiAgICAgICAgICAgIGlmICggIWRhdGEgKSByZXR1cm47XG4gICAgICAgICAgICBpZiAoIHR5cGVvZiBvYmogIT0gXCJmdW5jdGlvblwiICkge1xuICAgICAgICAgICAgICAgIGlmICggYXMgKSBvYmouc2V0U3RhdGUoeyBbYXNdOiBkYXRhIH0pO1xuICAgICAgICAgICAgICAgIGVsc2Ugb2JqLnNldFN0YXRlKGRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgb2JqKGRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIFVuIGJpbmQgdGhpcyBjb250ZXh0IG9mZiB0aGUgZ2l2ZW4gY29tcG9uZW50LWtleXNcbiAgICAgKiBAcGFyYW0gb2JqXG4gICAgICogQHBhcmFtIGtleVxuICAgICAqIEByZXR1cm5zIHtBcnJheS48Kj59XG4gICAgICovXG4gICAgdW5CaW5kKCBvYmosIGtleSwgYXMgKSB7XG4gICAgICAgIHZhciBmb2xsb3dlcnMgPSB0aGlzLl9mb2xsb3dlcnMsXG4gICAgICAgICAgICBpICAgICAgICAgPSBmb2xsb3dlcnMgJiYgZm9sbG93ZXJzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBmb2xsb3dlcnMgJiYgaS0tIClcbiAgICAgICAgICAgIGlmICggZm9sbG93ZXJzW2ldWzBdID09PSBvYmogJiYgKCcnICsgZm9sbG93ZXJzW2ldWzFdKSA9PSAoJycgKyBrZXkpICYmXG4gICAgICAgICAgICAgICAgZm9sbG93ZXJzW2ldWzJdID09IGFzIClcbiAgICAgICAgICAgICAgICByZXR1cm4gZm9sbG93ZXJzLnNwbGljZShpLCAxKTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogTW91bnQgdGhlIHN0b3JlcyBpbiBzdG9yZXNMaXN0IGZyb20gdGhpcyBjb250ZXh0LCBpdHMgcGFyZW50cyBhbmQgbWl4ZWQgY29udGV4dFxuICAgICAqIEJpbmQgdGhlbSB0byAndG8nXG4gICAgICogSG9vayAndG8nIHNvIGl0IHdpbGwgYXV0byB1bmJpbmQgb24gJ2Rlc3Ryb3knIG9yICdjb21wb25lbnRXaWxsVW5tb3VudCdcbiAgICAgKiBAcGFyYW0gdG9cbiAgICAgKiBAcGFyYW0gc3RvcmVzTGlzdFxuICAgICAqIEBwYXJhbSBiaW5kXG4gICAgICogQHJldHVybnMge09iamVjdH0gSW5pdGlhbCBvdXRwdXRzIG9mIHRoZSBzdG9yZXMgaW4gJ3N0b3Jlc0xpc3QnXG4gICAgICovXG4gICAgbWFwKCB0bywgc3RvcmVzTGlzdCwgYmluZCA9IHRydWUgKSB7XG4gICAgICAgIGxldCBTdG9yZSAgPSB0aGlzLmNvbnN0cnVjdG9yLlN0b3JlO1xuICAgICAgICBzdG9yZXNMaXN0ID0gaXMuYXJyYXkoc3RvcmVzTGlzdCkgPyBzdG9yZXNMaXN0IDogW3N0b3Jlc0xpc3RdO1xuICAgICAgICB0aGlzLm1vdW50KHN0b3Jlc0xpc3QpO1xuICAgICAgICBpZiAoIGJpbmQgJiYgdG8gaW5zdGFuY2VvZiBTdG9yZSApIHtcbiAgICAgICAgICAgIFN0b3JlLm1hcCh0bywgc3RvcmVzTGlzdCwgdGhpcywgdGhpcywgZmFsc2UpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoIGJpbmQgKSB7XG4gICAgICAgICAgICB0aGlzLmJpbmQodG8sIHN0b3Jlc0xpc3QsIHVuZGVmaW5lZCwgZmFsc2UpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBsZXQgbWl4ZWRDV1VubW91bnQsXG4gICAgICAgICAgICAgICAgdW5Nb3VudEtleSA9IHRvLmlzUmVhY3RDb21wb25lbnQgPyBcImNvbXBvbmVudFdpbGxVbm1vdW50XCIgOiBcImRlc3Ryb3lcIjtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKCB0by5oYXNPd25Qcm9wZXJ0eSh1bk1vdW50S2V5KSApIHtcbiAgICAgICAgICAgICAgICBtaXhlZENXVW5tb3VudCA9IHRvW3VuTW91bnRLZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB0b1t1bk1vdW50S2V5XSA9ICggLi4uYXJneiApID0+IHtcbiAgICAgICAgICAgICAgICBkZWxldGUgdG9bdW5Nb3VudEtleV07XG4gICAgICAgICAgICAgICAgaWYgKCBtaXhlZENXVW5tb3VudCApXG4gICAgICAgICAgICAgICAgICAgIHRvW3VuTW91bnRLZXldID0gbWl4ZWRDV1VubW91bnQ7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdGhpcy51bkJpbmQodG8sIHN0b3Jlc0xpc3QpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0b1t1bk1vdW50S2V5XSAmJiB0b1t1bk1vdW50S2V5XSguLi5hcmd6KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdG9yZXNMaXN0LnJlZHVjZSgoIGRhdGEsIGlkICkgPT4gKGRhdGFbaWRdID0gdGhpcy5zdG9yZXNbaWRdICYmIHRoaXMuc3RvcmVzW2lkXS5kYXRhLCBkYXRhKSwge30pO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBHZXQgb3IgdXBkYXRlIHN0b3Jlc1Jldk1hcCdzIHJldmlzaW9uc1xuICAgICAqIEBwYXJhbSBzdG9yZXNSZXZNYXBcbiAgICAgKiBAcGFyYW0gbG9jYWxcbiAgICAgKiBAcmV0dXJucyB7e319XG4gICAgICovXG4gICAgZ2V0U3RvcmVzUmV2cyggc3RvcmVzUmV2TWFwID0ge30sIGxvY2FsICkge1xuICAgICAgICBsZXQgY3R4ID0gdGhpcy5fX2NvbnRleHQ7XG4gICAgICAgIGlmICggIXN0b3Jlc1Jldk1hcCApIHtcbiAgICAgICAgICAgIHN0b3Jlc1Jldk1hcCA9IHt9O1xuICAgICAgICB9XG4gICAgICAgIE9iamVjdC5rZXlzKGN0eCkuZm9yRWFjaChcbiAgICAgICAgICAgIGlkID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoICFpcy5mbihjdHhbaWRdKVxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICBzdG9yZXNSZXZNYXBbaWRdID0gY3R4W2lkXS5fcmV2O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICggIXN0b3Jlc1Jldk1hcC5oYXNPd25Qcm9wZXJ0eShpZCkgKVxuICAgICAgICAgICAgICAgICAgICBzdG9yZXNSZXZNYXBbaWRdID0gZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgaWYgKCAhbG9jYWwgKSB7XG4gICAgICAgICAgICB0aGlzLl9fbWl4ZWQucmVkdWNlKCggdXBkYXRlZCwgY3R4ICkgPT4gKGN0eC5nZXRTdG9yZXNSZXZzKHN0b3Jlc1Jldk1hcCksIHN0b3Jlc1Jldk1hcCksIHN0b3Jlc1Jldk1hcCk7XG4gICAgICAgICAgICB0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC5nZXRTdG9yZXNSZXZzKHN0b3Jlc1Jldk1hcCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0b3Jlc1Jldk1hcDtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogR2V0IG9yIHVwZGF0ZSBvdXRwdXQgYmFzaW5nIHN0b3Jlc1Jldk1hcCdzIHJldmlzaW9ucy5cbiAgICAgKiBJZiBhIHN0b3JlIGluICdzdG9yZXNSZXZNYXAnIGlzIHVwZGF0ZWQ7IGFkZCBpdCB0byAnb3V0cHV0J1xuICAgICAqIEBwYXJhbSBzdG9yZXNSZXZNYXBcbiAgICAgKiBAcGFyYW0gb3V0cHV0XG4gICAgICogQHBhcmFtIHVwZGF0ZWRcbiAgICAgKiBAcmV0dXJucyB7Knx7fX1cbiAgICAgKi9cbiAgICBnZXRVcGRhdGVzKCBzdG9yZXNSZXZNYXAsIG91dHB1dCwgdXBkYXRlZCApIHtcbiAgICAgICAgbGV0IGN0eCA9IHRoaXMuX19jb250ZXh0O1xuICAgICAgICBcbiAgICAgICAgb3V0cHV0ID0gb3V0cHV0IHx8IHt9O1xuICAgICAgICBPYmplY3Qua2V5cyhjdHgpLmZvckVhY2goXG4gICAgICAgICAgICBpZCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCAhb3V0cHV0W2lkXVxuICAgICAgICAgICAgICAgICAgICAmJiAoICFzdG9yZXNSZXZNYXBcbiAgICAgICAgICAgICAgICAgICAgICAgIHx8IChzdG9yZXNSZXZNYXAuaGFzT3duUHJvcGVydHkoaWQpICYmIHN0b3Jlc1Jldk1hcFtpZF0gPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgICAgIHx8ICEoICFzdG9yZXNSZXZNYXAuaGFzT3duUHJvcGVydHkoaWQpIHx8IGN0eFtpZF0uX3JldiA8PSBzdG9yZXNSZXZNYXBbaWRdICkpXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVkICAgID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgb3V0cHV0W2lkXSA9IHRoaXMuZGF0YVtpZF07XG4gICAgICAgICAgICAgICAgICAgIGlmICggc3RvcmVzUmV2TWFwICYmIHN0b3Jlc1Jldk1hcFtpZF0gIT09IHVuZGVmaW5lZCApXG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9yZXNSZXZNYXBbaWRdID0gY3R4W2lkXS5fcmV2O1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHVwZGF0ZWQgPSB0aGlzLl9fbWl4ZWQucmVkdWNlKCggdXBkYXRlZCwgY3R4ICkgPT4gKGN0eC5nZXRVcGRhdGVzKHN0b3Jlc1Jldk1hcCwgb3V0cHV0LCB1cGRhdGVkKSB8fCB1cGRhdGVkKSwgdXBkYXRlZCk7XG4gICAgICAgIHVwZGF0ZWQgPSB0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC5nZXRVcGRhdGVzKHN0b3Jlc1Jldk1hcCwgb3V0cHV0LCB1cGRhdGVkKSB8fCB1cGRhdGVkO1xuICAgICAgICByZXR1cm4gdXBkYXRlZCAmJiBvdXRwdXQ7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIGZsYWdzX3N0YXRlc1xuICAgICAqIEBwYXJhbSBmbGFnc19kYXRhXG4gICAgICogQHJldHVybnMge3tzdGF0ZToge30sIGRhdGE6IHt9fX1cbiAgICAgKi9cbiAgICBzZXJpYWxpemUoIGZsYWdzX3N0YXRlcyA9IC8uKi8sIGZsYWdzX2RhdGEgPSAvLiovICkge1xuICAgICAgICBsZXQgY3R4ID0gdGhpcy5fX2NvbnRleHQsIG91dHB1dCA9IHsgc3RhdGU6IHt9LCBkYXRhOiB7fSB9LFxuICAgICAgICAgICAgX2ZsYWdzX3N0YXRlcyxcbiAgICAgICAgICAgIF9mbGFnc19kYXRhO1xuICAgICAgICBpZiAoIGlzLmFycmF5KGZsYWdzX3N0YXRlcykgKVxuICAgICAgICAgICAgZmxhZ3Nfc3RhdGVzLmZvckVhY2goaWQgPT4gKG91dHB1dC5zdGF0ZVtpZF0gPSB0aGlzLnN0YXRlW2lkXSkpO1xuICAgICAgICBcbiAgICAgICAgaWYgKCBpcy5hcnJheShmbGFnc19kYXRhKSApXG4gICAgICAgICAgICBmbGFnc19kYXRhLmZvckVhY2goaWQgPT4gKG91dHB1dC5kYXRhW2lkXSA9IHRoaXMuZGF0YVtpZF0pKTtcbiAgICAgICAgXG4gICAgICAgIGlmICggIWlzLmFycmF5KGZsYWdzX2RhdGEpICYmICFpcy5hcnJheShmbGFnc19zdGF0ZXMpIClcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGN0eCkuZm9yRWFjaChcbiAgICAgICAgICAgICAgICBpZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICggaXMuZm4oY3R4W2lkXSkgKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgbGV0IGZsYWdzID0gY3R4W2lkXS5jb25zdHJ1Y3Rvci5mbGFncztcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGZsYWdzID0gaXMuYXJyYXkoZmxhZ3MpID8gZmxhZ3MgOiBbZmxhZ3MgfHwgXCJcIl07XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpZiAoIGZsYWdzLnJlZHVjZSgoIHIsIGZsYWcgKSA9PiAociB8fCBfZmxhZ3Nfc3RhdGVzLnRlc3QoZmxhZykpLCBmYWxzZSkgKVxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0LnN0YXRlW2lkXSA9IHRoaXMuc3RhdGVbaWRdO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBmbGFncy5yZWR1Y2UoKCByLCBmbGFnICkgPT4gKHIgfHwgX2ZsYWdzX2RhdGEudGVzdChmbGFnKSksIGZhbHNlKSApXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXQuZGF0YVtpZF0gPSB0aGlzLmRhdGFbaWRdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIClcbiAgICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICB9XG4gICAgXG4gICAgZGlzcGF0Y2goIGFjdGlvbiwgZGF0YSApIHtcbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5fX2NvbnRleHQpXG4gICAgICAgICAgICAgIC5mb3JFYWNoKFxuICAgICAgICAgICAgICAgICAgaWQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGlmICggIWlzLmZuKHRoaXMuX19jb250ZXh0W2lkXSkgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9fY29udGV4dFtpZF0uZGlzcGF0Y2goYWN0aW9uLCBkYXRhKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICApO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fX21peGVkLmZvckVhY2goKCBjdHggKSA9PiAoY3R4LmRpc3BhdGNoKGFjdGlvbiwgZGF0YSkpKTtcbiAgICAgICAgdGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuZGlzcGF0Y2goYWN0aW9uLCBkYXRhKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIG9uY2UoJ3N0YWJsZScsIGNiKVxuICAgICAqIEBwYXJhbSBvYmoge1JlYWN0LkNvbXBvbmVudHxTdG9yZXxmdW5jdGlvbilcbiAgICAgKiBAcGFyYW0ga2V5IHtzdHJpbmd9IG9wdGlvbmFsIGtleSB3aGVyZSB0byBtYXAgdGhlIHB1YmxpYyBzdGF0ZVxuICAgICAqL1xuICAgIHRoZW4oIGNiICkge1xuICAgICAgICBpZiAoIHRoaXMuX3N0YWJsZSApXG4gICAgICAgICAgICByZXR1cm4gY2IobnVsbCwgdGhpcy5kYXRhKTtcbiAgICAgICAgdGhpcy5vbmNlKCdzdGFibGUnLCBlID0+IGNiKG51bGwsIHRoaXMuZGF0YSkpO1xuICAgIH1cbiAgICBcbiAgICByZXN0b3JlKCB7IHN0YXRlLCBkYXRhIH0sIHF1aWV0ICkge1xuICAgICAgICBsZXQgY3R4ID0gdGhpcy5fX2NvbnRleHQ7XG4gICAgICAgIE9iamVjdC5rZXlzKGRhdGEpLmZvckVhY2goXG4gICAgICAgICAgICBpZCA9PiB7XG4gICAgICAgICAgICAgICAgcXVpZXQgPyBjdHguZGF0YSA9IGRhdGFbaWRdXG4gICAgICAgICAgICAgICAgICAgIDogY3R4LnB1c2goZGF0YVtpZF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICBPYmplY3Qua2V5cyhzdGF0ZSkuZm9yRWFjaChcbiAgICAgICAgICAgIGlkID0+IHtcbiAgICAgICAgICAgICAgICBxdWlldCA/IGN0eC5zdGF0ZSA9IHN0YXRlW2lkXVxuICAgICAgICAgICAgICAgICAgICA6IGN0eC5zZXRTdGF0ZShzdGF0ZVtpZF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cbiAgICBcbiAgICByZXRhaW5TdG9yZXMoIHN0b3JlcyA9IFtdLCByZWFzb24gKSB7XG4gICAgICAgIHN0b3Jlcy5mb3JFYWNoKFxuICAgICAgICAgICAgaWQgPT4gKHRoaXMuc3RvcmVzW2lkXSAmJiB0aGlzLnN0b3Jlc1tpZF0ucmV0YWluICYmIHRoaXMuc3RvcmVzW2lkXS5yZXRhaW4ocmVhc29uKSlcbiAgICAgICAgKVxuICAgIH1cbiAgICBcbiAgICBkaXNwb3NlU3RvcmVzKCBzdG9yZXMgPSBbXSwgcmVhc29uICkge1xuICAgICAgICBzdG9yZXMuZm9yRWFjaChcbiAgICAgICAgICAgIGlkID0+ICh0aGlzLnN0b3Jlc1tpZF0gJiYgdGhpcy5zdG9yZXNbaWRdLmRpc3Bvc2UgJiYgdGhpcy5zdG9yZXNbaWRdLmRpc3Bvc2UocmVhc29uKSlcbiAgICAgICAgKVxuICAgIH1cbiAgICBcbiAgICB3YWl0KCByZWFzb24gKSB7XG4gICAgICAgIC8vY29uc29sZS5sb2coXCJ3YWl0XCIsIHJlYXNvbik7XG4gICAgICAgIHRoaXMuX3N0YWJsZSAmJiAhdGhpcy5fX2xvY2tzLmFsbCAmJiB0aGlzLmVtaXQoXCJ1bnN0YWJsZVwiLCB0aGlzKTtcbiAgICAgICAgdGhpcy5fc3RhYmxlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX19sb2Nrcy5hbGwrKztcbiAgICAgICAgaWYgKCByZWFzb24gKSB7XG4gICAgICAgICAgICB0aGlzLl9fbG9ja3NbcmVhc29uXSA9IHRoaXMuX19sb2Nrc1tyZWFzb25dIHx8IDA7XG4gICAgICAgICAgICB0aGlzLl9fbG9ja3NbcmVhc29uXSsrO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIHJlbGVhc2UoIHJlYXNvbiApIHtcbiAgICAgICAgXG4gICAgICAgIGlmICggcmVhc29uICkge1xuICAgICAgICAgICAgaWYgKCB0aGlzLl9fbG9ja3NbcmVhc29uXSA9PSAwIClcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiUmVsZWFzZSBtb3JlIHRoYW4gbG9ja2luZyAhXCIsIHJlYXNvbik7XG4gICAgICAgICAgICB0aGlzLl9fbG9ja3NbcmVhc29uXSA9IHRoaXMuX19sb2Nrc1tyZWFzb25dIHx8IDA7XG4gICAgICAgICAgICB0aGlzLl9fbG9ja3NbcmVhc29uXS0tO1xuICAgICAgICB9XG4gICAgICAgIGlmICggIXJlYXNvbiAmJiB0aGlzLl9fbG9ja3MuYWxsID09IDAgKVxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlJlbGVhc2UgbW9yZSB0aGFuIGxvY2tpbmcgIVwiKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX19sb2Nrcy5hbGwtLTtcbiAgICAgICAgaWYgKCAhdGhpcy5fX2xvY2tzLmFsbCApIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YWJpbGl6ZXJUTSAmJiBjbGVhclRpbWVvdXQodGhpcy5fc3RhYmlsaXplclRNKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5fc3RhYmlsaXplclRNID0gc2V0VGltZW91dChcbiAgICAgICAgICAgICAgICBlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc3RhYmlsaXplclRNID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCB0aGlzLl9fbG9ja3MuYWxsIClcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3Byb3BhZ1RNICYmIGNsZWFyVGltZW91dCh0aGlzLl9wcm9wYWdUTSk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zdGFibGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXQoXCJzdGFibGVcIiwgdGhpcyk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAhdGhpcy5kZWFkICYmIHRoaXMuX3Byb3BhZygpOy8vIHN0YWJpbGl0eSBjYW4gaW5kdWNlIGRlc3Ryb3lcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cbiAgICBcbiAgICBwcm9wYWcoKSB7XG4gICAgICAgIHRoaXMuX3Byb3BhZ1RNICYmIGNsZWFyVGltZW91dCh0aGlzLl9wcm9wYWdUTSk7XG4gICAgICAgIHRoaXMuX3Byb3BhZ1RNID0gc2V0VGltZW91dChcbiAgICAgICAgICAgIGUgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuX3Byb3BhZ1RNID0gbnVsbDtcbiAgICAgICAgICAgICAgICB0aGlzLl9wcm9wYWcoKVxuICAgICAgICAgICAgfSwgMlxuICAgICAgICApO1xuICAgIH1cbiAgICBcbiAgICBfcHJvcGFnKCkge1xuICAgICAgICBpZiAoIHRoaXMuX2ZvbGxvd2Vycy5sZW5ndGggKVxuICAgICAgICAgICAgdGhpcy5fZm9sbG93ZXJzLmZvckVhY2goKCB7IDA6IG9iaiwgMToga2V5LCAyOiBhcywgMzogbGFzdFJldnMgfSApID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHRoaXMuZ2V0VXBkYXRlcyhsYXN0UmV2cyk7XG4gICAgICAgICAgICAgICAgaWYgKCAhZGF0YSApIHJldHVybjtcbiAgICAgICAgICAgICAgICBpZiAoIHR5cGVvZiBvYmogIT0gXCJmdW5jdGlvblwiICkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIGFzICkgb2JqLnNldFN0YXRlKHsgW2FzXTogZGF0YSB9KTtcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBvYmouc2V0U3RhdGUoZGF0YSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBvYmooZGF0YSwgbGFzdFJldnMgJiYgWy4uLmxhc3RSZXZzXSB8fCBcIm5vIHJldnNcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGxhc3RSZXZzICYmXG4gICAgICAgICAgICAgICAgLy8ga2V5LmZvckVhY2goaWQgPT4gKGxhc3RSZXZzW2lkXSA9IHRoaXMuc3RvcmVzW2lkXSAmJiB0aGlzLnN0b3Jlc1tpZF0uX3JldiB8fCAwKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5lbWl0KFwidXBkYXRlXCIsIHRoaXMuZ2V0VXBkYXRlcygpKTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogaXMgc3RhYmxlXG4gICAgICogQHJldHVybnMgYm9vbFxuICAgICAqL1xuICAgIGlzU3RhYmxlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc3RhYmxlO1xuICAgIH1cbiAgICBcbiAgICBfZ2V0QWxsQ2hpbGRzKCBjaGlsZHMgPSBbXSApIHtcbiAgICAgICAgY2hpbGRzLnB1c2goLi4udGhpcy5fY2hpbGRDb250ZXh0cylcbiAgICAgICAgdGhpcy5fY2hpbGRDb250ZXh0cy5mb3JFYWNoKFxuICAgICAgICAgICAgY3R4ID0+IHtcbiAgICAgICAgICAgICAgICBjdHguX2dldEFsbENoaWxkcyhjaGlsZHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gY2hpbGRzO1xuICAgIH1cbiAgICBcbiAgICBfYWRkQ2hpbGQoIGN0eCApIHtcbiAgICAgICAgdGhpcy5fY2hpbGRDb250ZXh0cy5wdXNoKGN0eCk7XG4gICAgfVxuICAgIFxuICAgIF9ybUNoaWxkKCBjdHggKSB7XG4gICAgICAgIGxldCBpID0gdGhpcy5fY2hpbGRDb250ZXh0cy5pbmRleE9mKGN0eCk7XG4gICAgICAgIGlmICggaSAhPSAtMSApXG4gICAgICAgICAgICB0aGlzLl9jaGlsZENvbnRleHRzLnNwbGljZShpLCAxKTtcbiAgICB9XG4gICAgXG4gICAgcmV0YWluKCByZWFzb24gKSB7XG4gICAgICAgIHRoaXMuX19yZXRhaW5zLmFsbCsrO1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwicmV0YWluXCIsIHRoaXMuX2lkLCByZWFzb24pO1xuICAgICAgICBpZiAoIHJlYXNvbiApIHtcbiAgICAgICAgICAgIHRoaXMuX19yZXRhaW5zW3JlYXNvbl0gPSB0aGlzLl9fcmV0YWluc1tyZWFzb25dIHx8IDA7XG4gICAgICAgICAgICB0aGlzLl9fcmV0YWluc1tyZWFzb25dKys7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgZGlzcG9zZSggcmVhc29uICkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwiZGlzcG9zZVwiLCB0aGlzLl9pZCwgcmVhc29uKTtcbiAgICAgICAgaWYgKCByZWFzb24gKSB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmICggdGhpcy5fX3JldGFpbnNbcmVhc29uXSA9PSAwIClcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJEaXNwb3NlIG1vcmUgdGhhbiByZXRhaW5pbmcgIVwiKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5fX3JldGFpbnNbcmVhc29uXSA9IHRoaXMuX19yZXRhaW5zW3JlYXNvbl0gfHwgMDtcbiAgICAgICAgICAgIHRoaXMuX19yZXRhaW5zW3JlYXNvbl0tLTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKCB0aGlzLl9fcmV0YWlucy5hbGwgPT0gMCApXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJEaXNwb3NlIG1vcmUgdGhhbiByZXRhaW5pbmcgIVwiKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX19yZXRhaW5zLmFsbC0tO1xuICAgICAgICBcbiAgICAgICAgaWYgKCAhdGhpcy5fX3JldGFpbnMuYWxsICkge1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcImRpc3Bvc2UgZG8gZGVzdHJveSBcIiwgdGhpcy5faWQsIHRoaXMuX3BlcnNpc3RlbmNlVG0pO1xuICAgICAgICAgICAgaWYgKCB0aGlzLl9wZXJzaXN0ZW5jZVRtICkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2Rlc3Ryb3lUTSAmJiBjbGVhclRpbWVvdXQodGhpcy5fZGVzdHJveVRNKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9kZXN0cm95VE0gPSBzZXRUaW1lb3V0KFxuICAgICAgICAgICAgICAgICAgICBlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJ3dGYgY3R4XCIsIHRoaXMuX2lkLCByZWFzb24sIHRoaXMuX19sb2NrcywgdGhpcy5fc3RhYmxlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGhlbihzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwid3RmIGN0eCB0aGVuXCIsIHRoaXMuX2lkLCByZWFzb24sIHRoaXMuX19sb2Nrcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIXRoaXMuX19yZXRhaW5zLmFsbCAmJiB0aGlzLmRlc3Ryb3koKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3BlcnNpc3RlbmNlVG1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy50aGVuKHMgPT4gKCF0aGlzLl9fcmV0YWlucy5hbGwgJiYgdGhpcy5kZXN0cm95KCkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBvcmRlciBkZXN0cm95IG9mIGxvY2FsIHN0b3Jlc1xuICAgICAqL1xuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIGxldCBjdHggICA9IHRoaXMuX19jb250ZXh0O1xuICAgICAgICAvL2NvbnNvbGUud2FybihcImRlc3Ryb3lcIiwgdGhpcy5faWQpO1xuICAgICAgICB0aGlzLmRlYWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmVtaXQoXCJkZXN0cm95XCIpO1xuICAgICAgICBPYmplY3Qua2V5cyhcbiAgICAgICAgICAgIHRoaXMuX19saXN0ZW5pbmdcbiAgICAgICAgKS5mb3JFYWNoKFxuICAgICAgICAgICAgaWQgPT4gdGhpcy5fX2NvbnRleHRbaWRdLnJlbW92ZUxpc3RlbmVyKHRoaXMuX19saXN0ZW5pbmdbaWRdKVxuICAgICAgICApO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fc3RhYmlsaXplclRNICYmIGNsZWFyVGltZW91dCh0aGlzLl9zdGFiaWxpemVyVE0pO1xuICAgICAgICB0aGlzLl9wcm9wYWdUTSAmJiBjbGVhclRpbWVvdXQodGhpcy5fcHJvcGFnVE0pO1xuICAgICAgICB0aGlzLl9fbGlzdGVuaW5nID0ge307XG4gICAgICAgIFxuICAgICAgICBpZiAoIHRoaXMuX2lzTG9jYWxJZCApXG4gICAgICAgICAgICBkZWxldGUgb3BlbkNvbnRleHRzW3RoaXMuX2lkXTtcbiAgICAgICAgdGhpcy5fZm9sbG93ZXJzLmxlbmd0aCA9IDA7XG4gICAgICAgIFxuICAgICAgICB3aGlsZSAoIHRoaXMuX19taXhlZExpc3QubGVuZ3RoICkge1xuICAgICAgICAgICAgdGhpcy5fX21peGVkWzBdLnJlbW92ZUxpc3RlbmVyKHRoaXMuX19taXhlZExpc3Quc2hpZnQoKSk7XG4gICAgICAgICAgICB0aGlzLl9fbWl4ZWQuc2hpZnQoKS5kaXNwb3NlKFwibWl4ZWRUb1wiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIHRoaXMuX19wYXJlbnRMaXN0ICkge1xuICAgICAgICAgICAgdGhpcy5wYXJlbnQuX3JtQ2hpbGQodGhpcyk7XG4gICAgICAgICAgICB0aGlzLnBhcmVudC5yZW1vdmVMaXN0ZW5lcih0aGlzLl9fcGFyZW50TGlzdCk7XG4gICAgICAgICAgICB0aGlzLnBhcmVudC5kaXNwb3NlKFwiaXNNeVBhcmVudFwiKTtcbiAgICAgICAgICAgIHRoaXMuX19wYXJlbnRMaXN0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICAvL2ZvciAoIGxldCBrZXkgaW4gY3R4IClcbiAgICAgICAgLy8gICAgaWYgKCAhaXMuZm4oY3R4W2tleV0pICkge1xuICAgICAgICAvLyAgICAgICAgaWYgKCBjdHhba2V5XS5jb250ZXh0T2JqID09PSB0aGlzIClcbiAgICAgICAgLy8gICAgICAgICAgICBjdHhba2V5XS5kaXNwb3NlKCk7XG4gICAgICAgIC8vXG4gICAgICAgIC8vICAgICAgICBjdHhba2V5XSA9IGN0eFtrZXldLmNvbnN0cnVjdG9yO1xuICAgICAgICAvLyAgICB9XG4gICAgICAgIHRoaXMuX19taXhlZCA9IHRoaXMuZGF0YSA9IHRoaXMuc3RhdGUgPSB0aGlzLmNvbnRleHQgPSB0aGlzLnN0b3JlcyA9IG51bGw7XG4gICAgICAgIHRoaXMuX2RhdGEgPSB0aGlzLl9zdGF0ZSA9IHRoaXMuX3N0b3JlcyA9IG51bGw7XG4gICAgICAgIFxuICAgICAgICBcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0NvbnRleHQuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImlzXCJcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcclxuICogQ29weXJpZ2h0IChjKSAgMjAxNyBDYWlwaSBMYWJzIC5cclxuICpcclxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuICpcclxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcbiAqXHJcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxyXG4gKlxyXG4gKiBAYXV0aG9yIDogTmF0aGFuYWVsIEJyYXVuXHJcbiAqIEBjb250YWN0IDogY2FpcGlsYWJzQGdtYWlsLmNvbVxyXG4gKi9cclxudmFyIGlzID0gcmVxdWlyZSgnaXMnKTtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW1pdHRlciB7XHJcbiAgICBfZXZlbnRzICAgPSB7fTtcclxuICAgIF9fcmV0YWlucyA9IHt9O1xyXG4gICAgXHJcbiAgICBvbiggZXZ0LCBjYiApIHtcclxuICAgICAgICBpZiAoICFpcy5zdHJpbmcoZXZ0KSAmJiBldnQgKVxyXG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMoZXZ0KS5mb3JFYWNoKGsgPT4gdGhpcy5vbihrLCBldnRba10pKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLl9ldmVudHNbZXZ0XSA9IHRoaXMuX2V2ZW50c1tldnRdIHx8IFtdO1xyXG4gICAgICAgIHRoaXMuX2V2ZW50c1tldnRdLnB1c2goY2IpO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICB1biggZXZ0LCBjYiApIHtcclxuICAgICAgICBpZiAoICFpcy5zdHJpbmcoZXZ0KSAmJiBldnQgKVxyXG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMoZXZ0KS5mb3JFYWNoKGsgPT4gdGhpcy51bihrLCBldnRba10pKTtcclxuICAgIFxyXG4gICAgICAgIGlmICggIXRoaXMuX2V2ZW50c1tldnRdICkgcmV0dXJuO1xyXG4gICAgICAgIHZhciBpID0gdGhpcy5fZXZlbnRzW2V2dF0uaW5kZXhPZihjYik7XHJcbiAgICAgICAgdGhpcy5fZXZlbnRzW2V2dF0uc3BsaWNlKGksIDEpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBlbWl0KGV2dCwgLi4uYXJneikge1xyXG4gICAgICAgIGlmICggIXRoaXMuX2V2ZW50c1tldnRdICkgcmV0dXJuO1xyXG4gICAgICAgIGZvciAodmFyIGk9MDtpPHRoaXMuX2V2ZW50c1tldnRdLmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICB0aGlzLl9ldmVudHNbZXZ0XVtpXSguLi5hcmd6KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJlbW92ZUxpc3RlbmVyKCkge1xyXG4gICAgICAgIHRoaXMudW4oLi4uYXJndW1lbnRzKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgb25jZSggZXZ0LCBjYiApIHtcclxuICAgICAgICBsZXQgZm47XHJcbiAgICAgICAgdGhpcy5vbihldnQsIGZuID0gKCAuLi5hcmd6ICkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnVuKGV2dCwgZm4pO1xyXG4gICAgICAgICAgICBjYiguLi5hcmd6KVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBhZGRMaXN0ZW5lcigpIHtcclxuICAgICAgICB0aGlzLm9uKC4uLmFyZ3VtZW50cyk7XHJcbiAgICB9XHJcbiAgICBcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9FbWl0dGVyLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2hvcnRpZFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInNob3J0aWRcIlxuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxuICogQ29weXJpZ2h0IChjKSAgMjAxNyBDYWlwaSBMYWJzIC5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuICpcbiAqIEBhdXRob3IgOiBOYXRoYW5hZWwgQnJhdW5cbiAqIEBjb250YWN0IDogY2FpcGlsYWJzQGdtYWlsLmNvbVxuICovXG5cbi8qKlxuICogVWx0cmEgc2NhbGFibGUgc3RhdGUtYXdhcmUgc3RvcmVcbiAqXG4gKiBAdG9kbyA6IGxvdCBvZiBvcHRpbXMuLi5cbiAqL1xuXG52YXIgaXMgICAgICAgICAgID0gcmVxdWlyZSgnaXMnKSxcbiAgICBDb250ZXh0ICAgICAgPSByZXF1aXJlKCcuL0NvbnRleHQnKSxcbiAgICBFdmVudEVtaXR0ZXIgPSByZXF1aXJlKCcuL0VtaXR0ZXInKSxcbiAgICBzaG9ydGlkICAgICAgPSByZXF1aXJlKCdzaG9ydGlkJyksXG4gICAgb2JqUHJvdG8gICAgID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHt9KSxcbiAgICBvcGVuQ29udGV4dHMgPSB7fTtcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdG9yZSBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gICAgXG4gICAgc3RhdGljIHVzZSAgICAgICAgICAgICAgICAgICAgICAgID0gW107Ly8gb3ZlcnJpZGFibGUgbGlzdCBvZiBzb3VyY2Ugc3RvcmVzXG4gICAgc3RhdGljIGZvbGxvdzsvLyBvdmVycmlkYWJsZSBsaXN0IG9mIHN0b3JlIHRoYXQgd2lsbCBhbGxvdyBwdXNoIGlmIHVwZGF0ZWRcbiAgICBzdGF0aWMgcmVxdWlyZTtcbiAgICBzdGF0aWMgc3RhdGljQ29udGV4dCAgICAgICAgICAgICAgPSBuZXcgQ29udGV4dCh7fSwgeyBpZDogXCJzdGF0aWNcIiB9KTtcbiAgICBzdGF0aWMgaW5pdGlhbFN0YXRlICAgICAgICAgICAgICAgPSB1bmRlZmluZWQ7Ly8gZGVmYXVsdCBzdGF0ZSBAZGVwcmVjaWF0ZWRcbiAgICBzdGF0aWMgc3RhdGUgICAgICAgICAgICAgICAgICAgICAgPSB1bmRlZmluZWQ7Ly8gZGVmYXVsdCBzdGF0ZVxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICAgICAgICAgc3RhdGljIGRlZmF1bHRNYXhMaXN0ZW5lcnMgPSAxMDA7XG4gICAgLyoqXG4gICAgICogaWYgcmV0YWluIGdvZXMgdG8gMCA6XG4gICAgICogZmFsc2UgdG8gbm90IGRlc3Ryb3ksXG4gICAgICogMCB0byBzeW5jIGF1dG8gZGVzdHJveVxuICAgICAqIE1zIHRvIGF1dG9kZXN0cm95IGFmdGVyIHRtIG1zIGlmIG5vIHJldGFpbiBoYXMgYmVlbiBjYWxsZWRcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbnxJbnR9XG4gICAgICovXG4gICAgICAgICAgIHN0YXRpYyBwZXJzaXN0ZW5jZVRtICAgICAgID0gZmFsc2U7XG4gICAgXG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0b3IsIHdpbGwgYnVpbGQgYSByZXNjb3BlIHN0b3JlXG4gICAgICpcbiAgICAgKiAoY29udGV4dCwge3JlcXVpcmUsdXNlLGFwcGx5LHN0YXRlLCBkYXRhfSlcbiAgICAgKiAoY29udGV4dClcbiAgICAgKlxuICAgICAqIEBwYXJhbSBjb250ZXh0IHtvYmplY3R9IGNvbnRleHQgd2hlcmUgdG8gZmluZCB0aGUgb3RoZXIgc3RvcmVzIChkZWZhdWx0IDogc3RhdGljIHN0YXRpY0NvbnRleHQgKVxuICAgICAqIEBwYXJhbSBrZXlzIHtBcnJheX0gKHBhc3NlZCB0byBTdG9yZTo6bWFwKSBFeCA6IFtcInNlc3Npb25cIiwgXCJvdGhlck5hbWVkU3RvcmU6a2V5XCIsIG90aGVyU3RvcmUuYXMoXCJvdGhlcktleVwiKV1cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdmFyIGFyZ3ogICAgICAgICA9IFsuLi5hcmd1bWVudHNdLFxuICAgICAgICAgICAgX3N0YXRpYyAgICAgID0gdGhpcy5jb25zdHJ1Y3RvcixcbiAgICAgICAgICAgIGNvbnRleHQgICAgICA9ICFpcy5hcnJheShhcmd6WzBdKSAmJiAhaXMuc3RyaW5nKGFyZ3pbMF0pID8gYXJnei5zaGlmdCgpIDogX3N0YXRpYy5zdGF0aWNDb250ZXh0LFxuICAgICAgICAgICAgY2ZnICAgICAgICAgID0gYXJnelswXSAmJiAhaXMuYXJyYXkoYXJnelswXSkgJiYgIWlzLnN0cmluZyhhcmd6WzBdKSA/IGFyZ3ouc2hpZnQoKSA6IHt9LFxuICAgICAgICAgICAgbmFtZSAgICAgICAgID0gaXMuc3RyaW5nKGFyZ3pbMF0pID8gYXJnelswXSA6IGNmZy5uYW1lIHx8IF9zdGF0aWMubmFtZSxcbiAgICAgICAgICAgIHdhdGNocyAgICAgICA9IGlzLmFycmF5KGFyZ3pbMF0pID8gYXJnei5zaGlmdCgpIDogY2ZnLnVzZSB8fCBbXSwvLyB3YXRjaHMgbmVlZCB0byBiZSBkZWZpbmVkIGFmdGVyIGFsbCB0aGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzdG9yZSBhcmUgcmVnaXN0ZXJlZCA6IHNvIHdlIGNhbid0IGRlYWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB3aXRoIGFueSBcInN0YXRpYyB1c2VcIiBhdXRvbWF0aWNseVxuICAgICAgICAgICAgYXBwbHkgICAgICAgID0gaXMuZm4oYXJnelswXSkgPyBhcmd6LnNoaWZ0KCkgOiBjZmcuYXBwbHkgfHwgbnVsbCxcbiAgICAgICAgICAgIGluaXRpYWxTdGF0ZSA9IF9zdGF0aWMuc3RhdGUgfHwgX3N0YXRpYy5pbml0aWFsU3RhdGU7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl91aWQgICAgICAgICAgPSBjZmcuX3VpZCB8fCBzaG9ydGlkLmdlbmVyYXRlKCk7XG4gICAgICAgIHRoaXMuX21heExpc3RlbmVycyA9IGNmZy5kZWZhdWx0TWF4TGlzdGVuZXJzIHx8IFN0b3JlLmRlZmF1bHRNYXhMaXN0ZW5lcnM7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9fcmV0YWlucyAgICA9IHsgYWxsOiAwIH07XG4gICAgICAgIHRoaXMuX19sb2NrcyAgICAgID0geyBhbGw6IDAgfTtcbiAgICAgICAgdGhpcy5fb25TdGFiaWxpemUgPSBbXTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX3BlcnNpc3RlbmNlVG0gPSBjZmcucGVyc2lzdGVuY2VUbSB8fCB0aGlzLmNvbnN0cnVjdG9yLnBlcnNpc3RlbmNlVG07XG4gICAgICAgIGlmICggaXMuc3RyaW5nKGFyZ3pbMF0pICkge1xuICAgICAgICAgICAgaWYgKCBjb250ZXh0Ll9fY29udGV4dFtuYW1lXSApXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwiUmVTY29wZTogT3ZlcndyaXRpbmcgYW4gZXhpc3Rpbmcgc3RhdGljIG5hbWVkIHN0b3JlICggJXMgKSAhIVwiLCBuYW1lKTtcbiAgICAgICAgICAgIGNvbnRleHQuX19jb250ZXh0W25hbWVdID0gdGhpcztcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKCBjZmcgJiYgY2ZnLm9uICkge1xuICAgICAgICAgICAgdGhpcy5vbihjZmcub24pO1xuICAgICAgICB9XG4gICAgICAgIC8vIHRoaXMuc3RhdGUgICAgICA9IHRoaXMuc3RhdGUgfHwge307XG4gICAgICAgIFxuICAgICAgICB0aGlzLl91c2UgPSBbLi4ud2F0Y2hzLCAuLi4oX3N0YXRpYy51c2UgfHwgW10pXTtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgXG4gICAgICAgIGlmICggY29udGV4dC5zdG9yZXMgKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRleHRPYmogPSBjb250ZXh0O1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0ICAgID0gY29udGV4dC5zdG9yZXM7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRleHRPYmogPSBuZXcgQ29udGV4dChjb250ZXh0KTtcbiAgICAgICAgICAgIHRoaXMuY29udGV4dCAgICA9IGNvbnRleHQuc3RvcmVzO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgdGhpcy5fc3RhYmxlICA9IHRydWU7XG4gICAgICAgIHRoaXMuX3JldiAgICAgPSAxO1xuICAgICAgICB0aGlzLl9yZXZzICAgID0ge307XG4gICAgICAgIHRoaXMuc3RvcmVzICAgPSB7fTtcbiAgICAgICAgdGhpcy5fcmVxdWlyZSA9IFtdO1xuICAgICAgICBcbiAgICAgICAgaWYgKCBfc3RhdGljLnJlcXVpcmUgKVxuICAgICAgICAgICAgdGhpcy5fcmVxdWlyZS5wdXNoKC4uLl9zdGF0aWMucmVxdWlyZSk7XG4gICAgICAgIGlmICggY2ZnLnJlcXVpcmUgKVxuICAgICAgICAgICAgdGhpcy5fcmVxdWlyZS5wdXNoKC4uLmNmZy5yZXF1aXJlKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX2ZvbGxvd2VycyA9IFtdO1xuICAgICAgICBcbiAgICAgICAgaWYgKCBfc3RhdGljLmRhdGEgIT09IHVuZGVmaW5lZCApXG4gICAgICAgICAgICB0aGlzLmRhdGEgPSB7IC4uLl9zdGF0aWMuZGF0YSB9O1xuICAgICAgICBpZiAoIGNmZy5oYXNPd25Qcm9wZXJ0eShcImRhdGFcIikgJiYgY2ZnLmRhdGEgIT09IHVuZGVmaW5lZCApXG4gICAgICAgICAgICB0aGlzLmRhdGEgPSBjZmcuZGF0YTtcbiAgICAgICAgaWYgKCBjZmcuaGFzT3duUHJvcGVydHkoXCJzdGF0ZVwiKSAmJiBjZmcuc3RhdGUgIT09IHVuZGVmaW5lZCApXG4gICAgICAgICAgICBpbml0aWFsU3RhdGUgPSB7IC4uLmluaXRpYWxTdGF0ZSwgLi4uY2ZnLnN0YXRlIH07XG4gICAgICAgIFxuICAgICAgICBpZiAoIGFwcGx5IClcbiAgICAgICAgICAgIHRoaXMuYXBwbHkgPSBhcHBseTtcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICBpZiAoIGluaXRpYWxTdGF0ZSB8fCB0aGlzLl91c2UubGVuZ3RoICkgey8vIHN5bmMgYXBwbHlcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICAgICAgLi4uKGluaXRpYWxTdGF0ZSB8fCB7fSksXG4gICAgICAgICAgICAgICAgLi4uY29udGV4dC5tYXAodGhpcywgdGhpcy5fdXNlKVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmICggdGhpcy5pc0NvbXBsZXRlKCkgJiYgdGhpcy5kYXRhID09PSB1bmRlZmluZWQgKVxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YSA9IHRoaXMuYXBwbHkodGhpcy5kYXRhLCB0aGlzLnN0YXRlLCB0aGlzLnN0YXRlKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9zdGFibGUgPSB0aGlzLmRhdGEgIT09IHVuZGVmaW5lZDsvLyBzdGFibGUgaWYgaXQgaGF2ZSBpbml0aWFsIHJlc3VsdCBkYXRhXG4gICAgICAgICF0aGlzLl9zdGFibGUgJiYgdGhpcy5lbWl0KCd1bnN0YWJsZScsIHRoaXMuc3RhdGUpO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBnZXQgYSBCdWlsZGVyLWtleSBwYWlyIGZvciBTdG9yZTo6bWFwXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICAgKiBAcmV0dXJucyB7e3N0b3JlOiBTdG9yZSwgbmFtZTogKn19XG4gICAgICovXG4gICAgc3RhdGljIGFzKCBuYW1lICkge1xuICAgICAgICByZXR1cm4geyBzdG9yZTogdGhpcywgbmFtZSB9O1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBNYXAgYWxsIG5hbWVkIHN0b3JlcyBpbiB7a2V5c30gdG8gdGhlIHtvYmplY3R9J3Mgc3RhdGVcbiAgICAgKiBIb29rIGNvbXBvbmVudFdpbGxVbm1vdW50IChmb3IgcmVhY3QgY29tcCkgb3IgZGVzdHJveSB0byB1bkJpbmQgdGhlbSBhdXRvbWF0aWNhbGx5XG4gICAgICogQHN0YXRpY1xuICAgICAqIEBwYXJhbSBvYmplY3Qge1JlYWN0LkNvbXBvbmVudHxTdG9yZXwuLi59IHRhcmdldCBzdGF0ZSBhd2FyZSBvYmplY3RcbiAgICAgKiBAcGFyYW0ga2V5cyB7QXJyYXl9IEV4IDogW1wic2Vzc2lvblwiLCBcIm90aGVyU3RhdGljTmFtZWRTdG9yZTprZXlcIiwgc3RvcmUuYXMoJ2Fub3RoZXJLZXknKV1cbiAgICAgKi9cbiAgICBzdGF0aWMgbWFwKCBjb21wb25lbnQsIGtleXMsIGNvbnRleHQsIG9yaWdpbiwgc2V0SW5pdGlhbCA9IGZhbHNlICkge1xuICAgICAgICB2YXIgdGFyZ2V0UmV2cyAgICAgPSBjb21wb25lbnQuX3JldnMgfHwge307XG4gICAgICAgIHZhciB0YXJnZXRDb250ZXh0ICA9IGNvbXBvbmVudC5zdG9yZXMgfHwgKGNvbXBvbmVudC5zdG9yZXMgPSB7fSk7XG4gICAgICAgIHZhciBpbml0aWFsT3V0cHV0cyA9IHt9O1xuICAgICAgICBrZXlzICAgICAgICAgICAgICAgPSBpcy5hcnJheShrZXlzKSA/IFsuLi5rZXlzXSA6IFtrZXlzXTtcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICBjb250ZXh0ID0gY29udGV4dCB8fCBTdG9yZS5zdGF0aWNDb250ZXh0O1xuICAgICAgICBcbiAgICAgICAga2V5cyAgICAgICAgICAgPSBrZXlzLmZpbHRlcihcbiAgICAgICAgICAgIC8vIEB0b2RvIDogdXNlIHF1ZXJ5IHJlZnNcbiAgICAgICAgICAgIC8vIChzdG9yZSkoXFwuc3RvcmUpKihcXFsoXFwqfChwcm9wcylcXHcrKSspXFxdKT8oXFw6YWxpYXMpXG4gICAgICAgICAgICAoIGtleSApID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoICFrZXkgKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJOb3QgYSBtYXBwYWJsZSBzdG9yZSBpdGVtICdcIiArIGtleSArIFwiJyBpbiBcIiArIG9yaWdpbiArICcgISEnKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZXQgbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgYWxpYXMsXG4gICAgICAgICAgICAgICAgICAgIHN0b3JlO1xuICAgICAgICAgICAgICAgIGlmICgga2V5LnN0b3JlICYmIGtleS5uYW1lICkge1xuICAgICAgICAgICAgICAgICAgICBhbGlhcyA9IG5hbWUgPSBrZXkubmFtZTtcbiAgICAgICAgICAgICAgICAgICAgc3RvcmUgPSBrZXkuc3RvcmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKCBpcy5mbihrZXkpICkge1xuICAgICAgICAgICAgICAgICAgICBuYW1lID0gYWxpYXMgPSBrZXkubmFtZSB8fCBrZXkuZGVmYXVsdE5hbWU7XG4gICAgICAgICAgICAgICAgICAgIHN0b3JlID0ga2V5O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAga2V5ICAgPSBrZXkubWF0Y2goLyhbXFx3X10rKSg/OlxcOlxcWyhcXCopXFxdKT8oPzpcXDooXFwqKSk/Lyk7XG4gICAgICAgICAgICAgICAgICAgIG5hbWUgID0ga2V5WzBdO1xuICAgICAgICAgICAgICAgICAgICBzdG9yZSA9IGNvbnRleHQuc3RvcmVzW2tleVswXV07XG4gICAgICAgICAgICAgICAgICAgIGFsaWFzID0ga2V5WzFdID09ICcqJyA/IG51bGwgOiBrZXlbMl0gfHwga2V5WzBdOy8vIGFsbG93IGJpbmRpbmcgcHJvcHMgIChbKl0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmICggdGFyZ2V0UmV2c1tuYW1lXSApIHJldHVybiBmYWxzZTsvLyBpZ25vcmUgZGJsIHVzZXMgZm9yIG5vd1xuICAgICAgICAgICAgICAgIGlmICggIXN0b3JlICkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiTm90IGEgbWFwcGFibGUgc3RvcmUgaXRlbSAnXCIgKyBuYW1lICsgXCIvXCIgKyBhbGlhcyArIFwiJyBpbiBcIiArIG9yaWdpbiArICcgISEnLCBzdG9yZSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoIGlzLmZuKHN0b3JlKSApIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5fbW91bnQobmFtZSlcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQuc3RvcmVzW25hbWVdLmJpbmQoY29tcG9uZW50LCBhbGlhcywgc2V0SW5pdGlhbCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIGlmICggY29udGV4dC5fX2NvbnRleHRba2V5WzBdXS5zdGF0ZSApIHsvLyBkbyBzeW5jIHB1c2ggYWZ0ZXIgY29uc3RydWN0b3JcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGNvbnRleHQuX19jb250ZXh0W2tleVswXV0ucHVzaCgpO1xuICAgICAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzdG9yZS5iaW5kKGNvbXBvbmVudCwgYWxpYXMsIHNldEluaXRpYWwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0YXJnZXRSZXZzW2FsaWFzXSA9IHRhcmdldFJldnNbYWxpYXNdIHx8IHRydWU7XG4gICAgICAgICAgICAgICAgIXRhcmdldENvbnRleHRbbmFtZV0gJiYgKHRhcmdldENvbnRleHRbbmFtZV0gPSBjb250ZXh0LnN0b3Jlc1tuYW1lXSk7XG4gICAgICAgICAgICAgICAgaWYgKCBjb250ZXh0LnN0b3Jlc1tuYW1lXS5oYXNPd25Qcm9wZXJ0eSgnZGF0YScpIClcbiAgICAgICAgICAgICAgICAgICAgaW5pdGlhbE91dHB1dHNbbmFtZV0gPSBjb250ZXh0LmRhdGFbbmFtZV07XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHZhciBtaXhlZENXVW5tb3VudCxcbiAgICAgICAgICAgIHVuTW91bnRLZXkgPSBjb21wb25lbnQuaXNSZWFjdENvbXBvbmVudCA/IFwiY29tcG9uZW50V2lsbFVubW91bnRcIiA6IFwiZGVzdHJveVwiO1xuICAgICAgICBcbiAgICAgICAgaWYgKCBjb21wb25lbnQuaGFzT3duUHJvcGVydHkodW5Nb3VudEtleSkgKSB7XG4gICAgICAgICAgICBtaXhlZENXVW5tb3VudCA9IGNvbXBvbmVudFt1bk1vdW50S2V5XTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgY29tcG9uZW50W3VuTW91bnRLZXldID0gKCAuLi5hcmd6ICkgPT4ge1xuICAgICAgICAgICAgZGVsZXRlIGNvbXBvbmVudFt1bk1vdW50S2V5XTtcbiAgICAgICAgICAgIGlmICggbWl4ZWRDV1VubW91bnQgKVxuICAgICAgICAgICAgICAgIGNvbXBvbmVudFt1bk1vdW50S2V5XSA9IG1peGVkQ1dVbm1vdW50O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBrZXlzLm1hcChcbiAgICAgICAgICAgICAgICAoIGtleSApID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlhcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIGtleS5zdG9yZSAmJiBrZXkubmFtZSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWFzID0gbmFtZSA9IGtleS5uYW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmUgPSBrZXkuc3RvcmU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoIGlzLmZuKGtleSkgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lID0gYWxpYXMgPSBrZXkubmFtZSB8fCBrZXkuZGVmYXVsdE5hbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9yZSA9IGNvbnRleHQuc3RvcmVzW25hbWVdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5ICAgPSBrZXkuc3BsaXQoJzonKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUgID0ga2V5WzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmUgPSBjb250ZXh0LnN0b3Jlc1trZXlbMF1dO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpYXMgPSBrZXlbMV0gfHwga2V5WzBdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBzdG9yZSAmJiAhaXMuZm4oc3RvcmUpICYmIHN0b3JlLnVuQmluZChjb21wb25lbnQsIGFsaWFzKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICByZXR1cm4gY29tcG9uZW50W3VuTW91bnRLZXldICYmIGNvbXBvbmVudFt1bk1vdW50S2V5XSguLi5hcmd6KTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGluaXRpYWxPdXRwdXRzO1xuICAgIH1cbiAgICBcbiAgICBcbiAgICAvKipcbiAgICAgKiBPdmVycmlkYWJsZSBtZXRob2QgdG8ga25vdyBpZiBhIHN0YXRlIGNoYW5nZSBzaG91bGQgYmUgcHJvcGFnIHRvIHRoZSBsaXN0ZW5pbmcgc3RvcmVzICYgY29tcG9uZW50c1xuICAgICAqIElmIHN0YXRpYyBmb2xsb3cgaXMgZGVmaW5lZCwgc2hvdWxkUHJvcGFnIHdpbGwgcmV0dXJuIHRydWUgaWYgYW55IG9mIHRoZSBcImZvbGxvd1wiIGtleXMgd2FzIHVwZGF0ZWRcbiAgICAgKiBJZiBub3QgaXQgd2lsbCBhbHdheXMgcmV0dXJuIHRydWVcbiAgICAgKi9cbiAgICBzaG91bGRQcm9wYWcoIG5EYXRhcyApIHtcbiAgICAgICAgdmFyIF9zdGF0aWMgPSB0aGlzLmNvbnN0cnVjdG9yLCByLFxuICAgICAgICAgICAgY0RhdGFzICA9IHRoaXMuZGF0YTtcbiAgICAgICAgXG4gICAgICAgIC8vIGlmICggIWNTdGF0ZSApXG4gICAgICAgIC8vICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgaWYgKCAhY0RhdGFzICYmICghX3N0YXRpYy5mb2xsb3cgfHwgIV9zdGF0aWMuZm9sbG93Lmxlbmd0aCB8fFxuICAgICAgICAgICAgICAgIF9zdGF0aWMuZm9sbG93ICYmIF9zdGF0aWMuZm9sbG93LnJlZHVjZSgoIHIsIGkgKSA9PiAociB8fCBuRGF0YXMgJiYgbkRhdGFzW2ldKSwgZmFsc2UpKSApXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgXG4gICAgICAgIGlmICggaXMuYXJyYXkoX3N0YXRpYy5mb2xsb3cpIClcbiAgICAgICAgICAgIF9zdGF0aWMuZm9sbG93LmZvckVhY2goXG4gICAgICAgICAgICAgICAgKCBrZXkgKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHIgPSByIHx8IChuRGF0YXMgPyBjRGF0YXNba2V5XSAhPT0gbkRhdGFzW2tleV0gOiBjRGF0YXMgJiYgY0RhdGFzW2tleV0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgZWxzZSBpZiAoIF9zdGF0aWMuZm9sbG93ID09PSAnc3RyaWN0JyApXG4gICAgICAgICAgICByID0gbkRhdGFzID09PSBjRGF0YXM7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY0RhdGFzICYmIE9iamVjdC5rZXlzKGNEYXRhcykuZm9yRWFjaChcbiAgICAgICAgICAgICAgICAoIGtleSApID0+IHtcbiAgICAgICAgICAgICAgICAgICAgciA9IHIgfHwgKG5EYXRhcyA/IGNEYXRhc1trZXldICE9PSBuRGF0YXNba2V5XSA6IGNEYXRhcyAmJiBjRGF0YXNba2V5XSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgbkRhdGFzICYmIE9iamVjdC5rZXlzKG5EYXRhcykuZm9yRWFjaChcbiAgICAgICAgICAgICAgICAoIGtleSApID0+IHtcbiAgICAgICAgICAgICAgICAgICAgciA9IHIgfHwgKG5EYXRhcyA/IGNEYXRhc1trZXldICE9PSBuRGF0YXNba2V5XSA6IGNEYXRhcyAmJiBjRGF0YXNba2V5XSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gISFyO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBPdmVycmlkYWJsZSBhcHBsaWVyIC8gcmVtYXBwZXJcbiAgICAgKiBJZiBzdGF0ZSBvciBsYXN0UHVibGljU3RhdGUgYXJlIHNpbXBsZSBoYXNoIG1hcHMgYXBwbHkgd2lsbCByZXR1cm4gey4uLmRhdGEsIC4uLnN0YXRlfVxuICAgICAqIGlmIG5vdCBpdCB3aWxsIHJldHVybiB0aGUgbGFzdCBwcml2YXRlIHN0YXRlXG4gICAgICogQHBhcmFtIGRhdGFcbiAgICAgKiBAcGFyYW0gc3RhdGVcbiAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgKi9cbiAgICBhcHBseSggZGF0YSwgc3RhdGUsIGNoYW5nZXMgKSB7XG4gICAgICAgIHN0YXRlID0gc3RhdGUgfHwgdGhpcy5zdGF0ZTtcbiAgICAgICAgXG4gICAgICAgIGlmICggdGhpcy5yZWZpbmUgKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVmaW5lKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIFxuICAgICAgICBpZiAoICFkYXRhIHx8IGRhdGEuX19wcm90b19fICE9PSBvYmpQcm90byB8fCBzdGF0ZS5fX3Byb3RvX18gIT09IG9ialByb3RvIClcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgcmV0dXJuIHsgLi4uZGF0YSwgLi4uc3RhdGUgfVxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBAZGVwcmVjaWF0ZWRcbiAgICAgKiBAcGFyYW0gZGF0YVxuICAgICAqIEBwYXJhbSBzdGF0ZVxuICAgICAqIEBwYXJhbSBjaGFuZ2VzXG4gICAgICogQHJldHVybnMgeyp9XG4gICAgICovXG4gICAgcmVmaW5lKCBkYXRhLCBzdGF0ZSwgY2hhbmdlcyApIHtcbiAgICAgICAgc3RhdGUgPSBzdGF0ZSB8fCB0aGlzLnN0YXRlO1xuICAgICAgICBcbiAgICAgICAgaWYgKCAhZGF0YSB8fCBkYXRhLl9fcHJvdG9fXyAhPT0gb2JqUHJvdG8gfHwgc3RhdGUuX19wcm90b19fICE9PSBvYmpQcm90byApXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHJldHVybiB7IC4uLmRhdGEsIC4uLnN0YXRlIH1cbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogRGVib3VuY2UgdGhpcyBzdG9yZSBwcm9wYWdhdGlvbiAoICYgcmVkdWNpbmcgKVxuICAgICAqIEBwYXJhbSBjYlxuICAgICAqL1xuICAgIHN0YWJpbGl6ZSggY2IgKSB7XG4gICAgICAgIGNiICYmIHRoaXMub25jZSgnc3RhYmxlJywgY2IpO1xuICAgICAgICB0aGlzLl9zdGFibGUgJiYgdGhpcy5lbWl0KCd1bnN0YWJsZScsIHRoaXMuc3RhdGUsIHRoaXMuZGF0YSk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9zdGFibGUgPSBmYWxzZTtcbiAgICAgICAgXG4gICAgICAgIGlmICggdGhpcy5fc3RhYmlsaXplciApXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5fc3RhYmlsaXplcik7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9zdGFiaWxpemVyID0gc2V0VGltZW91dChcbiAgICAgICAgICAgIHRoaXMucHVzaC5iaW5kKFxuICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICAoKSA9PiB7Ly9AdG9kb1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgbGV0IHN0YWJsZSAgID0gdGhpcy5fc3RhYmxlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zdGFibGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAhc3RhYmxlICYmIHRoaXMuZW1pdCgnc3RhYmxlJywgdGhpcy5zdGF0ZSwgdGhpcy5kYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc3RhYmlsaXplciA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMucmVsZWFzZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICkpO1xuICAgIH1cbiAgICBcbiAgICBkaXNwYXRjaCggYWN0aW9uLCBkYXRhICkge1xuICAgICAgICBsZXQgeyBhY3Rpb25zIH0gPSB0aGlzLmNvbnN0cnVjdG9yLFxuICAgICAgICAgICAgbnM7XG4gICAgICAgIGlmICggYWN0aW9ucyAmJiBhY3Rpb25zW2FjdGlvbl0gKSB7XG4gICAgICAgICAgICBucyA9IGFjdGlvbnNbYWN0aW9uXS5jYWxsKHRoaXMsIGRhdGEpO1xuICAgICAgICAgICAgbnMgJiYgdGhpcy5zZXRTdGF0ZShucyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogUHVsbCBzdG9yZXMgaW4gdGhlIHByaXZhdGUgc3RhdGVcbiAgICAgKiBAcGFyYW0gc3RvcmVzICB7QXJyYXl9IChwYXNzZWQgdG8gU3RvcmU6Om1hcCkgRXggOiBbXCJzZXNzaW9uXCIsIFwib3RoZXJOYW1lZFN0b3JlOmtleVwiLCBvdGhlclN0b3JlLmFzKFwib3RoZXJLZXlcIildXG4gICAgICovXG4gICAgcHVsbCggc3RvcmVzLCBkb1dhaXQsIG9yaWdpbiApIHtcbiAgICAgICAgbGV0IGluaXRpYWxPdXRwdXRzID0gdGhpcy5jb250ZXh0T2JqLm1hcCh0aGlzLCBzdG9yZXMpO1xuICAgICAgICBpZiAoIGRvV2FpdCApIHtcbiAgICAgICAgICAgIHRoaXMud2FpdCgpO1xuICAgICAgICAgICAgc3RvcmVzLmZvckVhY2goKCBzICkgPT4gdGhpcy5jb250ZXh0W3NdICYmIHRoaXMud2FpdCh0aGlzLmNvbnRleHRbc10pKTtcbiAgICAgICAgICAgIHRoaXMucmVsZWFzZSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpbml0aWFsT3V0cHV0cztcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogQXBwbHkgYXBwbHkvcmVtYXAgb24gdGhlIHByaXZhdGUgc3RhdGUgJiBwdXNoIHRoZSByZXN1bHRpbmcgXCJwdWJsaWNcIiBzdGF0ZSB0byBmb2xsb3dlcnNcbiAgICAgKiBAcGFyYW0gY2JcbiAgICAgKi9cbiAgICBwdXNoKCBkYXRhLCBmb3JjZSwgY2IgKSB7XG4gICAgICAgIGNiICAgICAgICAgICAgPSBmb3JjZSA9PT0gdHJ1ZSA/IGNiIDogZm9yY2U7XG4gICAgICAgIGZvcmNlICAgICAgICAgPSBmb3JjZSA9PT0gdHJ1ZTtcbiAgICAgICAgdmFyIGkgICAgICAgICA9IDAsXG4gICAgICAgICAgICBtZSAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgbmV4dFN0YXRlID0gIWRhdGEgJiYgeyAuLi50aGlzLnN0YXRlLCAuLi50aGlzLl9jaGFuZ2VzU1cgfSB8fCB0aGlzLnN0YXRlLFxuICAgICAgICAgICAgbmV4dERhdGFzID0gZGF0YSB8fFxuICAgICAgICAgICAgICAgICh0aGlzLmlzQ29tcGxldGUobmV4dFN0YXRlKSA/IHRoaXMuYXBwbHkodGhpcy5kYXRhLCBuZXh0U3RhdGUsIHRoaXMuX2NoYW5nZXNTVykgOiB0aGlzLmRhdGEpO1xuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIHRoaXMuc3RhdGUgPSBuZXh0U3RhdGU7XG4gICAgICAgIGlmICggIWZvcmNlICYmXG4gICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgKCF0aGlzLmRhdGEgJiYgdGhpcy5kYXRhID09PSBuZXh0RGF0YXMpIHx8ICF0aGlzLnNob3VsZFByb3BhZyhuZXh0RGF0YXMpXG4gICAgICAgICAgICApXG4gICAgICAgICkge1xuICAgICAgICAgICAgY2IgJiYgY2IoKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdGhpcy5kYXRhID0gbmV4dERhdGFzO1xuICAgICAgICAvL3RoaXMuX19sb2Nrcy5hbGwrKztcbiAgICAgICAgdGhpcy53YWl0KCk7XG4gICAgICAgIHRoaXMucmVsZWFzZShjYik7XG4gICAgICAgIFxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBVcGRhdGUgdGhlIGN1cnJlbnQgcHJpdmF0ZSBzdGF0ZSAmIHB1c2ggaXQgb25jZSB0aGUgc3RvcmUgaXMgc3RhYmxlXG4gICAgICogQHBhcmFtIHBTdGF0ZVxuICAgICAqIEBwYXJhbSBjYlxuICAgICAqL1xuICAgIHNldFN0YXRlKCBwU3RhdGUsIGNiLCBzeW5jICkge1xuICAgICAgICB2YXIgaSAgICAgICA9IDAsIGNoYW5nZSxcbiAgICAgICAgICAgIGNoYW5nZXMgPSB0aGlzLl9jaGFuZ2VzU1cgPSB0aGlzLl9jaGFuZ2VzU1cgfHwge307XG4gICAgICAgIGZvciAoIHZhciBrIGluIHBTdGF0ZSApXG4gICAgICAgICAgICBpZiAoICF0aGlzLnN0YXRlIHx8IHBTdGF0ZS5oYXNPd25Qcm9wZXJ0eShrKVxuICAgICAgICAgICAgICAgICYmIChcbiAgICAgICAgICAgICAgICAgICAgcFN0YXRlW2tdICE9IHRoaXMuc3RhdGVba11cbiAgICAgICAgICAgICAgICAgICAgfHxcbiAgICAgICAgICAgICAgICAgICAgKHRoaXMuc3RhdGVba10gJiYgcFN0YXRlW2tdICYmIChwU3RhdGVba10uX3JldiAhPSB0aGlzLl9yZXZzW2tdKSkvLyByZXYvaGFzaCB1cGRhdGVcbiAgICAgICAgICAgICAgICApICkge1xuICAgICAgICAgICAgICAgIGNoYW5nZSAgICAgICAgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuX3JldnNba10gPSBwU3RhdGVba10gJiYgcFN0YXRlW2tdLl9yZXYgfHwgdHJ1ZTtcbiAgICAgICAgICAgICAgICBjaGFuZ2VzW2tdICAgID0gcFN0YXRlW2tdO1xuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKCBzeW5jICkge1xuICAgICAgICAgICAgdGhpcy5wdXNoKCk7XG4gICAgICAgICAgICBjYiAmJiBjYigpO1xuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoIGNoYW5nZSApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YWJpbGl6ZShjYik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGNiICYmIGNiKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSB0aGUgY3VycmVudCBwcml2YXRlIHN0YXRlICYgcHVzaCBpdCBvbmNlIHRoZSBzdG9yZSBpcyBzdGFibGVcbiAgICAgKiBAcGFyYW0gcFN0YXRlXG4gICAgICogQHBhcmFtIGNiXG4gICAgICovXG4gICAgc2V0U3RhdGVTeW5jKCBwU3RhdGUgKSB7XG4gICAgICAgIHZhciBpICAgICAgID0gMCwgY2hhbmdlLFxuICAgICAgICAgICAgY2hhbmdlcyA9IHRoaXMuX2NoYW5nZXNTVyA9IHRoaXMuX2NoYW5nZXNTVyB8fCB7fTtcbiAgICAgICAgZm9yICggdmFyIGsgaW4gcFN0YXRlIClcbiAgICAgICAgICAgIGlmICggIXRoaXMuc3RhdGUgfHwgcFN0YXRlLmhhc093blByb3BlcnR5KGspXG4gICAgICAgICAgICAgICAgJiYgKFxuICAgICAgICAgICAgICAgICAgICBwU3RhdGVba10gIT0gdGhpcy5zdGF0ZVtrXVxuICAgICAgICAgICAgICAgICAgICB8fFxuICAgICAgICAgICAgICAgICAgICAodGhpcy5zdGF0ZVtrXSAmJiBwU3RhdGVba10gJiYgKHBTdGF0ZVtrXS5fcmV2ICE9IHRoaXMuX3JldnNba10pKS8vIHJldi9oYXNoIHVwZGF0ZVxuICAgICAgICAgICAgICAgICkgKSB7XG4gICAgICAgICAgICAgICAgY2hhbmdlICAgICAgICA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5fcmV2c1trXSA9IHBTdGF0ZVtrXSAmJiBwU3RhdGVba10uX3JldiB8fCB0cnVlO1xuICAgICAgICAgICAgICAgIGNoYW5nZXNba10gICAgPSBwU3RhdGVba107XG4gICAgICAgICAgICB9XG4gICAgICAgIHRoaXMucHVzaCgpO1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBSZXBsYWNlIHRoZSBjdXJyZW50IHByaXZhdGUgc3RhdGUgJiBwdXNoIGl0IG9uY2UgdGhlIHN0b3JlIGlzIHN0YWJsZVxuICAgICAqIEBwYXJhbSBwU3RhdGVcbiAgICAgKiBAcGFyYW0gY2JcbiAgICAgKi9cbiAgICByZXBsYWNlU3RhdGUoIHBTdGF0ZSwgY2IgKSB7XG4gICAgICAgIHZhciBpICAgICAgPSAwLCBtZSA9IHRoaXM7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBwU3RhdGU7XG4gICAgICAgIFxuICAgICAgICB0aGlzLnN0YWJpbGl6ZShjYik7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIGdldCBhIHN0b3JlLWtleSBwYWlyIGZvciBTdG9yZTo6bWFwXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICAgKiBAcmV0dXJucyB7e3N0b3JlOiBTdG9yZSwgbmFtZTogKn19XG4gICAgICovXG4gICAgYXMoIG5hbWUgKSB7XG4gICAgICAgIHJldHVybiB7IHN0b3JlOiB0aGlzLCBuYW1lIH07XG4gICAgfVxuICAgIFxuICAgIG9uKCBsaXN0cyApIHtcbiAgICAgICAgaWYgKCAhaXMuc3RyaW5nKGxpc3RzKSAmJiBsaXN0cyApXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhsaXN0cykuZm9yRWFjaChrID0+IHN1cGVyLm9uKGssIGxpc3RzW2tdKSk7XG4gICAgICAgIGVsc2Ugc3VwZXIub24oLi4uYXJndW1lbnRzKTtcbiAgICB9XG4gICAgXG4gICAgcmVtb3ZlTGlzdGVuZXIoIGxpc3RzICkge1xuICAgICAgICBpZiAoICFpcy5zdHJpbmcobGlzdHMpICYmIGxpc3RzIClcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGxpc3RzKS5mb3JFYWNoKGsgPT4gc3VwZXIucmVtb3ZlTGlzdGVuZXIoaywgbGlzdHNba10pKTtcbiAgICAgICAgZWxzZSBzdXBlci5yZW1vdmVMaXN0ZW5lciguLi5hcmd1bWVudHMpO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiByZWxpbmsgYmluZGluZ3MgJiByZXF1aXJlc1xuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gICAgICogQHJldHVybnMge3tzdG9yZTogU3RvcmUsIG5hbWU6ICp9fVxuICAgICAqL1xuICAgIHJlbGluayggZnJvbSApIHtcbiAgICAgICAgbGV0IGNvbnRleHQgPSB0aGlzLmNvbnRleHRPYmosXG4gICAgICAgICAgICBfc3RhdGljID0gdGhpcy5jb25zdHJ1Y3RvcjtcbiAgICAgICAgaWYgKCBfc3RhdGljLnVzZSApIHtcbiAgICAgICAgICAgIC8vdG9kbyB1bmxpbmtcbiAgICAgICAgICAgIHRoaXMucHVsbChfc3RhdGljLnVzZSwgZmFsc2UsIGZyb20pO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAoIHRoaXMuX3JlcXVpcmUgKSB7XG4gICAgICAgICAgICB0aGlzLl9yZXF1aXJlLmZvckVhY2goXG4gICAgICAgICAgICAgICAgc3RvcmUgPT4gKFxuICAgICAgICAgICAgICAgICAgICB0aGlzLndhaXQoY29udGV4dC5fX2NvbnRleHRbc3RvcmVdKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogaXMgY29tcGxldGUgKGFsbCByZXF1aWVyZWQga2V5cyBhcmUgaGVyZSlcbiAgICAgKiBAcmV0dXJucyBib29sXG4gICAgICovXG4gICAgaXNDb21wbGV0ZSggc3RhdGUgPSB0aGlzLnN0YXRlICkge1xuICAgICAgICB2YXIgX3N0YXRpYyA9IHRoaXMuY29uc3RydWN0b3I7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAhdGhpcy5fcmVxdWlyZVxuICAgICAgICAgICAgfHwgIXRoaXMuX3JlcXVpcmUubGVuZ3RoXG4gICAgICAgICAgICB8fCBzdGF0ZSAmJiB0aGlzLl9yZXF1aXJlLnJlZHVjZShcbiAgICAgICAgICAgICAgICAoIHIsIGtleSApID0+IChyICYmIHN0YXRlW2tleV0pLFxuICAgICAgICAgICAgICAgIHRydWVcbiAgICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogaXMgc3RhYmxlXG4gICAgICogQHJldHVybnMgYm9vbFxuICAgICAqL1xuICAgIGlzU3RhYmxlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc3RhYmxlO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBVbiBiaW5kIHRoaXMgc3RvcmUgb2ZmIHRoZSBnaXZlbiBjb21wb25lbnQta2V5XG4gICAgICogQHBhcmFtIG9ialxuICAgICAqIEBwYXJhbSBrZXlcbiAgICAgKiBAcmV0dXJucyB7QXJyYXkuPCo+fVxuICAgICAqL1xuICAgIHVuQmluZCggb2JqLCBrZXkgKSB7XG4gICAgICAgIHZhciBmb2xsb3dlcnMgPSB0aGlzLl9mb2xsb3dlcnMsXG4gICAgICAgICAgICBpICAgICAgICAgPSBmb2xsb3dlcnMgJiYgZm9sbG93ZXJzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBmb2xsb3dlcnMgJiYgaS0tIClcbiAgICAgICAgICAgIGlmICggZm9sbG93ZXJzW2ldWzBdID09IG9iaiAmJiBmb2xsb3dlcnNbaV1bMV0gPT0ga2V5IClcbiAgICAgICAgICAgICAgICByZXR1cm4gZm9sbG93ZXJzLnNwbGljZShpLCAxKTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogQmluZCB0aGlzIHN0b3JlIGNoYW5nZXMgdG8gdGhlIGdpdmVuIGNvbXBvbmVudC1rZXlcbiAgICAgKiBAcGFyYW0gb2JqIHtSZWFjdC5Db21wb25lbnR8U3RvcmV8ZnVuY3Rpb24pXG4gICAgICogQHBhcmFtIGtleSB7c3RyaW5nfSBvcHRpb25hbCBrZXkgd2hlcmUgdG8gbWFwIHRoZSBwdWJsaWMgc3RhdGVcbiAgICAgKi9cbiAgICBiaW5kKCBvYmosIGtleSwgc2V0SW5pdGlhbCA9IHRydWUgKSB7XG4gICAgICAgIHRoaXMuX2ZvbGxvd2Vycy5wdXNoKFtvYmosIGtleV0pO1xuICAgICAgICBpZiAoIHNldEluaXRpYWwgJiYgdGhpcy5kYXRhICYmIHRoaXMuX3N0YWJsZSApIHtcbiAgICAgICAgICAgIGlmICggdHlwZW9mIG9iaiAhPSBcImZ1bmN0aW9uXCIgKSB7XG4gICAgICAgICAgICAgICAgaWYgKCBrZXkgKSBvYmouc2V0U3RhdGUoeyBba2V5XTogdGhpcy5kYXRhIH0pO1xuICAgICAgICAgICAgICAgIGVsc2Ugb2JqLnNldFN0YXRlKHRoaXMuZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBvYmoodGhpcy5kYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBvbmNlKCdzdGFibGUnLCBjYilcbiAgICAgKiBAcGFyYW0gb2JqIHtSZWFjdC5Db21wb25lbnR8U3RvcmV8ZnVuY3Rpb24pXG4gICAgICogQHBhcmFtIGtleSB7c3RyaW5nfSBvcHRpb25hbCBrZXkgd2hlcmUgdG8gbWFwIHRoZSBwdWJsaWMgc3RhdGVcbiAgICAgKi9cbiAgICB0aGVuKCBjYiApIHtcbiAgICAgICAgaWYgKCB0aGlzLl9zdGFibGUgKVxuICAgICAgICAgICAgcmV0dXJuIGNiKG51bGwsIHRoaXMuZGF0YSk7XG4gICAgICAgIHRoaXMub25jZSgnc3RhYmxlJywgZSA9PiBjYihudWxsLCB0aGlzLmRhdGEpKTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogQWRkIGEgbG9jayBzbyB0aGUgc3RvcmUgd2lsbCBub3QgcHJvcGFnIGl0IHN0YXRlIHVudGlsbCByZWxlYXNlKCkgaXMgY2FsbFxuICAgICAqIEBwYXJhbSBwcmV2aW91cyB7U3RvcmV8bnVtYmVyfEFycmF5fSBAb3B0aW9uYWwgd2YgdG8gd2FpdCwgcmVsZWFzZXMgdG8gd2FpdCBvciBhcnJheSBvZiBzdHVmZiB0byB3YWl0XG4gICAgICogQHJldHVybnMge1Rhc2tGbG93fVxuICAgICAqL1xuICAgIHdhaXQoIHByZXZpb3VzICkge1xuICAgICAgICBpZiAoIHR5cGVvZiBwcmV2aW91cyA9PSBcIm51bWJlclwiIClcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9fbG9ja3MuYWxsICs9IHByZXZpb3VzO1xuICAgICAgICBpZiAoIGlzLmFycmF5KHByZXZpb3VzKSApXG4gICAgICAgICAgICByZXR1cm4gcHJldmlvdXMubWFwKHRoaXMud2FpdC5iaW5kKHRoaXMpKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX3N0YWJsZSAmJiB0aGlzLmVtaXQoJ3Vuc3RhYmxlJywgdGhpcy5zdGF0ZSwgdGhpcy5kYXRhKTtcbiAgICAgICAgdGhpcy5fc3RhYmxlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX19sb2Nrcy5hbGwrKztcbiAgICAgICAgXG4gICAgICAgIGxldCByZWFzb24gPSBpcy5zdHJpbmcocHJldmlvdXMpID8gcHJldmlvdXMgOiBudWxsO1xuICAgICAgICBpZiAoIHJlYXNvbiApIHtcbiAgICAgICAgICAgIHRoaXMuX19sb2Nrc1tyZWFzb25dID0gdGhpcy5fX2xvY2tzW3JlYXNvbl0gfHwgMDtcbiAgICAgICAgICAgIHRoaXMuX19sb2Nrc1tyZWFzb25dKys7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCBwcmV2aW91cyAmJiBpcy5mbihwcmV2aW91cy50aGVuKSApIHtcbiAgICAgICAgICAgIHByZXZpb3VzLnRoZW4odGhpcy5yZWxlYXNlLmJpbmQodGhpcywgbnVsbCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBEZWNyZWFzZSBsb2NrcyBmb3IgdGhpcyBzdG9yZSwgaWYgaXQgcmVhY2ggMCAmIGl0IGhhdmUgYSBwdWJsaWMgc3RhdGUsXG4gICAgICogaXQgd2lsbCBiZSBwcm9wYWdhdGVkIHRvIHRoZSBmb2xsb3dlcnMsXG4gICAgICogdGhlbiwgYWxsIHN0dWZmIHBhc3NlZCB0byBcInRoZW5cIiBjYWxsIGJhY2sgd2lsbCBiZSBleGVjIC8gcmVsZWFzZWRcbiAgICAgKiBAcGFyYW0gZGVzeW5jXG4gICAgICogQHJldHVybnMgeyp9XG4gICAgICovXG4gICAgcmVsZWFzZSggcmVhc29uLCBjYiApIHtcbiAgICAgICAgdmFyIF9zdGF0aWMgPSB0aGlzLmNvbnN0cnVjdG9yO1xuICAgICAgICBsZXQgaSAgICAgICA9IDAsIHdhc1N0YWJsZSA9IHRoaXMuX3N0YWJsZTtcbiAgICAgICAgXG4gICAgICAgIGlmICggaXMuZm4ocmVhc29uKSApIHtcbiAgICAgICAgICAgIGNiICAgICA9IHJlYXNvbjtcbiAgICAgICAgICAgIHJlYXNvbiA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmICggcmVhc29uICkge1xuICAgICAgICAgICAgaWYgKCB0aGlzLl9fbG9ja3NbcmVhc29uXSA9PSAwIClcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiUmVsZWFzZSBtb3JlIHRoYW4gbG9ja2luZyAhXCIsIHJlYXNvbik7XG4gICAgICAgICAgICB0aGlzLl9fbG9ja3NbcmVhc29uXSA9IHRoaXMuX19sb2Nrc1tyZWFzb25dIHx8IDA7XG4gICAgICAgICAgICB0aGlzLl9fbG9ja3NbcmVhc29uXS0tO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAoICFyZWFzb24gJiYgdGhpcy5fX2xvY2tzLmFsbCA9PSAwIClcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJSZWxlYXNlIG1vcmUgdGhhbiBsb2NraW5nICFcIik7XG4gICAgICAgIFxuICAgICAgICBpZiAoICEtLXRoaXMuX19sb2Nrcy5hbGwgJiYgdGhpcy5kYXRhICYmIHRoaXMuaXNDb21wbGV0ZSgpICkge1xuICAgICAgICAgICAgdGhpcy5fc3RhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuX3JldiAgICA9IDEgKyAodGhpcy5fcmV2ICsgMSkgJSAxMDAwMDAwOy8vXG4gICAgICAgICAgICBpZiAoIHRoaXMuX2ZvbGxvd2Vycy5sZW5ndGggKVxuICAgICAgICAgICAgICAgIHRoaXMuX2ZvbGxvd2Vycy5mb3JFYWNoKCggZm9sbG93ZXIgKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICggIXRoaXMuZGF0YSApIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCB0eXBlb2YgZm9sbG93ZXJbMF0gPT0gXCJmdW5jdGlvblwiICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9sbG93ZXJbMF0odGhpcy5kYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY2IgJiYgaSsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9sbG93ZXJbMF0uc2V0U3RhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGZvbGxvd2VyWzFdKSA/IHsgW2ZvbGxvd2VyWzFdXTogdGhpcy5kYXRhIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB0aGlzLmRhdGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2NiICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAoKSA9PiAoISgtLWkpICYmIGNiKCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8pXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvL2Vsc2VcbiAgICAgICAgICAgICF3YXNTdGFibGUgJiYgdGhpcy5lbWl0KCdzdGFibGUnLCB0aGlzLmRhdGEpO1xuICAgICAgICAgICAgdGhpcy5lbWl0KCd1cGRhdGUnLCB0aGlzLmRhdGEpO1xuICAgICAgICAgICAgY2IgJiYgY2IoKVxuICAgICAgICAgICAgLy9cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGNiICYmIHRoaXMudGhlbihjYik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBcbiAgICByZXRhaW4oIHJlYXNvbiApIHtcbiAgICAgICAgdGhpcy5fX3JldGFpbnMuYWxsKys7XG4gICAgICAgIGlmICggcmVhc29uICkge1xuICAgICAgICAgICAgdGhpcy5fX3JldGFpbnNbcmVhc29uXSA9IHRoaXMuX19yZXRhaW5zW3JlYXNvbl0gfHwgMDtcbiAgICAgICAgICAgIHRoaXMuX19yZXRhaW5zW3JlYXNvbl0rKztcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBkaXNwb3NlKCByZWFzb24gKSB7XG4gICAgICAgIC8vY29uc29sZS53YXJuKFwiZGlzcG9zZVwiLCByZWFzb24sIHRoaXMuX19yZXRhaW5zKTtcbiAgICAgICAgaWYgKCByZWFzb24gKSB7XG4gICAgICAgICAgICBpZiAoICF0aGlzLl9fcmV0YWluc1tyZWFzb25dIClcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJEaXNwb3NlIG1vcmUgdGhhbiByZXRhaW5pbmcgIVwiKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5fX3JldGFpbnNbcmVhc29uXSA9IHRoaXMuX19yZXRhaW5zW3JlYXNvbl0gfHwgMDtcbiAgICAgICAgICAgIHRoaXMuX19yZXRhaW5zW3JlYXNvbl0tLTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIHRoaXMuX19yZXRhaW5zLmFsbCA9PSAwIClcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkRpc3Bvc2UgbW9yZSB0aGFuIHJldGFpbmluZyAhXCIpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fX3JldGFpbnMuYWxsLS07XG4gICAgICAgIFxuICAgICAgICBpZiAoICF0aGlzLl9fcmV0YWlucy5hbGwgKSB7XG4gICAgICAgICAgICBpZiAoIHRoaXMuX3BlcnNpc3RlbmNlVG0gKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZGVzdHJveVRNICYmIGNsZWFyVGltZW91dCh0aGlzLl9kZXN0cm95VE0pO1xuICAgICAgICAgICAgICAgIHRoaXMuX2Rlc3Ryb3lUTSA9IHNldFRpbWVvdXQoXG4gICAgICAgICAgICAgICAgICAgIGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fZGVzdHJveVRNID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGhlbihzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhdGhpcy5fX3JldGFpbnMuYWxsICYmIHRoaXMuZGVzdHJveSgpXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcGVyc2lzdGVuY2VUbVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRoZW4ocyA9PiAoIXRoaXMuX19yZXRhaW5zLmFsbCAmJiB0aGlzLmRlc3Ryb3koKSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIC8vICBjb25zb2xlLmxvZyhcImRlc3Ryb3lcIiwgdGhpcy5fdWlkKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuZW1pdCgnZGVzdHJveScsIHRoaXMpO1xuICAgICAgICBpZiAoIHRoaXMuX3N0YWJpbGl6ZXIgKVxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX3N0YWJpbGl6ZXIpO1xuICAgICAgICBcbiAgICAgICAgaWYgKCB0aGlzLl9mb2xsb3dlcnMubGVuZ3RoIClcbiAgICAgICAgICAgIHRoaXMuX2ZvbGxvd2Vycy5mb3JFYWNoKFxuICAgICAgICAgICAgICAgICggZm9sbG93ZXIgKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICggdHlwZW9mIGZvbGxvd2VyWzBdICE9PSBcImZ1bmN0aW9uXCIgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIGZvbGxvd2VyWzBdLnN0b3JlcyApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGZvbGxvd2VyWzBdLnN0b3Jlc1tmb2xsb3dlclsxXV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICB0aGlzLl9mb2xsb3dlcnMubGVuZ3RoID0gMDtcbiAgICAgICAgdGhpcy5kZWFkICAgICAgICAgICAgICA9IHRydWU7XG4gICAgICAgIHRoaXMuX3JldnMgICAgICAgICAgICAgPSB0aGlzLmRhdGEgPSB0aGlzLnN0YXRlID0gdGhpcy5jb250ZXh0ID0gbnVsbDtcbiAgICAgICAgdGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoKTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1N0b3JlLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==