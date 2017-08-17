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
	            defaultMaxListeners = _ref.defaultMaxListeners;
	
	        _classCallCheck(this, Context);
	
	        var _this = _possibleConstructorReturn(this, (Context.__proto__ || Object.getPrototypeOf(Context)).call(this));
	
	        _this._maxListeners = defaultMaxListeners || Context.defaultMaxListeners;
	        _this._id = id = id || "_____" + shortid.generate();
	
	        if (openContexts[id]) {
	            var _ret;
	
	            openContexts[id].register(ctx);
	            return _ret = openContexts[id], _possibleConstructorReturn(_this, _ret);
	        }
	
	        openContexts[id] = _this;
	        _this._isLocalId = true;
	
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
	
	                this._destroyTM && clearTimeout(this._destroyTM);
	                this._destroyTM = setTimeout(function (e) {
	                    console.log("destroy", _this13._id);
	                    _this13.__retainLocks.all && _this13.destroy();
	                }, 200);
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
	            });
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
	
	            Object.keys(this.__listening).forEach(function (id) {
	                return _this17.__context[id].removeListener(_this17.__listening[id]);
	            });
	            this.__listening = {};
	
	            if (this._isLocalId) delete openContexts[this._id];
	
	            for (var key in ctx) {
	                if (!isFunction(ctx[key])) {
	                    if (ctx[key].context === ctx) ctx[key].destroy();
	
	                    ctx[key] = ctx[key].constructor;
	                }
	            }while (this.__mixedList.length) {
	                this.__mixed[0].removeListener(this.__mixedList.shift());
	                this.__mixed.shift().dispose();
	            }
	            this.parent.removeListener(this.__parentList);
	            this.parent.dispose("isMyParent");
	        }
	    }]);
	
	    return Context;
	}(EventEmitter);
	
	Context.contexts = openContexts;
	Context.Store = null;
	Context.defaultMaxListeners = 20;
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
	
	                    store.unBind(component, alias);
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
	            if (this.name && this.context[this.name] === this) this.context[this.name] = this.constructor;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNTg3ZGNhMWUzY2ExZTViMTcwZmUiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Jlc2NvcGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbnRleHQuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaXNzdHJpbmdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpc2FycmF5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXZlbnRzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaXNmdW5jdGlvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInNob3J0aWRcIiIsIndlYnBhY2s6Ly8vLi9zcmMvU3RvcmUuanMiXSwibmFtZXMiOlsiU3RvcmUiLCJDb250ZXh0IiwiaXNTdHJpbmciLCJyZXF1aXJlIiwiaXNBcnJheSIsIkV2ZW50RW1pdHRlciIsImlzRnVuY3Rpb24iLCJzaG9ydGlkIiwiX19wcm90b19fcHVzaCIsInRhcmdldCIsImlkIiwicGFyZW50IiwiaGVyZSIsInByb3RvdHlwZSIsIm9wZW5Db250ZXh0cyIsImtleSIsImN0eCIsInN0YXRlIiwiZGF0YXMiLCJuYW1lIiwiZGVmYXVsdE1heExpc3RlbmVycyIsIl9tYXhMaXN0ZW5lcnMiLCJfaWQiLCJnZW5lcmF0ZSIsInJlZ2lzdGVyIiwiX2lzTG9jYWxJZCIsInN0b3JlcyIsInNvdXJjZXMiLCJfX3JldGFpbkxvY2tzIiwiYWxsIiwiX193OExvY2tzIiwiX19saXN0ZW5pbmciLCJfX2NvbnRleHQiLCJfX21peGVkIiwiX19taXhlZExpc3QiLCJfZm9sbG93ZXJzIiwicmV0YWluIiwib24iLCJfX3BhcmVudExpc3QiLCJyZWxlYXNlIiwid2FpdCIsIl9wcm9wYWciLCJfc3RhYmxlIiwiZm9yRWFjaCIsIl9tb3VudCIsImsiLCJhcmd1bWVudHMiLCJyZWR1Y2UiLCJtb3VudGVkIiwiY29uc3RydWN0b3IiLCJtb3VudFN0b3JlIiwiaXNTdGFibGUiLCJwcm9wYWciLCJ0YXJnZXRDdHgiLCJsaXN0cyIsInB1c2giLCJyZWxpbmsiLCJyYXdDdHgiLCJPYmplY3QiLCJrZXlzIiwic2luZ2xldG9uIiwic3JjQ3R4IiwiZXh0ZXJuYWwiLCJsY3R4IiwiX3N0b3JlcyIsImNvbnNvbGUiLCJ3YXJuIiwiZGVmaW5lUHJvcGVydHkiLCJnZXQiLCJfc3RhdGUiLCJzZXQiLCJ2IiwiX2RhdGFzIiwidW5kZWZpbmVkIiwib2JqIiwiYXMiLCJzZXRJbml0aWFsIiwibGFzdFJldnMiLCJyZXZzIiwibW91bnQiLCJnZXRVcGRhdGVzIiwic2V0U3RhdGUiLCJmb2xsb3dlcnMiLCJpIiwibGVuZ3RoIiwic3BsaWNlIiwiZG9XYWl0Iiwib3JpZ2luIiwiYmluZCIsIm91dHB1dCIsInVwZGF0ZWQiLCJoYXNPd25Qcm9wZXJ0eSIsIl9yZXYiLCJmbGFnc19zdGF0ZXMiLCJmbGFnc19kYXRhcyIsIl9mbGFnc19zdGF0ZXMiLCJfZmxhZ3NfZGF0YXMiLCJmbGFncyIsInIiLCJmbGFnIiwidGVzdCIsImNiIiwib25jZSIsInF1aWV0IiwicmVhc29uIiwiX2Rlc3Ryb3lUTSIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJsb2ciLCJkZXN0cm95IiwiZW1pdCIsIl9wcm9wYWdUTSIsIl9zdGFiaWxpemVyVE0iLCJyZW1vdmVMaXN0ZW5lciIsImNvbnRleHQiLCJzaGlmdCIsImRpc3Bvc2UiLCJjb250ZXh0cyIsIm9ialByb3RvIiwiZ2V0UHJvdG90eXBlT2YiLCJzdG9yZSIsImNvbXBvbmVudCIsInRhcmdldFJldnMiLCJfcmV2cyIsImluaXRpYWxPdXRwdXRzIiwic3RhdGljQ29udGV4dCIsImZpbHRlciIsImVycm9yIiwiYWxpYXMiLCJkZWZhdWx0TmFtZSIsIm1hdGNoIiwibWl4ZWRDV1VubW91bnQiLCJ1bk1vdW50S2V5IiwiaXNSZWFjdENvbXBvbmVudCIsIm1hcCIsInNwbGl0IiwidW5CaW5kIiwiYXBwbHkiLCJza2V5Iiwic29ydCIsImEiLCJiIiwiZmlyc3RuYW1lIiwiam9pbiIsImNvbnRleHRNYXAiLCJnZXRDb250ZXh0IiwiYXJneiIsIl9zdGF0aWMiLCJjZmciLCJ3YXRjaHMiLCJ1c2UiLCJyZWZpbmUiLCJpbml0aWFsU3RhdGUiLCJfdWlkIiwibG9ja3MiLCJfb25TdGFiaWxpemUiLCJfdXNlIiwiY29udGV4dE9iaiIsIl9yZXF1aXJlIiwicHVsbCIsImlzQ29tcGxldGUiLCJuRGF0YXMiLCJjRGF0YXMiLCJmb2xsb3ciLCJjaGFuZ2VzIiwiX19wcm90b19fIiwibWUiLCJfc3RhYmlsaXplciIsImV2ZW50IiwicyIsImZvcmNlIiwibmV4dFN0YXRlIiwiX2NoYW5nZXNTVyIsIm5leHREYXRhcyIsInNob3VsZFByb3BhZyIsInBTdGF0ZSIsInN5bmMiLCJjaGFuZ2UiLCJzdGFiaWxpemUiLCJmcm9tIiwicHJldmlvdXMiLCJ0aGVuIiwiZm9sbG93ZXIiLCJkZWFkIiwicmVtb3ZlQWxsTGlzdGVuZXJzIiwiYXV0b2tpbGwiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQzVCQTs7OztBQUNBOzs7Ozs7QUFYQTs7Ozs7Ozs7OztBQWFBLG1CQUFRQSxLQUFSOzttQkFFZSxFQUFDQSxzQkFBRCxFQUFRQywwQkFBUixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZmY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtQkE7Ozs7Ozs7QUFRQSxLQUFJQyxXQUFrQixtQkFBQUMsQ0FBUSxDQUFSLENBQXRCO0FBQUEsS0FDSUMsVUFBa0IsbUJBQUFELENBQVEsQ0FBUixDQUR0QjtBQUFBLEtBRUlFLGVBQWtCLG1CQUFBRixDQUFRLENBQVIsQ0FGdEI7QUFBQSxLQUdJRyxhQUFrQixtQkFBQUgsQ0FBUSxD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TCxHQUFlLElBQXREO0FBQ0Esa0JBQUtzRSxrQkFBTDtBQUNIOzs7O0dBN21COEJuTCxZOztBQUFkTCxNLENBRVZzSixHLEdBQXNCLEU7QUFGWnRKLE0sQ0FLVjZILGEsR0FBc0IsSUFBSTVILE9BQUosQ0FBWSxFQUFaLEVBQWdCLEVBQUNTLElBQUssUUFBTixFQUFoQixDO0FBTFpWLE0sQ0FNVndKLFksR0FBc0IvRSxTO0FBTlp6RSxNLENBT1ZvQixtQixHQUFzQixFO0FBUFpwQixNLENBUVZ5TCxRLEdBQXNCLEs7bUJBUlp6TCxLIiwiZmlsZSI6ImRpc3QvUmVzY29wZS5ub2RlcHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNTg3ZGNhMWUzY2ExZTViMTcwZmUiLCIvKlxyXG4gKiBDb3B5cmlnaHQgKGMpICAyMDE3IENhaXBpIExhYnMgLlxyXG4gKlxyXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxyXG4gKlxyXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuICpcclxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXHJcbiAqL1xyXG5cclxuaW1wb3J0IENvbnRleHQgZnJvbSBcIi4vQ29udGV4dFwiO1xyXG5pbXBvcnQgU3RvcmUgZnJvbSBcIi4vU3RvcmVcIjtcclxuXHJcbkNvbnRleHQuU3RvcmUgPSBTdG9yZTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtTdG9yZSwgQ29udGV4dH07XHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvUmVzY29wZS5qcyIsIi8qXHJcbiAqIENvcHlyaWdodCAoYykgMjAxNy4gIENhaXBpIExhYnMuICBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKlxyXG4gKiBUaGlzIEZpbGUgaXMgcGFydCBvZiBDYWlwaS4gWW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxyXG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhc1xyXG4gKiBwdWJsaXNoZWQgYnkgdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGVcclxuICogTGljZW5zZSwgb3IgKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cclxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXHJcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXHJcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcclxuICogR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXHJcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxyXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxyXG4gKiAgVGhpcyBwcm9qZWN0IGlzIGR1YWwgbGljZW5zZWQgdW5kZXIgQUdQTCBhbmQgQ29tbWVyY2lhbCBMaWNlbmNlLlxyXG4gKlxyXG4gKiBAYXV0aG9yIDogTmF0aGFuYWVsIEJyYXVuXHJcbiAqIEBjb250YWN0IDogY2FpcGlsYWJzQGdtYWlsLmNvbVxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBAYXV0aG9yIE5hdGhhbmFlbCBCUkFVTlxyXG4gKlxyXG4gKiBEYXRlOiAxMy8wOC8yMDE3XHJcbiAqIFRpbWU6IDE3OjE1XHJcbiAqL1xyXG5cclxuXHJcbnZhciBpc1N0cmluZyAgICAgICAgPSByZXF1aXJlKCdpc3N0cmluZycpLFxyXG4gICAgaXNBcnJheSAgICAgICAgID0gcmVxdWlyZSgnaXNhcnJheScpLFxyXG4gICAgRXZlbnRFbWl0dGVyICAgID0gcmVxdWlyZSgnZXZlbnRzJyksXHJcbiAgICBpc0Z1bmN0aW9uICAgICAgPSByZXF1aXJlKCdpc2Z1bmN0aW9uJylcclxuICAgICwgc2hvcnRpZCAgICAgICA9IHJlcXVpcmUoJ3Nob3J0aWQnKVxyXG4gICAgLCBfX3Byb3RvX19wdXNoID0gKCB0YXJnZXQsIGlkLCBwYXJlbnQgKSA9PiB7XHJcbiAgICBsZXQgaGVyZSAgICAgICAgICAgPSB7XHJcbiAgICAgICAgW2lkXSA6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgaGVyZVtpZF0ucHJvdG90eXBlID0gcGFyZW50ID8gbmV3IHBhcmVudFtcIl9cIiArIGlkXSgpIDogdGFyZ2V0W2lkXSB8fCB7fTtcclxuICAgIHRhcmdldFtpZF0gICAgICAgICA9IG5ldyBoZXJlW2lkXSgpO1xyXG4gICAgdGFyZ2V0WydfJyArIGlkXSAgID0gaGVyZVtpZF07XHJcbn07XHJcblxyXG5sZXQgb3BlbkNvbnRleHRzID0ge307XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250ZXh0IGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcclxuICAgIHN0YXRpYyBjb250ZXh0cyA9IG9wZW5Db250ZXh0cztcclxuICAgIHN0YXRpYyBTdG9yZSAgICA9IG51bGw7XHJcbiAgICBzdGF0aWMgZGVmYXVsdE1heExpc3RlbmVycyA9IDIwO1xyXG5cclxuICAgIHN0YXRpYyBnZXRDb250ZXh0KCBrZXkgKSB7XHJcbiAgICAgICAgcmV0dXJuIG9wZW5Db250ZXh0c1trZXldID0gb3BlbkNvbnRleHRzW2tleV0gfHwgbmV3IENvbnRleHQoe30pO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciggY3R4LCB7aWQsIHBhcmVudCwgc3RhdGUsIGRhdGFzLCBuYW1lLCBkZWZhdWx0TWF4TGlzdGVuZXJzfSA9IHt9ICkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMuX21heExpc3RlbmVycyA9IGRlZmF1bHRNYXhMaXN0ZW5lcnMgfHwgQ29udGV4dC5kZWZhdWx0TWF4TGlzdGVuZXJzO1xyXG4gICAgICAgIHRoaXMuX2lkID0gaWQgPSBpZCB8fCAoXCJfX19fX1wiICsgc2hvcnRpZC5nZW5lcmF0ZSgpKTtcclxuXHJcbiAgICAgICAgaWYgKCBvcGVuQ29udGV4dHNbaWRdICkge1xyXG4gICAgICAgICAgICBvcGVuQ29udGV4dHNbaWRdLnJlZ2lzdGVyKGN0eCk7XHJcbiAgICAgICAgICAgIHJldHVybiBvcGVuQ29udGV4dHNbaWRdXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBvcGVuQ29udGV4dHNbaWRdID0gdGhpcztcclxuICAgICAgICB0aGlzLl9pc0xvY2FsSWQgID0gdHJ1ZTtcclxuXHJcblxyXG4gICAgICAgIHRoaXMuc3RvcmVzID0ge307XHJcbiAgICAgICAgdGhpcy5zdGF0ZSAgPSB7fTtcclxuICAgICAgICB0aGlzLmRhdGFzICA9IHt9O1xyXG4gICAgICAgIF9fcHJvdG9fX3B1c2godGhpcywgJ3N0b3JlcycsIHBhcmVudCk7XHJcbiAgICAgICAgX19wcm90b19fcHVzaCh0aGlzLCAnc3RhdGUnLCBwYXJlbnQpO1xyXG4gICAgICAgIF9fcHJvdG9fX3B1c2godGhpcywgJ2RhdGFzJywgcGFyZW50KTtcclxuICAgICAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcclxuXHJcbiAgICAgICAgdGhpcy5zb3VyY2VzID0gW107XHJcblxyXG4gICAgICAgIHRoaXMuX19yZXRhaW5Mb2NrcyA9IHthbGwgOiAwfTtcclxuICAgICAgICB0aGlzLl9fdzhMb2NrcyAgICAgPSB7YWxsIDogMX07XHJcbiAgICAgICAgdGhpcy5fX2xpc3RlbmluZyAgID0ge307XHJcbiAgICAgICAgdGhpcy5fX2NvbnRleHQgICAgID0ge307XHJcbiAgICAgICAgdGhpcy5fX21peGVkICAgICAgID0gW107XHJcbiAgICAgICAgdGhpcy5fX21peGVkTGlzdCAgID0gW107XHJcbiAgICAgICAgdGhpcy5fZm9sbG93ZXJzICAgID0gW107XHJcbiAgICAgICAgaWYgKCBwYXJlbnQgKSB7XHJcbiAgICAgICAgICAgIHBhcmVudC5yZXRhaW4oXCJpc015UGFyZW50XCIpO1xyXG4gICAgICAgICAgICBwYXJlbnQub24odGhpcy5fX3BhcmVudExpc3QgPSB7XHJcbiAgICAgICAgICAgICAgICAnc3RhYmxlJyAgIDogcyA9PiB0aGlzLnJlbGVhc2UoXCJpc015UGFyZW50XCIpLFxyXG4gICAgICAgICAgICAgICAgJ3Vuc3RhYmxlJyA6IHMgPT4gdGhpcy53YWl0KFwiaXNNeVBhcmVudFwiKSxcclxuICAgICAgICAgICAgICAgICd1cGRhdGUnICAgOiBzID0+IHRoaXMuX3Byb3BhZygpXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAvLyB0aGlzLnJlZ2lzdGVyKHBhcmVudC5fX2NvbnRleHQsIHN0YXRlLCBkYXRhcyk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgdGhpcy5yZWdpc3RlcihjdHgsIHN0YXRlLCBkYXRhcyk7XHJcbiAgICAgICAgdGhpcy5fX3c4TG9ja3MuYWxsLS07XHJcbiAgICAgICAgdGhpcy5fc3RhYmxlID0gISF0aGlzLl9fdzhMb2Nrcy5hbGw7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG1vdW50KCBpZCwgc3RhdGUsIGRhdGFzICkge1xyXG4gICAgICAgIGlmICggaXNBcnJheShpZCkgKSB7XHJcbiAgICAgICAgICAgIGlkLmZvckVhY2goayA9PiB0aGlzLl9tb3VudChrLCBzdGF0ZSAmJiBzdGF0ZVtrXSwgZGF0YXMgJiYgZGF0YXNba10pKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9tb3VudCguLi5hcmd1bWVudHMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBfbW91bnQoIGlkLCBzdGF0ZSwgZGF0YXMgKSB7XHJcbiAgICAgICAgaWYgKCAhdGhpcy5fX2NvbnRleHRbaWRdICkgey8vYXNrIG1peGVkIHx8IHBhcmVudFxyXG4gICAgICAgICAgICBpZiAoIHRoaXMuX19taXhlZC5yZWR1Y2UoKCBtb3VudGVkLCBjdHggKSA9PiAobW91bnRlZCB8fCBjdHguX21vdW50KGlkLCBzdGF0ZSwgZGF0YXMpKSwgZmFsc2UpIHx8XHJcbiAgICAgICAgICAgICAgICAhdGhpcy5wYXJlbnQgKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJlbnQuX21vdW50KC4uLmFyZ3VtZW50cyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY29uc3RydWN0b3IuU3RvcmUubW91bnRTdG9yZShpZCwgdGhpcywgbnVsbCwgc3RhdGUsIGRhdGFzKTtcclxuXHJcbiAgICAgICAgaWYgKCAhdGhpcy5fX2xpc3RlbmluZ1tpZF0gKSB7XHJcbiAgICAgICAgICAgICF0aGlzLl9fY29udGV4dFtpZF0uaXNTdGFibGUoKSAmJiB0aGlzLndhaXQoaWQpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5fX2NvbnRleHRbaWRdLm9uKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fX2xpc3RlbmluZ1tpZF0gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ3VwZGF0ZScgICA6IHMgPT4gdGhpcy5wcm9wYWcoKSxcclxuICAgICAgICAgICAgICAgICAgICAnc3RhYmxlJyAgIDogcyA9PiB0aGlzLnJlbGVhc2UoaWQpLFxyXG4gICAgICAgICAgICAgICAgICAgICd1bnN0YWJsZScgOiBzID0+IHRoaXMud2FpdChpZClcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5fX2NvbnRleHRbaWRdO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBtaXhpbiggdGFyZ2V0Q3R4ICkge1xyXG4gICAgICAgIGxldCBwYXJlbnQgPSB0aGlzLnBhcmVudCwgbGlzdHM7XHJcbiAgICAgICAgdGhpcy5fX21peGVkLnB1c2godGFyZ2V0Q3R4KVxyXG4gICAgICAgIHRhcmdldEN0eC5yZXRhaW4oKTtcclxuXHJcbiAgICAgICAgdGhpcy5fX21peGVkTGlzdC5wdXNoKGxpc3RzID0ge1xyXG4gICAgICAgICAgICAnc3RhYmxlJyAgIDogcyA9PiB0aGlzLnJlbGVhc2UodGFyZ2V0Q3R4Ll9pZCksXHJcbiAgICAgICAgICAgICd1bnN0YWJsZScgOiBzID0+IHRoaXMud2FpdCh0YXJnZXRDdHguX2lkKSxcclxuICAgICAgICAgICAgJ3VwZGF0ZScgICA6IHMgPT4gdGhpcy5fcHJvcGFnKClcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRhcmdldEN0eC5vbihsaXN0cyk7XHJcbiAgICAgICAgX19wcm90b19fcHVzaCh0aGlzLCAnc3RvcmVzJywgcGFyZW50KTtcclxuICAgICAgICBfX3Byb3RvX19wdXNoKHRoaXMsICdzdGF0ZScsIHBhcmVudCk7XHJcbiAgICAgICAgX19wcm90b19fcHVzaCh0aGlzLCAnZGF0YXMnLCBwYXJlbnQpO1xyXG4gICAgICAgIHRhcmdldEN0eC5yZWxpbmsodGFyZ2V0Q3R4Ll9fY29udGV4dCwgdGhpcywgdHJ1ZSk7XHJcblxyXG4gICAgICAgIF9fcHJvdG9fX3B1c2godGhpcywgJ3N0b3JlcycsIHRoaXMpO1xyXG4gICAgICAgIF9fcHJvdG9fX3B1c2godGhpcywgJ3N0YXRlJywgdGhpcyk7XHJcbiAgICAgICAgX19wcm90b19fcHVzaCh0aGlzLCAnZGF0YXMnLCB0aGlzKTtcclxuICAgICAgICB0aGlzLnJlbGluayh0aGlzLl9fY29udGV4dCwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVnaXN0ZXIoIHJhd0N0eCwgc3RhdGUgPSB7fSwgZGF0YXMgPSB7fSApIHtcclxuICAgICAgICB0aGlzLnJlbGluayhyYXdDdHgsIHRoaXMsIGZhbHNlLCBzdGF0ZSwgZGF0YXMpO1xyXG4gICAgICAgIE9iamVjdC5rZXlzKHJhd0N0eCkuZm9yRWFjaChcclxuICAgICAgICAgICAgaWQgPT4gKGlzRnVuY3Rpb24ocmF3Q3R4W2lkXSkgJiYgcmF3Q3R4W2lkXS5zaW5nbGV0b24gJiYgdGhpcy5fbW91bnQoaWQsIHN0YXRlW2lkXSwgZGF0YXNbaWRdKSkpXHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTWFwIHNyY0N0eCBzdG9yZSdzIG9uIHRhcmdldEN0eCBoZWFkZXJzIHByb3RvJ3NcclxuICAgICAqIEBwYXJhbSBzcmNDdHhcclxuICAgICAqIEBwYXJhbSB0YXJnZXRDdHhcclxuICAgICAqIEBwYXJhbSBzdGF0ZVxyXG4gICAgICogQHBhcmFtIGRhdGFzXHJcbiAgICAgKi9cclxuICAgIHJlbGluayggc3JjQ3R4LCB0YXJnZXRDdHggPSB0aGlzLCBleHRlcm5hbCwgc3RhdGUgPSB7fSwgZGF0YXMgPSB7fSApIHtcclxuICAgICAgICBsZXQgbGN0eCA9IHRhcmdldEN0eC5fc3RvcmVzLnByb3RvdHlwZTtcclxuICAgICAgICBPYmplY3Qua2V5cyhzcmNDdHgpXHJcbiAgICAgICAgICAgIC5mb3JFYWNoKFxyXG4gICAgICAgICAgICAgICAgaWQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICggdGFyZ2V0Q3R4Ll9fY29udGV4dFtpZF0gPT09IHNyY0N0eFtpZF0gfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0Q3R4Ll9fY29udGV4dFtpZF0gJiYgKHRhcmdldEN0eC5fX2NvbnRleHRbaWRdLmNvbnN0cnVjdG9yID09PSBzcmNDdHhbaWRdICkgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICggdGFyZ2V0Q3R4Ll9fY29udGV4dFtpZF0gKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIlJlc2NvcGUgQ29udGV4dCA6IFwiLCBpZCwgXCIgYWxyZWFkeSBleGlzdCBpbiB0aGlzIGNvbnRleHQgIVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoICFleHRlcm5hbCApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX19jb250ZXh0W2lkXSA9IHNyY0N0eFtpZF07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGN0eCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICgoIGN0eCwgaWQgKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0IDogKCkgPT4gdGhpcy5fbW91bnQoaWQsIHN0YXRlW2lkXSwgZGF0YXNbaWRdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5fX2NvbnRleHQsIGlkKVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRDdHguX3N0YXRlLnByb3RvdHlwZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICgoIGN0eCwgaWQgKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0IDogKCkgPT4gKGN0eFtpZF0gJiYgY3R4W2lkXS5zdGF0ZSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0IDogKCB2ICkgPT4gKHRoaXMuX21vdW50KGlkLCB2KSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMuX19jb250ZXh0LCBpZClcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0Q3R4Ll9kYXRhcy5wcm90b3R5cGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoKCBjdHgsIGlkICkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldCA6ICgpID0+IChjdHhbaWRdICYmIGN0eFtpZF0uZGF0YXMpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldCA6ICggdiApID0+ICh0aGlzLl9tb3VudChpZCwgdW5kZWZpbmVkLCB2KSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMuX19jb250ZXh0LCBpZClcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0gb2JqIHtSZWFjdC5Db21wb25lbnR8U3RvcmV8ZnVuY3Rpb24pXHJcbiAgICAgKiBAcGFyYW0ga2V5IHtzdHJpbmd9IG9wdGlvbmFsIGtleSB3aGVyZSB0byBtYXAgdGhlIHB1YmxpYyBzdGF0ZVxyXG4gICAgICovXHJcbiAgICBiaW5kKCBvYmosIGtleSwgYXMsIHNldEluaXRpYWwgPSB0cnVlICkge1xyXG4gICAgICAgIGxldCBsYXN0UmV2cywgZGF0YXM7XHJcbiAgICAgICAgaWYgKCBrZXkgJiYgIWlzQXJyYXkoa2V5KSApXHJcbiAgICAgICAgICAgIGtleSA9IFtrZXldO1xyXG5cclxuICAgICAgICAvLyBrZXkgPSBrZXl8fFxyXG5cclxuICAgICAgICBpZiAoIGFzID09PSB0cnVlICkge1xyXG4gICAgICAgICAgICBzZXRJbml0aWFsID0gdHJ1ZTtcclxuICAgICAgICAgICAgYXMgICAgICAgICA9IG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9mb2xsb3dlcnMucHVzaChcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgb2JqLFxyXG4gICAgICAgICAgICAgICAga2V5LFxyXG4gICAgICAgICAgICAgICAgYXMsXHJcbiAgICAgICAgICAgICAgICBsYXN0UmV2cyA9IGtleSAmJiBrZXkucmVkdWNlKCggcmV2cywgaWQgKSA9PiAocmV2c1tpZF0gPSAwLCByZXZzKSwge30pXHJcbiAgICAgICAgICAgIF0pO1xyXG5cclxuICAgICAgICB0aGlzLm1vdW50KGtleSk7XHJcblxyXG4gICAgICAgIGlmICggc2V0SW5pdGlhbCAmJiB0aGlzLl9zdGFibGUgKSB7XHJcbiAgICAgICAgICAgIGRhdGFzID0gdGhpcy5nZXRVcGRhdGVzKGxhc3RSZXZzKTtcclxuICAgICAgICAgICAgaWYgKCAhZGF0YXMgKSByZXR1cm47XHJcbiAgICAgICAgICAgIGlmICggdHlwZW9mIG9iaiAhPSBcImZ1bmN0aW9uXCIgKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIGFzICkgb2JqLnNldFN0YXRlKHtbYXNdIDogZGF0YXN9KTtcclxuICAgICAgICAgICAgICAgIGVsc2Ugb2JqLnNldFN0YXRlKGRhdGFzKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG9iaihkYXRhcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBVbiBiaW5kIHRoaXMgY29udGV4dCBvZmYgdGhlIGdpdmVuIGNvbXBvbmVudC1rZXlzXHJcbiAgICAgKiBAcGFyYW0gb2JqXHJcbiAgICAgKiBAcGFyYW0ga2V5XHJcbiAgICAgKiBAcmV0dXJucyB7QXJyYXkuPCo+fVxyXG4gICAgICovXHJcbiAgICB1bkJpbmQoIG9iaiwga2V5LCBhcyApIHtcclxuICAgICAgICB2YXIgZm9sbG93ZXJzID0gdGhpcy5fZm9sbG93ZXJzLFxyXG4gICAgICAgICAgICBpICAgICAgICAgPSBmb2xsb3dlcnMgJiYgZm9sbG93ZXJzLmxlbmd0aDtcclxuICAgICAgICB3aGlsZSAoZm9sbG93ZXJzICYmIGktLSlcclxuICAgICAgICAgICAgaWYgKCBmb2xsb3dlcnNbaV1bMF0gPT09IG9iaiAmJiAoJycgKyBmb2xsb3dlcnNbaV1bMV0pID09ICgnJyArIGtleSkgJiZcclxuICAgICAgICAgICAgICAgICgnJyArIGZvbGxvd2Vyc1tpXVsyXSkgPT0gKCcnICsgYXMpIClcclxuICAgICAgICAgICAgICAgIHJldHVybiBmb2xsb3dlcnMuc3BsaWNlKGksIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUHVsbCBzdG9yZXMgaW4gdGhlIHByaXZhdGUgc3RhdGVcclxuICAgICAqIEBwYXJhbSBzdG9yZXMgIHtBcnJheX0gKHBhc3NlZCB0byBTdG9yZTo6bWFwKSBFeCA6IFtcInNlc3Npb25cIiwgXCJvdGhlck5hbWVkU3RvcmU6a2V5XCIsIG90aGVyU3RvcmUuYXMoXCJvdGhlcktleVwiKV1cclxuICAgICAqL1xyXG4gICAgcHVsbCggc3RvcmVzLCBkb1dhaXQsIG9yaWdpbiApIHtcclxuICAgICAgICB0aGlzLm1vdW50KHN0b3Jlcyk7XHJcbiAgICAgICAgdGhpcy5iaW5kKG9yaWdpbiwgc3RvcmVzLCBudWxsLCBmYWxzZSk7XHJcblxyXG4gICAgICAgIHJldHVybiBzdG9yZXMucmVkdWNlKCggZGF0YXMsIGlkICkgPT4gKGRhdGFzW2lkXSA9IHRoaXMuc3RvcmVzW2lkXSAmJiB0aGlzLnN0b3Jlc1tpZF0uZGF0YXMsIGRhdGFzKSwge30pO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFVwZGF0ZXMoIHJldnMsIG91dHB1dCwgdXBkYXRlZCApIHtcclxuICAgICAgICBsZXQgY3R4ID0gdGhpcy5fX2NvbnRleHQ7XHJcblxyXG4gICAgICAgIG91dHB1dCA9IG91dHB1dCB8fCB7fTtcclxuICAgICAgICBPYmplY3Qua2V5cyhjdHgpLmZvckVhY2goXHJcbiAgICAgICAgICAgIGlkID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICggIXJldnMgfHwgISggIXJldnMuaGFzT3duUHJvcGVydHkoaWQpIHx8IGN0eFtpZF0uX3JldiA8PSByZXZzW2lkXSApICkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVkICAgID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBvdXRwdXRbaWRdID0gdGhpcy5kYXRhc1tpZF07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCByZXZzIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV2c1tpZF0gPSBjdHhbaWRdLl9yZXY7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgICAgICB1cGRhdGVkID0gdGhpcy5fX21peGVkLnJlZHVjZSgoIHVwZGF0ZWQsIGN0eCApID0+IChjdHguZ2V0VXBkYXRlcyhyZXZzLCBvdXRwdXQsIHVwZGF0ZWQpIHx8IHVwZGF0ZWQpLCB1cGRhdGVkKTtcclxuICAgICAgICB1cGRhdGVkID0gdGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuZ2V0VXBkYXRlcyhyZXZzLCBvdXRwdXQsIHVwZGF0ZWQpIHx8IHVwZGF0ZWQ7XHJcbiAgICAgICAgcmV0dXJuIHVwZGF0ZWQgJiYgb3V0cHV0O1xyXG4gICAgfVxyXG5cclxuICAgIHNlcmlhbGl6ZSggZmxhZ3Nfc3RhdGVzID0gLy4qLywgZmxhZ3NfZGF0YXMgPSAvLiovICkge1xyXG4gICAgICAgIGxldCBjdHggPSB0aGlzLl9fY29udGV4dCwgb3V0cHV0ID0ge3N0YXRlIDoge30sIGRhdGFzIDoge319LFxyXG4gICAgICAgICAgICBfZmxhZ3Nfc3RhdGVzLFxyXG4gICAgICAgICAgICBfZmxhZ3NfZGF0YXM7XHJcbiAgICAgICAgaWYgKCBpc0FycmF5KGZsYWdzX3N0YXRlcykgKVxyXG4gICAgICAgICAgICBmbGFnc19zdGF0ZXMuZm9yRWFjaChpZCA9PiAob3V0cHV0LnN0YXRlW2lkXSA9IHRoaXMuc3RhdGVbaWRdKSlcclxuXHJcbiAgICAgICAgaWYgKCBpc0FycmF5KGZsYWdzX2RhdGFzKSApXHJcbiAgICAgICAgICAgIGZsYWdzX2RhdGFzLmZvckVhY2goaWQgPT4gKG91dHB1dC5kYXRhc1tpZF0gPSB0aGlzLmRhdGFzW2lkXSkpXHJcblxyXG4gICAgICAgIGlmICggIWlzQXJyYXkoZmxhZ3NfZGF0YXMpICYmICFpc0FycmF5KGZsYWdzX3N0YXRlcykgKVxyXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhjdHgpLmZvckVhY2goXHJcbiAgICAgICAgICAgICAgICBpZCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBpc0Z1bmN0aW9uKGN0eFtpZF0pIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgZmxhZ3MgPSBjdHhbaWRdLmNvbnN0cnVjdG9yLmZsYWdzO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBmbGFncyA9IGlzQXJyYXkoZmxhZ3MpID8gZmxhZ3MgOiBbZmxhZ3MgfHwgXCJcIl07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICggZmxhZ3MucmVkdWNlKCggciwgZmxhZyApID0+IChyIHx8IF9mbGFnc19zdGF0ZXMudGVzdChmbGFnKSksIGZhbHNlKSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dC5zdGF0ZVtpZF0gPSB0aGlzLnN0YXRlW2lkXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBmbGFncy5yZWR1Y2UoKCByLCBmbGFnICkgPT4gKHIgfHwgX2ZsYWdzX2RhdGFzLnRlc3QoZmxhZykpLCBmYWxzZSkgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXQuZGF0YXNbaWRdID0gdGhpcy5kYXRhc1tpZF07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICByZXR1cm4gb3V0cHV0O1xyXG4gICAgfVxyXG5cclxuICAgIG9uKCBsaXN0cyApIHtcclxuXHJcbiAgICAgICAgaWYgKCAhaXNTdHJpbmcobGlzdHMpICYmIGxpc3RzIClcclxuICAgICAgICAgICAgT2JqZWN0LmtleXMobGlzdHMpLmZvckVhY2goayA9PiBzdXBlci5vbihrLCBsaXN0c1trXSkpO1xyXG4gICAgICAgIGVsc2Ugc3VwZXIub24oLi4uYXJndW1lbnRzKTtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVMaXN0ZW5lciggbGlzdHMgKSB7XHJcbiAgICAgICAgaWYgKCAhaXNTdHJpbmcobGlzdHMpICYmIGxpc3RzIClcclxuICAgICAgICAgICAgT2JqZWN0LmtleXMobGlzdHMpLmZvckVhY2goayA9PiBzdXBlci5yZW1vdmVMaXN0ZW5lcihrLCBsaXN0c1trXSkpO1xyXG4gICAgICAgIGVsc2Ugc3VwZXIucmVtb3ZlTGlzdGVuZXIoLi4uYXJndW1lbnRzKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIG9uY2UoJ3N0YWJsZScsIGNiKVxyXG4gICAgICogQHBhcmFtIG9iaiB7UmVhY3QuQ29tcG9uZW50fFN0b3JlfGZ1bmN0aW9uKVxyXG4gICAgICogQHBhcmFtIGtleSB7c3RyaW5nfSBvcHRpb25hbCBrZXkgd2hlcmUgdG8gbWFwIHRoZSBwdWJsaWMgc3RhdGVcclxuICAgICAqL1xyXG4gICAgdGhlbiggY2IgKSB7XHJcbiAgICAgICAgaWYgKCB0aGlzLl9zdGFibGUgKVxyXG4gICAgICAgICAgICByZXR1cm4gY2IobnVsbCwgdGhpcy5kYXRhcyk7XHJcbiAgICAgICAgdGhpcy5vbmNlKCdzdGFibGUnLCBlID0+IGNiKG51bGwsIHRoaXMuZGF0YXMpKTtcclxuICAgIH1cclxuXHJcbiAgICByZXN0b3JlKCB7c3RhdGUsIGRhdGFzfSwgcXVpZXQgKSB7XHJcbiAgICAgICAgbGV0IGN0eCA9IHRoaXMuX19jb250ZXh0O1xyXG4gICAgICAgIE9iamVjdC5rZXlzKGRhdGFzKS5mb3JFYWNoKFxyXG4gICAgICAgICAgICBpZCA9PiB7XHJcbiAgICAgICAgICAgICAgICBxdWlldCA/XHJcbiAgICAgICAgICAgICAgICBjdHguZGF0YXMgPSBkYXRhc1tpZF1cclxuICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICBjdHgucHVzaChkYXRhc1tpZF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgICAgICBPYmplY3Qua2V5cyhzdGF0ZSkuZm9yRWFjaChcclxuICAgICAgICAgICAgaWQgPT4ge1xyXG4gICAgICAgICAgICAgICAgcXVpZXQgP1xyXG4gICAgICAgICAgICAgICAgY3R4LnN0YXRlID0gc3RhdGVbaWRdXHJcbiAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgY3R4LnNldFN0YXRlKHN0YXRlW2lkXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZXRhaW4oIHJlYXNvbiApIHtcclxuICAgICAgICB0aGlzLl9fcmV0YWluTG9ja3MuYWxsKys7XHJcbiAgICAgICAgaWYgKCByZWFzb24gKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX19yZXRhaW5Mb2Nrc1tyZWFzb25dID0gdGhpcy5fX3JldGFpbkxvY2tzW3JlYXNvbl0gfHwgMDtcclxuICAgICAgICAgICAgdGhpcy5fX3JldGFpbkxvY2tzW3JlYXNvbl0rKztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZGlzcG9zZSggcmVhc29uICkge1xyXG4gICAgICAgIHRoaXMuX19yZXRhaW5Mb2Nrcy5hbGwtLTtcclxuICAgICAgICBpZiAoIHJlYXNvbiApIHtcclxuICAgICAgICAgICAgdGhpcy5fX3JldGFpbkxvY2tzW3JlYXNvbl0gPSB0aGlzLl9fcmV0YWluTG9ja3NbcmVhc29uXSB8fCAwO1xyXG4gICAgICAgICAgICB0aGlzLl9fcmV0YWluTG9ja3NbcmVhc29uXS0tO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoICF0aGlzLl9fcmV0YWluTG9ja3MuYWxsICkge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5fZGVzdHJveVRNICYmIGNsZWFyVGltZW91dCh0aGlzLl9kZXN0cm95VE0pO1xyXG4gICAgICAgICAgICB0aGlzLl9kZXN0cm95VE0gPSBzZXRUaW1lb3V0KFxyXG4gICAgICAgICAgICAgICAgZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJkZXN0cm95XCIsIHRoaXMuX2lkKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX19yZXRhaW5Mb2Nrcy5hbGwmJnRoaXMuZGVzdHJveSgpXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgMjAwXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHdhaXQoIHJlYXNvbiApIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIndhaXRcIiwgcmVhc29uKTtcclxuICAgICAgICB0aGlzLl9zdGFibGUgPSBmYWxzZTtcclxuICAgICAgICAhdGhpcy5fX3c4TG9ja3MuYWxsICYmIHRoaXMuZW1pdChcInVuc3RhYmxlXCIsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMuX193OExvY2tzLmFsbCsrO1xyXG4gICAgICAgIGlmICggcmVhc29uICkge1xyXG4gICAgICAgICAgICB0aGlzLl9fdzhMb2Nrc1tyZWFzb25dID0gdGhpcy5fX3c4TG9ja3NbcmVhc29uXSB8fCAwO1xyXG4gICAgICAgICAgICB0aGlzLl9fdzhMb2Nrc1tyZWFzb25dKys7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByb3BhZygpIHtcclxuICAgICAgICB0aGlzLl9wcm9wYWdUTSAmJiBjbGVhclRpbWVvdXQodGhpcy5fcHJvcGFnVE0pO1xyXG4gICAgICAgIHRoaXMuX3Byb3BhZ1RNID0gc2V0VGltZW91dChcclxuICAgICAgICAgICAgZSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9wcm9wYWcoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBfcHJvcGFnKCkge1xyXG4gICAgICAgIGlmICggdGhpcy5fZm9sbG93ZXJzLmxlbmd0aCApXHJcbiAgICAgICAgICAgIHRoaXMuX2ZvbGxvd2Vycy5mb3JFYWNoKCggezAgOiBvYmosIDEgOiBrZXksIDIgOiBhcywgMyA6IGxhc3RSZXZzfSApID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBkYXRhcyA9IHRoaXMuZ2V0VXBkYXRlcyhsYXN0UmV2cyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoICFkYXRhcyApIHJldHVybjtcclxuICAgICAgICAgICAgICAgIGlmICggdHlwZW9mIG9iaiAhPSBcImZ1bmN0aW9uXCIgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBhcyApIG9iai5zZXRTdGF0ZSh7W2FzXSA6IGRhdGFzfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBvYmouc2V0U3RhdGUoZGF0YXMpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBvYmooZGF0YXMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbGFzdFJldnMgJiZcclxuICAgICAgICAgICAgICAgIGtleS5mb3JFYWNoKGlkID0+IChsYXN0UmV2c1tpZF0gPSB0aGlzLl9fY29udGV4dFtpZF0gJiYgdGhpcy5fX2NvbnRleHRbaWRdLl9yZXYgfHwgMCkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmVtaXQoXCJ1cGRhdGVcIiwgdGhpcy5nZXRVcGRhdGVzKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbGVhc2UoIHJlYXNvbiApIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInJlbGVhc2VcIiwgcmVhc29uKTtcclxuICAgICAgICB0aGlzLl9fdzhMb2Nrcy5hbGwtLTtcclxuICAgICAgICBpZiAoIHJlYXNvbiApIHtcclxuICAgICAgICAgICAgdGhpcy5fX3c4TG9ja3NbcmVhc29uXSA9IHRoaXMuX193OExvY2tzW3JlYXNvbl0gfHwgMDtcclxuICAgICAgICAgICAgdGhpcy5fX3c4TG9ja3NbcmVhc29uXS0tO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9zdGFibGUgPSB0cnVlO1xyXG4gICAgICAgIGlmICggIXRoaXMuX193OExvY2tzLmFsbCApIHtcclxuICAgICAgICAgICAgdGhpcy5fc3RhYmlsaXplclRNICYmIGNsZWFyVGltZW91dCh0aGlzLl9zdGFiaWxpemVyVE0pO1xyXG4gICAgICAgICAgICB0aGlzLl9wcm9wYWdUTSAmJiBjbGVhclRpbWVvdXQodGhpcy5fcHJvcGFnVE0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5fc3RhYmlsaXplclRNID0gc2V0VGltZW91dChcclxuICAgICAgICAgICAgICAgIGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICggIXRoaXMuX3N0YWJsZSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9zdGFiaWxpemVyVE0gPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXQoXCJzdGFibGVcIiwgdGhpcyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3Byb3BhZygpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIG9yZGVyIGRlc3Ryb3kgb2YgbG9jYWwgc3RvcmVzXHJcbiAgICAgKi9cclxuICAgIGRlc3Ryb3koKSB7XHJcbiAgICAgICAgbGV0IGN0eCA9IHRoaXMuX19jb250ZXh0O1xyXG5cclxuICAgICAgICBPYmplY3Qua2V5cyhcclxuICAgICAgICAgICAgdGhpcy5fX2xpc3RlbmluZ1xyXG4gICAgICAgICkuZm9yRWFjaChcclxuICAgICAgICAgICAgaWQgPT4gdGhpcy5fX2NvbnRleHRbaWRdLnJlbW92ZUxpc3RlbmVyKHRoaXMuX19saXN0ZW5pbmdbaWRdKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5fX2xpc3RlbmluZyA9IHt9O1xyXG5cclxuICAgICAgICBpZiAoIHRoaXMuX2lzTG9jYWxJZCApXHJcbiAgICAgICAgICAgIGRlbGV0ZSBvcGVuQ29udGV4dHNbdGhpcy5faWRdO1xyXG5cclxuICAgICAgICBmb3IgKCBsZXQga2V5IGluIGN0eCApXHJcbiAgICAgICAgICAgIGlmICggIWlzRnVuY3Rpb24oY3R4W2tleV0pICkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCBjdHhba2V5XS5jb250ZXh0ID09PSBjdHggKVxyXG4gICAgICAgICAgICAgICAgICAgIGN0eFtrZXldLmRlc3Ryb3koKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjdHhba2V5XSA9IGN0eFtrZXldLmNvbnN0cnVjdG9yO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgd2hpbGUgKHRoaXMuX19taXhlZExpc3QubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX19taXhlZFswXS5yZW1vdmVMaXN0ZW5lcih0aGlzLl9fbWl4ZWRMaXN0LnNoaWZ0KCkpO1xyXG4gICAgICAgICAgICB0aGlzLl9fbWl4ZWQuc2hpZnQoKS5kaXNwb3NlKClcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wYXJlbnQucmVtb3ZlTGlzdGVuZXIodGhpcy5fX3BhcmVudExpc3QpO1xyXG4gICAgICAgIHRoaXMucGFyZW50LmRpc3Bvc2UoXCJpc015UGFyZW50XCIpO1xyXG5cclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9Db250ZXh0LmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaXNzdHJpbmdcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJpc3N0cmluZ1wiXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImlzYXJyYXlcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJpc2FycmF5XCJcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXZlbnRzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiZXZlbnRzXCJcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaXNmdW5jdGlvblwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImlzZnVuY3Rpb25cIlxuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzaG9ydGlkXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwic2hvcnRpZFwiXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXHJcbiAqIENvcHlyaWdodCAoYykgIDIwMTcgQ2FpcGkgTGFicyAuXHJcbiAqXHJcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcbiAqXHJcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG4gKlxyXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cclxuICovXHJcblxyXG4vKipcclxuICogVWx0cmEgc2NhbGFibGUgc3RhdGUtYXdhcmUgc3RvcmVcclxuICpcclxuICogQHRvZG8gOiBsb3Qgb2Ygb3B0aW1zLi4uXHJcbiAqL1xyXG5cclxudmFyIGlzU3RyaW5nICAgICA9IHJlcXVpcmUoJ2lzc3RyaW5nJylcclxuICAgICwgaXNBcnJheSAgICA9IHJlcXVpcmUoJ2lzYXJyYXknKVxyXG4gICAgLCBpc0Z1bmN0aW9uID0gcmVxdWlyZSgnaXNmdW5jdGlvbicpXHJcbiAgICAsXHJcbiAgICBDb250ZXh0ICAgICAgPSByZXF1aXJlKCcuL0NvbnRleHQnKSxcclxuICAgIEV2ZW50RW1pdHRlciA9IHJlcXVpcmUoJ2V2ZW50cycpLFxyXG4gICAgc2hvcnRpZCAgICAgID0gcmVxdWlyZSgnc2hvcnRpZCcpLFxyXG4gICAgb2JqUHJvdG8gICAgID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHt9KSxcclxuICAgIG9wZW5Db250ZXh0cyA9IHt9O1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0b3JlIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcclxuXHJcbiAgICBzdGF0aWMgdXNlICAgICAgICAgICAgICAgICA9IFtdOy8vIG92ZXJyaWRhYmxlIGxpc3Qgb2Ygc291cmNlIHN0b3Jlc1xyXG4gICAgc3RhdGljIGZvbGxvdzsvLyBvdmVycmlkYWJsZSBsaXN0IG9mIHN0b3JlIHRoYXQgd2lsbCBhbGxvdyBwdXNoIGlmIHVwZGF0ZWRcclxuICAgIHN0YXRpYyByZXF1aXJlO1xyXG4gICAgc3RhdGljIHN0YXRpY0NvbnRleHQgICAgICAgPSBuZXcgQ29udGV4dCh7fSwge2lkIDogXCJzdGF0aWNcIn0pO1xyXG4gICAgc3RhdGljIGluaXRpYWxTdGF0ZSAgICAgICAgPSB1bmRlZmluZWQ7Ly8gZGVmYXVsdCBzdGF0ZVxyXG4gICAgc3RhdGljIGRlZmF1bHRNYXhMaXN0ZW5lcnMgPSAyMDtcclxuICAgIHN0YXRpYyBhdXRva2lsbCAgICAgICAgICAgID0gZmFsc2U7Ly8gZmFsc2Ugb3IgdG0gd2l0aG91dCBmb2xsb3dlcnNcclxuXHJcbiAgICAvKipcclxuICAgICAqIGdldCBhIEJ1aWxkZXIta2V5IHBhaXIgZm9yIFN0b3JlOjptYXBcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXHJcbiAgICAgKiBAcmV0dXJucyB7e3N0b3JlOiBTdG9yZSwgbmFtZTogKn19XHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBhcyggbmFtZSApIHtcclxuICAgICAgICByZXR1cm4ge3N0b3JlIDogdGhpcywgbmFtZX07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBNYXAgYWxsIG5hbWVkIHN0b3JlcyBpbiB7a2V5c30gdG8gdGhlIHtvYmplY3R9J3Mgc3RhdGVcclxuICAgICAqIEhvb2sgY29tcG9uZW50V2lsbFVubW91bnQgKGZvciByZWFjdCBjb21wKSBvciBkZXN0cm95IHRvIHVuQmluZCB0aGVtIGF1dG9tYXRpY2FsbHlcclxuICAgICAqIEBzdGF0aWNcclxuICAgICAqIEBwYXJhbSBvYmplY3Qge1JlYWN0LkNvbXBvbmVudHxTdG9yZXwuLi59IHRhcmdldCBzdGF0ZSBhd2FyZSBvYmplY3RcclxuICAgICAqIEBwYXJhbSBrZXlzIHtBcnJheX0gRXggOiBbXCJzZXNzaW9uXCIsIFwib3RoZXJTdGF0aWNOYW1lZFN0b3JlOmtleVwiLCBzdG9yZS5hcygnYW5vdGhlcktleScpXVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgbWFwKCBjb21wb25lbnQsIGtleXMsIGNvbnRleHQsIG9yaWdpbiwgc2V0SW5pdGlhbCA9IGZhbHNlICkge1xyXG4gICAgICAgIHZhciB0YXJnZXRSZXZzICAgICA9IGNvbXBvbmVudC5fcmV2cyB8fCB7fTtcclxuICAgICAgICAvLyB2YXIgdGFyZ2V0Q29udGV4dCAgPSBjb21wb25lbnQuc3RvcmVzIHx8IChjb21wb25lbnQuc3RvcmVzID0gbmV3IENvbnRleHQoe30pKTtcclxuICAgICAgICB2YXIgaW5pdGlhbE91dHB1dHMgPSB7fTtcclxuICAgICAgICBrZXlzICAgICAgICAgICAgICAgPSBpc0FycmF5KGtleXMpID8gWy4uLmtleXNdIDogW2tleXNdO1xyXG5cclxuXHJcbiAgICAgICAgY29udGV4dCA9IGNvbnRleHQgfHwgU3RvcmUuc3RhdGljQ29udGV4dDtcclxuXHJcbiAgICAgICAgLy8gaWYgKCF0YXJnZXRDb250ZXh0Ll9fY29udGV4dClcclxuICAgICAgICAvLyAgICAgZGVidWdnZXI7XHJcblxyXG4gICAgICAgIGtleXMgICAgICAgICAgID0ga2V5cy5maWx0ZXIoXHJcbiAgICAgICAgICAgIC8vIEB0b2RvIDogdXNlIHF1ZXJ5IHJlZnNcclxuICAgICAgICAgICAgLy8gKHN0b3JlKShcXC5zdG9yZSkqKFxcWyhcXCp8KHByb3BzKVxcdyspKylcXF0pPyhcXDphbGlhcylcclxuICAgICAgICAgICAgKCBrZXkgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoICFrZXkgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIk5vdCBhIG1hcHBhYmxlIHN0b3JlIGl0ZW0gJ1wiICsga2V5ICsgXCInIGluIFwiICsgb3JpZ2luICsgJyAhIScpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGxldCBuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIGFsaWFzLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0b3JlO1xyXG4gICAgICAgICAgICAgICAgaWYgKCBrZXkuc3RvcmUgJiYga2V5Lm5hbWUgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpYXMgPSBuYW1lID0ga2V5Lm5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RvcmUgPSBrZXkuc3RvcmU7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCBpc0Z1bmN0aW9uKGtleSkgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZSA9IGFsaWFzID0ga2V5Lm5hbWUgfHwga2V5LmRlZmF1bHROYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIHN0b3JlID0ga2V5O1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBrZXkgICA9IGtleS5tYXRjaCgvKFtcXHdfXSspKD86XFw6XFxbKFxcKilcXF0pPyg/OlxcOihcXCopKT8vKTtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lICA9IGtleVswXTtcclxuICAgICAgICAgICAgICAgICAgICBzdG9yZSA9IGNvbnRleHQuX19jb250ZXh0W2tleVswXV07XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpYXMgPSBrZXlbMV0gPT0gJyonID8gbnVsbCA6IGtleVsyXSB8fCBrZXlbMF07Ly8gYWxsb3cgYmluZGluZyBwcm9wcyAgKFsqXSlcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIHRhcmdldFJldnNbbmFtZV0gKSByZXR1cm4gZmFsc2U7Ly8gaWdub3JlIGRibCB1c2VzIGZvciBub3dcclxuICAgICAgICAgICAgICAgIGlmICggIXN0b3JlICkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJOb3QgYSBtYXBwYWJsZSBzdG9yZSBpdGVtICdcIiArIG5hbWUgKyBcIi9cIiArIGFsaWFzICsgXCInIGluIFwiICsgb3JpZ2luICsgJyAhIScsIHN0b3JlKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCBpc0Z1bmN0aW9uKHN0b3JlKSApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdW50U3RvcmUobmFtZSwgY29udGV4dClcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5fX2NvbnRleHRbbmFtZV0uYmluZChjb21wb25lbnQsIGFsaWFzLCBzZXRJbml0aWFsKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBpZiAoIGNvbnRleHQuX19jb250ZXh0W2tleVswXV0uc3RhdGUgKSB7Ly8gZG8gc3luYyBwdXNoIGFmdGVyIGNvbnN0cnVjdG9yXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGNvbnRleHQuX19jb250ZXh0W2tleVswXV0ucHVzaCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RvcmUuYmluZChjb21wb25lbnQsIGFsaWFzLCBzZXRJbml0aWFsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRhcmdldFJldnNbYWxpYXNdID0gdGFyZ2V0UmV2c1thbGlhc10gfHwgdHJ1ZTtcclxuICAgICAgICAgICAgICAgIC8vICF0YXJnZXRDb250ZXh0Ll9fY29udGV4dFthbGlhc10gJiYgdGFyZ2V0Q29udGV4dC5yZWdpc3Rlcih7W2FsaWFzXSA6IGNvbnRleHQuX19jb250ZXh0W25hbWVdfSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIGNvbnRleHQuX19jb250ZXh0W25hbWVdLmhhc093blByb3BlcnR5KCdkYXRhcycpIClcclxuICAgICAgICAgICAgICAgICAgICBpbml0aWFsT3V0cHV0c1thbGlhc10gPSBjb250ZXh0LmRhdGFzW25hbWVdO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICAgIHZhciBtaXhlZENXVW5tb3VudCxcclxuICAgICAgICAgICAgdW5Nb3VudEtleSA9IGNvbXBvbmVudC5pc1JlYWN0Q29tcG9uZW50ID8gXCJjb21wb25lbnRXaWxsVW5tb3VudFwiIDogXCJkZXN0cm95XCI7XHJcblxyXG4gICAgICAgIGlmICggY29tcG9uZW50Lmhhc093blByb3BlcnR5KHVuTW91bnRLZXkpICkge1xyXG4gICAgICAgICAgICBtaXhlZENXVW5tb3VudCA9IGNvbXBvbmVudFt1bk1vdW50S2V5XTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbXBvbmVudFt1bk1vdW50S2V5XSA9IGZ1bmN0aW9uICgpIHsvLyB0b2RvIGhvcFxyXG4gICAgICAgICAgICBkZWxldGUgdGhpc1t1bk1vdW50S2V5XTtcclxuICAgICAgICAgICAgaWYgKCBtaXhlZENXVW5tb3VudCApXHJcbiAgICAgICAgICAgICAgICB0aGlzW3VuTW91bnRLZXldID0gbWl4ZWRDV1VubW91bnQ7XHJcbiAgICAgICAgICAgIGtleXMubWFwKFxyXG4gICAgICAgICAgICAgICAgKCBrZXkgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWFzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9yZTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIGtleS5zdG9yZSAmJiBrZXkubmFtZSApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpYXMgPSBuYW1lID0ga2V5Lm5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlID0ga2V5LnN0b3JlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIGlzRnVuY3Rpb24oa2V5KSApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZSA9IGFsaWFzID0ga2V5Lm5hbWUgfHwga2V5LmRlZmF1bHROYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9yZSA9IGNvbnRleHQuX19jb250ZXh0W25hbWVdO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleSAgID0ga2V5LnNwbGl0KCc6Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUgID0ga2V5WzBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9yZSA9IGNvbnRleHQuX19jb250ZXh0W2tleVswXV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWFzID0ga2V5WzFdIHx8IGtleVswXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHN0b3JlLnVuQmluZChjb21wb25lbnQsIGFsaWFzKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpc1t1bk1vdW50S2V5XSAmJiB0aGlzW3VuTW91bnRLZXldLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gaW5pdGlhbE91dHB1dHM7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldENvbnRleHQoIGNvbnRleHRzICkge1xyXG4gICAgICAgIGxldCBza2V5ID0gaXNBcnJheShjb250ZXh0cykgPyBjb250ZXh0cy5zb3J0KCggYSwgYiApID0+IHtcclxuICAgICAgICAgICAgaWYgKCBhLmZpcnN0bmFtZSA8IGIuZmlyc3RuYW1lICkgcmV0dXJuIC0xO1xyXG4gICAgICAgICAgICBpZiAoIGEuZmlyc3RuYW1lID4gYi5maXJzdG5hbWUgKSByZXR1cm4gMTtcclxuICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgfSkuam9pbignOjonKSA6IGNvbnRleHRzO1xyXG4gICAgICAgIHJldHVybiBDb250ZXh0LmNvbnRleHRzW3NrZXldID0gQ29udGV4dC5jb250ZXh0c1tza2V5XSB8fCBuZXcgQ29udGV4dCh7fSwge2lkIDogc2tleX0pO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBtb3VudFN0b3JlKCBuYW1lLCBjb250ZXh0LCBzdG9yZSwgc3RhdGUsIGRhdGFzICkge1xyXG4gICAgICAgIGxldCBjdHgsIGNvbnRleHRNYXAgPSBjb250ZXh0Ll9fY29udGV4dDtcclxuICAgICAgICBjb250ZXh0TWFwW25hbWVdICAgID0gc3RvcmUgPSBzdG9yZSB8fCBjb250ZXh0TWFwW25hbWVdO1xyXG4gICAgICAgIGlmICggIXN0b3JlICkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiTm90IGEgbWFwcGFibGUgc3RvcmUgaXRlbSAnXCIgKyBuYW1lICsgJyAhIScsIHN0b3JlKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoIGlzRnVuY3Rpb24oc3RvcmUpICkge1xyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICBpZiAoIHN0b3JlICYmIChzdG9yZS5jb250ZXh0cyB8fCBzdG9yZS5jb250ZXh0KSApIHtcclxuICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuZ2V0Q29udGV4dChzdG9yZS5jb250ZXh0cyB8fCBbc3RvcmUuY29udGV4dF0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGN0eC5yZWdpc3Rlcih7W25hbWVdIDogY3R4Ll9fY29udGV4dFtuYW1lXSB8fCBzdG9yZX0pO1xyXG4gICAgICAgICAgICAgICAgY3R4Ll9tb3VudChuYW1lKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjb250ZXh0TWFwW25hbWVdID0gY3R4W25hbWVdO1xyXG4gICAgICAgICAgICB9IGVsc2VcclxuICAgICAgICAgICAgICAgIHN0b3JlID0gY29udGV4dE1hcFtuYW1lXSA9IG5ldyBzdG9yZShjb250ZXh0LCB7c3RhdGUsIGRhdGFzfSk7XHJcbiAgICAgICAgICAgIGNvbnRleHRNYXBbbmFtZV0ucmVsaW5rKG5hbWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICggc3RhdGUgIT09IHVuZGVmaW5lZCAmJiBkYXRhcyA9PT0gdW5kZWZpbmVkIClcclxuICAgICAgICAgICAgICAgIHN0b3JlLnNldFN0YXRlKHN0YXRlKTtcclxuICAgICAgICAgICAgZWxzZSBpZiAoIHN0YXRlICE9PSB1bmRlZmluZWQgKVxyXG4gICAgICAgICAgICAgICAgc3RvcmUuc3RhdGUgPSBzdGF0ZTtcclxuXHJcbiAgICAgICAgICAgIGlmICggZGF0YXMgIT09IHVuZGVmaW5lZCApXHJcbiAgICAgICAgICAgICAgICBzdG9yZS5wdXNoKGRhdGFzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHN0b3JlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29uc3RydWN0b3IsIHdpbGwgYnVpbGQgYSByZXNjb3BlIHN0b3JlXHJcbiAgICAgKlxyXG4gICAgICogKGNvbnRleHQsIHtyZXF1aXJlLHVzZSxyZWZpbmUsc3RhdGUsIGRhdGFzfSlcclxuICAgICAqIChjb250ZXh0KVxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBjb250ZXh0IHtvYmplY3R9IGNvbnRleHQgd2hlcmUgdG8gZmluZCB0aGUgb3RoZXIgc3RvcmVzIChkZWZhdWx0IDogc3RhdGljIHN0YXRpY0NvbnRleHQgKVxyXG4gICAgICogQHBhcmFtIGtleXMge0FycmF5fSAocGFzc2VkIHRvIFN0b3JlOjptYXApIEV4IDogW1wic2Vzc2lvblwiLCBcIm90aGVyTmFtZWRTdG9yZTprZXlcIiwgb3RoZXJTdG9yZS5hcyhcIm90aGVyS2V5XCIpXVxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHZhciBhcmd6ICAgICAgICAgPSBbLi4uYXJndW1lbnRzXSxcclxuICAgICAgICAgICAgX3N0YXRpYyAgICAgID0gdGhpcy5jb25zdHJ1Y3RvcixcclxuICAgICAgICAgICAgY29udGV4dCAgICAgID0gIWlzQXJyYXkoYXJnelswXSkgJiYgIWlzU3RyaW5nKGFyZ3pbMF0pID8gYXJnei5zaGlmdCgpIDogX3N0YXRpYy5zdGF0aWNDb250ZXh0LFxyXG4gICAgICAgICAgICBjZmcgICAgICAgICAgPSBhcmd6WzBdICYmICFpc0FycmF5KGFyZ3pbMF0pICYmICFpc1N0cmluZyhhcmd6WzBdKSA/IGFyZ3ouc2hpZnQoKSA6IHt9LFxyXG4gICAgICAgICAgICBuYW1lICAgICAgICAgPSBpc1N0cmluZyhhcmd6WzBdKSA/IGFyZ3pbMF0gOiBjZmcubmFtZSB8fCBfc3RhdGljLm5hbWUsXHJcbiAgICAgICAgICAgIHdhdGNocyAgICAgICA9IGlzQXJyYXkoYXJnelswXSkgPyBhcmd6LnNoaWZ0KCkgOiBjZmcudXNlIHx8IFtdLC8vIHdhdGNocyBuZWVkIHRvIGJlIGRlZmluZWQgYWZ0ZXIgYWxsIHRoZSBzdG9yZSBhcmUgcmVnaXN0ZXJlZCA6IHNvIHdlIGNhbid0IGRlYWwgd2l0aCBhbnkgXCJzdGF0aWMgdXNlXCIgYXV0b21hdGljbHlcclxuICAgICAgICAgICAgcmVmaW5lICAgICAgID0gaXNGdW5jdGlvbihhcmd6WzBdKSA/IGFyZ3ouc2hpZnQoKSA6IGNmZy5yZWZpbmUgfHwgbnVsbCxcclxuICAgICAgICAgICAgaW5pdGlhbFN0YXRlID0gX3N0YXRpYy5pbml0aWFsU3RhdGU7XHJcblxyXG4gICAgICAgIHRoaXMuX3VpZCAgICAgICAgICA9IGNmZy5fdWlkIHx8IHNob3J0aWQuZ2VuZXJhdGUoKTtcclxuICAgICAgICB0aGlzLl9tYXhMaXN0ZW5lcnMgPSBjZmcuZGVmYXVsdE1heExpc3RlbmVycyB8fCBTdG9yZS5kZWZhdWx0TWF4TGlzdGVuZXJzO1xyXG4gICAgICAgIHRoaXMubG9ja3MgICAgICAgICA9IDA7XHJcbiAgICAgICAgdGhpcy5fb25TdGFiaWxpemUgID0gW107XHJcblxyXG4gICAgICAgIGlmICggaXNTdHJpbmcoYXJnelswXSkgKSB7XHJcbiAgICAgICAgICAgIGlmICggY29udGV4dC5fX2NvbnRleHRbbmFtZV0gKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwiUmVTY29wZTogT3ZlcndyaXRpbmcgYW4gZXhpc3Rpbmcgc3RhdGljIG5hbWVkIHN0b3JlICggJXMgKSAhIVwiLCBuYW1lKTtcclxuICAgICAgICAgICAgY29udGV4dC5fX2NvbnRleHRbbmFtZV0gPSB0aGlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCBjZmcgJiYgY2ZnLm9uICkge1xyXG4gICAgICAgICAgICB0aGlzLm9uKGNmZy5vbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHRoaXMuc3RhdGUgICAgICA9IHRoaXMuc3RhdGUgfHwge307XHJcblxyXG4gICAgICAgIHRoaXMuX3VzZSA9IHdhdGNocztcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG5cclxuICAgICAgICBpZiAoIGNvbnRleHQuc3RvcmVzICkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRleHRPYmogPSBjb250ZXh0O1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRleHQgICAgPSBjb250ZXh0LnN0b3JlcztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRleHRPYmogPSBuZXcgQ29udGV4dChjb250ZXh0KTtcclxuICAgICAgICAgICAgdGhpcy5jb250ZXh0ICAgID0gY29udGV4dC5zdG9yZXM7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgdGhpcy5fc3RhYmxlICA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5fcmV2ICAgICA9IDE7XHJcbiAgICAgICAgdGhpcy5fcmV2cyAgICA9IHt9O1xyXG4gICAgICAgIHRoaXMuc3RvcmVzICAgPSB7fTtcclxuICAgICAgICB0aGlzLl9yZXF1aXJlID0gW107XHJcblxyXG4gICAgICAgIGlmICggX3N0YXRpYy5yZXF1aXJlIClcclxuICAgICAgICAgICAgdGhpcy5fcmVxdWlyZS5wdXNoKC4uLl9zdGF0aWMucmVxdWlyZSk7XHJcbiAgICAgICAgaWYgKCBjZmcucmVxdWlyZSApXHJcbiAgICAgICAgICAgIHRoaXMuX3JlcXVpcmUucHVzaCguLi5jZmcucmVxdWlyZSk7XHJcblxyXG4gICAgICAgIHRoaXMuX2ZvbGxvd2VycyA9IFtdO1xyXG5cclxuICAgICAgICBpZiAoIGNmZy5oYXNPd25Qcm9wZXJ0eShcImRhdGFzXCIpICYmIGNmZy5kYXRhcyAhPT0gdW5kZWZpbmVkIClcclxuICAgICAgICAgICAgdGhpcy5kYXRhcyA9IGNmZy5kYXRhcztcclxuICAgICAgICBpZiAoIGNmZy5oYXNPd25Qcm9wZXJ0eShcInN0YXRlXCIpICYmIGNmZy5zdGF0ZSAhPT0gdW5kZWZpbmVkIClcclxuICAgICAgICAgICAgaW5pdGlhbFN0YXRlID0gY2ZnLnN0YXRlO1xyXG5cclxuICAgICAgICBpZiAoIHJlZmluZSApXHJcbiAgICAgICAgICAgIHRoaXMucmVmaW5lID0gcmVmaW5lO1xyXG5cclxuICAgICAgICBpZiAoICEhdGhpcy5fdXNlICYmIHRoaXMuX3VzZS5sZW5ndGggKSB7Ly8gaWYgdGhlcmUgaW5pdGlhbCB3YXRjaHMgYW55d2F5XHJcbiAgICAgICAgICAgIHRoaXMucHVsbCh0aGlzLl91c2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCBpbml0aWFsU3RhdGUgKSB7Ly8gc3luYyByZWZpbmVcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IHsuLi5pbml0aWFsU3RhdGV9O1xyXG4gICAgICAgICAgICBpZiAoIHRoaXMuaXNDb21wbGV0ZSgpICYmIHRoaXMuZGF0YXMgPT09IHVuZGVmaW5lZCApXHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGFzID0gdGhpcy5yZWZpbmUodGhpcy5kYXRhcywgdGhpcy5zdGF0ZSwgdGhpcy5zdGF0ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3N0YWJsZSA9IHRoaXMuZGF0YXMgIT09IHVuZGVmaW5lZDsvLyBzdGFibGUgaWYgaXQgaGF2ZSBpbml0aWFsIHJlc3VsdCBkYXRhc1xyXG4gICAgICAgICF0aGlzLl9zdGFibGUgJiYgdGhpcy5lbWl0KCd1bnN0YWJsZScsIHRoaXMuc3RhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogT3ZlcnJpZGFibGUgbWV0aG9kIHRvIGtub3cgaWYgYSBzdGF0ZSBjaGFuZ2Ugc2hvdWxkIGJlIHByb3BhZyB0byB0aGUgbGlzdGVuaW5nIHN0b3JlcyAmIGNvbXBvbmVudHNcclxuICAgICAqIElmIHN0YXRpYyBmb2xsb3cgaXMgZGVmaW5lZCwgc2hvdWxkUHJvcGFnIHdpbGwgcmV0dXJuIHRydWUgaWYgYW55IG9mIHRoZSBcImZvbGxvd1wiIGtleXMgd2FzIHVwZGF0ZWRcclxuICAgICAqIElmIG5vdCBpdCB3aWxsIGFsd2F5cyByZXR1cm4gdHJ1ZVxyXG4gICAgICovXHJcbiAgICBzaG91bGRQcm9wYWcoIG5EYXRhcyApIHtcclxuICAgICAgICB2YXIgX3N0YXRpYyA9IHRoaXMuY29uc3RydWN0b3IsIHIsXHJcbiAgICAgICAgICAgIGNEYXRhcyAgPSB0aGlzLmRhdGFzO1xyXG5cclxuICAgICAgICAvLyBpZiAoICFjU3RhdGUgKVxyXG4gICAgICAgIC8vICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICBpZiAoICFjRGF0YXMgJiYgKCFfc3RhdGljLmZvbGxvdyB8fCAhX3N0YXRpYy5mb2xsb3cubGVuZ3RoIHx8XHJcbiAgICAgICAgICAgICAgICBfc3RhdGljLmZvbGxvdyAmJiBfc3RhdGljLmZvbGxvdy5yZWR1Y2UoKCByLCBpICkgPT4gKHIgfHwgbkRhdGFzICYmIG5EYXRhc1tpXSksIGZhbHNlKSkgKVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICAgICAgaWYgKCBpc0FycmF5KF9zdGF0aWMuZm9sbG93KSApXHJcbiAgICAgICAgICAgIF9zdGF0aWMuZm9sbG93LmZvckVhY2goXHJcbiAgICAgICAgICAgICAgICAoIGtleSApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByID0gciB8fCAobkRhdGFzID8gY0RhdGFzW2tleV0gIT09IG5EYXRhc1trZXldIDogY0RhdGFzICYmIGNEYXRhc1trZXldKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIGVsc2UgaWYgKCBfc3RhdGljLmZvbGxvdyA9PT0gJ3N0cmljdCcgKVxyXG4gICAgICAgICAgICByID0gbkRhdGFzID09PSBjRGF0YXM7XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNEYXRhcyAmJiBPYmplY3Qua2V5cyhjRGF0YXMpLmZvckVhY2goXHJcbiAgICAgICAgICAgICAgICAoIGtleSApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByID0gciB8fCAobkRhdGFzID8gY0RhdGFzW2tleV0gIT09IG5EYXRhc1trZXldIDogY0RhdGFzICYmIGNEYXRhc1trZXldKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBuRGF0YXMgJiYgT2JqZWN0LmtleXMobkRhdGFzKS5mb3JFYWNoKFxyXG4gICAgICAgICAgICAgICAgKCBrZXkgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgciA9IHIgfHwgKG5EYXRhcyA/IGNEYXRhc1trZXldICE9PSBuRGF0YXNba2V5XSA6IGNEYXRhcyAmJiBjRGF0YXNba2V5XSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAhIXI7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBPdmVycmlkYWJsZSByZWZpbmVyIC8gcmVtYXBwZXJcclxuICAgICAqIElmIHN0YXRlIG9yIGxhc3RQdWJsaWNTdGF0ZSBhcmUgc2ltcGxlIGhhc2ggbWFwcyByZWZpbmUgd2lsbCByZXR1cm4gey4uLmRhdGFzLCAuLi5zdGF0ZX1cclxuICAgICAqIGlmIG5vdCBpdCB3aWxsIHJldHVybiB0aGUgbGFzdCBwcml2YXRlIHN0YXRlXHJcbiAgICAgKiBAcGFyYW0gZGF0YXNcclxuICAgICAqIEBwYXJhbSBzdGF0ZVxyXG4gICAgICogQHJldHVybnMgeyp9XHJcbiAgICAgKi9cclxuICAgIHJlZmluZSggZGF0YXMsIHN0YXRlLCBjaGFuZ2VzICkge1xyXG4gICAgICAgIHN0YXRlID0gc3RhdGUgfHwgdGhpcy5zdGF0ZTtcclxuXHJcbiAgICAgICAgaWYgKCAhZGF0YXMgfHwgZGF0YXMuX19wcm90b19fICE9PSBvYmpQcm90byB8fCBzdGF0ZS5fX3Byb3RvX18gIT09IG9ialByb3RvIClcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5kYXRhcywgLi4uc3RhdGV9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWJvdW5jZSB0aGlzIHN0b3JlIHByb3BhZ2F0aW9uICggJiByZWR1Y2luZyApXHJcbiAgICAgKiBAcGFyYW0gY2JcclxuICAgICAqL1xyXG4gICAgc3RhYmlsaXplKCBjYiApIHtcclxuICAgICAgICB2YXIgbWUgPSB0aGlzO1xyXG4gICAgICAgIGNiICYmIG1lLm9uY2UoJ3N0YWJsZScsIGNiKTtcclxuICAgICAgICB0aGlzLl9zdGFibGUgJiYgdGhpcy5lbWl0KCd1bnN0YWJsZScsIHRoaXMuc3RhdGUsIHRoaXMuZGF0YXMpO1xyXG5cclxuICAgICAgICBtZS5fc3RhYmxlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGlmICggdGhpcy5fc3RhYmlsaXplciApXHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9zdGFiaWxpemVyKTtcclxuXHJcbiAgICAgICAgdGhpcy5fc3RhYmlsaXplciA9IHNldFRpbWVvdXQoXHJcbiAgICAgICAgICAgIHRoaXMucHVzaC5iaW5kKFxyXG4gICAgICAgICAgICAgICAgdGhpcyxcclxuICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAoKSA9PiB7Ly9AdG9kb1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIG1lLl9zdGFibGUgICAgICAgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3N0YWJpbGl6ZXIgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMucmVsZWFzZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApKTtcclxuICAgIH1cclxuXHJcbiAgICBkaXNwYXRjaCggZXZlbnQgKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUHVsbCBzdG9yZXMgaW4gdGhlIHByaXZhdGUgc3RhdGVcclxuICAgICAqIEBwYXJhbSBzdG9yZXMgIHtBcnJheX0gKHBhc3NlZCB0byBTdG9yZTo6bWFwKSBFeCA6IFtcInNlc3Npb25cIiwgXCJvdGhlck5hbWVkU3RvcmU6a2V5XCIsIG90aGVyU3RvcmUuYXMoXCJvdGhlcktleVwiKV1cclxuICAgICAqL1xyXG4gICAgcHVsbCggc3RvcmVzLCBkb1dhaXQsIG9yaWdpbiApIHtcclxuICAgICAgICBsZXQgaW5pdGlhbE91dHB1dHMgPSBTdG9yZS5tYXAodGhpcywgc3RvcmVzLCB0aGlzLmNvbnRleHRPYmosIG9yaWdpbiwgdHJ1ZSk7XHJcbiAgICAgICAgaWYgKCBkb1dhaXQgKSB7XHJcbiAgICAgICAgICAgIHRoaXMud2FpdCgpO1xyXG4gICAgICAgICAgICBzdG9yZXMuZm9yRWFjaCgoIHMgKSA9PiB0aGlzLmNvbnRleHRbc10gJiYgdGhpcy53YWl0KHRoaXMuY29udGV4dFtzXSkpO1xyXG4gICAgICAgICAgICB0aGlzLnJlbGVhc2UoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGluaXRpYWxPdXRwdXRzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQXBwbHkgcmVmaW5lL3JlbWFwIG9uIHRoZSBwcml2YXRlIHN0YXRlICYgcHVzaCB0aGUgcmVzdWx0aW5nIFwicHVibGljXCIgc3RhdGUgdG8gZm9sbG93ZXJzXHJcbiAgICAgKiBAcGFyYW0gY2JcclxuICAgICAqL1xyXG4gICAgcHVzaCggZGF0YXMsIGZvcmNlLCBjYiApIHtcclxuICAgICAgICBjYiAgICAgICAgICAgID0gZm9yY2UgPT09IHRydWUgPyBjYiA6IGZvcmNlO1xyXG4gICAgICAgIGZvcmNlICAgICAgICAgPSBmb3JjZSA9PT0gdHJ1ZTtcclxuICAgICAgICB2YXIgaSAgICAgICAgID0gMCxcclxuICAgICAgICAgICAgbWUgICAgICAgID0gdGhpcyxcclxuICAgICAgICAgICAgbmV4dFN0YXRlID0gIWRhdGFzICYmIHsuLi50aGlzLnN0YXRlLCAuLi50aGlzLl9jaGFuZ2VzU1d9IHx8IHRoaXMuc3RhdGUsXHJcbiAgICAgICAgICAgIG5leHREYXRhcyA9IGRhdGFzIHx8XHJcbiAgICAgICAgICAgICAgICAodGhpcy5pc0NvbXBsZXRlKG5leHRTdGF0ZSkgPyB0aGlzLnJlZmluZSh0aGlzLmRhdGFzLCBuZXh0U3RhdGUsIHRoaXMuX2NoYW5nZXNTVykgOiB0aGlzLmRhdGFzKTtcclxuXHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBuZXh0U3RhdGU7XHJcbiAgICAgICAgaWYgKCAhZm9yY2UgJiZcclxuICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgKCF0aGlzLmRhdGFzICYmIHRoaXMuZGF0YXMgPT09IG5leHREYXRhcykgfHwgIXRoaXMuc2hvdWxkUHJvcGFnKG5leHREYXRhcylcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBjYiAmJiBjYigpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmRhdGFzID0gbmV4dERhdGFzO1xyXG4gICAgICAgIHRoaXMubG9ja3MrKztcclxuICAgICAgICB0aGlzLnJlbGVhc2UoY2IpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFVwZGF0ZSB0aGUgY3VycmVudCBwcml2YXRlIHN0YXRlICYgcHVzaCBpdCBvbmNlIHRoZSBzdG9yZSBpcyBzdGFibGVcclxuICAgICAqIEBwYXJhbSBwU3RhdGVcclxuICAgICAqIEBwYXJhbSBjYlxyXG4gICAgICovXHJcbiAgICBzZXRTdGF0ZSggcFN0YXRlLCBjYiwgc3luYyApIHtcclxuICAgICAgICB2YXIgaSAgICAgICA9IDAsIGNoYW5nZSxcclxuICAgICAgICAgICAgY2hhbmdlcyA9IHRoaXMuX2NoYW5nZXNTVyA9IHRoaXMuX2NoYW5nZXNTVyB8fCB7fTtcclxuICAgICAgICBmb3IgKCB2YXIgayBpbiBwU3RhdGUgKVxyXG4gICAgICAgICAgICBpZiAoICF0aGlzLnN0YXRlIHx8IHBTdGF0ZS5oYXNPd25Qcm9wZXJ0eShrKVxyXG4gICAgICAgICAgICAgICAgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIHBTdGF0ZVtrXSAhPSB0aGlzLnN0YXRlW2tdXHJcbiAgICAgICAgICAgICAgICAgICAgfHxcclxuICAgICAgICAgICAgICAgICAgICAodGhpcy5zdGF0ZVtrXSAmJiBwU3RhdGVba10gJiYgKHBTdGF0ZVtrXS5fcmV2ICE9IHRoaXMuX3JldnNba10pKS8vIHJldi9oYXNoIHVwZGF0ZVxyXG4gICAgICAgICAgICAgICAgKSApIHtcclxuICAgICAgICAgICAgICAgIGNoYW5nZSAgICAgICAgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcmV2c1trXSA9IHBTdGF0ZVtrXSAmJiBwU3RhdGVba10uX3JldiB8fCB0cnVlO1xyXG4gICAgICAgICAgICAgICAgY2hhbmdlc1trXSAgICA9IHBTdGF0ZVtrXTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIHN5bmMgKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHVzaCgpO1xyXG4gICAgICAgICAgICBjYiAmJiBjYigpO1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoIGNoYW5nZSApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhYmlsaXplKGNiKTtcclxuICAgICAgICAgICAgfSBlbHNlIGNiICYmIGNiKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVXBkYXRlIHRoZSBjdXJyZW50IHByaXZhdGUgc3RhdGUgJiBwdXNoIGl0IG9uY2UgdGhlIHN0b3JlIGlzIHN0YWJsZVxyXG4gICAgICogQHBhcmFtIHBTdGF0ZVxyXG4gICAgICogQHBhcmFtIGNiXHJcbiAgICAgKi9cclxuICAgIHNldFN0YXRlU3luYyggcFN0YXRlICkge1xyXG4gICAgICAgIHZhciBpICAgICAgID0gMCwgY2hhbmdlLFxyXG4gICAgICAgICAgICBjaGFuZ2VzID0gdGhpcy5fY2hhbmdlc1NXID0gdGhpcy5fY2hhbmdlc1NXIHx8IHt9O1xyXG4gICAgICAgIGZvciAoIHZhciBrIGluIHBTdGF0ZSApXHJcbiAgICAgICAgICAgIGlmICggIXRoaXMuc3RhdGUgfHwgcFN0YXRlLmhhc093blByb3BlcnR5KGspXHJcbiAgICAgICAgICAgICAgICAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgcFN0YXRlW2tdICE9IHRoaXMuc3RhdGVba11cclxuICAgICAgICAgICAgICAgICAgICB8fFxyXG4gICAgICAgICAgICAgICAgICAgICh0aGlzLnN0YXRlW2tdICYmIHBTdGF0ZVtrXSAmJiAocFN0YXRlW2tdLl9yZXYgIT0gdGhpcy5fcmV2c1trXSkpLy8gcmV2L2hhc2ggdXBkYXRlXHJcbiAgICAgICAgICAgICAgICApICkge1xyXG4gICAgICAgICAgICAgICAgY2hhbmdlICAgICAgICA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yZXZzW2tdID0gcFN0YXRlW2tdICYmIHBTdGF0ZVtrXS5fcmV2IHx8IHRydWU7XHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VzW2tdICAgID0gcFN0YXRlW2tdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wdXNoKCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXBsYWNlIHRoZSBjdXJyZW50IHByaXZhdGUgc3RhdGUgJiBwdXNoIGl0IG9uY2UgdGhlIHN0b3JlIGlzIHN0YWJsZVxyXG4gICAgICogQHBhcmFtIHBTdGF0ZVxyXG4gICAgICogQHBhcmFtIGNiXHJcbiAgICAgKi9cclxuICAgIHJlcGxhY2VTdGF0ZSggcFN0YXRlLCBjYiApIHtcclxuICAgICAgICB2YXIgaSAgICAgID0gMCwgbWUgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBwU3RhdGU7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhYmlsaXplKGNiKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGdldCBhIHN0b3JlLWtleSBwYWlyIGZvciBTdG9yZTo6bWFwXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxyXG4gICAgICogQHJldHVybnMge3tzdG9yZTogU3RvcmUsIG5hbWU6ICp9fVxyXG4gICAgICovXHJcbiAgICBhcyggbmFtZSApIHtcclxuICAgICAgICByZXR1cm4ge3N0b3JlIDogdGhpcywgbmFtZX07XHJcbiAgICB9XHJcblxyXG4gICAgb24oIGxpc3RzICkge1xyXG4gICAgICAgIGlmICggIWlzU3RyaW5nKGxpc3RzKSAmJiBsaXN0cyApXHJcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGxpc3RzKS5mb3JFYWNoKGsgPT4gc3VwZXIub24oaywgbGlzdHNba10pKTtcclxuICAgICAgICBlbHNlIHN1cGVyLm9uKC4uLmFyZ3VtZW50cyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlTGlzdGVuZXIoIGxpc3RzICkge1xyXG4gICAgICAgIGlmICggIWlzU3RyaW5nKGxpc3RzKSAmJiBsaXN0cyApXHJcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGxpc3RzKS5mb3JFYWNoKGsgPT4gc3VwZXIucmVtb3ZlTGlzdGVuZXIoaywgbGlzdHNba10pKTtcclxuICAgICAgICBlbHNlIHN1cGVyLnJlbW92ZUxpc3RlbmVyKC4uLmFyZ3VtZW50cyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiByZWxpbmsgYmluZGluZ3MgJiByZXF1aXJlc1xyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcclxuICAgICAqIEByZXR1cm5zIHt7c3RvcmU6IFN0b3JlLCBuYW1lOiAqfX1cclxuICAgICAqL1xyXG4gICAgcmVsaW5rKCBmcm9tICkge1xyXG4gICAgICAgIGxldCBjb250ZXh0ID0gdGhpcy5jb250ZXh0T2JqLFxyXG4gICAgICAgICAgICBfc3RhdGljID0gdGhpcy5jb25zdHJ1Y3RvcjtcclxuICAgICAgICBpZiAoIF9zdGF0aWMudXNlICkge1xyXG4gICAgICAgICAgICAvL3RvZG8gdW5saW5rXHJcbiAgICAgICAgICAgIHRoaXMucHVsbChfc3RhdGljLnVzZSwgZmFsc2UsIGZyb20pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCB0aGlzLl9yZXF1aXJlICkge1xyXG4gICAgICAgICAgICB0aGlzLl9yZXF1aXJlLmZvckVhY2goXHJcbiAgICAgICAgICAgICAgICBzdG9yZSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53YWl0KGNvbnRleHQuX19jb250ZXh0W3N0b3JlXSlcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBpcyBjb21wbGV0ZSAoYWxsIHJlcXVpZXJlZCBrZXlzIGFyZSBoZXJlKVxyXG4gICAgICogQHJldHVybnMgYm9vbFxyXG4gICAgICovXHJcbiAgICBpc0NvbXBsZXRlKCBzdGF0ZSA9IHRoaXMuc3RhdGUgKSB7XHJcbiAgICAgICAgdmFyIF9zdGF0aWMgPSB0aGlzLmNvbnN0cnVjdG9yO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICF0aGlzLl9yZXF1aXJlXHJcbiAgICAgICAgICAgIHx8ICF0aGlzLl9yZXF1aXJlLmxlbmd0aFxyXG4gICAgICAgICAgICB8fCBzdGF0ZSAmJiB0aGlzLl9yZXF1aXJlLnJlZHVjZShcclxuICAgICAgICAgICAgICAgICggciwga2V5ICkgPT4gKHIgJiYgc3RhdGVba2V5XSksXHJcbiAgICAgICAgICAgICAgICB0cnVlXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogaXMgc3RhYmxlXHJcbiAgICAgKiBAcmV0dXJucyBib29sXHJcbiAgICAgKi9cclxuICAgIGlzU3RhYmxlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zdGFibGU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBVbiBiaW5kIHRoaXMgc3RvcmUgb2ZmIHRoZSBnaXZlbiBjb21wb25lbnQta2V5XHJcbiAgICAgKiBAcGFyYW0gb2JqXHJcbiAgICAgKiBAcGFyYW0ga2V5XHJcbiAgICAgKiBAcmV0dXJucyB7QXJyYXkuPCo+fVxyXG4gICAgICovXHJcbiAgICB1bkJpbmQoIG9iaiwga2V5ICkge1xyXG4gICAgICAgIHZhciBmb2xsb3dlcnMgPSB0aGlzLl9mb2xsb3dlcnMsXHJcbiAgICAgICAgICAgIGkgICAgICAgICA9IGZvbGxvd2VycyAmJiBmb2xsb3dlcnMubGVuZ3RoO1xyXG4gICAgICAgIHdoaWxlIChmb2xsb3dlcnMgJiYgaS0tKVxyXG4gICAgICAgICAgICBpZiAoIGZvbGxvd2Vyc1tpXVswXSA9PSBvYmogJiYgZm9sbG93ZXJzW2ldWzFdID09IGtleSApXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZm9sbG93ZXJzLnNwbGljZShpLCAxKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEJpbmQgdGhpcyBzdG9yZSBjaGFuZ2VzIHRvIHRoZSBnaXZlbiBjb21wb25lbnQta2V5XHJcbiAgICAgKiBAcGFyYW0gb2JqIHtSZWFjdC5Db21wb25lbnR8U3RvcmV8ZnVuY3Rpb24pXHJcbiAgICAgKiBAcGFyYW0ga2V5IHtzdHJpbmd9IG9wdGlvbmFsIGtleSB3aGVyZSB0byBtYXAgdGhlIHB1YmxpYyBzdGF0ZVxyXG4gICAgICovXHJcbiAgICBiaW5kKCBvYmosIGtleSwgc2V0SW5pdGlhbCA9IHRydWUgKSB7XHJcbiAgICAgICAgdGhpcy5fZm9sbG93ZXJzLnB1c2goW29iaiwga2V5XSk7XHJcbiAgICAgICAgaWYgKCBzZXRJbml0aWFsICYmIHRoaXMuZGF0YXMgJiYgdGhpcy5fc3RhYmxlICkge1xyXG4gICAgICAgICAgICBpZiAoIHR5cGVvZiBvYmogIT0gXCJmdW5jdGlvblwiICkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCBrZXkgKSBvYmouc2V0U3RhdGUoe1trZXldIDogdGhpcy5kYXRhc30pO1xyXG4gICAgICAgICAgICAgICAgZWxzZSBvYmouc2V0U3RhdGUodGhpcy5kYXRhcyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBvYmoodGhpcy5kYXRhcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBvbmNlKCdzdGFibGUnLCBjYilcclxuICAgICAqIEBwYXJhbSBvYmoge1JlYWN0LkNvbXBvbmVudHxTdG9yZXxmdW5jdGlvbilcclxuICAgICAqIEBwYXJhbSBrZXkge3N0cmluZ30gb3B0aW9uYWwga2V5IHdoZXJlIHRvIG1hcCB0aGUgcHVibGljIHN0YXRlXHJcbiAgICAgKi9cclxuICAgIHRoZW4oIGNiICkge1xyXG4gICAgICAgIGlmICggdGhpcy5fc3RhYmxlIClcclxuICAgICAgICAgICAgcmV0dXJuIGNiKG51bGwsIHRoaXMuZGF0YXMpO1xyXG4gICAgICAgIHRoaXMub25jZSgnc3RhYmxlJywgZSA9PiBjYihudWxsLCB0aGlzLmRhdGFzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBZGQgYSBsb2NrIHNvIHRoZSBzdG9yZSB3aWxsIG5vdCBwcm9wYWcgaXQgc3RhdGUgdW50aWxsIHJlbGVhc2UoKSBpcyBjYWxsXHJcbiAgICAgKiBAcGFyYW0gcHJldmlvdXMge1N0b3JlfG51bWJlcnxBcnJheX0gQG9wdGlvbmFsIHdmIHRvIHdhaXQsIHJlbGVhc2VzIHRvIHdhaXQgb3IgYXJyYXkgb2Ygc3R1ZmYgdG8gd2FpdFxyXG4gICAgICogQHJldHVybnMge1Rhc2tGbG93fVxyXG4gICAgICovXHJcbiAgICB3YWl0KCBwcmV2aW91cyApIHtcclxuICAgICAgICBpZiAoIHR5cGVvZiBwcmV2aW91cyA9PSBcIm51bWJlclwiIClcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubG9ja3MgKz0gcHJldmlvdXM7XHJcbiAgICAgICAgaWYgKCBpc0FycmF5KHByZXZpb3VzKSApXHJcbiAgICAgICAgICAgIHJldHVybiBwcmV2aW91cy5tYXAodGhpcy53YWl0LmJpbmQodGhpcykpO1xyXG5cclxuICAgICAgICB0aGlzLl9zdGFibGUgJiYgdGhpcy5lbWl0KCd1bnN0YWJsZScsIHRoaXMuc3RhdGUsIHRoaXMuZGF0YXMpO1xyXG4gICAgICAgIHRoaXMuX3N0YWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubG9ja3MrKztcclxuICAgICAgICBpZiAoIHByZXZpb3VzICYmIGlzRnVuY3Rpb24ocHJldmlvdXMudGhlbikgKSB7XHJcbiAgICAgICAgICAgIHByZXZpb3VzLnRoZW4odGhpcy5yZWxlYXNlLmJpbmQodGhpcywgbnVsbCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIERlY3JlYXNlIGxvY2tzIGZvciB0aGlzIHN0b3JlLCBpZiBpdCByZWFjaCAwICYgaXQgaGF2ZSBhIHB1YmxpYyBzdGF0ZSxcclxuICAgICAqIGl0IHdpbGwgYmUgcHJvcGFnYXRlZCB0byB0aGUgZm9sbG93ZXJzLFxyXG4gICAgICogdGhlbiwgYWxsIHN0dWZmIHBhc3NlZCB0byBcInRoZW5cIiBjYWxsIGJhY2sgd2lsbCBiZSBleGVjIC8gcmVsZWFzZWRcclxuICAgICAqIEBwYXJhbSBkZXN5bmNcclxuICAgICAqIEByZXR1cm5zIHsqfVxyXG4gICAgICovXHJcbiAgICByZWxlYXNlKCBjYiApIHtcclxuICAgICAgICB2YXIgX3N0YXRpYyA9IHRoaXMuY29uc3RydWN0b3I7XHJcbiAgICAgICAgbGV0IGkgICAgICAgPSAwO1xyXG5cclxuICAgICAgICBpZiAoICEtLXRoaXMubG9ja3MgJiYgdGhpcy5kYXRhcyAmJiB0aGlzLmlzQ29tcGxldGUoKSApIHtcclxuICAgICAgICAgICAgdGhpcy5fc3RhYmxlID0gdHJ1ZTtcclxuXHJcblxyXG4gICAgICAgICAgICB0aGlzLl9yZXYgPSAxICsgKHRoaXMuX3JldiArIDEpICUgMTAwMDAwMDsvL1xyXG4gICAgICAgICAgICBpZiAoIHRoaXMuX2ZvbGxvd2Vycy5sZW5ndGggKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5fZm9sbG93ZXJzLmZvckVhY2goKCBmb2xsb3dlciApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoICF0aGlzLmRhdGFzICkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICggdHlwZW9mIGZvbGxvd2VyWzBdID09IFwiZnVuY3Rpb25cIiApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9sbG93ZXJbMF0odGhpcy5kYXRhcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2IgJiYgaSsrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb2xsb3dlclswXS5zZXRTdGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChmb2xsb3dlclsxXSkgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1tmb2xsb3dlclsxXV0gOiB0aGlzLmRhdGFzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNiICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAoKSA9PiAoISgtLWkpICYmIGNiKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmVtaXQoJ3N0YWJsZScsIHRoaXMuZGF0YXMpO1xyXG4gICAgICAgICAgICB0aGlzLmVtaXQoJ3VwZGF0ZScsIHRoaXMuZGF0YXMpO1xyXG4gICAgICAgICAgICBjYiAmJiBjYigpXHJcbiAgICAgICAgfSBlbHNlIGNiICYmIHRoaXMudGhlbihjYik7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgZGVzdHJveSgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5lbWl0KCdkZXN0cm95JywgdGhpcyk7XHJcbiAgICAgICAgaWYgKCB0aGlzLl9zdGFiaWxpemVyIClcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX3N0YWJpbGl6ZXIpO1xyXG4gICAgICAgIHRoaXMuX2ZvbGxvd2Vycy5sZW5ndGggPSAwO1xyXG4gICAgICAgIHRoaXMuZGVhZCAgICAgICAgICAgICAgPSB0cnVlO1xyXG4gICAgICAgIGlmICggdGhpcy5uYW1lICYmIHRoaXMuY29udGV4dFt0aGlzLm5hbWVdID09PSB0aGlzIClcclxuICAgICAgICAgICAgdGhpcy5jb250ZXh0W3RoaXMubmFtZV0gPSB0aGlzLmNvbnN0cnVjdG9yO1xyXG4gICAgICAgIHRoaXMuX3JldnMgPSB0aGlzLmRhdGFzID0gdGhpcy5zdGF0ZSA9IHRoaXMuY29udGV4dCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9TdG9yZS5qcyJdLCJzb3VyY2VSb290IjoiIn0=