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
	        var _ret2;
	
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
	
	        function ScopeObj(base) {
	            this.stores = base.stores;
	            this.data = base.data;
	            this.state = base.state;
	        }
	
	        ScopeObj.prototype = _this;
	        return _ret2 = new ScopeObj(_this), _possibleConstructorReturn(_this, _ret2);
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
	                    //console.log("setState ",obj, Object.keys(data))
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
	
	            if (this._stabilizer) return;
	
	            this._stabilizer = TaskSequencer.pushTask(this, 'push');
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
	
	            if (! --this.__locks.all && this.isComplete()) {
	                var propag = this.shouldPropag(this.data);
	                this._stable = true;
	                propag && this._rev++; //
	                if (propag && this._followers.length) this._followers.forEach(function propag(follower) {
	                    var data = follower[2] ? me.retrieve(follower[2]) : me.data;
	                    //if ( !data ) return;
	
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
	task = void 0,
	    isRunning = void 0,
	    errorCatcher = {
	    lastError: null,
	    dispatch: function dispatch(error) {
	        errorCatcher.disable();
	        if (task && task[0].handleError) {
	            task[0].handleError(error, task);
	        } else if (task) console.error("ReScope : A task has failed !!", task[1], " on ", task[0].name || task[0].constructor.name);
	
	        task = null;
	        run();
	    },
	    enable: typeof window !== 'undefined' ? function () {
	        window.addEventListener('error', errorCatcher.dispatch);
	    } : function () {
	        process.on('uncaughtException', errorCatcher.dispatch);
	    },
	    disable: typeof window !== 'undefined' ? function () {
	        window.removeEventListener('error', errorCatcher.dispatch);
	    } : function () {
	        process.removeListener('uncaughtException', errorCatcher.dispatch);
	    }
	};
	
	function runNow() {
	    if (!isRunning) {
	        run();
	    }
	}
	
	function run() {
	    isRunning = true;
	    errorCatcher.enable();
	    while (taskCount) {
	
	        // try for the current weight
	        while (!(taskQueue[curWeight] && taskQueue[curWeight].length)) {
	            curWeight++;
	        }taskCount--;
	        task = taskQueue[curWeight].shift();
	        //console.log("Task : ", task[1], " on ", task[0].name);
	        task[0][task[1]].apply(task[0], task[2]);
	    }
	    task = undefined;
	    errorCatcher.disable();
	
	    if (!taskCount) {
	        isRunning = false;
	        setTimeout(run);
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
	
	        if (_this.$scope.dead) {
	            console.error("ReScoping using dead scope");
	            _this.$scope = null;
	        }
	
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
	
	                if (this.$scope.dead) {
	                    console.error("ReScoping using dead scope");
	                    this.$stores = this.$scope = null;
	                } else {
	                    this.$stores = this.$scope.stores;
	                    this.constructor.use && nScope.bind(this, this.constructor.use);
	                }
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
	
	            if (_this2.$scope.dead) {
	                console.error("ReScoping using dead scope");
	                _this2.$scope = null;
	            }
	
	            _this2.$scope && _is2.default.fn(scope) && _this2.$scope.retain();
	
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
	
	                    if (this.$scope.dead) {
	                        console.error("ReScoping using dead scope");
	                        this.$stores = this.$scope = null;
	                    } else {
	                        this.$stores = this.$scope.stores;
	                        use.length && nScope.bind(this, use);
	                    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYmNmYTExYjNjYzRiMzcxOGM4NTgiLCJ3ZWJwYWNrOi8vLy4vc3JjL1JlU2NvcGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Njb3BlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImlzXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL0VtaXR0ZXIuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic2hvcnRpZFwiIiwid2VicGFjazovLy8uL3NyYy9TdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvVGFza1NlcXVlbmNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvUmVhY3RUb29scy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiJdLCJuYW1lcyI6WyJSVG9vbHMiLCJTdG9yZSIsIkNvbnRleHQiLCJTY29wZSIsIkNvbXBvbmVudCIsInJlU2NvcGVQcm9wcyIsInJlU2NvcGVTdGF0ZSIsIndpdGhTY29wZSIsImlzIiwicmVxdWlyZSIsIkV2ZW50RW1pdHRlciIsInNob3J0aWQiLCJfX3Byb3RvX19wdXNoIiwidGFyZ2V0IiwiaWQiLCJwYXJlbnQiLCJmbiIsInByb3RvdHlwZSIsIm9wZW5TY29wZXMiLCJzY29wZXMiLCJza2V5IiwiYXJyYXkiLCJzb3J0IiwiYSIsImIiLCJmaXJzdG5hbWUiLCJqb2luIiwic3RvcmVzTWFwIiwia2V5Iiwic3RhdGUiLCJkYXRhIiwibmFtZSIsImluY3JlbWVudElkIiwiZGVmYXVsdE1heExpc3RlbmVycyIsInBlcnNpc3RlbmNlVG0iLCJhdXRvRGVzdHJveSIsInJvb3RFbWl0dGVyIiwiX21heExpc3RlbmVycyIsImNvbnN0cnVjdG9yIiwiX2lkIiwiX2lzTG9jYWxJZCIsImdlbmVyYXRlIiwicmVnaXN0ZXIiLCJpIiwiX3BlcnNpc3RlbmNlVG0iLCJzdG9yZXMiLCJkZWFkIiwiRXJyb3IiLCJzb3VyY2VzIiwiX2NoaWxkU2NvcGVzIiwiX2NoaWxkU2NvcGVzTGlzdCIsIl91blN0YWJsZUNoaWxkcyIsIl9fcmV0YWlucyIsImFsbCIsIl9fbG9ja3MiLCJfX2xpc3RlbmluZyIsIl9fc2NvcGUiLCJfX21peGVkIiwiX19taXhlZExpc3QiLCJfZm9sbG93ZXJzIiwicmV0YWluIiwiX3N0YWJsZSIsIndhaXQiLCJvbiIsIl9fcGFyZW50TGlzdCIsInJlbGVhc2UiLCJfcHJvcGFnIiwiX2FkZENoaWxkIiwic2V0VGltZW91dCIsImRpc3Bvc2UiLCJTY29wZU9iaiIsImJhc2UiLCJzdG9yZXNMaXN0Iiwic25hcHNob3QiLCJmb3JFYWNoIiwiX21vdW50IiwiayIsImFyZ3VtZW50cyIsInN0b3JlIiwicmVkdWNlIiwibW91bnRlZCIsImN0eCIsInJlc3RvcmUiLCJ1bmRlZmluZWQiLCJzZXRTdGF0ZSIsInB1c2giLCJfd2F0Y2hTdG9yZSIsIl9hdXRvRGVzdHJveSIsImlzU3RhYmxlIiwicHJvcGFnIiwidGFyZ2V0Q3R4IiwibGlzdHMiLCJyZWxpbmsiLCJPYmplY3QiLCJrZXlzIiwic2luZ2xldG9uIiwic3JjQ3R4IiwiZXh0ZXJuYWwiLCJmb3JjZSIsImxjdHgiLCJfc3RvcmVzIiwiY29uc29sZSIsImluZm8iLCJfX3Byb3RvX18iLCJkZWZpbmVQcm9wZXJ0eSIsImdldCIsIl9zdGF0ZSIsInNldCIsInYiLCJfZGF0YSIsIm9iaiIsImFzIiwic2V0SW5pdGlhbCIsImxhc3RSZXZzIiwicmVmS2V5cyIsIm1hcCIsInN0cmluZyIsInBhcnNlUmVmIiwicmV2cyIsInJlZiIsInN0b3JlSWQiLCJyZXYiLCJyZWZzIiwibW91bnQiLCJnZXRVcGRhdGVzIiwiZm9sbG93ZXJzIiwibGVuZ3RoIiwic3BsaWNlIiwidG8iLCJiaW5kIiwibWl4ZWRDV1VubW91bnQiLCJ1bk1vdW50S2V5IiwiaXNSZWFjdENvbXBvbmVudCIsImhhc093blByb3BlcnR5IiwidW5CaW5kIiwic3BsaXQiLCJyZXRyaWV2ZSIsInBhdGgiLCJzbGljZSIsInN0b3Jlc1Jldk1hcCIsImxvY2FsIiwiX3JldiIsInVwZGF0ZWQiLCJnZXRTdG9yZXNSZXZzIiwib3V0cHV0IiwiYWxpYXMiLCJjaGlsZHMiLCJfZ2V0QWxsQ2hpbGRzIiwic2VyaWFsaXplIiwic25hcCIsImRlc3Ryb3kiLCJfcmVmIiwiYWN0aW9uIiwiZGlzcGF0Y2giLCJ0cmlnZ2VyIiwiY2IiLCJvbmNlIiwicmVhc29uIiwiZW1pdCIsImVycm9yIiwiX3N0YWJpbGl6ZXJUTSIsImNsZWFyVGltZW91dCIsIl9wcm9wYWdUTSIsInJlbWFwcyIsIndhc1N0YWJsZSIsImluZGV4T2YiLCJ1biIsIl9kZXN0cm95VE0iLCJ0aGVuIiwicmVtb3ZlTGlzdGVuZXIiLCJzaGlmdCIsIl9ybUNoaWxkIiwic2NvcGUiLCJFbWl0dGVyIiwiX2V2ZW50cyIsImV2dCIsImFyZ3oiLCJUYXNrU2VxdWVuY2VyIiwib2JqUHJvdG8iLCJnZXRQcm90b3R5cGVPZiIsImNvbXBvbmVudCIsIm9yaWdpbiIsInRhcmdldFJldnMiLCJfcmV2cyIsInRhcmdldFNjb3BlIiwiaW5pdGlhbE91dHB1dHMiLCJzdGF0aWNTY29wZSIsImZpbHRlciIsImRlZmF1bHROYW1lIiwibWF0Y2giLCJzdWJzdHIiLCJfc291cmNlcyIsIl9zdGF0aWMiLCJnZXRTY29wZSIsImNmZyIsIndhdGNocyIsInVzZSIsImFwcGx5IiwiaW5pdGlhbFN0YXRlIiwiYXBwbGllZCIsIl91aWQiLCJfb25TdGFiaWxpemUiLCJzY29wZU9iaiIsIl9yZXF1aXJlIiwiX3VzZSIsInJlZjIiLCJzaG91bGRBcHBseSIsIm1hbmFnZWQiLCJ3YXJuIiwibkRhdGFzIiwiciIsImNEYXRhcyIsImlzQ29tcGxldGUiLCJmb2xsb3ciLCJjYWxsIiwiY2hhbmdlcyIsInJlZmluZSIsIl9zdGFiaWxpemVyIiwicHVzaFRhc2siLCJhY3Rpb25zIiwibnMiLCJkb1dhaXQiLCJzIiwibmV4dFN0YXRlIiwiX2NoYW5nZXNTVyIsIm5leHREYXRhcyIsImhhc0RhdGFDaGFuZ2UiLCJzdGFibGUiLCJwU3RhdGUiLCJzeW5jIiwiY2hhbmdlIiwic3RhYmlsaXplIiwibWUiLCJmcm9tIiwicHVsbCIsImNvbXBsZXRlU3RhdGUiLCJoIiwicHJldmlvdXMiLCJzaG91bGRQcm9wYWciLCJmb2xsb3dlciIsInJlbW92ZUFsbExpc3RlbmVycyIsIlNlZWQiLCJTRUVEIiwidGFza1F1ZXVlIiwiY3VyV2VpZ2h0IiwibWF4V2VpZ2h0IiwibWluV2VpZ2h0IiwidGFza0NvdW50IiwidGFzayIsImlzUnVubmluZyIsImVycm9yQ2F0Y2hlciIsImxhc3RFcnJvciIsImRpc2FibGUiLCJoYW5kbGVFcnJvciIsInJ1biIsImVuYWJsZSIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJwcm9jZXNzIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJ1bk5vdyIsIndlaWdodCIsInN0YWNrIiwiTWF0aCIsIm1heCIsIm1pbiIsIlNpbXBsZU9iamVjdFByb3RvIiwicCIsInEiLCJyZXNjb3BlIiwiJHNjb3BlIiwiJHN0b3JlcyIsInJlbmRlciIsIm5wIiwibmMiLCJuU2NvcGUiLCJjb250ZXh0IiwicHJvcHMiLCJjaGlsZHJlbiIsImNoaWxkQ29udGV4dFR5cGVzIiwib2JqZWN0IiwiY29udGV4dFR5cGVzIiwiQmFzZUNvbXBvbmVudCIsImFkZGl0aW9uYWxDb250ZXh0IiwiYW55IiwiUmVTY29wZVByb3ZpZGVyIiwiZGVmYXVsdFByb3BzIiwiZGlzcGxheU5hbWUiLCIkZGlzcGF0Y2giLCJkZWZhdWx0IiwicmVzY29wZVByb3BzIiwicmVzY29wZVN0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7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SUFBcUUsR0FiN0YsV0F5Qko2SSxLQXpCSSxFQXlCR3dCLEdBekJILENBQVA7QUEwQkg7O1NBR2dCNkYsTyxHQUFiN1IsUztTQUNBQSxTLEdBQUFBLFM7U0FDQUMsWSxHQUFBQSxZO1NBQ2dCNlIsWSxHQUFoQjdSLFk7U0FDQUMsWSxHQUFBQSxZO1NBQ2dCNlIsWSxHQUFoQjdSLFk7Ozs7OztBQ3RUSixtQzs7Ozs7O0FDQUEsd0MiLCJmaWxlIjoiZGlzdC9SZVNjb3BlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGJjZmExMWIzY2M0YjM3MThjODU4IiwiLypcbiAqIENvcHlyaWdodCAoYykgIDIwMTggV2lzZSBXaWxkIFdlYiAuXG4gKlxuICogIE1JVCBMaWNlbnNlXG4gKlxuICogIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqICBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiAgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqICBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqICBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqICBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcbiAqICBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqICBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiAgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiAgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiAgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiAgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcbiAqICBTT0ZUV0FSRS5cbiAqXG4gKiBAYXV0aG9yIDogTmF0aGFuYWVsIEJyYXVuXG4gKiBAY29udGFjdCA6IGNhaXBpbGFic0BnbWFpbC5jb21cbiAqL1xuXG5pbXBvcnQgU2NvcGUgZnJvbSBcIi4vU2NvcGVcIjtcbmltcG9ydCBTdG9yZSBmcm9tIFwiLi9TdG9yZVwiO1xuaW1wb3J0IFJlYWN0VG9vbHMsICogYXMgUlRvb2xzIGZyb20gXCIuL1JlYWN0VG9vbHNcIjtcblxuU2NvcGUuU3RvcmUgPSBTdG9yZTtcbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBTdG9yZSxcbiAgICBDb250ZXh0ICAgICA6IFNjb3BlLFxuICAgIFNjb3BlLFxuICAgIENvbXBvbmVudCAgIDogUlRvb2xzLkNvbXBvbmVudCxcbiAgICByZVNjb3BlUHJvcHM6IFJUb29scy5yZVNjb3BlUHJvcHMsXG4gICAgcmVTY29wZVN0YXRlOiBSVG9vbHMucmVTY29wZVN0YXRlLFxuICAgIHdpdGhTY29wZSAgIDogUlRvb2xzLnJlU2NvcGVTdGF0ZVxufTtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1JlU2NvcGUuanMiLCIvKlxuICogQ29weXJpZ2h0IChjKSAgMjAxOCBXaXNlIFdpbGQgV2ViIC5cbiAqXG4gKiAgTUlUIExpY2Vuc2VcbiAqXG4gKiAgUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqICBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiAgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuICogIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqICBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqICBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqICBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiAgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqICBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuICogIFNPRlRXQVJFLlxuICpcbiAqIEBhdXRob3IgOiBOYXRoYW5hZWwgQnJhdW5cbiAqIEBjb250YWN0IDogY2FpcGlsYWJzQGdtYWlsLmNvbVxuICovXG5cblxudmFyIGlzICAgICAgICAgICAgICA9IHJlcXVpcmUoJ2lzJyksXG4gICAgRXZlbnRFbWl0dGVyICAgID0gcmVxdWlyZSgnLi9FbWl0dGVyJyksXG4gICAgc2hvcnRpZCAgICAgICAgID0gcmVxdWlyZSgnc2hvcnRpZCcpXG4gICAgLCBfX3Byb3RvX19wdXNoID0gKCB0YXJnZXQsIGlkLCBwYXJlbnQgKSA9PiB7XG4gICAgICAgIGxldCBmbiAgICAgICAgICAgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIH07XG4gICAgICAgIGZuLnByb3RvdHlwZSAgICAgPSBwYXJlbnQgPyBuZXcgcGFyZW50W1wiX1wiICsgaWRdKCkgOiB0YXJnZXRbaWRdIHx8IHt9O1xuICAgICAgICB0YXJnZXRbaWRdICAgICAgID0gbmV3IGZuKCk7XG4gICAgICAgIHRhcmdldFsnXycgKyBpZF0gPSBmbjtcbiAgICB9LFxuICAgIG9wZW5TY29wZXMgICAgICA9IHt9XG47XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NvcGUgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICAgIHN0YXRpYyBwZXJzaXN0ZW5jZVRtID0gMTsvLyBpZiA+IDAsIHdpbGwgd2FpdCAncGVyc2lzdGVuY2VUbScgbXMgYmVmb3JlIGRlc3Ryb3kgd2hlbiBkaXNwb3NlIHJlYWNoIDBcbiAgICBzdGF0aWMgU3RvcmUgICAgICAgICA9IG51bGw7XG4gICAgc3RhdGljIHNjb3BlcyAgICAgICAgPSBvcGVuU2NvcGVzOy8vIGFsbCBhY3RpdmUgc2NvcGVzXG4gICAgXG4gICAgc3RhdGljIGdldFNjb3BlKCBzY29wZXMgKSB7XG4gICAgICAgIGxldCBza2V5ID0gaXMuYXJyYXkoc2NvcGVzKSA/IHNjb3Blcy5zb3J0KCggYSwgYiApID0+IHtcbiAgICAgICAgICAgIGlmICggYS5maXJzdG5hbWUgPCBiLmZpcnN0bmFtZSApIHJldHVybiAtMTtcbiAgICAgICAgICAgIGlmICggYS5maXJzdG5hbWUgPiBiLmZpcnN0bmFtZSApIHJldHVybiAxO1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH0pLmpvaW4oJzo6JykgOiBzY29wZXM7XG4gICAgICAgIHJldHVybiBvcGVuU2NvcGVzW3NrZXldID0gb3BlblNjb3Blc1tza2V5XSB8fCBuZXcgU2NvcGUoe30sIHsgaWQ6IHNrZXkgfSk7XG4gICAgfTtcbiAgICBcbiAgICAvKipcbiAgICAgKiBJbml0IGEgUmVzY29wZSBzY29wZVxuICAgICAqXG4gICAgICogQHBhcmFtIHN0b3Jlc01hcCB7T2JqZWN0fSBPYmplY3Qgd2l0aCB0aGUgb3JpZ2luIHN0b3Jlc1xuICAgICAqIEBwYXJhbSBpZCB7c3RyaW5nfSBAb3B0aW9uYWwgaWQgKCBpZiB0aGlzIGlkIGV4aXN0IHN0b3Jlc01hcCB3aWxsIGJlIG1lcmdlIG9uIHRoZSAnaWQnIHNjb3BlKVxuICAgICAqIEBwYXJhbSBwYXJlbnRcbiAgICAgKiBAcGFyYW0gc3RhdGVcbiAgICAgKiBAcGFyYW0gZGF0YVxuICAgICAqIEBwYXJhbSBuYW1lXG4gICAgICogQHBhcmFtIGRlZmF1bHRNYXhMaXN0ZW5lcnNcbiAgICAgKiBAcGFyYW0gcGVyc2lzdGVuY2VUbSB7bnVtYmVyKSBpZiA+IDAsIHdpbGwgd2FpdCAncGVyc2lzdGVuY2VUbScgbXMgYmVmb3JlIGRlc3Ryb3kgd2hlbiBkaXNwb3NlIHJlYWNoIDBcbiAgICAgKiBAcGFyYW0gYXV0b0Rlc3Ryb3kgIHtib29sfSB3aWxsIHRyaWdnZXIgcmV0YWluICYgZGlzcG9zZSBhZnRlciBzdGFydFxuICAgICAqIEByZXR1cm5zIHtTY29wZX1cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvciggc3RvcmVzTWFwLCB7IHBhcmVudCwga2V5LCBpZCwgc3RhdGUsIGRhdGEsIG5hbWUsIGluY3JlbWVudElkID0gISFrZXksIGRlZmF1bHRNYXhMaXN0ZW5lcnMsIHBlcnNpc3RlbmNlVG0sIGF1dG9EZXN0cm95LCByb290RW1pdHRlciB9ID0ge30gKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9tYXhMaXN0ZW5lcnMgPSBkZWZhdWx0TWF4TGlzdGVuZXJzIHx8IHRoaXMuY29uc3RydWN0b3IuZGVmYXVsdE1heExpc3RlbmVycztcbiAgICAgICAgXG4gICAgICAgIGlkID0gaWRcbiAgICAgICAgICAgIHx8IGtleSAmJiAoKHBhcmVudCAmJiBwYXJlbnQuX2lkIHx8ICcnKSArICc6OicgKyBrZXkpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5faXNMb2NhbElkID0gIWlkO1xuICAgICAgICBcbiAgICAgICAgaWQgPSBpZCB8fCAoXCJfX19fX1wiICsgc2hvcnRpZC5nZW5lcmF0ZSgpKTtcbiAgICAgICAgXG4gICAgICAgIGlmICggb3BlblNjb3Blc1tpZF0gJiYgIWluY3JlbWVudElkICkge1xuICAgICAgICAgICAgdGhpcy5faWQgPSBpZDtcbiAgICAgICAgICAgIG9wZW5TY29wZXNbaWRdLnJlZ2lzdGVyKHN0b3Jlc01hcCk7XG4gICAgICAgICAgICByZXR1cm4gb3BlblNjb3Blc1tpZF1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICggb3BlblNjb3Blc1tpZF0gJiYgaW5jcmVtZW50SWQgKSB7XG4gICAgICAgICAgICBsZXQgaSA9IC0xO1xuICAgICAgICAgICAgd2hpbGUgKCBvcGVuU2NvcGVzW2lkICsgJ1snICsgKCsraSkgKyAnXSddICkgO1xuICAgICAgICAgICAgaWQgPSBpZCArICdbJyArIGkgKyAnXSc7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRoaXMuX2lkICAgICAgICAgICAgPSBpZDtcbiAgICAgICAgb3BlblNjb3Blc1tpZF0gICAgICA9IHRoaXM7XG4gICAgICAgIHRoaXMuX3BlcnNpc3RlbmNlVG0gPSBwZXJzaXN0ZW5jZVRtIHx8IHRoaXMuY29uc3RydWN0b3IucGVyc2lzdGVuY2VUbTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuc3RvcmVzID0ge307XG4gICAgICAgIHRoaXMuc3RhdGUgID0ge307XG4gICAgICAgIHRoaXMuZGF0YSAgID0ge307XG4gICAgICAgIFxuICAgICAgICBpZiAoIHBhcmVudCAmJiBwYXJlbnQuZGVhZCApXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW4ndCB1c2UgYSBkZWFkIHNjb3BlIGFzIHBhcmVudCAhXCIpO1xuICAgICAgICBcbiAgICAgICAgX19wcm90b19fcHVzaCh0aGlzLCAnc3RvcmVzJywgcGFyZW50KTtcbiAgICAgICAgX19wcm90b19fcHVzaCh0aGlzLCAnc3RhdGUnLCBwYXJlbnQpO1xuICAgICAgICBfX3Byb3RvX19wdXNoKHRoaXMsICdkYXRhJywgcGFyZW50KTtcbiAgICAgICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgdGhpcy5zb3VyY2VzICAgICAgICAgID0gW107XG4gICAgICAgIHRoaXMuX2NoaWxkU2NvcGVzICAgICA9IFtdO1xuICAgICAgICB0aGlzLl9jaGlsZFNjb3Blc0xpc3QgPSBbXTtcbiAgICAgICAgdGhpcy5fdW5TdGFibGVDaGlsZHMgID0gMDtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX19yZXRhaW5zICAgPSB7IGFsbDogMCB9O1xuICAgICAgICB0aGlzLl9fbG9ja3MgICAgID0geyBhbGw6IDEgfTtcbiAgICAgICAgdGhpcy5fX2xpc3RlbmluZyA9IHt9O1xuICAgICAgICB0aGlzLl9fc2NvcGUgICAgID0ge307XG4gICAgICAgIHRoaXMuX19taXhlZCAgICAgPSBbXTtcbiAgICAgICAgdGhpcy5fX21peGVkTGlzdCA9IFtdO1xuICAgICAgICB0aGlzLl9mb2xsb3dlcnMgID0gW107XG4gICAgICAgIGlmICggcGFyZW50ICkge1xuICAgICAgICAgICAgcGFyZW50LnJldGFpbihcImlzTXlQYXJlbnRcIik7XG4gICAgICAgICAgICBpZiAoICFyb290RW1pdHRlciApIHtcbiAgICAgICAgICAgICAgICAhcGFyZW50Ll9zdGFibGUgJiYgdGhpcy53YWl0KFwid2FpdGluZ1BhcmVudFwiKTtcbiAgICAgICAgICAgICAgICBwYXJlbnQub24odGhpcy5fX3BhcmVudExpc3QgPSB7XG4gICAgICAgICAgICAgICAgICAgICdzdGFibGUnICA6IHMgPT4gdGhpcy5yZWxlYXNlKFwid2FpdGluZ1BhcmVudFwiKSxcbiAgICAgICAgICAgICAgICAgICAgJ3Vuc3RhYmxlJzogcyA9PiB0aGlzLndhaXQoXCJ3YWl0aW5nUGFyZW50XCIpLFxuICAgICAgICAgICAgICAgICAgICAndXBkYXRlJyAgOiBzID0+IHRoaXMuX3Byb3BhZygpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXJlbnQub24odGhpcy5fX3BhcmVudExpc3QgPSB7XG4gICAgICAgICAgICAgICAgICAgICd1cGRhdGUnOiBzID0+IHRoaXMuX3Byb3BhZygpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyB0aGlzLnJlZ2lzdGVyKHBhcmVudC5fX3Njb3BlLCBzdGF0ZSwgZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICB0aGlzLnJlZ2lzdGVyKHN0b3Jlc01hcCwgc3RhdGUsIGRhdGEpO1xuICAgICAgICB0aGlzLl9fbG9ja3MuYWxsLS07XG4gICAgICAgIHRoaXMuX3N0YWJsZSA9ICF0aGlzLl9fbG9ja3MuYWxsO1xuICAgICAgICBcbiAgICAgICAgaWYgKCBwYXJlbnQgKSB7XG4gICAgICAgICAgICBwYXJlbnQuX2FkZENoaWxkKHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIGlmICggYXV0b0Rlc3Ryb3kgKVxuICAgICAgICAgICAgc2V0VGltZW91dChcbiAgICAgICAgICAgICAgICB0bSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmV0YWluKFwiYXV0b0Rlc3Ryb3lcIik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzcG9zZShcImF1dG9EZXN0cm95XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIClcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICBmdW5jdGlvbiBTY29wZU9iaiggYmFzZSApIHtcbiAgICAgICAgICAgIHRoaXMuc3RvcmVzID0gYmFzZS5zdG9yZXM7XG4gICAgICAgICAgICB0aGlzLmRhdGEgICA9IGJhc2UuZGF0YTtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgID0gYmFzZS5zdGF0ZTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgU2NvcGVPYmoucHJvdG90eXBlID0gdGhpcztcbiAgICAgICAgcmV0dXJuIG5ldyBTY29wZU9iaih0aGlzKVxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBAZGVwcmVjYXRlZFxuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqL1xuICAgIGdldCBkYXRhcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBNb3VudCB0aGUgc3RvcmVzIGluIHN0b3Jlc0xpc3QsIGluIHRoaXMgc2NvcGUgb3IgaW4gaXRzIHBhcmVudHMgb3IgbWl4ZWQgc2NvcGVzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc3RvcmVzTGlzdCB7c3RyaW5nfHN0b3JlUmVmfSBTdG9yZSBuYW1lLCBBcnJheSBvZiBTdG9yZSBuYW1lcywgb3IgUmVzY29wZSBzdG9yZSByZWYgZnJvbSBTdG9yZTo6YXMgb3JcbiAgICAgKiAgICAgU3RvcmU6YXNcbiAgICAgKiBAcGFyYW0gc3RhdGVcbiAgICAgKiBAcGFyYW0gZGF0YVxuICAgICAqIEByZXR1cm5zIHtTY29wZX1cbiAgICAgKi9cbiAgICBtb3VudCggc3RvcmVzTGlzdCwgc25hcHNob3QsIHN0YXRlLCBkYXRhICkge1xuICAgICAgICBpZiAoIGlzLmFycmF5KHN0b3Jlc0xpc3QpICkge1xuICAgICAgICAgICAgc3RvcmVzTGlzdC5mb3JFYWNoKGsgPT4gdGhpcy5fbW91bnQoaywgc25hcHNob3QsIHN0YXRlLCBkYXRhKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9tb3VudCguLi5hcmd1bWVudHMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBcbiAgICBfbW91bnQoIGlkLCBzbmFwc2hvdCwgc3RhdGUsIGRhdGEgKSB7XG4gICAgICAgIGlmICggdHlwZW9mIGlkICE9PSAnc3RyaW5nJyApIHtcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXIoeyBbaWQubmFtZV06IGlkLnN0b3JlIH0pO1xuICAgICAgICAgICAgaWQgPSBpZC5uYW1lO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAoICF0aGlzLl9fc2NvcGVbaWRdICkgey8vYXNrIG1peGVkIHx8IHBhcmVudFxuICAgICAgICAgICAgaWYgKCB0aGlzLl9fbWl4ZWQucmVkdWNlKCggbW91bnRlZCwgY3R4ICkgPT4gKG1vdW50ZWQgfHwgY3R4Ll9tb3VudChpZCwgc25hcHNob3QsIHN0YXRlLCBkYXRhKSksIGZhbHNlKSB8fFxuICAgICAgICAgICAgICAgICF0aGlzLnBhcmVudCApXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyZW50Ll9tb3VudCguLi5hcmd1bWVudHMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbGV0IHN0b3JlID0gdGhpcy5fX3Njb3BlW2lkXSwgY3R4O1xuICAgICAgICAgICAgaWYgKCBpcy5mbihzdG9yZSkgKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fX3Njb3BlW2lkXSA9IG5ldyBzdG9yZSh0aGlzLCB7IHNuYXBzaG90LCBuYW1lOiBpZCwgc3RhdGUsIGRhdGEgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICggc25hcHNob3QgKVxuICAgICAgICAgICAgICAgIHN0b3JlLnJlc3RvcmUoc25hcHNob3QpO1xuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKCBzdGF0ZSAhPT0gdW5kZWZpbmVkICYmIGRhdGEgPT09IHVuZGVmaW5lZCApXG4gICAgICAgICAgICAgICAgICAgIHN0b3JlLnNldFN0YXRlKHN0YXRlKTtcbiAgICAgICAgICAgICAgICBlbHNlIGlmICggc3RhdGUgIT09IHVuZGVmaW5lZCApXG4gICAgICAgICAgICAgICAgICAgIHN0b3JlLnN0YXRlID0gc3RhdGU7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKCBkYXRhICE9PSB1bmRlZmluZWQgKVxuICAgICAgICAgICAgICAgICAgICBzdG9yZS5wdXNoKGRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fd2F0Y2hTdG9yZShpZCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICByZXR1cm4gdGhpcy5fX3Njb3BlW2lkXTtcbiAgICB9XG4gICAgXG4gICAgX3dhdGNoU3RvcmUoIGlkLCBzdGF0ZSwgZGF0YSApIHtcbiAgICAgICAgLy9pZiAoICF0aGlzLl9fc2NvcGVbaWRdICkgey8vYXNrIG1peGVkIHx8IHBhcmVudFxuICAgICAgICAvLyAgICBpZiAoIHRoaXMuX19taXhlZC5yZWR1Y2UoKCBtb3VudGVkLCBjdHggKSA9PiAobW91bnRlZCB8fCBjdHguX3dhdGNoU3RvcmUoaWQsIHN0YXRlLCBkYXRhKSksIGZhbHNlKSB8fFxuICAgICAgICAvLyAgICAgICAgIXRoaXMucGFyZW50IClcbiAgICAgICAgLy8gICAgICAgIHJldHVybjtcbiAgICAgICAgLy8gICAgcmV0dXJuIHRoaXMucGFyZW50Ll93YXRjaFN0b3JlKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIC8vfVxuICAgICAgICBpZiAoICF0aGlzLl9fbGlzdGVuaW5nW2lkXSAmJiAhaXMuZm4odGhpcy5fX3Njb3BlW2lkXSkgKSB7XG4gICAgICAgICAgICAhdGhpcy5fX3Njb3BlW2lkXS5fYXV0b0Rlc3Ryb3kgJiYgdGhpcy5fX3Njb3BlW2lkXS5yZXRhaW4oXCJzY29wZWRcIik7XG4gICAgICAgICAgICAhdGhpcy5fX3Njb3BlW2lkXS5pc1N0YWJsZSgpICYmIHRoaXMud2FpdChpZCk7XG4gICAgICAgICAgICB0aGlzLl9fc2NvcGVbaWRdLm9uKFxuICAgICAgICAgICAgICAgIHRoaXMuX19saXN0ZW5pbmdbaWRdID0ge1xuICAgICAgICAgICAgICAgICAgICAnZGVzdHJveScgOiBzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl9fbGlzdGVuaW5nW2lkXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX19zY29wZVtpZF0gPSB0aGlzLl9fc2NvcGVbaWRdLmNvbnN0cnVjdG9yO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAndXBkYXRlJyAgOiBzID0+IHRoaXMucHJvcGFnKCksXG4gICAgICAgICAgICAgICAgICAgICdzdGFibGUnICA6IHMgPT4gdGhpcy5yZWxlYXNlKGlkKSxcbiAgICAgICAgICAgICAgICAgICAgJ3Vuc3RhYmxlJzogcyA9PiB0aGlzLndhaXQoaWQpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIE1peCB0YXJnZXRDdHggb24gdGhpcyBzY29wZVxuICAgICAqIE1peGVkIHNjb3BlIHBhcmVudHMgYXJlIE5PVCBtYXBwZWRcbiAgICAgKiBAcGFyYW0gdGFyZ2V0Q3R4XG4gICAgICovXG4gICAgbWl4aW4oIHRhcmdldEN0eCApIHtcbiAgICAgICAgbGV0IHBhcmVudCA9IHRoaXMucGFyZW50LCBsaXN0cztcbiAgICAgICAgdGhpcy5fX21peGVkLnB1c2godGFyZ2V0Q3R4KVxuICAgICAgICB0YXJnZXRDdHgucmV0YWluKFwibWl4ZWRUb1wiKTtcbiAgICAgICAgaWYgKCAhdGFyZ2V0Q3R4Ll9zdGFibGUgKVxuICAgICAgICAgICAgdGhpcy53YWl0KHRhcmdldEN0eC5faWQpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fX21peGVkTGlzdC5wdXNoKGxpc3RzID0ge1xuICAgICAgICAgICAgJ3N0YWJsZScgIDogcyA9PiB0aGlzLnJlbGVhc2UodGFyZ2V0Q3R4Ll9pZCksXG4gICAgICAgICAgICAndW5zdGFibGUnOiBzID0+IHRoaXMud2FpdCh0YXJnZXRDdHguX2lkKSxcbiAgICAgICAgICAgICd1cGRhdGUnICA6IHMgPT4gdGhpcy5fcHJvcGFnKClcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLnN0b3JlcyA9IHt9O1xuICAgICAgICB0aGlzLnN0YXRlICA9IHt9O1xuICAgICAgICB0aGlzLmRhdGEgICA9IHt9O1xuICAgICAgICB0YXJnZXRDdHgub24obGlzdHMpO1xuICAgICAgICBfX3Byb3RvX19wdXNoKHRoaXMsICdzdG9yZXMnLCBwYXJlbnQpO1xuICAgICAgICBfX3Byb3RvX19wdXNoKHRoaXMsICdzdGF0ZScsIHBhcmVudCk7XG4gICAgICAgIF9fcHJvdG9fX3B1c2godGhpcywgJ2RhdGEnLCBwYXJlbnQpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5yZWxpbmsodGhpcy5fX3Njb3BlLCB0aGlzLCBmYWxzZSwgdHJ1ZSk7XG4gICAgICAgIHRoaXMuX19taXhlZC5mb3JFYWNoKFxuICAgICAgICAgICAgY3R4ID0+IHtcbiAgICAgICAgICAgICAgICBfX3Byb3RvX19wdXNoKHRoaXMsICdzdG9yZXMnKTtcbiAgICAgICAgICAgICAgICBfX3Byb3RvX19wdXNoKHRoaXMsICdzdGF0ZScpO1xuICAgICAgICAgICAgICAgIF9fcHJvdG9fX3B1c2godGhpcywgJ2RhdGEnKTtcbiAgICAgICAgICAgICAgICBjdHgucmVsaW5rKGN0eC5fX3Njb3BlLCB0aGlzLCB0cnVlLCB0cnVlKVxuICAgICAgICAgICAgfVxuICAgICAgICApXG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIFJlZ2lzdGVyIHN0b3JlcyBpbiBzdG9yZXNNYXAgJiBsaW5rIHRoZW0gaW4gdGhlIHByb3Rvc1xuICAgICAqIEBwYXJhbSBzdG9yZXNNYXBcbiAgICAgKiBAcGFyYW0gc3RhdGVcbiAgICAgKiBAcGFyYW0gZGF0YVxuICAgICAqL1xuICAgIHJlZ2lzdGVyKCBzdG9yZXNNYXAsIHN0YXRlID0ge30sIGRhdGEgPSB7fSApIHtcbiAgICAgICAgdGhpcy5yZWxpbmsoc3RvcmVzTWFwLCB0aGlzLCBmYWxzZSwgZmFsc2UpO1xuICAgICAgICBPYmplY3Qua2V5cyhzdG9yZXNNYXApLmZvckVhY2goXG4gICAgICAgICAgICBpZCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCBzdG9yZXNNYXBbaWRdLnNpbmdsZXRvbiB8fCAoaXMuZm4oc3RvcmVzTWFwW2lkXSkgJiYgKHN0YXRlW2lkXSB8fCBkYXRhW2lkXSkpICkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9tb3VudChpZCwgc3RhdGVbaWRdLCBkYXRhW2lkXSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoIHN0YXRlW2lkXSB8fCBkYXRhW2lkXSApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBkYXRhW2lkXSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICggc3RhdGVbaWRdIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3Jlc1tpZF0uc3RhdGUgPSBzdGF0ZVtpZF07XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3Jlc1tpZF0ucHVzaChkYXRhW2lkXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoIHN0YXRlW2lkXSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcmVzW2lkXS5zZXRTdGF0ZShzdGF0ZVtpZF0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl93YXRjaFN0b3JlKGlkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIClcbiAgICAgICAgXG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIE1hcCBzcmNDdHggc3RvcmUncyBvbiB0YXJnZXRDdHggaGVhZGVycyBwcm90bydzXG4gICAgICogQHBhcmFtIHNyY0N0eFxuICAgICAqIEBwYXJhbSB0YXJnZXRDdHhcbiAgICAgKiBAcGFyYW0gc3RhdGVcbiAgICAgKiBAcGFyYW0gZGF0YVxuICAgICAqL1xuICAgIHJlbGluayggc3JjQ3R4LCB0YXJnZXRDdHggPSB0aGlzLCBleHRlcm5hbCwgZm9yY2UgKSB7XG4gICAgICAgIGxldCBsY3R4ID0gdGFyZ2V0Q3R4Ll9zdG9yZXMucHJvdG90eXBlO1xuICAgICAgICBPYmplY3Qua2V5cyhzcmNDdHgpXG4gICAgICAgICAgICAgIC5mb3JFYWNoKFxuICAgICAgICAgICAgICAgICAgaWQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGlmICggIWZvcmNlICYmIHRhcmdldEN0eC5fX3Njb3BlW2lkXSA9PT0gc3JjQ3R4W2lkXSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRDdHguX19zY29wZVtpZF0gJiYgKHRhcmdldEN0eC5fX3Njb3BlW2lkXS5jb25zdHJ1Y3RvciA9PT0gc3JjQ3R4W2lkXSkgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgaWYgKCAhZm9yY2UgJiYgdGFyZ2V0Q3R4Ll9fc2NvcGVbaWRdICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoICFleHRlcm5hbCAmJiAhaXMuZm4odGFyZ2V0Q3R4Ll9fc2NvcGVbaWRdKSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuaW5mbyhcIlJlc2NvcGUgU3RvcmUgOiBcIiwgaWQsIFwiIGFscmVhZHkgZXhpc3QgaW4gdGhpcyBzY29wZSAhICggdHJ5IF9fcHJvdG9fXyBob3QgcGF0Y2ggKVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldEN0eC5fX3Njb3BlW2lkXS5fX3Byb3RvX18gPSBzcmNDdHhbaWRdLnByb3RvdHlwZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmICggIWV4dGVybmFsICYmIGlzLmZuKHRhcmdldEN0eC5fX3Njb3BlW2lkXSkgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0Q3R4Ll9fc2NvcGVbaWRdID0gc3JjQ3R4W2lkXTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoICFmb3JjZSAmJiAhZXh0ZXJuYWwgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9fc2NvcGVbaWRdID0gc3JjQ3R4W2lkXTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxjdHgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXQ6ICgpID0+IHRoaXMuX19zY29wZVtpZF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRDdHguX3N0YXRlLnByb3RvdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldDogKCkgPT4gKHRoaXMuX19zY29wZVtpZF0gJiYgdGhpcy5fX3Njb3BlW2lkXS5zdGF0ZSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXQ6ICggdiApID0+ICh0aGlzLl9tb3VudChpZCwgbnVsbCwgdikpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0Q3R4Ll9kYXRhLnByb3RvdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldDogKCkgPT4gKHRoaXMuX19zY29wZVtpZF0gJiYgdGhpcy5fX3Njb3BlW2lkXS5kYXRhKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldDogKCB2ICkgPT4gKHRoaXMuX21vdW50KGlkLCB1bmRlZmluZWQsIHYpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgKVxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBCaW5kIHN0b3JlcyBmcm9tIHRoaXMgc2NvcGUsIGhpcyBwYXJlbnRzIGFuZCBtaXhlZCBzY29wZVxuICAgICAqXG4gICAgICogQHBhcmFtIG9iaiB7UmVhY3QuQ29tcG9uZW50fFN0b3JlfGZ1bmN0aW9ufVxuICAgICAqIEBwYXJhbSBrZXkge3N0cmluZ30gc3RvcmVzIGtleXMgdG8gYmluZCB1cGRhdGVzXG4gICAgICogQHBhcmFtIGFzXG4gICAgICogQHBhcmFtIHNldEluaXRpYWwge2Jvb2x9IGZhbHNlIHRvIG5vdCBwcm9wYWcgaW5pdGlhbCB2YWx1ZSAoZGVmYXVsdCA6IHRydWUpXG4gICAgICovXG4gICAgYmluZCggb2JqLCBrZXksIGFzLCBzZXRJbml0aWFsID0gdHJ1ZSApIHtcbiAgICAgICAgbGV0IGxhc3RSZXZzLCBkYXRhLCByZWZLZXlzO1xuICAgICAgICBpZiAoIGtleSAmJiAhaXMuYXJyYXkoa2V5KSApXG4gICAgICAgICAgICBrZXkgPSBba2V5XTtcbiAgICAgICAgXG4gICAgICAgIGlmICggYXMgPT09IGZhbHNlIHx8IGFzID09PSB0cnVlICkge1xuICAgICAgICAgICAgc2V0SW5pdGlhbCA9IGFzO1xuICAgICAgICAgICAgYXMgICAgICAgICA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJlZktleXMgPSBrZXlcbiAgICAgICAgICAgIC5tYXAoaWQgPT4gKGlzLnN0cmluZyhpZCkgPyBpZCA6IGlkLm5hbWUpKVxuICAgICAgICAgICAgLm1hcChpZCA9PiAodGhpcy5wYXJzZVJlZihpZCkpKTtcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICB0aGlzLl9mb2xsb3dlcnMucHVzaChcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBvYmosXG4gICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgIGFzIHx8IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICBsYXN0UmV2cyA9IHJlZktleXMucmVkdWNlKCggcmV2cywgcmVmICkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXZzW3JlZi5zdG9yZUlkXSA9IHJldnNbcmVmLnN0b3JlSWRdIHx8IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldiA6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICByZWZzOiBbXVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICByZXZzW3JlZi5zdG9yZUlkXS5yZWZzLnB1c2gocmVmKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJldnM7XG4gICAgICAgICAgICAgICAgfSwge30pXG4gICAgICAgICAgICBdKTtcbiAgICAgICAgdGhpcy5tb3VudChrZXkpO1xuICAgICAgICBcbiAgICAgICAgaWYgKCBzZXRJbml0aWFsICYmIHRoaXMuX3N0YWJsZSApIHtcbiAgICAgICAgICAgIGRhdGEgPSB0aGlzLmdldFVwZGF0ZXMobGFzdFJldnMpO1xuICAgICAgICAgICAgaWYgKCAhZGF0YSApIHJldHVybjtcbiAgICAgICAgICAgIGlmICggdHlwZW9mIG9iaiAhPSBcImZ1bmN0aW9uXCIgKSB7XG4gICAgICAgICAgICAgICAgaWYgKCBhcyApIG9iai5zZXRTdGF0ZSh7IFthc106IGRhdGEgfSk7XG4gICAgICAgICAgICAgICAgZWxzZSBvYmouc2V0U3RhdGUoZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBvYmooZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIFVuIGJpbmQgdGhpcyBzY29wZSBvZmYgdGhlIGdpdmVuIGNvbXBvbmVudC1rZXlzXG4gICAgICogQHBhcmFtIG9ialxuICAgICAqIEBwYXJhbSBrZXlcbiAgICAgKiBAcmV0dXJucyB7QXJyYXkuPCo+fVxuICAgICAqL1xuICAgIHVuQmluZCggb2JqLCBrZXksIGFzICkge1xuICAgICAgICB2YXIgZm9sbG93ZXJzID0gdGhpcy5fZm9sbG93ZXJzLFxuICAgICAgICAgICAgaSAgICAgICAgID0gZm9sbG93ZXJzICYmIGZvbGxvd2Vycy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggZm9sbG93ZXJzICYmIGktLSApXG4gICAgICAgICAgICBpZiAoIGZvbGxvd2Vyc1tpXVswXSA9PT0gb2JqICYmICgnJyArIGZvbGxvd2Vyc1tpXVsxXSkgPT0gKCcnICsga2V5KSAmJlxuICAgICAgICAgICAgICAgIGZvbGxvd2Vyc1tpXVsyXSA9PSBhcyApXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZvbGxvd2Vycy5zcGxpY2UoaSwgMSk7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIE1vdW50IHRoZSBzdG9yZXMgaW4gc3RvcmVzTGlzdCBmcm9tIHRoaXMgc2NvcGUsIGl0cyBwYXJlbnRzIGFuZCBtaXhlZCBzY29wZVxuICAgICAqIEJpbmQgdGhlbSB0byAndG8nXG4gICAgICogSG9vayAndG8nIHNvIGl0IHdpbGwgYXV0byB1bmJpbmQgb24gJ2Rlc3Ryb3knIG9yICdjb21wb25lbnRXaWxsVW5tb3VudCdcbiAgICAgKiBAcGFyYW0gdG9cbiAgICAgKiBAcGFyYW0gc3RvcmVzTGlzdFxuICAgICAqIEBwYXJhbSBiaW5kXG4gICAgICogQHJldHVybnMge09iamVjdH0gSW5pdGlhbCBvdXRwdXRzIG9mIHRoZSBzdG9yZXMgaW4gJ3N0b3Jlc0xpc3QnXG4gICAgICovXG4gICAgbWFwKCB0bywgc3RvcmVzTGlzdCwgYmluZCA9IHRydWUgKSB7XG4gICAgICAgIGxldCBTdG9yZSAgPSB0aGlzLmNvbnN0cnVjdG9yLlN0b3JlO1xuICAgICAgICBzdG9yZXNMaXN0ID0gaXMuYXJyYXkoc3RvcmVzTGlzdCkgPyBzdG9yZXNMaXN0IDogW3N0b3Jlc0xpc3RdO1xuICAgICAgICB0aGlzLm1vdW50KHN0b3Jlc0xpc3QpO1xuICAgICAgICBpZiAoIGJpbmQgJiYgdG8gaW5zdGFuY2VvZiBTdG9yZSApIHtcbiAgICAgICAgICAgIFN0b3JlLm1hcCh0bywgc3RvcmVzTGlzdCwgdGhpcywgdGhpcywgZmFsc2UpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoIGJpbmQgKSB7XG4gICAgICAgICAgICB0aGlzLmJpbmQodG8sIHN0b3Jlc0xpc3QsIHVuZGVmaW5lZCwgZmFsc2UpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBsZXQgbWl4ZWRDV1VubW91bnQsXG4gICAgICAgICAgICAgICAgdW5Nb3VudEtleSA9IHRvLmlzUmVhY3RDb21wb25lbnQgPyBcImNvbXBvbmVudFdpbGxVbm1vdW50XCIgOiBcImRlc3Ryb3lcIjtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKCB0by5oYXNPd25Qcm9wZXJ0eSh1bk1vdW50S2V5KSApIHtcbiAgICAgICAgICAgICAgICBtaXhlZENXVW5tb3VudCA9IHRvW3VuTW91bnRLZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB0b1t1bk1vdW50S2V5XSA9ICggLi4uYXJneiApID0+IHtcbiAgICAgICAgICAgICAgICBkZWxldGUgdG9bdW5Nb3VudEtleV07XG4gICAgICAgICAgICAgICAgaWYgKCBtaXhlZENXVW5tb3VudCApXG4gICAgICAgICAgICAgICAgICAgIHRvW3VuTW91bnRLZXldID0gbWl4ZWRDV1VubW91bnQ7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdGhpcy51bkJpbmQodG8sIHN0b3Jlc0xpc3QpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0b1t1bk1vdW50S2V5XSAmJiB0b1t1bk1vdW50S2V5XSguLi5hcmd6KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdG9yZXNMaXN0LnJlZHVjZSgoIGRhdGEsIGlkICkgPT4ge1xuICAgICAgICAgICAgaWYgKCAhaXMuc3RyaW5nKGlkKSApXG4gICAgICAgICAgICAgICAgaWQgPSBpZC5uYW1lO1xuICAgICAgICAgICAgaWQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSBpZC5zcGxpdCgnOicpOy8vQHRvZG9cbiAgICAgICAgICAgIGlkWzBdICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID0gaWRbMF0uc3BsaXQoJy4nKTtcbiAgICAgICAgICAgIGRhdGFbaWRbMV0gfHwgaWRbMF1baWRbMF0ubGVuZ3RoIC0gMV1dID0gdGhpcy5zdG9yZXNbaWRbMF1bMF1dICYmIHRoaXMuc3RvcmVzW2lkWzBdWzBdXS5yZXRyaWV2ZSAmJiB0aGlzLnN0b3Jlc1tpZFswXVswXV0ucmV0cmlldmUoaWRbMF0uc3BsaWNlKDEpKTtcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9LCB7fSk7XG4gICAgfVxuICAgIFxuICAgIHJldHJpZXZlKCBwYXRoID0gXCJcIiApIHtcbiAgICAgICAgcGF0aCA9IGlzLnN0cmluZyhwYXRoKSA/IHBhdGguc3BsaXQoJy4nKSA6IHBhdGg7XG4gICAgICAgIHJldHVybiBwYXRoICYmIHRoaXMuc3RvcmVzW3BhdGhbMF1dICYmXG4gICAgICAgICAgICB0aGlzLnN0b3Jlc1twYXRoWzBdXS5yZXRyaWV2ZShwYXRoLnNsaWNlKDEpKTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogR2V0IG9yIHVwZGF0ZSBzdG9yZXNSZXZNYXAncyByZXZpc2lvbnNcbiAgICAgKiBAcGFyYW0gc3RvcmVzUmV2TWFwXG4gICAgICogQHBhcmFtIGxvY2FsXG4gICAgICogQHJldHVybnMge3t9fVxuICAgICAqL1xuICAgIGdldFN0b3Jlc1JldnMoIHN0b3Jlc1Jldk1hcCA9IHt9LCBsb2NhbCApIHtcbiAgICAgICAgbGV0IGN0eCA9IHRoaXMuX19zY29wZTtcbiAgICAgICAgaWYgKCAhc3RvcmVzUmV2TWFwICkge1xuICAgICAgICAgICAgc3RvcmVzUmV2TWFwID0ge307XG4gICAgICAgIH1cbiAgICAgICAgT2JqZWN0LmtleXMoY3R4KS5mb3JFYWNoKFxuICAgICAgICAgICAgaWQgPT4ge1xuICAgICAgICAgICAgICAgIGlmICggIWlzLmZuKGN0eFtpZF0pXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0b3Jlc1Jldk1hcFtpZF0gPSBjdHhbaWRdLl9yZXY7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKCAhc3RvcmVzUmV2TWFwLmhhc093blByb3BlcnR5KGlkKSApXG4gICAgICAgICAgICAgICAgICAgIHN0b3Jlc1Jldk1hcFtpZF0gPSBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICBpZiAoICFsb2NhbCApIHtcbiAgICAgICAgICAgIHRoaXMuX19taXhlZC5yZWR1Y2UoKCB1cGRhdGVkLCBjdHggKSA9PiAoY3R4LmdldFN0b3Jlc1JldnMoc3RvcmVzUmV2TWFwKSwgc3RvcmVzUmV2TWFwKSwgc3RvcmVzUmV2TWFwKTtcbiAgICAgICAgICAgIHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LmdldFN0b3Jlc1JldnMoc3RvcmVzUmV2TWFwKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3RvcmVzUmV2TWFwO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBHZXQgb3IgdXBkYXRlIG91dHB1dCBiYXNpbmcgc3RvcmVzUmV2TWFwJ3MgcmV2aXNpb25zLlxuICAgICAqIElmIGEgc3RvcmUgaW4gJ3N0b3Jlc1Jldk1hcCcgaXMgdXBkYXRlZDsgYWRkIGl0IHRvICdvdXRwdXQnXG4gICAgICogQHBhcmFtIHN0b3Jlc1Jldk1hcFxuICAgICAqIEBwYXJhbSBvdXRwdXRcbiAgICAgKiBAcGFyYW0gdXBkYXRlZFxuICAgICAqIEByZXR1cm5zIHsqfHt9fVxuICAgICAqL1xuICAgIGdldFVwZGF0ZXMoIHN0b3Jlc1Jldk1hcCwgb3V0cHV0LCB1cGRhdGVkICkge1xuICAgICAgICBsZXQgY3R4ID0gdGhpcy5fX3Njb3BlO1xuICAgICAgICBcbiAgICAgICAgb3V0cHV0ID0gb3V0cHV0IHx8IHt9O1xuICAgICAgICBPYmplY3Qua2V5cyhjdHgpLmZvckVhY2goXG4gICAgICAgICAgICBpZCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCAhb3V0cHV0Lmhhc093blByb3BlcnR5KGlkKSAmJiAhaXMuZm4oY3R4W2lkXSlcbiAgICAgICAgICAgICAgICAgICAgJiYgKCFzdG9yZXNSZXZNYXBcbiAgICAgICAgICAgICAgICAgICAgICAgIHx8IChzdG9yZXNSZXZNYXAuaGFzT3duUHJvcGVydHkoaWQpICYmIHN0b3Jlc1Jldk1hcFtpZF0gPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgICAgIHx8ICEoIXN0b3Jlc1Jldk1hcC5oYXNPd25Qcm9wZXJ0eShpZCkgfHwgY3R4W2lkXS5fcmV2IDw9IHN0b3Jlc1Jldk1hcFtpZF0ucmV2KSlcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZWQgICAgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBvdXRwdXRbaWRdID0gdGhpcy5kYXRhW2lkXTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGlmICggc3RvcmVzUmV2TWFwICYmIHN0b3Jlc1Jldk1hcC5oYXNPd25Qcm9wZXJ0eShpZCkgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9yZXNSZXZNYXBbaWRdLnJldiA9IGN0eFtpZF0uX3JldjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3Jlc1Jldk1hcFtpZF0ucmVmcy5mb3JFYWNoKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZiA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS53YXJuKFwidXBkYXRlIHJlZiBcIiwgcmVmLnJlZiwgdGhpcy5yZXRyaWV2ZShyZWYucGF0aCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXRbcmVmLmFsaWFzXSA9IHRoaXMucmV0cmlldmUocmVmLnBhdGgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS53YXJuKFwidXBkYXRlIFwiLCBpZCwgdGhpcy5kYXRhW2lkXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXRbaWRdID0gdGhpcy5kYXRhW2lkXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHVwZGF0ZWQgPSB0aGlzLl9fbWl4ZWQucmVkdWNlKCggdXBkYXRlZCwgY3R4ICkgPT4gKGN0eC5nZXRVcGRhdGVzKHN0b3Jlc1Jldk1hcCwgb3V0cHV0LCB1cGRhdGVkKSB8fCB1cGRhdGVkKSwgdXBkYXRlZCk7XG4gICAgICAgIHVwZGF0ZWQgPSB0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC5nZXRVcGRhdGVzKHN0b3Jlc1Jldk1hcCwgb3V0cHV0LCB1cGRhdGVkKSB8fCB1cGRhdGVkO1xuICAgICAgICByZXR1cm4gdXBkYXRlZCAmJiBvdXRwdXQ7XG4gICAgfVxuICAgIFxuICAgIF9nZXRBbGxDaGlsZHMoIGNoaWxkcyA9IFtdICkge1xuICAgICAgICBjaGlsZHMucHVzaCguLi50aGlzLl9jaGlsZFNjb3Blcyk7XG4gICAgICAgIHRoaXMuX2NoaWxkU2NvcGVzLmZvckVhY2goXG4gICAgICAgICAgICBjdHggPT4ge1xuICAgICAgICAgICAgICAgIGN0eC5fZ2V0QWxsQ2hpbGRzKGNoaWxkcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiBjaGlsZHM7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHdpdGhDaGlsZHNcbiAgICAgKiBAcGFyYW0gX193aXRoTWl4ZWRcbiAgICAgKiBAcGFyYW0gX291dHB1dFxuICAgICAqIEByZXR1cm5zIHsqfHtzdGF0ZToge30sIGRhdGE6IHt9fX1cbiAgICAgKi9cbiAgICBzZXJpYWxpemUoIG91dHB1dCA9IHt9ICkge1xuICAgICAgICBsZXQgY3R4ICAgICAgICAgID0gdGhpcy5fX3Njb3BlO1xuICAgICAgICBvdXRwdXRbdGhpcy5faWRdID0ge307XG4gICAgICAgIFxuICAgICAgICBPYmplY3Qua2V5cyhjdHgpLmZvckVhY2goXG4gICAgICAgICAgICBpZCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCBpcy5mbihjdHhbaWRdKSApXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBjdHhbaWRdLnNlcmlhbGl6ZShvdXRwdXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICApXG4gICAgICAgIFxuICAgICAgICB0aGlzLl9jaGlsZFNjb3Blcy5mb3JFYWNoKFxuICAgICAgICAgICAgY3R4ID0+IHtcbiAgICAgICAgICAgICAgICAhY3R4Ll9pc0xvY2FsSWQgJiYgY3R4LnNlcmlhbGl6ZShvdXRwdXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fX21peGVkLmZvckVhY2goXG4gICAgICAgICAgICBjdHggPT4ge1xuICAgICAgICAgICAgICAgICFjdHguX2lzTG9jYWxJZCAmJiBjdHguc2VyaWFsaXplKG91dHB1dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gb3V0cHV0O1xuICAgIH1cbiAgICBcbiAgICByZXN0b3JlKCBzbmFwc2hvdCwgZm9yY2UgKSB7XG4gICAgICAgIGxldCBjdHggPSB0aGlzLl9fc2NvcGU7XG4gICAgICAgIFxuICAgICAgICBzbmFwc2hvdFt0aGlzLl9pZF0gJiYgT2JqZWN0LmtleXMoY3R4KS5mb3JFYWNoKFxuICAgICAgICAgICAgbmFtZSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHNuYXAgPSBzbmFwc2hvdFt0aGlzLl9pZCArICcvJyArIG5hbWVdO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmICggc25hcCApIHtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGlmICggZm9yY2UgJiYgIWlzLmZuKGN0eFtuYW1lXSkgKVxuICAgICAgICAgICAgICAgICAgICAgICAgY3R4W25hbWVdLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW91bnQobmFtZSwgc25hcHNob3QpOy8vIHF1aWV0XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICApXG4gICAgICAgIFxuICAgICAgICB0aGlzLl9fbWl4ZWQuZm9yRWFjaChcbiAgICAgICAgICAgIGN0eCA9PiB7XG4gICAgICAgICAgICAgICAgIWN0eC5faXNMb2NhbElkICYmIGN0eC5yZXN0b3JlKHNuYXBzaG90LCBmb3JjZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9jaGlsZFNjb3Blcy5mb3JFYWNoKFxuICAgICAgICAgICAgY3R4ID0+IHtcbiAgICAgICAgICAgICAgICAhY3R4Ll9pc0xvY2FsSWQgJiYgY3R4LnJlc3RvcmUoc25hcHNob3QsIGZvcmNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgXG4gICAgfVxuICAgIFxuICAgIHBhcnNlUmVmKCBfcmVmICkge1xuICAgICAgICBsZXQgcmVmID0gX3JlZi5zcGxpdCgnOicpO1xuICAgICAgICByZWZbMF0gID0gcmVmWzBdLnNwbGl0KCcuJyk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzdG9yZUlkOiByZWZbMF1bMF0sXG4gICAgICAgICAgICBwYXRoICAgOiByZWZbMF0sXG4gICAgICAgICAgICBhbGlhcyAgOiByZWZbMV0gfHwgcmVmWzBdW3JlZlswXS5sZW5ndGggLSAxXSxcbiAgICAgICAgICAgIHJlZiAgICA6IF9yZWZcbiAgICAgICAgfTtcbiAgICB9XG4gICAgXG4gICAgZGlzcGF0Y2goIGFjdGlvbiwgZGF0YSApIHtcbiAgICAgICAgdGhpcy5fX21peGVkLmZvckVhY2goKCBjdHggKSA9PiAoY3R4LmRpc3BhdGNoKGFjdGlvbiwgZGF0YSkpKTtcbiAgICAgICAgdGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuZGlzcGF0Y2goYWN0aW9uLCBkYXRhKTtcbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5fX3Njb3BlKVxuICAgICAgICAgICAgICAuZm9yRWFjaChcbiAgICAgICAgICAgICAgICAgIGlkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoICFpcy5mbih0aGlzLl9fc2NvcGVbaWRdKSApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX19zY29wZVtpZF0udHJpZ2dlcihhY3Rpb24sIGRhdGEpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICk7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogb25jZSgnc3RhYmxlJywgY2IpXG4gICAgICogQHBhcmFtIG9iaiB7UmVhY3QuQ29tcG9uZW50fFN0b3JlfGZ1bmN0aW9uKVxuICAgICAqIEBwYXJhbSBrZXkge3N0cmluZ30gb3B0aW9uYWwga2V5IHdoZXJlIHRvIG1hcCB0aGUgcHVibGljIHN0YXRlXG4gICAgICovXG4gICAgdGhlbiggY2IgKSB7XG4gICAgICAgIGlmICggdGhpcy5fc3RhYmxlIClcbiAgICAgICAgICAgIHJldHVybiBjYihudWxsLCB0aGlzLmRhdGEpO1xuICAgICAgICB0aGlzLm9uY2UoJ3N0YWJsZScsIGUgPT4gY2IobnVsbCwgdGhpcy5kYXRhKSk7XG4gICAgfVxuICAgIFxuICAgIFxuICAgIHJldGFpblN0b3Jlcyggc3RvcmVzID0gW10sIHJlYXNvbiApIHtcbiAgICAgICAgc3RvcmVzLmZvckVhY2goXG4gICAgICAgICAgICBpZCA9PiAodGhpcy5zdG9yZXNbaWRdICYmIHRoaXMuc3RvcmVzW2lkXS5yZXRhaW4gJiYgdGhpcy5zdG9yZXNbaWRdLnJldGFpbihyZWFzb24pKVxuICAgICAgICApXG4gICAgfVxuICAgIFxuICAgIGRpc3Bvc2VTdG9yZXMoIHN0b3JlcyA9IFtdLCByZWFzb24gKSB7XG4gICAgICAgIHN0b3Jlcy5mb3JFYWNoKFxuICAgICAgICAgICAgaWQgPT4gKHRoaXMuc3RvcmVzW2lkXSAmJiB0aGlzLnN0b3Jlc1tpZF0uZGlzcG9zZSAmJiB0aGlzLnN0b3Jlc1tpZF0uZGlzcG9zZShyZWFzb24pKVxuICAgICAgICApXG4gICAgfVxuICAgIFxuICAgIHdhaXQoIHJlYXNvbiApIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcIndhaXRcIiwgcmVhc29uKTtcbiAgICAgICAgdGhpcy5fc3RhYmxlICYmICF0aGlzLl9fbG9ja3MuYWxsICYmIHRoaXMuZW1pdChcInVuc3RhYmxlXCIsIHRoaXMpO1xuICAgICAgICB0aGlzLl9zdGFibGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fX2xvY2tzLmFsbCsrO1xuICAgICAgICBpZiAoIHJlYXNvbiApIHtcbiAgICAgICAgICAgIHRoaXMuX19sb2Nrc1tyZWFzb25dID0gdGhpcy5fX2xvY2tzW3JlYXNvbl0gfHwgMDtcbiAgICAgICAgICAgIHRoaXMuX19sb2Nrc1tyZWFzb25dKys7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgcmVsZWFzZSggcmVhc29uICkge1xuICAgICAgICBcbiAgICAgICAgaWYgKCByZWFzb24gKSB7XG4gICAgICAgICAgICBpZiAoIHRoaXMuX19sb2Nrc1tyZWFzb25dID09IDAgKVxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJSZWxlYXNlIG1vcmUgdGhhbiBsb2NraW5nICFcIiwgcmVhc29uKTtcbiAgICAgICAgICAgIHRoaXMuX19sb2Nrc1tyZWFzb25dID0gdGhpcy5fX2xvY2tzW3JlYXNvbl0gfHwgMDtcbiAgICAgICAgICAgIHRoaXMuX19sb2Nrc1tyZWFzb25dLS07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCAhcmVhc29uICYmIHRoaXMuX19sb2Nrcy5hbGwgPT0gMCApXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiUmVsZWFzZSBtb3JlIHRoYW4gbG9ja2luZyAhXCIpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fX2xvY2tzLmFsbC0tO1xuICAgICAgICBpZiAoICF0aGlzLl9fbG9ja3MuYWxsICkge1xuICAgICAgICAgICAgdGhpcy5fc3RhYmlsaXplclRNICYmIGNsZWFyVGltZW91dCh0aGlzLl9zdGFiaWxpemVyVE0pO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLl9zdGFiaWxpemVyVE0gPSBzZXRUaW1lb3V0KFxuICAgICAgICAgICAgICAgIGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zdGFiaWxpemVyVE0gPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIHRoaXMuX19sb2Nrcy5hbGwgKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcHJvcGFnVE0gJiYgY2xlYXJUaW1lb3V0KHRoaXMuX3Byb3BhZ1RNKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3N0YWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdChcInN0YWJsZVwiLCB0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICF0aGlzLmRlYWQgJiYgdGhpcy5fcHJvcGFnKCk7Ly8gc3RhYmlsaXR5IGNhbiBpbmR1Y2UgZGVzdHJveVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxuICAgIFxuICAgIHByb3BhZygpIHtcbiAgICAgICAgdGhpcy5fcHJvcGFnVE0gJiYgY2xlYXJUaW1lb3V0KHRoaXMuX3Byb3BhZ1RNKTtcbiAgICAgICAgdGhpcy5fcHJvcGFnVE0gPSBzZXRUaW1lb3V0KFxuICAgICAgICAgICAgZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcHJvcGFnVE0gPSBudWxsO1xuICAgICAgICAgICAgICAgIHRoaXMuX3Byb3BhZygpXG4gICAgICAgICAgICB9LCAyXG4gICAgICAgICk7XG4gICAgfVxuICAgIFxuICAgIF9wcm9wYWcoKSB7XG4gICAgICAgIGlmICggdGhpcy5fZm9sbG93ZXJzLmxlbmd0aCApXG4gICAgICAgICAgICB0aGlzLl9mb2xsb3dlcnMuZm9yRWFjaCgoIHsgMDogb2JqLCAxOiBrZXksIDI6IGFzLCAzOiBsYXN0UmV2cywgMzogcmVtYXBzIH0gKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmdldFVwZGF0ZXMobGFzdFJldnMpO1xuICAgICAgICAgICAgICAgIGlmICggIWRhdGEgKSByZXR1cm47XG4gICAgICAgICAgICAgICAgaWYgKCB0eXBlb2Ygb2JqICE9IFwiZnVuY3Rpb25cIiApIHtcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcInNldFN0YXRlIFwiLG9iaiwgT2JqZWN0LmtleXMoZGF0YSkpXG4gICAgICAgICAgICAgICAgICAgIGlmICggYXMgKSBvYmouc2V0U3RhdGUoeyBbYXNdOiBkYXRhIH0pO1xuICAgICAgICAgICAgICAgICAgICBlbHNlIG9iai5zZXRTdGF0ZShkYXRhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG9iaihkYXRhLCBsYXN0UmV2cyAmJiBbLi4ubGFzdFJldnNdIHx8IFwibm8gcmV2c1wiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gbGFzdFJldnMgJiZcbiAgICAgICAgICAgICAgICAvLyBrZXkuZm9yRWFjaChpZCA9PiAobGFzdFJldnNbaWRdID0gdGhpcy5zdG9yZXNbaWRdICYmIHRoaXMuc3RvcmVzW2lkXS5fcmV2IHx8IDApKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB0aGlzLmVtaXQoXCJ1cGRhdGVcIiwgdGhpcy5nZXRVcGRhdGVzKCkpO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBpcyBzdGFibGVcbiAgICAgKiBAcmV0dXJucyBib29sXG4gICAgICovXG4gICAgaXNTdGFibGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zdGFibGU7XG4gICAgfVxuICAgIFxuICAgIC8vc2VyaWFsaXplQ2hpbGRzKCBjaGlsZHMgPSBbXSApIHtcbiAgICAvL1xuICAgIC8vfVxuICAgIFxuICAgIF9hZGRDaGlsZCggY3R4ICkge1xuICAgICAgICB0aGlzLl9jaGlsZFNjb3Blcy5wdXNoKGN0eCk7XG4gICAgICAgIGxldCBsaXN0cyAgICAgPSB7XG4gICAgICAgICAgICAgICAgJ3N0YWJsZScgICAgICA6IHMgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl91blN0YWJsZUNoaWxkcy0tO1xuICAgICAgICAgICAgICAgICAgICBpZiAoICF0aGlzLl91blN0YWJsZUNoaWxkcyApXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXQoXCJzdGFibGVUcmVlXCIsIHRoaXMpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAndW5zdGFibGUnICAgIDogcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3VuU3RhYmxlQ2hpbGRzKys7XG4gICAgICAgICAgICAgICAgICAgIGlmICggMSA9PSB0aGlzLl91blN0YWJsZUNoaWxkcyApXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXQoXCJ1bnN0YWJsZVRyZWVcIiwgdGhpcylcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICdzdGFibGVUcmVlJyAgOiBzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdW5TdGFibGVDaGlsZHMtLTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCAhdGhpcy5fdW5TdGFibGVDaGlsZHMgKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KFwic3RhYmxlVHJlZVwiLCB0aGlzKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgJ3Vuc3RhYmxlVHJlZSc6IHMgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl91blN0YWJsZUNoaWxkcysrO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIDEgPT0gdGhpcy5fdW5TdGFibGVDaGlsZHMgKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KFwidW5zdGFibGVUcmVlXCIsIHRoaXMpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAnZGVzdHJveScgICAgIDogY3R4ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBjdHguX3VuU3RhYmxlQ2hpbGRzIClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3VuU3RhYmxlQ2hpbGRzLS07XG4gICAgICAgICAgICAgICAgICAgIGlmICggIWN0eC5pc1N0YWJsZSgpIClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3VuU3RhYmxlQ2hpbGRzLS07XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGlmICggIXRoaXMuX3VuU3RhYmxlQ2hpbGRzIClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdChcInN0YWJsZVRyZWVcIiwgdGhpcylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgd2FzU3RhYmxlID0gdGhpcy5fdW5TdGFibGVDaGlsZHM7XG4gICAgICAgIC8vIWN0eC5pc1N0YWJsZSgpICYmIGNvbnNvbGUud2FybignYWRkIHVuc3RhYmxlIGNoaWxkJyk7XG4gICAgICAgICFjdHguaXNTdGFibGUoKSAmJiB0aGlzLl91blN0YWJsZUNoaWxkcysrO1xuICAgICAgICBjdHguX3VuU3RhYmxlQ2hpbGRzICYmIHRoaXMuX3VuU3RhYmxlQ2hpbGRzKys7XG4gICAgICAgIHRoaXMuX2NoaWxkU2NvcGVzTGlzdC5wdXNoKGxpc3RzKTtcbiAgICAgICAgaWYgKCAhd2FzU3RhYmxlICYmIHRoaXMuX3VuU3RhYmxlQ2hpbGRzIClcbiAgICAgICAgICAgIHRoaXMuZW1pdChcInVuc3RhYmxlVHJlZVwiLCB0aGlzKVxuICAgICAgICBjdHgub24obGlzdHMpO1xuICAgIH1cbiAgICBcbiAgICBfcm1DaGlsZCggY3R4ICkge1xuICAgICAgICBsZXQgaSAgICAgICAgID0gdGhpcy5fY2hpbGRTY29wZXMuaW5kZXhPZihjdHgpLFxuICAgICAgICAgICAgd2FzU3RhYmxlID0gdGhpcy5fdW5TdGFibGVDaGlsZHM7XG4gICAgICAgIGlmICggaSAhPSAtMSApIHtcbiAgICAgICAgICAgIHRoaXMuX2NoaWxkU2NvcGVzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICFjdHguaXNTdGFibGUoKSAmJiB0aGlzLl91blN0YWJsZUNoaWxkcy0tO1xuICAgICAgICAgICAgY3R4Ll91blN0YWJsZUNoaWxkcyAmJiB0aGlzLl91blN0YWJsZUNoaWxkcy0tO1xuICAgICAgICAgICAgY3R4LnVuKHRoaXMuX2NoaWxkU2NvcGVzTGlzdC5zcGxpY2UoaSwgMSlbMF0pO1xuICAgICAgICAgICAgaWYgKCB3YXNTdGFibGUgJiYgIXRoaXMuX3VuU3RhYmxlQ2hpbGRzIClcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXQoXCJzdGFibGVUcmVlXCIpXG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgcmV0YWluKCByZWFzb24gKSB7XG4gICAgICAgIHRoaXMuX19yZXRhaW5zLmFsbCsrO1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwicmV0YWluXCIsIHRoaXMuX2lkLCByZWFzb24pO1xuICAgICAgICBpZiAoIHJlYXNvbiApIHtcbiAgICAgICAgICAgIHRoaXMuX19yZXRhaW5zW3JlYXNvbl0gPSB0aGlzLl9fcmV0YWluc1tyZWFzb25dIHx8IDA7XG4gICAgICAgICAgICB0aGlzLl9fcmV0YWluc1tyZWFzb25dKys7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgZGlzcG9zZSggcmVhc29uICkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwiZGlzcG9zZVwiLCB0aGlzLl9pZCwgcmVhc29uKTtcbiAgICAgICAgaWYgKCByZWFzb24gKSB7XG4gICAgICAgICAgICBpZiAoICF0aGlzLl9fcmV0YWluc1tyZWFzb25dIClcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJEaXNwb3NlIG1vcmUgdGhhbiByZXRhaW5pbmcgOiBcIiArIHJlYXNvbik7XG4gICAgICAgICAgICB0aGlzLl9fcmV0YWluc1tyZWFzb25dLS07XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmICggIXRoaXMuX19yZXRhaW5zLmFsbCApXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJEaXNwb3NlIG1vcmUgdGhhbiByZXRhaW5pbmcgIVwiKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX19yZXRhaW5zLmFsbC0tO1xuICAgICAgICBcbiAgICAgICAgaWYgKCAhdGhpcy5fX3JldGFpbnMuYWxsICkge1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcImRpc3Bvc2UgZG8gZGVzdHJveSBcIiwgdGhpcy5faWQsIHRoaXMuX3BlcnNpc3RlbmNlVG0pO1xuICAgICAgICAgICAgaWYgKCB0aGlzLl9wZXJzaXN0ZW5jZVRtICkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2Rlc3Ryb3lUTSAmJiBjbGVhclRpbWVvdXQodGhpcy5fZGVzdHJveVRNKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9kZXN0cm95VE0gPSBzZXRUaW1lb3V0KFxuICAgICAgICAgICAgICAgICAgICBlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGhlbihzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhdGhpcy5fX3JldGFpbnMuYWxsICYmIHRoaXMuZGVzdHJveSgpXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcGVyc2lzdGVuY2VUbVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRoZW4ocyA9PiAoIXRoaXMuX19yZXRhaW5zLmFsbCAmJiB0aGlzLmRlc3Ryb3koKSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIG9yZGVyIGRlc3Ryb3kgb2YgbG9jYWwgc3RvcmVzXG4gICAgICovXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgbGV0IGN0eCAgID0gdGhpcy5fX3Njb3BlO1xuICAgICAgICAvL2NvbnNvbGUud2FybihcImRlc3Ryb3lcIiwgdGhpcy5faWQpO1xuICAgICAgICB0aGlzLmRlYWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmVtaXQoXCJkZXN0cm95XCIsIHRoaXMpO1xuICAgICAgICBPYmplY3Qua2V5cyhcbiAgICAgICAgICAgIHRoaXMuX19saXN0ZW5pbmdcbiAgICAgICAgKS5mb3JFYWNoKFxuICAgICAgICAgICAgaWQgPT4gdGhpcy5fX3Njb3BlW2lkXS5yZW1vdmVMaXN0ZW5lcih0aGlzLl9fbGlzdGVuaW5nW2lkXSlcbiAgICAgICAgKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX3N0YWJpbGl6ZXJUTSAmJiBjbGVhclRpbWVvdXQodGhpcy5fc3RhYmlsaXplclRNKTtcbiAgICAgICAgdGhpcy5fcHJvcGFnVE0gJiYgY2xlYXJUaW1lb3V0KHRoaXMuX3Byb3BhZ1RNKTtcbiAgICAgICAgdGhpcy5fX2xpc3RlbmluZyA9IHt9O1xuICAgICAgICBcbiAgICAgICAgaWYgKCAhdGhpcy5faXNMb2NhbElkIClcbiAgICAgICAgICAgIGRlbGV0ZSBvcGVuU2NvcGVzW3RoaXMuX2lkXTtcbiAgICAgICAgdGhpcy5fZm9sbG93ZXJzLmxlbmd0aCA9IDA7XG4gICAgICAgIFxuICAgICAgICB3aGlsZSAoIHRoaXMuX19taXhlZExpc3QubGVuZ3RoICkge1xuICAgICAgICAgICAgdGhpcy5fX21peGVkWzBdLnJlbW92ZUxpc3RlbmVyKHRoaXMuX19taXhlZExpc3Quc2hpZnQoKSk7XG4gICAgICAgICAgICB0aGlzLl9fbWl4ZWQuc2hpZnQoKS5kaXNwb3NlKFwibWl4ZWRUb1wiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIHRoaXMuX19wYXJlbnRMaXN0ICkge1xuICAgICAgICAgICAgdGhpcy5wYXJlbnQuX3JtQ2hpbGQodGhpcyk7XG4gICAgICAgICAgICB0aGlzLnBhcmVudC5yZW1vdmVMaXN0ZW5lcih0aGlzLl9fcGFyZW50TGlzdCk7XG4gICAgICAgICAgICB0aGlzLnBhcmVudC5kaXNwb3NlKFwiaXNNeVBhcmVudFwiKTtcbiAgICAgICAgICAgIHRoaXMuX19wYXJlbnRMaXN0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKCBsZXQga2V5IGluIGN0eCApXG4gICAgICAgICAgICBpZiAoICFpcy5mbihjdHhba2V5XSkgKSB7XG4gICAgICAgICAgICAgICAgIWN0eFtrZXldLl9hdXRvRGVzdHJveSAmJiBjdHhba2V5XS5kaXNwb3NlKFwic2NvcGVkXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB0aGlzLl9fbWl4ZWQgPSB0aGlzLmRhdGEgPSB0aGlzLnN0YXRlID0gdGhpcy5zY29wZSA9IHRoaXMuc3RvcmVzID0gbnVsbDtcbiAgICAgICAgdGhpcy5fZGF0YSA9IHRoaXMuX3N0YXRlID0gdGhpcy5fc3RvcmVzID0gbnVsbDtcbiAgICAgICAgXG4gICAgICAgIFxuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvU2NvcGUuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImlzXCJcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcbiAqIENvcHlyaWdodCAoYykgIDIwMTggV2lzZSBXaWxkIFdlYiAuXG4gKlxuICogIE1JVCBMaWNlbnNlXG4gKiAgXG4gKiAgUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqICBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiAgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKiAgXG4gKiAgVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG4gKiAgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqICBcbiAqICBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiAgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiAgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiAgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiAgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcbiAqICBTT0ZUV0FSRS5cbiAqICBcbiAqIEBhdXRob3IgOiBOYXRoYW5hZWwgQnJhdW5cbiAqIEBjb250YWN0IDogY2FpcGlsYWJzQGdtYWlsLmNvbVxuICovXG52YXIgaXMgPSByZXF1aXJlKCdpcycpO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW1pdHRlciB7XG4gICAgX2V2ZW50cyA9IHt9O1xuICAgIFxuICAgIG9uKCBldnQsIGNiICkge1xuICAgICAgICBpZiAoICFpcy5zdHJpbmcoZXZ0KSAmJiBldnQgKVxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKGV2dCkuZm9yRWFjaChrID0+IHRoaXMub24oaywgZXZ0W2tdKSk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9ldmVudHNbZXZ0XSA9IHRoaXMuX2V2ZW50c1tldnRdIHx8IFtdO1xuICAgICAgICB0aGlzLl9ldmVudHNbZXZ0XS5wdXNoKGNiKTtcbiAgICAgICAgXG4gICAgfVxuICAgIFxuICAgIHVuKCBldnQsIGNiICkge1xuICAgICAgICBpZiAoICFpcy5zdHJpbmcoZXZ0KSAmJiBldnQgKVxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKGV2dCkuZm9yRWFjaChrID0+IHRoaXMudW4oaywgZXZ0W2tdKSk7XG4gICAgICAgIFxuICAgICAgICBpZiAoICF0aGlzLl9ldmVudHNbZXZ0XSApIHJldHVybjtcbiAgICAgICAgdmFyIGkgPSB0aGlzLl9ldmVudHNbZXZ0XS5pbmRleE9mKGNiKTtcbiAgICAgICAgdGhpcy5fZXZlbnRzW2V2dF0uc3BsaWNlKGksIDEpO1xuICAgIH1cbiAgICBcbiAgICBlbWl0KCBldnQsIC4uLmFyZ3ogKSB7XG4gICAgICAgIGlmICggIXRoaXMuX2V2ZW50c1tldnRdICkgcmV0dXJuO1xuICAgICAgICBsZXQgbGlzdHMgPSBbLi4udGhpcy5fZXZlbnRzW2V2dF1dO1xuICAgICAgICBcbiAgICAgICAgZm9yICggdmFyIGkgPSAwOyBpIDwgbGlzdHMubGVuZ3RoOyBpKysgKVxuICAgICAgICAgICAgbGlzdHNbaV0oLi4uYXJneilcbiAgICB9XG4gICAgXG4gICAgYWRkTGlzdGVuZXIoKSB7XG4gICAgICAgIHRoaXMub24oLi4uYXJndW1lbnRzKTtcbiAgICB9XG4gICAgXG4gICAgcmVtb3ZlTGlzdGVuZXIoKSB7XG4gICAgICAgIHRoaXMudW4oLi4uYXJndW1lbnRzKTtcbiAgICB9XG4gICAgXG4gICAgcmVtb3ZlQWxsTGlzdGVuZXJzKCkge1xuICAgICAgICB0aGlzLl9ldmVudHMgPSB7fTtcbiAgICB9XG4gICAgXG4gICAgb25jZSggZXZ0LCBjYiApIHtcbiAgICAgICAgbGV0IGZuO1xuICAgICAgICB0aGlzLm9uKGV2dCwgZm4gPSAoIC4uLmFyZ3ogKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnVuKGV2dCwgZm4pO1xuICAgICAgICAgICAgY2IoLi4uYXJneilcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIFxuICAgIFxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9FbWl0dGVyLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2hvcnRpZFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInNob3J0aWRcIlxuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxuICogQ29weXJpZ2h0IChjKSAgMjAxOCBXaXNlIFdpbGQgV2ViIC5cbiAqXG4gKiAgTUlUIExpY2Vuc2VcbiAqXG4gKiAgUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqICBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiAgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuICogIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqICBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqICBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqICBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiAgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqICBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuICogIFNPRlRXQVJFLlxuICpcbiAqIEBhdXRob3IgOiBOYXRoYW5hZWwgQnJhdW5cbiAqIEBjb250YWN0IDogY2FpcGlsYWJzQGdtYWlsLmNvbVxuICovXG5cbi8qKlxuICogVWx0cmEgc2NhbGFibGUgc3RhdGUtYXdhcmUgc3RvcmVcbiAqXG4gKiBAdG9kbyA6IGxvdCBvZiBvcHRpbXMuLi5cbiAqL1xuXG52YXIgaXMgICAgICAgICAgICA9IHJlcXVpcmUoJ2lzJyksXG4gICAgU2NvcGUgICAgICAgICA9IHJlcXVpcmUoJy4vU2NvcGUnKSxcbiAgICBFdmVudEVtaXR0ZXIgID0gcmVxdWlyZSgnLi9FbWl0dGVyJyksXG4gICAgVGFza1NlcXVlbmNlciA9IHJlcXVpcmUoJy4vVGFza1NlcXVlbmNlcicpLFxuICAgIHNob3J0aWQgICAgICAgPSByZXF1aXJlKCdzaG9ydGlkJyksXG4gICAgb2JqUHJvdG8gICAgICA9IE9iamVjdC5nZXRQcm90b3R5cGVPZih7fSk7XG5cbi8qKlxuICogQGNsYXNzIFN0b3JlXG4gKi9cbmNsYXNzIFN0b3JlIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgICBcbiAgICBzdGF0aWMgdXNlICAgICAgICAgICAgICAgICAgPSBbXTsvLyBvdmVycmlkYWJsZSBsaXN0IG9mIHNvdXJjZSBzdG9yZXNcbiAgICBzdGF0aWMgZm9sbG93Oy8vIG92ZXJyaWRhYmxlIGxpc3Qgb2Ygc3RvcmUgdGhhdCB3aWxsIGFsbG93IHB1c2ggaWYgdXBkYXRlZFxuICAgIHN0YXRpYyByZXF1aXJlO1xuICAgIHN0YXRpYyBzdGF0aWNTY29wZSAgICAgICAgICA9IG5ldyBTY29wZSh7fSwgeyBpZDogXCJzdGF0aWNcIiB9KTtcbiAgICBzdGF0aWMgc3RhdGUgICAgICAgICAgICAgICAgPSB1bmRlZmluZWQ7Ly8gZGVmYXVsdCBzdGF0ZVxuICAgIC8qKlxuICAgICAqIGlmIHJldGFpbiBnb2VzIHRvIDAgOlxuICAgICAqIGZhbHNlIHRvIG5vdCBkZXN0cm95LFxuICAgICAqIDAgdG8gc3luYyBhdXRvIGRlc3Ryb3lcbiAgICAgKiBNcyB0byBhdXRvZGVzdHJveSBhZnRlciB0bSBtcyBpZiBubyByZXRhaW4gaGFzIGJlZW4gY2FsbGVkXG4gICAgICogQHR5cGUge2Jvb2xlYW58SW50fVxuICAgICAqL1xuICAgICAgICAgICBzdGF0aWMgcGVyc2lzdGVuY2VUbSA9IGZhbHNlO1xuICAgIFxuICAgIC8qKlxuICAgICAqIGdldCBhIEJ1aWxkZXIta2V5IHBhaXIgZm9yIFN0b3JlOjptYXBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgICAqIEByZXR1cm5zIHt7c3RvcmU6IFN0b3JlLCBuYW1lOiAqfX1cbiAgICAgKi9cbiAgICBzdGF0aWMgYXMoIG5hbWUgKSB7XG4gICAgICAgIHJldHVybiB7IHN0b3JlOiB0aGlzLCBuYW1lIH07XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIE1hcCBhbGwgbmFtZWQgc3RvcmVzIGluIHtrZXlzfSB0byB0aGUge29iamVjdH0ncyBzdGF0ZVxuICAgICAqIEhvb2sgY29tcG9uZW50V2lsbFVubW91bnQgKGZvciByZWFjdCBjb21wKSBvciBkZXN0cm95IHRvIHVuQmluZCB0aGVtIGF1dG9tYXRpY2FsbHlcbiAgICAgKiBAc3RhdGljXG4gICAgICogQHBhcmFtIG9iamVjdCB7T2JqZWN0fSB0YXJnZXQgc3RhdGUgYXdhcmUgb2JqZWN0IChSZWFjdC5Db21wb25lbnR8U3RvcmV8Li4uKVxuICAgICAqIEBwYXJhbSBrZXlzIHtBcnJheX0gRXggOiBbXCJzZXNzaW9uXCIsIFwib3RoZXJTdGF0aWNOYW1lZFN0b3JlOmtleVwiLCBzdG9yZS5hcygnYW5vdGhlcktleScpXVxuICAgICAqL1xuICAgIHN0YXRpYyBtYXAoIGNvbXBvbmVudCwga2V5cywgc2NvcGUsIG9yaWdpbiwgc2V0SW5pdGlhbCA9IGZhbHNlICkge1xuICAgICAgICB2YXIgdGFyZ2V0UmV2cyAgICAgPSBjb21wb25lbnQuX3JldnMgfHwge307XG4gICAgICAgIHZhciB0YXJnZXRTY29wZSAgICA9IGNvbXBvbmVudC5zdG9yZXMgfHwgKGNvbXBvbmVudC5zdG9yZXMgPSB7fSk7XG4gICAgICAgIHZhciBpbml0aWFsT3V0cHV0cyA9IHt9O1xuICAgICAgICBrZXlzICAgICAgICAgICAgICAgPSBpcy5hcnJheShrZXlzKSA/IFsuLi5rZXlzXSA6IFtrZXlzXTtcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICBzY29wZSA9IHNjb3BlIHx8IFN0b3JlLnN0YXRpY1Njb3BlO1xuICAgICAgICBcbiAgICAgICAga2V5cyA9IGtleXMuZmlsdGVyKFxuICAgICAgICAgICAgLy8gQHRvZG8gOiB1c2UgcXVlcnkgcmVmc1xuICAgICAgICAgICAgLy8gKHN0b3JlKShcXC5zdG9yZSkqKFxcWyhcXCp8KHByb3BzKVxcdyspKylcXF0pPyhcXDphbGlhcylcbiAgICAgICAgICAgICgga2V5ICkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICggIWtleSApIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIk5vdCBhIG1hcHBhYmxlIHN0b3JlIGl0ZW0gJ1wiICsga2V5ICsgXCInIGluIFwiICsgb3JpZ2luICsgJyAhIScpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxldCBuYW1lLFxuICAgICAgICAgICAgICAgICAgICBhbGlhcyxcbiAgICAgICAgICAgICAgICAgICAgcGF0aCxcbiAgICAgICAgICAgICAgICAgICAgc3RvcmU7XG4gICAgICAgICAgICAgICAgaWYgKCBrZXkuc3RvcmUgJiYga2V5Lm5hbWUgKSB7XG4gICAgICAgICAgICAgICAgICAgIGFsaWFzID0gbmFtZSA9IGtleS5uYW1lO1xuICAgICAgICAgICAgICAgICAgICBzdG9yZSA9IGtleS5zdG9yZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoIGlzLmZuKGtleSkgKSB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWUgPSBhbGlhcyA9IGtleS5uYW1lIHx8IGtleS5kZWZhdWx0TmFtZTtcbiAgICAgICAgICAgICAgICAgICAgc3RvcmUgPSBrZXk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBrZXkgICA9IGtleS5tYXRjaCgvKFtcXHdfXSspKCg/OlxcLltcXHdfXSspKikoPzpcXDooW1xcd19dKykpPy8pO1xuICAgICAgICAgICAgICAgICAgICBuYW1lICA9IGtleVsxXTtcbiAgICAgICAgICAgICAgICAgICAgcGF0aCAgPSBrZXlbMl0gJiYga2V5WzJdLnN1YnN0cigxKTtcbiAgICAgICAgICAgICAgICAgICAgc3RvcmUgPSBzY29wZS5zdG9yZXNba2V5WzFdXTtcbiAgICAgICAgICAgICAgICAgICAgYWxpYXMgPSBrZXlbM10gfHwgcGF0aCAmJiBwYXRoLm1hdGNoKC8oW15cXC5dKikkLylbMF0gfHwga2V5WzFdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAoIHRhcmdldFJldnNbbmFtZV0gKSByZXR1cm4gZmFsc2U7Ly8gaWdub3JlIGRibCB1c2VzIGZvciBub3dcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAoICFzdG9yZSApIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIk5vdCBhIG1hcHBhYmxlIHN0b3JlIGl0ZW0gJ1wiICsgbmFtZSArIFwiL1wiICsgYWxpYXMgKyBcIicgaW4gXCIgKyBvcmlnaW4gKyAnICEhJywgc3RvcmUpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKCBpcy5mbihzdG9yZSkgKSB7XG4gICAgICAgICAgICAgICAgICAgIHNjb3BlLl9tb3VudChuYW1lKVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgc2NvcGUuc3RvcmVzW25hbWVdLmJpbmQoY29tcG9uZW50LCBhbGlhcywgc2V0SW5pdGlhbCwgcGF0aCk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc3RvcmUuYmluZChjb21wb25lbnQsIGFsaWFzLCBzZXRJbml0aWFsLCBwYXRoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8gZ2l2ZSBpbml0aWFsIHN0b3JlIHdlaWdodCBiYXNpbmcgc291cmNlc1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudC5fc291cmNlcy5wdXNoKC4uLnNjb3BlLnN0b3Jlc1tuYW1lXS5fc291cmNlcyk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdGFyZ2V0UmV2c1thbGlhc10gPSB0YXJnZXRSZXZzW2FsaWFzXSB8fCB0cnVlO1xuICAgICAgICAgICAgICAgICF0YXJnZXRTY29wZVtuYW1lXSAmJiAodGFyZ2V0U2NvcGVbbmFtZV0gPSBzY29wZS5zdG9yZXNbbmFtZV0pO1xuICAgICAgICAgICAgICAgIGlmICggc2NvcGUuc3RvcmVzW25hbWVdLmhhc093blByb3BlcnR5KCdkYXRhJykgKVxuICAgICAgICAgICAgICAgICAgICBpbml0aWFsT3V0cHV0c1tuYW1lXSA9IHNjb3BlLmRhdGFbbmFtZV07XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIFxuICAgICAgICAvLyAuLi5cbiAgICAgICAgdmFyIG1peGVkQ1dVbm1vdW50LFxuICAgICAgICAgICAgdW5Nb3VudEtleSA9IGNvbXBvbmVudC5pc1JlYWN0Q29tcG9uZW50ID8gXCJjb21wb25lbnRXaWxsVW5tb3VudFwiIDogXCJkZXN0cm95XCI7XG4gICAgICAgIFxuICAgICAgICBpZiAoIGNvbXBvbmVudC5oYXNPd25Qcm9wZXJ0eSh1bk1vdW50S2V5KSApIHtcbiAgICAgICAgICAgIG1peGVkQ1dVbm1vdW50ID0gY29tcG9uZW50W3VuTW91bnRLZXldO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBjb21wb25lbnRbdW5Nb3VudEtleV0gPSAoIC4uLmFyZ3ogKSA9PiB7XG4gICAgICAgICAgICBkZWxldGUgY29tcG9uZW50W3VuTW91bnRLZXldO1xuICAgICAgICAgICAgaWYgKCBtaXhlZENXVW5tb3VudCApXG4gICAgICAgICAgICAgICAgY29tcG9uZW50W3VuTW91bnRLZXldID0gbWl4ZWRDV1VubW91bnQ7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGtleXMubWFwKFxuICAgICAgICAgICAgICAgICgga2V5ICkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWFzLCBwYXRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmU7XG4gICAgICAgICAgICAgICAgICAgIGlmICgga2V5LnN0b3JlICYmIGtleS5uYW1lICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpYXMgPSBuYW1lID0ga2V5Lm5hbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9yZSA9IGtleS5zdG9yZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICggaXMuZm4oa2V5KSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUgPSBhbGlhcyA9IGtleS5uYW1lIHx8IGtleS5kZWZhdWx0TmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlID0gc2NvcGUuc3RvcmVzW25hbWVdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5ICAgPSBrZXkubWF0Y2goLyhbXFx3X10rKSgoPzpcXC5bXFx3X10rKSopKD86XFw6KFtcXHdfXSspKT8vKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUgID0ga2V5WzFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aCAgPSBrZXlbMl0gJiYga2V5WzJdLnN1YnN0cigxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlID0gc2NvcGUuc3RvcmVzW2tleVsxXV07XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlhcyA9IGtleVszXSB8fCBwYXRoICYmIHBhdGgubWF0Y2goLyhbXlxcLl0qKSQvKVswXSB8fCBrZXlbMV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHN0b3JlICYmICFpcy5mbihzdG9yZSkgJiYgc3RvcmUudW5CaW5kKGNvbXBvbmVudCwgYWxpYXMsIHBhdGgpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHJldHVybiBjb21wb25lbnRbdW5Nb3VudEtleV0gJiYgY29tcG9uZW50W3VuTW91bnRLZXldKC4uLmFyZ3opO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gaW5pdGlhbE91dHB1dHM7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdG9yLCB3aWxsIGJ1aWxkIGEgcmVzY29wZSBzdG9yZVxuICAgICAqXG4gICAgICogKHNjb3BlLCB7cmVxdWlyZSx1c2UsYXBwbHksc3RhdGUsIGRhdGF9KVxuICAgICAqIChzY29wZSlcbiAgICAgKlxuICAgICAqIEBwYXJhbSBzY29wZSB7b2JqZWN0fSBzY29wZSB3aGVyZSB0byBmaW5kIHRoZSBvdGhlciBzdG9yZXMgKGRlZmF1bHQgOiBzdGF0aWMgc3RhdGljU2NvcGUgKVxuICAgICAqIEBwYXJhbSBrZXlzIHtBcnJheX0gKHBhc3NlZCB0byBTdG9yZTo6bWFwKSBFeCA6IFtcInNlc3Npb25cIiwgXCJvdGhlck5hbWVkU3RvcmU6a2V5XCIsIG90aGVyU3RvcmUuYXMoXCJvdGhlcktleVwiKV1cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdmFyIGFyZ3ogICAgICAgICA9IFsuLi5hcmd1bWVudHNdLFxuICAgICAgICAgICAgX3N0YXRpYyAgICAgID0gdGhpcy5jb25zdHJ1Y3RvcixcbiAgICAgICAgICAgIHNjb3BlICAgICAgICA9IGFyZ3pbMF0gaW5zdGFuY2VvZiBTY29wZVxuICAgICAgICAgICAgICAgID8gYXJnei5zaGlmdCgpXG4gICAgICAgICAgICAgICAgOiBfc3RhdGljLnNjb3BlID8gU2NvcGUuZ2V0U2NvcGUoX3N0YXRpYy5zY29wZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGlzLnN0cmluZyhhcmd6WzBdKVxuICAgICAgICAgICAgICAgICAgICAgID8gU2NvcGUuZ2V0U2NvcGUoYXJnei5zaGlmdCgpKVxuICAgICAgICAgICAgICAgICAgICAgIDogX3N0YXRpYy5zdGF0aWNTY29wZSxcbiAgICAgICAgICAgIGNmZyAgICAgICAgICA9IGFyZ3pbMF0gJiYgIWlzLmFycmF5KGFyZ3pbMF0pICYmICFpcy5zdHJpbmcoYXJnelswXSkgPyBhcmd6LnNoaWZ0KCkgOiB7fSxcbiAgICAgICAgICAgIG5hbWUgICAgICAgICA9IGlzLnN0cmluZyhhcmd6WzBdKSA/IGFyZ3pbMF0gOiBjZmcubmFtZSB8fCBfc3RhdGljLm5hbWUsXG4gICAgICAgICAgICB3YXRjaHMgICAgICAgPSBpcy5hcnJheShhcmd6WzBdKSA/IGFyZ3ouc2hpZnQoKSA6IGNmZy51c2UgfHwgW10sLy8gd2F0Y2hzIG5lZWQgdG8gYmUgZGVmaW5lZCBhZnRlciBhbGwgdGhlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gc3RvcmUgYXJlIHJlZ2lzdGVyZWQgOiBzbyB3ZSBjYW4ndCBkZWFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2l0aCBhbnkgXCJzdGF0aWMgdXNlXCIgYXV0b21hdGljbHlcbiAgICAgICAgICAgIGFwcGx5ICAgICAgICA9IGlzLmZuKGFyZ3pbMF0pID8gYXJnei5zaGlmdCgpIDogY2ZnLmFwcGx5IHx8IG51bGwsXG4gICAgICAgICAgICBpbml0aWFsU3RhdGUgPSBfc3RhdGljLnN0YXRlIHx8IF9zdGF0aWMuaW5pdGlhbFN0YXRlLFxuICAgICAgICAgICAgYXBwbGllZDtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX3VpZCA9IGNmZy5fdWlkIHx8IHNob3J0aWQuZ2VuZXJhdGUoKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX19yZXRhaW5zICAgID0geyBhbGw6IDAgfTtcbiAgICAgICAgdGhpcy5fX2xvY2tzICAgICAgPSB7IGFsbDogMCB9O1xuICAgICAgICB0aGlzLl9vblN0YWJpbGl6ZSA9IFtdO1xuICAgICAgICBcbiAgICAgICAgLy8gYXV0b0Rlc3Ryb3lUbVxuICAgICAgICB0aGlzLl9hdXRvRGVzdHJveSAgID0gISF0aGlzLl9wZXJzaXN0ZW5jZVRtO1xuICAgICAgICB0aGlzLl9wZXJzaXN0ZW5jZVRtID0gY2ZnLnBlcnNpc3RlbmNlVG0gfHwgX3N0YXRpYy5wZXJzaXN0ZW5jZVRtIHx8IChjZmcuYXV0b0Rlc3Ryb3kgfHwgX3N0YXRpYy5hdXRvRGVzdHJveSkgJiYgNTtcbiAgICAgICAgLy9cbiAgICAgICAgLy9pZiAoIGlzLnN0cmluZyhhcmd6WzBdKSApIHtcbiAgICAgICAgLy8gICAgaWYgKCBzY29wZS5fX3Njb3BlW25hbWVdIClcbiAgICAgICAgLy8gICAgICAgIGNvbnNvbGUud2FybihcIlJlU2NvcGU6IE92ZXJ3cml0aW5nIGFuIGV4aXN0aW5nIHN0YXRpYyBuYW1lZCBzdG9yZSAoICVzICkgISFcIiwgbmFtZSk7XG4gICAgICAgIC8vICAgIHNjb3BlLl9fc2NvcGVbbmFtZV0gPSB0aGlzO1xuICAgICAgICAvL31cbiAgICAgICAgXG4gICAgICAgIGlmICggY2ZnICYmIGNmZy5vbiApIHtcbiAgICAgICAgICAgIHRoaXMub24oY2ZnLm9uKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgXG4gICAgICAgIGlmICggc2NvcGUuc3RvcmVzICkge1xuICAgICAgICAgICAgdGhpcy5zY29wZU9iaiA9IHNjb3BlO1xuICAgICAgICAgICAgdGhpcy5zY29wZSAgICA9IHNjb3BlLnN0b3JlcztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2NvcGVPYmogPSBuZXcgU2NvcGUoc2NvcGUpO1xuICAgICAgICAgICAgdGhpcy5zY29wZSAgICA9IHNjb3BlLnN0b3JlcztcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX3JldiAgICAgPSB0aGlzLmNvbnN0cnVjdG9yLl9yZXYgfHwgMDtcbiAgICAgICAgdGhpcy5fcmV2cyAgICA9IHt9O1xuICAgICAgICB0aGlzLnN0b3JlcyAgID0ge307XG4gICAgICAgIHRoaXMuX3JlcXVpcmUgPSBbXTtcbiAgICAgICAgdGhpcy5fc291cmNlcyA9IFtuYW1lXTtcbiAgICAgICAgXG4gICAgICAgIGlmICggaXMuYXJyYXkoX3N0YXRpYy51c2UpICkge1xuICAgICAgICAgICAgdGhpcy5fdXNlID0gWy4uLndhdGNocywgLi4uKF9zdGF0aWMudXNlIHx8IFtdKS5tYXAoXG4gICAgICAgICAgICAgICAga2V5ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlZiA9IGtleS5tYXRjaCgvXihcXCE/KShbXlxcOl0qKSg/OlxcOiguKikpPyQvKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCByZWZbMV0gKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVmMiA9IHJlZlsyXS5zcGxpdCgnLicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fcmVxdWlyZS5wdXNoKHJlZlszXSB8fCByZWYyW3JlZjIubGVuZ3RoIC0gMV0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZWZbMl07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKV07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl91c2UgPSBbLi4ud2F0Y2hzLCAuLi4oXG4gICAgICAgICAgICAgICAgX3N0YXRpYy51c2UgPyBPYmplY3Qua2V5cyhfc3RhdGljLnVzZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlZiA9IGtleS5tYXRjaCgvXihcXCE/KSguKikkLyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZlsxXSAmJiB0aGlzLl9yZXF1aXJlLnB1c2goX3N0YXRpYy51c2Vba2V5XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZWZbMl0gKyAoKF9zdGF0aWMudXNlW2tleV0gPT09IHRydWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICc6JyArIF9zdGF0aWMudXNlW2tleV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBbXVxuICAgICAgICAgICAgKV07XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmICggX3N0YXRpYy5yZXF1aXJlIClcbiAgICAgICAgICAgIHRoaXMuX3JlcXVpcmUucHVzaCguLi5fc3RhdGljLnJlcXVpcmUpO1xuICAgICAgICBpZiAoIGNmZy5yZXF1aXJlIClcbiAgICAgICAgICAgIHRoaXMuX3JlcXVpcmUucHVzaCguLi5jZmcucmVxdWlyZSk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9mb2xsb3dlcnMgPSBbXTtcbiAgICAgICAgXG4gICAgICAgIGlmICggYXBwbHkgKVxuICAgICAgICAgICAgdGhpcy5hcHBseSA9IGFwcGx5O1xuICAgICAgICBcbiAgICAgICAgaWYgKCBjZmcuc25hcHNob3QgJiYgY2ZnLnNuYXBzaG90W3RoaXMuc2NvcGVPYmouX2lkICsgJy8nICsgbmFtZV0gKSB7XG4gICAgICAgICAgICB0aGlzLnJlc3RvcmUoY2ZnLnNuYXBzaG90KTtcbiAgICAgICAgICAgIHRoaXMuX3N0YWJsZSA9IHRydWU7XG4gICAgICAgICAgICBzY29wZS5iaW5kKHRoaXMsIHRoaXMuX3VzZSwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoIF9zdGF0aWMuZGF0YSAhPT0gdW5kZWZpbmVkIClcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGEgPSB7IC4uLl9zdGF0aWMuZGF0YSB9O1xuICAgICAgICAgICAgaWYgKCBjZmcuaGFzT3duUHJvcGVydHkoXCJkYXRhXCIpICYmIGNmZy5kYXRhICE9PSB1bmRlZmluZWQgKVxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YSA9IGNmZy5kYXRhO1xuICAgICAgICAgICAgaWYgKCBjZmcuaGFzT3duUHJvcGVydHkoXCJzdGF0ZVwiKSAmJiBjZmcuc3RhdGUgIT09IHVuZGVmaW5lZCApXG4gICAgICAgICAgICAgICAgaW5pdGlhbFN0YXRlID0geyAuLi5pbml0aWFsU3RhdGUsIC4uLmNmZy5zdGF0ZSB9O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmICggaW5pdGlhbFN0YXRlIHx8IHRoaXMuX3VzZS5sZW5ndGggKSB7Ly8gc3luYyBhcHBseVxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICAgICAgICAgIC4uLihpbml0aWFsU3RhdGUgfHwge30pLFxuICAgICAgICAgICAgICAgICAgICAuLi5zY29wZS5tYXAodGhpcywgdGhpcy5fdXNlKVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgaWYgKCB0aGlzLnNob3VsZEFwcGx5KHRoaXMuc3RhdGUpICYmIHRoaXMuZGF0YSA9PT0gdW5kZWZpbmVkICkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGEgPSB0aGlzLmFwcGx5KHRoaXMuZGF0YSwgdGhpcy5zdGF0ZSwgdGhpcy5zdGF0ZSk7XG4gICAgICAgICAgICAgICAgICAgIGFwcGxpZWQgICA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICggKHRoaXMuZGF0YSAhPT0gdW5kZWZpbmVkIHx8IGFwcGxpZWQpICYmICF0aGlzLl9fbG9ja3MuYWxsICkge1xuICAgICAgICAgICAgdGhpcy5fc3RhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuX3JldisrO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fc3RhYmxlID0gZmFsc2U7XG4gICAgICAgICAgICBpZiAoICFfc3RhdGljLm1hbmFnZWQgJiYgIXRoaXMuc3RhdGUgJiYgKCF0aGlzLl91c2UgfHwgIXRoaXMuX3VzZS5sZW5ndGgpICkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIlJlc2NvcGUgc3RvcmUgJ1wiLCB0aGlzLm5hbWUsIFwiJyBoYXZlIG5vIGluaXRpYWwgZGF0YSwgc3RhdGUgb3IgdXNlLiBJdCBjYW4ndCBzdGFiaWxpemUuLi5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgIXRoaXMuX3N0YWJsZSAmJiB0aGlzLmVtaXQoJ3Vuc3RhYmxlJywgdGhpcy5zdGF0ZSk7XG4gICAgICAgIFxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBAZGVwcmVjYXRlZFxuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqL1xuICAgIGdldCBjb250ZXh0T2JqKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zY29wZU9iajtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogQGRlcHJlY2F0ZWRcbiAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgKi9cbiAgICBnZXQgY29udGV4dCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NvcGU7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIEBkZXByZWNhdGVkXG4gICAgICogQHJldHVybnMgeyp9XG4gICAgICovXG4gICAgZ2V0IGRhdGFzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBAZGVwcmVjYXRlZFxuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqL1xuICAgIHNldCBkYXRhcyggdiApIHtcbiAgICAgICAgLy9jb25zb2xlLmdyb3VwQ29sbGFwc2VkKFwiUmVzY29wZSBzdG9yZSA6IFNldHRpbmcgZGF0YXMgaXMgZGVwcmVjaWF0ZWQsIHVzZSBkYXRhXCIpO1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwiUmVzY29wZSBzdG9yZSA6IFNldHRpbmcgZGF0YXMgaXMgZGVwcmVjaWF0ZWQsIHVzZSBkYXRhXCIsIChuZXcgRXJyb3IoKSkuc3RhY2spO1xuICAgICAgICAvL2NvbnNvbGUuZ3JvdXBFbmQoKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuZGF0YSA9IHY7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIE92ZXJyaWRhYmxlIG1ldGhvZCB0byBrbm93IGlmIGEgZGF0YSBjaGFuZ2Ugc2hvdWxkIGJlIHByb3BhZyB0byB0aGUgbGlzdGVuaW5nIHN0b3JlcyAmIGNvbXBvbmVudHNcbiAgICAgKi9cbiAgICBzaG91bGRQcm9wYWcoIG5EYXRhcyApIHtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBcbiAgICBoYXNEYXRhQ2hhbmdlKCBuRGF0YXMgKSB7XG4gICAgICAgIHZhciBfc3RhdGljID0gdGhpcy5jb25zdHJ1Y3RvciwgcixcbiAgICAgICAgICAgIGNEYXRhcyAgPSB0aGlzLmRhdGE7XG4gICAgICAgIHIgICAgICAgICAgID0gIWNEYXRhcyAmJiBuRGF0YXMgfHwgY0RhdGFzICE9PSBuRGF0YXM7XG4gICAgICAgICFyICYmIGNEYXRhcyAmJiBPYmplY3Qua2V5cyhjRGF0YXMpLmZvckVhY2goXG4gICAgICAgICAgICAoIGtleSApID0+IHtcbiAgICAgICAgICAgICAgICByID0gciB8fCAobkRhdGFzID8gY0RhdGFzW2tleV0gIT09IG5EYXRhc1trZXldIDogY0RhdGFzICYmIGNEYXRhc1trZXldKVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICAhciAmJiBuRGF0YXMgJiYgT2JqZWN0LmtleXMobkRhdGFzKS5mb3JFYWNoKFxuICAgICAgICAgICAgKCBrZXkgKSA9PiB7XG4gICAgICAgICAgICAgICAgciA9IHIgfHwgKG5EYXRhcyA/IGNEYXRhc1trZXldICE9PSBuRGF0YXNba2V5XSA6IGNEYXRhcyAmJiBjRGF0YXNba2V5XSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHI7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIE92ZXJyaWRhYmxlIG1ldGhvZCB0byBrbm93IGlmIGEgc3RhdGUgY2hhbmdlIHNob3VsZCBiZSBhcHBsaWVkXG4gICAgICovXG4gICAgc2hvdWxkQXBwbHkoIHN0YXRlID0gdGhpcy5zdGF0ZSApIHtcbiAgICAgICAgdmFyIF9zdGF0aWMgPSB0aGlzLmNvbnN0cnVjdG9yO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICEhdGhpcy5pc0NvbXBsZXRlKHN0YXRlKVxuICAgICAgICApICYmIChpcy5hcnJheShfc3RhdGljLmZvbGxvdylcbiAgICAgICAgICAgICAgICA/IF9zdGF0aWMuZm9sbG93XG4gICAgICAgICAgICAgICAgICAgICAgICAgLnJlZHVjZSgoIHIsIGkgKSA9PiAociB8fCBzdGF0ZSAmJiBzdGF0ZVtpXSksIGZhbHNlKVxuICAgICAgICAgICAgICAgIDogX3N0YXRpYy5mb2xsb3dcbiAgICAgICAgICAgICAgICAgID8gT2JqZWN0LmtleXMoX3N0YXRpYy5mb2xsb3cpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5yZWR1Y2UoKCByLCBpICkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfHwgc3RhdGUgJiYgaXMuZm4oX3N0YXRpYy5mb2xsb3dbaV0pICYmIF9zdGF0aWMuZm9sbG93W2ldLmNhbGwodGhpcywgc3RhdGVbaV0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8fCBfc3RhdGljLmZvbGxvd1tpXSAmJiBzdGF0ZVtpXSAhPT0gdGhpcy5zdGF0ZVtpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApLCBmYWxzZSkgOiB0cnVlXG4gICAgICAgICk7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIE92ZXJyaWRhYmxlIGFwcGxpZXIgLyByZW1hcHBlclxuICAgICAqIElmIHN0YXRlIG9yIGxhc3RQdWJsaWNTdGF0ZSBhcmUgc2ltcGxlIGhhc2ggbWFwcyBhcHBseSB3aWxsIHJldHVybiB7Li4uZGF0YSwgLi4uc3RhdGV9XG4gICAgICogaWYgbm90IGl0IHdpbGwgcmV0dXJuIHRoZSBsYXN0IHByaXZhdGUgc3RhdGVcbiAgICAgKiBAcGFyYW0gZGF0YVxuICAgICAqIEBwYXJhbSBzdGF0ZVxuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqL1xuICAgIGFwcGx5KCBkYXRhLCBzdGF0ZSwgY2hhbmdlcyApIHtcbiAgICAgICAgc3RhdGUgPSBzdGF0ZSB8fCB0aGlzLnN0YXRlO1xuICAgICAgICBcbiAgICAgICAgaWYgKCB0aGlzLnJlZmluZSApXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZWZpbmUoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgXG4gICAgICAgIGlmICggIWRhdGEgfHwgZGF0YS5fX3Byb3RvX18gIT09IG9ialByb3RvIHx8IHN0YXRlLl9fcHJvdG9fXyAhPT0gb2JqUHJvdG8gKVxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICByZXR1cm4geyAuLi5kYXRhLCAuLi5zdGF0ZSB9XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIEBkZXByZWNpYXRlZFxuICAgICAqIEBwYXJhbSBkYXRhXG4gICAgICogQHBhcmFtIHN0YXRlXG4gICAgICogQHBhcmFtIGNoYW5nZXNcbiAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgKi9cbiAgICByZWZpbmUoIGRhdGEsIHN0YXRlLCBjaGFuZ2VzICkge1xuICAgICAgICBzdGF0ZSA9IHN0YXRlIHx8IHRoaXMuc3RhdGU7XG4gICAgICAgIFxuICAgICAgICBpZiAoICFkYXRhIHx8IGRhdGEuX19wcm90b19fICE9PSBvYmpQcm90byB8fCBzdGF0ZS5fX3Byb3RvX18gIT09IG9ialByb3RvIClcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgcmV0dXJuIHsgLi4uZGF0YSwgLi4uc3RhdGUgfVxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBEZWJvdW5jZSB0aGlzIHN0b3JlIHByb3BhZ2F0aW9uICggJiByZWR1Y2luZyApXG4gICAgICogQHBhcmFtIGNiXG4gICAgICovXG4gICAgc3RhYmlsaXplKCBjYiApIHtcbiAgICAgICAgY2IgJiYgdGhpcy5vbmNlKCdzdGFibGUnLCBjYik7XG4gICAgICAgIHRoaXMuX3N0YWJsZSAmJiB0aGlzLmVtaXQoJ3Vuc3RhYmxlJywgdGhpcy5zdGF0ZSwgdGhpcy5kYXRhKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX3N0YWJsZSA9IGZhbHNlO1xuICAgICAgICBcbiAgICAgICAgaWYgKCB0aGlzLl9zdGFiaWxpemVyIClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX3N0YWJpbGl6ZXIgPSBUYXNrU2VxdWVuY2VyLnB1c2hUYXNrKHRoaXMsICdwdXNoJyk7XG4gICAgfVxuICAgIFxuICAgIHJldHJpZXZlKCBwYXRoLCBpID0gMCwgb2JqID0gdGhpcy5kYXRhICkge1xuICAgICAgICBwYXRoID0gaXMuc3RyaW5nKHBhdGgpID8gcGF0aC5zcGxpdCgnLicpIDogcGF0aDtcbiAgICAgICAgcmV0dXJuICFvYmogfHwgIXBhdGggfHwgIXBhdGgubGVuZ3RoXG4gICAgICAgICAgICA/IG9ialxuICAgICAgICAgICAgOiBwYXRoLmxlbmd0aCA9PSBpICsgMVxuICAgICAgICAgICAgICAgICAgID8gb2JqW3BhdGhbaV1dXG4gICAgICAgICAgICAgICAgICAgOiB0aGlzLnJldHJpZXZlKHBhdGgsIGkgKyAxLCBvYmpbcGF0aFtpXV0pO1xuICAgIH1cbiAgICBcbiAgICBkaXNwYXRjaCggYWN0aW9uLCAuLi5hcmd6ICkge1xuICAgICAgICB0aGlzLnNjb3BlT2JqLmRpc3BhdGNoKGFjdGlvbiwgLi4uYXJneik7XG4gICAgfVxuICAgIFxuICAgIHRyaWdnZXIoIGFjdGlvbiwgLi4uYXJneiApIHtcbiAgICAgICAgbGV0IHsgYWN0aW9ucyB9ID0gdGhpcy5jb25zdHJ1Y3RvcjtcbiAgICAgICAgaWYgKCBhY3Rpb25zICYmIGFjdGlvbnNbYWN0aW9uXSApIHtcbiAgICAgICAgICAgIGxldCBucyA9IGFjdGlvbnNbYWN0aW9uXS5jYWxsKHRoaXMsIC4uLmFyZ3opO1xuICAgICAgICAgICAgbnMgJiYgdGhpcy5zZXRTdGF0ZShucyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogUHVsbCBzdG9yZXMgaW4gdGhlIHByaXZhdGUgc3RhdGVcbiAgICAgKiBAcGFyYW0gc3RvcmVzICB7QXJyYXl9IChwYXNzZWQgdG8gU3RvcmU6Om1hcCkgRXggOiBbXCJzZXNzaW9uXCIsIFwib3RoZXJOYW1lZFN0b3JlOmtleVwiLCBvdGhlclN0b3JlLmFzKFwib3RoZXJLZXlcIildXG4gICAgICovXG4gICAgcHVsbCggc3RvcmVzLCBkb1dhaXQsIG9yaWdpbiApIHtcbiAgICAgICAgbGV0IGluaXRpYWxPdXRwdXRzID0gdGhpcy5zY29wZU9iai5tYXAodGhpcywgc3RvcmVzKTtcbiAgICAgICAgaWYgKCBkb1dhaXQgKSB7XG4gICAgICAgICAgICB0aGlzLndhaXQoKTtcbiAgICAgICAgICAgIHN0b3Jlcy5mb3JFYWNoKCggcyApID0+IHRoaXMuc2NvcGVbc10gJiYgdGhpcy53YWl0KHRoaXMuc2NvcGVbc10pKTtcbiAgICAgICAgICAgIHRoaXMucmVsZWFzZSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpbml0aWFsT3V0cHV0cztcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogQXBwbHkgYXBwbHkvcmVtYXAgb24gdGhlIHByaXZhdGUgc3RhdGUgJiBwdXNoIHRoZSByZXN1bHRpbmcgXCJwdWJsaWNcIiBzdGF0ZSB0byBmb2xsb3dlcnNcbiAgICAgKiBAcGFyYW0gY2JcbiAgICAgKi9cbiAgICBwdXNoKCBkYXRhLCBmb3JjZSwgY2IgKSB7XG4gICAgICAgIGNiICAgICAgICAgICAgPSBmb3JjZSA9PT0gdHJ1ZSA/IGNiIDogZm9yY2U7XG4gICAgICAgIGZvcmNlICAgICAgICAgPSBmb3JjZSA9PT0gdHJ1ZTtcbiAgICAgICAgdmFyIGkgICAgICAgICA9IDAsXG4gICAgICAgICAgICBuZXh0U3RhdGUgPSAhZGF0YSAmJiB7IC4uLnRoaXMuc3RhdGUsIC4uLnRoaXMuX2NoYW5nZXNTVyB9IHx8IHRoaXMuc3RhdGUsXG4gICAgICAgICAgICBuZXh0RGF0YXMgPSBkYXRhIHx8IHRoaXMuYXBwbHkodGhpcy5kYXRhLCBuZXh0U3RhdGUsIHRoaXMuX2NoYW5nZXNTVyk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9zdGFiaWxpemVyID0gbnVsbDtcbiAgICAgICAgdGhpcy5zdGF0ZSAgICAgICA9IG5leHRTdGF0ZTtcbiAgICAgICAgdGhpcy5fY2hhbmdlc1NXICA9IHt9O1xuICAgICAgICBpZiAoICFmb3JjZSAmJlxuICAgICAgICAgICAgKFxuICAgICAgICAgICAgICAgICF0aGlzLmhhc0RhdGFDaGFuZ2UobmV4dERhdGFzKVxuICAgICAgICAgICAgKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIGNiICYmIGNiKCk7XG4gICAgICAgICAgICBpZiAoICF0aGlzLl9fbG9ja3MuYWxsICkge1xuICAgICAgICAgICAgICAgIGxldCBzdGFibGUgICA9IHRoaXMuX3N0YWJsZTtcbiAgICAgICAgICAgICAgICB0aGlzLl9zdGFibGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICFzdGFibGUgJiYgdGhpcy5lbWl0KCdzdGFibGUnLCB0aGlzLnN0YXRlLCB0aGlzLmRhdGEpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3N0YWJpbGl6ZXIgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvL1xuICAgICAgICB0aGlzLmRhdGEgPSBuZXh0RGF0YXM7XG4gICAgICAgIHRoaXMud2FpdCgpO1xuICAgICAgICB0aGlzLnJlbGVhc2UoY2IpO1xuICAgICAgICBcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogVXBkYXRlIHRoZSBjdXJyZW50IHByaXZhdGUgc3RhdGUgJiBwdXNoIGl0IG9uY2UgdGhlIHN0b3JlIGlzIHN0YWJsZVxuICAgICAqIEBwYXJhbSBwU3RhdGVcbiAgICAgKiBAcGFyYW0gY2JcbiAgICAgKi9cbiAgICBzZXRTdGF0ZSggcFN0YXRlLCBjYiwgc3luYyApIHtcbiAgICAgICAgdmFyIGkgICAgICAgPSAwLCBjaGFuZ2UsXG4gICAgICAgICAgICBjaGFuZ2VzID0gdGhpcy5fY2hhbmdlc1NXID0gdGhpcy5fY2hhbmdlc1NXIHx8IHt9O1xuICAgICAgICBmb3IgKCB2YXIgayBpbiBwU3RhdGUgKVxuICAgICAgICAgICAgaWYgKCAhdGhpcy5zdGF0ZSB8fCBwU3RhdGUuaGFzT3duUHJvcGVydHkoaylcbiAgICAgICAgICAgICAgICAmJiAoXG4gICAgICAgICAgICAgICAgICAgIHBTdGF0ZVtrXSAhPSB0aGlzLnN0YXRlW2tdXG4gICAgICAgICAgICAgICAgICAgIHx8XG4gICAgICAgICAgICAgICAgICAgICh0aGlzLnN0YXRlW2tdICYmIHBTdGF0ZVtrXSAmJiAocFN0YXRlW2tdLl9yZXYgIT0gdGhpcy5fcmV2c1trXSkpLy8gcmV2L2hhc2ggdXBkYXRlXG4gICAgICAgICAgICAgICAgKSApIHtcbiAgICAgICAgICAgICAgICBjaGFuZ2UgICAgICAgID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLl9yZXZzW2tdID0gcFN0YXRlW2tdICYmIHBTdGF0ZVtrXS5fcmV2IHx8IHRydWU7XG4gICAgICAgICAgICAgICAgY2hhbmdlc1trXSAgICA9IHBTdGF0ZVtrXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmICggIXRoaXMuc2hvdWxkQXBwbHkoeyAuLi50aGlzLnN0YXRlLCAuLi5jaGFuZ2VzIH0pICkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAoIHN5bmMgKSB7XG4gICAgICAgICAgICB0aGlzLnB1c2goKTtcbiAgICAgICAgICAgIGNiICYmIGNiKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoIGNoYW5nZSApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YWJpbGl6ZShjYik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGNiICYmIGNiKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSB0aGUgY3VycmVudCBwcml2YXRlIHN0YXRlICYgcHVzaCBpdCBvbmNlIHRoZSBzdG9yZSBpcyBzdGFibGVcbiAgICAgKiBAcGFyYW0gcFN0YXRlXG4gICAgICogQHBhcmFtIGNiXG4gICAgICovXG4gICAgc2V0U3RhdGVTeW5jKCBwU3RhdGUgKSB7XG4gICAgICAgIHZhciBpICAgICAgID0gMCwgY2hhbmdlLFxuICAgICAgICAgICAgY2hhbmdlcyA9IHRoaXMuX2NoYW5nZXNTVyA9IHRoaXMuX2NoYW5nZXNTVyB8fCB7fTtcbiAgICAgICAgZm9yICggdmFyIGsgaW4gcFN0YXRlIClcbiAgICAgICAgICAgIGlmICggIXRoaXMuc3RhdGUgfHwgcFN0YXRlLmhhc093blByb3BlcnR5KGspXG4gICAgICAgICAgICAgICAgJiYgKFxuICAgICAgICAgICAgICAgICAgICBwU3RhdGVba10gIT0gdGhpcy5zdGF0ZVtrXVxuICAgICAgICAgICAgICAgICAgICB8fFxuICAgICAgICAgICAgICAgICAgICAodGhpcy5zdGF0ZVtrXSAmJiBwU3RhdGVba10gJiYgKHBTdGF0ZVtrXS5fcmV2ICE9IHRoaXMuX3JldnNba10pKS8vIHJldi9oYXNoIHVwZGF0ZVxuICAgICAgICAgICAgICAgICkgKSB7XG4gICAgICAgICAgICAgICAgY2hhbmdlICAgICAgICA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5fcmV2c1trXSA9IHBTdGF0ZVtrXSAmJiBwU3RhdGVba10uX3JldiB8fCB0cnVlO1xuICAgICAgICAgICAgICAgIGNoYW5nZXNba10gICAgPSBwU3RhdGVba107XG4gICAgICAgICAgICB9XG4gICAgICAgIHRoaXMuc2hvdWxkQXBwbHkoeyAuLi4odGhpcy5zdGF0ZSB8fCB7fSksIC4uLmNoYW5nZXMgfSkgJiYgdGhpcy5wdXNoKCk7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGE7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIFJlcGxhY2UgdGhlIGN1cnJlbnQgcHJpdmF0ZSBzdGF0ZSAmIHB1c2ggaXQgb25jZSB0aGUgc3RvcmUgaXMgc3RhYmxlXG4gICAgICogQHBhcmFtIHBTdGF0ZVxuICAgICAqIEBwYXJhbSBjYlxuICAgICAqL1xuICAgIHJlcGxhY2VTdGF0ZSggcFN0YXRlLCBjYiApIHtcbiAgICAgICAgdmFyIGkgICAgICA9IDAsIG1lID0gdGhpcztcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHBTdGF0ZTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuc3RhYmlsaXplKGNiKTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogZ2V0IGEgc3RvcmUta2V5IHBhaXIgZm9yIFN0b3JlOjptYXBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgICAqIEByZXR1cm5zIHt7c3RvcmU6IFN0b3JlLCBuYW1lOiAqfX1cbiAgICAgKi9cbiAgICBhcyggbmFtZSApIHtcbiAgICAgICAgcmV0dXJuIHsgc3RvcmU6IHRoaXMsIG5hbWUgfTtcbiAgICB9XG4gICAgXG4gICAgb24oIGxpc3RzICkge1xuICAgICAgICBpZiAoICFpcy5zdHJpbmcobGlzdHMpICYmIGxpc3RzIClcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGxpc3RzKS5mb3JFYWNoKGsgPT4gc3VwZXIub24oaywgbGlzdHNba10pKTtcbiAgICAgICAgZWxzZSBzdXBlci5vbiguLi5hcmd1bWVudHMpO1xuICAgIH1cbiAgICBcbiAgICByZW1vdmVMaXN0ZW5lciggbGlzdHMgKSB7XG4gICAgICAgIGlmICggIWlzLnN0cmluZyhsaXN0cykgJiYgbGlzdHMgKVxuICAgICAgICAgICAgT2JqZWN0LmtleXMobGlzdHMpLmZvckVhY2goayA9PiBzdXBlci5yZW1vdmVMaXN0ZW5lcihrLCBsaXN0c1trXSkpO1xuICAgICAgICBlbHNlIHN1cGVyLnJlbW92ZUxpc3RlbmVyKC4uLmFyZ3VtZW50cyk7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIHJlbGluayBiaW5kaW5ncyAmIHJlcXVpcmVzXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICAgKiBAcmV0dXJucyB7e3N0b3JlOiBTdG9yZSwgbmFtZTogKn19XG4gICAgICovXG4gICAgcmVsaW5rKCBmcm9tICkge1xuICAgICAgICBsZXQgc2NvcGUgICA9IHRoaXMuc2NvcGVPYmosXG4gICAgICAgICAgICBfc3RhdGljID0gdGhpcy5jb25zdHJ1Y3RvcjtcbiAgICAgICAgaWYgKCBfc3RhdGljLnVzZSApIHtcbiAgICAgICAgICAgIC8vdG9kbyB1bmxpbmtcbiAgICAgICAgICAgIHRoaXMucHVsbChfc3RhdGljLnVzZSwgZmFsc2UsIGZyb20pO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAoIHRoaXMuX3JlcXVpcmUgKSB7XG4gICAgICAgICAgICB0aGlzLl9yZXF1aXJlLmZvckVhY2goXG4gICAgICAgICAgICAgICAgc3RvcmUgPT4gKFxuICAgICAgICAgICAgICAgICAgICB0aGlzLndhaXQoc2NvcGUuX19zY29wZVtzdG9yZV0pXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBpcyBjb21wbGV0ZSAoYWxsIHJlcXVpZXJlZCBrZXlzIGFyZSBoZXJlKVxuICAgICAqIEByZXR1cm5zIGJvb2xcbiAgICAgKi9cbiAgICBpc0NvbXBsZXRlKCBzdGF0ZSA9IHRoaXMuc3RhdGUgKSB7XG4gICAgICAgIHZhciBfc3RhdGljID0gdGhpcy5jb25zdHJ1Y3RvcjtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICF0aGlzLl9yZXF1aXJlXG4gICAgICAgICAgICB8fCAhdGhpcy5fcmVxdWlyZS5sZW5ndGhcbiAgICAgICAgICAgIHx8IHN0YXRlICYmIHRoaXMuX3JlcXVpcmUucmVkdWNlKFxuICAgICAgICAgICAgICAgICggciwga2V5ICkgPT4gKHIgJiYgc3RhdGVba2V5XSksXG4gICAgICAgICAgICAgICAgdHJ1ZVxuICAgICAgICAgICAgKVxuICAgICAgICApO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBpcyBzdGFibGVcbiAgICAgKiBAcmV0dXJucyBib29sXG4gICAgICovXG4gICAgaXNTdGFibGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zdGFibGU7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIGlzIHN0YWJsZVxuICAgICAqIEByZXR1cm5zIGJvb2xcbiAgICAgKi9cbiAgICBzZXJpYWxpemUoIG91dHB1dCA9IHt9LCBjb21wbGV0ZVN0YXRlICkge1xuICAgICAgICBsZXQgcmVmcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID1cbiAgICAgICAgICAgICAgICB0aGlzLl91c2UucmVkdWNlKFxuICAgICAgICAgICAgICAgICAgICAoIG1hcCwga2V5ICkgPT4gey8vdG9kb1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpYXMsIHBhdGgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIGtleS5zdG9yZSAmJiBrZXkubmFtZSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlhcyA9IG5hbWUgPSBrZXkubmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKCBpcy5mbihrZXkpICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUgPSBhbGlhcyA9IGtleS5uYW1lIHx8IGtleS5kZWZhdWx0TmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleSAgID0ga2V5Lm1hdGNoKC8oW1xcd19dKykoKD86XFwuW1xcd19dKykqKSg/OlxcOihbXFx3X10rKSk/Lyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZSAgPSBrZXlbMV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aCAgPSBrZXlbMl0gJiYga2V5WzJdLnN1YnN0cigxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlhcyA9IGtleVszXSB8fCBwYXRoICYmIHBhdGgubWF0Y2goLyhbXlxcLl0qKSQvKVswXSB8fCBrZXlbMV07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCAhdGhpcy5zY29wZU9iai5zdG9yZXNbbmFtZV0uc2NvcGVPYmouX2lzTG9jYWxJZCApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFwW2FsaWFzXSA9IHRoaXMuc2NvcGVPYmouc3RvcmVzW25hbWVdLnNjb3BlT2JqLl9pZCArICcvJyArIG5hbWU7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1hcDtcbiAgICAgICAgICAgICAgICAgICAgfSwge31cbiAgICAgICAgICAgICAgICApIHx8IHt9O1xuICAgICAgICBvdXRwdXRbdGhpcy5zY29wZU9iai5faWQgKyAnLycgKyB0aGlzLm5hbWVdID0ge1xuICAgICAgICAgICAgc3RhdGU6IGNvbXBsZXRlU3RhdGVcbiAgICAgICAgICAgICAgICA/IHsgLi4udGhpcy5zdGF0ZSB9XG4gICAgICAgICAgICAgICAgOiBPYmplY3Qua2V5cyh0aGlzLnN0YXRlKS5yZWR1Y2UoKCBoLCBrICkgPT4gKCFyZWZzW2tdICYmIChoW2tdID0gdGhpcy5zdGF0ZVtrXSksIGgpLCB7fSksXG4gICAgICAgICAgICBkYXRhIDogdGhpcy5kYXRhLFxuICAgICAgICAgICAgcmVmc1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gb3V0cHV0O1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBpcyBzdGFibGVcbiAgICAgKiBAcmV0dXJucyBib29sXG4gICAgICovXG4gICAgcmVzdG9yZSggc25hcHNob3QgKSB7XG4gICAgICAgIGxldCBzbmFwID0gc25hcHNob3RbdGhpcy5zY29wZU9iai5faWQgKyAnLycgKyB0aGlzLm5hbWVdO1xuICAgICAgICBpZiAoIHNuYXAgKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlID0gc25hcC5zdGF0ZTtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHNuYXAucmVmcykuZm9yRWFjaChcbiAgICAgICAgICAgICAgICAoIGtleSApID0+IHsvL3RvZG9cbiAgICAgICAgICAgICAgICAgICAgaWYgKCBzbmFwc2hvdFtzbmFwLnJlZnNba2V5XV0gKVxuICAgICAgICAgICAgICAgICAgICAgICAgc25hcC5zdGF0ZVtrZXldID0gc25hcHNob3Rbc25hcC5yZWZzW2tleV1dLmRhdGE7XG4gICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2Fybignbm90IGZvdW5kIDogJywga2V5LCBzbmFwLnJlZnNba2V5XSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMuZGF0YSA9IHNuYXAuZGF0YTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBVbiBiaW5kIHRoaXMgc3RvcmUgb2ZmIHRoZSBnaXZlbiBjb21wb25lbnQta2V5XG4gICAgICogQHBhcmFtIG9ialxuICAgICAqIEBwYXJhbSBrZXlcbiAgICAgKiBAcmV0dXJucyB7QXJyYXkuPCo+fVxuICAgICAqL1xuICAgIHVuQmluZCggb2JqLCBrZXksIHBhdGggKSB7XG4gICAgICAgIHZhciBmb2xsb3dlcnMgPSB0aGlzLl9mb2xsb3dlcnMsXG4gICAgICAgICAgICBpICAgICAgICAgPSBmb2xsb3dlcnMgJiYgZm9sbG93ZXJzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBmb2xsb3dlcnMgJiYgaS0tIClcbiAgICAgICAgICAgIGlmICggZm9sbG93ZXJzW2ldWzBdID09PSBvYmogJiYgZm9sbG93ZXJzW2ldWzFdID09PSBrZXkgJiYgZm9sbG93ZXJzW2ldWzJdID09PSBwYXRoIClcbiAgICAgICAgICAgICAgICByZXR1cm4gZm9sbG93ZXJzLnNwbGljZShpLCAxKTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogQmluZCB0aGlzIHN0b3JlIGNoYW5nZXMgdG8gdGhlIGdpdmVuIGNvbXBvbmVudC1rZXlcbiAgICAgKiBAcGFyYW0gb2JqIHtSZWFjdC5Db21wb25lbnR8U3RvcmV8ZnVuY3Rpb24pXG4gICAgICogQHBhcmFtIGtleSB7c3RyaW5nfSBvcHRpb25hbCBrZXkgd2hlcmUgdG8gbWFwIHRoZSBwdWJsaWMgc3RhdGVcbiAgICAgKi9cbiAgICBiaW5kKCBvYmosIGtleSwgc2V0SW5pdGlhbCA9IHRydWUsIHBhdGggKSB7XG4gICAgICAgIHRoaXMuX2ZvbGxvd2Vycy5wdXNoKFtvYmosIGtleSwgcGF0aF0pO1xuICAgICAgICBpZiAoIHNldEluaXRpYWwgJiYgdGhpcy5kYXRhICYmIHRoaXMuX3N0YWJsZSApIHtcbiAgICAgICAgICAgIGxldCBkYXRhID0gcGF0aCA/IHRoaXMucmV0cmlldmUocGF0aCkgOiB0aGlzLmRhdGE7XG4gICAgICAgICAgICBpZiAoIHR5cGVvZiBvYmogIT0gXCJmdW5jdGlvblwiICkge1xuICAgICAgICAgICAgICAgIGlmICgga2V5ICkgb2JqLnNldFN0YXRlKHsgW2tleV06IGRhdGEgfSk7XG4gICAgICAgICAgICAgICAgZWxzZSBvYmouc2V0U3RhdGUoZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBvYmooZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogb25jZSgnc3RhYmxlJywgY2IpXG4gICAgICogQHBhcmFtIG9iaiB7UmVhY3QuQ29tcG9uZW50fFN0b3JlfGZ1bmN0aW9uKVxuICAgICAqIEBwYXJhbSBrZXkge3N0cmluZ30gb3B0aW9uYWwga2V5IHdoZXJlIHRvIG1hcCB0aGUgcHVibGljIHN0YXRlXG4gICAgICovXG4gICAgdGhlbiggY2IgKSB7XG4gICAgICAgIGlmICggdGhpcy5fc3RhYmxlIClcbiAgICAgICAgICAgIHJldHVybiBjYihudWxsLCB0aGlzLmRhdGEpO1xuICAgICAgICB0aGlzLm9uY2UoJ3N0YWJsZScsIGUgPT4gY2IobnVsbCwgdGhpcy5kYXRhKSk7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIEFkZCBhIGxvY2sgc28gdGhlIHN0b3JlIHdpbGwgbm90IHByb3BhZyBpdCBzdGF0ZSB1bnRpbGwgcmVsZWFzZSgpIGlzIGNhbGxcbiAgICAgKiBAcGFyYW0gcHJldmlvdXMge1N0b3JlfG51bWJlcnxBcnJheX0gQG9wdGlvbmFsIHdmIHRvIHdhaXQsIHJlbGVhc2VzIHRvIHdhaXQgb3IgYXJyYXkgb2Ygc3R1ZmYgdG8gd2FpdFxuICAgICAqIEByZXR1cm5zIHtUYXNrRmxvd31cbiAgICAgKi9cbiAgICB3YWl0KCBwcmV2aW91cyApIHtcbiAgICAgICAgaWYgKCB0eXBlb2YgcHJldmlvdXMgPT0gXCJudW1iZXJcIiApXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fX2xvY2tzLmFsbCArPSBwcmV2aW91cztcbiAgICAgICAgaWYgKCBpcy5hcnJheShwcmV2aW91cykgKVxuICAgICAgICAgICAgcmV0dXJuIHByZXZpb3VzLm1hcCh0aGlzLndhaXQuYmluZCh0aGlzKSk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9zdGFibGUgJiYgdGhpcy5lbWl0KCd1bnN0YWJsZScsIHRoaXMuc3RhdGUsIHRoaXMuZGF0YSk7XG4gICAgICAgIHRoaXMuX3N0YWJsZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9fbG9ja3MuYWxsKys7XG4gICAgICAgIFxuICAgICAgICBsZXQgcmVhc29uID0gaXMuc3RyaW5nKHByZXZpb3VzKSA/IHByZXZpb3VzIDogbnVsbDtcbiAgICAgICAgaWYgKCByZWFzb24gKSB7XG4gICAgICAgICAgICB0aGlzLl9fbG9ja3NbcmVhc29uXSA9IHRoaXMuX19sb2Nrc1tyZWFzb25dIHx8IDA7XG4gICAgICAgICAgICB0aGlzLl9fbG9ja3NbcmVhc29uXSsrO1xuICAgICAgICB9XG4gICAgICAgIGlmICggcHJldmlvdXMgJiYgaXMuZm4ocHJldmlvdXMudGhlbikgKSB7XG4gICAgICAgICAgICBwcmV2aW91cy50aGVuKHRoaXMucmVsZWFzZS5iaW5kKHRoaXMsIG51bGwpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogRGVjcmVhc2UgbG9ja3MgZm9yIHRoaXMgc3RvcmUsIGlmIGl0IHJlYWNoIDAgJiBpdCBoYXZlIGEgcHVibGljIHN0YXRlLFxuICAgICAqIGl0IHdpbGwgYmUgcHJvcGFnYXRlZCB0byB0aGUgZm9sbG93ZXJzLFxuICAgICAqIHRoZW4sIGFsbCBzdHVmZiBwYXNzZWQgdG8gXCJ0aGVuXCIgY2FsbCBiYWNrIHdpbGwgYmUgZXhlYyAvIHJlbGVhc2VkXG4gICAgICogQHBhcmFtIGRlc3luY1xuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqL1xuICAgIHJlbGVhc2UoIHJlYXNvbiwgY2IgKSB7XG4gICAgICAgIHZhciBfc3RhdGljID0gdGhpcy5jb25zdHJ1Y3RvciwgbWUgPSB0aGlzO1xuICAgICAgICBsZXQgaSAgICAgICA9IDAsIHdhc1N0YWJsZSA9IHRoaXMuX3N0YWJsZTtcbiAgICAgICAgXG4gICAgICAgIGlmICggaXMuZm4ocmVhc29uKSApIHtcbiAgICAgICAgICAgIGNiICAgICA9IHJlYXNvbjtcbiAgICAgICAgICAgIHJlYXNvbiA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmICggcmVhc29uICkge1xuICAgICAgICAgICAgaWYgKCB0aGlzLl9fbG9ja3NbcmVhc29uXSA9PSAwIClcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiUmVsZWFzZSBtb3JlIHRoYW4gbG9ja2luZyAhXCIsIHJlYXNvbik7XG4gICAgICAgICAgICB0aGlzLl9fbG9ja3NbcmVhc29uXSA9IHRoaXMuX19sb2Nrc1tyZWFzb25dIHx8IDA7XG4gICAgICAgICAgICB0aGlzLl9fbG9ja3NbcmVhc29uXS0tO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAoICFyZWFzb24gJiYgdGhpcy5fX2xvY2tzLmFsbCA9PSAwIClcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJSZWxlYXNlIG1vcmUgdGhhbiBsb2NraW5nICFcIik7XG4gICAgICAgIFxuICAgICAgICBpZiAoICEtLXRoaXMuX19sb2Nrcy5hbGwgJiYgdGhpcy5pc0NvbXBsZXRlKCkgKSB7XG4gICAgICAgICAgICBsZXQgcHJvcGFnICAgPSB0aGlzLnNob3VsZFByb3BhZyh0aGlzLmRhdGEpO1xuICAgICAgICAgICAgdGhpcy5fc3RhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIHByb3BhZyAmJiB0aGlzLl9yZXYrKzsvL1xuICAgICAgICAgICAgaWYgKCBwcm9wYWcgJiYgdGhpcy5fZm9sbG93ZXJzLmxlbmd0aCApXG4gICAgICAgICAgICAgICAgdGhpcy5fZm9sbG93ZXJzLmZvckVhY2goZnVuY3Rpb24gcHJvcGFnKCBmb2xsb3dlciApIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSBmb2xsb3dlclsyXSA/IG1lLnJldHJpZXZlKGZvbGxvd2VyWzJdKSA6IG1lLmRhdGE7XG4gICAgICAgICAgICAgICAgICAgIC8vaWYgKCAhZGF0YSApIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGlmICggdHlwZW9mIGZvbGxvd2VyWzBdID09IFwiZnVuY3Rpb25cIiApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbGxvd2VyWzBdKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9jYiAmJiBpKys7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb2xsb3dlclswXS5zZXRTdGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZm9sbG93ZXJbMV0pID8geyBbZm9sbG93ZXJbMV1dOiBkYXRhIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBkYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9jYiAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgKCkgPT4gKCEoLS1pKSAmJiBjYigpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vKVxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy9lbHNlXG4gICAgICAgICAgICAhd2FzU3RhYmxlICYmIHRoaXMuZW1pdCgnc3RhYmxlJywgdGhpcy5kYXRhKTtcbiAgICAgICAgICAgIHByb3BhZyAmJiB0aGlzLmVtaXQoJ3VwZGF0ZScsIHRoaXMuZGF0YSk7XG4gICAgICAgICAgICBjYiAmJiBjYigpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBjYiAmJiB0aGlzLnRoZW4oY2IpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgXG4gICAgcmV0YWluKCByZWFzb24gKSB7XG4gICAgICAgIHRoaXMuX19yZXRhaW5zLmFsbCsrO1xuICAgICAgICBpZiAoIHJlYXNvbiApIHtcbiAgICAgICAgICAgIHRoaXMuX19yZXRhaW5zW3JlYXNvbl0gPSB0aGlzLl9fcmV0YWluc1tyZWFzb25dIHx8IDA7XG4gICAgICAgICAgICB0aGlzLl9fcmV0YWluc1tyZWFzb25dKys7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgZGlzcG9zZSggcmVhc29uICkge1xuICAgICAgICAvL2NvbnNvbGUud2FybihcImRpc3Bvc2VcIiwgcmVhc29uLCB0aGlzLl9fcmV0YWlucyk7XG4gICAgICAgIGlmICggcmVhc29uICkge1xuICAgICAgICAgICAgaWYgKCAhdGhpcy5fX3JldGFpbnNbcmVhc29uXSApXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRGlzcG9zZSBtb3JlIHRoYW4gcmV0YWluaW5nIDogXCIgKyByZWFzb24pO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLl9fcmV0YWluc1tyZWFzb25dLS07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCB0aGlzLl9fcmV0YWlucy5hbGwgPT0gMCApXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJEaXNwb3NlIG1vcmUgdGhhbiByZXRhaW5pbmcgIVwiKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX19yZXRhaW5zLmFsbC0tO1xuICAgICAgICBcbiAgICAgICAgaWYgKCAhdGhpcy5fX3JldGFpbnMuYWxsICkge1xuICAgICAgICAgICAgaWYgKCB0aGlzLl9wZXJzaXN0ZW5jZVRtICkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2Rlc3Ryb3lUTSAmJiBjbGVhclRpbWVvdXQodGhpcy5fZGVzdHJveVRNKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9kZXN0cm95VE0gPSBzZXRUaW1lb3V0KFxuICAgICAgICAgICAgICAgICAgICBlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2Rlc3Ryb3lUTSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRoZW4ocyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIXRoaXMuX19yZXRhaW5zLmFsbCAmJiB0aGlzLmRlc3Ryb3koKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3BlcnNpc3RlbmNlVG1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy50aGVuKHMgPT4gKCF0aGlzLl9fcmV0YWlucy5hbGwgJiYgdGhpcy5kZXN0cm95KCkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBkZXN0cm95KCkge1xuICAgICAgICAvLyAgY29uc29sZS5sb2coXCJkZXN0cm95XCIsIHRoaXMuX3VpZCk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmVtaXQoJ2Rlc3Ryb3knLCB0aGlzKTtcbiAgICAgICAgaWYgKCB0aGlzLl9zdGFiaWxpemVyIClcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9zdGFiaWxpemVyKTtcbiAgICAgICAgXG4gICAgICAgIGlmICggdGhpcy5fZm9sbG93ZXJzLmxlbmd0aCApXG4gICAgICAgICAgICB0aGlzLl9mb2xsb3dlcnMuZm9yRWFjaChcbiAgICAgICAgICAgICAgICAoIGZvbGxvd2VyICkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIHR5cGVvZiBmb2xsb3dlclswXSAhPT0gXCJmdW5jdGlvblwiICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBmb2xsb3dlclswXS5zdG9yZXMgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBmb2xsb3dlclswXS5zdG9yZXNbZm9sbG93ZXJbMV1dO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgdGhpcy5fZm9sbG93ZXJzLmxlbmd0aCA9IDA7XG4gICAgICAgIHRoaXMuY29uc3RydWN0b3IuX3JldiAgPSB0aGlzLnJldjtcbiAgICAgICAgdGhpcy5kZWFkICAgICAgICAgICAgICA9IHRydWU7XG4gICAgICAgIHRoaXMuX3JldnMgICAgICAgICAgICAgPSB0aGlzLmRhdGEgPSB0aGlzLnN0YXRlID0gdGhpcy5zY29wZSA9IG51bGw7XG4gICAgICAgIHRoaXMucmVtb3ZlQWxsTGlzdGVuZXJzKCk7XG4gICAgfVxufVxuXG5cblN0b3JlLlNlZWQgPSBjbGFzcyBTZWVkU3RvcmUgZXh0ZW5kcyBTdG9yZSB7XG4gICAgc3RhdGljIFNFRUQgPSB0cnVlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTdG9yZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvU3RvcmUuanMiLCIvKlxyXG4gKiBDb3B5cmlnaHQgKGMpICAyMDE4IFdpc2UgV2lsZCBXZWIgLlxyXG4gKlxyXG4gKiAgTUlUIExpY2Vuc2VcclxuICpcclxuICogIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcclxuICogIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcclxuICogIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcclxuICogIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcclxuICogIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xyXG4gKiAgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuICpcclxuICogIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxyXG4gKiAgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuICpcclxuICogIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcclxuICogIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxyXG4gKiAgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXHJcbiAqICBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXHJcbiAqICBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxyXG4gKiAgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcclxuICogIFNPRlRXQVJFLlxyXG4gKlxyXG4gKiBAYXV0aG9yIDogTmF0aGFuYWVsIEJyYXVuXHJcbiAqIEBjb250YWN0IDogY2FpcGlsYWJzQGdtYWlsLmNvbVxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBNaW5pbWFsIHB1c2ggc2VxdWVuY2VyLCBhcHBseSBzdG9yZXMgc3BlY2lmaWMgdGFzayBpbiB0aGUgcmlnaHQgb3JkZXIgKHJvb3Qgc3RvcmVzIGZpcnN0KVxyXG4gKi9cclxubGV0IHRhc2tRdWV1ZSAgICA9IFtdLFxyXG4gICAgY3VyV2VpZ2h0ICAgID0gMCxcclxuICAgIG1heFdlaWdodCAgICA9IDAsXHJcbiAgICBtaW5XZWlnaHQgICAgPSAwLFxyXG4gICAgdGFza0NvdW50ICAgID0gMCxcclxuICAgIC8vZGVTeW5jU3RlcHMgPSAxMDAwLFxyXG4gICAgdGFzayxcclxuICAgIGlzUnVubmluZyxcclxuICAgIGVycm9yQ2F0Y2hlciA9IHtcclxuICAgICAgICBsYXN0RXJyb3I6IG51bGwsXHJcbiAgICAgICAgZGlzcGF0Y2ggOiBmdW5jdGlvbiAoIGVycm9yICkge1xyXG4gICAgICAgICAgICBlcnJvckNhdGNoZXIuZGlzYWJsZSgpO1xyXG4gICAgICAgICAgICBpZiAoIHRhc2sgJiYgdGFza1swXS5oYW5kbGVFcnJvciApIHtcclxuICAgICAgICAgICAgICAgIHRhc2tbMF0uaGFuZGxlRXJyb3IoZXJyb3IsIHRhc2spO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKCB0YXNrIClcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJSZVNjb3BlIDogQSB0YXNrIGhhcyBmYWlsZWQgISFcIiwgdGFza1sxXSwgXCIgb24gXCIsIHRhc2tbMF0ubmFtZSB8fCB0YXNrWzBdLmNvbnN0cnVjdG9yLm5hbWUpXHJcbiAgICBcclxuICAgICAgICAgICAgdGFzaz1udWxsO1xyXG4gICAgICAgICAgICBydW4oKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVuYWJsZSAgIDogKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKVxyXG4gICAgICAgICAgICA/ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIGVycm9yQ2F0Y2hlci5kaXNwYXRjaClcclxuICAgICAgICAgICAgfSA6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHByb2Nlc3Mub24oJ3VuY2F1Z2h0RXhjZXB0aW9uJywgZXJyb3JDYXRjaGVyLmRpc3BhdGNoKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBkaXNhYmxlICA6ICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJylcclxuICAgICAgICAgICAgPyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignZXJyb3InLCBlcnJvckNhdGNoZXIuZGlzcGF0Y2gpXHJcbiAgICAgICAgICAgIH0gOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBwcm9jZXNzLnJlbW92ZUxpc3RlbmVyKCd1bmNhdWdodEV4Y2VwdGlvbicsIGVycm9yQ2F0Y2hlci5kaXNwYXRjaCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgIH1cclxuO1xyXG5cclxuZnVuY3Rpb24gcnVuTm93KCkge1xyXG4gICAgaWYgKCAhaXNSdW5uaW5nICkge1xyXG4gICAgICAgIHJ1bigpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBydW4oKSB7XHJcbiAgICBpc1J1bm5pbmcgPSB0cnVlO1xyXG4gICAgZXJyb3JDYXRjaGVyLmVuYWJsZSgpO1xyXG4gICAgd2hpbGUgKCB0YXNrQ291bnQgKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gdHJ5IGZvciB0aGUgY3VycmVudCB3ZWlnaHRcclxuICAgICAgICB3aGlsZSAoICEodGFza1F1ZXVlW2N1cldlaWdodF0gJiYgdGFza1F1ZXVlW2N1cldlaWdodF0ubGVuZ3RoKSApXHJcbiAgICAgICAgICAgIGN1cldlaWdodCsrO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRhc2tDb3VudC0tO1xyXG4gICAgICAgIHRhc2sgPSB0YXNrUXVldWVbY3VyV2VpZ2h0XS5zaGlmdCgpO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJUYXNrIDogXCIsIHRhc2tbMV0sIFwiIG9uIFwiLCB0YXNrWzBdLm5hbWUpO1xyXG4gICAgICAgIHRhc2tbMF1bdGFza1sxXV0uYXBwbHkodGFza1swXSwgdGFza1syXSk7XHJcbiAgICB9XHJcbiAgICB0YXNrID0gdW5kZWZpbmVkO1xyXG4gICAgZXJyb3JDYXRjaGVyLmRpc2FibGUoKTtcclxuICAgIFxyXG4gICAgaWYgKCAhdGFza0NvdW50ICkge1xyXG4gICAgICAgIGlzUnVubmluZyA9IGZhbHNlO1xyXG4gICAgICAgIHNldFRpbWVvdXQocnVuKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIHB1c2hUYXNrKCBvYmosIGZuLCBhcmd6ICkge1xyXG4gICAgICAgIGxldCB3ZWlnaHQgPSBvYmouX3NvdXJjZXMgJiYgb2JqLl9zb3VyY2VzLmxlbmd0aCB8fCAxLFxyXG4gICAgICAgICAgICBzdGFjayAgPSB0YXNrUXVldWVbd2VpZ2h0XSA9XHJcbiAgICAgICAgICAgICAgICB0YXNrUXVldWVbd2VpZ2h0XSB8fCBbXTtcclxuICAgICAgICBcclxuICAgICAgICBtYXhXZWlnaHQgPSBNYXRoLm1heChtYXhXZWlnaHQsIHdlaWdodCk7XHJcbiAgICAgICAgY3VyV2VpZ2h0ID0gTWF0aC5taW4oY3VyV2VpZ2h0LCB3ZWlnaHQpO1xyXG4gICAgICAgIHRhc2tDb3VudCsrO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJQdXNoIFRhc2sgOiBcIiwgZm4sIFwiIG9uIFwiLCBvYmoubmFtZSwgd2VpZ2h0KTtcclxuICAgICAgICBzdGFjay5wdXNoKFtvYmosIGZuLCBhcmd6XSk7XHJcbiAgICAgICAgc2V0VGltZW91dChydW5Ob3cpO1xyXG4gICAgICAgIHJldHVybiBzdGFjay5sZW5ndGg7XHJcbiAgICB9XHJcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1Rhc2tTZXF1ZW5jZXIuanMiLCIvKlxuICogQ29weXJpZ2h0IChjKSAgMjAxOCBXaXNlIFdpbGQgV2ViIC5cbiAqXG4gKiAgTUlUIExpY2Vuc2VcbiAqICBcbiAqICBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiAgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqICB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiAgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiAgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqICBcbiAqICBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcbiAqICBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICogIFxuICogIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqICBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqICBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqICBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiAgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqICBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuICogIFNPRlRXQVJFLlxuICogIFxuICogQGF1dGhvciA6IE5hdGhhbmFlbCBCcmF1blxuICogQGNvbnRhY3QgOiBjYWlwaWxhYnNAZ21haWwuY29tXG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGlzIGZyb20gJ2lzJ1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBTY29wZSBmcm9tICcuL1Njb3BlJztcblxuY29uc3QgU2ltcGxlT2JqZWN0UHJvdG8gPSAoe30pLmNvbnN0cnVjdG9yO1xuXG4vKipcbiAqIEluaGVyaXRhYmxlIFJlU2NvcGUgXCJIT0NcIiAoSGlnaCBPcmRlciBDb21wb25lbnQpXG4gKlxuICogQGNsYXNzIENvbXBvbmVudFxuICogQGRlc2MgUGFyZW50IFJlYWN0IENvbXBvbmVudCB3aXRoIHN0b3JlIGluamVjdGlvbiBpbiBpdHMgc3RhdGVcbiAqL1xuY2xhc3MgQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgY2hpbGRDb250ZXh0VHlwZXMgPSB7XG4gICAgICAgIHJlc2NvcGU6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgICAgICRzdG9yZXM6IFByb3BUeXBlcy5vYmplY3RcbiAgICB9XG4gICAgc3RhdGljIGNvbnRleHRUeXBlcyAgICAgID0ge1xuICAgICAgICByZXNjb3BlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgICAgICAkc3RvcmVzOiBQcm9wVHlwZXMub2JqZWN0XG4gICAgfVxuICAgIFxuICAgIGNvbnN0cnVjdG9yKCBwLCBjdHgsIHEgKSB7XG4gICAgICAgIHN1cGVyKHAsIGN0eCwgcSk7XG4gICAgICAgIGxldCBzY29wZSAgID1cbiAgICAgICAgICAgICAgICBwLl9fc2NvcGVcbiAgICAgICAgICAgICAgICB8fCBjdHgucmVzY29wZTtcbiAgICAgICAgdGhpcy4kc2NvcGUgPSBzY29wZTtcbiAgICAgICAgXG4gICAgICAgIGlmICggdGhpcy4kc2NvcGUuZGVhZCApIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJSZVNjb3BpbmcgdXNpbmcgZGVhZCBzY29wZVwiKVxuICAgICAgICAgICAgdGhpcy4kc2NvcGUgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0aGlzLiRzdG9yZXMgPSB0aGlzLiRzY29wZSAmJiB0aGlzLiRzY29wZS5zdG9yZXM7XG4gICAgICAgIGlmICggdGhpcy5jb25zdHJ1Y3Rvci51c2UgKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUsXG4gICAgICAgICAgICAgICAgLi4uc2NvcGUubWFwKHRoaXMsIHRoaXMuY29uc3RydWN0b3IudXNlIHx8IFtdLCBmYWxzZSkvLyBkb24ndCBiaW5kXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoICF0aGlzLiRzY29wZSApXG4gICAgICAgICAgICB0aGlzLnJlbmRlciA9ICgpID0+IDxkaXY+Tm8gUmVzY29wZSBoZXJlIHsgc3VwZXIubmFtZSB9PC9kaXY+XG4gICAgfVxuICAgIFxuICAgIGRpc3BhdGNoKCAuLi5hcmd6ICkge1xuICAgICAgICB0aGlzLiRzY29wZSAmJiB0aGlzLiRzY29wZS5kaXNwYXRjaCguLi5hcmd6KVxuICAgIH1cbiAgICBcbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICAgIGlmICggdGhpcy5jb25zdHJ1Y3Rvci51c2UgKSB7XG4gICAgICAgICAgICB0aGlzLiRzY29wZS5iaW5kKHRoaXMsIHRoaXMuY29uc3RydWN0b3IudXNlIHx8IFtdLCBmYWxzZSlcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgdGhpcy5jb25zdHJ1Y3Rvci51c2VcbiAgICAgICAgJiYgdGhpcy4kc2NvcGUudW5CaW5kKHRoaXMsIHRoaXMuY29uc3RydWN0b3IudXNlIHx8IFtdKTtcbiAgICAgICAgdGhpcy4kc2NvcGUgPSBudWxsO1xuICAgIH1cbiAgICBcbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKCBucCwgbmMgKSB7XG4gICAgICAgIGxldCBuU2NvcGUgPSBucC5fX3Njb3BlXG4gICAgICAgICAgICB8fCBuYy5yZXNjb3BlIHx8IHRoaXMuJHNjb3BlO1xuICAgICAgICBcbiAgICAgICAgaWYgKCBuU2NvcGUgIT0gdGhpcy4kc2NvcGUgKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnN0cnVjdG9yLnVzZSAmJiB0aGlzLiRzY29wZS51bkJpbmQodGhpcywgdGhpcy5jb25zdHJ1Y3Rvci51c2UpO1xuICAgICAgICAgICAgdGhpcy4kc2NvcGUgPSBuU2NvcGU7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmICggdGhpcy4kc2NvcGUuZGVhZCApIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiUmVTY29waW5nIHVzaW5nIGRlYWQgc2NvcGVcIilcbiAgICAgICAgICAgICAgICB0aGlzLiRzdG9yZXMgPSB0aGlzLiRzY29wZSA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRzdG9yZXMgPSB0aGlzLiRzY29wZS5zdG9yZXM7XG4gICAgICAgICAgICAgICAgdGhpcy5jb25zdHJ1Y3Rvci51c2UgJiYgblNjb3BlLmJpbmQodGhpcywgdGhpcy5jb25zdHJ1Y3Rvci51c2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGdldENoaWxkQ29udGV4dCgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJlc2NvcGU6IHRoaXMuJHNjb3BlIHx8IHRoaXMuY29udGV4dC5yZXNjb3BlLFxuICAgICAgICAgICAgJHN0b3JlczogdGhpcy4kc2NvcGUuc3RvcmVzIHx8IHRoaXMuY29udGV4dC4kc3RvcmVzXG4gICAgICAgIH07XG4gICAgfVxuICAgIFxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuY2hpbGRyZW4gfHwgPGRpdi8+XG4gICAgfVxufTtcblxuLyoqXG4gKiBSZXR1cm4gYSBSZWFjdCBcIkhPQ1wiIChIaWdoIE9yZGVyIENvbXBvbmVudCkgdGhhdCA6XG4gKiAgLSBJbmhlcml0IEJhc2VDb21wb25lbnQsXG4gKiAgLSBJbmplY3QgJiBtYWludGFpbiB0aGUgc3RvcmVzIGluIEJhc2VDb21wb25lbnQ6OnVzZSBhbmQvb3IgKHVzZSkgaW4gdGhlIGluc3RhbmNlcyBzdGF0ZS5cbiAqICAtIFByb3BhZyAoc2NvcGUpIGluIHRoZSByZXR1cm5lZCBSZWFjdCBDb21wb25lbnQgY29udGV4dFxuICpcbiAqXG4gKiBAcGFyYW0gQmFzZUNvbXBvbmVudCB7UmVhY3QuQ29tcG9uZW50fSBCYXNlIFJlYWN0IENvbXBvbmVudCAoIGRlZmF1bHQgOiBSZWFjdC5Db21wb25lbnQgKVxuICogQHBhcmFtIHNjb3BlIHtSZVNjb3BlLlNjb3BlfGZ1bmN0aW9ufSB0aGUgcHJvcGFnYXRlZCBTY29wZSB3aGVyZSB0aGUgc3RvcmVzIHdpbGwgYmUgc2VhcmNoZWRcbiAqIEBwYXJhbSB1c2Uge2FycmF5fSB0aGUgbGlzdCBvZiBzdG9yZXMgaW5qZWN0ZWQgZnJvbSB0aGUgY3VycmVudCBzY29wZVxuICogQHBhcmFtIGFkZGl0aW9uYWxDb250ZXh0IHtPYmplY3R9IGNvbnRleHQgdG8gYmUgcHJvcGFnYXRlZFxuICogQHJldHVybnMge1JlU2NvcGVQcm92aWRlcn1cbiAqL1xuZnVuY3Rpb24gcmVTY29wZVN0YXRlKCAuLi5hcmd6ICkge1xuICAgIGxldCBCYXNlQ29tcG9uZW50ICAgICA9ICghYXJnelswXSB8fCBhcmd6WzBdLnByb3RvdHlwZSAmJiBhcmd6WzBdLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50KSAmJiBhcmd6LnNoaWZ0KCksXG4gICAgICAgIHNjb3BlICAgICAgICAgICAgID0gKCFhcmd6WzBdIHx8IGFyZ3pbMF0gaW5zdGFuY2VvZiBTY29wZSB8fCBpcy5mbihhcmd6WzBdKSkgJiYgYXJnei5zaGlmdCgpLFxuICAgICAgICB1c2UgICAgICAgICAgICAgICA9ICghYXJnelswXSB8fCBpcy5hcnJheShhcmd6WzBdKSkgJiYgYXJnei5zaGlmdCgpLFxuICAgICAgICBhZGRpdGlvbmFsQ29udGV4dCA9ICghYXJnelswXSB8fCBhcmd6WzBdIGluc3RhbmNlb2YgU2ltcGxlT2JqZWN0UHJvdG8pICYmIGFyZ3ouc2hpZnQoKTtcbiAgICBcbiAgICBpZiAoICEoQmFzZUNvbXBvbmVudCAmJiBCYXNlQ29tcG9uZW50LnByb3RvdHlwZSAmJiBCYXNlQ29tcG9uZW50LnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50KSApIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICggQmFzZUNvbXBvbmVudCApIHtcbiAgICAgICAgICAgIHJldHVybiByZVNjb3BlU3RhdGUoQmFzZUNvbXBvbmVudCwgc2NvcGUsIHVzZSwgYWRkaXRpb25hbENvbnRleHQpXG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgdXNlICAgICAgICAgICAgICAgPSBbLi4uKEJhc2VDb21wb25lbnQudXNlIHx8IFtdKSwgLi4uKHVzZSB8fCBbXSldO1xuICAgIGFkZGl0aW9uYWxDb250ZXh0ID0gYWRkaXRpb25hbENvbnRleHQgJiYgT2JqZWN0LmtleXMoYWRkaXRpb25hbENvbnRleHQpLnJlZHVjZSgoIGgsIGsgKSA9PiAoaFtrXSA9IFByb3BUeXBlcy5hbnksIGgpLCB7fSkgfHwge307XG4gICAgXG4gICAgY2xhc3MgUmVTY29wZVByb3ZpZGVyIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gICAgICAgIHN0YXRpYyBjaGlsZENvbnRleHRUeXBlcyA9IHtcbiAgICAgICAgICAgIC4uLihCYXNlQ29tcG9uZW50LmNoaWxkQ29udGV4dFR5cGVzIHx8IHt9KSxcbiAgICAgICAgICAgIC4uLihhZGRpdGlvbmFsQ29udGV4dCksXG4gICAgICAgICAgICByZXNjb3BlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgICAgICAgICAgJHN0b3JlczogUHJvcFR5cGVzLm9iamVjdFxuICAgICAgICB9XG4gICAgICAgIHN0YXRpYyBjb250ZXh0VHlwZXMgICAgICA9IHtcbiAgICAgICAgICAgIC4uLihCYXNlQ29tcG9uZW50LmNvbnRleHRUeXBlcyB8fCB7fSksXG4gICAgICAgICAgICAuLi4oYWRkaXRpb25hbENvbnRleHQpLFxuICAgICAgICAgICAgcmVzY29wZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICAgICAgICAgICRzdG9yZXM6IFByb3BUeXBlcy5vYmplY3RcbiAgICAgICAgfVxuICAgICAgICBzdGF0aWMgZGVmYXVsdFByb3BzICAgICAgPSB7XG4gICAgICAgICAgICAuLi4oQmFzZUNvbXBvbmVudC5kZWZhdWx0UHJvcHMgfHwge30pLFxuICAgICAgICB9XG4gICAgICAgIHN0YXRpYyBkaXNwbGF5TmFtZSAgICAgICA9IFwic3RhdGVTY29wZWQoXCIgKyAoQmFzZUNvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBCYXNlQ29tcG9uZW50Lm5hbWUpICsgXCIpXCI7XG4gICAgICAgIFxuICAgICAgICBjb25zdHJ1Y3RvciggcCwgY3R4LCBxICkge1xuICAgICAgICAgICAgc3VwZXIocCwgY3R4LCBxKTtcbiAgICAgICAgICAgIHRoaXMuJHNjb3BlID1cbiAgICAgICAgICAgICAgICBwLl9fc2NvcGVcbiAgICAgICAgICAgICAgICB8fCBpcy5mbihzY29wZSkgJiYgc2NvcGUodGhpcywgcCwgY3R4KSB8fCBzY29wZVxuICAgICAgICAgICAgICAgIHx8IGN0eC5yZXNjb3BlO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoIHRoaXMuJHNjb3BlLmRlYWQgKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlJlU2NvcGluZyB1c2luZyBkZWFkIHNjb3BlXCIpXG4gICAgICAgICAgICAgICAgdGhpcy4kc2NvcGUgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLiRzY29wZSAmJiBpcy5mbihzY29wZSlcbiAgICAgICAgICAgICYmIHRoaXMuJHNjb3BlLnJldGFpbigpXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMuJHN0b3JlcyA9IHRoaXMuJHNjb3BlICYmIHRoaXMuJHNjb3BlLnN0b3JlcztcbiAgICAgICAgICAgIGlmICggdGhpcy4kc2NvcGUgJiYgdXNlLmxlbmd0aCApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgICAgICAgICAuLi50aGlzLnN0YXRlLFxuICAgICAgICAgICAgICAgICAgICAuLi50aGlzLiRzY29wZS5tYXAodGhpcywgdXNlLCBmYWxzZSkvLyBkb24ndCBiaW5kIG5vdyBkdWUgdG8gU1NSXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoICF0aGlzLiRzY29wZSApXG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXIgPSAoKSA9PiA8ZGl2Pk5vIFJlU2NvcGUgY29udGV4dCBpbiB7IEJhc2VDb21wb25lbnQubmFtZSB9PC9kaXY+XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICRkaXNwYXRjaCggLi4uYXJneiApIHtcbiAgICAgICAgICAgIHRoaXMuJHNjb3BlLmRpc3BhdGNoKC4uLmFyZ3opXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgICAgICAgIGlmICggdXNlLmxlbmd0aCApIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRzY29wZS5iaW5kKHRoaXMsIHVzZSwgZmFsc2UpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzdXBlci5jb21wb25lbnRXaWxsTW91bnQgJiYgc3VwZXIuY29tcG9uZW50V2lsbE1vdW50KClcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgICAgICBzdXBlci5jb21wb25lbnRXaWxsVW5tb3VudCAmJiBzdXBlci5jb21wb25lbnRXaWxsVW5tb3VudCgpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB1c2UubGVuZ3RoICYmIHRoaXMuJHNjb3BlLnVuQmluZCh0aGlzLCB1c2UpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpcy5mbihzY29wZSkgJiYgdGhpcy4kc2NvcGUuZGlzcG9zZSgpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBkZWxldGUgdGhpcy4kc3RvcmVzO1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuJHNjb3BlO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKCBucCwgbmMgKSB7XG4gICAgICAgICAgICBsZXQgblNjb3BlID0gbnAuX19zY29wZVxuICAgICAgICAgICAgICAgIHx8IHNjb3BlICYmIHRoaXMuJHNjb3BlXG4gICAgICAgICAgICAgICAgfHwgbmMucmVzY29wZVxuICAgICAgICAgICAgICAgIHx8IHRoaXMuJHNjb3BlO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoIG5TY29wZSAhPSB0aGlzLiRzY29wZSApIHtcbiAgICAgICAgICAgICAgICB1c2UubGVuZ3RoICYmIHRoaXMuJHNjb3BlLnVuQmluZCh0aGlzLCB1c2UpO1xuICAgICAgICAgICAgICAgIHRoaXMuJHNjb3BlID0gblNjb3BlO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmICggdGhpcy4kc2NvcGUuZGVhZCApIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlJlU2NvcGluZyB1c2luZyBkZWFkIHNjb3BlXCIpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHN0b3JlcyA9IHRoaXMuJHNjb3BlID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHN0b3JlcyA9IHRoaXMuJHNjb3BlLnN0b3JlcztcbiAgICAgICAgICAgICAgICAgICAgdXNlLmxlbmd0aCAmJiBuU2NvcGUuYmluZCh0aGlzLCB1c2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN1cGVyLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgJiYgc3VwZXIuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhucCwgbmMpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBnZXRDaGlsZENvbnRleHQoKSB7XG4gICAgICAgICAgICBsZXQgY3R4ID0gc3VwZXIuZ2V0Q2hpbGRDb250ZXh0ICYmIHN1cGVyLmdldENoaWxkQ29udGV4dCgpIHx8IHt9O1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5jdHgsXG4gICAgICAgICAgICAgICAgcmVzY29wZTogdGhpcy4kc2NvcGUgfHwgdGhpcy5jb250ZXh0LnJlc2NvcGUsXG4gICAgICAgICAgICAgICAgJHN0b3JlczogdGhpcy4kc2NvcGUuc3RvcmVzIHx8IHRoaXMuY29udGV4dC4kc3RvcmVzXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIHJldHVybiBSZVNjb3BlUHJvdmlkZXI7XG59XG5cbi8qKlxuICogUmV0dXJuIGEgUmVhY3QgXCJIT0NcIiAoSGlnaCBPcmRlciBDb21wb25lbnQpIHRoYXQgOlxuICogIC0gSW5qZWN0ICYgbWFpbnRhaW4gdGhlIHN0b3JlcyBsaXN0ZWQgYmFzZUNvbXBvbmVudDo6dXNlIGFuZC9vciAodXNlKSBpbiB0aGUgaW5zdGFuY2VzIHByb3BzLlxuICogIC0gUHJvcGFnIChzY29wZSkgaW4gdGhlIHJldHVybmVkIFJlYWN0IENvbXBvbmVudCBjb250ZXh0XG4gKlxuICogQHBhcmFtIEJhc2VDb21wb25lbnQge1JlYWN0LkNvbXBvbmVudH0gQmFzZSBSZWFjdCBDb21wb25lbnQgKCBkZWZhdWx0IDogUmVhY3QuQ29tcG9uZW50IClcbiAqIEBwYXJhbSBzY29wZSB7UmVTY29wZS5TY29wZXxmdW5jdGlvbn0gdGhlIHByb3BhZ2F0ZWQgU2NvcGUgd2hlcmUgdGhlIHN0b3JlcyB3aWxsIGJlIHNlYXJjaGVkICggZGVmYXVsdCA6IHRoZSBkZWZhdWx0XG4gKiAgICAgUmVTY29wZTo6U2NvcGU6OnNjb3Blcy5zdGF0aWMgc2NvcGUgKVxuICogQHBhcmFtIHVzZSB7YXJyYXl9IHRoZSBsaXN0IG9mIHN0b3JlcyB0byBpbmplY3QgZnJvbSB0aGUgY3VycmVudCBzY29wZVxuICogQHBhcmFtIGFkZGl0aW9uYWxDb250ZXh0IHtPYmplY3R9IGNvbnRleHQgdG8gYmUgcHJvcGFnYXRlZFxuICogQHJldHVybnMge1JlU2NvcGVQcm92aWRlcn1cbiAqL1xuZnVuY3Rpb24gcmVTY29wZVByb3BzKCAuLi5hcmd6ICkge1xuICAgIGxldCBCYXNlQ29tcG9uZW50ICAgICA9ICghYXJnelswXSB8fCBhcmd6WzBdLnByb3RvdHlwZSAmJiBhcmd6WzBdLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50KSAmJiBhcmd6LnNoaWZ0KCksXG4gICAgICAgIHNjb3BlICAgICAgICAgICAgID0gKCFhcmd6WzBdIHx8IGFyZ3pbMF0gaW5zdGFuY2VvZiBTY29wZSB8fCBpcy5mbihhcmd6WzBdKSkgJiYgYXJnei5zaGlmdCgpLFxuICAgICAgICB1c2UgICAgICAgICAgICAgICA9ICghYXJnelswXSB8fCBpcy5hcnJheShhcmd6WzBdKSkgJiYgYXJnei5zaGlmdCgpLFxuICAgICAgICBhZGRpdGlvbmFsQ29udGV4dCA9ICghYXJnelswXSB8fCBhcmd6WzBdIGluc3RhbmNlb2YgU2ltcGxlT2JqZWN0UHJvdG8pICYmIGFyZ3ouc2hpZnQoKTtcbiAgICBcbiAgICBpZiAoICEoQmFzZUNvbXBvbmVudCAmJiBCYXNlQ29tcG9uZW50LnByb3RvdHlwZSAmJiBCYXNlQ29tcG9uZW50LnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50KSApIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICggQmFzZUNvbXBvbmVudCApIHtcbiAgICAgICAgICAgIHJldHVybiByZVNjb3BlUHJvcHMoQmFzZUNvbXBvbmVudCwgc2NvcGUsIHVzZSwgYWRkaXRpb25hbENvbnRleHQpXG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgdXNlICAgICAgICAgICAgICAgPSBbLi4uKEJhc2VDb21wb25lbnQudXNlIHx8IFtdKSwgLi4uKHVzZSB8fCBbXSldO1xuICAgIGFkZGl0aW9uYWxDb250ZXh0ID0gYWRkaXRpb25hbENvbnRleHQgJiYgT2JqZWN0LmtleXMoYWRkaXRpb25hbENvbnRleHQpLnJlZHVjZSgoIGgsIGsgKSA9PiAoaFtrXSA9IFByb3BUeXBlcy5hbnksIGgpLCB7fSkgfHwge307XG4gICAgXG4gICAgcmV0dXJuIHJlU2NvcGVTdGF0ZShjbGFzcyBSZVNjb3BlUHJvcHNQcm92aWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgICAgIHN0YXRpYyBjaGlsZENvbnRleHRUeXBlcyA9IHtcbiAgICAgICAgICAgIC4uLihCYXNlQ29tcG9uZW50LmNvbnRleHRUeXBlcyB8fCB7fSksXG4gICAgICAgICAgICAuLi4oYWRkaXRpb25hbENvbnRleHQpLFxuICAgICAgICAgICAgcmVzY29wZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICAgICAgICAgICRzdG9yZXM6IFByb3BUeXBlcy5vYmplY3RcbiAgICAgICAgfTtcbiAgICAgICAgc3RhdGljIGNvbnRleHRUeXBlcyAgICAgID0ge1xuICAgICAgICAgICAgLi4uKEJhc2VDb21wb25lbnQuY29udGV4dFR5cGVzIHx8IHt9KSxcbiAgICAgICAgICAgIC4uLihhZGRpdGlvbmFsQ29udGV4dCksXG4gICAgICAgICAgICByZXNjb3BlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgICAgICAgICAgJHN0b3JlczogUHJvcFR5cGVzLm9iamVjdFxuICAgICAgICB9O1xuICAgICAgICBzdGF0aWMgZGlzcGxheU5hbWUgICAgICAgPSBcInByb3BzU2NvcGVkKFwiICsgKEJhc2VDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQmFzZUNvbXBvbmVudC5uYW1lKSArIFwiKVwiO1xuICAgICAgICBcbiAgICAgICAgZ2V0Q2hpbGRDb250ZXh0KCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29udGV4dDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmVuZGVyKCkge1xuICAgICAgICAgICAgcmV0dXJuIDxCYXNlQ29tcG9uZW50IHsgLi4udGhpcy5wcm9wcyB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyAuLi50aGlzLnN0YXRlIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZGlzcGF0Y2g9eyAoIC4uLmFyZ3ogKSA9PiB0aGlzLiRkaXNwYXRjaCguLi5hcmd6KSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHN0b3Jlcz17IHRoaXMuJHN0b3JlcyB9Lz5cbiAgICAgICAgfVxuICAgIH0sIHNjb3BlLCB1c2UpO1xufVxuXG5leHBvcnQge1xuICAgIENvbXBvbmVudCBhcyBkZWZhdWx0LFxuICAgIENvbXBvbmVudCxcbiAgICByZVNjb3BlUHJvcHMsXG4gICAgcmVTY29wZVByb3BzIGFzIHJlc2NvcGVQcm9wcyxcbiAgICByZVNjb3BlU3RhdGUsXG4gICAgcmVTY29wZVN0YXRlIGFzIHJlc2NvcGVTdGF0ZVxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvUmVhY3RUb29scy5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVhY3RcIlxuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicHJvcC10eXBlc1wiXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=