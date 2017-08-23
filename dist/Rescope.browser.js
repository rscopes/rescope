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
	
	var _Store = __webpack_require__(16);
	
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
	 * Copyright (c) 2017.  Caipi Labs.  All rights reserved.
	 *
	 * This File is part of Caipi. You can redistribute it and/or modify
	 * it under the terms of the GNU Affero General Public License as
	 * published by the Free Software Foundation, either version 3 of the
	 * License, or (at your option) any later version.
	 * This program is distributed in the hope that it will be useful,
	 * but WITHOUT ANY WARRANTY; without even the implied warranty of
	 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
	 * GNU Affero General Public License for more details.
	 * You should have received a copy of the GNU Affero General Public License
	 * along with this program. If not, see <http://www.gnu.org/licenses/>.
	 *  This project is dual licensed under AGPL and Commercial Licence.
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
	
	    _createClass(Context, null, [{
	        key: 'getContext',
	        value: function getContext(key) {
	            return openContexts[key] = openContexts[key] || new Context({});
	        }
	    }]);
	
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
	
	            //  if (this.__w8Locks.all == 0)
	            //    throw new Error("Release more than locking ! : "+reason);
	
	            this.__w8Locks.all--;
	            if (reason) {
	                this.__w8Locks[reason] = this.__w8Locks[reason] || 0;
	                this.__w8Locks[reason]--;
	            }
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
	
	            //  console.log("dispose", this._id, reason);
	            // if (this.__retainLocks.all == 0)
	            //   throw new Error("Dispose more than retaining ! : "+reason);
	
	            this.__retainLocks.all--;
	            if (reason) {
	                this.__retainLocks[reason] = this.__retainLocks[reason] || 0;
	                this.__retainLocks[reason]--;
	            }
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
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;;(function (factory) {
	  if (true)
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  else if (typeof exports === 'object' && !!exports && !exports.nodeType)
	    if (typeof module === 'object' && !!module && module.exports)
	      module.exports = factory();
	    else
	      exports['default'] = factory();
	  else if (typeof YUI === 'function' && YUI.add)
	    YUI.add('is-string', function (Y) { Y['default'] = factory(); }, '1.0.7');
	  else
	    String.isString = factory();
	})(function () {
	  var strToString  = ('').toString,
	      hasBind      = Function.prototype && Function.prototype.bind,
	      strToStrCall = hasBind && strToString.call.bind(strToString),
	      isString     = function (str) {
	        /*@cc_on
	          @if (@_jscript_version >= 5) @*/
	            try {
	                hasBind ? strToStrCall(str) : strToString.call(str);
	                return true;
	            } catch (e) {
	                return false;
	            }
	          /*@end
	        @*/
	      };
	
	  return function (str) {
	    return  typeof str === 'string' ||
	            str && typeof str === 'object' &&
	            /*@cc_on
	              @if (@_jscript_version < 5.5)
	                /^\s*function\s*String\(\)\s*{\s*\[native code\]\s*}\s*$/.test(str.constructor)
	              @else @*/
	                isString(str)
	              /*@end
	            @*/
	            || false;
	  };
	});


/***/ }),
/* 3 */
/***/ (function(module, exports) {

	module.exports = Array.isArray || function (arr) {
	  return Object.prototype.toString.call(arr) == '[object Array]';
	};


/***/ }),
/* 4 */
/***/ (function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.
	
	function EventEmitter() {
	  this._events = this._events || {};
	  this._maxListeners = this._maxListeners || undefined;
	}
	module.exports = EventEmitter;
	
	// Backwards-compat with node 0.10.x
	EventEmitter.EventEmitter = EventEmitter;
	
	EventEmitter.prototype._events = undefined;
	EventEmitter.prototype._maxListeners = undefined;
	
	// By default EventEmitters will print a warning if more than 10 listeners are
	// added to it. This is a useful default which helps finding memory leaks.
	EventEmitter.defaultMaxListeners = 10;
	
	// Obviously not all Emitters should be limited to 10. This function allows
	// that to be increased. Set to zero for unlimited.
	EventEmitter.prototype.setMaxListeners = function(n) {
	  if (!isNumber(n) || n < 0 || isNaN(n))
	    throw TypeError('n must be a positive number');
	  this._maxListeners = n;
	  return this;
	};
	
	EventEmitter.prototype.emit = function(type) {
	  var er, handler, len, args, i, listeners;
	
	  if (!this._events)
	    this._events = {};
	
	  // If there is no 'error' event listener then throw.
	  if (type === 'error') {
	    if (!this._events.error ||
	        (isObject(this._events.error) && !this._events.error.length)) {
	      er = arguments[1];
	      if (er instanceof Error) {
	        throw er; // Unhandled 'error' event
	      } else {
	        // At least give some kind of context to the user
	        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
	        err.context = er;
	        throw err;
	      }
	    }
	  }
	
	  handler = this._events[type];
	
	  if (isUndefined(handler))
	    return false;
	
	  if (isFunction(handler)) {
	    switch (arguments.length) {
	      // fast cases
	      case 1:
	        handler.call(this);
	        break;
	      case 2:
	        handler.call(this, arguments[1]);
	        break;
	      case 3:
	        handler.call(this, arguments[1], arguments[2]);
	        break;
	      // slower
	      default:
	        args = Array.prototype.slice.call(arguments, 1);
	        handler.apply(this, args);
	    }
	  } else if (isObject(handler)) {
	    args = Array.prototype.slice.call(arguments, 1);
	    listeners = handler.slice();
	    len = listeners.length;
	    for (i = 0; i < len; i++)
	      listeners[i].apply(this, args);
	  }
	
	  return true;
	};
	
	EventEmitter.prototype.addListener = function(type, listener) {
	  var m;
	
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');
	
	  if (!this._events)
	    this._events = {};
	
	  // To avoid recursion in the case that type === "newListener"! Before
	  // adding it to the listeners, first emit "newListener".
	  if (this._events.newListener)
	    this.emit('newListener', type,
	              isFunction(listener.listener) ?
	              listener.listener : listener);
	
	  if (!this._events[type])
	    // Optimize the case of one listener. Don't need the extra array object.
	    this._events[type] = listener;
	  else if (isObject(this._events[type]))
	    // If we've already got an array, just append.
	    this._events[type].push(listener);
	  else
	    // Adding the second element, need to change to array.
	    this._events[type] = [this._events[type], listener];
	
	  // Check for listener leak
	  if (isObject(this._events[type]) && !this._events[type].warned) {
	    if (!isUndefined(this._maxListeners)) {
	      m = this._maxListeners;
	    } else {
	      m = EventEmitter.defaultMaxListeners;
	    }
	
	    if (m && m > 0 && this._events[type].length > m) {
	      this._events[type].warned = true;
	      console.error('(node) warning: possible EventEmitter memory ' +
	                    'leak detected. %d listeners added. ' +
	                    'Use emitter.setMaxListeners() to increase limit.',
	                    this._events[type].length);
	      if (typeof console.trace === 'function') {
	        // not supported in IE 10
	        console.trace();
	      }
	    }
	  }
	
	  return this;
	};
	
	EventEmitter.prototype.on = EventEmitter.prototype.addListener;
	
	EventEmitter.prototype.once = function(type, listener) {
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');
	
	  var fired = false;
	
	  function g() {
	    this.removeListener(type, g);
	
	    if (!fired) {
	      fired = true;
	      listener.apply(this, arguments);
	    }
	  }
	
	  g.listener = listener;
	  this.on(type, g);
	
	  return this;
	};
	
	// emits a 'removeListener' event iff the listener was removed
	EventEmitter.prototype.removeListener = function(type, listener) {
	  var list, position, length, i;
	
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');
	
	  if (!this._events || !this._events[type])
	    return this;
	
	  list = this._events[type];
	  length = list.length;
	  position = -1;
	
	  if (list === listener ||
	      (isFunction(list.listener) && list.listener === listener)) {
	    delete this._events[type];
	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);
	
	  } else if (isObject(list)) {
	    for (i = length; i-- > 0;) {
	      if (list[i] === listener ||
	          (list[i].listener && list[i].listener === listener)) {
	        position = i;
	        break;
	      }
	    }
	
	    if (position < 0)
	      return this;
	
	    if (list.length === 1) {
	      list.length = 0;
	      delete this._events[type];
	    } else {
	      list.splice(position, 1);
	    }
	
	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);
	  }
	
	  return this;
	};
	
	EventEmitter.prototype.removeAllListeners = function(type) {
	  var key, listeners;
	
	  if (!this._events)
	    return this;
	
	  // not listening for removeListener, no need to emit
	  if (!this._events.removeListener) {
	    if (arguments.length === 0)
	      this._events = {};
	    else if (this._events[type])
	      delete this._events[type];
	    return this;
	  }
	
	  // emit removeListener for all listeners on all events
	  if (arguments.length === 0) {
	    for (key in this._events) {
	      if (key === 'removeListener') continue;
	      this.removeAllListeners(key);
	    }
	    this.removeAllListeners('removeListener');
	    this._events = {};
	    return this;
	  }
	
	  listeners = this._events[type];
	
	  if (isFunction(listeners)) {
	    this.removeListener(type, listeners);
	  } else if (listeners) {
	    // LIFO order
	    while (listeners.length)
	      this.removeListener(type, listeners[listeners.length - 1]);
	  }
	  delete this._events[type];
	
	  return this;
	};
	
	EventEmitter.prototype.listeners = function(type) {
	  var ret;
	  if (!this._events || !this._events[type])
	    ret = [];
	  else if (isFunction(this._events[type]))
	    ret = [this._events[type]];
	  else
	    ret = this._events[type].slice();
	  return ret;
	};
	
	EventEmitter.prototype.listenerCount = function(type) {
	  if (this._events) {
	    var evlistener = this._events[type];
	
	    if (isFunction(evlistener))
	      return 1;
	    else if (evlistener)
	      return evlistener.length;
	  }
	  return 0;
	};
	
	EventEmitter.listenerCount = function(emitter, type) {
	  return emitter.listenerCount(type);
	};
	
	function isFunction(arg) {
	  return typeof arg === 'function';
	}
	
	function isNumber(arg) {
	  return typeof arg === 'number';
	}
	
	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}
	
	function isUndefined(arg) {
	  return arg === void 0;
	}


/***/ }),
/* 5 */
/***/ (function(module, exports) {

	// if (typeof require !== 'undefined') {}
	
	var isFunction = function (functionToCheck) {
		var getType = {};
		return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
	};
	
	if (typeof module !== 'undefined' && module.exports) {
		module.exports = isFunction;
	}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	module.exports = __webpack_require__(7);


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var alphabet = __webpack_require__(8);
	var encode = __webpack_require__(10);
	var decode = __webpack_require__(12);
	var build = __webpack_require__(13);
	var isValid = __webpack_require__(14);
	
	// if you are using cluster or multiple servers use this to make each instance
	// has a unique value for worker
	// Note: I don't know if this is automatically set when using third
	// party cluster solutions such as pm2.
	var clusterWorkerId = __webpack_require__(15) || 0;
	
	/**
	 * Set the seed.
	 * Highly recommended if you don't want people to try to figure out your id schema.
	 * exposed as shortid.seed(int)
	 * @param seed Integer value to seed the random alphabet.  ALWAYS USE THE SAME SEED or you might get overlaps.
	 */
	function seed(seedValue) {
	    alphabet.seed(seedValue);
	    return module.exports;
	}
	
	/**
	 * Set the cluster worker or machine id
	 * exposed as shortid.worker(int)
	 * @param workerId worker must be positive integer.  Number less than 16 is recommended.
	 * returns shortid module so it can be chained.
	 */
	function worker(workerId) {
	    clusterWorkerId = workerId;
	    return module.exports;
	}
	
	/**
	 *
	 * sets new characters to use in the alphabet
	 * returns the shuffled alphabet
	 */
	function characters(newCharacters) {
	    if (newCharacters !== undefined) {
	        alphabet.characters(newCharacters);
	    }
	
	    return alphabet.shuffled();
	}
	
	/**
	 * Generate unique id
	 * Returns string id
	 */
	function generate() {
	  return build(clusterWorkerId);
	}
	
	// Export all other functions as properties of the generate function
	module.exports = generate;
	module.exports.generate = generate;
	module.exports.seed = seed;
	module.exports.worker = worker;
	module.exports.characters = characters;
	module.exports.decode = decode;
	module.exports.isValid = isValid;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var randomFromSeed = __webpack_require__(9);
	
	var ORIGINAL = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-';
	var alphabet;
	var previousSeed;
	
	var shuffled;
	
	function reset() {
	    shuffled = false;
	}
	
	function setCharacters(_alphabet_) {
	    if (!_alphabet_) {
	        if (alphabet !== ORIGINAL) {
	            alphabet = ORIGINAL;
	            reset();
	        }
	        return;
	    }
	
	    if (_alphabet_ === alphabet) {
	        return;
	    }
	
	    if (_alphabet_.length !== ORIGINAL.length) {
	        throw new Error('Custom alphabet for shortid must be ' + ORIGINAL.length + ' unique characters. You submitted ' + _alphabet_.length + ' characters: ' + _alphabet_);
	    }
	
	    var unique = _alphabet_.split('').filter(function(item, ind, arr){
	       return ind !== arr.lastIndexOf(item);
	    });
	
	    if (unique.length) {
	        throw new Error('Custom alphabet for shortid must be ' + ORIGINAL.length + ' unique characters. These characters were not unique: ' + unique.join(', '));
	    }
	
	    alphabet = _alphabet_;
	    reset();
	}
	
	function characters(_alphabet_) {
	    setCharacters(_alphabet_);
	    return alphabet;
	}
	
	function setSeed(seed) {
	    randomFromSeed.seed(seed);
	    if (previousSeed !== seed) {
	        reset();
	        previousSeed = seed;
	    }
	}
	
	function shuffle() {
	    if (!alphabet) {
	        setCharacters(ORIGINAL);
	    }
	
	    var sourceArray = alphabet.split('');
	    var targetArray = [];
	    var r = randomFromSeed.nextValue();
	    var characterIndex;
	
	    while (sourceArray.length > 0) {
	        r = randomFromSeed.nextValue();
	        characterIndex = Math.floor(r * sourceArray.length);
	        targetArray.push(sourceArray.splice(characterIndex, 1)[0]);
	    }
	    return targetArray.join('');
	}
	
	function getShuffled() {
	    if (shuffled) {
	        return shuffled;
	    }
	    shuffled = shuffle();
	    return shuffled;
	}
	
	/**
	 * lookup shuffled letter
	 * @param index
	 * @returns {string}
	 */
	function lookup(index) {
	    var alphabetShuffled = getShuffled();
	    return alphabetShuffled[index];
	}
	
	module.exports = {
	    characters: characters,
	    seed: setSeed,
	    lookup: lookup,
	    shuffled: getShuffled
	};


/***/ }),
/* 9 */
/***/ (function(module, exports) {

	'use strict';
	
	// Found this seed-based random generator somewhere
	// Based on The Central Randomizer 1.3 (C) 1997 by Paul Houle (houle@msc.cornell.edu)
	
	var seed = 1;
	
	/**
	 * return a random number based on a seed
	 * @param seed
	 * @returns {number}
	 */
	function getNextValue() {
	    seed = (seed * 9301 + 49297) % 233280;
	    return seed/(233280.0);
	}
	
	function setSeed(_seed_) {
	    seed = _seed_;
	}
	
	module.exports = {
	    nextValue: getNextValue,
	    seed: setSeed
	};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var randomByte = __webpack_require__(11);
	
	function encode(lookup, number) {
	    var loopCounter = 0;
	    var done;
	
	    var str = '';
	
	    while (!done) {
	        str = str + lookup( ( (number >> (4 * loopCounter)) & 0x0f ) | randomByte() );
	        done = number < (Math.pow(16, loopCounter + 1 ) );
	        loopCounter++;
	    }
	    return str;
	}
	
	module.exports = encode;


/***/ }),
/* 11 */
/***/ (function(module, exports) {

	'use strict';
	
	var crypto = typeof window === 'object' && (window.crypto || window.msCrypto); // IE 11 uses window.msCrypto
	
	function randomByte() {
	    if (!crypto || !crypto.getRandomValues) {
	        return Math.floor(Math.random() * 256) & 0x30;
	    }
	    var dest = new Uint8Array(1);
	    crypto.getRandomValues(dest);
	    return dest[0] & 0x30;
	}
	
	module.exports = randomByte;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var alphabet = __webpack_require__(8);
	
	/**
	 * Decode the id to get the version and worker
	 * Mainly for debugging and testing.
	 * @param id - the shortid-generated id.
	 */
	function decode(id) {
	    var characters = alphabet.shuffled();
	    return {
	        version: characters.indexOf(id.substr(0, 1)) & 0x0f,
	        worker: characters.indexOf(id.substr(1, 1)) & 0x0f
	    };
	}
	
	module.exports = decode;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var encode = __webpack_require__(10);
	var alphabet = __webpack_require__(8);
	
	// Ignore all milliseconds before a certain time to reduce the size of the date entropy without sacrificing uniqueness.
	// This number should be updated every year or so to keep the generated id short.
	// To regenerate `new Date() - 0` and bump the version. Always bump the version!
	var REDUCE_TIME = 1459707606518;
	
	// don't change unless we change the algos or REDUCE_TIME
	// must be an integer and less than 16
	var version = 6;
	
	// Counter is used when shortid is called multiple times in one second.
	var counter;
	
	// Remember the last time shortid was called in case counter is needed.
	var previousSeconds;
	
	/**
	 * Generate unique id
	 * Returns string id
	 */
	function build(clusterWorkerId) {
	
	    var str = '';
	
	    var seconds = Math.floor((Date.now() - REDUCE_TIME) * 0.001);
	
	    if (seconds === previousSeconds) {
	        counter++;
	    } else {
	        counter = 0;
	        previousSeconds = seconds;
	    }
	
	    str = str + encode(alphabet.lookup, version);
	    str = str + encode(alphabet.lookup, clusterWorkerId);
	    if (counter > 0) {
	        str = str + encode(alphabet.lookup, counter);
	    }
	    str = str + encode(alphabet.lookup, seconds);
	
	    return str;
	}
	
	module.exports = build;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var alphabet = __webpack_require__(8);
	
	function isShortId(id) {
	    if (!id || typeof id !== 'string' || id.length < 6 ) {
	        return false;
	    }
	
	    var characters = alphabet.characters();
	    var len = id.length;
	    for(var i = 0; i < len;i++) {
	        if (characters.indexOf(id[i]) === -1) {
	            return false;
	        }
	    }
	    return true;
	}
	
	module.exports = isShortId;


/***/ }),
/* 15 */
/***/ (function(module, exports) {

	'use strict';
	
	module.exports = 0;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
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
	
	    _createClass(Store, null, [{
	        key: 'as',
	
	
	        /**
	         * get a Builder-key pair for Store::map
	         * @param {string} name
	         * @returns {{store: Store, name: *}}
	         */
	        // default state
	        /**
	         *
	         * @type {number}
	         */
	        // overridable list of source stores
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
	
	        /**
	         * if retain goes to 0 :
	         * false to not destroy,
	         * 0 to sync auto destroy
	         * Ms to autodestroy after tm ms if no retain has been called
	         * @type {boolean|Int}
	         */
	        // overridable list of store that will allow push if updated
	
	    }, {
	        key: 'map',
	        value: function map(component, keys, context, origin) {
	            var _this2 = this;
	
	            var setInitial = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
	
	            var targetRevs = component._revs || {};
	            // var targetContext  = component.stores || (component.stores = new Context({}));
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
	                    store = context.__context[key[0]];
	                    alias = key[1] == '*' ? null : key[2] || key[0]; // allow binding props  ([*])
	                }
	
	                if (targetRevs[name]) return false; // ignore dbl uses for now
	                if (!store) {
	                    console.error("Not a mappable store item '" + name + "/" + alias + "' in " + origin + ' !!', store);
	                    return false;
	                } else if (isFunction(store)) {
	                    _this2.mountStore(name, context);
	
	                    context.__context[name].bind(component, alias, setInitial);
	                    // if ( context.__context[key[0]].state ) {// do sync push after constructor
	                    //     context.__context[key[0]].push();
	                    // }
	                } else {
	                    store.bind(component, alias, setInitial);
	                }
	                targetRevs[alias] = targetRevs[alias] || true;
	                // !targetContext.__context[alias] && targetContext.register({[alias] : context.__context[name]});
	                if (context.__context[name].hasOwnProperty('datas')) initialOutputs[alias] = context.datas[name];
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
	                        store = context.__context[name];
	                    } else {
	                        key = key.split(':');
	                        name = key[0];
	                        store = context.__context[key[0]];
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
	
	        /**
	         * Constructor, will build a rescope store
	         *
	         * (context, {require,use,refine,state, datas})
	         * (context)
	         *
	         * @param context {object} context where to find the other stores (default : static staticContext )
	         * @param keys {Array} (passed to Store::map) Ex : ["session", "otherNamedStore:key", otherStore.as("otherKey")]
	         */
	
	    }]);
	
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
	     * Overridable method to know if a state change should be propag to the listening stores & components
	     * If static follow is defined, shouldPropag will return true if any of the "follow" keys was updated
	     * If not it will always return true
	     */
	
	
	    _createClass(Store, [{
	        key: 'shouldPropag',
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
	            var _this3 = this;
	
	            var me = this;
	            cb && me.once('stable', cb);
	            this._stable && this.emit('unstable', this.state, this.datas);
	
	            me._stable = false;
	
	            if (this._stabilizer) clearTimeout(this._stabilizer);
	
	            this._stabilizer = setTimeout(this.push.bind(this, null, function () {
	                //@todo
	                // me._stable       = true;
	                _this3._stabilizer = null;
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
	            var _this4 = this;
	
	            var initialOutputs = Store.map(this, stores, this.contextObj, origin, true);
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
	            var _this5 = this;
	
	            if (!isString(lists) && lists) Object.keys(lists).forEach(function (k) {
	                return _get(Store.prototype.__proto__ || Object.getPrototypeOf(Store.prototype), 'on', _this5).call(_this5, k, lists[k]);
	            });else _get(Store.prototype.__proto__ || Object.getPrototypeOf(Store.prototype), 'on', this).apply(this, arguments);
	        }
	    }, {
	        key: 'removeListener',
	        value: function removeListener(lists) {
	            var _this6 = this;
	
	            if (!isString(lists) && lists) Object.keys(lists).forEach(function (k) {
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
	            var _this8 = this;
	
	            if (this._stable) return cb(null, this.datas);
	            this.once('stable', function (e) {
	                return cb(null, _this8.datas);
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
	            var _this9 = this;
	
	            var _static = this.constructor;
	            var i = 0;
	
	            //   if (this.locks == 0)
	            //     throw new Error("Release more than locking !");
	
	
	            if (! --this.locks && this.datas && this.isComplete()) {
	                this._stable = true;
	
	                this._rev = 1 + (this._rev + 1) % 1000000; //
	                if (this._followers.length) this._followers.forEach(function (follower) {
	                    if (!_this9.datas) return;
	                    if (typeof follower[0] == "function") {
	                        follower[0](_this9.datas);
	                    } else {
	                        // cb && i++;
	                        follower[0].setState(follower[1] ? _defineProperty({}, follower[1], _this9.datas) : _this9.datas
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
	            var _this10 = this;
	
	            //console.log("dispose", this._uid, reason);
	            // if (this.__retainLocks.all == 0)
	            //   throw new Error("Dispose more than retaining ! : "+reason);
	            this.__retainLocks.all--;
	            if (reason) {
	                this.__retainLocks[reason] = this.__retainLocks[reason] || 0;
	                this.__retainLocks[reason]--;
	            }
	            if (!this.__retainLocks.all) {
	                if (this._persistenceTm) {
	                    this._destroyTM && clearTimeout(this._destroyTM);
	                    this._destroyTM = setTimeout(function (e) {
	                        _this10.then(function (s) {
	                            //  console.log("wtf   ", reason, !this.__retainLocks.all);
	
	                            !_this10.__retainLocks.all && _this10.destroy();
	                        });
	                    }, this._persistenceTm);
	                } else {
	                    this.then(function (s) {
	                        return !_this10.__retainLocks.all && _this10.destroy();
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
	            this._followers.length = 0;
	            this.dead = true;
	            this._revs = this.datas = this.state = this.context = null;
	            this.removeAllListeners();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgY2FhMzg5NjQxOTBmZjE2ZTk1MzIiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Jlc2NvcGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9pc3N0cmluZy9pc1N0cmluZy51bWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9pc2FycmF5L2luZGV4LmpzIiwid2VicGFjazovLy8uL34vZXZlbnRzL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2lzZnVuY3Rpb24vbGliL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vfi9zaG9ydGlkL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vc2hvcnRpZC9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9zaG9ydGlkL2xpYi9hbHBoYWJldC5qcyIsIndlYnBhY2s6Ly8vLi9+L3Nob3J0aWQvbGliL3JhbmRvbS9yYW5kb20tZnJvbS1zZWVkLmpzIiwid2VicGFjazovLy8uL34vc2hvcnRpZC9saWIvZW5jb2RlLmpzIiwid2VicGFjazovLy8uL34vc2hvcnRpZC9saWIvcmFuZG9tL3JhbmRvbS1ieXRlLWJyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9zaG9ydGlkL2xpYi9kZWNvZGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9zaG9ydGlkL2xpYi9idWlsZC5qcyIsIndlYnBhY2s6Ly8vLi9+L3Nob3J0aWQvbGliL2lzLXZhbGlkLmpzIiwid2VicGFjazovLy8uL34vc2hvcnRpZC9saWIvdXRpbC9jbHVzdGVyLXdvcmtlci1pZC1icm93c2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9TdG9yZS5qcyJdLCJuYW1lcyI6WyJTdG9yZSIsIkNvbnRleHQiLCJpc1N0cmluZyIsInJlcXVpcmUiLCJpc0FycmF5IiwiRXZlbnRFbWl0dGVyIiwiaXNGdW5jdGlvbiIsInNob3J0aWQiLCJfX3Byb3RvX19wdXNoIiwidGFyZ2V0IiwiaWQiLCJwYXJlbnQiLCJoZXJlIiwicHJvdG90eXBlIiwib3BlbkNvbnRleHRzIiwia2V5IiwiY3R4Iiwic3RhdGUiLCJkYXRhcyIsIm5hbWUiLCJkZWZhdWx0TWF4TGlzdGVuZXJzIiwicGVyc2lzdGVuY2VUbSIsImF1dG9EZXN0cm95IiwiX21heExpc3RlbmVycyIsImNvbnN0cnVjdG9yIiwiX2lkIiwiZ2VuZXJhdGUiLCJfaXNMb2NhbElkIiwiX3BlcnNpc3RlbmNlVG0iLCJzdG9yZXMiLCJfYWRkQ2hpbGQiLCJzb3VyY2VzIiwiX2NoaWxkQ29udGV4dHMiLCJfX3JldGFpbkxvY2tzIiwiYWxsIiwiX193OExvY2tzIiwiX19saXN0ZW5pbmciLCJfX2NvbnRleHQiLCJfX21peGVkIiwiX19taXhlZExpc3QiLCJfZm9sbG93ZXJzIiwicmV0YWluIiwiX3N0YWJsZSIsIndhaXQiLCJvbiIsIl9fcGFyZW50TGlzdCIsInJlbGVhc2UiLCJfcHJvcGFnIiwicmVnaXN0ZXIiLCJzZXRUaW1lb3V0IiwiZGlzcG9zZSIsImZvckVhY2giLCJfbW91bnQiLCJrIiwiYXJndW1lbnRzIiwicmVkdWNlIiwibW91bnRlZCIsIm1vdW50U3RvcmUiLCJfd2F0Y2hTdG9yZSIsImlzU3RhYmxlIiwicHJvcGFnIiwidGFyZ2V0Q3R4IiwibGlzdHMiLCJwdXNoIiwicmVsaW5rIiwicmF3Q3R4IiwiT2JqZWN0Iiwia2V5cyIsInNpbmdsZXRvbiIsInNyY0N0eCIsImV4dGVybmFsIiwibGN0eCIsIl9zdG9yZXMiLCJjb25zb2xlIiwid2FybiIsImRlZmluZVByb3BlcnR5IiwiZ2V0IiwiX3N0YXRlIiwic2V0IiwidiIsIl9kYXRhcyIsInVuZGVmaW5lZCIsIm9iaiIsImFzIiwic2V0SW5pdGlhbCIsImxhc3RSZXZzIiwicmV2cyIsIm1vdW50IiwiZ2V0VXBkYXRlcyIsInNldFN0YXRlIiwiZm9sbG93ZXJzIiwiaSIsImxlbmd0aCIsInNwbGljZSIsInRvIiwiYmluZCIsIm91dHB1dCIsInVwZGF0ZWQiLCJoYXNPd25Qcm9wZXJ0eSIsIl9yZXYiLCJmbGFnc19zdGF0ZXMiLCJmbGFnc19kYXRhcyIsIl9mbGFnc19zdGF0ZXMiLCJfZmxhZ3NfZGF0YXMiLCJmbGFncyIsInIiLCJmbGFnIiwidGVzdCIsImNiIiwib25jZSIsInF1aWV0IiwicmVhc29uIiwiZW1pdCIsIl9zdGFiaWxpemVyVE0iLCJjbGVhclRpbWVvdXQiLCJfcHJvcGFnVE0iLCJjaGlsZHMiLCJfZ2V0QWxsQ2hpbGRzIiwiaW5kZXhPZiIsIl9kZXN0cm95VE0iLCJ0aGVuIiwiZGVzdHJveSIsInJlbW92ZUxpc3RlbmVyIiwiY29udGV4dE9iaiIsInNoaWZ0IiwiX3JtQ2hpbGQiLCJjb250ZXh0cyIsIm9ialByb3RvIiwiZ2V0UHJvdG90eXBlT2YiLCJzdG9yZSIsImNvbXBvbmVudCIsImNvbnRleHQiLCJvcmlnaW4iLCJ0YXJnZXRSZXZzIiwiX3JldnMiLCJpbml0aWFsT3V0cHV0cyIsInN0YXRpY0NvbnRleHQiLCJmaWx0ZXIiLCJlcnJvciIsImFsaWFzIiwiZGVmYXVsdE5hbWUiLCJtYXRjaCIsIm1peGVkQ1dVbm1vdW50IiwidW5Nb3VudEtleSIsImlzUmVhY3RDb21wb25lbnQiLCJtYXAiLCJzcGxpdCIsInVuQmluZCIsImFwcGx5Iiwic2tleSIsInNvcnQiLCJhIiwiYiIsImZpcnN0bmFtZSIsImpvaW4iLCJjb250ZXh0TWFwIiwiZ2V0Q29udGV4dCIsImFyZ3oiLCJfc3RhdGljIiwiY2ZnIiwid2F0Y2hzIiwidXNlIiwicmVmaW5lIiwiaW5pdGlhbFN0YXRlIiwiX3VpZCIsImxvY2tzIiwiX29uU3RhYmlsaXplIiwiX3VzZSIsIl9yZXF1aXJlIiwicHVsbCIsImlzQ29tcGxldGUiLCJuRGF0YXMiLCJjRGF0YXMiLCJmb2xsb3ciLCJjaGFuZ2VzIiwiX19wcm90b19fIiwibWUiLCJfc3RhYmlsaXplciIsImV2ZW50IiwiZG9XYWl0IiwicyIsImZvcmNlIiwibmV4dFN0YXRlIiwiX2NoYW5nZXNTVyIsIm5leHREYXRhcyIsInNob3VsZFByb3BhZyIsInBTdGF0ZSIsInN5bmMiLCJjaGFuZ2UiLCJzdGFiaWxpemUiLCJmcm9tIiwicHJldmlvdXMiLCJmb2xsb3dlciIsImRlYWQiLCJyZW1vdmVBbGxMaXN0ZW5lcnMiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDNUJBOzs7O0FBQ0E7Ozs7OztBQVhBOzs7Ozs7Ozs7O0FBYUEsbUJBQVFBLEtBQVI7O21CQUVlLEVBQUNBLHNCQUFELEVBQVFDLDBCQUFSLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUJBOzs7Ozs7O0FBUUEsS0FBSUMsV0FBVyxtQkFBQUMsQ0FBUSxDQUFSLENBQWY7QUFBQSxLQUNJQyxVQUFVLG1CQUFBRCxDQUFRLENBQVIsQ0FEZDtBQUFBLEtBRUlFLGVBQWUsbUJBQUFGLENBQVEsQ0FBUixDQUZuQjtBQUFBLEtBR0lHLGFBQWEsbUJBQUFILENBQVEsQ0FBUixDQUhqQjtBQUFBLEtBSU1JLFVBQVUsbUJBQUFKLENBQVEsQ0FBUixDQUpoQjtBQUFBLEtBS01LLGdCQUFnQixTQUFoQkEsYUFBZ0IsQ0FBQ0MsTUFBRCxFQUFTQyxFQUFULEVBQWFDLE1BQWIsRUFBd0I7QUFDdEMsU0FBSUMsMkJBQ0NGLEVBREQsRUFDTSxZQUFZLENBQ2pCLENBRkQsQ0FBSjtBQUlBRSxVQUFLRixFQUFMLEVBQVNHLFNBQVQsR0FBcUJGLFNBQVMsSUFBSUEsT0FBTyxNQUFNRCxFQUFiLENBQUosRUFBVCxHQUFrQ0QsT0FBT0MsRUFBUCxLQUFjLEVBQXJFO0FBQ0FELFlBQU9DLEVBQVAsSUFBYSxJQUFJRSxLQUFLRixFQUFMLENBQUosRUFBYjtBQUNBRCxZQUFPLE1BQU1DLEVBQWIsSUFBbUJFLEtBQUtGLEVB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFHO0FBQ0gscUJBQW9CLFNBQVM7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7QUM3U0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEU7Ozs7OztBQ1RBO0FBQ0E7Ozs7Ozs7QUNEQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ2hFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ2pHQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ3hCQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUNsQkE7O0FBRUEsK0VBQThFOztBQUU5RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDYkE7QUFDQTs7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N0YsY0FSUyxDQUFsQjtBQVVILGtCQVpELE1BWU87QUFDSCwwQkFBSzRGLElBQUwsQ0FBVTtBQUFBLGdDQUFNLENBQUMsUUFBS3ZGLGFBQUwsQ0FBbUJDLEdBQXBCLElBQTJCLFFBQUt1RixPQUFMLEVBQWpDO0FBQUEsc0JBQVY7QUFDSDtBQUNKO0FBQ0o7OzttQ0FFUztBQUNSOztBQUVFLGtCQUFLVCxJQUFMLENBQVUsU0FBVixFQUFxQixJQUFyQjtBQUNBLGlCQUFLLEtBQUtpRSxXQUFWLEVBQ0kvRCxhQUFhLEtBQUsrRCxXQUFsQjtBQUNKLGtCQUFLekksVUFBTCxDQUFnQm9ELE1BQWhCLEdBQXlCLENBQXpCO0FBQ0Esa0JBQUtxRyxJQUFMLEdBQXlCLElBQXpCO0FBQ0Esa0JBQUszRCxLQUFMLEdBQXlCLEtBQUtwSCxLQUFMLEdBQWEsS0FBS0QsS0FBTCxHQUFhLEtBQUtrSCxPQUFMLEdBQWUsSUFBbEU7QUFDQSxrQkFBSytELGtCQUFMO0FBQ0g7Ozs7R0FycUI4QjdMLFk7O0FBQWRMLE0sQ0FFVmlLLEcsR0FBNkIsRTtBQUZuQmpLLE0sQ0FLVndJLGEsR0FBNkIsSUFBSXZJLE9BQUosQ0FBWSxFQUFaLEVBQWdCLEVBQUNTLElBQUssUUFBTixFQUFoQixDO0FBTG5CVixNLENBTVZtSyxZLEdBQTZCbEYsUztBQU5uQmpGLE0sQ0FXSG9CLG1CLEdBQXNCLEc7QUFYbkJwQixNLENBbUJIcUIsYSxHQUFzQixLO21CQW5CbkJyQixLIiwiZmlsZSI6ImRpc3QvUmVzY29wZS5icm93c2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGNhYTM4OTY0MTkwZmYxNmU5NTMyIiwiLypcclxuICogQ29weXJpZ2h0IChjKSAgMjAxNyBDYWlwaSBMYWJzIC5cclxuICpcclxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuICpcclxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcbiAqXHJcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxyXG4gKi9cclxuXHJcbmltcG9ydCBDb250ZXh0IGZyb20gXCIuL0NvbnRleHRcIjtcclxuaW1wb3J0IFN0b3JlIGZyb20gXCIuL1N0b3JlXCI7XHJcblxyXG5Db250ZXh0LlN0b3JlID0gU3RvcmU7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7U3RvcmUsIENvbnRleHR9O1xyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1Jlc2NvcGUuanMiLCIvKlxyXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTcuICBDYWlwaSBMYWJzLiAgQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICpcclxuICogVGhpcyBGaWxlIGlzIHBhcnQgb2YgQ2FpcGkuIFlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcclxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXNcclxuICogcHVibGlzaGVkIGJ5IHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlXHJcbiAqIExpY2Vuc2UsIG9yIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXHJcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxyXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxyXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXHJcbiAqIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxyXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcclxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cclxuICogIFRoaXMgcHJvamVjdCBpcyBkdWFsIGxpY2Vuc2VkIHVuZGVyIEFHUEwgYW5kIENvbW1lcmNpYWwgTGljZW5jZS5cclxuICpcclxuICogQGF1dGhvciA6IE5hdGhhbmFlbCBCcmF1blxyXG4gKiBAY29udGFjdCA6IGNhaXBpbGFic0BnbWFpbC5jb21cclxuICovXHJcblxyXG4vKipcclxuICogQGF1dGhvciBOYXRoYW5hZWwgQlJBVU5cclxuICpcclxuICogRGF0ZTogMTMvMDgvMjAxN1xyXG4gKiBUaW1lOiAxNzoxNVxyXG4gKi9cclxuXHJcblxyXG52YXIgaXNTdHJpbmcgPSByZXF1aXJlKCdpc3N0cmluZycpLFxyXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJ2lzYXJyYXknKSxcclxuICAgIEV2ZW50RW1pdHRlciA9IHJlcXVpcmUoJ2V2ZW50cycpLFxyXG4gICAgaXNGdW5jdGlvbiA9IHJlcXVpcmUoJ2lzZnVuY3Rpb24nKVxyXG4gICAgLCBzaG9ydGlkID0gcmVxdWlyZSgnc2hvcnRpZCcpXHJcbiAgICAsIF9fcHJvdG9fX3B1c2ggPSAodGFyZ2V0LCBpZCwgcGFyZW50KSA9PiB7XHJcbiAgICAgICAgbGV0IGhlcmUgPSB7XHJcbiAgICAgICAgICAgIFtpZF06IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgaGVyZVtpZF0ucHJvdG90eXBlID0gcGFyZW50ID8gbmV3IHBhcmVudFtcIl9cIiArIGlkXSgpIDogdGFyZ2V0W2lkXSB8fCB7fTtcclxuICAgICAgICB0YXJnZXRbaWRdID0gbmV3IGhlcmVbaWRdKCk7XHJcbiAgICAgICAgdGFyZ2V0WydfJyArIGlkXSA9IGhlcmVbaWRdO1xyXG4gICAgfTtcclxuXHJcbmxldCBvcGVuQ29udGV4dHMgPSB7fTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250ZXh0IGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcclxuICAgIHN0YXRpYyBjb250ZXh0cyA9IG9wZW5Db250ZXh0cztcclxuICAgIHN0YXRpYyBTdG9yZSA9IG51bGw7XHJcbiAgICBzdGF0aWMgZGVmYXVsdE1heExpc3RlbmVycyA9IDEwMDtcclxuICAgIHN0YXRpYyBwZXJzaXN0ZW5jZVRtID0gMDtcclxuXHJcbiAgICBzdGF0aWMgZ2V0Q29udGV4dChrZXkpIHtcclxuICAgICAgICByZXR1cm4gb3BlbkNvbnRleHRzW2tleV0gPSBvcGVuQ29udGV4dHNba2V5XSB8fCBuZXcgQ29udGV4dCh7fSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGN0eCwge2lkLCBwYXJlbnQsIHN0YXRlLCBkYXRhcywgbmFtZSwgZGVmYXVsdE1heExpc3RlbmVycywgcGVyc2lzdGVuY2VUbSwgYXV0b0Rlc3Ryb3l9ID0ge30pIHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICB0aGlzLl9tYXhMaXN0ZW5lcnMgPSBkZWZhdWx0TWF4TGlzdGVuZXJzIHx8IHRoaXMuY29uc3RydWN0b3IuZGVmYXVsdE1heExpc3RlbmVycztcclxuICAgICAgICB0aGlzLl9pZCA9IGlkID0gaWQgfHwgKFwiX19fX19cIiArIHNob3J0aWQuZ2VuZXJhdGUoKSk7XHJcblxyXG4gICAgICAgIGlmIChvcGVuQ29udGV4dHNbaWRdKSB7XHJcbiAgICAgICAgICAgIC8vIG9wZW5Db250ZXh0c1tpZF0ucmVnaXN0ZXIoY3R4KTtcclxuICAgICAgICAgICAgcmV0dXJuIG9wZW5Db250ZXh0c1tpZF1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG9wZW5Db250ZXh0c1tpZF0gPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuX2lzTG9jYWxJZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5fcGVyc2lzdGVuY2VUbSA9IHBlcnNpc3RlbmNlVG0gfHwgdGhpcy5jb25zdHJ1Y3Rvci5wZXJzaXN0ZW5jZVRtO1xyXG5cclxuICAgICAgICB0aGlzLnN0b3JlcyA9IHt9O1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7fTtcclxuICAgICAgICB0aGlzLmRhdGFzID0ge307XHJcbiAgICAgICAgX19wcm90b19fcHVzaCh0aGlzLCAnc3RvcmVzJywgcGFyZW50KTtcclxuICAgICAgICBfX3Byb3RvX19wdXNoKHRoaXMsICdzdGF0ZScsIHBhcmVudCk7XHJcbiAgICAgICAgX19wcm90b19fcHVzaCh0aGlzLCAnZGF0YXMnLCBwYXJlbnQpO1xyXG4gICAgICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xyXG5cclxuICAgICAgICBpZiAocGFyZW50KSB7XHJcbiAgICAgICAgICAgIHBhcmVudC5fYWRkQ2hpbGQodGhpcyk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zb3VyY2VzID0gW107XHJcbiAgICAgICAgdGhpcy5fY2hpbGRDb250ZXh0cyA9IFtdO1xyXG5cclxuICAgICAgICB0aGlzLl9fcmV0YWluTG9ja3MgPSB7YWxsOiAwfTtcclxuICAgICAgICB0aGlzLl9fdzhMb2NrcyA9IHthbGw6IDF9O1xyXG4gICAgICAgIHRoaXMuX19saXN0ZW5pbmcgPSB7fTtcclxuICAgICAgICB0aGlzLl9fY29udGV4dCA9IHt9O1xyXG4gICAgICAgIHRoaXMuX19taXhlZCA9IFtdO1xyXG4gICAgICAgIHRoaXMuX19taXhlZExpc3QgPSBbXTtcclxuICAgICAgICB0aGlzLl9mb2xsb3dlcnMgPSBbXTtcclxuICAgICAgICBpZiAocGFyZW50KSB7XHJcbiAgICAgICAgICAgIHBhcmVudC5yZXRhaW4oXCJpc015UGFyZW50XCIpO1xyXG4gICAgICAgICAgICAhcGFyZW50Ll9zdGFibGUgJiYgdGhpcy53YWl0KFwiaXNNeVBhcmVudFwiKTtcclxuICAgICAgICAgICAgcGFyZW50Lm9uKHRoaXMuX19wYXJlbnRMaXN0ID0ge1xyXG4gICAgICAgICAgICAgICAgJ3N0YWJsZSc6IHMgPT4gdGhpcy5yZWxlYXNlKFwiaXNNeVBhcmVudFwiKSxcclxuICAgICAgICAgICAgICAgICd1bnN0YWJsZSc6IHMgPT4gdGhpcy53YWl0KFwiaXNNeVBhcmVudFwiKSxcclxuICAgICAgICAgICAgICAgICd1cGRhdGUnOiBzID0+IHRoaXMuX3Byb3BhZygpXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAvLyB0aGlzLnJlZ2lzdGVyKHBhcmVudC5fX2NvbnRleHQsIHN0YXRlLCBkYXRhcyk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgdGhpcy5yZWdpc3RlcihjdHgsIHN0YXRlLCBkYXRhcyk7XHJcbiAgICAgICAgdGhpcy5fX3c4TG9ja3MuYWxsLS07XHJcbiAgICAgICAgdGhpcy5fc3RhYmxlID0gIXRoaXMuX193OExvY2tzLmFsbDtcclxuXHJcbiAgICAgICAgaWYgKGF1dG9EZXN0cm95KVxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KFxyXG4gICAgICAgICAgICAgICAgdG0gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmV0YWluKFwiYXV0b0Rlc3Ryb3lcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNwb3NlKFwiYXV0b0Rlc3Ryb3lcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBtb3VudChpZCwgc3RhdGUsIGRhdGFzKSB7XHJcbiAgICAgICAgaWYgKGlzQXJyYXkoaWQpKSB7XHJcbiAgICAgICAgICAgIGlkLmZvckVhY2goayA9PiB0aGlzLl9tb3VudChrLCBzdGF0ZSAmJiBzdGF0ZVtrXSwgZGF0YXMgJiYgZGF0YXNba10pKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9tb3VudCguLi5hcmd1bWVudHMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBfbW91bnQoaWQsIHN0YXRlLCBkYXRhcykge1xyXG4gICAgICAgIGlmICghdGhpcy5fX2NvbnRleHRbaWRdKSB7Ly9hc2sgbWl4ZWQgfHwgcGFyZW50XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9fbWl4ZWQucmVkdWNlKChtb3VudGVkLCBjdHgpID0+IChtb3VudGVkIHx8IGN0eC5fbW91bnQoaWQsIHN0YXRlLCBkYXRhcykpLCBmYWxzZSkgfHxcclxuICAgICAgICAgICAgICAgICF0aGlzLnBhcmVudClcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyZW50Ll9tb3VudCguLi5hcmd1bWVudHMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNvbnN0cnVjdG9yLlN0b3JlLm1vdW50U3RvcmUoaWQsIHRoaXMsIG51bGwsIHN0YXRlLCBkYXRhcyk7XHJcbiAgICAgICAgdGhpcy5fd2F0Y2hTdG9yZShpZCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX19jb250ZXh0W2lkXTtcclxuICAgIH1cclxuXHJcbiAgICBfd2F0Y2hTdG9yZShpZCwgc3RhdGUsIGRhdGFzKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9fY29udGV4dFtpZF0pIHsvL2FzayBtaXhlZCB8fCBwYXJlbnRcclxuICAgICAgICAgICAgaWYgKHRoaXMuX19taXhlZC5yZWR1Y2UoKG1vdW50ZWQsIGN0eCkgPT4gKG1vdW50ZWQgfHwgY3R4Ll93YXRjaFN0b3JlKGlkLCBzdGF0ZSwgZGF0YXMpKSwgZmFsc2UpIHx8XHJcbiAgICAgICAgICAgICAgICAhdGhpcy5wYXJlbnQpXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcmVudC5fd2F0Y2hTdG9yZSguLi5hcmd1bWVudHMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXRoaXMuX19saXN0ZW5pbmdbaWRdICYmICFpc0Z1bmN0aW9uKHRoaXMuX19jb250ZXh0W2lkXSkpIHtcclxuICAgICAgICAgICAgIXRoaXMuX19jb250ZXh0W2lkXS5pc1N0YWJsZSgpICYmIHRoaXMud2FpdChpZCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9fY29udGV4dFtpZF0ub24oXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9fbGlzdGVuaW5nW2lkXSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAndXBkYXRlJzogcyA9PiB0aGlzLnByb3BhZygpLFxyXG4gICAgICAgICAgICAgICAgICAgICdzdGFibGUnOiBzID0+IHRoaXMucmVsZWFzZShpZCksXHJcbiAgICAgICAgICAgICAgICAgICAgJ3Vuc3RhYmxlJzogcyA9PiB0aGlzLndhaXQoaWQpXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgbWl4aW4odGFyZ2V0Q3R4KSB7XHJcbiAgICAgICAgbGV0IHBhcmVudCA9IHRoaXMucGFyZW50LCBsaXN0cztcclxuICAgICAgICB0aGlzLl9fbWl4ZWQucHVzaCh0YXJnZXRDdHgpXHJcbiAgICAgICAgdGFyZ2V0Q3R4LnJldGFpbigpO1xyXG4gICAgICAgIGlmICghdGFyZ2V0Q3R4Ll9zdGFibGUpXHJcbiAgICAgICAgICAgIHRoaXMud2FpdCh0YXJnZXRDdHguX2lkKTtcclxuXHJcbiAgICAgICAgdGhpcy5fX21peGVkTGlzdC5wdXNoKGxpc3RzID0ge1xyXG4gICAgICAgICAgICAnc3RhYmxlJzogcyA9PiB0aGlzLnJlbGVhc2UodGFyZ2V0Q3R4Ll9pZCksXHJcbiAgICAgICAgICAgICd1bnN0YWJsZSc6IHMgPT4gdGhpcy53YWl0KHRhcmdldEN0eC5faWQpLFxyXG4gICAgICAgICAgICAndXBkYXRlJzogcyA9PiB0aGlzLl9wcm9wYWcoKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGFyZ2V0Q3R4Lm9uKGxpc3RzKTtcclxuICAgICAgICBfX3Byb3RvX19wdXNoKHRoaXMsICdzdG9yZXMnLCBwYXJlbnQpO1xyXG4gICAgICAgIF9fcHJvdG9fX3B1c2godGhpcywgJ3N0YXRlJywgcGFyZW50KTtcclxuICAgICAgICBfX3Byb3RvX19wdXNoKHRoaXMsICdkYXRhcycsIHBhcmVudCk7XHJcbiAgICAgICAgdGFyZ2V0Q3R4LnJlbGluayh0YXJnZXRDdHguX19jb250ZXh0LCB0aGlzLCB0cnVlKTtcclxuXHJcbiAgICAgICAgX19wcm90b19fcHVzaCh0aGlzLCAnc3RvcmVzJywgdGhpcyk7XHJcbiAgICAgICAgX19wcm90b19fcHVzaCh0aGlzLCAnc3RhdGUnLCB0aGlzKTtcclxuICAgICAgICBfX3Byb3RvX19wdXNoKHRoaXMsICdkYXRhcycsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMucmVsaW5rKHRoaXMuX19jb250ZXh0LCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICByZWdpc3RlcihyYXdDdHgsIHN0YXRlID0ge30sIGRhdGFzID0ge30pIHtcclxuICAgICAgICB0aGlzLnJlbGluayhyYXdDdHgsIHRoaXMsIGZhbHNlLCBzdGF0ZSwgZGF0YXMpO1xyXG4gICAgICAgIE9iamVjdC5rZXlzKHJhd0N0eCkuZm9yRWFjaChcclxuICAgICAgICAgICAgaWQgPT4gKGlzRnVuY3Rpb24ocmF3Q3R4W2lkXSkgJiYgcmF3Q3R4W2lkXS5zaW5nbGV0b24gJiYgdGhpcy5fbW91bnQoaWQsIHN0YXRlW2lkXSwgZGF0YXNbaWRdKSkpXHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTWFwIHNyY0N0eCBzdG9yZSdzIG9uIHRhcmdldEN0eCBoZWFkZXJzIHByb3RvJ3NcclxuICAgICAqIEBwYXJhbSBzcmNDdHhcclxuICAgICAqIEBwYXJhbSB0YXJnZXRDdHhcclxuICAgICAqIEBwYXJhbSBzdGF0ZVxyXG4gICAgICogQHBhcmFtIGRhdGFzXHJcbiAgICAgKi9cclxuICAgIHJlbGluayhzcmNDdHgsIHRhcmdldEN0eCA9IHRoaXMsIGV4dGVybmFsLCBzdGF0ZSA9IHt9LCBkYXRhcyA9IHt9KSB7XHJcbiAgICAgICAgbGV0IGxjdHggPSB0YXJnZXRDdHguX3N0b3Jlcy5wcm90b3R5cGU7XHJcbiAgICAgICAgT2JqZWN0LmtleXMoc3JjQ3R4KVxyXG4gICAgICAgICAgICAuZm9yRWFjaChcclxuICAgICAgICAgICAgICAgIGlkID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGFyZ2V0Q3R4Ll9fY29udGV4dFtpZF0gPT09IHNyY0N0eFtpZF0gfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0Q3R4Ll9fY29udGV4dFtpZF0gJiYgKHRhcmdldEN0eC5fX2NvbnRleHRbaWRdLmNvbnN0cnVjdG9yID09PSBzcmNDdHhbaWRdICkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhcmdldEN0eC5fX2NvbnRleHRbaWRdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIlJlc2NvcGUgQ29udGV4dCA6IFwiLCBpZCwgXCIgYWxyZWFkeSBleGlzdCBpbiB0aGlzIGNvbnRleHQgIVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWV4dGVybmFsKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9fY29udGV4dFtpZF0gPSBzcmNDdHhbaWRdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxjdHgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoKGN0eCwgaWQpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXQ6ICgpID0+IHRoaXMuX19jb250ZXh0W2lkXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5fX2NvbnRleHQsIGlkKVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRDdHguX3N0YXRlLnByb3RvdHlwZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICgoY3R4LCBpZCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldDogKCkgPT4gKGN0eFtpZF0gJiYgY3R4W2lkXS5zdGF0ZSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0OiAodikgPT4gKHRoaXMuX21vdW50KGlkLCB2KSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMuX19jb250ZXh0LCBpZClcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0Q3R4Ll9kYXRhcy5wcm90b3R5cGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoKGN0eCwgaWQpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXQ6ICgpID0+IChjdHhbaWRdICYmIGN0eFtpZF0uZGF0YXMpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldDogKHYpID0+ICh0aGlzLl9tb3VudChpZCwgdW5kZWZpbmVkLCB2KSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMuX19jb250ZXh0LCBpZClcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0gb2JqIHtSZWFjdC5Db21wb25lbnR8U3RvcmV8ZnVuY3Rpb24pXHJcbiAgICAgKiBAcGFyYW0ga2V5IHtzdHJpbmd9IG9wdGlvbmFsIGtleSB3aGVyZSB0byBtYXAgdGhlIHB1YmxpYyBzdGF0ZVxyXG4gICAgICovXHJcbiAgICBiaW5kKG9iaiwga2V5LCBhcywgc2V0SW5pdGlhbCA9IHRydWUpIHtcclxuICAgICAgICBsZXQgbGFzdFJldnMsIGRhdGFzO1xyXG4gICAgICAgIGlmIChrZXkgJiYgIWlzQXJyYXkoa2V5KSlcclxuICAgICAgICAgICAga2V5ID0gW2tleV07XHJcblxyXG4gICAgICAgIC8vIGtleSA9IGtleXx8XHJcblxyXG4gICAgICAgIGlmIChhcyA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBzZXRJbml0aWFsID0gdHJ1ZTtcclxuICAgICAgICAgICAgYXMgPSBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fZm9sbG93ZXJzLnB1c2goXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIG9iaixcclxuICAgICAgICAgICAgICAgIGtleSxcclxuICAgICAgICAgICAgICAgIGFzLFxyXG4gICAgICAgICAgICAgICAgbGFzdFJldnMgPSBrZXkgJiYga2V5LnJlZHVjZSgocmV2cywgaWQpID0+IChyZXZzW2lkXSA9IDAsIHJldnMpLCB7fSlcclxuICAgICAgICAgICAgXSk7XHJcblxyXG4gICAgICAgIHRoaXMubW91bnQoa2V5KTtcclxuXHJcbiAgICAgICAgaWYgKHNldEluaXRpYWwgJiYgdGhpcy5fc3RhYmxlKSB7XHJcbiAgICAgICAgICAgIGRhdGFzID0gdGhpcy5nZXRVcGRhdGVzKGxhc3RSZXZzKTtcclxuICAgICAgICAgICAgaWYgKCFkYXRhcykgcmV0dXJuO1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIG9iaiAhPSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgICAgIGlmIChhcykgb2JqLnNldFN0YXRlKHtbYXNdOiBkYXRhc30pO1xyXG4gICAgICAgICAgICAgICAgZWxzZSBvYmouc2V0U3RhdGUoZGF0YXMpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgb2JqKGRhdGFzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBsYXN0UmV2cyAmJlxyXG4gICAgICAgICAgICAvLyBrZXkuZm9yRWFjaChpZCA9PiAobGFzdFJldnNbaWRdID0gdGhpcy5zdG9yZXNbaWRdICYmIHRoaXMuc3RvcmVzW2lkXS5fcmV2IHx8IDApKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBVbiBiaW5kIHRoaXMgY29udGV4dCBvZmYgdGhlIGdpdmVuIGNvbXBvbmVudC1rZXlzXHJcbiAgICAgKiBAcGFyYW0gb2JqXHJcbiAgICAgKiBAcGFyYW0ga2V5XHJcbiAgICAgKiBAcmV0dXJucyB7QXJyYXkuPCo+fVxyXG4gICAgICovXHJcbiAgICB1bkJpbmQob2JqLCBrZXksIGFzKSB7XHJcbiAgICAgICAgdmFyIGZvbGxvd2VycyA9IHRoaXMuX2ZvbGxvd2VycyxcclxuICAgICAgICAgICAgaSA9IGZvbGxvd2VycyAmJiBmb2xsb3dlcnMubGVuZ3RoO1xyXG4gICAgICAgIHdoaWxlIChmb2xsb3dlcnMgJiYgaS0tKVxyXG4gICAgICAgICAgICBpZiAoZm9sbG93ZXJzW2ldWzBdID09PSBvYmogJiYgKCcnICsgZm9sbG93ZXJzW2ldWzFdKSA9PSAoJycgKyBrZXkpICYmXHJcbiAgICAgICAgICAgICAgICAoJycgKyBmb2xsb3dlcnNbaV1bMl0pID09ICgnJyArIGFzKSlcclxuICAgICAgICAgICAgICAgIHJldHVybiBmb2xsb3dlcnMuc3BsaWNlKGksIDEpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBtYXAodG8sIHN0b3JlcywgYmluZCA9IHRydWUpIHtcclxuICAgICAgICB0aGlzLm1vdW50KHN0b3Jlcyk7XHJcbiAgICAgICAgYmluZCAmJiB0aGlzLmJpbmQodG8sIHN0b3JlcywgbnVsbCwgZmFsc2UpO1xyXG5cclxuICAgICAgICByZXR1cm4gc3RvcmVzLnJlZHVjZSgoZGF0YXMsIGlkKSA9PiAoZGF0YXNbaWRdID0gdGhpcy5zdG9yZXNbaWRdICYmIHRoaXMuc3RvcmVzW2lkXS5kYXRhcywgZGF0YXMpLCB7fSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VXBkYXRlcyhyZXZzLCBvdXRwdXQsIHVwZGF0ZWQpIHtcclxuICAgICAgICBsZXQgY3R4ID0gdGhpcy5fX2NvbnRleHQ7XHJcblxyXG4gICAgICAgIG91dHB1dCA9IG91dHB1dCB8fCB7fTtcclxuICAgICAgICBPYmplY3Qua2V5cyhjdHgpLmZvckVhY2goXHJcbiAgICAgICAgICAgIGlkID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghb3V0cHV0W2lkXVxyXG4gICAgICAgICAgICAgICAgICAgICYmICggIXJldnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgfHwgKHJldnMuaGFzT3duUHJvcGVydHkoaWQpICYmIHJldnNbaWRdID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHx8ICEoICFyZXZzLmhhc093blByb3BlcnR5KGlkKSB8fCBjdHhbaWRdLl9yZXYgPD0gcmV2c1tpZF0gKSlcclxuICAgICAgICAgICAgICAgICkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgb3V0cHV0W2lkXSA9IHRoaXMuZGF0YXNbaWRdO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXZzICYmIHJldnNbaWRdICE9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldnNbaWRdID0gY3R4W2lkXS5fcmV2O1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdXBkYXRlZCA9IHRoaXMuX19taXhlZC5yZWR1Y2UoKHVwZGF0ZWQsIGN0eCkgPT4gKGN0eC5nZXRVcGRhdGVzKHJldnMsIG91dHB1dCwgdXBkYXRlZCkgfHwgdXBkYXRlZCksIHVwZGF0ZWQpO1xyXG4gICAgICAgIHVwZGF0ZWQgPSB0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC5nZXRVcGRhdGVzKHJldnMsIG91dHB1dCwgdXBkYXRlZCkgfHwgdXBkYXRlZDtcclxuICAgICAgICByZXR1cm4gdXBkYXRlZCAmJiBvdXRwdXQ7XHJcbiAgICB9XHJcblxyXG4gICAgc2VyaWFsaXplKGZsYWdzX3N0YXRlcyA9IC8uKi8sIGZsYWdzX2RhdGFzID0gLy4qLykge1xyXG4gICAgICAgIGxldCBjdHggPSB0aGlzLl9fY29udGV4dCwgb3V0cHV0ID0ge3N0YXRlOiB7fSwgZGF0YXM6IHt9fSxcclxuICAgICAgICAgICAgX2ZsYWdzX3N0YXRlcyxcclxuICAgICAgICAgICAgX2ZsYWdzX2RhdGFzO1xyXG4gICAgICAgIGlmIChpc0FycmF5KGZsYWdzX3N0YXRlcykpXHJcbiAgICAgICAgICAgIGZsYWdzX3N0YXRlcy5mb3JFYWNoKGlkID0+IChvdXRwdXQuc3RhdGVbaWRdID0gdGhpcy5zdGF0ZVtpZF0pKVxyXG5cclxuICAgICAgICBpZiAoaXNBcnJheShmbGFnc19kYXRhcykpXHJcbiAgICAgICAgICAgIGZsYWdzX2RhdGFzLmZvckVhY2goaWQgPT4gKG91dHB1dC5kYXRhc1tpZF0gPSB0aGlzLmRhdGFzW2lkXSkpXHJcblxyXG4gICAgICAgIGlmICghaXNBcnJheShmbGFnc19kYXRhcykgJiYgIWlzQXJyYXkoZmxhZ3Nfc3RhdGVzKSlcclxuICAgICAgICAgICAgT2JqZWN0LmtleXMoY3R4KS5mb3JFYWNoKFxyXG4gICAgICAgICAgICAgICAgaWQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0Z1bmN0aW9uKGN0eFtpZF0pKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBmbGFncyA9IGN0eFtpZF0uY29uc3RydWN0b3IuZmxhZ3M7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGZsYWdzID0gaXNBcnJheShmbGFncykgPyBmbGFncyA6IFtmbGFncyB8fCBcIlwiXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZsYWdzLnJlZHVjZSgociwgZmxhZykgPT4gKHIgfHwgX2ZsYWdzX3N0YXRlcy50ZXN0KGZsYWcpKSwgZmFsc2UpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXQuc3RhdGVbaWRdID0gdGhpcy5zdGF0ZVtpZF07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChmbGFncy5yZWR1Y2UoKHIsIGZsYWcpID0+IChyIHx8IF9mbGFnc19kYXRhcy50ZXN0KGZsYWcpKSwgZmFsc2UpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXQuZGF0YXNbaWRdID0gdGhpcy5kYXRhc1tpZF07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICByZXR1cm4gb3V0cHV0O1xyXG4gICAgfVxyXG5cclxuICAgIG9uKGxpc3RzKSB7XHJcblxyXG4gICAgICAgIGlmICghaXNTdHJpbmcobGlzdHMpICYmIGxpc3RzKVxyXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhsaXN0cykuZm9yRWFjaChrID0+IHN1cGVyLm9uKGssIGxpc3RzW2tdKSk7XHJcbiAgICAgICAgZWxzZSBzdXBlci5vbiguLi5hcmd1bWVudHMpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUxpc3RlbmVyKGxpc3RzKSB7XHJcbiAgICAgICAgaWYgKCFpc1N0cmluZyhsaXN0cykgJiYgbGlzdHMpXHJcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGxpc3RzKS5mb3JFYWNoKGsgPT4gc3VwZXIucmVtb3ZlTGlzdGVuZXIoaywgbGlzdHNba10pKTtcclxuICAgICAgICBlbHNlIHN1cGVyLnJlbW92ZUxpc3RlbmVyKC4uLmFyZ3VtZW50cyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBvbmNlKCdzdGFibGUnLCBjYilcclxuICAgICAqIEBwYXJhbSBvYmoge1JlYWN0LkNvbXBvbmVudHxTdG9yZXxmdW5jdGlvbilcclxuICAgICAqIEBwYXJhbSBrZXkge3N0cmluZ30gb3B0aW9uYWwga2V5IHdoZXJlIHRvIG1hcCB0aGUgcHVibGljIHN0YXRlXHJcbiAgICAgKi9cclxuICAgIHRoZW4oY2IpIHtcclxuICAgICAgICBpZiAodGhpcy5fc3RhYmxlKVxyXG4gICAgICAgICAgICByZXR1cm4gY2IobnVsbCwgdGhpcy5kYXRhcyk7XHJcbiAgICAgICAgdGhpcy5vbmNlKCdzdGFibGUnLCBlID0+IGNiKG51bGwsIHRoaXMuZGF0YXMpKTtcclxuICAgIH1cclxuXHJcbiAgICByZXN0b3JlKHtzdGF0ZSwgZGF0YXN9LCBxdWlldCkge1xyXG4gICAgICAgIGxldCBjdHggPSB0aGlzLl9fY29udGV4dDtcclxuICAgICAgICBPYmplY3Qua2V5cyhkYXRhcykuZm9yRWFjaChcclxuICAgICAgICAgICAgaWQgPT4ge1xyXG4gICAgICAgICAgICAgICAgcXVpZXQgP1xyXG4gICAgICAgICAgICAgICAgICAgIGN0eC5kYXRhcyA9IGRhdGFzW2lkXVxyXG4gICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICBjdHgucHVzaChkYXRhc1tpZF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgICAgICBPYmplY3Qua2V5cyhzdGF0ZSkuZm9yRWFjaChcclxuICAgICAgICAgICAgaWQgPT4ge1xyXG4gICAgICAgICAgICAgICAgcXVpZXQgP1xyXG4gICAgICAgICAgICAgICAgICAgIGN0eC5zdGF0ZSA9IHN0YXRlW2lkXVxyXG4gICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICBjdHguc2V0U3RhdGUoc3RhdGVbaWRdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICByZXRhaW5TdG9yZXMoc3RvcmVzID0gW10sIHJlYXNvbikge1xyXG4gICAgICAgIHN0b3Jlcy5mb3JFYWNoKFxyXG4gICAgICAgICAgICBpZCA9PiAodGhpcy5zdG9yZXNbaWRdICYmIHRoaXMuc3RvcmVzW2lkXS5yZXRhaW4gJiYgdGhpcy5zdG9yZXNbaWRdLnJldGFpbihyZWFzb24pKVxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBkaXNwb3NlU3RvcmVzKHN0b3JlcyA9IFtdLCByZWFzb24pIHtcclxuICAgICAgICBzdG9yZXMuZm9yRWFjaChcclxuICAgICAgICAgICAgaWQgPT4gKHRoaXMuc3RvcmVzW2lkXSAmJiB0aGlzLnN0b3Jlc1tpZF0uZGlzcG9zZSAmJiB0aGlzLnN0b3Jlc1tpZF0uZGlzcG9zZShyZWFzb24pKVxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICB3YWl0KHJlYXNvbikge1xyXG4gICAgICAvLyAgY29uc29sZS5sb2coXCJ3YWl0XCIsIHJlYXNvbik7XHJcbiAgICAgICAgdGhpcy5fc3RhYmxlJiYhdGhpcy5fX3c4TG9ja3MuYWxsICYmIHRoaXMuZW1pdChcInVuc3RhYmxlXCIsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMuX3N0YWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuX193OExvY2tzLmFsbCsrO1xyXG4gICAgICAgIGlmIChyZWFzb24pIHtcclxuICAgICAgICAgICAgdGhpcy5fX3c4TG9ja3NbcmVhc29uXSA9IHRoaXMuX193OExvY2tzW3JlYXNvbl0gfHwgMDtcclxuICAgICAgICAgICAgdGhpcy5fX3c4TG9ja3NbcmVhc29uXSsrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZWxlYXNlKHJlYXNvbikge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJyZWxlYXNlXCIsIHJlYXNvbik7XHJcblxyXG4gICAgICAvLyAgaWYgKHRoaXMuX193OExvY2tzLmFsbCA9PSAwKVxyXG4gICAgICAgIC8vICAgIHRocm93IG5ldyBFcnJvcihcIlJlbGVhc2UgbW9yZSB0aGFuIGxvY2tpbmcgISA6IFwiK3JlYXNvbik7XHJcblxyXG4gICAgICAgIHRoaXMuX193OExvY2tzLmFsbC0tO1xyXG4gICAgICAgIGlmIChyZWFzb24pIHtcclxuICAgICAgICAgICAgdGhpcy5fX3c4TG9ja3NbcmVhc29uXSA9IHRoaXMuX193OExvY2tzW3JlYXNvbl0gfHwgMDtcclxuICAgICAgICAgICAgdGhpcy5fX3c4TG9ja3NbcmVhc29uXS0tO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXRoaXMuX193OExvY2tzLmFsbCkge1xyXG4gICAgICAgICAgICB0aGlzLl9zdGFiaWxpemVyVE0gJiYgY2xlYXJUaW1lb3V0KHRoaXMuX3N0YWJpbGl6ZXJUTSk7XHJcbiAgICAgICAgICAgIHRoaXMuX3Byb3BhZ1RNICYmIGNsZWFyVGltZW91dCh0aGlzLl9wcm9wYWdUTSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9zdGFiaWxpemVyVE0gPSBzZXRUaW1lb3V0KFxyXG4gICAgICAgICAgICAgICAgZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLl9fdzhMb2Nrcy5hbGwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9zdGFiaWxpemVyVE0gPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zdGFibGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdChcInN0YWJsZVwiLCB0aGlzKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcHJvcGFnKClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByb3BhZygpIHtcclxuICAgICAgICB0aGlzLl9wcm9wYWdUTSAmJiBjbGVhclRpbWVvdXQodGhpcy5fcHJvcGFnVE0pO1xyXG4gICAgICAgIHRoaXMuX3Byb3BhZ1RNID0gc2V0VGltZW91dChcclxuICAgICAgICAgICAgZSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9wcm9wYWcoKVxyXG4gICAgICAgICAgICB9LCA1MFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgX3Byb3BhZygpIHtcclxuICAgICAgICBpZiAodGhpcy5fZm9sbG93ZXJzLmxlbmd0aClcclxuICAgICAgICAgICAgdGhpcy5fZm9sbG93ZXJzLmZvckVhY2goKHswOiBvYmosIDE6IGtleSwgMjogYXMsIDM6IGxhc3RSZXZzfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGRhdGFzID0gdGhpcy5nZXRVcGRhdGVzKGxhc3RSZXZzKTtcclxuICAgICAgICAgICAgICAgIGlmICghZGF0YXMpIHJldHVybjtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygb2JqICE9IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhcykgb2JqLnNldFN0YXRlKHtbYXNdOiBkYXRhc30pO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Ugb2JqLnNldFN0YXRlKGRhdGFzKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqKGRhdGFzLCBsYXN0UmV2cyAmJiBbLi4ubGFzdFJldnNdIHx8IFwibm8gcmV2c1wiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIGxhc3RSZXZzICYmXHJcbiAgICAgICAgICAgICAgICAvLyBrZXkuZm9yRWFjaChpZCA9PiAobGFzdFJldnNbaWRdID0gdGhpcy5zdG9yZXNbaWRdICYmIHRoaXMuc3RvcmVzW2lkXS5fcmV2IHx8IDApKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5lbWl0KFwidXBkYXRlXCIsIHRoaXMuZ2V0VXBkYXRlcygpKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgX2dldEFsbENoaWxkcyhjaGlsZHM9W10pIHtcclxuICAgICAgICBjaGlsZHMucHVzaCguLi50aGlzLl9jaGlsZENvbnRleHRzKVxyXG4gICAgICAgIHRoaXMuX2NoaWxkQ29udGV4dHMuZm9yRWFjaChcclxuICAgICAgICAgICAgY3R4PT57XHJcbiAgICAgICAgICAgICAgICBjdHguX2dldEFsbENoaWxkcyhjaGlsZHMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgICAgICByZXR1cm4gY2hpbGRzO1xyXG4gICAgfVxyXG5cclxuICAgIF9hZGRDaGlsZChjdHgpIHtcclxuICAgICAgICB0aGlzLl9jaGlsZENvbnRleHRzLnB1c2goY3R4KTtcclxuICAgIH1cclxuXHJcbiAgICBfcm1DaGlsZChjdHgpIHtcclxuICAgICAgICBsZXQgaSA9IHRoaXMuX2NoaWxkQ29udGV4dHMuaW5kZXhPZihjdHgpO1xyXG4gICAgICAgIGlmIChpICE9IC0xKVxyXG4gICAgICAgICAgICB0aGlzLl9jaGlsZENvbnRleHRzLnNwbGljZShpLCAxKTtcclxuICAgIH1cclxuXHJcbiAgICByZXRhaW4ocmVhc29uKSB7XHJcbiAgICAgICAgdGhpcy5fX3JldGFpbkxvY2tzLmFsbCsrO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJyZXRhaW5cIiwgdGhpcy5faWQsIHJlYXNvbik7XHJcblxyXG4gICAgICAgIGlmIChyZWFzb24pIHtcclxuICAgICAgICAgICAgdGhpcy5fX3JldGFpbkxvY2tzW3JlYXNvbl0gPSB0aGlzLl9fcmV0YWluTG9ja3NbcmVhc29uXSB8fCAwO1xyXG4gICAgICAgICAgICB0aGlzLl9fcmV0YWluTG9ja3NbcmVhc29uXSsrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkaXNwb3NlKHJlYXNvbikge1xyXG4gICAgICAvLyAgY29uc29sZS5sb2coXCJkaXNwb3NlXCIsIHRoaXMuX2lkLCByZWFzb24pO1xyXG4gICAgICAgLy8gaWYgKHRoaXMuX19yZXRhaW5Mb2Nrcy5hbGwgPT0gMClcclxuICAgICAgICAgLy8gICB0aHJvdyBuZXcgRXJyb3IoXCJEaXNwb3NlIG1vcmUgdGhhbiByZXRhaW5pbmcgISA6IFwiK3JlYXNvbik7XHJcblxyXG4gICAgICAgIHRoaXMuX19yZXRhaW5Mb2Nrcy5hbGwtLTtcclxuICAgICAgICBpZiAocmVhc29uKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX19yZXRhaW5Mb2Nrc1tyZWFzb25dID0gdGhpcy5fX3JldGFpbkxvY2tzW3JlYXNvbl0gfHwgMDtcclxuICAgICAgICAgICAgdGhpcy5fX3JldGFpbkxvY2tzW3JlYXNvbl0tLTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0aGlzLl9fcmV0YWluTG9ja3MuYWxsKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9wZXJzaXN0ZW5jZVRtKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9kZXN0cm95VE0gJiYgY2xlYXJUaW1lb3V0KHRoaXMuX2Rlc3Ryb3lUTSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9kZXN0cm95VE0gPSBzZXRUaW1lb3V0KFxyXG4gICAgICAgICAgICAgICAgICAgIGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwid3RmIGN0eFwiLCB0aGlzLl9pZCwgcmVhc29uLCB0aGlzLl9fdzhMb2NrcywgdGhpcy5fc3RhYmxlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50aGVuKHMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgLy8gICBjb25zb2xlLmxvZyhcInd0ZiBjdHggdGhlblwiLCB0aGlzLl9pZCwgcmVhc29uLCB0aGlzLl9fdzhMb2Nrcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhdGhpcy5fX3JldGFpbkxvY2tzLmFsbCAmJiB0aGlzLmRlc3Ryb3koKX0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcGVyc2lzdGVuY2VUbVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGhlbihzID0+ICghdGhpcy5fX3JldGFpbkxvY2tzLmFsbCAmJiB0aGlzLmRlc3Ryb3koKSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBvcmRlciBkZXN0cm95IG9mIGxvY2FsIHN0b3Jlc1xyXG4gICAgICovXHJcbiAgICBkZXN0cm95KCkge1xyXG4gICAgICAgIGxldCBjdHggPSB0aGlzLl9fY29udGV4dDtcclxuXHJcbiAgICAgICAvLyBjb25zb2xlLmxvZyhcImRlc3Ryb3lcIiwgdGhpcy5faWQpO1xyXG4gICAgICAgIHRoaXMuZW1pdChcImRlc3Ryb3lcIik7XHJcbiAgICAgICAgT2JqZWN0LmtleXMoXHJcbiAgICAgICAgICAgIHRoaXMuX19saXN0ZW5pbmdcclxuICAgICAgICApLmZvckVhY2goXHJcbiAgICAgICAgICAgIGlkID0+IHRoaXMuX19jb250ZXh0W2lkXS5yZW1vdmVMaXN0ZW5lcih0aGlzLl9fbGlzdGVuaW5nW2lkXSlcclxuICAgICAgICApO1xyXG5cclxuXHJcblxyXG4gICAgICAgIHRoaXMuX19saXN0ZW5pbmcgPSB7fTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2lzTG9jYWxJZClcclxuICAgICAgICAgICAgZGVsZXRlIG9wZW5Db250ZXh0c1t0aGlzLl9pZF07XHJcbiAgICAgICAgdGhpcy5fZm9sbG93ZXJzLmxlbmd0aCA9IDA7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGtleSBpbiBjdHgpXHJcbiAgICAgICAgICAgIGlmICghaXNGdW5jdGlvbihjdHhba2V5XSkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChjdHhba2V5XS5jb250ZXh0T2JqID09PSB0aGlzKVxyXG4gICAgICAgICAgICAgICAgICAgIGN0eFtrZXldLmRlc3Ryb3koKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjdHhba2V5XSA9IGN0eFtrZXldLmNvbnN0cnVjdG9yO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgd2hpbGUgKHRoaXMuX19taXhlZExpc3QubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX19taXhlZFswXS5yZW1vdmVMaXN0ZW5lcih0aGlzLl9fbWl4ZWRMaXN0LnNoaWZ0KCkpO1xyXG4gICAgICAgICAgICB0aGlzLl9fbWl4ZWQuc2hpZnQoKS5kaXNwb3NlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnBhcmVudCkge1xyXG4gICAgICAgICAgICB0aGlzLnBhcmVudC5yZW1vdmVMaXN0ZW5lcih0aGlzLl9fcGFyZW50TGlzdCk7XHJcbiAgICAgICAgICAgIHRoaXMucGFyZW50LmRpc3Bvc2UoXCJpc015UGFyZW50XCIpO1xyXG4gICAgICAgICAgICB0aGlzLnBhcmVudC5fcm1DaGlsZCh0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gdGhpcy5kYXRhcyA9IHRoaXMuc3RhdGUgPSB0aGlzLmNvbnRleHQgPSB0aGlzLnN0b3JlcyA9IG51bGw7XHJcbiAgICAgICAgLy8gdGhpcy5fZGF0YXMgPSB0aGlzLl9zdGF0ZSA9IHRoaXMuX3N0b3JlcyA9IG51bGw7XHJcblxyXG5cclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9Db250ZXh0LmpzIiwiOyhmdW5jdGlvbiAoZmFjdG9yeSkge1xuICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuICAgIGRlZmluZShbXSwgZmFjdG9yeSk7XG4gIGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiAhIWV4cG9ydHMgJiYgIWV4cG9ydHMubm9kZVR5cGUpXG4gICAgaWYgKHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnICYmICEhbW9kdWxlICYmIG1vZHVsZS5leHBvcnRzKVxuICAgICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG4gICAgZWxzZVxuICAgICAgZXhwb3J0c1snZGVmYXVsdCddID0gZmFjdG9yeSgpO1xuICBlbHNlIGlmICh0eXBlb2YgWVVJID09PSAnZnVuY3Rpb24nICYmIFlVSS5hZGQpXG4gICAgWVVJLmFkZCgnaXMtc3RyaW5nJywgZnVuY3Rpb24gKFkpIHsgWVsnZGVmYXVsdCddID0gZmFjdG9yeSgpOyB9LCAnMS4wLjcnKTtcbiAgZWxzZVxuICAgIFN0cmluZy5pc1N0cmluZyA9IGZhY3RvcnkoKTtcbn0pKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHN0clRvU3RyaW5nICA9ICgnJykudG9TdHJpbmcsXG4gICAgICBoYXNCaW5kICAgICAgPSBGdW5jdGlvbi5wcm90b3R5cGUgJiYgRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQsXG4gICAgICBzdHJUb1N0ckNhbGwgPSBoYXNCaW5kICYmIHN0clRvU3RyaW5nLmNhbGwuYmluZChzdHJUb1N0cmluZyksXG4gICAgICBpc1N0cmluZyAgICAgPSBmdW5jdGlvbiAoc3RyKSB7XG4gICAgICAgIC8qQGNjX29uXG4gICAgICAgICAgQGlmIChAX2pzY3JpcHRfdmVyc2lvbiA+PSA1KSBAKi9cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaGFzQmluZCA/IHN0clRvU3RyQ2FsbChzdHIpIDogc3RyVG9TdHJpbmcuY2FsbChzdHIpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAvKkBlbmRcbiAgICAgICAgQCovXG4gICAgICB9O1xuXG4gIHJldHVybiBmdW5jdGlvbiAoc3RyKSB7XG4gICAgcmV0dXJuICB0eXBlb2Ygc3RyID09PSAnc3RyaW5nJyB8fFxuICAgICAgICAgICAgc3RyICYmIHR5cGVvZiBzdHIgPT09ICdvYmplY3QnICYmXG4gICAgICAgICAgICAvKkBjY19vblxuICAgICAgICAgICAgICBAaWYgKEBfanNjcmlwdF92ZXJzaW9uIDwgNS41KVxuICAgICAgICAgICAgICAgIC9eXFxzKmZ1bmN0aW9uXFxzKlN0cmluZ1xcKFxcKVxccyp7XFxzKlxcW25hdGl2ZSBjb2RlXFxdXFxzKn1cXHMqJC8udGVzdChzdHIuY29uc3RydWN0b3IpXG4gICAgICAgICAgICAgIEBlbHNlIEAqL1xuICAgICAgICAgICAgICAgIGlzU3RyaW5nKHN0cilcbiAgICAgICAgICAgICAgLypAZW5kXG4gICAgICAgICAgICBAKi9cbiAgICAgICAgICAgIHx8IGZhbHNlO1xuICB9O1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vaXNzdHJpbmcvaXNTdHJpbmcudW1kLmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiAoYXJyKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJyKSA9PSAnW29iamVjdCBBcnJheV0nO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9pc2FycmF5L2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG5mdW5jdGlvbiBFdmVudEVtaXR0ZXIoKSB7XG4gIHRoaXMuX2V2ZW50cyA9IHRoaXMuX2V2ZW50cyB8fCB7fTtcbiAgdGhpcy5fbWF4TGlzdGVuZXJzID0gdGhpcy5fbWF4TGlzdGVuZXJzIHx8IHVuZGVmaW5lZDtcbn1cbm1vZHVsZS5leHBvcnRzID0gRXZlbnRFbWl0dGVyO1xuXG4vLyBCYWNrd2FyZHMtY29tcGF0IHdpdGggbm9kZSAwLjEwLnhcbkV2ZW50RW1pdHRlci5FdmVudEVtaXR0ZXIgPSBFdmVudEVtaXR0ZXI7XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuX2V2ZW50cyA9IHVuZGVmaW5lZDtcbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuX21heExpc3RlbmVycyA9IHVuZGVmaW5lZDtcblxuLy8gQnkgZGVmYXVsdCBFdmVudEVtaXR0ZXJzIHdpbGwgcHJpbnQgYSB3YXJuaW5nIGlmIG1vcmUgdGhhbiAxMCBsaXN0ZW5lcnMgYXJlXG4vLyBhZGRlZCB0byBpdC4gVGhpcyBpcyBhIHVzZWZ1bCBkZWZhdWx0IHdoaWNoIGhlbHBzIGZpbmRpbmcgbWVtb3J5IGxlYWtzLlxuRXZlbnRFbWl0dGVyLmRlZmF1bHRNYXhMaXN0ZW5lcnMgPSAxMDtcblxuLy8gT2J2aW91c2x5IG5vdCBhbGwgRW1pdHRlcnMgc2hvdWxkIGJlIGxpbWl0ZWQgdG8gMTAuIFRoaXMgZnVuY3Rpb24gYWxsb3dzXG4vLyB0aGF0IHRvIGJlIGluY3JlYXNlZC4gU2V0IHRvIHplcm8gZm9yIHVubGltaXRlZC5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuc2V0TWF4TGlzdGVuZXJzID0gZnVuY3Rpb24obikge1xuICBpZiAoIWlzTnVtYmVyKG4pIHx8IG4gPCAwIHx8IGlzTmFOKG4pKVxuICAgIHRocm93IFR5cGVFcnJvcignbiBtdXN0IGJlIGEgcG9zaXRpdmUgbnVtYmVyJyk7XG4gIHRoaXMuX21heExpc3RlbmVycyA9IG47XG4gIHJldHVybiB0aGlzO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5lbWl0ID0gZnVuY3Rpb24odHlwZSkge1xuICB2YXIgZXIsIGhhbmRsZXIsIGxlbiwgYXJncywgaSwgbGlzdGVuZXJzO1xuXG4gIGlmICghdGhpcy5fZXZlbnRzKVxuICAgIHRoaXMuX2V2ZW50cyA9IHt9O1xuXG4gIC8vIElmIHRoZXJlIGlzIG5vICdlcnJvcicgZXZlbnQgbGlzdGVuZXIgdGhlbiB0aHJvdy5cbiAgaWYgKHR5cGUgPT09ICdlcnJvcicpIHtcbiAgICBpZiAoIXRoaXMuX2V2ZW50cy5lcnJvciB8fFxuICAgICAgICAoaXNPYmplY3QodGhpcy5fZXZlbnRzLmVycm9yKSAmJiAhdGhpcy5fZXZlbnRzLmVycm9yLmxlbmd0aCkpIHtcbiAgICAgIGVyID0gYXJndW1lbnRzWzFdO1xuICAgICAgaWYgKGVyIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgdGhyb3cgZXI7IC8vIFVuaGFuZGxlZCAnZXJyb3InIGV2ZW50XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBBdCBsZWFzdCBnaXZlIHNvbWUga2luZCBvZiBjb250ZXh0IHRvIHRoZSB1c2VyXG4gICAgICAgIHZhciBlcnIgPSBuZXcgRXJyb3IoJ1VuY2F1Z2h0LCB1bnNwZWNpZmllZCBcImVycm9yXCIgZXZlbnQuICgnICsgZXIgKyAnKScpO1xuICAgICAgICBlcnIuY29udGV4dCA9IGVyO1xuICAgICAgICB0aHJvdyBlcnI7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlciA9IHRoaXMuX2V2ZW50c1t0eXBlXTtcblxuICBpZiAoaXNVbmRlZmluZWQoaGFuZGxlcikpXG4gICAgcmV0dXJuIGZhbHNlO1xuXG4gIGlmIChpc0Z1bmN0aW9uKGhhbmRsZXIpKSB7XG4gICAgc3dpdGNoIChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAvLyBmYXN0IGNhc2VzXG4gICAgICBjYXNlIDE6XG4gICAgICAgIGhhbmRsZXIuY2FsbCh0aGlzKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDI6XG4gICAgICAgIGhhbmRsZXIuY2FsbCh0aGlzLCBhcmd1bWVudHNbMV0pO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMzpcbiAgICAgICAgaGFuZGxlci5jYWxsKHRoaXMsIGFyZ3VtZW50c1sxXSwgYXJndW1lbnRzWzJdKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICAvLyBzbG93ZXJcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICAgICAgICBoYW5kbGVyLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIH1cbiAgfSBlbHNlIGlmIChpc09iamVjdChoYW5kbGVyKSkge1xuICAgIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICAgIGxpc3RlbmVycyA9IGhhbmRsZXIuc2xpY2UoKTtcbiAgICBsZW4gPSBsaXN0ZW5lcnMubGVuZ3RoO1xuICAgIGZvciAoaSA9IDA7IGkgPCBsZW47IGkrKylcbiAgICAgIGxpc3RlbmVyc1tpXS5hcHBseSh0aGlzLCBhcmdzKTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5hZGRMaXN0ZW5lciA9IGZ1bmN0aW9uKHR5cGUsIGxpc3RlbmVyKSB7XG4gIHZhciBtO1xuXG4gIGlmICghaXNGdW5jdGlvbihsaXN0ZW5lcikpXG4gICAgdGhyb3cgVHlwZUVycm9yKCdsaXN0ZW5lciBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcblxuICBpZiAoIXRoaXMuX2V2ZW50cylcbiAgICB0aGlzLl9ldmVudHMgPSB7fTtcblxuICAvLyBUbyBhdm9pZCByZWN1cnNpb24gaW4gdGhlIGNhc2UgdGhhdCB0eXBlID09PSBcIm5ld0xpc3RlbmVyXCIhIEJlZm9yZVxuICAvLyBhZGRpbmcgaXQgdG8gdGhlIGxpc3RlbmVycywgZmlyc3QgZW1pdCBcIm5ld0xpc3RlbmVyXCIuXG4gIGlmICh0aGlzLl9ldmVudHMubmV3TGlzdGVuZXIpXG4gICAgdGhpcy5lbWl0KCduZXdMaXN0ZW5lcicsIHR5cGUsXG4gICAgICAgICAgICAgIGlzRnVuY3Rpb24obGlzdGVuZXIubGlzdGVuZXIpID9cbiAgICAgICAgICAgICAgbGlzdGVuZXIubGlzdGVuZXIgOiBsaXN0ZW5lcik7XG5cbiAgaWYgKCF0aGlzLl9ldmVudHNbdHlwZV0pXG4gICAgLy8gT3B0aW1pemUgdGhlIGNhc2Ugb2Ygb25lIGxpc3RlbmVyLiBEb24ndCBuZWVkIHRoZSBleHRyYSBhcnJheSBvYmplY3QuXG4gICAgdGhpcy5fZXZlbnRzW3R5cGVdID0gbGlzdGVuZXI7XG4gIGVsc2UgaWYgKGlzT2JqZWN0KHRoaXMuX2V2ZW50c1t0eXBlXSkpXG4gICAgLy8gSWYgd2UndmUgYWxyZWFkeSBnb3QgYW4gYXJyYXksIGp1c3QgYXBwZW5kLlxuICAgIHRoaXMuX2V2ZW50c1t0eXBlXS5wdXNoKGxpc3RlbmVyKTtcbiAgZWxzZVxuICAgIC8vIEFkZGluZyB0aGUgc2Vjb25kIGVsZW1lbnQsIG5lZWQgdG8gY2hhbmdlIHRvIGFycmF5LlxuICAgIHRoaXMuX2V2ZW50c1t0eXBlXSA9IFt0aGlzLl9ldmVudHNbdHlwZV0sIGxpc3RlbmVyXTtcblxuICAvLyBDaGVjayBmb3IgbGlzdGVuZXIgbGVha1xuICBpZiAoaXNPYmplY3QodGhpcy5fZXZlbnRzW3R5cGVdKSAmJiAhdGhpcy5fZXZlbnRzW3R5cGVdLndhcm5lZCkge1xuICAgIGlmICghaXNVbmRlZmluZWQodGhpcy5fbWF4TGlzdGVuZXJzKSkge1xuICAgICAgbSA9IHRoaXMuX21heExpc3RlbmVycztcbiAgICB9IGVsc2Uge1xuICAgICAgbSA9IEV2ZW50RW1pdHRlci5kZWZhdWx0TWF4TGlzdGVuZXJzO1xuICAgIH1cblxuICAgIGlmIChtICYmIG0gPiAwICYmIHRoaXMuX2V2ZW50c1t0eXBlXS5sZW5ndGggPiBtKSB7XG4gICAgICB0aGlzLl9ldmVudHNbdHlwZV0ud2FybmVkID0gdHJ1ZTtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJyhub2RlKSB3YXJuaW5nOiBwb3NzaWJsZSBFdmVudEVtaXR0ZXIgbWVtb3J5ICcgK1xuICAgICAgICAgICAgICAgICAgICAnbGVhayBkZXRlY3RlZC4gJWQgbGlzdGVuZXJzIGFkZGVkLiAnICtcbiAgICAgICAgICAgICAgICAgICAgJ1VzZSBlbWl0dGVyLnNldE1heExpc3RlbmVycygpIHRvIGluY3JlYXNlIGxpbWl0LicsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2V2ZW50c1t0eXBlXS5sZW5ndGgpO1xuICAgICAgaWYgKHR5cGVvZiBjb25zb2xlLnRyYWNlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIC8vIG5vdCBzdXBwb3J0ZWQgaW4gSUUgMTBcbiAgICAgICAgY29uc29sZS50cmFjZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbiA9IEV2ZW50RW1pdHRlci5wcm90b3R5cGUuYWRkTGlzdGVuZXI7XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub25jZSA9IGZ1bmN0aW9uKHR5cGUsIGxpc3RlbmVyKSB7XG4gIGlmICghaXNGdW5jdGlvbihsaXN0ZW5lcikpXG4gICAgdGhyb3cgVHlwZUVycm9yKCdsaXN0ZW5lciBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcblxuICB2YXIgZmlyZWQgPSBmYWxzZTtcblxuICBmdW5jdGlvbiBnKCkge1xuICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIodHlwZSwgZyk7XG5cbiAgICBpZiAoIWZpcmVkKSB7XG4gICAgICBmaXJlZCA9IHRydWU7XG4gICAgICBsaXN0ZW5lci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfVxuXG4gIGcubGlzdGVuZXIgPSBsaXN0ZW5lcjtcbiAgdGhpcy5vbih0eXBlLCBnKTtcblxuICByZXR1cm4gdGhpcztcbn07XG5cbi8vIGVtaXRzIGEgJ3JlbW92ZUxpc3RlbmVyJyBldmVudCBpZmYgdGhlIGxpc3RlbmVyIHdhcyByZW1vdmVkXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyID0gZnVuY3Rpb24odHlwZSwgbGlzdGVuZXIpIHtcbiAgdmFyIGxpc3QsIHBvc2l0aW9uLCBsZW5ndGgsIGk7XG5cbiAgaWYgKCFpc0Z1bmN0aW9uKGxpc3RlbmVyKSlcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ2xpc3RlbmVyIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuXG4gIGlmICghdGhpcy5fZXZlbnRzIHx8ICF0aGlzLl9ldmVudHNbdHlwZV0pXG4gICAgcmV0dXJuIHRoaXM7XG5cbiAgbGlzdCA9IHRoaXMuX2V2ZW50c1t0eXBlXTtcbiAgbGVuZ3RoID0gbGlzdC5sZW5ndGg7XG4gIHBvc2l0aW9uID0gLTE7XG5cbiAgaWYgKGxpc3QgPT09IGxpc3RlbmVyIHx8XG4gICAgICAoaXNGdW5jdGlvbihsaXN0Lmxpc3RlbmVyKSAmJiBsaXN0Lmxpc3RlbmVyID09PSBsaXN0ZW5lcikpIHtcbiAgICBkZWxldGUgdGhpcy5fZXZlbnRzW3R5cGVdO1xuICAgIGlmICh0aGlzLl9ldmVudHMucmVtb3ZlTGlzdGVuZXIpXG4gICAgICB0aGlzLmVtaXQoJ3JlbW92ZUxpc3RlbmVyJywgdHlwZSwgbGlzdGVuZXIpO1xuXG4gIH0gZWxzZSBpZiAoaXNPYmplY3QobGlzdCkpIHtcbiAgICBmb3IgKGkgPSBsZW5ndGg7IGktLSA+IDA7KSB7XG4gICAgICBpZiAobGlzdFtpXSA9PT0gbGlzdGVuZXIgfHxcbiAgICAgICAgICAobGlzdFtpXS5saXN0ZW5lciAmJiBsaXN0W2ldLmxpc3RlbmVyID09PSBsaXN0ZW5lcikpIHtcbiAgICAgICAgcG9zaXRpb24gPSBpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocG9zaXRpb24gPCAwKVxuICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICBpZiAobGlzdC5sZW5ndGggPT09IDEpIHtcbiAgICAgIGxpc3QubGVuZ3RoID0gMDtcbiAgICAgIGRlbGV0ZSB0aGlzLl9ldmVudHNbdHlwZV07XG4gICAgfSBlbHNlIHtcbiAgICAgIGxpc3Quc3BsaWNlKHBvc2l0aW9uLCAxKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fZXZlbnRzLnJlbW92ZUxpc3RlbmVyKVxuICAgICAgdGhpcy5lbWl0KCdyZW1vdmVMaXN0ZW5lcicsIHR5cGUsIGxpc3RlbmVyKTtcbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBmdW5jdGlvbih0eXBlKSB7XG4gIHZhciBrZXksIGxpc3RlbmVycztcblxuICBpZiAoIXRoaXMuX2V2ZW50cylcbiAgICByZXR1cm4gdGhpcztcblxuICAvLyBub3QgbGlzdGVuaW5nIGZvciByZW1vdmVMaXN0ZW5lciwgbm8gbmVlZCB0byBlbWl0XG4gIGlmICghdGhpcy5fZXZlbnRzLnJlbW92ZUxpc3RlbmVyKSB7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApXG4gICAgICB0aGlzLl9ldmVudHMgPSB7fTtcbiAgICBlbHNlIGlmICh0aGlzLl9ldmVudHNbdHlwZV0pXG4gICAgICBkZWxldGUgdGhpcy5fZXZlbnRzW3R5cGVdO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLy8gZW1pdCByZW1vdmVMaXN0ZW5lciBmb3IgYWxsIGxpc3RlbmVycyBvbiBhbGwgZXZlbnRzXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgZm9yIChrZXkgaW4gdGhpcy5fZXZlbnRzKSB7XG4gICAgICBpZiAoa2V5ID09PSAncmVtb3ZlTGlzdGVuZXInKSBjb250aW51ZTtcbiAgICAgIHRoaXMucmVtb3ZlQWxsTGlzdGVuZXJzKGtleSk7XG4gICAgfVxuICAgIHRoaXMucmVtb3ZlQWxsTGlzdGVuZXJzKCdyZW1vdmVMaXN0ZW5lcicpO1xuICAgIHRoaXMuX2V2ZW50cyA9IHt9O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgbGlzdGVuZXJzID0gdGhpcy5fZXZlbnRzW3R5cGVdO1xuXG4gIGlmIChpc0Z1bmN0aW9uKGxpc3RlbmVycykpIHtcbiAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVycyk7XG4gIH0gZWxzZSBpZiAobGlzdGVuZXJzKSB7XG4gICAgLy8gTElGTyBvcmRlclxuICAgIHdoaWxlIChsaXN0ZW5lcnMubGVuZ3RoKVxuICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcnNbbGlzdGVuZXJzLmxlbmd0aCAtIDFdKTtcbiAgfVxuICBkZWxldGUgdGhpcy5fZXZlbnRzW3R5cGVdO1xuXG4gIHJldHVybiB0aGlzO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5saXN0ZW5lcnMgPSBmdW5jdGlvbih0eXBlKSB7XG4gIHZhciByZXQ7XG4gIGlmICghdGhpcy5fZXZlbnRzIHx8ICF0aGlzLl9ldmVudHNbdHlwZV0pXG4gICAgcmV0ID0gW107XG4gIGVsc2UgaWYgKGlzRnVuY3Rpb24odGhpcy5fZXZlbnRzW3R5cGVdKSlcbiAgICByZXQgPSBbdGhpcy5fZXZlbnRzW3R5cGVdXTtcbiAgZWxzZVxuICAgIHJldCA9IHRoaXMuX2V2ZW50c1t0eXBlXS5zbGljZSgpO1xuICByZXR1cm4gcmV0O1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5saXN0ZW5lckNvdW50ID0gZnVuY3Rpb24odHlwZSkge1xuICBpZiAodGhpcy5fZXZlbnRzKSB7XG4gICAgdmFyIGV2bGlzdGVuZXIgPSB0aGlzLl9ldmVudHNbdHlwZV07XG5cbiAgICBpZiAoaXNGdW5jdGlvbihldmxpc3RlbmVyKSlcbiAgICAgIHJldHVybiAxO1xuICAgIGVsc2UgaWYgKGV2bGlzdGVuZXIpXG4gICAgICByZXR1cm4gZXZsaXN0ZW5lci5sZW5ndGg7XG4gIH1cbiAgcmV0dXJuIDA7XG59O1xuXG5FdmVudEVtaXR0ZXIubGlzdGVuZXJDb3VudCA9IGZ1bmN0aW9uKGVtaXR0ZXIsIHR5cGUpIHtcbiAgcmV0dXJuIGVtaXR0ZXIubGlzdGVuZXJDb3VudCh0eXBlKTtcbn07XG5cbmZ1bmN0aW9uIGlzRnVuY3Rpb24oYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnZnVuY3Rpb24nO1xufVxuXG5mdW5jdGlvbiBpc051bWJlcihhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdudW1iZXInO1xufVxuXG5mdW5jdGlvbiBpc09iamVjdChhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdvYmplY3QnICYmIGFyZyAhPT0gbnVsbDtcbn1cblxuZnVuY3Rpb24gaXNVbmRlZmluZWQoYXJnKSB7XG4gIHJldHVybiBhcmcgPT09IHZvaWQgMDtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9ldmVudHMvZXZlbnRzLmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGlmICh0eXBlb2YgcmVxdWlyZSAhPT0gJ3VuZGVmaW5lZCcpIHt9XG5cbnZhciBpc0Z1bmN0aW9uID0gZnVuY3Rpb24gKGZ1bmN0aW9uVG9DaGVjaykge1xuXHR2YXIgZ2V0VHlwZSA9IHt9O1xuXHRyZXR1cm4gZnVuY3Rpb25Ub0NoZWNrICYmIGdldFR5cGUudG9TdHJpbmcuY2FsbChmdW5jdGlvblRvQ2hlY2spID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xufTtcblxuaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG5cdG1vZHVsZS5leHBvcnRzID0gaXNGdW5jdGlvbjtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vaXNmdW5jdGlvbi9saWIvbWFpbi5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vbGliL2luZGV4Jyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc2hvcnRpZC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbnZhciBhbHBoYWJldCA9IHJlcXVpcmUoJy4vYWxwaGFiZXQnKTtcbnZhciBlbmNvZGUgPSByZXF1aXJlKCcuL2VuY29kZScpO1xudmFyIGRlY29kZSA9IHJlcXVpcmUoJy4vZGVjb2RlJyk7XG52YXIgYnVpbGQgPSByZXF1aXJlKCcuL2J1aWxkJyk7XG52YXIgaXNWYWxpZCA9IHJlcXVpcmUoJy4vaXMtdmFsaWQnKTtcblxuLy8gaWYgeW91IGFyZSB1c2luZyBjbHVzdGVyIG9yIG11bHRpcGxlIHNlcnZlcnMgdXNlIHRoaXMgdG8gbWFrZSBlYWNoIGluc3RhbmNlXG4vLyBoYXMgYSB1bmlxdWUgdmFsdWUgZm9yIHdvcmtlclxuLy8gTm90ZTogSSBkb24ndCBrbm93IGlmIHRoaXMgaXMgYXV0b21hdGljYWxseSBzZXQgd2hlbiB1c2luZyB0aGlyZFxuLy8gcGFydHkgY2x1c3RlciBzb2x1dGlvbnMgc3VjaCBhcyBwbTIuXG52YXIgY2x1c3RlcldvcmtlcklkID0gcmVxdWlyZSgnLi91dGlsL2NsdXN0ZXItd29ya2VyLWlkJykgfHwgMDtcblxuLyoqXG4gKiBTZXQgdGhlIHNlZWQuXG4gKiBIaWdobHkgcmVjb21tZW5kZWQgaWYgeW91IGRvbid0IHdhbnQgcGVvcGxlIHRvIHRyeSB0byBmaWd1cmUgb3V0IHlvdXIgaWQgc2NoZW1hLlxuICogZXhwb3NlZCBhcyBzaG9ydGlkLnNlZWQoaW50KVxuICogQHBhcmFtIHNlZWQgSW50ZWdlciB2YWx1ZSB0byBzZWVkIHRoZSByYW5kb20gYWxwaGFiZXQuICBBTFdBWVMgVVNFIFRIRSBTQU1FIFNFRUQgb3IgeW91IG1pZ2h0IGdldCBvdmVybGFwcy5cbiAqL1xuZnVuY3Rpb24gc2VlZChzZWVkVmFsdWUpIHtcbiAgICBhbHBoYWJldC5zZWVkKHNlZWRWYWx1ZSk7XG4gICAgcmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vKipcbiAqIFNldCB0aGUgY2x1c3RlciB3b3JrZXIgb3IgbWFjaGluZSBpZFxuICogZXhwb3NlZCBhcyBzaG9ydGlkLndvcmtlcihpbnQpXG4gKiBAcGFyYW0gd29ya2VySWQgd29ya2VyIG11c3QgYmUgcG9zaXRpdmUgaW50ZWdlci4gIE51bWJlciBsZXNzIHRoYW4gMTYgaXMgcmVjb21tZW5kZWQuXG4gKiByZXR1cm5zIHNob3J0aWQgbW9kdWxlIHNvIGl0IGNhbiBiZSBjaGFpbmVkLlxuICovXG5mdW5jdGlvbiB3b3JrZXIod29ya2VySWQpIHtcbiAgICBjbHVzdGVyV29ya2VySWQgPSB3b3JrZXJJZDtcbiAgICByZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8qKlxuICpcbiAqIHNldHMgbmV3IGNoYXJhY3RlcnMgdG8gdXNlIGluIHRoZSBhbHBoYWJldFxuICogcmV0dXJucyB0aGUgc2h1ZmZsZWQgYWxwaGFiZXRcbiAqL1xuZnVuY3Rpb24gY2hhcmFjdGVycyhuZXdDaGFyYWN0ZXJzKSB7XG4gICAgaWYgKG5ld0NoYXJhY3RlcnMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBhbHBoYWJldC5jaGFyYWN0ZXJzKG5ld0NoYXJhY3RlcnMpO1xuICAgIH1cblxuICAgIHJldHVybiBhbHBoYWJldC5zaHVmZmxlZCgpO1xufVxuXG4vKipcbiAqIEdlbmVyYXRlIHVuaXF1ZSBpZFxuICogUmV0dXJucyBzdHJpbmcgaWRcbiAqL1xuZnVuY3Rpb24gZ2VuZXJhdGUoKSB7XG4gIHJldHVybiBidWlsZChjbHVzdGVyV29ya2VySWQpO1xufVxuXG4vLyBFeHBvcnQgYWxsIG90aGVyIGZ1bmN0aW9ucyBhcyBwcm9wZXJ0aWVzIG9mIHRoZSBnZW5lcmF0ZSBmdW5jdGlvblxubW9kdWxlLmV4cG9ydHMgPSBnZW5lcmF0ZTtcbm1vZHVsZS5leHBvcnRzLmdlbmVyYXRlID0gZ2VuZXJhdGU7XG5tb2R1bGUuZXhwb3J0cy5zZWVkID0gc2VlZDtcbm1vZHVsZS5leHBvcnRzLndvcmtlciA9IHdvcmtlcjtcbm1vZHVsZS5leHBvcnRzLmNoYXJhY3RlcnMgPSBjaGFyYWN0ZXJzO1xubW9kdWxlLmV4cG9ydHMuZGVjb2RlID0gZGVjb2RlO1xubW9kdWxlLmV4cG9ydHMuaXNWYWxpZCA9IGlzVmFsaWQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc2hvcnRpZC9saWIvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgcmFuZG9tRnJvbVNlZWQgPSByZXF1aXJlKCcuL3JhbmRvbS9yYW5kb20tZnJvbS1zZWVkJyk7XG5cbnZhciBPUklHSU5BTCA9ICcwMTIzNDU2Nzg5YWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXpBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWl8tJztcbnZhciBhbHBoYWJldDtcbnZhciBwcmV2aW91c1NlZWQ7XG5cbnZhciBzaHVmZmxlZDtcblxuZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgc2h1ZmZsZWQgPSBmYWxzZTtcbn1cblxuZnVuY3Rpb24gc2V0Q2hhcmFjdGVycyhfYWxwaGFiZXRfKSB7XG4gICAgaWYgKCFfYWxwaGFiZXRfKSB7XG4gICAgICAgIGlmIChhbHBoYWJldCAhPT0gT1JJR0lOQUwpIHtcbiAgICAgICAgICAgIGFscGhhYmV0ID0gT1JJR0lOQUw7XG4gICAgICAgICAgICByZXNldCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoX2FscGhhYmV0XyA9PT0gYWxwaGFiZXQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChfYWxwaGFiZXRfLmxlbmd0aCAhPT0gT1JJR0lOQUwubGVuZ3RoKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQ3VzdG9tIGFscGhhYmV0IGZvciBzaG9ydGlkIG11c3QgYmUgJyArIE9SSUdJTkFMLmxlbmd0aCArICcgdW5pcXVlIGNoYXJhY3RlcnMuIFlvdSBzdWJtaXR0ZWQgJyArIF9hbHBoYWJldF8ubGVuZ3RoICsgJyBjaGFyYWN0ZXJzOiAnICsgX2FscGhhYmV0Xyk7XG4gICAgfVxuXG4gICAgdmFyIHVuaXF1ZSA9IF9hbHBoYWJldF8uc3BsaXQoJycpLmZpbHRlcihmdW5jdGlvbihpdGVtLCBpbmQsIGFycil7XG4gICAgICAgcmV0dXJuIGluZCAhPT0gYXJyLmxhc3RJbmRleE9mKGl0ZW0pO1xuICAgIH0pO1xuXG4gICAgaWYgKHVuaXF1ZS5sZW5ndGgpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDdXN0b20gYWxwaGFiZXQgZm9yIHNob3J0aWQgbXVzdCBiZSAnICsgT1JJR0lOQUwubGVuZ3RoICsgJyB1bmlxdWUgY2hhcmFjdGVycy4gVGhlc2UgY2hhcmFjdGVycyB3ZXJlIG5vdCB1bmlxdWU6ICcgKyB1bmlxdWUuam9pbignLCAnKSk7XG4gICAgfVxuXG4gICAgYWxwaGFiZXQgPSBfYWxwaGFiZXRfO1xuICAgIHJlc2V0KCk7XG59XG5cbmZ1bmN0aW9uIGNoYXJhY3RlcnMoX2FscGhhYmV0Xykge1xuICAgIHNldENoYXJhY3RlcnMoX2FscGhhYmV0Xyk7XG4gICAgcmV0dXJuIGFscGhhYmV0O1xufVxuXG5mdW5jdGlvbiBzZXRTZWVkKHNlZWQpIHtcbiAgICByYW5kb21Gcm9tU2VlZC5zZWVkKHNlZWQpO1xuICAgIGlmIChwcmV2aW91c1NlZWQgIT09IHNlZWQpIHtcbiAgICAgICAgcmVzZXQoKTtcbiAgICAgICAgcHJldmlvdXNTZWVkID0gc2VlZDtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHNodWZmbGUoKSB7XG4gICAgaWYgKCFhbHBoYWJldCkge1xuICAgICAgICBzZXRDaGFyYWN0ZXJzKE9SSUdJTkFMKTtcbiAgICB9XG5cbiAgICB2YXIgc291cmNlQXJyYXkgPSBhbHBoYWJldC5zcGxpdCgnJyk7XG4gICAgdmFyIHRhcmdldEFycmF5ID0gW107XG4gICAgdmFyIHIgPSByYW5kb21Gcm9tU2VlZC5uZXh0VmFsdWUoKTtcbiAgICB2YXIgY2hhcmFjdGVySW5kZXg7XG5cbiAgICB3aGlsZSAoc291cmNlQXJyYXkubGVuZ3RoID4gMCkge1xuICAgICAgICByID0gcmFuZG9tRnJvbVNlZWQubmV4dFZhbHVlKCk7XG4gICAgICAgIGNoYXJhY3RlckluZGV4ID0gTWF0aC5mbG9vcihyICogc291cmNlQXJyYXkubGVuZ3RoKTtcbiAgICAgICAgdGFyZ2V0QXJyYXkucHVzaChzb3VyY2VBcnJheS5zcGxpY2UoY2hhcmFjdGVySW5kZXgsIDEpWzBdKTtcbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldEFycmF5LmpvaW4oJycpO1xufVxuXG5mdW5jdGlvbiBnZXRTaHVmZmxlZCgpIHtcbiAgICBpZiAoc2h1ZmZsZWQpIHtcbiAgICAgICAgcmV0dXJuIHNodWZmbGVkO1xuICAgIH1cbiAgICBzaHVmZmxlZCA9IHNodWZmbGUoKTtcbiAgICByZXR1cm4gc2h1ZmZsZWQ7XG59XG5cbi8qKlxuICogbG9va3VwIHNodWZmbGVkIGxldHRlclxuICogQHBhcmFtIGluZGV4XG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBsb29rdXAoaW5kZXgpIHtcbiAgICB2YXIgYWxwaGFiZXRTaHVmZmxlZCA9IGdldFNodWZmbGVkKCk7XG4gICAgcmV0dXJuIGFscGhhYmV0U2h1ZmZsZWRbaW5kZXhdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBjaGFyYWN0ZXJzOiBjaGFyYWN0ZXJzLFxuICAgIHNlZWQ6IHNldFNlZWQsXG4gICAgbG9va3VwOiBsb29rdXAsXG4gICAgc2h1ZmZsZWQ6IGdldFNodWZmbGVkXG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Nob3J0aWQvbGliL2FscGhhYmV0LmpzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuLy8gRm91bmQgdGhpcyBzZWVkLWJhc2VkIHJhbmRvbSBnZW5lcmF0b3Igc29tZXdoZXJlXG4vLyBCYXNlZCBvbiBUaGUgQ2VudHJhbCBSYW5kb21pemVyIDEuMyAoQykgMTk5NyBieSBQYXVsIEhvdWxlIChob3VsZUBtc2MuY29ybmVsbC5lZHUpXG5cbnZhciBzZWVkID0gMTtcblxuLyoqXG4gKiByZXR1cm4gYSByYW5kb20gbnVtYmVyIGJhc2VkIG9uIGEgc2VlZFxuICogQHBhcmFtIHNlZWRcbiAqIEByZXR1cm5zIHtudW1iZXJ9XG4gKi9cbmZ1bmN0aW9uIGdldE5leHRWYWx1ZSgpIHtcbiAgICBzZWVkID0gKHNlZWQgKiA5MzAxICsgNDkyOTcpICUgMjMzMjgwO1xuICAgIHJldHVybiBzZWVkLygyMzMyODAuMCk7XG59XG5cbmZ1bmN0aW9uIHNldFNlZWQoX3NlZWRfKSB7XG4gICAgc2VlZCA9IF9zZWVkXztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgbmV4dFZhbHVlOiBnZXROZXh0VmFsdWUsXG4gICAgc2VlZDogc2V0U2VlZFxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zaG9ydGlkL2xpYi9yYW5kb20vcmFuZG9tLWZyb20tc2VlZC5qc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbnZhciByYW5kb21CeXRlID0gcmVxdWlyZSgnLi9yYW5kb20vcmFuZG9tLWJ5dGUnKTtcblxuZnVuY3Rpb24gZW5jb2RlKGxvb2t1cCwgbnVtYmVyKSB7XG4gICAgdmFyIGxvb3BDb3VudGVyID0gMDtcbiAgICB2YXIgZG9uZTtcblxuICAgIHZhciBzdHIgPSAnJztcblxuICAgIHdoaWxlICghZG9uZSkge1xuICAgICAgICBzdHIgPSBzdHIgKyBsb29rdXAoICggKG51bWJlciA+PiAoNCAqIGxvb3BDb3VudGVyKSkgJiAweDBmICkgfCByYW5kb21CeXRlKCkgKTtcbiAgICAgICAgZG9uZSA9IG51bWJlciA8IChNYXRoLnBvdygxNiwgbG9vcENvdW50ZXIgKyAxICkgKTtcbiAgICAgICAgbG9vcENvdW50ZXIrKztcbiAgICB9XG4gICAgcmV0dXJuIHN0cjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBlbmNvZGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc2hvcnRpZC9saWIvZW5jb2RlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbnZhciBjcnlwdG8gPSB0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JyAmJiAod2luZG93LmNyeXB0byB8fCB3aW5kb3cubXNDcnlwdG8pOyAvLyBJRSAxMSB1c2VzIHdpbmRvdy5tc0NyeXB0b1xuXG5mdW5jdGlvbiByYW5kb21CeXRlKCkge1xuICAgIGlmICghY3J5cHRvIHx8ICFjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyNTYpICYgMHgzMDtcbiAgICB9XG4gICAgdmFyIGRlc3QgPSBuZXcgVWludDhBcnJheSgxKTtcbiAgICBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKGRlc3QpO1xuICAgIHJldHVybiBkZXN0WzBdICYgMHgzMDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSByYW5kb21CeXRlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Nob3J0aWQvbGliL3JhbmRvbS9yYW5kb20tYnl0ZS1icm93c2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG52YXIgYWxwaGFiZXQgPSByZXF1aXJlKCcuL2FscGhhYmV0Jyk7XG5cbi8qKlxuICogRGVjb2RlIHRoZSBpZCB0byBnZXQgdGhlIHZlcnNpb24gYW5kIHdvcmtlclxuICogTWFpbmx5IGZvciBkZWJ1Z2dpbmcgYW5kIHRlc3RpbmcuXG4gKiBAcGFyYW0gaWQgLSB0aGUgc2hvcnRpZC1nZW5lcmF0ZWQgaWQuXG4gKi9cbmZ1bmN0aW9uIGRlY29kZShpZCkge1xuICAgIHZhciBjaGFyYWN0ZXJzID0gYWxwaGFiZXQuc2h1ZmZsZWQoKTtcbiAgICByZXR1cm4ge1xuICAgICAgICB2ZXJzaW9uOiBjaGFyYWN0ZXJzLmluZGV4T2YoaWQuc3Vic3RyKDAsIDEpKSAmIDB4MGYsXG4gICAgICAgIHdvcmtlcjogY2hhcmFjdGVycy5pbmRleE9mKGlkLnN1YnN0cigxLCAxKSkgJiAweDBmXG4gICAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkZWNvZGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc2hvcnRpZC9saWIvZGVjb2RlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbnZhciBlbmNvZGUgPSByZXF1aXJlKCcuL2VuY29kZScpO1xudmFyIGFscGhhYmV0ID0gcmVxdWlyZSgnLi9hbHBoYWJldCcpO1xuXG4vLyBJZ25vcmUgYWxsIG1pbGxpc2Vjb25kcyBiZWZvcmUgYSBjZXJ0YWluIHRpbWUgdG8gcmVkdWNlIHRoZSBzaXplIG9mIHRoZSBkYXRlIGVudHJvcHkgd2l0aG91dCBzYWNyaWZpY2luZyB1bmlxdWVuZXNzLlxuLy8gVGhpcyBudW1iZXIgc2hvdWxkIGJlIHVwZGF0ZWQgZXZlcnkgeWVhciBvciBzbyB0byBrZWVwIHRoZSBnZW5lcmF0ZWQgaWQgc2hvcnQuXG4vLyBUbyByZWdlbmVyYXRlIGBuZXcgRGF0ZSgpIC0gMGAgYW5kIGJ1bXAgdGhlIHZlcnNpb24uIEFsd2F5cyBidW1wIHRoZSB2ZXJzaW9uIVxudmFyIFJFRFVDRV9USU1FID0gMTQ1OTcwNzYwNjUxODtcblxuLy8gZG9uJ3QgY2hhbmdlIHVubGVzcyB3ZSBjaGFuZ2UgdGhlIGFsZ29zIG9yIFJFRFVDRV9USU1FXG4vLyBtdXN0IGJlIGFuIGludGVnZXIgYW5kIGxlc3MgdGhhbiAxNlxudmFyIHZlcnNpb24gPSA2O1xuXG4vLyBDb3VudGVyIGlzIHVzZWQgd2hlbiBzaG9ydGlkIGlzIGNhbGxlZCBtdWx0aXBsZSB0aW1lcyBpbiBvbmUgc2Vjb25kLlxudmFyIGNvdW50ZXI7XG5cbi8vIFJlbWVtYmVyIHRoZSBsYXN0IHRpbWUgc2hvcnRpZCB3YXMgY2FsbGVkIGluIGNhc2UgY291bnRlciBpcyBuZWVkZWQuXG52YXIgcHJldmlvdXNTZWNvbmRzO1xuXG4vKipcbiAqIEdlbmVyYXRlIHVuaXF1ZSBpZFxuICogUmV0dXJucyBzdHJpbmcgaWRcbiAqL1xuZnVuY3Rpb24gYnVpbGQoY2x1c3RlcldvcmtlcklkKSB7XG5cbiAgICB2YXIgc3RyID0gJyc7XG5cbiAgICB2YXIgc2Vjb25kcyA9IE1hdGguZmxvb3IoKERhdGUubm93KCkgLSBSRURVQ0VfVElNRSkgKiAwLjAwMSk7XG5cbiAgICBpZiAoc2Vjb25kcyA9PT0gcHJldmlvdXNTZWNvbmRzKSB7XG4gICAgICAgIGNvdW50ZXIrKztcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb3VudGVyID0gMDtcbiAgICAgICAgcHJldmlvdXNTZWNvbmRzID0gc2Vjb25kcztcbiAgICB9XG5cbiAgICBzdHIgPSBzdHIgKyBlbmNvZGUoYWxwaGFiZXQubG9va3VwLCB2ZXJzaW9uKTtcbiAgICBzdHIgPSBzdHIgKyBlbmNvZGUoYWxwaGFiZXQubG9va3VwLCBjbHVzdGVyV29ya2VySWQpO1xuICAgIGlmIChjb3VudGVyID4gMCkge1xuICAgICAgICBzdHIgPSBzdHIgKyBlbmNvZGUoYWxwaGFiZXQubG9va3VwLCBjb3VudGVyKTtcbiAgICB9XG4gICAgc3RyID0gc3RyICsgZW5jb2RlKGFscGhhYmV0Lmxvb2t1cCwgc2Vjb25kcyk7XG5cbiAgICByZXR1cm4gc3RyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJ1aWxkO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Nob3J0aWQvbGliL2J1aWxkLmpzXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG52YXIgYWxwaGFiZXQgPSByZXF1aXJlKCcuL2FscGhhYmV0Jyk7XG5cbmZ1bmN0aW9uIGlzU2hvcnRJZChpZCkge1xuICAgIGlmICghaWQgfHwgdHlwZW9mIGlkICE9PSAnc3RyaW5nJyB8fCBpZC5sZW5ndGggPCA2ICkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIGNoYXJhY3RlcnMgPSBhbHBoYWJldC5jaGFyYWN0ZXJzKCk7XG4gICAgdmFyIGxlbiA9IGlkLmxlbmd0aDtcbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgbGVuO2krKykge1xuICAgICAgICBpZiAoY2hhcmFjdGVycy5pbmRleE9mKGlkW2ldKSA9PT0gLTEpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc1Nob3J0SWQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc2hvcnRpZC9saWIvaXMtdmFsaWQuanNcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSAwO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Nob3J0aWQvbGliL3V0aWwvY2x1c3Rlci13b3JrZXItaWQtYnJvd3Nlci5qc1xuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcclxuICogQ29weXJpZ2h0IChjKSAgMjAxNyBDYWlwaSBMYWJzIC5cclxuICpcclxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuICpcclxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcbiAqXHJcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBVbHRyYSBzY2FsYWJsZSBzdGF0ZS1hd2FyZSBzdG9yZVxyXG4gKlxyXG4gKiBAdG9kbyA6IGxvdCBvZiBvcHRpbXMuLi5cclxuICovXHJcblxyXG52YXIgaXNTdHJpbmcgICAgID0gcmVxdWlyZSgnaXNzdHJpbmcnKVxyXG4gICAgLCBpc0FycmF5ICAgID0gcmVxdWlyZSgnaXNhcnJheScpXHJcbiAgICAsIGlzRnVuY3Rpb24gPSByZXF1aXJlKCdpc2Z1bmN0aW9uJylcclxuICAgICxcclxuICAgIENvbnRleHQgICAgICA9IHJlcXVpcmUoJy4vQ29udGV4dCcpLFxyXG4gICAgRXZlbnRFbWl0dGVyID0gcmVxdWlyZSgnZXZlbnRzJyksXHJcbiAgICBzaG9ydGlkICAgICAgPSByZXF1aXJlKCdzaG9ydGlkJyksXHJcbiAgICBvYmpQcm90byAgICAgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Yoe30pLFxyXG4gICAgb3BlbkNvbnRleHRzID0ge307XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RvcmUgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xyXG5cclxuICAgIHN0YXRpYyB1c2UgICAgICAgICAgICAgICAgICAgICAgICA9IFtdOy8vIG92ZXJyaWRhYmxlIGxpc3Qgb2Ygc291cmNlIHN0b3Jlc1xyXG4gICAgc3RhdGljIGZvbGxvdzsvLyBvdmVycmlkYWJsZSBsaXN0IG9mIHN0b3JlIHRoYXQgd2lsbCBhbGxvdyBwdXNoIGlmIHVwZGF0ZWRcclxuICAgIHN0YXRpYyByZXF1aXJlO1xyXG4gICAgc3RhdGljIHN0YXRpY0NvbnRleHQgICAgICAgICAgICAgID0gbmV3IENvbnRleHQoe30sIHtpZCA6IFwic3RhdGljXCJ9KTtcclxuICAgIHN0YXRpYyBpbml0aWFsU3RhdGUgICAgICAgICAgICAgICA9IHVuZGVmaW5lZDsvLyBkZWZhdWx0IHN0YXRlXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAgICovXHJcbiAgICAgICAgICAgc3RhdGljIGRlZmF1bHRNYXhMaXN0ZW5lcnMgPSAxMDA7XHJcbiAgICAvKipcclxuICAgICAqIGlmIHJldGFpbiBnb2VzIHRvIDAgOlxyXG4gICAgICogZmFsc2UgdG8gbm90IGRlc3Ryb3ksXHJcbiAgICAgKiAwIHRvIHN5bmMgYXV0byBkZXN0cm95XHJcbiAgICAgKiBNcyB0byBhdXRvZGVzdHJveSBhZnRlciB0bSBtcyBpZiBubyByZXRhaW4gaGFzIGJlZW4gY2FsbGVkXHJcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbnxJbnR9XHJcbiAgICAgKi9cclxuICAgICAgICAgICBzdGF0aWMgcGVyc2lzdGVuY2VUbSAgICAgICA9IGZhbHNlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogZ2V0IGEgQnVpbGRlci1rZXkgcGFpciBmb3IgU3RvcmU6Om1hcFxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcclxuICAgICAqIEByZXR1cm5zIHt7c3RvcmU6IFN0b3JlLCBuYW1lOiAqfX1cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGFzKCBuYW1lICkge1xyXG4gICAgICAgIHJldHVybiB7c3RvcmUgOiB0aGlzLCBuYW1lfTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE1hcCBhbGwgbmFtZWQgc3RvcmVzIGluIHtrZXlzfSB0byB0aGUge29iamVjdH0ncyBzdGF0ZVxyXG4gICAgICogSG9vayBjb21wb25lbnRXaWxsVW5tb3VudCAoZm9yIHJlYWN0IGNvbXApIG9yIGRlc3Ryb3kgdG8gdW5CaW5kIHRoZW0gYXV0b21hdGljYWxseVxyXG4gICAgICogQHN0YXRpY1xyXG4gICAgICogQHBhcmFtIG9iamVjdCB7UmVhY3QuQ29tcG9uZW50fFN0b3JlfC4uLn0gdGFyZ2V0IHN0YXRlIGF3YXJlIG9iamVjdFxyXG4gICAgICogQHBhcmFtIGtleXMge0FycmF5fSBFeCA6IFtcInNlc3Npb25cIiwgXCJvdGhlclN0YXRpY05hbWVkU3RvcmU6a2V5XCIsIHN0b3JlLmFzKCdhbm90aGVyS2V5JyldXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBtYXAoIGNvbXBvbmVudCwga2V5cywgY29udGV4dCwgb3JpZ2luLCBzZXRJbml0aWFsID0gZmFsc2UgKSB7XHJcbiAgICAgICAgdmFyIHRhcmdldFJldnMgICAgID0gY29tcG9uZW50Ll9yZXZzIHx8IHt9O1xyXG4gICAgICAgIC8vIHZhciB0YXJnZXRDb250ZXh0ICA9IGNvbXBvbmVudC5zdG9yZXMgfHwgKGNvbXBvbmVudC5zdG9yZXMgPSBuZXcgQ29udGV4dCh7fSkpO1xyXG4gICAgICAgIHZhciBpbml0aWFsT3V0cHV0cyA9IHt9O1xyXG4gICAgICAgIGtleXMgICAgICAgICAgICAgICA9IGlzQXJyYXkoa2V5cykgPyBbLi4ua2V5c10gOiBba2V5c107XHJcblxyXG5cclxuICAgICAgICBjb250ZXh0ID0gY29udGV4dCB8fCBTdG9yZS5zdGF0aWNDb250ZXh0O1xyXG5cclxuICAgICAgICAvLyBpZiAoIXRhcmdldENvbnRleHQuX19jb250ZXh0KVxyXG4gICAgICAgIC8vICAgICBkZWJ1Z2dlcjtcclxuXHJcbiAgICAgICAga2V5cyAgICAgICAgICAgPSBrZXlzLmZpbHRlcihcclxuICAgICAgICAgICAgLy8gQHRvZG8gOiB1c2UgcXVlcnkgcmVmc1xyXG4gICAgICAgICAgICAvLyAoc3RvcmUpKFxcLnN0b3JlKSooXFxbKFxcKnwocHJvcHMpXFx3KykrKVxcXSk/KFxcOmFsaWFzKVxyXG4gICAgICAgICAgICAoIGtleSApID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICggIWtleSApIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiTm90IGEgbWFwcGFibGUgc3RvcmUgaXRlbSAnXCIgKyBrZXkgKyBcIicgaW4gXCIgKyBvcmlnaW4gKyAnICEhJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbGV0IG5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgYWxpYXMsXHJcbiAgICAgICAgICAgICAgICAgICAgc3RvcmU7XHJcbiAgICAgICAgICAgICAgICBpZiAoIGtleS5zdG9yZSAmJiBrZXkubmFtZSApIHtcclxuICAgICAgICAgICAgICAgICAgICBhbGlhcyA9IG5hbWUgPSBrZXkubmFtZTtcclxuICAgICAgICAgICAgICAgICAgICBzdG9yZSA9IGtleS5zdG9yZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIGlzRnVuY3Rpb24oa2V5KSApIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lID0gYWxpYXMgPSBrZXkubmFtZSB8fCBrZXkuZGVmYXVsdE5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RvcmUgPSBrZXk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGtleSAgID0ga2V5Lm1hdGNoKC8oW1xcd19dKykoPzpcXDpcXFsoXFwqKVxcXSk/KD86XFw6KFxcKikpPy8pO1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWUgID0ga2V5WzBdO1xyXG4gICAgICAgICAgICAgICAgICAgIHN0b3JlID0gY29udGV4dC5fX2NvbnRleHRba2V5WzBdXTtcclxuICAgICAgICAgICAgICAgICAgICBhbGlhcyA9IGtleVsxXSA9PSAnKicgPyBudWxsIDoga2V5WzJdIHx8IGtleVswXTsvLyBhbGxvdyBiaW5kaW5nIHByb3BzICAoWypdKVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICggdGFyZ2V0UmV2c1tuYW1lXSApIHJldHVybiBmYWxzZTsvLyBpZ25vcmUgZGJsIHVzZXMgZm9yIG5vd1xyXG4gICAgICAgICAgICAgICAgaWYgKCAhc3RvcmUgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIk5vdCBhIG1hcHBhYmxlIHN0b3JlIGl0ZW0gJ1wiICsgbmFtZSArIFwiL1wiICsgYWxpYXMgKyBcIicgaW4gXCIgKyBvcmlnaW4gKyAnICEhJywgc3RvcmUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIGlzRnVuY3Rpb24oc3RvcmUpICkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW91bnRTdG9yZShuYW1lLCBjb250ZXh0KVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb250ZXh0Ll9fY29udGV4dFtuYW1lXS5iaW5kKGNvbXBvbmVudCwgYWxpYXMsIHNldEluaXRpYWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGlmICggY29udGV4dC5fX2NvbnRleHRba2V5WzBdXS5zdGF0ZSApIHsvLyBkbyBzeW5jIHB1c2ggYWZ0ZXIgY29uc3RydWN0b3JcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgY29udGV4dC5fX2NvbnRleHRba2V5WzBdXS5wdXNoKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzdG9yZS5iaW5kKGNvbXBvbmVudCwgYWxpYXMsIHNldEluaXRpYWwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0UmV2c1thbGlhc10gPSB0YXJnZXRSZXZzW2FsaWFzXSB8fCB0cnVlO1xyXG4gICAgICAgICAgICAgICAgLy8gIXRhcmdldENvbnRleHQuX19jb250ZXh0W2FsaWFzXSAmJiB0YXJnZXRDb250ZXh0LnJlZ2lzdGVyKHtbYWxpYXNdIDogY29udGV4dC5fX2NvbnRleHRbbmFtZV19KTtcclxuICAgICAgICAgICAgICAgIGlmICggY29udGV4dC5fX2NvbnRleHRbbmFtZV0uaGFzT3duUHJvcGVydHkoJ2RhdGFzJykgKVxyXG4gICAgICAgICAgICAgICAgICAgIGluaXRpYWxPdXRwdXRzW2FsaWFzXSA9IGNvbnRleHQuZGF0YXNbbmFtZV07XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdmFyIG1peGVkQ1dVbm1vdW50LFxyXG4gICAgICAgICAgICB1bk1vdW50S2V5ID0gY29tcG9uZW50LmlzUmVhY3RDb21wb25lbnQgPyBcImNvbXBvbmVudFdpbGxVbm1vdW50XCIgOiBcImRlc3Ryb3lcIjtcclxuXHJcbiAgICAgICAgaWYgKCBjb21wb25lbnQuaGFzT3duUHJvcGVydHkodW5Nb3VudEtleSkgKSB7XHJcbiAgICAgICAgICAgIG1peGVkQ1dVbm1vdW50ID0gY29tcG9uZW50W3VuTW91bnRLZXldO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29tcG9uZW50W3VuTW91bnRLZXldID0gZnVuY3Rpb24gKCkgey8vIHRvZG8gaG9wXHJcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzW3VuTW91bnRLZXldO1xyXG4gICAgICAgICAgICBpZiAoIG1peGVkQ1dVbm1vdW50IClcclxuICAgICAgICAgICAgICAgIHRoaXNbdW5Nb3VudEtleV0gPSBtaXhlZENXVW5tb3VudDtcclxuICAgICAgICAgICAga2V5cy5tYXAoXHJcbiAgICAgICAgICAgICAgICAoIGtleSApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpYXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICgga2V5LnN0b3JlICYmIGtleS5uYW1lICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlhcyA9IG5hbWUgPSBrZXkubmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmUgPSBrZXkuc3RvcmU7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICggaXNGdW5jdGlvbihrZXkpICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lID0gYWxpYXMgPSBrZXkubmFtZSB8fCBrZXkuZGVmYXVsdE5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlID0gY29udGV4dC5fX2NvbnRleHRbbmFtZV07XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5ICAgPSBrZXkuc3BsaXQoJzonKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZSAgPSBrZXlbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlID0gY29udGV4dC5fX2NvbnRleHRba2V5WzBdXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpYXMgPSBrZXlbMV0gfHwga2V5WzBdO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc3RvcmUgJiYgIWlzRnVuY3Rpb24oc3RvcmUpICYmIHN0b3JlLnVuQmluZChjb21wb25lbnQsIGFsaWFzKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpc1t1bk1vdW50S2V5XSAmJiB0aGlzW3VuTW91bnRLZXldLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gaW5pdGlhbE91dHB1dHM7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldENvbnRleHQoIGNvbnRleHRzICkge1xyXG4gICAgICAgIGxldCBza2V5ID0gaXNBcnJheShjb250ZXh0cykgPyBjb250ZXh0cy5zb3J0KCggYSwgYiApID0+IHtcclxuICAgICAgICAgICAgaWYgKCBhLmZpcnN0bmFtZSA8IGIuZmlyc3RuYW1lICkgcmV0dXJuIC0xO1xyXG4gICAgICAgICAgICBpZiAoIGEuZmlyc3RuYW1lID4gYi5maXJzdG5hbWUgKSByZXR1cm4gMTtcclxuICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgfSkuam9pbignOjonKSA6IGNvbnRleHRzO1xyXG4gICAgICAgIHJldHVybiBDb250ZXh0LmNvbnRleHRzW3NrZXldID0gQ29udGV4dC5jb250ZXh0c1tza2V5XSB8fCBuZXcgQ29udGV4dCh7fSwge2lkIDogc2tleX0pO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBtb3VudFN0b3JlKCBuYW1lLCBjb250ZXh0LCBzdG9yZSwgc3RhdGUsIGRhdGFzICkge1xyXG4gICAgICAgIGxldCBjdHgsIGNvbnRleHRNYXAgPSBjb250ZXh0Ll9fY29udGV4dDtcclxuICAgICAgICBjb250ZXh0TWFwW25hbWVdICAgID0gc3RvcmUgPSBzdG9yZSB8fCBjb250ZXh0TWFwW25hbWVdO1xyXG4gICAgICAgIGlmICggIXN0b3JlICkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiTm90IGEgbWFwcGFibGUgc3RvcmUgaXRlbSAnXCIgKyBuYW1lICsgJyAhIScsIHN0b3JlKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoIGlzRnVuY3Rpb24oc3RvcmUpICkge1xyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICBpZiAoIHN0b3JlICYmIChzdG9yZS5jb250ZXh0cyB8fCBzdG9yZS5jb250ZXh0KSApIHtcclxuICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuZ2V0Q29udGV4dChzdG9yZS5jb250ZXh0cyB8fCBbc3RvcmUuY29udGV4dF0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGN0eC5yZWdpc3Rlcih7W25hbWVdIDogY3R4Ll9fY29udGV4dFtuYW1lXSB8fCBzdG9yZX0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnRleHRNYXBbbmFtZV0gPSBjdHhbbmFtZV0gPSBuZXcgc3RvcmUoY29udGV4dCwge3N0YXRlLCBkYXRhc30pO1xyXG4gICAgICAgICAgICAgICAgY3R4Ll93YXRjaFN0b3JlKG5hbWUpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGN0eFtuYW1lXTtcclxuICAgICAgICAgICAgfSBlbHNlXHJcbiAgICAgICAgICAgICAgICBzdG9yZSA9IGNvbnRleHRNYXBbbmFtZV0gPSBuZXcgc3RvcmUoY29udGV4dCwge3N0YXRlLCBkYXRhc30pO1xyXG4gICAgICAgICAgICBjb250ZXh0TWFwW25hbWVdLnJlbGluayhuYW1lKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoIHN0YXRlICE9PSB1bmRlZmluZWQgJiYgZGF0YXMgPT09IHVuZGVmaW5lZCApXHJcbiAgICAgICAgICAgICAgICBzdG9yZS5zZXRTdGF0ZShzdGF0ZSk7XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKCBzdGF0ZSAhPT0gdW5kZWZpbmVkIClcclxuICAgICAgICAgICAgICAgIHN0b3JlLnN0YXRlID0gc3RhdGU7XHJcblxyXG4gICAgICAgICAgICBpZiAoIGRhdGFzICE9PSB1bmRlZmluZWQgKVxyXG4gICAgICAgICAgICAgICAgc3RvcmUucHVzaChkYXRhcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzdG9yZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbnN0cnVjdG9yLCB3aWxsIGJ1aWxkIGEgcmVzY29wZSBzdG9yZVxyXG4gICAgICpcclxuICAgICAqIChjb250ZXh0LCB7cmVxdWlyZSx1c2UscmVmaW5lLHN0YXRlLCBkYXRhc30pXHJcbiAgICAgKiAoY29udGV4dClcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gY29udGV4dCB7b2JqZWN0fSBjb250ZXh0IHdoZXJlIHRvIGZpbmQgdGhlIG90aGVyIHN0b3JlcyAoZGVmYXVsdCA6IHN0YXRpYyBzdGF0aWNDb250ZXh0IClcclxuICAgICAqIEBwYXJhbSBrZXlzIHtBcnJheX0gKHBhc3NlZCB0byBTdG9yZTo6bWFwKSBFeCA6IFtcInNlc3Npb25cIiwgXCJvdGhlck5hbWVkU3RvcmU6a2V5XCIsIG90aGVyU3RvcmUuYXMoXCJvdGhlcktleVwiKV1cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB2YXIgYXJneiAgICAgICAgID0gWy4uLmFyZ3VtZW50c10sXHJcbiAgICAgICAgICAgIF9zdGF0aWMgICAgICA9IHRoaXMuY29uc3RydWN0b3IsXHJcbiAgICAgICAgICAgIGNvbnRleHQgICAgICA9ICFpc0FycmF5KGFyZ3pbMF0pICYmICFpc1N0cmluZyhhcmd6WzBdKSA/IGFyZ3ouc2hpZnQoKSA6IF9zdGF0aWMuc3RhdGljQ29udGV4dCxcclxuICAgICAgICAgICAgY2ZnICAgICAgICAgID0gYXJnelswXSAmJiAhaXNBcnJheShhcmd6WzBdKSAmJiAhaXNTdHJpbmcoYXJnelswXSkgPyBhcmd6LnNoaWZ0KCkgOiB7fSxcclxuICAgICAgICAgICAgbmFtZSAgICAgICAgID0gaXNTdHJpbmcoYXJnelswXSkgPyBhcmd6WzBdIDogY2ZnLm5hbWUgfHwgX3N0YXRpYy5uYW1lLFxyXG4gICAgICAgICAgICB3YXRjaHMgICAgICAgPSBpc0FycmF5KGFyZ3pbMF0pID8gYXJnei5zaGlmdCgpIDogY2ZnLnVzZSB8fCBbXSwvLyB3YXRjaHMgbmVlZCB0byBiZSBkZWZpbmVkIGFmdGVyIGFsbCB0aGUgc3RvcmUgYXJlIHJlZ2lzdGVyZWQgOiBzbyB3ZSBjYW4ndCBkZWFsIHdpdGggYW55IFwic3RhdGljIHVzZVwiIGF1dG9tYXRpY2x5XHJcbiAgICAgICAgICAgIHJlZmluZSAgICAgICA9IGlzRnVuY3Rpb24oYXJnelswXSkgPyBhcmd6LnNoaWZ0KCkgOiBjZmcucmVmaW5lIHx8IG51bGwsXHJcbiAgICAgICAgICAgIGluaXRpYWxTdGF0ZSA9IF9zdGF0aWMuaW5pdGlhbFN0YXRlO1xyXG5cclxuICAgICAgICB0aGlzLl91aWQgICAgICAgICAgPSBjZmcuX3VpZCB8fCBzaG9ydGlkLmdlbmVyYXRlKCk7XHJcbiAgICAgICAgdGhpcy5fbWF4TGlzdGVuZXJzID0gY2ZnLmRlZmF1bHRNYXhMaXN0ZW5lcnMgfHwgU3RvcmUuZGVmYXVsdE1heExpc3RlbmVycztcclxuICAgICAgICB0aGlzLmxvY2tzICAgICAgICAgPSAwO1xyXG4gICAgICAgIHRoaXMuX29uU3RhYmlsaXplICA9IFtdO1xyXG5cclxuICAgICAgICB0aGlzLl9wZXJzaXN0ZW5jZVRtID0gY2ZnLnBlcnNpc3RlbmNlVG0gfHwgdGhpcy5jb25zdHJ1Y3Rvci5wZXJzaXN0ZW5jZVRtO1xyXG4gICAgICAgIGlmICggaXNTdHJpbmcoYXJnelswXSkgKSB7XHJcbiAgICAgICAgICAgIGlmICggY29udGV4dC5fX2NvbnRleHRbbmFtZV0gKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwiUmVTY29wZTogT3ZlcndyaXRpbmcgYW4gZXhpc3Rpbmcgc3RhdGljIG5hbWVkIHN0b3JlICggJXMgKSAhIVwiLCBuYW1lKTtcclxuICAgICAgICAgICAgY29udGV4dC5fX2NvbnRleHRbbmFtZV0gPSB0aGlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCBjZmcgJiYgY2ZnLm9uICkge1xyXG4gICAgICAgICAgICB0aGlzLm9uKGNmZy5vbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHRoaXMuc3RhdGUgICAgICA9IHRoaXMuc3RhdGUgfHwge307XHJcblxyXG4gICAgICAgIHRoaXMuX3VzZSA9IHdhdGNocztcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG5cclxuICAgICAgICBpZiAoIGNvbnRleHQuc3RvcmVzICkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRleHRPYmogPSBjb250ZXh0O1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRleHQgICAgPSBjb250ZXh0LnN0b3JlcztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRleHRPYmogPSBuZXcgQ29udGV4dChjb250ZXh0KTtcclxuICAgICAgICAgICAgdGhpcy5jb250ZXh0ICAgID0gY29udGV4dC5zdG9yZXM7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgdGhpcy5fc3RhYmxlICAgICAgID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLl9yZXYgICAgICAgICAgPSAxO1xyXG4gICAgICAgIHRoaXMuX3JldnMgICAgICAgICA9IHt9O1xyXG4gICAgICAgIHRoaXMuc3RvcmVzICAgICAgICA9IHt9O1xyXG4gICAgICAgIHRoaXMuX19yZXRhaW5Mb2NrcyA9IHthbGwgOiAwfTtcclxuICAgICAgICB0aGlzLl9yZXF1aXJlICAgICAgPSBbXTtcclxuXHJcbiAgICAgICAgaWYgKCBfc3RhdGljLnJlcXVpcmUgKVxyXG4gICAgICAgICAgICB0aGlzLl9yZXF1aXJlLnB1c2goLi4uX3N0YXRpYy5yZXF1aXJlKTtcclxuICAgICAgICBpZiAoIGNmZy5yZXF1aXJlIClcclxuICAgICAgICAgICAgdGhpcy5fcmVxdWlyZS5wdXNoKC4uLmNmZy5yZXF1aXJlKTtcclxuXHJcbiAgICAgICAgdGhpcy5fZm9sbG93ZXJzID0gW107XHJcblxyXG4gICAgICAgIGlmICggY2ZnLmhhc093blByb3BlcnR5KFwiZGF0YXNcIikgJiYgY2ZnLmRhdGFzICE9PSB1bmRlZmluZWQgKVxyXG4gICAgICAgICAgICB0aGlzLmRhdGFzID0gY2ZnLmRhdGFzO1xyXG4gICAgICAgIGlmICggY2ZnLmhhc093blByb3BlcnR5KFwic3RhdGVcIikgJiYgY2ZnLnN0YXRlICE9PSB1bmRlZmluZWQgKVxyXG4gICAgICAgICAgICBpbml0aWFsU3RhdGUgPSBjZmcuc3RhdGU7XHJcblxyXG4gICAgICAgIGlmICggcmVmaW5lIClcclxuICAgICAgICAgICAgdGhpcy5yZWZpbmUgPSByZWZpbmU7XHJcblxyXG4gICAgICAgIGlmICggISF0aGlzLl91c2UgJiYgdGhpcy5fdXNlLmxlbmd0aCApIHsvLyBpZiB0aGVyZSBpbml0aWFsIHdhdGNocyBhbnl3YXlcclxuICAgICAgICAgICAgdGhpcy5wdWxsKHRoaXMuX3VzZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIGluaXRpYWxTdGF0ZSApIHsvLyBzeW5jIHJlZmluZVxyXG4gICAgICAgICAgICB0aGlzLnN0YXRlID0gey4uLmluaXRpYWxTdGF0ZX07XHJcbiAgICAgICAgICAgIGlmICggdGhpcy5pc0NvbXBsZXRlKCkgJiYgdGhpcy5kYXRhcyA9PT0gdW5kZWZpbmVkIClcclxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YXMgPSB0aGlzLnJlZmluZSh0aGlzLmRhdGFzLCB0aGlzLnN0YXRlLCB0aGlzLnN0YXRlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fc3RhYmxlID0gdGhpcy5kYXRhcyAhPT0gdW5kZWZpbmVkOy8vIHN0YWJsZSBpZiBpdCBoYXZlIGluaXRpYWwgcmVzdWx0IGRhdGFzXHJcbiAgICAgICAgIXRoaXMuX3N0YWJsZSAmJiB0aGlzLmVtaXQoJ3Vuc3RhYmxlJywgdGhpcy5zdGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBPdmVycmlkYWJsZSBtZXRob2QgdG8ga25vdyBpZiBhIHN0YXRlIGNoYW5nZSBzaG91bGQgYmUgcHJvcGFnIHRvIHRoZSBsaXN0ZW5pbmcgc3RvcmVzICYgY29tcG9uZW50c1xyXG4gICAgICogSWYgc3RhdGljIGZvbGxvdyBpcyBkZWZpbmVkLCBzaG91bGRQcm9wYWcgd2lsbCByZXR1cm4gdHJ1ZSBpZiBhbnkgb2YgdGhlIFwiZm9sbG93XCIga2V5cyB3YXMgdXBkYXRlZFxyXG4gICAgICogSWYgbm90IGl0IHdpbGwgYWx3YXlzIHJldHVybiB0cnVlXHJcbiAgICAgKi9cclxuICAgIHNob3VsZFByb3BhZyggbkRhdGFzICkge1xyXG4gICAgICAgIHZhciBfc3RhdGljID0gdGhpcy5jb25zdHJ1Y3RvciwgcixcclxuICAgICAgICAgICAgY0RhdGFzICA9IHRoaXMuZGF0YXM7XHJcblxyXG4gICAgICAgIC8vIGlmICggIWNTdGF0ZSApXHJcbiAgICAgICAgLy8gICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIGlmICggIWNEYXRhcyAmJiAoIV9zdGF0aWMuZm9sbG93IHx8ICFfc3RhdGljLmZvbGxvdy5sZW5ndGggfHxcclxuICAgICAgICAgICAgICAgIF9zdGF0aWMuZm9sbG93ICYmIF9zdGF0aWMuZm9sbG93LnJlZHVjZSgoIHIsIGkgKSA9PiAociB8fCBuRGF0YXMgJiYgbkRhdGFzW2ldKSwgZmFsc2UpKSApXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG5cclxuICAgICAgICBpZiAoIGlzQXJyYXkoX3N0YXRpYy5mb2xsb3cpIClcclxuICAgICAgICAgICAgX3N0YXRpYy5mb2xsb3cuZm9yRWFjaChcclxuICAgICAgICAgICAgICAgICgga2V5ICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHIgPSByIHx8IChuRGF0YXMgPyBjRGF0YXNba2V5XSAhPT0gbkRhdGFzW2tleV0gOiBjRGF0YXMgJiYgY0RhdGFzW2tleV0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgZWxzZSBpZiAoIF9zdGF0aWMuZm9sbG93ID09PSAnc3RyaWN0JyApXHJcbiAgICAgICAgICAgIHIgPSBuRGF0YXMgPT09IGNEYXRhcztcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY0RhdGFzICYmIE9iamVjdC5rZXlzKGNEYXRhcykuZm9yRWFjaChcclxuICAgICAgICAgICAgICAgICgga2V5ICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHIgPSByIHx8IChuRGF0YXMgPyBjRGF0YXNba2V5XSAhPT0gbkRhdGFzW2tleV0gOiBjRGF0YXMgJiYgY0RhdGFzW2tleV0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIG5EYXRhcyAmJiBPYmplY3Qua2V5cyhuRGF0YXMpLmZvckVhY2goXHJcbiAgICAgICAgICAgICAgICAoIGtleSApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByID0gciB8fCAobkRhdGFzID8gY0RhdGFzW2tleV0gIT09IG5EYXRhc1trZXldIDogY0RhdGFzICYmIGNEYXRhc1trZXldKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuICEhcjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE92ZXJyaWRhYmxlIHJlZmluZXIgLyByZW1hcHBlclxyXG4gICAgICogSWYgc3RhdGUgb3IgbGFzdFB1YmxpY1N0YXRlIGFyZSBzaW1wbGUgaGFzaCBtYXBzIHJlZmluZSB3aWxsIHJldHVybiB7Li4uZGF0YXMsIC4uLnN0YXRlfVxyXG4gICAgICogaWYgbm90IGl0IHdpbGwgcmV0dXJuIHRoZSBsYXN0IHByaXZhdGUgc3RhdGVcclxuICAgICAqIEBwYXJhbSBkYXRhc1xyXG4gICAgICogQHBhcmFtIHN0YXRlXHJcbiAgICAgKiBAcmV0dXJucyB7Kn1cclxuICAgICAqL1xyXG4gICAgcmVmaW5lKCBkYXRhcywgc3RhdGUsIGNoYW5nZXMgKSB7XHJcbiAgICAgICAgc3RhdGUgPSBzdGF0ZSB8fCB0aGlzLnN0YXRlO1xyXG5cclxuICAgICAgICBpZiAoICFkYXRhcyB8fCBkYXRhcy5fX3Byb3RvX18gIT09IG9ialByb3RvIHx8IHN0YXRlLl9fcHJvdG9fXyAhPT0gb2JqUHJvdG8gKVxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICByZXR1cm4gey4uLmRhdGFzLCAuLi5zdGF0ZX1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIERlYm91bmNlIHRoaXMgc3RvcmUgcHJvcGFnYXRpb24gKCAmIHJlZHVjaW5nIClcclxuICAgICAqIEBwYXJhbSBjYlxyXG4gICAgICovXHJcbiAgICBzdGFiaWxpemUoIGNiICkge1xyXG4gICAgICAgIHZhciBtZSA9IHRoaXM7XHJcbiAgICAgICAgY2IgJiYgbWUub25jZSgnc3RhYmxlJywgY2IpO1xyXG4gICAgICAgIHRoaXMuX3N0YWJsZSAmJiB0aGlzLmVtaXQoJ3Vuc3RhYmxlJywgdGhpcy5zdGF0ZSwgdGhpcy5kYXRhcyk7XHJcblxyXG4gICAgICAgIG1lLl9zdGFibGUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgaWYgKCB0aGlzLl9zdGFiaWxpemVyIClcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX3N0YWJpbGl6ZXIpO1xyXG5cclxuICAgICAgICB0aGlzLl9zdGFiaWxpemVyID0gc2V0VGltZW91dChcclxuICAgICAgICAgICAgdGhpcy5wdXNoLmJpbmQoXHJcbiAgICAgICAgICAgICAgICB0aGlzLFxyXG4gICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICgpID0+IHsvL0B0b2RvXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gbWUuX3N0YWJsZSAgICAgICA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc3RhYmlsaXplciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5yZWxlYXNlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICkpO1xyXG4gICAgfVxyXG5cclxuICAgIGRpc3BhdGNoKCBldmVudCApIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBQdWxsIHN0b3JlcyBpbiB0aGUgcHJpdmF0ZSBzdGF0ZVxyXG4gICAgICogQHBhcmFtIHN0b3JlcyAge0FycmF5fSAocGFzc2VkIHRvIFN0b3JlOjptYXApIEV4IDogW1wic2Vzc2lvblwiLCBcIm90aGVyTmFtZWRTdG9yZTprZXlcIiwgb3RoZXJTdG9yZS5hcyhcIm90aGVyS2V5XCIpXVxyXG4gICAgICovXHJcbiAgICBwdWxsKCBzdG9yZXMsIGRvV2FpdCwgb3JpZ2luICkge1xyXG4gICAgICAgIGxldCBpbml0aWFsT3V0cHV0cyA9IFN0b3JlLm1hcCh0aGlzLCBzdG9yZXMsIHRoaXMuY29udGV4dE9iaiwgb3JpZ2luLCB0cnVlKTtcclxuICAgICAgICBpZiAoIGRvV2FpdCApIHtcclxuICAgICAgICAgICAgdGhpcy53YWl0KCk7XHJcbiAgICAgICAgICAgIHN0b3Jlcy5mb3JFYWNoKCggcyApID0+IHRoaXMuY29udGV4dFtzXSAmJiB0aGlzLndhaXQodGhpcy5jb250ZXh0W3NdKSk7XHJcbiAgICAgICAgICAgIHRoaXMucmVsZWFzZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaW5pdGlhbE91dHB1dHM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBcHBseSByZWZpbmUvcmVtYXAgb24gdGhlIHByaXZhdGUgc3RhdGUgJiBwdXNoIHRoZSByZXN1bHRpbmcgXCJwdWJsaWNcIiBzdGF0ZSB0byBmb2xsb3dlcnNcclxuICAgICAqIEBwYXJhbSBjYlxyXG4gICAgICovXHJcbiAgICBwdXNoKCBkYXRhcywgZm9yY2UsIGNiICkge1xyXG4gICAgICAgIGNiICAgICAgICAgICAgPSBmb3JjZSA9PT0gdHJ1ZSA/IGNiIDogZm9yY2U7XHJcbiAgICAgICAgZm9yY2UgICAgICAgICA9IGZvcmNlID09PSB0cnVlO1xyXG4gICAgICAgIHZhciBpICAgICAgICAgPSAwLFxyXG4gICAgICAgICAgICBtZSAgICAgICAgPSB0aGlzLFxyXG4gICAgICAgICAgICBuZXh0U3RhdGUgPSAhZGF0YXMgJiYgey4uLnRoaXMuc3RhdGUsIC4uLnRoaXMuX2NoYW5nZXNTV30gfHwgdGhpcy5zdGF0ZSxcclxuICAgICAgICAgICAgbmV4dERhdGFzID0gZGF0YXMgfHxcclxuICAgICAgICAgICAgICAgICh0aGlzLmlzQ29tcGxldGUobmV4dFN0YXRlKSA/IHRoaXMucmVmaW5lKHRoaXMuZGF0YXMsIG5leHRTdGF0ZSwgdGhpcy5fY2hhbmdlc1NXKSA6IHRoaXMuZGF0YXMpO1xyXG5cclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IG5leHRTdGF0ZTtcclxuICAgICAgICBpZiAoICFmb3JjZSAmJlxyXG4gICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICAoIXRoaXMuZGF0YXMgJiYgdGhpcy5kYXRhcyA9PT0gbmV4dERhdGFzKSB8fCAhdGhpcy5zaG91bGRQcm9wYWcobmV4dERhdGFzKVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGNiICYmIGNiKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZGF0YXMgPSBuZXh0RGF0YXM7XHJcbiAgICAgICAgdGhpcy5sb2NrcysrO1xyXG4gICAgICAgIHRoaXMucmVsZWFzZShjYik7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVXBkYXRlIHRoZSBjdXJyZW50IHByaXZhdGUgc3RhdGUgJiBwdXNoIGl0IG9uY2UgdGhlIHN0b3JlIGlzIHN0YWJsZVxyXG4gICAgICogQHBhcmFtIHBTdGF0ZVxyXG4gICAgICogQHBhcmFtIGNiXHJcbiAgICAgKi9cclxuICAgIHNldFN0YXRlKCBwU3RhdGUsIGNiLCBzeW5jICkge1xyXG4gICAgICAgIHZhciBpICAgICAgID0gMCwgY2hhbmdlLFxyXG4gICAgICAgICAgICBjaGFuZ2VzID0gdGhpcy5fY2hhbmdlc1NXID0gdGhpcy5fY2hhbmdlc1NXIHx8IHt9O1xyXG4gICAgICAgIGZvciAoIHZhciBrIGluIHBTdGF0ZSApXHJcbiAgICAgICAgICAgIGlmICggIXRoaXMuc3RhdGUgfHwgcFN0YXRlLmhhc093blByb3BlcnR5KGspXHJcbiAgICAgICAgICAgICAgICAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgcFN0YXRlW2tdICE9IHRoaXMuc3RhdGVba11cclxuICAgICAgICAgICAgICAgICAgICB8fFxyXG4gICAgICAgICAgICAgICAgICAgICh0aGlzLnN0YXRlW2tdICYmIHBTdGF0ZVtrXSAmJiAocFN0YXRlW2tdLl9yZXYgIT0gdGhpcy5fcmV2c1trXSkpLy8gcmV2L2hhc2ggdXBkYXRlXHJcbiAgICAgICAgICAgICAgICApICkge1xyXG4gICAgICAgICAgICAgICAgY2hhbmdlICAgICAgICA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yZXZzW2tdID0gcFN0YXRlW2tdICYmIHBTdGF0ZVtrXS5fcmV2IHx8IHRydWU7XHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VzW2tdICAgID0gcFN0YXRlW2tdO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICggc3luYyApIHtcclxuICAgICAgICAgICAgdGhpcy5wdXNoKCk7XHJcbiAgICAgICAgICAgIGNiICYmIGNiKCk7XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICggY2hhbmdlICkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGFiaWxpemUoY2IpO1xyXG4gICAgICAgICAgICB9IGVsc2UgY2IgJiYgY2IoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBVcGRhdGUgdGhlIGN1cnJlbnQgcHJpdmF0ZSBzdGF0ZSAmIHB1c2ggaXQgb25jZSB0aGUgc3RvcmUgaXMgc3RhYmxlXHJcbiAgICAgKiBAcGFyYW0gcFN0YXRlXHJcbiAgICAgKiBAcGFyYW0gY2JcclxuICAgICAqL1xyXG4gICAgc2V0U3RhdGVTeW5jKCBwU3RhdGUgKSB7XHJcbiAgICAgICAgdmFyIGkgICAgICAgPSAwLCBjaGFuZ2UsXHJcbiAgICAgICAgICAgIGNoYW5nZXMgPSB0aGlzLl9jaGFuZ2VzU1cgPSB0aGlzLl9jaGFuZ2VzU1cgfHwge307XHJcbiAgICAgICAgZm9yICggdmFyIGsgaW4gcFN0YXRlIClcclxuICAgICAgICAgICAgaWYgKCAhdGhpcy5zdGF0ZSB8fCBwU3RhdGUuaGFzT3duUHJvcGVydHkoaylcclxuICAgICAgICAgICAgICAgICYmIChcclxuICAgICAgICAgICAgICAgICAgICBwU3RhdGVba10gIT0gdGhpcy5zdGF0ZVtrXVxyXG4gICAgICAgICAgICAgICAgICAgIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgKHRoaXMuc3RhdGVba10gJiYgcFN0YXRlW2tdICYmIChwU3RhdGVba10uX3JldiAhPSB0aGlzLl9yZXZzW2tdKSkvLyByZXYvaGFzaCB1cGRhdGVcclxuICAgICAgICAgICAgICAgICkgKSB7XHJcbiAgICAgICAgICAgICAgICBjaGFuZ2UgICAgICAgID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3JldnNba10gPSBwU3RhdGVba10gJiYgcFN0YXRlW2tdLl9yZXYgfHwgdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGNoYW5nZXNba10gICAgPSBwU3RhdGVba107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB0aGlzLnB1c2goKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5kYXRhcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlcGxhY2UgdGhlIGN1cnJlbnQgcHJpdmF0ZSBzdGF0ZSAmIHB1c2ggaXQgb25jZSB0aGUgc3RvcmUgaXMgc3RhYmxlXHJcbiAgICAgKiBAcGFyYW0gcFN0YXRlXHJcbiAgICAgKiBAcGFyYW0gY2JcclxuICAgICAqL1xyXG4gICAgcmVwbGFjZVN0YXRlKCBwU3RhdGUsIGNiICkge1xyXG4gICAgICAgIHZhciBpICAgICAgPSAwLCBtZSA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHBTdGF0ZTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGFiaWxpemUoY2IpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogZ2V0IGEgc3RvcmUta2V5IHBhaXIgZm9yIFN0b3JlOjptYXBcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXHJcbiAgICAgKiBAcmV0dXJucyB7e3N0b3JlOiBTdG9yZSwgbmFtZTogKn19XHJcbiAgICAgKi9cclxuICAgIGFzKCBuYW1lICkge1xyXG4gICAgICAgIHJldHVybiB7c3RvcmUgOiB0aGlzLCBuYW1lfTtcclxuICAgIH1cclxuXHJcbiAgICBvbiggbGlzdHMgKSB7XHJcbiAgICAgICAgaWYgKCAhaXNTdHJpbmcobGlzdHMpICYmIGxpc3RzIClcclxuICAgICAgICAgICAgT2JqZWN0LmtleXMobGlzdHMpLmZvckVhY2goayA9PiBzdXBlci5vbihrLCBsaXN0c1trXSkpO1xyXG4gICAgICAgIGVsc2Ugc3VwZXIub24oLi4uYXJndW1lbnRzKTtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVMaXN0ZW5lciggbGlzdHMgKSB7XHJcbiAgICAgICAgaWYgKCAhaXNTdHJpbmcobGlzdHMpICYmIGxpc3RzIClcclxuICAgICAgICAgICAgT2JqZWN0LmtleXMobGlzdHMpLmZvckVhY2goayA9PiBzdXBlci5yZW1vdmVMaXN0ZW5lcihrLCBsaXN0c1trXSkpO1xyXG4gICAgICAgIGVsc2Ugc3VwZXIucmVtb3ZlTGlzdGVuZXIoLi4uYXJndW1lbnRzKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHJlbGluayBiaW5kaW5ncyAmIHJlcXVpcmVzXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxyXG4gICAgICogQHJldHVybnMge3tzdG9yZTogU3RvcmUsIG5hbWU6ICp9fVxyXG4gICAgICovXHJcbiAgICByZWxpbmsoIGZyb20gKSB7XHJcbiAgICAgICAgbGV0IGNvbnRleHQgPSB0aGlzLmNvbnRleHRPYmosXHJcbiAgICAgICAgICAgIF9zdGF0aWMgPSB0aGlzLmNvbnN0cnVjdG9yO1xyXG4gICAgICAgIGlmICggX3N0YXRpYy51c2UgKSB7XHJcbiAgICAgICAgICAgIC8vdG9kbyB1bmxpbmtcclxuICAgICAgICAgICAgdGhpcy5wdWxsKF9zdGF0aWMudXNlLCBmYWxzZSwgZnJvbSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIHRoaXMuX3JlcXVpcmUgKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3JlcXVpcmUuZm9yRWFjaChcclxuICAgICAgICAgICAgICAgIHN0b3JlID0+IChcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLndhaXQoY29udGV4dC5fX2NvbnRleHRbc3RvcmVdKVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGlzIGNvbXBsZXRlIChhbGwgcmVxdWllcmVkIGtleXMgYXJlIGhlcmUpXHJcbiAgICAgKiBAcmV0dXJucyBib29sXHJcbiAgICAgKi9cclxuICAgIGlzQ29tcGxldGUoIHN0YXRlID0gdGhpcy5zdGF0ZSApIHtcclxuICAgICAgICB2YXIgX3N0YXRpYyA9IHRoaXMuY29uc3RydWN0b3I7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgIXRoaXMuX3JlcXVpcmVcclxuICAgICAgICAgICAgfHwgIXRoaXMuX3JlcXVpcmUubGVuZ3RoXHJcbiAgICAgICAgICAgIHx8IHN0YXRlICYmIHRoaXMuX3JlcXVpcmUucmVkdWNlKFxyXG4gICAgICAgICAgICAgICAgKCByLCBrZXkgKSA9PiAociAmJiBzdGF0ZVtrZXldKSxcclxuICAgICAgICAgICAgICAgIHRydWVcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBpcyBzdGFibGVcclxuICAgICAqIEByZXR1cm5zIGJvb2xcclxuICAgICAqL1xyXG4gICAgaXNTdGFibGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0YWJsZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFVuIGJpbmQgdGhpcyBzdG9yZSBvZmYgdGhlIGdpdmVuIGNvbXBvbmVudC1rZXlcclxuICAgICAqIEBwYXJhbSBvYmpcclxuICAgICAqIEBwYXJhbSBrZXlcclxuICAgICAqIEByZXR1cm5zIHtBcnJheS48Kj59XHJcbiAgICAgKi9cclxuICAgIHVuQmluZCggb2JqLCBrZXkgKSB7XHJcbiAgICAgICAgdmFyIGZvbGxvd2VycyA9IHRoaXMuX2ZvbGxvd2VycyxcclxuICAgICAgICAgICAgaSAgICAgICAgID0gZm9sbG93ZXJzICYmIGZvbGxvd2Vycy5sZW5ndGg7XHJcbiAgICAgICAgd2hpbGUgKGZvbGxvd2VycyAmJiBpLS0pXHJcbiAgICAgICAgICAgIGlmICggZm9sbG93ZXJzW2ldWzBdID09IG9iaiAmJiBmb2xsb3dlcnNbaV1bMV0gPT0ga2V5IClcclxuICAgICAgICAgICAgICAgIHJldHVybiBmb2xsb3dlcnMuc3BsaWNlKGksIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQmluZCB0aGlzIHN0b3JlIGNoYW5nZXMgdG8gdGhlIGdpdmVuIGNvbXBvbmVudC1rZXlcclxuICAgICAqIEBwYXJhbSBvYmoge1JlYWN0LkNvbXBvbmVudHxTdG9yZXxmdW5jdGlvbilcclxuICAgICAqIEBwYXJhbSBrZXkge3N0cmluZ30gb3B0aW9uYWwga2V5IHdoZXJlIHRvIG1hcCB0aGUgcHVibGljIHN0YXRlXHJcbiAgICAgKi9cclxuICAgIGJpbmQoIG9iaiwga2V5LCBzZXRJbml0aWFsID0gdHJ1ZSApIHtcclxuICAgICAgICB0aGlzLl9mb2xsb3dlcnMucHVzaChbb2JqLCBrZXldKTtcclxuICAgICAgICBpZiAoIHNldEluaXRpYWwgJiYgdGhpcy5kYXRhcyAmJiB0aGlzLl9zdGFibGUgKSB7XHJcbiAgICAgICAgICAgIGlmICggdHlwZW9mIG9iaiAhPSBcImZ1bmN0aW9uXCIgKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIGtleSApIG9iai5zZXRTdGF0ZSh7W2tleV0gOiB0aGlzLmRhdGFzfSk7XHJcbiAgICAgICAgICAgICAgICBlbHNlIG9iai5zZXRTdGF0ZSh0aGlzLmRhdGFzKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG9iaih0aGlzLmRhdGFzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIG9uY2UoJ3N0YWJsZScsIGNiKVxyXG4gICAgICogQHBhcmFtIG9iaiB7UmVhY3QuQ29tcG9uZW50fFN0b3JlfGZ1bmN0aW9uKVxyXG4gICAgICogQHBhcmFtIGtleSB7c3RyaW5nfSBvcHRpb25hbCBrZXkgd2hlcmUgdG8gbWFwIHRoZSBwdWJsaWMgc3RhdGVcclxuICAgICAqL1xyXG4gICAgdGhlbiggY2IgKSB7XHJcbiAgICAgICAgaWYgKCB0aGlzLl9zdGFibGUgKVxyXG4gICAgICAgICAgICByZXR1cm4gY2IobnVsbCwgdGhpcy5kYXRhcyk7XHJcbiAgICAgICAgdGhpcy5vbmNlKCdzdGFibGUnLCBlID0+IGNiKG51bGwsIHRoaXMuZGF0YXMpKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFkZCBhIGxvY2sgc28gdGhlIHN0b3JlIHdpbGwgbm90IHByb3BhZyBpdCBzdGF0ZSB1bnRpbGwgcmVsZWFzZSgpIGlzIGNhbGxcclxuICAgICAqIEBwYXJhbSBwcmV2aW91cyB7U3RvcmV8bnVtYmVyfEFycmF5fSBAb3B0aW9uYWwgd2YgdG8gd2FpdCwgcmVsZWFzZXMgdG8gd2FpdCBvciBhcnJheSBvZiBzdHVmZiB0byB3YWl0XHJcbiAgICAgKiBAcmV0dXJucyB7VGFza0Zsb3d9XHJcbiAgICAgKi9cclxuICAgIHdhaXQoIHByZXZpb3VzICkge1xyXG4gICAgICAgIGlmICggdHlwZW9mIHByZXZpb3VzID09IFwibnVtYmVyXCIgKVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5sb2NrcyArPSBwcmV2aW91cztcclxuICAgICAgICBpZiAoIGlzQXJyYXkocHJldmlvdXMpIClcclxuICAgICAgICAgICAgcmV0dXJuIHByZXZpb3VzLm1hcCh0aGlzLndhaXQuYmluZCh0aGlzKSk7XHJcblxyXG4gICAgICAgIHRoaXMuX3N0YWJsZSAmJiB0aGlzLmVtaXQoJ3Vuc3RhYmxlJywgdGhpcy5zdGF0ZSwgdGhpcy5kYXRhcyk7XHJcbiAgICAgICAgdGhpcy5fc3RhYmxlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5sb2NrcysrO1xyXG4gICAgICAgIGlmICggcHJldmlvdXMgJiYgaXNGdW5jdGlvbihwcmV2aW91cy50aGVuKSApIHtcclxuICAgICAgICAgICAgcHJldmlvdXMudGhlbih0aGlzLnJlbGVhc2UuYmluZCh0aGlzLCBudWxsKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVjcmVhc2UgbG9ja3MgZm9yIHRoaXMgc3RvcmUsIGlmIGl0IHJlYWNoIDAgJiBpdCBoYXZlIGEgcHVibGljIHN0YXRlLFxyXG4gICAgICogaXQgd2lsbCBiZSBwcm9wYWdhdGVkIHRvIHRoZSBmb2xsb3dlcnMsXHJcbiAgICAgKiB0aGVuLCBhbGwgc3R1ZmYgcGFzc2VkIHRvIFwidGhlblwiIGNhbGwgYmFjayB3aWxsIGJlIGV4ZWMgLyByZWxlYXNlZFxyXG4gICAgICogQHBhcmFtIGRlc3luY1xyXG4gICAgICogQHJldHVybnMgeyp9XHJcbiAgICAgKi9cclxuICAgIHJlbGVhc2UoIGNiICkge1xyXG4gICAgICAgIHZhciBfc3RhdGljID0gdGhpcy5jb25zdHJ1Y3RvcjtcclxuICAgICAgICBsZXQgaSAgICAgICA9IDA7XHJcblxyXG4gICAgIC8vICAgaWYgKHRoaXMubG9ja3MgPT0gMClcclxuICAgICAgIC8vICAgICB0aHJvdyBuZXcgRXJyb3IoXCJSZWxlYXNlIG1vcmUgdGhhbiBsb2NraW5nICFcIik7XHJcblxyXG5cclxuXHJcbiAgICAgICAgaWYgKCAhLS10aGlzLmxvY2tzICYmIHRoaXMuZGF0YXMgJiYgdGhpcy5pc0NvbXBsZXRlKCkgKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3N0YWJsZSA9IHRydWU7XHJcblxyXG5cclxuICAgICAgICAgICAgdGhpcy5fcmV2ID0gMSArICh0aGlzLl9yZXYgKyAxKSAlIDEwMDAwMDA7Ly9cclxuICAgICAgICAgICAgaWYgKCB0aGlzLl9mb2xsb3dlcnMubGVuZ3RoIClcclxuICAgICAgICAgICAgICAgIHRoaXMuX2ZvbGxvd2Vycy5mb3JFYWNoKCggZm9sbG93ZXIgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCAhdGhpcy5kYXRhcyApIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIHR5cGVvZiBmb2xsb3dlclswXSA9PSBcImZ1bmN0aW9uXCIgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbGxvd2VyWzBdKHRoaXMuZGF0YXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNiICYmIGkrKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9sbG93ZXJbMF0uc2V0U3RhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZm9sbG93ZXJbMV0pID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtbZm9sbG93ZXJbMV1dIDogdGhpcy5kYXRhc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGFzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjYiAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgKCkgPT4gKCEoLS1pKSAmJiBjYigpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5lbWl0KCdzdGFibGUnLCB0aGlzLmRhdGFzKTtcclxuICAgICAgICAgICAgdGhpcy5lbWl0KCd1cGRhdGUnLCB0aGlzLmRhdGFzKTtcclxuICAgICAgICAgICAgY2IgJiYgY2IoKVxyXG4gICAgICAgIH0gZWxzZSBjYiAmJiB0aGlzLnRoZW4oY2IpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHJldGFpbiggcmVhc29uICkge1xyXG4gICAgLy8gICAgY29uc29sZS5sb2coXCJyZXRhaW5cIiwgdGhpcy5fdWlkLCByZWFzb24pO1xyXG4gICAgICAgIHRoaXMuX19yZXRhaW5Mb2Nrcy5hbGwrKztcclxuICAgICAgICBpZiAoIHJlYXNvbiApIHtcclxuICAgICAgICAgICAgdGhpcy5fX3JldGFpbkxvY2tzW3JlYXNvbl0gPSB0aGlzLl9fcmV0YWluTG9ja3NbcmVhc29uXSB8fCAwO1xyXG4gICAgICAgICAgICB0aGlzLl9fcmV0YWluTG9ja3NbcmVhc29uXSsrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkaXNwb3NlKCByZWFzb24gKSB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcImRpc3Bvc2VcIiwgdGhpcy5fdWlkLCByZWFzb24pO1xyXG4gICAgICAgLy8gaWYgKHRoaXMuX19yZXRhaW5Mb2Nrcy5hbGwgPT0gMClcclxuICAgICAgICAgLy8gICB0aHJvdyBuZXcgRXJyb3IoXCJEaXNwb3NlIG1vcmUgdGhhbiByZXRhaW5pbmcgISA6IFwiK3JlYXNvbik7XHJcbiAgICAgICAgdGhpcy5fX3JldGFpbkxvY2tzLmFsbC0tO1xyXG4gICAgICAgIGlmICggcmVhc29uICkge1xyXG4gICAgICAgICAgICB0aGlzLl9fcmV0YWluTG9ja3NbcmVhc29uXSA9IHRoaXMuX19yZXRhaW5Mb2Nrc1tyZWFzb25dIHx8IDA7XHJcbiAgICAgICAgICAgIHRoaXMuX19yZXRhaW5Mb2Nrc1tyZWFzb25dLS07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICggIXRoaXMuX19yZXRhaW5Mb2Nrcy5hbGwgKSB7XHJcbiAgICAgICAgICAgIGlmICggdGhpcy5fcGVyc2lzdGVuY2VUbSApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2Rlc3Ryb3lUTSAmJiBjbGVhclRpbWVvdXQodGhpcy5fZGVzdHJveVRNKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2Rlc3Ryb3lUTSA9IHNldFRpbWVvdXQoXHJcbiAgICAgICAgICAgICAgICAgICAgZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGhlbihzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgY29uc29sZS5sb2coXCJ3dGYgICBcIiwgcmVhc29uLCAhdGhpcy5fX3JldGFpbkxvY2tzLmFsbCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIXRoaXMuX19yZXRhaW5Mb2Nrcy5hbGwgJiYgdGhpcy5kZXN0cm95KClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wZXJzaXN0ZW5jZVRtXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aGVuKHMgPT4gKCF0aGlzLl9fcmV0YWluTG9ja3MuYWxsICYmIHRoaXMuZGVzdHJveSgpKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZGVzdHJveSgpIHtcclxuICAgICAgLy8gIGNvbnNvbGUubG9nKFwiZGVzdHJveVwiLCB0aGlzLl91aWQpO1xyXG5cclxuICAgICAgICB0aGlzLmVtaXQoJ2Rlc3Ryb3knLCB0aGlzKTtcclxuICAgICAgICBpZiAoIHRoaXMuX3N0YWJpbGl6ZXIgKVxyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5fc3RhYmlsaXplcik7XHJcbiAgICAgICAgdGhpcy5fZm9sbG93ZXJzLmxlbmd0aCA9IDA7XHJcbiAgICAgICAgdGhpcy5kZWFkICAgICAgICAgICAgICA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5fcmV2cyAgICAgICAgICAgICA9IHRoaXMuZGF0YXMgPSB0aGlzLnN0YXRlID0gdGhpcy5jb250ZXh0ID0gbnVsbDtcclxuICAgICAgICB0aGlzLnJlbW92ZUFsbExpc3RlbmVycygpO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1N0b3JlLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==