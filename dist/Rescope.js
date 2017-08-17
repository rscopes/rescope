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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNzBiYzQ4OTZlNDkxM2VhOWNmNWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Jlc2NvcGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9pc3N0cmluZy9pc1N0cmluZy51bWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9pc2FycmF5L2luZGV4LmpzIiwid2VicGFjazovLy8uL34vZXZlbnRzL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2lzZnVuY3Rpb24vbGliL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vfi9zaG9ydGlkL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vc2hvcnRpZC9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9zaG9ydGlkL2xpYi9hbHBoYWJldC5qcyIsIndlYnBhY2s6Ly8vLi9+L3Nob3J0aWQvbGliL3JhbmRvbS9yYW5kb20tZnJvbS1zZWVkLmpzIiwid2VicGFjazovLy8uL34vc2hvcnRpZC9saWIvZW5jb2RlLmpzIiwid2VicGFjazovLy8uL34vc2hvcnRpZC9saWIvcmFuZG9tL3JhbmRvbS1ieXRlLWJyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9zaG9ydGlkL2xpYi9kZWNvZGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9zaG9ydGlkL2xpYi9idWlsZC5qcyIsIndlYnBhY2s6Ly8vLi9+L3Nob3J0aWQvbGliL2lzLXZhbGlkLmpzIiwid2VicGFjazovLy8uL34vc2hvcnRpZC9saWIvdXRpbC9jbHVzdGVyLXdvcmtlci1pZC1icm93c2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9TdG9yZS5qcyJdLCJuYW1lcyI6WyJTdG9yZSIsIkNvbnRleHQiLCJpc1N0cmluZyIsInJlcXVpcmUiLCJpc0FycmF5IiwiRXZlbnRFbWl0dGVyIiwiaXNGdW5jdGlvbiIsInNob3J0aWQiLCJfX3Byb3RvX19wdXNoIiwidGFyZ2V0IiwiaWQiLCJwYXJlbnQiLCJoZXJlIiwicHJvdG90eXBlIiwib3BlbkNvbnRleHRzIiwia2V5IiwiY3R4Iiwic3RhdGUiLCJkYXRhcyIsIm5hbWUiLCJkZWZhdWx0TWF4TGlzdGVuZXJzIiwicGVyc2lzdGVuY2VUbSIsImF1dG9EZXN0cm95IiwiX21heExpc3RlbmVycyIsImNvbnN0cnVjdG9yIiwiX2lkIiwiZ2VuZXJhdGUiLCJyZWdpc3RlciIsIl9pc0xvY2FsSWQiLCJfcGVyc2lzdGVuY2VUbSIsInN0b3JlcyIsInNvdXJjZXMiLCJfX3JldGFpbkxvY2tzIiwiYWxsIiwiX193OExvY2tzIiwiX19saXN0ZW5pbmciLCJfX2NvbnRleHQiLCJfX21peGVkIiwiX19taXhlZExpc3QiLCJfZm9sbG93ZXJzIiwicmV0YWluIiwib24iLCJfX3BhcmVudExpc3QiLCJyZWxlYXNlIiwid2FpdCIsIl9wcm9wYWciLCJfc3RhYmxlIiwic2V0VGltZW91dCIsImRpc3Bvc2UiLCJmb3JFYWNoIiwiX21vdW50IiwiayIsImFyZ3VtZW50cyIsInJlZHVjZSIsIm1vdW50ZWQiLCJtb3VudFN0b3JlIiwiaXNTdGFibGUiLCJwcm9wYWciLCJ0YXJnZXRDdHgiLCJsaXN0cyIsInB1c2giLCJyZWxpbmsiLCJyYXdDdHgiLCJPYmplY3QiLCJrZXlzIiwic2luZ2xldG9uIiwic3JjQ3R4IiwiZXh0ZXJuYWwiLCJsY3R4IiwiX3N0b3JlcyIsImNvbnNvbGUiLCJ3YXJuIiwiZGVmaW5lUHJvcGVydHkiLCJnZXQiLCJfc3RhdGUiLCJzZXQiLCJ2IiwiX2RhdGFzIiwidW5kZWZpbmVkIiwib2JqIiwiYXMiLCJzZXRJbml0aWFsIiwibGFzdFJldnMiLCJyZXZzIiwibW91bnQiLCJnZXRVcGRhdGVzIiwic2V0U3RhdGUiLCJmb2xsb3dlcnMiLCJpIiwibGVuZ3RoIiwic3BsaWNlIiwiZG9XYWl0Iiwib3JpZ2luIiwiYmluZCIsIm91dHB1dCIsInVwZGF0ZWQiLCJoYXNPd25Qcm9wZXJ0eSIsIl9yZXYiLCJmbGFnc19zdGF0ZXMiLCJmbGFnc19kYXRhcyIsIl9mbGFnc19zdGF0ZXMiLCJfZmxhZ3NfZGF0YXMiLCJmbGFncyIsInIiLCJmbGFnIiwidGVzdCIsImNiIiwib25jZSIsInF1aWV0IiwicmVhc29uIiwiX2Rlc3Ryb3lUTSIsImNsZWFyVGltZW91dCIsImRlc3Ryb3kiLCJsb2ciLCJlbWl0IiwiX3Byb3BhZ1RNIiwiX3N0YWJpbGl6ZXJUTSIsInJlbW92ZUxpc3RlbmVyIiwiY29udGV4dE9iaiIsInNoaWZ0IiwiY29udGV4dHMiLCJvYmpQcm90byIsImdldFByb3RvdHlwZU9mIiwic3RvcmUiLCJjb21wb25lbnQiLCJjb250ZXh0IiwidGFyZ2V0UmV2cyIsIl9yZXZzIiwiaW5pdGlhbE91dHB1dHMiLCJzdGF0aWNDb250ZXh0IiwiZmlsdGVyIiwiZXJyb3IiLCJhbGlhcyIsImRlZmF1bHROYW1lIiwibWF0Y2giLCJtaXhlZENXVW5tb3VudCIsInVuTW91bnRLZXkiLCJpc1JlYWN0Q29tcG9uZW50IiwibWFwIiwic3BsaXQiLCJ1bkJpbmQiLCJhcHBseSIsInNrZXkiLCJzb3J0IiwiYSIsImIiLCJmaXJzdG5hbWUiLCJqb2luIiwiY29udGV4dE1hcCIsImdldENvbnRleHQiLCJhcmd6IiwiX3N0YXRpYyIsImNmZyIsIndhdGNocyIsInVzZSIsInJlZmluZSIsImluaXRpYWxTdGF0ZSIsIl91aWQiLCJsb2NrcyIsIl9vblN0YWJpbGl6ZSIsIl91c2UiLCJfcmVxdWlyZSIsInB1bGwiLCJpc0NvbXBsZXRlIiwibkRhdGFzIiwiY0RhdGFzIiwiZm9sbG93IiwiY2hhbmdlcyIsIl9fcHJvdG9fXyIsIm1lIiwiX3N0YWJpbGl6ZXIiLCJldmVudCIsInMiLCJmb3JjZSIsIm5leHRTdGF0ZSIsIl9jaGFuZ2VzU1ciLCJuZXh0RGF0YXMiLCJzaG91bGRQcm9wYWciLCJwU3RhdGUiLCJzeW5jIiwiY2hhbmdlIiwic3RhYmlsaXplIiwiZnJvbSIsInByZXZpb3VzIiwidGhlbiIsImZvbGxvd2VyIiwiZGVhZCIsInJlbW92ZUFsbExpc3RlbmVycyIsImF1dG9raWxsIl0sIm1h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QTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBRztBQUNILHFCQUFvQixTQUFTO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7O0FDN1NBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFOzs7Ozs7QUNUQTtBQUNBOzs7Ozs7O0FDREE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNoRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNqR0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUN4QkE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDbEJBOztBQUVBLCtFQUE4RTs7QUFFOUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQ2JBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFD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QUFWLEVBQ0kzRCxhQUFhLEtBQUsyRCxXQUFsQjtBQUNKLGtCQUFLbkksVUFBTCxDQUFnQmtELE1BQWhCLEdBQXlCLENBQXpCO0FBQ0Esa0JBQUtpRyxJQUFMLEdBQXlCLElBQXpCO0FBQ0Esa0JBQUszRCxLQUFMLEdBQXlCLEtBQUs3RyxLQUFMLEdBQWEsS0FBS0QsS0FBTCxHQUFhLEtBQUs0RyxPQUFMLEdBQWUsSUFBbEU7QUFDQSxrQkFBSzhELGtCQUFMO0FBQ0g7Ozs7R0EzbUI4QnRMLFk7O0FBQWRMLE0sQ0FFVjBKLEcsR0FBc0IsRTtBQUZaMUosTSxDQUtWaUksYSxHQUFzQixJQUFJaEksT0FBSixDQUFZLEVBQVosRUFBZ0IsRUFBQ1MsSUFBSyxRQUFOLEVBQWhCLEM7QUFMWlYsTSxDQU1WNEosWSxHQUFzQjlFLFM7QUFOWjlFLE0sQ0FPVm9CLG1CLEdBQXNCLEU7QUFQWnBCLE0sQ0FRVjRMLFEsR0FBc0IsSzttQkFSWjVMLEsiLCJmaWxlIjoiZGlzdC9SZXNjb3BlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDcwYmM0ODk2ZTQ5MTNlYTljZjVlIiwiLypcclxuICogQ29weXJpZ2h0IChjKSAgMjAxNyBDYWlwaSBMYWJzIC5cclxuICpcclxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuICpcclxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcbiAqXHJcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxyXG4gKi9cclxuXHJcbmltcG9ydCBDb250ZXh0IGZyb20gXCIuL0NvbnRleHRcIjtcclxuaW1wb3J0IFN0b3JlIGZyb20gXCIuL1N0b3JlXCI7XHJcblxyXG5Db250ZXh0LlN0b3JlID0gU3RvcmU7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7U3RvcmUsIENvbnRleHR9O1xyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1Jlc2NvcGUuanMiLCIvKlxyXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTcuICBDYWlwaSBMYWJzLiAgQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICpcclxuICogVGhpcyBGaWxlIGlzIHBhcnQgb2YgQ2FpcGkuIFlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcclxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXNcclxuICogcHVibGlzaGVkIGJ5IHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlXHJcbiAqIExpY2Vuc2UsIG9yIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXHJcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxyXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxyXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXHJcbiAqIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxyXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcclxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cclxuICogIFRoaXMgcHJvamVjdCBpcyBkdWFsIGxpY2Vuc2VkIHVuZGVyIEFHUEwgYW5kIENvbW1lcmNpYWwgTGljZW5jZS5cclxuICpcclxuICogQGF1dGhvciA6IE5hdGhhbmFlbCBCcmF1blxyXG4gKiBAY29udGFjdCA6IGNhaXBpbGFic0BnbWFpbC5jb21cclxuICovXHJcblxyXG4vKipcclxuICogQGF1dGhvciBOYXRoYW5hZWwgQlJBVU5cclxuICpcclxuICogRGF0ZTogMTMvMDgvMjAxN1xyXG4gKiBUaW1lOiAxNzoxNVxyXG4gKi9cclxuXHJcblxyXG52YXIgaXNTdHJpbmcgICAgICAgID0gcmVxdWlyZSgnaXNzdHJpbmcnKSxcclxuICAgIGlzQXJyYXkgICAgICAgICA9IHJlcXVpcmUoJ2lzYXJyYXknKSxcclxuICAgIEV2ZW50RW1pdHRlciAgICA9IHJlcXVpcmUoJ2V2ZW50cycpLFxyXG4gICAgaXNGdW5jdGlvbiAgICAgID0gcmVxdWlyZSgnaXNmdW5jdGlvbicpXHJcbiAgICAsIHNob3J0aWQgICAgICAgPSByZXF1aXJlKCdzaG9ydGlkJylcclxuICAgICwgX19wcm90b19fcHVzaCA9ICggdGFyZ2V0LCBpZCwgcGFyZW50ICkgPT4ge1xyXG4gICAgbGV0IGhlcmUgICAgICAgICAgID0ge1xyXG4gICAgICAgIFtpZF0gOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGhlcmVbaWRdLnByb3RvdHlwZSA9IHBhcmVudCA/IG5ldyBwYXJlbnRbXCJfXCIgKyBpZF0oKSA6IHRhcmdldFtpZF0gfHwge307XHJcbiAgICB0YXJnZXRbaWRdICAgICAgICAgPSBuZXcgaGVyZVtpZF0oKTtcclxuICAgIHRhcmdldFsnXycgKyBpZF0gICA9IGhlcmVbaWRdO1xyXG59O1xyXG5cclxubGV0IG9wZW5Db250ZXh0cyA9IHt9O1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRleHQgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xyXG4gICAgc3RhdGljIGNvbnRleHRzICAgICAgICAgICAgPSBvcGVuQ29udGV4dHM7XHJcbiAgICBzdGF0aWMgU3RvcmUgICAgICAgICAgICAgICA9IG51bGw7XHJcbiAgICBzdGF0aWMgZGVmYXVsdE1heExpc3RlbmVycyA9IDIwO1xyXG4gICAgc3RhdGljIHBlcnNpc3RlbmNlVG0gICAgICAgPSAwO1xyXG5cclxuICAgIHN0YXRpYyBnZXRDb250ZXh0KCBrZXkgKSB7XHJcbiAgICAgICAgcmV0dXJuIG9wZW5Db250ZXh0c1trZXldID0gb3BlbkNvbnRleHRzW2tleV0gfHwgbmV3IENvbnRleHQoe30pO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciggY3R4LCB7aWQsIHBhcmVudCwgc3RhdGUsIGRhdGFzLCBuYW1lLCBkZWZhdWx0TWF4TGlzdGVuZXJzLCBwZXJzaXN0ZW5jZVRtLCBhdXRvRGVzdHJveX0gPSB7fSApIHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICB0aGlzLl9tYXhMaXN0ZW5lcnMgPSBkZWZhdWx0TWF4TGlzdGVuZXJzIHx8IHRoaXMuY29uc3RydWN0b3IuZGVmYXVsdE1heExpc3RlbmVycztcclxuICAgICAgICB0aGlzLl9pZCAgICAgICAgICAgPSBpZCA9IGlkIHx8IChcIl9fX19fXCIgKyBzaG9ydGlkLmdlbmVyYXRlKCkpO1xyXG5cclxuICAgICAgICBpZiAoIG9wZW5Db250ZXh0c1tpZF0gKSB7XHJcbiAgICAgICAgICAgIG9wZW5Db250ZXh0c1tpZF0ucmVnaXN0ZXIoY3R4KTtcclxuICAgICAgICAgICAgcmV0dXJuIG9wZW5Db250ZXh0c1tpZF1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG9wZW5Db250ZXh0c1tpZF0gICAgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuX2lzTG9jYWxJZCAgICAgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuX3BlcnNpc3RlbmNlVG0gPSBwZXJzaXN0ZW5jZVRtIHx8IHRoaXMuY29uc3RydWN0b3IucGVyc2lzdGVuY2VUbTtcclxuXHJcbiAgICAgICAgdGhpcy5zdG9yZXMgPSB7fTtcclxuICAgICAgICB0aGlzLnN0YXRlICA9IHt9O1xyXG4gICAgICAgIHRoaXMuZGF0YXMgID0ge307XHJcbiAgICAgICAgX19wcm90b19fcHVzaCh0aGlzLCAnc3RvcmVzJywgcGFyZW50KTtcclxuICAgICAgICBfX3Byb3RvX19wdXNoKHRoaXMsICdzdGF0ZScsIHBhcmVudCk7XHJcbiAgICAgICAgX19wcm90b19fcHVzaCh0aGlzLCAnZGF0YXMnLCBwYXJlbnQpO1xyXG4gICAgICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xyXG5cclxuICAgICAgICB0aGlzLnNvdXJjZXMgPSBbXTtcclxuXHJcbiAgICAgICAgdGhpcy5fX3JldGFpbkxvY2tzID0ge2FsbCA6IDB9O1xyXG4gICAgICAgIHRoaXMuX193OExvY2tzICAgICA9IHthbGwgOiAxfTtcclxuICAgICAgICB0aGlzLl9fbGlzdGVuaW5nICAgPSB7fTtcclxuICAgICAgICB0aGlzLl9fY29udGV4dCAgICAgPSB7fTtcclxuICAgICAgICB0aGlzLl9fbWl4ZWQgICAgICAgPSBbXTtcclxuICAgICAgICB0aGlzLl9fbWl4ZWRMaXN0ICAgPSBbXTtcclxuICAgICAgICB0aGlzLl9mb2xsb3dlcnMgICAgPSBbXTtcclxuICAgICAgICBpZiAoIHBhcmVudCApIHtcclxuICAgICAgICAgICAgcGFyZW50LnJldGFpbihcImlzTXlQYXJlbnRcIik7XHJcbiAgICAgICAgICAgIHBhcmVudC5vbih0aGlzLl9fcGFyZW50TGlzdCA9IHtcclxuICAgICAgICAgICAgICAgICdzdGFibGUnICAgOiBzID0+IHRoaXMucmVsZWFzZShcImlzTXlQYXJlbnRcIiksXHJcbiAgICAgICAgICAgICAgICAndW5zdGFibGUnIDogcyA9PiB0aGlzLndhaXQoXCJpc015UGFyZW50XCIpLFxyXG4gICAgICAgICAgICAgICAgJ3VwZGF0ZScgICA6IHMgPT4gdGhpcy5fcHJvcGFnKClcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIC8vIHRoaXMucmVnaXN0ZXIocGFyZW50Ll9fY29udGV4dCwgc3RhdGUsIGRhdGFzKTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICB0aGlzLnJlZ2lzdGVyKGN0eCwgc3RhdGUsIGRhdGFzKTtcclxuICAgICAgICB0aGlzLl9fdzhMb2Nrcy5hbGwtLTtcclxuICAgICAgICB0aGlzLl9zdGFibGUgPSAhIXRoaXMuX193OExvY2tzLmFsbDtcclxuXHJcbiAgICAgICAgaWYgKCBhdXRvRGVzdHJveSApXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoXHJcbiAgICAgICAgICAgICAgICB0bSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXRhaW4oKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpc3Bvc2UoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIG1vdW50KCBpZCwgc3RhdGUsIGRhdGFzICkge1xyXG4gICAgICAgIGlmICggaXNBcnJheShpZCkgKSB7XHJcbiAgICAgICAgICAgIGlkLmZvckVhY2goayA9PiB0aGlzLl9tb3VudChrLCBzdGF0ZSAmJiBzdGF0ZVtrXSwgZGF0YXMgJiYgZGF0YXNba10pKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9tb3VudCguLi5hcmd1bWVudHMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBfbW91bnQoIGlkLCBzdGF0ZSwgZGF0YXMgKSB7XHJcbiAgICAgICAgaWYgKCAhdGhpcy5fX2NvbnRleHRbaWRdICkgey8vYXNrIG1peGVkIHx8IHBhcmVudFxyXG4gICAgICAgICAgICBpZiAoIHRoaXMuX19taXhlZC5yZWR1Y2UoKCBtb3VudGVkLCBjdHggKSA9PiAobW91bnRlZCB8fCBjdHguX21vdW50KGlkLCBzdGF0ZSwgZGF0YXMpKSwgZmFsc2UpIHx8XHJcbiAgICAgICAgICAgICAgICAhdGhpcy5wYXJlbnQgKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJlbnQuX21vdW50KC4uLmFyZ3VtZW50cyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY29uc3RydWN0b3IuU3RvcmUubW91bnRTdG9yZShpZCwgdGhpcywgbnVsbCwgc3RhdGUsIGRhdGFzKTtcclxuXHJcbiAgICAgICAgaWYgKCAhdGhpcy5fX2xpc3RlbmluZ1tpZF0gKSB7XHJcbiAgICAgICAgICAgICF0aGlzLl9fY29udGV4dFtpZF0uaXNTdGFibGUoKSAmJiB0aGlzLndhaXQoaWQpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5fX2NvbnRleHRbaWRdLm9uKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fX2xpc3RlbmluZ1tpZF0gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ3VwZGF0ZScgICA6IHMgPT4gdGhpcy5wcm9wYWcoKSxcclxuICAgICAgICAgICAgICAgICAgICAnc3RhYmxlJyAgIDogcyA9PiB0aGlzLnJlbGVhc2UoaWQpLFxyXG4gICAgICAgICAgICAgICAgICAgICd1bnN0YWJsZScgOiBzID0+IHRoaXMud2FpdChpZClcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5fX2NvbnRleHRbaWRdO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBtaXhpbiggdGFyZ2V0Q3R4ICkge1xyXG4gICAgICAgIGxldCBwYXJlbnQgPSB0aGlzLnBhcmVudCwgbGlzdHM7XHJcbiAgICAgICAgdGhpcy5fX21peGVkLnB1c2godGFyZ2V0Q3R4KVxyXG4gICAgICAgIHRhcmdldEN0eC5yZXRhaW4oKTtcclxuXHJcbiAgICAgICAgdGhpcy5fX21peGVkTGlzdC5wdXNoKGxpc3RzID0ge1xyXG4gICAgICAgICAgICAnc3RhYmxlJyAgIDogcyA9PiB0aGlzLnJlbGVhc2UodGFyZ2V0Q3R4Ll9pZCksXHJcbiAgICAgICAgICAgICd1bnN0YWJsZScgOiBzID0+IHRoaXMud2FpdCh0YXJnZXRDdHguX2lkKSxcclxuICAgICAgICAgICAgJ3VwZGF0ZScgICA6IHMgPT4gdGhpcy5fcHJvcGFnKClcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRhcmdldEN0eC5vbihsaXN0cyk7XHJcbiAgICAgICAgX19wcm90b19fcHVzaCh0aGlzLCAnc3RvcmVzJywgcGFyZW50KTtcclxuICAgICAgICBfX3Byb3RvX19wdXNoKHRoaXMsICdzdGF0ZScsIHBhcmVudCk7XHJcbiAgICAgICAgX19wcm90b19fcHVzaCh0aGlzLCAnZGF0YXMnLCBwYXJlbnQpO1xyXG4gICAgICAgIHRhcmdldEN0eC5yZWxpbmsodGFyZ2V0Q3R4Ll9fY29udGV4dCwgdGhpcywgdHJ1ZSk7XHJcblxyXG4gICAgICAgIF9fcHJvdG9fX3B1c2godGhpcywgJ3N0b3JlcycsIHRoaXMpO1xyXG4gICAgICAgIF9fcHJvdG9fX3B1c2godGhpcywgJ3N0YXRlJywgdGhpcyk7XHJcbiAgICAgICAgX19wcm90b19fcHVzaCh0aGlzLCAnZGF0YXMnLCB0aGlzKTtcclxuICAgICAgICB0aGlzLnJlbGluayh0aGlzLl9fY29udGV4dCwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVnaXN0ZXIoIHJhd0N0eCwgc3RhdGUgPSB7fSwgZGF0YXMgPSB7fSApIHtcclxuICAgICAgICB0aGlzLnJlbGluayhyYXdDdHgsIHRoaXMsIGZhbHNlLCBzdGF0ZSwgZGF0YXMpO1xyXG4gICAgICAgIE9iamVjdC5rZXlzKHJhd0N0eCkuZm9yRWFjaChcclxuICAgICAgICAgICAgaWQgPT4gKGlzRnVuY3Rpb24ocmF3Q3R4W2lkXSkgJiYgcmF3Q3R4W2lkXS5zaW5nbGV0b24gJiYgdGhpcy5fbW91bnQoaWQsIHN0YXRlW2lkXSwgZGF0YXNbaWRdKSkpXHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTWFwIHNyY0N0eCBzdG9yZSdzIG9uIHRhcmdldEN0eCBoZWFkZXJzIHByb3RvJ3NcclxuICAgICAqIEBwYXJhbSBzcmNDdHhcclxuICAgICAqIEBwYXJhbSB0YXJnZXRDdHhcclxuICAgICAqIEBwYXJhbSBzdGF0ZVxyXG4gICAgICogQHBhcmFtIGRhdGFzXHJcbiAgICAgKi9cclxuICAgIHJlbGluayggc3JjQ3R4LCB0YXJnZXRDdHggPSB0aGlzLCBleHRlcm5hbCwgc3RhdGUgPSB7fSwgZGF0YXMgPSB7fSApIHtcclxuICAgICAgICBsZXQgbGN0eCA9IHRhcmdldEN0eC5fc3RvcmVzLnByb3RvdHlwZTtcclxuICAgICAgICBPYmplY3Qua2V5cyhzcmNDdHgpXHJcbiAgICAgICAgICAgIC5mb3JFYWNoKFxyXG4gICAgICAgICAgICAgICAgaWQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICggdGFyZ2V0Q3R4Ll9fY29udGV4dFtpZF0gPT09IHNyY0N0eFtpZF0gfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0Q3R4Ll9fY29udGV4dFtpZF0gJiYgKHRhcmdldEN0eC5fX2NvbnRleHRbaWRdLmNvbnN0cnVjdG9yID09PSBzcmNDdHhbaWRdICkgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICggdGFyZ2V0Q3R4Ll9fY29udGV4dFtpZF0gKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIlJlc2NvcGUgQ29udGV4dCA6IFwiLCBpZCwgXCIgYWxyZWFkeSBleGlzdCBpbiB0aGlzIGNvbnRleHQgIVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoICFleHRlcm5hbCApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX19jb250ZXh0W2lkXSA9IHNyY0N0eFtpZF07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGN0eCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICgoIGN0eCwgaWQgKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0IDogKCkgPT4gdGhpcy5fbW91bnQoaWQsIHN0YXRlW2lkXSwgZGF0YXNbaWRdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5fX2NvbnRleHQsIGlkKVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRDdHguX3N0YXRlLnByb3RvdHlwZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICgoIGN0eCwgaWQgKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0IDogKCkgPT4gKGN0eFtpZF0gJiYgY3R4W2lkXS5zdGF0ZSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0IDogKCB2ICkgPT4gKHRoaXMuX21vdW50KGlkLCB2KSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMuX19jb250ZXh0LCBpZClcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0Q3R4Ll9kYXRhcy5wcm90b3R5cGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoKCBjdHgsIGlkICkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldCA6ICgpID0+IChjdHhbaWRdICYmIGN0eFtpZF0uZGF0YXMpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldCA6ICggdiApID0+ICh0aGlzLl9tb3VudChpZCwgdW5kZWZpbmVkLCB2KSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMuX19jb250ZXh0LCBpZClcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0gb2JqIHtSZWFjdC5Db21wb25lbnR8U3RvcmV8ZnVuY3Rpb24pXHJcbiAgICAgKiBAcGFyYW0ga2V5IHtzdHJpbmd9IG9wdGlvbmFsIGtleSB3aGVyZSB0byBtYXAgdGhlIHB1YmxpYyBzdGF0ZVxyXG4gICAgICovXHJcbiAgICBiaW5kKCBvYmosIGtleSwgYXMsIHNldEluaXRpYWwgPSB0cnVlICkge1xyXG4gICAgICAgIGxldCBsYXN0UmV2cywgZGF0YXM7XHJcbiAgICAgICAgaWYgKCBrZXkgJiYgIWlzQXJyYXkoa2V5KSApXHJcbiAgICAgICAgICAgIGtleSA9IFtrZXldO1xyXG5cclxuICAgICAgICAvLyBrZXkgPSBrZXl8fFxyXG5cclxuICAgICAgICBpZiAoIGFzID09PSB0cnVlICkge1xyXG4gICAgICAgICAgICBzZXRJbml0aWFsID0gdHJ1ZTtcclxuICAgICAgICAgICAgYXMgICAgICAgICA9IG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9mb2xsb3dlcnMucHVzaChcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgb2JqLFxyXG4gICAgICAgICAgICAgICAga2V5LFxyXG4gICAgICAgICAgICAgICAgYXMsXHJcbiAgICAgICAgICAgICAgICBsYXN0UmV2cyA9IGtleSAmJiBrZXkucmVkdWNlKCggcmV2cywgaWQgKSA9PiAocmV2c1tpZF0gPSAwLCByZXZzKSwge30pXHJcbiAgICAgICAgICAgIF0pO1xyXG5cclxuICAgICAgICB0aGlzLm1vdW50KGtleSk7XHJcblxyXG4gICAgICAgIGlmICggc2V0SW5pdGlhbCAmJiB0aGlzLl9zdGFibGUgKSB7XHJcbiAgICAgICAgICAgIGRhdGFzID0gdGhpcy5nZXRVcGRhdGVzKGxhc3RSZXZzKTtcclxuICAgICAgICAgICAgaWYgKCAhZGF0YXMgKSByZXR1cm47XHJcbiAgICAgICAgICAgIGlmICggdHlwZW9mIG9iaiAhPSBcImZ1bmN0aW9uXCIgKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIGFzICkgb2JqLnNldFN0YXRlKHtbYXNdIDogZGF0YXN9KTtcclxuICAgICAgICAgICAgICAgIGVsc2Ugb2JqLnNldFN0YXRlKGRhdGFzKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG9iaihkYXRhcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBVbiBiaW5kIHRoaXMgY29udGV4dCBvZmYgdGhlIGdpdmVuIGNvbXBvbmVudC1rZXlzXHJcbiAgICAgKiBAcGFyYW0gb2JqXHJcbiAgICAgKiBAcGFyYW0ga2V5XHJcbiAgICAgKiBAcmV0dXJucyB7QXJyYXkuPCo+fVxyXG4gICAgICovXHJcbiAgICB1bkJpbmQoIG9iaiwga2V5LCBhcyApIHtcclxuICAgICAgICB2YXIgZm9sbG93ZXJzID0gdGhpcy5fZm9sbG93ZXJzLFxyXG4gICAgICAgICAgICBpICAgICAgICAgPSBmb2xsb3dlcnMgJiYgZm9sbG93ZXJzLmxlbmd0aDtcclxuICAgICAgICB3aGlsZSAoZm9sbG93ZXJzICYmIGktLSlcclxuICAgICAgICAgICAgaWYgKCBmb2xsb3dlcnNbaV1bMF0gPT09IG9iaiAmJiAoJycgKyBmb2xsb3dlcnNbaV1bMV0pID09ICgnJyArIGtleSkgJiZcclxuICAgICAgICAgICAgICAgICgnJyArIGZvbGxvd2Vyc1tpXVsyXSkgPT0gKCcnICsgYXMpIClcclxuICAgICAgICAgICAgICAgIHJldHVybiBmb2xsb3dlcnMuc3BsaWNlKGksIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUHVsbCBzdG9yZXMgaW4gdGhlIHByaXZhdGUgc3RhdGVcclxuICAgICAqIEBwYXJhbSBzdG9yZXMgIHtBcnJheX0gKHBhc3NlZCB0byBTdG9yZTo6bWFwKSBFeCA6IFtcInNlc3Npb25cIiwgXCJvdGhlck5hbWVkU3RvcmU6a2V5XCIsIG90aGVyU3RvcmUuYXMoXCJvdGhlcktleVwiKV1cclxuICAgICAqL1xyXG4gICAgcHVsbCggc3RvcmVzLCBkb1dhaXQsIG9yaWdpbiApIHtcclxuICAgICAgICB0aGlzLm1vdW50KHN0b3Jlcyk7XHJcbiAgICAgICAgdGhpcy5iaW5kKG9yaWdpbiwgc3RvcmVzLCBudWxsLCBmYWxzZSk7XHJcblxyXG4gICAgICAgIHJldHVybiBzdG9yZXMucmVkdWNlKCggZGF0YXMsIGlkICkgPT4gKGRhdGFzW2lkXSA9IHRoaXMuc3RvcmVzW2lkXSAmJiB0aGlzLnN0b3Jlc1tpZF0uZGF0YXMsIGRhdGFzKSwge30pO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFVwZGF0ZXMoIHJldnMsIG91dHB1dCwgdXBkYXRlZCApIHtcclxuICAgICAgICBsZXQgY3R4ID0gdGhpcy5fX2NvbnRleHQ7XHJcblxyXG4gICAgICAgIG91dHB1dCA9IG91dHB1dCB8fCB7fTtcclxuICAgICAgICBPYmplY3Qua2V5cyhjdHgpLmZvckVhY2goXHJcbiAgICAgICAgICAgIGlkID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICggIXJldnMgfHwgISggIXJldnMuaGFzT3duUHJvcGVydHkoaWQpIHx8IGN0eFtpZF0uX3JldiA8PSByZXZzW2lkXSApICkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVkICAgID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBvdXRwdXRbaWRdID0gdGhpcy5kYXRhc1tpZF07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCByZXZzIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV2c1tpZF0gPSBjdHhbaWRdLl9yZXY7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgICAgICB1cGRhdGVkID0gdGhpcy5fX21peGVkLnJlZHVjZSgoIHVwZGF0ZWQsIGN0eCApID0+IChjdHguZ2V0VXBkYXRlcyhyZXZzLCBvdXRwdXQsIHVwZGF0ZWQpIHx8IHVwZGF0ZWQpLCB1cGRhdGVkKTtcclxuICAgICAgICB1cGRhdGVkID0gdGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuZ2V0VXBkYXRlcyhyZXZzLCBvdXRwdXQsIHVwZGF0ZWQpIHx8IHVwZGF0ZWQ7XHJcbiAgICAgICAgcmV0dXJuIHVwZGF0ZWQgJiYgb3V0cHV0O1xyXG4gICAgfVxyXG5cclxuICAgIHNlcmlhbGl6ZSggZmxhZ3Nfc3RhdGVzID0gLy4qLywgZmxhZ3NfZGF0YXMgPSAvLiovICkge1xyXG4gICAgICAgIGxldCBjdHggPSB0aGlzLl9fY29udGV4dCwgb3V0cHV0ID0ge3N0YXRlIDoge30sIGRhdGFzIDoge319LFxyXG4gICAgICAgICAgICBfZmxhZ3Nfc3RhdGVzLFxyXG4gICAgICAgICAgICBfZmxhZ3NfZGF0YXM7XHJcbiAgICAgICAgaWYgKCBpc0FycmF5KGZsYWdzX3N0YXRlcykgKVxyXG4gICAgICAgICAgICBmbGFnc19zdGF0ZXMuZm9yRWFjaChpZCA9PiAob3V0cHV0LnN0YXRlW2lkXSA9IHRoaXMuc3RhdGVbaWRdKSlcclxuXHJcbiAgICAgICAgaWYgKCBpc0FycmF5KGZsYWdzX2RhdGFzKSApXHJcbiAgICAgICAgICAgIGZsYWdzX2RhdGFzLmZvckVhY2goaWQgPT4gKG91dHB1dC5kYXRhc1tpZF0gPSB0aGlzLmRhdGFzW2lkXSkpXHJcblxyXG4gICAgICAgIGlmICggIWlzQXJyYXkoZmxhZ3NfZGF0YXMpICYmICFpc0FycmF5KGZsYWdzX3N0YXRlcykgKVxyXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhjdHgpLmZvckVhY2goXHJcbiAgICAgICAgICAgICAgICBpZCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBpc0Z1bmN0aW9uKGN0eFtpZF0pIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgZmxhZ3MgPSBjdHhbaWRdLmNvbnN0cnVjdG9yLmZsYWdzO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBmbGFncyA9IGlzQXJyYXkoZmxhZ3MpID8gZmxhZ3MgOiBbZmxhZ3MgfHwgXCJcIl07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICggZmxhZ3MucmVkdWNlKCggciwgZmxhZyApID0+IChyIHx8IF9mbGFnc19zdGF0ZXMudGVzdChmbGFnKSksIGZhbHNlKSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dC5zdGF0ZVtpZF0gPSB0aGlzLnN0YXRlW2lkXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBmbGFncy5yZWR1Y2UoKCByLCBmbGFnICkgPT4gKHIgfHwgX2ZsYWdzX2RhdGFzLnRlc3QoZmxhZykpLCBmYWxzZSkgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXQuZGF0YXNbaWRdID0gdGhpcy5kYXRhc1tpZF07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICByZXR1cm4gb3V0cHV0O1xyXG4gICAgfVxyXG5cclxuICAgIG9uKCBsaXN0cyApIHtcclxuXHJcbiAgICAgICAgaWYgKCAhaXNTdHJpbmcobGlzdHMpICYmIGxpc3RzIClcclxuICAgICAgICAgICAgT2JqZWN0LmtleXMobGlzdHMpLmZvckVhY2goayA9PiBzdXBlci5vbihrLCBsaXN0c1trXSkpO1xyXG4gICAgICAgIGVsc2Ugc3VwZXIub24oLi4uYXJndW1lbnRzKTtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVMaXN0ZW5lciggbGlzdHMgKSB7XHJcbiAgICAgICAgaWYgKCAhaXNTdHJpbmcobGlzdHMpICYmIGxpc3RzIClcclxuICAgICAgICAgICAgT2JqZWN0LmtleXMobGlzdHMpLmZvckVhY2goayA9PiBzdXBlci5yZW1vdmVMaXN0ZW5lcihrLCBsaXN0c1trXSkpO1xyXG4gICAgICAgIGVsc2Ugc3VwZXIucmVtb3ZlTGlzdGVuZXIoLi4uYXJndW1lbnRzKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIG9uY2UoJ3N0YWJsZScsIGNiKVxyXG4gICAgICogQHBhcmFtIG9iaiB7UmVhY3QuQ29tcG9uZW50fFN0b3JlfGZ1bmN0aW9uKVxyXG4gICAgICogQHBhcmFtIGtleSB7c3RyaW5nfSBvcHRpb25hbCBrZXkgd2hlcmUgdG8gbWFwIHRoZSBwdWJsaWMgc3RhdGVcclxuICAgICAqL1xyXG4gICAgdGhlbiggY2IgKSB7XHJcbiAgICAgICAgaWYgKCB0aGlzLl9zdGFibGUgKVxyXG4gICAgICAgICAgICByZXR1cm4gY2IobnVsbCwgdGhpcy5kYXRhcyk7XHJcbiAgICAgICAgdGhpcy5vbmNlKCdzdGFibGUnLCBlID0+IGNiKG51bGwsIHRoaXMuZGF0YXMpKTtcclxuICAgIH1cclxuXHJcbiAgICByZXN0b3JlKCB7c3RhdGUsIGRhdGFzfSwgcXVpZXQgKSB7XHJcbiAgICAgICAgbGV0IGN0eCA9IHRoaXMuX19jb250ZXh0O1xyXG4gICAgICAgIE9iamVjdC5rZXlzKGRhdGFzKS5mb3JFYWNoKFxyXG4gICAgICAgICAgICBpZCA9PiB7XHJcbiAgICAgICAgICAgICAgICBxdWlldCA/XHJcbiAgICAgICAgICAgICAgICBjdHguZGF0YXMgPSBkYXRhc1tpZF1cclxuICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICBjdHgucHVzaChkYXRhc1tpZF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgICAgICBPYmplY3Qua2V5cyhzdGF0ZSkuZm9yRWFjaChcclxuICAgICAgICAgICAgaWQgPT4ge1xyXG4gICAgICAgICAgICAgICAgcXVpZXQgP1xyXG4gICAgICAgICAgICAgICAgY3R4LnN0YXRlID0gc3RhdGVbaWRdXHJcbiAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgY3R4LnNldFN0YXRlKHN0YXRlW2lkXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZXRhaW4oIHJlYXNvbiApIHtcclxuICAgICAgICB0aGlzLl9fcmV0YWluTG9ja3MuYWxsKys7XHJcbiAgICAgICAgaWYgKCByZWFzb24gKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX19yZXRhaW5Mb2Nrc1tyZWFzb25dID0gdGhpcy5fX3JldGFpbkxvY2tzW3JlYXNvbl0gfHwgMDtcclxuICAgICAgICAgICAgdGhpcy5fX3JldGFpbkxvY2tzW3JlYXNvbl0rKztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZGlzcG9zZSggcmVhc29uICkge1xyXG4gICAgICAgIHRoaXMuX19yZXRhaW5Mb2Nrcy5hbGwtLTtcclxuICAgICAgICBpZiAoIHJlYXNvbiApIHtcclxuICAgICAgICAgICAgdGhpcy5fX3JldGFpbkxvY2tzW3JlYXNvbl0gPSB0aGlzLl9fcmV0YWluTG9ja3NbcmVhc29uXSB8fCAwO1xyXG4gICAgICAgICAgICB0aGlzLl9fcmV0YWluTG9ja3NbcmVhc29uXS0tO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoICF0aGlzLl9fcmV0YWluTG9ja3MuYWxsICkge1xyXG4gICAgICAgICAgICBpZiAoIHRoaXMuX3BlcnNpc3RlbmNlVG0gKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9kZXN0cm95VE0gJiYgY2xlYXJUaW1lb3V0KHRoaXMuX2Rlc3Ryb3lUTSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9kZXN0cm95VE0gPSBzZXRUaW1lb3V0KFxyXG4gICAgICAgICAgICAgICAgICAgIGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAhdGhpcy5fX3JldGFpbkxvY2tzLmFsbCAmJiB0aGlzLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3BlcnNpc3RlbmNlVG1cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB3YWl0KCByZWFzb24gKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ3YWl0XCIsIHJlYXNvbik7XHJcbiAgICAgICAgdGhpcy5fc3RhYmxlID0gZmFsc2U7XHJcbiAgICAgICAgIXRoaXMuX193OExvY2tzLmFsbCAmJiB0aGlzLmVtaXQoXCJ1bnN0YWJsZVwiLCB0aGlzKTtcclxuICAgICAgICB0aGlzLl9fdzhMb2Nrcy5hbGwrKztcclxuICAgICAgICBpZiAoIHJlYXNvbiApIHtcclxuICAgICAgICAgICAgdGhpcy5fX3c4TG9ja3NbcmVhc29uXSA9IHRoaXMuX193OExvY2tzW3JlYXNvbl0gfHwgMDtcclxuICAgICAgICAgICAgdGhpcy5fX3c4TG9ja3NbcmVhc29uXSsrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcm9wYWcoKSB7XHJcbiAgICAgICAgdGhpcy5fcHJvcGFnVE0gJiYgY2xlYXJUaW1lb3V0KHRoaXMuX3Byb3BhZ1RNKTtcclxuICAgICAgICB0aGlzLl9wcm9wYWdUTSA9IHNldFRpbWVvdXQoXHJcbiAgICAgICAgICAgIGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcHJvcGFnKClcclxuICAgICAgICAgICAgfSwgNTBcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIF9wcm9wYWcoKSB7XHJcbiAgICAgICAgaWYgKCB0aGlzLl9mb2xsb3dlcnMubGVuZ3RoIClcclxuICAgICAgICAgICAgdGhpcy5fZm9sbG93ZXJzLmZvckVhY2goKCB7MCA6IG9iaiwgMSA6IGtleSwgMiA6IGFzLCAzIDogbGFzdFJldnN9ICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGRhdGFzID0gdGhpcy5nZXRVcGRhdGVzKGxhc3RSZXZzKTtcclxuICAgICAgICAgICAgICAgIGlmICggIWRhdGFzICkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgaWYgKCB0eXBlb2Ygb2JqICE9IFwiZnVuY3Rpb25cIiApIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIGFzICkgb2JqLnNldFN0YXRlKHtbYXNdIDogZGF0YXN9KTtcclxuICAgICAgICAgICAgICAgICAgICBlbHNlIG9iai5zZXRTdGF0ZShkYXRhcyk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIG9iaihkYXRhcyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBsYXN0UmV2cyAmJlxyXG4gICAgICAgICAgICAgICAga2V5LmZvckVhY2goaWQgPT4gKGxhc3RSZXZzW2lkXSA9IHRoaXMuX19jb250ZXh0W2lkXSAmJiB0aGlzLl9fY29udGV4dFtpZF0uX3JldiB8fCAwKSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuZW1pdChcInVwZGF0ZVwiLCB0aGlzLmdldFVwZGF0ZXMoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVsZWFzZSggcmVhc29uICkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicmVsZWFzZVwiLCByZWFzb24pO1xyXG4gICAgICAgIHRoaXMuX193OExvY2tzLmFsbC0tO1xyXG4gICAgICAgIGlmICggcmVhc29uICkge1xyXG4gICAgICAgICAgICB0aGlzLl9fdzhMb2Nrc1tyZWFzb25dID0gdGhpcy5fX3c4TG9ja3NbcmVhc29uXSB8fCAwO1xyXG4gICAgICAgICAgICB0aGlzLl9fdzhMb2Nrc1tyZWFzb25dLS07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3N0YWJsZSA9IHRydWU7XHJcbiAgICAgICAgaWYgKCAhdGhpcy5fX3c4TG9ja3MuYWxsICkge1xyXG4gICAgICAgICAgICB0aGlzLl9zdGFiaWxpemVyVE0gJiYgY2xlYXJUaW1lb3V0KHRoaXMuX3N0YWJpbGl6ZXJUTSk7XHJcbiAgICAgICAgICAgIHRoaXMuX3Byb3BhZ1RNICYmIGNsZWFyVGltZW91dCh0aGlzLl9wcm9wYWdUTSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9zdGFiaWxpemVyVE0gPSBzZXRUaW1lb3V0KFxyXG4gICAgICAgICAgICAgICAgZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCAhdGhpcy5fc3RhYmxlIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3N0YWJpbGl6ZXJUTSA9IG51bGw7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdChcInN0YWJsZVwiLCB0aGlzKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcHJvcGFnKClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogb3JkZXIgZGVzdHJveSBvZiBsb2NhbCBzdG9yZXNcclxuICAgICAqL1xyXG4gICAgZGVzdHJveSgpIHtcclxuICAgICAgICBsZXQgY3R4ID0gdGhpcy5fX2NvbnRleHQ7XHJcblxyXG4gICAgICAgIHRoaXMuZW1pdChcImRlc3Ryb3lcIik7XHJcbiAgICAgICAgT2JqZWN0LmtleXMoXHJcbiAgICAgICAgICAgIHRoaXMuX19saXN0ZW5pbmdcclxuICAgICAgICApLmZvckVhY2goXHJcbiAgICAgICAgICAgIGlkID0+IHRoaXMuX19jb250ZXh0W2lkXS5yZW1vdmVMaXN0ZW5lcih0aGlzLl9fbGlzdGVuaW5nW2lkXSlcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMuX19saXN0ZW5pbmcgPSB7fTtcclxuXHJcbiAgICAgICAgaWYgKCB0aGlzLl9pc0xvY2FsSWQgKVxyXG4gICAgICAgICAgICBkZWxldGUgb3BlbkNvbnRleHRzW3RoaXMuX2lkXTtcclxuXHJcbiAgICAgICAgZm9yICggbGV0IGtleSBpbiBjdHggKVxyXG4gICAgICAgICAgICBpZiAoICFpc0Z1bmN0aW9uKGN0eFtrZXldKSApIHtcclxuICAgICAgICAgICAgICAgIGlmICggY3R4W2tleV0uY29udGV4dE9iaiA9PT0gdGhpcyApXHJcbiAgICAgICAgICAgICAgICAgICAgY3R4W2tleV0uZGVzdHJveSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGN0eFtrZXldID0gY3R4W2tleV0uY29uc3RydWN0b3I7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB3aGlsZSAodGhpcy5fX21peGVkTGlzdC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5fX21peGVkWzBdLnJlbW92ZUxpc3RlbmVyKHRoaXMuX19taXhlZExpc3Quc2hpZnQoKSk7XHJcbiAgICAgICAgICAgIHRoaXMuX19taXhlZC5zaGlmdCgpLmRpc3Bvc2UoKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIHRoaXMucGFyZW50ICkge1xyXG4gICAgICAgICAgICB0aGlzLnBhcmVudC5yZW1vdmVMaXN0ZW5lcih0aGlzLl9fcGFyZW50TGlzdCk7XHJcbiAgICAgICAgICAgIHRoaXMucGFyZW50LmRpc3Bvc2UoXCJpc015UGFyZW50XCIpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0NvbnRleHQuanMiLCI7KGZ1bmN0aW9uIChmYWN0b3J5KSB7XG4gIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG4gICAgZGVmaW5lKFtdLCBmYWN0b3J5KTtcbiAgZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmICEhZXhwb3J0cyAmJiAhZXhwb3J0cy5ub2RlVHlwZSlcbiAgICBpZiAodHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcgJiYgISFtb2R1bGUgJiYgbW9kdWxlLmV4cG9ydHMpXG4gICAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcbiAgICBlbHNlXG4gICAgICBleHBvcnRzWydkZWZhdWx0J10gPSBmYWN0b3J5KCk7XG4gIGVsc2UgaWYgKHR5cGVvZiBZVUkgPT09ICdmdW5jdGlvbicgJiYgWVVJLmFkZClcbiAgICBZVUkuYWRkKCdpcy1zdHJpbmcnLCBmdW5jdGlvbiAoWSkgeyBZWydkZWZhdWx0J10gPSBmYWN0b3J5KCk7IH0sICcxLjAuNycpO1xuICBlbHNlXG4gICAgU3RyaW5nLmlzU3RyaW5nID0gZmFjdG9yeSgpO1xufSkoZnVuY3Rpb24gKCkge1xuICB2YXIgc3RyVG9TdHJpbmcgID0gKCcnKS50b1N0cmluZyxcbiAgICAgIGhhc0JpbmQgICAgICA9IEZ1bmN0aW9uLnByb3RvdHlwZSAmJiBGdW5jdGlvbi5wcm90b3R5cGUuYmluZCxcbiAgICAgIHN0clRvU3RyQ2FsbCA9IGhhc0JpbmQgJiYgc3RyVG9TdHJpbmcuY2FsbC5iaW5kKHN0clRvU3RyaW5nKSxcbiAgICAgIGlzU3RyaW5nICAgICA9IGZ1bmN0aW9uIChzdHIpIHtcbiAgICAgICAgLypAY2Nfb25cbiAgICAgICAgICBAaWYgKEBfanNjcmlwdF92ZXJzaW9uID49IDUpIEAqL1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBoYXNCaW5kID8gc3RyVG9TdHJDYWxsKHN0cikgOiBzdHJUb1N0cmluZy5jYWxsKHN0cik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIC8qQGVuZFxuICAgICAgICBAKi9cbiAgICAgIH07XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChzdHIpIHtcbiAgICByZXR1cm4gIHR5cGVvZiBzdHIgPT09ICdzdHJpbmcnIHx8XG4gICAgICAgICAgICBzdHIgJiYgdHlwZW9mIHN0ciA9PT0gJ29iamVjdCcgJiZcbiAgICAgICAgICAgIC8qQGNjX29uXG4gICAgICAgICAgICAgIEBpZiAoQF9qc2NyaXB0X3ZlcnNpb24gPCA1LjUpXG4gICAgICAgICAgICAgICAgL15cXHMqZnVuY3Rpb25cXHMqU3RyaW5nXFwoXFwpXFxzKntcXHMqXFxbbmF0aXZlIGNvZGVcXF1cXHMqfVxccyokLy50ZXN0KHN0ci5jb25zdHJ1Y3RvcilcbiAgICAgICAgICAgICAgQGVsc2UgQCovXG4gICAgICAgICAgICAgICAgaXNTdHJpbmcoc3RyKVxuICAgICAgICAgICAgICAvKkBlbmRcbiAgICAgICAgICAgIEAqL1xuICAgICAgICAgICAgfHwgZmFsc2U7XG4gIH07XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9pc3N0cmluZy9pc1N0cmluZy51bWQuanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIChhcnIpIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcnIpID09ICdbb2JqZWN0IEFycmF5XSc7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2lzYXJyYXkvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbmZ1bmN0aW9uIEV2ZW50RW1pdHRlcigpIHtcbiAgdGhpcy5fZXZlbnRzID0gdGhpcy5fZXZlbnRzIHx8IHt9O1xuICB0aGlzLl9tYXhMaXN0ZW5lcnMgPSB0aGlzLl9tYXhMaXN0ZW5lcnMgfHwgdW5kZWZpbmVkO1xufVxubW9kdWxlLmV4cG9ydHMgPSBFdmVudEVtaXR0ZXI7XG5cbi8vIEJhY2t3YXJkcy1jb21wYXQgd2l0aCBub2RlIDAuMTAueFxuRXZlbnRFbWl0dGVyLkV2ZW50RW1pdHRlciA9IEV2ZW50RW1pdHRlcjtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5fZXZlbnRzID0gdW5kZWZpbmVkO1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5fbWF4TGlzdGVuZXJzID0gdW5kZWZpbmVkO1xuXG4vLyBCeSBkZWZhdWx0IEV2ZW50RW1pdHRlcnMgd2lsbCBwcmludCBhIHdhcm5pbmcgaWYgbW9yZSB0aGFuIDEwIGxpc3RlbmVycyBhcmVcbi8vIGFkZGVkIHRvIGl0LiBUaGlzIGlzIGEgdXNlZnVsIGRlZmF1bHQgd2hpY2ggaGVscHMgZmluZGluZyBtZW1vcnkgbGVha3MuXG5FdmVudEVtaXR0ZXIuZGVmYXVsdE1heExpc3RlbmVycyA9IDEwO1xuXG4vLyBPYnZpb3VzbHkgbm90IGFsbCBFbWl0dGVycyBzaG91bGQgYmUgbGltaXRlZCB0byAxMC4gVGhpcyBmdW5jdGlvbiBhbGxvd3Ncbi8vIHRoYXQgdG8gYmUgaW5jcmVhc2VkLiBTZXQgdG8gemVybyBmb3IgdW5saW1pdGVkLlxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5zZXRNYXhMaXN0ZW5lcnMgPSBmdW5jdGlvbihuKSB7XG4gIGlmICghaXNOdW1iZXIobikgfHwgbiA8IDAgfHwgaXNOYU4obikpXG4gICAgdGhyb3cgVHlwZUVycm9yKCduIG11c3QgYmUgYSBwb3NpdGl2ZSBudW1iZXInKTtcbiAgdGhpcy5fbWF4TGlzdGVuZXJzID0gbjtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmVtaXQgPSBmdW5jdGlvbih0eXBlKSB7XG4gIHZhciBlciwgaGFuZGxlciwgbGVuLCBhcmdzLCBpLCBsaXN0ZW5lcnM7XG5cbiAgaWYgKCF0aGlzLl9ldmVudHMpXG4gICAgdGhpcy5fZXZlbnRzID0ge307XG5cbiAgLy8gSWYgdGhlcmUgaXMgbm8gJ2Vycm9yJyBldmVudCBsaXN0ZW5lciB0aGVuIHRocm93LlxuICBpZiAodHlwZSA9PT0gJ2Vycm9yJykge1xuICAgIGlmICghdGhpcy5fZXZlbnRzLmVycm9yIHx8XG4gICAgICAgIChpc09iamVjdCh0aGlzLl9ldmVudHMuZXJyb3IpICYmICF0aGlzLl9ldmVudHMuZXJyb3IubGVuZ3RoKSkge1xuICAgICAgZXIgPSBhcmd1bWVudHNbMV07XG4gICAgICBpZiAoZXIgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICB0aHJvdyBlcjsgLy8gVW5oYW5kbGVkICdlcnJvcicgZXZlbnRcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEF0IGxlYXN0IGdpdmUgc29tZSBraW5kIG9mIGNvbnRleHQgdG8gdGhlIHVzZXJcbiAgICAgICAgdmFyIGVyciA9IG5ldyBFcnJvcignVW5jYXVnaHQsIHVuc3BlY2lmaWVkIFwiZXJyb3JcIiBldmVudC4gKCcgKyBlciArICcpJyk7XG4gICAgICAgIGVyci5jb250ZXh0ID0gZXI7XG4gICAgICAgIHRocm93IGVycjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBoYW5kbGVyID0gdGhpcy5fZXZlbnRzW3R5cGVdO1xuXG4gIGlmIChpc1VuZGVmaW5lZChoYW5kbGVyKSlcbiAgICByZXR1cm4gZmFsc2U7XG5cbiAgaWYgKGlzRnVuY3Rpb24oaGFuZGxlcikpIHtcbiAgICBzd2l0Y2ggKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgIC8vIGZhc3QgY2FzZXNcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgaGFuZGxlci5jYWxsKHRoaXMpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgaGFuZGxlci5jYWxsKHRoaXMsIGFyZ3VtZW50c1sxXSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAzOlxuICAgICAgICBoYW5kbGVyLmNhbGwodGhpcywgYXJndW1lbnRzWzFdLCBhcmd1bWVudHNbMl0pO1xuICAgICAgICBicmVhaztcbiAgICAgIC8vIHNsb3dlclxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgICAgIGhhbmRsZXIuYXBwbHkodGhpcywgYXJncyk7XG4gICAgfVxuICB9IGVsc2UgaWYgKGlzT2JqZWN0KGhhbmRsZXIpKSB7XG4gICAgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgbGlzdGVuZXJzID0gaGFuZGxlci5zbGljZSgpO1xuICAgIGxlbiA9IGxpc3RlbmVycy5sZW5ndGg7XG4gICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKVxuICAgICAgbGlzdGVuZXJzW2ldLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmFkZExpc3RlbmVyID0gZnVuY3Rpb24odHlwZSwgbGlzdGVuZXIpIHtcbiAgdmFyIG07XG5cbiAgaWYgKCFpc0Z1bmN0aW9uKGxpc3RlbmVyKSlcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ2xpc3RlbmVyIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuXG4gIGlmICghdGhpcy5fZXZlbnRzKVxuICAgIHRoaXMuX2V2ZW50cyA9IHt9O1xuXG4gIC8vIFRvIGF2b2lkIHJlY3Vyc2lvbiBpbiB0aGUgY2FzZSB0aGF0IHR5cGUgPT09IFwibmV3TGlzdGVuZXJcIiEgQmVmb3JlXG4gIC8vIGFkZGluZyBpdCB0byB0aGUgbGlzdGVuZXJzLCBmaXJzdCBlbWl0IFwibmV3TGlzdGVuZXJcIi5cbiAgaWYgKHRoaXMuX2V2ZW50cy5uZXdMaXN0ZW5lcilcbiAgICB0aGlzLmVtaXQoJ25ld0xpc3RlbmVyJywgdHlwZSxcbiAgICAgICAgICAgICAgaXNGdW5jdGlvbihsaXN0ZW5lci5saXN0ZW5lcikgP1xuICAgICAgICAgICAgICBsaXN0ZW5lci5saXN0ZW5lciA6IGxpc3RlbmVyKTtcblxuICBpZiAoIXRoaXMuX2V2ZW50c1t0eXBlXSlcbiAgICAvLyBPcHRpbWl6ZSB0aGUgY2FzZSBvZiBvbmUgbGlzdGVuZXIuIERvbid0IG5lZWQgdGhlIGV4dHJhIGFycmF5IG9iamVjdC5cbiAgICB0aGlzLl9ldmVudHNbdHlwZV0gPSBsaXN0ZW5lcjtcbiAgZWxzZSBpZiAoaXNPYmplY3QodGhpcy5fZXZlbnRzW3R5cGVdKSlcbiAgICAvLyBJZiB3ZSd2ZSBhbHJlYWR5IGdvdCBhbiBhcnJheSwganVzdCBhcHBlbmQuXG4gICAgdGhpcy5fZXZlbnRzW3R5cGVdLnB1c2gobGlzdGVuZXIpO1xuICBlbHNlXG4gICAgLy8gQWRkaW5nIHRoZSBzZWNvbmQgZWxlbWVudCwgbmVlZCB0byBjaGFuZ2UgdG8gYXJyYXkuXG4gICAgdGhpcy5fZXZlbnRzW3R5cGVdID0gW3RoaXMuX2V2ZW50c1t0eXBlXSwgbGlzdGVuZXJdO1xuXG4gIC8vIENoZWNrIGZvciBsaXN0ZW5lciBsZWFrXG4gIGlmIChpc09iamVjdCh0aGlzLl9ldmVudHNbdHlwZV0pICYmICF0aGlzLl9ldmVudHNbdHlwZV0ud2FybmVkKSB7XG4gICAgaWYgKCFpc1VuZGVmaW5lZCh0aGlzLl9tYXhMaXN0ZW5lcnMpKSB7XG4gICAgICBtID0gdGhpcy5fbWF4TGlzdGVuZXJzO1xuICAgIH0gZWxzZSB7XG4gICAgICBtID0gRXZlbnRFbWl0dGVyLmRlZmF1bHRNYXhMaXN0ZW5lcnM7XG4gICAgfVxuXG4gICAgaWYgKG0gJiYgbSA+IDAgJiYgdGhpcy5fZXZlbnRzW3R5cGVdLmxlbmd0aCA+IG0pIHtcbiAgICAgIHRoaXMuX2V2ZW50c1t0eXBlXS53YXJuZWQgPSB0cnVlO1xuICAgICAgY29uc29sZS5lcnJvcignKG5vZGUpIHdhcm5pbmc6IHBvc3NpYmxlIEV2ZW50RW1pdHRlciBtZW1vcnkgJyArXG4gICAgICAgICAgICAgICAgICAgICdsZWFrIGRldGVjdGVkLiAlZCBsaXN0ZW5lcnMgYWRkZWQuICcgK1xuICAgICAgICAgICAgICAgICAgICAnVXNlIGVtaXR0ZXIuc2V0TWF4TGlzdGVuZXJzKCkgdG8gaW5jcmVhc2UgbGltaXQuJyxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZXZlbnRzW3R5cGVdLmxlbmd0aCk7XG4gICAgICBpZiAodHlwZW9mIGNvbnNvbGUudHJhY2UgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgLy8gbm90IHN1cHBvcnRlZCBpbiBJRSAxMFxuICAgICAgICBjb25zb2xlLnRyYWNlKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uID0gRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5hZGRMaXN0ZW5lcjtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbmNlID0gZnVuY3Rpb24odHlwZSwgbGlzdGVuZXIpIHtcbiAgaWYgKCFpc0Z1bmN0aW9uKGxpc3RlbmVyKSlcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ2xpc3RlbmVyIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuXG4gIHZhciBmaXJlZCA9IGZhbHNlO1xuXG4gIGZ1bmN0aW9uIGcoKSB7XG4gICAgdGhpcy5yZW1vdmVMaXN0ZW5lcih0eXBlLCBnKTtcblxuICAgIGlmICghZmlyZWQpIHtcbiAgICAgIGZpcmVkID0gdHJ1ZTtcbiAgICAgIGxpc3RlbmVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9XG5cbiAgZy5saXN0ZW5lciA9IGxpc3RlbmVyO1xuICB0aGlzLm9uKHR5cGUsIGcpO1xuXG4gIHJldHVybiB0aGlzO1xufTtcblxuLy8gZW1pdHMgYSAncmVtb3ZlTGlzdGVuZXInIGV2ZW50IGlmZiB0aGUgbGlzdGVuZXIgd2FzIHJlbW92ZWRcbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXIgPSBmdW5jdGlvbih0eXBlLCBsaXN0ZW5lcikge1xuICB2YXIgbGlzdCwgcG9zaXRpb24sIGxlbmd0aCwgaTtcblxuICBpZiAoIWlzRnVuY3Rpb24obGlzdGVuZXIpKVxuICAgIHRocm93IFR5cGVFcnJvcignbGlzdGVuZXIgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG5cbiAgaWYgKCF0aGlzLl9ldmVudHMgfHwgIXRoaXMuX2V2ZW50c1t0eXBlXSlcbiAgICByZXR1cm4gdGhpcztcblxuICBsaXN0ID0gdGhpcy5fZXZlbnRzW3R5cGVdO1xuICBsZW5ndGggPSBsaXN0Lmxlbmd0aDtcbiAgcG9zaXRpb24gPSAtMTtcblxuICBpZiAobGlzdCA9PT0gbGlzdGVuZXIgfHxcbiAgICAgIChpc0Z1bmN0aW9uKGxpc3QubGlzdGVuZXIpICYmIGxpc3QubGlzdGVuZXIgPT09IGxpc3RlbmVyKSkge1xuICAgIGRlbGV0ZSB0aGlzLl9ldmVudHNbdHlwZV07XG4gICAgaWYgKHRoaXMuX2V2ZW50cy5yZW1vdmVMaXN0ZW5lcilcbiAgICAgIHRoaXMuZW1pdCgncmVtb3ZlTGlzdGVuZXInLCB0eXBlLCBsaXN0ZW5lcik7XG5cbiAgfSBlbHNlIGlmIChpc09iamVjdChsaXN0KSkge1xuICAgIGZvciAoaSA9IGxlbmd0aDsgaS0tID4gMDspIHtcbiAgICAgIGlmIChsaXN0W2ldID09PSBsaXN0ZW5lciB8fFxuICAgICAgICAgIChsaXN0W2ldLmxpc3RlbmVyICYmIGxpc3RbaV0ubGlzdGVuZXIgPT09IGxpc3RlbmVyKSkge1xuICAgICAgICBwb3NpdGlvbiA9IGk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwb3NpdGlvbiA8IDApXG4gICAgICByZXR1cm4gdGhpcztcblxuICAgIGlmIChsaXN0Lmxlbmd0aCA9PT0gMSkge1xuICAgICAgbGlzdC5sZW5ndGggPSAwO1xuICAgICAgZGVsZXRlIHRoaXMuX2V2ZW50c1t0eXBlXTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGlzdC5zcGxpY2UocG9zaXRpb24sIDEpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9ldmVudHMucmVtb3ZlTGlzdGVuZXIpXG4gICAgICB0aGlzLmVtaXQoJ3JlbW92ZUxpc3RlbmVyJywgdHlwZSwgbGlzdGVuZXIpO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUFsbExpc3RlbmVycyA9IGZ1bmN0aW9uKHR5cGUpIHtcbiAgdmFyIGtleSwgbGlzdGVuZXJzO1xuXG4gIGlmICghdGhpcy5fZXZlbnRzKVxuICAgIHJldHVybiB0aGlzO1xuXG4gIC8vIG5vdCBsaXN0ZW5pbmcgZm9yIHJlbW92ZUxpc3RlbmVyLCBubyBuZWVkIHRvIGVtaXRcbiAgaWYgKCF0aGlzLl9ldmVudHMucmVtb3ZlTGlzdGVuZXIpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMClcbiAgICAgIHRoaXMuX2V2ZW50cyA9IHt9O1xuICAgIGVsc2UgaWYgKHRoaXMuX2V2ZW50c1t0eXBlXSlcbiAgICAgIGRlbGV0ZSB0aGlzLl9ldmVudHNbdHlwZV07XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvLyBlbWl0IHJlbW92ZUxpc3RlbmVyIGZvciBhbGwgbGlzdGVuZXJzIG9uIGFsbCBldmVudHNcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICBmb3IgKGtleSBpbiB0aGlzLl9ldmVudHMpIHtcbiAgICAgIGlmIChrZXkgPT09ICdyZW1vdmVMaXN0ZW5lcicpIGNvbnRpbnVlO1xuICAgICAgdGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoa2V5KTtcbiAgICB9XG4gICAgdGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoJ3JlbW92ZUxpc3RlbmVyJyk7XG4gICAgdGhpcy5fZXZlbnRzID0ge307XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBsaXN0ZW5lcnMgPSB0aGlzLl9ldmVudHNbdHlwZV07XG5cbiAgaWYgKGlzRnVuY3Rpb24obGlzdGVuZXJzKSkge1xuICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXJzKTtcbiAgfSBlbHNlIGlmIChsaXN0ZW5lcnMpIHtcbiAgICAvLyBMSUZPIG9yZGVyXG4gICAgd2hpbGUgKGxpc3RlbmVycy5sZW5ndGgpXG4gICAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVyc1tsaXN0ZW5lcnMubGVuZ3RoIC0gMV0pO1xuICB9XG4gIGRlbGV0ZSB0aGlzLl9ldmVudHNbdHlwZV07XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVycyA9IGZ1bmN0aW9uKHR5cGUpIHtcbiAgdmFyIHJldDtcbiAgaWYgKCF0aGlzLl9ldmVudHMgfHwgIXRoaXMuX2V2ZW50c1t0eXBlXSlcbiAgICByZXQgPSBbXTtcbiAgZWxzZSBpZiAoaXNGdW5jdGlvbih0aGlzLl9ldmVudHNbdHlwZV0pKVxuICAgIHJldCA9IFt0aGlzLl9ldmVudHNbdHlwZV1dO1xuICBlbHNlXG4gICAgcmV0ID0gdGhpcy5fZXZlbnRzW3R5cGVdLnNsaWNlKCk7XG4gIHJldHVybiByZXQ7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVyQ291bnQgPSBmdW5jdGlvbih0eXBlKSB7XG4gIGlmICh0aGlzLl9ldmVudHMpIHtcbiAgICB2YXIgZXZsaXN0ZW5lciA9IHRoaXMuX2V2ZW50c1t0eXBlXTtcblxuICAgIGlmIChpc0Z1bmN0aW9uKGV2bGlzdGVuZXIpKVxuICAgICAgcmV0dXJuIDE7XG4gICAgZWxzZSBpZiAoZXZsaXN0ZW5lcilcbiAgICAgIHJldHVybiBldmxpc3RlbmVyLmxlbmd0aDtcbiAgfVxuICByZXR1cm4gMDtcbn07XG5cbkV2ZW50RW1pdHRlci5saXN0ZW5lckNvdW50ID0gZnVuY3Rpb24oZW1pdHRlciwgdHlwZSkge1xuICByZXR1cm4gZW1pdHRlci5saXN0ZW5lckNvdW50KHR5cGUpO1xufTtcblxuZnVuY3Rpb24gaXNGdW5jdGlvbihhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdmdW5jdGlvbic7XG59XG5cbmZ1bmN0aW9uIGlzTnVtYmVyKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ251bWJlcic7XG59XG5cbmZ1bmN0aW9uIGlzT2JqZWN0KGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ29iamVjdCcgJiYgYXJnICE9PSBudWxsO1xufVxuXG5mdW5jdGlvbiBpc1VuZGVmaW5lZChhcmcpIHtcbiAgcmV0dXJuIGFyZyA9PT0gdm9pZCAwO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2V2ZW50cy9ldmVudHMuanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gaWYgKHR5cGVvZiByZXF1aXJlICE9PSAndW5kZWZpbmVkJykge31cblxudmFyIGlzRnVuY3Rpb24gPSBmdW5jdGlvbiAoZnVuY3Rpb25Ub0NoZWNrKSB7XG5cdHZhciBnZXRUeXBlID0ge307XG5cdHJldHVybiBmdW5jdGlvblRvQ2hlY2sgJiYgZ2V0VHlwZS50b1N0cmluZy5jYWxsKGZ1bmN0aW9uVG9DaGVjaykgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG59O1xuXG5pZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcblx0bW9kdWxlLmV4cG9ydHMgPSBpc0Z1bmN0aW9uO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9pc2Z1bmN0aW9uL2xpYi9tYWluLmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0Jztcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9saWIvaW5kZXgnKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zaG9ydGlkL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxudmFyIGFscGhhYmV0ID0gcmVxdWlyZSgnLi9hbHBoYWJldCcpO1xudmFyIGVuY29kZSA9IHJlcXVpcmUoJy4vZW5jb2RlJyk7XG52YXIgZGVjb2RlID0gcmVxdWlyZSgnLi9kZWNvZGUnKTtcbnZhciBidWlsZCA9IHJlcXVpcmUoJy4vYnVpbGQnKTtcbnZhciBpc1ZhbGlkID0gcmVxdWlyZSgnLi9pcy12YWxpZCcpO1xuXG4vLyBpZiB5b3UgYXJlIHVzaW5nIGNsdXN0ZXIgb3IgbXVsdGlwbGUgc2VydmVycyB1c2UgdGhpcyB0byBtYWtlIGVhY2ggaW5zdGFuY2Vcbi8vIGhhcyBhIHVuaXF1ZSB2YWx1ZSBmb3Igd29ya2VyXG4vLyBOb3RlOiBJIGRvbid0IGtub3cgaWYgdGhpcyBpcyBhdXRvbWF0aWNhbGx5IHNldCB3aGVuIHVzaW5nIHRoaXJkXG4vLyBwYXJ0eSBjbHVzdGVyIHNvbHV0aW9ucyBzdWNoIGFzIHBtMi5cbnZhciBjbHVzdGVyV29ya2VySWQgPSByZXF1aXJlKCcuL3V0aWwvY2x1c3Rlci13b3JrZXItaWQnKSB8fCAwO1xuXG4vKipcbiAqIFNldCB0aGUgc2VlZC5cbiAqIEhpZ2hseSByZWNvbW1lbmRlZCBpZiB5b3UgZG9uJ3Qgd2FudCBwZW9wbGUgdG8gdHJ5IHRvIGZpZ3VyZSBvdXQgeW91ciBpZCBzY2hlbWEuXG4gKiBleHBvc2VkIGFzIHNob3J0aWQuc2VlZChpbnQpXG4gKiBAcGFyYW0gc2VlZCBJbnRlZ2VyIHZhbHVlIHRvIHNlZWQgdGhlIHJhbmRvbSBhbHBoYWJldC4gIEFMV0FZUyBVU0UgVEhFIFNBTUUgU0VFRCBvciB5b3UgbWlnaHQgZ2V0IG92ZXJsYXBzLlxuICovXG5mdW5jdGlvbiBzZWVkKHNlZWRWYWx1ZSkge1xuICAgIGFscGhhYmV0LnNlZWQoc2VlZFZhbHVlKTtcbiAgICByZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8qKlxuICogU2V0IHRoZSBjbHVzdGVyIHdvcmtlciBvciBtYWNoaW5lIGlkXG4gKiBleHBvc2VkIGFzIHNob3J0aWQud29ya2VyKGludClcbiAqIEBwYXJhbSB3b3JrZXJJZCB3b3JrZXIgbXVzdCBiZSBwb3NpdGl2ZSBpbnRlZ2VyLiAgTnVtYmVyIGxlc3MgdGhhbiAxNiBpcyByZWNvbW1lbmRlZC5cbiAqIHJldHVybnMgc2hvcnRpZCBtb2R1bGUgc28gaXQgY2FuIGJlIGNoYWluZWQuXG4gKi9cbmZ1bmN0aW9uIHdvcmtlcih3b3JrZXJJZCkge1xuICAgIGNsdXN0ZXJXb3JrZXJJZCA9IHdvcmtlcklkO1xuICAgIHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLyoqXG4gKlxuICogc2V0cyBuZXcgY2hhcmFjdGVycyB0byB1c2UgaW4gdGhlIGFscGhhYmV0XG4gKiByZXR1cm5zIHRoZSBzaHVmZmxlZCBhbHBoYWJldFxuICovXG5mdW5jdGlvbiBjaGFyYWN0ZXJzKG5ld0NoYXJhY3RlcnMpIHtcbiAgICBpZiAobmV3Q2hhcmFjdGVycyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGFscGhhYmV0LmNoYXJhY3RlcnMobmV3Q2hhcmFjdGVycyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFscGhhYmV0LnNodWZmbGVkKCk7XG59XG5cbi8qKlxuICogR2VuZXJhdGUgdW5pcXVlIGlkXG4gKiBSZXR1cm5zIHN0cmluZyBpZFxuICovXG5mdW5jdGlvbiBnZW5lcmF0ZSgpIHtcbiAgcmV0dXJuIGJ1aWxkKGNsdXN0ZXJXb3JrZXJJZCk7XG59XG5cbi8vIEV4cG9ydCBhbGwgb3RoZXIgZnVuY3Rpb25zIGFzIHByb3BlcnRpZXMgb2YgdGhlIGdlbmVyYXRlIGZ1bmN0aW9uXG5tb2R1bGUuZXhwb3J0cyA9IGdlbmVyYXRlO1xubW9kdWxlLmV4cG9ydHMuZ2VuZXJhdGUgPSBnZW5lcmF0ZTtcbm1vZHVsZS5leHBvcnRzLnNlZWQgPSBzZWVkO1xubW9kdWxlLmV4cG9ydHMud29ya2VyID0gd29ya2VyO1xubW9kdWxlLmV4cG9ydHMuY2hhcmFjdGVycyA9IGNoYXJhY3RlcnM7XG5tb2R1bGUuZXhwb3J0cy5kZWNvZGUgPSBkZWNvZGU7XG5tb2R1bGUuZXhwb3J0cy5pc1ZhbGlkID0gaXNWYWxpZDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zaG9ydGlkL2xpYi9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbnZhciByYW5kb21Gcm9tU2VlZCA9IHJlcXVpcmUoJy4vcmFuZG9tL3JhbmRvbS1mcm9tLXNlZWQnKTtcblxudmFyIE9SSUdJTkFMID0gJzAxMjM0NTY3ODlhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ekFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaXy0nO1xudmFyIGFscGhhYmV0O1xudmFyIHByZXZpb3VzU2VlZDtcblxudmFyIHNodWZmbGVkO1xuXG5mdW5jdGlvbiByZXNldCgpIHtcbiAgICBzaHVmZmxlZCA9IGZhbHNlO1xufVxuXG5mdW5jdGlvbiBzZXRDaGFyYWN0ZXJzKF9hbHBoYWJldF8pIHtcbiAgICBpZiAoIV9hbHBoYWJldF8pIHtcbiAgICAgICAgaWYgKGFscGhhYmV0ICE9PSBPUklHSU5BTCkge1xuICAgICAgICAgICAgYWxwaGFiZXQgPSBPUklHSU5BTDtcbiAgICAgICAgICAgIHJlc2V0KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChfYWxwaGFiZXRfID09PSBhbHBoYWJldCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKF9hbHBoYWJldF8ubGVuZ3RoICE9PSBPUklHSU5BTC5sZW5ndGgpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDdXN0b20gYWxwaGFiZXQgZm9yIHNob3J0aWQgbXVzdCBiZSAnICsgT1JJR0lOQUwubGVuZ3RoICsgJyB1bmlxdWUgY2hhcmFjdGVycy4gWW91IHN1Ym1pdHRlZCAnICsgX2FscGhhYmV0Xy5sZW5ndGggKyAnIGNoYXJhY3RlcnM6ICcgKyBfYWxwaGFiZXRfKTtcbiAgICB9XG5cbiAgICB2YXIgdW5pcXVlID0gX2FscGhhYmV0Xy5zcGxpdCgnJykuZmlsdGVyKGZ1bmN0aW9uKGl0ZW0sIGluZCwgYXJyKXtcbiAgICAgICByZXR1cm4gaW5kICE9PSBhcnIubGFzdEluZGV4T2YoaXRlbSk7XG4gICAgfSk7XG5cbiAgICBpZiAodW5pcXVlLmxlbmd0aCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0N1c3RvbSBhbHBoYWJldCBmb3Igc2hvcnRpZCBtdXN0IGJlICcgKyBPUklHSU5BTC5sZW5ndGggKyAnIHVuaXF1ZSBjaGFyYWN0ZXJzLiBUaGVzZSBjaGFyYWN0ZXJzIHdlcmUgbm90IHVuaXF1ZTogJyArIHVuaXF1ZS5qb2luKCcsICcpKTtcbiAgICB9XG5cbiAgICBhbHBoYWJldCA9IF9hbHBoYWJldF87XG4gICAgcmVzZXQoKTtcbn1cblxuZnVuY3Rpb24gY2hhcmFjdGVycyhfYWxwaGFiZXRfKSB7XG4gICAgc2V0Q2hhcmFjdGVycyhfYWxwaGFiZXRfKTtcbiAgICByZXR1cm4gYWxwaGFiZXQ7XG59XG5cbmZ1bmN0aW9uIHNldFNlZWQoc2VlZCkge1xuICAgIHJhbmRvbUZyb21TZWVkLnNlZWQoc2VlZCk7XG4gICAgaWYgKHByZXZpb3VzU2VlZCAhPT0gc2VlZCkge1xuICAgICAgICByZXNldCgpO1xuICAgICAgICBwcmV2aW91c1NlZWQgPSBzZWVkO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gc2h1ZmZsZSgpIHtcbiAgICBpZiAoIWFscGhhYmV0KSB7XG4gICAgICAgIHNldENoYXJhY3RlcnMoT1JJR0lOQUwpO1xuICAgIH1cblxuICAgIHZhciBzb3VyY2VBcnJheSA9IGFscGhhYmV0LnNwbGl0KCcnKTtcbiAgICB2YXIgdGFyZ2V0QXJyYXkgPSBbXTtcbiAgICB2YXIgciA9IHJhbmRvbUZyb21TZWVkLm5leHRWYWx1ZSgpO1xuICAgIHZhciBjaGFyYWN0ZXJJbmRleDtcblxuICAgIHdoaWxlIChzb3VyY2VBcnJheS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHIgPSByYW5kb21Gcm9tU2VlZC5uZXh0VmFsdWUoKTtcbiAgICAgICAgY2hhcmFjdGVySW5kZXggPSBNYXRoLmZsb29yKHIgKiBzb3VyY2VBcnJheS5sZW5ndGgpO1xuICAgICAgICB0YXJnZXRBcnJheS5wdXNoKHNvdXJjZUFycmF5LnNwbGljZShjaGFyYWN0ZXJJbmRleCwgMSlbMF0pO1xuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0QXJyYXkuam9pbignJyk7XG59XG5cbmZ1bmN0aW9uIGdldFNodWZmbGVkKCkge1xuICAgIGlmIChzaHVmZmxlZCkge1xuICAgICAgICByZXR1cm4gc2h1ZmZsZWQ7XG4gICAgfVxuICAgIHNodWZmbGVkID0gc2h1ZmZsZSgpO1xuICAgIHJldHVybiBzaHVmZmxlZDtcbn1cblxuLyoqXG4gKiBsb29rdXAgc2h1ZmZsZWQgbGV0dGVyXG4gKiBAcGFyYW0gaW5kZXhcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGxvb2t1cChpbmRleCkge1xuICAgIHZhciBhbHBoYWJldFNodWZmbGVkID0gZ2V0U2h1ZmZsZWQoKTtcbiAgICByZXR1cm4gYWxwaGFiZXRTaHVmZmxlZFtpbmRleF07XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIGNoYXJhY3RlcnM6IGNoYXJhY3RlcnMsXG4gICAgc2VlZDogc2V0U2VlZCxcbiAgICBsb29rdXA6IGxvb2t1cCxcbiAgICBzaHVmZmxlZDogZ2V0U2h1ZmZsZWRcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc2hvcnRpZC9saWIvYWxwaGFiZXQuanNcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG4vLyBGb3VuZCB0aGlzIHNlZWQtYmFzZWQgcmFuZG9tIGdlbmVyYXRvciBzb21ld2hlcmVcbi8vIEJhc2VkIG9uIFRoZSBDZW50cmFsIFJhbmRvbWl6ZXIgMS4zIChDKSAxOTk3IGJ5IFBhdWwgSG91bGUgKGhvdWxlQG1zYy5jb3JuZWxsLmVkdSlcblxudmFyIHNlZWQgPSAxO1xuXG4vKipcbiAqIHJldHVybiBhIHJhbmRvbSBudW1iZXIgYmFzZWQgb24gYSBzZWVkXG4gKiBAcGFyYW0gc2VlZFxuICogQHJldHVybnMge251bWJlcn1cbiAqL1xuZnVuY3Rpb24gZ2V0TmV4dFZhbHVlKCkge1xuICAgIHNlZWQgPSAoc2VlZCAqIDkzMDEgKyA0OTI5NykgJSAyMzMyODA7XG4gICAgcmV0dXJuIHNlZWQvKDIzMzI4MC4wKTtcbn1cblxuZnVuY3Rpb24gc2V0U2VlZChfc2VlZF8pIHtcbiAgICBzZWVkID0gX3NlZWRfO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBuZXh0VmFsdWU6IGdldE5leHRWYWx1ZSxcbiAgICBzZWVkOiBzZXRTZWVkXG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Nob3J0aWQvbGliL3JhbmRvbS9yYW5kb20tZnJvbS1zZWVkLmpzXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxudmFyIHJhbmRvbUJ5dGUgPSByZXF1aXJlKCcuL3JhbmRvbS9yYW5kb20tYnl0ZScpO1xuXG5mdW5jdGlvbiBlbmNvZGUobG9va3VwLCBudW1iZXIpIHtcbiAgICB2YXIgbG9vcENvdW50ZXIgPSAwO1xuICAgIHZhciBkb25lO1xuXG4gICAgdmFyIHN0ciA9ICcnO1xuXG4gICAgd2hpbGUgKCFkb25lKSB7XG4gICAgICAgIHN0ciA9IHN0ciArIGxvb2t1cCggKCAobnVtYmVyID4+ICg0ICogbG9vcENvdW50ZXIpKSAmIDB4MGYgKSB8IHJhbmRvbUJ5dGUoKSApO1xuICAgICAgICBkb25lID0gbnVtYmVyIDwgKE1hdGgucG93KDE2LCBsb29wQ291bnRlciArIDEgKSApO1xuICAgICAgICBsb29wQ291bnRlcisrO1xuICAgIH1cbiAgICByZXR1cm4gc3RyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGVuY29kZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zaG9ydGlkL2xpYi9lbmNvZGUuanNcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxudmFyIGNyeXB0byA9IHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnICYmICh3aW5kb3cuY3J5cHRvIHx8IHdpbmRvdy5tc0NyeXB0byk7IC8vIElFIDExIHVzZXMgd2luZG93Lm1zQ3J5cHRvXG5cbmZ1bmN0aW9uIHJhbmRvbUJ5dGUoKSB7XG4gICAgaWYgKCFjcnlwdG8gfHwgIWNyeXB0by5nZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDI1NikgJiAweDMwO1xuICAgIH1cbiAgICB2YXIgZGVzdCA9IG5ldyBVaW50OEFycmF5KDEpO1xuICAgIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMoZGVzdCk7XG4gICAgcmV0dXJuIGRlc3RbMF0gJiAweDMwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHJhbmRvbUJ5dGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc2hvcnRpZC9saWIvcmFuZG9tL3JhbmRvbS1ieXRlLWJyb3dzZXIuanNcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcbnZhciBhbHBoYWJldCA9IHJlcXVpcmUoJy4vYWxwaGFiZXQnKTtcblxuLyoqXG4gKiBEZWNvZGUgdGhlIGlkIHRvIGdldCB0aGUgdmVyc2lvbiBhbmQgd29ya2VyXG4gKiBNYWlubHkgZm9yIGRlYnVnZ2luZyBhbmQgdGVzdGluZy5cbiAqIEBwYXJhbSBpZCAtIHRoZSBzaG9ydGlkLWdlbmVyYXRlZCBpZC5cbiAqL1xuZnVuY3Rpb24gZGVjb2RlKGlkKSB7XG4gICAgdmFyIGNoYXJhY3RlcnMgPSBhbHBoYWJldC5zaHVmZmxlZCgpO1xuICAgIHJldHVybiB7XG4gICAgICAgIHZlcnNpb246IGNoYXJhY3RlcnMuaW5kZXhPZihpZC5zdWJzdHIoMCwgMSkpICYgMHgwZixcbiAgICAgICAgd29ya2VyOiBjaGFyYWN0ZXJzLmluZGV4T2YoaWQuc3Vic3RyKDEsIDEpKSAmIDB4MGZcbiAgICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRlY29kZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zaG9ydGlkL2xpYi9kZWNvZGUuanNcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxudmFyIGVuY29kZSA9IHJlcXVpcmUoJy4vZW5jb2RlJyk7XG52YXIgYWxwaGFiZXQgPSByZXF1aXJlKCcuL2FscGhhYmV0Jyk7XG5cbi8vIElnbm9yZSBhbGwgbWlsbGlzZWNvbmRzIGJlZm9yZSBhIGNlcnRhaW4gdGltZSB0byByZWR1Y2UgdGhlIHNpemUgb2YgdGhlIGRhdGUgZW50cm9weSB3aXRob3V0IHNhY3JpZmljaW5nIHVuaXF1ZW5lc3MuXG4vLyBUaGlzIG51bWJlciBzaG91bGQgYmUgdXBkYXRlZCBldmVyeSB5ZWFyIG9yIHNvIHRvIGtlZXAgdGhlIGdlbmVyYXRlZCBpZCBzaG9ydC5cbi8vIFRvIHJlZ2VuZXJhdGUgYG5ldyBEYXRlKCkgLSAwYCBhbmQgYnVtcCB0aGUgdmVyc2lvbi4gQWx3YXlzIGJ1bXAgdGhlIHZlcnNpb24hXG52YXIgUkVEVUNFX1RJTUUgPSAxNDU5NzA3NjA2NTE4O1xuXG4vLyBkb24ndCBjaGFuZ2UgdW5sZXNzIHdlIGNoYW5nZSB0aGUgYWxnb3Mgb3IgUkVEVUNFX1RJTUVcbi8vIG11c3QgYmUgYW4gaW50ZWdlciBhbmQgbGVzcyB0aGFuIDE2XG52YXIgdmVyc2lvbiA9IDY7XG5cbi8vIENvdW50ZXIgaXMgdXNlZCB3aGVuIHNob3J0aWQgaXMgY2FsbGVkIG11bHRpcGxlIHRpbWVzIGluIG9uZSBzZWNvbmQuXG52YXIgY291bnRlcjtcblxuLy8gUmVtZW1iZXIgdGhlIGxhc3QgdGltZSBzaG9ydGlkIHdhcyBjYWxsZWQgaW4gY2FzZSBjb3VudGVyIGlzIG5lZWRlZC5cbnZhciBwcmV2aW91c1NlY29uZHM7XG5cbi8qKlxuICogR2VuZXJhdGUgdW5pcXVlIGlkXG4gKiBSZXR1cm5zIHN0cmluZyBpZFxuICovXG5mdW5jdGlvbiBidWlsZChjbHVzdGVyV29ya2VySWQpIHtcblxuICAgIHZhciBzdHIgPSAnJztcblxuICAgIHZhciBzZWNvbmRzID0gTWF0aC5mbG9vcigoRGF0ZS5ub3coKSAtIFJFRFVDRV9USU1FKSAqIDAuMDAxKTtcblxuICAgIGlmIChzZWNvbmRzID09PSBwcmV2aW91c1NlY29uZHMpIHtcbiAgICAgICAgY291bnRlcisrO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvdW50ZXIgPSAwO1xuICAgICAgICBwcmV2aW91c1NlY29uZHMgPSBzZWNvbmRzO1xuICAgIH1cblxuICAgIHN0ciA9IHN0ciArIGVuY29kZShhbHBoYWJldC5sb29rdXAsIHZlcnNpb24pO1xuICAgIHN0ciA9IHN0ciArIGVuY29kZShhbHBoYWJldC5sb29rdXAsIGNsdXN0ZXJXb3JrZXJJZCk7XG4gICAgaWYgKGNvdW50ZXIgPiAwKSB7XG4gICAgICAgIHN0ciA9IHN0ciArIGVuY29kZShhbHBoYWJldC5sb29rdXAsIGNvdW50ZXIpO1xuICAgIH1cbiAgICBzdHIgPSBzdHIgKyBlbmNvZGUoYWxwaGFiZXQubG9va3VwLCBzZWNvbmRzKTtcblxuICAgIHJldHVybiBzdHI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYnVpbGQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc2hvcnRpZC9saWIvYnVpbGQuanNcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcbnZhciBhbHBoYWJldCA9IHJlcXVpcmUoJy4vYWxwaGFiZXQnKTtcblxuZnVuY3Rpb24gaXNTaG9ydElkKGlkKSB7XG4gICAgaWYgKCFpZCB8fCB0eXBlb2YgaWQgIT09ICdzdHJpbmcnIHx8IGlkLmxlbmd0aCA8IDYgKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICB2YXIgY2hhcmFjdGVycyA9IGFscGhhYmV0LmNoYXJhY3RlcnMoKTtcbiAgICB2YXIgbGVuID0gaWQubGVuZ3RoO1xuICAgIGZvcih2YXIgaSA9IDA7IGkgPCBsZW47aSsrKSB7XG4gICAgICAgIGlmIChjaGFyYWN0ZXJzLmluZGV4T2YoaWRbaV0pID09PSAtMSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzU2hvcnRJZDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zaG9ydGlkL2xpYi9pcy12YWxpZC5qc1xuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IDA7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc2hvcnRpZC9saWIvdXRpbC9jbHVzdGVyLXdvcmtlci1pZC1icm93c2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxyXG4gKiBDb3B5cmlnaHQgKGMpICAyMDE3IENhaXBpIExhYnMgLlxyXG4gKlxyXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxyXG4gKlxyXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuICpcclxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIFVsdHJhIHNjYWxhYmxlIHN0YXRlLWF3YXJlIHN0b3JlXHJcbiAqXHJcbiAqIEB0b2RvIDogbG90IG9mIG9wdGltcy4uLlxyXG4gKi9cclxuXHJcbnZhciBpc1N0cmluZyAgICAgPSByZXF1aXJlKCdpc3N0cmluZycpXHJcbiAgICAsIGlzQXJyYXkgICAgPSByZXF1aXJlKCdpc2FycmF5JylcclxuICAgICwgaXNGdW5jdGlvbiA9IHJlcXVpcmUoJ2lzZnVuY3Rpb24nKVxyXG4gICAgLFxyXG4gICAgQ29udGV4dCAgICAgID0gcmVxdWlyZSgnLi9Db250ZXh0JyksXHJcbiAgICBFdmVudEVtaXR0ZXIgPSByZXF1aXJlKCdldmVudHMnKSxcclxuICAgIHNob3J0aWQgICAgICA9IHJlcXVpcmUoJ3Nob3J0aWQnKSxcclxuICAgIG9ialByb3RvICAgICA9IE9iamVjdC5nZXRQcm90b3R5cGVPZih7fSksXHJcbiAgICBvcGVuQ29udGV4dHMgPSB7fTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdG9yZSBleHRlbmRzIEV2ZW50RW1pdHRlciB7XHJcblxyXG4gICAgc3RhdGljIHVzZSAgICAgICAgICAgICAgICAgPSBbXTsvLyBvdmVycmlkYWJsZSBsaXN0IG9mIHNvdXJjZSBzdG9yZXNcclxuICAgIHN0YXRpYyBmb2xsb3c7Ly8gb3ZlcnJpZGFibGUgbGlzdCBvZiBzdG9yZSB0aGF0IHdpbGwgYWxsb3cgcHVzaCBpZiB1cGRhdGVkXHJcbiAgICBzdGF0aWMgcmVxdWlyZTtcclxuICAgIHN0YXRpYyBzdGF0aWNDb250ZXh0ICAgICAgID0gbmV3IENvbnRleHQoe30sIHtpZCA6IFwic3RhdGljXCJ9KTtcclxuICAgIHN0YXRpYyBpbml0aWFsU3RhdGUgICAgICAgID0gdW5kZWZpbmVkOy8vIGRlZmF1bHQgc3RhdGVcclxuICAgIHN0YXRpYyBkZWZhdWx0TWF4TGlzdGVuZXJzID0gMjA7XHJcbiAgICBzdGF0aWMgYXV0b2tpbGwgICAgICAgICAgICA9IGZhbHNlOy8vIGZhbHNlIG9yIHRtIHdpdGhvdXQgZm9sbG93ZXJzXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBnZXQgYSBCdWlsZGVyLWtleSBwYWlyIGZvciBTdG9yZTo6bWFwXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxyXG4gICAgICogQHJldHVybnMge3tzdG9yZTogU3RvcmUsIG5hbWU6ICp9fVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgYXMoIG5hbWUgKSB7XHJcbiAgICAgICAgcmV0dXJuIHtzdG9yZSA6IHRoaXMsIG5hbWV9O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTWFwIGFsbCBuYW1lZCBzdG9yZXMgaW4ge2tleXN9IHRvIHRoZSB7b2JqZWN0fSdzIHN0YXRlXHJcbiAgICAgKiBIb29rIGNvbXBvbmVudFdpbGxVbm1vdW50IChmb3IgcmVhY3QgY29tcCkgb3IgZGVzdHJveSB0byB1bkJpbmQgdGhlbSBhdXRvbWF0aWNhbGx5XHJcbiAgICAgKiBAc3RhdGljXHJcbiAgICAgKiBAcGFyYW0gb2JqZWN0IHtSZWFjdC5Db21wb25lbnR8U3RvcmV8Li4ufSB0YXJnZXQgc3RhdGUgYXdhcmUgb2JqZWN0XHJcbiAgICAgKiBAcGFyYW0ga2V5cyB7QXJyYXl9IEV4IDogW1wic2Vzc2lvblwiLCBcIm90aGVyU3RhdGljTmFtZWRTdG9yZTprZXlcIiwgc3RvcmUuYXMoJ2Fub3RoZXJLZXknKV1cclxuICAgICAqL1xyXG4gICAgc3RhdGljIG1hcCggY29tcG9uZW50LCBrZXlzLCBjb250ZXh0LCBvcmlnaW4sIHNldEluaXRpYWwgPSBmYWxzZSApIHtcclxuICAgICAgICB2YXIgdGFyZ2V0UmV2cyAgICAgPSBjb21wb25lbnQuX3JldnMgfHwge307XHJcbiAgICAgICAgLy8gdmFyIHRhcmdldENvbnRleHQgID0gY29tcG9uZW50LnN0b3JlcyB8fCAoY29tcG9uZW50LnN0b3JlcyA9IG5ldyBDb250ZXh0KHt9KSk7XHJcbiAgICAgICAgdmFyIGluaXRpYWxPdXRwdXRzID0ge307XHJcbiAgICAgICAga2V5cyAgICAgICAgICAgICAgID0gaXNBcnJheShrZXlzKSA/IFsuLi5rZXlzXSA6IFtrZXlzXTtcclxuXHJcblxyXG4gICAgICAgIGNvbnRleHQgPSBjb250ZXh0IHx8IFN0b3JlLnN0YXRpY0NvbnRleHQ7XHJcblxyXG4gICAgICAgIC8vIGlmICghdGFyZ2V0Q29udGV4dC5fX2NvbnRleHQpXHJcbiAgICAgICAgLy8gICAgIGRlYnVnZ2VyO1xyXG5cclxuICAgICAgICBrZXlzICAgICAgICAgICA9IGtleXMuZmlsdGVyKFxyXG4gICAgICAgICAgICAvLyBAdG9kbyA6IHVzZSBxdWVyeSByZWZzXHJcbiAgICAgICAgICAgIC8vIChzdG9yZSkoXFwuc3RvcmUpKihcXFsoXFwqfChwcm9wcylcXHcrKSspXFxdKT8oXFw6YWxpYXMpXHJcbiAgICAgICAgICAgICgga2V5ICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCAha2V5ICkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJOb3QgYSBtYXBwYWJsZSBzdG9yZSBpdGVtICdcIiArIGtleSArIFwiJyBpbiBcIiArIG9yaWdpbiArICcgISEnKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBsZXQgbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBhbGlhcyxcclxuICAgICAgICAgICAgICAgICAgICBzdG9yZTtcclxuICAgICAgICAgICAgICAgIGlmICgga2V5LnN0b3JlICYmIGtleS5uYW1lICkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWFzID0gbmFtZSA9IGtleS5uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIHN0b3JlID0ga2V5LnN0b3JlO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICggaXNGdW5jdGlvbihrZXkpICkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWUgPSBhbGlhcyA9IGtleS5uYW1lIHx8IGtleS5kZWZhdWx0TmFtZTtcclxuICAgICAgICAgICAgICAgICAgICBzdG9yZSA9IGtleTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAga2V5ICAgPSBrZXkubWF0Y2goLyhbXFx3X10rKSg/OlxcOlxcWyhcXCopXFxdKT8oPzpcXDooXFwqKSk/Lyk7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZSAgPSBrZXlbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgc3RvcmUgPSBjb250ZXh0Ll9fY29udGV4dFtrZXlbMF1dO1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWFzID0ga2V5WzFdID09ICcqJyA/IG51bGwgOiBrZXlbMl0gfHwga2V5WzBdOy8vIGFsbG93IGJpbmRpbmcgcHJvcHMgIChbKl0pXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCB0YXJnZXRSZXZzW25hbWVdICkgcmV0dXJuIGZhbHNlOy8vIGlnbm9yZSBkYmwgdXNlcyBmb3Igbm93XHJcbiAgICAgICAgICAgICAgICBpZiAoICFzdG9yZSApIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiTm90IGEgbWFwcGFibGUgc3RvcmUgaXRlbSAnXCIgKyBuYW1lICsgXCIvXCIgKyBhbGlhcyArIFwiJyBpbiBcIiArIG9yaWdpbiArICcgISEnLCBzdG9yZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICggaXNGdW5jdGlvbihzdG9yZSkgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3VudFN0b3JlKG5hbWUsIGNvbnRleHQpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQuX19jb250ZXh0W25hbWVdLmJpbmQoY29tcG9uZW50LCBhbGlhcywgc2V0SW5pdGlhbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgKCBjb250ZXh0Ll9fY29udGV4dFtrZXlbMF1dLnN0YXRlICkgey8vIGRvIHN5bmMgcHVzaCBhZnRlciBjb25zdHJ1Y3RvclxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBjb250ZXh0Ll9fY29udGV4dFtrZXlbMF1dLnB1c2goKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0b3JlLmJpbmQoY29tcG9uZW50LCBhbGlhcywgc2V0SW5pdGlhbCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRSZXZzW2FsaWFzXSA9IHRhcmdldFJldnNbYWxpYXNdIHx8IHRydWU7XHJcbiAgICAgICAgICAgICAgICAvLyAhdGFyZ2V0Q29udGV4dC5fX2NvbnRleHRbYWxpYXNdICYmIHRhcmdldENvbnRleHQucmVnaXN0ZXIoe1thbGlhc10gOiBjb250ZXh0Ll9fY29udGV4dFtuYW1lXX0pO1xyXG4gICAgICAgICAgICAgICAgaWYgKCBjb250ZXh0Ll9fY29udGV4dFtuYW1lXS5oYXNPd25Qcm9wZXJ0eSgnZGF0YXMnKSApXHJcbiAgICAgICAgICAgICAgICAgICAgaW5pdGlhbE91dHB1dHNbYWxpYXNdID0gY29udGV4dC5kYXRhc1tuYW1lXTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgICAgICB2YXIgbWl4ZWRDV1VubW91bnQsXHJcbiAgICAgICAgICAgIHVuTW91bnRLZXkgPSBjb21wb25lbnQuaXNSZWFjdENvbXBvbmVudCA/IFwiY29tcG9uZW50V2lsbFVubW91bnRcIiA6IFwiZGVzdHJveVwiO1xyXG5cclxuICAgICAgICBpZiAoIGNvbXBvbmVudC5oYXNPd25Qcm9wZXJ0eSh1bk1vdW50S2V5KSApIHtcclxuICAgICAgICAgICAgbWl4ZWRDV1VubW91bnQgPSBjb21wb25lbnRbdW5Nb3VudEtleV07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb21wb25lbnRbdW5Nb3VudEtleV0gPSBmdW5jdGlvbiAoKSB7Ly8gdG9kbyBob3BcclxuICAgICAgICAgICAgZGVsZXRlIHRoaXNbdW5Nb3VudEtleV07XHJcbiAgICAgICAgICAgIGlmICggbWl4ZWRDV1VubW91bnQgKVxyXG4gICAgICAgICAgICAgICAgdGhpc1t1bk1vdW50S2V5XSA9IG1peGVkQ1dVbm1vdW50O1xyXG4gICAgICAgICAgICBrZXlzLm1hcChcclxuICAgICAgICAgICAgICAgICgga2V5ICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlhcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmU7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBrZXkuc3RvcmUgJiYga2V5Lm5hbWUgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWFzID0gbmFtZSA9IGtleS5uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9yZSA9IGtleS5zdG9yZTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCBpc0Z1bmN0aW9uKGtleSkgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUgPSBhbGlhcyA9IGtleS5uYW1lIHx8IGtleS5kZWZhdWx0TmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmUgPSBjb250ZXh0Ll9fY29udGV4dFtuYW1lXTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXkgICA9IGtleS5zcGxpdCgnOicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lICA9IGtleVswXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmUgPSBjb250ZXh0Ll9fY29udGV4dFtrZXlbMF1dO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlhcyA9IGtleVsxXSB8fCBrZXlbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBzdG9yZSYmc3RvcmUudW5CaW5kKGNvbXBvbmVudCwgYWxpYXMpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzW3VuTW91bnRLZXldICYmIHRoaXNbdW5Nb3VudEtleV0uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBpbml0aWFsT3V0cHV0cztcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0Q29udGV4dCggY29udGV4dHMgKSB7XHJcbiAgICAgICAgbGV0IHNrZXkgPSBpc0FycmF5KGNvbnRleHRzKSA/IGNvbnRleHRzLnNvcnQoKCBhLCBiICkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIGEuZmlyc3RuYW1lIDwgYi5maXJzdG5hbWUgKSByZXR1cm4gLTE7XHJcbiAgICAgICAgICAgIGlmICggYS5maXJzdG5hbWUgPiBiLmZpcnN0bmFtZSApIHJldHVybiAxO1xyXG4gICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICB9KS5qb2luKCc6OicpIDogY29udGV4dHM7XHJcbiAgICAgICAgcmV0dXJuIENvbnRleHQuY29udGV4dHNbc2tleV0gPSBDb250ZXh0LmNvbnRleHRzW3NrZXldIHx8IG5ldyBDb250ZXh0KHt9LCB7aWQgOiBza2V5fSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIG1vdW50U3RvcmUoIG5hbWUsIGNvbnRleHQsIHN0b3JlLCBzdGF0ZSwgZGF0YXMgKSB7XHJcbiAgICAgICAgbGV0IGN0eCwgY29udGV4dE1hcCA9IGNvbnRleHQuX19jb250ZXh0O1xyXG4gICAgICAgIGNvbnRleHRNYXBbbmFtZV0gICAgPSBzdG9yZSA9IHN0b3JlIHx8IGNvbnRleHRNYXBbbmFtZV07XHJcbiAgICAgICAgaWYgKCAhc3RvcmUgKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJOb3QgYSBtYXBwYWJsZSBzdG9yZSBpdGVtICdcIiArIG5hbWUgKyAnICEhJywgc3RvcmUpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIGlmICggaXNGdW5jdGlvbihzdG9yZSkgKSB7XHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIGlmICggc3RvcmUgJiYgKHN0b3JlLmNvbnRleHRzIHx8IHN0b3JlLmNvbnRleHQpICkge1xyXG4gICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5nZXRDb250ZXh0KHN0b3JlLmNvbnRleHRzIHx8IFtzdG9yZS5jb250ZXh0XSk7XHJcblxyXG4gICAgICAgICAgICAgICAgY3R4LnJlZ2lzdGVyKHtbbmFtZV0gOiBjdHguX19jb250ZXh0W25hbWVdIHx8IHN0b3JlfSk7XHJcbiAgICAgICAgICAgICAgICBjdHguX21vdW50KG5hbWUpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbnRleHRNYXBbbmFtZV0gPSBjdHhbbmFtZV07XHJcbiAgICAgICAgICAgIH0gZWxzZVxyXG4gICAgICAgICAgICAgICAgc3RvcmUgPSBjb250ZXh0TWFwW25hbWVdID0gbmV3IHN0b3JlKGNvbnRleHQsIHtzdGF0ZSwgZGF0YXN9KTtcclxuICAgICAgICAgICAgY29udGV4dE1hcFtuYW1lXS5yZWxpbmsobmFtZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKCBzdGF0ZSAhPT0gdW5kZWZpbmVkICYmIGRhdGFzID09PSB1bmRlZmluZWQgKVxyXG4gICAgICAgICAgICAgICAgc3RvcmUuc2V0U3RhdGUoc3RhdGUpO1xyXG4gICAgICAgICAgICBlbHNlIGlmICggc3RhdGUgIT09IHVuZGVmaW5lZCApXHJcbiAgICAgICAgICAgICAgICBzdG9yZS5zdGF0ZSA9IHN0YXRlO1xyXG5cclxuICAgICAgICAgICAgaWYgKCBkYXRhcyAhPT0gdW5kZWZpbmVkIClcclxuICAgICAgICAgICAgICAgIHN0b3JlLnB1c2goZGF0YXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc3RvcmU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb25zdHJ1Y3Rvciwgd2lsbCBidWlsZCBhIHJlc2NvcGUgc3RvcmVcclxuICAgICAqXHJcbiAgICAgKiAoY29udGV4dCwge3JlcXVpcmUsdXNlLHJlZmluZSxzdGF0ZSwgZGF0YXN9KVxyXG4gICAgICogKGNvbnRleHQpXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGNvbnRleHQge29iamVjdH0gY29udGV4dCB3aGVyZSB0byBmaW5kIHRoZSBvdGhlciBzdG9yZXMgKGRlZmF1bHQgOiBzdGF0aWMgc3RhdGljQ29udGV4dCApXHJcbiAgICAgKiBAcGFyYW0ga2V5cyB7QXJyYXl9IChwYXNzZWQgdG8gU3RvcmU6Om1hcCkgRXggOiBbXCJzZXNzaW9uXCIsIFwib3RoZXJOYW1lZFN0b3JlOmtleVwiLCBvdGhlclN0b3JlLmFzKFwib3RoZXJLZXlcIildXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdmFyIGFyZ3ogICAgICAgICA9IFsuLi5hcmd1bWVudHNdLFxyXG4gICAgICAgICAgICBfc3RhdGljICAgICAgPSB0aGlzLmNvbnN0cnVjdG9yLFxyXG4gICAgICAgICAgICBjb250ZXh0ICAgICAgPSAhaXNBcnJheShhcmd6WzBdKSAmJiAhaXNTdHJpbmcoYXJnelswXSkgPyBhcmd6LnNoaWZ0KCkgOiBfc3RhdGljLnN0YXRpY0NvbnRleHQsXHJcbiAgICAgICAgICAgIGNmZyAgICAgICAgICA9IGFyZ3pbMF0gJiYgIWlzQXJyYXkoYXJnelswXSkgJiYgIWlzU3RyaW5nKGFyZ3pbMF0pID8gYXJnei5zaGlmdCgpIDoge30sXHJcbiAgICAgICAgICAgIG5hbWUgICAgICAgICA9IGlzU3RyaW5nKGFyZ3pbMF0pID8gYXJnelswXSA6IGNmZy5uYW1lIHx8IF9zdGF0aWMubmFtZSxcclxuICAgICAgICAgICAgd2F0Y2hzICAgICAgID0gaXNBcnJheShhcmd6WzBdKSA/IGFyZ3ouc2hpZnQoKSA6IGNmZy51c2UgfHwgW10sLy8gd2F0Y2hzIG5lZWQgdG8gYmUgZGVmaW5lZCBhZnRlciBhbGwgdGhlIHN0b3JlIGFyZSByZWdpc3RlcmVkIDogc28gd2UgY2FuJ3QgZGVhbCB3aXRoIGFueSBcInN0YXRpYyB1c2VcIiBhdXRvbWF0aWNseVxyXG4gICAgICAgICAgICByZWZpbmUgICAgICAgPSBpc0Z1bmN0aW9uKGFyZ3pbMF0pID8gYXJnei5zaGlmdCgpIDogY2ZnLnJlZmluZSB8fCBudWxsLFxyXG4gICAgICAgICAgICBpbml0aWFsU3RhdGUgPSBfc3RhdGljLmluaXRpYWxTdGF0ZTtcclxuXHJcbiAgICAgICAgdGhpcy5fdWlkICAgICAgICAgID0gY2ZnLl91aWQgfHwgc2hvcnRpZC5nZW5lcmF0ZSgpO1xyXG4gICAgICAgIHRoaXMuX21heExpc3RlbmVycyA9IGNmZy5kZWZhdWx0TWF4TGlzdGVuZXJzIHx8IFN0b3JlLmRlZmF1bHRNYXhMaXN0ZW5lcnM7XHJcbiAgICAgICAgdGhpcy5sb2NrcyAgICAgICAgID0gMDtcclxuICAgICAgICB0aGlzLl9vblN0YWJpbGl6ZSAgPSBbXTtcclxuXHJcbiAgICAgICAgaWYgKCBpc1N0cmluZyhhcmd6WzBdKSApIHtcclxuICAgICAgICAgICAgaWYgKCBjb250ZXh0Ll9fY29udGV4dFtuYW1lXSApXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCJSZVNjb3BlOiBPdmVyd3JpdGluZyBhbiBleGlzdGluZyBzdGF0aWMgbmFtZWQgc3RvcmUgKCAlcyApICEhXCIsIG5hbWUpO1xyXG4gICAgICAgICAgICBjb250ZXh0Ll9fY29udGV4dFtuYW1lXSA9IHRoaXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIGNmZyAmJiBjZmcub24gKSB7XHJcbiAgICAgICAgICAgIHRoaXMub24oY2ZnLm9uKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gdGhpcy5zdGF0ZSAgICAgID0gdGhpcy5zdGF0ZSB8fCB7fTtcclxuXHJcbiAgICAgICAgdGhpcy5fdXNlID0gd2F0Y2hzO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcblxyXG4gICAgICAgIGlmICggY29udGV4dC5zdG9yZXMgKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGV4dE9iaiA9IGNvbnRleHQ7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGV4dCAgICA9IGNvbnRleHQuc3RvcmVzO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGV4dE9iaiA9IG5ldyBDb250ZXh0KGNvbnRleHQpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRleHQgICAgPSBjb250ZXh0LnN0b3JlcztcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICB0aGlzLl9zdGFibGUgID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLl9yZXYgICAgID0gMTtcclxuICAgICAgICB0aGlzLl9yZXZzICAgID0ge307XHJcbiAgICAgICAgdGhpcy5zdG9yZXMgICA9IHt9O1xyXG4gICAgICAgIHRoaXMuX3JlcXVpcmUgPSBbXTtcclxuXHJcbiAgICAgICAgaWYgKCBfc3RhdGljLnJlcXVpcmUgKVxyXG4gICAgICAgICAgICB0aGlzLl9yZXF1aXJlLnB1c2goLi4uX3N0YXRpYy5yZXF1aXJlKTtcclxuICAgICAgICBpZiAoIGNmZy5yZXF1aXJlIClcclxuICAgICAgICAgICAgdGhpcy5fcmVxdWlyZS5wdXNoKC4uLmNmZy5yZXF1aXJlKTtcclxuXHJcbiAgICAgICAgdGhpcy5fZm9sbG93ZXJzID0gW107XHJcblxyXG4gICAgICAgIGlmICggY2ZnLmhhc093blByb3BlcnR5KFwiZGF0YXNcIikgJiYgY2ZnLmRhdGFzICE9PSB1bmRlZmluZWQgKVxyXG4gICAgICAgICAgICB0aGlzLmRhdGFzID0gY2ZnLmRhdGFzO1xyXG4gICAgICAgIGlmICggY2ZnLmhhc093blByb3BlcnR5KFwic3RhdGVcIikgJiYgY2ZnLnN0YXRlICE9PSB1bmRlZmluZWQgKVxyXG4gICAgICAgICAgICBpbml0aWFsU3RhdGUgPSBjZmcuc3RhdGU7XHJcblxyXG4gICAgICAgIGlmICggcmVmaW5lIClcclxuICAgICAgICAgICAgdGhpcy5yZWZpbmUgPSByZWZpbmU7XHJcblxyXG4gICAgICAgIGlmICggISF0aGlzLl91c2UgJiYgdGhpcy5fdXNlLmxlbmd0aCApIHsvLyBpZiB0aGVyZSBpbml0aWFsIHdhdGNocyBhbnl3YXlcclxuICAgICAgICAgICAgdGhpcy5wdWxsKHRoaXMuX3VzZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIGluaXRpYWxTdGF0ZSApIHsvLyBzeW5jIHJlZmluZVxyXG4gICAgICAgICAgICB0aGlzLnN0YXRlID0gey4uLmluaXRpYWxTdGF0ZX07XHJcbiAgICAgICAgICAgIGlmICggdGhpcy5pc0NvbXBsZXRlKCkgJiYgdGhpcy5kYXRhcyA9PT0gdW5kZWZpbmVkIClcclxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YXMgPSB0aGlzLnJlZmluZSh0aGlzLmRhdGFzLCB0aGlzLnN0YXRlLCB0aGlzLnN0YXRlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fc3RhYmxlID0gdGhpcy5kYXRhcyAhPT0gdW5kZWZpbmVkOy8vIHN0YWJsZSBpZiBpdCBoYXZlIGluaXRpYWwgcmVzdWx0IGRhdGFzXHJcbiAgICAgICAgIXRoaXMuX3N0YWJsZSAmJiB0aGlzLmVtaXQoJ3Vuc3RhYmxlJywgdGhpcy5zdGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBPdmVycmlkYWJsZSBtZXRob2QgdG8ga25vdyBpZiBhIHN0YXRlIGNoYW5nZSBzaG91bGQgYmUgcHJvcGFnIHRvIHRoZSBsaXN0ZW5pbmcgc3RvcmVzICYgY29tcG9uZW50c1xyXG4gICAgICogSWYgc3RhdGljIGZvbGxvdyBpcyBkZWZpbmVkLCBzaG91bGRQcm9wYWcgd2lsbCByZXR1cm4gdHJ1ZSBpZiBhbnkgb2YgdGhlIFwiZm9sbG93XCIga2V5cyB3YXMgdXBkYXRlZFxyXG4gICAgICogSWYgbm90IGl0IHdpbGwgYWx3YXlzIHJldHVybiB0cnVlXHJcbiAgICAgKi9cclxuICAgIHNob3VsZFByb3BhZyggbkRhdGFzICkge1xyXG4gICAgICAgIHZhciBfc3RhdGljID0gdGhpcy5jb25zdHJ1Y3RvciwgcixcclxuICAgICAgICAgICAgY0RhdGFzICA9IHRoaXMuZGF0YXM7XHJcblxyXG4gICAgICAgIC8vIGlmICggIWNTdGF0ZSApXHJcbiAgICAgICAgLy8gICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIGlmICggIWNEYXRhcyAmJiAoIV9zdGF0aWMuZm9sbG93IHx8ICFfc3RhdGljLmZvbGxvdy5sZW5ndGggfHxcclxuICAgICAgICAgICAgICAgIF9zdGF0aWMuZm9sbG93ICYmIF9zdGF0aWMuZm9sbG93LnJlZHVjZSgoIHIsIGkgKSA9PiAociB8fCBuRGF0YXMgJiYgbkRhdGFzW2ldKSwgZmFsc2UpKSApXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG5cclxuICAgICAgICBpZiAoIGlzQXJyYXkoX3N0YXRpYy5mb2xsb3cpIClcclxuICAgICAgICAgICAgX3N0YXRpYy5mb2xsb3cuZm9yRWFjaChcclxuICAgICAgICAgICAgICAgICgga2V5ICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHIgPSByIHx8IChuRGF0YXMgPyBjRGF0YXNba2V5XSAhPT0gbkRhdGFzW2tleV0gOiBjRGF0YXMgJiYgY0RhdGFzW2tleV0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgZWxzZSBpZiAoIF9zdGF0aWMuZm9sbG93ID09PSAnc3RyaWN0JyApXHJcbiAgICAgICAgICAgIHIgPSBuRGF0YXMgPT09IGNEYXRhcztcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY0RhdGFzICYmIE9iamVjdC5rZXlzKGNEYXRhcykuZm9yRWFjaChcclxuICAgICAgICAgICAgICAgICgga2V5ICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHIgPSByIHx8IChuRGF0YXMgPyBjRGF0YXNba2V5XSAhPT0gbkRhdGFzW2tleV0gOiBjRGF0YXMgJiYgY0RhdGFzW2tleV0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIG5EYXRhcyAmJiBPYmplY3Qua2V5cyhuRGF0YXMpLmZvckVhY2goXHJcbiAgICAgICAgICAgICAgICAoIGtleSApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByID0gciB8fCAobkRhdGFzID8gY0RhdGFzW2tleV0gIT09IG5EYXRhc1trZXldIDogY0RhdGFzICYmIGNEYXRhc1trZXldKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuICEhcjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE92ZXJyaWRhYmxlIHJlZmluZXIgLyByZW1hcHBlclxyXG4gICAgICogSWYgc3RhdGUgb3IgbGFzdFB1YmxpY1N0YXRlIGFyZSBzaW1wbGUgaGFzaCBtYXBzIHJlZmluZSB3aWxsIHJldHVybiB7Li4uZGF0YXMsIC4uLnN0YXRlfVxyXG4gICAgICogaWYgbm90IGl0IHdpbGwgcmV0dXJuIHRoZSBsYXN0IHByaXZhdGUgc3RhdGVcclxuICAgICAqIEBwYXJhbSBkYXRhc1xyXG4gICAgICogQHBhcmFtIHN0YXRlXHJcbiAgICAgKiBAcmV0dXJucyB7Kn1cclxuICAgICAqL1xyXG4gICAgcmVmaW5lKCBkYXRhcywgc3RhdGUsIGNoYW5nZXMgKSB7XHJcbiAgICAgICAgc3RhdGUgPSBzdGF0ZSB8fCB0aGlzLnN0YXRlO1xyXG5cclxuICAgICAgICBpZiAoICFkYXRhcyB8fCBkYXRhcy5fX3Byb3RvX18gIT09IG9ialByb3RvIHx8IHN0YXRlLl9fcHJvdG9fXyAhPT0gb2JqUHJvdG8gKVxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICByZXR1cm4gey4uLmRhdGFzLCAuLi5zdGF0ZX1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIERlYm91bmNlIHRoaXMgc3RvcmUgcHJvcGFnYXRpb24gKCAmIHJlZHVjaW5nIClcclxuICAgICAqIEBwYXJhbSBjYlxyXG4gICAgICovXHJcbiAgICBzdGFiaWxpemUoIGNiICkge1xyXG4gICAgICAgIHZhciBtZSA9IHRoaXM7XHJcbiAgICAgICAgY2IgJiYgbWUub25jZSgnc3RhYmxlJywgY2IpO1xyXG4gICAgICAgIHRoaXMuX3N0YWJsZSAmJiB0aGlzLmVtaXQoJ3Vuc3RhYmxlJywgdGhpcy5zdGF0ZSwgdGhpcy5kYXRhcyk7XHJcblxyXG4gICAgICAgIG1lLl9zdGFibGUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgaWYgKCB0aGlzLl9zdGFiaWxpemVyIClcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX3N0YWJpbGl6ZXIpO1xyXG5cclxuICAgICAgICB0aGlzLl9zdGFiaWxpemVyID0gc2V0VGltZW91dChcclxuICAgICAgICAgICAgdGhpcy5wdXNoLmJpbmQoXHJcbiAgICAgICAgICAgICAgICB0aGlzLFxyXG4gICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICgpID0+IHsvL0B0b2RvXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gbWUuX3N0YWJsZSAgICAgICA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc3RhYmlsaXplciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5yZWxlYXNlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICkpO1xyXG4gICAgfVxyXG5cclxuICAgIGRpc3BhdGNoKCBldmVudCApIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBQdWxsIHN0b3JlcyBpbiB0aGUgcHJpdmF0ZSBzdGF0ZVxyXG4gICAgICogQHBhcmFtIHN0b3JlcyAge0FycmF5fSAocGFzc2VkIHRvIFN0b3JlOjptYXApIEV4IDogW1wic2Vzc2lvblwiLCBcIm90aGVyTmFtZWRTdG9yZTprZXlcIiwgb3RoZXJTdG9yZS5hcyhcIm90aGVyS2V5XCIpXVxyXG4gICAgICovXHJcbiAgICBwdWxsKCBzdG9yZXMsIGRvV2FpdCwgb3JpZ2luICkge1xyXG4gICAgICAgIGxldCBpbml0aWFsT3V0cHV0cyA9IFN0b3JlLm1hcCh0aGlzLCBzdG9yZXMsIHRoaXMuY29udGV4dE9iaiwgb3JpZ2luLCB0cnVlKTtcclxuICAgICAgICBpZiAoIGRvV2FpdCApIHtcclxuICAgICAgICAgICAgdGhpcy53YWl0KCk7XHJcbiAgICAgICAgICAgIHN0b3Jlcy5mb3JFYWNoKCggcyApID0+IHRoaXMuY29udGV4dFtzXSAmJiB0aGlzLndhaXQodGhpcy5jb250ZXh0W3NdKSk7XHJcbiAgICAgICAgICAgIHRoaXMucmVsZWFzZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaW5pdGlhbE91dHB1dHM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBcHBseSByZWZpbmUvcmVtYXAgb24gdGhlIHByaXZhdGUgc3RhdGUgJiBwdXNoIHRoZSByZXN1bHRpbmcgXCJwdWJsaWNcIiBzdGF0ZSB0byBmb2xsb3dlcnNcclxuICAgICAqIEBwYXJhbSBjYlxyXG4gICAgICovXHJcbiAgICBwdXNoKCBkYXRhcywgZm9yY2UsIGNiICkge1xyXG4gICAgICAgIGNiICAgICAgICAgICAgPSBmb3JjZSA9PT0gdHJ1ZSA/IGNiIDogZm9yY2U7XHJcbiAgICAgICAgZm9yY2UgICAgICAgICA9IGZvcmNlID09PSB0cnVlO1xyXG4gICAgICAgIHZhciBpICAgICAgICAgPSAwLFxyXG4gICAgICAgICAgICBtZSAgICAgICAgPSB0aGlzLFxyXG4gICAgICAgICAgICBuZXh0U3RhdGUgPSAhZGF0YXMgJiYgey4uLnRoaXMuc3RhdGUsIC4uLnRoaXMuX2NoYW5nZXNTV30gfHwgdGhpcy5zdGF0ZSxcclxuICAgICAgICAgICAgbmV4dERhdGFzID0gZGF0YXMgfHxcclxuICAgICAgICAgICAgICAgICh0aGlzLmlzQ29tcGxldGUobmV4dFN0YXRlKSA/IHRoaXMucmVmaW5lKHRoaXMuZGF0YXMsIG5leHRTdGF0ZSwgdGhpcy5fY2hhbmdlc1NXKSA6IHRoaXMuZGF0YXMpO1xyXG5cclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IG5leHRTdGF0ZTtcclxuICAgICAgICBpZiAoICFmb3JjZSAmJlxyXG4gICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICAoIXRoaXMuZGF0YXMgJiYgdGhpcy5kYXRhcyA9PT0gbmV4dERhdGFzKSB8fCAhdGhpcy5zaG91bGRQcm9wYWcobmV4dERhdGFzKVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGNiICYmIGNiKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZGF0YXMgPSBuZXh0RGF0YXM7XHJcbiAgICAgICAgdGhpcy5sb2NrcysrO1xyXG4gICAgICAgIHRoaXMucmVsZWFzZShjYik7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVXBkYXRlIHRoZSBjdXJyZW50IHByaXZhdGUgc3RhdGUgJiBwdXNoIGl0IG9uY2UgdGhlIHN0b3JlIGlzIHN0YWJsZVxyXG4gICAgICogQHBhcmFtIHBTdGF0ZVxyXG4gICAgICogQHBhcmFtIGNiXHJcbiAgICAgKi9cclxuICAgIHNldFN0YXRlKCBwU3RhdGUsIGNiLCBzeW5jICkge1xyXG4gICAgICAgIHZhciBpICAgICAgID0gMCwgY2hhbmdlLFxyXG4gICAgICAgICAgICBjaGFuZ2VzID0gdGhpcy5fY2hhbmdlc1NXID0gdGhpcy5fY2hhbmdlc1NXIHx8IHt9O1xyXG4gICAgICAgIGZvciAoIHZhciBrIGluIHBTdGF0ZSApXHJcbiAgICAgICAgICAgIGlmICggIXRoaXMuc3RhdGUgfHwgcFN0YXRlLmhhc093blByb3BlcnR5KGspXHJcbiAgICAgICAgICAgICAgICAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgcFN0YXRlW2tdICE9IHRoaXMuc3RhdGVba11cclxuICAgICAgICAgICAgICAgICAgICB8fFxyXG4gICAgICAgICAgICAgICAgICAgICh0aGlzLnN0YXRlW2tdICYmIHBTdGF0ZVtrXSAmJiAocFN0YXRlW2tdLl9yZXYgIT0gdGhpcy5fcmV2c1trXSkpLy8gcmV2L2hhc2ggdXBkYXRlXHJcbiAgICAgICAgICAgICAgICApICkge1xyXG4gICAgICAgICAgICAgICAgY2hhbmdlICAgICAgICA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yZXZzW2tdID0gcFN0YXRlW2tdICYmIHBTdGF0ZVtrXS5fcmV2IHx8IHRydWU7XHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VzW2tdICAgID0gcFN0YXRlW2tdO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICggc3luYyApIHtcclxuICAgICAgICAgICAgdGhpcy5wdXNoKCk7XHJcbiAgICAgICAgICAgIGNiICYmIGNiKCk7XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICggY2hhbmdlICkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGFiaWxpemUoY2IpO1xyXG4gICAgICAgICAgICB9IGVsc2UgY2IgJiYgY2IoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBVcGRhdGUgdGhlIGN1cnJlbnQgcHJpdmF0ZSBzdGF0ZSAmIHB1c2ggaXQgb25jZSB0aGUgc3RvcmUgaXMgc3RhYmxlXHJcbiAgICAgKiBAcGFyYW0gcFN0YXRlXHJcbiAgICAgKiBAcGFyYW0gY2JcclxuICAgICAqL1xyXG4gICAgc2V0U3RhdGVTeW5jKCBwU3RhdGUgKSB7XHJcbiAgICAgICAgdmFyIGkgICAgICAgPSAwLCBjaGFuZ2UsXHJcbiAgICAgICAgICAgIGNoYW5nZXMgPSB0aGlzLl9jaGFuZ2VzU1cgPSB0aGlzLl9jaGFuZ2VzU1cgfHwge307XHJcbiAgICAgICAgZm9yICggdmFyIGsgaW4gcFN0YXRlIClcclxuICAgICAgICAgICAgaWYgKCAhdGhpcy5zdGF0ZSB8fCBwU3RhdGUuaGFzT3duUHJvcGVydHkoaylcclxuICAgICAgICAgICAgICAgICYmIChcclxuICAgICAgICAgICAgICAgICAgICBwU3RhdGVba10gIT0gdGhpcy5zdGF0ZVtrXVxyXG4gICAgICAgICAgICAgICAgICAgIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgKHRoaXMuc3RhdGVba10gJiYgcFN0YXRlW2tdICYmIChwU3RhdGVba10uX3JldiAhPSB0aGlzLl9yZXZzW2tdKSkvLyByZXYvaGFzaCB1cGRhdGVcclxuICAgICAgICAgICAgICAgICkgKSB7XHJcbiAgICAgICAgICAgICAgICBjaGFuZ2UgICAgICAgID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3JldnNba10gPSBwU3RhdGVba10gJiYgcFN0YXRlW2tdLl9yZXYgfHwgdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGNoYW5nZXNba10gICAgPSBwU3RhdGVba107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB0aGlzLnB1c2goKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5kYXRhcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlcGxhY2UgdGhlIGN1cnJlbnQgcHJpdmF0ZSBzdGF0ZSAmIHB1c2ggaXQgb25jZSB0aGUgc3RvcmUgaXMgc3RhYmxlXHJcbiAgICAgKiBAcGFyYW0gcFN0YXRlXHJcbiAgICAgKiBAcGFyYW0gY2JcclxuICAgICAqL1xyXG4gICAgcmVwbGFjZVN0YXRlKCBwU3RhdGUsIGNiICkge1xyXG4gICAgICAgIHZhciBpICAgICAgPSAwLCBtZSA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHBTdGF0ZTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGFiaWxpemUoY2IpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogZ2V0IGEgc3RvcmUta2V5IHBhaXIgZm9yIFN0b3JlOjptYXBcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXHJcbiAgICAgKiBAcmV0dXJucyB7e3N0b3JlOiBTdG9yZSwgbmFtZTogKn19XHJcbiAgICAgKi9cclxuICAgIGFzKCBuYW1lICkge1xyXG4gICAgICAgIHJldHVybiB7c3RvcmUgOiB0aGlzLCBuYW1lfTtcclxuICAgIH1cclxuXHJcbiAgICBvbiggbGlzdHMgKSB7XHJcbiAgICAgICAgaWYgKCAhaXNTdHJpbmcobGlzdHMpICYmIGxpc3RzIClcclxuICAgICAgICAgICAgT2JqZWN0LmtleXMobGlzdHMpLmZvckVhY2goayA9PiBzdXBlci5vbihrLCBsaXN0c1trXSkpO1xyXG4gICAgICAgIGVsc2Ugc3VwZXIub24oLi4uYXJndW1lbnRzKTtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVMaXN0ZW5lciggbGlzdHMgKSB7XHJcbiAgICAgICAgaWYgKCAhaXNTdHJpbmcobGlzdHMpICYmIGxpc3RzIClcclxuICAgICAgICAgICAgT2JqZWN0LmtleXMobGlzdHMpLmZvckVhY2goayA9PiBzdXBlci5yZW1vdmVMaXN0ZW5lcihrLCBsaXN0c1trXSkpO1xyXG4gICAgICAgIGVsc2Ugc3VwZXIucmVtb3ZlTGlzdGVuZXIoLi4uYXJndW1lbnRzKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHJlbGluayBiaW5kaW5ncyAmIHJlcXVpcmVzXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxyXG4gICAgICogQHJldHVybnMge3tzdG9yZTogU3RvcmUsIG5hbWU6ICp9fVxyXG4gICAgICovXHJcbiAgICByZWxpbmsoIGZyb20gKSB7XHJcbiAgICAgICAgbGV0IGNvbnRleHQgPSB0aGlzLmNvbnRleHRPYmosXHJcbiAgICAgICAgICAgIF9zdGF0aWMgPSB0aGlzLmNvbnN0cnVjdG9yO1xyXG4gICAgICAgIGlmICggX3N0YXRpYy51c2UgKSB7XHJcbiAgICAgICAgICAgIC8vdG9kbyB1bmxpbmtcclxuICAgICAgICAgICAgdGhpcy5wdWxsKF9zdGF0aWMudXNlLCBmYWxzZSwgZnJvbSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIHRoaXMuX3JlcXVpcmUgKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3JlcXVpcmUuZm9yRWFjaChcclxuICAgICAgICAgICAgICAgIHN0b3JlID0+IChcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLndhaXQoY29udGV4dC5fX2NvbnRleHRbc3RvcmVdKVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGlzIGNvbXBsZXRlIChhbGwgcmVxdWllcmVkIGtleXMgYXJlIGhlcmUpXHJcbiAgICAgKiBAcmV0dXJucyBib29sXHJcbiAgICAgKi9cclxuICAgIGlzQ29tcGxldGUoIHN0YXRlID0gdGhpcy5zdGF0ZSApIHtcclxuICAgICAgICB2YXIgX3N0YXRpYyA9IHRoaXMuY29uc3RydWN0b3I7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgIXRoaXMuX3JlcXVpcmVcclxuICAgICAgICAgICAgfHwgIXRoaXMuX3JlcXVpcmUubGVuZ3RoXHJcbiAgICAgICAgICAgIHx8IHN0YXRlICYmIHRoaXMuX3JlcXVpcmUucmVkdWNlKFxyXG4gICAgICAgICAgICAgICAgKCByLCBrZXkgKSA9PiAociAmJiBzdGF0ZVtrZXldKSxcclxuICAgICAgICAgICAgICAgIHRydWVcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBpcyBzdGFibGVcclxuICAgICAqIEByZXR1cm5zIGJvb2xcclxuICAgICAqL1xyXG4gICAgaXNTdGFibGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0YWJsZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFVuIGJpbmQgdGhpcyBzdG9yZSBvZmYgdGhlIGdpdmVuIGNvbXBvbmVudC1rZXlcclxuICAgICAqIEBwYXJhbSBvYmpcclxuICAgICAqIEBwYXJhbSBrZXlcclxuICAgICAqIEByZXR1cm5zIHtBcnJheS48Kj59XHJcbiAgICAgKi9cclxuICAgIHVuQmluZCggb2JqLCBrZXkgKSB7XHJcbiAgICAgICAgdmFyIGZvbGxvd2VycyA9IHRoaXMuX2ZvbGxvd2VycyxcclxuICAgICAgICAgICAgaSAgICAgICAgID0gZm9sbG93ZXJzICYmIGZvbGxvd2Vycy5sZW5ndGg7XHJcbiAgICAgICAgd2hpbGUgKGZvbGxvd2VycyAmJiBpLS0pXHJcbiAgICAgICAgICAgIGlmICggZm9sbG93ZXJzW2ldWzBdID09IG9iaiAmJiBmb2xsb3dlcnNbaV1bMV0gPT0ga2V5IClcclxuICAgICAgICAgICAgICAgIHJldHVybiBmb2xsb3dlcnMuc3BsaWNlKGksIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQmluZCB0aGlzIHN0b3JlIGNoYW5nZXMgdG8gdGhlIGdpdmVuIGNvbXBvbmVudC1rZXlcclxuICAgICAqIEBwYXJhbSBvYmoge1JlYWN0LkNvbXBvbmVudHxTdG9yZXxmdW5jdGlvbilcclxuICAgICAqIEBwYXJhbSBrZXkge3N0cmluZ30gb3B0aW9uYWwga2V5IHdoZXJlIHRvIG1hcCB0aGUgcHVibGljIHN0YXRlXHJcbiAgICAgKi9cclxuICAgIGJpbmQoIG9iaiwga2V5LCBzZXRJbml0aWFsID0gdHJ1ZSApIHtcclxuICAgICAgICB0aGlzLl9mb2xsb3dlcnMucHVzaChbb2JqLCBrZXldKTtcclxuICAgICAgICBpZiAoIHNldEluaXRpYWwgJiYgdGhpcy5kYXRhcyAmJiB0aGlzLl9zdGFibGUgKSB7XHJcbiAgICAgICAgICAgIGlmICggdHlwZW9mIG9iaiAhPSBcImZ1bmN0aW9uXCIgKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIGtleSApIG9iai5zZXRTdGF0ZSh7W2tleV0gOiB0aGlzLmRhdGFzfSk7XHJcbiAgICAgICAgICAgICAgICBlbHNlIG9iai5zZXRTdGF0ZSh0aGlzLmRhdGFzKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG9iaih0aGlzLmRhdGFzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIG9uY2UoJ3N0YWJsZScsIGNiKVxyXG4gICAgICogQHBhcmFtIG9iaiB7UmVhY3QuQ29tcG9uZW50fFN0b3JlfGZ1bmN0aW9uKVxyXG4gICAgICogQHBhcmFtIGtleSB7c3RyaW5nfSBvcHRpb25hbCBrZXkgd2hlcmUgdG8gbWFwIHRoZSBwdWJsaWMgc3RhdGVcclxuICAgICAqL1xyXG4gICAgdGhlbiggY2IgKSB7XHJcbiAgICAgICAgaWYgKCB0aGlzLl9zdGFibGUgKVxyXG4gICAgICAgICAgICByZXR1cm4gY2IobnVsbCwgdGhpcy5kYXRhcyk7XHJcbiAgICAgICAgdGhpcy5vbmNlKCdzdGFibGUnLCBlID0+IGNiKG51bGwsIHRoaXMuZGF0YXMpKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFkZCBhIGxvY2sgc28gdGhlIHN0b3JlIHdpbGwgbm90IHByb3BhZyBpdCBzdGF0ZSB1bnRpbGwgcmVsZWFzZSgpIGlzIGNhbGxcclxuICAgICAqIEBwYXJhbSBwcmV2aW91cyB7U3RvcmV8bnVtYmVyfEFycmF5fSBAb3B0aW9uYWwgd2YgdG8gd2FpdCwgcmVsZWFzZXMgdG8gd2FpdCBvciBhcnJheSBvZiBzdHVmZiB0byB3YWl0XHJcbiAgICAgKiBAcmV0dXJucyB7VGFza0Zsb3d9XHJcbiAgICAgKi9cclxuICAgIHdhaXQoIHByZXZpb3VzICkge1xyXG4gICAgICAgIGlmICggdHlwZW9mIHByZXZpb3VzID09IFwibnVtYmVyXCIgKVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5sb2NrcyArPSBwcmV2aW91cztcclxuICAgICAgICBpZiAoIGlzQXJyYXkocHJldmlvdXMpIClcclxuICAgICAgICAgICAgcmV0dXJuIHByZXZpb3VzLm1hcCh0aGlzLndhaXQuYmluZCh0aGlzKSk7XHJcblxyXG4gICAgICAgIHRoaXMuX3N0YWJsZSAmJiB0aGlzLmVtaXQoJ3Vuc3RhYmxlJywgdGhpcy5zdGF0ZSwgdGhpcy5kYXRhcyk7XHJcbiAgICAgICAgdGhpcy5fc3RhYmxlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5sb2NrcysrO1xyXG4gICAgICAgIGlmICggcHJldmlvdXMgJiYgaXNGdW5jdGlvbihwcmV2aW91cy50aGVuKSApIHtcclxuICAgICAgICAgICAgcHJldmlvdXMudGhlbih0aGlzLnJlbGVhc2UuYmluZCh0aGlzLCBudWxsKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVjcmVhc2UgbG9ja3MgZm9yIHRoaXMgc3RvcmUsIGlmIGl0IHJlYWNoIDAgJiBpdCBoYXZlIGEgcHVibGljIHN0YXRlLFxyXG4gICAgICogaXQgd2lsbCBiZSBwcm9wYWdhdGVkIHRvIHRoZSBmb2xsb3dlcnMsXHJcbiAgICAgKiB0aGVuLCBhbGwgc3R1ZmYgcGFzc2VkIHRvIFwidGhlblwiIGNhbGwgYmFjayB3aWxsIGJlIGV4ZWMgLyByZWxlYXNlZFxyXG4gICAgICogQHBhcmFtIGRlc3luY1xyXG4gICAgICogQHJldHVybnMgeyp9XHJcbiAgICAgKi9cclxuICAgIHJlbGVhc2UoIGNiICkge1xyXG4gICAgICAgIHZhciBfc3RhdGljID0gdGhpcy5jb25zdHJ1Y3RvcjtcclxuICAgICAgICBsZXQgaSAgICAgICA9IDA7XHJcblxyXG4gICAgICAgIGlmICggIS0tdGhpcy5sb2NrcyAmJiB0aGlzLmRhdGFzICYmIHRoaXMuaXNDb21wbGV0ZSgpICkge1xyXG4gICAgICAgICAgICB0aGlzLl9zdGFibGUgPSB0cnVlO1xyXG5cclxuXHJcbiAgICAgICAgICAgIHRoaXMuX3JldiA9IDEgKyAodGhpcy5fcmV2ICsgMSkgJSAxMDAwMDAwOy8vXHJcbiAgICAgICAgICAgIGlmICggdGhpcy5fZm9sbG93ZXJzLmxlbmd0aCApXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9mb2xsb3dlcnMuZm9yRWFjaCgoIGZvbGxvd2VyICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICggIXRoaXMuZGF0YXMgKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCB0eXBlb2YgZm9sbG93ZXJbMF0gPT0gXCJmdW5jdGlvblwiICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb2xsb3dlclswXSh0aGlzLmRhdGFzKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjYiAmJiBpKys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbGxvd2VyWzBdLnNldFN0YXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGZvbGxvd2VyWzFdKSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7W2ZvbGxvd2VyWzFdXSA6IHRoaXMuZGF0YXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2IgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICgpID0+ICghKC0taSkgJiYgY2IoKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZW1pdCgnc3RhYmxlJywgdGhpcy5kYXRhcyk7XHJcbiAgICAgICAgICAgIHRoaXMuZW1pdCgndXBkYXRlJywgdGhpcy5kYXRhcyk7XHJcbiAgICAgICAgICAgIGNiICYmIGNiKClcclxuICAgICAgICB9IGVsc2UgY2IgJiYgdGhpcy50aGVuKGNiKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBkZXN0cm95KCkge1xyXG5cclxuICAgICAgICB0aGlzLmVtaXQoJ2Rlc3Ryb3knLCB0aGlzKTtcclxuICAgICAgICBpZiAoIHRoaXMuX3N0YWJpbGl6ZXIgKVxyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5fc3RhYmlsaXplcik7XHJcbiAgICAgICAgdGhpcy5fZm9sbG93ZXJzLmxlbmd0aCA9IDA7XHJcbiAgICAgICAgdGhpcy5kZWFkICAgICAgICAgICAgICA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5fcmV2cyAgICAgICAgICAgICA9IHRoaXMuZGF0YXMgPSB0aGlzLnN0YXRlID0gdGhpcy5jb250ZXh0ID0gbnVsbDtcclxuICAgICAgICB0aGlzLnJlbW92ZUFsbExpc3RlbmVycygpO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1N0b3JlLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==