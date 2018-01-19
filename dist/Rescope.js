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
	        var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
	            id = _ref2.id,
	            parent = _ref2.parent,
	            state = _ref2.state,
	            data = _ref2.data,
	            name = _ref2.name,
	            incrementId = _ref2.incrementId,
	            defaultMaxListeners = _ref2.defaultMaxListeners,
	            persistenceTm = _ref2.persistenceTm,
	            autoDestroy = _ref2.autoDestroy,
	            rootEmitter = _ref2.rootEmitter;
	
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
	            var _this7 = this;
	
	            var setInitial = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
	
	            var lastRevs = void 0,
	                data = void 0,
	                refKeys = void 0;
	            if (key && !is.array(key)) key = [key];
	
	            if (as === false || as === true) {
	                setInitial = as;
	                as = null;
	            }
	
	            refKeys = key.map(function (id) {
	                return is.string(id) ? id : id.name;
	            }).map(function (id) {
	                return _this7.parseRef(id);
	            });
	
	            this._followers.push([obj, key, as || undefined, lastRevs = refKeys.reduce(function (revs, ref) {
	                revs[ref.storeId] = revs[ref.storeId] || {
	                    rev: 0,
	                    refs: []
	                };
	                revs[ref.storeId].refs.push(ref);
	                return revs;
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
	            var _this8 = this;
	
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
	
	                    _this8.unBind(to, storesList);
	                    return to[unMountKey] && to[unMountKey].apply(to, arguments);
	                };
	            }
	            return storesList.reduce(function (data, id) {
	                if (!is.string(id)) id = id.name;
	                id = id.split(':'); //@todo
	                id[0] = id[0].split('.');
	                data[id[1] || id[0][id[0].length - 1]] = _this8.stores[id[0][0]] && _this8.stores[id[0][0]].retrieve && _this8.stores[id[0][0]].retrieve(id[0].splice(1));
	                return data;
	            }, {});
	        }
	    }, {
	        key: 'retrieve',
	        value: function retrieve() {
	            var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
	
	            path = is.string(path) ? path.split('.') : path;
	            return path && this.stores[path[0]] && this.stores[path[0]].retrieve(path.slice(1));
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
	            var _this9 = this;
	
	            var ctx = this.__scope;
	
	            output = output || {};
	            Object.keys(ctx).forEach(function (id) {
	                if (!output.hasOwnProperty(id) && !is.fn(ctx[id]) && (!storesRevMap || storesRevMap.hasOwnProperty(id) && storesRevMap[id] === undefined || !(!storesRevMap.hasOwnProperty(id) || ctx[id]._rev <= storesRevMap[id].rev))) {
	
	                    updated = true;
	                    output[id] = _this9.data[id];
	
	                    if (storesRevMap && storesRevMap.hasOwnProperty(id)) {
	                        storesRevMap[id].rev = ctx[id]._rev;
	                        storesRevMap[id].refs.forEach(function (ref) {
	                            //console.warn("update ref ", ref.ref, this.retrieve(ref.path));
	                            output[ref.alias] = _this9.retrieve(ref.path);
	                        });
	                    } else {
	                        //console.warn("update ", id, this.data[id]);
	                        output[id] = _this9.data[id];
	                    }
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
	            var _this10 = this;
	
	            var flags_states = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : /.*/;
	            var flags_data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : /.*/;
	
	            var ctx = this.__scope,
	                output = { state: {}, data: {} },
	                _flags_states = void 0,
	                _flags_data = void 0;
	            if (is.array(flags_states)) flags_states.forEach(function (id) {
	                return output.state[id] = _this10.state[id];
	            });
	
	            if (is.array(flags_data)) flags_data.forEach(function (id) {
	                return output.data[id] = _this10.data[id];
	            });
	
	            if (!is.array(flags_data) && !is.array(flags_states)) Object.keys(ctx).forEach(function (id) {
	                if (is.fn(ctx[id])) return;
	
	                var flags = ctx[id].constructor.flags;
	
	                flags = is.array(flags) ? flags : [flags || ""];
	
	                if (flags.reduce(function (r, flag) {
	                    return r || flags_states.test(flag);
	                }, false)) output.state[id] = _this10.state[id];
	
	                if (flags.reduce(function (r, flag) {
	                    return r || flags_data.test(flag);
	                }, false)) output.data[id] = _this10.data[id];
	            });
	            return output;
	        }
	    }, {
	        key: 'parseRef',
	        value: function parseRef(_ref) {
	            var ref = _ref.split(':');
	            ref[0] = ref[0].split('.');
	            return {
	                storeId: ref[0][0],
	                path: ref[0],
	                alias: ref[1] || ref[0][ref[0].length - 1],
	                ref: _ref
	            };
	        }
	    }, {
	        key: 'dispatch',
	        value: function dispatch(action, data) {
	            var _this11 = this;
	
	            Object.keys(this.__scope).forEach(function (id) {
	                if (!is.fn(_this11.__scope[id])) _this11.__scope[id].trigger(action, data);
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
	            var _this12 = this;
	
	            if (this._stable) return cb(null, this.data);
	            this.once('stable', function (e) {
	                return cb(null, _this12.data);
	            });
	        }
	    }, {
	        key: 'restore',
	        value: function restore(_ref3, quiet) {
	            var state = _ref3.state,
	                data = _ref3.data;
	
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
	            var _this15 = this;
	
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
	                    _this15._stabilizerTM = null;
	                    if (_this15.__locks.all) return;
	
	                    _this15._propagTM && clearTimeout(_this15._propagTM);
	
	                    _this15._stable = true;
	                    _this15.emit("stable", _this15);
	
	                    !_this15.dead && _this15._propag(); // stability can induce destroy
	                });
	            }
	        }
	    }, {
	        key: 'propag',
	        value: function propag() {
	            var _this16 = this;
	
	            this._propagTM && clearTimeout(this._propagTM);
	            this._propagTM = setTimeout(function (e) {
	                _this16._propagTM = null;
	                _this16._propag();
	            }, 2);
	        }
	    }, {
	        key: '_propag',
	        value: function _propag() {
	            var _this17 = this;
	
	            if (this._followers.length) this._followers.forEach(function (_ref4) {
	                var obj = _ref4[0],
	                    key = _ref4[1],
	                    as = _ref4[2],
	                    lastRevs = _ref4[3],
	                    remaps = _ref4[3];
	
	                var data = _this17.getUpdates(lastRevs);
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
	            var _this18 = this;
	
	            this._childScopes.push(ctx);
	            var lists = {
	                'stable': function stable(s) {
	                    _this18._unStableChilds--;
	                    if (!_this18._unStableChilds) _this18.emit("stableTree", _this18);
	                },
	                'unstable': function unstable(s) {
	                    _this18._unStableChilds++;
	                    if (1 == _this18._unStableChilds) _this18.emit("unstableTree", _this18);
	                },
	                'stableTree': function stableTree(s) {
	                    _this18._unStableChilds--;
	                    if (!_this18._unStableChilds) _this18.emit("stableTree", _this18);
	                },
	                'unstableTree': function unstableTree(s) {
	                    _this18._unStableChilds++;
	                    if (1 == _this18._unStableChilds) _this18.emit("unstableTree", _this18);
	                },
	                'destroy': function destroy(ctx) {
	                    if (ctx._unStableChilds) _this18._unStableChilds--;
	                    if (!ctx.isStable()) _this18._unStableChilds--;
	
	                    if (!_this18._unStableChilds) _this18.emit("stableTree", _this18);
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
	            var _this19 = this;
	
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
	                        _this19.then(function (s) {
	                            !_this19.__retains.all && _this19.destroy();
	                        });
	                    }, this._persistenceTm);
	                } else {
	                    this.then(function (s) {
	                        return !_this19.__retains.all && _this19.destroy();
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
	            var _this20 = this;
	
	            var ctx = this.__scope;
	            //console.warn("destroy", this._id);
	            this.dead = true;
	            this.emit("destroy", this);
	            Object.keys(this.__listening).forEach(function (id) {
	                return _this20.__scope[id].removeListener(_this20.__listening[id]);
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
	                    path = key[2] && key[2].substr(1);
	                    store = scope.stores[key[1]];
	                    alias = key[3] || path && path.match(/([^\.]*)$/)[0] || key[1];
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
	                        path = key[2] && key[2].substr(1);
	                        store = scope.stores[key[1]];
	                        alias = key[3] || path && path.match(/([^\.]*)$/)[0] || key[1];
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
	
	var SimpleObjectProto = {}.constructor;
	
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
	        _this.$stores = _this.$scope && _this.$scope.stores;
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
	 * @param additionalContext {Object} context to be propagated
	 * @returns {ReScopeProvider}
	 */
	function reScopeState() {
	    var _class2, _temp2;
	
	    for (var _len = arguments.length, argz = Array(_len), _key = 0; _key < _len; _key++) {
	        argz[_key] = arguments[_key];
	    }
	
	    var BaseComponent = (!argz[0] || argz[0].prototype && argz[0].prototype.isReactComponent) && argz.shift(),
	        scope = (!argz[0] || argz[0] instanceof _Scope2.default || _is2.default.fn(argz[0])) && argz.shift(),
	        use = (!argz[0] || _is2.default.array(argz[0])) && argz.shift(),
	        additionalContext = (!argz[0] || argz[0] instanceof SimpleObjectProto) && argz.shift();
	
	    if (!(BaseComponent && BaseComponent.prototype && BaseComponent.prototype.isReactComponent)) {
	        return function (BaseComponent) {
	            return reScopeState(BaseComponent, scope, use, additionalContext);
	        };
	    }
	
	    use = [].concat(_toConsumableArray(BaseComponent.use || []), _toConsumableArray(use || []));
	    additionalContext = additionalContext && Object.keys(additionalContext).reduce(function (h, k) {
	        return h[k] = _propTypes2.default.any, h;
	    }, {}) || {};
	
	    var ReScopeProvider = (_temp2 = _class2 = function (_BaseComponent) {
	        _inherits(ReScopeProvider, _BaseComponent);
	
	        function ReScopeProvider(p, ctx, q) {
	            _classCallCheck(this, ReScopeProvider);
	
	            var _this2 = _possibleConstructorReturn(this, (ReScopeProvider.__proto__ || Object.getPrototypeOf(ReScopeProvider)).call(this, p, ctx, q));
	
	            _this2.$scope = p.__scope || _is2.default.fn(scope) && scope(_this2, p, ctx) || scope || ctx.rescope;
	
	            _is2.default.fn(scope) && _this2.$scope.retain();
	
	            _this2.$stores = _this2.$scope && _this2.$scope.stores;
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
	    }(BaseComponent), _class2.childContextTypes = _extends({}, BaseComponent.childContextTypes || {}, additionalContext, {
	        rescope: _propTypes2.default.object,
	        $stores: _propTypes2.default.object
	    }), _class2.contextTypes = _extends({}, BaseComponent.contextTypes || {}, additionalContext, {
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
	 * @param additionalContext {Object} context to be propagated
	 * @returns {ReScopeProvider}
	 */
	function reScopeProps() {
	    var _class3, _temp3;
	
	    for (var _len2 = arguments.length, argz = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	        argz[_key2] = arguments[_key2];
	    }
	
	    var BaseComponent = (!argz[0] || argz[0].prototype && argz[0].prototype.isReactComponent) && argz.shift(),
	        scope = (!argz[0] || argz[0] instanceof _Scope2.default || _is2.default.fn(argz[0])) && argz.shift(),
	        use = (!argz[0] || _is2.default.array(argz[0])) && argz.shift(),
	        additionalContext = (!argz[0] || argz[0] instanceof SimpleObjectProto) && argz.shift();
	
	    if (!(BaseComponent && BaseComponent.prototype && BaseComponent.prototype.isReactComponent)) {
	        return function (BaseComponent) {
	            return reScopeProps(BaseComponent, scope, use, additionalContext);
	        };
	    }
	
	    use = [].concat(_toConsumableArray(BaseComponent.use || []), _toConsumableArray(use || []));
	    additionalContext = additionalContext && Object.keys(additionalContext).reduce(function (h, k) {
	        return h[k] = _propTypes2.default.any, h;
	    }, {}) || {};
	
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
	    }(_react2.default.Component), _class3.childContextTypes = _extends({}, BaseComponent.contextTypes || {}, additionalContext, {
	        rescope: _propTypes2.default.object,
	        $stores: _propTypes2.default.object
	    }), _class3.contextTypes = _extends({}, BaseComponent.contextTypes || {}, additionalContext, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZjFhY2U3YzMyYTM0MjQ0NDBkYjkiLCJ3ZWJwYWNrOi8vLy4vc3JjL1JlU2NvcGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Njb3BlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImlzXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL0VtaXR0ZXIuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic2hvcnRpZFwiIiwid2VicGFjazovLy8uL3NyYy9TdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvUmVhY3RUb29scy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiJdLCJuYW1lcyI6WyJSVG9vbHMiLCJTdG9yZSIsIkNvbnRleHQiLCJTY29wZSIsIkNvbXBvbmVudCIsInJlU2NvcGVQcm9wcyIsInJlU2NvcGVTdGF0ZSIsIndpdGhTY29wZSIsImlzIiwicmVxdWlyZSIsIkV2ZW50RW1pdHRlciIsInNob3J0aWQiLCJfX3Byb3RvX19wdXNoIiwidGFyZ2V0IiwiaWQiLCJwYXJlbnQiLCJmbiIsInByb3RvdHlwZSIsIm9wZW5TY29wZXMiLCJzY29wZXMiLCJza2V5IiwiYXJyYXkiLCJzb3J0IiwiYSIsImIiLCJmaXJzdG5hbWUiLCJqb2luIiwic3RvcmVzTWFwIiwic3RhdGUiLCJkYXRhIiwibmFtZSIsImluY3JlbWVudElkIiwiZGVmYXVsdE1heExpc3RlbmVycyIsInBlcnNpc3RlbmNlVG0iLCJhdXRvRGVzdHJveSIsInJvb3RFbWl0dGVyIiwiX21heExpc3RlbmVycyIsImNvbnN0cnVjdG9yIiwiZ2VuZXJhdGUiLCJfaWQiLCJyZWdpc3RlciIsImkiLCJfaXNMb2NhbElkIiwiX3BlcnNpc3RlbmNlVG0iLCJzdG9yZXMiLCJkZWFkIiwiRXJyb3IiLCJzb3VyY2VzIiwiX2NoaWxkU2NvcGVzIiwiX2NoaWxkU2NvcGVzTGlzdCIsIl91blN0YWJsZUNoaWxkcyIsIl9fcmV0YWlucyIsImFsbCIsIl9fbG9ja3MiLCJfX2xpc3RlbmluZyIsIl9fc2NvcGUiLCJfX21peGVkIiwiX19taXhlZExpc3QiLCJfZm9sbG93ZXJzIiwicmV0YWluIiwiX3N0YWJsZSIsIndhaXQiLCJvbiIsIl9fcGFyZW50TGlzdCIsInJlbGVhc2UiLCJfcHJvcGFnIiwiX2FkZENoaWxkIiwic2V0VGltZW91dCIsImRpc3Bvc2UiLCJzdG9yZXNMaXN0IiwiZm9yRWFjaCIsIl9tb3VudCIsImsiLCJhcmd1bWVudHMiLCJzdG9yZSIsInJlZHVjZSIsIm1vdW50ZWQiLCJjdHgiLCJ1bmRlZmluZWQiLCJzZXRTdGF0ZSIsInB1c2giLCJfd2F0Y2hTdG9yZSIsImlzU3RhYmxlIiwicHJvcGFnIiwidGFyZ2V0Q3R4IiwibGlzdHMiLCJyZWxpbmsiLCJPYmplY3QiLCJrZXlzIiwic2luZ2xldG9uIiwic3JjQ3R4IiwiZXh0ZXJuYWwiLCJmb3JjZSIsImxjdHgiLCJfc3RvcmVzIiwiY29uc29sZSIsImluZm8iLCJfX3Byb3RvX18iLCJkZWZpbmVQcm9wZXJ0eSIsImdldCIsIl9zdGF0ZSIsInNldCIsInYiLCJfZGF0YSIsIm9iaiIsImtleSIsImFzIiwic2V0SW5pdGlhbCIsImxhc3RSZXZzIiwicmVmS2V5cyIsIm1hcCIsInN0cmluZyIsInBhcnNlUmVmIiwicmV2cyIsInJlZiIsInN0b3JlSWQiLCJyZXYiLCJyZWZzIiwibW91bnQiLCJnZXRVcGRhdGVzIiwiZm9sbG93ZXJzIiwibGVuZ3RoIiwic3BsaWNlIiwidG8iLCJiaW5kIiwibWl4ZWRDV1VubW91bnQiLCJ1bk1vdW50S2V5IiwiaXNSZWFjdENvbXBvbmVudCIsImhhc093blByb3BlcnR5IiwidW5CaW5kIiwic3BsaXQiLCJyZXRyaWV2ZSIsInBhdGgiLCJzbGljZSIsInN0b3Jlc1Jldk1hcCIsImxvY2FsIiwiX3JldiIsInVwZGF0ZWQiLCJnZXRTdG9yZXNSZXZzIiwib3V0cHV0IiwiYWxpYXMiLCJmbGFnc19zdGF0ZXMiLCJmbGFnc19kYXRhIiwiX2ZsYWdzX3N0YXRlcyIsIl9mbGFnc19kYXRhIiwiZmxhZ3MiLCJyIiwiZmxhZyIsInRlc3QiLCJfcmVmIiwiYWN0aW9uIiwidHJpZ2dlciIsImRpc3BhdGNoIiwiY2IiLCJvbmNlIiwicXVpZXQiLCJyZWFzb24iLCJlbWl0IiwiZXJyb3IiLCJfc3RhYmlsaXplclRNIiwiY2xlYXJUaW1lb3V0IiwiX3Byb3BhZ1RNIiwicmVtYXBzIiwid2FzU3RhYmxlIiwiaW5kZXhPZiIsInVuIiwiX2Rlc3Ryb3lUTSIsInRoZW4iLCJkZXN0cm95IiwicmVtb3ZlTGlzdGVuZXIiLCJzaGlmdCIsIl9ybUNoaWxkIiwic2NvcGUiLCJFbWl0dGVyIiwiX2V2ZW50cyIsImV2dCIsImFyZ3oiLCJvYmpQcm90byIsImdldFByb3RvdHlwZU9mIiwiX3N0YXRpYyIsImdldFNjb3BlIiwic3RhdGljU2NvcGUiLCJjZmciLCJ3YXRjaHMiLCJ1c2UiLCJhcHBseSIsImluaXRpYWxTdGF0ZSIsImFwcGxpZWQiLCJfdWlkIiwiX29uU3RhYmlsaXplIiwid2FybiIsInNjb3BlT2JqIiwiX3JldnMiLCJfcmVxdWlyZSIsIl91c2UiLCJtYXRjaCIsInJlZjIiLCJzaG91bGRBcHBseSIsIm1hbmFnZWQiLCJuRGF0YXMiLCJjRGF0YXMiLCJpc0NvbXBsZXRlIiwiZm9sbG93IiwiY2FsbCIsImNoYW5nZXMiLCJyZWZpbmUiLCJfc3RhYmlsaXplciIsInN0YWJsZSIsImFjdGlvbnMiLCJucyIsImRvV2FpdCIsIm9yaWdpbiIsImluaXRpYWxPdXRwdXRzIiwicyIsIm5leHRTdGF0ZSIsIl9jaGFuZ2VzU1ciLCJuZXh0RGF0YXMiLCJoYXNEYXRhQ2hhbmdlIiwicFN0YXRlIiwic3luYyIsImNoYW5nZSIsInN0YWJpbGl6ZSIsIm1lIiwiZnJvbSIsInB1bGwiLCJwcmV2aW91cyIsInNob3VsZFByb3BhZyIsImZvbGxvd2VyIiwicmVtb3ZlQWxsTGlzdGVuZXJzIiwiY29tcG9uZW50IiwidGFyZ2V0UmV2cyIsInRhcmdldFNjb3BlIiwiZmlsdGVyIiwiZGVmYXVsdE5hbWUiLCJzdWJzdHIiLCJTaW1wbGVPYmplY3RQcm90byIsInAiLCJxIiwicmVzY29wZSIsIiRzY29wZSIsIiRzdG9yZXMiLCJyZW5kZXIiLCJucCIsIm5jIiwiblNjb3BlIiwiY29udGV4dCIsInByb3BzIiwiY2hpbGRyZW4iLCJjaGlsZENvbnRleHRUeXBlcyIsIm9iamVjdCIsImNvbnRleHRUeXBlcyIsIkJhc2VDb21wb25lbnQiLCJhZGRpdGlvbmFsQ29udGV4dCIsImgiLCJhbnkiLCJSZVNjb3BlUHJvdmlkZXIiLCJkZWZhdWx0UHJvcHMiLCJkaXNwbGF5TmFtZSIsIiRkaXNwYXRjaCIsImRlZmF1bHQiLCJyZXNjb3BlUHJvcHMiLCJyZXNjb3BlU3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDWEE7Ozs7QUFDQTs7OztBQUNBOztLQUF3QkEsTTs7Ozs7O0FBRXhCLGlCQUFNQyxLQUFOLG1CLENBL0JBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7bUJBZ0NlO0FBQ1hBLHlCQURXO0FBRVhDLDJCQUZXO0FBR1hDLHlCQUhXO0FBSVhDLGNBQWNKLE9BQU9JLFNBSlY7QUFLWEMsaUJBQWNMLE9BQU9LLFlBTFY7QUFNWEMsaUJBQWNOLE9BQU9NLFlBTlY7QUFPWEMsY0FBY1AsT0FBT007QUFQVixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQ2Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTRCQSxLQUFJRSxLQUFrQixtQkFBQUMsQ0FBUSxDQUFSLENBQXRCO0FBQUEsS0FDSUMsZUFBa0IsbUJB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UCxpQkFESixnQkFFS0csY0FBY0QsWUFBZCxJQUE4QixFQUZuQyxFQUdLRSxpQkFITDtBQUlDZCxrQkFBUyxvQkFBVVcsTUFKcEI7QUFLQ1Qsa0JBQVMsb0JBQVVTO0FBTHBCLGlCQU9JQyxZQVBKLGdCQVFLQyxjQUFjRCxZQUFkLElBQThCLEVBUm5DLEVBU0tFLGlCQVRMO0FBVUNkLGtCQUFTLG9CQUFVVyxNQVZwQjtBQVdDVCxrQkFBUyxvQkFBVVM7QUFYcEIsaUJBYUlRLFdBYkosR0Fhd0Isa0JBQWtCTixjQUFjTSxXQUFkLElBQTZCTixjQUFjN04sSUFBN0QsSUFBcUUsR0FiN0YsV0F5Qko4SSxLQXpCSSxFQXlCR1ksR0F6QkgsQ0FBUDtBQTBCSDs7U0FHZ0IyRSxPLEdBQWIvUCxTO1NBQ0FBLFMsR0FBQUEsUztTQUNBQyxZLEdBQUFBLFk7U0FDZ0IrUCxZLEdBQWhCL1AsWTtTQUNBQyxZLEdBQUFBLFk7U0FDZ0IrUCxZLEdBQWhCL1AsWTs7Ozs7O0FDNVJKLG1DOzs7Ozs7QUNBQSx3QyIsImZpbGUiOiJkaXN0L1JlU2NvcGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZjFhY2U3YzMyYTM0MjQ0NDBkYjkiLCIvKlxuICogQ29weXJpZ2h0IChjKSAgMjAxOCBXaXNlIFdpbGQgV2ViIC5cbiAqXG4gKiAgTUlUIExpY2Vuc2VcbiAqXG4gKiAgUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqICBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiAgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuICogIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqICBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqICBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqICBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiAgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqICBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuICogIFNPRlRXQVJFLlxuICpcbiAqIEBhdXRob3IgOiBOYXRoYW5hZWwgQnJhdW5cbiAqIEBjb250YWN0IDogY2FpcGlsYWJzQGdtYWlsLmNvbVxuICovXG5cbmltcG9ydCBTY29wZSBmcm9tIFwiLi9TY29wZVwiO1xuaW1wb3J0IFN0b3JlIGZyb20gXCIuL1N0b3JlXCI7XG5pbXBvcnQgUmVhY3RUb29scywgKiBhcyBSVG9vbHMgZnJvbSBcIi4vUmVhY3RUb29sc1wiO1xuXG5TY29wZS5TdG9yZSA9IFN0b3JlO1xuZXhwb3J0IGRlZmF1bHQge1xuICAgIFN0b3JlLFxuICAgIENvbnRleHQgICAgIDogU2NvcGUsXG4gICAgU2NvcGUsXG4gICAgQ29tcG9uZW50ICAgOiBSVG9vbHMuQ29tcG9uZW50LFxuICAgIHJlU2NvcGVQcm9wczogUlRvb2xzLnJlU2NvcGVQcm9wcyxcbiAgICByZVNjb3BlU3RhdGU6IFJUb29scy5yZVNjb3BlU3RhdGUsXG4gICAgd2l0aFNjb3BlICAgOiBSVG9vbHMucmVTY29wZVN0YXRlXG59O1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvUmVTY29wZS5qcyIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpICAyMDE4IFdpc2UgV2lsZCBXZWIgLlxuICpcbiAqICBNSVQgTGljZW5zZVxuICpcbiAqICBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiAgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqICB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiAgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiAgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiAgVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG4gKiAgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqICBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG4gKiAgU09GVFdBUkUuXG4gKlxuICogQGF1dGhvciA6IE5hdGhhbmFlbCBCcmF1blxuICogQGNvbnRhY3QgOiBjYWlwaWxhYnNAZ21haWwuY29tXG4gKi9cblxuXG52YXIgaXMgICAgICAgICAgICAgID0gcmVxdWlyZSgnaXMnKSxcbiAgICBFdmVudEVtaXR0ZXIgICAgPSByZXF1aXJlKCcuL0VtaXR0ZXInKSxcbiAgICBzaG9ydGlkICAgICAgICAgPSByZXF1aXJlKCdzaG9ydGlkJylcbiAgICAsIF9fcHJvdG9fX3B1c2ggPSAoIHRhcmdldCwgaWQsIHBhcmVudCApID0+IHtcbiAgICAgICAgbGV0IGZuICAgICAgICAgICA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgfTtcbiAgICAgICAgZm4ucHJvdG90eXBlICAgICA9IHBhcmVudCA/IG5ldyBwYXJlbnRbXCJfXCIgKyBpZF0oKSA6IHRhcmdldFtpZF0gfHwge307XG4gICAgICAgIHRhcmdldFtpZF0gICAgICAgPSBuZXcgZm4oKTtcbiAgICAgICAgdGFyZ2V0WydfJyArIGlkXSA9IGZuO1xuICAgIH0sXG4gICAgb3BlblNjb3BlcyAgICAgID0ge31cbjtcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY29wZSBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gICAgc3RhdGljIHBlcnNpc3RlbmNlVG0gPSAxOy8vIGlmID4gMCwgd2lsbCB3YWl0ICdwZXJzaXN0ZW5jZVRtJyBtcyBiZWZvcmUgZGVzdHJveSB3aGVuIGRpc3Bvc2UgcmVhY2ggMFxuICAgIHN0YXRpYyBTdG9yZSAgICAgICAgID0gbnVsbDtcbiAgICBzdGF0aWMgc2NvcGVzICAgICAgICA9IG9wZW5TY29wZXM7Ly8gYWxsIGFjdGl2ZSBzY29wZXNcbiAgICBcbiAgICBzdGF0aWMgZ2V0U2NvcGUoIHNjb3BlcyApIHtcbiAgICAgICAgbGV0IHNrZXkgPSBpcy5hcnJheShzY29wZXMpID8gc2NvcGVzLnNvcnQoKCBhLCBiICkgPT4ge1xuICAgICAgICAgICAgaWYgKCBhLmZpcnN0bmFtZSA8IGIuZmlyc3RuYW1lICkgcmV0dXJuIC0xO1xuICAgICAgICAgICAgaWYgKCBhLmZpcnN0bmFtZSA+IGIuZmlyc3RuYW1lICkgcmV0dXJuIDE7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfSkuam9pbignOjonKSA6IHNjb3BlcztcbiAgICAgICAgcmV0dXJuIG9wZW5TY29wZXNbc2tleV0gPSBvcGVuU2NvcGVzW3NrZXldIHx8IG5ldyBTY29wZSh7fSwgeyBpZDogc2tleSB9KTtcbiAgICB9O1xuICAgIFxuICAgIC8qKlxuICAgICAqIEluaXQgYSBSZXNjb3BlIHNjb3BlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc3RvcmVzTWFwIHtPYmplY3R9IE9iamVjdCB3aXRoIHRoZSBvcmlnaW4gc3RvcmVzXG4gICAgICogQHBhcmFtIGlkIHtzdHJpbmd9IEBvcHRpb25hbCBpZCAoIGlmIHRoaXMgaWQgZXhpc3Qgc3RvcmVzTWFwIHdpbGwgYmUgbWVyZ2Ugb24gdGhlICdpZCcgc2NvcGUpXG4gICAgICogQHBhcmFtIHBhcmVudFxuICAgICAqIEBwYXJhbSBzdGF0ZVxuICAgICAqIEBwYXJhbSBkYXRhXG4gICAgICogQHBhcmFtIG5hbWVcbiAgICAgKiBAcGFyYW0gZGVmYXVsdE1heExpc3RlbmVyc1xuICAgICAqIEBwYXJhbSBwZXJzaXN0ZW5jZVRtIHtudW1iZXIpIGlmID4gMCwgd2lsbCB3YWl0ICdwZXJzaXN0ZW5jZVRtJyBtcyBiZWZvcmUgZGVzdHJveSB3aGVuIGRpc3Bvc2UgcmVhY2ggMFxuICAgICAqIEBwYXJhbSBhdXRvRGVzdHJveSAge2Jvb2x9IHdpbGwgdHJpZ2dlciByZXRhaW4gJiBkaXNwb3NlIGFmdGVyIHN0YXJ0XG4gICAgICogQHJldHVybnMge1Njb3BlfVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKCBzdG9yZXNNYXAsIHsgaWQsIHBhcmVudCwgc3RhdGUsIGRhdGEsIG5hbWUsIGluY3JlbWVudElkLCBkZWZhdWx0TWF4TGlzdGVuZXJzLCBwZXJzaXN0ZW5jZVRtLCBhdXRvRGVzdHJveSwgcm9vdEVtaXR0ZXIgfSA9IHt9ICkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fbWF4TGlzdGVuZXJzID0gZGVmYXVsdE1heExpc3RlbmVycyB8fCB0aGlzLmNvbnN0cnVjdG9yLmRlZmF1bHRNYXhMaXN0ZW5lcnM7XG4gICAgICAgIGlkICAgICAgICAgICAgICAgICA9IGlkIHx8IChcIl9fX19fXCIgKyBzaG9ydGlkLmdlbmVyYXRlKCkpO1xuICAgICAgICBpZiAoIG9wZW5TY29wZXNbaWRdICYmICFpbmNyZW1lbnRJZCApIHtcbiAgICAgICAgICAgIHRoaXMuX2lkID0gaWQ7XG4gICAgICAgICAgICBvcGVuU2NvcGVzW2lkXS5yZWdpc3RlcihzdG9yZXNNYXApO1xuICAgICAgICAgICAgcmV0dXJuIG9wZW5TY29wZXNbaWRdXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoIG9wZW5TY29wZXNbaWRdICYmIGluY3JlbWVudElkICkge1xuICAgICAgICAgICAgbGV0IGkgPSAtMTtcbiAgICAgICAgICAgIHdoaWxlICggb3BlblNjb3Blc1tpZCArICcvJyArICgrK2kpXSApIDtcbiAgICAgICAgICAgIGlkID0gaWQgKyAnLycgKyBpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9pZCAgICAgICAgICAgID0gaWQ7XG4gICAgICAgIG9wZW5TY29wZXNbaWRdICAgICAgPSB0aGlzO1xuICAgICAgICB0aGlzLl9pc0xvY2FsSWQgICAgID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fcGVyc2lzdGVuY2VUbSA9IHBlcnNpc3RlbmNlVG0gfHwgdGhpcy5jb25zdHJ1Y3Rvci5wZXJzaXN0ZW5jZVRtO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5zdG9yZXMgPSB7fTtcbiAgICAgICAgdGhpcy5zdGF0ZSAgPSB7fTtcbiAgICAgICAgdGhpcy5kYXRhICAgPSB7fTtcbiAgICAgICAgXG4gICAgICAgIGlmICggcGFyZW50ICYmIHBhcmVudC5kZWFkIClcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbid0IHVzZSBhIGRlYWQgc2NvcGUgYXMgcGFyZW50ICFcIik7XG4gICAgICAgIFxuICAgICAgICBfX3Byb3RvX19wdXNoKHRoaXMsICdzdG9yZXMnLCBwYXJlbnQpO1xuICAgICAgICBfX3Byb3RvX19wdXNoKHRoaXMsICdzdGF0ZScsIHBhcmVudCk7XG4gICAgICAgIF9fcHJvdG9fX3B1c2godGhpcywgJ2RhdGEnLCBwYXJlbnQpO1xuICAgICAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICB0aGlzLnNvdXJjZXMgICAgICAgICAgPSBbXTtcbiAgICAgICAgdGhpcy5fY2hpbGRTY29wZXMgICAgID0gW107XG4gICAgICAgIHRoaXMuX2NoaWxkU2NvcGVzTGlzdCA9IFtdO1xuICAgICAgICB0aGlzLl91blN0YWJsZUNoaWxkcyAgPSAwO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fX3JldGFpbnMgICA9IHsgYWxsOiAwIH07XG4gICAgICAgIHRoaXMuX19sb2NrcyAgICAgPSB7IGFsbDogMSB9O1xuICAgICAgICB0aGlzLl9fbGlzdGVuaW5nID0ge307XG4gICAgICAgIHRoaXMuX19zY29wZSAgICAgPSB7fTtcbiAgICAgICAgdGhpcy5fX21peGVkICAgICA9IFtdO1xuICAgICAgICB0aGlzLl9fbWl4ZWRMaXN0ID0gW107XG4gICAgICAgIHRoaXMuX2ZvbGxvd2VycyAgPSBbXTtcbiAgICAgICAgaWYgKCBwYXJlbnQgKSB7XG4gICAgICAgICAgICBwYXJlbnQucmV0YWluKFwiaXNNeVBhcmVudFwiKTtcbiAgICAgICAgICAgIGlmICggIXJvb3RFbWl0dGVyICkge1xuICAgICAgICAgICAgICAgICFwYXJlbnQuX3N0YWJsZSAmJiB0aGlzLndhaXQoXCJ3YWl0aW5nUGFyZW50XCIpO1xuICAgICAgICAgICAgICAgIHBhcmVudC5vbih0aGlzLl9fcGFyZW50TGlzdCA9IHtcbiAgICAgICAgICAgICAgICAgICAgJ3N0YWJsZScgIDogcyA9PiB0aGlzLnJlbGVhc2UoXCJ3YWl0aW5nUGFyZW50XCIpLFxuICAgICAgICAgICAgICAgICAgICAndW5zdGFibGUnOiBzID0+IHRoaXMud2FpdChcIndhaXRpbmdQYXJlbnRcIiksXG4gICAgICAgICAgICAgICAgICAgICd1cGRhdGUnICA6IHMgPT4gdGhpcy5fcHJvcGFnKClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhcmVudC5vbih0aGlzLl9fcGFyZW50TGlzdCA9IHtcbiAgICAgICAgICAgICAgICAgICAgJ3VwZGF0ZSc6IHMgPT4gdGhpcy5fcHJvcGFnKClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHRoaXMucmVnaXN0ZXIocGFyZW50Ll9fc2NvcGUsIHN0YXRlLCBkYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIHRoaXMucmVnaXN0ZXIoc3RvcmVzTWFwLCBzdGF0ZSwgZGF0YSk7XG4gICAgICAgIHRoaXMuX19sb2Nrcy5hbGwtLTtcbiAgICAgICAgdGhpcy5fc3RhYmxlID0gIXRoaXMuX19sb2Nrcy5hbGw7XG4gICAgICAgIFxuICAgICAgICBpZiAoIHBhcmVudCApIHtcbiAgICAgICAgICAgIHBhcmVudC5fYWRkQ2hpbGQodGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCBhdXRvRGVzdHJveSApXG4gICAgICAgICAgICBzZXRUaW1lb3V0KFxuICAgICAgICAgICAgICAgIHRtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXRhaW4oXCJhdXRvRGVzdHJveVwiKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNwb3NlKFwiYXV0b0Rlc3Ryb3lcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKVxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBAZGVwcmVjYXRlZFxuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqL1xuICAgIGdldCBkYXRhcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBNb3VudCB0aGUgc3RvcmVzIGluIHN0b3Jlc0xpc3QsIGluIHRoaXMgc2NvcGUgb3IgaW4gaXRzIHBhcmVudHMgb3IgbWl4ZWQgc2NvcGVzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc3RvcmVzTGlzdCB7c3RyaW5nfHN0b3JlUmVmfSBTdG9yZSBuYW1lLCBBcnJheSBvZiBTdG9yZSBuYW1lcywgb3IgUmVzY29wZSBzdG9yZSByZWYgZnJvbSBTdG9yZTo6YXMgb3JcbiAgICAgKiAgICAgU3RvcmU6YXNcbiAgICAgKiBAcGFyYW0gc3RhdGVcbiAgICAgKiBAcGFyYW0gZGF0YVxuICAgICAqIEByZXR1cm5zIHtTY29wZX1cbiAgICAgKi9cbiAgICBtb3VudCggc3RvcmVzTGlzdCwgc3RhdGUsIGRhdGEgKSB7XG4gICAgICAgIGlmICggaXMuYXJyYXkoc3RvcmVzTGlzdCkgKSB7XG4gICAgICAgICAgICBzdG9yZXNMaXN0LmZvckVhY2goayA9PiB0aGlzLl9tb3VudChrLCBzdGF0ZSAmJiBzdGF0ZVtrXSwgZGF0YSAmJiBkYXRhW2tdKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9tb3VudCguLi5hcmd1bWVudHMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBcbiAgICBfbW91bnQoIGlkLCBzdGF0ZSwgZGF0YSApIHtcbiAgICAgICAgaWYgKCB0eXBlb2YgaWQgIT09ICdzdHJpbmcnICkge1xuICAgICAgICAgICAgdGhpcy5yZWdpc3Rlcih7IFtpZC5uYW1lXTogaWQuc3RvcmUgfSk7XG4gICAgICAgICAgICBpZCA9IGlkLm5hbWU7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmICggIXRoaXMuX19zY29wZVtpZF0gKSB7Ly9hc2sgbWl4ZWQgfHwgcGFyZW50XG4gICAgICAgICAgICBpZiAoIHRoaXMuX19taXhlZC5yZWR1Y2UoKCBtb3VudGVkLCBjdHggKSA9PiAobW91bnRlZCB8fCBjdHguX21vdW50KGlkLCBzdGF0ZSwgZGF0YSkpLCBmYWxzZSkgfHxcbiAgICAgICAgICAgICAgICAhdGhpcy5wYXJlbnQgKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcmVudC5fbW91bnQoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgc3RvcmUgPSB0aGlzLl9fc2NvcGVbaWRdLCBjdHg7XG4gICAgICAgIGlmICggaXMuZm4oc3RvcmUpICkge1xuICAgICAgICAgICAgdGhpcy5fX3Njb3BlW2lkXSA9IG5ldyBzdG9yZSh0aGlzLCB7IHN0YXRlLCBkYXRhIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKCBzdGF0ZSAhPT0gdW5kZWZpbmVkICYmIGRhdGEgPT09IHVuZGVmaW5lZCApXG4gICAgICAgICAgICAgICAgc3RvcmUuc2V0U3RhdGUoc3RhdGUpO1xuICAgICAgICAgICAgZWxzZSBpZiAoIHN0YXRlICE9PSB1bmRlZmluZWQgKVxuICAgICAgICAgICAgICAgIHN0b3JlLnN0YXRlID0gc3RhdGU7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmICggZGF0YSAhPT0gdW5kZWZpbmVkIClcbiAgICAgICAgICAgICAgICBzdG9yZS5wdXNoKGRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgdGhpcy5fd2F0Y2hTdG9yZShpZCk7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gdGhpcy5fX3Njb3BlW2lkXTtcbiAgICB9XG4gICAgXG4gICAgX3dhdGNoU3RvcmUoIGlkLCBzdGF0ZSwgZGF0YSApIHtcbiAgICAgICAgaWYgKCAhdGhpcy5fX3Njb3BlW2lkXSApIHsvL2FzayBtaXhlZCB8fCBwYXJlbnRcbiAgICAgICAgICAgIGlmICggdGhpcy5fX21peGVkLnJlZHVjZSgoIG1vdW50ZWQsIGN0eCApID0+IChtb3VudGVkIHx8IGN0eC5fd2F0Y2hTdG9yZShpZCwgc3RhdGUsIGRhdGEpKSwgZmFsc2UpIHx8XG4gICAgICAgICAgICAgICAgIXRoaXMucGFyZW50IClcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJlbnQuX3dhdGNoU3RvcmUoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoICF0aGlzLl9fbGlzdGVuaW5nW2lkXSAmJiAhaXMuZm4odGhpcy5fX3Njb3BlW2lkXSkgKSB7XG4gICAgICAgICAgICB0aGlzLl9fc2NvcGVbaWRdLnJldGFpbihcInNjb3BlZFwiKTtcbiAgICAgICAgICAgICF0aGlzLl9fc2NvcGVbaWRdLmlzU3RhYmxlKCkgJiYgdGhpcy53YWl0KGlkKTtcbiAgICAgICAgICAgIHRoaXMuX19zY29wZVtpZF0ub24oXG4gICAgICAgICAgICAgICAgdGhpcy5fX2xpc3RlbmluZ1tpZF0gPSB7XG4gICAgICAgICAgICAgICAgICAgICdkZXN0cm95JyA6IHMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuX19saXN0ZW5pbmdbaWRdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fX3Njb3BlW2lkXSA9IHRoaXMuX19zY29wZVtpZF0uY29uc3RydWN0b3I7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICd1cGRhdGUnICA6IHMgPT4gdGhpcy5wcm9wYWcoKSxcbiAgICAgICAgICAgICAgICAgICAgJ3N0YWJsZScgIDogcyA9PiB0aGlzLnJlbGVhc2UoaWQpLFxuICAgICAgICAgICAgICAgICAgICAndW5zdGFibGUnOiBzID0+IHRoaXMud2FpdChpZClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogTWl4IHRhcmdldEN0eCBvbiB0aGlzIHNjb3BlXG4gICAgICogTWl4ZWQgc2NvcGUgcGFyZW50cyBhcmUgTk9UIG1hcHBlZFxuICAgICAqIEBwYXJhbSB0YXJnZXRDdHhcbiAgICAgKi9cbiAgICBtaXhpbiggdGFyZ2V0Q3R4ICkge1xuICAgICAgICBsZXQgcGFyZW50ID0gdGhpcy5wYXJlbnQsIGxpc3RzO1xuICAgICAgICB0aGlzLl9fbWl4ZWQucHVzaCh0YXJnZXRDdHgpXG4gICAgICAgIHRhcmdldEN0eC5yZXRhaW4oXCJtaXhlZFRvXCIpO1xuICAgICAgICBpZiAoICF0YXJnZXRDdHguX3N0YWJsZSApXG4gICAgICAgICAgICB0aGlzLndhaXQodGFyZ2V0Q3R4Ll9pZCk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9fbWl4ZWRMaXN0LnB1c2gobGlzdHMgPSB7XG4gICAgICAgICAgICAnc3RhYmxlJyAgOiBzID0+IHRoaXMucmVsZWFzZSh0YXJnZXRDdHguX2lkKSxcbiAgICAgICAgICAgICd1bnN0YWJsZSc6IHMgPT4gdGhpcy53YWl0KHRhcmdldEN0eC5faWQpLFxuICAgICAgICAgICAgJ3VwZGF0ZScgIDogcyA9PiB0aGlzLl9wcm9wYWcoKVxuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuc3RvcmVzID0ge307XG4gICAgICAgIHRoaXMuc3RhdGUgID0ge307XG4gICAgICAgIHRoaXMuZGF0YSAgID0ge307XG4gICAgICAgIHRhcmdldEN0eC5vbihsaXN0cyk7XG4gICAgICAgIF9fcHJvdG9fX3B1c2godGhpcywgJ3N0b3JlcycsIHBhcmVudCk7XG4gICAgICAgIF9fcHJvdG9fX3B1c2godGhpcywgJ3N0YXRlJywgcGFyZW50KTtcbiAgICAgICAgX19wcm90b19fcHVzaCh0aGlzLCAnZGF0YScsIHBhcmVudCk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLnJlbGluayh0aGlzLl9fc2NvcGUsIHRoaXMsIGZhbHNlLCB0cnVlKTtcbiAgICAgICAgdGhpcy5fX21peGVkLmZvckVhY2goXG4gICAgICAgICAgICBjdHggPT4ge1xuICAgICAgICAgICAgICAgIF9fcHJvdG9fX3B1c2godGhpcywgJ3N0b3JlcycpO1xuICAgICAgICAgICAgICAgIF9fcHJvdG9fX3B1c2godGhpcywgJ3N0YXRlJyk7XG4gICAgICAgICAgICAgICAgX19wcm90b19fcHVzaCh0aGlzLCAnZGF0YScpO1xuICAgICAgICAgICAgICAgIGN0eC5yZWxpbmsoY3R4Ll9fc2NvcGUsIHRoaXMsIHRydWUsIHRydWUpXG4gICAgICAgICAgICB9XG4gICAgICAgIClcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogUmVnaXN0ZXIgc3RvcmVzIGluIHN0b3Jlc01hcCAmIGxpbmsgdGhlbSBpbiB0aGUgcHJvdG9zXG4gICAgICogQHBhcmFtIHN0b3Jlc01hcFxuICAgICAqIEBwYXJhbSBzdGF0ZVxuICAgICAqIEBwYXJhbSBkYXRhXG4gICAgICovXG4gICAgcmVnaXN0ZXIoIHN0b3Jlc01hcCwgc3RhdGUgPSB7fSwgZGF0YSA9IHt9ICkge1xuICAgICAgICB0aGlzLnJlbGluayhzdG9yZXNNYXAsIHRoaXMsIGZhbHNlLCBmYWxzZSk7XG4gICAgICAgIE9iamVjdC5rZXlzKHN0b3Jlc01hcCkuZm9yRWFjaChcbiAgICAgICAgICAgIGlkID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIHN0b3Jlc01hcFtpZF0uc2luZ2xldG9uIHx8IChpcy5mbihzdG9yZXNNYXBbaWRdKSAmJiAoc3RhdGVbaWRdIHx8IGRhdGFbaWRdKSkgKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX21vdW50KGlkLCBzdGF0ZVtpZF0sIGRhdGFbaWRdKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICggc3RhdGVbaWRdIHx8IGRhdGFbaWRdICkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIGRhdGFbaWRdICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBzdGF0ZVtpZF0gKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcmVzW2lkXS5zdGF0ZSA9IHN0YXRlW2lkXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcmVzW2lkXS5wdXNoKGRhdGFbaWRdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICggc3RhdGVbaWRdICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9yZXNbaWRdLnNldFN0YXRlKHN0YXRlW2lkXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3dhdGNoU3RvcmUoaWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgICAgICBcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogTWFwIHNyY0N0eCBzdG9yZSdzIG9uIHRhcmdldEN0eCBoZWFkZXJzIHByb3RvJ3NcbiAgICAgKiBAcGFyYW0gc3JjQ3R4XG4gICAgICogQHBhcmFtIHRhcmdldEN0eFxuICAgICAqIEBwYXJhbSBzdGF0ZVxuICAgICAqIEBwYXJhbSBkYXRhXG4gICAgICovXG4gICAgcmVsaW5rKCBzcmNDdHgsIHRhcmdldEN0eCA9IHRoaXMsIGV4dGVybmFsLCBmb3JjZSApIHtcbiAgICAgICAgbGV0IGxjdHggPSB0YXJnZXRDdHguX3N0b3Jlcy5wcm90b3R5cGU7XG4gICAgICAgIE9iamVjdC5rZXlzKHNyY0N0eClcbiAgICAgICAgICAgICAgLmZvckVhY2goXG4gICAgICAgICAgICAgICAgICBpZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKCAhZm9yY2UgJiYgdGFyZ2V0Q3R4Ll9fc2NvcGVbaWRdID09PSBzcmNDdHhbaWRdIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldEN0eC5fX3Njb3BlW2lkXSAmJiAodGFyZ2V0Q3R4Ll9fc2NvcGVbaWRdLmNvbnN0cnVjdG9yID09PSBzcmNDdHhbaWRdKSApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoICFmb3JjZSAmJiB0YXJnZXRDdHguX19zY29wZVtpZF0gKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmICggIWV4dGVybmFsICYmICFpcy5mbih0YXJnZXRDdHguX19zY29wZVtpZF0pICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5pbmZvKFwiUmVzY29wZSBTdG9yZSA6IFwiLCBpZCwgXCIgYWxyZWFkeSBleGlzdCBpbiB0aGlzIHNjb3BlICEgKCB0cnkgX19wcm90b19fIGhvdCBwYXRjaCApXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0Q3R4Ll9fc2NvcGVbaWRdLl9fcHJvdG9fXyA9IHNyY0N0eFtpZF0ucHJvdG90eXBlO1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCAhZXh0ZXJuYWwgJiYgaXMuZm4odGFyZ2V0Q3R4Ll9fc2NvcGVbaWRdKSApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRDdHguX19zY29wZVtpZF0gPSBzcmNDdHhbaWRdO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICggIWZvcmNlICYmICFleHRlcm5hbCApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX19zY29wZVtpZF0gPSBzcmNDdHhbaWRdO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGN0eCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldDogKCkgPT4gdGhpcy5fX3Njb3BlW2lkXVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldEN0eC5fc3RhdGUucHJvdG90eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0OiAoKSA9PiAodGhpcy5fX3Njb3BlW2lkXSAmJiB0aGlzLl9fc2NvcGVbaWRdLnN0YXRlKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldDogKCB2ICkgPT4gKHRoaXMuX21vdW50KGlkLCB2KSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRDdHguX2RhdGEucHJvdG90eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0OiAoKSA9PiAodGhpcy5fX3Njb3BlW2lkXSAmJiB0aGlzLl9fc2NvcGVbaWRdLmRhdGEpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0OiAoIHYgKSA9PiAodGhpcy5fbW91bnQoaWQsIHVuZGVmaW5lZCwgdikpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICApXG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIEJpbmQgc3RvcmVzIGZyb20gdGhpcyBzY29wZSwgaGlzIHBhcmVudHMgYW5kIG1peGVkIHNjb3BlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gb2JqIHtSZWFjdC5Db21wb25lbnR8U3RvcmV8ZnVuY3Rpb259XG4gICAgICogQHBhcmFtIGtleSB7c3RyaW5nfSBzdG9yZXMga2V5cyB0byBiaW5kIHVwZGF0ZXNcbiAgICAgKiBAcGFyYW0gYXNcbiAgICAgKiBAcGFyYW0gc2V0SW5pdGlhbCB7Ym9vbH0gZmFsc2UgdG8gbm90IHByb3BhZyBpbml0aWFsIHZhbHVlIChkZWZhdWx0IDogdHJ1ZSlcbiAgICAgKi9cbiAgICBiaW5kKCBvYmosIGtleSwgYXMsIHNldEluaXRpYWwgPSB0cnVlICkge1xuICAgICAgICBsZXQgbGFzdFJldnMsIGRhdGEsIHJlZktleXM7XG4gICAgICAgIGlmICgga2V5ICYmICFpcy5hcnJheShrZXkpIClcbiAgICAgICAgICAgIGtleSA9IFtrZXldO1xuICAgICAgICBcbiAgICAgICAgaWYgKCBhcyA9PT0gZmFsc2UgfHwgYXMgPT09IHRydWUgKSB7XG4gICAgICAgICAgICBzZXRJbml0aWFsID0gYXM7XG4gICAgICAgICAgICBhcyAgICAgICAgID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmVmS2V5cyA9IGtleVxuICAgICAgICAgICAgLm1hcChpZCA9PiAoaXMuc3RyaW5nKGlkKSA/IGlkIDogaWQubmFtZSkpXG4gICAgICAgICAgICAubWFwKGlkID0+ICh0aGlzLnBhcnNlUmVmKGlkKSkpO1xuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX2ZvbGxvd2Vycy5wdXNoKFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIG9iaixcbiAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgYXMgfHwgdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIGxhc3RSZXZzID0gcmVmS2V5cy5yZWR1Y2UoKCByZXZzLCByZWYgKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldnNbcmVmLnN0b3JlSWRdID0gcmV2c1tyZWYuc3RvcmVJZF0gfHwge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV2IDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZnM6IFtdXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIHJldnNbcmVmLnN0b3JlSWRdLnJlZnMucHVzaChyZWYpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmV2cztcbiAgICAgICAgICAgICAgICB9LCB7fSlcbiAgICAgICAgICAgIF0pO1xuICAgICAgICB0aGlzLm1vdW50KGtleSk7XG4gICAgICAgIFxuICAgICAgICBpZiAoIHNldEluaXRpYWwgJiYgdGhpcy5fc3RhYmxlICkge1xuICAgICAgICAgICAgZGF0YSA9IHRoaXMuZ2V0VXBkYXRlcyhsYXN0UmV2cyk7XG4gICAgICAgICAgICBpZiAoICFkYXRhICkgcmV0dXJuO1xuICAgICAgICAgICAgaWYgKCB0eXBlb2Ygb2JqICE9IFwiZnVuY3Rpb25cIiApIHtcbiAgICAgICAgICAgICAgICBpZiAoIGFzICkgb2JqLnNldFN0YXRlKHsgW2FzXTogZGF0YSB9KTtcbiAgICAgICAgICAgICAgICBlbHNlIG9iai5zZXRTdGF0ZShkYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIG9iaihkYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogVW4gYmluZCB0aGlzIHNjb3BlIG9mZiB0aGUgZ2l2ZW4gY29tcG9uZW50LWtleXNcbiAgICAgKiBAcGFyYW0gb2JqXG4gICAgICogQHBhcmFtIGtleVxuICAgICAqIEByZXR1cm5zIHtBcnJheS48Kj59XG4gICAgICovXG4gICAgdW5CaW5kKCBvYmosIGtleSwgYXMgKSB7XG4gICAgICAgIHZhciBmb2xsb3dlcnMgPSB0aGlzLl9mb2xsb3dlcnMsXG4gICAgICAgICAgICBpICAgICAgICAgPSBmb2xsb3dlcnMgJiYgZm9sbG93ZXJzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBmb2xsb3dlcnMgJiYgaS0tIClcbiAgICAgICAgICAgIGlmICggZm9sbG93ZXJzW2ldWzBdID09PSBvYmogJiYgKCcnICsgZm9sbG93ZXJzW2ldWzFdKSA9PSAoJycgKyBrZXkpICYmXG4gICAgICAgICAgICAgICAgZm9sbG93ZXJzW2ldWzJdID09IGFzIClcbiAgICAgICAgICAgICAgICByZXR1cm4gZm9sbG93ZXJzLnNwbGljZShpLCAxKTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogTW91bnQgdGhlIHN0b3JlcyBpbiBzdG9yZXNMaXN0IGZyb20gdGhpcyBzY29wZSwgaXRzIHBhcmVudHMgYW5kIG1peGVkIHNjb3BlXG4gICAgICogQmluZCB0aGVtIHRvICd0bydcbiAgICAgKiBIb29rICd0bycgc28gaXQgd2lsbCBhdXRvIHVuYmluZCBvbiAnZGVzdHJveScgb3IgJ2NvbXBvbmVudFdpbGxVbm1vdW50J1xuICAgICAqIEBwYXJhbSB0b1xuICAgICAqIEBwYXJhbSBzdG9yZXNMaXN0XG4gICAgICogQHBhcmFtIGJpbmRcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSBJbml0aWFsIG91dHB1dHMgb2YgdGhlIHN0b3JlcyBpbiAnc3RvcmVzTGlzdCdcbiAgICAgKi9cbiAgICBtYXAoIHRvLCBzdG9yZXNMaXN0LCBiaW5kID0gdHJ1ZSApIHtcbiAgICAgICAgbGV0IFN0b3JlICA9IHRoaXMuY29uc3RydWN0b3IuU3RvcmU7XG4gICAgICAgIHN0b3Jlc0xpc3QgPSBpcy5hcnJheShzdG9yZXNMaXN0KSA/IHN0b3Jlc0xpc3QgOiBbc3RvcmVzTGlzdF07XG4gICAgICAgIHRoaXMubW91bnQoc3RvcmVzTGlzdCk7XG4gICAgICAgIGlmICggYmluZCAmJiB0byBpbnN0YW5jZW9mIFN0b3JlICkge1xuICAgICAgICAgICAgU3RvcmUubWFwKHRvLCBzdG9yZXNMaXN0LCB0aGlzLCB0aGlzLCBmYWxzZSlcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICggYmluZCApIHtcbiAgICAgICAgICAgIHRoaXMuYmluZCh0bywgc3RvcmVzTGlzdCwgdW5kZWZpbmVkLCBmYWxzZSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGxldCBtaXhlZENXVW5tb3VudCxcbiAgICAgICAgICAgICAgICB1bk1vdW50S2V5ID0gdG8uaXNSZWFjdENvbXBvbmVudCA/IFwiY29tcG9uZW50V2lsbFVubW91bnRcIiA6IFwiZGVzdHJveVwiO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoIHRvLmhhc093blByb3BlcnR5KHVuTW91bnRLZXkpICkge1xuICAgICAgICAgICAgICAgIG1peGVkQ1dVbm1vdW50ID0gdG9bdW5Nb3VudEtleV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRvW3VuTW91bnRLZXldID0gKCAuLi5hcmd6ICkgPT4ge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSB0b1t1bk1vdW50S2V5XTtcbiAgICAgICAgICAgICAgICBpZiAoIG1peGVkQ1dVbm1vdW50IClcbiAgICAgICAgICAgICAgICAgICAgdG9bdW5Nb3VudEtleV0gPSBtaXhlZENXVW5tb3VudDtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB0aGlzLnVuQmluZCh0bywgc3RvcmVzTGlzdCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRvW3VuTW91bnRLZXldICYmIHRvW3VuTW91bnRLZXldKC4uLmFyZ3opO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0b3Jlc0xpc3QucmVkdWNlKCggZGF0YSwgaWQgKSA9PiB7XG4gICAgICAgICAgICBpZiAoICFpcy5zdHJpbmcoaWQpIClcbiAgICAgICAgICAgICAgICBpZCA9IGlkLm5hbWU7XG4gICAgICAgICAgICBpZCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA9IGlkLnNwbGl0KCc6Jyk7Ly9AdG9kb1xuICAgICAgICAgICAgaWRbMF0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSBpZFswXS5zcGxpdCgnLicpO1xuICAgICAgICAgICAgZGF0YVtpZFsxXSB8fCBpZFswXVtpZFswXS5sZW5ndGggLSAxXV0gPSB0aGlzLnN0b3Jlc1tpZFswXVswXV0gJiYgdGhpcy5zdG9yZXNbaWRbMF1bMF1dLnJldHJpZXZlICYmIHRoaXMuc3RvcmVzW2lkWzBdWzBdXS5yZXRyaWV2ZShpZFswXS5zcGxpY2UoMSkpO1xuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH0sIHt9KTtcbiAgICB9XG4gICAgXG4gICAgcmV0cmlldmUoIHBhdGggPSBcIlwiICkge1xuICAgICAgICBwYXRoID0gaXMuc3RyaW5nKHBhdGgpID8gcGF0aC5zcGxpdCgnLicpIDogcGF0aDtcbiAgICAgICAgcmV0dXJuIHBhdGggJiYgdGhpcy5zdG9yZXNbcGF0aFswXV0gJiZcbiAgICAgICAgICAgIHRoaXMuc3RvcmVzW3BhdGhbMF1dLnJldHJpZXZlKHBhdGguc2xpY2UoMSkpO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBHZXQgb3IgdXBkYXRlIHN0b3Jlc1Jldk1hcCdzIHJldmlzaW9uc1xuICAgICAqIEBwYXJhbSBzdG9yZXNSZXZNYXBcbiAgICAgKiBAcGFyYW0gbG9jYWxcbiAgICAgKiBAcmV0dXJucyB7e319XG4gICAgICovXG4gICAgZ2V0U3RvcmVzUmV2cyggc3RvcmVzUmV2TWFwID0ge30sIGxvY2FsICkge1xuICAgICAgICBsZXQgY3R4ID0gdGhpcy5fX3Njb3BlO1xuICAgICAgICBpZiAoICFzdG9yZXNSZXZNYXAgKSB7XG4gICAgICAgICAgICBzdG9yZXNSZXZNYXAgPSB7fTtcbiAgICAgICAgfVxuICAgICAgICBPYmplY3Qua2V5cyhjdHgpLmZvckVhY2goXG4gICAgICAgICAgICBpZCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCAhaXMuZm4oY3R4W2lkXSlcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgc3RvcmVzUmV2TWFwW2lkXSA9IGN0eFtpZF0uX3JldjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoICFzdG9yZXNSZXZNYXAuaGFzT3duUHJvcGVydHkoaWQpIClcbiAgICAgICAgICAgICAgICAgICAgc3RvcmVzUmV2TWFwW2lkXSA9IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIGlmICggIWxvY2FsICkge1xuICAgICAgICAgICAgdGhpcy5fX21peGVkLnJlZHVjZSgoIHVwZGF0ZWQsIGN0eCApID0+IChjdHguZ2V0U3RvcmVzUmV2cyhzdG9yZXNSZXZNYXApLCBzdG9yZXNSZXZNYXApLCBzdG9yZXNSZXZNYXApO1xuICAgICAgICAgICAgdGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuZ2V0U3RvcmVzUmV2cyhzdG9yZXNSZXZNYXApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdG9yZXNSZXZNYXA7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIEdldCBvciB1cGRhdGUgb3V0cHV0IGJhc2luZyBzdG9yZXNSZXZNYXAncyByZXZpc2lvbnMuXG4gICAgICogSWYgYSBzdG9yZSBpbiAnc3RvcmVzUmV2TWFwJyBpcyB1cGRhdGVkOyBhZGQgaXQgdG8gJ291dHB1dCdcbiAgICAgKiBAcGFyYW0gc3RvcmVzUmV2TWFwXG4gICAgICogQHBhcmFtIG91dHB1dFxuICAgICAqIEBwYXJhbSB1cGRhdGVkXG4gICAgICogQHJldHVybnMgeyp8e319XG4gICAgICovXG4gICAgZ2V0VXBkYXRlcyggc3RvcmVzUmV2TWFwLCBvdXRwdXQsIHVwZGF0ZWQgKSB7XG4gICAgICAgIGxldCBjdHggPSB0aGlzLl9fc2NvcGU7XG4gICAgICAgIFxuICAgICAgICBvdXRwdXQgPSBvdXRwdXQgfHwge307XG4gICAgICAgIE9iamVjdC5rZXlzKGN0eCkuZm9yRWFjaChcbiAgICAgICAgICAgIGlkID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoICFvdXRwdXQuaGFzT3duUHJvcGVydHkoaWQpICYmICFpcy5mbihjdHhbaWRdKVxuICAgICAgICAgICAgICAgICAgICAmJiAoIXN0b3Jlc1Jldk1hcFxuICAgICAgICAgICAgICAgICAgICAgICAgfHwgKHN0b3Jlc1Jldk1hcC5oYXNPd25Qcm9wZXJ0eShpZCkgJiYgc3RvcmVzUmV2TWFwW2lkXSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgICAgICAgfHwgISghc3RvcmVzUmV2TWFwLmhhc093blByb3BlcnR5KGlkKSB8fCBjdHhbaWRdLl9yZXYgPD0gc3RvcmVzUmV2TWFwW2lkXS5yZXYpKVxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlZCAgICA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIG91dHB1dFtpZF0gPSB0aGlzLmRhdGFbaWRdO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBzdG9yZXNSZXZNYXAgJiYgc3RvcmVzUmV2TWFwLmhhc093blByb3BlcnR5KGlkKSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3Jlc1Jldk1hcFtpZF0ucmV2ID0gY3R4W2lkXS5fcmV2O1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmVzUmV2TWFwW2lkXS5yZWZzLmZvckVhY2goXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLndhcm4oXCJ1cGRhdGUgcmVmIFwiLCByZWYucmVmLCB0aGlzLnJldHJpZXZlKHJlZi5wYXRoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dFtyZWYuYWxpYXNdID0gdGhpcy5yZXRyaWV2ZShyZWYucGF0aClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLndhcm4oXCJ1cGRhdGUgXCIsIGlkLCB0aGlzLmRhdGFbaWRdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dFtpZF0gPSB0aGlzLmRhdGFbaWRdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgdXBkYXRlZCA9IHRoaXMuX19taXhlZC5yZWR1Y2UoKCB1cGRhdGVkLCBjdHggKSA9PiAoY3R4LmdldFVwZGF0ZXMoc3RvcmVzUmV2TWFwLCBvdXRwdXQsIHVwZGF0ZWQpIHx8IHVwZGF0ZWQpLCB1cGRhdGVkKTtcbiAgICAgICAgdXBkYXRlZCA9IHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LmdldFVwZGF0ZXMoc3RvcmVzUmV2TWFwLCBvdXRwdXQsIHVwZGF0ZWQpIHx8IHVwZGF0ZWQ7XG4gICAgICAgIHJldHVybiB1cGRhdGVkICYmIG91dHB1dDtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZmxhZ3Nfc3RhdGVzXG4gICAgICogQHBhcmFtIGZsYWdzX2RhdGFcbiAgICAgKiBAcmV0dXJucyB7e3N0YXRlOiB7fSwgZGF0YToge319fVxuICAgICAqL1xuICAgIHNlcmlhbGl6ZSggZmxhZ3Nfc3RhdGVzID0gLy4qLywgZmxhZ3NfZGF0YSA9IC8uKi8gKSB7XG4gICAgICAgIGxldCBjdHggPSB0aGlzLl9fc2NvcGUsIG91dHB1dCA9IHsgc3RhdGU6IHt9LCBkYXRhOiB7fSB9LFxuICAgICAgICAgICAgX2ZsYWdzX3N0YXRlcyxcbiAgICAgICAgICAgIF9mbGFnc19kYXRhO1xuICAgICAgICBpZiAoIGlzLmFycmF5KGZsYWdzX3N0YXRlcykgKVxuICAgICAgICAgICAgZmxhZ3Nfc3RhdGVzLmZvckVhY2goaWQgPT4gKG91dHB1dC5zdGF0ZVtpZF0gPSB0aGlzLnN0YXRlW2lkXSkpO1xuICAgICAgICBcbiAgICAgICAgaWYgKCBpcy5hcnJheShmbGFnc19kYXRhKSApXG4gICAgICAgICAgICBmbGFnc19kYXRhLmZvckVhY2goaWQgPT4gKG91dHB1dC5kYXRhW2lkXSA9IHRoaXMuZGF0YVtpZF0pKTtcbiAgICAgICAgXG4gICAgICAgIGlmICggIWlzLmFycmF5KGZsYWdzX2RhdGEpICYmICFpcy5hcnJheShmbGFnc19zdGF0ZXMpIClcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGN0eCkuZm9yRWFjaChcbiAgICAgICAgICAgICAgICBpZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICggaXMuZm4oY3R4W2lkXSkgKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgbGV0IGZsYWdzID0gY3R4W2lkXS5jb25zdHJ1Y3Rvci5mbGFncztcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGZsYWdzID0gaXMuYXJyYXkoZmxhZ3MpID8gZmxhZ3MgOiBbZmxhZ3MgfHwgXCJcIl07XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpZiAoIGZsYWdzLnJlZHVjZSgoIHIsIGZsYWcgKSA9PiAociB8fCBmbGFnc19zdGF0ZXMudGVzdChmbGFnKSksIGZhbHNlKSApXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXQuc3RhdGVbaWRdID0gdGhpcy5zdGF0ZVtpZF07XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpZiAoIGZsYWdzLnJlZHVjZSgoIHIsIGZsYWcgKSA9PiAociB8fCBmbGFnc19kYXRhLnRlc3QoZmxhZykpLCBmYWxzZSkgKVxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0LmRhdGFbaWRdID0gdGhpcy5kYXRhW2lkXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApXG4gICAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgfVxuICAgIFxuICAgIHBhcnNlUmVmKCBfcmVmICkge1xuICAgICAgICBsZXQgcmVmID0gX3JlZi5zcGxpdCgnOicpO1xuICAgICAgICByZWZbMF0gID0gcmVmWzBdLnNwbGl0KCcuJyk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzdG9yZUlkOiByZWZbMF1bMF0sXG4gICAgICAgICAgICBwYXRoICAgOiByZWZbMF0sXG4gICAgICAgICAgICBhbGlhcyAgOiByZWZbMV0gfHwgcmVmWzBdW3JlZlswXS5sZW5ndGggLSAxXSxcbiAgICAgICAgICAgIHJlZiAgICA6IF9yZWZcbiAgICAgICAgfTtcbiAgICB9XG4gICAgXG4gICAgZGlzcGF0Y2goIGFjdGlvbiwgZGF0YSApIHtcbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5fX3Njb3BlKVxuICAgICAgICAgICAgICAuZm9yRWFjaChcbiAgICAgICAgICAgICAgICAgIGlkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoICFpcy5mbih0aGlzLl9fc2NvcGVbaWRdKSApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX19zY29wZVtpZF0udHJpZ2dlcihhY3Rpb24sIGRhdGEpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9fbWl4ZWQuZm9yRWFjaCgoIGN0eCApID0+IChjdHguZGlzcGF0Y2goYWN0aW9uLCBkYXRhKSkpO1xuICAgICAgICB0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC5kaXNwYXRjaChhY3Rpb24sIGRhdGEpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogb25jZSgnc3RhYmxlJywgY2IpXG4gICAgICogQHBhcmFtIG9iaiB7UmVhY3QuQ29tcG9uZW50fFN0b3JlfGZ1bmN0aW9uKVxuICAgICAqIEBwYXJhbSBrZXkge3N0cmluZ30gb3B0aW9uYWwga2V5IHdoZXJlIHRvIG1hcCB0aGUgcHVibGljIHN0YXRlXG4gICAgICovXG4gICAgdGhlbiggY2IgKSB7XG4gICAgICAgIGlmICggdGhpcy5fc3RhYmxlIClcbiAgICAgICAgICAgIHJldHVybiBjYihudWxsLCB0aGlzLmRhdGEpO1xuICAgICAgICB0aGlzLm9uY2UoJ3N0YWJsZScsIGUgPT4gY2IobnVsbCwgdGhpcy5kYXRhKSk7XG4gICAgfVxuICAgIFxuICAgIHJlc3RvcmUoIHsgc3RhdGUsIGRhdGEgfSwgcXVpZXQgKSB7XG4gICAgICAgIGxldCBjdHggPSB0aGlzLl9fc2NvcGU7XG4gICAgICAgIE9iamVjdC5rZXlzKGRhdGEpLmZvckVhY2goXG4gICAgICAgICAgICBpZCA9PiB7XG4gICAgICAgICAgICAgICAgcXVpZXQgPyBjdHguZGF0YSA9IGRhdGFbaWRdXG4gICAgICAgICAgICAgICAgICAgIDogY3R4LnB1c2goZGF0YVtpZF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICBPYmplY3Qua2V5cyhzdGF0ZSkuZm9yRWFjaChcbiAgICAgICAgICAgIGlkID0+IHtcbiAgICAgICAgICAgICAgICBxdWlldCA/IGN0eC5zdGF0ZSA9IHN0YXRlW2lkXVxuICAgICAgICAgICAgICAgICAgICA6IGN0eC5zZXRTdGF0ZShzdGF0ZVtpZF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cbiAgICBcbiAgICByZXRhaW5TdG9yZXMoIHN0b3JlcyA9IFtdLCByZWFzb24gKSB7XG4gICAgICAgIHN0b3Jlcy5mb3JFYWNoKFxuICAgICAgICAgICAgaWQgPT4gKHRoaXMuc3RvcmVzW2lkXSAmJiB0aGlzLnN0b3Jlc1tpZF0ucmV0YWluICYmIHRoaXMuc3RvcmVzW2lkXS5yZXRhaW4ocmVhc29uKSlcbiAgICAgICAgKVxuICAgIH1cbiAgICBcbiAgICBkaXNwb3NlU3RvcmVzKCBzdG9yZXMgPSBbXSwgcmVhc29uICkge1xuICAgICAgICBzdG9yZXMuZm9yRWFjaChcbiAgICAgICAgICAgIGlkID0+ICh0aGlzLnN0b3Jlc1tpZF0gJiYgdGhpcy5zdG9yZXNbaWRdLmRpc3Bvc2UgJiYgdGhpcy5zdG9yZXNbaWRdLmRpc3Bvc2UocmVhc29uKSlcbiAgICAgICAgKVxuICAgIH1cbiAgICBcbiAgICB3YWl0KCByZWFzb24gKSB7XG4gICAgICAgIC8vY29uc29sZS5sb2coXCJ3YWl0XCIsIHJlYXNvbik7XG4gICAgICAgIHRoaXMuX3N0YWJsZSAmJiAhdGhpcy5fX2xvY2tzLmFsbCAmJiB0aGlzLmVtaXQoXCJ1bnN0YWJsZVwiLCB0aGlzKTtcbiAgICAgICAgdGhpcy5fc3RhYmxlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX19sb2Nrcy5hbGwrKztcbiAgICAgICAgaWYgKCByZWFzb24gKSB7XG4gICAgICAgICAgICB0aGlzLl9fbG9ja3NbcmVhc29uXSA9IHRoaXMuX19sb2Nrc1tyZWFzb25dIHx8IDA7XG4gICAgICAgICAgICB0aGlzLl9fbG9ja3NbcmVhc29uXSsrO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIHJlbGVhc2UoIHJlYXNvbiApIHtcbiAgICAgICAgXG4gICAgICAgIGlmICggcmVhc29uICkge1xuICAgICAgICAgICAgaWYgKCB0aGlzLl9fbG9ja3NbcmVhc29uXSA9PSAwIClcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiUmVsZWFzZSBtb3JlIHRoYW4gbG9ja2luZyAhXCIsIHJlYXNvbik7XG4gICAgICAgICAgICB0aGlzLl9fbG9ja3NbcmVhc29uXSA9IHRoaXMuX19sb2Nrc1tyZWFzb25dIHx8IDA7XG4gICAgICAgICAgICB0aGlzLl9fbG9ja3NbcmVhc29uXS0tO1xuICAgICAgICB9XG4gICAgICAgIGlmICggIXJlYXNvbiAmJiB0aGlzLl9fbG9ja3MuYWxsID09IDAgKVxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlJlbGVhc2UgbW9yZSB0aGFuIGxvY2tpbmcgIVwiKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX19sb2Nrcy5hbGwtLTtcbiAgICAgICAgaWYgKCAhdGhpcy5fX2xvY2tzLmFsbCApIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YWJpbGl6ZXJUTSAmJiBjbGVhclRpbWVvdXQodGhpcy5fc3RhYmlsaXplclRNKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5fc3RhYmlsaXplclRNID0gc2V0VGltZW91dChcbiAgICAgICAgICAgICAgICBlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc3RhYmlsaXplclRNID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCB0aGlzLl9fbG9ja3MuYWxsIClcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3Byb3BhZ1RNICYmIGNsZWFyVGltZW91dCh0aGlzLl9wcm9wYWdUTSk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zdGFibGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXQoXCJzdGFibGVcIiwgdGhpcyk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAhdGhpcy5kZWFkICYmIHRoaXMuX3Byb3BhZygpOy8vIHN0YWJpbGl0eSBjYW4gaW5kdWNlIGRlc3Ryb3lcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cbiAgICBcbiAgICBwcm9wYWcoKSB7XG4gICAgICAgIHRoaXMuX3Byb3BhZ1RNICYmIGNsZWFyVGltZW91dCh0aGlzLl9wcm9wYWdUTSk7XG4gICAgICAgIHRoaXMuX3Byb3BhZ1RNID0gc2V0VGltZW91dChcbiAgICAgICAgICAgIGUgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuX3Byb3BhZ1RNID0gbnVsbDtcbiAgICAgICAgICAgICAgICB0aGlzLl9wcm9wYWcoKVxuICAgICAgICAgICAgfSwgMlxuICAgICAgICApO1xuICAgIH1cbiAgICBcbiAgICBfcHJvcGFnKCkge1xuICAgICAgICBpZiAoIHRoaXMuX2ZvbGxvd2Vycy5sZW5ndGggKVxuICAgICAgICAgICAgdGhpcy5fZm9sbG93ZXJzLmZvckVhY2goKCB7IDA6IG9iaiwgMToga2V5LCAyOiBhcywgMzogbGFzdFJldnMsIDM6IHJlbWFwcyB9ICkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBkYXRhID0gdGhpcy5nZXRVcGRhdGVzKGxhc3RSZXZzKTtcbiAgICAgICAgICAgICAgICBpZiAoICFkYXRhICkgcmV0dXJuO1xuICAgICAgICAgICAgICAgIGlmICggdHlwZW9mIG9iaiAhPSBcImZ1bmN0aW9uXCIgKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICggYXMgKSBvYmouc2V0U3RhdGUoeyBbYXNdOiBkYXRhIH0pO1xuICAgICAgICAgICAgICAgICAgICBlbHNlIG9iai5zZXRTdGF0ZShkYXRhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG9iaihkYXRhLCBsYXN0UmV2cyAmJiBbLi4ubGFzdFJldnNdIHx8IFwibm8gcmV2c1wiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gbGFzdFJldnMgJiZcbiAgICAgICAgICAgICAgICAvLyBrZXkuZm9yRWFjaChpZCA9PiAobGFzdFJldnNbaWRdID0gdGhpcy5zdG9yZXNbaWRdICYmIHRoaXMuc3RvcmVzW2lkXS5fcmV2IHx8IDApKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB0aGlzLmVtaXQoXCJ1cGRhdGVcIiwgdGhpcy5nZXRVcGRhdGVzKCkpO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBpcyBzdGFibGVcbiAgICAgKiBAcmV0dXJucyBib29sXG4gICAgICovXG4gICAgaXNTdGFibGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zdGFibGU7XG4gICAgfVxuICAgIFxuICAgIC8vc2VyaWFsaXplQ2hpbGRzKCBjaGlsZHMgPSBbXSApIHtcbiAgICAvL1xuICAgIC8vfVxuICAgIFxuICAgIF9hZGRDaGlsZCggY3R4ICkge1xuICAgICAgICB0aGlzLl9jaGlsZFNjb3Blcy5wdXNoKGN0eCk7XG4gICAgICAgIGxldCBsaXN0cyAgICAgPSB7XG4gICAgICAgICAgICAgICAgJ3N0YWJsZScgICAgICA6IHMgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl91blN0YWJsZUNoaWxkcy0tO1xuICAgICAgICAgICAgICAgICAgICBpZiAoICF0aGlzLl91blN0YWJsZUNoaWxkcyApXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXQoXCJzdGFibGVUcmVlXCIsIHRoaXMpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAndW5zdGFibGUnICAgIDogcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3VuU3RhYmxlQ2hpbGRzKys7XG4gICAgICAgICAgICAgICAgICAgIGlmICggMSA9PSB0aGlzLl91blN0YWJsZUNoaWxkcyApXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXQoXCJ1bnN0YWJsZVRyZWVcIiwgdGhpcylcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICdzdGFibGVUcmVlJyAgOiBzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdW5TdGFibGVDaGlsZHMtLTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCAhdGhpcy5fdW5TdGFibGVDaGlsZHMgKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KFwic3RhYmxlVHJlZVwiLCB0aGlzKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgJ3Vuc3RhYmxlVHJlZSc6IHMgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl91blN0YWJsZUNoaWxkcysrO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIDEgPT0gdGhpcy5fdW5TdGFibGVDaGlsZHMgKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KFwidW5zdGFibGVUcmVlXCIsIHRoaXMpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAnZGVzdHJveScgICAgIDogY3R4ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBjdHguX3VuU3RhYmxlQ2hpbGRzIClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3VuU3RhYmxlQ2hpbGRzLS07XG4gICAgICAgICAgICAgICAgICAgIGlmICggIWN0eC5pc1N0YWJsZSgpIClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3VuU3RhYmxlQ2hpbGRzLS07XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGlmICggIXRoaXMuX3VuU3RhYmxlQ2hpbGRzIClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdChcInN0YWJsZVRyZWVcIiwgdGhpcylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgd2FzU3RhYmxlID0gdGhpcy5fdW5TdGFibGVDaGlsZHM7XG4gICAgICAgIC8vIWN0eC5pc1N0YWJsZSgpICYmIGNvbnNvbGUud2FybignYWRkIHVuc3RhYmxlIGNoaWxkJyk7XG4gICAgICAgICFjdHguaXNTdGFibGUoKSAmJiB0aGlzLl91blN0YWJsZUNoaWxkcysrO1xuICAgICAgICBjdHguX3VuU3RhYmxlQ2hpbGRzICYmIHRoaXMuX3VuU3RhYmxlQ2hpbGRzKys7XG4gICAgICAgIHRoaXMuX2NoaWxkU2NvcGVzTGlzdC5wdXNoKGxpc3RzKTtcbiAgICAgICAgaWYgKCAhd2FzU3RhYmxlICYmIHRoaXMuX3VuU3RhYmxlQ2hpbGRzIClcbiAgICAgICAgICAgIHRoaXMuZW1pdChcInVuc3RhYmxlVHJlZVwiLCB0aGlzKVxuICAgICAgICBjdHgub24obGlzdHMpO1xuICAgIH1cbiAgICBcbiAgICBfcm1DaGlsZCggY3R4ICkge1xuICAgICAgICBsZXQgaSAgICAgICAgID0gdGhpcy5fY2hpbGRTY29wZXMuaW5kZXhPZihjdHgpLFxuICAgICAgICAgICAgd2FzU3RhYmxlID0gdGhpcy5fdW5TdGFibGVDaGlsZHM7XG4gICAgICAgIGlmICggaSAhPSAtMSApIHtcbiAgICAgICAgICAgIHRoaXMuX2NoaWxkU2NvcGVzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICFjdHguaXNTdGFibGUoKSAmJiB0aGlzLl91blN0YWJsZUNoaWxkcy0tO1xuICAgICAgICAgICAgY3R4Ll91blN0YWJsZUNoaWxkcyAmJiB0aGlzLl91blN0YWJsZUNoaWxkcy0tO1xuICAgICAgICAgICAgY3R4LnVuKHRoaXMuX2NoaWxkU2NvcGVzTGlzdC5zcGxpY2UoaSwgMSlbMF0pO1xuICAgICAgICAgICAgaWYgKCB3YXNTdGFibGUgJiYgIXRoaXMuX3VuU3RhYmxlQ2hpbGRzIClcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXQoXCJzdGFibGVUcmVlXCIpXG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgcmV0YWluKCByZWFzb24gKSB7XG4gICAgICAgIHRoaXMuX19yZXRhaW5zLmFsbCsrO1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwicmV0YWluXCIsIHRoaXMuX2lkLCByZWFzb24pO1xuICAgICAgICBpZiAoIHJlYXNvbiApIHtcbiAgICAgICAgICAgIHRoaXMuX19yZXRhaW5zW3JlYXNvbl0gPSB0aGlzLl9fcmV0YWluc1tyZWFzb25dIHx8IDA7XG4gICAgICAgICAgICB0aGlzLl9fcmV0YWluc1tyZWFzb25dKys7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgZGlzcG9zZSggcmVhc29uICkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwiZGlzcG9zZVwiLCB0aGlzLl9pZCwgcmVhc29uKTtcbiAgICAgICAgaWYgKCByZWFzb24gKSB7XG4gICAgICAgICAgICBpZiAoICF0aGlzLl9fcmV0YWluc1tyZWFzb25dIClcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJEaXNwb3NlIG1vcmUgdGhhbiByZXRhaW5pbmcgOiBcIiArIHJlYXNvbik7XG4gICAgICAgICAgICB0aGlzLl9fcmV0YWluc1tyZWFzb25dLS07XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmICggIXRoaXMuX19yZXRhaW5zLmFsbCApXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJEaXNwb3NlIG1vcmUgdGhhbiByZXRhaW5pbmcgIVwiKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX19yZXRhaW5zLmFsbC0tO1xuICAgICAgICBcbiAgICAgICAgaWYgKCAhdGhpcy5fX3JldGFpbnMuYWxsICkge1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcImRpc3Bvc2UgZG8gZGVzdHJveSBcIiwgdGhpcy5faWQsIHRoaXMuX3BlcnNpc3RlbmNlVG0pO1xuICAgICAgICAgICAgaWYgKCB0aGlzLl9wZXJzaXN0ZW5jZVRtICkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2Rlc3Ryb3lUTSAmJiBjbGVhclRpbWVvdXQodGhpcy5fZGVzdHJveVRNKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9kZXN0cm95VE0gPSBzZXRUaW1lb3V0KFxuICAgICAgICAgICAgICAgICAgICBlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGhlbihzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhdGhpcy5fX3JldGFpbnMuYWxsICYmIHRoaXMuZGVzdHJveSgpXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcGVyc2lzdGVuY2VUbVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRoZW4ocyA9PiAoIXRoaXMuX19yZXRhaW5zLmFsbCAmJiB0aGlzLmRlc3Ryb3koKSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIG9yZGVyIGRlc3Ryb3kgb2YgbG9jYWwgc3RvcmVzXG4gICAgICovXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgbGV0IGN0eCAgID0gdGhpcy5fX3Njb3BlO1xuICAgICAgICAvL2NvbnNvbGUud2FybihcImRlc3Ryb3lcIiwgdGhpcy5faWQpO1xuICAgICAgICB0aGlzLmRlYWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmVtaXQoXCJkZXN0cm95XCIsIHRoaXMpO1xuICAgICAgICBPYmplY3Qua2V5cyhcbiAgICAgICAgICAgIHRoaXMuX19saXN0ZW5pbmdcbiAgICAgICAgKS5mb3JFYWNoKFxuICAgICAgICAgICAgaWQgPT4gdGhpcy5fX3Njb3BlW2lkXS5yZW1vdmVMaXN0ZW5lcih0aGlzLl9fbGlzdGVuaW5nW2lkXSlcbiAgICAgICAgKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX3N0YWJpbGl6ZXJUTSAmJiBjbGVhclRpbWVvdXQodGhpcy5fc3RhYmlsaXplclRNKTtcbiAgICAgICAgdGhpcy5fcHJvcGFnVE0gJiYgY2xlYXJUaW1lb3V0KHRoaXMuX3Byb3BhZ1RNKTtcbiAgICAgICAgdGhpcy5fX2xpc3RlbmluZyA9IHt9O1xuICAgICAgICBcbiAgICAgICAgaWYgKCB0aGlzLl9pc0xvY2FsSWQgKVxuICAgICAgICAgICAgZGVsZXRlIG9wZW5TY29wZXNbdGhpcy5faWRdO1xuICAgICAgICB0aGlzLl9mb2xsb3dlcnMubGVuZ3RoID0gMDtcbiAgICAgICAgXG4gICAgICAgIHdoaWxlICggdGhpcy5fX21peGVkTGlzdC5sZW5ndGggKSB7XG4gICAgICAgICAgICB0aGlzLl9fbWl4ZWRbMF0ucmVtb3ZlTGlzdGVuZXIodGhpcy5fX21peGVkTGlzdC5zaGlmdCgpKTtcbiAgICAgICAgICAgIHRoaXMuX19taXhlZC5zaGlmdCgpLmRpc3Bvc2UoXCJtaXhlZFRvXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICggdGhpcy5fX3BhcmVudExpc3QgKSB7XG4gICAgICAgICAgICB0aGlzLnBhcmVudC5fcm1DaGlsZCh0aGlzKTtcbiAgICAgICAgICAgIHRoaXMucGFyZW50LnJlbW92ZUxpc3RlbmVyKHRoaXMuX19wYXJlbnRMaXN0KTtcbiAgICAgICAgICAgIHRoaXMucGFyZW50LmRpc3Bvc2UoXCJpc015UGFyZW50XCIpO1xuICAgICAgICAgICAgdGhpcy5fX3BhcmVudExpc3QgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoIGxldCBrZXkgaW4gY3R4IClcbiAgICAgICAgICAgIGlmICggIWlzLmZuKGN0eFtrZXldKSApIHtcbiAgICAgICAgICAgICAgICAvL2lmICggY3R4W2tleV0uc2NvcGVPYmogPT09IHRoaXMgKVxuICAgICAgICAgICAgICAgIGN0eFtrZXldLmRpc3Bvc2UoXCJzY29wZWRcIik7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy9jdHhba2V5XSA9IGN0eFtrZXldLmNvbnN0cnVjdG9yO1xuICAgICAgICAgICAgfVxuICAgICAgICB0aGlzLl9fbWl4ZWQgPSB0aGlzLmRhdGEgPSB0aGlzLnN0YXRlID0gdGhpcy5zY29wZSA9IHRoaXMuc3RvcmVzID0gbnVsbDtcbiAgICAgICAgdGhpcy5fZGF0YSA9IHRoaXMuX3N0YXRlID0gdGhpcy5fc3RvcmVzID0gbnVsbDtcbiAgICAgICAgXG4gICAgICAgIFxuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvU2NvcGUuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImlzXCJcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcbiAqIENvcHlyaWdodCAoYykgIDIwMTggV2lzZSBXaWxkIFdlYiAuXG4gKlxuICogIE1JVCBMaWNlbnNlXG4gKiAgXG4gKiAgUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqICBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiAgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKiAgXG4gKiAgVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG4gKiAgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqICBcbiAqICBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiAgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiAgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiAgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiAgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcbiAqICBTT0ZUV0FSRS5cbiAqICBcbiAqIEBhdXRob3IgOiBOYXRoYW5hZWwgQnJhdW5cbiAqIEBjb250YWN0IDogY2FpcGlsYWJzQGdtYWlsLmNvbVxuICovXG52YXIgaXMgPSByZXF1aXJlKCdpcycpO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW1pdHRlciB7XG4gICAgX2V2ZW50cyA9IHt9O1xuICAgIFxuICAgIG9uKCBldnQsIGNiICkge1xuICAgICAgICBpZiAoICFpcy5zdHJpbmcoZXZ0KSAmJiBldnQgKVxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKGV2dCkuZm9yRWFjaChrID0+IHRoaXMub24oaywgZXZ0W2tdKSk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9ldmVudHNbZXZ0XSA9IHRoaXMuX2V2ZW50c1tldnRdIHx8IFtdO1xuICAgICAgICB0aGlzLl9ldmVudHNbZXZ0XS5wdXNoKGNiKTtcbiAgICAgICAgXG4gICAgfVxuICAgIFxuICAgIHVuKCBldnQsIGNiICkge1xuICAgICAgICBpZiAoICFpcy5zdHJpbmcoZXZ0KSAmJiBldnQgKVxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKGV2dCkuZm9yRWFjaChrID0+IHRoaXMudW4oaywgZXZ0W2tdKSk7XG4gICAgICAgIFxuICAgICAgICBpZiAoICF0aGlzLl9ldmVudHNbZXZ0XSApIHJldHVybjtcbiAgICAgICAgdmFyIGkgPSB0aGlzLl9ldmVudHNbZXZ0XS5pbmRleE9mKGNiKTtcbiAgICAgICAgdGhpcy5fZXZlbnRzW2V2dF0uc3BsaWNlKGksIDEpO1xuICAgIH1cbiAgICBcbiAgICBlbWl0KCBldnQsIC4uLmFyZ3ogKSB7XG4gICAgICAgIGlmICggIXRoaXMuX2V2ZW50c1tldnRdICkgcmV0dXJuO1xuICAgICAgICBsZXQgbGlzdHMgPSBbLi4udGhpcy5fZXZlbnRzW2V2dF1dO1xuICAgICAgICBmb3IgKCB2YXIgaSA9IDA7IGkgPCBsaXN0cy5sZW5ndGg7IGkrKyApIHtcbiAgICAgICAgICAgIGxpc3RzW2ldKC4uLmFyZ3opO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGFkZExpc3RlbmVyKCkge1xuICAgICAgICB0aGlzLm9uKC4uLmFyZ3VtZW50cyk7XG4gICAgfVxuICAgIFxuICAgIHJlbW92ZUxpc3RlbmVyKCkge1xuICAgICAgICB0aGlzLnVuKC4uLmFyZ3VtZW50cyk7XG4gICAgfVxuICAgIFxuICAgIHJlbW92ZUFsbExpc3RlbmVycygpIHtcbiAgICAgICAgdGhpcy5fZXZlbnRzID0ge307XG4gICAgfVxuICAgIFxuICAgIG9uY2UoIGV2dCwgY2IgKSB7XG4gICAgICAgIGxldCBmbjtcbiAgICAgICAgdGhpcy5vbihldnQsIGZuID0gKCAuLi5hcmd6ICkgPT4ge1xuICAgICAgICAgICAgdGhpcy51bihldnQsIGZuKTtcbiAgICAgICAgICAgIGNiKC4uLmFyZ3opXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBcbiAgICBcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvRW1pdHRlci5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNob3J0aWRcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJzaG9ydGlkXCJcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcbiAqIENvcHlyaWdodCAoYykgIDIwMTggV2lzZSBXaWxkIFdlYiAuXG4gKlxuICogIE1JVCBMaWNlbnNlXG4gKlxuICogIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqICBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiAgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqICBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqICBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqICBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcbiAqICBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqICBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiAgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiAgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiAgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiAgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcbiAqICBTT0ZUV0FSRS5cbiAqXG4gKiBAYXV0aG9yIDogTmF0aGFuYWVsIEJyYXVuXG4gKiBAY29udGFjdCA6IGNhaXBpbGFic0BnbWFpbC5jb21cbiAqL1xuXG4vKipcbiAqIFVsdHJhIHNjYWxhYmxlIHN0YXRlLWF3YXJlIHN0b3JlXG4gKlxuICogQHRvZG8gOiBsb3Qgb2Ygb3B0aW1zLi4uXG4gKi9cblxudmFyIGlzICAgICAgICAgICA9IHJlcXVpcmUoJ2lzJyksXG4gICAgU2NvcGUgICAgICAgID0gcmVxdWlyZSgnLi9TY29wZScpLFxuICAgIEV2ZW50RW1pdHRlciA9IHJlcXVpcmUoJy4vRW1pdHRlcicpLFxuICAgIHNob3J0aWQgICAgICA9IHJlcXVpcmUoJ3Nob3J0aWQnKSxcbiAgICBvYmpQcm90byAgICAgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Yoe30pO1xuLyoqXG4gKiBAY2xhc3MgU3RvcmVcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RvcmUgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICAgIFxuICAgIHN0YXRpYyB1c2UgICAgICAgICAgICAgICAgICA9IFtdOy8vIG92ZXJyaWRhYmxlIGxpc3Qgb2Ygc291cmNlIHN0b3Jlc1xuICAgIHN0YXRpYyBmb2xsb3c7Ly8gb3ZlcnJpZGFibGUgbGlzdCBvZiBzdG9yZSB0aGF0IHdpbGwgYWxsb3cgcHVzaCBpZiB1cGRhdGVkXG4gICAgc3RhdGljIHJlcXVpcmU7XG4gICAgc3RhdGljIHN0YXRpY1Njb3BlICAgICAgICAgID0gbmV3IFNjb3BlKHt9LCB7IGlkOiBcInN0YXRpY1wiIH0pO1xuICAgIHN0YXRpYyBzdGF0ZSAgICAgICAgICAgICAgICA9IHVuZGVmaW5lZDsvLyBkZWZhdWx0IHN0YXRlXG4gICAgLyoqXG4gICAgICogaWYgcmV0YWluIGdvZXMgdG8gMCA6XG4gICAgICogZmFsc2UgdG8gbm90IGRlc3Ryb3ksXG4gICAgICogMCB0byBzeW5jIGF1dG8gZGVzdHJveVxuICAgICAqIE1zIHRvIGF1dG9kZXN0cm95IGFmdGVyIHRtIG1zIGlmIG5vIHJldGFpbiBoYXMgYmVlbiBjYWxsZWRcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbnxJbnR9XG4gICAgICovXG4gICAgICAgICAgIHN0YXRpYyBwZXJzaXN0ZW5jZVRtID0gZmFsc2U7XG4gICAgXG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0b3IsIHdpbGwgYnVpbGQgYSByZXNjb3BlIHN0b3JlXG4gICAgICpcbiAgICAgKiAoc2NvcGUsIHtyZXF1aXJlLHVzZSxhcHBseSxzdGF0ZSwgZGF0YX0pXG4gICAgICogKHNjb3BlKVxuICAgICAqXG4gICAgICogQHBhcmFtIHNjb3BlIHtvYmplY3R9IHNjb3BlIHdoZXJlIHRvIGZpbmQgdGhlIG90aGVyIHN0b3JlcyAoZGVmYXVsdCA6IHN0YXRpYyBzdGF0aWNTY29wZSApXG4gICAgICogQHBhcmFtIGtleXMge0FycmF5fSAocGFzc2VkIHRvIFN0b3JlOjptYXApIEV4IDogW1wic2Vzc2lvblwiLCBcIm90aGVyTmFtZWRTdG9yZTprZXlcIiwgb3RoZXJTdG9yZS5hcyhcIm90aGVyS2V5XCIpXVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB2YXIgYXJneiAgICAgICAgID0gWy4uLmFyZ3VtZW50c10sXG4gICAgICAgICAgICBfc3RhdGljICAgICAgPSB0aGlzLmNvbnN0cnVjdG9yLFxuICAgICAgICAgICAgc2NvcGUgICAgICAgID0gYXJnelswXSBpbnN0YW5jZW9mIFNjb3BlXG4gICAgICAgICAgICAgICAgPyBhcmd6LnNoaWZ0KClcbiAgICAgICAgICAgICAgICA6IF9zdGF0aWMuc2NvcGUgPyBTY29wZS5nZXRTY29wZShfc3RhdGljLnNjb3BlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogaXMuc3RyaW5nKGFyZ3pbMF0pXG4gICAgICAgICAgICAgICAgICAgICAgPyBTY29wZS5nZXRTY29wZShhcmd6LnNoaWZ0KCkpXG4gICAgICAgICAgICAgICAgICAgICAgOiBfc3RhdGljLnN0YXRpY1Njb3BlLFxuICAgICAgICAgICAgY2ZnICAgICAgICAgID0gYXJnelswXSAmJiAhaXMuYXJyYXkoYXJnelswXSkgJiYgIWlzLnN0cmluZyhhcmd6WzBdKSA/IGFyZ3ouc2hpZnQoKSA6IHt9LFxuICAgICAgICAgICAgbmFtZSAgICAgICAgID0gaXMuc3RyaW5nKGFyZ3pbMF0pID8gYXJnelswXSA6IGNmZy5uYW1lIHx8IF9zdGF0aWMubmFtZSxcbiAgICAgICAgICAgIHdhdGNocyAgICAgICA9IGlzLmFycmF5KGFyZ3pbMF0pID8gYXJnei5zaGlmdCgpIDogY2ZnLnVzZSB8fCBbXSwvLyB3YXRjaHMgbmVlZCB0byBiZSBkZWZpbmVkIGFmdGVyIGFsbCB0aGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzdG9yZSBhcmUgcmVnaXN0ZXJlZCA6IHNvIHdlIGNhbid0IGRlYWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB3aXRoIGFueSBcInN0YXRpYyB1c2VcIiBhdXRvbWF0aWNseVxuICAgICAgICAgICAgYXBwbHkgICAgICAgID0gaXMuZm4oYXJnelswXSkgPyBhcmd6LnNoaWZ0KCkgOiBjZmcuYXBwbHkgfHwgbnVsbCxcbiAgICAgICAgICAgIGluaXRpYWxTdGF0ZSA9IF9zdGF0aWMuc3RhdGUgfHwgX3N0YXRpYy5pbml0aWFsU3RhdGUsXG4gICAgICAgICAgICBhcHBsaWVkO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fdWlkID0gY2ZnLl91aWQgfHwgc2hvcnRpZC5nZW5lcmF0ZSgpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fX3JldGFpbnMgICAgPSB7IGFsbDogMCB9O1xuICAgICAgICB0aGlzLl9fbG9ja3MgICAgICA9IHsgYWxsOiAwIH07XG4gICAgICAgIHRoaXMuX29uU3RhYmlsaXplID0gW107XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9wZXJzaXN0ZW5jZVRtID0gY2ZnLnBlcnNpc3RlbmNlVG0gfHwgdGhpcy5jb25zdHJ1Y3Rvci5wZXJzaXN0ZW5jZVRtO1xuICAgICAgICBpZiAoIGlzLnN0cmluZyhhcmd6WzBdKSApIHtcbiAgICAgICAgICAgIGlmICggc2NvcGUuX19zY29wZVtuYW1lXSApXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwiUmVTY29wZTogT3ZlcndyaXRpbmcgYW4gZXhpc3Rpbmcgc3RhdGljIG5hbWVkIHN0b3JlICggJXMgKSAhIVwiLCBuYW1lKTtcbiAgICAgICAgICAgIHNjb3BlLl9fc2NvcGVbbmFtZV0gPSB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAoIGNmZyAmJiBjZmcub24gKSB7XG4gICAgICAgICAgICB0aGlzLm9uKGNmZy5vbik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gdGhpcy5zdGF0ZSAgICAgID0gdGhpcy5zdGF0ZSB8fCB7fTtcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICBcbiAgICAgICAgaWYgKCBzY29wZS5zdG9yZXMgKSB7XG4gICAgICAgICAgICB0aGlzLnNjb3BlT2JqID0gc2NvcGU7XG4gICAgICAgICAgICB0aGlzLnNjb3BlICAgID0gc2NvcGUuc3RvcmVzO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zY29wZU9iaiA9IG5ldyBTY29wZShzY29wZSk7XG4gICAgICAgICAgICB0aGlzLnNjb3BlICAgID0gc2NvcGUuc3RvcmVzO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgdGhpcy5fcmV2ICAgICA9IHRoaXMuY29uc3RydWN0b3IuX3JldiB8fCAwO1xuICAgICAgICB0aGlzLl9yZXZzICAgID0ge307XG4gICAgICAgIHRoaXMuc3RvcmVzICAgPSB7fTtcbiAgICAgICAgdGhpcy5fcmVxdWlyZSA9IFtdO1xuICAgICAgICBcbiAgICAgICAgaWYgKCBpcy5hcnJheShfc3RhdGljLnVzZSkgKSB7XG4gICAgICAgICAgICB0aGlzLl91c2UgPSBbLi4ud2F0Y2hzLCAuLi4oX3N0YXRpYy51c2UgfHwgW10pLm1hcChcbiAgICAgICAgICAgICAgICBrZXkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmVmID0ga2V5Lm1hdGNoKC9eKFxcIT8pKFteXFw6XSopKD86XFw6KC4qKSk/JC8pO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIHJlZlsxXSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZWYyID0gcmVmWzJdLnNwbGl0KCcuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9yZXF1aXJlLnB1c2gocmVmWzNdIHx8IHJlZjJbcmVmMi5sZW5ndGggLSAxXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlZlsyXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3VzZSA9IFsuLi53YXRjaHMsIC4uLihcbiAgICAgICAgICAgICAgICBfc3RhdGljLnVzZSA/IE9iamVjdC5rZXlzKF9zdGF0aWMudXNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVmID0ga2V5Lm1hdGNoKC9eKFxcIT8pKC4qKSQvKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmWzFdICYmIHRoaXMuX3JlcXVpcmUucHVzaChfc3RhdGljLnVzZVtrZXldKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlZlsyXSArICgoX3N0YXRpYy51c2Vba2V5XSA9PT0gdHJ1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJzonICsgX3N0YXRpYy51c2Vba2V5XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IFtdXG4gICAgICAgICAgICApXTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKCBfc3RhdGljLnJlcXVpcmUgKVxuICAgICAgICAgICAgdGhpcy5fcmVxdWlyZS5wdXNoKC4uLl9zdGF0aWMucmVxdWlyZSk7XG4gICAgICAgIGlmICggY2ZnLnJlcXVpcmUgKVxuICAgICAgICAgICAgdGhpcy5fcmVxdWlyZS5wdXNoKC4uLmNmZy5yZXF1aXJlKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX2ZvbGxvd2VycyA9IFtdO1xuICAgICAgICBcbiAgICAgICAgaWYgKCBfc3RhdGljLmRhdGEgIT09IHVuZGVmaW5lZCApXG4gICAgICAgICAgICB0aGlzLmRhdGEgPSB7IC4uLl9zdGF0aWMuZGF0YSB9O1xuICAgICAgICBpZiAoIGNmZy5oYXNPd25Qcm9wZXJ0eShcImRhdGFcIikgJiYgY2ZnLmRhdGEgIT09IHVuZGVmaW5lZCApXG4gICAgICAgICAgICB0aGlzLmRhdGEgPSBjZmcuZGF0YTtcbiAgICAgICAgaWYgKCBjZmcuaGFzT3duUHJvcGVydHkoXCJzdGF0ZVwiKSAmJiBjZmcuc3RhdGUgIT09IHVuZGVmaW5lZCApXG4gICAgICAgICAgICBpbml0aWFsU3RhdGUgPSB7IC4uLmluaXRpYWxTdGF0ZSwgLi4uY2ZnLnN0YXRlIH07XG4gICAgICAgIFxuICAgICAgICBpZiAoIGFwcGx5IClcbiAgICAgICAgICAgIHRoaXMuYXBwbHkgPSBhcHBseTtcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICBpZiAoIGluaXRpYWxTdGF0ZSB8fCB0aGlzLl91c2UubGVuZ3RoICkgey8vIHN5bmMgYXBwbHlcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICAgICAgLi4uKGluaXRpYWxTdGF0ZSB8fCB7fSksXG4gICAgICAgICAgICAgICAgLi4uc2NvcGUubWFwKHRoaXMsIHRoaXMuX3VzZSlcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoIHRoaXMuc2hvdWxkQXBwbHkodGhpcy5zdGF0ZSkgJiYgdGhpcy5kYXRhID09PSB1bmRlZmluZWQgKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhID0gdGhpcy5hcHBseSh0aGlzLmRhdGEsIHRoaXMuc3RhdGUsIHRoaXMuc3RhdGUpO1xuICAgICAgICAgICAgICAgIGFwcGxpZWQgICA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmICggKHRoaXMuZGF0YSAhPT0gdW5kZWZpbmVkIHx8IGFwcGxpZWQpICYmICF0aGlzLl9fbG9ja3MuYWxsICkge1xuICAgICAgICAgICAgdGhpcy5fc3RhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuX3JldisrO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fc3RhYmxlID0gZmFsc2U7XG4gICAgICAgICAgICBpZiAoICFfc3RhdGljLm1hbmFnZWQgJiYgIXRoaXMuc3RhdGUgJiYgKCF0aGlzLl91c2UgfHwgIXRoaXMuX3VzZS5sZW5ndGgpICkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIlJlc2NvcGUgc3RvcmUgJ1wiLCB0aGlzLm5hbWUsIFwiJyBoYXZlIG5vIGluaXRpYWwgZGF0YSwgc3RhdGUgb3IgdXNlLiBJdCBjYW4ndCBzdGFiaWxpemUuLi5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgIXRoaXMuX3N0YWJsZSAmJiB0aGlzLmVtaXQoJ3Vuc3RhYmxlJywgdGhpcy5zdGF0ZSk7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIGdldCBhIEJ1aWxkZXIta2V5IHBhaXIgZm9yIFN0b3JlOjptYXBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgICAqIEByZXR1cm5zIHt7c3RvcmU6IFN0b3JlLCBuYW1lOiAqfX1cbiAgICAgKi9cbiAgICBzdGF0aWMgYXMoIG5hbWUgKSB7XG4gICAgICAgIHJldHVybiB7IHN0b3JlOiB0aGlzLCBuYW1lIH07XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIE1hcCBhbGwgbmFtZWQgc3RvcmVzIGluIHtrZXlzfSB0byB0aGUge29iamVjdH0ncyBzdGF0ZVxuICAgICAqIEhvb2sgY29tcG9uZW50V2lsbFVubW91bnQgKGZvciByZWFjdCBjb21wKSBvciBkZXN0cm95IHRvIHVuQmluZCB0aGVtIGF1dG9tYXRpY2FsbHlcbiAgICAgKiBAc3RhdGljXG4gICAgICogQHBhcmFtIG9iamVjdCB7T2JqZWN0fSB0YXJnZXQgc3RhdGUgYXdhcmUgb2JqZWN0IChSZWFjdC5Db21wb25lbnR8U3RvcmV8Li4uKVxuICAgICAqIEBwYXJhbSBrZXlzIHtBcnJheX0gRXggOiBbXCJzZXNzaW9uXCIsIFwib3RoZXJTdGF0aWNOYW1lZFN0b3JlOmtleVwiLCBzdG9yZS5hcygnYW5vdGhlcktleScpXVxuICAgICAqL1xuICAgIHN0YXRpYyBtYXAoIGNvbXBvbmVudCwga2V5cywgc2NvcGUsIG9yaWdpbiwgc2V0SW5pdGlhbCA9IGZhbHNlICkge1xuICAgICAgICB2YXIgdGFyZ2V0UmV2cyAgICAgPSBjb21wb25lbnQuX3JldnMgfHwge307XG4gICAgICAgIHZhciB0YXJnZXRTY29wZSAgICA9IGNvbXBvbmVudC5zdG9yZXMgfHwgKGNvbXBvbmVudC5zdG9yZXMgPSB7fSk7XG4gICAgICAgIHZhciBpbml0aWFsT3V0cHV0cyA9IHt9O1xuICAgICAgICBrZXlzICAgICAgICAgICAgICAgPSBpcy5hcnJheShrZXlzKSA/IFsuLi5rZXlzXSA6IFtrZXlzXTtcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICBzY29wZSA9IHNjb3BlIHx8IFN0b3JlLnN0YXRpY1Njb3BlO1xuICAgICAgICBcbiAgICAgICAga2V5cyAgICAgICAgICAgPSBrZXlzLmZpbHRlcihcbiAgICAgICAgICAgIC8vIEB0b2RvIDogdXNlIHF1ZXJ5IHJlZnNcbiAgICAgICAgICAgIC8vIChzdG9yZSkoXFwuc3RvcmUpKihcXFsoXFwqfChwcm9wcylcXHcrKSspXFxdKT8oXFw6YWxpYXMpXG4gICAgICAgICAgICAoIGtleSApID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoICFrZXkgKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJOb3QgYSBtYXBwYWJsZSBzdG9yZSBpdGVtICdcIiArIGtleSArIFwiJyBpbiBcIiArIG9yaWdpbiArICcgISEnKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZXQgbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgYWxpYXMsXG4gICAgICAgICAgICAgICAgICAgIHBhdGgsXG4gICAgICAgICAgICAgICAgICAgIHN0b3JlO1xuICAgICAgICAgICAgICAgIGlmICgga2V5LnN0b3JlICYmIGtleS5uYW1lICkge1xuICAgICAgICAgICAgICAgICAgICBhbGlhcyA9IG5hbWUgPSBrZXkubmFtZTtcbiAgICAgICAgICAgICAgICAgICAgc3RvcmUgPSBrZXkuc3RvcmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKCBpcy5mbihrZXkpICkge1xuICAgICAgICAgICAgICAgICAgICBuYW1lID0gYWxpYXMgPSBrZXkubmFtZSB8fCBrZXkuZGVmYXVsdE5hbWU7XG4gICAgICAgICAgICAgICAgICAgIHN0b3JlID0ga2V5O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAga2V5ICAgPSBrZXkubWF0Y2goLyhbXFx3X10rKSgoPzpcXC5bXFx3X10rKSopKD86XFw6KFtcXHdfXSspKT8vKTtcbiAgICAgICAgICAgICAgICAgICAgbmFtZSAgPSBrZXlbMV07XG4gICAgICAgICAgICAgICAgICAgIHBhdGggID0ga2V5WzJdICYmIGtleVsyXS5zdWJzdHIoMSk7XG4gICAgICAgICAgICAgICAgICAgIHN0b3JlID0gc2NvcGUuc3RvcmVzW2tleVsxXV07XG4gICAgICAgICAgICAgICAgICAgIGFsaWFzID0ga2V5WzNdIHx8IHBhdGggJiYgcGF0aC5tYXRjaCgvKFteXFwuXSopJC8pWzBdIHx8IGtleVsxXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKCB0YXJnZXRSZXZzW25hbWVdICkgcmV0dXJuIGZhbHNlOy8vIGlnbm9yZSBkYmwgdXNlcyBmb3Igbm93XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKCAhc3RvcmUgKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJOb3QgYSBtYXBwYWJsZSBzdG9yZSBpdGVtICdcIiArIG5hbWUgKyBcIi9cIiArIGFsaWFzICsgXCInIGluIFwiICsgb3JpZ2luICsgJyAhIScsIHN0b3JlKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICggaXMuZm4oc3RvcmUpICkge1xuICAgICAgICAgICAgICAgICAgICBzY29wZS5fbW91bnQobmFtZSlcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHNjb3BlLnN0b3Jlc1tuYW1lXS5iaW5kKGNvbXBvbmVudCwgYWxpYXMsIHNldEluaXRpYWwsIHBhdGgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc3RvcmUuYmluZChjb21wb25lbnQsIGFsaWFzLCBzZXRJbml0aWFsLCBwYXRoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGFyZ2V0UmV2c1thbGlhc10gPSB0YXJnZXRSZXZzW2FsaWFzXSB8fCB0cnVlO1xuICAgICAgICAgICAgICAgICF0YXJnZXRTY29wZVtuYW1lXSAmJiAodGFyZ2V0U2NvcGVbbmFtZV0gPSBzY29wZS5zdG9yZXNbbmFtZV0pO1xuICAgICAgICAgICAgICAgIGlmICggc2NvcGUuc3RvcmVzW25hbWVdLmhhc093blByb3BlcnR5KCdkYXRhJykgKVxuICAgICAgICAgICAgICAgICAgICBpbml0aWFsT3V0cHV0c1tuYW1lXSA9IHNjb3BlLmRhdGFbbmFtZV07XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHZhciBtaXhlZENXVW5tb3VudCxcbiAgICAgICAgICAgIHVuTW91bnRLZXkgPSBjb21wb25lbnQuaXNSZWFjdENvbXBvbmVudCA/IFwiY29tcG9uZW50V2lsbFVubW91bnRcIiA6IFwiZGVzdHJveVwiO1xuICAgICAgICBcbiAgICAgICAgaWYgKCBjb21wb25lbnQuaGFzT3duUHJvcGVydHkodW5Nb3VudEtleSkgKSB7XG4gICAgICAgICAgICBtaXhlZENXVW5tb3VudCA9IGNvbXBvbmVudFt1bk1vdW50S2V5XTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgY29tcG9uZW50W3VuTW91bnRLZXldID0gKCAuLi5hcmd6ICkgPT4ge1xuICAgICAgICAgICAgZGVsZXRlIGNvbXBvbmVudFt1bk1vdW50S2V5XTtcbiAgICAgICAgICAgIGlmICggbWl4ZWRDV1VubW91bnQgKVxuICAgICAgICAgICAgICAgIGNvbXBvbmVudFt1bk1vdW50S2V5XSA9IG1peGVkQ1dVbm1vdW50O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBrZXlzLm1hcChcbiAgICAgICAgICAgICAgICAoIGtleSApID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlhcywgcGF0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIGtleS5zdG9yZSAmJiBrZXkubmFtZSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWFzID0gbmFtZSA9IGtleS5uYW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmUgPSBrZXkuc3RvcmU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoIGlzLmZuKGtleSkgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lID0gYWxpYXMgPSBrZXkubmFtZSB8fCBrZXkuZGVmYXVsdE5hbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9yZSA9IHNjb3BlLnN0b3Jlc1tuYW1lXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleSAgID0ga2V5Lm1hdGNoKC8oW1xcd19dKykoKD86XFwuW1xcd19dKykqKSg/OlxcOihbXFx3X10rKSk/Lyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lICA9IGtleVsxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGggID0ga2V5WzJdICYmIGtleVsyXS5zdWJzdHIoMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9yZSA9IHNjb3BlLnN0b3Jlc1trZXlbMV1dO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpYXMgPSBrZXlbM10gfHwgcGF0aCAmJiBwYXRoLm1hdGNoKC8oW15cXC5dKikkLylbMF0gfHwga2V5WzFdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBzdG9yZSAmJiAhaXMuZm4oc3RvcmUpICYmIHN0b3JlLnVuQmluZChjb21wb25lbnQsIGFsaWFzLCBwYXRoKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICByZXR1cm4gY29tcG9uZW50W3VuTW91bnRLZXldICYmIGNvbXBvbmVudFt1bk1vdW50S2V5XSguLi5hcmd6KTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGluaXRpYWxPdXRwdXRzO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBAZGVwcmVjYXRlZFxuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqL1xuICAgIGdldCBjb250ZXh0T2JqKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zY29wZU9iajtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogQGRlcHJlY2F0ZWRcbiAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgKi9cbiAgICBnZXQgY29udGV4dCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NvcGU7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIEBkZXByZWNhdGVkXG4gICAgICogQHJldHVybnMgeyp9XG4gICAgICovXG4gICAgZ2V0IGRhdGFzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBAZGVwcmVjYXRlZFxuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqL1xuICAgIHNldCBkYXRhcyggdiApIHtcbiAgICAgICAgLy9jb25zb2xlLmdyb3VwQ29sbGFwc2VkKFwiUmVzY29wZSBzdG9yZSA6IFNldHRpbmcgZGF0YXMgaXMgZGVwcmVjaWF0ZWQsIHVzZSBkYXRhXCIpO1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwiUmVzY29wZSBzdG9yZSA6IFNldHRpbmcgZGF0YXMgaXMgZGVwcmVjaWF0ZWQsIHVzZSBkYXRhXCIsIChuZXcgRXJyb3IoKSkuc3RhY2spO1xuICAgICAgICAvL2NvbnNvbGUuZ3JvdXBFbmQoKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuZGF0YSA9IHY7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIE92ZXJyaWRhYmxlIG1ldGhvZCB0byBrbm93IGlmIGEgZGF0YSBjaGFuZ2Ugc2hvdWxkIGJlIHByb3BhZyB0byB0aGUgbGlzdGVuaW5nIHN0b3JlcyAmIGNvbXBvbmVudHNcbiAgICAgKi9cbiAgICBzaG91bGRQcm9wYWcoIG5EYXRhcyApIHtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBcbiAgICBoYXNEYXRhQ2hhbmdlKCBuRGF0YXMgKSB7XG4gICAgICAgIHZhciBfc3RhdGljID0gdGhpcy5jb25zdHJ1Y3RvciwgcixcbiAgICAgICAgICAgIGNEYXRhcyAgPSB0aGlzLmRhdGE7XG4gICAgICAgIHIgICAgICAgICAgID0gIWNEYXRhcyAmJiBuRGF0YXMgfHwgY0RhdGFzICE9PSBuRGF0YXM7XG4gICAgICAgICFyICYmIGNEYXRhcyAmJiBPYmplY3Qua2V5cyhjRGF0YXMpLmZvckVhY2goXG4gICAgICAgICAgICAoIGtleSApID0+IHtcbiAgICAgICAgICAgICAgICByID0gciB8fCAobkRhdGFzID8gY0RhdGFzW2tleV0gIT09IG5EYXRhc1trZXldIDogY0RhdGFzICYmIGNEYXRhc1trZXldKVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICAhciAmJiBuRGF0YXMgJiYgT2JqZWN0LmtleXMobkRhdGFzKS5mb3JFYWNoKFxuICAgICAgICAgICAgKCBrZXkgKSA9PiB7XG4gICAgICAgICAgICAgICAgciA9IHIgfHwgKG5EYXRhcyA/IGNEYXRhc1trZXldICE9PSBuRGF0YXNba2V5XSA6IGNEYXRhcyAmJiBjRGF0YXNba2V5XSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHI7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIE92ZXJyaWRhYmxlIG1ldGhvZCB0byBrbm93IGlmIGEgc3RhdGUgY2hhbmdlIHNob3VsZCBiZSBhcHBsaWVkXG4gICAgICovXG4gICAgc2hvdWxkQXBwbHkoIHN0YXRlID0gdGhpcy5zdGF0ZSApIHtcbiAgICAgICAgdmFyIF9zdGF0aWMgPSB0aGlzLmNvbnN0cnVjdG9yO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICEhdGhpcy5pc0NvbXBsZXRlKHN0YXRlKVxuICAgICAgICApICYmIChpcy5hcnJheShfc3RhdGljLmZvbGxvdylcbiAgICAgICAgICAgICAgICA/IF9zdGF0aWMuZm9sbG93XG4gICAgICAgICAgICAgICAgICAgICAgICAgLnJlZHVjZSgoIHIsIGkgKSA9PiAociB8fCBzdGF0ZSAmJiBzdGF0ZVtpXSksIGZhbHNlKVxuICAgICAgICAgICAgICAgIDogX3N0YXRpYy5mb2xsb3dcbiAgICAgICAgICAgICAgICAgID8gT2JqZWN0LmtleXMoX3N0YXRpYy5mb2xsb3cpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5yZWR1Y2UoKCByLCBpICkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfHwgc3RhdGUgJiYgaXMuZm4oX3N0YXRpYy5mb2xsb3dbaV0pICYmIF9zdGF0aWMuZm9sbG93W2ldLmNhbGwodGhpcywgc3RhdGVbaV0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8fCBfc3RhdGljLmZvbGxvd1tpXSAmJiBzdGF0ZVtpXSAhPT0gdGhpcy5zdGF0ZVtpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApLCBmYWxzZSkgOiB0cnVlXG4gICAgICAgICk7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIE92ZXJyaWRhYmxlIGFwcGxpZXIgLyByZW1hcHBlclxuICAgICAqIElmIHN0YXRlIG9yIGxhc3RQdWJsaWNTdGF0ZSBhcmUgc2ltcGxlIGhhc2ggbWFwcyBhcHBseSB3aWxsIHJldHVybiB7Li4uZGF0YSwgLi4uc3RhdGV9XG4gICAgICogaWYgbm90IGl0IHdpbGwgcmV0dXJuIHRoZSBsYXN0IHByaXZhdGUgc3RhdGVcbiAgICAgKiBAcGFyYW0gZGF0YVxuICAgICAqIEBwYXJhbSBzdGF0ZVxuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqL1xuICAgIGFwcGx5KCBkYXRhLCBzdGF0ZSwgY2hhbmdlcyApIHtcbiAgICAgICAgc3RhdGUgPSBzdGF0ZSB8fCB0aGlzLnN0YXRlO1xuICAgICAgICBcbiAgICAgICAgaWYgKCB0aGlzLnJlZmluZSApXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZWZpbmUoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgXG4gICAgICAgIGlmICggIWRhdGEgfHwgZGF0YS5fX3Byb3RvX18gIT09IG9ialByb3RvIHx8IHN0YXRlLl9fcHJvdG9fXyAhPT0gb2JqUHJvdG8gKVxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICByZXR1cm4geyAuLi5kYXRhLCAuLi5zdGF0ZSB9XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIEBkZXByZWNpYXRlZFxuICAgICAqIEBwYXJhbSBkYXRhXG4gICAgICogQHBhcmFtIHN0YXRlXG4gICAgICogQHBhcmFtIGNoYW5nZXNcbiAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgKi9cbiAgICByZWZpbmUoIGRhdGEsIHN0YXRlLCBjaGFuZ2VzICkge1xuICAgICAgICBzdGF0ZSA9IHN0YXRlIHx8IHRoaXMuc3RhdGU7XG4gICAgICAgIFxuICAgICAgICBpZiAoICFkYXRhIHx8IGRhdGEuX19wcm90b19fICE9PSBvYmpQcm90byB8fCBzdGF0ZS5fX3Byb3RvX18gIT09IG9ialByb3RvIClcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgcmV0dXJuIHsgLi4uZGF0YSwgLi4uc3RhdGUgfVxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBEZWJvdW5jZSB0aGlzIHN0b3JlIHByb3BhZ2F0aW9uICggJiByZWR1Y2luZyApXG4gICAgICogQHBhcmFtIGNiXG4gICAgICovXG4gICAgc3RhYmlsaXplKCBjYiApIHtcbiAgICAgICAgY2IgJiYgdGhpcy5vbmNlKCdzdGFibGUnLCBjYik7XG4gICAgICAgIHRoaXMuX3N0YWJsZSAmJiB0aGlzLmVtaXQoJ3Vuc3RhYmxlJywgdGhpcy5zdGF0ZSwgdGhpcy5kYXRhKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX3N0YWJsZSA9IGZhbHNlO1xuICAgICAgICBcbiAgICAgICAgaWYgKCB0aGlzLl9zdGFiaWxpemVyIClcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9zdGFiaWxpemVyKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX3N0YWJpbGl6ZXIgPSBzZXRUaW1lb3V0KFxuICAgICAgICAgICAgdGhpcy5wdXNoLmJpbmQoXG4gICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICgpID0+IHsvL0B0b2RvXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBsZXQgc3RhYmxlICAgPSB0aGlzLl9zdGFibGU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3N0YWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICFzdGFibGUgJiYgdGhpcy5lbWl0KCdzdGFibGUnLCB0aGlzLnN0YXRlLCB0aGlzLmRhdGEpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zdGFiaWxpemVyID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5yZWxlYXNlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKSk7XG4gICAgfVxuICAgIFxuICAgIHJldHJpZXZlKCBwYXRoLCBpID0gMCwgb2JqID0gdGhpcy5kYXRhICkge1xuICAgICAgICBwYXRoID0gaXMuc3RyaW5nKHBhdGgpID8gcGF0aC5zcGxpdCgnLicpIDogcGF0aDtcbiAgICAgICAgcmV0dXJuICFvYmogfHwgIXBhdGggfHwgIXBhdGgubGVuZ3RoXG4gICAgICAgICAgICA/IG9ialxuICAgICAgICAgICAgOiBwYXRoLmxlbmd0aCA9PSBpICsgMVxuICAgICAgICAgICAgICAgICAgID8gb2JqW3BhdGhbaV1dXG4gICAgICAgICAgICAgICAgICAgOiB0aGlzLnJldHJpZXZlKHBhdGgsIGkgKyAxLCBvYmpbcGF0aFtpXV0pO1xuICAgIH1cbiAgICBcbiAgICBkaXNwYXRjaCggYWN0aW9uLCAuLi5hcmd6ICkge1xuICAgICAgICB0aGlzLnNjb3BlT2JqLmRpc3BhdGNoKGFjdGlvbiwgLi4uYXJneik7XG4gICAgfVxuICAgIFxuICAgIHRyaWdnZXIoIGFjdGlvbiwgLi4uYXJneiApIHtcbiAgICAgICAgbGV0IHsgYWN0aW9ucyB9ID0gdGhpcy5jb25zdHJ1Y3RvcixcbiAgICAgICAgICAgIG5zO1xuICAgICAgICBpZiAoIGFjdGlvbnMgJiYgYWN0aW9uc1thY3Rpb25dICkge1xuICAgICAgICAgICAgbnMgPSBhY3Rpb25zW2FjdGlvbl0uY2FsbCh0aGlzLCAuLi5hcmd6KTtcbiAgICAgICAgICAgIG5zICYmIHRoaXMuc2V0U3RhdGUobnMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIFB1bGwgc3RvcmVzIGluIHRoZSBwcml2YXRlIHN0YXRlXG4gICAgICogQHBhcmFtIHN0b3JlcyAge0FycmF5fSAocGFzc2VkIHRvIFN0b3JlOjptYXApIEV4IDogW1wic2Vzc2lvblwiLCBcIm90aGVyTmFtZWRTdG9yZTprZXlcIiwgb3RoZXJTdG9yZS5hcyhcIm90aGVyS2V5XCIpXVxuICAgICAqL1xuICAgIHB1bGwoIHN0b3JlcywgZG9XYWl0LCBvcmlnaW4gKSB7XG4gICAgICAgIGxldCBpbml0aWFsT3V0cHV0cyA9IHRoaXMuc2NvcGVPYmoubWFwKHRoaXMsIHN0b3Jlcyk7XG4gICAgICAgIGlmICggZG9XYWl0ICkge1xuICAgICAgICAgICAgdGhpcy53YWl0KCk7XG4gICAgICAgICAgICBzdG9yZXMuZm9yRWFjaCgoIHMgKSA9PiB0aGlzLnNjb3BlW3NdICYmIHRoaXMud2FpdCh0aGlzLnNjb3BlW3NdKSk7XG4gICAgICAgICAgICB0aGlzLnJlbGVhc2UoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW5pdGlhbE91dHB1dHM7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIEFwcGx5IGFwcGx5L3JlbWFwIG9uIHRoZSBwcml2YXRlIHN0YXRlICYgcHVzaCB0aGUgcmVzdWx0aW5nIFwicHVibGljXCIgc3RhdGUgdG8gZm9sbG93ZXJzXG4gICAgICogQHBhcmFtIGNiXG4gICAgICovXG4gICAgcHVzaCggZGF0YSwgZm9yY2UsIGNiICkge1xuICAgICAgICBjYiAgICAgICAgICAgID0gZm9yY2UgPT09IHRydWUgPyBjYiA6IGZvcmNlO1xuICAgICAgICBmb3JjZSAgICAgICAgID0gZm9yY2UgPT09IHRydWU7XG4gICAgICAgIHZhciBpICAgICAgICAgPSAwLFxuICAgICAgICAgICAgbmV4dFN0YXRlID0gIWRhdGEgJiYgeyAuLi50aGlzLnN0YXRlLCAuLi50aGlzLl9jaGFuZ2VzU1cgfSB8fCB0aGlzLnN0YXRlLFxuICAgICAgICAgICAgbmV4dERhdGFzID0gZGF0YSB8fCB0aGlzLmFwcGx5KHRoaXMuZGF0YSwgbmV4dFN0YXRlLCB0aGlzLl9jaGFuZ2VzU1cpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5zdGF0ZSAgICAgID0gbmV4dFN0YXRlO1xuICAgICAgICB0aGlzLl9jaGFuZ2VzU1cgPSB7fTtcbiAgICAgICAgaWYgKCAhZm9yY2UgJiZcbiAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgICAhdGhpcy5oYXNEYXRhQ2hhbmdlKG5leHREYXRhcylcbiAgICAgICAgICAgIClcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBjYiAmJiBjYigpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0aGlzLmRhdGEgPSBuZXh0RGF0YXM7XG4gICAgICAgIHRoaXMud2FpdCgpO1xuICAgICAgICB0aGlzLnJlbGVhc2UoY2IpO1xuICAgICAgICBcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogVXBkYXRlIHRoZSBjdXJyZW50IHByaXZhdGUgc3RhdGUgJiBwdXNoIGl0IG9uY2UgdGhlIHN0b3JlIGlzIHN0YWJsZVxuICAgICAqIEBwYXJhbSBwU3RhdGVcbiAgICAgKiBAcGFyYW0gY2JcbiAgICAgKi9cbiAgICBzZXRTdGF0ZSggcFN0YXRlLCBjYiwgc3luYyApIHtcbiAgICAgICAgdmFyIGkgICAgICAgPSAwLCBjaGFuZ2UsXG4gICAgICAgICAgICBjaGFuZ2VzID0gdGhpcy5fY2hhbmdlc1NXID0gdGhpcy5fY2hhbmdlc1NXIHx8IHt9O1xuICAgICAgICBmb3IgKCB2YXIgayBpbiBwU3RhdGUgKVxuICAgICAgICAgICAgaWYgKCAhdGhpcy5zdGF0ZSB8fCBwU3RhdGUuaGFzT3duUHJvcGVydHkoaylcbiAgICAgICAgICAgICAgICAmJiAoXG4gICAgICAgICAgICAgICAgICAgIHBTdGF0ZVtrXSAhPSB0aGlzLnN0YXRlW2tdXG4gICAgICAgICAgICAgICAgICAgIHx8XG4gICAgICAgICAgICAgICAgICAgICh0aGlzLnN0YXRlW2tdICYmIHBTdGF0ZVtrXSAmJiAocFN0YXRlW2tdLl9yZXYgIT0gdGhpcy5fcmV2c1trXSkpLy8gcmV2L2hhc2ggdXBkYXRlXG4gICAgICAgICAgICAgICAgKSApIHtcbiAgICAgICAgICAgICAgICBjaGFuZ2UgICAgICAgID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLl9yZXZzW2tdID0gcFN0YXRlW2tdICYmIHBTdGF0ZVtrXS5fcmV2IHx8IHRydWU7XG4gICAgICAgICAgICAgICAgY2hhbmdlc1trXSAgICA9IHBTdGF0ZVtrXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmICggIXRoaXMuc2hvdWxkQXBwbHkoeyAuLi50aGlzLnN0YXRlLCAuLi5jaGFuZ2VzIH0pICkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAoIHN5bmMgKSB7XG4gICAgICAgICAgICB0aGlzLnB1c2goKTtcbiAgICAgICAgICAgIGNiICYmIGNiKCk7XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmICggY2hhbmdlICkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhYmlsaXplKGNiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgY2IgJiYgY2IoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogVXBkYXRlIHRoZSBjdXJyZW50IHByaXZhdGUgc3RhdGUgJiBwdXNoIGl0IG9uY2UgdGhlIHN0b3JlIGlzIHN0YWJsZVxuICAgICAqIEBwYXJhbSBwU3RhdGVcbiAgICAgKiBAcGFyYW0gY2JcbiAgICAgKi9cbiAgICBzZXRTdGF0ZVN5bmMoIHBTdGF0ZSApIHtcbiAgICAgICAgdmFyIGkgICAgICAgPSAwLCBjaGFuZ2UsXG4gICAgICAgICAgICBjaGFuZ2VzID0gdGhpcy5fY2hhbmdlc1NXID0gdGhpcy5fY2hhbmdlc1NXIHx8IHt9O1xuICAgICAgICBmb3IgKCB2YXIgayBpbiBwU3RhdGUgKVxuICAgICAgICAgICAgaWYgKCAhdGhpcy5zdGF0ZSB8fCBwU3RhdGUuaGFzT3duUHJvcGVydHkoaylcbiAgICAgICAgICAgICAgICAmJiAoXG4gICAgICAgICAgICAgICAgICAgIHBTdGF0ZVtrXSAhPSB0aGlzLnN0YXRlW2tdXG4gICAgICAgICAgICAgICAgICAgIHx8XG4gICAgICAgICAgICAgICAgICAgICh0aGlzLnN0YXRlW2tdICYmIHBTdGF0ZVtrXSAmJiAocFN0YXRlW2tdLl9yZXYgIT0gdGhpcy5fcmV2c1trXSkpLy8gcmV2L2hhc2ggdXBkYXRlXG4gICAgICAgICAgICAgICAgKSApIHtcbiAgICAgICAgICAgICAgICBjaGFuZ2UgICAgICAgID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLl9yZXZzW2tdID0gcFN0YXRlW2tdICYmIHBTdGF0ZVtrXS5fcmV2IHx8IHRydWU7XG4gICAgICAgICAgICAgICAgY2hhbmdlc1trXSAgICA9IHBTdGF0ZVtrXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgdGhpcy5zaG91bGRBcHBseSh7IC4uLih0aGlzLnN0YXRlIHx8IHt9KSwgLi4uY2hhbmdlcyB9KSAmJiB0aGlzLnB1c2goKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogUmVwbGFjZSB0aGUgY3VycmVudCBwcml2YXRlIHN0YXRlICYgcHVzaCBpdCBvbmNlIHRoZSBzdG9yZSBpcyBzdGFibGVcbiAgICAgKiBAcGFyYW0gcFN0YXRlXG4gICAgICogQHBhcmFtIGNiXG4gICAgICovXG4gICAgcmVwbGFjZVN0YXRlKCBwU3RhdGUsIGNiICkge1xuICAgICAgICB2YXIgaSAgICAgID0gMCwgbWUgPSB0aGlzO1xuICAgICAgICB0aGlzLnN0YXRlID0gcFN0YXRlO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5zdGFiaWxpemUoY2IpO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBnZXQgYSBzdG9yZS1rZXkgcGFpciBmb3IgU3RvcmU6Om1hcFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gICAgICogQHJldHVybnMge3tzdG9yZTogU3RvcmUsIG5hbWU6ICp9fVxuICAgICAqL1xuICAgIGFzKCBuYW1lICkge1xuICAgICAgICByZXR1cm4geyBzdG9yZTogdGhpcywgbmFtZSB9O1xuICAgIH1cbiAgICBcbiAgICBvbiggbGlzdHMgKSB7XG4gICAgICAgIGlmICggIWlzLnN0cmluZyhsaXN0cykgJiYgbGlzdHMgKVxuICAgICAgICAgICAgT2JqZWN0LmtleXMobGlzdHMpLmZvckVhY2goayA9PiBzdXBlci5vbihrLCBsaXN0c1trXSkpO1xuICAgICAgICBlbHNlIHN1cGVyLm9uKC4uLmFyZ3VtZW50cyk7XG4gICAgfVxuICAgIFxuICAgIHJlbW92ZUxpc3RlbmVyKCBsaXN0cyApIHtcbiAgICAgICAgaWYgKCAhaXMuc3RyaW5nKGxpc3RzKSAmJiBsaXN0cyApXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhsaXN0cykuZm9yRWFjaChrID0+IHN1cGVyLnJlbW92ZUxpc3RlbmVyKGssIGxpc3RzW2tdKSk7XG4gICAgICAgIGVsc2Ugc3VwZXIucmVtb3ZlTGlzdGVuZXIoLi4uYXJndW1lbnRzKTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogcmVsaW5rIGJpbmRpbmdzICYgcmVxdWlyZXNcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgICAqIEByZXR1cm5zIHt7c3RvcmU6IFN0b3JlLCBuYW1lOiAqfX1cbiAgICAgKi9cbiAgICByZWxpbmsoIGZyb20gKSB7XG4gICAgICAgIGxldCBzY29wZSAgID0gdGhpcy5zY29wZU9iaixcbiAgICAgICAgICAgIF9zdGF0aWMgPSB0aGlzLmNvbnN0cnVjdG9yO1xuICAgICAgICBpZiAoIF9zdGF0aWMudXNlICkge1xuICAgICAgICAgICAgLy90b2RvIHVubGlua1xuICAgICAgICAgICAgdGhpcy5wdWxsKF9zdGF0aWMudXNlLCBmYWxzZSwgZnJvbSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmICggdGhpcy5fcmVxdWlyZSApIHtcbiAgICAgICAgICAgIHRoaXMuX3JlcXVpcmUuZm9yRWFjaChcbiAgICAgICAgICAgICAgICBzdG9yZSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2FpdChzY29wZS5fX3Njb3BlW3N0b3JlXSlcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIGlzIGNvbXBsZXRlIChhbGwgcmVxdWllcmVkIGtleXMgYXJlIGhlcmUpXG4gICAgICogQHJldHVybnMgYm9vbFxuICAgICAqL1xuICAgIGlzQ29tcGxldGUoIHN0YXRlID0gdGhpcy5zdGF0ZSApIHtcbiAgICAgICAgdmFyIF9zdGF0aWMgPSB0aGlzLmNvbnN0cnVjdG9yO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgIXRoaXMuX3JlcXVpcmVcbiAgICAgICAgICAgIHx8ICF0aGlzLl9yZXF1aXJlLmxlbmd0aFxuICAgICAgICAgICAgfHwgc3RhdGUgJiYgdGhpcy5fcmVxdWlyZS5yZWR1Y2UoXG4gICAgICAgICAgICAgICAgKCByLCBrZXkgKSA9PiAociAmJiBzdGF0ZVtrZXldKSxcbiAgICAgICAgICAgICAgICB0cnVlXG4gICAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIGlzIHN0YWJsZVxuICAgICAqIEByZXR1cm5zIGJvb2xcbiAgICAgKi9cbiAgICBpc1N0YWJsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0YWJsZTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogVW4gYmluZCB0aGlzIHN0b3JlIG9mZiB0aGUgZ2l2ZW4gY29tcG9uZW50LWtleVxuICAgICAqIEBwYXJhbSBvYmpcbiAgICAgKiBAcGFyYW0ga2V5XG4gICAgICogQHJldHVybnMge0FycmF5LjwqPn1cbiAgICAgKi9cbiAgICB1bkJpbmQoIG9iaiwga2V5LCBwYXRoICkge1xuICAgICAgICB2YXIgZm9sbG93ZXJzID0gdGhpcy5fZm9sbG93ZXJzLFxuICAgICAgICAgICAgaSAgICAgICAgID0gZm9sbG93ZXJzICYmIGZvbGxvd2Vycy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggZm9sbG93ZXJzICYmIGktLSApXG4gICAgICAgICAgICBpZiAoIGZvbGxvd2Vyc1tpXVswXSA9PT0gb2JqICYmIGZvbGxvd2Vyc1tpXVsxXSA9PT0ga2V5ICYmIGZvbGxvd2Vyc1tpXVsyXSA9PT0gcGF0aCApXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZvbGxvd2Vycy5zcGxpY2UoaSwgMSk7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIEJpbmQgdGhpcyBzdG9yZSBjaGFuZ2VzIHRvIHRoZSBnaXZlbiBjb21wb25lbnQta2V5XG4gICAgICogQHBhcmFtIG9iaiB7UmVhY3QuQ29tcG9uZW50fFN0b3JlfGZ1bmN0aW9uKVxuICAgICAqIEBwYXJhbSBrZXkge3N0cmluZ30gb3B0aW9uYWwga2V5IHdoZXJlIHRvIG1hcCB0aGUgcHVibGljIHN0YXRlXG4gICAgICovXG4gICAgYmluZCggb2JqLCBrZXksIHNldEluaXRpYWwgPSB0cnVlLCBwYXRoICkge1xuICAgICAgICB0aGlzLl9mb2xsb3dlcnMucHVzaChbb2JqLCBrZXksIHBhdGhdKTtcbiAgICAgICAgaWYgKCBzZXRJbml0aWFsICYmIHRoaXMuZGF0YSAmJiB0aGlzLl9zdGFibGUgKSB7XG4gICAgICAgICAgICBsZXQgZGF0YSA9IHBhdGggPyB0aGlzLnJldHJpZXZlKHBhdGgpIDogdGhpcy5kYXRhO1xuICAgICAgICAgICAgaWYgKCB0eXBlb2Ygb2JqICE9IFwiZnVuY3Rpb25cIiApIHtcbiAgICAgICAgICAgICAgICBpZiAoIGtleSApIG9iai5zZXRTdGF0ZSh7IFtrZXldOiBkYXRhIH0pO1xuICAgICAgICAgICAgICAgIGVsc2Ugb2JqLnNldFN0YXRlKGRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgb2JqKGRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIG9uY2UoJ3N0YWJsZScsIGNiKVxuICAgICAqIEBwYXJhbSBvYmoge1JlYWN0LkNvbXBvbmVudHxTdG9yZXxmdW5jdGlvbilcbiAgICAgKiBAcGFyYW0ga2V5IHtzdHJpbmd9IG9wdGlvbmFsIGtleSB3aGVyZSB0byBtYXAgdGhlIHB1YmxpYyBzdGF0ZVxuICAgICAqL1xuICAgIHRoZW4oIGNiICkge1xuICAgICAgICBpZiAoIHRoaXMuX3N0YWJsZSApXG4gICAgICAgICAgICByZXR1cm4gY2IobnVsbCwgdGhpcy5kYXRhKTtcbiAgICAgICAgdGhpcy5vbmNlKCdzdGFibGUnLCBlID0+IGNiKG51bGwsIHRoaXMuZGF0YSkpO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBBZGQgYSBsb2NrIHNvIHRoZSBzdG9yZSB3aWxsIG5vdCBwcm9wYWcgaXQgc3RhdGUgdW50aWxsIHJlbGVhc2UoKSBpcyBjYWxsXG4gICAgICogQHBhcmFtIHByZXZpb3VzIHtTdG9yZXxudW1iZXJ8QXJyYXl9IEBvcHRpb25hbCB3ZiB0byB3YWl0LCByZWxlYXNlcyB0byB3YWl0IG9yIGFycmF5IG9mIHN0dWZmIHRvIHdhaXRcbiAgICAgKiBAcmV0dXJucyB7VGFza0Zsb3d9XG4gICAgICovXG4gICAgd2FpdCggcHJldmlvdXMgKSB7XG4gICAgICAgIGlmICggdHlwZW9mIHByZXZpb3VzID09IFwibnVtYmVyXCIgKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX19sb2Nrcy5hbGwgKz0gcHJldmlvdXM7XG4gICAgICAgIGlmICggaXMuYXJyYXkocHJldmlvdXMpIClcbiAgICAgICAgICAgIHJldHVybiBwcmV2aW91cy5tYXAodGhpcy53YWl0LmJpbmQodGhpcykpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fc3RhYmxlICYmIHRoaXMuZW1pdCgndW5zdGFibGUnLCB0aGlzLnN0YXRlLCB0aGlzLmRhdGEpO1xuICAgICAgICB0aGlzLl9zdGFibGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fX2xvY2tzLmFsbCsrO1xuICAgICAgICBcbiAgICAgICAgbGV0IHJlYXNvbiA9IGlzLnN0cmluZyhwcmV2aW91cykgPyBwcmV2aW91cyA6IG51bGw7XG4gICAgICAgIGlmICggcmVhc29uICkge1xuICAgICAgICAgICAgdGhpcy5fX2xvY2tzW3JlYXNvbl0gPSB0aGlzLl9fbG9ja3NbcmVhc29uXSB8fCAwO1xuICAgICAgICAgICAgdGhpcy5fX2xvY2tzW3JlYXNvbl0rKztcbiAgICAgICAgfVxuICAgICAgICBpZiAoIHByZXZpb3VzICYmIGlzLmZuKHByZXZpb3VzLnRoZW4pICkge1xuICAgICAgICAgICAgcHJldmlvdXMudGhlbih0aGlzLnJlbGVhc2UuYmluZCh0aGlzLCBudWxsKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIERlY3JlYXNlIGxvY2tzIGZvciB0aGlzIHN0b3JlLCBpZiBpdCByZWFjaCAwICYgaXQgaGF2ZSBhIHB1YmxpYyBzdGF0ZSxcbiAgICAgKiBpdCB3aWxsIGJlIHByb3BhZ2F0ZWQgdG8gdGhlIGZvbGxvd2VycyxcbiAgICAgKiB0aGVuLCBhbGwgc3R1ZmYgcGFzc2VkIHRvIFwidGhlblwiIGNhbGwgYmFjayB3aWxsIGJlIGV4ZWMgLyByZWxlYXNlZFxuICAgICAqIEBwYXJhbSBkZXN5bmNcbiAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgKi9cbiAgICByZWxlYXNlKCByZWFzb24sIGNiICkge1xuICAgICAgICB2YXIgX3N0YXRpYyA9IHRoaXMuY29uc3RydWN0b3I7XG4gICAgICAgIGxldCBpICAgICAgID0gMCwgd2FzU3RhYmxlID0gdGhpcy5fc3RhYmxlO1xuICAgICAgICBcbiAgICAgICAgaWYgKCBpcy5mbihyZWFzb24pICkge1xuICAgICAgICAgICAgY2IgICAgID0gcmVhc29uO1xuICAgICAgICAgICAgcmVhc29uID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKCByZWFzb24gKSB7XG4gICAgICAgICAgICBpZiAoIHRoaXMuX19sb2Nrc1tyZWFzb25dID09IDAgKVxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJSZWxlYXNlIG1vcmUgdGhhbiBsb2NraW5nICFcIiwgcmVhc29uKTtcbiAgICAgICAgICAgIHRoaXMuX19sb2Nrc1tyZWFzb25dID0gdGhpcy5fX2xvY2tzW3JlYXNvbl0gfHwgMDtcbiAgICAgICAgICAgIHRoaXMuX19sb2Nrc1tyZWFzb25dLS07XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmICggIXJlYXNvbiAmJiB0aGlzLl9fbG9ja3MuYWxsID09IDAgKVxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlJlbGVhc2UgbW9yZSB0aGFuIGxvY2tpbmcgIVwiKTtcbiAgICAgICAgXG4gICAgICAgIGlmICggIS0tdGhpcy5fX2xvY2tzLmFsbCAmJiB0aGlzLmRhdGEgJiYgdGhpcy5pc0NvbXBsZXRlKCkgKSB7XG4gICAgICAgICAgICBsZXQgcHJvcGFnICAgPSB0aGlzLnNob3VsZFByb3BhZyh0aGlzLmRhdGEpO1xuICAgICAgICAgICAgdGhpcy5fc3RhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIHByb3BhZyAmJiB0aGlzLl9yZXYrKzsvL1xuICAgICAgICAgICAgaWYgKCBwcm9wYWcgJiYgdGhpcy5fZm9sbG93ZXJzLmxlbmd0aCApXG4gICAgICAgICAgICAgICAgdGhpcy5fZm9sbG93ZXJzLmZvckVhY2goKCBmb2xsb3dlciApID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSBmb2xsb3dlclsyXSA/IHRoaXMucmV0cmlldmUoZm9sbG93ZXJbMl0pIDogdGhpcy5kYXRhO1xuICAgICAgICAgICAgICAgICAgICBpZiAoICFkYXRhICkgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIHR5cGVvZiBmb2xsb3dlclswXSA9PSBcImZ1bmN0aW9uXCIgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb2xsb3dlclswXShkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY2IgJiYgaSsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9sbG93ZXJbMF0uc2V0U3RhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGZvbGxvd2VyWzFdKSA/IHsgW2ZvbGxvd2VyWzFdXTogZGF0YSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogZGF0YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vY2IgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICgpID0+ICghKC0taSkgJiYgY2IoKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLylcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vZWxzZVxuICAgICAgICAgICAgIXdhc1N0YWJsZSAmJiB0aGlzLmVtaXQoJ3N0YWJsZScsIHRoaXMuZGF0YSk7XG4gICAgICAgICAgICBwcm9wYWcgJiYgdGhpcy5lbWl0KCd1cGRhdGUnLCB0aGlzLmRhdGEpO1xuICAgICAgICAgICAgY2IgJiYgY2IoKVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgY2IgJiYgdGhpcy50aGVuKGNiKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIFxuICAgIHJldGFpbiggcmVhc29uICkge1xuICAgICAgICB0aGlzLl9fcmV0YWlucy5hbGwrKztcbiAgICAgICAgaWYgKCByZWFzb24gKSB7XG4gICAgICAgICAgICB0aGlzLl9fcmV0YWluc1tyZWFzb25dID0gdGhpcy5fX3JldGFpbnNbcmVhc29uXSB8fCAwO1xuICAgICAgICAgICAgdGhpcy5fX3JldGFpbnNbcmVhc29uXSsrO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGRpc3Bvc2UoIHJlYXNvbiApIHtcbiAgICAgICAgLy9jb25zb2xlLndhcm4oXCJkaXNwb3NlXCIsIHJlYXNvbiwgdGhpcy5fX3JldGFpbnMpO1xuICAgICAgICBpZiAoIHJlYXNvbiApIHtcbiAgICAgICAgICAgIGlmICggIXRoaXMuX19yZXRhaW5zW3JlYXNvbl0gKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkRpc3Bvc2UgbW9yZSB0aGFuIHJldGFpbmluZyA6IFwiICsgcmVhc29uKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5fX3JldGFpbnNbcmVhc29uXS0tO1xuICAgICAgICB9XG4gICAgICAgIGlmICggdGhpcy5fX3JldGFpbnMuYWxsID09IDAgKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRGlzcG9zZSBtb3JlIHRoYW4gcmV0YWluaW5nICFcIik7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9fcmV0YWlucy5hbGwtLTtcbiAgICAgICAgXG4gICAgICAgIGlmICggIXRoaXMuX19yZXRhaW5zLmFsbCApIHtcbiAgICAgICAgICAgIGlmICggdGhpcy5fcGVyc2lzdGVuY2VUbSApIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9kZXN0cm95VE0gJiYgY2xlYXJUaW1lb3V0KHRoaXMuX2Rlc3Ryb3lUTSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fZGVzdHJveVRNID0gc2V0VGltZW91dChcbiAgICAgICAgICAgICAgICAgICAgZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9kZXN0cm95VE0gPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50aGVuKHMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICF0aGlzLl9fcmV0YWlucy5hbGwgJiYgdGhpcy5kZXN0cm95KClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wZXJzaXN0ZW5jZVRtXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMudGhlbihzID0+ICghdGhpcy5fX3JldGFpbnMuYWxsICYmIHRoaXMuZGVzdHJveSgpKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgLy8gIGNvbnNvbGUubG9nKFwiZGVzdHJveVwiLCB0aGlzLl91aWQpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5lbWl0KCdkZXN0cm95JywgdGhpcyk7XG4gICAgICAgIGlmICggdGhpcy5fc3RhYmlsaXplciApXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5fc3RhYmlsaXplcik7XG4gICAgICAgIFxuICAgICAgICBpZiAoIHRoaXMuX2ZvbGxvd2Vycy5sZW5ndGggKVxuICAgICAgICAgICAgdGhpcy5fZm9sbG93ZXJzLmZvckVhY2goXG4gICAgICAgICAgICAgICAgKCBmb2xsb3dlciApID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCB0eXBlb2YgZm9sbG93ZXJbMF0gIT09IFwiZnVuY3Rpb25cIiApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICggZm9sbG93ZXJbMF0uc3RvcmVzIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgZm9sbG93ZXJbMF0uc3RvcmVzW2ZvbGxvd2VyWzFdXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgIHRoaXMuX2ZvbGxvd2Vycy5sZW5ndGggPSAwO1xuICAgICAgICB0aGlzLmNvbnN0cnVjdG9yLl9yZXYgID0gdGhpcy5yZXY7XG4gICAgICAgIHRoaXMuZGVhZCAgICAgICAgICAgICAgPSB0cnVlO1xuICAgICAgICB0aGlzLl9yZXZzICAgICAgICAgICAgID0gdGhpcy5kYXRhID0gdGhpcy5zdGF0ZSA9IHRoaXMuc2NvcGUgPSBudWxsO1xuICAgICAgICB0aGlzLnJlbW92ZUFsbExpc3RlbmVycygpO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvU3RvcmUuanMiLCIvKlxuICogQ29weXJpZ2h0IChjKSAgMjAxOCBXaXNlIFdpbGQgV2ViIC5cbiAqXG4gKiAgTUlUIExpY2Vuc2VcbiAqICBcbiAqICBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiAgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqICB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiAgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiAgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqICBcbiAqICBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcbiAqICBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICogIFxuICogIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqICBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqICBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqICBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiAgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqICBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuICogIFNPRlRXQVJFLlxuICogIFxuICogQGF1dGhvciA6IE5hdGhhbmFlbCBCcmF1blxuICogQGNvbnRhY3QgOiBjYWlwaWxhYnNAZ21haWwuY29tXG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGlzIGZyb20gJ2lzJ1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBTY29wZSBmcm9tICcuL1Njb3BlJztcblxuY29uc3QgU2ltcGxlT2JqZWN0UHJvdG8gPSAoe30pLmNvbnN0cnVjdG9yO1xuXG4vKipcbiAqIEluaGVyaXRhYmxlIFJlU2NvcGUgXCJIT0NcIiAoSGlnaCBPcmRlciBDb21wb25lbnQpXG4gKlxuICogQGNsYXNzIENvbXBvbmVudFxuICogQGRlc2MgUGFyZW50IFJlYWN0IENvbXBvbmVudCB3aXRoIHN0b3JlIGluamVjdGlvbiBpbiBpdHMgc3RhdGVcbiAqL1xuY2xhc3MgQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgY2hpbGRDb250ZXh0VHlwZXMgPSB7XG4gICAgICAgIHJlc2NvcGU6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgICAgICRzdG9yZXM6IFByb3BUeXBlcy5vYmplY3RcbiAgICB9XG4gICAgc3RhdGljIGNvbnRleHRUeXBlcyAgICAgID0ge1xuICAgICAgICByZXNjb3BlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgICAgICAkc3RvcmVzOiBQcm9wVHlwZXMub2JqZWN0XG4gICAgfVxuICAgIFxuICAgIGNvbnN0cnVjdG9yKCBwLCBjdHgsIHEgKSB7XG4gICAgICAgIHN1cGVyKHAsIGN0eCwgcSk7XG4gICAgICAgIGxldCBzY29wZSAgICA9XG4gICAgICAgICAgICAgICAgcC5fX3Njb3BlXG4gICAgICAgICAgICAgICAgfHwgY3R4LnJlc2NvcGU7XG4gICAgICAgIHRoaXMuJHNjb3BlICA9IHNjb3BlO1xuICAgICAgICB0aGlzLiRzdG9yZXMgPSB0aGlzLiRzY29wZSAmJiB0aGlzLiRzY29wZS5zdG9yZXM7XG4gICAgICAgIGlmICggdGhpcy5jb25zdHJ1Y3Rvci51c2UgKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUsXG4gICAgICAgICAgICAgICAgLi4uc2NvcGUubWFwKHRoaXMsIHRoaXMuY29uc3RydWN0b3IudXNlIHx8IFtdLCBmYWxzZSkvLyBkb24ndCBiaW5kXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoICF0aGlzLiRzY29wZSApXG4gICAgICAgICAgICB0aGlzLnJlbmRlciA9ICgpID0+IDxkaXY+Tm8gUmVzY29wZSBoZXJlIHsgc3VwZXIubmFtZSB9PC9kaXY+XG4gICAgfVxuICAgIFxuICAgIGRpc3BhdGNoKCAuLi5hcmd6ICkge1xuICAgICAgICB0aGlzLiRzY29wZSAmJiB0aGlzLiRzY29wZS5kaXNwYXRjaCguLi5hcmd6KVxuICAgIH1cbiAgICBcbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICAgIGlmICggdGhpcy5jb25zdHJ1Y3Rvci51c2UgKSB7XG4gICAgICAgICAgICB0aGlzLiRzY29wZS5iaW5kKHRoaXMsIHRoaXMuY29uc3RydWN0b3IudXNlIHx8IFtdLCBmYWxzZSlcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgdGhpcy5jb25zdHJ1Y3Rvci51c2VcbiAgICAgICAgJiYgdGhpcy4kc2NvcGUudW5CaW5kKHRoaXMsIHRoaXMuY29uc3RydWN0b3IudXNlIHx8IFtdKTtcbiAgICAgICAgdGhpcy4kc2NvcGUgPSBudWxsO1xuICAgIH1cbiAgICBcbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKCBucCwgbmMgKSB7XG4gICAgICAgIGxldCBuU2NvcGUgPSBucC5fX3Njb3BlXG4gICAgICAgICAgICB8fCBuYy5yZXNjb3BlIHx8IHRoaXMuJHNjb3BlO1xuICAgICAgICBcbiAgICAgICAgaWYgKCBuU2NvcGUgIT0gdGhpcy4kc2NvcGUgKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnN0cnVjdG9yLnVzZSAmJiB0aGlzLiRzY29wZS51bkJpbmQodGhpcywgdGhpcy5jb25zdHJ1Y3Rvci51c2UpO1xuICAgICAgICAgICAgdGhpcy4kc2NvcGUgID0gblNjb3BlO1xuICAgICAgICAgICAgdGhpcy4kc3RvcmVzID0gdGhpcy4kc2NvcGUuc3RvcmVzO1xuICAgICAgICAgICAgdGhpcy5jb25zdHJ1Y3Rvci51c2UgJiYgblNjb3BlLmJpbmQodGhpcywgdGhpcy5jb25zdHJ1Y3Rvci51c2UpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGdldENoaWxkQ29udGV4dCgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJlc2NvcGU6IHRoaXMuJHNjb3BlIHx8IHRoaXMuY29udGV4dC5yZXNjb3BlLFxuICAgICAgICAgICAgJHN0b3JlczogdGhpcy4kc2NvcGUuc3RvcmVzIHx8IHRoaXMuY29udGV4dC4kc3RvcmVzXG4gICAgICAgIH07XG4gICAgfVxuICAgIFxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuY2hpbGRyZW4gfHwgPGRpdi8+XG4gICAgfVxufTtcblxuLyoqXG4gKiBSZXR1cm4gYSBSZWFjdCBcIkhPQ1wiIChIaWdoIE9yZGVyIENvbXBvbmVudCkgdGhhdCA6XG4gKiAgLSBJbmhlcml0IEJhc2VDb21wb25lbnQsXG4gKiAgLSBJbmplY3QgJiBtYWludGFpbiB0aGUgc3RvcmVzIGluIEJhc2VDb21wb25lbnQ6OnVzZSBhbmQvb3IgKHVzZSkgaW4gdGhlIGluc3RhbmNlcyBzdGF0ZS5cbiAqICAtIFByb3BhZyAoc2NvcGUpIGluIHRoZSByZXR1cm5lZCBSZWFjdCBDb21wb25lbnQgY29udGV4dFxuICpcbiAqXG4gKiBAcGFyYW0gQmFzZUNvbXBvbmVudCB7UmVhY3QuQ29tcG9uZW50fSBCYXNlIFJlYWN0IENvbXBvbmVudCAoIGRlZmF1bHQgOiBSZWFjdC5Db21wb25lbnQgKVxuICogQHBhcmFtIHNjb3BlIHtSZVNjb3BlLlNjb3BlfGZ1bmN0aW9ufSB0aGUgcHJvcGFnYXRlZCBTY29wZSB3aGVyZSB0aGUgc3RvcmVzIHdpbGwgYmUgc2VhcmNoZWRcbiAqIEBwYXJhbSB1c2Uge2FycmF5fSB0aGUgbGlzdCBvZiBzdG9yZXMgaW5qZWN0ZWQgZnJvbSB0aGUgY3VycmVudCBzY29wZVxuICogQHBhcmFtIGFkZGl0aW9uYWxDb250ZXh0IHtPYmplY3R9IGNvbnRleHQgdG8gYmUgcHJvcGFnYXRlZFxuICogQHJldHVybnMge1JlU2NvcGVQcm92aWRlcn1cbiAqL1xuZnVuY3Rpb24gcmVTY29wZVN0YXRlKCAuLi5hcmd6ICkge1xuICAgIGxldCBCYXNlQ29tcG9uZW50ICAgICA9ICghYXJnelswXSB8fCBhcmd6WzBdLnByb3RvdHlwZSAmJiBhcmd6WzBdLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50KSAmJiBhcmd6LnNoaWZ0KCksXG4gICAgICAgIHNjb3BlICAgICAgICAgICAgID0gKCFhcmd6WzBdIHx8IGFyZ3pbMF0gaW5zdGFuY2VvZiBTY29wZSB8fCBpcy5mbihhcmd6WzBdKSkgJiYgYXJnei5zaGlmdCgpLFxuICAgICAgICB1c2UgICAgICAgICAgICAgICA9ICghYXJnelswXSB8fCBpcy5hcnJheShhcmd6WzBdKSkgJiYgYXJnei5zaGlmdCgpLFxuICAgICAgICBhZGRpdGlvbmFsQ29udGV4dCA9ICghYXJnelswXSB8fCBhcmd6WzBdIGluc3RhbmNlb2YgU2ltcGxlT2JqZWN0UHJvdG8pICYmIGFyZ3ouc2hpZnQoKTtcbiAgICBcbiAgICBpZiAoICEoQmFzZUNvbXBvbmVudCAmJiBCYXNlQ29tcG9uZW50LnByb3RvdHlwZSAmJiBCYXNlQ29tcG9uZW50LnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50KSApIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICggQmFzZUNvbXBvbmVudCApIHtcbiAgICAgICAgICAgIHJldHVybiByZVNjb3BlU3RhdGUoQmFzZUNvbXBvbmVudCwgc2NvcGUsIHVzZSwgYWRkaXRpb25hbENvbnRleHQpXG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgdXNlICAgICAgICAgICAgICAgPSBbLi4uKEJhc2VDb21wb25lbnQudXNlIHx8IFtdKSwgLi4uKHVzZSB8fCBbXSldO1xuICAgIGFkZGl0aW9uYWxDb250ZXh0ID0gYWRkaXRpb25hbENvbnRleHQgJiYgT2JqZWN0LmtleXMoYWRkaXRpb25hbENvbnRleHQpLnJlZHVjZSgoIGgsIGsgKSA9PiAoaFtrXSA9IFByb3BUeXBlcy5hbnksIGgpLCB7fSkgfHwge307XG4gICAgXG4gICAgY2xhc3MgUmVTY29wZVByb3ZpZGVyIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gICAgICAgIHN0YXRpYyBjaGlsZENvbnRleHRUeXBlcyA9IHtcbiAgICAgICAgICAgIC4uLihCYXNlQ29tcG9uZW50LmNoaWxkQ29udGV4dFR5cGVzIHx8IHt9KSxcbiAgICAgICAgICAgIC4uLihhZGRpdGlvbmFsQ29udGV4dCksXG4gICAgICAgICAgICByZXNjb3BlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgICAgICAgICAgJHN0b3JlczogUHJvcFR5cGVzLm9iamVjdFxuICAgICAgICB9XG4gICAgICAgIHN0YXRpYyBjb250ZXh0VHlwZXMgICAgICA9IHtcbiAgICAgICAgICAgIC4uLihCYXNlQ29tcG9uZW50LmNvbnRleHRUeXBlcyB8fCB7fSksXG4gICAgICAgICAgICAuLi4oYWRkaXRpb25hbENvbnRleHQpLFxuICAgICAgICAgICAgcmVzY29wZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICAgICAgICAgICRzdG9yZXM6IFByb3BUeXBlcy5vYmplY3RcbiAgICAgICAgfVxuICAgICAgICBzdGF0aWMgZGVmYXVsdFByb3BzICAgICAgPSB7XG4gICAgICAgICAgICAuLi4oQmFzZUNvbXBvbmVudC5kZWZhdWx0UHJvcHMgfHwge30pLFxuICAgICAgICB9XG4gICAgICAgIHN0YXRpYyBkaXNwbGF5TmFtZSAgICAgICA9IFwic3RhdGVTY29wZWQoXCIgKyAoQmFzZUNvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBCYXNlQ29tcG9uZW50Lm5hbWUpICsgXCIpXCI7XG4gICAgICAgIFxuICAgICAgICBjb25zdHJ1Y3RvciggcCwgY3R4LCBxICkge1xuICAgICAgICAgICAgc3VwZXIocCwgY3R4LCBxKTtcbiAgICAgICAgICAgIHRoaXMuJHNjb3BlID1cbiAgICAgICAgICAgICAgICBwLl9fc2NvcGVcbiAgICAgICAgICAgICAgICB8fCBpcy5mbihzY29wZSkgJiYgc2NvcGUodGhpcywgcCwgY3R4KSB8fCBzY29wZVxuICAgICAgICAgICAgICAgIHx8IGN0eC5yZXNjb3BlO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpcy5mbihzY29wZSlcbiAgICAgICAgICAgICYmIHRoaXMuJHNjb3BlLnJldGFpbigpXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMuJHN0b3JlcyA9IHRoaXMuJHNjb3BlICYmIHRoaXMuJHNjb3BlLnN0b3JlcztcbiAgICAgICAgICAgIGlmICggdGhpcy4kc2NvcGUgJiYgdXNlLmxlbmd0aCApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgICAgICAgICAuLi50aGlzLnN0YXRlLFxuICAgICAgICAgICAgICAgICAgICAuLi50aGlzLiRzY29wZS5tYXAodGhpcywgdXNlLCBmYWxzZSkvLyBkb24ndCBiaW5kIG5vdyBkdWUgdG8gU1NSXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoICF0aGlzLiRzY29wZSApXG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXIgPSAoKSA9PiA8ZGl2Pk5vIFJlc2NvcGUgaGVyZSB7IEJhc2VDb21wb25lbnQubmFtZSB9PC9kaXY+XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICRkaXNwYXRjaCggLi4uYXJneiApIHtcbiAgICAgICAgICAgIHRoaXMuJHNjb3BlLmRpc3BhdGNoKC4uLmFyZ3opXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgICAgICAgIGlmICggdXNlLmxlbmd0aCApIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRzY29wZS5iaW5kKHRoaXMsIHVzZSwgZmFsc2UpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzdXBlci5jb21wb25lbnRXaWxsTW91bnQgJiYgc3VwZXIuY29tcG9uZW50V2lsbE1vdW50KClcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgICAgICBzdXBlci5jb21wb25lbnRXaWxsVW5tb3VudCAmJiBzdXBlci5jb21wb25lbnRXaWxsVW5tb3VudCgpXG4gICAgICAgICAgICB1c2UubGVuZ3RoXG4gICAgICAgICAgICAmJiB0aGlzLiRzY29wZS51bkJpbmQodGhpcywgdXNlKTtcbiAgICAgICAgICAgIGlzLmZuKHNjb3BlKVxuICAgICAgICAgICAgJiYgdGhpcy4kc2NvcGUuZGlzcG9zZSgpO1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuJHN0b3JlcztcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLiRzY29wZTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyggbnAsIG5jICkge1xuICAgICAgICAgICAgbGV0IG5TY29wZSA9IG5wLl9fc2NvcGVcbiAgICAgICAgICAgICAgICB8fCBzY29wZSAmJiB0aGlzLiRzY29wZVxuICAgICAgICAgICAgICAgIHx8IG5jLnJlc2NvcGVcbiAgICAgICAgICAgICAgICB8fCB0aGlzLiRzY29wZTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKCBuU2NvcGUgIT0gdGhpcy4kc2NvcGUgKSB7XG4gICAgICAgICAgICAgICAgdXNlLmxlbmd0aCAmJiB0aGlzLiRzY29wZS51bkJpbmQodGhpcywgdXNlKTtcbiAgICAgICAgICAgICAgICB0aGlzLiRzY29wZSAgPSBuU2NvcGU7XG4gICAgICAgICAgICAgICAgdGhpcy4kc3RvcmVzID0gdGhpcy4kc2NvcGUuc3RvcmVzO1xuICAgICAgICAgICAgICAgIHVzZS5sZW5ndGggJiYgblNjb3BlLmJpbmQodGhpcywgdXNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN1cGVyLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgJiYgc3VwZXIuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhucCwgbmMpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBnZXRDaGlsZENvbnRleHQoKSB7XG4gICAgICAgICAgICBsZXQgY3R4ID0gc3VwZXIuZ2V0Q2hpbGRDb250ZXh0ICYmIHN1cGVyLmdldENoaWxkQ29udGV4dCgpIHx8IHt9O1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5jdHgsXG4gICAgICAgICAgICAgICAgcmVzY29wZTogdGhpcy4kc2NvcGUgfHwgdGhpcy5jb250ZXh0LnJlc2NvcGUsXG4gICAgICAgICAgICAgICAgJHN0b3JlczogdGhpcy4kc2NvcGUuc3RvcmVzIHx8IHRoaXMuY29udGV4dC4kc3RvcmVzXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIHJldHVybiBSZVNjb3BlUHJvdmlkZXI7XG59XG5cbi8qKlxuICogUmV0dXJuIGEgUmVhY3QgXCJIT0NcIiAoSGlnaCBPcmRlciBDb21wb25lbnQpIHRoYXQgOlxuICogIC0gSW5qZWN0ICYgbWFpbnRhaW4gdGhlIHN0b3JlcyBsaXN0ZWQgYmFzZUNvbXBvbmVudDo6dXNlIGFuZC9vciAodXNlKSBpbiB0aGUgaW5zdGFuY2VzIHByb3BzLlxuICogIC0gUHJvcGFnIChzY29wZSkgaW4gdGhlIHJldHVybmVkIFJlYWN0IENvbXBvbmVudCBjb250ZXh0XG4gKlxuICogQHBhcmFtIEJhc2VDb21wb25lbnQge1JlYWN0LkNvbXBvbmVudH0gQmFzZSBSZWFjdCBDb21wb25lbnQgKCBkZWZhdWx0IDogUmVhY3QuQ29tcG9uZW50IClcbiAqIEBwYXJhbSBzY29wZSB7UmVTY29wZS5TY29wZXxmdW5jdGlvbn0gdGhlIHByb3BhZ2F0ZWQgU2NvcGUgd2hlcmUgdGhlIHN0b3JlcyB3aWxsIGJlIHNlYXJjaGVkICggZGVmYXVsdCA6IHRoZSBkZWZhdWx0XG4gKiAgICAgUmVTY29wZTo6U2NvcGU6OnNjb3Blcy5zdGF0aWMgc2NvcGUgKVxuICogQHBhcmFtIHVzZSB7YXJyYXl9IHRoZSBsaXN0IG9mIHN0b3JlcyB0byBpbmplY3QgZnJvbSB0aGUgY3VycmVudCBzY29wZVxuICogQHBhcmFtIGFkZGl0aW9uYWxDb250ZXh0IHtPYmplY3R9IGNvbnRleHQgdG8gYmUgcHJvcGFnYXRlZFxuICogQHJldHVybnMge1JlU2NvcGVQcm92aWRlcn1cbiAqL1xuZnVuY3Rpb24gcmVTY29wZVByb3BzKCAuLi5hcmd6ICkge1xuICAgIGxldCBCYXNlQ29tcG9uZW50ICAgICA9ICghYXJnelswXSB8fCBhcmd6WzBdLnByb3RvdHlwZSAmJiBhcmd6WzBdLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50KSAmJiBhcmd6LnNoaWZ0KCksXG4gICAgICAgIHNjb3BlICAgICAgICAgICAgID0gKCFhcmd6WzBdIHx8IGFyZ3pbMF0gaW5zdGFuY2VvZiBTY29wZSB8fCBpcy5mbihhcmd6WzBdKSkgJiYgYXJnei5zaGlmdCgpLFxuICAgICAgICB1c2UgICAgICAgICAgICAgICA9ICghYXJnelswXSB8fCBpcy5hcnJheShhcmd6WzBdKSkgJiYgYXJnei5zaGlmdCgpLFxuICAgICAgICBhZGRpdGlvbmFsQ29udGV4dCA9ICghYXJnelswXSB8fCBhcmd6WzBdIGluc3RhbmNlb2YgU2ltcGxlT2JqZWN0UHJvdG8pICYmIGFyZ3ouc2hpZnQoKTtcbiAgICBcbiAgICBpZiAoICEoQmFzZUNvbXBvbmVudCAmJiBCYXNlQ29tcG9uZW50LnByb3RvdHlwZSAmJiBCYXNlQ29tcG9uZW50LnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50KSApIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICggQmFzZUNvbXBvbmVudCApIHtcbiAgICAgICAgICAgIHJldHVybiByZVNjb3BlUHJvcHMoQmFzZUNvbXBvbmVudCwgc2NvcGUsIHVzZSwgYWRkaXRpb25hbENvbnRleHQpXG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgdXNlICAgICAgICAgICAgICAgPSBbLi4uKEJhc2VDb21wb25lbnQudXNlIHx8IFtdKSwgLi4uKHVzZSB8fCBbXSldO1xuICAgIGFkZGl0aW9uYWxDb250ZXh0ID0gYWRkaXRpb25hbENvbnRleHQgJiYgT2JqZWN0LmtleXMoYWRkaXRpb25hbENvbnRleHQpLnJlZHVjZSgoIGgsIGsgKSA9PiAoaFtrXSA9IFByb3BUeXBlcy5hbnksIGgpLCB7fSkgfHwge307XG4gICAgXG4gICAgcmV0dXJuIHJlU2NvcGVTdGF0ZShjbGFzcyBSZVNjb3BlUHJvcHNQcm92aWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgICAgIHN0YXRpYyBjaGlsZENvbnRleHRUeXBlcyA9IHtcbiAgICAgICAgICAgIC4uLihCYXNlQ29tcG9uZW50LmNvbnRleHRUeXBlcyB8fCB7fSksXG4gICAgICAgICAgICAuLi4oYWRkaXRpb25hbENvbnRleHQpLFxuICAgICAgICAgICAgcmVzY29wZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICAgICAgICAgICRzdG9yZXM6IFByb3BUeXBlcy5vYmplY3RcbiAgICAgICAgfTtcbiAgICAgICAgc3RhdGljIGNvbnRleHRUeXBlcyAgICAgID0ge1xuICAgICAgICAgICAgLi4uKEJhc2VDb21wb25lbnQuY29udGV4dFR5cGVzIHx8IHt9KSxcbiAgICAgICAgICAgIC4uLihhZGRpdGlvbmFsQ29udGV4dCksXG4gICAgICAgICAgICByZXNjb3BlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgICAgICAgICAgJHN0b3JlczogUHJvcFR5cGVzLm9iamVjdFxuICAgICAgICB9O1xuICAgICAgICBzdGF0aWMgZGlzcGxheU5hbWUgICAgICAgPSBcInByb3BzU2NvcGVkKFwiICsgKEJhc2VDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQmFzZUNvbXBvbmVudC5uYW1lKSArIFwiKVwiO1xuICAgICAgICBcbiAgICAgICAgZ2V0Q2hpbGRDb250ZXh0KCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29udGV4dDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmVuZGVyKCkge1xuICAgICAgICAgICAgcmV0dXJuIDxCYXNlQ29tcG9uZW50IHsgLi4udGhpcy5wcm9wcyB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyAuLi50aGlzLnN0YXRlIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZGlzcGF0Y2g9eyAoIC4uLmFyZ3ogKSA9PiB0aGlzLiRkaXNwYXRjaCguLi5hcmd6KSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHN0b3Jlcz17IHRoaXMuJHN0b3JlcyB9Lz5cbiAgICAgICAgfVxuICAgIH0sIHNjb3BlLCB1c2UpO1xufVxuXG5leHBvcnQge1xuICAgIENvbXBvbmVudCBhcyBkZWZhdWx0LFxuICAgIENvbXBvbmVudCxcbiAgICByZVNjb3BlUHJvcHMsXG4gICAgcmVTY29wZVByb3BzIGFzIHJlc2NvcGVQcm9wcyxcbiAgICByZVNjb3BlU3RhdGUsXG4gICAgcmVTY29wZVN0YXRlIGFzIHJlc2NvcGVTdGF0ZVxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvUmVhY3RUb29scy5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVhY3RcIlxuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicHJvcC10eXBlc1wiXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=