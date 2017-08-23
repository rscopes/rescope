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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMDE2NzVhNzUzODBhMzkxMzIyODciLCJ3ZWJwYWNrOi8vLy4vc3JjL1Jlc2NvcGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbnRleHQuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaXNzdHJpbmdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpc2FycmF5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXZlbnRzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaXNmdW5jdGlvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInNob3J0aWRcIiIsIndlYnBhY2s6Ly8vLi9zcmMvU3RvcmUuanMiXSwibmFtZXMiOlsiU3RvcmUiLCJDb250ZXh0IiwiaXNTdHJpbmciLCJyZXF1aXJlIiwiaXNBcnJheSIsIkV2ZW50RW1pdHRlciIsImlzRnVuY3Rpb24iLCJzaG9ydGlkIiwiX19wcm90b19fcHVzaCIsInRhcmdldCIsImlkIiwicGFyZW50IiwiaGVyZSIsInByb3RvdHlwZSIsIm9wZW5Db250ZXh0cyIsImtleSIsImN0eCIsInN0YXRlIiwiZGF0YXMiLCJuYW1lIiwiZGVmYXVsdE1heExpc3RlbmVycyIsInBlcnNpc3RlbmNlVG0iLCJhdXRvRGVzdHJveSIsIl9tYXhMaXN0ZW5lcnMiLCJjb25zdHJ1Y3RvciIsIl9pZCIsImdlbmVyYXRlIiwiX2lzTG9jYWxJZCIsIl9wZXJzaXN0ZW5jZVRtIiwic3RvcmVzIiwiX2FkZENoaWxkIiwic291cmNlcyIsIl9jaGlsZENvbnRleHRzIiwiX19yZXRhaW5Mb2NrcyIsImFsbCIsIl9fdzhMb2NrcyIsIl9fbGlzdGVuaW5nIiwiX19jb250ZXh0IiwiX19taXhlZCIsIl9fbWl4ZWRMaXN0IiwiX2ZvbGxvd2VycyIsInJldGFpbiIsIl9zdGFibGUiLCJ3YWl0Iiwib24iLCJfX3BhcmVudExpc3QiLCJyZWxlYXNlIiwiX3Byb3BhZyIsInJlZ2lzdGVyIiwic2V0VGltZW91dCIsImRpc3Bvc2UiLCJmb3JFYWNoIiwiX21vdW50IiwiayIsImFyZ3VtZW50cyIsInJlZHVjZSIsIm1vdW50ZWQiLCJtb3VudFN0b3JlIiwiX3dhdGNoU3RvcmUiLCJpc1N0YWJsZSIsInByb3BhZyIsInRhcmdldEN0eCIsImxpc3RzIiwicHVzaCIsInJlbGluayIsInJhd0N0eCIsIk9iamVjdCIsImtleXMiLCJzaW5nbGV0b24iLCJzcmNDdHgiLCJleHRlcm5hbCIsImxjdHgiLCJfc3RvcmVzIiwiY29uc29sZSIsIndhcm4iLCJkZWZpbmVQcm9wZXJ0eSIsImdldCIsIl9zdGF0ZSIsInNldCIsInYiLCJfZGF0YXMiLCJ1bmRlZmluZWQiLCJvYmoiLCJhcyIsInNldEluaXRpYWwiLCJsYXN0UmV2cyIsInJldnMiLCJtb3VudCIsImdldFVwZGF0ZXMiLCJzZXRTdGF0ZSIsImZvbGxvd2VycyIsImkiLCJsZW5ndGgiLCJzcGxpY2UiLCJ0byIsImJpbmQiLCJvdXRwdXQiLCJ1cGRhdGVkIiwiaGFzT3duUHJvcGVydHkiLCJfcmV2IiwiZmxhZ3Nfc3RhdGVzIiwiZmxhZ3NfZGF0YXMiLCJfZmxhZ3Nfc3RhdGVzIiwiX2ZsYWdzX2RhdGFzIiwiZmxhZ3MiLCJyIiwiZmxhZyIsInRlc3QiLCJjYiIsIm9uY2UiLCJxdWlldCIsInJlYXNvbiIsImVtaXQiLCJfc3RhYmlsaXplclRNIiwiY2xlYXJUaW1lb3V0IiwiX3Byb3BhZ1RNIiwiY2hpbGRzIiwiX2dldEFsbENoaWxkcyIsImluZGV4T2YiLCJfZGVzdHJveVRNIiwidGhlbiIsImRlc3Ryb3kiLCJyZW1vdmVMaXN0ZW5lciIsImNvbnRleHRPYmoiLCJzaGlmdCIsIl9ybUNoaWxkIiwiY29udGV4dHMiLCJvYmpQcm90byIsImdldFByb3RvdHlwZU9mIiwic3RvcmUiLCJjb21wb25lbnQiLCJjb250ZXh0Iiwib3JpZ2luIiwidGFyZ2V0UmV2cyIsIl9yZXZzIiwiaW5pdGlhbE91dHB1dHMiLCJzdGF0aWNDb250ZXh0IiwiZmlsdGVyIiwiZXJyb3IiLCJhbGlhcyIsImRlZmF1bHROYW1lIiwibWF0Y2giLCJtaXhlZENXVW5tb3VudCIsInVuTW91bnRLZXkiLCJpc1JlYWN0Q29tcG9uZW50IiwibWFwIiwic3BsaXQiLCJ1bkJpbmQiLCJhcHBseSIsInNrZXkiLCJzb3J0IiwiYSIsImIiLCJmaXJzdG5hbWUiLCJqb2luIiwiY29udGV4dE1hcCIsImdldENvbnRleHQiLCJhcmd6IiwiX3N0YXRpYyIsImNmZyIsIndhdGNocyIsInVzZSIsInJlZmluZSIsImluaXRpYWxTdGF0ZSIsIl91aWQiLCJsb2NrcyIsIl9vblN0YWJpbGl6ZSIsIl91c2UiLCJfcmVxdWlyZSIsInB1bGwiLCJpc0NvbXBsZXRlIiwibkRhdGFzIiwiY0RhdGFzIiwiZm9sbG93IiwiY2hhbmdlcyIsIl9fcHJvdG9fXyIsIm1lIiwiX3N0YWJpbGl6ZXIiLCJldmVudCIsImRvV2FpdCIsInMiLCJmb3JjZSIsIm5leHRTdGF0ZSIsIl9jaGFuZ2VzU1ciLCJuZXh0RGF0YXMiLCJzaG91bGRQcm9wYWciLCJwU3RhdGUiLCJzeW5jIiwiY2hhbmdlIiwic3RhYmlsaXplIiwiZnJvbSIsInByZXZpb3VzIiwiZm9sbG93ZXIiLCJkZWFkIiwicmVtb3ZlQWxsTGlzdGVuZXJzIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM1QkE7Ozs7QUFDQTs7Ozs7O0FBWEE7Ozs7Ozs7Ozs7QUFhQSxtQkFBUUEsS0FBUjs7bUJBRWUsRUFBQ0Esc0JBQUQsRUFBUUMsMEJBQVIsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZmY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtQkE7Ozs7Ozs7QUFRQSxLQUFJQyxXQUFXLG1CQUFBQyxD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QUs7QUFDYjs7QUFFRSw4QkFBQyxRQUFLdkYsYUFBTCxDQUFtQkMsR0FBcEIsSUFBMkIsUUFBS3VGLE9BQUwsRUFBM0I7QUFDSCwwQkFKRDtBQUtILHNCQVBhLEVBUWQsS0FBSzdGLGNBUlMsQ0FBbEI7QUFVSCxrQkFaRCxNQVlPO0FBQ0gsMEJBQUs0RixJQUFMLENBQVU7QUFBQSxnQ0FBTSxDQUFDLFFBQUt2RixhQUFMLENBQW1CQyxHQUFwQixJQUEyQixRQUFLdUYsT0FBTCxFQUFqQztBQUFBLHNCQUFWO0FBQ0g7QUFDSjtBQUNKOzs7bUNBRVM7QUFDUjs7QUFFRSxrQkFBS1QsSUFBTCxDQUFVLFNBQVYsRUFBcUIsSUFBckI7QUFDQSxpQkFBSyxLQUFLaUUsV0FBVixFQUNJL0QsYUFBYSxLQUFLK0QsV0FBbEI7QUFDSixrQkFBS3pJLFVBQUwsQ0FBZ0JvRCxNQUFoQixHQUF5QixDQUF6QjtBQUNBLGtCQUFLcUcsSUFBTCxHQUF5QixJQUF6QjtBQUNBLGtCQUFLM0QsS0FBTCxHQUF5QixLQUFLcEgsS0FBTCxHQUFhLEtBQUtELEtBQUwsR0FBYSxLQUFLa0gsT0FBTCxHQUFlLElBQWxFO0FBQ0Esa0JBQUsrRCxrQkFBTDtBQUNIOzs7O0dBcnFCOEI3TCxZOztBQUFkTCxNLENBRVZpSyxHLEdBQTZCLEU7QUFGbkJqSyxNLENBS1Z3SSxhLEdBQTZCLElBQUl2SSxPQUFKLENBQVksRUFBWixFQUFnQixFQUFDUyxJQUFLLFFBQU4sRUFBaEIsQztBQUxuQlYsTSxDQU1WbUssWSxHQUE2QmxGLFM7QUFObkJqRixNLENBV0hvQixtQixHQUFzQixHO0FBWG5CcEIsTSxDQW1CSHFCLGEsR0FBc0IsSzttQkFuQm5CckIsSyIsImZpbGUiOiJkaXN0L1Jlc2NvcGUubm9kZXBzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDAxNjc1YTc1MzgwYTM5MTMyMjg3IiwiLypcclxuICogQ29weXJpZ2h0IChjKSAgMjAxNyBDYWlwaSBMYWJzIC5cclxuICpcclxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuICpcclxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcbiAqXHJcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxyXG4gKi9cclxuXHJcbmltcG9ydCBDb250ZXh0IGZyb20gXCIuL0NvbnRleHRcIjtcclxuaW1wb3J0IFN0b3JlIGZyb20gXCIuL1N0b3JlXCI7XHJcblxyXG5Db250ZXh0LlN0b3JlID0gU3RvcmU7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7U3RvcmUsIENvbnRleHR9O1xyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1Jlc2NvcGUuanMiLCIvKlxyXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTcuICBDYWlwaSBMYWJzLiAgQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICpcclxuICogVGhpcyBGaWxlIGlzIHBhcnQgb2YgQ2FpcGkuIFlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcclxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXNcclxuICogcHVibGlzaGVkIGJ5IHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlXHJcbiAqIExpY2Vuc2UsIG9yIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXHJcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxyXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxyXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXHJcbiAqIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxyXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcclxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cclxuICogIFRoaXMgcHJvamVjdCBpcyBkdWFsIGxpY2Vuc2VkIHVuZGVyIEFHUEwgYW5kIENvbW1lcmNpYWwgTGljZW5jZS5cclxuICpcclxuICogQGF1dGhvciA6IE5hdGhhbmFlbCBCcmF1blxyXG4gKiBAY29udGFjdCA6IGNhaXBpbGFic0BnbWFpbC5jb21cclxuICovXHJcblxyXG4vKipcclxuICogQGF1dGhvciBOYXRoYW5hZWwgQlJBVU5cclxuICpcclxuICogRGF0ZTogMTMvMDgvMjAxN1xyXG4gKiBUaW1lOiAxNzoxNVxyXG4gKi9cclxuXHJcblxyXG52YXIgaXNTdHJpbmcgPSByZXF1aXJlKCdpc3N0cmluZycpLFxyXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJ2lzYXJyYXknKSxcclxuICAgIEV2ZW50RW1pdHRlciA9IHJlcXVpcmUoJ2V2ZW50cycpLFxyXG4gICAgaXNGdW5jdGlvbiA9IHJlcXVpcmUoJ2lzZnVuY3Rpb24nKVxyXG4gICAgLCBzaG9ydGlkID0gcmVxdWlyZSgnc2hvcnRpZCcpXHJcbiAgICAsIF9fcHJvdG9fX3B1c2ggPSAodGFyZ2V0LCBpZCwgcGFyZW50KSA9PiB7XHJcbiAgICAgICAgbGV0IGhlcmUgPSB7XHJcbiAgICAgICAgICAgIFtpZF06IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgaGVyZVtpZF0ucHJvdG90eXBlID0gcGFyZW50ID8gbmV3IHBhcmVudFtcIl9cIiArIGlkXSgpIDogdGFyZ2V0W2lkXSB8fCB7fTtcclxuICAgICAgICB0YXJnZXRbaWRdID0gbmV3IGhlcmVbaWRdKCk7XHJcbiAgICAgICAgdGFyZ2V0WydfJyArIGlkXSA9IGhlcmVbaWRdO1xyXG4gICAgfTtcclxuXHJcbmxldCBvcGVuQ29udGV4dHMgPSB7fTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250ZXh0IGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcclxuICAgIHN0YXRpYyBjb250ZXh0cyA9IG9wZW5Db250ZXh0cztcclxuICAgIHN0YXRpYyBTdG9yZSA9IG51bGw7XHJcbiAgICBzdGF0aWMgZGVmYXVsdE1heExpc3RlbmVycyA9IDEwMDtcclxuICAgIHN0YXRpYyBwZXJzaXN0ZW5jZVRtID0gMDtcclxuXHJcbiAgICBzdGF0aWMgZ2V0Q29udGV4dChrZXkpIHtcclxuICAgICAgICByZXR1cm4gb3BlbkNvbnRleHRzW2tleV0gPSBvcGVuQ29udGV4dHNba2V5XSB8fCBuZXcgQ29udGV4dCh7fSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGN0eCwge2lkLCBwYXJlbnQsIHN0YXRlLCBkYXRhcywgbmFtZSwgZGVmYXVsdE1heExpc3RlbmVycywgcGVyc2lzdGVuY2VUbSwgYXV0b0Rlc3Ryb3l9ID0ge30pIHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICB0aGlzLl9tYXhMaXN0ZW5lcnMgPSBkZWZhdWx0TWF4TGlzdGVuZXJzIHx8IHRoaXMuY29uc3RydWN0b3IuZGVmYXVsdE1heExpc3RlbmVycztcclxuICAgICAgICB0aGlzLl9pZCA9IGlkID0gaWQgfHwgKFwiX19fX19cIiArIHNob3J0aWQuZ2VuZXJhdGUoKSk7XHJcblxyXG4gICAgICAgIGlmIChvcGVuQ29udGV4dHNbaWRdKSB7XHJcbiAgICAgICAgICAgIC8vIG9wZW5Db250ZXh0c1tpZF0ucmVnaXN0ZXIoY3R4KTtcclxuICAgICAgICAgICAgcmV0dXJuIG9wZW5Db250ZXh0c1tpZF1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG9wZW5Db250ZXh0c1tpZF0gPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuX2lzTG9jYWxJZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5fcGVyc2lzdGVuY2VUbSA9IHBlcnNpc3RlbmNlVG0gfHwgdGhpcy5jb25zdHJ1Y3Rvci5wZXJzaXN0ZW5jZVRtO1xyXG5cclxuICAgICAgICB0aGlzLnN0b3JlcyA9IHt9O1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7fTtcclxuICAgICAgICB0aGlzLmRhdGFzID0ge307XHJcbiAgICAgICAgX19wcm90b19fcHVzaCh0aGlzLCAnc3RvcmVzJywgcGFyZW50KTtcclxuICAgICAgICBfX3Byb3RvX19wdXNoKHRoaXMsICdzdGF0ZScsIHBhcmVudCk7XHJcbiAgICAgICAgX19wcm90b19fcHVzaCh0aGlzLCAnZGF0YXMnLCBwYXJlbnQpO1xyXG4gICAgICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xyXG5cclxuICAgICAgICBpZiAocGFyZW50KSB7XHJcbiAgICAgICAgICAgIHBhcmVudC5fYWRkQ2hpbGQodGhpcyk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zb3VyY2VzID0gW107XHJcbiAgICAgICAgdGhpcy5fY2hpbGRDb250ZXh0cyA9IFtdO1xyXG5cclxuICAgICAgICB0aGlzLl9fcmV0YWluTG9ja3MgPSB7YWxsOiAwfTtcclxuICAgICAgICB0aGlzLl9fdzhMb2NrcyA9IHthbGw6IDF9O1xyXG4gICAgICAgIHRoaXMuX19saXN0ZW5pbmcgPSB7fTtcclxuICAgICAgICB0aGlzLl9fY29udGV4dCA9IHt9O1xyXG4gICAgICAgIHRoaXMuX19taXhlZCA9IFtdO1xyXG4gICAgICAgIHRoaXMuX19taXhlZExpc3QgPSBbXTtcclxuICAgICAgICB0aGlzLl9mb2xsb3dlcnMgPSBbXTtcclxuICAgICAgICBpZiAocGFyZW50KSB7XHJcbiAgICAgICAgICAgIHBhcmVudC5yZXRhaW4oXCJpc015UGFyZW50XCIpO1xyXG4gICAgICAgICAgICAhcGFyZW50Ll9zdGFibGUgJiYgdGhpcy53YWl0KFwiaXNNeVBhcmVudFwiKTtcclxuICAgICAgICAgICAgcGFyZW50Lm9uKHRoaXMuX19wYXJlbnRMaXN0ID0ge1xyXG4gICAgICAgICAgICAgICAgJ3N0YWJsZSc6IHMgPT4gdGhpcy5yZWxlYXNlKFwiaXNNeVBhcmVudFwiKSxcclxuICAgICAgICAgICAgICAgICd1bnN0YWJsZSc6IHMgPT4gdGhpcy53YWl0KFwiaXNNeVBhcmVudFwiKSxcclxuICAgICAgICAgICAgICAgICd1cGRhdGUnOiBzID0+IHRoaXMuX3Byb3BhZygpXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAvLyB0aGlzLnJlZ2lzdGVyKHBhcmVudC5fX2NvbnRleHQsIHN0YXRlLCBkYXRhcyk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgdGhpcy5yZWdpc3RlcihjdHgsIHN0YXRlLCBkYXRhcyk7XHJcbiAgICAgICAgdGhpcy5fX3c4TG9ja3MuYWxsLS07XHJcbiAgICAgICAgdGhpcy5fc3RhYmxlID0gIXRoaXMuX193OExvY2tzLmFsbDtcclxuXHJcbiAgICAgICAgaWYgKGF1dG9EZXN0cm95KVxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KFxyXG4gICAgICAgICAgICAgICAgdG0gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmV0YWluKFwiYXV0b0Rlc3Ryb3lcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNwb3NlKFwiYXV0b0Rlc3Ryb3lcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBtb3VudChpZCwgc3RhdGUsIGRhdGFzKSB7XHJcbiAgICAgICAgaWYgKGlzQXJyYXkoaWQpKSB7XHJcbiAgICAgICAgICAgIGlkLmZvckVhY2goayA9PiB0aGlzLl9tb3VudChrLCBzdGF0ZSAmJiBzdGF0ZVtrXSwgZGF0YXMgJiYgZGF0YXNba10pKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9tb3VudCguLi5hcmd1bWVudHMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBfbW91bnQoaWQsIHN0YXRlLCBkYXRhcykge1xyXG4gICAgICAgIGlmICghdGhpcy5fX2NvbnRleHRbaWRdKSB7Ly9hc2sgbWl4ZWQgfHwgcGFyZW50XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9fbWl4ZWQucmVkdWNlKChtb3VudGVkLCBjdHgpID0+IChtb3VudGVkIHx8IGN0eC5fbW91bnQoaWQsIHN0YXRlLCBkYXRhcykpLCBmYWxzZSkgfHxcclxuICAgICAgICAgICAgICAgICF0aGlzLnBhcmVudClcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyZW50Ll9tb3VudCguLi5hcmd1bWVudHMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNvbnN0cnVjdG9yLlN0b3JlLm1vdW50U3RvcmUoaWQsIHRoaXMsIG51bGwsIHN0YXRlLCBkYXRhcyk7XHJcbiAgICAgICAgdGhpcy5fd2F0Y2hTdG9yZShpZCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX19jb250ZXh0W2lkXTtcclxuICAgIH1cclxuXHJcbiAgICBfd2F0Y2hTdG9yZShpZCwgc3RhdGUsIGRhdGFzKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9fY29udGV4dFtpZF0pIHsvL2FzayBtaXhlZCB8fCBwYXJlbnRcclxuICAgICAgICAgICAgaWYgKHRoaXMuX19taXhlZC5yZWR1Y2UoKG1vdW50ZWQsIGN0eCkgPT4gKG1vdW50ZWQgfHwgY3R4Ll93YXRjaFN0b3JlKGlkLCBzdGF0ZSwgZGF0YXMpKSwgZmFsc2UpIHx8XHJcbiAgICAgICAgICAgICAgICAhdGhpcy5wYXJlbnQpXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcmVudC5fd2F0Y2hTdG9yZSguLi5hcmd1bWVudHMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXRoaXMuX19saXN0ZW5pbmdbaWRdICYmICFpc0Z1bmN0aW9uKHRoaXMuX19jb250ZXh0W2lkXSkpIHtcclxuICAgICAgICAgICAgIXRoaXMuX19jb250ZXh0W2lkXS5pc1N0YWJsZSgpICYmIHRoaXMud2FpdChpZCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9fY29udGV4dFtpZF0ub24oXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9fbGlzdGVuaW5nW2lkXSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAndXBkYXRlJzogcyA9PiB0aGlzLnByb3BhZygpLFxyXG4gICAgICAgICAgICAgICAgICAgICdzdGFibGUnOiBzID0+IHRoaXMucmVsZWFzZShpZCksXHJcbiAgICAgICAgICAgICAgICAgICAgJ3Vuc3RhYmxlJzogcyA9PiB0aGlzLndhaXQoaWQpXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgbWl4aW4odGFyZ2V0Q3R4KSB7XHJcbiAgICAgICAgbGV0IHBhcmVudCA9IHRoaXMucGFyZW50LCBsaXN0cztcclxuICAgICAgICB0aGlzLl9fbWl4ZWQucHVzaCh0YXJnZXRDdHgpXHJcbiAgICAgICAgdGFyZ2V0Q3R4LnJldGFpbigpO1xyXG4gICAgICAgIGlmICghdGFyZ2V0Q3R4Ll9zdGFibGUpXHJcbiAgICAgICAgICAgIHRoaXMud2FpdCh0YXJnZXRDdHguX2lkKTtcclxuXHJcbiAgICAgICAgdGhpcy5fX21peGVkTGlzdC5wdXNoKGxpc3RzID0ge1xyXG4gICAgICAgICAgICAnc3RhYmxlJzogcyA9PiB0aGlzLnJlbGVhc2UodGFyZ2V0Q3R4Ll9pZCksXHJcbiAgICAgICAgICAgICd1bnN0YWJsZSc6IHMgPT4gdGhpcy53YWl0KHRhcmdldEN0eC5faWQpLFxyXG4gICAgICAgICAgICAndXBkYXRlJzogcyA9PiB0aGlzLl9wcm9wYWcoKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGFyZ2V0Q3R4Lm9uKGxpc3RzKTtcclxuICAgICAgICBfX3Byb3RvX19wdXNoKHRoaXMsICdzdG9yZXMnLCBwYXJlbnQpO1xyXG4gICAgICAgIF9fcHJvdG9fX3B1c2godGhpcywgJ3N0YXRlJywgcGFyZW50KTtcclxuICAgICAgICBfX3Byb3RvX19wdXNoKHRoaXMsICdkYXRhcycsIHBhcmVudCk7XHJcbiAgICAgICAgdGFyZ2V0Q3R4LnJlbGluayh0YXJnZXRDdHguX19jb250ZXh0LCB0aGlzLCB0cnVlKTtcclxuXHJcbiAgICAgICAgX19wcm90b19fcHVzaCh0aGlzLCAnc3RvcmVzJywgdGhpcyk7XHJcbiAgICAgICAgX19wcm90b19fcHVzaCh0aGlzLCAnc3RhdGUnLCB0aGlzKTtcclxuICAgICAgICBfX3Byb3RvX19wdXNoKHRoaXMsICdkYXRhcycsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMucmVsaW5rKHRoaXMuX19jb250ZXh0LCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICByZWdpc3RlcihyYXdDdHgsIHN0YXRlID0ge30sIGRhdGFzID0ge30pIHtcclxuICAgICAgICB0aGlzLnJlbGluayhyYXdDdHgsIHRoaXMsIGZhbHNlLCBzdGF0ZSwgZGF0YXMpO1xyXG4gICAgICAgIE9iamVjdC5rZXlzKHJhd0N0eCkuZm9yRWFjaChcclxuICAgICAgICAgICAgaWQgPT4gKGlzRnVuY3Rpb24ocmF3Q3R4W2lkXSkgJiYgcmF3Q3R4W2lkXS5zaW5nbGV0b24gJiYgdGhpcy5fbW91bnQoaWQsIHN0YXRlW2lkXSwgZGF0YXNbaWRdKSkpXHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTWFwIHNyY0N0eCBzdG9yZSdzIG9uIHRhcmdldEN0eCBoZWFkZXJzIHByb3RvJ3NcclxuICAgICAqIEBwYXJhbSBzcmNDdHhcclxuICAgICAqIEBwYXJhbSB0YXJnZXRDdHhcclxuICAgICAqIEBwYXJhbSBzdGF0ZVxyXG4gICAgICogQHBhcmFtIGRhdGFzXHJcbiAgICAgKi9cclxuICAgIHJlbGluayhzcmNDdHgsIHRhcmdldEN0eCA9IHRoaXMsIGV4dGVybmFsLCBzdGF0ZSA9IHt9LCBkYXRhcyA9IHt9KSB7XHJcbiAgICAgICAgbGV0IGxjdHggPSB0YXJnZXRDdHguX3N0b3Jlcy5wcm90b3R5cGU7XHJcbiAgICAgICAgT2JqZWN0LmtleXMoc3JjQ3R4KVxyXG4gICAgICAgICAgICAuZm9yRWFjaChcclxuICAgICAgICAgICAgICAgIGlkID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGFyZ2V0Q3R4Ll9fY29udGV4dFtpZF0gPT09IHNyY0N0eFtpZF0gfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0Q3R4Ll9fY29udGV4dFtpZF0gJiYgKHRhcmdldEN0eC5fX2NvbnRleHRbaWRdLmNvbnN0cnVjdG9yID09PSBzcmNDdHhbaWRdICkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhcmdldEN0eC5fX2NvbnRleHRbaWRdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIlJlc2NvcGUgQ29udGV4dCA6IFwiLCBpZCwgXCIgYWxyZWFkeSBleGlzdCBpbiB0aGlzIGNvbnRleHQgIVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWV4dGVybmFsKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9fY29udGV4dFtpZF0gPSBzcmNDdHhbaWRdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxjdHgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoKGN0eCwgaWQpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXQ6ICgpID0+IHRoaXMuX19jb250ZXh0W2lkXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5fX2NvbnRleHQsIGlkKVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRDdHguX3N0YXRlLnByb3RvdHlwZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICgoY3R4LCBpZCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldDogKCkgPT4gKGN0eFtpZF0gJiYgY3R4W2lkXS5zdGF0ZSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0OiAodikgPT4gKHRoaXMuX21vdW50KGlkLCB2KSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMuX19jb250ZXh0LCBpZClcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0Q3R4Ll9kYXRhcy5wcm90b3R5cGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoKGN0eCwgaWQpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXQ6ICgpID0+IChjdHhbaWRdICYmIGN0eFtpZF0uZGF0YXMpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldDogKHYpID0+ICh0aGlzLl9tb3VudChpZCwgdW5kZWZpbmVkLCB2KSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMuX19jb250ZXh0LCBpZClcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0gb2JqIHtSZWFjdC5Db21wb25lbnR8U3RvcmV8ZnVuY3Rpb24pXHJcbiAgICAgKiBAcGFyYW0ga2V5IHtzdHJpbmd9IG9wdGlvbmFsIGtleSB3aGVyZSB0byBtYXAgdGhlIHB1YmxpYyBzdGF0ZVxyXG4gICAgICovXHJcbiAgICBiaW5kKG9iaiwga2V5LCBhcywgc2V0SW5pdGlhbCA9IHRydWUpIHtcclxuICAgICAgICBsZXQgbGFzdFJldnMsIGRhdGFzO1xyXG4gICAgICAgIGlmIChrZXkgJiYgIWlzQXJyYXkoa2V5KSlcclxuICAgICAgICAgICAga2V5ID0gW2tleV07XHJcblxyXG4gICAgICAgIC8vIGtleSA9IGtleXx8XHJcblxyXG4gICAgICAgIGlmIChhcyA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBzZXRJbml0aWFsID0gdHJ1ZTtcclxuICAgICAgICAgICAgYXMgPSBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fZm9sbG93ZXJzLnB1c2goXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIG9iaixcclxuICAgICAgICAgICAgICAgIGtleSxcclxuICAgICAgICAgICAgICAgIGFzLFxyXG4gICAgICAgICAgICAgICAgbGFzdFJldnMgPSBrZXkgJiYga2V5LnJlZHVjZSgocmV2cywgaWQpID0+IChyZXZzW2lkXSA9IDAsIHJldnMpLCB7fSlcclxuICAgICAgICAgICAgXSk7XHJcblxyXG4gICAgICAgIHRoaXMubW91bnQoa2V5KTtcclxuXHJcbiAgICAgICAgaWYgKHNldEluaXRpYWwgJiYgdGhpcy5fc3RhYmxlKSB7XHJcbiAgICAgICAgICAgIGRhdGFzID0gdGhpcy5nZXRVcGRhdGVzKGxhc3RSZXZzKTtcclxuICAgICAgICAgICAgaWYgKCFkYXRhcykgcmV0dXJuO1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIG9iaiAhPSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgICAgIGlmIChhcykgb2JqLnNldFN0YXRlKHtbYXNdOiBkYXRhc30pO1xyXG4gICAgICAgICAgICAgICAgZWxzZSBvYmouc2V0U3RhdGUoZGF0YXMpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgb2JqKGRhdGFzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBsYXN0UmV2cyAmJlxyXG4gICAgICAgICAgICAvLyBrZXkuZm9yRWFjaChpZCA9PiAobGFzdFJldnNbaWRdID0gdGhpcy5zdG9yZXNbaWRdICYmIHRoaXMuc3RvcmVzW2lkXS5fcmV2IHx8IDApKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBVbiBiaW5kIHRoaXMgY29udGV4dCBvZmYgdGhlIGdpdmVuIGNvbXBvbmVudC1rZXlzXHJcbiAgICAgKiBAcGFyYW0gb2JqXHJcbiAgICAgKiBAcGFyYW0ga2V5XHJcbiAgICAgKiBAcmV0dXJucyB7QXJyYXkuPCo+fVxyXG4gICAgICovXHJcbiAgICB1bkJpbmQob2JqLCBrZXksIGFzKSB7XHJcbiAgICAgICAgdmFyIGZvbGxvd2VycyA9IHRoaXMuX2ZvbGxvd2VycyxcclxuICAgICAgICAgICAgaSA9IGZvbGxvd2VycyAmJiBmb2xsb3dlcnMubGVuZ3RoO1xyXG4gICAgICAgIHdoaWxlIChmb2xsb3dlcnMgJiYgaS0tKVxyXG4gICAgICAgICAgICBpZiAoZm9sbG93ZXJzW2ldWzBdID09PSBvYmogJiYgKCcnICsgZm9sbG93ZXJzW2ldWzFdKSA9PSAoJycgKyBrZXkpICYmXHJcbiAgICAgICAgICAgICAgICAoJycgKyBmb2xsb3dlcnNbaV1bMl0pID09ICgnJyArIGFzKSlcclxuICAgICAgICAgICAgICAgIHJldHVybiBmb2xsb3dlcnMuc3BsaWNlKGksIDEpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBtYXAodG8sIHN0b3JlcywgYmluZCA9IHRydWUpIHtcclxuICAgICAgICB0aGlzLm1vdW50KHN0b3Jlcyk7XHJcbiAgICAgICAgYmluZCAmJiB0aGlzLmJpbmQodG8sIHN0b3JlcywgbnVsbCwgZmFsc2UpO1xyXG5cclxuICAgICAgICByZXR1cm4gc3RvcmVzLnJlZHVjZSgoZGF0YXMsIGlkKSA9PiAoZGF0YXNbaWRdID0gdGhpcy5zdG9yZXNbaWRdICYmIHRoaXMuc3RvcmVzW2lkXS5kYXRhcywgZGF0YXMpLCB7fSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VXBkYXRlcyhyZXZzLCBvdXRwdXQsIHVwZGF0ZWQpIHtcclxuICAgICAgICBsZXQgY3R4ID0gdGhpcy5fX2NvbnRleHQ7XHJcblxyXG4gICAgICAgIG91dHB1dCA9IG91dHB1dCB8fCB7fTtcclxuICAgICAgICBPYmplY3Qua2V5cyhjdHgpLmZvckVhY2goXHJcbiAgICAgICAgICAgIGlkID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghb3V0cHV0W2lkXVxyXG4gICAgICAgICAgICAgICAgICAgICYmICggIXJldnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgfHwgKHJldnMuaGFzT3duUHJvcGVydHkoaWQpICYmIHJldnNbaWRdID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHx8ICEoICFyZXZzLmhhc093blByb3BlcnR5KGlkKSB8fCBjdHhbaWRdLl9yZXYgPD0gcmV2c1tpZF0gKSlcclxuICAgICAgICAgICAgICAgICkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgb3V0cHV0W2lkXSA9IHRoaXMuZGF0YXNbaWRdO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXZzICYmIHJldnNbaWRdICE9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldnNbaWRdID0gY3R4W2lkXS5fcmV2O1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdXBkYXRlZCA9IHRoaXMuX19taXhlZC5yZWR1Y2UoKHVwZGF0ZWQsIGN0eCkgPT4gKGN0eC5nZXRVcGRhdGVzKHJldnMsIG91dHB1dCwgdXBkYXRlZCkgfHwgdXBkYXRlZCksIHVwZGF0ZWQpO1xyXG4gICAgICAgIHVwZGF0ZWQgPSB0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC5nZXRVcGRhdGVzKHJldnMsIG91dHB1dCwgdXBkYXRlZCkgfHwgdXBkYXRlZDtcclxuICAgICAgICByZXR1cm4gdXBkYXRlZCAmJiBvdXRwdXQ7XHJcbiAgICB9XHJcblxyXG4gICAgc2VyaWFsaXplKGZsYWdzX3N0YXRlcyA9IC8uKi8sIGZsYWdzX2RhdGFzID0gLy4qLykge1xyXG4gICAgICAgIGxldCBjdHggPSB0aGlzLl9fY29udGV4dCwgb3V0cHV0ID0ge3N0YXRlOiB7fSwgZGF0YXM6IHt9fSxcclxuICAgICAgICAgICAgX2ZsYWdzX3N0YXRlcyxcclxuICAgICAgICAgICAgX2ZsYWdzX2RhdGFzO1xyXG4gICAgICAgIGlmIChpc0FycmF5KGZsYWdzX3N0YXRlcykpXHJcbiAgICAgICAgICAgIGZsYWdzX3N0YXRlcy5mb3JFYWNoKGlkID0+IChvdXRwdXQuc3RhdGVbaWRdID0gdGhpcy5zdGF0ZVtpZF0pKVxyXG5cclxuICAgICAgICBpZiAoaXNBcnJheShmbGFnc19kYXRhcykpXHJcbiAgICAgICAgICAgIGZsYWdzX2RhdGFzLmZvckVhY2goaWQgPT4gKG91dHB1dC5kYXRhc1tpZF0gPSB0aGlzLmRhdGFzW2lkXSkpXHJcblxyXG4gICAgICAgIGlmICghaXNBcnJheShmbGFnc19kYXRhcykgJiYgIWlzQXJyYXkoZmxhZ3Nfc3RhdGVzKSlcclxuICAgICAgICAgICAgT2JqZWN0LmtleXMoY3R4KS5mb3JFYWNoKFxyXG4gICAgICAgICAgICAgICAgaWQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0Z1bmN0aW9uKGN0eFtpZF0pKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBmbGFncyA9IGN0eFtpZF0uY29uc3RydWN0b3IuZmxhZ3M7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGZsYWdzID0gaXNBcnJheShmbGFncykgPyBmbGFncyA6IFtmbGFncyB8fCBcIlwiXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZsYWdzLnJlZHVjZSgociwgZmxhZykgPT4gKHIgfHwgX2ZsYWdzX3N0YXRlcy50ZXN0KGZsYWcpKSwgZmFsc2UpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXQuc3RhdGVbaWRdID0gdGhpcy5zdGF0ZVtpZF07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChmbGFncy5yZWR1Y2UoKHIsIGZsYWcpID0+IChyIHx8IF9mbGFnc19kYXRhcy50ZXN0KGZsYWcpKSwgZmFsc2UpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXQuZGF0YXNbaWRdID0gdGhpcy5kYXRhc1tpZF07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICByZXR1cm4gb3V0cHV0O1xyXG4gICAgfVxyXG5cclxuICAgIG9uKGxpc3RzKSB7XHJcblxyXG4gICAgICAgIGlmICghaXNTdHJpbmcobGlzdHMpICYmIGxpc3RzKVxyXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhsaXN0cykuZm9yRWFjaChrID0+IHN1cGVyLm9uKGssIGxpc3RzW2tdKSk7XHJcbiAgICAgICAgZWxzZSBzdXBlci5vbiguLi5hcmd1bWVudHMpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUxpc3RlbmVyKGxpc3RzKSB7XHJcbiAgICAgICAgaWYgKCFpc1N0cmluZyhsaXN0cykgJiYgbGlzdHMpXHJcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGxpc3RzKS5mb3JFYWNoKGsgPT4gc3VwZXIucmVtb3ZlTGlzdGVuZXIoaywgbGlzdHNba10pKTtcclxuICAgICAgICBlbHNlIHN1cGVyLnJlbW92ZUxpc3RlbmVyKC4uLmFyZ3VtZW50cyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBvbmNlKCdzdGFibGUnLCBjYilcclxuICAgICAqIEBwYXJhbSBvYmoge1JlYWN0LkNvbXBvbmVudHxTdG9yZXxmdW5jdGlvbilcclxuICAgICAqIEBwYXJhbSBrZXkge3N0cmluZ30gb3B0aW9uYWwga2V5IHdoZXJlIHRvIG1hcCB0aGUgcHVibGljIHN0YXRlXHJcbiAgICAgKi9cclxuICAgIHRoZW4oY2IpIHtcclxuICAgICAgICBpZiAodGhpcy5fc3RhYmxlKVxyXG4gICAgICAgICAgICByZXR1cm4gY2IobnVsbCwgdGhpcy5kYXRhcyk7XHJcbiAgICAgICAgdGhpcy5vbmNlKCdzdGFibGUnLCBlID0+IGNiKG51bGwsIHRoaXMuZGF0YXMpKTtcclxuICAgIH1cclxuXHJcbiAgICByZXN0b3JlKHtzdGF0ZSwgZGF0YXN9LCBxdWlldCkge1xyXG4gICAgICAgIGxldCBjdHggPSB0aGlzLl9fY29udGV4dDtcclxuICAgICAgICBPYmplY3Qua2V5cyhkYXRhcykuZm9yRWFjaChcclxuICAgICAgICAgICAgaWQgPT4ge1xyXG4gICAgICAgICAgICAgICAgcXVpZXQgP1xyXG4gICAgICAgICAgICAgICAgICAgIGN0eC5kYXRhcyA9IGRhdGFzW2lkXVxyXG4gICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICBjdHgucHVzaChkYXRhc1tpZF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgICAgICBPYmplY3Qua2V5cyhzdGF0ZSkuZm9yRWFjaChcclxuICAgICAgICAgICAgaWQgPT4ge1xyXG4gICAgICAgICAgICAgICAgcXVpZXQgP1xyXG4gICAgICAgICAgICAgICAgICAgIGN0eC5zdGF0ZSA9IHN0YXRlW2lkXVxyXG4gICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICBjdHguc2V0U3RhdGUoc3RhdGVbaWRdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICByZXRhaW5TdG9yZXMoc3RvcmVzID0gW10sIHJlYXNvbikge1xyXG4gICAgICAgIHN0b3Jlcy5mb3JFYWNoKFxyXG4gICAgICAgICAgICBpZCA9PiAodGhpcy5zdG9yZXNbaWRdICYmIHRoaXMuc3RvcmVzW2lkXS5yZXRhaW4gJiYgdGhpcy5zdG9yZXNbaWRdLnJldGFpbihyZWFzb24pKVxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBkaXNwb3NlU3RvcmVzKHN0b3JlcyA9IFtdLCByZWFzb24pIHtcclxuICAgICAgICBzdG9yZXMuZm9yRWFjaChcclxuICAgICAgICAgICAgaWQgPT4gKHRoaXMuc3RvcmVzW2lkXSAmJiB0aGlzLnN0b3Jlc1tpZF0uZGlzcG9zZSAmJiB0aGlzLnN0b3Jlc1tpZF0uZGlzcG9zZShyZWFzb24pKVxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICB3YWl0KHJlYXNvbikge1xyXG4gICAgICAvLyAgY29uc29sZS5sb2coXCJ3YWl0XCIsIHJlYXNvbik7XHJcbiAgICAgICAgdGhpcy5fc3RhYmxlJiYhdGhpcy5fX3c4TG9ja3MuYWxsICYmIHRoaXMuZW1pdChcInVuc3RhYmxlXCIsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMuX3N0YWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuX193OExvY2tzLmFsbCsrO1xyXG4gICAgICAgIGlmIChyZWFzb24pIHtcclxuICAgICAgICAgICAgdGhpcy5fX3c4TG9ja3NbcmVhc29uXSA9IHRoaXMuX193OExvY2tzW3JlYXNvbl0gfHwgMDtcclxuICAgICAgICAgICAgdGhpcy5fX3c4TG9ja3NbcmVhc29uXSsrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZWxlYXNlKHJlYXNvbikge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJyZWxlYXNlXCIsIHJlYXNvbik7XHJcblxyXG4gICAgICAvLyAgaWYgKHRoaXMuX193OExvY2tzLmFsbCA9PSAwKVxyXG4gICAgICAgIC8vICAgIHRocm93IG5ldyBFcnJvcihcIlJlbGVhc2UgbW9yZSB0aGFuIGxvY2tpbmcgISA6IFwiK3JlYXNvbik7XHJcblxyXG4gICAgICAgIHRoaXMuX193OExvY2tzLmFsbC0tO1xyXG4gICAgICAgIGlmIChyZWFzb24pIHtcclxuICAgICAgICAgICAgdGhpcy5fX3c4TG9ja3NbcmVhc29uXSA9IHRoaXMuX193OExvY2tzW3JlYXNvbl0gfHwgMDtcclxuICAgICAgICAgICAgdGhpcy5fX3c4TG9ja3NbcmVhc29uXS0tO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXRoaXMuX193OExvY2tzLmFsbCkge1xyXG4gICAgICAgICAgICB0aGlzLl9zdGFiaWxpemVyVE0gJiYgY2xlYXJUaW1lb3V0KHRoaXMuX3N0YWJpbGl6ZXJUTSk7XHJcbiAgICAgICAgICAgIHRoaXMuX3Byb3BhZ1RNICYmIGNsZWFyVGltZW91dCh0aGlzLl9wcm9wYWdUTSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9zdGFiaWxpemVyVE0gPSBzZXRUaW1lb3V0KFxyXG4gICAgICAgICAgICAgICAgZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLl9fdzhMb2Nrcy5hbGwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9zdGFiaWxpemVyVE0gPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zdGFibGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdChcInN0YWJsZVwiLCB0aGlzKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcHJvcGFnKClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByb3BhZygpIHtcclxuICAgICAgICB0aGlzLl9wcm9wYWdUTSAmJiBjbGVhclRpbWVvdXQodGhpcy5fcHJvcGFnVE0pO1xyXG4gICAgICAgIHRoaXMuX3Byb3BhZ1RNID0gc2V0VGltZW91dChcclxuICAgICAgICAgICAgZSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9wcm9wYWcoKVxyXG4gICAgICAgICAgICB9LCA1MFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgX3Byb3BhZygpIHtcclxuICAgICAgICBpZiAodGhpcy5fZm9sbG93ZXJzLmxlbmd0aClcclxuICAgICAgICAgICAgdGhpcy5fZm9sbG93ZXJzLmZvckVhY2goKHswOiBvYmosIDE6IGtleSwgMjogYXMsIDM6IGxhc3RSZXZzfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGRhdGFzID0gdGhpcy5nZXRVcGRhdGVzKGxhc3RSZXZzKTtcclxuICAgICAgICAgICAgICAgIGlmICghZGF0YXMpIHJldHVybjtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygb2JqICE9IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhcykgb2JqLnNldFN0YXRlKHtbYXNdOiBkYXRhc30pO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Ugb2JqLnNldFN0YXRlKGRhdGFzKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqKGRhdGFzLCBsYXN0UmV2cyAmJiBbLi4ubGFzdFJldnNdIHx8IFwibm8gcmV2c1wiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIGxhc3RSZXZzICYmXHJcbiAgICAgICAgICAgICAgICAvLyBrZXkuZm9yRWFjaChpZCA9PiAobGFzdFJldnNbaWRdID0gdGhpcy5zdG9yZXNbaWRdICYmIHRoaXMuc3RvcmVzW2lkXS5fcmV2IHx8IDApKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5lbWl0KFwidXBkYXRlXCIsIHRoaXMuZ2V0VXBkYXRlcygpKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgX2dldEFsbENoaWxkcyhjaGlsZHM9W10pIHtcclxuICAgICAgICBjaGlsZHMucHVzaCguLi50aGlzLl9jaGlsZENvbnRleHRzKVxyXG4gICAgICAgIHRoaXMuX2NoaWxkQ29udGV4dHMuZm9yRWFjaChcclxuICAgICAgICAgICAgY3R4PT57XHJcbiAgICAgICAgICAgICAgICBjdHguX2dldEFsbENoaWxkcyhjaGlsZHMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgICAgICByZXR1cm4gY2hpbGRzO1xyXG4gICAgfVxyXG5cclxuICAgIF9hZGRDaGlsZChjdHgpIHtcclxuICAgICAgICB0aGlzLl9jaGlsZENvbnRleHRzLnB1c2goY3R4KTtcclxuICAgIH1cclxuXHJcbiAgICBfcm1DaGlsZChjdHgpIHtcclxuICAgICAgICBsZXQgaSA9IHRoaXMuX2NoaWxkQ29udGV4dHMuaW5kZXhPZihjdHgpO1xyXG4gICAgICAgIGlmIChpICE9IC0xKVxyXG4gICAgICAgICAgICB0aGlzLl9jaGlsZENvbnRleHRzLnNwbGljZShpLCAxKTtcclxuICAgIH1cclxuXHJcbiAgICByZXRhaW4ocmVhc29uKSB7XHJcbiAgICAgICAgdGhpcy5fX3JldGFpbkxvY2tzLmFsbCsrO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJyZXRhaW5cIiwgdGhpcy5faWQsIHJlYXNvbik7XHJcblxyXG4gICAgICAgIGlmIChyZWFzb24pIHtcclxuICAgICAgICAgICAgdGhpcy5fX3JldGFpbkxvY2tzW3JlYXNvbl0gPSB0aGlzLl9fcmV0YWluTG9ja3NbcmVhc29uXSB8fCAwO1xyXG4gICAgICAgICAgICB0aGlzLl9fcmV0YWluTG9ja3NbcmVhc29uXSsrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkaXNwb3NlKHJlYXNvbikge1xyXG4gICAgICAvLyAgY29uc29sZS5sb2coXCJkaXNwb3NlXCIsIHRoaXMuX2lkLCByZWFzb24pO1xyXG4gICAgICAgLy8gaWYgKHRoaXMuX19yZXRhaW5Mb2Nrcy5hbGwgPT0gMClcclxuICAgICAgICAgLy8gICB0aHJvdyBuZXcgRXJyb3IoXCJEaXNwb3NlIG1vcmUgdGhhbiByZXRhaW5pbmcgISA6IFwiK3JlYXNvbik7XHJcblxyXG4gICAgICAgIHRoaXMuX19yZXRhaW5Mb2Nrcy5hbGwtLTtcclxuICAgICAgICBpZiAocmVhc29uKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX19yZXRhaW5Mb2Nrc1tyZWFzb25dID0gdGhpcy5fX3JldGFpbkxvY2tzW3JlYXNvbl0gfHwgMDtcclxuICAgICAgICAgICAgdGhpcy5fX3JldGFpbkxvY2tzW3JlYXNvbl0tLTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0aGlzLl9fcmV0YWluTG9ja3MuYWxsKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9wZXJzaXN0ZW5jZVRtKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9kZXN0cm95VE0gJiYgY2xlYXJUaW1lb3V0KHRoaXMuX2Rlc3Ryb3lUTSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9kZXN0cm95VE0gPSBzZXRUaW1lb3V0KFxyXG4gICAgICAgICAgICAgICAgICAgIGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwid3RmIGN0eFwiLCB0aGlzLl9pZCwgcmVhc29uLCB0aGlzLl9fdzhMb2NrcywgdGhpcy5fc3RhYmxlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50aGVuKHMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgLy8gICBjb25zb2xlLmxvZyhcInd0ZiBjdHggdGhlblwiLCB0aGlzLl9pZCwgcmVhc29uLCB0aGlzLl9fdzhMb2Nrcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhdGhpcy5fX3JldGFpbkxvY2tzLmFsbCAmJiB0aGlzLmRlc3Ryb3koKX0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcGVyc2lzdGVuY2VUbVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGhlbihzID0+ICghdGhpcy5fX3JldGFpbkxvY2tzLmFsbCAmJiB0aGlzLmRlc3Ryb3koKSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBvcmRlciBkZXN0cm95IG9mIGxvY2FsIHN0b3Jlc1xyXG4gICAgICovXHJcbiAgICBkZXN0cm95KCkge1xyXG4gICAgICAgIGxldCBjdHggPSB0aGlzLl9fY29udGV4dDtcclxuXHJcbiAgICAgICAvLyBjb25zb2xlLmxvZyhcImRlc3Ryb3lcIiwgdGhpcy5faWQpO1xyXG4gICAgICAgIHRoaXMuZW1pdChcImRlc3Ryb3lcIik7XHJcbiAgICAgICAgT2JqZWN0LmtleXMoXHJcbiAgICAgICAgICAgIHRoaXMuX19saXN0ZW5pbmdcclxuICAgICAgICApLmZvckVhY2goXHJcbiAgICAgICAgICAgIGlkID0+IHRoaXMuX19jb250ZXh0W2lkXS5yZW1vdmVMaXN0ZW5lcih0aGlzLl9fbGlzdGVuaW5nW2lkXSlcclxuICAgICAgICApO1xyXG5cclxuXHJcblxyXG4gICAgICAgIHRoaXMuX19saXN0ZW5pbmcgPSB7fTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2lzTG9jYWxJZClcclxuICAgICAgICAgICAgZGVsZXRlIG9wZW5Db250ZXh0c1t0aGlzLl9pZF07XHJcbiAgICAgICAgdGhpcy5fZm9sbG93ZXJzLmxlbmd0aCA9IDA7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGtleSBpbiBjdHgpXHJcbiAgICAgICAgICAgIGlmICghaXNGdW5jdGlvbihjdHhba2V5XSkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChjdHhba2V5XS5jb250ZXh0T2JqID09PSB0aGlzKVxyXG4gICAgICAgICAgICAgICAgICAgIGN0eFtrZXldLmRlc3Ryb3koKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjdHhba2V5XSA9IGN0eFtrZXldLmNvbnN0cnVjdG9yO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgd2hpbGUgKHRoaXMuX19taXhlZExpc3QubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX19taXhlZFswXS5yZW1vdmVMaXN0ZW5lcih0aGlzLl9fbWl4ZWRMaXN0LnNoaWZ0KCkpO1xyXG4gICAgICAgICAgICB0aGlzLl9fbWl4ZWQuc2hpZnQoKS5kaXNwb3NlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnBhcmVudCkge1xyXG4gICAgICAgICAgICB0aGlzLnBhcmVudC5yZW1vdmVMaXN0ZW5lcih0aGlzLl9fcGFyZW50TGlzdCk7XHJcbiAgICAgICAgICAgIHRoaXMucGFyZW50LmRpc3Bvc2UoXCJpc015UGFyZW50XCIpO1xyXG4gICAgICAgICAgICB0aGlzLnBhcmVudC5fcm1DaGlsZCh0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gdGhpcy5kYXRhcyA9IHRoaXMuc3RhdGUgPSB0aGlzLmNvbnRleHQgPSB0aGlzLnN0b3JlcyA9IG51bGw7XHJcbiAgICAgICAgLy8gdGhpcy5fZGF0YXMgPSB0aGlzLl9zdGF0ZSA9IHRoaXMuX3N0b3JlcyA9IG51bGw7XHJcblxyXG5cclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9Db250ZXh0LmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaXNzdHJpbmdcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJpc3N0cmluZ1wiXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImlzYXJyYXlcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJpc2FycmF5XCJcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXZlbnRzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiZXZlbnRzXCJcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaXNmdW5jdGlvblwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImlzZnVuY3Rpb25cIlxuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzaG9ydGlkXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwic2hvcnRpZFwiXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXHJcbiAqIENvcHlyaWdodCAoYykgIDIwMTcgQ2FpcGkgTGFicyAuXHJcbiAqXHJcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcbiAqXHJcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG4gKlxyXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cclxuICovXHJcblxyXG4vKipcclxuICogVWx0cmEgc2NhbGFibGUgc3RhdGUtYXdhcmUgc3RvcmVcclxuICpcclxuICogQHRvZG8gOiBsb3Qgb2Ygb3B0aW1zLi4uXHJcbiAqL1xyXG5cclxudmFyIGlzU3RyaW5nICAgICA9IHJlcXVpcmUoJ2lzc3RyaW5nJylcclxuICAgICwgaXNBcnJheSAgICA9IHJlcXVpcmUoJ2lzYXJyYXknKVxyXG4gICAgLCBpc0Z1bmN0aW9uID0gcmVxdWlyZSgnaXNmdW5jdGlvbicpXHJcbiAgICAsXHJcbiAgICBDb250ZXh0ICAgICAgPSByZXF1aXJlKCcuL0NvbnRleHQnKSxcclxuICAgIEV2ZW50RW1pdHRlciA9IHJlcXVpcmUoJ2V2ZW50cycpLFxyXG4gICAgc2hvcnRpZCAgICAgID0gcmVxdWlyZSgnc2hvcnRpZCcpLFxyXG4gICAgb2JqUHJvdG8gICAgID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHt9KSxcclxuICAgIG9wZW5Db250ZXh0cyA9IHt9O1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0b3JlIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcclxuXHJcbiAgICBzdGF0aWMgdXNlICAgICAgICAgICAgICAgICAgICAgICAgPSBbXTsvLyBvdmVycmlkYWJsZSBsaXN0IG9mIHNvdXJjZSBzdG9yZXNcclxuICAgIHN0YXRpYyBmb2xsb3c7Ly8gb3ZlcnJpZGFibGUgbGlzdCBvZiBzdG9yZSB0aGF0IHdpbGwgYWxsb3cgcHVzaCBpZiB1cGRhdGVkXHJcbiAgICBzdGF0aWMgcmVxdWlyZTtcclxuICAgIHN0YXRpYyBzdGF0aWNDb250ZXh0ICAgICAgICAgICAgICA9IG5ldyBDb250ZXh0KHt9LCB7aWQgOiBcInN0YXRpY1wifSk7XHJcbiAgICBzdGF0aWMgaW5pdGlhbFN0YXRlICAgICAgICAgICAgICAgPSB1bmRlZmluZWQ7Ly8gZGVmYXVsdCBzdGF0ZVxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHR5cGUge251bWJlcn1cclxuICAgICAqL1xyXG4gICAgICAgICAgIHN0YXRpYyBkZWZhdWx0TWF4TGlzdGVuZXJzID0gMTAwO1xyXG4gICAgLyoqXHJcbiAgICAgKiBpZiByZXRhaW4gZ29lcyB0byAwIDpcclxuICAgICAqIGZhbHNlIHRvIG5vdCBkZXN0cm95LFxyXG4gICAgICogMCB0byBzeW5jIGF1dG8gZGVzdHJveVxyXG4gICAgICogTXMgdG8gYXV0b2Rlc3Ryb3kgYWZ0ZXIgdG0gbXMgaWYgbm8gcmV0YWluIGhhcyBiZWVuIGNhbGxlZFxyXG4gICAgICogQHR5cGUge2Jvb2xlYW58SW50fVxyXG4gICAgICovXHJcbiAgICAgICAgICAgc3RhdGljIHBlcnNpc3RlbmNlVG0gICAgICAgPSBmYWxzZTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIGdldCBhIEJ1aWxkZXIta2V5IHBhaXIgZm9yIFN0b3JlOjptYXBcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXHJcbiAgICAgKiBAcmV0dXJucyB7e3N0b3JlOiBTdG9yZSwgbmFtZTogKn19XHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBhcyggbmFtZSApIHtcclxuICAgICAgICByZXR1cm4ge3N0b3JlIDogdGhpcywgbmFtZX07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBNYXAgYWxsIG5hbWVkIHN0b3JlcyBpbiB7a2V5c30gdG8gdGhlIHtvYmplY3R9J3Mgc3RhdGVcclxuICAgICAqIEhvb2sgY29tcG9uZW50V2lsbFVubW91bnQgKGZvciByZWFjdCBjb21wKSBvciBkZXN0cm95IHRvIHVuQmluZCB0aGVtIGF1dG9tYXRpY2FsbHlcclxuICAgICAqIEBzdGF0aWNcclxuICAgICAqIEBwYXJhbSBvYmplY3Qge1JlYWN0LkNvbXBvbmVudHxTdG9yZXwuLi59IHRhcmdldCBzdGF0ZSBhd2FyZSBvYmplY3RcclxuICAgICAqIEBwYXJhbSBrZXlzIHtBcnJheX0gRXggOiBbXCJzZXNzaW9uXCIsIFwib3RoZXJTdGF0aWNOYW1lZFN0b3JlOmtleVwiLCBzdG9yZS5hcygnYW5vdGhlcktleScpXVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgbWFwKCBjb21wb25lbnQsIGtleXMsIGNvbnRleHQsIG9yaWdpbiwgc2V0SW5pdGlhbCA9IGZhbHNlICkge1xyXG4gICAgICAgIHZhciB0YXJnZXRSZXZzICAgICA9IGNvbXBvbmVudC5fcmV2cyB8fCB7fTtcclxuICAgICAgICAvLyB2YXIgdGFyZ2V0Q29udGV4dCAgPSBjb21wb25lbnQuc3RvcmVzIHx8IChjb21wb25lbnQuc3RvcmVzID0gbmV3IENvbnRleHQoe30pKTtcclxuICAgICAgICB2YXIgaW5pdGlhbE91dHB1dHMgPSB7fTtcclxuICAgICAgICBrZXlzICAgICAgICAgICAgICAgPSBpc0FycmF5KGtleXMpID8gWy4uLmtleXNdIDogW2tleXNdO1xyXG5cclxuXHJcbiAgICAgICAgY29udGV4dCA9IGNvbnRleHQgfHwgU3RvcmUuc3RhdGljQ29udGV4dDtcclxuXHJcbiAgICAgICAgLy8gaWYgKCF0YXJnZXRDb250ZXh0Ll9fY29udGV4dClcclxuICAgICAgICAvLyAgICAgZGVidWdnZXI7XHJcblxyXG4gICAgICAgIGtleXMgICAgICAgICAgID0ga2V5cy5maWx0ZXIoXHJcbiAgICAgICAgICAgIC8vIEB0b2RvIDogdXNlIHF1ZXJ5IHJlZnNcclxuICAgICAgICAgICAgLy8gKHN0b3JlKShcXC5zdG9yZSkqKFxcWyhcXCp8KHByb3BzKVxcdyspKylcXF0pPyhcXDphbGlhcylcclxuICAgICAgICAgICAgKCBrZXkgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoICFrZXkgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIk5vdCBhIG1hcHBhYmxlIHN0b3JlIGl0ZW0gJ1wiICsga2V5ICsgXCInIGluIFwiICsgb3JpZ2luICsgJyAhIScpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGxldCBuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIGFsaWFzLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0b3JlO1xyXG4gICAgICAgICAgICAgICAgaWYgKCBrZXkuc3RvcmUgJiYga2V5Lm5hbWUgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpYXMgPSBuYW1lID0ga2V5Lm5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RvcmUgPSBrZXkuc3RvcmU7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCBpc0Z1bmN0aW9uKGtleSkgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZSA9IGFsaWFzID0ga2V5Lm5hbWUgfHwga2V5LmRlZmF1bHROYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIHN0b3JlID0ga2V5O1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBrZXkgICA9IGtleS5tYXRjaCgvKFtcXHdfXSspKD86XFw6XFxbKFxcKilcXF0pPyg/OlxcOihcXCopKT8vKTtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lICA9IGtleVswXTtcclxuICAgICAgICAgICAgICAgICAgICBzdG9yZSA9IGNvbnRleHQuX19jb250ZXh0W2tleVswXV07XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpYXMgPSBrZXlbMV0gPT0gJyonID8gbnVsbCA6IGtleVsyXSB8fCBrZXlbMF07Ly8gYWxsb3cgYmluZGluZyBwcm9wcyAgKFsqXSlcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIHRhcmdldFJldnNbbmFtZV0gKSByZXR1cm4gZmFsc2U7Ly8gaWdub3JlIGRibCB1c2VzIGZvciBub3dcclxuICAgICAgICAgICAgICAgIGlmICggIXN0b3JlICkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJOb3QgYSBtYXBwYWJsZSBzdG9yZSBpdGVtICdcIiArIG5hbWUgKyBcIi9cIiArIGFsaWFzICsgXCInIGluIFwiICsgb3JpZ2luICsgJyAhIScsIHN0b3JlKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCBpc0Z1bmN0aW9uKHN0b3JlKSApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdW50U3RvcmUobmFtZSwgY29udGV4dClcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5fX2NvbnRleHRbbmFtZV0uYmluZChjb21wb25lbnQsIGFsaWFzLCBzZXRJbml0aWFsKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBpZiAoIGNvbnRleHQuX19jb250ZXh0W2tleVswXV0uc3RhdGUgKSB7Ly8gZG8gc3luYyBwdXNoIGFmdGVyIGNvbnN0cnVjdG9yXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGNvbnRleHQuX19jb250ZXh0W2tleVswXV0ucHVzaCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RvcmUuYmluZChjb21wb25lbnQsIGFsaWFzLCBzZXRJbml0aWFsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRhcmdldFJldnNbYWxpYXNdID0gdGFyZ2V0UmV2c1thbGlhc10gfHwgdHJ1ZTtcclxuICAgICAgICAgICAgICAgIC8vICF0YXJnZXRDb250ZXh0Ll9fY29udGV4dFthbGlhc10gJiYgdGFyZ2V0Q29udGV4dC5yZWdpc3Rlcih7W2FsaWFzXSA6IGNvbnRleHQuX19jb250ZXh0W25hbWVdfSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIGNvbnRleHQuX19jb250ZXh0W25hbWVdLmhhc093blByb3BlcnR5KCdkYXRhcycpIClcclxuICAgICAgICAgICAgICAgICAgICBpbml0aWFsT3V0cHV0c1thbGlhc10gPSBjb250ZXh0LmRhdGFzW25hbWVdO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICAgIHZhciBtaXhlZENXVW5tb3VudCxcclxuICAgICAgICAgICAgdW5Nb3VudEtleSA9IGNvbXBvbmVudC5pc1JlYWN0Q29tcG9uZW50ID8gXCJjb21wb25lbnRXaWxsVW5tb3VudFwiIDogXCJkZXN0cm95XCI7XHJcblxyXG4gICAgICAgIGlmICggY29tcG9uZW50Lmhhc093blByb3BlcnR5KHVuTW91bnRLZXkpICkge1xyXG4gICAgICAgICAgICBtaXhlZENXVW5tb3VudCA9IGNvbXBvbmVudFt1bk1vdW50S2V5XTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbXBvbmVudFt1bk1vdW50S2V5XSA9IGZ1bmN0aW9uICgpIHsvLyB0b2RvIGhvcFxyXG4gICAgICAgICAgICBkZWxldGUgdGhpc1t1bk1vdW50S2V5XTtcclxuICAgICAgICAgICAgaWYgKCBtaXhlZENXVW5tb3VudCApXHJcbiAgICAgICAgICAgICAgICB0aGlzW3VuTW91bnRLZXldID0gbWl4ZWRDV1VubW91bnQ7XHJcbiAgICAgICAgICAgIGtleXMubWFwKFxyXG4gICAgICAgICAgICAgICAgKCBrZXkgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWFzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9yZTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIGtleS5zdG9yZSAmJiBrZXkubmFtZSApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpYXMgPSBuYW1lID0ga2V5Lm5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlID0ga2V5LnN0b3JlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIGlzRnVuY3Rpb24oa2V5KSApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZSA9IGFsaWFzID0ga2V5Lm5hbWUgfHwga2V5LmRlZmF1bHROYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9yZSA9IGNvbnRleHQuX19jb250ZXh0W25hbWVdO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleSAgID0ga2V5LnNwbGl0KCc6Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUgID0ga2V5WzBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9yZSA9IGNvbnRleHQuX19jb250ZXh0W2tleVswXV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWFzID0ga2V5WzFdIHx8IGtleVswXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHN0b3JlICYmICFpc0Z1bmN0aW9uKHN0b3JlKSAmJiBzdG9yZS51bkJpbmQoY29tcG9uZW50LCBhbGlhcylcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXNbdW5Nb3VudEtleV0gJiYgdGhpc1t1bk1vdW50S2V5XS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGluaXRpYWxPdXRwdXRzO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRDb250ZXh0KCBjb250ZXh0cyApIHtcclxuICAgICAgICBsZXQgc2tleSA9IGlzQXJyYXkoY29udGV4dHMpID8gY29udGV4dHMuc29ydCgoIGEsIGIgKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICggYS5maXJzdG5hbWUgPCBiLmZpcnN0bmFtZSApIHJldHVybiAtMTtcclxuICAgICAgICAgICAgaWYgKCBhLmZpcnN0bmFtZSA+IGIuZmlyc3RuYW1lICkgcmV0dXJuIDE7XHJcbiAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgIH0pLmpvaW4oJzo6JykgOiBjb250ZXh0cztcclxuICAgICAgICByZXR1cm4gQ29udGV4dC5jb250ZXh0c1tza2V5XSA9IENvbnRleHQuY29udGV4dHNbc2tleV0gfHwgbmV3IENvbnRleHQoe30sIHtpZCA6IHNrZXl9KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgbW91bnRTdG9yZSggbmFtZSwgY29udGV4dCwgc3RvcmUsIHN0YXRlLCBkYXRhcyApIHtcclxuICAgICAgICBsZXQgY3R4LCBjb250ZXh0TWFwID0gY29udGV4dC5fX2NvbnRleHQ7XHJcbiAgICAgICAgY29udGV4dE1hcFtuYW1lXSAgICA9IHN0b3JlID0gc3RvcmUgfHwgY29udGV4dE1hcFtuYW1lXTtcclxuICAgICAgICBpZiAoICFzdG9yZSApIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIk5vdCBhIG1hcHBhYmxlIHN0b3JlIGl0ZW0gJ1wiICsgbmFtZSArICcgISEnLCBzdG9yZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9IGVsc2UgaWYgKCBpc0Z1bmN0aW9uKHN0b3JlKSApIHtcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgaWYgKCBzdG9yZSAmJiAoc3RvcmUuY29udGV4dHMgfHwgc3RvcmUuY29udGV4dCkgKSB7XHJcbiAgICAgICAgICAgICAgICBjdHggPSB0aGlzLmdldENvbnRleHQoc3RvcmUuY29udGV4dHMgfHwgW3N0b3JlLmNvbnRleHRdKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjdHgucmVnaXN0ZXIoe1tuYW1lXSA6IGN0eC5fX2NvbnRleHRbbmFtZV0gfHwgc3RvcmV9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb250ZXh0TWFwW25hbWVdID0gY3R4W25hbWVdID0gbmV3IHN0b3JlKGNvbnRleHQsIHtzdGF0ZSwgZGF0YXN9KTtcclxuICAgICAgICAgICAgICAgIGN0eC5fd2F0Y2hTdG9yZShuYW1lKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjdHhbbmFtZV07XHJcbiAgICAgICAgICAgIH0gZWxzZVxyXG4gICAgICAgICAgICAgICAgc3RvcmUgPSBjb250ZXh0TWFwW25hbWVdID0gbmV3IHN0b3JlKGNvbnRleHQsIHtzdGF0ZSwgZGF0YXN9KTtcclxuICAgICAgICAgICAgY29udGV4dE1hcFtuYW1lXS5yZWxpbmsobmFtZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKCBzdGF0ZSAhPT0gdW5kZWZpbmVkICYmIGRhdGFzID09PSB1bmRlZmluZWQgKVxyXG4gICAgICAgICAgICAgICAgc3RvcmUuc2V0U3RhdGUoc3RhdGUpO1xyXG4gICAgICAgICAgICBlbHNlIGlmICggc3RhdGUgIT09IHVuZGVmaW5lZCApXHJcbiAgICAgICAgICAgICAgICBzdG9yZS5zdGF0ZSA9IHN0YXRlO1xyXG5cclxuICAgICAgICAgICAgaWYgKCBkYXRhcyAhPT0gdW5kZWZpbmVkIClcclxuICAgICAgICAgICAgICAgIHN0b3JlLnB1c2goZGF0YXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc3RvcmU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb25zdHJ1Y3Rvciwgd2lsbCBidWlsZCBhIHJlc2NvcGUgc3RvcmVcclxuICAgICAqXHJcbiAgICAgKiAoY29udGV4dCwge3JlcXVpcmUsdXNlLHJlZmluZSxzdGF0ZSwgZGF0YXN9KVxyXG4gICAgICogKGNvbnRleHQpXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGNvbnRleHQge29iamVjdH0gY29udGV4dCB3aGVyZSB0byBmaW5kIHRoZSBvdGhlciBzdG9yZXMgKGRlZmF1bHQgOiBzdGF0aWMgc3RhdGljQ29udGV4dCApXHJcbiAgICAgKiBAcGFyYW0ga2V5cyB7QXJyYXl9IChwYXNzZWQgdG8gU3RvcmU6Om1hcCkgRXggOiBbXCJzZXNzaW9uXCIsIFwib3RoZXJOYW1lZFN0b3JlOmtleVwiLCBvdGhlclN0b3JlLmFzKFwib3RoZXJLZXlcIildXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdmFyIGFyZ3ogICAgICAgICA9IFsuLi5hcmd1bWVudHNdLFxyXG4gICAgICAgICAgICBfc3RhdGljICAgICAgPSB0aGlzLmNvbnN0cnVjdG9yLFxyXG4gICAgICAgICAgICBjb250ZXh0ICAgICAgPSAhaXNBcnJheShhcmd6WzBdKSAmJiAhaXNTdHJpbmcoYXJnelswXSkgPyBhcmd6LnNoaWZ0KCkgOiBfc3RhdGljLnN0YXRpY0NvbnRleHQsXHJcbiAgICAgICAgICAgIGNmZyAgICAgICAgICA9IGFyZ3pbMF0gJiYgIWlzQXJyYXkoYXJnelswXSkgJiYgIWlzU3RyaW5nKGFyZ3pbMF0pID8gYXJnei5zaGlmdCgpIDoge30sXHJcbiAgICAgICAgICAgIG5hbWUgICAgICAgICA9IGlzU3RyaW5nKGFyZ3pbMF0pID8gYXJnelswXSA6IGNmZy5uYW1lIHx8IF9zdGF0aWMubmFtZSxcclxuICAgICAgICAgICAgd2F0Y2hzICAgICAgID0gaXNBcnJheShhcmd6WzBdKSA/IGFyZ3ouc2hpZnQoKSA6IGNmZy51c2UgfHwgW10sLy8gd2F0Y2hzIG5lZWQgdG8gYmUgZGVmaW5lZCBhZnRlciBhbGwgdGhlIHN0b3JlIGFyZSByZWdpc3RlcmVkIDogc28gd2UgY2FuJ3QgZGVhbCB3aXRoIGFueSBcInN0YXRpYyB1c2VcIiBhdXRvbWF0aWNseVxyXG4gICAgICAgICAgICByZWZpbmUgICAgICAgPSBpc0Z1bmN0aW9uKGFyZ3pbMF0pID8gYXJnei5zaGlmdCgpIDogY2ZnLnJlZmluZSB8fCBudWxsLFxyXG4gICAgICAgICAgICBpbml0aWFsU3RhdGUgPSBfc3RhdGljLmluaXRpYWxTdGF0ZTtcclxuXHJcbiAgICAgICAgdGhpcy5fdWlkICAgICAgICAgID0gY2ZnLl91aWQgfHwgc2hvcnRpZC5nZW5lcmF0ZSgpO1xyXG4gICAgICAgIHRoaXMuX21heExpc3RlbmVycyA9IGNmZy5kZWZhdWx0TWF4TGlzdGVuZXJzIHx8IFN0b3JlLmRlZmF1bHRNYXhMaXN0ZW5lcnM7XHJcbiAgICAgICAgdGhpcy5sb2NrcyAgICAgICAgID0gMDtcclxuICAgICAgICB0aGlzLl9vblN0YWJpbGl6ZSAgPSBbXTtcclxuXHJcbiAgICAgICAgdGhpcy5fcGVyc2lzdGVuY2VUbSA9IGNmZy5wZXJzaXN0ZW5jZVRtIHx8IHRoaXMuY29uc3RydWN0b3IucGVyc2lzdGVuY2VUbTtcclxuICAgICAgICBpZiAoIGlzU3RyaW5nKGFyZ3pbMF0pICkge1xyXG4gICAgICAgICAgICBpZiAoIGNvbnRleHQuX19jb250ZXh0W25hbWVdIClcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIlJlU2NvcGU6IE92ZXJ3cml0aW5nIGFuIGV4aXN0aW5nIHN0YXRpYyBuYW1lZCBzdG9yZSAoICVzICkgISFcIiwgbmFtZSk7XHJcbiAgICAgICAgICAgIGNvbnRleHQuX19jb250ZXh0W25hbWVdID0gdGhpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICggY2ZnICYmIGNmZy5vbiApIHtcclxuICAgICAgICAgICAgdGhpcy5vbihjZmcub24pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyB0aGlzLnN0YXRlICAgICAgPSB0aGlzLnN0YXRlIHx8IHt9O1xyXG5cclxuICAgICAgICB0aGlzLl91c2UgPSB3YXRjaHM7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuXHJcbiAgICAgICAgaWYgKCBjb250ZXh0LnN0b3JlcyApIHtcclxuICAgICAgICAgICAgdGhpcy5jb250ZXh0T2JqID0gY29udGV4dDtcclxuICAgICAgICAgICAgdGhpcy5jb250ZXh0ICAgID0gY29udGV4dC5zdG9yZXM7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jb250ZXh0T2JqID0gbmV3IENvbnRleHQoY29udGV4dCk7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGV4dCAgICA9IGNvbnRleHQuc3RvcmVzO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIHRoaXMuX3N0YWJsZSAgICAgICA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5fcmV2ICAgICAgICAgID0gMTtcclxuICAgICAgICB0aGlzLl9yZXZzICAgICAgICAgPSB7fTtcclxuICAgICAgICB0aGlzLnN0b3JlcyAgICAgICAgPSB7fTtcclxuICAgICAgICB0aGlzLl9fcmV0YWluTG9ja3MgPSB7YWxsIDogMH07XHJcbiAgICAgICAgdGhpcy5fcmVxdWlyZSAgICAgID0gW107XHJcblxyXG4gICAgICAgIGlmICggX3N0YXRpYy5yZXF1aXJlIClcclxuICAgICAgICAgICAgdGhpcy5fcmVxdWlyZS5wdXNoKC4uLl9zdGF0aWMucmVxdWlyZSk7XHJcbiAgICAgICAgaWYgKCBjZmcucmVxdWlyZSApXHJcbiAgICAgICAgICAgIHRoaXMuX3JlcXVpcmUucHVzaCguLi5jZmcucmVxdWlyZSk7XHJcblxyXG4gICAgICAgIHRoaXMuX2ZvbGxvd2VycyA9IFtdO1xyXG5cclxuICAgICAgICBpZiAoIGNmZy5oYXNPd25Qcm9wZXJ0eShcImRhdGFzXCIpICYmIGNmZy5kYXRhcyAhPT0gdW5kZWZpbmVkIClcclxuICAgICAgICAgICAgdGhpcy5kYXRhcyA9IGNmZy5kYXRhcztcclxuICAgICAgICBpZiAoIGNmZy5oYXNPd25Qcm9wZXJ0eShcInN0YXRlXCIpICYmIGNmZy5zdGF0ZSAhPT0gdW5kZWZpbmVkIClcclxuICAgICAgICAgICAgaW5pdGlhbFN0YXRlID0gY2ZnLnN0YXRlO1xyXG5cclxuICAgICAgICBpZiAoIHJlZmluZSApXHJcbiAgICAgICAgICAgIHRoaXMucmVmaW5lID0gcmVmaW5lO1xyXG5cclxuICAgICAgICBpZiAoICEhdGhpcy5fdXNlICYmIHRoaXMuX3VzZS5sZW5ndGggKSB7Ly8gaWYgdGhlcmUgaW5pdGlhbCB3YXRjaHMgYW55d2F5XHJcbiAgICAgICAgICAgIHRoaXMucHVsbCh0aGlzLl91c2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCBpbml0aWFsU3RhdGUgKSB7Ly8gc3luYyByZWZpbmVcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IHsuLi5pbml0aWFsU3RhdGV9O1xyXG4gICAgICAgICAgICBpZiAoIHRoaXMuaXNDb21wbGV0ZSgpICYmIHRoaXMuZGF0YXMgPT09IHVuZGVmaW5lZCApXHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGFzID0gdGhpcy5yZWZpbmUodGhpcy5kYXRhcywgdGhpcy5zdGF0ZSwgdGhpcy5zdGF0ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3N0YWJsZSA9IHRoaXMuZGF0YXMgIT09IHVuZGVmaW5lZDsvLyBzdGFibGUgaWYgaXQgaGF2ZSBpbml0aWFsIHJlc3VsdCBkYXRhc1xyXG4gICAgICAgICF0aGlzLl9zdGFibGUgJiYgdGhpcy5lbWl0KCd1bnN0YWJsZScsIHRoaXMuc3RhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogT3ZlcnJpZGFibGUgbWV0aG9kIHRvIGtub3cgaWYgYSBzdGF0ZSBjaGFuZ2Ugc2hvdWxkIGJlIHByb3BhZyB0byB0aGUgbGlzdGVuaW5nIHN0b3JlcyAmIGNvbXBvbmVudHNcclxuICAgICAqIElmIHN0YXRpYyBmb2xsb3cgaXMgZGVmaW5lZCwgc2hvdWxkUHJvcGFnIHdpbGwgcmV0dXJuIHRydWUgaWYgYW55IG9mIHRoZSBcImZvbGxvd1wiIGtleXMgd2FzIHVwZGF0ZWRcclxuICAgICAqIElmIG5vdCBpdCB3aWxsIGFsd2F5cyByZXR1cm4gdHJ1ZVxyXG4gICAgICovXHJcbiAgICBzaG91bGRQcm9wYWcoIG5EYXRhcyApIHtcclxuICAgICAgICB2YXIgX3N0YXRpYyA9IHRoaXMuY29uc3RydWN0b3IsIHIsXHJcbiAgICAgICAgICAgIGNEYXRhcyAgPSB0aGlzLmRhdGFzO1xyXG5cclxuICAgICAgICAvLyBpZiAoICFjU3RhdGUgKVxyXG4gICAgICAgIC8vICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICBpZiAoICFjRGF0YXMgJiYgKCFfc3RhdGljLmZvbGxvdyB8fCAhX3N0YXRpYy5mb2xsb3cubGVuZ3RoIHx8XHJcbiAgICAgICAgICAgICAgICBfc3RhdGljLmZvbGxvdyAmJiBfc3RhdGljLmZvbGxvdy5yZWR1Y2UoKCByLCBpICkgPT4gKHIgfHwgbkRhdGFzICYmIG5EYXRhc1tpXSksIGZhbHNlKSkgKVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICAgICAgaWYgKCBpc0FycmF5KF9zdGF0aWMuZm9sbG93KSApXHJcbiAgICAgICAgICAgIF9zdGF0aWMuZm9sbG93LmZvckVhY2goXHJcbiAgICAgICAgICAgICAgICAoIGtleSApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByID0gciB8fCAobkRhdGFzID8gY0RhdGFzW2tleV0gIT09IG5EYXRhc1trZXldIDogY0RhdGFzICYmIGNEYXRhc1trZXldKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIGVsc2UgaWYgKCBfc3RhdGljLmZvbGxvdyA9PT0gJ3N0cmljdCcgKVxyXG4gICAgICAgICAgICByID0gbkRhdGFzID09PSBjRGF0YXM7XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNEYXRhcyAmJiBPYmplY3Qua2V5cyhjRGF0YXMpLmZvckVhY2goXHJcbiAgICAgICAgICAgICAgICAoIGtleSApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByID0gciB8fCAobkRhdGFzID8gY0RhdGFzW2tleV0gIT09IG5EYXRhc1trZXldIDogY0RhdGFzICYmIGNEYXRhc1trZXldKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBuRGF0YXMgJiYgT2JqZWN0LmtleXMobkRhdGFzKS5mb3JFYWNoKFxyXG4gICAgICAgICAgICAgICAgKCBrZXkgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgciA9IHIgfHwgKG5EYXRhcyA/IGNEYXRhc1trZXldICE9PSBuRGF0YXNba2V5XSA6IGNEYXRhcyAmJiBjRGF0YXNba2V5XSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAhIXI7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBPdmVycmlkYWJsZSByZWZpbmVyIC8gcmVtYXBwZXJcclxuICAgICAqIElmIHN0YXRlIG9yIGxhc3RQdWJsaWNTdGF0ZSBhcmUgc2ltcGxlIGhhc2ggbWFwcyByZWZpbmUgd2lsbCByZXR1cm4gey4uLmRhdGFzLCAuLi5zdGF0ZX1cclxuICAgICAqIGlmIG5vdCBpdCB3aWxsIHJldHVybiB0aGUgbGFzdCBwcml2YXRlIHN0YXRlXHJcbiAgICAgKiBAcGFyYW0gZGF0YXNcclxuICAgICAqIEBwYXJhbSBzdGF0ZVxyXG4gICAgICogQHJldHVybnMgeyp9XHJcbiAgICAgKi9cclxuICAgIHJlZmluZSggZGF0YXMsIHN0YXRlLCBjaGFuZ2VzICkge1xyXG4gICAgICAgIHN0YXRlID0gc3RhdGUgfHwgdGhpcy5zdGF0ZTtcclxuXHJcbiAgICAgICAgaWYgKCAhZGF0YXMgfHwgZGF0YXMuX19wcm90b19fICE9PSBvYmpQcm90byB8fCBzdGF0ZS5fX3Byb3RvX18gIT09IG9ialByb3RvIClcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5kYXRhcywgLi4uc3RhdGV9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWJvdW5jZSB0aGlzIHN0b3JlIHByb3BhZ2F0aW9uICggJiByZWR1Y2luZyApXHJcbiAgICAgKiBAcGFyYW0gY2JcclxuICAgICAqL1xyXG4gICAgc3RhYmlsaXplKCBjYiApIHtcclxuICAgICAgICB2YXIgbWUgPSB0aGlzO1xyXG4gICAgICAgIGNiICYmIG1lLm9uY2UoJ3N0YWJsZScsIGNiKTtcclxuICAgICAgICB0aGlzLl9zdGFibGUgJiYgdGhpcy5lbWl0KCd1bnN0YWJsZScsIHRoaXMuc3RhdGUsIHRoaXMuZGF0YXMpO1xyXG5cclxuICAgICAgICBtZS5fc3RhYmxlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGlmICggdGhpcy5fc3RhYmlsaXplciApXHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9zdGFiaWxpemVyKTtcclxuXHJcbiAgICAgICAgdGhpcy5fc3RhYmlsaXplciA9IHNldFRpbWVvdXQoXHJcbiAgICAgICAgICAgIHRoaXMucHVzaC5iaW5kKFxyXG4gICAgICAgICAgICAgICAgdGhpcyxcclxuICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAoKSA9PiB7Ly9AdG9kb1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIG1lLl9zdGFibGUgICAgICAgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3N0YWJpbGl6ZXIgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMucmVsZWFzZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApKTtcclxuICAgIH1cclxuXHJcbiAgICBkaXNwYXRjaCggZXZlbnQgKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUHVsbCBzdG9yZXMgaW4gdGhlIHByaXZhdGUgc3RhdGVcclxuICAgICAqIEBwYXJhbSBzdG9yZXMgIHtBcnJheX0gKHBhc3NlZCB0byBTdG9yZTo6bWFwKSBFeCA6IFtcInNlc3Npb25cIiwgXCJvdGhlck5hbWVkU3RvcmU6a2V5XCIsIG90aGVyU3RvcmUuYXMoXCJvdGhlcktleVwiKV1cclxuICAgICAqL1xyXG4gICAgcHVsbCggc3RvcmVzLCBkb1dhaXQsIG9yaWdpbiApIHtcclxuICAgICAgICBsZXQgaW5pdGlhbE91dHB1dHMgPSBTdG9yZS5tYXAodGhpcywgc3RvcmVzLCB0aGlzLmNvbnRleHRPYmosIG9yaWdpbiwgdHJ1ZSk7XHJcbiAgICAgICAgaWYgKCBkb1dhaXQgKSB7XHJcbiAgICAgICAgICAgIHRoaXMud2FpdCgpO1xyXG4gICAgICAgICAgICBzdG9yZXMuZm9yRWFjaCgoIHMgKSA9PiB0aGlzLmNvbnRleHRbc10gJiYgdGhpcy53YWl0KHRoaXMuY29udGV4dFtzXSkpO1xyXG4gICAgICAgICAgICB0aGlzLnJlbGVhc2UoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGluaXRpYWxPdXRwdXRzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQXBwbHkgcmVmaW5lL3JlbWFwIG9uIHRoZSBwcml2YXRlIHN0YXRlICYgcHVzaCB0aGUgcmVzdWx0aW5nIFwicHVibGljXCIgc3RhdGUgdG8gZm9sbG93ZXJzXHJcbiAgICAgKiBAcGFyYW0gY2JcclxuICAgICAqL1xyXG4gICAgcHVzaCggZGF0YXMsIGZvcmNlLCBjYiApIHtcclxuICAgICAgICBjYiAgICAgICAgICAgID0gZm9yY2UgPT09IHRydWUgPyBjYiA6IGZvcmNlO1xyXG4gICAgICAgIGZvcmNlICAgICAgICAgPSBmb3JjZSA9PT0gdHJ1ZTtcclxuICAgICAgICB2YXIgaSAgICAgICAgID0gMCxcclxuICAgICAgICAgICAgbWUgICAgICAgID0gdGhpcyxcclxuICAgICAgICAgICAgbmV4dFN0YXRlID0gIWRhdGFzICYmIHsuLi50aGlzLnN0YXRlLCAuLi50aGlzLl9jaGFuZ2VzU1d9IHx8IHRoaXMuc3RhdGUsXHJcbiAgICAgICAgICAgIG5leHREYXRhcyA9IGRhdGFzIHx8XHJcbiAgICAgICAgICAgICAgICAodGhpcy5pc0NvbXBsZXRlKG5leHRTdGF0ZSkgPyB0aGlzLnJlZmluZSh0aGlzLmRhdGFzLCBuZXh0U3RhdGUsIHRoaXMuX2NoYW5nZXNTVykgOiB0aGlzLmRhdGFzKTtcclxuXHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBuZXh0U3RhdGU7XHJcbiAgICAgICAgaWYgKCAhZm9yY2UgJiZcclxuICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgKCF0aGlzLmRhdGFzICYmIHRoaXMuZGF0YXMgPT09IG5leHREYXRhcykgfHwgIXRoaXMuc2hvdWxkUHJvcGFnKG5leHREYXRhcylcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBjYiAmJiBjYigpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmRhdGFzID0gbmV4dERhdGFzO1xyXG4gICAgICAgIHRoaXMubG9ja3MrKztcclxuICAgICAgICB0aGlzLnJlbGVhc2UoY2IpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFVwZGF0ZSB0aGUgY3VycmVudCBwcml2YXRlIHN0YXRlICYgcHVzaCBpdCBvbmNlIHRoZSBzdG9yZSBpcyBzdGFibGVcclxuICAgICAqIEBwYXJhbSBwU3RhdGVcclxuICAgICAqIEBwYXJhbSBjYlxyXG4gICAgICovXHJcbiAgICBzZXRTdGF0ZSggcFN0YXRlLCBjYiwgc3luYyApIHtcclxuICAgICAgICB2YXIgaSAgICAgICA9IDAsIGNoYW5nZSxcclxuICAgICAgICAgICAgY2hhbmdlcyA9IHRoaXMuX2NoYW5nZXNTVyA9IHRoaXMuX2NoYW5nZXNTVyB8fCB7fTtcclxuICAgICAgICBmb3IgKCB2YXIgayBpbiBwU3RhdGUgKVxyXG4gICAgICAgICAgICBpZiAoICF0aGlzLnN0YXRlIHx8IHBTdGF0ZS5oYXNPd25Qcm9wZXJ0eShrKVxyXG4gICAgICAgICAgICAgICAgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIHBTdGF0ZVtrXSAhPSB0aGlzLnN0YXRlW2tdXHJcbiAgICAgICAgICAgICAgICAgICAgfHxcclxuICAgICAgICAgICAgICAgICAgICAodGhpcy5zdGF0ZVtrXSAmJiBwU3RhdGVba10gJiYgKHBTdGF0ZVtrXS5fcmV2ICE9IHRoaXMuX3JldnNba10pKS8vIHJldi9oYXNoIHVwZGF0ZVxyXG4gICAgICAgICAgICAgICAgKSApIHtcclxuICAgICAgICAgICAgICAgIGNoYW5nZSAgICAgICAgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcmV2c1trXSA9IHBTdGF0ZVtrXSAmJiBwU3RhdGVba10uX3JldiB8fCB0cnVlO1xyXG4gICAgICAgICAgICAgICAgY2hhbmdlc1trXSAgICA9IHBTdGF0ZVtrXTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIHN5bmMgKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHVzaCgpO1xyXG4gICAgICAgICAgICBjYiAmJiBjYigpO1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoIGNoYW5nZSApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhYmlsaXplKGNiKTtcclxuICAgICAgICAgICAgfSBlbHNlIGNiICYmIGNiKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVXBkYXRlIHRoZSBjdXJyZW50IHByaXZhdGUgc3RhdGUgJiBwdXNoIGl0IG9uY2UgdGhlIHN0b3JlIGlzIHN0YWJsZVxyXG4gICAgICogQHBhcmFtIHBTdGF0ZVxyXG4gICAgICogQHBhcmFtIGNiXHJcbiAgICAgKi9cclxuICAgIHNldFN0YXRlU3luYyggcFN0YXRlICkge1xyXG4gICAgICAgIHZhciBpICAgICAgID0gMCwgY2hhbmdlLFxyXG4gICAgICAgICAgICBjaGFuZ2VzID0gdGhpcy5fY2hhbmdlc1NXID0gdGhpcy5fY2hhbmdlc1NXIHx8IHt9O1xyXG4gICAgICAgIGZvciAoIHZhciBrIGluIHBTdGF0ZSApXHJcbiAgICAgICAgICAgIGlmICggIXRoaXMuc3RhdGUgfHwgcFN0YXRlLmhhc093blByb3BlcnR5KGspXHJcbiAgICAgICAgICAgICAgICAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgcFN0YXRlW2tdICE9IHRoaXMuc3RhdGVba11cclxuICAgICAgICAgICAgICAgICAgICB8fFxyXG4gICAgICAgICAgICAgICAgICAgICh0aGlzLnN0YXRlW2tdICYmIHBTdGF0ZVtrXSAmJiAocFN0YXRlW2tdLl9yZXYgIT0gdGhpcy5fcmV2c1trXSkpLy8gcmV2L2hhc2ggdXBkYXRlXHJcbiAgICAgICAgICAgICAgICApICkge1xyXG4gICAgICAgICAgICAgICAgY2hhbmdlICAgICAgICA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yZXZzW2tdID0gcFN0YXRlW2tdICYmIHBTdGF0ZVtrXS5fcmV2IHx8IHRydWU7XHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VzW2tdICAgID0gcFN0YXRlW2tdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wdXNoKCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXBsYWNlIHRoZSBjdXJyZW50IHByaXZhdGUgc3RhdGUgJiBwdXNoIGl0IG9uY2UgdGhlIHN0b3JlIGlzIHN0YWJsZVxyXG4gICAgICogQHBhcmFtIHBTdGF0ZVxyXG4gICAgICogQHBhcmFtIGNiXHJcbiAgICAgKi9cclxuICAgIHJlcGxhY2VTdGF0ZSggcFN0YXRlLCBjYiApIHtcclxuICAgICAgICB2YXIgaSAgICAgID0gMCwgbWUgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBwU3RhdGU7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhYmlsaXplKGNiKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGdldCBhIHN0b3JlLWtleSBwYWlyIGZvciBTdG9yZTo6bWFwXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxyXG4gICAgICogQHJldHVybnMge3tzdG9yZTogU3RvcmUsIG5hbWU6ICp9fVxyXG4gICAgICovXHJcbiAgICBhcyggbmFtZSApIHtcclxuICAgICAgICByZXR1cm4ge3N0b3JlIDogdGhpcywgbmFtZX07XHJcbiAgICB9XHJcblxyXG4gICAgb24oIGxpc3RzICkge1xyXG4gICAgICAgIGlmICggIWlzU3RyaW5nKGxpc3RzKSAmJiBsaXN0cyApXHJcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGxpc3RzKS5mb3JFYWNoKGsgPT4gc3VwZXIub24oaywgbGlzdHNba10pKTtcclxuICAgICAgICBlbHNlIHN1cGVyLm9uKC4uLmFyZ3VtZW50cyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlTGlzdGVuZXIoIGxpc3RzICkge1xyXG4gICAgICAgIGlmICggIWlzU3RyaW5nKGxpc3RzKSAmJiBsaXN0cyApXHJcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGxpc3RzKS5mb3JFYWNoKGsgPT4gc3VwZXIucmVtb3ZlTGlzdGVuZXIoaywgbGlzdHNba10pKTtcclxuICAgICAgICBlbHNlIHN1cGVyLnJlbW92ZUxpc3RlbmVyKC4uLmFyZ3VtZW50cyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiByZWxpbmsgYmluZGluZ3MgJiByZXF1aXJlc1xyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcclxuICAgICAqIEByZXR1cm5zIHt7c3RvcmU6IFN0b3JlLCBuYW1lOiAqfX1cclxuICAgICAqL1xyXG4gICAgcmVsaW5rKCBmcm9tICkge1xyXG4gICAgICAgIGxldCBjb250ZXh0ID0gdGhpcy5jb250ZXh0T2JqLFxyXG4gICAgICAgICAgICBfc3RhdGljID0gdGhpcy5jb25zdHJ1Y3RvcjtcclxuICAgICAgICBpZiAoIF9zdGF0aWMudXNlICkge1xyXG4gICAgICAgICAgICAvL3RvZG8gdW5saW5rXHJcbiAgICAgICAgICAgIHRoaXMucHVsbChfc3RhdGljLnVzZSwgZmFsc2UsIGZyb20pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCB0aGlzLl9yZXF1aXJlICkge1xyXG4gICAgICAgICAgICB0aGlzLl9yZXF1aXJlLmZvckVhY2goXHJcbiAgICAgICAgICAgICAgICBzdG9yZSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53YWl0KGNvbnRleHQuX19jb250ZXh0W3N0b3JlXSlcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBpcyBjb21wbGV0ZSAoYWxsIHJlcXVpZXJlZCBrZXlzIGFyZSBoZXJlKVxyXG4gICAgICogQHJldHVybnMgYm9vbFxyXG4gICAgICovXHJcbiAgICBpc0NvbXBsZXRlKCBzdGF0ZSA9IHRoaXMuc3RhdGUgKSB7XHJcbiAgICAgICAgdmFyIF9zdGF0aWMgPSB0aGlzLmNvbnN0cnVjdG9yO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICF0aGlzLl9yZXF1aXJlXHJcbiAgICAgICAgICAgIHx8ICF0aGlzLl9yZXF1aXJlLmxlbmd0aFxyXG4gICAgICAgICAgICB8fCBzdGF0ZSAmJiB0aGlzLl9yZXF1aXJlLnJlZHVjZShcclxuICAgICAgICAgICAgICAgICggciwga2V5ICkgPT4gKHIgJiYgc3RhdGVba2V5XSksXHJcbiAgICAgICAgICAgICAgICB0cnVlXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogaXMgc3RhYmxlXHJcbiAgICAgKiBAcmV0dXJucyBib29sXHJcbiAgICAgKi9cclxuICAgIGlzU3RhYmxlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zdGFibGU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBVbiBiaW5kIHRoaXMgc3RvcmUgb2ZmIHRoZSBnaXZlbiBjb21wb25lbnQta2V5XHJcbiAgICAgKiBAcGFyYW0gb2JqXHJcbiAgICAgKiBAcGFyYW0ga2V5XHJcbiAgICAgKiBAcmV0dXJucyB7QXJyYXkuPCo+fVxyXG4gICAgICovXHJcbiAgICB1bkJpbmQoIG9iaiwga2V5ICkge1xyXG4gICAgICAgIHZhciBmb2xsb3dlcnMgPSB0aGlzLl9mb2xsb3dlcnMsXHJcbiAgICAgICAgICAgIGkgICAgICAgICA9IGZvbGxvd2VycyAmJiBmb2xsb3dlcnMubGVuZ3RoO1xyXG4gICAgICAgIHdoaWxlIChmb2xsb3dlcnMgJiYgaS0tKVxyXG4gICAgICAgICAgICBpZiAoIGZvbGxvd2Vyc1tpXVswXSA9PSBvYmogJiYgZm9sbG93ZXJzW2ldWzFdID09IGtleSApXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZm9sbG93ZXJzLnNwbGljZShpLCAxKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEJpbmQgdGhpcyBzdG9yZSBjaGFuZ2VzIHRvIHRoZSBnaXZlbiBjb21wb25lbnQta2V5XHJcbiAgICAgKiBAcGFyYW0gb2JqIHtSZWFjdC5Db21wb25lbnR8U3RvcmV8ZnVuY3Rpb24pXHJcbiAgICAgKiBAcGFyYW0ga2V5IHtzdHJpbmd9IG9wdGlvbmFsIGtleSB3aGVyZSB0byBtYXAgdGhlIHB1YmxpYyBzdGF0ZVxyXG4gICAgICovXHJcbiAgICBiaW5kKCBvYmosIGtleSwgc2V0SW5pdGlhbCA9IHRydWUgKSB7XHJcbiAgICAgICAgdGhpcy5fZm9sbG93ZXJzLnB1c2goW29iaiwga2V5XSk7XHJcbiAgICAgICAgaWYgKCBzZXRJbml0aWFsICYmIHRoaXMuZGF0YXMgJiYgdGhpcy5fc3RhYmxlICkge1xyXG4gICAgICAgICAgICBpZiAoIHR5cGVvZiBvYmogIT0gXCJmdW5jdGlvblwiICkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCBrZXkgKSBvYmouc2V0U3RhdGUoe1trZXldIDogdGhpcy5kYXRhc30pO1xyXG4gICAgICAgICAgICAgICAgZWxzZSBvYmouc2V0U3RhdGUodGhpcy5kYXRhcyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBvYmoodGhpcy5kYXRhcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBvbmNlKCdzdGFibGUnLCBjYilcclxuICAgICAqIEBwYXJhbSBvYmoge1JlYWN0LkNvbXBvbmVudHxTdG9yZXxmdW5jdGlvbilcclxuICAgICAqIEBwYXJhbSBrZXkge3N0cmluZ30gb3B0aW9uYWwga2V5IHdoZXJlIHRvIG1hcCB0aGUgcHVibGljIHN0YXRlXHJcbiAgICAgKi9cclxuICAgIHRoZW4oIGNiICkge1xyXG4gICAgICAgIGlmICggdGhpcy5fc3RhYmxlIClcclxuICAgICAgICAgICAgcmV0dXJuIGNiKG51bGwsIHRoaXMuZGF0YXMpO1xyXG4gICAgICAgIHRoaXMub25jZSgnc3RhYmxlJywgZSA9PiBjYihudWxsLCB0aGlzLmRhdGFzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBZGQgYSBsb2NrIHNvIHRoZSBzdG9yZSB3aWxsIG5vdCBwcm9wYWcgaXQgc3RhdGUgdW50aWxsIHJlbGVhc2UoKSBpcyBjYWxsXHJcbiAgICAgKiBAcGFyYW0gcHJldmlvdXMge1N0b3JlfG51bWJlcnxBcnJheX0gQG9wdGlvbmFsIHdmIHRvIHdhaXQsIHJlbGVhc2VzIHRvIHdhaXQgb3IgYXJyYXkgb2Ygc3R1ZmYgdG8gd2FpdFxyXG4gICAgICogQHJldHVybnMge1Rhc2tGbG93fVxyXG4gICAgICovXHJcbiAgICB3YWl0KCBwcmV2aW91cyApIHtcclxuICAgICAgICBpZiAoIHR5cGVvZiBwcmV2aW91cyA9PSBcIm51bWJlclwiIClcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubG9ja3MgKz0gcHJldmlvdXM7XHJcbiAgICAgICAgaWYgKCBpc0FycmF5KHByZXZpb3VzKSApXHJcbiAgICAgICAgICAgIHJldHVybiBwcmV2aW91cy5tYXAodGhpcy53YWl0LmJpbmQodGhpcykpO1xyXG5cclxuICAgICAgICB0aGlzLl9zdGFibGUgJiYgdGhpcy5lbWl0KCd1bnN0YWJsZScsIHRoaXMuc3RhdGUsIHRoaXMuZGF0YXMpO1xyXG4gICAgICAgIHRoaXMuX3N0YWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubG9ja3MrKztcclxuICAgICAgICBpZiAoIHByZXZpb3VzICYmIGlzRnVuY3Rpb24ocHJldmlvdXMudGhlbikgKSB7XHJcbiAgICAgICAgICAgIHByZXZpb3VzLnRoZW4odGhpcy5yZWxlYXNlLmJpbmQodGhpcywgbnVsbCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIERlY3JlYXNlIGxvY2tzIGZvciB0aGlzIHN0b3JlLCBpZiBpdCByZWFjaCAwICYgaXQgaGF2ZSBhIHB1YmxpYyBzdGF0ZSxcclxuICAgICAqIGl0IHdpbGwgYmUgcHJvcGFnYXRlZCB0byB0aGUgZm9sbG93ZXJzLFxyXG4gICAgICogdGhlbiwgYWxsIHN0dWZmIHBhc3NlZCB0byBcInRoZW5cIiBjYWxsIGJhY2sgd2lsbCBiZSBleGVjIC8gcmVsZWFzZWRcclxuICAgICAqIEBwYXJhbSBkZXN5bmNcclxuICAgICAqIEByZXR1cm5zIHsqfVxyXG4gICAgICovXHJcbiAgICByZWxlYXNlKCBjYiApIHtcclxuICAgICAgICB2YXIgX3N0YXRpYyA9IHRoaXMuY29uc3RydWN0b3I7XHJcbiAgICAgICAgbGV0IGkgICAgICAgPSAwO1xyXG5cclxuICAgICAvLyAgIGlmICh0aGlzLmxvY2tzID09IDApXHJcbiAgICAgICAvLyAgICAgdGhyb3cgbmV3IEVycm9yKFwiUmVsZWFzZSBtb3JlIHRoYW4gbG9ja2luZyAhXCIpO1xyXG5cclxuXHJcblxyXG4gICAgICAgIGlmICggIS0tdGhpcy5sb2NrcyAmJiB0aGlzLmRhdGFzICYmIHRoaXMuaXNDb21wbGV0ZSgpICkge1xyXG4gICAgICAgICAgICB0aGlzLl9zdGFibGUgPSB0cnVlO1xyXG5cclxuXHJcbiAgICAgICAgICAgIHRoaXMuX3JldiA9IDEgKyAodGhpcy5fcmV2ICsgMSkgJSAxMDAwMDAwOy8vXHJcbiAgICAgICAgICAgIGlmICggdGhpcy5fZm9sbG93ZXJzLmxlbmd0aCApXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9mb2xsb3dlcnMuZm9yRWFjaCgoIGZvbGxvd2VyICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICggIXRoaXMuZGF0YXMgKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCB0eXBlb2YgZm9sbG93ZXJbMF0gPT0gXCJmdW5jdGlvblwiICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb2xsb3dlclswXSh0aGlzLmRhdGFzKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjYiAmJiBpKys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbGxvd2VyWzBdLnNldFN0YXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGZvbGxvd2VyWzFdKSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7W2ZvbGxvd2VyWzFdXSA6IHRoaXMuZGF0YXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2IgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICgpID0+ICghKC0taSkgJiYgY2IoKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZW1pdCgnc3RhYmxlJywgdGhpcy5kYXRhcyk7XHJcbiAgICAgICAgICAgIHRoaXMuZW1pdCgndXBkYXRlJywgdGhpcy5kYXRhcyk7XHJcbiAgICAgICAgICAgIGNiICYmIGNiKClcclxuICAgICAgICB9IGVsc2UgY2IgJiYgdGhpcy50aGVuKGNiKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICByZXRhaW4oIHJlYXNvbiApIHtcclxuICAgIC8vICAgIGNvbnNvbGUubG9nKFwicmV0YWluXCIsIHRoaXMuX3VpZCwgcmVhc29uKTtcclxuICAgICAgICB0aGlzLl9fcmV0YWluTG9ja3MuYWxsKys7XHJcbiAgICAgICAgaWYgKCByZWFzb24gKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX19yZXRhaW5Mb2Nrc1tyZWFzb25dID0gdGhpcy5fX3JldGFpbkxvY2tzW3JlYXNvbl0gfHwgMDtcclxuICAgICAgICAgICAgdGhpcy5fX3JldGFpbkxvY2tzW3JlYXNvbl0rKztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZGlzcG9zZSggcmVhc29uICkge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJkaXNwb3NlXCIsIHRoaXMuX3VpZCwgcmVhc29uKTtcclxuICAgICAgIC8vIGlmICh0aGlzLl9fcmV0YWluTG9ja3MuYWxsID09IDApXHJcbiAgICAgICAgIC8vICAgdGhyb3cgbmV3IEVycm9yKFwiRGlzcG9zZSBtb3JlIHRoYW4gcmV0YWluaW5nICEgOiBcIityZWFzb24pO1xyXG4gICAgICAgIHRoaXMuX19yZXRhaW5Mb2Nrcy5hbGwtLTtcclxuICAgICAgICBpZiAoIHJlYXNvbiApIHtcclxuICAgICAgICAgICAgdGhpcy5fX3JldGFpbkxvY2tzW3JlYXNvbl0gPSB0aGlzLl9fcmV0YWluTG9ja3NbcmVhc29uXSB8fCAwO1xyXG4gICAgICAgICAgICB0aGlzLl9fcmV0YWluTG9ja3NbcmVhc29uXS0tO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoICF0aGlzLl9fcmV0YWluTG9ja3MuYWxsICkge1xyXG4gICAgICAgICAgICBpZiAoIHRoaXMuX3BlcnNpc3RlbmNlVG0gKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9kZXN0cm95VE0gJiYgY2xlYXJUaW1lb3V0KHRoaXMuX2Rlc3Ryb3lUTSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9kZXN0cm95VE0gPSBzZXRUaW1lb3V0KFxyXG4gICAgICAgICAgICAgICAgICAgIGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRoZW4ocyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gIGNvbnNvbGUubG9nKFwid3RmICAgXCIsIHJlYXNvbiwgIXRoaXMuX19yZXRhaW5Mb2Nrcy5hbGwpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICF0aGlzLl9fcmV0YWluTG9ja3MuYWxsICYmIHRoaXMuZGVzdHJveSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcGVyc2lzdGVuY2VUbVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGhlbihzID0+ICghdGhpcy5fX3JldGFpbkxvY2tzLmFsbCAmJiB0aGlzLmRlc3Ryb3koKSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRlc3Ryb3koKSB7XHJcbiAgICAgIC8vICBjb25zb2xlLmxvZyhcImRlc3Ryb3lcIiwgdGhpcy5fdWlkKTtcclxuXHJcbiAgICAgICAgdGhpcy5lbWl0KCdkZXN0cm95JywgdGhpcyk7XHJcbiAgICAgICAgaWYgKCB0aGlzLl9zdGFiaWxpemVyIClcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX3N0YWJpbGl6ZXIpO1xyXG4gICAgICAgIHRoaXMuX2ZvbGxvd2Vycy5sZW5ndGggPSAwO1xyXG4gICAgICAgIHRoaXMuZGVhZCAgICAgICAgICAgICAgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuX3JldnMgICAgICAgICAgICAgPSB0aGlzLmRhdGFzID0gdGhpcy5zdGF0ZSA9IHRoaXMuY29udGV4dCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9TdG9yZS5qcyJdLCJzb3VyY2VSb290IjoiIn0=