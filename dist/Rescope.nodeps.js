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
	            incrementId = _ref.incrementId,
	            defaultMaxListeners = _ref.defaultMaxListeners,
	            persistenceTm = _ref.persistenceTm,
	            autoDestroy = _ref.autoDestroy,
	            rootEmitter = _ref.rootEmitter;
	
	        _classCallCheck(this, Context);
	
	        var _this = _possibleConstructorReturn(this, (Context.__proto__ || Object.getPrototypeOf(Context)).call(this));
	
	        _this._maxListeners = defaultMaxListeners || _this.constructor.defaultMaxListeners;
	        id = id || "_____" + shortid.generate();
	        if (openContexts[id] && !incrementId) {
	            var _ret;
	
	            _this._id = id;
	            openContexts[id].register(storesMap);
	            return _ret = openContexts[id], _possibleConstructorReturn(_this, _ret);
	        } else if (openContexts[id] && incrementId) {
	            var i = -1;
	            while (openContexts[id + '/' + ++i]) {}
	            id = id + '/' + i;
	        }
	
	        _this._id = id;
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
	
	        _this.sources = [];
	        _this._childContexts = [];
	        _this._childContextsList = [];
	        _this._unStableChilds = 0;
	
	        _this.__retains = { all: 0 };
	        _this.__locks = { all: 1 };
	        _this.__listening = {};
	        _this.__context = {};
	        _this.__mixed = [];
	        _this.__mixedList = [];
	        _this._followers = [];
	        if (parent) {
	            parent.retain("isMyParent");
	            if (!rootEmitter) {
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
	            } else {
	                parent.on(_this.__parentList = {
	                    'update': function update(s) {
	                        return _this._propag();
	                    }
	                });
	            }
	            // this.register(parent.__context, state, data);
	        }
	
	        _this.register(storesMap, state, data);
	        _this.__locks.all--;
	        _this._stable = !_this.__locks.all;
	
	        if (parent) {
	            parent._addChild(_this);
	        }
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
	
	            this.relink(storesMap, this, false, false);
	            Object.keys(storesMap).forEach(function (id) {
	                if (storesMap[id].singleton || is.fn(storesMap[id]) && (state[id] || data[id])) {
	                    _this5._mount(id, state[id], data[id]);
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
	                id = id.split(':'); //@todo
	                id[0] = id[0].split('.');
	                data[id[1] || id[0][id[0].length - 1]] = _this7.stores[id[0][0]] && _this7.stores[id[0][0]].retrieve && _this7.stores[id[0][0]].retrieve(id[0].splice(1));
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
	                    return r || flags_states.test(flag);
	                }, false)) output.state[id] = _this9.state[id];
	
	                if (flags.reduce(function (r, flag) {
	                    return r || flags_data.test(flag);
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
	
	        //serializeChilds( childs = [] ) {
	        //
	        //}
	
	    }, {
	        key: '_addChild',
	        value: function _addChild(ctx) {
	            var _this17 = this;
	
	            this._childContexts.push(ctx);
	            var lists = {
	                'stable': function stable(s) {
	                    _this17._unStableChilds--;
	                    if (!_this17._unStableChilds) _this17.emit("stableTree", _this17);
	                },
	                'unstable': function unstable(s) {
	                    _this17._unStableChilds++;
	                    if (1 == _this17._unStableChilds) _this17.emit("unstableTree", _this17);
	                },
	                'stableTree': function stableTree(s) {
	                    _this17._unStableChilds--;
	                    if (!_this17._unStableChilds) _this17.emit("stableTree", _this17);
	                },
	                'unstableTree': function unstableTree(s) {
	                    _this17._unStableChilds++;
	                    if (1 == _this17._unStableChilds) _this17.emit("unstableTree", _this17);
	                },
	                'destroy': function destroy(ctx) {
	                    if (ctx._unStableChilds) _this17._unStableChilds--;
	                    if (!ctx.isStable()) _this17._unStableChilds--;
	
	                    if (!_this17._unStableChilds) _this17.emit("stableTree", _this17);
	                }
	            },
	                wasStable = this._unStableChilds;
	            //!ctx.isStable() && console.warn('add unstable child');
	            !ctx.isStable() && this._unStableChilds++;
	            ctx._unStableChilds && this._unStableChilds++;
	            this._childContextsList.push(lists);
	            if (!wasStable && this._unStableChilds) this.emit("unstableTree", this);
	            ctx.on(lists);
	        }
	    }, {
	        key: '_rmChild',
	        value: function _rmChild(ctx) {
	            var i = this._childContexts.indexOf(ctx),
	                wasStable = this._unStableChilds;
	            if (i != -1) {
	                this._childContexts.splice(i, 1);
	                !ctx.isStable() && this._unStableChilds--;
	                ctx._unStableChilds && this._unStableChilds--;
	                ctx.un(this._childContextsList.splice(i, 1)[0]);
	                if (wasStable && !this._unStableChilds) this.emit("stableTree");
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
	            var _this18 = this;
	
	            //console.log("dispose", this._id, reason);
	            if (reason) {
	                if (!this.__retains[reason]) throw new Error("Dispose more than retaining : " + reason);
	                this.__retains[reason]--;
	            }
	
	            if (!this.__retains.all) throw new Error("Dispose more than retaining !");
	
	            this.__retains.all--;
	
	            if (!this.__retains.all) {
	                //console.log("dispose do destroy ", this._id, this._persistenceTm);
	                if (this._persistenceTm) {
	                    this._destroyTM && clearTimeout(this._destroyTM);
	                    this._destroyTM = setTimeout(function (e) {
	                        _this18.then(function (s) {
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
	            this.dead = true;
	            this.emit("destroy", this);
	            Object.keys(this.__listening).forEach(function (id) {
	                return _this19.__context[id].removeListener(_this19.__listening[id]);
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
	    // overridable list of source stores
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
	            if (_this.shouldApply(_this.state) && _this.data === undefined) {
	                _this.data = _this.apply(_this.data, _this.state, _this.state);
	                _this._stable = !_this.__locks.all; // stable if it have initial result data ?
	                !_this.__locks.all && _this._rev++;
	            } else _this._stable = false;
	        } else if (_this.data !== undefined) {
	            _this._stable = true; // stable if it have initial result data ?
	            _this._rev++;
	        } else {
	            _this._stable = false;
	            if (!_static.managed && !_this.state && (!_this._use || !_this._use.length)) {
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
	    // overridable list of store that will allow push if updated
	
	
	    _createClass(Store, [{
	        key: 'shouldPropag',
	
	
	        /**
	         * Overridable method to know if a data change should be propag to the listening stores & components
	         */
	        value: function shouldPropag(nDatas) {
	            var _static = this.constructor,
	                r,
	                cDatas = this.data;
	            r = !cDatas && nDatas;
	            cDatas && Object.keys(cDatas).forEach(function (key) {
	                r = r || (nDatas ? cDatas[key] !== nDatas[key] : cDatas && cDatas[key]);
	            });
	            nDatas && Object.keys(nDatas).forEach(function (key) {
	                r = r || (nDatas ? cDatas[key] !== nDatas[key] : cDatas && cDatas[key]);
	            });
	            return !!r;
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
	            }this.shouldApply(_extends({}, this.state || {}, changes)) && this.push();
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
	                this._rev++; //
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
	                if (!this.__retains[reason]) throw new Error("Dispose more than retaining : " + reason);
	
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
	            //console.groupCollapsed("Rescope store : Setting datas is depreciated, use data");
	            console.log("Rescope store : Setting datas is depreciated, use data", new Error().stack);
	            //console.groupEnd();
	
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
	Store.state = undefined;
	Store.defaultMaxListeners = 100;
	Store.persistenceTm = false;
	exports.default = Store;
	module.exports = exports['default'];

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNTIwYmM2NjMwZjVlMDc0NjNlYmEiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Jlc2NvcGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbnRleHQuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaXNcIiIsIndlYnBhY2s6Ly8vLi9zcmMvRW1pdHRlci5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzaG9ydGlkXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL1N0b3JlLmpzIl0sIm5hbWVzIjpbIlN0b3JlIiwiQ29udGV4dCIsImlzIiwicmVxdWlyZSIsIkV2ZW50RW1pdHRlciIsInNob3J0aWQiLCJfX3Byb3RvX19wdXNoIiwidGFyZ2V0IiwiaWQiLCJwYXJlbnQiLCJmbiIsInByb3RvdHlwZSIsIm9wZW5Db250ZXh0cyIsImNvbnRleHRzIiwic2tleSIsImFycmF5Iiwic29ydCIsImEiLCJiIiwiZmlyc3RuYW1lIiwiam9pbiIsInN0b3Jlc01hcCIsInN0YXRlIiwiZGF0YSIsIm5hbWUiLCJpbmNyZW1lbnRJZCIsImRlZmF1bHRNYXhMaXN0ZW5lcnMiLCJwZXJzaXN0ZW5jZVRtIiwiYXV0b0Rlc3Ryb3kiLCJyb290RW1pdHRlciIsIl9tYXhMaXN0ZW5lcnMiLCJjb25zdHJ1Y3RvciIsImdlbmVyYXRlIiwiX2lkIiwicmVnaXN0ZXIiLCJpIiwiX2lzTG9jYWxJZCIsIl9wZXJzaXN0ZW5jZVRtIiwic3RvcmVzIiwiZGVhZCIsIkVycm9yIiwic291cmNlcyIsIl9jaGlsZENvbnRleHRzIiwiX2NoaWxkQ29udGV4dHNMaXN0IiwiX3VuU3RhYmxlQ2hpbGRzIiwiX19yZXRhaW5zIiwiYWxsIiwiX19sb2NrcyIsIl9fbGlzdGVuaW5nIiwiX19jb250ZXh0IiwiX19taXhlZCIsIl9fbWl4ZWRMaXN0IiwiX2ZvbGxvd2VycyIsInJldGFpbiIsIl9zdGFibGUiLCJ3YWl0Iiwib24iLCJfX3BhcmVudExpc3QiLCJyZWxlYXNlIiwiX3Byb3BhZyIsIl9hZGRDaGlsZCIsInNldFRpbWVvdXQiLCJkaXNwb3NlIiwic3RvcmVzTGlzdCIsImZvckVhY2giLCJfbW91bnQiLCJrIiwiYXJndW1lbnRzIiwic3RvcmUiLCJyZWR1Y2UiLCJtb3VudGVkIiwiY3R4IiwidW5kZWZpbmVkIiwic2V0U3RhdGUiLCJwdXNoIiwiX3dhdGNoU3RvcmUiLCJpc1N0YWJsZSIsInByb3BhZyIsInRhcmdldEN0eCIsImxpc3RzIiwicmVsaW5rIiwiT2JqZWN0Iiwia2V5cyIsInNpbmdsZXRvbiIsInNyY0N0eCIsImV4dGVybmFsIiwiZm9yY2UiLCJsY3R4IiwiX3N0b3JlcyIsImNvbnNvbGUiLCJpbmZvIiwiX19wcm90b19fIiwiZGVmaW5lUHJvcGVydHkiLCJnZXQiLCJfc3RhdGUiLCJzZXQiLCJ2IiwiX2RhdGEiLCJvYmoiLCJrZXkiLCJhcyIsInNldEluaXRpYWwiLCJsYXN0UmV2cyIsInJlS2V5IiwibWFwIiwic3RyaW5nIiwicmV2cyIsIm1vdW50IiwiZ2V0VXBkYXRlcyIsImZvbGxvd2VycyIsImxlbmd0aCIsInNwbGljZSIsInRvIiwiYmluZCIsIm1peGVkQ1dVbm1vdW50IiwidW5Nb3VudEtleSIsImlzUmVhY3RDb21wb25lbnQiLCJoYXNPd25Qcm9wZXJ0eSIsInVuQmluZCIsInNwbGl0IiwicmV0cmlldmUiLCJwYXRoIiwic3RvcmVzUmV2TWFwIiwibG9jYWwiLCJfcmV2IiwidXBkYXRlZCIsImdldFN0b3Jlc1JldnMiLCJvdXRwdXQiLCJmbGFnc19zdGF0ZXMiLCJmbGFnc19kYXRhIiwiX2ZsYWdzX3N0YXRlcyIsIl9mbGFnc19kYXRhIiwiZmxhZ3MiLCJyIiwiZmxhZyIsInRlc3QiLCJhY3Rpb24iLCJ0cmlnZ2VyIiwiZGlzcGF0Y2giLCJjYiIsIm9uY2UiLCJxdWlldCIsInJlYXNvbiIsImVtaXQiLCJlcnJvciIsIl9zdGFiaWxpemVyVE0iLCJjbGVhclRpbWVvdXQiLCJfcHJvcGFnVE0iLCJ3YXNTdGFibGUiLCJpbmRleE9mIiwidW4iLCJfZGVzdHJveVRNIiwidGhlbiIsImRlc3Ryb3kiLCJyZW1vdmVMaXN0ZW5lciIsInNoaWZ0IiwiX3JtQ2hpbGQiLCJjb250ZXh0IiwiRW1pdHRlciIsIl9ldmVudHMiLCJldnQiLCJhcmd6Iiwib2JqUHJvdG8iLCJnZXRQcm90b3R5cGVPZiIsIl9zdGF0aWMiLCJnZXRDb250ZXh0Iiwic3RhdGljQ29udGV4dCIsImNmZyIsIndhdGNocyIsInVzZSIsImFwcGx5IiwiaW5pdGlhbFN0YXRlIiwiX3VpZCIsIl9vblN0YWJpbGl6ZSIsIndhcm4iLCJjb250ZXh0T2JqIiwiX3JldnMiLCJfcmVxdWlyZSIsIl91c2UiLCJyZWYiLCJtYXRjaCIsInJlZjIiLCJzaG91bGRBcHBseSIsIm1hbmFnZWQiLCJuRGF0YXMiLCJjRGF0YXMiLCJpc0NvbXBsZXRlIiwiZm9sbG93IiwiY2FsbCIsImNoYW5nZXMiLCJyZWZpbmUiLCJfc3RhYmlsaXplciIsInN0YWJsZSIsImFjdGlvbnMiLCJucyIsImRvV2FpdCIsIm9yaWdpbiIsImluaXRpYWxPdXRwdXRzIiwicyIsIm5leHRTdGF0ZSIsIl9jaGFuZ2VzU1ciLCJuZXh0RGF0YXMiLCJzaG91bGRQcm9wYWciLCJwU3RhdGUiLCJzeW5jIiwiY2hhbmdlIiwic3RhYmlsaXplIiwibWUiLCJmcm9tIiwicHVsbCIsInByZXZpb3VzIiwiZm9sbG93ZXIiLCJyZW1vdmVBbGxMaXN0ZW5lcnMiLCJsb2ciLCJzdGFjayIsImNvbXBvbmVudCIsInRhcmdldFJldnMiLCJ0YXJnZXRDb250ZXh0IiwiZmlsdGVyIiwiYWxpYXMiLCJkZWZhdWx0TmFtZSIsInNsaWNlIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7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QkFISSxNQUlBO0FBQ0QyRSwrQkFBUUEsSUFBSWlGLEtBQUosQ0FBVSx3Q0FBVixDQUFSO0FBQ0E1SixnQ0FBUTJFLElBQUksQ0FBSixDQUFSO0FBQ0FzQixnQ0FBUXRCLElBQUksQ0FBSixLQUFVQSxJQUFJLENBQUosRUFBT29CLEtBQVAsQ0FBYSxHQUFiLENBQWxCO0FBQ0FuRCxpQ0FBUXlGLFFBQVF2SCxNQUFSLENBQWU2RCxJQUFJLENBQUosQ0FBZixDQUFSO0FBQ0F3SCxpQ0FBUXhILElBQUksQ0FBSixLQUFVc0IsUUFBUUEsS0FBS0EsS0FBS1gsTUFBTCxHQUFjLENBQW5CLENBQWxCLElBQTJDWCxJQUFJLENBQUosQ0FBbkQ7QUFDSDs7QUFFRC9CLDhCQUFTLENBQUNsRSxHQUFHUSxFQUFILENBQU0wRCxLQUFOLENBQVYsSUFBMEJBLE1BQU1rRCxNQUFOLENBQWFpRyxTQUFiLEVBQXdCSSxLQUF4QixFQUErQmxHLElBQS9CLENBQTFCO0FBQ0gsa0JBdEJMO0FBd0JBLHdCQUFPOEYsVUFBVXBHLFVBQVYsS0FBeUJvRyxVQUFVcEcsVUFBViw2QkFBaEM7QUFDSCxjQTlCRDs7QUFnQ0Esb0JBQU9rRixjQUFQO0FBQ0g7Ozs7R0EzUThCak0sWTs7QUFBZEosTSxDQUVWeUssRyxHQUE2QixFO0FBRm5CekssTSxDQUtWc0ssYSxHQUE2QixJQUFJckssT0FBSixDQUFZLEVBQVosRUFBZ0IsRUFBRU8sSUFBSSxRQUFOLEVBQWhCLEM7QUFMbkJSLE0sQ0FNVnNCLEssR0FBNkJrRCxTO0FBTm5CeEUsTSxDQVdIMEIsbUIsR0FBc0IsRztBQVhuQjFCLE0sQ0FtQkgyQixhLEdBQXNCLEs7bUJBbkJuQjNCLEsiLCJmaWxlIjoiZGlzdC9SZXNjb3BlLm5vZGVwcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA1MjBiYzY2MzBmNWUwNzQ2M2ViYSIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpICAyMDE3IENhaXBpIExhYnMgLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4gKi9cblxuaW1wb3J0IENvbnRleHQgZnJvbSBcIi4vQ29udGV4dFwiO1xuaW1wb3J0IFN0b3JlIGZyb20gXCIuL1N0b3JlXCI7XG5cbkNvbnRleHQuU3RvcmUgPSBTdG9yZTtcblxuZXhwb3J0IGRlZmF1bHQge1N0b3JlLCBDb250ZXh0fTtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1Jlc2NvcGUuanMiLCIvKlxuICogQ29weXJpZ2h0IChjKSAgMjAxNyBDYWlwaSBMYWJzIC5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuICpcbiAqIEBhdXRob3IgOiBOYXRoYW5hZWwgQnJhdW5cbiAqIEBjb250YWN0IDogY2FpcGlsYWJzQGdtYWlsLmNvbVxuICovXG5cblxudmFyIGlzICAgICAgICAgICAgICA9IHJlcXVpcmUoJ2lzJyksXG4gICAgRXZlbnRFbWl0dGVyICAgID0gcmVxdWlyZSgnLi9FbWl0dGVyJyksXG4gICAgc2hvcnRpZCAgICAgICAgID0gcmVxdWlyZSgnc2hvcnRpZCcpXG4gICAgLCBfX3Byb3RvX19wdXNoID0gKCB0YXJnZXQsIGlkLCBwYXJlbnQgKSA9PiB7XG4gICAgICAgIGxldCBmbiAgICAgICAgICAgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIH07XG4gICAgICAgIGZuLnByb3RvdHlwZSAgICAgPSBwYXJlbnQgPyBuZXcgcGFyZW50W1wiX1wiICsgaWRdKCkgOiB0YXJnZXRbaWRdIHx8IHt9O1xuICAgICAgICB0YXJnZXRbaWRdICAgICAgID0gbmV3IGZuKCk7XG4gICAgICAgIHRhcmdldFsnXycgKyBpZF0gPSBmbjtcbiAgICB9LFxuICAgIG9wZW5Db250ZXh0cyAgICA9IHt9O1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRleHQgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICAgIHN0YXRpYyBwZXJzaXN0ZW5jZVRtID0gMTsvLyBpZiA+IDAsIHdpbGwgd2FpdCAncGVyc2lzdGVuY2VUbScgbXMgYmVmb3JlIGRlc3Ryb3kgd2hlbiBkaXNwb3NlIHJlYWNoIDBcbiAgICBzdGF0aWMgU3RvcmUgICAgICAgICA9IG51bGw7XG4gICAgc3RhdGljIGNvbnRleHRzICAgICAgPSBvcGVuQ29udGV4dHM7Ly8gYWxsIGFjdGl2ZSBjb250ZXh0c1xuICAgIFxuICAgIHN0YXRpYyBnZXRDb250ZXh0KCBjb250ZXh0cyApIHtcbiAgICAgICAgbGV0IHNrZXkgPSBpcy5hcnJheShjb250ZXh0cykgPyBjb250ZXh0cy5zb3J0KCggYSwgYiApID0+IHtcbiAgICAgICAgICAgIGlmICggYS5maXJzdG5hbWUgPCBiLmZpcnN0bmFtZSApIHJldHVybiAtMTtcbiAgICAgICAgICAgIGlmICggYS5maXJzdG5hbWUgPiBiLmZpcnN0bmFtZSApIHJldHVybiAxO1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH0pLmpvaW4oJzo6JykgOiBjb250ZXh0cztcbiAgICAgICAgcmV0dXJuIG9wZW5Db250ZXh0c1tza2V5XSA9IG9wZW5Db250ZXh0c1tza2V5XSB8fCBuZXcgQ29udGV4dCh7fSwgeyBpZDogc2tleSB9KTtcbiAgICB9O1xuICAgIFxuICAgIC8qKlxuICAgICAqIEluaXQgYSBSZXNjb3BlIGNvbnRleHRcbiAgICAgKlxuICAgICAqIEBwYXJhbSBzdG9yZXNNYXAge09iamVjdH0gT2JqZWN0IHdpdGggdGhlIG9yaWdpbiBzdG9yZXNcbiAgICAgKiBAcGFyYW0gaWQge3N0cmluZ30gQG9wdGlvbmFsIGlkICggaWYgdGhpcyBpZCBleGlzdCBzdG9yZXNNYXAgd2lsbCBiZSBtZXJnZSBvbiB0aGUgJ2lkJyBjb250ZXh0KVxuICAgICAqIEBwYXJhbSBwYXJlbnRcbiAgICAgKiBAcGFyYW0gc3RhdGVcbiAgICAgKiBAcGFyYW0gZGF0YVxuICAgICAqIEBwYXJhbSBuYW1lXG4gICAgICogQHBhcmFtIGRlZmF1bHRNYXhMaXN0ZW5lcnNcbiAgICAgKiBAcGFyYW0gcGVyc2lzdGVuY2VUbSB7bnVtYmVyKSBpZiA+IDAsIHdpbGwgd2FpdCAncGVyc2lzdGVuY2VUbScgbXMgYmVmb3JlIGRlc3Ryb3kgd2hlbiBkaXNwb3NlIHJlYWNoIDBcbiAgICAgKiBAcGFyYW0gYXV0b0Rlc3Ryb3kgIHtib29sfSB3aWxsIHRyaWdnZXIgcmV0YWluICYgZGlzcG9zZSBhZnRlciBzdGFydFxuICAgICAqIEByZXR1cm5zIHtDb250ZXh0fVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKCBzdG9yZXNNYXAsIHsgaWQsIHBhcmVudCwgc3RhdGUsIGRhdGEsIG5hbWUsIGluY3JlbWVudElkLCBkZWZhdWx0TWF4TGlzdGVuZXJzLCBwZXJzaXN0ZW5jZVRtLCBhdXRvRGVzdHJveSwgcm9vdEVtaXR0ZXIgfSA9IHt9ICkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fbWF4TGlzdGVuZXJzID0gZGVmYXVsdE1heExpc3RlbmVycyB8fCB0aGlzLmNvbnN0cnVjdG9yLmRlZmF1bHRNYXhMaXN0ZW5lcnM7XG4gICAgICAgIGlkICAgICAgICAgICAgICAgICA9IGlkIHx8IChcIl9fX19fXCIgKyBzaG9ydGlkLmdlbmVyYXRlKCkpO1xuICAgICAgICBpZiAoIG9wZW5Db250ZXh0c1tpZF0gJiYgIWluY3JlbWVudElkICkge1xuICAgICAgICAgICAgdGhpcy5faWQgPSBpZDtcbiAgICAgICAgICAgIG9wZW5Db250ZXh0c1tpZF0ucmVnaXN0ZXIoc3RvcmVzTWFwKTtcbiAgICAgICAgICAgIHJldHVybiBvcGVuQ29udGV4dHNbaWRdXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoIG9wZW5Db250ZXh0c1tpZF0gJiYgaW5jcmVtZW50SWQgKSB7XG4gICAgICAgICAgICBsZXQgaSA9IC0xO1xuICAgICAgICAgICAgd2hpbGUgKCBvcGVuQ29udGV4dHNbaWQgKyAnLycgKyAoKytpKV0gKSA7XG4gICAgICAgICAgICBpZCA9IGlkICsgJy8nICsgaTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdGhpcy5faWQgICAgICAgICAgICA9IGlkO1xuICAgICAgICBvcGVuQ29udGV4dHNbaWRdICAgID0gdGhpcztcbiAgICAgICAgdGhpcy5faXNMb2NhbElkICAgICA9IHRydWU7XG4gICAgICAgIHRoaXMuX3BlcnNpc3RlbmNlVG0gPSBwZXJzaXN0ZW5jZVRtIHx8IHRoaXMuY29uc3RydWN0b3IucGVyc2lzdGVuY2VUbTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuc3RvcmVzID0ge307XG4gICAgICAgIHRoaXMuc3RhdGUgID0ge307XG4gICAgICAgIHRoaXMuZGF0YSAgID0ge307XG4gICAgICAgIFxuICAgICAgICBpZiAoIHBhcmVudCAmJiBwYXJlbnQuZGVhZCApXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW4ndCB1c2UgYSBkZWFkIGNvbnRleHQgYXMgcGFyZW50ICFcIik7XG4gICAgICAgIFxuICAgICAgICBfX3Byb3RvX19wdXNoKHRoaXMsICdzdG9yZXMnLCBwYXJlbnQpO1xuICAgICAgICBfX3Byb3RvX19wdXNoKHRoaXMsICdzdGF0ZScsIHBhcmVudCk7XG4gICAgICAgIF9fcHJvdG9fX3B1c2godGhpcywgJ2RhdGEnLCBwYXJlbnQpO1xuICAgICAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICB0aGlzLnNvdXJjZXMgICAgICAgICAgICA9IFtdO1xuICAgICAgICB0aGlzLl9jaGlsZENvbnRleHRzICAgICA9IFtdO1xuICAgICAgICB0aGlzLl9jaGlsZENvbnRleHRzTGlzdCA9IFtdO1xuICAgICAgICB0aGlzLl91blN0YWJsZUNoaWxkcyAgICA9IDA7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9fcmV0YWlucyAgID0geyBhbGw6IDAgfTtcbiAgICAgICAgdGhpcy5fX2xvY2tzICAgICA9IHsgYWxsOiAxIH07XG4gICAgICAgIHRoaXMuX19saXN0ZW5pbmcgPSB7fTtcbiAgICAgICAgdGhpcy5fX2NvbnRleHQgICA9IHt9O1xuICAgICAgICB0aGlzLl9fbWl4ZWQgICAgID0gW107XG4gICAgICAgIHRoaXMuX19taXhlZExpc3QgPSBbXTtcbiAgICAgICAgdGhpcy5fZm9sbG93ZXJzICA9IFtdO1xuICAgICAgICBpZiAoIHBhcmVudCApIHtcbiAgICAgICAgICAgIHBhcmVudC5yZXRhaW4oXCJpc015UGFyZW50XCIpO1xuICAgICAgICAgICAgaWYgKCAhcm9vdEVtaXR0ZXIgKSB7XG4gICAgICAgICAgICAgICAgIXBhcmVudC5fc3RhYmxlICYmIHRoaXMud2FpdChcIndhaXRpbmdQYXJlbnRcIik7XG4gICAgICAgICAgICAgICAgcGFyZW50Lm9uKHRoaXMuX19wYXJlbnRMaXN0ID0ge1xuICAgICAgICAgICAgICAgICAgICAnc3RhYmxlJyAgOiBzID0+IHRoaXMucmVsZWFzZShcIndhaXRpbmdQYXJlbnRcIiksXG4gICAgICAgICAgICAgICAgICAgICd1bnN0YWJsZSc6IHMgPT4gdGhpcy53YWl0KFwid2FpdGluZ1BhcmVudFwiKSxcbiAgICAgICAgICAgICAgICAgICAgJ3VwZGF0ZScgIDogcyA9PiB0aGlzLl9wcm9wYWcoKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcGFyZW50Lm9uKHRoaXMuX19wYXJlbnRMaXN0ID0ge1xuICAgICAgICAgICAgICAgICAgICAndXBkYXRlJzogcyA9PiB0aGlzLl9wcm9wYWcoKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gdGhpcy5yZWdpc3RlcihwYXJlbnQuX19jb250ZXh0LCBzdGF0ZSwgZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICB0aGlzLnJlZ2lzdGVyKHN0b3Jlc01hcCwgc3RhdGUsIGRhdGEpO1xuICAgICAgICB0aGlzLl9fbG9ja3MuYWxsLS07XG4gICAgICAgIHRoaXMuX3N0YWJsZSA9ICF0aGlzLl9fbG9ja3MuYWxsO1xuICAgICAgICBcbiAgICAgICAgaWYgKCBwYXJlbnQgKSB7XG4gICAgICAgICAgICBwYXJlbnQuX2FkZENoaWxkKHRoaXMpO1xuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgaWYgKCBhdXRvRGVzdHJveSApXG4gICAgICAgICAgICBzZXRUaW1lb3V0KFxuICAgICAgICAgICAgICAgIHRtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXRhaW4oXCJhdXRvRGVzdHJveVwiKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNwb3NlKFwiYXV0b0Rlc3Ryb3lcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKVxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBAZGVwcmVjYXRlZFxuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqL1xuICAgIGdldCBkYXRhcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBNb3VudCB0aGUgc3RvcmVzIGluIHN0b3Jlc0xpc3QsIGluIHRoaXMgY29udGV4dCBvciBpbiBpdHMgcGFyZW50cyBvciBtaXhlZCBjb250ZXh0c1xuICAgICAqXG4gICAgICogQHBhcmFtIHN0b3Jlc0xpc3Qge3N0cmluZ3xzdG9yZVJlZn0gU3RvcmUgbmFtZSwgQXJyYXkgb2YgU3RvcmUgbmFtZXMsIG9yIFJlc2NvcGUgc3RvcmUgcmVmIGZyb20gU3RvcmU6OmFzIG9yXG4gICAgICogICAgIFN0b3JlOmFzXG4gICAgICogQHBhcmFtIHN0YXRlXG4gICAgICogQHBhcmFtIGRhdGFcbiAgICAgKiBAcmV0dXJucyB7Q29udGV4dH1cbiAgICAgKi9cbiAgICBtb3VudCggc3RvcmVzTGlzdCwgc3RhdGUsIGRhdGEgKSB7XG4gICAgICAgIGlmICggaXMuYXJyYXkoc3RvcmVzTGlzdCkgKSB7XG4gICAgICAgICAgICBzdG9yZXNMaXN0LmZvckVhY2goayA9PiB0aGlzLl9tb3VudChrLCBzdGF0ZSAmJiBzdGF0ZVtrXSwgZGF0YSAmJiBkYXRhW2tdKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9tb3VudCguLi5hcmd1bWVudHMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBcbiAgICBfbW91bnQoIGlkLCBzdGF0ZSwgZGF0YSApIHtcbiAgICAgICAgaWYgKCB0eXBlb2YgaWQgIT09ICdzdHJpbmcnICkge1xuICAgICAgICAgICAgdGhpcy5yZWdpc3Rlcih7IFtpZC5uYW1lXTogaWQuc3RvcmUgfSk7XG4gICAgICAgICAgICBpZCA9IGlkLm5hbWU7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmICggIXRoaXMuX19jb250ZXh0W2lkXSApIHsvL2FzayBtaXhlZCB8fCBwYXJlbnRcbiAgICAgICAgICAgIGlmICggdGhpcy5fX21peGVkLnJlZHVjZSgoIG1vdW50ZWQsIGN0eCApID0+IChtb3VudGVkIHx8IGN0eC5fbW91bnQoaWQsIHN0YXRlLCBkYXRhKSksIGZhbHNlKSB8fFxuICAgICAgICAgICAgICAgICF0aGlzLnBhcmVudCApXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyZW50Ll9tb3VudCguLi5hcmd1bWVudHMpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBzdG9yZSA9IHRoaXMuX19jb250ZXh0W2lkXSwgY3R4O1xuICAgICAgICBpZiAoIGlzLmZuKHN0b3JlKSApIHtcbiAgICAgICAgICAgIHRoaXMuX19jb250ZXh0W2lkXSA9IG5ldyBzdG9yZSh0aGlzLCB7IHN0YXRlLCBkYXRhIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKCBzdGF0ZSAhPT0gdW5kZWZpbmVkICYmIGRhdGEgPT09IHVuZGVmaW5lZCApXG4gICAgICAgICAgICAgICAgc3RvcmUuc2V0U3RhdGUoc3RhdGUpO1xuICAgICAgICAgICAgZWxzZSBpZiAoIHN0YXRlICE9PSB1bmRlZmluZWQgKVxuICAgICAgICAgICAgICAgIHN0b3JlLnN0YXRlID0gc3RhdGU7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmICggZGF0YSAhPT0gdW5kZWZpbmVkIClcbiAgICAgICAgICAgICAgICBzdG9yZS5wdXNoKGRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgdGhpcy5fd2F0Y2hTdG9yZShpZCk7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gdGhpcy5fX2NvbnRleHRbaWRdO1xuICAgIH1cbiAgICBcbiAgICBfd2F0Y2hTdG9yZSggaWQsIHN0YXRlLCBkYXRhICkge1xuICAgICAgICBpZiAoICF0aGlzLl9fY29udGV4dFtpZF0gKSB7Ly9hc2sgbWl4ZWQgfHwgcGFyZW50XG4gICAgICAgICAgICBpZiAoIHRoaXMuX19taXhlZC5yZWR1Y2UoKCBtb3VudGVkLCBjdHggKSA9PiAobW91bnRlZCB8fCBjdHguX3dhdGNoU3RvcmUoaWQsIHN0YXRlLCBkYXRhKSksIGZhbHNlKSB8fFxuICAgICAgICAgICAgICAgICF0aGlzLnBhcmVudCApXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyZW50Ll93YXRjaFN0b3JlKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCAhdGhpcy5fX2xpc3RlbmluZ1tpZF0gJiYgIWlzLmZuKHRoaXMuX19jb250ZXh0W2lkXSkgKSB7XG4gICAgICAgICAgICAhdGhpcy5fX2NvbnRleHRbaWRdLmlzU3RhYmxlKCkgJiYgdGhpcy53YWl0KGlkKTtcbiAgICAgICAgICAgIHRoaXMuX19jb250ZXh0W2lkXS5vbihcbiAgICAgICAgICAgICAgICB0aGlzLl9fbGlzdGVuaW5nW2lkXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgJ2Rlc3Ryb3knIDogcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5fX2xpc3RlbmluZ1tpZF07XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9fY29udGV4dFtpZF0gPSB0aGlzLl9fY29udGV4dFtpZF0uY29uc3RydWN0b3I7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICd1cGRhdGUnICA6IHMgPT4gdGhpcy5wcm9wYWcoKSxcbiAgICAgICAgICAgICAgICAgICAgJ3N0YWJsZScgIDogcyA9PiB0aGlzLnJlbGVhc2UoaWQpLFxuICAgICAgICAgICAgICAgICAgICAndW5zdGFibGUnOiBzID0+IHRoaXMud2FpdChpZClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogTWl4IHRhcmdldEN0eCBvbiB0aGlzIGNvbnRleHRcbiAgICAgKiBNaXhlZCBjb250ZXh0IHBhcmVudHMgYXJlIE5PVCBtYXBwZWRcbiAgICAgKiBAcGFyYW0gdGFyZ2V0Q3R4XG4gICAgICovXG4gICAgbWl4aW4oIHRhcmdldEN0eCApIHtcbiAgICAgICAgbGV0IHBhcmVudCA9IHRoaXMucGFyZW50LCBsaXN0cztcbiAgICAgICAgdGhpcy5fX21peGVkLnB1c2godGFyZ2V0Q3R4KVxuICAgICAgICB0YXJnZXRDdHgucmV0YWluKFwibWl4ZWRUb1wiKTtcbiAgICAgICAgaWYgKCAhdGFyZ2V0Q3R4Ll9zdGFibGUgKVxuICAgICAgICAgICAgdGhpcy53YWl0KHRhcmdldEN0eC5faWQpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fX21peGVkTGlzdC5wdXNoKGxpc3RzID0ge1xuICAgICAgICAgICAgJ3N0YWJsZScgIDogcyA9PiB0aGlzLnJlbGVhc2UodGFyZ2V0Q3R4Ll9pZCksXG4gICAgICAgICAgICAndW5zdGFibGUnOiBzID0+IHRoaXMud2FpdCh0YXJnZXRDdHguX2lkKSxcbiAgICAgICAgICAgICd1cGRhdGUnICA6IHMgPT4gdGhpcy5fcHJvcGFnKClcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLnN0b3JlcyA9IHt9O1xuICAgICAgICB0aGlzLnN0YXRlICA9IHt9O1xuICAgICAgICB0aGlzLmRhdGEgICA9IHt9O1xuICAgICAgICB0YXJnZXRDdHgub24obGlzdHMpO1xuICAgICAgICBfX3Byb3RvX19wdXNoKHRoaXMsICdzdG9yZXMnLCBwYXJlbnQpO1xuICAgICAgICBfX3Byb3RvX19wdXNoKHRoaXMsICdzdGF0ZScsIHBhcmVudCk7XG4gICAgICAgIF9fcHJvdG9fX3B1c2godGhpcywgJ2RhdGEnLCBwYXJlbnQpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5yZWxpbmsodGhpcy5fX2NvbnRleHQsIHRoaXMsIGZhbHNlLCB0cnVlKTtcbiAgICAgICAgdGhpcy5fX21peGVkLmZvckVhY2goXG4gICAgICAgICAgICBjdHggPT4ge1xuICAgICAgICAgICAgICAgIF9fcHJvdG9fX3B1c2godGhpcywgJ3N0b3JlcycpO1xuICAgICAgICAgICAgICAgIF9fcHJvdG9fX3B1c2godGhpcywgJ3N0YXRlJyk7XG4gICAgICAgICAgICAgICAgX19wcm90b19fcHVzaCh0aGlzLCAnZGF0YScpO1xuICAgICAgICAgICAgICAgIGN0eC5yZWxpbmsoY3R4Ll9fY29udGV4dCwgdGhpcywgdHJ1ZSwgdHJ1ZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBSZWdpc3RlciBzdG9yZXMgaW4gc3RvcmVzTWFwICYgbGluayB0aGVtIGluIHRoZSBwcm90b3NcbiAgICAgKiBAcGFyYW0gc3RvcmVzTWFwXG4gICAgICogQHBhcmFtIHN0YXRlXG4gICAgICogQHBhcmFtIGRhdGFcbiAgICAgKi9cbiAgICByZWdpc3Rlciggc3RvcmVzTWFwLCBzdGF0ZSA9IHt9LCBkYXRhID0ge30gKSB7XG4gICAgICAgIHRoaXMucmVsaW5rKHN0b3Jlc01hcCwgdGhpcywgZmFsc2UsIGZhbHNlKTtcbiAgICAgICAgT2JqZWN0LmtleXMoc3RvcmVzTWFwKS5mb3JFYWNoKFxuICAgICAgICAgICAgaWQgPT4ge1xuICAgICAgICAgICAgICAgIGlmICggc3RvcmVzTWFwW2lkXS5zaW5nbGV0b24gfHwgKGlzLmZuKHN0b3Jlc01hcFtpZF0pICYmIChzdGF0ZVtpZF0gfHwgZGF0YVtpZF0pKSApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbW91bnQoaWQsIHN0YXRlW2lkXSwgZGF0YVtpZF0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKCBzdGF0ZVtpZF0gfHwgZGF0YVtpZF0gKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICggZGF0YVtpZF0gKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIHN0YXRlW2lkXSApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9yZXNbaWRdLnN0YXRlID0gc3RhdGVbaWRdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9yZXNbaWRdLnB1c2goZGF0YVtpZF0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKCBzdGF0ZVtpZF0gKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3Jlc1tpZF0uc2V0U3RhdGUoc3RhdGVbaWRdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fd2F0Y2hTdG9yZShpZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICApXG4gICAgICAgIFxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBNYXAgc3JjQ3R4IHN0b3JlJ3Mgb24gdGFyZ2V0Q3R4IGhlYWRlcnMgcHJvdG8nc1xuICAgICAqIEBwYXJhbSBzcmNDdHhcbiAgICAgKiBAcGFyYW0gdGFyZ2V0Q3R4XG4gICAgICogQHBhcmFtIHN0YXRlXG4gICAgICogQHBhcmFtIGRhdGFcbiAgICAgKi9cbiAgICByZWxpbmsoIHNyY0N0eCwgdGFyZ2V0Q3R4ID0gdGhpcywgZXh0ZXJuYWwsIGZvcmNlICkge1xuICAgICAgICBsZXQgbGN0eCA9IHRhcmdldEN0eC5fc3RvcmVzLnByb3RvdHlwZTtcbiAgICAgICAgT2JqZWN0LmtleXMoc3JjQ3R4KVxuICAgICAgICAgICAgICAuZm9yRWFjaChcbiAgICAgICAgICAgICAgICAgIGlkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoICFmb3JjZSAmJiB0YXJnZXRDdHguX19jb250ZXh0W2lkXSA9PT0gc3JjQ3R4W2lkXSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRDdHguX19jb250ZXh0W2lkXSAmJiAodGFyZ2V0Q3R4Ll9fY29udGV4dFtpZF0uY29uc3RydWN0b3IgPT09IHNyY0N0eFtpZF0gKSApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoICFmb3JjZSAmJiB0YXJnZXRDdHguX19jb250ZXh0W2lkXSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCAhZXh0ZXJuYWwgJiYgIWlzLmZuKHRhcmdldEN0eC5fX2NvbnRleHRbaWRdKSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuaW5mbyhcIlJlc2NvcGUgU3RvcmUgOiBcIiwgaWQsIFwiIGFscmVhZHkgZXhpc3QgaW4gdGhpcyBjb250ZXh0ICEgKCB0cnkgX19wcm90b19fIGhvdCBwYXRjaCApXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0Q3R4Ll9fY29udGV4dFtpZF0uX19wcm90b19fID0gc3JjQ3R4W2lkXS5wcm90b3R5cGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoICFleHRlcm5hbCAmJiBpcy5mbih0YXJnZXRDdHguX19jb250ZXh0W2lkXSkgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0Q3R4Ll9fY29udGV4dFtpZF0gPSBzcmNDdHhbaWRdO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICggIWZvcmNlICYmICFleHRlcm5hbCApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX19jb250ZXh0W2lkXSA9IHNyY0N0eFtpZF07XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBsY3R4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0OiAoKSA9PiB0aGlzLl9fY29udGV4dFtpZF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRDdHguX3N0YXRlLnByb3RvdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldDogKCkgPT4gKHRoaXMuX19jb250ZXh0W2lkXSAmJiB0aGlzLl9fY29udGV4dFtpZF0uc3RhdGUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0OiAoIHYgKSA9PiAodGhpcy5fbW91bnQoaWQsIHYpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldEN0eC5fZGF0YS5wcm90b3R5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXQ6ICgpID0+ICh0aGlzLl9fY29udGV4dFtpZF0gJiYgdGhpcy5fX2NvbnRleHRbaWRdLmRhdGEpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0OiAoIHYgKSA9PiAodGhpcy5fbW91bnQoaWQsIHVuZGVmaW5lZCwgdikpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICApXG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIEJpbmQgc3RvcmVzIGZyb20gdGhpcyBjb250ZXh0LCBoaXMgcGFyZW50cyBhbmQgbWl4ZWQgY29udGV4dFxuICAgICAqXG4gICAgICogQHBhcmFtIG9iaiB7UmVhY3QuQ29tcG9uZW50fFN0b3JlfGZ1bmN0aW9ufVxuICAgICAqIEBwYXJhbSBrZXkge3N0cmluZyp9IHN0b3JlcyBrZXlzIHRvIGJpbmQgdXBkYXRlc1xuICAgICAqIEBwYXJhbSBhc1xuICAgICAqIEBwYXJhbSBzZXRJbml0aWFsPXRydWUge2Jvb2x9IGZhbHNlIHRvIG5vdCBwcm9wYWcgaW5pdGlhbCB2YWx1ZVxuICAgICAqL1xuICAgIGJpbmQoIG9iaiwga2V5LCBhcywgc2V0SW5pdGlhbCA9IHRydWUgKSB7XG4gICAgICAgIGxldCBsYXN0UmV2cywgZGF0YSwgcmVLZXk7XG4gICAgICAgIGlmICgga2V5ICYmICFpcy5hcnJheShrZXkpIClcbiAgICAgICAgICAgIGtleSA9IFtrZXldO1xuICAgICAgICBcbiAgICAgICAgaWYgKCBhcyA9PT0gZmFsc2UgfHwgYXMgPT09IHRydWUgKSB7XG4gICAgICAgICAgICBzZXRJbml0aWFsID0gYXM7XG4gICAgICAgICAgICBhcyAgICAgICAgID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmVLZXkgPSBrZXkubWFwKGlkID0+IChpcy5zdHJpbmcoaWQpID8gaWQgOiBpZC5uYW1lKSk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9mb2xsb3dlcnMucHVzaChcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBvYmosXG4gICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgIGFzIHx8IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICBsYXN0UmV2cyA9IHJlS2V5ICYmIHJlS2V5LnJlZHVjZSgoIHJldnMsIGlkICkgPT4gKHJldnNbaWRdID0gMCwgcmV2cyksIHt9KVxuICAgICAgICAgICAgXSk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLm1vdW50KGtleSk7XG4gICAgICAgIFxuICAgICAgICBpZiAoIHNldEluaXRpYWwgJiYgdGhpcy5fc3RhYmxlICkge1xuICAgICAgICAgICAgZGF0YSA9IHRoaXMuZ2V0VXBkYXRlcyhsYXN0UmV2cyk7XG4gICAgICAgICAgICBpZiAoICFkYXRhICkgcmV0dXJuO1xuICAgICAgICAgICAgaWYgKCB0eXBlb2Ygb2JqICE9IFwiZnVuY3Rpb25cIiApIHtcbiAgICAgICAgICAgICAgICBpZiAoIGFzICkgb2JqLnNldFN0YXRlKHsgW2FzXTogZGF0YSB9KTtcbiAgICAgICAgICAgICAgICBlbHNlIG9iai5zZXRTdGF0ZShkYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIG9iaihkYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogVW4gYmluZCB0aGlzIGNvbnRleHQgb2ZmIHRoZSBnaXZlbiBjb21wb25lbnQta2V5c1xuICAgICAqIEBwYXJhbSBvYmpcbiAgICAgKiBAcGFyYW0ga2V5XG4gICAgICogQHJldHVybnMge0FycmF5LjwqPn1cbiAgICAgKi9cbiAgICB1bkJpbmQoIG9iaiwga2V5LCBhcyApIHtcbiAgICAgICAgdmFyIGZvbGxvd2VycyA9IHRoaXMuX2ZvbGxvd2VycyxcbiAgICAgICAgICAgIGkgICAgICAgICA9IGZvbGxvd2VycyAmJiBmb2xsb3dlcnMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGZvbGxvd2VycyAmJiBpLS0gKVxuICAgICAgICAgICAgaWYgKCBmb2xsb3dlcnNbaV1bMF0gPT09IG9iaiAmJiAoJycgKyBmb2xsb3dlcnNbaV1bMV0pID09ICgnJyArIGtleSkgJiZcbiAgICAgICAgICAgICAgICBmb2xsb3dlcnNbaV1bMl0gPT0gYXMgKVxuICAgICAgICAgICAgICAgIHJldHVybiBmb2xsb3dlcnMuc3BsaWNlKGksIDEpO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBNb3VudCB0aGUgc3RvcmVzIGluIHN0b3Jlc0xpc3QgZnJvbSB0aGlzIGNvbnRleHQsIGl0cyBwYXJlbnRzIGFuZCBtaXhlZCBjb250ZXh0XG4gICAgICogQmluZCB0aGVtIHRvICd0bydcbiAgICAgKiBIb29rICd0bycgc28gaXQgd2lsbCBhdXRvIHVuYmluZCBvbiAnZGVzdHJveScgb3IgJ2NvbXBvbmVudFdpbGxVbm1vdW50J1xuICAgICAqIEBwYXJhbSB0b1xuICAgICAqIEBwYXJhbSBzdG9yZXNMaXN0XG4gICAgICogQHBhcmFtIGJpbmRcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSBJbml0aWFsIG91dHB1dHMgb2YgdGhlIHN0b3JlcyBpbiAnc3RvcmVzTGlzdCdcbiAgICAgKi9cbiAgICBtYXAoIHRvLCBzdG9yZXNMaXN0LCBiaW5kID0gdHJ1ZSApIHtcbiAgICAgICAgbGV0IFN0b3JlICA9IHRoaXMuY29uc3RydWN0b3IuU3RvcmU7XG4gICAgICAgIHN0b3Jlc0xpc3QgPSBpcy5hcnJheShzdG9yZXNMaXN0KSA/IHN0b3Jlc0xpc3QgOiBbc3RvcmVzTGlzdF07XG4gICAgICAgIHRoaXMubW91bnQoc3RvcmVzTGlzdCk7XG4gICAgICAgIGlmICggYmluZCAmJiB0byBpbnN0YW5jZW9mIFN0b3JlICkge1xuICAgICAgICAgICAgU3RvcmUubWFwKHRvLCBzdG9yZXNMaXN0LCB0aGlzLCB0aGlzLCBmYWxzZSlcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICggYmluZCApIHtcbiAgICAgICAgICAgIHRoaXMuYmluZCh0bywgc3RvcmVzTGlzdCwgdW5kZWZpbmVkLCBmYWxzZSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGxldCBtaXhlZENXVW5tb3VudCxcbiAgICAgICAgICAgICAgICB1bk1vdW50S2V5ID0gdG8uaXNSZWFjdENvbXBvbmVudCA/IFwiY29tcG9uZW50V2lsbFVubW91bnRcIiA6IFwiZGVzdHJveVwiO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoIHRvLmhhc093blByb3BlcnR5KHVuTW91bnRLZXkpICkge1xuICAgICAgICAgICAgICAgIG1peGVkQ1dVbm1vdW50ID0gdG9bdW5Nb3VudEtleV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRvW3VuTW91bnRLZXldID0gKCAuLi5hcmd6ICkgPT4ge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSB0b1t1bk1vdW50S2V5XTtcbiAgICAgICAgICAgICAgICBpZiAoIG1peGVkQ1dVbm1vdW50IClcbiAgICAgICAgICAgICAgICAgICAgdG9bdW5Nb3VudEtleV0gPSBtaXhlZENXVW5tb3VudDtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB0aGlzLnVuQmluZCh0bywgc3RvcmVzTGlzdCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRvW3VuTW91bnRLZXldICYmIHRvW3VuTW91bnRLZXldKC4uLmFyZ3opO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0b3Jlc0xpc3QucmVkdWNlKCggZGF0YSwgaWQgKSA9PiB7XG4gICAgICAgICAgICBpZiAoICFpcy5zdHJpbmcoaWQpIClcbiAgICAgICAgICAgICAgICBpZCA9IGlkLm5hbWU7XG4gICAgICAgICAgICBpZCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA9IGlkLnNwbGl0KCc6Jyk7Ly9AdG9kb1xuICAgICAgICAgICAgaWRbMF0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSBpZFswXS5zcGxpdCgnLicpO1xuICAgICAgICAgICAgZGF0YVtpZFsxXSB8fCBpZFswXVtpZFswXS5sZW5ndGggLSAxXV0gPSB0aGlzLnN0b3Jlc1tpZFswXVswXV0gJiYgdGhpcy5zdG9yZXNbaWRbMF1bMF1dLnJldHJpZXZlICYmIHRoaXMuc3RvcmVzW2lkWzBdWzBdXS5yZXRyaWV2ZShpZFswXS5zcGxpY2UoMSkpO1xuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH0sIHt9KTtcbiAgICB9XG4gICAgXG4gICAgcmV0cmlldmUoIHBhdGggPSBcIlwiICkge1xuICAgICAgICBwYXRoID0gaXMuc3RyaW5nKHBhdGgpID8gcGF0aC5zcGxpdCgnLicpIDogcGF0aDtcbiAgICAgICAgcmV0dXJuIHBhdGggJiYgdGhpcy5zdG9yZXNbcGF0aFswXV0gJiZcbiAgICAgICAgICAgIHRoaXMuc3RvcmVzW3BhdGhbMF1dLnJldHJpZXZlKHBhdGguc3BsaWNlKDEpKTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogR2V0IG9yIHVwZGF0ZSBzdG9yZXNSZXZNYXAncyByZXZpc2lvbnNcbiAgICAgKiBAcGFyYW0gc3RvcmVzUmV2TWFwXG4gICAgICogQHBhcmFtIGxvY2FsXG4gICAgICogQHJldHVybnMge3t9fVxuICAgICAqL1xuICAgIGdldFN0b3Jlc1JldnMoIHN0b3Jlc1Jldk1hcCA9IHt9LCBsb2NhbCApIHtcbiAgICAgICAgbGV0IGN0eCA9IHRoaXMuX19jb250ZXh0O1xuICAgICAgICBpZiAoICFzdG9yZXNSZXZNYXAgKSB7XG4gICAgICAgICAgICBzdG9yZXNSZXZNYXAgPSB7fTtcbiAgICAgICAgfVxuICAgICAgICBPYmplY3Qua2V5cyhjdHgpLmZvckVhY2goXG4gICAgICAgICAgICBpZCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCAhaXMuZm4oY3R4W2lkXSlcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgc3RvcmVzUmV2TWFwW2lkXSA9IGN0eFtpZF0uX3JldjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoICFzdG9yZXNSZXZNYXAuaGFzT3duUHJvcGVydHkoaWQpIClcbiAgICAgICAgICAgICAgICAgICAgc3RvcmVzUmV2TWFwW2lkXSA9IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIGlmICggIWxvY2FsICkge1xuICAgICAgICAgICAgdGhpcy5fX21peGVkLnJlZHVjZSgoIHVwZGF0ZWQsIGN0eCApID0+IChjdHguZ2V0U3RvcmVzUmV2cyhzdG9yZXNSZXZNYXApLCBzdG9yZXNSZXZNYXApLCBzdG9yZXNSZXZNYXApO1xuICAgICAgICAgICAgdGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuZ2V0U3RvcmVzUmV2cyhzdG9yZXNSZXZNYXApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdG9yZXNSZXZNYXA7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIEdldCBvciB1cGRhdGUgb3V0cHV0IGJhc2luZyBzdG9yZXNSZXZNYXAncyByZXZpc2lvbnMuXG4gICAgICogSWYgYSBzdG9yZSBpbiAnc3RvcmVzUmV2TWFwJyBpcyB1cGRhdGVkOyBhZGQgaXQgdG8gJ291dHB1dCdcbiAgICAgKiBAcGFyYW0gc3RvcmVzUmV2TWFwXG4gICAgICogQHBhcmFtIG91dHB1dFxuICAgICAqIEBwYXJhbSB1cGRhdGVkXG4gICAgICogQHJldHVybnMgeyp8e319XG4gICAgICovXG4gICAgZ2V0VXBkYXRlcyggc3RvcmVzUmV2TWFwLCBvdXRwdXQsIHVwZGF0ZWQgKSB7XG4gICAgICAgIGxldCBjdHggPSB0aGlzLl9fY29udGV4dDtcbiAgICAgICAgXG4gICAgICAgIG91dHB1dCA9IG91dHB1dCB8fCB7fTtcbiAgICAgICAgT2JqZWN0LmtleXMoY3R4KS5mb3JFYWNoKFxuICAgICAgICAgICAgaWQgPT4ge1xuICAgICAgICAgICAgICAgIGlmICggIW91dHB1dFtpZF1cbiAgICAgICAgICAgICAgICAgICAgJiYgKCAhc3RvcmVzUmV2TWFwXG4gICAgICAgICAgICAgICAgICAgICAgICB8fCAoc3RvcmVzUmV2TWFwLmhhc093blByb3BlcnR5KGlkKSAmJiBzdG9yZXNSZXZNYXBbaWRdID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgICAgICB8fCAhKCAhc3RvcmVzUmV2TWFwLmhhc093blByb3BlcnR5KGlkKSB8fCBjdHhbaWRdLl9yZXYgPD0gc3RvcmVzUmV2TWFwW2lkXSApKVxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlZCAgICA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIG91dHB1dFtpZF0gPSB0aGlzLmRhdGFbaWRdO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIHN0b3Jlc1Jldk1hcCAmJiBzdG9yZXNSZXZNYXBbaWRdICE9PSB1bmRlZmluZWQgKVxuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmVzUmV2TWFwW2lkXSA9IGN0eFtpZF0uX3JldjtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICB1cGRhdGVkID0gdGhpcy5fX21peGVkLnJlZHVjZSgoIHVwZGF0ZWQsIGN0eCApID0+IChjdHguZ2V0VXBkYXRlcyhzdG9yZXNSZXZNYXAsIG91dHB1dCwgdXBkYXRlZCkgfHwgdXBkYXRlZCksIHVwZGF0ZWQpO1xuICAgICAgICB1cGRhdGVkID0gdGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuZ2V0VXBkYXRlcyhzdG9yZXNSZXZNYXAsIG91dHB1dCwgdXBkYXRlZCkgfHwgdXBkYXRlZDtcbiAgICAgICAgcmV0dXJuIHVwZGF0ZWQgJiYgb3V0cHV0O1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSBmbGFnc19zdGF0ZXNcbiAgICAgKiBAcGFyYW0gZmxhZ3NfZGF0YVxuICAgICAqIEByZXR1cm5zIHt7c3RhdGU6IHt9LCBkYXRhOiB7fX19XG4gICAgICovXG4gICAgc2VyaWFsaXplKCBmbGFnc19zdGF0ZXMgPSAvLiovLCBmbGFnc19kYXRhID0gLy4qLyApIHtcbiAgICAgICAgbGV0IGN0eCA9IHRoaXMuX19jb250ZXh0LCBvdXRwdXQgPSB7IHN0YXRlOiB7fSwgZGF0YToge30gfSxcbiAgICAgICAgICAgIF9mbGFnc19zdGF0ZXMsXG4gICAgICAgICAgICBfZmxhZ3NfZGF0YTtcbiAgICAgICAgaWYgKCBpcy5hcnJheShmbGFnc19zdGF0ZXMpIClcbiAgICAgICAgICAgIGZsYWdzX3N0YXRlcy5mb3JFYWNoKGlkID0+IChvdXRwdXQuc3RhdGVbaWRdID0gdGhpcy5zdGF0ZVtpZF0pKTtcbiAgICAgICAgXG4gICAgICAgIGlmICggaXMuYXJyYXkoZmxhZ3NfZGF0YSkgKVxuICAgICAgICAgICAgZmxhZ3NfZGF0YS5mb3JFYWNoKGlkID0+IChvdXRwdXQuZGF0YVtpZF0gPSB0aGlzLmRhdGFbaWRdKSk7XG4gICAgICAgIFxuICAgICAgICBpZiAoICFpcy5hcnJheShmbGFnc19kYXRhKSAmJiAhaXMuYXJyYXkoZmxhZ3Nfc3RhdGVzKSApXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhjdHgpLmZvckVhY2goXG4gICAgICAgICAgICAgICAgaWQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIGlzLmZuKGN0eFtpZF0pIClcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGxldCBmbGFncyA9IGN0eFtpZF0uY29uc3RydWN0b3IuZmxhZ3M7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBmbGFncyA9IGlzLmFycmF5KGZsYWdzKSA/IGZsYWdzIDogW2ZsYWdzIHx8IFwiXCJdO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBmbGFncy5yZWR1Y2UoKCByLCBmbGFnICkgPT4gKHIgfHwgZmxhZ3Nfc3RhdGVzLnRlc3QoZmxhZykpLCBmYWxzZSkgKVxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0LnN0YXRlW2lkXSA9IHRoaXMuc3RhdGVbaWRdO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBmbGFncy5yZWR1Y2UoKCByLCBmbGFnICkgPT4gKHIgfHwgZmxhZ3NfZGF0YS50ZXN0KGZsYWcpKSwgZmFsc2UpIClcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dC5kYXRhW2lkXSA9IHRoaXMuZGF0YVtpZF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKVxuICAgICAgICByZXR1cm4gb3V0cHV0O1xuICAgIH1cbiAgICBcbiAgICBkaXNwYXRjaCggYWN0aW9uLCBkYXRhICkge1xuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLl9fY29udGV4dClcbiAgICAgICAgICAgICAgLmZvckVhY2goXG4gICAgICAgICAgICAgICAgICBpZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKCAhaXMuZm4odGhpcy5fX2NvbnRleHRbaWRdKSApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX19jb250ZXh0W2lkXS50cmlnZ2VyKGFjdGlvbiwgZGF0YSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX19taXhlZC5mb3JFYWNoKCggY3R4ICkgPT4gKGN0eC5kaXNwYXRjaChhY3Rpb24sIGRhdGEpKSk7XG4gICAgICAgIHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LmRpc3BhdGNoKGFjdGlvbiwgZGF0YSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBvbmNlKCdzdGFibGUnLCBjYilcbiAgICAgKiBAcGFyYW0gb2JqIHtSZWFjdC5Db21wb25lbnR8U3RvcmV8ZnVuY3Rpb24pXG4gICAgICogQHBhcmFtIGtleSB7c3RyaW5nfSBvcHRpb25hbCBrZXkgd2hlcmUgdG8gbWFwIHRoZSBwdWJsaWMgc3RhdGVcbiAgICAgKi9cbiAgICB0aGVuKCBjYiApIHtcbiAgICAgICAgaWYgKCB0aGlzLl9zdGFibGUgKVxuICAgICAgICAgICAgcmV0dXJuIGNiKG51bGwsIHRoaXMuZGF0YSk7XG4gICAgICAgIHRoaXMub25jZSgnc3RhYmxlJywgZSA9PiBjYihudWxsLCB0aGlzLmRhdGEpKTtcbiAgICB9XG4gICAgXG4gICAgcmVzdG9yZSggeyBzdGF0ZSwgZGF0YSB9LCBxdWlldCApIHtcbiAgICAgICAgbGV0IGN0eCA9IHRoaXMuX19jb250ZXh0O1xuICAgICAgICBPYmplY3Qua2V5cyhkYXRhKS5mb3JFYWNoKFxuICAgICAgICAgICAgaWQgPT4ge1xuICAgICAgICAgICAgICAgIHF1aWV0ID8gY3R4LmRhdGEgPSBkYXRhW2lkXVxuICAgICAgICAgICAgICAgICAgICA6IGN0eC5wdXNoKGRhdGFbaWRdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgT2JqZWN0LmtleXMoc3RhdGUpLmZvckVhY2goXG4gICAgICAgICAgICBpZCA9PiB7XG4gICAgICAgICAgICAgICAgcXVpZXQgPyBjdHguc3RhdGUgPSBzdGF0ZVtpZF1cbiAgICAgICAgICAgICAgICAgICAgOiBjdHguc2V0U3RhdGUoc3RhdGVbaWRdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG4gICAgXG4gICAgcmV0YWluU3RvcmVzKCBzdG9yZXMgPSBbXSwgcmVhc29uICkge1xuICAgICAgICBzdG9yZXMuZm9yRWFjaChcbiAgICAgICAgICAgIGlkID0+ICh0aGlzLnN0b3Jlc1tpZF0gJiYgdGhpcy5zdG9yZXNbaWRdLnJldGFpbiAmJiB0aGlzLnN0b3Jlc1tpZF0ucmV0YWluKHJlYXNvbikpXG4gICAgICAgIClcbiAgICB9XG4gICAgXG4gICAgZGlzcG9zZVN0b3Jlcyggc3RvcmVzID0gW10sIHJlYXNvbiApIHtcbiAgICAgICAgc3RvcmVzLmZvckVhY2goXG4gICAgICAgICAgICBpZCA9PiAodGhpcy5zdG9yZXNbaWRdICYmIHRoaXMuc3RvcmVzW2lkXS5kaXNwb3NlICYmIHRoaXMuc3RvcmVzW2lkXS5kaXNwb3NlKHJlYXNvbikpXG4gICAgICAgIClcbiAgICB9XG4gICAgXG4gICAgd2FpdCggcmVhc29uICkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwid2FpdFwiLCByZWFzb24pO1xuICAgICAgICB0aGlzLl9zdGFibGUgJiYgIXRoaXMuX19sb2Nrcy5hbGwgJiYgdGhpcy5lbWl0KFwidW5zdGFibGVcIiwgdGhpcyk7XG4gICAgICAgIHRoaXMuX3N0YWJsZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9fbG9ja3MuYWxsKys7XG4gICAgICAgIGlmICggcmVhc29uICkge1xuICAgICAgICAgICAgdGhpcy5fX2xvY2tzW3JlYXNvbl0gPSB0aGlzLl9fbG9ja3NbcmVhc29uXSB8fCAwO1xuICAgICAgICAgICAgdGhpcy5fX2xvY2tzW3JlYXNvbl0rKztcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICByZWxlYXNlKCByZWFzb24gKSB7XG4gICAgICAgIFxuICAgICAgICBpZiAoIHJlYXNvbiApIHtcbiAgICAgICAgICAgIGlmICggdGhpcy5fX2xvY2tzW3JlYXNvbl0gPT0gMCApXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlJlbGVhc2UgbW9yZSB0aGFuIGxvY2tpbmcgIVwiLCByZWFzb24pO1xuICAgICAgICAgICAgdGhpcy5fX2xvY2tzW3JlYXNvbl0gPSB0aGlzLl9fbG9ja3NbcmVhc29uXSB8fCAwO1xuICAgICAgICAgICAgdGhpcy5fX2xvY2tzW3JlYXNvbl0tLTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoICFyZWFzb24gJiYgdGhpcy5fX2xvY2tzLmFsbCA9PSAwIClcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJSZWxlYXNlIG1vcmUgdGhhbiBsb2NraW5nICFcIik7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9fbG9ja3MuYWxsLS07XG4gICAgICAgIGlmICggIXRoaXMuX19sb2Nrcy5hbGwgKSB7XG4gICAgICAgICAgICB0aGlzLl9zdGFiaWxpemVyVE0gJiYgY2xlYXJUaW1lb3V0KHRoaXMuX3N0YWJpbGl6ZXJUTSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMuX3N0YWJpbGl6ZXJUTSA9IHNldFRpbWVvdXQoXG4gICAgICAgICAgICAgICAgZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3N0YWJpbGl6ZXJUTSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIGlmICggdGhpcy5fX2xvY2tzLmFsbCApXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wcm9wYWdUTSAmJiBjbGVhclRpbWVvdXQodGhpcy5fcHJvcGFnVE0pO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc3RhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KFwic3RhYmxlXCIsIHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgIXRoaXMuZGVhZCAmJiB0aGlzLl9wcm9wYWcoKTsvLyBzdGFiaWxpdHkgY2FuIGluZHVjZSBkZXN0cm95XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG4gICAgXG4gICAgcHJvcGFnKCkge1xuICAgICAgICB0aGlzLl9wcm9wYWdUTSAmJiBjbGVhclRpbWVvdXQodGhpcy5fcHJvcGFnVE0pO1xuICAgICAgICB0aGlzLl9wcm9wYWdUTSA9IHNldFRpbWVvdXQoXG4gICAgICAgICAgICBlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLl9wcm9wYWdUTSA9IG51bGw7XG4gICAgICAgICAgICAgICAgdGhpcy5fcHJvcGFnKClcbiAgICAgICAgICAgIH0sIDJcbiAgICAgICAgKTtcbiAgICB9XG4gICAgXG4gICAgX3Byb3BhZygpIHtcbiAgICAgICAgaWYgKCB0aGlzLl9mb2xsb3dlcnMubGVuZ3RoIClcbiAgICAgICAgICAgIHRoaXMuX2ZvbGxvd2Vycy5mb3JFYWNoKCggeyAwOiBvYmosIDE6IGtleSwgMjogYXMsIDM6IGxhc3RSZXZzIH0gKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmdldFVwZGF0ZXMobGFzdFJldnMpO1xuICAgICAgICAgICAgICAgIGlmICggIWRhdGEgKSByZXR1cm47XG4gICAgICAgICAgICAgICAgaWYgKCB0eXBlb2Ygb2JqICE9IFwiZnVuY3Rpb25cIiApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBhcyApIG9iai5zZXRTdGF0ZSh7IFthc106IGRhdGEgfSk7XG4gICAgICAgICAgICAgICAgICAgIGVsc2Ugb2JqLnNldFN0YXRlKGRhdGEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgb2JqKGRhdGEsIGxhc3RSZXZzICYmIFsuLi5sYXN0UmV2c10gfHwgXCJubyByZXZzXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBsYXN0UmV2cyAmJlxuICAgICAgICAgICAgICAgIC8vIGtleS5mb3JFYWNoKGlkID0+IChsYXN0UmV2c1tpZF0gPSB0aGlzLnN0b3Jlc1tpZF0gJiYgdGhpcy5zdG9yZXNbaWRdLl9yZXYgfHwgMCkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZW1pdChcInVwZGF0ZVwiLCB0aGlzLmdldFVwZGF0ZXMoKSk7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIGlzIHN0YWJsZVxuICAgICAqIEByZXR1cm5zIGJvb2xcbiAgICAgKi9cbiAgICBpc1N0YWJsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0YWJsZTtcbiAgICB9XG4gICAgXG4gICAgLy9zZXJpYWxpemVDaGlsZHMoIGNoaWxkcyA9IFtdICkge1xuICAgIC8vXG4gICAgLy99XG4gICAgXG4gICAgX2FkZENoaWxkKCBjdHggKSB7XG4gICAgICAgIHRoaXMuX2NoaWxkQ29udGV4dHMucHVzaChjdHgpO1xuICAgICAgICBsZXQgbGlzdHMgICAgID0ge1xuICAgICAgICAgICAgICAgICdzdGFibGUnICAgICAgOiBzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdW5TdGFibGVDaGlsZHMtLTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCAhdGhpcy5fdW5TdGFibGVDaGlsZHMgKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KFwic3RhYmxlVHJlZVwiLCB0aGlzKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgJ3Vuc3RhYmxlJyAgICA6IHMgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl91blN0YWJsZUNoaWxkcysrO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIDEgPT0gdGhpcy5fdW5TdGFibGVDaGlsZHMgKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KFwidW5zdGFibGVUcmVlXCIsIHRoaXMpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAnc3RhYmxlVHJlZScgIDogcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3VuU3RhYmxlQ2hpbGRzLS07XG4gICAgICAgICAgICAgICAgICAgIGlmICggIXRoaXMuX3VuU3RhYmxlQ2hpbGRzIClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdChcInN0YWJsZVRyZWVcIiwgdGhpcylcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICd1bnN0YWJsZVRyZWUnOiBzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdW5TdGFibGVDaGlsZHMrKztcbiAgICAgICAgICAgICAgICAgICAgaWYgKCAxID09IHRoaXMuX3VuU3RhYmxlQ2hpbGRzIClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdChcInVuc3RhYmxlVHJlZVwiLCB0aGlzKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgJ2Rlc3Ryb3knICAgICA6IGN0eCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICggY3R4Ll91blN0YWJsZUNoaWxkcyApXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl91blN0YWJsZUNoaWxkcy0tO1xuICAgICAgICAgICAgICAgICAgICBpZiAoICFjdHguaXNTdGFibGUoKSApXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl91blN0YWJsZUNoaWxkcy0tO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpZiAoICF0aGlzLl91blN0YWJsZUNoaWxkcyApXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXQoXCJzdGFibGVUcmVlXCIsIHRoaXMpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHdhc1N0YWJsZSA9IHRoaXMuX3VuU3RhYmxlQ2hpbGRzO1xuICAgICAgICAvLyFjdHguaXNTdGFibGUoKSAmJiBjb25zb2xlLndhcm4oJ2FkZCB1bnN0YWJsZSBjaGlsZCcpO1xuICAgICAgICAhY3R4LmlzU3RhYmxlKCkgJiYgdGhpcy5fdW5TdGFibGVDaGlsZHMrKztcbiAgICAgICAgY3R4Ll91blN0YWJsZUNoaWxkcyAmJiB0aGlzLl91blN0YWJsZUNoaWxkcysrO1xuICAgICAgICB0aGlzLl9jaGlsZENvbnRleHRzTGlzdC5wdXNoKGxpc3RzKTtcbiAgICAgICAgaWYgKCAhd2FzU3RhYmxlICYmIHRoaXMuX3VuU3RhYmxlQ2hpbGRzIClcbiAgICAgICAgICAgIHRoaXMuZW1pdChcInVuc3RhYmxlVHJlZVwiLCB0aGlzKVxuICAgICAgICBjdHgub24obGlzdHMpO1xuICAgIH1cbiAgICBcbiAgICBfcm1DaGlsZCggY3R4ICkge1xuICAgICAgICBsZXQgaSAgICAgICAgID0gdGhpcy5fY2hpbGRDb250ZXh0cy5pbmRleE9mKGN0eCksXG4gICAgICAgICAgICB3YXNTdGFibGUgPSB0aGlzLl91blN0YWJsZUNoaWxkcztcbiAgICAgICAgaWYgKCBpICE9IC0xICkge1xuICAgICAgICAgICAgdGhpcy5fY2hpbGRDb250ZXh0cy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAhY3R4LmlzU3RhYmxlKCkgJiYgdGhpcy5fdW5TdGFibGVDaGlsZHMtLTtcbiAgICAgICAgICAgIGN0eC5fdW5TdGFibGVDaGlsZHMgJiYgdGhpcy5fdW5TdGFibGVDaGlsZHMtLTtcbiAgICAgICAgICAgIGN0eC51bih0aGlzLl9jaGlsZENvbnRleHRzTGlzdC5zcGxpY2UoaSwgMSlbMF0pO1xuICAgICAgICAgICAgaWYgKCB3YXNTdGFibGUgJiYgIXRoaXMuX3VuU3RhYmxlQ2hpbGRzIClcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXQoXCJzdGFibGVUcmVlXCIpXG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgcmV0YWluKCByZWFzb24gKSB7XG4gICAgICAgIHRoaXMuX19yZXRhaW5zLmFsbCsrO1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwicmV0YWluXCIsIHRoaXMuX2lkLCByZWFzb24pO1xuICAgICAgICBpZiAoIHJlYXNvbiApIHtcbiAgICAgICAgICAgIHRoaXMuX19yZXRhaW5zW3JlYXNvbl0gPSB0aGlzLl9fcmV0YWluc1tyZWFzb25dIHx8IDA7XG4gICAgICAgICAgICB0aGlzLl9fcmV0YWluc1tyZWFzb25dKys7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgZGlzcG9zZSggcmVhc29uICkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwiZGlzcG9zZVwiLCB0aGlzLl9pZCwgcmVhc29uKTtcbiAgICAgICAgaWYgKCByZWFzb24gKSB7XG4gICAgICAgICAgICBpZiAoICF0aGlzLl9fcmV0YWluc1tyZWFzb25dIClcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJEaXNwb3NlIG1vcmUgdGhhbiByZXRhaW5pbmcgOiBcIisgcmVhc29uKTtcbiAgICAgICAgICAgIHRoaXMuX19yZXRhaW5zW3JlYXNvbl0tLTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKCAhdGhpcy5fX3JldGFpbnMuYWxsIClcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkRpc3Bvc2UgbW9yZSB0aGFuIHJldGFpbmluZyAhXCIpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fX3JldGFpbnMuYWxsLS07XG4gICAgICAgIFxuICAgICAgICBpZiAoICF0aGlzLl9fcmV0YWlucy5hbGwgKSB7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiZGlzcG9zZSBkbyBkZXN0cm95IFwiLCB0aGlzLl9pZCwgdGhpcy5fcGVyc2lzdGVuY2VUbSk7XG4gICAgICAgICAgICBpZiAoIHRoaXMuX3BlcnNpc3RlbmNlVG0gKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZGVzdHJveVRNICYmIGNsZWFyVGltZW91dCh0aGlzLl9kZXN0cm95VE0pO1xuICAgICAgICAgICAgICAgIHRoaXMuX2Rlc3Ryb3lUTSA9IHNldFRpbWVvdXQoXG4gICAgICAgICAgICAgICAgICAgIGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50aGVuKHMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICF0aGlzLl9fcmV0YWlucy5hbGwgJiYgdGhpcy5kZXN0cm95KClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wZXJzaXN0ZW5jZVRtXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMudGhlbihzID0+ICghdGhpcy5fX3JldGFpbnMuYWxsICYmIHRoaXMuZGVzdHJveSgpKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogb3JkZXIgZGVzdHJveSBvZiBsb2NhbCBzdG9yZXNcbiAgICAgKi9cbiAgICBkZXN0cm95KCkge1xuICAgICAgICBsZXQgY3R4ICAgPSB0aGlzLl9fY29udGV4dDtcbiAgICAgICAgLy9jb25zb2xlLndhcm4oXCJkZXN0cm95XCIsIHRoaXMuX2lkKTtcbiAgICAgICAgdGhpcy5kZWFkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5lbWl0KFwiZGVzdHJveVwiLCB0aGlzKTtcbiAgICAgICAgT2JqZWN0LmtleXMoXG4gICAgICAgICAgICB0aGlzLl9fbGlzdGVuaW5nXG4gICAgICAgICkuZm9yRWFjaChcbiAgICAgICAgICAgIGlkID0+IHRoaXMuX19jb250ZXh0W2lkXS5yZW1vdmVMaXN0ZW5lcih0aGlzLl9fbGlzdGVuaW5nW2lkXSlcbiAgICAgICAgKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX3N0YWJpbGl6ZXJUTSAmJiBjbGVhclRpbWVvdXQodGhpcy5fc3RhYmlsaXplclRNKTtcbiAgICAgICAgdGhpcy5fcHJvcGFnVE0gJiYgY2xlYXJUaW1lb3V0KHRoaXMuX3Byb3BhZ1RNKTtcbiAgICAgICAgdGhpcy5fX2xpc3RlbmluZyA9IHt9O1xuICAgICAgICBcbiAgICAgICAgaWYgKCB0aGlzLl9pc0xvY2FsSWQgKVxuICAgICAgICAgICAgZGVsZXRlIG9wZW5Db250ZXh0c1t0aGlzLl9pZF07XG4gICAgICAgIHRoaXMuX2ZvbGxvd2Vycy5sZW5ndGggPSAwO1xuICAgICAgICBcbiAgICAgICAgd2hpbGUgKCB0aGlzLl9fbWl4ZWRMaXN0Lmxlbmd0aCApIHtcbiAgICAgICAgICAgIHRoaXMuX19taXhlZFswXS5yZW1vdmVMaXN0ZW5lcih0aGlzLl9fbWl4ZWRMaXN0LnNoaWZ0KCkpO1xuICAgICAgICAgICAgdGhpcy5fX21peGVkLnNoaWZ0KCkuZGlzcG9zZShcIm1peGVkVG9cIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCB0aGlzLl9fcGFyZW50TGlzdCApIHtcbiAgICAgICAgICAgIHRoaXMucGFyZW50Ll9ybUNoaWxkKHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5wYXJlbnQucmVtb3ZlTGlzdGVuZXIodGhpcy5fX3BhcmVudExpc3QpO1xuICAgICAgICAgICAgdGhpcy5wYXJlbnQuZGlzcG9zZShcImlzTXlQYXJlbnRcIik7XG4gICAgICAgICAgICB0aGlzLl9fcGFyZW50TGlzdCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgLy9mb3IgKCBsZXQga2V5IGluIGN0eCApXG4gICAgICAgIC8vICAgIGlmICggIWlzLmZuKGN0eFtrZXldKSApIHtcbiAgICAgICAgLy8gICAgICAgIGlmICggY3R4W2tleV0uY29udGV4dE9iaiA9PT0gdGhpcyApXG4gICAgICAgIC8vICAgICAgICAgICAgY3R4W2tleV0uZGlzcG9zZSgpO1xuICAgICAgICAvL1xuICAgICAgICAvLyAgICAgICAgY3R4W2tleV0gPSBjdHhba2V5XS5jb25zdHJ1Y3RvcjtcbiAgICAgICAgLy8gICAgfVxuICAgICAgICB0aGlzLl9fbWl4ZWQgPSB0aGlzLmRhdGEgPSB0aGlzLnN0YXRlID0gdGhpcy5jb250ZXh0ID0gdGhpcy5zdG9yZXMgPSBudWxsO1xuICAgICAgICB0aGlzLl9kYXRhID0gdGhpcy5fc3RhdGUgPSB0aGlzLl9zdG9yZXMgPSBudWxsO1xuICAgICAgICBcbiAgICAgICAgXG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9Db250ZXh0LmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaXNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJpc1wiXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpICAyMDE3IENhaXBpIExhYnMgLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4gKlxuICogQGF1dGhvciA6IE5hdGhhbmFlbCBCcmF1blxuICogQGNvbnRhY3QgOiBjYWlwaWxhYnNAZ21haWwuY29tXG4gKi9cbnZhciBpcyA9IHJlcXVpcmUoJ2lzJyk7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbWl0dGVyIHtcbiAgICBfZXZlbnRzID0ge307XG4gICAgXG4gICAgb24oIGV2dCwgY2IgKSB7XG4gICAgICAgIGlmICggIWlzLnN0cmluZyhldnQpICYmIGV2dCApXG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMoZXZ0KS5mb3JFYWNoKGsgPT4gdGhpcy5vbihrLCBldnRba10pKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX2V2ZW50c1tldnRdID0gdGhpcy5fZXZlbnRzW2V2dF0gfHwgW107XG4gICAgICAgIHRoaXMuX2V2ZW50c1tldnRdLnB1c2goY2IpO1xuICAgICAgICBcbiAgICB9XG4gICAgXG4gICAgdW4oIGV2dCwgY2IgKSB7XG4gICAgICAgIGlmICggIWlzLnN0cmluZyhldnQpICYmIGV2dCApXG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMoZXZ0KS5mb3JFYWNoKGsgPT4gdGhpcy51bihrLCBldnRba10pKTtcbiAgICAgICAgXG4gICAgICAgIGlmICggIXRoaXMuX2V2ZW50c1tldnRdICkgcmV0dXJuO1xuICAgICAgICB2YXIgaSA9IHRoaXMuX2V2ZW50c1tldnRdLmluZGV4T2YoY2IpO1xuICAgICAgICB0aGlzLl9ldmVudHNbZXZ0XS5zcGxpY2UoaSwgMSk7XG4gICAgfVxuICAgIFxuICAgIGVtaXQoIGV2dCwgLi4uYXJneiApIHtcbiAgICAgICAgaWYgKCAhdGhpcy5fZXZlbnRzW2V2dF0gKSByZXR1cm47XG4gICAgICAgIGxldCBsaXN0cyA9IFsuLi50aGlzLl9ldmVudHNbZXZ0XV07XG4gICAgICAgIGZvciAoIHZhciBpID0gMDsgaSA8IGxpc3RzLmxlbmd0aDsgaSsrICkge1xuICAgICAgICAgICAgbGlzdHNbaV0oLi4uYXJneik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgYWRkTGlzdGVuZXIoKSB7XG4gICAgICAgIHRoaXMub24oLi4uYXJndW1lbnRzKTtcbiAgICB9XG4gICAgXG4gICAgcmVtb3ZlTGlzdGVuZXIoKSB7XG4gICAgICAgIHRoaXMudW4oLi4uYXJndW1lbnRzKTtcbiAgICB9XG4gICAgXG4gICAgcmVtb3ZlQWxsTGlzdGVuZXJzKCkge1xuICAgICAgICB0aGlzLl9ldmVudHMgPSB7fTtcbiAgICB9XG4gICAgXG4gICAgb25jZSggZXZ0LCBjYiApIHtcbiAgICAgICAgbGV0IGZuO1xuICAgICAgICB0aGlzLm9uKGV2dCwgZm4gPSAoIC4uLmFyZ3ogKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnVuKGV2dCwgZm4pO1xuICAgICAgICAgICAgY2IoLi4uYXJneilcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIFxuICAgIFxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9FbWl0dGVyLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2hvcnRpZFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInNob3J0aWRcIlxuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxuICogQ29weXJpZ2h0IChjKSAgMjAxNyBDYWlwaSBMYWJzIC5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuICpcbiAqIEBhdXRob3IgOiBOYXRoYW5hZWwgQnJhdW5cbiAqIEBjb250YWN0IDogY2FpcGlsYWJzQGdtYWlsLmNvbVxuICovXG5cbi8qKlxuICogVWx0cmEgc2NhbGFibGUgc3RhdGUtYXdhcmUgc3RvcmVcbiAqXG4gKiBAdG9kbyA6IGxvdCBvZiBvcHRpbXMuLi5cbiAqL1xuXG52YXIgaXMgICAgICAgICAgID0gcmVxdWlyZSgnaXMnKSxcbiAgICBDb250ZXh0ICAgICAgPSByZXF1aXJlKCcuL0NvbnRleHQnKSxcbiAgICBFdmVudEVtaXR0ZXIgPSByZXF1aXJlKCcuL0VtaXR0ZXInKSxcbiAgICBzaG9ydGlkICAgICAgPSByZXF1aXJlKCdzaG9ydGlkJyksXG4gICAgb2JqUHJvdG8gICAgID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHt9KTtcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdG9yZSBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gICAgXG4gICAgc3RhdGljIHVzZSAgICAgICAgICAgICAgICAgICAgICAgID0gW107Ly8gb3ZlcnJpZGFibGUgbGlzdCBvZiBzb3VyY2Ugc3RvcmVzXG4gICAgc3RhdGljIGZvbGxvdzsvLyBvdmVycmlkYWJsZSBsaXN0IG9mIHN0b3JlIHRoYXQgd2lsbCBhbGxvdyBwdXNoIGlmIHVwZGF0ZWRcbiAgICBzdGF0aWMgcmVxdWlyZTtcbiAgICBzdGF0aWMgc3RhdGljQ29udGV4dCAgICAgICAgICAgICAgPSBuZXcgQ29udGV4dCh7fSwgeyBpZDogXCJzdGF0aWNcIiB9KTtcbiAgICBzdGF0aWMgc3RhdGUgICAgICAgICAgICAgICAgICAgICAgPSB1bmRlZmluZWQ7Ly8gZGVmYXVsdCBzdGF0ZVxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICAgICAgICAgc3RhdGljIGRlZmF1bHRNYXhMaXN0ZW5lcnMgPSAxMDA7XG4gICAgLyoqXG4gICAgICogaWYgcmV0YWluIGdvZXMgdG8gMCA6XG4gICAgICogZmFsc2UgdG8gbm90IGRlc3Ryb3ksXG4gICAgICogMCB0byBzeW5jIGF1dG8gZGVzdHJveVxuICAgICAqIE1zIHRvIGF1dG9kZXN0cm95IGFmdGVyIHRtIG1zIGlmIG5vIHJldGFpbiBoYXMgYmVlbiBjYWxsZWRcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbnxJbnR9XG4gICAgICovXG4gICAgICAgICAgIHN0YXRpYyBwZXJzaXN0ZW5jZVRtICAgICAgID0gZmFsc2U7XG4gICAgXG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0b3IsIHdpbGwgYnVpbGQgYSByZXNjb3BlIHN0b3JlXG4gICAgICpcbiAgICAgKiAoY29udGV4dCwge3JlcXVpcmUsdXNlLGFwcGx5LHN0YXRlLCBkYXRhfSlcbiAgICAgKiAoY29udGV4dClcbiAgICAgKlxuICAgICAqIEBwYXJhbSBjb250ZXh0IHtvYmplY3R9IGNvbnRleHQgd2hlcmUgdG8gZmluZCB0aGUgb3RoZXIgc3RvcmVzIChkZWZhdWx0IDogc3RhdGljIHN0YXRpY0NvbnRleHQgKVxuICAgICAqIEBwYXJhbSBrZXlzIHtBcnJheX0gKHBhc3NlZCB0byBTdG9yZTo6bWFwKSBFeCA6IFtcInNlc3Npb25cIiwgXCJvdGhlck5hbWVkU3RvcmU6a2V5XCIsIG90aGVyU3RvcmUuYXMoXCJvdGhlcktleVwiKV1cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdmFyIGFyZ3ogICAgICAgICA9IFsuLi5hcmd1bWVudHNdLFxuICAgICAgICAgICAgX3N0YXRpYyAgICAgID0gdGhpcy5jb25zdHJ1Y3RvcixcbiAgICAgICAgICAgIGNvbnRleHQgICAgICA9IGFyZ3pbMF0gaW5zdGFuY2VvZiBDb250ZXh0XG4gICAgICAgICAgICAgICAgPyBhcmd6LnNoaWZ0KClcbiAgICAgICAgICAgICAgICA6IF9zdGF0aWMuY29udGV4dCA/IENvbnRleHQuZ2V0Q29udGV4dChfc3RhdGljLmNvbnRleHQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBpcy5zdHJpbmcoYXJnelswXSlcbiAgICAgICAgICAgICAgICAgICAgICA/IENvbnRleHQuZ2V0Q29udGV4dChhcmd6LnNoaWZ0KCkpXG4gICAgICAgICAgICAgICAgICAgICAgOiBfc3RhdGljLnN0YXRpY0NvbnRleHQsXG4gICAgICAgICAgICBjZmcgICAgICAgICAgPSBhcmd6WzBdICYmICFpcy5hcnJheShhcmd6WzBdKSAmJiAhaXMuc3RyaW5nKGFyZ3pbMF0pID8gYXJnei5zaGlmdCgpIDoge30sXG4gICAgICAgICAgICBuYW1lICAgICAgICAgPSBpcy5zdHJpbmcoYXJnelswXSkgPyBhcmd6WzBdIDogY2ZnLm5hbWUgfHwgX3N0YXRpYy5uYW1lLFxuICAgICAgICAgICAgd2F0Y2hzICAgICAgID0gaXMuYXJyYXkoYXJnelswXSkgPyBhcmd6LnNoaWZ0KCkgOiBjZmcudXNlIHx8IFtdLC8vIHdhdGNocyBuZWVkIHRvIGJlIGRlZmluZWQgYWZ0ZXIgYWxsIHRoZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHN0b3JlIGFyZSByZWdpc3RlcmVkIDogc28gd2UgY2FuJ3QgZGVhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdpdGggYW55IFwic3RhdGljIHVzZVwiIGF1dG9tYXRpY2x5XG4gICAgICAgICAgICBhcHBseSAgICAgICAgPSBpcy5mbihhcmd6WzBdKSA/IGFyZ3ouc2hpZnQoKSA6IGNmZy5hcHBseSB8fCBudWxsLFxuICAgICAgICAgICAgaW5pdGlhbFN0YXRlID0gX3N0YXRpYy5zdGF0ZSB8fCBfc3RhdGljLmluaXRpYWxTdGF0ZTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX3VpZCA9IGNmZy5fdWlkIHx8IHNob3J0aWQuZ2VuZXJhdGUoKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX19yZXRhaW5zICAgID0geyBhbGw6IDAgfTtcbiAgICAgICAgdGhpcy5fX2xvY2tzICAgICAgPSB7IGFsbDogMCB9O1xuICAgICAgICB0aGlzLl9vblN0YWJpbGl6ZSA9IFtdO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fcGVyc2lzdGVuY2VUbSA9IGNmZy5wZXJzaXN0ZW5jZVRtIHx8IHRoaXMuY29uc3RydWN0b3IucGVyc2lzdGVuY2VUbTtcbiAgICAgICAgaWYgKCBpcy5zdHJpbmcoYXJnelswXSkgKSB7XG4gICAgICAgICAgICBpZiAoIGNvbnRleHQuX19jb250ZXh0W25hbWVdIClcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCJSZVNjb3BlOiBPdmVyd3JpdGluZyBhbiBleGlzdGluZyBzdGF0aWMgbmFtZWQgc3RvcmUgKCAlcyApICEhXCIsIG5hbWUpO1xuICAgICAgICAgICAgY29udGV4dC5fX2NvbnRleHRbbmFtZV0gPSB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAoIGNmZyAmJiBjZmcub24gKSB7XG4gICAgICAgICAgICB0aGlzLm9uKGNmZy5vbik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gdGhpcy5zdGF0ZSAgICAgID0gdGhpcy5zdGF0ZSB8fCB7fTtcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICBcbiAgICAgICAgaWYgKCBjb250ZXh0LnN0b3JlcyApIHtcbiAgICAgICAgICAgIHRoaXMuY29udGV4dE9iaiA9IGNvbnRleHQ7XG4gICAgICAgICAgICB0aGlzLmNvbnRleHQgICAgPSBjb250ZXh0LnN0b3JlcztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY29udGV4dE9iaiA9IG5ldyBDb250ZXh0KGNvbnRleHQpO1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0ICAgID0gY29udGV4dC5zdG9yZXM7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICB0aGlzLl9yZXYgICAgID0gMDtcbiAgICAgICAgdGhpcy5fcmV2cyAgICA9IHt9O1xuICAgICAgICB0aGlzLnN0b3JlcyAgID0ge307XG4gICAgICAgIHRoaXMuX3JlcXVpcmUgPSBbXTtcbiAgICAgICAgXG4gICAgICAgIGlmICggaXMuYXJyYXkoX3N0YXRpYy51c2UpICkge1xuICAgICAgICAgICAgdGhpcy5fdXNlID0gWy4uLndhdGNocywgLi4uKF9zdGF0aWMudXNlIHx8IFtdKS5tYXAoXG4gICAgICAgICAgICAgICAga2V5ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlZiA9IGtleS5tYXRjaCgvXihcXCE/KShbXlxcOl0qKSg/OlxcOiguKikpPyQvKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCByZWZbMV0gKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVmMiA9IHJlZlsyXS5zcGxpdCgnLicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fcmVxdWlyZS5wdXNoKHJlZlszXSB8fCByZWYyW3JlZjIubGVuZ3RoIC0gMV0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZWZbMl07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKV07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl91c2UgPSBbLi4ud2F0Y2hzLCAuLi4oXG4gICAgICAgICAgICAgICAgX3N0YXRpYy51c2UgPyBPYmplY3Qua2V5cyhfc3RhdGljLnVzZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlZiA9IGtleS5tYXRjaCgvXihcXCE/KSguKikkLyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZlsxXSAmJiB0aGlzLl9yZXF1aXJlLnB1c2goX3N0YXRpYy51c2Vba2V5XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZWZbMl0gKyAnOicgKyBfc3RhdGljLnVzZVtrZXldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBbXVxuICAgICAgICAgICAgKV07XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmICggX3N0YXRpYy5yZXF1aXJlIClcbiAgICAgICAgICAgIHRoaXMuX3JlcXVpcmUucHVzaCguLi5fc3RhdGljLnJlcXVpcmUpO1xuICAgICAgICBpZiAoIGNmZy5yZXF1aXJlIClcbiAgICAgICAgICAgIHRoaXMuX3JlcXVpcmUucHVzaCguLi5jZmcucmVxdWlyZSk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9mb2xsb3dlcnMgPSBbXTtcbiAgICAgICAgXG4gICAgICAgIGlmICggX3N0YXRpYy5kYXRhICE9PSB1bmRlZmluZWQgKVxuICAgICAgICAgICAgdGhpcy5kYXRhID0geyAuLi5fc3RhdGljLmRhdGEgfTtcbiAgICAgICAgaWYgKCBjZmcuaGFzT3duUHJvcGVydHkoXCJkYXRhXCIpICYmIGNmZy5kYXRhICE9PSB1bmRlZmluZWQgKVxuICAgICAgICAgICAgdGhpcy5kYXRhID0gY2ZnLmRhdGE7XG4gICAgICAgIGlmICggY2ZnLmhhc093blByb3BlcnR5KFwic3RhdGVcIikgJiYgY2ZnLnN0YXRlICE9PSB1bmRlZmluZWQgKVxuICAgICAgICAgICAgaW5pdGlhbFN0YXRlID0geyAuLi5pbml0aWFsU3RhdGUsIC4uLmNmZy5zdGF0ZSB9O1xuICAgICAgICBcbiAgICAgICAgaWYgKCBhcHBseSApXG4gICAgICAgICAgICB0aGlzLmFwcGx5ID0gYXBwbHk7XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgaWYgKCBpbml0aWFsU3RhdGUgfHwgdGhpcy5fdXNlLmxlbmd0aCApIHsvLyBzeW5jIGFwcGx5XG4gICAgICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgICAgIC4uLihpbml0aWFsU3RhdGUgfHwge30pLFxuICAgICAgICAgICAgICAgIC4uLmNvbnRleHQubWFwKHRoaXMsIHRoaXMuX3VzZSlcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoIHRoaXMuc2hvdWxkQXBwbHkodGhpcy5zdGF0ZSkgJiYgdGhpcy5kYXRhID09PSB1bmRlZmluZWQgKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhICAgID0gdGhpcy5hcHBseSh0aGlzLmRhdGEsIHRoaXMuc3RhdGUsIHRoaXMuc3RhdGUpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3N0YWJsZSA9ICF0aGlzLl9fbG9ja3MuYWxsOyAvLyBzdGFibGUgaWYgaXQgaGF2ZSBpbml0aWFsIHJlc3VsdCBkYXRhID9cbiAgICAgICAgICAgICAgICAhdGhpcy5fX2xvY2tzLmFsbCAmJiB0aGlzLl9yZXYrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICB0aGlzLl9zdGFibGUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICggdGhpcy5kYXRhICE9PSB1bmRlZmluZWQgKSB7XG4gICAgICAgICAgICB0aGlzLl9zdGFibGUgPSB0cnVlOyAvLyBzdGFibGUgaWYgaXQgaGF2ZSBpbml0aWFsIHJlc3VsdCBkYXRhID9cbiAgICAgICAgICAgIHRoaXMuX3JldisrO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fc3RhYmxlID0gZmFsc2U7XG4gICAgICAgICAgICBpZiAoICFfc3RhdGljLm1hbmFnZWQgJiYgIXRoaXMuc3RhdGUgJiYgKCF0aGlzLl91c2UgfHwgIXRoaXMuX3VzZS5sZW5ndGgpICkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIlJlc2NvcGUgc3RvcmUgJ1wiLCB0aGlzLm5hbWUsIFwiJyBoYXZlIG5vIGluaXRpYWwgZGF0YSwgc3RhdGUgb3IgdXNlLiBJdCBjYW4ndCBzdGFiaWxpemUuLi5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgIXRoaXMuX3N0YWJsZSAmJiB0aGlzLmVtaXQoJ3Vuc3RhYmxlJywgdGhpcy5zdGF0ZSk7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIGdldCBhIEJ1aWxkZXIta2V5IHBhaXIgZm9yIFN0b3JlOjptYXBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgICAqIEByZXR1cm5zIHt7c3RvcmU6IFN0b3JlLCBuYW1lOiAqfX1cbiAgICAgKi9cbiAgICBzdGF0aWMgYXMoIG5hbWUgKSB7XG4gICAgICAgIHJldHVybiB7IHN0b3JlOiB0aGlzLCBuYW1lIH07XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIE1hcCBhbGwgbmFtZWQgc3RvcmVzIGluIHtrZXlzfSB0byB0aGUge29iamVjdH0ncyBzdGF0ZVxuICAgICAqIEhvb2sgY29tcG9uZW50V2lsbFVubW91bnQgKGZvciByZWFjdCBjb21wKSBvciBkZXN0cm95IHRvIHVuQmluZCB0aGVtIGF1dG9tYXRpY2FsbHlcbiAgICAgKiBAc3RhdGljXG4gICAgICogQHBhcmFtIG9iamVjdCB7UmVhY3QuQ29tcG9uZW50fFN0b3JlfC4uLn0gdGFyZ2V0IHN0YXRlIGF3YXJlIG9iamVjdFxuICAgICAqIEBwYXJhbSBrZXlzIHtBcnJheX0gRXggOiBbXCJzZXNzaW9uXCIsIFwib3RoZXJTdGF0aWNOYW1lZFN0b3JlOmtleVwiLCBzdG9yZS5hcygnYW5vdGhlcktleScpXVxuICAgICAqL1xuICAgIHN0YXRpYyBtYXAoIGNvbXBvbmVudCwga2V5cywgY29udGV4dCwgb3JpZ2luLCBzZXRJbml0aWFsID0gZmFsc2UgKSB7XG4gICAgICAgIHZhciB0YXJnZXRSZXZzICAgICA9IGNvbXBvbmVudC5fcmV2cyB8fCB7fTtcbiAgICAgICAgdmFyIHRhcmdldENvbnRleHQgID0gY29tcG9uZW50LnN0b3JlcyB8fCAoY29tcG9uZW50LnN0b3JlcyA9IHt9KTtcbiAgICAgICAgdmFyIGluaXRpYWxPdXRwdXRzID0ge307XG4gICAgICAgIGtleXMgICAgICAgICAgICAgICA9IGlzLmFycmF5KGtleXMpID8gWy4uLmtleXNdIDogW2tleXNdO1xuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIGNvbnRleHQgPSBjb250ZXh0IHx8IFN0b3JlLnN0YXRpY0NvbnRleHQ7XG4gICAgICAgIFxuICAgICAgICBrZXlzICAgICAgICAgICA9IGtleXMuZmlsdGVyKFxuICAgICAgICAgICAgLy8gQHRvZG8gOiB1c2UgcXVlcnkgcmVmc1xuICAgICAgICAgICAgLy8gKHN0b3JlKShcXC5zdG9yZSkqKFxcWyhcXCp8KHByb3BzKVxcdyspKylcXF0pPyhcXDphbGlhcylcbiAgICAgICAgICAgICgga2V5ICkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICggIWtleSApIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIk5vdCBhIG1hcHBhYmxlIHN0b3JlIGl0ZW0gJ1wiICsga2V5ICsgXCInIGluIFwiICsgb3JpZ2luICsgJyAhIScpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxldCBuYW1lLFxuICAgICAgICAgICAgICAgICAgICBhbGlhcyxcbiAgICAgICAgICAgICAgICAgICAgcGF0aCxcbiAgICAgICAgICAgICAgICAgICAgc3RvcmU7XG4gICAgICAgICAgICAgICAgaWYgKCBrZXkuc3RvcmUgJiYga2V5Lm5hbWUgKSB7XG4gICAgICAgICAgICAgICAgICAgIGFsaWFzID0gbmFtZSA9IGtleS5uYW1lO1xuICAgICAgICAgICAgICAgICAgICBzdG9yZSA9IGtleS5zdG9yZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoIGlzLmZuKGtleSkgKSB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWUgPSBhbGlhcyA9IGtleS5uYW1lIHx8IGtleS5kZWZhdWx0TmFtZTtcbiAgICAgICAgICAgICAgICAgICAgc3RvcmUgPSBrZXk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBrZXkgICA9IGtleS5tYXRjaCgvKFtcXHdfXSspKCg/OlxcLltcXHdfXSspKikoPzpcXDooW1xcd19dKykpPy8pO1xuICAgICAgICAgICAgICAgICAgICBuYW1lICA9IGtleVsxXTtcbiAgICAgICAgICAgICAgICAgICAgcGF0aCAgPSBrZXlbMl0gJiYga2V5WzJdLnNwbGl0KCcuJykuc2xpY2UoMSk7XG4gICAgICAgICAgICAgICAgICAgIHN0b3JlID0gY29udGV4dC5zdG9yZXNba2V5WzFdXTtcbiAgICAgICAgICAgICAgICAgICAgYWxpYXMgPSBrZXlbM10gfHwgcGF0aCAmJiBwYXRoW3BhdGgubGVuZ3RoIC0gMV0gfHwga2V5WzFdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAoIHRhcmdldFJldnNbbmFtZV0gKSByZXR1cm4gZmFsc2U7Ly8gaWdub3JlIGRibCB1c2VzIGZvciBub3dcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAoICFzdG9yZSApIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIk5vdCBhIG1hcHBhYmxlIHN0b3JlIGl0ZW0gJ1wiICsgbmFtZSArIFwiL1wiICsgYWxpYXMgKyBcIicgaW4gXCIgKyBvcmlnaW4gKyAnICEhJywgc3RvcmUpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKCBpcy5mbihzdG9yZSkgKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQuX21vdW50KG5hbWUpXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LnN0b3Jlc1tuYW1lXS5iaW5kKGNvbXBvbmVudCwgYWxpYXMsIHNldEluaXRpYWwsIHBhdGgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc3RvcmUuYmluZChjb21wb25lbnQsIGFsaWFzLCBzZXRJbml0aWFsLCBwYXRoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGFyZ2V0UmV2c1thbGlhc10gPSB0YXJnZXRSZXZzW2FsaWFzXSB8fCB0cnVlO1xuICAgICAgICAgICAgICAgICF0YXJnZXRDb250ZXh0W25hbWVdICYmICh0YXJnZXRDb250ZXh0W25hbWVdID0gY29udGV4dC5zdG9yZXNbbmFtZV0pO1xuICAgICAgICAgICAgICAgIGlmICggY29udGV4dC5zdG9yZXNbbmFtZV0uaGFzT3duUHJvcGVydHkoJ2RhdGEnKSApXG4gICAgICAgICAgICAgICAgICAgIGluaXRpYWxPdXRwdXRzW25hbWVdID0gY29udGV4dC5kYXRhW25hbWVdO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICB2YXIgbWl4ZWRDV1VubW91bnQsXG4gICAgICAgICAgICB1bk1vdW50S2V5ID0gY29tcG9uZW50LmlzUmVhY3RDb21wb25lbnQgPyBcImNvbXBvbmVudFdpbGxVbm1vdW50XCIgOiBcImRlc3Ryb3lcIjtcbiAgICAgICAgXG4gICAgICAgIGlmICggY29tcG9uZW50Lmhhc093blByb3BlcnR5KHVuTW91bnRLZXkpICkge1xuICAgICAgICAgICAgbWl4ZWRDV1VubW91bnQgPSBjb21wb25lbnRbdW5Nb3VudEtleV07XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGNvbXBvbmVudFt1bk1vdW50S2V5XSA9ICggLi4uYXJneiApID0+IHtcbiAgICAgICAgICAgIGRlbGV0ZSBjb21wb25lbnRbdW5Nb3VudEtleV07XG4gICAgICAgICAgICBpZiAoIG1peGVkQ1dVbm1vdW50IClcbiAgICAgICAgICAgICAgICBjb21wb25lbnRbdW5Nb3VudEtleV0gPSBtaXhlZENXVW5tb3VudDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAga2V5cy5tYXAoXG4gICAgICAgICAgICAgICAgKCBrZXkgKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpYXMsIHBhdGgsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9yZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBrZXkuc3RvcmUgJiYga2V5Lm5hbWUgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlhcyA9IG5hbWUgPSBrZXkubmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlID0ga2V5LnN0b3JlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKCBpcy5mbihrZXkpICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZSA9IGFsaWFzID0ga2V5Lm5hbWUgfHwga2V5LmRlZmF1bHROYW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmUgPSBjb250ZXh0LnN0b3Jlc1tuYW1lXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleSAgID0ga2V5Lm1hdGNoKC8oW1xcd19dKykoKD86XFwuW1xcd19dKykqKSg/OlxcOihbXFx3X10rKSk/Lyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lICA9IGtleVsxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGggID0ga2V5WzJdICYmIGtleVsyXS5zcGxpdCgnLicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmUgPSBjb250ZXh0LnN0b3Jlc1trZXlbMV1dO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpYXMgPSBrZXlbM10gfHwgcGF0aCAmJiBwYXRoW3BhdGgubGVuZ3RoIC0gMV0gfHwga2V5WzFdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBzdG9yZSAmJiAhaXMuZm4oc3RvcmUpICYmIHN0b3JlLnVuQmluZChjb21wb25lbnQsIGFsaWFzLCBwYXRoKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICByZXR1cm4gY29tcG9uZW50W3VuTW91bnRLZXldICYmIGNvbXBvbmVudFt1bk1vdW50S2V5XSguLi5hcmd6KTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGluaXRpYWxPdXRwdXRzO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBAZGVwcmVjYXRlZFxuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqL1xuICAgIGdldCBkYXRhcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogQGRlcHJlY2F0ZWRcbiAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgKi9cbiAgICBzZXQgZGF0YXMoIHYgKSB7XG4gICAgICAgIC8vY29uc29sZS5ncm91cENvbGxhcHNlZChcIlJlc2NvcGUgc3RvcmUgOiBTZXR0aW5nIGRhdGFzIGlzIGRlcHJlY2lhdGVkLCB1c2UgZGF0YVwiKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJSZXNjb3BlIHN0b3JlIDogU2V0dGluZyBkYXRhcyBpcyBkZXByZWNpYXRlZCwgdXNlIGRhdGFcIiwgKG5ldyBFcnJvcigpKS5zdGFjayk7XG4gICAgICAgIC8vY29uc29sZS5ncm91cEVuZCgpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5kYXRhID0gdjtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogT3ZlcnJpZGFibGUgbWV0aG9kIHRvIGtub3cgaWYgYSBkYXRhIGNoYW5nZSBzaG91bGQgYmUgcHJvcGFnIHRvIHRoZSBsaXN0ZW5pbmcgc3RvcmVzICYgY29tcG9uZW50c1xuICAgICAqL1xuICAgIHNob3VsZFByb3BhZyggbkRhdGFzICkge1xuICAgICAgICB2YXIgX3N0YXRpYyA9IHRoaXMuY29uc3RydWN0b3IsIHIsXG4gICAgICAgICAgICBjRGF0YXMgID0gdGhpcy5kYXRhO1xuICAgICAgICByICAgICAgICAgICA9ICFjRGF0YXMgJiYgbkRhdGFzO1xuICAgICAgICBjRGF0YXMgJiYgT2JqZWN0LmtleXMoY0RhdGFzKS5mb3JFYWNoKFxuICAgICAgICAgICAgKCBrZXkgKSA9PiB7XG4gICAgICAgICAgICAgICAgciA9IHIgfHwgKG5EYXRhcyA/IGNEYXRhc1trZXldICE9PSBuRGF0YXNba2V5XSA6IGNEYXRhcyAmJiBjRGF0YXNba2V5XSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgbkRhdGFzICYmIE9iamVjdC5rZXlzKG5EYXRhcykuZm9yRWFjaChcbiAgICAgICAgICAgICgga2V5ICkgPT4ge1xuICAgICAgICAgICAgICAgIHIgPSByIHx8IChuRGF0YXMgPyBjRGF0YXNba2V5XSAhPT0gbkRhdGFzW2tleV0gOiBjRGF0YXMgJiYgY0RhdGFzW2tleV0pXG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiAhIXI7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIE92ZXJyaWRhYmxlIG1ldGhvZCB0byBrbm93IGlmIGEgc3RhdGUgY2hhbmdlIHNob3VsZCBiZSBhcHBsaWVkXG4gICAgICovXG4gICAgc2hvdWxkQXBwbHkoIHN0YXRlID0gdGhpcy5zdGF0ZSApIHtcbiAgICAgICAgdmFyIF9zdGF0aWMgPSB0aGlzLmNvbnN0cnVjdG9yO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICEhdGhpcy5pc0NvbXBsZXRlKHN0YXRlKVxuICAgICAgICApICYmIChpcy5hcnJheShfc3RhdGljLmZvbGxvdylcbiAgICAgICAgICAgICAgICA/IF9zdGF0aWMuZm9sbG93XG4gICAgICAgICAgICAgICAgICAgICAgICAgLnJlZHVjZSgoIHIsIGkgKSA9PiAociB8fCBzdGF0ZSAmJiBzdGF0ZVtpXSksIGZhbHNlKVxuICAgICAgICAgICAgICAgIDogX3N0YXRpYy5mb2xsb3dcbiAgICAgICAgICAgICAgICAgID8gT2JqZWN0LmtleXMoX3N0YXRpYy5mb2xsb3cpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5yZWR1Y2UoKCByLCBpICkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfHwgc3RhdGUgJiYgaXMuZm4oX3N0YXRpYy5mb2xsb3dbaV0pICYmIF9zdGF0aWMuZm9sbG93W2ldLmNhbGwodGhpcywgc3RhdGVbaV0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8fCBfc3RhdGljLmZvbGxvd1tpXSAmJiBzdGF0ZVtpXSAhPT0gdGhpcy5zdGF0ZVtpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApLCBmYWxzZSkgOiB0cnVlXG4gICAgICAgICk7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIE92ZXJyaWRhYmxlIGFwcGxpZXIgLyByZW1hcHBlclxuICAgICAqIElmIHN0YXRlIG9yIGxhc3RQdWJsaWNTdGF0ZSBhcmUgc2ltcGxlIGhhc2ggbWFwcyBhcHBseSB3aWxsIHJldHVybiB7Li4uZGF0YSwgLi4uc3RhdGV9XG4gICAgICogaWYgbm90IGl0IHdpbGwgcmV0dXJuIHRoZSBsYXN0IHByaXZhdGUgc3RhdGVcbiAgICAgKiBAcGFyYW0gZGF0YVxuICAgICAqIEBwYXJhbSBzdGF0ZVxuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqL1xuICAgIGFwcGx5KCBkYXRhLCBzdGF0ZSwgY2hhbmdlcyApIHtcbiAgICAgICAgc3RhdGUgPSBzdGF0ZSB8fCB0aGlzLnN0YXRlO1xuICAgICAgICBcbiAgICAgICAgaWYgKCB0aGlzLnJlZmluZSApXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZWZpbmUoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgXG4gICAgICAgIGlmICggIWRhdGEgfHwgZGF0YS5fX3Byb3RvX18gIT09IG9ialByb3RvIHx8IHN0YXRlLl9fcHJvdG9fXyAhPT0gb2JqUHJvdG8gKVxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICByZXR1cm4geyAuLi5kYXRhLCAuLi5zdGF0ZSB9XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIEBkZXByZWNpYXRlZFxuICAgICAqIEBwYXJhbSBkYXRhXG4gICAgICogQHBhcmFtIHN0YXRlXG4gICAgICogQHBhcmFtIGNoYW5nZXNcbiAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgKi9cbiAgICByZWZpbmUoIGRhdGEsIHN0YXRlLCBjaGFuZ2VzICkge1xuICAgICAgICBzdGF0ZSA9IHN0YXRlIHx8IHRoaXMuc3RhdGU7XG4gICAgICAgIFxuICAgICAgICBpZiAoICFkYXRhIHx8IGRhdGEuX19wcm90b19fICE9PSBvYmpQcm90byB8fCBzdGF0ZS5fX3Byb3RvX18gIT09IG9ialByb3RvIClcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgcmV0dXJuIHsgLi4uZGF0YSwgLi4uc3RhdGUgfVxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBEZWJvdW5jZSB0aGlzIHN0b3JlIHByb3BhZ2F0aW9uICggJiByZWR1Y2luZyApXG4gICAgICogQHBhcmFtIGNiXG4gICAgICovXG4gICAgc3RhYmlsaXplKCBjYiApIHtcbiAgICAgICAgY2IgJiYgdGhpcy5vbmNlKCdzdGFibGUnLCBjYik7XG4gICAgICAgIHRoaXMuX3N0YWJsZSAmJiB0aGlzLmVtaXQoJ3Vuc3RhYmxlJywgdGhpcy5zdGF0ZSwgdGhpcy5kYXRhKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX3N0YWJsZSA9IGZhbHNlO1xuICAgICAgICBcbiAgICAgICAgaWYgKCB0aGlzLl9zdGFiaWxpemVyIClcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9zdGFiaWxpemVyKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX3N0YWJpbGl6ZXIgPSBzZXRUaW1lb3V0KFxuICAgICAgICAgICAgdGhpcy5wdXNoLmJpbmQoXG4gICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICgpID0+IHsvL0B0b2RvXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBsZXQgc3RhYmxlICAgPSB0aGlzLl9zdGFibGU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3N0YWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICFzdGFibGUgJiYgdGhpcy5lbWl0KCdzdGFibGUnLCB0aGlzLnN0YXRlLCB0aGlzLmRhdGEpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zdGFiaWxpemVyID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5yZWxlYXNlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKSk7XG4gICAgfVxuICAgIFxuICAgIHJldHJpZXZlKCBwYXRoLCBpID0gMCwgb2JqID0gdGhpcy5kYXRhICkge1xuICAgICAgICBwYXRoID0gaXMuc3RyaW5nKHBhdGgpID8gcGF0aC5zcGxpdCgnLicpIDogcGF0aDtcbiAgICAgICAgcmV0dXJuICFvYmogfHwgIXBhdGggfHwgIXBhdGgubGVuZ3RoXG4gICAgICAgICAgICA/IG9ialxuICAgICAgICAgICAgOiBwYXRoLmxlbmd0aCA9PSBpICsgMVxuICAgICAgICAgICAgICAgICAgID8gb2JqW3BhdGhbaV1dXG4gICAgICAgICAgICAgICAgICAgOiB0aGlzLnJldHJpZXZlKHBhdGgsIGkgKyAxLCBvYmpbcGF0aFtpXV0pO1xuICAgIH1cbiAgICBcbiAgICBkaXNwYXRjaCggYWN0aW9uLCAuLi5hcmd6ICkge1xuICAgICAgICB0aGlzLmNvbnRleHRPYmouZGlzcGF0Y2goYWN0aW9uLCAuLi5hcmd6KTtcbiAgICB9XG4gICAgXG4gICAgdHJpZ2dlciggYWN0aW9uLCAuLi5hcmd6ICkge1xuICAgICAgICBsZXQgeyBhY3Rpb25zIH0gPSB0aGlzLmNvbnN0cnVjdG9yLFxuICAgICAgICAgICAgbnM7XG4gICAgICAgIGlmICggYWN0aW9ucyAmJiBhY3Rpb25zW2FjdGlvbl0gKSB7XG4gICAgICAgICAgICBucyA9IGFjdGlvbnNbYWN0aW9uXS5jYWxsKHRoaXMsIC4uLmFyZ3opO1xuICAgICAgICAgICAgbnMgJiYgdGhpcy5zZXRTdGF0ZShucyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogUHVsbCBzdG9yZXMgaW4gdGhlIHByaXZhdGUgc3RhdGVcbiAgICAgKiBAcGFyYW0gc3RvcmVzICB7QXJyYXl9IChwYXNzZWQgdG8gU3RvcmU6Om1hcCkgRXggOiBbXCJzZXNzaW9uXCIsIFwib3RoZXJOYW1lZFN0b3JlOmtleVwiLCBvdGhlclN0b3JlLmFzKFwib3RoZXJLZXlcIildXG4gICAgICovXG4gICAgcHVsbCggc3RvcmVzLCBkb1dhaXQsIG9yaWdpbiApIHtcbiAgICAgICAgbGV0IGluaXRpYWxPdXRwdXRzID0gdGhpcy5jb250ZXh0T2JqLm1hcCh0aGlzLCBzdG9yZXMpO1xuICAgICAgICBpZiAoIGRvV2FpdCApIHtcbiAgICAgICAgICAgIHRoaXMud2FpdCgpO1xuICAgICAgICAgICAgc3RvcmVzLmZvckVhY2goKCBzICkgPT4gdGhpcy5jb250ZXh0W3NdICYmIHRoaXMud2FpdCh0aGlzLmNvbnRleHRbc10pKTtcbiAgICAgICAgICAgIHRoaXMucmVsZWFzZSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpbml0aWFsT3V0cHV0cztcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogQXBwbHkgYXBwbHkvcmVtYXAgb24gdGhlIHByaXZhdGUgc3RhdGUgJiBwdXNoIHRoZSByZXN1bHRpbmcgXCJwdWJsaWNcIiBzdGF0ZSB0byBmb2xsb3dlcnNcbiAgICAgKiBAcGFyYW0gY2JcbiAgICAgKi9cbiAgICBwdXNoKCBkYXRhLCBmb3JjZSwgY2IgKSB7XG4gICAgICAgIGNiICAgICAgICAgICAgPSBmb3JjZSA9PT0gdHJ1ZSA/IGNiIDogZm9yY2U7XG4gICAgICAgIGZvcmNlICAgICAgICAgPSBmb3JjZSA9PT0gdHJ1ZTtcbiAgICAgICAgdmFyIGkgICAgICAgICA9IDAsXG4gICAgICAgICAgICBuZXh0U3RhdGUgPSAhZGF0YSAmJiB7IC4uLnRoaXMuc3RhdGUsIC4uLnRoaXMuX2NoYW5nZXNTVyB9IHx8IHRoaXMuc3RhdGUsXG4gICAgICAgICAgICBuZXh0RGF0YXMgPSBkYXRhIHx8IHRoaXMuYXBwbHkodGhpcy5kYXRhLCBuZXh0U3RhdGUsIHRoaXMuX2NoYW5nZXNTVyk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLnN0YXRlID0gbmV4dFN0YXRlO1xuICAgICAgICBpZiAoICFmb3JjZSAmJlxuICAgICAgICAgICAgKFxuICAgICAgICAgICAgICAgICghdGhpcy5kYXRhICYmIHRoaXMuZGF0YSA9PT0gbmV4dERhdGFzKSB8fCAhdGhpcy5zaG91bGRQcm9wYWcobmV4dERhdGFzKVxuICAgICAgICAgICAgKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIGNiICYmIGNiKCk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRoaXMuZGF0YSAgICAgICA9IG5leHREYXRhcztcbiAgICAgICAgdGhpcy5fY2hhbmdlc1NXID0ge307XG4gICAgICAgIC8vdGhpcy5fX2xvY2tzLmFsbCsrO1xuICAgICAgICB0aGlzLndhaXQoKTtcbiAgICAgICAgdGhpcy5yZWxlYXNlKGNiKTtcbiAgICAgICAgXG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSB0aGUgY3VycmVudCBwcml2YXRlIHN0YXRlICYgcHVzaCBpdCBvbmNlIHRoZSBzdG9yZSBpcyBzdGFibGVcbiAgICAgKiBAcGFyYW0gcFN0YXRlXG4gICAgICogQHBhcmFtIGNiXG4gICAgICovXG4gICAgc2V0U3RhdGUoIHBTdGF0ZSwgY2IsIHN5bmMgKSB7XG4gICAgICAgIHZhciBpICAgICAgID0gMCwgY2hhbmdlLFxuICAgICAgICAgICAgY2hhbmdlcyA9IHRoaXMuX2NoYW5nZXNTVyA9IHRoaXMuX2NoYW5nZXNTVyB8fCB7fTtcbiAgICAgICAgZm9yICggdmFyIGsgaW4gcFN0YXRlIClcbiAgICAgICAgICAgIGlmICggIXRoaXMuc3RhdGUgfHwgcFN0YXRlLmhhc093blByb3BlcnR5KGspXG4gICAgICAgICAgICAgICAgJiYgKFxuICAgICAgICAgICAgICAgICAgICBwU3RhdGVba10gIT0gdGhpcy5zdGF0ZVtrXVxuICAgICAgICAgICAgICAgICAgICB8fFxuICAgICAgICAgICAgICAgICAgICAodGhpcy5zdGF0ZVtrXSAmJiBwU3RhdGVba10gJiYgKHBTdGF0ZVtrXS5fcmV2ICE9IHRoaXMuX3JldnNba10pKS8vIHJldi9oYXNoIHVwZGF0ZVxuICAgICAgICAgICAgICAgICkgKSB7XG4gICAgICAgICAgICAgICAgY2hhbmdlICAgICAgICA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5fcmV2c1trXSA9IHBTdGF0ZVtrXSAmJiBwU3RhdGVba10uX3JldiB8fCB0cnVlO1xuICAgICAgICAgICAgICAgIGNoYW5nZXNba10gICAgPSBwU3RhdGVba107XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAoICF0aGlzLnNob3VsZEFwcGx5KHsgLi4udGhpcy5zdGF0ZSwgLi4uY2hhbmdlcyB9KSApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKCBzeW5jICkge1xuICAgICAgICAgICAgdGhpcy5wdXNoKCk7XG4gICAgICAgICAgICBjYiAmJiBjYigpO1xuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoIGNoYW5nZSApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YWJpbGl6ZShjYik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGNiICYmIGNiKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSB0aGUgY3VycmVudCBwcml2YXRlIHN0YXRlICYgcHVzaCBpdCBvbmNlIHRoZSBzdG9yZSBpcyBzdGFibGVcbiAgICAgKiBAcGFyYW0gcFN0YXRlXG4gICAgICogQHBhcmFtIGNiXG4gICAgICovXG4gICAgc2V0U3RhdGVTeW5jKCBwU3RhdGUgKSB7XG4gICAgICAgIHZhciBpICAgICAgID0gMCwgY2hhbmdlLFxuICAgICAgICAgICAgY2hhbmdlcyA9IHRoaXMuX2NoYW5nZXNTVyA9IHRoaXMuX2NoYW5nZXNTVyB8fCB7fTtcbiAgICAgICAgZm9yICggdmFyIGsgaW4gcFN0YXRlIClcbiAgICAgICAgICAgIGlmICggIXRoaXMuc3RhdGUgfHwgcFN0YXRlLmhhc093blByb3BlcnR5KGspXG4gICAgICAgICAgICAgICAgJiYgKFxuICAgICAgICAgICAgICAgICAgICBwU3RhdGVba10gIT0gdGhpcy5zdGF0ZVtrXVxuICAgICAgICAgICAgICAgICAgICB8fFxuICAgICAgICAgICAgICAgICAgICAodGhpcy5zdGF0ZVtrXSAmJiBwU3RhdGVba10gJiYgKHBTdGF0ZVtrXS5fcmV2ICE9IHRoaXMuX3JldnNba10pKS8vIHJldi9oYXNoIHVwZGF0ZVxuICAgICAgICAgICAgICAgICkgKSB7XG4gICAgICAgICAgICAgICAgY2hhbmdlICAgICAgICA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5fcmV2c1trXSA9IHBTdGF0ZVtrXSAmJiBwU3RhdGVba10uX3JldiB8fCB0cnVlO1xuICAgICAgICAgICAgICAgIGNoYW5nZXNba10gICAgPSBwU3RhdGVba107XG4gICAgICAgICAgICB9XG4gICAgICAgIHRoaXMuc2hvdWxkQXBwbHkoeyAuLi4odGhpcy5zdGF0ZSB8fCB7fSksIC4uLmNoYW5nZXMgfSkgJiYgdGhpcy5wdXNoKCk7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGE7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIFJlcGxhY2UgdGhlIGN1cnJlbnQgcHJpdmF0ZSBzdGF0ZSAmIHB1c2ggaXQgb25jZSB0aGUgc3RvcmUgaXMgc3RhYmxlXG4gICAgICogQHBhcmFtIHBTdGF0ZVxuICAgICAqIEBwYXJhbSBjYlxuICAgICAqL1xuICAgIHJlcGxhY2VTdGF0ZSggcFN0YXRlLCBjYiApIHtcbiAgICAgICAgdmFyIGkgICAgICA9IDAsIG1lID0gdGhpcztcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHBTdGF0ZTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuc3RhYmlsaXplKGNiKTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogZ2V0IGEgc3RvcmUta2V5IHBhaXIgZm9yIFN0b3JlOjptYXBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgICAqIEByZXR1cm5zIHt7c3RvcmU6IFN0b3JlLCBuYW1lOiAqfX1cbiAgICAgKi9cbiAgICBhcyggbmFtZSApIHtcbiAgICAgICAgcmV0dXJuIHsgc3RvcmU6IHRoaXMsIG5hbWUgfTtcbiAgICB9XG4gICAgXG4gICAgb24oIGxpc3RzICkge1xuICAgICAgICBpZiAoICFpcy5zdHJpbmcobGlzdHMpICYmIGxpc3RzIClcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGxpc3RzKS5mb3JFYWNoKGsgPT4gc3VwZXIub24oaywgbGlzdHNba10pKTtcbiAgICAgICAgZWxzZSBzdXBlci5vbiguLi5hcmd1bWVudHMpO1xuICAgIH1cbiAgICBcbiAgICByZW1vdmVMaXN0ZW5lciggbGlzdHMgKSB7XG4gICAgICAgIGlmICggIWlzLnN0cmluZyhsaXN0cykgJiYgbGlzdHMgKVxuICAgICAgICAgICAgT2JqZWN0LmtleXMobGlzdHMpLmZvckVhY2goayA9PiBzdXBlci5yZW1vdmVMaXN0ZW5lcihrLCBsaXN0c1trXSkpO1xuICAgICAgICBlbHNlIHN1cGVyLnJlbW92ZUxpc3RlbmVyKC4uLmFyZ3VtZW50cyk7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIHJlbGluayBiaW5kaW5ncyAmIHJlcXVpcmVzXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICAgKiBAcmV0dXJucyB7e3N0b3JlOiBTdG9yZSwgbmFtZTogKn19XG4gICAgICovXG4gICAgcmVsaW5rKCBmcm9tICkge1xuICAgICAgICBsZXQgY29udGV4dCA9IHRoaXMuY29udGV4dE9iaixcbiAgICAgICAgICAgIF9zdGF0aWMgPSB0aGlzLmNvbnN0cnVjdG9yO1xuICAgICAgICBpZiAoIF9zdGF0aWMudXNlICkge1xuICAgICAgICAgICAgLy90b2RvIHVubGlua1xuICAgICAgICAgICAgdGhpcy5wdWxsKF9zdGF0aWMudXNlLCBmYWxzZSwgZnJvbSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmICggdGhpcy5fcmVxdWlyZSApIHtcbiAgICAgICAgICAgIHRoaXMuX3JlcXVpcmUuZm9yRWFjaChcbiAgICAgICAgICAgICAgICBzdG9yZSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2FpdChjb250ZXh0Ll9fY29udGV4dFtzdG9yZV0pXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBpcyBjb21wbGV0ZSAoYWxsIHJlcXVpZXJlZCBrZXlzIGFyZSBoZXJlKVxuICAgICAqIEByZXR1cm5zIGJvb2xcbiAgICAgKi9cbiAgICBpc0NvbXBsZXRlKCBzdGF0ZSA9IHRoaXMuc3RhdGUgKSB7XG4gICAgICAgIHZhciBfc3RhdGljID0gdGhpcy5jb25zdHJ1Y3RvcjtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICF0aGlzLl9yZXF1aXJlXG4gICAgICAgICAgICB8fCAhdGhpcy5fcmVxdWlyZS5sZW5ndGhcbiAgICAgICAgICAgIHx8IHN0YXRlICYmIHRoaXMuX3JlcXVpcmUucmVkdWNlKFxuICAgICAgICAgICAgICAgICggciwga2V5ICkgPT4gKHIgJiYgc3RhdGVba2V5XSksXG4gICAgICAgICAgICAgICAgdHJ1ZVxuICAgICAgICAgICAgKVxuICAgICAgICApO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBpcyBzdGFibGVcbiAgICAgKiBAcmV0dXJucyBib29sXG4gICAgICovXG4gICAgaXNTdGFibGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zdGFibGU7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIFVuIGJpbmQgdGhpcyBzdG9yZSBvZmYgdGhlIGdpdmVuIGNvbXBvbmVudC1rZXlcbiAgICAgKiBAcGFyYW0gb2JqXG4gICAgICogQHBhcmFtIGtleVxuICAgICAqIEByZXR1cm5zIHtBcnJheS48Kj59XG4gICAgICovXG4gICAgdW5CaW5kKCBvYmosIGtleSwgcGF0aCApIHtcbiAgICAgICAgdmFyIGZvbGxvd2VycyA9IHRoaXMuX2ZvbGxvd2VycyxcbiAgICAgICAgICAgIGkgICAgICAgICA9IGZvbGxvd2VycyAmJiBmb2xsb3dlcnMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGZvbGxvd2VycyAmJiBpLS0gKVxuICAgICAgICAgICAgaWYgKCBmb2xsb3dlcnNbaV1bMF0gPT09IG9iaiAmJiBmb2xsb3dlcnNbaV1bMV0gPT09IGtleSAmJiBmb2xsb3dlcnNbaV1bMl0gPT09IHBhdGggKVxuICAgICAgICAgICAgICAgIHJldHVybiBmb2xsb3dlcnMuc3BsaWNlKGksIDEpO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBCaW5kIHRoaXMgc3RvcmUgY2hhbmdlcyB0byB0aGUgZ2l2ZW4gY29tcG9uZW50LWtleVxuICAgICAqIEBwYXJhbSBvYmoge1JlYWN0LkNvbXBvbmVudHxTdG9yZXxmdW5jdGlvbilcbiAgICAgKiBAcGFyYW0ga2V5IHtzdHJpbmd9IG9wdGlvbmFsIGtleSB3aGVyZSB0byBtYXAgdGhlIHB1YmxpYyBzdGF0ZVxuICAgICAqL1xuICAgIGJpbmQoIG9iaiwga2V5LCBzZXRJbml0aWFsID0gdHJ1ZSwgcGF0aCApIHtcbiAgICAgICAgdGhpcy5fZm9sbG93ZXJzLnB1c2goW29iaiwga2V5LCBwYXRoXSk7XG4gICAgICAgIGlmICggc2V0SW5pdGlhbCAmJiB0aGlzLmRhdGEgJiYgdGhpcy5fc3RhYmxlICkge1xuICAgICAgICAgICAgbGV0IGRhdGEgPSBwYXRoID8gdGhpcy5yZXRyaWV2ZShwYXRoKSA6IHRoaXMuZGF0YTtcbiAgICAgICAgICAgIGlmICggdHlwZW9mIG9iaiAhPSBcImZ1bmN0aW9uXCIgKSB7XG4gICAgICAgICAgICAgICAgaWYgKCBrZXkgKSBvYmouc2V0U3RhdGUoeyBba2V5XTogZGF0YSB9KTtcbiAgICAgICAgICAgICAgICBlbHNlIG9iai5zZXRTdGF0ZShkYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIG9iaihkYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBvbmNlKCdzdGFibGUnLCBjYilcbiAgICAgKiBAcGFyYW0gb2JqIHtSZWFjdC5Db21wb25lbnR8U3RvcmV8ZnVuY3Rpb24pXG4gICAgICogQHBhcmFtIGtleSB7c3RyaW5nfSBvcHRpb25hbCBrZXkgd2hlcmUgdG8gbWFwIHRoZSBwdWJsaWMgc3RhdGVcbiAgICAgKi9cbiAgICB0aGVuKCBjYiApIHtcbiAgICAgICAgaWYgKCB0aGlzLl9zdGFibGUgKVxuICAgICAgICAgICAgcmV0dXJuIGNiKG51bGwsIHRoaXMuZGF0YSk7XG4gICAgICAgIHRoaXMub25jZSgnc3RhYmxlJywgZSA9PiBjYihudWxsLCB0aGlzLmRhdGEpKTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogQWRkIGEgbG9jayBzbyB0aGUgc3RvcmUgd2lsbCBub3QgcHJvcGFnIGl0IHN0YXRlIHVudGlsbCByZWxlYXNlKCkgaXMgY2FsbFxuICAgICAqIEBwYXJhbSBwcmV2aW91cyB7U3RvcmV8bnVtYmVyfEFycmF5fSBAb3B0aW9uYWwgd2YgdG8gd2FpdCwgcmVsZWFzZXMgdG8gd2FpdCBvciBhcnJheSBvZiBzdHVmZiB0byB3YWl0XG4gICAgICogQHJldHVybnMge1Rhc2tGbG93fVxuICAgICAqL1xuICAgIHdhaXQoIHByZXZpb3VzICkge1xuICAgICAgICBpZiAoIHR5cGVvZiBwcmV2aW91cyA9PSBcIm51bWJlclwiIClcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9fbG9ja3MuYWxsICs9IHByZXZpb3VzO1xuICAgICAgICBpZiAoIGlzLmFycmF5KHByZXZpb3VzKSApXG4gICAgICAgICAgICByZXR1cm4gcHJldmlvdXMubWFwKHRoaXMud2FpdC5iaW5kKHRoaXMpKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX3N0YWJsZSAmJiB0aGlzLmVtaXQoJ3Vuc3RhYmxlJywgdGhpcy5zdGF0ZSwgdGhpcy5kYXRhKTtcbiAgICAgICAgdGhpcy5fc3RhYmxlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX19sb2Nrcy5hbGwrKztcbiAgICAgICAgXG4gICAgICAgIGxldCByZWFzb24gPSBpcy5zdHJpbmcocHJldmlvdXMpID8gcHJldmlvdXMgOiBudWxsO1xuICAgICAgICBpZiAoIHJlYXNvbiApIHtcbiAgICAgICAgICAgIHRoaXMuX19sb2Nrc1tyZWFzb25dID0gdGhpcy5fX2xvY2tzW3JlYXNvbl0gfHwgMDtcbiAgICAgICAgICAgIHRoaXMuX19sb2Nrc1tyZWFzb25dKys7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCBwcmV2aW91cyAmJiBpcy5mbihwcmV2aW91cy50aGVuKSApIHtcbiAgICAgICAgICAgIHByZXZpb3VzLnRoZW4odGhpcy5yZWxlYXNlLmJpbmQodGhpcywgbnVsbCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBEZWNyZWFzZSBsb2NrcyBmb3IgdGhpcyBzdG9yZSwgaWYgaXQgcmVhY2ggMCAmIGl0IGhhdmUgYSBwdWJsaWMgc3RhdGUsXG4gICAgICogaXQgd2lsbCBiZSBwcm9wYWdhdGVkIHRvIHRoZSBmb2xsb3dlcnMsXG4gICAgICogdGhlbiwgYWxsIHN0dWZmIHBhc3NlZCB0byBcInRoZW5cIiBjYWxsIGJhY2sgd2lsbCBiZSBleGVjIC8gcmVsZWFzZWRcbiAgICAgKiBAcGFyYW0gZGVzeW5jXG4gICAgICogQHJldHVybnMgeyp9XG4gICAgICovXG4gICAgcmVsZWFzZSggcmVhc29uLCBjYiApIHtcbiAgICAgICAgdmFyIF9zdGF0aWMgPSB0aGlzLmNvbnN0cnVjdG9yO1xuICAgICAgICBsZXQgaSAgICAgICA9IDAsIHdhc1N0YWJsZSA9IHRoaXMuX3N0YWJsZTtcbiAgICAgICAgXG4gICAgICAgIGlmICggaXMuZm4ocmVhc29uKSApIHtcbiAgICAgICAgICAgIGNiICAgICA9IHJlYXNvbjtcbiAgICAgICAgICAgIHJlYXNvbiA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmICggcmVhc29uICkge1xuICAgICAgICAgICAgaWYgKCB0aGlzLl9fbG9ja3NbcmVhc29uXSA9PSAwIClcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiUmVsZWFzZSBtb3JlIHRoYW4gbG9ja2luZyAhXCIsIHJlYXNvbik7XG4gICAgICAgICAgICB0aGlzLl9fbG9ja3NbcmVhc29uXSA9IHRoaXMuX19sb2Nrc1tyZWFzb25dIHx8IDA7XG4gICAgICAgICAgICB0aGlzLl9fbG9ja3NbcmVhc29uXS0tO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAoICFyZWFzb24gJiYgdGhpcy5fX2xvY2tzLmFsbCA9PSAwIClcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJSZWxlYXNlIG1vcmUgdGhhbiBsb2NraW5nICFcIik7XG4gICAgICAgIFxuICAgICAgICBpZiAoICEtLXRoaXMuX19sb2Nrcy5hbGwgJiYgdGhpcy5kYXRhICYmIHRoaXMuaXNDb21wbGV0ZSgpICkge1xuICAgICAgICAgICAgdGhpcy5fc3RhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuX3JldisrOy8vXG4gICAgICAgICAgICBpZiAoIHRoaXMuX2ZvbGxvd2Vycy5sZW5ndGggKVxuICAgICAgICAgICAgICAgIHRoaXMuX2ZvbGxvd2Vycy5mb3JFYWNoKCggZm9sbG93ZXIgKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0gZm9sbG93ZXJbMl0gPyB0aGlzLnJldHJpZXZlKGZvbGxvd2VyWzJdKSA6IHRoaXMuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCAhZGF0YSApIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCB0eXBlb2YgZm9sbG93ZXJbMF0gPT0gXCJmdW5jdGlvblwiICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9sbG93ZXJbMF0oZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NiICYmIGkrKztcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbGxvd2VyWzBdLnNldFN0YXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChmb2xsb3dlclsxXSkgPyB7IFtmb2xsb3dlclsxXV06IGRhdGEgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGRhdGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2NiICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAoKSA9PiAoISgtLWkpICYmIGNiKCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8pXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvL2Vsc2VcbiAgICAgICAgICAgICF3YXNTdGFibGUgJiYgdGhpcy5lbWl0KCdzdGFibGUnLCB0aGlzLmRhdGEpO1xuICAgICAgICAgICAgdGhpcy5lbWl0KCd1cGRhdGUnLCB0aGlzLmRhdGEpO1xuICAgICAgICAgICAgY2IgJiYgY2IoKVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgY2IgJiYgdGhpcy50aGVuKGNiKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIFxuICAgIHJldGFpbiggcmVhc29uICkge1xuICAgICAgICB0aGlzLl9fcmV0YWlucy5hbGwrKztcbiAgICAgICAgaWYgKCByZWFzb24gKSB7XG4gICAgICAgICAgICB0aGlzLl9fcmV0YWluc1tyZWFzb25dID0gdGhpcy5fX3JldGFpbnNbcmVhc29uXSB8fCAwO1xuICAgICAgICAgICAgdGhpcy5fX3JldGFpbnNbcmVhc29uXSsrO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGRpc3Bvc2UoIHJlYXNvbiApIHtcbiAgICAgICAgLy9jb25zb2xlLndhcm4oXCJkaXNwb3NlXCIsIHJlYXNvbiwgdGhpcy5fX3JldGFpbnMpO1xuICAgICAgICBpZiAoIHJlYXNvbiApIHtcbiAgICAgICAgICAgIGlmICggIXRoaXMuX19yZXRhaW5zW3JlYXNvbl0gKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkRpc3Bvc2UgbW9yZSB0aGFuIHJldGFpbmluZyA6IFwiICsgcmVhc29uKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5fX3JldGFpbnNbcmVhc29uXS0tO1xuICAgICAgICB9XG4gICAgICAgIGlmICggdGhpcy5fX3JldGFpbnMuYWxsID09IDAgKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRGlzcG9zZSBtb3JlIHRoYW4gcmV0YWluaW5nICFcIik7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9fcmV0YWlucy5hbGwtLTtcbiAgICAgICAgXG4gICAgICAgIGlmICggIXRoaXMuX19yZXRhaW5zLmFsbCApIHtcbiAgICAgICAgICAgIGlmICggdGhpcy5fcGVyc2lzdGVuY2VUbSApIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9kZXN0cm95VE0gJiYgY2xlYXJUaW1lb3V0KHRoaXMuX2Rlc3Ryb3lUTSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fZGVzdHJveVRNID0gc2V0VGltZW91dChcbiAgICAgICAgICAgICAgICAgICAgZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9kZXN0cm95VE0gPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50aGVuKHMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICF0aGlzLl9fcmV0YWlucy5hbGwgJiYgdGhpcy5kZXN0cm95KClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wZXJzaXN0ZW5jZVRtXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMudGhlbihzID0+ICghdGhpcy5fX3JldGFpbnMuYWxsICYmIHRoaXMuZGVzdHJveSgpKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgLy8gIGNvbnNvbGUubG9nKFwiZGVzdHJveVwiLCB0aGlzLl91aWQpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5lbWl0KCdkZXN0cm95JywgdGhpcyk7XG4gICAgICAgIGlmICggdGhpcy5fc3RhYmlsaXplciApXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5fc3RhYmlsaXplcik7XG4gICAgICAgIFxuICAgICAgICBpZiAoIHRoaXMuX2ZvbGxvd2Vycy5sZW5ndGggKVxuICAgICAgICAgICAgdGhpcy5fZm9sbG93ZXJzLmZvckVhY2goXG4gICAgICAgICAgICAgICAgKCBmb2xsb3dlciApID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCB0eXBlb2YgZm9sbG93ZXJbMF0gIT09IFwiZnVuY3Rpb25cIiApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICggZm9sbG93ZXJbMF0uc3RvcmVzIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgZm9sbG93ZXJbMF0uc3RvcmVzW2ZvbGxvd2VyWzFdXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgIHRoaXMuX2ZvbGxvd2Vycy5sZW5ndGggPSAwO1xuICAgICAgICB0aGlzLmRlYWQgICAgICAgICAgICAgID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fcmV2cyAgICAgICAgICAgICA9IHRoaXMuZGF0YSA9IHRoaXMuc3RhdGUgPSB0aGlzLmNvbnRleHQgPSBudWxsO1xuICAgICAgICB0aGlzLnJlbW92ZUFsbExpc3RlbmVycygpO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvU3RvcmUuanMiXSwic291cmNlUm9vdCI6IiJ9