/*!
 * MIT License
 * 
 * Copyright (c) 2018 Wise Wild Web
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
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
	
	var _Scope = __webpack_require__(1);
	
	var _Scope2 = _interopRequireDefault(_Scope);
	
	var _Store = __webpack_require__(5);
	
	var _Store2 = _interopRequireDefault(_Store);
	
	var _ReactTools = __webpack_require__(6);
	
	var RTools = _interopRequireWildcard(_ReactTools);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_Scope2.default.Store = _Store2.default; /*
	                                          * Copyright (c)  2018 Wise Wild Web .
	                                          *
	                                          *  MIT License
	                                          *
	                                          *  Permission is hereby granted, free of charge, to any person obtaining a copy
	                                          *  of this software and associated documentation files (the "Software"), to deal
	                                          *  in the Software without restriction, including without limitation the rights
	                                          *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	                                          *  copies of the Software, and to permit persons to whom the Software is
	                                          *  furnished to do so, subject to the following conditions:
	                                          *
	                                          *  The above copyright notice and this permission notice shall be included in all
	                                          *  copies or substantial portions of the Software.
	                                          *
	                                          *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	                                          *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	                                          *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	                                          *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	                                          *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	                                          *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	                                          *  SOFTWARE.
	                                          *
	                                          * @author : Nathanael Braun
	                                          * @contact : caipilabs@gmail.com
	                                          */
	
	exports.default = {
	  Store: _Store2.default,
	  Context: _Scope2.default,
	  Scope: _Scope2.default,
	  Component: RTools.Component,
	  reScopeProps: RTools.reScopeProps,
	  reScopeState: RTools.reScopeState,
	  withScope: RTools.reScopeState
	};
	module.exports = exports["default"];

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _class, _temp;
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/*
	 * Copyright (c)  2018 Wise Wild Web .
	 *
	 *  MIT License
	 *
	 *  Permission is hereby granted, free of charge, to any person obtaining a copy
	 *  of this software and associated documentation files (the "Software"), to deal
	 *  in the Software without restriction, including without limitation the rights
	 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	 *  copies of the Software, and to permit persons to whom the Software is
	 *  furnished to do so, subject to the following conditions:
	 *
	 *  The above copyright notice and this permission notice shall be included in all
	 *  copies or substantial portions of the Software.
	 *
	 *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	 *  SOFTWARE.
	 *
	 * @author : Nathanael Braun
	 * @contact : caipilabs@gmail.com
	 */
	
	var is = __webpack_require__(2),
	    EventEmitter = __webpack_require__(3),
	    shortid = __webpack_require__(4),
	    __proto__push = function __proto__push(target, id, parent) {
	    var fn = function fn() {};
	    fn.prototype = parent ? new parent["_" + id]() : target[id] || {};
	    target[id] = new fn();
	    target['_' + id] = fn;
	},
	    openScopes = {};
	
	var Scope = (_temp = _class = function (_EventEmitter) {
	    _inherits(Scope, _EventEmitter);
	
	    _createClass(Scope, null, [{
	        key: 'getScope',
	        // all active scopes
	
	        // if > 0, will wait 'persistenceTm' ms before destroy when dispose reach 0
	        value: function getScope(scopes) {
	            var skey = is.array(scopes) ? scopes.sort(function (a, b) {
	                if (a.firstname < b.firstname) return -1;
	                if (a.firstname > b.firstname) return 1;
	                return 0;
	            }).join('::') : scopes;
	            return openScopes[skey] = openScopes[skey] || new Scope({}, { id: skey });
	        }
	    }]);
	
	    /**
	     * Init a Rescope scope
	     *
	     * @param storesMap {Object} Object with the origin stores
	     * @param id {string} @optional id ( if this id exist storesMap will be merge on the 'id' scope)
	     * @param parent
	     * @param state
	     * @param data
	     * @param name
	     * @param defaultMaxListeners
	     * @param persistenceTm {number) if > 0, will wait 'persistenceTm' ms before destroy when dispose reach 0
	     * @param autoDestroy  {bool} will trigger retain & dispose after start
	     * @returns {Scope}
	     */
	    function Scope(storesMap) {
	        var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
	            id = _ref.id,
	            parent = _ref.parent,
	            state = _ref.state,
	            data = _ref.data,
	            name = _ref.name,
	            incrementId = _ref.incrementId,
	            defaultMaxListeners = _ref.defaultMaxListeners,
	            persistenceTm = _ref.persistenceTm,
	            autoDestroy = _ref.autoDestroy,
	            rootEmitter = _ref.rootEmitter;
	
	        _classCallCheck(this, Scope);
	
	        var _this = _possibleConstructorReturn(this, (Scope.__proto__ || Object.getPrototypeOf(Scope)).call(this));
	
	        _this._maxListeners = defaultMaxListeners || _this.constructor.defaultMaxListeners;
	        id = id || "_____" + shortid.generate();
	        if (openScopes[id] && !incrementId) {
	            var _ret;
	
	            _this._id = id;
	            openScopes[id].register(storesMap);
	            return _ret = openScopes[id], _possibleConstructorReturn(_this, _ret);
	        } else if (openScopes[id] && incrementId) {
	            var i = -1;
	            while (openScopes[id + '/' + ++i]) {}
	            id = id + '/' + i;
	        }
	
	        _this._id = id;
	        openScopes[id] = _this;
	        _this._isLocalId = true;
	        _this._persistenceTm = persistenceTm || _this.constructor.persistenceTm;
	
	        _this.stores = {};
	        _this.state = {};
	        _this.data = {};
	
	        if (parent && parent.dead) throw new Error("Can't use a dead scope as parent !");
	
	        __proto__push(_this, 'stores', parent);
	        __proto__push(_this, 'state', parent);
	        __proto__push(_this, 'data', parent);
	        _this.parent = parent;
	
	        _this.sources = [];
	        _this._childScopes = [];
	        _this._childScopesList = [];
	        _this._unStableChilds = 0;
	
	        _this.__retains = { all: 0 };
	        _this.__locks = { all: 1 };
	        _this.__listening = {};
	        _this.__scope = {};
	        _this.__mixed = [];
	        _this.__mixedList = [];
	        _this._followers = [];
	        if (parent) {
	            parent.retain("isMyParent");
	            if (!rootEmitter) {
	                !parent._stable && _this.wait("waitingParent");
	                parent.on(_this.__parentList = {
	                    'stable': function stable(s) {
	                        return _this.release("waitingParent");
	                    },
	                    'unstable': function unstable(s) {
	                        return _this.wait("waitingParent");
	                    },
	                    'update': function update(s) {
	                        return _this._propag();
	                    }
	                });
	            } else {
	                parent.on(_this.__parentList = {
	                    'update': function update(s) {
	                        return _this._propag();
	                    }
	                });
	            }
	            // this.register(parent.__scope, state, data);
	        }
	
	        _this.register(storesMap, state, data);
	        _this.__locks.all--;
	        _this._stable = !_this.__locks.all;
	
	        if (parent) {
	            parent._addChild(_this);
	        }
	        if (autoDestroy) setTimeout(function (tm) {
	            _this.retain("autoDestroy");
	            _this.dispose("autoDestroy");
	        });
	        return _this;
	    }
	
	    /**
	     * @deprecated
	     * @returns {*}
	     */
	
	
	    _createClass(Scope, [{
	        key: 'mount',
	
	
	        /**
	         *
	         * Mount the stores in storesList, in this scope or in its parents or mixed scopes
	         *
	         * @param storesList {string|storeRef} Store name, Array of Store names, or Rescope store ref from Store::as or
	         *     Store:as
	         * @param state
	         * @param data
	         * @returns {Scope}
	         */
	        value: function mount(storesList, state, data) {
	            var _this2 = this;
	
	            if (is.array(storesList)) {
	                storesList.forEach(function (k) {
	                    return _this2._mount(k, state && state[k], data && data[k]);
	                });
	            } else {
	                this._mount.apply(this, arguments);
	            }
	            return this;
	        }
	    }, {
	        key: '_mount',
	        value: function _mount(id, state, data) {
	            if (typeof id !== 'string') {
	                this.register(_defineProperty({}, id.name, id.store));
	                id = id.name;
	            }
	
	            if (!this.__scope[id]) {
	                var _parent;
	
	                //ask mixed || parent
	                if (this.__mixed.reduce(function (mounted, ctx) {
	                    return mounted || ctx._mount(id, state, data);
	                }, false) || !this.parent) return;
	                return (_parent = this.parent)._mount.apply(_parent, arguments);
	            }
	            var store = this.__scope[id],
	                ctx = void 0;
	            if (is.fn(store)) {
	                this.__scope[id] = new store(this, { state: state, data: data });
	            } else {
	                if (state !== undefined && data === undefined) store.setState(state);else if (state !== undefined) store.state = state;
	
	                if (data !== undefined) store.push(data);
	            }
	
	            this._watchStore(id);
	
	            return this.__scope[id];
	        }
	    }, {
	        key: '_watchStore',
	        value: function _watchStore(id, state, data) {
	            var _this3 = this;
	
	            if (!this.__scope[id]) {
	                var _parent2;
	
	                //ask mixed || parent
	                if (this.__mixed.reduce(function (mounted, ctx) {
	                    return mounted || ctx._watchStore(id, state, data);
	                }, false) || !this.parent) return;
	                return (_parent2 = this.parent)._watchStore.apply(_parent2, arguments);
	            }
	            if (!this.__listening[id] && !is.fn(this.__scope[id])) {
	                this.__scope[id].retain("scoped");
	                !this.__scope[id].isStable() && this.wait(id);
	                this.__scope[id].on(this.__listening[id] = {
	                    'destroy': function destroy(s) {
	                        delete _this3.__listening[id];
	                        _this3.__scope[id] = _this3.__scope[id].constructor;
	                    },
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
	
	        /**
	         * Mix targetCtx on this scope
	         * Mixed scope parents are NOT mapped
	         * @param targetCtx
	         */
	
	    }, {
	        key: 'mixin',
	        value: function mixin(targetCtx) {
	            var _this4 = this;
	
	            var parent = this.parent,
	                lists = void 0;
	            this.__mixed.push(targetCtx);
	            targetCtx.retain("mixedTo");
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
	
	            this.stores = {};
	            this.state = {};
	            this.data = {};
	            targetCtx.on(lists);
	            __proto__push(this, 'stores', parent);
	            __proto__push(this, 'state', parent);
	            __proto__push(this, 'data', parent);
	
	            this.relink(this.__scope, this, false, true);
	            this.__mixed.forEach(function (ctx) {
	                __proto__push(_this4, 'stores');
	                __proto__push(_this4, 'state');
	                __proto__push(_this4, 'data');
	                ctx.relink(ctx.__scope, _this4, true, true);
	            });
	        }
	
	        /**
	         * Register stores in storesMap & link them in the protos
	         * @param storesMap
	         * @param state
	         * @param data
	         */
	
	    }, {
	        key: 'register',
	        value: function register(storesMap) {
	            var _this5 = this;
	
	            var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	            var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	
	            this.relink(storesMap, this, false, false);
	            Object.keys(storesMap).forEach(function (id) {
	                if (storesMap[id].singleton || is.fn(storesMap[id]) && (state[id] || data[id])) {
	                    _this5._mount(id, state[id], data[id]);
	                } else if (state[id] || data[id]) {
	                    if (data[id]) {
	                        if (state[id]) _this5.stores[id].state = state[id];
	                        _this5.stores[id].push(data[id]);
	                    } else if (state[id]) {
	                        _this5.stores[id].setState(state[id]);
	                    }
	                } else {
	                    _this5._watchStore(id);
	                }
	            });
	        }
	
	        /**
	         * Map srcCtx store's on targetCtx headers proto's
	         * @param srcCtx
	         * @param targetCtx
	         * @param state
	         * @param data
	         */
	
	    }, {
	        key: 'relink',
	        value: function relink(srcCtx) {
	            var targetCtx = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this;
	
	            var _this6 = this;
	
	            var external = arguments[2];
	            var force = arguments[3];
	
	            var lctx = targetCtx._stores.prototype;
	            Object.keys(srcCtx).forEach(function (id) {
	                if (!force && targetCtx.__scope[id] === srcCtx[id] || targetCtx.__scope[id] && targetCtx.__scope[id].constructor === srcCtx[id]) return;
	
	                if (!force && targetCtx.__scope[id]) {
	                    if (!external && !is.fn(targetCtx.__scope[id])) {
	                        console.info("Rescope Store : ", id, " already exist in this scope ! ( try __proto__ hot patch )");
	                        targetCtx.__scope[id].__proto__ = srcCtx[id].prototype;
	                    }
	                    if (!external && is.fn(targetCtx.__scope[id])) targetCtx.__scope[id] = srcCtx[id];
	
	                    return;
	                } else if (!force && !external) _this6.__scope[id] = srcCtx[id];
	
	                Object.defineProperty(lctx, id, {
	                    get: function get() {
	                        return _this6.__scope[id];
	                    }
	                });
	                Object.defineProperty(targetCtx._state.prototype, id, {
	                    get: function get() {
	                        return _this6.__scope[id] && _this6.__scope[id].state;
	                    },
	                    set: function set(v) {
	                        return _this6._mount(id, v);
	                    }
	                });
	                Object.defineProperty(targetCtx._data.prototype, id, {
	                    get: function get() {
	                        return _this6.__scope[id] && _this6.__scope[id].data;
	                    },
	                    set: function set(v) {
	                        return _this6._mount(id, undefined, v);
	                    }
	                });
	            });
	        }
	
	        /**
	         * Bind stores from this scope, his parents and mixed scope
	         *
	         * @param obj {React.Component|Store|function}
	         * @param key {string} stores keys to bind updates
	         * @param as
	         * @param setInitial {bool} false to not propag initial value (default : true)
	         */
	
	    }, {
	        key: 'bind',
	        value: function bind(obj, key, as) {
	            var setInitial = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
	
	            var lastRevs = void 0,
	                data = void 0,
	                reKey = void 0;
	            if (key && !is.array(key)) key = [key];
	
	            if (as === false || as === true) {
	                setInitial = as;
	                as = null;
	            }
	
	            reKey = key.map(function (id) {
	                return is.string(id) ? id : id.name;
	            });
	
	            this._followers.push([obj, key, as || undefined, lastRevs = reKey && reKey.reduce(function (revs, id) {
	                return revs[id] = 0, revs;
	            }, {})]);
	
	            this.mount(key);
	
	            if (setInitial && this._stable) {
	                data = this.getUpdates(lastRevs);
	                if (!data) return;
	                if (typeof obj != "function") {
	                    if (as) obj.setState(_defineProperty({}, as, data));else obj.setState(data);
	                } else {
	                    obj(data);
	                }
	            }
	            return this;
	        }
	
	        /**
	         * Un bind this scope off the given component-keys
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
	                if (followers[i][0] === obj && '' + followers[i][1] == '' + key && followers[i][2] == as) return followers.splice(i, 1);
	            }
	        }
	
	        /**
	         * Mount the stores in storesList from this scope, its parents and mixed scope
	         * Bind them to 'to'
	         * Hook 'to' so it will auto unbind on 'destroy' or 'componentWillUnmount'
	         * @param to
	         * @param storesList
	         * @param bind
	         * @returns {Object} Initial outputs of the stores in 'storesList'
	         */
	
	    }, {
	        key: 'map',
	        value: function map(to, storesList) {
	            var _this7 = this;
	
	            var bind = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
	
	            var Store = this.constructor.Store;
	            storesList = is.array(storesList) ? storesList : [storesList];
	            this.mount(storesList);
	            if (bind && to instanceof Store) {
	                Store.map(to, storesList, this, this, false);
	            } else if (bind) {
	                this.bind(to, storesList, undefined, false);
	
	                var mixedCWUnmount = void 0,
	                    unMountKey = to.isReactComponent ? "componentWillUnmount" : "destroy";
	
	                if (to.hasOwnProperty(unMountKey)) {
	                    mixedCWUnmount = to[unMountKey];
	                }
	
	                to[unMountKey] = function () {
	                    delete to[unMountKey];
	                    if (mixedCWUnmount) to[unMountKey] = mixedCWUnmount;
	
	                    _this7.unBind(to, storesList);
	                    return to[unMountKey] && to[unMountKey].apply(to, arguments);
	                };
	            }
	            return storesList.reduce(function (data, id) {
	                if (!is.string(id)) id = id.name;
	                id = id.split(':'); //@todo
	                id[0] = id[0].split('.');
	                data[id[1] || id[0][id[0].length - 1]] = _this7.stores[id[0][0]] && _this7.stores[id[0][0]].retrieve && _this7.stores[id[0][0]].retrieve(id[0].splice(1));
	                return data;
	            }, {});
	        }
	    }, {
	        key: 'retrieve',
	        value: function retrieve() {
	            var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
	
	            path = is.string(path) ? path.split('.') : path;
	            return path && this.stores[path[0]] && this.stores[path[0]].retrieve(path.splice(1));
	        }
	
	        /**
	         * Get or update storesRevMap's revisions
	         * @param storesRevMap
	         * @param local
	         * @returns {{}}
	         */
	
	    }, {
	        key: 'getStoresRevs',
	        value: function getStoresRevs() {
	            var storesRevMap = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	            var local = arguments[1];
	
	            var ctx = this.__scope;
	            if (!storesRevMap) {
	                storesRevMap = {};
	            }
	            Object.keys(ctx).forEach(function (id) {
	                if (!is.fn(ctx[id])) {
	                    storesRevMap[id] = ctx[id]._rev;
	                } else if (!storesRevMap.hasOwnProperty(id)) storesRevMap[id] = false;
	            });
	            if (!local) {
	                this.__mixed.reduce(function (updated, ctx) {
	                    return ctx.getStoresRevs(storesRevMap), storesRevMap;
	                }, storesRevMap);
	                this.parent && this.parent.getStoresRevs(storesRevMap);
	            }
	            return storesRevMap;
	        }
	
	        /**
	         * Get or update output basing storesRevMap's revisions.
	         * If a store in 'storesRevMap' is updated; add it to 'output'
	         * @param storesRevMap
	         * @param output
	         * @param updated
	         * @returns {*|{}}
	         */
	
	    }, {
	        key: 'getUpdates',
	        value: function getUpdates(storesRevMap, output, updated) {
	            var _this8 = this;
	
	            var ctx = this.__scope;
	
	            output = output || {};
	            Object.keys(ctx).forEach(function (id) {
	                if (!output.hasOwnProperty(id) && !is.fn(ctx[id]) && (!storesRevMap || storesRevMap.hasOwnProperty(id) && storesRevMap[id] === undefined || !(!storesRevMap.hasOwnProperty(id) || ctx[id]._rev <= storesRevMap[id]))) {
	
	                    updated = true;
	                    output[id] = _this8.data[id];
	                    if (storesRevMap && storesRevMap.hasOwnProperty(id)) storesRevMap[id] = ctx[id]._rev;
	                }
	            });
	            updated = this.__mixed.reduce(function (updated, ctx) {
	                return ctx.getUpdates(storesRevMap, output, updated) || updated;
	            }, updated);
	            updated = this.parent && this.parent.getUpdates(storesRevMap, output, updated) || updated;
	            return updated && output;
	        }
	
	        /**
	         *
	         * @param flags_states
	         * @param flags_data
	         * @returns {{state: {}, data: {}}}
	         */
	
	    }, {
	        key: 'serialize',
	        value: function serialize() {
	            var _this9 = this;
	
	            var flags_states = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : /.*/;
	            var flags_data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : /.*/;
	
	            var ctx = this.__scope,
	                output = { state: {}, data: {} },
	                _flags_states = void 0,
	                _flags_data = void 0;
	            if (is.array(flags_states)) flags_states.forEach(function (id) {
	                return output.state[id] = _this9.state[id];
	            });
	
	            if (is.array(flags_data)) flags_data.forEach(function (id) {
	                return output.data[id] = _this9.data[id];
	            });
	
	            if (!is.array(flags_data) && !is.array(flags_states)) Object.keys(ctx).forEach(function (id) {
	                if (is.fn(ctx[id])) return;
	
	                var flags = ctx[id].constructor.flags;
	
	                flags = is.array(flags) ? flags : [flags || ""];
	
	                if (flags.reduce(function (r, flag) {
	                    return r || flags_states.test(flag);
	                }, false)) output.state[id] = _this9.state[id];
	
	                if (flags.reduce(function (r, flag) {
	                    return r || flags_data.test(flag);
	                }, false)) output.data[id] = _this9.data[id];
	            });
	            return output;
	        }
	    }, {
	        key: 'dispatch',
	        value: function dispatch(action, data) {
	            var _this10 = this;
	
	            Object.keys(this.__scope).forEach(function (id) {
	                if (!is.fn(_this10.__scope[id])) _this10.__scope[id].trigger(action, data);
	            });
	
	            this.__mixed.forEach(function (ctx) {
	                return ctx.dispatch(action, data);
	            });
	            this.parent && this.parent.dispatch(action, data);
	            return this;
	        }
	
	        /**
	         * once('stable', cb)
	         * @param obj {React.Component|Store|function)
	         * @param key {string} optional key where to map the public state
	         */
	
	    }, {
	        key: 'then',
	        value: function then(cb) {
	            var _this11 = this;
	
	            if (this._stable) return cb(null, this.data);
	            this.once('stable', function (e) {
	                return cb(null, _this11.data);
	            });
	        }
	    }, {
	        key: 'restore',
	        value: function restore(_ref2, quiet) {
	            var state = _ref2.state,
	                data = _ref2.data;
	
	            var ctx = this.__scope;
	            Object.keys(data).forEach(function (id) {
	                quiet ? ctx.data = data[id] : ctx.push(data[id]);
	            });
	            Object.keys(state).forEach(function (id) {
	                quiet ? ctx.state = state[id] : ctx.setState(state[id]);
	            });
	        }
	    }, {
	        key: 'retainStores',
	        value: function retainStores() {
	            var _this12 = this;
	
	            var stores = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	            var reason = arguments[1];
	
	            stores.forEach(function (id) {
	                return _this12.stores[id] && _this12.stores[id].retain && _this12.stores[id].retain(reason);
	            });
	        }
	    }, {
	        key: 'disposeStores',
	        value: function disposeStores() {
	            var _this13 = this;
	
	            var stores = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	            var reason = arguments[1];
	
	            stores.forEach(function (id) {
	                return _this13.stores[id] && _this13.stores[id].dispose && _this13.stores[id].dispose(reason);
	            });
	        }
	    }, {
	        key: 'wait',
	        value: function wait(reason) {
	            //console.log("wait", reason);
	            this._stable && !this.__locks.all && this.emit("unstable", this);
	            this._stable = false;
	            this.__locks.all++;
	            if (reason) {
	                this.__locks[reason] = this.__locks[reason] || 0;
	                this.__locks[reason]++;
	            }
	        }
	    }, {
	        key: 'release',
	        value: function release(reason) {
	            var _this14 = this;
	
	            if (reason) {
	                if (this.__locks[reason] == 0) console.error("Release more than locking !", reason);
	                this.__locks[reason] = this.__locks[reason] || 0;
	                this.__locks[reason]--;
	            }
	            if (!reason && this.__locks.all == 0) console.error("Release more than locking !");
	
	            this.__locks.all--;
	            if (!this.__locks.all) {
	                this._stabilizerTM && clearTimeout(this._stabilizerTM);
	
	                this._stabilizerTM = setTimeout(function (e) {
	                    _this14._stabilizerTM = null;
	                    if (_this14.__locks.all) return;
	
	                    _this14._propagTM && clearTimeout(_this14._propagTM);
	
	                    _this14._stable = true;
	                    _this14.emit("stable", _this14);
	
	                    !_this14.dead && _this14._propag(); // stability can induce destroy
	                });
	            }
	        }
	    }, {
	        key: 'propag',
	        value: function propag() {
	            var _this15 = this;
	
	            this._propagTM && clearTimeout(this._propagTM);
	            this._propagTM = setTimeout(function (e) {
	                _this15._propagTM = null;
	                _this15._propag();
	            }, 2);
	        }
	    }, {
	        key: '_propag',
	        value: function _propag() {
	            var _this16 = this;
	
	            if (this._followers.length) this._followers.forEach(function (_ref3) {
	                var obj = _ref3[0],
	                    key = _ref3[1],
	                    as = _ref3[2],
	                    lastRevs = _ref3[3];
	
	                var data = _this16.getUpdates(lastRevs);
	                if (!data) return;
	                if (typeof obj != "function") {
	                    if (as) obj.setState(_defineProperty({}, as, data));else obj.setState(data);
	                } else {
	                    obj(data, lastRevs && [].concat(_toConsumableArray(lastRevs)) || "no revs");
	                }
	                // lastRevs &&
	                // key.forEach(id => (lastRevs[id] = this.stores[id] && this.stores[id]._rev || 0));
	            });
	            this.emit("update", this.getUpdates());
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
	
	        //serializeChilds( childs = [] ) {
	        //
	        //}
	
	    }, {
	        key: '_addChild',
	        value: function _addChild(ctx) {
	            var _this17 = this;
	
	            this._childScopes.push(ctx);
	            var lists = {
	                'stable': function stable(s) {
	                    _this17._unStableChilds--;
	                    if (!_this17._unStableChilds) _this17.emit("stableTree", _this17);
	                },
	                'unstable': function unstable(s) {
	                    _this17._unStableChilds++;
	                    if (1 == _this17._unStableChilds) _this17.emit("unstableTree", _this17);
	                },
	                'stableTree': function stableTree(s) {
	                    _this17._unStableChilds--;
	                    if (!_this17._unStableChilds) _this17.emit("stableTree", _this17);
	                },
	                'unstableTree': function unstableTree(s) {
	                    _this17._unStableChilds++;
	                    if (1 == _this17._unStableChilds) _this17.emit("unstableTree", _this17);
	                },
	                'destroy': function destroy(ctx) {
	                    if (ctx._unStableChilds) _this17._unStableChilds--;
	                    if (!ctx.isStable()) _this17._unStableChilds--;
	
	                    if (!_this17._unStableChilds) _this17.emit("stableTree", _this17);
	                }
	            },
	                wasStable = this._unStableChilds;
	            //!ctx.isStable() && console.warn('add unstable child');
	            !ctx.isStable() && this._unStableChilds++;
	            ctx._unStableChilds && this._unStableChilds++;
	            this._childScopesList.push(lists);
	            if (!wasStable && this._unStableChilds) this.emit("unstableTree", this);
	            ctx.on(lists);
	        }
	    }, {
	        key: '_rmChild',
	        value: function _rmChild(ctx) {
	            var i = this._childScopes.indexOf(ctx),
	                wasStable = this._unStableChilds;
	            if (i != -1) {
	                this._childScopes.splice(i, 1);
	                !ctx.isStable() && this._unStableChilds--;
	                ctx._unStableChilds && this._unStableChilds--;
	                ctx.un(this._childScopesList.splice(i, 1)[0]);
	                if (wasStable && !this._unStableChilds) this.emit("stableTree");
	            }
	        }
	    }, {
	        key: 'retain',
	        value: function retain(reason) {
	            this.__retains.all++;
	            //console.log("retain", this._id, reason);
	            if (reason) {
	                this.__retains[reason] = this.__retains[reason] || 0;
	                this.__retains[reason]++;
	            }
	        }
	    }, {
	        key: 'dispose',
	        value: function dispose(reason) {
	            var _this18 = this;
	
	            //console.log("dispose", this._id, reason);
	            if (reason) {
	                if (!this.__retains[reason]) throw new Error("Dispose more than retaining : " + reason);
	                this.__retains[reason]--;
	            }
	
	            if (!this.__retains.all) throw new Error("Dispose more than retaining !");
	
	            this.__retains.all--;
	
	            if (!this.__retains.all) {
	                //console.log("dispose do destroy ", this._id, this._persistenceTm);
	                if (this._persistenceTm) {
	                    this._destroyTM && clearTimeout(this._destroyTM);
	                    this._destroyTM = setTimeout(function (e) {
	                        _this18.then(function (s) {
	                            !_this18.__retains.all && _this18.destroy();
	                        });
	                    }, this._persistenceTm);
	                } else {
	                    this.then(function (s) {
	                        return !_this18.__retains.all && _this18.destroy();
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
	
	            var ctx = this.__scope;
	            //console.warn("destroy", this._id);
	            this.dead = true;
	            this.emit("destroy", this);
	            Object.keys(this.__listening).forEach(function (id) {
	                return _this19.__scope[id].removeListener(_this19.__listening[id]);
	            });
	
	            this._stabilizerTM && clearTimeout(this._stabilizerTM);
	            this._propagTM && clearTimeout(this._propagTM);
	            this.__listening = {};
	
	            if (this._isLocalId) delete openScopes[this._id];
	            this._followers.length = 0;
	
	            while (this.__mixedList.length) {
	                this.__mixed[0].removeListener(this.__mixedList.shift());
	                this.__mixed.shift().dispose("mixedTo");
	            }
	            if (this.__parentList) {
	                this.parent._rmChild(this);
	                this.parent.removeListener(this.__parentList);
	                this.parent.dispose("isMyParent");
	                this.__parentList = null;
	            }
	            for (var key in ctx) {
	                if (!is.fn(ctx[key])) {
	                    //if ( ctx[key].scopeObj === this )
	                    ctx[key].dispose("scoped");
	
	                    //ctx[key] = ctx[key].constructor;
	                }
	            }this.__mixed = this.data = this.state = this.scope = this.stores = null;
	            this._data = this._state = this._stores = null;
	        }
	    }, {
	        key: 'datas',
	        get: function get() {
	            return this.data;
	        }
	    }, {
	        key: 'displayName',
	        get: function get() {
	            return "Scope::" + this._id;
	        }
	    }]);
	
	    return Scope;
	}(EventEmitter), _class.persistenceTm = 1, _class.Store = null, _class.scopes = openScopes, _temp);
	exports.default = Scope;
	module.exports = exports['default'];

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = require("is");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/*
	 * Copyright (c)  2018 Wise Wild Web .
	 *
	 *  MIT License
	 *  
	 *  Permission is hereby granted, free of charge, to any person obtaining a copy
	 *  of this software and associated documentation files (the "Software"), to deal
	 *  in the Software without restriction, including without limitation the rights
	 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	 *  copies of the Software, and to permit persons to whom the Software is
	 *  furnished to do so, subject to the following conditions:
	 *  
	 *  The above copyright notice and this permission notice shall be included in all
	 *  copies or substantial portions of the Software.
	 *  
	 *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	 *  SOFTWARE.
	 *  
	 * @author : Nathanael Braun
	 * @contact : caipilabs@gmail.com
	 */
	var is = __webpack_require__(2);
	
	var Emitter = function () {
	    function Emitter() {
	        _classCallCheck(this, Emitter);
	
	        this._events = {};
	    }
	
	    _createClass(Emitter, [{
	        key: 'on',
	        value: function on(evt, cb) {
	            var _this = this;
	
	            if (!is.string(evt) && evt) return Object.keys(evt).forEach(function (k) {
	                return _this.on(k, evt[k]);
	            });
	
	            this._events[evt] = this._events[evt] || [];
	            this._events[evt].push(cb);
	        }
	    }, {
	        key: 'un',
	        value: function un(evt, cb) {
	            var _this2 = this;
	
	            if (!is.string(evt) && evt) return Object.keys(evt).forEach(function (k) {
	                return _this2.un(k, evt[k]);
	            });
	
	            if (!this._events[evt]) return;
	            var i = this._events[evt].indexOf(cb);
	            this._events[evt].splice(i, 1);
	        }
	    }, {
	        key: 'emit',
	        value: function emit(evt) {
	            if (!this._events[evt]) return;
	            var lists = [].concat(_toConsumableArray(this._events[evt]));
	
	            for (var _len = arguments.length, argz = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	                argz[_key - 1] = arguments[_key];
	            }
	
	            for (var i = 0; i < lists.length; i++) {
	                lists[i].apply(lists, argz);
	            }
	        }
	    }, {
	        key: 'addListener',
	        value: function addListener() {
	            this.on.apply(this, arguments);
	        }
	    }, {
	        key: 'removeListener',
	        value: function removeListener() {
	            this.un.apply(this, arguments);
	        }
	    }, {
	        key: 'removeAllListeners',
	        value: function removeAllListeners() {
	            this._events = {};
	        }
	    }, {
	        key: 'once',
	        value: function once(evt, cb) {
	            var _this3 = this;
	
	            var _fn = void 0;
	            this.on(evt, _fn = function fn() {
	                _this3.un(evt, _fn);
	                cb.apply(undefined, arguments);
	            });
	        }
	    }]);
	
	    return Emitter;
	}();
	
	exports.default = Emitter;
	module.exports = exports['default'];

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	module.exports = require("shortid");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _class, _temp;
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/*
	 * Copyright (c)  2018 Wise Wild Web .
	 *
	 *  MIT License
	 *
	 *  Permission is hereby granted, free of charge, to any person obtaining a copy
	 *  of this software and associated documentation files (the "Software"), to deal
	 *  in the Software without restriction, including without limitation the rights
	 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	 *  copies of the Software, and to permit persons to whom the Software is
	 *  furnished to do so, subject to the following conditions:
	 *
	 *  The above copyright notice and this permission notice shall be included in all
	 *  copies or substantial portions of the Software.
	 *
	 *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	 *  SOFTWARE.
	 *
	 * @author : Nathanael Braun
	 * @contact : caipilabs@gmail.com
	 */
	
	/**
	 * Ultra scalable state-aware store
	 *
	 * @todo : lot of optims...
	 */
	
	var is = __webpack_require__(2),
	    Scope = __webpack_require__(1),
	    EventEmitter = __webpack_require__(3),
	    shortid = __webpack_require__(4),
	    objProto = Object.getPrototypeOf({});
	/**
	 * @class Store
	 */
	var Store = (_temp = _class = function (_EventEmitter) {
	    _inherits(Store, _EventEmitter);
	
	    /**
	     * Constructor, will build a rescope store
	     *
	     * (scope, {require,use,apply,state, data})
	     * (scope)
	     *
	     * @param scope {object} scope where to find the other stores (default : static staticScope )
	     * @param keys {Array} (passed to Store::map) Ex : ["session", "otherNamedStore:key", otherStore.as("otherKey")]
	     */
	    // overridable list of store that will allow push if updated
	    function Store() {
	        var _this$_require, _this$_require2;
	
	        _classCallCheck(this, Store);
	
	        var _this = _possibleConstructorReturn(this, (Store.__proto__ || Object.getPrototypeOf(Store)).call(this));
	
	        var argz = [].concat(Array.prototype.slice.call(arguments)),
	            _static = _this.constructor,
	            scope = argz[0] instanceof Scope ? argz.shift() : _static.scope ? Scope.getScope(_static.scope) : is.string(argz[0]) ? Scope.getScope(argz.shift()) : _static.staticScope,
	            cfg = argz[0] && !is.array(argz[0]) && !is.string(argz[0]) ? argz.shift() : {},
	            name = is.string(argz[0]) ? argz[0] : cfg.name || _static.name,
	            watchs = is.array(argz[0]) ? argz.shift() : cfg.use || [],
	            // watchs need to be defined after all the
	        // store are registered : so we can't deal
	        // with any "static use" automaticly
	        apply = is.fn(argz[0]) ? argz.shift() : cfg.apply || null,
	            initialState = _static.state || _static.initialState,
	            applied;
	
	        _this._uid = cfg._uid || shortid.generate();
	
	        _this.__retains = { all: 0 };
	        _this.__locks = { all: 0 };
	        _this._onStabilize = [];
	
	        _this._persistenceTm = cfg.persistenceTm || _this.constructor.persistenceTm;
	        if (is.string(argz[0])) {
	            if (scope.__scope[name]) console.warn("ReScope: Overwriting an existing static named store ( %s ) !!", name);
	            scope.__scope[name] = _this;
	        }
	
	        if (cfg && cfg.on) {
	            _this.on(cfg.on);
	        }
	        // this.state      = this.state || {};
	
	
	        _this.name = name;
	
	        if (scope.stores) {
	            _this.scopeObj = scope;
	            _this.scope = scope.stores;
	        } else {
	            _this.scopeObj = new Scope(scope);
	            _this.scope = scope.stores;
	        }
	
	        _this._rev = _this.constructor._rev || 0;
	        _this._revs = {};
	        _this.stores = {};
	        _this._require = [];
	
	        if (is.array(_static.use)) {
	            _this._use = [].concat(_toConsumableArray(watchs), _toConsumableArray((_static.use || []).map(function (key) {
	                var ref = key.match(/^(\!?)([^\:]*)(?:\:(.*))?$/);
	                if (ref[1]) {
	                    var ref2 = ref[2].split('.');
	                    _this._require.push(ref[3] || ref2[ref2.length - 1]);
	                }
	                return ref[2];
	            })));
	        } else {
	            _this._use = [].concat(_toConsumableArray(watchs), _toConsumableArray(_static.use ? Object.keys(_static.use).map(function (key) {
	                var ref = key.match(/^(\!?)(.*)$/);
	                ref[1] && _this._require.push(_static.use[key]);
	                return ref[2] + (_static.use[key] === true ? '' : ':' + _static.use[key]);
	            }) : []));
	        }
	
	        if (_static.require) (_this$_require = _this._require).push.apply(_this$_require, _toConsumableArray(_static.require));
	        if (cfg.require) (_this$_require2 = _this._require).push.apply(_this$_require2, _toConsumableArray(cfg.require));
	
	        _this._followers = [];
	
	        if (_static.data !== undefined) _this.data = _extends({}, _static.data);
	        if (cfg.hasOwnProperty("data") && cfg.data !== undefined) _this.data = cfg.data;
	        if (cfg.hasOwnProperty("state") && cfg.state !== undefined) initialState = _extends({}, initialState, cfg.state);
	
	        if (apply) _this.apply = apply;
	
	        if (initialState || _this._use.length) {
	            // sync apply
	            _this.state = _extends({}, initialState || {}, scope.map(_this, _this._use));
	            if (_this.shouldApply(_this.state) && _this.data === undefined) {
	                _this.data = _this.apply(_this.data, _this.state, _this.state);
	                applied = true;
	            }
	        }
	
	        if ((_this.data !== undefined || applied) && !_this.__locks.all) {
	            _this._stable = true;
	            _this._rev++;
	        } else {
	            _this._stable = false;
	            if (!_static.managed && !_this.state && (!_this._use || !_this._use.length)) {
	                console.warn("Rescope store '", _this.name, "' have no initial data, state or use. It can't stabilize...");
	            }
	        }
	        !_this._stable && _this.emit('unstable', _this.state);
	        return _this;
	    }
	
	    /**
	     * get a Builder-key pair for Store::map
	     * @param {string} name
	     * @returns {{store: Store, name: *}}
	     */
	    // default state
	    /**
	     * if retain goes to 0 :
	     * false to not destroy,
	     * 0 to sync auto destroy
	     * Ms to autodestroy after tm ms if no retain has been called
	     * @type {boolean|Int}
	     */
	    // overridable list of source stores
	
	
	    _createClass(Store, [{
	        key: 'shouldPropag',
	
	
	        /**
	         * Overridable method to know if a data change should be propag to the listening stores & components
	         */
	        value: function shouldPropag(nDatas) {
	
	            return true;
	        }
	    }, {
	        key: 'hasDataChange',
	        value: function hasDataChange(nDatas) {
	            var _static = this.constructor,
	                r,
	                cDatas = this.data;
	            r = !cDatas && nDatas || cDatas !== nDatas;
	            !r && cDatas && Object.keys(cDatas).forEach(function (key) {
	                r = r || (nDatas ? cDatas[key] !== nDatas[key] : cDatas && cDatas[key]);
	            });
	            !r && nDatas && Object.keys(nDatas).forEach(function (key) {
	                r = r || (nDatas ? cDatas[key] !== nDatas[key] : cDatas && cDatas[key]);
	            });
	            return r;
	        }
	
	        /**
	         * Overridable method to know if a state change should be applied
	         */
	
	    }, {
	        key: 'shouldApply',
	        value: function shouldApply() {
	            var _this2 = this;
	
	            var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state;
	
	            var _static = this.constructor;
	
	            return !!this.isComplete(state) && (is.array(_static.follow) ? _static.follow.reduce(function (r, i) {
	                return r || state && state[i];
	            }, false) : _static.follow ? Object.keys(_static.follow).reduce(function (r, i) {
	                return r || state && is.fn(_static.follow[i]) && _static.follow[i].call(_this2, state[i]) || _static.follow[i] && state[i] !== _this2.state[i];
	            }, false) : true);
	        }
	
	        /**
	         * Overridable applier / remapper
	         * If state or lastPublicState are simple hash maps apply will return {...data, ...state}
	         * if not it will return the last private state
	         * @param data
	         * @param state
	         * @returns {*}
	         */
	
	    }, {
	        key: 'apply',
	        value: function apply(data, state, changes) {
	            state = state || this.state;
	
	            if (this.refine) return this.refine.apply(this, arguments);
	
	            if (!data || data.__proto__ !== objProto || state.__proto__ !== objProto) return state;else return _extends({}, data, state);
	        }
	
	        /**
	         * @depreciated
	         * @param data
	         * @param state
	         * @param changes
	         * @returns {*}
	         */
	
	    }, {
	        key: 'refine',
	        value: function refine(data, state, changes) {
	            state = state || this.state;
	
	            if (!data || data.__proto__ !== objProto || state.__proto__ !== objProto) return state;else return _extends({}, data, state);
	        }
	
	        /**
	         * Debounce this store propagation ( & reducing )
	         * @param cb
	         */
	
	    }, {
	        key: 'stabilize',
	        value: function stabilize(cb) {
	            var _this3 = this;
	
	            cb && this.once('stable', cb);
	            this._stable && this.emit('unstable', this.state, this.data);
	
	            this._stable = false;
	
	            if (this._stabilizer) clearTimeout(this._stabilizer);
	
	            this._stabilizer = setTimeout(this.push.bind(this, null, function () {
	                //@todo
	
	                var stable = _this3._stable;
	                _this3._stable = true;
	                !stable && _this3.emit('stable', _this3.state, _this3.data);
	                _this3._stabilizer = null;
	                // this.release();
	            }));
	        }
	    }, {
	        key: 'retrieve',
	        value: function retrieve(path) {
	            var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	            var obj = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.data;
	
	            path = is.string(path) ? path.split('.') : path;
	            return !obj || !path || !path.length ? obj : path.length == i + 1 ? obj[path[i]] : this.retrieve(path, i + 1, obj[path[i]]);
	        }
	    }, {
	        key: 'dispatch',
	        value: function dispatch(action) {
	            var _scopeObj;
	
	            for (var _len = arguments.length, argz = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	                argz[_key - 1] = arguments[_key];
	            }
	
	            (_scopeObj = this.scopeObj).dispatch.apply(_scopeObj, [action].concat(argz));
	        }
	    }, {
	        key: 'trigger',
	        value: function trigger(action) {
	            var actions = this.constructor.actions,
	                ns = void 0;
	
	            if (actions && actions[action]) {
	                var _actions$action;
	
	                for (var _len2 = arguments.length, argz = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	                    argz[_key2 - 1] = arguments[_key2];
	                }
	
	                ns = (_actions$action = actions[action]).call.apply(_actions$action, [this].concat(argz));
	                ns && this.setState(ns);
	            }
	        }
	
	        /**
	         * Pull stores in the private state
	         * @param stores  {Array} (passed to Store::map) Ex : ["session", "otherNamedStore:key", otherStore.as("otherKey")]
	         */
	
	    }, {
	        key: 'pull',
	        value: function pull(stores, doWait, origin) {
	            var _this4 = this;
	
	            var initialOutputs = this.scopeObj.map(this, stores);
	            if (doWait) {
	                this.wait();
	                stores.forEach(function (s) {
	                    return _this4.scope[s] && _this4.wait(_this4.scope[s]);
	                });
	                this.release();
	            }
	            return initialOutputs;
	        }
	
	        /**
	         * Apply apply/remap on the private state & push the resulting "public" state to followers
	         * @param cb
	         */
	
	    }, {
	        key: 'push',
	        value: function push(data, force, cb) {
	            cb = force === true ? cb : force;
	            force = force === true;
	            var i = 0,
	                nextState = !data && _extends({}, this.state, this._changesSW) || this.state,
	                nextDatas = data || this.apply(this.data, nextState, this._changesSW);
	
	            this.state = nextState;
	            this._changesSW = {};
	            if (!force && !this.hasDataChange(nextDatas)) {
	                cb && cb();
	                return false;
	            }
	
	            this.data = nextDatas;
	            this.wait();
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
	            }if (!this.shouldApply(_extends({}, this.state, changes))) {
	                return;
	            }
	
	            if (sync) {
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
	            }this.shouldApply(_extends({}, this.state || {}, changes)) && this.push();
	            return this.data;
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
	
	            if (!is.string(lists) && lists) Object.keys(lists).forEach(function (k) {
	                return _get(Store.prototype.__proto__ || Object.getPrototypeOf(Store.prototype), 'on', _this5).call(_this5, k, lists[k]);
	            });else _get(Store.prototype.__proto__ || Object.getPrototypeOf(Store.prototype), 'on', this).apply(this, arguments);
	        }
	    }, {
	        key: 'removeListener',
	        value: function removeListener(lists) {
	            var _this6 = this;
	
	            if (!is.string(lists) && lists) Object.keys(lists).forEach(function (k) {
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
	
	            var scope = this.scopeObj,
	                _static = this.constructor;
	            if (_static.use) {
	                //todo unlink
	                this.pull(_static.use, false, from);
	            }
	
	            if (this._require) {
	                this._require.forEach(function (store) {
	                    return _this7.wait(scope.__scope[store]);
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
	        value: function unBind(obj, key, path) {
	            var followers = this._followers,
	                i = followers && followers.length;
	            while (followers && i--) {
	                if (followers[i][0] === obj && followers[i][1] === key && followers[i][2] === path) return followers.splice(i, 1);
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
	            var path = arguments[3];
	
	            this._followers.push([obj, key, path]);
	            if (setInitial && this.data && this._stable) {
	                var data = path ? this.retrieve(path) : this.data;
	                if (typeof obj != "function") {
	                    if (key) obj.setState(_defineProperty({}, key, data));else obj.setState(data);
	                } else {
	                    obj(data);
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
	
	            if (this._stable) return cb(null, this.data);
	            this.once('stable', function (e) {
	                return cb(null, _this8.data);
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
	            if (typeof previous == "number") return this.__locks.all += previous;
	            if (is.array(previous)) return previous.map(this.wait.bind(this));
	
	            this._stable && this.emit('unstable', this.state, this.data);
	            this._stable = false;
	            this.__locks.all++;
	
	            var reason = is.string(previous) ? previous : null;
	            if (reason) {
	                this.__locks[reason] = this.__locks[reason] || 0;
	                this.__locks[reason]++;
	            }
	            if (previous && is.fn(previous.then)) {
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
	        value: function release(reason, cb) {
	            var _this9 = this;
	
	            var _static = this.constructor;
	            var i = 0,
	                wasStable = this._stable;
	
	            if (is.fn(reason)) {
	                cb = reason;
	                reason = null;
	            }
	
	            if (reason) {
	                if (this.__locks[reason] == 0) console.error("Release more than locking !", reason);
	                this.__locks[reason] = this.__locks[reason] || 0;
	                this.__locks[reason]--;
	            }
	
	            if (!reason && this.__locks.all == 0) console.error("Release more than locking !");
	
	            if (! --this.__locks.all && this.data && this.isComplete()) {
	                var propag = this.shouldPropag(this.data);
	                this._stable = true;
	                propag && this._rev++; //
	                if (propag && this._followers.length) this._followers.forEach(function (follower) {
	                    var data = follower[2] ? _this9.retrieve(follower[2]) : _this9.data;
	                    if (!data) return;
	                    if (typeof follower[0] == "function") {
	                        follower[0](data);
	                    } else {
	                        //cb && i++;
	                        follower[0].setState(follower[1] ? _defineProperty({}, follower[1], data) : data
	                        //,
	                        //cb && (
	                        //    () => (!(--i) && cb())
	                        //)
	                        );
	                    }
	                });
	                //else
	                !wasStable && this.emit('stable', this.data);
	                propag && this.emit('update', this.data);
	                cb && cb();
	            } else cb && this.then(cb);
	            return this;
	        }
	    }, {
	        key: 'retain',
	        value: function retain(reason) {
	            this.__retains.all++;
	            if (reason) {
	                this.__retains[reason] = this.__retains[reason] || 0;
	                this.__retains[reason]++;
	            }
	        }
	    }, {
	        key: 'dispose',
	        value: function dispose(reason) {
	            var _this10 = this;
	
	            //console.warn("dispose", reason, this.__retains);
	            if (reason) {
	                if (!this.__retains[reason]) throw new Error("Dispose more than retaining : " + reason);
	
	                this.__retains[reason]--;
	            }
	            if (this.__retains.all == 0) throw new Error("Dispose more than retaining !");
	
	            this.__retains.all--;
	
	            if (!this.__retains.all) {
	                if (this._persistenceTm) {
	                    this._destroyTM && clearTimeout(this._destroyTM);
	                    this._destroyTM = setTimeout(function (e) {
	                        _this10._destroyTM = null;
	                        _this10.then(function (s) {
	                            !_this10.__retains.all && _this10.destroy();
	                        });
	                    }, this._persistenceTm);
	                } else {
	                    this.then(function (s) {
	                        return !_this10.__retains.all && _this10.destroy();
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
	
	            if (this._followers.length) this._followers.forEach(function (follower) {
	                if (typeof follower[0] !== "function") {
	                    if (follower[0].stores) delete follower[0].stores[follower[1]];
	                }
	            });
	            this._followers.length = 0;
	            this.constructor._rev = this.rev;
	            this.dead = true;
	            this._revs = this.data = this.state = this.scope = null;
	            this.removeAllListeners();
	        }
	    }, {
	        key: 'contextObj',
	
	
	        /**
	         * @deprecated
	         * @returns {*}
	         */
	        get: function get() {
	            return this.scopeObj;
	        }
	
	        /**
	         * @deprecated
	         * @returns {*}
	         */
	
	    }, {
	        key: 'context',
	        get: function get() {
	            return this.scope;
	        }
	
	        /**
	         * @deprecated
	         * @returns {*}
	         */
	
	    }, {
	        key: 'datas',
	        get: function get() {
	            return this.data;
	        }
	
	        /**
	         * @deprecated
	         * @returns {*}
	         */
	        ,
	        set: function set(v) {
	            //console.groupCollapsed("Rescope store : Setting datas is depreciated, use data");
	            //console.log("Rescope store : Setting datas is depreciated, use data", (new Error()).stack);
	            //console.groupEnd();
	
	            this.data = v;
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
	         * @param object {Object} target state aware object (React.Component|Store|...)
	         * @param keys {Array} Ex : ["session", "otherStaticNamedStore:key", store.as('anotherKey')]
	         */
	
	    }, {
	        key: 'map',
	        value: function map(component, keys, scope, origin) {
	            var setInitial = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
	
	            var targetRevs = component._revs || {};
	            var targetScope = component.stores || (component.stores = {});
	            var initialOutputs = {};
	            keys = is.array(keys) ? [].concat(_toConsumableArray(keys)) : [keys];
	
	            scope = scope || Store.staticScope;
	
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
	                    path = void 0,
	                    store = void 0;
	                if (key.store && key.name) {
	                    alias = name = key.name;
	                    store = key.store;
	                } else if (is.fn(key)) {
	                    name = alias = key.name || key.defaultName;
	                    store = key;
	                } else {
	                    key = key.match(/([\w_]+)((?:\.[\w_]+)*)(?:\:([\w_]+))?/);
	                    name = key[1];
	                    path = key[2] && key[2].split('.').slice(1);
	                    store = scope.stores[key[1]];
	                    alias = key[3] || path && path[path.length - 1] || key[1];
	                }
	
	                if (targetRevs[name]) return false; // ignore dbl uses for now
	
	                if (!store) {
	                    console.error("Not a mappable store item '" + name + "/" + alias + "' in " + origin + ' !!', store);
	                    return false;
	                } else if (is.fn(store)) {
	                    scope._mount(name);
	
	                    scope.stores[name].bind(component, alias, setInitial, path);
	                } else {
	                    store.bind(component, alias, setInitial, path);
	                }
	                targetRevs[alias] = targetRevs[alias] || true;
	                !targetScope[name] && (targetScope[name] = scope.stores[name]);
	                if (scope.stores[name].hasOwnProperty('data')) initialOutputs[name] = scope.data[name];
	                return true;
	            });
	            var mixedCWUnmount,
	                unMountKey = component.isReactComponent ? "componentWillUnmount" : "destroy";
	
	            if (component.hasOwnProperty(unMountKey)) {
	                mixedCWUnmount = component[unMountKey];
	            }
	
	            component[unMountKey] = function () {
	                delete component[unMountKey];
	                if (mixedCWUnmount) component[unMountKey] = mixedCWUnmount;
	
	                keys.map(function (key) {
	                    var name = void 0,
	                        alias = void 0,
	                        path = void 0,
	                        store = void 0;
	                    if (key.store && key.name) {
	                        alias = name = key.name;
	                        store = key.store;
	                    } else if (is.fn(key)) {
	                        name = alias = key.name || key.defaultName;
	                        store = scope.stores[name];
	                    } else {
	                        key = key.match(/([\w_]+)((?:\.[\w_]+)*)(?:\:([\w_]+))?/);
	                        name = key[1];
	                        path = key[2] && key[2].split('.');
	                        store = scope.stores[key[1]];
	                        alias = key[3] || path && path[path.length - 1] || key[1];
	                    }
	
	                    store && !is.fn(store) && store.unBind(component, alias, path);
	                });
	                return component[unMountKey] && component[unMountKey].apply(component, arguments);
	            };
	
	            return initialOutputs;
	        }
	    }]);
	
	    return Store;
	}(EventEmitter), _class.use = [], _class.staticScope = new Scope({}, { id: "static" }), _class.state = undefined, _class.persistenceTm = false, _temp);
	exports.default = Store;
	module.exports = exports['default'];

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.rescopeState = exports.reScopeState = exports.rescopeProps = exports.reScopeProps = exports.Component = exports.default = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _class, _temp; /*
	                    * Copyright (c)  2018 Wise Wild Web .
	                    *
	                    *  MIT License
	                    *  
	                    *  Permission is hereby granted, free of charge, to any person obtaining a copy
	                    *  of this software and associated documentation files (the "Software"), to deal
	                    *  in the Software without restriction, including without limitation the rights
	                    *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	                    *  copies of the Software, and to permit persons to whom the Software is
	                    *  furnished to do so, subject to the following conditions:
	                    *  
	                    *  The above copyright notice and this permission notice shall be included in all
	                    *  copies or substantial portions of the Software.
	                    *  
	                    *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	                    *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	                    *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	                    *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	                    *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	                    *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	                    *  SOFTWARE.
	                    *  
	                    * @author : Nathanael Braun
	                    * @contact : caipilabs@gmail.com
	                    */
	
	var _react = __webpack_require__(7);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _is = __webpack_require__(2);
	
	var _is2 = _interopRequireDefault(_is);
	
	var _propTypes = __webpack_require__(8);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _Scope = __webpack_require__(1);
	
	var _Scope2 = _interopRequireDefault(_Scope);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * Inheritable ReScope "HOC" (High Order Component)
	 *
	 * @class Component
	 * @desc Parent React Component with store injection in its state
	 */
	var Component = (_temp = _class = function (_React$Component) {
	    _inherits(Component, _React$Component);
	
	    function Component(p, ctx, q) {
	        _classCallCheck(this, Component);
	
	        var _this = _possibleConstructorReturn(this, (Component.__proto__ || Object.getPrototypeOf(Component)).call(this, p, ctx, q));
	
	        var scope = p.__scope || ctx.rescope;
	        _this.$scope = scope;
	        _this.$stores = _this.$scope.stores;
	        if (_this.constructor.use) {
	            _this.state = _extends({}, _this.state, scope.map(_this, _this.constructor.use || [], false));
	        } else if (!_this.$scope) _this.render = function () {
	            return _react2.default.createElement(
	                'div',
	                null,
	                'No Rescope here ',
	                _get(Component.prototype.__proto__ || Object.getPrototypeOf(Component.prototype), 'name', _this)
	            );
	        };
	        return _this;
	    }
	
	    _createClass(Component, [{
	        key: 'dispatch',
	        value: function dispatch() {
	            var _$scope;
	
	            this.$scope && (_$scope = this.$scope).dispatch.apply(_$scope, arguments);
	        }
	    }, {
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	            if (this.constructor.use) {
	                this.$scope.bind(this, this.constructor.use || [], false);
	            }
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            this.constructor.use && this.$scope.unBind(this, this.constructor.use || []);
	            this.$scope = null;
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(np, nc) {
	            var nScope = np.__scope || nc.rescope || this.$scope;
	
	            if (nScope != this.$scope) {
	                this.constructor.use && this.$scope.unBind(this, this.constructor.use);
	                this.$scope = nScope;
	                this.$stores = this.$scope.stores;
	                this.constructor.use && nScope.bind(this, this.constructor.use);
	            }
	        }
	    }, {
	        key: 'getChildContext',
	        value: function getChildContext() {
	            return {
	                rescope: this.$scope || this.context.rescope,
	                $stores: this.$scope.stores || this.context.$stores
	            };
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return this.props.children || _react2.default.createElement('div', null);
	        }
	    }]);
	
	    return Component;
	}(_react2.default.Component), _class.childContextTypes = {
	    rescope: _propTypes2.default.object,
	    $stores: _propTypes2.default.object
	}, _class.contextTypes = {
	    rescope: _propTypes2.default.object,
	    $stores: _propTypes2.default.object
	}, _temp);
	;
	
	/**
	 * Return a React "HOC" (High Order Component) that :
	 *  - Inherit BaseComponent,
	 *  - Inject & maintain the stores in BaseComponent::use and/or (use) in the instances state.
	 *  - Propag (scope) in the returned React Component context
	 *
	 *
	 * @param BaseComponent {React.Component} Base React Component ( default : React.Component )
	 * @param scope {ReScope.Scope|function} the propagated Scope where the stores will be searched
	 * @param use {array} the list of stores injected from the current scope
	 * @returns {ReScopeProvider}
	 */
	function reScopeState() {
	    var _class2, _temp2;
	
	    for (var _len = arguments.length, argz = Array(_len), _key = 0; _key < _len; _key++) {
	        argz[_key] = arguments[_key];
	    }
	
	    var BaseComponent = argz[0],
	        scope = argz[1],
	        use = argz[2];
	
	
	    if (!(BaseComponent && BaseComponent.prototype && BaseComponent.prototype.isReactComponent)) {
	        return function (BaseComponent) {
	            return reScopeState.apply(undefined, [BaseComponent].concat(argz));
	        };
	    }
	
	    if (!use && _is2.default.array(scope)) {
	        use = scope;
	        scope = null;
	    }
	
	    use = [].concat(_toConsumableArray(BaseComponent.use || []), _toConsumableArray(use || []));
	
	    var ReScopeProvider = (_temp2 = _class2 = function (_BaseComponent) {
	        _inherits(ReScopeProvider, _BaseComponent);
	
	        function ReScopeProvider(p, ctx, q) {
	            _classCallCheck(this, ReScopeProvider);
	
	            var _this2 = _possibleConstructorReturn(this, (ReScopeProvider.__proto__ || Object.getPrototypeOf(ReScopeProvider)).call(this, p, ctx, q));
	
	            _this2.$scope = p.__scope || _is2.default.fn(scope) && scope(_this2, p, ctx) || scope || ctx.rescope;
	
	            _is2.default.fn(scope) && _this2.$scope.retain();
	
	            _this2.$stores = _this2.$scope.stores;
	            if (_this2.$scope && use.length) {
	                _this2.state = _extends({}, _this2.state, _this2.$scope.map(_this2, use, false));
	            } else if (!_this2.$scope) _this2.render = function () {
	                return _react2.default.createElement(
	                    'div',
	                    null,
	                    'No Rescope here ',
	                    BaseComponent.name
	                );
	            };
	            return _this2;
	        }
	
	        _createClass(ReScopeProvider, [{
	            key: '$dispatch',
	            value: function $dispatch() {
	                var _$scope2;
	
	                (_$scope2 = this.$scope).dispatch.apply(_$scope2, arguments);
	            }
	        }, {
	            key: 'componentWillMount',
	            value: function componentWillMount() {
	                if (use.length) {
	                    this.$scope.bind(this, use, false);
	                }
	                _get(ReScopeProvider.prototype.__proto__ || Object.getPrototypeOf(ReScopeProvider.prototype), 'componentWillMount', this) && _get(ReScopeProvider.prototype.__proto__ || Object.getPrototypeOf(ReScopeProvider.prototype), 'componentWillMount', this).call(this);
	            }
	        }, {
	            key: 'componentWillUnmount',
	            value: function componentWillUnmount() {
	                _get(ReScopeProvider.prototype.__proto__ || Object.getPrototypeOf(ReScopeProvider.prototype), 'componentWillUnmount', this) && _get(ReScopeProvider.prototype.__proto__ || Object.getPrototypeOf(ReScopeProvider.prototype), 'componentWillUnmount', this).call(this);
	                use.length && this.$scope.unBind(this, use);
	                _is2.default.fn(scope) && this.$scope.dispose();
	                delete this.$stores;
	                delete this.$scope;
	            }
	        }, {
	            key: 'componentWillReceiveProps',
	            value: function componentWillReceiveProps(np, nc) {
	                var nScope = np.__scope || scope && this.$scope || nc.rescope || this.$scope;
	
	                if (nScope != this.$scope) {
	                    use.length && this.$scope.unBind(this, use);
	                    this.$scope = nScope;
	                    this.$stores = this.$scope.stores;
	                    use.length && nScope.bind(this, use);
	                }
	                _get(ReScopeProvider.prototype.__proto__ || Object.getPrototypeOf(ReScopeProvider.prototype), 'componentWillReceiveProps', this) && _get(ReScopeProvider.prototype.__proto__ || Object.getPrototypeOf(ReScopeProvider.prototype), 'componentWillReceiveProps', this).call(this, np, nc);
	            }
	        }, {
	            key: 'getChildContext',
	            value: function getChildContext() {
	                var ctx = _get(ReScopeProvider.prototype.__proto__ || Object.getPrototypeOf(ReScopeProvider.prototype), 'getChildContext', this) && _get(ReScopeProvider.prototype.__proto__ || Object.getPrototypeOf(ReScopeProvider.prototype), 'getChildContext', this).call(this) || {};
	                return _extends({}, ctx, {
	                    rescope: this.$scope || this.context.rescope,
	                    $stores: this.$scope.stores || this.context.$stores
	                });
	            }
	        }]);
	
	        return ReScopeProvider;
	    }(BaseComponent), _class2.childContextTypes = _extends({}, BaseComponent.childContextTypes || {}, {
	        rescope: _propTypes2.default.object,
	        $stores: _propTypes2.default.object
	    }), _class2.contextTypes = _extends({}, BaseComponent.contextTypes || {}, {
	        rescope: _propTypes2.default.object,
	        $stores: _propTypes2.default.object
	    }), _class2.defaultProps = _extends({}, BaseComponent.defaultProps || {}), _class2.displayName = "stateScoped(" + (BaseComponent.displayName || BaseComponent.name) + ")", _temp2);
	
	
	    return ReScopeProvider;
	}
	
	/**
	 * Return a React "HOC" (High Order Component) that :
	 *  - Inject & maintain the stores listed baseComponent::use and/or (use) in the instances props.
	 *  - Propag (scope) in the returned React Component context
	 *
	 * @param BaseComponent {React.Component} Base React Component ( default : React.Component )
	 * @param scope {ReScope.Scope|function} the propagated Scope where the stores will be searched ( default : the default
	 *     ReScope::Scope::scopes.static scope )
	 * @param use {array} the list of stores to inject from the current scope
	 * @returns {ReScopeProvider}
	 */
	function reScopeProps() {
	    var _class3, _temp3;
	
	    for (var _len2 = arguments.length, argz = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	        argz[_key2] = arguments[_key2];
	    }
	
	    var BaseComponent = argz[0],
	        scope = argz[1],
	        use = argz[2];
	
	
	    if (!(BaseComponent && BaseComponent.prototype && BaseComponent.prototype.isReactComponent)) {
	        return function (BaseComponent) {
	            return reScopeProps.apply(undefined, [BaseComponent].concat(argz));
	        };
	    }
	    if (!use && _is2.default.array(scope)) {
	        use = scope;
	        scope = null;
	    }
	
	    use = [].concat(_toConsumableArray(BaseComponent.use || []), _toConsumableArray(use || []));
	
	    return reScopeState((_temp3 = _class3 = function (_React$Component2) {
	        _inherits(ReScopePropsProvider, _React$Component2);
	
	        function ReScopePropsProvider() {
	            _classCallCheck(this, ReScopePropsProvider);
	
	            return _possibleConstructorReturn(this, (ReScopePropsProvider.__proto__ || Object.getPrototypeOf(ReScopePropsProvider)).apply(this, arguments));
	        }
	
	        _createClass(ReScopePropsProvider, [{
	            key: 'getChildContext',
	            value: function getChildContext() {
	                return this.context;
	            }
	        }, {
	            key: 'render',
	            value: function render() {
	                var _this4 = this;
	
	                return _react2.default.createElement(BaseComponent, _extends({}, this.props, this.state, {
	                    $dispatch: function $dispatch() {
	                        return _this4.$dispatch.apply(_this4, arguments);
	                    },
	                    $stores: this.$stores }));
	            }
	        }]);
	
	        return ReScopePropsProvider;
	    }(_react2.default.Component), _class3.childContextTypes = _extends({}, BaseComponent.contextTypes || {}, {
	        rescope: _propTypes2.default.object,
	        $stores: _propTypes2.default.object
	    }), _class3.contextTypes = _extends({}, BaseComponent.contextTypes || {}, {
	        rescope: _propTypes2.default.object,
	        $stores: _propTypes2.default.object
	    }), _class3.displayName = "propsScoped(" + (BaseComponent.displayName || BaseComponent.name) + ")", _temp3), scope, use);
	}
	
	exports.default = Component;
	exports.Component = Component;
	exports.reScopeProps = reScopeProps;
	exports.rescopeProps = reScopeProps;
	exports.reScopeState = reScopeState;
	exports.rescopeState = reScopeState;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	module.exports = require("react");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	module.exports = require("prop-types");

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZTc1YzljNjQxYjUxYzhiMGQ0MTEiLCJ3ZWJwYWNrOi8vLy4vc3JjL1JlU2NvcGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Njb3BlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImlzXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL0VtaXR0ZXIuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic2hvcnRpZFwiIiwid2VicGFjazovLy8uL3NyYy9TdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvUmVhY3RUb29scy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiJdLCJuYW1lcyI6WyJSVG9vbHMiLCJTdG9yZSIsIkNvbnRleHQiLCJTY29wZSIsIkNvbXBvbmVudCIsInJlU2NvcGVQcm9wcyIsInJlU2NvcGVTdGF0ZSIsIndpdGhTY29wZSIsImlzIiwicmVxdWlyZSIsIkV2ZW50RW1pdHRlciIsInNob3J0aWQiLCJfX3Byb3RvX19wdXNoIiwidGFyZ2V0IiwiaWQiLCJwYXJlbnQiLCJmbiIsInByb3RvdHlwZSIsIm9wZW5TY29wZXMiLCJzY29wZXMiLCJza2V5IiwiYXJyYXkiLCJzb3J0IiwiYSIsImIiLCJmaXJzdG5hbWUiLCJqb2luIiwic3RvcmVzTWFwIiwic3RhdGUiLCJkYXRhIiwibmFtZSIsImluY3JlbWVudElkIiwiZGVmYXVsdE1heExpc3RlbmVycyIsInBlcnNpc3RlbmNlVG0iLCJhdXRvRGVzdHJveSIsInJvb3RFbWl0dGVyIiwiX21heExpc3RlbmVycyIsImNvbnN0cnVjdG9yIiwiZ2VuZXJhdGUiLCJfaWQiLCJyZWdpc3RlciIsImkiLCJfaXNMb2NhbElkIiwiX3BlcnNpc3RlbmNlVG0iLCJzdG9yZXMiLCJkZWFkIiwiRXJyb3IiLCJzb3VyY2VzIiwiX2NoaWxkU2NvcGVzIiwiX2NoaWxkU2NvcGVzTGlzdCIsIl91blN0YWJsZUNoaWxkcyIsIl9fcmV0YWlucyIsImFsbCIsIl9fbG9ja3MiLCJfX2xpc3RlbmluZyIsIl9fc2NvcGUiLCJfX21peGVkIiwiX19taXhlZExpc3QiLCJfZm9sbG93ZXJzIiwicmV0YWluIiwiX3N0YWJsZSIsIndhaXQiLCJvbiIsIl9fcGFyZW50TGlzdCIsInJlbGVhc2UiLCJfcHJvcGFnIiwiX2FkZENoaWxkIiwic2V0VGltZW91dCIsImRpc3Bvc2UiLCJzdG9yZXNMaXN0IiwiZm9yRWFjaCIsIl9tb3VudCIsImsiLCJhcmd1bWVudHMiLCJzdG9yZSIsInJlZHVjZSIsIm1vdW50ZWQiLCJjdHgiLCJ1bmRlZmluZWQiLCJzZXRTdGF0ZSIsInB1c2giLCJfd2F0Y2hTdG9yZSIsImlzU3RhYmxlIiwicHJvcGFnIiwidGFyZ2V0Q3R4IiwibGlzdHMiLCJyZWxpbmsiLCJPYmplY3QiLCJrZXlzIiwic2luZ2xldG9uIiwic3JjQ3R4IiwiZXh0ZXJuYWwiLCJmb3JjZSIsImxjdHgiLCJfc3RvcmVzIiwiY29uc29sZSIsImluZm8iLCJfX3Byb3RvX18iLCJkZWZpbmVQcm9wZXJ0eSIsImdldCIsIl9zdGF0ZSIsInNldCIsInYiLCJfZGF0YSIsIm9iaiIsImtleSIsImFzIiwic2V0SW5pdGlhbCIsImxhc3RSZXZzIiwicmVLZXkiLCJtYXAiLCJzdHJpbmciLCJyZXZzIiwibW91bnQiLCJnZXRVcGRhdGVzIiwiZm9sbG93ZXJzIiwibGVuZ3RoIiwic3BsaWNlIiwidG8iLCJiaW5kIiwibWl4ZWRDV1VubW91bnQiLCJ1bk1vdW50S2V5IiwiaXNSZWFjdENvbXBvbmVudCIsImhhc093blByb3BlcnR5IiwidW5CaW5kIiwic3BsaXQiLCJyZXRyaWV2ZSIsInBhdGgiLCJzdG9yZXNSZXZNYXAiLCJsb2NhbCIsIl9yZXYiLCJ1cGRhdGVkIiwiZ2V0U3RvcmVzUmV2cyIsIm91dHB1dCIsImZsYWdzX3N0YXRlcyIsImZsYWdzX2RhdGEiLCJfZmxhZ3Nfc3RhdGVzIiwiX2ZsYWdzX2RhdGEiLCJmbGFncyIsInIiLCJmbGFnIiwidGVzdCIsImFjdGlvbiIsInRyaWdnZXIiLCJkaXNwYXRjaCIsImNiIiwib25jZSIsInF1aWV0IiwicmVhc29uIiwiZW1pdCIsImVycm9yIiwiX3N0YWJpbGl6ZXJUTSIsImNsZWFyVGltZW91dCIsIl9wcm9wYWdUTSIsIndhc1N0YWJsZSIsImluZGV4T2YiLCJ1biIsIl9kZXN0cm95VE0iLCJ0aGVuIiwiZGVzdHJveSIsInJlbW92ZUxpc3RlbmVyIiwic2hpZnQiLCJfcm1DaGlsZCIsInNjb3BlIiwiRW1pdHRlciIsIl9ldmVudHMiLCJldnQiLCJhcmd6Iiwib2JqUHJvdG8iLCJnZXRQcm90b3R5cGVPZiIsIl9zdGF0aWMiLCJnZXRTY29wZSIsInN0YXRpY1Njb3BlIiwiY2ZnIiwid2F0Y2hzIiwidXNlIiwiYXBwbHkiLCJpbml0aWFsU3RhdGUiLCJhcHBsaWVkIiwiX3VpZCIsIl9vblN0YWJpbGl6ZSIsIndhcm4iLCJzY29wZU9iaiIsIl9yZXZzIiwiX3JlcXVpcmUiLCJfdXNlIiwicmVmIiwibWF0Y2giLCJyZWYyIiwic2hvdWxkQXBwbHkiLCJtYW5hZ2VkIiwibkRhdGFzIiwiY0RhdGFzIiwiaXNDb21wbGV0ZSIsImZvbGxvdyIsImNhbGwiLCJjaGFuZ2VzIiwicmVmaW5lIiwiX3N0YWJpbGl6ZXIiLCJzdGFibGUiLCJhY3Rpb25zIiwibnMiLCJkb1dhaXQiLCJvcmlnaW4iLCJpbml0aWFsT3V0cHV0cyIsInMiLCJuZXh0U3RhdGUiLCJfY2hhbmdlc1NXIiwibmV4dERhdGFzIiwiaGFzRGF0YUNoYW5nZSIsInBTdGF0ZSIsInN5bmMiLCJjaGFuZ2UiLCJzdGFiaWxpemUiLCJtZSIsImZyb20iLCJwdWxsIiwicHJldmlvdXMiLCJzaG91bGRQcm9wYWciLCJmb2xsb3dlciIsInJldiIsInJlbW92ZUFsbExpc3RlbmVycyIsImNvbXBvbmVudCIsInRhcmdldFJldnMiLCJ0YXJnZXRTY29wZSIsImZpbHRlciIsImFsaWFzIiwiZGVmYXVsdE5hbWUiLCJzbGljZSIsInAiLCJxIiwicmVzY29wZSIsIiRzY29wZSIsIiRzdG9yZXMiLCJyZW5kZXIiLCJucCIsIm5jIiwiblNjb3BlIiwiY29udGV4dCIsInByb3BzIiwiY2hpbGRyZW4iLCJjaGlsZENvbnRleHRUeXBlcyIsIm9iamVjdCIsImNvbnRleHRUeXBlcyIsIkJhc2VDb21wb25lbnQiLCJSZVNjb3BlUHJvdmlkZXIiLCJkZWZhdWx0UHJvcHMiLCJkaXNwbGF5TmFtZSIsIiRkaXNwYXRjaCIsImRlZmF1bHQiLCJyZXNjb3BlUHJvcHMiLCJyZXNjb3BlU3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDWEE7Ozs7QUFDQTs7OztBQUNBOztLQUF3QkEsTTs7Ozs7O0FBRXhCLGlCQUFNQyxLQUFOLG1CLENBL0JBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7bUJBZ0NlO0FBQ1hBLHlCQURXO0FBRVhDLDJCQUZXO0FBR1hDLHlCQUhXO0FBSVhDLGNBQWNKLE9BQU9JLFNBSlY7QUFLWEMsaUJBQWNMLE9BQU9LLFlBTFY7QUFNWEMsaUJBQWNOLE9BQU9NLFlBTlY7QUFPWEMsY0FBY1AsT0FBT007QUFQVixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQ2Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTRCQSxLQUFJRSxLQUFrQixtQkFBQUMsQ0FBUSxDQUFSLENBQXRCO0FBQUEsS0FDSUMsZUFBa0IsbUJBQUFELENBQVEsQ0FBUixDQUR0QjtBQUFBLEtBRUlFLFVBQWtCLG1CQUFBRixDQUFRLENBQVIsQ0FGdEI7QUFBQSxLQUdNRyxnQkFBZ0IsU0FBaEJBLGFBQWdCLENBQUVDLE1BQUYsRUFB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QWNHLFdBQWQsSUFBNkJILGNBQWN0TixJQUE3RCxJQUFxRSxHQVg3RixXQXVCSnFJLEtBdkJJLEVBdUJHWSxHQXZCSCxDQUFQO0FBd0JIOztTQUdnQjBFLE8sR0FBYnJQLFM7U0FDQUEsUyxHQUFBQSxTO1NBQ0FDLFksR0FBQUEsWTtTQUNnQnFQLFksR0FBaEJyUCxZO1NBQ0FDLFksR0FBQUEsWTtTQUNnQnFQLFksR0FBaEJyUCxZOzs7Ozs7QUN2UkosbUM7Ozs7OztBQ0FBLHdDIiwiZmlsZSI6ImRpc3QvUmVTY29wZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBlNzVjOWM2NDFiNTFjOGIwZDQxMSIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpICAyMDE4IFdpc2UgV2lsZCBXZWIgLlxuICpcbiAqICBNSVQgTGljZW5zZVxuICpcbiAqICBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiAgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqICB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiAgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiAgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiAgVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG4gKiAgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqICBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG4gKiAgU09GVFdBUkUuXG4gKlxuICogQGF1dGhvciA6IE5hdGhhbmFlbCBCcmF1blxuICogQGNvbnRhY3QgOiBjYWlwaWxhYnNAZ21haWwuY29tXG4gKi9cblxuaW1wb3J0IFNjb3BlIGZyb20gXCIuL1Njb3BlXCI7XG5pbXBvcnQgU3RvcmUgZnJvbSBcIi4vU3RvcmVcIjtcbmltcG9ydCBSZWFjdFRvb2xzLCAqIGFzIFJUb29scyBmcm9tIFwiLi9SZWFjdFRvb2xzXCI7XG5cblNjb3BlLlN0b3JlID0gU3RvcmU7XG5leHBvcnQgZGVmYXVsdCB7XG4gICAgU3RvcmUsXG4gICAgQ29udGV4dCAgICAgOiBTY29wZSxcbiAgICBTY29wZSxcbiAgICBDb21wb25lbnQgICA6IFJUb29scy5Db21wb25lbnQsXG4gICAgcmVTY29wZVByb3BzOiBSVG9vbHMucmVTY29wZVByb3BzLFxuICAgIHJlU2NvcGVTdGF0ZTogUlRvb2xzLnJlU2NvcGVTdGF0ZSxcbiAgICB3aXRoU2NvcGUgICA6IFJUb29scy5yZVNjb3BlU3RhdGVcbn07XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9SZVNjb3BlLmpzIiwiLypcbiAqIENvcHlyaWdodCAoYykgIDIwMTggV2lzZSBXaWxkIFdlYiAuXG4gKlxuICogIE1JVCBMaWNlbnNlXG4gKlxuICogIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqICBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiAgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqICBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqICBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqICBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcbiAqICBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqICBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiAgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiAgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiAgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiAgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcbiAqICBTT0ZUV0FSRS5cbiAqXG4gKiBAYXV0aG9yIDogTmF0aGFuYWVsIEJyYXVuXG4gKiBAY29udGFjdCA6IGNhaXBpbGFic0BnbWFpbC5jb21cbiAqL1xuXG5cbnZhciBpcyAgICAgICAgICAgICAgPSByZXF1aXJlKCdpcycpLFxuICAgIEV2ZW50RW1pdHRlciAgICA9IHJlcXVpcmUoJy4vRW1pdHRlcicpLFxuICAgIHNob3J0aWQgICAgICAgICA9IHJlcXVpcmUoJ3Nob3J0aWQnKVxuICAgICwgX19wcm90b19fcHVzaCA9ICggdGFyZ2V0LCBpZCwgcGFyZW50ICkgPT4ge1xuICAgICAgICBsZXQgZm4gICAgICAgICAgID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB9O1xuICAgICAgICBmbi5wcm90b3R5cGUgICAgID0gcGFyZW50ID8gbmV3IHBhcmVudFtcIl9cIiArIGlkXSgpIDogdGFyZ2V0W2lkXSB8fCB7fTtcbiAgICAgICAgdGFyZ2V0W2lkXSAgICAgICA9IG5ldyBmbigpO1xuICAgICAgICB0YXJnZXRbJ18nICsgaWRdID0gZm47XG4gICAgfSxcbiAgICBvcGVuU2NvcGVzICAgICAgPSB7fTtcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY29wZSBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gICAgc3RhdGljIHBlcnNpc3RlbmNlVG0gPSAxOy8vIGlmID4gMCwgd2lsbCB3YWl0ICdwZXJzaXN0ZW5jZVRtJyBtcyBiZWZvcmUgZGVzdHJveSB3aGVuIGRpc3Bvc2UgcmVhY2ggMFxuICAgIHN0YXRpYyBTdG9yZSAgICAgICAgID0gbnVsbDtcbiAgICBzdGF0aWMgc2NvcGVzICAgICAgICA9IG9wZW5TY29wZXM7Ly8gYWxsIGFjdGl2ZSBzY29wZXNcbiAgICBcbiAgICBzdGF0aWMgZ2V0U2NvcGUoIHNjb3BlcyApIHtcbiAgICAgICAgbGV0IHNrZXkgPSBpcy5hcnJheShzY29wZXMpID8gc2NvcGVzLnNvcnQoKCBhLCBiICkgPT4ge1xuICAgICAgICAgICAgaWYgKCBhLmZpcnN0bmFtZSA8IGIuZmlyc3RuYW1lICkgcmV0dXJuIC0xO1xuICAgICAgICAgICAgaWYgKCBhLmZpcnN0bmFtZSA+IGIuZmlyc3RuYW1lICkgcmV0dXJuIDE7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfSkuam9pbignOjonKSA6IHNjb3BlcztcbiAgICAgICAgcmV0dXJuIG9wZW5TY29wZXNbc2tleV0gPSBvcGVuU2NvcGVzW3NrZXldIHx8IG5ldyBTY29wZSh7fSwgeyBpZDogc2tleSB9KTtcbiAgICB9O1xuICAgIFxuICAgIC8qKlxuICAgICAqIEluaXQgYSBSZXNjb3BlIHNjb3BlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc3RvcmVzTWFwIHtPYmplY3R9IE9iamVjdCB3aXRoIHRoZSBvcmlnaW4gc3RvcmVzXG4gICAgICogQHBhcmFtIGlkIHtzdHJpbmd9IEBvcHRpb25hbCBpZCAoIGlmIHRoaXMgaWQgZXhpc3Qgc3RvcmVzTWFwIHdpbGwgYmUgbWVyZ2Ugb24gdGhlICdpZCcgc2NvcGUpXG4gICAgICogQHBhcmFtIHBhcmVudFxuICAgICAqIEBwYXJhbSBzdGF0ZVxuICAgICAqIEBwYXJhbSBkYXRhXG4gICAgICogQHBhcmFtIG5hbWVcbiAgICAgKiBAcGFyYW0gZGVmYXVsdE1heExpc3RlbmVyc1xuICAgICAqIEBwYXJhbSBwZXJzaXN0ZW5jZVRtIHtudW1iZXIpIGlmID4gMCwgd2lsbCB3YWl0ICdwZXJzaXN0ZW5jZVRtJyBtcyBiZWZvcmUgZGVzdHJveSB3aGVuIGRpc3Bvc2UgcmVhY2ggMFxuICAgICAqIEBwYXJhbSBhdXRvRGVzdHJveSAge2Jvb2x9IHdpbGwgdHJpZ2dlciByZXRhaW4gJiBkaXNwb3NlIGFmdGVyIHN0YXJ0XG4gICAgICogQHJldHVybnMge1Njb3BlfVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKCBzdG9yZXNNYXAsIHsgaWQsIHBhcmVudCwgc3RhdGUsIGRhdGEsIG5hbWUsIGluY3JlbWVudElkLCBkZWZhdWx0TWF4TGlzdGVuZXJzLCBwZXJzaXN0ZW5jZVRtLCBhdXRvRGVzdHJveSwgcm9vdEVtaXR0ZXIgfSA9IHt9ICkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fbWF4TGlzdGVuZXJzID0gZGVmYXVsdE1heExpc3RlbmVycyB8fCB0aGlzLmNvbnN0cnVjdG9yLmRlZmF1bHRNYXhMaXN0ZW5lcnM7XG4gICAgICAgIGlkICAgICAgICAgICAgICAgICA9IGlkIHx8IChcIl9fX19fXCIgKyBzaG9ydGlkLmdlbmVyYXRlKCkpO1xuICAgICAgICBpZiAoIG9wZW5TY29wZXNbaWRdICYmICFpbmNyZW1lbnRJZCApIHtcbiAgICAgICAgICAgIHRoaXMuX2lkID0gaWQ7XG4gICAgICAgICAgICBvcGVuU2NvcGVzW2lkXS5yZWdpc3RlcihzdG9yZXNNYXApO1xuICAgICAgICAgICAgcmV0dXJuIG9wZW5TY29wZXNbaWRdXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoIG9wZW5TY29wZXNbaWRdICYmIGluY3JlbWVudElkICkge1xuICAgICAgICAgICAgbGV0IGkgPSAtMTtcbiAgICAgICAgICAgIHdoaWxlICggb3BlblNjb3Blc1tpZCArICcvJyArICgrK2kpXSApIDtcbiAgICAgICAgICAgIGlkID0gaWQgKyAnLycgKyBpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9pZCAgICAgICAgICAgID0gaWQ7XG4gICAgICAgIG9wZW5TY29wZXNbaWRdICAgICAgPSB0aGlzO1xuICAgICAgICB0aGlzLl9pc0xvY2FsSWQgICAgID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fcGVyc2lzdGVuY2VUbSA9IHBlcnNpc3RlbmNlVG0gfHwgdGhpcy5jb25zdHJ1Y3Rvci5wZXJzaXN0ZW5jZVRtO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5zdG9yZXMgPSB7fTtcbiAgICAgICAgdGhpcy5zdGF0ZSAgPSB7fTtcbiAgICAgICAgdGhpcy5kYXRhICAgPSB7fTtcbiAgICAgICAgXG4gICAgICAgIGlmICggcGFyZW50ICYmIHBhcmVudC5kZWFkIClcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbid0IHVzZSBhIGRlYWQgc2NvcGUgYXMgcGFyZW50ICFcIik7XG4gICAgICAgIFxuICAgICAgICBfX3Byb3RvX19wdXNoKHRoaXMsICdzdG9yZXMnLCBwYXJlbnQpO1xuICAgICAgICBfX3Byb3RvX19wdXNoKHRoaXMsICdzdGF0ZScsIHBhcmVudCk7XG4gICAgICAgIF9fcHJvdG9fX3B1c2godGhpcywgJ2RhdGEnLCBwYXJlbnQpO1xuICAgICAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICB0aGlzLnNvdXJjZXMgICAgICAgICAgPSBbXTtcbiAgICAgICAgdGhpcy5fY2hpbGRTY29wZXMgICAgID0gW107XG4gICAgICAgIHRoaXMuX2NoaWxkU2NvcGVzTGlzdCA9IFtdO1xuICAgICAgICB0aGlzLl91blN0YWJsZUNoaWxkcyAgPSAwO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fX3JldGFpbnMgICA9IHsgYWxsOiAwIH07XG4gICAgICAgIHRoaXMuX19sb2NrcyAgICAgPSB7IGFsbDogMSB9O1xuICAgICAgICB0aGlzLl9fbGlzdGVuaW5nID0ge307XG4gICAgICAgIHRoaXMuX19zY29wZSAgICAgPSB7fTtcbiAgICAgICAgdGhpcy5fX21peGVkICAgICA9IFtdO1xuICAgICAgICB0aGlzLl9fbWl4ZWRMaXN0ID0gW107XG4gICAgICAgIHRoaXMuX2ZvbGxvd2VycyAgPSBbXTtcbiAgICAgICAgaWYgKCBwYXJlbnQgKSB7XG4gICAgICAgICAgICBwYXJlbnQucmV0YWluKFwiaXNNeVBhcmVudFwiKTtcbiAgICAgICAgICAgIGlmICggIXJvb3RFbWl0dGVyICkge1xuICAgICAgICAgICAgICAgICFwYXJlbnQuX3N0YWJsZSAmJiB0aGlzLndhaXQoXCJ3YWl0aW5nUGFyZW50XCIpO1xuICAgICAgICAgICAgICAgIHBhcmVudC5vbih0aGlzLl9fcGFyZW50TGlzdCA9IHtcbiAgICAgICAgICAgICAgICAgICAgJ3N0YWJsZScgIDogcyA9PiB0aGlzLnJlbGVhc2UoXCJ3YWl0aW5nUGFyZW50XCIpLFxuICAgICAgICAgICAgICAgICAgICAndW5zdGFibGUnOiBzID0+IHRoaXMud2FpdChcIndhaXRpbmdQYXJlbnRcIiksXG4gICAgICAgICAgICAgICAgICAgICd1cGRhdGUnICA6IHMgPT4gdGhpcy5fcHJvcGFnKClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhcmVudC5vbih0aGlzLl9fcGFyZW50TGlzdCA9IHtcbiAgICAgICAgICAgICAgICAgICAgJ3VwZGF0ZSc6IHMgPT4gdGhpcy5fcHJvcGFnKClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHRoaXMucmVnaXN0ZXIocGFyZW50Ll9fc2NvcGUsIHN0YXRlLCBkYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIHRoaXMucmVnaXN0ZXIoc3RvcmVzTWFwLCBzdGF0ZSwgZGF0YSk7XG4gICAgICAgIHRoaXMuX19sb2Nrcy5hbGwtLTtcbiAgICAgICAgdGhpcy5fc3RhYmxlID0gIXRoaXMuX19sb2Nrcy5hbGw7XG4gICAgICAgIFxuICAgICAgICBpZiAoIHBhcmVudCApIHtcbiAgICAgICAgICAgIHBhcmVudC5fYWRkQ2hpbGQodGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCBhdXRvRGVzdHJveSApXG4gICAgICAgICAgICBzZXRUaW1lb3V0KFxuICAgICAgICAgICAgICAgIHRtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXRhaW4oXCJhdXRvRGVzdHJveVwiKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNwb3NlKFwiYXV0b0Rlc3Ryb3lcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKVxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBAZGVwcmVjYXRlZFxuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqL1xuICAgIGdldCBkYXRhcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBNb3VudCB0aGUgc3RvcmVzIGluIHN0b3Jlc0xpc3QsIGluIHRoaXMgc2NvcGUgb3IgaW4gaXRzIHBhcmVudHMgb3IgbWl4ZWQgc2NvcGVzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc3RvcmVzTGlzdCB7c3RyaW5nfHN0b3JlUmVmfSBTdG9yZSBuYW1lLCBBcnJheSBvZiBTdG9yZSBuYW1lcywgb3IgUmVzY29wZSBzdG9yZSByZWYgZnJvbSBTdG9yZTo6YXMgb3JcbiAgICAgKiAgICAgU3RvcmU6YXNcbiAgICAgKiBAcGFyYW0gc3RhdGVcbiAgICAgKiBAcGFyYW0gZGF0YVxuICAgICAqIEByZXR1cm5zIHtTY29wZX1cbiAgICAgKi9cbiAgICBtb3VudCggc3RvcmVzTGlzdCwgc3RhdGUsIGRhdGEgKSB7XG4gICAgICAgIGlmICggaXMuYXJyYXkoc3RvcmVzTGlzdCkgKSB7XG4gICAgICAgICAgICBzdG9yZXNMaXN0LmZvckVhY2goayA9PiB0aGlzLl9tb3VudChrLCBzdGF0ZSAmJiBzdGF0ZVtrXSwgZGF0YSAmJiBkYXRhW2tdKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9tb3VudCguLi5hcmd1bWVudHMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBcbiAgICBfbW91bnQoIGlkLCBzdGF0ZSwgZGF0YSApIHtcbiAgICAgICAgaWYgKCB0eXBlb2YgaWQgIT09ICdzdHJpbmcnICkge1xuICAgICAgICAgICAgdGhpcy5yZWdpc3Rlcih7IFtpZC5uYW1lXTogaWQuc3RvcmUgfSk7XG4gICAgICAgICAgICBpZCA9IGlkLm5hbWU7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmICggIXRoaXMuX19zY29wZVtpZF0gKSB7Ly9hc2sgbWl4ZWQgfHwgcGFyZW50XG4gICAgICAgICAgICBpZiAoIHRoaXMuX19taXhlZC5yZWR1Y2UoKCBtb3VudGVkLCBjdHggKSA9PiAobW91bnRlZCB8fCBjdHguX21vdW50KGlkLCBzdGF0ZSwgZGF0YSkpLCBmYWxzZSkgfHxcbiAgICAgICAgICAgICAgICAhdGhpcy5wYXJlbnQgKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcmVudC5fbW91bnQoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgc3RvcmUgPSB0aGlzLl9fc2NvcGVbaWRdLCBjdHg7XG4gICAgICAgIGlmICggaXMuZm4oc3RvcmUpICkge1xuICAgICAgICAgICAgdGhpcy5fX3Njb3BlW2lkXSA9IG5ldyBzdG9yZSh0aGlzLCB7IHN0YXRlLCBkYXRhIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKCBzdGF0ZSAhPT0gdW5kZWZpbmVkICYmIGRhdGEgPT09IHVuZGVmaW5lZCApXG4gICAgICAgICAgICAgICAgc3RvcmUuc2V0U3RhdGUoc3RhdGUpO1xuICAgICAgICAgICAgZWxzZSBpZiAoIHN0YXRlICE9PSB1bmRlZmluZWQgKVxuICAgICAgICAgICAgICAgIHN0b3JlLnN0YXRlID0gc3RhdGU7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmICggZGF0YSAhPT0gdW5kZWZpbmVkIClcbiAgICAgICAgICAgICAgICBzdG9yZS5wdXNoKGRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgdGhpcy5fd2F0Y2hTdG9yZShpZCk7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gdGhpcy5fX3Njb3BlW2lkXTtcbiAgICB9XG4gICAgXG4gICAgX3dhdGNoU3RvcmUoIGlkLCBzdGF0ZSwgZGF0YSApIHtcbiAgICAgICAgaWYgKCAhdGhpcy5fX3Njb3BlW2lkXSApIHsvL2FzayBtaXhlZCB8fCBwYXJlbnRcbiAgICAgICAgICAgIGlmICggdGhpcy5fX21peGVkLnJlZHVjZSgoIG1vdW50ZWQsIGN0eCApID0+IChtb3VudGVkIHx8IGN0eC5fd2F0Y2hTdG9yZShpZCwgc3RhdGUsIGRhdGEpKSwgZmFsc2UpIHx8XG4gICAgICAgICAgICAgICAgIXRoaXMucGFyZW50IClcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJlbnQuX3dhdGNoU3RvcmUoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoICF0aGlzLl9fbGlzdGVuaW5nW2lkXSAmJiAhaXMuZm4odGhpcy5fX3Njb3BlW2lkXSkgKSB7XG4gICAgICAgICAgICB0aGlzLl9fc2NvcGVbaWRdLnJldGFpbihcInNjb3BlZFwiKTtcbiAgICAgICAgICAgICF0aGlzLl9fc2NvcGVbaWRdLmlzU3RhYmxlKCkgJiYgdGhpcy53YWl0KGlkKTtcbiAgICAgICAgICAgIHRoaXMuX19zY29wZVtpZF0ub24oXG4gICAgICAgICAgICAgICAgdGhpcy5fX2xpc3RlbmluZ1tpZF0gPSB7XG4gICAgICAgICAgICAgICAgICAgICdkZXN0cm95JyA6IHMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuX19saXN0ZW5pbmdbaWRdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fX3Njb3BlW2lkXSA9IHRoaXMuX19zY29wZVtpZF0uY29uc3RydWN0b3I7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICd1cGRhdGUnICA6IHMgPT4gdGhpcy5wcm9wYWcoKSxcbiAgICAgICAgICAgICAgICAgICAgJ3N0YWJsZScgIDogcyA9PiB0aGlzLnJlbGVhc2UoaWQpLFxuICAgICAgICAgICAgICAgICAgICAndW5zdGFibGUnOiBzID0+IHRoaXMud2FpdChpZClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogTWl4IHRhcmdldEN0eCBvbiB0aGlzIHNjb3BlXG4gICAgICogTWl4ZWQgc2NvcGUgcGFyZW50cyBhcmUgTk9UIG1hcHBlZFxuICAgICAqIEBwYXJhbSB0YXJnZXRDdHhcbiAgICAgKi9cbiAgICBtaXhpbiggdGFyZ2V0Q3R4ICkge1xuICAgICAgICBsZXQgcGFyZW50ID0gdGhpcy5wYXJlbnQsIGxpc3RzO1xuICAgICAgICB0aGlzLl9fbWl4ZWQucHVzaCh0YXJnZXRDdHgpXG4gICAgICAgIHRhcmdldEN0eC5yZXRhaW4oXCJtaXhlZFRvXCIpO1xuICAgICAgICBpZiAoICF0YXJnZXRDdHguX3N0YWJsZSApXG4gICAgICAgICAgICB0aGlzLndhaXQodGFyZ2V0Q3R4Ll9pZCk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9fbWl4ZWRMaXN0LnB1c2gobGlzdHMgPSB7XG4gICAgICAgICAgICAnc3RhYmxlJyAgOiBzID0+IHRoaXMucmVsZWFzZSh0YXJnZXRDdHguX2lkKSxcbiAgICAgICAgICAgICd1bnN0YWJsZSc6IHMgPT4gdGhpcy53YWl0KHRhcmdldEN0eC5faWQpLFxuICAgICAgICAgICAgJ3VwZGF0ZScgIDogcyA9PiB0aGlzLl9wcm9wYWcoKVxuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuc3RvcmVzID0ge307XG4gICAgICAgIHRoaXMuc3RhdGUgID0ge307XG4gICAgICAgIHRoaXMuZGF0YSAgID0ge307XG4gICAgICAgIHRhcmdldEN0eC5vbihsaXN0cyk7XG4gICAgICAgIF9fcHJvdG9fX3B1c2godGhpcywgJ3N0b3JlcycsIHBhcmVudCk7XG4gICAgICAgIF9fcHJvdG9fX3B1c2godGhpcywgJ3N0YXRlJywgcGFyZW50KTtcbiAgICAgICAgX19wcm90b19fcHVzaCh0aGlzLCAnZGF0YScsIHBhcmVudCk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLnJlbGluayh0aGlzLl9fc2NvcGUsIHRoaXMsIGZhbHNlLCB0cnVlKTtcbiAgICAgICAgdGhpcy5fX21peGVkLmZvckVhY2goXG4gICAgICAgICAgICBjdHggPT4ge1xuICAgICAgICAgICAgICAgIF9fcHJvdG9fX3B1c2godGhpcywgJ3N0b3JlcycpO1xuICAgICAgICAgICAgICAgIF9fcHJvdG9fX3B1c2godGhpcywgJ3N0YXRlJyk7XG4gICAgICAgICAgICAgICAgX19wcm90b19fcHVzaCh0aGlzLCAnZGF0YScpO1xuICAgICAgICAgICAgICAgIGN0eC5yZWxpbmsoY3R4Ll9fc2NvcGUsIHRoaXMsIHRydWUsIHRydWUpXG4gICAgICAgICAgICB9XG4gICAgICAgIClcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogUmVnaXN0ZXIgc3RvcmVzIGluIHN0b3Jlc01hcCAmIGxpbmsgdGhlbSBpbiB0aGUgcHJvdG9zXG4gICAgICogQHBhcmFtIHN0b3Jlc01hcFxuICAgICAqIEBwYXJhbSBzdGF0ZVxuICAgICAqIEBwYXJhbSBkYXRhXG4gICAgICovXG4gICAgcmVnaXN0ZXIoIHN0b3Jlc01hcCwgc3RhdGUgPSB7fSwgZGF0YSA9IHt9ICkge1xuICAgICAgICB0aGlzLnJlbGluayhzdG9yZXNNYXAsIHRoaXMsIGZhbHNlLCBmYWxzZSk7XG4gICAgICAgIE9iamVjdC5rZXlzKHN0b3Jlc01hcCkuZm9yRWFjaChcbiAgICAgICAgICAgIGlkID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIHN0b3Jlc01hcFtpZF0uc2luZ2xldG9uIHx8IChpcy5mbihzdG9yZXNNYXBbaWRdKSAmJiAoc3RhdGVbaWRdIHx8IGRhdGFbaWRdKSkgKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX21vdW50KGlkLCBzdGF0ZVtpZF0sIGRhdGFbaWRdKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICggc3RhdGVbaWRdIHx8IGRhdGFbaWRdICkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIGRhdGFbaWRdICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBzdGF0ZVtpZF0gKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcmVzW2lkXS5zdGF0ZSA9IHN0YXRlW2lkXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcmVzW2lkXS5wdXNoKGRhdGFbaWRdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICggc3RhdGVbaWRdICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9yZXNbaWRdLnNldFN0YXRlKHN0YXRlW2lkXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3dhdGNoU3RvcmUoaWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgICAgICBcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogTWFwIHNyY0N0eCBzdG9yZSdzIG9uIHRhcmdldEN0eCBoZWFkZXJzIHByb3RvJ3NcbiAgICAgKiBAcGFyYW0gc3JjQ3R4XG4gICAgICogQHBhcmFtIHRhcmdldEN0eFxuICAgICAqIEBwYXJhbSBzdGF0ZVxuICAgICAqIEBwYXJhbSBkYXRhXG4gICAgICovXG4gICAgcmVsaW5rKCBzcmNDdHgsIHRhcmdldEN0eCA9IHRoaXMsIGV4dGVybmFsLCBmb3JjZSApIHtcbiAgICAgICAgbGV0IGxjdHggPSB0YXJnZXRDdHguX3N0b3Jlcy5wcm90b3R5cGU7XG4gICAgICAgIE9iamVjdC5rZXlzKHNyY0N0eClcbiAgICAgICAgICAgICAgLmZvckVhY2goXG4gICAgICAgICAgICAgICAgICBpZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKCAhZm9yY2UgJiYgdGFyZ2V0Q3R4Ll9fc2NvcGVbaWRdID09PSBzcmNDdHhbaWRdIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldEN0eC5fX3Njb3BlW2lkXSAmJiAodGFyZ2V0Q3R4Ll9fc2NvcGVbaWRdLmNvbnN0cnVjdG9yID09PSBzcmNDdHhbaWRdKSApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoICFmb3JjZSAmJiB0YXJnZXRDdHguX19zY29wZVtpZF0gKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmICggIWV4dGVybmFsICYmICFpcy5mbih0YXJnZXRDdHguX19zY29wZVtpZF0pICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5pbmZvKFwiUmVzY29wZSBTdG9yZSA6IFwiLCBpZCwgXCIgYWxyZWFkeSBleGlzdCBpbiB0aGlzIHNjb3BlICEgKCB0cnkgX19wcm90b19fIGhvdCBwYXRjaCApXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0Q3R4Ll9fc2NvcGVbaWRdLl9fcHJvdG9fXyA9IHNyY0N0eFtpZF0ucHJvdG90eXBlO1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCAhZXh0ZXJuYWwgJiYgaXMuZm4odGFyZ2V0Q3R4Ll9fc2NvcGVbaWRdKSApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRDdHguX19zY29wZVtpZF0gPSBzcmNDdHhbaWRdO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICggIWZvcmNlICYmICFleHRlcm5hbCApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX19zY29wZVtpZF0gPSBzcmNDdHhbaWRdO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGN0eCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldDogKCkgPT4gdGhpcy5fX3Njb3BlW2lkXVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldEN0eC5fc3RhdGUucHJvdG90eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0OiAoKSA9PiAodGhpcy5fX3Njb3BlW2lkXSAmJiB0aGlzLl9fc2NvcGVbaWRdLnN0YXRlKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldDogKCB2ICkgPT4gKHRoaXMuX21vdW50KGlkLCB2KSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRDdHguX2RhdGEucHJvdG90eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0OiAoKSA9PiAodGhpcy5fX3Njb3BlW2lkXSAmJiB0aGlzLl9fc2NvcGVbaWRdLmRhdGEpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0OiAoIHYgKSA9PiAodGhpcy5fbW91bnQoaWQsIHVuZGVmaW5lZCwgdikpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICApXG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIEJpbmQgc3RvcmVzIGZyb20gdGhpcyBzY29wZSwgaGlzIHBhcmVudHMgYW5kIG1peGVkIHNjb3BlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gb2JqIHtSZWFjdC5Db21wb25lbnR8U3RvcmV8ZnVuY3Rpb259XG4gICAgICogQHBhcmFtIGtleSB7c3RyaW5nfSBzdG9yZXMga2V5cyB0byBiaW5kIHVwZGF0ZXNcbiAgICAgKiBAcGFyYW0gYXNcbiAgICAgKiBAcGFyYW0gc2V0SW5pdGlhbCB7Ym9vbH0gZmFsc2UgdG8gbm90IHByb3BhZyBpbml0aWFsIHZhbHVlIChkZWZhdWx0IDogdHJ1ZSlcbiAgICAgKi9cbiAgICBiaW5kKCBvYmosIGtleSwgYXMsIHNldEluaXRpYWwgPSB0cnVlICkge1xuICAgICAgICBsZXQgbGFzdFJldnMsIGRhdGEsIHJlS2V5O1xuICAgICAgICBpZiAoIGtleSAmJiAhaXMuYXJyYXkoa2V5KSApXG4gICAgICAgICAgICBrZXkgPSBba2V5XTtcbiAgICAgICAgXG4gICAgICAgIGlmICggYXMgPT09IGZhbHNlIHx8IGFzID09PSB0cnVlICkge1xuICAgICAgICAgICAgc2V0SW5pdGlhbCA9IGFzO1xuICAgICAgICAgICAgYXMgICAgICAgICA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJlS2V5ID0ga2V5Lm1hcChpZCA9PiAoaXMuc3RyaW5nKGlkKSA/IGlkIDogaWQubmFtZSkpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fZm9sbG93ZXJzLnB1c2goXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgb2JqLFxuICAgICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgICBhcyB8fCB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgbGFzdFJldnMgPSByZUtleSAmJiByZUtleS5yZWR1Y2UoKCByZXZzLCBpZCApID0+IChyZXZzW2lkXSA9IDAsIHJldnMpLCB7fSlcbiAgICAgICAgICAgIF0pO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5tb3VudChrZXkpO1xuICAgICAgICBcbiAgICAgICAgaWYgKCBzZXRJbml0aWFsICYmIHRoaXMuX3N0YWJsZSApIHtcbiAgICAgICAgICAgIGRhdGEgPSB0aGlzLmdldFVwZGF0ZXMobGFzdFJldnMpO1xuICAgICAgICAgICAgaWYgKCAhZGF0YSApIHJldHVybjtcbiAgICAgICAgICAgIGlmICggdHlwZW9mIG9iaiAhPSBcImZ1bmN0aW9uXCIgKSB7XG4gICAgICAgICAgICAgICAgaWYgKCBhcyApIG9iai5zZXRTdGF0ZSh7IFthc106IGRhdGEgfSk7XG4gICAgICAgICAgICAgICAgZWxzZSBvYmouc2V0U3RhdGUoZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBvYmooZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIFVuIGJpbmQgdGhpcyBzY29wZSBvZmYgdGhlIGdpdmVuIGNvbXBvbmVudC1rZXlzXG4gICAgICogQHBhcmFtIG9ialxuICAgICAqIEBwYXJhbSBrZXlcbiAgICAgKiBAcmV0dXJucyB7QXJyYXkuPCo+fVxuICAgICAqL1xuICAgIHVuQmluZCggb2JqLCBrZXksIGFzICkge1xuICAgICAgICB2YXIgZm9sbG93ZXJzID0gdGhpcy5fZm9sbG93ZXJzLFxuICAgICAgICAgICAgaSAgICAgICAgID0gZm9sbG93ZXJzICYmIGZvbGxvd2Vycy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggZm9sbG93ZXJzICYmIGktLSApXG4gICAgICAgICAgICBpZiAoIGZvbGxvd2Vyc1tpXVswXSA9PT0gb2JqICYmICgnJyArIGZvbGxvd2Vyc1tpXVsxXSkgPT0gKCcnICsga2V5KSAmJlxuICAgICAgICAgICAgICAgIGZvbGxvd2Vyc1tpXVsyXSA9PSBhcyApXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZvbGxvd2Vycy5zcGxpY2UoaSwgMSk7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIE1vdW50IHRoZSBzdG9yZXMgaW4gc3RvcmVzTGlzdCBmcm9tIHRoaXMgc2NvcGUsIGl0cyBwYXJlbnRzIGFuZCBtaXhlZCBzY29wZVxuICAgICAqIEJpbmQgdGhlbSB0byAndG8nXG4gICAgICogSG9vayAndG8nIHNvIGl0IHdpbGwgYXV0byB1bmJpbmQgb24gJ2Rlc3Ryb3knIG9yICdjb21wb25lbnRXaWxsVW5tb3VudCdcbiAgICAgKiBAcGFyYW0gdG9cbiAgICAgKiBAcGFyYW0gc3RvcmVzTGlzdFxuICAgICAqIEBwYXJhbSBiaW5kXG4gICAgICogQHJldHVybnMge09iamVjdH0gSW5pdGlhbCBvdXRwdXRzIG9mIHRoZSBzdG9yZXMgaW4gJ3N0b3Jlc0xpc3QnXG4gICAgICovXG4gICAgbWFwKCB0bywgc3RvcmVzTGlzdCwgYmluZCA9IHRydWUgKSB7XG4gICAgICAgIGxldCBTdG9yZSAgPSB0aGlzLmNvbnN0cnVjdG9yLlN0b3JlO1xuICAgICAgICBzdG9yZXNMaXN0ID0gaXMuYXJyYXkoc3RvcmVzTGlzdCkgPyBzdG9yZXNMaXN0IDogW3N0b3Jlc0xpc3RdO1xuICAgICAgICB0aGlzLm1vdW50KHN0b3Jlc0xpc3QpO1xuICAgICAgICBpZiAoIGJpbmQgJiYgdG8gaW5zdGFuY2VvZiBTdG9yZSApIHtcbiAgICAgICAgICAgIFN0b3JlLm1hcCh0bywgc3RvcmVzTGlzdCwgdGhpcywgdGhpcywgZmFsc2UpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoIGJpbmQgKSB7XG4gICAgICAgICAgICB0aGlzLmJpbmQodG8sIHN0b3Jlc0xpc3QsIHVuZGVmaW5lZCwgZmFsc2UpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBsZXQgbWl4ZWRDV1VubW91bnQsXG4gICAgICAgICAgICAgICAgdW5Nb3VudEtleSA9IHRvLmlzUmVhY3RDb21wb25lbnQgPyBcImNvbXBvbmVudFdpbGxVbm1vdW50XCIgOiBcImRlc3Ryb3lcIjtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKCB0by5oYXNPd25Qcm9wZXJ0eSh1bk1vdW50S2V5KSApIHtcbiAgICAgICAgICAgICAgICBtaXhlZENXVW5tb3VudCA9IHRvW3VuTW91bnRLZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB0b1t1bk1vdW50S2V5XSA9ICggLi4uYXJneiApID0+IHtcbiAgICAgICAgICAgICAgICBkZWxldGUgdG9bdW5Nb3VudEtleV07XG4gICAgICAgICAgICAgICAgaWYgKCBtaXhlZENXVW5tb3VudCApXG4gICAgICAgICAgICAgICAgICAgIHRvW3VuTW91bnRLZXldID0gbWl4ZWRDV1VubW91bnQ7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdGhpcy51bkJpbmQodG8sIHN0b3Jlc0xpc3QpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0b1t1bk1vdW50S2V5XSAmJiB0b1t1bk1vdW50S2V5XSguLi5hcmd6KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdG9yZXNMaXN0LnJlZHVjZSgoIGRhdGEsIGlkICkgPT4ge1xuICAgICAgICAgICAgaWYgKCAhaXMuc3RyaW5nKGlkKSApXG4gICAgICAgICAgICAgICAgaWQgPSBpZC5uYW1lO1xuICAgICAgICAgICAgaWQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSBpZC5zcGxpdCgnOicpOy8vQHRvZG9cbiAgICAgICAgICAgIGlkWzBdICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID0gaWRbMF0uc3BsaXQoJy4nKTtcbiAgICAgICAgICAgIGRhdGFbaWRbMV0gfHwgaWRbMF1baWRbMF0ubGVuZ3RoIC0gMV1dID0gdGhpcy5zdG9yZXNbaWRbMF1bMF1dICYmIHRoaXMuc3RvcmVzW2lkWzBdWzBdXS5yZXRyaWV2ZSAmJiB0aGlzLnN0b3Jlc1tpZFswXVswXV0ucmV0cmlldmUoaWRbMF0uc3BsaWNlKDEpKTtcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9LCB7fSk7XG4gICAgfVxuICAgIFxuICAgIHJldHJpZXZlKCBwYXRoID0gXCJcIiApIHtcbiAgICAgICAgcGF0aCA9IGlzLnN0cmluZyhwYXRoKSA/IHBhdGguc3BsaXQoJy4nKSA6IHBhdGg7XG4gICAgICAgIHJldHVybiBwYXRoICYmIHRoaXMuc3RvcmVzW3BhdGhbMF1dICYmXG4gICAgICAgICAgICB0aGlzLnN0b3Jlc1twYXRoWzBdXS5yZXRyaWV2ZShwYXRoLnNwbGljZSgxKSk7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIEdldCBvciB1cGRhdGUgc3RvcmVzUmV2TWFwJ3MgcmV2aXNpb25zXG4gICAgICogQHBhcmFtIHN0b3Jlc1Jldk1hcFxuICAgICAqIEBwYXJhbSBsb2NhbFxuICAgICAqIEByZXR1cm5zIHt7fX1cbiAgICAgKi9cbiAgICBnZXRTdG9yZXNSZXZzKCBzdG9yZXNSZXZNYXAgPSB7fSwgbG9jYWwgKSB7XG4gICAgICAgIGxldCBjdHggPSB0aGlzLl9fc2NvcGU7XG4gICAgICAgIGlmICggIXN0b3Jlc1Jldk1hcCApIHtcbiAgICAgICAgICAgIHN0b3Jlc1Jldk1hcCA9IHt9O1xuICAgICAgICB9XG4gICAgICAgIE9iamVjdC5rZXlzKGN0eCkuZm9yRWFjaChcbiAgICAgICAgICAgIGlkID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoICFpcy5mbihjdHhbaWRdKVxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICBzdG9yZXNSZXZNYXBbaWRdID0gY3R4W2lkXS5fcmV2O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICggIXN0b3Jlc1Jldk1hcC5oYXNPd25Qcm9wZXJ0eShpZCkgKVxuICAgICAgICAgICAgICAgICAgICBzdG9yZXNSZXZNYXBbaWRdID0gZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgaWYgKCAhbG9jYWwgKSB7XG4gICAgICAgICAgICB0aGlzLl9fbWl4ZWQucmVkdWNlKCggdXBkYXRlZCwgY3R4ICkgPT4gKGN0eC5nZXRTdG9yZXNSZXZzKHN0b3Jlc1Jldk1hcCksIHN0b3Jlc1Jldk1hcCksIHN0b3Jlc1Jldk1hcCk7XG4gICAgICAgICAgICB0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC5nZXRTdG9yZXNSZXZzKHN0b3Jlc1Jldk1hcCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0b3Jlc1Jldk1hcDtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogR2V0IG9yIHVwZGF0ZSBvdXRwdXQgYmFzaW5nIHN0b3Jlc1Jldk1hcCdzIHJldmlzaW9ucy5cbiAgICAgKiBJZiBhIHN0b3JlIGluICdzdG9yZXNSZXZNYXAnIGlzIHVwZGF0ZWQ7IGFkZCBpdCB0byAnb3V0cHV0J1xuICAgICAqIEBwYXJhbSBzdG9yZXNSZXZNYXBcbiAgICAgKiBAcGFyYW0gb3V0cHV0XG4gICAgICogQHBhcmFtIHVwZGF0ZWRcbiAgICAgKiBAcmV0dXJucyB7Knx7fX1cbiAgICAgKi9cbiAgICBnZXRVcGRhdGVzKCBzdG9yZXNSZXZNYXAsIG91dHB1dCwgdXBkYXRlZCApIHtcbiAgICAgICAgbGV0IGN0eCA9IHRoaXMuX19zY29wZTtcbiAgICAgICAgXG4gICAgICAgIG91dHB1dCA9IG91dHB1dCB8fCB7fTtcbiAgICAgICAgT2JqZWN0LmtleXMoY3R4KS5mb3JFYWNoKFxuICAgICAgICAgICAgaWQgPT4ge1xuICAgICAgICAgICAgICAgIGlmICggIW91dHB1dC5oYXNPd25Qcm9wZXJ0eShpZCkgJiYgIWlzLmZuKGN0eFtpZF0pXG4gICAgICAgICAgICAgICAgICAgICYmICghc3RvcmVzUmV2TWFwXG4gICAgICAgICAgICAgICAgICAgICAgICB8fCAoc3RvcmVzUmV2TWFwLmhhc093blByb3BlcnR5KGlkKSAmJiBzdG9yZXNSZXZNYXBbaWRdID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgICAgICB8fCAhKCFzdG9yZXNSZXZNYXAuaGFzT3duUHJvcGVydHkoaWQpIHx8IGN0eFtpZF0uX3JldiA8PSBzdG9yZXNSZXZNYXBbaWRdKSlcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZWQgICAgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBvdXRwdXRbaWRdID0gdGhpcy5kYXRhW2lkXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBzdG9yZXNSZXZNYXAgJiYgc3RvcmVzUmV2TWFwLmhhc093blByb3BlcnR5KGlkKSApXG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9yZXNSZXZNYXBbaWRdID0gY3R4W2lkXS5fcmV2O1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHVwZGF0ZWQgPSB0aGlzLl9fbWl4ZWQucmVkdWNlKCggdXBkYXRlZCwgY3R4ICkgPT4gKGN0eC5nZXRVcGRhdGVzKHN0b3Jlc1Jldk1hcCwgb3V0cHV0LCB1cGRhdGVkKSB8fCB1cGRhdGVkKSwgdXBkYXRlZCk7XG4gICAgICAgIHVwZGF0ZWQgPSB0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC5nZXRVcGRhdGVzKHN0b3Jlc1Jldk1hcCwgb3V0cHV0LCB1cGRhdGVkKSB8fCB1cGRhdGVkO1xuICAgICAgICByZXR1cm4gdXBkYXRlZCAmJiBvdXRwdXQ7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIGZsYWdzX3N0YXRlc1xuICAgICAqIEBwYXJhbSBmbGFnc19kYXRhXG4gICAgICogQHJldHVybnMge3tzdGF0ZToge30sIGRhdGE6IHt9fX1cbiAgICAgKi9cbiAgICBzZXJpYWxpemUoIGZsYWdzX3N0YXRlcyA9IC8uKi8sIGZsYWdzX2RhdGEgPSAvLiovICkge1xuICAgICAgICBsZXQgY3R4ID0gdGhpcy5fX3Njb3BlLCBvdXRwdXQgPSB7IHN0YXRlOiB7fSwgZGF0YToge30gfSxcbiAgICAgICAgICAgIF9mbGFnc19zdGF0ZXMsXG4gICAgICAgICAgICBfZmxhZ3NfZGF0YTtcbiAgICAgICAgaWYgKCBpcy5hcnJheShmbGFnc19zdGF0ZXMpIClcbiAgICAgICAgICAgIGZsYWdzX3N0YXRlcy5mb3JFYWNoKGlkID0+IChvdXRwdXQuc3RhdGVbaWRdID0gdGhpcy5zdGF0ZVtpZF0pKTtcbiAgICAgICAgXG4gICAgICAgIGlmICggaXMuYXJyYXkoZmxhZ3NfZGF0YSkgKVxuICAgICAgICAgICAgZmxhZ3NfZGF0YS5mb3JFYWNoKGlkID0+IChvdXRwdXQuZGF0YVtpZF0gPSB0aGlzLmRhdGFbaWRdKSk7XG4gICAgICAgIFxuICAgICAgICBpZiAoICFpcy5hcnJheShmbGFnc19kYXRhKSAmJiAhaXMuYXJyYXkoZmxhZ3Nfc3RhdGVzKSApXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhjdHgpLmZvckVhY2goXG4gICAgICAgICAgICAgICAgaWQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIGlzLmZuKGN0eFtpZF0pIClcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGxldCBmbGFncyA9IGN0eFtpZF0uY29uc3RydWN0b3IuZmxhZ3M7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBmbGFncyA9IGlzLmFycmF5KGZsYWdzKSA/IGZsYWdzIDogW2ZsYWdzIHx8IFwiXCJdO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBmbGFncy5yZWR1Y2UoKCByLCBmbGFnICkgPT4gKHIgfHwgZmxhZ3Nfc3RhdGVzLnRlc3QoZmxhZykpLCBmYWxzZSkgKVxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0LnN0YXRlW2lkXSA9IHRoaXMuc3RhdGVbaWRdO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBmbGFncy5yZWR1Y2UoKCByLCBmbGFnICkgPT4gKHIgfHwgZmxhZ3NfZGF0YS50ZXN0KGZsYWcpKSwgZmFsc2UpIClcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dC5kYXRhW2lkXSA9IHRoaXMuZGF0YVtpZF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKVxuICAgICAgICByZXR1cm4gb3V0cHV0O1xuICAgIH1cbiAgICBcbiAgICBnZXQgZGlzcGxheU5hbWUoKXtcbiAgICAgICAgcmV0dXJuIFwiU2NvcGU6OlwiK3RoaXMuX2lkO1xuICAgIH1cbiAgICBcbiAgICBkaXNwYXRjaCggYWN0aW9uLCBkYXRhICkge1xuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLl9fc2NvcGUpXG4gICAgICAgICAgICAgIC5mb3JFYWNoKFxuICAgICAgICAgICAgICAgICAgaWQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGlmICggIWlzLmZuKHRoaXMuX19zY29wZVtpZF0pIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fX3Njb3BlW2lkXS50cmlnZ2VyKGFjdGlvbiwgZGF0YSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX19taXhlZC5mb3JFYWNoKCggY3R4ICkgPT4gKGN0eC5kaXNwYXRjaChhY3Rpb24sIGRhdGEpKSk7XG4gICAgICAgIHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LmRpc3BhdGNoKGFjdGlvbiwgZGF0YSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBvbmNlKCdzdGFibGUnLCBjYilcbiAgICAgKiBAcGFyYW0gb2JqIHtSZWFjdC5Db21wb25lbnR8U3RvcmV8ZnVuY3Rpb24pXG4gICAgICogQHBhcmFtIGtleSB7c3RyaW5nfSBvcHRpb25hbCBrZXkgd2hlcmUgdG8gbWFwIHRoZSBwdWJsaWMgc3RhdGVcbiAgICAgKi9cbiAgICB0aGVuKCBjYiApIHtcbiAgICAgICAgaWYgKCB0aGlzLl9zdGFibGUgKVxuICAgICAgICAgICAgcmV0dXJuIGNiKG51bGwsIHRoaXMuZGF0YSk7XG4gICAgICAgIHRoaXMub25jZSgnc3RhYmxlJywgZSA9PiBjYihudWxsLCB0aGlzLmRhdGEpKTtcbiAgICB9XG4gICAgXG4gICAgcmVzdG9yZSggeyBzdGF0ZSwgZGF0YSB9LCBxdWlldCApIHtcbiAgICAgICAgbGV0IGN0eCA9IHRoaXMuX19zY29wZTtcbiAgICAgICAgT2JqZWN0LmtleXMoZGF0YSkuZm9yRWFjaChcbiAgICAgICAgICAgIGlkID0+IHtcbiAgICAgICAgICAgICAgICBxdWlldCA/IGN0eC5kYXRhID0gZGF0YVtpZF1cbiAgICAgICAgICAgICAgICAgICAgOiBjdHgucHVzaChkYXRhW2lkXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIE9iamVjdC5rZXlzKHN0YXRlKS5mb3JFYWNoKFxuICAgICAgICAgICAgaWQgPT4ge1xuICAgICAgICAgICAgICAgIHF1aWV0ID8gY3R4LnN0YXRlID0gc3RhdGVbaWRdXG4gICAgICAgICAgICAgICAgICAgIDogY3R4LnNldFN0YXRlKHN0YXRlW2lkXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuICAgIFxuICAgIHJldGFpblN0b3Jlcyggc3RvcmVzID0gW10sIHJlYXNvbiApIHtcbiAgICAgICAgc3RvcmVzLmZvckVhY2goXG4gICAgICAgICAgICBpZCA9PiAodGhpcy5zdG9yZXNbaWRdICYmIHRoaXMuc3RvcmVzW2lkXS5yZXRhaW4gJiYgdGhpcy5zdG9yZXNbaWRdLnJldGFpbihyZWFzb24pKVxuICAgICAgICApXG4gICAgfVxuICAgIFxuICAgIGRpc3Bvc2VTdG9yZXMoIHN0b3JlcyA9IFtdLCByZWFzb24gKSB7XG4gICAgICAgIHN0b3Jlcy5mb3JFYWNoKFxuICAgICAgICAgICAgaWQgPT4gKHRoaXMuc3RvcmVzW2lkXSAmJiB0aGlzLnN0b3Jlc1tpZF0uZGlzcG9zZSAmJiB0aGlzLnN0b3Jlc1tpZF0uZGlzcG9zZShyZWFzb24pKVxuICAgICAgICApXG4gICAgfVxuICAgIFxuICAgIHdhaXQoIHJlYXNvbiApIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcIndhaXRcIiwgcmVhc29uKTtcbiAgICAgICAgdGhpcy5fc3RhYmxlICYmICF0aGlzLl9fbG9ja3MuYWxsICYmIHRoaXMuZW1pdChcInVuc3RhYmxlXCIsIHRoaXMpO1xuICAgICAgICB0aGlzLl9zdGFibGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fX2xvY2tzLmFsbCsrO1xuICAgICAgICBpZiAoIHJlYXNvbiApIHtcbiAgICAgICAgICAgIHRoaXMuX19sb2Nrc1tyZWFzb25dID0gdGhpcy5fX2xvY2tzW3JlYXNvbl0gfHwgMDtcbiAgICAgICAgICAgIHRoaXMuX19sb2Nrc1tyZWFzb25dKys7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgcmVsZWFzZSggcmVhc29uICkge1xuICAgICAgICBcbiAgICAgICAgaWYgKCByZWFzb24gKSB7XG4gICAgICAgICAgICBpZiAoIHRoaXMuX19sb2Nrc1tyZWFzb25dID09IDAgKVxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJSZWxlYXNlIG1vcmUgdGhhbiBsb2NraW5nICFcIiwgcmVhc29uKTtcbiAgICAgICAgICAgIHRoaXMuX19sb2Nrc1tyZWFzb25dID0gdGhpcy5fX2xvY2tzW3JlYXNvbl0gfHwgMDtcbiAgICAgICAgICAgIHRoaXMuX19sb2Nrc1tyZWFzb25dLS07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCAhcmVhc29uICYmIHRoaXMuX19sb2Nrcy5hbGwgPT0gMCApXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiUmVsZWFzZSBtb3JlIHRoYW4gbG9ja2luZyAhXCIpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fX2xvY2tzLmFsbC0tO1xuICAgICAgICBpZiAoICF0aGlzLl9fbG9ja3MuYWxsICkge1xuICAgICAgICAgICAgdGhpcy5fc3RhYmlsaXplclRNICYmIGNsZWFyVGltZW91dCh0aGlzLl9zdGFiaWxpemVyVE0pO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLl9zdGFiaWxpemVyVE0gPSBzZXRUaW1lb3V0KFxuICAgICAgICAgICAgICAgIGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zdGFiaWxpemVyVE0gPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIHRoaXMuX19sb2Nrcy5hbGwgKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcHJvcGFnVE0gJiYgY2xlYXJUaW1lb3V0KHRoaXMuX3Byb3BhZ1RNKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3N0YWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdChcInN0YWJsZVwiLCB0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICF0aGlzLmRlYWQgJiYgdGhpcy5fcHJvcGFnKCk7Ly8gc3RhYmlsaXR5IGNhbiBpbmR1Y2UgZGVzdHJveVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxuICAgIFxuICAgIHByb3BhZygpIHtcbiAgICAgICAgdGhpcy5fcHJvcGFnVE0gJiYgY2xlYXJUaW1lb3V0KHRoaXMuX3Byb3BhZ1RNKTtcbiAgICAgICAgdGhpcy5fcHJvcGFnVE0gPSBzZXRUaW1lb3V0KFxuICAgICAgICAgICAgZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcHJvcGFnVE0gPSBudWxsO1xuICAgICAgICAgICAgICAgIHRoaXMuX3Byb3BhZygpXG4gICAgICAgICAgICB9LCAyXG4gICAgICAgICk7XG4gICAgfVxuICAgIFxuICAgIF9wcm9wYWcoKSB7XG4gICAgICAgIGlmICggdGhpcy5fZm9sbG93ZXJzLmxlbmd0aCApXG4gICAgICAgICAgICB0aGlzLl9mb2xsb3dlcnMuZm9yRWFjaCgoIHsgMDogb2JqLCAxOiBrZXksIDI6IGFzLCAzOiBsYXN0UmV2cyB9ICkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBkYXRhID0gdGhpcy5nZXRVcGRhdGVzKGxhc3RSZXZzKTtcbiAgICAgICAgICAgICAgICBpZiAoICFkYXRhICkgcmV0dXJuO1xuICAgICAgICAgICAgICAgIGlmICggdHlwZW9mIG9iaiAhPSBcImZ1bmN0aW9uXCIgKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICggYXMgKSBvYmouc2V0U3RhdGUoeyBbYXNdOiBkYXRhIH0pO1xuICAgICAgICAgICAgICAgICAgICBlbHNlIG9iai5zZXRTdGF0ZShkYXRhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG9iaihkYXRhLCBsYXN0UmV2cyAmJiBbLi4ubGFzdFJldnNdIHx8IFwibm8gcmV2c1wiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gbGFzdFJldnMgJiZcbiAgICAgICAgICAgICAgICAvLyBrZXkuZm9yRWFjaChpZCA9PiAobGFzdFJldnNbaWRdID0gdGhpcy5zdG9yZXNbaWRdICYmIHRoaXMuc3RvcmVzW2lkXS5fcmV2IHx8IDApKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB0aGlzLmVtaXQoXCJ1cGRhdGVcIiwgdGhpcy5nZXRVcGRhdGVzKCkpO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBpcyBzdGFibGVcbiAgICAgKiBAcmV0dXJucyBib29sXG4gICAgICovXG4gICAgaXNTdGFibGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zdGFibGU7XG4gICAgfVxuICAgIFxuICAgIC8vc2VyaWFsaXplQ2hpbGRzKCBjaGlsZHMgPSBbXSApIHtcbiAgICAvL1xuICAgIC8vfVxuICAgIFxuICAgIF9hZGRDaGlsZCggY3R4ICkge1xuICAgICAgICB0aGlzLl9jaGlsZFNjb3Blcy5wdXNoKGN0eCk7XG4gICAgICAgIGxldCBsaXN0cyAgICAgPSB7XG4gICAgICAgICAgICAgICAgJ3N0YWJsZScgICAgICA6IHMgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl91blN0YWJsZUNoaWxkcy0tO1xuICAgICAgICAgICAgICAgICAgICBpZiAoICF0aGlzLl91blN0YWJsZUNoaWxkcyApXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXQoXCJzdGFibGVUcmVlXCIsIHRoaXMpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAndW5zdGFibGUnICAgIDogcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3VuU3RhYmxlQ2hpbGRzKys7XG4gICAgICAgICAgICAgICAgICAgIGlmICggMSA9PSB0aGlzLl91blN0YWJsZUNoaWxkcyApXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXQoXCJ1bnN0YWJsZVRyZWVcIiwgdGhpcylcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICdzdGFibGVUcmVlJyAgOiBzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdW5TdGFibGVDaGlsZHMtLTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCAhdGhpcy5fdW5TdGFibGVDaGlsZHMgKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KFwic3RhYmxlVHJlZVwiLCB0aGlzKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgJ3Vuc3RhYmxlVHJlZSc6IHMgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl91blN0YWJsZUNoaWxkcysrO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIDEgPT0gdGhpcy5fdW5TdGFibGVDaGlsZHMgKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KFwidW5zdGFibGVUcmVlXCIsIHRoaXMpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAnZGVzdHJveScgICAgIDogY3R4ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBjdHguX3VuU3RhYmxlQ2hpbGRzIClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3VuU3RhYmxlQ2hpbGRzLS07XG4gICAgICAgICAgICAgICAgICAgIGlmICggIWN0eC5pc1N0YWJsZSgpIClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3VuU3RhYmxlQ2hpbGRzLS07XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGlmICggIXRoaXMuX3VuU3RhYmxlQ2hpbGRzIClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdChcInN0YWJsZVRyZWVcIiwgdGhpcylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgd2FzU3RhYmxlID0gdGhpcy5fdW5TdGFibGVDaGlsZHM7XG4gICAgICAgIC8vIWN0eC5pc1N0YWJsZSgpICYmIGNvbnNvbGUud2FybignYWRkIHVuc3RhYmxlIGNoaWxkJyk7XG4gICAgICAgICFjdHguaXNTdGFibGUoKSAmJiB0aGlzLl91blN0YWJsZUNoaWxkcysrO1xuICAgICAgICBjdHguX3VuU3RhYmxlQ2hpbGRzICYmIHRoaXMuX3VuU3RhYmxlQ2hpbGRzKys7XG4gICAgICAgIHRoaXMuX2NoaWxkU2NvcGVzTGlzdC5wdXNoKGxpc3RzKTtcbiAgICAgICAgaWYgKCAhd2FzU3RhYmxlICYmIHRoaXMuX3VuU3RhYmxlQ2hpbGRzIClcbiAgICAgICAgICAgIHRoaXMuZW1pdChcInVuc3RhYmxlVHJlZVwiLCB0aGlzKVxuICAgICAgICBjdHgub24obGlzdHMpO1xuICAgIH1cbiAgICBcbiAgICBfcm1DaGlsZCggY3R4ICkge1xuICAgICAgICBsZXQgaSAgICAgICAgID0gdGhpcy5fY2hpbGRTY29wZXMuaW5kZXhPZihjdHgpLFxuICAgICAgICAgICAgd2FzU3RhYmxlID0gdGhpcy5fdW5TdGFibGVDaGlsZHM7XG4gICAgICAgIGlmICggaSAhPSAtMSApIHtcbiAgICAgICAgICAgIHRoaXMuX2NoaWxkU2NvcGVzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICFjdHguaXNTdGFibGUoKSAmJiB0aGlzLl91blN0YWJsZUNoaWxkcy0tO1xuICAgICAgICAgICAgY3R4Ll91blN0YWJsZUNoaWxkcyAmJiB0aGlzLl91blN0YWJsZUNoaWxkcy0tO1xuICAgICAgICAgICAgY3R4LnVuKHRoaXMuX2NoaWxkU2NvcGVzTGlzdC5zcGxpY2UoaSwgMSlbMF0pO1xuICAgICAgICAgICAgaWYgKCB3YXNTdGFibGUgJiYgIXRoaXMuX3VuU3RhYmxlQ2hpbGRzIClcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXQoXCJzdGFibGVUcmVlXCIpXG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgcmV0YWluKCByZWFzb24gKSB7XG4gICAgICAgIHRoaXMuX19yZXRhaW5zLmFsbCsrO1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwicmV0YWluXCIsIHRoaXMuX2lkLCByZWFzb24pO1xuICAgICAgICBpZiAoIHJlYXNvbiApIHtcbiAgICAgICAgICAgIHRoaXMuX19yZXRhaW5zW3JlYXNvbl0gPSB0aGlzLl9fcmV0YWluc1tyZWFzb25dIHx8IDA7XG4gICAgICAgICAgICB0aGlzLl9fcmV0YWluc1tyZWFzb25dKys7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgZGlzcG9zZSggcmVhc29uICkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwiZGlzcG9zZVwiLCB0aGlzLl9pZCwgcmVhc29uKTtcbiAgICAgICAgaWYgKCByZWFzb24gKSB7XG4gICAgICAgICAgICBpZiAoICF0aGlzLl9fcmV0YWluc1tyZWFzb25dIClcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJEaXNwb3NlIG1vcmUgdGhhbiByZXRhaW5pbmcgOiBcIiArIHJlYXNvbik7XG4gICAgICAgICAgICB0aGlzLl9fcmV0YWluc1tyZWFzb25dLS07XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmICggIXRoaXMuX19yZXRhaW5zLmFsbCApXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJEaXNwb3NlIG1vcmUgdGhhbiByZXRhaW5pbmcgIVwiKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX19yZXRhaW5zLmFsbC0tO1xuICAgICAgICBcbiAgICAgICAgaWYgKCAhdGhpcy5fX3JldGFpbnMuYWxsICkge1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcImRpc3Bvc2UgZG8gZGVzdHJveSBcIiwgdGhpcy5faWQsIHRoaXMuX3BlcnNpc3RlbmNlVG0pO1xuICAgICAgICAgICAgaWYgKCB0aGlzLl9wZXJzaXN0ZW5jZVRtICkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2Rlc3Ryb3lUTSAmJiBjbGVhclRpbWVvdXQodGhpcy5fZGVzdHJveVRNKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9kZXN0cm95VE0gPSBzZXRUaW1lb3V0KFxuICAgICAgICAgICAgICAgICAgICBlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGhlbihzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhdGhpcy5fX3JldGFpbnMuYWxsICYmIHRoaXMuZGVzdHJveSgpXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcGVyc2lzdGVuY2VUbVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRoZW4ocyA9PiAoIXRoaXMuX19yZXRhaW5zLmFsbCAmJiB0aGlzLmRlc3Ryb3koKSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIG9yZGVyIGRlc3Ryb3kgb2YgbG9jYWwgc3RvcmVzXG4gICAgICovXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgbGV0IGN0eCAgID0gdGhpcy5fX3Njb3BlO1xuICAgICAgICAvL2NvbnNvbGUud2FybihcImRlc3Ryb3lcIiwgdGhpcy5faWQpO1xuICAgICAgICB0aGlzLmRlYWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmVtaXQoXCJkZXN0cm95XCIsIHRoaXMpO1xuICAgICAgICBPYmplY3Qua2V5cyhcbiAgICAgICAgICAgIHRoaXMuX19saXN0ZW5pbmdcbiAgICAgICAgKS5mb3JFYWNoKFxuICAgICAgICAgICAgaWQgPT4gdGhpcy5fX3Njb3BlW2lkXS5yZW1vdmVMaXN0ZW5lcih0aGlzLl9fbGlzdGVuaW5nW2lkXSlcbiAgICAgICAgKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX3N0YWJpbGl6ZXJUTSAmJiBjbGVhclRpbWVvdXQodGhpcy5fc3RhYmlsaXplclRNKTtcbiAgICAgICAgdGhpcy5fcHJvcGFnVE0gJiYgY2xlYXJUaW1lb3V0KHRoaXMuX3Byb3BhZ1RNKTtcbiAgICAgICAgdGhpcy5fX2xpc3RlbmluZyA9IHt9O1xuICAgICAgICBcbiAgICAgICAgaWYgKCB0aGlzLl9pc0xvY2FsSWQgKVxuICAgICAgICAgICAgZGVsZXRlIG9wZW5TY29wZXNbdGhpcy5faWRdO1xuICAgICAgICB0aGlzLl9mb2xsb3dlcnMubGVuZ3RoID0gMDtcbiAgICAgICAgXG4gICAgICAgIHdoaWxlICggdGhpcy5fX21peGVkTGlzdC5sZW5ndGggKSB7XG4gICAgICAgICAgICB0aGlzLl9fbWl4ZWRbMF0ucmVtb3ZlTGlzdGVuZXIodGhpcy5fX21peGVkTGlzdC5zaGlmdCgpKTtcbiAgICAgICAgICAgIHRoaXMuX19taXhlZC5zaGlmdCgpLmRpc3Bvc2UoXCJtaXhlZFRvXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICggdGhpcy5fX3BhcmVudExpc3QgKSB7XG4gICAgICAgICAgICB0aGlzLnBhcmVudC5fcm1DaGlsZCh0aGlzKTtcbiAgICAgICAgICAgIHRoaXMucGFyZW50LnJlbW92ZUxpc3RlbmVyKHRoaXMuX19wYXJlbnRMaXN0KTtcbiAgICAgICAgICAgIHRoaXMucGFyZW50LmRpc3Bvc2UoXCJpc015UGFyZW50XCIpO1xuICAgICAgICAgICAgdGhpcy5fX3BhcmVudExpc3QgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoIGxldCBrZXkgaW4gY3R4IClcbiAgICAgICAgICAgIGlmICggIWlzLmZuKGN0eFtrZXldKSApIHtcbiAgICAgICAgICAgICAgICAvL2lmICggY3R4W2tleV0uc2NvcGVPYmogPT09IHRoaXMgKVxuICAgICAgICAgICAgICAgICAgICBjdHhba2V5XS5kaXNwb3NlKFwic2NvcGVkXCIpO1xuXG4gICAgICAgICAgICAgICAgLy9jdHhba2V5XSA9IGN0eFtrZXldLmNvbnN0cnVjdG9yO1xuICAgICAgICAgICAgfVxuICAgICAgICB0aGlzLl9fbWl4ZWQgPSB0aGlzLmRhdGEgPSB0aGlzLnN0YXRlID0gdGhpcy5zY29wZSA9IHRoaXMuc3RvcmVzID0gbnVsbDtcbiAgICAgICAgdGhpcy5fZGF0YSA9IHRoaXMuX3N0YXRlID0gdGhpcy5fc3RvcmVzID0gbnVsbDtcbiAgICAgICAgXG4gICAgICAgIFxuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvU2NvcGUuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImlzXCJcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcbiAqIENvcHlyaWdodCAoYykgIDIwMTggV2lzZSBXaWxkIFdlYiAuXG4gKlxuICogIE1JVCBMaWNlbnNlXG4gKiAgXG4gKiAgUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqICBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiAgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKiAgXG4gKiAgVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG4gKiAgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqICBcbiAqICBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiAgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiAgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiAgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiAgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcbiAqICBTT0ZUV0FSRS5cbiAqICBcbiAqIEBhdXRob3IgOiBOYXRoYW5hZWwgQnJhdW5cbiAqIEBjb250YWN0IDogY2FpcGlsYWJzQGdtYWlsLmNvbVxuICovXG52YXIgaXMgPSByZXF1aXJlKCdpcycpO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW1pdHRlciB7XG4gICAgX2V2ZW50cyA9IHt9O1xuICAgIFxuICAgIG9uKCBldnQsIGNiICkge1xuICAgICAgICBpZiAoICFpcy5zdHJpbmcoZXZ0KSAmJiBldnQgKVxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKGV2dCkuZm9yRWFjaChrID0+IHRoaXMub24oaywgZXZ0W2tdKSk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9ldmVudHNbZXZ0XSA9IHRoaXMuX2V2ZW50c1tldnRdIHx8IFtdO1xuICAgICAgICB0aGlzLl9ldmVudHNbZXZ0XS5wdXNoKGNiKTtcbiAgICAgICAgXG4gICAgfVxuICAgIFxuICAgIHVuKCBldnQsIGNiICkge1xuICAgICAgICBpZiAoICFpcy5zdHJpbmcoZXZ0KSAmJiBldnQgKVxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKGV2dCkuZm9yRWFjaChrID0+IHRoaXMudW4oaywgZXZ0W2tdKSk7XG4gICAgICAgIFxuICAgICAgICBpZiAoICF0aGlzLl9ldmVudHNbZXZ0XSApIHJldHVybjtcbiAgICAgICAgdmFyIGkgPSB0aGlzLl9ldmVudHNbZXZ0XS5pbmRleE9mKGNiKTtcbiAgICAgICAgdGhpcy5fZXZlbnRzW2V2dF0uc3BsaWNlKGksIDEpO1xuICAgIH1cbiAgICBcbiAgICBlbWl0KCBldnQsIC4uLmFyZ3ogKSB7XG4gICAgICAgIGlmICggIXRoaXMuX2V2ZW50c1tldnRdICkgcmV0dXJuO1xuICAgICAgICBsZXQgbGlzdHMgPSBbLi4udGhpcy5fZXZlbnRzW2V2dF1dO1xuICAgICAgICBmb3IgKCB2YXIgaSA9IDA7IGkgPCBsaXN0cy5sZW5ndGg7IGkrKyApIHtcbiAgICAgICAgICAgIGxpc3RzW2ldKC4uLmFyZ3opO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGFkZExpc3RlbmVyKCkge1xuICAgICAgICB0aGlzLm9uKC4uLmFyZ3VtZW50cyk7XG4gICAgfVxuICAgIFxuICAgIHJlbW92ZUxpc3RlbmVyKCkge1xuICAgICAgICB0aGlzLnVuKC4uLmFyZ3VtZW50cyk7XG4gICAgfVxuICAgIFxuICAgIHJlbW92ZUFsbExpc3RlbmVycygpIHtcbiAgICAgICAgdGhpcy5fZXZlbnRzID0ge307XG4gICAgfVxuICAgIFxuICAgIG9uY2UoIGV2dCwgY2IgKSB7XG4gICAgICAgIGxldCBmbjtcbiAgICAgICAgdGhpcy5vbihldnQsIGZuID0gKCAuLi5hcmd6ICkgPT4ge1xuICAgICAgICAgICAgdGhpcy51bihldnQsIGZuKTtcbiAgICAgICAgICAgIGNiKC4uLmFyZ3opXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBcbiAgICBcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvRW1pdHRlci5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNob3J0aWRcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJzaG9ydGlkXCJcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcbiAqIENvcHlyaWdodCAoYykgIDIwMTggV2lzZSBXaWxkIFdlYiAuXG4gKlxuICogIE1JVCBMaWNlbnNlXG4gKlxuICogIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqICBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiAgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqICBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqICBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqICBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcbiAqICBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqICBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiAgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiAgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiAgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiAgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcbiAqICBTT0ZUV0FSRS5cbiAqXG4gKiBAYXV0aG9yIDogTmF0aGFuYWVsIEJyYXVuXG4gKiBAY29udGFjdCA6IGNhaXBpbGFic0BnbWFpbC5jb21cbiAqL1xuXG4vKipcbiAqIFVsdHJhIHNjYWxhYmxlIHN0YXRlLWF3YXJlIHN0b3JlXG4gKlxuICogQHRvZG8gOiBsb3Qgb2Ygb3B0aW1zLi4uXG4gKi9cblxudmFyIGlzICAgICAgICAgICA9IHJlcXVpcmUoJ2lzJyksXG4gICAgU2NvcGUgICAgICAgID0gcmVxdWlyZSgnLi9TY29wZScpLFxuICAgIEV2ZW50RW1pdHRlciA9IHJlcXVpcmUoJy4vRW1pdHRlcicpLFxuICAgIHNob3J0aWQgICAgICA9IHJlcXVpcmUoJ3Nob3J0aWQnKSxcbiAgICBvYmpQcm90byAgICAgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Yoe30pO1xuLyoqXG4gKiBAY2xhc3MgU3RvcmVcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RvcmUgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICAgIFxuICAgIHN0YXRpYyB1c2UgICAgICAgICAgICAgICAgICA9IFtdOy8vIG92ZXJyaWRhYmxlIGxpc3Qgb2Ygc291cmNlIHN0b3Jlc1xuICAgIHN0YXRpYyBmb2xsb3c7Ly8gb3ZlcnJpZGFibGUgbGlzdCBvZiBzdG9yZSB0aGF0IHdpbGwgYWxsb3cgcHVzaCBpZiB1cGRhdGVkXG4gICAgc3RhdGljIHJlcXVpcmU7XG4gICAgc3RhdGljIHN0YXRpY1Njb3BlICAgICAgICAgID0gbmV3IFNjb3BlKHt9LCB7IGlkOiBcInN0YXRpY1wiIH0pO1xuICAgIHN0YXRpYyBzdGF0ZSAgICAgICAgICAgICAgICA9IHVuZGVmaW5lZDsvLyBkZWZhdWx0IHN0YXRlXG4gICAgLyoqXG4gICAgICogaWYgcmV0YWluIGdvZXMgdG8gMCA6XG4gICAgICogZmFsc2UgdG8gbm90IGRlc3Ryb3ksXG4gICAgICogMCB0byBzeW5jIGF1dG8gZGVzdHJveVxuICAgICAqIE1zIHRvIGF1dG9kZXN0cm95IGFmdGVyIHRtIG1zIGlmIG5vIHJldGFpbiBoYXMgYmVlbiBjYWxsZWRcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbnxJbnR9XG4gICAgICovXG4gICAgICAgICAgIHN0YXRpYyBwZXJzaXN0ZW5jZVRtID0gZmFsc2U7XG4gICAgXG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0b3IsIHdpbGwgYnVpbGQgYSByZXNjb3BlIHN0b3JlXG4gICAgICpcbiAgICAgKiAoc2NvcGUsIHtyZXF1aXJlLHVzZSxhcHBseSxzdGF0ZSwgZGF0YX0pXG4gICAgICogKHNjb3BlKVxuICAgICAqXG4gICAgICogQHBhcmFtIHNjb3BlIHtvYmplY3R9IHNjb3BlIHdoZXJlIHRvIGZpbmQgdGhlIG90aGVyIHN0b3JlcyAoZGVmYXVsdCA6IHN0YXRpYyBzdGF0aWNTY29wZSApXG4gICAgICogQHBhcmFtIGtleXMge0FycmF5fSAocGFzc2VkIHRvIFN0b3JlOjptYXApIEV4IDogW1wic2Vzc2lvblwiLCBcIm90aGVyTmFtZWRTdG9yZTprZXlcIiwgb3RoZXJTdG9yZS5hcyhcIm90aGVyS2V5XCIpXVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB2YXIgYXJneiAgICAgICAgID0gWy4uLmFyZ3VtZW50c10sXG4gICAgICAgICAgICBfc3RhdGljICAgICAgPSB0aGlzLmNvbnN0cnVjdG9yLFxuICAgICAgICAgICAgc2NvcGUgICAgICAgID0gYXJnelswXSBpbnN0YW5jZW9mIFNjb3BlXG4gICAgICAgICAgICAgICAgPyBhcmd6LnNoaWZ0KClcbiAgICAgICAgICAgICAgICA6IF9zdGF0aWMuc2NvcGUgPyBTY29wZS5nZXRTY29wZShfc3RhdGljLnNjb3BlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogaXMuc3RyaW5nKGFyZ3pbMF0pXG4gICAgICAgICAgICAgICAgICAgICAgPyBTY29wZS5nZXRTY29wZShhcmd6LnNoaWZ0KCkpXG4gICAgICAgICAgICAgICAgICAgICAgOiBfc3RhdGljLnN0YXRpY1Njb3BlLFxuICAgICAgICAgICAgY2ZnICAgICAgICAgID0gYXJnelswXSAmJiAhaXMuYXJyYXkoYXJnelswXSkgJiYgIWlzLnN0cmluZyhhcmd6WzBdKSA/IGFyZ3ouc2hpZnQoKSA6IHt9LFxuICAgICAgICAgICAgbmFtZSAgICAgICAgID0gaXMuc3RyaW5nKGFyZ3pbMF0pID8gYXJnelswXSA6IGNmZy5uYW1lIHx8IF9zdGF0aWMubmFtZSxcbiAgICAgICAgICAgIHdhdGNocyAgICAgICA9IGlzLmFycmF5KGFyZ3pbMF0pID8gYXJnei5zaGlmdCgpIDogY2ZnLnVzZSB8fCBbXSwvLyB3YXRjaHMgbmVlZCB0byBiZSBkZWZpbmVkIGFmdGVyIGFsbCB0aGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzdG9yZSBhcmUgcmVnaXN0ZXJlZCA6IHNvIHdlIGNhbid0IGRlYWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB3aXRoIGFueSBcInN0YXRpYyB1c2VcIiBhdXRvbWF0aWNseVxuICAgICAgICAgICAgYXBwbHkgICAgICAgID0gaXMuZm4oYXJnelswXSkgPyBhcmd6LnNoaWZ0KCkgOiBjZmcuYXBwbHkgfHwgbnVsbCxcbiAgICAgICAgICAgIGluaXRpYWxTdGF0ZSA9IF9zdGF0aWMuc3RhdGUgfHwgX3N0YXRpYy5pbml0aWFsU3RhdGUsXG4gICAgICAgICAgICBhcHBsaWVkO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fdWlkID0gY2ZnLl91aWQgfHwgc2hvcnRpZC5nZW5lcmF0ZSgpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fX3JldGFpbnMgICAgPSB7IGFsbDogMCB9O1xuICAgICAgICB0aGlzLl9fbG9ja3MgICAgICA9IHsgYWxsOiAwIH07XG4gICAgICAgIHRoaXMuX29uU3RhYmlsaXplID0gW107XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9wZXJzaXN0ZW5jZVRtID0gY2ZnLnBlcnNpc3RlbmNlVG0gfHwgdGhpcy5jb25zdHJ1Y3Rvci5wZXJzaXN0ZW5jZVRtO1xuICAgICAgICBpZiAoIGlzLnN0cmluZyhhcmd6WzBdKSApIHtcbiAgICAgICAgICAgIGlmICggc2NvcGUuX19zY29wZVtuYW1lXSApXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwiUmVTY29wZTogT3ZlcndyaXRpbmcgYW4gZXhpc3Rpbmcgc3RhdGljIG5hbWVkIHN0b3JlICggJXMgKSAhIVwiLCBuYW1lKTtcbiAgICAgICAgICAgIHNjb3BlLl9fc2NvcGVbbmFtZV0gPSB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAoIGNmZyAmJiBjZmcub24gKSB7XG4gICAgICAgICAgICB0aGlzLm9uKGNmZy5vbik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gdGhpcy5zdGF0ZSAgICAgID0gdGhpcy5zdGF0ZSB8fCB7fTtcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICBcbiAgICAgICAgaWYgKCBzY29wZS5zdG9yZXMgKSB7XG4gICAgICAgICAgICB0aGlzLnNjb3BlT2JqID0gc2NvcGU7XG4gICAgICAgICAgICB0aGlzLnNjb3BlICAgID0gc2NvcGUuc3RvcmVzO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zY29wZU9iaiA9IG5ldyBTY29wZShzY29wZSk7XG4gICAgICAgICAgICB0aGlzLnNjb3BlICAgID0gc2NvcGUuc3RvcmVzO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgdGhpcy5fcmV2ICAgICA9IHRoaXMuY29uc3RydWN0b3IuX3JldiB8fCAwO1xuICAgICAgICB0aGlzLl9yZXZzICAgID0ge307XG4gICAgICAgIHRoaXMuc3RvcmVzICAgPSB7fTtcbiAgICAgICAgdGhpcy5fcmVxdWlyZSA9IFtdO1xuICAgICAgICBcbiAgICAgICAgaWYgKCBpcy5hcnJheShfc3RhdGljLnVzZSkgKSB7XG4gICAgICAgICAgICB0aGlzLl91c2UgPSBbLi4ud2F0Y2hzLCAuLi4oX3N0YXRpYy51c2UgfHwgW10pLm1hcChcbiAgICAgICAgICAgICAgICBrZXkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmVmID0ga2V5Lm1hdGNoKC9eKFxcIT8pKFteXFw6XSopKD86XFw6KC4qKSk/JC8pO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIHJlZlsxXSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZWYyID0gcmVmWzJdLnNwbGl0KCcuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9yZXF1aXJlLnB1c2gocmVmWzNdIHx8IHJlZjJbcmVmMi5sZW5ndGggLSAxXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlZlsyXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3VzZSA9IFsuLi53YXRjaHMsIC4uLihcbiAgICAgICAgICAgICAgICBfc3RhdGljLnVzZSA/IE9iamVjdC5rZXlzKF9zdGF0aWMudXNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVmID0ga2V5Lm1hdGNoKC9eKFxcIT8pKC4qKSQvKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmWzFdICYmIHRoaXMuX3JlcXVpcmUucHVzaChfc3RhdGljLnVzZVtrZXldKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlZlsyXSArICgoX3N0YXRpYy51c2Vba2V5XSA9PT0gdHJ1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJzonICsgX3N0YXRpYy51c2Vba2V5XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IFtdXG4gICAgICAgICAgICApXTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKCBfc3RhdGljLnJlcXVpcmUgKVxuICAgICAgICAgICAgdGhpcy5fcmVxdWlyZS5wdXNoKC4uLl9zdGF0aWMucmVxdWlyZSk7XG4gICAgICAgIGlmICggY2ZnLnJlcXVpcmUgKVxuICAgICAgICAgICAgdGhpcy5fcmVxdWlyZS5wdXNoKC4uLmNmZy5yZXF1aXJlKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX2ZvbGxvd2VycyA9IFtdO1xuICAgICAgICBcbiAgICAgICAgaWYgKCBfc3RhdGljLmRhdGEgIT09IHVuZGVmaW5lZCApXG4gICAgICAgICAgICB0aGlzLmRhdGEgPSB7IC4uLl9zdGF0aWMuZGF0YSB9O1xuICAgICAgICBpZiAoIGNmZy5oYXNPd25Qcm9wZXJ0eShcImRhdGFcIikgJiYgY2ZnLmRhdGEgIT09IHVuZGVmaW5lZCApXG4gICAgICAgICAgICB0aGlzLmRhdGEgPSBjZmcuZGF0YTtcbiAgICAgICAgaWYgKCBjZmcuaGFzT3duUHJvcGVydHkoXCJzdGF0ZVwiKSAmJiBjZmcuc3RhdGUgIT09IHVuZGVmaW5lZCApXG4gICAgICAgICAgICBpbml0aWFsU3RhdGUgPSB7IC4uLmluaXRpYWxTdGF0ZSwgLi4uY2ZnLnN0YXRlIH07XG4gICAgICAgIFxuICAgICAgICBpZiAoIGFwcGx5IClcbiAgICAgICAgICAgIHRoaXMuYXBwbHkgPSBhcHBseTtcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICBpZiAoIGluaXRpYWxTdGF0ZSB8fCB0aGlzLl91c2UubGVuZ3RoICkgey8vIHN5bmMgYXBwbHlcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICAgICAgLi4uKGluaXRpYWxTdGF0ZSB8fCB7fSksXG4gICAgICAgICAgICAgICAgLi4uc2NvcGUubWFwKHRoaXMsIHRoaXMuX3VzZSlcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoIHRoaXMuc2hvdWxkQXBwbHkodGhpcy5zdGF0ZSkgJiYgdGhpcy5kYXRhID09PSB1bmRlZmluZWQgKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhID0gdGhpcy5hcHBseSh0aGlzLmRhdGEsIHRoaXMuc3RhdGUsIHRoaXMuc3RhdGUpO1xuICAgICAgICAgICAgICAgIGFwcGxpZWQgICA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmICggKHRoaXMuZGF0YSAhPT0gdW5kZWZpbmVkIHx8IGFwcGxpZWQpICYmICF0aGlzLl9fbG9ja3MuYWxsICkge1xuICAgICAgICAgICAgdGhpcy5fc3RhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuX3JldisrO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fc3RhYmxlID0gZmFsc2U7XG4gICAgICAgICAgICBpZiAoICFfc3RhdGljLm1hbmFnZWQgJiYgIXRoaXMuc3RhdGUgJiYgKCF0aGlzLl91c2UgfHwgIXRoaXMuX3VzZS5sZW5ndGgpICkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIlJlc2NvcGUgc3RvcmUgJ1wiLCB0aGlzLm5hbWUsIFwiJyBoYXZlIG5vIGluaXRpYWwgZGF0YSwgc3RhdGUgb3IgdXNlLiBJdCBjYW4ndCBzdGFiaWxpemUuLi5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgIXRoaXMuX3N0YWJsZSAmJiB0aGlzLmVtaXQoJ3Vuc3RhYmxlJywgdGhpcy5zdGF0ZSk7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIGdldCBhIEJ1aWxkZXIta2V5IHBhaXIgZm9yIFN0b3JlOjptYXBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgICAqIEByZXR1cm5zIHt7c3RvcmU6IFN0b3JlLCBuYW1lOiAqfX1cbiAgICAgKi9cbiAgICBzdGF0aWMgYXMoIG5hbWUgKSB7XG4gICAgICAgIHJldHVybiB7IHN0b3JlOiB0aGlzLCBuYW1lIH07XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIE1hcCBhbGwgbmFtZWQgc3RvcmVzIGluIHtrZXlzfSB0byB0aGUge29iamVjdH0ncyBzdGF0ZVxuICAgICAqIEhvb2sgY29tcG9uZW50V2lsbFVubW91bnQgKGZvciByZWFjdCBjb21wKSBvciBkZXN0cm95IHRvIHVuQmluZCB0aGVtIGF1dG9tYXRpY2FsbHlcbiAgICAgKiBAc3RhdGljXG4gICAgICogQHBhcmFtIG9iamVjdCB7T2JqZWN0fSB0YXJnZXQgc3RhdGUgYXdhcmUgb2JqZWN0IChSZWFjdC5Db21wb25lbnR8U3RvcmV8Li4uKVxuICAgICAqIEBwYXJhbSBrZXlzIHtBcnJheX0gRXggOiBbXCJzZXNzaW9uXCIsIFwib3RoZXJTdGF0aWNOYW1lZFN0b3JlOmtleVwiLCBzdG9yZS5hcygnYW5vdGhlcktleScpXVxuICAgICAqL1xuICAgIHN0YXRpYyBtYXAoIGNvbXBvbmVudCwga2V5cywgc2NvcGUsIG9yaWdpbiwgc2V0SW5pdGlhbCA9IGZhbHNlICkge1xuICAgICAgICB2YXIgdGFyZ2V0UmV2cyAgICAgPSBjb21wb25lbnQuX3JldnMgfHwge307XG4gICAgICAgIHZhciB0YXJnZXRTY29wZSAgICA9IGNvbXBvbmVudC5zdG9yZXMgfHwgKGNvbXBvbmVudC5zdG9yZXMgPSB7fSk7XG4gICAgICAgIHZhciBpbml0aWFsT3V0cHV0cyA9IHt9O1xuICAgICAgICBrZXlzICAgICAgICAgICAgICAgPSBpcy5hcnJheShrZXlzKSA/IFsuLi5rZXlzXSA6IFtrZXlzXTtcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICBzY29wZSA9IHNjb3BlIHx8IFN0b3JlLnN0YXRpY1Njb3BlO1xuICAgICAgICBcbiAgICAgICAga2V5cyAgICAgICAgICAgPSBrZXlzLmZpbHRlcihcbiAgICAgICAgICAgIC8vIEB0b2RvIDogdXNlIHF1ZXJ5IHJlZnNcbiAgICAgICAgICAgIC8vIChzdG9yZSkoXFwuc3RvcmUpKihcXFsoXFwqfChwcm9wcylcXHcrKSspXFxdKT8oXFw6YWxpYXMpXG4gICAgICAgICAgICAoIGtleSApID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoICFrZXkgKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJOb3QgYSBtYXBwYWJsZSBzdG9yZSBpdGVtICdcIiArIGtleSArIFwiJyBpbiBcIiArIG9yaWdpbiArICcgISEnKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZXQgbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgYWxpYXMsXG4gICAgICAgICAgICAgICAgICAgIHBhdGgsXG4gICAgICAgICAgICAgICAgICAgIHN0b3JlO1xuICAgICAgICAgICAgICAgIGlmICgga2V5LnN0b3JlICYmIGtleS5uYW1lICkge1xuICAgICAgICAgICAgICAgICAgICBhbGlhcyA9IG5hbWUgPSBrZXkubmFtZTtcbiAgICAgICAgICAgICAgICAgICAgc3RvcmUgPSBrZXkuc3RvcmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKCBpcy5mbihrZXkpICkge1xuICAgICAgICAgICAgICAgICAgICBuYW1lID0gYWxpYXMgPSBrZXkubmFtZSB8fCBrZXkuZGVmYXVsdE5hbWU7XG4gICAgICAgICAgICAgICAgICAgIHN0b3JlID0ga2V5O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAga2V5ICAgPSBrZXkubWF0Y2goLyhbXFx3X10rKSgoPzpcXC5bXFx3X10rKSopKD86XFw6KFtcXHdfXSspKT8vKTtcbiAgICAgICAgICAgICAgICAgICAgbmFtZSAgPSBrZXlbMV07XG4gICAgICAgICAgICAgICAgICAgIHBhdGggID0ga2V5WzJdICYmIGtleVsyXS5zcGxpdCgnLicpLnNsaWNlKDEpO1xuICAgICAgICAgICAgICAgICAgICBzdG9yZSA9IHNjb3BlLnN0b3Jlc1trZXlbMV1dO1xuICAgICAgICAgICAgICAgICAgICBhbGlhcyA9IGtleVszXSB8fCBwYXRoICYmIHBhdGhbcGF0aC5sZW5ndGggLSAxXSB8fCBrZXlbMV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmICggdGFyZ2V0UmV2c1tuYW1lXSApIHJldHVybiBmYWxzZTsvLyBpZ25vcmUgZGJsIHVzZXMgZm9yIG5vd1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmICggIXN0b3JlICkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiTm90IGEgbWFwcGFibGUgc3RvcmUgaXRlbSAnXCIgKyBuYW1lICsgXCIvXCIgKyBhbGlhcyArIFwiJyBpbiBcIiArIG9yaWdpbiArICcgISEnLCBzdG9yZSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoIGlzLmZuKHN0b3JlKSApIHtcbiAgICAgICAgICAgICAgICAgICAgc2NvcGUuX21vdW50KG5hbWUpXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBzY29wZS5zdG9yZXNbbmFtZV0uYmluZChjb21wb25lbnQsIGFsaWFzLCBzZXRJbml0aWFsLCBwYXRoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHN0b3JlLmJpbmQoY29tcG9uZW50LCBhbGlhcywgc2V0SW5pdGlhbCwgcGF0aCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRhcmdldFJldnNbYWxpYXNdID0gdGFyZ2V0UmV2c1thbGlhc10gfHwgdHJ1ZTtcbiAgICAgICAgICAgICAgICAhdGFyZ2V0U2NvcGVbbmFtZV0gJiYgKHRhcmdldFNjb3BlW25hbWVdID0gc2NvcGUuc3RvcmVzW25hbWVdKTtcbiAgICAgICAgICAgICAgICBpZiAoIHNjb3BlLnN0b3Jlc1tuYW1lXS5oYXNPd25Qcm9wZXJ0eSgnZGF0YScpIClcbiAgICAgICAgICAgICAgICAgICAgaW5pdGlhbE91dHB1dHNbbmFtZV0gPSBzY29wZS5kYXRhW25hbWVdO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICB2YXIgbWl4ZWRDV1VubW91bnQsXG4gICAgICAgICAgICB1bk1vdW50S2V5ID0gY29tcG9uZW50LmlzUmVhY3RDb21wb25lbnQgPyBcImNvbXBvbmVudFdpbGxVbm1vdW50XCIgOiBcImRlc3Ryb3lcIjtcbiAgICAgICAgXG4gICAgICAgIGlmICggY29tcG9uZW50Lmhhc093blByb3BlcnR5KHVuTW91bnRLZXkpICkge1xuICAgICAgICAgICAgbWl4ZWRDV1VubW91bnQgPSBjb21wb25lbnRbdW5Nb3VudEtleV07XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGNvbXBvbmVudFt1bk1vdW50S2V5XSA9ICggLi4uYXJneiApID0+IHtcbiAgICAgICAgICAgIGRlbGV0ZSBjb21wb25lbnRbdW5Nb3VudEtleV07XG4gICAgICAgICAgICBpZiAoIG1peGVkQ1dVbm1vdW50IClcbiAgICAgICAgICAgICAgICBjb21wb25lbnRbdW5Nb3VudEtleV0gPSBtaXhlZENXVW5tb3VudDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAga2V5cy5tYXAoXG4gICAgICAgICAgICAgICAgKCBrZXkgKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpYXMsIHBhdGgsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9yZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBrZXkuc3RvcmUgJiYga2V5Lm5hbWUgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlhcyA9IG5hbWUgPSBrZXkubmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlID0ga2V5LnN0b3JlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKCBpcy5mbihrZXkpICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZSA9IGFsaWFzID0ga2V5Lm5hbWUgfHwga2V5LmRlZmF1bHROYW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmUgPSBzY29wZS5zdG9yZXNbbmFtZV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXkgICA9IGtleS5tYXRjaCgvKFtcXHdfXSspKCg/OlxcLltcXHdfXSspKikoPzpcXDooW1xcd19dKykpPy8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZSAgPSBrZXlbMV07XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRoICA9IGtleVsyXSAmJiBrZXlbMl0uc3BsaXQoJy4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlID0gc2NvcGUuc3RvcmVzW2tleVsxXV07XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlhcyA9IGtleVszXSB8fCBwYXRoICYmIHBhdGhbcGF0aC5sZW5ndGggLSAxXSB8fCBrZXlbMV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHN0b3JlICYmICFpcy5mbihzdG9yZSkgJiYgc3RvcmUudW5CaW5kKGNvbXBvbmVudCwgYWxpYXMsIHBhdGgpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHJldHVybiBjb21wb25lbnRbdW5Nb3VudEtleV0gJiYgY29tcG9uZW50W3VuTW91bnRLZXldKC4uLmFyZ3opO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gaW5pdGlhbE91dHB1dHM7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIEBkZXByZWNhdGVkXG4gICAgICogQHJldHVybnMgeyp9XG4gICAgICovXG4gICAgZ2V0IGNvbnRleHRPYmooKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNjb3BlT2JqO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBAZGVwcmVjYXRlZFxuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqL1xuICAgIGdldCBjb250ZXh0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zY29wZTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogQGRlcHJlY2F0ZWRcbiAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgKi9cbiAgICBnZXQgZGF0YXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGE7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIEBkZXByZWNhdGVkXG4gICAgICogQHJldHVybnMgeyp9XG4gICAgICovXG4gICAgc2V0IGRhdGFzKCB2ICkge1xuICAgICAgICAvL2NvbnNvbGUuZ3JvdXBDb2xsYXBzZWQoXCJSZXNjb3BlIHN0b3JlIDogU2V0dGluZyBkYXRhcyBpcyBkZXByZWNpYXRlZCwgdXNlIGRhdGFcIik7XG4gICAgICAgIC8vY29uc29sZS5sb2coXCJSZXNjb3BlIHN0b3JlIDogU2V0dGluZyBkYXRhcyBpcyBkZXByZWNpYXRlZCwgdXNlIGRhdGFcIiwgKG5ldyBFcnJvcigpKS5zdGFjayk7XG4gICAgICAgIC8vY29uc29sZS5ncm91cEVuZCgpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5kYXRhID0gdjtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogT3ZlcnJpZGFibGUgbWV0aG9kIHRvIGtub3cgaWYgYSBkYXRhIGNoYW5nZSBzaG91bGQgYmUgcHJvcGFnIHRvIHRoZSBsaXN0ZW5pbmcgc3RvcmVzICYgY29tcG9uZW50c1xuICAgICAqL1xuICAgIHNob3VsZFByb3BhZyggbkRhdGFzICkge1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIFxuICAgIGhhc0RhdGFDaGFuZ2UoIG5EYXRhcyApIHtcbiAgICAgICAgdmFyIF9zdGF0aWMgPSB0aGlzLmNvbnN0cnVjdG9yLCByLFxuICAgICAgICAgICAgY0RhdGFzICA9IHRoaXMuZGF0YTtcbiAgICAgICAgciAgICAgICAgICAgPSAhY0RhdGFzICYmIG5EYXRhcyB8fCBjRGF0YXMgIT09IG5EYXRhcztcbiAgICAgICAgIXIgJiYgY0RhdGFzICYmIE9iamVjdC5rZXlzKGNEYXRhcykuZm9yRWFjaChcbiAgICAgICAgICAgICgga2V5ICkgPT4ge1xuICAgICAgICAgICAgICAgIHIgPSByIHx8IChuRGF0YXMgPyBjRGF0YXNba2V5XSAhPT0gbkRhdGFzW2tleV0gOiBjRGF0YXMgJiYgY0RhdGFzW2tleV0pXG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgICFyICYmIG5EYXRhcyAmJiBPYmplY3Qua2V5cyhuRGF0YXMpLmZvckVhY2goXG4gICAgICAgICAgICAoIGtleSApID0+IHtcbiAgICAgICAgICAgICAgICByID0gciB8fCAobkRhdGFzID8gY0RhdGFzW2tleV0gIT09IG5EYXRhc1trZXldIDogY0RhdGFzICYmIGNEYXRhc1trZXldKVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcjtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogT3ZlcnJpZGFibGUgbWV0aG9kIHRvIGtub3cgaWYgYSBzdGF0ZSBjaGFuZ2Ugc2hvdWxkIGJlIGFwcGxpZWRcbiAgICAgKi9cbiAgICBzaG91bGRBcHBseSggc3RhdGUgPSB0aGlzLnN0YXRlICkge1xuICAgICAgICB2YXIgX3N0YXRpYyA9IHRoaXMuY29uc3RydWN0b3I7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgISF0aGlzLmlzQ29tcGxldGUoc3RhdGUpXG4gICAgICAgICkgJiYgKGlzLmFycmF5KF9zdGF0aWMuZm9sbG93KVxuICAgICAgICAgICAgICAgID8gX3N0YXRpYy5mb2xsb3dcbiAgICAgICAgICAgICAgICAgICAgICAgICAucmVkdWNlKCggciwgaSApID0+IChyIHx8IHN0YXRlICYmIHN0YXRlW2ldKSwgZmFsc2UpXG4gICAgICAgICAgICAgICAgOiBfc3RhdGljLmZvbGxvd1xuICAgICAgICAgICAgICAgICAgPyBPYmplY3Qua2V5cyhfc3RhdGljLmZvbGxvdylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlZHVjZSgoIHIsIGkgKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8fCBzdGF0ZSAmJiBpcy5mbihfc3RhdGljLmZvbGxvd1tpXSkgJiYgX3N0YXRpYy5mb2xsb3dbaV0uY2FsbCh0aGlzLCBzdGF0ZVtpXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHx8IF9zdGF0aWMuZm9sbG93W2ldICYmIHN0YXRlW2ldICE9PSB0aGlzLnN0YXRlW2ldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksIGZhbHNlKSA6IHRydWVcbiAgICAgICAgKTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogT3ZlcnJpZGFibGUgYXBwbGllciAvIHJlbWFwcGVyXG4gICAgICogSWYgc3RhdGUgb3IgbGFzdFB1YmxpY1N0YXRlIGFyZSBzaW1wbGUgaGFzaCBtYXBzIGFwcGx5IHdpbGwgcmV0dXJuIHsuLi5kYXRhLCAuLi5zdGF0ZX1cbiAgICAgKiBpZiBub3QgaXQgd2lsbCByZXR1cm4gdGhlIGxhc3QgcHJpdmF0ZSBzdGF0ZVxuICAgICAqIEBwYXJhbSBkYXRhXG4gICAgICogQHBhcmFtIHN0YXRlXG4gICAgICogQHJldHVybnMgeyp9XG4gICAgICovXG4gICAgYXBwbHkoIGRhdGEsIHN0YXRlLCBjaGFuZ2VzICkge1xuICAgICAgICBzdGF0ZSA9IHN0YXRlIHx8IHRoaXMuc3RhdGU7XG4gICAgICAgIFxuICAgICAgICBpZiAoIHRoaXMucmVmaW5lIClcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlZmluZSguLi5hcmd1bWVudHMpO1xuICAgICAgICBcbiAgICAgICAgaWYgKCAhZGF0YSB8fCBkYXRhLl9fcHJvdG9fXyAhPT0gb2JqUHJvdG8gfHwgc3RhdGUuX19wcm90b19fICE9PSBvYmpQcm90byApXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHJldHVybiB7IC4uLmRhdGEsIC4uLnN0YXRlIH1cbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogQGRlcHJlY2lhdGVkXG4gICAgICogQHBhcmFtIGRhdGFcbiAgICAgKiBAcGFyYW0gc3RhdGVcbiAgICAgKiBAcGFyYW0gY2hhbmdlc1xuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqL1xuICAgIHJlZmluZSggZGF0YSwgc3RhdGUsIGNoYW5nZXMgKSB7XG4gICAgICAgIHN0YXRlID0gc3RhdGUgfHwgdGhpcy5zdGF0ZTtcbiAgICAgICAgXG4gICAgICAgIGlmICggIWRhdGEgfHwgZGF0YS5fX3Byb3RvX18gIT09IG9ialByb3RvIHx8IHN0YXRlLl9fcHJvdG9fXyAhPT0gb2JqUHJvdG8gKVxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICByZXR1cm4geyAuLi5kYXRhLCAuLi5zdGF0ZSB9XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIERlYm91bmNlIHRoaXMgc3RvcmUgcHJvcGFnYXRpb24gKCAmIHJlZHVjaW5nIClcbiAgICAgKiBAcGFyYW0gY2JcbiAgICAgKi9cbiAgICBzdGFiaWxpemUoIGNiICkge1xuICAgICAgICBjYiAmJiB0aGlzLm9uY2UoJ3N0YWJsZScsIGNiKTtcbiAgICAgICAgdGhpcy5fc3RhYmxlICYmIHRoaXMuZW1pdCgndW5zdGFibGUnLCB0aGlzLnN0YXRlLCB0aGlzLmRhdGEpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fc3RhYmxlID0gZmFsc2U7XG4gICAgICAgIFxuICAgICAgICBpZiAoIHRoaXMuX3N0YWJpbGl6ZXIgKVxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX3N0YWJpbGl6ZXIpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fc3RhYmlsaXplciA9IHNldFRpbWVvdXQoXG4gICAgICAgICAgICB0aGlzLnB1c2guYmluZChcbiAgICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgKCkgPT4gey8vQHRvZG9cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGxldCBzdGFibGUgICA9IHRoaXMuX3N0YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc3RhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgIXN0YWJsZSAmJiB0aGlzLmVtaXQoJ3N0YWJsZScsIHRoaXMuc3RhdGUsIHRoaXMuZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3N0YWJpbGl6ZXIgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnJlbGVhc2UoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApKTtcbiAgICB9XG4gICAgXG4gICAgcmV0cmlldmUoIHBhdGgsIGkgPSAwLCBvYmogPSB0aGlzLmRhdGEgKSB7XG4gICAgICAgIHBhdGggPSBpcy5zdHJpbmcocGF0aCkgPyBwYXRoLnNwbGl0KCcuJykgOiBwYXRoO1xuICAgICAgICByZXR1cm4gIW9iaiB8fCAhcGF0aCB8fCAhcGF0aC5sZW5ndGhcbiAgICAgICAgICAgID8gb2JqXG4gICAgICAgICAgICA6IHBhdGgubGVuZ3RoID09IGkgKyAxXG4gICAgICAgICAgICAgICAgICAgPyBvYmpbcGF0aFtpXV1cbiAgICAgICAgICAgICAgICAgICA6IHRoaXMucmV0cmlldmUocGF0aCwgaSArIDEsIG9ialtwYXRoW2ldXSk7XG4gICAgfVxuICAgIFxuICAgIGRpc3BhdGNoKCBhY3Rpb24sIC4uLmFyZ3ogKSB7XG4gICAgICAgIHRoaXMuc2NvcGVPYmouZGlzcGF0Y2goYWN0aW9uLCAuLi5hcmd6KTtcbiAgICB9XG4gICAgXG4gICAgdHJpZ2dlciggYWN0aW9uLCAuLi5hcmd6ICkge1xuICAgICAgICBsZXQgeyBhY3Rpb25zIH0gPSB0aGlzLmNvbnN0cnVjdG9yLFxuICAgICAgICAgICAgbnM7XG4gICAgICAgIGlmICggYWN0aW9ucyAmJiBhY3Rpb25zW2FjdGlvbl0gKSB7XG4gICAgICAgICAgICBucyA9IGFjdGlvbnNbYWN0aW9uXS5jYWxsKHRoaXMsIC4uLmFyZ3opO1xuICAgICAgICAgICAgbnMgJiYgdGhpcy5zZXRTdGF0ZShucyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogUHVsbCBzdG9yZXMgaW4gdGhlIHByaXZhdGUgc3RhdGVcbiAgICAgKiBAcGFyYW0gc3RvcmVzICB7QXJyYXl9IChwYXNzZWQgdG8gU3RvcmU6Om1hcCkgRXggOiBbXCJzZXNzaW9uXCIsIFwib3RoZXJOYW1lZFN0b3JlOmtleVwiLCBvdGhlclN0b3JlLmFzKFwib3RoZXJLZXlcIildXG4gICAgICovXG4gICAgcHVsbCggc3RvcmVzLCBkb1dhaXQsIG9yaWdpbiApIHtcbiAgICAgICAgbGV0IGluaXRpYWxPdXRwdXRzID0gdGhpcy5zY29wZU9iai5tYXAodGhpcywgc3RvcmVzKTtcbiAgICAgICAgaWYgKCBkb1dhaXQgKSB7XG4gICAgICAgICAgICB0aGlzLndhaXQoKTtcbiAgICAgICAgICAgIHN0b3Jlcy5mb3JFYWNoKCggcyApID0+IHRoaXMuc2NvcGVbc10gJiYgdGhpcy53YWl0KHRoaXMuc2NvcGVbc10pKTtcbiAgICAgICAgICAgIHRoaXMucmVsZWFzZSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpbml0aWFsT3V0cHV0cztcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogQXBwbHkgYXBwbHkvcmVtYXAgb24gdGhlIHByaXZhdGUgc3RhdGUgJiBwdXNoIHRoZSByZXN1bHRpbmcgXCJwdWJsaWNcIiBzdGF0ZSB0byBmb2xsb3dlcnNcbiAgICAgKiBAcGFyYW0gY2JcbiAgICAgKi9cbiAgICBwdXNoKCBkYXRhLCBmb3JjZSwgY2IgKSB7XG4gICAgICAgIGNiICAgICAgICAgICAgPSBmb3JjZSA9PT0gdHJ1ZSA/IGNiIDogZm9yY2U7XG4gICAgICAgIGZvcmNlICAgICAgICAgPSBmb3JjZSA9PT0gdHJ1ZTtcbiAgICAgICAgdmFyIGkgICAgICAgICA9IDAsXG4gICAgICAgICAgICBuZXh0U3RhdGUgPSAhZGF0YSAmJiB7IC4uLnRoaXMuc3RhdGUsIC4uLnRoaXMuX2NoYW5nZXNTVyB9IHx8IHRoaXMuc3RhdGUsXG4gICAgICAgICAgICBuZXh0RGF0YXMgPSBkYXRhIHx8IHRoaXMuYXBwbHkodGhpcy5kYXRhLCBuZXh0U3RhdGUsIHRoaXMuX2NoYW5nZXNTVyk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLnN0YXRlICAgICAgPSBuZXh0U3RhdGU7XG4gICAgICAgIHRoaXMuX2NoYW5nZXNTVyA9IHt9O1xuICAgICAgICBpZiAoICFmb3JjZSAmJlxuICAgICAgICAgICAgKFxuICAgICAgICAgICAgICAgICF0aGlzLmhhc0RhdGFDaGFuZ2UobmV4dERhdGFzKVxuICAgICAgICAgICAgKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIGNiICYmIGNiKCk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRoaXMuZGF0YSA9IG5leHREYXRhcztcbiAgICAgICAgdGhpcy53YWl0KCk7XG4gICAgICAgIHRoaXMucmVsZWFzZShjYik7XG4gICAgICAgIFxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBVcGRhdGUgdGhlIGN1cnJlbnQgcHJpdmF0ZSBzdGF0ZSAmIHB1c2ggaXQgb25jZSB0aGUgc3RvcmUgaXMgc3RhYmxlXG4gICAgICogQHBhcmFtIHBTdGF0ZVxuICAgICAqIEBwYXJhbSBjYlxuICAgICAqL1xuICAgIHNldFN0YXRlKCBwU3RhdGUsIGNiLCBzeW5jICkge1xuICAgICAgICB2YXIgaSAgICAgICA9IDAsIGNoYW5nZSxcbiAgICAgICAgICAgIGNoYW5nZXMgPSB0aGlzLl9jaGFuZ2VzU1cgPSB0aGlzLl9jaGFuZ2VzU1cgfHwge307XG4gICAgICAgIGZvciAoIHZhciBrIGluIHBTdGF0ZSApXG4gICAgICAgICAgICBpZiAoICF0aGlzLnN0YXRlIHx8IHBTdGF0ZS5oYXNPd25Qcm9wZXJ0eShrKVxuICAgICAgICAgICAgICAgICYmIChcbiAgICAgICAgICAgICAgICAgICAgcFN0YXRlW2tdICE9IHRoaXMuc3RhdGVba11cbiAgICAgICAgICAgICAgICAgICAgfHxcbiAgICAgICAgICAgICAgICAgICAgKHRoaXMuc3RhdGVba10gJiYgcFN0YXRlW2tdICYmIChwU3RhdGVba10uX3JldiAhPSB0aGlzLl9yZXZzW2tdKSkvLyByZXYvaGFzaCB1cGRhdGVcbiAgICAgICAgICAgICAgICApICkge1xuICAgICAgICAgICAgICAgIGNoYW5nZSAgICAgICAgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuX3JldnNba10gPSBwU3RhdGVba10gJiYgcFN0YXRlW2tdLl9yZXYgfHwgdHJ1ZTtcbiAgICAgICAgICAgICAgICBjaGFuZ2VzW2tdICAgID0gcFN0YXRlW2tdO1xuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKCAhdGhpcy5zaG91bGRBcHBseSh7IC4uLnRoaXMuc3RhdGUsIC4uLmNoYW5nZXMgfSkgKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmICggc3luYyApIHtcbiAgICAgICAgICAgIHRoaXMucHVzaCgpO1xuICAgICAgICAgICAgY2IgJiYgY2IoKTtcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKCBjaGFuZ2UgKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGFiaWxpemUoY2IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBjYiAmJiBjYigpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBVcGRhdGUgdGhlIGN1cnJlbnQgcHJpdmF0ZSBzdGF0ZSAmIHB1c2ggaXQgb25jZSB0aGUgc3RvcmUgaXMgc3RhYmxlXG4gICAgICogQHBhcmFtIHBTdGF0ZVxuICAgICAqIEBwYXJhbSBjYlxuICAgICAqL1xuICAgIHNldFN0YXRlU3luYyggcFN0YXRlICkge1xuICAgICAgICB2YXIgaSAgICAgICA9IDAsIGNoYW5nZSxcbiAgICAgICAgICAgIGNoYW5nZXMgPSB0aGlzLl9jaGFuZ2VzU1cgPSB0aGlzLl9jaGFuZ2VzU1cgfHwge307XG4gICAgICAgIGZvciAoIHZhciBrIGluIHBTdGF0ZSApXG4gICAgICAgICAgICBpZiAoICF0aGlzLnN0YXRlIHx8IHBTdGF0ZS5oYXNPd25Qcm9wZXJ0eShrKVxuICAgICAgICAgICAgICAgICYmIChcbiAgICAgICAgICAgICAgICAgICAgcFN0YXRlW2tdICE9IHRoaXMuc3RhdGVba11cbiAgICAgICAgICAgICAgICAgICAgfHxcbiAgICAgICAgICAgICAgICAgICAgKHRoaXMuc3RhdGVba10gJiYgcFN0YXRlW2tdICYmIChwU3RhdGVba10uX3JldiAhPSB0aGlzLl9yZXZzW2tdKSkvLyByZXYvaGFzaCB1cGRhdGVcbiAgICAgICAgICAgICAgICApICkge1xuICAgICAgICAgICAgICAgIGNoYW5nZSAgICAgICAgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuX3JldnNba10gPSBwU3RhdGVba10gJiYgcFN0YXRlW2tdLl9yZXYgfHwgdHJ1ZTtcbiAgICAgICAgICAgICAgICBjaGFuZ2VzW2tdICAgID0gcFN0YXRlW2tdO1xuICAgICAgICAgICAgfVxuICAgICAgICB0aGlzLnNob3VsZEFwcGx5KHsgLi4uKHRoaXMuc3RhdGUgfHwge30pLCAuLi5jaGFuZ2VzIH0pICYmIHRoaXMucHVzaCgpO1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBSZXBsYWNlIHRoZSBjdXJyZW50IHByaXZhdGUgc3RhdGUgJiBwdXNoIGl0IG9uY2UgdGhlIHN0b3JlIGlzIHN0YWJsZVxuICAgICAqIEBwYXJhbSBwU3RhdGVcbiAgICAgKiBAcGFyYW0gY2JcbiAgICAgKi9cbiAgICByZXBsYWNlU3RhdGUoIHBTdGF0ZSwgY2IgKSB7XG4gICAgICAgIHZhciBpICAgICAgPSAwLCBtZSA9IHRoaXM7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBwU3RhdGU7XG4gICAgICAgIFxuICAgICAgICB0aGlzLnN0YWJpbGl6ZShjYik7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIGdldCBhIHN0b3JlLWtleSBwYWlyIGZvciBTdG9yZTo6bWFwXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICAgKiBAcmV0dXJucyB7e3N0b3JlOiBTdG9yZSwgbmFtZTogKn19XG4gICAgICovXG4gICAgYXMoIG5hbWUgKSB7XG4gICAgICAgIHJldHVybiB7IHN0b3JlOiB0aGlzLCBuYW1lIH07XG4gICAgfVxuICAgIFxuICAgIG9uKCBsaXN0cyApIHtcbiAgICAgICAgaWYgKCAhaXMuc3RyaW5nKGxpc3RzKSAmJiBsaXN0cyApXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhsaXN0cykuZm9yRWFjaChrID0+IHN1cGVyLm9uKGssIGxpc3RzW2tdKSk7XG4gICAgICAgIGVsc2Ugc3VwZXIub24oLi4uYXJndW1lbnRzKTtcbiAgICB9XG4gICAgXG4gICAgcmVtb3ZlTGlzdGVuZXIoIGxpc3RzICkge1xuICAgICAgICBpZiAoICFpcy5zdHJpbmcobGlzdHMpICYmIGxpc3RzIClcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGxpc3RzKS5mb3JFYWNoKGsgPT4gc3VwZXIucmVtb3ZlTGlzdGVuZXIoaywgbGlzdHNba10pKTtcbiAgICAgICAgZWxzZSBzdXBlci5yZW1vdmVMaXN0ZW5lciguLi5hcmd1bWVudHMpO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiByZWxpbmsgYmluZGluZ3MgJiByZXF1aXJlc1xuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gICAgICogQHJldHVybnMge3tzdG9yZTogU3RvcmUsIG5hbWU6ICp9fVxuICAgICAqL1xuICAgIHJlbGluayggZnJvbSApIHtcbiAgICAgICAgbGV0IHNjb3BlICAgPSB0aGlzLnNjb3BlT2JqLFxuICAgICAgICAgICAgX3N0YXRpYyA9IHRoaXMuY29uc3RydWN0b3I7XG4gICAgICAgIGlmICggX3N0YXRpYy51c2UgKSB7XG4gICAgICAgICAgICAvL3RvZG8gdW5saW5rXG4gICAgICAgICAgICB0aGlzLnB1bGwoX3N0YXRpYy51c2UsIGZhbHNlLCBmcm9tKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKCB0aGlzLl9yZXF1aXJlICkge1xuICAgICAgICAgICAgdGhpcy5fcmVxdWlyZS5mb3JFYWNoKFxuICAgICAgICAgICAgICAgIHN0b3JlID0+IChcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53YWl0KHNjb3BlLl9fc2NvcGVbc3RvcmVdKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogaXMgY29tcGxldGUgKGFsbCByZXF1aWVyZWQga2V5cyBhcmUgaGVyZSlcbiAgICAgKiBAcmV0dXJucyBib29sXG4gICAgICovXG4gICAgaXNDb21wbGV0ZSggc3RhdGUgPSB0aGlzLnN0YXRlICkge1xuICAgICAgICB2YXIgX3N0YXRpYyA9IHRoaXMuY29uc3RydWN0b3I7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAhdGhpcy5fcmVxdWlyZVxuICAgICAgICAgICAgfHwgIXRoaXMuX3JlcXVpcmUubGVuZ3RoXG4gICAgICAgICAgICB8fCBzdGF0ZSAmJiB0aGlzLl9yZXF1aXJlLnJlZHVjZShcbiAgICAgICAgICAgICAgICAoIHIsIGtleSApID0+IChyICYmIHN0YXRlW2tleV0pLFxuICAgICAgICAgICAgICAgIHRydWVcbiAgICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogaXMgc3RhYmxlXG4gICAgICogQHJldHVybnMgYm9vbFxuICAgICAqL1xuICAgIGlzU3RhYmxlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc3RhYmxlO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBVbiBiaW5kIHRoaXMgc3RvcmUgb2ZmIHRoZSBnaXZlbiBjb21wb25lbnQta2V5XG4gICAgICogQHBhcmFtIG9ialxuICAgICAqIEBwYXJhbSBrZXlcbiAgICAgKiBAcmV0dXJucyB7QXJyYXkuPCo+fVxuICAgICAqL1xuICAgIHVuQmluZCggb2JqLCBrZXksIHBhdGggKSB7XG4gICAgICAgIHZhciBmb2xsb3dlcnMgPSB0aGlzLl9mb2xsb3dlcnMsXG4gICAgICAgICAgICBpICAgICAgICAgPSBmb2xsb3dlcnMgJiYgZm9sbG93ZXJzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBmb2xsb3dlcnMgJiYgaS0tIClcbiAgICAgICAgICAgIGlmICggZm9sbG93ZXJzW2ldWzBdID09PSBvYmogJiYgZm9sbG93ZXJzW2ldWzFdID09PSBrZXkgJiYgZm9sbG93ZXJzW2ldWzJdID09PSBwYXRoIClcbiAgICAgICAgICAgICAgICByZXR1cm4gZm9sbG93ZXJzLnNwbGljZShpLCAxKTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogQmluZCB0aGlzIHN0b3JlIGNoYW5nZXMgdG8gdGhlIGdpdmVuIGNvbXBvbmVudC1rZXlcbiAgICAgKiBAcGFyYW0gb2JqIHtSZWFjdC5Db21wb25lbnR8U3RvcmV8ZnVuY3Rpb24pXG4gICAgICogQHBhcmFtIGtleSB7c3RyaW5nfSBvcHRpb25hbCBrZXkgd2hlcmUgdG8gbWFwIHRoZSBwdWJsaWMgc3RhdGVcbiAgICAgKi9cbiAgICBiaW5kKCBvYmosIGtleSwgc2V0SW5pdGlhbCA9IHRydWUsIHBhdGggKSB7XG4gICAgICAgIHRoaXMuX2ZvbGxvd2Vycy5wdXNoKFtvYmosIGtleSwgcGF0aF0pO1xuICAgICAgICBpZiAoIHNldEluaXRpYWwgJiYgdGhpcy5kYXRhICYmIHRoaXMuX3N0YWJsZSApIHtcbiAgICAgICAgICAgIGxldCBkYXRhID0gcGF0aCA/IHRoaXMucmV0cmlldmUocGF0aCkgOiB0aGlzLmRhdGE7XG4gICAgICAgICAgICBpZiAoIHR5cGVvZiBvYmogIT0gXCJmdW5jdGlvblwiICkge1xuICAgICAgICAgICAgICAgIGlmICgga2V5ICkgb2JqLnNldFN0YXRlKHsgW2tleV06IGRhdGEgfSk7XG4gICAgICAgICAgICAgICAgZWxzZSBvYmouc2V0U3RhdGUoZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBvYmooZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogb25jZSgnc3RhYmxlJywgY2IpXG4gICAgICogQHBhcmFtIG9iaiB7UmVhY3QuQ29tcG9uZW50fFN0b3JlfGZ1bmN0aW9uKVxuICAgICAqIEBwYXJhbSBrZXkge3N0cmluZ30gb3B0aW9uYWwga2V5IHdoZXJlIHRvIG1hcCB0aGUgcHVibGljIHN0YXRlXG4gICAgICovXG4gICAgdGhlbiggY2IgKSB7XG4gICAgICAgIGlmICggdGhpcy5fc3RhYmxlIClcbiAgICAgICAgICAgIHJldHVybiBjYihudWxsLCB0aGlzLmRhdGEpO1xuICAgICAgICB0aGlzLm9uY2UoJ3N0YWJsZScsIGUgPT4gY2IobnVsbCwgdGhpcy5kYXRhKSk7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIEFkZCBhIGxvY2sgc28gdGhlIHN0b3JlIHdpbGwgbm90IHByb3BhZyBpdCBzdGF0ZSB1bnRpbGwgcmVsZWFzZSgpIGlzIGNhbGxcbiAgICAgKiBAcGFyYW0gcHJldmlvdXMge1N0b3JlfG51bWJlcnxBcnJheX0gQG9wdGlvbmFsIHdmIHRvIHdhaXQsIHJlbGVhc2VzIHRvIHdhaXQgb3IgYXJyYXkgb2Ygc3R1ZmYgdG8gd2FpdFxuICAgICAqIEByZXR1cm5zIHtUYXNrRmxvd31cbiAgICAgKi9cbiAgICB3YWl0KCBwcmV2aW91cyApIHtcbiAgICAgICAgaWYgKCB0eXBlb2YgcHJldmlvdXMgPT0gXCJudW1iZXJcIiApXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fX2xvY2tzLmFsbCArPSBwcmV2aW91cztcbiAgICAgICAgaWYgKCBpcy5hcnJheShwcmV2aW91cykgKVxuICAgICAgICAgICAgcmV0dXJuIHByZXZpb3VzLm1hcCh0aGlzLndhaXQuYmluZCh0aGlzKSk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9zdGFibGUgJiYgdGhpcy5lbWl0KCd1bnN0YWJsZScsIHRoaXMuc3RhdGUsIHRoaXMuZGF0YSk7XG4gICAgICAgIHRoaXMuX3N0YWJsZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9fbG9ja3MuYWxsKys7XG4gICAgICAgIFxuICAgICAgICBsZXQgcmVhc29uID0gaXMuc3RyaW5nKHByZXZpb3VzKSA/IHByZXZpb3VzIDogbnVsbDtcbiAgICAgICAgaWYgKCByZWFzb24gKSB7XG4gICAgICAgICAgICB0aGlzLl9fbG9ja3NbcmVhc29uXSA9IHRoaXMuX19sb2Nrc1tyZWFzb25dIHx8IDA7XG4gICAgICAgICAgICB0aGlzLl9fbG9ja3NbcmVhc29uXSsrO1xuICAgICAgICB9XG4gICAgICAgIGlmICggcHJldmlvdXMgJiYgaXMuZm4ocHJldmlvdXMudGhlbikgKSB7XG4gICAgICAgICAgICBwcmV2aW91cy50aGVuKHRoaXMucmVsZWFzZS5iaW5kKHRoaXMsIG51bGwpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogRGVjcmVhc2UgbG9ja3MgZm9yIHRoaXMgc3RvcmUsIGlmIGl0IHJlYWNoIDAgJiBpdCBoYXZlIGEgcHVibGljIHN0YXRlLFxuICAgICAqIGl0IHdpbGwgYmUgcHJvcGFnYXRlZCB0byB0aGUgZm9sbG93ZXJzLFxuICAgICAqIHRoZW4sIGFsbCBzdHVmZiBwYXNzZWQgdG8gXCJ0aGVuXCIgY2FsbCBiYWNrIHdpbGwgYmUgZXhlYyAvIHJlbGVhc2VkXG4gICAgICogQHBhcmFtIGRlc3luY1xuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqL1xuICAgIHJlbGVhc2UoIHJlYXNvbiwgY2IgKSB7XG4gICAgICAgIHZhciBfc3RhdGljID0gdGhpcy5jb25zdHJ1Y3RvcjtcbiAgICAgICAgbGV0IGkgICAgICAgPSAwLCB3YXNTdGFibGUgPSB0aGlzLl9zdGFibGU7XG4gICAgICAgIFxuICAgICAgICBpZiAoIGlzLmZuKHJlYXNvbikgKSB7XG4gICAgICAgICAgICBjYiAgICAgPSByZWFzb247XG4gICAgICAgICAgICByZWFzb24gPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAoIHJlYXNvbiApIHtcbiAgICAgICAgICAgIGlmICggdGhpcy5fX2xvY2tzW3JlYXNvbl0gPT0gMCApXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlJlbGVhc2UgbW9yZSB0aGFuIGxvY2tpbmcgIVwiLCByZWFzb24pO1xuICAgICAgICAgICAgdGhpcy5fX2xvY2tzW3JlYXNvbl0gPSB0aGlzLl9fbG9ja3NbcmVhc29uXSB8fCAwO1xuICAgICAgICAgICAgdGhpcy5fX2xvY2tzW3JlYXNvbl0tLTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKCAhcmVhc29uICYmIHRoaXMuX19sb2Nrcy5hbGwgPT0gMCApXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiUmVsZWFzZSBtb3JlIHRoYW4gbG9ja2luZyAhXCIpO1xuICAgICAgICBcbiAgICAgICAgaWYgKCAhLS10aGlzLl9fbG9ja3MuYWxsICYmIHRoaXMuZGF0YSAmJiB0aGlzLmlzQ29tcGxldGUoKSApIHtcbiAgICAgICAgICAgIGxldCBwcm9wYWcgICA9IHRoaXMuc2hvdWxkUHJvcGFnKHRoaXMuZGF0YSk7XG4gICAgICAgICAgICB0aGlzLl9zdGFibGUgPSB0cnVlO1xuICAgICAgICAgICAgcHJvcGFnICYmIHRoaXMuX3JldisrOy8vXG4gICAgICAgICAgICBpZiAoIHByb3BhZyAmJiB0aGlzLl9mb2xsb3dlcnMubGVuZ3RoIClcbiAgICAgICAgICAgICAgICB0aGlzLl9mb2xsb3dlcnMuZm9yRWFjaCgoIGZvbGxvd2VyICkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IGZvbGxvd2VyWzJdID8gdGhpcy5yZXRyaWV2ZShmb2xsb3dlclsyXSkgOiB0aGlzLmRhdGE7XG4gICAgICAgICAgICAgICAgICAgIGlmICggIWRhdGEgKSByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIGlmICggdHlwZW9mIGZvbGxvd2VyWzBdID09IFwiZnVuY3Rpb25cIiApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbGxvd2VyWzBdKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9jYiAmJiBpKys7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb2xsb3dlclswXS5zZXRTdGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZm9sbG93ZXJbMV0pID8geyBbZm9sbG93ZXJbMV1dOiBkYXRhIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBkYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9jYiAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgKCkgPT4gKCEoLS1pKSAmJiBjYigpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vKVxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy9lbHNlXG4gICAgICAgICAgICAhd2FzU3RhYmxlICYmIHRoaXMuZW1pdCgnc3RhYmxlJywgdGhpcy5kYXRhKTtcbiAgICAgICAgICAgIHByb3BhZyAmJiB0aGlzLmVtaXQoJ3VwZGF0ZScsIHRoaXMuZGF0YSk7XG4gICAgICAgICAgICBjYiAmJiBjYigpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBjYiAmJiB0aGlzLnRoZW4oY2IpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgXG4gICAgcmV0YWluKCByZWFzb24gKSB7XG4gICAgICAgIHRoaXMuX19yZXRhaW5zLmFsbCsrO1xuICAgICAgICBpZiAoIHJlYXNvbiApIHtcbiAgICAgICAgICAgIHRoaXMuX19yZXRhaW5zW3JlYXNvbl0gPSB0aGlzLl9fcmV0YWluc1tyZWFzb25dIHx8IDA7XG4gICAgICAgICAgICB0aGlzLl9fcmV0YWluc1tyZWFzb25dKys7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgZGlzcG9zZSggcmVhc29uICkge1xuICAgICAgICAvL2NvbnNvbGUud2FybihcImRpc3Bvc2VcIiwgcmVhc29uLCB0aGlzLl9fcmV0YWlucyk7XG4gICAgICAgIGlmICggcmVhc29uICkge1xuICAgICAgICAgICAgaWYgKCAhdGhpcy5fX3JldGFpbnNbcmVhc29uXSApXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRGlzcG9zZSBtb3JlIHRoYW4gcmV0YWluaW5nIDogXCIgKyByZWFzb24pO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLl9fcmV0YWluc1tyZWFzb25dLS07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCB0aGlzLl9fcmV0YWlucy5hbGwgPT0gMCApXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJEaXNwb3NlIG1vcmUgdGhhbiByZXRhaW5pbmcgIVwiKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX19yZXRhaW5zLmFsbC0tO1xuICAgICAgICBcbiAgICAgICAgaWYgKCAhdGhpcy5fX3JldGFpbnMuYWxsICkge1xuICAgICAgICAgICAgaWYgKCB0aGlzLl9wZXJzaXN0ZW5jZVRtICkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2Rlc3Ryb3lUTSAmJiBjbGVhclRpbWVvdXQodGhpcy5fZGVzdHJveVRNKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9kZXN0cm95VE0gPSBzZXRUaW1lb3V0KFxuICAgICAgICAgICAgICAgICAgICBlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2Rlc3Ryb3lUTSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRoZW4ocyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIXRoaXMuX19yZXRhaW5zLmFsbCAmJiB0aGlzLmRlc3Ryb3koKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3BlcnNpc3RlbmNlVG1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy50aGVuKHMgPT4gKCF0aGlzLl9fcmV0YWlucy5hbGwgJiYgdGhpcy5kZXN0cm95KCkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBkZXN0cm95KCkge1xuICAgICAgICAvLyAgY29uc29sZS5sb2coXCJkZXN0cm95XCIsIHRoaXMuX3VpZCk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmVtaXQoJ2Rlc3Ryb3knLCB0aGlzKTtcbiAgICAgICAgaWYgKCB0aGlzLl9zdGFiaWxpemVyIClcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9zdGFiaWxpemVyKTtcbiAgICAgICAgXG4gICAgICAgIGlmICggdGhpcy5fZm9sbG93ZXJzLmxlbmd0aCApXG4gICAgICAgICAgICB0aGlzLl9mb2xsb3dlcnMuZm9yRWFjaChcbiAgICAgICAgICAgICAgICAoIGZvbGxvd2VyICkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIHR5cGVvZiBmb2xsb3dlclswXSAhPT0gXCJmdW5jdGlvblwiICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBmb2xsb3dlclswXS5zdG9yZXMgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBmb2xsb3dlclswXS5zdG9yZXNbZm9sbG93ZXJbMV1dO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgdGhpcy5fZm9sbG93ZXJzLmxlbmd0aCA9IDA7XG4gICAgICAgIHRoaXMuY29uc3RydWN0b3IuX3JldiAgPSB0aGlzLnJldjtcbiAgICAgICAgdGhpcy5kZWFkICAgICAgICAgICAgICA9IHRydWU7XG4gICAgICAgIHRoaXMuX3JldnMgICAgICAgICAgICAgPSB0aGlzLmRhdGEgPSB0aGlzLnN0YXRlID0gdGhpcy5zY29wZSA9IG51bGw7XG4gICAgICAgIHRoaXMucmVtb3ZlQWxsTGlzdGVuZXJzKCk7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9TdG9yZS5qcyIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpICAyMDE4IFdpc2UgV2lsZCBXZWIgLlxuICpcbiAqICBNSVQgTGljZW5zZVxuICogIFxuICogIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqICBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiAgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqICBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqICBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICogIFxuICogIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuICogIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKiAgXG4gKiAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqICBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG4gKiAgU09GVFdBUkUuXG4gKiAgXG4gKiBAYXV0aG9yIDogTmF0aGFuYWVsIEJyYXVuXG4gKiBAY29udGFjdCA6IGNhaXBpbGFic0BnbWFpbC5jb21cbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgaXMgZnJvbSAnaXMnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFNjb3BlIGZyb20gJy4vU2NvcGUnO1xuXG4vKipcbiAqIEluaGVyaXRhYmxlIFJlU2NvcGUgXCJIT0NcIiAoSGlnaCBPcmRlciBDb21wb25lbnQpXG4gKlxuICogQGNsYXNzIENvbXBvbmVudFxuICogQGRlc2MgUGFyZW50IFJlYWN0IENvbXBvbmVudCB3aXRoIHN0b3JlIGluamVjdGlvbiBpbiBpdHMgc3RhdGVcbiAqL1xuY2xhc3MgQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgY2hpbGRDb250ZXh0VHlwZXMgPSB7XG4gICAgICAgIHJlc2NvcGU6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgICAgICRzdG9yZXM6IFByb3BUeXBlcy5vYmplY3RcbiAgICB9XG4gICAgc3RhdGljIGNvbnRleHRUeXBlcyAgICAgID0ge1xuICAgICAgICByZXNjb3BlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgICAgICAkc3RvcmVzOiBQcm9wVHlwZXMub2JqZWN0XG4gICAgfVxuICAgIFxuICAgIGNvbnN0cnVjdG9yKCBwLCBjdHgsIHEgKSB7XG4gICAgICAgIHN1cGVyKHAsIGN0eCwgcSk7XG4gICAgICAgIGxldCBzY29wZSAgICA9XG4gICAgICAgICAgICAgICAgcC5fX3Njb3BlXG4gICAgICAgICAgICAgICAgfHwgY3R4LnJlc2NvcGU7XG4gICAgICAgIHRoaXMuJHNjb3BlICA9IHNjb3BlO1xuICAgICAgICB0aGlzLiRzdG9yZXMgPSB0aGlzLiRzY29wZS5zdG9yZXM7XG4gICAgICAgIGlmICggdGhpcy5jb25zdHJ1Y3Rvci51c2UgKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUsXG4gICAgICAgICAgICAgICAgLi4uc2NvcGUubWFwKHRoaXMsIHRoaXMuY29uc3RydWN0b3IudXNlIHx8IFtdLCBmYWxzZSkvLyBkb24ndCBiaW5kXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoICF0aGlzLiRzY29wZSApXG4gICAgICAgICAgICB0aGlzLnJlbmRlciA9ICgpID0+IDxkaXY+Tm8gUmVzY29wZSBoZXJlIHsgc3VwZXIubmFtZSB9PC9kaXY+XG4gICAgfVxuICAgIFxuICAgIGRpc3BhdGNoKCAuLi5hcmd6ICkge1xuICAgICAgICB0aGlzLiRzY29wZSAmJiB0aGlzLiRzY29wZS5kaXNwYXRjaCguLi5hcmd6KVxuICAgIH1cbiAgICBcbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICAgIGlmICggdGhpcy5jb25zdHJ1Y3Rvci51c2UgKSB7XG4gICAgICAgICAgICB0aGlzLiRzY29wZS5iaW5kKHRoaXMsIHRoaXMuY29uc3RydWN0b3IudXNlIHx8IFtdLCBmYWxzZSlcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgdGhpcy5jb25zdHJ1Y3Rvci51c2VcbiAgICAgICAgJiYgdGhpcy4kc2NvcGUudW5CaW5kKHRoaXMsIHRoaXMuY29uc3RydWN0b3IudXNlIHx8IFtdKTtcbiAgICAgICAgdGhpcy4kc2NvcGUgPSBudWxsO1xuICAgIH1cbiAgICBcbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKCBucCwgbmMgKSB7XG4gICAgICAgIGxldCBuU2NvcGUgPSBucC5fX3Njb3BlXG4gICAgICAgICAgICB8fCBuYy5yZXNjb3BlIHx8IHRoaXMuJHNjb3BlO1xuICAgICAgICBcbiAgICAgICAgaWYgKCBuU2NvcGUgIT0gdGhpcy4kc2NvcGUgKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnN0cnVjdG9yLnVzZSAmJiB0aGlzLiRzY29wZS51bkJpbmQodGhpcywgdGhpcy5jb25zdHJ1Y3Rvci51c2UpO1xuICAgICAgICAgICAgdGhpcy4kc2NvcGUgID0gblNjb3BlO1xuICAgICAgICAgICAgdGhpcy4kc3RvcmVzID0gdGhpcy4kc2NvcGUuc3RvcmVzO1xuICAgICAgICAgICAgdGhpcy5jb25zdHJ1Y3Rvci51c2UgJiYgblNjb3BlLmJpbmQodGhpcywgdGhpcy5jb25zdHJ1Y3Rvci51c2UpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGdldENoaWxkQ29udGV4dCgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJlc2NvcGU6IHRoaXMuJHNjb3BlIHx8IHRoaXMuY29udGV4dC5yZXNjb3BlLFxuICAgICAgICAgICAgJHN0b3JlczogdGhpcy4kc2NvcGUuc3RvcmVzIHx8IHRoaXMuY29udGV4dC4kc3RvcmVzXG4gICAgICAgIH07XG4gICAgfVxuICAgIFxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuY2hpbGRyZW4gfHwgPGRpdi8+XG4gICAgfVxufTtcblxuLyoqXG4gKiBSZXR1cm4gYSBSZWFjdCBcIkhPQ1wiIChIaWdoIE9yZGVyIENvbXBvbmVudCkgdGhhdCA6XG4gKiAgLSBJbmhlcml0IEJhc2VDb21wb25lbnQsXG4gKiAgLSBJbmplY3QgJiBtYWludGFpbiB0aGUgc3RvcmVzIGluIEJhc2VDb21wb25lbnQ6OnVzZSBhbmQvb3IgKHVzZSkgaW4gdGhlIGluc3RhbmNlcyBzdGF0ZS5cbiAqICAtIFByb3BhZyAoc2NvcGUpIGluIHRoZSByZXR1cm5lZCBSZWFjdCBDb21wb25lbnQgY29udGV4dFxuICpcbiAqXG4gKiBAcGFyYW0gQmFzZUNvbXBvbmVudCB7UmVhY3QuQ29tcG9uZW50fSBCYXNlIFJlYWN0IENvbXBvbmVudCAoIGRlZmF1bHQgOiBSZWFjdC5Db21wb25lbnQgKVxuICogQHBhcmFtIHNjb3BlIHtSZVNjb3BlLlNjb3BlfGZ1bmN0aW9ufSB0aGUgcHJvcGFnYXRlZCBTY29wZSB3aGVyZSB0aGUgc3RvcmVzIHdpbGwgYmUgc2VhcmNoZWRcbiAqIEBwYXJhbSB1c2Uge2FycmF5fSB0aGUgbGlzdCBvZiBzdG9yZXMgaW5qZWN0ZWQgZnJvbSB0aGUgY3VycmVudCBzY29wZVxuICogQHJldHVybnMge1JlU2NvcGVQcm92aWRlcn1cbiAqL1xuZnVuY3Rpb24gcmVTY29wZVN0YXRlKCAuLi5hcmd6ICkge1xuICAgIGxldCBbQmFzZUNvbXBvbmVudCwgc2NvcGUsIHVzZV0gPSBhcmd6O1xuICAgIFxuICAgIFxuICAgIGlmICggIShCYXNlQ29tcG9uZW50ICYmIEJhc2VDb21wb25lbnQucHJvdG90eXBlICYmIEJhc2VDb21wb25lbnQucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQpICkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCBCYXNlQ29tcG9uZW50ICkge1xuICAgICAgICAgICAgcmV0dXJuIHJlU2NvcGVTdGF0ZShCYXNlQ29tcG9uZW50LCAuLi5hcmd6KVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGlmICggIXVzZSAmJiBpcy5hcnJheShzY29wZSkgKSB7XG4gICAgICAgIHVzZSAgID0gc2NvcGU7XG4gICAgICAgIHNjb3BlID0gbnVsbDtcbiAgICB9XG4gICAgXG4gICAgdXNlID0gWy4uLihCYXNlQ29tcG9uZW50LnVzZSB8fCBbXSksIC4uLih1c2UgfHwgW10pXTtcbiAgICBcbiAgICBjbGFzcyBSZVNjb3BlUHJvdmlkZXIgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgICAgICAgc3RhdGljIGNoaWxkQ29udGV4dFR5cGVzID0ge1xuICAgICAgICAgICAgLi4uKEJhc2VDb21wb25lbnQuY2hpbGRDb250ZXh0VHlwZXMgfHwge30pLFxuICAgICAgICAgICAgcmVzY29wZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICAgICAgICAgICRzdG9yZXM6IFByb3BUeXBlcy5vYmplY3RcbiAgICAgICAgfVxuICAgICAgICBzdGF0aWMgY29udGV4dFR5cGVzICAgICAgPSB7XG4gICAgICAgICAgICAuLi4oQmFzZUNvbXBvbmVudC5jb250ZXh0VHlwZXMgfHwge30pLFxuICAgICAgICAgICAgcmVzY29wZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICAgICAgICAgICRzdG9yZXM6IFByb3BUeXBlcy5vYmplY3RcbiAgICAgICAgfVxuICAgICAgICBzdGF0aWMgZGVmYXVsdFByb3BzICAgICAgPSB7XG4gICAgICAgICAgICAuLi4oQmFzZUNvbXBvbmVudC5kZWZhdWx0UHJvcHMgfHwge30pLFxuICAgICAgICB9XG4gICAgICAgIHN0YXRpYyBkaXNwbGF5TmFtZSAgICAgICA9IFwic3RhdGVTY29wZWQoXCIgKyAoQmFzZUNvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBCYXNlQ29tcG9uZW50Lm5hbWUpICsgXCIpXCI7XG4gICAgICAgIFxuICAgICAgICBjb25zdHJ1Y3RvciggcCwgY3R4LCBxICkge1xuICAgICAgICAgICAgc3VwZXIocCwgY3R4LCBxKTtcbiAgICAgICAgICAgIHRoaXMuJHNjb3BlID1cbiAgICAgICAgICAgICAgICBwLl9fc2NvcGVcbiAgICAgICAgICAgICAgICB8fCBpcy5mbihzY29wZSkgJiYgc2NvcGUodGhpcywgcCwgY3R4KSB8fCBzY29wZVxuICAgICAgICAgICAgICAgIHx8IGN0eC5yZXNjb3BlO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpcy5mbihzY29wZSlcbiAgICAgICAgICAgICYmIHRoaXMuJHNjb3BlLnJldGFpbigpXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMuJHN0b3JlcyA9IHRoaXMuJHNjb3BlLnN0b3JlcztcbiAgICAgICAgICAgIGlmICggdGhpcy4kc2NvcGUgJiYgdXNlLmxlbmd0aCApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgICAgICAgICAuLi50aGlzLnN0YXRlLFxuICAgICAgICAgICAgICAgICAgICAuLi50aGlzLiRzY29wZS5tYXAodGhpcywgdXNlLCBmYWxzZSkvLyBkb24ndCBiaW5kIG5vdyBkdWUgdG8gU1NSXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoICF0aGlzLiRzY29wZSApXG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXIgPSAoKSA9PiA8ZGl2Pk5vIFJlc2NvcGUgaGVyZSB7IEJhc2VDb21wb25lbnQubmFtZSB9PC9kaXY+XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICRkaXNwYXRjaCggLi4uYXJneiApIHtcbiAgICAgICAgICAgIHRoaXMuJHNjb3BlLmRpc3BhdGNoKC4uLmFyZ3opXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgICAgICAgIGlmICggdXNlLmxlbmd0aCApIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRzY29wZS5iaW5kKHRoaXMsIHVzZSwgZmFsc2UpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzdXBlci5jb21wb25lbnRXaWxsTW91bnQgJiYgc3VwZXIuY29tcG9uZW50V2lsbE1vdW50KClcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgICAgICBzdXBlci5jb21wb25lbnRXaWxsVW5tb3VudCAmJiBzdXBlci5jb21wb25lbnRXaWxsVW5tb3VudCgpXG4gICAgICAgICAgICB1c2UubGVuZ3RoXG4gICAgICAgICAgICAmJiB0aGlzLiRzY29wZS51bkJpbmQodGhpcywgdXNlKTtcbiAgICAgICAgICAgIGlzLmZuKHNjb3BlKVxuICAgICAgICAgICAgJiYgdGhpcy4kc2NvcGUuZGlzcG9zZSgpO1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuJHN0b3JlcztcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLiRzY29wZTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyggbnAsIG5jICkge1xuICAgICAgICAgICAgbGV0IG5TY29wZSA9IG5wLl9fc2NvcGVcbiAgICAgICAgICAgICAgICB8fCBzY29wZSAmJiB0aGlzLiRzY29wZVxuICAgICAgICAgICAgICAgIHx8IG5jLnJlc2NvcGVcbiAgICAgICAgICAgICAgICB8fCB0aGlzLiRzY29wZTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKCBuU2NvcGUgIT0gdGhpcy4kc2NvcGUgKSB7XG4gICAgICAgICAgICAgICAgdXNlLmxlbmd0aCAmJiB0aGlzLiRzY29wZS51bkJpbmQodGhpcywgdXNlKTtcbiAgICAgICAgICAgICAgICB0aGlzLiRzY29wZSAgPSBuU2NvcGU7XG4gICAgICAgICAgICAgICAgdGhpcy4kc3RvcmVzID0gdGhpcy4kc2NvcGUuc3RvcmVzO1xuICAgICAgICAgICAgICAgIHVzZS5sZW5ndGggJiYgblNjb3BlLmJpbmQodGhpcywgdXNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN1cGVyLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgJiYgc3VwZXIuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhucCwgbmMpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBnZXRDaGlsZENvbnRleHQoKSB7XG4gICAgICAgICAgICBsZXQgY3R4ID0gc3VwZXIuZ2V0Q2hpbGRDb250ZXh0ICYmIHN1cGVyLmdldENoaWxkQ29udGV4dCgpIHx8IHt9O1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5jdHgsXG4gICAgICAgICAgICAgICAgcmVzY29wZTogdGhpcy4kc2NvcGUgfHwgdGhpcy5jb250ZXh0LnJlc2NvcGUsXG4gICAgICAgICAgICAgICAgJHN0b3JlczogdGhpcy4kc2NvcGUuc3RvcmVzIHx8IHRoaXMuY29udGV4dC4kc3RvcmVzXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIHJldHVybiBSZVNjb3BlUHJvdmlkZXI7XG59XG5cbi8qKlxuICogUmV0dXJuIGEgUmVhY3QgXCJIT0NcIiAoSGlnaCBPcmRlciBDb21wb25lbnQpIHRoYXQgOlxuICogIC0gSW5qZWN0ICYgbWFpbnRhaW4gdGhlIHN0b3JlcyBsaXN0ZWQgYmFzZUNvbXBvbmVudDo6dXNlIGFuZC9vciAodXNlKSBpbiB0aGUgaW5zdGFuY2VzIHByb3BzLlxuICogIC0gUHJvcGFnIChzY29wZSkgaW4gdGhlIHJldHVybmVkIFJlYWN0IENvbXBvbmVudCBjb250ZXh0XG4gKlxuICogQHBhcmFtIEJhc2VDb21wb25lbnQge1JlYWN0LkNvbXBvbmVudH0gQmFzZSBSZWFjdCBDb21wb25lbnQgKCBkZWZhdWx0IDogUmVhY3QuQ29tcG9uZW50IClcbiAqIEBwYXJhbSBzY29wZSB7UmVTY29wZS5TY29wZXxmdW5jdGlvbn0gdGhlIHByb3BhZ2F0ZWQgU2NvcGUgd2hlcmUgdGhlIHN0b3JlcyB3aWxsIGJlIHNlYXJjaGVkICggZGVmYXVsdCA6IHRoZSBkZWZhdWx0XG4gKiAgICAgUmVTY29wZTo6U2NvcGU6OnNjb3Blcy5zdGF0aWMgc2NvcGUgKVxuICogQHBhcmFtIHVzZSB7YXJyYXl9IHRoZSBsaXN0IG9mIHN0b3JlcyB0byBpbmplY3QgZnJvbSB0aGUgY3VycmVudCBzY29wZVxuICogQHJldHVybnMge1JlU2NvcGVQcm92aWRlcn1cbiAqL1xuZnVuY3Rpb24gcmVTY29wZVByb3BzKCAuLi5hcmd6ICkge1xuICAgIGxldCBbQmFzZUNvbXBvbmVudCwgc2NvcGUsIHVzZV0gPSBhcmd6O1xuICAgIFxuICAgIGlmICggIShCYXNlQ29tcG9uZW50ICYmIEJhc2VDb21wb25lbnQucHJvdG90eXBlICYmIEJhc2VDb21wb25lbnQucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQpICkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCBCYXNlQ29tcG9uZW50ICkge1xuICAgICAgICAgICAgcmV0dXJuIHJlU2NvcGVQcm9wcyhCYXNlQ29tcG9uZW50LCAuLi5hcmd6KVxuICAgICAgICB9XG4gICAgfVxuICAgIGlmICggIXVzZSAmJiBpcy5hcnJheShzY29wZSkgKSB7XG4gICAgICAgIHVzZSAgID0gc2NvcGU7XG4gICAgICAgIHNjb3BlID0gbnVsbDtcbiAgICB9XG4gICAgXG4gICAgdXNlID0gWy4uLihCYXNlQ29tcG9uZW50LnVzZSB8fCBbXSksIC4uLih1c2UgfHwgW10pXTtcbiAgICBcbiAgICBcbiAgICByZXR1cm4gcmVTY29wZVN0YXRlKGNsYXNzIFJlU2NvcGVQcm9wc1Byb3ZpZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICAgICAgc3RhdGljIGNoaWxkQ29udGV4dFR5cGVzID0ge1xuICAgICAgICAgICAgLi4uKEJhc2VDb21wb25lbnQuY29udGV4dFR5cGVzIHx8IHt9KSxcbiAgICAgICAgICAgIHJlc2NvcGU6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgICAgICAgICAkc3RvcmVzOiBQcm9wVHlwZXMub2JqZWN0XG4gICAgICAgIH07XG4gICAgICAgIHN0YXRpYyBjb250ZXh0VHlwZXMgICAgICA9IHtcbiAgICAgICAgICAgIC4uLihCYXNlQ29tcG9uZW50LmNvbnRleHRUeXBlcyB8fCB7fSksXG4gICAgICAgICAgICByZXNjb3BlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgICAgICAgICAgJHN0b3JlczogUHJvcFR5cGVzLm9iamVjdFxuICAgICAgICB9O1xuICAgICAgICBzdGF0aWMgZGlzcGxheU5hbWUgICAgICAgPSBcInByb3BzU2NvcGVkKFwiICsgKEJhc2VDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQmFzZUNvbXBvbmVudC5uYW1lKSArIFwiKVwiO1xuICAgICAgICBcbiAgICAgICAgZ2V0Q2hpbGRDb250ZXh0KCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29udGV4dDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmVuZGVyKCkge1xuICAgICAgICAgICAgcmV0dXJuIDxCYXNlQ29tcG9uZW50IHsgLi4udGhpcy5wcm9wcyB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyAuLi50aGlzLnN0YXRlIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZGlzcGF0Y2g9eyAoIC4uLmFyZ3ogKSA9PiB0aGlzLiRkaXNwYXRjaCguLi5hcmd6KSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHN0b3Jlcz17IHRoaXMuJHN0b3JlcyB9Lz5cbiAgICAgICAgfVxuICAgIH0sIHNjb3BlLCB1c2UpO1xufVxuXG5leHBvcnQge1xuICAgIENvbXBvbmVudCBhcyBkZWZhdWx0LFxuICAgIENvbXBvbmVudCxcbiAgICByZVNjb3BlUHJvcHMsXG4gICAgcmVTY29wZVByb3BzIGFzIHJlc2NvcGVQcm9wcyxcbiAgICByZVNjb3BlU3RhdGUsXG4gICAgcmVTY29wZVN0YXRlIGFzIHJlc2NvcGVTdGF0ZVxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvUmVhY3RUb29scy5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVhY3RcIlxuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicHJvcC10eXBlc1wiXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=