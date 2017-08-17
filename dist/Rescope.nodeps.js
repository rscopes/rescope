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
	            name = _ref.name;
	
	        _classCallCheck(this, Context);
	
	        var _this = _possibleConstructorReturn(this, (Context.__proto__ || Object.getPrototypeOf(Context)).call(this));
	
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
	            this.__retainLocks.all--;
	            if (reason) {
	                this.__retainLocks[reason] = this.__retainLocks[reason] || 0;
	                this.__retainLocks[reason]--;
	            }
	            if (!this.__retainLocks.all) this.destroy();
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
	            var _this13 = this;
	
	            this._propagTM && clearTimeout(this._propagTM);
	            this._propagTM = setTimeout(function (e) {
	                _this13._propag();
	            });
	        }
	    }, {
	        key: '_propag',
	        value: function _propag() {
	            var _this14 = this;
	
	            if (this._followers.length) this._followers.forEach(function (_ref3) {
	                var obj = _ref3[0],
	                    key = _ref3[1],
	                    as = _ref3[2],
	                    lastRevs = _ref3[3];
	
	                var datas = _this14.getUpdates(lastRevs);
	                if (!datas) return;
	                if (typeof obj != "function") {
	                    if (as) obj.setState(_defineProperty({}, as, datas));else obj.setState(datas);
	                } else {
	                    obj(datas);
	                }
	                lastRevs && key.forEach(function (id) {
	                    return lastRevs[id] = _this14.__context[id] && _this14.__context[id]._rev || 0;
	                });
	            });
	            this.emit("update", this.getUpdates());
	        }
	    }, {
	        key: 'release',
	        value: function release(reason) {
	            var _this15 = this;
	
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
	                    if (!_this15._stable) return _this15._stabilizerTM = null;
	
	                    _this15.emit("stable", _this15);
	
	                    _this15._propag();
	                });
	            }
	        }
	
	        /**
	         * order destroy of local stores
	         */
	
	    }, {
	        key: 'destroy',
	        value: function destroy() {
	            var _this16 = this;
	
	            var ctx = this.__context;
	
	            Object.keys(this.__listening).forEach(function (id) {
	                return _this16.__context[id].removeListener(_this16.__listening[id]);
	            });
	            this.__listening = {};
	
	            if (this._isLocalId) delete openContexts[this._id];
	
	            for (var key in ctx) {
	                if (!isFunction(ctx[key])) {
	                    if (ctx[key].context === ctx) ctx[key].destroy();
	
	                    ctx[key] = ctx[key].constructor;
	                }
	            }while (this.__mixedList.length) {
	                this.__mixed[0].dispose();
	
	                this.__mixed.shift().removeListener(this.__mixedList.shift());
	            }
	            this.parent.dispose("isMyParent");
	            this.parent.removeListener(this.__parentList);
	        }
	    }]);
	
	    return Context;
	}(EventEmitter);
	
	Context.contexts = openContexts;
	Context.Store = null;
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
	        _this.setMaxListeners(Store.defaultMaxListeners);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNTc3ZTFkODc4ZDQ2YjgwYWU0MDMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Jlc2NvcGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbnRleHQuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaXNzdHJpbmdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpc2FycmF5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXZlbnRzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaXNmdW5jdGlvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInNob3J0aWRcIiIsIndlYnBhY2s6Ly8vLi9zcmMvU3RvcmUuanMiXSwibmFtZXMiOlsiU3RvcmUiLCJDb250ZXh0IiwiaXNTdHJpbmciLCJyZXF1aXJlIiwiaXNBcnJheSIsIkV2ZW50RW1pdHRlciIsImlzRnVuY3Rpb24iLCJzaG9ydGlkIiwiX19wcm90b19fcHVzaCIsInRhcmdldCIsImlkIiwicGFyZW50IiwiaGVyZSIsInByb3RvdHlwZSIsIm9wZW5Db250ZXh0cyIsImtleSIsImN0eCIsInN0YXRlIiwiZGF0YXMiLCJuYW1lIiwiX2lkIiwiZ2VuZXJhdGUiLCJyZWdpc3RlciIsIl9pc0xvY2FsSWQiLCJzdG9yZXMiLCJzb3VyY2VzIiwiX19yZXRhaW5Mb2NrcyIsImFsbCIsIl9fdzhMb2NrcyIsIl9fbGlzdGVuaW5nIiwiX19jb250ZXh0IiwiX19taXhlZCIsIl9fbWl4ZWRMaXN0IiwiX2ZvbGxvd2VycyIsInJldGFpbiIsIm9uIiwiX19wYXJlbnRMaXN0IiwicmVsZWFzZSIsIndhaXQiLCJfcHJvcGFnIiwiX3N0YWJsZSIsImZvckVhY2giLCJfbW91bnQiLCJrIiwiYXJndW1lbnRzIiwicmVkdWNlIiwibW91bnRlZCIsImNvbnN0cnVjdG9yIiwibW91bnRTdG9yZSIsImlzU3RhYmxlIiwicHJvcGFnIiwidGFyZ2V0Q3R4IiwibGlzdHMiLCJwdXNoIiwicmVsaW5rIiwicmF3Q3R4IiwiT2JqZWN0Iiwia2V5cyIsInNpbmdsZXRvbiIsInNyY0N0eCIsImV4dGVybmFsIiwibGN0eCIsIl9zdG9yZXMiLCJjb25zb2xlIiwid2FybiIsImRlZmluZVByb3BlcnR5IiwiZ2V0IiwiX3N0YXRlIiwic2V0IiwidiIsIl9kYXRhcyIsInVuZGVmaW5lZCIsIm9iaiIsImFzIiwic2V0SW5pdGlhbCIsImxhc3RSZXZzIiwicmV2cyIsIm1vdW50IiwiZ2V0VXBkYXRlcyIsInNldFN0YXRlIiwiZm9sbG93ZXJzIiwiaSIsImxlbmd0aCIsInNwbGljZSIsImRvV2FpdCIsIm9yaWdpbiIsImJpbmQiLCJvdXRwdXQiLCJ1cGRhdGVkIiwiaGFzT3duUHJvcGVydHkiLCJfcmV2IiwiZmxhZ3Nfc3RhdGVzIiwiZmxhZ3NfZGF0YXMiLCJfZmxhZ3Nfc3RhdGVzIiwiX2ZsYWdzX2RhdGFzIiwiZmxhZ3MiLCJyIiwiZmxhZyIsInRlc3QiLCJjYiIsIm9uY2UiLCJxdWlldCIsInJlYXNvbiIsImRlc3Ryb3kiLCJsb2ciLCJlbWl0IiwiX3Byb3BhZ1RNIiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsIl9zdGFiaWxpemVyVE0iLCJyZW1vdmVMaXN0ZW5lciIsImNvbnRleHQiLCJkaXNwb3NlIiwic2hpZnQiLCJjb250ZXh0cyIsIm9ialByb3RvIiwiZ2V0UHJvdG90eXBlT2YiLCJzdG9yZSIsImNvbXBvbmVudCIsInRhcmdldFJldnMiLCJfcmV2cyIsImluaXRpYWxPdXRwdXRzIiwic3RhdGljQ29udGV4dCIsImZpbHRlciIsImVycm9yIiwiYWxpYXMiLCJkZWZhdWx0TmFtZSIsIm1hdGNoIiwibWl4ZWRDV1VubW91bnQiLCJ1bk1vdW50S2V5IiwiaXNSZWFjdENvbXBvbmVudCIsIm1hcCIsInNwbGl0IiwidW5CaW5kIiwiYXBwbHkiLCJza2V5Iiwic29ydCIsImEiLCJiIiwiZmlyc3RuYW1lIiwiam9pbiIsImNvbnRleHRNYXAiLCJnZXRDb250ZXh0IiwiYXJneiIsIl9zdGF0aWMiLCJjZmciLCJ3YXRjaHMiLCJ1c2UiLCJyZWZpbmUiLCJpbml0aWFsU3RhdGUiLCJfdWlkIiwic2V0TWF4TGlzdGVuZXJzIiwiZGVmYXVsdE1heExpc3RlbmVycyIsImxvY2tzIiwiX29uU3RhYmlsaXplIiwiX3VzZSIsImNvbnRleHRPYmoiLCJfcmVxdWlyZSIsInB1bGwiLCJpc0NvbXBsZXRlIiwibkRhdGFzIiwiY0RhdGFzIiwiZm9sbG93IiwiY2hhbmdlcyIsIl9fcHJvdG9fXyIsIm1lIiwiX3N0YWJpbGl6ZXIiLCJldmVudCIsInMiLCJmb3JjZSIsIm5leHRTdGF0ZSIsIl9jaGFuZ2VzU1ciLCJuZXh0RGF0YXMiLCJzaG91bGRQcm9wYWciLCJwU3RhdGUiLCJzeW5jIiwiY2hhbmdlIiwic3RhYmlsaXplIiwiZnJvbSIsInByZXZpb3VzIiwidGhlbiIsImZvbGxvd2VyIiwiZGVhZCIsInJlbW92ZUFsbExpc3RlbmVycyIsImF1dG9raWxsIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM1QkE7Ozs7QUFDQTs7Ozs7O0FBWEE7Ozs7Ozs7Ozs7QUFhQSxtQkFBUUEsS0FBUjs7bUJBRWUsRUFBQ0Esc0JBQUQsRUFBUUMsMEJBQVIsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUJBOzs7Ozs7O0FBUUEsS0FBSUMsV0FBa0IsbUJBQUFDLENBQVEsQ0FBUixDQUF0QjtBQUFBLEtBQ0lDLFVBQWtCLG1CQUFBRCxDQUFRLENBQVIsQ0FEdEI7QUFBQSxLQUVJRSxlQUFrQixtQkFBQUYsQ0FBUSxDQUFSLENBRnRCO0FBQUEsS0FHSUcsYUFBa0IsbUJBQUFILENBQVEsQ0FBUixDQUh0QjtB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QUwsQ0FBVSxRQUFWLEVBQW9CLEtBQUt2RixLQUF6QjtBQUNBLHNCQUFLdUYsSUFBTCxDQUFVLFFBQVYsRUFBb0IsS0FBS3ZGLEtBQXpCO0FBQ0FpRix1QkFBTUEsSUFBTjtBQUNILGNBNUJELE1BNEJPQSxNQUFNLEtBQUtpRixJQUFMLENBQVVqRixFQUFWLENBQU47QUFDUCxvQkFBTyxJQUFQO0FBQ0g7OzttQ0FFUzs7QUFFTixrQkFBS00sSUFBTCxDQUFVLFNBQVYsRUFBcUIsSUFBckI7QUFDQSxpQkFBSyxLQUFLNkQsV0FBVixFQUNJM0QsYUFBYSxLQUFLMkQsV0FBbEI7QUFDSixrQkFBS3JJLFVBQUwsQ0FBZ0JpRCxNQUFoQixHQUF5QixDQUF6QjtBQUNBLGtCQUFLb0csSUFBTCxHQUF5QixJQUF6QjtBQUNBLGlCQUFLLEtBQUtuSyxJQUFMLElBQWEsS0FBSzRGLE9BQUwsQ0FBYSxLQUFLNUYsSUFBbEIsTUFBNEIsSUFBOUMsRUFDSSxLQUFLNEYsT0FBTCxDQUFhLEtBQUs1RixJQUFsQixJQUEwQixLQUFLNEIsV0FBL0I7QUFDSixrQkFBS3lFLEtBQUwsR0FBYSxLQUFLdEcsS0FBTCxHQUFhLEtBQUtELEtBQUwsR0FBYSxLQUFLOEYsT0FBTCxHQUFlLElBQXREO0FBQ0Esa0JBQUt3RSxrQkFBTDtBQUNIOzs7O0dBN21COEJsTCxZOztBQUFkTCxNLENBRVZtSixHLEdBQXNCLEU7QUFGWm5KLE0sQ0FLVjBILGEsR0FBc0IsSUFBSXpILE9BQUosQ0FBWSxFQUFaLEVBQWdCLEVBQUNTLElBQUssUUFBTixFQUFoQixDO0FBTFpWLE0sQ0FNVnFKLFksR0FBc0I5RSxTO0FBTlp2RSxNLENBT1Z3SixtQixHQUFzQixFO0FBUFp4SixNLENBUVZ3TCxRLEdBQXNCLEs7bUJBUlp4TCxLIiwiZmlsZSI6ImRpc3QvUmVzY29wZS5ub2RlcHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNTc3ZTFkODc4ZDQ2YjgwYWU0MDMiLCIvKlxyXG4gKiBDb3B5cmlnaHQgKGMpICAyMDE3IENhaXBpIExhYnMgLlxyXG4gKlxyXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxyXG4gKlxyXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuICpcclxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXHJcbiAqL1xyXG5cclxuaW1wb3J0IENvbnRleHQgZnJvbSBcIi4vQ29udGV4dFwiO1xyXG5pbXBvcnQgU3RvcmUgZnJvbSBcIi4vU3RvcmVcIjtcclxuXHJcbkNvbnRleHQuU3RvcmUgPSBTdG9yZTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtTdG9yZSwgQ29udGV4dH07XHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvUmVzY29wZS5qcyIsIi8qXHJcbiAqIENvcHlyaWdodCAoYykgMjAxNy4gIENhaXBpIExhYnMuICBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKlxyXG4gKiBUaGlzIEZpbGUgaXMgcGFydCBvZiBDYWlwaS4gWW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxyXG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhc1xyXG4gKiBwdWJsaXNoZWQgYnkgdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGVcclxuICogTGljZW5zZSwgb3IgKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cclxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXHJcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXHJcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcclxuICogR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXHJcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxyXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxyXG4gKiAgVGhpcyBwcm9qZWN0IGlzIGR1YWwgbGljZW5zZWQgdW5kZXIgQUdQTCBhbmQgQ29tbWVyY2lhbCBMaWNlbmNlLlxyXG4gKlxyXG4gKiBAYXV0aG9yIDogTmF0aGFuYWVsIEJyYXVuXHJcbiAqIEBjb250YWN0IDogY2FpcGlsYWJzQGdtYWlsLmNvbVxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBAYXV0aG9yIE5hdGhhbmFlbCBCUkFVTlxyXG4gKlxyXG4gKiBEYXRlOiAxMy8wOC8yMDE3XHJcbiAqIFRpbWU6IDE3OjE1XHJcbiAqL1xyXG5cclxuXHJcbnZhciBpc1N0cmluZyAgICAgICAgPSByZXF1aXJlKCdpc3N0cmluZycpLFxyXG4gICAgaXNBcnJheSAgICAgICAgID0gcmVxdWlyZSgnaXNhcnJheScpLFxyXG4gICAgRXZlbnRFbWl0dGVyICAgID0gcmVxdWlyZSgnZXZlbnRzJyksXHJcbiAgICBpc0Z1bmN0aW9uICAgICAgPSByZXF1aXJlKCdpc2Z1bmN0aW9uJylcclxuICAgICwgc2hvcnRpZCAgICAgICA9IHJlcXVpcmUoJ3Nob3J0aWQnKVxyXG4gICAgLCBfX3Byb3RvX19wdXNoID0gKCB0YXJnZXQsIGlkLCBwYXJlbnQgKSA9PiB7XHJcbiAgICBsZXQgaGVyZSAgICAgICAgICAgPSB7XHJcbiAgICAgICAgW2lkXSA6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgaGVyZVtpZF0ucHJvdG90eXBlID0gcGFyZW50ID8gbmV3IHBhcmVudFtcIl9cIiArIGlkXSgpIDogdGFyZ2V0W2lkXSB8fCB7fTtcclxuICAgIHRhcmdldFtpZF0gICAgICAgICA9IG5ldyBoZXJlW2lkXSgpO1xyXG4gICAgdGFyZ2V0WydfJyArIGlkXSAgID0gaGVyZVtpZF07XHJcbn07XHJcblxyXG5sZXQgb3BlbkNvbnRleHRzID0ge307XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250ZXh0IGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcclxuICAgIHN0YXRpYyBjb250ZXh0cyA9IG9wZW5Db250ZXh0cztcclxuICAgIHN0YXRpYyBTdG9yZSAgICA9IG51bGw7XHJcblxyXG4gICAgc3RhdGljIGdldENvbnRleHQoIGtleSApIHtcclxuICAgICAgICByZXR1cm4gb3BlbkNvbnRleHRzW2tleV0gPSBvcGVuQ29udGV4dHNba2V5XSB8fCBuZXcgQ29udGV4dCh7fSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCBjdHgsIHtpZCwgcGFyZW50LCBzdGF0ZSwgZGF0YXMsIG5hbWV9ID0ge30gKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy5faWQgPSBpZCA9IGlkIHx8IChcIl9fX19fXCIgKyBzaG9ydGlkLmdlbmVyYXRlKCkpO1xyXG5cclxuICAgICAgICBpZiAoIG9wZW5Db250ZXh0c1tpZF0gKSB7XHJcbiAgICAgICAgICAgIG9wZW5Db250ZXh0c1tpZF0ucmVnaXN0ZXIoY3R4KTtcclxuICAgICAgICAgICAgcmV0dXJuIG9wZW5Db250ZXh0c1tpZF1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG9wZW5Db250ZXh0c1tpZF0gPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuX2lzTG9jYWxJZCAgPSB0cnVlO1xyXG5cclxuXHJcbiAgICAgICAgdGhpcy5zdG9yZXMgPSB7fTtcclxuICAgICAgICB0aGlzLnN0YXRlICA9IHt9O1xyXG4gICAgICAgIHRoaXMuZGF0YXMgID0ge307XHJcbiAgICAgICAgX19wcm90b19fcHVzaCh0aGlzLCAnc3RvcmVzJywgcGFyZW50KTtcclxuICAgICAgICBfX3Byb3RvX19wdXNoKHRoaXMsICdzdGF0ZScsIHBhcmVudCk7XHJcbiAgICAgICAgX19wcm90b19fcHVzaCh0aGlzLCAnZGF0YXMnLCBwYXJlbnQpO1xyXG4gICAgICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xyXG5cclxuICAgICAgICB0aGlzLnNvdXJjZXMgPSBbXTtcclxuXHJcbiAgICAgICAgdGhpcy5fX3JldGFpbkxvY2tzID0ge2FsbCA6IDB9O1xyXG4gICAgICAgIHRoaXMuX193OExvY2tzICAgICA9IHthbGwgOiAxfTtcclxuICAgICAgICB0aGlzLl9fbGlzdGVuaW5nICAgPSB7fTtcclxuICAgICAgICB0aGlzLl9fY29udGV4dCAgICAgPSB7fTtcclxuICAgICAgICB0aGlzLl9fbWl4ZWQgICAgICAgPSBbXTtcclxuICAgICAgICB0aGlzLl9fbWl4ZWRMaXN0ICAgPSBbXTtcclxuICAgICAgICB0aGlzLl9mb2xsb3dlcnMgICAgPSBbXTtcclxuICAgICAgICBpZiAoIHBhcmVudCApIHtcclxuICAgICAgICAgICAgcGFyZW50LnJldGFpbihcImlzTXlQYXJlbnRcIik7XHJcbiAgICAgICAgICAgIHBhcmVudC5vbih0aGlzLl9fcGFyZW50TGlzdCA9IHtcclxuICAgICAgICAgICAgICAgICdzdGFibGUnICAgOiBzID0+IHRoaXMucmVsZWFzZShcImlzTXlQYXJlbnRcIiksXHJcbiAgICAgICAgICAgICAgICAndW5zdGFibGUnIDogcyA9PiB0aGlzLndhaXQoXCJpc015UGFyZW50XCIpLFxyXG4gICAgICAgICAgICAgICAgJ3VwZGF0ZScgICA6IHMgPT4gdGhpcy5fcHJvcGFnKClcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIC8vIHRoaXMucmVnaXN0ZXIocGFyZW50Ll9fY29udGV4dCwgc3RhdGUsIGRhdGFzKTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICB0aGlzLnJlZ2lzdGVyKGN0eCwgc3RhdGUsIGRhdGFzKTtcclxuICAgICAgICB0aGlzLl9fdzhMb2Nrcy5hbGwtLTtcclxuICAgICAgICB0aGlzLl9zdGFibGUgPSAhIXRoaXMuX193OExvY2tzLmFsbDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgbW91bnQoIGlkLCBzdGF0ZSwgZGF0YXMgKSB7XHJcbiAgICAgICAgaWYgKCBpc0FycmF5KGlkKSApIHtcclxuICAgICAgICAgICAgaWQuZm9yRWFjaChrID0+IHRoaXMuX21vdW50KGssIHN0YXRlICYmIHN0YXRlW2tdLCBkYXRhcyAmJiBkYXRhc1trXSkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX21vdW50KC4uLmFyZ3VtZW50cyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIF9tb3VudCggaWQsIHN0YXRlLCBkYXRhcyApIHtcclxuICAgICAgICBpZiAoICF0aGlzLl9fY29udGV4dFtpZF0gKSB7Ly9hc2sgbWl4ZWQgfHwgcGFyZW50XHJcbiAgICAgICAgICAgIGlmICggdGhpcy5fX21peGVkLnJlZHVjZSgoIG1vdW50ZWQsIGN0eCApID0+IChtb3VudGVkIHx8IGN0eC5fbW91bnQoaWQsIHN0YXRlLCBkYXRhcykpLCBmYWxzZSkgfHxcclxuICAgICAgICAgICAgICAgICF0aGlzLnBhcmVudCApXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcmVudC5fbW91bnQoLi4uYXJndW1lbnRzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jb25zdHJ1Y3Rvci5TdG9yZS5tb3VudFN0b3JlKGlkLCB0aGlzLCBudWxsLCBzdGF0ZSwgZGF0YXMpO1xyXG5cclxuICAgICAgICBpZiAoICF0aGlzLl9fbGlzdGVuaW5nW2lkXSApIHtcclxuICAgICAgICAgICAgIXRoaXMuX19jb250ZXh0W2lkXS5pc1N0YWJsZSgpICYmIHRoaXMud2FpdChpZCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9fY29udGV4dFtpZF0ub24oXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9fbGlzdGVuaW5nW2lkXSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAndXBkYXRlJyAgIDogcyA9PiB0aGlzLnByb3BhZygpLFxyXG4gICAgICAgICAgICAgICAgICAgICdzdGFibGUnICAgOiBzID0+IHRoaXMucmVsZWFzZShpZCksXHJcbiAgICAgICAgICAgICAgICAgICAgJ3Vuc3RhYmxlJyA6IHMgPT4gdGhpcy53YWl0KGlkKVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLl9fY29udGV4dFtpZF07XHJcbiAgICB9XHJcblxyXG5cclxuICAgIG1peGluKCB0YXJnZXRDdHggKSB7XHJcbiAgICAgICAgbGV0IHBhcmVudCA9IHRoaXMucGFyZW50LCBsaXN0cztcclxuICAgICAgICB0aGlzLl9fbWl4ZWQucHVzaCh0YXJnZXRDdHgpXHJcbiAgICAgICAgdGFyZ2V0Q3R4LnJldGFpbigpO1xyXG5cclxuICAgICAgICB0aGlzLl9fbWl4ZWRMaXN0LnB1c2gobGlzdHMgPSB7XHJcbiAgICAgICAgICAgICdzdGFibGUnICAgOiBzID0+IHRoaXMucmVsZWFzZSh0YXJnZXRDdHguX2lkKSxcclxuICAgICAgICAgICAgJ3Vuc3RhYmxlJyA6IHMgPT4gdGhpcy53YWl0KHRhcmdldEN0eC5faWQpLFxyXG4gICAgICAgICAgICAndXBkYXRlJyAgIDogcyA9PiB0aGlzLl9wcm9wYWcoKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGFyZ2V0Q3R4Lm9uKGxpc3RzKTtcclxuICAgICAgICBfX3Byb3RvX19wdXNoKHRoaXMsICdzdG9yZXMnLCBwYXJlbnQpO1xyXG4gICAgICAgIF9fcHJvdG9fX3B1c2godGhpcywgJ3N0YXRlJywgcGFyZW50KTtcclxuICAgICAgICBfX3Byb3RvX19wdXNoKHRoaXMsICdkYXRhcycsIHBhcmVudCk7XHJcbiAgICAgICAgdGFyZ2V0Q3R4LnJlbGluayh0YXJnZXRDdHguX19jb250ZXh0LCB0aGlzLCB0cnVlKTtcclxuXHJcbiAgICAgICAgX19wcm90b19fcHVzaCh0aGlzLCAnc3RvcmVzJywgdGhpcyk7XHJcbiAgICAgICAgX19wcm90b19fcHVzaCh0aGlzLCAnc3RhdGUnLCB0aGlzKTtcclxuICAgICAgICBfX3Byb3RvX19wdXNoKHRoaXMsICdkYXRhcycsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMucmVsaW5rKHRoaXMuX19jb250ZXh0LCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICByZWdpc3RlciggcmF3Q3R4LCBzdGF0ZSA9IHt9LCBkYXRhcyA9IHt9ICkge1xyXG4gICAgICAgIHRoaXMucmVsaW5rKHJhd0N0eCwgdGhpcywgZmFsc2UsIHN0YXRlLCBkYXRhcyk7XHJcbiAgICAgICAgT2JqZWN0LmtleXMocmF3Q3R4KS5mb3JFYWNoKFxyXG4gICAgICAgICAgICBpZCA9PiAoaXNGdW5jdGlvbihyYXdDdHhbaWRdKSAmJiByYXdDdHhbaWRdLnNpbmdsZXRvbiAmJiB0aGlzLl9tb3VudChpZCwgc3RhdGVbaWRdLCBkYXRhc1tpZF0pKSlcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBNYXAgc3JjQ3R4IHN0b3JlJ3Mgb24gdGFyZ2V0Q3R4IGhlYWRlcnMgcHJvdG8nc1xyXG4gICAgICogQHBhcmFtIHNyY0N0eFxyXG4gICAgICogQHBhcmFtIHRhcmdldEN0eFxyXG4gICAgICogQHBhcmFtIHN0YXRlXHJcbiAgICAgKiBAcGFyYW0gZGF0YXNcclxuICAgICAqL1xyXG4gICAgcmVsaW5rKCBzcmNDdHgsIHRhcmdldEN0eCA9IHRoaXMsIGV4dGVybmFsLCBzdGF0ZSA9IHt9LCBkYXRhcyA9IHt9ICkge1xyXG4gICAgICAgIGxldCBsY3R4ID0gdGFyZ2V0Q3R4Ll9zdG9yZXMucHJvdG90eXBlO1xyXG4gICAgICAgIE9iamVjdC5rZXlzKHNyY0N0eClcclxuICAgICAgICAgICAgLmZvckVhY2goXHJcbiAgICAgICAgICAgICAgICBpZCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCB0YXJnZXRDdHguX19jb250ZXh0W2lkXSA9PT0gc3JjQ3R4W2lkXSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRDdHguX19jb250ZXh0W2lkXSAmJiAodGFyZ2V0Q3R4Ll9fY29udGV4dFtpZF0uY29uc3RydWN0b3IgPT09IHNyY0N0eFtpZF0gKSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCB0YXJnZXRDdHguX19jb250ZXh0W2lkXSApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwiUmVzY29wZSBDb250ZXh0IDogXCIsIGlkLCBcIiBhbHJlYWR5IGV4aXN0IGluIHRoaXMgY29udGV4dCAhXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICggIWV4dGVybmFsIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fX2NvbnRleHRbaWRdID0gc3JjQ3R4W2lkXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsY3R4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKCggY3R4LCBpZCApID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXQgOiAoKSA9PiB0aGlzLl9tb3VudChpZCwgc3RhdGVbaWRdLCBkYXRhc1tpZF0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLl9fY29udGV4dCwgaWQpXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldEN0eC5fc3RhdGUucHJvdG90eXBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKCggY3R4LCBpZCApID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXQgOiAoKSA9PiAoY3R4W2lkXSAmJiBjdHhbaWRdLnN0YXRlKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXQgOiAoIHYgKSA9PiAodGhpcy5fbW91bnQoaWQsIHYpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5fX2NvbnRleHQsIGlkKVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRDdHguX2RhdGFzLnByb3RvdHlwZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICgoIGN0eCwgaWQgKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0IDogKCkgPT4gKGN0eFtpZF0gJiYgY3R4W2lkXS5kYXRhcyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0IDogKCB2ICkgPT4gKHRoaXMuX21vdW50KGlkLCB1bmRlZmluZWQsIHYpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5fX2NvbnRleHQsIGlkKVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSBvYmoge1JlYWN0LkNvbXBvbmVudHxTdG9yZXxmdW5jdGlvbilcclxuICAgICAqIEBwYXJhbSBrZXkge3N0cmluZ30gb3B0aW9uYWwga2V5IHdoZXJlIHRvIG1hcCB0aGUgcHVibGljIHN0YXRlXHJcbiAgICAgKi9cclxuICAgIGJpbmQoIG9iaiwga2V5LCBhcywgc2V0SW5pdGlhbCA9IHRydWUgKSB7XHJcbiAgICAgICAgbGV0IGxhc3RSZXZzLCBkYXRhcztcclxuICAgICAgICBpZiAoIGtleSAmJiAhaXNBcnJheShrZXkpIClcclxuICAgICAgICAgICAga2V5ID0gW2tleV07XHJcblxyXG4gICAgICAgIC8vIGtleSA9IGtleXx8XHJcblxyXG4gICAgICAgIGlmICggYXMgPT09IHRydWUgKSB7XHJcbiAgICAgICAgICAgIHNldEluaXRpYWwgPSB0cnVlO1xyXG4gICAgICAgICAgICBhcyAgICAgICAgID0gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX2ZvbGxvd2Vycy5wdXNoKFxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICBvYmosXHJcbiAgICAgICAgICAgICAgICBrZXksXHJcbiAgICAgICAgICAgICAgICBhcyxcclxuICAgICAgICAgICAgICAgIGxhc3RSZXZzID0ga2V5ICYmIGtleS5yZWR1Y2UoKCByZXZzLCBpZCApID0+IChyZXZzW2lkXSA9IDAsIHJldnMpLCB7fSlcclxuICAgICAgICAgICAgXSk7XHJcblxyXG4gICAgICAgIHRoaXMubW91bnQoa2V5KTtcclxuXHJcbiAgICAgICAgaWYgKCBzZXRJbml0aWFsICYmIHRoaXMuX3N0YWJsZSApIHtcclxuICAgICAgICAgICAgZGF0YXMgPSB0aGlzLmdldFVwZGF0ZXMobGFzdFJldnMpO1xyXG4gICAgICAgICAgICBpZiAoICFkYXRhcyApIHJldHVybjtcclxuICAgICAgICAgICAgaWYgKCB0eXBlb2Ygb2JqICE9IFwiZnVuY3Rpb25cIiApIHtcclxuICAgICAgICAgICAgICAgIGlmICggYXMgKSBvYmouc2V0U3RhdGUoe1thc10gOiBkYXRhc30pO1xyXG4gICAgICAgICAgICAgICAgZWxzZSBvYmouc2V0U3RhdGUoZGF0YXMpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgb2JqKGRhdGFzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFVuIGJpbmQgdGhpcyBjb250ZXh0IG9mZiB0aGUgZ2l2ZW4gY29tcG9uZW50LWtleXNcclxuICAgICAqIEBwYXJhbSBvYmpcclxuICAgICAqIEBwYXJhbSBrZXlcclxuICAgICAqIEByZXR1cm5zIHtBcnJheS48Kj59XHJcbiAgICAgKi9cclxuICAgIHVuQmluZCggb2JqLCBrZXksIGFzICkge1xyXG4gICAgICAgIHZhciBmb2xsb3dlcnMgPSB0aGlzLl9mb2xsb3dlcnMsXHJcbiAgICAgICAgICAgIGkgICAgICAgICA9IGZvbGxvd2VycyAmJiBmb2xsb3dlcnMubGVuZ3RoO1xyXG4gICAgICAgIHdoaWxlIChmb2xsb3dlcnMgJiYgaS0tKVxyXG4gICAgICAgICAgICBpZiAoIGZvbGxvd2Vyc1tpXVswXSA9PT0gb2JqICYmICgnJyArIGZvbGxvd2Vyc1tpXVsxXSkgPT0gKCcnICsga2V5KSAmJlxyXG4gICAgICAgICAgICAgICAgKCcnICsgZm9sbG93ZXJzW2ldWzJdKSA9PSAoJycgKyBhcykgKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZvbGxvd2Vycy5zcGxpY2UoaSwgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBQdWxsIHN0b3JlcyBpbiB0aGUgcHJpdmF0ZSBzdGF0ZVxyXG4gICAgICogQHBhcmFtIHN0b3JlcyAge0FycmF5fSAocGFzc2VkIHRvIFN0b3JlOjptYXApIEV4IDogW1wic2Vzc2lvblwiLCBcIm90aGVyTmFtZWRTdG9yZTprZXlcIiwgb3RoZXJTdG9yZS5hcyhcIm90aGVyS2V5XCIpXVxyXG4gICAgICovXHJcbiAgICBwdWxsKCBzdG9yZXMsIGRvV2FpdCwgb3JpZ2luICkge1xyXG4gICAgICAgIHRoaXMubW91bnQoc3RvcmVzKTtcclxuICAgICAgICB0aGlzLmJpbmQob3JpZ2luLCBzdG9yZXMsIG51bGwsIGZhbHNlKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHN0b3Jlcy5yZWR1Y2UoKCBkYXRhcywgaWQgKSA9PiAoZGF0YXNbaWRdID0gdGhpcy5zdG9yZXNbaWRdICYmIHRoaXMuc3RvcmVzW2lkXS5kYXRhcywgZGF0YXMpLCB7fSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VXBkYXRlcyggcmV2cywgb3V0cHV0LCB1cGRhdGVkICkge1xyXG4gICAgICAgIGxldCBjdHggPSB0aGlzLl9fY29udGV4dDtcclxuXHJcbiAgICAgICAgb3V0cHV0ID0gb3V0cHV0IHx8IHt9O1xyXG4gICAgICAgIE9iamVjdC5rZXlzKGN0eCkuZm9yRWFjaChcclxuICAgICAgICAgICAgaWQgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCAhcmV2cyB8fCAhKCAhcmV2cy5oYXNPd25Qcm9wZXJ0eShpZCkgfHwgY3R4W2lkXS5fcmV2IDw9IHJldnNbaWRdICkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZWQgICAgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIG91dHB1dFtpZF0gPSB0aGlzLmRhdGFzW2lkXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIHJldnMgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXZzW2lkXSA9IGN0eFtpZF0uX3JldjtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICAgIHVwZGF0ZWQgPSB0aGlzLl9fbWl4ZWQucmVkdWNlKCggdXBkYXRlZCwgY3R4ICkgPT4gKGN0eC5nZXRVcGRhdGVzKHJldnMsIG91dHB1dCwgdXBkYXRlZCkgfHwgdXBkYXRlZCksIHVwZGF0ZWQpO1xyXG4gICAgICAgIHVwZGF0ZWQgPSB0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC5nZXRVcGRhdGVzKHJldnMsIG91dHB1dCwgdXBkYXRlZCkgfHwgdXBkYXRlZDtcclxuICAgICAgICByZXR1cm4gdXBkYXRlZCAmJiBvdXRwdXQ7XHJcbiAgICB9XHJcblxyXG4gICAgc2VyaWFsaXplKCBmbGFnc19zdGF0ZXMgPSAvLiovLCBmbGFnc19kYXRhcyA9IC8uKi8gKSB7XHJcbiAgICAgICAgbGV0IGN0eCA9IHRoaXMuX19jb250ZXh0LCBvdXRwdXQgPSB7c3RhdGUgOiB7fSwgZGF0YXMgOiB7fX0sXHJcbiAgICAgICAgICAgIF9mbGFnc19zdGF0ZXMsXHJcbiAgICAgICAgICAgIF9mbGFnc19kYXRhcztcclxuICAgICAgICBpZiAoIGlzQXJyYXkoZmxhZ3Nfc3RhdGVzKSApXHJcbiAgICAgICAgICAgIGZsYWdzX3N0YXRlcy5mb3JFYWNoKGlkID0+IChvdXRwdXQuc3RhdGVbaWRdID0gdGhpcy5zdGF0ZVtpZF0pKVxyXG5cclxuICAgICAgICBpZiAoIGlzQXJyYXkoZmxhZ3NfZGF0YXMpIClcclxuICAgICAgICAgICAgZmxhZ3NfZGF0YXMuZm9yRWFjaChpZCA9PiAob3V0cHV0LmRhdGFzW2lkXSA9IHRoaXMuZGF0YXNbaWRdKSlcclxuXHJcbiAgICAgICAgaWYgKCAhaXNBcnJheShmbGFnc19kYXRhcykgJiYgIWlzQXJyYXkoZmxhZ3Nfc3RhdGVzKSApXHJcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGN0eCkuZm9yRWFjaChcclxuICAgICAgICAgICAgICAgIGlkID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIGlzRnVuY3Rpb24oY3R4W2lkXSkgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBmbGFncyA9IGN0eFtpZF0uY29uc3RydWN0b3IuZmxhZ3M7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGZsYWdzID0gaXNBcnJheShmbGFncykgPyBmbGFncyA6IFtmbGFncyB8fCBcIlwiXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBmbGFncy5yZWR1Y2UoKCByLCBmbGFnICkgPT4gKHIgfHwgX2ZsYWdzX3N0YXRlcy50ZXN0KGZsYWcpKSwgZmFsc2UpIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0LnN0YXRlW2lkXSA9IHRoaXMuc3RhdGVbaWRdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIGZsYWdzLnJlZHVjZSgoIHIsIGZsYWcgKSA9PiAociB8fCBfZmxhZ3NfZGF0YXMudGVzdChmbGFnKSksIGZhbHNlKSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dC5kYXRhc1tpZF0gPSB0aGlzLmRhdGFzW2lkXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIHJldHVybiBvdXRwdXQ7XHJcbiAgICB9XHJcblxyXG4gICAgb24oIGxpc3RzICkge1xyXG5cclxuICAgICAgICBpZiAoICFpc1N0cmluZyhsaXN0cykgJiYgbGlzdHMgKVxyXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhsaXN0cykuZm9yRWFjaChrID0+IHN1cGVyLm9uKGssIGxpc3RzW2tdKSk7XHJcbiAgICAgICAgZWxzZSBzdXBlci5vbiguLi5hcmd1bWVudHMpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUxpc3RlbmVyKCBsaXN0cyApIHtcclxuICAgICAgICBpZiAoICFpc1N0cmluZyhsaXN0cykgJiYgbGlzdHMgKVxyXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhsaXN0cykuZm9yRWFjaChrID0+IHN1cGVyLnJlbW92ZUxpc3RlbmVyKGssIGxpc3RzW2tdKSk7XHJcbiAgICAgICAgZWxzZSBzdXBlci5yZW1vdmVMaXN0ZW5lciguLi5hcmd1bWVudHMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogb25jZSgnc3RhYmxlJywgY2IpXHJcbiAgICAgKiBAcGFyYW0gb2JqIHtSZWFjdC5Db21wb25lbnR8U3RvcmV8ZnVuY3Rpb24pXHJcbiAgICAgKiBAcGFyYW0ga2V5IHtzdHJpbmd9IG9wdGlvbmFsIGtleSB3aGVyZSB0byBtYXAgdGhlIHB1YmxpYyBzdGF0ZVxyXG4gICAgICovXHJcbiAgICB0aGVuKCBjYiApIHtcclxuICAgICAgICBpZiAoIHRoaXMuX3N0YWJsZSApXHJcbiAgICAgICAgICAgIHJldHVybiBjYihudWxsLCB0aGlzLmRhdGFzKTtcclxuICAgICAgICB0aGlzLm9uY2UoJ3N0YWJsZScsIGUgPT4gY2IobnVsbCwgdGhpcy5kYXRhcykpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc3RvcmUoIHtzdGF0ZSwgZGF0YXN9LCBxdWlldCApIHtcclxuICAgICAgICBsZXQgY3R4ID0gdGhpcy5fX2NvbnRleHQ7XHJcbiAgICAgICAgT2JqZWN0LmtleXMoZGF0YXMpLmZvckVhY2goXHJcbiAgICAgICAgICAgIGlkID0+IHtcclxuICAgICAgICAgICAgICAgIHF1aWV0ID9cclxuICAgICAgICAgICAgICAgIGN0eC5kYXRhcyA9IGRhdGFzW2lkXVxyXG4gICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgIGN0eC5wdXNoKGRhdGFzW2lkXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICAgIE9iamVjdC5rZXlzKHN0YXRlKS5mb3JFYWNoKFxyXG4gICAgICAgICAgICBpZCA9PiB7XHJcbiAgICAgICAgICAgICAgICBxdWlldCA/XHJcbiAgICAgICAgICAgICAgICBjdHguc3RhdGUgPSBzdGF0ZVtpZF1cclxuICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICBjdHguc2V0U3RhdGUoc3RhdGVbaWRdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJldGFpbiggcmVhc29uICkge1xyXG4gICAgICAgIHRoaXMuX19yZXRhaW5Mb2Nrcy5hbGwrKztcclxuICAgICAgICBpZiAoIHJlYXNvbiApIHtcclxuICAgICAgICAgICAgdGhpcy5fX3JldGFpbkxvY2tzW3JlYXNvbl0gPSB0aGlzLl9fcmV0YWluTG9ja3NbcmVhc29uXSB8fCAwO1xyXG4gICAgICAgICAgICB0aGlzLl9fcmV0YWluTG9ja3NbcmVhc29uXSsrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkaXNwb3NlKCByZWFzb24gKSB7XHJcbiAgICAgICAgdGhpcy5fX3JldGFpbkxvY2tzLmFsbC0tO1xyXG4gICAgICAgIGlmICggcmVhc29uICkge1xyXG4gICAgICAgICAgICB0aGlzLl9fcmV0YWluTG9ja3NbcmVhc29uXSA9IHRoaXMuX19yZXRhaW5Mb2Nrc1tyZWFzb25dIHx8IDA7XHJcbiAgICAgICAgICAgIHRoaXMuX19yZXRhaW5Mb2Nrc1tyZWFzb25dLS07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICggIXRoaXMuX19yZXRhaW5Mb2Nrcy5hbGwgKVxyXG4gICAgICAgICAgICB0aGlzLmRlc3Ryb3koKTtcclxuICAgIH1cclxuXHJcbiAgICB3YWl0KCByZWFzb24gKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ3YWl0XCIsIHJlYXNvbik7XHJcbiAgICAgICAgdGhpcy5fc3RhYmxlID0gZmFsc2U7XHJcbiAgICAgICAgIXRoaXMuX193OExvY2tzLmFsbCAmJiB0aGlzLmVtaXQoXCJ1bnN0YWJsZVwiLCB0aGlzKTtcclxuICAgICAgICB0aGlzLl9fdzhMb2Nrcy5hbGwrKztcclxuICAgICAgICBpZiAoIHJlYXNvbiApIHtcclxuICAgICAgICAgICAgdGhpcy5fX3c4TG9ja3NbcmVhc29uXSA9IHRoaXMuX193OExvY2tzW3JlYXNvbl0gfHwgMDtcclxuICAgICAgICAgICAgdGhpcy5fX3c4TG9ja3NbcmVhc29uXSsrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcm9wYWcoKSB7XHJcbiAgICAgICAgdGhpcy5fcHJvcGFnVE0gJiYgY2xlYXJUaW1lb3V0KHRoaXMuX3Byb3BhZ1RNKTtcclxuICAgICAgICB0aGlzLl9wcm9wYWdUTSA9IHNldFRpbWVvdXQoXHJcbiAgICAgICAgICAgIGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcHJvcGFnKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgX3Byb3BhZygpIHtcclxuICAgICAgICBpZiAoIHRoaXMuX2ZvbGxvd2Vycy5sZW5ndGggKVxyXG4gICAgICAgICAgICB0aGlzLl9mb2xsb3dlcnMuZm9yRWFjaCgoIHswIDogb2JqLCAxIDoga2V5LCAyIDogYXMsIDMgOiBsYXN0UmV2c30gKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGF0YXMgPSB0aGlzLmdldFVwZGF0ZXMobGFzdFJldnMpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCAhZGF0YXMgKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICBpZiAoIHR5cGVvZiBvYmogIT0gXCJmdW5jdGlvblwiICkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICggYXMgKSBvYmouc2V0U3RhdGUoe1thc10gOiBkYXRhc30pO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Ugb2JqLnNldFN0YXRlKGRhdGFzKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqKGRhdGFzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGxhc3RSZXZzICYmXHJcbiAgICAgICAgICAgICAgICBrZXkuZm9yRWFjaChpZCA9PiAobGFzdFJldnNbaWRdID0gdGhpcy5fX2NvbnRleHRbaWRdICYmIHRoaXMuX19jb250ZXh0W2lkXS5fcmV2IHx8IDApKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5lbWl0KFwidXBkYXRlXCIsIHRoaXMuZ2V0VXBkYXRlcygpKTtcclxuICAgIH1cclxuXHJcbiAgICByZWxlYXNlKCByZWFzb24gKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJyZWxlYXNlXCIsIHJlYXNvbik7XHJcbiAgICAgICAgdGhpcy5fX3c4TG9ja3MuYWxsLS07XHJcbiAgICAgICAgaWYgKCByZWFzb24gKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX193OExvY2tzW3JlYXNvbl0gPSB0aGlzLl9fdzhMb2Nrc1tyZWFzb25dIHx8IDA7XHJcbiAgICAgICAgICAgIHRoaXMuX193OExvY2tzW3JlYXNvbl0tLTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fc3RhYmxlID0gdHJ1ZTtcclxuICAgICAgICBpZiAoICF0aGlzLl9fdzhMb2Nrcy5hbGwgKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3N0YWJpbGl6ZXJUTSAmJiBjbGVhclRpbWVvdXQodGhpcy5fc3RhYmlsaXplclRNKTtcclxuICAgICAgICAgICAgdGhpcy5fcHJvcGFnVE0gJiYgY2xlYXJUaW1lb3V0KHRoaXMuX3Byb3BhZ1RNKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX3N0YWJpbGl6ZXJUTSA9IHNldFRpbWVvdXQoXHJcbiAgICAgICAgICAgICAgICBlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoICF0aGlzLl9zdGFibGUgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fc3RhYmlsaXplclRNID0gbnVsbDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KFwic3RhYmxlXCIsIHRoaXMpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wcm9wYWcoKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBvcmRlciBkZXN0cm95IG9mIGxvY2FsIHN0b3Jlc1xyXG4gICAgICovXHJcbiAgICBkZXN0cm95KCkge1xyXG4gICAgICAgIGxldCBjdHggPSB0aGlzLl9fY29udGV4dDtcclxuXHJcbiAgICAgICAgT2JqZWN0LmtleXMoXHJcbiAgICAgICAgICAgIHRoaXMuX19saXN0ZW5pbmdcclxuICAgICAgICApLmZvckVhY2goXHJcbiAgICAgICAgICAgIGlkID0+IHRoaXMuX19jb250ZXh0W2lkXS5yZW1vdmVMaXN0ZW5lcih0aGlzLl9fbGlzdGVuaW5nW2lkXSlcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMuX19saXN0ZW5pbmcgPSB7fTtcclxuXHJcbiAgICAgICAgaWYgKCB0aGlzLl9pc0xvY2FsSWQgKVxyXG4gICAgICAgICAgICBkZWxldGUgb3BlbkNvbnRleHRzW3RoaXMuX2lkXTtcclxuXHJcbiAgICAgICAgZm9yICggbGV0IGtleSBpbiBjdHggKVxyXG4gICAgICAgICAgICBpZiAoICFpc0Z1bmN0aW9uKGN0eFtrZXldKSApIHtcclxuICAgICAgICAgICAgICAgIGlmICggY3R4W2tleV0uY29udGV4dCA9PT0gY3R4IClcclxuICAgICAgICAgICAgICAgICAgICBjdHhba2V5XS5kZXN0cm95KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgY3R4W2tleV0gPSBjdHhba2V5XS5jb25zdHJ1Y3RvcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIHdoaWxlICh0aGlzLl9fbWl4ZWRMaXN0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLl9fbWl4ZWRbMF0uZGlzcG9zZSgpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5fX21peGVkLnNoaWZ0KCkucmVtb3ZlTGlzdGVuZXIodGhpcy5fX21peGVkTGlzdC5zaGlmdCgpKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnBhcmVudC5kaXNwb3NlKFwiaXNNeVBhcmVudFwiKTtcclxuICAgICAgICB0aGlzLnBhcmVudC5yZW1vdmVMaXN0ZW5lcih0aGlzLl9fcGFyZW50TGlzdCk7XHJcblxyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0NvbnRleHQuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpc3N0cmluZ1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImlzc3RyaW5nXCJcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaXNhcnJheVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImlzYXJyYXlcIlxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJldmVudHNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJldmVudHNcIlxuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpc2Z1bmN0aW9uXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiaXNmdW5jdGlvblwiXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNob3J0aWRcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJzaG9ydGlkXCJcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcclxuICogQ29weXJpZ2h0IChjKSAgMjAxNyBDYWlwaSBMYWJzIC5cclxuICpcclxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuICpcclxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcbiAqXHJcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBVbHRyYSBzY2FsYWJsZSBzdGF0ZS1hd2FyZSBzdG9yZVxyXG4gKlxyXG4gKiBAdG9kbyA6IGxvdCBvZiBvcHRpbXMuLi5cclxuICovXHJcblxyXG52YXIgaXNTdHJpbmcgICAgID0gcmVxdWlyZSgnaXNzdHJpbmcnKVxyXG4gICAgLCBpc0FycmF5ICAgID0gcmVxdWlyZSgnaXNhcnJheScpXHJcbiAgICAsIGlzRnVuY3Rpb24gPSByZXF1aXJlKCdpc2Z1bmN0aW9uJylcclxuICAgICxcclxuICAgIENvbnRleHQgICAgICA9IHJlcXVpcmUoJy4vQ29udGV4dCcpLFxyXG4gICAgRXZlbnRFbWl0dGVyID0gcmVxdWlyZSgnZXZlbnRzJyksXHJcbiAgICBzaG9ydGlkICAgICAgPSByZXF1aXJlKCdzaG9ydGlkJyksXHJcbiAgICBvYmpQcm90byAgICAgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Yoe30pLFxyXG4gICAgb3BlbkNvbnRleHRzID0ge307XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RvcmUgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xyXG5cclxuICAgIHN0YXRpYyB1c2UgICAgICAgICAgICAgICAgID0gW107Ly8gb3ZlcnJpZGFibGUgbGlzdCBvZiBzb3VyY2Ugc3RvcmVzXHJcbiAgICBzdGF0aWMgZm9sbG93Oy8vIG92ZXJyaWRhYmxlIGxpc3Qgb2Ygc3RvcmUgdGhhdCB3aWxsIGFsbG93IHB1c2ggaWYgdXBkYXRlZFxyXG4gICAgc3RhdGljIHJlcXVpcmU7XHJcbiAgICBzdGF0aWMgc3RhdGljQ29udGV4dCAgICAgICA9IG5ldyBDb250ZXh0KHt9LCB7aWQgOiBcInN0YXRpY1wifSk7XHJcbiAgICBzdGF0aWMgaW5pdGlhbFN0YXRlICAgICAgICA9IHVuZGVmaW5lZDsvLyBkZWZhdWx0IHN0YXRlXHJcbiAgICBzdGF0aWMgZGVmYXVsdE1heExpc3RlbmVycyA9IDIwO1xyXG4gICAgc3RhdGljIGF1dG9raWxsICAgICAgICAgICAgPSBmYWxzZTsvLyBmYWxzZSBvciB0bSB3aXRob3V0IGZvbGxvd2Vyc1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogZ2V0IGEgQnVpbGRlci1rZXkgcGFpciBmb3IgU3RvcmU6Om1hcFxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcclxuICAgICAqIEByZXR1cm5zIHt7c3RvcmU6IFN0b3JlLCBuYW1lOiAqfX1cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGFzKCBuYW1lICkge1xyXG4gICAgICAgIHJldHVybiB7c3RvcmUgOiB0aGlzLCBuYW1lfTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE1hcCBhbGwgbmFtZWQgc3RvcmVzIGluIHtrZXlzfSB0byB0aGUge29iamVjdH0ncyBzdGF0ZVxyXG4gICAgICogSG9vayBjb21wb25lbnRXaWxsVW5tb3VudCAoZm9yIHJlYWN0IGNvbXApIG9yIGRlc3Ryb3kgdG8gdW5CaW5kIHRoZW0gYXV0b21hdGljYWxseVxyXG4gICAgICogQHN0YXRpY1xyXG4gICAgICogQHBhcmFtIG9iamVjdCB7UmVhY3QuQ29tcG9uZW50fFN0b3JlfC4uLn0gdGFyZ2V0IHN0YXRlIGF3YXJlIG9iamVjdFxyXG4gICAgICogQHBhcmFtIGtleXMge0FycmF5fSBFeCA6IFtcInNlc3Npb25cIiwgXCJvdGhlclN0YXRpY05hbWVkU3RvcmU6a2V5XCIsIHN0b3JlLmFzKCdhbm90aGVyS2V5JyldXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBtYXAoIGNvbXBvbmVudCwga2V5cywgY29udGV4dCwgb3JpZ2luLCBzZXRJbml0aWFsID0gZmFsc2UgKSB7XHJcbiAgICAgICAgdmFyIHRhcmdldFJldnMgICAgID0gY29tcG9uZW50Ll9yZXZzIHx8IHt9O1xyXG4gICAgICAgIC8vIHZhciB0YXJnZXRDb250ZXh0ICA9IGNvbXBvbmVudC5zdG9yZXMgfHwgKGNvbXBvbmVudC5zdG9yZXMgPSBuZXcgQ29udGV4dCh7fSkpO1xyXG4gICAgICAgIHZhciBpbml0aWFsT3V0cHV0cyA9IHt9O1xyXG4gICAgICAgIGtleXMgICAgICAgICAgICAgICA9IGlzQXJyYXkoa2V5cykgPyBbLi4ua2V5c10gOiBba2V5c107XHJcblxyXG5cclxuICAgICAgICBjb250ZXh0ID0gY29udGV4dCB8fCBTdG9yZS5zdGF0aWNDb250ZXh0O1xyXG5cclxuICAgICAgICAvLyBpZiAoIXRhcmdldENvbnRleHQuX19jb250ZXh0KVxyXG4gICAgICAgIC8vICAgICBkZWJ1Z2dlcjtcclxuXHJcbiAgICAgICAga2V5cyAgICAgICAgICAgPSBrZXlzLmZpbHRlcihcclxuICAgICAgICAgICAgLy8gQHRvZG8gOiB1c2UgcXVlcnkgcmVmc1xyXG4gICAgICAgICAgICAvLyAoc3RvcmUpKFxcLnN0b3JlKSooXFxbKFxcKnwocHJvcHMpXFx3KykrKVxcXSk/KFxcOmFsaWFzKVxyXG4gICAgICAgICAgICAoIGtleSApID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICggIWtleSApIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiTm90IGEgbWFwcGFibGUgc3RvcmUgaXRlbSAnXCIgKyBrZXkgKyBcIicgaW4gXCIgKyBvcmlnaW4gKyAnICEhJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbGV0IG5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgYWxpYXMsXHJcbiAgICAgICAgICAgICAgICAgICAgc3RvcmU7XHJcbiAgICAgICAgICAgICAgICBpZiAoIGtleS5zdG9yZSAmJiBrZXkubmFtZSApIHtcclxuICAgICAgICAgICAgICAgICAgICBhbGlhcyA9IG5hbWUgPSBrZXkubmFtZTtcclxuICAgICAgICAgICAgICAgICAgICBzdG9yZSA9IGtleS5zdG9yZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIGlzRnVuY3Rpb24oa2V5KSApIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lID0gYWxpYXMgPSBrZXkubmFtZSB8fCBrZXkuZGVmYXVsdE5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RvcmUgPSBrZXk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGtleSAgID0ga2V5Lm1hdGNoKC8oW1xcd19dKykoPzpcXDpcXFsoXFwqKVxcXSk/KD86XFw6KFxcKikpPy8pO1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWUgID0ga2V5WzBdO1xyXG4gICAgICAgICAgICAgICAgICAgIHN0b3JlID0gY29udGV4dC5fX2NvbnRleHRba2V5WzBdXTtcclxuICAgICAgICAgICAgICAgICAgICBhbGlhcyA9IGtleVsxXSA9PSAnKicgPyBudWxsIDoga2V5WzJdIHx8IGtleVswXTsvLyBhbGxvdyBiaW5kaW5nIHByb3BzICAoWypdKVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICggdGFyZ2V0UmV2c1tuYW1lXSApIHJldHVybiBmYWxzZTsvLyBpZ25vcmUgZGJsIHVzZXMgZm9yIG5vd1xyXG4gICAgICAgICAgICAgICAgaWYgKCAhc3RvcmUgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIk5vdCBhIG1hcHBhYmxlIHN0b3JlIGl0ZW0gJ1wiICsgbmFtZSArIFwiL1wiICsgYWxpYXMgKyBcIicgaW4gXCIgKyBvcmlnaW4gKyAnICEhJywgc3RvcmUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIGlzRnVuY3Rpb24oc3RvcmUpICkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW91bnRTdG9yZShuYW1lLCBjb250ZXh0KVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb250ZXh0Ll9fY29udGV4dFtuYW1lXS5iaW5kKGNvbXBvbmVudCwgYWxpYXMsIHNldEluaXRpYWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGlmICggY29udGV4dC5fX2NvbnRleHRba2V5WzBdXS5zdGF0ZSApIHsvLyBkbyBzeW5jIHB1c2ggYWZ0ZXIgY29uc3RydWN0b3JcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgY29udGV4dC5fX2NvbnRleHRba2V5WzBdXS5wdXNoKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzdG9yZS5iaW5kKGNvbXBvbmVudCwgYWxpYXMsIHNldEluaXRpYWwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0UmV2c1thbGlhc10gPSB0YXJnZXRSZXZzW2FsaWFzXSB8fCB0cnVlO1xyXG4gICAgICAgICAgICAgICAgLy8gIXRhcmdldENvbnRleHQuX19jb250ZXh0W2FsaWFzXSAmJiB0YXJnZXRDb250ZXh0LnJlZ2lzdGVyKHtbYWxpYXNdIDogY29udGV4dC5fX2NvbnRleHRbbmFtZV19KTtcclxuICAgICAgICAgICAgICAgIGlmICggY29udGV4dC5fX2NvbnRleHRbbmFtZV0uaGFzT3duUHJvcGVydHkoJ2RhdGFzJykgKVxyXG4gICAgICAgICAgICAgICAgICAgIGluaXRpYWxPdXRwdXRzW2FsaWFzXSA9IGNvbnRleHQuZGF0YXNbbmFtZV07XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdmFyIG1peGVkQ1dVbm1vdW50LFxyXG4gICAgICAgICAgICB1bk1vdW50S2V5ID0gY29tcG9uZW50LmlzUmVhY3RDb21wb25lbnQgPyBcImNvbXBvbmVudFdpbGxVbm1vdW50XCIgOiBcImRlc3Ryb3lcIjtcclxuXHJcbiAgICAgICAgaWYgKCBjb21wb25lbnQuaGFzT3duUHJvcGVydHkodW5Nb3VudEtleSkgKSB7XHJcbiAgICAgICAgICAgIG1peGVkQ1dVbm1vdW50ID0gY29tcG9uZW50W3VuTW91bnRLZXldO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29tcG9uZW50W3VuTW91bnRLZXldID0gZnVuY3Rpb24gKCkgey8vIHRvZG8gaG9wXHJcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzW3VuTW91bnRLZXldO1xyXG4gICAgICAgICAgICBpZiAoIG1peGVkQ1dVbm1vdW50IClcclxuICAgICAgICAgICAgICAgIHRoaXNbdW5Nb3VudEtleV0gPSBtaXhlZENXVW5tb3VudDtcclxuICAgICAgICAgICAga2V5cy5tYXAoXHJcbiAgICAgICAgICAgICAgICAoIGtleSApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpYXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICgga2V5LnN0b3JlICYmIGtleS5uYW1lICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlhcyA9IG5hbWUgPSBrZXkubmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmUgPSBrZXkuc3RvcmU7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICggaXNGdW5jdGlvbihrZXkpICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lID0gYWxpYXMgPSBrZXkubmFtZSB8fCBrZXkuZGVmYXVsdE5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlID0gY29udGV4dC5fX2NvbnRleHRbbmFtZV07XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5ICAgPSBrZXkuc3BsaXQoJzonKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZSAgPSBrZXlbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlID0gY29udGV4dC5fX2NvbnRleHRba2V5WzBdXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpYXMgPSBrZXlbMV0gfHwga2V5WzBdO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc3RvcmUudW5CaW5kKGNvbXBvbmVudCwgYWxpYXMpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzW3VuTW91bnRLZXldICYmIHRoaXNbdW5Nb3VudEtleV0uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBpbml0aWFsT3V0cHV0cztcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0Q29udGV4dCggY29udGV4dHMgKSB7XHJcbiAgICAgICAgbGV0IHNrZXkgPSBpc0FycmF5KGNvbnRleHRzKSA/IGNvbnRleHRzLnNvcnQoKCBhLCBiICkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIGEuZmlyc3RuYW1lIDwgYi5maXJzdG5hbWUgKSByZXR1cm4gLTE7XHJcbiAgICAgICAgICAgIGlmICggYS5maXJzdG5hbWUgPiBiLmZpcnN0bmFtZSApIHJldHVybiAxO1xyXG4gICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICB9KS5qb2luKCc6OicpIDogY29udGV4dHM7XHJcbiAgICAgICAgcmV0dXJuIENvbnRleHQuY29udGV4dHNbc2tleV0gPSBDb250ZXh0LmNvbnRleHRzW3NrZXldIHx8IG5ldyBDb250ZXh0KHt9LCB7aWQgOiBza2V5fSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIG1vdW50U3RvcmUoIG5hbWUsIGNvbnRleHQsIHN0b3JlLCBzdGF0ZSwgZGF0YXMgKSB7XHJcbiAgICAgICAgbGV0IGN0eCwgY29udGV4dE1hcCA9IGNvbnRleHQuX19jb250ZXh0O1xyXG4gICAgICAgIGNvbnRleHRNYXBbbmFtZV0gICAgPSBzdG9yZSA9IHN0b3JlIHx8IGNvbnRleHRNYXBbbmFtZV07XHJcbiAgICAgICAgaWYgKCAhc3RvcmUgKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJOb3QgYSBtYXBwYWJsZSBzdG9yZSBpdGVtICdcIiArIG5hbWUgKyAnICEhJywgc3RvcmUpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIGlmICggaXNGdW5jdGlvbihzdG9yZSkgKSB7XHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIGlmICggc3RvcmUgJiYgKHN0b3JlLmNvbnRleHRzIHx8IHN0b3JlLmNvbnRleHQpICkge1xyXG4gICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5nZXRDb250ZXh0KHN0b3JlLmNvbnRleHRzIHx8IFtzdG9yZS5jb250ZXh0XSk7XHJcblxyXG4gICAgICAgICAgICAgICAgY3R4LnJlZ2lzdGVyKHtbbmFtZV0gOiBjdHguX19jb250ZXh0W25hbWVdIHx8IHN0b3JlfSk7XHJcbiAgICAgICAgICAgICAgICBjdHguX21vdW50KG5hbWUpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbnRleHRNYXBbbmFtZV0gPSBjdHhbbmFtZV07XHJcbiAgICAgICAgICAgIH0gZWxzZVxyXG4gICAgICAgICAgICAgICAgc3RvcmUgPSBjb250ZXh0TWFwW25hbWVdID0gbmV3IHN0b3JlKGNvbnRleHQsIHtzdGF0ZSwgZGF0YXN9KTtcclxuICAgICAgICAgICAgY29udGV4dE1hcFtuYW1lXS5yZWxpbmsobmFtZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKCBzdGF0ZSAhPT0gdW5kZWZpbmVkICYmIGRhdGFzID09PSB1bmRlZmluZWQgKVxyXG4gICAgICAgICAgICAgICAgc3RvcmUuc2V0U3RhdGUoc3RhdGUpO1xyXG4gICAgICAgICAgICBlbHNlIGlmICggc3RhdGUgIT09IHVuZGVmaW5lZCApXHJcbiAgICAgICAgICAgICAgICBzdG9yZS5zdGF0ZSA9IHN0YXRlO1xyXG5cclxuICAgICAgICAgICAgaWYgKCBkYXRhcyAhPT0gdW5kZWZpbmVkIClcclxuICAgICAgICAgICAgICAgIHN0b3JlLnB1c2goZGF0YXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc3RvcmU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb25zdHJ1Y3Rvciwgd2lsbCBidWlsZCBhIHJlc2NvcGUgc3RvcmVcclxuICAgICAqXHJcbiAgICAgKiAoY29udGV4dCwge3JlcXVpcmUsdXNlLHJlZmluZSxzdGF0ZSwgZGF0YXN9KVxyXG4gICAgICogKGNvbnRleHQpXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGNvbnRleHQge29iamVjdH0gY29udGV4dCB3aGVyZSB0byBmaW5kIHRoZSBvdGhlciBzdG9yZXMgKGRlZmF1bHQgOiBzdGF0aWMgc3RhdGljQ29udGV4dCApXHJcbiAgICAgKiBAcGFyYW0ga2V5cyB7QXJyYXl9IChwYXNzZWQgdG8gU3RvcmU6Om1hcCkgRXggOiBbXCJzZXNzaW9uXCIsIFwib3RoZXJOYW1lZFN0b3JlOmtleVwiLCBvdGhlclN0b3JlLmFzKFwib3RoZXJLZXlcIildXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdmFyIGFyZ3ogICAgICAgICA9IFsuLi5hcmd1bWVudHNdLFxyXG4gICAgICAgICAgICBfc3RhdGljICAgICAgPSB0aGlzLmNvbnN0cnVjdG9yLFxyXG4gICAgICAgICAgICBjb250ZXh0ICAgICAgPSAhaXNBcnJheShhcmd6WzBdKSAmJiAhaXNTdHJpbmcoYXJnelswXSkgPyBhcmd6LnNoaWZ0KCkgOiBfc3RhdGljLnN0YXRpY0NvbnRleHQsXHJcbiAgICAgICAgICAgIGNmZyAgICAgICAgICA9IGFyZ3pbMF0gJiYgIWlzQXJyYXkoYXJnelswXSkgJiYgIWlzU3RyaW5nKGFyZ3pbMF0pID8gYXJnei5zaGlmdCgpIDoge30sXHJcbiAgICAgICAgICAgIG5hbWUgICAgICAgICA9IGlzU3RyaW5nKGFyZ3pbMF0pID8gYXJnelswXSA6IGNmZy5uYW1lIHx8IF9zdGF0aWMubmFtZSxcclxuICAgICAgICAgICAgd2F0Y2hzICAgICAgID0gaXNBcnJheShhcmd6WzBdKSA/IGFyZ3ouc2hpZnQoKSA6IGNmZy51c2UgfHwgW10sLy8gd2F0Y2hzIG5lZWQgdG8gYmUgZGVmaW5lZCBhZnRlciBhbGwgdGhlIHN0b3JlIGFyZSByZWdpc3RlcmVkIDogc28gd2UgY2FuJ3QgZGVhbCB3aXRoIGFueSBcInN0YXRpYyB1c2VcIiBhdXRvbWF0aWNseVxyXG4gICAgICAgICAgICByZWZpbmUgICAgICAgPSBpc0Z1bmN0aW9uKGFyZ3pbMF0pID8gYXJnei5zaGlmdCgpIDogY2ZnLnJlZmluZSB8fCBudWxsLFxyXG4gICAgICAgICAgICBpbml0aWFsU3RhdGUgPSBfc3RhdGljLmluaXRpYWxTdGF0ZVxyXG4gICAgICAgIDtcclxuICAgICAgICB0aGlzLl91aWQgICAgICAgID0gY2ZnLl91aWQgfHwgc2hvcnRpZC5nZW5lcmF0ZSgpO1xyXG4gICAgICAgIHRoaXMuc2V0TWF4TGlzdGVuZXJzKFN0b3JlLmRlZmF1bHRNYXhMaXN0ZW5lcnMpO1xyXG4gICAgICAgIHRoaXMubG9ja3MgICAgICAgID0gMDtcclxuICAgICAgICB0aGlzLl9vblN0YWJpbGl6ZSA9IFtdO1xyXG5cclxuICAgICAgICBpZiAoIGlzU3RyaW5nKGFyZ3pbMF0pICkge1xyXG4gICAgICAgICAgICBpZiAoIGNvbnRleHQuX19jb250ZXh0W25hbWVdIClcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIlJlU2NvcGU6IE92ZXJ3cml0aW5nIGFuIGV4aXN0aW5nIHN0YXRpYyBuYW1lZCBzdG9yZSAoICVzICkgISFcIiwgbmFtZSk7XHJcbiAgICAgICAgICAgIGNvbnRleHQuX19jb250ZXh0W25hbWVdID0gdGhpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICggY2ZnICYmIGNmZy5vbiApIHtcclxuICAgICAgICAgICAgdGhpcy5vbihjZmcub24pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyB0aGlzLnN0YXRlICAgICAgPSB0aGlzLnN0YXRlIHx8IHt9O1xyXG5cclxuICAgICAgICB0aGlzLl91c2UgPSB3YXRjaHM7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuXHJcbiAgICAgICAgaWYgKCBjb250ZXh0LnN0b3JlcyApIHtcclxuICAgICAgICAgICAgdGhpcy5jb250ZXh0T2JqID0gY29udGV4dDtcclxuICAgICAgICAgICAgdGhpcy5jb250ZXh0ICAgID0gY29udGV4dC5zdG9yZXM7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jb250ZXh0T2JqID0gbmV3IENvbnRleHQoY29udGV4dCk7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGV4dCAgICA9IGNvbnRleHQuc3RvcmVzO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIHRoaXMuX3N0YWJsZSAgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuX3JldiAgICAgPSAxO1xyXG4gICAgICAgIHRoaXMuX3JldnMgICAgPSB7fTtcclxuICAgICAgICB0aGlzLnN0b3JlcyAgID0ge307XHJcbiAgICAgICAgdGhpcy5fcmVxdWlyZSA9IFtdO1xyXG5cclxuICAgICAgICBpZiAoIF9zdGF0aWMucmVxdWlyZSApXHJcbiAgICAgICAgICAgIHRoaXMuX3JlcXVpcmUucHVzaCguLi5fc3RhdGljLnJlcXVpcmUpO1xyXG4gICAgICAgIGlmICggY2ZnLnJlcXVpcmUgKVxyXG4gICAgICAgICAgICB0aGlzLl9yZXF1aXJlLnB1c2goLi4uY2ZnLnJlcXVpcmUpO1xyXG5cclxuICAgICAgICB0aGlzLl9mb2xsb3dlcnMgPSBbXTtcclxuXHJcbiAgICAgICAgaWYgKCBjZmcuaGFzT3duUHJvcGVydHkoXCJkYXRhc1wiKSAmJiBjZmcuZGF0YXMgIT09IHVuZGVmaW5lZCApXHJcbiAgICAgICAgICAgIHRoaXMuZGF0YXMgPSBjZmcuZGF0YXM7XHJcbiAgICAgICAgaWYgKCBjZmcuaGFzT3duUHJvcGVydHkoXCJzdGF0ZVwiKSAmJiBjZmcuc3RhdGUgIT09IHVuZGVmaW5lZCApXHJcbiAgICAgICAgICAgIGluaXRpYWxTdGF0ZSA9IGNmZy5zdGF0ZTtcclxuXHJcbiAgICAgICAgaWYgKCByZWZpbmUgKVxyXG4gICAgICAgICAgICB0aGlzLnJlZmluZSA9IHJlZmluZTtcclxuXHJcbiAgICAgICAgaWYgKCAhIXRoaXMuX3VzZSAmJiB0aGlzLl91c2UubGVuZ3RoICkgey8vIGlmIHRoZXJlIGluaXRpYWwgd2F0Y2hzIGFueXdheVxyXG4gICAgICAgICAgICB0aGlzLnB1bGwodGhpcy5fdXNlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICggaW5pdGlhbFN0YXRlICkgey8vIHN5bmMgcmVmaW5lXHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSB7Li4uaW5pdGlhbFN0YXRlfTtcclxuICAgICAgICAgICAgaWYgKCB0aGlzLmlzQ29tcGxldGUoKSAmJiB0aGlzLmRhdGFzID09PSB1bmRlZmluZWQgKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhcyA9IHRoaXMucmVmaW5lKHRoaXMuZGF0YXMsIHRoaXMuc3RhdGUsIHRoaXMuc3RhdGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9zdGFibGUgPSB0aGlzLmRhdGFzICE9PSB1bmRlZmluZWQ7Ly8gc3RhYmxlIGlmIGl0IGhhdmUgaW5pdGlhbCByZXN1bHQgZGF0YXNcclxuICAgICAgICAhdGhpcy5fc3RhYmxlICYmIHRoaXMuZW1pdCgndW5zdGFibGUnLCB0aGlzLnN0YXRlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE92ZXJyaWRhYmxlIG1ldGhvZCB0byBrbm93IGlmIGEgc3RhdGUgY2hhbmdlIHNob3VsZCBiZSBwcm9wYWcgdG8gdGhlIGxpc3RlbmluZyBzdG9yZXMgJiBjb21wb25lbnRzXHJcbiAgICAgKiBJZiBzdGF0aWMgZm9sbG93IGlzIGRlZmluZWQsIHNob3VsZFByb3BhZyB3aWxsIHJldHVybiB0cnVlIGlmIGFueSBvZiB0aGUgXCJmb2xsb3dcIiBrZXlzIHdhcyB1cGRhdGVkXHJcbiAgICAgKiBJZiBub3QgaXQgd2lsbCBhbHdheXMgcmV0dXJuIHRydWVcclxuICAgICAqL1xyXG4gICAgc2hvdWxkUHJvcGFnKCBuRGF0YXMgKSB7XHJcbiAgICAgICAgdmFyIF9zdGF0aWMgPSB0aGlzLmNvbnN0cnVjdG9yLCByLFxyXG4gICAgICAgICAgICBjRGF0YXMgID0gdGhpcy5kYXRhcztcclxuXHJcbiAgICAgICAgLy8gaWYgKCAhY1N0YXRlIClcclxuICAgICAgICAvLyAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgaWYgKCAhY0RhdGFzICYmICghX3N0YXRpYy5mb2xsb3cgfHwgIV9zdGF0aWMuZm9sbG93Lmxlbmd0aCB8fFxyXG4gICAgICAgICAgICAgICAgX3N0YXRpYy5mb2xsb3cgJiYgX3N0YXRpYy5mb2xsb3cucmVkdWNlKCggciwgaSApID0+IChyIHx8IG5EYXRhcyAmJiBuRGF0YXNbaV0pLCBmYWxzZSkpIClcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgICAgIGlmICggaXNBcnJheShfc3RhdGljLmZvbGxvdykgKVxyXG4gICAgICAgICAgICBfc3RhdGljLmZvbGxvdy5mb3JFYWNoKFxyXG4gICAgICAgICAgICAgICAgKCBrZXkgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgciA9IHIgfHwgKG5EYXRhcyA/IGNEYXRhc1trZXldICE9PSBuRGF0YXNba2V5XSA6IGNEYXRhcyAmJiBjRGF0YXNba2V5XSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICBlbHNlIGlmICggX3N0YXRpYy5mb2xsb3cgPT09ICdzdHJpY3QnIClcclxuICAgICAgICAgICAgciA9IG5EYXRhcyA9PT0gY0RhdGFzO1xyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjRGF0YXMgJiYgT2JqZWN0LmtleXMoY0RhdGFzKS5mb3JFYWNoKFxyXG4gICAgICAgICAgICAgICAgKCBrZXkgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgciA9IHIgfHwgKG5EYXRhcyA/IGNEYXRhc1trZXldICE9PSBuRGF0YXNba2V5XSA6IGNEYXRhcyAmJiBjRGF0YXNba2V5XSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgbkRhdGFzICYmIE9iamVjdC5rZXlzKG5EYXRhcykuZm9yRWFjaChcclxuICAgICAgICAgICAgICAgICgga2V5ICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHIgPSByIHx8IChuRGF0YXMgPyBjRGF0YXNba2V5XSAhPT0gbkRhdGFzW2tleV0gOiBjRGF0YXMgJiYgY0RhdGFzW2tleV0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gISFyO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogT3ZlcnJpZGFibGUgcmVmaW5lciAvIHJlbWFwcGVyXHJcbiAgICAgKiBJZiBzdGF0ZSBvciBsYXN0UHVibGljU3RhdGUgYXJlIHNpbXBsZSBoYXNoIG1hcHMgcmVmaW5lIHdpbGwgcmV0dXJuIHsuLi5kYXRhcywgLi4uc3RhdGV9XHJcbiAgICAgKiBpZiBub3QgaXQgd2lsbCByZXR1cm4gdGhlIGxhc3QgcHJpdmF0ZSBzdGF0ZVxyXG4gICAgICogQHBhcmFtIGRhdGFzXHJcbiAgICAgKiBAcGFyYW0gc3RhdGVcclxuICAgICAqIEByZXR1cm5zIHsqfVxyXG4gICAgICovXHJcbiAgICByZWZpbmUoIGRhdGFzLCBzdGF0ZSwgY2hhbmdlcyApIHtcclxuICAgICAgICBzdGF0ZSA9IHN0YXRlIHx8IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgICAgIGlmICggIWRhdGFzIHx8IGRhdGFzLl9fcHJvdG9fXyAhPT0gb2JqUHJvdG8gfHwgc3RhdGUuX19wcm90b19fICE9PSBvYmpQcm90byApXHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uZGF0YXMsIC4uLnN0YXRlfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVib3VuY2UgdGhpcyBzdG9yZSBwcm9wYWdhdGlvbiAoICYgcmVkdWNpbmcgKVxyXG4gICAgICogQHBhcmFtIGNiXHJcbiAgICAgKi9cclxuICAgIHN0YWJpbGl6ZSggY2IgKSB7XHJcbiAgICAgICAgdmFyIG1lID0gdGhpcztcclxuICAgICAgICBjYiAmJiBtZS5vbmNlKCdzdGFibGUnLCBjYik7XHJcbiAgICAgICAgdGhpcy5fc3RhYmxlICYmIHRoaXMuZW1pdCgndW5zdGFibGUnLCB0aGlzLnN0YXRlLCB0aGlzLmRhdGFzKTtcclxuXHJcbiAgICAgICAgbWUuX3N0YWJsZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICBpZiAoIHRoaXMuX3N0YWJpbGl6ZXIgKVxyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5fc3RhYmlsaXplcik7XHJcblxyXG4gICAgICAgIHRoaXMuX3N0YWJpbGl6ZXIgPSBzZXRUaW1lb3V0KFxyXG4gICAgICAgICAgICB0aGlzLnB1c2guYmluZChcclxuICAgICAgICAgICAgICAgIHRoaXMsXHJcbiAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgKCkgPT4gey8vQHRvZG9cclxuICAgICAgICAgICAgICAgICAgICAvLyBtZS5fc3RhYmxlICAgICAgID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zdGFiaWxpemVyID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnJlbGVhc2UoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZGlzcGF0Y2goIGV2ZW50ICkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFB1bGwgc3RvcmVzIGluIHRoZSBwcml2YXRlIHN0YXRlXHJcbiAgICAgKiBAcGFyYW0gc3RvcmVzICB7QXJyYXl9IChwYXNzZWQgdG8gU3RvcmU6Om1hcCkgRXggOiBbXCJzZXNzaW9uXCIsIFwib3RoZXJOYW1lZFN0b3JlOmtleVwiLCBvdGhlclN0b3JlLmFzKFwib3RoZXJLZXlcIildXHJcbiAgICAgKi9cclxuICAgIHB1bGwoIHN0b3JlcywgZG9XYWl0LCBvcmlnaW4gKSB7XHJcbiAgICAgICAgbGV0IGluaXRpYWxPdXRwdXRzID0gU3RvcmUubWFwKHRoaXMsIHN0b3JlcywgdGhpcy5jb250ZXh0T2JqLCBvcmlnaW4sIHRydWUpO1xyXG4gICAgICAgIGlmICggZG9XYWl0ICkge1xyXG4gICAgICAgICAgICB0aGlzLndhaXQoKTtcclxuICAgICAgICAgICAgc3RvcmVzLmZvckVhY2goKCBzICkgPT4gdGhpcy5jb250ZXh0W3NdICYmIHRoaXMud2FpdCh0aGlzLmNvbnRleHRbc10pKTtcclxuICAgICAgICAgICAgdGhpcy5yZWxlYXNlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBpbml0aWFsT3V0cHV0cztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFwcGx5IHJlZmluZS9yZW1hcCBvbiB0aGUgcHJpdmF0ZSBzdGF0ZSAmIHB1c2ggdGhlIHJlc3VsdGluZyBcInB1YmxpY1wiIHN0YXRlIHRvIGZvbGxvd2Vyc1xyXG4gICAgICogQHBhcmFtIGNiXHJcbiAgICAgKi9cclxuICAgIHB1c2goIGRhdGFzLCBmb3JjZSwgY2IgKSB7XHJcbiAgICAgICAgY2IgICAgICAgICAgICA9IGZvcmNlID09PSB0cnVlID8gY2IgOiBmb3JjZTtcclxuICAgICAgICBmb3JjZSAgICAgICAgID0gZm9yY2UgPT09IHRydWU7XHJcbiAgICAgICAgdmFyIGkgICAgICAgICA9IDAsXHJcbiAgICAgICAgICAgIG1lICAgICAgICA9IHRoaXMsXHJcbiAgICAgICAgICAgIG5leHRTdGF0ZSA9ICFkYXRhcyAmJiB7Li4udGhpcy5zdGF0ZSwgLi4udGhpcy5fY2hhbmdlc1NXfSB8fCB0aGlzLnN0YXRlLFxyXG4gICAgICAgICAgICBuZXh0RGF0YXMgPSBkYXRhcyB8fFxyXG4gICAgICAgICAgICAgICAgKHRoaXMuaXNDb21wbGV0ZShuZXh0U3RhdGUpID8gdGhpcy5yZWZpbmUodGhpcy5kYXRhcywgbmV4dFN0YXRlLCB0aGlzLl9jaGFuZ2VzU1cpIDogdGhpcy5kYXRhcyk7XHJcblxyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0gbmV4dFN0YXRlO1xyXG4gICAgICAgIGlmICggIWZvcmNlICYmXHJcbiAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgICghdGhpcy5kYXRhcyAmJiB0aGlzLmRhdGFzID09PSBuZXh0RGF0YXMpIHx8ICF0aGlzLnNob3VsZFByb3BhZyhuZXh0RGF0YXMpXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgY2IgJiYgY2IoKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5kYXRhcyA9IG5leHREYXRhcztcclxuICAgICAgICB0aGlzLmxvY2tzKys7XHJcbiAgICAgICAgdGhpcy5yZWxlYXNlKGNiKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBVcGRhdGUgdGhlIGN1cnJlbnQgcHJpdmF0ZSBzdGF0ZSAmIHB1c2ggaXQgb25jZSB0aGUgc3RvcmUgaXMgc3RhYmxlXHJcbiAgICAgKiBAcGFyYW0gcFN0YXRlXHJcbiAgICAgKiBAcGFyYW0gY2JcclxuICAgICAqL1xyXG4gICAgc2V0U3RhdGUoIHBTdGF0ZSwgY2IsIHN5bmMgKSB7XHJcbiAgICAgICAgdmFyIGkgICAgICAgPSAwLCBjaGFuZ2UsXHJcbiAgICAgICAgICAgIGNoYW5nZXMgPSB0aGlzLl9jaGFuZ2VzU1cgPSB0aGlzLl9jaGFuZ2VzU1cgfHwge307XHJcbiAgICAgICAgZm9yICggdmFyIGsgaW4gcFN0YXRlIClcclxuICAgICAgICAgICAgaWYgKCAhdGhpcy5zdGF0ZSB8fCBwU3RhdGUuaGFzT3duUHJvcGVydHkoaylcclxuICAgICAgICAgICAgICAgICYmIChcclxuICAgICAgICAgICAgICAgICAgICBwU3RhdGVba10gIT0gdGhpcy5zdGF0ZVtrXVxyXG4gICAgICAgICAgICAgICAgICAgIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgKHRoaXMuc3RhdGVba10gJiYgcFN0YXRlW2tdICYmIChwU3RhdGVba10uX3JldiAhPSB0aGlzLl9yZXZzW2tdKSkvLyByZXYvaGFzaCB1cGRhdGVcclxuICAgICAgICAgICAgICAgICkgKSB7XHJcbiAgICAgICAgICAgICAgICBjaGFuZ2UgICAgICAgID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3JldnNba10gPSBwU3RhdGVba10gJiYgcFN0YXRlW2tdLl9yZXYgfHwgdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGNoYW5nZXNba10gICAgPSBwU3RhdGVba107XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCBzeW5jICkge1xyXG4gICAgICAgICAgICB0aGlzLnB1c2goKTtcclxuICAgICAgICAgICAgY2IgJiYgY2IoKTtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKCBjaGFuZ2UgKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YWJpbGl6ZShjYik7XHJcbiAgICAgICAgICAgIH0gZWxzZSBjYiAmJiBjYigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFVwZGF0ZSB0aGUgY3VycmVudCBwcml2YXRlIHN0YXRlICYgcHVzaCBpdCBvbmNlIHRoZSBzdG9yZSBpcyBzdGFibGVcclxuICAgICAqIEBwYXJhbSBwU3RhdGVcclxuICAgICAqIEBwYXJhbSBjYlxyXG4gICAgICovXHJcbiAgICBzZXRTdGF0ZVN5bmMoIHBTdGF0ZSApIHtcclxuICAgICAgICB2YXIgaSAgICAgICA9IDAsIGNoYW5nZSxcclxuICAgICAgICAgICAgY2hhbmdlcyA9IHRoaXMuX2NoYW5nZXNTVyA9IHRoaXMuX2NoYW5nZXNTVyB8fCB7fTtcclxuICAgICAgICBmb3IgKCB2YXIgayBpbiBwU3RhdGUgKVxyXG4gICAgICAgICAgICBpZiAoICF0aGlzLnN0YXRlIHx8IHBTdGF0ZS5oYXNPd25Qcm9wZXJ0eShrKVxyXG4gICAgICAgICAgICAgICAgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIHBTdGF0ZVtrXSAhPSB0aGlzLnN0YXRlW2tdXHJcbiAgICAgICAgICAgICAgICAgICAgfHxcclxuICAgICAgICAgICAgICAgICAgICAodGhpcy5zdGF0ZVtrXSAmJiBwU3RhdGVba10gJiYgKHBTdGF0ZVtrXS5fcmV2ICE9IHRoaXMuX3JldnNba10pKS8vIHJldi9oYXNoIHVwZGF0ZVxyXG4gICAgICAgICAgICAgICAgKSApIHtcclxuICAgICAgICAgICAgICAgIGNoYW5nZSAgICAgICAgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcmV2c1trXSA9IHBTdGF0ZVtrXSAmJiBwU3RhdGVba10uX3JldiB8fCB0cnVlO1xyXG4gICAgICAgICAgICAgICAgY2hhbmdlc1trXSAgICA9IHBTdGF0ZVtrXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucHVzaCgpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVwbGFjZSB0aGUgY3VycmVudCBwcml2YXRlIHN0YXRlICYgcHVzaCBpdCBvbmNlIHRoZSBzdG9yZSBpcyBzdGFibGVcclxuICAgICAqIEBwYXJhbSBwU3RhdGVcclxuICAgICAqIEBwYXJhbSBjYlxyXG4gICAgICovXHJcbiAgICByZXBsYWNlU3RhdGUoIHBTdGF0ZSwgY2IgKSB7XHJcbiAgICAgICAgdmFyIGkgICAgICA9IDAsIG1lID0gdGhpcztcclxuICAgICAgICB0aGlzLnN0YXRlID0gcFN0YXRlO1xyXG5cclxuICAgICAgICB0aGlzLnN0YWJpbGl6ZShjYik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBnZXQgYSBzdG9yZS1rZXkgcGFpciBmb3IgU3RvcmU6Om1hcFxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcclxuICAgICAqIEByZXR1cm5zIHt7c3RvcmU6IFN0b3JlLCBuYW1lOiAqfX1cclxuICAgICAqL1xyXG4gICAgYXMoIG5hbWUgKSB7XHJcbiAgICAgICAgcmV0dXJuIHtzdG9yZSA6IHRoaXMsIG5hbWV9O1xyXG4gICAgfVxyXG5cclxuICAgIG9uKCBsaXN0cyApIHtcclxuICAgICAgICBpZiAoICFpc1N0cmluZyhsaXN0cykgJiYgbGlzdHMgKVxyXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhsaXN0cykuZm9yRWFjaChrID0+IHN1cGVyLm9uKGssIGxpc3RzW2tdKSk7XHJcbiAgICAgICAgZWxzZSBzdXBlci5vbiguLi5hcmd1bWVudHMpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUxpc3RlbmVyKCBsaXN0cyApIHtcclxuICAgICAgICBpZiAoICFpc1N0cmluZyhsaXN0cykgJiYgbGlzdHMgKVxyXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhsaXN0cykuZm9yRWFjaChrID0+IHN1cGVyLnJlbW92ZUxpc3RlbmVyKGssIGxpc3RzW2tdKSk7XHJcbiAgICAgICAgZWxzZSBzdXBlci5yZW1vdmVMaXN0ZW5lciguLi5hcmd1bWVudHMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogcmVsaW5rIGJpbmRpbmdzICYgcmVxdWlyZXNcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXHJcbiAgICAgKiBAcmV0dXJucyB7e3N0b3JlOiBTdG9yZSwgbmFtZTogKn19XHJcbiAgICAgKi9cclxuICAgIHJlbGluayggZnJvbSApIHtcclxuICAgICAgICBsZXQgY29udGV4dCA9IHRoaXMuY29udGV4dE9iaixcclxuICAgICAgICAgICAgX3N0YXRpYyA9IHRoaXMuY29uc3RydWN0b3I7XHJcbiAgICAgICAgaWYgKCBfc3RhdGljLnVzZSApIHtcclxuICAgICAgICAgICAgLy90b2RvIHVubGlua1xyXG4gICAgICAgICAgICB0aGlzLnB1bGwoX3N0YXRpYy51c2UsIGZhbHNlLCBmcm9tKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICggdGhpcy5fcmVxdWlyZSApIHtcclxuICAgICAgICAgICAgdGhpcy5fcmVxdWlyZS5mb3JFYWNoKFxyXG4gICAgICAgICAgICAgICAgc3RvcmUgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2FpdChjb250ZXh0Ll9fY29udGV4dFtzdG9yZV0pXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogaXMgY29tcGxldGUgKGFsbCByZXF1aWVyZWQga2V5cyBhcmUgaGVyZSlcclxuICAgICAqIEByZXR1cm5zIGJvb2xcclxuICAgICAqL1xyXG4gICAgaXNDb21wbGV0ZSggc3RhdGUgPSB0aGlzLnN0YXRlICkge1xyXG4gICAgICAgIHZhciBfc3RhdGljID0gdGhpcy5jb25zdHJ1Y3RvcjtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAhdGhpcy5fcmVxdWlyZVxyXG4gICAgICAgICAgICB8fCAhdGhpcy5fcmVxdWlyZS5sZW5ndGhcclxuICAgICAgICAgICAgfHwgc3RhdGUgJiYgdGhpcy5fcmVxdWlyZS5yZWR1Y2UoXHJcbiAgICAgICAgICAgICAgICAoIHIsIGtleSApID0+IChyICYmIHN0YXRlW2tleV0pLFxyXG4gICAgICAgICAgICAgICAgdHJ1ZVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGlzIHN0YWJsZVxyXG4gICAgICogQHJldHVybnMgYm9vbFxyXG4gICAgICovXHJcbiAgICBpc1N0YWJsZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc3RhYmxlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVW4gYmluZCB0aGlzIHN0b3JlIG9mZiB0aGUgZ2l2ZW4gY29tcG9uZW50LWtleVxyXG4gICAgICogQHBhcmFtIG9ialxyXG4gICAgICogQHBhcmFtIGtleVxyXG4gICAgICogQHJldHVybnMge0FycmF5LjwqPn1cclxuICAgICAqL1xyXG4gICAgdW5CaW5kKCBvYmosIGtleSApIHtcclxuICAgICAgICB2YXIgZm9sbG93ZXJzID0gdGhpcy5fZm9sbG93ZXJzLFxyXG4gICAgICAgICAgICBpICAgICAgICAgPSBmb2xsb3dlcnMgJiYgZm9sbG93ZXJzLmxlbmd0aDtcclxuICAgICAgICB3aGlsZSAoZm9sbG93ZXJzICYmIGktLSlcclxuICAgICAgICAgICAgaWYgKCBmb2xsb3dlcnNbaV1bMF0gPT0gb2JqICYmIGZvbGxvd2Vyc1tpXVsxXSA9PSBrZXkgKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZvbGxvd2Vycy5zcGxpY2UoaSwgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBCaW5kIHRoaXMgc3RvcmUgY2hhbmdlcyB0byB0aGUgZ2l2ZW4gY29tcG9uZW50LWtleVxyXG4gICAgICogQHBhcmFtIG9iaiB7UmVhY3QuQ29tcG9uZW50fFN0b3JlfGZ1bmN0aW9uKVxyXG4gICAgICogQHBhcmFtIGtleSB7c3RyaW5nfSBvcHRpb25hbCBrZXkgd2hlcmUgdG8gbWFwIHRoZSBwdWJsaWMgc3RhdGVcclxuICAgICAqL1xyXG4gICAgYmluZCggb2JqLCBrZXksIHNldEluaXRpYWwgPSB0cnVlICkge1xyXG4gICAgICAgIHRoaXMuX2ZvbGxvd2Vycy5wdXNoKFtvYmosIGtleV0pO1xyXG4gICAgICAgIGlmICggc2V0SW5pdGlhbCAmJiB0aGlzLmRhdGFzICYmIHRoaXMuX3N0YWJsZSApIHtcclxuICAgICAgICAgICAgaWYgKCB0eXBlb2Ygb2JqICE9IFwiZnVuY3Rpb25cIiApIHtcclxuICAgICAgICAgICAgICAgIGlmICgga2V5ICkgb2JqLnNldFN0YXRlKHtba2V5XSA6IHRoaXMuZGF0YXN9KTtcclxuICAgICAgICAgICAgICAgIGVsc2Ugb2JqLnNldFN0YXRlKHRoaXMuZGF0YXMpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgb2JqKHRoaXMuZGF0YXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogb25jZSgnc3RhYmxlJywgY2IpXHJcbiAgICAgKiBAcGFyYW0gb2JqIHtSZWFjdC5Db21wb25lbnR8U3RvcmV8ZnVuY3Rpb24pXHJcbiAgICAgKiBAcGFyYW0ga2V5IHtzdHJpbmd9IG9wdGlvbmFsIGtleSB3aGVyZSB0byBtYXAgdGhlIHB1YmxpYyBzdGF0ZVxyXG4gICAgICovXHJcbiAgICB0aGVuKCBjYiApIHtcclxuICAgICAgICBpZiAoIHRoaXMuX3N0YWJsZSApXHJcbiAgICAgICAgICAgIHJldHVybiBjYihudWxsLCB0aGlzLmRhdGFzKTtcclxuICAgICAgICB0aGlzLm9uY2UoJ3N0YWJsZScsIGUgPT4gY2IobnVsbCwgdGhpcy5kYXRhcykpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWRkIGEgbG9jayBzbyB0aGUgc3RvcmUgd2lsbCBub3QgcHJvcGFnIGl0IHN0YXRlIHVudGlsbCByZWxlYXNlKCkgaXMgY2FsbFxyXG4gICAgICogQHBhcmFtIHByZXZpb3VzIHtTdG9yZXxudW1iZXJ8QXJyYXl9IEBvcHRpb25hbCB3ZiB0byB3YWl0LCByZWxlYXNlcyB0byB3YWl0IG9yIGFycmF5IG9mIHN0dWZmIHRvIHdhaXRcclxuICAgICAqIEByZXR1cm5zIHtUYXNrRmxvd31cclxuICAgICAqL1xyXG4gICAgd2FpdCggcHJldmlvdXMgKSB7XHJcbiAgICAgICAgaWYgKCB0eXBlb2YgcHJldmlvdXMgPT0gXCJudW1iZXJcIiApXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxvY2tzICs9IHByZXZpb3VzO1xyXG4gICAgICAgIGlmICggaXNBcnJheShwcmV2aW91cykgKVxyXG4gICAgICAgICAgICByZXR1cm4gcHJldmlvdXMubWFwKHRoaXMud2FpdC5iaW5kKHRoaXMpKTtcclxuXHJcbiAgICAgICAgdGhpcy5fc3RhYmxlICYmIHRoaXMuZW1pdCgndW5zdGFibGUnLCB0aGlzLnN0YXRlLCB0aGlzLmRhdGFzKTtcclxuICAgICAgICB0aGlzLl9zdGFibGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmxvY2tzKys7XHJcbiAgICAgICAgaWYgKCBwcmV2aW91cyAmJiBpc0Z1bmN0aW9uKHByZXZpb3VzLnRoZW4pICkge1xyXG4gICAgICAgICAgICBwcmV2aW91cy50aGVuKHRoaXMucmVsZWFzZS5iaW5kKHRoaXMsIG51bGwpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWNyZWFzZSBsb2NrcyBmb3IgdGhpcyBzdG9yZSwgaWYgaXQgcmVhY2ggMCAmIGl0IGhhdmUgYSBwdWJsaWMgc3RhdGUsXHJcbiAgICAgKiBpdCB3aWxsIGJlIHByb3BhZ2F0ZWQgdG8gdGhlIGZvbGxvd2VycyxcclxuICAgICAqIHRoZW4sIGFsbCBzdHVmZiBwYXNzZWQgdG8gXCJ0aGVuXCIgY2FsbCBiYWNrIHdpbGwgYmUgZXhlYyAvIHJlbGVhc2VkXHJcbiAgICAgKiBAcGFyYW0gZGVzeW5jXHJcbiAgICAgKiBAcmV0dXJucyB7Kn1cclxuICAgICAqL1xyXG4gICAgcmVsZWFzZSggY2IgKSB7XHJcbiAgICAgICAgdmFyIF9zdGF0aWMgPSB0aGlzLmNvbnN0cnVjdG9yO1xyXG4gICAgICAgIGxldCBpICAgICAgID0gMDtcclxuXHJcbiAgICAgICAgaWYgKCAhLS10aGlzLmxvY2tzICYmIHRoaXMuZGF0YXMgJiYgdGhpcy5pc0NvbXBsZXRlKCkgKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3N0YWJsZSA9IHRydWU7XHJcblxyXG5cclxuICAgICAgICAgICAgdGhpcy5fcmV2ID0gMSArICh0aGlzLl9yZXYgKyAxKSAlIDEwMDAwMDA7Ly9cclxuICAgICAgICAgICAgaWYgKCB0aGlzLl9mb2xsb3dlcnMubGVuZ3RoIClcclxuICAgICAgICAgICAgICAgIHRoaXMuX2ZvbGxvd2Vycy5mb3JFYWNoKCggZm9sbG93ZXIgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCAhdGhpcy5kYXRhcyApIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIHR5cGVvZiBmb2xsb3dlclswXSA9PSBcImZ1bmN0aW9uXCIgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbGxvd2VyWzBdKHRoaXMuZGF0YXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNiICYmIGkrKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9sbG93ZXJbMF0uc2V0U3RhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZm9sbG93ZXJbMV0pID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtbZm9sbG93ZXJbMV1dIDogdGhpcy5kYXRhc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGFzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjYiAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgKCkgPT4gKCEoLS1pKSAmJiBjYigpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5lbWl0KCdzdGFibGUnLCB0aGlzLmRhdGFzKTtcclxuICAgICAgICAgICAgdGhpcy5lbWl0KCd1cGRhdGUnLCB0aGlzLmRhdGFzKTtcclxuICAgICAgICAgICAgY2IgJiYgY2IoKVxyXG4gICAgICAgIH0gZWxzZSBjYiAmJiB0aGlzLnRoZW4oY2IpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGRlc3Ryb3koKSB7XHJcblxyXG4gICAgICAgIHRoaXMuZW1pdCgnZGVzdHJveScsIHRoaXMpO1xyXG4gICAgICAgIGlmICggdGhpcy5fc3RhYmlsaXplciApXHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9zdGFiaWxpemVyKTtcclxuICAgICAgICB0aGlzLl9mb2xsb3dlcnMubGVuZ3RoID0gMDtcclxuICAgICAgICB0aGlzLmRlYWQgICAgICAgICAgICAgID0gdHJ1ZTtcclxuICAgICAgICBpZiAoIHRoaXMubmFtZSAmJiB0aGlzLmNvbnRleHRbdGhpcy5uYW1lXSA9PT0gdGhpcyApXHJcbiAgICAgICAgICAgIHRoaXMuY29udGV4dFt0aGlzLm5hbWVdID0gdGhpcy5jb25zdHJ1Y3RvcjtcclxuICAgICAgICB0aGlzLl9yZXZzID0gdGhpcy5kYXRhcyA9IHRoaXMuc3RhdGUgPSB0aGlzLmNvbnRleHQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMucmVtb3ZlQWxsTGlzdGVuZXJzKCk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvU3RvcmUuanMiXSwic291cmNlUm9vdCI6IiJ9