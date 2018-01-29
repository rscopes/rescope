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
	
	var _ReactTools = __webpack_require__(7);
	
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
	            parent = _ref2.parent,
	            key = _ref2.key,
	            id = _ref2.id,
	            state = _ref2.state,
	            data = _ref2.data,
	            name = _ref2.name,
	            _ref2$incrementId = _ref2.incrementId,
	            incrementId = _ref2$incrementId === undefined ? !!key : _ref2$incrementId,
	            defaultMaxListeners = _ref2.defaultMaxListeners,
	            persistenceTm = _ref2.persistenceTm,
	            autoDestroy = _ref2.autoDestroy,
	            rootEmitter = _ref2.rootEmitter;
	
	        _classCallCheck(this, Scope);
	
	        var _this = _possibleConstructorReturn(this, (Scope.__proto__ || Object.getPrototypeOf(Scope)).call(this));
	
	        _this._maxListeners = defaultMaxListeners || _this.constructor.defaultMaxListeners;
	
	        id = id || key && (parent && parent._id || '') + '::' + key;
	
	        _this._isLocalId = !id;
	
	        id = id || "_____" + shortid.generate();
	
	        if (openScopes[id] && !incrementId) {
	            var _ret;
	
	            _this._id = id;
	            openScopes[id].register(storesMap);
	            return _ret = openScopes[id], _possibleConstructorReturn(_this, _ret);
	        } else if (openScopes[id] && incrementId) {
	            var i = -1;
	            while (openScopes[id + '[' + ++i + ']']) {}
	            id = id + '[' + i + ']';
	        }
	
	        _this._id = id;
	        openScopes[id] = _this;
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
	        value: function mount(storesList, snapshot, state, data) {
	            var _this2 = this;
	
	            if (is.array(storesList)) {
	                storesList.forEach(function (k) {
	                    return _this2._mount(k, snapshot, state, data);
	                });
	            } else {
	                this._mount.apply(this, arguments);
	            }
	            return this;
	        }
	    }, {
	        key: '_mount',
	        value: function _mount(id, snapshot, state, data) {
	            if (typeof id !== 'string') {
	                this.register(_defineProperty({}, id.name, id.store));
	                id = id.name;
	            }
	
	            if (!this.__scope[id]) {
	                var _parent;
	
	                //ask mixed || parent
	                if (this.__mixed.reduce(function (mounted, ctx) {
	                    return mounted || ctx._mount(id, snapshot, state, data);
	                }, false) || !this.parent) return;
	                return (_parent = this.parent)._mount.apply(_parent, arguments);
	            } else {
	                var store = this.__scope[id],
	                    ctx = void 0;
	                if (is.fn(store)) {
	                    this.__scope[id] = new store(this, { snapshot: snapshot, name: id, state: state, data: data });
	                } else if (snapshot) store.restore(snapshot);else {
	                    if (state !== undefined && data === undefined) store.setState(state);else if (state !== undefined) store.state = state;
	
	                    if (data !== undefined) store.push(data);
	                }
	                this._watchStore(id);
	            }
	
	            return this.__scope[id];
	        }
	    }, {
	        key: '_watchStore',
	        value: function _watchStore(id, state, data) {
	            var _this3 = this;
	
	            //if ( !this.__scope[id] ) {//ask mixed || parent
	            //    if ( this.__mixed.reduce(( mounted, ctx ) => (mounted || ctx._watchStore(id, state, data)), false) ||
	            //        !this.parent )
	            //        return;
	            //    return this.parent._watchStore(...arguments);
	            //}
	            if (!this.__listening[id] && !is.fn(this.__scope[id])) {
	                !this.__scope[id]._autoDestroy && this.__scope[id].retain("scoped");
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
	                        return _this6._mount(id, null, v);
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
	    }, {
	        key: '_getAllChilds',
	        value: function _getAllChilds() {
	            var childs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	
	            childs.push.apply(childs, _toConsumableArray(this._childScopes));
	            this._childScopes.forEach(function (ctx) {
	                ctx._getAllChilds(childs);
	            });
	            return childs;
	        }
	
	        /**
	         *
	         * @param withChilds
	         * @param __withMixed
	         * @param _output
	         * @returns {*|{state: {}, data: {}}}
	         */
	
	    }, {
	        key: 'serialize',
	        value: function serialize() {
	            var output = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	            var ctx = this.__scope;
	            output[this._id] = {};
	
	            Object.keys(ctx).forEach(function (id) {
	                if (is.fn(ctx[id])) return;
	
	                ctx[id].serialize(output);
	            });
	
	            this._childScopes.forEach(function (ctx) {
	                !ctx._isLocalId && ctx.serialize(output);
	            });
	
	            this.__mixed.forEach(function (ctx) {
	                !ctx._isLocalId && ctx.serialize(output);
	            });
	
	            return output;
	        }
	    }, {
	        key: 'restore',
	        value: function restore(snapshot, force) {
	            var _this10 = this;
	
	            var ctx = this.__scope;
	
	            snapshot[this._id] && Object.keys(ctx).forEach(function (name) {
	                var snap = snapshot[_this10._id + '/' + name];
	
	                if (snap) {
	
	                    if (force && !is.fn(ctx[name])) ctx[name].destroy();
	
	                    _this10.mount(name, snapshot); // quiet
	                }
	            });
	
	            this.__mixed.forEach(function (ctx) {
	                !ctx._isLocalId && ctx.restore(snapshot, force);
	            });
	
	            this._childScopes.forEach(function (ctx) {
	                !ctx._isLocalId && ctx.restore(snapshot, force);
	            });
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
	
	            this.__mixed.forEach(function (ctx) {
	                return ctx.dispatch(action, data);
	            });
	            this.parent && this.parent.dispatch(action, data);
	            Object.keys(this.__scope).forEach(function (id) {
	                if (!is.fn(_this11.__scope[id])) _this11.__scope[id].trigger(action, data);
	            });
	
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
	
	            if (this._followers.length) this._followers.forEach(function (_ref3) {
	                var obj = _ref3[0],
	                    key = _ref3[1],
	                    as = _ref3[2],
	                    lastRevs = _ref3[3],
	                    remaps = _ref3[3];
	
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
	
	            if (!this._isLocalId) delete openScopes[this._id];
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
	                    !ctx[key]._autoDestroy && ctx[key].dispose("scoped");
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
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _class, _temp, _class2, _temp2;
	
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
	    TaskSequencer = __webpack_require__(6),
	    shortid = __webpack_require__(4),
	    objProto = Object.getPrototypeOf({});
	
	/**
	 * @class Store
	 */
	var Store = (_temp = _class = function (_EventEmitter) {
	    _inherits(Store, _EventEmitter);
	
	    _createClass(Store, null, [{
	        key: 'as',
	
	
	        /**
	         * get a Builder-key pair for Store::map
	         * @param {string} name
	         * @returns {{store: Store, name: *}}
	         */
	        // overridable list of store that will allow push if updated
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
	        // default state
	        /**
	         * if retain goes to 0 :
	         * false to not destroy,
	         * 0 to sync auto destroy
	         * Ms to autodestroy after tm ms if no retain has been called
	         * @type {boolean|Int}
	         */
	        // overridable list of source stores
	
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
	                var _component$_sources;
	
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
	
	                // give initial store weight basing sources
	                (_component$_sources = component._sources).push.apply(_component$_sources, _toConsumableArray(scope.stores[name]._sources));
	
	                targetRevs[alias] = targetRevs[alias] || true;
	                !targetScope[name] && (targetScope[name] = scope.stores[name]);
	                if (scope.stores[name].hasOwnProperty('data')) initialOutputs[name] = scope.data[name];
	                return true;
	            });
	
	            // ...
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
	
	        /**
	         * Constructor, will build a rescope store
	         *
	         * (scope, {require,use,apply,state, data})
	         * (scope)
	         *
	         * @param scope {object} scope where to find the other stores (default : static staticScope )
	         * @param keys {Array} (passed to Store::map) Ex : ["session", "otherNamedStore:key", otherStore.as("otherKey")]
	         */
	
	    }]);
	
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
	
	        // autoDestroyTm
	        _this._autoDestroy = !!_this._persistenceTm;
	        _this._persistenceTm = cfg.persistenceTm || _static.persistenceTm || (cfg.autoDestroy || _static.autoDestroy) && 5;
	        //
	        //if ( is.string(argz[0]) ) {
	        //    if ( scope.__scope[name] )
	        //        console.warn("ReScope: Overwriting an existing static named store ( %s ) !!", name);
	        //    scope.__scope[name] = this;
	        //}
	
	        if (cfg && cfg.on) {
	            _this.on(cfg.on);
	        }
	
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
	        _this._sources = [name];
	
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
	
	        if (apply) _this.apply = apply;
	
	        if (cfg.snapshot && cfg.snapshot[_this.scopeObj._id + '/' + name]) {
	            _this.restore(cfg.snapshot);
	            _this._stable = true;
	            scope.bind(_this, _this._use, false);
	        } else {
	
	            if (_static.data !== undefined) _this.data = _extends({}, _static.data);
	            if (cfg.hasOwnProperty("data") && cfg.data !== undefined) _this.data = cfg.data;
	            if (cfg.hasOwnProperty("state") && cfg.state !== undefined) initialState = _extends({}, initialState, cfg.state);
	
	            if (initialState || _this._use.length) {
	                // sync apply
	                _this.state = _extends({}, initialState || {}, scope.map(_this, _this._use));
	                if (_this.shouldApply(_this.state) && _this.data === undefined) {
	                    _this.data = _this.apply(_this.data, _this.state, _this.state);
	                    applied = true;
	                }
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
	     * @deprecated
	     * @returns {*}
	     */
	
	
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
	            cb && this.once('stable', cb);
	            this._stable && this.emit('unstable', this.state, this.data);
	
	            this._stable = false;
	
	            if (this._stabilizer) return; //clearTimeout(this._stabilizer);
	
	            this._stabilizer = TaskSequencer.pushTask(this, 'push');
	            //this._stabilizer = setTimeout(
	            //    this.push.bind(
	            //        this,
	            //        null,
	            //        () => {//@todo
	            //
	            //            let stable   = this._stable;
	            //            this._stable = true;
	            //            !stable && this.emit('stable', this.state, this.data);
	            //            this._stabilizer = null;
	            //            // this.release();
	            //        }
	            //    ));
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
	            var actions = this.constructor.actions;
	
	            if (actions && actions[action]) {
	                var _actions$action;
	
	                for (var _len2 = arguments.length, argz = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	                    argz[_key2 - 1] = arguments[_key2];
	                }
	
	                var ns = (_actions$action = actions[action]).call.apply(_actions$action, [this].concat(argz));
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
	            var _this3 = this;
	
	            var initialOutputs = this.scopeObj.map(this, stores);
	            if (doWait) {
	                this.wait();
	                stores.forEach(function (s) {
	                    return _this3.scope[s] && _this3.wait(_this3.scope[s]);
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
	
	            this._stabilizer = null;
	            this.state = nextState;
	            this._changesSW = {};
	            if (!force && !this.hasDataChange(nextDatas)) {
	                cb && cb();
	                if (!this.__locks.all) {
	                    var stable = this._stable;
	                    this._stable = true;
	                    !stable && this.emit('stable', this.state, this.data);
	                    this._stabilizer = null;
	                }
	                return false;
	            }
	
	            //
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
	            var _this4 = this;
	
	            if (!is.string(lists) && lists) Object.keys(lists).forEach(function (k) {
	                return _get(Store.prototype.__proto__ || Object.getPrototypeOf(Store.prototype), 'on', _this4).call(_this4, k, lists[k]);
	            });else _get(Store.prototype.__proto__ || Object.getPrototypeOf(Store.prototype), 'on', this).apply(this, arguments);
	        }
	    }, {
	        key: 'removeListener',
	        value: function removeListener(lists) {
	            var _this5 = this;
	
	            if (!is.string(lists) && lists) Object.keys(lists).forEach(function (k) {
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
	
	            var scope = this.scopeObj,
	                _static = this.constructor;
	            if (_static.use) {
	                //todo unlink
	                this.pull(_static.use, false, from);
	            }
	
	            if (this._require) {
	                this._require.forEach(function (store) {
	                    return _this6.wait(scope.__scope[store]);
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
	         * is stable
	         * @returns bool
	         */
	
	    }, {
	        key: 'serialize',
	        value: function serialize() {
	            var _this7 = this;
	
	            var output = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	            var completeState = arguments[1];
	
	            var refs = this._use.reduce(function (map, key) {
	                //todo
	                var name = void 0,
	                    alias = void 0,
	                    path = void 0,
	                    store = void 0;
	                if (key.store && key.name) {
	                    alias = name = key.name;
	                } else if (is.fn(key)) {
	                    name = alias = key.name || key.defaultName;
	                } else {
	                    key = key.match(/([\w_]+)((?:\.[\w_]+)*)(?:\:([\w_]+))?/);
	                    name = key[1];
	                    path = key[2] && key[2].substr(1);
	                    alias = key[3] || path && path.match(/([^\.]*)$/)[0] || key[1];
	                }
	
	                if (!_this7.scopeObj.stores[name].scopeObj._isLocalId) map[alias] = _this7.scopeObj.stores[name].scopeObj._id + '/' + name;
	
	                return map;
	            }, {}) || {};
	            output[this.scopeObj._id + '/' + this.name] = {
	                state: completeState ? _extends({}, this.state) : Object.keys(this.state).reduce(function (h, k) {
	                    return !refs[k] && (h[k] = _this7.state[k]), h;
	                }, {}),
	                data: this.data,
	                refs: refs
	            };
	            return output;
	        }
	
	        /**
	         * is stable
	         * @returns bool
	         */
	
	    }, {
	        key: 'restore',
	        value: function restore(snapshot) {
	            var snap = snapshot[this.scopeObj._id + '/' + this.name];
	            if (snap) {
	                this.state = snap.state;
	                Object.keys(snap.refs).forEach(function (key) {
	                    //todo
	                    if (snapshot[snap.refs[key]]) snap.state[key] = snapshot[snap.refs[key]].data;else console.warn('not found : ', key, snap.refs[key]);
	                });
	
	                this.data = snap.data;
	            }
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
	            var _static = this.constructor,
	                me = this;
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
	                if (propag && this._followers.length) this._followers.forEach(function propag(follower) {
	                    var data = follower[2] ? me.retrieve(follower[2]) : me.data;
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
	            var _this9 = this;
	
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
	                        _this9._destroyTM = null;
	                        _this9.then(function (s) {
	                            !_this9.__retains.all && _this9.destroy();
	                        });
	                    }, this._persistenceTm);
	                } else {
	                    this.then(function (s) {
	                        return !_this9.__retains.all && _this9.destroy();
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
	    }]);
	
	    return Store;
	}(EventEmitter), _class.use = [], _class.staticScope = new Scope({}, { id: "static" }), _class.state = undefined, _class.persistenceTm = false, _temp);
	
	
	Store.Seed = (_temp2 = _class2 = function (_Store) {
	    _inherits(SeedStore, _Store);
	
	    function SeedStore() {
	        _classCallCheck(this, SeedStore);
	
	        return _possibleConstructorReturn(this, (SeedStore.__proto__ || Object.getPrototypeOf(SeedStore)).apply(this, arguments));
	    }
	
	    return SeedStore;
	}(Store), _class2.SEED = true, _temp2);
	
	exports.default = Store;
	module.exports = exports['default'];

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
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
	 * Minimal push sequencer, apply stores specific task in the right order (root stores first)
	 */
	var taskQueue = [],
	    curWeight = 0,
	    maxWeight = 0,
	    minWeight = 0,
	    taskCount = 0,
	
	//deSyncSteps = 1000,
	isRunning = void 0,
	    runningTm = void 0;
	
	function runNow() {
	    if (!runningTm) {
	        run();
	    }
	}
	
	function run(hazFail, failedTask) {
	    var task = void 0,
	        fail = true;
	
	    if (hazFail) {
	        console.error("ReScope : A task has failed !!", failedTask);
	    }
	
	    runningTm = setTimeout(function () {
	        return run(fail, task);
	    });
	
	    while (taskCount) {
	
	        // try for the current weight
	        while (!(taskQueue[curWeight] && taskQueue[curWeight].length)) {
	            curWeight++;
	        }taskCount--;
	        task = taskQueue[curWeight].shift();
	        //console.log("Task : ", task[1], " on ", task[0].name);
	        task[0][task[1]].apply(task[0], task[2]);
	    }
	    fail = task = undefined;
	
	    if (!taskCount) {
	        clearTimeout(runningTm);
	        runningTm = null;
	    }
	}
	
	exports.default = {
	    pushTask: function pushTask(obj, fn, argz) {
	        var weight = obj._sources && obj._sources.length || 1,
	            stack = taskQueue[weight] = taskQueue[weight] || [];
	
	        maxWeight = Math.max(maxWeight, weight);
	        curWeight = Math.min(curWeight, weight);
	        taskCount++;
	
	        //console.log("Push Task : ", fn, " on ", obj.name, weight);
	        stack.push([obj, fn, argz]);
	        setTimeout(runNow);
	        return stack.length;
	    }
	};
	module.exports = exports["default"];

/***/ }),
/* 7 */
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
	
	var _react = __webpack_require__(8);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _is = __webpack_require__(2);
	
	var _is2 = _interopRequireDefault(_is);
	
	var _propTypes = __webpack_require__(9);
	
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
	                    'No ReScope context in ',
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
/* 8 */
/***/ (function(module, exports) {

	module.exports = require("react");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	module.exports = require("prop-types");

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNzdjYmZmYWQ3YmI5NGYxNzg0ZjUiLCJ3ZWJwYWNrOi8vLy4vc3JjL1JlU2NvcGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Njb3BlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImlzXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL0VtaXR0ZXIuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic2hvcnRpZFwiIiwid2VicGFjazovLy8uL3NyYy9TdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvVGFza1NlcXVlbmNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvUmVhY3RUb29scy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiJdLCJuYW1lcyI6WyJSVG9vbHMiLCJTdG9yZSIsIkNvbnRleHQiLCJTY29wZSIsIkNvbXBvbmVudCIsInJlU2NvcGVQcm9wcyIsInJlU2NvcGVTdGF0ZSIsIndpdGhTY29wZSIsImlzIiwicmVxdWlyZSIsIkV2ZW50RW1pdHRlciIsInNob3J0aWQiLCJfX3Byb3RvX19wdXNoIiwidGFyZ2V0IiwiaWQiLCJwYXJlbnQiLCJmbiIsInByb3RvdHlwZSIsIm9wZW5TY29wZXMiLCJzY29wZXMiLCJza2V5IiwiYXJyYXkiLCJzb3J0IiwiYSIsImIiLCJmaXJzdG5hbWUiLCJqb2luIiwic3RvcmVzTWFwIiwia2V5Iiwic3RhdGUiLCJkYXRhIiwibmFtZSIsImluY3JlbWVudElkIiwiZGVmYXVsdE1heExpc3RlbmVycyIsInBlcnNpc3RlbmNlVG0iLCJhdXRvRGVzdHJveSIsInJvb3RFbWl0dGVyIiwiX21heExpc3RlbmVycyIsImNvbnN0cnVjdG9yIiwiX2lkIiwiX2lzTG9jYWxJZCIsImdlbmVyYXRlIiwicmVnaXN0ZXIiLCJpIiwiX3BlcnNpc3RlbmNlVG0iLCJzdG9yZXMiLCJkZWFkIiwiRXJyb3IiLCJzb3VyY2VzIiwiX2NoaWxkU2NvcGVzIiwiX2NoaWxkU2NvcGVzTGlzdCIsIl91blN0YWJsZUNoaWxkcyIsIl9fcmV0YWlucyIsImFsbCIsIl9fbG9ja3MiLCJfX2xpc3RlbmluZyIsIl9fc2NvcGUiLCJfX21peGVkIiwiX19taXhlZExpc3QiLCJfZm9sbG93ZXJzIiwicmV0YWluIiwiX3N0YWJsZSIsIndhaXQiLCJvbiIsIl9fcGFyZW50TGlzdCIsInJlbGVhc2UiLCJfcHJvcGFnIiwiX2FkZENoaWxkIiwic2V0VGltZW91dCIsImRpc3Bvc2UiLCJzdG9yZXNMaXN0Iiwic25hcHNob3QiLCJmb3JFYWNoIiwiX21vdW50IiwiayIsImFyZ3VtZW50cyIsInN0b3JlIiwicmVkdWNlIiwibW91bnRlZCIsImN0eCIsInJlc3RvcmUiLCJ1bmRlZmluZWQiLCJzZXRTdGF0ZSIsInB1c2giLCJfd2F0Y2hTdG9yZSIsIl9hdXRvRGVzdHJveSIsImlzU3RhYmxlIiwicHJvcGFnIiwidGFyZ2V0Q3R4IiwibGlzdHMiLCJyZWxpbmsiLCJPYmplY3QiLCJrZXlzIiwic2luZ2xldG9uIiwic3JjQ3R4IiwiZXh0ZXJuYWwiLCJmb3JjZSIsImxjdHgiLCJfc3RvcmVzIiwiY29uc29sZSIsImluZm8iLCJfX3Byb3RvX18iLCJkZWZpbmVQcm9wZXJ0eSIsImdldCIsIl9zdGF0ZSIsInNldCIsInYiLCJfZGF0YSIsIm9iaiIsImFzIiwic2V0SW5pdGlhbCIsImxhc3RSZXZzIiwicmVmS2V5cyIsIm1hcCIsInN0cmluZyIsInBhcnNlUmVmIiwicmV2cyIsInJlZiIsInN0b3JlSWQiLCJyZXYiLCJyZWZzIiwibW91bnQiLCJnZXRVcGRhdGVzIiwiZm9sbG93ZXJzIiwibGVuZ3RoIiwic3BsaWNlIiwidG8iLCJiaW5kIiwibWl4ZWRDV1VubW91bnQiLCJ1bk1vdW50S2V5IiwiaXNSZWFjdENvbXBvbmVudCIsImhhc093blByb3BlcnR5IiwidW5CaW5kIiwic3BsaXQiLCJyZXRyaWV2ZSIsInBhdGgiLCJzbGljZSIsInN0b3Jlc1Jldk1hcCIsImxvY2FsIiwiX3JldiIsInVwZGF0ZWQiLCJnZXRTdG9yZXNSZXZzIiwib3V0cHV0IiwiYWxpYXMiLCJjaGlsZHMiLCJfZ2V0QWxsQ2hpbGRzIiwic2VyaWFsaXplIiwic25hcCIsImRlc3Ryb3kiLCJfcmVmIiwiYWN0aW9uIiwiZGlzcGF0Y2giLCJ0cmlnZ2VyIiwiY2IiLCJvbmNlIiwicmVhc29uIiwiZW1pdCIsImVycm9yIiwiX3N0YWJpbGl6ZXJUTSIsImNsZWFyVGltZW91dCIsIl9wcm9wYWdUTSIsInJlbWFwcyIsIndhc1N0YWJsZSIsImluZGV4T2YiLCJ1biIsIl9kZXN0cm95VE0iLCJ0aGVuIiwicmVtb3ZlTGlzdGVuZXIiLCJzaGlmdCIsIl9ybUNoaWxkIiwic2NvcGUiLCJFbWl0dGVyIiwiX2V2ZW50cyIsImV2dCIsImFyZ3oiLCJUYXNrU2VxdWVuY2VyIiwib2JqUHJvdG8iLCJnZXRQcm90b3R5cGVPZiIsImNvbXBvbmVudCIsIm9yaWdpbiIsInRhcmdldFJldnMiLCJfcmV2cyIsInRhcmdldFNjb3BlIiwiaW5pdGlhbE91dHB1dHMiLCJzdGF0aWNTY29wZSIsImZpbHRlciIsImRlZmF1bHROYW1lIiwibWF0Y2giLCJzdWJzdHIiLCJfc291cmNlcyIsIl9zdGF0aWMiLCJnZXRTY29wZSIsImNmZyIsIndhdGNocyIsInVzZSIsImFwcGx5IiwiaW5pdGlhbFN0YXRlIiwiYXBwbGllZCIsIl91aWQiLCJfb25TdGFiaWxpemUiLCJzY29wZU9iaiIsIl9yZXF1aXJlIiwiX3VzZSIsInJlZjIiLCJzaG91bGRBcHBseSIsIm1hbmFnZWQiLCJ3YXJuIiwibkRhdGFzIiwiciIsImNEYXRhcyIsImlzQ29tcGxldGUiLCJmb2xsb3ciLCJjYWxsIiwiY2hhbmdlcyIsInJlZmluZSIsIl9zdGFiaWxpemVyIiwicHVzaFRhc2siLCJhY3Rpb25zIiwibnMiLCJkb1dhaXQiLCJzIiwibmV4dFN0YXRlIiwiX2NoYW5nZXNTVyIsIm5leHREYXRhcyIsImhhc0RhdGFDaGFuZ2UiLCJzdGFibGUiLCJwU3RhdGUiLCJzeW5jIiwiY2hhbmdlIiwic3RhYmlsaXplIiwibWUiLCJmcm9tIiwicHVsbCIsImNvbXBsZXRlU3RhdGUiLCJoIiwicHJldmlvdXMiLCJzaG91bGRQcm9wYWciLCJmb2xsb3dlciIsInJlbW92ZUFsbExpc3RlbmVycyIsIlNlZWQiLCJTRUVEIiwidGFza1F1ZXVlIiwiY3VyV2VpZ2h0IiwibWF4V2VpZ2h0IiwibWluV2VpZ2h0IiwidGFza0NvdW50IiwiaXNSdW5uaW5nIiwicnVubmluZ1RtIiwicnVuTm93IiwicnVuIiwiaGF6RmFpbCIsImZhaWxlZFRhc2siLCJ0YXNrIiwiZmFpbCIsIndlaWdodCIsInN0YWNrIiwiTWF0aCIsIm1heCIsIm1pbiIsIlNpbXBsZU9iamVjdFByb3RvIiwicCIsInEiLCJyZXNjb3BlIiwiJHNjb3BlIiwiJHN0b3JlcyIsInJlbmRlciIsIm5wIiwibmMiLCJuU2NvcGUiLCJjb250ZXh0IiwicHJvcHMiLCJjaGlsZHJlbiIsImNoaWxkQ29udGV4dFR5cGVzIiwib2JqZWN0IiwiY29udGV4dFR5cGVzIiwiQmFzZUNvbXBvbmVudCIsImFkZGl0aW9uYWxDb250ZXh0IiwiYW55IiwiUmVTY29wZVByb3ZpZGVyIiwiZGVmYXVsdFByb3BzIiwiZGlzcGxheU5hbWUiLCIkZGlzcGF0Y2giLCJkZWZhdWx0IiwicmVzY29wZVByb3BzIiwicmVzY29wZVN0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ1hBOzs7O0FBQ0E7Ozs7QUFDQTs7S0FBd0JBLE07Ozs7OztBQUV4QixpQkFBTUMsS0FBTixtQixDQS9CQTs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUFLdVEsT0FBWjtBQUNIO0FBakJFO0FBQUE7QUFBQSxzQ0FtQk07QUFBQTs7QUFDTCx3QkFBTyw4QkFBQyxhQUFELGVBQW9CLEtBQUtDLEtBQXpCLEVBQ29CLEtBQUtqUCxLQUR6QjtBQUVlLGdDQUFZO0FBQUEsZ0NBQWUsT0FBSzRQLFNBQUwseUJBQWY7QUFBQSxzQkFGM0I7QUFHZSw4QkFBVSxLQUFLakIsT0FIOUIsSUFBUDtBQUlIO0FBeEJFOztBQUFBO0FBQUEsT0FBZ0QsZ0JBQU1wUSxTQUF0RCxXQUNJNFEsaUJBREosZ0JBRUtHLGNBQWNELFlBQWQsSUFBOEIsRUFGbkMsRUFHS0UsaUJBSEw7QUFJQ2Qsa0JBQVMsb0JBQVVXLE1BSnBCO0FBS0NULGtCQUFTLG9CQUFVUztBQUxwQixpQkFPSUMsWUFQSixnQkFRS0MsY0FBY0QsWUFBZCxJQUE4QixFQVJuQyxFQVNLRSxpQkFUTDtBQVVDZCxrQkFBUyxvQkFBVVcsTUFWcEI7QUFXQ1Qsa0JBQVMsb0JBQVVTO0FBWHBCLGlCQWFJTyxXQWJKLEdBYXdCLGtCQUFrQkwsY0FBY0ssV0FBZCxJQUE2QkwsY0FBY3BQLElBQTdELElBQXFFLEdBYjdGLFdBeUJKMkksS0F6QkksRUF5Qkd3QixHQXpCSCxDQUFQO0FBMEJIOztTQUdnQndGLE8sR0FBYnRSLFM7U0FDQUEsUyxHQUFBQSxTO1NBQ0FDLFksR0FBQUEsWTtTQUNnQnNSLFksR0FBaEJ0UixZO1NBQ0FDLFksR0FBQUEsWTtTQUNnQnNSLFksR0FBaEJ0UixZOzs7Ozs7QUM3UkosbUM7Ozs7OztBQ0FBLHdDIiwiZmlsZSI6ImRpc3QvUmVTY29wZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA3N2NiZmZhZDdiYjk0ZjE3ODRmNSIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpICAyMDE4IFdpc2UgV2lsZCBXZWIgLlxuICpcbiAqICBNSVQgTGljZW5zZVxuICpcbiAqICBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiAgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqICB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiAgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiAgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiAgVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG4gKiAgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqICBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG4gKiAgU09GVFdBUkUuXG4gKlxuICogQGF1dGhvciA6IE5hdGhhbmFlbCBCcmF1blxuICogQGNvbnRhY3QgOiBjYWlwaWxhYnNAZ21haWwuY29tXG4gKi9cblxuaW1wb3J0IFNjb3BlIGZyb20gXCIuL1Njb3BlXCI7XG5pbXBvcnQgU3RvcmUgZnJvbSBcIi4vU3RvcmVcIjtcbmltcG9ydCBSZWFjdFRvb2xzLCAqIGFzIFJUb29scyBmcm9tIFwiLi9SZWFjdFRvb2xzXCI7XG5cblNjb3BlLlN0b3JlID0gU3RvcmU7XG5leHBvcnQgZGVmYXVsdCB7XG4gICAgU3RvcmUsXG4gICAgQ29udGV4dCAgICAgOiBTY29wZSxcbiAgICBTY29wZSxcbiAgICBDb21wb25lbnQgICA6IFJUb29scy5Db21wb25lbnQsXG4gICAgcmVTY29wZVByb3BzOiBSVG9vbHMucmVTY29wZVByb3BzLFxuICAgIHJlU2NvcGVTdGF0ZTogUlRvb2xzLnJlU2NvcGVTdGF0ZSxcbiAgICB3aXRoU2NvcGUgICA6IFJUb29scy5yZVNjb3BlU3RhdGVcbn07XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9SZVNjb3BlLmpzIiwiLypcbiAqIENvcHlyaWdodCAoYykgIDIwMTggV2lzZSBXaWxkIFdlYiAuXG4gKlxuICogIE1JVCBMaWNlbnNlXG4gKlxuICogIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqICBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiAgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqICBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqICBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqICBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcbiAqICBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqICBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiAgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiAgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiAgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiAgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcbiAqICBTT0ZUV0FSRS5cbiAqXG4gKiBAYXV0aG9yIDogTmF0aGFuYWVsIEJyYXVuXG4gKiBAY29udGFjdCA6IGNhaXBpbGFic0BnbWFpbC5jb21cbiAqL1xuXG5cbnZhciBpcyAgICAgICAgICAgICAgPSByZXF1aXJlKCdpcycpLFxuICAgIEV2ZW50RW1pdHRlciAgICA9IHJlcXVpcmUoJy4vRW1pdHRlcicpLFxuICAgIHNob3J0aWQgICAgICAgICA9IHJlcXVpcmUoJ3Nob3J0aWQnKVxuICAgICwgX19wcm90b19fcHVzaCA9ICggdGFyZ2V0LCBpZCwgcGFyZW50ICkgPT4ge1xuICAgICAgICBsZXQgZm4gICAgICAgICAgID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB9O1xuICAgICAgICBmbi5wcm90b3R5cGUgICAgID0gcGFyZW50ID8gbmV3IHBhcmVudFtcIl9cIiArIGlkXSgpIDogdGFyZ2V0W2lkXSB8fCB7fTtcbiAgICAgICAgdGFyZ2V0W2lkXSAgICAgICA9IG5ldyBmbigpO1xuICAgICAgICB0YXJnZXRbJ18nICsgaWRdID0gZm47XG4gICAgfSxcbiAgICBvcGVuU2NvcGVzICAgICAgPSB7fVxuO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjb3BlIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgICBzdGF0aWMgcGVyc2lzdGVuY2VUbSA9IDE7Ly8gaWYgPiAwLCB3aWxsIHdhaXQgJ3BlcnNpc3RlbmNlVG0nIG1zIGJlZm9yZSBkZXN0cm95IHdoZW4gZGlzcG9zZSByZWFjaCAwXG4gICAgc3RhdGljIFN0b3JlICAgICAgICAgPSBudWxsO1xuICAgIHN0YXRpYyBzY29wZXMgICAgICAgID0gb3BlblNjb3BlczsvLyBhbGwgYWN0aXZlIHNjb3Blc1xuICAgIFxuICAgIHN0YXRpYyBnZXRTY29wZSggc2NvcGVzICkge1xuICAgICAgICBsZXQgc2tleSA9IGlzLmFycmF5KHNjb3BlcykgPyBzY29wZXMuc29ydCgoIGEsIGIgKSA9PiB7XG4gICAgICAgICAgICBpZiAoIGEuZmlyc3RuYW1lIDwgYi5maXJzdG5hbWUgKSByZXR1cm4gLTE7XG4gICAgICAgICAgICBpZiAoIGEuZmlyc3RuYW1lID4gYi5maXJzdG5hbWUgKSByZXR1cm4gMTtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9KS5qb2luKCc6OicpIDogc2NvcGVzO1xuICAgICAgICByZXR1cm4gb3BlblNjb3Blc1tza2V5XSA9IG9wZW5TY29wZXNbc2tleV0gfHwgbmV3IFNjb3BlKHt9LCB7IGlkOiBza2V5IH0pO1xuICAgIH07XG4gICAgXG4gICAgLyoqXG4gICAgICogSW5pdCBhIFJlc2NvcGUgc2NvcGVcbiAgICAgKlxuICAgICAqIEBwYXJhbSBzdG9yZXNNYXAge09iamVjdH0gT2JqZWN0IHdpdGggdGhlIG9yaWdpbiBzdG9yZXNcbiAgICAgKiBAcGFyYW0gaWQge3N0cmluZ30gQG9wdGlvbmFsIGlkICggaWYgdGhpcyBpZCBleGlzdCBzdG9yZXNNYXAgd2lsbCBiZSBtZXJnZSBvbiB0aGUgJ2lkJyBzY29wZSlcbiAgICAgKiBAcGFyYW0gcGFyZW50XG4gICAgICogQHBhcmFtIHN0YXRlXG4gICAgICogQHBhcmFtIGRhdGFcbiAgICAgKiBAcGFyYW0gbmFtZVxuICAgICAqIEBwYXJhbSBkZWZhdWx0TWF4TGlzdGVuZXJzXG4gICAgICogQHBhcmFtIHBlcnNpc3RlbmNlVG0ge251bWJlcikgaWYgPiAwLCB3aWxsIHdhaXQgJ3BlcnNpc3RlbmNlVG0nIG1zIGJlZm9yZSBkZXN0cm95IHdoZW4gZGlzcG9zZSByZWFjaCAwXG4gICAgICogQHBhcmFtIGF1dG9EZXN0cm95ICB7Ym9vbH0gd2lsbCB0cmlnZ2VyIHJldGFpbiAmIGRpc3Bvc2UgYWZ0ZXIgc3RhcnRcbiAgICAgKiBAcmV0dXJucyB7U2NvcGV9XG4gICAgICovXG4gICAgY29uc3RydWN0b3IoIHN0b3Jlc01hcCwgeyBwYXJlbnQsIGtleSwgaWQsIHN0YXRlLCBkYXRhLCBuYW1lLCBpbmNyZW1lbnRJZCA9ICEha2V5LCBkZWZhdWx0TWF4TGlzdGVuZXJzLCBwZXJzaXN0ZW5jZVRtLCBhdXRvRGVzdHJveSwgcm9vdEVtaXR0ZXIgfSA9IHt9ICkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fbWF4TGlzdGVuZXJzID0gZGVmYXVsdE1heExpc3RlbmVycyB8fCB0aGlzLmNvbnN0cnVjdG9yLmRlZmF1bHRNYXhMaXN0ZW5lcnM7XG4gICAgICAgIFxuICAgICAgICBpZCA9IGlkXG4gICAgICAgICAgICB8fCBrZXkgJiYgKChwYXJlbnQgJiYgcGFyZW50Ll9pZCB8fCAnJykgKyAnOjonICsga2V5KTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX2lzTG9jYWxJZCA9ICFpZDtcbiAgICAgICAgXG4gICAgICAgIGlkID0gaWQgfHwgKFwiX19fX19cIiArIHNob3J0aWQuZ2VuZXJhdGUoKSk7XG4gICAgICAgIFxuICAgICAgICBpZiAoIG9wZW5TY29wZXNbaWRdICYmICFpbmNyZW1lbnRJZCApIHtcbiAgICAgICAgICAgIHRoaXMuX2lkID0gaWQ7XG4gICAgICAgICAgICBvcGVuU2NvcGVzW2lkXS5yZWdpc3RlcihzdG9yZXNNYXApO1xuICAgICAgICAgICAgcmV0dXJuIG9wZW5TY29wZXNbaWRdXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoIG9wZW5TY29wZXNbaWRdICYmIGluY3JlbWVudElkICkge1xuICAgICAgICAgICAgbGV0IGkgPSAtMTtcbiAgICAgICAgICAgIHdoaWxlICggb3BlblNjb3Blc1tpZCArICdbJyArICgrK2kpICsgJ10nXSApIDtcbiAgICAgICAgICAgIGlkID0gaWQgKyAnWycgKyBpICsgJ10nO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9pZCAgICAgICAgICAgID0gaWQ7XG4gICAgICAgIG9wZW5TY29wZXNbaWRdICAgICAgPSB0aGlzO1xuICAgICAgICB0aGlzLl9wZXJzaXN0ZW5jZVRtID0gcGVyc2lzdGVuY2VUbSB8fCB0aGlzLmNvbnN0cnVjdG9yLnBlcnNpc3RlbmNlVG07XG4gICAgICAgIFxuICAgICAgICB0aGlzLnN0b3JlcyA9IHt9O1xuICAgICAgICB0aGlzLnN0YXRlICA9IHt9O1xuICAgICAgICB0aGlzLmRhdGEgICA9IHt9O1xuICAgICAgICBcbiAgICAgICAgaWYgKCBwYXJlbnQgJiYgcGFyZW50LmRlYWQgKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2FuJ3QgdXNlIGEgZGVhZCBzY29wZSBhcyBwYXJlbnQgIVwiKTtcbiAgICAgICAgXG4gICAgICAgIF9fcHJvdG9fX3B1c2godGhpcywgJ3N0b3JlcycsIHBhcmVudCk7XG4gICAgICAgIF9fcHJvdG9fX3B1c2godGhpcywgJ3N0YXRlJywgcGFyZW50KTtcbiAgICAgICAgX19wcm90b19fcHVzaCh0aGlzLCAnZGF0YScsIHBhcmVudCk7XG4gICAgICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIHRoaXMuc291cmNlcyAgICAgICAgICA9IFtdO1xuICAgICAgICB0aGlzLl9jaGlsZFNjb3BlcyAgICAgPSBbXTtcbiAgICAgICAgdGhpcy5fY2hpbGRTY29wZXNMaXN0ID0gW107XG4gICAgICAgIHRoaXMuX3VuU3RhYmxlQ2hpbGRzICA9IDA7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9fcmV0YWlucyAgID0geyBhbGw6IDAgfTtcbiAgICAgICAgdGhpcy5fX2xvY2tzICAgICA9IHsgYWxsOiAxIH07XG4gICAgICAgIHRoaXMuX19saXN0ZW5pbmcgPSB7fTtcbiAgICAgICAgdGhpcy5fX3Njb3BlICAgICA9IHt9O1xuICAgICAgICB0aGlzLl9fbWl4ZWQgICAgID0gW107XG4gICAgICAgIHRoaXMuX19taXhlZExpc3QgPSBbXTtcbiAgICAgICAgdGhpcy5fZm9sbG93ZXJzICA9IFtdO1xuICAgICAgICBpZiAoIHBhcmVudCApIHtcbiAgICAgICAgICAgIHBhcmVudC5yZXRhaW4oXCJpc015UGFyZW50XCIpO1xuICAgICAgICAgICAgaWYgKCAhcm9vdEVtaXR0ZXIgKSB7XG4gICAgICAgICAgICAgICAgIXBhcmVudC5fc3RhYmxlICYmIHRoaXMud2FpdChcIndhaXRpbmdQYXJlbnRcIik7XG4gICAgICAgICAgICAgICAgcGFyZW50Lm9uKHRoaXMuX19wYXJlbnRMaXN0ID0ge1xuICAgICAgICAgICAgICAgICAgICAnc3RhYmxlJyAgOiBzID0+IHRoaXMucmVsZWFzZShcIndhaXRpbmdQYXJlbnRcIiksXG4gICAgICAgICAgICAgICAgICAgICd1bnN0YWJsZSc6IHMgPT4gdGhpcy53YWl0KFwid2FpdGluZ1BhcmVudFwiKSxcbiAgICAgICAgICAgICAgICAgICAgJ3VwZGF0ZScgIDogcyA9PiB0aGlzLl9wcm9wYWcoKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcGFyZW50Lm9uKHRoaXMuX19wYXJlbnRMaXN0ID0ge1xuICAgICAgICAgICAgICAgICAgICAndXBkYXRlJzogcyA9PiB0aGlzLl9wcm9wYWcoKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gdGhpcy5yZWdpc3RlcihwYXJlbnQuX19zY29wZSwgc3RhdGUsIGRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgdGhpcy5yZWdpc3RlcihzdG9yZXNNYXAsIHN0YXRlLCBkYXRhKTtcbiAgICAgICAgdGhpcy5fX2xvY2tzLmFsbC0tO1xuICAgICAgICB0aGlzLl9zdGFibGUgPSAhdGhpcy5fX2xvY2tzLmFsbDtcbiAgICAgICAgXG4gICAgICAgIGlmICggcGFyZW50ICkge1xuICAgICAgICAgICAgcGFyZW50Ll9hZGRDaGlsZCh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIGF1dG9EZXN0cm95IClcbiAgICAgICAgICAgIHNldFRpbWVvdXQoXG4gICAgICAgICAgICAgICAgdG0gPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJldGFpbihcImF1dG9EZXN0cm95XCIpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpc3Bvc2UoXCJhdXRvRGVzdHJveVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApXG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIEBkZXByZWNhdGVkXG4gICAgICogQHJldHVybnMgeyp9XG4gICAgICovXG4gICAgZ2V0IGRhdGFzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKlxuICAgICAqIE1vdW50IHRoZSBzdG9yZXMgaW4gc3RvcmVzTGlzdCwgaW4gdGhpcyBzY29wZSBvciBpbiBpdHMgcGFyZW50cyBvciBtaXhlZCBzY29wZXNcbiAgICAgKlxuICAgICAqIEBwYXJhbSBzdG9yZXNMaXN0IHtzdHJpbmd8c3RvcmVSZWZ9IFN0b3JlIG5hbWUsIEFycmF5IG9mIFN0b3JlIG5hbWVzLCBvciBSZXNjb3BlIHN0b3JlIHJlZiBmcm9tIFN0b3JlOjphcyBvclxuICAgICAqICAgICBTdG9yZTphc1xuICAgICAqIEBwYXJhbSBzdGF0ZVxuICAgICAqIEBwYXJhbSBkYXRhXG4gICAgICogQHJldHVybnMge1Njb3BlfVxuICAgICAqL1xuICAgIG1vdW50KCBzdG9yZXNMaXN0LCBzbmFwc2hvdCwgc3RhdGUsIGRhdGEgKSB7XG4gICAgICAgIGlmICggaXMuYXJyYXkoc3RvcmVzTGlzdCkgKSB7XG4gICAgICAgICAgICBzdG9yZXNMaXN0LmZvckVhY2goayA9PiB0aGlzLl9tb3VudChrLCBzbmFwc2hvdCwgc3RhdGUsIGRhdGEpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX21vdW50KC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIFxuICAgIF9tb3VudCggaWQsIHNuYXBzaG90LCBzdGF0ZSwgZGF0YSApIHtcbiAgICAgICAgaWYgKCB0eXBlb2YgaWQgIT09ICdzdHJpbmcnICkge1xuICAgICAgICAgICAgdGhpcy5yZWdpc3Rlcih7IFtpZC5uYW1lXTogaWQuc3RvcmUgfSk7XG4gICAgICAgICAgICBpZCA9IGlkLm5hbWU7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmICggIXRoaXMuX19zY29wZVtpZF0gKSB7Ly9hc2sgbWl4ZWQgfHwgcGFyZW50XG4gICAgICAgICAgICBpZiAoIHRoaXMuX19taXhlZC5yZWR1Y2UoKCBtb3VudGVkLCBjdHggKSA9PiAobW91bnRlZCB8fCBjdHguX21vdW50KGlkLCBzbmFwc2hvdCwgc3RhdGUsIGRhdGEpKSwgZmFsc2UpIHx8XG4gICAgICAgICAgICAgICAgIXRoaXMucGFyZW50IClcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJlbnQuX21vdW50KC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsZXQgc3RvcmUgPSB0aGlzLl9fc2NvcGVbaWRdLCBjdHg7XG4gICAgICAgICAgICBpZiAoIGlzLmZuKHN0b3JlKSApIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9fc2NvcGVbaWRdID0gbmV3IHN0b3JlKHRoaXMsIHsgc25hcHNob3QsIG5hbWU6IGlkLCBzdGF0ZSwgZGF0YSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKCBzbmFwc2hvdCApXG4gICAgICAgICAgICAgICAgc3RvcmUucmVzdG9yZShzbmFwc2hvdCk7XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoIHN0YXRlICE9PSB1bmRlZmluZWQgJiYgZGF0YSA9PT0gdW5kZWZpbmVkIClcbiAgICAgICAgICAgICAgICAgICAgc3RvcmUuc2V0U3RhdGUoc3RhdGUpO1xuICAgICAgICAgICAgICAgIGVsc2UgaWYgKCBzdGF0ZSAhPT0gdW5kZWZpbmVkIClcbiAgICAgICAgICAgICAgICAgICAgc3RvcmUuc3RhdGUgPSBzdGF0ZTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAoIGRhdGEgIT09IHVuZGVmaW5lZCApXG4gICAgICAgICAgICAgICAgICAgIHN0b3JlLnB1c2goZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl93YXRjaFN0b3JlKGlkKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIHJldHVybiB0aGlzLl9fc2NvcGVbaWRdO1xuICAgIH1cbiAgICBcbiAgICBfd2F0Y2hTdG9yZSggaWQsIHN0YXRlLCBkYXRhICkge1xuICAgICAgICAvL2lmICggIXRoaXMuX19zY29wZVtpZF0gKSB7Ly9hc2sgbWl4ZWQgfHwgcGFyZW50XG4gICAgICAgIC8vICAgIGlmICggdGhpcy5fX21peGVkLnJlZHVjZSgoIG1vdW50ZWQsIGN0eCApID0+IChtb3VudGVkIHx8IGN0eC5fd2F0Y2hTdG9yZShpZCwgc3RhdGUsIGRhdGEpKSwgZmFsc2UpIHx8XG4gICAgICAgIC8vICAgICAgICAhdGhpcy5wYXJlbnQgKVxuICAgICAgICAvLyAgICAgICAgcmV0dXJuO1xuICAgICAgICAvLyAgICByZXR1cm4gdGhpcy5wYXJlbnQuX3dhdGNoU3RvcmUoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgLy99XG4gICAgICAgIGlmICggIXRoaXMuX19saXN0ZW5pbmdbaWRdICYmICFpcy5mbih0aGlzLl9fc2NvcGVbaWRdKSApIHtcbiAgICAgICAgICAgICF0aGlzLl9fc2NvcGVbaWRdLl9hdXRvRGVzdHJveSAmJiB0aGlzLl9fc2NvcGVbaWRdLnJldGFpbihcInNjb3BlZFwiKTtcbiAgICAgICAgICAgICF0aGlzLl9fc2NvcGVbaWRdLmlzU3RhYmxlKCkgJiYgdGhpcy53YWl0KGlkKTtcbiAgICAgICAgICAgIHRoaXMuX19zY29wZVtpZF0ub24oXG4gICAgICAgICAgICAgICAgdGhpcy5fX2xpc3RlbmluZ1tpZF0gPSB7XG4gICAgICAgICAgICAgICAgICAgICdkZXN0cm95JyA6IHMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuX19saXN0ZW5pbmdbaWRdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fX3Njb3BlW2lkXSA9IHRoaXMuX19zY29wZVtpZF0uY29uc3RydWN0b3I7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICd1cGRhdGUnICA6IHMgPT4gdGhpcy5wcm9wYWcoKSxcbiAgICAgICAgICAgICAgICAgICAgJ3N0YWJsZScgIDogcyA9PiB0aGlzLnJlbGVhc2UoaWQpLFxuICAgICAgICAgICAgICAgICAgICAndW5zdGFibGUnOiBzID0+IHRoaXMud2FpdChpZClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogTWl4IHRhcmdldEN0eCBvbiB0aGlzIHNjb3BlXG4gICAgICogTWl4ZWQgc2NvcGUgcGFyZW50cyBhcmUgTk9UIG1hcHBlZFxuICAgICAqIEBwYXJhbSB0YXJnZXRDdHhcbiAgICAgKi9cbiAgICBtaXhpbiggdGFyZ2V0Q3R4ICkge1xuICAgICAgICBsZXQgcGFyZW50ID0gdGhpcy5wYXJlbnQsIGxpc3RzO1xuICAgICAgICB0aGlzLl9fbWl4ZWQucHVzaCh0YXJnZXRDdHgpXG4gICAgICAgIHRhcmdldEN0eC5yZXRhaW4oXCJtaXhlZFRvXCIpO1xuICAgICAgICBpZiAoICF0YXJnZXRDdHguX3N0YWJsZSApXG4gICAgICAgICAgICB0aGlzLndhaXQodGFyZ2V0Q3R4Ll9pZCk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9fbWl4ZWRMaXN0LnB1c2gobGlzdHMgPSB7XG4gICAgICAgICAgICAnc3RhYmxlJyAgOiBzID0+IHRoaXMucmVsZWFzZSh0YXJnZXRDdHguX2lkKSxcbiAgICAgICAgICAgICd1bnN0YWJsZSc6IHMgPT4gdGhpcy53YWl0KHRhcmdldEN0eC5faWQpLFxuICAgICAgICAgICAgJ3VwZGF0ZScgIDogcyA9PiB0aGlzLl9wcm9wYWcoKVxuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuc3RvcmVzID0ge307XG4gICAgICAgIHRoaXMuc3RhdGUgID0ge307XG4gICAgICAgIHRoaXMuZGF0YSAgID0ge307XG4gICAgICAgIHRhcmdldEN0eC5vbihsaXN0cyk7XG4gICAgICAgIF9fcHJvdG9fX3B1c2godGhpcywgJ3N0b3JlcycsIHBhcmVudCk7XG4gICAgICAgIF9fcHJvdG9fX3B1c2godGhpcywgJ3N0YXRlJywgcGFyZW50KTtcbiAgICAgICAgX19wcm90b19fcHVzaCh0aGlzLCAnZGF0YScsIHBhcmVudCk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLnJlbGluayh0aGlzLl9fc2NvcGUsIHRoaXMsIGZhbHNlLCB0cnVlKTtcbiAgICAgICAgdGhpcy5fX21peGVkLmZvckVhY2goXG4gICAgICAgICAgICBjdHggPT4ge1xuICAgICAgICAgICAgICAgIF9fcHJvdG9fX3B1c2godGhpcywgJ3N0b3JlcycpO1xuICAgICAgICAgICAgICAgIF9fcHJvdG9fX3B1c2godGhpcywgJ3N0YXRlJyk7XG4gICAgICAgICAgICAgICAgX19wcm90b19fcHVzaCh0aGlzLCAnZGF0YScpO1xuICAgICAgICAgICAgICAgIGN0eC5yZWxpbmsoY3R4Ll9fc2NvcGUsIHRoaXMsIHRydWUsIHRydWUpXG4gICAgICAgICAgICB9XG4gICAgICAgIClcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogUmVnaXN0ZXIgc3RvcmVzIGluIHN0b3Jlc01hcCAmIGxpbmsgdGhlbSBpbiB0aGUgcHJvdG9zXG4gICAgICogQHBhcmFtIHN0b3Jlc01hcFxuICAgICAqIEBwYXJhbSBzdGF0ZVxuICAgICAqIEBwYXJhbSBkYXRhXG4gICAgICovXG4gICAgcmVnaXN0ZXIoIHN0b3Jlc01hcCwgc3RhdGUgPSB7fSwgZGF0YSA9IHt9ICkge1xuICAgICAgICB0aGlzLnJlbGluayhzdG9yZXNNYXAsIHRoaXMsIGZhbHNlLCBmYWxzZSk7XG4gICAgICAgIE9iamVjdC5rZXlzKHN0b3Jlc01hcCkuZm9yRWFjaChcbiAgICAgICAgICAgIGlkID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIHN0b3Jlc01hcFtpZF0uc2luZ2xldG9uIHx8IChpcy5mbihzdG9yZXNNYXBbaWRdKSAmJiAoc3RhdGVbaWRdIHx8IGRhdGFbaWRdKSkgKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX21vdW50KGlkLCBzdGF0ZVtpZF0sIGRhdGFbaWRdKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICggc3RhdGVbaWRdIHx8IGRhdGFbaWRdICkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIGRhdGFbaWRdICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBzdGF0ZVtpZF0gKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcmVzW2lkXS5zdGF0ZSA9IHN0YXRlW2lkXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcmVzW2lkXS5wdXNoKGRhdGFbaWRdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICggc3RhdGVbaWRdICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9yZXNbaWRdLnNldFN0YXRlKHN0YXRlW2lkXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3dhdGNoU3RvcmUoaWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgICAgICBcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogTWFwIHNyY0N0eCBzdG9yZSdzIG9uIHRhcmdldEN0eCBoZWFkZXJzIHByb3RvJ3NcbiAgICAgKiBAcGFyYW0gc3JjQ3R4XG4gICAgICogQHBhcmFtIHRhcmdldEN0eFxuICAgICAqIEBwYXJhbSBzdGF0ZVxuICAgICAqIEBwYXJhbSBkYXRhXG4gICAgICovXG4gICAgcmVsaW5rKCBzcmNDdHgsIHRhcmdldEN0eCA9IHRoaXMsIGV4dGVybmFsLCBmb3JjZSApIHtcbiAgICAgICAgbGV0IGxjdHggPSB0YXJnZXRDdHguX3N0b3Jlcy5wcm90b3R5cGU7XG4gICAgICAgIE9iamVjdC5rZXlzKHNyY0N0eClcbiAgICAgICAgICAgICAgLmZvckVhY2goXG4gICAgICAgICAgICAgICAgICBpZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKCAhZm9yY2UgJiYgdGFyZ2V0Q3R4Ll9fc2NvcGVbaWRdID09PSBzcmNDdHhbaWRdIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldEN0eC5fX3Njb3BlW2lkXSAmJiAodGFyZ2V0Q3R4Ll9fc2NvcGVbaWRdLmNvbnN0cnVjdG9yID09PSBzcmNDdHhbaWRdKSApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoICFmb3JjZSAmJiB0YXJnZXRDdHguX19zY29wZVtpZF0gKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmICggIWV4dGVybmFsICYmICFpcy5mbih0YXJnZXRDdHguX19zY29wZVtpZF0pICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5pbmZvKFwiUmVzY29wZSBTdG9yZSA6IFwiLCBpZCwgXCIgYWxyZWFkeSBleGlzdCBpbiB0aGlzIHNjb3BlICEgKCB0cnkgX19wcm90b19fIGhvdCBwYXRjaCApXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0Q3R4Ll9fc2NvcGVbaWRdLl9fcHJvdG9fXyA9IHNyY0N0eFtpZF0ucHJvdG90eXBlO1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCAhZXh0ZXJuYWwgJiYgaXMuZm4odGFyZ2V0Q3R4Ll9fc2NvcGVbaWRdKSApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRDdHguX19zY29wZVtpZF0gPSBzcmNDdHhbaWRdO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICggIWZvcmNlICYmICFleHRlcm5hbCApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX19zY29wZVtpZF0gPSBzcmNDdHhbaWRdO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGN0eCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldDogKCkgPT4gdGhpcy5fX3Njb3BlW2lkXVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldEN0eC5fc3RhdGUucHJvdG90eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0OiAoKSA9PiAodGhpcy5fX3Njb3BlW2lkXSAmJiB0aGlzLl9fc2NvcGVbaWRdLnN0YXRlKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldDogKCB2ICkgPT4gKHRoaXMuX21vdW50KGlkLCBudWxsLCB2KSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRDdHguX2RhdGEucHJvdG90eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0OiAoKSA9PiAodGhpcy5fX3Njb3BlW2lkXSAmJiB0aGlzLl9fc2NvcGVbaWRdLmRhdGEpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0OiAoIHYgKSA9PiAodGhpcy5fbW91bnQoaWQsIHVuZGVmaW5lZCwgdikpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICApXG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIEJpbmQgc3RvcmVzIGZyb20gdGhpcyBzY29wZSwgaGlzIHBhcmVudHMgYW5kIG1peGVkIHNjb3BlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gb2JqIHtSZWFjdC5Db21wb25lbnR8U3RvcmV8ZnVuY3Rpb259XG4gICAgICogQHBhcmFtIGtleSB7c3RyaW5nfSBzdG9yZXMga2V5cyB0byBiaW5kIHVwZGF0ZXNcbiAgICAgKiBAcGFyYW0gYXNcbiAgICAgKiBAcGFyYW0gc2V0SW5pdGlhbCB7Ym9vbH0gZmFsc2UgdG8gbm90IHByb3BhZyBpbml0aWFsIHZhbHVlIChkZWZhdWx0IDogdHJ1ZSlcbiAgICAgKi9cbiAgICBiaW5kKCBvYmosIGtleSwgYXMsIHNldEluaXRpYWwgPSB0cnVlICkge1xuICAgICAgICBsZXQgbGFzdFJldnMsIGRhdGEsIHJlZktleXM7XG4gICAgICAgIGlmICgga2V5ICYmICFpcy5hcnJheShrZXkpIClcbiAgICAgICAgICAgIGtleSA9IFtrZXldO1xuICAgICAgICBcbiAgICAgICAgaWYgKCBhcyA9PT0gZmFsc2UgfHwgYXMgPT09IHRydWUgKSB7XG4gICAgICAgICAgICBzZXRJbml0aWFsID0gYXM7XG4gICAgICAgICAgICBhcyAgICAgICAgID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmVmS2V5cyA9IGtleVxuICAgICAgICAgICAgLm1hcChpZCA9PiAoaXMuc3RyaW5nKGlkKSA/IGlkIDogaWQubmFtZSkpXG4gICAgICAgICAgICAubWFwKGlkID0+ICh0aGlzLnBhcnNlUmVmKGlkKSkpO1xuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX2ZvbGxvd2Vycy5wdXNoKFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIG9iaixcbiAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgYXMgfHwgdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIGxhc3RSZXZzID0gcmVmS2V5cy5yZWR1Y2UoKCByZXZzLCByZWYgKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldnNbcmVmLnN0b3JlSWRdID0gcmV2c1tyZWYuc3RvcmVJZF0gfHwge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV2IDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZnM6IFtdXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIHJldnNbcmVmLnN0b3JlSWRdLnJlZnMucHVzaChyZWYpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmV2cztcbiAgICAgICAgICAgICAgICB9LCB7fSlcbiAgICAgICAgICAgIF0pO1xuICAgICAgICB0aGlzLm1vdW50KGtleSk7XG4gICAgICAgIFxuICAgICAgICBpZiAoIHNldEluaXRpYWwgJiYgdGhpcy5fc3RhYmxlICkge1xuICAgICAgICAgICAgZGF0YSA9IHRoaXMuZ2V0VXBkYXRlcyhsYXN0UmV2cyk7XG4gICAgICAgICAgICBpZiAoICFkYXRhICkgcmV0dXJuO1xuICAgICAgICAgICAgaWYgKCB0eXBlb2Ygb2JqICE9IFwiZnVuY3Rpb25cIiApIHtcbiAgICAgICAgICAgICAgICBpZiAoIGFzICkgb2JqLnNldFN0YXRlKHsgW2FzXTogZGF0YSB9KTtcbiAgICAgICAgICAgICAgICBlbHNlIG9iai5zZXRTdGF0ZShkYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIG9iaihkYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogVW4gYmluZCB0aGlzIHNjb3BlIG9mZiB0aGUgZ2l2ZW4gY29tcG9uZW50LWtleXNcbiAgICAgKiBAcGFyYW0gb2JqXG4gICAgICogQHBhcmFtIGtleVxuICAgICAqIEByZXR1cm5zIHtBcnJheS48Kj59XG4gICAgICovXG4gICAgdW5CaW5kKCBvYmosIGtleSwgYXMgKSB7XG4gICAgICAgIHZhciBmb2xsb3dlcnMgPSB0aGlzLl9mb2xsb3dlcnMsXG4gICAgICAgICAgICBpICAgICAgICAgPSBmb2xsb3dlcnMgJiYgZm9sbG93ZXJzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBmb2xsb3dlcnMgJiYgaS0tIClcbiAgICAgICAgICAgIGlmICggZm9sbG93ZXJzW2ldWzBdID09PSBvYmogJiYgKCcnICsgZm9sbG93ZXJzW2ldWzFdKSA9PSAoJycgKyBrZXkpICYmXG4gICAgICAgICAgICAgICAgZm9sbG93ZXJzW2ldWzJdID09IGFzIClcbiAgICAgICAgICAgICAgICByZXR1cm4gZm9sbG93ZXJzLnNwbGljZShpLCAxKTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogTW91bnQgdGhlIHN0b3JlcyBpbiBzdG9yZXNMaXN0IGZyb20gdGhpcyBzY29wZSwgaXRzIHBhcmVudHMgYW5kIG1peGVkIHNjb3BlXG4gICAgICogQmluZCB0aGVtIHRvICd0bydcbiAgICAgKiBIb29rICd0bycgc28gaXQgd2lsbCBhdXRvIHVuYmluZCBvbiAnZGVzdHJveScgb3IgJ2NvbXBvbmVudFdpbGxVbm1vdW50J1xuICAgICAqIEBwYXJhbSB0b1xuICAgICAqIEBwYXJhbSBzdG9yZXNMaXN0XG4gICAgICogQHBhcmFtIGJpbmRcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSBJbml0aWFsIG91dHB1dHMgb2YgdGhlIHN0b3JlcyBpbiAnc3RvcmVzTGlzdCdcbiAgICAgKi9cbiAgICBtYXAoIHRvLCBzdG9yZXNMaXN0LCBiaW5kID0gdHJ1ZSApIHtcbiAgICAgICAgbGV0IFN0b3JlICA9IHRoaXMuY29uc3RydWN0b3IuU3RvcmU7XG4gICAgICAgIHN0b3Jlc0xpc3QgPSBpcy5hcnJheShzdG9yZXNMaXN0KSA/IHN0b3Jlc0xpc3QgOiBbc3RvcmVzTGlzdF07XG4gICAgICAgIHRoaXMubW91bnQoc3RvcmVzTGlzdCk7XG4gICAgICAgIGlmICggYmluZCAmJiB0byBpbnN0YW5jZW9mIFN0b3JlICkge1xuICAgICAgICAgICAgU3RvcmUubWFwKHRvLCBzdG9yZXNMaXN0LCB0aGlzLCB0aGlzLCBmYWxzZSlcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICggYmluZCApIHtcbiAgICAgICAgICAgIHRoaXMuYmluZCh0bywgc3RvcmVzTGlzdCwgdW5kZWZpbmVkLCBmYWxzZSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGxldCBtaXhlZENXVW5tb3VudCxcbiAgICAgICAgICAgICAgICB1bk1vdW50S2V5ID0gdG8uaXNSZWFjdENvbXBvbmVudCA/IFwiY29tcG9uZW50V2lsbFVubW91bnRcIiA6IFwiZGVzdHJveVwiO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoIHRvLmhhc093blByb3BlcnR5KHVuTW91bnRLZXkpICkge1xuICAgICAgICAgICAgICAgIG1peGVkQ1dVbm1vdW50ID0gdG9bdW5Nb3VudEtleV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRvW3VuTW91bnRLZXldID0gKCAuLi5hcmd6ICkgPT4ge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSB0b1t1bk1vdW50S2V5XTtcbiAgICAgICAgICAgICAgICBpZiAoIG1peGVkQ1dVbm1vdW50IClcbiAgICAgICAgICAgICAgICAgICAgdG9bdW5Nb3VudEtleV0gPSBtaXhlZENXVW5tb3VudDtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB0aGlzLnVuQmluZCh0bywgc3RvcmVzTGlzdCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRvW3VuTW91bnRLZXldICYmIHRvW3VuTW91bnRLZXldKC4uLmFyZ3opO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0b3Jlc0xpc3QucmVkdWNlKCggZGF0YSwgaWQgKSA9PiB7XG4gICAgICAgICAgICBpZiAoICFpcy5zdHJpbmcoaWQpIClcbiAgICAgICAgICAgICAgICBpZCA9IGlkLm5hbWU7XG4gICAgICAgICAgICBpZCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA9IGlkLnNwbGl0KCc6Jyk7Ly9AdG9kb1xuICAgICAgICAgICAgaWRbMF0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSBpZFswXS5zcGxpdCgnLicpO1xuICAgICAgICAgICAgZGF0YVtpZFsxXSB8fCBpZFswXVtpZFswXS5sZW5ndGggLSAxXV0gPSB0aGlzLnN0b3Jlc1tpZFswXVswXV0gJiYgdGhpcy5zdG9yZXNbaWRbMF1bMF1dLnJldHJpZXZlICYmIHRoaXMuc3RvcmVzW2lkWzBdWzBdXS5yZXRyaWV2ZShpZFswXS5zcGxpY2UoMSkpO1xuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH0sIHt9KTtcbiAgICB9XG4gICAgXG4gICAgcmV0cmlldmUoIHBhdGggPSBcIlwiICkge1xuICAgICAgICBwYXRoID0gaXMuc3RyaW5nKHBhdGgpID8gcGF0aC5zcGxpdCgnLicpIDogcGF0aDtcbiAgICAgICAgcmV0dXJuIHBhdGggJiYgdGhpcy5zdG9yZXNbcGF0aFswXV0gJiZcbiAgICAgICAgICAgIHRoaXMuc3RvcmVzW3BhdGhbMF1dLnJldHJpZXZlKHBhdGguc2xpY2UoMSkpO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBHZXQgb3IgdXBkYXRlIHN0b3Jlc1Jldk1hcCdzIHJldmlzaW9uc1xuICAgICAqIEBwYXJhbSBzdG9yZXNSZXZNYXBcbiAgICAgKiBAcGFyYW0gbG9jYWxcbiAgICAgKiBAcmV0dXJucyB7e319XG4gICAgICovXG4gICAgZ2V0U3RvcmVzUmV2cyggc3RvcmVzUmV2TWFwID0ge30sIGxvY2FsICkge1xuICAgICAgICBsZXQgY3R4ID0gdGhpcy5fX3Njb3BlO1xuICAgICAgICBpZiAoICFzdG9yZXNSZXZNYXAgKSB7XG4gICAgICAgICAgICBzdG9yZXNSZXZNYXAgPSB7fTtcbiAgICAgICAgfVxuICAgICAgICBPYmplY3Qua2V5cyhjdHgpLmZvckVhY2goXG4gICAgICAgICAgICBpZCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCAhaXMuZm4oY3R4W2lkXSlcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgc3RvcmVzUmV2TWFwW2lkXSA9IGN0eFtpZF0uX3JldjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoICFzdG9yZXNSZXZNYXAuaGFzT3duUHJvcGVydHkoaWQpIClcbiAgICAgICAgICAgICAgICAgICAgc3RvcmVzUmV2TWFwW2lkXSA9IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIGlmICggIWxvY2FsICkge1xuICAgICAgICAgICAgdGhpcy5fX21peGVkLnJlZHVjZSgoIHVwZGF0ZWQsIGN0eCApID0+IChjdHguZ2V0U3RvcmVzUmV2cyhzdG9yZXNSZXZNYXApLCBzdG9yZXNSZXZNYXApLCBzdG9yZXNSZXZNYXApO1xuICAgICAgICAgICAgdGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuZ2V0U3RvcmVzUmV2cyhzdG9yZXNSZXZNYXApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdG9yZXNSZXZNYXA7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIEdldCBvciB1cGRhdGUgb3V0cHV0IGJhc2luZyBzdG9yZXNSZXZNYXAncyByZXZpc2lvbnMuXG4gICAgICogSWYgYSBzdG9yZSBpbiAnc3RvcmVzUmV2TWFwJyBpcyB1cGRhdGVkOyBhZGQgaXQgdG8gJ291dHB1dCdcbiAgICAgKiBAcGFyYW0gc3RvcmVzUmV2TWFwXG4gICAgICogQHBhcmFtIG91dHB1dFxuICAgICAqIEBwYXJhbSB1cGRhdGVkXG4gICAgICogQHJldHVybnMgeyp8e319XG4gICAgICovXG4gICAgZ2V0VXBkYXRlcyggc3RvcmVzUmV2TWFwLCBvdXRwdXQsIHVwZGF0ZWQgKSB7XG4gICAgICAgIGxldCBjdHggPSB0aGlzLl9fc2NvcGU7XG4gICAgICAgIFxuICAgICAgICBvdXRwdXQgPSBvdXRwdXQgfHwge307XG4gICAgICAgIE9iamVjdC5rZXlzKGN0eCkuZm9yRWFjaChcbiAgICAgICAgICAgIGlkID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoICFvdXRwdXQuaGFzT3duUHJvcGVydHkoaWQpICYmICFpcy5mbihjdHhbaWRdKVxuICAgICAgICAgICAgICAgICAgICAmJiAoIXN0b3Jlc1Jldk1hcFxuICAgICAgICAgICAgICAgICAgICAgICAgfHwgKHN0b3Jlc1Jldk1hcC5oYXNPd25Qcm9wZXJ0eShpZCkgJiYgc3RvcmVzUmV2TWFwW2lkXSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgICAgICAgfHwgISghc3RvcmVzUmV2TWFwLmhhc093blByb3BlcnR5KGlkKSB8fCBjdHhbaWRdLl9yZXYgPD0gc3RvcmVzUmV2TWFwW2lkXS5yZXYpKVxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlZCAgICA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIG91dHB1dFtpZF0gPSB0aGlzLmRhdGFbaWRdO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBzdG9yZXNSZXZNYXAgJiYgc3RvcmVzUmV2TWFwLmhhc093blByb3BlcnR5KGlkKSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3Jlc1Jldk1hcFtpZF0ucmV2ID0gY3R4W2lkXS5fcmV2O1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmVzUmV2TWFwW2lkXS5yZWZzLmZvckVhY2goXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLndhcm4oXCJ1cGRhdGUgcmVmIFwiLCByZWYucmVmLCB0aGlzLnJldHJpZXZlKHJlZi5wYXRoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dFtyZWYuYWxpYXNdID0gdGhpcy5yZXRyaWV2ZShyZWYucGF0aClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLndhcm4oXCJ1cGRhdGUgXCIsIGlkLCB0aGlzLmRhdGFbaWRdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dFtpZF0gPSB0aGlzLmRhdGFbaWRdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgdXBkYXRlZCA9IHRoaXMuX19taXhlZC5yZWR1Y2UoKCB1cGRhdGVkLCBjdHggKSA9PiAoY3R4LmdldFVwZGF0ZXMoc3RvcmVzUmV2TWFwLCBvdXRwdXQsIHVwZGF0ZWQpIHx8IHVwZGF0ZWQpLCB1cGRhdGVkKTtcbiAgICAgICAgdXBkYXRlZCA9IHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LmdldFVwZGF0ZXMoc3RvcmVzUmV2TWFwLCBvdXRwdXQsIHVwZGF0ZWQpIHx8IHVwZGF0ZWQ7XG4gICAgICAgIHJldHVybiB1cGRhdGVkICYmIG91dHB1dDtcbiAgICB9XG4gICAgXG4gICAgX2dldEFsbENoaWxkcyggY2hpbGRzID0gW10gKSB7XG4gICAgICAgIGNoaWxkcy5wdXNoKC4uLnRoaXMuX2NoaWxkU2NvcGVzKTtcbiAgICAgICAgdGhpcy5fY2hpbGRTY29wZXMuZm9yRWFjaChcbiAgICAgICAgICAgIGN0eCA9PiB7XG4gICAgICAgICAgICAgICAgY3R4Ll9nZXRBbGxDaGlsZHMoY2hpbGRzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIGNoaWxkcztcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gd2l0aENoaWxkc1xuICAgICAqIEBwYXJhbSBfX3dpdGhNaXhlZFxuICAgICAqIEBwYXJhbSBfb3V0cHV0XG4gICAgICogQHJldHVybnMgeyp8e3N0YXRlOiB7fSwgZGF0YToge319fVxuICAgICAqL1xuICAgIHNlcmlhbGl6ZSggb3V0cHV0ID0ge30gKSB7XG4gICAgICAgIGxldCBjdHggICAgICAgICAgPSB0aGlzLl9fc2NvcGU7XG4gICAgICAgIG91dHB1dFt0aGlzLl9pZF0gPSB7fTtcbiAgICAgICAgXG4gICAgICAgIE9iamVjdC5rZXlzKGN0eCkuZm9yRWFjaChcbiAgICAgICAgICAgIGlkID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIGlzLmZuKGN0eFtpZF0pIClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGN0eFtpZF0uc2VyaWFsaXplKG91dHB1dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIClcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX2NoaWxkU2NvcGVzLmZvckVhY2goXG4gICAgICAgICAgICBjdHggPT4ge1xuICAgICAgICAgICAgICAgICFjdHguX2lzTG9jYWxJZCAmJiBjdHguc2VyaWFsaXplKG91dHB1dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9fbWl4ZWQuZm9yRWFjaChcbiAgICAgICAgICAgIGN0eCA9PiB7XG4gICAgICAgICAgICAgICAgIWN0eC5faXNMb2NhbElkICYmIGN0eC5zZXJpYWxpemUob3V0cHV0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgfVxuICAgIFxuICAgIHJlc3RvcmUoIHNuYXBzaG90LCBmb3JjZSApIHtcbiAgICAgICAgbGV0IGN0eCA9IHRoaXMuX19zY29wZTtcbiAgICAgICAgXG4gICAgICAgIHNuYXBzaG90W3RoaXMuX2lkXSAmJiBPYmplY3Qua2V5cyhjdHgpLmZvckVhY2goXG4gICAgICAgICAgICBuYW1lID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgc25hcCA9IHNuYXBzaG90W3RoaXMuX2lkICsgJy8nICsgbmFtZV07XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKCBzbmFwICkge1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBmb3JjZSAmJiAhaXMuZm4oY3R4W25hbWVdKSApXG4gICAgICAgICAgICAgICAgICAgICAgICBjdHhbbmFtZV0uZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3VudChuYW1lLCBzbmFwc2hvdCk7Ly8gcXVpZXRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIClcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX19taXhlZC5mb3JFYWNoKFxuICAgICAgICAgICAgY3R4ID0+IHtcbiAgICAgICAgICAgICAgICAhY3R4Ll9pc0xvY2FsSWQgJiYgY3R4LnJlc3RvcmUoc25hcHNob3QsIGZvcmNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX2NoaWxkU2NvcGVzLmZvckVhY2goXG4gICAgICAgICAgICBjdHggPT4ge1xuICAgICAgICAgICAgICAgICFjdHguX2lzTG9jYWxJZCAmJiBjdHgucmVzdG9yZShzbmFwc2hvdCwgZm9yY2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICBcbiAgICB9XG4gICAgXG4gICAgcGFyc2VSZWYoIF9yZWYgKSB7XG4gICAgICAgIGxldCByZWYgPSBfcmVmLnNwbGl0KCc6Jyk7XG4gICAgICAgIHJlZlswXSAgPSByZWZbMF0uc3BsaXQoJy4nKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHN0b3JlSWQ6IHJlZlswXVswXSxcbiAgICAgICAgICAgIHBhdGggICA6IHJlZlswXSxcbiAgICAgICAgICAgIGFsaWFzICA6IHJlZlsxXSB8fCByZWZbMF1bcmVmWzBdLmxlbmd0aCAtIDFdLFxuICAgICAgICAgICAgcmVmICAgIDogX3JlZlxuICAgICAgICB9O1xuICAgIH1cbiAgICBcbiAgICBkaXNwYXRjaCggYWN0aW9uLCBkYXRhICkge1xuICAgICAgICB0aGlzLl9fbWl4ZWQuZm9yRWFjaCgoIGN0eCApID0+IChjdHguZGlzcGF0Y2goYWN0aW9uLCBkYXRhKSkpO1xuICAgICAgICB0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC5kaXNwYXRjaChhY3Rpb24sIGRhdGEpO1xuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLl9fc2NvcGUpXG4gICAgICAgICAgICAgIC5mb3JFYWNoKFxuICAgICAgICAgICAgICAgICAgaWQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGlmICggIWlzLmZuKHRoaXMuX19zY29wZVtpZF0pIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fX3Njb3BlW2lkXS50cmlnZ2VyKGFjdGlvbiwgZGF0YSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBvbmNlKCdzdGFibGUnLCBjYilcbiAgICAgKiBAcGFyYW0gb2JqIHtSZWFjdC5Db21wb25lbnR8U3RvcmV8ZnVuY3Rpb24pXG4gICAgICogQHBhcmFtIGtleSB7c3RyaW5nfSBvcHRpb25hbCBrZXkgd2hlcmUgdG8gbWFwIHRoZSBwdWJsaWMgc3RhdGVcbiAgICAgKi9cbiAgICB0aGVuKCBjYiApIHtcbiAgICAgICAgaWYgKCB0aGlzLl9zdGFibGUgKVxuICAgICAgICAgICAgcmV0dXJuIGNiKG51bGwsIHRoaXMuZGF0YSk7XG4gICAgICAgIHRoaXMub25jZSgnc3RhYmxlJywgZSA9PiBjYihudWxsLCB0aGlzLmRhdGEpKTtcbiAgICB9XG4gICAgXG4gICAgXG4gICAgcmV0YWluU3RvcmVzKCBzdG9yZXMgPSBbXSwgcmVhc29uICkge1xuICAgICAgICBzdG9yZXMuZm9yRWFjaChcbiAgICAgICAgICAgIGlkID0+ICh0aGlzLnN0b3Jlc1tpZF0gJiYgdGhpcy5zdG9yZXNbaWRdLnJldGFpbiAmJiB0aGlzLnN0b3Jlc1tpZF0ucmV0YWluKHJlYXNvbikpXG4gICAgICAgIClcbiAgICB9XG4gICAgXG4gICAgZGlzcG9zZVN0b3Jlcyggc3RvcmVzID0gW10sIHJlYXNvbiApIHtcbiAgICAgICAgc3RvcmVzLmZvckVhY2goXG4gICAgICAgICAgICBpZCA9PiAodGhpcy5zdG9yZXNbaWRdICYmIHRoaXMuc3RvcmVzW2lkXS5kaXNwb3NlICYmIHRoaXMuc3RvcmVzW2lkXS5kaXNwb3NlKHJlYXNvbikpXG4gICAgICAgIClcbiAgICB9XG4gICAgXG4gICAgd2FpdCggcmVhc29uICkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwid2FpdFwiLCByZWFzb24pO1xuICAgICAgICB0aGlzLl9zdGFibGUgJiYgIXRoaXMuX19sb2Nrcy5hbGwgJiYgdGhpcy5lbWl0KFwidW5zdGFibGVcIiwgdGhpcyk7XG4gICAgICAgIHRoaXMuX3N0YWJsZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9fbG9ja3MuYWxsKys7XG4gICAgICAgIGlmICggcmVhc29uICkge1xuICAgICAgICAgICAgdGhpcy5fX2xvY2tzW3JlYXNvbl0gPSB0aGlzLl9fbG9ja3NbcmVhc29uXSB8fCAwO1xuICAgICAgICAgICAgdGhpcy5fX2xvY2tzW3JlYXNvbl0rKztcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICByZWxlYXNlKCByZWFzb24gKSB7XG4gICAgICAgIFxuICAgICAgICBpZiAoIHJlYXNvbiApIHtcbiAgICAgICAgICAgIGlmICggdGhpcy5fX2xvY2tzW3JlYXNvbl0gPT0gMCApXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlJlbGVhc2UgbW9yZSB0aGFuIGxvY2tpbmcgIVwiLCByZWFzb24pO1xuICAgICAgICAgICAgdGhpcy5fX2xvY2tzW3JlYXNvbl0gPSB0aGlzLl9fbG9ja3NbcmVhc29uXSB8fCAwO1xuICAgICAgICAgICAgdGhpcy5fX2xvY2tzW3JlYXNvbl0tLTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoICFyZWFzb24gJiYgdGhpcy5fX2xvY2tzLmFsbCA9PSAwIClcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJSZWxlYXNlIG1vcmUgdGhhbiBsb2NraW5nICFcIik7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9fbG9ja3MuYWxsLS07XG4gICAgICAgIGlmICggIXRoaXMuX19sb2Nrcy5hbGwgKSB7XG4gICAgICAgICAgICB0aGlzLl9zdGFiaWxpemVyVE0gJiYgY2xlYXJUaW1lb3V0KHRoaXMuX3N0YWJpbGl6ZXJUTSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMuX3N0YWJpbGl6ZXJUTSA9IHNldFRpbWVvdXQoXG4gICAgICAgICAgICAgICAgZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3N0YWJpbGl6ZXJUTSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIGlmICggdGhpcy5fX2xvY2tzLmFsbCApXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wcm9wYWdUTSAmJiBjbGVhclRpbWVvdXQodGhpcy5fcHJvcGFnVE0pO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc3RhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KFwic3RhYmxlXCIsIHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgIXRoaXMuZGVhZCAmJiB0aGlzLl9wcm9wYWcoKTsvLyBzdGFiaWxpdHkgY2FuIGluZHVjZSBkZXN0cm95XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG4gICAgXG4gICAgcHJvcGFnKCkge1xuICAgICAgICB0aGlzLl9wcm9wYWdUTSAmJiBjbGVhclRpbWVvdXQodGhpcy5fcHJvcGFnVE0pO1xuICAgICAgICB0aGlzLl9wcm9wYWdUTSA9IHNldFRpbWVvdXQoXG4gICAgICAgICAgICBlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLl9wcm9wYWdUTSA9IG51bGw7XG4gICAgICAgICAgICAgICAgdGhpcy5fcHJvcGFnKClcbiAgICAgICAgICAgIH0sIDJcbiAgICAgICAgKTtcbiAgICB9XG4gICAgXG4gICAgX3Byb3BhZygpIHtcbiAgICAgICAgaWYgKCB0aGlzLl9mb2xsb3dlcnMubGVuZ3RoIClcbiAgICAgICAgICAgIHRoaXMuX2ZvbGxvd2Vycy5mb3JFYWNoKCggeyAwOiBvYmosIDE6IGtleSwgMjogYXMsIDM6IGxhc3RSZXZzLCAzOiByZW1hcHMgfSApID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHRoaXMuZ2V0VXBkYXRlcyhsYXN0UmV2cyk7XG4gICAgICAgICAgICAgICAgaWYgKCAhZGF0YSApIHJldHVybjtcbiAgICAgICAgICAgICAgICBpZiAoIHR5cGVvZiBvYmogIT0gXCJmdW5jdGlvblwiICkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIGFzICkgb2JqLnNldFN0YXRlKHsgW2FzXTogZGF0YSB9KTtcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBvYmouc2V0U3RhdGUoZGF0YSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBvYmooZGF0YSwgbGFzdFJldnMgJiYgWy4uLmxhc3RSZXZzXSB8fCBcIm5vIHJldnNcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGxhc3RSZXZzICYmXG4gICAgICAgICAgICAgICAgLy8ga2V5LmZvckVhY2goaWQgPT4gKGxhc3RSZXZzW2lkXSA9IHRoaXMuc3RvcmVzW2lkXSAmJiB0aGlzLnN0b3Jlc1tpZF0uX3JldiB8fCAwKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5lbWl0KFwidXBkYXRlXCIsIHRoaXMuZ2V0VXBkYXRlcygpKTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogaXMgc3RhYmxlXG4gICAgICogQHJldHVybnMgYm9vbFxuICAgICAqL1xuICAgIGlzU3RhYmxlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc3RhYmxlO1xuICAgIH1cbiAgICBcbiAgICAvL3NlcmlhbGl6ZUNoaWxkcyggY2hpbGRzID0gW10gKSB7XG4gICAgLy9cbiAgICAvL31cbiAgICBcbiAgICBfYWRkQ2hpbGQoIGN0eCApIHtcbiAgICAgICAgdGhpcy5fY2hpbGRTY29wZXMucHVzaChjdHgpO1xuICAgICAgICBsZXQgbGlzdHMgICAgID0ge1xuICAgICAgICAgICAgICAgICdzdGFibGUnICAgICAgOiBzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdW5TdGFibGVDaGlsZHMtLTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCAhdGhpcy5fdW5TdGFibGVDaGlsZHMgKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KFwic3RhYmxlVHJlZVwiLCB0aGlzKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgJ3Vuc3RhYmxlJyAgICA6IHMgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl91blN0YWJsZUNoaWxkcysrO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIDEgPT0gdGhpcy5fdW5TdGFibGVDaGlsZHMgKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KFwidW5zdGFibGVUcmVlXCIsIHRoaXMpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAnc3RhYmxlVHJlZScgIDogcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3VuU3RhYmxlQ2hpbGRzLS07XG4gICAgICAgICAgICAgICAgICAgIGlmICggIXRoaXMuX3VuU3RhYmxlQ2hpbGRzIClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdChcInN0YWJsZVRyZWVcIiwgdGhpcylcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICd1bnN0YWJsZVRyZWUnOiBzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdW5TdGFibGVDaGlsZHMrKztcbiAgICAgICAgICAgICAgICAgICAgaWYgKCAxID09IHRoaXMuX3VuU3RhYmxlQ2hpbGRzIClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdChcInVuc3RhYmxlVHJlZVwiLCB0aGlzKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgJ2Rlc3Ryb3knICAgICA6IGN0eCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICggY3R4Ll91blN0YWJsZUNoaWxkcyApXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl91blN0YWJsZUNoaWxkcy0tO1xuICAgICAgICAgICAgICAgICAgICBpZiAoICFjdHguaXNTdGFibGUoKSApXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl91blN0YWJsZUNoaWxkcy0tO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpZiAoICF0aGlzLl91blN0YWJsZUNoaWxkcyApXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXQoXCJzdGFibGVUcmVlXCIsIHRoaXMpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHdhc1N0YWJsZSA9IHRoaXMuX3VuU3RhYmxlQ2hpbGRzO1xuICAgICAgICAvLyFjdHguaXNTdGFibGUoKSAmJiBjb25zb2xlLndhcm4oJ2FkZCB1bnN0YWJsZSBjaGlsZCcpO1xuICAgICAgICAhY3R4LmlzU3RhYmxlKCkgJiYgdGhpcy5fdW5TdGFibGVDaGlsZHMrKztcbiAgICAgICAgY3R4Ll91blN0YWJsZUNoaWxkcyAmJiB0aGlzLl91blN0YWJsZUNoaWxkcysrO1xuICAgICAgICB0aGlzLl9jaGlsZFNjb3Blc0xpc3QucHVzaChsaXN0cyk7XG4gICAgICAgIGlmICggIXdhc1N0YWJsZSAmJiB0aGlzLl91blN0YWJsZUNoaWxkcyApXG4gICAgICAgICAgICB0aGlzLmVtaXQoXCJ1bnN0YWJsZVRyZWVcIiwgdGhpcylcbiAgICAgICAgY3R4Lm9uKGxpc3RzKTtcbiAgICB9XG4gICAgXG4gICAgX3JtQ2hpbGQoIGN0eCApIHtcbiAgICAgICAgbGV0IGkgICAgICAgICA9IHRoaXMuX2NoaWxkU2NvcGVzLmluZGV4T2YoY3R4KSxcbiAgICAgICAgICAgIHdhc1N0YWJsZSA9IHRoaXMuX3VuU3RhYmxlQ2hpbGRzO1xuICAgICAgICBpZiAoIGkgIT0gLTEgKSB7XG4gICAgICAgICAgICB0aGlzLl9jaGlsZFNjb3Blcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAhY3R4LmlzU3RhYmxlKCkgJiYgdGhpcy5fdW5TdGFibGVDaGlsZHMtLTtcbiAgICAgICAgICAgIGN0eC5fdW5TdGFibGVDaGlsZHMgJiYgdGhpcy5fdW5TdGFibGVDaGlsZHMtLTtcbiAgICAgICAgICAgIGN0eC51bih0aGlzLl9jaGlsZFNjb3Blc0xpc3Quc3BsaWNlKGksIDEpWzBdKTtcbiAgICAgICAgICAgIGlmICggd2FzU3RhYmxlICYmICF0aGlzLl91blN0YWJsZUNoaWxkcyApXG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0KFwic3RhYmxlVHJlZVwiKVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIHJldGFpbiggcmVhc29uICkge1xuICAgICAgICB0aGlzLl9fcmV0YWlucy5hbGwrKztcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcInJldGFpblwiLCB0aGlzLl9pZCwgcmVhc29uKTtcbiAgICAgICAgaWYgKCByZWFzb24gKSB7XG4gICAgICAgICAgICB0aGlzLl9fcmV0YWluc1tyZWFzb25dID0gdGhpcy5fX3JldGFpbnNbcmVhc29uXSB8fCAwO1xuICAgICAgICAgICAgdGhpcy5fX3JldGFpbnNbcmVhc29uXSsrO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGRpc3Bvc2UoIHJlYXNvbiApIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcImRpc3Bvc2VcIiwgdGhpcy5faWQsIHJlYXNvbik7XG4gICAgICAgIGlmICggcmVhc29uICkge1xuICAgICAgICAgICAgaWYgKCAhdGhpcy5fX3JldGFpbnNbcmVhc29uXSApXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRGlzcG9zZSBtb3JlIHRoYW4gcmV0YWluaW5nIDogXCIgKyByZWFzb24pO1xuICAgICAgICAgICAgdGhpcy5fX3JldGFpbnNbcmVhc29uXS0tO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAoICF0aGlzLl9fcmV0YWlucy5hbGwgKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRGlzcG9zZSBtb3JlIHRoYW4gcmV0YWluaW5nICFcIik7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9fcmV0YWlucy5hbGwtLTtcbiAgICAgICAgXG4gICAgICAgIGlmICggIXRoaXMuX19yZXRhaW5zLmFsbCApIHtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJkaXNwb3NlIGRvIGRlc3Ryb3kgXCIsIHRoaXMuX2lkLCB0aGlzLl9wZXJzaXN0ZW5jZVRtKTtcbiAgICAgICAgICAgIGlmICggdGhpcy5fcGVyc2lzdGVuY2VUbSApIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9kZXN0cm95VE0gJiYgY2xlYXJUaW1lb3V0KHRoaXMuX2Rlc3Ryb3lUTSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fZGVzdHJveVRNID0gc2V0VGltZW91dChcbiAgICAgICAgICAgICAgICAgICAgZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRoZW4ocyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIXRoaXMuX19yZXRhaW5zLmFsbCAmJiB0aGlzLmRlc3Ryb3koKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3BlcnNpc3RlbmNlVG1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy50aGVuKHMgPT4gKCF0aGlzLl9fcmV0YWlucy5hbGwgJiYgdGhpcy5kZXN0cm95KCkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBvcmRlciBkZXN0cm95IG9mIGxvY2FsIHN0b3Jlc1xuICAgICAqL1xuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIGxldCBjdHggICA9IHRoaXMuX19zY29wZTtcbiAgICAgICAgLy9jb25zb2xlLndhcm4oXCJkZXN0cm95XCIsIHRoaXMuX2lkKTtcbiAgICAgICAgdGhpcy5kZWFkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5lbWl0KFwiZGVzdHJveVwiLCB0aGlzKTtcbiAgICAgICAgT2JqZWN0LmtleXMoXG4gICAgICAgICAgICB0aGlzLl9fbGlzdGVuaW5nXG4gICAgICAgICkuZm9yRWFjaChcbiAgICAgICAgICAgIGlkID0+IHRoaXMuX19zY29wZVtpZF0ucmVtb3ZlTGlzdGVuZXIodGhpcy5fX2xpc3RlbmluZ1tpZF0pXG4gICAgICAgICk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9zdGFiaWxpemVyVE0gJiYgY2xlYXJUaW1lb3V0KHRoaXMuX3N0YWJpbGl6ZXJUTSk7XG4gICAgICAgIHRoaXMuX3Byb3BhZ1RNICYmIGNsZWFyVGltZW91dCh0aGlzLl9wcm9wYWdUTSk7XG4gICAgICAgIHRoaXMuX19saXN0ZW5pbmcgPSB7fTtcbiAgICAgICAgXG4gICAgICAgIGlmICggIXRoaXMuX2lzTG9jYWxJZCApXG4gICAgICAgICAgICBkZWxldGUgb3BlblNjb3Blc1t0aGlzLl9pZF07XG4gICAgICAgIHRoaXMuX2ZvbGxvd2Vycy5sZW5ndGggPSAwO1xuICAgICAgICBcbiAgICAgICAgd2hpbGUgKCB0aGlzLl9fbWl4ZWRMaXN0Lmxlbmd0aCApIHtcbiAgICAgICAgICAgIHRoaXMuX19taXhlZFswXS5yZW1vdmVMaXN0ZW5lcih0aGlzLl9fbWl4ZWRMaXN0LnNoaWZ0KCkpO1xuICAgICAgICAgICAgdGhpcy5fX21peGVkLnNoaWZ0KCkuZGlzcG9zZShcIm1peGVkVG9cIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCB0aGlzLl9fcGFyZW50TGlzdCApIHtcbiAgICAgICAgICAgIHRoaXMucGFyZW50Ll9ybUNoaWxkKHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5wYXJlbnQucmVtb3ZlTGlzdGVuZXIodGhpcy5fX3BhcmVudExpc3QpO1xuICAgICAgICAgICAgdGhpcy5wYXJlbnQuZGlzcG9zZShcImlzTXlQYXJlbnRcIik7XG4gICAgICAgICAgICB0aGlzLl9fcGFyZW50TGlzdCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgZm9yICggbGV0IGtleSBpbiBjdHggKVxuICAgICAgICAgICAgaWYgKCAhaXMuZm4oY3R4W2tleV0pICkge1xuICAgICAgICAgICAgICAgICFjdHhba2V5XS5fYXV0b0Rlc3Ryb3kgJiYgY3R4W2tleV0uZGlzcG9zZShcInNjb3BlZFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgdGhpcy5fX21peGVkID0gdGhpcy5kYXRhID0gdGhpcy5zdGF0ZSA9IHRoaXMuc2NvcGUgPSB0aGlzLnN0b3JlcyA9IG51bGw7XG4gICAgICAgIHRoaXMuX2RhdGEgPSB0aGlzLl9zdGF0ZSA9IHRoaXMuX3N0b3JlcyA9IG51bGw7XG4gICAgICAgIFxuICAgICAgICBcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1Njb3BlLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaXNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJpc1wiXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpICAyMDE4IFdpc2UgV2lsZCBXZWIgLlxuICpcbiAqICBNSVQgTGljZW5zZVxuICogIFxuICogIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqICBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiAgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqICBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqICBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICogIFxuICogIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuICogIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKiAgXG4gKiAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqICBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG4gKiAgU09GVFdBUkUuXG4gKiAgXG4gKiBAYXV0aG9yIDogTmF0aGFuYWVsIEJyYXVuXG4gKiBAY29udGFjdCA6IGNhaXBpbGFic0BnbWFpbC5jb21cbiAqL1xudmFyIGlzID0gcmVxdWlyZSgnaXMnKTtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVtaXR0ZXIge1xuICAgIF9ldmVudHMgPSB7fTtcbiAgICBcbiAgICBvbiggZXZ0LCBjYiApIHtcbiAgICAgICAgaWYgKCAhaXMuc3RyaW5nKGV2dCkgJiYgZXZ0IClcbiAgICAgICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhldnQpLmZvckVhY2goayA9PiB0aGlzLm9uKGssIGV2dFtrXSkpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fZXZlbnRzW2V2dF0gPSB0aGlzLl9ldmVudHNbZXZ0XSB8fCBbXTtcbiAgICAgICAgdGhpcy5fZXZlbnRzW2V2dF0ucHVzaChjYik7XG4gICAgICAgIFxuICAgIH1cbiAgICBcbiAgICB1biggZXZ0LCBjYiApIHtcbiAgICAgICAgaWYgKCAhaXMuc3RyaW5nKGV2dCkgJiYgZXZ0IClcbiAgICAgICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhldnQpLmZvckVhY2goayA9PiB0aGlzLnVuKGssIGV2dFtrXSkpO1xuICAgICAgICBcbiAgICAgICAgaWYgKCAhdGhpcy5fZXZlbnRzW2V2dF0gKSByZXR1cm47XG4gICAgICAgIHZhciBpID0gdGhpcy5fZXZlbnRzW2V2dF0uaW5kZXhPZihjYik7XG4gICAgICAgIHRoaXMuX2V2ZW50c1tldnRdLnNwbGljZShpLCAxKTtcbiAgICB9XG4gICAgXG4gICAgZW1pdCggZXZ0LCAuLi5hcmd6ICkge1xuICAgICAgICBpZiAoICF0aGlzLl9ldmVudHNbZXZ0XSApIHJldHVybjtcbiAgICAgICAgbGV0IGxpc3RzID0gWy4uLnRoaXMuX2V2ZW50c1tldnRdXTtcbiAgICAgICAgXG4gICAgICAgIGZvciAoIHZhciBpID0gMDsgaSA8IGxpc3RzLmxlbmd0aDsgaSsrIClcbiAgICAgICAgICAgIGxpc3RzW2ldKC4uLmFyZ3opXG4gICAgfVxuICAgIFxuICAgIGFkZExpc3RlbmVyKCkge1xuICAgICAgICB0aGlzLm9uKC4uLmFyZ3VtZW50cyk7XG4gICAgfVxuICAgIFxuICAgIHJlbW92ZUxpc3RlbmVyKCkge1xuICAgICAgICB0aGlzLnVuKC4uLmFyZ3VtZW50cyk7XG4gICAgfVxuICAgIFxuICAgIHJlbW92ZUFsbExpc3RlbmVycygpIHtcbiAgICAgICAgdGhpcy5fZXZlbnRzID0ge307XG4gICAgfVxuICAgIFxuICAgIG9uY2UoIGV2dCwgY2IgKSB7XG4gICAgICAgIGxldCBmbjtcbiAgICAgICAgdGhpcy5vbihldnQsIGZuID0gKCAuLi5hcmd6ICkgPT4ge1xuICAgICAgICAgICAgdGhpcy51bihldnQsIGZuKTtcbiAgICAgICAgICAgIGNiKC4uLmFyZ3opXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBcbiAgICBcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvRW1pdHRlci5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNob3J0aWRcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJzaG9ydGlkXCJcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcbiAqIENvcHlyaWdodCAoYykgIDIwMTggV2lzZSBXaWxkIFdlYiAuXG4gKlxuICogIE1JVCBMaWNlbnNlXG4gKlxuICogIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqICBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiAgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqICBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqICBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqICBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcbiAqICBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqICBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiAgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiAgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiAgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiAgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcbiAqICBTT0ZUV0FSRS5cbiAqXG4gKiBAYXV0aG9yIDogTmF0aGFuYWVsIEJyYXVuXG4gKiBAY29udGFjdCA6IGNhaXBpbGFic0BnbWFpbC5jb21cbiAqL1xuXG4vKipcbiAqIFVsdHJhIHNjYWxhYmxlIHN0YXRlLWF3YXJlIHN0b3JlXG4gKlxuICogQHRvZG8gOiBsb3Qgb2Ygb3B0aW1zLi4uXG4gKi9cblxudmFyIGlzICAgICAgICAgICAgPSByZXF1aXJlKCdpcycpLFxuICAgIFNjb3BlICAgICAgICAgPSByZXF1aXJlKCcuL1Njb3BlJyksXG4gICAgRXZlbnRFbWl0dGVyICA9IHJlcXVpcmUoJy4vRW1pdHRlcicpLFxuICAgIFRhc2tTZXF1ZW5jZXIgPSByZXF1aXJlKCcuL1Rhc2tTZXF1ZW5jZXInKSxcbiAgICBzaG9ydGlkICAgICAgID0gcmVxdWlyZSgnc2hvcnRpZCcpLFxuICAgIG9ialByb3RvICAgICAgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Yoe30pO1xuXG4vKipcbiAqIEBjbGFzcyBTdG9yZVxuICovXG5jbGFzcyBTdG9yZSBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gICAgXG4gICAgc3RhdGljIHVzZSAgICAgICAgICAgICAgICAgID0gW107Ly8gb3ZlcnJpZGFibGUgbGlzdCBvZiBzb3VyY2Ugc3RvcmVzXG4gICAgc3RhdGljIGZvbGxvdzsvLyBvdmVycmlkYWJsZSBsaXN0IG9mIHN0b3JlIHRoYXQgd2lsbCBhbGxvdyBwdXNoIGlmIHVwZGF0ZWRcbiAgICBzdGF0aWMgcmVxdWlyZTtcbiAgICBzdGF0aWMgc3RhdGljU2NvcGUgICAgICAgICAgPSBuZXcgU2NvcGUoe30sIHsgaWQ6IFwic3RhdGljXCIgfSk7XG4gICAgc3RhdGljIHN0YXRlICAgICAgICAgICAgICAgID0gdW5kZWZpbmVkOy8vIGRlZmF1bHQgc3RhdGVcbiAgICAvKipcbiAgICAgKiBpZiByZXRhaW4gZ29lcyB0byAwIDpcbiAgICAgKiBmYWxzZSB0byBub3QgZGVzdHJveSxcbiAgICAgKiAwIHRvIHN5bmMgYXV0byBkZXN0cm95XG4gICAgICogTXMgdG8gYXV0b2Rlc3Ryb3kgYWZ0ZXIgdG0gbXMgaWYgbm8gcmV0YWluIGhhcyBiZWVuIGNhbGxlZFxuICAgICAqIEB0eXBlIHtib29sZWFufEludH1cbiAgICAgKi9cbiAgICAgICAgICAgc3RhdGljIHBlcnNpc3RlbmNlVG0gPSBmYWxzZTtcbiAgICBcbiAgICAvKipcbiAgICAgKiBnZXQgYSBCdWlsZGVyLWtleSBwYWlyIGZvciBTdG9yZTo6bWFwXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICAgKiBAcmV0dXJucyB7e3N0b3JlOiBTdG9yZSwgbmFtZTogKn19XG4gICAgICovXG4gICAgc3RhdGljIGFzKCBuYW1lICkge1xuICAgICAgICByZXR1cm4geyBzdG9yZTogdGhpcywgbmFtZSB9O1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBNYXAgYWxsIG5hbWVkIHN0b3JlcyBpbiB7a2V5c30gdG8gdGhlIHtvYmplY3R9J3Mgc3RhdGVcbiAgICAgKiBIb29rIGNvbXBvbmVudFdpbGxVbm1vdW50IChmb3IgcmVhY3QgY29tcCkgb3IgZGVzdHJveSB0byB1bkJpbmQgdGhlbSBhdXRvbWF0aWNhbGx5XG4gICAgICogQHN0YXRpY1xuICAgICAqIEBwYXJhbSBvYmplY3Qge09iamVjdH0gdGFyZ2V0IHN0YXRlIGF3YXJlIG9iamVjdCAoUmVhY3QuQ29tcG9uZW50fFN0b3JlfC4uLilcbiAgICAgKiBAcGFyYW0ga2V5cyB7QXJyYXl9IEV4IDogW1wic2Vzc2lvblwiLCBcIm90aGVyU3RhdGljTmFtZWRTdG9yZTprZXlcIiwgc3RvcmUuYXMoJ2Fub3RoZXJLZXknKV1cbiAgICAgKi9cbiAgICBzdGF0aWMgbWFwKCBjb21wb25lbnQsIGtleXMsIHNjb3BlLCBvcmlnaW4sIHNldEluaXRpYWwgPSBmYWxzZSApIHtcbiAgICAgICAgdmFyIHRhcmdldFJldnMgICAgID0gY29tcG9uZW50Ll9yZXZzIHx8IHt9O1xuICAgICAgICB2YXIgdGFyZ2V0U2NvcGUgICAgPSBjb21wb25lbnQuc3RvcmVzIHx8IChjb21wb25lbnQuc3RvcmVzID0ge30pO1xuICAgICAgICB2YXIgaW5pdGlhbE91dHB1dHMgPSB7fTtcbiAgICAgICAga2V5cyAgICAgICAgICAgICAgID0gaXMuYXJyYXkoa2V5cykgPyBbLi4ua2V5c10gOiBba2V5c107XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgc2NvcGUgPSBzY29wZSB8fCBTdG9yZS5zdGF0aWNTY29wZTtcbiAgICAgICAgXG4gICAgICAgIGtleXMgPSBrZXlzLmZpbHRlcihcbiAgICAgICAgICAgIC8vIEB0b2RvIDogdXNlIHF1ZXJ5IHJlZnNcbiAgICAgICAgICAgIC8vIChzdG9yZSkoXFwuc3RvcmUpKihcXFsoXFwqfChwcm9wcylcXHcrKSspXFxdKT8oXFw6YWxpYXMpXG4gICAgICAgICAgICAoIGtleSApID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoICFrZXkgKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJOb3QgYSBtYXBwYWJsZSBzdG9yZSBpdGVtICdcIiArIGtleSArIFwiJyBpbiBcIiArIG9yaWdpbiArICcgISEnKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZXQgbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgYWxpYXMsXG4gICAgICAgICAgICAgICAgICAgIHBhdGgsXG4gICAgICAgICAgICAgICAgICAgIHN0b3JlO1xuICAgICAgICAgICAgICAgIGlmICgga2V5LnN0b3JlICYmIGtleS5uYW1lICkge1xuICAgICAgICAgICAgICAgICAgICBhbGlhcyA9IG5hbWUgPSBrZXkubmFtZTtcbiAgICAgICAgICAgICAgICAgICAgc3RvcmUgPSBrZXkuc3RvcmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKCBpcy5mbihrZXkpICkge1xuICAgICAgICAgICAgICAgICAgICBuYW1lID0gYWxpYXMgPSBrZXkubmFtZSB8fCBrZXkuZGVmYXVsdE5hbWU7XG4gICAgICAgICAgICAgICAgICAgIHN0b3JlID0ga2V5O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAga2V5ICAgPSBrZXkubWF0Y2goLyhbXFx3X10rKSgoPzpcXC5bXFx3X10rKSopKD86XFw6KFtcXHdfXSspKT8vKTtcbiAgICAgICAgICAgICAgICAgICAgbmFtZSAgPSBrZXlbMV07XG4gICAgICAgICAgICAgICAgICAgIHBhdGggID0ga2V5WzJdICYmIGtleVsyXS5zdWJzdHIoMSk7XG4gICAgICAgICAgICAgICAgICAgIHN0b3JlID0gc2NvcGUuc3RvcmVzW2tleVsxXV07XG4gICAgICAgICAgICAgICAgICAgIGFsaWFzID0ga2V5WzNdIHx8IHBhdGggJiYgcGF0aC5tYXRjaCgvKFteXFwuXSopJC8pWzBdIHx8IGtleVsxXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKCB0YXJnZXRSZXZzW25hbWVdICkgcmV0dXJuIGZhbHNlOy8vIGlnbm9yZSBkYmwgdXNlcyBmb3Igbm93XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKCAhc3RvcmUgKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJOb3QgYSBtYXBwYWJsZSBzdG9yZSBpdGVtICdcIiArIG5hbWUgKyBcIi9cIiArIGFsaWFzICsgXCInIGluIFwiICsgb3JpZ2luICsgJyAhIScsIHN0b3JlKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICggaXMuZm4oc3RvcmUpICkge1xuICAgICAgICAgICAgICAgICAgICBzY29wZS5fbW91bnQobmFtZSlcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHNjb3BlLnN0b3Jlc1tuYW1lXS5iaW5kKGNvbXBvbmVudCwgYWxpYXMsIHNldEluaXRpYWwsIHBhdGgpO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHN0b3JlLmJpbmQoY29tcG9uZW50LCBhbGlhcywgc2V0SW5pdGlhbCwgcGF0aCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIGdpdmUgaW5pdGlhbCBzdG9yZSB3ZWlnaHQgYmFzaW5nIHNvdXJjZXNcbiAgICAgICAgICAgICAgICBjb21wb25lbnQuX3NvdXJjZXMucHVzaCguLi5zY29wZS5zdG9yZXNbbmFtZV0uX3NvdXJjZXMpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHRhcmdldFJldnNbYWxpYXNdID0gdGFyZ2V0UmV2c1thbGlhc10gfHwgdHJ1ZTtcbiAgICAgICAgICAgICAgICAhdGFyZ2V0U2NvcGVbbmFtZV0gJiYgKHRhcmdldFNjb3BlW25hbWVdID0gc2NvcGUuc3RvcmVzW25hbWVdKTtcbiAgICAgICAgICAgICAgICBpZiAoIHNjb3BlLnN0b3Jlc1tuYW1lXS5oYXNPd25Qcm9wZXJ0eSgnZGF0YScpIClcbiAgICAgICAgICAgICAgICAgICAgaW5pdGlhbE91dHB1dHNbbmFtZV0gPSBzY29wZS5kYXRhW25hbWVdO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICBcbiAgICAgICAgLy8gLi4uXG4gICAgICAgIHZhciBtaXhlZENXVW5tb3VudCxcbiAgICAgICAgICAgIHVuTW91bnRLZXkgPSBjb21wb25lbnQuaXNSZWFjdENvbXBvbmVudCA/IFwiY29tcG9uZW50V2lsbFVubW91bnRcIiA6IFwiZGVzdHJveVwiO1xuICAgICAgICBcbiAgICAgICAgaWYgKCBjb21wb25lbnQuaGFzT3duUHJvcGVydHkodW5Nb3VudEtleSkgKSB7XG4gICAgICAgICAgICBtaXhlZENXVW5tb3VudCA9IGNvbXBvbmVudFt1bk1vdW50S2V5XTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgY29tcG9uZW50W3VuTW91bnRLZXldID0gKCAuLi5hcmd6ICkgPT4ge1xuICAgICAgICAgICAgZGVsZXRlIGNvbXBvbmVudFt1bk1vdW50S2V5XTtcbiAgICAgICAgICAgIGlmICggbWl4ZWRDV1VubW91bnQgKVxuICAgICAgICAgICAgICAgIGNvbXBvbmVudFt1bk1vdW50S2V5XSA9IG1peGVkQ1dVbm1vdW50O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBrZXlzLm1hcChcbiAgICAgICAgICAgICAgICAoIGtleSApID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlhcywgcGF0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIGtleS5zdG9yZSAmJiBrZXkubmFtZSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWFzID0gbmFtZSA9IGtleS5uYW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmUgPSBrZXkuc3RvcmU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoIGlzLmZuKGtleSkgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lID0gYWxpYXMgPSBrZXkubmFtZSB8fCBrZXkuZGVmYXVsdE5hbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9yZSA9IHNjb3BlLnN0b3Jlc1tuYW1lXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleSAgID0ga2V5Lm1hdGNoKC8oW1xcd19dKykoKD86XFwuW1xcd19dKykqKSg/OlxcOihbXFx3X10rKSk/Lyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lICA9IGtleVsxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGggID0ga2V5WzJdICYmIGtleVsyXS5zdWJzdHIoMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9yZSA9IHNjb3BlLnN0b3Jlc1trZXlbMV1dO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpYXMgPSBrZXlbM10gfHwgcGF0aCAmJiBwYXRoLm1hdGNoKC8oW15cXC5dKikkLylbMF0gfHwga2V5WzFdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBzdG9yZSAmJiAhaXMuZm4oc3RvcmUpICYmIHN0b3JlLnVuQmluZChjb21wb25lbnQsIGFsaWFzLCBwYXRoKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICByZXR1cm4gY29tcG9uZW50W3VuTW91bnRLZXldICYmIGNvbXBvbmVudFt1bk1vdW50S2V5XSguLi5hcmd6KTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGluaXRpYWxPdXRwdXRzO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3Rvciwgd2lsbCBidWlsZCBhIHJlc2NvcGUgc3RvcmVcbiAgICAgKlxuICAgICAqIChzY29wZSwge3JlcXVpcmUsdXNlLGFwcGx5LHN0YXRlLCBkYXRhfSlcbiAgICAgKiAoc2NvcGUpXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc2NvcGUge29iamVjdH0gc2NvcGUgd2hlcmUgdG8gZmluZCB0aGUgb3RoZXIgc3RvcmVzIChkZWZhdWx0IDogc3RhdGljIHN0YXRpY1Njb3BlIClcbiAgICAgKiBAcGFyYW0ga2V5cyB7QXJyYXl9IChwYXNzZWQgdG8gU3RvcmU6Om1hcCkgRXggOiBbXCJzZXNzaW9uXCIsIFwib3RoZXJOYW1lZFN0b3JlOmtleVwiLCBvdGhlclN0b3JlLmFzKFwib3RoZXJLZXlcIildXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHZhciBhcmd6ICAgICAgICAgPSBbLi4uYXJndW1lbnRzXSxcbiAgICAgICAgICAgIF9zdGF0aWMgICAgICA9IHRoaXMuY29uc3RydWN0b3IsXG4gICAgICAgICAgICBzY29wZSAgICAgICAgPSBhcmd6WzBdIGluc3RhbmNlb2YgU2NvcGVcbiAgICAgICAgICAgICAgICA/IGFyZ3ouc2hpZnQoKVxuICAgICAgICAgICAgICAgIDogX3N0YXRpYy5zY29wZSA/IFNjb3BlLmdldFNjb3BlKF9zdGF0aWMuc2NvcGUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBpcy5zdHJpbmcoYXJnelswXSlcbiAgICAgICAgICAgICAgICAgICAgICA/IFNjb3BlLmdldFNjb3BlKGFyZ3ouc2hpZnQoKSlcbiAgICAgICAgICAgICAgICAgICAgICA6IF9zdGF0aWMuc3RhdGljU2NvcGUsXG4gICAgICAgICAgICBjZmcgICAgICAgICAgPSBhcmd6WzBdICYmICFpcy5hcnJheShhcmd6WzBdKSAmJiAhaXMuc3RyaW5nKGFyZ3pbMF0pID8gYXJnei5zaGlmdCgpIDoge30sXG4gICAgICAgICAgICBuYW1lICAgICAgICAgPSBpcy5zdHJpbmcoYXJnelswXSkgPyBhcmd6WzBdIDogY2ZnLm5hbWUgfHwgX3N0YXRpYy5uYW1lLFxuICAgICAgICAgICAgd2F0Y2hzICAgICAgID0gaXMuYXJyYXkoYXJnelswXSkgPyBhcmd6LnNoaWZ0KCkgOiBjZmcudXNlIHx8IFtdLC8vIHdhdGNocyBuZWVkIHRvIGJlIGRlZmluZWQgYWZ0ZXIgYWxsIHRoZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHN0b3JlIGFyZSByZWdpc3RlcmVkIDogc28gd2UgY2FuJ3QgZGVhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdpdGggYW55IFwic3RhdGljIHVzZVwiIGF1dG9tYXRpY2x5XG4gICAgICAgICAgICBhcHBseSAgICAgICAgPSBpcy5mbihhcmd6WzBdKSA/IGFyZ3ouc2hpZnQoKSA6IGNmZy5hcHBseSB8fCBudWxsLFxuICAgICAgICAgICAgaW5pdGlhbFN0YXRlID0gX3N0YXRpYy5zdGF0ZSB8fCBfc3RhdGljLmluaXRpYWxTdGF0ZSxcbiAgICAgICAgICAgIGFwcGxpZWQ7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl91aWQgPSBjZmcuX3VpZCB8fCBzaG9ydGlkLmdlbmVyYXRlKCk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9fcmV0YWlucyAgICA9IHsgYWxsOiAwIH07XG4gICAgICAgIHRoaXMuX19sb2NrcyAgICAgID0geyBhbGw6IDAgfTtcbiAgICAgICAgdGhpcy5fb25TdGFiaWxpemUgPSBbXTtcbiAgICAgICAgXG4gICAgICAgIC8vIGF1dG9EZXN0cm95VG1cbiAgICAgICAgdGhpcy5fYXV0b0Rlc3Ryb3kgICA9ICEhdGhpcy5fcGVyc2lzdGVuY2VUbTtcbiAgICAgICAgdGhpcy5fcGVyc2lzdGVuY2VUbSA9IGNmZy5wZXJzaXN0ZW5jZVRtIHx8IF9zdGF0aWMucGVyc2lzdGVuY2VUbSB8fCAoY2ZnLmF1dG9EZXN0cm95IHx8IF9zdGF0aWMuYXV0b0Rlc3Ryb3kpICYmIDU7XG4gICAgICAgIC8vXG4gICAgICAgIC8vaWYgKCBpcy5zdHJpbmcoYXJnelswXSkgKSB7XG4gICAgICAgIC8vICAgIGlmICggc2NvcGUuX19zY29wZVtuYW1lXSApXG4gICAgICAgIC8vICAgICAgICBjb25zb2xlLndhcm4oXCJSZVNjb3BlOiBPdmVyd3JpdGluZyBhbiBleGlzdGluZyBzdGF0aWMgbmFtZWQgc3RvcmUgKCAlcyApICEhXCIsIG5hbWUpO1xuICAgICAgICAvLyAgICBzY29wZS5fX3Njb3BlW25hbWVdID0gdGhpcztcbiAgICAgICAgLy99XG4gICAgICAgIFxuICAgICAgICBpZiAoIGNmZyAmJiBjZmcub24gKSB7XG4gICAgICAgICAgICB0aGlzLm9uKGNmZy5vbik7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIFxuICAgICAgICBpZiAoIHNjb3BlLnN0b3JlcyApIHtcbiAgICAgICAgICAgIHRoaXMuc2NvcGVPYmogPSBzY29wZTtcbiAgICAgICAgICAgIHRoaXMuc2NvcGUgICAgPSBzY29wZS5zdG9yZXM7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNjb3BlT2JqID0gbmV3IFNjb3BlKHNjb3BlKTtcbiAgICAgICAgICAgIHRoaXMuc2NvcGUgICAgPSBzY29wZS5zdG9yZXM7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICB0aGlzLl9yZXYgICAgID0gdGhpcy5jb25zdHJ1Y3Rvci5fcmV2IHx8IDA7XG4gICAgICAgIHRoaXMuX3JldnMgICAgPSB7fTtcbiAgICAgICAgdGhpcy5zdG9yZXMgICA9IHt9O1xuICAgICAgICB0aGlzLl9yZXF1aXJlID0gW107XG4gICAgICAgIHRoaXMuX3NvdXJjZXMgPSBbbmFtZV07XG4gICAgICAgIFxuICAgICAgICBpZiAoIGlzLmFycmF5KF9zdGF0aWMudXNlKSApIHtcbiAgICAgICAgICAgIHRoaXMuX3VzZSA9IFsuLi53YXRjaHMsIC4uLihfc3RhdGljLnVzZSB8fCBbXSkubWFwKFxuICAgICAgICAgICAgICAgIGtleSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCByZWYgPSBrZXkubWF0Y2goL14oXFwhPykoW15cXDpdKikoPzpcXDooLiopKT8kLyk7XG4gICAgICAgICAgICAgICAgICAgIGlmICggcmVmWzFdICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlZjIgPSByZWZbMl0uc3BsaXQoJy4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3JlcXVpcmUucHVzaChyZWZbM10gfHwgcmVmMltyZWYyLmxlbmd0aCAtIDFdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVmWzJdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICldO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fdXNlID0gWy4uLndhdGNocywgLi4uKFxuICAgICAgICAgICAgICAgIF9zdGF0aWMudXNlID8gT2JqZWN0LmtleXMoX3N0YXRpYy51c2UpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZWYgPSBrZXkubWF0Y2goL14oXFwhPykoLiopJC8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWZbMV0gJiYgdGhpcy5fcmVxdWlyZS5wdXNoKF9zdGF0aWMudXNlW2tleV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVmWzJdICsgKChfc3RhdGljLnVzZVtrZXldID09PSB0cnVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnOicgKyBfc3RhdGljLnVzZVtrZXldKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogW11cbiAgICAgICAgICAgICldO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAoIF9zdGF0aWMucmVxdWlyZSApXG4gICAgICAgICAgICB0aGlzLl9yZXF1aXJlLnB1c2goLi4uX3N0YXRpYy5yZXF1aXJlKTtcbiAgICAgICAgaWYgKCBjZmcucmVxdWlyZSApXG4gICAgICAgICAgICB0aGlzLl9yZXF1aXJlLnB1c2goLi4uY2ZnLnJlcXVpcmUpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fZm9sbG93ZXJzID0gW107XG4gICAgICAgIFxuICAgICAgICBpZiAoIGFwcGx5IClcbiAgICAgICAgICAgIHRoaXMuYXBwbHkgPSBhcHBseTtcbiAgICAgICAgXG4gICAgICAgIGlmICggY2ZnLnNuYXBzaG90ICYmIGNmZy5zbmFwc2hvdFt0aGlzLnNjb3BlT2JqLl9pZCArICcvJyArIG5hbWVdICkge1xuICAgICAgICAgICAgdGhpcy5yZXN0b3JlKGNmZy5zbmFwc2hvdCk7XG4gICAgICAgICAgICB0aGlzLl9zdGFibGUgPSB0cnVlO1xuICAgICAgICAgICAgc2NvcGUuYmluZCh0aGlzLCB0aGlzLl91c2UsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKCBfc3RhdGljLmRhdGEgIT09IHVuZGVmaW5lZCApXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhID0geyAuLi5fc3RhdGljLmRhdGEgfTtcbiAgICAgICAgICAgIGlmICggY2ZnLmhhc093blByb3BlcnR5KFwiZGF0YVwiKSAmJiBjZmcuZGF0YSAhPT0gdW5kZWZpbmVkIClcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGEgPSBjZmcuZGF0YTtcbiAgICAgICAgICAgIGlmICggY2ZnLmhhc093blByb3BlcnR5KFwic3RhdGVcIikgJiYgY2ZnLnN0YXRlICE9PSB1bmRlZmluZWQgKVxuICAgICAgICAgICAgICAgIGluaXRpYWxTdGF0ZSA9IHsgLi4uaW5pdGlhbFN0YXRlLCAuLi5jZmcuc3RhdGUgfTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoIGluaXRpYWxTdGF0ZSB8fCB0aGlzLl91c2UubGVuZ3RoICkgey8vIHN5bmMgYXBwbHlcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgICAgICAgICAuLi4oaW5pdGlhbFN0YXRlIHx8IHt9KSxcbiAgICAgICAgICAgICAgICAgICAgLi4uc2NvcGUubWFwKHRoaXMsIHRoaXMuX3VzZSlcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGlmICggdGhpcy5zaG91bGRBcHBseSh0aGlzLnN0YXRlKSAmJiB0aGlzLmRhdGEgPT09IHVuZGVmaW5lZCApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhID0gdGhpcy5hcHBseSh0aGlzLmRhdGEsIHRoaXMuc3RhdGUsIHRoaXMuc3RhdGUpO1xuICAgICAgICAgICAgICAgICAgICBhcHBsaWVkICAgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoICh0aGlzLmRhdGEgIT09IHVuZGVmaW5lZCB8fCBhcHBsaWVkKSAmJiAhdGhpcy5fX2xvY2tzLmFsbCApIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YWJsZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLl9yZXYrKztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgaWYgKCAhX3N0YXRpYy5tYW5hZ2VkICYmICF0aGlzLnN0YXRlICYmICghdGhpcy5fdXNlIHx8ICF0aGlzLl91c2UubGVuZ3RoKSApIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCJSZXNjb3BlIHN0b3JlICdcIiwgdGhpcy5uYW1lLCBcIicgaGF2ZSBubyBpbml0aWFsIGRhdGEsIHN0YXRlIG9yIHVzZS4gSXQgY2FuJ3Qgc3RhYmlsaXplLi4uXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICF0aGlzLl9zdGFibGUgJiYgdGhpcy5lbWl0KCd1bnN0YWJsZScsIHRoaXMuc3RhdGUpO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBAZGVwcmVjYXRlZFxuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqL1xuICAgIGdldCBjb250ZXh0T2JqKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zY29wZU9iajtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogQGRlcHJlY2F0ZWRcbiAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgKi9cbiAgICBnZXQgY29udGV4dCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NvcGU7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIEBkZXByZWNhdGVkXG4gICAgICogQHJldHVybnMgeyp9XG4gICAgICovXG4gICAgZ2V0IGRhdGFzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBAZGVwcmVjYXRlZFxuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqL1xuICAgIHNldCBkYXRhcyggdiApIHtcbiAgICAgICAgLy9jb25zb2xlLmdyb3VwQ29sbGFwc2VkKFwiUmVzY29wZSBzdG9yZSA6IFNldHRpbmcgZGF0YXMgaXMgZGVwcmVjaWF0ZWQsIHVzZSBkYXRhXCIpO1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwiUmVzY29wZSBzdG9yZSA6IFNldHRpbmcgZGF0YXMgaXMgZGVwcmVjaWF0ZWQsIHVzZSBkYXRhXCIsIChuZXcgRXJyb3IoKSkuc3RhY2spO1xuICAgICAgICAvL2NvbnNvbGUuZ3JvdXBFbmQoKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuZGF0YSA9IHY7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIE92ZXJyaWRhYmxlIG1ldGhvZCB0byBrbm93IGlmIGEgZGF0YSBjaGFuZ2Ugc2hvdWxkIGJlIHByb3BhZyB0byB0aGUgbGlzdGVuaW5nIHN0b3JlcyAmIGNvbXBvbmVudHNcbiAgICAgKi9cbiAgICBzaG91bGRQcm9wYWcoIG5EYXRhcyApIHtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBcbiAgICBoYXNEYXRhQ2hhbmdlKCBuRGF0YXMgKSB7XG4gICAgICAgIHZhciBfc3RhdGljID0gdGhpcy5jb25zdHJ1Y3RvciwgcixcbiAgICAgICAgICAgIGNEYXRhcyAgPSB0aGlzLmRhdGE7XG4gICAgICAgIHIgICAgICAgICAgID0gIWNEYXRhcyAmJiBuRGF0YXMgfHwgY0RhdGFzICE9PSBuRGF0YXM7XG4gICAgICAgICFyICYmIGNEYXRhcyAmJiBPYmplY3Qua2V5cyhjRGF0YXMpLmZvckVhY2goXG4gICAgICAgICAgICAoIGtleSApID0+IHtcbiAgICAgICAgICAgICAgICByID0gciB8fCAobkRhdGFzID8gY0RhdGFzW2tleV0gIT09IG5EYXRhc1trZXldIDogY0RhdGFzICYmIGNEYXRhc1trZXldKVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICAhciAmJiBuRGF0YXMgJiYgT2JqZWN0LmtleXMobkRhdGFzKS5mb3JFYWNoKFxuICAgICAgICAgICAgKCBrZXkgKSA9PiB7XG4gICAgICAgICAgICAgICAgciA9IHIgfHwgKG5EYXRhcyA/IGNEYXRhc1trZXldICE9PSBuRGF0YXNba2V5XSA6IGNEYXRhcyAmJiBjRGF0YXNba2V5XSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHI7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIE92ZXJyaWRhYmxlIG1ldGhvZCB0byBrbm93IGlmIGEgc3RhdGUgY2hhbmdlIHNob3VsZCBiZSBhcHBsaWVkXG4gICAgICovXG4gICAgc2hvdWxkQXBwbHkoIHN0YXRlID0gdGhpcy5zdGF0ZSApIHtcbiAgICAgICAgdmFyIF9zdGF0aWMgPSB0aGlzLmNvbnN0cnVjdG9yO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICEhdGhpcy5pc0NvbXBsZXRlKHN0YXRlKVxuICAgICAgICApICYmIChpcy5hcnJheShfc3RhdGljLmZvbGxvdylcbiAgICAgICAgICAgICAgICA/IF9zdGF0aWMuZm9sbG93XG4gICAgICAgICAgICAgICAgICAgICAgICAgLnJlZHVjZSgoIHIsIGkgKSA9PiAociB8fCBzdGF0ZSAmJiBzdGF0ZVtpXSksIGZhbHNlKVxuICAgICAgICAgICAgICAgIDogX3N0YXRpYy5mb2xsb3dcbiAgICAgICAgICAgICAgICAgID8gT2JqZWN0LmtleXMoX3N0YXRpYy5mb2xsb3cpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5yZWR1Y2UoKCByLCBpICkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfHwgc3RhdGUgJiYgaXMuZm4oX3N0YXRpYy5mb2xsb3dbaV0pICYmIF9zdGF0aWMuZm9sbG93W2ldLmNhbGwodGhpcywgc3RhdGVbaV0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8fCBfc3RhdGljLmZvbGxvd1tpXSAmJiBzdGF0ZVtpXSAhPT0gdGhpcy5zdGF0ZVtpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApLCBmYWxzZSkgOiB0cnVlXG4gICAgICAgICk7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIE92ZXJyaWRhYmxlIGFwcGxpZXIgLyByZW1hcHBlclxuICAgICAqIElmIHN0YXRlIG9yIGxhc3RQdWJsaWNTdGF0ZSBhcmUgc2ltcGxlIGhhc2ggbWFwcyBhcHBseSB3aWxsIHJldHVybiB7Li4uZGF0YSwgLi4uc3RhdGV9XG4gICAgICogaWYgbm90IGl0IHdpbGwgcmV0dXJuIHRoZSBsYXN0IHByaXZhdGUgc3RhdGVcbiAgICAgKiBAcGFyYW0gZGF0YVxuICAgICAqIEBwYXJhbSBzdGF0ZVxuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqL1xuICAgIGFwcGx5KCBkYXRhLCBzdGF0ZSwgY2hhbmdlcyApIHtcbiAgICAgICAgc3RhdGUgPSBzdGF0ZSB8fCB0aGlzLnN0YXRlO1xuICAgICAgICBcbiAgICAgICAgaWYgKCB0aGlzLnJlZmluZSApXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZWZpbmUoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgXG4gICAgICAgIGlmICggIWRhdGEgfHwgZGF0YS5fX3Byb3RvX18gIT09IG9ialByb3RvIHx8IHN0YXRlLl9fcHJvdG9fXyAhPT0gb2JqUHJvdG8gKVxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICByZXR1cm4geyAuLi5kYXRhLCAuLi5zdGF0ZSB9XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIEBkZXByZWNpYXRlZFxuICAgICAqIEBwYXJhbSBkYXRhXG4gICAgICogQHBhcmFtIHN0YXRlXG4gICAgICogQHBhcmFtIGNoYW5nZXNcbiAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgKi9cbiAgICByZWZpbmUoIGRhdGEsIHN0YXRlLCBjaGFuZ2VzICkge1xuICAgICAgICBzdGF0ZSA9IHN0YXRlIHx8IHRoaXMuc3RhdGU7XG4gICAgICAgIFxuICAgICAgICBpZiAoICFkYXRhIHx8IGRhdGEuX19wcm90b19fICE9PSBvYmpQcm90byB8fCBzdGF0ZS5fX3Byb3RvX18gIT09IG9ialByb3RvIClcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgcmV0dXJuIHsgLi4uZGF0YSwgLi4uc3RhdGUgfVxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBEZWJvdW5jZSB0aGlzIHN0b3JlIHByb3BhZ2F0aW9uICggJiByZWR1Y2luZyApXG4gICAgICogQHBhcmFtIGNiXG4gICAgICovXG4gICAgc3RhYmlsaXplKCBjYiApIHtcbiAgICAgICAgY2IgJiYgdGhpcy5vbmNlKCdzdGFibGUnLCBjYik7XG4gICAgICAgIHRoaXMuX3N0YWJsZSAmJiB0aGlzLmVtaXQoJ3Vuc3RhYmxlJywgdGhpcy5zdGF0ZSwgdGhpcy5kYXRhKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX3N0YWJsZSA9IGZhbHNlO1xuICAgICAgICBcbiAgICAgICAgaWYgKCB0aGlzLl9zdGFiaWxpemVyIClcbiAgICAgICAgICAgIHJldHVybjsvL2NsZWFyVGltZW91dCh0aGlzLl9zdGFiaWxpemVyKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX3N0YWJpbGl6ZXIgPSBUYXNrU2VxdWVuY2VyLnB1c2hUYXNrKHRoaXMsICdwdXNoJyk7XG4gICAgICAgIC8vdGhpcy5fc3RhYmlsaXplciA9IHNldFRpbWVvdXQoXG4gICAgICAgIC8vICAgIHRoaXMucHVzaC5iaW5kKFxuICAgICAgICAvLyAgICAgICAgdGhpcyxcbiAgICAgICAgLy8gICAgICAgIG51bGwsXG4gICAgICAgIC8vICAgICAgICAoKSA9PiB7Ly9AdG9kb1xuICAgICAgICAvL1xuICAgICAgICAvLyAgICAgICAgICAgIGxldCBzdGFibGUgICA9IHRoaXMuX3N0YWJsZTtcbiAgICAgICAgLy8gICAgICAgICAgICB0aGlzLl9zdGFibGUgPSB0cnVlO1xuICAgICAgICAvLyAgICAgICAgICAgICFzdGFibGUgJiYgdGhpcy5lbWl0KCdzdGFibGUnLCB0aGlzLnN0YXRlLCB0aGlzLmRhdGEpO1xuICAgICAgICAvLyAgICAgICAgICAgIHRoaXMuX3N0YWJpbGl6ZXIgPSBudWxsO1xuICAgICAgICAvLyAgICAgICAgICAgIC8vIHRoaXMucmVsZWFzZSgpO1xuICAgICAgICAvLyAgICAgICAgfVxuICAgICAgICAvLyAgICApKTtcbiAgICB9XG4gICAgXG4gICAgcmV0cmlldmUoIHBhdGgsIGkgPSAwLCBvYmogPSB0aGlzLmRhdGEgKSB7XG4gICAgICAgIHBhdGggPSBpcy5zdHJpbmcocGF0aCkgPyBwYXRoLnNwbGl0KCcuJykgOiBwYXRoO1xuICAgICAgICByZXR1cm4gIW9iaiB8fCAhcGF0aCB8fCAhcGF0aC5sZW5ndGhcbiAgICAgICAgICAgID8gb2JqXG4gICAgICAgICAgICA6IHBhdGgubGVuZ3RoID09IGkgKyAxXG4gICAgICAgICAgICAgICAgICAgPyBvYmpbcGF0aFtpXV1cbiAgICAgICAgICAgICAgICAgICA6IHRoaXMucmV0cmlldmUocGF0aCwgaSArIDEsIG9ialtwYXRoW2ldXSk7XG4gICAgfVxuICAgIFxuICAgIGRpc3BhdGNoKCBhY3Rpb24sIC4uLmFyZ3ogKSB7XG4gICAgICAgIHRoaXMuc2NvcGVPYmouZGlzcGF0Y2goYWN0aW9uLCAuLi5hcmd6KTtcbiAgICB9XG4gICAgXG4gICAgdHJpZ2dlciggYWN0aW9uLCAuLi5hcmd6ICkge1xuICAgICAgICBsZXQgeyBhY3Rpb25zIH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuICAgICAgICBpZiAoIGFjdGlvbnMgJiYgYWN0aW9uc1thY3Rpb25dICkge1xuICAgICAgICAgICAgbGV0IG5zID0gYWN0aW9uc1thY3Rpb25dLmNhbGwodGhpcywgLi4uYXJneik7XG4gICAgICAgICAgICBucyAmJiB0aGlzLnNldFN0YXRlKG5zKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBQdWxsIHN0b3JlcyBpbiB0aGUgcHJpdmF0ZSBzdGF0ZVxuICAgICAqIEBwYXJhbSBzdG9yZXMgIHtBcnJheX0gKHBhc3NlZCB0byBTdG9yZTo6bWFwKSBFeCA6IFtcInNlc3Npb25cIiwgXCJvdGhlck5hbWVkU3RvcmU6a2V5XCIsIG90aGVyU3RvcmUuYXMoXCJvdGhlcktleVwiKV1cbiAgICAgKi9cbiAgICBwdWxsKCBzdG9yZXMsIGRvV2FpdCwgb3JpZ2luICkge1xuICAgICAgICBsZXQgaW5pdGlhbE91dHB1dHMgPSB0aGlzLnNjb3BlT2JqLm1hcCh0aGlzLCBzdG9yZXMpO1xuICAgICAgICBpZiAoIGRvV2FpdCApIHtcbiAgICAgICAgICAgIHRoaXMud2FpdCgpO1xuICAgICAgICAgICAgc3RvcmVzLmZvckVhY2goKCBzICkgPT4gdGhpcy5zY29wZVtzXSAmJiB0aGlzLndhaXQodGhpcy5zY29wZVtzXSkpO1xuICAgICAgICAgICAgdGhpcy5yZWxlYXNlKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGluaXRpYWxPdXRwdXRzO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBBcHBseSBhcHBseS9yZW1hcCBvbiB0aGUgcHJpdmF0ZSBzdGF0ZSAmIHB1c2ggdGhlIHJlc3VsdGluZyBcInB1YmxpY1wiIHN0YXRlIHRvIGZvbGxvd2Vyc1xuICAgICAqIEBwYXJhbSBjYlxuICAgICAqL1xuICAgIHB1c2goIGRhdGEsIGZvcmNlLCBjYiApIHtcbiAgICAgICAgY2IgICAgICAgICAgICA9IGZvcmNlID09PSB0cnVlID8gY2IgOiBmb3JjZTtcbiAgICAgICAgZm9yY2UgICAgICAgICA9IGZvcmNlID09PSB0cnVlO1xuICAgICAgICB2YXIgaSAgICAgICAgID0gMCxcbiAgICAgICAgICAgIG5leHRTdGF0ZSA9ICFkYXRhICYmIHsgLi4udGhpcy5zdGF0ZSwgLi4udGhpcy5fY2hhbmdlc1NXIH0gfHwgdGhpcy5zdGF0ZSxcbiAgICAgICAgICAgIG5leHREYXRhcyA9IGRhdGEgfHwgdGhpcy5hcHBseSh0aGlzLmRhdGEsIG5leHRTdGF0ZSwgdGhpcy5fY2hhbmdlc1NXKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX3N0YWJpbGl6ZXIgPSBudWxsO1xuICAgICAgICB0aGlzLnN0YXRlICAgICAgID0gbmV4dFN0YXRlO1xuICAgICAgICB0aGlzLl9jaGFuZ2VzU1cgID0ge307XG4gICAgICAgIGlmICggIWZvcmNlICYmXG4gICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgIXRoaXMuaGFzRGF0YUNoYW5nZShuZXh0RGF0YXMpXG4gICAgICAgICAgICApXG4gICAgICAgICkge1xuICAgICAgICAgICAgY2IgJiYgY2IoKTtcbiAgICAgICAgICAgIGlmICggIXRoaXMuX19sb2Nrcy5hbGwgKSB7XG4gICAgICAgICAgICAgICAgbGV0IHN0YWJsZSAgID0gdGhpcy5fc3RhYmxlO1xuICAgICAgICAgICAgICAgIHRoaXMuX3N0YWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgIXN0YWJsZSAmJiB0aGlzLmVtaXQoJ3N0YWJsZScsIHRoaXMuc3RhdGUsIHRoaXMuZGF0YSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fc3RhYmlsaXplciA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vXG4gICAgICAgIHRoaXMuZGF0YSA9IG5leHREYXRhcztcbiAgICAgICAgdGhpcy53YWl0KCk7XG4gICAgICAgIHRoaXMucmVsZWFzZShjYik7XG4gICAgICAgIFxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBVcGRhdGUgdGhlIGN1cnJlbnQgcHJpdmF0ZSBzdGF0ZSAmIHB1c2ggaXQgb25jZSB0aGUgc3RvcmUgaXMgc3RhYmxlXG4gICAgICogQHBhcmFtIHBTdGF0ZVxuICAgICAqIEBwYXJhbSBjYlxuICAgICAqL1xuICAgIHNldFN0YXRlKCBwU3RhdGUsIGNiLCBzeW5jICkge1xuICAgICAgICB2YXIgaSAgICAgICA9IDAsIGNoYW5nZSxcbiAgICAgICAgICAgIGNoYW5nZXMgPSB0aGlzLl9jaGFuZ2VzU1cgPSB0aGlzLl9jaGFuZ2VzU1cgfHwge307XG4gICAgICAgIGZvciAoIHZhciBrIGluIHBTdGF0ZSApXG4gICAgICAgICAgICBpZiAoICF0aGlzLnN0YXRlIHx8IHBTdGF0ZS5oYXNPd25Qcm9wZXJ0eShrKVxuICAgICAgICAgICAgICAgICYmIChcbiAgICAgICAgICAgICAgICAgICAgcFN0YXRlW2tdICE9IHRoaXMuc3RhdGVba11cbiAgICAgICAgICAgICAgICAgICAgfHxcbiAgICAgICAgICAgICAgICAgICAgKHRoaXMuc3RhdGVba10gJiYgcFN0YXRlW2tdICYmIChwU3RhdGVba10uX3JldiAhPSB0aGlzLl9yZXZzW2tdKSkvLyByZXYvaGFzaCB1cGRhdGVcbiAgICAgICAgICAgICAgICApICkge1xuICAgICAgICAgICAgICAgIGNoYW5nZSAgICAgICAgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuX3JldnNba10gPSBwU3RhdGVba10gJiYgcFN0YXRlW2tdLl9yZXYgfHwgdHJ1ZTtcbiAgICAgICAgICAgICAgICBjaGFuZ2VzW2tdICAgID0gcFN0YXRlW2tdO1xuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKCAhdGhpcy5zaG91bGRBcHBseSh7IC4uLnRoaXMuc3RhdGUsIC4uLmNoYW5nZXMgfSkgKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmICggc3luYyApIHtcbiAgICAgICAgICAgIHRoaXMucHVzaCgpO1xuICAgICAgICAgICAgY2IgJiYgY2IoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmICggY2hhbmdlICkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhYmlsaXplKGNiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgY2IgJiYgY2IoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogVXBkYXRlIHRoZSBjdXJyZW50IHByaXZhdGUgc3RhdGUgJiBwdXNoIGl0IG9uY2UgdGhlIHN0b3JlIGlzIHN0YWJsZVxuICAgICAqIEBwYXJhbSBwU3RhdGVcbiAgICAgKiBAcGFyYW0gY2JcbiAgICAgKi9cbiAgICBzZXRTdGF0ZVN5bmMoIHBTdGF0ZSApIHtcbiAgICAgICAgdmFyIGkgICAgICAgPSAwLCBjaGFuZ2UsXG4gICAgICAgICAgICBjaGFuZ2VzID0gdGhpcy5fY2hhbmdlc1NXID0gdGhpcy5fY2hhbmdlc1NXIHx8IHt9O1xuICAgICAgICBmb3IgKCB2YXIgayBpbiBwU3RhdGUgKVxuICAgICAgICAgICAgaWYgKCAhdGhpcy5zdGF0ZSB8fCBwU3RhdGUuaGFzT3duUHJvcGVydHkoaylcbiAgICAgICAgICAgICAgICAmJiAoXG4gICAgICAgICAgICAgICAgICAgIHBTdGF0ZVtrXSAhPSB0aGlzLnN0YXRlW2tdXG4gICAgICAgICAgICAgICAgICAgIHx8XG4gICAgICAgICAgICAgICAgICAgICh0aGlzLnN0YXRlW2tdICYmIHBTdGF0ZVtrXSAmJiAocFN0YXRlW2tdLl9yZXYgIT0gdGhpcy5fcmV2c1trXSkpLy8gcmV2L2hhc2ggdXBkYXRlXG4gICAgICAgICAgICAgICAgKSApIHtcbiAgICAgICAgICAgICAgICBjaGFuZ2UgICAgICAgID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLl9yZXZzW2tdID0gcFN0YXRlW2tdICYmIHBTdGF0ZVtrXS5fcmV2IHx8IHRydWU7XG4gICAgICAgICAgICAgICAgY2hhbmdlc1trXSAgICA9IHBTdGF0ZVtrXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgdGhpcy5zaG91bGRBcHBseSh7IC4uLih0aGlzLnN0YXRlIHx8IHt9KSwgLi4uY2hhbmdlcyB9KSAmJiB0aGlzLnB1c2goKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogUmVwbGFjZSB0aGUgY3VycmVudCBwcml2YXRlIHN0YXRlICYgcHVzaCBpdCBvbmNlIHRoZSBzdG9yZSBpcyBzdGFibGVcbiAgICAgKiBAcGFyYW0gcFN0YXRlXG4gICAgICogQHBhcmFtIGNiXG4gICAgICovXG4gICAgcmVwbGFjZVN0YXRlKCBwU3RhdGUsIGNiICkge1xuICAgICAgICB2YXIgaSAgICAgID0gMCwgbWUgPSB0aGlzO1xuICAgICAgICB0aGlzLnN0YXRlID0gcFN0YXRlO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5zdGFiaWxpemUoY2IpO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBnZXQgYSBzdG9yZS1rZXkgcGFpciBmb3IgU3RvcmU6Om1hcFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gICAgICogQHJldHVybnMge3tzdG9yZTogU3RvcmUsIG5hbWU6ICp9fVxuICAgICAqL1xuICAgIGFzKCBuYW1lICkge1xuICAgICAgICByZXR1cm4geyBzdG9yZTogdGhpcywgbmFtZSB9O1xuICAgIH1cbiAgICBcbiAgICBvbiggbGlzdHMgKSB7XG4gICAgICAgIGlmICggIWlzLnN0cmluZyhsaXN0cykgJiYgbGlzdHMgKVxuICAgICAgICAgICAgT2JqZWN0LmtleXMobGlzdHMpLmZvckVhY2goayA9PiBzdXBlci5vbihrLCBsaXN0c1trXSkpO1xuICAgICAgICBlbHNlIHN1cGVyLm9uKC4uLmFyZ3VtZW50cyk7XG4gICAgfVxuICAgIFxuICAgIHJlbW92ZUxpc3RlbmVyKCBsaXN0cyApIHtcbiAgICAgICAgaWYgKCAhaXMuc3RyaW5nKGxpc3RzKSAmJiBsaXN0cyApXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhsaXN0cykuZm9yRWFjaChrID0+IHN1cGVyLnJlbW92ZUxpc3RlbmVyKGssIGxpc3RzW2tdKSk7XG4gICAgICAgIGVsc2Ugc3VwZXIucmVtb3ZlTGlzdGVuZXIoLi4uYXJndW1lbnRzKTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogcmVsaW5rIGJpbmRpbmdzICYgcmVxdWlyZXNcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgICAqIEByZXR1cm5zIHt7c3RvcmU6IFN0b3JlLCBuYW1lOiAqfX1cbiAgICAgKi9cbiAgICByZWxpbmsoIGZyb20gKSB7XG4gICAgICAgIGxldCBzY29wZSAgID0gdGhpcy5zY29wZU9iaixcbiAgICAgICAgICAgIF9zdGF0aWMgPSB0aGlzLmNvbnN0cnVjdG9yO1xuICAgICAgICBpZiAoIF9zdGF0aWMudXNlICkge1xuICAgICAgICAgICAgLy90b2RvIHVubGlua1xuICAgICAgICAgICAgdGhpcy5wdWxsKF9zdGF0aWMudXNlLCBmYWxzZSwgZnJvbSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmICggdGhpcy5fcmVxdWlyZSApIHtcbiAgICAgICAgICAgIHRoaXMuX3JlcXVpcmUuZm9yRWFjaChcbiAgICAgICAgICAgICAgICBzdG9yZSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2FpdChzY29wZS5fX3Njb3BlW3N0b3JlXSlcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIGlzIGNvbXBsZXRlIChhbGwgcmVxdWllcmVkIGtleXMgYXJlIGhlcmUpXG4gICAgICogQHJldHVybnMgYm9vbFxuICAgICAqL1xuICAgIGlzQ29tcGxldGUoIHN0YXRlID0gdGhpcy5zdGF0ZSApIHtcbiAgICAgICAgdmFyIF9zdGF0aWMgPSB0aGlzLmNvbnN0cnVjdG9yO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgIXRoaXMuX3JlcXVpcmVcbiAgICAgICAgICAgIHx8ICF0aGlzLl9yZXF1aXJlLmxlbmd0aFxuICAgICAgICAgICAgfHwgc3RhdGUgJiYgdGhpcy5fcmVxdWlyZS5yZWR1Y2UoXG4gICAgICAgICAgICAgICAgKCByLCBrZXkgKSA9PiAociAmJiBzdGF0ZVtrZXldKSxcbiAgICAgICAgICAgICAgICB0cnVlXG4gICAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIGlzIHN0YWJsZVxuICAgICAqIEByZXR1cm5zIGJvb2xcbiAgICAgKi9cbiAgICBpc1N0YWJsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0YWJsZTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogaXMgc3RhYmxlXG4gICAgICogQHJldHVybnMgYm9vbFxuICAgICAqL1xuICAgIHNlcmlhbGl6ZSggb3V0cHV0ID0ge30sIGNvbXBsZXRlU3RhdGUgKSB7XG4gICAgICAgIGxldCByZWZzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPVxuICAgICAgICAgICAgICAgIHRoaXMuX3VzZS5yZWR1Y2UoXG4gICAgICAgICAgICAgICAgICAgICggbWFwLCBrZXkgKSA9PiB7Ly90b2RvXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlhcywgcGF0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdG9yZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgga2V5LnN0b3JlICYmIGtleS5uYW1lICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWFzID0gbmFtZSA9IGtleS5uYW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoIGlzLmZuKGtleSkgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZSA9IGFsaWFzID0ga2V5Lm5hbWUgfHwga2V5LmRlZmF1bHROYW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5ICAgPSBrZXkubWF0Y2goLyhbXFx3X10rKSgoPzpcXC5bXFx3X10rKSopKD86XFw6KFtcXHdfXSspKT8vKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lICA9IGtleVsxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRoICA9IGtleVsyXSAmJiBrZXlbMl0uc3Vic3RyKDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWFzID0ga2V5WzNdIHx8IHBhdGggJiYgcGF0aC5tYXRjaCgvKFteXFwuXSopJC8pWzBdIHx8IGtleVsxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoICF0aGlzLnNjb3BlT2JqLnN0b3Jlc1tuYW1lXS5zY29wZU9iai5faXNMb2NhbElkIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXBbYWxpYXNdID0gdGhpcy5zY29wZU9iai5zdG9yZXNbbmFtZV0uc2NvcGVPYmouX2lkICsgJy8nICsgbmFtZTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWFwO1xuICAgICAgICAgICAgICAgICAgICB9LCB7fVxuICAgICAgICAgICAgICAgICkgfHwge307XG4gICAgICAgIG91dHB1dFt0aGlzLnNjb3BlT2JqLl9pZCArICcvJyArIHRoaXMubmFtZV0gPSB7XG4gICAgICAgICAgICBzdGF0ZTogY29tcGxldGVTdGF0ZVxuICAgICAgICAgICAgICAgID8geyAuLi50aGlzLnN0YXRlIH1cbiAgICAgICAgICAgICAgICA6IE9iamVjdC5rZXlzKHRoaXMuc3RhdGUpLnJlZHVjZSgoIGgsIGsgKSA9PiAoIXJlZnNba10gJiYgKGhba10gPSB0aGlzLnN0YXRlW2tdKSwgaCksIHt9KSxcbiAgICAgICAgICAgIGRhdGEgOiB0aGlzLmRhdGEsXG4gICAgICAgICAgICByZWZzXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIGlzIHN0YWJsZVxuICAgICAqIEByZXR1cm5zIGJvb2xcbiAgICAgKi9cbiAgICByZXN0b3JlKCBzbmFwc2hvdCApIHtcbiAgICAgICAgbGV0IHNuYXAgPSBzbmFwc2hvdFt0aGlzLnNjb3BlT2JqLl9pZCArICcvJyArIHRoaXMubmFtZV07XG4gICAgICAgIGlmICggc25hcCApIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBzbmFwLnN0YXRlO1xuICAgICAgICAgICAgT2JqZWN0LmtleXMoc25hcC5yZWZzKS5mb3JFYWNoKFxuICAgICAgICAgICAgICAgICgga2V5ICkgPT4gey8vdG9kb1xuICAgICAgICAgICAgICAgICAgICBpZiAoIHNuYXBzaG90W3NuYXAucmVmc1trZXldXSApXG4gICAgICAgICAgICAgICAgICAgICAgICBzbmFwLnN0YXRlW2tleV0gPSBzbmFwc2hvdFtzbmFwLnJlZnNba2V5XV0uZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdub3QgZm91bmQgOiAnLCBrZXksIHNuYXAucmVmc1trZXldKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5kYXRhID0gc25hcC5kYXRhO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIFVuIGJpbmQgdGhpcyBzdG9yZSBvZmYgdGhlIGdpdmVuIGNvbXBvbmVudC1rZXlcbiAgICAgKiBAcGFyYW0gb2JqXG4gICAgICogQHBhcmFtIGtleVxuICAgICAqIEByZXR1cm5zIHtBcnJheS48Kj59XG4gICAgICovXG4gICAgdW5CaW5kKCBvYmosIGtleSwgcGF0aCApIHtcbiAgICAgICAgdmFyIGZvbGxvd2VycyA9IHRoaXMuX2ZvbGxvd2VycyxcbiAgICAgICAgICAgIGkgICAgICAgICA9IGZvbGxvd2VycyAmJiBmb2xsb3dlcnMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGZvbGxvd2VycyAmJiBpLS0gKVxuICAgICAgICAgICAgaWYgKCBmb2xsb3dlcnNbaV1bMF0gPT09IG9iaiAmJiBmb2xsb3dlcnNbaV1bMV0gPT09IGtleSAmJiBmb2xsb3dlcnNbaV1bMl0gPT09IHBhdGggKVxuICAgICAgICAgICAgICAgIHJldHVybiBmb2xsb3dlcnMuc3BsaWNlKGksIDEpO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBCaW5kIHRoaXMgc3RvcmUgY2hhbmdlcyB0byB0aGUgZ2l2ZW4gY29tcG9uZW50LWtleVxuICAgICAqIEBwYXJhbSBvYmoge1JlYWN0LkNvbXBvbmVudHxTdG9yZXxmdW5jdGlvbilcbiAgICAgKiBAcGFyYW0ga2V5IHtzdHJpbmd9IG9wdGlvbmFsIGtleSB3aGVyZSB0byBtYXAgdGhlIHB1YmxpYyBzdGF0ZVxuICAgICAqL1xuICAgIGJpbmQoIG9iaiwga2V5LCBzZXRJbml0aWFsID0gdHJ1ZSwgcGF0aCApIHtcbiAgICAgICAgdGhpcy5fZm9sbG93ZXJzLnB1c2goW29iaiwga2V5LCBwYXRoXSk7XG4gICAgICAgIGlmICggc2V0SW5pdGlhbCAmJiB0aGlzLmRhdGEgJiYgdGhpcy5fc3RhYmxlICkge1xuICAgICAgICAgICAgbGV0IGRhdGEgPSBwYXRoID8gdGhpcy5yZXRyaWV2ZShwYXRoKSA6IHRoaXMuZGF0YTtcbiAgICAgICAgICAgIGlmICggdHlwZW9mIG9iaiAhPSBcImZ1bmN0aW9uXCIgKSB7XG4gICAgICAgICAgICAgICAgaWYgKCBrZXkgKSBvYmouc2V0U3RhdGUoeyBba2V5XTogZGF0YSB9KTtcbiAgICAgICAgICAgICAgICBlbHNlIG9iai5zZXRTdGF0ZShkYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIG9iaihkYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBvbmNlKCdzdGFibGUnLCBjYilcbiAgICAgKiBAcGFyYW0gb2JqIHtSZWFjdC5Db21wb25lbnR8U3RvcmV8ZnVuY3Rpb24pXG4gICAgICogQHBhcmFtIGtleSB7c3RyaW5nfSBvcHRpb25hbCBrZXkgd2hlcmUgdG8gbWFwIHRoZSBwdWJsaWMgc3RhdGVcbiAgICAgKi9cbiAgICB0aGVuKCBjYiApIHtcbiAgICAgICAgaWYgKCB0aGlzLl9zdGFibGUgKVxuICAgICAgICAgICAgcmV0dXJuIGNiKG51bGwsIHRoaXMuZGF0YSk7XG4gICAgICAgIHRoaXMub25jZSgnc3RhYmxlJywgZSA9PiBjYihudWxsLCB0aGlzLmRhdGEpKTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogQWRkIGEgbG9jayBzbyB0aGUgc3RvcmUgd2lsbCBub3QgcHJvcGFnIGl0IHN0YXRlIHVudGlsbCByZWxlYXNlKCkgaXMgY2FsbFxuICAgICAqIEBwYXJhbSBwcmV2aW91cyB7U3RvcmV8bnVtYmVyfEFycmF5fSBAb3B0aW9uYWwgd2YgdG8gd2FpdCwgcmVsZWFzZXMgdG8gd2FpdCBvciBhcnJheSBvZiBzdHVmZiB0byB3YWl0XG4gICAgICogQHJldHVybnMge1Rhc2tGbG93fVxuICAgICAqL1xuICAgIHdhaXQoIHByZXZpb3VzICkge1xuICAgICAgICBpZiAoIHR5cGVvZiBwcmV2aW91cyA9PSBcIm51bWJlclwiIClcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9fbG9ja3MuYWxsICs9IHByZXZpb3VzO1xuICAgICAgICBpZiAoIGlzLmFycmF5KHByZXZpb3VzKSApXG4gICAgICAgICAgICByZXR1cm4gcHJldmlvdXMubWFwKHRoaXMud2FpdC5iaW5kKHRoaXMpKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX3N0YWJsZSAmJiB0aGlzLmVtaXQoJ3Vuc3RhYmxlJywgdGhpcy5zdGF0ZSwgdGhpcy5kYXRhKTtcbiAgICAgICAgdGhpcy5fc3RhYmxlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX19sb2Nrcy5hbGwrKztcbiAgICAgICAgXG4gICAgICAgIGxldCByZWFzb24gPSBpcy5zdHJpbmcocHJldmlvdXMpID8gcHJldmlvdXMgOiBudWxsO1xuICAgICAgICBpZiAoIHJlYXNvbiApIHtcbiAgICAgICAgICAgIHRoaXMuX19sb2Nrc1tyZWFzb25dID0gdGhpcy5fX2xvY2tzW3JlYXNvbl0gfHwgMDtcbiAgICAgICAgICAgIHRoaXMuX19sb2Nrc1tyZWFzb25dKys7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCBwcmV2aW91cyAmJiBpcy5mbihwcmV2aW91cy50aGVuKSApIHtcbiAgICAgICAgICAgIHByZXZpb3VzLnRoZW4odGhpcy5yZWxlYXNlLmJpbmQodGhpcywgbnVsbCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBEZWNyZWFzZSBsb2NrcyBmb3IgdGhpcyBzdG9yZSwgaWYgaXQgcmVhY2ggMCAmIGl0IGhhdmUgYSBwdWJsaWMgc3RhdGUsXG4gICAgICogaXQgd2lsbCBiZSBwcm9wYWdhdGVkIHRvIHRoZSBmb2xsb3dlcnMsXG4gICAgICogdGhlbiwgYWxsIHN0dWZmIHBhc3NlZCB0byBcInRoZW5cIiBjYWxsIGJhY2sgd2lsbCBiZSBleGVjIC8gcmVsZWFzZWRcbiAgICAgKiBAcGFyYW0gZGVzeW5jXG4gICAgICogQHJldHVybnMgeyp9XG4gICAgICovXG4gICAgcmVsZWFzZSggcmVhc29uLCBjYiApIHtcbiAgICAgICAgdmFyIF9zdGF0aWMgPSB0aGlzLmNvbnN0cnVjdG9yLCBtZSA9IHRoaXM7XG4gICAgICAgIGxldCBpICAgICAgID0gMCwgd2FzU3RhYmxlID0gdGhpcy5fc3RhYmxlO1xuICAgICAgICBcbiAgICAgICAgaWYgKCBpcy5mbihyZWFzb24pICkge1xuICAgICAgICAgICAgY2IgICAgID0gcmVhc29uO1xuICAgICAgICAgICAgcmVhc29uID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKCByZWFzb24gKSB7XG4gICAgICAgICAgICBpZiAoIHRoaXMuX19sb2Nrc1tyZWFzb25dID09IDAgKVxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJSZWxlYXNlIG1vcmUgdGhhbiBsb2NraW5nICFcIiwgcmVhc29uKTtcbiAgICAgICAgICAgIHRoaXMuX19sb2Nrc1tyZWFzb25dID0gdGhpcy5fX2xvY2tzW3JlYXNvbl0gfHwgMDtcbiAgICAgICAgICAgIHRoaXMuX19sb2Nrc1tyZWFzb25dLS07XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmICggIXJlYXNvbiAmJiB0aGlzLl9fbG9ja3MuYWxsID09IDAgKVxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlJlbGVhc2UgbW9yZSB0aGFuIGxvY2tpbmcgIVwiKTtcbiAgICAgICAgXG4gICAgICAgIGlmICggIS0tdGhpcy5fX2xvY2tzLmFsbCAmJiB0aGlzLmRhdGEgJiYgdGhpcy5pc0NvbXBsZXRlKCkgKSB7XG4gICAgICAgICAgICBsZXQgcHJvcGFnICAgPSB0aGlzLnNob3VsZFByb3BhZyh0aGlzLmRhdGEpO1xuICAgICAgICAgICAgdGhpcy5fc3RhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIHByb3BhZyAmJiB0aGlzLl9yZXYrKzsvL1xuICAgICAgICAgICAgaWYgKCBwcm9wYWcgJiYgdGhpcy5fZm9sbG93ZXJzLmxlbmd0aCApXG4gICAgICAgICAgICAgICAgdGhpcy5fZm9sbG93ZXJzLmZvckVhY2goZnVuY3Rpb24gcHJvcGFnKCBmb2xsb3dlciApIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSBmb2xsb3dlclsyXSA/IG1lLnJldHJpZXZlKGZvbGxvd2VyWzJdKSA6IG1lLmRhdGE7XG4gICAgICAgICAgICAgICAgICAgIGlmICggIWRhdGEgKSByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpZiAoIHR5cGVvZiBmb2xsb3dlclswXSA9PSBcImZ1bmN0aW9uXCIgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb2xsb3dlclswXShkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY2IgJiYgaSsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9sbG93ZXJbMF0uc2V0U3RhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGZvbGxvd2VyWzFdKSA/IHsgW2ZvbGxvd2VyWzFdXTogZGF0YSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogZGF0YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vY2IgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICgpID0+ICghKC0taSkgJiYgY2IoKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLylcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vZWxzZVxuICAgICAgICAgICAgIXdhc1N0YWJsZSAmJiB0aGlzLmVtaXQoJ3N0YWJsZScsIHRoaXMuZGF0YSk7XG4gICAgICAgICAgICBwcm9wYWcgJiYgdGhpcy5lbWl0KCd1cGRhdGUnLCB0aGlzLmRhdGEpO1xuICAgICAgICAgICAgY2IgJiYgY2IoKVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgY2IgJiYgdGhpcy50aGVuKGNiKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIFxuICAgIHJldGFpbiggcmVhc29uICkge1xuICAgICAgICB0aGlzLl9fcmV0YWlucy5hbGwrKztcbiAgICAgICAgaWYgKCByZWFzb24gKSB7XG4gICAgICAgICAgICB0aGlzLl9fcmV0YWluc1tyZWFzb25dID0gdGhpcy5fX3JldGFpbnNbcmVhc29uXSB8fCAwO1xuICAgICAgICAgICAgdGhpcy5fX3JldGFpbnNbcmVhc29uXSsrO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGRpc3Bvc2UoIHJlYXNvbiApIHtcbiAgICAgICAgLy9jb25zb2xlLndhcm4oXCJkaXNwb3NlXCIsIHJlYXNvbiwgdGhpcy5fX3JldGFpbnMpO1xuICAgICAgICBpZiAoIHJlYXNvbiApIHtcbiAgICAgICAgICAgIGlmICggIXRoaXMuX19yZXRhaW5zW3JlYXNvbl0gKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkRpc3Bvc2UgbW9yZSB0aGFuIHJldGFpbmluZyA6IFwiICsgcmVhc29uKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5fX3JldGFpbnNbcmVhc29uXS0tO1xuICAgICAgICB9XG4gICAgICAgIGlmICggdGhpcy5fX3JldGFpbnMuYWxsID09IDAgKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRGlzcG9zZSBtb3JlIHRoYW4gcmV0YWluaW5nICFcIik7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9fcmV0YWlucy5hbGwtLTtcbiAgICAgICAgXG4gICAgICAgIGlmICggIXRoaXMuX19yZXRhaW5zLmFsbCApIHtcbiAgICAgICAgICAgIGlmICggdGhpcy5fcGVyc2lzdGVuY2VUbSApIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9kZXN0cm95VE0gJiYgY2xlYXJUaW1lb3V0KHRoaXMuX2Rlc3Ryb3lUTSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fZGVzdHJveVRNID0gc2V0VGltZW91dChcbiAgICAgICAgICAgICAgICAgICAgZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9kZXN0cm95VE0gPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50aGVuKHMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICF0aGlzLl9fcmV0YWlucy5hbGwgJiYgdGhpcy5kZXN0cm95KClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wZXJzaXN0ZW5jZVRtXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMudGhlbihzID0+ICghdGhpcy5fX3JldGFpbnMuYWxsICYmIHRoaXMuZGVzdHJveSgpKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgLy8gIGNvbnNvbGUubG9nKFwiZGVzdHJveVwiLCB0aGlzLl91aWQpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5lbWl0KCdkZXN0cm95JywgdGhpcyk7XG4gICAgICAgIGlmICggdGhpcy5fc3RhYmlsaXplciApXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5fc3RhYmlsaXplcik7XG4gICAgICAgIFxuICAgICAgICBpZiAoIHRoaXMuX2ZvbGxvd2Vycy5sZW5ndGggKVxuICAgICAgICAgICAgdGhpcy5fZm9sbG93ZXJzLmZvckVhY2goXG4gICAgICAgICAgICAgICAgKCBmb2xsb3dlciApID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCB0eXBlb2YgZm9sbG93ZXJbMF0gIT09IFwiZnVuY3Rpb25cIiApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICggZm9sbG93ZXJbMF0uc3RvcmVzIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgZm9sbG93ZXJbMF0uc3RvcmVzW2ZvbGxvd2VyWzFdXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgIHRoaXMuX2ZvbGxvd2Vycy5sZW5ndGggPSAwO1xuICAgICAgICB0aGlzLmNvbnN0cnVjdG9yLl9yZXYgID0gdGhpcy5yZXY7XG4gICAgICAgIHRoaXMuZGVhZCAgICAgICAgICAgICAgPSB0cnVlO1xuICAgICAgICB0aGlzLl9yZXZzICAgICAgICAgICAgID0gdGhpcy5kYXRhID0gdGhpcy5zdGF0ZSA9IHRoaXMuc2NvcGUgPSBudWxsO1xuICAgICAgICB0aGlzLnJlbW92ZUFsbExpc3RlbmVycygpO1xuICAgIH1cbn1cblxuXG5TdG9yZS5TZWVkID0gY2xhc3MgU2VlZFN0b3JlIGV4dGVuZHMgU3RvcmUge1xuICAgIHN0YXRpYyBTRUVEID0gdHJ1ZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RvcmU7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1N0b3JlLmpzIiwiLypcclxuICogQ29weXJpZ2h0IChjKSAgMjAxOCBXaXNlIFdpbGQgV2ViIC5cclxuICpcclxuICogIE1JVCBMaWNlbnNlXHJcbiAqXHJcbiAqICBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XHJcbiAqICBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXHJcbiAqICBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXHJcbiAqICB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXHJcbiAqICBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcclxuICogIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcbiAqXHJcbiAqICBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcclxuICogIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcbiAqXHJcbiAqICBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXHJcbiAqICBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcclxuICogIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxyXG4gKiAgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxyXG4gKiAgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcclxuICogIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXHJcbiAqICBTT0ZUV0FSRS5cclxuICpcclxuICogQGF1dGhvciA6IE5hdGhhbmFlbCBCcmF1blxyXG4gKiBAY29udGFjdCA6IGNhaXBpbGFic0BnbWFpbC5jb21cclxuICovXHJcblxyXG4vKipcclxuICogTWluaW1hbCBwdXNoIHNlcXVlbmNlciwgYXBwbHkgc3RvcmVzIHNwZWNpZmljIHRhc2sgaW4gdGhlIHJpZ2h0IG9yZGVyIChyb290IHN0b3JlcyBmaXJzdClcclxuICovXHJcbmxldCB0YXNrUXVldWUgPSBbXSxcclxuICAgIGN1cldlaWdodCA9IDAsXHJcbiAgICBtYXhXZWlnaHQgPSAwLFxyXG4gICAgbWluV2VpZ2h0ID0gMCxcclxuICAgIHRhc2tDb3VudCA9IDAsXHJcbiAgICAvL2RlU3luY1N0ZXBzID0gMTAwMCxcclxuICAgIGlzUnVubmluZyxcclxuICAgIHJ1bm5pbmdUbTtcclxuXHJcbmZ1bmN0aW9uIHJ1bk5vdygpIHtcclxuICAgIGlmICggIXJ1bm5pbmdUbSApIHtcclxuICAgICAgICBydW4oKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcnVuKCBoYXpGYWlsLCBmYWlsZWRUYXNrICkge1xyXG4gICAgbGV0IHRhc2ssIGZhaWwgPSB0cnVlO1xyXG4gICAgXHJcbiAgICBpZiAoIGhhekZhaWwgKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIlJlU2NvcGUgOiBBIHRhc2sgaGFzIGZhaWxlZCAhIVwiLCBmYWlsZWRUYXNrKVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBydW5uaW5nVG0gPSBzZXRUaW1lb3V0KCgpID0+IHJ1bihmYWlsLCB0YXNrKSk7XHJcbiAgICBcclxuICAgIHdoaWxlICggdGFza0NvdW50ICkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIHRyeSBmb3IgdGhlIGN1cnJlbnQgd2VpZ2h0XHJcbiAgICAgICAgd2hpbGUgKCAhKHRhc2tRdWV1ZVtjdXJXZWlnaHRdICYmIHRhc2tRdWV1ZVtjdXJXZWlnaHRdLmxlbmd0aCkgKVxyXG4gICAgICAgICAgICBjdXJXZWlnaHQrKztcclxuICAgICAgICBcclxuICAgICAgICB0YXNrQ291bnQtLTtcclxuICAgICAgICB0YXNrID0gdGFza1F1ZXVlW2N1cldlaWdodF0uc2hpZnQoKTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKFwiVGFzayA6IFwiLCB0YXNrWzFdLCBcIiBvbiBcIiwgdGFza1swXS5uYW1lKTtcclxuICAgICAgICB0YXNrWzBdW3Rhc2tbMV1dLmFwcGx5KHRhc2tbMF0sIHRhc2tbMl0pO1xyXG4gICAgfVxyXG4gICAgZmFpbCA9IHRhc2sgPSB1bmRlZmluZWQ7XHJcbiAgICBcclxuICAgIGlmICggIXRhc2tDb3VudCApIHtcclxuICAgICAgICBjbGVhclRpbWVvdXQocnVubmluZ1RtKTtcclxuICAgICAgICBydW5uaW5nVG0gPSBudWxsO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBwdXNoVGFzayggb2JqLCBmbiwgYXJneiApIHtcclxuICAgICAgICBsZXQgd2VpZ2h0ID0gb2JqLl9zb3VyY2VzICYmIG9iai5fc291cmNlcy5sZW5ndGggfHwgMSxcclxuICAgICAgICAgICAgc3RhY2sgID0gdGFza1F1ZXVlW3dlaWdodF0gPVxyXG4gICAgICAgICAgICAgICAgdGFza1F1ZXVlW3dlaWdodF0gfHwgW107XHJcbiAgICAgICAgXHJcbiAgICAgICAgbWF4V2VpZ2h0ID0gTWF0aC5tYXgobWF4V2VpZ2h0LCB3ZWlnaHQpO1xyXG4gICAgICAgIGN1cldlaWdodCA9IE1hdGgubWluKGN1cldlaWdodCwgd2VpZ2h0KTtcclxuICAgICAgICB0YXNrQ291bnQrKztcclxuICAgIFxyXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJQdXNoIFRhc2sgOiBcIiwgZm4sIFwiIG9uIFwiLCBvYmoubmFtZSwgd2VpZ2h0KTtcclxuICAgICAgICBzdGFjay5wdXNoKFtvYmosIGZuLCBhcmd6XSk7XHJcbiAgICAgICAgc2V0VGltZW91dChydW5Ob3cpO1xyXG4gICAgICAgIHJldHVybiBzdGFjay5sZW5ndGg7XHJcbiAgICB9XHJcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1Rhc2tTZXF1ZW5jZXIuanMiLCIvKlxuICogQ29weXJpZ2h0IChjKSAgMjAxOCBXaXNlIFdpbGQgV2ViIC5cbiAqXG4gKiAgTUlUIExpY2Vuc2VcbiAqICBcbiAqICBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiAgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqICB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiAgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiAgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqICBcbiAqICBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcbiAqICBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICogIFxuICogIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqICBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqICBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqICBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiAgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqICBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuICogIFNPRlRXQVJFLlxuICogIFxuICogQGF1dGhvciA6IE5hdGhhbmFlbCBCcmF1blxuICogQGNvbnRhY3QgOiBjYWlwaWxhYnNAZ21haWwuY29tXG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGlzIGZyb20gJ2lzJ1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBTY29wZSBmcm9tICcuL1Njb3BlJztcblxuY29uc3QgU2ltcGxlT2JqZWN0UHJvdG8gPSAoe30pLmNvbnN0cnVjdG9yO1xuXG4vKipcbiAqIEluaGVyaXRhYmxlIFJlU2NvcGUgXCJIT0NcIiAoSGlnaCBPcmRlciBDb21wb25lbnQpXG4gKlxuICogQGNsYXNzIENvbXBvbmVudFxuICogQGRlc2MgUGFyZW50IFJlYWN0IENvbXBvbmVudCB3aXRoIHN0b3JlIGluamVjdGlvbiBpbiBpdHMgc3RhdGVcbiAqL1xuY2xhc3MgQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgY2hpbGRDb250ZXh0VHlwZXMgPSB7XG4gICAgICAgIHJlc2NvcGU6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgICAgICRzdG9yZXM6IFByb3BUeXBlcy5vYmplY3RcbiAgICB9XG4gICAgc3RhdGljIGNvbnRleHRUeXBlcyAgICAgID0ge1xuICAgICAgICByZXNjb3BlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgICAgICAkc3RvcmVzOiBQcm9wVHlwZXMub2JqZWN0XG4gICAgfVxuICAgIFxuICAgIGNvbnN0cnVjdG9yKCBwLCBjdHgsIHEgKSB7XG4gICAgICAgIHN1cGVyKHAsIGN0eCwgcSk7XG4gICAgICAgIGxldCBzY29wZSAgICA9XG4gICAgICAgICAgICAgICAgcC5fX3Njb3BlXG4gICAgICAgICAgICAgICAgfHwgY3R4LnJlc2NvcGU7XG4gICAgICAgIHRoaXMuJHNjb3BlICA9IHNjb3BlO1xuICAgICAgICB0aGlzLiRzdG9yZXMgPSB0aGlzLiRzY29wZSAmJiB0aGlzLiRzY29wZS5zdG9yZXM7XG4gICAgICAgIGlmICggdGhpcy5jb25zdHJ1Y3Rvci51c2UgKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUsXG4gICAgICAgICAgICAgICAgLi4uc2NvcGUubWFwKHRoaXMsIHRoaXMuY29uc3RydWN0b3IudXNlIHx8IFtdLCBmYWxzZSkvLyBkb24ndCBiaW5kXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoICF0aGlzLiRzY29wZSApXG4gICAgICAgICAgICB0aGlzLnJlbmRlciA9ICgpID0+IDxkaXY+Tm8gUmVzY29wZSBoZXJlIHsgc3VwZXIubmFtZSB9PC9kaXY+XG4gICAgfVxuICAgIFxuICAgIGRpc3BhdGNoKCAuLi5hcmd6ICkge1xuICAgICAgICB0aGlzLiRzY29wZSAmJiB0aGlzLiRzY29wZS5kaXNwYXRjaCguLi5hcmd6KVxuICAgIH1cbiAgICBcbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICAgIGlmICggdGhpcy5jb25zdHJ1Y3Rvci51c2UgKSB7XG4gICAgICAgICAgICB0aGlzLiRzY29wZS5iaW5kKHRoaXMsIHRoaXMuY29uc3RydWN0b3IudXNlIHx8IFtdLCBmYWxzZSlcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgdGhpcy5jb25zdHJ1Y3Rvci51c2VcbiAgICAgICAgJiYgdGhpcy4kc2NvcGUudW5CaW5kKHRoaXMsIHRoaXMuY29uc3RydWN0b3IudXNlIHx8IFtdKTtcbiAgICAgICAgdGhpcy4kc2NvcGUgPSBudWxsO1xuICAgIH1cbiAgICBcbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKCBucCwgbmMgKSB7XG4gICAgICAgIGxldCBuU2NvcGUgPSBucC5fX3Njb3BlXG4gICAgICAgICAgICB8fCBuYy5yZXNjb3BlIHx8IHRoaXMuJHNjb3BlO1xuICAgICAgICBcbiAgICAgICAgaWYgKCBuU2NvcGUgIT0gdGhpcy4kc2NvcGUgKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnN0cnVjdG9yLnVzZSAmJiB0aGlzLiRzY29wZS51bkJpbmQodGhpcywgdGhpcy5jb25zdHJ1Y3Rvci51c2UpO1xuICAgICAgICAgICAgdGhpcy4kc2NvcGUgID0gblNjb3BlO1xuICAgICAgICAgICAgdGhpcy4kc3RvcmVzID0gdGhpcy4kc2NvcGUuc3RvcmVzO1xuICAgICAgICAgICAgdGhpcy5jb25zdHJ1Y3Rvci51c2UgJiYgblNjb3BlLmJpbmQodGhpcywgdGhpcy5jb25zdHJ1Y3Rvci51c2UpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGdldENoaWxkQ29udGV4dCgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJlc2NvcGU6IHRoaXMuJHNjb3BlIHx8IHRoaXMuY29udGV4dC5yZXNjb3BlLFxuICAgICAgICAgICAgJHN0b3JlczogdGhpcy4kc2NvcGUuc3RvcmVzIHx8IHRoaXMuY29udGV4dC4kc3RvcmVzXG4gICAgICAgIH07XG4gICAgfVxuICAgIFxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuY2hpbGRyZW4gfHwgPGRpdi8+XG4gICAgfVxufTtcblxuLyoqXG4gKiBSZXR1cm4gYSBSZWFjdCBcIkhPQ1wiIChIaWdoIE9yZGVyIENvbXBvbmVudCkgdGhhdCA6XG4gKiAgLSBJbmhlcml0IEJhc2VDb21wb25lbnQsXG4gKiAgLSBJbmplY3QgJiBtYWludGFpbiB0aGUgc3RvcmVzIGluIEJhc2VDb21wb25lbnQ6OnVzZSBhbmQvb3IgKHVzZSkgaW4gdGhlIGluc3RhbmNlcyBzdGF0ZS5cbiAqICAtIFByb3BhZyAoc2NvcGUpIGluIHRoZSByZXR1cm5lZCBSZWFjdCBDb21wb25lbnQgY29udGV4dFxuICpcbiAqXG4gKiBAcGFyYW0gQmFzZUNvbXBvbmVudCB7UmVhY3QuQ29tcG9uZW50fSBCYXNlIFJlYWN0IENvbXBvbmVudCAoIGRlZmF1bHQgOiBSZWFjdC5Db21wb25lbnQgKVxuICogQHBhcmFtIHNjb3BlIHtSZVNjb3BlLlNjb3BlfGZ1bmN0aW9ufSB0aGUgcHJvcGFnYXRlZCBTY29wZSB3aGVyZSB0aGUgc3RvcmVzIHdpbGwgYmUgc2VhcmNoZWRcbiAqIEBwYXJhbSB1c2Uge2FycmF5fSB0aGUgbGlzdCBvZiBzdG9yZXMgaW5qZWN0ZWQgZnJvbSB0aGUgY3VycmVudCBzY29wZVxuICogQHBhcmFtIGFkZGl0aW9uYWxDb250ZXh0IHtPYmplY3R9IGNvbnRleHQgdG8gYmUgcHJvcGFnYXRlZFxuICogQHJldHVybnMge1JlU2NvcGVQcm92aWRlcn1cbiAqL1xuZnVuY3Rpb24gcmVTY29wZVN0YXRlKCAuLi5hcmd6ICkge1xuICAgIGxldCBCYXNlQ29tcG9uZW50ICAgICA9ICghYXJnelswXSB8fCBhcmd6WzBdLnByb3RvdHlwZSAmJiBhcmd6WzBdLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50KSAmJiBhcmd6LnNoaWZ0KCksXG4gICAgICAgIHNjb3BlICAgICAgICAgICAgID0gKCFhcmd6WzBdIHx8IGFyZ3pbMF0gaW5zdGFuY2VvZiBTY29wZSB8fCBpcy5mbihhcmd6WzBdKSkgJiYgYXJnei5zaGlmdCgpLFxuICAgICAgICB1c2UgICAgICAgICAgICAgICA9ICghYXJnelswXSB8fCBpcy5hcnJheShhcmd6WzBdKSkgJiYgYXJnei5zaGlmdCgpLFxuICAgICAgICBhZGRpdGlvbmFsQ29udGV4dCA9ICghYXJnelswXSB8fCBhcmd6WzBdIGluc3RhbmNlb2YgU2ltcGxlT2JqZWN0UHJvdG8pICYmIGFyZ3ouc2hpZnQoKTtcbiAgICBcbiAgICBpZiAoICEoQmFzZUNvbXBvbmVudCAmJiBCYXNlQ29tcG9uZW50LnByb3RvdHlwZSAmJiBCYXNlQ29tcG9uZW50LnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50KSApIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICggQmFzZUNvbXBvbmVudCApIHtcbiAgICAgICAgICAgIHJldHVybiByZVNjb3BlU3RhdGUoQmFzZUNvbXBvbmVudCwgc2NvcGUsIHVzZSwgYWRkaXRpb25hbENvbnRleHQpXG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgdXNlICAgICAgICAgICAgICAgPSBbLi4uKEJhc2VDb21wb25lbnQudXNlIHx8IFtdKSwgLi4uKHVzZSB8fCBbXSldO1xuICAgIGFkZGl0aW9uYWxDb250ZXh0ID0gYWRkaXRpb25hbENvbnRleHQgJiYgT2JqZWN0LmtleXMoYWRkaXRpb25hbENvbnRleHQpLnJlZHVjZSgoIGgsIGsgKSA9PiAoaFtrXSA9IFByb3BUeXBlcy5hbnksIGgpLCB7fSkgfHwge307XG4gICAgXG4gICAgY2xhc3MgUmVTY29wZVByb3ZpZGVyIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gICAgICAgIHN0YXRpYyBjaGlsZENvbnRleHRUeXBlcyA9IHtcbiAgICAgICAgICAgIC4uLihCYXNlQ29tcG9uZW50LmNoaWxkQ29udGV4dFR5cGVzIHx8IHt9KSxcbiAgICAgICAgICAgIC4uLihhZGRpdGlvbmFsQ29udGV4dCksXG4gICAgICAgICAgICByZXNjb3BlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgICAgICAgICAgJHN0b3JlczogUHJvcFR5cGVzLm9iamVjdFxuICAgICAgICB9XG4gICAgICAgIHN0YXRpYyBjb250ZXh0VHlwZXMgICAgICA9IHtcbiAgICAgICAgICAgIC4uLihCYXNlQ29tcG9uZW50LmNvbnRleHRUeXBlcyB8fCB7fSksXG4gICAgICAgICAgICAuLi4oYWRkaXRpb25hbENvbnRleHQpLFxuICAgICAgICAgICAgcmVzY29wZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICAgICAgICAgICRzdG9yZXM6IFByb3BUeXBlcy5vYmplY3RcbiAgICAgICAgfVxuICAgICAgICBzdGF0aWMgZGVmYXVsdFByb3BzICAgICAgPSB7XG4gICAgICAgICAgICAuLi4oQmFzZUNvbXBvbmVudC5kZWZhdWx0UHJvcHMgfHwge30pLFxuICAgICAgICB9XG4gICAgICAgIHN0YXRpYyBkaXNwbGF5TmFtZSAgICAgICA9IFwic3RhdGVTY29wZWQoXCIgKyAoQmFzZUNvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBCYXNlQ29tcG9uZW50Lm5hbWUpICsgXCIpXCI7XG4gICAgICAgIFxuICAgICAgICBjb25zdHJ1Y3RvciggcCwgY3R4LCBxICkge1xuICAgICAgICAgICAgc3VwZXIocCwgY3R4LCBxKTtcbiAgICAgICAgICAgIHRoaXMuJHNjb3BlID1cbiAgICAgICAgICAgICAgICBwLl9fc2NvcGVcbiAgICAgICAgICAgICAgICB8fCBpcy5mbihzY29wZSkgJiYgc2NvcGUodGhpcywgcCwgY3R4KSB8fCBzY29wZVxuICAgICAgICAgICAgICAgIHx8IGN0eC5yZXNjb3BlO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpcy5mbihzY29wZSlcbiAgICAgICAgICAgICYmIHRoaXMuJHNjb3BlLnJldGFpbigpXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMuJHN0b3JlcyA9IHRoaXMuJHNjb3BlICYmIHRoaXMuJHNjb3BlLnN0b3JlcztcbiAgICAgICAgICAgIGlmICggdGhpcy4kc2NvcGUgJiYgdXNlLmxlbmd0aCApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgICAgICAgICAuLi50aGlzLnN0YXRlLFxuICAgICAgICAgICAgICAgICAgICAuLi50aGlzLiRzY29wZS5tYXAodGhpcywgdXNlLCBmYWxzZSkvLyBkb24ndCBiaW5kIG5vdyBkdWUgdG8gU1NSXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoICF0aGlzLiRzY29wZSApXG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXIgPSAoKSA9PiA8ZGl2Pk5vIFJlU2NvcGUgY29udGV4dCBpbiB7IEJhc2VDb21wb25lbnQubmFtZSB9PC9kaXY+XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICRkaXNwYXRjaCggLi4uYXJneiApIHtcbiAgICAgICAgICAgIHRoaXMuJHNjb3BlLmRpc3BhdGNoKC4uLmFyZ3opXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgICAgICAgIGlmICggdXNlLmxlbmd0aCApIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRzY29wZS5iaW5kKHRoaXMsIHVzZSwgZmFsc2UpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzdXBlci5jb21wb25lbnRXaWxsTW91bnQgJiYgc3VwZXIuY29tcG9uZW50V2lsbE1vdW50KClcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgICAgICBzdXBlci5jb21wb25lbnRXaWxsVW5tb3VudCAmJiBzdXBlci5jb21wb25lbnRXaWxsVW5tb3VudCgpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB1c2UubGVuZ3RoICYmIHRoaXMuJHNjb3BlLnVuQmluZCh0aGlzLCB1c2UpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpcy5mbihzY29wZSkgJiYgdGhpcy4kc2NvcGUuZGlzcG9zZSgpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBkZWxldGUgdGhpcy4kc3RvcmVzO1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuJHNjb3BlO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKCBucCwgbmMgKSB7XG4gICAgICAgICAgICBsZXQgblNjb3BlID0gbnAuX19zY29wZVxuICAgICAgICAgICAgICAgIHx8IHNjb3BlICYmIHRoaXMuJHNjb3BlXG4gICAgICAgICAgICAgICAgfHwgbmMucmVzY29wZVxuICAgICAgICAgICAgICAgIHx8IHRoaXMuJHNjb3BlO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoIG5TY29wZSAhPSB0aGlzLiRzY29wZSApIHtcbiAgICAgICAgICAgICAgICB1c2UubGVuZ3RoICYmIHRoaXMuJHNjb3BlLnVuQmluZCh0aGlzLCB1c2UpO1xuICAgICAgICAgICAgICAgIHRoaXMuJHNjb3BlICA9IG5TY29wZTtcbiAgICAgICAgICAgICAgICB0aGlzLiRzdG9yZXMgPSB0aGlzLiRzY29wZS5zdG9yZXM7XG4gICAgICAgICAgICAgICAgdXNlLmxlbmd0aCAmJiBuU2NvcGUuYmluZCh0aGlzLCB1c2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3VwZXIuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyAmJiBzdXBlci5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5wLCBuYyk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGdldENoaWxkQ29udGV4dCgpIHtcbiAgICAgICAgICAgIGxldCBjdHggPSBzdXBlci5nZXRDaGlsZENvbnRleHQgJiYgc3VwZXIuZ2V0Q2hpbGRDb250ZXh0KCkgfHwge307XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLmN0eCxcbiAgICAgICAgICAgICAgICByZXNjb3BlOiB0aGlzLiRzY29wZSB8fCB0aGlzLmNvbnRleHQucmVzY29wZSxcbiAgICAgICAgICAgICAgICAkc3RvcmVzOiB0aGlzLiRzY29wZS5zdG9yZXMgfHwgdGhpcy5jb250ZXh0LiRzdG9yZXNcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIFJlU2NvcGVQcm92aWRlcjtcbn1cblxuLyoqXG4gKiBSZXR1cm4gYSBSZWFjdCBcIkhPQ1wiIChIaWdoIE9yZGVyIENvbXBvbmVudCkgdGhhdCA6XG4gKiAgLSBJbmplY3QgJiBtYWludGFpbiB0aGUgc3RvcmVzIGxpc3RlZCBiYXNlQ29tcG9uZW50Ojp1c2UgYW5kL29yICh1c2UpIGluIHRoZSBpbnN0YW5jZXMgcHJvcHMuXG4gKiAgLSBQcm9wYWcgKHNjb3BlKSBpbiB0aGUgcmV0dXJuZWQgUmVhY3QgQ29tcG9uZW50IGNvbnRleHRcbiAqXG4gKiBAcGFyYW0gQmFzZUNvbXBvbmVudCB7UmVhY3QuQ29tcG9uZW50fSBCYXNlIFJlYWN0IENvbXBvbmVudCAoIGRlZmF1bHQgOiBSZWFjdC5Db21wb25lbnQgKVxuICogQHBhcmFtIHNjb3BlIHtSZVNjb3BlLlNjb3BlfGZ1bmN0aW9ufSB0aGUgcHJvcGFnYXRlZCBTY29wZSB3aGVyZSB0aGUgc3RvcmVzIHdpbGwgYmUgc2VhcmNoZWQgKCBkZWZhdWx0IDogdGhlIGRlZmF1bHRcbiAqICAgICBSZVNjb3BlOjpTY29wZTo6c2NvcGVzLnN0YXRpYyBzY29wZSApXG4gKiBAcGFyYW0gdXNlIHthcnJheX0gdGhlIGxpc3Qgb2Ygc3RvcmVzIHRvIGluamVjdCBmcm9tIHRoZSBjdXJyZW50IHNjb3BlXG4gKiBAcGFyYW0gYWRkaXRpb25hbENvbnRleHQge09iamVjdH0gY29udGV4dCB0byBiZSBwcm9wYWdhdGVkXG4gKiBAcmV0dXJucyB7UmVTY29wZVByb3ZpZGVyfVxuICovXG5mdW5jdGlvbiByZVNjb3BlUHJvcHMoIC4uLmFyZ3ogKSB7XG4gICAgbGV0IEJhc2VDb21wb25lbnQgICAgID0gKCFhcmd6WzBdIHx8IGFyZ3pbMF0ucHJvdG90eXBlICYmIGFyZ3pbMF0ucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQpICYmIGFyZ3ouc2hpZnQoKSxcbiAgICAgICAgc2NvcGUgICAgICAgICAgICAgPSAoIWFyZ3pbMF0gfHwgYXJnelswXSBpbnN0YW5jZW9mIFNjb3BlIHx8IGlzLmZuKGFyZ3pbMF0pKSAmJiBhcmd6LnNoaWZ0KCksXG4gICAgICAgIHVzZSAgICAgICAgICAgICAgID0gKCFhcmd6WzBdIHx8IGlzLmFycmF5KGFyZ3pbMF0pKSAmJiBhcmd6LnNoaWZ0KCksXG4gICAgICAgIGFkZGl0aW9uYWxDb250ZXh0ID0gKCFhcmd6WzBdIHx8IGFyZ3pbMF0gaW5zdGFuY2VvZiBTaW1wbGVPYmplY3RQcm90bykgJiYgYXJnei5zaGlmdCgpO1xuICAgIFxuICAgIGlmICggIShCYXNlQ29tcG9uZW50ICYmIEJhc2VDb21wb25lbnQucHJvdG90eXBlICYmIEJhc2VDb21wb25lbnQucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQpICkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCBCYXNlQ29tcG9uZW50ICkge1xuICAgICAgICAgICAgcmV0dXJuIHJlU2NvcGVQcm9wcyhCYXNlQ29tcG9uZW50LCBzY29wZSwgdXNlLCBhZGRpdGlvbmFsQ29udGV4dClcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICB1c2UgICAgICAgICAgICAgICA9IFsuLi4oQmFzZUNvbXBvbmVudC51c2UgfHwgW10pLCAuLi4odXNlIHx8IFtdKV07XG4gICAgYWRkaXRpb25hbENvbnRleHQgPSBhZGRpdGlvbmFsQ29udGV4dCAmJiBPYmplY3Qua2V5cyhhZGRpdGlvbmFsQ29udGV4dCkucmVkdWNlKCggaCwgayApID0+IChoW2tdID0gUHJvcFR5cGVzLmFueSwgaCksIHt9KSB8fCB7fTtcbiAgICBcbiAgICByZXR1cm4gcmVTY29wZVN0YXRlKGNsYXNzIFJlU2NvcGVQcm9wc1Byb3ZpZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICAgICAgc3RhdGljIGNoaWxkQ29udGV4dFR5cGVzID0ge1xuICAgICAgICAgICAgLi4uKEJhc2VDb21wb25lbnQuY29udGV4dFR5cGVzIHx8IHt9KSxcbiAgICAgICAgICAgIC4uLihhZGRpdGlvbmFsQ29udGV4dCksXG4gICAgICAgICAgICByZXNjb3BlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgICAgICAgICAgJHN0b3JlczogUHJvcFR5cGVzLm9iamVjdFxuICAgICAgICB9O1xuICAgICAgICBzdGF0aWMgY29udGV4dFR5cGVzICAgICAgPSB7XG4gICAgICAgICAgICAuLi4oQmFzZUNvbXBvbmVudC5jb250ZXh0VHlwZXMgfHwge30pLFxuICAgICAgICAgICAgLi4uKGFkZGl0aW9uYWxDb250ZXh0KSxcbiAgICAgICAgICAgIHJlc2NvcGU6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgICAgICAgICAkc3RvcmVzOiBQcm9wVHlwZXMub2JqZWN0XG4gICAgICAgIH07XG4gICAgICAgIHN0YXRpYyBkaXNwbGF5TmFtZSAgICAgICA9IFwicHJvcHNTY29wZWQoXCIgKyAoQmFzZUNvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBCYXNlQ29tcG9uZW50Lm5hbWUpICsgXCIpXCI7XG4gICAgICAgIFxuICAgICAgICBnZXRDaGlsZENvbnRleHQoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb250ZXh0O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZW5kZXIoKSB7XG4gICAgICAgICAgICByZXR1cm4gPEJhc2VDb21wb25lbnQgeyAuLi50aGlzLnByb3BzIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IC4uLnRoaXMuc3RhdGUgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRkaXNwYXRjaD17ICggLi4uYXJneiApID0+IHRoaXMuJGRpc3BhdGNoKC4uLmFyZ3opIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc3RvcmVzPXsgdGhpcy4kc3RvcmVzIH0vPlxuICAgICAgICB9XG4gICAgfSwgc2NvcGUsIHVzZSk7XG59XG5cbmV4cG9ydCB7XG4gICAgQ29tcG9uZW50IGFzIGRlZmF1bHQsXG4gICAgQ29tcG9uZW50LFxuICAgIHJlU2NvcGVQcm9wcyxcbiAgICByZVNjb3BlUHJvcHMgYXMgcmVzY29wZVByb3BzLFxuICAgIHJlU2NvcGVTdGF0ZSxcbiAgICByZVNjb3BlU3RhdGUgYXMgcmVzY29wZVN0YXRlXG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9SZWFjdFRvb2xzLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWFjdFwiXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCJcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==