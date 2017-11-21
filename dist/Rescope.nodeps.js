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
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
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
	
	var is = __webpack_require__(2),
	    EventEmitter = __webpack_require__(3),
	    shortid = __webpack_require__(4),
	    __proto__push = function __proto__push(target, id, parent) {
	    var fn = function fn() {};
	    fn.prototype = parent ? new parent["_" + id]() : target[id] || {};
	    target[id] = new fn();
	    target['_' + id] = fn;
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
	     * @deprecated
	     * @returns {*}
	     */
	
	
	    _createClass(Context, [{
	        key: 'mount',
	
	
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
	            var store = this.__context[id],
	                ctx = void 0;
	            if (is.fn(store)) {
	                this.__context[id] = new store(this, { state: state, data: data });
	            } else {
	                if (state !== undefined && data === undefined) store.setState(state);else if (state !== undefined) store.state = state;
	
	                if (data !== undefined) store.push(data);
	            }
	
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
	            return this;
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
	                if (!is.string(id)) id = id.name;
	                id = id.split(':');
	                id[0] = id[0].split('.');
	                data[id[1] || id[0][id[0].length - 1]] = _this7.stores[id[0][0]] && _this7.stores[id[0][0]].retrieve(id[0].splice(1));
	                return data;
	            }, {});
	        }
	    }, {
	        key: 'retrieve',
	        value: function retrieve() {
	            var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
	
	            path = is.string(path) ? path.split('.') : path;
	            return path && this.stores[path[0]] && this.stores[path[0]].retrieve(path.splice(1));
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
	                if (!is.fn(_this10.__context[id])) _this10.__context[id].trigger(action, data);
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
	                        _this17.then(function (s) {
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
	    }, {
	        key: 'datas',
	        get: function get() {
	            return this.data;
	        }
	    }]);
	
	    return Context;
	}(EventEmitter);
	
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
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
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
	    objProto = Object.getPrototypeOf({});
	
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
	            context = argz[0] instanceof Context ? argz.shift() : _static.context ? Context.getContext(_static.context) : is.string(argz[0]) ? Context.getContext(argz.shift()) : _static.staticContext,
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
	
	
	        _this.name = name;
	
	        if (context.stores) {
	            _this.contextObj = context;
	            _this.context = context.stores;
	        } else {
	            _this.contextObj = new Context(context);
	            _this.context = context.stores;
	        }
	
	        _this._rev = 0;
	        _this._revs = {};
	        _this.stores = {};
	        _this._require = [];
	
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
	                return ref[2] + ':' + _static.use[key];
	            }) : []));
	        }
	
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
	            if (_this.shouldApply(_this.state) && _this.data === undefined) _this.data = _this.apply(_this.data, _this.state, _this.state);
	        }
	        if (_this.data !== undefined) {
	            _this._stable = true; // stable if it have initial result data ?
	            _this._rev++;
	        } else {
	            _this._stable = false;
	            if (!_this.state && (!_this._use || !_this._use.length)) {
	                console.warn("Rescope store '", _this.name, "' have no initial data, state or use. It can't stabilize...");
	            }
	        }
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
	            r = !cDatas && nDatas;
	            // if ( !cState )
	            //     return true;
	            //if ( !cDatas && (!_static.follow || !_static.follow.length ||
	            //        _static.follow && _static.follow.reduce(( r, i ) => (r || nDatas && nDatas[i]), false)) )
	            //    return true;
	            //
	            //if ( is.array(_static.follow) )
	            //    _static.follow.forEach(
	            //        ( key ) => {
	            //            r = r || (nDatas ? cDatas[key] !== nDatas[key] : cDatas && cDatas[key])
	            //        }
	            //    );
	            //else if ( _static.follow === 'strict' )
	            //    r = nDatas === cDatas;
	            //else {
	            cDatas && Object.keys(cDatas).forEach(function (key) {
	                r = r || (nDatas ? cDatas[key] !== nDatas[key] : cDatas && cDatas[key]);
	            });
	            nDatas && Object.keys(nDatas).forEach(function (key) {
	                r = r || (nDatas ? cDatas[key] !== nDatas[key] : cDatas && cDatas[key]);
	            });
	            //}
	            //
	            return !!r;
	        }
	    }, {
	        key: 'shouldApply',
	        value: function shouldApply() {
	            var _this2 = this;
	
	            var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state;
	
	            var _static = this.constructor;
	
	            return this.isComplete(state) && is.array(_static.follow) ? _static.follow.reduce(function (r, i) {
	                return r || state && state[i];
	            }, false) : _static.follow ? Object.keys(_static.follow).reduce(function (r, i) {
	                return r || state && is.fn(_static.follow[i]) && _static.follow[i].call(_this2, state[i]) || _static.follow[i] && state[i] !== _this2.state[i];
	            }, false) : true;
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
	            var _this3 = this;
	
	            cb && this.once('stable', cb);
	            this._stable && this.emit('unstable', this.state, this.data);
	
	            this._stable = false;
	
	            if (this._stabilizer) clearTimeout(this._stabilizer);
	
	            this._stabilizer = setTimeout(this.push.bind(this, null, function () {
	                //@todo
	
	                var stable = _this3._stable;
	                _this3._stable = true;
	                !stable && _this3.emit('stable', _this3.state, _this3.data);
	                _this3._stabilizer = null;
	                // this.release();
	            }));
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
	            var _contextObj;
	
	            for (var _len = arguments.length, argz = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	                argz[_key - 1] = arguments[_key];
	            }
	
	            (_contextObj = this.contextObj).dispatch.apply(_contextObj, [action].concat(argz));
	        }
	    }, {
	        key: 'trigger',
	        value: function trigger(action) {
	            var actions = this.constructor.actions,
	                ns = void 0;
	
	            if (actions && actions[action]) {
	                var _actions$action;
	
	                for (var _len2 = arguments.length, argz = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	                    argz[_key2 - 1] = arguments[_key2];
	                }
	
	                ns = (_actions$action = actions[action]).call.apply(_actions$action, [this].concat(argz));
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
	            var _this4 = this;
	
	            var initialOutputs = this.contextObj.map(this, stores);
	            if (doWait) {
	                this.wait();
	                stores.forEach(function (s) {
	                    return _this4.context[s] && _this4.wait(_this4.context[s]);
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
	                nextDatas = data || this.apply(this.data, nextState, this._changesSW);
	
	            this.state = nextState;
	            if (!force && (!this.data && this.data === nextDatas || !this.shouldPropag(nextDatas))) {
	                cb && cb();
	                return false;
	            }
	
	            this.data = nextDatas;
	            this._changesSW = {};
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
	            }if (!this.shouldApply(_extends({}, this.state, changes))) {
	                return;
	            }
	
	            if (sync) {
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
	            var _this5 = this;
	
	            if (!is.string(lists) && lists) Object.keys(lists).forEach(function (k) {
	                return _get(Store.prototype.__proto__ || Object.getPrototypeOf(Store.prototype), 'on', _this5).call(_this5, k, lists[k]);
	            });else _get(Store.prototype.__proto__ || Object.getPrototypeOf(Store.prototype), 'on', this).apply(this, arguments);
	        }
	    }, {
	        key: 'removeListener',
	        value: function removeListener(lists) {
	            var _this6 = this;
	
	            if (!is.string(lists) && lists) Object.keys(lists).forEach(function (k) {
	                return _get(Store.prototype.__proto__ || Object.getPrototypeOf(Store.prototype), 'removeListener', _this6).call(_this6, k, lists[k]);
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
	            var _this7 = this;
	
	            var context = this.contextObj,
	                _static = this.constructor;
	            if (_static.use) {
	                //todo unlink
	                this.pull(_static.use, false, from);
	            }
	
	            if (this._require) {
	                this._require.forEach(function (store) {
	                    return _this7.wait(context.__context[store]);
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
	
	            if (this._stable) return cb(null, this.data);
	            this.once('stable', function (e) {
	                return cb(null, _this8.data);
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
	            var _this9 = this;
	
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
	                    var data = follower[2] ? _this9.retrieve(follower[2]) : _this9.data;
	                    if (!data) return;
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
	                this.emit('update', this.data);
	                cb && cb();
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
	            var _this10 = this;
	
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
	                        _this10._destroyTM = null;
	                        _this10.then(function (s) {
	                            !_this10.__retains.all && _this10.destroy();
	                        });
	                    }, this._persistenceTm);
	                } else {
	                    this.then(function (s) {
	                        return !_this10.__retains.all && _this10.destroy();
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
	    }, {
	        key: 'datas',
	
	
	        /**
	         * @deprecated
	         * @returns {*}
	         */
	        get: function get() {
	            return this.data;
	        }
	
	        /**
	         * @deprecated
	         * @returns {*}
	         */
	        ,
	        set: function set(v) {
	            console.groupCollapsed("Rescope store : Setting datas is depreciated, use data");
	            console.log(new Error().stack);
	            console.groupEnd();
	
	            this.data = v;
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
	                    path = void 0,
	                    store = void 0;
	                if (key.store && key.name) {
	                    alias = name = key.name;
	                    store = key.store;
	                } else if (is.fn(key)) {
	                    name = alias = key.name || key.defaultName;
	                    store = key;
	                } else {
	                    key = key.match(/([\w_]+)((?:\.[\w_]+)*)(?:\:([\w_]+))?/);
	                    name = key[1];
	                    path = key[2] && key[2].split('.').slice(1);
	                    store = context.stores[key[1]];
	                    alias = key[3] || path && path[path.length - 1] || key[1];
	                }
	
	                if (targetRevs[name]) return false; // ignore dbl uses for now
	
	                if (!store) {
	                    console.error("Not a mappable store item '" + name + "/" + alias + "' in " + origin + ' !!', store);
	                    return false;
	                } else if (is.fn(store)) {
	                    context._mount(name);
	
	                    context.stores[name].bind(component, alias, setInitial, path);
	                } else {
	                    store.bind(component, alias, setInitial, path);
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
	                        path = void 0,
	                        store = void 0;
	                    if (key.store && key.name) {
	                        alias = name = key.name;
	                        store = key.store;
	                    } else if (is.fn(key)) {
	                        name = alias = key.name || key.defaultName;
	                        store = context.stores[name];
	                    } else {
	                        key = key.match(/([\w_]+)((?:\.[\w_]+)*)(?:\:([\w_]+))?/);
	                        name = key[1];
	                        path = key[2] && key[2].split('.');
	                        store = context.stores[key[1]];
	                        alias = key[3] || path && path[path.length - 1] || key[1];
	                    }
	
	                    store && !is.fn(store) && store.unBind(component, alias, path);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMzg3MWQ2YmEwODcyMGRiY2Q3NTEiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Jlc2NvcGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbnRleHQuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaXNcIiIsIndlYnBhY2s6Ly8vLi9zcmMvRW1pdHRlci5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzaG9ydGlkXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL1N0b3JlLmpzIl0sIm5hbWVzIjpbIlN0b3JlIiwiQ29udGV4dCIsImlzIiwicmVxdWlyZSIsIkV2ZW50RW1pdHRlciIsInNob3J0aWQiLCJfX3Byb3RvX19wdXNoIiwidGFyZ2V0IiwiaWQiLCJwYXJlbnQiLCJmbiIsInByb3RvdHlwZSIsIm9wZW5Db250ZXh0cyIsImNvbnRleHRzIiwic2tleSIsImFycmF5Iiwic29ydCIsImEiLCJiIiwiZmlyc3RuYW1lIiwiam9pbiIsInN0b3Jlc01hcCIsInN0YXRlIiwiZGF0YSIsIm5hbWUiLCJkZWZhdWx0TWF4TGlzdGVuZXJzIiwicGVyc2lzdGVuY2VUbSIsImF1dG9EZXN0cm95IiwiX21heExpc3RlbmVycyIsImNvbnN0cnVjdG9yIiwiX2lkIiwiZ2VuZXJhdGUiLCJyZWdpc3RlciIsIl9pc0xvY2FsSWQiLCJfcGVyc2lzdGVuY2VUbSIsInN0b3JlcyIsImRlYWQiLCJFcnJvciIsIl9hZGRDaGlsZCIsInNvdXJjZXMiLCJfY2hpbGRDb250ZXh0cyIsIl9fcmV0YWlucyIsImFsbCIsIl9fbG9ja3MiLCJfX2xpc3RlbmluZyIsIl9fY29udGV4dCIsIl9fbWl4ZWQiLCJfX21peGVkTGlzdCIsIl9mb2xsb3dlcnMiLCJyZXRhaW4iLCJfc3RhYmxlIiwid2FpdCIsIm9uIiwiX19wYXJlbnRMaXN0IiwicmVsZWFzZSIsIl9wcm9wYWciLCJzZXRUaW1lb3V0IiwiZGlzcG9zZSIsInN0b3Jlc0xpc3QiLCJmb3JFYWNoIiwiX21vdW50IiwiayIsImFyZ3VtZW50cyIsInN0b3JlIiwicmVkdWNlIiwibW91bnRlZCIsImN0eCIsInVuZGVmaW5lZCIsInNldFN0YXRlIiwicHVzaCIsIl93YXRjaFN0b3JlIiwiaXNTdGFibGUiLCJwcm9wYWciLCJ0YXJnZXRDdHgiLCJsaXN0cyIsInJlbGluayIsIk9iamVjdCIsImtleXMiLCJzaW5nbGV0b24iLCJzcmNDdHgiLCJleHRlcm5hbCIsImZvcmNlIiwibGN0eCIsIl9zdG9yZXMiLCJjb25zb2xlIiwiaW5mbyIsIl9fcHJvdG9fXyIsImRlZmluZVByb3BlcnR5IiwiZ2V0IiwiX3N0YXRlIiwic2V0IiwidiIsIl9kYXRhIiwib2JqIiwia2V5IiwiYXMiLCJzZXRJbml0aWFsIiwibGFzdFJldnMiLCJyZUtleSIsIm1hcCIsInN0cmluZyIsInJldnMiLCJtb3VudCIsImdldFVwZGF0ZXMiLCJmb2xsb3dlcnMiLCJpIiwibGVuZ3RoIiwic3BsaWNlIiwidG8iLCJiaW5kIiwibWl4ZWRDV1VubW91bnQiLCJ1bk1vdW50S2V5IiwiaXNSZWFjdENvbXBvbmVudCIsImhhc093blByb3BlcnR5IiwidW5CaW5kIiwic3BsaXQiLCJyZXRyaWV2ZSIsInBhdGgiLCJzdG9yZXNSZXZNYXAiLCJsb2NhbCIsIl9yZXYiLCJ1cGRhdGVkIiwiZ2V0U3RvcmVzUmV2cyIsIm91dHB1dCIsImZsYWdzX3N0YXRlcyIsImZsYWdzX2RhdGEiLCJfZmxhZ3Nfc3RhdGVzIiwiX2ZsYWdzX2RhdGEiLCJmbGFncyIsInIiLCJmbGFnIiwidGVzdCIsImFjdGlvbiIsInRyaWdnZXIiLCJkaXNwYXRjaCIsImNiIiwib25jZSIsInF1aWV0IiwicmVhc29uIiwiZW1pdCIsImVycm9yIiwiX3N0YWJpbGl6ZXJUTSIsImNsZWFyVGltZW91dCIsIl9wcm9wYWdUTSIsImNoaWxkcyIsIl9nZXRBbGxDaGlsZHMiLCJpbmRleE9mIiwiX2Rlc3Ryb3lUTSIsInRoZW4iLCJkZXN0cm95IiwicmVtb3ZlTGlzdGVuZXIiLCJzaGlmdCIsIl9ybUNoaWxkIiwiY29udGV4dCIsIkVtaXR0ZXIiLCJfZXZlbnRzIiwiZXZ0IiwidW4iLCJhcmd6Iiwib2JqUHJvdG8iLCJnZXRQcm90b3R5cGVPZiIsIl9zdGF0aWMiLCJnZXRDb250ZXh0Iiwic3RhdGljQ29udGV4dCIsImNmZyIsIndhdGNocyIsInVzZSIsImFwcGx5IiwiaW5pdGlhbFN0YXRlIiwiX3VpZCIsIl9vblN0YWJpbGl6ZSIsIndhcm4iLCJjb250ZXh0T2JqIiwiX3JldnMiLCJfcmVxdWlyZSIsIl91c2UiLCJyZWYiLCJtYXRjaCIsInJlZjIiLCJzaG91bGRBcHBseSIsIm5EYXRhcyIsImNEYXRhcyIsImlzQ29tcGxldGUiLCJmb2xsb3ciLCJjYWxsIiwiY2hhbmdlcyIsInJlZmluZSIsIl9zdGFiaWxpemVyIiwic3RhYmxlIiwiYWN0aW9ucyIsIm5zIiwiZG9XYWl0Iiwib3JpZ2luIiwiaW5pdGlhbE91dHB1dHMiLCJzIiwibWUiLCJuZXh0U3RhdGUiLCJfY2hhbmdlc1NXIiwibmV4dERhdGFzIiwic2hvdWxkUHJvcGFnIiwicFN0YXRlIiwic3luYyIsImNoYW5nZSIsInN0YWJpbGl6ZSIsImZyb20iLCJwdWxsIiwicHJldmlvdXMiLCJ3YXNTdGFibGUiLCJmb2xsb3dlciIsInJlbW92ZUFsbExpc3RlbmVycyIsImdyb3VwQ29sbGFwc2VkIiwibG9nIiwic3RhY2siLCJncm91cEVuZCIsImNvbXBvbmVudCIsInRhcmdldFJldnMiLCJ0YXJnZXRDb250ZXh0IiwiZmlsdGVyIiwiYWxpYXMiLCJkZWZhdWx0TmFtZSIsInNsaWNlIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM1QkE7Ozs7QUFDQTs7Ozs7O0FB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dkIsSUFBSSxDQUFKLEtBQVVBLElBQUksQ0FBSixFQUFPcUIsS0FBUCxDQUFhLEdBQWIsQ0FBbEI7QUFDQXBELGlDQUFRMEYsUUFBUXRILE1BQVIsQ0FBZTJELElBQUksQ0FBSixDQUFmLENBQVI7QUFDQTRILGlDQUFRNUgsSUFBSSxDQUFKLEtBQVV1QixRQUFRQSxLQUFLQSxLQUFLWCxNQUFMLEdBQWMsQ0FBbkIsQ0FBbEIsSUFBMkNaLElBQUksQ0FBSixDQUFuRDtBQUNIOztBQUVEL0IsOEJBQVMsQ0FBQzdELEdBQUdRLEVBQUgsQ0FBTXFELEtBQU4sQ0FBVixJQUEwQkEsTUFBTW1ELE1BQU4sQ0FBYW9HLFNBQWIsRUFBd0JJLEtBQXhCLEVBQStCckcsSUFBL0IsQ0FBMUI7QUFDSCxrQkF0Qkw7QUF3QkEsd0JBQU9pRyxVQUFVdkcsVUFBVixLQUF5QnVHLFVBQVV2RyxVQUFWLDZCQUFoQztBQUNILGNBOUJEOztBQWdDQSxvQkFBT2tGLGNBQVA7QUFDSDs7OztHQXhROEI3TCxZOztBQUFkSixNLENBRVZzSyxHLEdBQTZCLEU7QUFGbkJ0SyxNLENBS1ZtSyxhLEdBQTZCLElBQUlsSyxPQUFKLENBQVksRUFBWixFQUFnQixFQUFFTyxJQUFJLFFBQU4sRUFBaEIsQztBQUxuQlIsTSxDQU1Wd0ssWSxHQUE2QnJHLFM7QUFObkJuRSxNLENBT1ZzQixLLEdBQTZCNkMsUztBQVBuQm5FLE0sQ0FZSHlCLG1CLEdBQXNCLEc7QUFabkJ6QixNLENBb0JIMEIsYSxHQUFzQixLO21CQXBCbkIxQixLIiwiZmlsZSI6ImRpc3QvUmVzY29wZS5ub2RlcHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMzg3MWQ2YmEwODcyMGRiY2Q3NTEiLCIvKlxuICogQ29weXJpZ2h0IChjKSAgMjAxNyBDYWlwaSBMYWJzIC5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuICovXG5cbmltcG9ydCBDb250ZXh0IGZyb20gXCIuL0NvbnRleHRcIjtcbmltcG9ydCBTdG9yZSBmcm9tIFwiLi9TdG9yZVwiO1xuXG5Db250ZXh0LlN0b3JlID0gU3RvcmU7XG5cbmV4cG9ydCBkZWZhdWx0IHtTdG9yZSwgQ29udGV4dH07XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9SZXNjb3BlLmpzIiwiLypcbiAqIENvcHlyaWdodCAoYykgIDIwMTcgQ2FpcGkgTGFicyAuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiAqXG4gKiBAYXV0aG9yIDogTmF0aGFuYWVsIEJyYXVuXG4gKiBAY29udGFjdCA6IGNhaXBpbGFic0BnbWFpbC5jb21cbiAqL1xuXG5cbnZhciBpcyAgICAgICAgICAgICAgPSByZXF1aXJlKCdpcycpLFxuICAgIEV2ZW50RW1pdHRlciAgICA9IHJlcXVpcmUoJy4vRW1pdHRlcicpLFxuICAgIHNob3J0aWQgICAgICAgICA9IHJlcXVpcmUoJ3Nob3J0aWQnKVxuICAgICwgX19wcm90b19fcHVzaCA9ICggdGFyZ2V0LCBpZCwgcGFyZW50ICkgPT4ge1xuICAgICAgICBsZXQgZm4gICAgICAgICAgID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB9O1xuICAgICAgICBmbi5wcm90b3R5cGUgICAgID0gcGFyZW50ID8gbmV3IHBhcmVudFtcIl9cIiArIGlkXSgpIDogdGFyZ2V0W2lkXSB8fCB7fTtcbiAgICAgICAgdGFyZ2V0W2lkXSAgICAgICA9IG5ldyBmbigpO1xuICAgICAgICB0YXJnZXRbJ18nICsgaWRdID0gZm47XG4gICAgfSxcbiAgICBvcGVuQ29udGV4dHMgICAgPSB7fTtcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250ZXh0IGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgICBzdGF0aWMgcGVyc2lzdGVuY2VUbSA9IDE7Ly8gaWYgPiAwLCB3aWxsIHdhaXQgJ3BlcnNpc3RlbmNlVG0nIG1zIGJlZm9yZSBkZXN0cm95IHdoZW4gZGlzcG9zZSByZWFjaCAwXG4gICAgc3RhdGljIFN0b3JlICAgICAgICAgPSBudWxsO1xuICAgIHN0YXRpYyBjb250ZXh0cyAgICAgID0gb3BlbkNvbnRleHRzOy8vIGFsbCBhY3RpdmUgY29udGV4dHNcbiAgICBcbiAgICBzdGF0aWMgZ2V0Q29udGV4dCggY29udGV4dHMgKSB7XG4gICAgICAgIGxldCBza2V5ID0gaXMuYXJyYXkoY29udGV4dHMpID8gY29udGV4dHMuc29ydCgoIGEsIGIgKSA9PiB7XG4gICAgICAgICAgICBpZiAoIGEuZmlyc3RuYW1lIDwgYi5maXJzdG5hbWUgKSByZXR1cm4gLTE7XG4gICAgICAgICAgICBpZiAoIGEuZmlyc3RuYW1lID4gYi5maXJzdG5hbWUgKSByZXR1cm4gMTtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9KS5qb2luKCc6OicpIDogY29udGV4dHM7XG4gICAgICAgIHJldHVybiBvcGVuQ29udGV4dHNbc2tleV0gPSBvcGVuQ29udGV4dHNbc2tleV0gfHwgbmV3IENvbnRleHQoe30sIHsgaWQ6IHNrZXkgfSk7XG4gICAgfTtcbiAgICBcbiAgICAvKipcbiAgICAgKiBJbml0IGEgUmVzY29wZSBjb250ZXh0XG4gICAgICpcbiAgICAgKiBAcGFyYW0gc3RvcmVzTWFwIHtPYmplY3R9IE9iamVjdCB3aXRoIHRoZSBvcmlnaW4gc3RvcmVzXG4gICAgICogQHBhcmFtIGlkIHtzdHJpbmd9IEBvcHRpb25hbCBpZCAoIGlmIHRoaXMgaWQgZXhpc3Qgc3RvcmVzTWFwIHdpbGwgYmUgbWVyZ2Ugb24gdGhlICdpZCcgY29udGV4dClcbiAgICAgKiBAcGFyYW0gcGFyZW50XG4gICAgICogQHBhcmFtIHN0YXRlXG4gICAgICogQHBhcmFtIGRhdGFcbiAgICAgKiBAcGFyYW0gbmFtZVxuICAgICAqIEBwYXJhbSBkZWZhdWx0TWF4TGlzdGVuZXJzXG4gICAgICogQHBhcmFtIHBlcnNpc3RlbmNlVG0ge251bWJlcikgaWYgPiAwLCB3aWxsIHdhaXQgJ3BlcnNpc3RlbmNlVG0nIG1zIGJlZm9yZSBkZXN0cm95IHdoZW4gZGlzcG9zZSByZWFjaCAwXG4gICAgICogQHBhcmFtIGF1dG9EZXN0cm95ICB7Ym9vbH0gd2lsbCB0cmlnZ2VyIHJldGFpbiAmIGRpc3Bvc2UgYWZ0ZXIgc3RhcnRcbiAgICAgKiBAcmV0dXJucyB7Q29udGV4dH1cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvciggc3RvcmVzTWFwLCB7IGlkLCBwYXJlbnQsIHN0YXRlLCBkYXRhLCBuYW1lLCBkZWZhdWx0TWF4TGlzdGVuZXJzLCBwZXJzaXN0ZW5jZVRtLCBhdXRvRGVzdHJveSB9ID0ge30gKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9tYXhMaXN0ZW5lcnMgPSBkZWZhdWx0TWF4TGlzdGVuZXJzIHx8IHRoaXMuY29uc3RydWN0b3IuZGVmYXVsdE1heExpc3RlbmVycztcbiAgICAgICAgdGhpcy5faWQgICAgICAgICAgID0gaWQgPSBpZCB8fCAoXCJfX19fX1wiICsgc2hvcnRpZC5nZW5lcmF0ZSgpKTtcbiAgICAgICAgXG4gICAgICAgIGlmICggb3BlbkNvbnRleHRzW2lkXSApIHtcbiAgICAgICAgICAgIG9wZW5Db250ZXh0c1tpZF0ucmVnaXN0ZXIoc3RvcmVzTWFwKTtcbiAgICAgICAgICAgIHJldHVybiBvcGVuQ29udGV4dHNbaWRdXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIG9wZW5Db250ZXh0c1tpZF0gICAgPSB0aGlzO1xuICAgICAgICB0aGlzLl9pc0xvY2FsSWQgICAgID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fcGVyc2lzdGVuY2VUbSA9IHBlcnNpc3RlbmNlVG0gfHwgdGhpcy5jb25zdHJ1Y3Rvci5wZXJzaXN0ZW5jZVRtO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5zdG9yZXMgPSB7fTtcbiAgICAgICAgdGhpcy5zdGF0ZSAgPSB7fTtcbiAgICAgICAgdGhpcy5kYXRhICAgPSB7fTtcbiAgICAgICAgXG4gICAgICAgIGlmICggcGFyZW50ICYmIHBhcmVudC5kZWFkIClcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbid0IHVzZSBhIGRlYWQgY29udGV4dCBhcyBwYXJlbnQgIVwiKTtcbiAgICAgICAgXG4gICAgICAgIF9fcHJvdG9fX3B1c2godGhpcywgJ3N0b3JlcycsIHBhcmVudCk7XG4gICAgICAgIF9fcHJvdG9fX3B1c2godGhpcywgJ3N0YXRlJywgcGFyZW50KTtcbiAgICAgICAgX19wcm90b19fcHVzaCh0aGlzLCAnZGF0YScsIHBhcmVudCk7XG4gICAgICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuICAgICAgICBcbiAgICAgICAgaWYgKCBwYXJlbnQgKSB7XG4gICAgICAgICAgICBwYXJlbnQuX2FkZENoaWxkKHRoaXMpO1xuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRoaXMuc291cmNlcyAgICAgICAgPSBbXTtcbiAgICAgICAgdGhpcy5fY2hpbGRDb250ZXh0cyA9IFtdO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fX3JldGFpbnMgICA9IHsgYWxsOiAwIH07XG4gICAgICAgIHRoaXMuX19sb2NrcyAgICAgPSB7IGFsbDogMSB9O1xuICAgICAgICB0aGlzLl9fbGlzdGVuaW5nID0ge307XG4gICAgICAgIHRoaXMuX19jb250ZXh0ICAgPSB7fTtcbiAgICAgICAgdGhpcy5fX21peGVkICAgICA9IFtdO1xuICAgICAgICB0aGlzLl9fbWl4ZWRMaXN0ID0gW107XG4gICAgICAgIHRoaXMuX2ZvbGxvd2VycyAgPSBbXTtcbiAgICAgICAgaWYgKCBwYXJlbnQgKSB7XG4gICAgICAgICAgICBwYXJlbnQucmV0YWluKFwiaXNNeVBhcmVudFwiKTtcbiAgICAgICAgICAgICFwYXJlbnQuX3N0YWJsZSAmJiB0aGlzLndhaXQoXCJ3YWl0aW5nUGFyZW50XCIpO1xuICAgICAgICAgICAgcGFyZW50Lm9uKHRoaXMuX19wYXJlbnRMaXN0ID0ge1xuICAgICAgICAgICAgICAgICdzdGFibGUnICA6IHMgPT4gdGhpcy5yZWxlYXNlKFwid2FpdGluZ1BhcmVudFwiKSxcbiAgICAgICAgICAgICAgICAndW5zdGFibGUnOiBzID0+IHRoaXMud2FpdChcIndhaXRpbmdQYXJlbnRcIiksXG4gICAgICAgICAgICAgICAgJ3VwZGF0ZScgIDogcyA9PiB0aGlzLl9wcm9wYWcoKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyB0aGlzLnJlZ2lzdGVyKHBhcmVudC5fX2NvbnRleHQsIHN0YXRlLCBkYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIHRoaXMucmVnaXN0ZXIoc3RvcmVzTWFwLCBzdGF0ZSwgZGF0YSk7XG4gICAgICAgIHRoaXMuX19sb2Nrcy5hbGwtLTtcbiAgICAgICAgdGhpcy5fc3RhYmxlID0gIXRoaXMuX19sb2Nrcy5hbGw7XG4gICAgICAgIFxuICAgICAgICBpZiAoIGF1dG9EZXN0cm95IClcbiAgICAgICAgICAgIHNldFRpbWVvdXQoXG4gICAgICAgICAgICAgICAgdG0gPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJldGFpbihcImF1dG9EZXN0cm95XCIpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpc3Bvc2UoXCJhdXRvRGVzdHJveVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApXG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIEBkZXByZWNhdGVkXG4gICAgICogQHJldHVybnMgeyp9XG4gICAgICovXG4gICAgZ2V0IGRhdGFzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKlxuICAgICAqIE1vdW50IHRoZSBzdG9yZXMgaW4gc3RvcmVzTGlzdCwgaW4gdGhpcyBjb250ZXh0IG9yIGluIGl0cyBwYXJlbnRzIG9yIG1peGVkIGNvbnRleHRzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc3RvcmVzTGlzdCB7c3RyaW5nfHN0b3JlUmVmfSBTdG9yZSBuYW1lLCBBcnJheSBvZiBTdG9yZSBuYW1lcywgb3IgUmVzY29wZSBzdG9yZSByZWYgZnJvbSBTdG9yZTo6YXMgb3JcbiAgICAgKiAgICAgU3RvcmU6YXNcbiAgICAgKiBAcGFyYW0gc3RhdGVcbiAgICAgKiBAcGFyYW0gZGF0YVxuICAgICAqIEByZXR1cm5zIHtDb250ZXh0fVxuICAgICAqL1xuICAgIG1vdW50KCBzdG9yZXNMaXN0LCBzdGF0ZSwgZGF0YSApIHtcbiAgICAgICAgaWYgKCBpcy5hcnJheShzdG9yZXNMaXN0KSApIHtcbiAgICAgICAgICAgIHN0b3Jlc0xpc3QuZm9yRWFjaChrID0+IHRoaXMuX21vdW50KGssIHN0YXRlICYmIHN0YXRlW2tdLCBkYXRhICYmIGRhdGFba10pKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX21vdW50KC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIFxuICAgIF9tb3VudCggaWQsIHN0YXRlLCBkYXRhICkge1xuICAgICAgICBpZiAoIHR5cGVvZiBpZCAhPT0gJ3N0cmluZycgKSB7XG4gICAgICAgICAgICB0aGlzLnJlZ2lzdGVyKHsgW2lkLm5hbWVdOiBpZC5zdG9yZSB9KTtcbiAgICAgICAgICAgIGlkID0gaWQubmFtZTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKCAhdGhpcy5fX2NvbnRleHRbaWRdICkgey8vYXNrIG1peGVkIHx8IHBhcmVudFxuICAgICAgICAgICAgaWYgKCB0aGlzLl9fbWl4ZWQucmVkdWNlKCggbW91bnRlZCwgY3R4ICkgPT4gKG1vdW50ZWQgfHwgY3R4Ll9tb3VudChpZCwgc3RhdGUsIGRhdGEpKSwgZmFsc2UpIHx8XG4gICAgICAgICAgICAgICAgIXRoaXMucGFyZW50IClcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJlbnQuX21vdW50KC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHN0b3JlID0gdGhpcy5fX2NvbnRleHRbaWRdLCBjdHg7XG4gICAgICAgIGlmICggaXMuZm4oc3RvcmUpICkge1xuICAgICAgICAgICAgdGhpcy5fX2NvbnRleHRbaWRdID0gbmV3IHN0b3JlKHRoaXMsIHsgc3RhdGUsIGRhdGEgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoIHN0YXRlICE9PSB1bmRlZmluZWQgJiYgZGF0YSA9PT0gdW5kZWZpbmVkIClcbiAgICAgICAgICAgICAgICBzdG9yZS5zZXRTdGF0ZShzdGF0ZSk7XG4gICAgICAgICAgICBlbHNlIGlmICggc3RhdGUgIT09IHVuZGVmaW5lZCApXG4gICAgICAgICAgICAgICAgc3RvcmUuc3RhdGUgPSBzdGF0ZTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKCBkYXRhICE9PSB1bmRlZmluZWQgKVxuICAgICAgICAgICAgICAgIHN0b3JlLnB1c2goZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICB0aGlzLl93YXRjaFN0b3JlKGlkKTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiB0aGlzLl9fY29udGV4dFtpZF07XG4gICAgfVxuICAgIFxuICAgIF93YXRjaFN0b3JlKCBpZCwgc3RhdGUsIGRhdGEgKSB7XG4gICAgICAgIGlmICggIXRoaXMuX19jb250ZXh0W2lkXSApIHsvL2FzayBtaXhlZCB8fCBwYXJlbnRcbiAgICAgICAgICAgIGlmICggdGhpcy5fX21peGVkLnJlZHVjZSgoIG1vdW50ZWQsIGN0eCApID0+IChtb3VudGVkIHx8IGN0eC5fd2F0Y2hTdG9yZShpZCwgc3RhdGUsIGRhdGEpKSwgZmFsc2UpIHx8XG4gICAgICAgICAgICAgICAgIXRoaXMucGFyZW50IClcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJlbnQuX3dhdGNoU3RvcmUoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoICF0aGlzLl9fbGlzdGVuaW5nW2lkXSAmJiAhaXMuZm4odGhpcy5fX2NvbnRleHRbaWRdKSApIHtcbiAgICAgICAgICAgICF0aGlzLl9fY29udGV4dFtpZF0uaXNTdGFibGUoKSAmJiB0aGlzLndhaXQoaWQpO1xuICAgICAgICAgICAgdGhpcy5fX2NvbnRleHRbaWRdLm9uKFxuICAgICAgICAgICAgICAgIHRoaXMuX19saXN0ZW5pbmdbaWRdID0ge1xuICAgICAgICAgICAgICAgICAgICAnZGVzdHJveScgOiBzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl9fbGlzdGVuaW5nW2lkXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX19jb250ZXh0W2lkXSA9IHRoaXMuX19jb250ZXh0W2lkXS5jb25zdHJ1Y3RvcjtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgJ3VwZGF0ZScgIDogcyA9PiB0aGlzLnByb3BhZygpLFxuICAgICAgICAgICAgICAgICAgICAnc3RhYmxlJyAgOiBzID0+IHRoaXMucmVsZWFzZShpZCksXG4gICAgICAgICAgICAgICAgICAgICd1bnN0YWJsZSc6IHMgPT4gdGhpcy53YWl0KGlkKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBNaXggdGFyZ2V0Q3R4IG9uIHRoaXMgY29udGV4dFxuICAgICAqIE1peGVkIGNvbnRleHQgcGFyZW50cyBhcmUgTk9UIG1hcHBlZFxuICAgICAqIEBwYXJhbSB0YXJnZXRDdHhcbiAgICAgKi9cbiAgICBtaXhpbiggdGFyZ2V0Q3R4ICkge1xuICAgICAgICBsZXQgcGFyZW50ID0gdGhpcy5wYXJlbnQsIGxpc3RzO1xuICAgICAgICB0aGlzLl9fbWl4ZWQucHVzaCh0YXJnZXRDdHgpXG4gICAgICAgIHRhcmdldEN0eC5yZXRhaW4oXCJtaXhlZFRvXCIpO1xuICAgICAgICBpZiAoICF0YXJnZXRDdHguX3N0YWJsZSApXG4gICAgICAgICAgICB0aGlzLndhaXQodGFyZ2V0Q3R4Ll9pZCk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9fbWl4ZWRMaXN0LnB1c2gobGlzdHMgPSB7XG4gICAgICAgICAgICAnc3RhYmxlJyAgOiBzID0+IHRoaXMucmVsZWFzZSh0YXJnZXRDdHguX2lkKSxcbiAgICAgICAgICAgICd1bnN0YWJsZSc6IHMgPT4gdGhpcy53YWl0KHRhcmdldEN0eC5faWQpLFxuICAgICAgICAgICAgJ3VwZGF0ZScgIDogcyA9PiB0aGlzLl9wcm9wYWcoKVxuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuc3RvcmVzID0ge307XG4gICAgICAgIHRoaXMuc3RhdGUgID0ge307XG4gICAgICAgIHRoaXMuZGF0YSAgID0ge307XG4gICAgICAgIHRhcmdldEN0eC5vbihsaXN0cyk7XG4gICAgICAgIF9fcHJvdG9fX3B1c2godGhpcywgJ3N0b3JlcycsIHBhcmVudCk7XG4gICAgICAgIF9fcHJvdG9fX3B1c2godGhpcywgJ3N0YXRlJywgcGFyZW50KTtcbiAgICAgICAgX19wcm90b19fcHVzaCh0aGlzLCAnZGF0YScsIHBhcmVudCk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLnJlbGluayh0aGlzLl9fY29udGV4dCwgdGhpcywgZmFsc2UsIHRydWUpO1xuICAgICAgICB0aGlzLl9fbWl4ZWQuZm9yRWFjaChcbiAgICAgICAgICAgIGN0eCA9PiB7XG4gICAgICAgICAgICAgICAgX19wcm90b19fcHVzaCh0aGlzLCAnc3RvcmVzJyk7XG4gICAgICAgICAgICAgICAgX19wcm90b19fcHVzaCh0aGlzLCAnc3RhdGUnKTtcbiAgICAgICAgICAgICAgICBfX3Byb3RvX19wdXNoKHRoaXMsICdkYXRhJyk7XG4gICAgICAgICAgICAgICAgY3R4LnJlbGluayhjdHguX19jb250ZXh0LCB0aGlzLCB0cnVlLCB0cnVlKVxuICAgICAgICAgICAgfVxuICAgICAgICApXG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIFJlZ2lzdGVyIHN0b3JlcyBpbiBzdG9yZXNNYXAgJiBsaW5rIHRoZW0gaW4gdGhlIHByb3Rvc1xuICAgICAqIEBwYXJhbSBzdG9yZXNNYXBcbiAgICAgKiBAcGFyYW0gc3RhdGVcbiAgICAgKiBAcGFyYW0gZGF0YVxuICAgICAqL1xuICAgIHJlZ2lzdGVyKCBzdG9yZXNNYXAsIHN0YXRlID0ge30sIGRhdGEgPSB7fSApIHtcbiAgICAgICAgdGhpcy5yZWxpbmsoc3RvcmVzTWFwLCB0aGlzLCBmYWxzZSwgZmFsc2UsIHN0YXRlLCBkYXRhKTtcbiAgICAgICAgT2JqZWN0LmtleXMoc3RvcmVzTWFwKS5mb3JFYWNoKFxuICAgICAgICAgICAgaWQgPT4ge1xuICAgICAgICAgICAgICAgIGlmICggaXMuZm4oc3RvcmVzTWFwW2lkXSkgKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0b3Jlc01hcFtpZF0uc2luZ2xldG9uICYmIHRoaXMuX21vdW50KGlkLCBzdGF0ZVtpZF0sIGRhdGFbaWRdKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fd2F0Y2hTdG9yZShpZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICApXG4gICAgICAgIFxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBNYXAgc3JjQ3R4IHN0b3JlJ3Mgb24gdGFyZ2V0Q3R4IGhlYWRlcnMgcHJvdG8nc1xuICAgICAqIEBwYXJhbSBzcmNDdHhcbiAgICAgKiBAcGFyYW0gdGFyZ2V0Q3R4XG4gICAgICogQHBhcmFtIHN0YXRlXG4gICAgICogQHBhcmFtIGRhdGFcbiAgICAgKi9cbiAgICByZWxpbmsoIHNyY0N0eCwgdGFyZ2V0Q3R4ID0gdGhpcywgZXh0ZXJuYWwsIGZvcmNlLCBzdGF0ZSA9IHt9LCBkYXRhID0ge30gKSB7XG4gICAgICAgIGxldCBsY3R4ID0gdGFyZ2V0Q3R4Ll9zdG9yZXMucHJvdG90eXBlO1xuICAgICAgICBPYmplY3Qua2V5cyhzcmNDdHgpXG4gICAgICAgICAgICAgIC5mb3JFYWNoKFxuICAgICAgICAgICAgICAgICAgaWQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGlmICggIWZvcmNlICYmIHRhcmdldEN0eC5fX2NvbnRleHRbaWRdID09PSBzcmNDdHhbaWRdIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldEN0eC5fX2NvbnRleHRbaWRdICYmICh0YXJnZXRDdHguX19jb250ZXh0W2lkXS5jb25zdHJ1Y3RvciA9PT0gc3JjQ3R4W2lkXSApIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgIGlmICggIWZvcmNlICYmIHRhcmdldEN0eC5fX2NvbnRleHRbaWRdICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoICFleHRlcm5hbCAmJiAhaXMuZm4odGFyZ2V0Q3R4Ll9fY29udGV4dFtpZF0pICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5pbmZvKFwiUmVzY29wZSBTdG9yZSA6IFwiLCBpZCwgXCIgYWxyZWFkeSBleGlzdCBpbiB0aGlzIGNvbnRleHQgISAoIHRyeSBfX3Byb3RvX18gaG90IHBhdGNoIClcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRDdHguX19jb250ZXh0W2lkXS5fX3Byb3RvX18gPSBzcmNDdHhbaWRdLnByb3RvdHlwZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmICggIWV4dGVybmFsICYmIGlzLmZuKHRhcmdldEN0eC5fX2NvbnRleHRbaWRdKSApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRDdHguX19jb250ZXh0W2lkXSA9IHNyY0N0eFtpZF07XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKCAhZm9yY2UgJiYgIWV4dGVybmFsIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fX2NvbnRleHRbaWRdID0gc3JjQ3R4W2lkXTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxjdHgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXQ6ICgpID0+IHRoaXMuX19jb250ZXh0W2lkXVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldEN0eC5fc3RhdGUucHJvdG90eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0OiAoKSA9PiAodGhpcy5fX2NvbnRleHRbaWRdICYmIHRoaXMuX19jb250ZXh0W2lkXS5zdGF0ZSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXQ6ICggdiApID0+ICh0aGlzLl9tb3VudChpZCwgdikpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0Q3R4Ll9kYXRhLnByb3RvdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldDogKCkgPT4gKHRoaXMuX19jb250ZXh0W2lkXSAmJiB0aGlzLl9fY29udGV4dFtpZF0uZGF0YSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXQ6ICggdiApID0+ICh0aGlzLl9tb3VudChpZCwgdW5kZWZpbmVkLCB2KSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIClcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogQmluZCBzdG9yZXMgZnJvbSB0aGlzIGNvbnRleHQsIGhpcyBwYXJlbnRzIGFuZCBtaXhlZCBjb250ZXh0XG4gICAgICpcbiAgICAgKiBAcGFyYW0gb2JqIHtSZWFjdC5Db21wb25lbnR8U3RvcmV8ZnVuY3Rpb259XG4gICAgICogQHBhcmFtIGtleSB7c3RyaW5nKn0gc3RvcmVzIGtleXMgdG8gYmluZCB1cGRhdGVzXG4gICAgICogQHBhcmFtIGFzXG4gICAgICogQHBhcmFtIHNldEluaXRpYWw9dHJ1ZSB7Ym9vbH0gZmFsc2UgdG8gbm90IHByb3BhZyBpbml0aWFsIHZhbHVlXG4gICAgICovXG4gICAgYmluZCggb2JqLCBrZXksIGFzLCBzZXRJbml0aWFsID0gdHJ1ZSApIHtcbiAgICAgICAgbGV0IGxhc3RSZXZzLCBkYXRhLCByZUtleTtcbiAgICAgICAgaWYgKCBrZXkgJiYgIWlzLmFycmF5KGtleSkgKVxuICAgICAgICAgICAga2V5ID0gW2tleV07XG4gICAgICAgIFxuICAgICAgICBpZiAoIGFzID09PSBmYWxzZSB8fCBhcyA9PT0gdHJ1ZSApIHtcbiAgICAgICAgICAgIHNldEluaXRpYWwgPSBhcztcbiAgICAgICAgICAgIGFzICAgICAgICAgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZUtleSA9IGtleS5tYXAoaWQgPT4gKGlzLnN0cmluZyhpZCkgPyBpZCA6IGlkLm5hbWUpKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX2ZvbGxvd2Vycy5wdXNoKFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIG9iaixcbiAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgYXMgfHwgdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIGxhc3RSZXZzID0gcmVLZXkgJiYgcmVLZXkucmVkdWNlKCggcmV2cywgaWQgKSA9PiAocmV2c1tpZF0gPSAwLCByZXZzKSwge30pXG4gICAgICAgICAgICBdKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMubW91bnQoa2V5KTtcbiAgICAgICAgXG4gICAgICAgIGlmICggc2V0SW5pdGlhbCAmJiB0aGlzLl9zdGFibGUgKSB7XG4gICAgICAgICAgICBkYXRhID0gdGhpcy5nZXRVcGRhdGVzKGxhc3RSZXZzKTtcbiAgICAgICAgICAgIGlmICggIWRhdGEgKSByZXR1cm47XG4gICAgICAgICAgICBpZiAoIHR5cGVvZiBvYmogIT0gXCJmdW5jdGlvblwiICkge1xuICAgICAgICAgICAgICAgIGlmICggYXMgKSBvYmouc2V0U3RhdGUoeyBbYXNdOiBkYXRhIH0pO1xuICAgICAgICAgICAgICAgIGVsc2Ugb2JqLnNldFN0YXRlKGRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgb2JqKGRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBVbiBiaW5kIHRoaXMgY29udGV4dCBvZmYgdGhlIGdpdmVuIGNvbXBvbmVudC1rZXlzXG4gICAgICogQHBhcmFtIG9ialxuICAgICAqIEBwYXJhbSBrZXlcbiAgICAgKiBAcmV0dXJucyB7QXJyYXkuPCo+fVxuICAgICAqL1xuICAgIHVuQmluZCggb2JqLCBrZXksIGFzICkge1xuICAgICAgICB2YXIgZm9sbG93ZXJzID0gdGhpcy5fZm9sbG93ZXJzLFxuICAgICAgICAgICAgaSAgICAgICAgID0gZm9sbG93ZXJzICYmIGZvbGxvd2Vycy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggZm9sbG93ZXJzICYmIGktLSApXG4gICAgICAgICAgICBpZiAoIGZvbGxvd2Vyc1tpXVswXSA9PT0gb2JqICYmICgnJyArIGZvbGxvd2Vyc1tpXVsxXSkgPT0gKCcnICsga2V5KSAmJlxuICAgICAgICAgICAgICAgIGZvbGxvd2Vyc1tpXVsyXSA9PSBhcyApXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZvbGxvd2Vycy5zcGxpY2UoaSwgMSk7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIE1vdW50IHRoZSBzdG9yZXMgaW4gc3RvcmVzTGlzdCBmcm9tIHRoaXMgY29udGV4dCwgaXRzIHBhcmVudHMgYW5kIG1peGVkIGNvbnRleHRcbiAgICAgKiBCaW5kIHRoZW0gdG8gJ3RvJ1xuICAgICAqIEhvb2sgJ3RvJyBzbyBpdCB3aWxsIGF1dG8gdW5iaW5kIG9uICdkZXN0cm95JyBvciAnY29tcG9uZW50V2lsbFVubW91bnQnXG4gICAgICogQHBhcmFtIHRvXG4gICAgICogQHBhcmFtIHN0b3Jlc0xpc3RcbiAgICAgKiBAcGFyYW0gYmluZFxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IEluaXRpYWwgb3V0cHV0cyBvZiB0aGUgc3RvcmVzIGluICdzdG9yZXNMaXN0J1xuICAgICAqL1xuICAgIG1hcCggdG8sIHN0b3Jlc0xpc3QsIGJpbmQgPSB0cnVlICkge1xuICAgICAgICBsZXQgU3RvcmUgID0gdGhpcy5jb25zdHJ1Y3Rvci5TdG9yZTtcbiAgICAgICAgc3RvcmVzTGlzdCA9IGlzLmFycmF5KHN0b3Jlc0xpc3QpID8gc3RvcmVzTGlzdCA6IFtzdG9yZXNMaXN0XTtcbiAgICAgICAgdGhpcy5tb3VudChzdG9yZXNMaXN0KTtcbiAgICAgICAgaWYgKCBiaW5kICYmIHRvIGluc3RhbmNlb2YgU3RvcmUgKSB7XG4gICAgICAgICAgICBTdG9yZS5tYXAodG8sIHN0b3Jlc0xpc3QsIHRoaXMsIHRoaXMsIGZhbHNlKVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCBiaW5kICkge1xuICAgICAgICAgICAgdGhpcy5iaW5kKHRvLCBzdG9yZXNMaXN0LCB1bmRlZmluZWQsIGZhbHNlKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgbGV0IG1peGVkQ1dVbm1vdW50LFxuICAgICAgICAgICAgICAgIHVuTW91bnRLZXkgPSB0by5pc1JlYWN0Q29tcG9uZW50ID8gXCJjb21wb25lbnRXaWxsVW5tb3VudFwiIDogXCJkZXN0cm95XCI7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmICggdG8uaGFzT3duUHJvcGVydHkodW5Nb3VudEtleSkgKSB7XG4gICAgICAgICAgICAgICAgbWl4ZWRDV1VubW91bnQgPSB0b1t1bk1vdW50S2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdG9bdW5Nb3VudEtleV0gPSAoIC4uLmFyZ3ogKSA9PiB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHRvW3VuTW91bnRLZXldO1xuICAgICAgICAgICAgICAgIGlmICggbWl4ZWRDV1VubW91bnQgKVxuICAgICAgICAgICAgICAgICAgICB0b1t1bk1vdW50S2V5XSA9IG1peGVkQ1dVbm1vdW50O1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHRoaXMudW5CaW5kKHRvLCBzdG9yZXNMaXN0KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdG9bdW5Nb3VudEtleV0gJiYgdG9bdW5Nb3VudEtleV0oLi4uYXJneik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3RvcmVzTGlzdC5yZWR1Y2UoKCBkYXRhLCBpZCApID0+IHtcbiAgICAgICAgICAgIGlmICggIWlzLnN0cmluZyhpZCkgKVxuICAgICAgICAgICAgICAgIGlkID0gaWQubmFtZTtcbiAgICAgICAgICAgIGlkICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID0gaWQuc3BsaXQoJzonKTtcbiAgICAgICAgICAgIGlkWzBdICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID0gaWRbMF0uc3BsaXQoJy4nKTtcbiAgICAgICAgICAgIGRhdGFbaWRbMV0gfHwgaWRbMF1baWRbMF0ubGVuZ3RoIC0gMV1dID0gdGhpcy5zdG9yZXNbaWRbMF1bMF1dICYmIHRoaXMuc3RvcmVzW2lkWzBdWzBdXS5yZXRyaWV2ZShpZFswXS5zcGxpY2UoMSkpO1xuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH0sIHt9KTtcbiAgICB9XG4gICAgXG4gICAgcmV0cmlldmUoIHBhdGggPSBcIlwiICkge1xuICAgICAgICBwYXRoID0gaXMuc3RyaW5nKHBhdGgpID8gcGF0aC5zcGxpdCgnLicpIDogcGF0aDtcbiAgICAgICAgcmV0dXJuIHBhdGggJiYgdGhpcy5zdG9yZXNbcGF0aFswXV0gJiZcbiAgICAgICAgICAgIHRoaXMuc3RvcmVzW3BhdGhbMF1dLnJldHJpZXZlKHBhdGguc3BsaWNlKDEpKTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogR2V0IG9yIHVwZGF0ZSBzdG9yZXNSZXZNYXAncyByZXZpc2lvbnNcbiAgICAgKiBAcGFyYW0gc3RvcmVzUmV2TWFwXG4gICAgICogQHBhcmFtIGxvY2FsXG4gICAgICogQHJldHVybnMge3t9fVxuICAgICAqL1xuICAgIGdldFN0b3Jlc1JldnMoIHN0b3Jlc1Jldk1hcCA9IHt9LCBsb2NhbCApIHtcbiAgICAgICAgbGV0IGN0eCA9IHRoaXMuX19jb250ZXh0O1xuICAgICAgICBpZiAoICFzdG9yZXNSZXZNYXAgKSB7XG4gICAgICAgICAgICBzdG9yZXNSZXZNYXAgPSB7fTtcbiAgICAgICAgfVxuICAgICAgICBPYmplY3Qua2V5cyhjdHgpLmZvckVhY2goXG4gICAgICAgICAgICBpZCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCAhaXMuZm4oY3R4W2lkXSlcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgc3RvcmVzUmV2TWFwW2lkXSA9IGN0eFtpZF0uX3JldjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoICFzdG9yZXNSZXZNYXAuaGFzT3duUHJvcGVydHkoaWQpIClcbiAgICAgICAgICAgICAgICAgICAgc3RvcmVzUmV2TWFwW2lkXSA9IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIGlmICggIWxvY2FsICkge1xuICAgICAgICAgICAgdGhpcy5fX21peGVkLnJlZHVjZSgoIHVwZGF0ZWQsIGN0eCApID0+IChjdHguZ2V0U3RvcmVzUmV2cyhzdG9yZXNSZXZNYXApLCBzdG9yZXNSZXZNYXApLCBzdG9yZXNSZXZNYXApO1xuICAgICAgICAgICAgdGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuZ2V0U3RvcmVzUmV2cyhzdG9yZXNSZXZNYXApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdG9yZXNSZXZNYXA7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIEdldCBvciB1cGRhdGUgb3V0cHV0IGJhc2luZyBzdG9yZXNSZXZNYXAncyByZXZpc2lvbnMuXG4gICAgICogSWYgYSBzdG9yZSBpbiAnc3RvcmVzUmV2TWFwJyBpcyB1cGRhdGVkOyBhZGQgaXQgdG8gJ291dHB1dCdcbiAgICAgKiBAcGFyYW0gc3RvcmVzUmV2TWFwXG4gICAgICogQHBhcmFtIG91dHB1dFxuICAgICAqIEBwYXJhbSB1cGRhdGVkXG4gICAgICogQHJldHVybnMgeyp8e319XG4gICAgICovXG4gICAgZ2V0VXBkYXRlcyggc3RvcmVzUmV2TWFwLCBvdXRwdXQsIHVwZGF0ZWQgKSB7XG4gICAgICAgIGxldCBjdHggPSB0aGlzLl9fY29udGV4dDtcbiAgICAgICAgXG4gICAgICAgIG91dHB1dCA9IG91dHB1dCB8fCB7fTtcbiAgICAgICAgT2JqZWN0LmtleXMoY3R4KS5mb3JFYWNoKFxuICAgICAgICAgICAgaWQgPT4ge1xuICAgICAgICAgICAgICAgIGlmICggIW91dHB1dFtpZF1cbiAgICAgICAgICAgICAgICAgICAgJiYgKCAhc3RvcmVzUmV2TWFwXG4gICAgICAgICAgICAgICAgICAgICAgICB8fCAoc3RvcmVzUmV2TWFwLmhhc093blByb3BlcnR5KGlkKSAmJiBzdG9yZXNSZXZNYXBbaWRdID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgICAgICB8fCAhKCAhc3RvcmVzUmV2TWFwLmhhc093blByb3BlcnR5KGlkKSB8fCBjdHhbaWRdLl9yZXYgPD0gc3RvcmVzUmV2TWFwW2lkXSApKVxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlZCAgICA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIG91dHB1dFtpZF0gPSB0aGlzLmRhdGFbaWRdO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIHN0b3Jlc1Jldk1hcCAmJiBzdG9yZXNSZXZNYXBbaWRdICE9PSB1bmRlZmluZWQgKVxuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmVzUmV2TWFwW2lkXSA9IGN0eFtpZF0uX3JldjtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICB1cGRhdGVkID0gdGhpcy5fX21peGVkLnJlZHVjZSgoIHVwZGF0ZWQsIGN0eCApID0+IChjdHguZ2V0VXBkYXRlcyhzdG9yZXNSZXZNYXAsIG91dHB1dCwgdXBkYXRlZCkgfHwgdXBkYXRlZCksIHVwZGF0ZWQpO1xuICAgICAgICB1cGRhdGVkID0gdGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuZ2V0VXBkYXRlcyhzdG9yZXNSZXZNYXAsIG91dHB1dCwgdXBkYXRlZCkgfHwgdXBkYXRlZDtcbiAgICAgICAgcmV0dXJuIHVwZGF0ZWQgJiYgb3V0cHV0O1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSBmbGFnc19zdGF0ZXNcbiAgICAgKiBAcGFyYW0gZmxhZ3NfZGF0YVxuICAgICAqIEByZXR1cm5zIHt7c3RhdGU6IHt9LCBkYXRhOiB7fX19XG4gICAgICovXG4gICAgc2VyaWFsaXplKCBmbGFnc19zdGF0ZXMgPSAvLiovLCBmbGFnc19kYXRhID0gLy4qLyApIHtcbiAgICAgICAgbGV0IGN0eCA9IHRoaXMuX19jb250ZXh0LCBvdXRwdXQgPSB7IHN0YXRlOiB7fSwgZGF0YToge30gfSxcbiAgICAgICAgICAgIF9mbGFnc19zdGF0ZXMsXG4gICAgICAgICAgICBfZmxhZ3NfZGF0YTtcbiAgICAgICAgaWYgKCBpcy5hcnJheShmbGFnc19zdGF0ZXMpIClcbiAgICAgICAgICAgIGZsYWdzX3N0YXRlcy5mb3JFYWNoKGlkID0+IChvdXRwdXQuc3RhdGVbaWRdID0gdGhpcy5zdGF0ZVtpZF0pKTtcbiAgICAgICAgXG4gICAgICAgIGlmICggaXMuYXJyYXkoZmxhZ3NfZGF0YSkgKVxuICAgICAgICAgICAgZmxhZ3NfZGF0YS5mb3JFYWNoKGlkID0+IChvdXRwdXQuZGF0YVtpZF0gPSB0aGlzLmRhdGFbaWRdKSk7XG4gICAgICAgIFxuICAgICAgICBpZiAoICFpcy5hcnJheShmbGFnc19kYXRhKSAmJiAhaXMuYXJyYXkoZmxhZ3Nfc3RhdGVzKSApXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhjdHgpLmZvckVhY2goXG4gICAgICAgICAgICAgICAgaWQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIGlzLmZuKGN0eFtpZF0pIClcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGxldCBmbGFncyA9IGN0eFtpZF0uY29uc3RydWN0b3IuZmxhZ3M7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBmbGFncyA9IGlzLmFycmF5KGZsYWdzKSA/IGZsYWdzIDogW2ZsYWdzIHx8IFwiXCJdO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBmbGFncy5yZWR1Y2UoKCByLCBmbGFnICkgPT4gKHIgfHwgX2ZsYWdzX3N0YXRlcy50ZXN0KGZsYWcpKSwgZmFsc2UpIClcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dC5zdGF0ZVtpZF0gPSB0aGlzLnN0YXRlW2lkXTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGlmICggZmxhZ3MucmVkdWNlKCggciwgZmxhZyApID0+IChyIHx8IF9mbGFnc19kYXRhLnRlc3QoZmxhZykpLCBmYWxzZSkgKVxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0LmRhdGFbaWRdID0gdGhpcy5kYXRhW2lkXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApXG4gICAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgfVxuICAgIFxuICAgIGRpc3BhdGNoKCBhY3Rpb24sIGRhdGEgKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMuX19jb250ZXh0KVxuICAgICAgICAgICAgICAuZm9yRWFjaChcbiAgICAgICAgICAgICAgICAgIGlkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoICFpcy5mbih0aGlzLl9fY29udGV4dFtpZF0pIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fX2NvbnRleHRbaWRdLnRyaWdnZXIoYWN0aW9uLCBkYXRhKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICApO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fX21peGVkLmZvckVhY2goKCBjdHggKSA9PiAoY3R4LmRpc3BhdGNoKGFjdGlvbiwgZGF0YSkpKTtcbiAgICAgICAgdGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuZGlzcGF0Y2goYWN0aW9uLCBkYXRhKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIG9uY2UoJ3N0YWJsZScsIGNiKVxuICAgICAqIEBwYXJhbSBvYmoge1JlYWN0LkNvbXBvbmVudHxTdG9yZXxmdW5jdGlvbilcbiAgICAgKiBAcGFyYW0ga2V5IHtzdHJpbmd9IG9wdGlvbmFsIGtleSB3aGVyZSB0byBtYXAgdGhlIHB1YmxpYyBzdGF0ZVxuICAgICAqL1xuICAgIHRoZW4oIGNiICkge1xuICAgICAgICBpZiAoIHRoaXMuX3N0YWJsZSApXG4gICAgICAgICAgICByZXR1cm4gY2IobnVsbCwgdGhpcy5kYXRhKTtcbiAgICAgICAgdGhpcy5vbmNlKCdzdGFibGUnLCBlID0+IGNiKG51bGwsIHRoaXMuZGF0YSkpO1xuICAgIH1cbiAgICBcbiAgICByZXN0b3JlKCB7IHN0YXRlLCBkYXRhIH0sIHF1aWV0ICkge1xuICAgICAgICBsZXQgY3R4ID0gdGhpcy5fX2NvbnRleHQ7XG4gICAgICAgIE9iamVjdC5rZXlzKGRhdGEpLmZvckVhY2goXG4gICAgICAgICAgICBpZCA9PiB7XG4gICAgICAgICAgICAgICAgcXVpZXQgPyBjdHguZGF0YSA9IGRhdGFbaWRdXG4gICAgICAgICAgICAgICAgICAgIDogY3R4LnB1c2goZGF0YVtpZF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICBPYmplY3Qua2V5cyhzdGF0ZSkuZm9yRWFjaChcbiAgICAgICAgICAgIGlkID0+IHtcbiAgICAgICAgICAgICAgICBxdWlldCA/IGN0eC5zdGF0ZSA9IHN0YXRlW2lkXVxuICAgICAgICAgICAgICAgICAgICA6IGN0eC5zZXRTdGF0ZShzdGF0ZVtpZF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cbiAgICBcbiAgICByZXRhaW5TdG9yZXMoIHN0b3JlcyA9IFtdLCByZWFzb24gKSB7XG4gICAgICAgIHN0b3Jlcy5mb3JFYWNoKFxuICAgICAgICAgICAgaWQgPT4gKHRoaXMuc3RvcmVzW2lkXSAmJiB0aGlzLnN0b3Jlc1tpZF0ucmV0YWluICYmIHRoaXMuc3RvcmVzW2lkXS5yZXRhaW4ocmVhc29uKSlcbiAgICAgICAgKVxuICAgIH1cbiAgICBcbiAgICBkaXNwb3NlU3RvcmVzKCBzdG9yZXMgPSBbXSwgcmVhc29uICkge1xuICAgICAgICBzdG9yZXMuZm9yRWFjaChcbiAgICAgICAgICAgIGlkID0+ICh0aGlzLnN0b3Jlc1tpZF0gJiYgdGhpcy5zdG9yZXNbaWRdLmRpc3Bvc2UgJiYgdGhpcy5zdG9yZXNbaWRdLmRpc3Bvc2UocmVhc29uKSlcbiAgICAgICAgKVxuICAgIH1cbiAgICBcbiAgICB3YWl0KCByZWFzb24gKSB7XG4gICAgICAgIC8vY29uc29sZS5sb2coXCJ3YWl0XCIsIHJlYXNvbik7XG4gICAgICAgIHRoaXMuX3N0YWJsZSAmJiAhdGhpcy5fX2xvY2tzLmFsbCAmJiB0aGlzLmVtaXQoXCJ1bnN0YWJsZVwiLCB0aGlzKTtcbiAgICAgICAgdGhpcy5fc3RhYmxlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX19sb2Nrcy5hbGwrKztcbiAgICAgICAgaWYgKCByZWFzb24gKSB7XG4gICAgICAgICAgICB0aGlzLl9fbG9ja3NbcmVhc29uXSA9IHRoaXMuX19sb2Nrc1tyZWFzb25dIHx8IDA7XG4gICAgICAgICAgICB0aGlzLl9fbG9ja3NbcmVhc29uXSsrO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIHJlbGVhc2UoIHJlYXNvbiApIHtcbiAgICAgICAgXG4gICAgICAgIGlmICggcmVhc29uICkge1xuICAgICAgICAgICAgaWYgKCB0aGlzLl9fbG9ja3NbcmVhc29uXSA9PSAwIClcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiUmVsZWFzZSBtb3JlIHRoYW4gbG9ja2luZyAhXCIsIHJlYXNvbik7XG4gICAgICAgICAgICB0aGlzLl9fbG9ja3NbcmVhc29uXSA9IHRoaXMuX19sb2Nrc1tyZWFzb25dIHx8IDA7XG4gICAgICAgICAgICB0aGlzLl9fbG9ja3NbcmVhc29uXS0tO1xuICAgICAgICB9XG4gICAgICAgIGlmICggIXJlYXNvbiAmJiB0aGlzLl9fbG9ja3MuYWxsID09IDAgKVxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlJlbGVhc2UgbW9yZSB0aGFuIGxvY2tpbmcgIVwiKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX19sb2Nrcy5hbGwtLTtcbiAgICAgICAgaWYgKCAhdGhpcy5fX2xvY2tzLmFsbCApIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YWJpbGl6ZXJUTSAmJiBjbGVhclRpbWVvdXQodGhpcy5fc3RhYmlsaXplclRNKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5fc3RhYmlsaXplclRNID0gc2V0VGltZW91dChcbiAgICAgICAgICAgICAgICBlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc3RhYmlsaXplclRNID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCB0aGlzLl9fbG9ja3MuYWxsIClcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3Byb3BhZ1RNICYmIGNsZWFyVGltZW91dCh0aGlzLl9wcm9wYWdUTSk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zdGFibGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXQoXCJzdGFibGVcIiwgdGhpcyk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAhdGhpcy5kZWFkICYmIHRoaXMuX3Byb3BhZygpOy8vIHN0YWJpbGl0eSBjYW4gaW5kdWNlIGRlc3Ryb3lcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cbiAgICBcbiAgICBwcm9wYWcoKSB7XG4gICAgICAgIHRoaXMuX3Byb3BhZ1RNICYmIGNsZWFyVGltZW91dCh0aGlzLl9wcm9wYWdUTSk7XG4gICAgICAgIHRoaXMuX3Byb3BhZ1RNID0gc2V0VGltZW91dChcbiAgICAgICAgICAgIGUgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuX3Byb3BhZ1RNID0gbnVsbDtcbiAgICAgICAgICAgICAgICB0aGlzLl9wcm9wYWcoKVxuICAgICAgICAgICAgfSwgMlxuICAgICAgICApO1xuICAgIH1cbiAgICBcbiAgICBfcHJvcGFnKCkge1xuICAgICAgICBpZiAoIHRoaXMuX2ZvbGxvd2Vycy5sZW5ndGggKVxuICAgICAgICAgICAgdGhpcy5fZm9sbG93ZXJzLmZvckVhY2goKCB7IDA6IG9iaiwgMToga2V5LCAyOiBhcywgMzogbGFzdFJldnMgfSApID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHRoaXMuZ2V0VXBkYXRlcyhsYXN0UmV2cyk7XG4gICAgICAgICAgICAgICAgaWYgKCAhZGF0YSApIHJldHVybjtcbiAgICAgICAgICAgICAgICBpZiAoIHR5cGVvZiBvYmogIT0gXCJmdW5jdGlvblwiICkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIGFzICkgb2JqLnNldFN0YXRlKHsgW2FzXTogZGF0YSB9KTtcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBvYmouc2V0U3RhdGUoZGF0YSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBvYmooZGF0YSwgbGFzdFJldnMgJiYgWy4uLmxhc3RSZXZzXSB8fCBcIm5vIHJldnNcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGxhc3RSZXZzICYmXG4gICAgICAgICAgICAgICAgLy8ga2V5LmZvckVhY2goaWQgPT4gKGxhc3RSZXZzW2lkXSA9IHRoaXMuc3RvcmVzW2lkXSAmJiB0aGlzLnN0b3Jlc1tpZF0uX3JldiB8fCAwKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5lbWl0KFwidXBkYXRlXCIsIHRoaXMuZ2V0VXBkYXRlcygpKTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogaXMgc3RhYmxlXG4gICAgICogQHJldHVybnMgYm9vbFxuICAgICAqL1xuICAgIGlzU3RhYmxlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc3RhYmxlO1xuICAgIH1cbiAgICBcbiAgICBfZ2V0QWxsQ2hpbGRzKCBjaGlsZHMgPSBbXSApIHtcbiAgICAgICAgY2hpbGRzLnB1c2goLi4udGhpcy5fY2hpbGRDb250ZXh0cylcbiAgICAgICAgdGhpcy5fY2hpbGRDb250ZXh0cy5mb3JFYWNoKFxuICAgICAgICAgICAgY3R4ID0+IHtcbiAgICAgICAgICAgICAgICBjdHguX2dldEFsbENoaWxkcyhjaGlsZHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gY2hpbGRzO1xuICAgIH1cbiAgICBcbiAgICBfYWRkQ2hpbGQoIGN0eCApIHtcbiAgICAgICAgdGhpcy5fY2hpbGRDb250ZXh0cy5wdXNoKGN0eCk7XG4gICAgfVxuICAgIFxuICAgIF9ybUNoaWxkKCBjdHggKSB7XG4gICAgICAgIGxldCBpID0gdGhpcy5fY2hpbGRDb250ZXh0cy5pbmRleE9mKGN0eCk7XG4gICAgICAgIGlmICggaSAhPSAtMSApXG4gICAgICAgICAgICB0aGlzLl9jaGlsZENvbnRleHRzLnNwbGljZShpLCAxKTtcbiAgICB9XG4gICAgXG4gICAgcmV0YWluKCByZWFzb24gKSB7XG4gICAgICAgIHRoaXMuX19yZXRhaW5zLmFsbCsrO1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwicmV0YWluXCIsIHRoaXMuX2lkLCByZWFzb24pO1xuICAgICAgICBpZiAoIHJlYXNvbiApIHtcbiAgICAgICAgICAgIHRoaXMuX19yZXRhaW5zW3JlYXNvbl0gPSB0aGlzLl9fcmV0YWluc1tyZWFzb25dIHx8IDA7XG4gICAgICAgICAgICB0aGlzLl9fcmV0YWluc1tyZWFzb25dKys7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgZGlzcG9zZSggcmVhc29uICkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwiZGlzcG9zZVwiLCB0aGlzLl9pZCwgcmVhc29uKTtcbiAgICAgICAgaWYgKCByZWFzb24gKSB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmICggdGhpcy5fX3JldGFpbnNbcmVhc29uXSA9PSAwIClcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJEaXNwb3NlIG1vcmUgdGhhbiByZXRhaW5pbmcgIVwiKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5fX3JldGFpbnNbcmVhc29uXSA9IHRoaXMuX19yZXRhaW5zW3JlYXNvbl0gfHwgMDtcbiAgICAgICAgICAgIHRoaXMuX19yZXRhaW5zW3JlYXNvbl0tLTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKCB0aGlzLl9fcmV0YWlucy5hbGwgPT0gMCApXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJEaXNwb3NlIG1vcmUgdGhhbiByZXRhaW5pbmcgIVwiKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX19yZXRhaW5zLmFsbC0tO1xuICAgICAgICBcbiAgICAgICAgaWYgKCAhdGhpcy5fX3JldGFpbnMuYWxsICkge1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcImRpc3Bvc2UgZG8gZGVzdHJveSBcIiwgdGhpcy5faWQsIHRoaXMuX3BlcnNpc3RlbmNlVG0pO1xuICAgICAgICAgICAgaWYgKCB0aGlzLl9wZXJzaXN0ZW5jZVRtICkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2Rlc3Ryb3lUTSAmJiBjbGVhclRpbWVvdXQodGhpcy5fZGVzdHJveVRNKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9kZXN0cm95VE0gPSBzZXRUaW1lb3V0KFxuICAgICAgICAgICAgICAgICAgICBlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGhlbihzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhdGhpcy5fX3JldGFpbnMuYWxsICYmIHRoaXMuZGVzdHJveSgpXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcGVyc2lzdGVuY2VUbVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRoZW4ocyA9PiAoIXRoaXMuX19yZXRhaW5zLmFsbCAmJiB0aGlzLmRlc3Ryb3koKSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIG9yZGVyIGRlc3Ryb3kgb2YgbG9jYWwgc3RvcmVzXG4gICAgICovXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgbGV0IGN0eCAgID0gdGhpcy5fX2NvbnRleHQ7XG4gICAgICAgIC8vY29uc29sZS53YXJuKFwiZGVzdHJveVwiLCB0aGlzLl9pZCk7XG4gICAgICAgIHRoaXMuZGVhZCA9IHRydWU7XG4gICAgICAgIHRoaXMuZW1pdChcImRlc3Ryb3lcIik7XG4gICAgICAgIE9iamVjdC5rZXlzKFxuICAgICAgICAgICAgdGhpcy5fX2xpc3RlbmluZ1xuICAgICAgICApLmZvckVhY2goXG4gICAgICAgICAgICBpZCA9PiB0aGlzLl9fY29udGV4dFtpZF0ucmVtb3ZlTGlzdGVuZXIodGhpcy5fX2xpc3RlbmluZ1tpZF0pXG4gICAgICAgICk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9zdGFiaWxpemVyVE0gJiYgY2xlYXJUaW1lb3V0KHRoaXMuX3N0YWJpbGl6ZXJUTSk7XG4gICAgICAgIHRoaXMuX3Byb3BhZ1RNICYmIGNsZWFyVGltZW91dCh0aGlzLl9wcm9wYWdUTSk7XG4gICAgICAgIHRoaXMuX19saXN0ZW5pbmcgPSB7fTtcbiAgICAgICAgXG4gICAgICAgIGlmICggdGhpcy5faXNMb2NhbElkIClcbiAgICAgICAgICAgIGRlbGV0ZSBvcGVuQ29udGV4dHNbdGhpcy5faWRdO1xuICAgICAgICB0aGlzLl9mb2xsb3dlcnMubGVuZ3RoID0gMDtcbiAgICAgICAgXG4gICAgICAgIHdoaWxlICggdGhpcy5fX21peGVkTGlzdC5sZW5ndGggKSB7XG4gICAgICAgICAgICB0aGlzLl9fbWl4ZWRbMF0ucmVtb3ZlTGlzdGVuZXIodGhpcy5fX21peGVkTGlzdC5zaGlmdCgpKTtcbiAgICAgICAgICAgIHRoaXMuX19taXhlZC5zaGlmdCgpLmRpc3Bvc2UoXCJtaXhlZFRvXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICggdGhpcy5fX3BhcmVudExpc3QgKSB7XG4gICAgICAgICAgICB0aGlzLnBhcmVudC5fcm1DaGlsZCh0aGlzKTtcbiAgICAgICAgICAgIHRoaXMucGFyZW50LnJlbW92ZUxpc3RlbmVyKHRoaXMuX19wYXJlbnRMaXN0KTtcbiAgICAgICAgICAgIHRoaXMucGFyZW50LmRpc3Bvc2UoXCJpc015UGFyZW50XCIpO1xuICAgICAgICAgICAgdGhpcy5fX3BhcmVudExpc3QgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIC8vZm9yICggbGV0IGtleSBpbiBjdHggKVxuICAgICAgICAvLyAgICBpZiAoICFpcy5mbihjdHhba2V5XSkgKSB7XG4gICAgICAgIC8vICAgICAgICBpZiAoIGN0eFtrZXldLmNvbnRleHRPYmogPT09IHRoaXMgKVxuICAgICAgICAvLyAgICAgICAgICAgIGN0eFtrZXldLmRpc3Bvc2UoKTtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gICAgICAgIGN0eFtrZXldID0gY3R4W2tleV0uY29uc3RydWN0b3I7XG4gICAgICAgIC8vICAgIH1cbiAgICAgICAgdGhpcy5fX21peGVkID0gdGhpcy5kYXRhID0gdGhpcy5zdGF0ZSA9IHRoaXMuY29udGV4dCA9IHRoaXMuc3RvcmVzID0gbnVsbDtcbiAgICAgICAgdGhpcy5fZGF0YSA9IHRoaXMuX3N0YXRlID0gdGhpcy5fc3RvcmVzID0gbnVsbDtcbiAgICAgICAgXG4gICAgICAgIFxuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvQ29udGV4dC5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImlzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiaXNcIlxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxuICogQ29weXJpZ2h0IChjKSAgMjAxNyBDYWlwaSBMYWJzIC5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuICpcbiAqIEBhdXRob3IgOiBOYXRoYW5hZWwgQnJhdW5cbiAqIEBjb250YWN0IDogY2FpcGlsYWJzQGdtYWlsLmNvbVxuICovXG52YXIgaXMgPSByZXF1aXJlKCdpcycpO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW1pdHRlciB7XG4gICAgX2V2ZW50cyA9IHt9O1xuICAgIFxuICAgIG9uKCBldnQsIGNiICkge1xuICAgICAgICBpZiAoICFpcy5zdHJpbmcoZXZ0KSAmJiBldnQgKVxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKGV2dCkuZm9yRWFjaChrID0+IHRoaXMub24oaywgZXZ0W2tdKSk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9ldmVudHNbZXZ0XSA9IHRoaXMuX2V2ZW50c1tldnRdIHx8IFtdO1xuICAgICAgICB0aGlzLl9ldmVudHNbZXZ0XS5wdXNoKGNiKTtcbiAgICAgICAgXG4gICAgfVxuICAgIFxuICAgIHVuKCBldnQsIGNiICkge1xuICAgICAgICBpZiAoICFpcy5zdHJpbmcoZXZ0KSAmJiBldnQgKVxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKGV2dCkuZm9yRWFjaChrID0+IHRoaXMudW4oaywgZXZ0W2tdKSk7XG4gICAgICAgIFxuICAgICAgICBpZiAoICF0aGlzLl9ldmVudHNbZXZ0XSApIHJldHVybjtcbiAgICAgICAgdmFyIGkgPSB0aGlzLl9ldmVudHNbZXZ0XS5pbmRleE9mKGNiKTtcbiAgICAgICAgdGhpcy5fZXZlbnRzW2V2dF0uc3BsaWNlKGksIDEpO1xuICAgIH1cbiAgICBcbiAgICBlbWl0KCBldnQsIC4uLmFyZ3ogKSB7XG4gICAgICAgIGlmICggIXRoaXMuX2V2ZW50c1tldnRdICkgcmV0dXJuO1xuICAgICAgICBsZXQgbGlzdHMgPSBbLi4udGhpcy5fZXZlbnRzW2V2dF1dO1xuICAgICAgICBmb3IgKCB2YXIgaSA9IDA7IGkgPCBsaXN0cy5sZW5ndGg7IGkrKyApIHtcbiAgICAgICAgICAgIGxpc3RzW2ldKC4uLmFyZ3opO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGFkZExpc3RlbmVyKCkge1xuICAgICAgICB0aGlzLm9uKC4uLmFyZ3VtZW50cyk7XG4gICAgfVxuICAgIFxuICAgIHJlbW92ZUxpc3RlbmVyKCkge1xuICAgICAgICB0aGlzLnVuKC4uLmFyZ3VtZW50cyk7XG4gICAgfVxuICAgIFxuICAgIHJlbW92ZUFsbExpc3RlbmVycygpIHtcbiAgICAgICAgdGhpcy5fZXZlbnRzID0ge307XG4gICAgfVxuICAgIFxuICAgIG9uY2UoIGV2dCwgY2IgKSB7XG4gICAgICAgIGxldCBmbjtcbiAgICAgICAgdGhpcy5vbihldnQsIGZuID0gKCAuLi5hcmd6ICkgPT4ge1xuICAgICAgICAgICAgdGhpcy51bihldnQsIGZuKTtcbiAgICAgICAgICAgIGNiKC4uLmFyZ3opXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBcbiAgICBcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvRW1pdHRlci5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNob3J0aWRcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJzaG9ydGlkXCJcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcbiAqIENvcHlyaWdodCAoYykgIDIwMTcgQ2FpcGkgTGFicyAuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiAqXG4gKiBAYXV0aG9yIDogTmF0aGFuYWVsIEJyYXVuXG4gKiBAY29udGFjdCA6IGNhaXBpbGFic0BnbWFpbC5jb21cbiAqL1xuXG4vKipcbiAqIFVsdHJhIHNjYWxhYmxlIHN0YXRlLWF3YXJlIHN0b3JlXG4gKlxuICogQHRvZG8gOiBsb3Qgb2Ygb3B0aW1zLi4uXG4gKi9cblxudmFyIGlzICAgICAgICAgICA9IHJlcXVpcmUoJ2lzJyksXG4gICAgQ29udGV4dCAgICAgID0gcmVxdWlyZSgnLi9Db250ZXh0JyksXG4gICAgRXZlbnRFbWl0dGVyID0gcmVxdWlyZSgnLi9FbWl0dGVyJyksXG4gICAgc2hvcnRpZCAgICAgID0gcmVxdWlyZSgnc2hvcnRpZCcpLFxuICAgIG9ialByb3RvICAgICA9IE9iamVjdC5nZXRQcm90b3R5cGVPZih7fSk7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RvcmUgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICAgIFxuICAgIHN0YXRpYyB1c2UgICAgICAgICAgICAgICAgICAgICAgICA9IFtdOy8vIG92ZXJyaWRhYmxlIGxpc3Qgb2Ygc291cmNlIHN0b3Jlc1xuICAgIHN0YXRpYyBmb2xsb3c7Ly8gb3ZlcnJpZGFibGUgbGlzdCBvZiBzdG9yZSB0aGF0IHdpbGwgYWxsb3cgcHVzaCBpZiB1cGRhdGVkXG4gICAgc3RhdGljIHJlcXVpcmU7XG4gICAgc3RhdGljIHN0YXRpY0NvbnRleHQgICAgICAgICAgICAgID0gbmV3IENvbnRleHQoe30sIHsgaWQ6IFwic3RhdGljXCIgfSk7XG4gICAgc3RhdGljIGluaXRpYWxTdGF0ZSAgICAgICAgICAgICAgID0gdW5kZWZpbmVkOy8vIGRlZmF1bHQgc3RhdGUgQGRlcHJlY2lhdGVkXG4gICAgc3RhdGljIHN0YXRlICAgICAgICAgICAgICAgICAgICAgID0gdW5kZWZpbmVkOy8vIGRlZmF1bHQgc3RhdGVcbiAgICAvKipcbiAgICAgKlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gICAgICAgICAgIHN0YXRpYyBkZWZhdWx0TWF4TGlzdGVuZXJzID0gMTAwO1xuICAgIC8qKlxuICAgICAqIGlmIHJldGFpbiBnb2VzIHRvIDAgOlxuICAgICAqIGZhbHNlIHRvIG5vdCBkZXN0cm95LFxuICAgICAqIDAgdG8gc3luYyBhdXRvIGRlc3Ryb3lcbiAgICAgKiBNcyB0byBhdXRvZGVzdHJveSBhZnRlciB0bSBtcyBpZiBubyByZXRhaW4gaGFzIGJlZW4gY2FsbGVkXG4gICAgICogQHR5cGUge2Jvb2xlYW58SW50fVxuICAgICAqL1xuICAgICAgICAgICBzdGF0aWMgcGVyc2lzdGVuY2VUbSAgICAgICA9IGZhbHNlO1xuICAgIFxuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdG9yLCB3aWxsIGJ1aWxkIGEgcmVzY29wZSBzdG9yZVxuICAgICAqXG4gICAgICogKGNvbnRleHQsIHtyZXF1aXJlLHVzZSxhcHBseSxzdGF0ZSwgZGF0YX0pXG4gICAgICogKGNvbnRleHQpXG4gICAgICpcbiAgICAgKiBAcGFyYW0gY29udGV4dCB7b2JqZWN0fSBjb250ZXh0IHdoZXJlIHRvIGZpbmQgdGhlIG90aGVyIHN0b3JlcyAoZGVmYXVsdCA6IHN0YXRpYyBzdGF0aWNDb250ZXh0IClcbiAgICAgKiBAcGFyYW0ga2V5cyB7QXJyYXl9IChwYXNzZWQgdG8gU3RvcmU6Om1hcCkgRXggOiBbXCJzZXNzaW9uXCIsIFwib3RoZXJOYW1lZFN0b3JlOmtleVwiLCBvdGhlclN0b3JlLmFzKFwib3RoZXJLZXlcIildXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHZhciBhcmd6ICAgICAgICAgPSBbLi4uYXJndW1lbnRzXSxcbiAgICAgICAgICAgIF9zdGF0aWMgICAgICA9IHRoaXMuY29uc3RydWN0b3IsXG4gICAgICAgICAgICBjb250ZXh0ICAgICAgPSBhcmd6WzBdIGluc3RhbmNlb2YgQ29udGV4dFxuICAgICAgICAgICAgICAgID8gYXJnei5zaGlmdCgpXG4gICAgICAgICAgICAgICAgOiBfc3RhdGljLmNvbnRleHQgPyBDb250ZXh0LmdldENvbnRleHQoX3N0YXRpYy5jb250ZXh0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogaXMuc3RyaW5nKGFyZ3pbMF0pXG4gICAgICAgICAgICAgICAgICAgICAgPyBDb250ZXh0LmdldENvbnRleHQoYXJnei5zaGlmdCgpKVxuICAgICAgICAgICAgICAgICAgICAgIDogX3N0YXRpYy5zdGF0aWNDb250ZXh0LFxuICAgICAgICAgICAgY2ZnICAgICAgICAgID0gYXJnelswXSAmJiAhaXMuYXJyYXkoYXJnelswXSkgJiYgIWlzLnN0cmluZyhhcmd6WzBdKSA/IGFyZ3ouc2hpZnQoKSA6IHt9LFxuICAgICAgICAgICAgbmFtZSAgICAgICAgID0gaXMuc3RyaW5nKGFyZ3pbMF0pID8gYXJnelswXSA6IGNmZy5uYW1lIHx8IF9zdGF0aWMubmFtZSxcbiAgICAgICAgICAgIHdhdGNocyAgICAgICA9IGlzLmFycmF5KGFyZ3pbMF0pID8gYXJnei5zaGlmdCgpIDogY2ZnLnVzZSB8fCBbXSwvLyB3YXRjaHMgbmVlZCB0byBiZSBkZWZpbmVkIGFmdGVyIGFsbCB0aGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzdG9yZSBhcmUgcmVnaXN0ZXJlZCA6IHNvIHdlIGNhbid0IGRlYWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB3aXRoIGFueSBcInN0YXRpYyB1c2VcIiBhdXRvbWF0aWNseVxuICAgICAgICAgICAgYXBwbHkgICAgICAgID0gaXMuZm4oYXJnelswXSkgPyBhcmd6LnNoaWZ0KCkgOiBjZmcuYXBwbHkgfHwgbnVsbCxcbiAgICAgICAgICAgIGluaXRpYWxTdGF0ZSA9IF9zdGF0aWMuc3RhdGUgfHwgX3N0YXRpYy5pbml0aWFsU3RhdGU7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl91aWQgICAgICAgICAgPSBjZmcuX3VpZCB8fCBzaG9ydGlkLmdlbmVyYXRlKCk7XG4gICAgICAgIHRoaXMuX21heExpc3RlbmVycyA9IGNmZy5kZWZhdWx0TWF4TGlzdGVuZXJzIHx8IFN0b3JlLmRlZmF1bHRNYXhMaXN0ZW5lcnM7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9fcmV0YWlucyAgICA9IHsgYWxsOiAwIH07XG4gICAgICAgIHRoaXMuX19sb2NrcyAgICAgID0geyBhbGw6IDAgfTtcbiAgICAgICAgdGhpcy5fb25TdGFiaWxpemUgPSBbXTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX3BlcnNpc3RlbmNlVG0gPSBjZmcucGVyc2lzdGVuY2VUbSB8fCB0aGlzLmNvbnN0cnVjdG9yLnBlcnNpc3RlbmNlVG07XG4gICAgICAgIGlmICggaXMuc3RyaW5nKGFyZ3pbMF0pICkge1xuICAgICAgICAgICAgaWYgKCBjb250ZXh0Ll9fY29udGV4dFtuYW1lXSApXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwiUmVTY29wZTogT3ZlcndyaXRpbmcgYW4gZXhpc3Rpbmcgc3RhdGljIG5hbWVkIHN0b3JlICggJXMgKSAhIVwiLCBuYW1lKTtcbiAgICAgICAgICAgIGNvbnRleHQuX19jb250ZXh0W25hbWVdID0gdGhpcztcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKCBjZmcgJiYgY2ZnLm9uICkge1xuICAgICAgICAgICAgdGhpcy5vbihjZmcub24pO1xuICAgICAgICB9XG4gICAgICAgIC8vIHRoaXMuc3RhdGUgICAgICA9IHRoaXMuc3RhdGUgfHwge307XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgXG4gICAgICAgIGlmICggY29udGV4dC5zdG9yZXMgKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRleHRPYmogPSBjb250ZXh0O1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0ICAgID0gY29udGV4dC5zdG9yZXM7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRleHRPYmogPSBuZXcgQ29udGV4dChjb250ZXh0KTtcbiAgICAgICAgICAgIHRoaXMuY29udGV4dCAgICA9IGNvbnRleHQuc3RvcmVzO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgdGhpcy5fcmV2ICAgICA9IDA7XG4gICAgICAgIHRoaXMuX3JldnMgICAgPSB7fTtcbiAgICAgICAgdGhpcy5zdG9yZXMgICA9IHt9O1xuICAgICAgICB0aGlzLl9yZXF1aXJlID0gW107XG4gICAgICAgIFxuICAgICAgICBpZiAoIGlzLmFycmF5KF9zdGF0aWMudXNlKSApIHtcbiAgICAgICAgICAgIHRoaXMuX3VzZSA9IFsuLi53YXRjaHMsIC4uLihfc3RhdGljLnVzZSB8fCBbXSkubWFwKFxuICAgICAgICAgICAgICAgIGtleSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCByZWYgPSBrZXkubWF0Y2goL14oXFwhPykoW15cXDpdKikoPzpcXDooLiopKT8kLyk7XG4gICAgICAgICAgICAgICAgICAgIGlmICggcmVmWzFdICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlZjIgPSByZWZbMl0uc3BsaXQoJy4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3JlcXVpcmUucHVzaChyZWZbM10gfHwgcmVmMltyZWYyLmxlbmd0aCAtIDFdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVmWzJdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICldO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fdXNlID0gWy4uLndhdGNocywgLi4uKFxuICAgICAgICAgICAgICAgIF9zdGF0aWMudXNlID8gT2JqZWN0LmtleXMoX3N0YXRpYy51c2UpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZWYgPSBrZXkubWF0Y2goL14oXFwhPykoLiopJC8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWZbMV0gJiYgdGhpcy5fcmVxdWlyZS5wdXNoKF9zdGF0aWMudXNlW2tleV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVmWzJdICsgJzonICsgX3N0YXRpYy51c2Vba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogW11cbiAgICAgICAgICAgICldO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAoIF9zdGF0aWMucmVxdWlyZSApXG4gICAgICAgICAgICB0aGlzLl9yZXF1aXJlLnB1c2goLi4uX3N0YXRpYy5yZXF1aXJlKTtcbiAgICAgICAgaWYgKCBjZmcucmVxdWlyZSApXG4gICAgICAgICAgICB0aGlzLl9yZXF1aXJlLnB1c2goLi4uY2ZnLnJlcXVpcmUpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fZm9sbG93ZXJzID0gW107XG4gICAgICAgIFxuICAgICAgICBpZiAoIF9zdGF0aWMuZGF0YSAhPT0gdW5kZWZpbmVkIClcbiAgICAgICAgICAgIHRoaXMuZGF0YSA9IHsgLi4uX3N0YXRpYy5kYXRhIH07XG4gICAgICAgIGlmICggY2ZnLmhhc093blByb3BlcnR5KFwiZGF0YVwiKSAmJiBjZmcuZGF0YSAhPT0gdW5kZWZpbmVkIClcbiAgICAgICAgICAgIHRoaXMuZGF0YSA9IGNmZy5kYXRhO1xuICAgICAgICBpZiAoIGNmZy5oYXNPd25Qcm9wZXJ0eShcInN0YXRlXCIpICYmIGNmZy5zdGF0ZSAhPT0gdW5kZWZpbmVkIClcbiAgICAgICAgICAgIGluaXRpYWxTdGF0ZSA9IHsgLi4uaW5pdGlhbFN0YXRlLCAuLi5jZmcuc3RhdGUgfTtcbiAgICAgICAgXG4gICAgICAgIGlmICggYXBwbHkgKVxuICAgICAgICAgICAgdGhpcy5hcHBseSA9IGFwcGx5O1xuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIGlmICggaW5pdGlhbFN0YXRlIHx8IHRoaXMuX3VzZS5sZW5ndGggKSB7Ly8gc3luYyBhcHBseVxuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgICAgICAuLi4oaW5pdGlhbFN0YXRlIHx8IHt9KSxcbiAgICAgICAgICAgICAgICAuLi5jb250ZXh0Lm1hcCh0aGlzLCB0aGlzLl91c2UpXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKCB0aGlzLnNob3VsZEFwcGx5KHRoaXMuc3RhdGUpICYmIHRoaXMuZGF0YSA9PT0gdW5kZWZpbmVkIClcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGEgPSB0aGlzLmFwcGx5KHRoaXMuZGF0YSwgdGhpcy5zdGF0ZSwgdGhpcy5zdGF0ZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCB0aGlzLmRhdGEgIT09IHVuZGVmaW5lZCApIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YWJsZSA9IHRydWU7IC8vIHN0YWJsZSBpZiBpdCBoYXZlIGluaXRpYWwgcmVzdWx0IGRhdGEgP1xuICAgICAgICAgICAgdGhpcy5fcmV2Kys7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9zdGFibGUgPSBmYWxzZTtcbiAgICAgICAgICAgIGlmICggIXRoaXMuc3RhdGUgJiYgKCF0aGlzLl91c2UgfHwgIXRoaXMuX3VzZS5sZW5ndGgpICkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIlJlc2NvcGUgc3RvcmUgJ1wiLCB0aGlzLm5hbWUsIFwiJyBoYXZlIG5vIGluaXRpYWwgZGF0YSwgc3RhdGUgb3IgdXNlLiBJdCBjYW4ndCBzdGFiaWxpemUuLi5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgIXRoaXMuX3N0YWJsZSAmJiB0aGlzLmVtaXQoJ3Vuc3RhYmxlJywgdGhpcy5zdGF0ZSk7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIGdldCBhIEJ1aWxkZXIta2V5IHBhaXIgZm9yIFN0b3JlOjptYXBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgICAqIEByZXR1cm5zIHt7c3RvcmU6IFN0b3JlLCBuYW1lOiAqfX1cbiAgICAgKi9cbiAgICBzdGF0aWMgYXMoIG5hbWUgKSB7XG4gICAgICAgIHJldHVybiB7IHN0b3JlOiB0aGlzLCBuYW1lIH07XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIE1hcCBhbGwgbmFtZWQgc3RvcmVzIGluIHtrZXlzfSB0byB0aGUge29iamVjdH0ncyBzdGF0ZVxuICAgICAqIEhvb2sgY29tcG9uZW50V2lsbFVubW91bnQgKGZvciByZWFjdCBjb21wKSBvciBkZXN0cm95IHRvIHVuQmluZCB0aGVtIGF1dG9tYXRpY2FsbHlcbiAgICAgKiBAc3RhdGljXG4gICAgICogQHBhcmFtIG9iamVjdCB7UmVhY3QuQ29tcG9uZW50fFN0b3JlfC4uLn0gdGFyZ2V0IHN0YXRlIGF3YXJlIG9iamVjdFxuICAgICAqIEBwYXJhbSBrZXlzIHtBcnJheX0gRXggOiBbXCJzZXNzaW9uXCIsIFwib3RoZXJTdGF0aWNOYW1lZFN0b3JlOmtleVwiLCBzdG9yZS5hcygnYW5vdGhlcktleScpXVxuICAgICAqL1xuICAgIHN0YXRpYyBtYXAoIGNvbXBvbmVudCwga2V5cywgY29udGV4dCwgb3JpZ2luLCBzZXRJbml0aWFsID0gZmFsc2UgKSB7XG4gICAgICAgIHZhciB0YXJnZXRSZXZzICAgICA9IGNvbXBvbmVudC5fcmV2cyB8fCB7fTtcbiAgICAgICAgdmFyIHRhcmdldENvbnRleHQgID0gY29tcG9uZW50LnN0b3JlcyB8fCAoY29tcG9uZW50LnN0b3JlcyA9IHt9KTtcbiAgICAgICAgdmFyIGluaXRpYWxPdXRwdXRzID0ge307XG4gICAgICAgIGtleXMgICAgICAgICAgICAgICA9IGlzLmFycmF5KGtleXMpID8gWy4uLmtleXNdIDogW2tleXNdO1xuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIGNvbnRleHQgPSBjb250ZXh0IHx8IFN0b3JlLnN0YXRpY0NvbnRleHQ7XG4gICAgICAgIFxuICAgICAgICBrZXlzICAgICAgICAgICA9IGtleXMuZmlsdGVyKFxuICAgICAgICAgICAgLy8gQHRvZG8gOiB1c2UgcXVlcnkgcmVmc1xuICAgICAgICAgICAgLy8gKHN0b3JlKShcXC5zdG9yZSkqKFxcWyhcXCp8KHByb3BzKVxcdyspKylcXF0pPyhcXDphbGlhcylcbiAgICAgICAgICAgICgga2V5ICkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICggIWtleSApIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIk5vdCBhIG1hcHBhYmxlIHN0b3JlIGl0ZW0gJ1wiICsga2V5ICsgXCInIGluIFwiICsgb3JpZ2luICsgJyAhIScpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxldCBuYW1lLFxuICAgICAgICAgICAgICAgICAgICBhbGlhcyxcbiAgICAgICAgICAgICAgICAgICAgcGF0aCxcbiAgICAgICAgICAgICAgICAgICAgc3RvcmU7XG4gICAgICAgICAgICAgICAgaWYgKCBrZXkuc3RvcmUgJiYga2V5Lm5hbWUgKSB7XG4gICAgICAgICAgICAgICAgICAgIGFsaWFzID0gbmFtZSA9IGtleS5uYW1lO1xuICAgICAgICAgICAgICAgICAgICBzdG9yZSA9IGtleS5zdG9yZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoIGlzLmZuKGtleSkgKSB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWUgPSBhbGlhcyA9IGtleS5uYW1lIHx8IGtleS5kZWZhdWx0TmFtZTtcbiAgICAgICAgICAgICAgICAgICAgc3RvcmUgPSBrZXk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBrZXkgICA9IGtleS5tYXRjaCgvKFtcXHdfXSspKCg/OlxcLltcXHdfXSspKikoPzpcXDooW1xcd19dKykpPy8pO1xuICAgICAgICAgICAgICAgICAgICBuYW1lICA9IGtleVsxXTtcbiAgICAgICAgICAgICAgICAgICAgcGF0aCAgPSBrZXlbMl0gJiYga2V5WzJdLnNwbGl0KCcuJykuc2xpY2UoMSk7XG4gICAgICAgICAgICAgICAgICAgIHN0b3JlID0gY29udGV4dC5zdG9yZXNba2V5WzFdXTtcbiAgICAgICAgICAgICAgICAgICAgYWxpYXMgPSBrZXlbM10gfHwgcGF0aCAmJiBwYXRoW3BhdGgubGVuZ3RoIC0gMV0gfHwga2V5WzFdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAoIHRhcmdldFJldnNbbmFtZV0gKSByZXR1cm4gZmFsc2U7Ly8gaWdub3JlIGRibCB1c2VzIGZvciBub3dcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAoICFzdG9yZSApIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIk5vdCBhIG1hcHBhYmxlIHN0b3JlIGl0ZW0gJ1wiICsgbmFtZSArIFwiL1wiICsgYWxpYXMgKyBcIicgaW4gXCIgKyBvcmlnaW4gKyAnICEhJywgc3RvcmUpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKCBpcy5mbihzdG9yZSkgKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQuX21vdW50KG5hbWUpXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LnN0b3Jlc1tuYW1lXS5iaW5kKGNvbXBvbmVudCwgYWxpYXMsIHNldEluaXRpYWwsIHBhdGgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc3RvcmUuYmluZChjb21wb25lbnQsIGFsaWFzLCBzZXRJbml0aWFsLCBwYXRoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGFyZ2V0UmV2c1thbGlhc10gPSB0YXJnZXRSZXZzW2FsaWFzXSB8fCB0cnVlO1xuICAgICAgICAgICAgICAgICF0YXJnZXRDb250ZXh0W25hbWVdICYmICh0YXJnZXRDb250ZXh0W25hbWVdID0gY29udGV4dC5zdG9yZXNbbmFtZV0pO1xuICAgICAgICAgICAgICAgIGlmICggY29udGV4dC5zdG9yZXNbbmFtZV0uaGFzT3duUHJvcGVydHkoJ2RhdGEnKSApXG4gICAgICAgICAgICAgICAgICAgIGluaXRpYWxPdXRwdXRzW25hbWVdID0gY29udGV4dC5kYXRhW25hbWVdO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICB2YXIgbWl4ZWRDV1VubW91bnQsXG4gICAgICAgICAgICB1bk1vdW50S2V5ID0gY29tcG9uZW50LmlzUmVhY3RDb21wb25lbnQgPyBcImNvbXBvbmVudFdpbGxVbm1vdW50XCIgOiBcImRlc3Ryb3lcIjtcbiAgICAgICAgXG4gICAgICAgIGlmICggY29tcG9uZW50Lmhhc093blByb3BlcnR5KHVuTW91bnRLZXkpICkge1xuICAgICAgICAgICAgbWl4ZWRDV1VubW91bnQgPSBjb21wb25lbnRbdW5Nb3VudEtleV07XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGNvbXBvbmVudFt1bk1vdW50S2V5XSA9ICggLi4uYXJneiApID0+IHtcbiAgICAgICAgICAgIGRlbGV0ZSBjb21wb25lbnRbdW5Nb3VudEtleV07XG4gICAgICAgICAgICBpZiAoIG1peGVkQ1dVbm1vdW50IClcbiAgICAgICAgICAgICAgICBjb21wb25lbnRbdW5Nb3VudEtleV0gPSBtaXhlZENXVW5tb3VudDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAga2V5cy5tYXAoXG4gICAgICAgICAgICAgICAgKCBrZXkgKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpYXMsIHBhdGgsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9yZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBrZXkuc3RvcmUgJiYga2V5Lm5hbWUgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlhcyA9IG5hbWUgPSBrZXkubmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlID0ga2V5LnN0b3JlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKCBpcy5mbihrZXkpICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZSA9IGFsaWFzID0ga2V5Lm5hbWUgfHwga2V5LmRlZmF1bHROYW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmUgPSBjb250ZXh0LnN0b3Jlc1tuYW1lXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleSAgID0ga2V5Lm1hdGNoKC8oW1xcd19dKykoKD86XFwuW1xcd19dKykqKSg/OlxcOihbXFx3X10rKSk/Lyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lICA9IGtleVsxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGggID0ga2V5WzJdICYmIGtleVsyXS5zcGxpdCgnLicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmUgPSBjb250ZXh0LnN0b3Jlc1trZXlbMV1dO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpYXMgPSBrZXlbM10gfHwgcGF0aCAmJiBwYXRoW3BhdGgubGVuZ3RoIC0gMV0gfHwga2V5WzFdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBzdG9yZSAmJiAhaXMuZm4oc3RvcmUpICYmIHN0b3JlLnVuQmluZChjb21wb25lbnQsIGFsaWFzLCBwYXRoKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICByZXR1cm4gY29tcG9uZW50W3VuTW91bnRLZXldICYmIGNvbXBvbmVudFt1bk1vdW50S2V5XSguLi5hcmd6KTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGluaXRpYWxPdXRwdXRzO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBAZGVwcmVjYXRlZFxuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqL1xuICAgIGdldCBkYXRhcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogQGRlcHJlY2F0ZWRcbiAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgKi9cbiAgICBzZXQgZGF0YXMoIHYgKSB7XG4gICAgICAgIGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQoXCJSZXNjb3BlIHN0b3JlIDogU2V0dGluZyBkYXRhcyBpcyBkZXByZWNpYXRlZCwgdXNlIGRhdGFcIik7XG4gICAgICAgIGNvbnNvbGUubG9nKChuZXcgRXJyb3IoKSkuc3RhY2spO1xuICAgICAgICBjb25zb2xlLmdyb3VwRW5kKCk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmRhdGEgPSB2O1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBPdmVycmlkYWJsZSBtZXRob2QgdG8ga25vdyBpZiBhIHN0YXRlIGNoYW5nZSBzaG91bGQgYmUgcHJvcGFnIHRvIHRoZSBsaXN0ZW5pbmcgc3RvcmVzICYgY29tcG9uZW50c1xuICAgICAqIElmIHN0YXRpYyBmb2xsb3cgaXMgZGVmaW5lZCwgc2hvdWxkUHJvcGFnIHdpbGwgcmV0dXJuIHRydWUgaWYgYW55IG9mIHRoZSBcImZvbGxvd1wiIGtleXMgd2FzIHVwZGF0ZWRcbiAgICAgKiBJZiBub3QgaXQgd2lsbCBhbHdheXMgcmV0dXJuIHRydWVcbiAgICAgKi9cbiAgICBzaG91bGRQcm9wYWcoIG5EYXRhcyApIHtcbiAgICAgICAgdmFyIF9zdGF0aWMgPSB0aGlzLmNvbnN0cnVjdG9yLCByLFxuICAgICAgICAgICAgY0RhdGFzICA9IHRoaXMuZGF0YTtcbiAgICAgICAgciAgICAgICAgICAgPSAhY0RhdGFzICYmIG5EYXRhcztcbiAgICAgICAgLy8gaWYgKCAhY1N0YXRlIClcbiAgICAgICAgLy8gICAgIHJldHVybiB0cnVlO1xuICAgICAgICAvL2lmICggIWNEYXRhcyAmJiAoIV9zdGF0aWMuZm9sbG93IHx8ICFfc3RhdGljLmZvbGxvdy5sZW5ndGggfHxcbiAgICAgICAgLy8gICAgICAgIF9zdGF0aWMuZm9sbG93ICYmIF9zdGF0aWMuZm9sbG93LnJlZHVjZSgoIHIsIGkgKSA9PiAociB8fCBuRGF0YXMgJiYgbkRhdGFzW2ldKSwgZmFsc2UpKSApXG4gICAgICAgIC8vICAgIHJldHVybiB0cnVlO1xuICAgICAgICAvL1xuICAgICAgICAvL2lmICggaXMuYXJyYXkoX3N0YXRpYy5mb2xsb3cpIClcbiAgICAgICAgLy8gICAgX3N0YXRpYy5mb2xsb3cuZm9yRWFjaChcbiAgICAgICAgLy8gICAgICAgICgga2V5ICkgPT4ge1xuICAgICAgICAvLyAgICAgICAgICAgIHIgPSByIHx8IChuRGF0YXMgPyBjRGF0YXNba2V5XSAhPT0gbkRhdGFzW2tleV0gOiBjRGF0YXMgJiYgY0RhdGFzW2tleV0pXG4gICAgICAgIC8vICAgICAgICB9XG4gICAgICAgIC8vICAgICk7XG4gICAgICAgIC8vZWxzZSBpZiAoIF9zdGF0aWMuZm9sbG93ID09PSAnc3RyaWN0JyApXG4gICAgICAgIC8vICAgIHIgPSBuRGF0YXMgPT09IGNEYXRhcztcbiAgICAgICAgLy9lbHNlIHtcbiAgICAgICAgY0RhdGFzICYmIE9iamVjdC5rZXlzKGNEYXRhcykuZm9yRWFjaChcbiAgICAgICAgICAgICgga2V5ICkgPT4ge1xuICAgICAgICAgICAgICAgIHIgPSByIHx8IChuRGF0YXMgPyBjRGF0YXNba2V5XSAhPT0gbkRhdGFzW2tleV0gOiBjRGF0YXMgJiYgY0RhdGFzW2tleV0pXG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIG5EYXRhcyAmJiBPYmplY3Qua2V5cyhuRGF0YXMpLmZvckVhY2goXG4gICAgICAgICAgICAoIGtleSApID0+IHtcbiAgICAgICAgICAgICAgICByID0gciB8fCAobkRhdGFzID8gY0RhdGFzW2tleV0gIT09IG5EYXRhc1trZXldIDogY0RhdGFzICYmIGNEYXRhc1trZXldKVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICAvL31cbiAgICAgICAgLy9cbiAgICAgICAgcmV0dXJuICEhcjtcbiAgICB9XG4gICAgXG4gICAgc2hvdWxkQXBwbHkoIHN0YXRlID0gdGhpcy5zdGF0ZSApIHtcbiAgICAgICAgdmFyIF9zdGF0aWMgPSB0aGlzLmNvbnN0cnVjdG9yO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICB0aGlzLmlzQ29tcGxldGUoc3RhdGUpXG4gICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAmJlxuICAgICAgICAgICAgICAgaXMuYXJyYXkoX3N0YXRpYy5mb2xsb3cpXG4gICAgICAgICAgICA/IF9zdGF0aWMuZm9sbG93XG4gICAgICAgICAgICAgICAgICAgICAucmVkdWNlKCggciwgaSApID0+IChyIHx8IHN0YXRlICYmIHN0YXRlW2ldKSwgZmFsc2UpXG4gICAgICAgICAgICA6IF9zdGF0aWMuZm9sbG93XG4gICAgICAgICAgICAgICAgICAgPyBPYmplY3Qua2V5cyhfc3RhdGljLmZvbGxvdylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZWR1Y2UoKCByLCBpICkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8fCBzdGF0ZSAmJiBpcy5mbihfc3RhdGljLmZvbGxvd1tpXSkgJiYgX3N0YXRpYy5mb2xsb3dbaV0uY2FsbCh0aGlzLCBzdGF0ZVtpXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8fCBfc3RhdGljLmZvbGxvd1tpXSAmJiBzdGF0ZVtpXSAhPT0gdGhpcy5zdGF0ZVtpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgZmFsc2UpIDogdHJ1ZTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogT3ZlcnJpZGFibGUgYXBwbGllciAvIHJlbWFwcGVyXG4gICAgICogSWYgc3RhdGUgb3IgbGFzdFB1YmxpY1N0YXRlIGFyZSBzaW1wbGUgaGFzaCBtYXBzIGFwcGx5IHdpbGwgcmV0dXJuIHsuLi5kYXRhLCAuLi5zdGF0ZX1cbiAgICAgKiBpZiBub3QgaXQgd2lsbCByZXR1cm4gdGhlIGxhc3QgcHJpdmF0ZSBzdGF0ZVxuICAgICAqIEBwYXJhbSBkYXRhXG4gICAgICogQHBhcmFtIHN0YXRlXG4gICAgICogQHJldHVybnMgeyp9XG4gICAgICovXG4gICAgYXBwbHkoIGRhdGEsIHN0YXRlLCBjaGFuZ2VzICkge1xuICAgICAgICBzdGF0ZSA9IHN0YXRlIHx8IHRoaXMuc3RhdGU7XG4gICAgICAgIFxuICAgICAgICBpZiAoIHRoaXMucmVmaW5lIClcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlZmluZSguLi5hcmd1bWVudHMpO1xuICAgICAgICBcbiAgICAgICAgaWYgKCAhZGF0YSB8fCBkYXRhLl9fcHJvdG9fXyAhPT0gb2JqUHJvdG8gfHwgc3RhdGUuX19wcm90b19fICE9PSBvYmpQcm90byApXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHJldHVybiB7IC4uLmRhdGEsIC4uLnN0YXRlIH1cbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogQGRlcHJlY2lhdGVkXG4gICAgICogQHBhcmFtIGRhdGFcbiAgICAgKiBAcGFyYW0gc3RhdGVcbiAgICAgKiBAcGFyYW0gY2hhbmdlc1xuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqL1xuICAgIHJlZmluZSggZGF0YSwgc3RhdGUsIGNoYW5nZXMgKSB7XG4gICAgICAgIHN0YXRlID0gc3RhdGUgfHwgdGhpcy5zdGF0ZTtcbiAgICAgICAgXG4gICAgICAgIGlmICggIWRhdGEgfHwgZGF0YS5fX3Byb3RvX18gIT09IG9ialByb3RvIHx8IHN0YXRlLl9fcHJvdG9fXyAhPT0gb2JqUHJvdG8gKVxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICByZXR1cm4geyAuLi5kYXRhLCAuLi5zdGF0ZSB9XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIERlYm91bmNlIHRoaXMgc3RvcmUgcHJvcGFnYXRpb24gKCAmIHJlZHVjaW5nIClcbiAgICAgKiBAcGFyYW0gY2JcbiAgICAgKi9cbiAgICBzdGFiaWxpemUoIGNiICkge1xuICAgICAgICBjYiAmJiB0aGlzLm9uY2UoJ3N0YWJsZScsIGNiKTtcbiAgICAgICAgdGhpcy5fc3RhYmxlICYmIHRoaXMuZW1pdCgndW5zdGFibGUnLCB0aGlzLnN0YXRlLCB0aGlzLmRhdGEpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fc3RhYmxlID0gZmFsc2U7XG4gICAgICAgIFxuICAgICAgICBpZiAoIHRoaXMuX3N0YWJpbGl6ZXIgKVxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX3N0YWJpbGl6ZXIpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fc3RhYmlsaXplciA9IHNldFRpbWVvdXQoXG4gICAgICAgICAgICB0aGlzLnB1c2guYmluZChcbiAgICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgKCkgPT4gey8vQHRvZG9cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGxldCBzdGFibGUgICA9IHRoaXMuX3N0YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc3RhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgIXN0YWJsZSAmJiB0aGlzLmVtaXQoJ3N0YWJsZScsIHRoaXMuc3RhdGUsIHRoaXMuZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3N0YWJpbGl6ZXIgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnJlbGVhc2UoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApKTtcbiAgICB9XG4gICAgXG4gICAgcmV0cmlldmUoIHBhdGgsIGkgPSAwLCBvYmogPSB0aGlzLmRhdGEgKSB7XG4gICAgICAgIHBhdGggPSBpcy5zdHJpbmcocGF0aCkgPyBwYXRoLnNwbGl0KCcuJykgOiBwYXRoO1xuICAgICAgICByZXR1cm4gIW9iaiB8fCAhcGF0aCB8fCAhcGF0aC5sZW5ndGhcbiAgICAgICAgICAgID8gb2JqXG4gICAgICAgICAgICA6IHBhdGgubGVuZ3RoID09IGkgKyAxXG4gICAgICAgICAgICAgICAgICAgPyBvYmpbcGF0aFtpXV1cbiAgICAgICAgICAgICAgICAgICA6IHRoaXMucmV0cmlldmUocGF0aCwgaSArIDEsIG9ialtwYXRoW2ldXSk7XG4gICAgfVxuICAgIFxuICAgIGRpc3BhdGNoKCBhY3Rpb24sIC4uLmFyZ3ogKSB7XG4gICAgICAgIHRoaXMuY29udGV4dE9iai5kaXNwYXRjaChhY3Rpb24sIC4uLmFyZ3opO1xuICAgIH1cbiAgICBcbiAgICB0cmlnZ2VyKCBhY3Rpb24sIC4uLmFyZ3ogKSB7XG4gICAgICAgIGxldCB7IGFjdGlvbnMgfSA9IHRoaXMuY29uc3RydWN0b3IsXG4gICAgICAgICAgICBucztcbiAgICAgICAgaWYgKCBhY3Rpb25zICYmIGFjdGlvbnNbYWN0aW9uXSApIHtcbiAgICAgICAgICAgIG5zID0gYWN0aW9uc1thY3Rpb25dLmNhbGwodGhpcywgLi4uYXJneik7XG4gICAgICAgICAgICBucyAmJiB0aGlzLnNldFN0YXRlKG5zKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBQdWxsIHN0b3JlcyBpbiB0aGUgcHJpdmF0ZSBzdGF0ZVxuICAgICAqIEBwYXJhbSBzdG9yZXMgIHtBcnJheX0gKHBhc3NlZCB0byBTdG9yZTo6bWFwKSBFeCA6IFtcInNlc3Npb25cIiwgXCJvdGhlck5hbWVkU3RvcmU6a2V5XCIsIG90aGVyU3RvcmUuYXMoXCJvdGhlcktleVwiKV1cbiAgICAgKi9cbiAgICBwdWxsKCBzdG9yZXMsIGRvV2FpdCwgb3JpZ2luICkge1xuICAgICAgICBsZXQgaW5pdGlhbE91dHB1dHMgPSB0aGlzLmNvbnRleHRPYmoubWFwKHRoaXMsIHN0b3Jlcyk7XG4gICAgICAgIGlmICggZG9XYWl0ICkge1xuICAgICAgICAgICAgdGhpcy53YWl0KCk7XG4gICAgICAgICAgICBzdG9yZXMuZm9yRWFjaCgoIHMgKSA9PiB0aGlzLmNvbnRleHRbc10gJiYgdGhpcy53YWl0KHRoaXMuY29udGV4dFtzXSkpO1xuICAgICAgICAgICAgdGhpcy5yZWxlYXNlKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGluaXRpYWxPdXRwdXRzO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBBcHBseSBhcHBseS9yZW1hcCBvbiB0aGUgcHJpdmF0ZSBzdGF0ZSAmIHB1c2ggdGhlIHJlc3VsdGluZyBcInB1YmxpY1wiIHN0YXRlIHRvIGZvbGxvd2Vyc1xuICAgICAqIEBwYXJhbSBjYlxuICAgICAqL1xuICAgIHB1c2goIGRhdGEsIGZvcmNlLCBjYiApIHtcbiAgICAgICAgY2IgICAgICAgICAgICA9IGZvcmNlID09PSB0cnVlID8gY2IgOiBmb3JjZTtcbiAgICAgICAgZm9yY2UgICAgICAgICA9IGZvcmNlID09PSB0cnVlO1xuICAgICAgICB2YXIgaSAgICAgICAgID0gMCxcbiAgICAgICAgICAgIG1lICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBuZXh0U3RhdGUgPSAhZGF0YSAmJiB7IC4uLnRoaXMuc3RhdGUsIC4uLnRoaXMuX2NoYW5nZXNTVyB9IHx8IHRoaXMuc3RhdGUsXG4gICAgICAgICAgICBuZXh0RGF0YXMgPSBkYXRhIHx8IHRoaXMuYXBwbHkodGhpcy5kYXRhLCBuZXh0U3RhdGUsIHRoaXMuX2NoYW5nZXNTVyk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLnN0YXRlID0gbmV4dFN0YXRlO1xuICAgICAgICBpZiAoICFmb3JjZSAmJlxuICAgICAgICAgICAgKFxuICAgICAgICAgICAgICAgICghdGhpcy5kYXRhICYmIHRoaXMuZGF0YSA9PT0gbmV4dERhdGFzKSB8fCAhdGhpcy5zaG91bGRQcm9wYWcobmV4dERhdGFzKVxuICAgICAgICAgICAgKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIGNiICYmIGNiKCk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRoaXMuZGF0YSAgICAgICA9IG5leHREYXRhcztcbiAgICAgICAgdGhpcy5fY2hhbmdlc1NXID0ge307XG4gICAgICAgIC8vdGhpcy5fX2xvY2tzLmFsbCsrO1xuICAgICAgICB0aGlzLndhaXQoKTtcbiAgICAgICAgdGhpcy5yZWxlYXNlKGNiKTtcbiAgICAgICAgXG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSB0aGUgY3VycmVudCBwcml2YXRlIHN0YXRlICYgcHVzaCBpdCBvbmNlIHRoZSBzdG9yZSBpcyBzdGFibGVcbiAgICAgKiBAcGFyYW0gcFN0YXRlXG4gICAgICogQHBhcmFtIGNiXG4gICAgICovXG4gICAgc2V0U3RhdGUoIHBTdGF0ZSwgY2IsIHN5bmMgKSB7XG4gICAgICAgIHZhciBpICAgICAgID0gMCwgY2hhbmdlLFxuICAgICAgICAgICAgY2hhbmdlcyA9IHRoaXMuX2NoYW5nZXNTVyA9IHRoaXMuX2NoYW5nZXNTVyB8fCB7fTtcbiAgICAgICAgZm9yICggdmFyIGsgaW4gcFN0YXRlIClcbiAgICAgICAgICAgIGlmICggIXRoaXMuc3RhdGUgfHwgcFN0YXRlLmhhc093blByb3BlcnR5KGspXG4gICAgICAgICAgICAgICAgJiYgKFxuICAgICAgICAgICAgICAgICAgICBwU3RhdGVba10gIT0gdGhpcy5zdGF0ZVtrXVxuICAgICAgICAgICAgICAgICAgICB8fFxuICAgICAgICAgICAgICAgICAgICAodGhpcy5zdGF0ZVtrXSAmJiBwU3RhdGVba10gJiYgKHBTdGF0ZVtrXS5fcmV2ICE9IHRoaXMuX3JldnNba10pKS8vIHJldi9oYXNoIHVwZGF0ZVxuICAgICAgICAgICAgICAgICkgKSB7XG4gICAgICAgICAgICAgICAgY2hhbmdlICAgICAgICA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5fcmV2c1trXSA9IHBTdGF0ZVtrXSAmJiBwU3RhdGVba10uX3JldiB8fCB0cnVlO1xuICAgICAgICAgICAgICAgIGNoYW5nZXNba10gICAgPSBwU3RhdGVba107XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAoICF0aGlzLnNob3VsZEFwcGx5KHsgLi4udGhpcy5zdGF0ZSwgLi4uY2hhbmdlcyB9KSApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKCBzeW5jICkge1xuICAgICAgICAgICAgdGhpcy5wdXNoKCk7XG4gICAgICAgICAgICBjYiAmJiBjYigpO1xuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoIGNoYW5nZSApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YWJpbGl6ZShjYik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGNiICYmIGNiKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSB0aGUgY3VycmVudCBwcml2YXRlIHN0YXRlICYgcHVzaCBpdCBvbmNlIHRoZSBzdG9yZSBpcyBzdGFibGVcbiAgICAgKiBAcGFyYW0gcFN0YXRlXG4gICAgICogQHBhcmFtIGNiXG4gICAgICovXG4gICAgc2V0U3RhdGVTeW5jKCBwU3RhdGUgKSB7XG4gICAgICAgIHZhciBpICAgICAgID0gMCwgY2hhbmdlLFxuICAgICAgICAgICAgY2hhbmdlcyA9IHRoaXMuX2NoYW5nZXNTVyA9IHRoaXMuX2NoYW5nZXNTVyB8fCB7fTtcbiAgICAgICAgZm9yICggdmFyIGsgaW4gcFN0YXRlIClcbiAgICAgICAgICAgIGlmICggIXRoaXMuc3RhdGUgfHwgcFN0YXRlLmhhc093blByb3BlcnR5KGspXG4gICAgICAgICAgICAgICAgJiYgKFxuICAgICAgICAgICAgICAgICAgICBwU3RhdGVba10gIT0gdGhpcy5zdGF0ZVtrXVxuICAgICAgICAgICAgICAgICAgICB8fFxuICAgICAgICAgICAgICAgICAgICAodGhpcy5zdGF0ZVtrXSAmJiBwU3RhdGVba10gJiYgKHBTdGF0ZVtrXS5fcmV2ICE9IHRoaXMuX3JldnNba10pKS8vIHJldi9oYXNoIHVwZGF0ZVxuICAgICAgICAgICAgICAgICkgKSB7XG4gICAgICAgICAgICAgICAgY2hhbmdlICAgICAgICA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5fcmV2c1trXSA9IHBTdGF0ZVtrXSAmJiBwU3RhdGVba10uX3JldiB8fCB0cnVlO1xuICAgICAgICAgICAgICAgIGNoYW5nZXNba10gICAgPSBwU3RhdGVba107XG4gICAgICAgICAgICB9XG4gICAgICAgIHRoaXMucHVzaCgpO1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBSZXBsYWNlIHRoZSBjdXJyZW50IHByaXZhdGUgc3RhdGUgJiBwdXNoIGl0IG9uY2UgdGhlIHN0b3JlIGlzIHN0YWJsZVxuICAgICAqIEBwYXJhbSBwU3RhdGVcbiAgICAgKiBAcGFyYW0gY2JcbiAgICAgKi9cbiAgICByZXBsYWNlU3RhdGUoIHBTdGF0ZSwgY2IgKSB7XG4gICAgICAgIHZhciBpICAgICAgPSAwLCBtZSA9IHRoaXM7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBwU3RhdGU7XG4gICAgICAgIFxuICAgICAgICB0aGlzLnN0YWJpbGl6ZShjYik7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIGdldCBhIHN0b3JlLWtleSBwYWlyIGZvciBTdG9yZTo6bWFwXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICAgKiBAcmV0dXJucyB7e3N0b3JlOiBTdG9yZSwgbmFtZTogKn19XG4gICAgICovXG4gICAgYXMoIG5hbWUgKSB7XG4gICAgICAgIHJldHVybiB7IHN0b3JlOiB0aGlzLCBuYW1lIH07XG4gICAgfVxuICAgIFxuICAgIG9uKCBsaXN0cyApIHtcbiAgICAgICAgaWYgKCAhaXMuc3RyaW5nKGxpc3RzKSAmJiBsaXN0cyApXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhsaXN0cykuZm9yRWFjaChrID0+IHN1cGVyLm9uKGssIGxpc3RzW2tdKSk7XG4gICAgICAgIGVsc2Ugc3VwZXIub24oLi4uYXJndW1lbnRzKTtcbiAgICB9XG4gICAgXG4gICAgcmVtb3ZlTGlzdGVuZXIoIGxpc3RzICkge1xuICAgICAgICBpZiAoICFpcy5zdHJpbmcobGlzdHMpICYmIGxpc3RzIClcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGxpc3RzKS5mb3JFYWNoKGsgPT4gc3VwZXIucmVtb3ZlTGlzdGVuZXIoaywgbGlzdHNba10pKTtcbiAgICAgICAgZWxzZSBzdXBlci5yZW1vdmVMaXN0ZW5lciguLi5hcmd1bWVudHMpO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiByZWxpbmsgYmluZGluZ3MgJiByZXF1aXJlc1xuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gICAgICogQHJldHVybnMge3tzdG9yZTogU3RvcmUsIG5hbWU6ICp9fVxuICAgICAqL1xuICAgIHJlbGluayggZnJvbSApIHtcbiAgICAgICAgbGV0IGNvbnRleHQgPSB0aGlzLmNvbnRleHRPYmosXG4gICAgICAgICAgICBfc3RhdGljID0gdGhpcy5jb25zdHJ1Y3RvcjtcbiAgICAgICAgaWYgKCBfc3RhdGljLnVzZSApIHtcbiAgICAgICAgICAgIC8vdG9kbyB1bmxpbmtcbiAgICAgICAgICAgIHRoaXMucHVsbChfc3RhdGljLnVzZSwgZmFsc2UsIGZyb20pO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAoIHRoaXMuX3JlcXVpcmUgKSB7XG4gICAgICAgICAgICB0aGlzLl9yZXF1aXJlLmZvckVhY2goXG4gICAgICAgICAgICAgICAgc3RvcmUgPT4gKFxuICAgICAgICAgICAgICAgICAgICB0aGlzLndhaXQoY29udGV4dC5fX2NvbnRleHRbc3RvcmVdKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogaXMgY29tcGxldGUgKGFsbCByZXF1aWVyZWQga2V5cyBhcmUgaGVyZSlcbiAgICAgKiBAcmV0dXJucyBib29sXG4gICAgICovXG4gICAgaXNDb21wbGV0ZSggc3RhdGUgPSB0aGlzLnN0YXRlICkge1xuICAgICAgICB2YXIgX3N0YXRpYyA9IHRoaXMuY29uc3RydWN0b3I7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAhdGhpcy5fcmVxdWlyZVxuICAgICAgICAgICAgfHwgIXRoaXMuX3JlcXVpcmUubGVuZ3RoXG4gICAgICAgICAgICB8fCBzdGF0ZSAmJiB0aGlzLl9yZXF1aXJlLnJlZHVjZShcbiAgICAgICAgICAgICAgICAoIHIsIGtleSApID0+IChyICYmIHN0YXRlW2tleV0pLFxuICAgICAgICAgICAgICAgIHRydWVcbiAgICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogaXMgc3RhYmxlXG4gICAgICogQHJldHVybnMgYm9vbFxuICAgICAqL1xuICAgIGlzU3RhYmxlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc3RhYmxlO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBVbiBiaW5kIHRoaXMgc3RvcmUgb2ZmIHRoZSBnaXZlbiBjb21wb25lbnQta2V5XG4gICAgICogQHBhcmFtIG9ialxuICAgICAqIEBwYXJhbSBrZXlcbiAgICAgKiBAcmV0dXJucyB7QXJyYXkuPCo+fVxuICAgICAqL1xuICAgIHVuQmluZCggb2JqLCBrZXksIHBhdGggKSB7XG4gICAgICAgIHZhciBmb2xsb3dlcnMgPSB0aGlzLl9mb2xsb3dlcnMsXG4gICAgICAgICAgICBpICAgICAgICAgPSBmb2xsb3dlcnMgJiYgZm9sbG93ZXJzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBmb2xsb3dlcnMgJiYgaS0tIClcbiAgICAgICAgICAgIGlmICggZm9sbG93ZXJzW2ldWzBdID09PSBvYmogJiYgZm9sbG93ZXJzW2ldWzFdID09PSBrZXkgJiYgZm9sbG93ZXJzW2ldWzJdID09PSBwYXRoIClcbiAgICAgICAgICAgICAgICByZXR1cm4gZm9sbG93ZXJzLnNwbGljZShpLCAxKTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogQmluZCB0aGlzIHN0b3JlIGNoYW5nZXMgdG8gdGhlIGdpdmVuIGNvbXBvbmVudC1rZXlcbiAgICAgKiBAcGFyYW0gb2JqIHtSZWFjdC5Db21wb25lbnR8U3RvcmV8ZnVuY3Rpb24pXG4gICAgICogQHBhcmFtIGtleSB7c3RyaW5nfSBvcHRpb25hbCBrZXkgd2hlcmUgdG8gbWFwIHRoZSBwdWJsaWMgc3RhdGVcbiAgICAgKi9cbiAgICBiaW5kKCBvYmosIGtleSwgc2V0SW5pdGlhbCA9IHRydWUsIHBhdGggKSB7XG4gICAgICAgIHRoaXMuX2ZvbGxvd2Vycy5wdXNoKFtvYmosIGtleSwgcGF0aF0pO1xuICAgICAgICBpZiAoIHNldEluaXRpYWwgJiYgdGhpcy5kYXRhICYmIHRoaXMuX3N0YWJsZSApIHtcbiAgICAgICAgICAgIGxldCBkYXRhID0gcGF0aCA/IHRoaXMucmV0cmlldmUocGF0aCkgOiB0aGlzLmRhdGE7XG4gICAgICAgICAgICBpZiAoIHR5cGVvZiBvYmogIT0gXCJmdW5jdGlvblwiICkge1xuICAgICAgICAgICAgICAgIGlmICgga2V5ICkgb2JqLnNldFN0YXRlKHsgW2tleV06IGRhdGEgfSk7XG4gICAgICAgICAgICAgICAgZWxzZSBvYmouc2V0U3RhdGUoZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBvYmooZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogb25jZSgnc3RhYmxlJywgY2IpXG4gICAgICogQHBhcmFtIG9iaiB7UmVhY3QuQ29tcG9uZW50fFN0b3JlfGZ1bmN0aW9uKVxuICAgICAqIEBwYXJhbSBrZXkge3N0cmluZ30gb3B0aW9uYWwga2V5IHdoZXJlIHRvIG1hcCB0aGUgcHVibGljIHN0YXRlXG4gICAgICovXG4gICAgdGhlbiggY2IgKSB7XG4gICAgICAgIGlmICggdGhpcy5fc3RhYmxlIClcbiAgICAgICAgICAgIHJldHVybiBjYihudWxsLCB0aGlzLmRhdGEpO1xuICAgICAgICB0aGlzLm9uY2UoJ3N0YWJsZScsIGUgPT4gY2IobnVsbCwgdGhpcy5kYXRhKSk7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIEFkZCBhIGxvY2sgc28gdGhlIHN0b3JlIHdpbGwgbm90IHByb3BhZyBpdCBzdGF0ZSB1bnRpbGwgcmVsZWFzZSgpIGlzIGNhbGxcbiAgICAgKiBAcGFyYW0gcHJldmlvdXMge1N0b3JlfG51bWJlcnxBcnJheX0gQG9wdGlvbmFsIHdmIHRvIHdhaXQsIHJlbGVhc2VzIHRvIHdhaXQgb3IgYXJyYXkgb2Ygc3R1ZmYgdG8gd2FpdFxuICAgICAqIEByZXR1cm5zIHtUYXNrRmxvd31cbiAgICAgKi9cbiAgICB3YWl0KCBwcmV2aW91cyApIHtcbiAgICAgICAgaWYgKCB0eXBlb2YgcHJldmlvdXMgPT0gXCJudW1iZXJcIiApXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fX2xvY2tzLmFsbCArPSBwcmV2aW91cztcbiAgICAgICAgaWYgKCBpcy5hcnJheShwcmV2aW91cykgKVxuICAgICAgICAgICAgcmV0dXJuIHByZXZpb3VzLm1hcCh0aGlzLndhaXQuYmluZCh0aGlzKSk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9zdGFibGUgJiYgdGhpcy5lbWl0KCd1bnN0YWJsZScsIHRoaXMuc3RhdGUsIHRoaXMuZGF0YSk7XG4gICAgICAgIHRoaXMuX3N0YWJsZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9fbG9ja3MuYWxsKys7XG4gICAgICAgIFxuICAgICAgICBsZXQgcmVhc29uID0gaXMuc3RyaW5nKHByZXZpb3VzKSA/IHByZXZpb3VzIDogbnVsbDtcbiAgICAgICAgaWYgKCByZWFzb24gKSB7XG4gICAgICAgICAgICB0aGlzLl9fbG9ja3NbcmVhc29uXSA9IHRoaXMuX19sb2Nrc1tyZWFzb25dIHx8IDA7XG4gICAgICAgICAgICB0aGlzLl9fbG9ja3NbcmVhc29uXSsrO1xuICAgICAgICB9XG4gICAgICAgIGlmICggcHJldmlvdXMgJiYgaXMuZm4ocHJldmlvdXMudGhlbikgKSB7XG4gICAgICAgICAgICBwcmV2aW91cy50aGVuKHRoaXMucmVsZWFzZS5iaW5kKHRoaXMsIG51bGwpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogRGVjcmVhc2UgbG9ja3MgZm9yIHRoaXMgc3RvcmUsIGlmIGl0IHJlYWNoIDAgJiBpdCBoYXZlIGEgcHVibGljIHN0YXRlLFxuICAgICAqIGl0IHdpbGwgYmUgcHJvcGFnYXRlZCB0byB0aGUgZm9sbG93ZXJzLFxuICAgICAqIHRoZW4sIGFsbCBzdHVmZiBwYXNzZWQgdG8gXCJ0aGVuXCIgY2FsbCBiYWNrIHdpbGwgYmUgZXhlYyAvIHJlbGVhc2VkXG4gICAgICogQHBhcmFtIGRlc3luY1xuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqL1xuICAgIHJlbGVhc2UoIHJlYXNvbiwgY2IgKSB7XG4gICAgICAgIHZhciBfc3RhdGljID0gdGhpcy5jb25zdHJ1Y3RvcjtcbiAgICAgICAgbGV0IGkgICAgICAgPSAwLCB3YXNTdGFibGUgPSB0aGlzLl9zdGFibGU7XG4gICAgICAgIFxuICAgICAgICBpZiAoIGlzLmZuKHJlYXNvbikgKSB7XG4gICAgICAgICAgICBjYiAgICAgPSByZWFzb247XG4gICAgICAgICAgICByZWFzb24gPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAoIHJlYXNvbiApIHtcbiAgICAgICAgICAgIGlmICggdGhpcy5fX2xvY2tzW3JlYXNvbl0gPT0gMCApXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlJlbGVhc2UgbW9yZSB0aGFuIGxvY2tpbmcgIVwiLCByZWFzb24pO1xuICAgICAgICAgICAgdGhpcy5fX2xvY2tzW3JlYXNvbl0gPSB0aGlzLl9fbG9ja3NbcmVhc29uXSB8fCAwO1xuICAgICAgICAgICAgdGhpcy5fX2xvY2tzW3JlYXNvbl0tLTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKCAhcmVhc29uICYmIHRoaXMuX19sb2Nrcy5hbGwgPT0gMCApXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiUmVsZWFzZSBtb3JlIHRoYW4gbG9ja2luZyAhXCIpO1xuICAgICAgICBcbiAgICAgICAgaWYgKCAhLS10aGlzLl9fbG9ja3MuYWxsICYmIHRoaXMuZGF0YSAmJiB0aGlzLmlzQ29tcGxldGUoKSApIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YWJsZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLl9yZXYgICAgPSAxICsgKHRoaXMuX3JldiArIDEpICUgMTAwMDAwMDsvL1xuICAgICAgICAgICAgaWYgKCB0aGlzLl9mb2xsb3dlcnMubGVuZ3RoIClcbiAgICAgICAgICAgICAgICB0aGlzLl9mb2xsb3dlcnMuZm9yRWFjaCgoIGZvbGxvd2VyICkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IGZvbGxvd2VyWzJdID8gdGhpcy5yZXRyaWV2ZShmb2xsb3dlclsyXSkgOiB0aGlzLmRhdGE7XG4gICAgICAgICAgICAgICAgICAgIGlmICggIWRhdGEgKSByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIGlmICggdHlwZW9mIGZvbGxvd2VyWzBdID09IFwiZnVuY3Rpb25cIiApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbGxvd2VyWzBdKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9jYiAmJiBpKys7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb2xsb3dlclswXS5zZXRTdGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZm9sbG93ZXJbMV0pID8geyBbZm9sbG93ZXJbMV1dOiBkYXRhIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBkYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9jYiAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgKCkgPT4gKCEoLS1pKSAmJiBjYigpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vKVxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy9lbHNlXG4gICAgICAgICAgICAhd2FzU3RhYmxlICYmIHRoaXMuZW1pdCgnc3RhYmxlJywgdGhpcy5kYXRhKTtcbiAgICAgICAgICAgIHRoaXMuZW1pdCgndXBkYXRlJywgdGhpcy5kYXRhKTtcbiAgICAgICAgICAgIGNiICYmIGNiKClcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGNiICYmIHRoaXMudGhlbihjYik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBcbiAgICByZXRhaW4oIHJlYXNvbiApIHtcbiAgICAgICAgdGhpcy5fX3JldGFpbnMuYWxsKys7XG4gICAgICAgIGlmICggcmVhc29uICkge1xuICAgICAgICAgICAgdGhpcy5fX3JldGFpbnNbcmVhc29uXSA9IHRoaXMuX19yZXRhaW5zW3JlYXNvbl0gfHwgMDtcbiAgICAgICAgICAgIHRoaXMuX19yZXRhaW5zW3JlYXNvbl0rKztcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBkaXNwb3NlKCByZWFzb24gKSB7XG4gICAgICAgIC8vY29uc29sZS53YXJuKFwiZGlzcG9zZVwiLCByZWFzb24sIHRoaXMuX19yZXRhaW5zKTtcbiAgICAgICAgaWYgKCByZWFzb24gKSB7XG4gICAgICAgICAgICBpZiAoICF0aGlzLl9fcmV0YWluc1tyZWFzb25dIClcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJEaXNwb3NlIG1vcmUgdGhhbiByZXRhaW5pbmcgIVwiKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5fX3JldGFpbnNbcmVhc29uXSA9IHRoaXMuX19yZXRhaW5zW3JlYXNvbl0gfHwgMDtcbiAgICAgICAgICAgIHRoaXMuX19yZXRhaW5zW3JlYXNvbl0tLTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIHRoaXMuX19yZXRhaW5zLmFsbCA9PSAwIClcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkRpc3Bvc2UgbW9yZSB0aGFuIHJldGFpbmluZyAhXCIpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fX3JldGFpbnMuYWxsLS07XG4gICAgICAgIFxuICAgICAgICBpZiAoICF0aGlzLl9fcmV0YWlucy5hbGwgKSB7XG4gICAgICAgICAgICBpZiAoIHRoaXMuX3BlcnNpc3RlbmNlVG0gKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZGVzdHJveVRNICYmIGNsZWFyVGltZW91dCh0aGlzLl9kZXN0cm95VE0pO1xuICAgICAgICAgICAgICAgIHRoaXMuX2Rlc3Ryb3lUTSA9IHNldFRpbWVvdXQoXG4gICAgICAgICAgICAgICAgICAgIGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fZGVzdHJveVRNID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGhlbihzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhdGhpcy5fX3JldGFpbnMuYWxsICYmIHRoaXMuZGVzdHJveSgpXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcGVyc2lzdGVuY2VUbVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRoZW4ocyA9PiAoIXRoaXMuX19yZXRhaW5zLmFsbCAmJiB0aGlzLmRlc3Ryb3koKSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIC8vICBjb25zb2xlLmxvZyhcImRlc3Ryb3lcIiwgdGhpcy5fdWlkKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuZW1pdCgnZGVzdHJveScsIHRoaXMpO1xuICAgICAgICBpZiAoIHRoaXMuX3N0YWJpbGl6ZXIgKVxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX3N0YWJpbGl6ZXIpO1xuICAgICAgICBcbiAgICAgICAgaWYgKCB0aGlzLl9mb2xsb3dlcnMubGVuZ3RoIClcbiAgICAgICAgICAgIHRoaXMuX2ZvbGxvd2Vycy5mb3JFYWNoKFxuICAgICAgICAgICAgICAgICggZm9sbG93ZXIgKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICggdHlwZW9mIGZvbGxvd2VyWzBdICE9PSBcImZ1bmN0aW9uXCIgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIGZvbGxvd2VyWzBdLnN0b3JlcyApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGZvbGxvd2VyWzBdLnN0b3Jlc1tmb2xsb3dlclsxXV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICB0aGlzLl9mb2xsb3dlcnMubGVuZ3RoID0gMDtcbiAgICAgICAgdGhpcy5kZWFkICAgICAgICAgICAgICA9IHRydWU7XG4gICAgICAgIHRoaXMuX3JldnMgICAgICAgICAgICAgPSB0aGlzLmRhdGEgPSB0aGlzLnN0YXRlID0gdGhpcy5jb250ZXh0ID0gbnVsbDtcbiAgICAgICAgdGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoKTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1N0b3JlLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==