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
	
	            // openContexts[id].register(ctx);
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
	            !parent._stable && _this.wait("isMyParent");
	            parent.on(_this.__parentList = {
	                'stable': function stable(s) {
	                    return _this.release("isMyParent");
	                },
	                'unstable': function unstable(s) {
	                    return _this.wait("isMyParent");
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
	            this.constructor.Store.mountStore(id, this, null, state, datas);
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
	                    console.warn("Rescope Context : ", id, " already exist in this context !");
	                    return;
	                }
	                if (!external) _this6.__context[id] = srcCtx[id];
	
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
	
	            if (as === true) {
	                setInitial = true;
	                as = null;
	            }
	
	            this._followers.push([obj, key, as, lastRevs = key && key.reduce(function (revs, id) {
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
	                if (followers[i][0] === obj && '' + followers[i][1] == '' + key && '' + followers[i][2] == '' + as) return followers.splice(i, 1);
	            }
	        }
	    }, {
	        key: 'map',
	        value: function map(to, stores) {
	            var _this7 = this;
	
	            var bind = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
	
	            this.mount(stores);
	            bind && this.bind(to, stores, null, false);
	
	            return stores.reduce(function (datas, id) {
	                return datas[id] = _this7.stores[id] && _this7.stores[id].datas, datas;
	            }, {});
	        }
	    }, {
	        key: 'getStoresRevs',
	        value: function getStoresRevs() {
	            var stores = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	            var ctx = this.__context;
	
	            Object.keys(ctx).forEach(function (id) {
	                if (!isFunction(ctx[id])) {
	                    stores[id] = ctx[id]._rev;
	                } else if (!stores.hasOwnProperty(id)) stores[id] = false;
	            });
	
	            this.__mixed.reduce(function (updated, ctx) {
	                return ctx.getStoresRevs(stores), stores;
	            }, stores);
	            this.parent && this.parent.getStoresRevs(stores);
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
	
	            stores.forEach(function (id) {
	                return _this14.stores[id] && _this14.stores[id].dispose && _this14.stores[id].dispose(reason);
	            });
	        }
	    }, {
	        key: 'wait',
	        value: function wait(reason) {
	            //  console.log("wait", reason);
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
	                    if (!_this15.__locks.all) return _this15._stabilizerTM = null;
	
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
	            }, 50);
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
	                        // console.log("wtf ctx", this._id, reason, this.__locks, this._stable);
	                        _this18.then(function (s) {
	                            //   console.log("wtf ctx then", this._id, reason, this.__locks);
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
	
	            // console.log("destroy", this._id);
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
	        value: function getContext(key) {
	            return openContexts[key] = openContexts[key] || new Context({});
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
	     * (context, {require,use,refine,state, datas})
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
	            context = !isArray(argz[0]) && !isString(argz[0]) ? argz.shift() : _static.staticContext,
	            cfg = argz[0] && !isArray(argz[0]) && !isString(argz[0]) ? argz.shift() : {},
	            name = isString(argz[0]) ? argz[0] : cfg.name || _static.name,
	            watchs = isArray(argz[0]) ? argz.shift() : cfg.use || [],
	            // watchs need to be defined after all the store are registered : so we can't deal with any "static use" automaticly
	        refine = isFunction(argz[0]) ? argz.shift() : cfg.refine || null,
	            initialState = _static.initialState;
	
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
	
	        _this._use = [].concat(_toConsumableArray(watchs), _toConsumableArray(_static.use));
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
	
	        if (cfg.hasOwnProperty("datas") && cfg.datas !== undefined) _this.datas = cfg.datas;
	        if (cfg.hasOwnProperty("state") && cfg.state !== undefined) initialState = cfg.state;
	
	        if (refine) _this.refine = refine;
	
	        if (!!_this._use && _this._use.length) {
	            // if there initial watchs anyway
	            _this.pull(_this._use);
	        }
	
	        if (initialState) {
	            // sync refine
	            _this.state = _extends({}, initialState);
	            if (_this.isComplete() && _this.datas === undefined) _this.datas = _this.refine(_this.datas, _this.state, _this.state);
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
	    // overridable list of store that will allow push if updated
	
	
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
	         * Overridable refiner / remapper
	         * If state or lastPublicState are simple hash maps refine will return {...datas, ...state}
	         * if not it will return the last private state
	         * @param datas
	         * @param state
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
	
	            var initialOutputs = Store.map(this, stores, this.contextObj, origin, true);
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
	         * Apply refine/remap on the private state & push the resulting "public" state to followers
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
	                nextDatas = datas || (this.isComplete(nextState) ? this.refine(this.datas, nextState, this._changesSW) : this.datas);
	
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
	            var i = 0;
	
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
	                        // cb && i++;
	                        follower[0].setState(follower[1] ? _defineProperty({}, follower[1], _this8.datas) : _this8.datas
	                        // ,
	                        // cb && (
	                        //     () => (!(--i) && cb())
	                        // )
	                        );
	                    }
	                });
	
	                this.emit('stable', this.datas);
	                this.emit('update', this.datas);
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
	            var _this9 = this;
	
	            if (reason) {
	
	                if (this.__retains[reason] == 0) throw new Error("Dispose more than retaining !");
	
	                this.__retains[reason] = this.__retains[reason] || 0;
	                this.__retains[reason]--;
	            }
	
	            if (this.__retains.all == 0) throw new Error("Dispose more than retaining !");
	
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
	            var _this10 = this;
	
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
	                    _this10.mountStore(name, context);
	
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
	    }, {
	        key: 'getContext',
	        value: function getContext(contexts) {
	            var skey = isArray(contexts) ? contexts.sort(function (a, b) {
	                if (a.firstname < b.firstname) return -1;
	                if (a.firstname > b.firstname) return 1;
	                return 0;
	            }).join('::') : contexts;
	            return Context.contexts[skey] = Context.contexts[skey] || new Context({}, { id: skey });
	        }
	    }, {
	        key: 'mountStore',
	        value: function mountStore(name, context, store, state, datas) {
	            var ctx = void 0,
	                contextMap = context.__context;
	            contextMap[name] = store = store || contextMap[name];
	            if (!store) {
	                console.error("Not a mappable store item '" + name + ' !!', store);
	                return false;
	            } else if (isFunction(store)) {
	                //
	                if (store && (store.contexts || store.context)) {
	                    ctx = this.getContext(store.contexts || [store.context]);
	
	                    ctx.register(_defineProperty({}, name, ctx.__context[name] || store));
	
	                    contextMap[name] = ctx[name] = new store(context, { state: state, datas: datas });
	                    ctx._watchStore(name);
	                    return ctx[name];
	                } else store = contextMap[name] = new store(context, { state: state, datas: datas });
	                contextMap[name].relink(name);
	            } else {
	                if (state !== undefined && datas === undefined) store.setState(state);else if (state !== undefined) store.state = state;
	
	                if (datas !== undefined) store.push(datas);
	            }
	            return store;
	        }
	    }]);
	
	    return Store;
	}(EventEmitter);
	
	Store.use = [];
	Store.staticContext = new Context({}, { id: "static" });
	Store.initialState = undefined;
	Store.defaultMaxListeners = 100;
	Store.persistenceTm = false;
	exports.default = Store;
	module.exports = exports['default'];

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNjQ5MzFmNzBkMWUxYzZkNjYxNDUiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Jlc2NvcGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbnRleHQuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaXNzdHJpbmdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpc2FycmF5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXZlbnRzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaXNmdW5jdGlvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInNob3J0aWRcIiIsIndlYnBhY2s6Ly8vLi9zcmMvU3RvcmUuanMiXSwibmFtZXMiOlsiU3RvcmUiLCJDb250ZXh0IiwiaXNTdHJpbmciLCJyZXF1aXJlIiwiaXNBcnJheSIsIkV2ZW50RW1pdHRlciIsImlzRnVuY3Rpb24iLCJzaG9ydGlkIiwiX19wcm90b19fcHVzaCIsInRhcmdldCIsImlkIiwicGFyZW50IiwiaGVyZSIsInByb3RvdHlwZSIsIm9wZW5Db250ZXh0cyIsImN0eCIsInN0YXRlIiwiZGF0YXMiLCJuYW1lIiwiZGVmYXVsdE1heExpc3RlbmVycyIsInBlcnNpc3RlbmNlVG0iLCJhdXRvRGVzdHJveSIsIl9tYXhMaXN0ZW5lcnMiLCJjb25zdHJ1Y3RvciIsIl9pZCIsImdlbmVyYXRlIiwiX2lzTG9jYWxJZCIsIl9wZXJzaXN0ZW5jZVRtIiwic3RvcmVzIiwiX2FkZENoaWxkIiwic291cmNlcyIsIl9jaGlsZENvbnRleHRzIiwiX19yZXRhaW5zIiwiYWxsIiwiX19sb2NrcyIsIl9fbGlzdGVuaW5nIiwiX19jb250ZXh0IiwiX19taXhlZCIsIl9fbWl4ZWRMaXN0IiwiX2ZvbGxvd2VycyIsInJldGFpbiIsIl9zdGFibGUiLCJ3YWl0Iiwib24iLCJfX3BhcmVudExpc3QiLCJyZWxlYXNlIiwiX3Byb3BhZyIsInJlZ2lzdGVyIiwic2V0VGltZW91dCIsImRpc3Bvc2UiLCJmb3JFYWNoIiwiX21vdW50IiwiayIsImFyZ3VtZW50cyIsInJlZHVjZSIsIm1vdW50ZWQiLCJtb3VudFN0b3JlIiwiX3dhdGNoU3RvcmUiLCJpc1N0YWJsZSIsInByb3BhZyIsInRhcmdldEN0eCIsImxpc3RzIiwicHVzaCIsInJlbGluayIsInJhd0N0eCIsIk9iamVjdCIsImtleXMiLCJzaW5nbGV0b24iLCJzcmNDdHgiLCJleHRlcm5hbCIsImxjdHgiLCJfc3RvcmVzIiwiY29uc29sZSIsIndhcm4iLCJkZWZpbmVQcm9wZXJ0eSIsImdldCIsIl9zdGF0ZSIsInNldCIsInYiLCJfZGF0YXMiLCJ1bmRlZmluZWQiLCJvYmoiLCJrZXkiLCJhcyIsInNldEluaXRpYWwiLCJsYXN0UmV2cyIsInJldnMiLCJtb3VudCIsImdldFVwZGF0ZXMiLCJzZXRTdGF0ZSIsImZvbGxvd2VycyIsImkiLCJsZW5ndGgiLCJzcGxpY2UiLCJ0byIsImJpbmQiLCJfcmV2IiwiaGFzT3duUHJvcGVydHkiLCJ1cGRhdGVkIiwiZ2V0U3RvcmVzUmV2cyIsIm91dHB1dCIsImZsYWdzX3N0YXRlcyIsImZsYWdzX2RhdGFzIiwiX2ZsYWdzX3N0YXRlcyIsIl9mbGFnc19kYXRhcyIsImZsYWdzIiwiciIsImZsYWciLCJ0ZXN0IiwiY2IiLCJvbmNlIiwicXVpZXQiLCJyZWFzb24iLCJlbWl0IiwiZXJyb3IiLCJfc3RhYmlsaXplclRNIiwiY2xlYXJUaW1lb3V0IiwiX3Byb3BhZ1RNIiwiY2hpbGRzIiwiX2dldEFsbENoaWxkcyIsImluZGV4T2YiLCJFcnJvciIsIl9kZXN0cm95VE0iLCJ0aGVuIiwiZGVzdHJveSIsInJlbW92ZUxpc3RlbmVyIiwiY29udGV4dE9iaiIsInNoaWZ0IiwiX3JtQ2hpbGQiLCJjb250ZXh0cyIsIm9ialByb3RvIiwiZ2V0UHJvdG90eXBlT2YiLCJhcmd6IiwiX3N0YXRpYyIsImNvbnRleHQiLCJzdGF0aWNDb250ZXh0IiwiY2ZnIiwid2F0Y2hzIiwidXNlIiwicmVmaW5lIiwiaW5pdGlhbFN0YXRlIiwiX3VpZCIsIl9vblN0YWJpbGl6ZSIsIl91c2UiLCJfcmV2cyIsIl9yZXF1aXJlIiwicHVsbCIsImlzQ29tcGxldGUiLCJuRGF0YXMiLCJjRGF0YXMiLCJmb2xsb3ciLCJjaGFuZ2VzIiwiX19wcm90b19fIiwibWUiLCJfc3RhYmlsaXplciIsImV2ZW50IiwiZG9XYWl0Iiwib3JpZ2luIiwiaW5pdGlhbE91dHB1dHMiLCJtYXAiLCJzIiwiZm9yY2UiLCJuZXh0U3RhdGUiLCJfY2hhbmdlc1NXIiwibmV4dERhdGFzIiwic2hvdWxkUHJvcGFnIiwicFN0YXRlIiwic3luYyIsImNoYW5nZSIsInN0YWJpbGl6ZSIsInN0b3JlIiwiZnJvbSIsInByZXZpb3VzIiwiZm9sbG93ZXIiLCJkZWFkIiwicmVtb3ZlQWxsTGlzdGVuZXJzIiwiY29tcG9uZW50IiwidGFyZ2V0UmV2cyIsInRhcmdldENvbnRleHQiLCJmaWx0ZXIiLCJhbGlhcyIsImRlZmF1bHROYW1lIiwibWF0Y2giLCJtaXhlZENXVW5tb3VudCIsInVuTW91bnRLZXkiLCJpc1JlYWN0Q29tcG9uZW50Iiwic3BsaXQiLCJ1bkJpbmQiLCJhcHBseSIsInNrZXkiLCJzb3J0IiwiYSIsImIiLCJmaXJzdG5hbWUiLCJqb2luIiwiY29udGV4dE1hcCIsImdldENvbnRleHQiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQzVCQTs7OztBQUNBOzs7Ozs7QUFYQTs7Ozs7Ozs7OztBQWFBLG1CQUFRQSxLQUFSOzttQkFFZSxFQUFDQSxzQkFBRCxFQUFRQywwQkFBUixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmZjs7Ozs7Ozs7Ozs7OztBQWFBOzs7Ozs7O0FBUUEs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O0FBTkxoRixNLENBV1ZtQixtQixHQUFzQixHO0FBWFpuQixNLENBbUJWb0IsYSxHQUFnQixLO21CQW5CTnBCLEsiLCJmaWxlIjoiZGlzdC9SZXNjb3BlLm5vZGVwcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA2NDkzMWY3MGQxZTFjNmQ2NjE0NSIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpICAyMDE3IENhaXBpIExhYnMgLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4gKi9cblxuaW1wb3J0IENvbnRleHQgZnJvbSBcIi4vQ29udGV4dFwiO1xuaW1wb3J0IFN0b3JlIGZyb20gXCIuL1N0b3JlXCI7XG5cbkNvbnRleHQuU3RvcmUgPSBTdG9yZTtcblxuZXhwb3J0IGRlZmF1bHQge1N0b3JlLCBDb250ZXh0fTtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1Jlc2NvcGUuanMiLCIvKlxuICogQ29weXJpZ2h0IChjKSAgMjAxNyBDYWlwaSBMYWJzIC5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuICpcbiAqIEBhdXRob3IgOiBOYXRoYW5hZWwgQnJhdW5cbiAqIEBjb250YWN0IDogY2FpcGlsYWJzQGdtYWlsLmNvbVxuICovXG5cbi8qKlxuICogQGF1dGhvciBOYXRoYW5hZWwgQlJBVU5cbiAqXG4gKiBEYXRlOiAxMy8wOC8yMDE3XG4gKiBUaW1lOiAxNzoxNVxuICovXG5cblxudmFyIGlzU3RyaW5nICAgICAgICA9IHJlcXVpcmUoJ2lzc3RyaW5nJyksXG4gICAgaXNBcnJheSAgICAgICAgID0gcmVxdWlyZSgnaXNhcnJheScpLFxuICAgIEV2ZW50RW1pdHRlciAgICA9IHJlcXVpcmUoJ2V2ZW50cycpLFxuICAgIGlzRnVuY3Rpb24gICAgICA9IHJlcXVpcmUoJ2lzZnVuY3Rpb24nKVxuICAgICwgc2hvcnRpZCAgICAgICA9IHJlcXVpcmUoJ3Nob3J0aWQnKVxuICAgICwgX19wcm90b19fcHVzaCA9ICggdGFyZ2V0LCBpZCwgcGFyZW50ICkgPT4ge1xuICAgIGxldCBoZXJlID0ge1xuICAgICAgICBbaWRdOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGhlcmVbaWRdLnByb3RvdHlwZSA9IHBhcmVudCA/IG5ldyBwYXJlbnRbXCJfXCIgKyBpZF0oKSA6IHRhcmdldFtpZF0gfHwge307XG4gICAgdGFyZ2V0W2lkXSA9IG5ldyBoZXJlW2lkXSgpO1xuICAgIHRhcmdldFsnXycgKyBpZF0gPSBoZXJlW2lkXTtcbn07XG5cbmxldCBvcGVuQ29udGV4dHMgPSB7fTtcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250ZXh0IGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgICBzdGF0aWMgY29udGV4dHMgPSBvcGVuQ29udGV4dHM7XG4gICAgc3RhdGljIFN0b3JlID0gbnVsbDtcbiAgICBzdGF0aWMgZGVmYXVsdE1heExpc3RlbmVycyA9IDEwMDtcbiAgICBzdGF0aWMgcGVyc2lzdGVuY2VUbSA9IDA7XG4gICAgXG4gICAgY29uc3RydWN0b3IoIGN0eCwgeyBpZCwgcGFyZW50LCBzdGF0ZSwgZGF0YXMsIG5hbWUsIGRlZmF1bHRNYXhMaXN0ZW5lcnMsIHBlcnNpc3RlbmNlVG0sIGF1dG9EZXN0cm95IH0gPSB7fSApIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX21heExpc3RlbmVycyA9IGRlZmF1bHRNYXhMaXN0ZW5lcnMgfHwgdGhpcy5jb25zdHJ1Y3Rvci5kZWZhdWx0TWF4TGlzdGVuZXJzO1xuICAgICAgICB0aGlzLl9pZCA9IGlkID0gaWQgfHwgKFwiX19fX19cIiArIHNob3J0aWQuZ2VuZXJhdGUoKSk7XG4gICAgICAgIFxuICAgICAgICBpZiAoIG9wZW5Db250ZXh0c1tpZF0gKSB7XG4gICAgICAgICAgICAvLyBvcGVuQ29udGV4dHNbaWRdLnJlZ2lzdGVyKGN0eCk7XG4gICAgICAgICAgICByZXR1cm4gb3BlbkNvbnRleHRzW2lkXVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBvcGVuQ29udGV4dHNbaWRdID0gdGhpcztcbiAgICAgICAgdGhpcy5faXNMb2NhbElkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fcGVyc2lzdGVuY2VUbSA9IHBlcnNpc3RlbmNlVG0gfHwgdGhpcy5jb25zdHJ1Y3Rvci5wZXJzaXN0ZW5jZVRtO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5zdG9yZXMgPSB7fTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHt9O1xuICAgICAgICB0aGlzLmRhdGFzID0ge307XG4gICAgICAgIF9fcHJvdG9fX3B1c2godGhpcywgJ3N0b3JlcycsIHBhcmVudCk7XG4gICAgICAgIF9fcHJvdG9fX3B1c2godGhpcywgJ3N0YXRlJywgcGFyZW50KTtcbiAgICAgICAgX19wcm90b19fcHVzaCh0aGlzLCAnZGF0YXMnLCBwYXJlbnQpO1xuICAgICAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgXG4gICAgICAgIGlmICggcGFyZW50ICkge1xuICAgICAgICAgICAgcGFyZW50Ll9hZGRDaGlsZCh0aGlzKTtcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0aGlzLnNvdXJjZXMgPSBbXTtcbiAgICAgICAgdGhpcy5fY2hpbGRDb250ZXh0cyA9IFtdO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fX3JldGFpbnMgPSB7IGFsbDogMCB9O1xuICAgICAgICB0aGlzLl9fbG9ja3MgPSB7IGFsbDogMSB9O1xuICAgICAgICB0aGlzLl9fbGlzdGVuaW5nID0ge307XG4gICAgICAgIHRoaXMuX19jb250ZXh0ID0ge307XG4gICAgICAgIHRoaXMuX19taXhlZCA9IFtdO1xuICAgICAgICB0aGlzLl9fbWl4ZWRMaXN0ID0gW107XG4gICAgICAgIHRoaXMuX2ZvbGxvd2VycyA9IFtdO1xuICAgICAgICBpZiAoIHBhcmVudCApIHtcbiAgICAgICAgICAgIHBhcmVudC5yZXRhaW4oXCJpc015UGFyZW50XCIpO1xuICAgICAgICAgICAgIXBhcmVudC5fc3RhYmxlICYmIHRoaXMud2FpdChcImlzTXlQYXJlbnRcIik7XG4gICAgICAgICAgICBwYXJlbnQub24odGhpcy5fX3BhcmVudExpc3QgPSB7XG4gICAgICAgICAgICAgICAgJ3N0YWJsZScgIDogcyA9PiB0aGlzLnJlbGVhc2UoXCJpc015UGFyZW50XCIpLFxuICAgICAgICAgICAgICAgICd1bnN0YWJsZSc6IHMgPT4gdGhpcy53YWl0KFwiaXNNeVBhcmVudFwiKSxcbiAgICAgICAgICAgICAgICAndXBkYXRlJyAgOiBzID0+IHRoaXMuX3Byb3BhZygpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIHRoaXMucmVnaXN0ZXIocGFyZW50Ll9fY29udGV4dCwgc3RhdGUsIGRhdGFzKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIHRoaXMucmVnaXN0ZXIoY3R4LCBzdGF0ZSwgZGF0YXMpO1xuICAgICAgICB0aGlzLl9fbG9ja3MuYWxsLS07XG4gICAgICAgIHRoaXMuX3N0YWJsZSA9ICF0aGlzLl9fbG9ja3MuYWxsO1xuICAgICAgICBcbiAgICAgICAgaWYgKCBhdXRvRGVzdHJveSApXG4gICAgICAgICAgICBzZXRUaW1lb3V0KFxuICAgICAgICAgICAgICAgIHRtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXRhaW4oXCJhdXRvRGVzdHJveVwiKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNwb3NlKFwiYXV0b0Rlc3Ryb3lcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKVxuICAgIH1cbiAgICBcbiAgICBzdGF0aWMgZ2V0Q29udGV4dCgga2V5ICkge1xuICAgICAgICByZXR1cm4gb3BlbkNvbnRleHRzW2tleV0gPSBvcGVuQ29udGV4dHNba2V5XSB8fCBuZXcgQ29udGV4dCh7fSk7XG4gICAgfTtcbiAgICBcbiAgICBtb3VudCggaWQsIHN0YXRlLCBkYXRhcyApIHtcbiAgICAgICAgaWYgKCBpc0FycmF5KGlkKSApIHtcbiAgICAgICAgICAgIGlkLmZvckVhY2goayA9PiB0aGlzLl9tb3VudChrLCBzdGF0ZSAmJiBzdGF0ZVtrXSwgZGF0YXMgJiYgZGF0YXNba10pKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX21vdW50KC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIFxuICAgIF9tb3VudCggaWQsIHN0YXRlLCBkYXRhcyApIHtcbiAgICAgICAgaWYgKCAhdGhpcy5fX2NvbnRleHRbaWRdICkgey8vYXNrIG1peGVkIHx8IHBhcmVudFxuICAgICAgICAgICAgaWYgKCB0aGlzLl9fbWl4ZWQucmVkdWNlKCggbW91bnRlZCwgY3R4ICkgPT4gKG1vdW50ZWQgfHwgY3R4Ll9tb3VudChpZCwgc3RhdGUsIGRhdGFzKSksIGZhbHNlKSB8fFxuICAgICAgICAgICAgICAgICF0aGlzLnBhcmVudCApXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyZW50Ll9tb3VudCguLi5hcmd1bWVudHMpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29uc3RydWN0b3IuU3RvcmUubW91bnRTdG9yZShpZCwgdGhpcywgbnVsbCwgc3RhdGUsIGRhdGFzKTtcbiAgICAgICAgdGhpcy5fd2F0Y2hTdG9yZShpZCk7XG4gICAgICAgIHJldHVybiB0aGlzLl9fY29udGV4dFtpZF07XG4gICAgfVxuICAgIFxuICAgIF93YXRjaFN0b3JlKCBpZCwgc3RhdGUsIGRhdGFzICkge1xuICAgICAgICBpZiAoICF0aGlzLl9fY29udGV4dFtpZF0gKSB7Ly9hc2sgbWl4ZWQgfHwgcGFyZW50XG4gICAgICAgICAgICBpZiAoIHRoaXMuX19taXhlZC5yZWR1Y2UoKCBtb3VudGVkLCBjdHggKSA9PiAobW91bnRlZCB8fCBjdHguX3dhdGNoU3RvcmUoaWQsIHN0YXRlLCBkYXRhcykpLCBmYWxzZSkgfHxcbiAgICAgICAgICAgICAgICAhdGhpcy5wYXJlbnQgKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcmVudC5fd2F0Y2hTdG9yZSguLi5hcmd1bWVudHMpO1xuICAgICAgICB9XG4gICAgICAgIGlmICggIXRoaXMuX19saXN0ZW5pbmdbaWRdICYmICFpc0Z1bmN0aW9uKHRoaXMuX19jb250ZXh0W2lkXSkgKSB7XG4gICAgICAgICAgICAhdGhpcy5fX2NvbnRleHRbaWRdLmlzU3RhYmxlKCkgJiYgdGhpcy53YWl0KGlkKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5fX2NvbnRleHRbaWRdLm9uKFxuICAgICAgICAgICAgICAgIHRoaXMuX19saXN0ZW5pbmdbaWRdID0ge1xuICAgICAgICAgICAgICAgICAgICAndXBkYXRlJyAgOiBzID0+IHRoaXMucHJvcGFnKCksXG4gICAgICAgICAgICAgICAgICAgICdzdGFibGUnICA6IHMgPT4gdGhpcy5yZWxlYXNlKGlkKSxcbiAgICAgICAgICAgICAgICAgICAgJ3Vuc3RhYmxlJzogcyA9PiB0aGlzLndhaXQoaWQpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIFxuICAgIG1peGluKCB0YXJnZXRDdHggKSB7XG4gICAgICAgIGxldCBwYXJlbnQgPSB0aGlzLnBhcmVudCwgbGlzdHM7XG4gICAgICAgIHRoaXMuX19taXhlZC5wdXNoKHRhcmdldEN0eClcbiAgICAgICAgdGFyZ2V0Q3R4LnJldGFpbigpO1xuICAgICAgICBpZiAoICF0YXJnZXRDdHguX3N0YWJsZSApXG4gICAgICAgICAgICB0aGlzLndhaXQodGFyZ2V0Q3R4Ll9pZCk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9fbWl4ZWRMaXN0LnB1c2gobGlzdHMgPSB7XG4gICAgICAgICAgICAnc3RhYmxlJyAgOiBzID0+IHRoaXMucmVsZWFzZSh0YXJnZXRDdHguX2lkKSxcbiAgICAgICAgICAgICd1bnN0YWJsZSc6IHMgPT4gdGhpcy53YWl0KHRhcmdldEN0eC5faWQpLFxuICAgICAgICAgICAgJ3VwZGF0ZScgIDogcyA9PiB0aGlzLl9wcm9wYWcoKVxuICAgICAgICB9KVxuICAgICAgICB0YXJnZXRDdHgub24obGlzdHMpO1xuICAgICAgICBfX3Byb3RvX19wdXNoKHRoaXMsICdzdG9yZXMnLCBwYXJlbnQpO1xuICAgICAgICBfX3Byb3RvX19wdXNoKHRoaXMsICdzdGF0ZScsIHBhcmVudCk7XG4gICAgICAgIF9fcHJvdG9fX3B1c2godGhpcywgJ2RhdGFzJywgcGFyZW50KTtcbiAgICAgICAgdGFyZ2V0Q3R4LnJlbGluayh0YXJnZXRDdHguX19jb250ZXh0LCB0aGlzLCB0cnVlKTtcbiAgICAgICAgXG4gICAgICAgIF9fcHJvdG9fX3B1c2godGhpcywgJ3N0b3JlcycsIHRoaXMpO1xuICAgICAgICBfX3Byb3RvX19wdXNoKHRoaXMsICdzdGF0ZScsIHRoaXMpO1xuICAgICAgICBfX3Byb3RvX19wdXNoKHRoaXMsICdkYXRhcycsIHRoaXMpO1xuICAgICAgICB0aGlzLnJlbGluayh0aGlzLl9fY29udGV4dCwgdGhpcyk7XG4gICAgfVxuICAgIFxuICAgIHJlZ2lzdGVyKCByYXdDdHgsIHN0YXRlID0ge30sIGRhdGFzID0ge30gKSB7XG4gICAgICAgIHRoaXMucmVsaW5rKHJhd0N0eCwgdGhpcywgZmFsc2UsIHN0YXRlLCBkYXRhcyk7XG4gICAgICAgIE9iamVjdC5rZXlzKHJhd0N0eCkuZm9yRWFjaChcbiAgICAgICAgICAgIGlkID0+IChpc0Z1bmN0aW9uKHJhd0N0eFtpZF0pICYmIHJhd0N0eFtpZF0uc2luZ2xldG9uICYmIHRoaXMuX21vdW50KGlkLCBzdGF0ZVtpZF0sIGRhdGFzW2lkXSkpKVxuICAgICAgICBcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogTWFwIHNyY0N0eCBzdG9yZSdzIG9uIHRhcmdldEN0eCBoZWFkZXJzIHByb3RvJ3NcbiAgICAgKiBAcGFyYW0gc3JjQ3R4XG4gICAgICogQHBhcmFtIHRhcmdldEN0eFxuICAgICAqIEBwYXJhbSBzdGF0ZVxuICAgICAqIEBwYXJhbSBkYXRhc1xuICAgICAqL1xuICAgIHJlbGluayggc3JjQ3R4LCB0YXJnZXRDdHggPSB0aGlzLCBleHRlcm5hbCwgc3RhdGUgPSB7fSwgZGF0YXMgPSB7fSApIHtcbiAgICAgICAgbGV0IGxjdHggPSB0YXJnZXRDdHguX3N0b3Jlcy5wcm90b3R5cGU7XG4gICAgICAgIE9iamVjdC5rZXlzKHNyY0N0eClcbiAgICAgICAgICAgICAgLmZvckVhY2goXG4gICAgICAgICAgICAgICAgICBpZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKCB0YXJnZXRDdHguX19jb250ZXh0W2lkXSA9PT0gc3JjQ3R4W2lkXSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRDdHguX19jb250ZXh0W2lkXSAmJiAodGFyZ2V0Q3R4Ll9fY29udGV4dFtpZF0uY29uc3RydWN0b3IgPT09IHNyY0N0eFtpZF0gKSApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoIHRhcmdldEN0eC5fX2NvbnRleHRbaWRdICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCJSZXNjb3BlIENvbnRleHQgOiBcIiwgaWQsIFwiIGFscmVhZHkgZXhpc3QgaW4gdGhpcyBjb250ZXh0ICFcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKCAhZXh0ZXJuYWwgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9fY29udGV4dFtpZF0gPSBzcmNDdHhbaWRdO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGN0eCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICgoIGN0eCwgaWQgKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0OiAoKSA9PiB0aGlzLl9fY29udGV4dFtpZF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMuX19jb250ZXh0LCBpZClcbiAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0Q3R4Ll9zdGF0ZS5wcm90b3R5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAoKCBjdHgsIGlkICkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldDogKCkgPT4gKGN0eFtpZF0gJiYgY3R4W2lkXS5zdGF0ZSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0OiAoIHYgKSA9PiAodGhpcy5fbW91bnQoaWQsIHYpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5fX2NvbnRleHQsIGlkKVxuICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRDdHguX2RhdGFzLnByb3RvdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICgoIGN0eCwgaWQgKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0OiAoKSA9PiAoY3R4W2lkXSAmJiBjdHhbaWRdLmRhdGFzKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXQ6ICggdiApID0+ICh0aGlzLl9tb3VudChpZCwgdW5kZWZpbmVkLCB2KSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMuX19jb250ZXh0LCBpZClcbiAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICApXG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBvYmoge1JlYWN0LkNvbXBvbmVudHxTdG9yZXxmdW5jdGlvbilcbiAgICAgKiBAcGFyYW0ga2V5IHtzdHJpbmd9IG9wdGlvbmFsIGtleSB3aGVyZSB0byBtYXAgdGhlIHB1YmxpYyBzdGF0ZVxuICAgICAqL1xuICAgIGJpbmQoIG9iaiwga2V5LCBhcywgc2V0SW5pdGlhbCA9IHRydWUgKSB7XG4gICAgICAgIGxldCBsYXN0UmV2cywgZGF0YXM7XG4gICAgICAgIGlmICgga2V5ICYmICFpc0FycmF5KGtleSkgKVxuICAgICAgICAgICAga2V5ID0gW2tleV07XG4gICAgICAgIFxuICAgICAgICAvLyBrZXkgPSBrZXl8fFxuICAgICAgICBcbiAgICAgICAgaWYgKCBhcyA9PT0gdHJ1ZSApIHtcbiAgICAgICAgICAgIHNldEluaXRpYWwgPSB0cnVlO1xuICAgICAgICAgICAgYXMgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9mb2xsb3dlcnMucHVzaChcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBvYmosXG4gICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgIGFzLFxuICAgICAgICAgICAgICAgIGxhc3RSZXZzID0ga2V5ICYmIGtleS5yZWR1Y2UoKCByZXZzLCBpZCApID0+IChyZXZzW2lkXSA9IDAsIHJldnMpLCB7fSlcbiAgICAgICAgICAgIF0pO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5tb3VudChrZXkpO1xuICAgICAgICBcbiAgICAgICAgaWYgKCBzZXRJbml0aWFsICYmIHRoaXMuX3N0YWJsZSApIHtcbiAgICAgICAgICAgIGRhdGFzID0gdGhpcy5nZXRVcGRhdGVzKGxhc3RSZXZzKTtcbiAgICAgICAgICAgIGlmICggIWRhdGFzICkgcmV0dXJuO1xuICAgICAgICAgICAgaWYgKCB0eXBlb2Ygb2JqICE9IFwiZnVuY3Rpb25cIiApIHtcbiAgICAgICAgICAgICAgICBpZiAoIGFzICkgb2JqLnNldFN0YXRlKHsgW2FzXTogZGF0YXMgfSk7XG4gICAgICAgICAgICAgICAgZWxzZSBvYmouc2V0U3RhdGUoZGF0YXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgb2JqKGRhdGFzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGxhc3RSZXZzICYmXG4gICAgICAgICAgICAvLyBrZXkuZm9yRWFjaChpZCA9PiAobGFzdFJldnNbaWRdID0gdGhpcy5zdG9yZXNbaWRdICYmIHRoaXMuc3RvcmVzW2lkXS5fcmV2IHx8IDApKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBVbiBiaW5kIHRoaXMgY29udGV4dCBvZmYgdGhlIGdpdmVuIGNvbXBvbmVudC1rZXlzXG4gICAgICogQHBhcmFtIG9ialxuICAgICAqIEBwYXJhbSBrZXlcbiAgICAgKiBAcmV0dXJucyB7QXJyYXkuPCo+fVxuICAgICAqL1xuICAgIHVuQmluZCggb2JqLCBrZXksIGFzICkge1xuICAgICAgICB2YXIgZm9sbG93ZXJzID0gdGhpcy5fZm9sbG93ZXJzLFxuICAgICAgICAgICAgaSAgICAgICAgID0gZm9sbG93ZXJzICYmIGZvbGxvd2Vycy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggZm9sbG93ZXJzICYmIGktLSApXG4gICAgICAgICAgICBpZiAoIGZvbGxvd2Vyc1tpXVswXSA9PT0gb2JqICYmICgnJyArIGZvbGxvd2Vyc1tpXVsxXSkgPT0gKCcnICsga2V5KSAmJlxuICAgICAgICAgICAgICAgICgnJyArIGZvbGxvd2Vyc1tpXVsyXSkgPT0gKCcnICsgYXMpIClcbiAgICAgICAgICAgICAgICByZXR1cm4gZm9sbG93ZXJzLnNwbGljZShpLCAxKTtcbiAgICB9XG4gICAgXG4gICAgXG4gICAgbWFwKCB0bywgc3RvcmVzLCBiaW5kID0gdHJ1ZSApIHtcbiAgICAgICAgdGhpcy5tb3VudChzdG9yZXMpO1xuICAgICAgICBiaW5kICYmIHRoaXMuYmluZCh0bywgc3RvcmVzLCBudWxsLCBmYWxzZSk7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gc3RvcmVzLnJlZHVjZSgoIGRhdGFzLCBpZCApID0+IChkYXRhc1tpZF0gPSB0aGlzLnN0b3Jlc1tpZF0gJiYgdGhpcy5zdG9yZXNbaWRdLmRhdGFzLCBkYXRhcyksIHt9KTtcbiAgICB9XG4gICAgXG4gICAgZ2V0U3RvcmVzUmV2cyggc3RvcmVzID0ge30gKSB7XG4gICAgICAgIGxldCBjdHggPSB0aGlzLl9fY29udGV4dDtcbiAgICAgICAgXG4gICAgICAgIE9iamVjdC5rZXlzKGN0eCkuZm9yRWFjaChcbiAgICAgICAgICAgIGlkID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoICFpc0Z1bmN0aW9uKGN0eFtpZF0pXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0b3Jlc1tpZF0gPSBjdHhbaWRdLl9yZXY7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKCAhc3RvcmVzLmhhc093blByb3BlcnR5KGlkKSApXG4gICAgICAgICAgICAgICAgICAgIHN0b3Jlc1tpZF0gPSBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fX21peGVkLnJlZHVjZSgoIHVwZGF0ZWQsIGN0eCApID0+IChjdHguZ2V0U3RvcmVzUmV2cyhzdG9yZXMpLCBzdG9yZXMpLCBzdG9yZXMpO1xuICAgICAgICB0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC5nZXRTdG9yZXNSZXZzKHN0b3Jlcyk7XG4gICAgICAgIHJldHVybiBzdG9yZXM7XG4gICAgfVxuICAgIFxuICAgIGdldFVwZGF0ZXMoIHJldnMsIG91dHB1dCwgdXBkYXRlZCApIHtcbiAgICAgICAgbGV0IGN0eCA9IHRoaXMuX19jb250ZXh0O1xuICAgICAgICBcbiAgICAgICAgb3V0cHV0ID0gb3V0cHV0IHx8IHt9O1xuICAgICAgICBPYmplY3Qua2V5cyhjdHgpLmZvckVhY2goXG4gICAgICAgICAgICBpZCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCAhb3V0cHV0W2lkXVxuICAgICAgICAgICAgICAgICAgICAmJiAoICFyZXZzXG4gICAgICAgICAgICAgICAgICAgICAgICB8fCAocmV2cy5oYXNPd25Qcm9wZXJ0eShpZCkgJiYgcmV2c1tpZF0gPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgICAgIHx8ICEoICFyZXZzLmhhc093blByb3BlcnR5KGlkKSB8fCBjdHhbaWRdLl9yZXYgPD0gcmV2c1tpZF0gKSlcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgb3V0cHV0W2lkXSA9IHRoaXMuZGF0YXNbaWRdO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIHJldnMgJiYgcmV2c1tpZF0gIT09IHVuZGVmaW5lZCApXG4gICAgICAgICAgICAgICAgICAgICAgICByZXZzW2lkXSA9IGN0eFtpZF0uX3JldjtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICB1cGRhdGVkID0gdGhpcy5fX21peGVkLnJlZHVjZSgoIHVwZGF0ZWQsIGN0eCApID0+IChjdHguZ2V0VXBkYXRlcyhyZXZzLCBvdXRwdXQsIHVwZGF0ZWQpIHx8IHVwZGF0ZWQpLCB1cGRhdGVkKTtcbiAgICAgICAgdXBkYXRlZCA9IHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LmdldFVwZGF0ZXMocmV2cywgb3V0cHV0LCB1cGRhdGVkKSB8fCB1cGRhdGVkO1xuICAgICAgICByZXR1cm4gdXBkYXRlZCAmJiBvdXRwdXQ7XG4gICAgfVxuICAgIFxuICAgIHNlcmlhbGl6ZSggZmxhZ3Nfc3RhdGVzID0gLy4qLywgZmxhZ3NfZGF0YXMgPSAvLiovICkge1xuICAgICAgICBsZXQgY3R4ID0gdGhpcy5fX2NvbnRleHQsIG91dHB1dCA9IHsgc3RhdGU6IHt9LCBkYXRhczoge30gfSxcbiAgICAgICAgICAgIF9mbGFnc19zdGF0ZXMsXG4gICAgICAgICAgICBfZmxhZ3NfZGF0YXM7XG4gICAgICAgIGlmICggaXNBcnJheShmbGFnc19zdGF0ZXMpIClcbiAgICAgICAgICAgIGZsYWdzX3N0YXRlcy5mb3JFYWNoKGlkID0+IChvdXRwdXQuc3RhdGVbaWRdID0gdGhpcy5zdGF0ZVtpZF0pKVxuICAgICAgICBcbiAgICAgICAgaWYgKCBpc0FycmF5KGZsYWdzX2RhdGFzKSApXG4gICAgICAgICAgICBmbGFnc19kYXRhcy5mb3JFYWNoKGlkID0+IChvdXRwdXQuZGF0YXNbaWRdID0gdGhpcy5kYXRhc1tpZF0pKVxuICAgICAgICBcbiAgICAgICAgaWYgKCAhaXNBcnJheShmbGFnc19kYXRhcykgJiYgIWlzQXJyYXkoZmxhZ3Nfc3RhdGVzKSApXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhjdHgpLmZvckVhY2goXG4gICAgICAgICAgICAgICAgaWQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIGlzRnVuY3Rpb24oY3R4W2lkXSkgKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgbGV0IGZsYWdzID0gY3R4W2lkXS5jb25zdHJ1Y3Rvci5mbGFncztcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGZsYWdzID0gaXNBcnJheShmbGFncykgPyBmbGFncyA6IFtmbGFncyB8fCBcIlwiXTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGlmICggZmxhZ3MucmVkdWNlKCggciwgZmxhZyApID0+IChyIHx8IF9mbGFnc19zdGF0ZXMudGVzdChmbGFnKSksIGZhbHNlKSApXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXQuc3RhdGVbaWRdID0gdGhpcy5zdGF0ZVtpZF07XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpZiAoIGZsYWdzLnJlZHVjZSgoIHIsIGZsYWcgKSA9PiAociB8fCBfZmxhZ3NfZGF0YXMudGVzdChmbGFnKSksIGZhbHNlKSApXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXQuZGF0YXNbaWRdID0gdGhpcy5kYXRhc1tpZF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKVxuICAgICAgICByZXR1cm4gb3V0cHV0O1xuICAgIH1cbiAgICBcbiAgICBvbiggbGlzdHMgKSB7XG4gICAgICAgIFxuICAgICAgICBpZiAoICFpc1N0cmluZyhsaXN0cykgJiYgbGlzdHMgKVxuICAgICAgICAgICAgT2JqZWN0LmtleXMobGlzdHMpLmZvckVhY2goayA9PiBzdXBlci5vbihrLCBsaXN0c1trXSkpO1xuICAgICAgICBlbHNlIHN1cGVyLm9uKC4uLmFyZ3VtZW50cyk7XG4gICAgfVxuICAgIFxuICAgIHJlbW92ZUxpc3RlbmVyKCBsaXN0cyApIHtcbiAgICAgICAgaWYgKCAhaXNTdHJpbmcobGlzdHMpICYmIGxpc3RzIClcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGxpc3RzKS5mb3JFYWNoKGsgPT4gc3VwZXIucmVtb3ZlTGlzdGVuZXIoaywgbGlzdHNba10pKTtcbiAgICAgICAgZWxzZSBzdXBlci5yZW1vdmVMaXN0ZW5lciguLi5hcmd1bWVudHMpO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBvbmNlKCdzdGFibGUnLCBjYilcbiAgICAgKiBAcGFyYW0gb2JqIHtSZWFjdC5Db21wb25lbnR8U3RvcmV8ZnVuY3Rpb24pXG4gICAgICogQHBhcmFtIGtleSB7c3RyaW5nfSBvcHRpb25hbCBrZXkgd2hlcmUgdG8gbWFwIHRoZSBwdWJsaWMgc3RhdGVcbiAgICAgKi9cbiAgICB0aGVuKCBjYiApIHtcbiAgICAgICAgaWYgKCB0aGlzLl9zdGFibGUgKVxuICAgICAgICAgICAgcmV0dXJuIGNiKG51bGwsIHRoaXMuZGF0YXMpO1xuICAgICAgICB0aGlzLm9uY2UoJ3N0YWJsZScsIGUgPT4gY2IobnVsbCwgdGhpcy5kYXRhcykpO1xuICAgIH1cbiAgICBcbiAgICByZXN0b3JlKCB7IHN0YXRlLCBkYXRhcyB9LCBxdWlldCApIHtcbiAgICAgICAgbGV0IGN0eCA9IHRoaXMuX19jb250ZXh0O1xuICAgICAgICBPYmplY3Qua2V5cyhkYXRhcykuZm9yRWFjaChcbiAgICAgICAgICAgIGlkID0+IHtcbiAgICAgICAgICAgICAgICBxdWlldCA/IGN0eC5kYXRhcyA9IGRhdGFzW2lkXVxuICAgICAgICAgICAgICAgICAgICA6IGN0eC5wdXNoKGRhdGFzW2lkXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIE9iamVjdC5rZXlzKHN0YXRlKS5mb3JFYWNoKFxuICAgICAgICAgICAgaWQgPT4ge1xuICAgICAgICAgICAgICAgIHF1aWV0ID8gY3R4LnN0YXRlID0gc3RhdGVbaWRdXG4gICAgICAgICAgICAgICAgICAgIDogY3R4LnNldFN0YXRlKHN0YXRlW2lkXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuICAgIFxuICAgIFxuICAgIHJldGFpblN0b3Jlcyggc3RvcmVzID0gW10sIHJlYXNvbiApIHtcbiAgICAgICAgc3RvcmVzLmZvckVhY2goXG4gICAgICAgICAgICBpZCA9PiAodGhpcy5zdG9yZXNbaWRdICYmIHRoaXMuc3RvcmVzW2lkXS5yZXRhaW4gJiYgdGhpcy5zdG9yZXNbaWRdLnJldGFpbihyZWFzb24pKVxuICAgICAgICApXG4gICAgfVxuICAgIFxuICAgIGRpc3Bvc2VTdG9yZXMoIHN0b3JlcyA9IFtdLCByZWFzb24gKSB7XG4gICAgICAgIHN0b3Jlcy5mb3JFYWNoKFxuICAgICAgICAgICAgaWQgPT4gKHRoaXMuc3RvcmVzW2lkXSAmJiB0aGlzLnN0b3Jlc1tpZF0uZGlzcG9zZSAmJiB0aGlzLnN0b3Jlc1tpZF0uZGlzcG9zZShyZWFzb24pKVxuICAgICAgICApXG4gICAgfVxuICAgIFxuICAgIHdhaXQoIHJlYXNvbiApIHtcbiAgICAgICAgLy8gIGNvbnNvbGUubG9nKFwid2FpdFwiLCByZWFzb24pO1xuICAgICAgICB0aGlzLl9zdGFibGUgJiYgIXRoaXMuX19sb2Nrcy5hbGwgJiYgdGhpcy5lbWl0KFwidW5zdGFibGVcIiwgdGhpcyk7XG4gICAgICAgIHRoaXMuX3N0YWJsZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9fbG9ja3MuYWxsKys7XG4gICAgICAgIGlmICggcmVhc29uICkge1xuICAgICAgICAgICAgdGhpcy5fX2xvY2tzW3JlYXNvbl0gPSB0aGlzLl9fbG9ja3NbcmVhc29uXSB8fCAwO1xuICAgICAgICAgICAgdGhpcy5fX2xvY2tzW3JlYXNvbl0rKztcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICByZWxlYXNlKCByZWFzb24gKSB7XG4gICAgICAgIFxuICAgICAgICBpZiAoIHJlYXNvbiApIHtcbiAgICAgICAgICAgIGlmICggdGhpcy5fX2xvY2tzW3JlYXNvbl0gPT0gMCApXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlJlbGVhc2UgbW9yZSB0aGFuIGxvY2tpbmcgIVwiLCByZWFzb24pO1xuICAgICAgICAgICAgdGhpcy5fX2xvY2tzW3JlYXNvbl0gPSB0aGlzLl9fbG9ja3NbcmVhc29uXSB8fCAwO1xuICAgICAgICAgICAgdGhpcy5fX2xvY2tzW3JlYXNvbl0tLTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoICFyZWFzb24gJiYgdGhpcy5fX2xvY2tzLmFsbCA9PSAwIClcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJSZWxlYXNlIG1vcmUgdGhhbiBsb2NraW5nICFcIik7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9fbG9ja3MuYWxsLS07XG4gICAgICAgIGlmICggIXRoaXMuX19sb2Nrcy5hbGwgKSB7XG4gICAgICAgICAgICB0aGlzLl9zdGFiaWxpemVyVE0gJiYgY2xlYXJUaW1lb3V0KHRoaXMuX3N0YWJpbGl6ZXJUTSk7XG4gICAgICAgICAgICB0aGlzLl9wcm9wYWdUTSAmJiBjbGVhclRpbWVvdXQodGhpcy5fcHJvcGFnVE0pO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLl9zdGFiaWxpemVyVE0gPSBzZXRUaW1lb3V0KFxuICAgICAgICAgICAgICAgIGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoICF0aGlzLl9fbG9ja3MuYWxsIClcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9zdGFiaWxpemVyVE0gPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc3RhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KFwic3RhYmxlXCIsIHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcHJvcGFnKClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cbiAgICBcbiAgICBwcm9wYWcoKSB7XG4gICAgICAgIHRoaXMuX3Byb3BhZ1RNICYmIGNsZWFyVGltZW91dCh0aGlzLl9wcm9wYWdUTSk7XG4gICAgICAgIHRoaXMuX3Byb3BhZ1RNID0gc2V0VGltZW91dChcbiAgICAgICAgICAgIGUgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuX3Byb3BhZygpXG4gICAgICAgICAgICB9LCA1MFxuICAgICAgICApO1xuICAgIH1cbiAgICBcbiAgICBfcHJvcGFnKCkge1xuICAgICAgICBpZiAoIHRoaXMuX2ZvbGxvd2Vycy5sZW5ndGggKVxuICAgICAgICAgICAgdGhpcy5fZm9sbG93ZXJzLmZvckVhY2goKCB7IDA6IG9iaiwgMToga2V5LCAyOiBhcywgMzogbGFzdFJldnMgfSApID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgZGF0YXMgPSB0aGlzLmdldFVwZGF0ZXMobGFzdFJldnMpO1xuICAgICAgICAgICAgICAgIGlmICggIWRhdGFzICkgcmV0dXJuO1xuICAgICAgICAgICAgICAgIGlmICggdHlwZW9mIG9iaiAhPSBcImZ1bmN0aW9uXCIgKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICggYXMgKSBvYmouc2V0U3RhdGUoeyBbYXNdOiBkYXRhcyB9KTtcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBvYmouc2V0U3RhdGUoZGF0YXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgb2JqKGRhdGFzLCBsYXN0UmV2cyAmJiBbLi4ubGFzdFJldnNdIHx8IFwibm8gcmV2c1wiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gbGFzdFJldnMgJiZcbiAgICAgICAgICAgICAgICAvLyBrZXkuZm9yRWFjaChpZCA9PiAobGFzdFJldnNbaWRdID0gdGhpcy5zdG9yZXNbaWRdICYmIHRoaXMuc3RvcmVzW2lkXS5fcmV2IHx8IDApKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB0aGlzLmVtaXQoXCJ1cGRhdGVcIiwgdGhpcy5nZXRVcGRhdGVzKCkpO1xuICAgIH1cbiAgICBcbiAgICBfZ2V0QWxsQ2hpbGRzKCBjaGlsZHMgPSBbXSApIHtcbiAgICAgICAgY2hpbGRzLnB1c2goLi4udGhpcy5fY2hpbGRDb250ZXh0cylcbiAgICAgICAgdGhpcy5fY2hpbGRDb250ZXh0cy5mb3JFYWNoKFxuICAgICAgICAgICAgY3R4ID0+IHtcbiAgICAgICAgICAgICAgICBjdHguX2dldEFsbENoaWxkcyhjaGlsZHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gY2hpbGRzO1xuICAgIH1cbiAgICBcbiAgICBfYWRkQ2hpbGQoIGN0eCApIHtcbiAgICAgICAgdGhpcy5fY2hpbGRDb250ZXh0cy5wdXNoKGN0eCk7XG4gICAgfVxuICAgIFxuICAgIF9ybUNoaWxkKCBjdHggKSB7XG4gICAgICAgIGxldCBpID0gdGhpcy5fY2hpbGRDb250ZXh0cy5pbmRleE9mKGN0eCk7XG4gICAgICAgIGlmICggaSAhPSAtMSApXG4gICAgICAgICAgICB0aGlzLl9jaGlsZENvbnRleHRzLnNwbGljZShpLCAxKTtcbiAgICB9XG4gICAgXG4gICAgcmV0YWluKCByZWFzb24gKSB7XG4gICAgICAgIHRoaXMuX19yZXRhaW5zLmFsbCsrO1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwicmV0YWluXCIsIHRoaXMuX2lkLCByZWFzb24pO1xuICAgICAgICBcbiAgICAgICAgaWYgKCByZWFzb24gKSB7XG4gICAgICAgICAgICB0aGlzLl9fcmV0YWluc1tyZWFzb25dID0gdGhpcy5fX3JldGFpbnNbcmVhc29uXSB8fCAwO1xuICAgICAgICAgICAgdGhpcy5fX3JldGFpbnNbcmVhc29uXSsrO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGRpc3Bvc2UoIHJlYXNvbiApIHtcbiAgICAgICAgaWYgKCByZWFzb24gKSB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmICggdGhpcy5fX3JldGFpbnNbcmVhc29uXSA9PSAwIClcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJEaXNwb3NlIG1vcmUgdGhhbiByZXRhaW5pbmcgIVwiKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5fX3JldGFpbnNbcmVhc29uXSA9IHRoaXMuX19yZXRhaW5zW3JlYXNvbl0gfHwgMDtcbiAgICAgICAgICAgIHRoaXMuX19yZXRhaW5zW3JlYXNvbl0tLTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKCB0aGlzLl9fcmV0YWlucy5hbGwgPT0gMCApXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJEaXNwb3NlIG1vcmUgdGhhbiByZXRhaW5pbmcgIVwiKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX19yZXRhaW5zLmFsbC0tO1xuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIGlmICggIXRoaXMuX19yZXRhaW5zLmFsbCApIHtcbiAgICAgICAgICAgIGlmICggdGhpcy5fcGVyc2lzdGVuY2VUbSApIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9kZXN0cm95VE0gJiYgY2xlYXJUaW1lb3V0KHRoaXMuX2Rlc3Ryb3lUTSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fZGVzdHJveVRNID0gc2V0VGltZW91dChcbiAgICAgICAgICAgICAgICAgICAgZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInd0ZiBjdHhcIiwgdGhpcy5faWQsIHJlYXNvbiwgdGhpcy5fX2xvY2tzLCB0aGlzLl9zdGFibGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50aGVuKHMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgY29uc29sZS5sb2coXCJ3dGYgY3R4IHRoZW5cIiwgdGhpcy5faWQsIHJlYXNvbiwgdGhpcy5fX2xvY2tzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhdGhpcy5fX3JldGFpbnMuYWxsICYmIHRoaXMuZGVzdHJveSgpXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcGVyc2lzdGVuY2VUbVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRoZW4ocyA9PiAoIXRoaXMuX19yZXRhaW5zLmFsbCAmJiB0aGlzLmRlc3Ryb3koKSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIG9yZGVyIGRlc3Ryb3kgb2YgbG9jYWwgc3RvcmVzXG4gICAgICovXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgbGV0IGN0eCA9IHRoaXMuX19jb250ZXh0O1xuICAgICAgICBcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJkZXN0cm95XCIsIHRoaXMuX2lkKTtcbiAgICAgICAgdGhpcy5lbWl0KFwiZGVzdHJveVwiKTtcbiAgICAgICAgT2JqZWN0LmtleXMoXG4gICAgICAgICAgICB0aGlzLl9fbGlzdGVuaW5nXG4gICAgICAgICkuZm9yRWFjaChcbiAgICAgICAgICAgIGlkID0+IHRoaXMuX19jb250ZXh0W2lkXS5yZW1vdmVMaXN0ZW5lcih0aGlzLl9fbGlzdGVuaW5nW2lkXSlcbiAgICAgICAgKTtcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICB0aGlzLl9fbGlzdGVuaW5nID0ge307XG4gICAgICAgIFxuICAgICAgICBpZiAoIHRoaXMuX2lzTG9jYWxJZCApXG4gICAgICAgICAgICBkZWxldGUgb3BlbkNvbnRleHRzW3RoaXMuX2lkXTtcbiAgICAgICAgdGhpcy5fZm9sbG93ZXJzLmxlbmd0aCA9IDA7XG4gICAgICAgIFxuICAgICAgICBmb3IgKCBsZXQga2V5IGluIGN0eCApXG4gICAgICAgICAgICBpZiAoICFpc0Z1bmN0aW9uKGN0eFtrZXldKSApIHtcbiAgICAgICAgICAgICAgICBpZiAoIGN0eFtrZXldLmNvbnRleHRPYmogPT09IHRoaXMgKVxuICAgICAgICAgICAgICAgICAgICBjdHhba2V5XS5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY3R4W2tleV0gPSBjdHhba2V5XS5jb25zdHJ1Y3RvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgd2hpbGUgKCB0aGlzLl9fbWl4ZWRMaXN0Lmxlbmd0aCApIHtcbiAgICAgICAgICAgIHRoaXMuX19taXhlZFswXS5yZW1vdmVMaXN0ZW5lcih0aGlzLl9fbWl4ZWRMaXN0LnNoaWZ0KCkpO1xuICAgICAgICAgICAgdGhpcy5fX21peGVkLnNoaWZ0KCkuZGlzcG9zZSgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICggdGhpcy5wYXJlbnQgKSB7XG4gICAgICAgICAgICB0aGlzLnBhcmVudC5yZW1vdmVMaXN0ZW5lcih0aGlzLl9fcGFyZW50TGlzdCk7XG4gICAgICAgICAgICB0aGlzLnBhcmVudC5kaXNwb3NlKFwiaXNNeVBhcmVudFwiKTtcbiAgICAgICAgICAgIHRoaXMucGFyZW50Ll9ybUNoaWxkKHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIC8vIHRoaXMuZGF0YXMgPSB0aGlzLnN0YXRlID0gdGhpcy5jb250ZXh0ID0gdGhpcy5zdG9yZXMgPSBudWxsO1xuICAgICAgICAvLyB0aGlzLl9kYXRhcyA9IHRoaXMuX3N0YXRlID0gdGhpcy5fc3RvcmVzID0gbnVsbDtcbiAgICAgICAgXG4gICAgICAgIFxuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvQ29udGV4dC5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImlzc3RyaW5nXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiaXNzdHJpbmdcIlxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpc2FycmF5XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiaXNhcnJheVwiXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV2ZW50c1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImV2ZW50c1wiXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImlzZnVuY3Rpb25cIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJpc2Z1bmN0aW9uXCJcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2hvcnRpZFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInNob3J0aWRcIlxuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxuICogQ29weXJpZ2h0IChjKSAgMjAxNyBDYWlwaSBMYWJzIC5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuICpcbiAqIEBhdXRob3IgOiBOYXRoYW5hZWwgQnJhdW5cbiAqIEBjb250YWN0IDogY2FpcGlsYWJzQGdtYWlsLmNvbVxuICovXG5cbi8qKlxuICogVWx0cmEgc2NhbGFibGUgc3RhdGUtYXdhcmUgc3RvcmVcbiAqXG4gKiBAdG9kbyA6IGxvdCBvZiBvcHRpbXMuLi5cbiAqL1xuXG52YXIgaXNTdHJpbmcgICAgID0gcmVxdWlyZSgnaXNzdHJpbmcnKVxuICAgICwgaXNBcnJheSAgICA9IHJlcXVpcmUoJ2lzYXJyYXknKVxuICAgICwgaXNGdW5jdGlvbiA9IHJlcXVpcmUoJ2lzZnVuY3Rpb24nKVxuICAgICxcbiAgICBDb250ZXh0ICAgICAgPSByZXF1aXJlKCcuL0NvbnRleHQnKSxcbiAgICBFdmVudEVtaXR0ZXIgPSByZXF1aXJlKCdldmVudHMnKSxcbiAgICBzaG9ydGlkICAgICAgPSByZXF1aXJlKCdzaG9ydGlkJyksXG4gICAgb2JqUHJvdG8gICAgID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHt9KSxcbiAgICBvcGVuQ29udGV4dHMgPSB7fTtcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdG9yZSBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gICAgXG4gICAgc3RhdGljIHVzZSA9IFtdOy8vIG92ZXJyaWRhYmxlIGxpc3Qgb2Ygc291cmNlIHN0b3Jlc1xuICAgIHN0YXRpYyBmb2xsb3c7Ly8gb3ZlcnJpZGFibGUgbGlzdCBvZiBzdG9yZSB0aGF0IHdpbGwgYWxsb3cgcHVzaCBpZiB1cGRhdGVkXG4gICAgc3RhdGljIHJlcXVpcmU7XG4gICAgc3RhdGljIHN0YXRpY0NvbnRleHQgPSBuZXcgQ29udGV4dCh7fSwgeyBpZDogXCJzdGF0aWNcIiB9KTtcbiAgICBzdGF0aWMgaW5pdGlhbFN0YXRlID0gdW5kZWZpbmVkOy8vIGRlZmF1bHQgc3RhdGVcbiAgICAvKipcbiAgICAgKlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gICAgc3RhdGljIGRlZmF1bHRNYXhMaXN0ZW5lcnMgPSAxMDA7XG4gICAgLyoqXG4gICAgICogaWYgcmV0YWluIGdvZXMgdG8gMCA6XG4gICAgICogZmFsc2UgdG8gbm90IGRlc3Ryb3ksXG4gICAgICogMCB0byBzeW5jIGF1dG8gZGVzdHJveVxuICAgICAqIE1zIHRvIGF1dG9kZXN0cm95IGFmdGVyIHRtIG1zIGlmIG5vIHJldGFpbiBoYXMgYmVlbiBjYWxsZWRcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbnxJbnR9XG4gICAgICovXG4gICAgc3RhdGljIHBlcnNpc3RlbmNlVG0gPSBmYWxzZTtcbiAgICBcbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3Rvciwgd2lsbCBidWlsZCBhIHJlc2NvcGUgc3RvcmVcbiAgICAgKlxuICAgICAqIChjb250ZXh0LCB7cmVxdWlyZSx1c2UscmVmaW5lLHN0YXRlLCBkYXRhc30pXG4gICAgICogKGNvbnRleHQpXG4gICAgICpcbiAgICAgKiBAcGFyYW0gY29udGV4dCB7b2JqZWN0fSBjb250ZXh0IHdoZXJlIHRvIGZpbmQgdGhlIG90aGVyIHN0b3JlcyAoZGVmYXVsdCA6IHN0YXRpYyBzdGF0aWNDb250ZXh0IClcbiAgICAgKiBAcGFyYW0ga2V5cyB7QXJyYXl9IChwYXNzZWQgdG8gU3RvcmU6Om1hcCkgRXggOiBbXCJzZXNzaW9uXCIsIFwib3RoZXJOYW1lZFN0b3JlOmtleVwiLCBvdGhlclN0b3JlLmFzKFwib3RoZXJLZXlcIildXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHZhciBhcmd6ICAgICAgICAgPSBbLi4uYXJndW1lbnRzXSxcbiAgICAgICAgICAgIF9zdGF0aWMgICAgICA9IHRoaXMuY29uc3RydWN0b3IsXG4gICAgICAgICAgICBjb250ZXh0ICAgICAgPSAhaXNBcnJheShhcmd6WzBdKSAmJiAhaXNTdHJpbmcoYXJnelswXSkgPyBhcmd6LnNoaWZ0KCkgOiBfc3RhdGljLnN0YXRpY0NvbnRleHQsXG4gICAgICAgICAgICBjZmcgICAgICAgICAgPSBhcmd6WzBdICYmICFpc0FycmF5KGFyZ3pbMF0pICYmICFpc1N0cmluZyhhcmd6WzBdKSA/IGFyZ3ouc2hpZnQoKSA6IHt9LFxuICAgICAgICAgICAgbmFtZSAgICAgICAgID0gaXNTdHJpbmcoYXJnelswXSkgPyBhcmd6WzBdIDogY2ZnLm5hbWUgfHwgX3N0YXRpYy5uYW1lLFxuICAgICAgICAgICAgd2F0Y2hzICAgICAgID0gaXNBcnJheShhcmd6WzBdKSA/IGFyZ3ouc2hpZnQoKSA6IGNmZy51c2UgfHwgW10sLy8gd2F0Y2hzIG5lZWQgdG8gYmUgZGVmaW5lZCBhZnRlciBhbGwgdGhlIHN0b3JlIGFyZSByZWdpc3RlcmVkIDogc28gd2UgY2FuJ3QgZGVhbCB3aXRoIGFueSBcInN0YXRpYyB1c2VcIiBhdXRvbWF0aWNseVxuICAgICAgICAgICAgcmVmaW5lICAgICAgID0gaXNGdW5jdGlvbihhcmd6WzBdKSA/IGFyZ3ouc2hpZnQoKSA6IGNmZy5yZWZpbmUgfHwgbnVsbCxcbiAgICAgICAgICAgIGluaXRpYWxTdGF0ZSA9IF9zdGF0aWMuaW5pdGlhbFN0YXRlO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fdWlkID0gY2ZnLl91aWQgfHwgc2hvcnRpZC5nZW5lcmF0ZSgpO1xuICAgICAgICB0aGlzLl9tYXhMaXN0ZW5lcnMgPSBjZmcuZGVmYXVsdE1heExpc3RlbmVycyB8fCBTdG9yZS5kZWZhdWx0TWF4TGlzdGVuZXJzO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fX3JldGFpbnMgPSB7IGFsbDogMCB9O1xuICAgICAgICB0aGlzLl9fbG9ja3MgPSB7IGFsbDogMCB9O1xuICAgICAgICB0aGlzLl9vblN0YWJpbGl6ZSA9IFtdO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fcGVyc2lzdGVuY2VUbSA9IGNmZy5wZXJzaXN0ZW5jZVRtIHx8IHRoaXMuY29uc3RydWN0b3IucGVyc2lzdGVuY2VUbTtcbiAgICAgICAgaWYgKCBpc1N0cmluZyhhcmd6WzBdKSApIHtcbiAgICAgICAgICAgIGlmICggY29udGV4dC5fX2NvbnRleHRbbmFtZV0gKVxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIlJlU2NvcGU6IE92ZXJ3cml0aW5nIGFuIGV4aXN0aW5nIHN0YXRpYyBuYW1lZCBzdG9yZSAoICVzICkgISFcIiwgbmFtZSk7XG4gICAgICAgICAgICBjb250ZXh0Ll9fY29udGV4dFtuYW1lXSA9IHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmICggY2ZnICYmIGNmZy5vbiApIHtcbiAgICAgICAgICAgIHRoaXMub24oY2ZnLm9uKTtcbiAgICAgICAgfVxuICAgICAgICAvLyB0aGlzLnN0YXRlICAgICAgPSB0aGlzLnN0YXRlIHx8IHt9O1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fdXNlID0gWy4uLndhdGNocywgLi4uX3N0YXRpYy51c2VdO1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICBcbiAgICAgICAgaWYgKCBjb250ZXh0LnN0b3JlcyApIHtcbiAgICAgICAgICAgIHRoaXMuY29udGV4dE9iaiA9IGNvbnRleHQ7XG4gICAgICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0LnN0b3JlcztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY29udGV4dE9iaiA9IG5ldyBDb250ZXh0KGNvbnRleHQpO1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dC5zdG9yZXM7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICB0aGlzLl9zdGFibGUgPSB0cnVlO1xuICAgICAgICB0aGlzLl9yZXYgPSAxO1xuICAgICAgICB0aGlzLl9yZXZzID0ge307XG4gICAgICAgIHRoaXMuc3RvcmVzID0ge307XG4gICAgICAgIHRoaXMuX3JlcXVpcmUgPSBbXTtcbiAgICAgICAgXG4gICAgICAgIGlmICggX3N0YXRpYy5yZXF1aXJlIClcbiAgICAgICAgICAgIHRoaXMuX3JlcXVpcmUucHVzaCguLi5fc3RhdGljLnJlcXVpcmUpO1xuICAgICAgICBpZiAoIGNmZy5yZXF1aXJlIClcbiAgICAgICAgICAgIHRoaXMuX3JlcXVpcmUucHVzaCguLi5jZmcucmVxdWlyZSk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9mb2xsb3dlcnMgPSBbXTtcbiAgICAgICAgXG4gICAgICAgIGlmICggY2ZnLmhhc093blByb3BlcnR5KFwiZGF0YXNcIikgJiYgY2ZnLmRhdGFzICE9PSB1bmRlZmluZWQgKVxuICAgICAgICAgICAgdGhpcy5kYXRhcyA9IGNmZy5kYXRhcztcbiAgICAgICAgaWYgKCBjZmcuaGFzT3duUHJvcGVydHkoXCJzdGF0ZVwiKSAmJiBjZmcuc3RhdGUgIT09IHVuZGVmaW5lZCApXG4gICAgICAgICAgICBpbml0aWFsU3RhdGUgPSBjZmcuc3RhdGU7XG4gICAgICAgIFxuICAgICAgICBpZiAoIHJlZmluZSApXG4gICAgICAgICAgICB0aGlzLnJlZmluZSA9IHJlZmluZTtcbiAgICAgICAgXG4gICAgICAgIGlmICggISF0aGlzLl91c2UgJiYgdGhpcy5fdXNlLmxlbmd0aCApIHsvLyBpZiB0aGVyZSBpbml0aWFsIHdhdGNocyBhbnl3YXlcbiAgICAgICAgICAgIHRoaXMucHVsbCh0aGlzLl91c2UpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAoIGluaXRpYWxTdGF0ZSApIHsvLyBzeW5jIHJlZmluZVxuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IHsgLi4uaW5pdGlhbFN0YXRlIH07XG4gICAgICAgICAgICBpZiAoIHRoaXMuaXNDb21wbGV0ZSgpICYmIHRoaXMuZGF0YXMgPT09IHVuZGVmaW5lZCApXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhcyA9IHRoaXMucmVmaW5lKHRoaXMuZGF0YXMsIHRoaXMuc3RhdGUsIHRoaXMuc3RhdGUpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3N0YWJsZSA9IHRoaXMuZGF0YXMgIT09IHVuZGVmaW5lZDsvLyBzdGFibGUgaWYgaXQgaGF2ZSBpbml0aWFsIHJlc3VsdCBkYXRhc1xuICAgICAgICAhdGhpcy5fc3RhYmxlICYmIHRoaXMuZW1pdCgndW5zdGFibGUnLCB0aGlzLnN0YXRlKTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogZ2V0IGEgQnVpbGRlci1rZXkgcGFpciBmb3IgU3RvcmU6Om1hcFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gICAgICogQHJldHVybnMge3tzdG9yZTogU3RvcmUsIG5hbWU6ICp9fVxuICAgICAqL1xuICAgIHN0YXRpYyBhcyggbmFtZSApIHtcbiAgICAgICAgcmV0dXJuIHsgc3RvcmU6IHRoaXMsIG5hbWUgfTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogTWFwIGFsbCBuYW1lZCBzdG9yZXMgaW4ge2tleXN9IHRvIHRoZSB7b2JqZWN0fSdzIHN0YXRlXG4gICAgICogSG9vayBjb21wb25lbnRXaWxsVW5tb3VudCAoZm9yIHJlYWN0IGNvbXApIG9yIGRlc3Ryb3kgdG8gdW5CaW5kIHRoZW0gYXV0b21hdGljYWxseVxuICAgICAqIEBzdGF0aWNcbiAgICAgKiBAcGFyYW0gb2JqZWN0IHtSZWFjdC5Db21wb25lbnR8U3RvcmV8Li4ufSB0YXJnZXQgc3RhdGUgYXdhcmUgb2JqZWN0XG4gICAgICogQHBhcmFtIGtleXMge0FycmF5fSBFeCA6IFtcInNlc3Npb25cIiwgXCJvdGhlclN0YXRpY05hbWVkU3RvcmU6a2V5XCIsIHN0b3JlLmFzKCdhbm90aGVyS2V5JyldXG4gICAgICovXG4gICAgc3RhdGljIG1hcCggY29tcG9uZW50LCBrZXlzLCBjb250ZXh0LCBvcmlnaW4sIHNldEluaXRpYWwgPSBmYWxzZSApIHtcbiAgICAgICAgdmFyIHRhcmdldFJldnMgPSBjb21wb25lbnQuX3JldnMgfHwge307XG4gICAgICAgIHZhciB0YXJnZXRDb250ZXh0ID0gY29tcG9uZW50LnN0b3JlcyB8fCAoY29tcG9uZW50LnN0b3JlcyA9IHt9KTtcbiAgICAgICAgdmFyIGluaXRpYWxPdXRwdXRzID0ge307XG4gICAgICAgIGtleXMgPSBpc0FycmF5KGtleXMpID8gWy4uLmtleXNdIDogW2tleXNdO1xuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIGNvbnRleHQgPSBjb250ZXh0IHx8IFN0b3JlLnN0YXRpY0NvbnRleHQ7XG4gICAgICAgIFxuICAgICAgICAvLyBpZiAoIXRhcmdldENvbnRleHQuX19jb250ZXh0KVxuICAgICAgICAvLyAgICAgZGVidWdnZXI7XG4gICAgICAgIFxuICAgICAgICBrZXlzID0ga2V5cy5maWx0ZXIoXG4gICAgICAgICAgICAvLyBAdG9kbyA6IHVzZSBxdWVyeSByZWZzXG4gICAgICAgICAgICAvLyAoc3RvcmUpKFxcLnN0b3JlKSooXFxbKFxcKnwocHJvcHMpXFx3KykrKVxcXSk/KFxcOmFsaWFzKVxuICAgICAgICAgICAgKCBrZXkgKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCAha2V5ICkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiTm90IGEgbWFwcGFibGUgc3RvcmUgaXRlbSAnXCIgKyBrZXkgKyBcIicgaW4gXCIgKyBvcmlnaW4gKyAnICEhJyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGV0IG5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGFsaWFzLFxuICAgICAgICAgICAgICAgICAgICBzdG9yZTtcbiAgICAgICAgICAgICAgICBpZiAoIGtleS5zdG9yZSAmJiBrZXkubmFtZSApIHtcbiAgICAgICAgICAgICAgICAgICAgYWxpYXMgPSBuYW1lID0ga2V5Lm5hbWU7XG4gICAgICAgICAgICAgICAgICAgIHN0b3JlID0ga2V5LnN0b3JlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICggaXNGdW5jdGlvbihrZXkpICkge1xuICAgICAgICAgICAgICAgICAgICBuYW1lID0gYWxpYXMgPSBrZXkubmFtZSB8fCBrZXkuZGVmYXVsdE5hbWU7XG4gICAgICAgICAgICAgICAgICAgIHN0b3JlID0ga2V5O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAga2V5ID0ga2V5Lm1hdGNoKC8oW1xcd19dKykoPzpcXDpcXFsoXFwqKVxcXSk/KD86XFw6KFxcKikpPy8pO1xuICAgICAgICAgICAgICAgICAgICBuYW1lID0ga2V5WzBdO1xuICAgICAgICAgICAgICAgICAgICBzdG9yZSA9IGNvbnRleHQuc3RvcmVzW2tleVswXV07XG4gICAgICAgICAgICAgICAgICAgIGFsaWFzID0ga2V5WzFdID09ICcqJyA/IG51bGwgOiBrZXlbMl0gfHwga2V5WzBdOy8vIGFsbG93IGJpbmRpbmcgcHJvcHMgIChbKl0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmICggdGFyZ2V0UmV2c1tuYW1lXSApIHJldHVybiBmYWxzZTsvLyBpZ25vcmUgZGJsIHVzZXMgZm9yIG5vd1xuICAgICAgICAgICAgICAgIGlmICggIXN0b3JlICkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiTm90IGEgbWFwcGFibGUgc3RvcmUgaXRlbSAnXCIgKyBuYW1lICsgXCIvXCIgKyBhbGlhcyArIFwiJyBpbiBcIiArIG9yaWdpbiArICcgISEnLCBzdG9yZSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoIGlzRnVuY3Rpb24oc3RvcmUpICkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdW50U3RvcmUobmFtZSwgY29udGV4dClcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQuc3RvcmVzW25hbWVdLmJpbmQoY29tcG9uZW50LCBhbGlhcywgc2V0SW5pdGlhbCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIGlmICggY29udGV4dC5fX2NvbnRleHRba2V5WzBdXS5zdGF0ZSApIHsvLyBkbyBzeW5jIHB1c2ggYWZ0ZXIgY29uc3RydWN0b3JcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGNvbnRleHQuX19jb250ZXh0W2tleVswXV0ucHVzaCgpO1xuICAgICAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzdG9yZS5iaW5kKGNvbXBvbmVudCwgYWxpYXMsIHNldEluaXRpYWwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0YXJnZXRSZXZzW2FsaWFzXSA9IHRhcmdldFJldnNbYWxpYXNdIHx8IHRydWU7XG4gICAgICAgICAgICAgICAgIXRhcmdldENvbnRleHRbbmFtZV0gJiYgKHRhcmdldENvbnRleHRbbmFtZV0gPSBjb250ZXh0LnN0b3Jlc1tuYW1lXSk7XG4gICAgICAgICAgICAgICAgaWYgKCBjb250ZXh0LnN0b3Jlc1tuYW1lXS5oYXNPd25Qcm9wZXJ0eSgnZGF0YXMnKSApXG4gICAgICAgICAgICAgICAgICAgIGluaXRpYWxPdXRwdXRzW25hbWVdID0gY29udGV4dC5kYXRhc1tuYW1lXTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgdmFyIG1peGVkQ1dVbm1vdW50LFxuICAgICAgICAgICAgdW5Nb3VudEtleSA9IGNvbXBvbmVudC5pc1JlYWN0Q29tcG9uZW50ID8gXCJjb21wb25lbnRXaWxsVW5tb3VudFwiIDogXCJkZXN0cm95XCI7XG4gICAgICAgIFxuICAgICAgICBpZiAoIGNvbXBvbmVudC5oYXNPd25Qcm9wZXJ0eSh1bk1vdW50S2V5KSApIHtcbiAgICAgICAgICAgIG1peGVkQ1dVbm1vdW50ID0gY29tcG9uZW50W3VuTW91bnRLZXldO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBjb21wb25lbnRbdW5Nb3VudEtleV0gPSBmdW5jdGlvbiAoKSB7Ly8gdG9kbyBob3BcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzW3VuTW91bnRLZXldO1xuICAgICAgICAgICAgaWYgKCBtaXhlZENXVW5tb3VudCApXG4gICAgICAgICAgICAgICAgdGhpc1t1bk1vdW50S2V5XSA9IG1peGVkQ1dVbm1vdW50O1xuICAgICAgICAgICAga2V5cy5tYXAoXG4gICAgICAgICAgICAgICAgKCBrZXkgKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpYXMsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9yZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBrZXkuc3RvcmUgJiYga2V5Lm5hbWUgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlhcyA9IG5hbWUgPSBrZXkubmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlID0ga2V5LnN0b3JlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKCBpc0Z1bmN0aW9uKGtleSkgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lID0gYWxpYXMgPSBrZXkubmFtZSB8fCBrZXkuZGVmYXVsdE5hbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9yZSA9IGNvbnRleHQuc3RvcmVzW25hbWVdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5ID0ga2V5LnNwbGl0KCc6Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lID0ga2V5WzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmUgPSBjb250ZXh0LnN0b3Jlc1trZXlbMF1dO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpYXMgPSBrZXlbMV0gfHwga2V5WzBdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBzdG9yZSAmJiAhaXNGdW5jdGlvbihzdG9yZSkgJiYgc3RvcmUudW5CaW5kKGNvbXBvbmVudCwgYWxpYXMpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzW3VuTW91bnRLZXldICYmIHRoaXNbdW5Nb3VudEtleV0uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGluaXRpYWxPdXRwdXRzO1xuICAgIH1cbiAgICBcbiAgICBzdGF0aWMgZ2V0Q29udGV4dCggY29udGV4dHMgKSB7XG4gICAgICAgIGxldCBza2V5ID0gaXNBcnJheShjb250ZXh0cykgPyBjb250ZXh0cy5zb3J0KCggYSwgYiApID0+IHtcbiAgICAgICAgICAgIGlmICggYS5maXJzdG5hbWUgPCBiLmZpcnN0bmFtZSApIHJldHVybiAtMTtcbiAgICAgICAgICAgIGlmICggYS5maXJzdG5hbWUgPiBiLmZpcnN0bmFtZSApIHJldHVybiAxO1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH0pLmpvaW4oJzo6JykgOiBjb250ZXh0cztcbiAgICAgICAgcmV0dXJuIENvbnRleHQuY29udGV4dHNbc2tleV0gPSBDb250ZXh0LmNvbnRleHRzW3NrZXldIHx8IG5ldyBDb250ZXh0KHt9LCB7IGlkOiBza2V5IH0pO1xuICAgIH1cbiAgICBcbiAgICBzdGF0aWMgbW91bnRTdG9yZSggbmFtZSwgY29udGV4dCwgc3RvcmUsIHN0YXRlLCBkYXRhcyApIHtcbiAgICAgICAgbGV0IGN0eCwgY29udGV4dE1hcCA9IGNvbnRleHQuX19jb250ZXh0O1xuICAgICAgICBjb250ZXh0TWFwW25hbWVdID0gc3RvcmUgPSBzdG9yZSB8fCBjb250ZXh0TWFwW25hbWVdO1xuICAgICAgICBpZiAoICFzdG9yZSApIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJOb3QgYSBtYXBwYWJsZSBzdG9yZSBpdGVtICdcIiArIG5hbWUgKyAnICEhJywgc3RvcmUpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCBpc0Z1bmN0aW9uKHN0b3JlKSApIHtcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICBpZiAoIHN0b3JlICYmIChzdG9yZS5jb250ZXh0cyB8fCBzdG9yZS5jb250ZXh0KSApIHtcbiAgICAgICAgICAgICAgICBjdHggPSB0aGlzLmdldENvbnRleHQoc3RvcmUuY29udGV4dHMgfHwgW3N0b3JlLmNvbnRleHRdKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBjdHgucmVnaXN0ZXIoeyBbbmFtZV06IGN0eC5fX2NvbnRleHRbbmFtZV0gfHwgc3RvcmUgfSk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY29udGV4dE1hcFtuYW1lXSA9IGN0eFtuYW1lXSA9IG5ldyBzdG9yZShjb250ZXh0LCB7IHN0YXRlLCBkYXRhcyB9KTtcbiAgICAgICAgICAgICAgICBjdHguX3dhdGNoU3RvcmUobmFtZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGN0eFtuYW1lXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBzdG9yZSA9IGNvbnRleHRNYXBbbmFtZV0gPSBuZXcgc3RvcmUoY29udGV4dCwgeyBzdGF0ZSwgZGF0YXMgfSk7XG4gICAgICAgICAgICBjb250ZXh0TWFwW25hbWVdLnJlbGluayhuYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmICggc3RhdGUgIT09IHVuZGVmaW5lZCAmJiBkYXRhcyA9PT0gdW5kZWZpbmVkIClcbiAgICAgICAgICAgICAgICBzdG9yZS5zZXRTdGF0ZShzdGF0ZSk7XG4gICAgICAgICAgICBlbHNlIGlmICggc3RhdGUgIT09IHVuZGVmaW5lZCApXG4gICAgICAgICAgICAgICAgc3RvcmUuc3RhdGUgPSBzdGF0ZTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKCBkYXRhcyAhPT0gdW5kZWZpbmVkIClcbiAgICAgICAgICAgICAgICBzdG9yZS5wdXNoKGRhdGFzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3RvcmU7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIE92ZXJyaWRhYmxlIG1ldGhvZCB0byBrbm93IGlmIGEgc3RhdGUgY2hhbmdlIHNob3VsZCBiZSBwcm9wYWcgdG8gdGhlIGxpc3RlbmluZyBzdG9yZXMgJiBjb21wb25lbnRzXG4gICAgICogSWYgc3RhdGljIGZvbGxvdyBpcyBkZWZpbmVkLCBzaG91bGRQcm9wYWcgd2lsbCByZXR1cm4gdHJ1ZSBpZiBhbnkgb2YgdGhlIFwiZm9sbG93XCIga2V5cyB3YXMgdXBkYXRlZFxuICAgICAqIElmIG5vdCBpdCB3aWxsIGFsd2F5cyByZXR1cm4gdHJ1ZVxuICAgICAqL1xuICAgIHNob3VsZFByb3BhZyggbkRhdGFzICkge1xuICAgICAgICB2YXIgX3N0YXRpYyA9IHRoaXMuY29uc3RydWN0b3IsIHIsXG4gICAgICAgICAgICBjRGF0YXMgID0gdGhpcy5kYXRhcztcbiAgICAgICAgXG4gICAgICAgIC8vIGlmICggIWNTdGF0ZSApXG4gICAgICAgIC8vICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgaWYgKCAhY0RhdGFzICYmICghX3N0YXRpYy5mb2xsb3cgfHwgIV9zdGF0aWMuZm9sbG93Lmxlbmd0aCB8fFxuICAgICAgICAgICAgICAgIF9zdGF0aWMuZm9sbG93ICYmIF9zdGF0aWMuZm9sbG93LnJlZHVjZSgoIHIsIGkgKSA9PiAociB8fCBuRGF0YXMgJiYgbkRhdGFzW2ldKSwgZmFsc2UpKSApXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgXG4gICAgICAgIGlmICggaXNBcnJheShfc3RhdGljLmZvbGxvdykgKVxuICAgICAgICAgICAgX3N0YXRpYy5mb2xsb3cuZm9yRWFjaChcbiAgICAgICAgICAgICAgICAoIGtleSApID0+IHtcbiAgICAgICAgICAgICAgICAgICAgciA9IHIgfHwgKG5EYXRhcyA/IGNEYXRhc1trZXldICE9PSBuRGF0YXNba2V5XSA6IGNEYXRhcyAmJiBjRGF0YXNba2V5XSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICBlbHNlIGlmICggX3N0YXRpYy5mb2xsb3cgPT09ICdzdHJpY3QnIClcbiAgICAgICAgICAgIHIgPSBuRGF0YXMgPT09IGNEYXRhcztcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjRGF0YXMgJiYgT2JqZWN0LmtleXMoY0RhdGFzKS5mb3JFYWNoKFxuICAgICAgICAgICAgICAgICgga2V5ICkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByID0gciB8fCAobkRhdGFzID8gY0RhdGFzW2tleV0gIT09IG5EYXRhc1trZXldIDogY0RhdGFzICYmIGNEYXRhc1trZXldKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBuRGF0YXMgJiYgT2JqZWN0LmtleXMobkRhdGFzKS5mb3JFYWNoKFxuICAgICAgICAgICAgICAgICgga2V5ICkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByID0gciB8fCAobkRhdGFzID8gY0RhdGFzW2tleV0gIT09IG5EYXRhc1trZXldIDogY0RhdGFzICYmIGNEYXRhc1trZXldKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiAhIXI7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIE92ZXJyaWRhYmxlIHJlZmluZXIgLyByZW1hcHBlclxuICAgICAqIElmIHN0YXRlIG9yIGxhc3RQdWJsaWNTdGF0ZSBhcmUgc2ltcGxlIGhhc2ggbWFwcyByZWZpbmUgd2lsbCByZXR1cm4gey4uLmRhdGFzLCAuLi5zdGF0ZX1cbiAgICAgKiBpZiBub3QgaXQgd2lsbCByZXR1cm4gdGhlIGxhc3QgcHJpdmF0ZSBzdGF0ZVxuICAgICAqIEBwYXJhbSBkYXRhc1xuICAgICAqIEBwYXJhbSBzdGF0ZVxuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqL1xuICAgIHJlZmluZSggZGF0YXMsIHN0YXRlLCBjaGFuZ2VzICkge1xuICAgICAgICBzdGF0ZSA9IHN0YXRlIHx8IHRoaXMuc3RhdGU7XG4gICAgICAgIFxuICAgICAgICBpZiAoICFkYXRhcyB8fCBkYXRhcy5fX3Byb3RvX18gIT09IG9ialByb3RvIHx8IHN0YXRlLl9fcHJvdG9fXyAhPT0gb2JqUHJvdG8gKVxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICByZXR1cm4geyAuLi5kYXRhcywgLi4uc3RhdGUgfVxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBEZWJvdW5jZSB0aGlzIHN0b3JlIHByb3BhZ2F0aW9uICggJiByZWR1Y2luZyApXG4gICAgICogQHBhcmFtIGNiXG4gICAgICovXG4gICAgc3RhYmlsaXplKCBjYiApIHtcbiAgICAgICAgdmFyIG1lID0gdGhpcztcbiAgICAgICAgY2IgJiYgbWUub25jZSgnc3RhYmxlJywgY2IpO1xuICAgICAgICB0aGlzLl9zdGFibGUgJiYgdGhpcy5lbWl0KCd1bnN0YWJsZScsIHRoaXMuc3RhdGUsIHRoaXMuZGF0YXMpO1xuICAgICAgICBcbiAgICAgICAgbWUuX3N0YWJsZSA9IGZhbHNlO1xuICAgICAgICBcbiAgICAgICAgaWYgKCB0aGlzLl9zdGFiaWxpemVyIClcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9zdGFiaWxpemVyKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX3N0YWJpbGl6ZXIgPSBzZXRUaW1lb3V0KFxuICAgICAgICAgICAgdGhpcy5wdXNoLmJpbmQoXG4gICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICgpID0+IHsvL0B0b2RvXG4gICAgICAgICAgICAgICAgICAgIC8vIG1lLl9zdGFibGUgICAgICAgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zdGFiaWxpemVyID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5yZWxlYXNlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKSk7XG4gICAgfVxuICAgIFxuICAgIGRpc3BhdGNoKCBldmVudCApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBQdWxsIHN0b3JlcyBpbiB0aGUgcHJpdmF0ZSBzdGF0ZVxuICAgICAqIEBwYXJhbSBzdG9yZXMgIHtBcnJheX0gKHBhc3NlZCB0byBTdG9yZTo6bWFwKSBFeCA6IFtcInNlc3Npb25cIiwgXCJvdGhlck5hbWVkU3RvcmU6a2V5XCIsIG90aGVyU3RvcmUuYXMoXCJvdGhlcktleVwiKV1cbiAgICAgKi9cbiAgICBwdWxsKCBzdG9yZXMsIGRvV2FpdCwgb3JpZ2luICkge1xuICAgICAgICBsZXQgaW5pdGlhbE91dHB1dHMgPSBTdG9yZS5tYXAodGhpcywgc3RvcmVzLCB0aGlzLmNvbnRleHRPYmosIG9yaWdpbiwgdHJ1ZSk7XG4gICAgICAgIGlmICggZG9XYWl0ICkge1xuICAgICAgICAgICAgdGhpcy53YWl0KCk7XG4gICAgICAgICAgICBzdG9yZXMuZm9yRWFjaCgoIHMgKSA9PiB0aGlzLmNvbnRleHRbc10gJiYgdGhpcy53YWl0KHRoaXMuY29udGV4dFtzXSkpO1xuICAgICAgICAgICAgdGhpcy5yZWxlYXNlKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGluaXRpYWxPdXRwdXRzO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBBcHBseSByZWZpbmUvcmVtYXAgb24gdGhlIHByaXZhdGUgc3RhdGUgJiBwdXNoIHRoZSByZXN1bHRpbmcgXCJwdWJsaWNcIiBzdGF0ZSB0byBmb2xsb3dlcnNcbiAgICAgKiBAcGFyYW0gY2JcbiAgICAgKi9cbiAgICBwdXNoKCBkYXRhcywgZm9yY2UsIGNiICkge1xuICAgICAgICBjYiA9IGZvcmNlID09PSB0cnVlID8gY2IgOiBmb3JjZTtcbiAgICAgICAgZm9yY2UgPSBmb3JjZSA9PT0gdHJ1ZTtcbiAgICAgICAgdmFyIGkgICAgICAgICA9IDAsXG4gICAgICAgICAgICBtZSAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgbmV4dFN0YXRlID0gIWRhdGFzICYmIHsgLi4udGhpcy5zdGF0ZSwgLi4udGhpcy5fY2hhbmdlc1NXIH0gfHwgdGhpcy5zdGF0ZSxcbiAgICAgICAgICAgIG5leHREYXRhcyA9IGRhdGFzIHx8XG4gICAgICAgICAgICAgICAgKHRoaXMuaXNDb21wbGV0ZShuZXh0U3RhdGUpID8gdGhpcy5yZWZpbmUodGhpcy5kYXRhcywgbmV4dFN0YXRlLCB0aGlzLl9jaGFuZ2VzU1cpIDogdGhpcy5kYXRhcyk7XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgdGhpcy5zdGF0ZSA9IG5leHRTdGF0ZTtcbiAgICAgICAgaWYgKCAhZm9yY2UgJiZcbiAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgICAoIXRoaXMuZGF0YXMgJiYgdGhpcy5kYXRhcyA9PT0gbmV4dERhdGFzKSB8fCAhdGhpcy5zaG91bGRQcm9wYWcobmV4dERhdGFzKVxuICAgICAgICAgICAgKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIGNiICYmIGNiKCk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRoaXMuZGF0YXMgPSBuZXh0RGF0YXM7XG4gICAgICAgIHRoaXMuX19sb2Nrcy5hbGwrKztcbiAgICAgICAgdGhpcy5yZWxlYXNlKGNiKTtcbiAgICAgICAgXG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSB0aGUgY3VycmVudCBwcml2YXRlIHN0YXRlICYgcHVzaCBpdCBvbmNlIHRoZSBzdG9yZSBpcyBzdGFibGVcbiAgICAgKiBAcGFyYW0gcFN0YXRlXG4gICAgICogQHBhcmFtIGNiXG4gICAgICovXG4gICAgc2V0U3RhdGUoIHBTdGF0ZSwgY2IsIHN5bmMgKSB7XG4gICAgICAgIHZhciBpICAgICAgID0gMCwgY2hhbmdlLFxuICAgICAgICAgICAgY2hhbmdlcyA9IHRoaXMuX2NoYW5nZXNTVyA9IHRoaXMuX2NoYW5nZXNTVyB8fCB7fTtcbiAgICAgICAgZm9yICggdmFyIGsgaW4gcFN0YXRlIClcbiAgICAgICAgICAgIGlmICggIXRoaXMuc3RhdGUgfHwgcFN0YXRlLmhhc093blByb3BlcnR5KGspXG4gICAgICAgICAgICAgICAgJiYgKFxuICAgICAgICAgICAgICAgICAgICBwU3RhdGVba10gIT0gdGhpcy5zdGF0ZVtrXVxuICAgICAgICAgICAgICAgICAgICB8fFxuICAgICAgICAgICAgICAgICAgICAodGhpcy5zdGF0ZVtrXSAmJiBwU3RhdGVba10gJiYgKHBTdGF0ZVtrXS5fcmV2ICE9IHRoaXMuX3JldnNba10pKS8vIHJldi9oYXNoIHVwZGF0ZVxuICAgICAgICAgICAgICAgICkgKSB7XG4gICAgICAgICAgICAgICAgY2hhbmdlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLl9yZXZzW2tdID0gcFN0YXRlW2tdICYmIHBTdGF0ZVtrXS5fcmV2IHx8IHRydWU7XG4gICAgICAgICAgICAgICAgY2hhbmdlc1trXSA9IHBTdGF0ZVtrXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmICggc3luYyApIHtcbiAgICAgICAgICAgIHRoaXMucHVzaCgpO1xuICAgICAgICAgICAgY2IgJiYgY2IoKTtcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKCBjaGFuZ2UgKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGFiaWxpemUoY2IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBjYiAmJiBjYigpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBVcGRhdGUgdGhlIGN1cnJlbnQgcHJpdmF0ZSBzdGF0ZSAmIHB1c2ggaXQgb25jZSB0aGUgc3RvcmUgaXMgc3RhYmxlXG4gICAgICogQHBhcmFtIHBTdGF0ZVxuICAgICAqIEBwYXJhbSBjYlxuICAgICAqL1xuICAgIHNldFN0YXRlU3luYyggcFN0YXRlICkge1xuICAgICAgICB2YXIgaSAgICAgICA9IDAsIGNoYW5nZSxcbiAgICAgICAgICAgIGNoYW5nZXMgPSB0aGlzLl9jaGFuZ2VzU1cgPSB0aGlzLl9jaGFuZ2VzU1cgfHwge307XG4gICAgICAgIGZvciAoIHZhciBrIGluIHBTdGF0ZSApXG4gICAgICAgICAgICBpZiAoICF0aGlzLnN0YXRlIHx8IHBTdGF0ZS5oYXNPd25Qcm9wZXJ0eShrKVxuICAgICAgICAgICAgICAgICYmIChcbiAgICAgICAgICAgICAgICAgICAgcFN0YXRlW2tdICE9IHRoaXMuc3RhdGVba11cbiAgICAgICAgICAgICAgICAgICAgfHxcbiAgICAgICAgICAgICAgICAgICAgKHRoaXMuc3RhdGVba10gJiYgcFN0YXRlW2tdICYmIChwU3RhdGVba10uX3JldiAhPSB0aGlzLl9yZXZzW2tdKSkvLyByZXYvaGFzaCB1cGRhdGVcbiAgICAgICAgICAgICAgICApICkge1xuICAgICAgICAgICAgICAgIGNoYW5nZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5fcmV2c1trXSA9IHBTdGF0ZVtrXSAmJiBwU3RhdGVba10uX3JldiB8fCB0cnVlO1xuICAgICAgICAgICAgICAgIGNoYW5nZXNba10gPSBwU3RhdGVba107XG4gICAgICAgICAgICB9XG4gICAgICAgIHRoaXMucHVzaCgpO1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhcztcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogUmVwbGFjZSB0aGUgY3VycmVudCBwcml2YXRlIHN0YXRlICYgcHVzaCBpdCBvbmNlIHRoZSBzdG9yZSBpcyBzdGFibGVcbiAgICAgKiBAcGFyYW0gcFN0YXRlXG4gICAgICogQHBhcmFtIGNiXG4gICAgICovXG4gICAgcmVwbGFjZVN0YXRlKCBwU3RhdGUsIGNiICkge1xuICAgICAgICB2YXIgaSA9IDAsIG1lID0gdGhpcztcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHBTdGF0ZTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuc3RhYmlsaXplKGNiKTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogZ2V0IGEgc3RvcmUta2V5IHBhaXIgZm9yIFN0b3JlOjptYXBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgICAqIEByZXR1cm5zIHt7c3RvcmU6IFN0b3JlLCBuYW1lOiAqfX1cbiAgICAgKi9cbiAgICBhcyggbmFtZSApIHtcbiAgICAgICAgcmV0dXJuIHsgc3RvcmU6IHRoaXMsIG5hbWUgfTtcbiAgICB9XG4gICAgXG4gICAgb24oIGxpc3RzICkge1xuICAgICAgICBpZiAoICFpc1N0cmluZyhsaXN0cykgJiYgbGlzdHMgKVxuICAgICAgICAgICAgT2JqZWN0LmtleXMobGlzdHMpLmZvckVhY2goayA9PiBzdXBlci5vbihrLCBsaXN0c1trXSkpO1xuICAgICAgICBlbHNlIHN1cGVyLm9uKC4uLmFyZ3VtZW50cyk7XG4gICAgfVxuICAgIFxuICAgIHJlbW92ZUxpc3RlbmVyKCBsaXN0cyApIHtcbiAgICAgICAgaWYgKCAhaXNTdHJpbmcobGlzdHMpICYmIGxpc3RzIClcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGxpc3RzKS5mb3JFYWNoKGsgPT4gc3VwZXIucmVtb3ZlTGlzdGVuZXIoaywgbGlzdHNba10pKTtcbiAgICAgICAgZWxzZSBzdXBlci5yZW1vdmVMaXN0ZW5lciguLi5hcmd1bWVudHMpO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiByZWxpbmsgYmluZGluZ3MgJiByZXF1aXJlc1xuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gICAgICogQHJldHVybnMge3tzdG9yZTogU3RvcmUsIG5hbWU6ICp9fVxuICAgICAqL1xuICAgIHJlbGluayggZnJvbSApIHtcbiAgICAgICAgbGV0IGNvbnRleHQgPSB0aGlzLmNvbnRleHRPYmosXG4gICAgICAgICAgICBfc3RhdGljID0gdGhpcy5jb25zdHJ1Y3RvcjtcbiAgICAgICAgaWYgKCBfc3RhdGljLnVzZSApIHtcbiAgICAgICAgICAgIC8vdG9kbyB1bmxpbmtcbiAgICAgICAgICAgIHRoaXMucHVsbChfc3RhdGljLnVzZSwgZmFsc2UsIGZyb20pO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAoIHRoaXMuX3JlcXVpcmUgKSB7XG4gICAgICAgICAgICB0aGlzLl9yZXF1aXJlLmZvckVhY2goXG4gICAgICAgICAgICAgICAgc3RvcmUgPT4gKFxuICAgICAgICAgICAgICAgICAgICB0aGlzLndhaXQoY29udGV4dC5fX2NvbnRleHRbc3RvcmVdKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogaXMgY29tcGxldGUgKGFsbCByZXF1aWVyZWQga2V5cyBhcmUgaGVyZSlcbiAgICAgKiBAcmV0dXJucyBib29sXG4gICAgICovXG4gICAgaXNDb21wbGV0ZSggc3RhdGUgPSB0aGlzLnN0YXRlICkge1xuICAgICAgICB2YXIgX3N0YXRpYyA9IHRoaXMuY29uc3RydWN0b3I7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAhdGhpcy5fcmVxdWlyZVxuICAgICAgICAgICAgfHwgIXRoaXMuX3JlcXVpcmUubGVuZ3RoXG4gICAgICAgICAgICB8fCBzdGF0ZSAmJiB0aGlzLl9yZXF1aXJlLnJlZHVjZShcbiAgICAgICAgICAgICAgICAoIHIsIGtleSApID0+IChyICYmIHN0YXRlW2tleV0pLFxuICAgICAgICAgICAgICAgIHRydWVcbiAgICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogaXMgc3RhYmxlXG4gICAgICogQHJldHVybnMgYm9vbFxuICAgICAqL1xuICAgIGlzU3RhYmxlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc3RhYmxlO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBVbiBiaW5kIHRoaXMgc3RvcmUgb2ZmIHRoZSBnaXZlbiBjb21wb25lbnQta2V5XG4gICAgICogQHBhcmFtIG9ialxuICAgICAqIEBwYXJhbSBrZXlcbiAgICAgKiBAcmV0dXJucyB7QXJyYXkuPCo+fVxuICAgICAqL1xuICAgIHVuQmluZCggb2JqLCBrZXkgKSB7XG4gICAgICAgIHZhciBmb2xsb3dlcnMgPSB0aGlzLl9mb2xsb3dlcnMsXG4gICAgICAgICAgICBpICAgICAgICAgPSBmb2xsb3dlcnMgJiYgZm9sbG93ZXJzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBmb2xsb3dlcnMgJiYgaS0tIClcbiAgICAgICAgICAgIGlmICggZm9sbG93ZXJzW2ldWzBdID09IG9iaiAmJiBmb2xsb3dlcnNbaV1bMV0gPT0ga2V5IClcbiAgICAgICAgICAgICAgICByZXR1cm4gZm9sbG93ZXJzLnNwbGljZShpLCAxKTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogQmluZCB0aGlzIHN0b3JlIGNoYW5nZXMgdG8gdGhlIGdpdmVuIGNvbXBvbmVudC1rZXlcbiAgICAgKiBAcGFyYW0gb2JqIHtSZWFjdC5Db21wb25lbnR8U3RvcmV8ZnVuY3Rpb24pXG4gICAgICogQHBhcmFtIGtleSB7c3RyaW5nfSBvcHRpb25hbCBrZXkgd2hlcmUgdG8gbWFwIHRoZSBwdWJsaWMgc3RhdGVcbiAgICAgKi9cbiAgICBiaW5kKCBvYmosIGtleSwgc2V0SW5pdGlhbCA9IHRydWUgKSB7XG4gICAgICAgIHRoaXMuX2ZvbGxvd2Vycy5wdXNoKFtvYmosIGtleV0pO1xuICAgICAgICBpZiAoIHNldEluaXRpYWwgJiYgdGhpcy5kYXRhcyAmJiB0aGlzLl9zdGFibGUgKSB7XG4gICAgICAgICAgICBpZiAoIHR5cGVvZiBvYmogIT0gXCJmdW5jdGlvblwiICkge1xuICAgICAgICAgICAgICAgIGlmICgga2V5ICkgb2JqLnNldFN0YXRlKHsgW2tleV06IHRoaXMuZGF0YXMgfSk7XG4gICAgICAgICAgICAgICAgZWxzZSBvYmouc2V0U3RhdGUodGhpcy5kYXRhcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBvYmoodGhpcy5kYXRhcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogb25jZSgnc3RhYmxlJywgY2IpXG4gICAgICogQHBhcmFtIG9iaiB7UmVhY3QuQ29tcG9uZW50fFN0b3JlfGZ1bmN0aW9uKVxuICAgICAqIEBwYXJhbSBrZXkge3N0cmluZ30gb3B0aW9uYWwga2V5IHdoZXJlIHRvIG1hcCB0aGUgcHVibGljIHN0YXRlXG4gICAgICovXG4gICAgdGhlbiggY2IgKSB7XG4gICAgICAgIGlmICggdGhpcy5fc3RhYmxlIClcbiAgICAgICAgICAgIHJldHVybiBjYihudWxsLCB0aGlzLmRhdGFzKTtcbiAgICAgICAgdGhpcy5vbmNlKCdzdGFibGUnLCBlID0+IGNiKG51bGwsIHRoaXMuZGF0YXMpKTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogQWRkIGEgbG9jayBzbyB0aGUgc3RvcmUgd2lsbCBub3QgcHJvcGFnIGl0IHN0YXRlIHVudGlsbCByZWxlYXNlKCkgaXMgY2FsbFxuICAgICAqIEBwYXJhbSBwcmV2aW91cyB7U3RvcmV8bnVtYmVyfEFycmF5fSBAb3B0aW9uYWwgd2YgdG8gd2FpdCwgcmVsZWFzZXMgdG8gd2FpdCBvciBhcnJheSBvZiBzdHVmZiB0byB3YWl0XG4gICAgICogQHJldHVybnMge1Rhc2tGbG93fVxuICAgICAqL1xuICAgIHdhaXQoIHByZXZpb3VzICkge1xuICAgICAgICBpZiAoIHR5cGVvZiBwcmV2aW91cyA9PSBcIm51bWJlclwiIClcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9fbG9ja3MuYWxsICs9IHByZXZpb3VzO1xuICAgICAgICBpZiAoIGlzQXJyYXkocHJldmlvdXMpIClcbiAgICAgICAgICAgIHJldHVybiBwcmV2aW91cy5tYXAodGhpcy53YWl0LmJpbmQodGhpcykpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fc3RhYmxlICYmIHRoaXMuZW1pdCgndW5zdGFibGUnLCB0aGlzLnN0YXRlLCB0aGlzLmRhdGFzKTtcbiAgICAgICAgdGhpcy5fc3RhYmxlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX19sb2Nrcy5hbGwrKztcbiAgICAgICAgXG4gICAgICAgIGxldCByZWFzb24gPSBpc1N0cmluZyhwcmV2aW91cykgPyBwcmV2aW91cyA6IG51bGw7XG4gICAgICAgIGlmICggcmVhc29uICkge1xuICAgICAgICAgICAgdGhpcy5fX2xvY2tzW3JlYXNvbl0gPSB0aGlzLl9fbG9ja3NbcmVhc29uXSB8fCAwO1xuICAgICAgICAgICAgdGhpcy5fX2xvY2tzW3JlYXNvbl0rKztcbiAgICAgICAgfVxuICAgICAgICBpZiAoIHByZXZpb3VzICYmIGlzRnVuY3Rpb24ocHJldmlvdXMudGhlbikgKSB7XG4gICAgICAgICAgICBwcmV2aW91cy50aGVuKHRoaXMucmVsZWFzZS5iaW5kKHRoaXMsIG51bGwpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogRGVjcmVhc2UgbG9ja3MgZm9yIHRoaXMgc3RvcmUsIGlmIGl0IHJlYWNoIDAgJiBpdCBoYXZlIGEgcHVibGljIHN0YXRlLFxuICAgICAqIGl0IHdpbGwgYmUgcHJvcGFnYXRlZCB0byB0aGUgZm9sbG93ZXJzLFxuICAgICAqIHRoZW4sIGFsbCBzdHVmZiBwYXNzZWQgdG8gXCJ0aGVuXCIgY2FsbCBiYWNrIHdpbGwgYmUgZXhlYyAvIHJlbGVhc2VkXG4gICAgICogQHBhcmFtIGRlc3luY1xuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqL1xuICAgIHJlbGVhc2UoIHJlYXNvbiwgY2IgKSB7XG4gICAgICAgIHZhciBfc3RhdGljID0gdGhpcy5jb25zdHJ1Y3RvcjtcbiAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICBcbiAgICAgICAgaWYgKCBpc0Z1bmN0aW9uKHJlYXNvbikgKSB7XG4gICAgICAgICAgICBjYiA9IHJlYXNvbjtcbiAgICAgICAgICAgIHJlYXNvbiA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmICggcmVhc29uICkge1xuICAgICAgICAgICAgaWYgKCB0aGlzLl9fbG9ja3NbcmVhc29uXSA9PSAwIClcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiUmVsZWFzZSBtb3JlIHRoYW4gbG9ja2luZyAhXCIsIHJlYXNvbik7XG4gICAgICAgICAgICB0aGlzLl9fbG9ja3NbcmVhc29uXSA9IHRoaXMuX19sb2Nrc1tyZWFzb25dIHx8IDA7XG4gICAgICAgICAgICB0aGlzLl9fbG9ja3NbcmVhc29uXS0tO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAoICFyZWFzb24gJiYgdGhpcy5fX2xvY2tzLmFsbCA9PSAwIClcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJSZWxlYXNlIG1vcmUgdGhhbiBsb2NraW5nICFcIik7XG4gICAgICAgIFxuICAgICAgICBpZiAoICEtLXRoaXMuX19sb2Nrcy5hbGwgJiYgdGhpcy5kYXRhcyAmJiB0aGlzLmlzQ29tcGxldGUoKSApIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YWJsZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLl9yZXYgPSAxICsgKHRoaXMuX3JldiArIDEpICUgMTAwMDAwMDsvL1xuICAgICAgICAgICAgaWYgKCB0aGlzLl9mb2xsb3dlcnMubGVuZ3RoIClcbiAgICAgICAgICAgICAgICB0aGlzLl9mb2xsb3dlcnMuZm9yRWFjaCgoIGZvbGxvd2VyICkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoICF0aGlzLmRhdGFzICkgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIHR5cGVvZiBmb2xsb3dlclswXSA9PSBcImZ1bmN0aW9uXCIgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb2xsb3dlclswXSh0aGlzLmRhdGFzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNiICYmIGkrKztcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbGxvd2VyWzBdLnNldFN0YXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChmb2xsb3dlclsxXSkgPyB7IFtmb2xsb3dlclsxXV06IHRoaXMuZGF0YXMgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHRoaXMuZGF0YXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2IgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAoKSA9PiAoISgtLWkpICYmIGNiKCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gKVxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLmVtaXQoJ3N0YWJsZScsIHRoaXMuZGF0YXMpO1xuICAgICAgICAgICAgdGhpcy5lbWl0KCd1cGRhdGUnLCB0aGlzLmRhdGFzKTtcbiAgICAgICAgICAgIGNiICYmIGNiKClcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGNiICYmIHRoaXMudGhlbihjYik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBcbiAgICByZXRhaW4oIHJlYXNvbiApIHtcbiAgICAgICAgdGhpcy5fX3JldGFpbnMuYWxsKys7XG4gICAgICAgIGlmICggcmVhc29uICkge1xuICAgICAgICAgICAgdGhpcy5fX3JldGFpbnNbcmVhc29uXSA9IHRoaXMuX19yZXRhaW5zW3JlYXNvbl0gfHwgMDtcbiAgICAgICAgICAgIHRoaXMuX19yZXRhaW5zW3JlYXNvbl0rKztcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBkaXNwb3NlKCByZWFzb24gKSB7XG4gICAgICAgIGlmICggcmVhc29uICkge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoIHRoaXMuX19yZXRhaW5zW3JlYXNvbl0gPT0gMCApXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRGlzcG9zZSBtb3JlIHRoYW4gcmV0YWluaW5nICFcIik7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMuX19yZXRhaW5zW3JlYXNvbl0gPSB0aGlzLl9fcmV0YWluc1tyZWFzb25dIHx8IDA7XG4gICAgICAgICAgICB0aGlzLl9fcmV0YWluc1tyZWFzb25dLS07XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmICggdGhpcy5fX3JldGFpbnMuYWxsID09IDAgKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRGlzcG9zZSBtb3JlIHRoYW4gcmV0YWluaW5nICFcIik7XG4gICAgICAgIFxuICAgICAgICBpZiAoICF0aGlzLl9fcmV0YWlucy5hbGwgKSB7XG4gICAgICAgICAgICBpZiAoIHRoaXMuX3BlcnNpc3RlbmNlVG0gKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZGVzdHJveVRNICYmIGNsZWFyVGltZW91dCh0aGlzLl9kZXN0cm95VE0pO1xuICAgICAgICAgICAgICAgIHRoaXMuX2Rlc3Ryb3lUTSA9IHNldFRpbWVvdXQoXG4gICAgICAgICAgICAgICAgICAgIGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50aGVuKHMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICBjb25zb2xlLmxvZyhcInd0ZiAgIFwiLCByZWFzb24sICF0aGlzLl9fcmV0YWlucy5hbGwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICF0aGlzLl9fcmV0YWlucy5hbGwgJiYgdGhpcy5kZXN0cm95KClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wZXJzaXN0ZW5jZVRtXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMudGhlbihzID0+ICghdGhpcy5fX3JldGFpbnMuYWxsICYmIHRoaXMuZGVzdHJveSgpKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgLy8gIGNvbnNvbGUubG9nKFwiZGVzdHJveVwiLCB0aGlzLl91aWQpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5lbWl0KCdkZXN0cm95JywgdGhpcyk7XG4gICAgICAgIGlmICggdGhpcy5fc3RhYmlsaXplciApXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5fc3RhYmlsaXplcik7XG4gICAgICAgIFxuICAgICAgICBpZiAoIHRoaXMuX2ZvbGxvd2Vycy5sZW5ndGggKVxuICAgICAgICAgICAgdGhpcy5fZm9sbG93ZXJzLmZvckVhY2goXG4gICAgICAgICAgICAgICAgKCBmb2xsb3dlciApID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCB0eXBlb2YgZm9sbG93ZXJbMF0gIT09IFwiZnVuY3Rpb25cIiApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICggZm9sbG93ZXJbMF0uc3RvcmVzIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgZm9sbG93ZXJbMF0uc3RvcmVzW2ZvbGxvd2VyWzFdXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgIHRoaXMuX2ZvbGxvd2Vycy5sZW5ndGggPSAwO1xuICAgICAgICB0aGlzLmRlYWQgPSB0cnVlO1xuICAgICAgICB0aGlzLl9yZXZzID0gdGhpcy5kYXRhcyA9IHRoaXMuc3RhdGUgPSB0aGlzLmNvbnRleHQgPSBudWxsO1xuICAgICAgICB0aGlzLnJlbW92ZUFsbExpc3RlbmVycygpO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvU3RvcmUuanMiXSwic291cmNlUm9vdCI6IiJ9