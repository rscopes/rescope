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
	
	        if (parent && parent.dead) throw new Error("Can't use a dead context as parent !");
	
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
	            targetCtx.retain("mixedTo");
	            if (!targetCtx._stable) this.wait(targetCtx._id);
	
	            if (this.dead || targetCtx.dead) debugger;
	
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
	            this.datas = {};
	            targetCtx.on(lists);
	            __proto__push(this, 'stores', parent);
	            __proto__push(this, 'state', parent);
	            __proto__push(this, 'datas', parent);
	
	            this.relink(this.__context, this, false, true);
	            this.__mixed.forEach(function (ctx) {
	                __proto__push(_this4, 'stores');
	                __proto__push(_this4, 'state');
	                __proto__push(_this4, 'datas');
	                ctx.relink(ctx.__context, _this4, true, true);
	            });
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
	
	            this.relink(storesMap, this, false, false, state, datas);
	            Object.keys(storesMap).forEach(function (id) {
	                if (is.fn(storesMap[id])) {
	                    storesMap[id].singleton && _this5._mount(id, state[id], datas[id]);
	                } else {
	                    //storesMap[id].retain();
	                    _this5._watchStore(id);
	                }
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
	            var force = arguments[3];
	
	            var _this6 = this;
	
	            var state = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
	            var datas = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};
	
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
	                Object.defineProperty(targetCtx._datas.prototype, id, {
	                    get: function get() {
	                        return _this6.__context[id] && _this6.__context[id].datas;
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
	
	            if (!this.datas) debugger;
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
	
	                this._stabilizerTM = setTimeout(function (e) {
	                    _this15._stabilizerTM = null;
	                    if (_this15.__locks.all) return;
	
	                    _this15._propagTM && clearTimeout(_this15._propagTM);
	
	                    _this15._stable = true;
	                    _this15.emit("stable", _this15);
	
	                    !_this15.dead && _this15._propag(); // stability can induce destroy
	                });
	            }
	        }
	    }, {
	        key: 'propag',
	        value: function propag() {
	            var _this16 = this;
	
	            this._propagTM && clearTimeout(this._propagTM);
	            this._propagTM = setTimeout(function (e) {
	                _this16._propagTM = null;
	                _this16._propag();
	            }, 2);
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
	                //console.log("dispose do destroy ", this._id, this._persistenceTm);
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
	            this.dead = true;
	            this.emit("destroy");
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
	            this.__mixed = this.datas = this.state = this.context = this.stores = null;
	            this._datas = this._state = this._stores = null;
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
	
	                var stable = me._stable;
	                me._stable = true;
	                !stable && _this2.emit('stable', _this2.state, _this2.datas);
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
	            //this.__locks.all++;
	            this.wait(cb);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZTU5OTgzODQyYWU3OWUwNjI5MGMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Jlc2NvcGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbnRleHQuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJldmVudHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzaG9ydGlkXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL1N0b3JlLmpzIl0sIm5hbWVzIjpbIlN0b3JlIiwiQ29udGV4dCIsImlzIiwicmVxdWlyZSIsIkV2ZW50RW1pdHRlciIsInNob3J0aWQiLCJfX3Byb3RvX19wdXNoIiwidGFyZ2V0IiwiaWQiLCJwYXJlbnQiLCJoZXJlIiwicHJvdG90eXBlIiwib3BlbkNvbnRleHRzIiwiY29udGV4dHMiLCJza2V5IiwiYXJyYXkiLCJzb3J0IiwiYSIsImIiLCJmaXJzdG5hbWUiLCJqb2luIiwic3RvcmVzTWFwIiwic3RhdGUiLCJkYXRhcyIsIm5hbWUiLCJkZWZhdWx0TWF4TGlzdGVuZXJzIiwicGVyc2lzdGVuY2VUbSIsImF1dG9EZXN0cm95IiwiX21heExpc3RlbmVycyIsImNvbnN0cnVjdG9yIiwiX2lkIiwiZ2VuZXJhdGUiLCJyZWdpc3RlciIsIl9pc0xvY2FsSWQiLCJfcGVyc2lzdGVuY2VUbSIsInN0b3JlcyIsImRlYWQiLCJFcnJvciIsIl9hZGRDaGlsZCIsInNvdXJjZXMiLCJfY2hpbGRDb250ZXh0cyIsIl9fcmV0YWlucyIsImFsbCIsIl9fbG9ja3MiLCJfX2xpc3RlbmluZyIsIl9fY29udGV4dCIsIl9fbWl4ZWQiLCJfX21peGVkTGlzdCIsIl9mb2xsb3dlcnMiLCJyZXRhaW4iLCJfc3RhYmxlIiwid2FpdCIsIm9uIiwiX19wYXJlbnRMaXN0IiwicmVsZWFzZSIsIl9wcm9wYWciLCJzZXRUaW1lb3V0IiwiZGlzcG9zZSIsInN0b3Jlc0xpc3QiLCJmb3JFYWNoIiwiX21vdW50IiwiayIsImFyZ3VtZW50cyIsInN0b3JlIiwicmVkdWNlIiwibW91bnRlZCIsImN0eCIsImZuIiwidW5kZWZpbmVkIiwic2V0U3RhdGUiLCJwdXNoIiwiX3dhdGNoU3RvcmUiLCJpc1N0YWJsZSIsInByb3BhZyIsInRhcmdldEN0eCIsImxpc3RzIiwicmVsaW5rIiwiT2JqZWN0Iiwia2V5cyIsInNpbmdsZXRvbiIsInNyY0N0eCIsImV4dGVybmFsIiwiZm9yY2UiLCJsY3R4IiwiX3N0b3JlcyIsImNvbnNvbGUiLCJpbmZvIiwiX19wcm90b19fIiwiZGVmaW5lUHJvcGVydHkiLCJnZXQiLCJfc3RhdGUiLCJzZXQiLCJ2IiwiX2RhdGFzIiwib2JqIiwia2V5IiwiYXMiLCJzZXRJbml0aWFsIiwibGFzdFJldnMiLCJyZUtleSIsIm1hcCIsInN0cmluZyIsInJldnMiLCJtb3VudCIsImdldFVwZGF0ZXMiLCJmb2xsb3dlcnMiLCJpIiwibGVuZ3RoIiwic3BsaWNlIiwidG8iLCJiaW5kIiwibWl4ZWRDV1VubW91bnQiLCJ1bk1vdW50S2V5IiwiaXNSZWFjdENvbXBvbmVudCIsImhhc093blByb3BlcnR5IiwidW5CaW5kIiwic3RvcmVzUmV2TWFwIiwibG9jYWwiLCJfcmV2IiwidXBkYXRlZCIsImdldFN0b3Jlc1JldnMiLCJvdXRwdXQiLCJmbGFnc19zdGF0ZXMiLCJmbGFnc19kYXRhcyIsIl9mbGFnc19zdGF0ZXMiLCJfZmxhZ3NfZGF0YXMiLCJmbGFncyIsInIiLCJmbGFnIiwidGVzdCIsImNiIiwib25jZSIsInF1aWV0IiwicmVhc29uIiwiZW1pdCIsImVycm9yIiwiX3N0YWJpbGl6ZXJUTSIsImNsZWFyVGltZW91dCIsIl9wcm9wYWdUTSIsImNoaWxkcyIsIl9nZXRBbGxDaGlsZHMiLCJpbmRleE9mIiwiX2Rlc3Ryb3lUTSIsInRoZW4iLCJkZXN0cm95IiwicmVtb3ZlTGlzdGVuZXIiLCJzaGlmdCIsIl9ybUNoaWxkIiwiY29udGV4dCIsIm9ialByb3RvIiwiZ2V0UHJvdG90eXBlT2YiLCJhcmd6IiwiX3N0YXRpYyIsInN0YXRpY0NvbnRleHQiLCJjZmciLCJ3YXRjaHMiLCJ1c2UiLCJhcHBseSIsImluaXRpYWxTdGF0ZSIsIl91aWQiLCJfb25TdGFiaWxpemUiLCJ3YXJuIiwiX3VzZSIsImNvbnRleHRPYmoiLCJfcmV2cyIsIl9yZXF1aXJlIiwiaXNDb21wbGV0ZSIsIm5EYXRhcyIsImNEYXRhcyIsImZvbGxvdyIsImNoYW5nZXMiLCJyZWZpbmUiLCJtZSIsIl9zdGFiaWxpemVyIiwic3RhYmxlIiwiZXZlbnQiLCJkb1dhaXQiLCJvcmlnaW4iLCJpbml0aWFsT3V0cHV0cyIsInMiLCJuZXh0U3RhdGUiLCJfY2hhbmdlc1NXIiwibmV4dERhdGFzIiwic2hvdWxkUHJvcGFnIiwicFN0YXRlIiwic3luYyIsImNoYW5nZSIsInN0YWJpbGl6ZSIsImZyb20iLCJwdWxsIiwicHJldmlvdXMiLCJ3YXNTdGFibGUiLCJmb2xsb3dlciIsInJlbW92ZUFsbExpc3RlbmVycyIsImNvbXBvbmVudCIsInRhcmdldFJldnMiLCJ0YXJnZXRDb250ZXh0IiwiZmlsdGVyIiwiYWxpYXMiLCJkZWZhdWx0TmFtZSIsIm1hdGNoIiwic3BsaXQiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQzVCQTs7OztBQUNBOzs7Ozs7QUFYQTs7Ozs7Ozs7OztBQWFBLG1CQUFRQSxLQUFSOzttQkFFZSxFQUFDQSxzQkFBRCxFQUFRQywwQkFBUixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmZjs7Ozs7Ozs7Ozs7OztBQWFBOzs7Ozs7O0FBUUEsS0FBSUMsS0FBa0IsbUJBQUFDLENBQVEsQ0FBUixDQUF0QjtBQUFBLEtBQ0lDLGVB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VUFBViw2QkFBaEM7QUFDSCxjQTdCRDs7QUErQkEsb0JBQU9rRSxjQUFQO0FBQ0g7Ozs7R0FwTzhCOUssWTs7QUFBZEosTSxDQUVWNEosRyxHQUE2QixFO0FBRm5CNUosTSxDQUtWeUosYSxHQUE2QixJQUFJeEosT0FBSixDQUFZLEVBQVosRUFBZ0IsRUFBRU8sSUFBSSxRQUFOLEVBQWhCLEM7QUFMbkJSLE0sQ0FNVjhKLFksR0FBNkIxRixTO0FBTm5CcEUsTSxDQU9Wc0IsSyxHQUE2QjhDLFM7QUFQbkJwRSxNLENBWUh5QixtQixHQUFzQixHO0FBWm5CekIsTSxDQW9CSDBCLGEsR0FBc0IsSzttQkFwQm5CMUIsSyIsImZpbGUiOiJkaXN0L1Jlc2NvcGUubm9kZXBzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGU1OTk4Mzg0MmFlNzllMDYyOTBjIiwiLypcbiAqIENvcHlyaWdodCAoYykgIDIwMTcgQ2FpcGkgTGFicyAuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG5pbXBvcnQgQ29udGV4dCBmcm9tIFwiLi9Db250ZXh0XCI7XG5pbXBvcnQgU3RvcmUgZnJvbSBcIi4vU3RvcmVcIjtcblxuQ29udGV4dC5TdG9yZSA9IFN0b3JlO1xuXG5leHBvcnQgZGVmYXVsdCB7U3RvcmUsIENvbnRleHR9O1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvUmVzY29wZS5qcyIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpICAyMDE3IENhaXBpIExhYnMgLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4gKlxuICogQGF1dGhvciA6IE5hdGhhbmFlbCBCcmF1blxuICogQGNvbnRhY3QgOiBjYWlwaWxhYnNAZ21haWwuY29tXG4gKi9cblxuLyoqXG4gKiBAYXV0aG9yIE5hdGhhbmFlbCBCUkFVTlxuICpcbiAqIERhdGU6IDEzLzA4LzIwMTdcbiAqIFRpbWU6IDE3OjE1XG4gKi9cblxuXG52YXIgaXMgICAgICAgICAgICAgID0gcmVxdWlyZSgnaXMnKSxcbiAgICBFdmVudEVtaXR0ZXIgICAgPSByZXF1aXJlKCdldmVudHMnKSxcbiAgICBzaG9ydGlkICAgICAgICAgPSByZXF1aXJlKCdzaG9ydGlkJylcbiAgICAsIF9fcHJvdG9fX3B1c2ggPSAoIHRhcmdldCwgaWQsIHBhcmVudCApID0+IHtcbiAgICBsZXQgaGVyZSAgICAgICAgICAgPSB7XG4gICAgICAgIFtpZF06IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgfVxuICAgIH07XG4gICAgaGVyZVtpZF0ucHJvdG90eXBlID0gcGFyZW50ID8gbmV3IHBhcmVudFtcIl9cIiArIGlkXSgpIDogdGFyZ2V0W2lkXSB8fCB7fTtcbiAgICB0YXJnZXRbaWRdICAgICAgICAgPSBuZXcgaGVyZVtpZF0oKTtcbiAgICB0YXJnZXRbJ18nICsgaWRdICAgPSBoZXJlW2lkXTtcbn0sXG4gICAgb3BlbkNvbnRleHRzICAgID0ge307XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGV4dCBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gICAgc3RhdGljIGRlZmF1bHRNYXhMaXN0ZW5lcnMgPSAxMDA7XG4gICAgc3RhdGljIHBlcnNpc3RlbmNlVG0gICAgICAgPSAxOy8vIGlmID4gMCwgd2lsbCB3YWl0ICdwZXJzaXN0ZW5jZVRtJyBtcyBiZWZvcmUgZGVzdHJveSB3aGVuIGRpc3Bvc2UgcmVhY2ggMFxuICAgIHN0YXRpYyBTdG9yZSAgICAgICAgICAgICAgID0gbnVsbDtcbiAgICBzdGF0aWMgY29udGV4dHMgICAgICAgICAgICA9IG9wZW5Db250ZXh0czsvLyBhbGwgYWN0aXZlIGNvbnRleHRzXG4gICAgXG4gICAgc3RhdGljIGdldENvbnRleHQoIGNvbnRleHRzICkge1xuICAgICAgICBsZXQgc2tleSA9IGlzLmFycmF5KGNvbnRleHRzKSA/IGNvbnRleHRzLnNvcnQoKCBhLCBiICkgPT4ge1xuICAgICAgICAgICAgaWYgKCBhLmZpcnN0bmFtZSA8IGIuZmlyc3RuYW1lICkgcmV0dXJuIC0xO1xuICAgICAgICAgICAgaWYgKCBhLmZpcnN0bmFtZSA+IGIuZmlyc3RuYW1lICkgcmV0dXJuIDE7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfSkuam9pbignOjonKSA6IGNvbnRleHRzO1xuICAgICAgICByZXR1cm4gb3BlbkNvbnRleHRzW3NrZXldID0gb3BlbkNvbnRleHRzW3NrZXldIHx8IG5ldyBDb250ZXh0KHt9LCB7IGlkOiBza2V5IH0pO1xuICAgIH07XG4gICAgXG4gICAgLyoqXG4gICAgICogSW5pdCBhIFJlc2NvcGUgY29udGV4dFxuICAgICAqXG4gICAgICogQHBhcmFtIHN0b3Jlc01hcCB7T2JqZWN0fSBPYmplY3Qgd2l0aCB0aGUgb3JpZ2luIHN0b3Jlc1xuICAgICAqIEBwYXJhbSBpZCB7c3RyaW5nfSBAb3B0aW9uYWwgaWQgKCBpZiB0aGlzIGlkIGV4aXN0IHN0b3Jlc01hcCB3aWxsIGJlIG1lcmdlIG9uIHRoZSAnaWQnIGNvbnRleHQpXG4gICAgICogQHBhcmFtIHBhcmVudFxuICAgICAqIEBwYXJhbSBzdGF0ZVxuICAgICAqIEBwYXJhbSBkYXRhc1xuICAgICAqIEBwYXJhbSBuYW1lXG4gICAgICogQHBhcmFtIGRlZmF1bHRNYXhMaXN0ZW5lcnNcbiAgICAgKiBAcGFyYW0gcGVyc2lzdGVuY2VUbSB7bnVtYmVyKSBpZiA+IDAsIHdpbGwgd2FpdCAncGVyc2lzdGVuY2VUbScgbXMgYmVmb3JlIGRlc3Ryb3kgd2hlbiBkaXNwb3NlIHJlYWNoIDBcbiAgICAgKiBAcGFyYW0gYXV0b0Rlc3Ryb3kgIHtib29sfSB3aWxsIHRyaWdnZXIgcmV0YWluICYgZGlzcG9zZSBhZnRlciBzdGFydFxuICAgICAqIEByZXR1cm5zIHtDb250ZXh0fVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKCBzdG9yZXNNYXAsIHsgaWQsIHBhcmVudCwgc3RhdGUsIGRhdGFzLCBuYW1lLCBkZWZhdWx0TWF4TGlzdGVuZXJzLCBwZXJzaXN0ZW5jZVRtLCBhdXRvRGVzdHJveSB9ID0ge30gKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9tYXhMaXN0ZW5lcnMgPSBkZWZhdWx0TWF4TGlzdGVuZXJzIHx8IHRoaXMuY29uc3RydWN0b3IuZGVmYXVsdE1heExpc3RlbmVycztcbiAgICAgICAgdGhpcy5faWQgICAgICAgICAgID0gaWQgPSBpZCB8fCAoXCJfX19fX1wiICsgc2hvcnRpZC5nZW5lcmF0ZSgpKTtcbiAgICAgICAgXG4gICAgICAgIGlmICggb3BlbkNvbnRleHRzW2lkXSApIHtcbiAgICAgICAgICAgIG9wZW5Db250ZXh0c1tpZF0ucmVnaXN0ZXIoc3RvcmVzTWFwKTtcbiAgICAgICAgICAgIHJldHVybiBvcGVuQ29udGV4dHNbaWRdXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIG9wZW5Db250ZXh0c1tpZF0gICAgPSB0aGlzO1xuICAgICAgICB0aGlzLl9pc0xvY2FsSWQgICAgID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fcGVyc2lzdGVuY2VUbSA9IHBlcnNpc3RlbmNlVG0gfHwgdGhpcy5jb25zdHJ1Y3Rvci5wZXJzaXN0ZW5jZVRtO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5zdG9yZXMgPSB7fTtcbiAgICAgICAgdGhpcy5zdGF0ZSAgPSB7fTtcbiAgICAgICAgdGhpcy5kYXRhcyAgPSB7fTtcbiAgICAgICAgXG4gICAgICAgIGlmIChwYXJlbnQgJiYgcGFyZW50LmRlYWQpXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW4ndCB1c2UgYSBkZWFkIGNvbnRleHQgYXMgcGFyZW50ICFcIik7XG4gICAgICAgIFxuICAgICAgICBfX3Byb3RvX19wdXNoKHRoaXMsICdzdG9yZXMnLCBwYXJlbnQpO1xuICAgICAgICBfX3Byb3RvX19wdXNoKHRoaXMsICdzdGF0ZScsIHBhcmVudCk7XG4gICAgICAgIF9fcHJvdG9fX3B1c2godGhpcywgJ2RhdGFzJywgcGFyZW50KTtcbiAgICAgICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgICAgIFxuICAgICAgICBpZiAoIHBhcmVudCApIHtcbiAgICAgICAgICAgIHBhcmVudC5fYWRkQ2hpbGQodGhpcyk7XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdGhpcy5zb3VyY2VzICAgICAgICA9IFtdO1xuICAgICAgICB0aGlzLl9jaGlsZENvbnRleHRzID0gW107XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9fcmV0YWlucyAgID0geyBhbGw6IDAgfTtcbiAgICAgICAgdGhpcy5fX2xvY2tzICAgICA9IHsgYWxsOiAxIH07XG4gICAgICAgIHRoaXMuX19saXN0ZW5pbmcgPSB7fTtcbiAgICAgICAgdGhpcy5fX2NvbnRleHQgICA9IHt9O1xuICAgICAgICB0aGlzLl9fbWl4ZWQgICAgID0gW107XG4gICAgICAgIHRoaXMuX19taXhlZExpc3QgPSBbXTtcbiAgICAgICAgdGhpcy5fZm9sbG93ZXJzICA9IFtdO1xuICAgICAgICBpZiAoIHBhcmVudCApIHtcbiAgICAgICAgICAgIHBhcmVudC5yZXRhaW4oXCJpc015UGFyZW50XCIpO1xuICAgICAgICAgICAgIXBhcmVudC5fc3RhYmxlICYmIHRoaXMud2FpdChcIndhaXRpbmdQYXJlbnRcIik7XG4gICAgICAgICAgICBwYXJlbnQub24odGhpcy5fX3BhcmVudExpc3QgPSB7XG4gICAgICAgICAgICAgICAgJ3N0YWJsZScgIDogcyA9PiB0aGlzLnJlbGVhc2UoXCJ3YWl0aW5nUGFyZW50XCIpLFxuICAgICAgICAgICAgICAgICd1bnN0YWJsZSc6IHMgPT4gdGhpcy53YWl0KFwid2FpdGluZ1BhcmVudFwiKSxcbiAgICAgICAgICAgICAgICAndXBkYXRlJyAgOiBzID0+IHRoaXMuX3Byb3BhZygpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIHRoaXMucmVnaXN0ZXIocGFyZW50Ll9fY29udGV4dCwgc3RhdGUsIGRhdGFzKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIHRoaXMucmVnaXN0ZXIoc3RvcmVzTWFwLCBzdGF0ZSwgZGF0YXMpO1xuICAgICAgICB0aGlzLl9fbG9ja3MuYWxsLS07XG4gICAgICAgIHRoaXMuX3N0YWJsZSA9ICF0aGlzLl9fbG9ja3MuYWxsO1xuICAgICAgICBcbiAgICAgICAgaWYgKCBhdXRvRGVzdHJveSApXG4gICAgICAgICAgICBzZXRUaW1lb3V0KFxuICAgICAgICAgICAgICAgIHRtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXRhaW4oXCJhdXRvRGVzdHJveVwiKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNwb3NlKFwiYXV0b0Rlc3Ryb3lcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKVxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKlxuICAgICAqIE1vdW50IHRoZSBzdG9yZXMgaW4gc3RvcmVzTGlzdCwgaW4gdGhpcyBjb250ZXh0IG9yIGluIGl0cyBwYXJlbnRzIG9yIG1peGVkIGNvbnRleHRzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc3RvcmVzTGlzdCB7c3RyaW5nfHN0b3JlUmVmfSBTdG9yZSBuYW1lLCBBcnJheSBvZiBTdG9yZSBuYW1lcywgb3IgUmVzY29wZSBzdG9yZSByZWYgZnJvbSBTdG9yZTo6YXMgb3JcbiAgICAgKiAgICAgU3RvcmU6YXNcbiAgICAgKiBAcGFyYW0gc3RhdGVcbiAgICAgKiBAcGFyYW0gZGF0YXNcbiAgICAgKiBAcmV0dXJucyB7Q29udGV4dH1cbiAgICAgKi9cbiAgICBtb3VudCggc3RvcmVzTGlzdCwgc3RhdGUsIGRhdGFzICkge1xuICAgICAgICBpZiAoIGlzLmFycmF5KHN0b3Jlc0xpc3QpICkge1xuICAgICAgICAgICAgc3RvcmVzTGlzdC5mb3JFYWNoKGsgPT4gdGhpcy5fbW91bnQoaywgc3RhdGUgJiYgc3RhdGVba10sIGRhdGFzICYmIGRhdGFzW2tdKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9tb3VudCguLi5hcmd1bWVudHMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBcbiAgICBfbW91bnQoIGlkLCBzdGF0ZSwgZGF0YXMgKSB7XG4gICAgICAgIGlmICggdHlwZW9mIGlkICE9PSAnc3RyaW5nJyApIHtcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXIoeyBbaWQubmFtZV06IGlkLnN0b3JlIH0pO1xuICAgICAgICAgICAgaWQgPSBpZC5uYW1lO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAoICF0aGlzLl9fY29udGV4dFtpZF0gKSB7Ly9hc2sgbWl4ZWQgfHwgcGFyZW50XG4gICAgICAgICAgICBpZiAoIHRoaXMuX19taXhlZC5yZWR1Y2UoKCBtb3VudGVkLCBjdHggKSA9PiAobW91bnRlZCB8fCBjdHguX21vdW50KGlkLCBzdGF0ZSwgZGF0YXMpKSwgZmFsc2UpIHx8XG4gICAgICAgICAgICAgICAgIXRoaXMucGFyZW50IClcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJlbnQuX21vdW50KC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIH1cbiAgICAgICAgLy90aGlzLmNvbnN0cnVjdG9yLlN0b3JlLm1vdW50U3RvcmUoaWQsIHRoaXMsIG51bGwsIHN0YXRlLCBkYXRhcyk7XG4gICAgICAgIGxldCBzdG9yZSA9IHRoaXMuX19jb250ZXh0W2lkXSwgY3R4O1xuICAgICAgICAvL2NvbnNvbGUud2FybihcIm1vdW50IG9uIFwiLCB0aGlzLl9pZCwgJyAnLCBpZCwgaXMuZm4oc3RvcmUpKTtcbiAgICAgICAgaWYgKCBpcy5mbihzdG9yZSkgKSB7XG4gICAgICAgICAgICB0aGlzLl9fY29udGV4dFtpZF0gPSBuZXcgc3RvcmUodGhpcywgeyBzdGF0ZSwgZGF0YXMgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoIHN0YXRlICE9PSB1bmRlZmluZWQgJiYgZGF0YXMgPT09IHVuZGVmaW5lZCApXG4gICAgICAgICAgICAgICAgc3RvcmUuc2V0U3RhdGUoc3RhdGUpO1xuICAgICAgICAgICAgZWxzZSBpZiAoIHN0YXRlICE9PSB1bmRlZmluZWQgKVxuICAgICAgICAgICAgICAgIHN0b3JlLnN0YXRlID0gc3RhdGU7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmICggZGF0YXMgIT09IHVuZGVmaW5lZCApXG4gICAgICAgICAgICAgICAgc3RvcmUucHVzaChkYXRhcyk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICAvL2NvbnNvbGUud2FybihcIm1vdW50IG9uIFwiLCB0aGlzLnN0b3Jlc1tpZF0pO1xuICAgICAgICB0aGlzLl93YXRjaFN0b3JlKGlkKTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiB0aGlzLl9fY29udGV4dFtpZF07XG4gICAgfVxuICAgIFxuICAgIF93YXRjaFN0b3JlKCBpZCwgc3RhdGUsIGRhdGFzICkge1xuICAgICAgICBpZiAoICF0aGlzLl9fY29udGV4dFtpZF0gKSB7Ly9hc2sgbWl4ZWQgfHwgcGFyZW50XG4gICAgICAgICAgICBpZiAoIHRoaXMuX19taXhlZC5yZWR1Y2UoKCBtb3VudGVkLCBjdHggKSA9PiAobW91bnRlZCB8fCBjdHguX3dhdGNoU3RvcmUoaWQsIHN0YXRlLCBkYXRhcykpLCBmYWxzZSkgfHxcbiAgICAgICAgICAgICAgICAhdGhpcy5wYXJlbnQgKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcmVudC5fd2F0Y2hTdG9yZSguLi5hcmd1bWVudHMpO1xuICAgICAgICB9XG4gICAgICAgIGlmICggIXRoaXMuX19saXN0ZW5pbmdbaWRdICYmICFpcy5mbih0aGlzLl9fY29udGV4dFtpZF0pICkge1xuICAgICAgICAgICAgIXRoaXMuX19jb250ZXh0W2lkXS5pc1N0YWJsZSgpICYmIHRoaXMud2FpdChpZCk7XG4gICAgICAgICAgICB0aGlzLl9fY29udGV4dFtpZF0ub24oXG4gICAgICAgICAgICAgICAgdGhpcy5fX2xpc3RlbmluZ1tpZF0gPSB7XG4gICAgICAgICAgICAgICAgICAgICdkZXN0cm95JyA6IHMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuX19saXN0ZW5pbmdbaWRdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fX2NvbnRleHRbaWRdID0gdGhpcy5fX2NvbnRleHRbaWRdLmNvbnN0cnVjdG9yO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAndXBkYXRlJyAgOiBzID0+IHRoaXMucHJvcGFnKCksXG4gICAgICAgICAgICAgICAgICAgICdzdGFibGUnICA6IHMgPT4gdGhpcy5yZWxlYXNlKGlkKSxcbiAgICAgICAgICAgICAgICAgICAgJ3Vuc3RhYmxlJzogcyA9PiB0aGlzLndhaXQoaWQpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIE1peCB0YXJnZXRDdHggb24gdGhpcyBjb250ZXh0XG4gICAgICogTWl4ZWQgY29udGV4dCBwYXJlbnRzIGFyZSBOT1QgbWFwcGVkXG4gICAgICogQHBhcmFtIHRhcmdldEN0eFxuICAgICAqL1xuICAgIG1peGluKCB0YXJnZXRDdHggKSB7XG4gICAgICAgIGxldCBwYXJlbnQgPSB0aGlzLnBhcmVudCwgbGlzdHM7XG4gICAgICAgIHRoaXMuX19taXhlZC5wdXNoKHRhcmdldEN0eClcbiAgICAgICAgdGFyZ2V0Q3R4LnJldGFpbihcIm1peGVkVG9cIik7XG4gICAgICAgIGlmICggIXRhcmdldEN0eC5fc3RhYmxlIClcbiAgICAgICAgICAgIHRoaXMud2FpdCh0YXJnZXRDdHguX2lkKTtcbiAgICAgICAgXG4gICAgICAgIGlmICggdGhpcy5kZWFkIHx8IHRhcmdldEN0eC5kZWFkIClcbiAgICAgICAgICAgIGRlYnVnZ2VyO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fX21peGVkTGlzdC5wdXNoKGxpc3RzID0ge1xuICAgICAgICAgICAgJ3N0YWJsZScgIDogcyA9PiB0aGlzLnJlbGVhc2UodGFyZ2V0Q3R4Ll9pZCksXG4gICAgICAgICAgICAndW5zdGFibGUnOiBzID0+IHRoaXMud2FpdCh0YXJnZXRDdHguX2lkKSxcbiAgICAgICAgICAgICd1cGRhdGUnICA6IHMgPT4gdGhpcy5fcHJvcGFnKClcbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy5zdG9yZXMgPSB7fTtcbiAgICAgICAgdGhpcy5zdGF0ZSAgPSB7fTtcbiAgICAgICAgdGhpcy5kYXRhcyAgPSB7fTtcbiAgICAgICAgdGFyZ2V0Q3R4Lm9uKGxpc3RzKTtcbiAgICAgICAgX19wcm90b19fcHVzaCh0aGlzLCAnc3RvcmVzJywgcGFyZW50KTtcbiAgICAgICAgX19wcm90b19fcHVzaCh0aGlzLCAnc3RhdGUnLCBwYXJlbnQpO1xuICAgICAgICBfX3Byb3RvX19wdXNoKHRoaXMsICdkYXRhcycsIHBhcmVudCk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLnJlbGluayh0aGlzLl9fY29udGV4dCwgdGhpcywgZmFsc2UsIHRydWUpO1xuICAgICAgICB0aGlzLl9fbWl4ZWQuZm9yRWFjaChcbiAgICAgICAgICAgIGN0eCA9PiB7XG4gICAgICAgICAgICAgICAgX19wcm90b19fcHVzaCh0aGlzLCAnc3RvcmVzJyk7XG4gICAgICAgICAgICAgICAgX19wcm90b19fcHVzaCh0aGlzLCAnc3RhdGUnKTtcbiAgICAgICAgICAgICAgICBfX3Byb3RvX19wdXNoKHRoaXMsICdkYXRhcycpO1xuICAgICAgICAgICAgICAgIGN0eC5yZWxpbmsoY3R4Ll9fY29udGV4dCwgdGhpcywgdHJ1ZSwgdHJ1ZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBSZWdpc3RlciBzdG9yZXMgaW4gc3RvcmVzTWFwICYgbGluayB0aGVtIGluIHRoZSBwcm90b3NcbiAgICAgKiBAcGFyYW0gc3RvcmVzTWFwXG4gICAgICogQHBhcmFtIHN0YXRlXG4gICAgICogQHBhcmFtIGRhdGFzXG4gICAgICovXG4gICAgcmVnaXN0ZXIoIHN0b3Jlc01hcCwgc3RhdGUgPSB7fSwgZGF0YXMgPSB7fSApIHtcbiAgICAgICAgdGhpcy5yZWxpbmsoc3RvcmVzTWFwLCB0aGlzLCBmYWxzZSwgZmFsc2UsIHN0YXRlLCBkYXRhcyk7XG4gICAgICAgIE9iamVjdC5rZXlzKHN0b3Jlc01hcCkuZm9yRWFjaChcbiAgICAgICAgICAgIGlkID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIGlzLmZuKHN0b3Jlc01hcFtpZF0pICkge1xuICAgICAgICAgICAgICAgICAgICBzdG9yZXNNYXBbaWRdLnNpbmdsZXRvbiAmJiB0aGlzLl9tb3VudChpZCwgc3RhdGVbaWRdLCBkYXRhc1tpZF0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvL3N0b3Jlc01hcFtpZF0ucmV0YWluKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3dhdGNoU3RvcmUoaWQpO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIClcbiAgICAgICAgXG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIE1hcCBzcmNDdHggc3RvcmUncyBvbiB0YXJnZXRDdHggaGVhZGVycyBwcm90bydzXG4gICAgICogQHBhcmFtIHNyY0N0eFxuICAgICAqIEBwYXJhbSB0YXJnZXRDdHhcbiAgICAgKiBAcGFyYW0gc3RhdGVcbiAgICAgKiBAcGFyYW0gZGF0YXNcbiAgICAgKi9cbiAgICByZWxpbmsoIHNyY0N0eCwgdGFyZ2V0Q3R4ID0gdGhpcywgZXh0ZXJuYWwsIGZvcmNlLCBzdGF0ZSA9IHt9LCBkYXRhcyA9IHt9ICkge1xuICAgICAgICBsZXQgbGN0eCA9IHRhcmdldEN0eC5fc3RvcmVzLnByb3RvdHlwZTtcbiAgICAgICAgT2JqZWN0LmtleXMoc3JjQ3R4KVxuICAgICAgICAgICAgICAuZm9yRWFjaChcbiAgICAgICAgICAgICAgICAgIGlkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoICFmb3JjZSAmJiB0YXJnZXRDdHguX19jb250ZXh0W2lkXSA9PT0gc3JjQ3R4W2lkXSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRDdHguX19jb250ZXh0W2lkXSAmJiAodGFyZ2V0Q3R4Ll9fY29udGV4dFtpZF0uY29uc3RydWN0b3IgPT09IHNyY0N0eFtpZF0gKSApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoICFmb3JjZSAmJiB0YXJnZXRDdHguX19jb250ZXh0W2lkXSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCAhZXh0ZXJuYWwgJiYgIWlzLmZuKHRhcmdldEN0eC5fX2NvbnRleHRbaWRdKSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuaW5mbyhcIlJlc2NvcGUgU3RvcmUgOiBcIiwgaWQsIFwiIGFscmVhZHkgZXhpc3QgaW4gdGhpcyBjb250ZXh0ICEgKCB0cnkgX19wcm90b19fIGhvdCBwYXRjaCApXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0Q3R4Ll9fY29udGV4dFtpZF0uX19wcm90b19fID0gc3JjQ3R4W2lkXS5wcm90b3R5cGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoICFleHRlcm5hbCAmJiBpcy5mbih0YXJnZXRDdHguX19jb250ZXh0W2lkXSkgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0Q3R4Ll9fY29udGV4dFtpZF0gPSBzcmNDdHhbaWRdO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICggIWZvcmNlICYmICFleHRlcm5hbCApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX19jb250ZXh0W2lkXSA9IHNyY0N0eFtpZF07XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBsY3R4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0OiAoKSA9PiB0aGlzLl9fY29udGV4dFtpZF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRDdHguX3N0YXRlLnByb3RvdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldDogKCkgPT4gKHRoaXMuX19jb250ZXh0W2lkXSAmJiB0aGlzLl9fY29udGV4dFtpZF0uc3RhdGUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0OiAoIHYgKSA9PiAodGhpcy5fbW91bnQoaWQsIHYpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldEN0eC5fZGF0YXMucHJvdG90eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0OiAoKSA9PiAodGhpcy5fX2NvbnRleHRbaWRdICYmIHRoaXMuX19jb250ZXh0W2lkXS5kYXRhcyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXQ6ICggdiApID0+ICh0aGlzLl9tb3VudChpZCwgdW5kZWZpbmVkLCB2KSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIClcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogQmluZCBzdG9yZXMgZnJvbSB0aGlzIGNvbnRleHQsIGhpcyBwYXJlbnRzIGFuZCBtaXhlZCBjb250ZXh0XG4gICAgICpcbiAgICAgKiBAcGFyYW0gb2JqIHtSZWFjdC5Db21wb25lbnR8U3RvcmV8ZnVuY3Rpb259XG4gICAgICogQHBhcmFtIGtleSB7c3RyaW5nKn0gc3RvcmVzIGtleXMgdG8gYmluZCB1cGRhdGVzXG4gICAgICogQHBhcmFtIGFzXG4gICAgICogQHBhcmFtIHNldEluaXRpYWw9dHJ1ZSB7Ym9vbH0gZmFsc2UgdG8gbm90IHByb3BhZyBpbml0aWFsIHZhbHVlXG4gICAgICovXG4gICAgYmluZCggb2JqLCBrZXksIGFzLCBzZXRJbml0aWFsID0gdHJ1ZSApIHtcbiAgICAgICAgbGV0IGxhc3RSZXZzLCBkYXRhcywgcmVLZXk7XG4gICAgICAgIGlmICgga2V5ICYmICFpcy5hcnJheShrZXkpIClcbiAgICAgICAgICAgIGtleSA9IFtrZXldO1xuICAgICAgICBcbiAgICAgICAgaWYgKCBhcyA9PT0gZmFsc2UgfHwgYXMgPT09IHRydWUgKSB7XG4gICAgICAgICAgICBzZXRJbml0aWFsID0gYXM7XG4gICAgICAgICAgICBhcyAgICAgICAgID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmVLZXkgPSBrZXkubWFwKGlkID0+IChpcy5zdHJpbmcoaWQpID8gaWQgOiBpZC5uYW1lKSk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9mb2xsb3dlcnMucHVzaChcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBvYmosXG4gICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgIGFzIHx8IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICBsYXN0UmV2cyA9IHJlS2V5ICYmIHJlS2V5LnJlZHVjZSgoIHJldnMsIGlkICkgPT4gKHJldnNbaWRdID0gMCwgcmV2cyksIHt9KVxuICAgICAgICAgICAgXSk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLm1vdW50KGtleSk7XG4gICAgICAgIFxuICAgICAgICBpZiAoIHNldEluaXRpYWwgJiYgdGhpcy5fc3RhYmxlICkge1xuICAgICAgICAgICAgZGF0YXMgPSB0aGlzLmdldFVwZGF0ZXMobGFzdFJldnMpO1xuICAgICAgICAgICAgaWYgKCAhZGF0YXMgKSByZXR1cm47XG4gICAgICAgICAgICBpZiAoIHR5cGVvZiBvYmogIT0gXCJmdW5jdGlvblwiICkge1xuICAgICAgICAgICAgICAgIGlmICggYXMgKSBvYmouc2V0U3RhdGUoeyBbYXNdOiBkYXRhcyB9KTtcbiAgICAgICAgICAgICAgICBlbHNlIG9iai5zZXRTdGF0ZShkYXRhcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBvYmooZGF0YXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIFVuIGJpbmQgdGhpcyBjb250ZXh0IG9mZiB0aGUgZ2l2ZW4gY29tcG9uZW50LWtleXNcbiAgICAgKiBAcGFyYW0gb2JqXG4gICAgICogQHBhcmFtIGtleVxuICAgICAqIEByZXR1cm5zIHtBcnJheS48Kj59XG4gICAgICovXG4gICAgdW5CaW5kKCBvYmosIGtleSwgYXMgKSB7XG4gICAgICAgIHZhciBmb2xsb3dlcnMgPSB0aGlzLl9mb2xsb3dlcnMsXG4gICAgICAgICAgICBpICAgICAgICAgPSBmb2xsb3dlcnMgJiYgZm9sbG93ZXJzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBmb2xsb3dlcnMgJiYgaS0tIClcbiAgICAgICAgICAgIGlmICggZm9sbG93ZXJzW2ldWzBdID09PSBvYmogJiYgKCcnICsgZm9sbG93ZXJzW2ldWzFdKSA9PSAoJycgKyBrZXkpICYmXG4gICAgICAgICAgICAgICAgZm9sbG93ZXJzW2ldWzJdID09IGFzIClcbiAgICAgICAgICAgICAgICByZXR1cm4gZm9sbG93ZXJzLnNwbGljZShpLCAxKTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogTW91bnQgdGhlIHN0b3JlcyBpbiBzdG9yZXNMaXN0IGZyb20gdGhpcyBjb250ZXh0LCBpdHMgcGFyZW50cyBhbmQgbWl4ZWQgY29udGV4dFxuICAgICAqIEJpbmQgdGhlbSB0byAndG8nXG4gICAgICogSG9vayAndG8nIHNvIGl0IHdpbGwgYXV0byB1bmJpbmQgb24gJ2Rlc3Ryb3knIG9yICdjb21wb25lbnRXaWxsVW5tb3VudCdcbiAgICAgKiBAcGFyYW0gdG9cbiAgICAgKiBAcGFyYW0gc3RvcmVzTGlzdFxuICAgICAqIEBwYXJhbSBiaW5kXG4gICAgICogQHJldHVybnMge09iamVjdH0gSW5pdGlhbCBvdXRwdXRzIG9mIHRoZSBzdG9yZXMgaW4gJ3N0b3Jlc0xpc3QnXG4gICAgICovXG4gICAgbWFwKCB0bywgc3RvcmVzTGlzdCwgYmluZCA9IHRydWUgKSB7XG4gICAgICAgIGxldCBTdG9yZSAgPSB0aGlzLmNvbnN0cnVjdG9yLlN0b3JlO1xuICAgICAgICBzdG9yZXNMaXN0ID0gaXMuYXJyYXkoc3RvcmVzTGlzdCkgPyBzdG9yZXNMaXN0IDogW3N0b3Jlc0xpc3RdO1xuICAgICAgICB0aGlzLm1vdW50KHN0b3Jlc0xpc3QpO1xuICAgICAgICBpZiAoIGJpbmQgJiYgdG8gaW5zdGFuY2VvZiBTdG9yZSApIHtcbiAgICAgICAgICAgIFN0b3JlLm1hcCh0bywgc3RvcmVzTGlzdCwgdGhpcywgdGhpcywgZmFsc2UpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoIGJpbmQgKSB7XG4gICAgICAgICAgICB0aGlzLmJpbmQodG8sIHN0b3Jlc0xpc3QsIHVuZGVmaW5lZCwgZmFsc2UpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBsZXQgbWl4ZWRDV1VubW91bnQsXG4gICAgICAgICAgICAgICAgdW5Nb3VudEtleSA9IHRvLmlzUmVhY3RDb21wb25lbnQgPyBcImNvbXBvbmVudFdpbGxVbm1vdW50XCIgOiBcImRlc3Ryb3lcIjtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKCB0by5oYXNPd25Qcm9wZXJ0eSh1bk1vdW50S2V5KSApIHtcbiAgICAgICAgICAgICAgICBtaXhlZENXVW5tb3VudCA9IHRvW3VuTW91bnRLZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB0b1t1bk1vdW50S2V5XSA9ICggLi4uYXJneiApID0+IHtcbiAgICAgICAgICAgICAgICBkZWxldGUgdG9bdW5Nb3VudEtleV07XG4gICAgICAgICAgICAgICAgaWYgKCBtaXhlZENXVW5tb3VudCApXG4gICAgICAgICAgICAgICAgICAgIHRvW3VuTW91bnRLZXldID0gbWl4ZWRDV1VubW91bnQ7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdGhpcy51bkJpbmQodG8sIHN0b3Jlc0xpc3QpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0b1t1bk1vdW50S2V5XSAmJiB0b1t1bk1vdW50S2V5XSguLi5hcmd6KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdG9yZXNMaXN0LnJlZHVjZSgoIGRhdGFzLCBpZCApID0+IChkYXRhc1tpZF0gPSB0aGlzLnN0b3Jlc1tpZF0gJiYgdGhpcy5zdG9yZXNbaWRdLmRhdGFzLCBkYXRhcyksIHt9KTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogR2V0IG9yIHVwZGF0ZSBzdG9yZXNSZXZNYXAncyByZXZpc2lvbnNcbiAgICAgKiBAcGFyYW0gc3RvcmVzUmV2TWFwXG4gICAgICogQHBhcmFtIGxvY2FsXG4gICAgICogQHJldHVybnMge3t9fVxuICAgICAqL1xuICAgIGdldFN0b3Jlc1JldnMoIHN0b3Jlc1Jldk1hcCA9IHt9LCBsb2NhbCApIHtcbiAgICAgICAgbGV0IGN0eCA9IHRoaXMuX19jb250ZXh0O1xuICAgICAgICBpZiAoICFzdG9yZXNSZXZNYXAgKSB7XG4gICAgICAgICAgICBzdG9yZXNSZXZNYXAgPSB7fTtcbiAgICAgICAgfVxuICAgICAgICBPYmplY3Qua2V5cyhjdHgpLmZvckVhY2goXG4gICAgICAgICAgICBpZCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCAhaXMuZm4oY3R4W2lkXSlcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgc3RvcmVzUmV2TWFwW2lkXSA9IGN0eFtpZF0uX3JldjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoICFzdG9yZXNSZXZNYXAuaGFzT3duUHJvcGVydHkoaWQpIClcbiAgICAgICAgICAgICAgICAgICAgc3RvcmVzUmV2TWFwW2lkXSA9IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIGlmICggIWxvY2FsICkge1xuICAgICAgICAgICAgdGhpcy5fX21peGVkLnJlZHVjZSgoIHVwZGF0ZWQsIGN0eCApID0+IChjdHguZ2V0U3RvcmVzUmV2cyhzdG9yZXNSZXZNYXApLCBzdG9yZXNSZXZNYXApLCBzdG9yZXNSZXZNYXApO1xuICAgICAgICAgICAgdGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuZ2V0U3RvcmVzUmV2cyhzdG9yZXNSZXZNYXApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdG9yZXNSZXZNYXA7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIEdldCBvciB1cGRhdGUgb3V0cHV0IGJhc2luZyBzdG9yZXNSZXZNYXAncyByZXZpc2lvbnMuXG4gICAgICogSWYgYSBzdG9yZSBpbiAnc3RvcmVzUmV2TWFwJyBpcyB1cGRhdGVkOyBhZGQgaXQgdG8gJ291dHB1dCdcbiAgICAgKiBAcGFyYW0gc3RvcmVzUmV2TWFwXG4gICAgICogQHBhcmFtIG91dHB1dFxuICAgICAqIEBwYXJhbSB1cGRhdGVkXG4gICAgICogQHJldHVybnMgeyp8e319XG4gICAgICovXG4gICAgZ2V0VXBkYXRlcyggc3RvcmVzUmV2TWFwLCBvdXRwdXQsIHVwZGF0ZWQgKSB7XG4gICAgICAgIGxldCBjdHggPSB0aGlzLl9fY29udGV4dDtcbiAgICAgICAgXG4gICAgICAgIGlmICggIXRoaXMuZGF0YXMgKVxuICAgICAgICAgICAgZGVidWdnZXI7XG4gICAgICAgIG91dHB1dCA9IG91dHB1dCB8fCB7fTtcbiAgICAgICAgT2JqZWN0LmtleXMoY3R4KS5mb3JFYWNoKFxuICAgICAgICAgICAgaWQgPT4ge1xuICAgICAgICAgICAgICAgIGlmICggIW91dHB1dFtpZF1cbiAgICAgICAgICAgICAgICAgICAgJiYgKCAhc3RvcmVzUmV2TWFwXG4gICAgICAgICAgICAgICAgICAgICAgICB8fCAoc3RvcmVzUmV2TWFwLmhhc093blByb3BlcnR5KGlkKSAmJiBzdG9yZXNSZXZNYXBbaWRdID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgICAgICB8fCAhKCAhc3RvcmVzUmV2TWFwLmhhc093blByb3BlcnR5KGlkKSB8fCBjdHhbaWRdLl9yZXYgPD0gc3RvcmVzUmV2TWFwW2lkXSApKVxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlZCAgICA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIG91dHB1dFtpZF0gPSB0aGlzLmRhdGFzW2lkXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBzdG9yZXNSZXZNYXAgJiYgc3RvcmVzUmV2TWFwW2lkXSAhPT0gdW5kZWZpbmVkIClcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3Jlc1Jldk1hcFtpZF0gPSBjdHhbaWRdLl9yZXY7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgdXBkYXRlZCA9IHRoaXMuX19taXhlZC5yZWR1Y2UoKCB1cGRhdGVkLCBjdHggKSA9PiAoY3R4LmdldFVwZGF0ZXMoc3RvcmVzUmV2TWFwLCBvdXRwdXQsIHVwZGF0ZWQpIHx8IHVwZGF0ZWQpLCB1cGRhdGVkKTtcbiAgICAgICAgdXBkYXRlZCA9IHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LmdldFVwZGF0ZXMoc3RvcmVzUmV2TWFwLCBvdXRwdXQsIHVwZGF0ZWQpIHx8IHVwZGF0ZWQ7XG4gICAgICAgIHJldHVybiB1cGRhdGVkICYmIG91dHB1dDtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZmxhZ3Nfc3RhdGVzXG4gICAgICogQHBhcmFtIGZsYWdzX2RhdGFzXG4gICAgICogQHJldHVybnMge3tzdGF0ZToge30sIGRhdGFzOiB7fX19XG4gICAgICovXG4gICAgc2VyaWFsaXplKCBmbGFnc19zdGF0ZXMgPSAvLiovLCBmbGFnc19kYXRhcyA9IC8uKi8gKSB7XG4gICAgICAgIGxldCBjdHggPSB0aGlzLl9fY29udGV4dCwgb3V0cHV0ID0geyBzdGF0ZToge30sIGRhdGFzOiB7fSB9LFxuICAgICAgICAgICAgX2ZsYWdzX3N0YXRlcyxcbiAgICAgICAgICAgIF9mbGFnc19kYXRhcztcbiAgICAgICAgaWYgKCBpcy5hcnJheShmbGFnc19zdGF0ZXMpIClcbiAgICAgICAgICAgIGZsYWdzX3N0YXRlcy5mb3JFYWNoKGlkID0+IChvdXRwdXQuc3RhdGVbaWRdID0gdGhpcy5zdGF0ZVtpZF0pKTtcbiAgICAgICAgXG4gICAgICAgIGlmICggaXMuYXJyYXkoZmxhZ3NfZGF0YXMpIClcbiAgICAgICAgICAgIGZsYWdzX2RhdGFzLmZvckVhY2goaWQgPT4gKG91dHB1dC5kYXRhc1tpZF0gPSB0aGlzLmRhdGFzW2lkXSkpO1xuICAgICAgICBcbiAgICAgICAgaWYgKCAhaXMuYXJyYXkoZmxhZ3NfZGF0YXMpICYmICFpcy5hcnJheShmbGFnc19zdGF0ZXMpIClcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGN0eCkuZm9yRWFjaChcbiAgICAgICAgICAgICAgICBpZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICggaXMuZm4oY3R4W2lkXSkgKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgbGV0IGZsYWdzID0gY3R4W2lkXS5jb25zdHJ1Y3Rvci5mbGFncztcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGZsYWdzID0gaXMuYXJyYXkoZmxhZ3MpID8gZmxhZ3MgOiBbZmxhZ3MgfHwgXCJcIl07XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpZiAoIGZsYWdzLnJlZHVjZSgoIHIsIGZsYWcgKSA9PiAociB8fCBfZmxhZ3Nfc3RhdGVzLnRlc3QoZmxhZykpLCBmYWxzZSkgKVxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0LnN0YXRlW2lkXSA9IHRoaXMuc3RhdGVbaWRdO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBmbGFncy5yZWR1Y2UoKCByLCBmbGFnICkgPT4gKHIgfHwgX2ZsYWdzX2RhdGFzLnRlc3QoZmxhZykpLCBmYWxzZSkgKVxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0LmRhdGFzW2lkXSA9IHRoaXMuZGF0YXNbaWRdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIClcbiAgICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICB9XG4gICAgXG4gICAgb24oIGxpc3RzICkge1xuICAgICAgICBpZiAoICFpcy5zdHJpbmcobGlzdHMpICYmIGxpc3RzIClcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGxpc3RzKS5mb3JFYWNoKGsgPT4gc3VwZXIub24oaywgbGlzdHNba10pKTtcbiAgICAgICAgZWxzZSBzdXBlci5vbiguLi5hcmd1bWVudHMpO1xuICAgIH1cbiAgICBcbiAgICByZW1vdmVMaXN0ZW5lciggbGlzdHMgKSB7XG4gICAgICAgIGlmICggIWlzLnN0cmluZyhsaXN0cykgJiYgbGlzdHMgKVxuICAgICAgICAgICAgT2JqZWN0LmtleXMobGlzdHMpLmZvckVhY2goayA9PiBzdXBlci5yZW1vdmVMaXN0ZW5lcihrLCBsaXN0c1trXSkpO1xuICAgICAgICBlbHNlIHN1cGVyLnJlbW92ZUxpc3RlbmVyKC4uLmFyZ3VtZW50cyk7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIG9uY2UoJ3N0YWJsZScsIGNiKVxuICAgICAqIEBwYXJhbSBvYmoge1JlYWN0LkNvbXBvbmVudHxTdG9yZXxmdW5jdGlvbilcbiAgICAgKiBAcGFyYW0ga2V5IHtzdHJpbmd9IG9wdGlvbmFsIGtleSB3aGVyZSB0byBtYXAgdGhlIHB1YmxpYyBzdGF0ZVxuICAgICAqL1xuICAgIHRoZW4oIGNiICkge1xuICAgICAgICBpZiAoIHRoaXMuX3N0YWJsZSApXG4gICAgICAgICAgICByZXR1cm4gY2IobnVsbCwgdGhpcy5kYXRhcyk7XG4gICAgICAgIHRoaXMub25jZSgnc3RhYmxlJywgZSA9PiBjYihudWxsLCB0aGlzLmRhdGFzKSk7XG4gICAgfVxuICAgIFxuICAgIHJlc3RvcmUoIHsgc3RhdGUsIGRhdGFzIH0sIHF1aWV0ICkge1xuICAgICAgICBsZXQgY3R4ID0gdGhpcy5fX2NvbnRleHQ7XG4gICAgICAgIE9iamVjdC5rZXlzKGRhdGFzKS5mb3JFYWNoKFxuICAgICAgICAgICAgaWQgPT4ge1xuICAgICAgICAgICAgICAgIHF1aWV0ID8gY3R4LmRhdGFzID0gZGF0YXNbaWRdXG4gICAgICAgICAgICAgICAgICAgIDogY3R4LnB1c2goZGF0YXNbaWRdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgT2JqZWN0LmtleXMoc3RhdGUpLmZvckVhY2goXG4gICAgICAgICAgICBpZCA9PiB7XG4gICAgICAgICAgICAgICAgcXVpZXQgPyBjdHguc3RhdGUgPSBzdGF0ZVtpZF1cbiAgICAgICAgICAgICAgICAgICAgOiBjdHguc2V0U3RhdGUoc3RhdGVbaWRdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG4gICAgXG4gICAgcmV0YWluU3RvcmVzKCBzdG9yZXMgPSBbXSwgcmVhc29uICkge1xuICAgICAgICBzdG9yZXMuZm9yRWFjaChcbiAgICAgICAgICAgIGlkID0+ICh0aGlzLnN0b3Jlc1tpZF0gJiYgdGhpcy5zdG9yZXNbaWRdLnJldGFpbiAmJiB0aGlzLnN0b3Jlc1tpZF0ucmV0YWluKHJlYXNvbikpXG4gICAgICAgIClcbiAgICB9XG4gICAgXG4gICAgZGlzcG9zZVN0b3Jlcyggc3RvcmVzID0gW10sIHJlYXNvbiApIHtcbiAgICAgICAgc3RvcmVzLmZvckVhY2goXG4gICAgICAgICAgICBpZCA9PiAodGhpcy5zdG9yZXNbaWRdICYmIHRoaXMuc3RvcmVzW2lkXS5kaXNwb3NlICYmIHRoaXMuc3RvcmVzW2lkXS5kaXNwb3NlKHJlYXNvbikpXG4gICAgICAgIClcbiAgICB9XG4gICAgXG4gICAgd2FpdCggcmVhc29uICkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwid2FpdFwiLCByZWFzb24pO1xuICAgICAgICB0aGlzLl9zdGFibGUgJiYgIXRoaXMuX19sb2Nrcy5hbGwgJiYgdGhpcy5lbWl0KFwidW5zdGFibGVcIiwgdGhpcyk7XG4gICAgICAgIHRoaXMuX3N0YWJsZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9fbG9ja3MuYWxsKys7XG4gICAgICAgIGlmICggcmVhc29uICkge1xuICAgICAgICAgICAgdGhpcy5fX2xvY2tzW3JlYXNvbl0gPSB0aGlzLl9fbG9ja3NbcmVhc29uXSB8fCAwO1xuICAgICAgICAgICAgdGhpcy5fX2xvY2tzW3JlYXNvbl0rKztcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICByZWxlYXNlKCByZWFzb24gKSB7XG4gICAgICAgIC8vY29uc29sZS5sb2coXCJyZWxlYXNlXCIsIHJlYXNvbik7XG4gICAgICAgIFxuICAgICAgICBpZiAoIHJlYXNvbiApIHtcbiAgICAgICAgICAgIGlmICggdGhpcy5fX2xvY2tzW3JlYXNvbl0gPT0gMCApXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlJlbGVhc2UgbW9yZSB0aGFuIGxvY2tpbmcgIVwiLCByZWFzb24pO1xuICAgICAgICAgICAgdGhpcy5fX2xvY2tzW3JlYXNvbl0gPSB0aGlzLl9fbG9ja3NbcmVhc29uXSB8fCAwO1xuICAgICAgICAgICAgdGhpcy5fX2xvY2tzW3JlYXNvbl0tLTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoICFyZWFzb24gJiYgdGhpcy5fX2xvY2tzLmFsbCA9PSAwIClcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJSZWxlYXNlIG1vcmUgdGhhbiBsb2NraW5nICFcIik7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9fbG9ja3MuYWxsLS07XG4gICAgICAgIGlmICggIXRoaXMuX19sb2Nrcy5hbGwgKSB7XG4gICAgICAgICAgICB0aGlzLl9zdGFiaWxpemVyVE0gJiYgY2xlYXJUaW1lb3V0KHRoaXMuX3N0YWJpbGl6ZXJUTSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMuX3N0YWJpbGl6ZXJUTSA9IHNldFRpbWVvdXQoXG4gICAgICAgICAgICAgICAgZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3N0YWJpbGl6ZXJUTSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIGlmICggdGhpcy5fX2xvY2tzLmFsbCApXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wcm9wYWdUTSAmJiBjbGVhclRpbWVvdXQodGhpcy5fcHJvcGFnVE0pO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc3RhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KFwic3RhYmxlXCIsIHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgIXRoaXMuZGVhZCAmJiB0aGlzLl9wcm9wYWcoKTsvLyBzdGFiaWxpdHkgY2FuIGluZHVjZSBkZXN0cm95XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG4gICAgXG4gICAgcHJvcGFnKCkge1xuICAgICAgICB0aGlzLl9wcm9wYWdUTSAmJiBjbGVhclRpbWVvdXQodGhpcy5fcHJvcGFnVE0pO1xuICAgICAgICB0aGlzLl9wcm9wYWdUTSA9IHNldFRpbWVvdXQoXG4gICAgICAgICAgICBlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLl9wcm9wYWdUTSA9IG51bGw7XG4gICAgICAgICAgICAgICAgdGhpcy5fcHJvcGFnKClcbiAgICAgICAgICAgIH0sIDJcbiAgICAgICAgKTtcbiAgICB9XG4gICAgXG4gICAgX3Byb3BhZygpIHtcbiAgICAgICAgaWYgKCB0aGlzLl9mb2xsb3dlcnMubGVuZ3RoIClcbiAgICAgICAgICAgIHRoaXMuX2ZvbGxvd2Vycy5mb3JFYWNoKCggeyAwOiBvYmosIDE6IGtleSwgMjogYXMsIDM6IGxhc3RSZXZzIH0gKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGRhdGFzID0gdGhpcy5nZXRVcGRhdGVzKGxhc3RSZXZzKTtcbiAgICAgICAgICAgICAgICBpZiAoICFkYXRhcyApIHJldHVybjtcbiAgICAgICAgICAgICAgICBpZiAoIHR5cGVvZiBvYmogIT0gXCJmdW5jdGlvblwiICkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIGFzICkgb2JqLnNldFN0YXRlKHsgW2FzXTogZGF0YXMgfSk7XG4gICAgICAgICAgICAgICAgICAgIGVsc2Ugb2JqLnNldFN0YXRlKGRhdGFzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG9iaihkYXRhcywgbGFzdFJldnMgJiYgWy4uLmxhc3RSZXZzXSB8fCBcIm5vIHJldnNcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGxhc3RSZXZzICYmXG4gICAgICAgICAgICAgICAgLy8ga2V5LmZvckVhY2goaWQgPT4gKGxhc3RSZXZzW2lkXSA9IHRoaXMuc3RvcmVzW2lkXSAmJiB0aGlzLnN0b3Jlc1tpZF0uX3JldiB8fCAwKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5lbWl0KFwidXBkYXRlXCIsIHRoaXMuZ2V0VXBkYXRlcygpKTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogaXMgc3RhYmxlXG4gICAgICogQHJldHVybnMgYm9vbFxuICAgICAqL1xuICAgIGlzU3RhYmxlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc3RhYmxlO1xuICAgIH1cbiAgICBcbiAgICBfZ2V0QWxsQ2hpbGRzKCBjaGlsZHMgPSBbXSApIHtcbiAgICAgICAgY2hpbGRzLnB1c2goLi4udGhpcy5fY2hpbGRDb250ZXh0cylcbiAgICAgICAgdGhpcy5fY2hpbGRDb250ZXh0cy5mb3JFYWNoKFxuICAgICAgICAgICAgY3R4ID0+IHtcbiAgICAgICAgICAgICAgICBjdHguX2dldEFsbENoaWxkcyhjaGlsZHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gY2hpbGRzO1xuICAgIH1cbiAgICBcbiAgICBfYWRkQ2hpbGQoIGN0eCApIHtcbiAgICAgICAgdGhpcy5fY2hpbGRDb250ZXh0cy5wdXNoKGN0eCk7XG4gICAgfVxuICAgIFxuICAgIF9ybUNoaWxkKCBjdHggKSB7XG4gICAgICAgIGxldCBpID0gdGhpcy5fY2hpbGRDb250ZXh0cy5pbmRleE9mKGN0eCk7XG4gICAgICAgIGlmICggaSAhPSAtMSApXG4gICAgICAgICAgICB0aGlzLl9jaGlsZENvbnRleHRzLnNwbGljZShpLCAxKTtcbiAgICB9XG4gICAgXG4gICAgcmV0YWluKCByZWFzb24gKSB7XG4gICAgICAgIHRoaXMuX19yZXRhaW5zLmFsbCsrO1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwicmV0YWluXCIsIHRoaXMuX2lkLCByZWFzb24pO1xuICAgICAgICBpZiAoIHJlYXNvbiApIHtcbiAgICAgICAgICAgIHRoaXMuX19yZXRhaW5zW3JlYXNvbl0gPSB0aGlzLl9fcmV0YWluc1tyZWFzb25dIHx8IDA7XG4gICAgICAgICAgICB0aGlzLl9fcmV0YWluc1tyZWFzb25dKys7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgZGlzcG9zZSggcmVhc29uICkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwiZGlzcG9zZVwiLCB0aGlzLl9pZCwgcmVhc29uKTtcbiAgICAgICAgaWYgKCByZWFzb24gKSB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmICggdGhpcy5fX3JldGFpbnNbcmVhc29uXSA9PSAwIClcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJEaXNwb3NlIG1vcmUgdGhhbiByZXRhaW5pbmcgIVwiKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5fX3JldGFpbnNbcmVhc29uXSA9IHRoaXMuX19yZXRhaW5zW3JlYXNvbl0gfHwgMDtcbiAgICAgICAgICAgIHRoaXMuX19yZXRhaW5zW3JlYXNvbl0tLTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKCB0aGlzLl9fcmV0YWlucy5hbGwgPT0gMCApXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJEaXNwb3NlIG1vcmUgdGhhbiByZXRhaW5pbmcgIVwiKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX19yZXRhaW5zLmFsbC0tO1xuICAgICAgICBcbiAgICAgICAgaWYgKCAhdGhpcy5fX3JldGFpbnMuYWxsICkge1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcImRpc3Bvc2UgZG8gZGVzdHJveSBcIiwgdGhpcy5faWQsIHRoaXMuX3BlcnNpc3RlbmNlVG0pO1xuICAgICAgICAgICAgaWYgKCB0aGlzLl9wZXJzaXN0ZW5jZVRtICkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2Rlc3Ryb3lUTSAmJiBjbGVhclRpbWVvdXQodGhpcy5fZGVzdHJveVRNKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9kZXN0cm95VE0gPSBzZXRUaW1lb3V0KFxuICAgICAgICAgICAgICAgICAgICBlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJ3dGYgY3R4XCIsIHRoaXMuX2lkLCByZWFzb24sIHRoaXMuX19sb2NrcywgdGhpcy5fc3RhYmxlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGhlbihzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwid3RmIGN0eCB0aGVuXCIsIHRoaXMuX2lkLCByZWFzb24sIHRoaXMuX19sb2Nrcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIXRoaXMuX19yZXRhaW5zLmFsbCAmJiB0aGlzLmRlc3Ryb3koKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3BlcnNpc3RlbmNlVG1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy50aGVuKHMgPT4gKCF0aGlzLl9fcmV0YWlucy5hbGwgJiYgdGhpcy5kZXN0cm95KCkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBvcmRlciBkZXN0cm95IG9mIGxvY2FsIHN0b3Jlc1xuICAgICAqL1xuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIGxldCBjdHggICA9IHRoaXMuX19jb250ZXh0O1xuICAgICAgICAvL2NvbnNvbGUud2FybihcImRlc3Ryb3lcIiwgdGhpcy5faWQpO1xuICAgICAgICB0aGlzLmRlYWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmVtaXQoXCJkZXN0cm95XCIpO1xuICAgICAgICBPYmplY3Qua2V5cyhcbiAgICAgICAgICAgIHRoaXMuX19saXN0ZW5pbmdcbiAgICAgICAgKS5mb3JFYWNoKFxuICAgICAgICAgICAgaWQgPT4gdGhpcy5fX2NvbnRleHRbaWRdLnJlbW92ZUxpc3RlbmVyKHRoaXMuX19saXN0ZW5pbmdbaWRdKVxuICAgICAgICApO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fc3RhYmlsaXplclRNICYmIGNsZWFyVGltZW91dCh0aGlzLl9zdGFiaWxpemVyVE0pO1xuICAgICAgICB0aGlzLl9wcm9wYWdUTSAmJiBjbGVhclRpbWVvdXQodGhpcy5fcHJvcGFnVE0pO1xuICAgICAgICB0aGlzLl9fbGlzdGVuaW5nID0ge307XG4gICAgICAgIFxuICAgICAgICBpZiAoIHRoaXMuX2lzTG9jYWxJZCApXG4gICAgICAgICAgICBkZWxldGUgb3BlbkNvbnRleHRzW3RoaXMuX2lkXTtcbiAgICAgICAgdGhpcy5fZm9sbG93ZXJzLmxlbmd0aCA9IDA7XG4gICAgICAgIFxuICAgICAgICB3aGlsZSAoIHRoaXMuX19taXhlZExpc3QubGVuZ3RoICkge1xuICAgICAgICAgICAgdGhpcy5fX21peGVkWzBdLnJlbW92ZUxpc3RlbmVyKHRoaXMuX19taXhlZExpc3Quc2hpZnQoKSk7XG4gICAgICAgICAgICB0aGlzLl9fbWl4ZWQuc2hpZnQoKS5kaXNwb3NlKFwibWl4ZWRUb1wiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIHRoaXMuX19wYXJlbnRMaXN0ICkge1xuICAgICAgICAgICAgdGhpcy5wYXJlbnQuX3JtQ2hpbGQodGhpcyk7XG4gICAgICAgICAgICB0aGlzLnBhcmVudC5yZW1vdmVMaXN0ZW5lcih0aGlzLl9fcGFyZW50TGlzdCk7XG4gICAgICAgICAgICB0aGlzLnBhcmVudC5kaXNwb3NlKFwiaXNNeVBhcmVudFwiKTtcbiAgICAgICAgICAgIHRoaXMuX19wYXJlbnRMaXN0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICAvL2ZvciAoIGxldCBrZXkgaW4gY3R4IClcbiAgICAgICAgLy8gICAgaWYgKCAhaXMuZm4oY3R4W2tleV0pICkge1xuICAgICAgICAvLyAgICAgICAgaWYgKCBjdHhba2V5XS5jb250ZXh0T2JqID09PSB0aGlzIClcbiAgICAgICAgLy8gICAgICAgICAgICBjdHhba2V5XS5kaXNwb3NlKCk7XG4gICAgICAgIC8vXG4gICAgICAgIC8vICAgICAgICBjdHhba2V5XSA9IGN0eFtrZXldLmNvbnN0cnVjdG9yO1xuICAgICAgICAvLyAgICB9XG4gICAgICAgIHRoaXMuX19taXhlZCA9IHRoaXMuZGF0YXMgPSB0aGlzLnN0YXRlID0gdGhpcy5jb250ZXh0ID0gdGhpcy5zdG9yZXMgPSBudWxsO1xuICAgICAgICB0aGlzLl9kYXRhcyA9IHRoaXMuX3N0YXRlID0gdGhpcy5fc3RvcmVzID0gbnVsbDtcbiAgICAgICAgXG4gICAgICAgIFxuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvQ29udGV4dC5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImlzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiaXNcIlxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJldmVudHNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJldmVudHNcIlxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzaG9ydGlkXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwic2hvcnRpZFwiXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpICAyMDE3IENhaXBpIExhYnMgLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4gKlxuICogQGF1dGhvciA6IE5hdGhhbmFlbCBCcmF1blxuICogQGNvbnRhY3QgOiBjYWlwaWxhYnNAZ21haWwuY29tXG4gKi9cblxuLyoqXG4gKiBVbHRyYSBzY2FsYWJsZSBzdGF0ZS1hd2FyZSBzdG9yZVxuICpcbiAqIEB0b2RvIDogbG90IG9mIG9wdGltcy4uLlxuICovXG5cbnZhciBpcyAgICAgICAgICAgPSByZXF1aXJlKCdpcycpLFxuICAgIENvbnRleHQgICAgICA9IHJlcXVpcmUoJy4vQ29udGV4dCcpLFxuICAgIEV2ZW50RW1pdHRlciA9IHJlcXVpcmUoJ2V2ZW50cycpLFxuICAgIHNob3J0aWQgICAgICA9IHJlcXVpcmUoJ3Nob3J0aWQnKSxcbiAgICBvYmpQcm90byAgICAgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Yoe30pLFxuICAgIG9wZW5Db250ZXh0cyA9IHt9O1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0b3JlIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgICBcbiAgICBzdGF0aWMgdXNlICAgICAgICAgICAgICAgICAgICAgICAgPSBbXTsvLyBvdmVycmlkYWJsZSBsaXN0IG9mIHNvdXJjZSBzdG9yZXNcbiAgICBzdGF0aWMgZm9sbG93Oy8vIG92ZXJyaWRhYmxlIGxpc3Qgb2Ygc3RvcmUgdGhhdCB3aWxsIGFsbG93IHB1c2ggaWYgdXBkYXRlZFxuICAgIHN0YXRpYyByZXF1aXJlO1xuICAgIHN0YXRpYyBzdGF0aWNDb250ZXh0ICAgICAgICAgICAgICA9IG5ldyBDb250ZXh0KHt9LCB7IGlkOiBcInN0YXRpY1wiIH0pO1xuICAgIHN0YXRpYyBpbml0aWFsU3RhdGUgICAgICAgICAgICAgICA9IHVuZGVmaW5lZDsvLyBkZWZhdWx0IHN0YXRlIEBkZXByZWNpYXRlZFxuICAgIHN0YXRpYyBzdGF0ZSAgICAgICAgICAgICAgICAgICAgICA9IHVuZGVmaW5lZDsvLyBkZWZhdWx0IHN0YXRlXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuICAgICAgICAgICBzdGF0aWMgZGVmYXVsdE1heExpc3RlbmVycyA9IDEwMDtcbiAgICAvKipcbiAgICAgKiBpZiByZXRhaW4gZ29lcyB0byAwIDpcbiAgICAgKiBmYWxzZSB0byBub3QgZGVzdHJveSxcbiAgICAgKiAwIHRvIHN5bmMgYXV0byBkZXN0cm95XG4gICAgICogTXMgdG8gYXV0b2Rlc3Ryb3kgYWZ0ZXIgdG0gbXMgaWYgbm8gcmV0YWluIGhhcyBiZWVuIGNhbGxlZFxuICAgICAqIEB0eXBlIHtib29sZWFufEludH1cbiAgICAgKi9cbiAgICAgICAgICAgc3RhdGljIHBlcnNpc3RlbmNlVG0gICAgICAgPSBmYWxzZTtcbiAgICBcbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3Rvciwgd2lsbCBidWlsZCBhIHJlc2NvcGUgc3RvcmVcbiAgICAgKlxuICAgICAqIChjb250ZXh0LCB7cmVxdWlyZSx1c2UsYXBwbHksc3RhdGUsIGRhdGFzfSlcbiAgICAgKiAoY29udGV4dClcbiAgICAgKlxuICAgICAqIEBwYXJhbSBjb250ZXh0IHtvYmplY3R9IGNvbnRleHQgd2hlcmUgdG8gZmluZCB0aGUgb3RoZXIgc3RvcmVzIChkZWZhdWx0IDogc3RhdGljIHN0YXRpY0NvbnRleHQgKVxuICAgICAqIEBwYXJhbSBrZXlzIHtBcnJheX0gKHBhc3NlZCB0byBTdG9yZTo6bWFwKSBFeCA6IFtcInNlc3Npb25cIiwgXCJvdGhlck5hbWVkU3RvcmU6a2V5XCIsIG90aGVyU3RvcmUuYXMoXCJvdGhlcktleVwiKV1cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdmFyIGFyZ3ogICAgICAgICA9IFsuLi5hcmd1bWVudHNdLFxuICAgICAgICAgICAgX3N0YXRpYyAgICAgID0gdGhpcy5jb25zdHJ1Y3RvcixcbiAgICAgICAgICAgIGNvbnRleHQgICAgICA9ICFpcy5hcnJheShhcmd6WzBdKSAmJiAhaXMuc3RyaW5nKGFyZ3pbMF0pID8gYXJnei5zaGlmdCgpIDogX3N0YXRpYy5zdGF0aWNDb250ZXh0LFxuICAgICAgICAgICAgY2ZnICAgICAgICAgID0gYXJnelswXSAmJiAhaXMuYXJyYXkoYXJnelswXSkgJiYgIWlzLnN0cmluZyhhcmd6WzBdKSA/IGFyZ3ouc2hpZnQoKSA6IHt9LFxuICAgICAgICAgICAgbmFtZSAgICAgICAgID0gaXMuc3RyaW5nKGFyZ3pbMF0pID8gYXJnelswXSA6IGNmZy5uYW1lIHx8IF9zdGF0aWMubmFtZSxcbiAgICAgICAgICAgIHdhdGNocyAgICAgICA9IGlzLmFycmF5KGFyZ3pbMF0pID8gYXJnei5zaGlmdCgpIDogY2ZnLnVzZSB8fCBbXSwvLyB3YXRjaHMgbmVlZCB0byBiZSBkZWZpbmVkIGFmdGVyIGFsbCB0aGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzdG9yZSBhcmUgcmVnaXN0ZXJlZCA6IHNvIHdlIGNhbid0IGRlYWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB3aXRoIGFueSBcInN0YXRpYyB1c2VcIiBhdXRvbWF0aWNseVxuICAgICAgICAgICAgYXBwbHkgICAgICAgID0gaXMuZm4oYXJnelswXSkgPyBhcmd6LnNoaWZ0KCkgOiBjZmcuYXBwbHkgfHwgbnVsbCxcbiAgICAgICAgICAgIGluaXRpYWxTdGF0ZSA9IF9zdGF0aWMuc3RhdGUgfHwgX3N0YXRpYy5pbml0aWFsU3RhdGU7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl91aWQgICAgICAgICAgPSBjZmcuX3VpZCB8fCBzaG9ydGlkLmdlbmVyYXRlKCk7XG4gICAgICAgIHRoaXMuX21heExpc3RlbmVycyA9IGNmZy5kZWZhdWx0TWF4TGlzdGVuZXJzIHx8IFN0b3JlLmRlZmF1bHRNYXhMaXN0ZW5lcnM7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9fcmV0YWlucyAgICA9IHsgYWxsOiAwIH07XG4gICAgICAgIHRoaXMuX19sb2NrcyAgICAgID0geyBhbGw6IDAgfTtcbiAgICAgICAgdGhpcy5fb25TdGFiaWxpemUgPSBbXTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX3BlcnNpc3RlbmNlVG0gPSBjZmcucGVyc2lzdGVuY2VUbSB8fCB0aGlzLmNvbnN0cnVjdG9yLnBlcnNpc3RlbmNlVG07XG4gICAgICAgIGlmICggaXMuc3RyaW5nKGFyZ3pbMF0pICkge1xuICAgICAgICAgICAgaWYgKCBjb250ZXh0Ll9fY29udGV4dFtuYW1lXSApXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwiUmVTY29wZTogT3ZlcndyaXRpbmcgYW4gZXhpc3Rpbmcgc3RhdGljIG5hbWVkIHN0b3JlICggJXMgKSAhIVwiLCBuYW1lKTtcbiAgICAgICAgICAgIGNvbnRleHQuX19jb250ZXh0W25hbWVdID0gdGhpcztcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKCBjZmcgJiYgY2ZnLm9uICkge1xuICAgICAgICAgICAgdGhpcy5vbihjZmcub24pO1xuICAgICAgICB9XG4gICAgICAgIC8vIHRoaXMuc3RhdGUgICAgICA9IHRoaXMuc3RhdGUgfHwge307XG4gICAgICAgIFxuICAgICAgICB0aGlzLl91c2UgPSBbLi4ud2F0Y2hzLCAuLi4oX3N0YXRpYy51c2UgfHwgW10pXTtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgXG4gICAgICAgIGlmICggY29udGV4dC5zdG9yZXMgKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRleHRPYmogPSBjb250ZXh0O1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0ICAgID0gY29udGV4dC5zdG9yZXM7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRleHRPYmogPSBuZXcgQ29udGV4dChjb250ZXh0KTtcbiAgICAgICAgICAgIHRoaXMuY29udGV4dCAgICA9IGNvbnRleHQuc3RvcmVzO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgdGhpcy5fc3RhYmxlICA9IHRydWU7XG4gICAgICAgIHRoaXMuX3JldiAgICAgPSAxO1xuICAgICAgICB0aGlzLl9yZXZzICAgID0ge307XG4gICAgICAgIHRoaXMuc3RvcmVzICAgPSB7fTtcbiAgICAgICAgdGhpcy5fcmVxdWlyZSA9IFtdO1xuICAgICAgICBcbiAgICAgICAgaWYgKCBfc3RhdGljLnJlcXVpcmUgKVxuICAgICAgICAgICAgdGhpcy5fcmVxdWlyZS5wdXNoKC4uLl9zdGF0aWMucmVxdWlyZSk7XG4gICAgICAgIGlmICggY2ZnLnJlcXVpcmUgKVxuICAgICAgICAgICAgdGhpcy5fcmVxdWlyZS5wdXNoKC4uLmNmZy5yZXF1aXJlKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX2ZvbGxvd2VycyA9IFtdO1xuICAgICAgICBcbiAgICAgICAgaWYgKCBfc3RhdGljLmRhdGFzICE9PSB1bmRlZmluZWQgKVxuICAgICAgICAgICAgdGhpcy5kYXRhcyA9IHsgLi4uX3N0YXRpYy5kYXRhcyB9O1xuICAgICAgICBpZiAoIGNmZy5oYXNPd25Qcm9wZXJ0eShcImRhdGFzXCIpICYmIGNmZy5kYXRhcyAhPT0gdW5kZWZpbmVkIClcbiAgICAgICAgICAgIHRoaXMuZGF0YXMgPSBjZmcuZGF0YXM7XG4gICAgICAgIGlmICggY2ZnLmhhc093blByb3BlcnR5KFwic3RhdGVcIikgJiYgY2ZnLnN0YXRlICE9PSB1bmRlZmluZWQgKVxuICAgICAgICAgICAgaW5pdGlhbFN0YXRlID0geyAuLi5pbml0aWFsU3RhdGUsIC4uLmNmZy5zdGF0ZSB9O1xuICAgICAgICBcbiAgICAgICAgaWYgKCBhcHBseSApXG4gICAgICAgICAgICB0aGlzLmFwcGx5ID0gYXBwbHk7XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgaWYgKCBpbml0aWFsU3RhdGUgfHwgdGhpcy5fdXNlLmxlbmd0aCApIHsvLyBzeW5jIGFwcGx5XG4gICAgICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgICAgIC4uLihpbml0aWFsU3RhdGUgfHwge30pLFxuICAgICAgICAgICAgICAgIC4uLmNvbnRleHQubWFwKHRoaXMsIHRoaXMuX3VzZSlcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoIHRoaXMuaXNDb21wbGV0ZSgpICYmIHRoaXMuZGF0YXMgPT09IHVuZGVmaW5lZCApXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhcyA9IHRoaXMuYXBwbHkodGhpcy5kYXRhcywgdGhpcy5zdGF0ZSwgdGhpcy5zdGF0ZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fc3RhYmxlID0gdGhpcy5kYXRhcyAhPT0gdW5kZWZpbmVkOy8vIHN0YWJsZSBpZiBpdCBoYXZlIGluaXRpYWwgcmVzdWx0IGRhdGFzXG4gICAgICAgICF0aGlzLl9zdGFibGUgJiYgdGhpcy5lbWl0KCd1bnN0YWJsZScsIHRoaXMuc3RhdGUpO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBnZXQgYSBCdWlsZGVyLWtleSBwYWlyIGZvciBTdG9yZTo6bWFwXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICAgKiBAcmV0dXJucyB7e3N0b3JlOiBTdG9yZSwgbmFtZTogKn19XG4gICAgICovXG4gICAgc3RhdGljIGFzKCBuYW1lICkge1xuICAgICAgICByZXR1cm4geyBzdG9yZTogdGhpcywgbmFtZSB9O1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBNYXAgYWxsIG5hbWVkIHN0b3JlcyBpbiB7a2V5c30gdG8gdGhlIHtvYmplY3R9J3Mgc3RhdGVcbiAgICAgKiBIb29rIGNvbXBvbmVudFdpbGxVbm1vdW50IChmb3IgcmVhY3QgY29tcCkgb3IgZGVzdHJveSB0byB1bkJpbmQgdGhlbSBhdXRvbWF0aWNhbGx5XG4gICAgICogQHN0YXRpY1xuICAgICAqIEBwYXJhbSBvYmplY3Qge1JlYWN0LkNvbXBvbmVudHxTdG9yZXwuLi59IHRhcmdldCBzdGF0ZSBhd2FyZSBvYmplY3RcbiAgICAgKiBAcGFyYW0ga2V5cyB7QXJyYXl9IEV4IDogW1wic2Vzc2lvblwiLCBcIm90aGVyU3RhdGljTmFtZWRTdG9yZTprZXlcIiwgc3RvcmUuYXMoJ2Fub3RoZXJLZXknKV1cbiAgICAgKi9cbiAgICBzdGF0aWMgbWFwKCBjb21wb25lbnQsIGtleXMsIGNvbnRleHQsIG9yaWdpbiwgc2V0SW5pdGlhbCA9IGZhbHNlICkge1xuICAgICAgICB2YXIgdGFyZ2V0UmV2cyAgICAgPSBjb21wb25lbnQuX3JldnMgfHwge307XG4gICAgICAgIHZhciB0YXJnZXRDb250ZXh0ICA9IGNvbXBvbmVudC5zdG9yZXMgfHwgKGNvbXBvbmVudC5zdG9yZXMgPSB7fSk7XG4gICAgICAgIHZhciBpbml0aWFsT3V0cHV0cyA9IHt9O1xuICAgICAgICBrZXlzICAgICAgICAgICAgICAgPSBpcy5hcnJheShrZXlzKSA/IFsuLi5rZXlzXSA6IFtrZXlzXTtcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICBjb250ZXh0ID0gY29udGV4dCB8fCBTdG9yZS5zdGF0aWNDb250ZXh0O1xuICAgICAgICBcbiAgICAgICAgLy8gaWYgKCF0YXJnZXRDb250ZXh0Ll9fY29udGV4dClcbiAgICAgICAgLy8gICAgIGRlYnVnZ2VyO1xuICAgICAgICBcbiAgICAgICAga2V5cyAgICAgICAgICAgPSBrZXlzLmZpbHRlcihcbiAgICAgICAgICAgIC8vIEB0b2RvIDogdXNlIHF1ZXJ5IHJlZnNcbiAgICAgICAgICAgIC8vIChzdG9yZSkoXFwuc3RvcmUpKihcXFsoXFwqfChwcm9wcylcXHcrKSspXFxdKT8oXFw6YWxpYXMpXG4gICAgICAgICAgICAoIGtleSApID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoICFrZXkgKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJOb3QgYSBtYXBwYWJsZSBzdG9yZSBpdGVtICdcIiArIGtleSArIFwiJyBpbiBcIiArIG9yaWdpbiArICcgISEnKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZXQgbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgYWxpYXMsXG4gICAgICAgICAgICAgICAgICAgIHN0b3JlO1xuICAgICAgICAgICAgICAgIGlmICgga2V5LnN0b3JlICYmIGtleS5uYW1lICkge1xuICAgICAgICAgICAgICAgICAgICBhbGlhcyA9IG5hbWUgPSBrZXkubmFtZTtcbiAgICAgICAgICAgICAgICAgICAgc3RvcmUgPSBrZXkuc3RvcmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKCBpcy5mbihrZXkpICkge1xuICAgICAgICAgICAgICAgICAgICBuYW1lID0gYWxpYXMgPSBrZXkubmFtZSB8fCBrZXkuZGVmYXVsdE5hbWU7XG4gICAgICAgICAgICAgICAgICAgIHN0b3JlID0ga2V5O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAga2V5ICAgPSBrZXkubWF0Y2goLyhbXFx3X10rKSg/OlxcOlxcWyhcXCopXFxdKT8oPzpcXDooXFwqKSk/Lyk7XG4gICAgICAgICAgICAgICAgICAgIG5hbWUgID0ga2V5WzBdO1xuICAgICAgICAgICAgICAgICAgICBzdG9yZSA9IGNvbnRleHQuc3RvcmVzW2tleVswXV07XG4gICAgICAgICAgICAgICAgICAgIGFsaWFzID0ga2V5WzFdID09ICcqJyA/IG51bGwgOiBrZXlbMl0gfHwga2V5WzBdOy8vIGFsbG93IGJpbmRpbmcgcHJvcHMgIChbKl0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmICggdGFyZ2V0UmV2c1tuYW1lXSApIHJldHVybiBmYWxzZTsvLyBpZ25vcmUgZGJsIHVzZXMgZm9yIG5vd1xuICAgICAgICAgICAgICAgIGlmICggIXN0b3JlICkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiTm90IGEgbWFwcGFibGUgc3RvcmUgaXRlbSAnXCIgKyBuYW1lICsgXCIvXCIgKyBhbGlhcyArIFwiJyBpbiBcIiArIG9yaWdpbiArICcgISEnLCBzdG9yZSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoIGlzLmZuKHN0b3JlKSApIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5fbW91bnQobmFtZSlcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQuc3RvcmVzW25hbWVdLmJpbmQoY29tcG9uZW50LCBhbGlhcywgc2V0SW5pdGlhbCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIGlmICggY29udGV4dC5fX2NvbnRleHRba2V5WzBdXS5zdGF0ZSApIHsvLyBkbyBzeW5jIHB1c2ggYWZ0ZXIgY29uc3RydWN0b3JcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGNvbnRleHQuX19jb250ZXh0W2tleVswXV0ucHVzaCgpO1xuICAgICAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzdG9yZS5iaW5kKGNvbXBvbmVudCwgYWxpYXMsIHNldEluaXRpYWwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0YXJnZXRSZXZzW2FsaWFzXSA9IHRhcmdldFJldnNbYWxpYXNdIHx8IHRydWU7XG4gICAgICAgICAgICAgICAgIXRhcmdldENvbnRleHRbbmFtZV0gJiYgKHRhcmdldENvbnRleHRbbmFtZV0gPSBjb250ZXh0LnN0b3Jlc1tuYW1lXSk7XG4gICAgICAgICAgICAgICAgaWYgKCBjb250ZXh0LnN0b3Jlc1tuYW1lXS5oYXNPd25Qcm9wZXJ0eSgnZGF0YXMnKSApXG4gICAgICAgICAgICAgICAgICAgIGluaXRpYWxPdXRwdXRzW25hbWVdID0gY29udGV4dC5kYXRhc1tuYW1lXTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgdmFyIG1peGVkQ1dVbm1vdW50LFxuICAgICAgICAgICAgdW5Nb3VudEtleSA9IGNvbXBvbmVudC5pc1JlYWN0Q29tcG9uZW50ID8gXCJjb21wb25lbnRXaWxsVW5tb3VudFwiIDogXCJkZXN0cm95XCI7XG4gICAgICAgIFxuICAgICAgICBpZiAoIGNvbXBvbmVudC5oYXNPd25Qcm9wZXJ0eSh1bk1vdW50S2V5KSApIHtcbiAgICAgICAgICAgIG1peGVkQ1dVbm1vdW50ID0gY29tcG9uZW50W3VuTW91bnRLZXldO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBjb21wb25lbnRbdW5Nb3VudEtleV0gPSAoIC4uLmFyZ3ogKSA9PiB7XG4gICAgICAgICAgICBkZWxldGUgY29tcG9uZW50W3VuTW91bnRLZXldO1xuICAgICAgICAgICAgaWYgKCBtaXhlZENXVW5tb3VudCApXG4gICAgICAgICAgICAgICAgY29tcG9uZW50W3VuTW91bnRLZXldID0gbWl4ZWRDV1VubW91bnQ7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGtleXMubWFwKFxuICAgICAgICAgICAgICAgICgga2V5ICkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWFzLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmU7XG4gICAgICAgICAgICAgICAgICAgIGlmICgga2V5LnN0b3JlICYmIGtleS5uYW1lICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpYXMgPSBuYW1lID0ga2V5Lm5hbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9yZSA9IGtleS5zdG9yZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICggaXMuZm4oa2V5KSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUgPSBhbGlhcyA9IGtleS5uYW1lIHx8IGtleS5kZWZhdWx0TmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlID0gY29udGV4dC5zdG9yZXNbbmFtZV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXkgICA9IGtleS5zcGxpdCgnOicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZSAgPSBrZXlbMF07XG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9yZSA9IGNvbnRleHQuc3RvcmVzW2tleVswXV07XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlhcyA9IGtleVsxXSB8fCBrZXlbMF07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHN0b3JlICYmICFpcy5mbihzdG9yZSkgJiYgc3RvcmUudW5CaW5kKGNvbXBvbmVudCwgYWxpYXMpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHJldHVybiBjb21wb25lbnRbdW5Nb3VudEtleV0gJiYgY29tcG9uZW50W3VuTW91bnRLZXldKC4uLmFyZ3opO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gaW5pdGlhbE91dHB1dHM7XG4gICAgfVxuICAgIFxuICAgIFxuICAgIC8qKlxuICAgICAqIE92ZXJyaWRhYmxlIG1ldGhvZCB0byBrbm93IGlmIGEgc3RhdGUgY2hhbmdlIHNob3VsZCBiZSBwcm9wYWcgdG8gdGhlIGxpc3RlbmluZyBzdG9yZXMgJiBjb21wb25lbnRzXG4gICAgICogSWYgc3RhdGljIGZvbGxvdyBpcyBkZWZpbmVkLCBzaG91bGRQcm9wYWcgd2lsbCByZXR1cm4gdHJ1ZSBpZiBhbnkgb2YgdGhlIFwiZm9sbG93XCIga2V5cyB3YXMgdXBkYXRlZFxuICAgICAqIElmIG5vdCBpdCB3aWxsIGFsd2F5cyByZXR1cm4gdHJ1ZVxuICAgICAqL1xuICAgIHNob3VsZFByb3BhZyggbkRhdGFzICkge1xuICAgICAgICB2YXIgX3N0YXRpYyA9IHRoaXMuY29uc3RydWN0b3IsIHIsXG4gICAgICAgICAgICBjRGF0YXMgID0gdGhpcy5kYXRhcztcbiAgICAgICAgXG4gICAgICAgIC8vIGlmICggIWNTdGF0ZSApXG4gICAgICAgIC8vICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgaWYgKCAhY0RhdGFzICYmICghX3N0YXRpYy5mb2xsb3cgfHwgIV9zdGF0aWMuZm9sbG93Lmxlbmd0aCB8fFxuICAgICAgICAgICAgICAgIF9zdGF0aWMuZm9sbG93ICYmIF9zdGF0aWMuZm9sbG93LnJlZHVjZSgoIHIsIGkgKSA9PiAociB8fCBuRGF0YXMgJiYgbkRhdGFzW2ldKSwgZmFsc2UpKSApXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgXG4gICAgICAgIGlmICggaXMuYXJyYXkoX3N0YXRpYy5mb2xsb3cpIClcbiAgICAgICAgICAgIF9zdGF0aWMuZm9sbG93LmZvckVhY2goXG4gICAgICAgICAgICAgICAgKCBrZXkgKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHIgPSByIHx8IChuRGF0YXMgPyBjRGF0YXNba2V5XSAhPT0gbkRhdGFzW2tleV0gOiBjRGF0YXMgJiYgY0RhdGFzW2tleV0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgZWxzZSBpZiAoIF9zdGF0aWMuZm9sbG93ID09PSAnc3RyaWN0JyApXG4gICAgICAgICAgICByID0gbkRhdGFzID09PSBjRGF0YXM7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY0RhdGFzICYmIE9iamVjdC5rZXlzKGNEYXRhcykuZm9yRWFjaChcbiAgICAgICAgICAgICAgICAoIGtleSApID0+IHtcbiAgICAgICAgICAgICAgICAgICAgciA9IHIgfHwgKG5EYXRhcyA/IGNEYXRhc1trZXldICE9PSBuRGF0YXNba2V5XSA6IGNEYXRhcyAmJiBjRGF0YXNba2V5XSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgbkRhdGFzICYmIE9iamVjdC5rZXlzKG5EYXRhcykuZm9yRWFjaChcbiAgICAgICAgICAgICAgICAoIGtleSApID0+IHtcbiAgICAgICAgICAgICAgICAgICAgciA9IHIgfHwgKG5EYXRhcyA/IGNEYXRhc1trZXldICE9PSBuRGF0YXNba2V5XSA6IGNEYXRhcyAmJiBjRGF0YXNba2V5XSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gISFyO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBPdmVycmlkYWJsZSBhcHBsaWVyIC8gcmVtYXBwZXJcbiAgICAgKiBJZiBzdGF0ZSBvciBsYXN0UHVibGljU3RhdGUgYXJlIHNpbXBsZSBoYXNoIG1hcHMgYXBwbHkgd2lsbCByZXR1cm4gey4uLmRhdGFzLCAuLi5zdGF0ZX1cbiAgICAgKiBpZiBub3QgaXQgd2lsbCByZXR1cm4gdGhlIGxhc3QgcHJpdmF0ZSBzdGF0ZVxuICAgICAqIEBwYXJhbSBkYXRhc1xuICAgICAqIEBwYXJhbSBzdGF0ZVxuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqL1xuICAgIGFwcGx5KCBkYXRhcywgc3RhdGUsIGNoYW5nZXMgKSB7XG4gICAgICAgIHN0YXRlID0gc3RhdGUgfHwgdGhpcy5zdGF0ZTtcbiAgICAgICAgXG4gICAgICAgIGlmICggdGhpcy5yZWZpbmUgKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVmaW5lKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIFxuICAgICAgICBpZiAoICFkYXRhcyB8fCBkYXRhcy5fX3Byb3RvX18gIT09IG9ialByb3RvIHx8IHN0YXRlLl9fcHJvdG9fXyAhPT0gb2JqUHJvdG8gKVxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICByZXR1cm4geyAuLi5kYXRhcywgLi4uc3RhdGUgfVxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBAZGVwcmVjaWF0ZWRcbiAgICAgKiBAcGFyYW0gZGF0YXNcbiAgICAgKiBAcGFyYW0gc3RhdGVcbiAgICAgKiBAcGFyYW0gY2hhbmdlc1xuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqL1xuICAgIHJlZmluZSggZGF0YXMsIHN0YXRlLCBjaGFuZ2VzICkge1xuICAgICAgICBzdGF0ZSA9IHN0YXRlIHx8IHRoaXMuc3RhdGU7XG4gICAgICAgIFxuICAgICAgICBpZiAoICFkYXRhcyB8fCBkYXRhcy5fX3Byb3RvX18gIT09IG9ialByb3RvIHx8IHN0YXRlLl9fcHJvdG9fXyAhPT0gb2JqUHJvdG8gKVxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICByZXR1cm4geyAuLi5kYXRhcywgLi4uc3RhdGUgfVxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBEZWJvdW5jZSB0aGlzIHN0b3JlIHByb3BhZ2F0aW9uICggJiByZWR1Y2luZyApXG4gICAgICogQHBhcmFtIGNiXG4gICAgICovXG4gICAgc3RhYmlsaXplKCBjYiApIHtcbiAgICAgICAgdmFyIG1lID0gdGhpcztcbiAgICAgICAgY2IgJiYgbWUub25jZSgnc3RhYmxlJywgY2IpO1xuICAgICAgICB0aGlzLl9zdGFibGUgJiYgdGhpcy5lbWl0KCd1bnN0YWJsZScsIHRoaXMuc3RhdGUsIHRoaXMuZGF0YXMpO1xuICAgICAgICBcbiAgICAgICAgbWUuX3N0YWJsZSA9IGZhbHNlO1xuICAgICAgICBcbiAgICAgICAgaWYgKCB0aGlzLl9zdGFiaWxpemVyIClcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9zdGFiaWxpemVyKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX3N0YWJpbGl6ZXIgPSBzZXRUaW1lb3V0KFxuICAgICAgICAgICAgdGhpcy5wdXNoLmJpbmQoXG4gICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICgpID0+IHsvL0B0b2RvXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBsZXQgc3RhYmxlID0gbWUuX3N0YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgbWUuX3N0YWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICFzdGFibGUgJiYgdGhpcy5lbWl0KCdzdGFibGUnLCB0aGlzLnN0YXRlLCB0aGlzLmRhdGFzKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc3RhYmlsaXplciA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMucmVsZWFzZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICkpO1xuICAgIH1cbiAgICBcbiAgICBkaXNwYXRjaCggZXZlbnQgKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogUHVsbCBzdG9yZXMgaW4gdGhlIHByaXZhdGUgc3RhdGVcbiAgICAgKiBAcGFyYW0gc3RvcmVzICB7QXJyYXl9IChwYXNzZWQgdG8gU3RvcmU6Om1hcCkgRXggOiBbXCJzZXNzaW9uXCIsIFwib3RoZXJOYW1lZFN0b3JlOmtleVwiLCBvdGhlclN0b3JlLmFzKFwib3RoZXJLZXlcIildXG4gICAgICovXG4gICAgcHVsbCggc3RvcmVzLCBkb1dhaXQsIG9yaWdpbiApIHtcbiAgICAgICAgbGV0IGluaXRpYWxPdXRwdXRzID0gdGhpcy5jb250ZXh0T2JqLm1hcCh0aGlzLCBzdG9yZXMpO1xuICAgICAgICBpZiAoIGRvV2FpdCApIHtcbiAgICAgICAgICAgIHRoaXMud2FpdCgpO1xuICAgICAgICAgICAgc3RvcmVzLmZvckVhY2goKCBzICkgPT4gdGhpcy5jb250ZXh0W3NdICYmIHRoaXMud2FpdCh0aGlzLmNvbnRleHRbc10pKTtcbiAgICAgICAgICAgIHRoaXMucmVsZWFzZSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpbml0aWFsT3V0cHV0cztcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogQXBwbHkgYXBwbHkvcmVtYXAgb24gdGhlIHByaXZhdGUgc3RhdGUgJiBwdXNoIHRoZSByZXN1bHRpbmcgXCJwdWJsaWNcIiBzdGF0ZSB0byBmb2xsb3dlcnNcbiAgICAgKiBAcGFyYW0gY2JcbiAgICAgKi9cbiAgICBwdXNoKCBkYXRhcywgZm9yY2UsIGNiICkge1xuICAgICAgICBjYiAgICAgICAgICAgID0gZm9yY2UgPT09IHRydWUgPyBjYiA6IGZvcmNlO1xuICAgICAgICBmb3JjZSAgICAgICAgID0gZm9yY2UgPT09IHRydWU7XG4gICAgICAgIHZhciBpICAgICAgICAgPSAwLFxuICAgICAgICAgICAgbWUgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIG5leHRTdGF0ZSA9ICFkYXRhcyAmJiB7IC4uLnRoaXMuc3RhdGUsIC4uLnRoaXMuX2NoYW5nZXNTVyB9IHx8IHRoaXMuc3RhdGUsXG4gICAgICAgICAgICBuZXh0RGF0YXMgPSBkYXRhcyB8fFxuICAgICAgICAgICAgICAgICh0aGlzLmlzQ29tcGxldGUobmV4dFN0YXRlKSA/IHRoaXMuYXBwbHkodGhpcy5kYXRhcywgbmV4dFN0YXRlLCB0aGlzLl9jaGFuZ2VzU1cpIDogdGhpcy5kYXRhcyk7XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgdGhpcy5zdGF0ZSA9IG5leHRTdGF0ZTtcbiAgICAgICAgaWYgKCAhZm9yY2UgJiZcbiAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgICAoIXRoaXMuZGF0YXMgJiYgdGhpcy5kYXRhcyA9PT0gbmV4dERhdGFzKSB8fCAhdGhpcy5zaG91bGRQcm9wYWcobmV4dERhdGFzKVxuICAgICAgICAgICAgKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIGNiICYmIGNiKCk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRoaXMuZGF0YXMgPSBuZXh0RGF0YXM7XG4gICAgICAgIC8vdGhpcy5fX2xvY2tzLmFsbCsrO1xuICAgICAgICB0aGlzLndhaXQoY2IpO1xuICAgICAgICB0aGlzLnJlbGVhc2UoY2IpO1xuICAgICAgICBcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogVXBkYXRlIHRoZSBjdXJyZW50IHByaXZhdGUgc3RhdGUgJiBwdXNoIGl0IG9uY2UgdGhlIHN0b3JlIGlzIHN0YWJsZVxuICAgICAqIEBwYXJhbSBwU3RhdGVcbiAgICAgKiBAcGFyYW0gY2JcbiAgICAgKi9cbiAgICBzZXRTdGF0ZSggcFN0YXRlLCBjYiwgc3luYyApIHtcbiAgICAgICAgdmFyIGkgICAgICAgPSAwLCBjaGFuZ2UsXG4gICAgICAgICAgICBjaGFuZ2VzID0gdGhpcy5fY2hhbmdlc1NXID0gdGhpcy5fY2hhbmdlc1NXIHx8IHt9O1xuICAgICAgICBmb3IgKCB2YXIgayBpbiBwU3RhdGUgKVxuICAgICAgICAgICAgaWYgKCAhdGhpcy5zdGF0ZSB8fCBwU3RhdGUuaGFzT3duUHJvcGVydHkoaylcbiAgICAgICAgICAgICAgICAmJiAoXG4gICAgICAgICAgICAgICAgICAgIHBTdGF0ZVtrXSAhPSB0aGlzLnN0YXRlW2tdXG4gICAgICAgICAgICAgICAgICAgIHx8XG4gICAgICAgICAgICAgICAgICAgICh0aGlzLnN0YXRlW2tdICYmIHBTdGF0ZVtrXSAmJiAocFN0YXRlW2tdLl9yZXYgIT0gdGhpcy5fcmV2c1trXSkpLy8gcmV2L2hhc2ggdXBkYXRlXG4gICAgICAgICAgICAgICAgKSApIHtcbiAgICAgICAgICAgICAgICBjaGFuZ2UgICAgICAgID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLl9yZXZzW2tdID0gcFN0YXRlW2tdICYmIHBTdGF0ZVtrXS5fcmV2IHx8IHRydWU7XG4gICAgICAgICAgICAgICAgY2hhbmdlc1trXSAgICA9IHBTdGF0ZVtrXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmICggc3luYyApIHtcbiAgICAgICAgICAgIHRoaXMucHVzaCgpO1xuICAgICAgICAgICAgY2IgJiYgY2IoKTtcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKCBjaGFuZ2UgKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGFiaWxpemUoY2IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBjYiAmJiBjYigpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBVcGRhdGUgdGhlIGN1cnJlbnQgcHJpdmF0ZSBzdGF0ZSAmIHB1c2ggaXQgb25jZSB0aGUgc3RvcmUgaXMgc3RhYmxlXG4gICAgICogQHBhcmFtIHBTdGF0ZVxuICAgICAqIEBwYXJhbSBjYlxuICAgICAqL1xuICAgIHNldFN0YXRlU3luYyggcFN0YXRlICkge1xuICAgICAgICB2YXIgaSAgICAgICA9IDAsIGNoYW5nZSxcbiAgICAgICAgICAgIGNoYW5nZXMgPSB0aGlzLl9jaGFuZ2VzU1cgPSB0aGlzLl9jaGFuZ2VzU1cgfHwge307XG4gICAgICAgIGZvciAoIHZhciBrIGluIHBTdGF0ZSApXG4gICAgICAgICAgICBpZiAoICF0aGlzLnN0YXRlIHx8IHBTdGF0ZS5oYXNPd25Qcm9wZXJ0eShrKVxuICAgICAgICAgICAgICAgICYmIChcbiAgICAgICAgICAgICAgICAgICAgcFN0YXRlW2tdICE9IHRoaXMuc3RhdGVba11cbiAgICAgICAgICAgICAgICAgICAgfHxcbiAgICAgICAgICAgICAgICAgICAgKHRoaXMuc3RhdGVba10gJiYgcFN0YXRlW2tdICYmIChwU3RhdGVba10uX3JldiAhPSB0aGlzLl9yZXZzW2tdKSkvLyByZXYvaGFzaCB1cGRhdGVcbiAgICAgICAgICAgICAgICApICkge1xuICAgICAgICAgICAgICAgIGNoYW5nZSAgICAgICAgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuX3JldnNba10gPSBwU3RhdGVba10gJiYgcFN0YXRlW2tdLl9yZXYgfHwgdHJ1ZTtcbiAgICAgICAgICAgICAgICBjaGFuZ2VzW2tdICAgID0gcFN0YXRlW2tdO1xuICAgICAgICAgICAgfVxuICAgICAgICB0aGlzLnB1c2goKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YXM7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIFJlcGxhY2UgdGhlIGN1cnJlbnQgcHJpdmF0ZSBzdGF0ZSAmIHB1c2ggaXQgb25jZSB0aGUgc3RvcmUgaXMgc3RhYmxlXG4gICAgICogQHBhcmFtIHBTdGF0ZVxuICAgICAqIEBwYXJhbSBjYlxuICAgICAqL1xuICAgIHJlcGxhY2VTdGF0ZSggcFN0YXRlLCBjYiApIHtcbiAgICAgICAgdmFyIGkgICAgICA9IDAsIG1lID0gdGhpcztcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHBTdGF0ZTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuc3RhYmlsaXplKGNiKTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogZ2V0IGEgc3RvcmUta2V5IHBhaXIgZm9yIFN0b3JlOjptYXBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgICAqIEByZXR1cm5zIHt7c3RvcmU6IFN0b3JlLCBuYW1lOiAqfX1cbiAgICAgKi9cbiAgICBhcyggbmFtZSApIHtcbiAgICAgICAgcmV0dXJuIHsgc3RvcmU6IHRoaXMsIG5hbWUgfTtcbiAgICB9XG4gICAgXG4gICAgb24oIGxpc3RzICkge1xuICAgICAgICBpZiAoICFpcy5zdHJpbmcobGlzdHMpICYmIGxpc3RzIClcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGxpc3RzKS5mb3JFYWNoKGsgPT4gc3VwZXIub24oaywgbGlzdHNba10pKTtcbiAgICAgICAgZWxzZSBzdXBlci5vbiguLi5hcmd1bWVudHMpO1xuICAgIH1cbiAgICBcbiAgICByZW1vdmVMaXN0ZW5lciggbGlzdHMgKSB7XG4gICAgICAgIGlmICggIWlzLnN0cmluZyhsaXN0cykgJiYgbGlzdHMgKVxuICAgICAgICAgICAgT2JqZWN0LmtleXMobGlzdHMpLmZvckVhY2goayA9PiBzdXBlci5yZW1vdmVMaXN0ZW5lcihrLCBsaXN0c1trXSkpO1xuICAgICAgICBlbHNlIHN1cGVyLnJlbW92ZUxpc3RlbmVyKC4uLmFyZ3VtZW50cyk7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIHJlbGluayBiaW5kaW5ncyAmIHJlcXVpcmVzXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICAgKiBAcmV0dXJucyB7e3N0b3JlOiBTdG9yZSwgbmFtZTogKn19XG4gICAgICovXG4gICAgcmVsaW5rKCBmcm9tICkge1xuICAgICAgICBsZXQgY29udGV4dCA9IHRoaXMuY29udGV4dE9iaixcbiAgICAgICAgICAgIF9zdGF0aWMgPSB0aGlzLmNvbnN0cnVjdG9yO1xuICAgICAgICBpZiAoIF9zdGF0aWMudXNlICkge1xuICAgICAgICAgICAgLy90b2RvIHVubGlua1xuICAgICAgICAgICAgdGhpcy5wdWxsKF9zdGF0aWMudXNlLCBmYWxzZSwgZnJvbSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmICggdGhpcy5fcmVxdWlyZSApIHtcbiAgICAgICAgICAgIHRoaXMuX3JlcXVpcmUuZm9yRWFjaChcbiAgICAgICAgICAgICAgICBzdG9yZSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2FpdChjb250ZXh0Ll9fY29udGV4dFtzdG9yZV0pXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBpcyBjb21wbGV0ZSAoYWxsIHJlcXVpZXJlZCBrZXlzIGFyZSBoZXJlKVxuICAgICAqIEByZXR1cm5zIGJvb2xcbiAgICAgKi9cbiAgICBpc0NvbXBsZXRlKCBzdGF0ZSA9IHRoaXMuc3RhdGUgKSB7XG4gICAgICAgIHZhciBfc3RhdGljID0gdGhpcy5jb25zdHJ1Y3RvcjtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICF0aGlzLl9yZXF1aXJlXG4gICAgICAgICAgICB8fCAhdGhpcy5fcmVxdWlyZS5sZW5ndGhcbiAgICAgICAgICAgIHx8IHN0YXRlICYmIHRoaXMuX3JlcXVpcmUucmVkdWNlKFxuICAgICAgICAgICAgICAgICggciwga2V5ICkgPT4gKHIgJiYgc3RhdGVba2V5XSksXG4gICAgICAgICAgICAgICAgdHJ1ZVxuICAgICAgICAgICAgKVxuICAgICAgICApO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBpcyBzdGFibGVcbiAgICAgKiBAcmV0dXJucyBib29sXG4gICAgICovXG4gICAgaXNTdGFibGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zdGFibGU7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIFVuIGJpbmQgdGhpcyBzdG9yZSBvZmYgdGhlIGdpdmVuIGNvbXBvbmVudC1rZXlcbiAgICAgKiBAcGFyYW0gb2JqXG4gICAgICogQHBhcmFtIGtleVxuICAgICAqIEByZXR1cm5zIHtBcnJheS48Kj59XG4gICAgICovXG4gICAgdW5CaW5kKCBvYmosIGtleSApIHtcbiAgICAgICAgdmFyIGZvbGxvd2VycyA9IHRoaXMuX2ZvbGxvd2VycyxcbiAgICAgICAgICAgIGkgICAgICAgICA9IGZvbGxvd2VycyAmJiBmb2xsb3dlcnMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGZvbGxvd2VycyAmJiBpLS0gKVxuICAgICAgICAgICAgaWYgKCBmb2xsb3dlcnNbaV1bMF0gPT0gb2JqICYmIGZvbGxvd2Vyc1tpXVsxXSA9PSBrZXkgKVxuICAgICAgICAgICAgICAgIHJldHVybiBmb2xsb3dlcnMuc3BsaWNlKGksIDEpO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBCaW5kIHRoaXMgc3RvcmUgY2hhbmdlcyB0byB0aGUgZ2l2ZW4gY29tcG9uZW50LWtleVxuICAgICAqIEBwYXJhbSBvYmoge1JlYWN0LkNvbXBvbmVudHxTdG9yZXxmdW5jdGlvbilcbiAgICAgKiBAcGFyYW0ga2V5IHtzdHJpbmd9IG9wdGlvbmFsIGtleSB3aGVyZSB0byBtYXAgdGhlIHB1YmxpYyBzdGF0ZVxuICAgICAqL1xuICAgIGJpbmQoIG9iaiwga2V5LCBzZXRJbml0aWFsID0gdHJ1ZSApIHtcbiAgICAgICAgdGhpcy5fZm9sbG93ZXJzLnB1c2goW29iaiwga2V5XSk7XG4gICAgICAgIGlmICggc2V0SW5pdGlhbCAmJiB0aGlzLmRhdGFzICYmIHRoaXMuX3N0YWJsZSApIHtcbiAgICAgICAgICAgIGlmICggdHlwZW9mIG9iaiAhPSBcImZ1bmN0aW9uXCIgKSB7XG4gICAgICAgICAgICAgICAgaWYgKCBrZXkgKSBvYmouc2V0U3RhdGUoeyBba2V5XTogdGhpcy5kYXRhcyB9KTtcbiAgICAgICAgICAgICAgICBlbHNlIG9iai5zZXRTdGF0ZSh0aGlzLmRhdGFzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIG9iaih0aGlzLmRhdGFzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBvbmNlKCdzdGFibGUnLCBjYilcbiAgICAgKiBAcGFyYW0gb2JqIHtSZWFjdC5Db21wb25lbnR8U3RvcmV8ZnVuY3Rpb24pXG4gICAgICogQHBhcmFtIGtleSB7c3RyaW5nfSBvcHRpb25hbCBrZXkgd2hlcmUgdG8gbWFwIHRoZSBwdWJsaWMgc3RhdGVcbiAgICAgKi9cbiAgICB0aGVuKCBjYiApIHtcbiAgICAgICAgaWYgKCB0aGlzLl9zdGFibGUgKVxuICAgICAgICAgICAgcmV0dXJuIGNiKG51bGwsIHRoaXMuZGF0YXMpO1xuICAgICAgICB0aGlzLm9uY2UoJ3N0YWJsZScsIGUgPT4gY2IobnVsbCwgdGhpcy5kYXRhcykpO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBBZGQgYSBsb2NrIHNvIHRoZSBzdG9yZSB3aWxsIG5vdCBwcm9wYWcgaXQgc3RhdGUgdW50aWxsIHJlbGVhc2UoKSBpcyBjYWxsXG4gICAgICogQHBhcmFtIHByZXZpb3VzIHtTdG9yZXxudW1iZXJ8QXJyYXl9IEBvcHRpb25hbCB3ZiB0byB3YWl0LCByZWxlYXNlcyB0byB3YWl0IG9yIGFycmF5IG9mIHN0dWZmIHRvIHdhaXRcbiAgICAgKiBAcmV0dXJucyB7VGFza0Zsb3d9XG4gICAgICovXG4gICAgd2FpdCggcHJldmlvdXMgKSB7XG4gICAgICAgIGlmICggdHlwZW9mIHByZXZpb3VzID09IFwibnVtYmVyXCIgKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX19sb2Nrcy5hbGwgKz0gcHJldmlvdXM7XG4gICAgICAgIGlmICggaXMuYXJyYXkocHJldmlvdXMpIClcbiAgICAgICAgICAgIHJldHVybiBwcmV2aW91cy5tYXAodGhpcy53YWl0LmJpbmQodGhpcykpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fc3RhYmxlICYmIHRoaXMuZW1pdCgndW5zdGFibGUnLCB0aGlzLnN0YXRlLCB0aGlzLmRhdGFzKTtcbiAgICAgICAgdGhpcy5fc3RhYmxlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX19sb2Nrcy5hbGwrKztcbiAgICAgICAgXG4gICAgICAgIGxldCByZWFzb24gPSBpcy5zdHJpbmcocHJldmlvdXMpID8gcHJldmlvdXMgOiBudWxsO1xuICAgICAgICBpZiAoIHJlYXNvbiApIHtcbiAgICAgICAgICAgIHRoaXMuX19sb2Nrc1tyZWFzb25dID0gdGhpcy5fX2xvY2tzW3JlYXNvbl0gfHwgMDtcbiAgICAgICAgICAgIHRoaXMuX19sb2Nrc1tyZWFzb25dKys7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCBwcmV2aW91cyAmJiBpcy5mbihwcmV2aW91cy50aGVuKSApIHtcbiAgICAgICAgICAgIHByZXZpb3VzLnRoZW4odGhpcy5yZWxlYXNlLmJpbmQodGhpcywgbnVsbCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBEZWNyZWFzZSBsb2NrcyBmb3IgdGhpcyBzdG9yZSwgaWYgaXQgcmVhY2ggMCAmIGl0IGhhdmUgYSBwdWJsaWMgc3RhdGUsXG4gICAgICogaXQgd2lsbCBiZSBwcm9wYWdhdGVkIHRvIHRoZSBmb2xsb3dlcnMsXG4gICAgICogdGhlbiwgYWxsIHN0dWZmIHBhc3NlZCB0byBcInRoZW5cIiBjYWxsIGJhY2sgd2lsbCBiZSBleGVjIC8gcmVsZWFzZWRcbiAgICAgKiBAcGFyYW0gZGVzeW5jXG4gICAgICogQHJldHVybnMgeyp9XG4gICAgICovXG4gICAgcmVsZWFzZSggcmVhc29uLCBjYiApIHtcbiAgICAgICAgdmFyIF9zdGF0aWMgPSB0aGlzLmNvbnN0cnVjdG9yO1xuICAgICAgICBsZXQgaSAgICAgICA9IDAsIHdhc1N0YWJsZSA9IHRoaXMuX3N0YWJsZTtcbiAgICAgICAgXG4gICAgICAgIGlmICggaXMuZm4ocmVhc29uKSApIHtcbiAgICAgICAgICAgIGNiICAgICA9IHJlYXNvbjtcbiAgICAgICAgICAgIHJlYXNvbiA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmICggcmVhc29uICkge1xuICAgICAgICAgICAgaWYgKCB0aGlzLl9fbG9ja3NbcmVhc29uXSA9PSAwIClcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiUmVsZWFzZSBtb3JlIHRoYW4gbG9ja2luZyAhXCIsIHJlYXNvbik7XG4gICAgICAgICAgICB0aGlzLl9fbG9ja3NbcmVhc29uXSA9IHRoaXMuX19sb2Nrc1tyZWFzb25dIHx8IDA7XG4gICAgICAgICAgICB0aGlzLl9fbG9ja3NbcmVhc29uXS0tO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAoICFyZWFzb24gJiYgdGhpcy5fX2xvY2tzLmFsbCA9PSAwIClcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJSZWxlYXNlIG1vcmUgdGhhbiBsb2NraW5nICFcIik7XG4gICAgICAgIFxuICAgICAgICBpZiAoICEtLXRoaXMuX19sb2Nrcy5hbGwgJiYgdGhpcy5kYXRhcyAmJiB0aGlzLmlzQ29tcGxldGUoKSApIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YWJsZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLl9yZXYgICAgPSAxICsgKHRoaXMuX3JldiArIDEpICUgMTAwMDAwMDsvL1xuICAgICAgICAgICAgaWYgKCB0aGlzLl9mb2xsb3dlcnMubGVuZ3RoIClcbiAgICAgICAgICAgICAgICB0aGlzLl9mb2xsb3dlcnMuZm9yRWFjaCgoIGZvbGxvd2VyICkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoICF0aGlzLmRhdGFzICkgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIHR5cGVvZiBmb2xsb3dlclswXSA9PSBcImZ1bmN0aW9uXCIgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb2xsb3dlclswXSh0aGlzLmRhdGFzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY2IgJiYgaSsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9sbG93ZXJbMF0uc2V0U3RhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGZvbGxvd2VyWzFdKSA/IHsgW2ZvbGxvd2VyWzFdXTogdGhpcy5kYXRhcyB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdGhpcy5kYXRhc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vY2IgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICgpID0+ICghKC0taSkgJiYgY2IoKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLylcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vZWxzZVxuICAgICAgICAgICAgIXdhc1N0YWJsZSAmJiB0aGlzLmVtaXQoJ3N0YWJsZScsIHRoaXMuZGF0YXMpO1xuICAgICAgICAgICAgdGhpcy5lbWl0KCd1cGRhdGUnLCB0aGlzLmRhdGFzKTtcbiAgICAgICAgICAgIGNiICYmIGNiKClcbiAgICAgICAgICAgIC8vXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBjYiAmJiB0aGlzLnRoZW4oY2IpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgXG4gICAgcmV0YWluKCByZWFzb24gKSB7XG4gICAgICAgIHRoaXMuX19yZXRhaW5zLmFsbCsrO1xuICAgICAgICBpZiAoIHJlYXNvbiApIHtcbiAgICAgICAgICAgIHRoaXMuX19yZXRhaW5zW3JlYXNvbl0gPSB0aGlzLl9fcmV0YWluc1tyZWFzb25dIHx8IDA7XG4gICAgICAgICAgICB0aGlzLl9fcmV0YWluc1tyZWFzb25dKys7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgZGlzcG9zZSggcmVhc29uICkge1xuICAgICAgICAvL2NvbnNvbGUud2FybihcImRpc3Bvc2VcIiwgcmVhc29uLCB0aGlzLl9fcmV0YWlucyk7XG4gICAgICAgIGlmICggcmVhc29uICkge1xuICAgICAgICAgICAgaWYgKCAhdGhpcy5fX3JldGFpbnNbcmVhc29uXSApXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRGlzcG9zZSBtb3JlIHRoYW4gcmV0YWluaW5nICFcIik7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMuX19yZXRhaW5zW3JlYXNvbl0gPSB0aGlzLl9fcmV0YWluc1tyZWFzb25dIHx8IDA7XG4gICAgICAgICAgICB0aGlzLl9fcmV0YWluc1tyZWFzb25dLS07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCB0aGlzLl9fcmV0YWlucy5hbGwgPT0gMCApXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJEaXNwb3NlIG1vcmUgdGhhbiByZXRhaW5pbmcgIVwiKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX19yZXRhaW5zLmFsbC0tO1xuICAgICAgICBcbiAgICAgICAgaWYgKCAhdGhpcy5fX3JldGFpbnMuYWxsICkge1xuICAgICAgICAgICAgaWYgKCB0aGlzLl9wZXJzaXN0ZW5jZVRtICkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2Rlc3Ryb3lUTSAmJiBjbGVhclRpbWVvdXQodGhpcy5fZGVzdHJveVRNKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9kZXN0cm95VE0gPSBzZXRUaW1lb3V0KFxuICAgICAgICAgICAgICAgICAgICBlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2Rlc3Ryb3lUTSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRoZW4ocyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIXRoaXMuX19yZXRhaW5zLmFsbCAmJiB0aGlzLmRlc3Ryb3koKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3BlcnNpc3RlbmNlVG1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy50aGVuKHMgPT4gKCF0aGlzLl9fcmV0YWlucy5hbGwgJiYgdGhpcy5kZXN0cm95KCkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBkZXN0cm95KCkge1xuICAgICAgICAvLyAgY29uc29sZS5sb2coXCJkZXN0cm95XCIsIHRoaXMuX3VpZCk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmVtaXQoJ2Rlc3Ryb3knLCB0aGlzKTtcbiAgICAgICAgaWYgKCB0aGlzLl9zdGFiaWxpemVyIClcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9zdGFiaWxpemVyKTtcbiAgICAgICAgXG4gICAgICAgIGlmICggdGhpcy5fZm9sbG93ZXJzLmxlbmd0aCApXG4gICAgICAgICAgICB0aGlzLl9mb2xsb3dlcnMuZm9yRWFjaChcbiAgICAgICAgICAgICAgICAoIGZvbGxvd2VyICkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIHR5cGVvZiBmb2xsb3dlclswXSAhPT0gXCJmdW5jdGlvblwiICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBmb2xsb3dlclswXS5zdG9yZXMgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBmb2xsb3dlclswXS5zdG9yZXNbZm9sbG93ZXJbMV1dO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgdGhpcy5fZm9sbG93ZXJzLmxlbmd0aCA9IDA7XG4gICAgICAgIHRoaXMuZGVhZCAgICAgICAgICAgICAgPSB0cnVlO1xuICAgICAgICB0aGlzLl9yZXZzICAgICAgICAgICAgID0gdGhpcy5kYXRhcyA9IHRoaXMuc3RhdGUgPSB0aGlzLmNvbnRleHQgPSBudWxsO1xuICAgICAgICB0aGlzLnJlbW92ZUFsbExpc3RlbmVycygpO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvU3RvcmUuanMiXSwic291cmNlUm9vdCI6IiJ9