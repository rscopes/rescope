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
	
	        _this.sources = [];
	
	        _this.__retainLocks = { all: 0 };
	        _this.__w8Locks = { all: 1 };
	        _this.__listening = {};
	        _this.__context = {};
	        _this.__mixed = [];
	        _this.__mixedList = [];
	        _this._followers = [];
	        if (parent) {
	            parent.retain("isMyParent");
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
	        _this._stable = !!_this.__w8Locks.all;
	
	        if (autoDestroy) setTimeout(function (tm) {
	            _this.retain();
	            _this.dispose();
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
	        key: 'retain',
	        value: function retain(reason) {
	            this.__retainLocks.all++;
	            if (reason) {
	                this.__retainLocks[reason] = this.__retainLocks[reason] || 0;
	                this.__retainLocks[reason]++;
	            }
	        }
	    }, {
	        key: 'dispose',
	        value: function dispose(reason) {
	            var _this13 = this;
	
	            this.__retainLocks.all--;
	            if (reason) {
	                this.__retainLocks[reason] = this.__retainLocks[reason] || 0;
	                this.__retainLocks[reason]--;
	            }
	            if (!this.__retainLocks.all) {
	                if (this._persistenceTm) {
	                    this._destroyTM && clearTimeout(this._destroyTM);
	                    this._destroyTM = setTimeout(function (e) {
	                        _this13.then(function (s) {
	                            return !_this13.__retainLocks.all && _this13.destroy();
	                        });
	                    }, this._persistenceTm);
	                } else {
	                    this.then(function (s) {
	                        return !_this13.__retainLocks.all && _this13.destroy();
	                    });
	                }
	            }
	        }
	    }, {
	        key: 'retainStores',
	        value: function retainStores() {
	            var _this14 = this;
	
	            var stores = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	            var reason = arguments[1];
	
	            stores.forEach(function (id) {
	                return _this14.stores[id] && _this14.stores[id].retain && _this14.stores[id].retain(reason);
	            });
	        }
	    }, {
	        key: 'disposeStores',
	        value: function disposeStores() {
	            var _this15 = this;
	
	            var stores = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	            var reason = arguments[1];
	
	            stores.forEach(function (id) {
	                return _this15.stores[id] && _this15.stores[id].dispose && _this15.stores[id].dispose(reason);
	            });
	        }
	    }, {
	        key: 'wait',
	        value: function wait(reason) {
	            console.log("wait", reason);
	            this._stable = false;
	            !this.__w8Locks.all && this.emit("unstable", this);
	            this.__w8Locks.all++;
	            if (reason) {
	                this.__w8Locks[reason] = this.__w8Locks[reason] || 0;
	                this.__w8Locks[reason]++;
	            }
	        }
	    }, {
	        key: 'release',
	        value: function release(reason) {
	            var _this16 = this;
	
	            console.log("release", reason);
	            this.__w8Locks.all--;
	            if (reason) {
	                this.__w8Locks[reason] = this.__w8Locks[reason] || 0;
	                this.__w8Locks[reason]--;
	            }
	            this._stable = true;
	            if (!this.__w8Locks.all) {
	                this._stabilizerTM && clearTimeout(this._stabilizerTM);
	                this._propagTM && clearTimeout(this._propagTM);
	
	                this._stabilizerTM = setTimeout(function (e) {
	                    if (!_this16._stable) return _this16._stabilizerTM = null;
	
	                    _this16.emit("stable", _this16);
	
	                    _this16._propag();
	                });
	            }
	        }
	    }, {
	        key: 'propag',
	        value: function propag() {
	            var _this17 = this;
	
	            this._propagTM && clearTimeout(this._propagTM);
	            this._propagTM = setTimeout(function (e) {
	                _this17._propag();
	            }, 50);
	        }
	    }, {
	        key: '_propag',
	        value: function _propag() {
	            var _this18 = this;
	
	            if (this._followers.length) this._followers.forEach(function (_ref3) {
	                var obj = _ref3[0],
	                    key = _ref3[1],
	                    as = _ref3[2],
	                    lastRevs = _ref3[3];
	
	                var datas = _this18.getUpdates(lastRevs);
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
	         * order destroy of local stores
	         */
	
	    }, {
	        key: 'destroy',
	        value: function destroy() {
	            var _this19 = this;
	
	            var ctx = this.__context;
	
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
	                            return !_this10.__retainLocks.all && _this10.destroy();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMjRlNmFiYzJiOTk0M2JjNjM1MmQiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Jlc2NvcGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbnRleHQuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaXNzdHJpbmdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpc2FycmF5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXZlbnRzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaXNmdW5jdGlvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInNob3J0aWRcIiIsIndlYnBhY2s6Ly8vLi9zcmMvU3RvcmUuanMiXSwibmFtZXMiOlsiU3RvcmUiLCJDb250ZXh0IiwiaXNTdHJpbmciLCJyZXF1aXJlIiwiaXNBcnJheSIsIkV2ZW50RW1pdHRlciIsImlzRnVuY3Rpb24iLCJzaG9ydGlkIiwiX19wcm90b19fcHVzaCIsInRhcmdldCIsImlkIiwicGFyZW50IiwiaGVyZSIsInByb3RvdHlwZSIsIm9wZW5Db250ZXh0cyIsImtleSIsImN0eCIsInN0YXRlIiwiZGF0YXMiLCJuYW1lIiwiZGVmYXVsdE1heExpc3RlbmVycyIsInBlcnNpc3RlbmNlVG0iLCJhdXRvRGVzdHJveSIsIl9tYXhMaXN0ZW5lcnMiLCJjb25zdHJ1Y3RvciIsIl9pZCIsImdlbmVyYXRlIiwiX2lzTG9jYWxJZCIsIl9wZXJzaXN0ZW5jZVRtIiwic3RvcmVzIiwic291cmNlcyIsIl9fcmV0YWluTG9ja3MiLCJhbGwiLCJfX3c4TG9ja3MiLCJfX2xpc3RlbmluZyIsIl9fY29udGV4dCIsIl9fbWl4ZWQiLCJfX21peGVkTGlzdCIsIl9mb2xsb3dlcnMiLCJyZXRhaW4iLCJvbiIsIl9fcGFyZW50TGlzdCIsInJlbGVhc2UiLCJ3YWl0IiwiX3Byb3BhZyIsInJlZ2lzdGVyIiwiX3N0YWJsZSIsInNldFRpbWVvdXQiLCJkaXNwb3NlIiwiZm9yRWFjaCIsIl9tb3VudCIsImsiLCJhcmd1bWVudHMiLCJyZWR1Y2UiLCJtb3VudGVkIiwibW91bnRTdG9yZSIsIl93YXRjaFN0b3JlIiwiaXNTdGFibGUiLCJwcm9wYWciLCJ0YXJnZXRDdHgiLCJsaXN0cyIsInB1c2giLCJyZWxpbmsiLCJyYXdDdHgiLCJPYmplY3QiLCJrZXlzIiwic2luZ2xldG9uIiwic3JjQ3R4IiwiZXh0ZXJuYWwiLCJsY3R4IiwiX3N0b3JlcyIsImNvbnNvbGUiLCJ3YXJuIiwiZGVmaW5lUHJvcGVydHkiLCJnZXQiLCJfc3RhdGUiLCJzZXQiLCJ2IiwiX2RhdGFzIiwidW5kZWZpbmVkIiwib2JqIiwiYXMiLCJzZXRJbml0aWFsIiwibGFzdFJldnMiLCJyZXZzIiwibW91bnQiLCJnZXRVcGRhdGVzIiwic2V0U3RhdGUiLCJmb2xsb3dlcnMiLCJpIiwibGVuZ3RoIiwic3BsaWNlIiwidG8iLCJiaW5kIiwib3V0cHV0IiwidXBkYXRlZCIsImhhc093blByb3BlcnR5IiwiX3JldiIsImZsYWdzX3N0YXRlcyIsImZsYWdzX2RhdGFzIiwiX2ZsYWdzX3N0YXRlcyIsIl9mbGFnc19kYXRhcyIsImZsYWdzIiwiciIsImZsYWciLCJ0ZXN0IiwiY2IiLCJvbmNlIiwicXVpZXQiLCJyZWFzb24iLCJfZGVzdHJveVRNIiwiY2xlYXJUaW1lb3V0IiwidGhlbiIsImRlc3Ryb3kiLCJsb2ciLCJlbWl0IiwiX3N0YWJpbGl6ZXJUTSIsIl9wcm9wYWdUTSIsInJlbW92ZUxpc3RlbmVyIiwiY29udGV4dE9iaiIsInNoaWZ0IiwiY29udGV4dHMiLCJvYmpQcm90byIsImdldFByb3RvdHlwZU9mIiwic3RvcmUiLCJjb21wb25lbnQiLCJjb250ZXh0Iiwib3JpZ2luIiwidGFyZ2V0UmV2cyIsIl9yZXZzIiwiaW5pdGlhbE91dHB1dHMiLCJzdGF0aWNDb250ZXh0IiwiZmlsdGVyIiwiZXJyb3IiLCJhbGlhcyIsImRlZmF1bHROYW1lIiwibWF0Y2giLCJtaXhlZENXVW5tb3VudCIsInVuTW91bnRLZXkiLCJpc1JlYWN0Q29tcG9uZW50IiwibWFwIiwic3BsaXQiLCJ1bkJpbmQiLCJhcHBseSIsInNrZXkiLCJzb3J0IiwiYSIsImIiLCJmaXJzdG5hbWUiLCJqb2luIiwiY29udGV4dE1hcCIsImdldENvbnRleHQiLCJhcmd6IiwiX3N0YXRpYyIsImNmZyIsIndhdGNocyIsInVzZSIsInJlZmluZSIsImluaXRpYWxTdGF0ZSIsIl91aWQiLCJsb2NrcyIsIl9vblN0YWJpbGl6ZSIsIl91c2UiLCJfcmVxdWlyZSIsInB1bGwiLCJpc0NvbXBsZXRlIiwibkRhdGFzIiwiY0RhdGFzIiwiZm9sbG93IiwiY2hhbmdlcyIsIl9fcHJvdG9fXyIsIm1lIiwiX3N0YWJpbGl6ZXIiLCJldmVudCIsImRvV2FpdCIsInMiLCJmb3JjZSIsIm5leHRTdGF0ZSIsIl9jaGFuZ2VzU1ciLCJuZXh0RGF0YXMiLCJzaG91bGRQcm9wYWciLCJwU3RhdGUiLCJzeW5jIiwiY2hhbmdlIiwic3RhYmlsaXplIiwiZnJvbSIsInByZXZpb3VzIiwiZm9sbG93ZXIiLCJkZWFkIiwicmVtb3ZlQWxsTGlzdGVuZXJzIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM1QkE7Ozs7QUFDQTs7Ozs7O0FBWEE7Ozs7Ozs7Ozs7QUFhQSxtQkFBUUEsS0FBUjs7bUJBRWUsRUFBQ0Esc0JBQUQsRUFBUUMsMEJBQVIsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZmY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtQkE7Ozs7Ozs7QUFRQSxLQUFJQyxXQUFrQixtQkFBQUMsQ0FBUSxDQUFSLENBQXRCO0FBQUEsS0FDSUMsVUFBa0IsbUJBQUFELENBQVEsQ0FBUixDQUR0QjtBQUFBLEtBRUlFLGVB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b250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAyNGU2YWJjMmI5OTQzYmM2MzUyZCIsIi8qXHJcbiAqIENvcHlyaWdodCAoYykgIDIwMTcgQ2FpcGkgTGFicyAuXHJcbiAqXHJcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcbiAqXHJcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG4gKlxyXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cclxuICovXHJcblxyXG5pbXBvcnQgQ29udGV4dCBmcm9tIFwiLi9Db250ZXh0XCI7XHJcbmltcG9ydCBTdG9yZSBmcm9tIFwiLi9TdG9yZVwiO1xyXG5cclxuQ29udGV4dC5TdG9yZSA9IFN0b3JlO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1N0b3JlLCBDb250ZXh0fTtcclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9SZXNjb3BlLmpzIiwiLypcclxuICogQ29weXJpZ2h0IChjKSAyMDE3LiAgQ2FpcGkgTGFicy4gIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFRoaXMgRmlsZSBpcyBwYXJ0IG9mIENhaXBpLiBZb3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XHJcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzXHJcbiAqIHB1Ymxpc2hlZCBieSB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZVxyXG4gKiBMaWNlbnNlLCBvciAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxyXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcclxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcclxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxyXG4gKiBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cclxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXHJcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXHJcbiAqICBUaGlzIHByb2plY3QgaXMgZHVhbCBsaWNlbnNlZCB1bmRlciBBR1BMIGFuZCBDb21tZXJjaWFsIExpY2VuY2UuXHJcbiAqXHJcbiAqIEBhdXRob3IgOiBOYXRoYW5hZWwgQnJhdW5cclxuICogQGNvbnRhY3QgOiBjYWlwaWxhYnNAZ21haWwuY29tXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIEBhdXRob3IgTmF0aGFuYWVsIEJSQVVOXHJcbiAqXHJcbiAqIERhdGU6IDEzLzA4LzIwMTdcclxuICogVGltZTogMTc6MTVcclxuICovXHJcblxyXG5cclxudmFyIGlzU3RyaW5nICAgICAgICA9IHJlcXVpcmUoJ2lzc3RyaW5nJyksXHJcbiAgICBpc0FycmF5ICAgICAgICAgPSByZXF1aXJlKCdpc2FycmF5JyksXHJcbiAgICBFdmVudEVtaXR0ZXIgICAgPSByZXF1aXJlKCdldmVudHMnKSxcclxuICAgIGlzRnVuY3Rpb24gICAgICA9IHJlcXVpcmUoJ2lzZnVuY3Rpb24nKVxyXG4gICAgLCBzaG9ydGlkICAgICAgID0gcmVxdWlyZSgnc2hvcnRpZCcpXHJcbiAgICAsIF9fcHJvdG9fX3B1c2ggPSAoIHRhcmdldCwgaWQsIHBhcmVudCApID0+IHtcclxuICAgIGxldCBoZXJlICAgICAgICAgICA9IHtcclxuICAgICAgICBbaWRdIDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBoZXJlW2lkXS5wcm90b3R5cGUgPSBwYXJlbnQgPyBuZXcgcGFyZW50W1wiX1wiICsgaWRdKCkgOiB0YXJnZXRbaWRdIHx8IHt9O1xyXG4gICAgdGFyZ2V0W2lkXSAgICAgICAgID0gbmV3IGhlcmVbaWRdKCk7XHJcbiAgICB0YXJnZXRbJ18nICsgaWRdICAgPSBoZXJlW2lkXTtcclxufTtcclxuXHJcbmxldCBvcGVuQ29udGV4dHMgPSB7fTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250ZXh0IGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcclxuICAgIHN0YXRpYyBjb250ZXh0cyAgICAgICAgICAgID0gb3BlbkNvbnRleHRzO1xyXG4gICAgc3RhdGljIFN0b3JlICAgICAgICAgICAgICAgPSBudWxsO1xyXG4gICAgc3RhdGljIGRlZmF1bHRNYXhMaXN0ZW5lcnMgPSAxMDA7XHJcbiAgICBzdGF0aWMgcGVyc2lzdGVuY2VUbSAgICAgICA9IDA7XHJcblxyXG4gICAgc3RhdGljIGdldENvbnRleHQoIGtleSApIHtcclxuICAgICAgICByZXR1cm4gb3BlbkNvbnRleHRzW2tleV0gPSBvcGVuQ29udGV4dHNba2V5XSB8fCBuZXcgQ29udGV4dCh7fSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCBjdHgsIHtpZCwgcGFyZW50LCBzdGF0ZSwgZGF0YXMsIG5hbWUsIGRlZmF1bHRNYXhMaXN0ZW5lcnMsIHBlcnNpc3RlbmNlVG0sIGF1dG9EZXN0cm95fSA9IHt9ICkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMuX21heExpc3RlbmVycyA9IGRlZmF1bHRNYXhMaXN0ZW5lcnMgfHwgdGhpcy5jb25zdHJ1Y3Rvci5kZWZhdWx0TWF4TGlzdGVuZXJzO1xyXG4gICAgICAgIHRoaXMuX2lkICAgICAgICAgICA9IGlkID0gaWQgfHwgKFwiX19fX19cIiArIHNob3J0aWQuZ2VuZXJhdGUoKSk7XHJcblxyXG4gICAgICAgIGlmICggb3BlbkNvbnRleHRzW2lkXSApIHtcclxuICAgICAgICAgICAgLy8gb3BlbkNvbnRleHRzW2lkXS5yZWdpc3RlcihjdHgpO1xyXG4gICAgICAgICAgICByZXR1cm4gb3BlbkNvbnRleHRzW2lkXVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgb3BlbkNvbnRleHRzW2lkXSAgICA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5faXNMb2NhbElkICAgICA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5fcGVyc2lzdGVuY2VUbSA9IHBlcnNpc3RlbmNlVG0gfHwgdGhpcy5jb25zdHJ1Y3Rvci5wZXJzaXN0ZW5jZVRtO1xyXG5cclxuICAgICAgICB0aGlzLnN0b3JlcyA9IHt9O1xyXG4gICAgICAgIHRoaXMuc3RhdGUgID0ge307XHJcbiAgICAgICAgdGhpcy5kYXRhcyAgPSB7fTtcclxuICAgICAgICBfX3Byb3RvX19wdXNoKHRoaXMsICdzdG9yZXMnLCBwYXJlbnQpO1xyXG4gICAgICAgIF9fcHJvdG9fX3B1c2godGhpcywgJ3N0YXRlJywgcGFyZW50KTtcclxuICAgICAgICBfX3Byb3RvX19wdXNoKHRoaXMsICdkYXRhcycsIHBhcmVudCk7XHJcbiAgICAgICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XHJcblxyXG4gICAgICAgIHRoaXMuc291cmNlcyA9IFtdO1xyXG5cclxuICAgICAgICB0aGlzLl9fcmV0YWluTG9ja3MgPSB7YWxsIDogMH07XHJcbiAgICAgICAgdGhpcy5fX3c4TG9ja3MgICAgID0ge2FsbCA6IDF9O1xyXG4gICAgICAgIHRoaXMuX19saXN0ZW5pbmcgICA9IHt9O1xyXG4gICAgICAgIHRoaXMuX19jb250ZXh0ICAgICA9IHt9O1xyXG4gICAgICAgIHRoaXMuX19taXhlZCAgICAgICA9IFtdO1xyXG4gICAgICAgIHRoaXMuX19taXhlZExpc3QgICA9IFtdO1xyXG4gICAgICAgIHRoaXMuX2ZvbGxvd2VycyAgICA9IFtdO1xyXG4gICAgICAgIGlmICggcGFyZW50ICkge1xyXG4gICAgICAgICAgICBwYXJlbnQucmV0YWluKFwiaXNNeVBhcmVudFwiKTtcclxuICAgICAgICAgICAgcGFyZW50Lm9uKHRoaXMuX19wYXJlbnRMaXN0ID0ge1xyXG4gICAgICAgICAgICAgICAgJ3N0YWJsZScgICA6IHMgPT4gdGhpcy5yZWxlYXNlKFwiaXNNeVBhcmVudFwiKSxcclxuICAgICAgICAgICAgICAgICd1bnN0YWJsZScgOiBzID0+IHRoaXMud2FpdChcImlzTXlQYXJlbnRcIiksXHJcbiAgICAgICAgICAgICAgICAndXBkYXRlJyAgIDogcyA9PiB0aGlzLl9wcm9wYWcoKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgLy8gdGhpcy5yZWdpc3RlcihwYXJlbnQuX19jb250ZXh0LCBzdGF0ZSwgZGF0YXMpO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIHRoaXMucmVnaXN0ZXIoY3R4LCBzdGF0ZSwgZGF0YXMpO1xyXG4gICAgICAgIHRoaXMuX193OExvY2tzLmFsbC0tO1xyXG4gICAgICAgIHRoaXMuX3N0YWJsZSA9ICEhdGhpcy5fX3c4TG9ja3MuYWxsO1xyXG5cclxuICAgICAgICBpZiAoIGF1dG9EZXN0cm95IClcclxuICAgICAgICAgICAgc2V0VGltZW91dChcclxuICAgICAgICAgICAgICAgIHRtID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJldGFpbigpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzcG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgbW91bnQoIGlkLCBzdGF0ZSwgZGF0YXMgKSB7XHJcbiAgICAgICAgaWYgKCBpc0FycmF5KGlkKSApIHtcclxuICAgICAgICAgICAgaWQuZm9yRWFjaChrID0+IHRoaXMuX21vdW50KGssIHN0YXRlICYmIHN0YXRlW2tdLCBkYXRhcyAmJiBkYXRhc1trXSkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX21vdW50KC4uLmFyZ3VtZW50cyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIF9tb3VudCggaWQsIHN0YXRlLCBkYXRhcyApIHtcclxuICAgICAgICBpZiAoICF0aGlzLl9fY29udGV4dFtpZF0gKSB7Ly9hc2sgbWl4ZWQgfHwgcGFyZW50XHJcbiAgICAgICAgICAgIGlmICggdGhpcy5fX21peGVkLnJlZHVjZSgoIG1vdW50ZWQsIGN0eCApID0+IChtb3VudGVkIHx8IGN0eC5fbW91bnQoaWQsIHN0YXRlLCBkYXRhcykpLCBmYWxzZSkgfHxcclxuICAgICAgICAgICAgICAgICF0aGlzLnBhcmVudCApXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcmVudC5fbW91bnQoLi4uYXJndW1lbnRzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jb25zdHJ1Y3Rvci5TdG9yZS5tb3VudFN0b3JlKGlkLCB0aGlzLCBudWxsLCBzdGF0ZSwgZGF0YXMpO1xyXG4gICAgICAgIHRoaXMuX3dhdGNoU3RvcmUoaWQpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9fY29udGV4dFtpZF07XHJcbiAgICB9XHJcblxyXG4gICAgX3dhdGNoU3RvcmUoIGlkLCBzdGF0ZSwgZGF0YXMgKSB7XHJcbiAgICAgICAgaWYgKCAhdGhpcy5fX2NvbnRleHRbaWRdICkgey8vYXNrIG1peGVkIHx8IHBhcmVudFxyXG4gICAgICAgICAgICBpZiAoIHRoaXMuX19taXhlZC5yZWR1Y2UoKCBtb3VudGVkLCBjdHggKSA9PiAobW91bnRlZCB8fCBjdHguX3dhdGNoU3RvcmUoaWQsIHN0YXRlLCBkYXRhcykpLCBmYWxzZSkgfHxcclxuICAgICAgICAgICAgICAgICF0aGlzLnBhcmVudCApXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcmVudC5fd2F0Y2hTdG9yZSguLi5hcmd1bWVudHMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoICF0aGlzLl9fbGlzdGVuaW5nW2lkXSAmJiAhaXNGdW5jdGlvbih0aGlzLl9fY29udGV4dFtpZF0pICkge1xyXG4gICAgICAgICAgICAhdGhpcy5fX2NvbnRleHRbaWRdLmlzU3RhYmxlKCkgJiYgdGhpcy53YWl0KGlkKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX19jb250ZXh0W2lkXS5vbihcclxuICAgICAgICAgICAgICAgIHRoaXMuX19saXN0ZW5pbmdbaWRdID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICd1cGRhdGUnICAgOiBzID0+IHRoaXMucHJvcGFnKCksXHJcbiAgICAgICAgICAgICAgICAgICAgJ3N0YWJsZScgICA6IHMgPT4gdGhpcy5yZWxlYXNlKGlkKSxcclxuICAgICAgICAgICAgICAgICAgICAndW5zdGFibGUnIDogcyA9PiB0aGlzLndhaXQoaWQpXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgbWl4aW4oIHRhcmdldEN0eCApIHtcclxuICAgICAgICBsZXQgcGFyZW50ID0gdGhpcy5wYXJlbnQsIGxpc3RzO1xyXG4gICAgICAgIHRoaXMuX19taXhlZC5wdXNoKHRhcmdldEN0eClcclxuICAgICAgICB0YXJnZXRDdHgucmV0YWluKCk7XHJcblxyXG4gICAgICAgIHRoaXMuX19taXhlZExpc3QucHVzaChsaXN0cyA9IHtcclxuICAgICAgICAgICAgJ3N0YWJsZScgICA6IHMgPT4gdGhpcy5yZWxlYXNlKHRhcmdldEN0eC5faWQpLFxyXG4gICAgICAgICAgICAndW5zdGFibGUnIDogcyA9PiB0aGlzLndhaXQodGFyZ2V0Q3R4Ll9pZCksXHJcbiAgICAgICAgICAgICd1cGRhdGUnICAgOiBzID0+IHRoaXMuX3Byb3BhZygpXHJcbiAgICAgICAgfSlcclxuICAgICAgICB0YXJnZXRDdHgub24obGlzdHMpO1xyXG4gICAgICAgIF9fcHJvdG9fX3B1c2godGhpcywgJ3N0b3JlcycsIHBhcmVudCk7XHJcbiAgICAgICAgX19wcm90b19fcHVzaCh0aGlzLCAnc3RhdGUnLCBwYXJlbnQpO1xyXG4gICAgICAgIF9fcHJvdG9fX3B1c2godGhpcywgJ2RhdGFzJywgcGFyZW50KTtcclxuICAgICAgICB0YXJnZXRDdHgucmVsaW5rKHRhcmdldEN0eC5fX2NvbnRleHQsIHRoaXMsIHRydWUpO1xyXG5cclxuICAgICAgICBfX3Byb3RvX19wdXNoKHRoaXMsICdzdG9yZXMnLCB0aGlzKTtcclxuICAgICAgICBfX3Byb3RvX19wdXNoKHRoaXMsICdzdGF0ZScsIHRoaXMpO1xyXG4gICAgICAgIF9fcHJvdG9fX3B1c2godGhpcywgJ2RhdGFzJywgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5yZWxpbmsodGhpcy5fX2NvbnRleHQsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdGVyKCByYXdDdHgsIHN0YXRlID0ge30sIGRhdGFzID0ge30gKSB7XHJcbiAgICAgICAgdGhpcy5yZWxpbmsocmF3Q3R4LCB0aGlzLCBmYWxzZSwgc3RhdGUsIGRhdGFzKTtcclxuICAgICAgICBPYmplY3Qua2V5cyhyYXdDdHgpLmZvckVhY2goXHJcbiAgICAgICAgICAgIGlkID0+IChpc0Z1bmN0aW9uKHJhd0N0eFtpZF0pICYmIHJhd0N0eFtpZF0uc2luZ2xldG9uICYmIHRoaXMuX21vdW50KGlkLCBzdGF0ZVtpZF0sIGRhdGFzW2lkXSkpKVxyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE1hcCBzcmNDdHggc3RvcmUncyBvbiB0YXJnZXRDdHggaGVhZGVycyBwcm90bydzXHJcbiAgICAgKiBAcGFyYW0gc3JjQ3R4XHJcbiAgICAgKiBAcGFyYW0gdGFyZ2V0Q3R4XHJcbiAgICAgKiBAcGFyYW0gc3RhdGVcclxuICAgICAqIEBwYXJhbSBkYXRhc1xyXG4gICAgICovXHJcbiAgICByZWxpbmsoIHNyY0N0eCwgdGFyZ2V0Q3R4ID0gdGhpcywgZXh0ZXJuYWwsIHN0YXRlID0ge30sIGRhdGFzID0ge30gKSB7XHJcbiAgICAgICAgbGV0IGxjdHggPSB0YXJnZXRDdHguX3N0b3Jlcy5wcm90b3R5cGU7XHJcbiAgICAgICAgT2JqZWN0LmtleXMoc3JjQ3R4KVxyXG4gICAgICAgICAgICAuZm9yRWFjaChcclxuICAgICAgICAgICAgICAgIGlkID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIHRhcmdldEN0eC5fX2NvbnRleHRbaWRdID09PSBzcmNDdHhbaWRdIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldEN0eC5fX2NvbnRleHRbaWRdICYmICh0YXJnZXRDdHguX19jb250ZXh0W2lkXS5jb25zdHJ1Y3RvciA9PT0gc3JjQ3R4W2lkXSApIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIHRhcmdldEN0eC5fX2NvbnRleHRbaWRdICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCJSZXNjb3BlIENvbnRleHQgOiBcIiwgaWQsIFwiIGFscmVhZHkgZXhpc3QgaW4gdGhpcyBjb250ZXh0ICFcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCAhZXh0ZXJuYWwgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9fY29udGV4dFtpZF0gPSBzcmNDdHhbaWRdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxjdHgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoKCBjdHgsIGlkICkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldCA6ICgpID0+IHRoaXMuX19jb250ZXh0W2lkXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5fX2NvbnRleHQsIGlkKVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRDdHguX3N0YXRlLnByb3RvdHlwZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICgoIGN0eCwgaWQgKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0IDogKCkgPT4gKGN0eFtpZF0gJiYgY3R4W2lkXS5zdGF0ZSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0IDogKCB2ICkgPT4gKHRoaXMuX21vdW50KGlkLCB2KSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMuX19jb250ZXh0LCBpZClcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0Q3R4Ll9kYXRhcy5wcm90b3R5cGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoKCBjdHgsIGlkICkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldCA6ICgpID0+IChjdHhbaWRdICYmIGN0eFtpZF0uZGF0YXMpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldCA6ICggdiApID0+ICh0aGlzLl9tb3VudChpZCwgdW5kZWZpbmVkLCB2KSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMuX19jb250ZXh0LCBpZClcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0gb2JqIHtSZWFjdC5Db21wb25lbnR8U3RvcmV8ZnVuY3Rpb24pXHJcbiAgICAgKiBAcGFyYW0ga2V5IHtzdHJpbmd9IG9wdGlvbmFsIGtleSB3aGVyZSB0byBtYXAgdGhlIHB1YmxpYyBzdGF0ZVxyXG4gICAgICovXHJcbiAgICBiaW5kKCBvYmosIGtleSwgYXMsIHNldEluaXRpYWwgPSB0cnVlICkge1xyXG4gICAgICAgIGxldCBsYXN0UmV2cywgZGF0YXM7XHJcbiAgICAgICAgaWYgKCBrZXkgJiYgIWlzQXJyYXkoa2V5KSApXHJcbiAgICAgICAgICAgIGtleSA9IFtrZXldO1xyXG5cclxuICAgICAgICAvLyBrZXkgPSBrZXl8fFxyXG5cclxuICAgICAgICBpZiAoIGFzID09PSB0cnVlICkge1xyXG4gICAgICAgICAgICBzZXRJbml0aWFsID0gdHJ1ZTtcclxuICAgICAgICAgICAgYXMgICAgICAgICA9IG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9mb2xsb3dlcnMucHVzaChcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgb2JqLFxyXG4gICAgICAgICAgICAgICAga2V5LFxyXG4gICAgICAgICAgICAgICAgYXMsXHJcbiAgICAgICAgICAgICAgICBsYXN0UmV2cyA9IGtleSAmJiBrZXkucmVkdWNlKCggcmV2cywgaWQgKSA9PiAocmV2c1tpZF0gPSAwLCByZXZzKSwge30pXHJcbiAgICAgICAgICAgIF0pO1xyXG5cclxuICAgICAgICB0aGlzLm1vdW50KGtleSk7XHJcblxyXG4gICAgICAgIGlmICggc2V0SW5pdGlhbCAmJiB0aGlzLl9zdGFibGUgKSB7XHJcbiAgICAgICAgICAgIGRhdGFzID0gdGhpcy5nZXRVcGRhdGVzKGxhc3RSZXZzKTtcclxuICAgICAgICAgICAgaWYgKCAhZGF0YXMgKSByZXR1cm47XHJcbiAgICAgICAgICAgIGlmICggdHlwZW9mIG9iaiAhPSBcImZ1bmN0aW9uXCIgKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIGFzICkgb2JqLnNldFN0YXRlKHtbYXNdIDogZGF0YXN9KTtcclxuICAgICAgICAgICAgICAgIGVsc2Ugb2JqLnNldFN0YXRlKGRhdGFzKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG9iaihkYXRhcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gbGFzdFJldnMgJiZcclxuICAgICAgICAgICAgLy8ga2V5LmZvckVhY2goaWQgPT4gKGxhc3RSZXZzW2lkXSA9IHRoaXMuc3RvcmVzW2lkXSAmJiB0aGlzLnN0b3Jlc1tpZF0uX3JldiB8fCAwKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVW4gYmluZCB0aGlzIGNvbnRleHQgb2ZmIHRoZSBnaXZlbiBjb21wb25lbnQta2V5c1xyXG4gICAgICogQHBhcmFtIG9ialxyXG4gICAgICogQHBhcmFtIGtleVxyXG4gICAgICogQHJldHVybnMge0FycmF5LjwqPn1cclxuICAgICAqL1xyXG4gICAgdW5CaW5kKCBvYmosIGtleSwgYXMgKSB7XHJcbiAgICAgICAgdmFyIGZvbGxvd2VycyA9IHRoaXMuX2ZvbGxvd2VycyxcclxuICAgICAgICAgICAgaSAgICAgICAgID0gZm9sbG93ZXJzICYmIGZvbGxvd2Vycy5sZW5ndGg7XHJcbiAgICAgICAgd2hpbGUgKGZvbGxvd2VycyAmJiBpLS0pXHJcbiAgICAgICAgICAgIGlmICggZm9sbG93ZXJzW2ldWzBdID09PSBvYmogJiYgKCcnICsgZm9sbG93ZXJzW2ldWzFdKSA9PSAoJycgKyBrZXkpICYmXHJcbiAgICAgICAgICAgICAgICAoJycgKyBmb2xsb3dlcnNbaV1bMl0pID09ICgnJyArIGFzKSApXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZm9sbG93ZXJzLnNwbGljZShpLCAxKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgbWFwKCB0bywgc3RvcmVzLCBiaW5kPXRydWUgKSB7XHJcbiAgICAgICAgdGhpcy5tb3VudChzdG9yZXMpO1xyXG4gICAgICAgIGJpbmQmJnRoaXMuYmluZCh0bywgc3RvcmVzLCBudWxsLCBmYWxzZSk7XHJcblxyXG4gICAgICAgIHJldHVybiBzdG9yZXMucmVkdWNlKCggZGF0YXMsIGlkICkgPT4gKGRhdGFzW2lkXSA9IHRoaXMuc3RvcmVzW2lkXSAmJiB0aGlzLnN0b3Jlc1tpZF0uZGF0YXMsIGRhdGFzKSwge30pO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFVwZGF0ZXMoIHJldnMsIG91dHB1dCwgdXBkYXRlZCApIHtcclxuICAgICAgICBsZXQgY3R4ID0gdGhpcy5fX2NvbnRleHQ7XHJcblxyXG4gICAgICAgIG91dHB1dCA9IG91dHB1dCB8fCB7fTtcclxuICAgICAgICBPYmplY3Qua2V5cyhjdHgpLmZvckVhY2goXHJcbiAgICAgICAgICAgIGlkID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICggIW91dHB1dFtpZF1cclxuICAgICAgICAgICAgICAgICAgICAmJiAoICFyZXZzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHx8IChyZXZzLmhhc093blByb3BlcnR5KGlkKSAmJiByZXZzW2lkXSA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB8fCAhKCAhcmV2cy5oYXNPd25Qcm9wZXJ0eShpZCkgfHwgY3R4W2lkXS5fcmV2IDw9IHJldnNbaWRdICkpXHJcbiAgICAgICAgICAgICAgICApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlZCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIG91dHB1dFtpZF0gPSB0aGlzLmRhdGFzW2lkXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIHJldnMgJiYgcmV2c1tpZF0gIT09IHVuZGVmaW5lZCApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldnNbaWRdID0gY3R4W2lkXS5fcmV2O1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdXBkYXRlZCA9IHRoaXMuX19taXhlZC5yZWR1Y2UoKCB1cGRhdGVkLCBjdHggKSA9PiAoY3R4LmdldFVwZGF0ZXMocmV2cywgb3V0cHV0LCB1cGRhdGVkKSB8fCB1cGRhdGVkKSwgdXBkYXRlZCk7XHJcbiAgICAgICAgdXBkYXRlZCA9IHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LmdldFVwZGF0ZXMocmV2cywgb3V0cHV0LCB1cGRhdGVkKSB8fCB1cGRhdGVkO1xyXG4gICAgICAgIHJldHVybiB1cGRhdGVkICYmIG91dHB1dDtcclxuICAgIH1cclxuXHJcbiAgICBzZXJpYWxpemUoIGZsYWdzX3N0YXRlcyA9IC8uKi8sIGZsYWdzX2RhdGFzID0gLy4qLyApIHtcclxuICAgICAgICBsZXQgY3R4ID0gdGhpcy5fX2NvbnRleHQsIG91dHB1dCA9IHtzdGF0ZSA6IHt9LCBkYXRhcyA6IHt9fSxcclxuICAgICAgICAgICAgX2ZsYWdzX3N0YXRlcyxcclxuICAgICAgICAgICAgX2ZsYWdzX2RhdGFzO1xyXG4gICAgICAgIGlmICggaXNBcnJheShmbGFnc19zdGF0ZXMpIClcclxuICAgICAgICAgICAgZmxhZ3Nfc3RhdGVzLmZvckVhY2goaWQgPT4gKG91dHB1dC5zdGF0ZVtpZF0gPSB0aGlzLnN0YXRlW2lkXSkpXHJcblxyXG4gICAgICAgIGlmICggaXNBcnJheShmbGFnc19kYXRhcykgKVxyXG4gICAgICAgICAgICBmbGFnc19kYXRhcy5mb3JFYWNoKGlkID0+IChvdXRwdXQuZGF0YXNbaWRdID0gdGhpcy5kYXRhc1tpZF0pKVxyXG5cclxuICAgICAgICBpZiAoICFpc0FycmF5KGZsYWdzX2RhdGFzKSAmJiAhaXNBcnJheShmbGFnc19zdGF0ZXMpIClcclxuICAgICAgICAgICAgT2JqZWN0LmtleXMoY3R4KS5mb3JFYWNoKFxyXG4gICAgICAgICAgICAgICAgaWQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICggaXNGdW5jdGlvbihjdHhbaWRdKSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGZsYWdzID0gY3R4W2lkXS5jb25zdHJ1Y3Rvci5mbGFncztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZmxhZ3MgPSBpc0FycmF5KGZsYWdzKSA/IGZsYWdzIDogW2ZsYWdzIHx8IFwiXCJdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIGZsYWdzLnJlZHVjZSgoIHIsIGZsYWcgKSA9PiAociB8fCBfZmxhZ3Nfc3RhdGVzLnRlc3QoZmxhZykpLCBmYWxzZSkgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXQuc3RhdGVbaWRdID0gdGhpcy5zdGF0ZVtpZF07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICggZmxhZ3MucmVkdWNlKCggciwgZmxhZyApID0+IChyIHx8IF9mbGFnc19kYXRhcy50ZXN0KGZsYWcpKSwgZmFsc2UpIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0LmRhdGFzW2lkXSA9IHRoaXMuZGF0YXNbaWRdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgcmV0dXJuIG91dHB1dDtcclxuICAgIH1cclxuXHJcbiAgICBvbiggbGlzdHMgKSB7XHJcblxyXG4gICAgICAgIGlmICggIWlzU3RyaW5nKGxpc3RzKSAmJiBsaXN0cyApXHJcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGxpc3RzKS5mb3JFYWNoKGsgPT4gc3VwZXIub24oaywgbGlzdHNba10pKTtcclxuICAgICAgICBlbHNlIHN1cGVyLm9uKC4uLmFyZ3VtZW50cyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlTGlzdGVuZXIoIGxpc3RzICkge1xyXG4gICAgICAgIGlmICggIWlzU3RyaW5nKGxpc3RzKSAmJiBsaXN0cyApXHJcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGxpc3RzKS5mb3JFYWNoKGsgPT4gc3VwZXIucmVtb3ZlTGlzdGVuZXIoaywgbGlzdHNba10pKTtcclxuICAgICAgICBlbHNlIHN1cGVyLnJlbW92ZUxpc3RlbmVyKC4uLmFyZ3VtZW50cyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBvbmNlKCdzdGFibGUnLCBjYilcclxuICAgICAqIEBwYXJhbSBvYmoge1JlYWN0LkNvbXBvbmVudHxTdG9yZXxmdW5jdGlvbilcclxuICAgICAqIEBwYXJhbSBrZXkge3N0cmluZ30gb3B0aW9uYWwga2V5IHdoZXJlIHRvIG1hcCB0aGUgcHVibGljIHN0YXRlXHJcbiAgICAgKi9cclxuICAgIHRoZW4oIGNiICkge1xyXG4gICAgICAgIGlmICggdGhpcy5fc3RhYmxlIClcclxuICAgICAgICAgICAgcmV0dXJuIGNiKG51bGwsIHRoaXMuZGF0YXMpO1xyXG4gICAgICAgIHRoaXMub25jZSgnc3RhYmxlJywgZSA9PiBjYihudWxsLCB0aGlzLmRhdGFzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzdG9yZSgge3N0YXRlLCBkYXRhc30sIHF1aWV0ICkge1xyXG4gICAgICAgIGxldCBjdHggPSB0aGlzLl9fY29udGV4dDtcclxuICAgICAgICBPYmplY3Qua2V5cyhkYXRhcykuZm9yRWFjaChcclxuICAgICAgICAgICAgaWQgPT4ge1xyXG4gICAgICAgICAgICAgICAgcXVpZXQgP1xyXG4gICAgICAgICAgICAgICAgY3R4LmRhdGFzID0gZGF0YXNbaWRdXHJcbiAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgY3R4LnB1c2goZGF0YXNbaWRdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgT2JqZWN0LmtleXMoc3RhdGUpLmZvckVhY2goXHJcbiAgICAgICAgICAgIGlkID0+IHtcclxuICAgICAgICAgICAgICAgIHF1aWV0ID9cclxuICAgICAgICAgICAgICAgIGN0eC5zdGF0ZSA9IHN0YXRlW2lkXVxyXG4gICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgIGN0eC5zZXRTdGF0ZShzdGF0ZVtpZF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcmV0YWluKCByZWFzb24gKSB7XHJcbiAgICAgICAgdGhpcy5fX3JldGFpbkxvY2tzLmFsbCsrO1xyXG4gICAgICAgIGlmICggcmVhc29uICkge1xyXG4gICAgICAgICAgICB0aGlzLl9fcmV0YWluTG9ja3NbcmVhc29uXSA9IHRoaXMuX19yZXRhaW5Mb2Nrc1tyZWFzb25dIHx8IDA7XHJcbiAgICAgICAgICAgIHRoaXMuX19yZXRhaW5Mb2Nrc1tyZWFzb25dKys7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRpc3Bvc2UoIHJlYXNvbiApIHtcclxuICAgICAgICB0aGlzLl9fcmV0YWluTG9ja3MuYWxsLS07XHJcbiAgICAgICAgaWYgKCByZWFzb24gKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX19yZXRhaW5Mb2Nrc1tyZWFzb25dID0gdGhpcy5fX3JldGFpbkxvY2tzW3JlYXNvbl0gfHwgMDtcclxuICAgICAgICAgICAgdGhpcy5fX3JldGFpbkxvY2tzW3JlYXNvbl0tLTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCAhdGhpcy5fX3JldGFpbkxvY2tzLmFsbCApIHtcclxuICAgICAgICAgICAgaWYgKCB0aGlzLl9wZXJzaXN0ZW5jZVRtICkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZGVzdHJveVRNICYmIGNsZWFyVGltZW91dCh0aGlzLl9kZXN0cm95VE0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZGVzdHJveVRNID0gc2V0VGltZW91dChcclxuICAgICAgICAgICAgICAgICAgICBlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50aGVuKHM9PighdGhpcy5fX3JldGFpbkxvY2tzLmFsbCAmJiB0aGlzLmRlc3Ryb3koKSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcGVyc2lzdGVuY2VUbVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGhlbihzPT4oIXRoaXMuX19yZXRhaW5Mb2Nrcy5hbGwgJiYgdGhpcy5kZXN0cm95KCkpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXRhaW5TdG9yZXMoIHN0b3Jlcz1bXSwgcmVhc29uICkge1xyXG4gICAgICAgIHN0b3Jlcy5mb3JFYWNoKFxyXG4gICAgICAgICAgICBpZCA9PiAodGhpcy5zdG9yZXNbaWRdICYmIHRoaXMuc3RvcmVzW2lkXS5yZXRhaW4gJiYgdGhpcy5zdG9yZXNbaWRdLnJldGFpbihyZWFzb24pKVxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBkaXNwb3NlU3RvcmVzKCBzdG9yZXM9W10sIHJlYXNvbiApIHtcclxuICAgICAgICBzdG9yZXMuZm9yRWFjaChcclxuICAgICAgICAgICAgaWQgPT4gKHRoaXMuc3RvcmVzW2lkXSAmJiB0aGlzLnN0b3Jlc1tpZF0uZGlzcG9zZSAmJiB0aGlzLnN0b3Jlc1tpZF0uZGlzcG9zZShyZWFzb24pKVxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICB3YWl0KCByZWFzb24gKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ3YWl0XCIsIHJlYXNvbik7XHJcbiAgICAgICAgdGhpcy5fc3RhYmxlID0gZmFsc2U7XHJcbiAgICAgICAgIXRoaXMuX193OExvY2tzLmFsbCAmJiB0aGlzLmVtaXQoXCJ1bnN0YWJsZVwiLCB0aGlzKTtcclxuICAgICAgICB0aGlzLl9fdzhMb2Nrcy5hbGwrKztcclxuICAgICAgICBpZiAoIHJlYXNvbiApIHtcclxuICAgICAgICAgICAgdGhpcy5fX3c4TG9ja3NbcmVhc29uXSA9IHRoaXMuX193OExvY2tzW3JlYXNvbl0gfHwgMDtcclxuICAgICAgICAgICAgdGhpcy5fX3c4TG9ja3NbcmVhc29uXSsrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZWxlYXNlKCByZWFzb24gKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJyZWxlYXNlXCIsIHJlYXNvbik7XHJcbiAgICAgICAgdGhpcy5fX3c4TG9ja3MuYWxsLS07XHJcbiAgICAgICAgaWYgKCByZWFzb24gKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX193OExvY2tzW3JlYXNvbl0gPSB0aGlzLl9fdzhMb2Nrc1tyZWFzb25dIHx8IDA7XHJcbiAgICAgICAgICAgIHRoaXMuX193OExvY2tzW3JlYXNvbl0tLTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fc3RhYmxlID0gdHJ1ZTtcclxuICAgICAgICBpZiAoICF0aGlzLl9fdzhMb2Nrcy5hbGwgKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3N0YWJpbGl6ZXJUTSAmJiBjbGVhclRpbWVvdXQodGhpcy5fc3RhYmlsaXplclRNKTtcclxuICAgICAgICAgICAgdGhpcy5fcHJvcGFnVE0gJiYgY2xlYXJUaW1lb3V0KHRoaXMuX3Byb3BhZ1RNKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX3N0YWJpbGl6ZXJUTSA9IHNldFRpbWVvdXQoXHJcbiAgICAgICAgICAgICAgICBlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoICF0aGlzLl9zdGFibGUgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fc3RhYmlsaXplclRNID0gbnVsbDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KFwic3RhYmxlXCIsIHRoaXMpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wcm9wYWcoKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJvcGFnKCkge1xyXG4gICAgICAgIHRoaXMuX3Byb3BhZ1RNICYmIGNsZWFyVGltZW91dCh0aGlzLl9wcm9wYWdUTSk7XHJcbiAgICAgICAgdGhpcy5fcHJvcGFnVE0gPSBzZXRUaW1lb3V0KFxyXG4gICAgICAgICAgICBlID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3Byb3BhZygpXHJcbiAgICAgICAgICAgIH0sIDUwXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBfcHJvcGFnKCkge1xyXG4gICAgICAgIGlmICggdGhpcy5fZm9sbG93ZXJzLmxlbmd0aCApXHJcbiAgICAgICAgICAgIHRoaXMuX2ZvbGxvd2Vycy5mb3JFYWNoKCggezAgOiBvYmosIDEgOiBrZXksIDIgOiBhcywgMyA6IGxhc3RSZXZzfSApID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBkYXRhcyA9IHRoaXMuZ2V0VXBkYXRlcyhsYXN0UmV2cyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoICFkYXRhcyApIHJldHVybjtcclxuICAgICAgICAgICAgICAgIGlmICggdHlwZW9mIG9iaiAhPSBcImZ1bmN0aW9uXCIgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBhcyApIG9iai5zZXRTdGF0ZSh7W2FzXSA6IGRhdGFzfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBvYmouc2V0U3RhdGUoZGF0YXMpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBvYmooZGF0YXMsIGxhc3RSZXZzJiZbLi4ubGFzdFJldnNdfHxcIm5vIHJldnNcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBsYXN0UmV2cyAmJlxyXG4gICAgICAgICAgICAgICAgLy8ga2V5LmZvckVhY2goaWQgPT4gKGxhc3RSZXZzW2lkXSA9IHRoaXMuc3RvcmVzW2lkXSAmJiB0aGlzLnN0b3Jlc1tpZF0uX3JldiB8fCAwKSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuZW1pdChcInVwZGF0ZVwiLCB0aGlzLmdldFVwZGF0ZXMoKSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogb3JkZXIgZGVzdHJveSBvZiBsb2NhbCBzdG9yZXNcclxuICAgICAqL1xyXG4gICAgZGVzdHJveSgpIHtcclxuICAgICAgICBsZXQgY3R4ID0gdGhpcy5fX2NvbnRleHQ7XHJcblxyXG4gICAgICAgIHRoaXMuZW1pdChcImRlc3Ryb3lcIik7XHJcbiAgICAgICAgT2JqZWN0LmtleXMoXHJcbiAgICAgICAgICAgIHRoaXMuX19saXN0ZW5pbmdcclxuICAgICAgICApLmZvckVhY2goXHJcbiAgICAgICAgICAgIGlkID0+IHRoaXMuX19jb250ZXh0W2lkXS5yZW1vdmVMaXN0ZW5lcih0aGlzLl9fbGlzdGVuaW5nW2lkXSlcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMuX19saXN0ZW5pbmcgPSB7fTtcclxuXHJcbiAgICAgICAgaWYgKCB0aGlzLl9pc0xvY2FsSWQgKVxyXG4gICAgICAgICAgICBkZWxldGUgb3BlbkNvbnRleHRzW3RoaXMuX2lkXTtcclxuICAgICAgICB0aGlzLl9mb2xsb3dlcnMubGVuZ3RoID0gMDtcclxuXHJcbiAgICAgICAgZm9yICggbGV0IGtleSBpbiBjdHggKVxyXG4gICAgICAgICAgICBpZiAoICFpc0Z1bmN0aW9uKGN0eFtrZXldKSApIHtcclxuICAgICAgICAgICAgICAgIGlmICggY3R4W2tleV0uY29udGV4dE9iaiA9PT0gdGhpcyApXHJcbiAgICAgICAgICAgICAgICAgICAgY3R4W2tleV0uZGVzdHJveSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGN0eFtrZXldID0gY3R4W2tleV0uY29uc3RydWN0b3I7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB3aGlsZSAodGhpcy5fX21peGVkTGlzdC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5fX21peGVkWzBdLnJlbW92ZUxpc3RlbmVyKHRoaXMuX19taXhlZExpc3Quc2hpZnQoKSk7XHJcbiAgICAgICAgICAgIHRoaXMuX19taXhlZC5zaGlmdCgpLmRpc3Bvc2UoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCB0aGlzLnBhcmVudCApIHtcclxuICAgICAgICAgICAgdGhpcy5wYXJlbnQucmVtb3ZlTGlzdGVuZXIodGhpcy5fX3BhcmVudExpc3QpO1xyXG4gICAgICAgICAgICB0aGlzLnBhcmVudC5kaXNwb3NlKFwiaXNNeVBhcmVudFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gdGhpcy5kYXRhcyA9IHRoaXMuc3RhdGUgPSB0aGlzLmNvbnRleHQgPSB0aGlzLnN0b3JlcyA9IG51bGw7XHJcbiAgICAgICAgLy8gdGhpcy5fZGF0YXMgPSB0aGlzLl9zdGF0ZSA9IHRoaXMuX3N0b3JlcyA9IG51bGw7XHJcblxyXG5cclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9Db250ZXh0LmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaXNzdHJpbmdcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJpc3N0cmluZ1wiXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImlzYXJyYXlcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJpc2FycmF5XCJcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXZlbnRzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiZXZlbnRzXCJcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaXNmdW5jdGlvblwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImlzZnVuY3Rpb25cIlxuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzaG9ydGlkXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwic2hvcnRpZFwiXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXHJcbiAqIENvcHlyaWdodCAoYykgIDIwMTcgQ2FpcGkgTGFicyAuXHJcbiAqXHJcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcbiAqXHJcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG4gKlxyXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cclxuICovXHJcblxyXG4vKipcclxuICogVWx0cmEgc2NhbGFibGUgc3RhdGUtYXdhcmUgc3RvcmVcclxuICpcclxuICogQHRvZG8gOiBsb3Qgb2Ygb3B0aW1zLi4uXHJcbiAqL1xyXG5cclxudmFyIGlzU3RyaW5nICAgICA9IHJlcXVpcmUoJ2lzc3RyaW5nJylcclxuICAgICwgaXNBcnJheSAgICA9IHJlcXVpcmUoJ2lzYXJyYXknKVxyXG4gICAgLCBpc0Z1bmN0aW9uID0gcmVxdWlyZSgnaXNmdW5jdGlvbicpXHJcbiAgICAsXHJcbiAgICBDb250ZXh0ICAgICAgPSByZXF1aXJlKCcuL0NvbnRleHQnKSxcclxuICAgIEV2ZW50RW1pdHRlciA9IHJlcXVpcmUoJ2V2ZW50cycpLFxyXG4gICAgc2hvcnRpZCAgICAgID0gcmVxdWlyZSgnc2hvcnRpZCcpLFxyXG4gICAgb2JqUHJvdG8gICAgID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHt9KSxcclxuICAgIG9wZW5Db250ZXh0cyA9IHt9O1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0b3JlIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcclxuXHJcbiAgICBzdGF0aWMgdXNlICAgICAgICAgICAgICAgICAgICAgICAgPSBbXTsvLyBvdmVycmlkYWJsZSBsaXN0IG9mIHNvdXJjZSBzdG9yZXNcclxuICAgIHN0YXRpYyBmb2xsb3c7Ly8gb3ZlcnJpZGFibGUgbGlzdCBvZiBzdG9yZSB0aGF0IHdpbGwgYWxsb3cgcHVzaCBpZiB1cGRhdGVkXHJcbiAgICBzdGF0aWMgcmVxdWlyZTtcclxuICAgIHN0YXRpYyBzdGF0aWNDb250ZXh0ICAgICAgICAgICAgICA9IG5ldyBDb250ZXh0KHt9LCB7aWQgOiBcInN0YXRpY1wifSk7XHJcbiAgICBzdGF0aWMgaW5pdGlhbFN0YXRlICAgICAgICAgICAgICAgPSB1bmRlZmluZWQ7Ly8gZGVmYXVsdCBzdGF0ZVxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHR5cGUge251bWJlcn1cclxuICAgICAqL1xyXG4gICAgICAgICAgIHN0YXRpYyBkZWZhdWx0TWF4TGlzdGVuZXJzID0gMTAwO1xyXG4gICAgLyoqXHJcbiAgICAgKiBpZiByZXRhaW4gZ29lcyB0byAwIDpcclxuICAgICAqIGZhbHNlIHRvIG5vdCBkZXN0cm95LFxyXG4gICAgICogMCB0byBzeW5jIGF1dG8gZGVzdHJveVxyXG4gICAgICogTXMgdG8gYXV0b2Rlc3Ryb3kgYWZ0ZXIgdG0gbXMgaWYgbm8gcmV0YWluIGhhcyBiZWVuIGNhbGxlZFxyXG4gICAgICogQHR5cGUge2Jvb2xlYW58SW50fVxyXG4gICAgICovXHJcbiAgICAgICAgICAgc3RhdGljIHBlcnNpc3RlbmNlVG0gICAgICAgPSBmYWxzZTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIGdldCBhIEJ1aWxkZXIta2V5IHBhaXIgZm9yIFN0b3JlOjptYXBcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXHJcbiAgICAgKiBAcmV0dXJucyB7e3N0b3JlOiBTdG9yZSwgbmFtZTogKn19XHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBhcyggbmFtZSApIHtcclxuICAgICAgICByZXR1cm4ge3N0b3JlIDogdGhpcywgbmFtZX07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBNYXAgYWxsIG5hbWVkIHN0b3JlcyBpbiB7a2V5c30gdG8gdGhlIHtvYmplY3R9J3Mgc3RhdGVcclxuICAgICAqIEhvb2sgY29tcG9uZW50V2lsbFVubW91bnQgKGZvciByZWFjdCBjb21wKSBvciBkZXN0cm95IHRvIHVuQmluZCB0aGVtIGF1dG9tYXRpY2FsbHlcclxuICAgICAqIEBzdGF0aWNcclxuICAgICAqIEBwYXJhbSBvYmplY3Qge1JlYWN0LkNvbXBvbmVudHxTdG9yZXwuLi59IHRhcmdldCBzdGF0ZSBhd2FyZSBvYmplY3RcclxuICAgICAqIEBwYXJhbSBrZXlzIHtBcnJheX0gRXggOiBbXCJzZXNzaW9uXCIsIFwib3RoZXJTdGF0aWNOYW1lZFN0b3JlOmtleVwiLCBzdG9yZS5hcygnYW5vdGhlcktleScpXVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgbWFwKCBjb21wb25lbnQsIGtleXMsIGNvbnRleHQsIG9yaWdpbiwgc2V0SW5pdGlhbCA9IGZhbHNlICkge1xyXG4gICAgICAgIHZhciB0YXJnZXRSZXZzICAgICA9IGNvbXBvbmVudC5fcmV2cyB8fCB7fTtcclxuICAgICAgICAvLyB2YXIgdGFyZ2V0Q29udGV4dCAgPSBjb21wb25lbnQuc3RvcmVzIHx8IChjb21wb25lbnQuc3RvcmVzID0gbmV3IENvbnRleHQoe30pKTtcclxuICAgICAgICB2YXIgaW5pdGlhbE91dHB1dHMgPSB7fTtcclxuICAgICAgICBrZXlzICAgICAgICAgICAgICAgPSBpc0FycmF5KGtleXMpID8gWy4uLmtleXNdIDogW2tleXNdO1xyXG5cclxuXHJcbiAgICAgICAgY29udGV4dCA9IGNvbnRleHQgfHwgU3RvcmUuc3RhdGljQ29udGV4dDtcclxuXHJcbiAgICAgICAgLy8gaWYgKCF0YXJnZXRDb250ZXh0Ll9fY29udGV4dClcclxuICAgICAgICAvLyAgICAgZGVidWdnZXI7XHJcblxyXG4gICAgICAgIGtleXMgICAgICAgICAgID0ga2V5cy5maWx0ZXIoXHJcbiAgICAgICAgICAgIC8vIEB0b2RvIDogdXNlIHF1ZXJ5IHJlZnNcclxuICAgICAgICAgICAgLy8gKHN0b3JlKShcXC5zdG9yZSkqKFxcWyhcXCp8KHByb3BzKVxcdyspKylcXF0pPyhcXDphbGlhcylcclxuICAgICAgICAgICAgKCBrZXkgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoICFrZXkgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIk5vdCBhIG1hcHBhYmxlIHN0b3JlIGl0ZW0gJ1wiICsga2V5ICsgXCInIGluIFwiICsgb3JpZ2luICsgJyAhIScpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGxldCBuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIGFsaWFzLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0b3JlO1xyXG4gICAgICAgICAgICAgICAgaWYgKCBrZXkuc3RvcmUgJiYga2V5Lm5hbWUgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpYXMgPSBuYW1lID0ga2V5Lm5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RvcmUgPSBrZXkuc3RvcmU7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCBpc0Z1bmN0aW9uKGtleSkgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZSA9IGFsaWFzID0ga2V5Lm5hbWUgfHwga2V5LmRlZmF1bHROYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIHN0b3JlID0ga2V5O1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBrZXkgICA9IGtleS5tYXRjaCgvKFtcXHdfXSspKD86XFw6XFxbKFxcKilcXF0pPyg/OlxcOihcXCopKT8vKTtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lICA9IGtleVswXTtcclxuICAgICAgICAgICAgICAgICAgICBzdG9yZSA9IGNvbnRleHQuX19jb250ZXh0W2tleVswXV07XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpYXMgPSBrZXlbMV0gPT0gJyonID8gbnVsbCA6IGtleVsyXSB8fCBrZXlbMF07Ly8gYWxsb3cgYmluZGluZyBwcm9wcyAgKFsqXSlcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIHRhcmdldFJldnNbbmFtZV0gKSByZXR1cm4gZmFsc2U7Ly8gaWdub3JlIGRibCB1c2VzIGZvciBub3dcclxuICAgICAgICAgICAgICAgIGlmICggIXN0b3JlICkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJOb3QgYSBtYXBwYWJsZSBzdG9yZSBpdGVtICdcIiArIG5hbWUgKyBcIi9cIiArIGFsaWFzICsgXCInIGluIFwiICsgb3JpZ2luICsgJyAhIScsIHN0b3JlKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCBpc0Z1bmN0aW9uKHN0b3JlKSApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdW50U3RvcmUobmFtZSwgY29udGV4dClcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5fX2NvbnRleHRbbmFtZV0uYmluZChjb21wb25lbnQsIGFsaWFzLCBzZXRJbml0aWFsKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBpZiAoIGNvbnRleHQuX19jb250ZXh0W2tleVswXV0uc3RhdGUgKSB7Ly8gZG8gc3luYyBwdXNoIGFmdGVyIGNvbnN0cnVjdG9yXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGNvbnRleHQuX19jb250ZXh0W2tleVswXV0ucHVzaCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RvcmUuYmluZChjb21wb25lbnQsIGFsaWFzLCBzZXRJbml0aWFsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRhcmdldFJldnNbYWxpYXNdID0gdGFyZ2V0UmV2c1thbGlhc10gfHwgdHJ1ZTtcclxuICAgICAgICAgICAgICAgIC8vICF0YXJnZXRDb250ZXh0Ll9fY29udGV4dFthbGlhc10gJiYgdGFyZ2V0Q29udGV4dC5yZWdpc3Rlcih7W2FsaWFzXSA6IGNvbnRleHQuX19jb250ZXh0W25hbWVdfSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIGNvbnRleHQuX19jb250ZXh0W25hbWVdLmhhc093blByb3BlcnR5KCdkYXRhcycpIClcclxuICAgICAgICAgICAgICAgICAgICBpbml0aWFsT3V0cHV0c1thbGlhc10gPSBjb250ZXh0LmRhdGFzW25hbWVdO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICAgIHZhciBtaXhlZENXVW5tb3VudCxcclxuICAgICAgICAgICAgdW5Nb3VudEtleSA9IGNvbXBvbmVudC5pc1JlYWN0Q29tcG9uZW50ID8gXCJjb21wb25lbnRXaWxsVW5tb3VudFwiIDogXCJkZXN0cm95XCI7XHJcblxyXG4gICAgICAgIGlmICggY29tcG9uZW50Lmhhc093blByb3BlcnR5KHVuTW91bnRLZXkpICkge1xyXG4gICAgICAgICAgICBtaXhlZENXVW5tb3VudCA9IGNvbXBvbmVudFt1bk1vdW50S2V5XTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbXBvbmVudFt1bk1vdW50S2V5XSA9IGZ1bmN0aW9uICgpIHsvLyB0b2RvIGhvcFxyXG4gICAgICAgICAgICBkZWxldGUgdGhpc1t1bk1vdW50S2V5XTtcclxuICAgICAgICAgICAgaWYgKCBtaXhlZENXVW5tb3VudCApXHJcbiAgICAgICAgICAgICAgICB0aGlzW3VuTW91bnRLZXldID0gbWl4ZWRDV1VubW91bnQ7XHJcbiAgICAgICAgICAgIGtleXMubWFwKFxyXG4gICAgICAgICAgICAgICAgKCBrZXkgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWFzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9yZTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIGtleS5zdG9yZSAmJiBrZXkubmFtZSApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpYXMgPSBuYW1lID0ga2V5Lm5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlID0ga2V5LnN0b3JlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIGlzRnVuY3Rpb24oa2V5KSApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZSA9IGFsaWFzID0ga2V5Lm5hbWUgfHwga2V5LmRlZmF1bHROYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9yZSA9IGNvbnRleHQuX19jb250ZXh0W25hbWVdO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleSAgID0ga2V5LnNwbGl0KCc6Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUgID0ga2V5WzBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9yZSA9IGNvbnRleHQuX19jb250ZXh0W2tleVswXV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWFzID0ga2V5WzFdIHx8IGtleVswXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHN0b3JlICYmICFpc0Z1bmN0aW9uKHN0b3JlKSAmJiBzdG9yZS51bkJpbmQoY29tcG9uZW50LCBhbGlhcylcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXNbdW5Nb3VudEtleV0gJiYgdGhpc1t1bk1vdW50S2V5XS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGluaXRpYWxPdXRwdXRzO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRDb250ZXh0KCBjb250ZXh0cyApIHtcclxuICAgICAgICBsZXQgc2tleSA9IGlzQXJyYXkoY29udGV4dHMpID8gY29udGV4dHMuc29ydCgoIGEsIGIgKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICggYS5maXJzdG5hbWUgPCBiLmZpcnN0bmFtZSApIHJldHVybiAtMTtcclxuICAgICAgICAgICAgaWYgKCBhLmZpcnN0bmFtZSA+IGIuZmlyc3RuYW1lICkgcmV0dXJuIDE7XHJcbiAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgIH0pLmpvaW4oJzo6JykgOiBjb250ZXh0cztcclxuICAgICAgICByZXR1cm4gQ29udGV4dC5jb250ZXh0c1tza2V5XSA9IENvbnRleHQuY29udGV4dHNbc2tleV0gfHwgbmV3IENvbnRleHQoe30sIHtpZCA6IHNrZXl9KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgbW91bnRTdG9yZSggbmFtZSwgY29udGV4dCwgc3RvcmUsIHN0YXRlLCBkYXRhcyApIHtcclxuICAgICAgICBsZXQgY3R4LCBjb250ZXh0TWFwID0gY29udGV4dC5fX2NvbnRleHQ7XHJcbiAgICAgICAgY29udGV4dE1hcFtuYW1lXSAgICA9IHN0b3JlID0gc3RvcmUgfHwgY29udGV4dE1hcFtuYW1lXTtcclxuICAgICAgICBpZiAoICFzdG9yZSApIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIk5vdCBhIG1hcHBhYmxlIHN0b3JlIGl0ZW0gJ1wiICsgbmFtZSArICcgISEnLCBzdG9yZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9IGVsc2UgaWYgKCBpc0Z1bmN0aW9uKHN0b3JlKSApIHtcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgaWYgKCBzdG9yZSAmJiAoc3RvcmUuY29udGV4dHMgfHwgc3RvcmUuY29udGV4dCkgKSB7XHJcbiAgICAgICAgICAgICAgICBjdHggPSB0aGlzLmdldENvbnRleHQoc3RvcmUuY29udGV4dHMgfHwgW3N0b3JlLmNvbnRleHRdKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjdHgucmVnaXN0ZXIoe1tuYW1lXSA6IGN0eC5fX2NvbnRleHRbbmFtZV0gfHwgc3RvcmV9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb250ZXh0TWFwW25hbWVdID0gY3R4W25hbWVdID0gbmV3IHN0b3JlKGNvbnRleHQsIHtzdGF0ZSwgZGF0YXN9KTtcclxuICAgICAgICAgICAgICAgIGN0eC5fd2F0Y2hTdG9yZShuYW1lKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjdHhbbmFtZV07XHJcbiAgICAgICAgICAgIH0gZWxzZVxyXG4gICAgICAgICAgICAgICAgc3RvcmUgPSBjb250ZXh0TWFwW25hbWVdID0gbmV3IHN0b3JlKGNvbnRleHQsIHtzdGF0ZSwgZGF0YXN9KTtcclxuICAgICAgICAgICAgY29udGV4dE1hcFtuYW1lXS5yZWxpbmsobmFtZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKCBzdGF0ZSAhPT0gdW5kZWZpbmVkICYmIGRhdGFzID09PSB1bmRlZmluZWQgKVxyXG4gICAgICAgICAgICAgICAgc3RvcmUuc2V0U3RhdGUoc3RhdGUpO1xyXG4gICAgICAgICAgICBlbHNlIGlmICggc3RhdGUgIT09IHVuZGVmaW5lZCApXHJcbiAgICAgICAgICAgICAgICBzdG9yZS5zdGF0ZSA9IHN0YXRlO1xyXG5cclxuICAgICAgICAgICAgaWYgKCBkYXRhcyAhPT0gdW5kZWZpbmVkIClcclxuICAgICAgICAgICAgICAgIHN0b3JlLnB1c2goZGF0YXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc3RvcmU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb25zdHJ1Y3Rvciwgd2lsbCBidWlsZCBhIHJlc2NvcGUgc3RvcmVcclxuICAgICAqXHJcbiAgICAgKiAoY29udGV4dCwge3JlcXVpcmUsdXNlLHJlZmluZSxzdGF0ZSwgZGF0YXN9KVxyXG4gICAgICogKGNvbnRleHQpXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGNvbnRleHQge29iamVjdH0gY29udGV4dCB3aGVyZSB0byBmaW5kIHRoZSBvdGhlciBzdG9yZXMgKGRlZmF1bHQgOiBzdGF0aWMgc3RhdGljQ29udGV4dCApXHJcbiAgICAgKiBAcGFyYW0ga2V5cyB7QXJyYXl9IChwYXNzZWQgdG8gU3RvcmU6Om1hcCkgRXggOiBbXCJzZXNzaW9uXCIsIFwib3RoZXJOYW1lZFN0b3JlOmtleVwiLCBvdGhlclN0b3JlLmFzKFwib3RoZXJLZXlcIildXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdmFyIGFyZ3ogICAgICAgICA9IFsuLi5hcmd1bWVudHNdLFxyXG4gICAgICAgICAgICBfc3RhdGljICAgICAgPSB0aGlzLmNvbnN0cnVjdG9yLFxyXG4gICAgICAgICAgICBjb250ZXh0ICAgICAgPSAhaXNBcnJheShhcmd6WzBdKSAmJiAhaXNTdHJpbmcoYXJnelswXSkgPyBhcmd6LnNoaWZ0KCkgOiBfc3RhdGljLnN0YXRpY0NvbnRleHQsXHJcbiAgICAgICAgICAgIGNmZyAgICAgICAgICA9IGFyZ3pbMF0gJiYgIWlzQXJyYXkoYXJnelswXSkgJiYgIWlzU3RyaW5nKGFyZ3pbMF0pID8gYXJnei5zaGlmdCgpIDoge30sXHJcbiAgICAgICAgICAgIG5hbWUgICAgICAgICA9IGlzU3RyaW5nKGFyZ3pbMF0pID8gYXJnelswXSA6IGNmZy5uYW1lIHx8IF9zdGF0aWMubmFtZSxcclxuICAgICAgICAgICAgd2F0Y2hzICAgICAgID0gaXNBcnJheShhcmd6WzBdKSA/IGFyZ3ouc2hpZnQoKSA6IGNmZy51c2UgfHwgW10sLy8gd2F0Y2hzIG5lZWQgdG8gYmUgZGVmaW5lZCBhZnRlciBhbGwgdGhlIHN0b3JlIGFyZSByZWdpc3RlcmVkIDogc28gd2UgY2FuJ3QgZGVhbCB3aXRoIGFueSBcInN0YXRpYyB1c2VcIiBhdXRvbWF0aWNseVxyXG4gICAgICAgICAgICByZWZpbmUgICAgICAgPSBpc0Z1bmN0aW9uKGFyZ3pbMF0pID8gYXJnei5zaGlmdCgpIDogY2ZnLnJlZmluZSB8fCBudWxsLFxyXG4gICAgICAgICAgICBpbml0aWFsU3RhdGUgPSBfc3RhdGljLmluaXRpYWxTdGF0ZTtcclxuXHJcbiAgICAgICAgdGhpcy5fdWlkICAgICAgICAgID0gY2ZnLl91aWQgfHwgc2hvcnRpZC5nZW5lcmF0ZSgpO1xyXG4gICAgICAgIHRoaXMuX21heExpc3RlbmVycyA9IGNmZy5kZWZhdWx0TWF4TGlzdGVuZXJzIHx8IFN0b3JlLmRlZmF1bHRNYXhMaXN0ZW5lcnM7XHJcbiAgICAgICAgdGhpcy5sb2NrcyAgICAgICAgID0gMDtcclxuICAgICAgICB0aGlzLl9vblN0YWJpbGl6ZSAgPSBbXTtcclxuXHJcbiAgICAgICAgdGhpcy5fcGVyc2lzdGVuY2VUbSA9IGNmZy5wZXJzaXN0ZW5jZVRtIHx8IHRoaXMuY29uc3RydWN0b3IucGVyc2lzdGVuY2VUbTtcclxuICAgICAgICBpZiAoIGlzU3RyaW5nKGFyZ3pbMF0pICkge1xyXG4gICAgICAgICAgICBpZiAoIGNvbnRleHQuX19jb250ZXh0W25hbWVdIClcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIlJlU2NvcGU6IE92ZXJ3cml0aW5nIGFuIGV4aXN0aW5nIHN0YXRpYyBuYW1lZCBzdG9yZSAoICVzICkgISFcIiwgbmFtZSk7XHJcbiAgICAgICAgICAgIGNvbnRleHQuX19jb250ZXh0W25hbWVdID0gdGhpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICggY2ZnICYmIGNmZy5vbiApIHtcclxuICAgICAgICAgICAgdGhpcy5vbihjZmcub24pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyB0aGlzLnN0YXRlICAgICAgPSB0aGlzLnN0YXRlIHx8IHt9O1xyXG5cclxuICAgICAgICB0aGlzLl91c2UgPSB3YXRjaHM7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuXHJcbiAgICAgICAgaWYgKCBjb250ZXh0LnN0b3JlcyApIHtcclxuICAgICAgICAgICAgdGhpcy5jb250ZXh0T2JqID0gY29udGV4dDtcclxuICAgICAgICAgICAgdGhpcy5jb250ZXh0ICAgID0gY29udGV4dC5zdG9yZXM7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jb250ZXh0T2JqID0gbmV3IENvbnRleHQoY29udGV4dCk7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGV4dCAgICA9IGNvbnRleHQuc3RvcmVzO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIHRoaXMuX3N0YWJsZSAgICAgICA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5fcmV2ICAgICAgICAgID0gMTtcclxuICAgICAgICB0aGlzLl9yZXZzICAgICAgICAgPSB7fTtcclxuICAgICAgICB0aGlzLnN0b3JlcyAgICAgICAgPSB7fTtcclxuICAgICAgICB0aGlzLl9fcmV0YWluTG9ja3MgPSB7YWxsIDogMH07XHJcbiAgICAgICAgdGhpcy5fcmVxdWlyZSAgICAgID0gW107XHJcblxyXG4gICAgICAgIGlmICggX3N0YXRpYy5yZXF1aXJlIClcclxuICAgICAgICAgICAgdGhpcy5fcmVxdWlyZS5wdXNoKC4uLl9zdGF0aWMucmVxdWlyZSk7XHJcbiAgICAgICAgaWYgKCBjZmcucmVxdWlyZSApXHJcbiAgICAgICAgICAgIHRoaXMuX3JlcXVpcmUucHVzaCguLi5jZmcucmVxdWlyZSk7XHJcblxyXG4gICAgICAgIHRoaXMuX2ZvbGxvd2VycyA9IFtdO1xyXG5cclxuICAgICAgICBpZiAoIGNmZy5oYXNPd25Qcm9wZXJ0eShcImRhdGFzXCIpICYmIGNmZy5kYXRhcyAhPT0gdW5kZWZpbmVkIClcclxuICAgICAgICAgICAgdGhpcy5kYXRhcyA9IGNmZy5kYXRhcztcclxuICAgICAgICBpZiAoIGNmZy5oYXNPd25Qcm9wZXJ0eShcInN0YXRlXCIpICYmIGNmZy5zdGF0ZSAhPT0gdW5kZWZpbmVkIClcclxuICAgICAgICAgICAgaW5pdGlhbFN0YXRlID0gY2ZnLnN0YXRlO1xyXG5cclxuICAgICAgICBpZiAoIHJlZmluZSApXHJcbiAgICAgICAgICAgIHRoaXMucmVmaW5lID0gcmVmaW5lO1xyXG5cclxuICAgICAgICBpZiAoICEhdGhpcy5fdXNlICYmIHRoaXMuX3VzZS5sZW5ndGggKSB7Ly8gaWYgdGhlcmUgaW5pdGlhbCB3YXRjaHMgYW55d2F5XHJcbiAgICAgICAgICAgIHRoaXMucHVsbCh0aGlzLl91c2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCBpbml0aWFsU3RhdGUgKSB7Ly8gc3luYyByZWZpbmVcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IHsuLi5pbml0aWFsU3RhdGV9O1xyXG4gICAgICAgICAgICBpZiAoIHRoaXMuaXNDb21wbGV0ZSgpICYmIHRoaXMuZGF0YXMgPT09IHVuZGVmaW5lZCApXHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGFzID0gdGhpcy5yZWZpbmUodGhpcy5kYXRhcywgdGhpcy5zdGF0ZSwgdGhpcy5zdGF0ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3N0YWJsZSA9IHRoaXMuZGF0YXMgIT09IHVuZGVmaW5lZDsvLyBzdGFibGUgaWYgaXQgaGF2ZSBpbml0aWFsIHJlc3VsdCBkYXRhc1xyXG4gICAgICAgICF0aGlzLl9zdGFibGUgJiYgdGhpcy5lbWl0KCd1bnN0YWJsZScsIHRoaXMuc3RhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogT3ZlcnJpZGFibGUgbWV0aG9kIHRvIGtub3cgaWYgYSBzdGF0ZSBjaGFuZ2Ugc2hvdWxkIGJlIHByb3BhZyB0byB0aGUgbGlzdGVuaW5nIHN0b3JlcyAmIGNvbXBvbmVudHNcclxuICAgICAqIElmIHN0YXRpYyBmb2xsb3cgaXMgZGVmaW5lZCwgc2hvdWxkUHJvcGFnIHdpbGwgcmV0dXJuIHRydWUgaWYgYW55IG9mIHRoZSBcImZvbGxvd1wiIGtleXMgd2FzIHVwZGF0ZWRcclxuICAgICAqIElmIG5vdCBpdCB3aWxsIGFsd2F5cyByZXR1cm4gdHJ1ZVxyXG4gICAgICovXHJcbiAgICBzaG91bGRQcm9wYWcoIG5EYXRhcyApIHtcclxuICAgICAgICB2YXIgX3N0YXRpYyA9IHRoaXMuY29uc3RydWN0b3IsIHIsXHJcbiAgICAgICAgICAgIGNEYXRhcyAgPSB0aGlzLmRhdGFzO1xyXG5cclxuICAgICAgICAvLyBpZiAoICFjU3RhdGUgKVxyXG4gICAgICAgIC8vICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICBpZiAoICFjRGF0YXMgJiYgKCFfc3RhdGljLmZvbGxvdyB8fCAhX3N0YXRpYy5mb2xsb3cubGVuZ3RoIHx8XHJcbiAgICAgICAgICAgICAgICBfc3RhdGljLmZvbGxvdyAmJiBfc3RhdGljLmZvbGxvdy5yZWR1Y2UoKCByLCBpICkgPT4gKHIgfHwgbkRhdGFzICYmIG5EYXRhc1tpXSksIGZhbHNlKSkgKVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICAgICAgaWYgKCBpc0FycmF5KF9zdGF0aWMuZm9sbG93KSApXHJcbiAgICAgICAgICAgIF9zdGF0aWMuZm9sbG93LmZvckVhY2goXHJcbiAgICAgICAgICAgICAgICAoIGtleSApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByID0gciB8fCAobkRhdGFzID8gY0RhdGFzW2tleV0gIT09IG5EYXRhc1trZXldIDogY0RhdGFzICYmIGNEYXRhc1trZXldKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIGVsc2UgaWYgKCBfc3RhdGljLmZvbGxvdyA9PT0gJ3N0cmljdCcgKVxyXG4gICAgICAgICAgICByID0gbkRhdGFzID09PSBjRGF0YXM7XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNEYXRhcyAmJiBPYmplY3Qua2V5cyhjRGF0YXMpLmZvckVhY2goXHJcbiAgICAgICAgICAgICAgICAoIGtleSApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByID0gciB8fCAobkRhdGFzID8gY0RhdGFzW2tleV0gIT09IG5EYXRhc1trZXldIDogY0RhdGFzICYmIGNEYXRhc1trZXldKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBuRGF0YXMgJiYgT2JqZWN0LmtleXMobkRhdGFzKS5mb3JFYWNoKFxyXG4gICAgICAgICAgICAgICAgKCBrZXkgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgciA9IHIgfHwgKG5EYXRhcyA/IGNEYXRhc1trZXldICE9PSBuRGF0YXNba2V5XSA6IGNEYXRhcyAmJiBjRGF0YXNba2V5XSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAhIXI7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBPdmVycmlkYWJsZSByZWZpbmVyIC8gcmVtYXBwZXJcclxuICAgICAqIElmIHN0YXRlIG9yIGxhc3RQdWJsaWNTdGF0ZSBhcmUgc2ltcGxlIGhhc2ggbWFwcyByZWZpbmUgd2lsbCByZXR1cm4gey4uLmRhdGFzLCAuLi5zdGF0ZX1cclxuICAgICAqIGlmIG5vdCBpdCB3aWxsIHJldHVybiB0aGUgbGFzdCBwcml2YXRlIHN0YXRlXHJcbiAgICAgKiBAcGFyYW0gZGF0YXNcclxuICAgICAqIEBwYXJhbSBzdGF0ZVxyXG4gICAgICogQHJldHVybnMgeyp9XHJcbiAgICAgKi9cclxuICAgIHJlZmluZSggZGF0YXMsIHN0YXRlLCBjaGFuZ2VzICkge1xyXG4gICAgICAgIHN0YXRlID0gc3RhdGUgfHwgdGhpcy5zdGF0ZTtcclxuXHJcbiAgICAgICAgaWYgKCAhZGF0YXMgfHwgZGF0YXMuX19wcm90b19fICE9PSBvYmpQcm90byB8fCBzdGF0ZS5fX3Byb3RvX18gIT09IG9ialByb3RvIClcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5kYXRhcywgLi4uc3RhdGV9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWJvdW5jZSB0aGlzIHN0b3JlIHByb3BhZ2F0aW9uICggJiByZWR1Y2luZyApXHJcbiAgICAgKiBAcGFyYW0gY2JcclxuICAgICAqL1xyXG4gICAgc3RhYmlsaXplKCBjYiApIHtcclxuICAgICAgICB2YXIgbWUgPSB0aGlzO1xyXG4gICAgICAgIGNiICYmIG1lLm9uY2UoJ3N0YWJsZScsIGNiKTtcclxuICAgICAgICB0aGlzLl9zdGFibGUgJiYgdGhpcy5lbWl0KCd1bnN0YWJsZScsIHRoaXMuc3RhdGUsIHRoaXMuZGF0YXMpO1xyXG5cclxuICAgICAgICBtZS5fc3RhYmxlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGlmICggdGhpcy5fc3RhYmlsaXplciApXHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9zdGFiaWxpemVyKTtcclxuXHJcbiAgICAgICAgdGhpcy5fc3RhYmlsaXplciA9IHNldFRpbWVvdXQoXHJcbiAgICAgICAgICAgIHRoaXMucHVzaC5iaW5kKFxyXG4gICAgICAgICAgICAgICAgdGhpcyxcclxuICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAoKSA9PiB7Ly9AdG9kb1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIG1lLl9zdGFibGUgICAgICAgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3N0YWJpbGl6ZXIgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMucmVsZWFzZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApKTtcclxuICAgIH1cclxuXHJcbiAgICBkaXNwYXRjaCggZXZlbnQgKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUHVsbCBzdG9yZXMgaW4gdGhlIHByaXZhdGUgc3RhdGVcclxuICAgICAqIEBwYXJhbSBzdG9yZXMgIHtBcnJheX0gKHBhc3NlZCB0byBTdG9yZTo6bWFwKSBFeCA6IFtcInNlc3Npb25cIiwgXCJvdGhlck5hbWVkU3RvcmU6a2V5XCIsIG90aGVyU3RvcmUuYXMoXCJvdGhlcktleVwiKV1cclxuICAgICAqL1xyXG4gICAgcHVsbCggc3RvcmVzLCBkb1dhaXQsIG9yaWdpbiApIHtcclxuICAgICAgICBsZXQgaW5pdGlhbE91dHB1dHMgPSBTdG9yZS5tYXAodGhpcywgc3RvcmVzLCB0aGlzLmNvbnRleHRPYmosIG9yaWdpbiwgdHJ1ZSk7XHJcbiAgICAgICAgaWYgKCBkb1dhaXQgKSB7XHJcbiAgICAgICAgICAgIHRoaXMud2FpdCgpO1xyXG4gICAgICAgICAgICBzdG9yZXMuZm9yRWFjaCgoIHMgKSA9PiB0aGlzLmNvbnRleHRbc10gJiYgdGhpcy53YWl0KHRoaXMuY29udGV4dFtzXSkpO1xyXG4gICAgICAgICAgICB0aGlzLnJlbGVhc2UoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGluaXRpYWxPdXRwdXRzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQXBwbHkgcmVmaW5lL3JlbWFwIG9uIHRoZSBwcml2YXRlIHN0YXRlICYgcHVzaCB0aGUgcmVzdWx0aW5nIFwicHVibGljXCIgc3RhdGUgdG8gZm9sbG93ZXJzXHJcbiAgICAgKiBAcGFyYW0gY2JcclxuICAgICAqL1xyXG4gICAgcHVzaCggZGF0YXMsIGZvcmNlLCBjYiApIHtcclxuICAgICAgICBjYiAgICAgICAgICAgID0gZm9yY2UgPT09IHRydWUgPyBjYiA6IGZvcmNlO1xyXG4gICAgICAgIGZvcmNlICAgICAgICAgPSBmb3JjZSA9PT0gdHJ1ZTtcclxuICAgICAgICB2YXIgaSAgICAgICAgID0gMCxcclxuICAgICAgICAgICAgbWUgICAgICAgID0gdGhpcyxcclxuICAgICAgICAgICAgbmV4dFN0YXRlID0gIWRhdGFzICYmIHsuLi50aGlzLnN0YXRlLCAuLi50aGlzLl9jaGFuZ2VzU1d9IHx8IHRoaXMuc3RhdGUsXHJcbiAgICAgICAgICAgIG5leHREYXRhcyA9IGRhdGFzIHx8XHJcbiAgICAgICAgICAgICAgICAodGhpcy5pc0NvbXBsZXRlKG5leHRTdGF0ZSkgPyB0aGlzLnJlZmluZSh0aGlzLmRhdGFzLCBuZXh0U3RhdGUsIHRoaXMuX2NoYW5nZXNTVykgOiB0aGlzLmRhdGFzKTtcclxuXHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBuZXh0U3RhdGU7XHJcbiAgICAgICAgaWYgKCAhZm9yY2UgJiZcclxuICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgKCF0aGlzLmRhdGFzICYmIHRoaXMuZGF0YXMgPT09IG5leHREYXRhcykgfHwgIXRoaXMuc2hvdWxkUHJvcGFnKG5leHREYXRhcylcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBjYiAmJiBjYigpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmRhdGFzID0gbmV4dERhdGFzO1xyXG4gICAgICAgIHRoaXMubG9ja3MrKztcclxuICAgICAgICB0aGlzLnJlbGVhc2UoY2IpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFVwZGF0ZSB0aGUgY3VycmVudCBwcml2YXRlIHN0YXRlICYgcHVzaCBpdCBvbmNlIHRoZSBzdG9yZSBpcyBzdGFibGVcclxuICAgICAqIEBwYXJhbSBwU3RhdGVcclxuICAgICAqIEBwYXJhbSBjYlxyXG4gICAgICovXHJcbiAgICBzZXRTdGF0ZSggcFN0YXRlLCBjYiwgc3luYyApIHtcclxuICAgICAgICB2YXIgaSAgICAgICA9IDAsIGNoYW5nZSxcclxuICAgICAgICAgICAgY2hhbmdlcyA9IHRoaXMuX2NoYW5nZXNTVyA9IHRoaXMuX2NoYW5nZXNTVyB8fCB7fTtcclxuICAgICAgICBmb3IgKCB2YXIgayBpbiBwU3RhdGUgKVxyXG4gICAgICAgICAgICBpZiAoICF0aGlzLnN0YXRlIHx8IHBTdGF0ZS5oYXNPd25Qcm9wZXJ0eShrKVxyXG4gICAgICAgICAgICAgICAgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIHBTdGF0ZVtrXSAhPSB0aGlzLnN0YXRlW2tdXHJcbiAgICAgICAgICAgICAgICAgICAgfHxcclxuICAgICAgICAgICAgICAgICAgICAodGhpcy5zdGF0ZVtrXSAmJiBwU3RhdGVba10gJiYgKHBTdGF0ZVtrXS5fcmV2ICE9IHRoaXMuX3JldnNba10pKS8vIHJldi9oYXNoIHVwZGF0ZVxyXG4gICAgICAgICAgICAgICAgKSApIHtcclxuICAgICAgICAgICAgICAgIGNoYW5nZSAgICAgICAgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcmV2c1trXSA9IHBTdGF0ZVtrXSAmJiBwU3RhdGVba10uX3JldiB8fCB0cnVlO1xyXG4gICAgICAgICAgICAgICAgY2hhbmdlc1trXSAgICA9IHBTdGF0ZVtrXTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIHN5bmMgKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHVzaCgpO1xyXG4gICAgICAgICAgICBjYiAmJiBjYigpO1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoIGNoYW5nZSApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhYmlsaXplKGNiKTtcclxuICAgICAgICAgICAgfSBlbHNlIGNiICYmIGNiKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVXBkYXRlIHRoZSBjdXJyZW50IHByaXZhdGUgc3RhdGUgJiBwdXNoIGl0IG9uY2UgdGhlIHN0b3JlIGlzIHN0YWJsZVxyXG4gICAgICogQHBhcmFtIHBTdGF0ZVxyXG4gICAgICogQHBhcmFtIGNiXHJcbiAgICAgKi9cclxuICAgIHNldFN0YXRlU3luYyggcFN0YXRlICkge1xyXG4gICAgICAgIHZhciBpICAgICAgID0gMCwgY2hhbmdlLFxyXG4gICAgICAgICAgICBjaGFuZ2VzID0gdGhpcy5fY2hhbmdlc1NXID0gdGhpcy5fY2hhbmdlc1NXIHx8IHt9O1xyXG4gICAgICAgIGZvciAoIHZhciBrIGluIHBTdGF0ZSApXHJcbiAgICAgICAgICAgIGlmICggIXRoaXMuc3RhdGUgfHwgcFN0YXRlLmhhc093blByb3BlcnR5KGspXHJcbiAgICAgICAgICAgICAgICAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgcFN0YXRlW2tdICE9IHRoaXMuc3RhdGVba11cclxuICAgICAgICAgICAgICAgICAgICB8fFxyXG4gICAgICAgICAgICAgICAgICAgICh0aGlzLnN0YXRlW2tdICYmIHBTdGF0ZVtrXSAmJiAocFN0YXRlW2tdLl9yZXYgIT0gdGhpcy5fcmV2c1trXSkpLy8gcmV2L2hhc2ggdXBkYXRlXHJcbiAgICAgICAgICAgICAgICApICkge1xyXG4gICAgICAgICAgICAgICAgY2hhbmdlICAgICAgICA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yZXZzW2tdID0gcFN0YXRlW2tdICYmIHBTdGF0ZVtrXS5fcmV2IHx8IHRydWU7XHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VzW2tdICAgID0gcFN0YXRlW2tdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wdXNoKCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXBsYWNlIHRoZSBjdXJyZW50IHByaXZhdGUgc3RhdGUgJiBwdXNoIGl0IG9uY2UgdGhlIHN0b3JlIGlzIHN0YWJsZVxyXG4gICAgICogQHBhcmFtIHBTdGF0ZVxyXG4gICAgICogQHBhcmFtIGNiXHJcbiAgICAgKi9cclxuICAgIHJlcGxhY2VTdGF0ZSggcFN0YXRlLCBjYiApIHtcclxuICAgICAgICB2YXIgaSAgICAgID0gMCwgbWUgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBwU3RhdGU7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhYmlsaXplKGNiKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGdldCBhIHN0b3JlLWtleSBwYWlyIGZvciBTdG9yZTo6bWFwXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxyXG4gICAgICogQHJldHVybnMge3tzdG9yZTogU3RvcmUsIG5hbWU6ICp9fVxyXG4gICAgICovXHJcbiAgICBhcyggbmFtZSApIHtcclxuICAgICAgICByZXR1cm4ge3N0b3JlIDogdGhpcywgbmFtZX07XHJcbiAgICB9XHJcblxyXG4gICAgb24oIGxpc3RzICkge1xyXG4gICAgICAgIGlmICggIWlzU3RyaW5nKGxpc3RzKSAmJiBsaXN0cyApXHJcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGxpc3RzKS5mb3JFYWNoKGsgPT4gc3VwZXIub24oaywgbGlzdHNba10pKTtcclxuICAgICAgICBlbHNlIHN1cGVyLm9uKC4uLmFyZ3VtZW50cyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlTGlzdGVuZXIoIGxpc3RzICkge1xyXG4gICAgICAgIGlmICggIWlzU3RyaW5nKGxpc3RzKSAmJiBsaXN0cyApXHJcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGxpc3RzKS5mb3JFYWNoKGsgPT4gc3VwZXIucmVtb3ZlTGlzdGVuZXIoaywgbGlzdHNba10pKTtcclxuICAgICAgICBlbHNlIHN1cGVyLnJlbW92ZUxpc3RlbmVyKC4uLmFyZ3VtZW50cyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiByZWxpbmsgYmluZGluZ3MgJiByZXF1aXJlc1xyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcclxuICAgICAqIEByZXR1cm5zIHt7c3RvcmU6IFN0b3JlLCBuYW1lOiAqfX1cclxuICAgICAqL1xyXG4gICAgcmVsaW5rKCBmcm9tICkge1xyXG4gICAgICAgIGxldCBjb250ZXh0ID0gdGhpcy5jb250ZXh0T2JqLFxyXG4gICAgICAgICAgICBfc3RhdGljID0gdGhpcy5jb25zdHJ1Y3RvcjtcclxuICAgICAgICBpZiAoIF9zdGF0aWMudXNlICkge1xyXG4gICAgICAgICAgICAvL3RvZG8gdW5saW5rXHJcbiAgICAgICAgICAgIHRoaXMucHVsbChfc3RhdGljLnVzZSwgZmFsc2UsIGZyb20pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCB0aGlzLl9yZXF1aXJlICkge1xyXG4gICAgICAgICAgICB0aGlzLl9yZXF1aXJlLmZvckVhY2goXHJcbiAgICAgICAgICAgICAgICBzdG9yZSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53YWl0KGNvbnRleHQuX19jb250ZXh0W3N0b3JlXSlcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBpcyBjb21wbGV0ZSAoYWxsIHJlcXVpZXJlZCBrZXlzIGFyZSBoZXJlKVxyXG4gICAgICogQHJldHVybnMgYm9vbFxyXG4gICAgICovXHJcbiAgICBpc0NvbXBsZXRlKCBzdGF0ZSA9IHRoaXMuc3RhdGUgKSB7XHJcbiAgICAgICAgdmFyIF9zdGF0aWMgPSB0aGlzLmNvbnN0cnVjdG9yO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICF0aGlzLl9yZXF1aXJlXHJcbiAgICAgICAgICAgIHx8ICF0aGlzLl9yZXF1aXJlLmxlbmd0aFxyXG4gICAgICAgICAgICB8fCBzdGF0ZSAmJiB0aGlzLl9yZXF1aXJlLnJlZHVjZShcclxuICAgICAgICAgICAgICAgICggciwga2V5ICkgPT4gKHIgJiYgc3RhdGVba2V5XSksXHJcbiAgICAgICAgICAgICAgICB0cnVlXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogaXMgc3RhYmxlXHJcbiAgICAgKiBAcmV0dXJucyBib29sXHJcbiAgICAgKi9cclxuICAgIGlzU3RhYmxlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zdGFibGU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBVbiBiaW5kIHRoaXMgc3RvcmUgb2ZmIHRoZSBnaXZlbiBjb21wb25lbnQta2V5XHJcbiAgICAgKiBAcGFyYW0gb2JqXHJcbiAgICAgKiBAcGFyYW0ga2V5XHJcbiAgICAgKiBAcmV0dXJucyB7QXJyYXkuPCo+fVxyXG4gICAgICovXHJcbiAgICB1bkJpbmQoIG9iaiwga2V5ICkge1xyXG4gICAgICAgIHZhciBmb2xsb3dlcnMgPSB0aGlzLl9mb2xsb3dlcnMsXHJcbiAgICAgICAgICAgIGkgICAgICAgICA9IGZvbGxvd2VycyAmJiBmb2xsb3dlcnMubGVuZ3RoO1xyXG4gICAgICAgIHdoaWxlIChmb2xsb3dlcnMgJiYgaS0tKVxyXG4gICAgICAgICAgICBpZiAoIGZvbGxvd2Vyc1tpXVswXSA9PSBvYmogJiYgZm9sbG93ZXJzW2ldWzFdID09IGtleSApXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZm9sbG93ZXJzLnNwbGljZShpLCAxKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEJpbmQgdGhpcyBzdG9yZSBjaGFuZ2VzIHRvIHRoZSBnaXZlbiBjb21wb25lbnQta2V5XHJcbiAgICAgKiBAcGFyYW0gb2JqIHtSZWFjdC5Db21wb25lbnR8U3RvcmV8ZnVuY3Rpb24pXHJcbiAgICAgKiBAcGFyYW0ga2V5IHtzdHJpbmd9IG9wdGlvbmFsIGtleSB3aGVyZSB0byBtYXAgdGhlIHB1YmxpYyBzdGF0ZVxyXG4gICAgICovXHJcbiAgICBiaW5kKCBvYmosIGtleSwgc2V0SW5pdGlhbCA9IHRydWUgKSB7XHJcbiAgICAgICAgdGhpcy5fZm9sbG93ZXJzLnB1c2goW29iaiwga2V5XSk7XHJcbiAgICAgICAgaWYgKCBzZXRJbml0aWFsICYmIHRoaXMuZGF0YXMgJiYgdGhpcy5fc3RhYmxlICkge1xyXG4gICAgICAgICAgICBpZiAoIHR5cGVvZiBvYmogIT0gXCJmdW5jdGlvblwiICkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCBrZXkgKSBvYmouc2V0U3RhdGUoe1trZXldIDogdGhpcy5kYXRhc30pO1xyXG4gICAgICAgICAgICAgICAgZWxzZSBvYmouc2V0U3RhdGUodGhpcy5kYXRhcyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBvYmoodGhpcy5kYXRhcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBvbmNlKCdzdGFibGUnLCBjYilcclxuICAgICAqIEBwYXJhbSBvYmoge1JlYWN0LkNvbXBvbmVudHxTdG9yZXxmdW5jdGlvbilcclxuICAgICAqIEBwYXJhbSBrZXkge3N0cmluZ30gb3B0aW9uYWwga2V5IHdoZXJlIHRvIG1hcCB0aGUgcHVibGljIHN0YXRlXHJcbiAgICAgKi9cclxuICAgIHRoZW4oIGNiICkge1xyXG4gICAgICAgIGlmICggdGhpcy5fc3RhYmxlIClcclxuICAgICAgICAgICAgcmV0dXJuIGNiKG51bGwsIHRoaXMuZGF0YXMpO1xyXG4gICAgICAgIHRoaXMub25jZSgnc3RhYmxlJywgZSA9PiBjYihudWxsLCB0aGlzLmRhdGFzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBZGQgYSBsb2NrIHNvIHRoZSBzdG9yZSB3aWxsIG5vdCBwcm9wYWcgaXQgc3RhdGUgdW50aWxsIHJlbGVhc2UoKSBpcyBjYWxsXHJcbiAgICAgKiBAcGFyYW0gcHJldmlvdXMge1N0b3JlfG51bWJlcnxBcnJheX0gQG9wdGlvbmFsIHdmIHRvIHdhaXQsIHJlbGVhc2VzIHRvIHdhaXQgb3IgYXJyYXkgb2Ygc3R1ZmYgdG8gd2FpdFxyXG4gICAgICogQHJldHVybnMge1Rhc2tGbG93fVxyXG4gICAgICovXHJcbiAgICB3YWl0KCBwcmV2aW91cyApIHtcclxuICAgICAgICBpZiAoIHR5cGVvZiBwcmV2aW91cyA9PSBcIm51bWJlclwiIClcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubG9ja3MgKz0gcHJldmlvdXM7XHJcbiAgICAgICAgaWYgKCBpc0FycmF5KHByZXZpb3VzKSApXHJcbiAgICAgICAgICAgIHJldHVybiBwcmV2aW91cy5tYXAodGhpcy53YWl0LmJpbmQodGhpcykpO1xyXG5cclxuICAgICAgICB0aGlzLl9zdGFibGUgJiYgdGhpcy5lbWl0KCd1bnN0YWJsZScsIHRoaXMuc3RhdGUsIHRoaXMuZGF0YXMpO1xyXG4gICAgICAgIHRoaXMuX3N0YWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubG9ja3MrKztcclxuICAgICAgICBpZiAoIHByZXZpb3VzICYmIGlzRnVuY3Rpb24ocHJldmlvdXMudGhlbikgKSB7XHJcbiAgICAgICAgICAgIHByZXZpb3VzLnRoZW4odGhpcy5yZWxlYXNlLmJpbmQodGhpcywgbnVsbCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIERlY3JlYXNlIGxvY2tzIGZvciB0aGlzIHN0b3JlLCBpZiBpdCByZWFjaCAwICYgaXQgaGF2ZSBhIHB1YmxpYyBzdGF0ZSxcclxuICAgICAqIGl0IHdpbGwgYmUgcHJvcGFnYXRlZCB0byB0aGUgZm9sbG93ZXJzLFxyXG4gICAgICogdGhlbiwgYWxsIHN0dWZmIHBhc3NlZCB0byBcInRoZW5cIiBjYWxsIGJhY2sgd2lsbCBiZSBleGVjIC8gcmVsZWFzZWRcclxuICAgICAqIEBwYXJhbSBkZXN5bmNcclxuICAgICAqIEByZXR1cm5zIHsqfVxyXG4gICAgICovXHJcbiAgICByZWxlYXNlKCBjYiApIHtcclxuICAgICAgICB2YXIgX3N0YXRpYyA9IHRoaXMuY29uc3RydWN0b3I7XHJcbiAgICAgICAgbGV0IGkgICAgICAgPSAwO1xyXG5cclxuICAgICAgICBpZiAoICEtLXRoaXMubG9ja3MgJiYgdGhpcy5kYXRhcyAmJiB0aGlzLmlzQ29tcGxldGUoKSApIHtcclxuICAgICAgICAgICAgdGhpcy5fc3RhYmxlID0gdHJ1ZTtcclxuXHJcblxyXG4gICAgICAgICAgICB0aGlzLl9yZXYgPSAxICsgKHRoaXMuX3JldiArIDEpICUgMTAwMDAwMDsvL1xyXG4gICAgICAgICAgICBpZiAoIHRoaXMuX2ZvbGxvd2Vycy5sZW5ndGggKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5fZm9sbG93ZXJzLmZvckVhY2goKCBmb2xsb3dlciApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoICF0aGlzLmRhdGFzICkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICggdHlwZW9mIGZvbGxvd2VyWzBdID09IFwiZnVuY3Rpb25cIiApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9sbG93ZXJbMF0odGhpcy5kYXRhcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2IgJiYgaSsrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb2xsb3dlclswXS5zZXRTdGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChmb2xsb3dlclsxXSkgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1tmb2xsb3dlclsxXV0gOiB0aGlzLmRhdGFzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNiICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAoKSA9PiAoISgtLWkpICYmIGNiKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmVtaXQoJ3N0YWJsZScsIHRoaXMuZGF0YXMpO1xyXG4gICAgICAgICAgICB0aGlzLmVtaXQoJ3VwZGF0ZScsIHRoaXMuZGF0YXMpO1xyXG4gICAgICAgICAgICBjYiAmJiBjYigpXHJcbiAgICAgICAgfSBlbHNlIGNiICYmIHRoaXMudGhlbihjYik7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0YWluKCByZWFzb24gKSB7XHJcbiAgICAgICAgdGhpcy5fX3JldGFpbkxvY2tzLmFsbCsrO1xyXG4gICAgICAgIGlmICggcmVhc29uICkge1xyXG4gICAgICAgICAgICB0aGlzLl9fcmV0YWluTG9ja3NbcmVhc29uXSA9IHRoaXMuX19yZXRhaW5Mb2Nrc1tyZWFzb25dIHx8IDA7XHJcbiAgICAgICAgICAgIHRoaXMuX19yZXRhaW5Mb2Nrc1tyZWFzb25dKys7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRpc3Bvc2UoIHJlYXNvbiApIHtcclxuICAgICAgICB0aGlzLl9fcmV0YWluTG9ja3MuYWxsLS07XHJcbiAgICAgICAgaWYgKCByZWFzb24gKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX19yZXRhaW5Mb2Nrc1tyZWFzb25dID0gdGhpcy5fX3JldGFpbkxvY2tzW3JlYXNvbl0gfHwgMDtcclxuICAgICAgICAgICAgdGhpcy5fX3JldGFpbkxvY2tzW3JlYXNvbl0tLTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCAhdGhpcy5fX3JldGFpbkxvY2tzLmFsbCApIHtcclxuICAgICAgICAgICAgaWYgKCB0aGlzLl9wZXJzaXN0ZW5jZVRtICkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZGVzdHJveVRNICYmIGNsZWFyVGltZW91dCh0aGlzLl9kZXN0cm95VE0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZGVzdHJveVRNID0gc2V0VGltZW91dChcclxuICAgICAgICAgICAgICAgICAgICBlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50aGVuKHMgPT4gKCF0aGlzLl9fcmV0YWluTG9ja3MuYWxsICYmIHRoaXMuZGVzdHJveSgpKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wZXJzaXN0ZW5jZVRtXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aGVuKHMgPT4gKCF0aGlzLl9fcmV0YWluTG9ja3MuYWxsICYmIHRoaXMuZGVzdHJveSgpKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZGVzdHJveSgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5lbWl0KCdkZXN0cm95JywgdGhpcyk7XHJcbiAgICAgICAgaWYgKCB0aGlzLl9zdGFiaWxpemVyIClcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX3N0YWJpbGl6ZXIpO1xyXG4gICAgICAgIHRoaXMuX2ZvbGxvd2Vycy5sZW5ndGggPSAwO1xyXG4gICAgICAgIHRoaXMuZGVhZCAgICAgICAgICAgICAgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuX3JldnMgICAgICAgICAgICAgPSB0aGlzLmRhdGFzID0gdGhpcy5zdGF0ZSA9IHRoaXMuY29udGV4dCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9TdG9yZS5qcyJdLCJzb3VyY2VSb290IjoiIn0=