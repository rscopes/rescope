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
	
	            //   if (this.locks == 0)
	            //     throw new Error("Release more than locking !");
	
	
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
	                    _this10.mountStore(name, context);
	
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZmZmZDllZjFmNWJhY2Q2YTg2MmEiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Jlc2NvcGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbnRleHQuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaXNzdHJpbmdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpc2FycmF5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXZlbnRzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaXNmdW5jdGlvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInNob3J0aWRcIiIsIndlYnBhY2s6Ly8vLi9zcmMvU3RvcmUuanMiXSwibmFtZXMiOlsiU3RvcmUiLCJDb250ZXh0IiwiaXNTdHJpbmciLCJyZXF1aXJlIiwiaXNBcnJheSIsIkV2ZW50RW1pdHRlciIsImlzRnVuY3Rpb24iLCJzaG9ydGlkIiwiX19wcm90b19fcHVzaCIsInRhcmdldCIsImlkIiwicGFyZW50IiwiaGVyZSIsInByb3RvdHlwZSIsIm9wZW5Db250ZXh0cyIsImtleSIsImN0eCIsInN0YXRlIiwiZGF0YXMiLCJuYW1lIiwiZGVmYXVsdE1heExpc3RlbmVycyIsInBlcnNpc3RlbmNlVG0iLCJhdXRvRGVzdHJveSIsIl9tYXhMaXN0ZW5lcnMiLCJjb25zdHJ1Y3RvciIsIl9pZCIsImdlbmVyYXRlIiwiX2lzTG9jYWxJZCIsIl9wZXJzaXN0ZW5jZVRtIiwic3RvcmVzIiwiX2FkZENoaWxkIiwic291cmNlcyIsIl9jaGlsZENvbnRleHRzIiwiX19yZXRhaW5Mb2NrcyIsImFsbCIsIl9fdzhMb2NrcyIsIl9fbGlzdGVuaW5nIiwiX19jb250ZXh0IiwiX19taXhlZCIsIl9fbWl4ZWRMaXN0IiwiX2ZvbGxvd2VycyIsInJldGFpbiIsIl9zdGFibGUiLCJ3YWl0Iiwib24iLCJfX3BhcmVudExpc3QiLCJyZWxlYXNlIiwiX3Byb3BhZyIsInJlZ2lzdGVyIiwic2V0VGltZW91dCIsImRpc3Bvc2UiLCJmb3JFYWNoIiwiX21vdW50IiwiayIsImFyZ3VtZW50cyIsInJlZHVjZSIsIm1vdW50ZWQiLCJtb3VudFN0b3JlIiwiX3dhdGNoU3RvcmUiLCJpc1N0YWJsZSIsInByb3BhZyIsInRhcmdldEN0eCIsImxpc3RzIiwicHVzaCIsInJlbGluayIsInJhd0N0eCIsIk9iamVjdCIsImtleXMiLCJzaW5nbGV0b24iLCJzcmNDdHgiLCJleHRlcm5hbCIsImxjdHgiLCJfc3RvcmVzIiwiY29uc29sZSIsIndhcm4iLCJkZWZpbmVQcm9wZXJ0eSIsImdldCIsIl9zdGF0ZSIsInNldCIsInYiLCJfZGF0YXMiLCJ1bmRlZmluZWQiLCJvYmoiLCJhcyIsInNldEluaXRpYWwiLCJsYXN0UmV2cyIsInJldnMiLCJtb3VudCIsImdldFVwZGF0ZXMiLCJzZXRTdGF0ZSIsImZvbGxvd2VycyIsImkiLCJsZW5ndGgiLCJzcGxpY2UiLCJ0byIsImJpbmQiLCJvdXRwdXQiLCJ1cGRhdGVkIiwiaGFzT3duUHJvcGVydHkiLCJfcmV2IiwiZmxhZ3Nfc3RhdGVzIiwiZmxhZ3NfZGF0YXMiLCJfZmxhZ3Nfc3RhdGVzIiwiX2ZsYWdzX2RhdGFzIiwiZmxhZ3MiLCJyIiwiZmxhZyIsInRlc3QiLCJjYiIsIm9uY2UiLCJxdWlldCIsInJlYXNvbiIsImVtaXQiLCJfc3RhYmlsaXplclRNIiwiY2xlYXJUaW1lb3V0IiwiX3Byb3BhZ1RNIiwiY2hpbGRzIiwiX2dldEFsbENoaWxkcyIsImluZGV4T2YiLCJfZGVzdHJveVRNIiwidGhlbiIsImRlc3Ryb3kiLCJyZW1vdmVMaXN0ZW5lciIsImNvbnRleHRPYmoiLCJzaGlmdCIsIl9ybUNoaWxkIiwiY29udGV4dHMiLCJvYmpQcm90byIsImdldFByb3RvdHlwZU9mIiwiYXJneiIsIl9zdGF0aWMiLCJjb250ZXh0Iiwic3RhdGljQ29udGV4dCIsImNmZyIsIndhdGNocyIsInVzZSIsInJlZmluZSIsImluaXRpYWxTdGF0ZSIsIl91aWQiLCJsb2NrcyIsIl9vblN0YWJpbGl6ZSIsIl91c2UiLCJfcmV2cyIsIl9yZXF1aXJlIiwicHVsbCIsImlzQ29tcGxldGUiLCJuRGF0YXMiLCJjRGF0YXMiLCJmb2xsb3ciLCJjaGFuZ2VzIiwiX19wcm90b19fIiwibWUiLCJfc3RhYmlsaXplciIsImV2ZW50IiwiZG9XYWl0Iiwib3JpZ2luIiwiaW5pdGlhbE91dHB1dHMiLCJtYXAiLCJzIiwiZm9yY2UiLCJuZXh0U3RhdGUiLCJfY2hhbmdlc1NXIiwibmV4dERhdGFzIiwic2hvdWxkUHJvcGFnIiwicFN0YXRlIiwic3luYyIsImNoYW5nZSIsInN0YWJpbGl6ZSIsInN0b3JlIiwiZnJvbSIsInByZXZpb3VzIiwiZm9sbG93ZXIiLCJkZWFkIiwicmVtb3ZlQWxsTGlzdGVuZXJzIiwiY29tcG9uZW50IiwidGFyZ2V0UmV2cyIsImZpbHRlciIsImVycm9yIiwiYWxpYXMiLCJkZWZhdWx0TmFtZSIsIm1hdGNoIiwibWl4ZWRDV1VubW91bnQiLCJ1bk1vdW50S2V5IiwiaXNSZWFjdENvbXBvbmVudCIsInNwbGl0IiwidW5CaW5kIiwiYXBwbHkiLCJza2V5Iiwic29ydCIsImEiLCJiIiwiZmlyc3RuYW1lIiwiam9pbiIsImNvbnRleHRNYXAiLCJnZXRDb250ZXh0Il0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM1QkE7Ozs7QUFDQTs7Ozs7O0FBWEE7Ozs7Ozs7Ozs7QUFhQSxtQkFBUUEsS0FBUjs7bUJBRWUsRUFBQ0Esc0JBQUQsRUFBUUMsMEJBQVIsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZmY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtQkE7Ozs7Ozs7QUFRQSxLQUFJQyxXQUFXLG1CQUFBQyxD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WCxJQUFtQkgsSUFBSUcsSUFBSixJQUFZLElBQUlxSixLQUFKLENBQVVyQyxPQUFWLEVBQW1CLEVBQUNsSCxZQUFELEVBQVFDLFlBQVIsRUFBbkIsQ0FBL0I7QUFDQUYseUJBQUkwQyxXQUFKLENBQWdCdkMsSUFBaEI7QUFDQSw0QkFBT0gsSUFBSUcsSUFBSixDQUFQO0FBQ0gsa0JBUkQsTUFTSXFKLFFBQVF5QixXQUFXOUssSUFBWCxJQUFtQixJQUFJcUosS0FBSixDQUFVckMsT0FBVixFQUFtQixFQUFDbEgsWUFBRCxFQUFRQyxZQUFSLEVBQW5CLENBQTNCO0FBQ0orSyw0QkFBVzlLLElBQVgsRUFBaUI2QyxNQUFqQixDQUF3QjdDLElBQXhCO0FBQ0gsY0FiTSxNQWFBO0FBQ0gscUJBQUtGLFVBQVVnRSxTQUFWLElBQXVCL0QsVUFBVStELFNBQXRDLEVBQ0l1RixNQUFNL0UsUUFBTixDQUFleEUsS0FBZixFQURKLEtBRUssSUFBS0EsVUFBVWdFLFNBQWYsRUFDRHVGLE1BQU12SixLQUFOLEdBQWNBLEtBQWQ7O0FBRUoscUJBQUtDLFVBQVUrRCxTQUFmLEVBQ0l1RixNQUFNekcsSUFBTixDQUFXN0MsS0FBWDtBQUNQO0FBQ0Qsb0JBQU9zSixLQUFQO0FBQ0g7Ozs7R0E5UDhCbkssWTs7QUFBZEwsTSxDQUVWdUksRyxHQUE2QixFO0FBRm5CdkksTSxDQUtWb0ksYSxHQUE2QixJQUFJbkksT0FBSixDQUFZLEVBQVosRUFBZ0IsRUFBQ1MsSUFBSyxRQUFOLEVBQWhCLEM7QUFMbkJWLE0sQ0FNVnlJLFksR0FBNkJ4RCxTO0FBTm5CakYsTSxDQVdIb0IsbUIsR0FBc0IsRztBQVhuQnBCLE0sQ0FtQkhxQixhLEdBQXNCLEs7bUJBbkJuQnJCLEsiLCJmaWxlIjoiZGlzdC9SZXNjb3BlLm5vZGVwcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBmZmZkOWVmMWY1YmFjZDZhODYyYSIsIi8qXHJcbiAqIENvcHlyaWdodCAoYykgIDIwMTcgQ2FpcGkgTGFicyAuXHJcbiAqXHJcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcbiAqXHJcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG4gKlxyXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cclxuICovXHJcblxyXG5pbXBvcnQgQ29udGV4dCBmcm9tIFwiLi9Db250ZXh0XCI7XHJcbmltcG9ydCBTdG9yZSBmcm9tIFwiLi9TdG9yZVwiO1xyXG5cclxuQ29udGV4dC5TdG9yZSA9IFN0b3JlO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1N0b3JlLCBDb250ZXh0fTtcclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9SZXNjb3BlLmpzIiwiLypcclxuICogQ29weXJpZ2h0IChjKSAyMDE3LiAgQ2FpcGkgTGFicy4gIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFRoaXMgRmlsZSBpcyBwYXJ0IG9mIENhaXBpLiBZb3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XHJcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzXHJcbiAqIHB1Ymxpc2hlZCBieSB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZVxyXG4gKiBMaWNlbnNlLCBvciAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxyXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcclxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcclxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxyXG4gKiBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cclxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXHJcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXHJcbiAqICBUaGlzIHByb2plY3QgaXMgZHVhbCBsaWNlbnNlZCB1bmRlciBBR1BMIGFuZCBDb21tZXJjaWFsIExpY2VuY2UuXHJcbiAqXHJcbiAqIEBhdXRob3IgOiBOYXRoYW5hZWwgQnJhdW5cclxuICogQGNvbnRhY3QgOiBjYWlwaWxhYnNAZ21haWwuY29tXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIEBhdXRob3IgTmF0aGFuYWVsIEJSQVVOXHJcbiAqXHJcbiAqIERhdGU6IDEzLzA4LzIwMTdcclxuICogVGltZTogMTc6MTVcclxuICovXHJcblxyXG5cclxudmFyIGlzU3RyaW5nID0gcmVxdWlyZSgnaXNzdHJpbmcnKSxcclxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCdpc2FycmF5JyksXHJcbiAgICBFdmVudEVtaXR0ZXIgPSByZXF1aXJlKCdldmVudHMnKSxcclxuICAgIGlzRnVuY3Rpb24gPSByZXF1aXJlKCdpc2Z1bmN0aW9uJylcclxuICAgICwgc2hvcnRpZCA9IHJlcXVpcmUoJ3Nob3J0aWQnKVxyXG4gICAgLCBfX3Byb3RvX19wdXNoID0gKHRhcmdldCwgaWQsIHBhcmVudCkgPT4ge1xyXG4gICAgICAgIGxldCBoZXJlID0ge1xyXG4gICAgICAgICAgICBbaWRdOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIGhlcmVbaWRdLnByb3RvdHlwZSA9IHBhcmVudCA/IG5ldyBwYXJlbnRbXCJfXCIgKyBpZF0oKSA6IHRhcmdldFtpZF0gfHwge307XHJcbiAgICAgICAgdGFyZ2V0W2lkXSA9IG5ldyBoZXJlW2lkXSgpO1xyXG4gICAgICAgIHRhcmdldFsnXycgKyBpZF0gPSBoZXJlW2lkXTtcclxuICAgIH07XHJcblxyXG5sZXQgb3BlbkNvbnRleHRzID0ge307XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGV4dCBleHRlbmRzIEV2ZW50RW1pdHRlciB7XHJcbiAgICBzdGF0aWMgY29udGV4dHMgPSBvcGVuQ29udGV4dHM7XHJcbiAgICBzdGF0aWMgU3RvcmUgPSBudWxsO1xyXG4gICAgc3RhdGljIGRlZmF1bHRNYXhMaXN0ZW5lcnMgPSAxMDA7XHJcbiAgICBzdGF0aWMgcGVyc2lzdGVuY2VUbSA9IDA7XHJcblxyXG4gICAgc3RhdGljIGdldENvbnRleHQoa2V5KSB7XHJcbiAgICAgICAgcmV0dXJuIG9wZW5Db250ZXh0c1trZXldID0gb3BlbkNvbnRleHRzW2tleV0gfHwgbmV3IENvbnRleHQoe30pO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihjdHgsIHtpZCwgcGFyZW50LCBzdGF0ZSwgZGF0YXMsIG5hbWUsIGRlZmF1bHRNYXhMaXN0ZW5lcnMsIHBlcnNpc3RlbmNlVG0sIGF1dG9EZXN0cm95fSA9IHt9KSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy5fbWF4TGlzdGVuZXJzID0gZGVmYXVsdE1heExpc3RlbmVycyB8fCB0aGlzLmNvbnN0cnVjdG9yLmRlZmF1bHRNYXhMaXN0ZW5lcnM7XHJcbiAgICAgICAgdGhpcy5faWQgPSBpZCA9IGlkIHx8IChcIl9fX19fXCIgKyBzaG9ydGlkLmdlbmVyYXRlKCkpO1xyXG5cclxuICAgICAgICBpZiAob3BlbkNvbnRleHRzW2lkXSkge1xyXG4gICAgICAgICAgICAvLyBvcGVuQ29udGV4dHNbaWRdLnJlZ2lzdGVyKGN0eCk7XHJcbiAgICAgICAgICAgIHJldHVybiBvcGVuQ29udGV4dHNbaWRdXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBvcGVuQ29udGV4dHNbaWRdID0gdGhpcztcclxuICAgICAgICB0aGlzLl9pc0xvY2FsSWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuX3BlcnNpc3RlbmNlVG0gPSBwZXJzaXN0ZW5jZVRtIHx8IHRoaXMuY29uc3RydWN0b3IucGVyc2lzdGVuY2VUbTtcclxuXHJcbiAgICAgICAgdGhpcy5zdG9yZXMgPSB7fTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge307XHJcbiAgICAgICAgdGhpcy5kYXRhcyA9IHt9O1xyXG4gICAgICAgIF9fcHJvdG9fX3B1c2godGhpcywgJ3N0b3JlcycsIHBhcmVudCk7XHJcbiAgICAgICAgX19wcm90b19fcHVzaCh0aGlzLCAnc3RhdGUnLCBwYXJlbnQpO1xyXG4gICAgICAgIF9fcHJvdG9fX3B1c2godGhpcywgJ2RhdGFzJywgcGFyZW50KTtcclxuICAgICAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcclxuXHJcbiAgICAgICAgaWYgKHBhcmVudCkge1xyXG4gICAgICAgICAgICBwYXJlbnQuX2FkZENoaWxkKHRoaXMpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc291cmNlcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuX2NoaWxkQ29udGV4dHMgPSBbXTtcclxuXHJcbiAgICAgICAgdGhpcy5fX3JldGFpbkxvY2tzID0ge2FsbDogMH07XHJcbiAgICAgICAgdGhpcy5fX3c4TG9ja3MgPSB7YWxsOiAxfTtcclxuICAgICAgICB0aGlzLl9fbGlzdGVuaW5nID0ge307XHJcbiAgICAgICAgdGhpcy5fX2NvbnRleHQgPSB7fTtcclxuICAgICAgICB0aGlzLl9fbWl4ZWQgPSBbXTtcclxuICAgICAgICB0aGlzLl9fbWl4ZWRMaXN0ID0gW107XHJcbiAgICAgICAgdGhpcy5fZm9sbG93ZXJzID0gW107XHJcbiAgICAgICAgaWYgKHBhcmVudCkge1xyXG4gICAgICAgICAgICBwYXJlbnQucmV0YWluKFwiaXNNeVBhcmVudFwiKTtcclxuICAgICAgICAgICAgIXBhcmVudC5fc3RhYmxlICYmIHRoaXMud2FpdChcImlzTXlQYXJlbnRcIik7XHJcbiAgICAgICAgICAgIHBhcmVudC5vbih0aGlzLl9fcGFyZW50TGlzdCA9IHtcclxuICAgICAgICAgICAgICAgICdzdGFibGUnOiBzID0+IHRoaXMucmVsZWFzZShcImlzTXlQYXJlbnRcIiksXHJcbiAgICAgICAgICAgICAgICAndW5zdGFibGUnOiBzID0+IHRoaXMud2FpdChcImlzTXlQYXJlbnRcIiksXHJcbiAgICAgICAgICAgICAgICAndXBkYXRlJzogcyA9PiB0aGlzLl9wcm9wYWcoKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgLy8gdGhpcy5yZWdpc3RlcihwYXJlbnQuX19jb250ZXh0LCBzdGF0ZSwgZGF0YXMpO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIHRoaXMucmVnaXN0ZXIoY3R4LCBzdGF0ZSwgZGF0YXMpO1xyXG4gICAgICAgIHRoaXMuX193OExvY2tzLmFsbC0tO1xyXG4gICAgICAgIHRoaXMuX3N0YWJsZSA9ICF0aGlzLl9fdzhMb2Nrcy5hbGw7XHJcblxyXG4gICAgICAgIGlmIChhdXRvRGVzdHJveSlcclxuICAgICAgICAgICAgc2V0VGltZW91dChcclxuICAgICAgICAgICAgICAgIHRtID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJldGFpbihcImF1dG9EZXN0cm95XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzcG9zZShcImF1dG9EZXN0cm95XCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgbW91bnQoaWQsIHN0YXRlLCBkYXRhcykge1xyXG4gICAgICAgIGlmIChpc0FycmF5KGlkKSkge1xyXG4gICAgICAgICAgICBpZC5mb3JFYWNoKGsgPT4gdGhpcy5fbW91bnQoaywgc3RhdGUgJiYgc3RhdGVba10sIGRhdGFzICYmIGRhdGFzW2tdKSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fbW91bnQoLi4uYXJndW1lbnRzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgX21vdW50KGlkLCBzdGF0ZSwgZGF0YXMpIHtcclxuICAgICAgICBpZiAoIXRoaXMuX19jb250ZXh0W2lkXSkgey8vYXNrIG1peGVkIHx8IHBhcmVudFxyXG4gICAgICAgICAgICBpZiAodGhpcy5fX21peGVkLnJlZHVjZSgobW91bnRlZCwgY3R4KSA9PiAobW91bnRlZCB8fCBjdHguX21vdW50KGlkLCBzdGF0ZSwgZGF0YXMpKSwgZmFsc2UpIHx8XHJcbiAgICAgICAgICAgICAgICAhdGhpcy5wYXJlbnQpXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcmVudC5fbW91bnQoLi4uYXJndW1lbnRzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jb25zdHJ1Y3Rvci5TdG9yZS5tb3VudFN0b3JlKGlkLCB0aGlzLCBudWxsLCBzdGF0ZSwgZGF0YXMpO1xyXG4gICAgICAgIHRoaXMuX3dhdGNoU3RvcmUoaWQpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9fY29udGV4dFtpZF07XHJcbiAgICB9XHJcblxyXG4gICAgX3dhdGNoU3RvcmUoaWQsIHN0YXRlLCBkYXRhcykge1xyXG4gICAgICAgIGlmICghdGhpcy5fX2NvbnRleHRbaWRdKSB7Ly9hc2sgbWl4ZWQgfHwgcGFyZW50XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9fbWl4ZWQucmVkdWNlKChtb3VudGVkLCBjdHgpID0+IChtb3VudGVkIHx8IGN0eC5fd2F0Y2hTdG9yZShpZCwgc3RhdGUsIGRhdGFzKSksIGZhbHNlKSB8fFxyXG4gICAgICAgICAgICAgICAgIXRoaXMucGFyZW50KVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJlbnQuX3dhdGNoU3RvcmUoLi4uYXJndW1lbnRzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0aGlzLl9fbGlzdGVuaW5nW2lkXSAmJiAhaXNGdW5jdGlvbih0aGlzLl9fY29udGV4dFtpZF0pKSB7XHJcbiAgICAgICAgICAgICF0aGlzLl9fY29udGV4dFtpZF0uaXNTdGFibGUoKSAmJiB0aGlzLndhaXQoaWQpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5fX2NvbnRleHRbaWRdLm9uKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fX2xpc3RlbmluZ1tpZF0gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ3VwZGF0ZSc6IHMgPT4gdGhpcy5wcm9wYWcoKSxcclxuICAgICAgICAgICAgICAgICAgICAnc3RhYmxlJzogcyA9PiB0aGlzLnJlbGVhc2UoaWQpLFxyXG4gICAgICAgICAgICAgICAgICAgICd1bnN0YWJsZSc6IHMgPT4gdGhpcy53YWl0KGlkKVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIG1peGluKHRhcmdldEN0eCkge1xyXG4gICAgICAgIGxldCBwYXJlbnQgPSB0aGlzLnBhcmVudCwgbGlzdHM7XHJcbiAgICAgICAgdGhpcy5fX21peGVkLnB1c2godGFyZ2V0Q3R4KVxyXG4gICAgICAgIHRhcmdldEN0eC5yZXRhaW4oKTtcclxuICAgICAgICBpZiAoIXRhcmdldEN0eC5fc3RhYmxlKVxyXG4gICAgICAgICAgICB0aGlzLndhaXQodGFyZ2V0Q3R4Ll9pZCk7XHJcblxyXG4gICAgICAgIHRoaXMuX19taXhlZExpc3QucHVzaChsaXN0cyA9IHtcclxuICAgICAgICAgICAgJ3N0YWJsZSc6IHMgPT4gdGhpcy5yZWxlYXNlKHRhcmdldEN0eC5faWQpLFxyXG4gICAgICAgICAgICAndW5zdGFibGUnOiBzID0+IHRoaXMud2FpdCh0YXJnZXRDdHguX2lkKSxcclxuICAgICAgICAgICAgJ3VwZGF0ZSc6IHMgPT4gdGhpcy5fcHJvcGFnKClcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRhcmdldEN0eC5vbihsaXN0cyk7XHJcbiAgICAgICAgX19wcm90b19fcHVzaCh0aGlzLCAnc3RvcmVzJywgcGFyZW50KTtcclxuICAgICAgICBfX3Byb3RvX19wdXNoKHRoaXMsICdzdGF0ZScsIHBhcmVudCk7XHJcbiAgICAgICAgX19wcm90b19fcHVzaCh0aGlzLCAnZGF0YXMnLCBwYXJlbnQpO1xyXG4gICAgICAgIHRhcmdldEN0eC5yZWxpbmsodGFyZ2V0Q3R4Ll9fY29udGV4dCwgdGhpcywgdHJ1ZSk7XHJcblxyXG4gICAgICAgIF9fcHJvdG9fX3B1c2godGhpcywgJ3N0b3JlcycsIHRoaXMpO1xyXG4gICAgICAgIF9fcHJvdG9fX3B1c2godGhpcywgJ3N0YXRlJywgdGhpcyk7XHJcbiAgICAgICAgX19wcm90b19fcHVzaCh0aGlzLCAnZGF0YXMnLCB0aGlzKTtcclxuICAgICAgICB0aGlzLnJlbGluayh0aGlzLl9fY29udGV4dCwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVnaXN0ZXIocmF3Q3R4LCBzdGF0ZSA9IHt9LCBkYXRhcyA9IHt9KSB7XHJcbiAgICAgICAgdGhpcy5yZWxpbmsocmF3Q3R4LCB0aGlzLCBmYWxzZSwgc3RhdGUsIGRhdGFzKTtcclxuICAgICAgICBPYmplY3Qua2V5cyhyYXdDdHgpLmZvckVhY2goXHJcbiAgICAgICAgICAgIGlkID0+IChpc0Z1bmN0aW9uKHJhd0N0eFtpZF0pICYmIHJhd0N0eFtpZF0uc2luZ2xldG9uICYmIHRoaXMuX21vdW50KGlkLCBzdGF0ZVtpZF0sIGRhdGFzW2lkXSkpKVxyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE1hcCBzcmNDdHggc3RvcmUncyBvbiB0YXJnZXRDdHggaGVhZGVycyBwcm90bydzXHJcbiAgICAgKiBAcGFyYW0gc3JjQ3R4XHJcbiAgICAgKiBAcGFyYW0gdGFyZ2V0Q3R4XHJcbiAgICAgKiBAcGFyYW0gc3RhdGVcclxuICAgICAqIEBwYXJhbSBkYXRhc1xyXG4gICAgICovXHJcbiAgICByZWxpbmsoc3JjQ3R4LCB0YXJnZXRDdHggPSB0aGlzLCBleHRlcm5hbCwgc3RhdGUgPSB7fSwgZGF0YXMgPSB7fSkge1xyXG4gICAgICAgIGxldCBsY3R4ID0gdGFyZ2V0Q3R4Ll9zdG9yZXMucHJvdG90eXBlO1xyXG4gICAgICAgIE9iamVjdC5rZXlzKHNyY0N0eClcclxuICAgICAgICAgICAgLmZvckVhY2goXHJcbiAgICAgICAgICAgICAgICBpZCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhcmdldEN0eC5fX2NvbnRleHRbaWRdID09PSBzcmNDdHhbaWRdIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldEN0eC5fX2NvbnRleHRbaWRdICYmICh0YXJnZXRDdHguX19jb250ZXh0W2lkXS5jb25zdHJ1Y3RvciA9PT0gc3JjQ3R4W2lkXSApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXRDdHguX19jb250ZXh0W2lkXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCJSZXNjb3BlIENvbnRleHQgOiBcIiwgaWQsIFwiIGFscmVhZHkgZXhpc3QgaW4gdGhpcyBjb250ZXh0ICFcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFleHRlcm5hbClcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fX2NvbnRleHRbaWRdID0gc3JjQ3R4W2lkXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsY3R4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKChjdHgsIGlkKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0OiAoKSA9PiB0aGlzLl9fY29udGV4dFtpZF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMuX19jb250ZXh0LCBpZClcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0Q3R4Ll9zdGF0ZS5wcm90b3R5cGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoKGN0eCwgaWQpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXQ6ICgpID0+IChjdHhbaWRdICYmIGN0eFtpZF0uc3RhdGUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldDogKHYpID0+ICh0aGlzLl9tb3VudChpZCwgdikpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLl9fY29udGV4dCwgaWQpXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldEN0eC5fZGF0YXMucHJvdG90eXBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKChjdHgsIGlkKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0OiAoKSA9PiAoY3R4W2lkXSAmJiBjdHhbaWRdLmRhdGFzKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXQ6ICh2KSA9PiAodGhpcy5fbW91bnQoaWQsIHVuZGVmaW5lZCwgdikpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLl9fY29udGV4dCwgaWQpXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIG9iaiB7UmVhY3QuQ29tcG9uZW50fFN0b3JlfGZ1bmN0aW9uKVxyXG4gICAgICogQHBhcmFtIGtleSB7c3RyaW5nfSBvcHRpb25hbCBrZXkgd2hlcmUgdG8gbWFwIHRoZSBwdWJsaWMgc3RhdGVcclxuICAgICAqL1xyXG4gICAgYmluZChvYmosIGtleSwgYXMsIHNldEluaXRpYWwgPSB0cnVlKSB7XHJcbiAgICAgICAgbGV0IGxhc3RSZXZzLCBkYXRhcztcclxuICAgICAgICBpZiAoa2V5ICYmICFpc0FycmF5KGtleSkpXHJcbiAgICAgICAgICAgIGtleSA9IFtrZXldO1xyXG5cclxuICAgICAgICAvLyBrZXkgPSBrZXl8fFxyXG5cclxuICAgICAgICBpZiAoYXMgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgc2V0SW5pdGlhbCA9IHRydWU7XHJcbiAgICAgICAgICAgIGFzID0gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX2ZvbGxvd2Vycy5wdXNoKFxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICBvYmosXHJcbiAgICAgICAgICAgICAgICBrZXksXHJcbiAgICAgICAgICAgICAgICBhcyxcclxuICAgICAgICAgICAgICAgIGxhc3RSZXZzID0ga2V5ICYmIGtleS5yZWR1Y2UoKHJldnMsIGlkKSA9PiAocmV2c1tpZF0gPSAwLCByZXZzKSwge30pXHJcbiAgICAgICAgICAgIF0pO1xyXG5cclxuICAgICAgICB0aGlzLm1vdW50KGtleSk7XHJcblxyXG4gICAgICAgIGlmIChzZXRJbml0aWFsICYmIHRoaXMuX3N0YWJsZSkge1xyXG4gICAgICAgICAgICBkYXRhcyA9IHRoaXMuZ2V0VXBkYXRlcyhsYXN0UmV2cyk7XHJcbiAgICAgICAgICAgIGlmICghZGF0YXMpIHJldHVybjtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBvYmogIT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYXMpIG9iai5zZXRTdGF0ZSh7W2FzXTogZGF0YXN9KTtcclxuICAgICAgICAgICAgICAgIGVsc2Ugb2JqLnNldFN0YXRlKGRhdGFzKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG9iaihkYXRhcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gbGFzdFJldnMgJiZcclxuICAgICAgICAgICAgLy8ga2V5LmZvckVhY2goaWQgPT4gKGxhc3RSZXZzW2lkXSA9IHRoaXMuc3RvcmVzW2lkXSAmJiB0aGlzLnN0b3Jlc1tpZF0uX3JldiB8fCAwKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVW4gYmluZCB0aGlzIGNvbnRleHQgb2ZmIHRoZSBnaXZlbiBjb21wb25lbnQta2V5c1xyXG4gICAgICogQHBhcmFtIG9ialxyXG4gICAgICogQHBhcmFtIGtleVxyXG4gICAgICogQHJldHVybnMge0FycmF5LjwqPn1cclxuICAgICAqL1xyXG4gICAgdW5CaW5kKG9iaiwga2V5LCBhcykge1xyXG4gICAgICAgIHZhciBmb2xsb3dlcnMgPSB0aGlzLl9mb2xsb3dlcnMsXHJcbiAgICAgICAgICAgIGkgPSBmb2xsb3dlcnMgJiYgZm9sbG93ZXJzLmxlbmd0aDtcclxuICAgICAgICB3aGlsZSAoZm9sbG93ZXJzICYmIGktLSlcclxuICAgICAgICAgICAgaWYgKGZvbGxvd2Vyc1tpXVswXSA9PT0gb2JqICYmICgnJyArIGZvbGxvd2Vyc1tpXVsxXSkgPT0gKCcnICsga2V5KSAmJlxyXG4gICAgICAgICAgICAgICAgKCcnICsgZm9sbG93ZXJzW2ldWzJdKSA9PSAoJycgKyBhcykpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZm9sbG93ZXJzLnNwbGljZShpLCAxKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgbWFwKHRvLCBzdG9yZXMsIGJpbmQgPSB0cnVlKSB7XHJcbiAgICAgICAgdGhpcy5tb3VudChzdG9yZXMpO1xyXG4gICAgICAgIGJpbmQgJiYgdGhpcy5iaW5kKHRvLCBzdG9yZXMsIG51bGwsIGZhbHNlKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHN0b3Jlcy5yZWR1Y2UoKGRhdGFzLCBpZCkgPT4gKGRhdGFzW2lkXSA9IHRoaXMuc3RvcmVzW2lkXSAmJiB0aGlzLnN0b3Jlc1tpZF0uZGF0YXMsIGRhdGFzKSwge30pO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFVwZGF0ZXMocmV2cywgb3V0cHV0LCB1cGRhdGVkKSB7XHJcbiAgICAgICAgbGV0IGN0eCA9IHRoaXMuX19jb250ZXh0O1xyXG5cclxuICAgICAgICBvdXRwdXQgPSBvdXRwdXQgfHwge307XHJcbiAgICAgICAgT2JqZWN0LmtleXMoY3R4KS5mb3JFYWNoKFxyXG4gICAgICAgICAgICBpZCA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIW91dHB1dFtpZF1cclxuICAgICAgICAgICAgICAgICAgICAmJiAoICFyZXZzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHx8IChyZXZzLmhhc093blByb3BlcnR5KGlkKSAmJiByZXZzW2lkXSA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB8fCAhKCAhcmV2cy5oYXNPd25Qcm9wZXJ0eShpZCkgfHwgY3R4W2lkXS5fcmV2IDw9IHJldnNbaWRdICkpXHJcbiAgICAgICAgICAgICAgICApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlZCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIG91dHB1dFtpZF0gPSB0aGlzLmRhdGFzW2lkXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmV2cyAmJiByZXZzW2lkXSAhPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXZzW2lkXSA9IGN0eFtpZF0uX3JldjtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICAgIHVwZGF0ZWQgPSB0aGlzLl9fbWl4ZWQucmVkdWNlKCh1cGRhdGVkLCBjdHgpID0+IChjdHguZ2V0VXBkYXRlcyhyZXZzLCBvdXRwdXQsIHVwZGF0ZWQpIHx8IHVwZGF0ZWQpLCB1cGRhdGVkKTtcclxuICAgICAgICB1cGRhdGVkID0gdGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuZ2V0VXBkYXRlcyhyZXZzLCBvdXRwdXQsIHVwZGF0ZWQpIHx8IHVwZGF0ZWQ7XHJcbiAgICAgICAgcmV0dXJuIHVwZGF0ZWQgJiYgb3V0cHV0O1xyXG4gICAgfVxyXG5cclxuICAgIHNlcmlhbGl6ZShmbGFnc19zdGF0ZXMgPSAvLiovLCBmbGFnc19kYXRhcyA9IC8uKi8pIHtcclxuICAgICAgICBsZXQgY3R4ID0gdGhpcy5fX2NvbnRleHQsIG91dHB1dCA9IHtzdGF0ZToge30sIGRhdGFzOiB7fX0sXHJcbiAgICAgICAgICAgIF9mbGFnc19zdGF0ZXMsXHJcbiAgICAgICAgICAgIF9mbGFnc19kYXRhcztcclxuICAgICAgICBpZiAoaXNBcnJheShmbGFnc19zdGF0ZXMpKVxyXG4gICAgICAgICAgICBmbGFnc19zdGF0ZXMuZm9yRWFjaChpZCA9PiAob3V0cHV0LnN0YXRlW2lkXSA9IHRoaXMuc3RhdGVbaWRdKSlcclxuXHJcbiAgICAgICAgaWYgKGlzQXJyYXkoZmxhZ3NfZGF0YXMpKVxyXG4gICAgICAgICAgICBmbGFnc19kYXRhcy5mb3JFYWNoKGlkID0+IChvdXRwdXQuZGF0YXNbaWRdID0gdGhpcy5kYXRhc1tpZF0pKVxyXG5cclxuICAgICAgICBpZiAoIWlzQXJyYXkoZmxhZ3NfZGF0YXMpICYmICFpc0FycmF5KGZsYWdzX3N0YXRlcykpXHJcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGN0eCkuZm9yRWFjaChcclxuICAgICAgICAgICAgICAgIGlkID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNGdW5jdGlvbihjdHhbaWRdKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgZmxhZ3MgPSBjdHhbaWRdLmNvbnN0cnVjdG9yLmZsYWdzO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBmbGFncyA9IGlzQXJyYXkoZmxhZ3MpID8gZmxhZ3MgOiBbZmxhZ3MgfHwgXCJcIl07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChmbGFncy5yZWR1Y2UoKHIsIGZsYWcpID0+IChyIHx8IF9mbGFnc19zdGF0ZXMudGVzdChmbGFnKSksIGZhbHNlKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0LnN0YXRlW2lkXSA9IHRoaXMuc3RhdGVbaWRdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZmxhZ3MucmVkdWNlKChyLCBmbGFnKSA9PiAociB8fCBfZmxhZ3NfZGF0YXMudGVzdChmbGFnKSksIGZhbHNlKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0LmRhdGFzW2lkXSA9IHRoaXMuZGF0YXNbaWRdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgcmV0dXJuIG91dHB1dDtcclxuICAgIH1cclxuXHJcbiAgICBvbihsaXN0cykge1xyXG5cclxuICAgICAgICBpZiAoIWlzU3RyaW5nKGxpc3RzKSAmJiBsaXN0cylcclxuICAgICAgICAgICAgT2JqZWN0LmtleXMobGlzdHMpLmZvckVhY2goayA9PiBzdXBlci5vbihrLCBsaXN0c1trXSkpO1xyXG4gICAgICAgIGVsc2Ugc3VwZXIub24oLi4uYXJndW1lbnRzKTtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVMaXN0ZW5lcihsaXN0cykge1xyXG4gICAgICAgIGlmICghaXNTdHJpbmcobGlzdHMpICYmIGxpc3RzKVxyXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhsaXN0cykuZm9yRWFjaChrID0+IHN1cGVyLnJlbW92ZUxpc3RlbmVyKGssIGxpc3RzW2tdKSk7XHJcbiAgICAgICAgZWxzZSBzdXBlci5yZW1vdmVMaXN0ZW5lciguLi5hcmd1bWVudHMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogb25jZSgnc3RhYmxlJywgY2IpXHJcbiAgICAgKiBAcGFyYW0gb2JqIHtSZWFjdC5Db21wb25lbnR8U3RvcmV8ZnVuY3Rpb24pXHJcbiAgICAgKiBAcGFyYW0ga2V5IHtzdHJpbmd9IG9wdGlvbmFsIGtleSB3aGVyZSB0byBtYXAgdGhlIHB1YmxpYyBzdGF0ZVxyXG4gICAgICovXHJcbiAgICB0aGVuKGNiKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3N0YWJsZSlcclxuICAgICAgICAgICAgcmV0dXJuIGNiKG51bGwsIHRoaXMuZGF0YXMpO1xyXG4gICAgICAgIHRoaXMub25jZSgnc3RhYmxlJywgZSA9PiBjYihudWxsLCB0aGlzLmRhdGFzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzdG9yZSh7c3RhdGUsIGRhdGFzfSwgcXVpZXQpIHtcclxuICAgICAgICBsZXQgY3R4ID0gdGhpcy5fX2NvbnRleHQ7XHJcbiAgICAgICAgT2JqZWN0LmtleXMoZGF0YXMpLmZvckVhY2goXHJcbiAgICAgICAgICAgIGlkID0+IHtcclxuICAgICAgICAgICAgICAgIHF1aWV0ID9cclxuICAgICAgICAgICAgICAgICAgICBjdHguZGF0YXMgPSBkYXRhc1tpZF1cclxuICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgY3R4LnB1c2goZGF0YXNbaWRdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgT2JqZWN0LmtleXMoc3RhdGUpLmZvckVhY2goXHJcbiAgICAgICAgICAgIGlkID0+IHtcclxuICAgICAgICAgICAgICAgIHF1aWV0ID9cclxuICAgICAgICAgICAgICAgICAgICBjdHguc3RhdGUgPSBzdGF0ZVtpZF1cclxuICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgY3R4LnNldFN0YXRlKHN0YXRlW2lkXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgcmV0YWluU3RvcmVzKHN0b3JlcyA9IFtdLCByZWFzb24pIHtcclxuICAgICAgICBzdG9yZXMuZm9yRWFjaChcclxuICAgICAgICAgICAgaWQgPT4gKHRoaXMuc3RvcmVzW2lkXSAmJiB0aGlzLnN0b3Jlc1tpZF0ucmV0YWluICYmIHRoaXMuc3RvcmVzW2lkXS5yZXRhaW4ocmVhc29uKSlcclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgZGlzcG9zZVN0b3JlcyhzdG9yZXMgPSBbXSwgcmVhc29uKSB7XHJcbiAgICAgICAgc3RvcmVzLmZvckVhY2goXHJcbiAgICAgICAgICAgIGlkID0+ICh0aGlzLnN0b3Jlc1tpZF0gJiYgdGhpcy5zdG9yZXNbaWRdLmRpc3Bvc2UgJiYgdGhpcy5zdG9yZXNbaWRdLmRpc3Bvc2UocmVhc29uKSlcclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgd2FpdChyZWFzb24pIHtcclxuICAgICAgLy8gIGNvbnNvbGUubG9nKFwid2FpdFwiLCByZWFzb24pO1xyXG4gICAgICAgIHRoaXMuX3N0YWJsZSYmIXRoaXMuX193OExvY2tzLmFsbCAmJiB0aGlzLmVtaXQoXCJ1bnN0YWJsZVwiLCB0aGlzKTtcclxuICAgICAgICB0aGlzLl9zdGFibGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLl9fdzhMb2Nrcy5hbGwrKztcclxuICAgICAgICBpZiAocmVhc29uKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX193OExvY2tzW3JlYXNvbl0gPSB0aGlzLl9fdzhMb2Nrc1tyZWFzb25dIHx8IDA7XHJcbiAgICAgICAgICAgIHRoaXMuX193OExvY2tzW3JlYXNvbl0rKztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVsZWFzZShyZWFzb24pIHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKFwicmVsZWFzZVwiLCByZWFzb24pO1xyXG5cclxuICAgICAgLy8gIGlmICh0aGlzLl9fdzhMb2Nrcy5hbGwgPT0gMClcclxuICAgICAgICAvLyAgICB0aHJvdyBuZXcgRXJyb3IoXCJSZWxlYXNlIG1vcmUgdGhhbiBsb2NraW5nICEgOiBcIityZWFzb24pO1xyXG5cclxuICAgICAgICB0aGlzLl9fdzhMb2Nrcy5hbGwtLTtcclxuICAgICAgICBpZiAocmVhc29uKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX193OExvY2tzW3JlYXNvbl0gPSB0aGlzLl9fdzhMb2Nrc1tyZWFzb25dIHx8IDA7XHJcbiAgICAgICAgICAgIHRoaXMuX193OExvY2tzW3JlYXNvbl0tLTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0aGlzLl9fdzhMb2Nrcy5hbGwpIHtcclxuICAgICAgICAgICAgdGhpcy5fc3RhYmlsaXplclRNICYmIGNsZWFyVGltZW91dCh0aGlzLl9zdGFiaWxpemVyVE0pO1xyXG4gICAgICAgICAgICB0aGlzLl9wcm9wYWdUTSAmJiBjbGVhclRpbWVvdXQodGhpcy5fcHJvcGFnVE0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5fc3RhYmlsaXplclRNID0gc2V0VGltZW91dChcclxuICAgICAgICAgICAgICAgIGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5fX3c4TG9ja3MuYWxsKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fc3RhYmlsaXplclRNID0gbnVsbDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc3RhYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXQoXCJzdGFibGVcIiwgdGhpcyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3Byb3BhZygpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBwcm9wYWcoKSB7XHJcbiAgICAgICAgdGhpcy5fcHJvcGFnVE0gJiYgY2xlYXJUaW1lb3V0KHRoaXMuX3Byb3BhZ1RNKTtcclxuICAgICAgICB0aGlzLl9wcm9wYWdUTSA9IHNldFRpbWVvdXQoXHJcbiAgICAgICAgICAgIGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcHJvcGFnKClcclxuICAgICAgICAgICAgfSwgNTBcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIF9wcm9wYWcoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2ZvbGxvd2Vycy5sZW5ndGgpXHJcbiAgICAgICAgICAgIHRoaXMuX2ZvbGxvd2Vycy5mb3JFYWNoKCh7MDogb2JqLCAxOiBrZXksIDI6IGFzLCAzOiBsYXN0UmV2c30pID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBkYXRhcyA9IHRoaXMuZ2V0VXBkYXRlcyhsYXN0UmV2cyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWRhdGFzKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG9iaiAhPSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYXMpIG9iai5zZXRTdGF0ZSh7W2FzXTogZGF0YXN9KTtcclxuICAgICAgICAgICAgICAgICAgICBlbHNlIG9iai5zZXRTdGF0ZShkYXRhcyk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIG9iaihkYXRhcywgbGFzdFJldnMgJiYgWy4uLmxhc3RSZXZzXSB8fCBcIm5vIHJldnNcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBsYXN0UmV2cyAmJlxyXG4gICAgICAgICAgICAgICAgLy8ga2V5LmZvckVhY2goaWQgPT4gKGxhc3RSZXZzW2lkXSA9IHRoaXMuc3RvcmVzW2lkXSAmJiB0aGlzLnN0b3Jlc1tpZF0uX3JldiB8fCAwKSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuZW1pdChcInVwZGF0ZVwiLCB0aGlzLmdldFVwZGF0ZXMoKSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIF9nZXRBbGxDaGlsZHMoY2hpbGRzPVtdKSB7XHJcbiAgICAgICAgY2hpbGRzLnB1c2goLi4udGhpcy5fY2hpbGRDb250ZXh0cylcclxuICAgICAgICB0aGlzLl9jaGlsZENvbnRleHRzLmZvckVhY2goXHJcbiAgICAgICAgICAgIGN0eD0+e1xyXG4gICAgICAgICAgICAgICAgY3R4Ll9nZXRBbGxDaGlsZHMoY2hpbGRzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgcmV0dXJuIGNoaWxkcztcclxuICAgIH1cclxuXHJcbiAgICBfYWRkQ2hpbGQoY3R4KSB7XHJcbiAgICAgICAgdGhpcy5fY2hpbGRDb250ZXh0cy5wdXNoKGN0eCk7XHJcbiAgICB9XHJcblxyXG4gICAgX3JtQ2hpbGQoY3R4KSB7XHJcbiAgICAgICAgbGV0IGkgPSB0aGlzLl9jaGlsZENvbnRleHRzLmluZGV4T2YoY3R4KTtcclxuICAgICAgICBpZiAoaSAhPSAtMSlcclxuICAgICAgICAgICAgdGhpcy5fY2hpbGRDb250ZXh0cy5zcGxpY2UoaSwgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0YWluKHJlYXNvbikge1xyXG4gICAgICAgIHRoaXMuX19yZXRhaW5Mb2Nrcy5hbGwrKztcclxuICAgICAgICAvL2NvbnNvbGUubG9nKFwicmV0YWluXCIsIHRoaXMuX2lkLCByZWFzb24pO1xyXG5cclxuICAgICAgICBpZiAocmVhc29uKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX19yZXRhaW5Mb2Nrc1tyZWFzb25dID0gdGhpcy5fX3JldGFpbkxvY2tzW3JlYXNvbl0gfHwgMDtcclxuICAgICAgICAgICAgdGhpcy5fX3JldGFpbkxvY2tzW3JlYXNvbl0rKztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZGlzcG9zZShyZWFzb24pIHtcclxuICAgICAgLy8gIGNvbnNvbGUubG9nKFwiZGlzcG9zZVwiLCB0aGlzLl9pZCwgcmVhc29uKTtcclxuICAgICAgIC8vIGlmICh0aGlzLl9fcmV0YWluTG9ja3MuYWxsID09IDApXHJcbiAgICAgICAgIC8vICAgdGhyb3cgbmV3IEVycm9yKFwiRGlzcG9zZSBtb3JlIHRoYW4gcmV0YWluaW5nICEgOiBcIityZWFzb24pO1xyXG5cclxuICAgICAgICB0aGlzLl9fcmV0YWluTG9ja3MuYWxsLS07XHJcbiAgICAgICAgaWYgKHJlYXNvbikge1xyXG4gICAgICAgICAgICB0aGlzLl9fcmV0YWluTG9ja3NbcmVhc29uXSA9IHRoaXMuX19yZXRhaW5Mb2Nrc1tyZWFzb25dIHx8IDA7XHJcbiAgICAgICAgICAgIHRoaXMuX19yZXRhaW5Mb2Nrc1tyZWFzb25dLS07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGhpcy5fX3JldGFpbkxvY2tzLmFsbCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fcGVyc2lzdGVuY2VUbSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZGVzdHJveVRNICYmIGNsZWFyVGltZW91dCh0aGlzLl9kZXN0cm95VE0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZGVzdHJveVRNID0gc2V0VGltZW91dChcclxuICAgICAgICAgICAgICAgICAgICBlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInd0ZiBjdHhcIiwgdGhpcy5faWQsIHJlYXNvbiwgdGhpcy5fX3c4TG9ja3MsIHRoaXMuX3N0YWJsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGhlbihzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgY29uc29sZS5sb2coXCJ3dGYgY3R4IHRoZW5cIiwgdGhpcy5faWQsIHJlYXNvbiwgdGhpcy5fX3c4TG9ja3MpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIXRoaXMuX19yZXRhaW5Mb2Nrcy5hbGwgJiYgdGhpcy5kZXN0cm95KCl9KTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3BlcnNpc3RlbmNlVG1cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRoZW4ocyA9PiAoIXRoaXMuX19yZXRhaW5Mb2Nrcy5hbGwgJiYgdGhpcy5kZXN0cm95KCkpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogb3JkZXIgZGVzdHJveSBvZiBsb2NhbCBzdG9yZXNcclxuICAgICAqL1xyXG4gICAgZGVzdHJveSgpIHtcclxuICAgICAgICBsZXQgY3R4ID0gdGhpcy5fX2NvbnRleHQ7XHJcblxyXG4gICAgICAgLy8gY29uc29sZS5sb2coXCJkZXN0cm95XCIsIHRoaXMuX2lkKTtcclxuICAgICAgICB0aGlzLmVtaXQoXCJkZXN0cm95XCIpO1xyXG4gICAgICAgIE9iamVjdC5rZXlzKFxyXG4gICAgICAgICAgICB0aGlzLl9fbGlzdGVuaW5nXHJcbiAgICAgICAgKS5mb3JFYWNoKFxyXG4gICAgICAgICAgICBpZCA9PiB0aGlzLl9fY29udGV4dFtpZF0ucmVtb3ZlTGlzdGVuZXIodGhpcy5fX2xpc3RlbmluZ1tpZF0pXHJcbiAgICAgICAgKTtcclxuXHJcblxyXG5cclxuICAgICAgICB0aGlzLl9fbGlzdGVuaW5nID0ge307XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9pc0xvY2FsSWQpXHJcbiAgICAgICAgICAgIGRlbGV0ZSBvcGVuQ29udGV4dHNbdGhpcy5faWRdO1xyXG4gICAgICAgIHRoaXMuX2ZvbGxvd2Vycy5sZW5ndGggPSAwO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gY3R4KVxyXG4gICAgICAgICAgICBpZiAoIWlzRnVuY3Rpb24oY3R4W2tleV0pKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY3R4W2tleV0uY29udGV4dE9iaiA9PT0gdGhpcylcclxuICAgICAgICAgICAgICAgICAgICBjdHhba2V5XS5kZXN0cm95KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgY3R4W2tleV0gPSBjdHhba2V5XS5jb25zdHJ1Y3RvcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIHdoaWxlICh0aGlzLl9fbWl4ZWRMaXN0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLl9fbWl4ZWRbMF0ucmVtb3ZlTGlzdGVuZXIodGhpcy5fX21peGVkTGlzdC5zaGlmdCgpKTtcclxuICAgICAgICAgICAgdGhpcy5fX21peGVkLnNoaWZ0KCkuZGlzcG9zZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5wYXJlbnQpIHtcclxuICAgICAgICAgICAgdGhpcy5wYXJlbnQucmVtb3ZlTGlzdGVuZXIodGhpcy5fX3BhcmVudExpc3QpO1xyXG4gICAgICAgICAgICB0aGlzLnBhcmVudC5kaXNwb3NlKFwiaXNNeVBhcmVudFwiKTtcclxuICAgICAgICAgICAgdGhpcy5wYXJlbnQuX3JtQ2hpbGQodGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHRoaXMuZGF0YXMgPSB0aGlzLnN0YXRlID0gdGhpcy5jb250ZXh0ID0gdGhpcy5zdG9yZXMgPSBudWxsO1xyXG4gICAgICAgIC8vIHRoaXMuX2RhdGFzID0gdGhpcy5fc3RhdGUgPSB0aGlzLl9zdG9yZXMgPSBudWxsO1xyXG5cclxuXHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvQ29udGV4dC5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImlzc3RyaW5nXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiaXNzdHJpbmdcIlxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpc2FycmF5XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiaXNhcnJheVwiXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV2ZW50c1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImV2ZW50c1wiXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImlzZnVuY3Rpb25cIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJpc2Z1bmN0aW9uXCJcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2hvcnRpZFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInNob3J0aWRcIlxuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxyXG4gKiBDb3B5cmlnaHQgKGMpICAyMDE3IENhaXBpIExhYnMgLlxyXG4gKlxyXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxyXG4gKlxyXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuICpcclxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIFVsdHJhIHNjYWxhYmxlIHN0YXRlLWF3YXJlIHN0b3JlXHJcbiAqXHJcbiAqIEB0b2RvIDogbG90IG9mIG9wdGltcy4uLlxyXG4gKi9cclxuXHJcbnZhciBpc1N0cmluZyAgICAgPSByZXF1aXJlKCdpc3N0cmluZycpXHJcbiAgICAsIGlzQXJyYXkgICAgPSByZXF1aXJlKCdpc2FycmF5JylcclxuICAgICwgaXNGdW5jdGlvbiA9IHJlcXVpcmUoJ2lzZnVuY3Rpb24nKVxyXG4gICAgLFxyXG4gICAgQ29udGV4dCAgICAgID0gcmVxdWlyZSgnLi9Db250ZXh0JyksXHJcbiAgICBFdmVudEVtaXR0ZXIgPSByZXF1aXJlKCdldmVudHMnKSxcclxuICAgIHNob3J0aWQgICAgICA9IHJlcXVpcmUoJ3Nob3J0aWQnKSxcclxuICAgIG9ialByb3RvICAgICA9IE9iamVjdC5nZXRQcm90b3R5cGVPZih7fSksXHJcbiAgICBvcGVuQ29udGV4dHMgPSB7fTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdG9yZSBleHRlbmRzIEV2ZW50RW1pdHRlciB7XHJcblxyXG4gICAgc3RhdGljIHVzZSAgICAgICAgICAgICAgICAgICAgICAgID0gW107Ly8gb3ZlcnJpZGFibGUgbGlzdCBvZiBzb3VyY2Ugc3RvcmVzXHJcbiAgICBzdGF0aWMgZm9sbG93Oy8vIG92ZXJyaWRhYmxlIGxpc3Qgb2Ygc3RvcmUgdGhhdCB3aWxsIGFsbG93IHB1c2ggaWYgdXBkYXRlZFxyXG4gICAgc3RhdGljIHJlcXVpcmU7XHJcbiAgICBzdGF0aWMgc3RhdGljQ29udGV4dCAgICAgICAgICAgICAgPSBuZXcgQ29udGV4dCh7fSwge2lkIDogXCJzdGF0aWNcIn0pO1xyXG4gICAgc3RhdGljIGluaXRpYWxTdGF0ZSAgICAgICAgICAgICAgID0gdW5kZWZpbmVkOy8vIGRlZmF1bHQgc3RhdGVcclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICAgKi9cclxuICAgICAgICAgICBzdGF0aWMgZGVmYXVsdE1heExpc3RlbmVycyA9IDEwMDtcclxuICAgIC8qKlxyXG4gICAgICogaWYgcmV0YWluIGdvZXMgdG8gMCA6XHJcbiAgICAgKiBmYWxzZSB0byBub3QgZGVzdHJveSxcclxuICAgICAqIDAgdG8gc3luYyBhdXRvIGRlc3Ryb3lcclxuICAgICAqIE1zIHRvIGF1dG9kZXN0cm95IGFmdGVyIHRtIG1zIGlmIG5vIHJldGFpbiBoYXMgYmVlbiBjYWxsZWRcclxuICAgICAqIEB0eXBlIHtib29sZWFufEludH1cclxuICAgICAqL1xyXG4gICAgICAgICAgIHN0YXRpYyBwZXJzaXN0ZW5jZVRtICAgICAgID0gZmFsc2U7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb25zdHJ1Y3Rvciwgd2lsbCBidWlsZCBhIHJlc2NvcGUgc3RvcmVcclxuICAgICAqXHJcbiAgICAgKiAoY29udGV4dCwge3JlcXVpcmUsdXNlLHJlZmluZSxzdGF0ZSwgZGF0YXN9KVxyXG4gICAgICogKGNvbnRleHQpXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGNvbnRleHQge29iamVjdH0gY29udGV4dCB3aGVyZSB0byBmaW5kIHRoZSBvdGhlciBzdG9yZXMgKGRlZmF1bHQgOiBzdGF0aWMgc3RhdGljQ29udGV4dCApXHJcbiAgICAgKiBAcGFyYW0ga2V5cyB7QXJyYXl9IChwYXNzZWQgdG8gU3RvcmU6Om1hcCkgRXggOiBbXCJzZXNzaW9uXCIsIFwib3RoZXJOYW1lZFN0b3JlOmtleVwiLCBvdGhlclN0b3JlLmFzKFwib3RoZXJLZXlcIildXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdmFyIGFyZ3ogICAgICAgICA9IFsuLi5hcmd1bWVudHNdLFxyXG4gICAgICAgICAgICBfc3RhdGljICAgICAgPSB0aGlzLmNvbnN0cnVjdG9yLFxyXG4gICAgICAgICAgICBjb250ZXh0ICAgICAgPSAhaXNBcnJheShhcmd6WzBdKSAmJiAhaXNTdHJpbmcoYXJnelswXSkgPyBhcmd6LnNoaWZ0KCkgOiBfc3RhdGljLnN0YXRpY0NvbnRleHQsXHJcbiAgICAgICAgICAgIGNmZyAgICAgICAgICA9IGFyZ3pbMF0gJiYgIWlzQXJyYXkoYXJnelswXSkgJiYgIWlzU3RyaW5nKGFyZ3pbMF0pID8gYXJnei5zaGlmdCgpIDoge30sXHJcbiAgICAgICAgICAgIG5hbWUgICAgICAgICA9IGlzU3RyaW5nKGFyZ3pbMF0pID8gYXJnelswXSA6IGNmZy5uYW1lIHx8IF9zdGF0aWMubmFtZSxcclxuICAgICAgICAgICAgd2F0Y2hzICAgICAgID0gaXNBcnJheShhcmd6WzBdKSA/IGFyZ3ouc2hpZnQoKSA6IGNmZy51c2UgfHwgW10sLy8gd2F0Y2hzIG5lZWQgdG8gYmUgZGVmaW5lZCBhZnRlciBhbGwgdGhlIHN0b3JlIGFyZSByZWdpc3RlcmVkIDogc28gd2UgY2FuJ3QgZGVhbCB3aXRoIGFueSBcInN0YXRpYyB1c2VcIiBhdXRvbWF0aWNseVxyXG4gICAgICAgICAgICByZWZpbmUgICAgICAgPSBpc0Z1bmN0aW9uKGFyZ3pbMF0pID8gYXJnei5zaGlmdCgpIDogY2ZnLnJlZmluZSB8fCBudWxsLFxyXG4gICAgICAgICAgICBpbml0aWFsU3RhdGUgPSBfc3RhdGljLmluaXRpYWxTdGF0ZTtcclxuXHJcbiAgICAgICAgdGhpcy5fdWlkICAgICAgICAgID0gY2ZnLl91aWQgfHwgc2hvcnRpZC5nZW5lcmF0ZSgpO1xyXG4gICAgICAgIHRoaXMuX21heExpc3RlbmVycyA9IGNmZy5kZWZhdWx0TWF4TGlzdGVuZXJzIHx8IFN0b3JlLmRlZmF1bHRNYXhMaXN0ZW5lcnM7XHJcbiAgICAgICAgdGhpcy5sb2NrcyAgICAgICAgID0gMDtcclxuICAgICAgICB0aGlzLl9vblN0YWJpbGl6ZSAgPSBbXTtcclxuXHJcbiAgICAgICAgdGhpcy5fcGVyc2lzdGVuY2VUbSA9IGNmZy5wZXJzaXN0ZW5jZVRtIHx8IHRoaXMuY29uc3RydWN0b3IucGVyc2lzdGVuY2VUbTtcclxuICAgICAgICBpZiAoIGlzU3RyaW5nKGFyZ3pbMF0pICkge1xyXG4gICAgICAgICAgICBpZiAoIGNvbnRleHQuX19jb250ZXh0W25hbWVdIClcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIlJlU2NvcGU6IE92ZXJ3cml0aW5nIGFuIGV4aXN0aW5nIHN0YXRpYyBuYW1lZCBzdG9yZSAoICVzICkgISFcIiwgbmFtZSk7XHJcbiAgICAgICAgICAgIGNvbnRleHQuX19jb250ZXh0W25hbWVdID0gdGhpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICggY2ZnICYmIGNmZy5vbiApIHtcclxuICAgICAgICAgICAgdGhpcy5vbihjZmcub24pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyB0aGlzLnN0YXRlICAgICAgPSB0aGlzLnN0YXRlIHx8IHt9O1xyXG5cclxuICAgICAgICB0aGlzLl91c2UgPSB3YXRjaHM7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuXHJcbiAgICAgICAgaWYgKCBjb250ZXh0LnN0b3JlcyApIHtcclxuICAgICAgICAgICAgdGhpcy5jb250ZXh0T2JqID0gY29udGV4dDtcclxuICAgICAgICAgICAgdGhpcy5jb250ZXh0ICAgID0gY29udGV4dC5zdG9yZXM7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jb250ZXh0T2JqID0gbmV3IENvbnRleHQoY29udGV4dCk7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGV4dCAgICA9IGNvbnRleHQuc3RvcmVzO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIHRoaXMuX3N0YWJsZSAgICAgICA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5fcmV2ICAgICAgICAgID0gMTtcclxuICAgICAgICB0aGlzLl9yZXZzICAgICAgICAgPSB7fTtcclxuICAgICAgICB0aGlzLnN0b3JlcyAgICAgICAgPSB7fTtcclxuICAgICAgICB0aGlzLl9fcmV0YWluTG9ja3MgPSB7YWxsIDogMH07XHJcbiAgICAgICAgdGhpcy5fcmVxdWlyZSAgICAgID0gW107XHJcblxyXG4gICAgICAgIGlmICggX3N0YXRpYy5yZXF1aXJlIClcclxuICAgICAgICAgICAgdGhpcy5fcmVxdWlyZS5wdXNoKC4uLl9zdGF0aWMucmVxdWlyZSk7XHJcbiAgICAgICAgaWYgKCBjZmcucmVxdWlyZSApXHJcbiAgICAgICAgICAgIHRoaXMuX3JlcXVpcmUucHVzaCguLi5jZmcucmVxdWlyZSk7XHJcblxyXG4gICAgICAgIHRoaXMuX2ZvbGxvd2VycyA9IFtdO1xyXG5cclxuICAgICAgICBpZiAoIGNmZy5oYXNPd25Qcm9wZXJ0eShcImRhdGFzXCIpICYmIGNmZy5kYXRhcyAhPT0gdW5kZWZpbmVkIClcclxuICAgICAgICAgICAgdGhpcy5kYXRhcyA9IGNmZy5kYXRhcztcclxuICAgICAgICBpZiAoIGNmZy5oYXNPd25Qcm9wZXJ0eShcInN0YXRlXCIpICYmIGNmZy5zdGF0ZSAhPT0gdW5kZWZpbmVkIClcclxuICAgICAgICAgICAgaW5pdGlhbFN0YXRlID0gY2ZnLnN0YXRlO1xyXG5cclxuICAgICAgICBpZiAoIHJlZmluZSApXHJcbiAgICAgICAgICAgIHRoaXMucmVmaW5lID0gcmVmaW5lO1xyXG5cclxuICAgICAgICBpZiAoICEhdGhpcy5fdXNlICYmIHRoaXMuX3VzZS5sZW5ndGggKSB7Ly8gaWYgdGhlcmUgaW5pdGlhbCB3YXRjaHMgYW55d2F5XHJcbiAgICAgICAgICAgIHRoaXMucHVsbCh0aGlzLl91c2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCBpbml0aWFsU3RhdGUgKSB7Ly8gc3luYyByZWZpbmVcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IHsuLi5pbml0aWFsU3RhdGV9O1xyXG4gICAgICAgICAgICBpZiAoIHRoaXMuaXNDb21wbGV0ZSgpICYmIHRoaXMuZGF0YXMgPT09IHVuZGVmaW5lZCApXHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGFzID0gdGhpcy5yZWZpbmUodGhpcy5kYXRhcywgdGhpcy5zdGF0ZSwgdGhpcy5zdGF0ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3N0YWJsZSA9IHRoaXMuZGF0YXMgIT09IHVuZGVmaW5lZDsvLyBzdGFibGUgaWYgaXQgaGF2ZSBpbml0aWFsIHJlc3VsdCBkYXRhc1xyXG4gICAgICAgICF0aGlzLl9zdGFibGUgJiYgdGhpcy5lbWl0KCd1bnN0YWJsZScsIHRoaXMuc3RhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogZ2V0IGEgQnVpbGRlci1rZXkgcGFpciBmb3IgU3RvcmU6Om1hcFxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcclxuICAgICAqIEByZXR1cm5zIHt7c3RvcmU6IFN0b3JlLCBuYW1lOiAqfX1cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGFzKCBuYW1lICkge1xyXG4gICAgICAgIHJldHVybiB7c3RvcmUgOiB0aGlzLCBuYW1lfTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE1hcCBhbGwgbmFtZWQgc3RvcmVzIGluIHtrZXlzfSB0byB0aGUge29iamVjdH0ncyBzdGF0ZVxyXG4gICAgICogSG9vayBjb21wb25lbnRXaWxsVW5tb3VudCAoZm9yIHJlYWN0IGNvbXApIG9yIGRlc3Ryb3kgdG8gdW5CaW5kIHRoZW0gYXV0b21hdGljYWxseVxyXG4gICAgICogQHN0YXRpY1xyXG4gICAgICogQHBhcmFtIG9iamVjdCB7UmVhY3QuQ29tcG9uZW50fFN0b3JlfC4uLn0gdGFyZ2V0IHN0YXRlIGF3YXJlIG9iamVjdFxyXG4gICAgICogQHBhcmFtIGtleXMge0FycmF5fSBFeCA6IFtcInNlc3Npb25cIiwgXCJvdGhlclN0YXRpY05hbWVkU3RvcmU6a2V5XCIsIHN0b3JlLmFzKCdhbm90aGVyS2V5JyldXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBtYXAoIGNvbXBvbmVudCwga2V5cywgY29udGV4dCwgb3JpZ2luLCBzZXRJbml0aWFsID0gZmFsc2UgKSB7XHJcbiAgICAgICAgdmFyIHRhcmdldFJldnMgICAgID0gY29tcG9uZW50Ll9yZXZzIHx8IHt9O1xyXG4gICAgICAgIC8vIHZhciB0YXJnZXRDb250ZXh0ICA9IGNvbXBvbmVudC5zdG9yZXMgfHwgKGNvbXBvbmVudC5zdG9yZXMgPSBuZXcgQ29udGV4dCh7fSkpO1xyXG4gICAgICAgIHZhciBpbml0aWFsT3V0cHV0cyA9IHt9O1xyXG4gICAgICAgIGtleXMgICAgICAgICAgICAgICA9IGlzQXJyYXkoa2V5cykgPyBbLi4ua2V5c10gOiBba2V5c107XHJcblxyXG5cclxuICAgICAgICBjb250ZXh0ID0gY29udGV4dCB8fCBTdG9yZS5zdGF0aWNDb250ZXh0O1xyXG5cclxuICAgICAgICAvLyBpZiAoIXRhcmdldENvbnRleHQuX19jb250ZXh0KVxyXG4gICAgICAgIC8vICAgICBkZWJ1Z2dlcjtcclxuXHJcbiAgICAgICAga2V5cyAgICAgICAgICAgPSBrZXlzLmZpbHRlcihcclxuICAgICAgICAgICAgLy8gQHRvZG8gOiB1c2UgcXVlcnkgcmVmc1xyXG4gICAgICAgICAgICAvLyAoc3RvcmUpKFxcLnN0b3JlKSooXFxbKFxcKnwocHJvcHMpXFx3KykrKVxcXSk/KFxcOmFsaWFzKVxyXG4gICAgICAgICAgICAoIGtleSApID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICggIWtleSApIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiTm90IGEgbWFwcGFibGUgc3RvcmUgaXRlbSAnXCIgKyBrZXkgKyBcIicgaW4gXCIgKyBvcmlnaW4gKyAnICEhJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbGV0IG5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgYWxpYXMsXHJcbiAgICAgICAgICAgICAgICAgICAgc3RvcmU7XHJcbiAgICAgICAgICAgICAgICBpZiAoIGtleS5zdG9yZSAmJiBrZXkubmFtZSApIHtcclxuICAgICAgICAgICAgICAgICAgICBhbGlhcyA9IG5hbWUgPSBrZXkubmFtZTtcclxuICAgICAgICAgICAgICAgICAgICBzdG9yZSA9IGtleS5zdG9yZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIGlzRnVuY3Rpb24oa2V5KSApIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lID0gYWxpYXMgPSBrZXkubmFtZSB8fCBrZXkuZGVmYXVsdE5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RvcmUgPSBrZXk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGtleSAgID0ga2V5Lm1hdGNoKC8oW1xcd19dKykoPzpcXDpcXFsoXFwqKVxcXSk/KD86XFw6KFxcKikpPy8pO1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWUgID0ga2V5WzBdO1xyXG4gICAgICAgICAgICAgICAgICAgIHN0b3JlID0gY29udGV4dC5fX2NvbnRleHRba2V5WzBdXTtcclxuICAgICAgICAgICAgICAgICAgICBhbGlhcyA9IGtleVsxXSA9PSAnKicgPyBudWxsIDoga2V5WzJdIHx8IGtleVswXTsvLyBhbGxvdyBiaW5kaW5nIHByb3BzICAoWypdKVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICggdGFyZ2V0UmV2c1tuYW1lXSApIHJldHVybiBmYWxzZTsvLyBpZ25vcmUgZGJsIHVzZXMgZm9yIG5vd1xyXG4gICAgICAgICAgICAgICAgaWYgKCAhc3RvcmUgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIk5vdCBhIG1hcHBhYmxlIHN0b3JlIGl0ZW0gJ1wiICsgbmFtZSArIFwiL1wiICsgYWxpYXMgKyBcIicgaW4gXCIgKyBvcmlnaW4gKyAnICEhJywgc3RvcmUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIGlzRnVuY3Rpb24oc3RvcmUpICkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW91bnRTdG9yZShuYW1lLCBjb250ZXh0KVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb250ZXh0Ll9fY29udGV4dFtuYW1lXS5iaW5kKGNvbXBvbmVudCwgYWxpYXMsIHNldEluaXRpYWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGlmICggY29udGV4dC5fX2NvbnRleHRba2V5WzBdXS5zdGF0ZSApIHsvLyBkbyBzeW5jIHB1c2ggYWZ0ZXIgY29uc3RydWN0b3JcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgY29udGV4dC5fX2NvbnRleHRba2V5WzBdXS5wdXNoKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzdG9yZS5iaW5kKGNvbXBvbmVudCwgYWxpYXMsIHNldEluaXRpYWwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0UmV2c1thbGlhc10gPSB0YXJnZXRSZXZzW2FsaWFzXSB8fCB0cnVlO1xyXG4gICAgICAgICAgICAgICAgLy8gIXRhcmdldENvbnRleHQuX19jb250ZXh0W2FsaWFzXSAmJiB0YXJnZXRDb250ZXh0LnJlZ2lzdGVyKHtbYWxpYXNdIDogY29udGV4dC5fX2NvbnRleHRbbmFtZV19KTtcclxuICAgICAgICAgICAgICAgIGlmICggY29udGV4dC5fX2NvbnRleHRbbmFtZV0uaGFzT3duUHJvcGVydHkoJ2RhdGFzJykgKVxyXG4gICAgICAgICAgICAgICAgICAgIGluaXRpYWxPdXRwdXRzW2FsaWFzXSA9IGNvbnRleHQuZGF0YXNbbmFtZV07XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdmFyIG1peGVkQ1dVbm1vdW50LFxyXG4gICAgICAgICAgICB1bk1vdW50S2V5ID0gY29tcG9uZW50LmlzUmVhY3RDb21wb25lbnQgPyBcImNvbXBvbmVudFdpbGxVbm1vdW50XCIgOiBcImRlc3Ryb3lcIjtcclxuXHJcbiAgICAgICAgaWYgKCBjb21wb25lbnQuaGFzT3duUHJvcGVydHkodW5Nb3VudEtleSkgKSB7XHJcbiAgICAgICAgICAgIG1peGVkQ1dVbm1vdW50ID0gY29tcG9uZW50W3VuTW91bnRLZXldO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29tcG9uZW50W3VuTW91bnRLZXldID0gZnVuY3Rpb24gKCkgey8vIHRvZG8gaG9wXHJcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzW3VuTW91bnRLZXldO1xyXG4gICAgICAgICAgICBpZiAoIG1peGVkQ1dVbm1vdW50IClcclxuICAgICAgICAgICAgICAgIHRoaXNbdW5Nb3VudEtleV0gPSBtaXhlZENXVW5tb3VudDtcclxuICAgICAgICAgICAga2V5cy5tYXAoXHJcbiAgICAgICAgICAgICAgICAoIGtleSApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpYXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICgga2V5LnN0b3JlICYmIGtleS5uYW1lICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlhcyA9IG5hbWUgPSBrZXkubmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmUgPSBrZXkuc3RvcmU7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICggaXNGdW5jdGlvbihrZXkpICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lID0gYWxpYXMgPSBrZXkubmFtZSB8fCBrZXkuZGVmYXVsdE5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlID0gY29udGV4dC5fX2NvbnRleHRbbmFtZV07XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5ICAgPSBrZXkuc3BsaXQoJzonKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZSAgPSBrZXlbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlID0gY29udGV4dC5fX2NvbnRleHRba2V5WzBdXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpYXMgPSBrZXlbMV0gfHwga2V5WzBdO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc3RvcmUgJiYgIWlzRnVuY3Rpb24oc3RvcmUpICYmIHN0b3JlLnVuQmluZChjb21wb25lbnQsIGFsaWFzKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpc1t1bk1vdW50S2V5XSAmJiB0aGlzW3VuTW91bnRLZXldLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gaW5pdGlhbE91dHB1dHM7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldENvbnRleHQoIGNvbnRleHRzICkge1xyXG4gICAgICAgIGxldCBza2V5ID0gaXNBcnJheShjb250ZXh0cykgPyBjb250ZXh0cy5zb3J0KCggYSwgYiApID0+IHtcclxuICAgICAgICAgICAgaWYgKCBhLmZpcnN0bmFtZSA8IGIuZmlyc3RuYW1lICkgcmV0dXJuIC0xO1xyXG4gICAgICAgICAgICBpZiAoIGEuZmlyc3RuYW1lID4gYi5maXJzdG5hbWUgKSByZXR1cm4gMTtcclxuICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgfSkuam9pbignOjonKSA6IGNvbnRleHRzO1xyXG4gICAgICAgIHJldHVybiBDb250ZXh0LmNvbnRleHRzW3NrZXldID0gQ29udGV4dC5jb250ZXh0c1tza2V5XSB8fCBuZXcgQ29udGV4dCh7fSwge2lkIDogc2tleX0pO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBtb3VudFN0b3JlKCBuYW1lLCBjb250ZXh0LCBzdG9yZSwgc3RhdGUsIGRhdGFzICkge1xyXG4gICAgICAgIGxldCBjdHgsIGNvbnRleHRNYXAgPSBjb250ZXh0Ll9fY29udGV4dDtcclxuICAgICAgICBjb250ZXh0TWFwW25hbWVdICAgID0gc3RvcmUgPSBzdG9yZSB8fCBjb250ZXh0TWFwW25hbWVdO1xyXG4gICAgICAgIGlmICggIXN0b3JlICkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiTm90IGEgbWFwcGFibGUgc3RvcmUgaXRlbSAnXCIgKyBuYW1lICsgJyAhIScsIHN0b3JlKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoIGlzRnVuY3Rpb24oc3RvcmUpICkge1xyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICBpZiAoIHN0b3JlICYmIChzdG9yZS5jb250ZXh0cyB8fCBzdG9yZS5jb250ZXh0KSApIHtcclxuICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuZ2V0Q29udGV4dChzdG9yZS5jb250ZXh0cyB8fCBbc3RvcmUuY29udGV4dF0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGN0eC5yZWdpc3Rlcih7W25hbWVdIDogY3R4Ll9fY29udGV4dFtuYW1lXSB8fCBzdG9yZX0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnRleHRNYXBbbmFtZV0gPSBjdHhbbmFtZV0gPSBuZXcgc3RvcmUoY29udGV4dCwge3N0YXRlLCBkYXRhc30pO1xyXG4gICAgICAgICAgICAgICAgY3R4Ll93YXRjaFN0b3JlKG5hbWUpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGN0eFtuYW1lXTtcclxuICAgICAgICAgICAgfSBlbHNlXHJcbiAgICAgICAgICAgICAgICBzdG9yZSA9IGNvbnRleHRNYXBbbmFtZV0gPSBuZXcgc3RvcmUoY29udGV4dCwge3N0YXRlLCBkYXRhc30pO1xyXG4gICAgICAgICAgICBjb250ZXh0TWFwW25hbWVdLnJlbGluayhuYW1lKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoIHN0YXRlICE9PSB1bmRlZmluZWQgJiYgZGF0YXMgPT09IHVuZGVmaW5lZCApXHJcbiAgICAgICAgICAgICAgICBzdG9yZS5zZXRTdGF0ZShzdGF0ZSk7XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKCBzdGF0ZSAhPT0gdW5kZWZpbmVkIClcclxuICAgICAgICAgICAgICAgIHN0b3JlLnN0YXRlID0gc3RhdGU7XHJcblxyXG4gICAgICAgICAgICBpZiAoIGRhdGFzICE9PSB1bmRlZmluZWQgKVxyXG4gICAgICAgICAgICAgICAgc3RvcmUucHVzaChkYXRhcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzdG9yZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE92ZXJyaWRhYmxlIG1ldGhvZCB0byBrbm93IGlmIGEgc3RhdGUgY2hhbmdlIHNob3VsZCBiZSBwcm9wYWcgdG8gdGhlIGxpc3RlbmluZyBzdG9yZXMgJiBjb21wb25lbnRzXHJcbiAgICAgKiBJZiBzdGF0aWMgZm9sbG93IGlzIGRlZmluZWQsIHNob3VsZFByb3BhZyB3aWxsIHJldHVybiB0cnVlIGlmIGFueSBvZiB0aGUgXCJmb2xsb3dcIiBrZXlzIHdhcyB1cGRhdGVkXHJcbiAgICAgKiBJZiBub3QgaXQgd2lsbCBhbHdheXMgcmV0dXJuIHRydWVcclxuICAgICAqL1xyXG4gICAgc2hvdWxkUHJvcGFnKCBuRGF0YXMgKSB7XHJcbiAgICAgICAgdmFyIF9zdGF0aWMgPSB0aGlzLmNvbnN0cnVjdG9yLCByLFxyXG4gICAgICAgICAgICBjRGF0YXMgID0gdGhpcy5kYXRhcztcclxuXHJcbiAgICAgICAgLy8gaWYgKCAhY1N0YXRlIClcclxuICAgICAgICAvLyAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgaWYgKCAhY0RhdGFzICYmICghX3N0YXRpYy5mb2xsb3cgfHwgIV9zdGF0aWMuZm9sbG93Lmxlbmd0aCB8fFxyXG4gICAgICAgICAgICAgICAgX3N0YXRpYy5mb2xsb3cgJiYgX3N0YXRpYy5mb2xsb3cucmVkdWNlKCggciwgaSApID0+IChyIHx8IG5EYXRhcyAmJiBuRGF0YXNbaV0pLCBmYWxzZSkpIClcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgICAgIGlmICggaXNBcnJheShfc3RhdGljLmZvbGxvdykgKVxyXG4gICAgICAgICAgICBfc3RhdGljLmZvbGxvdy5mb3JFYWNoKFxyXG4gICAgICAgICAgICAgICAgKCBrZXkgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgciA9IHIgfHwgKG5EYXRhcyA/IGNEYXRhc1trZXldICE9PSBuRGF0YXNba2V5XSA6IGNEYXRhcyAmJiBjRGF0YXNba2V5XSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICBlbHNlIGlmICggX3N0YXRpYy5mb2xsb3cgPT09ICdzdHJpY3QnIClcclxuICAgICAgICAgICAgciA9IG5EYXRhcyA9PT0gY0RhdGFzO1xyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjRGF0YXMgJiYgT2JqZWN0LmtleXMoY0RhdGFzKS5mb3JFYWNoKFxyXG4gICAgICAgICAgICAgICAgKCBrZXkgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgciA9IHIgfHwgKG5EYXRhcyA/IGNEYXRhc1trZXldICE9PSBuRGF0YXNba2V5XSA6IGNEYXRhcyAmJiBjRGF0YXNba2V5XSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgbkRhdGFzICYmIE9iamVjdC5rZXlzKG5EYXRhcykuZm9yRWFjaChcclxuICAgICAgICAgICAgICAgICgga2V5ICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHIgPSByIHx8IChuRGF0YXMgPyBjRGF0YXNba2V5XSAhPT0gbkRhdGFzW2tleV0gOiBjRGF0YXMgJiYgY0RhdGFzW2tleV0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gISFyO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogT3ZlcnJpZGFibGUgcmVmaW5lciAvIHJlbWFwcGVyXHJcbiAgICAgKiBJZiBzdGF0ZSBvciBsYXN0UHVibGljU3RhdGUgYXJlIHNpbXBsZSBoYXNoIG1hcHMgcmVmaW5lIHdpbGwgcmV0dXJuIHsuLi5kYXRhcywgLi4uc3RhdGV9XHJcbiAgICAgKiBpZiBub3QgaXQgd2lsbCByZXR1cm4gdGhlIGxhc3QgcHJpdmF0ZSBzdGF0ZVxyXG4gICAgICogQHBhcmFtIGRhdGFzXHJcbiAgICAgKiBAcGFyYW0gc3RhdGVcclxuICAgICAqIEByZXR1cm5zIHsqfVxyXG4gICAgICovXHJcbiAgICByZWZpbmUoIGRhdGFzLCBzdGF0ZSwgY2hhbmdlcyApIHtcclxuICAgICAgICBzdGF0ZSA9IHN0YXRlIHx8IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgICAgIGlmICggIWRhdGFzIHx8IGRhdGFzLl9fcHJvdG9fXyAhPT0gb2JqUHJvdG8gfHwgc3RhdGUuX19wcm90b19fICE9PSBvYmpQcm90byApXHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uZGF0YXMsIC4uLnN0YXRlfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVib3VuY2UgdGhpcyBzdG9yZSBwcm9wYWdhdGlvbiAoICYgcmVkdWNpbmcgKVxyXG4gICAgICogQHBhcmFtIGNiXHJcbiAgICAgKi9cclxuICAgIHN0YWJpbGl6ZSggY2IgKSB7XHJcbiAgICAgICAgdmFyIG1lID0gdGhpcztcclxuICAgICAgICBjYiAmJiBtZS5vbmNlKCdzdGFibGUnLCBjYik7XHJcbiAgICAgICAgdGhpcy5fc3RhYmxlICYmIHRoaXMuZW1pdCgndW5zdGFibGUnLCB0aGlzLnN0YXRlLCB0aGlzLmRhdGFzKTtcclxuXHJcbiAgICAgICAgbWUuX3N0YWJsZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICBpZiAoIHRoaXMuX3N0YWJpbGl6ZXIgKVxyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5fc3RhYmlsaXplcik7XHJcblxyXG4gICAgICAgIHRoaXMuX3N0YWJpbGl6ZXIgPSBzZXRUaW1lb3V0KFxyXG4gICAgICAgICAgICB0aGlzLnB1c2guYmluZChcclxuICAgICAgICAgICAgICAgIHRoaXMsXHJcbiAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgKCkgPT4gey8vQHRvZG9cclxuICAgICAgICAgICAgICAgICAgICAvLyBtZS5fc3RhYmxlICAgICAgID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zdGFiaWxpemVyID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnJlbGVhc2UoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZGlzcGF0Y2goIGV2ZW50ICkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFB1bGwgc3RvcmVzIGluIHRoZSBwcml2YXRlIHN0YXRlXHJcbiAgICAgKiBAcGFyYW0gc3RvcmVzICB7QXJyYXl9IChwYXNzZWQgdG8gU3RvcmU6Om1hcCkgRXggOiBbXCJzZXNzaW9uXCIsIFwib3RoZXJOYW1lZFN0b3JlOmtleVwiLCBvdGhlclN0b3JlLmFzKFwib3RoZXJLZXlcIildXHJcbiAgICAgKi9cclxuICAgIHB1bGwoIHN0b3JlcywgZG9XYWl0LCBvcmlnaW4gKSB7XHJcbiAgICAgICAgbGV0IGluaXRpYWxPdXRwdXRzID0gU3RvcmUubWFwKHRoaXMsIHN0b3JlcywgdGhpcy5jb250ZXh0T2JqLCBvcmlnaW4sIHRydWUpO1xyXG4gICAgICAgIGlmICggZG9XYWl0ICkge1xyXG4gICAgICAgICAgICB0aGlzLndhaXQoKTtcclxuICAgICAgICAgICAgc3RvcmVzLmZvckVhY2goKCBzICkgPT4gdGhpcy5jb250ZXh0W3NdICYmIHRoaXMud2FpdCh0aGlzLmNvbnRleHRbc10pKTtcclxuICAgICAgICAgICAgdGhpcy5yZWxlYXNlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBpbml0aWFsT3V0cHV0cztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFwcGx5IHJlZmluZS9yZW1hcCBvbiB0aGUgcHJpdmF0ZSBzdGF0ZSAmIHB1c2ggdGhlIHJlc3VsdGluZyBcInB1YmxpY1wiIHN0YXRlIHRvIGZvbGxvd2Vyc1xyXG4gICAgICogQHBhcmFtIGNiXHJcbiAgICAgKi9cclxuICAgIHB1c2goIGRhdGFzLCBmb3JjZSwgY2IgKSB7XHJcbiAgICAgICAgY2IgICAgICAgICAgICA9IGZvcmNlID09PSB0cnVlID8gY2IgOiBmb3JjZTtcclxuICAgICAgICBmb3JjZSAgICAgICAgID0gZm9yY2UgPT09IHRydWU7XHJcbiAgICAgICAgdmFyIGkgICAgICAgICA9IDAsXHJcbiAgICAgICAgICAgIG1lICAgICAgICA9IHRoaXMsXHJcbiAgICAgICAgICAgIG5leHRTdGF0ZSA9ICFkYXRhcyAmJiB7Li4udGhpcy5zdGF0ZSwgLi4udGhpcy5fY2hhbmdlc1NXfSB8fCB0aGlzLnN0YXRlLFxyXG4gICAgICAgICAgICBuZXh0RGF0YXMgPSBkYXRhcyB8fFxyXG4gICAgICAgICAgICAgICAgKHRoaXMuaXNDb21wbGV0ZShuZXh0U3RhdGUpID8gdGhpcy5yZWZpbmUodGhpcy5kYXRhcywgbmV4dFN0YXRlLCB0aGlzLl9jaGFuZ2VzU1cpIDogdGhpcy5kYXRhcyk7XHJcblxyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0gbmV4dFN0YXRlO1xyXG4gICAgICAgIGlmICggIWZvcmNlICYmXHJcbiAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgICghdGhpcy5kYXRhcyAmJiB0aGlzLmRhdGFzID09PSBuZXh0RGF0YXMpIHx8ICF0aGlzLnNob3VsZFByb3BhZyhuZXh0RGF0YXMpXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgY2IgJiYgY2IoKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5kYXRhcyA9IG5leHREYXRhcztcclxuICAgICAgICB0aGlzLmxvY2tzKys7XHJcbiAgICAgICAgdGhpcy5yZWxlYXNlKGNiKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBVcGRhdGUgdGhlIGN1cnJlbnQgcHJpdmF0ZSBzdGF0ZSAmIHB1c2ggaXQgb25jZSB0aGUgc3RvcmUgaXMgc3RhYmxlXHJcbiAgICAgKiBAcGFyYW0gcFN0YXRlXHJcbiAgICAgKiBAcGFyYW0gY2JcclxuICAgICAqL1xyXG4gICAgc2V0U3RhdGUoIHBTdGF0ZSwgY2IsIHN5bmMgKSB7XHJcbiAgICAgICAgdmFyIGkgICAgICAgPSAwLCBjaGFuZ2UsXHJcbiAgICAgICAgICAgIGNoYW5nZXMgPSB0aGlzLl9jaGFuZ2VzU1cgPSB0aGlzLl9jaGFuZ2VzU1cgfHwge307XHJcbiAgICAgICAgZm9yICggdmFyIGsgaW4gcFN0YXRlIClcclxuICAgICAgICAgICAgaWYgKCAhdGhpcy5zdGF0ZSB8fCBwU3RhdGUuaGFzT3duUHJvcGVydHkoaylcclxuICAgICAgICAgICAgICAgICYmIChcclxuICAgICAgICAgICAgICAgICAgICBwU3RhdGVba10gIT0gdGhpcy5zdGF0ZVtrXVxyXG4gICAgICAgICAgICAgICAgICAgIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgKHRoaXMuc3RhdGVba10gJiYgcFN0YXRlW2tdICYmIChwU3RhdGVba10uX3JldiAhPSB0aGlzLl9yZXZzW2tdKSkvLyByZXYvaGFzaCB1cGRhdGVcclxuICAgICAgICAgICAgICAgICkgKSB7XHJcbiAgICAgICAgICAgICAgICBjaGFuZ2UgICAgICAgID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3JldnNba10gPSBwU3RhdGVba10gJiYgcFN0YXRlW2tdLl9yZXYgfHwgdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGNoYW5nZXNba10gICAgPSBwU3RhdGVba107XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCBzeW5jICkge1xyXG4gICAgICAgICAgICB0aGlzLnB1c2goKTtcclxuICAgICAgICAgICAgY2IgJiYgY2IoKTtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKCBjaGFuZ2UgKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YWJpbGl6ZShjYik7XHJcbiAgICAgICAgICAgIH0gZWxzZSBjYiAmJiBjYigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFVwZGF0ZSB0aGUgY3VycmVudCBwcml2YXRlIHN0YXRlICYgcHVzaCBpdCBvbmNlIHRoZSBzdG9yZSBpcyBzdGFibGVcclxuICAgICAqIEBwYXJhbSBwU3RhdGVcclxuICAgICAqIEBwYXJhbSBjYlxyXG4gICAgICovXHJcbiAgICBzZXRTdGF0ZVN5bmMoIHBTdGF0ZSApIHtcclxuICAgICAgICB2YXIgaSAgICAgICA9IDAsIGNoYW5nZSxcclxuICAgICAgICAgICAgY2hhbmdlcyA9IHRoaXMuX2NoYW5nZXNTVyA9IHRoaXMuX2NoYW5nZXNTVyB8fCB7fTtcclxuICAgICAgICBmb3IgKCB2YXIgayBpbiBwU3RhdGUgKVxyXG4gICAgICAgICAgICBpZiAoICF0aGlzLnN0YXRlIHx8IHBTdGF0ZS5oYXNPd25Qcm9wZXJ0eShrKVxyXG4gICAgICAgICAgICAgICAgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIHBTdGF0ZVtrXSAhPSB0aGlzLnN0YXRlW2tdXHJcbiAgICAgICAgICAgICAgICAgICAgfHxcclxuICAgICAgICAgICAgICAgICAgICAodGhpcy5zdGF0ZVtrXSAmJiBwU3RhdGVba10gJiYgKHBTdGF0ZVtrXS5fcmV2ICE9IHRoaXMuX3JldnNba10pKS8vIHJldi9oYXNoIHVwZGF0ZVxyXG4gICAgICAgICAgICAgICAgKSApIHtcclxuICAgICAgICAgICAgICAgIGNoYW5nZSAgICAgICAgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcmV2c1trXSA9IHBTdGF0ZVtrXSAmJiBwU3RhdGVba10uX3JldiB8fCB0cnVlO1xyXG4gICAgICAgICAgICAgICAgY2hhbmdlc1trXSAgICA9IHBTdGF0ZVtrXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucHVzaCgpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVwbGFjZSB0aGUgY3VycmVudCBwcml2YXRlIHN0YXRlICYgcHVzaCBpdCBvbmNlIHRoZSBzdG9yZSBpcyBzdGFibGVcclxuICAgICAqIEBwYXJhbSBwU3RhdGVcclxuICAgICAqIEBwYXJhbSBjYlxyXG4gICAgICovXHJcbiAgICByZXBsYWNlU3RhdGUoIHBTdGF0ZSwgY2IgKSB7XHJcbiAgICAgICAgdmFyIGkgICAgICA9IDAsIG1lID0gdGhpcztcclxuICAgICAgICB0aGlzLnN0YXRlID0gcFN0YXRlO1xyXG5cclxuICAgICAgICB0aGlzLnN0YWJpbGl6ZShjYik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBnZXQgYSBzdG9yZS1rZXkgcGFpciBmb3IgU3RvcmU6Om1hcFxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcclxuICAgICAqIEByZXR1cm5zIHt7c3RvcmU6IFN0b3JlLCBuYW1lOiAqfX1cclxuICAgICAqL1xyXG4gICAgYXMoIG5hbWUgKSB7XHJcbiAgICAgICAgcmV0dXJuIHtzdG9yZSA6IHRoaXMsIG5hbWV9O1xyXG4gICAgfVxyXG5cclxuICAgIG9uKCBsaXN0cyApIHtcclxuICAgICAgICBpZiAoICFpc1N0cmluZyhsaXN0cykgJiYgbGlzdHMgKVxyXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhsaXN0cykuZm9yRWFjaChrID0+IHN1cGVyLm9uKGssIGxpc3RzW2tdKSk7XHJcbiAgICAgICAgZWxzZSBzdXBlci5vbiguLi5hcmd1bWVudHMpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUxpc3RlbmVyKCBsaXN0cyApIHtcclxuICAgICAgICBpZiAoICFpc1N0cmluZyhsaXN0cykgJiYgbGlzdHMgKVxyXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhsaXN0cykuZm9yRWFjaChrID0+IHN1cGVyLnJlbW92ZUxpc3RlbmVyKGssIGxpc3RzW2tdKSk7XHJcbiAgICAgICAgZWxzZSBzdXBlci5yZW1vdmVMaXN0ZW5lciguLi5hcmd1bWVudHMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogcmVsaW5rIGJpbmRpbmdzICYgcmVxdWlyZXNcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXHJcbiAgICAgKiBAcmV0dXJucyB7e3N0b3JlOiBTdG9yZSwgbmFtZTogKn19XHJcbiAgICAgKi9cclxuICAgIHJlbGluayggZnJvbSApIHtcclxuICAgICAgICBsZXQgY29udGV4dCA9IHRoaXMuY29udGV4dE9iaixcclxuICAgICAgICAgICAgX3N0YXRpYyA9IHRoaXMuY29uc3RydWN0b3I7XHJcbiAgICAgICAgaWYgKCBfc3RhdGljLnVzZSApIHtcclxuICAgICAgICAgICAgLy90b2RvIHVubGlua1xyXG4gICAgICAgICAgICB0aGlzLnB1bGwoX3N0YXRpYy51c2UsIGZhbHNlLCBmcm9tKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICggdGhpcy5fcmVxdWlyZSApIHtcclxuICAgICAgICAgICAgdGhpcy5fcmVxdWlyZS5mb3JFYWNoKFxyXG4gICAgICAgICAgICAgICAgc3RvcmUgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2FpdChjb250ZXh0Ll9fY29udGV4dFtzdG9yZV0pXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogaXMgY29tcGxldGUgKGFsbCByZXF1aWVyZWQga2V5cyBhcmUgaGVyZSlcclxuICAgICAqIEByZXR1cm5zIGJvb2xcclxuICAgICAqL1xyXG4gICAgaXNDb21wbGV0ZSggc3RhdGUgPSB0aGlzLnN0YXRlICkge1xyXG4gICAgICAgIHZhciBfc3RhdGljID0gdGhpcy5jb25zdHJ1Y3RvcjtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAhdGhpcy5fcmVxdWlyZVxyXG4gICAgICAgICAgICB8fCAhdGhpcy5fcmVxdWlyZS5sZW5ndGhcclxuICAgICAgICAgICAgfHwgc3RhdGUgJiYgdGhpcy5fcmVxdWlyZS5yZWR1Y2UoXHJcbiAgICAgICAgICAgICAgICAoIHIsIGtleSApID0+IChyICYmIHN0YXRlW2tleV0pLFxyXG4gICAgICAgICAgICAgICAgdHJ1ZVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGlzIHN0YWJsZVxyXG4gICAgICogQHJldHVybnMgYm9vbFxyXG4gICAgICovXHJcbiAgICBpc1N0YWJsZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc3RhYmxlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVW4gYmluZCB0aGlzIHN0b3JlIG9mZiB0aGUgZ2l2ZW4gY29tcG9uZW50LWtleVxyXG4gICAgICogQHBhcmFtIG9ialxyXG4gICAgICogQHBhcmFtIGtleVxyXG4gICAgICogQHJldHVybnMge0FycmF5LjwqPn1cclxuICAgICAqL1xyXG4gICAgdW5CaW5kKCBvYmosIGtleSApIHtcclxuICAgICAgICB2YXIgZm9sbG93ZXJzID0gdGhpcy5fZm9sbG93ZXJzLFxyXG4gICAgICAgICAgICBpICAgICAgICAgPSBmb2xsb3dlcnMgJiYgZm9sbG93ZXJzLmxlbmd0aDtcclxuICAgICAgICB3aGlsZSAoZm9sbG93ZXJzICYmIGktLSlcclxuICAgICAgICAgICAgaWYgKCBmb2xsb3dlcnNbaV1bMF0gPT0gb2JqICYmIGZvbGxvd2Vyc1tpXVsxXSA9PSBrZXkgKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZvbGxvd2Vycy5zcGxpY2UoaSwgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBCaW5kIHRoaXMgc3RvcmUgY2hhbmdlcyB0byB0aGUgZ2l2ZW4gY29tcG9uZW50LWtleVxyXG4gICAgICogQHBhcmFtIG9iaiB7UmVhY3QuQ29tcG9uZW50fFN0b3JlfGZ1bmN0aW9uKVxyXG4gICAgICogQHBhcmFtIGtleSB7c3RyaW5nfSBvcHRpb25hbCBrZXkgd2hlcmUgdG8gbWFwIHRoZSBwdWJsaWMgc3RhdGVcclxuICAgICAqL1xyXG4gICAgYmluZCggb2JqLCBrZXksIHNldEluaXRpYWwgPSB0cnVlICkge1xyXG4gICAgICAgIHRoaXMuX2ZvbGxvd2Vycy5wdXNoKFtvYmosIGtleV0pO1xyXG4gICAgICAgIGlmICggc2V0SW5pdGlhbCAmJiB0aGlzLmRhdGFzICYmIHRoaXMuX3N0YWJsZSApIHtcclxuICAgICAgICAgICAgaWYgKCB0eXBlb2Ygb2JqICE9IFwiZnVuY3Rpb25cIiApIHtcclxuICAgICAgICAgICAgICAgIGlmICgga2V5ICkgb2JqLnNldFN0YXRlKHtba2V5XSA6IHRoaXMuZGF0YXN9KTtcclxuICAgICAgICAgICAgICAgIGVsc2Ugb2JqLnNldFN0YXRlKHRoaXMuZGF0YXMpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgb2JqKHRoaXMuZGF0YXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogb25jZSgnc3RhYmxlJywgY2IpXHJcbiAgICAgKiBAcGFyYW0gb2JqIHtSZWFjdC5Db21wb25lbnR8U3RvcmV8ZnVuY3Rpb24pXHJcbiAgICAgKiBAcGFyYW0ga2V5IHtzdHJpbmd9IG9wdGlvbmFsIGtleSB3aGVyZSB0byBtYXAgdGhlIHB1YmxpYyBzdGF0ZVxyXG4gICAgICovXHJcbiAgICB0aGVuKCBjYiApIHtcclxuICAgICAgICBpZiAoIHRoaXMuX3N0YWJsZSApXHJcbiAgICAgICAgICAgIHJldHVybiBjYihudWxsLCB0aGlzLmRhdGFzKTtcclxuICAgICAgICB0aGlzLm9uY2UoJ3N0YWJsZScsIGUgPT4gY2IobnVsbCwgdGhpcy5kYXRhcykpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWRkIGEgbG9jayBzbyB0aGUgc3RvcmUgd2lsbCBub3QgcHJvcGFnIGl0IHN0YXRlIHVudGlsbCByZWxlYXNlKCkgaXMgY2FsbFxyXG4gICAgICogQHBhcmFtIHByZXZpb3VzIHtTdG9yZXxudW1iZXJ8QXJyYXl9IEBvcHRpb25hbCB3ZiB0byB3YWl0LCByZWxlYXNlcyB0byB3YWl0IG9yIGFycmF5IG9mIHN0dWZmIHRvIHdhaXRcclxuICAgICAqIEByZXR1cm5zIHtUYXNrRmxvd31cclxuICAgICAqL1xyXG4gICAgd2FpdCggcHJldmlvdXMgKSB7XHJcbiAgICAgICAgaWYgKCB0eXBlb2YgcHJldmlvdXMgPT0gXCJudW1iZXJcIiApXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxvY2tzICs9IHByZXZpb3VzO1xyXG4gICAgICAgIGlmICggaXNBcnJheShwcmV2aW91cykgKVxyXG4gICAgICAgICAgICByZXR1cm4gcHJldmlvdXMubWFwKHRoaXMud2FpdC5iaW5kKHRoaXMpKTtcclxuXHJcbiAgICAgICAgdGhpcy5fc3RhYmxlICYmIHRoaXMuZW1pdCgndW5zdGFibGUnLCB0aGlzLnN0YXRlLCB0aGlzLmRhdGFzKTtcclxuICAgICAgICB0aGlzLl9zdGFibGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmxvY2tzKys7XHJcbiAgICAgICAgaWYgKCBwcmV2aW91cyAmJiBpc0Z1bmN0aW9uKHByZXZpb3VzLnRoZW4pICkge1xyXG4gICAgICAgICAgICBwcmV2aW91cy50aGVuKHRoaXMucmVsZWFzZS5iaW5kKHRoaXMsIG51bGwpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWNyZWFzZSBsb2NrcyBmb3IgdGhpcyBzdG9yZSwgaWYgaXQgcmVhY2ggMCAmIGl0IGhhdmUgYSBwdWJsaWMgc3RhdGUsXHJcbiAgICAgKiBpdCB3aWxsIGJlIHByb3BhZ2F0ZWQgdG8gdGhlIGZvbGxvd2VycyxcclxuICAgICAqIHRoZW4sIGFsbCBzdHVmZiBwYXNzZWQgdG8gXCJ0aGVuXCIgY2FsbCBiYWNrIHdpbGwgYmUgZXhlYyAvIHJlbGVhc2VkXHJcbiAgICAgKiBAcGFyYW0gZGVzeW5jXHJcbiAgICAgKiBAcmV0dXJucyB7Kn1cclxuICAgICAqL1xyXG4gICAgcmVsZWFzZSggY2IgKSB7XHJcbiAgICAgICAgdmFyIF9zdGF0aWMgPSB0aGlzLmNvbnN0cnVjdG9yO1xyXG4gICAgICAgIGxldCBpICAgICAgID0gMDtcclxuXHJcbiAgICAgLy8gICBpZiAodGhpcy5sb2NrcyA9PSAwKVxyXG4gICAgICAgLy8gICAgIHRocm93IG5ldyBFcnJvcihcIlJlbGVhc2UgbW9yZSB0aGFuIGxvY2tpbmcgIVwiKTtcclxuXHJcblxyXG5cclxuICAgICAgICBpZiAoICEtLXRoaXMubG9ja3MgJiYgdGhpcy5kYXRhcyAmJiB0aGlzLmlzQ29tcGxldGUoKSApIHtcclxuICAgICAgICAgICAgdGhpcy5fc3RhYmxlID0gdHJ1ZTtcclxuXHJcblxyXG4gICAgICAgICAgICB0aGlzLl9yZXYgPSAxICsgKHRoaXMuX3JldiArIDEpICUgMTAwMDAwMDsvL1xyXG4gICAgICAgICAgICBpZiAoIHRoaXMuX2ZvbGxvd2Vycy5sZW5ndGggKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5fZm9sbG93ZXJzLmZvckVhY2goKCBmb2xsb3dlciApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoICF0aGlzLmRhdGFzICkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICggdHlwZW9mIGZvbGxvd2VyWzBdID09IFwiZnVuY3Rpb25cIiApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9sbG93ZXJbMF0odGhpcy5kYXRhcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2IgJiYgaSsrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb2xsb3dlclswXS5zZXRTdGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChmb2xsb3dlclsxXSkgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1tmb2xsb3dlclsxXV0gOiB0aGlzLmRhdGFzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNiICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAoKSA9PiAoISgtLWkpICYmIGNiKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmVtaXQoJ3N0YWJsZScsIHRoaXMuZGF0YXMpO1xyXG4gICAgICAgICAgICB0aGlzLmVtaXQoJ3VwZGF0ZScsIHRoaXMuZGF0YXMpO1xyXG4gICAgICAgICAgICBjYiAmJiBjYigpXHJcbiAgICAgICAgfSBlbHNlIGNiICYmIHRoaXMudGhlbihjYik7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0YWluKCByZWFzb24gKSB7XHJcbiAgICAvLyAgICBjb25zb2xlLmxvZyhcInJldGFpblwiLCB0aGlzLl91aWQsIHJlYXNvbik7XHJcbiAgICAgICAgdGhpcy5fX3JldGFpbkxvY2tzLmFsbCsrO1xyXG4gICAgICAgIGlmICggcmVhc29uICkge1xyXG4gICAgICAgICAgICB0aGlzLl9fcmV0YWluTG9ja3NbcmVhc29uXSA9IHRoaXMuX19yZXRhaW5Mb2Nrc1tyZWFzb25dIHx8IDA7XHJcbiAgICAgICAgICAgIHRoaXMuX19yZXRhaW5Mb2Nrc1tyZWFzb25dKys7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRpc3Bvc2UoIHJlYXNvbiApIHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKFwiZGlzcG9zZVwiLCB0aGlzLl91aWQsIHJlYXNvbik7XHJcbiAgICAgICAvLyBpZiAodGhpcy5fX3JldGFpbkxvY2tzLmFsbCA9PSAwKVxyXG4gICAgICAgICAvLyAgIHRocm93IG5ldyBFcnJvcihcIkRpc3Bvc2UgbW9yZSB0aGFuIHJldGFpbmluZyAhIDogXCIrcmVhc29uKTtcclxuICAgICAgICB0aGlzLl9fcmV0YWluTG9ja3MuYWxsLS07XHJcbiAgICAgICAgaWYgKCByZWFzb24gKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX19yZXRhaW5Mb2Nrc1tyZWFzb25dID0gdGhpcy5fX3JldGFpbkxvY2tzW3JlYXNvbl0gfHwgMDtcclxuICAgICAgICAgICAgdGhpcy5fX3JldGFpbkxvY2tzW3JlYXNvbl0tLTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCAhdGhpcy5fX3JldGFpbkxvY2tzLmFsbCApIHtcclxuICAgICAgICAgICAgaWYgKCB0aGlzLl9wZXJzaXN0ZW5jZVRtICkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZGVzdHJveVRNICYmIGNsZWFyVGltZW91dCh0aGlzLl9kZXN0cm95VE0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZGVzdHJveVRNID0gc2V0VGltZW91dChcclxuICAgICAgICAgICAgICAgICAgICBlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50aGVuKHMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8vICBjb25zb2xlLmxvZyhcInd0ZiAgIFwiLCByZWFzb24sICF0aGlzLl9fcmV0YWluTG9ja3MuYWxsKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhdGhpcy5fX3JldGFpbkxvY2tzLmFsbCAmJiB0aGlzLmRlc3Ryb3koKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3BlcnNpc3RlbmNlVG1cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRoZW4ocyA9PiAoIXRoaXMuX19yZXRhaW5Mb2Nrcy5hbGwgJiYgdGhpcy5kZXN0cm95KCkpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkZXN0cm95KCkge1xyXG4gICAgICAvLyAgY29uc29sZS5sb2coXCJkZXN0cm95XCIsIHRoaXMuX3VpZCk7XHJcblxyXG4gICAgICAgIHRoaXMuZW1pdCgnZGVzdHJveScsIHRoaXMpO1xyXG4gICAgICAgIGlmICggdGhpcy5fc3RhYmlsaXplciApXHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9zdGFiaWxpemVyKTtcclxuICAgICAgICB0aGlzLl9mb2xsb3dlcnMubGVuZ3RoID0gMDtcclxuICAgICAgICB0aGlzLmRlYWQgICAgICAgICAgICAgID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLl9yZXZzICAgICAgICAgICAgID0gdGhpcy5kYXRhcyA9IHRoaXMuc3RhdGUgPSB0aGlzLmNvbnRleHQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMucmVtb3ZlQWxsTGlzdGVuZXJzKCk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvU3RvcmUuanMiXSwic291cmNlUm9vdCI6IiJ9