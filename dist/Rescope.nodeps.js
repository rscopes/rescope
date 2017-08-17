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
	            var _this3 = this;
	
	            if (!this.__context[id]) {
	                var _parent;
	
	                //ask mixed || parent
	                if (this.__mixed.reduce(function (mounted, ctx) {
	                    return mounted || ctx._mount(id, state, datas);
	                }, false) || !this.parent) return;
	                return (_parent = this.parent)._mount.apply(_parent, arguments);
	            }
	            this.constructor.Store.mountStore(id, this, null, state, datas);
	
	            if (!this.__listening[id]) {
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
	            return this.__context[id];
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
	
	                    store && store.unBind(component, alias);
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
	                    ctx._mount(name);
	                    return contextMap[name] = ctx[name];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNWNmZWFhNzQwODZiM2Q3ODdmNDkiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Jlc2NvcGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbnRleHQuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaXNzdHJpbmdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpc2FycmF5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXZlbnRzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaXNmdW5jdGlvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInNob3J0aWRcIiIsIndlYnBhY2s6Ly8vLi9zcmMvU3RvcmUuanMiXSwibmFtZXMiOlsiU3RvcmUiLCJDb250ZXh0IiwiaXNTdHJpbmciLCJyZXF1aXJlIiwiaXNBcnJheSIsIkV2ZW50RW1pdHRlciIsImlzRnVuY3Rpb24iLCJzaG9ydGlkIiwiX19wcm90b19fcHVzaCIsInRhcmdldCIsImlkIiwicGFyZW50IiwiaGVyZSIsInByb3RvdHlwZSIsIm9wZW5Db250ZXh0cyIsImtleSIsImN0eCIsInN0YXRlIiwiZGF0YXMiLCJuYW1lIiwiZGVmYXVsdE1heExpc3RlbmVycyIsInBlcnNpc3RlbmNlVG0iLCJhdXRvRGVzdHJveSIsIl9tYXhMaXN0ZW5lcnMiLCJjb25zdHJ1Y3RvciIsIl9pZCIsImdlbmVyYXRlIiwicmVnaXN0ZXIiLCJfaXNMb2NhbElkIiwiX3BlcnNpc3RlbmNlVG0iLCJzdG9yZXMiLCJzb3VyY2VzIiwiX19yZXRhaW5Mb2NrcyIsImFsbCIsIl9fdzhMb2NrcyIsIl9fbGlzdGVuaW5nIiwiX19jb250ZXh0IiwiX19taXhlZCIsIl9fbWl4ZWRMaXN0IiwiX2ZvbGxvd2VycyIsInJldGFpbiIsIm9uIiwiX19wYXJlbnRMaXN0IiwicmVsZWFzZSIsIndhaXQiLCJfcHJvcGFnIiwiX3N0YWJsZSIsInNldFRpbWVvdXQiLCJkaXNwb3NlIiwiZm9yRWFjaCIsIl9tb3VudCIsImsiLCJhcmd1bWVudHMiLCJyZWR1Y2UiLCJtb3VudGVkIiwibW91bnRTdG9yZSIsImlzU3RhYmxlIiwicHJvcGFnIiwidGFyZ2V0Q3R4IiwibGlzdHMiLCJwdXNoIiwicmVsaW5rIiwicmF3Q3R4IiwiT2JqZWN0Iiwia2V5cyIsInNpbmdsZXRvbiIsInNyY0N0eCIsImV4dGVybmFsIiwibGN0eCIsIl9zdG9yZXMiLCJjb25zb2xlIiwid2FybiIsImRlZmluZVByb3BlcnR5IiwiZ2V0IiwiX3N0YXRlIiwic2V0IiwidiIsIl9kYXRhcyIsInVuZGVmaW5lZCIsIm9iaiIsImFzIiwic2V0SW5pdGlhbCIsImxhc3RSZXZzIiwicmV2cyIsIm1vdW50IiwiZ2V0VXBkYXRlcyIsInNldFN0YXRlIiwiZm9sbG93ZXJzIiwiaSIsImxlbmd0aCIsInNwbGljZSIsImRvV2FpdCIsIm9yaWdpbiIsImJpbmQiLCJvdXRwdXQiLCJ1cGRhdGVkIiwiaGFzT3duUHJvcGVydHkiLCJfcmV2IiwiZmxhZ3Nfc3RhdGVzIiwiZmxhZ3NfZGF0YXMiLCJfZmxhZ3Nfc3RhdGVzIiwiX2ZsYWdzX2RhdGFzIiwiZmxhZ3MiLCJyIiwiZmxhZyIsInRlc3QiLCJjYiIsIm9uY2UiLCJxdWlldCIsInJlYXNvbiIsIl9kZXN0cm95VE0iLCJjbGVhclRpbWVvdXQiLCJkZXN0cm95IiwibG9nIiwiZW1pdCIsIl9wcm9wYWdUTSIsIl9zdGFiaWxpemVyVE0iLCJyZW1vdmVMaXN0ZW5lciIsImNvbnRleHRPYmoiLCJzaGlmdCIsImNvbnRleHRzIiwib2JqUHJvdG8iLCJnZXRQcm90b3R5cGVPZiIsInN0b3JlIiwiY29tcG9uZW50IiwiY29udGV4dCIsInRhcmdldFJldnMiLCJfcmV2cyIsImluaXRpYWxPdXRwdXRzIiwic3RhdGljQ29udGV4dCIsImZpbHRlciIsImVycm9yIiwiYWxpYXMiLCJkZWZhdWx0TmFtZSIsIm1hdGNoIiwibWl4ZWRDV1VubW91bnQiLCJ1bk1vdW50S2V5IiwiaXNSZWFjdENvbXBvbmVudCIsIm1hcCIsInNwbGl0IiwidW5CaW5kIiwiYXBwbHkiLCJza2V5Iiwic29ydCIsImEiLCJiIiwiZmlyc3RuYW1lIiwiam9pbiIsImNvbnRleHRNYXAiLCJnZXRDb250ZXh0IiwiYXJneiIsIl9zdGF0aWMiLCJjZmciLCJ3YXRjaHMiLCJ1c2UiLCJyZWZpbmUiLCJpbml0aWFsU3RhdGUiLCJfdWlkIiwibG9ja3MiLCJfb25TdGFiaWxpemUiLCJfdXNlIiwiX3JlcXVpcmUiLCJwdWxsIiwiaXNDb21wbGV0ZSIsIm5EYXRhcyIsImNEYXRhcyIsImZvbGxvdyIsImNoYW5nZXMiLCJfX3Byb3RvX18iLCJtZSIsIl9zdGFiaWxpemVyIiwiZXZlbnQiLCJzIiwiZm9yY2UiLCJuZXh0U3RhdGUiLCJfY2hhbmdlc1NXIiwibmV4dERhdGFzIiwic2hvdWxkUHJvcGFnIiwicFN0YXRlIiwic3luYyIsImNoYW5nZSIsInN0YWJpbGl6ZSIsImZyb20iLCJwcmV2aW91cyIsInRoZW4iLCJmb2xsb3dlciIsImRlYWQiLCJyZW1vdmVBbGxMaXN0ZW5lcnMiLCJhdXRva2lsbCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDNUJBOzs7O0FBQ0E7Ozs7OztBQVhBOzs7Ozs7Ozs7O0FBYUEsbUJBQVFBLEtBQVI7O21CQUVlLEVBQUNBLHNCQUFELEVBQVFDLDBCQUFSLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmZjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1CQTs7Ozs7OztBQVFBLEtBQUlDLFdBQWtCLG1CQUFBQyxDQUFRLENBQVIsQ0FBdEI7QUFBQSxLQUNJQyxVQUFrQixtQkFBQUQsQ0FBUSxDQUFSLENBRHRCO0FBQUEsS0FFSUUsZUFBa0IsbUJBQUFG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LEVBQVYsQ0FBTjtBQUNQLG9CQUFPLElBQVA7QUFDSDs7O21DQUVTOztBQUVOLGtCQUFLUSxJQUFMLENBQVUsU0FBVixFQUFxQixJQUFyQjtBQUNBLGlCQUFLLEtBQUt3RCxXQUFWLEVBQ0kzRCxhQUFhLEtBQUsyRCxXQUFsQjtBQUNKLGtCQUFLbkksVUFBTCxDQUFnQmtELE1BQWhCLEdBQXlCLENBQXpCO0FBQ0Esa0JBQUtpRyxJQUFMLEdBQXlCLElBQXpCO0FBQ0Esa0JBQUszRCxLQUFMLEdBQXlCLEtBQUs3RyxLQUFMLEdBQWEsS0FBS0QsS0FBTCxHQUFhLEtBQUs0RyxPQUFMLEdBQWUsSUFBbEU7QUFDQSxrQkFBSzhELGtCQUFMO0FBQ0g7Ozs7R0EzbUI4QnRMLFk7O0FBQWRMLE0sQ0FFVjBKLEcsR0FBc0IsRTtBQUZaMUosTSxDQUtWaUksYSxHQUFzQixJQUFJaEksT0FBSixDQUFZLEVBQVosRUFBZ0IsRUFBQ1MsSUFBSyxRQUFOLEVBQWhCLEM7QUFMWlYsTSxDQU1WNEosWSxHQUFzQjlFLFM7QUFOWjlFLE0sQ0FPVm9CLG1CLEdBQXNCLEU7QUFQWnBCLE0sQ0FRVjRMLFEsR0FBc0IsSzttQkFSWjVMLEsiLCJmaWxlIjoiZGlzdC9SZXNjb3BlLm5vZGVwcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA1Y2ZlYWE3NDA4NmIzZDc4N2Y0OSIsIi8qXHJcbiAqIENvcHlyaWdodCAoYykgIDIwMTcgQ2FpcGkgTGFicyAuXHJcbiAqXHJcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcbiAqXHJcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG4gKlxyXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cclxuICovXHJcblxyXG5pbXBvcnQgQ29udGV4dCBmcm9tIFwiLi9Db250ZXh0XCI7XHJcbmltcG9ydCBTdG9yZSBmcm9tIFwiLi9TdG9yZVwiO1xyXG5cclxuQ29udGV4dC5TdG9yZSA9IFN0b3JlO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1N0b3JlLCBDb250ZXh0fTtcclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9SZXNjb3BlLmpzIiwiLypcclxuICogQ29weXJpZ2h0IChjKSAyMDE3LiAgQ2FpcGkgTGFicy4gIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFRoaXMgRmlsZSBpcyBwYXJ0IG9mIENhaXBpLiBZb3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XHJcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzXHJcbiAqIHB1Ymxpc2hlZCBieSB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZVxyXG4gKiBMaWNlbnNlLCBvciAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxyXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcclxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcclxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxyXG4gKiBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cclxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXHJcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXHJcbiAqICBUaGlzIHByb2plY3QgaXMgZHVhbCBsaWNlbnNlZCB1bmRlciBBR1BMIGFuZCBDb21tZXJjaWFsIExpY2VuY2UuXHJcbiAqXHJcbiAqIEBhdXRob3IgOiBOYXRoYW5hZWwgQnJhdW5cclxuICogQGNvbnRhY3QgOiBjYWlwaWxhYnNAZ21haWwuY29tXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIEBhdXRob3IgTmF0aGFuYWVsIEJSQVVOXHJcbiAqXHJcbiAqIERhdGU6IDEzLzA4LzIwMTdcclxuICogVGltZTogMTc6MTVcclxuICovXHJcblxyXG5cclxudmFyIGlzU3RyaW5nICAgICAgICA9IHJlcXVpcmUoJ2lzc3RyaW5nJyksXHJcbiAgICBpc0FycmF5ICAgICAgICAgPSByZXF1aXJlKCdpc2FycmF5JyksXHJcbiAgICBFdmVudEVtaXR0ZXIgICAgPSByZXF1aXJlKCdldmVudHMnKSxcclxuICAgIGlzRnVuY3Rpb24gICAgICA9IHJlcXVpcmUoJ2lzZnVuY3Rpb24nKVxyXG4gICAgLCBzaG9ydGlkICAgICAgID0gcmVxdWlyZSgnc2hvcnRpZCcpXHJcbiAgICAsIF9fcHJvdG9fX3B1c2ggPSAoIHRhcmdldCwgaWQsIHBhcmVudCApID0+IHtcclxuICAgIGxldCBoZXJlICAgICAgICAgICA9IHtcclxuICAgICAgICBbaWRdIDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBoZXJlW2lkXS5wcm90b3R5cGUgPSBwYXJlbnQgPyBuZXcgcGFyZW50W1wiX1wiICsgaWRdKCkgOiB0YXJnZXRbaWRdIHx8IHt9O1xyXG4gICAgdGFyZ2V0W2lkXSAgICAgICAgID0gbmV3IGhlcmVbaWRdKCk7XHJcbiAgICB0YXJnZXRbJ18nICsgaWRdICAgPSBoZXJlW2lkXTtcclxufTtcclxuXHJcbmxldCBvcGVuQ29udGV4dHMgPSB7fTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250ZXh0IGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcclxuICAgIHN0YXRpYyBjb250ZXh0cyAgICAgICAgICAgID0gb3BlbkNvbnRleHRzO1xyXG4gICAgc3RhdGljIFN0b3JlICAgICAgICAgICAgICAgPSBudWxsO1xyXG4gICAgc3RhdGljIGRlZmF1bHRNYXhMaXN0ZW5lcnMgPSAyMDtcclxuICAgIHN0YXRpYyBwZXJzaXN0ZW5jZVRtICAgICAgID0gMDtcclxuXHJcbiAgICBzdGF0aWMgZ2V0Q29udGV4dCgga2V5ICkge1xyXG4gICAgICAgIHJldHVybiBvcGVuQ29udGV4dHNba2V5XSA9IG9wZW5Db250ZXh0c1trZXldIHx8IG5ldyBDb250ZXh0KHt9KTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3RydWN0b3IoIGN0eCwge2lkLCBwYXJlbnQsIHN0YXRlLCBkYXRhcywgbmFtZSwgZGVmYXVsdE1heExpc3RlbmVycywgcGVyc2lzdGVuY2VUbSwgYXV0b0Rlc3Ryb3l9ID0ge30gKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy5fbWF4TGlzdGVuZXJzID0gZGVmYXVsdE1heExpc3RlbmVycyB8fCB0aGlzLmNvbnN0cnVjdG9yLmRlZmF1bHRNYXhMaXN0ZW5lcnM7XHJcbiAgICAgICAgdGhpcy5faWQgICAgICAgICAgID0gaWQgPSBpZCB8fCAoXCJfX19fX1wiICsgc2hvcnRpZC5nZW5lcmF0ZSgpKTtcclxuXHJcbiAgICAgICAgaWYgKCBvcGVuQ29udGV4dHNbaWRdICkge1xyXG4gICAgICAgICAgICBvcGVuQ29udGV4dHNbaWRdLnJlZ2lzdGVyKGN0eCk7XHJcbiAgICAgICAgICAgIHJldHVybiBvcGVuQ29udGV4dHNbaWRdXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBvcGVuQ29udGV4dHNbaWRdICAgID0gdGhpcztcclxuICAgICAgICB0aGlzLl9pc0xvY2FsSWQgICAgID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLl9wZXJzaXN0ZW5jZVRtID0gcGVyc2lzdGVuY2VUbSB8fCB0aGlzLmNvbnN0cnVjdG9yLnBlcnNpc3RlbmNlVG07XHJcblxyXG4gICAgICAgIHRoaXMuc3RvcmVzID0ge307XHJcbiAgICAgICAgdGhpcy5zdGF0ZSAgPSB7fTtcclxuICAgICAgICB0aGlzLmRhdGFzICA9IHt9O1xyXG4gICAgICAgIF9fcHJvdG9fX3B1c2godGhpcywgJ3N0b3JlcycsIHBhcmVudCk7XHJcbiAgICAgICAgX19wcm90b19fcHVzaCh0aGlzLCAnc3RhdGUnLCBwYXJlbnQpO1xyXG4gICAgICAgIF9fcHJvdG9fX3B1c2godGhpcywgJ2RhdGFzJywgcGFyZW50KTtcclxuICAgICAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcclxuXHJcbiAgICAgICAgdGhpcy5zb3VyY2VzID0gW107XHJcblxyXG4gICAgICAgIHRoaXMuX19yZXRhaW5Mb2NrcyA9IHthbGwgOiAwfTtcclxuICAgICAgICB0aGlzLl9fdzhMb2NrcyAgICAgPSB7YWxsIDogMX07XHJcbiAgICAgICAgdGhpcy5fX2xpc3RlbmluZyAgID0ge307XHJcbiAgICAgICAgdGhpcy5fX2NvbnRleHQgICAgID0ge307XHJcbiAgICAgICAgdGhpcy5fX21peGVkICAgICAgID0gW107XHJcbiAgICAgICAgdGhpcy5fX21peGVkTGlzdCAgID0gW107XHJcbiAgICAgICAgdGhpcy5fZm9sbG93ZXJzICAgID0gW107XHJcbiAgICAgICAgaWYgKCBwYXJlbnQgKSB7XHJcbiAgICAgICAgICAgIHBhcmVudC5yZXRhaW4oXCJpc015UGFyZW50XCIpO1xyXG4gICAgICAgICAgICBwYXJlbnQub24odGhpcy5fX3BhcmVudExpc3QgPSB7XHJcbiAgICAgICAgICAgICAgICAnc3RhYmxlJyAgIDogcyA9PiB0aGlzLnJlbGVhc2UoXCJpc015UGFyZW50XCIpLFxyXG4gICAgICAgICAgICAgICAgJ3Vuc3RhYmxlJyA6IHMgPT4gdGhpcy53YWl0KFwiaXNNeVBhcmVudFwiKSxcclxuICAgICAgICAgICAgICAgICd1cGRhdGUnICAgOiBzID0+IHRoaXMuX3Byb3BhZygpXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAvLyB0aGlzLnJlZ2lzdGVyKHBhcmVudC5fX2NvbnRleHQsIHN0YXRlLCBkYXRhcyk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgdGhpcy5yZWdpc3RlcihjdHgsIHN0YXRlLCBkYXRhcyk7XHJcbiAgICAgICAgdGhpcy5fX3c4TG9ja3MuYWxsLS07XHJcbiAgICAgICAgdGhpcy5fc3RhYmxlID0gISF0aGlzLl9fdzhMb2Nrcy5hbGw7XHJcblxyXG4gICAgICAgIGlmICggYXV0b0Rlc3Ryb3kgKVxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KFxyXG4gICAgICAgICAgICAgICAgdG0gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmV0YWluKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNwb3NlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBtb3VudCggaWQsIHN0YXRlLCBkYXRhcyApIHtcclxuICAgICAgICBpZiAoIGlzQXJyYXkoaWQpICkge1xyXG4gICAgICAgICAgICBpZC5mb3JFYWNoKGsgPT4gdGhpcy5fbW91bnQoaywgc3RhdGUgJiYgc3RhdGVba10sIGRhdGFzICYmIGRhdGFzW2tdKSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fbW91bnQoLi4uYXJndW1lbnRzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgX21vdW50KCBpZCwgc3RhdGUsIGRhdGFzICkge1xyXG4gICAgICAgIGlmICggIXRoaXMuX19jb250ZXh0W2lkXSApIHsvL2FzayBtaXhlZCB8fCBwYXJlbnRcclxuICAgICAgICAgICAgaWYgKCB0aGlzLl9fbWl4ZWQucmVkdWNlKCggbW91bnRlZCwgY3R4ICkgPT4gKG1vdW50ZWQgfHwgY3R4Ll9tb3VudChpZCwgc3RhdGUsIGRhdGFzKSksIGZhbHNlKSB8fFxyXG4gICAgICAgICAgICAgICAgIXRoaXMucGFyZW50IClcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyZW50Ll9tb3VudCguLi5hcmd1bWVudHMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNvbnN0cnVjdG9yLlN0b3JlLm1vdW50U3RvcmUoaWQsIHRoaXMsIG51bGwsIHN0YXRlLCBkYXRhcyk7XHJcblxyXG4gICAgICAgIGlmICggIXRoaXMuX19saXN0ZW5pbmdbaWRdICkge1xyXG4gICAgICAgICAgICAhdGhpcy5fX2NvbnRleHRbaWRdLmlzU3RhYmxlKCkgJiYgdGhpcy53YWl0KGlkKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX19jb250ZXh0W2lkXS5vbihcclxuICAgICAgICAgICAgICAgIHRoaXMuX19saXN0ZW5pbmdbaWRdID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICd1cGRhdGUnICAgOiBzID0+IHRoaXMucHJvcGFnKCksXHJcbiAgICAgICAgICAgICAgICAgICAgJ3N0YWJsZScgICA6IHMgPT4gdGhpcy5yZWxlYXNlKGlkKSxcclxuICAgICAgICAgICAgICAgICAgICAndW5zdGFibGUnIDogcyA9PiB0aGlzLndhaXQoaWQpXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX19jb250ZXh0W2lkXTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgbWl4aW4oIHRhcmdldEN0eCApIHtcclxuICAgICAgICBsZXQgcGFyZW50ID0gdGhpcy5wYXJlbnQsIGxpc3RzO1xyXG4gICAgICAgIHRoaXMuX19taXhlZC5wdXNoKHRhcmdldEN0eClcclxuICAgICAgICB0YXJnZXRDdHgucmV0YWluKCk7XHJcblxyXG4gICAgICAgIHRoaXMuX19taXhlZExpc3QucHVzaChsaXN0cyA9IHtcclxuICAgICAgICAgICAgJ3N0YWJsZScgICA6IHMgPT4gdGhpcy5yZWxlYXNlKHRhcmdldEN0eC5faWQpLFxyXG4gICAgICAgICAgICAndW5zdGFibGUnIDogcyA9PiB0aGlzLndhaXQodGFyZ2V0Q3R4Ll9pZCksXHJcbiAgICAgICAgICAgICd1cGRhdGUnICAgOiBzID0+IHRoaXMuX3Byb3BhZygpXHJcbiAgICAgICAgfSlcclxuICAgICAgICB0YXJnZXRDdHgub24obGlzdHMpO1xyXG4gICAgICAgIF9fcHJvdG9fX3B1c2godGhpcywgJ3N0b3JlcycsIHBhcmVudCk7XHJcbiAgICAgICAgX19wcm90b19fcHVzaCh0aGlzLCAnc3RhdGUnLCBwYXJlbnQpO1xyXG4gICAgICAgIF9fcHJvdG9fX3B1c2godGhpcywgJ2RhdGFzJywgcGFyZW50KTtcclxuICAgICAgICB0YXJnZXRDdHgucmVsaW5rKHRhcmdldEN0eC5fX2NvbnRleHQsIHRoaXMsIHRydWUpO1xyXG5cclxuICAgICAgICBfX3Byb3RvX19wdXNoKHRoaXMsICdzdG9yZXMnLCB0aGlzKTtcclxuICAgICAgICBfX3Byb3RvX19wdXNoKHRoaXMsICdzdGF0ZScsIHRoaXMpO1xyXG4gICAgICAgIF9fcHJvdG9fX3B1c2godGhpcywgJ2RhdGFzJywgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5yZWxpbmsodGhpcy5fX2NvbnRleHQsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdGVyKCByYXdDdHgsIHN0YXRlID0ge30sIGRhdGFzID0ge30gKSB7XHJcbiAgICAgICAgdGhpcy5yZWxpbmsocmF3Q3R4LCB0aGlzLCBmYWxzZSwgc3RhdGUsIGRhdGFzKTtcclxuICAgICAgICBPYmplY3Qua2V5cyhyYXdDdHgpLmZvckVhY2goXHJcbiAgICAgICAgICAgIGlkID0+IChpc0Z1bmN0aW9uKHJhd0N0eFtpZF0pICYmIHJhd0N0eFtpZF0uc2luZ2xldG9uICYmIHRoaXMuX21vdW50KGlkLCBzdGF0ZVtpZF0sIGRhdGFzW2lkXSkpKVxyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE1hcCBzcmNDdHggc3RvcmUncyBvbiB0YXJnZXRDdHggaGVhZGVycyBwcm90bydzXHJcbiAgICAgKiBAcGFyYW0gc3JjQ3R4XHJcbiAgICAgKiBAcGFyYW0gdGFyZ2V0Q3R4XHJcbiAgICAgKiBAcGFyYW0gc3RhdGVcclxuICAgICAqIEBwYXJhbSBkYXRhc1xyXG4gICAgICovXHJcbiAgICByZWxpbmsoIHNyY0N0eCwgdGFyZ2V0Q3R4ID0gdGhpcywgZXh0ZXJuYWwsIHN0YXRlID0ge30sIGRhdGFzID0ge30gKSB7XHJcbiAgICAgICAgbGV0IGxjdHggPSB0YXJnZXRDdHguX3N0b3Jlcy5wcm90b3R5cGU7XHJcbiAgICAgICAgT2JqZWN0LmtleXMoc3JjQ3R4KVxyXG4gICAgICAgICAgICAuZm9yRWFjaChcclxuICAgICAgICAgICAgICAgIGlkID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIHRhcmdldEN0eC5fX2NvbnRleHRbaWRdID09PSBzcmNDdHhbaWRdIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldEN0eC5fX2NvbnRleHRbaWRdICYmICh0YXJnZXRDdHguX19jb250ZXh0W2lkXS5jb25zdHJ1Y3RvciA9PT0gc3JjQ3R4W2lkXSApIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIHRhcmdldEN0eC5fX2NvbnRleHRbaWRdICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCJSZXNjb3BlIENvbnRleHQgOiBcIiwgaWQsIFwiIGFscmVhZHkgZXhpc3QgaW4gdGhpcyBjb250ZXh0ICFcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCAhZXh0ZXJuYWwgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9fY29udGV4dFtpZF0gPSBzcmNDdHhbaWRdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxjdHgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoKCBjdHgsIGlkICkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldCA6ICgpID0+IHRoaXMuX21vdW50KGlkLCBzdGF0ZVtpZF0sIGRhdGFzW2lkXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMuX19jb250ZXh0LCBpZClcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0Q3R4Ll9zdGF0ZS5wcm90b3R5cGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoKCBjdHgsIGlkICkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldCA6ICgpID0+IChjdHhbaWRdICYmIGN0eFtpZF0uc3RhdGUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldCA6ICggdiApID0+ICh0aGlzLl9tb3VudChpZCwgdikpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLl9fY29udGV4dCwgaWQpXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldEN0eC5fZGF0YXMucHJvdG90eXBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKCggY3R4LCBpZCApID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXQgOiAoKSA9PiAoY3R4W2lkXSAmJiBjdHhbaWRdLmRhdGFzKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXQgOiAoIHYgKSA9PiAodGhpcy5fbW91bnQoaWQsIHVuZGVmaW5lZCwgdikpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLl9fY29udGV4dCwgaWQpXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIG9iaiB7UmVhY3QuQ29tcG9uZW50fFN0b3JlfGZ1bmN0aW9uKVxyXG4gICAgICogQHBhcmFtIGtleSB7c3RyaW5nfSBvcHRpb25hbCBrZXkgd2hlcmUgdG8gbWFwIHRoZSBwdWJsaWMgc3RhdGVcclxuICAgICAqL1xyXG4gICAgYmluZCggb2JqLCBrZXksIGFzLCBzZXRJbml0aWFsID0gdHJ1ZSApIHtcclxuICAgICAgICBsZXQgbGFzdFJldnMsIGRhdGFzO1xyXG4gICAgICAgIGlmICgga2V5ICYmICFpc0FycmF5KGtleSkgKVxyXG4gICAgICAgICAgICBrZXkgPSBba2V5XTtcclxuXHJcbiAgICAgICAgLy8ga2V5ID0ga2V5fHxcclxuXHJcbiAgICAgICAgaWYgKCBhcyA9PT0gdHJ1ZSApIHtcclxuICAgICAgICAgICAgc2V0SW5pdGlhbCA9IHRydWU7XHJcbiAgICAgICAgICAgIGFzICAgICAgICAgPSBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fZm9sbG93ZXJzLnB1c2goXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIG9iaixcclxuICAgICAgICAgICAgICAgIGtleSxcclxuICAgICAgICAgICAgICAgIGFzLFxyXG4gICAgICAgICAgICAgICAgbGFzdFJldnMgPSBrZXkgJiYga2V5LnJlZHVjZSgoIHJldnMsIGlkICkgPT4gKHJldnNbaWRdID0gMCwgcmV2cyksIHt9KVxyXG4gICAgICAgICAgICBdKTtcclxuXHJcbiAgICAgICAgdGhpcy5tb3VudChrZXkpO1xyXG5cclxuICAgICAgICBpZiAoIHNldEluaXRpYWwgJiYgdGhpcy5fc3RhYmxlICkge1xyXG4gICAgICAgICAgICBkYXRhcyA9IHRoaXMuZ2V0VXBkYXRlcyhsYXN0UmV2cyk7XHJcbiAgICAgICAgICAgIGlmICggIWRhdGFzICkgcmV0dXJuO1xyXG4gICAgICAgICAgICBpZiAoIHR5cGVvZiBvYmogIT0gXCJmdW5jdGlvblwiICkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCBhcyApIG9iai5zZXRTdGF0ZSh7W2FzXSA6IGRhdGFzfSk7XHJcbiAgICAgICAgICAgICAgICBlbHNlIG9iai5zZXRTdGF0ZShkYXRhcyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBvYmooZGF0YXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVW4gYmluZCB0aGlzIGNvbnRleHQgb2ZmIHRoZSBnaXZlbiBjb21wb25lbnQta2V5c1xyXG4gICAgICogQHBhcmFtIG9ialxyXG4gICAgICogQHBhcmFtIGtleVxyXG4gICAgICogQHJldHVybnMge0FycmF5LjwqPn1cclxuICAgICAqL1xyXG4gICAgdW5CaW5kKCBvYmosIGtleSwgYXMgKSB7XHJcbiAgICAgICAgdmFyIGZvbGxvd2VycyA9IHRoaXMuX2ZvbGxvd2VycyxcclxuICAgICAgICAgICAgaSAgICAgICAgID0gZm9sbG93ZXJzICYmIGZvbGxvd2Vycy5sZW5ndGg7XHJcbiAgICAgICAgd2hpbGUgKGZvbGxvd2VycyAmJiBpLS0pXHJcbiAgICAgICAgICAgIGlmICggZm9sbG93ZXJzW2ldWzBdID09PSBvYmogJiYgKCcnICsgZm9sbG93ZXJzW2ldWzFdKSA9PSAoJycgKyBrZXkpICYmXHJcbiAgICAgICAgICAgICAgICAoJycgKyBmb2xsb3dlcnNbaV1bMl0pID09ICgnJyArIGFzKSApXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZm9sbG93ZXJzLnNwbGljZShpLCAxKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFB1bGwgc3RvcmVzIGluIHRoZSBwcml2YXRlIHN0YXRlXHJcbiAgICAgKiBAcGFyYW0gc3RvcmVzICB7QXJyYXl9IChwYXNzZWQgdG8gU3RvcmU6Om1hcCkgRXggOiBbXCJzZXNzaW9uXCIsIFwib3RoZXJOYW1lZFN0b3JlOmtleVwiLCBvdGhlclN0b3JlLmFzKFwib3RoZXJLZXlcIildXHJcbiAgICAgKi9cclxuICAgIHB1bGwoIHN0b3JlcywgZG9XYWl0LCBvcmlnaW4gKSB7XHJcbiAgICAgICAgdGhpcy5tb3VudChzdG9yZXMpO1xyXG4gICAgICAgIHRoaXMuYmluZChvcmlnaW4sIHN0b3JlcywgbnVsbCwgZmFsc2UpO1xyXG5cclxuICAgICAgICByZXR1cm4gc3RvcmVzLnJlZHVjZSgoIGRhdGFzLCBpZCApID0+IChkYXRhc1tpZF0gPSB0aGlzLnN0b3Jlc1tpZF0gJiYgdGhpcy5zdG9yZXNbaWRdLmRhdGFzLCBkYXRhcyksIHt9KTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRVcGRhdGVzKCByZXZzLCBvdXRwdXQsIHVwZGF0ZWQgKSB7XHJcbiAgICAgICAgbGV0IGN0eCA9IHRoaXMuX19jb250ZXh0O1xyXG5cclxuICAgICAgICBvdXRwdXQgPSBvdXRwdXQgfHwge307XHJcbiAgICAgICAgT2JqZWN0LmtleXMoY3R4KS5mb3JFYWNoKFxyXG4gICAgICAgICAgICBpZCA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoICFyZXZzIHx8ICEoICFyZXZzLmhhc093blByb3BlcnR5KGlkKSB8fCBjdHhbaWRdLl9yZXYgPD0gcmV2c1tpZF0gKSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlZCAgICA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgb3V0cHV0W2lkXSA9IHRoaXMuZGF0YXNbaWRdO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICggcmV2cyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldnNbaWRdID0gY3R4W2lkXS5fcmV2O1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdXBkYXRlZCA9IHRoaXMuX19taXhlZC5yZWR1Y2UoKCB1cGRhdGVkLCBjdHggKSA9PiAoY3R4LmdldFVwZGF0ZXMocmV2cywgb3V0cHV0LCB1cGRhdGVkKSB8fCB1cGRhdGVkKSwgdXBkYXRlZCk7XHJcbiAgICAgICAgdXBkYXRlZCA9IHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LmdldFVwZGF0ZXMocmV2cywgb3V0cHV0LCB1cGRhdGVkKSB8fCB1cGRhdGVkO1xyXG4gICAgICAgIHJldHVybiB1cGRhdGVkICYmIG91dHB1dDtcclxuICAgIH1cclxuXHJcbiAgICBzZXJpYWxpemUoIGZsYWdzX3N0YXRlcyA9IC8uKi8sIGZsYWdzX2RhdGFzID0gLy4qLyApIHtcclxuICAgICAgICBsZXQgY3R4ID0gdGhpcy5fX2NvbnRleHQsIG91dHB1dCA9IHtzdGF0ZSA6IHt9LCBkYXRhcyA6IHt9fSxcclxuICAgICAgICAgICAgX2ZsYWdzX3N0YXRlcyxcclxuICAgICAgICAgICAgX2ZsYWdzX2RhdGFzO1xyXG4gICAgICAgIGlmICggaXNBcnJheShmbGFnc19zdGF0ZXMpIClcclxuICAgICAgICAgICAgZmxhZ3Nfc3RhdGVzLmZvckVhY2goaWQgPT4gKG91dHB1dC5zdGF0ZVtpZF0gPSB0aGlzLnN0YXRlW2lkXSkpXHJcblxyXG4gICAgICAgIGlmICggaXNBcnJheShmbGFnc19kYXRhcykgKVxyXG4gICAgICAgICAgICBmbGFnc19kYXRhcy5mb3JFYWNoKGlkID0+IChvdXRwdXQuZGF0YXNbaWRdID0gdGhpcy5kYXRhc1tpZF0pKVxyXG5cclxuICAgICAgICBpZiAoICFpc0FycmF5KGZsYWdzX2RhdGFzKSAmJiAhaXNBcnJheShmbGFnc19zdGF0ZXMpIClcclxuICAgICAgICAgICAgT2JqZWN0LmtleXMoY3R4KS5mb3JFYWNoKFxyXG4gICAgICAgICAgICAgICAgaWQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICggaXNGdW5jdGlvbihjdHhbaWRdKSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGZsYWdzID0gY3R4W2lkXS5jb25zdHJ1Y3Rvci5mbGFncztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZmxhZ3MgPSBpc0FycmF5KGZsYWdzKSA/IGZsYWdzIDogW2ZsYWdzIHx8IFwiXCJdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIGZsYWdzLnJlZHVjZSgoIHIsIGZsYWcgKSA9PiAociB8fCBfZmxhZ3Nfc3RhdGVzLnRlc3QoZmxhZykpLCBmYWxzZSkgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXQuc3RhdGVbaWRdID0gdGhpcy5zdGF0ZVtpZF07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICggZmxhZ3MucmVkdWNlKCggciwgZmxhZyApID0+IChyIHx8IF9mbGFnc19kYXRhcy50ZXN0KGZsYWcpKSwgZmFsc2UpIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0LmRhdGFzW2lkXSA9IHRoaXMuZGF0YXNbaWRdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgcmV0dXJuIG91dHB1dDtcclxuICAgIH1cclxuXHJcbiAgICBvbiggbGlzdHMgKSB7XHJcblxyXG4gICAgICAgIGlmICggIWlzU3RyaW5nKGxpc3RzKSAmJiBsaXN0cyApXHJcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGxpc3RzKS5mb3JFYWNoKGsgPT4gc3VwZXIub24oaywgbGlzdHNba10pKTtcclxuICAgICAgICBlbHNlIHN1cGVyLm9uKC4uLmFyZ3VtZW50cyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlTGlzdGVuZXIoIGxpc3RzICkge1xyXG4gICAgICAgIGlmICggIWlzU3RyaW5nKGxpc3RzKSAmJiBsaXN0cyApXHJcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGxpc3RzKS5mb3JFYWNoKGsgPT4gc3VwZXIucmVtb3ZlTGlzdGVuZXIoaywgbGlzdHNba10pKTtcclxuICAgICAgICBlbHNlIHN1cGVyLnJlbW92ZUxpc3RlbmVyKC4uLmFyZ3VtZW50cyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBvbmNlKCdzdGFibGUnLCBjYilcclxuICAgICAqIEBwYXJhbSBvYmoge1JlYWN0LkNvbXBvbmVudHxTdG9yZXxmdW5jdGlvbilcclxuICAgICAqIEBwYXJhbSBrZXkge3N0cmluZ30gb3B0aW9uYWwga2V5IHdoZXJlIHRvIG1hcCB0aGUgcHVibGljIHN0YXRlXHJcbiAgICAgKi9cclxuICAgIHRoZW4oIGNiICkge1xyXG4gICAgICAgIGlmICggdGhpcy5fc3RhYmxlIClcclxuICAgICAgICAgICAgcmV0dXJuIGNiKG51bGwsIHRoaXMuZGF0YXMpO1xyXG4gICAgICAgIHRoaXMub25jZSgnc3RhYmxlJywgZSA9PiBjYihudWxsLCB0aGlzLmRhdGFzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzdG9yZSgge3N0YXRlLCBkYXRhc30sIHF1aWV0ICkge1xyXG4gICAgICAgIGxldCBjdHggPSB0aGlzLl9fY29udGV4dDtcclxuICAgICAgICBPYmplY3Qua2V5cyhkYXRhcykuZm9yRWFjaChcclxuICAgICAgICAgICAgaWQgPT4ge1xyXG4gICAgICAgICAgICAgICAgcXVpZXQgP1xyXG4gICAgICAgICAgICAgICAgY3R4LmRhdGFzID0gZGF0YXNbaWRdXHJcbiAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgY3R4LnB1c2goZGF0YXNbaWRdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgT2JqZWN0LmtleXMoc3RhdGUpLmZvckVhY2goXHJcbiAgICAgICAgICAgIGlkID0+IHtcclxuICAgICAgICAgICAgICAgIHF1aWV0ID9cclxuICAgICAgICAgICAgICAgIGN0eC5zdGF0ZSA9IHN0YXRlW2lkXVxyXG4gICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgIGN0eC5zZXRTdGF0ZShzdGF0ZVtpZF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcmV0YWluKCByZWFzb24gKSB7XHJcbiAgICAgICAgdGhpcy5fX3JldGFpbkxvY2tzLmFsbCsrO1xyXG4gICAgICAgIGlmICggcmVhc29uICkge1xyXG4gICAgICAgICAgICB0aGlzLl9fcmV0YWluTG9ja3NbcmVhc29uXSA9IHRoaXMuX19yZXRhaW5Mb2Nrc1tyZWFzb25dIHx8IDA7XHJcbiAgICAgICAgICAgIHRoaXMuX19yZXRhaW5Mb2Nrc1tyZWFzb25dKys7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRpc3Bvc2UoIHJlYXNvbiApIHtcclxuICAgICAgICB0aGlzLl9fcmV0YWluTG9ja3MuYWxsLS07XHJcbiAgICAgICAgaWYgKCByZWFzb24gKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX19yZXRhaW5Mb2Nrc1tyZWFzb25dID0gdGhpcy5fX3JldGFpbkxvY2tzW3JlYXNvbl0gfHwgMDtcclxuICAgICAgICAgICAgdGhpcy5fX3JldGFpbkxvY2tzW3JlYXNvbl0tLTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCAhdGhpcy5fX3JldGFpbkxvY2tzLmFsbCApIHtcclxuICAgICAgICAgICAgaWYgKCB0aGlzLl9wZXJzaXN0ZW5jZVRtICkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZGVzdHJveVRNICYmIGNsZWFyVGltZW91dCh0aGlzLl9kZXN0cm95VE0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZGVzdHJveVRNID0gc2V0VGltZW91dChcclxuICAgICAgICAgICAgICAgICAgICBlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIXRoaXMuX19yZXRhaW5Mb2Nrcy5hbGwgJiYgdGhpcy5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wZXJzaXN0ZW5jZVRtXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgd2FpdCggcmVhc29uICkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwid2FpdFwiLCByZWFzb24pO1xyXG4gICAgICAgIHRoaXMuX3N0YWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICF0aGlzLl9fdzhMb2Nrcy5hbGwgJiYgdGhpcy5lbWl0KFwidW5zdGFibGVcIiwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5fX3c4TG9ja3MuYWxsKys7XHJcbiAgICAgICAgaWYgKCByZWFzb24gKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX193OExvY2tzW3JlYXNvbl0gPSB0aGlzLl9fdzhMb2Nrc1tyZWFzb25dIHx8IDA7XHJcbiAgICAgICAgICAgIHRoaXMuX193OExvY2tzW3JlYXNvbl0rKztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJvcGFnKCkge1xyXG4gICAgICAgIHRoaXMuX3Byb3BhZ1RNICYmIGNsZWFyVGltZW91dCh0aGlzLl9wcm9wYWdUTSk7XHJcbiAgICAgICAgdGhpcy5fcHJvcGFnVE0gPSBzZXRUaW1lb3V0KFxyXG4gICAgICAgICAgICBlID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3Byb3BhZygpXHJcbiAgICAgICAgICAgIH0sIDUwXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBfcHJvcGFnKCkge1xyXG4gICAgICAgIGlmICggdGhpcy5fZm9sbG93ZXJzLmxlbmd0aCApXHJcbiAgICAgICAgICAgIHRoaXMuX2ZvbGxvd2Vycy5mb3JFYWNoKCggezAgOiBvYmosIDEgOiBrZXksIDIgOiBhcywgMyA6IGxhc3RSZXZzfSApID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBkYXRhcyA9IHRoaXMuZ2V0VXBkYXRlcyhsYXN0UmV2cyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoICFkYXRhcyApIHJldHVybjtcclxuICAgICAgICAgICAgICAgIGlmICggdHlwZW9mIG9iaiAhPSBcImZ1bmN0aW9uXCIgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBhcyApIG9iai5zZXRTdGF0ZSh7W2FzXSA6IGRhdGFzfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBvYmouc2V0U3RhdGUoZGF0YXMpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBvYmooZGF0YXMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbGFzdFJldnMgJiZcclxuICAgICAgICAgICAgICAgIGtleS5mb3JFYWNoKGlkID0+IChsYXN0UmV2c1tpZF0gPSB0aGlzLl9fY29udGV4dFtpZF0gJiYgdGhpcy5fX2NvbnRleHRbaWRdLl9yZXYgfHwgMCkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmVtaXQoXCJ1cGRhdGVcIiwgdGhpcy5nZXRVcGRhdGVzKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbGVhc2UoIHJlYXNvbiApIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInJlbGVhc2VcIiwgcmVhc29uKTtcclxuICAgICAgICB0aGlzLl9fdzhMb2Nrcy5hbGwtLTtcclxuICAgICAgICBpZiAoIHJlYXNvbiApIHtcclxuICAgICAgICAgICAgdGhpcy5fX3c4TG9ja3NbcmVhc29uXSA9IHRoaXMuX193OExvY2tzW3JlYXNvbl0gfHwgMDtcclxuICAgICAgICAgICAgdGhpcy5fX3c4TG9ja3NbcmVhc29uXS0tO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9zdGFibGUgPSB0cnVlO1xyXG4gICAgICAgIGlmICggIXRoaXMuX193OExvY2tzLmFsbCApIHtcclxuICAgICAgICAgICAgdGhpcy5fc3RhYmlsaXplclRNICYmIGNsZWFyVGltZW91dCh0aGlzLl9zdGFiaWxpemVyVE0pO1xyXG4gICAgICAgICAgICB0aGlzLl9wcm9wYWdUTSAmJiBjbGVhclRpbWVvdXQodGhpcy5fcHJvcGFnVE0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5fc3RhYmlsaXplclRNID0gc2V0VGltZW91dChcclxuICAgICAgICAgICAgICAgIGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICggIXRoaXMuX3N0YWJsZSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9zdGFiaWxpemVyVE0gPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXQoXCJzdGFibGVcIiwgdGhpcyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3Byb3BhZygpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIG9yZGVyIGRlc3Ryb3kgb2YgbG9jYWwgc3RvcmVzXHJcbiAgICAgKi9cclxuICAgIGRlc3Ryb3koKSB7XHJcbiAgICAgICAgbGV0IGN0eCA9IHRoaXMuX19jb250ZXh0O1xyXG5cclxuICAgICAgICB0aGlzLmVtaXQoXCJkZXN0cm95XCIpO1xyXG4gICAgICAgIE9iamVjdC5rZXlzKFxyXG4gICAgICAgICAgICB0aGlzLl9fbGlzdGVuaW5nXHJcbiAgICAgICAgKS5mb3JFYWNoKFxyXG4gICAgICAgICAgICBpZCA9PiB0aGlzLl9fY29udGV4dFtpZF0ucmVtb3ZlTGlzdGVuZXIodGhpcy5fX2xpc3RlbmluZ1tpZF0pXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLl9fbGlzdGVuaW5nID0ge307XHJcblxyXG4gICAgICAgIGlmICggdGhpcy5faXNMb2NhbElkIClcclxuICAgICAgICAgICAgZGVsZXRlIG9wZW5Db250ZXh0c1t0aGlzLl9pZF07XHJcblxyXG4gICAgICAgIGZvciAoIGxldCBrZXkgaW4gY3R4IClcclxuICAgICAgICAgICAgaWYgKCAhaXNGdW5jdGlvbihjdHhba2V5XSkgKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIGN0eFtrZXldLmNvbnRleHRPYmogPT09IHRoaXMgKVxyXG4gICAgICAgICAgICAgICAgICAgIGN0eFtrZXldLmRlc3Ryb3koKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjdHhba2V5XSA9IGN0eFtrZXldLmNvbnN0cnVjdG9yO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgd2hpbGUgKHRoaXMuX19taXhlZExpc3QubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX19taXhlZFswXS5yZW1vdmVMaXN0ZW5lcih0aGlzLl9fbWl4ZWRMaXN0LnNoaWZ0KCkpO1xyXG4gICAgICAgICAgICB0aGlzLl9fbWl4ZWQuc2hpZnQoKS5kaXNwb3NlKClcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCB0aGlzLnBhcmVudCApIHtcclxuICAgICAgICAgICAgdGhpcy5wYXJlbnQucmVtb3ZlTGlzdGVuZXIodGhpcy5fX3BhcmVudExpc3QpO1xyXG4gICAgICAgICAgICB0aGlzLnBhcmVudC5kaXNwb3NlKFwiaXNNeVBhcmVudFwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0NvbnRleHQuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpc3N0cmluZ1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImlzc3RyaW5nXCJcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaXNhcnJheVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImlzYXJyYXlcIlxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJldmVudHNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJldmVudHNcIlxuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpc2Z1bmN0aW9uXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiaXNmdW5jdGlvblwiXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNob3J0aWRcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJzaG9ydGlkXCJcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcclxuICogQ29weXJpZ2h0IChjKSAgMjAxNyBDYWlwaSBMYWJzIC5cclxuICpcclxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuICpcclxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcbiAqXHJcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBVbHRyYSBzY2FsYWJsZSBzdGF0ZS1hd2FyZSBzdG9yZVxyXG4gKlxyXG4gKiBAdG9kbyA6IGxvdCBvZiBvcHRpbXMuLi5cclxuICovXHJcblxyXG52YXIgaXNTdHJpbmcgICAgID0gcmVxdWlyZSgnaXNzdHJpbmcnKVxyXG4gICAgLCBpc0FycmF5ICAgID0gcmVxdWlyZSgnaXNhcnJheScpXHJcbiAgICAsIGlzRnVuY3Rpb24gPSByZXF1aXJlKCdpc2Z1bmN0aW9uJylcclxuICAgICxcclxuICAgIENvbnRleHQgICAgICA9IHJlcXVpcmUoJy4vQ29udGV4dCcpLFxyXG4gICAgRXZlbnRFbWl0dGVyID0gcmVxdWlyZSgnZXZlbnRzJyksXHJcbiAgICBzaG9ydGlkICAgICAgPSByZXF1aXJlKCdzaG9ydGlkJyksXHJcbiAgICBvYmpQcm90byAgICAgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Yoe30pLFxyXG4gICAgb3BlbkNvbnRleHRzID0ge307XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RvcmUgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xyXG5cclxuICAgIHN0YXRpYyB1c2UgICAgICAgICAgICAgICAgID0gW107Ly8gb3ZlcnJpZGFibGUgbGlzdCBvZiBzb3VyY2Ugc3RvcmVzXHJcbiAgICBzdGF0aWMgZm9sbG93Oy8vIG92ZXJyaWRhYmxlIGxpc3Qgb2Ygc3RvcmUgdGhhdCB3aWxsIGFsbG93IHB1c2ggaWYgdXBkYXRlZFxyXG4gICAgc3RhdGljIHJlcXVpcmU7XHJcbiAgICBzdGF0aWMgc3RhdGljQ29udGV4dCAgICAgICA9IG5ldyBDb250ZXh0KHt9LCB7aWQgOiBcInN0YXRpY1wifSk7XHJcbiAgICBzdGF0aWMgaW5pdGlhbFN0YXRlICAgICAgICA9IHVuZGVmaW5lZDsvLyBkZWZhdWx0IHN0YXRlXHJcbiAgICBzdGF0aWMgZGVmYXVsdE1heExpc3RlbmVycyA9IDIwO1xyXG4gICAgc3RhdGljIGF1dG9raWxsICAgICAgICAgICAgPSBmYWxzZTsvLyBmYWxzZSBvciB0bSB3aXRob3V0IGZvbGxvd2Vyc1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogZ2V0IGEgQnVpbGRlci1rZXkgcGFpciBmb3IgU3RvcmU6Om1hcFxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcclxuICAgICAqIEByZXR1cm5zIHt7c3RvcmU6IFN0b3JlLCBuYW1lOiAqfX1cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGFzKCBuYW1lICkge1xyXG4gICAgICAgIHJldHVybiB7c3RvcmUgOiB0aGlzLCBuYW1lfTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE1hcCBhbGwgbmFtZWQgc3RvcmVzIGluIHtrZXlzfSB0byB0aGUge29iamVjdH0ncyBzdGF0ZVxyXG4gICAgICogSG9vayBjb21wb25lbnRXaWxsVW5tb3VudCAoZm9yIHJlYWN0IGNvbXApIG9yIGRlc3Ryb3kgdG8gdW5CaW5kIHRoZW0gYXV0b21hdGljYWxseVxyXG4gICAgICogQHN0YXRpY1xyXG4gICAgICogQHBhcmFtIG9iamVjdCB7UmVhY3QuQ29tcG9uZW50fFN0b3JlfC4uLn0gdGFyZ2V0IHN0YXRlIGF3YXJlIG9iamVjdFxyXG4gICAgICogQHBhcmFtIGtleXMge0FycmF5fSBFeCA6IFtcInNlc3Npb25cIiwgXCJvdGhlclN0YXRpY05hbWVkU3RvcmU6a2V5XCIsIHN0b3JlLmFzKCdhbm90aGVyS2V5JyldXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBtYXAoIGNvbXBvbmVudCwga2V5cywgY29udGV4dCwgb3JpZ2luLCBzZXRJbml0aWFsID0gZmFsc2UgKSB7XHJcbiAgICAgICAgdmFyIHRhcmdldFJldnMgICAgID0gY29tcG9uZW50Ll9yZXZzIHx8IHt9O1xyXG4gICAgICAgIC8vIHZhciB0YXJnZXRDb250ZXh0ICA9IGNvbXBvbmVudC5zdG9yZXMgfHwgKGNvbXBvbmVudC5zdG9yZXMgPSBuZXcgQ29udGV4dCh7fSkpO1xyXG4gICAgICAgIHZhciBpbml0aWFsT3V0cHV0cyA9IHt9O1xyXG4gICAgICAgIGtleXMgICAgICAgICAgICAgICA9IGlzQXJyYXkoa2V5cykgPyBbLi4ua2V5c10gOiBba2V5c107XHJcblxyXG5cclxuICAgICAgICBjb250ZXh0ID0gY29udGV4dCB8fCBTdG9yZS5zdGF0aWNDb250ZXh0O1xyXG5cclxuICAgICAgICAvLyBpZiAoIXRhcmdldENvbnRleHQuX19jb250ZXh0KVxyXG4gICAgICAgIC8vICAgICBkZWJ1Z2dlcjtcclxuXHJcbiAgICAgICAga2V5cyAgICAgICAgICAgPSBrZXlzLmZpbHRlcihcclxuICAgICAgICAgICAgLy8gQHRvZG8gOiB1c2UgcXVlcnkgcmVmc1xyXG4gICAgICAgICAgICAvLyAoc3RvcmUpKFxcLnN0b3JlKSooXFxbKFxcKnwocHJvcHMpXFx3KykrKVxcXSk/KFxcOmFsaWFzKVxyXG4gICAgICAgICAgICAoIGtleSApID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICggIWtleSApIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiTm90IGEgbWFwcGFibGUgc3RvcmUgaXRlbSAnXCIgKyBrZXkgKyBcIicgaW4gXCIgKyBvcmlnaW4gKyAnICEhJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbGV0IG5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgYWxpYXMsXHJcbiAgICAgICAgICAgICAgICAgICAgc3RvcmU7XHJcbiAgICAgICAgICAgICAgICBpZiAoIGtleS5zdG9yZSAmJiBrZXkubmFtZSApIHtcclxuICAgICAgICAgICAgICAgICAgICBhbGlhcyA9IG5hbWUgPSBrZXkubmFtZTtcclxuICAgICAgICAgICAgICAgICAgICBzdG9yZSA9IGtleS5zdG9yZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIGlzRnVuY3Rpb24oa2V5KSApIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lID0gYWxpYXMgPSBrZXkubmFtZSB8fCBrZXkuZGVmYXVsdE5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RvcmUgPSBrZXk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGtleSAgID0ga2V5Lm1hdGNoKC8oW1xcd19dKykoPzpcXDpcXFsoXFwqKVxcXSk/KD86XFw6KFxcKikpPy8pO1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWUgID0ga2V5WzBdO1xyXG4gICAgICAgICAgICAgICAgICAgIHN0b3JlID0gY29udGV4dC5fX2NvbnRleHRba2V5WzBdXTtcclxuICAgICAgICAgICAgICAgICAgICBhbGlhcyA9IGtleVsxXSA9PSAnKicgPyBudWxsIDoga2V5WzJdIHx8IGtleVswXTsvLyBhbGxvdyBiaW5kaW5nIHByb3BzICAoWypdKVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICggdGFyZ2V0UmV2c1tuYW1lXSApIHJldHVybiBmYWxzZTsvLyBpZ25vcmUgZGJsIHVzZXMgZm9yIG5vd1xyXG4gICAgICAgICAgICAgICAgaWYgKCAhc3RvcmUgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIk5vdCBhIG1hcHBhYmxlIHN0b3JlIGl0ZW0gJ1wiICsgbmFtZSArIFwiL1wiICsgYWxpYXMgKyBcIicgaW4gXCIgKyBvcmlnaW4gKyAnICEhJywgc3RvcmUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIGlzRnVuY3Rpb24oc3RvcmUpICkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW91bnRTdG9yZShuYW1lLCBjb250ZXh0KVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb250ZXh0Ll9fY29udGV4dFtuYW1lXS5iaW5kKGNvbXBvbmVudCwgYWxpYXMsIHNldEluaXRpYWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGlmICggY29udGV4dC5fX2NvbnRleHRba2V5WzBdXS5zdGF0ZSApIHsvLyBkbyBzeW5jIHB1c2ggYWZ0ZXIgY29uc3RydWN0b3JcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgY29udGV4dC5fX2NvbnRleHRba2V5WzBdXS5wdXNoKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzdG9yZS5iaW5kKGNvbXBvbmVudCwgYWxpYXMsIHNldEluaXRpYWwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0UmV2c1thbGlhc10gPSB0YXJnZXRSZXZzW2FsaWFzXSB8fCB0cnVlO1xyXG4gICAgICAgICAgICAgICAgLy8gIXRhcmdldENvbnRleHQuX19jb250ZXh0W2FsaWFzXSAmJiB0YXJnZXRDb250ZXh0LnJlZ2lzdGVyKHtbYWxpYXNdIDogY29udGV4dC5fX2NvbnRleHRbbmFtZV19KTtcclxuICAgICAgICAgICAgICAgIGlmICggY29udGV4dC5fX2NvbnRleHRbbmFtZV0uaGFzT3duUHJvcGVydHkoJ2RhdGFzJykgKVxyXG4gICAgICAgICAgICAgICAgICAgIGluaXRpYWxPdXRwdXRzW2FsaWFzXSA9IGNvbnRleHQuZGF0YXNbbmFtZV07XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdmFyIG1peGVkQ1dVbm1vdW50LFxyXG4gICAgICAgICAgICB1bk1vdW50S2V5ID0gY29tcG9uZW50LmlzUmVhY3RDb21wb25lbnQgPyBcImNvbXBvbmVudFdpbGxVbm1vdW50XCIgOiBcImRlc3Ryb3lcIjtcclxuXHJcbiAgICAgICAgaWYgKCBjb21wb25lbnQuaGFzT3duUHJvcGVydHkodW5Nb3VudEtleSkgKSB7XHJcbiAgICAgICAgICAgIG1peGVkQ1dVbm1vdW50ID0gY29tcG9uZW50W3VuTW91bnRLZXldO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29tcG9uZW50W3VuTW91bnRLZXldID0gZnVuY3Rpb24gKCkgey8vIHRvZG8gaG9wXHJcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzW3VuTW91bnRLZXldO1xyXG4gICAgICAgICAgICBpZiAoIG1peGVkQ1dVbm1vdW50IClcclxuICAgICAgICAgICAgICAgIHRoaXNbdW5Nb3VudEtleV0gPSBtaXhlZENXVW5tb3VudDtcclxuICAgICAgICAgICAga2V5cy5tYXAoXHJcbiAgICAgICAgICAgICAgICAoIGtleSApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpYXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICgga2V5LnN0b3JlICYmIGtleS5uYW1lICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlhcyA9IG5hbWUgPSBrZXkubmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmUgPSBrZXkuc3RvcmU7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICggaXNGdW5jdGlvbihrZXkpICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lID0gYWxpYXMgPSBrZXkubmFtZSB8fCBrZXkuZGVmYXVsdE5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlID0gY29udGV4dC5fX2NvbnRleHRbbmFtZV07XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5ICAgPSBrZXkuc3BsaXQoJzonKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZSAgPSBrZXlbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlID0gY29udGV4dC5fX2NvbnRleHRba2V5WzBdXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpYXMgPSBrZXlbMV0gfHwga2V5WzBdO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc3RvcmUmJnN0b3JlLnVuQmluZChjb21wb25lbnQsIGFsaWFzKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpc1t1bk1vdW50S2V5XSAmJiB0aGlzW3VuTW91bnRLZXldLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gaW5pdGlhbE91dHB1dHM7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldENvbnRleHQoIGNvbnRleHRzICkge1xyXG4gICAgICAgIGxldCBza2V5ID0gaXNBcnJheShjb250ZXh0cykgPyBjb250ZXh0cy5zb3J0KCggYSwgYiApID0+IHtcclxuICAgICAgICAgICAgaWYgKCBhLmZpcnN0bmFtZSA8IGIuZmlyc3RuYW1lICkgcmV0dXJuIC0xO1xyXG4gICAgICAgICAgICBpZiAoIGEuZmlyc3RuYW1lID4gYi5maXJzdG5hbWUgKSByZXR1cm4gMTtcclxuICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgfSkuam9pbignOjonKSA6IGNvbnRleHRzO1xyXG4gICAgICAgIHJldHVybiBDb250ZXh0LmNvbnRleHRzW3NrZXldID0gQ29udGV4dC5jb250ZXh0c1tza2V5XSB8fCBuZXcgQ29udGV4dCh7fSwge2lkIDogc2tleX0pO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBtb3VudFN0b3JlKCBuYW1lLCBjb250ZXh0LCBzdG9yZSwgc3RhdGUsIGRhdGFzICkge1xyXG4gICAgICAgIGxldCBjdHgsIGNvbnRleHRNYXAgPSBjb250ZXh0Ll9fY29udGV4dDtcclxuICAgICAgICBjb250ZXh0TWFwW25hbWVdICAgID0gc3RvcmUgPSBzdG9yZSB8fCBjb250ZXh0TWFwW25hbWVdO1xyXG4gICAgICAgIGlmICggIXN0b3JlICkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiTm90IGEgbWFwcGFibGUgc3RvcmUgaXRlbSAnXCIgKyBuYW1lICsgJyAhIScsIHN0b3JlKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoIGlzRnVuY3Rpb24oc3RvcmUpICkge1xyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICBpZiAoIHN0b3JlICYmIChzdG9yZS5jb250ZXh0cyB8fCBzdG9yZS5jb250ZXh0KSApIHtcclxuICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuZ2V0Q29udGV4dChzdG9yZS5jb250ZXh0cyB8fCBbc3RvcmUuY29udGV4dF0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGN0eC5yZWdpc3Rlcih7W25hbWVdIDogY3R4Ll9fY29udGV4dFtuYW1lXSB8fCBzdG9yZX0pO1xyXG4gICAgICAgICAgICAgICAgY3R4Ll9tb3VudChuYW1lKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjb250ZXh0TWFwW25hbWVdID0gY3R4W25hbWVdO1xyXG4gICAgICAgICAgICB9IGVsc2VcclxuICAgICAgICAgICAgICAgIHN0b3JlID0gY29udGV4dE1hcFtuYW1lXSA9IG5ldyBzdG9yZShjb250ZXh0LCB7c3RhdGUsIGRhdGFzfSk7XHJcbiAgICAgICAgICAgIGNvbnRleHRNYXBbbmFtZV0ucmVsaW5rKG5hbWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICggc3RhdGUgIT09IHVuZGVmaW5lZCAmJiBkYXRhcyA9PT0gdW5kZWZpbmVkIClcclxuICAgICAgICAgICAgICAgIHN0b3JlLnNldFN0YXRlKHN0YXRlKTtcclxuICAgICAgICAgICAgZWxzZSBpZiAoIHN0YXRlICE9PSB1bmRlZmluZWQgKVxyXG4gICAgICAgICAgICAgICAgc3RvcmUuc3RhdGUgPSBzdGF0ZTtcclxuXHJcbiAgICAgICAgICAgIGlmICggZGF0YXMgIT09IHVuZGVmaW5lZCApXHJcbiAgICAgICAgICAgICAgICBzdG9yZS5wdXNoKGRhdGFzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHN0b3JlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29uc3RydWN0b3IsIHdpbGwgYnVpbGQgYSByZXNjb3BlIHN0b3JlXHJcbiAgICAgKlxyXG4gICAgICogKGNvbnRleHQsIHtyZXF1aXJlLHVzZSxyZWZpbmUsc3RhdGUsIGRhdGFzfSlcclxuICAgICAqIChjb250ZXh0KVxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBjb250ZXh0IHtvYmplY3R9IGNvbnRleHQgd2hlcmUgdG8gZmluZCB0aGUgb3RoZXIgc3RvcmVzIChkZWZhdWx0IDogc3RhdGljIHN0YXRpY0NvbnRleHQgKVxyXG4gICAgICogQHBhcmFtIGtleXMge0FycmF5fSAocGFzc2VkIHRvIFN0b3JlOjptYXApIEV4IDogW1wic2Vzc2lvblwiLCBcIm90aGVyTmFtZWRTdG9yZTprZXlcIiwgb3RoZXJTdG9yZS5hcyhcIm90aGVyS2V5XCIpXVxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHZhciBhcmd6ICAgICAgICAgPSBbLi4uYXJndW1lbnRzXSxcclxuICAgICAgICAgICAgX3N0YXRpYyAgICAgID0gdGhpcy5jb25zdHJ1Y3RvcixcclxuICAgICAgICAgICAgY29udGV4dCAgICAgID0gIWlzQXJyYXkoYXJnelswXSkgJiYgIWlzU3RyaW5nKGFyZ3pbMF0pID8gYXJnei5zaGlmdCgpIDogX3N0YXRpYy5zdGF0aWNDb250ZXh0LFxyXG4gICAgICAgICAgICBjZmcgICAgICAgICAgPSBhcmd6WzBdICYmICFpc0FycmF5KGFyZ3pbMF0pICYmICFpc1N0cmluZyhhcmd6WzBdKSA/IGFyZ3ouc2hpZnQoKSA6IHt9LFxyXG4gICAgICAgICAgICBuYW1lICAgICAgICAgPSBpc1N0cmluZyhhcmd6WzBdKSA/IGFyZ3pbMF0gOiBjZmcubmFtZSB8fCBfc3RhdGljLm5hbWUsXHJcbiAgICAgICAgICAgIHdhdGNocyAgICAgICA9IGlzQXJyYXkoYXJnelswXSkgPyBhcmd6LnNoaWZ0KCkgOiBjZmcudXNlIHx8IFtdLC8vIHdhdGNocyBuZWVkIHRvIGJlIGRlZmluZWQgYWZ0ZXIgYWxsIHRoZSBzdG9yZSBhcmUgcmVnaXN0ZXJlZCA6IHNvIHdlIGNhbid0IGRlYWwgd2l0aCBhbnkgXCJzdGF0aWMgdXNlXCIgYXV0b21hdGljbHlcclxuICAgICAgICAgICAgcmVmaW5lICAgICAgID0gaXNGdW5jdGlvbihhcmd6WzBdKSA/IGFyZ3ouc2hpZnQoKSA6IGNmZy5yZWZpbmUgfHwgbnVsbCxcclxuICAgICAgICAgICAgaW5pdGlhbFN0YXRlID0gX3N0YXRpYy5pbml0aWFsU3RhdGU7XHJcblxyXG4gICAgICAgIHRoaXMuX3VpZCAgICAgICAgICA9IGNmZy5fdWlkIHx8IHNob3J0aWQuZ2VuZXJhdGUoKTtcclxuICAgICAgICB0aGlzLl9tYXhMaXN0ZW5lcnMgPSBjZmcuZGVmYXVsdE1heExpc3RlbmVycyB8fCBTdG9yZS5kZWZhdWx0TWF4TGlzdGVuZXJzO1xyXG4gICAgICAgIHRoaXMubG9ja3MgICAgICAgICA9IDA7XHJcbiAgICAgICAgdGhpcy5fb25TdGFiaWxpemUgID0gW107XHJcblxyXG4gICAgICAgIGlmICggaXNTdHJpbmcoYXJnelswXSkgKSB7XHJcbiAgICAgICAgICAgIGlmICggY29udGV4dC5fX2NvbnRleHRbbmFtZV0gKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwiUmVTY29wZTogT3ZlcndyaXRpbmcgYW4gZXhpc3Rpbmcgc3RhdGljIG5hbWVkIHN0b3JlICggJXMgKSAhIVwiLCBuYW1lKTtcclxuICAgICAgICAgICAgY29udGV4dC5fX2NvbnRleHRbbmFtZV0gPSB0aGlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCBjZmcgJiYgY2ZnLm9uICkge1xyXG4gICAgICAgICAgICB0aGlzLm9uKGNmZy5vbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHRoaXMuc3RhdGUgICAgICA9IHRoaXMuc3RhdGUgfHwge307XHJcblxyXG4gICAgICAgIHRoaXMuX3VzZSA9IHdhdGNocztcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG5cclxuICAgICAgICBpZiAoIGNvbnRleHQuc3RvcmVzICkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRleHRPYmogPSBjb250ZXh0O1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRleHQgICAgPSBjb250ZXh0LnN0b3JlcztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRleHRPYmogPSBuZXcgQ29udGV4dChjb250ZXh0KTtcclxuICAgICAgICAgICAgdGhpcy5jb250ZXh0ICAgID0gY29udGV4dC5zdG9yZXM7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgdGhpcy5fc3RhYmxlICA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5fcmV2ICAgICA9IDE7XHJcbiAgICAgICAgdGhpcy5fcmV2cyAgICA9IHt9O1xyXG4gICAgICAgIHRoaXMuc3RvcmVzICAgPSB7fTtcclxuICAgICAgICB0aGlzLl9yZXF1aXJlID0gW107XHJcblxyXG4gICAgICAgIGlmICggX3N0YXRpYy5yZXF1aXJlIClcclxuICAgICAgICAgICAgdGhpcy5fcmVxdWlyZS5wdXNoKC4uLl9zdGF0aWMucmVxdWlyZSk7XHJcbiAgICAgICAgaWYgKCBjZmcucmVxdWlyZSApXHJcbiAgICAgICAgICAgIHRoaXMuX3JlcXVpcmUucHVzaCguLi5jZmcucmVxdWlyZSk7XHJcblxyXG4gICAgICAgIHRoaXMuX2ZvbGxvd2VycyA9IFtdO1xyXG5cclxuICAgICAgICBpZiAoIGNmZy5oYXNPd25Qcm9wZXJ0eShcImRhdGFzXCIpICYmIGNmZy5kYXRhcyAhPT0gdW5kZWZpbmVkIClcclxuICAgICAgICAgICAgdGhpcy5kYXRhcyA9IGNmZy5kYXRhcztcclxuICAgICAgICBpZiAoIGNmZy5oYXNPd25Qcm9wZXJ0eShcInN0YXRlXCIpICYmIGNmZy5zdGF0ZSAhPT0gdW5kZWZpbmVkIClcclxuICAgICAgICAgICAgaW5pdGlhbFN0YXRlID0gY2ZnLnN0YXRlO1xyXG5cclxuICAgICAgICBpZiAoIHJlZmluZSApXHJcbiAgICAgICAgICAgIHRoaXMucmVmaW5lID0gcmVmaW5lO1xyXG5cclxuICAgICAgICBpZiAoICEhdGhpcy5fdXNlICYmIHRoaXMuX3VzZS5sZW5ndGggKSB7Ly8gaWYgdGhlcmUgaW5pdGlhbCB3YXRjaHMgYW55d2F5XHJcbiAgICAgICAgICAgIHRoaXMucHVsbCh0aGlzLl91c2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCBpbml0aWFsU3RhdGUgKSB7Ly8gc3luYyByZWZpbmVcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IHsuLi5pbml0aWFsU3RhdGV9O1xyXG4gICAgICAgICAgICBpZiAoIHRoaXMuaXNDb21wbGV0ZSgpICYmIHRoaXMuZGF0YXMgPT09IHVuZGVmaW5lZCApXHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGFzID0gdGhpcy5yZWZpbmUodGhpcy5kYXRhcywgdGhpcy5zdGF0ZSwgdGhpcy5zdGF0ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3N0YWJsZSA9IHRoaXMuZGF0YXMgIT09IHVuZGVmaW5lZDsvLyBzdGFibGUgaWYgaXQgaGF2ZSBpbml0aWFsIHJlc3VsdCBkYXRhc1xyXG4gICAgICAgICF0aGlzLl9zdGFibGUgJiYgdGhpcy5lbWl0KCd1bnN0YWJsZScsIHRoaXMuc3RhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogT3ZlcnJpZGFibGUgbWV0aG9kIHRvIGtub3cgaWYgYSBzdGF0ZSBjaGFuZ2Ugc2hvdWxkIGJlIHByb3BhZyB0byB0aGUgbGlzdGVuaW5nIHN0b3JlcyAmIGNvbXBvbmVudHNcclxuICAgICAqIElmIHN0YXRpYyBmb2xsb3cgaXMgZGVmaW5lZCwgc2hvdWxkUHJvcGFnIHdpbGwgcmV0dXJuIHRydWUgaWYgYW55IG9mIHRoZSBcImZvbGxvd1wiIGtleXMgd2FzIHVwZGF0ZWRcclxuICAgICAqIElmIG5vdCBpdCB3aWxsIGFsd2F5cyByZXR1cm4gdHJ1ZVxyXG4gICAgICovXHJcbiAgICBzaG91bGRQcm9wYWcoIG5EYXRhcyApIHtcclxuICAgICAgICB2YXIgX3N0YXRpYyA9IHRoaXMuY29uc3RydWN0b3IsIHIsXHJcbiAgICAgICAgICAgIGNEYXRhcyAgPSB0aGlzLmRhdGFzO1xyXG5cclxuICAgICAgICAvLyBpZiAoICFjU3RhdGUgKVxyXG4gICAgICAgIC8vICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICBpZiAoICFjRGF0YXMgJiYgKCFfc3RhdGljLmZvbGxvdyB8fCAhX3N0YXRpYy5mb2xsb3cubGVuZ3RoIHx8XHJcbiAgICAgICAgICAgICAgICBfc3RhdGljLmZvbGxvdyAmJiBfc3RhdGljLmZvbGxvdy5yZWR1Y2UoKCByLCBpICkgPT4gKHIgfHwgbkRhdGFzICYmIG5EYXRhc1tpXSksIGZhbHNlKSkgKVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICAgICAgaWYgKCBpc0FycmF5KF9zdGF0aWMuZm9sbG93KSApXHJcbiAgICAgICAgICAgIF9zdGF0aWMuZm9sbG93LmZvckVhY2goXHJcbiAgICAgICAgICAgICAgICAoIGtleSApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByID0gciB8fCAobkRhdGFzID8gY0RhdGFzW2tleV0gIT09IG5EYXRhc1trZXldIDogY0RhdGFzICYmIGNEYXRhc1trZXldKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIGVsc2UgaWYgKCBfc3RhdGljLmZvbGxvdyA9PT0gJ3N0cmljdCcgKVxyXG4gICAgICAgICAgICByID0gbkRhdGFzID09PSBjRGF0YXM7XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNEYXRhcyAmJiBPYmplY3Qua2V5cyhjRGF0YXMpLmZvckVhY2goXHJcbiAgICAgICAgICAgICAgICAoIGtleSApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByID0gciB8fCAobkRhdGFzID8gY0RhdGFzW2tleV0gIT09IG5EYXRhc1trZXldIDogY0RhdGFzICYmIGNEYXRhc1trZXldKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBuRGF0YXMgJiYgT2JqZWN0LmtleXMobkRhdGFzKS5mb3JFYWNoKFxyXG4gICAgICAgICAgICAgICAgKCBrZXkgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgciA9IHIgfHwgKG5EYXRhcyA/IGNEYXRhc1trZXldICE9PSBuRGF0YXNba2V5XSA6IGNEYXRhcyAmJiBjRGF0YXNba2V5XSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAhIXI7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBPdmVycmlkYWJsZSByZWZpbmVyIC8gcmVtYXBwZXJcclxuICAgICAqIElmIHN0YXRlIG9yIGxhc3RQdWJsaWNTdGF0ZSBhcmUgc2ltcGxlIGhhc2ggbWFwcyByZWZpbmUgd2lsbCByZXR1cm4gey4uLmRhdGFzLCAuLi5zdGF0ZX1cclxuICAgICAqIGlmIG5vdCBpdCB3aWxsIHJldHVybiB0aGUgbGFzdCBwcml2YXRlIHN0YXRlXHJcbiAgICAgKiBAcGFyYW0gZGF0YXNcclxuICAgICAqIEBwYXJhbSBzdGF0ZVxyXG4gICAgICogQHJldHVybnMgeyp9XHJcbiAgICAgKi9cclxuICAgIHJlZmluZSggZGF0YXMsIHN0YXRlLCBjaGFuZ2VzICkge1xyXG4gICAgICAgIHN0YXRlID0gc3RhdGUgfHwgdGhpcy5zdGF0ZTtcclxuXHJcbiAgICAgICAgaWYgKCAhZGF0YXMgfHwgZGF0YXMuX19wcm90b19fICE9PSBvYmpQcm90byB8fCBzdGF0ZS5fX3Byb3RvX18gIT09IG9ialByb3RvIClcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5kYXRhcywgLi4uc3RhdGV9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWJvdW5jZSB0aGlzIHN0b3JlIHByb3BhZ2F0aW9uICggJiByZWR1Y2luZyApXHJcbiAgICAgKiBAcGFyYW0gY2JcclxuICAgICAqL1xyXG4gICAgc3RhYmlsaXplKCBjYiApIHtcclxuICAgICAgICB2YXIgbWUgPSB0aGlzO1xyXG4gICAgICAgIGNiICYmIG1lLm9uY2UoJ3N0YWJsZScsIGNiKTtcclxuICAgICAgICB0aGlzLl9zdGFibGUgJiYgdGhpcy5lbWl0KCd1bnN0YWJsZScsIHRoaXMuc3RhdGUsIHRoaXMuZGF0YXMpO1xyXG5cclxuICAgICAgICBtZS5fc3RhYmxlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGlmICggdGhpcy5fc3RhYmlsaXplciApXHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9zdGFiaWxpemVyKTtcclxuXHJcbiAgICAgICAgdGhpcy5fc3RhYmlsaXplciA9IHNldFRpbWVvdXQoXHJcbiAgICAgICAgICAgIHRoaXMucHVzaC5iaW5kKFxyXG4gICAgICAgICAgICAgICAgdGhpcyxcclxuICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAoKSA9PiB7Ly9AdG9kb1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIG1lLl9zdGFibGUgICAgICAgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3N0YWJpbGl6ZXIgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMucmVsZWFzZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApKTtcclxuICAgIH1cclxuXHJcbiAgICBkaXNwYXRjaCggZXZlbnQgKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUHVsbCBzdG9yZXMgaW4gdGhlIHByaXZhdGUgc3RhdGVcclxuICAgICAqIEBwYXJhbSBzdG9yZXMgIHtBcnJheX0gKHBhc3NlZCB0byBTdG9yZTo6bWFwKSBFeCA6IFtcInNlc3Npb25cIiwgXCJvdGhlck5hbWVkU3RvcmU6a2V5XCIsIG90aGVyU3RvcmUuYXMoXCJvdGhlcktleVwiKV1cclxuICAgICAqL1xyXG4gICAgcHVsbCggc3RvcmVzLCBkb1dhaXQsIG9yaWdpbiApIHtcclxuICAgICAgICBsZXQgaW5pdGlhbE91dHB1dHMgPSBTdG9yZS5tYXAodGhpcywgc3RvcmVzLCB0aGlzLmNvbnRleHRPYmosIG9yaWdpbiwgdHJ1ZSk7XHJcbiAgICAgICAgaWYgKCBkb1dhaXQgKSB7XHJcbiAgICAgICAgICAgIHRoaXMud2FpdCgpO1xyXG4gICAgICAgICAgICBzdG9yZXMuZm9yRWFjaCgoIHMgKSA9PiB0aGlzLmNvbnRleHRbc10gJiYgdGhpcy53YWl0KHRoaXMuY29udGV4dFtzXSkpO1xyXG4gICAgICAgICAgICB0aGlzLnJlbGVhc2UoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGluaXRpYWxPdXRwdXRzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQXBwbHkgcmVmaW5lL3JlbWFwIG9uIHRoZSBwcml2YXRlIHN0YXRlICYgcHVzaCB0aGUgcmVzdWx0aW5nIFwicHVibGljXCIgc3RhdGUgdG8gZm9sbG93ZXJzXHJcbiAgICAgKiBAcGFyYW0gY2JcclxuICAgICAqL1xyXG4gICAgcHVzaCggZGF0YXMsIGZvcmNlLCBjYiApIHtcclxuICAgICAgICBjYiAgICAgICAgICAgID0gZm9yY2UgPT09IHRydWUgPyBjYiA6IGZvcmNlO1xyXG4gICAgICAgIGZvcmNlICAgICAgICAgPSBmb3JjZSA9PT0gdHJ1ZTtcclxuICAgICAgICB2YXIgaSAgICAgICAgID0gMCxcclxuICAgICAgICAgICAgbWUgICAgICAgID0gdGhpcyxcclxuICAgICAgICAgICAgbmV4dFN0YXRlID0gIWRhdGFzICYmIHsuLi50aGlzLnN0YXRlLCAuLi50aGlzLl9jaGFuZ2VzU1d9IHx8IHRoaXMuc3RhdGUsXHJcbiAgICAgICAgICAgIG5leHREYXRhcyA9IGRhdGFzIHx8XHJcbiAgICAgICAgICAgICAgICAodGhpcy5pc0NvbXBsZXRlKG5leHRTdGF0ZSkgPyB0aGlzLnJlZmluZSh0aGlzLmRhdGFzLCBuZXh0U3RhdGUsIHRoaXMuX2NoYW5nZXNTVykgOiB0aGlzLmRhdGFzKTtcclxuXHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBuZXh0U3RhdGU7XHJcbiAgICAgICAgaWYgKCAhZm9yY2UgJiZcclxuICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgKCF0aGlzLmRhdGFzICYmIHRoaXMuZGF0YXMgPT09IG5leHREYXRhcykgfHwgIXRoaXMuc2hvdWxkUHJvcGFnKG5leHREYXRhcylcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBjYiAmJiBjYigpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmRhdGFzID0gbmV4dERhdGFzO1xyXG4gICAgICAgIHRoaXMubG9ja3MrKztcclxuICAgICAgICB0aGlzLnJlbGVhc2UoY2IpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFVwZGF0ZSB0aGUgY3VycmVudCBwcml2YXRlIHN0YXRlICYgcHVzaCBpdCBvbmNlIHRoZSBzdG9yZSBpcyBzdGFibGVcclxuICAgICAqIEBwYXJhbSBwU3RhdGVcclxuICAgICAqIEBwYXJhbSBjYlxyXG4gICAgICovXHJcbiAgICBzZXRTdGF0ZSggcFN0YXRlLCBjYiwgc3luYyApIHtcclxuICAgICAgICB2YXIgaSAgICAgICA9IDAsIGNoYW5nZSxcclxuICAgICAgICAgICAgY2hhbmdlcyA9IHRoaXMuX2NoYW5nZXNTVyA9IHRoaXMuX2NoYW5nZXNTVyB8fCB7fTtcclxuICAgICAgICBmb3IgKCB2YXIgayBpbiBwU3RhdGUgKVxyXG4gICAgICAgICAgICBpZiAoICF0aGlzLnN0YXRlIHx8IHBTdGF0ZS5oYXNPd25Qcm9wZXJ0eShrKVxyXG4gICAgICAgICAgICAgICAgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIHBTdGF0ZVtrXSAhPSB0aGlzLnN0YXRlW2tdXHJcbiAgICAgICAgICAgICAgICAgICAgfHxcclxuICAgICAgICAgICAgICAgICAgICAodGhpcy5zdGF0ZVtrXSAmJiBwU3RhdGVba10gJiYgKHBTdGF0ZVtrXS5fcmV2ICE9IHRoaXMuX3JldnNba10pKS8vIHJldi9oYXNoIHVwZGF0ZVxyXG4gICAgICAgICAgICAgICAgKSApIHtcclxuICAgICAgICAgICAgICAgIGNoYW5nZSAgICAgICAgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcmV2c1trXSA9IHBTdGF0ZVtrXSAmJiBwU3RhdGVba10uX3JldiB8fCB0cnVlO1xyXG4gICAgICAgICAgICAgICAgY2hhbmdlc1trXSAgICA9IHBTdGF0ZVtrXTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIHN5bmMgKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHVzaCgpO1xyXG4gICAgICAgICAgICBjYiAmJiBjYigpO1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoIGNoYW5nZSApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhYmlsaXplKGNiKTtcclxuICAgICAgICAgICAgfSBlbHNlIGNiICYmIGNiKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVXBkYXRlIHRoZSBjdXJyZW50IHByaXZhdGUgc3RhdGUgJiBwdXNoIGl0IG9uY2UgdGhlIHN0b3JlIGlzIHN0YWJsZVxyXG4gICAgICogQHBhcmFtIHBTdGF0ZVxyXG4gICAgICogQHBhcmFtIGNiXHJcbiAgICAgKi9cclxuICAgIHNldFN0YXRlU3luYyggcFN0YXRlICkge1xyXG4gICAgICAgIHZhciBpICAgICAgID0gMCwgY2hhbmdlLFxyXG4gICAgICAgICAgICBjaGFuZ2VzID0gdGhpcy5fY2hhbmdlc1NXID0gdGhpcy5fY2hhbmdlc1NXIHx8IHt9O1xyXG4gICAgICAgIGZvciAoIHZhciBrIGluIHBTdGF0ZSApXHJcbiAgICAgICAgICAgIGlmICggIXRoaXMuc3RhdGUgfHwgcFN0YXRlLmhhc093blByb3BlcnR5KGspXHJcbiAgICAgICAgICAgICAgICAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgcFN0YXRlW2tdICE9IHRoaXMuc3RhdGVba11cclxuICAgICAgICAgICAgICAgICAgICB8fFxyXG4gICAgICAgICAgICAgICAgICAgICh0aGlzLnN0YXRlW2tdICYmIHBTdGF0ZVtrXSAmJiAocFN0YXRlW2tdLl9yZXYgIT0gdGhpcy5fcmV2c1trXSkpLy8gcmV2L2hhc2ggdXBkYXRlXHJcbiAgICAgICAgICAgICAgICApICkge1xyXG4gICAgICAgICAgICAgICAgY2hhbmdlICAgICAgICA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yZXZzW2tdID0gcFN0YXRlW2tdICYmIHBTdGF0ZVtrXS5fcmV2IHx8IHRydWU7XHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VzW2tdICAgID0gcFN0YXRlW2tdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wdXNoKCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXBsYWNlIHRoZSBjdXJyZW50IHByaXZhdGUgc3RhdGUgJiBwdXNoIGl0IG9uY2UgdGhlIHN0b3JlIGlzIHN0YWJsZVxyXG4gICAgICogQHBhcmFtIHBTdGF0ZVxyXG4gICAgICogQHBhcmFtIGNiXHJcbiAgICAgKi9cclxuICAgIHJlcGxhY2VTdGF0ZSggcFN0YXRlLCBjYiApIHtcclxuICAgICAgICB2YXIgaSAgICAgID0gMCwgbWUgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBwU3RhdGU7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhYmlsaXplKGNiKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGdldCBhIHN0b3JlLWtleSBwYWlyIGZvciBTdG9yZTo6bWFwXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxyXG4gICAgICogQHJldHVybnMge3tzdG9yZTogU3RvcmUsIG5hbWU6ICp9fVxyXG4gICAgICovXHJcbiAgICBhcyggbmFtZSApIHtcclxuICAgICAgICByZXR1cm4ge3N0b3JlIDogdGhpcywgbmFtZX07XHJcbiAgICB9XHJcblxyXG4gICAgb24oIGxpc3RzICkge1xyXG4gICAgICAgIGlmICggIWlzU3RyaW5nKGxpc3RzKSAmJiBsaXN0cyApXHJcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGxpc3RzKS5mb3JFYWNoKGsgPT4gc3VwZXIub24oaywgbGlzdHNba10pKTtcclxuICAgICAgICBlbHNlIHN1cGVyLm9uKC4uLmFyZ3VtZW50cyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlTGlzdGVuZXIoIGxpc3RzICkge1xyXG4gICAgICAgIGlmICggIWlzU3RyaW5nKGxpc3RzKSAmJiBsaXN0cyApXHJcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGxpc3RzKS5mb3JFYWNoKGsgPT4gc3VwZXIucmVtb3ZlTGlzdGVuZXIoaywgbGlzdHNba10pKTtcclxuICAgICAgICBlbHNlIHN1cGVyLnJlbW92ZUxpc3RlbmVyKC4uLmFyZ3VtZW50cyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiByZWxpbmsgYmluZGluZ3MgJiByZXF1aXJlc1xyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcclxuICAgICAqIEByZXR1cm5zIHt7c3RvcmU6IFN0b3JlLCBuYW1lOiAqfX1cclxuICAgICAqL1xyXG4gICAgcmVsaW5rKCBmcm9tICkge1xyXG4gICAgICAgIGxldCBjb250ZXh0ID0gdGhpcy5jb250ZXh0T2JqLFxyXG4gICAgICAgICAgICBfc3RhdGljID0gdGhpcy5jb25zdHJ1Y3RvcjtcclxuICAgICAgICBpZiAoIF9zdGF0aWMudXNlICkge1xyXG4gICAgICAgICAgICAvL3RvZG8gdW5saW5rXHJcbiAgICAgICAgICAgIHRoaXMucHVsbChfc3RhdGljLnVzZSwgZmFsc2UsIGZyb20pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCB0aGlzLl9yZXF1aXJlICkge1xyXG4gICAgICAgICAgICB0aGlzLl9yZXF1aXJlLmZvckVhY2goXHJcbiAgICAgICAgICAgICAgICBzdG9yZSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53YWl0KGNvbnRleHQuX19jb250ZXh0W3N0b3JlXSlcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBpcyBjb21wbGV0ZSAoYWxsIHJlcXVpZXJlZCBrZXlzIGFyZSBoZXJlKVxyXG4gICAgICogQHJldHVybnMgYm9vbFxyXG4gICAgICovXHJcbiAgICBpc0NvbXBsZXRlKCBzdGF0ZSA9IHRoaXMuc3RhdGUgKSB7XHJcbiAgICAgICAgdmFyIF9zdGF0aWMgPSB0aGlzLmNvbnN0cnVjdG9yO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICF0aGlzLl9yZXF1aXJlXHJcbiAgICAgICAgICAgIHx8ICF0aGlzLl9yZXF1aXJlLmxlbmd0aFxyXG4gICAgICAgICAgICB8fCBzdGF0ZSAmJiB0aGlzLl9yZXF1aXJlLnJlZHVjZShcclxuICAgICAgICAgICAgICAgICggciwga2V5ICkgPT4gKHIgJiYgc3RhdGVba2V5XSksXHJcbiAgICAgICAgICAgICAgICB0cnVlXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogaXMgc3RhYmxlXHJcbiAgICAgKiBAcmV0dXJucyBib29sXHJcbiAgICAgKi9cclxuICAgIGlzU3RhYmxlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zdGFibGU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBVbiBiaW5kIHRoaXMgc3RvcmUgb2ZmIHRoZSBnaXZlbiBjb21wb25lbnQta2V5XHJcbiAgICAgKiBAcGFyYW0gb2JqXHJcbiAgICAgKiBAcGFyYW0ga2V5XHJcbiAgICAgKiBAcmV0dXJucyB7QXJyYXkuPCo+fVxyXG4gICAgICovXHJcbiAgICB1bkJpbmQoIG9iaiwga2V5ICkge1xyXG4gICAgICAgIHZhciBmb2xsb3dlcnMgPSB0aGlzLl9mb2xsb3dlcnMsXHJcbiAgICAgICAgICAgIGkgICAgICAgICA9IGZvbGxvd2VycyAmJiBmb2xsb3dlcnMubGVuZ3RoO1xyXG4gICAgICAgIHdoaWxlIChmb2xsb3dlcnMgJiYgaS0tKVxyXG4gICAgICAgICAgICBpZiAoIGZvbGxvd2Vyc1tpXVswXSA9PSBvYmogJiYgZm9sbG93ZXJzW2ldWzFdID09IGtleSApXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZm9sbG93ZXJzLnNwbGljZShpLCAxKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEJpbmQgdGhpcyBzdG9yZSBjaGFuZ2VzIHRvIHRoZSBnaXZlbiBjb21wb25lbnQta2V5XHJcbiAgICAgKiBAcGFyYW0gb2JqIHtSZWFjdC5Db21wb25lbnR8U3RvcmV8ZnVuY3Rpb24pXHJcbiAgICAgKiBAcGFyYW0ga2V5IHtzdHJpbmd9IG9wdGlvbmFsIGtleSB3aGVyZSB0byBtYXAgdGhlIHB1YmxpYyBzdGF0ZVxyXG4gICAgICovXHJcbiAgICBiaW5kKCBvYmosIGtleSwgc2V0SW5pdGlhbCA9IHRydWUgKSB7XHJcbiAgICAgICAgdGhpcy5fZm9sbG93ZXJzLnB1c2goW29iaiwga2V5XSk7XHJcbiAgICAgICAgaWYgKCBzZXRJbml0aWFsICYmIHRoaXMuZGF0YXMgJiYgdGhpcy5fc3RhYmxlICkge1xyXG4gICAgICAgICAgICBpZiAoIHR5cGVvZiBvYmogIT0gXCJmdW5jdGlvblwiICkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCBrZXkgKSBvYmouc2V0U3RhdGUoe1trZXldIDogdGhpcy5kYXRhc30pO1xyXG4gICAgICAgICAgICAgICAgZWxzZSBvYmouc2V0U3RhdGUodGhpcy5kYXRhcyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBvYmoodGhpcy5kYXRhcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBvbmNlKCdzdGFibGUnLCBjYilcclxuICAgICAqIEBwYXJhbSBvYmoge1JlYWN0LkNvbXBvbmVudHxTdG9yZXxmdW5jdGlvbilcclxuICAgICAqIEBwYXJhbSBrZXkge3N0cmluZ30gb3B0aW9uYWwga2V5IHdoZXJlIHRvIG1hcCB0aGUgcHVibGljIHN0YXRlXHJcbiAgICAgKi9cclxuICAgIHRoZW4oIGNiICkge1xyXG4gICAgICAgIGlmICggdGhpcy5fc3RhYmxlIClcclxuICAgICAgICAgICAgcmV0dXJuIGNiKG51bGwsIHRoaXMuZGF0YXMpO1xyXG4gICAgICAgIHRoaXMub25jZSgnc3RhYmxlJywgZSA9PiBjYihudWxsLCB0aGlzLmRhdGFzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBZGQgYSBsb2NrIHNvIHRoZSBzdG9yZSB3aWxsIG5vdCBwcm9wYWcgaXQgc3RhdGUgdW50aWxsIHJlbGVhc2UoKSBpcyBjYWxsXHJcbiAgICAgKiBAcGFyYW0gcHJldmlvdXMge1N0b3JlfG51bWJlcnxBcnJheX0gQG9wdGlvbmFsIHdmIHRvIHdhaXQsIHJlbGVhc2VzIHRvIHdhaXQgb3IgYXJyYXkgb2Ygc3R1ZmYgdG8gd2FpdFxyXG4gICAgICogQHJldHVybnMge1Rhc2tGbG93fVxyXG4gICAgICovXHJcbiAgICB3YWl0KCBwcmV2aW91cyApIHtcclxuICAgICAgICBpZiAoIHR5cGVvZiBwcmV2aW91cyA9PSBcIm51bWJlclwiIClcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubG9ja3MgKz0gcHJldmlvdXM7XHJcbiAgICAgICAgaWYgKCBpc0FycmF5KHByZXZpb3VzKSApXHJcbiAgICAgICAgICAgIHJldHVybiBwcmV2aW91cy5tYXAodGhpcy53YWl0LmJpbmQodGhpcykpO1xyXG5cclxuICAgICAgICB0aGlzLl9zdGFibGUgJiYgdGhpcy5lbWl0KCd1bnN0YWJsZScsIHRoaXMuc3RhdGUsIHRoaXMuZGF0YXMpO1xyXG4gICAgICAgIHRoaXMuX3N0YWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubG9ja3MrKztcclxuICAgICAgICBpZiAoIHByZXZpb3VzICYmIGlzRnVuY3Rpb24ocHJldmlvdXMudGhlbikgKSB7XHJcbiAgICAgICAgICAgIHByZXZpb3VzLnRoZW4odGhpcy5yZWxlYXNlLmJpbmQodGhpcywgbnVsbCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIERlY3JlYXNlIGxvY2tzIGZvciB0aGlzIHN0b3JlLCBpZiBpdCByZWFjaCAwICYgaXQgaGF2ZSBhIHB1YmxpYyBzdGF0ZSxcclxuICAgICAqIGl0IHdpbGwgYmUgcHJvcGFnYXRlZCB0byB0aGUgZm9sbG93ZXJzLFxyXG4gICAgICogdGhlbiwgYWxsIHN0dWZmIHBhc3NlZCB0byBcInRoZW5cIiBjYWxsIGJhY2sgd2lsbCBiZSBleGVjIC8gcmVsZWFzZWRcclxuICAgICAqIEBwYXJhbSBkZXN5bmNcclxuICAgICAqIEByZXR1cm5zIHsqfVxyXG4gICAgICovXHJcbiAgICByZWxlYXNlKCBjYiApIHtcclxuICAgICAgICB2YXIgX3N0YXRpYyA9IHRoaXMuY29uc3RydWN0b3I7XHJcbiAgICAgICAgbGV0IGkgICAgICAgPSAwO1xyXG5cclxuICAgICAgICBpZiAoICEtLXRoaXMubG9ja3MgJiYgdGhpcy5kYXRhcyAmJiB0aGlzLmlzQ29tcGxldGUoKSApIHtcclxuICAgICAgICAgICAgdGhpcy5fc3RhYmxlID0gdHJ1ZTtcclxuXHJcblxyXG4gICAgICAgICAgICB0aGlzLl9yZXYgPSAxICsgKHRoaXMuX3JldiArIDEpICUgMTAwMDAwMDsvL1xyXG4gICAgICAgICAgICBpZiAoIHRoaXMuX2ZvbGxvd2Vycy5sZW5ndGggKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5fZm9sbG93ZXJzLmZvckVhY2goKCBmb2xsb3dlciApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoICF0aGlzLmRhdGFzICkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICggdHlwZW9mIGZvbGxvd2VyWzBdID09IFwiZnVuY3Rpb25cIiApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9sbG93ZXJbMF0odGhpcy5kYXRhcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2IgJiYgaSsrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb2xsb3dlclswXS5zZXRTdGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChmb2xsb3dlclsxXSkgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1tmb2xsb3dlclsxXV0gOiB0aGlzLmRhdGFzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNiICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAoKSA9PiAoISgtLWkpICYmIGNiKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmVtaXQoJ3N0YWJsZScsIHRoaXMuZGF0YXMpO1xyXG4gICAgICAgICAgICB0aGlzLmVtaXQoJ3VwZGF0ZScsIHRoaXMuZGF0YXMpO1xyXG4gICAgICAgICAgICBjYiAmJiBjYigpXHJcbiAgICAgICAgfSBlbHNlIGNiICYmIHRoaXMudGhlbihjYik7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgZGVzdHJveSgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5lbWl0KCdkZXN0cm95JywgdGhpcyk7XHJcbiAgICAgICAgaWYgKCB0aGlzLl9zdGFiaWxpemVyIClcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX3N0YWJpbGl6ZXIpO1xyXG4gICAgICAgIHRoaXMuX2ZvbGxvd2Vycy5sZW5ndGggPSAwO1xyXG4gICAgICAgIHRoaXMuZGVhZCAgICAgICAgICAgICAgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuX3JldnMgICAgICAgICAgICAgPSB0aGlzLmRhdGFzID0gdGhpcy5zdGF0ZSA9IHRoaXMuY29udGV4dCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9TdG9yZS5qcyJdLCJzb3VyY2VSb290IjoiIn0=