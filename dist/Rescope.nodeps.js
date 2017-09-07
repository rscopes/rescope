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
	
	        _this.__retainLocks = { all: 0 };
	        _this.__w8Locks = { all: 1 };
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
	        _this.__w8Locks.all--;
	        _this._stable = !_this.__w8Locks.all;
	
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
	            this._stable && !this.__w8Locks.all && this.emit("unstable", this);
	            this._stable = false;
	            this.__w8Locks.all++;
	            if (reason) {
	                this.__w8Locks[reason] = this.__w8Locks[reason] || 0;
	                this.__w8Locks[reason]++;
	            }
	        }
	    }, {
	        key: 'release',
	        value: function release(reason) {
	            var _this15 = this;
	
	            //console.log("release", reason);
	
	
	            if (reason) {
	                if (this.__w8Locks[reason] == 0) console.error("Release more than locking !", reason);
	                this.__w8Locks[reason] = this.__w8Locks[reason] || 0;
	                this.__w8Locks[reason]--;
	            }
	            if (this.__w8Locks.all == 0) console.error("Release more than locking !");
	            this.__w8Locks.all--;
	            if (!this.__w8Locks.all) {
	                this._stabilizerTM && clearTimeout(this._stabilizerTM);
	                this._propagTM && clearTimeout(this._propagTM);
	
	                this._stabilizerTM = setTimeout(function (e) {
	                    if (!_this15.__w8Locks.all) return _this15._stabilizerTM = null;
	
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
	            this.__retainLocks.all++;
	            //console.log("retain", this._id, reason);
	
	            if (reason) {
	                this.__retainLocks[reason] = this.__retainLocks[reason] || 0;
	                this.__retainLocks[reason]++;
	            }
	        }
	    }, {
	        key: 'dispose',
	        value: function dispose(reason) {
	            var _this18 = this;
	
	            if (reason) {
	
	                if (this.__retainLocks[reason] == 0) throw new Error("Dispose more than retaining !");
	
	                this.__retainLocks[reason] = this.__retainLocks[reason] || 0;
	                this.__retainLocks[reason]--;
	            }
	
	            if (this.__retainLocks.all == 0) throw new Error("Dispose more than retaining !");
	
	            this.__retainLocks.all--;
	
	            if (!this.__retainLocks.all) {
	                if (this._persistenceTm) {
	                    this._destroyTM && clearTimeout(this._destroyTM);
	                    this._destroyTM = setTimeout(function (e) {
	                        // console.log("wtf ctx", this._id, reason, this.__w8Locks, this._stable);
	                        _this18.then(function (s) {
	                            //   console.log("wtf ctx then", this._id, reason, this.__w8Locks);
	                            !_this18.__retainLocks.all && _this18.destroy();
	                        });
	                    }, this._persistenceTm);
	                } else {
	                    this.then(function (s) {
	                        return !_this18.__retainLocks.all && _this18.destroy();
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
	        _this.locks = 0;
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
	
	        _this._use = watchs;
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
	        _this.__retainLocks = { all: 0 };
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
	            this.locks++;
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
	            if (typeof previous == "number") return this.locks += previous;
	            if (isArray(previous)) return previous.map(this.wait.bind(this));
	
	            this._stable && this.emit('unstable', this.state, this.datas);
	            this._stable = false;
	            this.locks++;
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
	        value: function release(cb) {
	            var _this8 = this;
	
	            var _static = this.constructor;
	            var i = 0;
	
	            if (this.locks == 0) console.error("Release more than locking !");
	
	            if (! --this.locks && this.datas && this.isComplete()) {
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
	            //    console.log("retain", this._uid, reason);
	            this.__retainLocks.all++;
	            if (reason) {
	                this.__retainLocks[reason] = this.__retainLocks[reason] || 0;
	                this.__retainLocks[reason]++;
	            }
	        }
	    }, {
	        key: 'dispose',
	        value: function dispose(reason) {
	            var _this9 = this;
	
	            if (reason) {
	
	                if (this.__retainLocks[reason] == 0) throw new Error("Dispose more than retaining !");
	
	                this.__retainLocks[reason] = this.__retainLocks[reason] || 0;
	                this.__retainLocks[reason]--;
	            }
	
	            if (this.__retainLocks.all == 0) throw new Error("Dispose more than retaining !");
	
	            if (!this.__retainLocks.all) {
	                if (this._persistenceTm) {
	                    this._destroyTM && clearTimeout(this._destroyTM);
	                    this._destroyTM = setTimeout(function (e) {
	                        _this9.then(function (s) {
	                            //  console.log("wtf   ", reason, !this.__retainLocks.all);
	
	                            !_this9.__retainLocks.all && _this9.destroy();
	                        });
	                    }, this._persistenceTm);
	                } else {
	                    this.then(function (s) {
	                        return !_this9.__retainLocks.all && _this9.destroy();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMDlkNTAxNDI2Zjc5NDQ3NTU3NTAiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Jlc2NvcGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbnRleHQuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaXNzdHJpbmdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpc2FycmF5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXZlbnRzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaXNmdW5jdGlvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInNob3J0aWRcIiIsIndlYnBhY2s6Ly8vLi9zcmMvU3RvcmUuanMiXSwibmFtZXMiOlsiU3RvcmUiLCJDb250ZXh0IiwiaXNTdHJpbmciLCJyZXF1aXJlIiwiaXNBcnJheSIsIkV2ZW50RW1pdHRlciIsImlzRnVuY3Rpb24iLCJzaG9ydGlkIiwiX19wcm90b19fcHVzaCIsInRhcmdldCIsImlkIiwicGFyZW50IiwiaGVyZSIsInByb3RvdHlwZSIsIm9wZW5Db250ZXh0cyIsImN0eCIsInN0YXRlIiwiZGF0YXMiLCJuYW1lIiwiZGVmYXVsdE1heExpc3RlbmVycyIsInBlcnNpc3RlbmNlVG0iLCJhdXRvRGVzdHJveSIsIl9tYXhMaXN0ZW5lcnMiLCJjb25zdHJ1Y3RvciIsIl9pZCIsImdlbmVyYXRlIiwiX2lzTG9jYWxJZCIsIl9wZXJzaXN0ZW5jZVRtIiwic3RvcmVzIiwiX2FkZENoaWxkIiwic291cmNlcyIsIl9jaGlsZENvbnRleHRzIiwiX19yZXRhaW5Mb2NrcyIsImFsbCIsIl9fdzhMb2NrcyIsIl9fbGlzdGVuaW5nIiwiX19jb250ZXh0IiwiX19taXhlZCIsIl9fbWl4ZWRMaXN0IiwiX2ZvbGxvd2VycyIsInJldGFpbiIsIl9zdGFibGUiLCJ3YWl0Iiwib24iLCJfX3BhcmVudExpc3QiLCJyZWxlYXNlIiwiX3Byb3BhZyIsInJlZ2lzdGVyIiwic2V0VGltZW91dCIsImRpc3Bvc2UiLCJmb3JFYWNoIiwiX21vdW50IiwiayIsImFyZ3VtZW50cyIsInJlZHVjZSIsIm1vdW50ZWQiLCJtb3VudFN0b3JlIiwiX3dhdGNoU3RvcmUiLCJpc1N0YWJsZSIsInByb3BhZyIsInRhcmdldEN0eCIsImxpc3RzIiwicHVzaCIsInJlbGluayIsInJhd0N0eCIsIk9iamVjdCIsImtleXMiLCJzaW5nbGV0b24iLCJzcmNDdHgiLCJleHRlcm5hbCIsImxjdHgiLCJfc3RvcmVzIiwiY29uc29sZSIsIndhcm4iLCJkZWZpbmVQcm9wZXJ0eSIsImdldCIsIl9zdGF0ZSIsInNldCIsInYiLCJfZGF0YXMiLCJ1bmRlZmluZWQiLCJvYmoiLCJrZXkiLCJhcyIsInNldEluaXRpYWwiLCJsYXN0UmV2cyIsInJldnMiLCJtb3VudCIsImdldFVwZGF0ZXMiLCJzZXRTdGF0ZSIsImZvbGxvd2VycyIsImkiLCJsZW5ndGgiLCJzcGxpY2UiLCJ0byIsImJpbmQiLCJfcmV2IiwiaGFzT3duUHJvcGVydHkiLCJ1cGRhdGVkIiwiZ2V0U3RvcmVzUmV2cyIsIm91dHB1dCIsImZsYWdzX3N0YXRlcyIsImZsYWdzX2RhdGFzIiwiX2ZsYWdzX3N0YXRlcyIsIl9mbGFnc19kYXRhcyIsImZsYWdzIiwiciIsImZsYWciLCJ0ZXN0IiwiY2IiLCJvbmNlIiwicXVpZXQiLCJyZWFzb24iLCJlbWl0IiwiZXJyb3IiLCJfc3RhYmlsaXplclRNIiwiY2xlYXJUaW1lb3V0IiwiX3Byb3BhZ1RNIiwiY2hpbGRzIiwiX2dldEFsbENoaWxkcyIsImluZGV4T2YiLCJFcnJvciIsIl9kZXN0cm95VE0iLCJ0aGVuIiwiZGVzdHJveSIsInJlbW92ZUxpc3RlbmVyIiwiY29udGV4dE9iaiIsInNoaWZ0IiwiX3JtQ2hpbGQiLCJjb250ZXh0cyIsIm9ialByb3RvIiwiZ2V0UHJvdG90eXBlT2YiLCJhcmd6IiwiX3N0YXRpYyIsImNvbnRleHQiLCJzdGF0aWNDb250ZXh0IiwiY2ZnIiwid2F0Y2hzIiwidXNlIiwicmVmaW5lIiwiaW5pdGlhbFN0YXRlIiwiX3VpZCIsImxvY2tzIiwiX29uU3RhYmlsaXplIiwiX3VzZSIsIl9yZXZzIiwiX3JlcXVpcmUiLCJwdWxsIiwiaXNDb21wbGV0ZSIsIm5EYXRhcyIsImNEYXRhcyIsImZvbGxvdyIsImNoYW5nZXMiLCJfX3Byb3RvX18iLCJtZSIsIl9zdGFiaWxpemVyIiwiZXZlbnQiLCJkb1dhaXQiLCJvcmlnaW4iLCJpbml0aWFsT3V0cHV0cyIsIm1hcCIsInMiLCJmb3JjZSIsIm5leHRTdGF0ZSIsIl9jaGFuZ2VzU1ciLCJuZXh0RGF0YXMiLCJzaG91bGRQcm9wYWciLCJwU3RhdGUiLCJzeW5jIiwiY2hhbmdlIiwic3RhYmlsaXplIiwic3RvcmUiLCJmcm9tIiwicHJldmlvdXMiLCJmb2xsb3dlciIsImRlYWQiLCJyZW1vdmVBbGxMaXN0ZW5lcnMiLCJjb21wb25lbnQiLCJ0YXJnZXRSZXZzIiwidGFyZ2V0Q29udGV4dCIsImZpbHRlciIsImFsaWFzIiwiZGVmYXVsdE5hbWUiLCJtYXRjaCIsIm1peGVkQ1dVbm1vdW50IiwidW5Nb3VudEtleSIsImlzUmVhY3RDb21wb25lbnQiLCJzcGxpdCIsInVuQmluZCIsImFwcGx5Iiwic2tleSIsInNvcnQiLCJhIiwiYiIsImZpcnN0bmFtZSIsImpvaW4iLCJjb250ZXh0TWFwIiwiZ2V0Q29udGV4dCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDNUJBOzs7O0FBQ0E7Ozs7OztBQVhBOzs7Ozs7Ozs7O0FBYUEsbUJBQVFBLEtBQVI7O21CQUVlLEVBQUNBLHNCQUFELEVBQVFDLDBCQUFSLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZmOzs7Ozs7Ozs7Ozs7O0FB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RixVQUFVZ0UsU0FBVixJQUF1Qi9ELFVBQVUrRCxTQUF0QyxFQUNJMkYsTUFBTWxGLFFBQU4sQ0FBZXpFLEtBQWYsRUFESixLQUVLLElBQUtBLFVBQVVnRSxTQUFmLEVBQ0QyRixNQUFNM0osS0FBTixHQUFjQSxLQUFkOztBQUVKLHFCQUFLQyxVQUFVK0QsU0FBZixFQUNJMkYsTUFBTTdHLElBQU4sQ0FBVzdDLEtBQVg7QUFDUDtBQUNELG9CQUFPMEosS0FBUDtBQUNIOzs7O0dBeFE4QnRLLFk7O0FBQWRMLE0sQ0FFVjBJLEcsR0FBTSxFO0FBRkkxSSxNLENBS1Z1SSxhLEdBQWdCLElBQUl0SSxPQUFKLENBQVksRUFBWixFQUFnQixFQUFFUyxJQUFJLFFBQU4sRUFBaEIsQztBQUxOVixNLENBTVY0SSxZLEdBQWU1RCxTO0FBTkxoRixNLENBV1ZtQixtQixHQUFzQixHO0FBWFpuQixNLENBbUJWb0IsYSxHQUFnQixLO21CQW5CTnBCLEsiLCJmaWxlIjoiZGlzdC9SZXNjb3BlLm5vZGVwcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAwOWQ1MDE0MjZmNzk0NDc1NTc1MCIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpICAyMDE3IENhaXBpIExhYnMgLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4gKi9cblxuaW1wb3J0IENvbnRleHQgZnJvbSBcIi4vQ29udGV4dFwiO1xuaW1wb3J0IFN0b3JlIGZyb20gXCIuL1N0b3JlXCI7XG5cbkNvbnRleHQuU3RvcmUgPSBTdG9yZTtcblxuZXhwb3J0IGRlZmF1bHQge1N0b3JlLCBDb250ZXh0fTtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1Jlc2NvcGUuanMiLCIvKlxuICogQ29weXJpZ2h0IChjKSAgMjAxNyBDYWlwaSBMYWJzIC5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuICpcbiAqIEBhdXRob3IgOiBOYXRoYW5hZWwgQnJhdW5cbiAqIEBjb250YWN0IDogY2FpcGlsYWJzQGdtYWlsLmNvbVxuICovXG5cbi8qKlxuICogQGF1dGhvciBOYXRoYW5hZWwgQlJBVU5cbiAqXG4gKiBEYXRlOiAxMy8wOC8yMDE3XG4gKiBUaW1lOiAxNzoxNVxuICovXG5cblxudmFyIGlzU3RyaW5nICAgICAgICA9IHJlcXVpcmUoJ2lzc3RyaW5nJyksXG4gICAgaXNBcnJheSAgICAgICAgID0gcmVxdWlyZSgnaXNhcnJheScpLFxuICAgIEV2ZW50RW1pdHRlciAgICA9IHJlcXVpcmUoJ2V2ZW50cycpLFxuICAgIGlzRnVuY3Rpb24gICAgICA9IHJlcXVpcmUoJ2lzZnVuY3Rpb24nKVxuICAgICwgc2hvcnRpZCAgICAgICA9IHJlcXVpcmUoJ3Nob3J0aWQnKVxuICAgICwgX19wcm90b19fcHVzaCA9ICggdGFyZ2V0LCBpZCwgcGFyZW50ICkgPT4ge1xuICAgIGxldCBoZXJlID0ge1xuICAgICAgICBbaWRdOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGhlcmVbaWRdLnByb3RvdHlwZSA9IHBhcmVudCA/IG5ldyBwYXJlbnRbXCJfXCIgKyBpZF0oKSA6IHRhcmdldFtpZF0gfHwge307XG4gICAgdGFyZ2V0W2lkXSA9IG5ldyBoZXJlW2lkXSgpO1xuICAgIHRhcmdldFsnXycgKyBpZF0gPSBoZXJlW2lkXTtcbn07XG5cbmxldCBvcGVuQ29udGV4dHMgPSB7fTtcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250ZXh0IGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgICBzdGF0aWMgY29udGV4dHMgPSBvcGVuQ29udGV4dHM7XG4gICAgc3RhdGljIFN0b3JlID0gbnVsbDtcbiAgICBzdGF0aWMgZGVmYXVsdE1heExpc3RlbmVycyA9IDEwMDtcbiAgICBzdGF0aWMgcGVyc2lzdGVuY2VUbSA9IDA7XG4gICAgXG4gICAgY29uc3RydWN0b3IoIGN0eCwgeyBpZCwgcGFyZW50LCBzdGF0ZSwgZGF0YXMsIG5hbWUsIGRlZmF1bHRNYXhMaXN0ZW5lcnMsIHBlcnNpc3RlbmNlVG0sIGF1dG9EZXN0cm95IH0gPSB7fSApIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX21heExpc3RlbmVycyA9IGRlZmF1bHRNYXhMaXN0ZW5lcnMgfHwgdGhpcy5jb25zdHJ1Y3Rvci5kZWZhdWx0TWF4TGlzdGVuZXJzO1xuICAgICAgICB0aGlzLl9pZCA9IGlkID0gaWQgfHwgKFwiX19fX19cIiArIHNob3J0aWQuZ2VuZXJhdGUoKSk7XG4gICAgICAgIFxuICAgICAgICBpZiAoIG9wZW5Db250ZXh0c1tpZF0gKSB7XG4gICAgICAgICAgICAvLyBvcGVuQ29udGV4dHNbaWRdLnJlZ2lzdGVyKGN0eCk7XG4gICAgICAgICAgICByZXR1cm4gb3BlbkNvbnRleHRzW2lkXVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBvcGVuQ29udGV4dHNbaWRdID0gdGhpcztcbiAgICAgICAgdGhpcy5faXNMb2NhbElkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fcGVyc2lzdGVuY2VUbSA9IHBlcnNpc3RlbmNlVG0gfHwgdGhpcy5jb25zdHJ1Y3Rvci5wZXJzaXN0ZW5jZVRtO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5zdG9yZXMgPSB7fTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHt9O1xuICAgICAgICB0aGlzLmRhdGFzID0ge307XG4gICAgICAgIF9fcHJvdG9fX3B1c2godGhpcywgJ3N0b3JlcycsIHBhcmVudCk7XG4gICAgICAgIF9fcHJvdG9fX3B1c2godGhpcywgJ3N0YXRlJywgcGFyZW50KTtcbiAgICAgICAgX19wcm90b19fcHVzaCh0aGlzLCAnZGF0YXMnLCBwYXJlbnQpO1xuICAgICAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgXG4gICAgICAgIGlmICggcGFyZW50ICkge1xuICAgICAgICAgICAgcGFyZW50Ll9hZGRDaGlsZCh0aGlzKTtcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0aGlzLnNvdXJjZXMgPSBbXTtcbiAgICAgICAgdGhpcy5fY2hpbGRDb250ZXh0cyA9IFtdO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fX3JldGFpbkxvY2tzID0geyBhbGw6IDAgfTtcbiAgICAgICAgdGhpcy5fX3c4TG9ja3MgPSB7IGFsbDogMSB9O1xuICAgICAgICB0aGlzLl9fbGlzdGVuaW5nID0ge307XG4gICAgICAgIHRoaXMuX19jb250ZXh0ID0ge307XG4gICAgICAgIHRoaXMuX19taXhlZCA9IFtdO1xuICAgICAgICB0aGlzLl9fbWl4ZWRMaXN0ID0gW107XG4gICAgICAgIHRoaXMuX2ZvbGxvd2VycyA9IFtdO1xuICAgICAgICBpZiAoIHBhcmVudCApIHtcbiAgICAgICAgICAgIHBhcmVudC5yZXRhaW4oXCJpc015UGFyZW50XCIpO1xuICAgICAgICAgICAgIXBhcmVudC5fc3RhYmxlICYmIHRoaXMud2FpdChcImlzTXlQYXJlbnRcIik7XG4gICAgICAgICAgICBwYXJlbnQub24odGhpcy5fX3BhcmVudExpc3QgPSB7XG4gICAgICAgICAgICAgICAgJ3N0YWJsZScgIDogcyA9PiB0aGlzLnJlbGVhc2UoXCJpc015UGFyZW50XCIpLFxuICAgICAgICAgICAgICAgICd1bnN0YWJsZSc6IHMgPT4gdGhpcy53YWl0KFwiaXNNeVBhcmVudFwiKSxcbiAgICAgICAgICAgICAgICAndXBkYXRlJyAgOiBzID0+IHRoaXMuX3Byb3BhZygpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIHRoaXMucmVnaXN0ZXIocGFyZW50Ll9fY29udGV4dCwgc3RhdGUsIGRhdGFzKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIHRoaXMucmVnaXN0ZXIoY3R4LCBzdGF0ZSwgZGF0YXMpO1xuICAgICAgICB0aGlzLl9fdzhMb2Nrcy5hbGwtLTtcbiAgICAgICAgdGhpcy5fc3RhYmxlID0gIXRoaXMuX193OExvY2tzLmFsbDtcbiAgICAgICAgXG4gICAgICAgIGlmICggYXV0b0Rlc3Ryb3kgKVxuICAgICAgICAgICAgc2V0VGltZW91dChcbiAgICAgICAgICAgICAgICB0bSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmV0YWluKFwiYXV0b0Rlc3Ryb3lcIik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzcG9zZShcImF1dG9EZXN0cm95XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIClcbiAgICB9XG4gICAgXG4gICAgc3RhdGljIGdldENvbnRleHQoIGtleSApIHtcbiAgICAgICAgcmV0dXJuIG9wZW5Db250ZXh0c1trZXldID0gb3BlbkNvbnRleHRzW2tleV0gfHwgbmV3IENvbnRleHQoe30pO1xuICAgIH07XG4gICAgXG4gICAgbW91bnQoIGlkLCBzdGF0ZSwgZGF0YXMgKSB7XG4gICAgICAgIGlmICggaXNBcnJheShpZCkgKSB7XG4gICAgICAgICAgICBpZC5mb3JFYWNoKGsgPT4gdGhpcy5fbW91bnQoaywgc3RhdGUgJiYgc3RhdGVba10sIGRhdGFzICYmIGRhdGFzW2tdKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9tb3VudCguLi5hcmd1bWVudHMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBcbiAgICBfbW91bnQoIGlkLCBzdGF0ZSwgZGF0YXMgKSB7XG4gICAgICAgIGlmICggIXRoaXMuX19jb250ZXh0W2lkXSApIHsvL2FzayBtaXhlZCB8fCBwYXJlbnRcbiAgICAgICAgICAgIGlmICggdGhpcy5fX21peGVkLnJlZHVjZSgoIG1vdW50ZWQsIGN0eCApID0+IChtb3VudGVkIHx8IGN0eC5fbW91bnQoaWQsIHN0YXRlLCBkYXRhcykpLCBmYWxzZSkgfHxcbiAgICAgICAgICAgICAgICAhdGhpcy5wYXJlbnQgKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcmVudC5fbW91bnQoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbnN0cnVjdG9yLlN0b3JlLm1vdW50U3RvcmUoaWQsIHRoaXMsIG51bGwsIHN0YXRlLCBkYXRhcyk7XG4gICAgICAgIHRoaXMuX3dhdGNoU3RvcmUoaWQpO1xuICAgICAgICByZXR1cm4gdGhpcy5fX2NvbnRleHRbaWRdO1xuICAgIH1cbiAgICBcbiAgICBfd2F0Y2hTdG9yZSggaWQsIHN0YXRlLCBkYXRhcyApIHtcbiAgICAgICAgaWYgKCAhdGhpcy5fX2NvbnRleHRbaWRdICkgey8vYXNrIG1peGVkIHx8IHBhcmVudFxuICAgICAgICAgICAgaWYgKCB0aGlzLl9fbWl4ZWQucmVkdWNlKCggbW91bnRlZCwgY3R4ICkgPT4gKG1vdW50ZWQgfHwgY3R4Ll93YXRjaFN0b3JlKGlkLCBzdGF0ZSwgZGF0YXMpKSwgZmFsc2UpIHx8XG4gICAgICAgICAgICAgICAgIXRoaXMucGFyZW50IClcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJlbnQuX3dhdGNoU3RvcmUoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoICF0aGlzLl9fbGlzdGVuaW5nW2lkXSAmJiAhaXNGdW5jdGlvbih0aGlzLl9fY29udGV4dFtpZF0pICkge1xuICAgICAgICAgICAgIXRoaXMuX19jb250ZXh0W2lkXS5pc1N0YWJsZSgpICYmIHRoaXMud2FpdChpZCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMuX19jb250ZXh0W2lkXS5vbihcbiAgICAgICAgICAgICAgICB0aGlzLl9fbGlzdGVuaW5nW2lkXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgJ3VwZGF0ZScgIDogcyA9PiB0aGlzLnByb3BhZygpLFxuICAgICAgICAgICAgICAgICAgICAnc3RhYmxlJyAgOiBzID0+IHRoaXMucmVsZWFzZShpZCksXG4gICAgICAgICAgICAgICAgICAgICd1bnN0YWJsZSc6IHMgPT4gdGhpcy53YWl0KGlkKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBcbiAgICBtaXhpbiggdGFyZ2V0Q3R4ICkge1xuICAgICAgICBsZXQgcGFyZW50ID0gdGhpcy5wYXJlbnQsIGxpc3RzO1xuICAgICAgICB0aGlzLl9fbWl4ZWQucHVzaCh0YXJnZXRDdHgpXG4gICAgICAgIHRhcmdldEN0eC5yZXRhaW4oKTtcbiAgICAgICAgaWYgKCAhdGFyZ2V0Q3R4Ll9zdGFibGUgKVxuICAgICAgICAgICAgdGhpcy53YWl0KHRhcmdldEN0eC5faWQpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fX21peGVkTGlzdC5wdXNoKGxpc3RzID0ge1xuICAgICAgICAgICAgJ3N0YWJsZScgIDogcyA9PiB0aGlzLnJlbGVhc2UodGFyZ2V0Q3R4Ll9pZCksXG4gICAgICAgICAgICAndW5zdGFibGUnOiBzID0+IHRoaXMud2FpdCh0YXJnZXRDdHguX2lkKSxcbiAgICAgICAgICAgICd1cGRhdGUnICA6IHMgPT4gdGhpcy5fcHJvcGFnKClcbiAgICAgICAgfSlcbiAgICAgICAgdGFyZ2V0Q3R4Lm9uKGxpc3RzKTtcbiAgICAgICAgX19wcm90b19fcHVzaCh0aGlzLCAnc3RvcmVzJywgcGFyZW50KTtcbiAgICAgICAgX19wcm90b19fcHVzaCh0aGlzLCAnc3RhdGUnLCBwYXJlbnQpO1xuICAgICAgICBfX3Byb3RvX19wdXNoKHRoaXMsICdkYXRhcycsIHBhcmVudCk7XG4gICAgICAgIHRhcmdldEN0eC5yZWxpbmsodGFyZ2V0Q3R4Ll9fY29udGV4dCwgdGhpcywgdHJ1ZSk7XG4gICAgICAgIFxuICAgICAgICBfX3Byb3RvX19wdXNoKHRoaXMsICdzdG9yZXMnLCB0aGlzKTtcbiAgICAgICAgX19wcm90b19fcHVzaCh0aGlzLCAnc3RhdGUnLCB0aGlzKTtcbiAgICAgICAgX19wcm90b19fcHVzaCh0aGlzLCAnZGF0YXMnLCB0aGlzKTtcbiAgICAgICAgdGhpcy5yZWxpbmsodGhpcy5fX2NvbnRleHQsIHRoaXMpO1xuICAgIH1cbiAgICBcbiAgICByZWdpc3RlciggcmF3Q3R4LCBzdGF0ZSA9IHt9LCBkYXRhcyA9IHt9ICkge1xuICAgICAgICB0aGlzLnJlbGluayhyYXdDdHgsIHRoaXMsIGZhbHNlLCBzdGF0ZSwgZGF0YXMpO1xuICAgICAgICBPYmplY3Qua2V5cyhyYXdDdHgpLmZvckVhY2goXG4gICAgICAgICAgICBpZCA9PiAoaXNGdW5jdGlvbihyYXdDdHhbaWRdKSAmJiByYXdDdHhbaWRdLnNpbmdsZXRvbiAmJiB0aGlzLl9tb3VudChpZCwgc3RhdGVbaWRdLCBkYXRhc1tpZF0pKSlcbiAgICAgICAgXG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIE1hcCBzcmNDdHggc3RvcmUncyBvbiB0YXJnZXRDdHggaGVhZGVycyBwcm90bydzXG4gICAgICogQHBhcmFtIHNyY0N0eFxuICAgICAqIEBwYXJhbSB0YXJnZXRDdHhcbiAgICAgKiBAcGFyYW0gc3RhdGVcbiAgICAgKiBAcGFyYW0gZGF0YXNcbiAgICAgKi9cbiAgICByZWxpbmsoIHNyY0N0eCwgdGFyZ2V0Q3R4ID0gdGhpcywgZXh0ZXJuYWwsIHN0YXRlID0ge30sIGRhdGFzID0ge30gKSB7XG4gICAgICAgIGxldCBsY3R4ID0gdGFyZ2V0Q3R4Ll9zdG9yZXMucHJvdG90eXBlO1xuICAgICAgICBPYmplY3Qua2V5cyhzcmNDdHgpXG4gICAgICAgICAgICAgIC5mb3JFYWNoKFxuICAgICAgICAgICAgICAgICAgaWQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGlmICggdGFyZ2V0Q3R4Ll9fY29udGV4dFtpZF0gPT09IHNyY0N0eFtpZF0gfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0Q3R4Ll9fY29udGV4dFtpZF0gJiYgKHRhcmdldEN0eC5fX2NvbnRleHRbaWRdLmNvbnN0cnVjdG9yID09PSBzcmNDdHhbaWRdICkgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgaWYgKCB0YXJnZXRDdHguX19jb250ZXh0W2lkXSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwiUmVzY29wZSBDb250ZXh0IDogXCIsIGlkLCBcIiBhbHJlYWR5IGV4aXN0IGluIHRoaXMgY29udGV4dCAhXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIGlmICggIWV4dGVybmFsIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fX2NvbnRleHRbaWRdID0gc3JjQ3R4W2lkXTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxjdHgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAoKCBjdHgsIGlkICkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldDogKCkgPT4gdGhpcy5fX2NvbnRleHRbaWRdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLl9fY29udGV4dCwgaWQpXG4gICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldEN0eC5fc3RhdGUucHJvdG90eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKCggY3R4LCBpZCApID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXQ6ICgpID0+IChjdHhbaWRdICYmIGN0eFtpZF0uc3RhdGUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldDogKCB2ICkgPT4gKHRoaXMuX21vdW50KGlkLCB2KSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMuX19jb250ZXh0LCBpZClcbiAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0Q3R4Ll9kYXRhcy5wcm90b3R5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAoKCBjdHgsIGlkICkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldDogKCkgPT4gKGN0eFtpZF0gJiYgY3R4W2lkXS5kYXRhcyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0OiAoIHYgKSA9PiAodGhpcy5fbW91bnQoaWQsIHVuZGVmaW5lZCwgdikpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLl9fY29udGV4dCwgaWQpXG4gICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgKVxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gb2JqIHtSZWFjdC5Db21wb25lbnR8U3RvcmV8ZnVuY3Rpb24pXG4gICAgICogQHBhcmFtIGtleSB7c3RyaW5nfSBvcHRpb25hbCBrZXkgd2hlcmUgdG8gbWFwIHRoZSBwdWJsaWMgc3RhdGVcbiAgICAgKi9cbiAgICBiaW5kKCBvYmosIGtleSwgYXMsIHNldEluaXRpYWwgPSB0cnVlICkge1xuICAgICAgICBsZXQgbGFzdFJldnMsIGRhdGFzO1xuICAgICAgICBpZiAoIGtleSAmJiAhaXNBcnJheShrZXkpIClcbiAgICAgICAgICAgIGtleSA9IFtrZXldO1xuICAgICAgICBcbiAgICAgICAgLy8ga2V5ID0ga2V5fHxcbiAgICAgICAgXG4gICAgICAgIGlmICggYXMgPT09IHRydWUgKSB7XG4gICAgICAgICAgICBzZXRJbml0aWFsID0gdHJ1ZTtcbiAgICAgICAgICAgIGFzID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdGhpcy5fZm9sbG93ZXJzLnB1c2goXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgb2JqLFxuICAgICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgICBhcyxcbiAgICAgICAgICAgICAgICBsYXN0UmV2cyA9IGtleSAmJiBrZXkucmVkdWNlKCggcmV2cywgaWQgKSA9PiAocmV2c1tpZF0gPSAwLCByZXZzKSwge30pXG4gICAgICAgICAgICBdKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMubW91bnQoa2V5KTtcbiAgICAgICAgXG4gICAgICAgIGlmICggc2V0SW5pdGlhbCAmJiB0aGlzLl9zdGFibGUgKSB7XG4gICAgICAgICAgICBkYXRhcyA9IHRoaXMuZ2V0VXBkYXRlcyhsYXN0UmV2cyk7XG4gICAgICAgICAgICBpZiAoICFkYXRhcyApIHJldHVybjtcbiAgICAgICAgICAgIGlmICggdHlwZW9mIG9iaiAhPSBcImZ1bmN0aW9uXCIgKSB7XG4gICAgICAgICAgICAgICAgaWYgKCBhcyApIG9iai5zZXRTdGF0ZSh7IFthc106IGRhdGFzIH0pO1xuICAgICAgICAgICAgICAgIGVsc2Ugb2JqLnNldFN0YXRlKGRhdGFzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIG9iaihkYXRhcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBsYXN0UmV2cyAmJlxuICAgICAgICAgICAgLy8ga2V5LmZvckVhY2goaWQgPT4gKGxhc3RSZXZzW2lkXSA9IHRoaXMuc3RvcmVzW2lkXSAmJiB0aGlzLnN0b3Jlc1tpZF0uX3JldiB8fCAwKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogVW4gYmluZCB0aGlzIGNvbnRleHQgb2ZmIHRoZSBnaXZlbiBjb21wb25lbnQta2V5c1xuICAgICAqIEBwYXJhbSBvYmpcbiAgICAgKiBAcGFyYW0ga2V5XG4gICAgICogQHJldHVybnMge0FycmF5LjwqPn1cbiAgICAgKi9cbiAgICB1bkJpbmQoIG9iaiwga2V5LCBhcyApIHtcbiAgICAgICAgdmFyIGZvbGxvd2VycyA9IHRoaXMuX2ZvbGxvd2VycyxcbiAgICAgICAgICAgIGkgICAgICAgICA9IGZvbGxvd2VycyAmJiBmb2xsb3dlcnMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGZvbGxvd2VycyAmJiBpLS0gKVxuICAgICAgICAgICAgaWYgKCBmb2xsb3dlcnNbaV1bMF0gPT09IG9iaiAmJiAoJycgKyBmb2xsb3dlcnNbaV1bMV0pID09ICgnJyArIGtleSkgJiZcbiAgICAgICAgICAgICAgICAoJycgKyBmb2xsb3dlcnNbaV1bMl0pID09ICgnJyArIGFzKSApXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZvbGxvd2Vycy5zcGxpY2UoaSwgMSk7XG4gICAgfVxuICAgIFxuICAgIFxuICAgIG1hcCggdG8sIHN0b3JlcywgYmluZCA9IHRydWUgKSB7XG4gICAgICAgIHRoaXMubW91bnQoc3RvcmVzKTtcbiAgICAgICAgYmluZCAmJiB0aGlzLmJpbmQodG8sIHN0b3JlcywgbnVsbCwgZmFsc2UpO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHN0b3Jlcy5yZWR1Y2UoKCBkYXRhcywgaWQgKSA9PiAoZGF0YXNbaWRdID0gdGhpcy5zdG9yZXNbaWRdICYmIHRoaXMuc3RvcmVzW2lkXS5kYXRhcywgZGF0YXMpLCB7fSk7XG4gICAgfVxuICAgIFxuICAgIGdldFN0b3Jlc1JldnMoIHN0b3JlcyA9IHt9ICkge1xuICAgICAgICBsZXQgY3R4ID0gdGhpcy5fX2NvbnRleHQ7XG4gICAgICAgIFxuICAgICAgICBPYmplY3Qua2V5cyhjdHgpLmZvckVhY2goXG4gICAgICAgICAgICBpZCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCAhaXNGdW5jdGlvbihjdHhbaWRdKVxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICBzdG9yZXNbaWRdID0gY3R4W2lkXS5fcmV2O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICggIXN0b3Jlcy5oYXNPd25Qcm9wZXJ0eShpZCkgKVxuICAgICAgICAgICAgICAgICAgICBzdG9yZXNbaWRdID0gZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX19taXhlZC5yZWR1Y2UoKCB1cGRhdGVkLCBjdHggKSA9PiAoY3R4LmdldFN0b3Jlc1JldnMoc3RvcmVzKSwgc3RvcmVzKSwgc3RvcmVzKTtcbiAgICAgICAgdGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuZ2V0U3RvcmVzUmV2cyhzdG9yZXMpO1xuICAgICAgICByZXR1cm4gc3RvcmVzO1xuICAgIH1cbiAgICBcbiAgICBnZXRVcGRhdGVzKCByZXZzLCBvdXRwdXQsIHVwZGF0ZWQgKSB7XG4gICAgICAgIGxldCBjdHggPSB0aGlzLl9fY29udGV4dDtcbiAgICAgICAgXG4gICAgICAgIG91dHB1dCA9IG91dHB1dCB8fCB7fTtcbiAgICAgICAgT2JqZWN0LmtleXMoY3R4KS5mb3JFYWNoKFxuICAgICAgICAgICAgaWQgPT4ge1xuICAgICAgICAgICAgICAgIGlmICggIW91dHB1dFtpZF1cbiAgICAgICAgICAgICAgICAgICAgJiYgKCAhcmV2c1xuICAgICAgICAgICAgICAgICAgICAgICAgfHwgKHJldnMuaGFzT3duUHJvcGVydHkoaWQpICYmIHJldnNbaWRdID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgICAgICB8fCAhKCAhcmV2cy5oYXNPd25Qcm9wZXJ0eShpZCkgfHwgY3R4W2lkXS5fcmV2IDw9IHJldnNbaWRdICkpXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIG91dHB1dFtpZF0gPSB0aGlzLmRhdGFzW2lkXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCByZXZzICYmIHJldnNbaWRdICE9PSB1bmRlZmluZWQgKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV2c1tpZF0gPSBjdHhbaWRdLl9yZXY7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgdXBkYXRlZCA9IHRoaXMuX19taXhlZC5yZWR1Y2UoKCB1cGRhdGVkLCBjdHggKSA9PiAoY3R4LmdldFVwZGF0ZXMocmV2cywgb3V0cHV0LCB1cGRhdGVkKSB8fCB1cGRhdGVkKSwgdXBkYXRlZCk7XG4gICAgICAgIHVwZGF0ZWQgPSB0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC5nZXRVcGRhdGVzKHJldnMsIG91dHB1dCwgdXBkYXRlZCkgfHwgdXBkYXRlZDtcbiAgICAgICAgcmV0dXJuIHVwZGF0ZWQgJiYgb3V0cHV0O1xuICAgIH1cbiAgICBcbiAgICBzZXJpYWxpemUoIGZsYWdzX3N0YXRlcyA9IC8uKi8sIGZsYWdzX2RhdGFzID0gLy4qLyApIHtcbiAgICAgICAgbGV0IGN0eCA9IHRoaXMuX19jb250ZXh0LCBvdXRwdXQgPSB7IHN0YXRlOiB7fSwgZGF0YXM6IHt9IH0sXG4gICAgICAgICAgICBfZmxhZ3Nfc3RhdGVzLFxuICAgICAgICAgICAgX2ZsYWdzX2RhdGFzO1xuICAgICAgICBpZiAoIGlzQXJyYXkoZmxhZ3Nfc3RhdGVzKSApXG4gICAgICAgICAgICBmbGFnc19zdGF0ZXMuZm9yRWFjaChpZCA9PiAob3V0cHV0LnN0YXRlW2lkXSA9IHRoaXMuc3RhdGVbaWRdKSlcbiAgICAgICAgXG4gICAgICAgIGlmICggaXNBcnJheShmbGFnc19kYXRhcykgKVxuICAgICAgICAgICAgZmxhZ3NfZGF0YXMuZm9yRWFjaChpZCA9PiAob3V0cHV0LmRhdGFzW2lkXSA9IHRoaXMuZGF0YXNbaWRdKSlcbiAgICAgICAgXG4gICAgICAgIGlmICggIWlzQXJyYXkoZmxhZ3NfZGF0YXMpICYmICFpc0FycmF5KGZsYWdzX3N0YXRlcykgKVxuICAgICAgICAgICAgT2JqZWN0LmtleXMoY3R4KS5mb3JFYWNoKFxuICAgICAgICAgICAgICAgIGlkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBpc0Z1bmN0aW9uKGN0eFtpZF0pIClcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGxldCBmbGFncyA9IGN0eFtpZF0uY29uc3RydWN0b3IuZmxhZ3M7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBmbGFncyA9IGlzQXJyYXkoZmxhZ3MpID8gZmxhZ3MgOiBbZmxhZ3MgfHwgXCJcIl07XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpZiAoIGZsYWdzLnJlZHVjZSgoIHIsIGZsYWcgKSA9PiAociB8fCBfZmxhZ3Nfc3RhdGVzLnRlc3QoZmxhZykpLCBmYWxzZSkgKVxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0LnN0YXRlW2lkXSA9IHRoaXMuc3RhdGVbaWRdO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBmbGFncy5yZWR1Y2UoKCByLCBmbGFnICkgPT4gKHIgfHwgX2ZsYWdzX2RhdGFzLnRlc3QoZmxhZykpLCBmYWxzZSkgKVxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0LmRhdGFzW2lkXSA9IHRoaXMuZGF0YXNbaWRdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIClcbiAgICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICB9XG4gICAgXG4gICAgb24oIGxpc3RzICkge1xuICAgICAgICBcbiAgICAgICAgaWYgKCAhaXNTdHJpbmcobGlzdHMpICYmIGxpc3RzIClcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGxpc3RzKS5mb3JFYWNoKGsgPT4gc3VwZXIub24oaywgbGlzdHNba10pKTtcbiAgICAgICAgZWxzZSBzdXBlci5vbiguLi5hcmd1bWVudHMpO1xuICAgIH1cbiAgICBcbiAgICByZW1vdmVMaXN0ZW5lciggbGlzdHMgKSB7XG4gICAgICAgIGlmICggIWlzU3RyaW5nKGxpc3RzKSAmJiBsaXN0cyApXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhsaXN0cykuZm9yRWFjaChrID0+IHN1cGVyLnJlbW92ZUxpc3RlbmVyKGssIGxpc3RzW2tdKSk7XG4gICAgICAgIGVsc2Ugc3VwZXIucmVtb3ZlTGlzdGVuZXIoLi4uYXJndW1lbnRzKTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogb25jZSgnc3RhYmxlJywgY2IpXG4gICAgICogQHBhcmFtIG9iaiB7UmVhY3QuQ29tcG9uZW50fFN0b3JlfGZ1bmN0aW9uKVxuICAgICAqIEBwYXJhbSBrZXkge3N0cmluZ30gb3B0aW9uYWwga2V5IHdoZXJlIHRvIG1hcCB0aGUgcHVibGljIHN0YXRlXG4gICAgICovXG4gICAgdGhlbiggY2IgKSB7XG4gICAgICAgIGlmICggdGhpcy5fc3RhYmxlIClcbiAgICAgICAgICAgIHJldHVybiBjYihudWxsLCB0aGlzLmRhdGFzKTtcbiAgICAgICAgdGhpcy5vbmNlKCdzdGFibGUnLCBlID0+IGNiKG51bGwsIHRoaXMuZGF0YXMpKTtcbiAgICB9XG4gICAgXG4gICAgcmVzdG9yZSggeyBzdGF0ZSwgZGF0YXMgfSwgcXVpZXQgKSB7XG4gICAgICAgIGxldCBjdHggPSB0aGlzLl9fY29udGV4dDtcbiAgICAgICAgT2JqZWN0LmtleXMoZGF0YXMpLmZvckVhY2goXG4gICAgICAgICAgICBpZCA9PiB7XG4gICAgICAgICAgICAgICAgcXVpZXQgPyBjdHguZGF0YXMgPSBkYXRhc1tpZF1cbiAgICAgICAgICAgICAgICAgICAgOiBjdHgucHVzaChkYXRhc1tpZF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICBPYmplY3Qua2V5cyhzdGF0ZSkuZm9yRWFjaChcbiAgICAgICAgICAgIGlkID0+IHtcbiAgICAgICAgICAgICAgICBxdWlldCA/IGN0eC5zdGF0ZSA9IHN0YXRlW2lkXVxuICAgICAgICAgICAgICAgICAgICA6IGN0eC5zZXRTdGF0ZShzdGF0ZVtpZF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cbiAgICBcbiAgICBcbiAgICByZXRhaW5TdG9yZXMoIHN0b3JlcyA9IFtdLCByZWFzb24gKSB7XG4gICAgICAgIHN0b3Jlcy5mb3JFYWNoKFxuICAgICAgICAgICAgaWQgPT4gKHRoaXMuc3RvcmVzW2lkXSAmJiB0aGlzLnN0b3Jlc1tpZF0ucmV0YWluICYmIHRoaXMuc3RvcmVzW2lkXS5yZXRhaW4ocmVhc29uKSlcbiAgICAgICAgKVxuICAgIH1cbiAgICBcbiAgICBkaXNwb3NlU3RvcmVzKCBzdG9yZXMgPSBbXSwgcmVhc29uICkge1xuICAgICAgICBzdG9yZXMuZm9yRWFjaChcbiAgICAgICAgICAgIGlkID0+ICh0aGlzLnN0b3Jlc1tpZF0gJiYgdGhpcy5zdG9yZXNbaWRdLmRpc3Bvc2UgJiYgdGhpcy5zdG9yZXNbaWRdLmRpc3Bvc2UocmVhc29uKSlcbiAgICAgICAgKVxuICAgIH1cbiAgICBcbiAgICB3YWl0KCByZWFzb24gKSB7XG4gICAgICAgIC8vICBjb25zb2xlLmxvZyhcIndhaXRcIiwgcmVhc29uKTtcbiAgICAgICAgdGhpcy5fc3RhYmxlICYmICF0aGlzLl9fdzhMb2Nrcy5hbGwgJiYgdGhpcy5lbWl0KFwidW5zdGFibGVcIiwgdGhpcyk7XG4gICAgICAgIHRoaXMuX3N0YWJsZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9fdzhMb2Nrcy5hbGwrKztcbiAgICAgICAgaWYgKCByZWFzb24gKSB7XG4gICAgICAgICAgICB0aGlzLl9fdzhMb2Nrc1tyZWFzb25dID0gdGhpcy5fX3c4TG9ja3NbcmVhc29uXSB8fCAwO1xuICAgICAgICAgICAgdGhpcy5fX3c4TG9ja3NbcmVhc29uXSsrO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIHJlbGVhc2UoIHJlYXNvbiApIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcInJlbGVhc2VcIiwgcmVhc29uKTtcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICBpZiAoIHJlYXNvbiApIHtcbiAgICAgICAgICAgIGlmICggdGhpcy5fX3c4TG9ja3NbcmVhc29uXSA9PSAwIClcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiUmVsZWFzZSBtb3JlIHRoYW4gbG9ja2luZyAhXCIsIHJlYXNvbik7XG4gICAgICAgICAgICB0aGlzLl9fdzhMb2Nrc1tyZWFzb25dID0gdGhpcy5fX3c4TG9ja3NbcmVhc29uXSB8fCAwO1xuICAgICAgICAgICAgdGhpcy5fX3c4TG9ja3NbcmVhc29uXS0tO1xuICAgICAgICB9XG4gICAgICAgIGlmICggdGhpcy5fX3c4TG9ja3MuYWxsID09IDAgKVxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlJlbGVhc2UgbW9yZSB0aGFuIGxvY2tpbmcgIVwiKTtcbiAgICAgICAgdGhpcy5fX3c4TG9ja3MuYWxsLS07XG4gICAgICAgIGlmICggIXRoaXMuX193OExvY2tzLmFsbCApIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YWJpbGl6ZXJUTSAmJiBjbGVhclRpbWVvdXQodGhpcy5fc3RhYmlsaXplclRNKTtcbiAgICAgICAgICAgIHRoaXMuX3Byb3BhZ1RNICYmIGNsZWFyVGltZW91dCh0aGlzLl9wcm9wYWdUTSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMuX3N0YWJpbGl6ZXJUTSA9IHNldFRpbWVvdXQoXG4gICAgICAgICAgICAgICAgZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICggIXRoaXMuX193OExvY2tzLmFsbCApXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fc3RhYmlsaXplclRNID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3N0YWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdChcInN0YWJsZVwiLCB0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3Byb3BhZygpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG4gICAgXG4gICAgcHJvcGFnKCkge1xuICAgICAgICB0aGlzLl9wcm9wYWdUTSAmJiBjbGVhclRpbWVvdXQodGhpcy5fcHJvcGFnVE0pO1xuICAgICAgICB0aGlzLl9wcm9wYWdUTSA9IHNldFRpbWVvdXQoXG4gICAgICAgICAgICBlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLl9wcm9wYWcoKVxuICAgICAgICAgICAgfSwgNTBcbiAgICAgICAgKTtcbiAgICB9XG4gICAgXG4gICAgX3Byb3BhZygpIHtcbiAgICAgICAgaWYgKCB0aGlzLl9mb2xsb3dlcnMubGVuZ3RoIClcbiAgICAgICAgICAgIHRoaXMuX2ZvbGxvd2Vycy5mb3JFYWNoKCggeyAwOiBvYmosIDE6IGtleSwgMjogYXMsIDM6IGxhc3RSZXZzIH0gKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGRhdGFzID0gdGhpcy5nZXRVcGRhdGVzKGxhc3RSZXZzKTtcbiAgICAgICAgICAgICAgICBpZiAoICFkYXRhcyApIHJldHVybjtcbiAgICAgICAgICAgICAgICBpZiAoIHR5cGVvZiBvYmogIT0gXCJmdW5jdGlvblwiICkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIGFzICkgb2JqLnNldFN0YXRlKHsgW2FzXTogZGF0YXMgfSk7XG4gICAgICAgICAgICAgICAgICAgIGVsc2Ugb2JqLnNldFN0YXRlKGRhdGFzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG9iaihkYXRhcywgbGFzdFJldnMgJiYgWy4uLmxhc3RSZXZzXSB8fCBcIm5vIHJldnNcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGxhc3RSZXZzICYmXG4gICAgICAgICAgICAgICAgLy8ga2V5LmZvckVhY2goaWQgPT4gKGxhc3RSZXZzW2lkXSA9IHRoaXMuc3RvcmVzW2lkXSAmJiB0aGlzLnN0b3Jlc1tpZF0uX3JldiB8fCAwKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5lbWl0KFwidXBkYXRlXCIsIHRoaXMuZ2V0VXBkYXRlcygpKTtcbiAgICB9XG4gICAgXG4gICAgXG4gICAgX2dldEFsbENoaWxkcyggY2hpbGRzID0gW10gKSB7XG4gICAgICAgIGNoaWxkcy5wdXNoKC4uLnRoaXMuX2NoaWxkQ29udGV4dHMpXG4gICAgICAgIHRoaXMuX2NoaWxkQ29udGV4dHMuZm9yRWFjaChcbiAgICAgICAgICAgIGN0eCA9PiB7XG4gICAgICAgICAgICAgICAgY3R4Ll9nZXRBbGxDaGlsZHMoY2hpbGRzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIGNoaWxkcztcbiAgICB9XG4gICAgXG4gICAgX2FkZENoaWxkKCBjdHggKSB7XG4gICAgICAgIHRoaXMuX2NoaWxkQ29udGV4dHMucHVzaChjdHgpO1xuICAgIH1cbiAgICBcbiAgICBfcm1DaGlsZCggY3R4ICkge1xuICAgICAgICBsZXQgaSA9IHRoaXMuX2NoaWxkQ29udGV4dHMuaW5kZXhPZihjdHgpO1xuICAgICAgICBpZiAoIGkgIT0gLTEgKVxuICAgICAgICAgICAgdGhpcy5fY2hpbGRDb250ZXh0cy5zcGxpY2UoaSwgMSk7XG4gICAgfVxuICAgIFxuICAgIHJldGFpbiggcmVhc29uICkge1xuICAgICAgICB0aGlzLl9fcmV0YWluTG9ja3MuYWxsKys7XG4gICAgICAgIC8vY29uc29sZS5sb2coXCJyZXRhaW5cIiwgdGhpcy5faWQsIHJlYXNvbik7XG4gICAgICAgIFxuICAgICAgICBpZiAoIHJlYXNvbiApIHtcbiAgICAgICAgICAgIHRoaXMuX19yZXRhaW5Mb2Nrc1tyZWFzb25dID0gdGhpcy5fX3JldGFpbkxvY2tzW3JlYXNvbl0gfHwgMDtcbiAgICAgICAgICAgIHRoaXMuX19yZXRhaW5Mb2Nrc1tyZWFzb25dKys7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgZGlzcG9zZSggcmVhc29uICkge1xuICAgICAgICBpZiAoIHJlYXNvbiApIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKCB0aGlzLl9fcmV0YWluTG9ja3NbcmVhc29uXSA9PSAwIClcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJEaXNwb3NlIG1vcmUgdGhhbiByZXRhaW5pbmcgIVwiKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5fX3JldGFpbkxvY2tzW3JlYXNvbl0gPSB0aGlzLl9fcmV0YWluTG9ja3NbcmVhc29uXSB8fCAwO1xuICAgICAgICAgICAgdGhpcy5fX3JldGFpbkxvY2tzW3JlYXNvbl0tLTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKCB0aGlzLl9fcmV0YWluTG9ja3MuYWxsID09IDAgKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRGlzcG9zZSBtb3JlIHRoYW4gcmV0YWluaW5nICFcIik7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9fcmV0YWluTG9ja3MuYWxsLS07XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgaWYgKCAhdGhpcy5fX3JldGFpbkxvY2tzLmFsbCApIHtcbiAgICAgICAgICAgIGlmICggdGhpcy5fcGVyc2lzdGVuY2VUbSApIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9kZXN0cm95VE0gJiYgY2xlYXJUaW1lb3V0KHRoaXMuX2Rlc3Ryb3lUTSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fZGVzdHJveVRNID0gc2V0VGltZW91dChcbiAgICAgICAgICAgICAgICAgICAgZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInd0ZiBjdHhcIiwgdGhpcy5faWQsIHJlYXNvbiwgdGhpcy5fX3c4TG9ja3MsIHRoaXMuX3N0YWJsZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRoZW4ocyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICBjb25zb2xlLmxvZyhcInd0ZiBjdHggdGhlblwiLCB0aGlzLl9pZCwgcmVhc29uLCB0aGlzLl9fdzhMb2Nrcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIXRoaXMuX19yZXRhaW5Mb2Nrcy5hbGwgJiYgdGhpcy5kZXN0cm95KClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wZXJzaXN0ZW5jZVRtXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMudGhlbihzID0+ICghdGhpcy5fX3JldGFpbkxvY2tzLmFsbCAmJiB0aGlzLmRlc3Ryb3koKSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIG9yZGVyIGRlc3Ryb3kgb2YgbG9jYWwgc3RvcmVzXG4gICAgICovXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgbGV0IGN0eCA9IHRoaXMuX19jb250ZXh0O1xuICAgICAgICBcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJkZXN0cm95XCIsIHRoaXMuX2lkKTtcbiAgICAgICAgdGhpcy5lbWl0KFwiZGVzdHJveVwiKTtcbiAgICAgICAgT2JqZWN0LmtleXMoXG4gICAgICAgICAgICB0aGlzLl9fbGlzdGVuaW5nXG4gICAgICAgICkuZm9yRWFjaChcbiAgICAgICAgICAgIGlkID0+IHRoaXMuX19jb250ZXh0W2lkXS5yZW1vdmVMaXN0ZW5lcih0aGlzLl9fbGlzdGVuaW5nW2lkXSlcbiAgICAgICAgKTtcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICB0aGlzLl9fbGlzdGVuaW5nID0ge307XG4gICAgICAgIFxuICAgICAgICBpZiAoIHRoaXMuX2lzTG9jYWxJZCApXG4gICAgICAgICAgICBkZWxldGUgb3BlbkNvbnRleHRzW3RoaXMuX2lkXTtcbiAgICAgICAgdGhpcy5fZm9sbG93ZXJzLmxlbmd0aCA9IDA7XG4gICAgICAgIFxuICAgICAgICBmb3IgKCBsZXQga2V5IGluIGN0eCApXG4gICAgICAgICAgICBpZiAoICFpc0Z1bmN0aW9uKGN0eFtrZXldKSApIHtcbiAgICAgICAgICAgICAgICBpZiAoIGN0eFtrZXldLmNvbnRleHRPYmogPT09IHRoaXMgKVxuICAgICAgICAgICAgICAgICAgICBjdHhba2V5XS5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY3R4W2tleV0gPSBjdHhba2V5XS5jb25zdHJ1Y3RvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgd2hpbGUgKCB0aGlzLl9fbWl4ZWRMaXN0Lmxlbmd0aCApIHtcbiAgICAgICAgICAgIHRoaXMuX19taXhlZFswXS5yZW1vdmVMaXN0ZW5lcih0aGlzLl9fbWl4ZWRMaXN0LnNoaWZ0KCkpO1xuICAgICAgICAgICAgdGhpcy5fX21peGVkLnNoaWZ0KCkuZGlzcG9zZSgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICggdGhpcy5wYXJlbnQgKSB7XG4gICAgICAgICAgICB0aGlzLnBhcmVudC5yZW1vdmVMaXN0ZW5lcih0aGlzLl9fcGFyZW50TGlzdCk7XG4gICAgICAgICAgICB0aGlzLnBhcmVudC5kaXNwb3NlKFwiaXNNeVBhcmVudFwiKTtcbiAgICAgICAgICAgIHRoaXMucGFyZW50Ll9ybUNoaWxkKHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIC8vIHRoaXMuZGF0YXMgPSB0aGlzLnN0YXRlID0gdGhpcy5jb250ZXh0ID0gdGhpcy5zdG9yZXMgPSBudWxsO1xuICAgICAgICAvLyB0aGlzLl9kYXRhcyA9IHRoaXMuX3N0YXRlID0gdGhpcy5fc3RvcmVzID0gbnVsbDtcbiAgICAgICAgXG4gICAgICAgIFxuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvQ29udGV4dC5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImlzc3RyaW5nXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiaXNzdHJpbmdcIlxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpc2FycmF5XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiaXNhcnJheVwiXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV2ZW50c1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImV2ZW50c1wiXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImlzZnVuY3Rpb25cIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJpc2Z1bmN0aW9uXCJcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2hvcnRpZFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInNob3J0aWRcIlxuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxuICogQ29weXJpZ2h0IChjKSAgMjAxNyBDYWlwaSBMYWJzIC5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuICpcbiAqIEBhdXRob3IgOiBOYXRoYW5hZWwgQnJhdW5cbiAqIEBjb250YWN0IDogY2FpcGlsYWJzQGdtYWlsLmNvbVxuICovXG5cbi8qKlxuICogVWx0cmEgc2NhbGFibGUgc3RhdGUtYXdhcmUgc3RvcmVcbiAqXG4gKiBAdG9kbyA6IGxvdCBvZiBvcHRpbXMuLi5cbiAqL1xuXG52YXIgaXNTdHJpbmcgICAgID0gcmVxdWlyZSgnaXNzdHJpbmcnKVxuICAgICwgaXNBcnJheSAgICA9IHJlcXVpcmUoJ2lzYXJyYXknKVxuICAgICwgaXNGdW5jdGlvbiA9IHJlcXVpcmUoJ2lzZnVuY3Rpb24nKVxuICAgICxcbiAgICBDb250ZXh0ICAgICAgPSByZXF1aXJlKCcuL0NvbnRleHQnKSxcbiAgICBFdmVudEVtaXR0ZXIgPSByZXF1aXJlKCdldmVudHMnKSxcbiAgICBzaG9ydGlkICAgICAgPSByZXF1aXJlKCdzaG9ydGlkJyksXG4gICAgb2JqUHJvdG8gICAgID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHt9KSxcbiAgICBvcGVuQ29udGV4dHMgPSB7fTtcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdG9yZSBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gICAgXG4gICAgc3RhdGljIHVzZSA9IFtdOy8vIG92ZXJyaWRhYmxlIGxpc3Qgb2Ygc291cmNlIHN0b3Jlc1xuICAgIHN0YXRpYyBmb2xsb3c7Ly8gb3ZlcnJpZGFibGUgbGlzdCBvZiBzdG9yZSB0aGF0IHdpbGwgYWxsb3cgcHVzaCBpZiB1cGRhdGVkXG4gICAgc3RhdGljIHJlcXVpcmU7XG4gICAgc3RhdGljIHN0YXRpY0NvbnRleHQgPSBuZXcgQ29udGV4dCh7fSwgeyBpZDogXCJzdGF0aWNcIiB9KTtcbiAgICBzdGF0aWMgaW5pdGlhbFN0YXRlID0gdW5kZWZpbmVkOy8vIGRlZmF1bHQgc3RhdGVcbiAgICAvKipcbiAgICAgKlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gICAgc3RhdGljIGRlZmF1bHRNYXhMaXN0ZW5lcnMgPSAxMDA7XG4gICAgLyoqXG4gICAgICogaWYgcmV0YWluIGdvZXMgdG8gMCA6XG4gICAgICogZmFsc2UgdG8gbm90IGRlc3Ryb3ksXG4gICAgICogMCB0byBzeW5jIGF1dG8gZGVzdHJveVxuICAgICAqIE1zIHRvIGF1dG9kZXN0cm95IGFmdGVyIHRtIG1zIGlmIG5vIHJldGFpbiBoYXMgYmVlbiBjYWxsZWRcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbnxJbnR9XG4gICAgICovXG4gICAgc3RhdGljIHBlcnNpc3RlbmNlVG0gPSBmYWxzZTtcbiAgICBcbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3Rvciwgd2lsbCBidWlsZCBhIHJlc2NvcGUgc3RvcmVcbiAgICAgKlxuICAgICAqIChjb250ZXh0LCB7cmVxdWlyZSx1c2UscmVmaW5lLHN0YXRlLCBkYXRhc30pXG4gICAgICogKGNvbnRleHQpXG4gICAgICpcbiAgICAgKiBAcGFyYW0gY29udGV4dCB7b2JqZWN0fSBjb250ZXh0IHdoZXJlIHRvIGZpbmQgdGhlIG90aGVyIHN0b3JlcyAoZGVmYXVsdCA6IHN0YXRpYyBzdGF0aWNDb250ZXh0IClcbiAgICAgKiBAcGFyYW0ga2V5cyB7QXJyYXl9IChwYXNzZWQgdG8gU3RvcmU6Om1hcCkgRXggOiBbXCJzZXNzaW9uXCIsIFwib3RoZXJOYW1lZFN0b3JlOmtleVwiLCBvdGhlclN0b3JlLmFzKFwib3RoZXJLZXlcIildXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHZhciBhcmd6ICAgICAgICAgPSBbLi4uYXJndW1lbnRzXSxcbiAgICAgICAgICAgIF9zdGF0aWMgICAgICA9IHRoaXMuY29uc3RydWN0b3IsXG4gICAgICAgICAgICBjb250ZXh0ICAgICAgPSAhaXNBcnJheShhcmd6WzBdKSAmJiAhaXNTdHJpbmcoYXJnelswXSkgPyBhcmd6LnNoaWZ0KCkgOiBfc3RhdGljLnN0YXRpY0NvbnRleHQsXG4gICAgICAgICAgICBjZmcgICAgICAgICAgPSBhcmd6WzBdICYmICFpc0FycmF5KGFyZ3pbMF0pICYmICFpc1N0cmluZyhhcmd6WzBdKSA/IGFyZ3ouc2hpZnQoKSA6IHt9LFxuICAgICAgICAgICAgbmFtZSAgICAgICAgID0gaXNTdHJpbmcoYXJnelswXSkgPyBhcmd6WzBdIDogY2ZnLm5hbWUgfHwgX3N0YXRpYy5uYW1lLFxuICAgICAgICAgICAgd2F0Y2hzICAgICAgID0gaXNBcnJheShhcmd6WzBdKSA/IGFyZ3ouc2hpZnQoKSA6IGNmZy51c2UgfHwgW10sLy8gd2F0Y2hzIG5lZWQgdG8gYmUgZGVmaW5lZCBhZnRlciBhbGwgdGhlIHN0b3JlIGFyZSByZWdpc3RlcmVkIDogc28gd2UgY2FuJ3QgZGVhbCB3aXRoIGFueSBcInN0YXRpYyB1c2VcIiBhdXRvbWF0aWNseVxuICAgICAgICAgICAgcmVmaW5lICAgICAgID0gaXNGdW5jdGlvbihhcmd6WzBdKSA/IGFyZ3ouc2hpZnQoKSA6IGNmZy5yZWZpbmUgfHwgbnVsbCxcbiAgICAgICAgICAgIGluaXRpYWxTdGF0ZSA9IF9zdGF0aWMuaW5pdGlhbFN0YXRlO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fdWlkID0gY2ZnLl91aWQgfHwgc2hvcnRpZC5nZW5lcmF0ZSgpO1xuICAgICAgICB0aGlzLl9tYXhMaXN0ZW5lcnMgPSBjZmcuZGVmYXVsdE1heExpc3RlbmVycyB8fCBTdG9yZS5kZWZhdWx0TWF4TGlzdGVuZXJzO1xuICAgICAgICB0aGlzLmxvY2tzID0gMDtcbiAgICAgICAgdGhpcy5fb25TdGFiaWxpemUgPSBbXTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX3BlcnNpc3RlbmNlVG0gPSBjZmcucGVyc2lzdGVuY2VUbSB8fCB0aGlzLmNvbnN0cnVjdG9yLnBlcnNpc3RlbmNlVG07XG4gICAgICAgIGlmICggaXNTdHJpbmcoYXJnelswXSkgKSB7XG4gICAgICAgICAgICBpZiAoIGNvbnRleHQuX19jb250ZXh0W25hbWVdIClcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCJSZVNjb3BlOiBPdmVyd3JpdGluZyBhbiBleGlzdGluZyBzdGF0aWMgbmFtZWQgc3RvcmUgKCAlcyApICEhXCIsIG5hbWUpO1xuICAgICAgICAgICAgY29udGV4dC5fX2NvbnRleHRbbmFtZV0gPSB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAoIGNmZyAmJiBjZmcub24gKSB7XG4gICAgICAgICAgICB0aGlzLm9uKGNmZy5vbik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gdGhpcy5zdGF0ZSAgICAgID0gdGhpcy5zdGF0ZSB8fCB7fTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX3VzZSA9IHdhdGNocztcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgXG4gICAgICAgIGlmICggY29udGV4dC5zdG9yZXMgKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRleHRPYmogPSBjb250ZXh0O1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dC5zdG9yZXM7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRleHRPYmogPSBuZXcgQ29udGV4dChjb250ZXh0KTtcbiAgICAgICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQuc3RvcmVzO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgdGhpcy5fc3RhYmxlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fcmV2ID0gMTtcbiAgICAgICAgdGhpcy5fcmV2cyA9IHt9O1xuICAgICAgICB0aGlzLnN0b3JlcyA9IHt9O1xuICAgICAgICB0aGlzLl9fcmV0YWluTG9ja3MgPSB7IGFsbDogMCB9O1xuICAgICAgICB0aGlzLl9yZXF1aXJlID0gW107XG4gICAgICAgIFxuICAgICAgICBpZiAoIF9zdGF0aWMucmVxdWlyZSApXG4gICAgICAgICAgICB0aGlzLl9yZXF1aXJlLnB1c2goLi4uX3N0YXRpYy5yZXF1aXJlKTtcbiAgICAgICAgaWYgKCBjZmcucmVxdWlyZSApXG4gICAgICAgICAgICB0aGlzLl9yZXF1aXJlLnB1c2goLi4uY2ZnLnJlcXVpcmUpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fZm9sbG93ZXJzID0gW107XG4gICAgICAgIFxuICAgICAgICBpZiAoIGNmZy5oYXNPd25Qcm9wZXJ0eShcImRhdGFzXCIpICYmIGNmZy5kYXRhcyAhPT0gdW5kZWZpbmVkIClcbiAgICAgICAgICAgIHRoaXMuZGF0YXMgPSBjZmcuZGF0YXM7XG4gICAgICAgIGlmICggY2ZnLmhhc093blByb3BlcnR5KFwic3RhdGVcIikgJiYgY2ZnLnN0YXRlICE9PSB1bmRlZmluZWQgKVxuICAgICAgICAgICAgaW5pdGlhbFN0YXRlID0gY2ZnLnN0YXRlO1xuICAgICAgICBcbiAgICAgICAgaWYgKCByZWZpbmUgKVxuICAgICAgICAgICAgdGhpcy5yZWZpbmUgPSByZWZpbmU7XG4gICAgICAgIFxuICAgICAgICBpZiAoICEhdGhpcy5fdXNlICYmIHRoaXMuX3VzZS5sZW5ndGggKSB7Ly8gaWYgdGhlcmUgaW5pdGlhbCB3YXRjaHMgYW55d2F5XG4gICAgICAgICAgICB0aGlzLnB1bGwodGhpcy5fdXNlKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKCBpbml0aWFsU3RhdGUgKSB7Ly8gc3luYyByZWZpbmVcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSB7IC4uLmluaXRpYWxTdGF0ZSB9O1xuICAgICAgICAgICAgaWYgKCB0aGlzLmlzQ29tcGxldGUoKSAmJiB0aGlzLmRhdGFzID09PSB1bmRlZmluZWQgKVxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YXMgPSB0aGlzLnJlZmluZSh0aGlzLmRhdGFzLCB0aGlzLnN0YXRlLCB0aGlzLnN0YXRlKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9zdGFibGUgPSB0aGlzLmRhdGFzICE9PSB1bmRlZmluZWQ7Ly8gc3RhYmxlIGlmIGl0IGhhdmUgaW5pdGlhbCByZXN1bHQgZGF0YXNcbiAgICAgICAgIXRoaXMuX3N0YWJsZSAmJiB0aGlzLmVtaXQoJ3Vuc3RhYmxlJywgdGhpcy5zdGF0ZSk7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIGdldCBhIEJ1aWxkZXIta2V5IHBhaXIgZm9yIFN0b3JlOjptYXBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgICAqIEByZXR1cm5zIHt7c3RvcmU6IFN0b3JlLCBuYW1lOiAqfX1cbiAgICAgKi9cbiAgICBzdGF0aWMgYXMoIG5hbWUgKSB7XG4gICAgICAgIHJldHVybiB7IHN0b3JlOiB0aGlzLCBuYW1lIH07XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIE1hcCBhbGwgbmFtZWQgc3RvcmVzIGluIHtrZXlzfSB0byB0aGUge29iamVjdH0ncyBzdGF0ZVxuICAgICAqIEhvb2sgY29tcG9uZW50V2lsbFVubW91bnQgKGZvciByZWFjdCBjb21wKSBvciBkZXN0cm95IHRvIHVuQmluZCB0aGVtIGF1dG9tYXRpY2FsbHlcbiAgICAgKiBAc3RhdGljXG4gICAgICogQHBhcmFtIG9iamVjdCB7UmVhY3QuQ29tcG9uZW50fFN0b3JlfC4uLn0gdGFyZ2V0IHN0YXRlIGF3YXJlIG9iamVjdFxuICAgICAqIEBwYXJhbSBrZXlzIHtBcnJheX0gRXggOiBbXCJzZXNzaW9uXCIsIFwib3RoZXJTdGF0aWNOYW1lZFN0b3JlOmtleVwiLCBzdG9yZS5hcygnYW5vdGhlcktleScpXVxuICAgICAqL1xuICAgIHN0YXRpYyBtYXAoIGNvbXBvbmVudCwga2V5cywgY29udGV4dCwgb3JpZ2luLCBzZXRJbml0aWFsID0gZmFsc2UgKSB7XG4gICAgICAgIHZhciB0YXJnZXRSZXZzID0gY29tcG9uZW50Ll9yZXZzIHx8IHt9O1xuICAgICAgICB2YXIgdGFyZ2V0Q29udGV4dCA9IGNvbXBvbmVudC5zdG9yZXMgfHwgKGNvbXBvbmVudC5zdG9yZXMgPSB7fSk7XG4gICAgICAgIHZhciBpbml0aWFsT3V0cHV0cyA9IHt9O1xuICAgICAgICBrZXlzID0gaXNBcnJheShrZXlzKSA/IFsuLi5rZXlzXSA6IFtrZXlzXTtcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICBjb250ZXh0ID0gY29udGV4dCB8fCBTdG9yZS5zdGF0aWNDb250ZXh0O1xuICAgICAgICBcbiAgICAgICAgLy8gaWYgKCF0YXJnZXRDb250ZXh0Ll9fY29udGV4dClcbiAgICAgICAgLy8gICAgIGRlYnVnZ2VyO1xuICAgICAgICBcbiAgICAgICAga2V5cyA9IGtleXMuZmlsdGVyKFxuICAgICAgICAgICAgLy8gQHRvZG8gOiB1c2UgcXVlcnkgcmVmc1xuICAgICAgICAgICAgLy8gKHN0b3JlKShcXC5zdG9yZSkqKFxcWyhcXCp8KHByb3BzKVxcdyspKylcXF0pPyhcXDphbGlhcylcbiAgICAgICAgICAgICgga2V5ICkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICggIWtleSApIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIk5vdCBhIG1hcHBhYmxlIHN0b3JlIGl0ZW0gJ1wiICsga2V5ICsgXCInIGluIFwiICsgb3JpZ2luICsgJyAhIScpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxldCBuYW1lLFxuICAgICAgICAgICAgICAgICAgICBhbGlhcyxcbiAgICAgICAgICAgICAgICAgICAgc3RvcmU7XG4gICAgICAgICAgICAgICAgaWYgKCBrZXkuc3RvcmUgJiYga2V5Lm5hbWUgKSB7XG4gICAgICAgICAgICAgICAgICAgIGFsaWFzID0gbmFtZSA9IGtleS5uYW1lO1xuICAgICAgICAgICAgICAgICAgICBzdG9yZSA9IGtleS5zdG9yZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoIGlzRnVuY3Rpb24oa2V5KSApIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZSA9IGFsaWFzID0ga2V5Lm5hbWUgfHwga2V5LmRlZmF1bHROYW1lO1xuICAgICAgICAgICAgICAgICAgICBzdG9yZSA9IGtleTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGtleSA9IGtleS5tYXRjaCgvKFtcXHdfXSspKD86XFw6XFxbKFxcKilcXF0pPyg/OlxcOihcXCopKT8vKTtcbiAgICAgICAgICAgICAgICAgICAgbmFtZSA9IGtleVswXTtcbiAgICAgICAgICAgICAgICAgICAgc3RvcmUgPSBjb250ZXh0LnN0b3Jlc1trZXlbMF1dO1xuICAgICAgICAgICAgICAgICAgICBhbGlhcyA9IGtleVsxXSA9PSAnKicgPyBudWxsIDoga2V5WzJdIHx8IGtleVswXTsvLyBhbGxvdyBiaW5kaW5nIHByb3BzICAoWypdKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAoIHRhcmdldFJldnNbbmFtZV0gKSByZXR1cm4gZmFsc2U7Ly8gaWdub3JlIGRibCB1c2VzIGZvciBub3dcbiAgICAgICAgICAgICAgICBpZiAoICFzdG9yZSApIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIk5vdCBhIG1hcHBhYmxlIHN0b3JlIGl0ZW0gJ1wiICsgbmFtZSArIFwiL1wiICsgYWxpYXMgKyBcIicgaW4gXCIgKyBvcmlnaW4gKyAnICEhJywgc3RvcmUpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKCBpc0Z1bmN0aW9uKHN0b3JlKSApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3VudFN0b3JlKG5hbWUsIGNvbnRleHQpXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LnN0b3Jlc1tuYW1lXS5iaW5kKGNvbXBvbmVudCwgYWxpYXMsIHNldEluaXRpYWwpO1xuICAgICAgICAgICAgICAgICAgICAvLyBpZiAoIGNvbnRleHQuX19jb250ZXh0W2tleVswXV0uc3RhdGUgKSB7Ly8gZG8gc3luYyBwdXNoIGFmdGVyIGNvbnN0cnVjdG9yXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBjb250ZXh0Ll9fY29udGV4dFtrZXlbMF1dLnB1c2goKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc3RvcmUuYmluZChjb21wb25lbnQsIGFsaWFzLCBzZXRJbml0aWFsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGFyZ2V0UmV2c1thbGlhc10gPSB0YXJnZXRSZXZzW2FsaWFzXSB8fCB0cnVlO1xuICAgICAgICAgICAgICAgICF0YXJnZXRDb250ZXh0W25hbWVdICYmICh0YXJnZXRDb250ZXh0W25hbWVdID0gY29udGV4dC5zdG9yZXNbbmFtZV0pO1xuICAgICAgICAgICAgICAgIGlmICggY29udGV4dC5zdG9yZXNbbmFtZV0uaGFzT3duUHJvcGVydHkoJ2RhdGFzJykgKVxuICAgICAgICAgICAgICAgICAgICBpbml0aWFsT3V0cHV0c1tuYW1lXSA9IGNvbnRleHQuZGF0YXNbbmFtZV07XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHZhciBtaXhlZENXVW5tb3VudCxcbiAgICAgICAgICAgIHVuTW91bnRLZXkgPSBjb21wb25lbnQuaXNSZWFjdENvbXBvbmVudCA/IFwiY29tcG9uZW50V2lsbFVubW91bnRcIiA6IFwiZGVzdHJveVwiO1xuICAgICAgICBcbiAgICAgICAgaWYgKCBjb21wb25lbnQuaGFzT3duUHJvcGVydHkodW5Nb3VudEtleSkgKSB7XG4gICAgICAgICAgICBtaXhlZENXVW5tb3VudCA9IGNvbXBvbmVudFt1bk1vdW50S2V5XTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgY29tcG9uZW50W3VuTW91bnRLZXldID0gZnVuY3Rpb24gKCkgey8vIHRvZG8gaG9wXG4gICAgICAgICAgICBkZWxldGUgdGhpc1t1bk1vdW50S2V5XTtcbiAgICAgICAgICAgIGlmICggbWl4ZWRDV1VubW91bnQgKVxuICAgICAgICAgICAgICAgIHRoaXNbdW5Nb3VudEtleV0gPSBtaXhlZENXVW5tb3VudDtcbiAgICAgICAgICAgIGtleXMubWFwKFxuICAgICAgICAgICAgICAgICgga2V5ICkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWFzLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmU7XG4gICAgICAgICAgICAgICAgICAgIGlmICgga2V5LnN0b3JlICYmIGtleS5uYW1lICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpYXMgPSBuYW1lID0ga2V5Lm5hbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9yZSA9IGtleS5zdG9yZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICggaXNGdW5jdGlvbihrZXkpICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZSA9IGFsaWFzID0ga2V5Lm5hbWUgfHwga2V5LmRlZmF1bHROYW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmUgPSBjb250ZXh0LnN0b3Jlc1tuYW1lXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleSA9IGtleS5zcGxpdCgnOicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZSA9IGtleVswXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlID0gY29udGV4dC5zdG9yZXNba2V5WzBdXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWFzID0ga2V5WzFdIHx8IGtleVswXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgc3RvcmUgJiYgIWlzRnVuY3Rpb24oc3RvcmUpICYmIHN0b3JlLnVuQmluZChjb21wb25lbnQsIGFsaWFzKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICByZXR1cm4gdGhpc1t1bk1vdW50S2V5XSAmJiB0aGlzW3VuTW91bnRLZXldLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiBpbml0aWFsT3V0cHV0cztcbiAgICB9XG4gICAgXG4gICAgc3RhdGljIGdldENvbnRleHQoIGNvbnRleHRzICkge1xuICAgICAgICBsZXQgc2tleSA9IGlzQXJyYXkoY29udGV4dHMpID8gY29udGV4dHMuc29ydCgoIGEsIGIgKSA9PiB7XG4gICAgICAgICAgICBpZiAoIGEuZmlyc3RuYW1lIDwgYi5maXJzdG5hbWUgKSByZXR1cm4gLTE7XG4gICAgICAgICAgICBpZiAoIGEuZmlyc3RuYW1lID4gYi5maXJzdG5hbWUgKSByZXR1cm4gMTtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9KS5qb2luKCc6OicpIDogY29udGV4dHM7XG4gICAgICAgIHJldHVybiBDb250ZXh0LmNvbnRleHRzW3NrZXldID0gQ29udGV4dC5jb250ZXh0c1tza2V5XSB8fCBuZXcgQ29udGV4dCh7fSwgeyBpZDogc2tleSB9KTtcbiAgICB9XG4gICAgXG4gICAgc3RhdGljIG1vdW50U3RvcmUoIG5hbWUsIGNvbnRleHQsIHN0b3JlLCBzdGF0ZSwgZGF0YXMgKSB7XG4gICAgICAgIGxldCBjdHgsIGNvbnRleHRNYXAgPSBjb250ZXh0Ll9fY29udGV4dDtcbiAgICAgICAgY29udGV4dE1hcFtuYW1lXSA9IHN0b3JlID0gc3RvcmUgfHwgY29udGV4dE1hcFtuYW1lXTtcbiAgICAgICAgaWYgKCAhc3RvcmUgKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiTm90IGEgbWFwcGFibGUgc3RvcmUgaXRlbSAnXCIgKyBuYW1lICsgJyAhIScsIHN0b3JlKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICggaXNGdW5jdGlvbihzdG9yZSkgKSB7XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgaWYgKCBzdG9yZSAmJiAoc3RvcmUuY29udGV4dHMgfHwgc3RvcmUuY29udGV4dCkgKSB7XG4gICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5nZXRDb250ZXh0KHN0b3JlLmNvbnRleHRzIHx8IFtzdG9yZS5jb250ZXh0XSk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY3R4LnJlZ2lzdGVyKHsgW25hbWVdOiBjdHguX19jb250ZXh0W25hbWVdIHx8IHN0b3JlIH0pO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGNvbnRleHRNYXBbbmFtZV0gPSBjdHhbbmFtZV0gPSBuZXcgc3RvcmUoY29udGV4dCwgeyBzdGF0ZSwgZGF0YXMgfSk7XG4gICAgICAgICAgICAgICAgY3R4Ll93YXRjaFN0b3JlKG5hbWUpO1xuICAgICAgICAgICAgICAgIHJldHVybiBjdHhbbmFtZV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgc3RvcmUgPSBjb250ZXh0TWFwW25hbWVdID0gbmV3IHN0b3JlKGNvbnRleHQsIHsgc3RhdGUsIGRhdGFzIH0pO1xuICAgICAgICAgICAgY29udGV4dE1hcFtuYW1lXS5yZWxpbmsobmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoIHN0YXRlICE9PSB1bmRlZmluZWQgJiYgZGF0YXMgPT09IHVuZGVmaW5lZCApXG4gICAgICAgICAgICAgICAgc3RvcmUuc2V0U3RhdGUoc3RhdGUpO1xuICAgICAgICAgICAgZWxzZSBpZiAoIHN0YXRlICE9PSB1bmRlZmluZWQgKVxuICAgICAgICAgICAgICAgIHN0b3JlLnN0YXRlID0gc3RhdGU7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmICggZGF0YXMgIT09IHVuZGVmaW5lZCApXG4gICAgICAgICAgICAgICAgc3RvcmUucHVzaChkYXRhcyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0b3JlO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBPdmVycmlkYWJsZSBtZXRob2QgdG8ga25vdyBpZiBhIHN0YXRlIGNoYW5nZSBzaG91bGQgYmUgcHJvcGFnIHRvIHRoZSBsaXN0ZW5pbmcgc3RvcmVzICYgY29tcG9uZW50c1xuICAgICAqIElmIHN0YXRpYyBmb2xsb3cgaXMgZGVmaW5lZCwgc2hvdWxkUHJvcGFnIHdpbGwgcmV0dXJuIHRydWUgaWYgYW55IG9mIHRoZSBcImZvbGxvd1wiIGtleXMgd2FzIHVwZGF0ZWRcbiAgICAgKiBJZiBub3QgaXQgd2lsbCBhbHdheXMgcmV0dXJuIHRydWVcbiAgICAgKi9cbiAgICBzaG91bGRQcm9wYWcoIG5EYXRhcyApIHtcbiAgICAgICAgdmFyIF9zdGF0aWMgPSB0aGlzLmNvbnN0cnVjdG9yLCByLFxuICAgICAgICAgICAgY0RhdGFzICA9IHRoaXMuZGF0YXM7XG4gICAgICAgIFxuICAgICAgICAvLyBpZiAoICFjU3RhdGUgKVxuICAgICAgICAvLyAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIGlmICggIWNEYXRhcyAmJiAoIV9zdGF0aWMuZm9sbG93IHx8ICFfc3RhdGljLmZvbGxvdy5sZW5ndGggfHxcbiAgICAgICAgICAgICAgICBfc3RhdGljLmZvbGxvdyAmJiBfc3RhdGljLmZvbGxvdy5yZWR1Y2UoKCByLCBpICkgPT4gKHIgfHwgbkRhdGFzICYmIG5EYXRhc1tpXSksIGZhbHNlKSkgKVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIFxuICAgICAgICBpZiAoIGlzQXJyYXkoX3N0YXRpYy5mb2xsb3cpIClcbiAgICAgICAgICAgIF9zdGF0aWMuZm9sbG93LmZvckVhY2goXG4gICAgICAgICAgICAgICAgKCBrZXkgKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHIgPSByIHx8IChuRGF0YXMgPyBjRGF0YXNba2V5XSAhPT0gbkRhdGFzW2tleV0gOiBjRGF0YXMgJiYgY0RhdGFzW2tleV0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgZWxzZSBpZiAoIF9zdGF0aWMuZm9sbG93ID09PSAnc3RyaWN0JyApXG4gICAgICAgICAgICByID0gbkRhdGFzID09PSBjRGF0YXM7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY0RhdGFzICYmIE9iamVjdC5rZXlzKGNEYXRhcykuZm9yRWFjaChcbiAgICAgICAgICAgICAgICAoIGtleSApID0+IHtcbiAgICAgICAgICAgICAgICAgICAgciA9IHIgfHwgKG5EYXRhcyA/IGNEYXRhc1trZXldICE9PSBuRGF0YXNba2V5XSA6IGNEYXRhcyAmJiBjRGF0YXNba2V5XSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgbkRhdGFzICYmIE9iamVjdC5rZXlzKG5EYXRhcykuZm9yRWFjaChcbiAgICAgICAgICAgICAgICAoIGtleSApID0+IHtcbiAgICAgICAgICAgICAgICAgICAgciA9IHIgfHwgKG5EYXRhcyA/IGNEYXRhc1trZXldICE9PSBuRGF0YXNba2V5XSA6IGNEYXRhcyAmJiBjRGF0YXNba2V5XSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gISFyO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBPdmVycmlkYWJsZSByZWZpbmVyIC8gcmVtYXBwZXJcbiAgICAgKiBJZiBzdGF0ZSBvciBsYXN0UHVibGljU3RhdGUgYXJlIHNpbXBsZSBoYXNoIG1hcHMgcmVmaW5lIHdpbGwgcmV0dXJuIHsuLi5kYXRhcywgLi4uc3RhdGV9XG4gICAgICogaWYgbm90IGl0IHdpbGwgcmV0dXJuIHRoZSBsYXN0IHByaXZhdGUgc3RhdGVcbiAgICAgKiBAcGFyYW0gZGF0YXNcbiAgICAgKiBAcGFyYW0gc3RhdGVcbiAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgKi9cbiAgICByZWZpbmUoIGRhdGFzLCBzdGF0ZSwgY2hhbmdlcyApIHtcbiAgICAgICAgc3RhdGUgPSBzdGF0ZSB8fCB0aGlzLnN0YXRlO1xuICAgICAgICBcbiAgICAgICAgaWYgKCAhZGF0YXMgfHwgZGF0YXMuX19wcm90b19fICE9PSBvYmpQcm90byB8fCBzdGF0ZS5fX3Byb3RvX18gIT09IG9ialByb3RvIClcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgcmV0dXJuIHsgLi4uZGF0YXMsIC4uLnN0YXRlIH1cbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogRGVib3VuY2UgdGhpcyBzdG9yZSBwcm9wYWdhdGlvbiAoICYgcmVkdWNpbmcgKVxuICAgICAqIEBwYXJhbSBjYlxuICAgICAqL1xuICAgIHN0YWJpbGl6ZSggY2IgKSB7XG4gICAgICAgIHZhciBtZSA9IHRoaXM7XG4gICAgICAgIGNiICYmIG1lLm9uY2UoJ3N0YWJsZScsIGNiKTtcbiAgICAgICAgdGhpcy5fc3RhYmxlICYmIHRoaXMuZW1pdCgndW5zdGFibGUnLCB0aGlzLnN0YXRlLCB0aGlzLmRhdGFzKTtcbiAgICAgICAgXG4gICAgICAgIG1lLl9zdGFibGUgPSBmYWxzZTtcbiAgICAgICAgXG4gICAgICAgIGlmICggdGhpcy5fc3RhYmlsaXplciApXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5fc3RhYmlsaXplcik7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9zdGFiaWxpemVyID0gc2V0VGltZW91dChcbiAgICAgICAgICAgIHRoaXMucHVzaC5iaW5kKFxuICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICAoKSA9PiB7Ly9AdG9kb1xuICAgICAgICAgICAgICAgICAgICAvLyBtZS5fc3RhYmxlICAgICAgID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc3RhYmlsaXplciA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMucmVsZWFzZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICkpO1xuICAgIH1cbiAgICBcbiAgICBkaXNwYXRjaCggZXZlbnQgKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogUHVsbCBzdG9yZXMgaW4gdGhlIHByaXZhdGUgc3RhdGVcbiAgICAgKiBAcGFyYW0gc3RvcmVzICB7QXJyYXl9IChwYXNzZWQgdG8gU3RvcmU6Om1hcCkgRXggOiBbXCJzZXNzaW9uXCIsIFwib3RoZXJOYW1lZFN0b3JlOmtleVwiLCBvdGhlclN0b3JlLmFzKFwib3RoZXJLZXlcIildXG4gICAgICovXG4gICAgcHVsbCggc3RvcmVzLCBkb1dhaXQsIG9yaWdpbiApIHtcbiAgICAgICAgbGV0IGluaXRpYWxPdXRwdXRzID0gU3RvcmUubWFwKHRoaXMsIHN0b3JlcywgdGhpcy5jb250ZXh0T2JqLCBvcmlnaW4sIHRydWUpO1xuICAgICAgICBpZiAoIGRvV2FpdCApIHtcbiAgICAgICAgICAgIHRoaXMud2FpdCgpO1xuICAgICAgICAgICAgc3RvcmVzLmZvckVhY2goKCBzICkgPT4gdGhpcy5jb250ZXh0W3NdICYmIHRoaXMud2FpdCh0aGlzLmNvbnRleHRbc10pKTtcbiAgICAgICAgICAgIHRoaXMucmVsZWFzZSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpbml0aWFsT3V0cHV0cztcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogQXBwbHkgcmVmaW5lL3JlbWFwIG9uIHRoZSBwcml2YXRlIHN0YXRlICYgcHVzaCB0aGUgcmVzdWx0aW5nIFwicHVibGljXCIgc3RhdGUgdG8gZm9sbG93ZXJzXG4gICAgICogQHBhcmFtIGNiXG4gICAgICovXG4gICAgcHVzaCggZGF0YXMsIGZvcmNlLCBjYiApIHtcbiAgICAgICAgY2IgPSBmb3JjZSA9PT0gdHJ1ZSA/IGNiIDogZm9yY2U7XG4gICAgICAgIGZvcmNlID0gZm9yY2UgPT09IHRydWU7XG4gICAgICAgIHZhciBpICAgICAgICAgPSAwLFxuICAgICAgICAgICAgbWUgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIG5leHRTdGF0ZSA9ICFkYXRhcyAmJiB7IC4uLnRoaXMuc3RhdGUsIC4uLnRoaXMuX2NoYW5nZXNTVyB9IHx8IHRoaXMuc3RhdGUsXG4gICAgICAgICAgICBuZXh0RGF0YXMgPSBkYXRhcyB8fFxuICAgICAgICAgICAgICAgICh0aGlzLmlzQ29tcGxldGUobmV4dFN0YXRlKSA/IHRoaXMucmVmaW5lKHRoaXMuZGF0YXMsIG5leHRTdGF0ZSwgdGhpcy5fY2hhbmdlc1NXKSA6IHRoaXMuZGF0YXMpO1xuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIHRoaXMuc3RhdGUgPSBuZXh0U3RhdGU7XG4gICAgICAgIGlmICggIWZvcmNlICYmXG4gICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgKCF0aGlzLmRhdGFzICYmIHRoaXMuZGF0YXMgPT09IG5leHREYXRhcykgfHwgIXRoaXMuc2hvdWxkUHJvcGFnKG5leHREYXRhcylcbiAgICAgICAgICAgIClcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBjYiAmJiBjYigpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0aGlzLmRhdGFzID0gbmV4dERhdGFzO1xuICAgICAgICB0aGlzLmxvY2tzKys7XG4gICAgICAgIHRoaXMucmVsZWFzZShjYik7XG4gICAgICAgIFxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBVcGRhdGUgdGhlIGN1cnJlbnQgcHJpdmF0ZSBzdGF0ZSAmIHB1c2ggaXQgb25jZSB0aGUgc3RvcmUgaXMgc3RhYmxlXG4gICAgICogQHBhcmFtIHBTdGF0ZVxuICAgICAqIEBwYXJhbSBjYlxuICAgICAqL1xuICAgIHNldFN0YXRlKCBwU3RhdGUsIGNiLCBzeW5jICkge1xuICAgICAgICB2YXIgaSAgICAgICA9IDAsIGNoYW5nZSxcbiAgICAgICAgICAgIGNoYW5nZXMgPSB0aGlzLl9jaGFuZ2VzU1cgPSB0aGlzLl9jaGFuZ2VzU1cgfHwge307XG4gICAgICAgIGZvciAoIHZhciBrIGluIHBTdGF0ZSApXG4gICAgICAgICAgICBpZiAoICF0aGlzLnN0YXRlIHx8IHBTdGF0ZS5oYXNPd25Qcm9wZXJ0eShrKVxuICAgICAgICAgICAgICAgICYmIChcbiAgICAgICAgICAgICAgICAgICAgcFN0YXRlW2tdICE9IHRoaXMuc3RhdGVba11cbiAgICAgICAgICAgICAgICAgICAgfHxcbiAgICAgICAgICAgICAgICAgICAgKHRoaXMuc3RhdGVba10gJiYgcFN0YXRlW2tdICYmIChwU3RhdGVba10uX3JldiAhPSB0aGlzLl9yZXZzW2tdKSkvLyByZXYvaGFzaCB1cGRhdGVcbiAgICAgICAgICAgICAgICApICkge1xuICAgICAgICAgICAgICAgIGNoYW5nZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5fcmV2c1trXSA9IHBTdGF0ZVtrXSAmJiBwU3RhdGVba10uX3JldiB8fCB0cnVlO1xuICAgICAgICAgICAgICAgIGNoYW5nZXNba10gPSBwU3RhdGVba107XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAoIHN5bmMgKSB7XG4gICAgICAgICAgICB0aGlzLnB1c2goKTtcbiAgICAgICAgICAgIGNiICYmIGNiKCk7XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmICggY2hhbmdlICkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhYmlsaXplKGNiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgY2IgJiYgY2IoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogVXBkYXRlIHRoZSBjdXJyZW50IHByaXZhdGUgc3RhdGUgJiBwdXNoIGl0IG9uY2UgdGhlIHN0b3JlIGlzIHN0YWJsZVxuICAgICAqIEBwYXJhbSBwU3RhdGVcbiAgICAgKiBAcGFyYW0gY2JcbiAgICAgKi9cbiAgICBzZXRTdGF0ZVN5bmMoIHBTdGF0ZSApIHtcbiAgICAgICAgdmFyIGkgICAgICAgPSAwLCBjaGFuZ2UsXG4gICAgICAgICAgICBjaGFuZ2VzID0gdGhpcy5fY2hhbmdlc1NXID0gdGhpcy5fY2hhbmdlc1NXIHx8IHt9O1xuICAgICAgICBmb3IgKCB2YXIgayBpbiBwU3RhdGUgKVxuICAgICAgICAgICAgaWYgKCAhdGhpcy5zdGF0ZSB8fCBwU3RhdGUuaGFzT3duUHJvcGVydHkoaylcbiAgICAgICAgICAgICAgICAmJiAoXG4gICAgICAgICAgICAgICAgICAgIHBTdGF0ZVtrXSAhPSB0aGlzLnN0YXRlW2tdXG4gICAgICAgICAgICAgICAgICAgIHx8XG4gICAgICAgICAgICAgICAgICAgICh0aGlzLnN0YXRlW2tdICYmIHBTdGF0ZVtrXSAmJiAocFN0YXRlW2tdLl9yZXYgIT0gdGhpcy5fcmV2c1trXSkpLy8gcmV2L2hhc2ggdXBkYXRlXG4gICAgICAgICAgICAgICAgKSApIHtcbiAgICAgICAgICAgICAgICBjaGFuZ2UgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuX3JldnNba10gPSBwU3RhdGVba10gJiYgcFN0YXRlW2tdLl9yZXYgfHwgdHJ1ZTtcbiAgICAgICAgICAgICAgICBjaGFuZ2VzW2tdID0gcFN0YXRlW2tdO1xuICAgICAgICAgICAgfVxuICAgICAgICB0aGlzLnB1c2goKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YXM7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIFJlcGxhY2UgdGhlIGN1cnJlbnQgcHJpdmF0ZSBzdGF0ZSAmIHB1c2ggaXQgb25jZSB0aGUgc3RvcmUgaXMgc3RhYmxlXG4gICAgICogQHBhcmFtIHBTdGF0ZVxuICAgICAqIEBwYXJhbSBjYlxuICAgICAqL1xuICAgIHJlcGxhY2VTdGF0ZSggcFN0YXRlLCBjYiApIHtcbiAgICAgICAgdmFyIGkgPSAwLCBtZSA9IHRoaXM7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBwU3RhdGU7XG4gICAgICAgIFxuICAgICAgICB0aGlzLnN0YWJpbGl6ZShjYik7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIGdldCBhIHN0b3JlLWtleSBwYWlyIGZvciBTdG9yZTo6bWFwXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICAgKiBAcmV0dXJucyB7e3N0b3JlOiBTdG9yZSwgbmFtZTogKn19XG4gICAgICovXG4gICAgYXMoIG5hbWUgKSB7XG4gICAgICAgIHJldHVybiB7IHN0b3JlOiB0aGlzLCBuYW1lIH07XG4gICAgfVxuICAgIFxuICAgIG9uKCBsaXN0cyApIHtcbiAgICAgICAgaWYgKCAhaXNTdHJpbmcobGlzdHMpICYmIGxpc3RzIClcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGxpc3RzKS5mb3JFYWNoKGsgPT4gc3VwZXIub24oaywgbGlzdHNba10pKTtcbiAgICAgICAgZWxzZSBzdXBlci5vbiguLi5hcmd1bWVudHMpO1xuICAgIH1cbiAgICBcbiAgICByZW1vdmVMaXN0ZW5lciggbGlzdHMgKSB7XG4gICAgICAgIGlmICggIWlzU3RyaW5nKGxpc3RzKSAmJiBsaXN0cyApXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhsaXN0cykuZm9yRWFjaChrID0+IHN1cGVyLnJlbW92ZUxpc3RlbmVyKGssIGxpc3RzW2tdKSk7XG4gICAgICAgIGVsc2Ugc3VwZXIucmVtb3ZlTGlzdGVuZXIoLi4uYXJndW1lbnRzKTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogcmVsaW5rIGJpbmRpbmdzICYgcmVxdWlyZXNcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgICAqIEByZXR1cm5zIHt7c3RvcmU6IFN0b3JlLCBuYW1lOiAqfX1cbiAgICAgKi9cbiAgICByZWxpbmsoIGZyb20gKSB7XG4gICAgICAgIGxldCBjb250ZXh0ID0gdGhpcy5jb250ZXh0T2JqLFxuICAgICAgICAgICAgX3N0YXRpYyA9IHRoaXMuY29uc3RydWN0b3I7XG4gICAgICAgIGlmICggX3N0YXRpYy51c2UgKSB7XG4gICAgICAgICAgICAvL3RvZG8gdW5saW5rXG4gICAgICAgICAgICB0aGlzLnB1bGwoX3N0YXRpYy51c2UsIGZhbHNlLCBmcm9tKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKCB0aGlzLl9yZXF1aXJlICkge1xuICAgICAgICAgICAgdGhpcy5fcmVxdWlyZS5mb3JFYWNoKFxuICAgICAgICAgICAgICAgIHN0b3JlID0+IChcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53YWl0KGNvbnRleHQuX19jb250ZXh0W3N0b3JlXSlcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIGlzIGNvbXBsZXRlIChhbGwgcmVxdWllcmVkIGtleXMgYXJlIGhlcmUpXG4gICAgICogQHJldHVybnMgYm9vbFxuICAgICAqL1xuICAgIGlzQ29tcGxldGUoIHN0YXRlID0gdGhpcy5zdGF0ZSApIHtcbiAgICAgICAgdmFyIF9zdGF0aWMgPSB0aGlzLmNvbnN0cnVjdG9yO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgIXRoaXMuX3JlcXVpcmVcbiAgICAgICAgICAgIHx8ICF0aGlzLl9yZXF1aXJlLmxlbmd0aFxuICAgICAgICAgICAgfHwgc3RhdGUgJiYgdGhpcy5fcmVxdWlyZS5yZWR1Y2UoXG4gICAgICAgICAgICAgICAgKCByLCBrZXkgKSA9PiAociAmJiBzdGF0ZVtrZXldKSxcbiAgICAgICAgICAgICAgICB0cnVlXG4gICAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIGlzIHN0YWJsZVxuICAgICAqIEByZXR1cm5zIGJvb2xcbiAgICAgKi9cbiAgICBpc1N0YWJsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0YWJsZTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogVW4gYmluZCB0aGlzIHN0b3JlIG9mZiB0aGUgZ2l2ZW4gY29tcG9uZW50LWtleVxuICAgICAqIEBwYXJhbSBvYmpcbiAgICAgKiBAcGFyYW0ga2V5XG4gICAgICogQHJldHVybnMge0FycmF5LjwqPn1cbiAgICAgKi9cbiAgICB1bkJpbmQoIG9iaiwga2V5ICkge1xuICAgICAgICB2YXIgZm9sbG93ZXJzID0gdGhpcy5fZm9sbG93ZXJzLFxuICAgICAgICAgICAgaSAgICAgICAgID0gZm9sbG93ZXJzICYmIGZvbGxvd2Vycy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggZm9sbG93ZXJzICYmIGktLSApXG4gICAgICAgICAgICBpZiAoIGZvbGxvd2Vyc1tpXVswXSA9PSBvYmogJiYgZm9sbG93ZXJzW2ldWzFdID09IGtleSApXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZvbGxvd2Vycy5zcGxpY2UoaSwgMSk7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIEJpbmQgdGhpcyBzdG9yZSBjaGFuZ2VzIHRvIHRoZSBnaXZlbiBjb21wb25lbnQta2V5XG4gICAgICogQHBhcmFtIG9iaiB7UmVhY3QuQ29tcG9uZW50fFN0b3JlfGZ1bmN0aW9uKVxuICAgICAqIEBwYXJhbSBrZXkge3N0cmluZ30gb3B0aW9uYWwga2V5IHdoZXJlIHRvIG1hcCB0aGUgcHVibGljIHN0YXRlXG4gICAgICovXG4gICAgYmluZCggb2JqLCBrZXksIHNldEluaXRpYWwgPSB0cnVlICkge1xuICAgICAgICB0aGlzLl9mb2xsb3dlcnMucHVzaChbb2JqLCBrZXldKTtcbiAgICAgICAgaWYgKCBzZXRJbml0aWFsICYmIHRoaXMuZGF0YXMgJiYgdGhpcy5fc3RhYmxlICkge1xuICAgICAgICAgICAgaWYgKCB0eXBlb2Ygb2JqICE9IFwiZnVuY3Rpb25cIiApIHtcbiAgICAgICAgICAgICAgICBpZiAoIGtleSApIG9iai5zZXRTdGF0ZSh7IFtrZXldOiB0aGlzLmRhdGFzIH0pO1xuICAgICAgICAgICAgICAgIGVsc2Ugb2JqLnNldFN0YXRlKHRoaXMuZGF0YXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgb2JqKHRoaXMuZGF0YXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIG9uY2UoJ3N0YWJsZScsIGNiKVxuICAgICAqIEBwYXJhbSBvYmoge1JlYWN0LkNvbXBvbmVudHxTdG9yZXxmdW5jdGlvbilcbiAgICAgKiBAcGFyYW0ga2V5IHtzdHJpbmd9IG9wdGlvbmFsIGtleSB3aGVyZSB0byBtYXAgdGhlIHB1YmxpYyBzdGF0ZVxuICAgICAqL1xuICAgIHRoZW4oIGNiICkge1xuICAgICAgICBpZiAoIHRoaXMuX3N0YWJsZSApXG4gICAgICAgICAgICByZXR1cm4gY2IobnVsbCwgdGhpcy5kYXRhcyk7XG4gICAgICAgIHRoaXMub25jZSgnc3RhYmxlJywgZSA9PiBjYihudWxsLCB0aGlzLmRhdGFzKSk7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIEFkZCBhIGxvY2sgc28gdGhlIHN0b3JlIHdpbGwgbm90IHByb3BhZyBpdCBzdGF0ZSB1bnRpbGwgcmVsZWFzZSgpIGlzIGNhbGxcbiAgICAgKiBAcGFyYW0gcHJldmlvdXMge1N0b3JlfG51bWJlcnxBcnJheX0gQG9wdGlvbmFsIHdmIHRvIHdhaXQsIHJlbGVhc2VzIHRvIHdhaXQgb3IgYXJyYXkgb2Ygc3R1ZmYgdG8gd2FpdFxuICAgICAqIEByZXR1cm5zIHtUYXNrRmxvd31cbiAgICAgKi9cbiAgICB3YWl0KCBwcmV2aW91cyApIHtcbiAgICAgICAgaWYgKCB0eXBlb2YgcHJldmlvdXMgPT0gXCJudW1iZXJcIiApXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5sb2NrcyArPSBwcmV2aW91cztcbiAgICAgICAgaWYgKCBpc0FycmF5KHByZXZpb3VzKSApXG4gICAgICAgICAgICByZXR1cm4gcHJldmlvdXMubWFwKHRoaXMud2FpdC5iaW5kKHRoaXMpKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX3N0YWJsZSAmJiB0aGlzLmVtaXQoJ3Vuc3RhYmxlJywgdGhpcy5zdGF0ZSwgdGhpcy5kYXRhcyk7XG4gICAgICAgIHRoaXMuX3N0YWJsZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmxvY2tzKys7XG4gICAgICAgIGlmICggcHJldmlvdXMgJiYgaXNGdW5jdGlvbihwcmV2aW91cy50aGVuKSApIHtcbiAgICAgICAgICAgIHByZXZpb3VzLnRoZW4odGhpcy5yZWxlYXNlLmJpbmQodGhpcywgbnVsbCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBEZWNyZWFzZSBsb2NrcyBmb3IgdGhpcyBzdG9yZSwgaWYgaXQgcmVhY2ggMCAmIGl0IGhhdmUgYSBwdWJsaWMgc3RhdGUsXG4gICAgICogaXQgd2lsbCBiZSBwcm9wYWdhdGVkIHRvIHRoZSBmb2xsb3dlcnMsXG4gICAgICogdGhlbiwgYWxsIHN0dWZmIHBhc3NlZCB0byBcInRoZW5cIiBjYWxsIGJhY2sgd2lsbCBiZSBleGVjIC8gcmVsZWFzZWRcbiAgICAgKiBAcGFyYW0gZGVzeW5jXG4gICAgICogQHJldHVybnMgeyp9XG4gICAgICovXG4gICAgcmVsZWFzZSggY2IgKSB7XG4gICAgICAgIHZhciBfc3RhdGljID0gdGhpcy5jb25zdHJ1Y3RvcjtcbiAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICBcbiAgICAgICAgaWYgKCB0aGlzLmxvY2tzID09IDAgKVxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlJlbGVhc2UgbW9yZSB0aGFuIGxvY2tpbmcgIVwiKTtcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICBpZiAoICEtLXRoaXMubG9ja3MgJiYgdGhpcy5kYXRhcyAmJiB0aGlzLmlzQ29tcGxldGUoKSApIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YWJsZSA9IHRydWU7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5fcmV2ID0gMSArICh0aGlzLl9yZXYgKyAxKSAlIDEwMDAwMDA7Ly9cbiAgICAgICAgICAgIGlmICggdGhpcy5fZm9sbG93ZXJzLmxlbmd0aCApXG4gICAgICAgICAgICAgICAgdGhpcy5fZm9sbG93ZXJzLmZvckVhY2goKCBmb2xsb3dlciApID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCAhdGhpcy5kYXRhcyApIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCB0eXBlb2YgZm9sbG93ZXJbMF0gPT0gXCJmdW5jdGlvblwiICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9sbG93ZXJbMF0odGhpcy5kYXRhcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjYiAmJiBpKys7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb2xsb3dlclswXS5zZXRTdGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZm9sbG93ZXJbMV0pID8geyBbZm9sbG93ZXJbMV1dOiB0aGlzLmRhdGFzIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB0aGlzLmRhdGFzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNiICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgKCkgPT4gKCEoLS1pKSAmJiBjYigpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIClcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5lbWl0KCdzdGFibGUnLCB0aGlzLmRhdGFzKTtcbiAgICAgICAgICAgIHRoaXMuZW1pdCgndXBkYXRlJywgdGhpcy5kYXRhcyk7XG4gICAgICAgICAgICBjYiAmJiBjYigpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBjYiAmJiB0aGlzLnRoZW4oY2IpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgXG4gICAgcmV0YWluKCByZWFzb24gKSB7XG4gICAgICAgIC8vICAgIGNvbnNvbGUubG9nKFwicmV0YWluXCIsIHRoaXMuX3VpZCwgcmVhc29uKTtcbiAgICAgICAgdGhpcy5fX3JldGFpbkxvY2tzLmFsbCsrO1xuICAgICAgICBpZiAoIHJlYXNvbiApIHtcbiAgICAgICAgICAgIHRoaXMuX19yZXRhaW5Mb2Nrc1tyZWFzb25dID0gdGhpcy5fX3JldGFpbkxvY2tzW3JlYXNvbl0gfHwgMDtcbiAgICAgICAgICAgIHRoaXMuX19yZXRhaW5Mb2Nrc1tyZWFzb25dKys7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgZGlzcG9zZSggcmVhc29uICkge1xuICAgICAgICBpZiAoIHJlYXNvbiApIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKCB0aGlzLl9fcmV0YWluTG9ja3NbcmVhc29uXSA9PSAwIClcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJEaXNwb3NlIG1vcmUgdGhhbiByZXRhaW5pbmcgIVwiKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5fX3JldGFpbkxvY2tzW3JlYXNvbl0gPSB0aGlzLl9fcmV0YWluTG9ja3NbcmVhc29uXSB8fCAwO1xuICAgICAgICAgICAgdGhpcy5fX3JldGFpbkxvY2tzW3JlYXNvbl0tLTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKCB0aGlzLl9fcmV0YWluTG9ja3MuYWxsID09IDAgKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRGlzcG9zZSBtb3JlIHRoYW4gcmV0YWluaW5nICFcIik7XG4gICAgICAgIFxuICAgICAgICBpZiAoICF0aGlzLl9fcmV0YWluTG9ja3MuYWxsICkge1xuICAgICAgICAgICAgaWYgKCB0aGlzLl9wZXJzaXN0ZW5jZVRtICkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2Rlc3Ryb3lUTSAmJiBjbGVhclRpbWVvdXQodGhpcy5fZGVzdHJveVRNKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9kZXN0cm95VE0gPSBzZXRUaW1lb3V0KFxuICAgICAgICAgICAgICAgICAgICBlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGhlbihzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgY29uc29sZS5sb2coXCJ3dGYgICBcIiwgcmVhc29uLCAhdGhpcy5fX3JldGFpbkxvY2tzLmFsbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIXRoaXMuX19yZXRhaW5Mb2Nrcy5hbGwgJiYgdGhpcy5kZXN0cm95KClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wZXJzaXN0ZW5jZVRtXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMudGhlbihzID0+ICghdGhpcy5fX3JldGFpbkxvY2tzLmFsbCAmJiB0aGlzLmRlc3Ryb3koKSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIC8vICBjb25zb2xlLmxvZyhcImRlc3Ryb3lcIiwgdGhpcy5fdWlkKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuZW1pdCgnZGVzdHJveScsIHRoaXMpO1xuICAgICAgICBpZiAoIHRoaXMuX3N0YWJpbGl6ZXIgKVxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX3N0YWJpbGl6ZXIpO1xuICAgIFxuICAgICAgICBpZiAoIHRoaXMuX2ZvbGxvd2Vycy5sZW5ndGggKVxuICAgICAgICAgICAgdGhpcy5fZm9sbG93ZXJzLmZvckVhY2goXG4gICAgICAgICAgICAgICAgKCBmb2xsb3dlciApID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCB0eXBlb2YgZm9sbG93ZXJbMF0gIT09IFwiZnVuY3Rpb25cIiApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICggZm9sbG93ZXJbMF0uc3RvcmVzIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgZm9sbG93ZXJbMF0uc3RvcmVzW2ZvbGxvd2VyWzFdXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgIHRoaXMuX2ZvbGxvd2Vycy5sZW5ndGggPSAwO1xuICAgICAgICB0aGlzLmRlYWQgPSB0cnVlO1xuICAgICAgICB0aGlzLl9yZXZzID0gdGhpcy5kYXRhcyA9IHRoaXMuc3RhdGUgPSB0aGlzLmNvbnRleHQgPSBudWxsO1xuICAgICAgICB0aGlzLnJlbW92ZUFsbExpc3RlbmVycygpO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvU3RvcmUuanMiXSwic291cmNlUm9vdCI6IiJ9