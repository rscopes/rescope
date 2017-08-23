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
	
	            if (this.__w8Locks.all == 0) throw new Error("Release more than locking ! : " + reason);
	
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
	            if (this.__retainLocks.all == 0) throw new Error("Dispose more than retaining ! : " + reason);
	
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
	
	            if (this.locks == 0) throw new Error("Release more than locking !");
	
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
	            if (this.__retainLocks.all == 0) throw new Error("Dispose more than retaining ! : " + reason);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZWRlY2JlYzQxN2Y2NTRmNmVlOTUiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Jlc2NvcGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9pc3N0cmluZy9pc1N0cmluZy51bWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9pc2FycmF5L2luZGV4LmpzIiwid2VicGFjazovLy8uL34vZXZlbnRzL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2lzZnVuY3Rpb24vbGliL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vfi9zaG9ydGlkL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vc2hvcnRpZC9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9zaG9ydGlkL2xpYi9hbHBoYWJldC5qcyIsIndlYnBhY2s6Ly8vLi9+L3Nob3J0aWQvbGliL3JhbmRvbS9yYW5kb20tZnJvbS1zZWVkLmpzIiwid2VicGFjazovLy8uL34vc2hvcnRpZC9saWIvZW5jb2RlLmpzIiwid2VicGFjazovLy8uL34vc2hvcnRpZC9saWIvcmFuZG9tL3JhbmRvbS1ieXRlLWJyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9zaG9ydGlkL2xpYi9kZWNvZGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9zaG9ydGlkL2xpYi9idWlsZC5qcyIsIndlYnBhY2s6Ly8vLi9+L3Nob3J0aWQvbGliL2lzLXZhbGlkLmpzIiwid2VicGFjazovLy8uL34vc2hvcnRpZC9saWIvdXRpbC9jbHVzdGVyLXdvcmtlci1pZC1icm93c2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9TdG9yZS5qcyJdLCJuYW1lcyI6WyJTdG9yZSIsIkNvbnRleHQiLCJpc1N0cmluZyIsInJlcXVpcmUiLCJpc0FycmF5IiwiRXZlbnRFbWl0dGVyIiwiaXNGdW5jdGlvbiIsInNob3J0aWQiLCJfX3Byb3RvX19wdXNoIiwidGFyZ2V0IiwiaWQiLCJwYXJlbnQiLCJoZXJlIiwicHJvdG90eXBlIiwib3BlbkNvbnRleHRzIiwia2V5IiwiY3R4Iiwic3RhdGUiLCJkYXRhcyIsIm5hbWUiLCJkZWZhdWx0TWF4TGlzdGVuZXJzIiwicGVyc2lzdGVuY2VUbSIsImF1dG9EZXN0cm95IiwiX21heExpc3RlbmVycyIsImNvbnN0cnVjdG9yIiwiX2lkIiwiZ2VuZXJhdGUiLCJfaXNMb2NhbElkIiwiX3BlcnNpc3RlbmNlVG0iLCJzdG9yZXMiLCJfYWRkQ2hpbGQiLCJzb3VyY2VzIiwiX2NoaWxkQ29udGV4dHMiLCJfX3JldGFpbkxvY2tzIiwiYWxsIiwiX193OExvY2tzIiwiX19saXN0ZW5pbmciLCJfX2NvbnRleHQiLCJfX21peGVkIiwiX19taXhlZExpc3QiLCJfZm9sbG93ZXJzIiwicmV0YWluIiwiX3N0YWJsZSIsIndhaXQiLCJvbiIsIl9fcGFyZW50TGlzdCIsInJlbGVhc2UiLCJfcHJvcGFnIiwicmVnaXN0ZXIiLCJzZXRUaW1lb3V0IiwiZGlzcG9zZSIsImZvckVhY2giLCJfbW91bnQiLCJrIiwiYXJndW1lbnRzIiwicmVkdWNlIiwibW91bnRlZCIsIm1vdW50U3RvcmUiLCJfd2F0Y2hTdG9yZSIsImlzU3RhYmxlIiwicHJvcGFnIiwidGFyZ2V0Q3R4IiwibGlzdHMiLCJwdXNoIiwicmVsaW5rIiwicmF3Q3R4IiwiT2JqZWN0Iiwia2V5cyIsInNpbmdsZXRvbiIsInNyY0N0eCIsImV4dGVybmFsIiwibGN0eCIsIl9zdG9yZXMiLCJjb25zb2xlIiwid2FybiIsImRlZmluZVByb3BlcnR5IiwiZ2V0IiwiX3N0YXRlIiwic2V0IiwidiIsIl9kYXRhcyIsInVuZGVmaW5lZCIsIm9iaiIsImFzIiwic2V0SW5pdGlhbCIsImxhc3RSZXZzIiwicmV2cyIsIm1vdW50IiwiZ2V0VXBkYXRlcyIsInNldFN0YXRlIiwiZm9sbG93ZXJzIiwiaSIsImxlbmd0aCIsInNwbGljZSIsInRvIiwiYmluZCIsIm91dHB1dCIsInVwZGF0ZWQiLCJoYXNPd25Qcm9wZXJ0eSIsIl9yZXYiLCJmbGFnc19zdGF0ZXMiLCJmbGFnc19kYXRhcyIsIl9mbGFnc19zdGF0ZXMiLCJfZmxhZ3NfZGF0YXMiLCJmbGFncyIsInIiLCJmbGFnIiwidGVzdCIsImNiIiwib25jZSIsInF1aWV0IiwicmVhc29uIiwiZW1pdCIsIkVycm9yIiwiX3N0YWJpbGl6ZXJUTSIsImNsZWFyVGltZW91dCIsIl9wcm9wYWdUTSIsImNoaWxkcyIsIl9nZXRBbGxDaGlsZHMiLCJpbmRleE9mIiwiX2Rlc3Ryb3lUTSIsInRoZW4iLCJkZXN0cm95IiwicmVtb3ZlTGlzdGVuZXIiLCJjb250ZXh0T2JqIiwic2hpZnQiLCJfcm1DaGlsZCIsImNvbnRleHRzIiwib2JqUHJvdG8iLCJnZXRQcm90b3R5cGVPZiIsInN0b3JlIiwiY29tcG9uZW50IiwiY29udGV4dCIsIm9yaWdpbiIsInRhcmdldFJldnMiLCJfcmV2cyIsImluaXRpYWxPdXRwdXRzIiwic3RhdGljQ29udGV4dCIsImZpbHRlciIsImVycm9yIiwiYWxpYXMiLCJkZWZhdWx0TmFtZSIsIm1hdGNoIiwibWl4ZWRDV1VubW91bnQiLCJ1bk1vdW50S2V5IiwiaXNSZWFjdENvbXBvbmVudCIsIm1hcCIsInNwbGl0IiwidW5CaW5kIiwiYXBwbHkiLCJza2V5Iiwic29ydCIsImEiLCJiIiwiZmlyc3RuYW1lIiwiam9pbiIsImNvbnRleHRNYXAiLCJnZXRDb250ZXh0IiwiYXJneiIsIl9zdGF0aWMiLCJjZmciLCJ3YXRjaHMiLCJ1c2UiLCJyZWZpbmUiLCJpbml0aWFsU3RhdGUiLCJfdWlkIiwibG9ja3MiLCJfb25TdGFiaWxpemUiLCJfdXNlIiwiX3JlcXVpcmUiLCJwdWxsIiwiaXNDb21wbGV0ZSIsIm5EYXRhcyIsImNEYXRhcyIsImZvbGxvdyIsImNoYW5nZXMiLCJfX3Byb3RvX18iLCJtZSIsIl9zdGFiaWxpemVyIiwiZXZlbnQiLCJkb1dhaXQiLCJzIiwiZm9yY2UiLCJuZXh0U3RhdGUiLCJfY2hhbmdlc1NXIiwibmV4dERhdGFzIiwic2hvdWxkUHJvcGFnIiwicFN0YXRlIiwic3luYyIsImNoYW5nZSIsInN0YWJpbGl6ZSIsImZyb20iLCJwcmV2aW91cyIsImZvbGxvd2VyIiwiZGVhZCIsInJlbW92ZUFsbExpc3RlbmVycyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDNUJBOzs7O0FBQ0E7Ozs7OztBQVhBOzs7Ozs7Ozs7O0FBYUEsbUJBQVFBLEtBQVI7O21CQUVlLEVBQUNBLHNCQUFELEVBQVFDLDBCQUFSLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUJBOzs7Ozs7O0FBUUEsS0FBSUMsV0FBVyxtQkFBQUMsQ0FBUSxDQUFSLENBQWY7QUFBQSxLQUNJQyxVQUFVLG1CQUFBRCxDQUFRLENBQVIsQ0FEZDtBQUFBLEtBRUlFLGVBQWUsbUJBQUFGLENBQVEsQ0FBUixDQUZuQjtBQUFBLEtBR0lHLGFBQWEsbUJBQUFILENBQVEsQ0FBUixDQUhqQjtBQUFBLEtBSU1JLFVBQVUsbUJBQUFKLENBQVEsQ0FBUixDQUpoQjtBQUFBLEtBS01LLGdCQUFnQixTQUFoQkEsYUFBZ0IsQ0FBQ0MsTUFBRCxFQUFTQyxFQUFULEVBQWFDLE1BQWIsRUFBd0I7QUFDdEMsU0FBSUMsMkJBQ0NGLEVBREQsRUFDTSxZQUFZLENBQ2pCLENBRkQsQ0FBSjtBQUlBRSxVQUFLRixFQUFMLEVBQVNHLFNBQVQsR0FBcUJGLFNBQVMsSUFBSUEsT0FBTyxNQUFNRCxFQUFiLENBQUosRUFBVCxHQUFrQ0QsT0FBT0MsRUFBUCxLQUFjLEVBQXJFO0FBQ0FELFlBQU9DLEVBQVAsSUFBYSxJQUFJRSxLQUFLRixFQUFMLENBQUosRUFBYjtBQUNBRCxZQUFPLE1BQU1DLEVBQWIsSUFBbUJF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Q0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBRztBQUNILHFCQUFvQixTQUFTO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7O0FDN1NBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFOzs7Ozs7QUNUQTtBQUNBOzs7Ozs7O0FDREE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNoRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNqR0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUN4QkE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDbEJBOztBQUVBLCtFQUE4RTs7QUFFOUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQ2JBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDaEJBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7O0FDL0NBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1CQUFrQixTQUFTO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQ2xCQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQTs7Ozs7Ozs7OztBQVVBOzs7Ozs7QUFNQSxLQUFJQyxXQUFlLG1CQUFBQyxDQUFRLENBQVIsQ0FBbkI7QUFBQSxLQUNNQyxVQUFhLG1CQUFBRCxDQUFRLENBQVIsQ0FEbkI7QUFBQSxLQUVNRyxhQUFhLG1CQUFBSCxDQUFRLENBQVIsQ0FGbkI7QUFBQSxLQUlJRixVQUFlLG1CQUFBRSxDQUFRLENBQVIsQ0FKbkI7QUFBQSxLQUtJRSxlQUFlLG1CQUFBRixDQUFRLENBQVIsQ0FMbkI7QUFBQSxLQU1JSSxVQUFlLG1CQUFBSixDQUFRLENBQVIsQ0FObkI7QUFBQSxLQU9JNkgsV0FBZTlELE9BQU8rRCxjQUFQLENBQXNCLEVBQXRCLENBUG5CO0FBQUEsS0FRSW5ILGVBQWUsRUFSbkI7O0tBV3FCZCxLOzs7Ozs7O0FBcUJqQjs7Ozs7QUFmOEM7QUFDOUM7Ozs7QUFMdUM7NEJBd0I1Qm1CLEksRUFBTztBQUNkLG9CQUFPLEVBQUMrRyxPQUFRLElBQVQsRUFBZS9HLFVBQWYsRUFBUDtBQUNIOztBQUVEOzs7Ozs7OztBQWxCQTs7Ozs7OztBQVRjOzs7OzZCQWtDRmdILFMsRUFBV2hFLEksRUFBTWlFLE8sRUFBU0MsTSxFQUE2QjtBQUFBOztBQUFBLGlCQUFyQmpELFVBQXFCLHVFQUFSLEtBQVE7O0FBQy9ELGlCQUFJa0QsYUFBaUJILFVBQVVJLEtBQVYsSUFBbUIsRUFBeEM7QUFDQTtBQUNBLGlCQUFJQyxpQkFBaUIsRUFBckI7QUFDQXJFLG9CQUFxQi9ELFFBQVErRCxJQUFSLGlDQUFvQkEsSUFBcEIsS0FBNEIsQ0FBQ0EsSUFBRCxDQUFqRDs7QUFHQWlFLHVCQUFVQSxXQUFXcEksTUFBTXlJLGFBQTNCOztBQUVBO0FBQ0E7O0FBRUF0RSxvQkFBaUJBLEtBQUt1RSxNQUFMO0FBQ2I7QUFDQTtBQUNBLHVCQUFFM0gsR0FBRixFQUFXO0FBQ1AscUJBQUssQ0FBQ0EsR0FBTixFQUFZO0FBQ1IwRCw2QkFBUWtFLEtBQVIsQ0FBYyxnQ0FBZ0M1SCxHQUFoQyxHQUFzQyxPQUF0QyxHQUFnRHNILE1BQWhELEdBQXlELEtBQXZFO0FBQ0EsNEJBQU8sS0FBUDtBQUNIO0FBQ0QscUJBQUlsSCxhQUFKO0FBQUEscUJBQ0l5SCxjQURKO0FBQUEscUJBRUlWLGNBRko7QUFHQSxxQkFBS25ILElBQUltSCxLQUFKLElBQWFuSCxJQUFJSSxJQUF0QixFQUE2QjtBQUN6QnlILDZCQUFRekgsT0FBT0osSUFBSUksSUFBbkI7QUFDQStHLDZCQUFRbkgsSUFBSW1ILEtBQVo7QUFDSCxrQkFIRCxNQUdPLElBQUs1SCxXQUFXUyxHQUFYLENBQUwsRUFBdUI7QUFDMUJJLDRCQUFPeUgsUUFBUTdILElBQUlJLElBQUosSUFBWUosSUFBSThILFdBQS9CO0FBQ0FYLDZCQUFRbkgsR0FBUjtBQUNILGtCQUhNLE1BR0E7QUFDSEEsMkJBQVFBLElBQUkrSCxLQUFKLENBQVUsb0NBQVYsQ0FBUjtBQUNBM0gsNEJBQVFKLElBQUksQ0FBSixDQUFSO0FBQ0FtSCw2QkFBUUUsUUFBUS9GLFNBQVIsQ0FBa0J0QixJQUFJLENBQUosQ0FBbEIsQ0FBUjtBQUNBNkgsNkJBQVE3SCxJQUFJLENBQUosS0FBVSxHQUFWLEdBQWdCLElBQWhCLEdBQXVCQSxJQUFJLENBQUosS0FBVUEsSUFBSSxDQUFKLENBQXpDLENBSkcsQ0FJNkM7QUFDbkQ7O0FBRUQscUJBQUt1SCxXQUFXbkgsSUFBWCxDQUFMLEVBQXdCLE9BQU8sS0FBUCxDQXJCakIsQ0FxQjhCO0FBQ3JDLHFCQUFLLENBQUMrRyxLQUFOLEVBQWM7QUFDVnpELDZCQUFRa0UsS0FBUixDQUFjLGdDQUFnQ3hILElBQWhDLEdBQXVDLEdBQXZDLEdBQTZDeUgsS0FBN0MsR0FBcUQsT0FBckQsR0FBK0RQLE1BQS9ELEdBQXdFLEtBQXRGLEVBQTZGSCxLQUE3RjtBQUNBLDRCQUFPLEtBQVA7QUFDSCxrQkFIRCxNQUdPLElBQUs1SCxXQUFXNEgsS0FBWCxDQUFMLEVBQXlCO0FBQzVCLDRCQUFLekUsVUFBTCxDQUFnQnRDLElBQWhCLEVBQXNCaUgsT0FBdEI7O0FBRUFBLDZCQUFRL0YsU0FBUixDQUFrQmxCLElBQWxCLEVBQXdCNEUsSUFBeEIsQ0FBNkJvQyxTQUE3QixFQUF3Q1MsS0FBeEMsRUFBK0N4RCxVQUEvQztBQUNBO0FBQ0E7QUFDQTtBQUNILGtCQVBNLE1BT0E7QUFDSDhDLDJCQUFNbkMsSUFBTixDQUFXb0MsU0FBWCxFQUFzQlMsS0FBdEIsRUFBNkJ4RCxVQUE3QjtBQUNIO0FBQ0RrRCw0QkFBV00sS0FBWCxJQUFvQk4sV0FBV00sS0FBWCxLQUFxQixJQUF6QztBQUNBO0FBQ0EscUJBQUtSLFFBQVEvRixTQUFSLENBQWtCbEIsSUFBbEIsRUFBd0IrRSxjQUF4QixDQUF1QyxPQUF2QyxDQUFMLEVBQ0lzQyxlQUFlSSxLQUFmLElBQXdCUixRQUFRbEgsS0FBUixDQUFjQyxJQUFkLENBQXhCO0FBQ0osd0JBQU8sSUFBUDtBQUNILGNBM0NZLENBQWpCO0FBNkNBLGlCQUFJNEgsY0FBSjtBQUFBLGlCQUNJQyxhQUFhYixVQUFVYyxnQkFBVixHQUE2QixzQkFBN0IsR0FBc0QsU0FEdkU7O0FBR0EsaUJBQUtkLFVBQVVqQyxjQUFWLENBQXlCOEMsVUFBekIsQ0FBTCxFQUE0QztBQUN4Q0Qsa0NBQWlCWixVQUFVYSxVQUFWLENBQWpCO0FBQ0g7O0FBRURiLHVCQUFVYSxVQUFWLElBQXdCLFlBQVk7QUFBQztBQUNqQyx3QkFBTyxLQUFLQSxVQUFMLENBQVA7QUFDQSxxQkFBS0QsY0FBTCxFQUNJLEtBQUtDLFVBQUwsSUFBbUJELGNBQW5CO0FBQ0o1RSxzQkFBSytFLEdBQUwsQ0FDSSxVQUFFbkksR0FBRixFQUFXO0FBQ1AseUJBQUlJLGFBQUo7QUFBQSx5QkFDSXlILGNBREo7QUFBQSx5QkFFSVYsY0FGSjtBQUdBLHlCQUFLbkgsSUFBSW1ILEtBQUosSUFBYW5ILElBQUlJLElBQXRCLEVBQTZCO0FBQ3pCeUgsaUNBQVF6SCxPQUFPSixJQUFJSSxJQUFuQjtBQUNBK0csaUNBQVFuSCxJQUFJbUgsS0FBWjtBQUNILHNCQUhELE1BR08sSUFBSzVILFdBQVdTLEdBQVgsQ0FBTCxFQUF1QjtBQUMxQkksZ0NBQU95SCxRQUFRN0gsSUFBSUksSUFBSixJQUFZSixJQUFJOEgsV0FBL0I7QUFDQVgsaUNBQVFFLFFBQVEvRixTQUFSLENBQWtCbEIsSUFBbEIsQ0FBUjtBQUNILHNCQUhNLE1BR0E7QUFDSEosK0JBQVFBLElBQUlvSSxLQUFKLENBQVUsR0FBVixDQUFSO0FBQ0FoSSxnQ0FBUUosSUFBSSxDQUFKLENBQVI7QUFDQW1ILGlDQUFRRSxRQUFRL0YsU0FBUixDQUFrQnRCLElBQUksQ0FBSixDQUFsQixDQUFSO0FBQ0E2SCxpQ0FBUTdILElBQUksQ0FBSixLQUFVQSxJQUFJLENBQUosQ0FBbEI7QUFDSDs7QUFFRG1ILDhCQUFTLENBQUM1SCxXQUFXNEgsS0FBWCxDQUFWLElBQStCQSxNQUFNa0IsTUFBTixDQUFhakIsU0FBYixFQUF3QlMsS0FBeEIsQ0FBL0I7QUFDSCxrQkFuQkw7QUFxQkEsd0JBQU8sS0FBS0ksVUFBTCxLQUFvQixLQUFLQSxVQUFMLEVBQWlCSyxLQUFqQixDQUF1QixJQUF2QixFQUE2Qi9GLFNBQTdCLENBQTNCO0FBQ0gsY0ExQkQ7O0FBNEJBLG9CQUFPa0YsY0FBUDtBQUNIOzs7b0NBRWtCVCxRLEVBQVc7QUFDMUIsaUJBQUl1QixPQUFPbEosUUFBUTJILFFBQVIsSUFBb0JBLFNBQVN3QixJQUFULENBQWMsVUFBRUMsQ0FBRixFQUFLQyxDQUFMLEVBQVk7QUFDckQscUJBQUtELEVBQUVFLFNBQUYsR0FBY0QsRUFBRUMsU0FBckIsRUFBaUMsT0FBTyxDQUFDLENBQVI7QUFDakMscUJBQUtGLEVBQUVFLFNBQUYsR0FBY0QsRUFBRUMsU0FBckIsRUFBaUMsT0FBTyxDQUFQO0FBQ2pDLHdCQUFPLENBQVA7QUFDSCxjQUo4QixFQUk1QkMsSUFKNEIsQ0FJdkIsSUFKdUIsQ0FBcEIsR0FJSzVCLFFBSmhCO0FBS0Esb0JBQU85SCxRQUFROEgsUUFBUixDQUFpQnVCLElBQWpCLElBQXlCckosUUFBUThILFFBQVIsQ0FBaUJ1QixJQUFqQixLQUEwQixJQUFJckosT0FBSixDQUFZLEVBQVosRUFBZ0IsRUFBQ1MsSUFBSzRJLElBQU4sRUFBaEIsQ0FBMUQ7QUFDSDs7O29DQUVrQm5JLEksRUFBTWlILE8sRUFBU0YsSyxFQUFPakgsSyxFQUFPQyxLLEVBQVE7QUFDcEQsaUJBQUlGLFlBQUo7QUFBQSxpQkFBUzRJLGFBQWF4QixRQUFRL0YsU0FBOUI7QUFDQXVILHdCQUFXekksSUFBWCxJQUFzQitHLFFBQVFBLFNBQVMwQixXQUFXekksSUFBWCxDQUF2QztBQUNBLGlCQUFLLENBQUMrRyxLQUFOLEVBQWM7QUFDVnpELHlCQUFRa0UsS0FBUixDQUFjLGdDQUFnQ3hILElBQWhDLEdBQXVDLEtBQXJELEVBQTREK0csS0FBNUQ7QUFDQSx3QkFBTyxLQUFQO0FBQ0gsY0FIRCxNQUdPLElBQUs1SCxXQUFXNEgsS0FBWCxDQUFMLEVBQXlCO0FBQzVCO0FBQ0EscUJBQUtBLFVBQVVBLE1BQU1ILFFBQU4sSUFBa0JHLE1BQU1FLE9BQWxDLENBQUwsRUFBa0Q7QUFDOUNwSCwyQkFBTSxLQUFLNkksVUFBTCxDQUFnQjNCLE1BQU1ILFFBQU4sSUFBa0IsQ0FBQ0csTUFBTUUsT0FBUCxDQUFsQyxDQUFOOztBQUVBcEgseUJBQUlnQyxRQUFKLHFCQUFlN0IsSUFBZixFQUF1QkgsSUFBSXFCLFNBQUosQ0FBY2xCLElBQWQsS0FBdUIrRyxLQUE5Qzs7QUFFQTBCLGdDQUFXekksSUFBWCxJQUFtQkgsSUFBSUcsSUFBSixJQUFZLElBQUkrRyxLQUFKLENBQVVFLE9BQVYsRUFBbUIsRUFBQ25ILFlBQUQsRUFBUUMsWUFBUixFQUFuQixDQUEvQjtBQUNBRix5QkFBSTBDLFdBQUosQ0FBZ0J2QyxJQUFoQjtBQUNBLDRCQUFPSCxJQUFJRyxJQUFKLENBQVA7QUFDSCxrQkFSRCxNQVNJK0csUUFBUTBCLFdBQVd6SSxJQUFYLElBQW1CLElBQUkrRyxLQUFKLENBQVVFLE9BQVYsRUFBbUIsRUFBQ25ILFlBQUQsRUFBUUMsWUFBUixFQUFuQixDQUEzQjtBQUNKMEksNEJBQVd6SSxJQUFYLEVBQWlCNkMsTUFBakIsQ0FBd0I3QyxJQUF4QjtBQUNILGNBYk0sTUFhQTtBQUNILHFCQUFLRixVQUFVZ0UsU0FBVixJQUF1Qi9ELFVBQVUrRCxTQUF0QyxFQUNJaUQsTUFBTXpDLFFBQU4sQ0FBZXhFLEtBQWYsRUFESixLQUVLLElBQUtBLFVBQVVnRSxTQUFmLEVBQ0RpRCxNQUFNakgsS0FBTixHQUFjQSxLQUFkOztBQUVKLHFCQUFLQyxVQUFVK0QsU0FBZixFQUNJaUQsTUFBTW5FLElBQU4sQ0FBVzdDLEtBQVg7QUFDUDtBQUNELG9CQUFPZ0gsS0FBUDtBQUNIOztBQUVEOzs7Ozs7Ozs7Ozs7QUFTQSxzQkFBYztBQUFBOztBQUFBOztBQUFBOztBQUVWLGFBQUk0Qiw0Q0FBbUJ4RyxTQUFuQixFQUFKO0FBQUEsYUFDSXlHLFVBQWUsTUFBS3ZJLFdBRHhCO0FBQUEsYUFFSTRHLFVBQWUsQ0FBQ2hJLFFBQVEwSixLQUFLLENBQUwsQ0FBUixDQUFELElBQXFCLENBQUM1SixTQUFTNEosS0FBSyxDQUFMLENBQVQsQ0FBdEIsR0FBMENBLEtBQUtqQyxLQUFMLEVBQTFDLEdBQXlEa0MsUUFBUXRCLGFBRnBGO0FBQUEsYUFHSXVCLE1BQWVGLEtBQUssQ0FBTCxLQUFXLENBQUMxSixRQUFRMEosS0FBSyxDQUFMLENBQVIsQ0FBWixJQUFnQyxDQUFDNUosU0FBUzRKLEtBQUssQ0FBTCxDQUFULENBQWpDLEdBQXFEQSxLQUFLakMsS0FBTCxFQUFyRCxHQUFvRSxFQUh2RjtBQUFBLGFBSUkxRyxPQUFlakIsU0FBUzRKLEtBQUssQ0FBTCxDQUFULElBQW9CQSxLQUFLLENBQUwsQ0FBcEIsR0FBOEJFLElBQUk3SSxJQUFKLElBQVk0SSxRQUFRNUksSUFKckU7QUFBQSxhQUtJOEksU0FBZTdKLFFBQVEwSixLQUFLLENBQUwsQ0FBUixJQUFtQkEsS0FBS2pDLEtBQUwsRUFBbkIsR0FBa0NtQyxJQUFJRSxHQUFKLElBQVcsRUFMaEU7QUFBQSxhQUttRTtBQUMvREMsa0JBQWU3SixXQUFXd0osS0FBSyxDQUFMLENBQVgsSUFBc0JBLEtBQUtqQyxLQUFMLEVBQXRCLEdBQXFDbUMsSUFBSUcsTUFBSixJQUFjLElBTnRFO0FBQUEsYUFPSUMsZUFBZUwsUUFBUUssWUFQM0I7O0FBU0EsZUFBS0MsSUFBTCxHQUFxQkwsSUFBSUssSUFBSixJQUFZOUosUUFBUW1CLFFBQVIsRUFBakM7QUFDQSxlQUFLSCxhQUFMLEdBQXFCeUksSUFBSTVJLG1CQUFKLElBQTJCcEIsTUFBTW9CLG1CQUF0RDtBQUNBLGVBQUtrSixLQUFMLEdBQXFCLENBQXJCO0FBQ0EsZUFBS0MsWUFBTCxHQUFxQixFQUFyQjs7QUFFQSxlQUFLM0ksY0FBTCxHQUFzQm9JLElBQUkzSSxhQUFKLElBQXFCLE1BQUtHLFdBQUwsQ0FBaUJILGFBQTVEO0FBQ0EsYUFBS25CLFNBQVM0SixLQUFLLENBQUwsQ0FBVCxDQUFMLEVBQXlCO0FBQ3JCLGlCQUFLMUIsUUFBUS9GLFNBQVIsQ0FBa0JsQixJQUFsQixDQUFMLEVBQ0lzRCxRQUFRQyxJQUFSLENBQWEsK0RBQWIsRUFBOEV2RCxJQUE5RTtBQUNKaUgscUJBQVEvRixTQUFSLENBQWtCbEIsSUFBbEI7QUFDSDs7QUFFRCxhQUFLNkksT0FBT0EsSUFBSXBILEVBQWhCLEVBQXFCO0FBQ2pCLG1CQUFLQSxFQUFMLENBQVFvSCxJQUFJcEgsRUFBWjtBQUNIO0FBQ0Q7O0FBRUEsZUFBSzRILElBQUwsR0FBWVAsTUFBWjtBQUNBLGVBQUs5SSxJQUFMLEdBQVlBLElBQVo7O0FBRUEsYUFBS2lILFFBQVF2RyxNQUFiLEVBQXNCO0FBQ2xCLG1CQUFLK0YsVUFBTCxHQUFrQlEsT0FBbEI7QUFDQSxtQkFBS0EsT0FBTCxHQUFrQkEsUUFBUXZHLE1BQTFCO0FBQ0gsVUFIRCxNQUdPO0FBQ0gsbUJBQUsrRixVQUFMLEdBQWtCLElBQUkzSCxPQUFKLENBQVltSSxPQUFaLENBQWxCO0FBQ0EsbUJBQUtBLE9BQUwsR0FBa0JBLFFBQVF2RyxNQUExQjtBQUNIOztBQUdELGVBQUthLE9BQUwsR0FBcUIsSUFBckI7QUFDQSxlQUFLeUQsSUFBTCxHQUFxQixDQUFyQjtBQUNBLGVBQUtvQyxLQUFMLEdBQXFCLEVBQXJCO0FBQ0EsZUFBSzFHLE1BQUwsR0FBcUIsRUFBckI7QUFDQSxlQUFLSSxhQUFMLEdBQXFCLEVBQUNDLEtBQU0sQ0FBUCxFQUFyQjtBQUNBLGVBQUt1SSxRQUFMLEdBQXFCLEVBQXJCOztBQUVBLGFBQUtWLFFBQVE1SixPQUFiLEVBQ0ksd0JBQUtzSyxRQUFMLEVBQWMxRyxJQUFkLDBDQUFzQmdHLFFBQVE1SixPQUE5QjtBQUNKLGFBQUs2SixJQUFJN0osT0FBVCxFQUNJLHlCQUFLc0ssUUFBTCxFQUFjMUcsSUFBZCwyQ0FBc0JpRyxJQUFJN0osT0FBMUI7O0FBRUosZUFBS3FDLFVBQUwsR0FBa0IsRUFBbEI7O0FBRUEsYUFBS3dILElBQUk5RCxjQUFKLENBQW1CLE9BQW5CLEtBQStCOEQsSUFBSTlJLEtBQUosS0FBYytELFNBQWxELEVBQ0ksTUFBSy9ELEtBQUwsR0FBYThJLElBQUk5SSxLQUFqQjtBQUNKLGFBQUs4SSxJQUFJOUQsY0FBSixDQUFtQixPQUFuQixLQUErQjhELElBQUkvSSxLQUFKLEtBQWNnRSxTQUFsRCxFQUNJbUYsZUFBZUosSUFBSS9JLEtBQW5COztBQUVKLGFBQUtrSixNQUFMLEVBQ0ksTUFBS0EsTUFBTCxHQUFjQSxNQUFkOztBQUVKLGFBQUssQ0FBQyxDQUFDLE1BQUtLLElBQVAsSUFBZSxNQUFLQSxJQUFMLENBQVU1RSxNQUE5QixFQUF1QztBQUFDO0FBQ3BDLG1CQUFLOEUsSUFBTCxDQUFVLE1BQUtGLElBQWY7QUFDSDs7QUFFRCxhQUFLSixZQUFMLEVBQW9CO0FBQUM7QUFDakIsbUJBQUtuSixLQUFMLGdCQUFpQm1KLFlBQWpCO0FBQ0EsaUJBQUssTUFBS08sVUFBTCxNQUFxQixNQUFLekosS0FBTCxLQUFlK0QsU0FBekMsRUFDSSxNQUFLL0QsS0FBTCxHQUFhLE1BQUtpSixNQUFMLENBQVksTUFBS2pKLEtBQWpCLEVBQXdCLE1BQUtELEtBQTdCLEVBQW9DLE1BQUtBLEtBQXpDLENBQWI7QUFDUDtBQUNELGVBQUt5QixPQUFMLEdBQWUsTUFBS3hCLEtBQUwsS0FBZStELFNBQTlCLENBdkVVLENBdUU4QjtBQUN4QyxVQUFDLE1BQUt2QyxPQUFOLElBQWlCLE1BQUtzRSxJQUFMLENBQVUsVUFBVixFQUFzQixNQUFLL0YsS0FBM0IsQ0FBakI7QUF4RVU7QUF5RWI7O0FBRUQ7Ozs7Ozs7OztzQ0FLYzJKLE0sRUFBUztBQUNuQixpQkFBSWIsVUFBVSxLQUFLdkksV0FBbkI7QUFBQSxpQkFBZ0NpRixDQUFoQztBQUFBLGlCQUNJb0UsU0FBVSxLQUFLM0osS0FEbkI7O0FBR0E7QUFDQTtBQUNBLGlCQUFLLENBQUMySixNQUFELEtBQVksQ0FBQ2QsUUFBUWUsTUFBVCxJQUFtQixDQUFDZixRQUFRZSxNQUFSLENBQWVsRixNQUFuQyxJQUNUbUUsUUFBUWUsTUFBUixJQUFrQmYsUUFBUWUsTUFBUixDQUFldkgsTUFBZixDQUFzQixVQUFFa0QsQ0FBRixFQUFLZCxDQUFMO0FBQUEsd0JBQWFjLEtBQUttRSxVQUFVQSxPQUFPakYsQ0FBUCxDQUE1QjtBQUFBLGNBQXRCLEVBQThELEtBQTlELENBRHJCLENBQUwsRUFFSSxPQUFPLElBQVA7O0FBRUosaUJBQUt2RixRQUFRMkosUUFBUWUsTUFBaEIsQ0FBTCxFQUNJZixRQUFRZSxNQUFSLENBQWUzSCxPQUFmLENBQ0ksVUFBRXBDLEdBQUYsRUFBVztBQUNQMEYscUJBQUlBLE1BQU1tRSxTQUFTQyxPQUFPOUosR0FBUCxNQUFnQjZKLE9BQU83SixHQUFQLENBQXpCLEdBQXVDOEosVUFBVUEsT0FBTzlKLEdBQVAsQ0FBdkQsQ0FBSjtBQUNILGNBSEwsRUFESixLQU1LLElBQUtnSixRQUFRZSxNQUFSLEtBQW1CLFFBQXhCLEVBQ0RyRSxJQUFJbUUsV0FBV0MsTUFBZixDQURDLEtBRUE7QUFDREEsMkJBQVUzRyxPQUFPQyxJQUFQLENBQVkwRyxNQUFaLEVBQW9CMUgsT0FBcEIsQ0FDTixVQUFFcEMsR0FBRixFQUFXO0FBQ1AwRix5QkFBSUEsTUFBTW1FLFNBQVNDLE9BQU85SixHQUFQLE1BQWdCNkosT0FBTzdKLEdBQVAsQ0FBekIsR0FBdUM4SixVQUFVQSxPQUFPOUosR0FBUCxDQUF2RCxDQUFKO0FBQ0gsa0JBSEssQ0FBVjtBQUtBNkosMkJBQVUxRyxPQUFPQyxJQUFQLENBQVl5RyxNQUFaLEVBQW9CekgsT0FBcEIsQ0FDTixVQUFFcEMsR0FBRixFQUFXO0FBQ1AwRix5QkFBSUEsTUFBTW1FLFNBQVNDLE9BQU85SixHQUFQLE1BQWdCNkosT0FBTzdKLEdBQVAsQ0FBekIsR0FBdUM4SixVQUFVQSxPQUFPOUosR0FBUCxDQUF2RCxDQUFKO0FBQ0gsa0JBSEssQ0FBVjtBQUtIOztBQUVELG9CQUFPLENBQUMsQ0FBQzBGLENBQVQ7QUFDSDs7QUFFRDs7Ozs7Ozs7Ozs7Z0NBUVF2RixLLEVBQU9ELEssRUFBTzhKLE8sRUFBVTtBQUM1QjlKLHFCQUFRQSxTQUFTLEtBQUtBLEtBQXRCOztBQUVBLGlCQUFLLENBQUNDLEtBQUQsSUFBVUEsTUFBTThKLFNBQU4sS0FBb0JoRCxRQUE5QixJQUEwQy9HLE1BQU0rSixTQUFOLEtBQW9CaEQsUUFBbkUsRUFDSSxPQUFPL0csS0FBUCxDQURKLEtBR0ksb0JBQVdDLEtBQVgsRUFBcUJELEtBQXJCO0FBQ1A7O0FBRUQ7Ozs7Ozs7bUNBSVcyRixFLEVBQUs7QUFBQTs7QUFDWixpQkFBSXFFLEtBQUssSUFBVDtBQUNBckUsbUJBQU1xRSxHQUFHcEUsSUFBSCxDQUFRLFFBQVIsRUFBa0JELEVBQWxCLENBQU47QUFDQSxrQkFBS2xFLE9BQUwsSUFBZ0IsS0FBS3NFLElBQUwsQ0FBVSxVQUFWLEVBQXNCLEtBQUsvRixLQUEzQixFQUFrQyxLQUFLQyxLQUF2QyxDQUFoQjs7QUFFQStKLGdCQUFHdkksT0FBSCxHQUFhLEtBQWI7O0FBRUEsaUJBQUssS0FBS3dJLFdBQVYsRUFDSS9ELGFBQWEsS0FBSytELFdBQWxCOztBQUVKLGtCQUFLQSxXQUFMLEdBQW1CakksV0FDZixLQUFLYyxJQUFMLENBQVVnQyxJQUFWLENBQ0ksSUFESixFQUVJLElBRkosRUFHSSxZQUFNO0FBQUM7QUFDSDtBQUNBLHdCQUFLbUYsV0FBTCxHQUFtQixJQUFuQjtBQUNBO0FBQ0gsY0FQTCxDQURlLENBQW5CO0FBVUg7OztrQ0FFU0MsSyxFQUFRO0FBQ2Q7QUFDSDs7QUFFRDs7Ozs7Ozs4QkFJTXRKLE0sRUFBUXVKLE0sRUFBUS9DLE0sRUFBUztBQUFBOztBQUMzQixpQkFBSUcsaUJBQWlCeEksTUFBTWtKLEdBQU4sQ0FBVSxJQUFWLEVBQWdCckgsTUFBaEIsRUFBd0IsS0FBSytGLFVBQTdCLEVBQXlDUyxNQUF6QyxFQUFpRCxJQUFqRCxDQUFyQjtBQUNBLGlCQUFLK0MsTUFBTCxFQUFjO0FBQ1Ysc0JBQUt6SSxJQUFMO0FBQ0FkLHdCQUFPc0IsT0FBUCxDQUFlLFVBQUVrSSxDQUFGO0FBQUEsNEJBQVMsT0FBS2pELE9BQUwsQ0FBYWlELENBQWIsS0FBbUIsT0FBSzFJLElBQUwsQ0FBVSxPQUFLeUYsT0FBTCxDQUFhaUQsQ0FBYixDQUFWLENBQTVCO0FBQUEsa0JBQWY7QUFDQSxzQkFBS3ZJLE9BQUw7QUFDSDtBQUNELG9CQUFPMEYsY0FBUDtBQUNIOztBQUVEOzs7Ozs7OzhCQUlNdEgsSyxFQUFPb0ssSyxFQUFPMUUsRSxFQUFLO0FBQ3JCQSxrQkFBZ0IwRSxVQUFVLElBQVYsR0FBaUIxRSxFQUFqQixHQUFzQjBFLEtBQXRDO0FBQ0FBLHFCQUFnQkEsVUFBVSxJQUExQjtBQUNBLGlCQUFJM0YsSUFBWSxDQUFoQjtBQUFBLGlCQUNJc0YsS0FBWSxJQURoQjtBQUFBLGlCQUVJTSxZQUFZLENBQUNySyxLQUFELGlCQUFjLEtBQUtELEtBQW5CLEVBQTZCLEtBQUt1SyxVQUFsQyxLQUFpRCxLQUFLdkssS0FGdEU7QUFBQSxpQkFHSXdLLFlBQVl2SyxVQUNQLEtBQUt5SixVQUFMLENBQWdCWSxTQUFoQixJQUE2QixLQUFLcEIsTUFBTCxDQUFZLEtBQUtqSixLQUFqQixFQUF3QnFLLFNBQXhCLEVBQW1DLEtBQUtDLFVBQXhDLENBQTdCLEdBQW1GLEtBQUt0SyxLQURqRixDQUhoQjs7QUFPQSxrQkFBS0QsS0FBTCxHQUFhc0ssU0FBYjtBQUNBLGlCQUFLLENBQUNELEtBQUQsS0FFSSxDQUFDLEtBQUtwSyxLQUFOLElBQWUsS0FBS0EsS0FBTCxLQUFldUssU0FBL0IsSUFBNkMsQ0FBQyxLQUFLQyxZQUFMLENBQWtCRCxTQUFsQixDQUZqRCxDQUFMLEVBSUU7QUFDRTdFLHVCQUFNQSxJQUFOO0FBQ0Esd0JBQU8sS0FBUDtBQUNIOztBQUVELGtCQUFLMUYsS0FBTCxHQUFhdUssU0FBYjtBQUNBLGtCQUFLbkIsS0FBTDtBQUNBLGtCQUFLeEgsT0FBTCxDQUFhOEQsRUFBYjtBQUVIOztBQUVEOzs7Ozs7OztrQ0FLVStFLE0sRUFBUS9FLEUsRUFBSWdGLEksRUFBTztBQUN6QixpQkFBSWpHLElBQVUsQ0FBZDtBQUFBLGlCQUFpQmtHLE1BQWpCO0FBQUEsaUJBQ0lkLFVBQVUsS0FBS1MsVUFBTCxHQUFrQixLQUFLQSxVQUFMLElBQW1CLEVBRG5EO0FBRUEsa0JBQU0sSUFBSW5JLENBQVYsSUFBZXNJLE1BQWY7QUFDSSxxQkFBSyxDQUFDLEtBQUsxSyxLQUFOLElBQWUwSyxPQUFPekYsY0FBUCxDQUFzQjdDLENBQXRCLE1BRVpzSSxPQUFPdEksQ0FBUCxLQUFhLEtBQUtwQyxLQUFMLENBQVdvQyxDQUFYLENBQWIsSUFFQyxLQUFLcEMsS0FBTCxDQUFXb0MsQ0FBWCxLQUFpQnNJLE9BQU90SSxDQUFQLENBQWpCLElBQStCc0ksT0FBT3RJLENBQVAsRUFBVThDLElBQVYsSUFBa0IsS0FBS29DLEtBQUwsQ0FBV2xGLENBQVgsQ0FKdEMsQ0FJcUQ7QUFKckQsa0JBQXBCLEVBS1E7QUFDSndJLDhCQUFnQixJQUFoQjtBQUNBLDBCQUFLdEQsS0FBTCxDQUFXbEYsQ0FBWCxJQUFnQnNJLE9BQU90SSxDQUFQLEtBQWFzSSxPQUFPdEksQ0FBUCxFQUFVOEMsSUFBdkIsSUFBK0IsSUFBL0M7QUFDQTRFLDZCQUFRMUgsQ0FBUixJQUFnQnNJLE9BQU90SSxDQUFQLENBQWhCO0FBQ0g7QUFWTCxjQVlBLElBQUt1SSxJQUFMLEVBQVk7QUFDUixzQkFBSzdILElBQUw7QUFDQTZDLHVCQUFNQSxJQUFOO0FBRUgsY0FKRCxNQUlPO0FBQ0gscUJBQUtpRixNQUFMLEVBQWM7QUFDViwwQkFBS0MsU0FBTCxDQUFlbEYsRUFBZjtBQUNILGtCQUZELE1BRU9BLE1BQU1BLElBQU47QUFDVjtBQUNELG9CQUFPLElBQVA7QUFDSDs7QUFFRDs7Ozs7Ozs7c0NBS2MrRSxNLEVBQVM7QUFDbkIsaUJBQUloRyxJQUFVLENBQWQ7QUFBQSxpQkFBaUJrRyxNQUFqQjtBQUFBLGlCQUNJZCxVQUFVLEtBQUtTLFVBQUwsR0FBa0IsS0FBS0EsVUFBTCxJQUFtQixFQURuRDtBQUVBLGtCQUFNLElBQUluSSxDQUFWLElBQWVzSSxNQUFmO0FBQ0kscUJBQUssQ0FBQyxLQUFLMUssS0FBTixJQUFlMEssT0FBT3pGLGNBQVAsQ0FBc0I3QyxDQUF0QixNQUVac0ksT0FBT3RJLENBQVAsS0FBYSxLQUFLcEMsS0FBTCxDQUFXb0MsQ0FBWCxDQUFiLElBRUMsS0FBS3BDLEtBQUwsQ0FBV29DLENBQVgsS0FBaUJzSSxPQUFPdEksQ0FBUCxDQUFqQixJQUErQnNJLE9BQU90SSxDQUFQLEVBQVU4QyxJQUFWLElBQWtCLEtBQUtvQyxLQUFMLENBQVdsRixDQUFYLENBSnRDLENBSXFEO0FBSnJELGtCQUFwQixFQUtRO0FBQ0p3SSw4QkFBZ0IsSUFBaEI7QUFDQSwwQkFBS3RELEtBQUwsQ0FBV2xGLENBQVgsSUFBZ0JzSSxPQUFPdEksQ0FBUCxLQUFhc0ksT0FBT3RJLENBQVAsRUFBVThDLElBQXZCLElBQStCLElBQS9DO0FBQ0E0RSw2QkFBUTFILENBQVIsSUFBZ0JzSSxPQUFPdEksQ0FBUCxDQUFoQjtBQUNIO0FBVkwsY0FXQSxLQUFLVSxJQUFMO0FBQ0Esb0JBQU8sS0FBSzdDLEtBQVo7QUFDSDs7QUFFRDs7Ozs7Ozs7c0NBS2N5SyxNLEVBQVEvRSxFLEVBQUs7QUFDdkIsaUJBQUlqQixJQUFTLENBQWI7QUFBQSxpQkFBZ0JzRixLQUFLLElBQXJCO0FBQ0Esa0JBQUtoSyxLQUFMLEdBQWEwSyxNQUFiOztBQUVBLGtCQUFLRyxTQUFMLENBQWVsRixFQUFmO0FBQ0g7O0FBRUQ7Ozs7Ozs7OzRCQUtJekYsSSxFQUFPO0FBQ1Asb0JBQU8sRUFBQytHLE9BQVEsSUFBVCxFQUFlL0csVUFBZixFQUFQO0FBQ0g7Ozs0QkFFRzJDLEssRUFBUTtBQUFBOztBQUNSLGlCQUFLLENBQUM1RCxTQUFTNEQsS0FBVCxDQUFELElBQW9CQSxLQUF6QixFQUNJSSxPQUFPQyxJQUFQLENBQVlMLEtBQVosRUFBbUJYLE9BQW5CLENBQTJCO0FBQUEsNkhBQWNFLENBQWQsRUFBaUJTLE1BQU1ULENBQU4sQ0FBakI7QUFBQSxjQUEzQixFQURKLEtBRUssa0dBQVlDLFNBQVo7QUFDUjs7O3dDQUVlUSxLLEVBQVE7QUFBQTs7QUFDcEIsaUJBQUssQ0FBQzVELFNBQVM0RCxLQUFULENBQUQsSUFBb0JBLEtBQXpCLEVBQ0lJLE9BQU9DLElBQVAsQ0FBWUwsS0FBWixFQUFtQlgsT0FBbkIsQ0FBMkI7QUFBQSx5SUFBMEJFLENBQTFCLEVBQTZCUyxNQUFNVCxDQUFOLENBQTdCO0FBQUEsY0FBM0IsRUFESixLQUVLLDhHQUF3QkMsU0FBeEI7QUFDUjs7QUFFRDs7Ozs7Ozs7Z0NBS1F5SSxJLEVBQU87QUFBQTs7QUFDWCxpQkFBSTNELFVBQVUsS0FBS1IsVUFBbkI7QUFBQSxpQkFDSW1DLFVBQVUsS0FBS3ZJLFdBRG5CO0FBRUEsaUJBQUt1SSxRQUFRRyxHQUFiLEVBQW1CO0FBQ2Y7QUFDQSxzQkFBS1EsSUFBTCxDQUFVWCxRQUFRRyxHQUFsQixFQUF1QixLQUF2QixFQUE4QjZCLElBQTlCO0FBQ0g7O0FBRUQsaUJBQUssS0FBS3RCLFFBQVYsRUFBcUI7QUFDakIsc0JBQUtBLFFBQUwsQ0FBY3RILE9BQWQsQ0FDSTtBQUFBLDRCQUNJLE9BQUtSLElBQUwsQ0FBVXlGLFFBQVEvRixTQUFSLENBQWtCNkYsS0FBbEIsQ0FBVixDQURKO0FBQUEsa0JBREo7QUFLSDtBQUNKOztBQUVEOzs7Ozs7O3NDQUlpQztBQUFBLGlCQUFyQmpILEtBQXFCLHVFQUFiLEtBQUtBLEtBQVE7O0FBQzdCLGlCQUFJOEksVUFBVSxLQUFLdkksV0FBbkI7QUFDQSxvQkFDSSxDQUFDLEtBQUtpSixRQUFOLElBQ0csQ0FBQyxLQUFLQSxRQUFMLENBQWM3RSxNQURsQixJQUVHM0UsU0FBUyxLQUFLd0osUUFBTCxDQUFjbEgsTUFBZCxDQUNSLFVBQUVrRCxDQUFGLEVBQUsxRixHQUFMO0FBQUEsd0JBQWUwRixLQUFLeEYsTUFBTUYsR0FBTixDQUFwQjtBQUFBLGNBRFEsRUFFUixJQUZRLENBSGhCO0FBUUg7O0FBRUQ7Ozs7Ozs7b0NBSVc7QUFDUCxvQkFBTyxLQUFLMkIsT0FBWjtBQUNIOztBQUVEOzs7Ozs7Ozs7Z0NBTVF3QyxHLEVBQUtuRSxHLEVBQU07QUFDZixpQkFBSTJFLFlBQVksS0FBS2xELFVBQXJCO0FBQUEsaUJBQ0ltRCxJQUFZRCxhQUFhQSxVQUFVRSxNQUR2QztBQUVBLG9CQUFPRixhQUFhQyxHQUFwQjtBQUNJLHFCQUFLRCxVQUFVQyxDQUFWLEVBQWEsQ0FBYixLQUFtQlQsR0FBbkIsSUFBMEJRLFVBQVVDLENBQVYsRUFBYSxDQUFiLEtBQW1CNUUsR0FBbEQsRUFDSSxPQUFPMkUsVUFBVUcsTUFBVixDQUFpQkYsQ0FBakIsRUFBb0IsQ0FBcEIsQ0FBUDtBQUZSO0FBR0g7O0FBRUQ7Ozs7Ozs7OzhCQUtNVCxHLEVBQUtuRSxHLEVBQXlCO0FBQUEsaUJBQXBCcUUsVUFBb0IsdUVBQVAsSUFBTzs7QUFDaEMsa0JBQUs1QyxVQUFMLENBQWdCdUIsSUFBaEIsQ0FBcUIsQ0FBQ21CLEdBQUQsRUFBTW5FLEdBQU4sQ0FBckI7QUFDQSxpQkFBS3FFLGNBQWMsS0FBS2xFLEtBQW5CLElBQTRCLEtBQUt3QixPQUF0QyxFQUFnRDtBQUM1QyxxQkFBSyxPQUFPd0MsR0FBUCxJQUFjLFVBQW5CLEVBQWdDO0FBQzVCLHlCQUFLbkUsR0FBTCxFQUFXbUUsSUFBSU8sUUFBSixxQkFBZTFFLEdBQWYsRUFBc0IsS0FBS0csS0FBM0IsR0FBWCxLQUNLZ0UsSUFBSU8sUUFBSixDQUFhLEtBQUt2RSxLQUFsQjtBQUNSLGtCQUhELE1BR087QUFDSGdFLHlCQUFJLEtBQUtoRSxLQUFUO0FBQ0g7QUFDSjtBQUNKOztBQUVEOzs7Ozs7Ozs4QkFLTTBGLEUsRUFBSztBQUFBOztBQUNQLGlCQUFLLEtBQUtsRSxPQUFWLEVBQ0ksT0FBT2tFLEdBQUcsSUFBSCxFQUFTLEtBQUsxRixLQUFkLENBQVA7QUFDSixrQkFBSzJGLElBQUwsQ0FBVSxRQUFWLEVBQW9CO0FBQUEsd0JBQUtELEdBQUcsSUFBSCxFQUFTLE9BQUsxRixLQUFkLENBQUw7QUFBQSxjQUFwQjtBQUNIOztBQUVEOzs7Ozs7Ozs4QkFLTThLLFEsRUFBVztBQUNiLGlCQUFLLE9BQU9BLFFBQVAsSUFBbUIsUUFBeEIsRUFDSSxPQUFPLEtBQUsxQixLQUFMLElBQWMwQixRQUFyQjtBQUNKLGlCQUFLNUwsUUFBUTRMLFFBQVIsQ0FBTCxFQUNJLE9BQU9BLFNBQVM5QyxHQUFULENBQWEsS0FBS3ZHLElBQUwsQ0FBVW9ELElBQVYsQ0FBZSxJQUFmLENBQWIsQ0FBUDs7QUFFSixrQkFBS3JELE9BQUwsSUFBZ0IsS0FBS3NFLElBQUwsQ0FBVSxVQUFWLEVBQXNCLEtBQUsvRixLQUEzQixFQUFrQyxLQUFLQyxLQUF2QyxDQUFoQjtBQUNBLGtCQUFLd0IsT0FBTCxHQUFlLEtBQWY7QUFDQSxrQkFBSzRILEtBQUw7QUFDQSxpQkFBSzBCLFlBQVkxTCxXQUFXMEwsU0FBU3ZFLElBQXBCLENBQWpCLEVBQTZDO0FBQ3pDdUUsMEJBQVN2RSxJQUFULENBQWMsS0FBSzNFLE9BQUwsQ0FBYWlELElBQWIsQ0FBa0IsSUFBbEIsRUFBd0IsSUFBeEIsQ0FBZDtBQUNIO0FBQ0Qsb0JBQU8sSUFBUDtBQUNIOztBQUVEOzs7Ozs7Ozs7O2lDQU9TYSxFLEVBQUs7QUFBQTs7QUFDVixpQkFBSW1ELFVBQVUsS0FBS3ZJLFdBQW5CO0FBQ0EsaUJBQUltRSxJQUFVLENBQWQ7O0FBRUEsaUJBQUksS0FBSzJFLEtBQUwsSUFBYyxDQUFsQixFQUNJLE1BQU0sSUFBSXJELEtBQUosQ0FBVSw2QkFBVixDQUFOOztBQUlKLGlCQUFLLENBQUMsR0FBRSxLQUFLcUQsS0FBUixJQUFpQixLQUFLcEosS0FBdEIsSUFBK0IsS0FBS3lKLFVBQUwsRUFBcEMsRUFBd0Q7QUFDcEQsc0JBQUtqSSxPQUFMLEdBQWUsSUFBZjs7QUFHQSxzQkFBS3lELElBQUwsR0FBWSxJQUFJLENBQUMsS0FBS0EsSUFBTCxHQUFZLENBQWIsSUFBa0IsT0FBbEMsQ0FKb0QsQ0FJVjtBQUMxQyxxQkFBSyxLQUFLM0QsVUFBTCxDQUFnQm9ELE1BQXJCLEVBQ0ksS0FBS3BELFVBQUwsQ0FBZ0JXLE9BQWhCLENBQXdCLFVBQUU4SSxRQUFGLEVBQWdCO0FBQ3BDLHlCQUFLLENBQUMsT0FBSy9LLEtBQVgsRUFBbUI7QUFDbkIseUJBQUssT0FBTytLLFNBQVMsQ0FBVCxDQUFQLElBQXNCLFVBQTNCLEVBQXdDO0FBQ3BDQSxrQ0FBUyxDQUFULEVBQVksT0FBSy9LLEtBQWpCO0FBQ0gsc0JBRkQsTUFFTztBQUNIO0FBQ0ErSyxrQ0FBUyxDQUFULEVBQVl4RyxRQUFaLENBQ0t3RyxTQUFTLENBQVQsQ0FBRCx1QkFDRUEsU0FBUyxDQUFULENBREYsRUFDaUIsT0FBSy9LLEtBRHRCLElBR0EsT0FBS0E7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQVJKO0FBVUg7QUFDSixrQkFqQkQ7O0FBbUJKLHNCQUFLOEYsSUFBTCxDQUFVLFFBQVYsRUFBb0IsS0FBSzlGLEtBQXpCO0FBQ0Esc0JBQUs4RixJQUFMLENBQVUsUUFBVixFQUFvQixLQUFLOUYsS0FBekI7QUFDQTBGLHVCQUFNQSxJQUFOO0FBQ0gsY0E1QkQsTUE0Qk9BLE1BQU0sS0FBS2EsSUFBTCxDQUFVYixFQUFWLENBQU47QUFDUCxvQkFBTyxJQUFQO0FBQ0g7OztnQ0FFT0csTSxFQUFTO0FBQ2pCO0FBQ0ksa0JBQUs5RSxhQUFMLENBQW1CQyxHQUFuQjtBQUNBLGlCQUFLNkUsTUFBTCxFQUFjO0FBQ1Ysc0JBQUs5RSxhQUFMLENBQW1COEUsTUFBbkIsSUFBNkIsS0FBSzlFLGFBQUwsQ0FBbUI4RSxNQUFuQixLQUE4QixDQUEzRDtBQUNBLHNCQUFLOUUsYUFBTCxDQUFtQjhFLE1BQW5CO0FBQ0g7QUFDSjs7O2lDQUVRQSxNLEVBQVM7QUFBQTs7QUFDZDtBQUNBLGlCQUFJLEtBQUs5RSxhQUFMLENBQW1CQyxHQUFuQixJQUEwQixDQUE5QixFQUNJLE1BQU0sSUFBSStFLEtBQUosQ0FBVSxxQ0FBbUNGLE1BQTdDLENBQU47QUFDSixrQkFBSzlFLGFBQUwsQ0FBbUJDLEdBQW5CO0FBQ0EsaUJBQUs2RSxNQUFMLEVBQWM7QUFDVixzQkFBSzlFLGFBQUwsQ0FBbUI4RSxNQUFuQixJQUE2QixLQUFLOUUsYUFBTCxDQUFtQjhFLE1BQW5CLEtBQThCLENBQTNEO0FBQ0Esc0JBQUs5RSxhQUFMLENBQW1COEUsTUFBbkI7QUFDSDtBQUNELGlCQUFLLENBQUMsS0FBSzlFLGFBQUwsQ0FBbUJDLEdBQXpCLEVBQStCO0FBQzNCLHFCQUFLLEtBQUtOLGNBQVYsRUFBMkI7QUFDdkIsMEJBQUs0RixVQUFMLElBQW1CTCxhQUFhLEtBQUtLLFVBQWxCLENBQW5CO0FBQ0EsMEJBQUtBLFVBQUwsR0FBa0J2RSxXQUNkLGFBQUs7QUFDRCxpQ0FBS3dFLElBQUwsQ0FBVSxhQUFLO0FBQ2I7O0FBRUUsOEJBQUMsUUFBS3hGLGFBQUwsQ0FBbUJDLEdBQXBCLElBQTJCLFFBQUt3RixPQUFMLEVBQTNCO0FBQ0gsMEJBSkQ7QUFLSCxzQkFQYSxFQVFkLEtBQUs5RixjQVJTLENBQWxCO0FBVUgsa0JBWkQsTUFZTztBQUNILDBCQUFLNkYsSUFBTCxDQUFVO0FBQUEsZ0NBQU0sQ0FBQyxRQUFLeEYsYUFBTCxDQUFtQkMsR0FBcEIsSUFBMkIsUUFBS3dGLE9BQUwsRUFBakM7QUFBQSxzQkFBVjtBQUNIO0FBQ0o7QUFDSjs7O21DQUVTO0FBQ1I7O0FBRUUsa0JBQUtWLElBQUwsQ0FBVSxTQUFWLEVBQXFCLElBQXJCO0FBQ0EsaUJBQUssS0FBS2tFLFdBQVYsRUFDSS9ELGFBQWEsS0FBSytELFdBQWxCO0FBQ0osa0JBQUsxSSxVQUFMLENBQWdCb0QsTUFBaEIsR0FBeUIsQ0FBekI7QUFDQSxrQkFBS3NHLElBQUwsR0FBeUIsSUFBekI7QUFDQSxrQkFBSzNELEtBQUwsR0FBeUIsS0FBS3JILEtBQUwsR0FBYSxLQUFLRCxLQUFMLEdBQWEsS0FBS21ILE9BQUwsR0FBZSxJQUFsRTtBQUNBLGtCQUFLK0Qsa0JBQUw7QUFDSDs7OztHQXJxQjhCOUwsWTs7QUFBZEwsTSxDQUVWa0ssRyxHQUE2QixFO0FBRm5CbEssTSxDQUtWeUksYSxHQUE2QixJQUFJeEksT0FBSixDQUFZLEVBQVosRUFBZ0IsRUFBQ1MsSUFBSyxRQUFOLEVBQWhCLEM7QUFMbkJWLE0sQ0FNVm9LLFksR0FBNkJuRixTO0FBTm5CakYsTSxDQVdIb0IsbUIsR0FBc0IsRztBQVhuQnBCLE0sQ0FtQkhxQixhLEdBQXNCLEs7bUJBbkJuQnJCLEsiLCJmaWxlIjoiZGlzdC9SZXNjb3BlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGVkZWNiZWM0MTdmNjU0ZjZlZTk1IiwiLypcclxuICogQ29weXJpZ2h0IChjKSAgMjAxNyBDYWlwaSBMYWJzIC5cclxuICpcclxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuICpcclxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcbiAqXHJcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxyXG4gKi9cclxuXHJcbmltcG9ydCBDb250ZXh0IGZyb20gXCIuL0NvbnRleHRcIjtcclxuaW1wb3J0IFN0b3JlIGZyb20gXCIuL1N0b3JlXCI7XHJcblxyXG5Db250ZXh0LlN0b3JlID0gU3RvcmU7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7U3RvcmUsIENvbnRleHR9O1xyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1Jlc2NvcGUuanMiLCIvKlxyXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTcuICBDYWlwaSBMYWJzLiAgQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICpcclxuICogVGhpcyBGaWxlIGlzIHBhcnQgb2YgQ2FpcGkuIFlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcclxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXNcclxuICogcHVibGlzaGVkIGJ5IHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlXHJcbiAqIExpY2Vuc2UsIG9yIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXHJcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxyXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxyXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXHJcbiAqIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxyXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcclxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cclxuICogIFRoaXMgcHJvamVjdCBpcyBkdWFsIGxpY2Vuc2VkIHVuZGVyIEFHUEwgYW5kIENvbW1lcmNpYWwgTGljZW5jZS5cclxuICpcclxuICogQGF1dGhvciA6IE5hdGhhbmFlbCBCcmF1blxyXG4gKiBAY29udGFjdCA6IGNhaXBpbGFic0BnbWFpbC5jb21cclxuICovXHJcblxyXG4vKipcclxuICogQGF1dGhvciBOYXRoYW5hZWwgQlJBVU5cclxuICpcclxuICogRGF0ZTogMTMvMDgvMjAxN1xyXG4gKiBUaW1lOiAxNzoxNVxyXG4gKi9cclxuXHJcblxyXG52YXIgaXNTdHJpbmcgPSByZXF1aXJlKCdpc3N0cmluZycpLFxyXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJ2lzYXJyYXknKSxcclxuICAgIEV2ZW50RW1pdHRlciA9IHJlcXVpcmUoJ2V2ZW50cycpLFxyXG4gICAgaXNGdW5jdGlvbiA9IHJlcXVpcmUoJ2lzZnVuY3Rpb24nKVxyXG4gICAgLCBzaG9ydGlkID0gcmVxdWlyZSgnc2hvcnRpZCcpXHJcbiAgICAsIF9fcHJvdG9fX3B1c2ggPSAodGFyZ2V0LCBpZCwgcGFyZW50KSA9PiB7XHJcbiAgICAgICAgbGV0IGhlcmUgPSB7XHJcbiAgICAgICAgICAgIFtpZF06IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgaGVyZVtpZF0ucHJvdG90eXBlID0gcGFyZW50ID8gbmV3IHBhcmVudFtcIl9cIiArIGlkXSgpIDogdGFyZ2V0W2lkXSB8fCB7fTtcclxuICAgICAgICB0YXJnZXRbaWRdID0gbmV3IGhlcmVbaWRdKCk7XHJcbiAgICAgICAgdGFyZ2V0WydfJyArIGlkXSA9IGhlcmVbaWRdO1xyXG4gICAgfTtcclxuXHJcbmxldCBvcGVuQ29udGV4dHMgPSB7fTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250ZXh0IGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcclxuICAgIHN0YXRpYyBjb250ZXh0cyA9IG9wZW5Db250ZXh0cztcclxuICAgIHN0YXRpYyBTdG9yZSA9IG51bGw7XHJcbiAgICBzdGF0aWMgZGVmYXVsdE1heExpc3RlbmVycyA9IDEwMDtcclxuICAgIHN0YXRpYyBwZXJzaXN0ZW5jZVRtID0gMDtcclxuXHJcbiAgICBzdGF0aWMgZ2V0Q29udGV4dChrZXkpIHtcclxuICAgICAgICByZXR1cm4gb3BlbkNvbnRleHRzW2tleV0gPSBvcGVuQ29udGV4dHNba2V5XSB8fCBuZXcgQ29udGV4dCh7fSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGN0eCwge2lkLCBwYXJlbnQsIHN0YXRlLCBkYXRhcywgbmFtZSwgZGVmYXVsdE1heExpc3RlbmVycywgcGVyc2lzdGVuY2VUbSwgYXV0b0Rlc3Ryb3l9ID0ge30pIHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICB0aGlzLl9tYXhMaXN0ZW5lcnMgPSBkZWZhdWx0TWF4TGlzdGVuZXJzIHx8IHRoaXMuY29uc3RydWN0b3IuZGVmYXVsdE1heExpc3RlbmVycztcclxuICAgICAgICB0aGlzLl9pZCA9IGlkID0gaWQgfHwgKFwiX19fX19cIiArIHNob3J0aWQuZ2VuZXJhdGUoKSk7XHJcblxyXG4gICAgICAgIGlmIChvcGVuQ29udGV4dHNbaWRdKSB7XHJcbiAgICAgICAgICAgIC8vIG9wZW5Db250ZXh0c1tpZF0ucmVnaXN0ZXIoY3R4KTtcclxuICAgICAgICAgICAgcmV0dXJuIG9wZW5Db250ZXh0c1tpZF1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG9wZW5Db250ZXh0c1tpZF0gPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuX2lzTG9jYWxJZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5fcGVyc2lzdGVuY2VUbSA9IHBlcnNpc3RlbmNlVG0gfHwgdGhpcy5jb25zdHJ1Y3Rvci5wZXJzaXN0ZW5jZVRtO1xyXG5cclxuICAgICAgICB0aGlzLnN0b3JlcyA9IHt9O1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7fTtcclxuICAgICAgICB0aGlzLmRhdGFzID0ge307XHJcbiAgICAgICAgX19wcm90b19fcHVzaCh0aGlzLCAnc3RvcmVzJywgcGFyZW50KTtcclxuICAgICAgICBfX3Byb3RvX19wdXNoKHRoaXMsICdzdGF0ZScsIHBhcmVudCk7XHJcbiAgICAgICAgX19wcm90b19fcHVzaCh0aGlzLCAnZGF0YXMnLCBwYXJlbnQpO1xyXG4gICAgICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xyXG5cclxuICAgICAgICBpZiAocGFyZW50KSB7XHJcbiAgICAgICAgICAgIHBhcmVudC5fYWRkQ2hpbGQodGhpcyk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zb3VyY2VzID0gW107XHJcbiAgICAgICAgdGhpcy5fY2hpbGRDb250ZXh0cyA9IFtdO1xyXG5cclxuICAgICAgICB0aGlzLl9fcmV0YWluTG9ja3MgPSB7YWxsOiAwfTtcclxuICAgICAgICB0aGlzLl9fdzhMb2NrcyA9IHthbGw6IDF9O1xyXG4gICAgICAgIHRoaXMuX19saXN0ZW5pbmcgPSB7fTtcclxuICAgICAgICB0aGlzLl9fY29udGV4dCA9IHt9O1xyXG4gICAgICAgIHRoaXMuX19taXhlZCA9IFtdO1xyXG4gICAgICAgIHRoaXMuX19taXhlZExpc3QgPSBbXTtcclxuICAgICAgICB0aGlzLl9mb2xsb3dlcnMgPSBbXTtcclxuICAgICAgICBpZiAocGFyZW50KSB7XHJcbiAgICAgICAgICAgIHBhcmVudC5yZXRhaW4oXCJpc015UGFyZW50XCIpO1xyXG4gICAgICAgICAgICAhcGFyZW50Ll9zdGFibGUgJiYgdGhpcy53YWl0KFwiaXNNeVBhcmVudFwiKTtcclxuICAgICAgICAgICAgcGFyZW50Lm9uKHRoaXMuX19wYXJlbnRMaXN0ID0ge1xyXG4gICAgICAgICAgICAgICAgJ3N0YWJsZSc6IHMgPT4gdGhpcy5yZWxlYXNlKFwiaXNNeVBhcmVudFwiKSxcclxuICAgICAgICAgICAgICAgICd1bnN0YWJsZSc6IHMgPT4gdGhpcy53YWl0KFwiaXNNeVBhcmVudFwiKSxcclxuICAgICAgICAgICAgICAgICd1cGRhdGUnOiBzID0+IHRoaXMuX3Byb3BhZygpXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAvLyB0aGlzLnJlZ2lzdGVyKHBhcmVudC5fX2NvbnRleHQsIHN0YXRlLCBkYXRhcyk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgdGhpcy5yZWdpc3RlcihjdHgsIHN0YXRlLCBkYXRhcyk7XHJcbiAgICAgICAgdGhpcy5fX3c4TG9ja3MuYWxsLS07XHJcbiAgICAgICAgdGhpcy5fc3RhYmxlID0gIXRoaXMuX193OExvY2tzLmFsbDtcclxuXHJcbiAgICAgICAgaWYgKGF1dG9EZXN0cm95KVxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KFxyXG4gICAgICAgICAgICAgICAgdG0gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmV0YWluKFwiYXV0b0Rlc3Ryb3lcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNwb3NlKFwiYXV0b0Rlc3Ryb3lcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBtb3VudChpZCwgc3RhdGUsIGRhdGFzKSB7XHJcbiAgICAgICAgaWYgKGlzQXJyYXkoaWQpKSB7XHJcbiAgICAgICAgICAgIGlkLmZvckVhY2goayA9PiB0aGlzLl9tb3VudChrLCBzdGF0ZSAmJiBzdGF0ZVtrXSwgZGF0YXMgJiYgZGF0YXNba10pKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9tb3VudCguLi5hcmd1bWVudHMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBfbW91bnQoaWQsIHN0YXRlLCBkYXRhcykge1xyXG4gICAgICAgIGlmICghdGhpcy5fX2NvbnRleHRbaWRdKSB7Ly9hc2sgbWl4ZWQgfHwgcGFyZW50XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9fbWl4ZWQucmVkdWNlKChtb3VudGVkLCBjdHgpID0+IChtb3VudGVkIHx8IGN0eC5fbW91bnQoaWQsIHN0YXRlLCBkYXRhcykpLCBmYWxzZSkgfHxcclxuICAgICAgICAgICAgICAgICF0aGlzLnBhcmVudClcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyZW50Ll9tb3VudCguLi5hcmd1bWVudHMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNvbnN0cnVjdG9yLlN0b3JlLm1vdW50U3RvcmUoaWQsIHRoaXMsIG51bGwsIHN0YXRlLCBkYXRhcyk7XHJcbiAgICAgICAgdGhpcy5fd2F0Y2hTdG9yZShpZCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX19jb250ZXh0W2lkXTtcclxuICAgIH1cclxuXHJcbiAgICBfd2F0Y2hTdG9yZShpZCwgc3RhdGUsIGRhdGFzKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9fY29udGV4dFtpZF0pIHsvL2FzayBtaXhlZCB8fCBwYXJlbnRcclxuICAgICAgICAgICAgaWYgKHRoaXMuX19taXhlZC5yZWR1Y2UoKG1vdW50ZWQsIGN0eCkgPT4gKG1vdW50ZWQgfHwgY3R4Ll93YXRjaFN0b3JlKGlkLCBzdGF0ZSwgZGF0YXMpKSwgZmFsc2UpIHx8XHJcbiAgICAgICAgICAgICAgICAhdGhpcy5wYXJlbnQpXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcmVudC5fd2F0Y2hTdG9yZSguLi5hcmd1bWVudHMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXRoaXMuX19saXN0ZW5pbmdbaWRdICYmICFpc0Z1bmN0aW9uKHRoaXMuX19jb250ZXh0W2lkXSkpIHtcclxuICAgICAgICAgICAgIXRoaXMuX19jb250ZXh0W2lkXS5pc1N0YWJsZSgpICYmIHRoaXMud2FpdChpZCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9fY29udGV4dFtpZF0ub24oXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9fbGlzdGVuaW5nW2lkXSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAndXBkYXRlJzogcyA9PiB0aGlzLnByb3BhZygpLFxyXG4gICAgICAgICAgICAgICAgICAgICdzdGFibGUnOiBzID0+IHRoaXMucmVsZWFzZShpZCksXHJcbiAgICAgICAgICAgICAgICAgICAgJ3Vuc3RhYmxlJzogcyA9PiB0aGlzLndhaXQoaWQpXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgbWl4aW4odGFyZ2V0Q3R4KSB7XHJcbiAgICAgICAgbGV0IHBhcmVudCA9IHRoaXMucGFyZW50LCBsaXN0cztcclxuICAgICAgICB0aGlzLl9fbWl4ZWQucHVzaCh0YXJnZXRDdHgpXHJcbiAgICAgICAgdGFyZ2V0Q3R4LnJldGFpbigpO1xyXG4gICAgICAgIGlmICghdGFyZ2V0Q3R4Ll9zdGFibGUpXHJcbiAgICAgICAgICAgIHRoaXMud2FpdCh0YXJnZXRDdHguX2lkKTtcclxuXHJcbiAgICAgICAgdGhpcy5fX21peGVkTGlzdC5wdXNoKGxpc3RzID0ge1xyXG4gICAgICAgICAgICAnc3RhYmxlJzogcyA9PiB0aGlzLnJlbGVhc2UodGFyZ2V0Q3R4Ll9pZCksXHJcbiAgICAgICAgICAgICd1bnN0YWJsZSc6IHMgPT4gdGhpcy53YWl0KHRhcmdldEN0eC5faWQpLFxyXG4gICAgICAgICAgICAndXBkYXRlJzogcyA9PiB0aGlzLl9wcm9wYWcoKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGFyZ2V0Q3R4Lm9uKGxpc3RzKTtcclxuICAgICAgICBfX3Byb3RvX19wdXNoKHRoaXMsICdzdG9yZXMnLCBwYXJlbnQpO1xyXG4gICAgICAgIF9fcHJvdG9fX3B1c2godGhpcywgJ3N0YXRlJywgcGFyZW50KTtcclxuICAgICAgICBfX3Byb3RvX19wdXNoKHRoaXMsICdkYXRhcycsIHBhcmVudCk7XHJcbiAgICAgICAgdGFyZ2V0Q3R4LnJlbGluayh0YXJnZXRDdHguX19jb250ZXh0LCB0aGlzLCB0cnVlKTtcclxuXHJcbiAgICAgICAgX19wcm90b19fcHVzaCh0aGlzLCAnc3RvcmVzJywgdGhpcyk7XHJcbiAgICAgICAgX19wcm90b19fcHVzaCh0aGlzLCAnc3RhdGUnLCB0aGlzKTtcclxuICAgICAgICBfX3Byb3RvX19wdXNoKHRoaXMsICdkYXRhcycsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMucmVsaW5rKHRoaXMuX19jb250ZXh0LCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICByZWdpc3RlcihyYXdDdHgsIHN0YXRlID0ge30sIGRhdGFzID0ge30pIHtcclxuICAgICAgICB0aGlzLnJlbGluayhyYXdDdHgsIHRoaXMsIGZhbHNlLCBzdGF0ZSwgZGF0YXMpO1xyXG4gICAgICAgIE9iamVjdC5rZXlzKHJhd0N0eCkuZm9yRWFjaChcclxuICAgICAgICAgICAgaWQgPT4gKGlzRnVuY3Rpb24ocmF3Q3R4W2lkXSkgJiYgcmF3Q3R4W2lkXS5zaW5nbGV0b24gJiYgdGhpcy5fbW91bnQoaWQsIHN0YXRlW2lkXSwgZGF0YXNbaWRdKSkpXHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTWFwIHNyY0N0eCBzdG9yZSdzIG9uIHRhcmdldEN0eCBoZWFkZXJzIHByb3RvJ3NcclxuICAgICAqIEBwYXJhbSBzcmNDdHhcclxuICAgICAqIEBwYXJhbSB0YXJnZXRDdHhcclxuICAgICAqIEBwYXJhbSBzdGF0ZVxyXG4gICAgICogQHBhcmFtIGRhdGFzXHJcbiAgICAgKi9cclxuICAgIHJlbGluayhzcmNDdHgsIHRhcmdldEN0eCA9IHRoaXMsIGV4dGVybmFsLCBzdGF0ZSA9IHt9LCBkYXRhcyA9IHt9KSB7XHJcbiAgICAgICAgbGV0IGxjdHggPSB0YXJnZXRDdHguX3N0b3Jlcy5wcm90b3R5cGU7XHJcbiAgICAgICAgT2JqZWN0LmtleXMoc3JjQ3R4KVxyXG4gICAgICAgICAgICAuZm9yRWFjaChcclxuICAgICAgICAgICAgICAgIGlkID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGFyZ2V0Q3R4Ll9fY29udGV4dFtpZF0gPT09IHNyY0N0eFtpZF0gfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0Q3R4Ll9fY29udGV4dFtpZF0gJiYgKHRhcmdldEN0eC5fX2NvbnRleHRbaWRdLmNvbnN0cnVjdG9yID09PSBzcmNDdHhbaWRdICkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhcmdldEN0eC5fX2NvbnRleHRbaWRdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIlJlc2NvcGUgQ29udGV4dCA6IFwiLCBpZCwgXCIgYWxyZWFkeSBleGlzdCBpbiB0aGlzIGNvbnRleHQgIVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWV4dGVybmFsKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9fY29udGV4dFtpZF0gPSBzcmNDdHhbaWRdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxjdHgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoKGN0eCwgaWQpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXQ6ICgpID0+IHRoaXMuX19jb250ZXh0W2lkXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5fX2NvbnRleHQsIGlkKVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRDdHguX3N0YXRlLnByb3RvdHlwZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICgoY3R4LCBpZCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldDogKCkgPT4gKGN0eFtpZF0gJiYgY3R4W2lkXS5zdGF0ZSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0OiAodikgPT4gKHRoaXMuX21vdW50KGlkLCB2KSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMuX19jb250ZXh0LCBpZClcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0Q3R4Ll9kYXRhcy5wcm90b3R5cGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoKGN0eCwgaWQpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXQ6ICgpID0+IChjdHhbaWRdICYmIGN0eFtpZF0uZGF0YXMpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldDogKHYpID0+ICh0aGlzLl9tb3VudChpZCwgdW5kZWZpbmVkLCB2KSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMuX19jb250ZXh0LCBpZClcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0gb2JqIHtSZWFjdC5Db21wb25lbnR8U3RvcmV8ZnVuY3Rpb24pXHJcbiAgICAgKiBAcGFyYW0ga2V5IHtzdHJpbmd9IG9wdGlvbmFsIGtleSB3aGVyZSB0byBtYXAgdGhlIHB1YmxpYyBzdGF0ZVxyXG4gICAgICovXHJcbiAgICBiaW5kKG9iaiwga2V5LCBhcywgc2V0SW5pdGlhbCA9IHRydWUpIHtcclxuICAgICAgICBsZXQgbGFzdFJldnMsIGRhdGFzO1xyXG4gICAgICAgIGlmIChrZXkgJiYgIWlzQXJyYXkoa2V5KSlcclxuICAgICAgICAgICAga2V5ID0gW2tleV07XHJcblxyXG4gICAgICAgIC8vIGtleSA9IGtleXx8XHJcblxyXG4gICAgICAgIGlmIChhcyA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBzZXRJbml0aWFsID0gdHJ1ZTtcclxuICAgICAgICAgICAgYXMgPSBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fZm9sbG93ZXJzLnB1c2goXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIG9iaixcclxuICAgICAgICAgICAgICAgIGtleSxcclxuICAgICAgICAgICAgICAgIGFzLFxyXG4gICAgICAgICAgICAgICAgbGFzdFJldnMgPSBrZXkgJiYga2V5LnJlZHVjZSgocmV2cywgaWQpID0+IChyZXZzW2lkXSA9IDAsIHJldnMpLCB7fSlcclxuICAgICAgICAgICAgXSk7XHJcblxyXG4gICAgICAgIHRoaXMubW91bnQoa2V5KTtcclxuXHJcbiAgICAgICAgaWYgKHNldEluaXRpYWwgJiYgdGhpcy5fc3RhYmxlKSB7XHJcbiAgICAgICAgICAgIGRhdGFzID0gdGhpcy5nZXRVcGRhdGVzKGxhc3RSZXZzKTtcclxuICAgICAgICAgICAgaWYgKCFkYXRhcykgcmV0dXJuO1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIG9iaiAhPSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgICAgIGlmIChhcykgb2JqLnNldFN0YXRlKHtbYXNdOiBkYXRhc30pO1xyXG4gICAgICAgICAgICAgICAgZWxzZSBvYmouc2V0U3RhdGUoZGF0YXMpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgb2JqKGRhdGFzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBsYXN0UmV2cyAmJlxyXG4gICAgICAgICAgICAvLyBrZXkuZm9yRWFjaChpZCA9PiAobGFzdFJldnNbaWRdID0gdGhpcy5zdG9yZXNbaWRdICYmIHRoaXMuc3RvcmVzW2lkXS5fcmV2IHx8IDApKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBVbiBiaW5kIHRoaXMgY29udGV4dCBvZmYgdGhlIGdpdmVuIGNvbXBvbmVudC1rZXlzXHJcbiAgICAgKiBAcGFyYW0gb2JqXHJcbiAgICAgKiBAcGFyYW0ga2V5XHJcbiAgICAgKiBAcmV0dXJucyB7QXJyYXkuPCo+fVxyXG4gICAgICovXHJcbiAgICB1bkJpbmQob2JqLCBrZXksIGFzKSB7XHJcbiAgICAgICAgdmFyIGZvbGxvd2VycyA9IHRoaXMuX2ZvbGxvd2VycyxcclxuICAgICAgICAgICAgaSA9IGZvbGxvd2VycyAmJiBmb2xsb3dlcnMubGVuZ3RoO1xyXG4gICAgICAgIHdoaWxlIChmb2xsb3dlcnMgJiYgaS0tKVxyXG4gICAgICAgICAgICBpZiAoZm9sbG93ZXJzW2ldWzBdID09PSBvYmogJiYgKCcnICsgZm9sbG93ZXJzW2ldWzFdKSA9PSAoJycgKyBrZXkpICYmXHJcbiAgICAgICAgICAgICAgICAoJycgKyBmb2xsb3dlcnNbaV1bMl0pID09ICgnJyArIGFzKSlcclxuICAgICAgICAgICAgICAgIHJldHVybiBmb2xsb3dlcnMuc3BsaWNlKGksIDEpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBtYXAodG8sIHN0b3JlcywgYmluZCA9IHRydWUpIHtcclxuICAgICAgICB0aGlzLm1vdW50KHN0b3Jlcyk7XHJcbiAgICAgICAgYmluZCAmJiB0aGlzLmJpbmQodG8sIHN0b3JlcywgbnVsbCwgZmFsc2UpO1xyXG5cclxuICAgICAgICByZXR1cm4gc3RvcmVzLnJlZHVjZSgoZGF0YXMsIGlkKSA9PiAoZGF0YXNbaWRdID0gdGhpcy5zdG9yZXNbaWRdICYmIHRoaXMuc3RvcmVzW2lkXS5kYXRhcywgZGF0YXMpLCB7fSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VXBkYXRlcyhyZXZzLCBvdXRwdXQsIHVwZGF0ZWQpIHtcclxuICAgICAgICBsZXQgY3R4ID0gdGhpcy5fX2NvbnRleHQ7XHJcblxyXG4gICAgICAgIG91dHB1dCA9IG91dHB1dCB8fCB7fTtcclxuICAgICAgICBPYmplY3Qua2V5cyhjdHgpLmZvckVhY2goXHJcbiAgICAgICAgICAgIGlkID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghb3V0cHV0W2lkXVxyXG4gICAgICAgICAgICAgICAgICAgICYmICggIXJldnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgfHwgKHJldnMuaGFzT3duUHJvcGVydHkoaWQpICYmIHJldnNbaWRdID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHx8ICEoICFyZXZzLmhhc093blByb3BlcnR5KGlkKSB8fCBjdHhbaWRdLl9yZXYgPD0gcmV2c1tpZF0gKSlcclxuICAgICAgICAgICAgICAgICkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgb3V0cHV0W2lkXSA9IHRoaXMuZGF0YXNbaWRdO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXZzICYmIHJldnNbaWRdICE9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldnNbaWRdID0gY3R4W2lkXS5fcmV2O1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdXBkYXRlZCA9IHRoaXMuX19taXhlZC5yZWR1Y2UoKHVwZGF0ZWQsIGN0eCkgPT4gKGN0eC5nZXRVcGRhdGVzKHJldnMsIG91dHB1dCwgdXBkYXRlZCkgfHwgdXBkYXRlZCksIHVwZGF0ZWQpO1xyXG4gICAgICAgIHVwZGF0ZWQgPSB0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC5nZXRVcGRhdGVzKHJldnMsIG91dHB1dCwgdXBkYXRlZCkgfHwgdXBkYXRlZDtcclxuICAgICAgICByZXR1cm4gdXBkYXRlZCAmJiBvdXRwdXQ7XHJcbiAgICB9XHJcblxyXG4gICAgc2VyaWFsaXplKGZsYWdzX3N0YXRlcyA9IC8uKi8sIGZsYWdzX2RhdGFzID0gLy4qLykge1xyXG4gICAgICAgIGxldCBjdHggPSB0aGlzLl9fY29udGV4dCwgb3V0cHV0ID0ge3N0YXRlOiB7fSwgZGF0YXM6IHt9fSxcclxuICAgICAgICAgICAgX2ZsYWdzX3N0YXRlcyxcclxuICAgICAgICAgICAgX2ZsYWdzX2RhdGFzO1xyXG4gICAgICAgIGlmIChpc0FycmF5KGZsYWdzX3N0YXRlcykpXHJcbiAgICAgICAgICAgIGZsYWdzX3N0YXRlcy5mb3JFYWNoKGlkID0+IChvdXRwdXQuc3RhdGVbaWRdID0gdGhpcy5zdGF0ZVtpZF0pKVxyXG5cclxuICAgICAgICBpZiAoaXNBcnJheShmbGFnc19kYXRhcykpXHJcbiAgICAgICAgICAgIGZsYWdzX2RhdGFzLmZvckVhY2goaWQgPT4gKG91dHB1dC5kYXRhc1tpZF0gPSB0aGlzLmRhdGFzW2lkXSkpXHJcblxyXG4gICAgICAgIGlmICghaXNBcnJheShmbGFnc19kYXRhcykgJiYgIWlzQXJyYXkoZmxhZ3Nfc3RhdGVzKSlcclxuICAgICAgICAgICAgT2JqZWN0LmtleXMoY3R4KS5mb3JFYWNoKFxyXG4gICAgICAgICAgICAgICAgaWQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0Z1bmN0aW9uKGN0eFtpZF0pKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBmbGFncyA9IGN0eFtpZF0uY29uc3RydWN0b3IuZmxhZ3M7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGZsYWdzID0gaXNBcnJheShmbGFncykgPyBmbGFncyA6IFtmbGFncyB8fCBcIlwiXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZsYWdzLnJlZHVjZSgociwgZmxhZykgPT4gKHIgfHwgX2ZsYWdzX3N0YXRlcy50ZXN0KGZsYWcpKSwgZmFsc2UpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXQuc3RhdGVbaWRdID0gdGhpcy5zdGF0ZVtpZF07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChmbGFncy5yZWR1Y2UoKHIsIGZsYWcpID0+IChyIHx8IF9mbGFnc19kYXRhcy50ZXN0KGZsYWcpKSwgZmFsc2UpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXQuZGF0YXNbaWRdID0gdGhpcy5kYXRhc1tpZF07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICByZXR1cm4gb3V0cHV0O1xyXG4gICAgfVxyXG5cclxuICAgIG9uKGxpc3RzKSB7XHJcblxyXG4gICAgICAgIGlmICghaXNTdHJpbmcobGlzdHMpICYmIGxpc3RzKVxyXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhsaXN0cykuZm9yRWFjaChrID0+IHN1cGVyLm9uKGssIGxpc3RzW2tdKSk7XHJcbiAgICAgICAgZWxzZSBzdXBlci5vbiguLi5hcmd1bWVudHMpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUxpc3RlbmVyKGxpc3RzKSB7XHJcbiAgICAgICAgaWYgKCFpc1N0cmluZyhsaXN0cykgJiYgbGlzdHMpXHJcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGxpc3RzKS5mb3JFYWNoKGsgPT4gc3VwZXIucmVtb3ZlTGlzdGVuZXIoaywgbGlzdHNba10pKTtcclxuICAgICAgICBlbHNlIHN1cGVyLnJlbW92ZUxpc3RlbmVyKC4uLmFyZ3VtZW50cyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBvbmNlKCdzdGFibGUnLCBjYilcclxuICAgICAqIEBwYXJhbSBvYmoge1JlYWN0LkNvbXBvbmVudHxTdG9yZXxmdW5jdGlvbilcclxuICAgICAqIEBwYXJhbSBrZXkge3N0cmluZ30gb3B0aW9uYWwga2V5IHdoZXJlIHRvIG1hcCB0aGUgcHVibGljIHN0YXRlXHJcbiAgICAgKi9cclxuICAgIHRoZW4oY2IpIHtcclxuICAgICAgICBpZiAodGhpcy5fc3RhYmxlKVxyXG4gICAgICAgICAgICByZXR1cm4gY2IobnVsbCwgdGhpcy5kYXRhcyk7XHJcbiAgICAgICAgdGhpcy5vbmNlKCdzdGFibGUnLCBlID0+IGNiKG51bGwsIHRoaXMuZGF0YXMpKTtcclxuICAgIH1cclxuXHJcbiAgICByZXN0b3JlKHtzdGF0ZSwgZGF0YXN9LCBxdWlldCkge1xyXG4gICAgICAgIGxldCBjdHggPSB0aGlzLl9fY29udGV4dDtcclxuICAgICAgICBPYmplY3Qua2V5cyhkYXRhcykuZm9yRWFjaChcclxuICAgICAgICAgICAgaWQgPT4ge1xyXG4gICAgICAgICAgICAgICAgcXVpZXQgP1xyXG4gICAgICAgICAgICAgICAgICAgIGN0eC5kYXRhcyA9IGRhdGFzW2lkXVxyXG4gICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICBjdHgucHVzaChkYXRhc1tpZF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgICAgICBPYmplY3Qua2V5cyhzdGF0ZSkuZm9yRWFjaChcclxuICAgICAgICAgICAgaWQgPT4ge1xyXG4gICAgICAgICAgICAgICAgcXVpZXQgP1xyXG4gICAgICAgICAgICAgICAgICAgIGN0eC5zdGF0ZSA9IHN0YXRlW2lkXVxyXG4gICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICBjdHguc2V0U3RhdGUoc3RhdGVbaWRdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICByZXRhaW5TdG9yZXMoc3RvcmVzID0gW10sIHJlYXNvbikge1xyXG4gICAgICAgIHN0b3Jlcy5mb3JFYWNoKFxyXG4gICAgICAgICAgICBpZCA9PiAodGhpcy5zdG9yZXNbaWRdICYmIHRoaXMuc3RvcmVzW2lkXS5yZXRhaW4gJiYgdGhpcy5zdG9yZXNbaWRdLnJldGFpbihyZWFzb24pKVxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBkaXNwb3NlU3RvcmVzKHN0b3JlcyA9IFtdLCByZWFzb24pIHtcclxuICAgICAgICBzdG9yZXMuZm9yRWFjaChcclxuICAgICAgICAgICAgaWQgPT4gKHRoaXMuc3RvcmVzW2lkXSAmJiB0aGlzLnN0b3Jlc1tpZF0uZGlzcG9zZSAmJiB0aGlzLnN0b3Jlc1tpZF0uZGlzcG9zZShyZWFzb24pKVxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICB3YWl0KHJlYXNvbikge1xyXG4gICAgICAvLyAgY29uc29sZS5sb2coXCJ3YWl0XCIsIHJlYXNvbik7XHJcbiAgICAgICAgdGhpcy5fc3RhYmxlJiYhdGhpcy5fX3c4TG9ja3MuYWxsICYmIHRoaXMuZW1pdChcInVuc3RhYmxlXCIsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMuX3N0YWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuX193OExvY2tzLmFsbCsrO1xyXG4gICAgICAgIGlmIChyZWFzb24pIHtcclxuICAgICAgICAgICAgdGhpcy5fX3c4TG9ja3NbcmVhc29uXSA9IHRoaXMuX193OExvY2tzW3JlYXNvbl0gfHwgMDtcclxuICAgICAgICAgICAgdGhpcy5fX3c4TG9ja3NbcmVhc29uXSsrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZWxlYXNlKHJlYXNvbikge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJyZWxlYXNlXCIsIHJlYXNvbik7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9fdzhMb2Nrcy5hbGwgPT0gMClcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUmVsZWFzZSBtb3JlIHRoYW4gbG9ja2luZyAhIDogXCIrcmVhc29uKTtcclxuXHJcbiAgICAgICAgdGhpcy5fX3c4TG9ja3MuYWxsLS07XHJcbiAgICAgICAgaWYgKHJlYXNvbikge1xyXG4gICAgICAgICAgICB0aGlzLl9fdzhMb2Nrc1tyZWFzb25dID0gdGhpcy5fX3c4TG9ja3NbcmVhc29uXSB8fCAwO1xyXG4gICAgICAgICAgICB0aGlzLl9fdzhMb2Nrc1tyZWFzb25dLS07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGhpcy5fX3c4TG9ja3MuYWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3N0YWJpbGl6ZXJUTSAmJiBjbGVhclRpbWVvdXQodGhpcy5fc3RhYmlsaXplclRNKTtcclxuICAgICAgICAgICAgdGhpcy5fcHJvcGFnVE0gJiYgY2xlYXJUaW1lb3V0KHRoaXMuX3Byb3BhZ1RNKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX3N0YWJpbGl6ZXJUTSA9IHNldFRpbWVvdXQoXHJcbiAgICAgICAgICAgICAgICBlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuX193OExvY2tzLmFsbClcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3N0YWJpbGl6ZXJUTSA9IG51bGw7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3N0YWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KFwic3RhYmxlXCIsIHRoaXMpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wcm9wYWcoKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJvcGFnKCkge1xyXG4gICAgICAgIHRoaXMuX3Byb3BhZ1RNICYmIGNsZWFyVGltZW91dCh0aGlzLl9wcm9wYWdUTSk7XHJcbiAgICAgICAgdGhpcy5fcHJvcGFnVE0gPSBzZXRUaW1lb3V0KFxyXG4gICAgICAgICAgICBlID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3Byb3BhZygpXHJcbiAgICAgICAgICAgIH0sIDUwXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBfcHJvcGFnKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9mb2xsb3dlcnMubGVuZ3RoKVxyXG4gICAgICAgICAgICB0aGlzLl9mb2xsb3dlcnMuZm9yRWFjaCgoezA6IG9iaiwgMToga2V5LCAyOiBhcywgMzogbGFzdFJldnN9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGF0YXMgPSB0aGlzLmdldFVwZGF0ZXMobGFzdFJldnMpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFkYXRhcykgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvYmogIT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFzKSBvYmouc2V0U3RhdGUoe1thc106IGRhdGFzfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBvYmouc2V0U3RhdGUoZGF0YXMpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBvYmooZGF0YXMsIGxhc3RSZXZzICYmIFsuLi5sYXN0UmV2c10gfHwgXCJubyByZXZzXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gbGFzdFJldnMgJiZcclxuICAgICAgICAgICAgICAgIC8vIGtleS5mb3JFYWNoKGlkID0+IChsYXN0UmV2c1tpZF0gPSB0aGlzLnN0b3Jlc1tpZF0gJiYgdGhpcy5zdG9yZXNbaWRdLl9yZXYgfHwgMCkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmVtaXQoXCJ1cGRhdGVcIiwgdGhpcy5nZXRVcGRhdGVzKCkpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBfZ2V0QWxsQ2hpbGRzKGNoaWxkcz1bXSkge1xyXG4gICAgICAgIGNoaWxkcy5wdXNoKC4uLnRoaXMuX2NoaWxkQ29udGV4dHMpXHJcbiAgICAgICAgdGhpcy5fY2hpbGRDb250ZXh0cy5mb3JFYWNoKFxyXG4gICAgICAgICAgICBjdHg9PntcclxuICAgICAgICAgICAgICAgIGN0eC5fZ2V0QWxsQ2hpbGRzKGNoaWxkcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICAgIHJldHVybiBjaGlsZHM7XHJcbiAgICB9XHJcblxyXG4gICAgX2FkZENoaWxkKGN0eCkge1xyXG4gICAgICAgIHRoaXMuX2NoaWxkQ29udGV4dHMucHVzaChjdHgpO1xyXG4gICAgfVxyXG5cclxuICAgIF9ybUNoaWxkKGN0eCkge1xyXG4gICAgICAgIGxldCBpID0gdGhpcy5fY2hpbGRDb250ZXh0cy5pbmRleE9mKGN0eCk7XHJcbiAgICAgICAgaWYgKGkgIT0gLTEpXHJcbiAgICAgICAgICAgIHRoaXMuX2NoaWxkQ29udGV4dHMuc3BsaWNlKGksIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldGFpbihyZWFzb24pIHtcclxuICAgICAgICB0aGlzLl9fcmV0YWluTG9ja3MuYWxsKys7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcInJldGFpblwiLCB0aGlzLl9pZCwgcmVhc29uKTtcclxuXHJcbiAgICAgICAgaWYgKHJlYXNvbikge1xyXG4gICAgICAgICAgICB0aGlzLl9fcmV0YWluTG9ja3NbcmVhc29uXSA9IHRoaXMuX19yZXRhaW5Mb2Nrc1tyZWFzb25dIHx8IDA7XHJcbiAgICAgICAgICAgIHRoaXMuX19yZXRhaW5Mb2Nrc1tyZWFzb25dKys7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRpc3Bvc2UocmVhc29uKSB7XHJcbiAgICAgIC8vICBjb25zb2xlLmxvZyhcImRpc3Bvc2VcIiwgdGhpcy5faWQsIHJlYXNvbik7XHJcbiAgICAgICAgaWYgKHRoaXMuX19yZXRhaW5Mb2Nrcy5hbGwgPT0gMClcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRGlzcG9zZSBtb3JlIHRoYW4gcmV0YWluaW5nICEgOiBcIityZWFzb24pO1xyXG5cclxuICAgICAgICB0aGlzLl9fcmV0YWluTG9ja3MuYWxsLS07XHJcbiAgICAgICAgaWYgKHJlYXNvbikge1xyXG4gICAgICAgICAgICB0aGlzLl9fcmV0YWluTG9ja3NbcmVhc29uXSA9IHRoaXMuX19yZXRhaW5Mb2Nrc1tyZWFzb25dIHx8IDA7XHJcbiAgICAgICAgICAgIHRoaXMuX19yZXRhaW5Mb2Nrc1tyZWFzb25dLS07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGhpcy5fX3JldGFpbkxvY2tzLmFsbCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fcGVyc2lzdGVuY2VUbSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZGVzdHJveVRNICYmIGNsZWFyVGltZW91dCh0aGlzLl9kZXN0cm95VE0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZGVzdHJveVRNID0gc2V0VGltZW91dChcclxuICAgICAgICAgICAgICAgICAgICBlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInd0ZiBjdHhcIiwgdGhpcy5faWQsIHJlYXNvbiwgdGhpcy5fX3c4TG9ja3MsIHRoaXMuX3N0YWJsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGhlbihzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgY29uc29sZS5sb2coXCJ3dGYgY3R4IHRoZW5cIiwgdGhpcy5faWQsIHJlYXNvbiwgdGhpcy5fX3c4TG9ja3MpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIXRoaXMuX19yZXRhaW5Mb2Nrcy5hbGwgJiYgdGhpcy5kZXN0cm95KCl9KTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3BlcnNpc3RlbmNlVG1cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRoZW4ocyA9PiAoIXRoaXMuX19yZXRhaW5Mb2Nrcy5hbGwgJiYgdGhpcy5kZXN0cm95KCkpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogb3JkZXIgZGVzdHJveSBvZiBsb2NhbCBzdG9yZXNcclxuICAgICAqL1xyXG4gICAgZGVzdHJveSgpIHtcclxuICAgICAgICBsZXQgY3R4ID0gdGhpcy5fX2NvbnRleHQ7XHJcblxyXG4gICAgICAgLy8gY29uc29sZS5sb2coXCJkZXN0cm95XCIsIHRoaXMuX2lkKTtcclxuICAgICAgICB0aGlzLmVtaXQoXCJkZXN0cm95XCIpO1xyXG4gICAgICAgIE9iamVjdC5rZXlzKFxyXG4gICAgICAgICAgICB0aGlzLl9fbGlzdGVuaW5nXHJcbiAgICAgICAgKS5mb3JFYWNoKFxyXG4gICAgICAgICAgICBpZCA9PiB0aGlzLl9fY29udGV4dFtpZF0ucmVtb3ZlTGlzdGVuZXIodGhpcy5fX2xpc3RlbmluZ1tpZF0pXHJcbiAgICAgICAgKTtcclxuXHJcblxyXG5cclxuICAgICAgICB0aGlzLl9fbGlzdGVuaW5nID0ge307XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9pc0xvY2FsSWQpXHJcbiAgICAgICAgICAgIGRlbGV0ZSBvcGVuQ29udGV4dHNbdGhpcy5faWRdO1xyXG4gICAgICAgIHRoaXMuX2ZvbGxvd2Vycy5sZW5ndGggPSAwO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gY3R4KVxyXG4gICAgICAgICAgICBpZiAoIWlzRnVuY3Rpb24oY3R4W2tleV0pKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY3R4W2tleV0uY29udGV4dE9iaiA9PT0gdGhpcylcclxuICAgICAgICAgICAgICAgICAgICBjdHhba2V5XS5kZXN0cm95KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgY3R4W2tleV0gPSBjdHhba2V5XS5jb25zdHJ1Y3RvcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIHdoaWxlICh0aGlzLl9fbWl4ZWRMaXN0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLl9fbWl4ZWRbMF0ucmVtb3ZlTGlzdGVuZXIodGhpcy5fX21peGVkTGlzdC5zaGlmdCgpKTtcclxuICAgICAgICAgICAgdGhpcy5fX21peGVkLnNoaWZ0KCkuZGlzcG9zZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5wYXJlbnQpIHtcclxuICAgICAgICAgICAgdGhpcy5wYXJlbnQucmVtb3ZlTGlzdGVuZXIodGhpcy5fX3BhcmVudExpc3QpO1xyXG4gICAgICAgICAgICB0aGlzLnBhcmVudC5kaXNwb3NlKFwiaXNNeVBhcmVudFwiKTtcclxuICAgICAgICAgICAgdGhpcy5wYXJlbnQuX3JtQ2hpbGQodGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHRoaXMuZGF0YXMgPSB0aGlzLnN0YXRlID0gdGhpcy5jb250ZXh0ID0gdGhpcy5zdG9yZXMgPSBudWxsO1xyXG4gICAgICAgIC8vIHRoaXMuX2RhdGFzID0gdGhpcy5fc3RhdGUgPSB0aGlzLl9zdG9yZXMgPSBudWxsO1xyXG5cclxuXHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvQ29udGV4dC5qcyIsIjsoZnVuY3Rpb24gKGZhY3RvcnkpIHtcbiAgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcbiAgICBkZWZpbmUoW10sIGZhY3RvcnkpO1xuICBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgISFleHBvcnRzICYmICFleHBvcnRzLm5vZGVUeXBlKVxuICAgIGlmICh0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0JyAmJiAhIW1vZHVsZSAmJiBtb2R1bGUuZXhwb3J0cylcbiAgICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuICAgIGVsc2VcbiAgICAgIGV4cG9ydHNbJ2RlZmF1bHQnXSA9IGZhY3RvcnkoKTtcbiAgZWxzZSBpZiAodHlwZW9mIFlVSSA9PT0gJ2Z1bmN0aW9uJyAmJiBZVUkuYWRkKVxuICAgIFlVSS5hZGQoJ2lzLXN0cmluZycsIGZ1bmN0aW9uIChZKSB7IFlbJ2RlZmF1bHQnXSA9IGZhY3RvcnkoKTsgfSwgJzEuMC43Jyk7XG4gIGVsc2VcbiAgICBTdHJpbmcuaXNTdHJpbmcgPSBmYWN0b3J5KCk7XG59KShmdW5jdGlvbiAoKSB7XG4gIHZhciBzdHJUb1N0cmluZyAgPSAoJycpLnRvU3RyaW5nLFxuICAgICAgaGFzQmluZCAgICAgID0gRnVuY3Rpb24ucHJvdG90eXBlICYmIEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLFxuICAgICAgc3RyVG9TdHJDYWxsID0gaGFzQmluZCAmJiBzdHJUb1N0cmluZy5jYWxsLmJpbmQoc3RyVG9TdHJpbmcpLFxuICAgICAgaXNTdHJpbmcgICAgID0gZnVuY3Rpb24gKHN0cikge1xuICAgICAgICAvKkBjY19vblxuICAgICAgICAgIEBpZiAoQF9qc2NyaXB0X3ZlcnNpb24gPj0gNSkgQCovXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGhhc0JpbmQgPyBzdHJUb1N0ckNhbGwoc3RyKSA6IHN0clRvU3RyaW5nLmNhbGwoc3RyKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgLypAZW5kXG4gICAgICAgIEAqL1xuICAgICAgfTtcblxuICByZXR1cm4gZnVuY3Rpb24gKHN0cikge1xuICAgIHJldHVybiAgdHlwZW9mIHN0ciA9PT0gJ3N0cmluZycgfHxcbiAgICAgICAgICAgIHN0ciAmJiB0eXBlb2Ygc3RyID09PSAnb2JqZWN0JyAmJlxuICAgICAgICAgICAgLypAY2Nfb25cbiAgICAgICAgICAgICAgQGlmIChAX2pzY3JpcHRfdmVyc2lvbiA8IDUuNSlcbiAgICAgICAgICAgICAgICAvXlxccypmdW5jdGlvblxccypTdHJpbmdcXChcXClcXHMqe1xccypcXFtuYXRpdmUgY29kZVxcXVxccyp9XFxzKiQvLnRlc3Qoc3RyLmNvbnN0cnVjdG9yKVxuICAgICAgICAgICAgICBAZWxzZSBAKi9cbiAgICAgICAgICAgICAgICBpc1N0cmluZyhzdHIpXG4gICAgICAgICAgICAgIC8qQGVuZFxuICAgICAgICAgICAgQCovXG4gICAgICAgICAgICB8fCBmYWxzZTtcbiAgfTtcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2lzc3RyaW5nL2lzU3RyaW5nLnVtZC5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gKGFycikge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFycikgPT0gJ1tvYmplY3QgQXJyYXldJztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vaXNhcnJheS9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuZnVuY3Rpb24gRXZlbnRFbWl0dGVyKCkge1xuICB0aGlzLl9ldmVudHMgPSB0aGlzLl9ldmVudHMgfHwge307XG4gIHRoaXMuX21heExpc3RlbmVycyA9IHRoaXMuX21heExpc3RlbmVycyB8fCB1bmRlZmluZWQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IEV2ZW50RW1pdHRlcjtcblxuLy8gQmFja3dhcmRzLWNvbXBhdCB3aXRoIG5vZGUgMC4xMC54XG5FdmVudEVtaXR0ZXIuRXZlbnRFbWl0dGVyID0gRXZlbnRFbWl0dGVyO1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLl9ldmVudHMgPSB1bmRlZmluZWQ7XG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLl9tYXhMaXN0ZW5lcnMgPSB1bmRlZmluZWQ7XG5cbi8vIEJ5IGRlZmF1bHQgRXZlbnRFbWl0dGVycyB3aWxsIHByaW50IGEgd2FybmluZyBpZiBtb3JlIHRoYW4gMTAgbGlzdGVuZXJzIGFyZVxuLy8gYWRkZWQgdG8gaXQuIFRoaXMgaXMgYSB1c2VmdWwgZGVmYXVsdCB3aGljaCBoZWxwcyBmaW5kaW5nIG1lbW9yeSBsZWFrcy5cbkV2ZW50RW1pdHRlci5kZWZhdWx0TWF4TGlzdGVuZXJzID0gMTA7XG5cbi8vIE9idmlvdXNseSBub3QgYWxsIEVtaXR0ZXJzIHNob3VsZCBiZSBsaW1pdGVkIHRvIDEwLiBUaGlzIGZ1bmN0aW9uIGFsbG93c1xuLy8gdGhhdCB0byBiZSBpbmNyZWFzZWQuIFNldCB0byB6ZXJvIGZvciB1bmxpbWl0ZWQuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnNldE1heExpc3RlbmVycyA9IGZ1bmN0aW9uKG4pIHtcbiAgaWYgKCFpc051bWJlcihuKSB8fCBuIDwgMCB8fCBpc05hTihuKSlcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ24gbXVzdCBiZSBhIHBvc2l0aXZlIG51bWJlcicpO1xuICB0aGlzLl9tYXhMaXN0ZW5lcnMgPSBuO1xuICByZXR1cm4gdGhpcztcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuZW1pdCA9IGZ1bmN0aW9uKHR5cGUpIHtcbiAgdmFyIGVyLCBoYW5kbGVyLCBsZW4sIGFyZ3MsIGksIGxpc3RlbmVycztcblxuICBpZiAoIXRoaXMuX2V2ZW50cylcbiAgICB0aGlzLl9ldmVudHMgPSB7fTtcblxuICAvLyBJZiB0aGVyZSBpcyBubyAnZXJyb3InIGV2ZW50IGxpc3RlbmVyIHRoZW4gdGhyb3cuXG4gIGlmICh0eXBlID09PSAnZXJyb3InKSB7XG4gICAgaWYgKCF0aGlzLl9ldmVudHMuZXJyb3IgfHxcbiAgICAgICAgKGlzT2JqZWN0KHRoaXMuX2V2ZW50cy5lcnJvcikgJiYgIXRoaXMuX2V2ZW50cy5lcnJvci5sZW5ndGgpKSB7XG4gICAgICBlciA9IGFyZ3VtZW50c1sxXTtcbiAgICAgIGlmIChlciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgIHRocm93IGVyOyAvLyBVbmhhbmRsZWQgJ2Vycm9yJyBldmVudFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gQXQgbGVhc3QgZ2l2ZSBzb21lIGtpbmQgb2YgY29udGV4dCB0byB0aGUgdXNlclxuICAgICAgICB2YXIgZXJyID0gbmV3IEVycm9yKCdVbmNhdWdodCwgdW5zcGVjaWZpZWQgXCJlcnJvclwiIGV2ZW50LiAoJyArIGVyICsgJyknKTtcbiAgICAgICAgZXJyLmNvbnRleHQgPSBlcjtcbiAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGhhbmRsZXIgPSB0aGlzLl9ldmVudHNbdHlwZV07XG5cbiAgaWYgKGlzVW5kZWZpbmVkKGhhbmRsZXIpKVxuICAgIHJldHVybiBmYWxzZTtcblxuICBpZiAoaXNGdW5jdGlvbihoYW5kbGVyKSkge1xuICAgIHN3aXRjaCAoYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgLy8gZmFzdCBjYXNlc1xuICAgICAgY2FzZSAxOlxuICAgICAgICBoYW5kbGVyLmNhbGwodGhpcyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAyOlxuICAgICAgICBoYW5kbGVyLmNhbGwodGhpcywgYXJndW1lbnRzWzFdKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDM6XG4gICAgICAgIGhhbmRsZXIuY2FsbCh0aGlzLCBhcmd1bWVudHNbMV0sIGFyZ3VtZW50c1syXSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgLy8gc2xvd2VyXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICAgICAgaGFuZGxlci5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoaXNPYmplY3QoaGFuZGxlcikpIHtcbiAgICBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICBsaXN0ZW5lcnMgPSBoYW5kbGVyLnNsaWNlKCk7XG4gICAgbGVuID0gbGlzdGVuZXJzLmxlbmd0aDtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspXG4gICAgICBsaXN0ZW5lcnNbaV0uYXBwbHkodGhpcywgYXJncyk7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuYWRkTGlzdGVuZXIgPSBmdW5jdGlvbih0eXBlLCBsaXN0ZW5lcikge1xuICB2YXIgbTtcblxuICBpZiAoIWlzRnVuY3Rpb24obGlzdGVuZXIpKVxuICAgIHRocm93IFR5cGVFcnJvcignbGlzdGVuZXIgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG5cbiAgaWYgKCF0aGlzLl9ldmVudHMpXG4gICAgdGhpcy5fZXZlbnRzID0ge307XG5cbiAgLy8gVG8gYXZvaWQgcmVjdXJzaW9uIGluIHRoZSBjYXNlIHRoYXQgdHlwZSA9PT0gXCJuZXdMaXN0ZW5lclwiISBCZWZvcmVcbiAgLy8gYWRkaW5nIGl0IHRvIHRoZSBsaXN0ZW5lcnMsIGZpcnN0IGVtaXQgXCJuZXdMaXN0ZW5lclwiLlxuICBpZiAodGhpcy5fZXZlbnRzLm5ld0xpc3RlbmVyKVxuICAgIHRoaXMuZW1pdCgnbmV3TGlzdGVuZXInLCB0eXBlLFxuICAgICAgICAgICAgICBpc0Z1bmN0aW9uKGxpc3RlbmVyLmxpc3RlbmVyKSA/XG4gICAgICAgICAgICAgIGxpc3RlbmVyLmxpc3RlbmVyIDogbGlzdGVuZXIpO1xuXG4gIGlmICghdGhpcy5fZXZlbnRzW3R5cGVdKVxuICAgIC8vIE9wdGltaXplIHRoZSBjYXNlIG9mIG9uZSBsaXN0ZW5lci4gRG9uJ3QgbmVlZCB0aGUgZXh0cmEgYXJyYXkgb2JqZWN0LlxuICAgIHRoaXMuX2V2ZW50c1t0eXBlXSA9IGxpc3RlbmVyO1xuICBlbHNlIGlmIChpc09iamVjdCh0aGlzLl9ldmVudHNbdHlwZV0pKVxuICAgIC8vIElmIHdlJ3ZlIGFscmVhZHkgZ290IGFuIGFycmF5LCBqdXN0IGFwcGVuZC5cbiAgICB0aGlzLl9ldmVudHNbdHlwZV0ucHVzaChsaXN0ZW5lcik7XG4gIGVsc2VcbiAgICAvLyBBZGRpbmcgdGhlIHNlY29uZCBlbGVtZW50LCBuZWVkIHRvIGNoYW5nZSB0byBhcnJheS5cbiAgICB0aGlzLl9ldmVudHNbdHlwZV0gPSBbdGhpcy5fZXZlbnRzW3R5cGVdLCBsaXN0ZW5lcl07XG5cbiAgLy8gQ2hlY2sgZm9yIGxpc3RlbmVyIGxlYWtcbiAgaWYgKGlzT2JqZWN0KHRoaXMuX2V2ZW50c1t0eXBlXSkgJiYgIXRoaXMuX2V2ZW50c1t0eXBlXS53YXJuZWQpIHtcbiAgICBpZiAoIWlzVW5kZWZpbmVkKHRoaXMuX21heExpc3RlbmVycykpIHtcbiAgICAgIG0gPSB0aGlzLl9tYXhMaXN0ZW5lcnM7XG4gICAgfSBlbHNlIHtcbiAgICAgIG0gPSBFdmVudEVtaXR0ZXIuZGVmYXVsdE1heExpc3RlbmVycztcbiAgICB9XG5cbiAgICBpZiAobSAmJiBtID4gMCAmJiB0aGlzLl9ldmVudHNbdHlwZV0ubGVuZ3RoID4gbSkge1xuICAgICAgdGhpcy5fZXZlbnRzW3R5cGVdLndhcm5lZCA9IHRydWU7XG4gICAgICBjb25zb2xlLmVycm9yKCcobm9kZSkgd2FybmluZzogcG9zc2libGUgRXZlbnRFbWl0dGVyIG1lbW9yeSAnICtcbiAgICAgICAgICAgICAgICAgICAgJ2xlYWsgZGV0ZWN0ZWQuICVkIGxpc3RlbmVycyBhZGRlZC4gJyArXG4gICAgICAgICAgICAgICAgICAgICdVc2UgZW1pdHRlci5zZXRNYXhMaXN0ZW5lcnMoKSB0byBpbmNyZWFzZSBsaW1pdC4nLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9ldmVudHNbdHlwZV0ubGVuZ3RoKTtcbiAgICAgIGlmICh0eXBlb2YgY29uc29sZS50cmFjZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAvLyBub3Qgc3VwcG9ydGVkIGluIElFIDEwXG4gICAgICAgIGNvbnNvbGUudHJhY2UoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub24gPSBFdmVudEVtaXR0ZXIucHJvdG90eXBlLmFkZExpc3RlbmVyO1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uY2UgPSBmdW5jdGlvbih0eXBlLCBsaXN0ZW5lcikge1xuICBpZiAoIWlzRnVuY3Rpb24obGlzdGVuZXIpKVxuICAgIHRocm93IFR5cGVFcnJvcignbGlzdGVuZXIgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG5cbiAgdmFyIGZpcmVkID0gZmFsc2U7XG5cbiAgZnVuY3Rpb24gZygpIHtcbiAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKHR5cGUsIGcpO1xuXG4gICAgaWYgKCFmaXJlZCkge1xuICAgICAgZmlyZWQgPSB0cnVlO1xuICAgICAgbGlzdGVuZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH1cblxuICBnLmxpc3RlbmVyID0gbGlzdGVuZXI7XG4gIHRoaXMub24odHlwZSwgZyk7XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vLyBlbWl0cyBhICdyZW1vdmVMaXN0ZW5lcicgZXZlbnQgaWZmIHRoZSBsaXN0ZW5lciB3YXMgcmVtb3ZlZFxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lciA9IGZ1bmN0aW9uKHR5cGUsIGxpc3RlbmVyKSB7XG4gIHZhciBsaXN0LCBwb3NpdGlvbiwgbGVuZ3RoLCBpO1xuXG4gIGlmICghaXNGdW5jdGlvbihsaXN0ZW5lcikpXG4gICAgdGhyb3cgVHlwZUVycm9yKCdsaXN0ZW5lciBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcblxuICBpZiAoIXRoaXMuX2V2ZW50cyB8fCAhdGhpcy5fZXZlbnRzW3R5cGVdKVxuICAgIHJldHVybiB0aGlzO1xuXG4gIGxpc3QgPSB0aGlzLl9ldmVudHNbdHlwZV07XG4gIGxlbmd0aCA9IGxpc3QubGVuZ3RoO1xuICBwb3NpdGlvbiA9IC0xO1xuXG4gIGlmIChsaXN0ID09PSBsaXN0ZW5lciB8fFxuICAgICAgKGlzRnVuY3Rpb24obGlzdC5saXN0ZW5lcikgJiYgbGlzdC5saXN0ZW5lciA9PT0gbGlzdGVuZXIpKSB7XG4gICAgZGVsZXRlIHRoaXMuX2V2ZW50c1t0eXBlXTtcbiAgICBpZiAodGhpcy5fZXZlbnRzLnJlbW92ZUxpc3RlbmVyKVxuICAgICAgdGhpcy5lbWl0KCdyZW1vdmVMaXN0ZW5lcicsIHR5cGUsIGxpc3RlbmVyKTtcblxuICB9IGVsc2UgaWYgKGlzT2JqZWN0KGxpc3QpKSB7XG4gICAgZm9yIChpID0gbGVuZ3RoOyBpLS0gPiAwOykge1xuICAgICAgaWYgKGxpc3RbaV0gPT09IGxpc3RlbmVyIHx8XG4gICAgICAgICAgKGxpc3RbaV0ubGlzdGVuZXIgJiYgbGlzdFtpXS5saXN0ZW5lciA9PT0gbGlzdGVuZXIpKSB7XG4gICAgICAgIHBvc2l0aW9uID0gaTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHBvc2l0aW9uIDwgMClcbiAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgaWYgKGxpc3QubGVuZ3RoID09PSAxKSB7XG4gICAgICBsaXN0Lmxlbmd0aCA9IDA7XG4gICAgICBkZWxldGUgdGhpcy5fZXZlbnRzW3R5cGVdO1xuICAgIH0gZWxzZSB7XG4gICAgICBsaXN0LnNwbGljZShwb3NpdGlvbiwgMSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2V2ZW50cy5yZW1vdmVMaXN0ZW5lcilcbiAgICAgIHRoaXMuZW1pdCgncmVtb3ZlTGlzdGVuZXInLCB0eXBlLCBsaXN0ZW5lcik7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlQWxsTGlzdGVuZXJzID0gZnVuY3Rpb24odHlwZSkge1xuICB2YXIga2V5LCBsaXN0ZW5lcnM7XG5cbiAgaWYgKCF0aGlzLl9ldmVudHMpXG4gICAgcmV0dXJuIHRoaXM7XG5cbiAgLy8gbm90IGxpc3RlbmluZyBmb3IgcmVtb3ZlTGlzdGVuZXIsIG5vIG5lZWQgdG8gZW1pdFxuICBpZiAoIXRoaXMuX2V2ZW50cy5yZW1vdmVMaXN0ZW5lcikge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKVxuICAgICAgdGhpcy5fZXZlbnRzID0ge307XG4gICAgZWxzZSBpZiAodGhpcy5fZXZlbnRzW3R5cGVdKVxuICAgICAgZGVsZXRlIHRoaXMuX2V2ZW50c1t0eXBlXTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8vIGVtaXQgcmVtb3ZlTGlzdGVuZXIgZm9yIGFsbCBsaXN0ZW5lcnMgb24gYWxsIGV2ZW50c1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgIGZvciAoa2V5IGluIHRoaXMuX2V2ZW50cykge1xuICAgICAgaWYgKGtleSA9PT0gJ3JlbW92ZUxpc3RlbmVyJykgY29udGludWU7XG4gICAgICB0aGlzLnJlbW92ZUFsbExpc3RlbmVycyhrZXkpO1xuICAgIH1cbiAgICB0aGlzLnJlbW92ZUFsbExpc3RlbmVycygncmVtb3ZlTGlzdGVuZXInKTtcbiAgICB0aGlzLl9ldmVudHMgPSB7fTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGxpc3RlbmVycyA9IHRoaXMuX2V2ZW50c1t0eXBlXTtcblxuICBpZiAoaXNGdW5jdGlvbihsaXN0ZW5lcnMpKSB7XG4gICAgdGhpcy5yZW1vdmVMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcnMpO1xuICB9IGVsc2UgaWYgKGxpc3RlbmVycykge1xuICAgIC8vIExJRk8gb3JkZXJcbiAgICB3aGlsZSAobGlzdGVuZXJzLmxlbmd0aClcbiAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXJzW2xpc3RlbmVycy5sZW5ndGggLSAxXSk7XG4gIH1cbiAgZGVsZXRlIHRoaXMuX2V2ZW50c1t0eXBlXTtcblxuICByZXR1cm4gdGhpcztcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUubGlzdGVuZXJzID0gZnVuY3Rpb24odHlwZSkge1xuICB2YXIgcmV0O1xuICBpZiAoIXRoaXMuX2V2ZW50cyB8fCAhdGhpcy5fZXZlbnRzW3R5cGVdKVxuICAgIHJldCA9IFtdO1xuICBlbHNlIGlmIChpc0Z1bmN0aW9uKHRoaXMuX2V2ZW50c1t0eXBlXSkpXG4gICAgcmV0ID0gW3RoaXMuX2V2ZW50c1t0eXBlXV07XG4gIGVsc2VcbiAgICByZXQgPSB0aGlzLl9ldmVudHNbdHlwZV0uc2xpY2UoKTtcbiAgcmV0dXJuIHJldDtcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUubGlzdGVuZXJDb3VudCA9IGZ1bmN0aW9uKHR5cGUpIHtcbiAgaWYgKHRoaXMuX2V2ZW50cykge1xuICAgIHZhciBldmxpc3RlbmVyID0gdGhpcy5fZXZlbnRzW3R5cGVdO1xuXG4gICAgaWYgKGlzRnVuY3Rpb24oZXZsaXN0ZW5lcikpXG4gICAgICByZXR1cm4gMTtcbiAgICBlbHNlIGlmIChldmxpc3RlbmVyKVxuICAgICAgcmV0dXJuIGV2bGlzdGVuZXIubGVuZ3RoO1xuICB9XG4gIHJldHVybiAwO1xufTtcblxuRXZlbnRFbWl0dGVyLmxpc3RlbmVyQ291bnQgPSBmdW5jdGlvbihlbWl0dGVyLCB0eXBlKSB7XG4gIHJldHVybiBlbWl0dGVyLmxpc3RlbmVyQ291bnQodHlwZSk7XG59O1xuXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ2Z1bmN0aW9uJztcbn1cblxuZnVuY3Rpb24gaXNOdW1iZXIoYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnbnVtYmVyJztcbn1cblxuZnVuY3Rpb24gaXNPYmplY3QoYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnb2JqZWN0JyAmJiBhcmcgIT09IG51bGw7XG59XG5cbmZ1bmN0aW9uIGlzVW5kZWZpbmVkKGFyZykge1xuICByZXR1cm4gYXJnID09PSB2b2lkIDA7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZXZlbnRzL2V2ZW50cy5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBpZiAodHlwZW9mIHJlcXVpcmUgIT09ICd1bmRlZmluZWQnKSB7fVxuXG52YXIgaXNGdW5jdGlvbiA9IGZ1bmN0aW9uIChmdW5jdGlvblRvQ2hlY2spIHtcblx0dmFyIGdldFR5cGUgPSB7fTtcblx0cmV0dXJuIGZ1bmN0aW9uVG9DaGVjayAmJiBnZXRUeXBlLnRvU3RyaW5nLmNhbGwoZnVuY3Rpb25Ub0NoZWNrKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcbn07XG5cbmlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRtb2R1bGUuZXhwb3J0cyA9IGlzRnVuY3Rpb247XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2lzZnVuY3Rpb24vbGliL21haW4uanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2xpYi9pbmRleCcpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Nob3J0aWQvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYWxwaGFiZXQgPSByZXF1aXJlKCcuL2FscGhhYmV0Jyk7XG52YXIgZW5jb2RlID0gcmVxdWlyZSgnLi9lbmNvZGUnKTtcbnZhciBkZWNvZGUgPSByZXF1aXJlKCcuL2RlY29kZScpO1xudmFyIGJ1aWxkID0gcmVxdWlyZSgnLi9idWlsZCcpO1xudmFyIGlzVmFsaWQgPSByZXF1aXJlKCcuL2lzLXZhbGlkJyk7XG5cbi8vIGlmIHlvdSBhcmUgdXNpbmcgY2x1c3RlciBvciBtdWx0aXBsZSBzZXJ2ZXJzIHVzZSB0aGlzIHRvIG1ha2UgZWFjaCBpbnN0YW5jZVxuLy8gaGFzIGEgdW5pcXVlIHZhbHVlIGZvciB3b3JrZXJcbi8vIE5vdGU6IEkgZG9uJ3Qga25vdyBpZiB0aGlzIGlzIGF1dG9tYXRpY2FsbHkgc2V0IHdoZW4gdXNpbmcgdGhpcmRcbi8vIHBhcnR5IGNsdXN0ZXIgc29sdXRpb25zIHN1Y2ggYXMgcG0yLlxudmFyIGNsdXN0ZXJXb3JrZXJJZCA9IHJlcXVpcmUoJy4vdXRpbC9jbHVzdGVyLXdvcmtlci1pZCcpIHx8IDA7XG5cbi8qKlxuICogU2V0IHRoZSBzZWVkLlxuICogSGlnaGx5IHJlY29tbWVuZGVkIGlmIHlvdSBkb24ndCB3YW50IHBlb3BsZSB0byB0cnkgdG8gZmlndXJlIG91dCB5b3VyIGlkIHNjaGVtYS5cbiAqIGV4cG9zZWQgYXMgc2hvcnRpZC5zZWVkKGludClcbiAqIEBwYXJhbSBzZWVkIEludGVnZXIgdmFsdWUgdG8gc2VlZCB0aGUgcmFuZG9tIGFscGhhYmV0LiAgQUxXQVlTIFVTRSBUSEUgU0FNRSBTRUVEIG9yIHlvdSBtaWdodCBnZXQgb3ZlcmxhcHMuXG4gKi9cbmZ1bmN0aW9uIHNlZWQoc2VlZFZhbHVlKSB7XG4gICAgYWxwaGFiZXQuc2VlZChzZWVkVmFsdWUpO1xuICAgIHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLyoqXG4gKiBTZXQgdGhlIGNsdXN0ZXIgd29ya2VyIG9yIG1hY2hpbmUgaWRcbiAqIGV4cG9zZWQgYXMgc2hvcnRpZC53b3JrZXIoaW50KVxuICogQHBhcmFtIHdvcmtlcklkIHdvcmtlciBtdXN0IGJlIHBvc2l0aXZlIGludGVnZXIuICBOdW1iZXIgbGVzcyB0aGFuIDE2IGlzIHJlY29tbWVuZGVkLlxuICogcmV0dXJucyBzaG9ydGlkIG1vZHVsZSBzbyBpdCBjYW4gYmUgY2hhaW5lZC5cbiAqL1xuZnVuY3Rpb24gd29ya2VyKHdvcmtlcklkKSB7XG4gICAgY2x1c3RlcldvcmtlcklkID0gd29ya2VySWQ7XG4gICAgcmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vKipcbiAqXG4gKiBzZXRzIG5ldyBjaGFyYWN0ZXJzIHRvIHVzZSBpbiB0aGUgYWxwaGFiZXRcbiAqIHJldHVybnMgdGhlIHNodWZmbGVkIGFscGhhYmV0XG4gKi9cbmZ1bmN0aW9uIGNoYXJhY3RlcnMobmV3Q2hhcmFjdGVycykge1xuICAgIGlmIChuZXdDaGFyYWN0ZXJzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgYWxwaGFiZXQuY2hhcmFjdGVycyhuZXdDaGFyYWN0ZXJzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWxwaGFiZXQuc2h1ZmZsZWQoKTtcbn1cblxuLyoqXG4gKiBHZW5lcmF0ZSB1bmlxdWUgaWRcbiAqIFJldHVybnMgc3RyaW5nIGlkXG4gKi9cbmZ1bmN0aW9uIGdlbmVyYXRlKCkge1xuICByZXR1cm4gYnVpbGQoY2x1c3RlcldvcmtlcklkKTtcbn1cblxuLy8gRXhwb3J0IGFsbCBvdGhlciBmdW5jdGlvbnMgYXMgcHJvcGVydGllcyBvZiB0aGUgZ2VuZXJhdGUgZnVuY3Rpb25cbm1vZHVsZS5leHBvcnRzID0gZ2VuZXJhdGU7XG5tb2R1bGUuZXhwb3J0cy5nZW5lcmF0ZSA9IGdlbmVyYXRlO1xubW9kdWxlLmV4cG9ydHMuc2VlZCA9IHNlZWQ7XG5tb2R1bGUuZXhwb3J0cy53b3JrZXIgPSB3b3JrZXI7XG5tb2R1bGUuZXhwb3J0cy5jaGFyYWN0ZXJzID0gY2hhcmFjdGVycztcbm1vZHVsZS5leHBvcnRzLmRlY29kZSA9IGRlY29kZTtcbm1vZHVsZS5leHBvcnRzLmlzVmFsaWQgPSBpc1ZhbGlkO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Nob3J0aWQvbGliL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxudmFyIHJhbmRvbUZyb21TZWVkID0gcmVxdWlyZSgnLi9yYW5kb20vcmFuZG9tLWZyb20tc2VlZCcpO1xuXG52YXIgT1JJR0lOQUwgPSAnMDEyMzQ1Njc4OWFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6QUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVpfLSc7XG52YXIgYWxwaGFiZXQ7XG52YXIgcHJldmlvdXNTZWVkO1xuXG52YXIgc2h1ZmZsZWQ7XG5cbmZ1bmN0aW9uIHJlc2V0KCkge1xuICAgIHNodWZmbGVkID0gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIHNldENoYXJhY3RlcnMoX2FscGhhYmV0Xykge1xuICAgIGlmICghX2FscGhhYmV0Xykge1xuICAgICAgICBpZiAoYWxwaGFiZXQgIT09IE9SSUdJTkFMKSB7XG4gICAgICAgICAgICBhbHBoYWJldCA9IE9SSUdJTkFMO1xuICAgICAgICAgICAgcmVzZXQoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKF9hbHBoYWJldF8gPT09IGFscGhhYmV0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoX2FscGhhYmV0Xy5sZW5ndGggIT09IE9SSUdJTkFMLmxlbmd0aCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0N1c3RvbSBhbHBoYWJldCBmb3Igc2hvcnRpZCBtdXN0IGJlICcgKyBPUklHSU5BTC5sZW5ndGggKyAnIHVuaXF1ZSBjaGFyYWN0ZXJzLiBZb3Ugc3VibWl0dGVkICcgKyBfYWxwaGFiZXRfLmxlbmd0aCArICcgY2hhcmFjdGVyczogJyArIF9hbHBoYWJldF8pO1xuICAgIH1cblxuICAgIHZhciB1bmlxdWUgPSBfYWxwaGFiZXRfLnNwbGl0KCcnKS5maWx0ZXIoZnVuY3Rpb24oaXRlbSwgaW5kLCBhcnIpe1xuICAgICAgIHJldHVybiBpbmQgIT09IGFyci5sYXN0SW5kZXhPZihpdGVtKTtcbiAgICB9KTtcblxuICAgIGlmICh1bmlxdWUubGVuZ3RoKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQ3VzdG9tIGFscGhhYmV0IGZvciBzaG9ydGlkIG11c3QgYmUgJyArIE9SSUdJTkFMLmxlbmd0aCArICcgdW5pcXVlIGNoYXJhY3RlcnMuIFRoZXNlIGNoYXJhY3RlcnMgd2VyZSBub3QgdW5pcXVlOiAnICsgdW5pcXVlLmpvaW4oJywgJykpO1xuICAgIH1cblxuICAgIGFscGhhYmV0ID0gX2FscGhhYmV0XztcbiAgICByZXNldCgpO1xufVxuXG5mdW5jdGlvbiBjaGFyYWN0ZXJzKF9hbHBoYWJldF8pIHtcbiAgICBzZXRDaGFyYWN0ZXJzKF9hbHBoYWJldF8pO1xuICAgIHJldHVybiBhbHBoYWJldDtcbn1cblxuZnVuY3Rpb24gc2V0U2VlZChzZWVkKSB7XG4gICAgcmFuZG9tRnJvbVNlZWQuc2VlZChzZWVkKTtcbiAgICBpZiAocHJldmlvdXNTZWVkICE9PSBzZWVkKSB7XG4gICAgICAgIHJlc2V0KCk7XG4gICAgICAgIHByZXZpb3VzU2VlZCA9IHNlZWQ7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBzaHVmZmxlKCkge1xuICAgIGlmICghYWxwaGFiZXQpIHtcbiAgICAgICAgc2V0Q2hhcmFjdGVycyhPUklHSU5BTCk7XG4gICAgfVxuXG4gICAgdmFyIHNvdXJjZUFycmF5ID0gYWxwaGFiZXQuc3BsaXQoJycpO1xuICAgIHZhciB0YXJnZXRBcnJheSA9IFtdO1xuICAgIHZhciByID0gcmFuZG9tRnJvbVNlZWQubmV4dFZhbHVlKCk7XG4gICAgdmFyIGNoYXJhY3RlckluZGV4O1xuXG4gICAgd2hpbGUgKHNvdXJjZUFycmF5Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgciA9IHJhbmRvbUZyb21TZWVkLm5leHRWYWx1ZSgpO1xuICAgICAgICBjaGFyYWN0ZXJJbmRleCA9IE1hdGguZmxvb3IociAqIHNvdXJjZUFycmF5Lmxlbmd0aCk7XG4gICAgICAgIHRhcmdldEFycmF5LnB1c2goc291cmNlQXJyYXkuc3BsaWNlKGNoYXJhY3RlckluZGV4LCAxKVswXSk7XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXRBcnJheS5qb2luKCcnKTtcbn1cblxuZnVuY3Rpb24gZ2V0U2h1ZmZsZWQoKSB7XG4gICAgaWYgKHNodWZmbGVkKSB7XG4gICAgICAgIHJldHVybiBzaHVmZmxlZDtcbiAgICB9XG4gICAgc2h1ZmZsZWQgPSBzaHVmZmxlKCk7XG4gICAgcmV0dXJuIHNodWZmbGVkO1xufVxuXG4vKipcbiAqIGxvb2t1cCBzaHVmZmxlZCBsZXR0ZXJcbiAqIEBwYXJhbSBpbmRleFxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gbG9va3VwKGluZGV4KSB7XG4gICAgdmFyIGFscGhhYmV0U2h1ZmZsZWQgPSBnZXRTaHVmZmxlZCgpO1xuICAgIHJldHVybiBhbHBoYWJldFNodWZmbGVkW2luZGV4XTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgY2hhcmFjdGVyczogY2hhcmFjdGVycyxcbiAgICBzZWVkOiBzZXRTZWVkLFxuICAgIGxvb2t1cDogbG9va3VwLFxuICAgIHNodWZmbGVkOiBnZXRTaHVmZmxlZFxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zaG9ydGlkL2xpYi9hbHBoYWJldC5qc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbi8vIEZvdW5kIHRoaXMgc2VlZC1iYXNlZCByYW5kb20gZ2VuZXJhdG9yIHNvbWV3aGVyZVxuLy8gQmFzZWQgb24gVGhlIENlbnRyYWwgUmFuZG9taXplciAxLjMgKEMpIDE5OTcgYnkgUGF1bCBIb3VsZSAoaG91bGVAbXNjLmNvcm5lbGwuZWR1KVxuXG52YXIgc2VlZCA9IDE7XG5cbi8qKlxuICogcmV0dXJuIGEgcmFuZG9tIG51bWJlciBiYXNlZCBvbiBhIHNlZWRcbiAqIEBwYXJhbSBzZWVkXG4gKiBAcmV0dXJucyB7bnVtYmVyfVxuICovXG5mdW5jdGlvbiBnZXROZXh0VmFsdWUoKSB7XG4gICAgc2VlZCA9IChzZWVkICogOTMwMSArIDQ5Mjk3KSAlIDIzMzI4MDtcbiAgICByZXR1cm4gc2VlZC8oMjMzMjgwLjApO1xufVxuXG5mdW5jdGlvbiBzZXRTZWVkKF9zZWVkXykge1xuICAgIHNlZWQgPSBfc2VlZF87XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIG5leHRWYWx1ZTogZ2V0TmV4dFZhbHVlLFxuICAgIHNlZWQ6IHNldFNlZWRcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc2hvcnRpZC9saWIvcmFuZG9tL3JhbmRvbS1mcm9tLXNlZWQuanNcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgcmFuZG9tQnl0ZSA9IHJlcXVpcmUoJy4vcmFuZG9tL3JhbmRvbS1ieXRlJyk7XG5cbmZ1bmN0aW9uIGVuY29kZShsb29rdXAsIG51bWJlcikge1xuICAgIHZhciBsb29wQ291bnRlciA9IDA7XG4gICAgdmFyIGRvbmU7XG5cbiAgICB2YXIgc3RyID0gJyc7XG5cbiAgICB3aGlsZSAoIWRvbmUpIHtcbiAgICAgICAgc3RyID0gc3RyICsgbG9va3VwKCAoIChudW1iZXIgPj4gKDQgKiBsb29wQ291bnRlcikpICYgMHgwZiApIHwgcmFuZG9tQnl0ZSgpICk7XG4gICAgICAgIGRvbmUgPSBudW1iZXIgPCAoTWF0aC5wb3coMTYsIGxvb3BDb3VudGVyICsgMSApICk7XG4gICAgICAgIGxvb3BDb3VudGVyKys7XG4gICAgfVxuICAgIHJldHVybiBzdHI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZW5jb2RlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Nob3J0aWQvbGliL2VuY29kZS5qc1xuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgY3J5cHRvID0gdHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcgJiYgKHdpbmRvdy5jcnlwdG8gfHwgd2luZG93Lm1zQ3J5cHRvKTsgLy8gSUUgMTEgdXNlcyB3aW5kb3cubXNDcnlwdG9cblxuZnVuY3Rpb24gcmFuZG9tQnl0ZSgpIHtcbiAgICBpZiAoIWNyeXB0byB8fCAhY3J5cHRvLmdldFJhbmRvbVZhbHVlcykge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjU2KSAmIDB4MzA7XG4gICAgfVxuICAgIHZhciBkZXN0ID0gbmV3IFVpbnQ4QXJyYXkoMSk7XG4gICAgY3J5cHRvLmdldFJhbmRvbVZhbHVlcyhkZXN0KTtcbiAgICByZXR1cm4gZGVzdFswXSAmIDB4MzA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcmFuZG9tQnl0ZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zaG9ydGlkL2xpYi9yYW5kb20vcmFuZG9tLWJ5dGUtYnJvd3Nlci5qc1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFscGhhYmV0ID0gcmVxdWlyZSgnLi9hbHBoYWJldCcpO1xuXG4vKipcbiAqIERlY29kZSB0aGUgaWQgdG8gZ2V0IHRoZSB2ZXJzaW9uIGFuZCB3b3JrZXJcbiAqIE1haW5seSBmb3IgZGVidWdnaW5nIGFuZCB0ZXN0aW5nLlxuICogQHBhcmFtIGlkIC0gdGhlIHNob3J0aWQtZ2VuZXJhdGVkIGlkLlxuICovXG5mdW5jdGlvbiBkZWNvZGUoaWQpIHtcbiAgICB2YXIgY2hhcmFjdGVycyA9IGFscGhhYmV0LnNodWZmbGVkKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdmVyc2lvbjogY2hhcmFjdGVycy5pbmRleE9mKGlkLnN1YnN0cigwLCAxKSkgJiAweDBmLFxuICAgICAgICB3b3JrZXI6IGNoYXJhY3RlcnMuaW5kZXhPZihpZC5zdWJzdHIoMSwgMSkpICYgMHgwZlxuICAgIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZGVjb2RlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Nob3J0aWQvbGliL2RlY29kZS5qc1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZW5jb2RlID0gcmVxdWlyZSgnLi9lbmNvZGUnKTtcbnZhciBhbHBoYWJldCA9IHJlcXVpcmUoJy4vYWxwaGFiZXQnKTtcblxuLy8gSWdub3JlIGFsbCBtaWxsaXNlY29uZHMgYmVmb3JlIGEgY2VydGFpbiB0aW1lIHRvIHJlZHVjZSB0aGUgc2l6ZSBvZiB0aGUgZGF0ZSBlbnRyb3B5IHdpdGhvdXQgc2FjcmlmaWNpbmcgdW5pcXVlbmVzcy5cbi8vIFRoaXMgbnVtYmVyIHNob3VsZCBiZSB1cGRhdGVkIGV2ZXJ5IHllYXIgb3Igc28gdG8ga2VlcCB0aGUgZ2VuZXJhdGVkIGlkIHNob3J0LlxuLy8gVG8gcmVnZW5lcmF0ZSBgbmV3IERhdGUoKSAtIDBgIGFuZCBidW1wIHRoZSB2ZXJzaW9uLiBBbHdheXMgYnVtcCB0aGUgdmVyc2lvbiFcbnZhciBSRURVQ0VfVElNRSA9IDE0NTk3MDc2MDY1MTg7XG5cbi8vIGRvbid0IGNoYW5nZSB1bmxlc3Mgd2UgY2hhbmdlIHRoZSBhbGdvcyBvciBSRURVQ0VfVElNRVxuLy8gbXVzdCBiZSBhbiBpbnRlZ2VyIGFuZCBsZXNzIHRoYW4gMTZcbnZhciB2ZXJzaW9uID0gNjtcblxuLy8gQ291bnRlciBpcyB1c2VkIHdoZW4gc2hvcnRpZCBpcyBjYWxsZWQgbXVsdGlwbGUgdGltZXMgaW4gb25lIHNlY29uZC5cbnZhciBjb3VudGVyO1xuXG4vLyBSZW1lbWJlciB0aGUgbGFzdCB0aW1lIHNob3J0aWQgd2FzIGNhbGxlZCBpbiBjYXNlIGNvdW50ZXIgaXMgbmVlZGVkLlxudmFyIHByZXZpb3VzU2Vjb25kcztcblxuLyoqXG4gKiBHZW5lcmF0ZSB1bmlxdWUgaWRcbiAqIFJldHVybnMgc3RyaW5nIGlkXG4gKi9cbmZ1bmN0aW9uIGJ1aWxkKGNsdXN0ZXJXb3JrZXJJZCkge1xuXG4gICAgdmFyIHN0ciA9ICcnO1xuXG4gICAgdmFyIHNlY29uZHMgPSBNYXRoLmZsb29yKChEYXRlLm5vdygpIC0gUkVEVUNFX1RJTUUpICogMC4wMDEpO1xuXG4gICAgaWYgKHNlY29uZHMgPT09IHByZXZpb3VzU2Vjb25kcykge1xuICAgICAgICBjb3VudGVyKys7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY291bnRlciA9IDA7XG4gICAgICAgIHByZXZpb3VzU2Vjb25kcyA9IHNlY29uZHM7XG4gICAgfVxuXG4gICAgc3RyID0gc3RyICsgZW5jb2RlKGFscGhhYmV0Lmxvb2t1cCwgdmVyc2lvbik7XG4gICAgc3RyID0gc3RyICsgZW5jb2RlKGFscGhhYmV0Lmxvb2t1cCwgY2x1c3RlcldvcmtlcklkKTtcbiAgICBpZiAoY291bnRlciA+IDApIHtcbiAgICAgICAgc3RyID0gc3RyICsgZW5jb2RlKGFscGhhYmV0Lmxvb2t1cCwgY291bnRlcik7XG4gICAgfVxuICAgIHN0ciA9IHN0ciArIGVuY29kZShhbHBoYWJldC5sb29rdXAsIHNlY29uZHMpO1xuXG4gICAgcmV0dXJuIHN0cjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBidWlsZDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zaG9ydGlkL2xpYi9idWlsZC5qc1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFscGhhYmV0ID0gcmVxdWlyZSgnLi9hbHBoYWJldCcpO1xuXG5mdW5jdGlvbiBpc1Nob3J0SWQoaWQpIHtcbiAgICBpZiAoIWlkIHx8IHR5cGVvZiBpZCAhPT0gJ3N0cmluZycgfHwgaWQubGVuZ3RoIDwgNiApIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHZhciBjaGFyYWN0ZXJzID0gYWxwaGFiZXQuY2hhcmFjdGVycygpO1xuICAgIHZhciBsZW4gPSBpZC5sZW5ndGg7XG4gICAgZm9yKHZhciBpID0gMDsgaSA8IGxlbjtpKyspIHtcbiAgICAgICAgaWYgKGNoYXJhY3RlcnMuaW5kZXhPZihpZFtpXSkgPT09IC0xKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNTaG9ydElkO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Nob3J0aWQvbGliL2lzLXZhbGlkLmpzXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gMDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zaG9ydGlkL2xpYi91dGlsL2NsdXN0ZXItd29ya2VyLWlkLWJyb3dzZXIuanNcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXHJcbiAqIENvcHlyaWdodCAoYykgIDIwMTcgQ2FpcGkgTGFicyAuXHJcbiAqXHJcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcbiAqXHJcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG4gKlxyXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cclxuICovXHJcblxyXG4vKipcclxuICogVWx0cmEgc2NhbGFibGUgc3RhdGUtYXdhcmUgc3RvcmVcclxuICpcclxuICogQHRvZG8gOiBsb3Qgb2Ygb3B0aW1zLi4uXHJcbiAqL1xyXG5cclxudmFyIGlzU3RyaW5nICAgICA9IHJlcXVpcmUoJ2lzc3RyaW5nJylcclxuICAgICwgaXNBcnJheSAgICA9IHJlcXVpcmUoJ2lzYXJyYXknKVxyXG4gICAgLCBpc0Z1bmN0aW9uID0gcmVxdWlyZSgnaXNmdW5jdGlvbicpXHJcbiAgICAsXHJcbiAgICBDb250ZXh0ICAgICAgPSByZXF1aXJlKCcuL0NvbnRleHQnKSxcclxuICAgIEV2ZW50RW1pdHRlciA9IHJlcXVpcmUoJ2V2ZW50cycpLFxyXG4gICAgc2hvcnRpZCAgICAgID0gcmVxdWlyZSgnc2hvcnRpZCcpLFxyXG4gICAgb2JqUHJvdG8gICAgID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHt9KSxcclxuICAgIG9wZW5Db250ZXh0cyA9IHt9O1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0b3JlIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcclxuXHJcbiAgICBzdGF0aWMgdXNlICAgICAgICAgICAgICAgICAgICAgICAgPSBbXTsvLyBvdmVycmlkYWJsZSBsaXN0IG9mIHNvdXJjZSBzdG9yZXNcclxuICAgIHN0YXRpYyBmb2xsb3c7Ly8gb3ZlcnJpZGFibGUgbGlzdCBvZiBzdG9yZSB0aGF0IHdpbGwgYWxsb3cgcHVzaCBpZiB1cGRhdGVkXHJcbiAgICBzdGF0aWMgcmVxdWlyZTtcclxuICAgIHN0YXRpYyBzdGF0aWNDb250ZXh0ICAgICAgICAgICAgICA9IG5ldyBDb250ZXh0KHt9LCB7aWQgOiBcInN0YXRpY1wifSk7XHJcbiAgICBzdGF0aWMgaW5pdGlhbFN0YXRlICAgICAgICAgICAgICAgPSB1bmRlZmluZWQ7Ly8gZGVmYXVsdCBzdGF0ZVxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHR5cGUge251bWJlcn1cclxuICAgICAqL1xyXG4gICAgICAgICAgIHN0YXRpYyBkZWZhdWx0TWF4TGlzdGVuZXJzID0gMTAwO1xyXG4gICAgLyoqXHJcbiAgICAgKiBpZiByZXRhaW4gZ29lcyB0byAwIDpcclxuICAgICAqIGZhbHNlIHRvIG5vdCBkZXN0cm95LFxyXG4gICAgICogMCB0byBzeW5jIGF1dG8gZGVzdHJveVxyXG4gICAgICogTXMgdG8gYXV0b2Rlc3Ryb3kgYWZ0ZXIgdG0gbXMgaWYgbm8gcmV0YWluIGhhcyBiZWVuIGNhbGxlZFxyXG4gICAgICogQHR5cGUge2Jvb2xlYW58SW50fVxyXG4gICAgICovXHJcbiAgICAgICAgICAgc3RhdGljIHBlcnNpc3RlbmNlVG0gICAgICAgPSBmYWxzZTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIGdldCBhIEJ1aWxkZXIta2V5IHBhaXIgZm9yIFN0b3JlOjptYXBcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXHJcbiAgICAgKiBAcmV0dXJucyB7e3N0b3JlOiBTdG9yZSwgbmFtZTogKn19XHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBhcyggbmFtZSApIHtcclxuICAgICAgICByZXR1cm4ge3N0b3JlIDogdGhpcywgbmFtZX07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBNYXAgYWxsIG5hbWVkIHN0b3JlcyBpbiB7a2V5c30gdG8gdGhlIHtvYmplY3R9J3Mgc3RhdGVcclxuICAgICAqIEhvb2sgY29tcG9uZW50V2lsbFVubW91bnQgKGZvciByZWFjdCBjb21wKSBvciBkZXN0cm95IHRvIHVuQmluZCB0aGVtIGF1dG9tYXRpY2FsbHlcclxuICAgICAqIEBzdGF0aWNcclxuICAgICAqIEBwYXJhbSBvYmplY3Qge1JlYWN0LkNvbXBvbmVudHxTdG9yZXwuLi59IHRhcmdldCBzdGF0ZSBhd2FyZSBvYmplY3RcclxuICAgICAqIEBwYXJhbSBrZXlzIHtBcnJheX0gRXggOiBbXCJzZXNzaW9uXCIsIFwib3RoZXJTdGF0aWNOYW1lZFN0b3JlOmtleVwiLCBzdG9yZS5hcygnYW5vdGhlcktleScpXVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgbWFwKCBjb21wb25lbnQsIGtleXMsIGNvbnRleHQsIG9yaWdpbiwgc2V0SW5pdGlhbCA9IGZhbHNlICkge1xyXG4gICAgICAgIHZhciB0YXJnZXRSZXZzICAgICA9IGNvbXBvbmVudC5fcmV2cyB8fCB7fTtcclxuICAgICAgICAvLyB2YXIgdGFyZ2V0Q29udGV4dCAgPSBjb21wb25lbnQuc3RvcmVzIHx8IChjb21wb25lbnQuc3RvcmVzID0gbmV3IENvbnRleHQoe30pKTtcclxuICAgICAgICB2YXIgaW5pdGlhbE91dHB1dHMgPSB7fTtcclxuICAgICAgICBrZXlzICAgICAgICAgICAgICAgPSBpc0FycmF5KGtleXMpID8gWy4uLmtleXNdIDogW2tleXNdO1xyXG5cclxuXHJcbiAgICAgICAgY29udGV4dCA9IGNvbnRleHQgfHwgU3RvcmUuc3RhdGljQ29udGV4dDtcclxuXHJcbiAgICAgICAgLy8gaWYgKCF0YXJnZXRDb250ZXh0Ll9fY29udGV4dClcclxuICAgICAgICAvLyAgICAgZGVidWdnZXI7XHJcblxyXG4gICAgICAgIGtleXMgICAgICAgICAgID0ga2V5cy5maWx0ZXIoXHJcbiAgICAgICAgICAgIC8vIEB0b2RvIDogdXNlIHF1ZXJ5IHJlZnNcclxuICAgICAgICAgICAgLy8gKHN0b3JlKShcXC5zdG9yZSkqKFxcWyhcXCp8KHByb3BzKVxcdyspKylcXF0pPyhcXDphbGlhcylcclxuICAgICAgICAgICAgKCBrZXkgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoICFrZXkgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIk5vdCBhIG1hcHBhYmxlIHN0b3JlIGl0ZW0gJ1wiICsga2V5ICsgXCInIGluIFwiICsgb3JpZ2luICsgJyAhIScpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGxldCBuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIGFsaWFzLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0b3JlO1xyXG4gICAgICAgICAgICAgICAgaWYgKCBrZXkuc3RvcmUgJiYga2V5Lm5hbWUgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpYXMgPSBuYW1lID0ga2V5Lm5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RvcmUgPSBrZXkuc3RvcmU7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCBpc0Z1bmN0aW9uKGtleSkgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZSA9IGFsaWFzID0ga2V5Lm5hbWUgfHwga2V5LmRlZmF1bHROYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIHN0b3JlID0ga2V5O1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBrZXkgICA9IGtleS5tYXRjaCgvKFtcXHdfXSspKD86XFw6XFxbKFxcKilcXF0pPyg/OlxcOihcXCopKT8vKTtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lICA9IGtleVswXTtcclxuICAgICAgICAgICAgICAgICAgICBzdG9yZSA9IGNvbnRleHQuX19jb250ZXh0W2tleVswXV07XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpYXMgPSBrZXlbMV0gPT0gJyonID8gbnVsbCA6IGtleVsyXSB8fCBrZXlbMF07Ly8gYWxsb3cgYmluZGluZyBwcm9wcyAgKFsqXSlcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIHRhcmdldFJldnNbbmFtZV0gKSByZXR1cm4gZmFsc2U7Ly8gaWdub3JlIGRibCB1c2VzIGZvciBub3dcclxuICAgICAgICAgICAgICAgIGlmICggIXN0b3JlICkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJOb3QgYSBtYXBwYWJsZSBzdG9yZSBpdGVtICdcIiArIG5hbWUgKyBcIi9cIiArIGFsaWFzICsgXCInIGluIFwiICsgb3JpZ2luICsgJyAhIScsIHN0b3JlKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCBpc0Z1bmN0aW9uKHN0b3JlKSApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdW50U3RvcmUobmFtZSwgY29udGV4dClcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5fX2NvbnRleHRbbmFtZV0uYmluZChjb21wb25lbnQsIGFsaWFzLCBzZXRJbml0aWFsKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBpZiAoIGNvbnRleHQuX19jb250ZXh0W2tleVswXV0uc3RhdGUgKSB7Ly8gZG8gc3luYyBwdXNoIGFmdGVyIGNvbnN0cnVjdG9yXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGNvbnRleHQuX19jb250ZXh0W2tleVswXV0ucHVzaCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RvcmUuYmluZChjb21wb25lbnQsIGFsaWFzLCBzZXRJbml0aWFsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRhcmdldFJldnNbYWxpYXNdID0gdGFyZ2V0UmV2c1thbGlhc10gfHwgdHJ1ZTtcclxuICAgICAgICAgICAgICAgIC8vICF0YXJnZXRDb250ZXh0Ll9fY29udGV4dFthbGlhc10gJiYgdGFyZ2V0Q29udGV4dC5yZWdpc3Rlcih7W2FsaWFzXSA6IGNvbnRleHQuX19jb250ZXh0W25hbWVdfSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIGNvbnRleHQuX19jb250ZXh0W25hbWVdLmhhc093blByb3BlcnR5KCdkYXRhcycpIClcclxuICAgICAgICAgICAgICAgICAgICBpbml0aWFsT3V0cHV0c1thbGlhc10gPSBjb250ZXh0LmRhdGFzW25hbWVdO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICAgIHZhciBtaXhlZENXVW5tb3VudCxcclxuICAgICAgICAgICAgdW5Nb3VudEtleSA9IGNvbXBvbmVudC5pc1JlYWN0Q29tcG9uZW50ID8gXCJjb21wb25lbnRXaWxsVW5tb3VudFwiIDogXCJkZXN0cm95XCI7XHJcblxyXG4gICAgICAgIGlmICggY29tcG9uZW50Lmhhc093blByb3BlcnR5KHVuTW91bnRLZXkpICkge1xyXG4gICAgICAgICAgICBtaXhlZENXVW5tb3VudCA9IGNvbXBvbmVudFt1bk1vdW50S2V5XTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbXBvbmVudFt1bk1vdW50S2V5XSA9IGZ1bmN0aW9uICgpIHsvLyB0b2RvIGhvcFxyXG4gICAgICAgICAgICBkZWxldGUgdGhpc1t1bk1vdW50S2V5XTtcclxuICAgICAgICAgICAgaWYgKCBtaXhlZENXVW5tb3VudCApXHJcbiAgICAgICAgICAgICAgICB0aGlzW3VuTW91bnRLZXldID0gbWl4ZWRDV1VubW91bnQ7XHJcbiAgICAgICAgICAgIGtleXMubWFwKFxyXG4gICAgICAgICAgICAgICAgKCBrZXkgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWFzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9yZTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIGtleS5zdG9yZSAmJiBrZXkubmFtZSApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpYXMgPSBuYW1lID0ga2V5Lm5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlID0ga2V5LnN0b3JlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIGlzRnVuY3Rpb24oa2V5KSApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZSA9IGFsaWFzID0ga2V5Lm5hbWUgfHwga2V5LmRlZmF1bHROYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9yZSA9IGNvbnRleHQuX19jb250ZXh0W25hbWVdO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleSAgID0ga2V5LnNwbGl0KCc6Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUgID0ga2V5WzBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9yZSA9IGNvbnRleHQuX19jb250ZXh0W2tleVswXV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWFzID0ga2V5WzFdIHx8IGtleVswXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHN0b3JlICYmICFpc0Z1bmN0aW9uKHN0b3JlKSAmJiBzdG9yZS51bkJpbmQoY29tcG9uZW50LCBhbGlhcylcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXNbdW5Nb3VudEtleV0gJiYgdGhpc1t1bk1vdW50S2V5XS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGluaXRpYWxPdXRwdXRzO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRDb250ZXh0KCBjb250ZXh0cyApIHtcclxuICAgICAgICBsZXQgc2tleSA9IGlzQXJyYXkoY29udGV4dHMpID8gY29udGV4dHMuc29ydCgoIGEsIGIgKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICggYS5maXJzdG5hbWUgPCBiLmZpcnN0bmFtZSApIHJldHVybiAtMTtcclxuICAgICAgICAgICAgaWYgKCBhLmZpcnN0bmFtZSA+IGIuZmlyc3RuYW1lICkgcmV0dXJuIDE7XHJcbiAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgIH0pLmpvaW4oJzo6JykgOiBjb250ZXh0cztcclxuICAgICAgICByZXR1cm4gQ29udGV4dC5jb250ZXh0c1tza2V5XSA9IENvbnRleHQuY29udGV4dHNbc2tleV0gfHwgbmV3IENvbnRleHQoe30sIHtpZCA6IHNrZXl9KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgbW91bnRTdG9yZSggbmFtZSwgY29udGV4dCwgc3RvcmUsIHN0YXRlLCBkYXRhcyApIHtcclxuICAgICAgICBsZXQgY3R4LCBjb250ZXh0TWFwID0gY29udGV4dC5fX2NvbnRleHQ7XHJcbiAgICAgICAgY29udGV4dE1hcFtuYW1lXSAgICA9IHN0b3JlID0gc3RvcmUgfHwgY29udGV4dE1hcFtuYW1lXTtcclxuICAgICAgICBpZiAoICFzdG9yZSApIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIk5vdCBhIG1hcHBhYmxlIHN0b3JlIGl0ZW0gJ1wiICsgbmFtZSArICcgISEnLCBzdG9yZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9IGVsc2UgaWYgKCBpc0Z1bmN0aW9uKHN0b3JlKSApIHtcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgaWYgKCBzdG9yZSAmJiAoc3RvcmUuY29udGV4dHMgfHwgc3RvcmUuY29udGV4dCkgKSB7XHJcbiAgICAgICAgICAgICAgICBjdHggPSB0aGlzLmdldENvbnRleHQoc3RvcmUuY29udGV4dHMgfHwgW3N0b3JlLmNvbnRleHRdKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjdHgucmVnaXN0ZXIoe1tuYW1lXSA6IGN0eC5fX2NvbnRleHRbbmFtZV0gfHwgc3RvcmV9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb250ZXh0TWFwW25hbWVdID0gY3R4W25hbWVdID0gbmV3IHN0b3JlKGNvbnRleHQsIHtzdGF0ZSwgZGF0YXN9KTtcclxuICAgICAgICAgICAgICAgIGN0eC5fd2F0Y2hTdG9yZShuYW1lKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjdHhbbmFtZV07XHJcbiAgICAgICAgICAgIH0gZWxzZVxyXG4gICAgICAgICAgICAgICAgc3RvcmUgPSBjb250ZXh0TWFwW25hbWVdID0gbmV3IHN0b3JlKGNvbnRleHQsIHtzdGF0ZSwgZGF0YXN9KTtcclxuICAgICAgICAgICAgY29udGV4dE1hcFtuYW1lXS5yZWxpbmsobmFtZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKCBzdGF0ZSAhPT0gdW5kZWZpbmVkICYmIGRhdGFzID09PSB1bmRlZmluZWQgKVxyXG4gICAgICAgICAgICAgICAgc3RvcmUuc2V0U3RhdGUoc3RhdGUpO1xyXG4gICAgICAgICAgICBlbHNlIGlmICggc3RhdGUgIT09IHVuZGVmaW5lZCApXHJcbiAgICAgICAgICAgICAgICBzdG9yZS5zdGF0ZSA9IHN0YXRlO1xyXG5cclxuICAgICAgICAgICAgaWYgKCBkYXRhcyAhPT0gdW5kZWZpbmVkIClcclxuICAgICAgICAgICAgICAgIHN0b3JlLnB1c2goZGF0YXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc3RvcmU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb25zdHJ1Y3Rvciwgd2lsbCBidWlsZCBhIHJlc2NvcGUgc3RvcmVcclxuICAgICAqXHJcbiAgICAgKiAoY29udGV4dCwge3JlcXVpcmUsdXNlLHJlZmluZSxzdGF0ZSwgZGF0YXN9KVxyXG4gICAgICogKGNvbnRleHQpXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGNvbnRleHQge29iamVjdH0gY29udGV4dCB3aGVyZSB0byBmaW5kIHRoZSBvdGhlciBzdG9yZXMgKGRlZmF1bHQgOiBzdGF0aWMgc3RhdGljQ29udGV4dCApXHJcbiAgICAgKiBAcGFyYW0ga2V5cyB7QXJyYXl9IChwYXNzZWQgdG8gU3RvcmU6Om1hcCkgRXggOiBbXCJzZXNzaW9uXCIsIFwib3RoZXJOYW1lZFN0b3JlOmtleVwiLCBvdGhlclN0b3JlLmFzKFwib3RoZXJLZXlcIildXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdmFyIGFyZ3ogICAgICAgICA9IFsuLi5hcmd1bWVudHNdLFxyXG4gICAgICAgICAgICBfc3RhdGljICAgICAgPSB0aGlzLmNvbnN0cnVjdG9yLFxyXG4gICAgICAgICAgICBjb250ZXh0ICAgICAgPSAhaXNBcnJheShhcmd6WzBdKSAmJiAhaXNTdHJpbmcoYXJnelswXSkgPyBhcmd6LnNoaWZ0KCkgOiBfc3RhdGljLnN0YXRpY0NvbnRleHQsXHJcbiAgICAgICAgICAgIGNmZyAgICAgICAgICA9IGFyZ3pbMF0gJiYgIWlzQXJyYXkoYXJnelswXSkgJiYgIWlzU3RyaW5nKGFyZ3pbMF0pID8gYXJnei5zaGlmdCgpIDoge30sXHJcbiAgICAgICAgICAgIG5hbWUgICAgICAgICA9IGlzU3RyaW5nKGFyZ3pbMF0pID8gYXJnelswXSA6IGNmZy5uYW1lIHx8IF9zdGF0aWMubmFtZSxcclxuICAgICAgICAgICAgd2F0Y2hzICAgICAgID0gaXNBcnJheShhcmd6WzBdKSA/IGFyZ3ouc2hpZnQoKSA6IGNmZy51c2UgfHwgW10sLy8gd2F0Y2hzIG5lZWQgdG8gYmUgZGVmaW5lZCBhZnRlciBhbGwgdGhlIHN0b3JlIGFyZSByZWdpc3RlcmVkIDogc28gd2UgY2FuJ3QgZGVhbCB3aXRoIGFueSBcInN0YXRpYyB1c2VcIiBhdXRvbWF0aWNseVxyXG4gICAgICAgICAgICByZWZpbmUgICAgICAgPSBpc0Z1bmN0aW9uKGFyZ3pbMF0pID8gYXJnei5zaGlmdCgpIDogY2ZnLnJlZmluZSB8fCBudWxsLFxyXG4gICAgICAgICAgICBpbml0aWFsU3RhdGUgPSBfc3RhdGljLmluaXRpYWxTdGF0ZTtcclxuXHJcbiAgICAgICAgdGhpcy5fdWlkICAgICAgICAgID0gY2ZnLl91aWQgfHwgc2hvcnRpZC5nZW5lcmF0ZSgpO1xyXG4gICAgICAgIHRoaXMuX21heExpc3RlbmVycyA9IGNmZy5kZWZhdWx0TWF4TGlzdGVuZXJzIHx8IFN0b3JlLmRlZmF1bHRNYXhMaXN0ZW5lcnM7XHJcbiAgICAgICAgdGhpcy5sb2NrcyAgICAgICAgID0gMDtcclxuICAgICAgICB0aGlzLl9vblN0YWJpbGl6ZSAgPSBbXTtcclxuXHJcbiAgICAgICAgdGhpcy5fcGVyc2lzdGVuY2VUbSA9IGNmZy5wZXJzaXN0ZW5jZVRtIHx8IHRoaXMuY29uc3RydWN0b3IucGVyc2lzdGVuY2VUbTtcclxuICAgICAgICBpZiAoIGlzU3RyaW5nKGFyZ3pbMF0pICkge1xyXG4gICAgICAgICAgICBpZiAoIGNvbnRleHQuX19jb250ZXh0W25hbWVdIClcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIlJlU2NvcGU6IE92ZXJ3cml0aW5nIGFuIGV4aXN0aW5nIHN0YXRpYyBuYW1lZCBzdG9yZSAoICVzICkgISFcIiwgbmFtZSk7XHJcbiAgICAgICAgICAgIGNvbnRleHQuX19jb250ZXh0W25hbWVdID0gdGhpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICggY2ZnICYmIGNmZy5vbiApIHtcclxuICAgICAgICAgICAgdGhpcy5vbihjZmcub24pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyB0aGlzLnN0YXRlICAgICAgPSB0aGlzLnN0YXRlIHx8IHt9O1xyXG5cclxuICAgICAgICB0aGlzLl91c2UgPSB3YXRjaHM7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuXHJcbiAgICAgICAgaWYgKCBjb250ZXh0LnN0b3JlcyApIHtcclxuICAgICAgICAgICAgdGhpcy5jb250ZXh0T2JqID0gY29udGV4dDtcclxuICAgICAgICAgICAgdGhpcy5jb250ZXh0ICAgID0gY29udGV4dC5zdG9yZXM7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jb250ZXh0T2JqID0gbmV3IENvbnRleHQoY29udGV4dCk7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGV4dCAgICA9IGNvbnRleHQuc3RvcmVzO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIHRoaXMuX3N0YWJsZSAgICAgICA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5fcmV2ICAgICAgICAgID0gMTtcclxuICAgICAgICB0aGlzLl9yZXZzICAgICAgICAgPSB7fTtcclxuICAgICAgICB0aGlzLnN0b3JlcyAgICAgICAgPSB7fTtcclxuICAgICAgICB0aGlzLl9fcmV0YWluTG9ja3MgPSB7YWxsIDogMH07XHJcbiAgICAgICAgdGhpcy5fcmVxdWlyZSAgICAgID0gW107XHJcblxyXG4gICAgICAgIGlmICggX3N0YXRpYy5yZXF1aXJlIClcclxuICAgICAgICAgICAgdGhpcy5fcmVxdWlyZS5wdXNoKC4uLl9zdGF0aWMucmVxdWlyZSk7XHJcbiAgICAgICAgaWYgKCBjZmcucmVxdWlyZSApXHJcbiAgICAgICAgICAgIHRoaXMuX3JlcXVpcmUucHVzaCguLi5jZmcucmVxdWlyZSk7XHJcblxyXG4gICAgICAgIHRoaXMuX2ZvbGxvd2VycyA9IFtdO1xyXG5cclxuICAgICAgICBpZiAoIGNmZy5oYXNPd25Qcm9wZXJ0eShcImRhdGFzXCIpICYmIGNmZy5kYXRhcyAhPT0gdW5kZWZpbmVkIClcclxuICAgICAgICAgICAgdGhpcy5kYXRhcyA9IGNmZy5kYXRhcztcclxuICAgICAgICBpZiAoIGNmZy5oYXNPd25Qcm9wZXJ0eShcInN0YXRlXCIpICYmIGNmZy5zdGF0ZSAhPT0gdW5kZWZpbmVkIClcclxuICAgICAgICAgICAgaW5pdGlhbFN0YXRlID0gY2ZnLnN0YXRlO1xyXG5cclxuICAgICAgICBpZiAoIHJlZmluZSApXHJcbiAgICAgICAgICAgIHRoaXMucmVmaW5lID0gcmVmaW5lO1xyXG5cclxuICAgICAgICBpZiAoICEhdGhpcy5fdXNlICYmIHRoaXMuX3VzZS5sZW5ndGggKSB7Ly8gaWYgdGhlcmUgaW5pdGlhbCB3YXRjaHMgYW55d2F5XHJcbiAgICAgICAgICAgIHRoaXMucHVsbCh0aGlzLl91c2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCBpbml0aWFsU3RhdGUgKSB7Ly8gc3luYyByZWZpbmVcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IHsuLi5pbml0aWFsU3RhdGV9O1xyXG4gICAgICAgICAgICBpZiAoIHRoaXMuaXNDb21wbGV0ZSgpICYmIHRoaXMuZGF0YXMgPT09IHVuZGVmaW5lZCApXHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGFzID0gdGhpcy5yZWZpbmUodGhpcy5kYXRhcywgdGhpcy5zdGF0ZSwgdGhpcy5zdGF0ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3N0YWJsZSA9IHRoaXMuZGF0YXMgIT09IHVuZGVmaW5lZDsvLyBzdGFibGUgaWYgaXQgaGF2ZSBpbml0aWFsIHJlc3VsdCBkYXRhc1xyXG4gICAgICAgICF0aGlzLl9zdGFibGUgJiYgdGhpcy5lbWl0KCd1bnN0YWJsZScsIHRoaXMuc3RhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogT3ZlcnJpZGFibGUgbWV0aG9kIHRvIGtub3cgaWYgYSBzdGF0ZSBjaGFuZ2Ugc2hvdWxkIGJlIHByb3BhZyB0byB0aGUgbGlzdGVuaW5nIHN0b3JlcyAmIGNvbXBvbmVudHNcclxuICAgICAqIElmIHN0YXRpYyBmb2xsb3cgaXMgZGVmaW5lZCwgc2hvdWxkUHJvcGFnIHdpbGwgcmV0dXJuIHRydWUgaWYgYW55IG9mIHRoZSBcImZvbGxvd1wiIGtleXMgd2FzIHVwZGF0ZWRcclxuICAgICAqIElmIG5vdCBpdCB3aWxsIGFsd2F5cyByZXR1cm4gdHJ1ZVxyXG4gICAgICovXHJcbiAgICBzaG91bGRQcm9wYWcoIG5EYXRhcyApIHtcclxuICAgICAgICB2YXIgX3N0YXRpYyA9IHRoaXMuY29uc3RydWN0b3IsIHIsXHJcbiAgICAgICAgICAgIGNEYXRhcyAgPSB0aGlzLmRhdGFzO1xyXG5cclxuICAgICAgICAvLyBpZiAoICFjU3RhdGUgKVxyXG4gICAgICAgIC8vICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICBpZiAoICFjRGF0YXMgJiYgKCFfc3RhdGljLmZvbGxvdyB8fCAhX3N0YXRpYy5mb2xsb3cubGVuZ3RoIHx8XHJcbiAgICAgICAgICAgICAgICBfc3RhdGljLmZvbGxvdyAmJiBfc3RhdGljLmZvbGxvdy5yZWR1Y2UoKCByLCBpICkgPT4gKHIgfHwgbkRhdGFzICYmIG5EYXRhc1tpXSksIGZhbHNlKSkgKVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICAgICAgaWYgKCBpc0FycmF5KF9zdGF0aWMuZm9sbG93KSApXHJcbiAgICAgICAgICAgIF9zdGF0aWMuZm9sbG93LmZvckVhY2goXHJcbiAgICAgICAgICAgICAgICAoIGtleSApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByID0gciB8fCAobkRhdGFzID8gY0RhdGFzW2tleV0gIT09IG5EYXRhc1trZXldIDogY0RhdGFzICYmIGNEYXRhc1trZXldKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIGVsc2UgaWYgKCBfc3RhdGljLmZvbGxvdyA9PT0gJ3N0cmljdCcgKVxyXG4gICAgICAgICAgICByID0gbkRhdGFzID09PSBjRGF0YXM7XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNEYXRhcyAmJiBPYmplY3Qua2V5cyhjRGF0YXMpLmZvckVhY2goXHJcbiAgICAgICAgICAgICAgICAoIGtleSApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByID0gciB8fCAobkRhdGFzID8gY0RhdGFzW2tleV0gIT09IG5EYXRhc1trZXldIDogY0RhdGFzICYmIGNEYXRhc1trZXldKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBuRGF0YXMgJiYgT2JqZWN0LmtleXMobkRhdGFzKS5mb3JFYWNoKFxyXG4gICAgICAgICAgICAgICAgKCBrZXkgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgciA9IHIgfHwgKG5EYXRhcyA/IGNEYXRhc1trZXldICE9PSBuRGF0YXNba2V5XSA6IGNEYXRhcyAmJiBjRGF0YXNba2V5XSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAhIXI7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBPdmVycmlkYWJsZSByZWZpbmVyIC8gcmVtYXBwZXJcclxuICAgICAqIElmIHN0YXRlIG9yIGxhc3RQdWJsaWNTdGF0ZSBhcmUgc2ltcGxlIGhhc2ggbWFwcyByZWZpbmUgd2lsbCByZXR1cm4gey4uLmRhdGFzLCAuLi5zdGF0ZX1cclxuICAgICAqIGlmIG5vdCBpdCB3aWxsIHJldHVybiB0aGUgbGFzdCBwcml2YXRlIHN0YXRlXHJcbiAgICAgKiBAcGFyYW0gZGF0YXNcclxuICAgICAqIEBwYXJhbSBzdGF0ZVxyXG4gICAgICogQHJldHVybnMgeyp9XHJcbiAgICAgKi9cclxuICAgIHJlZmluZSggZGF0YXMsIHN0YXRlLCBjaGFuZ2VzICkge1xyXG4gICAgICAgIHN0YXRlID0gc3RhdGUgfHwgdGhpcy5zdGF0ZTtcclxuXHJcbiAgICAgICAgaWYgKCAhZGF0YXMgfHwgZGF0YXMuX19wcm90b19fICE9PSBvYmpQcm90byB8fCBzdGF0ZS5fX3Byb3RvX18gIT09IG9ialByb3RvIClcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5kYXRhcywgLi4uc3RhdGV9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWJvdW5jZSB0aGlzIHN0b3JlIHByb3BhZ2F0aW9uICggJiByZWR1Y2luZyApXHJcbiAgICAgKiBAcGFyYW0gY2JcclxuICAgICAqL1xyXG4gICAgc3RhYmlsaXplKCBjYiApIHtcclxuICAgICAgICB2YXIgbWUgPSB0aGlzO1xyXG4gICAgICAgIGNiICYmIG1lLm9uY2UoJ3N0YWJsZScsIGNiKTtcclxuICAgICAgICB0aGlzLl9zdGFibGUgJiYgdGhpcy5lbWl0KCd1bnN0YWJsZScsIHRoaXMuc3RhdGUsIHRoaXMuZGF0YXMpO1xyXG5cclxuICAgICAgICBtZS5fc3RhYmxlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGlmICggdGhpcy5fc3RhYmlsaXplciApXHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9zdGFiaWxpemVyKTtcclxuXHJcbiAgICAgICAgdGhpcy5fc3RhYmlsaXplciA9IHNldFRpbWVvdXQoXHJcbiAgICAgICAgICAgIHRoaXMucHVzaC5iaW5kKFxyXG4gICAgICAgICAgICAgICAgdGhpcyxcclxuICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAoKSA9PiB7Ly9AdG9kb1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIG1lLl9zdGFibGUgICAgICAgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3N0YWJpbGl6ZXIgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMucmVsZWFzZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApKTtcclxuICAgIH1cclxuXHJcbiAgICBkaXNwYXRjaCggZXZlbnQgKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUHVsbCBzdG9yZXMgaW4gdGhlIHByaXZhdGUgc3RhdGVcclxuICAgICAqIEBwYXJhbSBzdG9yZXMgIHtBcnJheX0gKHBhc3NlZCB0byBTdG9yZTo6bWFwKSBFeCA6IFtcInNlc3Npb25cIiwgXCJvdGhlck5hbWVkU3RvcmU6a2V5XCIsIG90aGVyU3RvcmUuYXMoXCJvdGhlcktleVwiKV1cclxuICAgICAqL1xyXG4gICAgcHVsbCggc3RvcmVzLCBkb1dhaXQsIG9yaWdpbiApIHtcclxuICAgICAgICBsZXQgaW5pdGlhbE91dHB1dHMgPSBTdG9yZS5tYXAodGhpcywgc3RvcmVzLCB0aGlzLmNvbnRleHRPYmosIG9yaWdpbiwgdHJ1ZSk7XHJcbiAgICAgICAgaWYgKCBkb1dhaXQgKSB7XHJcbiAgICAgICAgICAgIHRoaXMud2FpdCgpO1xyXG4gICAgICAgICAgICBzdG9yZXMuZm9yRWFjaCgoIHMgKSA9PiB0aGlzLmNvbnRleHRbc10gJiYgdGhpcy53YWl0KHRoaXMuY29udGV4dFtzXSkpO1xyXG4gICAgICAgICAgICB0aGlzLnJlbGVhc2UoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGluaXRpYWxPdXRwdXRzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQXBwbHkgcmVmaW5lL3JlbWFwIG9uIHRoZSBwcml2YXRlIHN0YXRlICYgcHVzaCB0aGUgcmVzdWx0aW5nIFwicHVibGljXCIgc3RhdGUgdG8gZm9sbG93ZXJzXHJcbiAgICAgKiBAcGFyYW0gY2JcclxuICAgICAqL1xyXG4gICAgcHVzaCggZGF0YXMsIGZvcmNlLCBjYiApIHtcclxuICAgICAgICBjYiAgICAgICAgICAgID0gZm9yY2UgPT09IHRydWUgPyBjYiA6IGZvcmNlO1xyXG4gICAgICAgIGZvcmNlICAgICAgICAgPSBmb3JjZSA9PT0gdHJ1ZTtcclxuICAgICAgICB2YXIgaSAgICAgICAgID0gMCxcclxuICAgICAgICAgICAgbWUgICAgICAgID0gdGhpcyxcclxuICAgICAgICAgICAgbmV4dFN0YXRlID0gIWRhdGFzICYmIHsuLi50aGlzLnN0YXRlLCAuLi50aGlzLl9jaGFuZ2VzU1d9IHx8IHRoaXMuc3RhdGUsXHJcbiAgICAgICAgICAgIG5leHREYXRhcyA9IGRhdGFzIHx8XHJcbiAgICAgICAgICAgICAgICAodGhpcy5pc0NvbXBsZXRlKG5leHRTdGF0ZSkgPyB0aGlzLnJlZmluZSh0aGlzLmRhdGFzLCBuZXh0U3RhdGUsIHRoaXMuX2NoYW5nZXNTVykgOiB0aGlzLmRhdGFzKTtcclxuXHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBuZXh0U3RhdGU7XHJcbiAgICAgICAgaWYgKCAhZm9yY2UgJiZcclxuICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgKCF0aGlzLmRhdGFzICYmIHRoaXMuZGF0YXMgPT09IG5leHREYXRhcykgfHwgIXRoaXMuc2hvdWxkUHJvcGFnKG5leHREYXRhcylcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBjYiAmJiBjYigpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmRhdGFzID0gbmV4dERhdGFzO1xyXG4gICAgICAgIHRoaXMubG9ja3MrKztcclxuICAgICAgICB0aGlzLnJlbGVhc2UoY2IpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFVwZGF0ZSB0aGUgY3VycmVudCBwcml2YXRlIHN0YXRlICYgcHVzaCBpdCBvbmNlIHRoZSBzdG9yZSBpcyBzdGFibGVcclxuICAgICAqIEBwYXJhbSBwU3RhdGVcclxuICAgICAqIEBwYXJhbSBjYlxyXG4gICAgICovXHJcbiAgICBzZXRTdGF0ZSggcFN0YXRlLCBjYiwgc3luYyApIHtcclxuICAgICAgICB2YXIgaSAgICAgICA9IDAsIGNoYW5nZSxcclxuICAgICAgICAgICAgY2hhbmdlcyA9IHRoaXMuX2NoYW5nZXNTVyA9IHRoaXMuX2NoYW5nZXNTVyB8fCB7fTtcclxuICAgICAgICBmb3IgKCB2YXIgayBpbiBwU3RhdGUgKVxyXG4gICAgICAgICAgICBpZiAoICF0aGlzLnN0YXRlIHx8IHBTdGF0ZS5oYXNPd25Qcm9wZXJ0eShrKVxyXG4gICAgICAgICAgICAgICAgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIHBTdGF0ZVtrXSAhPSB0aGlzLnN0YXRlW2tdXHJcbiAgICAgICAgICAgICAgICAgICAgfHxcclxuICAgICAgICAgICAgICAgICAgICAodGhpcy5zdGF0ZVtrXSAmJiBwU3RhdGVba10gJiYgKHBTdGF0ZVtrXS5fcmV2ICE9IHRoaXMuX3JldnNba10pKS8vIHJldi9oYXNoIHVwZGF0ZVxyXG4gICAgICAgICAgICAgICAgKSApIHtcclxuICAgICAgICAgICAgICAgIGNoYW5nZSAgICAgICAgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcmV2c1trXSA9IHBTdGF0ZVtrXSAmJiBwU3RhdGVba10uX3JldiB8fCB0cnVlO1xyXG4gICAgICAgICAgICAgICAgY2hhbmdlc1trXSAgICA9IHBTdGF0ZVtrXTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIHN5bmMgKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHVzaCgpO1xyXG4gICAgICAgICAgICBjYiAmJiBjYigpO1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoIGNoYW5nZSApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhYmlsaXplKGNiKTtcclxuICAgICAgICAgICAgfSBlbHNlIGNiICYmIGNiKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVXBkYXRlIHRoZSBjdXJyZW50IHByaXZhdGUgc3RhdGUgJiBwdXNoIGl0IG9uY2UgdGhlIHN0b3JlIGlzIHN0YWJsZVxyXG4gICAgICogQHBhcmFtIHBTdGF0ZVxyXG4gICAgICogQHBhcmFtIGNiXHJcbiAgICAgKi9cclxuICAgIHNldFN0YXRlU3luYyggcFN0YXRlICkge1xyXG4gICAgICAgIHZhciBpICAgICAgID0gMCwgY2hhbmdlLFxyXG4gICAgICAgICAgICBjaGFuZ2VzID0gdGhpcy5fY2hhbmdlc1NXID0gdGhpcy5fY2hhbmdlc1NXIHx8IHt9O1xyXG4gICAgICAgIGZvciAoIHZhciBrIGluIHBTdGF0ZSApXHJcbiAgICAgICAgICAgIGlmICggIXRoaXMuc3RhdGUgfHwgcFN0YXRlLmhhc093blByb3BlcnR5KGspXHJcbiAgICAgICAgICAgICAgICAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgcFN0YXRlW2tdICE9IHRoaXMuc3RhdGVba11cclxuICAgICAgICAgICAgICAgICAgICB8fFxyXG4gICAgICAgICAgICAgICAgICAgICh0aGlzLnN0YXRlW2tdICYmIHBTdGF0ZVtrXSAmJiAocFN0YXRlW2tdLl9yZXYgIT0gdGhpcy5fcmV2c1trXSkpLy8gcmV2L2hhc2ggdXBkYXRlXHJcbiAgICAgICAgICAgICAgICApICkge1xyXG4gICAgICAgICAgICAgICAgY2hhbmdlICAgICAgICA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yZXZzW2tdID0gcFN0YXRlW2tdICYmIHBTdGF0ZVtrXS5fcmV2IHx8IHRydWU7XHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VzW2tdICAgID0gcFN0YXRlW2tdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wdXNoKCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXBsYWNlIHRoZSBjdXJyZW50IHByaXZhdGUgc3RhdGUgJiBwdXNoIGl0IG9uY2UgdGhlIHN0b3JlIGlzIHN0YWJsZVxyXG4gICAgICogQHBhcmFtIHBTdGF0ZVxyXG4gICAgICogQHBhcmFtIGNiXHJcbiAgICAgKi9cclxuICAgIHJlcGxhY2VTdGF0ZSggcFN0YXRlLCBjYiApIHtcclxuICAgICAgICB2YXIgaSAgICAgID0gMCwgbWUgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBwU3RhdGU7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhYmlsaXplKGNiKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGdldCBhIHN0b3JlLWtleSBwYWlyIGZvciBTdG9yZTo6bWFwXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxyXG4gICAgICogQHJldHVybnMge3tzdG9yZTogU3RvcmUsIG5hbWU6ICp9fVxyXG4gICAgICovXHJcbiAgICBhcyggbmFtZSApIHtcclxuICAgICAgICByZXR1cm4ge3N0b3JlIDogdGhpcywgbmFtZX07XHJcbiAgICB9XHJcblxyXG4gICAgb24oIGxpc3RzICkge1xyXG4gICAgICAgIGlmICggIWlzU3RyaW5nKGxpc3RzKSAmJiBsaXN0cyApXHJcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGxpc3RzKS5mb3JFYWNoKGsgPT4gc3VwZXIub24oaywgbGlzdHNba10pKTtcclxuICAgICAgICBlbHNlIHN1cGVyLm9uKC4uLmFyZ3VtZW50cyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlTGlzdGVuZXIoIGxpc3RzICkge1xyXG4gICAgICAgIGlmICggIWlzU3RyaW5nKGxpc3RzKSAmJiBsaXN0cyApXHJcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGxpc3RzKS5mb3JFYWNoKGsgPT4gc3VwZXIucmVtb3ZlTGlzdGVuZXIoaywgbGlzdHNba10pKTtcclxuICAgICAgICBlbHNlIHN1cGVyLnJlbW92ZUxpc3RlbmVyKC4uLmFyZ3VtZW50cyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiByZWxpbmsgYmluZGluZ3MgJiByZXF1aXJlc1xyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcclxuICAgICAqIEByZXR1cm5zIHt7c3RvcmU6IFN0b3JlLCBuYW1lOiAqfX1cclxuICAgICAqL1xyXG4gICAgcmVsaW5rKCBmcm9tICkge1xyXG4gICAgICAgIGxldCBjb250ZXh0ID0gdGhpcy5jb250ZXh0T2JqLFxyXG4gICAgICAgICAgICBfc3RhdGljID0gdGhpcy5jb25zdHJ1Y3RvcjtcclxuICAgICAgICBpZiAoIF9zdGF0aWMudXNlICkge1xyXG4gICAgICAgICAgICAvL3RvZG8gdW5saW5rXHJcbiAgICAgICAgICAgIHRoaXMucHVsbChfc3RhdGljLnVzZSwgZmFsc2UsIGZyb20pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCB0aGlzLl9yZXF1aXJlICkge1xyXG4gICAgICAgICAgICB0aGlzLl9yZXF1aXJlLmZvckVhY2goXHJcbiAgICAgICAgICAgICAgICBzdG9yZSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53YWl0KGNvbnRleHQuX19jb250ZXh0W3N0b3JlXSlcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBpcyBjb21wbGV0ZSAoYWxsIHJlcXVpZXJlZCBrZXlzIGFyZSBoZXJlKVxyXG4gICAgICogQHJldHVybnMgYm9vbFxyXG4gICAgICovXHJcbiAgICBpc0NvbXBsZXRlKCBzdGF0ZSA9IHRoaXMuc3RhdGUgKSB7XHJcbiAgICAgICAgdmFyIF9zdGF0aWMgPSB0aGlzLmNvbnN0cnVjdG9yO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICF0aGlzLl9yZXF1aXJlXHJcbiAgICAgICAgICAgIHx8ICF0aGlzLl9yZXF1aXJlLmxlbmd0aFxyXG4gICAgICAgICAgICB8fCBzdGF0ZSAmJiB0aGlzLl9yZXF1aXJlLnJlZHVjZShcclxuICAgICAgICAgICAgICAgICggciwga2V5ICkgPT4gKHIgJiYgc3RhdGVba2V5XSksXHJcbiAgICAgICAgICAgICAgICB0cnVlXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogaXMgc3RhYmxlXHJcbiAgICAgKiBAcmV0dXJucyBib29sXHJcbiAgICAgKi9cclxuICAgIGlzU3RhYmxlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zdGFibGU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBVbiBiaW5kIHRoaXMgc3RvcmUgb2ZmIHRoZSBnaXZlbiBjb21wb25lbnQta2V5XHJcbiAgICAgKiBAcGFyYW0gb2JqXHJcbiAgICAgKiBAcGFyYW0ga2V5XHJcbiAgICAgKiBAcmV0dXJucyB7QXJyYXkuPCo+fVxyXG4gICAgICovXHJcbiAgICB1bkJpbmQoIG9iaiwga2V5ICkge1xyXG4gICAgICAgIHZhciBmb2xsb3dlcnMgPSB0aGlzLl9mb2xsb3dlcnMsXHJcbiAgICAgICAgICAgIGkgICAgICAgICA9IGZvbGxvd2VycyAmJiBmb2xsb3dlcnMubGVuZ3RoO1xyXG4gICAgICAgIHdoaWxlIChmb2xsb3dlcnMgJiYgaS0tKVxyXG4gICAgICAgICAgICBpZiAoIGZvbGxvd2Vyc1tpXVswXSA9PSBvYmogJiYgZm9sbG93ZXJzW2ldWzFdID09IGtleSApXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZm9sbG93ZXJzLnNwbGljZShpLCAxKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEJpbmQgdGhpcyBzdG9yZSBjaGFuZ2VzIHRvIHRoZSBnaXZlbiBjb21wb25lbnQta2V5XHJcbiAgICAgKiBAcGFyYW0gb2JqIHtSZWFjdC5Db21wb25lbnR8U3RvcmV8ZnVuY3Rpb24pXHJcbiAgICAgKiBAcGFyYW0ga2V5IHtzdHJpbmd9IG9wdGlvbmFsIGtleSB3aGVyZSB0byBtYXAgdGhlIHB1YmxpYyBzdGF0ZVxyXG4gICAgICovXHJcbiAgICBiaW5kKCBvYmosIGtleSwgc2V0SW5pdGlhbCA9IHRydWUgKSB7XHJcbiAgICAgICAgdGhpcy5fZm9sbG93ZXJzLnB1c2goW29iaiwga2V5XSk7XHJcbiAgICAgICAgaWYgKCBzZXRJbml0aWFsICYmIHRoaXMuZGF0YXMgJiYgdGhpcy5fc3RhYmxlICkge1xyXG4gICAgICAgICAgICBpZiAoIHR5cGVvZiBvYmogIT0gXCJmdW5jdGlvblwiICkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCBrZXkgKSBvYmouc2V0U3RhdGUoe1trZXldIDogdGhpcy5kYXRhc30pO1xyXG4gICAgICAgICAgICAgICAgZWxzZSBvYmouc2V0U3RhdGUodGhpcy5kYXRhcyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBvYmoodGhpcy5kYXRhcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBvbmNlKCdzdGFibGUnLCBjYilcclxuICAgICAqIEBwYXJhbSBvYmoge1JlYWN0LkNvbXBvbmVudHxTdG9yZXxmdW5jdGlvbilcclxuICAgICAqIEBwYXJhbSBrZXkge3N0cmluZ30gb3B0aW9uYWwga2V5IHdoZXJlIHRvIG1hcCB0aGUgcHVibGljIHN0YXRlXHJcbiAgICAgKi9cclxuICAgIHRoZW4oIGNiICkge1xyXG4gICAgICAgIGlmICggdGhpcy5fc3RhYmxlIClcclxuICAgICAgICAgICAgcmV0dXJuIGNiKG51bGwsIHRoaXMuZGF0YXMpO1xyXG4gICAgICAgIHRoaXMub25jZSgnc3RhYmxlJywgZSA9PiBjYihudWxsLCB0aGlzLmRhdGFzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBZGQgYSBsb2NrIHNvIHRoZSBzdG9yZSB3aWxsIG5vdCBwcm9wYWcgaXQgc3RhdGUgdW50aWxsIHJlbGVhc2UoKSBpcyBjYWxsXHJcbiAgICAgKiBAcGFyYW0gcHJldmlvdXMge1N0b3JlfG51bWJlcnxBcnJheX0gQG9wdGlvbmFsIHdmIHRvIHdhaXQsIHJlbGVhc2VzIHRvIHdhaXQgb3IgYXJyYXkgb2Ygc3R1ZmYgdG8gd2FpdFxyXG4gICAgICogQHJldHVybnMge1Rhc2tGbG93fVxyXG4gICAgICovXHJcbiAgICB3YWl0KCBwcmV2aW91cyApIHtcclxuICAgICAgICBpZiAoIHR5cGVvZiBwcmV2aW91cyA9PSBcIm51bWJlclwiIClcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubG9ja3MgKz0gcHJldmlvdXM7XHJcbiAgICAgICAgaWYgKCBpc0FycmF5KHByZXZpb3VzKSApXHJcbiAgICAgICAgICAgIHJldHVybiBwcmV2aW91cy5tYXAodGhpcy53YWl0LmJpbmQodGhpcykpO1xyXG5cclxuICAgICAgICB0aGlzLl9zdGFibGUgJiYgdGhpcy5lbWl0KCd1bnN0YWJsZScsIHRoaXMuc3RhdGUsIHRoaXMuZGF0YXMpO1xyXG4gICAgICAgIHRoaXMuX3N0YWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubG9ja3MrKztcclxuICAgICAgICBpZiAoIHByZXZpb3VzICYmIGlzRnVuY3Rpb24ocHJldmlvdXMudGhlbikgKSB7XHJcbiAgICAgICAgICAgIHByZXZpb3VzLnRoZW4odGhpcy5yZWxlYXNlLmJpbmQodGhpcywgbnVsbCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIERlY3JlYXNlIGxvY2tzIGZvciB0aGlzIHN0b3JlLCBpZiBpdCByZWFjaCAwICYgaXQgaGF2ZSBhIHB1YmxpYyBzdGF0ZSxcclxuICAgICAqIGl0IHdpbGwgYmUgcHJvcGFnYXRlZCB0byB0aGUgZm9sbG93ZXJzLFxyXG4gICAgICogdGhlbiwgYWxsIHN0dWZmIHBhc3NlZCB0byBcInRoZW5cIiBjYWxsIGJhY2sgd2lsbCBiZSBleGVjIC8gcmVsZWFzZWRcclxuICAgICAqIEBwYXJhbSBkZXN5bmNcclxuICAgICAqIEByZXR1cm5zIHsqfVxyXG4gICAgICovXHJcbiAgICByZWxlYXNlKCBjYiApIHtcclxuICAgICAgICB2YXIgX3N0YXRpYyA9IHRoaXMuY29uc3RydWN0b3I7XHJcbiAgICAgICAgbGV0IGkgICAgICAgPSAwO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5sb2NrcyA9PSAwKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJSZWxlYXNlIG1vcmUgdGhhbiBsb2NraW5nICFcIik7XHJcblxyXG5cclxuXHJcbiAgICAgICAgaWYgKCAhLS10aGlzLmxvY2tzICYmIHRoaXMuZGF0YXMgJiYgdGhpcy5pc0NvbXBsZXRlKCkgKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3N0YWJsZSA9IHRydWU7XHJcblxyXG5cclxuICAgICAgICAgICAgdGhpcy5fcmV2ID0gMSArICh0aGlzLl9yZXYgKyAxKSAlIDEwMDAwMDA7Ly9cclxuICAgICAgICAgICAgaWYgKCB0aGlzLl9mb2xsb3dlcnMubGVuZ3RoIClcclxuICAgICAgICAgICAgICAgIHRoaXMuX2ZvbGxvd2Vycy5mb3JFYWNoKCggZm9sbG93ZXIgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCAhdGhpcy5kYXRhcyApIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIHR5cGVvZiBmb2xsb3dlclswXSA9PSBcImZ1bmN0aW9uXCIgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbGxvd2VyWzBdKHRoaXMuZGF0YXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNiICYmIGkrKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9sbG93ZXJbMF0uc2V0U3RhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZm9sbG93ZXJbMV0pID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtbZm9sbG93ZXJbMV1dIDogdGhpcy5kYXRhc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGFzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjYiAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgKCkgPT4gKCEoLS1pKSAmJiBjYigpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5lbWl0KCdzdGFibGUnLCB0aGlzLmRhdGFzKTtcclxuICAgICAgICAgICAgdGhpcy5lbWl0KCd1cGRhdGUnLCB0aGlzLmRhdGFzKTtcclxuICAgICAgICAgICAgY2IgJiYgY2IoKVxyXG4gICAgICAgIH0gZWxzZSBjYiAmJiB0aGlzLnRoZW4oY2IpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHJldGFpbiggcmVhc29uICkge1xyXG4gICAgLy8gICAgY29uc29sZS5sb2coXCJyZXRhaW5cIiwgdGhpcy5fdWlkLCByZWFzb24pO1xyXG4gICAgICAgIHRoaXMuX19yZXRhaW5Mb2Nrcy5hbGwrKztcclxuICAgICAgICBpZiAoIHJlYXNvbiApIHtcclxuICAgICAgICAgICAgdGhpcy5fX3JldGFpbkxvY2tzW3JlYXNvbl0gPSB0aGlzLl9fcmV0YWluTG9ja3NbcmVhc29uXSB8fCAwO1xyXG4gICAgICAgICAgICB0aGlzLl9fcmV0YWluTG9ja3NbcmVhc29uXSsrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkaXNwb3NlKCByZWFzb24gKSB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcImRpc3Bvc2VcIiwgdGhpcy5fdWlkLCByZWFzb24pO1xyXG4gICAgICAgIGlmICh0aGlzLl9fcmV0YWluTG9ja3MuYWxsID09IDApXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkRpc3Bvc2UgbW9yZSB0aGFuIHJldGFpbmluZyAhIDogXCIrcmVhc29uKTtcclxuICAgICAgICB0aGlzLl9fcmV0YWluTG9ja3MuYWxsLS07XHJcbiAgICAgICAgaWYgKCByZWFzb24gKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX19yZXRhaW5Mb2Nrc1tyZWFzb25dID0gdGhpcy5fX3JldGFpbkxvY2tzW3JlYXNvbl0gfHwgMDtcclxuICAgICAgICAgICAgdGhpcy5fX3JldGFpbkxvY2tzW3JlYXNvbl0tLTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCAhdGhpcy5fX3JldGFpbkxvY2tzLmFsbCApIHtcclxuICAgICAgICAgICAgaWYgKCB0aGlzLl9wZXJzaXN0ZW5jZVRtICkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZGVzdHJveVRNICYmIGNsZWFyVGltZW91dCh0aGlzLl9kZXN0cm95VE0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZGVzdHJveVRNID0gc2V0VGltZW91dChcclxuICAgICAgICAgICAgICAgICAgICBlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50aGVuKHMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8vICBjb25zb2xlLmxvZyhcInd0ZiAgIFwiLCByZWFzb24sICF0aGlzLl9fcmV0YWluTG9ja3MuYWxsKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhdGhpcy5fX3JldGFpbkxvY2tzLmFsbCAmJiB0aGlzLmRlc3Ryb3koKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3BlcnNpc3RlbmNlVG1cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRoZW4ocyA9PiAoIXRoaXMuX19yZXRhaW5Mb2Nrcy5hbGwgJiYgdGhpcy5kZXN0cm95KCkpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkZXN0cm95KCkge1xyXG4gICAgICAvLyAgY29uc29sZS5sb2coXCJkZXN0cm95XCIsIHRoaXMuX3VpZCk7XHJcblxyXG4gICAgICAgIHRoaXMuZW1pdCgnZGVzdHJveScsIHRoaXMpO1xyXG4gICAgICAgIGlmICggdGhpcy5fc3RhYmlsaXplciApXHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9zdGFiaWxpemVyKTtcclxuICAgICAgICB0aGlzLl9mb2xsb3dlcnMubGVuZ3RoID0gMDtcclxuICAgICAgICB0aGlzLmRlYWQgICAgICAgICAgICAgID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLl9yZXZzICAgICAgICAgICAgID0gdGhpcy5kYXRhcyA9IHRoaXMuc3RhdGUgPSB0aGlzLmNvbnRleHQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMucmVtb3ZlQWxsTGlzdGVuZXJzKCk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvU3RvcmUuanMiXSwic291cmNlUm9vdCI6IiJ9