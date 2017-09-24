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
	
	var _Store = __webpack_require__(7);
	
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
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
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
	
	var isString = __webpack_require__(2),
	    isArray = __webpack_require__(3),
	    EventEmitter = __webpack_require__(4),
	    isFunction = __webpack_require__(5),
	    shortid = __webpack_require__(6),
	    __proto__push = function __proto__push(target, id, parent) {
	    var here = _defineProperty({}, id, function () {});
	    here[id].prototype = parent ? new parent["_" + id]() : target[id] || {};
	    target[id] = new here[id]();
	    target['_' + id] = here[id];
	};
	
	var openContexts = {};
	
	var Context = function (_EventEmitter) {
	    _inherits(Context, _EventEmitter);
	
	    function Context(ctx) {
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
	
	            openContexts[id].register(ctx);
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
	
	        _this.register(ctx, state, datas);
	        _this.__locks.all--;
	        _this._stable = !_this.__locks.all;
	
	        if (autoDestroy) setTimeout(function (tm) {
	            _this.retain("autoDestroy");
	            _this.dispose("autoDestroy");
	        });
	        return _this;
	    }
	
	    _createClass(Context, [{
	        key: 'mount',
	        value: function mount(id, state, datas) {
	            var _this2 = this;
	
	            if (isArray(id)) {
	                id.forEach(function (k) {
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
	            //console.warn("mount on ", this._id, ' ', id, isFunction(store));
	            if (isFunction(store)) {
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
	            if (!this.__listening[id] && !isFunction(this.__context[id])) {
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
	    }, {
	        key: 'register',
	        value: function register(rawCtx) {
	            var _this5 = this;
	
	            var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	            var datas = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	
	            this.relink(rawCtx, this, false, state, datas);
	            Object.keys(rawCtx).forEach(function (id) {
	                return isFunction(rawCtx[id]) && rawCtx[id].singleton && _this5._mount(id, state[id], datas[id]);
	            });
	            //this.stores.__proto__ = this._stores.prototype;
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
	                    if (!external && !isFunction(targetCtx.__context[id])) {
	                        console.info("Rescope Store : ", id, " already exist in this context ! ( try __proto__ hot patch )");
	                        targetCtx.__context[id].__proto__ = srcCtx[id].prototype;
	                    }
	                    if (!external && isFunction(targetCtx.__context[id])) targetCtx.__context[id] = srcCtx[id];
	
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
	         * @param obj {React.Component|Store|function)
	         * @param key {string} optional key where to map the public state
	         */
	
	    }, {
	        key: 'bind',
	        value: function bind(obj, key, as) {
	            var setInitial = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
	
	            var lastRevs = void 0,
	                datas = void 0;
	            if (key && !isArray(key)) key = [key];
	
	            // key = key||
	
	            if (as === false || as === true) {
	                setInitial = as;
	                as = null;
	            }
	
	            this._followers.push([obj, key, as || undefined, lastRevs = key && key.reduce(function (revs, id) {
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
	    }, {
	        key: 'map',
	        value: function map(to, stores) {
	            var _this7 = this;
	
	            var bind = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
	
	            var Store = this.constructor.Store;
	            stores = isArray(stores) ? stores : [stores];
	            this.mount(stores);
	            if (bind && to instanceof Store) {
	                Store.map(to, stores, this, this, false);
	            } else if (bind) {
	                this.bind(to, stores, undefined, false);
	
	                var mixedCWUnmount = void 0,
	                    unMountKey = to.isReactComponent ? "componentWillUnmount" : "destroy";
	
	                if (to.hasOwnProperty(unMountKey)) {
	                    mixedCWUnmount = to[unMountKey];
	                }
	
	                to[unMountKey] = function () {
	                    delete to[unMountKey];
	                    if (mixedCWUnmount) to[unMountKey] = mixedCWUnmount;
	
	                    _this7.unBind(to, stores);
	                };
	            }
	            return stores.reduce(function (datas, id) {
	                return datas[id] = _this7.stores[id] && _this7.stores[id].datas, datas;
	            }, {});
	        }
	    }, {
	        key: 'getStoresRevs',
	        value: function getStoresRevs() {
	            var stores = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	            var local = arguments[1];
	
	            var ctx = this.__context;
	            if (!stores) {
	                stores = {};
	            }
	            Object.keys(ctx).forEach(function (id) {
	                if (!isFunction(ctx[id])) {
	                    stores[id] = ctx[id]._rev;
	                } else if (!stores.hasOwnProperty(id)) stores[id] = false;
	            });
	            if (!local) {
	                this.__mixed.reduce(function (updated, ctx) {
	                    return ctx.getStoresRevs(stores), stores;
	                }, stores);
	                this.parent && this.parent.getStoresRevs(stores);
	            }
	            return stores;
	        }
	    }, {
	        key: 'getUpdates',
	        value: function getUpdates(revs, output, updated) {
	            var _this8 = this;
	
	            var ctx = this.__context;
	
	            output = output || {};
	            Object.keys(ctx).forEach(function (id) {
	                if (!output[id] && (!revs || revs.hasOwnProperty(id) && revs[id] === undefined || !(!revs.hasOwnProperty(id) || ctx[id]._rev <= revs[id]))) {
	
	                    updated = true;
	
	                    output[id] = _this8.datas[id];
	                    if (revs && revs[id] !== undefined) revs[id] = ctx[id]._rev;
	                }
	            });
	            updated = this.__mixed.reduce(function (updated, ctx) {
	                return ctx.getUpdates(revs, output, updated) || updated;
	            }, updated);
	            updated = this.parent && this.parent.getUpdates(revs, output, updated) || updated;
	            return updated && output;
	        }
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
	            if (isArray(flags_states)) flags_states.forEach(function (id) {
	                return output.state[id] = _this9.state[id];
	            });
	
	            if (isArray(flags_datas)) flags_datas.forEach(function (id) {
	                return output.datas[id] = _this9.datas[id];
	            });
	
	            if (!isArray(flags_datas) && !isArray(flags_states)) Object.keys(ctx).forEach(function (id) {
	                if (isFunction(ctx[id])) return;
	
	                var flags = ctx[id].constructor.flags;
	
	                flags = isArray(flags) ? flags : [flags || ""];
	
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
	
	            if (!isString(lists) && lists) Object.keys(lists).forEach(function (k) {
	                return _get(Context.prototype.__proto__ || Object.getPrototypeOf(Context.prototype), 'on', _this10).call(_this10, k, lists[k]);
	            });else _get(Context.prototype.__proto__ || Object.getPrototypeOf(Context.prototype), 'on', this).apply(this, arguments);
	        }
	    }, {
	        key: 'removeListener',
	        value: function removeListener(lists) {
	            var _this11 = this;
	
	            if (!isString(lists) && lists) Object.keys(lists).forEach(function (k) {
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
	                if (!isFunction(ctx[key])) {
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
	    }], [{
	        key: 'getContext',
	        value: function getContext(contexts) {
	            var skey = isArray(contexts) ? contexts.sort(function (a, b) {
	                if (a.firstname < b.firstname) return -1;
	                if (a.firstname > b.firstname) return 1;
	                return 0;
	            }).join('::') : contexts;
	            return openContexts[skey] = openContexts[skey] || new Context({}, { id: skey });
	        }
	    }]);
	
	    return Context;
	}(EventEmitter);
	
	Context.contexts = openContexts;
	Context.Store = null;
	Context.defaultMaxListeners = 100;
	Context.persistenceTm = 0;
	exports.default = Context;
	module.exports = exports['default'];

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = require("isstring");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	module.exports = require("isarray");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	module.exports = require("events");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	module.exports = require("isfunction");

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
	
	var isString = __webpack_require__(2),
	    isArray = __webpack_require__(3),
	    isFunction = __webpack_require__(5),
	    Context = __webpack_require__(1),
	    EventEmitter = __webpack_require__(4),
	    shortid = __webpack_require__(6),
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
	            context = !isArray(argz[0]) && !isString(argz[0]) ? argz.shift() : _static.staticContext,
	            cfg = argz[0] && !isArray(argz[0]) && !isString(argz[0]) ? argz.shift() : {},
	            name = isString(argz[0]) ? argz[0] : cfg.name || _static.name,
	            watchs = isArray(argz[0]) ? argz.shift() : cfg.use || [],
	            // watchs need to be defined after all the store are registered : so we can't deal with any "static use" automaticly
	        apply = isFunction(argz[0]) ? argz.shift() : cfg.apply || null,
	            initialState = _static.state || _static.initialState;
	
	        _this._uid = cfg._uid || shortid.generate();
	        _this._maxListeners = cfg.defaultMaxListeners || Store.defaultMaxListeners;
	
	        _this.__retains = { all: 0 };
	        _this.__locks = { all: 0 };
	        _this._onStabilize = [];
	
	        _this._persistenceTm = cfg.persistenceTm || _this.constructor.persistenceTm;
	        if (isString(argz[0])) {
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
	
	            if (isArray(_static.follow)) _static.follow.forEach(function (key) {
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
	
	            if (!isString(lists) && lists) Object.keys(lists).forEach(function (k) {
	                return _get(Store.prototype.__proto__ || Object.getPrototypeOf(Store.prototype), 'on', _this4).call(_this4, k, lists[k]);
	            });else _get(Store.prototype.__proto__ || Object.getPrototypeOf(Store.prototype), 'on', this).apply(this, arguments);
	        }
	    }, {
	        key: 'removeListener',
	        value: function removeListener(lists) {
	            var _this5 = this;
	
	            if (!isString(lists) && lists) Object.keys(lists).forEach(function (k) {
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
	            if (isArray(previous)) return previous.map(this.wait.bind(this));
	
	            this._stable && this.emit('unstable', this.state, this.datas);
	            this._stable = false;
	            this.__locks.all++;
	
	            var reason = isString(previous) ? previous : null;
	            if (reason) {
	                this.__locks[reason] = this.__locks[reason] || 0;
	                this.__locks[reason]++;
	            }
	            if (previous && isFunction(previous.then)) {
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
	
	            if (isFunction(reason)) {
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
	            keys = isArray(keys) ? [].concat(_toConsumableArray(keys)) : [keys];
	
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
	                } else if (isFunction(key)) {
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
	                } else if (isFunction(store)) {
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
	                // todo hop
	                delete this[unMountKey];
	                if (mixedCWUnmount) this[unMountKey] = mixedCWUnmount;
	                keys.map(function (key) {
	                    var name = void 0,
	                        alias = void 0,
	                        store = void 0;
	                    if (key.store && key.name) {
	                        alias = name = key.name;
	                        store = key.store;
	                    } else if (isFunction(key)) {
	                        name = alias = key.name || key.defaultName;
	                        store = context.stores[name];
	                    } else {
	                        key = key.split(':');
	                        name = key[0];
	                        store = context.stores[key[0]];
	                        alias = key[1] || key[0];
	                    }
	
	                    store && !isFunction(store) && store.unBind(component, alias);
	                });
	                return this[unMountKey] && this[unMountKey].apply(this, arguments);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgODEwZDc3ZDFlOTlkZWRlZTFkMWMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Jlc2NvcGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbnRleHQuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaXNzdHJpbmdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpc2FycmF5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXZlbnRzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaXNmdW5jdGlvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInNob3J0aWRcIiIsIndlYnBhY2s6Ly8vLi9zcmMvU3RvcmUuanMiXSwibmFtZXMiOlsiU3RvcmUiLCJDb250ZXh0IiwiaXNTdHJpbmciLCJyZXF1aXJlIiwiaXNBcnJheSIsIkV2ZW50RW1pdHRlciIsImlzRnVuY3Rpb24iLCJzaG9ydGlkIiwiX19wcm90b19fcHVzaCIsInRhcmdldCIsImlkIiwicGFyZW50IiwiaGVyZSIsInByb3RvdHlwZSIsIm9wZW5Db250ZXh0cyIsImN0eCIsInN0YXRlIiwiZGF0YXMiLCJuYW1lIiwiZGVmYXVsdE1heExpc3RlbmVycyIsInBlcnNpc3RlbmNlVG0iLCJhdXRvRGVzdHJveSIsIl9tYXhMaXN0ZW5lcnMiLCJjb25zdHJ1Y3RvciIsIl9pZCIsImdlbmVyYXRlIiwicmVnaXN0ZXIiLCJfaXNMb2NhbElkIiwiX3BlcnNpc3RlbmNlVG0iLCJzdG9yZXMiLCJfYWRkQ2hpbGQiLCJzb3VyY2VzIiwiX2NoaWxkQ29udGV4dHMiLCJfX3JldGFpbnMiLCJhbGwiLCJfX2xvY2tzIiwiX19saXN0ZW5pbmciLCJfX2NvbnRleHQiLCJfX21peGVkIiwiX19taXhlZExpc3QiLCJfZm9sbG93ZXJzIiwicmV0YWluIiwiX3N0YWJsZSIsIndhaXQiLCJvbiIsIl9fcGFyZW50TGlzdCIsInJlbGVhc2UiLCJfcHJvcGFnIiwic2V0VGltZW91dCIsImRpc3Bvc2UiLCJmb3JFYWNoIiwiX21vdW50IiwiayIsImFyZ3VtZW50cyIsInJlZHVjZSIsIm1vdW50ZWQiLCJzdG9yZSIsInVuZGVmaW5lZCIsInNldFN0YXRlIiwicHVzaCIsIl93YXRjaFN0b3JlIiwiaXNTdGFibGUiLCJwcm9wYWciLCJ0YXJnZXRDdHgiLCJsaXN0cyIsInJlbGluayIsInJhd0N0eCIsIk9iamVjdCIsImtleXMiLCJzaW5nbGV0b24iLCJzcmNDdHgiLCJleHRlcm5hbCIsImxjdHgiLCJfc3RvcmVzIiwiY29uc29sZSIsImluZm8iLCJfX3Byb3RvX18iLCJkZWZpbmVQcm9wZXJ0eSIsImdldCIsIl9zdGF0ZSIsInNldCIsInYiLCJfZGF0YXMiLCJvYmoiLCJrZXkiLCJhcyIsInNldEluaXRpYWwiLCJsYXN0UmV2cyIsInJldnMiLCJtb3VudCIsImdldFVwZGF0ZXMiLCJmb2xsb3dlcnMiLCJpIiwibGVuZ3RoIiwic3BsaWNlIiwidG8iLCJiaW5kIiwibWFwIiwibWl4ZWRDV1VubW91bnQiLCJ1bk1vdW50S2V5IiwiaXNSZWFjdENvbXBvbmVudCIsImhhc093blByb3BlcnR5IiwidW5CaW5kIiwibG9jYWwiLCJfcmV2IiwidXBkYXRlZCIsImdldFN0b3Jlc1JldnMiLCJvdXRwdXQiLCJmbGFnc19zdGF0ZXMiLCJmbGFnc19kYXRhcyIsIl9mbGFnc19zdGF0ZXMiLCJfZmxhZ3NfZGF0YXMiLCJmbGFncyIsInIiLCJmbGFnIiwidGVzdCIsImNiIiwib25jZSIsInF1aWV0IiwicmVhc29uIiwiZW1pdCIsImVycm9yIiwiX3N0YWJpbGl6ZXJUTSIsImNsZWFyVGltZW91dCIsIl9wcm9wYWdUTSIsImNoaWxkcyIsIl9nZXRBbGxDaGlsZHMiLCJpbmRleE9mIiwiRXJyb3IiLCJfZGVzdHJveVRNIiwidGhlbiIsImRlc3Ryb3kiLCJyZW1vdmVMaXN0ZW5lciIsImNvbnRleHRPYmoiLCJzaGlmdCIsIl9ybUNoaWxkIiwiY29udGV4dHMiLCJza2V5Iiwic29ydCIsImEiLCJiIiwiZmlyc3RuYW1lIiwiam9pbiIsIm9ialByb3RvIiwiZ2V0UHJvdG90eXBlT2YiLCJhcmd6IiwiX3N0YXRpYyIsImNvbnRleHQiLCJzdGF0aWNDb250ZXh0IiwiY2ZnIiwid2F0Y2hzIiwidXNlIiwiYXBwbHkiLCJpbml0aWFsU3RhdGUiLCJfdWlkIiwiX29uU3RhYmlsaXplIiwid2FybiIsIl91c2UiLCJfcmV2cyIsIl9yZXF1aXJlIiwiaXNDb21wbGV0ZSIsIm5EYXRhcyIsImNEYXRhcyIsImZvbGxvdyIsImNoYW5nZXMiLCJyZWZpbmUiLCJtZSIsIl9zdGFiaWxpemVyIiwiZXZlbnQiLCJkb1dhaXQiLCJvcmlnaW4iLCJpbml0aWFsT3V0cHV0cyIsInMiLCJmb3JjZSIsIm5leHRTdGF0ZSIsIl9jaGFuZ2VzU1ciLCJuZXh0RGF0YXMiLCJzaG91bGRQcm9wYWciLCJwU3RhdGUiLCJzeW5jIiwiY2hhbmdlIiwic3RhYmlsaXplIiwiZnJvbSIsInB1bGwiLCJwcmV2aW91cyIsIndhc1N0YWJsZSIsImZvbGxvd2VyIiwiZGVhZCIsInJlbW92ZUFsbExpc3RlbmVycyIsImNvbXBvbmVudCIsInRhcmdldFJldnMiLCJ0YXJnZXRDb250ZXh0IiwiZmlsdGVyIiwiYWxpYXMiLCJkZWZhdWx0TmFtZSIsIm1hdGNoIiwic3BsaXQiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQzVCQTs7OztBQUNBOzs7Ozs7QUFYQTs7Ozs7Ozs7OztBQWFBLG1CQUFRQSxLQUFSOzttQkFFZSxFQUFDQSxzQkFBRCxFQUFRQywwQkFBUixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmZjs7Ozs7Ozs7Ozs7OztBQWFBOzs7Ozs7O0FBUUEsS0FBSUMsV0FBa0Is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LGlDQUFRNEIsSUFBSTVCLEtBQVo7QUFDSCxzQkFIRCxNQUlLLElBQUtsRCxXQUFXOEUsR0FBWCxDQUFMLEVBQXVCO0FBQ3hCbEUsZ0NBQU8rSyxRQUFRN0csSUFBSWxFLElBQUosSUFBWWtFLElBQUk4RyxXQUEvQjtBQUNBMUksaUNBQVEyRixRQUFRdEgsTUFBUixDQUFlWCxJQUFmLENBQVI7QUFDSCxzQkFISSxNQUlBO0FBQ0RrRSwrQkFBTUEsSUFBSWdILEtBQUosQ0FBVSxHQUFWLENBQU47QUFDQWxMLGdDQUFPa0UsSUFBSSxDQUFKLENBQVA7QUFDQTVCLGlDQUFRMkYsUUFBUXRILE1BQVIsQ0FBZXVELElBQUksQ0FBSixDQUFmLENBQVI7QUFDQTZHLGlDQUFRN0csSUFBSSxDQUFKLEtBQVVBLElBQUksQ0FBSixDQUFsQjtBQUNIOztBQUVENUIsOEJBQVMsQ0FBQ2xELFdBQVdrRCxLQUFYLENBQVYsSUFBK0JBLE1BQU04QyxNQUFOLENBQWF1RixTQUFiLEVBQXdCSSxLQUF4QixDQUEvQjtBQUNILGtCQXJCTDtBQXVCQSx3QkFBTyxLQUFLOUYsVUFBTCxLQUFvQixLQUFLQSxVQUFMLEVBQWlCcUQsS0FBakIsQ0FBdUIsSUFBdkIsRUFBNkJuRyxTQUE3QixDQUEzQjtBQUNILGNBNUJEOztBQThCQSxvQkFBT3NILGNBQVA7QUFDSDs7OztHQWpPOEJ0SyxZOztBQUFkTCxNLENBRVZ1SixHLEdBQU0sRTtBQUZJdkosTSxDQUtWb0osYSxHQUFnQixJQUFJbkosT0FBSixDQUFZLEVBQVosRUFBZ0IsRUFBRVMsSUFBSSxRQUFOLEVBQWhCLEM7QUFMTlYsTSxDQU1WeUosWSxHQUFlaEcsUztBQU5MekQsTSxDQU9WZ0IsSyxHQUFReUMsUztBQVBFekQsTSxDQVlWbUIsbUIsR0FBc0IsRztBQVpabkIsTSxDQW9CVm9CLGEsR0FBZ0IsSzttQkFwQk5wQixLIiwiZmlsZSI6ImRpc3QvUmVzY29wZS5ub2RlcHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgODEwZDc3ZDFlOTlkZWRlZTFkMWMiLCIvKlxuICogQ29weXJpZ2h0IChjKSAgMjAxNyBDYWlwaSBMYWJzIC5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuICovXG5cbmltcG9ydCBDb250ZXh0IGZyb20gXCIuL0NvbnRleHRcIjtcbmltcG9ydCBTdG9yZSBmcm9tIFwiLi9TdG9yZVwiO1xuXG5Db250ZXh0LlN0b3JlID0gU3RvcmU7XG5cbmV4cG9ydCBkZWZhdWx0IHtTdG9yZSwgQ29udGV4dH07XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9SZXNjb3BlLmpzIiwiLypcbiAqIENvcHlyaWdodCAoYykgIDIwMTcgQ2FpcGkgTGFicyAuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiAqXG4gKiBAYXV0aG9yIDogTmF0aGFuYWVsIEJyYXVuXG4gKiBAY29udGFjdCA6IGNhaXBpbGFic0BnbWFpbC5jb21cbiAqL1xuXG4vKipcbiAqIEBhdXRob3IgTmF0aGFuYWVsIEJSQVVOXG4gKlxuICogRGF0ZTogMTMvMDgvMjAxN1xuICogVGltZTogMTc6MTVcbiAqL1xuXG5cbnZhciBpc1N0cmluZyAgICAgICAgPSByZXF1aXJlKCdpc3N0cmluZycpLFxuICAgIGlzQXJyYXkgICAgICAgICA9IHJlcXVpcmUoJ2lzYXJyYXknKSxcbiAgICBFdmVudEVtaXR0ZXIgICAgPSByZXF1aXJlKCdldmVudHMnKSxcbiAgICBpc0Z1bmN0aW9uICAgICAgPSByZXF1aXJlKCdpc2Z1bmN0aW9uJylcbiAgICAsIHNob3J0aWQgICAgICAgPSByZXF1aXJlKCdzaG9ydGlkJylcbiAgICAsIF9fcHJvdG9fX3B1c2ggPSAoIHRhcmdldCwgaWQsIHBhcmVudCApID0+IHtcbiAgICBsZXQgaGVyZSA9IHtcbiAgICAgICAgW2lkXTogZnVuY3Rpb24gKCkge1xuICAgICAgICB9XG4gICAgfTtcbiAgICBoZXJlW2lkXS5wcm90b3R5cGUgPSBwYXJlbnQgPyBuZXcgcGFyZW50W1wiX1wiICsgaWRdKCkgOiB0YXJnZXRbaWRdIHx8IHt9O1xuICAgIHRhcmdldFtpZF0gPSBuZXcgaGVyZVtpZF0oKTtcbiAgICB0YXJnZXRbJ18nICsgaWRdID0gaGVyZVtpZF07XG59O1xuXG5sZXQgb3BlbkNvbnRleHRzID0ge307XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGV4dCBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gICAgc3RhdGljIGNvbnRleHRzID0gb3BlbkNvbnRleHRzO1xuICAgIHN0YXRpYyBTdG9yZSA9IG51bGw7XG4gICAgc3RhdGljIGRlZmF1bHRNYXhMaXN0ZW5lcnMgPSAxMDA7XG4gICAgc3RhdGljIHBlcnNpc3RlbmNlVG0gPSAwO1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKCBjdHgsIHsgaWQsIHBhcmVudCwgc3RhdGUsIGRhdGFzLCBuYW1lLCBkZWZhdWx0TWF4TGlzdGVuZXJzLCBwZXJzaXN0ZW5jZVRtLCBhdXRvRGVzdHJveSB9ID0ge30gKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9tYXhMaXN0ZW5lcnMgPSBkZWZhdWx0TWF4TGlzdGVuZXJzIHx8IHRoaXMuY29uc3RydWN0b3IuZGVmYXVsdE1heExpc3RlbmVycztcbiAgICAgICAgdGhpcy5faWQgPSBpZCA9IGlkIHx8IChcIl9fX19fXCIgKyBzaG9ydGlkLmdlbmVyYXRlKCkpO1xuICAgICAgICBcbiAgICAgICAgaWYgKCBvcGVuQ29udGV4dHNbaWRdICkge1xuICAgICAgICAgICAgb3BlbkNvbnRleHRzW2lkXS5yZWdpc3RlcihjdHgpO1xuICAgICAgICAgICAgcmV0dXJuIG9wZW5Db250ZXh0c1tpZF1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgb3BlbkNvbnRleHRzW2lkXSA9IHRoaXM7XG4gICAgICAgIHRoaXMuX2lzTG9jYWxJZCA9IHRydWU7XG4gICAgICAgIHRoaXMuX3BlcnNpc3RlbmNlVG0gPSBwZXJzaXN0ZW5jZVRtIHx8IHRoaXMuY29uc3RydWN0b3IucGVyc2lzdGVuY2VUbTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuc3RvcmVzID0ge307XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7fTtcbiAgICAgICAgdGhpcy5kYXRhcyA9IHt9O1xuICAgICAgICBfX3Byb3RvX19wdXNoKHRoaXMsICdzdG9yZXMnLCBwYXJlbnQpO1xuICAgICAgICBfX3Byb3RvX19wdXNoKHRoaXMsICdzdGF0ZScsIHBhcmVudCk7XG4gICAgICAgIF9fcHJvdG9fX3B1c2godGhpcywgJ2RhdGFzJywgcGFyZW50KTtcbiAgICAgICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgICAgIFxuICAgICAgICBpZiAoIHBhcmVudCApIHtcbiAgICAgICAgICAgIHBhcmVudC5fYWRkQ2hpbGQodGhpcyk7XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdGhpcy5zb3VyY2VzID0gW107XG4gICAgICAgIHRoaXMuX2NoaWxkQ29udGV4dHMgPSBbXTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX19yZXRhaW5zID0geyBhbGw6IDAgfTtcbiAgICAgICAgdGhpcy5fX2xvY2tzID0geyBhbGw6IDEgfTtcbiAgICAgICAgdGhpcy5fX2xpc3RlbmluZyA9IHt9O1xuICAgICAgICB0aGlzLl9fY29udGV4dCA9IHt9O1xuICAgICAgICB0aGlzLl9fbWl4ZWQgPSBbXTtcbiAgICAgICAgdGhpcy5fX21peGVkTGlzdCA9IFtdO1xuICAgICAgICB0aGlzLl9mb2xsb3dlcnMgPSBbXTtcbiAgICAgICAgaWYgKCBwYXJlbnQgKSB7XG4gICAgICAgICAgICBwYXJlbnQucmV0YWluKFwiaXNNeVBhcmVudFwiKTtcbiAgICAgICAgICAgICFwYXJlbnQuX3N0YWJsZSAmJiB0aGlzLndhaXQoXCJ3YWl0aW5nUGFyZW50XCIpO1xuICAgICAgICAgICAgcGFyZW50Lm9uKHRoaXMuX19wYXJlbnRMaXN0ID0ge1xuICAgICAgICAgICAgICAgICdzdGFibGUnICA6IHMgPT4gdGhpcy5yZWxlYXNlKFwid2FpdGluZ1BhcmVudFwiKSxcbiAgICAgICAgICAgICAgICAndW5zdGFibGUnOiBzID0+IHRoaXMud2FpdChcIndhaXRpbmdQYXJlbnRcIiksXG4gICAgICAgICAgICAgICAgJ3VwZGF0ZScgIDogcyA9PiB0aGlzLl9wcm9wYWcoKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyB0aGlzLnJlZ2lzdGVyKHBhcmVudC5fX2NvbnRleHQsIHN0YXRlLCBkYXRhcyk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICB0aGlzLnJlZ2lzdGVyKGN0eCwgc3RhdGUsIGRhdGFzKTtcbiAgICAgICAgdGhpcy5fX2xvY2tzLmFsbC0tO1xuICAgICAgICB0aGlzLl9zdGFibGUgPSAhdGhpcy5fX2xvY2tzLmFsbDtcbiAgICAgICAgXG4gICAgICAgIGlmICggYXV0b0Rlc3Ryb3kgKVxuICAgICAgICAgICAgc2V0VGltZW91dChcbiAgICAgICAgICAgICAgICB0bSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmV0YWluKFwiYXV0b0Rlc3Ryb3lcIik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzcG9zZShcImF1dG9EZXN0cm95XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIClcbiAgICB9XG4gICAgXG4gICAgc3RhdGljIGdldENvbnRleHQoIGNvbnRleHRzICkge1xuICAgICAgICBsZXQgc2tleSA9IGlzQXJyYXkoY29udGV4dHMpID8gY29udGV4dHMuc29ydCgoIGEsIGIgKSA9PiB7XG4gICAgICAgICAgICBpZiAoIGEuZmlyc3RuYW1lIDwgYi5maXJzdG5hbWUgKSByZXR1cm4gLTE7XG4gICAgICAgICAgICBpZiAoIGEuZmlyc3RuYW1lID4gYi5maXJzdG5hbWUgKSByZXR1cm4gMTtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9KS5qb2luKCc6OicpIDogY29udGV4dHM7XG4gICAgICAgIHJldHVybiBvcGVuQ29udGV4dHNbc2tleV0gPSBvcGVuQ29udGV4dHNbc2tleV0gfHwgbmV3IENvbnRleHQoe30sIHsgaWQ6IHNrZXkgfSk7XG4gICAgfTtcbiAgICBcbiAgICBtb3VudCggaWQsIHN0YXRlLCBkYXRhcyApIHtcbiAgICAgICAgaWYgKCBpc0FycmF5KGlkKSApIHtcbiAgICAgICAgICAgIGlkLmZvckVhY2goayA9PiB0aGlzLl9tb3VudChrLCBzdGF0ZSAmJiBzdGF0ZVtrXSwgZGF0YXMgJiYgZGF0YXNba10pKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX21vdW50KC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIFxuICAgIF9tb3VudCggaWQsIHN0YXRlLCBkYXRhcyApIHtcbiAgICAgICAgaWYgKCAhdGhpcy5fX2NvbnRleHRbaWRdICkgey8vYXNrIG1peGVkIHx8IHBhcmVudFxuICAgICAgICAgICAgaWYgKCB0aGlzLl9fbWl4ZWQucmVkdWNlKCggbW91bnRlZCwgY3R4ICkgPT4gKG1vdW50ZWQgfHwgY3R4Ll9tb3VudChpZCwgc3RhdGUsIGRhdGFzKSksIGZhbHNlKSB8fFxuICAgICAgICAgICAgICAgICF0aGlzLnBhcmVudCApXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyZW50Ll9tb3VudCguLi5hcmd1bWVudHMpO1xuICAgICAgICB9XG4gICAgICAgIC8vdGhpcy5jb25zdHJ1Y3Rvci5TdG9yZS5tb3VudFN0b3JlKGlkLCB0aGlzLCBudWxsLCBzdGF0ZSwgZGF0YXMpO1xuICAgICAgICBsZXQgc3RvcmUgPSB0aGlzLl9fY29udGV4dFtpZF0sIGN0eDtcbiAgICAgICAgLy9jb25zb2xlLndhcm4oXCJtb3VudCBvbiBcIiwgdGhpcy5faWQsICcgJywgaWQsIGlzRnVuY3Rpb24oc3RvcmUpKTtcbiAgICAgICAgaWYgKCBpc0Z1bmN0aW9uKHN0b3JlKSApIHtcbiAgICAgICAgICAgIHRoaXMuX19jb250ZXh0W2lkXSA9IG5ldyBzdG9yZSh0aGlzLCB7IHN0YXRlLCBkYXRhcyB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmICggc3RhdGUgIT09IHVuZGVmaW5lZCAmJiBkYXRhcyA9PT0gdW5kZWZpbmVkIClcbiAgICAgICAgICAgICAgICBzdG9yZS5zZXRTdGF0ZShzdGF0ZSk7XG4gICAgICAgICAgICBlbHNlIGlmICggc3RhdGUgIT09IHVuZGVmaW5lZCApXG4gICAgICAgICAgICAgICAgc3RvcmUuc3RhdGUgPSBzdGF0ZTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKCBkYXRhcyAhPT0gdW5kZWZpbmVkIClcbiAgICAgICAgICAgICAgICBzdG9yZS5wdXNoKGRhdGFzKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIC8vY29uc29sZS53YXJuKFwibW91bnQgb24gXCIsIHRoaXMuc3RvcmVzW2lkXSk7XG4gICAgICAgIHRoaXMuX3dhdGNoU3RvcmUoaWQpO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHRoaXMuX19jb250ZXh0W2lkXTtcbiAgICB9XG4gICAgXG4gICAgX3dhdGNoU3RvcmUoIGlkLCBzdGF0ZSwgZGF0YXMgKSB7XG4gICAgICAgIGlmICggIXRoaXMuX19jb250ZXh0W2lkXSApIHsvL2FzayBtaXhlZCB8fCBwYXJlbnRcbiAgICAgICAgICAgIGlmICggdGhpcy5fX21peGVkLnJlZHVjZSgoIG1vdW50ZWQsIGN0eCApID0+IChtb3VudGVkIHx8IGN0eC5fd2F0Y2hTdG9yZShpZCwgc3RhdGUsIGRhdGFzKSksIGZhbHNlKSB8fFxuICAgICAgICAgICAgICAgICF0aGlzLnBhcmVudCApXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyZW50Ll93YXRjaFN0b3JlKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCAhdGhpcy5fX2xpc3RlbmluZ1tpZF0gJiYgIWlzRnVuY3Rpb24odGhpcy5fX2NvbnRleHRbaWRdKSApIHtcbiAgICAgICAgICAgICF0aGlzLl9fY29udGV4dFtpZF0uaXNTdGFibGUoKSAmJiB0aGlzLndhaXQoaWQpO1xuICAgICAgICAgICAgdGhpcy5fX2NvbnRleHRbaWRdLm9uKFxuICAgICAgICAgICAgICAgIHRoaXMuX19saXN0ZW5pbmdbaWRdID0ge1xuICAgICAgICAgICAgICAgICAgICAnZGVzdHJveScgOiBzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl9fbGlzdGVuaW5nW2lkXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX19jb250ZXh0W2lkXSA9IHRoaXMuX19jb250ZXh0W2lkXS5jb25zdHJ1Y3RvcjtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgJ3VwZGF0ZScgIDogcyA9PiB0aGlzLnByb3BhZygpLFxuICAgICAgICAgICAgICAgICAgICAnc3RhYmxlJyAgOiBzID0+IHRoaXMucmVsZWFzZShpZCksXG4gICAgICAgICAgICAgICAgICAgICd1bnN0YWJsZSc6IHMgPT4gdGhpcy53YWl0KGlkKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBcbiAgICBtaXhpbiggdGFyZ2V0Q3R4ICkge1xuICAgICAgICBsZXQgcGFyZW50ID0gdGhpcy5wYXJlbnQsIGxpc3RzO1xuICAgICAgICB0aGlzLl9fbWl4ZWQucHVzaCh0YXJnZXRDdHgpXG4gICAgICAgIHRhcmdldEN0eC5yZXRhaW4oKTtcbiAgICAgICAgaWYgKCAhdGFyZ2V0Q3R4Ll9zdGFibGUgKVxuICAgICAgICAgICAgdGhpcy53YWl0KHRhcmdldEN0eC5faWQpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fX21peGVkTGlzdC5wdXNoKGxpc3RzID0ge1xuICAgICAgICAgICAgJ3N0YWJsZScgIDogcyA9PiB0aGlzLnJlbGVhc2UodGFyZ2V0Q3R4Ll9pZCksXG4gICAgICAgICAgICAndW5zdGFibGUnOiBzID0+IHRoaXMud2FpdCh0YXJnZXRDdHguX2lkKSxcbiAgICAgICAgICAgICd1cGRhdGUnICA6IHMgPT4gdGhpcy5fcHJvcGFnKClcbiAgICAgICAgfSlcbiAgICAgICAgdGFyZ2V0Q3R4Lm9uKGxpc3RzKTtcbiAgICAgICAgX19wcm90b19fcHVzaCh0aGlzLCAnc3RvcmVzJywgcGFyZW50KTtcbiAgICAgICAgX19wcm90b19fcHVzaCh0aGlzLCAnc3RhdGUnLCBwYXJlbnQpO1xuICAgICAgICBfX3Byb3RvX19wdXNoKHRoaXMsICdkYXRhcycsIHBhcmVudCk7XG4gICAgICAgIHRhcmdldEN0eC5yZWxpbmsodGFyZ2V0Q3R4Ll9fY29udGV4dCwgdGhpcywgdHJ1ZSk7XG4gICAgICAgIFxuICAgICAgICBfX3Byb3RvX19wdXNoKHRoaXMsICdzdG9yZXMnLCB0aGlzKTtcbiAgICAgICAgX19wcm90b19fcHVzaCh0aGlzLCAnc3RhdGUnLCB0aGlzKTtcbiAgICAgICAgX19wcm90b19fcHVzaCh0aGlzLCAnZGF0YXMnLCB0aGlzKTtcbiAgICAgICAgdGhpcy5yZWxpbmsodGhpcy5fX2NvbnRleHQsIHRoaXMpO1xuICAgIH1cbiAgICBcbiAgICByZWdpc3RlciggcmF3Q3R4LCBzdGF0ZSA9IHt9LCBkYXRhcyA9IHt9ICkge1xuICAgICAgICB0aGlzLnJlbGluayhyYXdDdHgsIHRoaXMsIGZhbHNlLCBzdGF0ZSwgZGF0YXMpO1xuICAgICAgICBPYmplY3Qua2V5cyhyYXdDdHgpLmZvckVhY2goXG4gICAgICAgICAgICBpZCA9PiAoaXNGdW5jdGlvbihyYXdDdHhbaWRdKSAmJiByYXdDdHhbaWRdLnNpbmdsZXRvbiAmJiB0aGlzLl9tb3VudChpZCwgc3RhdGVbaWRdLCBkYXRhc1tpZF0pKSlcbiAgICAgICAgLy90aGlzLnN0b3Jlcy5fX3Byb3RvX18gPSB0aGlzLl9zdG9yZXMucHJvdG90eXBlO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBNYXAgc3JjQ3R4IHN0b3JlJ3Mgb24gdGFyZ2V0Q3R4IGhlYWRlcnMgcHJvdG8nc1xuICAgICAqIEBwYXJhbSBzcmNDdHhcbiAgICAgKiBAcGFyYW0gdGFyZ2V0Q3R4XG4gICAgICogQHBhcmFtIHN0YXRlXG4gICAgICogQHBhcmFtIGRhdGFzXG4gICAgICovXG4gICAgcmVsaW5rKCBzcmNDdHgsIHRhcmdldEN0eCA9IHRoaXMsIGV4dGVybmFsLCBzdGF0ZSA9IHt9LCBkYXRhcyA9IHt9ICkge1xuICAgICAgICBsZXQgbGN0eCA9IHRhcmdldEN0eC5fc3RvcmVzLnByb3RvdHlwZTtcbiAgICAgICAgT2JqZWN0LmtleXMoc3JjQ3R4KVxuICAgICAgICAgICAgICAuZm9yRWFjaChcbiAgICAgICAgICAgICAgICAgIGlkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoIHRhcmdldEN0eC5fX2NvbnRleHRbaWRdID09PSBzcmNDdHhbaWRdIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldEN0eC5fX2NvbnRleHRbaWRdICYmICh0YXJnZXRDdHguX19jb250ZXh0W2lkXS5jb25zdHJ1Y3RvciA9PT0gc3JjQ3R4W2lkXSApIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgIGlmICggdGFyZ2V0Q3R4Ll9fY29udGV4dFtpZF0gKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmICggIWV4dGVybmFsICYmICFpc0Z1bmN0aW9uKHRhcmdldEN0eC5fX2NvbnRleHRbaWRdKSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuaW5mbyhcIlJlc2NvcGUgU3RvcmUgOiBcIiwgaWQsIFwiIGFscmVhZHkgZXhpc3QgaW4gdGhpcyBjb250ZXh0ICEgKCB0cnkgX19wcm90b19fIGhvdCBwYXRjaCApXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0Q3R4Ll9fY29udGV4dFtpZF0uX19wcm90b19fID0gc3JjQ3R4W2lkXS5wcm90b3R5cGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoICFleHRlcm5hbCAmJiBpc0Z1bmN0aW9uKHRhcmdldEN0eC5fX2NvbnRleHRbaWRdKSApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRDdHguX19jb250ZXh0W2lkXSA9IHNyY0N0eFtpZF07XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKCAhZXh0ZXJuYWwgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9fY29udGV4dFtpZF0gPSBzcmNDdHhbaWRdO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGN0eCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICgoIGN0eCwgaWQgKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0OiAoKSA9PiB0aGlzLl9fY29udGV4dFtpZF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMuX19jb250ZXh0LCBpZClcbiAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0Q3R4Ll9zdGF0ZS5wcm90b3R5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAoKCBjdHgsIGlkICkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldDogKCkgPT4gKGN0eFtpZF0gJiYgY3R4W2lkXS5zdGF0ZSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0OiAoIHYgKSA9PiAodGhpcy5fbW91bnQoaWQsIHYpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5fX2NvbnRleHQsIGlkKVxuICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRDdHguX2RhdGFzLnByb3RvdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICgoIGN0eCwgaWQgKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0OiAoKSA9PiAoY3R4W2lkXSAmJiBjdHhbaWRdLmRhdGFzKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXQ6ICggdiApID0+ICh0aGlzLl9tb3VudChpZCwgdW5kZWZpbmVkLCB2KSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMuX19jb250ZXh0LCBpZClcbiAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICApXG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBvYmoge1JlYWN0LkNvbXBvbmVudHxTdG9yZXxmdW5jdGlvbilcbiAgICAgKiBAcGFyYW0ga2V5IHtzdHJpbmd9IG9wdGlvbmFsIGtleSB3aGVyZSB0byBtYXAgdGhlIHB1YmxpYyBzdGF0ZVxuICAgICAqL1xuICAgIGJpbmQoIG9iaiwga2V5LCBhcywgc2V0SW5pdGlhbCA9IHRydWUgKSB7XG4gICAgICAgIGxldCBsYXN0UmV2cywgZGF0YXM7XG4gICAgICAgIGlmICgga2V5ICYmICFpc0FycmF5KGtleSkgKVxuICAgICAgICAgICAga2V5ID0gW2tleV07XG4gICAgICAgIFxuICAgICAgICAvLyBrZXkgPSBrZXl8fFxuICAgICAgICBcbiAgICAgICAgaWYgKCBhcyA9PT0gZmFsc2UgfHwgYXMgPT09IHRydWUgKSB7XG4gICAgICAgICAgICBzZXRJbml0aWFsID0gYXM7XG4gICAgICAgICAgICBhcyA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRoaXMuX2ZvbGxvd2Vycy5wdXNoKFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIG9iaixcbiAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgYXMgfHwgdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIGxhc3RSZXZzID0ga2V5ICYmIGtleS5yZWR1Y2UoKCByZXZzLCBpZCApID0+IChyZXZzW2lkXSA9IDAsIHJldnMpLCB7fSlcbiAgICAgICAgICAgIF0pO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5tb3VudChrZXkpO1xuICAgICAgICBcbiAgICAgICAgaWYgKCBzZXRJbml0aWFsICYmIHRoaXMuX3N0YWJsZSApIHtcbiAgICAgICAgICAgIGRhdGFzID0gdGhpcy5nZXRVcGRhdGVzKGxhc3RSZXZzKTtcbiAgICAgICAgICAgIGlmICggIWRhdGFzICkgcmV0dXJuO1xuICAgICAgICAgICAgaWYgKCB0eXBlb2Ygb2JqICE9IFwiZnVuY3Rpb25cIiApIHtcbiAgICAgICAgICAgICAgICBpZiAoIGFzICkgb2JqLnNldFN0YXRlKHsgW2FzXTogZGF0YXMgfSk7XG4gICAgICAgICAgICAgICAgZWxzZSBvYmouc2V0U3RhdGUoZGF0YXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgb2JqKGRhdGFzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGxhc3RSZXZzICYmXG4gICAgICAgICAgICAvLyBrZXkuZm9yRWFjaChpZCA9PiAobGFzdFJldnNbaWRdID0gdGhpcy5zdG9yZXNbaWRdICYmIHRoaXMuc3RvcmVzW2lkXS5fcmV2IHx8IDApKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBVbiBiaW5kIHRoaXMgY29udGV4dCBvZmYgdGhlIGdpdmVuIGNvbXBvbmVudC1rZXlzXG4gICAgICogQHBhcmFtIG9ialxuICAgICAqIEBwYXJhbSBrZXlcbiAgICAgKiBAcmV0dXJucyB7QXJyYXkuPCo+fVxuICAgICAqL1xuICAgIHVuQmluZCggb2JqLCBrZXksIGFzICkge1xuICAgICAgICB2YXIgZm9sbG93ZXJzID0gdGhpcy5fZm9sbG93ZXJzLFxuICAgICAgICAgICAgaSAgICAgICAgID0gZm9sbG93ZXJzICYmIGZvbGxvd2Vycy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggZm9sbG93ZXJzICYmIGktLSApXG4gICAgICAgICAgICBpZiAoIGZvbGxvd2Vyc1tpXVswXSA9PT0gb2JqICYmICgnJyArIGZvbGxvd2Vyc1tpXVsxXSkgPT0gKCcnICsga2V5KSAmJlxuICAgICAgICAgICAgICAgIGZvbGxvd2Vyc1tpXVsyXSA9PSBhcyApXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZvbGxvd2Vycy5zcGxpY2UoaSwgMSk7XG4gICAgfVxuICAgIFxuICAgIG1hcCggdG8sIHN0b3JlcywgYmluZCA9IHRydWUgKSB7XG4gICAgICAgIGxldCBTdG9yZSA9IHRoaXMuY29uc3RydWN0b3IuU3RvcmU7XG4gICAgICAgIHN0b3JlcyA9IGlzQXJyYXkoc3RvcmVzKSA/IHN0b3JlcyA6IFtzdG9yZXNdO1xuICAgICAgICB0aGlzLm1vdW50KHN0b3Jlcyk7XG4gICAgICAgIGlmICggYmluZCAmJiB0byBpbnN0YW5jZW9mIFN0b3JlICkge1xuICAgICAgICAgICAgU3RvcmUubWFwKHRvLCBzdG9yZXMsIHRoaXMsIHRoaXMsIGZhbHNlKVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCBiaW5kICkge1xuICAgICAgICAgICAgdGhpcy5iaW5kKHRvLCBzdG9yZXMsIHVuZGVmaW5lZCwgZmFsc2UpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBsZXQgbWl4ZWRDV1VubW91bnQsXG4gICAgICAgICAgICAgICAgdW5Nb3VudEtleSA9IHRvLmlzUmVhY3RDb21wb25lbnQgPyBcImNvbXBvbmVudFdpbGxVbm1vdW50XCIgOiBcImRlc3Ryb3lcIjtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKCB0by5oYXNPd25Qcm9wZXJ0eSh1bk1vdW50S2V5KSApIHtcbiAgICAgICAgICAgICAgICBtaXhlZENXVW5tb3VudCA9IHRvW3VuTW91bnRLZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB0b1t1bk1vdW50S2V5XSA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBkZWxldGUgdG9bdW5Nb3VudEtleV07XG4gICAgICAgICAgICAgICAgaWYgKCBtaXhlZENXVW5tb3VudCApXG4gICAgICAgICAgICAgICAgICAgIHRvW3VuTW91bnRLZXldID0gbWl4ZWRDV1VubW91bnQ7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdGhpcy51bkJpbmQodG8sIHN0b3Jlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3RvcmVzLnJlZHVjZSgoIGRhdGFzLCBpZCApID0+IChkYXRhc1tpZF0gPSB0aGlzLnN0b3Jlc1tpZF0gJiYgdGhpcy5zdG9yZXNbaWRdLmRhdGFzLCBkYXRhcyksIHt9KTtcbiAgICB9XG4gICAgXG4gICAgZ2V0U3RvcmVzUmV2cyggc3RvcmVzID0ge30sIGxvY2FsICkge1xuICAgICAgICBsZXQgY3R4ID0gdGhpcy5fX2NvbnRleHQ7XG4gICAgICAgIGlmICggIXN0b3JlcyApIHtcbiAgICAgICAgICAgIHN0b3JlcyA9IHt9O1xuICAgICAgICB9XG4gICAgICAgIE9iamVjdC5rZXlzKGN0eCkuZm9yRWFjaChcbiAgICAgICAgICAgIGlkID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoICFpc0Z1bmN0aW9uKGN0eFtpZF0pXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0b3Jlc1tpZF0gPSBjdHhbaWRdLl9yZXY7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKCAhc3RvcmVzLmhhc093blByb3BlcnR5KGlkKSApXG4gICAgICAgICAgICAgICAgICAgIHN0b3Jlc1tpZF0gPSBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICBpZiAoICFsb2NhbCApIHtcbiAgICAgICAgICAgIHRoaXMuX19taXhlZC5yZWR1Y2UoKCB1cGRhdGVkLCBjdHggKSA9PiAoY3R4LmdldFN0b3Jlc1JldnMoc3RvcmVzKSwgc3RvcmVzKSwgc3RvcmVzKTtcbiAgICAgICAgICAgIHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LmdldFN0b3Jlc1JldnMoc3RvcmVzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3RvcmVzO1xuICAgIH1cbiAgICBcbiAgICBnZXRVcGRhdGVzKCByZXZzLCBvdXRwdXQsIHVwZGF0ZWQgKSB7XG4gICAgICAgIGxldCBjdHggPSB0aGlzLl9fY29udGV4dDtcbiAgICAgICAgXG4gICAgICAgIG91dHB1dCA9IG91dHB1dCB8fCB7fTtcbiAgICAgICAgT2JqZWN0LmtleXMoY3R4KS5mb3JFYWNoKFxuICAgICAgICAgICAgaWQgPT4ge1xuICAgICAgICAgICAgICAgIGlmICggIW91dHB1dFtpZF1cbiAgICAgICAgICAgICAgICAgICAgJiYgKCAhcmV2c1xuICAgICAgICAgICAgICAgICAgICAgICAgfHwgKHJldnMuaGFzT3duUHJvcGVydHkoaWQpICYmIHJldnNbaWRdID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgICAgICB8fCAhKCAhcmV2cy5oYXNPd25Qcm9wZXJ0eShpZCkgfHwgY3R4W2lkXS5fcmV2IDw9IHJldnNbaWRdICkpXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIG91dHB1dFtpZF0gPSB0aGlzLmRhdGFzW2lkXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCByZXZzICYmIHJldnNbaWRdICE9PSB1bmRlZmluZWQgKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV2c1tpZF0gPSBjdHhbaWRdLl9yZXY7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgdXBkYXRlZCA9IHRoaXMuX19taXhlZC5yZWR1Y2UoKCB1cGRhdGVkLCBjdHggKSA9PiAoY3R4LmdldFVwZGF0ZXMocmV2cywgb3V0cHV0LCB1cGRhdGVkKSB8fCB1cGRhdGVkKSwgdXBkYXRlZCk7XG4gICAgICAgIHVwZGF0ZWQgPSB0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC5nZXRVcGRhdGVzKHJldnMsIG91dHB1dCwgdXBkYXRlZCkgfHwgdXBkYXRlZDtcbiAgICAgICAgcmV0dXJuIHVwZGF0ZWQgJiYgb3V0cHV0O1xuICAgIH1cbiAgICBcbiAgICBzZXJpYWxpemUoIGZsYWdzX3N0YXRlcyA9IC8uKi8sIGZsYWdzX2RhdGFzID0gLy4qLyApIHtcbiAgICAgICAgbGV0IGN0eCA9IHRoaXMuX19jb250ZXh0LCBvdXRwdXQgPSB7IHN0YXRlOiB7fSwgZGF0YXM6IHt9IH0sXG4gICAgICAgICAgICBfZmxhZ3Nfc3RhdGVzLFxuICAgICAgICAgICAgX2ZsYWdzX2RhdGFzO1xuICAgICAgICBpZiAoIGlzQXJyYXkoZmxhZ3Nfc3RhdGVzKSApXG4gICAgICAgICAgICBmbGFnc19zdGF0ZXMuZm9yRWFjaChpZCA9PiAob3V0cHV0LnN0YXRlW2lkXSA9IHRoaXMuc3RhdGVbaWRdKSlcbiAgICAgICAgXG4gICAgICAgIGlmICggaXNBcnJheShmbGFnc19kYXRhcykgKVxuICAgICAgICAgICAgZmxhZ3NfZGF0YXMuZm9yRWFjaChpZCA9PiAob3V0cHV0LmRhdGFzW2lkXSA9IHRoaXMuZGF0YXNbaWRdKSlcbiAgICAgICAgXG4gICAgICAgIGlmICggIWlzQXJyYXkoZmxhZ3NfZGF0YXMpICYmICFpc0FycmF5KGZsYWdzX3N0YXRlcykgKVxuICAgICAgICAgICAgT2JqZWN0LmtleXMoY3R4KS5mb3JFYWNoKFxuICAgICAgICAgICAgICAgIGlkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBpc0Z1bmN0aW9uKGN0eFtpZF0pIClcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGxldCBmbGFncyA9IGN0eFtpZF0uY29uc3RydWN0b3IuZmxhZ3M7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBmbGFncyA9IGlzQXJyYXkoZmxhZ3MpID8gZmxhZ3MgOiBbZmxhZ3MgfHwgXCJcIl07XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpZiAoIGZsYWdzLnJlZHVjZSgoIHIsIGZsYWcgKSA9PiAociB8fCBfZmxhZ3Nfc3RhdGVzLnRlc3QoZmxhZykpLCBmYWxzZSkgKVxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0LnN0YXRlW2lkXSA9IHRoaXMuc3RhdGVbaWRdO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBmbGFncy5yZWR1Y2UoKCByLCBmbGFnICkgPT4gKHIgfHwgX2ZsYWdzX2RhdGFzLnRlc3QoZmxhZykpLCBmYWxzZSkgKVxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0LmRhdGFzW2lkXSA9IHRoaXMuZGF0YXNbaWRdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIClcbiAgICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICB9XG4gICAgXG4gICAgb24oIGxpc3RzICkge1xuICAgICAgICBcbiAgICAgICAgaWYgKCAhaXNTdHJpbmcobGlzdHMpICYmIGxpc3RzIClcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGxpc3RzKS5mb3JFYWNoKGsgPT4gc3VwZXIub24oaywgbGlzdHNba10pKTtcbiAgICAgICAgZWxzZSBzdXBlci5vbiguLi5hcmd1bWVudHMpO1xuICAgIH1cbiAgICBcbiAgICByZW1vdmVMaXN0ZW5lciggbGlzdHMgKSB7XG4gICAgICAgIGlmICggIWlzU3RyaW5nKGxpc3RzKSAmJiBsaXN0cyApXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhsaXN0cykuZm9yRWFjaChrID0+IHN1cGVyLnJlbW92ZUxpc3RlbmVyKGssIGxpc3RzW2tdKSk7XG4gICAgICAgIGVsc2Ugc3VwZXIucmVtb3ZlTGlzdGVuZXIoLi4uYXJndW1lbnRzKTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogb25jZSgnc3RhYmxlJywgY2IpXG4gICAgICogQHBhcmFtIG9iaiB7UmVhY3QuQ29tcG9uZW50fFN0b3JlfGZ1bmN0aW9uKVxuICAgICAqIEBwYXJhbSBrZXkge3N0cmluZ30gb3B0aW9uYWwga2V5IHdoZXJlIHRvIG1hcCB0aGUgcHVibGljIHN0YXRlXG4gICAgICovXG4gICAgdGhlbiggY2IgKSB7XG4gICAgICAgIGlmICggdGhpcy5fc3RhYmxlIClcbiAgICAgICAgICAgIHJldHVybiBjYihudWxsLCB0aGlzLmRhdGFzKTtcbiAgICAgICAgdGhpcy5vbmNlKCdzdGFibGUnLCBlID0+IGNiKG51bGwsIHRoaXMuZGF0YXMpKTtcbiAgICB9XG4gICAgXG4gICAgcmVzdG9yZSggeyBzdGF0ZSwgZGF0YXMgfSwgcXVpZXQgKSB7XG4gICAgICAgIGxldCBjdHggPSB0aGlzLl9fY29udGV4dDtcbiAgICAgICAgT2JqZWN0LmtleXMoZGF0YXMpLmZvckVhY2goXG4gICAgICAgICAgICBpZCA9PiB7XG4gICAgICAgICAgICAgICAgcXVpZXQgPyBjdHguZGF0YXMgPSBkYXRhc1tpZF1cbiAgICAgICAgICAgICAgICAgICAgOiBjdHgucHVzaChkYXRhc1tpZF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICBPYmplY3Qua2V5cyhzdGF0ZSkuZm9yRWFjaChcbiAgICAgICAgICAgIGlkID0+IHtcbiAgICAgICAgICAgICAgICBxdWlldCA/IGN0eC5zdGF0ZSA9IHN0YXRlW2lkXVxuICAgICAgICAgICAgICAgICAgICA6IGN0eC5zZXRTdGF0ZShzdGF0ZVtpZF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cbiAgICBcbiAgICBcbiAgICByZXRhaW5TdG9yZXMoIHN0b3JlcyA9IFtdLCByZWFzb24gKSB7XG4gICAgICAgIHN0b3Jlcy5mb3JFYWNoKFxuICAgICAgICAgICAgaWQgPT4gKHRoaXMuc3RvcmVzW2lkXSAmJiB0aGlzLnN0b3Jlc1tpZF0ucmV0YWluICYmIHRoaXMuc3RvcmVzW2lkXS5yZXRhaW4ocmVhc29uKSlcbiAgICAgICAgKVxuICAgIH1cbiAgICBcbiAgICBkaXNwb3NlU3RvcmVzKCBzdG9yZXMgPSBbXSwgcmVhc29uICkge1xuICAgICAgICAvL2NvbnNvbGUud2FybihcImRpc3Bvc2VTdG9yZXNcIiwgc3RvcmVzLCByZWFzb24sIHRoaXMuc3RvcmVzW3N0b3Jlc1swXV0pO1xuICAgICAgICBcbiAgICAgICAgc3RvcmVzLmZvckVhY2goXG4gICAgICAgICAgICBpZCA9PiAodGhpcy5zdG9yZXNbaWRdICYmIHRoaXMuc3RvcmVzW2lkXS5kaXNwb3NlICYmIHRoaXMuc3RvcmVzW2lkXS5kaXNwb3NlKHJlYXNvbikpXG4gICAgICAgIClcbiAgICB9XG4gICAgXG4gICAgd2FpdCggcmVhc29uICkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwid2FpdFwiLCByZWFzb24pO1xuICAgICAgICB0aGlzLl9zdGFibGUgJiYgIXRoaXMuX19sb2Nrcy5hbGwgJiYgdGhpcy5lbWl0KFwidW5zdGFibGVcIiwgdGhpcyk7XG4gICAgICAgIHRoaXMuX3N0YWJsZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9fbG9ja3MuYWxsKys7XG4gICAgICAgIGlmICggcmVhc29uICkge1xuICAgICAgICAgICAgdGhpcy5fX2xvY2tzW3JlYXNvbl0gPSB0aGlzLl9fbG9ja3NbcmVhc29uXSB8fCAwO1xuICAgICAgICAgICAgdGhpcy5fX2xvY2tzW3JlYXNvbl0rKztcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICByZWxlYXNlKCByZWFzb24gKSB7XG4gICAgICAgIFxuICAgICAgICAvL2NvbnNvbGUubG9nKFwicmVsZWFzZVwiLCByZWFzb24pO1xuICAgICAgICBpZiAoIHJlYXNvbiApIHtcbiAgICAgICAgICAgIGlmICggdGhpcy5fX2xvY2tzW3JlYXNvbl0gPT0gMCApXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlJlbGVhc2UgbW9yZSB0aGFuIGxvY2tpbmcgIVwiLCByZWFzb24pO1xuICAgICAgICAgICAgdGhpcy5fX2xvY2tzW3JlYXNvbl0gPSB0aGlzLl9fbG9ja3NbcmVhc29uXSB8fCAwO1xuICAgICAgICAgICAgdGhpcy5fX2xvY2tzW3JlYXNvbl0tLTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoICFyZWFzb24gJiYgdGhpcy5fX2xvY2tzLmFsbCA9PSAwIClcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJSZWxlYXNlIG1vcmUgdGhhbiBsb2NraW5nICFcIik7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9fbG9ja3MuYWxsLS07XG4gICAgICAgIGlmICggIXRoaXMuX19sb2Nrcy5hbGwgKSB7XG4gICAgICAgICAgICB0aGlzLl9zdGFiaWxpemVyVE0gJiYgY2xlYXJUaW1lb3V0KHRoaXMuX3N0YWJpbGl6ZXJUTSk7XG4gICAgICAgICAgICB0aGlzLl9wcm9wYWdUTSAmJiBjbGVhclRpbWVvdXQodGhpcy5fcHJvcGFnVE0pO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLl9zdGFiaWxpemVyVE0gPSBzZXRUaW1lb3V0KFxuICAgICAgICAgICAgICAgIGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIHRoaXMuX19sb2Nrcy5hbGwgKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3N0YWJpbGl6ZXJUTSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zdGFibGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXQoXCJzdGFibGVcIiwgdGhpcyk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wcm9wYWcoKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxuICAgIFxuICAgIHByb3BhZygpIHtcbiAgICAgICAgdGhpcy5fcHJvcGFnVE0gJiYgY2xlYXJUaW1lb3V0KHRoaXMuX3Byb3BhZ1RNKTtcbiAgICAgICAgdGhpcy5fcHJvcGFnVE0gPSBzZXRUaW1lb3V0KFxuICAgICAgICAgICAgZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcHJvcGFnKClcbiAgICAgICAgICAgIH0sIDE1XG4gICAgICAgICk7XG4gICAgfVxuICAgIFxuICAgIF9wcm9wYWcoKSB7XG4gICAgICAgIGlmICggdGhpcy5fZm9sbG93ZXJzLmxlbmd0aCApXG4gICAgICAgICAgICB0aGlzLl9mb2xsb3dlcnMuZm9yRWFjaCgoIHsgMDogb2JqLCAxOiBrZXksIDI6IGFzLCAzOiBsYXN0UmV2cyB9ICkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBkYXRhcyA9IHRoaXMuZ2V0VXBkYXRlcyhsYXN0UmV2cyk7XG4gICAgICAgICAgICAgICAgaWYgKCAhZGF0YXMgKSByZXR1cm47XG4gICAgICAgICAgICAgICAgaWYgKCB0eXBlb2Ygb2JqICE9IFwiZnVuY3Rpb25cIiApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBhcyApIG9iai5zZXRTdGF0ZSh7IFthc106IGRhdGFzIH0pO1xuICAgICAgICAgICAgICAgICAgICBlbHNlIG9iai5zZXRTdGF0ZShkYXRhcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBvYmooZGF0YXMsIGxhc3RSZXZzICYmIFsuLi5sYXN0UmV2c10gfHwgXCJubyByZXZzXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBsYXN0UmV2cyAmJlxuICAgICAgICAgICAgICAgIC8vIGtleS5mb3JFYWNoKGlkID0+IChsYXN0UmV2c1tpZF0gPSB0aGlzLnN0b3Jlc1tpZF0gJiYgdGhpcy5zdG9yZXNbaWRdLl9yZXYgfHwgMCkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZW1pdChcInVwZGF0ZVwiLCB0aGlzLmdldFVwZGF0ZXMoKSk7XG4gICAgfVxuICAgIFxuICAgIF9nZXRBbGxDaGlsZHMoIGNoaWxkcyA9IFtdICkge1xuICAgICAgICBjaGlsZHMucHVzaCguLi50aGlzLl9jaGlsZENvbnRleHRzKVxuICAgICAgICB0aGlzLl9jaGlsZENvbnRleHRzLmZvckVhY2goXG4gICAgICAgICAgICBjdHggPT4ge1xuICAgICAgICAgICAgICAgIGN0eC5fZ2V0QWxsQ2hpbGRzKGNoaWxkcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiBjaGlsZHM7XG4gICAgfVxuICAgIFxuICAgIF9hZGRDaGlsZCggY3R4ICkge1xuICAgICAgICB0aGlzLl9jaGlsZENvbnRleHRzLnB1c2goY3R4KTtcbiAgICB9XG4gICAgXG4gICAgX3JtQ2hpbGQoIGN0eCApIHtcbiAgICAgICAgbGV0IGkgPSB0aGlzLl9jaGlsZENvbnRleHRzLmluZGV4T2YoY3R4KTtcbiAgICAgICAgaWYgKCBpICE9IC0xIClcbiAgICAgICAgICAgIHRoaXMuX2NoaWxkQ29udGV4dHMuc3BsaWNlKGksIDEpO1xuICAgIH1cbiAgICBcbiAgICByZXRhaW4oIHJlYXNvbiApIHtcbiAgICAgICAgdGhpcy5fX3JldGFpbnMuYWxsKys7XG4gICAgICAgIC8vY29uc29sZS5sb2coXCJyZXRhaW5cIiwgdGhpcy5faWQsIHJlYXNvbik7XG4gICAgICAgIFxuICAgICAgICBpZiAoIHJlYXNvbiApIHtcbiAgICAgICAgICAgIHRoaXMuX19yZXRhaW5zW3JlYXNvbl0gPSB0aGlzLl9fcmV0YWluc1tyZWFzb25dIHx8IDA7XG4gICAgICAgICAgICB0aGlzLl9fcmV0YWluc1tyZWFzb25dKys7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgZGlzcG9zZSggcmVhc29uICkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwiZGlzcG9zZVwiLCB0aGlzLl9pZCwgcmVhc29uKTtcbiAgICAgICAgaWYgKCByZWFzb24gKSB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmICggdGhpcy5fX3JldGFpbnNbcmVhc29uXSA9PSAwIClcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJEaXNwb3NlIG1vcmUgdGhhbiByZXRhaW5pbmcgIVwiKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5fX3JldGFpbnNbcmVhc29uXSA9IHRoaXMuX19yZXRhaW5zW3JlYXNvbl0gfHwgMDtcbiAgICAgICAgICAgIHRoaXMuX19yZXRhaW5zW3JlYXNvbl0tLTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKCB0aGlzLl9fcmV0YWlucy5hbGwgPT0gMCApXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJEaXNwb3NlIG1vcmUgdGhhbiByZXRhaW5pbmcgIVwiKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX19yZXRhaW5zLmFsbC0tO1xuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIGlmICggIXRoaXMuX19yZXRhaW5zLmFsbCApIHtcbiAgICAgICAgICAgIGlmICggdGhpcy5fcGVyc2lzdGVuY2VUbSApIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9kZXN0cm95VE0gJiYgY2xlYXJUaW1lb3V0KHRoaXMuX2Rlc3Ryb3lUTSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fZGVzdHJveVRNID0gc2V0VGltZW91dChcbiAgICAgICAgICAgICAgICAgICAgZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwid3RmIGN0eFwiLCB0aGlzLl9pZCwgcmVhc29uLCB0aGlzLl9fbG9ja3MsIHRoaXMuX3N0YWJsZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRoZW4ocyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcInd0ZiBjdHggdGhlblwiLCB0aGlzLl9pZCwgcmVhc29uLCB0aGlzLl9fbG9ja3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICF0aGlzLl9fcmV0YWlucy5hbGwgJiYgdGhpcy5kZXN0cm95KClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wZXJzaXN0ZW5jZVRtXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMudGhlbihzID0+ICghdGhpcy5fX3JldGFpbnMuYWxsICYmIHRoaXMuZGVzdHJveSgpKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogb3JkZXIgZGVzdHJveSBvZiBsb2NhbCBzdG9yZXNcbiAgICAgKi9cbiAgICBkZXN0cm95KCkge1xuICAgICAgICBsZXQgY3R4ID0gdGhpcy5fX2NvbnRleHQ7XG4gICAgICAgIFxuICAgICAgICAvL2NvbnNvbGUud2FybihcImRlc3Ryb3lcIiwgdGhpcy5faWQpO1xuICAgICAgICB0aGlzLmVtaXQoXCJkZXN0cm95XCIpO1xuICAgICAgICBPYmplY3Qua2V5cyhcbiAgICAgICAgICAgIHRoaXMuX19saXN0ZW5pbmdcbiAgICAgICAgKS5mb3JFYWNoKFxuICAgICAgICAgICAgaWQgPT4gdGhpcy5fX2NvbnRleHRbaWRdLnJlbW92ZUxpc3RlbmVyKHRoaXMuX19saXN0ZW5pbmdbaWRdKVxuICAgICAgICApO1xuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX19saXN0ZW5pbmcgPSB7fTtcbiAgICAgICAgXG4gICAgICAgIGlmICggdGhpcy5faXNMb2NhbElkIClcbiAgICAgICAgICAgIGRlbGV0ZSBvcGVuQ29udGV4dHNbdGhpcy5faWRdO1xuICAgICAgICB0aGlzLl9mb2xsb3dlcnMubGVuZ3RoID0gMDtcbiAgICAgICAgXG4gICAgICAgIGZvciAoIGxldCBrZXkgaW4gY3R4IClcbiAgICAgICAgICAgIGlmICggIWlzRnVuY3Rpb24oY3R4W2tleV0pICkge1xuICAgICAgICAgICAgICAgIGlmICggY3R4W2tleV0uY29udGV4dE9iaiA9PT0gdGhpcyApXG4gICAgICAgICAgICAgICAgICAgIGN0eFtrZXldLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBjdHhba2V5XSA9IGN0eFtrZXldLmNvbnN0cnVjdG9yO1xuICAgICAgICAgICAgfVxuICAgICAgICB3aGlsZSAoIHRoaXMuX19taXhlZExpc3QubGVuZ3RoICkge1xuICAgICAgICAgICAgdGhpcy5fX21peGVkWzBdLnJlbW92ZUxpc3RlbmVyKHRoaXMuX19taXhlZExpc3Quc2hpZnQoKSk7XG4gICAgICAgICAgICB0aGlzLl9fbWl4ZWQuc2hpZnQoKS5kaXNwb3NlKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCB0aGlzLnBhcmVudCApIHtcbiAgICAgICAgICAgIHRoaXMucGFyZW50LnJlbW92ZUxpc3RlbmVyKHRoaXMuX19wYXJlbnRMaXN0KTtcbiAgICAgICAgICAgIHRoaXMucGFyZW50LmRpc3Bvc2UoXCJpc015UGFyZW50XCIpO1xuICAgICAgICAgICAgdGhpcy5wYXJlbnQuX3JtQ2hpbGQodGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gdGhpcy5kYXRhcyA9IHRoaXMuc3RhdGUgPSB0aGlzLmNvbnRleHQgPSB0aGlzLnN0b3JlcyA9IG51bGw7XG4gICAgICAgIC8vIHRoaXMuX2RhdGFzID0gdGhpcy5fc3RhdGUgPSB0aGlzLl9zdG9yZXMgPSBudWxsO1xuICAgICAgICBcbiAgICAgICAgXG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9Db250ZXh0LmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaXNzdHJpbmdcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJpc3N0cmluZ1wiXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImlzYXJyYXlcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJpc2FycmF5XCJcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXZlbnRzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiZXZlbnRzXCJcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaXNmdW5jdGlvblwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImlzZnVuY3Rpb25cIlxuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzaG9ydGlkXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwic2hvcnRpZFwiXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpICAyMDE3IENhaXBpIExhYnMgLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4gKlxuICogQGF1dGhvciA6IE5hdGhhbmFlbCBCcmF1blxuICogQGNvbnRhY3QgOiBjYWlwaWxhYnNAZ21haWwuY29tXG4gKi9cblxuLyoqXG4gKiBVbHRyYSBzY2FsYWJsZSBzdGF0ZS1hd2FyZSBzdG9yZVxuICpcbiAqIEB0b2RvIDogbG90IG9mIG9wdGltcy4uLlxuICovXG5cbnZhciBpc1N0cmluZyAgICAgPSByZXF1aXJlKCdpc3N0cmluZycpXG4gICAgLCBpc0FycmF5ICAgID0gcmVxdWlyZSgnaXNhcnJheScpXG4gICAgLCBpc0Z1bmN0aW9uID0gcmVxdWlyZSgnaXNmdW5jdGlvbicpXG4gICAgLFxuICAgIENvbnRleHQgICAgICA9IHJlcXVpcmUoJy4vQ29udGV4dCcpLFxuICAgIEV2ZW50RW1pdHRlciA9IHJlcXVpcmUoJ2V2ZW50cycpLFxuICAgIHNob3J0aWQgICAgICA9IHJlcXVpcmUoJ3Nob3J0aWQnKSxcbiAgICBvYmpQcm90byAgICAgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Yoe30pLFxuICAgIG9wZW5Db250ZXh0cyA9IHt9O1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0b3JlIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgICBcbiAgICBzdGF0aWMgdXNlID0gW107Ly8gb3ZlcnJpZGFibGUgbGlzdCBvZiBzb3VyY2Ugc3RvcmVzXG4gICAgc3RhdGljIGZvbGxvdzsvLyBvdmVycmlkYWJsZSBsaXN0IG9mIHN0b3JlIHRoYXQgd2lsbCBhbGxvdyBwdXNoIGlmIHVwZGF0ZWRcbiAgICBzdGF0aWMgcmVxdWlyZTtcbiAgICBzdGF0aWMgc3RhdGljQ29udGV4dCA9IG5ldyBDb250ZXh0KHt9LCB7IGlkOiBcInN0YXRpY1wiIH0pO1xuICAgIHN0YXRpYyBpbml0aWFsU3RhdGUgPSB1bmRlZmluZWQ7Ly8gZGVmYXVsdCBzdGF0ZSBAZGVwcmVjaWF0ZWRcbiAgICBzdGF0aWMgc3RhdGUgPSB1bmRlZmluZWQ7Ly8gZGVmYXVsdCBzdGF0ZVxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICBzdGF0aWMgZGVmYXVsdE1heExpc3RlbmVycyA9IDEwMDtcbiAgICAvKipcbiAgICAgKiBpZiByZXRhaW4gZ29lcyB0byAwIDpcbiAgICAgKiBmYWxzZSB0byBub3QgZGVzdHJveSxcbiAgICAgKiAwIHRvIHN5bmMgYXV0byBkZXN0cm95XG4gICAgICogTXMgdG8gYXV0b2Rlc3Ryb3kgYWZ0ZXIgdG0gbXMgaWYgbm8gcmV0YWluIGhhcyBiZWVuIGNhbGxlZFxuICAgICAqIEB0eXBlIHtib29sZWFufEludH1cbiAgICAgKi9cbiAgICBzdGF0aWMgcGVyc2lzdGVuY2VUbSA9IGZhbHNlO1xuICAgIFxuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdG9yLCB3aWxsIGJ1aWxkIGEgcmVzY29wZSBzdG9yZVxuICAgICAqXG4gICAgICogKGNvbnRleHQsIHtyZXF1aXJlLHVzZSxhcHBseSxzdGF0ZSwgZGF0YXN9KVxuICAgICAqIChjb250ZXh0KVxuICAgICAqXG4gICAgICogQHBhcmFtIGNvbnRleHQge29iamVjdH0gY29udGV4dCB3aGVyZSB0byBmaW5kIHRoZSBvdGhlciBzdG9yZXMgKGRlZmF1bHQgOiBzdGF0aWMgc3RhdGljQ29udGV4dCApXG4gICAgICogQHBhcmFtIGtleXMge0FycmF5fSAocGFzc2VkIHRvIFN0b3JlOjptYXApIEV4IDogW1wic2Vzc2lvblwiLCBcIm90aGVyTmFtZWRTdG9yZTprZXlcIiwgb3RoZXJTdG9yZS5hcyhcIm90aGVyS2V5XCIpXVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB2YXIgYXJneiAgICAgICAgID0gWy4uLmFyZ3VtZW50c10sXG4gICAgICAgICAgICBfc3RhdGljICAgICAgPSB0aGlzLmNvbnN0cnVjdG9yLFxuICAgICAgICAgICAgY29udGV4dCAgICAgID0gIWlzQXJyYXkoYXJnelswXSkgJiYgIWlzU3RyaW5nKGFyZ3pbMF0pID8gYXJnei5zaGlmdCgpIDogX3N0YXRpYy5zdGF0aWNDb250ZXh0LFxuICAgICAgICAgICAgY2ZnICAgICAgICAgID0gYXJnelswXSAmJiAhaXNBcnJheShhcmd6WzBdKSAmJiAhaXNTdHJpbmcoYXJnelswXSkgPyBhcmd6LnNoaWZ0KCkgOiB7fSxcbiAgICAgICAgICAgIG5hbWUgICAgICAgICA9IGlzU3RyaW5nKGFyZ3pbMF0pID8gYXJnelswXSA6IGNmZy5uYW1lIHx8IF9zdGF0aWMubmFtZSxcbiAgICAgICAgICAgIHdhdGNocyAgICAgICA9IGlzQXJyYXkoYXJnelswXSkgPyBhcmd6LnNoaWZ0KCkgOiBjZmcudXNlIHx8IFtdLC8vIHdhdGNocyBuZWVkIHRvIGJlIGRlZmluZWQgYWZ0ZXIgYWxsIHRoZSBzdG9yZSBhcmUgcmVnaXN0ZXJlZCA6IHNvIHdlIGNhbid0IGRlYWwgd2l0aCBhbnkgXCJzdGF0aWMgdXNlXCIgYXV0b21hdGljbHlcbiAgICAgICAgICAgIGFwcGx5ICAgICAgICA9IGlzRnVuY3Rpb24oYXJnelswXSkgPyBhcmd6LnNoaWZ0KCkgOiBjZmcuYXBwbHkgfHwgbnVsbCxcbiAgICAgICAgICAgIGluaXRpYWxTdGF0ZSA9IF9zdGF0aWMuc3RhdGUgfHwgX3N0YXRpYy5pbml0aWFsU3RhdGU7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl91aWQgPSBjZmcuX3VpZCB8fCBzaG9ydGlkLmdlbmVyYXRlKCk7XG4gICAgICAgIHRoaXMuX21heExpc3RlbmVycyA9IGNmZy5kZWZhdWx0TWF4TGlzdGVuZXJzIHx8IFN0b3JlLmRlZmF1bHRNYXhMaXN0ZW5lcnM7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9fcmV0YWlucyA9IHsgYWxsOiAwIH07XG4gICAgICAgIHRoaXMuX19sb2NrcyA9IHsgYWxsOiAwIH07XG4gICAgICAgIHRoaXMuX29uU3RhYmlsaXplID0gW107XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9wZXJzaXN0ZW5jZVRtID0gY2ZnLnBlcnNpc3RlbmNlVG0gfHwgdGhpcy5jb25zdHJ1Y3Rvci5wZXJzaXN0ZW5jZVRtO1xuICAgICAgICBpZiAoIGlzU3RyaW5nKGFyZ3pbMF0pICkge1xuICAgICAgICAgICAgaWYgKCBjb250ZXh0Ll9fY29udGV4dFtuYW1lXSApXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwiUmVTY29wZTogT3ZlcndyaXRpbmcgYW4gZXhpc3Rpbmcgc3RhdGljIG5hbWVkIHN0b3JlICggJXMgKSAhIVwiLCBuYW1lKTtcbiAgICAgICAgICAgIGNvbnRleHQuX19jb250ZXh0W25hbWVdID0gdGhpcztcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKCBjZmcgJiYgY2ZnLm9uICkge1xuICAgICAgICAgICAgdGhpcy5vbihjZmcub24pO1xuICAgICAgICB9XG4gICAgICAgIC8vIHRoaXMuc3RhdGUgICAgICA9IHRoaXMuc3RhdGUgfHwge307XG4gICAgICAgIFxuICAgICAgICB0aGlzLl91c2UgPSBbLi4ud2F0Y2hzLCAuLi4oX3N0YXRpYy51c2UgfHwgW10pXTtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgXG4gICAgICAgIGlmICggY29udGV4dC5zdG9yZXMgKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRleHRPYmogPSBjb250ZXh0O1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dC5zdG9yZXM7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRleHRPYmogPSBuZXcgQ29udGV4dChjb250ZXh0KTtcbiAgICAgICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQuc3RvcmVzO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgdGhpcy5fc3RhYmxlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fcmV2ID0gMTtcbiAgICAgICAgdGhpcy5fcmV2cyA9IHt9O1xuICAgICAgICB0aGlzLnN0b3JlcyA9IHt9O1xuICAgICAgICB0aGlzLl9yZXF1aXJlID0gW107XG4gICAgICAgIFxuICAgICAgICBpZiAoIF9zdGF0aWMucmVxdWlyZSApXG4gICAgICAgICAgICB0aGlzLl9yZXF1aXJlLnB1c2goLi4uX3N0YXRpYy5yZXF1aXJlKTtcbiAgICAgICAgaWYgKCBjZmcucmVxdWlyZSApXG4gICAgICAgICAgICB0aGlzLl9yZXF1aXJlLnB1c2goLi4uY2ZnLnJlcXVpcmUpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fZm9sbG93ZXJzID0gW107XG4gICAgICAgIFxuICAgICAgICBpZiAoIF9zdGF0aWMuZGF0YXMgIT09IHVuZGVmaW5lZCApXG4gICAgICAgICAgICB0aGlzLmRhdGFzID0geyAuLi5fc3RhdGljLmRhdGFzIH07XG4gICAgICAgIGlmICggY2ZnLmhhc093blByb3BlcnR5KFwiZGF0YXNcIikgJiYgY2ZnLmRhdGFzICE9PSB1bmRlZmluZWQgKVxuICAgICAgICAgICAgdGhpcy5kYXRhcyA9IGNmZy5kYXRhcztcbiAgICAgICAgaWYgKCBjZmcuaGFzT3duUHJvcGVydHkoXCJzdGF0ZVwiKSAmJiBjZmcuc3RhdGUgIT09IHVuZGVmaW5lZCApXG4gICAgICAgICAgICBpbml0aWFsU3RhdGUgPSB7IC4uLmluaXRpYWxTdGF0ZSwgLi4uY2ZnLnN0YXRlIH07XG4gICAgICAgIFxuICAgICAgICBpZiAoIGFwcGx5IClcbiAgICAgICAgICAgIHRoaXMuYXBwbHkgPSBhcHBseTtcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICBpZiAoIGluaXRpYWxTdGF0ZSB8fCB0aGlzLl91c2UubGVuZ3RoICkgey8vIHN5bmMgYXBwbHlcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICAgICAgLi4uKGluaXRpYWxTdGF0ZSB8fCB7fSksXG4gICAgICAgICAgICAgICAgLi4uY29udGV4dC5tYXAodGhpcywgdGhpcy5fdXNlKVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmICggdGhpcy5pc0NvbXBsZXRlKCkgJiYgdGhpcy5kYXRhcyA9PT0gdW5kZWZpbmVkIClcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGFzID0gdGhpcy5hcHBseSh0aGlzLmRhdGFzLCB0aGlzLnN0YXRlLCB0aGlzLnN0YXRlKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9zdGFibGUgPSB0aGlzLmRhdGFzICE9PSB1bmRlZmluZWQ7Ly8gc3RhYmxlIGlmIGl0IGhhdmUgaW5pdGlhbCByZXN1bHQgZGF0YXNcbiAgICAgICAgIXRoaXMuX3N0YWJsZSAmJiB0aGlzLmVtaXQoJ3Vuc3RhYmxlJywgdGhpcy5zdGF0ZSk7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIGdldCBhIEJ1aWxkZXIta2V5IHBhaXIgZm9yIFN0b3JlOjptYXBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgICAqIEByZXR1cm5zIHt7c3RvcmU6IFN0b3JlLCBuYW1lOiAqfX1cbiAgICAgKi9cbiAgICBzdGF0aWMgYXMoIG5hbWUgKSB7XG4gICAgICAgIHJldHVybiB7IHN0b3JlOiB0aGlzLCBuYW1lIH07XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIE1hcCBhbGwgbmFtZWQgc3RvcmVzIGluIHtrZXlzfSB0byB0aGUge29iamVjdH0ncyBzdGF0ZVxuICAgICAqIEhvb2sgY29tcG9uZW50V2lsbFVubW91bnQgKGZvciByZWFjdCBjb21wKSBvciBkZXN0cm95IHRvIHVuQmluZCB0aGVtIGF1dG9tYXRpY2FsbHlcbiAgICAgKiBAc3RhdGljXG4gICAgICogQHBhcmFtIG9iamVjdCB7UmVhY3QuQ29tcG9uZW50fFN0b3JlfC4uLn0gdGFyZ2V0IHN0YXRlIGF3YXJlIG9iamVjdFxuICAgICAqIEBwYXJhbSBrZXlzIHtBcnJheX0gRXggOiBbXCJzZXNzaW9uXCIsIFwib3RoZXJTdGF0aWNOYW1lZFN0b3JlOmtleVwiLCBzdG9yZS5hcygnYW5vdGhlcktleScpXVxuICAgICAqL1xuICAgIHN0YXRpYyBtYXAoIGNvbXBvbmVudCwga2V5cywgY29udGV4dCwgb3JpZ2luLCBzZXRJbml0aWFsID0gZmFsc2UgKSB7XG4gICAgICAgIHZhciB0YXJnZXRSZXZzID0gY29tcG9uZW50Ll9yZXZzIHx8IHt9O1xuICAgICAgICB2YXIgdGFyZ2V0Q29udGV4dCA9IGNvbXBvbmVudC5zdG9yZXMgfHwgKGNvbXBvbmVudC5zdG9yZXMgPSB7fSk7XG4gICAgICAgIHZhciBpbml0aWFsT3V0cHV0cyA9IHt9O1xuICAgICAgICBrZXlzID0gaXNBcnJheShrZXlzKSA/IFsuLi5rZXlzXSA6IFtrZXlzXTtcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICBjb250ZXh0ID0gY29udGV4dCB8fCBTdG9yZS5zdGF0aWNDb250ZXh0O1xuICAgICAgICBcbiAgICAgICAgLy8gaWYgKCF0YXJnZXRDb250ZXh0Ll9fY29udGV4dClcbiAgICAgICAgLy8gICAgIGRlYnVnZ2VyO1xuICAgICAgICBcbiAgICAgICAga2V5cyA9IGtleXMuZmlsdGVyKFxuICAgICAgICAgICAgLy8gQHRvZG8gOiB1c2UgcXVlcnkgcmVmc1xuICAgICAgICAgICAgLy8gKHN0b3JlKShcXC5zdG9yZSkqKFxcWyhcXCp8KHByb3BzKVxcdyspKylcXF0pPyhcXDphbGlhcylcbiAgICAgICAgICAgICgga2V5ICkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICggIWtleSApIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIk5vdCBhIG1hcHBhYmxlIHN0b3JlIGl0ZW0gJ1wiICsga2V5ICsgXCInIGluIFwiICsgb3JpZ2luICsgJyAhIScpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxldCBuYW1lLFxuICAgICAgICAgICAgICAgICAgICBhbGlhcyxcbiAgICAgICAgICAgICAgICAgICAgc3RvcmU7XG4gICAgICAgICAgICAgICAgaWYgKCBrZXkuc3RvcmUgJiYga2V5Lm5hbWUgKSB7XG4gICAgICAgICAgICAgICAgICAgIGFsaWFzID0gbmFtZSA9IGtleS5uYW1lO1xuICAgICAgICAgICAgICAgICAgICBzdG9yZSA9IGtleS5zdG9yZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoIGlzRnVuY3Rpb24oa2V5KSApIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZSA9IGFsaWFzID0ga2V5Lm5hbWUgfHwga2V5LmRlZmF1bHROYW1lO1xuICAgICAgICAgICAgICAgICAgICBzdG9yZSA9IGtleTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGtleSA9IGtleS5tYXRjaCgvKFtcXHdfXSspKD86XFw6XFxbKFxcKilcXF0pPyg/OlxcOihcXCopKT8vKTtcbiAgICAgICAgICAgICAgICAgICAgbmFtZSA9IGtleVswXTtcbiAgICAgICAgICAgICAgICAgICAgc3RvcmUgPSBjb250ZXh0LnN0b3Jlc1trZXlbMF1dO1xuICAgICAgICAgICAgICAgICAgICBhbGlhcyA9IGtleVsxXSA9PSAnKicgPyBudWxsIDoga2V5WzJdIHx8IGtleVswXTsvLyBhbGxvdyBiaW5kaW5nIHByb3BzICAoWypdKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAoIHRhcmdldFJldnNbbmFtZV0gKSByZXR1cm4gZmFsc2U7Ly8gaWdub3JlIGRibCB1c2VzIGZvciBub3dcbiAgICAgICAgICAgICAgICBpZiAoICFzdG9yZSApIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIk5vdCBhIG1hcHBhYmxlIHN0b3JlIGl0ZW0gJ1wiICsgbmFtZSArIFwiL1wiICsgYWxpYXMgKyBcIicgaW4gXCIgKyBvcmlnaW4gKyAnICEhJywgc3RvcmUpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKCBpc0Z1bmN0aW9uKHN0b3JlKSApIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5fbW91bnQobmFtZSlcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQuc3RvcmVzW25hbWVdLmJpbmQoY29tcG9uZW50LCBhbGlhcywgc2V0SW5pdGlhbCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIGlmICggY29udGV4dC5fX2NvbnRleHRba2V5WzBdXS5zdGF0ZSApIHsvLyBkbyBzeW5jIHB1c2ggYWZ0ZXIgY29uc3RydWN0b3JcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGNvbnRleHQuX19jb250ZXh0W2tleVswXV0ucHVzaCgpO1xuICAgICAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzdG9yZS5iaW5kKGNvbXBvbmVudCwgYWxpYXMsIHNldEluaXRpYWwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0YXJnZXRSZXZzW2FsaWFzXSA9IHRhcmdldFJldnNbYWxpYXNdIHx8IHRydWU7XG4gICAgICAgICAgICAgICAgIXRhcmdldENvbnRleHRbbmFtZV0gJiYgKHRhcmdldENvbnRleHRbbmFtZV0gPSBjb250ZXh0LnN0b3Jlc1tuYW1lXSk7XG4gICAgICAgICAgICAgICAgaWYgKCBjb250ZXh0LnN0b3Jlc1tuYW1lXS5oYXNPd25Qcm9wZXJ0eSgnZGF0YXMnKSApXG4gICAgICAgICAgICAgICAgICAgIGluaXRpYWxPdXRwdXRzW25hbWVdID0gY29udGV4dC5kYXRhc1tuYW1lXTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgdmFyIG1peGVkQ1dVbm1vdW50LFxuICAgICAgICAgICAgdW5Nb3VudEtleSA9IGNvbXBvbmVudC5pc1JlYWN0Q29tcG9uZW50ID8gXCJjb21wb25lbnRXaWxsVW5tb3VudFwiIDogXCJkZXN0cm95XCI7XG4gICAgICAgIFxuICAgICAgICBpZiAoIGNvbXBvbmVudC5oYXNPd25Qcm9wZXJ0eSh1bk1vdW50S2V5KSApIHtcbiAgICAgICAgICAgIG1peGVkQ1dVbm1vdW50ID0gY29tcG9uZW50W3VuTW91bnRLZXldO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBjb21wb25lbnRbdW5Nb3VudEtleV0gPSBmdW5jdGlvbiAoKSB7Ly8gdG9kbyBob3BcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzW3VuTW91bnRLZXldO1xuICAgICAgICAgICAgaWYgKCBtaXhlZENXVW5tb3VudCApXG4gICAgICAgICAgICAgICAgdGhpc1t1bk1vdW50S2V5XSA9IG1peGVkQ1dVbm1vdW50O1xuICAgICAgICAgICAga2V5cy5tYXAoXG4gICAgICAgICAgICAgICAgKCBrZXkgKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpYXMsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9yZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBrZXkuc3RvcmUgJiYga2V5Lm5hbWUgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlhcyA9IG5hbWUgPSBrZXkubmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlID0ga2V5LnN0b3JlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKCBpc0Z1bmN0aW9uKGtleSkgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lID0gYWxpYXMgPSBrZXkubmFtZSB8fCBrZXkuZGVmYXVsdE5hbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9yZSA9IGNvbnRleHQuc3RvcmVzW25hbWVdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5ID0ga2V5LnNwbGl0KCc6Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lID0ga2V5WzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmUgPSBjb250ZXh0LnN0b3Jlc1trZXlbMF1dO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpYXMgPSBrZXlbMV0gfHwga2V5WzBdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBzdG9yZSAmJiAhaXNGdW5jdGlvbihzdG9yZSkgJiYgc3RvcmUudW5CaW5kKGNvbXBvbmVudCwgYWxpYXMpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzW3VuTW91bnRLZXldICYmIHRoaXNbdW5Nb3VudEtleV0uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGluaXRpYWxPdXRwdXRzO1xuICAgIH1cbiAgICBcbiAgICBcbiAgICAvKipcbiAgICAgKiBPdmVycmlkYWJsZSBtZXRob2QgdG8ga25vdyBpZiBhIHN0YXRlIGNoYW5nZSBzaG91bGQgYmUgcHJvcGFnIHRvIHRoZSBsaXN0ZW5pbmcgc3RvcmVzICYgY29tcG9uZW50c1xuICAgICAqIElmIHN0YXRpYyBmb2xsb3cgaXMgZGVmaW5lZCwgc2hvdWxkUHJvcGFnIHdpbGwgcmV0dXJuIHRydWUgaWYgYW55IG9mIHRoZSBcImZvbGxvd1wiIGtleXMgd2FzIHVwZGF0ZWRcbiAgICAgKiBJZiBub3QgaXQgd2lsbCBhbHdheXMgcmV0dXJuIHRydWVcbiAgICAgKi9cbiAgICBzaG91bGRQcm9wYWcoIG5EYXRhcyApIHtcbiAgICAgICAgdmFyIF9zdGF0aWMgPSB0aGlzLmNvbnN0cnVjdG9yLCByLFxuICAgICAgICAgICAgY0RhdGFzICA9IHRoaXMuZGF0YXM7XG4gICAgICAgIFxuICAgICAgICAvLyBpZiAoICFjU3RhdGUgKVxuICAgICAgICAvLyAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIGlmICggIWNEYXRhcyAmJiAoIV9zdGF0aWMuZm9sbG93IHx8ICFfc3RhdGljLmZvbGxvdy5sZW5ndGggfHxcbiAgICAgICAgICAgICAgICBfc3RhdGljLmZvbGxvdyAmJiBfc3RhdGljLmZvbGxvdy5yZWR1Y2UoKCByLCBpICkgPT4gKHIgfHwgbkRhdGFzICYmIG5EYXRhc1tpXSksIGZhbHNlKSkgKVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIFxuICAgICAgICBpZiAoIGlzQXJyYXkoX3N0YXRpYy5mb2xsb3cpIClcbiAgICAgICAgICAgIF9zdGF0aWMuZm9sbG93LmZvckVhY2goXG4gICAgICAgICAgICAgICAgKCBrZXkgKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHIgPSByIHx8IChuRGF0YXMgPyBjRGF0YXNba2V5XSAhPT0gbkRhdGFzW2tleV0gOiBjRGF0YXMgJiYgY0RhdGFzW2tleV0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgZWxzZSBpZiAoIF9zdGF0aWMuZm9sbG93ID09PSAnc3RyaWN0JyApXG4gICAgICAgICAgICByID0gbkRhdGFzID09PSBjRGF0YXM7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY0RhdGFzICYmIE9iamVjdC5rZXlzKGNEYXRhcykuZm9yRWFjaChcbiAgICAgICAgICAgICAgICAoIGtleSApID0+IHtcbiAgICAgICAgICAgICAgICAgICAgciA9IHIgfHwgKG5EYXRhcyA/IGNEYXRhc1trZXldICE9PSBuRGF0YXNba2V5XSA6IGNEYXRhcyAmJiBjRGF0YXNba2V5XSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgbkRhdGFzICYmIE9iamVjdC5rZXlzKG5EYXRhcykuZm9yRWFjaChcbiAgICAgICAgICAgICAgICAoIGtleSApID0+IHtcbiAgICAgICAgICAgICAgICAgICAgciA9IHIgfHwgKG5EYXRhcyA/IGNEYXRhc1trZXldICE9PSBuRGF0YXNba2V5XSA6IGNEYXRhcyAmJiBjRGF0YXNba2V5XSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gISFyO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBPdmVycmlkYWJsZSBhcHBsaWVyIC8gcmVtYXBwZXJcbiAgICAgKiBJZiBzdGF0ZSBvciBsYXN0UHVibGljU3RhdGUgYXJlIHNpbXBsZSBoYXNoIG1hcHMgYXBwbHkgd2lsbCByZXR1cm4gey4uLmRhdGFzLCAuLi5zdGF0ZX1cbiAgICAgKiBpZiBub3QgaXQgd2lsbCByZXR1cm4gdGhlIGxhc3QgcHJpdmF0ZSBzdGF0ZVxuICAgICAqIEBwYXJhbSBkYXRhc1xuICAgICAqIEBwYXJhbSBzdGF0ZVxuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqL1xuICAgIGFwcGx5KCBkYXRhcywgc3RhdGUsIGNoYW5nZXMgKSB7XG4gICAgICAgIHN0YXRlID0gc3RhdGUgfHwgdGhpcy5zdGF0ZTtcbiAgICAgICAgXG4gICAgICAgIGlmICggdGhpcy5yZWZpbmUgKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVmaW5lKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIFxuICAgICAgICBpZiAoICFkYXRhcyB8fCBkYXRhcy5fX3Byb3RvX18gIT09IG9ialByb3RvIHx8IHN0YXRlLl9fcHJvdG9fXyAhPT0gb2JqUHJvdG8gKVxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICByZXR1cm4geyAuLi5kYXRhcywgLi4uc3RhdGUgfVxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBAZGVwcmVjaWF0ZWRcbiAgICAgKiBAcGFyYW0gZGF0YXNcbiAgICAgKiBAcGFyYW0gc3RhdGVcbiAgICAgKiBAcGFyYW0gY2hhbmdlc1xuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqL1xuICAgIHJlZmluZSggZGF0YXMsIHN0YXRlLCBjaGFuZ2VzICkge1xuICAgICAgICBzdGF0ZSA9IHN0YXRlIHx8IHRoaXMuc3RhdGU7XG4gICAgICAgIFxuICAgICAgICBpZiAoICFkYXRhcyB8fCBkYXRhcy5fX3Byb3RvX18gIT09IG9ialByb3RvIHx8IHN0YXRlLl9fcHJvdG9fXyAhPT0gb2JqUHJvdG8gKVxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICByZXR1cm4geyAuLi5kYXRhcywgLi4uc3RhdGUgfVxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBEZWJvdW5jZSB0aGlzIHN0b3JlIHByb3BhZ2F0aW9uICggJiByZWR1Y2luZyApXG4gICAgICogQHBhcmFtIGNiXG4gICAgICovXG4gICAgc3RhYmlsaXplKCBjYiApIHtcbiAgICAgICAgdmFyIG1lID0gdGhpcztcbiAgICAgICAgY2IgJiYgbWUub25jZSgnc3RhYmxlJywgY2IpO1xuICAgICAgICB0aGlzLl9zdGFibGUgJiYgdGhpcy5lbWl0KCd1bnN0YWJsZScsIHRoaXMuc3RhdGUsIHRoaXMuZGF0YXMpO1xuICAgICAgICBcbiAgICAgICAgbWUuX3N0YWJsZSA9IGZhbHNlO1xuICAgICAgICBcbiAgICAgICAgaWYgKCB0aGlzLl9zdGFiaWxpemVyIClcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9zdGFiaWxpemVyKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX3N0YWJpbGl6ZXIgPSBzZXRUaW1lb3V0KFxuICAgICAgICAgICAgdGhpcy5wdXNoLmJpbmQoXG4gICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICgpID0+IHsvL0B0b2RvXG4gICAgICAgICAgICAgICAgICAgIC8vIG1lLl9zdGFibGUgICAgICAgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zdGFiaWxpemVyID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5yZWxlYXNlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKSk7XG4gICAgfVxuICAgIFxuICAgIGRpc3BhdGNoKCBldmVudCApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBQdWxsIHN0b3JlcyBpbiB0aGUgcHJpdmF0ZSBzdGF0ZVxuICAgICAqIEBwYXJhbSBzdG9yZXMgIHtBcnJheX0gKHBhc3NlZCB0byBTdG9yZTo6bWFwKSBFeCA6IFtcInNlc3Npb25cIiwgXCJvdGhlck5hbWVkU3RvcmU6a2V5XCIsIG90aGVyU3RvcmUuYXMoXCJvdGhlcktleVwiKV1cbiAgICAgKi9cbiAgICBwdWxsKCBzdG9yZXMsIGRvV2FpdCwgb3JpZ2luICkge1xuICAgICAgICBsZXQgaW5pdGlhbE91dHB1dHMgPSB0aGlzLmNvbnRleHRPYmoubWFwKHRoaXMsIHN0b3Jlcyk7XG4gICAgICAgIGlmICggZG9XYWl0ICkge1xuICAgICAgICAgICAgdGhpcy53YWl0KCk7XG4gICAgICAgICAgICBzdG9yZXMuZm9yRWFjaCgoIHMgKSA9PiB0aGlzLmNvbnRleHRbc10gJiYgdGhpcy53YWl0KHRoaXMuY29udGV4dFtzXSkpO1xuICAgICAgICAgICAgdGhpcy5yZWxlYXNlKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGluaXRpYWxPdXRwdXRzO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBBcHBseSBhcHBseS9yZW1hcCBvbiB0aGUgcHJpdmF0ZSBzdGF0ZSAmIHB1c2ggdGhlIHJlc3VsdGluZyBcInB1YmxpY1wiIHN0YXRlIHRvIGZvbGxvd2Vyc1xuICAgICAqIEBwYXJhbSBjYlxuICAgICAqL1xuICAgIHB1c2goIGRhdGFzLCBmb3JjZSwgY2IgKSB7XG4gICAgICAgIGNiID0gZm9yY2UgPT09IHRydWUgPyBjYiA6IGZvcmNlO1xuICAgICAgICBmb3JjZSA9IGZvcmNlID09PSB0cnVlO1xuICAgICAgICB2YXIgaSAgICAgICAgID0gMCxcbiAgICAgICAgICAgIG1lICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBuZXh0U3RhdGUgPSAhZGF0YXMgJiYgeyAuLi50aGlzLnN0YXRlLCAuLi50aGlzLl9jaGFuZ2VzU1cgfSB8fCB0aGlzLnN0YXRlLFxuICAgICAgICAgICAgbmV4dERhdGFzID0gZGF0YXMgfHxcbiAgICAgICAgICAgICAgICAodGhpcy5pc0NvbXBsZXRlKG5leHRTdGF0ZSkgPyB0aGlzLmFwcGx5KHRoaXMuZGF0YXMsIG5leHRTdGF0ZSwgdGhpcy5fY2hhbmdlc1NXKSA6IHRoaXMuZGF0YXMpO1xuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIHRoaXMuc3RhdGUgPSBuZXh0U3RhdGU7XG4gICAgICAgIGlmICggIWZvcmNlICYmXG4gICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgKCF0aGlzLmRhdGFzICYmIHRoaXMuZGF0YXMgPT09IG5leHREYXRhcykgfHwgIXRoaXMuc2hvdWxkUHJvcGFnKG5leHREYXRhcylcbiAgICAgICAgICAgIClcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBjYiAmJiBjYigpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0aGlzLmRhdGFzID0gbmV4dERhdGFzO1xuICAgICAgICB0aGlzLl9fbG9ja3MuYWxsKys7XG4gICAgICAgIHRoaXMucmVsZWFzZShjYik7XG4gICAgICAgIFxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBVcGRhdGUgdGhlIGN1cnJlbnQgcHJpdmF0ZSBzdGF0ZSAmIHB1c2ggaXQgb25jZSB0aGUgc3RvcmUgaXMgc3RhYmxlXG4gICAgICogQHBhcmFtIHBTdGF0ZVxuICAgICAqIEBwYXJhbSBjYlxuICAgICAqL1xuICAgIHNldFN0YXRlKCBwU3RhdGUsIGNiLCBzeW5jICkge1xuICAgICAgICB2YXIgaSAgICAgICA9IDAsIGNoYW5nZSxcbiAgICAgICAgICAgIGNoYW5nZXMgPSB0aGlzLl9jaGFuZ2VzU1cgPSB0aGlzLl9jaGFuZ2VzU1cgfHwge307XG4gICAgICAgIGZvciAoIHZhciBrIGluIHBTdGF0ZSApXG4gICAgICAgICAgICBpZiAoICF0aGlzLnN0YXRlIHx8IHBTdGF0ZS5oYXNPd25Qcm9wZXJ0eShrKVxuICAgICAgICAgICAgICAgICYmIChcbiAgICAgICAgICAgICAgICAgICAgcFN0YXRlW2tdICE9IHRoaXMuc3RhdGVba11cbiAgICAgICAgICAgICAgICAgICAgfHxcbiAgICAgICAgICAgICAgICAgICAgKHRoaXMuc3RhdGVba10gJiYgcFN0YXRlW2tdICYmIChwU3RhdGVba10uX3JldiAhPSB0aGlzLl9yZXZzW2tdKSkvLyByZXYvaGFzaCB1cGRhdGVcbiAgICAgICAgICAgICAgICApICkge1xuICAgICAgICAgICAgICAgIGNoYW5nZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5fcmV2c1trXSA9IHBTdGF0ZVtrXSAmJiBwU3RhdGVba10uX3JldiB8fCB0cnVlO1xuICAgICAgICAgICAgICAgIGNoYW5nZXNba10gPSBwU3RhdGVba107XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAoIHN5bmMgKSB7XG4gICAgICAgICAgICB0aGlzLnB1c2goKTtcbiAgICAgICAgICAgIGNiICYmIGNiKCk7XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmICggY2hhbmdlICkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhYmlsaXplKGNiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgY2IgJiYgY2IoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogVXBkYXRlIHRoZSBjdXJyZW50IHByaXZhdGUgc3RhdGUgJiBwdXNoIGl0IG9uY2UgdGhlIHN0b3JlIGlzIHN0YWJsZVxuICAgICAqIEBwYXJhbSBwU3RhdGVcbiAgICAgKiBAcGFyYW0gY2JcbiAgICAgKi9cbiAgICBzZXRTdGF0ZVN5bmMoIHBTdGF0ZSApIHtcbiAgICAgICAgdmFyIGkgICAgICAgPSAwLCBjaGFuZ2UsXG4gICAgICAgICAgICBjaGFuZ2VzID0gdGhpcy5fY2hhbmdlc1NXID0gdGhpcy5fY2hhbmdlc1NXIHx8IHt9O1xuICAgICAgICBmb3IgKCB2YXIgayBpbiBwU3RhdGUgKVxuICAgICAgICAgICAgaWYgKCAhdGhpcy5zdGF0ZSB8fCBwU3RhdGUuaGFzT3duUHJvcGVydHkoaylcbiAgICAgICAgICAgICAgICAmJiAoXG4gICAgICAgICAgICAgICAgICAgIHBTdGF0ZVtrXSAhPSB0aGlzLnN0YXRlW2tdXG4gICAgICAgICAgICAgICAgICAgIHx8XG4gICAgICAgICAgICAgICAgICAgICh0aGlzLnN0YXRlW2tdICYmIHBTdGF0ZVtrXSAmJiAocFN0YXRlW2tdLl9yZXYgIT0gdGhpcy5fcmV2c1trXSkpLy8gcmV2L2hhc2ggdXBkYXRlXG4gICAgICAgICAgICAgICAgKSApIHtcbiAgICAgICAgICAgICAgICBjaGFuZ2UgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuX3JldnNba10gPSBwU3RhdGVba10gJiYgcFN0YXRlW2tdLl9yZXYgfHwgdHJ1ZTtcbiAgICAgICAgICAgICAgICBjaGFuZ2VzW2tdID0gcFN0YXRlW2tdO1xuICAgICAgICAgICAgfVxuICAgICAgICB0aGlzLnB1c2goKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YXM7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIFJlcGxhY2UgdGhlIGN1cnJlbnQgcHJpdmF0ZSBzdGF0ZSAmIHB1c2ggaXQgb25jZSB0aGUgc3RvcmUgaXMgc3RhYmxlXG4gICAgICogQHBhcmFtIHBTdGF0ZVxuICAgICAqIEBwYXJhbSBjYlxuICAgICAqL1xuICAgIHJlcGxhY2VTdGF0ZSggcFN0YXRlLCBjYiApIHtcbiAgICAgICAgdmFyIGkgPSAwLCBtZSA9IHRoaXM7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBwU3RhdGU7XG4gICAgICAgIFxuICAgICAgICB0aGlzLnN0YWJpbGl6ZShjYik7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIGdldCBhIHN0b3JlLWtleSBwYWlyIGZvciBTdG9yZTo6bWFwXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICAgKiBAcmV0dXJucyB7e3N0b3JlOiBTdG9yZSwgbmFtZTogKn19XG4gICAgICovXG4gICAgYXMoIG5hbWUgKSB7XG4gICAgICAgIHJldHVybiB7IHN0b3JlOiB0aGlzLCBuYW1lIH07XG4gICAgfVxuICAgIFxuICAgIG9uKCBsaXN0cyApIHtcbiAgICAgICAgaWYgKCAhaXNTdHJpbmcobGlzdHMpICYmIGxpc3RzIClcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGxpc3RzKS5mb3JFYWNoKGsgPT4gc3VwZXIub24oaywgbGlzdHNba10pKTtcbiAgICAgICAgZWxzZSBzdXBlci5vbiguLi5hcmd1bWVudHMpO1xuICAgIH1cbiAgICBcbiAgICByZW1vdmVMaXN0ZW5lciggbGlzdHMgKSB7XG4gICAgICAgIGlmICggIWlzU3RyaW5nKGxpc3RzKSAmJiBsaXN0cyApXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhsaXN0cykuZm9yRWFjaChrID0+IHN1cGVyLnJlbW92ZUxpc3RlbmVyKGssIGxpc3RzW2tdKSk7XG4gICAgICAgIGVsc2Ugc3VwZXIucmVtb3ZlTGlzdGVuZXIoLi4uYXJndW1lbnRzKTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogcmVsaW5rIGJpbmRpbmdzICYgcmVxdWlyZXNcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgICAqIEByZXR1cm5zIHt7c3RvcmU6IFN0b3JlLCBuYW1lOiAqfX1cbiAgICAgKi9cbiAgICByZWxpbmsoIGZyb20gKSB7XG4gICAgICAgIGxldCBjb250ZXh0ID0gdGhpcy5jb250ZXh0T2JqLFxuICAgICAgICAgICAgX3N0YXRpYyA9IHRoaXMuY29uc3RydWN0b3I7XG4gICAgICAgIGlmICggX3N0YXRpYy51c2UgKSB7XG4gICAgICAgICAgICAvL3RvZG8gdW5saW5rXG4gICAgICAgICAgICB0aGlzLnB1bGwoX3N0YXRpYy51c2UsIGZhbHNlLCBmcm9tKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKCB0aGlzLl9yZXF1aXJlICkge1xuICAgICAgICAgICAgdGhpcy5fcmVxdWlyZS5mb3JFYWNoKFxuICAgICAgICAgICAgICAgIHN0b3JlID0+IChcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53YWl0KGNvbnRleHQuX19jb250ZXh0W3N0b3JlXSlcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIGlzIGNvbXBsZXRlIChhbGwgcmVxdWllcmVkIGtleXMgYXJlIGhlcmUpXG4gICAgICogQHJldHVybnMgYm9vbFxuICAgICAqL1xuICAgIGlzQ29tcGxldGUoIHN0YXRlID0gdGhpcy5zdGF0ZSApIHtcbiAgICAgICAgdmFyIF9zdGF0aWMgPSB0aGlzLmNvbnN0cnVjdG9yO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgIXRoaXMuX3JlcXVpcmVcbiAgICAgICAgICAgIHx8ICF0aGlzLl9yZXF1aXJlLmxlbmd0aFxuICAgICAgICAgICAgfHwgc3RhdGUgJiYgdGhpcy5fcmVxdWlyZS5yZWR1Y2UoXG4gICAgICAgICAgICAgICAgKCByLCBrZXkgKSA9PiAociAmJiBzdGF0ZVtrZXldKSxcbiAgICAgICAgICAgICAgICB0cnVlXG4gICAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIGlzIHN0YWJsZVxuICAgICAqIEByZXR1cm5zIGJvb2xcbiAgICAgKi9cbiAgICBpc1N0YWJsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0YWJsZTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogVW4gYmluZCB0aGlzIHN0b3JlIG9mZiB0aGUgZ2l2ZW4gY29tcG9uZW50LWtleVxuICAgICAqIEBwYXJhbSBvYmpcbiAgICAgKiBAcGFyYW0ga2V5XG4gICAgICogQHJldHVybnMge0FycmF5LjwqPn1cbiAgICAgKi9cbiAgICB1bkJpbmQoIG9iaiwga2V5ICkge1xuICAgICAgICB2YXIgZm9sbG93ZXJzID0gdGhpcy5fZm9sbG93ZXJzLFxuICAgICAgICAgICAgaSAgICAgICAgID0gZm9sbG93ZXJzICYmIGZvbGxvd2Vycy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggZm9sbG93ZXJzICYmIGktLSApXG4gICAgICAgICAgICBpZiAoIGZvbGxvd2Vyc1tpXVswXSA9PSBvYmogJiYgZm9sbG93ZXJzW2ldWzFdID09IGtleSApXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZvbGxvd2Vycy5zcGxpY2UoaSwgMSk7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIEJpbmQgdGhpcyBzdG9yZSBjaGFuZ2VzIHRvIHRoZSBnaXZlbiBjb21wb25lbnQta2V5XG4gICAgICogQHBhcmFtIG9iaiB7UmVhY3QuQ29tcG9uZW50fFN0b3JlfGZ1bmN0aW9uKVxuICAgICAqIEBwYXJhbSBrZXkge3N0cmluZ30gb3B0aW9uYWwga2V5IHdoZXJlIHRvIG1hcCB0aGUgcHVibGljIHN0YXRlXG4gICAgICovXG4gICAgYmluZCggb2JqLCBrZXksIHNldEluaXRpYWwgPSB0cnVlICkge1xuICAgICAgICB0aGlzLl9mb2xsb3dlcnMucHVzaChbb2JqLCBrZXldKTtcbiAgICAgICAgaWYgKCBzZXRJbml0aWFsICYmIHRoaXMuZGF0YXMgJiYgdGhpcy5fc3RhYmxlICkge1xuICAgICAgICAgICAgaWYgKCB0eXBlb2Ygb2JqICE9IFwiZnVuY3Rpb25cIiApIHtcbiAgICAgICAgICAgICAgICBpZiAoIGtleSApIG9iai5zZXRTdGF0ZSh7IFtrZXldOiB0aGlzLmRhdGFzIH0pO1xuICAgICAgICAgICAgICAgIGVsc2Ugb2JqLnNldFN0YXRlKHRoaXMuZGF0YXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgb2JqKHRoaXMuZGF0YXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIG9uY2UoJ3N0YWJsZScsIGNiKVxuICAgICAqIEBwYXJhbSBvYmoge1JlYWN0LkNvbXBvbmVudHxTdG9yZXxmdW5jdGlvbilcbiAgICAgKiBAcGFyYW0ga2V5IHtzdHJpbmd9IG9wdGlvbmFsIGtleSB3aGVyZSB0byBtYXAgdGhlIHB1YmxpYyBzdGF0ZVxuICAgICAqL1xuICAgIHRoZW4oIGNiICkge1xuICAgICAgICBpZiAoIHRoaXMuX3N0YWJsZSApXG4gICAgICAgICAgICByZXR1cm4gY2IobnVsbCwgdGhpcy5kYXRhcyk7XG4gICAgICAgIHRoaXMub25jZSgnc3RhYmxlJywgZSA9PiBjYihudWxsLCB0aGlzLmRhdGFzKSk7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIEFkZCBhIGxvY2sgc28gdGhlIHN0b3JlIHdpbGwgbm90IHByb3BhZyBpdCBzdGF0ZSB1bnRpbGwgcmVsZWFzZSgpIGlzIGNhbGxcbiAgICAgKiBAcGFyYW0gcHJldmlvdXMge1N0b3JlfG51bWJlcnxBcnJheX0gQG9wdGlvbmFsIHdmIHRvIHdhaXQsIHJlbGVhc2VzIHRvIHdhaXQgb3IgYXJyYXkgb2Ygc3R1ZmYgdG8gd2FpdFxuICAgICAqIEByZXR1cm5zIHtUYXNrRmxvd31cbiAgICAgKi9cbiAgICB3YWl0KCBwcmV2aW91cyApIHtcbiAgICAgICAgaWYgKCB0eXBlb2YgcHJldmlvdXMgPT0gXCJudW1iZXJcIiApXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fX2xvY2tzLmFsbCArPSBwcmV2aW91cztcbiAgICAgICAgaWYgKCBpc0FycmF5KHByZXZpb3VzKSApXG4gICAgICAgICAgICByZXR1cm4gcHJldmlvdXMubWFwKHRoaXMud2FpdC5iaW5kKHRoaXMpKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX3N0YWJsZSAmJiB0aGlzLmVtaXQoJ3Vuc3RhYmxlJywgdGhpcy5zdGF0ZSwgdGhpcy5kYXRhcyk7XG4gICAgICAgIHRoaXMuX3N0YWJsZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9fbG9ja3MuYWxsKys7XG4gICAgICAgIFxuICAgICAgICBsZXQgcmVhc29uID0gaXNTdHJpbmcocHJldmlvdXMpID8gcHJldmlvdXMgOiBudWxsO1xuICAgICAgICBpZiAoIHJlYXNvbiApIHtcbiAgICAgICAgICAgIHRoaXMuX19sb2Nrc1tyZWFzb25dID0gdGhpcy5fX2xvY2tzW3JlYXNvbl0gfHwgMDtcbiAgICAgICAgICAgIHRoaXMuX19sb2Nrc1tyZWFzb25dKys7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCBwcmV2aW91cyAmJiBpc0Z1bmN0aW9uKHByZXZpb3VzLnRoZW4pICkge1xuICAgICAgICAgICAgcHJldmlvdXMudGhlbih0aGlzLnJlbGVhc2UuYmluZCh0aGlzLCBudWxsKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIERlY3JlYXNlIGxvY2tzIGZvciB0aGlzIHN0b3JlLCBpZiBpdCByZWFjaCAwICYgaXQgaGF2ZSBhIHB1YmxpYyBzdGF0ZSxcbiAgICAgKiBpdCB3aWxsIGJlIHByb3BhZ2F0ZWQgdG8gdGhlIGZvbGxvd2VycyxcbiAgICAgKiB0aGVuLCBhbGwgc3R1ZmYgcGFzc2VkIHRvIFwidGhlblwiIGNhbGwgYmFjayB3aWxsIGJlIGV4ZWMgLyByZWxlYXNlZFxuICAgICAqIEBwYXJhbSBkZXN5bmNcbiAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgKi9cbiAgICByZWxlYXNlKCByZWFzb24sIGNiICkge1xuICAgICAgICB2YXIgX3N0YXRpYyA9IHRoaXMuY29uc3RydWN0b3I7XG4gICAgICAgIGxldCBpID0gMCwgd2FzU3RhYmxlID0gdGhpcy5fc3RhYmxlO1xuICAgICAgICBcbiAgICAgICAgaWYgKCBpc0Z1bmN0aW9uKHJlYXNvbikgKSB7XG4gICAgICAgICAgICBjYiA9IHJlYXNvbjtcbiAgICAgICAgICAgIHJlYXNvbiA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmICggcmVhc29uICkge1xuICAgICAgICAgICAgaWYgKCB0aGlzLl9fbG9ja3NbcmVhc29uXSA9PSAwIClcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiUmVsZWFzZSBtb3JlIHRoYW4gbG9ja2luZyAhXCIsIHJlYXNvbik7XG4gICAgICAgICAgICB0aGlzLl9fbG9ja3NbcmVhc29uXSA9IHRoaXMuX19sb2Nrc1tyZWFzb25dIHx8IDA7XG4gICAgICAgICAgICB0aGlzLl9fbG9ja3NbcmVhc29uXS0tO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAoICFyZWFzb24gJiYgdGhpcy5fX2xvY2tzLmFsbCA9PSAwIClcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJSZWxlYXNlIG1vcmUgdGhhbiBsb2NraW5nICFcIik7XG4gICAgICAgIFxuICAgICAgICBpZiAoICEtLXRoaXMuX19sb2Nrcy5hbGwgJiYgdGhpcy5kYXRhcyAmJiB0aGlzLmlzQ29tcGxldGUoKSApIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YWJsZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLl9yZXYgPSAxICsgKHRoaXMuX3JldiArIDEpICUgMTAwMDAwMDsvL1xuICAgICAgICAgICAgaWYgKCB0aGlzLl9mb2xsb3dlcnMubGVuZ3RoIClcbiAgICAgICAgICAgICAgICB0aGlzLl9mb2xsb3dlcnMuZm9yRWFjaCgoIGZvbGxvd2VyICkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoICF0aGlzLmRhdGFzICkgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIHR5cGVvZiBmb2xsb3dlclswXSA9PSBcImZ1bmN0aW9uXCIgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb2xsb3dlclswXSh0aGlzLmRhdGFzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY2IgJiYgaSsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9sbG93ZXJbMF0uc2V0U3RhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGZvbGxvd2VyWzFdKSA/IHsgW2ZvbGxvd2VyWzFdXTogdGhpcy5kYXRhcyB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdGhpcy5kYXRhc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vY2IgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICgpID0+ICghKC0taSkgJiYgY2IoKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLylcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vZWxzZVxuICAgICAgICAgICAgIXdhc1N0YWJsZSAmJiB0aGlzLmVtaXQoJ3N0YWJsZScsIHRoaXMuZGF0YXMpO1xuICAgICAgICAgICAgdGhpcy5lbWl0KCd1cGRhdGUnLCB0aGlzLmRhdGFzKTtcbiAgICAgICAgICAgIGNiICYmIGNiKClcbiAgICAgICAgICAgIC8vXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBjYiAmJiB0aGlzLnRoZW4oY2IpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgXG4gICAgcmV0YWluKCByZWFzb24gKSB7XG4gICAgICAgIHRoaXMuX19yZXRhaW5zLmFsbCsrO1xuICAgICAgICBpZiAoIHJlYXNvbiApIHtcbiAgICAgICAgICAgIHRoaXMuX19yZXRhaW5zW3JlYXNvbl0gPSB0aGlzLl9fcmV0YWluc1tyZWFzb25dIHx8IDA7XG4gICAgICAgICAgICB0aGlzLl9fcmV0YWluc1tyZWFzb25dKys7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgZGlzcG9zZSggcmVhc29uICkge1xuICAgICAgICAvL2NvbnNvbGUud2FybihcImRpc3Bvc2VcIiwgcmVhc29uLCB0aGlzLl9fcmV0YWlucyk7XG4gICAgICAgIGlmICggcmVhc29uICkge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoICF0aGlzLl9fcmV0YWluc1tyZWFzb25dIClcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJEaXNwb3NlIG1vcmUgdGhhbiByZXRhaW5pbmcgIVwiKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5fX3JldGFpbnNbcmVhc29uXSA9IHRoaXMuX19yZXRhaW5zW3JlYXNvbl0gfHwgMDtcbiAgICAgICAgICAgIHRoaXMuX19yZXRhaW5zW3JlYXNvbl0tLTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIHRoaXMuX19yZXRhaW5zLmFsbCA9PSAwIClcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkRpc3Bvc2UgbW9yZSB0aGFuIHJldGFpbmluZyAhXCIpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fX3JldGFpbnMuYWxsLS07XG4gICAgICAgIFxuICAgICAgICAvL2NvbnNvbGUud2FybihcImRpc3Bvc2VkXCIsIHJlYXNvbiwgdGhpcy5fX3JldGFpbnMpO1xuICAgICAgICBcbiAgICAgICAgaWYgKCAhdGhpcy5fX3JldGFpbnMuYWxsICkge1xuICAgICAgICAgICAgaWYgKCB0aGlzLl9wZXJzaXN0ZW5jZVRtICkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2Rlc3Ryb3lUTSAmJiBjbGVhclRpbWVvdXQodGhpcy5fZGVzdHJveVRNKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9kZXN0cm95VE0gPSBzZXRUaW1lb3V0KFxuICAgICAgICAgICAgICAgICAgICBlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGhlbihzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgY29uc29sZS5sb2coXCJ3dGYgICBcIiwgcmVhc29uLCAhdGhpcy5fX3JldGFpbnMuYWxsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhdGhpcy5fX3JldGFpbnMuYWxsICYmIHRoaXMuZGVzdHJveSgpXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcGVyc2lzdGVuY2VUbVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRoZW4ocyA9PiAoIXRoaXMuX19yZXRhaW5zLmFsbCAmJiB0aGlzLmRlc3Ryb3koKSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIC8vICBjb25zb2xlLmxvZyhcImRlc3Ryb3lcIiwgdGhpcy5fdWlkKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuZW1pdCgnZGVzdHJveScsIHRoaXMpO1xuICAgICAgICBpZiAoIHRoaXMuX3N0YWJpbGl6ZXIgKVxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX3N0YWJpbGl6ZXIpO1xuICAgICAgICBcbiAgICAgICAgaWYgKCB0aGlzLl9mb2xsb3dlcnMubGVuZ3RoIClcbiAgICAgICAgICAgIHRoaXMuX2ZvbGxvd2Vycy5mb3JFYWNoKFxuICAgICAgICAgICAgICAgICggZm9sbG93ZXIgKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICggdHlwZW9mIGZvbGxvd2VyWzBdICE9PSBcImZ1bmN0aW9uXCIgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIGZvbGxvd2VyWzBdLnN0b3JlcyApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGZvbGxvd2VyWzBdLnN0b3Jlc1tmb2xsb3dlclsxXV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICB0aGlzLl9mb2xsb3dlcnMubGVuZ3RoID0gMDtcbiAgICAgICAgdGhpcy5kZWFkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fcmV2cyA9IHRoaXMuZGF0YXMgPSB0aGlzLnN0YXRlID0gdGhpcy5jb250ZXh0ID0gbnVsbDtcbiAgICAgICAgdGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoKTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1N0b3JlLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==