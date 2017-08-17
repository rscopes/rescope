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
	                            return _this6._mount(id, state[id], datas[id]);
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
	
	        /**
	         * Pull stores in the private state
	         * @param stores  {Array} (passed to Store::map) Ex : ["session", "otherNamedStore:key", otherStore.as("otherKey")]
	         */
	
	    }, {
	        key: 'pull',
	        value: function pull(stores, doWait, origin) {
	            var _this7 = this;
	
	            this.mount(stores);
	            this.bind(origin, stores, null, false);
	
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
	                if (!revs || !(!revs.hasOwnProperty(id) || ctx[id]._rev <= revs[id])) {
	
	                    updated = true;
	                    output[id] = _this8.datas[id];
	                    if (revs) revs[id] = ctx[id]._rev;
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
	                        !_this13.__retainLocks.all && _this13.destroy();
	                    }, this._persistenceTm);
	                } else {
	                    this.destroy();
	                }
	            }
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
	        key: 'propag',
	        value: function propag() {
	            var _this14 = this;
	
	            this._propagTM && clearTimeout(this._propagTM);
	            this._propagTM = setTimeout(function (e) {
	                _this14._propag();
	            }, 50);
	        }
	    }, {
	        key: '_propag',
	        value: function _propag() {
	            var _this15 = this;
	
	            if (this._followers.length) this._followers.forEach(function (_ref3) {
	                var obj = _ref3[0],
	                    key = _ref3[1],
	                    as = _ref3[2],
	                    lastRevs = _ref3[3];
	
	                var datas = _this15.getUpdates(lastRevs);
	                if (!datas) return;
	                if (typeof obj != "function") {
	                    if (as) obj.setState(_defineProperty({}, as, datas));else obj.setState(datas);
	                } else {
	                    obj(datas);
	                }
	                lastRevs && key.forEach(function (id) {
	                    return lastRevs[id] = _this15.__context[id] && _this15.__context[id]._rev || 0;
	                });
	            });
	            this.emit("update", this.getUpdates());
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
	
	        /**
	         * order destroy of local stores
	         */
	
	    }, {
	        key: 'destroy',
	        value: function destroy() {
	            var _this17 = this;
	
	            var ctx = this.__context;
	
	            this.emit("destroy");
	            Object.keys(this.__listening).forEach(function (id) {
	                return _this17.__context[id].removeListener(_this17.__listening[id]);
	            });
	            this.__listening = {};
	
	            if (this._isLocalId) delete openContexts[this._id];
	
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
	        }
	    }]);
	
	    return Context;
	}(EventEmitter);
	
	Context.contexts = openContexts;
	Context.Store = null;
	Context.defaultMaxListeners = 20;
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
	        // false or tm without followers
	
	        /**
	         * get a Builder-key pair for Store::map
	         * @param {string} name
	         * @returns {{store: Store, name: *}}
	         */
	        // default state
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
	Store.defaultMaxListeners = 20;
	Store.autokill = false;
	exports.default = Store;
	module.exports = exports['default'];

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNjFmNmE3ZmVkYzFjZWM4MjA5MDgiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Jlc2NvcGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9pc3N0cmluZy9pc1N0cmluZy51bWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9pc2FycmF5L2luZGV4LmpzIiwid2VicGFjazovLy8uL34vZXZlbnRzL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2lzZnVuY3Rpb24vbGliL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vfi9zaG9ydGlkL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vc2hvcnRpZC9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9zaG9ydGlkL2xpYi9hbHBoYWJldC5qcyIsIndlYnBhY2s6Ly8vLi9+L3Nob3J0aWQvbGliL3JhbmRvbS9yYW5kb20tZnJvbS1zZWVkLmpzIiwid2VicGFjazovLy8uL34vc2hvcnRpZC9saWIvZW5jb2RlLmpzIiwid2VicGFjazovLy8uL34vc2hvcnRpZC9saWIvcmFuZG9tL3JhbmRvbS1ieXRlLWJyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9zaG9ydGlkL2xpYi9kZWNvZGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9zaG9ydGlkL2xpYi9idWlsZC5qcyIsIndlYnBhY2s6Ly8vLi9+L3Nob3J0aWQvbGliL2lzLXZhbGlkLmpzIiwid2VicGFjazovLy8uL34vc2hvcnRpZC9saWIvdXRpbC9jbHVzdGVyLXdvcmtlci1pZC1icm93c2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9TdG9yZS5qcyJdLCJuYW1lcyI6WyJTdG9yZSIsIkNvbnRleHQiLCJpc1N0cmluZyIsInJlcXVpcmUiLCJpc0FycmF5IiwiRXZlbnRFbWl0dGVyIiwiaXNGdW5jdGlvbiIsInNob3J0aWQiLCJfX3Byb3RvX19wdXNoIiwidGFyZ2V0IiwiaWQiLCJwYXJlbnQiLCJoZXJlIiwicHJvdG90eXBlIiwib3BlbkNvbnRleHRzIiwia2V5IiwiY3R4Iiwic3RhdGUiLCJkYXRhcyIsIm5hbWUiLCJkZWZhdWx0TWF4TGlzdGVuZXJzIiwicGVyc2lzdGVuY2VUbSIsImF1dG9EZXN0cm95IiwiX21heExpc3RlbmVycyIsImNvbnN0cnVjdG9yIiwiX2lkIiwiZ2VuZXJhdGUiLCJfaXNMb2NhbElkIiwiX3BlcnNpc3RlbmNlVG0iLCJzdG9yZXMiLCJzb3VyY2VzIiwiX19yZXRhaW5Mb2NrcyIsImFsbCIsIl9fdzhMb2NrcyIsIl9fbGlzdGVuaW5nIiwiX19jb250ZXh0IiwiX19taXhlZCIsIl9fbWl4ZWRMaXN0IiwiX2ZvbGxvd2VycyIsInJldGFpbiIsIm9uIiwiX19wYXJlbnRMaXN0IiwicmVsZWFzZSIsIndhaXQiLCJfcHJvcGFnIiwicmVnaXN0ZXIiLCJfc3RhYmxlIiwic2V0VGltZW91dCIsImRpc3Bvc2UiLCJmb3JFYWNoIiwiX21vdW50IiwiayIsImFyZ3VtZW50cyIsInJlZHVjZSIsIm1vdW50ZWQiLCJtb3VudFN0b3JlIiwiX3dhdGNoU3RvcmUiLCJpc1N0YWJsZSIsInByb3BhZyIsInRhcmdldEN0eCIsImxpc3RzIiwicHVzaCIsInJlbGluayIsInJhd0N0eCIsIk9iamVjdCIsImtleXMiLCJzaW5nbGV0b24iLCJzcmNDdHgiLCJleHRlcm5hbCIsImxjdHgiLCJfc3RvcmVzIiwiY29uc29sZSIsIndhcm4iLCJkZWZpbmVQcm9wZXJ0eSIsImdldCIsIl9zdGF0ZSIsInNldCIsInYiLCJfZGF0YXMiLCJ1bmRlZmluZWQiLCJvYmoiLCJhcyIsInNldEluaXRpYWwiLCJsYXN0UmV2cyIsInJldnMiLCJtb3VudCIsImdldFVwZGF0ZXMiLCJzZXRTdGF0ZSIsImZvbGxvd2VycyIsImkiLCJsZW5ndGgiLCJzcGxpY2UiLCJkb1dhaXQiLCJvcmlnaW4iLCJiaW5kIiwib3V0cHV0IiwidXBkYXRlZCIsImhhc093blByb3BlcnR5IiwiX3JldiIsImZsYWdzX3N0YXRlcyIsImZsYWdzX2RhdGFzIiwiX2ZsYWdzX3N0YXRlcyIsIl9mbGFnc19kYXRhcyIsImZsYWdzIiwiciIsImZsYWciLCJ0ZXN0IiwiY2IiLCJvbmNlIiwicXVpZXQiLCJyZWFzb24iLCJfZGVzdHJveVRNIiwiY2xlYXJUaW1lb3V0IiwiZGVzdHJveSIsImxvZyIsImVtaXQiLCJfcHJvcGFnVE0iLCJfc3RhYmlsaXplclRNIiwicmVtb3ZlTGlzdGVuZXIiLCJjb250ZXh0T2JqIiwic2hpZnQiLCJjb250ZXh0cyIsIm9ialByb3RvIiwiZ2V0UHJvdG90eXBlT2YiLCJzdG9yZSIsImNvbXBvbmVudCIsImNvbnRleHQiLCJ0YXJnZXRSZXZzIiwiX3JldnMiLCJpbml0aWFsT3V0cHV0cyIsInN0YXRpY0NvbnRleHQiLCJmaWx0ZXIiLCJlcnJvciIsImFsaWFzIiwiZGVmYXVsdE5hbWUiLCJtYXRjaCIsIm1peGVkQ1dVbm1vdW50IiwidW5Nb3VudEtleSIsImlzUmVhY3RDb21wb25lbnQiLCJtYXAiLCJzcGxpdCIsInVuQmluZCIsImFwcGx5Iiwic2tleSIsInNvcnQiLCJhIiwiYiIsImZpcnN0bmFtZSIsImpvaW4iLCJjb250ZXh0TWFwIiwiZ2V0Q29udGV4dCIsImFyZ3oiLCJfc3RhdGljIiwiY2ZnIiwid2F0Y2hzIiwidXNlIiwicmVmaW5lIiwiaW5pdGlhbFN0YXRlIiwiX3VpZCIsImxvY2tzIiwiX29uU3RhYmlsaXplIiwiX3VzZSIsIl9yZXF1aXJlIiwicHVsbCIsImlzQ29tcGxldGUiLCJuRGF0YXMiLCJjRGF0YXMiLCJmb2xsb3ciLCJjaGFuZ2VzIiwiX19wcm90b19fIiwibWUiLCJfc3RhYmlsaXplciIsImV2ZW50IiwicyIsImZvcmNlIiwibmV4dFN0YXRlIiwiX2NoYW5nZXNTVyIsIm5leHREYXRhcyIsInNob3VsZFByb3BhZyIsInBTdGF0ZSIsInN5bmMiLCJjaGFuZ2UiLCJzdGFiaWxpemUiLCJmcm9tIiwicHJldmlvdXMiLCJ0aGVuIiwiZm9sbG93ZXIiLCJkZWFkIiwicmVtb3ZlQWxsTGlzdGVuZXJzIiwi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O0FBQ0E7QUFDQTtBQUNBLGtCQUFpQjtBQUNqQixRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLGdCQUFlLFNBQVM7QUFDeEI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQUc7QUFDSCxxQkFBb0IsU0FBUztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7OztBQzdTQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRTs7Ozs7O0FDVEE7QUFDQTs7Ozs7OztBQ0RBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDaEVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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UztBQU5aL0UsTSxDQU9Wb0IsbUIsR0FBc0IsRTtBQVBacEIsTSxDQVFWNkwsUSxHQUFzQixLO21CQVJaN0wsSyIsImZpbGUiOiJkaXN0L1Jlc2NvcGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNjFmNmE3ZmVkYzFjZWM4MjA5MDgiLCIvKlxyXG4gKiBDb3B5cmlnaHQgKGMpICAyMDE3IENhaXBpIExhYnMgLlxyXG4gKlxyXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxyXG4gKlxyXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuICpcclxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXHJcbiAqL1xyXG5cclxuaW1wb3J0IENvbnRleHQgZnJvbSBcIi4vQ29udGV4dFwiO1xyXG5pbXBvcnQgU3RvcmUgZnJvbSBcIi4vU3RvcmVcIjtcclxuXHJcbkNvbnRleHQuU3RvcmUgPSBTdG9yZTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtTdG9yZSwgQ29udGV4dH07XHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvUmVzY29wZS5qcyIsIi8qXHJcbiAqIENvcHlyaWdodCAoYykgMjAxNy4gIENhaXBpIExhYnMuICBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKlxyXG4gKiBUaGlzIEZpbGUgaXMgcGFydCBvZiBDYWlwaS4gWW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxyXG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhc1xyXG4gKiBwdWJsaXNoZWQgYnkgdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGVcclxuICogTGljZW5zZSwgb3IgKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cclxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXHJcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXHJcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcclxuICogR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXHJcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxyXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxyXG4gKiAgVGhpcyBwcm9qZWN0IGlzIGR1YWwgbGljZW5zZWQgdW5kZXIgQUdQTCBhbmQgQ29tbWVyY2lhbCBMaWNlbmNlLlxyXG4gKlxyXG4gKiBAYXV0aG9yIDogTmF0aGFuYWVsIEJyYXVuXHJcbiAqIEBjb250YWN0IDogY2FpcGlsYWJzQGdtYWlsLmNvbVxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBAYXV0aG9yIE5hdGhhbmFlbCBCUkFVTlxyXG4gKlxyXG4gKiBEYXRlOiAxMy8wOC8yMDE3XHJcbiAqIFRpbWU6IDE3OjE1XHJcbiAqL1xyXG5cclxuXHJcbnZhciBpc1N0cmluZyAgICAgICAgPSByZXF1aXJlKCdpc3N0cmluZycpLFxyXG4gICAgaXNBcnJheSAgICAgICAgID0gcmVxdWlyZSgnaXNhcnJheScpLFxyXG4gICAgRXZlbnRFbWl0dGVyICAgID0gcmVxdWlyZSgnZXZlbnRzJyksXHJcbiAgICBpc0Z1bmN0aW9uICAgICAgPSByZXF1aXJlKCdpc2Z1bmN0aW9uJylcclxuICAgICwgc2hvcnRpZCAgICAgICA9IHJlcXVpcmUoJ3Nob3J0aWQnKVxyXG4gICAgLCBfX3Byb3RvX19wdXNoID0gKCB0YXJnZXQsIGlkLCBwYXJlbnQgKSA9PiB7XHJcbiAgICBsZXQgaGVyZSAgICAgICAgICAgPSB7XHJcbiAgICAgICAgW2lkXSA6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgaGVyZVtpZF0ucHJvdG90eXBlID0gcGFyZW50ID8gbmV3IHBhcmVudFtcIl9cIiArIGlkXSgpIDogdGFyZ2V0W2lkXSB8fCB7fTtcclxuICAgIHRhcmdldFtpZF0gICAgICAgICA9IG5ldyBoZXJlW2lkXSgpO1xyXG4gICAgdGFyZ2V0WydfJyArIGlkXSAgID0gaGVyZVtpZF07XHJcbn07XHJcblxyXG5sZXQgb3BlbkNvbnRleHRzID0ge307XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGV4dCBleHRlbmRzIEV2ZW50RW1pdHRlciB7XHJcbiAgICBzdGF0aWMgY29udGV4dHMgICAgICAgICAgICA9IG9wZW5Db250ZXh0cztcclxuICAgIHN0YXRpYyBTdG9yZSAgICAgICAgICAgICAgID0gbnVsbDtcclxuICAgIHN0YXRpYyBkZWZhdWx0TWF4TGlzdGVuZXJzID0gMjA7XHJcbiAgICBzdGF0aWMgcGVyc2lzdGVuY2VUbSAgICAgICA9IDA7XHJcblxyXG4gICAgc3RhdGljIGdldENvbnRleHQoIGtleSApIHtcclxuICAgICAgICByZXR1cm4gb3BlbkNvbnRleHRzW2tleV0gPSBvcGVuQ29udGV4dHNba2V5XSB8fCBuZXcgQ29udGV4dCh7fSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCBjdHgsIHtpZCwgcGFyZW50LCBzdGF0ZSwgZGF0YXMsIG5hbWUsIGRlZmF1bHRNYXhMaXN0ZW5lcnMsIHBlcnNpc3RlbmNlVG0sIGF1dG9EZXN0cm95fSA9IHt9ICkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMuX21heExpc3RlbmVycyA9IGRlZmF1bHRNYXhMaXN0ZW5lcnMgfHwgdGhpcy5jb25zdHJ1Y3Rvci5kZWZhdWx0TWF4TGlzdGVuZXJzO1xyXG4gICAgICAgIHRoaXMuX2lkICAgICAgICAgICA9IGlkID0gaWQgfHwgKFwiX19fX19cIiArIHNob3J0aWQuZ2VuZXJhdGUoKSk7XHJcblxyXG4gICAgICAgIGlmICggb3BlbkNvbnRleHRzW2lkXSApIHtcclxuICAgICAgICAgICAgLy8gb3BlbkNvbnRleHRzW2lkXS5yZWdpc3RlcihjdHgpO1xyXG4gICAgICAgICAgICByZXR1cm4gb3BlbkNvbnRleHRzW2lkXVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgb3BlbkNvbnRleHRzW2lkXSAgICA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5faXNMb2NhbElkICAgICA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5fcGVyc2lzdGVuY2VUbSA9IHBlcnNpc3RlbmNlVG0gfHwgdGhpcy5jb25zdHJ1Y3Rvci5wZXJzaXN0ZW5jZVRtO1xyXG5cclxuICAgICAgICB0aGlzLnN0b3JlcyA9IHt9O1xyXG4gICAgICAgIHRoaXMuc3RhdGUgID0ge307XHJcbiAgICAgICAgdGhpcy5kYXRhcyAgPSB7fTtcclxuICAgICAgICBfX3Byb3RvX19wdXNoKHRoaXMsICdzdG9yZXMnLCBwYXJlbnQpO1xyXG4gICAgICAgIF9fcHJvdG9fX3B1c2godGhpcywgJ3N0YXRlJywgcGFyZW50KTtcclxuICAgICAgICBfX3Byb3RvX19wdXNoKHRoaXMsICdkYXRhcycsIHBhcmVudCk7XHJcbiAgICAgICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XHJcblxyXG4gICAgICAgIHRoaXMuc291cmNlcyA9IFtdO1xyXG5cclxuICAgICAgICB0aGlzLl9fcmV0YWluTG9ja3MgPSB7YWxsIDogMH07XHJcbiAgICAgICAgdGhpcy5fX3c4TG9ja3MgICAgID0ge2FsbCA6IDF9O1xyXG4gICAgICAgIHRoaXMuX19saXN0ZW5pbmcgICA9IHt9O1xyXG4gICAgICAgIHRoaXMuX19jb250ZXh0ICAgICA9IHt9O1xyXG4gICAgICAgIHRoaXMuX19taXhlZCAgICAgICA9IFtdO1xyXG4gICAgICAgIHRoaXMuX19taXhlZExpc3QgICA9IFtdO1xyXG4gICAgICAgIHRoaXMuX2ZvbGxvd2VycyAgICA9IFtdO1xyXG4gICAgICAgIGlmICggcGFyZW50ICkge1xyXG4gICAgICAgICAgICBwYXJlbnQucmV0YWluKFwiaXNNeVBhcmVudFwiKTtcclxuICAgICAgICAgICAgcGFyZW50Lm9uKHRoaXMuX19wYXJlbnRMaXN0ID0ge1xyXG4gICAgICAgICAgICAgICAgJ3N0YWJsZScgICA6IHMgPT4gdGhpcy5yZWxlYXNlKFwiaXNNeVBhcmVudFwiKSxcclxuICAgICAgICAgICAgICAgICd1bnN0YWJsZScgOiBzID0+IHRoaXMud2FpdChcImlzTXlQYXJlbnRcIiksXHJcbiAgICAgICAgICAgICAgICAndXBkYXRlJyAgIDogcyA9PiB0aGlzLl9wcm9wYWcoKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgLy8gdGhpcy5yZWdpc3RlcihwYXJlbnQuX19jb250ZXh0LCBzdGF0ZSwgZGF0YXMpO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIHRoaXMucmVnaXN0ZXIoY3R4LCBzdGF0ZSwgZGF0YXMpO1xyXG4gICAgICAgIHRoaXMuX193OExvY2tzLmFsbC0tO1xyXG4gICAgICAgIHRoaXMuX3N0YWJsZSA9ICEhdGhpcy5fX3c4TG9ja3MuYWxsO1xyXG5cclxuICAgICAgICBpZiAoIGF1dG9EZXN0cm95IClcclxuICAgICAgICAgICAgc2V0VGltZW91dChcclxuICAgICAgICAgICAgICAgIHRtID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJldGFpbigpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzcG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgbW91bnQoIGlkLCBzdGF0ZSwgZGF0YXMgKSB7XHJcbiAgICAgICAgaWYgKCBpc0FycmF5KGlkKSApIHtcclxuICAgICAgICAgICAgaWQuZm9yRWFjaChrID0+IHRoaXMuX21vdW50KGssIHN0YXRlICYmIHN0YXRlW2tdLCBkYXRhcyAmJiBkYXRhc1trXSkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX21vdW50KC4uLmFyZ3VtZW50cyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIF9tb3VudCggaWQsIHN0YXRlLCBkYXRhcyApIHtcclxuICAgICAgICBpZiAoICF0aGlzLl9fY29udGV4dFtpZF0gKSB7Ly9hc2sgbWl4ZWQgfHwgcGFyZW50XHJcbiAgICAgICAgICAgIGlmICggdGhpcy5fX21peGVkLnJlZHVjZSgoIG1vdW50ZWQsIGN0eCApID0+IChtb3VudGVkIHx8IGN0eC5fbW91bnQoaWQsIHN0YXRlLCBkYXRhcykpLCBmYWxzZSkgfHxcclxuICAgICAgICAgICAgICAgICF0aGlzLnBhcmVudCApXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcmVudC5fbW91bnQoLi4uYXJndW1lbnRzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jb25zdHJ1Y3Rvci5TdG9yZS5tb3VudFN0b3JlKGlkLCB0aGlzLCBudWxsLCBzdGF0ZSwgZGF0YXMpO1xyXG4gICAgICAgIHRoaXMuX3dhdGNoU3RvcmUoaWQpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9fY29udGV4dFtpZF07XHJcbiAgICB9XHJcblxyXG4gICAgX3dhdGNoU3RvcmUoIGlkLCBzdGF0ZSwgZGF0YXMgKSB7XHJcbiAgICAgICAgaWYgKCAhdGhpcy5fX2NvbnRleHRbaWRdICkgey8vYXNrIG1peGVkIHx8IHBhcmVudFxyXG4gICAgICAgICAgICBpZiAoIHRoaXMuX19taXhlZC5yZWR1Y2UoKCBtb3VudGVkLCBjdHggKSA9PiAobW91bnRlZCB8fCBjdHguX3dhdGNoU3RvcmUoaWQsIHN0YXRlLCBkYXRhcykpLCBmYWxzZSkgfHxcclxuICAgICAgICAgICAgICAgICF0aGlzLnBhcmVudCApXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcmVudC5fd2F0Y2hTdG9yZSguLi5hcmd1bWVudHMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoICF0aGlzLl9fbGlzdGVuaW5nW2lkXSAmJiAhaXNGdW5jdGlvbih0aGlzLl9fY29udGV4dFtpZF0pICkge1xyXG4gICAgICAgICAgICAhdGhpcy5fX2NvbnRleHRbaWRdLmlzU3RhYmxlKCkgJiYgdGhpcy53YWl0KGlkKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX19jb250ZXh0W2lkXS5vbihcclxuICAgICAgICAgICAgICAgIHRoaXMuX19saXN0ZW5pbmdbaWRdID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICd1cGRhdGUnICAgOiBzID0+IHRoaXMucHJvcGFnKCksXHJcbiAgICAgICAgICAgICAgICAgICAgJ3N0YWJsZScgICA6IHMgPT4gdGhpcy5yZWxlYXNlKGlkKSxcclxuICAgICAgICAgICAgICAgICAgICAndW5zdGFibGUnIDogcyA9PiB0aGlzLndhaXQoaWQpXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgbWl4aW4oIHRhcmdldEN0eCApIHtcclxuICAgICAgICBsZXQgcGFyZW50ID0gdGhpcy5wYXJlbnQsIGxpc3RzO1xyXG4gICAgICAgIHRoaXMuX19taXhlZC5wdXNoKHRhcmdldEN0eClcclxuICAgICAgICB0YXJnZXRDdHgucmV0YWluKCk7XHJcblxyXG4gICAgICAgIHRoaXMuX19taXhlZExpc3QucHVzaChsaXN0cyA9IHtcclxuICAgICAgICAgICAgJ3N0YWJsZScgICA6IHMgPT4gdGhpcy5yZWxlYXNlKHRhcmdldEN0eC5faWQpLFxyXG4gICAgICAgICAgICAndW5zdGFibGUnIDogcyA9PiB0aGlzLndhaXQodGFyZ2V0Q3R4Ll9pZCksXHJcbiAgICAgICAgICAgICd1cGRhdGUnICAgOiBzID0+IHRoaXMuX3Byb3BhZygpXHJcbiAgICAgICAgfSlcclxuICAgICAgICB0YXJnZXRDdHgub24obGlzdHMpO1xyXG4gICAgICAgIF9fcHJvdG9fX3B1c2godGhpcywgJ3N0b3JlcycsIHBhcmVudCk7XHJcbiAgICAgICAgX19wcm90b19fcHVzaCh0aGlzLCAnc3RhdGUnLCBwYXJlbnQpO1xyXG4gICAgICAgIF9fcHJvdG9fX3B1c2godGhpcywgJ2RhdGFzJywgcGFyZW50KTtcclxuICAgICAgICB0YXJnZXRDdHgucmVsaW5rKHRhcmdldEN0eC5fX2NvbnRleHQsIHRoaXMsIHRydWUpO1xyXG5cclxuICAgICAgICBfX3Byb3RvX19wdXNoKHRoaXMsICdzdG9yZXMnLCB0aGlzKTtcclxuICAgICAgICBfX3Byb3RvX19wdXNoKHRoaXMsICdzdGF0ZScsIHRoaXMpO1xyXG4gICAgICAgIF9fcHJvdG9fX3B1c2godGhpcywgJ2RhdGFzJywgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5yZWxpbmsodGhpcy5fX2NvbnRleHQsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdGVyKCByYXdDdHgsIHN0YXRlID0ge30sIGRhdGFzID0ge30gKSB7XHJcbiAgICAgICAgdGhpcy5yZWxpbmsocmF3Q3R4LCB0aGlzLCBmYWxzZSwgc3RhdGUsIGRhdGFzKTtcclxuICAgICAgICBPYmplY3Qua2V5cyhyYXdDdHgpLmZvckVhY2goXHJcbiAgICAgICAgICAgIGlkID0+IChpc0Z1bmN0aW9uKHJhd0N0eFtpZF0pICYmIHJhd0N0eFtpZF0uc2luZ2xldG9uICYmIHRoaXMuX21vdW50KGlkLCBzdGF0ZVtpZF0sIGRhdGFzW2lkXSkpKVxyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE1hcCBzcmNDdHggc3RvcmUncyBvbiB0YXJnZXRDdHggaGVhZGVycyBwcm90bydzXHJcbiAgICAgKiBAcGFyYW0gc3JjQ3R4XHJcbiAgICAgKiBAcGFyYW0gdGFyZ2V0Q3R4XHJcbiAgICAgKiBAcGFyYW0gc3RhdGVcclxuICAgICAqIEBwYXJhbSBkYXRhc1xyXG4gICAgICovXHJcbiAgICByZWxpbmsoIHNyY0N0eCwgdGFyZ2V0Q3R4ID0gdGhpcywgZXh0ZXJuYWwsIHN0YXRlID0ge30sIGRhdGFzID0ge30gKSB7XHJcbiAgICAgICAgbGV0IGxjdHggPSB0YXJnZXRDdHguX3N0b3Jlcy5wcm90b3R5cGU7XHJcbiAgICAgICAgT2JqZWN0LmtleXMoc3JjQ3R4KVxyXG4gICAgICAgICAgICAuZm9yRWFjaChcclxuICAgICAgICAgICAgICAgIGlkID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIHRhcmdldEN0eC5fX2NvbnRleHRbaWRdID09PSBzcmNDdHhbaWRdIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldEN0eC5fX2NvbnRleHRbaWRdICYmICh0YXJnZXRDdHguX19jb250ZXh0W2lkXS5jb25zdHJ1Y3RvciA9PT0gc3JjQ3R4W2lkXSApIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIHRhcmdldEN0eC5fX2NvbnRleHRbaWRdICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCJSZXNjb3BlIENvbnRleHQgOiBcIiwgaWQsIFwiIGFscmVhZHkgZXhpc3QgaW4gdGhpcyBjb250ZXh0ICFcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCAhZXh0ZXJuYWwgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9fY29udGV4dFtpZF0gPSBzcmNDdHhbaWRdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxjdHgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoKCBjdHgsIGlkICkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldCA6ICgpID0+IHRoaXMuX21vdW50KGlkLCBzdGF0ZVtpZF0sIGRhdGFzW2lkXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMuX19jb250ZXh0LCBpZClcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0Q3R4Ll9zdGF0ZS5wcm90b3R5cGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoKCBjdHgsIGlkICkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldCA6ICgpID0+IChjdHhbaWRdICYmIGN0eFtpZF0uc3RhdGUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldCA6ICggdiApID0+ICh0aGlzLl9tb3VudChpZCwgdikpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLl9fY29udGV4dCwgaWQpXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldEN0eC5fZGF0YXMucHJvdG90eXBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKCggY3R4LCBpZCApID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXQgOiAoKSA9PiAoY3R4W2lkXSAmJiBjdHhbaWRdLmRhdGFzKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXQgOiAoIHYgKSA9PiAodGhpcy5fbW91bnQoaWQsIHVuZGVmaW5lZCwgdikpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLl9fY29udGV4dCwgaWQpXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIG9iaiB7UmVhY3QuQ29tcG9uZW50fFN0b3JlfGZ1bmN0aW9uKVxyXG4gICAgICogQHBhcmFtIGtleSB7c3RyaW5nfSBvcHRpb25hbCBrZXkgd2hlcmUgdG8gbWFwIHRoZSBwdWJsaWMgc3RhdGVcclxuICAgICAqL1xyXG4gICAgYmluZCggb2JqLCBrZXksIGFzLCBzZXRJbml0aWFsID0gdHJ1ZSApIHtcclxuICAgICAgICBsZXQgbGFzdFJldnMsIGRhdGFzO1xyXG4gICAgICAgIGlmICgga2V5ICYmICFpc0FycmF5KGtleSkgKVxyXG4gICAgICAgICAgICBrZXkgPSBba2V5XTtcclxuXHJcbiAgICAgICAgLy8ga2V5ID0ga2V5fHxcclxuXHJcbiAgICAgICAgaWYgKCBhcyA9PT0gdHJ1ZSApIHtcclxuICAgICAgICAgICAgc2V0SW5pdGlhbCA9IHRydWU7XHJcbiAgICAgICAgICAgIGFzICAgICAgICAgPSBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fZm9sbG93ZXJzLnB1c2goXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIG9iaixcclxuICAgICAgICAgICAgICAgIGtleSxcclxuICAgICAgICAgICAgICAgIGFzLFxyXG4gICAgICAgICAgICAgICAgbGFzdFJldnMgPSBrZXkgJiYga2V5LnJlZHVjZSgoIHJldnMsIGlkICkgPT4gKHJldnNbaWRdID0gMCwgcmV2cyksIHt9KVxyXG4gICAgICAgICAgICBdKTtcclxuXHJcbiAgICAgICAgdGhpcy5tb3VudChrZXkpO1xyXG5cclxuICAgICAgICBpZiAoIHNldEluaXRpYWwgJiYgdGhpcy5fc3RhYmxlICkge1xyXG4gICAgICAgICAgICBkYXRhcyA9IHRoaXMuZ2V0VXBkYXRlcyhsYXN0UmV2cyk7XHJcbiAgICAgICAgICAgIGlmICggIWRhdGFzICkgcmV0dXJuO1xyXG4gICAgICAgICAgICBpZiAoIHR5cGVvZiBvYmogIT0gXCJmdW5jdGlvblwiICkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCBhcyApIG9iai5zZXRTdGF0ZSh7W2FzXSA6IGRhdGFzfSk7XHJcbiAgICAgICAgICAgICAgICBlbHNlIG9iai5zZXRTdGF0ZShkYXRhcyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBvYmooZGF0YXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVW4gYmluZCB0aGlzIGNvbnRleHQgb2ZmIHRoZSBnaXZlbiBjb21wb25lbnQta2V5c1xyXG4gICAgICogQHBhcmFtIG9ialxyXG4gICAgICogQHBhcmFtIGtleVxyXG4gICAgICogQHJldHVybnMge0FycmF5LjwqPn1cclxuICAgICAqL1xyXG4gICAgdW5CaW5kKCBvYmosIGtleSwgYXMgKSB7XHJcbiAgICAgICAgdmFyIGZvbGxvd2VycyA9IHRoaXMuX2ZvbGxvd2VycyxcclxuICAgICAgICAgICAgaSAgICAgICAgID0gZm9sbG93ZXJzICYmIGZvbGxvd2Vycy5sZW5ndGg7XHJcbiAgICAgICAgd2hpbGUgKGZvbGxvd2VycyAmJiBpLS0pXHJcbiAgICAgICAgICAgIGlmICggZm9sbG93ZXJzW2ldWzBdID09PSBvYmogJiYgKCcnICsgZm9sbG93ZXJzW2ldWzFdKSA9PSAoJycgKyBrZXkpICYmXHJcbiAgICAgICAgICAgICAgICAoJycgKyBmb2xsb3dlcnNbaV1bMl0pID09ICgnJyArIGFzKSApXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZm9sbG93ZXJzLnNwbGljZShpLCAxKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFB1bGwgc3RvcmVzIGluIHRoZSBwcml2YXRlIHN0YXRlXHJcbiAgICAgKiBAcGFyYW0gc3RvcmVzICB7QXJyYXl9IChwYXNzZWQgdG8gU3RvcmU6Om1hcCkgRXggOiBbXCJzZXNzaW9uXCIsIFwib3RoZXJOYW1lZFN0b3JlOmtleVwiLCBvdGhlclN0b3JlLmFzKFwib3RoZXJLZXlcIildXHJcbiAgICAgKi9cclxuICAgIHB1bGwoIHN0b3JlcywgZG9XYWl0LCBvcmlnaW4gKSB7XHJcbiAgICAgICAgdGhpcy5tb3VudChzdG9yZXMpO1xyXG4gICAgICAgIHRoaXMuYmluZChvcmlnaW4sIHN0b3JlcywgbnVsbCwgZmFsc2UpO1xyXG5cclxuICAgICAgICByZXR1cm4gc3RvcmVzLnJlZHVjZSgoIGRhdGFzLCBpZCApID0+IChkYXRhc1tpZF0gPSB0aGlzLnN0b3Jlc1tpZF0gJiYgdGhpcy5zdG9yZXNbaWRdLmRhdGFzLCBkYXRhcyksIHt9KTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRVcGRhdGVzKCByZXZzLCBvdXRwdXQsIHVwZGF0ZWQgKSB7XHJcbiAgICAgICAgbGV0IGN0eCA9IHRoaXMuX19jb250ZXh0O1xyXG5cclxuICAgICAgICBvdXRwdXQgPSBvdXRwdXQgfHwge307XHJcbiAgICAgICAgT2JqZWN0LmtleXMoY3R4KS5mb3JFYWNoKFxyXG4gICAgICAgICAgICBpZCA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoICFyZXZzIHx8ICEoICFyZXZzLmhhc093blByb3BlcnR5KGlkKSB8fCBjdHhbaWRdLl9yZXYgPD0gcmV2c1tpZF0gKSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlZCAgICA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgb3V0cHV0W2lkXSA9IHRoaXMuZGF0YXNbaWRdO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICggcmV2cyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldnNbaWRdID0gY3R4W2lkXS5fcmV2O1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdXBkYXRlZCA9IHRoaXMuX19taXhlZC5yZWR1Y2UoKCB1cGRhdGVkLCBjdHggKSA9PiAoY3R4LmdldFVwZGF0ZXMocmV2cywgb3V0cHV0LCB1cGRhdGVkKSB8fCB1cGRhdGVkKSwgdXBkYXRlZCk7XHJcbiAgICAgICAgdXBkYXRlZCA9IHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LmdldFVwZGF0ZXMocmV2cywgb3V0cHV0LCB1cGRhdGVkKSB8fCB1cGRhdGVkO1xyXG4gICAgICAgIHJldHVybiB1cGRhdGVkICYmIG91dHB1dDtcclxuICAgIH1cclxuXHJcbiAgICBzZXJpYWxpemUoIGZsYWdzX3N0YXRlcyA9IC8uKi8sIGZsYWdzX2RhdGFzID0gLy4qLyApIHtcclxuICAgICAgICBsZXQgY3R4ID0gdGhpcy5fX2NvbnRleHQsIG91dHB1dCA9IHtzdGF0ZSA6IHt9LCBkYXRhcyA6IHt9fSxcclxuICAgICAgICAgICAgX2ZsYWdzX3N0YXRlcyxcclxuICAgICAgICAgICAgX2ZsYWdzX2RhdGFzO1xyXG4gICAgICAgIGlmICggaXNBcnJheShmbGFnc19zdGF0ZXMpIClcclxuICAgICAgICAgICAgZmxhZ3Nfc3RhdGVzLmZvckVhY2goaWQgPT4gKG91dHB1dC5zdGF0ZVtpZF0gPSB0aGlzLnN0YXRlW2lkXSkpXHJcblxyXG4gICAgICAgIGlmICggaXNBcnJheShmbGFnc19kYXRhcykgKVxyXG4gICAgICAgICAgICBmbGFnc19kYXRhcy5mb3JFYWNoKGlkID0+IChvdXRwdXQuZGF0YXNbaWRdID0gdGhpcy5kYXRhc1tpZF0pKVxyXG5cclxuICAgICAgICBpZiAoICFpc0FycmF5KGZsYWdzX2RhdGFzKSAmJiAhaXNBcnJheShmbGFnc19zdGF0ZXMpIClcclxuICAgICAgICAgICAgT2JqZWN0LmtleXMoY3R4KS5mb3JFYWNoKFxyXG4gICAgICAgICAgICAgICAgaWQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICggaXNGdW5jdGlvbihjdHhbaWRdKSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGZsYWdzID0gY3R4W2lkXS5jb25zdHJ1Y3Rvci5mbGFncztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZmxhZ3MgPSBpc0FycmF5KGZsYWdzKSA/IGZsYWdzIDogW2ZsYWdzIHx8IFwiXCJdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIGZsYWdzLnJlZHVjZSgoIHIsIGZsYWcgKSA9PiAociB8fCBfZmxhZ3Nfc3RhdGVzLnRlc3QoZmxhZykpLCBmYWxzZSkgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXQuc3RhdGVbaWRdID0gdGhpcy5zdGF0ZVtpZF07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICggZmxhZ3MucmVkdWNlKCggciwgZmxhZyApID0+IChyIHx8IF9mbGFnc19kYXRhcy50ZXN0KGZsYWcpKSwgZmFsc2UpIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0LmRhdGFzW2lkXSA9IHRoaXMuZGF0YXNbaWRdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgcmV0dXJuIG91dHB1dDtcclxuICAgIH1cclxuXHJcbiAgICBvbiggbGlzdHMgKSB7XHJcblxyXG4gICAgICAgIGlmICggIWlzU3RyaW5nKGxpc3RzKSAmJiBsaXN0cyApXHJcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGxpc3RzKS5mb3JFYWNoKGsgPT4gc3VwZXIub24oaywgbGlzdHNba10pKTtcclxuICAgICAgICBlbHNlIHN1cGVyLm9uKC4uLmFyZ3VtZW50cyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlTGlzdGVuZXIoIGxpc3RzICkge1xyXG4gICAgICAgIGlmICggIWlzU3RyaW5nKGxpc3RzKSAmJiBsaXN0cyApXHJcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGxpc3RzKS5mb3JFYWNoKGsgPT4gc3VwZXIucmVtb3ZlTGlzdGVuZXIoaywgbGlzdHNba10pKTtcclxuICAgICAgICBlbHNlIHN1cGVyLnJlbW92ZUxpc3RlbmVyKC4uLmFyZ3VtZW50cyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBvbmNlKCdzdGFibGUnLCBjYilcclxuICAgICAqIEBwYXJhbSBvYmoge1JlYWN0LkNvbXBvbmVudHxTdG9yZXxmdW5jdGlvbilcclxuICAgICAqIEBwYXJhbSBrZXkge3N0cmluZ30gb3B0aW9uYWwga2V5IHdoZXJlIHRvIG1hcCB0aGUgcHVibGljIHN0YXRlXHJcbiAgICAgKi9cclxuICAgIHRoZW4oIGNiICkge1xyXG4gICAgICAgIGlmICggdGhpcy5fc3RhYmxlIClcclxuICAgICAgICAgICAgcmV0dXJuIGNiKG51bGwsIHRoaXMuZGF0YXMpO1xyXG4gICAgICAgIHRoaXMub25jZSgnc3RhYmxlJywgZSA9PiBjYihudWxsLCB0aGlzLmRhdGFzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzdG9yZSgge3N0YXRlLCBkYXRhc30sIHF1aWV0ICkge1xyXG4gICAgICAgIGxldCBjdHggPSB0aGlzLl9fY29udGV4dDtcclxuICAgICAgICBPYmplY3Qua2V5cyhkYXRhcykuZm9yRWFjaChcclxuICAgICAgICAgICAgaWQgPT4ge1xyXG4gICAgICAgICAgICAgICAgcXVpZXQgP1xyXG4gICAgICAgICAgICAgICAgY3R4LmRhdGFzID0gZGF0YXNbaWRdXHJcbiAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgY3R4LnB1c2goZGF0YXNbaWRdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgT2JqZWN0LmtleXMoc3RhdGUpLmZvckVhY2goXHJcbiAgICAgICAgICAgIGlkID0+IHtcclxuICAgICAgICAgICAgICAgIHF1aWV0ID9cclxuICAgICAgICAgICAgICAgIGN0eC5zdGF0ZSA9IHN0YXRlW2lkXVxyXG4gICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgIGN0eC5zZXRTdGF0ZShzdGF0ZVtpZF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcmV0YWluKCByZWFzb24gKSB7XHJcbiAgICAgICAgdGhpcy5fX3JldGFpbkxvY2tzLmFsbCsrO1xyXG4gICAgICAgIGlmICggcmVhc29uICkge1xyXG4gICAgICAgICAgICB0aGlzLl9fcmV0YWluTG9ja3NbcmVhc29uXSA9IHRoaXMuX19yZXRhaW5Mb2Nrc1tyZWFzb25dIHx8IDA7XHJcbiAgICAgICAgICAgIHRoaXMuX19yZXRhaW5Mb2Nrc1tyZWFzb25dKys7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRpc3Bvc2UoIHJlYXNvbiApIHtcclxuICAgICAgICB0aGlzLl9fcmV0YWluTG9ja3MuYWxsLS07XHJcbiAgICAgICAgaWYgKCByZWFzb24gKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX19yZXRhaW5Mb2Nrc1tyZWFzb25dID0gdGhpcy5fX3JldGFpbkxvY2tzW3JlYXNvbl0gfHwgMDtcclxuICAgICAgICAgICAgdGhpcy5fX3JldGFpbkxvY2tzW3JlYXNvbl0tLTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCAhdGhpcy5fX3JldGFpbkxvY2tzLmFsbCApIHtcclxuICAgICAgICAgICAgaWYgKCB0aGlzLl9wZXJzaXN0ZW5jZVRtICkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZGVzdHJveVRNICYmIGNsZWFyVGltZW91dCh0aGlzLl9kZXN0cm95VE0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZGVzdHJveVRNID0gc2V0VGltZW91dChcclxuICAgICAgICAgICAgICAgICAgICBlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIXRoaXMuX19yZXRhaW5Mb2Nrcy5hbGwgJiYgdGhpcy5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wZXJzaXN0ZW5jZVRtXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgd2FpdCggcmVhc29uICkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwid2FpdFwiLCByZWFzb24pO1xyXG4gICAgICAgIHRoaXMuX3N0YWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICF0aGlzLl9fdzhMb2Nrcy5hbGwgJiYgdGhpcy5lbWl0KFwidW5zdGFibGVcIiwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5fX3c4TG9ja3MuYWxsKys7XHJcbiAgICAgICAgaWYgKCByZWFzb24gKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX193OExvY2tzW3JlYXNvbl0gPSB0aGlzLl9fdzhMb2Nrc1tyZWFzb25dIHx8IDA7XHJcbiAgICAgICAgICAgIHRoaXMuX193OExvY2tzW3JlYXNvbl0rKztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJvcGFnKCkge1xyXG4gICAgICAgIHRoaXMuX3Byb3BhZ1RNICYmIGNsZWFyVGltZW91dCh0aGlzLl9wcm9wYWdUTSk7XHJcbiAgICAgICAgdGhpcy5fcHJvcGFnVE0gPSBzZXRUaW1lb3V0KFxyXG4gICAgICAgICAgICBlID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3Byb3BhZygpXHJcbiAgICAgICAgICAgIH0sIDUwXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBfcHJvcGFnKCkge1xyXG4gICAgICAgIGlmICggdGhpcy5fZm9sbG93ZXJzLmxlbmd0aCApXHJcbiAgICAgICAgICAgIHRoaXMuX2ZvbGxvd2Vycy5mb3JFYWNoKCggezAgOiBvYmosIDEgOiBrZXksIDIgOiBhcywgMyA6IGxhc3RSZXZzfSApID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBkYXRhcyA9IHRoaXMuZ2V0VXBkYXRlcyhsYXN0UmV2cyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoICFkYXRhcyApIHJldHVybjtcclxuICAgICAgICAgICAgICAgIGlmICggdHlwZW9mIG9iaiAhPSBcImZ1bmN0aW9uXCIgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBhcyApIG9iai5zZXRTdGF0ZSh7W2FzXSA6IGRhdGFzfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBvYmouc2V0U3RhdGUoZGF0YXMpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBvYmooZGF0YXMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbGFzdFJldnMgJiZcclxuICAgICAgICAgICAgICAgIGtleS5mb3JFYWNoKGlkID0+IChsYXN0UmV2c1tpZF0gPSB0aGlzLl9fY29udGV4dFtpZF0gJiYgdGhpcy5fX2NvbnRleHRbaWRdLl9yZXYgfHwgMCkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmVtaXQoXCJ1cGRhdGVcIiwgdGhpcy5nZXRVcGRhdGVzKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbGVhc2UoIHJlYXNvbiApIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInJlbGVhc2VcIiwgcmVhc29uKTtcclxuICAgICAgICB0aGlzLl9fdzhMb2Nrcy5hbGwtLTtcclxuICAgICAgICBpZiAoIHJlYXNvbiApIHtcclxuICAgICAgICAgICAgdGhpcy5fX3c4TG9ja3NbcmVhc29uXSA9IHRoaXMuX193OExvY2tzW3JlYXNvbl0gfHwgMDtcclxuICAgICAgICAgICAgdGhpcy5fX3c4TG9ja3NbcmVhc29uXS0tO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9zdGFibGUgPSB0cnVlO1xyXG4gICAgICAgIGlmICggIXRoaXMuX193OExvY2tzLmFsbCApIHtcclxuICAgICAgICAgICAgdGhpcy5fc3RhYmlsaXplclRNICYmIGNsZWFyVGltZW91dCh0aGlzLl9zdGFiaWxpemVyVE0pO1xyXG4gICAgICAgICAgICB0aGlzLl9wcm9wYWdUTSAmJiBjbGVhclRpbWVvdXQodGhpcy5fcHJvcGFnVE0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5fc3RhYmlsaXplclRNID0gc2V0VGltZW91dChcclxuICAgICAgICAgICAgICAgIGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICggIXRoaXMuX3N0YWJsZSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9zdGFiaWxpemVyVE0gPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXQoXCJzdGFibGVcIiwgdGhpcyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3Byb3BhZygpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIG9yZGVyIGRlc3Ryb3kgb2YgbG9jYWwgc3RvcmVzXHJcbiAgICAgKi9cclxuICAgIGRlc3Ryb3koKSB7XHJcbiAgICAgICAgbGV0IGN0eCA9IHRoaXMuX19jb250ZXh0O1xyXG5cclxuICAgICAgICB0aGlzLmVtaXQoXCJkZXN0cm95XCIpO1xyXG4gICAgICAgIE9iamVjdC5rZXlzKFxyXG4gICAgICAgICAgICB0aGlzLl9fbGlzdGVuaW5nXHJcbiAgICAgICAgKS5mb3JFYWNoKFxyXG4gICAgICAgICAgICBpZCA9PiB0aGlzLl9fY29udGV4dFtpZF0ucmVtb3ZlTGlzdGVuZXIodGhpcy5fX2xpc3RlbmluZ1tpZF0pXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLl9fbGlzdGVuaW5nID0ge307XHJcblxyXG4gICAgICAgIGlmICggdGhpcy5faXNMb2NhbElkIClcclxuICAgICAgICAgICAgZGVsZXRlIG9wZW5Db250ZXh0c1t0aGlzLl9pZF07XHJcblxyXG4gICAgICAgIGZvciAoIGxldCBrZXkgaW4gY3R4IClcclxuICAgICAgICAgICAgaWYgKCAhaXNGdW5jdGlvbihjdHhba2V5XSkgKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIGN0eFtrZXldLmNvbnRleHRPYmogPT09IHRoaXMgKVxyXG4gICAgICAgICAgICAgICAgICAgIGN0eFtrZXldLmRlc3Ryb3koKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjdHhba2V5XSA9IGN0eFtrZXldLmNvbnN0cnVjdG9yO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgd2hpbGUgKHRoaXMuX19taXhlZExpc3QubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX19taXhlZFswXS5yZW1vdmVMaXN0ZW5lcih0aGlzLl9fbWl4ZWRMaXN0LnNoaWZ0KCkpO1xyXG4gICAgICAgICAgICB0aGlzLl9fbWl4ZWQuc2hpZnQoKS5kaXNwb3NlKClcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCB0aGlzLnBhcmVudCApIHtcclxuICAgICAgICAgICAgdGhpcy5wYXJlbnQucmVtb3ZlTGlzdGVuZXIodGhpcy5fX3BhcmVudExpc3QpO1xyXG4gICAgICAgICAgICB0aGlzLnBhcmVudC5kaXNwb3NlKFwiaXNNeVBhcmVudFwiKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9Db250ZXh0LmpzIiwiOyhmdW5jdGlvbiAoZmFjdG9yeSkge1xuICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuICAgIGRlZmluZShbXSwgZmFjdG9yeSk7XG4gIGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiAhIWV4cG9ydHMgJiYgIWV4cG9ydHMubm9kZVR5cGUpXG4gICAgaWYgKHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnICYmICEhbW9kdWxlICYmIG1vZHVsZS5leHBvcnRzKVxuICAgICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG4gICAgZWxzZVxuICAgICAgZXhwb3J0c1snZGVmYXVsdCddID0gZmFjdG9yeSgpO1xuICBlbHNlIGlmICh0eXBlb2YgWVVJID09PSAnZnVuY3Rpb24nICYmIFlVSS5hZGQpXG4gICAgWVVJLmFkZCgnaXMtc3RyaW5nJywgZnVuY3Rpb24gKFkpIHsgWVsnZGVmYXVsdCddID0gZmFjdG9yeSgpOyB9LCAnMS4wLjcnKTtcbiAgZWxzZVxuICAgIFN0cmluZy5pc1N0cmluZyA9IGZhY3RvcnkoKTtcbn0pKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHN0clRvU3RyaW5nICA9ICgnJykudG9TdHJpbmcsXG4gICAgICBoYXNCaW5kICAgICAgPSBGdW5jdGlvbi5wcm90b3R5cGUgJiYgRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQsXG4gICAgICBzdHJUb1N0ckNhbGwgPSBoYXNCaW5kICYmIHN0clRvU3RyaW5nLmNhbGwuYmluZChzdHJUb1N0cmluZyksXG4gICAgICBpc1N0cmluZyAgICAgPSBmdW5jdGlvbiAoc3RyKSB7XG4gICAgICAgIC8qQGNjX29uXG4gICAgICAgICAgQGlmIChAX2pzY3JpcHRfdmVyc2lvbiA+PSA1KSBAKi9cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaGFzQmluZCA/IHN0clRvU3RyQ2FsbChzdHIpIDogc3RyVG9TdHJpbmcuY2FsbChzdHIpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAvKkBlbmRcbiAgICAgICAgQCovXG4gICAgICB9O1xuXG4gIHJldHVybiBmdW5jdGlvbiAoc3RyKSB7XG4gICAgcmV0dXJuICB0eXBlb2Ygc3RyID09PSAnc3RyaW5nJyB8fFxuICAgICAgICAgICAgc3RyICYmIHR5cGVvZiBzdHIgPT09ICdvYmplY3QnICYmXG4gICAgICAgICAgICAvKkBjY19vblxuICAgICAgICAgICAgICBAaWYgKEBfanNjcmlwdF92ZXJzaW9uIDwgNS41KVxuICAgICAgICAgICAgICAgIC9eXFxzKmZ1bmN0aW9uXFxzKlN0cmluZ1xcKFxcKVxccyp7XFxzKlxcW25hdGl2ZSBjb2RlXFxdXFxzKn1cXHMqJC8udGVzdChzdHIuY29uc3RydWN0b3IpXG4gICAgICAgICAgICAgIEBlbHNlIEAqL1xuICAgICAgICAgICAgICAgIGlzU3RyaW5nKHN0cilcbiAgICAgICAgICAgICAgLypAZW5kXG4gICAgICAgICAgICBAKi9cbiAgICAgICAgICAgIHx8IGZhbHNlO1xuICB9O1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vaXNzdHJpbmcvaXNTdHJpbmcudW1kLmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiAoYXJyKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJyKSA9PSAnW29iamVjdCBBcnJheV0nO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9pc2FycmF5L2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG5mdW5jdGlvbiBFdmVudEVtaXR0ZXIoKSB7XG4gIHRoaXMuX2V2ZW50cyA9IHRoaXMuX2V2ZW50cyB8fCB7fTtcbiAgdGhpcy5fbWF4TGlzdGVuZXJzID0gdGhpcy5fbWF4TGlzdGVuZXJzIHx8IHVuZGVmaW5lZDtcbn1cbm1vZHVsZS5leHBvcnRzID0gRXZlbnRFbWl0dGVyO1xuXG4vLyBCYWNrd2FyZHMtY29tcGF0IHdpdGggbm9kZSAwLjEwLnhcbkV2ZW50RW1pdHRlci5FdmVudEVtaXR0ZXIgPSBFdmVudEVtaXR0ZXI7XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuX2V2ZW50cyA9IHVuZGVmaW5lZDtcbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuX21heExpc3RlbmVycyA9IHVuZGVmaW5lZDtcblxuLy8gQnkgZGVmYXVsdCBFdmVudEVtaXR0ZXJzIHdpbGwgcHJpbnQgYSB3YXJuaW5nIGlmIG1vcmUgdGhhbiAxMCBsaXN0ZW5lcnMgYXJlXG4vLyBhZGRlZCB0byBpdC4gVGhpcyBpcyBhIHVzZWZ1bCBkZWZhdWx0IHdoaWNoIGhlbHBzIGZpbmRpbmcgbWVtb3J5IGxlYWtzLlxuRXZlbnRFbWl0dGVyLmRlZmF1bHRNYXhMaXN0ZW5lcnMgPSAxMDtcblxuLy8gT2J2aW91c2x5IG5vdCBhbGwgRW1pdHRlcnMgc2hvdWxkIGJlIGxpbWl0ZWQgdG8gMTAuIFRoaXMgZnVuY3Rpb24gYWxsb3dzXG4vLyB0aGF0IHRvIGJlIGluY3JlYXNlZC4gU2V0IHRvIHplcm8gZm9yIHVubGltaXRlZC5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuc2V0TWF4TGlzdGVuZXJzID0gZnVuY3Rpb24obikge1xuICBpZiAoIWlzTnVtYmVyKG4pIHx8IG4gPCAwIHx8IGlzTmFOKG4pKVxuICAgIHRocm93IFR5cGVFcnJvcignbiBtdXN0IGJlIGEgcG9zaXRpdmUgbnVtYmVyJyk7XG4gIHRoaXMuX21heExpc3RlbmVycyA9IG47XG4gIHJldHVybiB0aGlzO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5lbWl0ID0gZnVuY3Rpb24odHlwZSkge1xuICB2YXIgZXIsIGhhbmRsZXIsIGxlbiwgYXJncywgaSwgbGlzdGVuZXJzO1xuXG4gIGlmICghdGhpcy5fZXZlbnRzKVxuICAgIHRoaXMuX2V2ZW50cyA9IHt9O1xuXG4gIC8vIElmIHRoZXJlIGlzIG5vICdlcnJvcicgZXZlbnQgbGlzdGVuZXIgdGhlbiB0aHJvdy5cbiAgaWYgKHR5cGUgPT09ICdlcnJvcicpIHtcbiAgICBpZiAoIXRoaXMuX2V2ZW50cy5lcnJvciB8fFxuICAgICAgICAoaXNPYmplY3QodGhpcy5fZXZlbnRzLmVycm9yKSAmJiAhdGhpcy5fZXZlbnRzLmVycm9yLmxlbmd0aCkpIHtcbiAgICAgIGVyID0gYXJndW1lbnRzWzFdO1xuICAgICAgaWYgKGVyIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgdGhyb3cgZXI7IC8vIFVuaGFuZGxlZCAnZXJyb3InIGV2ZW50XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBBdCBsZWFzdCBnaXZlIHNvbWUga2luZCBvZiBjb250ZXh0IHRvIHRoZSB1c2VyXG4gICAgICAgIHZhciBlcnIgPSBuZXcgRXJyb3IoJ1VuY2F1Z2h0LCB1bnNwZWNpZmllZCBcImVycm9yXCIgZXZlbnQuICgnICsgZXIgKyAnKScpO1xuICAgICAgICBlcnIuY29udGV4dCA9IGVyO1xuICAgICAgICB0aHJvdyBlcnI7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlciA9IHRoaXMuX2V2ZW50c1t0eXBlXTtcblxuICBpZiAoaXNVbmRlZmluZWQoaGFuZGxlcikpXG4gICAgcmV0dXJuIGZhbHNlO1xuXG4gIGlmIChpc0Z1bmN0aW9uKGhhbmRsZXIpKSB7XG4gICAgc3dpdGNoIChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAvLyBmYXN0IGNhc2VzXG4gICAgICBjYXNlIDE6XG4gICAgICAgIGhhbmRsZXIuY2FsbCh0aGlzKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDI6XG4gICAgICAgIGhhbmRsZXIuY2FsbCh0aGlzLCBhcmd1bWVudHNbMV0pO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMzpcbiAgICAgICAgaGFuZGxlci5jYWxsKHRoaXMsIGFyZ3VtZW50c1sxXSwgYXJndW1lbnRzWzJdKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICAvLyBzbG93ZXJcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICAgICAgICBoYW5kbGVyLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIH1cbiAgfSBlbHNlIGlmIChpc09iamVjdChoYW5kbGVyKSkge1xuICAgIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICAgIGxpc3RlbmVycyA9IGhhbmRsZXIuc2xpY2UoKTtcbiAgICBsZW4gPSBsaXN0ZW5lcnMubGVuZ3RoO1xuICAgIGZvciAoaSA9IDA7IGkgPCBsZW47IGkrKylcbiAgICAgIGxpc3RlbmVyc1tpXS5hcHBseSh0aGlzLCBhcmdzKTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5hZGRMaXN0ZW5lciA9IGZ1bmN0aW9uKHR5cGUsIGxpc3RlbmVyKSB7XG4gIHZhciBtO1xuXG4gIGlmICghaXNGdW5jdGlvbihsaXN0ZW5lcikpXG4gICAgdGhyb3cgVHlwZUVycm9yKCdsaXN0ZW5lciBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcblxuICBpZiAoIXRoaXMuX2V2ZW50cylcbiAgICB0aGlzLl9ldmVudHMgPSB7fTtcblxuICAvLyBUbyBhdm9pZCByZWN1cnNpb24gaW4gdGhlIGNhc2UgdGhhdCB0eXBlID09PSBcIm5ld0xpc3RlbmVyXCIhIEJlZm9yZVxuICAvLyBhZGRpbmcgaXQgdG8gdGhlIGxpc3RlbmVycywgZmlyc3QgZW1pdCBcIm5ld0xpc3RlbmVyXCIuXG4gIGlmICh0aGlzLl9ldmVudHMubmV3TGlzdGVuZXIpXG4gICAgdGhpcy5lbWl0KCduZXdMaXN0ZW5lcicsIHR5cGUsXG4gICAgICAgICAgICAgIGlzRnVuY3Rpb24obGlzdGVuZXIubGlzdGVuZXIpID9cbiAgICAgICAgICAgICAgbGlzdGVuZXIubGlzdGVuZXIgOiBsaXN0ZW5lcik7XG5cbiAgaWYgKCF0aGlzLl9ldmVudHNbdHlwZV0pXG4gICAgLy8gT3B0aW1pemUgdGhlIGNhc2Ugb2Ygb25lIGxpc3RlbmVyLiBEb24ndCBuZWVkIHRoZSBleHRyYSBhcnJheSBvYmplY3QuXG4gICAgdGhpcy5fZXZlbnRzW3R5cGVdID0gbGlzdGVuZXI7XG4gIGVsc2UgaWYgKGlzT2JqZWN0KHRoaXMuX2V2ZW50c1t0eXBlXSkpXG4gICAgLy8gSWYgd2UndmUgYWxyZWFkeSBnb3QgYW4gYXJyYXksIGp1c3QgYXBwZW5kLlxuICAgIHRoaXMuX2V2ZW50c1t0eXBlXS5wdXNoKGxpc3RlbmVyKTtcbiAgZWxzZVxuICAgIC8vIEFkZGluZyB0aGUgc2Vjb25kIGVsZW1lbnQsIG5lZWQgdG8gY2hhbmdlIHRvIGFycmF5LlxuICAgIHRoaXMuX2V2ZW50c1t0eXBlXSA9IFt0aGlzLl9ldmVudHNbdHlwZV0sIGxpc3RlbmVyXTtcblxuICAvLyBDaGVjayBmb3IgbGlzdGVuZXIgbGVha1xuICBpZiAoaXNPYmplY3QodGhpcy5fZXZlbnRzW3R5cGVdKSAmJiAhdGhpcy5fZXZlbnRzW3R5cGVdLndhcm5lZCkge1xuICAgIGlmICghaXNVbmRlZmluZWQodGhpcy5fbWF4TGlzdGVuZXJzKSkge1xuICAgICAgbSA9IHRoaXMuX21heExpc3RlbmVycztcbiAgICB9IGVsc2Uge1xuICAgICAgbSA9IEV2ZW50RW1pdHRlci5kZWZhdWx0TWF4TGlzdGVuZXJzO1xuICAgIH1cblxuICAgIGlmIChtICYmIG0gPiAwICYmIHRoaXMuX2V2ZW50c1t0eXBlXS5sZW5ndGggPiBtKSB7XG4gICAgICB0aGlzLl9ldmVudHNbdHlwZV0ud2FybmVkID0gdHJ1ZTtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJyhub2RlKSB3YXJuaW5nOiBwb3NzaWJsZSBFdmVudEVtaXR0ZXIgbWVtb3J5ICcgK1xuICAgICAgICAgICAgICAgICAgICAnbGVhayBkZXRlY3RlZC4gJWQgbGlzdGVuZXJzIGFkZGVkLiAnICtcbiAgICAgICAgICAgICAgICAgICAgJ1VzZSBlbWl0dGVyLnNldE1heExpc3RlbmVycygpIHRvIGluY3JlYXNlIGxpbWl0LicsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2V2ZW50c1t0eXBlXS5sZW5ndGgpO1xuICAgICAgaWYgKHR5cGVvZiBjb25zb2xlLnRyYWNlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIC8vIG5vdCBzdXBwb3J0ZWQgaW4gSUUgMTBcbiAgICAgICAgY29uc29sZS50cmFjZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbiA9IEV2ZW50RW1pdHRlci5wcm90b3R5cGUuYWRkTGlzdGVuZXI7XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub25jZSA9IGZ1bmN0aW9uKHR5cGUsIGxpc3RlbmVyKSB7XG4gIGlmICghaXNGdW5jdGlvbihsaXN0ZW5lcikpXG4gICAgdGhyb3cgVHlwZUVycm9yKCdsaXN0ZW5lciBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcblxuICB2YXIgZmlyZWQgPSBmYWxzZTtcblxuICBmdW5jdGlvbiBnKCkge1xuICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIodHlwZSwgZyk7XG5cbiAgICBpZiAoIWZpcmVkKSB7XG4gICAgICBmaXJlZCA9IHRydWU7XG4gICAgICBsaXN0ZW5lci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfVxuXG4gIGcubGlzdGVuZXIgPSBsaXN0ZW5lcjtcbiAgdGhpcy5vbih0eXBlLCBnKTtcblxuICByZXR1cm4gdGhpcztcbn07XG5cbi8vIGVtaXRzIGEgJ3JlbW92ZUxpc3RlbmVyJyBldmVudCBpZmYgdGhlIGxpc3RlbmVyIHdhcyByZW1vdmVkXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyID0gZnVuY3Rpb24odHlwZSwgbGlzdGVuZXIpIHtcbiAgdmFyIGxpc3QsIHBvc2l0aW9uLCBsZW5ndGgsIGk7XG5cbiAgaWYgKCFpc0Z1bmN0aW9uKGxpc3RlbmVyKSlcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ2xpc3RlbmVyIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuXG4gIGlmICghdGhpcy5fZXZlbnRzIHx8ICF0aGlzLl9ldmVudHNbdHlwZV0pXG4gICAgcmV0dXJuIHRoaXM7XG5cbiAgbGlzdCA9IHRoaXMuX2V2ZW50c1t0eXBlXTtcbiAgbGVuZ3RoID0gbGlzdC5sZW5ndGg7XG4gIHBvc2l0aW9uID0gLTE7XG5cbiAgaWYgKGxpc3QgPT09IGxpc3RlbmVyIHx8XG4gICAgICAoaXNGdW5jdGlvbihsaXN0Lmxpc3RlbmVyKSAmJiBsaXN0Lmxpc3RlbmVyID09PSBsaXN0ZW5lcikpIHtcbiAgICBkZWxldGUgdGhpcy5fZXZlbnRzW3R5cGVdO1xuICAgIGlmICh0aGlzLl9ldmVudHMucmVtb3ZlTGlzdGVuZXIpXG4gICAgICB0aGlzLmVtaXQoJ3JlbW92ZUxpc3RlbmVyJywgdHlwZSwgbGlzdGVuZXIpO1xuXG4gIH0gZWxzZSBpZiAoaXNPYmplY3QobGlzdCkpIHtcbiAgICBmb3IgKGkgPSBsZW5ndGg7IGktLSA+IDA7KSB7XG4gICAgICBpZiAobGlzdFtpXSA9PT0gbGlzdGVuZXIgfHxcbiAgICAgICAgICAobGlzdFtpXS5saXN0ZW5lciAmJiBsaXN0W2ldLmxpc3RlbmVyID09PSBsaXN0ZW5lcikpIHtcbiAgICAgICAgcG9zaXRpb24gPSBpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocG9zaXRpb24gPCAwKVxuICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICBpZiAobGlzdC5sZW5ndGggPT09IDEpIHtcbiAgICAgIGxpc3QubGVuZ3RoID0gMDtcbiAgICAgIGRlbGV0ZSB0aGlzLl9ldmVudHNbdHlwZV07XG4gICAgfSBlbHNlIHtcbiAgICAgIGxpc3Quc3BsaWNlKHBvc2l0aW9uLCAxKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fZXZlbnRzLnJlbW92ZUxpc3RlbmVyKVxuICAgICAgdGhpcy5lbWl0KCdyZW1vdmVMaXN0ZW5lcicsIHR5cGUsIGxpc3RlbmVyKTtcbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBmdW5jdGlvbih0eXBlKSB7XG4gIHZhciBrZXksIGxpc3RlbmVycztcblxuICBpZiAoIXRoaXMuX2V2ZW50cylcbiAgICByZXR1cm4gdGhpcztcblxuICAvLyBub3QgbGlzdGVuaW5nIGZvciByZW1vdmVMaXN0ZW5lciwgbm8gbmVlZCB0byBlbWl0XG4gIGlmICghdGhpcy5fZXZlbnRzLnJlbW92ZUxpc3RlbmVyKSB7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApXG4gICAgICB0aGlzLl9ldmVudHMgPSB7fTtcbiAgICBlbHNlIGlmICh0aGlzLl9ldmVudHNbdHlwZV0pXG4gICAgICBkZWxldGUgdGhpcy5fZXZlbnRzW3R5cGVdO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLy8gZW1pdCByZW1vdmVMaXN0ZW5lciBmb3IgYWxsIGxpc3RlbmVycyBvbiBhbGwgZXZlbnRzXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgZm9yIChrZXkgaW4gdGhpcy5fZXZlbnRzKSB7XG4gICAgICBpZiAoa2V5ID09PSAncmVtb3ZlTGlzdGVuZXInKSBjb250aW51ZTtcbiAgICAgIHRoaXMucmVtb3ZlQWxsTGlzdGVuZXJzKGtleSk7XG4gICAgfVxuICAgIHRoaXMucmVtb3ZlQWxsTGlzdGVuZXJzKCdyZW1vdmVMaXN0ZW5lcicpO1xuICAgIHRoaXMuX2V2ZW50cyA9IHt9O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgbGlzdGVuZXJzID0gdGhpcy5fZXZlbnRzW3R5cGVdO1xuXG4gIGlmIChpc0Z1bmN0aW9uKGxpc3RlbmVycykpIHtcbiAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVycyk7XG4gIH0gZWxzZSBpZiAobGlzdGVuZXJzKSB7XG4gICAgLy8gTElGTyBvcmRlclxuICAgIHdoaWxlIChsaXN0ZW5lcnMubGVuZ3RoKVxuICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcnNbbGlzdGVuZXJzLmxlbmd0aCAtIDFdKTtcbiAgfVxuICBkZWxldGUgdGhpcy5fZXZlbnRzW3R5cGVdO1xuXG4gIHJldHVybiB0aGlzO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5saXN0ZW5lcnMgPSBmdW5jdGlvbih0eXBlKSB7XG4gIHZhciByZXQ7XG4gIGlmICghdGhpcy5fZXZlbnRzIHx8ICF0aGlzLl9ldmVudHNbdHlwZV0pXG4gICAgcmV0ID0gW107XG4gIGVsc2UgaWYgKGlzRnVuY3Rpb24odGhpcy5fZXZlbnRzW3R5cGVdKSlcbiAgICByZXQgPSBbdGhpcy5fZXZlbnRzW3R5cGVdXTtcbiAgZWxzZVxuICAgIHJldCA9IHRoaXMuX2V2ZW50c1t0eXBlXS5zbGljZSgpO1xuICByZXR1cm4gcmV0O1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5saXN0ZW5lckNvdW50ID0gZnVuY3Rpb24odHlwZSkge1xuICBpZiAodGhpcy5fZXZlbnRzKSB7XG4gICAgdmFyIGV2bGlzdGVuZXIgPSB0aGlzLl9ldmVudHNbdHlwZV07XG5cbiAgICBpZiAoaXNGdW5jdGlvbihldmxpc3RlbmVyKSlcbiAgICAgIHJldHVybiAxO1xuICAgIGVsc2UgaWYgKGV2bGlzdGVuZXIpXG4gICAgICByZXR1cm4gZXZsaXN0ZW5lci5sZW5ndGg7XG4gIH1cbiAgcmV0dXJuIDA7XG59O1xuXG5FdmVudEVtaXR0ZXIubGlzdGVuZXJDb3VudCA9IGZ1bmN0aW9uKGVtaXR0ZXIsIHR5cGUpIHtcbiAgcmV0dXJuIGVtaXR0ZXIubGlzdGVuZXJDb3VudCh0eXBlKTtcbn07XG5cbmZ1bmN0aW9uIGlzRnVuY3Rpb24oYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnZnVuY3Rpb24nO1xufVxuXG5mdW5jdGlvbiBpc051bWJlcihhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdudW1iZXInO1xufVxuXG5mdW5jdGlvbiBpc09iamVjdChhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdvYmplY3QnICYmIGFyZyAhPT0gbnVsbDtcbn1cblxuZnVuY3Rpb24gaXNVbmRlZmluZWQoYXJnKSB7XG4gIHJldHVybiBhcmcgPT09IHZvaWQgMDtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9ldmVudHMvZXZlbnRzLmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGlmICh0eXBlb2YgcmVxdWlyZSAhPT0gJ3VuZGVmaW5lZCcpIHt9XG5cbnZhciBpc0Z1bmN0aW9uID0gZnVuY3Rpb24gKGZ1bmN0aW9uVG9DaGVjaykge1xuXHR2YXIgZ2V0VHlwZSA9IHt9O1xuXHRyZXR1cm4gZnVuY3Rpb25Ub0NoZWNrICYmIGdldFR5cGUudG9TdHJpbmcuY2FsbChmdW5jdGlvblRvQ2hlY2spID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xufTtcblxuaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG5cdG1vZHVsZS5leHBvcnRzID0gaXNGdW5jdGlvbjtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vaXNmdW5jdGlvbi9saWIvbWFpbi5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vbGliL2luZGV4Jyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc2hvcnRpZC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbnZhciBhbHBoYWJldCA9IHJlcXVpcmUoJy4vYWxwaGFiZXQnKTtcbnZhciBlbmNvZGUgPSByZXF1aXJlKCcuL2VuY29kZScpO1xudmFyIGRlY29kZSA9IHJlcXVpcmUoJy4vZGVjb2RlJyk7XG52YXIgYnVpbGQgPSByZXF1aXJlKCcuL2J1aWxkJyk7XG52YXIgaXNWYWxpZCA9IHJlcXVpcmUoJy4vaXMtdmFsaWQnKTtcblxuLy8gaWYgeW91IGFyZSB1c2luZyBjbHVzdGVyIG9yIG11bHRpcGxlIHNlcnZlcnMgdXNlIHRoaXMgdG8gbWFrZSBlYWNoIGluc3RhbmNlXG4vLyBoYXMgYSB1bmlxdWUgdmFsdWUgZm9yIHdvcmtlclxuLy8gTm90ZTogSSBkb24ndCBrbm93IGlmIHRoaXMgaXMgYXV0b21hdGljYWxseSBzZXQgd2hlbiB1c2luZyB0aGlyZFxuLy8gcGFydHkgY2x1c3RlciBzb2x1dGlvbnMgc3VjaCBhcyBwbTIuXG52YXIgY2x1c3RlcldvcmtlcklkID0gcmVxdWlyZSgnLi91dGlsL2NsdXN0ZXItd29ya2VyLWlkJykgfHwgMDtcblxuLyoqXG4gKiBTZXQgdGhlIHNlZWQuXG4gKiBIaWdobHkgcmVjb21tZW5kZWQgaWYgeW91IGRvbid0IHdhbnQgcGVvcGxlIHRvIHRyeSB0byBmaWd1cmUgb3V0IHlvdXIgaWQgc2NoZW1hLlxuICogZXhwb3NlZCBhcyBzaG9ydGlkLnNlZWQoaW50KVxuICogQHBhcmFtIHNlZWQgSW50ZWdlciB2YWx1ZSB0byBzZWVkIHRoZSByYW5kb20gYWxwaGFiZXQuICBBTFdBWVMgVVNFIFRIRSBTQU1FIFNFRUQgb3IgeW91IG1pZ2h0IGdldCBvdmVybGFwcy5cbiAqL1xuZnVuY3Rpb24gc2VlZChzZWVkVmFsdWUpIHtcbiAgICBhbHBoYWJldC5zZWVkKHNlZWRWYWx1ZSk7XG4gICAgcmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vKipcbiAqIFNldCB0aGUgY2x1c3RlciB3b3JrZXIgb3IgbWFjaGluZSBpZFxuICogZXhwb3NlZCBhcyBzaG9ydGlkLndvcmtlcihpbnQpXG4gKiBAcGFyYW0gd29ya2VySWQgd29ya2VyIG11c3QgYmUgcG9zaXRpdmUgaW50ZWdlci4gIE51bWJlciBsZXNzIHRoYW4gMTYgaXMgcmVjb21tZW5kZWQuXG4gKiByZXR1cm5zIHNob3J0aWQgbW9kdWxlIHNvIGl0IGNhbiBiZSBjaGFpbmVkLlxuICovXG5mdW5jdGlvbiB3b3JrZXIod29ya2VySWQpIHtcbiAgICBjbHVzdGVyV29ya2VySWQgPSB3b3JrZXJJZDtcbiAgICByZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8qKlxuICpcbiAqIHNldHMgbmV3IGNoYXJhY3RlcnMgdG8gdXNlIGluIHRoZSBhbHBoYWJldFxuICogcmV0dXJucyB0aGUgc2h1ZmZsZWQgYWxwaGFiZXRcbiAqL1xuZnVuY3Rpb24gY2hhcmFjdGVycyhuZXdDaGFyYWN0ZXJzKSB7XG4gICAgaWYgKG5ld0NoYXJhY3RlcnMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBhbHBoYWJldC5jaGFyYWN0ZXJzKG5ld0NoYXJhY3RlcnMpO1xuICAgIH1cblxuICAgIHJldHVybiBhbHBoYWJldC5zaHVmZmxlZCgpO1xufVxuXG4vKipcbiAqIEdlbmVyYXRlIHVuaXF1ZSBpZFxuICogUmV0dXJucyBzdHJpbmcgaWRcbiAqL1xuZnVuY3Rpb24gZ2VuZXJhdGUoKSB7XG4gIHJldHVybiBidWlsZChjbHVzdGVyV29ya2VySWQpO1xufVxuXG4vLyBFeHBvcnQgYWxsIG90aGVyIGZ1bmN0aW9ucyBhcyBwcm9wZXJ0aWVzIG9mIHRoZSBnZW5lcmF0ZSBmdW5jdGlvblxubW9kdWxlLmV4cG9ydHMgPSBnZW5lcmF0ZTtcbm1vZHVsZS5leHBvcnRzLmdlbmVyYXRlID0gZ2VuZXJhdGU7XG5tb2R1bGUuZXhwb3J0cy5zZWVkID0gc2VlZDtcbm1vZHVsZS5leHBvcnRzLndvcmtlciA9IHdvcmtlcjtcbm1vZHVsZS5leHBvcnRzLmNoYXJhY3RlcnMgPSBjaGFyYWN0ZXJzO1xubW9kdWxlLmV4cG9ydHMuZGVjb2RlID0gZGVjb2RlO1xubW9kdWxlLmV4cG9ydHMuaXNWYWxpZCA9IGlzVmFsaWQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc2hvcnRpZC9saWIvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgcmFuZG9tRnJvbVNlZWQgPSByZXF1aXJlKCcuL3JhbmRvbS9yYW5kb20tZnJvbS1zZWVkJyk7XG5cbnZhciBPUklHSU5BTCA9ICcwMTIzNDU2Nzg5YWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXpBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWl8tJztcbnZhciBhbHBoYWJldDtcbnZhciBwcmV2aW91c1NlZWQ7XG5cbnZhciBzaHVmZmxlZDtcblxuZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgc2h1ZmZsZWQgPSBmYWxzZTtcbn1cblxuZnVuY3Rpb24gc2V0Q2hhcmFjdGVycyhfYWxwaGFiZXRfKSB7XG4gICAgaWYgKCFfYWxwaGFiZXRfKSB7XG4gICAgICAgIGlmIChhbHBoYWJldCAhPT0gT1JJR0lOQUwpIHtcbiAgICAgICAgICAgIGFscGhhYmV0ID0gT1JJR0lOQUw7XG4gICAgICAgICAgICByZXNldCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoX2FscGhhYmV0XyA9PT0gYWxwaGFiZXQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChfYWxwaGFiZXRfLmxlbmd0aCAhPT0gT1JJR0lOQUwubGVuZ3RoKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQ3VzdG9tIGFscGhhYmV0IGZvciBzaG9ydGlkIG11c3QgYmUgJyArIE9SSUdJTkFMLmxlbmd0aCArICcgdW5pcXVlIGNoYXJhY3RlcnMuIFlvdSBzdWJtaXR0ZWQgJyArIF9hbHBoYWJldF8ubGVuZ3RoICsgJyBjaGFyYWN0ZXJzOiAnICsgX2FscGhhYmV0Xyk7XG4gICAgfVxuXG4gICAgdmFyIHVuaXF1ZSA9IF9hbHBoYWJldF8uc3BsaXQoJycpLmZpbHRlcihmdW5jdGlvbihpdGVtLCBpbmQsIGFycil7XG4gICAgICAgcmV0dXJuIGluZCAhPT0gYXJyLmxhc3RJbmRleE9mKGl0ZW0pO1xuICAgIH0pO1xuXG4gICAgaWYgKHVuaXF1ZS5sZW5ndGgpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDdXN0b20gYWxwaGFiZXQgZm9yIHNob3J0aWQgbXVzdCBiZSAnICsgT1JJR0lOQUwubGVuZ3RoICsgJyB1bmlxdWUgY2hhcmFjdGVycy4gVGhlc2UgY2hhcmFjdGVycyB3ZXJlIG5vdCB1bmlxdWU6ICcgKyB1bmlxdWUuam9pbignLCAnKSk7XG4gICAgfVxuXG4gICAgYWxwaGFiZXQgPSBfYWxwaGFiZXRfO1xuICAgIHJlc2V0KCk7XG59XG5cbmZ1bmN0aW9uIGNoYXJhY3RlcnMoX2FscGhhYmV0Xykge1xuICAgIHNldENoYXJhY3RlcnMoX2FscGhhYmV0Xyk7XG4gICAgcmV0dXJuIGFscGhhYmV0O1xufVxuXG5mdW5jdGlvbiBzZXRTZWVkKHNlZWQpIHtcbiAgICByYW5kb21Gcm9tU2VlZC5zZWVkKHNlZWQpO1xuICAgIGlmIChwcmV2aW91c1NlZWQgIT09IHNlZWQpIHtcbiAgICAgICAgcmVzZXQoKTtcbiAgICAgICAgcHJldmlvdXNTZWVkID0gc2VlZDtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHNodWZmbGUoKSB7XG4gICAgaWYgKCFhbHBoYWJldCkge1xuICAgICAgICBzZXRDaGFyYWN0ZXJzKE9SSUdJTkFMKTtcbiAgICB9XG5cbiAgICB2YXIgc291cmNlQXJyYXkgPSBhbHBoYWJldC5zcGxpdCgnJyk7XG4gICAgdmFyIHRhcmdldEFycmF5ID0gW107XG4gICAgdmFyIHIgPSByYW5kb21Gcm9tU2VlZC5uZXh0VmFsdWUoKTtcbiAgICB2YXIgY2hhcmFjdGVySW5kZXg7XG5cbiAgICB3aGlsZSAoc291cmNlQXJyYXkubGVuZ3RoID4gMCkge1xuICAgICAgICByID0gcmFuZG9tRnJvbVNlZWQubmV4dFZhbHVlKCk7XG4gICAgICAgIGNoYXJhY3RlckluZGV4ID0gTWF0aC5mbG9vcihyICogc291cmNlQXJyYXkubGVuZ3RoKTtcbiAgICAgICAgdGFyZ2V0QXJyYXkucHVzaChzb3VyY2VBcnJheS5zcGxpY2UoY2hhcmFjdGVySW5kZXgsIDEpWzBdKTtcbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldEFycmF5LmpvaW4oJycpO1xufVxuXG5mdW5jdGlvbiBnZXRTaHVmZmxlZCgpIHtcbiAgICBpZiAoc2h1ZmZsZWQpIHtcbiAgICAgICAgcmV0dXJuIHNodWZmbGVkO1xuICAgIH1cbiAgICBzaHVmZmxlZCA9IHNodWZmbGUoKTtcbiAgICByZXR1cm4gc2h1ZmZsZWQ7XG59XG5cbi8qKlxuICogbG9va3VwIHNodWZmbGVkIGxldHRlclxuICogQHBhcmFtIGluZGV4XG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBsb29rdXAoaW5kZXgpIHtcbiAgICB2YXIgYWxwaGFiZXRTaHVmZmxlZCA9IGdldFNodWZmbGVkKCk7XG4gICAgcmV0dXJuIGFscGhhYmV0U2h1ZmZsZWRbaW5kZXhdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBjaGFyYWN0ZXJzOiBjaGFyYWN0ZXJzLFxuICAgIHNlZWQ6IHNldFNlZWQsXG4gICAgbG9va3VwOiBsb29rdXAsXG4gICAgc2h1ZmZsZWQ6IGdldFNodWZmbGVkXG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Nob3J0aWQvbGliL2FscGhhYmV0LmpzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuLy8gRm91bmQgdGhpcyBzZWVkLWJhc2VkIHJhbmRvbSBnZW5lcmF0b3Igc29tZXdoZXJlXG4vLyBCYXNlZCBvbiBUaGUgQ2VudHJhbCBSYW5kb21pemVyIDEuMyAoQykgMTk5NyBieSBQYXVsIEhvdWxlIChob3VsZUBtc2MuY29ybmVsbC5lZHUpXG5cbnZhciBzZWVkID0gMTtcblxuLyoqXG4gKiByZXR1cm4gYSByYW5kb20gbnVtYmVyIGJhc2VkIG9uIGEgc2VlZFxuICogQHBhcmFtIHNlZWRcbiAqIEByZXR1cm5zIHtudW1iZXJ9XG4gKi9cbmZ1bmN0aW9uIGdldE5leHRWYWx1ZSgpIHtcbiAgICBzZWVkID0gKHNlZWQgKiA5MzAxICsgNDkyOTcpICUgMjMzMjgwO1xuICAgIHJldHVybiBzZWVkLygyMzMyODAuMCk7XG59XG5cbmZ1bmN0aW9uIHNldFNlZWQoX3NlZWRfKSB7XG4gICAgc2VlZCA9IF9zZWVkXztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgbmV4dFZhbHVlOiBnZXROZXh0VmFsdWUsXG4gICAgc2VlZDogc2V0U2VlZFxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zaG9ydGlkL2xpYi9yYW5kb20vcmFuZG9tLWZyb20tc2VlZC5qc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbnZhciByYW5kb21CeXRlID0gcmVxdWlyZSgnLi9yYW5kb20vcmFuZG9tLWJ5dGUnKTtcblxuZnVuY3Rpb24gZW5jb2RlKGxvb2t1cCwgbnVtYmVyKSB7XG4gICAgdmFyIGxvb3BDb3VudGVyID0gMDtcbiAgICB2YXIgZG9uZTtcblxuICAgIHZhciBzdHIgPSAnJztcblxuICAgIHdoaWxlICghZG9uZSkge1xuICAgICAgICBzdHIgPSBzdHIgKyBsb29rdXAoICggKG51bWJlciA+PiAoNCAqIGxvb3BDb3VudGVyKSkgJiAweDBmICkgfCByYW5kb21CeXRlKCkgKTtcbiAgICAgICAgZG9uZSA9IG51bWJlciA8IChNYXRoLnBvdygxNiwgbG9vcENvdW50ZXIgKyAxICkgKTtcbiAgICAgICAgbG9vcENvdW50ZXIrKztcbiAgICB9XG4gICAgcmV0dXJuIHN0cjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBlbmNvZGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc2hvcnRpZC9saWIvZW5jb2RlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbnZhciBjcnlwdG8gPSB0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JyAmJiAod2luZG93LmNyeXB0byB8fCB3aW5kb3cubXNDcnlwdG8pOyAvLyBJRSAxMSB1c2VzIHdpbmRvdy5tc0NyeXB0b1xuXG5mdW5jdGlvbiByYW5kb21CeXRlKCkge1xuICAgIGlmICghY3J5cHRvIHx8ICFjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyNTYpICYgMHgzMDtcbiAgICB9XG4gICAgdmFyIGRlc3QgPSBuZXcgVWludDhBcnJheSgxKTtcbiAgICBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKGRlc3QpO1xuICAgIHJldHVybiBkZXN0WzBdICYgMHgzMDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSByYW5kb21CeXRlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Nob3J0aWQvbGliL3JhbmRvbS9yYW5kb20tYnl0ZS1icm93c2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG52YXIgYWxwaGFiZXQgPSByZXF1aXJlKCcuL2FscGhhYmV0Jyk7XG5cbi8qKlxuICogRGVjb2RlIHRoZSBpZCB0byBnZXQgdGhlIHZlcnNpb24gYW5kIHdvcmtlclxuICogTWFpbmx5IGZvciBkZWJ1Z2dpbmcgYW5kIHRlc3RpbmcuXG4gKiBAcGFyYW0gaWQgLSB0aGUgc2hvcnRpZC1nZW5lcmF0ZWQgaWQuXG4gKi9cbmZ1bmN0aW9uIGRlY29kZShpZCkge1xuICAgIHZhciBjaGFyYWN0ZXJzID0gYWxwaGFiZXQuc2h1ZmZsZWQoKTtcbiAgICByZXR1cm4ge1xuICAgICAgICB2ZXJzaW9uOiBjaGFyYWN0ZXJzLmluZGV4T2YoaWQuc3Vic3RyKDAsIDEpKSAmIDB4MGYsXG4gICAgICAgIHdvcmtlcjogY2hhcmFjdGVycy5pbmRleE9mKGlkLnN1YnN0cigxLCAxKSkgJiAweDBmXG4gICAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkZWNvZGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc2hvcnRpZC9saWIvZGVjb2RlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbnZhciBlbmNvZGUgPSByZXF1aXJlKCcuL2VuY29kZScpO1xudmFyIGFscGhhYmV0ID0gcmVxdWlyZSgnLi9hbHBoYWJldCcpO1xuXG4vLyBJZ25vcmUgYWxsIG1pbGxpc2Vjb25kcyBiZWZvcmUgYSBjZXJ0YWluIHRpbWUgdG8gcmVkdWNlIHRoZSBzaXplIG9mIHRoZSBkYXRlIGVudHJvcHkgd2l0aG91dCBzYWNyaWZpY2luZyB1bmlxdWVuZXNzLlxuLy8gVGhpcyBudW1iZXIgc2hvdWxkIGJlIHVwZGF0ZWQgZXZlcnkgeWVhciBvciBzbyB0byBrZWVwIHRoZSBnZW5lcmF0ZWQgaWQgc2hvcnQuXG4vLyBUbyByZWdlbmVyYXRlIGBuZXcgRGF0ZSgpIC0gMGAgYW5kIGJ1bXAgdGhlIHZlcnNpb24uIEFsd2F5cyBidW1wIHRoZSB2ZXJzaW9uIVxudmFyIFJFRFVDRV9USU1FID0gMTQ1OTcwNzYwNjUxODtcblxuLy8gZG9uJ3QgY2hhbmdlIHVubGVzcyB3ZSBjaGFuZ2UgdGhlIGFsZ29zIG9yIFJFRFVDRV9USU1FXG4vLyBtdXN0IGJlIGFuIGludGVnZXIgYW5kIGxlc3MgdGhhbiAxNlxudmFyIHZlcnNpb24gPSA2O1xuXG4vLyBDb3VudGVyIGlzIHVzZWQgd2hlbiBzaG9ydGlkIGlzIGNhbGxlZCBtdWx0aXBsZSB0aW1lcyBpbiBvbmUgc2Vjb25kLlxudmFyIGNvdW50ZXI7XG5cbi8vIFJlbWVtYmVyIHRoZSBsYXN0IHRpbWUgc2hvcnRpZCB3YXMgY2FsbGVkIGluIGNhc2UgY291bnRlciBpcyBuZWVkZWQuXG52YXIgcHJldmlvdXNTZWNvbmRzO1xuXG4vKipcbiAqIEdlbmVyYXRlIHVuaXF1ZSBpZFxuICogUmV0dXJucyBzdHJpbmcgaWRcbiAqL1xuZnVuY3Rpb24gYnVpbGQoY2x1c3RlcldvcmtlcklkKSB7XG5cbiAgICB2YXIgc3RyID0gJyc7XG5cbiAgICB2YXIgc2Vjb25kcyA9IE1hdGguZmxvb3IoKERhdGUubm93KCkgLSBSRURVQ0VfVElNRSkgKiAwLjAwMSk7XG5cbiAgICBpZiAoc2Vjb25kcyA9PT0gcHJldmlvdXNTZWNvbmRzKSB7XG4gICAgICAgIGNvdW50ZXIrKztcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb3VudGVyID0gMDtcbiAgICAgICAgcHJldmlvdXNTZWNvbmRzID0gc2Vjb25kcztcbiAgICB9XG5cbiAgICBzdHIgPSBzdHIgKyBlbmNvZGUoYWxwaGFiZXQubG9va3VwLCB2ZXJzaW9uKTtcbiAgICBzdHIgPSBzdHIgKyBlbmNvZGUoYWxwaGFiZXQubG9va3VwLCBjbHVzdGVyV29ya2VySWQpO1xuICAgIGlmIChjb3VudGVyID4gMCkge1xuICAgICAgICBzdHIgPSBzdHIgKyBlbmNvZGUoYWxwaGFiZXQubG9va3VwLCBjb3VudGVyKTtcbiAgICB9XG4gICAgc3RyID0gc3RyICsgZW5jb2RlKGFscGhhYmV0Lmxvb2t1cCwgc2Vjb25kcyk7XG5cbiAgICByZXR1cm4gc3RyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJ1aWxkO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Nob3J0aWQvbGliL2J1aWxkLmpzXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG52YXIgYWxwaGFiZXQgPSByZXF1aXJlKCcuL2FscGhhYmV0Jyk7XG5cbmZ1bmN0aW9uIGlzU2hvcnRJZChpZCkge1xuICAgIGlmICghaWQgfHwgdHlwZW9mIGlkICE9PSAnc3RyaW5nJyB8fCBpZC5sZW5ndGggPCA2ICkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIGNoYXJhY3RlcnMgPSBhbHBoYWJldC5jaGFyYWN0ZXJzKCk7XG4gICAgdmFyIGxlbiA9IGlkLmxlbmd0aDtcbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgbGVuO2krKykge1xuICAgICAgICBpZiAoY2hhcmFjdGVycy5pbmRleE9mKGlkW2ldKSA9PT0gLTEpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc1Nob3J0SWQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc2hvcnRpZC9saWIvaXMtdmFsaWQuanNcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSAwO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Nob3J0aWQvbGliL3V0aWwvY2x1c3Rlci13b3JrZXItaWQtYnJvd3Nlci5qc1xuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcclxuICogQ29weXJpZ2h0IChjKSAgMjAxNyBDYWlwaSBMYWJzIC5cclxuICpcclxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuICpcclxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcbiAqXHJcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBVbHRyYSBzY2FsYWJsZSBzdGF0ZS1hd2FyZSBzdG9yZVxyXG4gKlxyXG4gKiBAdG9kbyA6IGxvdCBvZiBvcHRpbXMuLi5cclxuICovXHJcblxyXG52YXIgaXNTdHJpbmcgICAgID0gcmVxdWlyZSgnaXNzdHJpbmcnKVxyXG4gICAgLCBpc0FycmF5ICAgID0gcmVxdWlyZSgnaXNhcnJheScpXHJcbiAgICAsIGlzRnVuY3Rpb24gPSByZXF1aXJlKCdpc2Z1bmN0aW9uJylcclxuICAgICxcclxuICAgIENvbnRleHQgICAgICA9IHJlcXVpcmUoJy4vQ29udGV4dCcpLFxyXG4gICAgRXZlbnRFbWl0dGVyID0gcmVxdWlyZSgnZXZlbnRzJyksXHJcbiAgICBzaG9ydGlkICAgICAgPSByZXF1aXJlKCdzaG9ydGlkJyksXHJcbiAgICBvYmpQcm90byAgICAgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Yoe30pLFxyXG4gICAgb3BlbkNvbnRleHRzID0ge307XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RvcmUgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xyXG5cclxuICAgIHN0YXRpYyB1c2UgICAgICAgICAgICAgICAgID0gW107Ly8gb3ZlcnJpZGFibGUgbGlzdCBvZiBzb3VyY2Ugc3RvcmVzXHJcbiAgICBzdGF0aWMgZm9sbG93Oy8vIG92ZXJyaWRhYmxlIGxpc3Qgb2Ygc3RvcmUgdGhhdCB3aWxsIGFsbG93IHB1c2ggaWYgdXBkYXRlZFxyXG4gICAgc3RhdGljIHJlcXVpcmU7XHJcbiAgICBzdGF0aWMgc3RhdGljQ29udGV4dCAgICAgICA9IG5ldyBDb250ZXh0KHt9LCB7aWQgOiBcInN0YXRpY1wifSk7XHJcbiAgICBzdGF0aWMgaW5pdGlhbFN0YXRlICAgICAgICA9IHVuZGVmaW5lZDsvLyBkZWZhdWx0IHN0YXRlXHJcbiAgICBzdGF0aWMgZGVmYXVsdE1heExpc3RlbmVycyA9IDIwO1xyXG4gICAgc3RhdGljIGF1dG9raWxsICAgICAgICAgICAgPSBmYWxzZTsvLyBmYWxzZSBvciB0bSB3aXRob3V0IGZvbGxvd2Vyc1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogZ2V0IGEgQnVpbGRlci1rZXkgcGFpciBmb3IgU3RvcmU6Om1hcFxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcclxuICAgICAqIEByZXR1cm5zIHt7c3RvcmU6IFN0b3JlLCBuYW1lOiAqfX1cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGFzKCBuYW1lICkge1xyXG4gICAgICAgIHJldHVybiB7c3RvcmUgOiB0aGlzLCBuYW1lfTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE1hcCBhbGwgbmFtZWQgc3RvcmVzIGluIHtrZXlzfSB0byB0aGUge29iamVjdH0ncyBzdGF0ZVxyXG4gICAgICogSG9vayBjb21wb25lbnRXaWxsVW5tb3VudCAoZm9yIHJlYWN0IGNvbXApIG9yIGRlc3Ryb3kgdG8gdW5CaW5kIHRoZW0gYXV0b21hdGljYWxseVxyXG4gICAgICogQHN0YXRpY1xyXG4gICAgICogQHBhcmFtIG9iamVjdCB7UmVhY3QuQ29tcG9uZW50fFN0b3JlfC4uLn0gdGFyZ2V0IHN0YXRlIGF3YXJlIG9iamVjdFxyXG4gICAgICogQHBhcmFtIGtleXMge0FycmF5fSBFeCA6IFtcInNlc3Npb25cIiwgXCJvdGhlclN0YXRpY05hbWVkU3RvcmU6a2V5XCIsIHN0b3JlLmFzKCdhbm90aGVyS2V5JyldXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBtYXAoIGNvbXBvbmVudCwga2V5cywgY29udGV4dCwgb3JpZ2luLCBzZXRJbml0aWFsID0gZmFsc2UgKSB7XHJcbiAgICAgICAgdmFyIHRhcmdldFJldnMgICAgID0gY29tcG9uZW50Ll9yZXZzIHx8IHt9O1xyXG4gICAgICAgIC8vIHZhciB0YXJnZXRDb250ZXh0ICA9IGNvbXBvbmVudC5zdG9yZXMgfHwgKGNvbXBvbmVudC5zdG9yZXMgPSBuZXcgQ29udGV4dCh7fSkpO1xyXG4gICAgICAgIHZhciBpbml0aWFsT3V0cHV0cyA9IHt9O1xyXG4gICAgICAgIGtleXMgICAgICAgICAgICAgICA9IGlzQXJyYXkoa2V5cykgPyBbLi4ua2V5c10gOiBba2V5c107XHJcblxyXG5cclxuICAgICAgICBjb250ZXh0ID0gY29udGV4dCB8fCBTdG9yZS5zdGF0aWNDb250ZXh0O1xyXG5cclxuICAgICAgICAvLyBpZiAoIXRhcmdldENvbnRleHQuX19jb250ZXh0KVxyXG4gICAgICAgIC8vICAgICBkZWJ1Z2dlcjtcclxuXHJcbiAgICAgICAga2V5cyAgICAgICAgICAgPSBrZXlzLmZpbHRlcihcclxuICAgICAgICAgICAgLy8gQHRvZG8gOiB1c2UgcXVlcnkgcmVmc1xyXG4gICAgICAgICAgICAvLyAoc3RvcmUpKFxcLnN0b3JlKSooXFxbKFxcKnwocHJvcHMpXFx3KykrKVxcXSk/KFxcOmFsaWFzKVxyXG4gICAgICAgICAgICAoIGtleSApID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICggIWtleSApIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiTm90IGEgbWFwcGFibGUgc3RvcmUgaXRlbSAnXCIgKyBrZXkgKyBcIicgaW4gXCIgKyBvcmlnaW4gKyAnICEhJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbGV0IG5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgYWxpYXMsXHJcbiAgICAgICAgICAgICAgICAgICAgc3RvcmU7XHJcbiAgICAgICAgICAgICAgICBpZiAoIGtleS5zdG9yZSAmJiBrZXkubmFtZSApIHtcclxuICAgICAgICAgICAgICAgICAgICBhbGlhcyA9IG5hbWUgPSBrZXkubmFtZTtcclxuICAgICAgICAgICAgICAgICAgICBzdG9yZSA9IGtleS5zdG9yZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIGlzRnVuY3Rpb24oa2V5KSApIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lID0gYWxpYXMgPSBrZXkubmFtZSB8fCBrZXkuZGVmYXVsdE5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RvcmUgPSBrZXk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGtleSAgID0ga2V5Lm1hdGNoKC8oW1xcd19dKykoPzpcXDpcXFsoXFwqKVxcXSk/KD86XFw6KFxcKikpPy8pO1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWUgID0ga2V5WzBdO1xyXG4gICAgICAgICAgICAgICAgICAgIHN0b3JlID0gY29udGV4dC5fX2NvbnRleHRba2V5WzBdXTtcclxuICAgICAgICAgICAgICAgICAgICBhbGlhcyA9IGtleVsxXSA9PSAnKicgPyBudWxsIDoga2V5WzJdIHx8IGtleVswXTsvLyBhbGxvdyBiaW5kaW5nIHByb3BzICAoWypdKVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICggdGFyZ2V0UmV2c1tuYW1lXSApIHJldHVybiBmYWxzZTsvLyBpZ25vcmUgZGJsIHVzZXMgZm9yIG5vd1xyXG4gICAgICAgICAgICAgICAgaWYgKCAhc3RvcmUgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIk5vdCBhIG1hcHBhYmxlIHN0b3JlIGl0ZW0gJ1wiICsgbmFtZSArIFwiL1wiICsgYWxpYXMgKyBcIicgaW4gXCIgKyBvcmlnaW4gKyAnICEhJywgc3RvcmUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIGlzRnVuY3Rpb24oc3RvcmUpICkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW91bnRTdG9yZShuYW1lLCBjb250ZXh0KVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb250ZXh0Ll9fY29udGV4dFtuYW1lXS5iaW5kKGNvbXBvbmVudCwgYWxpYXMsIHNldEluaXRpYWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGlmICggY29udGV4dC5fX2NvbnRleHRba2V5WzBdXS5zdGF0ZSApIHsvLyBkbyBzeW5jIHB1c2ggYWZ0ZXIgY29uc3RydWN0b3JcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgY29udGV4dC5fX2NvbnRleHRba2V5WzBdXS5wdXNoKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzdG9yZS5iaW5kKGNvbXBvbmVudCwgYWxpYXMsIHNldEluaXRpYWwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0UmV2c1thbGlhc10gPSB0YXJnZXRSZXZzW2FsaWFzXSB8fCB0cnVlO1xyXG4gICAgICAgICAgICAgICAgLy8gIXRhcmdldENvbnRleHQuX19jb250ZXh0W2FsaWFzXSAmJiB0YXJnZXRDb250ZXh0LnJlZ2lzdGVyKHtbYWxpYXNdIDogY29udGV4dC5fX2NvbnRleHRbbmFtZV19KTtcclxuICAgICAgICAgICAgICAgIGlmICggY29udGV4dC5fX2NvbnRleHRbbmFtZV0uaGFzT3duUHJvcGVydHkoJ2RhdGFzJykgKVxyXG4gICAgICAgICAgICAgICAgICAgIGluaXRpYWxPdXRwdXRzW2FsaWFzXSA9IGNvbnRleHQuZGF0YXNbbmFtZV07XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdmFyIG1peGVkQ1dVbm1vdW50LFxyXG4gICAgICAgICAgICB1bk1vdW50S2V5ID0gY29tcG9uZW50LmlzUmVhY3RDb21wb25lbnQgPyBcImNvbXBvbmVudFdpbGxVbm1vdW50XCIgOiBcImRlc3Ryb3lcIjtcclxuXHJcbiAgICAgICAgaWYgKCBjb21wb25lbnQuaGFzT3duUHJvcGVydHkodW5Nb3VudEtleSkgKSB7XHJcbiAgICAgICAgICAgIG1peGVkQ1dVbm1vdW50ID0gY29tcG9uZW50W3VuTW91bnRLZXldO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29tcG9uZW50W3VuTW91bnRLZXldID0gZnVuY3Rpb24gKCkgey8vIHRvZG8gaG9wXHJcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzW3VuTW91bnRLZXldO1xyXG4gICAgICAgICAgICBpZiAoIG1peGVkQ1dVbm1vdW50IClcclxuICAgICAgICAgICAgICAgIHRoaXNbdW5Nb3VudEtleV0gPSBtaXhlZENXVW5tb3VudDtcclxuICAgICAgICAgICAga2V5cy5tYXAoXHJcbiAgICAgICAgICAgICAgICAoIGtleSApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpYXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICgga2V5LnN0b3JlICYmIGtleS5uYW1lICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlhcyA9IG5hbWUgPSBrZXkubmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmUgPSBrZXkuc3RvcmU7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICggaXNGdW5jdGlvbihrZXkpICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lID0gYWxpYXMgPSBrZXkubmFtZSB8fCBrZXkuZGVmYXVsdE5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlID0gY29udGV4dC5fX2NvbnRleHRbbmFtZV07XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5ICAgPSBrZXkuc3BsaXQoJzonKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZSAgPSBrZXlbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlID0gY29udGV4dC5fX2NvbnRleHRba2V5WzBdXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpYXMgPSBrZXlbMV0gfHwga2V5WzBdO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc3RvcmUgJiYgIWlzRnVuY3Rpb24oc3RvcmUpICYmIHN0b3JlLnVuQmluZChjb21wb25lbnQsIGFsaWFzKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpc1t1bk1vdW50S2V5XSAmJiB0aGlzW3VuTW91bnRLZXldLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gaW5pdGlhbE91dHB1dHM7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldENvbnRleHQoIGNvbnRleHRzICkge1xyXG4gICAgICAgIGxldCBza2V5ID0gaXNBcnJheShjb250ZXh0cykgPyBjb250ZXh0cy5zb3J0KCggYSwgYiApID0+IHtcclxuICAgICAgICAgICAgaWYgKCBhLmZpcnN0bmFtZSA8IGIuZmlyc3RuYW1lICkgcmV0dXJuIC0xO1xyXG4gICAgICAgICAgICBpZiAoIGEuZmlyc3RuYW1lID4gYi5maXJzdG5hbWUgKSByZXR1cm4gMTtcclxuICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgfSkuam9pbignOjonKSA6IGNvbnRleHRzO1xyXG4gICAgICAgIHJldHVybiBDb250ZXh0LmNvbnRleHRzW3NrZXldID0gQ29udGV4dC5jb250ZXh0c1tza2V5XSB8fCBuZXcgQ29udGV4dCh7fSwge2lkIDogc2tleX0pO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBtb3VudFN0b3JlKCBuYW1lLCBjb250ZXh0LCBzdG9yZSwgc3RhdGUsIGRhdGFzICkge1xyXG4gICAgICAgIGxldCBjdHgsIGNvbnRleHRNYXAgPSBjb250ZXh0Ll9fY29udGV4dDtcclxuICAgICAgICBjb250ZXh0TWFwW25hbWVdICAgID0gc3RvcmUgPSBzdG9yZSB8fCBjb250ZXh0TWFwW25hbWVdO1xyXG4gICAgICAgIGlmICggIXN0b3JlICkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiTm90IGEgbWFwcGFibGUgc3RvcmUgaXRlbSAnXCIgKyBuYW1lICsgJyAhIScsIHN0b3JlKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoIGlzRnVuY3Rpb24oc3RvcmUpICkge1xyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICBpZiAoIHN0b3JlICYmIChzdG9yZS5jb250ZXh0cyB8fCBzdG9yZS5jb250ZXh0KSApIHtcclxuICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuZ2V0Q29udGV4dChzdG9yZS5jb250ZXh0cyB8fCBbc3RvcmUuY29udGV4dF0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGN0eC5yZWdpc3Rlcih7W25hbWVdIDogY3R4Ll9fY29udGV4dFtuYW1lXSB8fCBzdG9yZX0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnRleHRNYXBbbmFtZV0gPSBjdHhbbmFtZV0gPSBuZXcgc3RvcmUoY29udGV4dCwge3N0YXRlLCBkYXRhc30pO1xyXG4gICAgICAgICAgICAgICAgY3R4Ll93YXRjaFN0b3JlKG5hbWUpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGN0eFtuYW1lXTtcclxuICAgICAgICAgICAgfSBlbHNlXHJcbiAgICAgICAgICAgICAgICBzdG9yZSA9IGNvbnRleHRNYXBbbmFtZV0gPSBuZXcgc3RvcmUoY29udGV4dCwge3N0YXRlLCBkYXRhc30pO1xyXG4gICAgICAgICAgICBjb250ZXh0TWFwW25hbWVdLnJlbGluayhuYW1lKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoIHN0YXRlICE9PSB1bmRlZmluZWQgJiYgZGF0YXMgPT09IHVuZGVmaW5lZCApXHJcbiAgICAgICAgICAgICAgICBzdG9yZS5zZXRTdGF0ZShzdGF0ZSk7XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKCBzdGF0ZSAhPT0gdW5kZWZpbmVkIClcclxuICAgICAgICAgICAgICAgIHN0b3JlLnN0YXRlID0gc3RhdGU7XHJcblxyXG4gICAgICAgICAgICBpZiAoIGRhdGFzICE9PSB1bmRlZmluZWQgKVxyXG4gICAgICAgICAgICAgICAgc3RvcmUucHVzaChkYXRhcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzdG9yZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbnN0cnVjdG9yLCB3aWxsIGJ1aWxkIGEgcmVzY29wZSBzdG9yZVxyXG4gICAgICpcclxuICAgICAqIChjb250ZXh0LCB7cmVxdWlyZSx1c2UscmVmaW5lLHN0YXRlLCBkYXRhc30pXHJcbiAgICAgKiAoY29udGV4dClcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gY29udGV4dCB7b2JqZWN0fSBjb250ZXh0IHdoZXJlIHRvIGZpbmQgdGhlIG90aGVyIHN0b3JlcyAoZGVmYXVsdCA6IHN0YXRpYyBzdGF0aWNDb250ZXh0IClcclxuICAgICAqIEBwYXJhbSBrZXlzIHtBcnJheX0gKHBhc3NlZCB0byBTdG9yZTo6bWFwKSBFeCA6IFtcInNlc3Npb25cIiwgXCJvdGhlck5hbWVkU3RvcmU6a2V5XCIsIG90aGVyU3RvcmUuYXMoXCJvdGhlcktleVwiKV1cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB2YXIgYXJneiAgICAgICAgID0gWy4uLmFyZ3VtZW50c10sXHJcbiAgICAgICAgICAgIF9zdGF0aWMgICAgICA9IHRoaXMuY29uc3RydWN0b3IsXHJcbiAgICAgICAgICAgIGNvbnRleHQgICAgICA9ICFpc0FycmF5KGFyZ3pbMF0pICYmICFpc1N0cmluZyhhcmd6WzBdKSA/IGFyZ3ouc2hpZnQoKSA6IF9zdGF0aWMuc3RhdGljQ29udGV4dCxcclxuICAgICAgICAgICAgY2ZnICAgICAgICAgID0gYXJnelswXSAmJiAhaXNBcnJheShhcmd6WzBdKSAmJiAhaXNTdHJpbmcoYXJnelswXSkgPyBhcmd6LnNoaWZ0KCkgOiB7fSxcclxuICAgICAgICAgICAgbmFtZSAgICAgICAgID0gaXNTdHJpbmcoYXJnelswXSkgPyBhcmd6WzBdIDogY2ZnLm5hbWUgfHwgX3N0YXRpYy5uYW1lLFxyXG4gICAgICAgICAgICB3YXRjaHMgICAgICAgPSBpc0FycmF5KGFyZ3pbMF0pID8gYXJnei5zaGlmdCgpIDogY2ZnLnVzZSB8fCBbXSwvLyB3YXRjaHMgbmVlZCB0byBiZSBkZWZpbmVkIGFmdGVyIGFsbCB0aGUgc3RvcmUgYXJlIHJlZ2lzdGVyZWQgOiBzbyB3ZSBjYW4ndCBkZWFsIHdpdGggYW55IFwic3RhdGljIHVzZVwiIGF1dG9tYXRpY2x5XHJcbiAgICAgICAgICAgIHJlZmluZSAgICAgICA9IGlzRnVuY3Rpb24oYXJnelswXSkgPyBhcmd6LnNoaWZ0KCkgOiBjZmcucmVmaW5lIHx8IG51bGwsXHJcbiAgICAgICAgICAgIGluaXRpYWxTdGF0ZSA9IF9zdGF0aWMuaW5pdGlhbFN0YXRlO1xyXG5cclxuICAgICAgICB0aGlzLl91aWQgICAgICAgICAgPSBjZmcuX3VpZCB8fCBzaG9ydGlkLmdlbmVyYXRlKCk7XHJcbiAgICAgICAgdGhpcy5fbWF4TGlzdGVuZXJzID0gY2ZnLmRlZmF1bHRNYXhMaXN0ZW5lcnMgfHwgU3RvcmUuZGVmYXVsdE1heExpc3RlbmVycztcclxuICAgICAgICB0aGlzLmxvY2tzICAgICAgICAgPSAwO1xyXG4gICAgICAgIHRoaXMuX29uU3RhYmlsaXplICA9IFtdO1xyXG5cclxuICAgICAgICBpZiAoIGlzU3RyaW5nKGFyZ3pbMF0pICkge1xyXG4gICAgICAgICAgICBpZiAoIGNvbnRleHQuX19jb250ZXh0W25hbWVdIClcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIlJlU2NvcGU6IE92ZXJ3cml0aW5nIGFuIGV4aXN0aW5nIHN0YXRpYyBuYW1lZCBzdG9yZSAoICVzICkgISFcIiwgbmFtZSk7XHJcbiAgICAgICAgICAgIGNvbnRleHQuX19jb250ZXh0W25hbWVdID0gdGhpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICggY2ZnICYmIGNmZy5vbiApIHtcclxuICAgICAgICAgICAgdGhpcy5vbihjZmcub24pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyB0aGlzLnN0YXRlICAgICAgPSB0aGlzLnN0YXRlIHx8IHt9O1xyXG5cclxuICAgICAgICB0aGlzLl91c2UgPSB3YXRjaHM7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuXHJcbiAgICAgICAgaWYgKCBjb250ZXh0LnN0b3JlcyApIHtcclxuICAgICAgICAgICAgdGhpcy5jb250ZXh0T2JqID0gY29udGV4dDtcclxuICAgICAgICAgICAgdGhpcy5jb250ZXh0ICAgID0gY29udGV4dC5zdG9yZXM7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jb250ZXh0T2JqID0gbmV3IENvbnRleHQoY29udGV4dCk7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGV4dCAgICA9IGNvbnRleHQuc3RvcmVzO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIHRoaXMuX3N0YWJsZSAgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuX3JldiAgICAgPSAxO1xyXG4gICAgICAgIHRoaXMuX3JldnMgICAgPSB7fTtcclxuICAgICAgICB0aGlzLnN0b3JlcyAgID0ge307XHJcbiAgICAgICAgdGhpcy5fcmVxdWlyZSA9IFtdO1xyXG5cclxuICAgICAgICBpZiAoIF9zdGF0aWMucmVxdWlyZSApXHJcbiAgICAgICAgICAgIHRoaXMuX3JlcXVpcmUucHVzaCguLi5fc3RhdGljLnJlcXVpcmUpO1xyXG4gICAgICAgIGlmICggY2ZnLnJlcXVpcmUgKVxyXG4gICAgICAgICAgICB0aGlzLl9yZXF1aXJlLnB1c2goLi4uY2ZnLnJlcXVpcmUpO1xyXG5cclxuICAgICAgICB0aGlzLl9mb2xsb3dlcnMgPSBbXTtcclxuXHJcbiAgICAgICAgaWYgKCBjZmcuaGFzT3duUHJvcGVydHkoXCJkYXRhc1wiKSAmJiBjZmcuZGF0YXMgIT09IHVuZGVmaW5lZCApXHJcbiAgICAgICAgICAgIHRoaXMuZGF0YXMgPSBjZmcuZGF0YXM7XHJcbiAgICAgICAgaWYgKCBjZmcuaGFzT3duUHJvcGVydHkoXCJzdGF0ZVwiKSAmJiBjZmcuc3RhdGUgIT09IHVuZGVmaW5lZCApXHJcbiAgICAgICAgICAgIGluaXRpYWxTdGF0ZSA9IGNmZy5zdGF0ZTtcclxuXHJcbiAgICAgICAgaWYgKCByZWZpbmUgKVxyXG4gICAgICAgICAgICB0aGlzLnJlZmluZSA9IHJlZmluZTtcclxuXHJcbiAgICAgICAgaWYgKCAhIXRoaXMuX3VzZSAmJiB0aGlzLl91c2UubGVuZ3RoICkgey8vIGlmIHRoZXJlIGluaXRpYWwgd2F0Y2hzIGFueXdheVxyXG4gICAgICAgICAgICB0aGlzLnB1bGwodGhpcy5fdXNlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICggaW5pdGlhbFN0YXRlICkgey8vIHN5bmMgcmVmaW5lXHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSB7Li4uaW5pdGlhbFN0YXRlfTtcclxuICAgICAgICAgICAgaWYgKCB0aGlzLmlzQ29tcGxldGUoKSAmJiB0aGlzLmRhdGFzID09PSB1bmRlZmluZWQgKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhcyA9IHRoaXMucmVmaW5lKHRoaXMuZGF0YXMsIHRoaXMuc3RhdGUsIHRoaXMuc3RhdGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9zdGFibGUgPSB0aGlzLmRhdGFzICE9PSB1bmRlZmluZWQ7Ly8gc3RhYmxlIGlmIGl0IGhhdmUgaW5pdGlhbCByZXN1bHQgZGF0YXNcclxuICAgICAgICAhdGhpcy5fc3RhYmxlICYmIHRoaXMuZW1pdCgndW5zdGFibGUnLCB0aGlzLnN0YXRlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE92ZXJyaWRhYmxlIG1ldGhvZCB0byBrbm93IGlmIGEgc3RhdGUgY2hhbmdlIHNob3VsZCBiZSBwcm9wYWcgdG8gdGhlIGxpc3RlbmluZyBzdG9yZXMgJiBjb21wb25lbnRzXHJcbiAgICAgKiBJZiBzdGF0aWMgZm9sbG93IGlzIGRlZmluZWQsIHNob3VsZFByb3BhZyB3aWxsIHJldHVybiB0cnVlIGlmIGFueSBvZiB0aGUgXCJmb2xsb3dcIiBrZXlzIHdhcyB1cGRhdGVkXHJcbiAgICAgKiBJZiBub3QgaXQgd2lsbCBhbHdheXMgcmV0dXJuIHRydWVcclxuICAgICAqL1xyXG4gICAgc2hvdWxkUHJvcGFnKCBuRGF0YXMgKSB7XHJcbiAgICAgICAgdmFyIF9zdGF0aWMgPSB0aGlzLmNvbnN0cnVjdG9yLCByLFxyXG4gICAgICAgICAgICBjRGF0YXMgID0gdGhpcy5kYXRhcztcclxuXHJcbiAgICAgICAgLy8gaWYgKCAhY1N0YXRlIClcclxuICAgICAgICAvLyAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgaWYgKCAhY0RhdGFzICYmICghX3N0YXRpYy5mb2xsb3cgfHwgIV9zdGF0aWMuZm9sbG93Lmxlbmd0aCB8fFxyXG4gICAgICAgICAgICAgICAgX3N0YXRpYy5mb2xsb3cgJiYgX3N0YXRpYy5mb2xsb3cucmVkdWNlKCggciwgaSApID0+IChyIHx8IG5EYXRhcyAmJiBuRGF0YXNbaV0pLCBmYWxzZSkpIClcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgICAgIGlmICggaXNBcnJheShfc3RhdGljLmZvbGxvdykgKVxyXG4gICAgICAgICAgICBfc3RhdGljLmZvbGxvdy5mb3JFYWNoKFxyXG4gICAgICAgICAgICAgICAgKCBrZXkgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgciA9IHIgfHwgKG5EYXRhcyA/IGNEYXRhc1trZXldICE9PSBuRGF0YXNba2V5XSA6IGNEYXRhcyAmJiBjRGF0YXNba2V5XSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICBlbHNlIGlmICggX3N0YXRpYy5mb2xsb3cgPT09ICdzdHJpY3QnIClcclxuICAgICAgICAgICAgciA9IG5EYXRhcyA9PT0gY0RhdGFzO1xyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjRGF0YXMgJiYgT2JqZWN0LmtleXMoY0RhdGFzKS5mb3JFYWNoKFxyXG4gICAgICAgICAgICAgICAgKCBrZXkgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgciA9IHIgfHwgKG5EYXRhcyA/IGNEYXRhc1trZXldICE9PSBuRGF0YXNba2V5XSA6IGNEYXRhcyAmJiBjRGF0YXNba2V5XSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgbkRhdGFzICYmIE9iamVjdC5rZXlzKG5EYXRhcykuZm9yRWFjaChcclxuICAgICAgICAgICAgICAgICgga2V5ICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHIgPSByIHx8IChuRGF0YXMgPyBjRGF0YXNba2V5XSAhPT0gbkRhdGFzW2tleV0gOiBjRGF0YXMgJiYgY0RhdGFzW2tleV0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gISFyO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogT3ZlcnJpZGFibGUgcmVmaW5lciAvIHJlbWFwcGVyXHJcbiAgICAgKiBJZiBzdGF0ZSBvciBsYXN0UHVibGljU3RhdGUgYXJlIHNpbXBsZSBoYXNoIG1hcHMgcmVmaW5lIHdpbGwgcmV0dXJuIHsuLi5kYXRhcywgLi4uc3RhdGV9XHJcbiAgICAgKiBpZiBub3QgaXQgd2lsbCByZXR1cm4gdGhlIGxhc3QgcHJpdmF0ZSBzdGF0ZVxyXG4gICAgICogQHBhcmFtIGRhdGFzXHJcbiAgICAgKiBAcGFyYW0gc3RhdGVcclxuICAgICAqIEByZXR1cm5zIHsqfVxyXG4gICAgICovXHJcbiAgICByZWZpbmUoIGRhdGFzLCBzdGF0ZSwgY2hhbmdlcyApIHtcclxuICAgICAgICBzdGF0ZSA9IHN0YXRlIHx8IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgICAgIGlmICggIWRhdGFzIHx8IGRhdGFzLl9fcHJvdG9fXyAhPT0gb2JqUHJvdG8gfHwgc3RhdGUuX19wcm90b19fICE9PSBvYmpQcm90byApXHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uZGF0YXMsIC4uLnN0YXRlfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVib3VuY2UgdGhpcyBzdG9yZSBwcm9wYWdhdGlvbiAoICYgcmVkdWNpbmcgKVxyXG4gICAgICogQHBhcmFtIGNiXHJcbiAgICAgKi9cclxuICAgIHN0YWJpbGl6ZSggY2IgKSB7XHJcbiAgICAgICAgdmFyIG1lID0gdGhpcztcclxuICAgICAgICBjYiAmJiBtZS5vbmNlKCdzdGFibGUnLCBjYik7XHJcbiAgICAgICAgdGhpcy5fc3RhYmxlICYmIHRoaXMuZW1pdCgndW5zdGFibGUnLCB0aGlzLnN0YXRlLCB0aGlzLmRhdGFzKTtcclxuXHJcbiAgICAgICAgbWUuX3N0YWJsZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICBpZiAoIHRoaXMuX3N0YWJpbGl6ZXIgKVxyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5fc3RhYmlsaXplcik7XHJcblxyXG4gICAgICAgIHRoaXMuX3N0YWJpbGl6ZXIgPSBzZXRUaW1lb3V0KFxyXG4gICAgICAgICAgICB0aGlzLnB1c2guYmluZChcclxuICAgICAgICAgICAgICAgIHRoaXMsXHJcbiAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgKCkgPT4gey8vQHRvZG9cclxuICAgICAgICAgICAgICAgICAgICAvLyBtZS5fc3RhYmxlICAgICAgID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zdGFiaWxpemVyID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnJlbGVhc2UoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZGlzcGF0Y2goIGV2ZW50ICkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFB1bGwgc3RvcmVzIGluIHRoZSBwcml2YXRlIHN0YXRlXHJcbiAgICAgKiBAcGFyYW0gc3RvcmVzICB7QXJyYXl9IChwYXNzZWQgdG8gU3RvcmU6Om1hcCkgRXggOiBbXCJzZXNzaW9uXCIsIFwib3RoZXJOYW1lZFN0b3JlOmtleVwiLCBvdGhlclN0b3JlLmFzKFwib3RoZXJLZXlcIildXHJcbiAgICAgKi9cclxuICAgIHB1bGwoIHN0b3JlcywgZG9XYWl0LCBvcmlnaW4gKSB7XHJcbiAgICAgICAgbGV0IGluaXRpYWxPdXRwdXRzID0gU3RvcmUubWFwKHRoaXMsIHN0b3JlcywgdGhpcy5jb250ZXh0T2JqLCBvcmlnaW4sIHRydWUpO1xyXG4gICAgICAgIGlmICggZG9XYWl0ICkge1xyXG4gICAgICAgICAgICB0aGlzLndhaXQoKTtcclxuICAgICAgICAgICAgc3RvcmVzLmZvckVhY2goKCBzICkgPT4gdGhpcy5jb250ZXh0W3NdICYmIHRoaXMud2FpdCh0aGlzLmNvbnRleHRbc10pKTtcclxuICAgICAgICAgICAgdGhpcy5yZWxlYXNlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBpbml0aWFsT3V0cHV0cztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFwcGx5IHJlZmluZS9yZW1hcCBvbiB0aGUgcHJpdmF0ZSBzdGF0ZSAmIHB1c2ggdGhlIHJlc3VsdGluZyBcInB1YmxpY1wiIHN0YXRlIHRvIGZvbGxvd2Vyc1xyXG4gICAgICogQHBhcmFtIGNiXHJcbiAgICAgKi9cclxuICAgIHB1c2goIGRhdGFzLCBmb3JjZSwgY2IgKSB7XHJcbiAgICAgICAgY2IgICAgICAgICAgICA9IGZvcmNlID09PSB0cnVlID8gY2IgOiBmb3JjZTtcclxuICAgICAgICBmb3JjZSAgICAgICAgID0gZm9yY2UgPT09IHRydWU7XHJcbiAgICAgICAgdmFyIGkgICAgICAgICA9IDAsXHJcbiAgICAgICAgICAgIG1lICAgICAgICA9IHRoaXMsXHJcbiAgICAgICAgICAgIG5leHRTdGF0ZSA9ICFkYXRhcyAmJiB7Li4udGhpcy5zdGF0ZSwgLi4udGhpcy5fY2hhbmdlc1NXfSB8fCB0aGlzLnN0YXRlLFxyXG4gICAgICAgICAgICBuZXh0RGF0YXMgPSBkYXRhcyB8fFxyXG4gICAgICAgICAgICAgICAgKHRoaXMuaXNDb21wbGV0ZShuZXh0U3RhdGUpID8gdGhpcy5yZWZpbmUodGhpcy5kYXRhcywgbmV4dFN0YXRlLCB0aGlzLl9jaGFuZ2VzU1cpIDogdGhpcy5kYXRhcyk7XHJcblxyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0gbmV4dFN0YXRlO1xyXG4gICAgICAgIGlmICggIWZvcmNlICYmXHJcbiAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgICghdGhpcy5kYXRhcyAmJiB0aGlzLmRhdGFzID09PSBuZXh0RGF0YXMpIHx8ICF0aGlzLnNob3VsZFByb3BhZyhuZXh0RGF0YXMpXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgY2IgJiYgY2IoKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5kYXRhcyA9IG5leHREYXRhcztcclxuICAgICAgICB0aGlzLmxvY2tzKys7XHJcbiAgICAgICAgdGhpcy5yZWxlYXNlKGNiKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBVcGRhdGUgdGhlIGN1cnJlbnQgcHJpdmF0ZSBzdGF0ZSAmIHB1c2ggaXQgb25jZSB0aGUgc3RvcmUgaXMgc3RhYmxlXHJcbiAgICAgKiBAcGFyYW0gcFN0YXRlXHJcbiAgICAgKiBAcGFyYW0gY2JcclxuICAgICAqL1xyXG4gICAgc2V0U3RhdGUoIHBTdGF0ZSwgY2IsIHN5bmMgKSB7XHJcbiAgICAgICAgdmFyIGkgICAgICAgPSAwLCBjaGFuZ2UsXHJcbiAgICAgICAgICAgIGNoYW5nZXMgPSB0aGlzLl9jaGFuZ2VzU1cgPSB0aGlzLl9jaGFuZ2VzU1cgfHwge307XHJcbiAgICAgICAgZm9yICggdmFyIGsgaW4gcFN0YXRlIClcclxuICAgICAgICAgICAgaWYgKCAhdGhpcy5zdGF0ZSB8fCBwU3RhdGUuaGFzT3duUHJvcGVydHkoaylcclxuICAgICAgICAgICAgICAgICYmIChcclxuICAgICAgICAgICAgICAgICAgICBwU3RhdGVba10gIT0gdGhpcy5zdGF0ZVtrXVxyXG4gICAgICAgICAgICAgICAgICAgIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgKHRoaXMuc3RhdGVba10gJiYgcFN0YXRlW2tdICYmIChwU3RhdGVba10uX3JldiAhPSB0aGlzLl9yZXZzW2tdKSkvLyByZXYvaGFzaCB1cGRhdGVcclxuICAgICAgICAgICAgICAgICkgKSB7XHJcbiAgICAgICAgICAgICAgICBjaGFuZ2UgICAgICAgID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3JldnNba10gPSBwU3RhdGVba10gJiYgcFN0YXRlW2tdLl9yZXYgfHwgdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGNoYW5nZXNba10gICAgPSBwU3RhdGVba107XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCBzeW5jICkge1xyXG4gICAgICAgICAgICB0aGlzLnB1c2goKTtcclxuICAgICAgICAgICAgY2IgJiYgY2IoKTtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKCBjaGFuZ2UgKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YWJpbGl6ZShjYik7XHJcbiAgICAgICAgICAgIH0gZWxzZSBjYiAmJiBjYigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFVwZGF0ZSB0aGUgY3VycmVudCBwcml2YXRlIHN0YXRlICYgcHVzaCBpdCBvbmNlIHRoZSBzdG9yZSBpcyBzdGFibGVcclxuICAgICAqIEBwYXJhbSBwU3RhdGVcclxuICAgICAqIEBwYXJhbSBjYlxyXG4gICAgICovXHJcbiAgICBzZXRTdGF0ZVN5bmMoIHBTdGF0ZSApIHtcclxuICAgICAgICB2YXIgaSAgICAgICA9IDAsIGNoYW5nZSxcclxuICAgICAgICAgICAgY2hhbmdlcyA9IHRoaXMuX2NoYW5nZXNTVyA9IHRoaXMuX2NoYW5nZXNTVyB8fCB7fTtcclxuICAgICAgICBmb3IgKCB2YXIgayBpbiBwU3RhdGUgKVxyXG4gICAgICAgICAgICBpZiAoICF0aGlzLnN0YXRlIHx8IHBTdGF0ZS5oYXNPd25Qcm9wZXJ0eShrKVxyXG4gICAgICAgICAgICAgICAgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIHBTdGF0ZVtrXSAhPSB0aGlzLnN0YXRlW2tdXHJcbiAgICAgICAgICAgICAgICAgICAgfHxcclxuICAgICAgICAgICAgICAgICAgICAodGhpcy5zdGF0ZVtrXSAmJiBwU3RhdGVba10gJiYgKHBTdGF0ZVtrXS5fcmV2ICE9IHRoaXMuX3JldnNba10pKS8vIHJldi9oYXNoIHVwZGF0ZVxyXG4gICAgICAgICAgICAgICAgKSApIHtcclxuICAgICAgICAgICAgICAgIGNoYW5nZSAgICAgICAgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcmV2c1trXSA9IHBTdGF0ZVtrXSAmJiBwU3RhdGVba10uX3JldiB8fCB0cnVlO1xyXG4gICAgICAgICAgICAgICAgY2hhbmdlc1trXSAgICA9IHBTdGF0ZVtrXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucHVzaCgpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVwbGFjZSB0aGUgY3VycmVudCBwcml2YXRlIHN0YXRlICYgcHVzaCBpdCBvbmNlIHRoZSBzdG9yZSBpcyBzdGFibGVcclxuICAgICAqIEBwYXJhbSBwU3RhdGVcclxuICAgICAqIEBwYXJhbSBjYlxyXG4gICAgICovXHJcbiAgICByZXBsYWNlU3RhdGUoIHBTdGF0ZSwgY2IgKSB7XHJcbiAgICAgICAgdmFyIGkgICAgICA9IDAsIG1lID0gdGhpcztcclxuICAgICAgICB0aGlzLnN0YXRlID0gcFN0YXRlO1xyXG5cclxuICAgICAgICB0aGlzLnN0YWJpbGl6ZShjYik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBnZXQgYSBzdG9yZS1rZXkgcGFpciBmb3IgU3RvcmU6Om1hcFxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcclxuICAgICAqIEByZXR1cm5zIHt7c3RvcmU6IFN0b3JlLCBuYW1lOiAqfX1cclxuICAgICAqL1xyXG4gICAgYXMoIG5hbWUgKSB7XHJcbiAgICAgICAgcmV0dXJuIHtzdG9yZSA6IHRoaXMsIG5hbWV9O1xyXG4gICAgfVxyXG5cclxuICAgIG9uKCBsaXN0cyApIHtcclxuICAgICAgICBpZiAoICFpc1N0cmluZyhsaXN0cykgJiYgbGlzdHMgKVxyXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhsaXN0cykuZm9yRWFjaChrID0+IHN1cGVyLm9uKGssIGxpc3RzW2tdKSk7XHJcbiAgICAgICAgZWxzZSBzdXBlci5vbiguLi5hcmd1bWVudHMpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUxpc3RlbmVyKCBsaXN0cyApIHtcclxuICAgICAgICBpZiAoICFpc1N0cmluZyhsaXN0cykgJiYgbGlzdHMgKVxyXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhsaXN0cykuZm9yRWFjaChrID0+IHN1cGVyLnJlbW92ZUxpc3RlbmVyKGssIGxpc3RzW2tdKSk7XHJcbiAgICAgICAgZWxzZSBzdXBlci5yZW1vdmVMaXN0ZW5lciguLi5hcmd1bWVudHMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogcmVsaW5rIGJpbmRpbmdzICYgcmVxdWlyZXNcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXHJcbiAgICAgKiBAcmV0dXJucyB7e3N0b3JlOiBTdG9yZSwgbmFtZTogKn19XHJcbiAgICAgKi9cclxuICAgIHJlbGluayggZnJvbSApIHtcclxuICAgICAgICBsZXQgY29udGV4dCA9IHRoaXMuY29udGV4dE9iaixcclxuICAgICAgICAgICAgX3N0YXRpYyA9IHRoaXMuY29uc3RydWN0b3I7XHJcbiAgICAgICAgaWYgKCBfc3RhdGljLnVzZSApIHtcclxuICAgICAgICAgICAgLy90b2RvIHVubGlua1xyXG4gICAgICAgICAgICB0aGlzLnB1bGwoX3N0YXRpYy51c2UsIGZhbHNlLCBmcm9tKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICggdGhpcy5fcmVxdWlyZSApIHtcclxuICAgICAgICAgICAgdGhpcy5fcmVxdWlyZS5mb3JFYWNoKFxyXG4gICAgICAgICAgICAgICAgc3RvcmUgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2FpdChjb250ZXh0Ll9fY29udGV4dFtzdG9yZV0pXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogaXMgY29tcGxldGUgKGFsbCByZXF1aWVyZWQga2V5cyBhcmUgaGVyZSlcclxuICAgICAqIEByZXR1cm5zIGJvb2xcclxuICAgICAqL1xyXG4gICAgaXNDb21wbGV0ZSggc3RhdGUgPSB0aGlzLnN0YXRlICkge1xyXG4gICAgICAgIHZhciBfc3RhdGljID0gdGhpcy5jb25zdHJ1Y3RvcjtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAhdGhpcy5fcmVxdWlyZVxyXG4gICAgICAgICAgICB8fCAhdGhpcy5fcmVxdWlyZS5sZW5ndGhcclxuICAgICAgICAgICAgfHwgc3RhdGUgJiYgdGhpcy5fcmVxdWlyZS5yZWR1Y2UoXHJcbiAgICAgICAgICAgICAgICAoIHIsIGtleSApID0+IChyICYmIHN0YXRlW2tleV0pLFxyXG4gICAgICAgICAgICAgICAgdHJ1ZVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGlzIHN0YWJsZVxyXG4gICAgICogQHJldHVybnMgYm9vbFxyXG4gICAgICovXHJcbiAgICBpc1N0YWJsZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc3RhYmxlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVW4gYmluZCB0aGlzIHN0b3JlIG9mZiB0aGUgZ2l2ZW4gY29tcG9uZW50LWtleVxyXG4gICAgICogQHBhcmFtIG9ialxyXG4gICAgICogQHBhcmFtIGtleVxyXG4gICAgICogQHJldHVybnMge0FycmF5LjwqPn1cclxuICAgICAqL1xyXG4gICAgdW5CaW5kKCBvYmosIGtleSApIHtcclxuICAgICAgICB2YXIgZm9sbG93ZXJzID0gdGhpcy5fZm9sbG93ZXJzLFxyXG4gICAgICAgICAgICBpICAgICAgICAgPSBmb2xsb3dlcnMgJiYgZm9sbG93ZXJzLmxlbmd0aDtcclxuICAgICAgICB3aGlsZSAoZm9sbG93ZXJzICYmIGktLSlcclxuICAgICAgICAgICAgaWYgKCBmb2xsb3dlcnNbaV1bMF0gPT0gb2JqICYmIGZvbGxvd2Vyc1tpXVsxXSA9PSBrZXkgKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZvbGxvd2Vycy5zcGxpY2UoaSwgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBCaW5kIHRoaXMgc3RvcmUgY2hhbmdlcyB0byB0aGUgZ2l2ZW4gY29tcG9uZW50LWtleVxyXG4gICAgICogQHBhcmFtIG9iaiB7UmVhY3QuQ29tcG9uZW50fFN0b3JlfGZ1bmN0aW9uKVxyXG4gICAgICogQHBhcmFtIGtleSB7c3RyaW5nfSBvcHRpb25hbCBrZXkgd2hlcmUgdG8gbWFwIHRoZSBwdWJsaWMgc3RhdGVcclxuICAgICAqL1xyXG4gICAgYmluZCggb2JqLCBrZXksIHNldEluaXRpYWwgPSB0cnVlICkge1xyXG4gICAgICAgIHRoaXMuX2ZvbGxvd2Vycy5wdXNoKFtvYmosIGtleV0pO1xyXG4gICAgICAgIGlmICggc2V0SW5pdGlhbCAmJiB0aGlzLmRhdGFzICYmIHRoaXMuX3N0YWJsZSApIHtcclxuICAgICAgICAgICAgaWYgKCB0eXBlb2Ygb2JqICE9IFwiZnVuY3Rpb25cIiApIHtcclxuICAgICAgICAgICAgICAgIGlmICgga2V5ICkgb2JqLnNldFN0YXRlKHtba2V5XSA6IHRoaXMuZGF0YXN9KTtcclxuICAgICAgICAgICAgICAgIGVsc2Ugb2JqLnNldFN0YXRlKHRoaXMuZGF0YXMpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgb2JqKHRoaXMuZGF0YXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogb25jZSgnc3RhYmxlJywgY2IpXHJcbiAgICAgKiBAcGFyYW0gb2JqIHtSZWFjdC5Db21wb25lbnR8U3RvcmV8ZnVuY3Rpb24pXHJcbiAgICAgKiBAcGFyYW0ga2V5IHtzdHJpbmd9IG9wdGlvbmFsIGtleSB3aGVyZSB0byBtYXAgdGhlIHB1YmxpYyBzdGF0ZVxyXG4gICAgICovXHJcbiAgICB0aGVuKCBjYiApIHtcclxuICAgICAgICBpZiAoIHRoaXMuX3N0YWJsZSApXHJcbiAgICAgICAgICAgIHJldHVybiBjYihudWxsLCB0aGlzLmRhdGFzKTtcclxuICAgICAgICB0aGlzLm9uY2UoJ3N0YWJsZScsIGUgPT4gY2IobnVsbCwgdGhpcy5kYXRhcykpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWRkIGEgbG9jayBzbyB0aGUgc3RvcmUgd2lsbCBub3QgcHJvcGFnIGl0IHN0YXRlIHVudGlsbCByZWxlYXNlKCkgaXMgY2FsbFxyXG4gICAgICogQHBhcmFtIHByZXZpb3VzIHtTdG9yZXxudW1iZXJ8QXJyYXl9IEBvcHRpb25hbCB3ZiB0byB3YWl0LCByZWxlYXNlcyB0byB3YWl0IG9yIGFycmF5IG9mIHN0dWZmIHRvIHdhaXRcclxuICAgICAqIEByZXR1cm5zIHtUYXNrRmxvd31cclxuICAgICAqL1xyXG4gICAgd2FpdCggcHJldmlvdXMgKSB7XHJcbiAgICAgICAgaWYgKCB0eXBlb2YgcHJldmlvdXMgPT0gXCJudW1iZXJcIiApXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxvY2tzICs9IHByZXZpb3VzO1xyXG4gICAgICAgIGlmICggaXNBcnJheShwcmV2aW91cykgKVxyXG4gICAgICAgICAgICByZXR1cm4gcHJldmlvdXMubWFwKHRoaXMud2FpdC5iaW5kKHRoaXMpKTtcclxuXHJcbiAgICAgICAgdGhpcy5fc3RhYmxlICYmIHRoaXMuZW1pdCgndW5zdGFibGUnLCB0aGlzLnN0YXRlLCB0aGlzLmRhdGFzKTtcclxuICAgICAgICB0aGlzLl9zdGFibGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmxvY2tzKys7XHJcbiAgICAgICAgaWYgKCBwcmV2aW91cyAmJiBpc0Z1bmN0aW9uKHByZXZpb3VzLnRoZW4pICkge1xyXG4gICAgICAgICAgICBwcmV2aW91cy50aGVuKHRoaXMucmVsZWFzZS5iaW5kKHRoaXMsIG51bGwpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWNyZWFzZSBsb2NrcyBmb3IgdGhpcyBzdG9yZSwgaWYgaXQgcmVhY2ggMCAmIGl0IGhhdmUgYSBwdWJsaWMgc3RhdGUsXHJcbiAgICAgKiBpdCB3aWxsIGJlIHByb3BhZ2F0ZWQgdG8gdGhlIGZvbGxvd2VycyxcclxuICAgICAqIHRoZW4sIGFsbCBzdHVmZiBwYXNzZWQgdG8gXCJ0aGVuXCIgY2FsbCBiYWNrIHdpbGwgYmUgZXhlYyAvIHJlbGVhc2VkXHJcbiAgICAgKiBAcGFyYW0gZGVzeW5jXHJcbiAgICAgKiBAcmV0dXJucyB7Kn1cclxuICAgICAqL1xyXG4gICAgcmVsZWFzZSggY2IgKSB7XHJcbiAgICAgICAgdmFyIF9zdGF0aWMgPSB0aGlzLmNvbnN0cnVjdG9yO1xyXG4gICAgICAgIGxldCBpICAgICAgID0gMDtcclxuXHJcbiAgICAgICAgaWYgKCAhLS10aGlzLmxvY2tzICYmIHRoaXMuZGF0YXMgJiYgdGhpcy5pc0NvbXBsZXRlKCkgKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3N0YWJsZSA9IHRydWU7XHJcblxyXG5cclxuICAgICAgICAgICAgdGhpcy5fcmV2ID0gMSArICh0aGlzLl9yZXYgKyAxKSAlIDEwMDAwMDA7Ly9cclxuICAgICAgICAgICAgaWYgKCB0aGlzLl9mb2xsb3dlcnMubGVuZ3RoIClcclxuICAgICAgICAgICAgICAgIHRoaXMuX2ZvbGxvd2Vycy5mb3JFYWNoKCggZm9sbG93ZXIgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCAhdGhpcy5kYXRhcyApIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIHR5cGVvZiBmb2xsb3dlclswXSA9PSBcImZ1bmN0aW9uXCIgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbGxvd2VyWzBdKHRoaXMuZGF0YXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNiICYmIGkrKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9sbG93ZXJbMF0uc2V0U3RhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZm9sbG93ZXJbMV0pID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtbZm9sbG93ZXJbMV1dIDogdGhpcy5kYXRhc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGFzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjYiAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgKCkgPT4gKCEoLS1pKSAmJiBjYigpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5lbWl0KCdzdGFibGUnLCB0aGlzLmRhdGFzKTtcclxuICAgICAgICAgICAgdGhpcy5lbWl0KCd1cGRhdGUnLCB0aGlzLmRhdGFzKTtcclxuICAgICAgICAgICAgY2IgJiYgY2IoKVxyXG4gICAgICAgIH0gZWxzZSBjYiAmJiB0aGlzLnRoZW4oY2IpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGRlc3Ryb3koKSB7XHJcblxyXG4gICAgICAgIHRoaXMuZW1pdCgnZGVzdHJveScsIHRoaXMpO1xyXG4gICAgICAgIGlmICggdGhpcy5fc3RhYmlsaXplciApXHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9zdGFiaWxpemVyKTtcclxuICAgICAgICB0aGlzLl9mb2xsb3dlcnMubGVuZ3RoID0gMDtcclxuICAgICAgICB0aGlzLmRlYWQgICAgICAgICAgICAgID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLl9yZXZzICAgICAgICAgICAgID0gdGhpcy5kYXRhcyA9IHRoaXMuc3RhdGUgPSB0aGlzLmNvbnRleHQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMucmVtb3ZlQWxsTGlzdGVuZXJzKCk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvU3RvcmUuanMiXSwic291cmNlUm9vdCI6IiJ9