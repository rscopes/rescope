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
	
	var _ReactHocs = __webpack_require__(7);
	
	var RTools = _interopRequireWildcard(_ReactHocs);
	
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
	  reScope: RTools.reScopeState
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
	    fn.prototype = parent ? new parent._[id]() : target[id] || {};
	    target[id] = new fn();
	    target._[id] = fn;
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
	
	        var _ = {};
	
	        _.maxListeners = defaultMaxListeners || _this.constructor.defaultMaxListeners;
	
	        id = id || key && (parent && parent._id || '') + '::' + key;
	
	        _.isLocalId = !id;
	
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
	        _.persistenceTm = persistenceTm || _this.constructor.persistenceTm;
	
	        _this.stores = {};
	        _this.state = {};
	        _this.data = {};
	
	        _this.parent = parent;
	        _this._ = _;
	        if (parent && parent.dead) throw new Error("Can't use a dead scope as parent !");
	
	        __proto__push(_this, 'stores', parent);
	        __proto__push(_this, 'state', parent);
	        __proto__push(_this, 'data', parent);
	
	        _this.sources = [];
	        _.childScopes = [];
	        _.childScopesList = [];
	        _.unStableChilds = 0;
	
	        _this.__retains = { all: 0 };
	        _this.__locks = { all: 1 };
	        _._listening = {};
	        _._scope = {};
	        _._mixed = [];
	        _._mixedList = [];
	        _.followers = [];
	        if (parent) {
	            parent.retain("isMyParent");
	            if (!rootEmitter) {
	                !parent._stable && _this.wait("waitingParent");
	                parent.on(_._parentList = {
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
	                parent.on(_._parentList = {
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
	
	            if (!this._._scope[id]) {
	                var _parent;
	
	                //ask mixed || parent
	                if (this._._mixed.reduce(function (mounted, ctx) {
	                    return mounted || ctx._mount(id, snapshot, state, data);
	                }, false) || !this.parent) return;
	                return (_parent = this.parent)._mount.apply(_parent, arguments);
	            } else {
	                var store = this._._scope[id],
	                    ctx = void 0;
	                if (is.fn(store)) {
	                    this._._scope[id] = new store(this, { snapshot: snapshot, name: id, state: state, data: data });
	                } else if (snapshot) store.restore(snapshot);else {
	                    if (state !== undefined && data === undefined) store.setState(state);else if (state !== undefined) store.state = state;
	
	                    if (data !== undefined) store.push(data);
	                }
	                this._watchStore(id);
	            }
	
	            return this._._scope[id];
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
	            if (!this._._listening[id] && !is.fn(this._._scope[id])) {
	                !this._._scope[id]._autoDestroy && this._._scope[id].retain("scoped");
	                !this._._scope[id].isStable() && this.wait(id);
	                this._._scope[id].on(this._._listening[id] = {
	                    'destroy': function destroy(s) {
	                        delete _this3._._listening[id];
	                        _this3._._scope[id] = _this3._._scope[id].constructor;
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
	            this._._mixed.push(targetCtx);
	            targetCtx.retain("mixedTo");
	            if (!targetCtx._stable) this.wait(targetCtx._id);
	
	            this._._mixedList.push(lists = {
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
	
	            this.relink(this._._scope, this, false, true);
	            this._._mixed.forEach(function (ctx) {
	                __proto__push(_this4, 'stores');
	                __proto__push(_this4, 'state');
	                __proto__push(_this4, 'data');
	                ctx.relink(ctx._._scope, _this4, true, true);
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
	
	            var lctx = targetCtx._.stores.prototype;
	            Object.keys(srcCtx).forEach(function (id) {
	                if (!force && targetCtx._._scope[id] === srcCtx[id] || targetCtx._._scope[id] && targetCtx._._scope[id].constructor === srcCtx[id]) return;
	
	                if (!force && targetCtx._._scope[id]) {
	                    if (!external && !is.fn(targetCtx._._scope[id])) {
	                        console.info("Rescope Store : ", id, " already exist in this scope ! ( try __proto__ hot patch )");
	                        targetCtx._._scope[id].__proto__ = srcCtx[id].prototype;
	                    }
	                    if (!external && is.fn(targetCtx._._scope[id])) targetCtx._._scope[id] = srcCtx[id];
	
	                    return;
	                } else if (!force && !external) _this6._._scope[id] = srcCtx[id];
	
	                Object.defineProperty(lctx, id, {
	                    get: function get() {
	                        return _this6._._scope[id];
	                    }
	                });
	                Object.defineProperty(targetCtx._.state.prototype, id, {
	                    get: function get() {
	                        return _this6._._scope[id] && _this6._._scope[id].state;
	                    },
	                    set: function set(v) {
	                        return _this6._mount(id, null, v);
	                    }
	                });
	                Object.defineProperty(targetCtx._.data.prototype, id, {
	                    get: function get() {
	                        return _this6._._scope[id] && _this6._._scope[id].data;
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
	
	            this._.followers.push([obj, key, as || undefined, lastRevs = refKeys.reduce(function (revs, ref) {
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
	            var followers = this._.followers,
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
	
	            var ctx = this._._scope;
	            if (!storesRevMap) {
	                storesRevMap = {};
	            }
	            Object.keys(ctx).forEach(function (id) {
	                if (!is.fn(ctx[id])) {
	                    storesRevMap[id] = ctx[id]._rev;
	                } else if (!storesRevMap.hasOwnProperty(id)) storesRevMap[id] = false;
	            });
	            if (!local) {
	                this._._mixed.reduce(function (updated, ctx) {
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
	
	            var ctx = this._._scope;
	
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
	            updated = this._._mixed.reduce(function (updated, ctx) {
	                return ctx.getUpdates(storesRevMap, output, updated) || updated;
	            }, updated);
	            updated = this.parent && this.parent.getUpdates(storesRevMap, output, updated) || updated;
	            return updated && output;
	        }
	    }, {
	        key: '_getAllChilds',
	        value: function _getAllChilds() {
	            var childs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	
	            childs.push.apply(childs, _toConsumableArray(this._.childScopes));
	            this._.childScopes.forEach(function (ctx) {
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
	
	            var ctx = this._._scope;
	            output[this._id] = {};
	
	            Object.keys(ctx).forEach(function (id) {
	                if (is.fn(ctx[id])) return;
	
	                ctx[id].serialize(output);
	            });
	
	            this._.childScopes.forEach(function (ctx) {
	                !ctx._.isLocalId && ctx.serialize(output);
	            });
	
	            this._._mixed.forEach(function (ctx) {
	                !ctx._.isLocalId && ctx.serialize(output);
	            });
	
	            return output;
	        }
	    }, {
	        key: 'restore',
	        value: function restore(snapshot, force) {
	            var _this10 = this;
	
	            var ctx = this._._scope;
	
	            snapshot[this._id] && Object.keys(ctx).forEach(function (name) {
	                var snap = snapshot[_this10._id + '/' + name];
	
	                if (snap) {
	
	                    if (force && !is.fn(ctx[name])) ctx[name].destroy();
	
	                    _this10.mount(name, snapshot); // quiet
	                }
	            });
	
	            this._._mixed.forEach(function (ctx) {
	                !ctx._.isLocalId && ctx.restore(snapshot, force);
	            });
	
	            this._.childScopes.forEach(function (ctx) {
	                !ctx._.isLocalId && ctx.restore(snapshot, force);
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
	
	            this._._mixed.forEach(function (ctx) {
	                return ctx.dispatch(action, data);
	            });
	            this.parent && this.parent.dispatch(action, data);
	            Object.keys(this._._scope).forEach(function (id) {
	                if (!is.fn(_this11._._scope[id])) _this11._._scope[id].trigger(action, data);
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
	                this._.stabilizerTM && clearTimeout(this._.stabilizerTM);
	
	                this._.stabilizerTM = setTimeout(function (e) {
	                    _this15._.stabilizerTM = null;
	                    if (_this15.__locks.all) return;
	
	                    _this15._.propagTM && clearTimeout(_this15._.propagTM);
	
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
	
	            this._.propagTM && clearTimeout(this._.propagTM);
	            this._.propagTM = setTimeout(function (e) {
	                _this16._.propagTM = null;
	                _this16._propag();
	            }, 2);
	        }
	    }, {
	        key: '_propag',
	        value: function _propag() {
	            var _this17 = this;
	
	            if (this._.followers.length) this._.followers.forEach(function (_ref3) {
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
	
	            this._.childScopes.push(ctx);
	            var lists = {
	                'stable': function stable(s) {
	                    _this18._.unStableChilds--;
	                    if (!_this18._.unStableChilds) _this18.emit("stableTree", _this18);
	                },
	                'unstable': function unstable(s) {
	                    _this18._.unStableChilds++;
	                    if (1 == _this18._.unStableChilds) _this18.emit("unstableTree", _this18);
	                },
	                'stableTree': function stableTree(s) {
	                    _this18._.unStableChilds--;
	                    if (!_this18._.unStableChilds) _this18.emit("stableTree", _this18);
	                },
	                'unstableTree': function unstableTree(s) {
	                    _this18._.unStableChilds++;
	                    if (1 == _this18._.unStableChilds) _this18.emit("unstableTree", _this18);
	                },
	                'destroy': function destroy(ctx) {
	                    if (ctx._.unStableChilds) _this18._.unStableChilds--;
	                    if (!ctx.isStable()) _this18._.unStableChilds--;
	
	                    if (!_this18._.unStableChilds) _this18.emit("stableTree", _this18);
	                }
	            },
	                wasStable = this._.unStableChilds;
	            //!ctx.isStable() && console.warn('add unstable child');
	            !ctx.isStable() && this._.unStableChilds++;
	            ctx._.unStableChilds && this._.unStableChilds++;
	            this._.childScopesList.push(lists);
	            if (!wasStable && this._.unStableChilds) this.emit("unstableTree", this);
	            ctx.on(lists);
	        }
	    }, {
	        key: '_rmChild',
	        value: function _rmChild(ctx) {
	            var i = this._.childScopes.indexOf(ctx),
	                wasStable = this._.unStableChilds;
	            if (i != -1) {
	                this._.childScopes.splice(i, 1);
	                !ctx.isStable() && this._.unStableChilds--;
	                ctx._.unStableChilds && this._.unStableChilds--;
	                ctx.un(this._.childScopesList.splice(i, 1)[0]);
	                if (wasStable && !this._.unStableChilds) this.emit("stableTree");
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
	                if (this._.persistenceTm) {
	                    this._.destroyTM && clearTimeout(this._.destroyTM);
	                    this._.destroyTM = setTimeout(function (e) {
	                        _this19.then(function (s) {
	                            !_this19.__retains.all && _this19.destroy();
	                        });
	                    }, this._.persistenceTm);
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
	
	            var ctx = this._._scope;
	            //console.warn("destroy", this._id);
	            this.dead = true;
	            this.emit("destroy", this);
	            Object.keys(this._._listening).forEach(function (id) {
	                return _this20._._scope[id].removeListener(_this20._._listening[id]);
	            });
	
	            this._.stabilizerTM && clearTimeout(this._.stabilizerTM);
	            this._.propagTM && clearTimeout(this._.propagTM);
	
	            if (!this._.isLocalId) delete openScopes[this._id];
	            this._.followers.length = 0;
	
	            while (this._._mixedList.length) {
	                this._._mixed[0].removeListener(this._._mixedList.shift());
	                this._._mixed.shift().dispose("mixedTo");
	            }
	            if (this._._parentList) {
	                this.parent._rmChild(this);
	                this.parent.removeListener(this._._parentList);
	                this.parent.dispose("isMyParent");
	                this._._parentList = null;
	            }
	            for (var key in ctx) {
	                if (!is.fn(ctx[key])) {
	                    !ctx[key]._autoDestroy && ctx[key].dispose("scoped");
	                }
	            }this._ = null;
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
	                    console.error("Not a mappable store item '" + name + "/" + alias + "' in " + (component.name || component) + ' !!', store);
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
	
	                if (!_this7.scopeObj.stores[name].scopeObj._.isLocalId) map[alias] = _this7.scopeObj.stores[name].scopeObj._id + '/' + name;
	
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
	         * Add a lock so the store will not propag it data untill release() is call
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
	         * Decrease locks for this store, if it reach 0 ,
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
	
	        isRunning = false;
	        task = null;
	        runNow();
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
	
	    isRunning = false;
	    if (taskCount) {
	        setTimeout(runNow);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNzA2NmFhYWRmMzY1ZTMyNTA4MjciLCJ3ZWJwYWNrOi8vLy4vc3JjL1JlU2NvcGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Njb3BlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImlzXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL0VtaXR0ZXIuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic2hvcnRpZFwiIiwid2VicGFjazovLy8uL3NyYy9TdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvVGFza1NlcXVlbmNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvUmVhY3RIb2NzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIl0sIm5hbWVzIjpbIlJUb29scyIsIlN0b3JlIiwiQ29udGV4dCIsIlNjb3BlIiwiQ29tcG9uZW50IiwicmVTY29wZVByb3BzIiwicmVTY29wZVN0YXRlIiwicmVTY29wZSIsImlzIiwicmVxdWlyZSIsIkV2ZW50RW1pdHRlciIsInNob3J0aWQiLCJfX3Byb3RvX19wdXNoIiwidGFyZ2V0IiwiaWQiLCJwYXJlbnQiLCJmbiIsInByb3RvdHlwZSIsIl8iLCJvcGVuU2NvcGVzIiwic2NvcGVzIiwic2tleSIsImFycmF5Iiwic29ydCIsImEiLCJiIiwiZmlyc3RuYW1lIiwiam9pbiIsInN0b3Jlc01hcCIsImtleSIsInN0YXRlIiwiZGF0YSIsIm5hbWUiLCJpbmNyZW1lbnRJZCIsImRlZmF1bHRNYXhMaXN0ZW5lcnMiLCJwZXJzaXN0ZW5jZVRtIiwiYXV0b0Rlc3Ryb3kiLCJyb290RW1pdHRlciIsIm1heExpc3RlbmVycyIsImNvbnN0cnVjdG9yIiwiX2lkIiwiaXNMb2NhbElkIiwiZ2VuZXJhdGUiLCJyZWdpc3RlciIsImkiLCJzdG9yZXMiLCJkZWFkIiwiRXJyb3IiLCJzb3VyY2VzIiwiY2hpbGRTY29wZXMiLCJjaGlsZFNjb3Blc0xpc3QiLCJ1blN0YWJsZUNoaWxkcyIsIl9fcmV0YWlucyIsImFsbCIsIl9fbG9ja3MiLCJfbGlzdGVuaW5nIiwiX3Njb3BlIiwiX21peGVkIiwiX21peGVkTGlzdCIsImZvbGxvd2VycyIsInJldGFpbiIsIl9zdGFibGUiLCJ3YWl0Iiwib24iLCJfcGFyZW50TGlzdCIsInJlbGVhc2UiLCJfcHJvcGFnIiwiX2FkZENoaWxkIiwic2V0VGltZW91dCIsImRpc3Bvc2UiLCJzdG9yZXNMaXN0Iiwic25hcHNob3QiLCJmb3JFYWNoIiwiX21vdW50IiwiayIsImFyZ3VtZW50cyIsInN0b3JlIiwicmVkdWNlIiwibW91bnRlZCIsImN0eCIsInJlc3RvcmUiLCJ1bmRlZmluZWQiLCJzZXRTdGF0ZSIsInB1c2giLCJfd2F0Y2hTdG9yZSIsIl9hdXRvRGVzdHJveSIsImlzU3RhYmxlIiwicHJvcGFnIiwidGFyZ2V0Q3R4IiwibGlzdHMiLCJyZWxpbmsiLCJPYmplY3QiLCJrZXlzIiwic2luZ2xldG9uIiwic3JjQ3R4IiwiZXh0ZXJuYWwiLCJmb3JjZSIsImxjdHgiLCJjb25zb2xlIiwiaW5mbyIsIl9fcHJvdG9fXyIsImRlZmluZVByb3BlcnR5IiwiZ2V0Iiwic2V0IiwidiIsIm9iaiIsImFzIiwic2V0SW5pdGlhbCIsImxhc3RSZXZzIiwicmVmS2V5cyIsIm1hcCIsInN0cmluZyIsInBhcnNlUmVmIiwicmV2cyIsInJlZiIsInN0b3JlSWQiLCJyZXYiLCJyZWZzIiwibW91bnQiLCJnZXRVcGRhdGVzIiwibGVuZ3RoIiwic3BsaWNlIiwidG8iLCJiaW5kIiwibWl4ZWRDV1VubW91bnQiLCJ1bk1vdW50S2V5IiwiaXNSZWFjdENvbXBvbmVudCIsImhhc093blByb3BlcnR5IiwidW5CaW5kIiwic3BsaXQiLCJyZXRyaWV2ZSIsInBhdGgiLCJzbGljZSIsInN0b3Jlc1Jldk1hcCIsImxvY2FsIiwiX3JldiIsInVwZGF0ZWQiLCJnZXRTdG9yZXNSZXZzIiwib3V0cHV0IiwiYWxpYXMiLCJjaGlsZHMiLCJfZ2V0QWxsQ2hpbGRzIiwic2VyaWFsaXplIiwic25hcCIsImRlc3Ryb3kiLCJfcmVmIiwiYWN0aW9uIiwiZGlzcGF0Y2giLCJ0cmlnZ2VyIiwiY2IiLCJvbmNlIiwicmVhc29uIiwiZW1pdCIsImVycm9yIiwic3RhYmlsaXplclRNIiwiY2xlYXJUaW1lb3V0IiwicHJvcGFnVE0iLCJyZW1hcHMiLCJ3YXNTdGFibGUiLCJpbmRleE9mIiwidW4iLCJkZXN0cm95VE0iLCJ0aGVuIiwicmVtb3ZlTGlzdGVuZXIiLCJzaGlmdCIsIl9ybUNoaWxkIiwiRW1pdHRlciIsIl9ldmVudHMiLCJldnQiLCJhcmd6IiwiVGFza1NlcXVlbmNlciIsIm9ialByb3RvIiwiZ2V0UHJvdG90eXBlT2YiLCJjb21wb25lbnQiLCJzY29wZSIsIm9yaWdpbiIsInRhcmdldFJldnMiLCJfcmV2cyIsInRhcmdldFNjb3BlIiwiaW5pdGlhbE91dHB1dHMiLCJzdGF0aWNTY29wZSIsImZpbHRlciIsImRlZmF1bHROYW1lIiwibWF0Y2giLCJzdWJzdHIiLCJfc291cmNlcyIsIl9zdGF0aWMiLCJnZXRTY29wZSIsImNmZyIsIndhdGNocyIsInVzZSIsImFwcGx5IiwiaW5pdGlhbFN0YXRlIiwiYXBwbGllZCIsIl91aWQiLCJfb25TdGFiaWxpemUiLCJfcGVyc2lzdGVuY2VUbSIsInNjb3BlT2JqIiwiX3JlcXVpcmUiLCJfdXNlIiwicmVmMiIsIl9mb2xsb3dlcnMiLCJzaG91bGRBcHBseSIsIm1hbmFnZWQiLCJ3YXJuIiwibkRhdGFzIiwiciIsImNEYXRhcyIsImlzQ29tcGxldGUiLCJmb2xsb3ciLCJjYWxsIiwiY2hhbmdlcyIsInJlZmluZSIsIl9zdGFiaWxpemVyIiwicHVzaFRhc2siLCJhY3Rpb25zIiwibnMiLCJkb1dhaXQiLCJzIiwibmV4dFN0YXRlIiwiX2NoYW5nZXNTVyIsIm5leHREYXRhcyIsImhhc0RhdGFDaGFuZ2UiLCJzdGFibGUiLCJwU3RhdGUiLCJzeW5jIiwiY2hhbmdlIiwic3RhYmlsaXplIiwibWUiLCJmcm9tIiwicHVsbCIsIl9fc2NvcGUiLCJjb21wbGV0ZVN0YXRlIiwiaCIsInByZXZpb3VzIiwic2hvdWxkUHJvcGFnIiwiZm9sbG93ZXIiLCJfZGVzdHJveVRNIiwicmVtb3ZlQWxsTGlzdGVuZXJzIiwiU2VlZCIsIlNFRUQiLCJ0YXNrUXVldWUiLCJjdXJXZWlnaHQiLCJtYXhXZWlnaHQiLCJtaW5XZWlnaHQiLCJ0YXNrQ291bnQiLCJ0YXNrIiwiaXNSdW5uaW5nIiwiZXJyb3JDYXRjaGVyIiwibGFzdEVycm9yIiwiZGlzYWJsZSIsImhhbmRsZUVycm9yIiwicnVuTm93IiwiZW5hYmxlIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInByb2Nlc3MiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicnVuIiwid2VpZ2h0Iiwic3RhY2siLCJNYXRoIiwibWF4IiwibWluIiwiU2ltcGxlT2JqZWN0UHJvdG8iLCJwIiwicSIsInJlc2NvcGUiLCIkc2NvcGUiLCIkc3RvcmVzIiwicmVuZGVyIiwibnAiLCJuYyIsIm5TY29wZSIsImNvbnRleHQiLCJwcm9wcyIsImNoaWxkcmVuIiwiY2hpbGRDb250ZXh0VHlwZXMiLCJvYmplY3QiLCJjb250ZXh0VHlwZXMiLCJCYXNlQ29tcG9uZW50IiwiYWRkaXRpb25hbENvbnRleHQiLCJhbnkiLCJSZVNjb3BlUHJvdmlkZXIiLCJkZWZhdWx0UHJvcHMiLCJkaXNwbGF5TmFtZSIsIiRkaXNwYXRjaCIsImRlZmF1bHQiLCJyZXNjb3BlUHJvcHMiLCJyZXNjb3BlU3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDWEE7Ozs7QUFDQTs7OztB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QU16USxTQUF0RCxXQUNJaVIsaUJBREosZ0JBRUtHLGNBQWNELFlBQWQsSUFBOEIsRUFGbkMsRUFHS0UsaUJBSEw7QUFJQ2Qsa0JBQVMsb0JBQVVXLE1BSnBCO0FBS0NULGtCQUFTLG9CQUFVUztBQUxwQixpQkFPSUMsWUFQSixnQkFRS0MsY0FBY0QsWUFBZCxJQUE4QixFQVJuQyxFQVNLRSxpQkFUTDtBQVVDZCxrQkFBUyxvQkFBVVcsTUFWcEI7QUFXQ1Qsa0JBQVMsb0JBQVVTO0FBWHBCLGlCQWFJTyxXQWJKLEdBYXdCLGtCQUFrQkwsY0FBY0ssV0FBZCxJQUE2QkwsY0FBY3hQLElBQTdELElBQXFFLEdBYjdGLFdBeUJKOEksS0F6QkksRUF5QkdnQixHQXpCSCxDQUFQO0FBMEJIOztTQUdnQmlHLE8sR0FBYjNSLFM7U0FDQUEsUyxHQUFBQSxTO1NBQ0FDLFksR0FBQUEsWTtTQUNnQjJSLFksR0FBaEIzUixZO1NBQ0FDLFksR0FBQUEsWTtTQUNnQjJSLFksR0FBaEIzUixZOzs7Ozs7QUN0VEosbUM7Ozs7OztBQ0FBLHdDIiwiZmlsZSI6ImRpc3QvUmVTY29wZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA3MDY2YWFhZGYzNjVlMzI1MDgyNyIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpICAyMDE4IFdpc2UgV2lsZCBXZWIgLlxuICpcbiAqICBNSVQgTGljZW5zZVxuICpcbiAqICBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiAgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqICB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiAgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiAgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiAgVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG4gKiAgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqICBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG4gKiAgU09GVFdBUkUuXG4gKlxuICogQGF1dGhvciA6IE5hdGhhbmFlbCBCcmF1blxuICogQGNvbnRhY3QgOiBjYWlwaWxhYnNAZ21haWwuY29tXG4gKi9cblxuaW1wb3J0IFNjb3BlIGZyb20gXCIuL1Njb3BlXCI7XG5pbXBvcnQgU3RvcmUgZnJvbSBcIi4vU3RvcmVcIjtcbmltcG9ydCBSZWFjdFRvb2xzLCAqIGFzIFJUb29scyBmcm9tIFwiLi9SZWFjdEhvY3NcIjtcblxuU2NvcGUuU3RvcmUgPSBTdG9yZTtcbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBTdG9yZSxcbiAgICBDb250ZXh0ICAgICA6IFNjb3BlLFxuICAgIFNjb3BlLFxuICAgIENvbXBvbmVudCAgIDogUlRvb2xzLkNvbXBvbmVudCxcbiAgICByZVNjb3BlUHJvcHM6IFJUb29scy5yZVNjb3BlUHJvcHMsXG4gICAgcmVTY29wZVN0YXRlOiBSVG9vbHMucmVTY29wZVN0YXRlLFxuICAgIHJlU2NvcGUgICAgIDogUlRvb2xzLnJlU2NvcGVTdGF0ZVxufTtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1JlU2NvcGUuanMiLCIvKlxuICogQ29weXJpZ2h0IChjKSAgMjAxOCBXaXNlIFdpbGQgV2ViIC5cbiAqXG4gKiAgTUlUIExpY2Vuc2VcbiAqXG4gKiAgUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqICBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiAgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuICogIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqICBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqICBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqICBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiAgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqICBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuICogIFNPRlRXQVJFLlxuICpcbiAqIEBhdXRob3IgOiBOYXRoYW5hZWwgQnJhdW5cbiAqIEBjb250YWN0IDogY2FpcGlsYWJzQGdtYWlsLmNvbVxuICovXG5cblxudmFyIGlzICAgICAgICAgICAgICA9IHJlcXVpcmUoJ2lzJyksXG4gICAgRXZlbnRFbWl0dGVyICAgID0gcmVxdWlyZSgnLi9FbWl0dGVyJyksXG4gICAgc2hvcnRpZCAgICAgICAgID0gcmVxdWlyZSgnc2hvcnRpZCcpXG4gICAgLCBfX3Byb3RvX19wdXNoID0gKCB0YXJnZXQsIGlkLCBwYXJlbnQgKSA9PiB7XG4gICAgICAgIGxldCBmbiAgICAgICA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgfTtcbiAgICAgICAgZm4ucHJvdG90eXBlID0gcGFyZW50ID8gbmV3IHBhcmVudC5fW2lkXSgpIDogdGFyZ2V0W2lkXSB8fCB7fTtcbiAgICAgICAgdGFyZ2V0W2lkXSAgID0gbmV3IGZuKCk7XG4gICAgICAgIHRhcmdldC5fW2lkXSA9IGZuO1xuICAgIH0sXG4gICAgb3BlblNjb3BlcyAgICAgID0ge31cbjtcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY29wZSBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gICAgc3RhdGljIHBlcnNpc3RlbmNlVG0gPSAxOy8vIGlmID4gMCwgd2lsbCB3YWl0ICdwZXJzaXN0ZW5jZVRtJyBtcyBiZWZvcmUgZGVzdHJveSB3aGVuIGRpc3Bvc2UgcmVhY2ggMFxuICAgIHN0YXRpYyBTdG9yZSAgICAgICAgID0gbnVsbDtcbiAgICBzdGF0aWMgc2NvcGVzICAgICAgICA9IG9wZW5TY29wZXM7Ly8gYWxsIGFjdGl2ZSBzY29wZXNcbiAgICBcbiAgICBzdGF0aWMgZ2V0U2NvcGUoIHNjb3BlcyApIHtcbiAgICAgICAgbGV0IHNrZXkgPSBpcy5hcnJheShzY29wZXMpID8gc2NvcGVzLnNvcnQoKCBhLCBiICkgPT4ge1xuICAgICAgICAgICAgaWYgKCBhLmZpcnN0bmFtZSA8IGIuZmlyc3RuYW1lICkgcmV0dXJuIC0xO1xuICAgICAgICAgICAgaWYgKCBhLmZpcnN0bmFtZSA+IGIuZmlyc3RuYW1lICkgcmV0dXJuIDE7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfSkuam9pbignOjonKSA6IHNjb3BlcztcbiAgICAgICAgcmV0dXJuIG9wZW5TY29wZXNbc2tleV0gPSBvcGVuU2NvcGVzW3NrZXldIHx8IG5ldyBTY29wZSh7fSwgeyBpZDogc2tleSB9KTtcbiAgICB9O1xuICAgIFxuICAgIC8qKlxuICAgICAqIEluaXQgYSBSZXNjb3BlIHNjb3BlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc3RvcmVzTWFwIHtPYmplY3R9IE9iamVjdCB3aXRoIHRoZSBvcmlnaW4gc3RvcmVzXG4gICAgICogQHBhcmFtIGlkIHtzdHJpbmd9IEBvcHRpb25hbCBpZCAoIGlmIHRoaXMgaWQgZXhpc3Qgc3RvcmVzTWFwIHdpbGwgYmUgbWVyZ2Ugb24gdGhlICdpZCcgc2NvcGUpXG4gICAgICogQHBhcmFtIHBhcmVudFxuICAgICAqIEBwYXJhbSBzdGF0ZVxuICAgICAqIEBwYXJhbSBkYXRhXG4gICAgICogQHBhcmFtIG5hbWVcbiAgICAgKiBAcGFyYW0gZGVmYXVsdE1heExpc3RlbmVyc1xuICAgICAqIEBwYXJhbSBwZXJzaXN0ZW5jZVRtIHtudW1iZXIpIGlmID4gMCwgd2lsbCB3YWl0ICdwZXJzaXN0ZW5jZVRtJyBtcyBiZWZvcmUgZGVzdHJveSB3aGVuIGRpc3Bvc2UgcmVhY2ggMFxuICAgICAqIEBwYXJhbSBhdXRvRGVzdHJveSAge2Jvb2x9IHdpbGwgdHJpZ2dlciByZXRhaW4gJiBkaXNwb3NlIGFmdGVyIHN0YXJ0XG4gICAgICogQHJldHVybnMge1Njb3BlfVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKCBzdG9yZXNNYXAsIHsgcGFyZW50LCBrZXksIGlkLCBzdGF0ZSwgZGF0YSwgbmFtZSwgaW5jcmVtZW50SWQgPSAhIWtleSwgZGVmYXVsdE1heExpc3RlbmVycywgcGVyc2lzdGVuY2VUbSwgYXV0b0Rlc3Ryb3ksIHJvb3RFbWl0dGVyIH0gPSB7fSApIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdmFyIF8gPSB7fTtcbiAgICAgICAgXG4gICAgICAgIF8ubWF4TGlzdGVuZXJzID0gZGVmYXVsdE1heExpc3RlbmVycyB8fCB0aGlzLmNvbnN0cnVjdG9yLmRlZmF1bHRNYXhMaXN0ZW5lcnM7XG4gICAgICAgIFxuICAgICAgICBpZCA9IGlkXG4gICAgICAgICAgICB8fCBrZXkgJiYgKChwYXJlbnQgJiYgcGFyZW50Ll9pZCB8fCAnJykgKyAnOjonICsga2V5KTtcbiAgICAgICAgXG4gICAgICAgIF8uaXNMb2NhbElkID0gIWlkO1xuICAgICAgICBcbiAgICAgICAgaWQgPSBpZCB8fCAoXCJfX19fX1wiICsgc2hvcnRpZC5nZW5lcmF0ZSgpKTtcbiAgICAgICAgXG4gICAgICAgIGlmICggb3BlblNjb3Blc1tpZF0gJiYgIWluY3JlbWVudElkICkge1xuICAgICAgICAgICAgdGhpcy5faWQgPSBpZDtcbiAgICAgICAgICAgIG9wZW5TY29wZXNbaWRdLnJlZ2lzdGVyKHN0b3Jlc01hcCk7XG4gICAgICAgICAgICByZXR1cm4gb3BlblNjb3Blc1tpZF1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICggb3BlblNjb3Blc1tpZF0gJiYgaW5jcmVtZW50SWQgKSB7XG4gICAgICAgICAgICBsZXQgaSA9IC0xO1xuICAgICAgICAgICAgd2hpbGUgKCBvcGVuU2NvcGVzW2lkICsgJ1snICsgKCsraSkgKyAnXSddICkgO1xuICAgICAgICAgICAgaWQgPSBpZCArICdbJyArIGkgKyAnXSc7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRoaXMuX2lkICAgICAgICA9IGlkO1xuICAgICAgICBvcGVuU2NvcGVzW2lkXSAgPSB0aGlzO1xuICAgICAgICBfLnBlcnNpc3RlbmNlVG0gPSBwZXJzaXN0ZW5jZVRtIHx8IHRoaXMuY29uc3RydWN0b3IucGVyc2lzdGVuY2VUbTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuc3RvcmVzID0ge307XG4gICAgICAgIHRoaXMuc3RhdGUgID0ge307XG4gICAgICAgIHRoaXMuZGF0YSAgID0ge307XG4gICAgICAgIFxuICAgICAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgdGhpcy5fICAgICAgPSBfO1xuICAgICAgICBpZiAoIHBhcmVudCAmJiBwYXJlbnQuZGVhZCApXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW4ndCB1c2UgYSBkZWFkIHNjb3BlIGFzIHBhcmVudCAhXCIpO1xuICAgICAgICBcbiAgICAgICAgX19wcm90b19fcHVzaCh0aGlzLCAnc3RvcmVzJywgcGFyZW50KTtcbiAgICAgICAgX19wcm90b19fcHVzaCh0aGlzLCAnc3RhdGUnLCBwYXJlbnQpO1xuICAgICAgICBfX3Byb3RvX19wdXNoKHRoaXMsICdkYXRhJywgcGFyZW50KTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuc291cmNlcyAgICAgID0gW107XG4gICAgICAgIF8uY2hpbGRTY29wZXMgICAgID0gW107XG4gICAgICAgIF8uY2hpbGRTY29wZXNMaXN0ID0gW107XG4gICAgICAgIF8udW5TdGFibGVDaGlsZHMgID0gMDtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX19yZXRhaW5zID0geyBhbGw6IDAgfTtcbiAgICAgICAgdGhpcy5fX2xvY2tzICAgPSB7IGFsbDogMSB9O1xuICAgICAgICBfLl9saXN0ZW5pbmcgICA9IHt9O1xuICAgICAgICBfLl9zY29wZSAgICAgICA9IHt9O1xuICAgICAgICBfLl9taXhlZCAgICAgICA9IFtdO1xuICAgICAgICBfLl9taXhlZExpc3QgICA9IFtdO1xuICAgICAgICBfLmZvbGxvd2VycyAgICA9IFtdO1xuICAgICAgICBpZiAoIHBhcmVudCApIHtcbiAgICAgICAgICAgIHBhcmVudC5yZXRhaW4oXCJpc015UGFyZW50XCIpO1xuICAgICAgICAgICAgaWYgKCAhcm9vdEVtaXR0ZXIgKSB7XG4gICAgICAgICAgICAgICAgIXBhcmVudC5fc3RhYmxlICYmIHRoaXMud2FpdChcIndhaXRpbmdQYXJlbnRcIik7XG4gICAgICAgICAgICAgICAgcGFyZW50Lm9uKF8uX3BhcmVudExpc3QgPSB7XG4gICAgICAgICAgICAgICAgICAgICdzdGFibGUnICA6IHMgPT4gdGhpcy5yZWxlYXNlKFwid2FpdGluZ1BhcmVudFwiKSxcbiAgICAgICAgICAgICAgICAgICAgJ3Vuc3RhYmxlJzogcyA9PiB0aGlzLndhaXQoXCJ3YWl0aW5nUGFyZW50XCIpLFxuICAgICAgICAgICAgICAgICAgICAndXBkYXRlJyAgOiBzID0+IHRoaXMuX3Byb3BhZygpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXJlbnQub24oXy5fcGFyZW50TGlzdCA9IHtcbiAgICAgICAgICAgICAgICAgICAgJ3VwZGF0ZSc6IHMgPT4gdGhpcy5fcHJvcGFnKClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHRoaXMucmVnaXN0ZXIocGFyZW50Ll9fc2NvcGUsIHN0YXRlLCBkYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIHRoaXMucmVnaXN0ZXIoc3RvcmVzTWFwLCBzdGF0ZSwgZGF0YSk7XG4gICAgICAgIHRoaXMuX19sb2Nrcy5hbGwtLTtcbiAgICAgICAgdGhpcy5fc3RhYmxlID0gIXRoaXMuX19sb2Nrcy5hbGw7XG4gICAgICAgIFxuICAgICAgICBpZiAoIHBhcmVudCApIHtcbiAgICAgICAgICAgIHBhcmVudC5fYWRkQ2hpbGQodGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCBhdXRvRGVzdHJveSApXG4gICAgICAgICAgICBzZXRUaW1lb3V0KFxuICAgICAgICAgICAgICAgIHRtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXRhaW4oXCJhdXRvRGVzdHJveVwiKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNwb3NlKFwiYXV0b0Rlc3Ryb3lcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKVxuICAgICAgICBcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogQGRlcHJlY2F0ZWRcbiAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgKi9cbiAgICBnZXQgZGF0YXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGE7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqXG4gICAgICogTW91bnQgdGhlIHN0b3JlcyBpbiBzdG9yZXNMaXN0LCBpbiB0aGlzIHNjb3BlIG9yIGluIGl0cyBwYXJlbnRzIG9yIG1peGVkIHNjb3Blc1xuICAgICAqXG4gICAgICogQHBhcmFtIHN0b3Jlc0xpc3Qge3N0cmluZ3xzdG9yZVJlZn0gU3RvcmUgbmFtZSwgQXJyYXkgb2YgU3RvcmUgbmFtZXMsIG9yIFJlc2NvcGUgc3RvcmUgcmVmIGZyb20gU3RvcmU6OmFzIG9yXG4gICAgICogICAgIFN0b3JlOmFzXG4gICAgICogQHBhcmFtIHN0YXRlXG4gICAgICogQHBhcmFtIGRhdGFcbiAgICAgKiBAcmV0dXJucyB7U2NvcGV9XG4gICAgICovXG4gICAgbW91bnQoIHN0b3Jlc0xpc3QsIHNuYXBzaG90LCBzdGF0ZSwgZGF0YSApIHtcbiAgICAgICAgaWYgKCBpcy5hcnJheShzdG9yZXNMaXN0KSApIHtcbiAgICAgICAgICAgIHN0b3Jlc0xpc3QuZm9yRWFjaChrID0+IHRoaXMuX21vdW50KGssIHNuYXBzaG90LCBzdGF0ZSwgZGF0YSkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fbW91bnQoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgXG4gICAgX21vdW50KCBpZCwgc25hcHNob3QsIHN0YXRlLCBkYXRhICkge1xuICAgICAgICBpZiAoIHR5cGVvZiBpZCAhPT0gJ3N0cmluZycgKSB7XG4gICAgICAgICAgICB0aGlzLnJlZ2lzdGVyKHsgW2lkLm5hbWVdOiBpZC5zdG9yZSB9KTtcbiAgICAgICAgICAgIGlkID0gaWQubmFtZTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKCAhdGhpcy5fLl9zY29wZVtpZF0gKSB7Ly9hc2sgbWl4ZWQgfHwgcGFyZW50XG4gICAgICAgICAgICBpZiAoIHRoaXMuXy5fbWl4ZWQucmVkdWNlKCggbW91bnRlZCwgY3R4ICkgPT4gKG1vdW50ZWQgfHwgY3R4Ll9tb3VudChpZCwgc25hcHNob3QsIHN0YXRlLCBkYXRhKSksIGZhbHNlKSB8fFxuICAgICAgICAgICAgICAgICF0aGlzLnBhcmVudCApXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyZW50Ll9tb3VudCguLi5hcmd1bWVudHMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbGV0IHN0b3JlID0gdGhpcy5fLl9zY29wZVtpZF0sIGN0eDtcbiAgICAgICAgICAgIGlmICggaXMuZm4oc3RvcmUpICkge1xuICAgICAgICAgICAgICAgIHRoaXMuXy5fc2NvcGVbaWRdID0gbmV3IHN0b3JlKHRoaXMsIHsgc25hcHNob3QsIG5hbWU6IGlkLCBzdGF0ZSwgZGF0YSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKCBzbmFwc2hvdCApXG4gICAgICAgICAgICAgICAgc3RvcmUucmVzdG9yZShzbmFwc2hvdCk7XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoIHN0YXRlICE9PSB1bmRlZmluZWQgJiYgZGF0YSA9PT0gdW5kZWZpbmVkIClcbiAgICAgICAgICAgICAgICAgICAgc3RvcmUuc2V0U3RhdGUoc3RhdGUpO1xuICAgICAgICAgICAgICAgIGVsc2UgaWYgKCBzdGF0ZSAhPT0gdW5kZWZpbmVkIClcbiAgICAgICAgICAgICAgICAgICAgc3RvcmUuc3RhdGUgPSBzdGF0ZTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAoIGRhdGEgIT09IHVuZGVmaW5lZCApXG4gICAgICAgICAgICAgICAgICAgIHN0b3JlLnB1c2goZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl93YXRjaFN0b3JlKGlkKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIHJldHVybiB0aGlzLl8uX3Njb3BlW2lkXTtcbiAgICB9XG4gICAgXG4gICAgX3dhdGNoU3RvcmUoIGlkLCBzdGF0ZSwgZGF0YSApIHtcbiAgICAgICAgLy9pZiAoICF0aGlzLl9fc2NvcGVbaWRdICkgey8vYXNrIG1peGVkIHx8IHBhcmVudFxuICAgICAgICAvLyAgICBpZiAoIHRoaXMuX19taXhlZC5yZWR1Y2UoKCBtb3VudGVkLCBjdHggKSA9PiAobW91bnRlZCB8fCBjdHguX3dhdGNoU3RvcmUoaWQsIHN0YXRlLCBkYXRhKSksIGZhbHNlKSB8fFxuICAgICAgICAvLyAgICAgICAgIXRoaXMucGFyZW50IClcbiAgICAgICAgLy8gICAgICAgIHJldHVybjtcbiAgICAgICAgLy8gICAgcmV0dXJuIHRoaXMucGFyZW50Ll93YXRjaFN0b3JlKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIC8vfVxuICAgICAgICBpZiAoICF0aGlzLl8uX2xpc3RlbmluZ1tpZF0gJiYgIWlzLmZuKHRoaXMuXy5fc2NvcGVbaWRdKSApIHtcbiAgICAgICAgICAgICF0aGlzLl8uX3Njb3BlW2lkXS5fYXV0b0Rlc3Ryb3kgJiYgdGhpcy5fLl9zY29wZVtpZF0ucmV0YWluKFwic2NvcGVkXCIpO1xuICAgICAgICAgICAgIXRoaXMuXy5fc2NvcGVbaWRdLmlzU3RhYmxlKCkgJiYgdGhpcy53YWl0KGlkKTtcbiAgICAgICAgICAgIHRoaXMuXy5fc2NvcGVbaWRdLm9uKFxuICAgICAgICAgICAgICAgIHRoaXMuXy5fbGlzdGVuaW5nW2lkXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgJ2Rlc3Ryb3knIDogcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5fLl9saXN0ZW5pbmdbaWRdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fLl9zY29wZVtpZF0gPSB0aGlzLl8uX3Njb3BlW2lkXS5jb25zdHJ1Y3RvcjtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgJ3VwZGF0ZScgIDogcyA9PiB0aGlzLnByb3BhZygpLFxuICAgICAgICAgICAgICAgICAgICAnc3RhYmxlJyAgOiBzID0+IHRoaXMucmVsZWFzZShpZCksXG4gICAgICAgICAgICAgICAgICAgICd1bnN0YWJsZSc6IHMgPT4gdGhpcy53YWl0KGlkKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBNaXggdGFyZ2V0Q3R4IG9uIHRoaXMgc2NvcGVcbiAgICAgKiBNaXhlZCBzY29wZSBwYXJlbnRzIGFyZSBOT1QgbWFwcGVkXG4gICAgICogQHBhcmFtIHRhcmdldEN0eFxuICAgICAqL1xuICAgIG1peGluKCB0YXJnZXRDdHggKSB7XG4gICAgICAgIGxldCBwYXJlbnQgPSB0aGlzLnBhcmVudCwgbGlzdHM7XG4gICAgICAgIHRoaXMuXy5fbWl4ZWQucHVzaCh0YXJnZXRDdHgpXG4gICAgICAgIHRhcmdldEN0eC5yZXRhaW4oXCJtaXhlZFRvXCIpO1xuICAgICAgICBpZiAoICF0YXJnZXRDdHguX3N0YWJsZSApXG4gICAgICAgICAgICB0aGlzLndhaXQodGFyZ2V0Q3R4Ll9pZCk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl8uX21peGVkTGlzdC5wdXNoKGxpc3RzID0ge1xuICAgICAgICAgICAgJ3N0YWJsZScgIDogcyA9PiB0aGlzLnJlbGVhc2UodGFyZ2V0Q3R4Ll9pZCksXG4gICAgICAgICAgICAndW5zdGFibGUnOiBzID0+IHRoaXMud2FpdCh0YXJnZXRDdHguX2lkKSxcbiAgICAgICAgICAgICd1cGRhdGUnICA6IHMgPT4gdGhpcy5fcHJvcGFnKClcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLnN0b3JlcyA9IHt9O1xuICAgICAgICB0aGlzLnN0YXRlICA9IHt9O1xuICAgICAgICB0aGlzLmRhdGEgICA9IHt9O1xuICAgICAgICB0YXJnZXRDdHgub24obGlzdHMpO1xuICAgICAgICBfX3Byb3RvX19wdXNoKHRoaXMsICdzdG9yZXMnLCBwYXJlbnQpO1xuICAgICAgICBfX3Byb3RvX19wdXNoKHRoaXMsICdzdGF0ZScsIHBhcmVudCk7XG4gICAgICAgIF9fcHJvdG9fX3B1c2godGhpcywgJ2RhdGEnLCBwYXJlbnQpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5yZWxpbmsodGhpcy5fLl9zY29wZSwgdGhpcywgZmFsc2UsIHRydWUpO1xuICAgICAgICB0aGlzLl8uX21peGVkLmZvckVhY2goXG4gICAgICAgICAgICBjdHggPT4ge1xuICAgICAgICAgICAgICAgIF9fcHJvdG9fX3B1c2godGhpcywgJ3N0b3JlcycpO1xuICAgICAgICAgICAgICAgIF9fcHJvdG9fX3B1c2godGhpcywgJ3N0YXRlJyk7XG4gICAgICAgICAgICAgICAgX19wcm90b19fcHVzaCh0aGlzLCAnZGF0YScpO1xuICAgICAgICAgICAgICAgIGN0eC5yZWxpbmsoY3R4Ll8uX3Njb3BlLCB0aGlzLCB0cnVlLCB0cnVlKVxuICAgICAgICAgICAgfVxuICAgICAgICApXG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIFJlZ2lzdGVyIHN0b3JlcyBpbiBzdG9yZXNNYXAgJiBsaW5rIHRoZW0gaW4gdGhlIHByb3Rvc1xuICAgICAqIEBwYXJhbSBzdG9yZXNNYXBcbiAgICAgKiBAcGFyYW0gc3RhdGVcbiAgICAgKiBAcGFyYW0gZGF0YVxuICAgICAqL1xuICAgIHJlZ2lzdGVyKCBzdG9yZXNNYXAsIHN0YXRlID0ge30sIGRhdGEgPSB7fSApIHtcbiAgICAgICAgdGhpcy5yZWxpbmsoc3RvcmVzTWFwLCB0aGlzLCBmYWxzZSwgZmFsc2UpO1xuICAgICAgICBPYmplY3Qua2V5cyhzdG9yZXNNYXApLmZvckVhY2goXG4gICAgICAgICAgICBpZCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCBzdG9yZXNNYXBbaWRdLnNpbmdsZXRvbiB8fCAoaXMuZm4oc3RvcmVzTWFwW2lkXSkgJiYgKHN0YXRlW2lkXSB8fCBkYXRhW2lkXSkpICkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9tb3VudChpZCwgc3RhdGVbaWRdLCBkYXRhW2lkXSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoIHN0YXRlW2lkXSB8fCBkYXRhW2lkXSApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBkYXRhW2lkXSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICggc3RhdGVbaWRdIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3Jlc1tpZF0uc3RhdGUgPSBzdGF0ZVtpZF07XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3Jlc1tpZF0ucHVzaChkYXRhW2lkXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoIHN0YXRlW2lkXSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcmVzW2lkXS5zZXRTdGF0ZShzdGF0ZVtpZF0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl93YXRjaFN0b3JlKGlkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIClcbiAgICAgICAgXG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIE1hcCBzcmNDdHggc3RvcmUncyBvbiB0YXJnZXRDdHggaGVhZGVycyBwcm90bydzXG4gICAgICogQHBhcmFtIHNyY0N0eFxuICAgICAqIEBwYXJhbSB0YXJnZXRDdHhcbiAgICAgKiBAcGFyYW0gc3RhdGVcbiAgICAgKiBAcGFyYW0gZGF0YVxuICAgICAqL1xuICAgIHJlbGluayggc3JjQ3R4LCB0YXJnZXRDdHggPSB0aGlzLCBleHRlcm5hbCwgZm9yY2UgKSB7XG4gICAgICAgIGxldCBsY3R4ID0gdGFyZ2V0Q3R4Ll8uc3RvcmVzLnByb3RvdHlwZTtcbiAgICAgICAgT2JqZWN0LmtleXMoc3JjQ3R4KVxuICAgICAgICAgICAgICAuZm9yRWFjaChcbiAgICAgICAgICAgICAgICAgIGlkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoICFmb3JjZSAmJiB0YXJnZXRDdHguXy5fc2NvcGVbaWRdID09PSBzcmNDdHhbaWRdIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldEN0eC5fLl9zY29wZVtpZF0gJiYgKHRhcmdldEN0eC5fLl9zY29wZVtpZF0uY29uc3RydWN0b3IgPT09IHNyY0N0eFtpZF0pIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgIGlmICggIWZvcmNlICYmIHRhcmdldEN0eC5fLl9zY29wZVtpZF0gKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmICggIWV4dGVybmFsICYmICFpcy5mbih0YXJnZXRDdHguXy5fc2NvcGVbaWRdKSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuaW5mbyhcIlJlc2NvcGUgU3RvcmUgOiBcIiwgaWQsIFwiIGFscmVhZHkgZXhpc3QgaW4gdGhpcyBzY29wZSAhICggdHJ5IF9fcHJvdG9fXyBob3QgcGF0Y2ggKVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldEN0eC5fLl9zY29wZVtpZF0uX19wcm90b19fID0gc3JjQ3R4W2lkXS5wcm90b3R5cGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoICFleHRlcm5hbCAmJiBpcy5mbih0YXJnZXRDdHguXy5fc2NvcGVbaWRdKSApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRDdHguXy5fc2NvcGVbaWRdID0gc3JjQ3R4W2lkXTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoICFmb3JjZSAmJiAhZXh0ZXJuYWwgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl8uX3Njb3BlW2lkXSA9IHNyY0N0eFtpZF07XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBsY3R4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0OiAoKSA9PiB0aGlzLl8uX3Njb3BlW2lkXVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldEN0eC5fLnN0YXRlLnByb3RvdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldDogKCkgPT4gKHRoaXMuXy5fc2NvcGVbaWRdICYmIHRoaXMuXy5fc2NvcGVbaWRdLnN0YXRlKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldDogKCB2ICkgPT4gKHRoaXMuX21vdW50KGlkLCBudWxsLCB2KSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRDdHguXy5kYXRhLnByb3RvdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldDogKCkgPT4gKHRoaXMuXy5fc2NvcGVbaWRdICYmIHRoaXMuXy5fc2NvcGVbaWRdLmRhdGEpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0OiAoIHYgKSA9PiAodGhpcy5fbW91bnQoaWQsIHVuZGVmaW5lZCwgdikpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICApXG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIEJpbmQgc3RvcmVzIGZyb20gdGhpcyBzY29wZSwgaGlzIHBhcmVudHMgYW5kIG1peGVkIHNjb3BlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gb2JqIHtSZWFjdC5Db21wb25lbnR8U3RvcmV8ZnVuY3Rpb259XG4gICAgICogQHBhcmFtIGtleSB7c3RyaW5nfSBzdG9yZXMga2V5cyB0byBiaW5kIHVwZGF0ZXNcbiAgICAgKiBAcGFyYW0gYXNcbiAgICAgKiBAcGFyYW0gc2V0SW5pdGlhbCB7Ym9vbH0gZmFsc2UgdG8gbm90IHByb3BhZyBpbml0aWFsIHZhbHVlIChkZWZhdWx0IDogdHJ1ZSlcbiAgICAgKi9cbiAgICBiaW5kKCBvYmosIGtleSwgYXMsIHNldEluaXRpYWwgPSB0cnVlICkge1xuICAgICAgICBsZXQgbGFzdFJldnMsIGRhdGEsIHJlZktleXM7XG4gICAgICAgIGlmICgga2V5ICYmICFpcy5hcnJheShrZXkpIClcbiAgICAgICAgICAgIGtleSA9IFtrZXldO1xuICAgICAgICBcbiAgICAgICAgaWYgKCBhcyA9PT0gZmFsc2UgfHwgYXMgPT09IHRydWUgKSB7XG4gICAgICAgICAgICBzZXRJbml0aWFsID0gYXM7XG4gICAgICAgICAgICBhcyAgICAgICAgID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmVmS2V5cyA9IGtleVxuICAgICAgICAgICAgLm1hcChpZCA9PiAoaXMuc3RyaW5nKGlkKSA/IGlkIDogaWQubmFtZSkpXG4gICAgICAgICAgICAubWFwKGlkID0+ICh0aGlzLnBhcnNlUmVmKGlkKSkpO1xuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIHRoaXMuXy5mb2xsb3dlcnMucHVzaChcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBvYmosXG4gICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgIGFzIHx8IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICBsYXN0UmV2cyA9IHJlZktleXMucmVkdWNlKCggcmV2cywgcmVmICkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXZzW3JlZi5zdG9yZUlkXSA9IHJldnNbcmVmLnN0b3JlSWRdIHx8IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldiA6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICByZWZzOiBbXVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICByZXZzW3JlZi5zdG9yZUlkXS5yZWZzLnB1c2gocmVmKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJldnM7XG4gICAgICAgICAgICAgICAgfSwge30pXG4gICAgICAgICAgICBdKTtcbiAgICAgICAgdGhpcy5tb3VudChrZXkpO1xuICAgICAgICBcbiAgICAgICAgaWYgKCBzZXRJbml0aWFsICYmIHRoaXMuX3N0YWJsZSApIHtcbiAgICAgICAgICAgIGRhdGEgPSB0aGlzLmdldFVwZGF0ZXMobGFzdFJldnMpO1xuICAgICAgICAgICAgaWYgKCAhZGF0YSApIHJldHVybjtcbiAgICAgICAgICAgIGlmICggdHlwZW9mIG9iaiAhPSBcImZ1bmN0aW9uXCIgKSB7XG4gICAgICAgICAgICAgICAgaWYgKCBhcyApIG9iai5zZXRTdGF0ZSh7IFthc106IGRhdGEgfSk7XG4gICAgICAgICAgICAgICAgZWxzZSBvYmouc2V0U3RhdGUoZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBvYmooZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIFVuIGJpbmQgdGhpcyBzY29wZSBvZmYgdGhlIGdpdmVuIGNvbXBvbmVudC1rZXlzXG4gICAgICogQHBhcmFtIG9ialxuICAgICAqIEBwYXJhbSBrZXlcbiAgICAgKiBAcmV0dXJucyB7QXJyYXkuPCo+fVxuICAgICAqL1xuICAgIHVuQmluZCggb2JqLCBrZXksIGFzICkge1xuICAgICAgICB2YXIgZm9sbG93ZXJzID0gdGhpcy5fLmZvbGxvd2VycyxcbiAgICAgICAgICAgIGkgICAgICAgICA9IGZvbGxvd2VycyAmJiBmb2xsb3dlcnMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGZvbGxvd2VycyAmJiBpLS0gKVxuICAgICAgICAgICAgaWYgKCBmb2xsb3dlcnNbaV1bMF0gPT09IG9iaiAmJiAoJycgKyBmb2xsb3dlcnNbaV1bMV0pID09ICgnJyArIGtleSkgJiZcbiAgICAgICAgICAgICAgICBmb2xsb3dlcnNbaV1bMl0gPT0gYXMgKVxuICAgICAgICAgICAgICAgIHJldHVybiBmb2xsb3dlcnMuc3BsaWNlKGksIDEpO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBNb3VudCB0aGUgc3RvcmVzIGluIHN0b3Jlc0xpc3QgZnJvbSB0aGlzIHNjb3BlLCBpdHMgcGFyZW50cyBhbmQgbWl4ZWQgc2NvcGVcbiAgICAgKiBCaW5kIHRoZW0gdG8gJ3RvJ1xuICAgICAqIEhvb2sgJ3RvJyBzbyBpdCB3aWxsIGF1dG8gdW5iaW5kIG9uICdkZXN0cm95JyBvciAnY29tcG9uZW50V2lsbFVubW91bnQnXG4gICAgICogQHBhcmFtIHRvXG4gICAgICogQHBhcmFtIHN0b3Jlc0xpc3RcbiAgICAgKiBAcGFyYW0gYmluZFxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IEluaXRpYWwgb3V0cHV0cyBvZiB0aGUgc3RvcmVzIGluICdzdG9yZXNMaXN0J1xuICAgICAqL1xuICAgIG1hcCggdG8sIHN0b3Jlc0xpc3QsIGJpbmQgPSB0cnVlICkge1xuICAgICAgICBsZXQgU3RvcmUgID0gdGhpcy5jb25zdHJ1Y3Rvci5TdG9yZTtcbiAgICAgICAgc3RvcmVzTGlzdCA9IGlzLmFycmF5KHN0b3Jlc0xpc3QpID8gc3RvcmVzTGlzdCA6IFtzdG9yZXNMaXN0XTtcbiAgICAgICAgdGhpcy5tb3VudChzdG9yZXNMaXN0KTtcbiAgICAgICAgaWYgKCBiaW5kICYmIHRvIGluc3RhbmNlb2YgU3RvcmUgKSB7XG4gICAgICAgICAgICBTdG9yZS5tYXAodG8sIHN0b3Jlc0xpc3QsIHRoaXMsIHRoaXMsIGZhbHNlKVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCBiaW5kICkge1xuICAgICAgICAgICAgdGhpcy5iaW5kKHRvLCBzdG9yZXNMaXN0LCB1bmRlZmluZWQsIGZhbHNlKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgbGV0IG1peGVkQ1dVbm1vdW50LFxuICAgICAgICAgICAgICAgIHVuTW91bnRLZXkgPSB0by5pc1JlYWN0Q29tcG9uZW50ID8gXCJjb21wb25lbnRXaWxsVW5tb3VudFwiIDogXCJkZXN0cm95XCI7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmICggdG8uaGFzT3duUHJvcGVydHkodW5Nb3VudEtleSkgKSB7XG4gICAgICAgICAgICAgICAgbWl4ZWRDV1VubW91bnQgPSB0b1t1bk1vdW50S2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdG9bdW5Nb3VudEtleV0gPSAoIC4uLmFyZ3ogKSA9PiB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHRvW3VuTW91bnRLZXldO1xuICAgICAgICAgICAgICAgIGlmICggbWl4ZWRDV1VubW91bnQgKVxuICAgICAgICAgICAgICAgICAgICB0b1t1bk1vdW50S2V5XSA9IG1peGVkQ1dVbm1vdW50O1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHRoaXMudW5CaW5kKHRvLCBzdG9yZXNMaXN0KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdG9bdW5Nb3VudEtleV0gJiYgdG9bdW5Nb3VudEtleV0oLi4uYXJneik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3RvcmVzTGlzdC5yZWR1Y2UoKCBkYXRhLCBpZCApID0+IHtcbiAgICAgICAgICAgIGlmICggIWlzLnN0cmluZyhpZCkgKVxuICAgICAgICAgICAgICAgIGlkID0gaWQubmFtZTtcbiAgICAgICAgICAgIGlkICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID0gaWQuc3BsaXQoJzonKTsvL0B0b2RvXG4gICAgICAgICAgICBpZFswXSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA9IGlkWzBdLnNwbGl0KCcuJyk7XG4gICAgICAgICAgICBkYXRhW2lkWzFdIHx8IGlkWzBdW2lkWzBdLmxlbmd0aCAtIDFdXSA9IHRoaXMuc3RvcmVzW2lkWzBdWzBdXSAmJiB0aGlzLnN0b3Jlc1tpZFswXVswXV0ucmV0cmlldmUgJiYgdGhpcy5zdG9yZXNbaWRbMF1bMF1dLnJldHJpZXZlKGlkWzBdLnNwbGljZSgxKSk7XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfSwge30pO1xuICAgIH1cbiAgICBcbiAgICByZXRyaWV2ZSggcGF0aCA9IFwiXCIgKSB7XG4gICAgICAgIHBhdGggPSBpcy5zdHJpbmcocGF0aCkgPyBwYXRoLnNwbGl0KCcuJykgOiBwYXRoO1xuICAgICAgICByZXR1cm4gcGF0aCAmJiB0aGlzLnN0b3Jlc1twYXRoWzBdXSAmJlxuICAgICAgICAgICAgdGhpcy5zdG9yZXNbcGF0aFswXV0ucmV0cmlldmUocGF0aC5zbGljZSgxKSk7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIEdldCBvciB1cGRhdGUgc3RvcmVzUmV2TWFwJ3MgcmV2aXNpb25zXG4gICAgICogQHBhcmFtIHN0b3Jlc1Jldk1hcFxuICAgICAqIEBwYXJhbSBsb2NhbFxuICAgICAqIEByZXR1cm5zIHt7fX1cbiAgICAgKi9cbiAgICBnZXRTdG9yZXNSZXZzKCBzdG9yZXNSZXZNYXAgPSB7fSwgbG9jYWwgKSB7XG4gICAgICAgIGxldCBjdHggPSB0aGlzLl8uX3Njb3BlO1xuICAgICAgICBpZiAoICFzdG9yZXNSZXZNYXAgKSB7XG4gICAgICAgICAgICBzdG9yZXNSZXZNYXAgPSB7fTtcbiAgICAgICAgfVxuICAgICAgICBPYmplY3Qua2V5cyhjdHgpLmZvckVhY2goXG4gICAgICAgICAgICBpZCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCAhaXMuZm4oY3R4W2lkXSlcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgc3RvcmVzUmV2TWFwW2lkXSA9IGN0eFtpZF0uX3JldjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoICFzdG9yZXNSZXZNYXAuaGFzT3duUHJvcGVydHkoaWQpIClcbiAgICAgICAgICAgICAgICAgICAgc3RvcmVzUmV2TWFwW2lkXSA9IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIGlmICggIWxvY2FsICkge1xuICAgICAgICAgICAgdGhpcy5fLl9taXhlZC5yZWR1Y2UoKCB1cGRhdGVkLCBjdHggKSA9PiAoY3R4LmdldFN0b3Jlc1JldnMoc3RvcmVzUmV2TWFwKSwgc3RvcmVzUmV2TWFwKSwgc3RvcmVzUmV2TWFwKTtcbiAgICAgICAgICAgIHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LmdldFN0b3Jlc1JldnMoc3RvcmVzUmV2TWFwKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3RvcmVzUmV2TWFwO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBHZXQgb3IgdXBkYXRlIG91dHB1dCBiYXNpbmcgc3RvcmVzUmV2TWFwJ3MgcmV2aXNpb25zLlxuICAgICAqIElmIGEgc3RvcmUgaW4gJ3N0b3Jlc1Jldk1hcCcgaXMgdXBkYXRlZDsgYWRkIGl0IHRvICdvdXRwdXQnXG4gICAgICogQHBhcmFtIHN0b3Jlc1Jldk1hcFxuICAgICAqIEBwYXJhbSBvdXRwdXRcbiAgICAgKiBAcGFyYW0gdXBkYXRlZFxuICAgICAqIEByZXR1cm5zIHsqfHt9fVxuICAgICAqL1xuICAgIGdldFVwZGF0ZXMoIHN0b3Jlc1Jldk1hcCwgb3V0cHV0LCB1cGRhdGVkICkge1xuICAgICAgICBsZXQgY3R4ID0gdGhpcy5fLl9zY29wZTtcbiAgICAgICAgXG4gICAgICAgIG91dHB1dCA9IG91dHB1dCB8fCB7fTtcbiAgICAgICAgT2JqZWN0LmtleXMoY3R4KS5mb3JFYWNoKFxuICAgICAgICAgICAgaWQgPT4ge1xuICAgICAgICAgICAgICAgIGlmICggIW91dHB1dC5oYXNPd25Qcm9wZXJ0eShpZCkgJiYgIWlzLmZuKGN0eFtpZF0pXG4gICAgICAgICAgICAgICAgICAgICYmICghc3RvcmVzUmV2TWFwXG4gICAgICAgICAgICAgICAgICAgICAgICB8fCAoc3RvcmVzUmV2TWFwLmhhc093blByb3BlcnR5KGlkKSAmJiBzdG9yZXNSZXZNYXBbaWRdID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgICAgICB8fCAhKCFzdG9yZXNSZXZNYXAuaGFzT3duUHJvcGVydHkoaWQpIHx8IGN0eFtpZF0uX3JldiA8PSBzdG9yZXNSZXZNYXBbaWRdLnJldikpXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVkICAgID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgb3V0cHV0W2lkXSA9IHRoaXMuZGF0YVtpZF07XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpZiAoIHN0b3Jlc1Jldk1hcCAmJiBzdG9yZXNSZXZNYXAuaGFzT3duUHJvcGVydHkoaWQpICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmVzUmV2TWFwW2lkXS5yZXYgPSBjdHhbaWRdLl9yZXY7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9yZXNSZXZNYXBbaWRdLnJlZnMuZm9yRWFjaChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWYgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUud2FybihcInVwZGF0ZSByZWYgXCIsIHJlZi5yZWYsIHRoaXMucmV0cmlldmUocmVmLnBhdGgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0W3JlZi5hbGlhc10gPSB0aGlzLnJldHJpZXZlKHJlZi5wYXRoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUud2FybihcInVwZGF0ZSBcIiwgaWQsIHRoaXMuZGF0YVtpZF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0W2lkXSA9IHRoaXMuZGF0YVtpZF07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICB1cGRhdGVkID0gdGhpcy5fLl9taXhlZC5yZWR1Y2UoKCB1cGRhdGVkLCBjdHggKSA9PiAoY3R4LmdldFVwZGF0ZXMoc3RvcmVzUmV2TWFwLCBvdXRwdXQsIHVwZGF0ZWQpIHx8IHVwZGF0ZWQpLCB1cGRhdGVkKTtcbiAgICAgICAgdXBkYXRlZCA9IHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LmdldFVwZGF0ZXMoc3RvcmVzUmV2TWFwLCBvdXRwdXQsIHVwZGF0ZWQpIHx8IHVwZGF0ZWQ7XG4gICAgICAgIHJldHVybiB1cGRhdGVkICYmIG91dHB1dDtcbiAgICB9XG4gICAgXG4gICAgX2dldEFsbENoaWxkcyggY2hpbGRzID0gW10gKSB7XG4gICAgICAgIGNoaWxkcy5wdXNoKC4uLnRoaXMuXy5jaGlsZFNjb3Blcyk7XG4gICAgICAgIHRoaXMuXy5jaGlsZFNjb3Blcy5mb3JFYWNoKFxuICAgICAgICAgICAgY3R4ID0+IHtcbiAgICAgICAgICAgICAgICBjdHguX2dldEFsbENoaWxkcyhjaGlsZHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gY2hpbGRzO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB3aXRoQ2hpbGRzXG4gICAgICogQHBhcmFtIF9fd2l0aE1peGVkXG4gICAgICogQHBhcmFtIF9vdXRwdXRcbiAgICAgKiBAcmV0dXJucyB7Knx7c3RhdGU6IHt9LCBkYXRhOiB7fX19XG4gICAgICovXG4gICAgc2VyaWFsaXplKCBvdXRwdXQgPSB7fSApIHtcbiAgICAgICAgbGV0IGN0eCAgICAgICAgICA9IHRoaXMuXy5fc2NvcGU7XG4gICAgICAgIG91dHB1dFt0aGlzLl9pZF0gPSB7fTtcbiAgICAgICAgXG4gICAgICAgIE9iamVjdC5rZXlzKGN0eCkuZm9yRWFjaChcbiAgICAgICAgICAgIGlkID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIGlzLmZuKGN0eFtpZF0pIClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGN0eFtpZF0uc2VyaWFsaXplKG91dHB1dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIClcbiAgICAgICAgXG4gICAgICAgIHRoaXMuXy5jaGlsZFNjb3Blcy5mb3JFYWNoKFxuICAgICAgICAgICAgY3R4ID0+IHtcbiAgICAgICAgICAgICAgICAhY3R4Ll8uaXNMb2NhbElkICYmIGN0eC5zZXJpYWxpemUob3V0cHV0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuXy5fbWl4ZWQuZm9yRWFjaChcbiAgICAgICAgICAgIGN0eCA9PiB7XG4gICAgICAgICAgICAgICAgIWN0eC5fLmlzTG9jYWxJZCAmJiBjdHguc2VyaWFsaXplKG91dHB1dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gb3V0cHV0O1xuICAgIH1cbiAgICBcbiAgICByZXN0b3JlKCBzbmFwc2hvdCwgZm9yY2UgKSB7XG4gICAgICAgIGxldCBjdHggPSB0aGlzLl8uX3Njb3BlO1xuICAgICAgICBcbiAgICAgICAgc25hcHNob3RbdGhpcy5faWRdICYmIE9iamVjdC5rZXlzKGN0eCkuZm9yRWFjaChcbiAgICAgICAgICAgIG5hbWUgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBzbmFwID0gc25hcHNob3RbdGhpcy5faWQgKyAnLycgKyBuYW1lXTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAoIHNuYXAgKSB7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpZiAoIGZvcmNlICYmICFpcy5mbihjdHhbbmFtZV0pIClcbiAgICAgICAgICAgICAgICAgICAgICAgIGN0eFtuYW1lXS5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdW50KG5hbWUsIHNuYXBzaG90KTsvLyBxdWlldFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgICAgICBcbiAgICAgICAgdGhpcy5fLl9taXhlZC5mb3JFYWNoKFxuICAgICAgICAgICAgY3R4ID0+IHtcbiAgICAgICAgICAgICAgICAhY3R4Ll8uaXNMb2NhbElkICYmIGN0eC5yZXN0b3JlKHNuYXBzaG90LCBmb3JjZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl8uY2hpbGRTY29wZXMuZm9yRWFjaChcbiAgICAgICAgICAgIGN0eCA9PiB7XG4gICAgICAgICAgICAgICAgIWN0eC5fLmlzTG9jYWxJZCAmJiBjdHgucmVzdG9yZShzbmFwc2hvdCwgZm9yY2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICBcbiAgICB9XG4gICAgXG4gICAgcGFyc2VSZWYoIF9yZWYgKSB7XG4gICAgICAgIGxldCByZWYgPSBfcmVmLnNwbGl0KCc6Jyk7XG4gICAgICAgIHJlZlswXSAgPSByZWZbMF0uc3BsaXQoJy4nKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHN0b3JlSWQ6IHJlZlswXVswXSxcbiAgICAgICAgICAgIHBhdGggICA6IHJlZlswXSxcbiAgICAgICAgICAgIGFsaWFzICA6IHJlZlsxXSB8fCByZWZbMF1bcmVmWzBdLmxlbmd0aCAtIDFdLFxuICAgICAgICAgICAgcmVmICAgIDogX3JlZlxuICAgICAgICB9O1xuICAgIH1cbiAgICBcbiAgICBkaXNwYXRjaCggYWN0aW9uLCBkYXRhICkge1xuICAgICAgICB0aGlzLl8uX21peGVkLmZvckVhY2goKCBjdHggKSA9PiAoY3R4LmRpc3BhdGNoKGFjdGlvbiwgZGF0YSkpKTtcbiAgICAgICAgdGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuZGlzcGF0Y2goYWN0aW9uLCBkYXRhKTtcbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5fLl9zY29wZSlcbiAgICAgICAgICAgICAgLmZvckVhY2goXG4gICAgICAgICAgICAgICAgICBpZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKCAhaXMuZm4odGhpcy5fLl9zY29wZVtpZF0pIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fLl9zY29wZVtpZF0udHJpZ2dlcihhY3Rpb24sIGRhdGEpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICk7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogb25jZSgnc3RhYmxlJywgY2IpXG4gICAgICogQHBhcmFtIG9iaiB7UmVhY3QuQ29tcG9uZW50fFN0b3JlfGZ1bmN0aW9uKVxuICAgICAqIEBwYXJhbSBrZXkge3N0cmluZ30gb3B0aW9uYWwga2V5IHdoZXJlIHRvIG1hcCB0aGUgcHVibGljIHN0YXRlXG4gICAgICovXG4gICAgdGhlbiggY2IgKSB7XG4gICAgICAgIGlmICggdGhpcy5fc3RhYmxlIClcbiAgICAgICAgICAgIHJldHVybiBjYihudWxsLCB0aGlzLmRhdGEpO1xuICAgICAgICB0aGlzLm9uY2UoJ3N0YWJsZScsIGUgPT4gY2IobnVsbCwgdGhpcy5kYXRhKSk7XG4gICAgfVxuICAgIFxuICAgIFxuICAgIHJldGFpblN0b3Jlcyggc3RvcmVzID0gW10sIHJlYXNvbiApIHtcbiAgICAgICAgc3RvcmVzLmZvckVhY2goXG4gICAgICAgICAgICBpZCA9PiAodGhpcy5zdG9yZXNbaWRdICYmIHRoaXMuc3RvcmVzW2lkXS5yZXRhaW4gJiYgdGhpcy5zdG9yZXNbaWRdLnJldGFpbihyZWFzb24pKVxuICAgICAgICApXG4gICAgfVxuICAgIFxuICAgIGRpc3Bvc2VTdG9yZXMoIHN0b3JlcyA9IFtdLCByZWFzb24gKSB7XG4gICAgICAgIHN0b3Jlcy5mb3JFYWNoKFxuICAgICAgICAgICAgaWQgPT4gKHRoaXMuc3RvcmVzW2lkXSAmJiB0aGlzLnN0b3Jlc1tpZF0uZGlzcG9zZSAmJiB0aGlzLnN0b3Jlc1tpZF0uZGlzcG9zZShyZWFzb24pKVxuICAgICAgICApXG4gICAgfVxuICAgIFxuICAgIHdhaXQoIHJlYXNvbiApIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcIndhaXRcIiwgcmVhc29uKTtcbiAgICAgICAgdGhpcy5fc3RhYmxlICYmICF0aGlzLl9fbG9ja3MuYWxsICYmIHRoaXMuZW1pdChcInVuc3RhYmxlXCIsIHRoaXMpO1xuICAgICAgICB0aGlzLl9zdGFibGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fX2xvY2tzLmFsbCsrO1xuICAgICAgICBpZiAoIHJlYXNvbiApIHtcbiAgICAgICAgICAgIHRoaXMuX19sb2Nrc1tyZWFzb25dID0gdGhpcy5fX2xvY2tzW3JlYXNvbl0gfHwgMDtcbiAgICAgICAgICAgIHRoaXMuX19sb2Nrc1tyZWFzb25dKys7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgcmVsZWFzZSggcmVhc29uICkge1xuICAgICAgICBcbiAgICAgICAgaWYgKCByZWFzb24gKSB7XG4gICAgICAgICAgICBpZiAoIHRoaXMuX19sb2Nrc1tyZWFzb25dID09IDAgKVxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJSZWxlYXNlIG1vcmUgdGhhbiBsb2NraW5nICFcIiwgcmVhc29uKTtcbiAgICAgICAgICAgIHRoaXMuX19sb2Nrc1tyZWFzb25dID0gdGhpcy5fX2xvY2tzW3JlYXNvbl0gfHwgMDtcbiAgICAgICAgICAgIHRoaXMuX19sb2Nrc1tyZWFzb25dLS07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCAhcmVhc29uICYmIHRoaXMuX19sb2Nrcy5hbGwgPT0gMCApXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiUmVsZWFzZSBtb3JlIHRoYW4gbG9ja2luZyAhXCIpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fX2xvY2tzLmFsbC0tO1xuICAgICAgICBpZiAoICF0aGlzLl9fbG9ja3MuYWxsICkge1xuICAgICAgICAgICAgdGhpcy5fLnN0YWJpbGl6ZXJUTSAmJiBjbGVhclRpbWVvdXQodGhpcy5fLnN0YWJpbGl6ZXJUTSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMuXy5zdGFiaWxpemVyVE0gPSBzZXRUaW1lb3V0KFxuICAgICAgICAgICAgICAgIGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl8uc3RhYmlsaXplclRNID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCB0aGlzLl9fbG9ja3MuYWxsIClcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuXy5wcm9wYWdUTSAmJiBjbGVhclRpbWVvdXQodGhpcy5fLnByb3BhZ1RNKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3N0YWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdChcInN0YWJsZVwiLCB0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICF0aGlzLmRlYWQgJiYgdGhpcy5fcHJvcGFnKCk7Ly8gc3RhYmlsaXR5IGNhbiBpbmR1Y2UgZGVzdHJveVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxuICAgIFxuICAgIHByb3BhZygpIHtcbiAgICAgICAgdGhpcy5fLnByb3BhZ1RNICYmIGNsZWFyVGltZW91dCh0aGlzLl8ucHJvcGFnVE0pO1xuICAgICAgICB0aGlzLl8ucHJvcGFnVE0gPSBzZXRUaW1lb3V0KFxuICAgICAgICAgICAgZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5fLnByb3BhZ1RNID0gbnVsbDtcbiAgICAgICAgICAgICAgICB0aGlzLl9wcm9wYWcoKVxuICAgICAgICAgICAgfSwgMlxuICAgICAgICApO1xuICAgIH1cbiAgICBcbiAgICBfcHJvcGFnKCkge1xuICAgICAgICBpZiAoIHRoaXMuXy5mb2xsb3dlcnMubGVuZ3RoIClcbiAgICAgICAgICAgIHRoaXMuXy5mb2xsb3dlcnMuZm9yRWFjaCgoIHsgMDogb2JqLCAxOiBrZXksIDI6IGFzLCAzOiBsYXN0UmV2cywgMzogcmVtYXBzIH0gKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmdldFVwZGF0ZXMobGFzdFJldnMpO1xuICAgICAgICAgICAgICAgIGlmICggIWRhdGEgKSByZXR1cm47XG4gICAgICAgICAgICAgICAgaWYgKCB0eXBlb2Ygb2JqICE9IFwiZnVuY3Rpb25cIiApIHtcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcInNldFN0YXRlIFwiLG9iaiwgT2JqZWN0LmtleXMoZGF0YSkpXG4gICAgICAgICAgICAgICAgICAgIGlmICggYXMgKSBvYmouc2V0U3RhdGUoeyBbYXNdOiBkYXRhIH0pO1xuICAgICAgICAgICAgICAgICAgICBlbHNlIG9iai5zZXRTdGF0ZShkYXRhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG9iaihkYXRhLCBsYXN0UmV2cyAmJiBbLi4ubGFzdFJldnNdIHx8IFwibm8gcmV2c1wiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gbGFzdFJldnMgJiZcbiAgICAgICAgICAgICAgICAvLyBrZXkuZm9yRWFjaChpZCA9PiAobGFzdFJldnNbaWRdID0gdGhpcy5zdG9yZXNbaWRdICYmIHRoaXMuc3RvcmVzW2lkXS5fcmV2IHx8IDApKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB0aGlzLmVtaXQoXCJ1cGRhdGVcIiwgdGhpcy5nZXRVcGRhdGVzKCkpO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBpcyBzdGFibGVcbiAgICAgKiBAcmV0dXJucyBib29sXG4gICAgICovXG4gICAgaXNTdGFibGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zdGFibGU7XG4gICAgfVxuICAgIFxuICAgIC8vc2VyaWFsaXplQ2hpbGRzKCBjaGlsZHMgPSBbXSApIHtcbiAgICAvL1xuICAgIC8vfVxuICAgIFxuICAgIF9hZGRDaGlsZCggY3R4ICkge1xuICAgICAgICB0aGlzLl8uY2hpbGRTY29wZXMucHVzaChjdHgpO1xuICAgICAgICBsZXQgbGlzdHMgICAgID0ge1xuICAgICAgICAgICAgICAgICdzdGFibGUnICAgICAgOiBzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fLnVuU3RhYmxlQ2hpbGRzLS07XG4gICAgICAgICAgICAgICAgICAgIGlmICggIXRoaXMuXy51blN0YWJsZUNoaWxkcyApXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXQoXCJzdGFibGVUcmVlXCIsIHRoaXMpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAndW5zdGFibGUnICAgIDogcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuXy51blN0YWJsZUNoaWxkcysrO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIDEgPT0gdGhpcy5fLnVuU3RhYmxlQ2hpbGRzIClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdChcInVuc3RhYmxlVHJlZVwiLCB0aGlzKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgJ3N0YWJsZVRyZWUnICA6IHMgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl8udW5TdGFibGVDaGlsZHMtLTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCAhdGhpcy5fLnVuU3RhYmxlQ2hpbGRzIClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdChcInN0YWJsZVRyZWVcIiwgdGhpcylcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICd1bnN0YWJsZVRyZWUnOiBzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fLnVuU3RhYmxlQ2hpbGRzKys7XG4gICAgICAgICAgICAgICAgICAgIGlmICggMSA9PSB0aGlzLl8udW5TdGFibGVDaGlsZHMgKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KFwidW5zdGFibGVUcmVlXCIsIHRoaXMpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAnZGVzdHJveScgICAgIDogY3R4ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBjdHguXy51blN0YWJsZUNoaWxkcyApXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl8udW5TdGFibGVDaGlsZHMtLTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCAhY3R4LmlzU3RhYmxlKCkgKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fLnVuU3RhYmxlQ2hpbGRzLS07XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGlmICggIXRoaXMuXy51blN0YWJsZUNoaWxkcyApXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXQoXCJzdGFibGVUcmVlXCIsIHRoaXMpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHdhc1N0YWJsZSA9IHRoaXMuXy51blN0YWJsZUNoaWxkcztcbiAgICAgICAgLy8hY3R4LmlzU3RhYmxlKCkgJiYgY29uc29sZS53YXJuKCdhZGQgdW5zdGFibGUgY2hpbGQnKTtcbiAgICAgICAgIWN0eC5pc1N0YWJsZSgpICYmIHRoaXMuXy51blN0YWJsZUNoaWxkcysrO1xuICAgICAgICBjdHguXy51blN0YWJsZUNoaWxkcyAmJiB0aGlzLl8udW5TdGFibGVDaGlsZHMrKztcbiAgICAgICAgdGhpcy5fLmNoaWxkU2NvcGVzTGlzdC5wdXNoKGxpc3RzKTtcbiAgICAgICAgaWYgKCAhd2FzU3RhYmxlICYmIHRoaXMuXy51blN0YWJsZUNoaWxkcyApXG4gICAgICAgICAgICB0aGlzLmVtaXQoXCJ1bnN0YWJsZVRyZWVcIiwgdGhpcylcbiAgICAgICAgY3R4Lm9uKGxpc3RzKTtcbiAgICB9XG4gICAgXG4gICAgX3JtQ2hpbGQoIGN0eCApIHtcbiAgICAgICAgbGV0IGkgICAgICAgICA9IHRoaXMuXy5jaGlsZFNjb3Blcy5pbmRleE9mKGN0eCksXG4gICAgICAgICAgICB3YXNTdGFibGUgPSB0aGlzLl8udW5TdGFibGVDaGlsZHM7XG4gICAgICAgIGlmICggaSAhPSAtMSApIHtcbiAgICAgICAgICAgIHRoaXMuXy5jaGlsZFNjb3Blcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAhY3R4LmlzU3RhYmxlKCkgJiYgdGhpcy5fLnVuU3RhYmxlQ2hpbGRzLS07XG4gICAgICAgICAgICBjdHguXy51blN0YWJsZUNoaWxkcyAmJiB0aGlzLl8udW5TdGFibGVDaGlsZHMtLTtcbiAgICAgICAgICAgIGN0eC51bih0aGlzLl8uY2hpbGRTY29wZXNMaXN0LnNwbGljZShpLCAxKVswXSk7XG4gICAgICAgICAgICBpZiAoIHdhc1N0YWJsZSAmJiAhdGhpcy5fLnVuU3RhYmxlQ2hpbGRzIClcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXQoXCJzdGFibGVUcmVlXCIpXG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgcmV0YWluKCByZWFzb24gKSB7XG4gICAgICAgIHRoaXMuX19yZXRhaW5zLmFsbCsrO1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwicmV0YWluXCIsIHRoaXMuX2lkLCByZWFzb24pO1xuICAgICAgICBpZiAoIHJlYXNvbiApIHtcbiAgICAgICAgICAgIHRoaXMuX19yZXRhaW5zW3JlYXNvbl0gPSB0aGlzLl9fcmV0YWluc1tyZWFzb25dIHx8IDA7XG4gICAgICAgICAgICB0aGlzLl9fcmV0YWluc1tyZWFzb25dKys7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgZGlzcG9zZSggcmVhc29uICkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwiZGlzcG9zZVwiLCB0aGlzLl9pZCwgcmVhc29uKTtcbiAgICAgICAgaWYgKCByZWFzb24gKSB7XG4gICAgICAgICAgICBpZiAoICF0aGlzLl9fcmV0YWluc1tyZWFzb25dIClcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJEaXNwb3NlIG1vcmUgdGhhbiByZXRhaW5pbmcgOiBcIiArIHJlYXNvbik7XG4gICAgICAgICAgICB0aGlzLl9fcmV0YWluc1tyZWFzb25dLS07XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmICggIXRoaXMuX19yZXRhaW5zLmFsbCApXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJEaXNwb3NlIG1vcmUgdGhhbiByZXRhaW5pbmcgIVwiKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX19yZXRhaW5zLmFsbC0tO1xuICAgICAgICBcbiAgICAgICAgaWYgKCAhdGhpcy5fX3JldGFpbnMuYWxsICkge1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcImRpc3Bvc2UgZG8gZGVzdHJveSBcIiwgdGhpcy5faWQsIHRoaXMuX3BlcnNpc3RlbmNlVG0pO1xuICAgICAgICAgICAgaWYgKCB0aGlzLl8ucGVyc2lzdGVuY2VUbSApIHtcbiAgICAgICAgICAgICAgICB0aGlzLl8uZGVzdHJveVRNICYmIGNsZWFyVGltZW91dCh0aGlzLl8uZGVzdHJveVRNKTtcbiAgICAgICAgICAgICAgICB0aGlzLl8uZGVzdHJveVRNID0gc2V0VGltZW91dChcbiAgICAgICAgICAgICAgICAgICAgZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRoZW4ocyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIXRoaXMuX19yZXRhaW5zLmFsbCAmJiB0aGlzLmRlc3Ryb3koKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuXy5wZXJzaXN0ZW5jZVRtXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMudGhlbihzID0+ICghdGhpcy5fX3JldGFpbnMuYWxsICYmIHRoaXMuZGVzdHJveSgpKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogb3JkZXIgZGVzdHJveSBvZiBsb2NhbCBzdG9yZXNcbiAgICAgKi9cbiAgICBkZXN0cm95KCkge1xuICAgICAgICBsZXQgY3R4ICAgPSB0aGlzLl8uX3Njb3BlO1xuICAgICAgICAvL2NvbnNvbGUud2FybihcImRlc3Ryb3lcIiwgdGhpcy5faWQpO1xuICAgICAgICB0aGlzLmRlYWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmVtaXQoXCJkZXN0cm95XCIsIHRoaXMpO1xuICAgICAgICBPYmplY3Qua2V5cyhcbiAgICAgICAgICAgIHRoaXMuXy5fbGlzdGVuaW5nXG4gICAgICAgICkuZm9yRWFjaChcbiAgICAgICAgICAgIGlkID0+IHRoaXMuXy5fc2NvcGVbaWRdLnJlbW92ZUxpc3RlbmVyKHRoaXMuXy5fbGlzdGVuaW5nW2lkXSlcbiAgICAgICAgKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuXy5zdGFiaWxpemVyVE0gJiYgY2xlYXJUaW1lb3V0KHRoaXMuXy5zdGFiaWxpemVyVE0pO1xuICAgICAgICB0aGlzLl8ucHJvcGFnVE0gJiYgY2xlYXJUaW1lb3V0KHRoaXMuXy5wcm9wYWdUTSk7XG4gICAgICAgIFxuICAgICAgICBpZiAoICF0aGlzLl8uaXNMb2NhbElkIClcbiAgICAgICAgICAgIGRlbGV0ZSBvcGVuU2NvcGVzW3RoaXMuX2lkXTtcbiAgICAgICAgdGhpcy5fLmZvbGxvd2Vycy5sZW5ndGggPSAwO1xuICAgICAgICBcbiAgICAgICAgd2hpbGUgKCB0aGlzLl8uX21peGVkTGlzdC5sZW5ndGggKSB7XG4gICAgICAgICAgICB0aGlzLl8uX21peGVkWzBdLnJlbW92ZUxpc3RlbmVyKHRoaXMuXy5fbWl4ZWRMaXN0LnNoaWZ0KCkpO1xuICAgICAgICAgICAgdGhpcy5fLl9taXhlZC5zaGlmdCgpLmRpc3Bvc2UoXCJtaXhlZFRvXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICggdGhpcy5fLl9wYXJlbnRMaXN0ICkge1xuICAgICAgICAgICAgdGhpcy5wYXJlbnQuX3JtQ2hpbGQodGhpcyk7XG4gICAgICAgICAgICB0aGlzLnBhcmVudC5yZW1vdmVMaXN0ZW5lcih0aGlzLl8uX3BhcmVudExpc3QpO1xuICAgICAgICAgICAgdGhpcy5wYXJlbnQuZGlzcG9zZShcImlzTXlQYXJlbnRcIik7XG4gICAgICAgICAgICB0aGlzLl8uX3BhcmVudExpc3QgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoIGxldCBrZXkgaW4gY3R4IClcbiAgICAgICAgICAgIGlmICggIWlzLmZuKGN0eFtrZXldKSApIHtcbiAgICAgICAgICAgICAgICAhY3R4W2tleV0uX2F1dG9EZXN0cm95ICYmIGN0eFtrZXldLmRpc3Bvc2UoXCJzY29wZWRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIHRoaXMuXyA9IG51bGw7XG4gICAgICAgIFxuICAgICAgICBcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1Njb3BlLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaXNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJpc1wiXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpICAyMDE4IFdpc2UgV2lsZCBXZWIgLlxuICpcbiAqICBNSVQgTGljZW5zZVxuICogIFxuICogIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqICBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiAgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqICBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqICBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICogIFxuICogIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuICogIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKiAgXG4gKiAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqICBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG4gKiAgU09GVFdBUkUuXG4gKiAgXG4gKiBAYXV0aG9yIDogTmF0aGFuYWVsIEJyYXVuXG4gKiBAY29udGFjdCA6IGNhaXBpbGFic0BnbWFpbC5jb21cbiAqL1xudmFyIGlzID0gcmVxdWlyZSgnaXMnKTtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVtaXR0ZXIge1xuICAgIF9ldmVudHMgPSB7fTtcbiAgICBcbiAgICBvbiggZXZ0LCBjYiApIHtcbiAgICAgICAgaWYgKCAhaXMuc3RyaW5nKGV2dCkgJiYgZXZ0IClcbiAgICAgICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhldnQpLmZvckVhY2goayA9PiB0aGlzLm9uKGssIGV2dFtrXSkpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fZXZlbnRzW2V2dF0gPSB0aGlzLl9ldmVudHNbZXZ0XSB8fCBbXTtcbiAgICAgICAgdGhpcy5fZXZlbnRzW2V2dF0ucHVzaChjYik7XG4gICAgICAgIFxuICAgIH1cbiAgICBcbiAgICB1biggZXZ0LCBjYiApIHtcbiAgICAgICAgaWYgKCAhaXMuc3RyaW5nKGV2dCkgJiYgZXZ0IClcbiAgICAgICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhldnQpLmZvckVhY2goayA9PiB0aGlzLnVuKGssIGV2dFtrXSkpO1xuICAgICAgICBcbiAgICAgICAgaWYgKCAhdGhpcy5fZXZlbnRzW2V2dF0gKSByZXR1cm47XG4gICAgICAgIHZhciBpID0gdGhpcy5fZXZlbnRzW2V2dF0uaW5kZXhPZihjYik7XG4gICAgICAgIHRoaXMuX2V2ZW50c1tldnRdLnNwbGljZShpLCAxKTtcbiAgICB9XG4gICAgXG4gICAgZW1pdCggZXZ0LCAuLi5hcmd6ICkge1xuICAgICAgICBpZiAoICF0aGlzLl9ldmVudHNbZXZ0XSApIHJldHVybjtcbiAgICAgICAgbGV0IGxpc3RzID0gWy4uLnRoaXMuX2V2ZW50c1tldnRdXTtcbiAgICAgICAgXG4gICAgICAgIGZvciAoIHZhciBpID0gMDsgaSA8IGxpc3RzLmxlbmd0aDsgaSsrIClcbiAgICAgICAgICAgIGxpc3RzW2ldKC4uLmFyZ3opXG4gICAgfVxuICAgIFxuICAgIGFkZExpc3RlbmVyKCkge1xuICAgICAgICB0aGlzLm9uKC4uLmFyZ3VtZW50cyk7XG4gICAgfVxuICAgIFxuICAgIHJlbW92ZUxpc3RlbmVyKCkge1xuICAgICAgICB0aGlzLnVuKC4uLmFyZ3VtZW50cyk7XG4gICAgfVxuICAgIFxuICAgIHJlbW92ZUFsbExpc3RlbmVycygpIHtcbiAgICAgICAgdGhpcy5fZXZlbnRzID0ge307XG4gICAgfVxuICAgIFxuICAgIG9uY2UoIGV2dCwgY2IgKSB7XG4gICAgICAgIGxldCBmbjtcbiAgICAgICAgdGhpcy5vbihldnQsIGZuID0gKCAuLi5hcmd6ICkgPT4ge1xuICAgICAgICAgICAgdGhpcy51bihldnQsIGZuKTtcbiAgICAgICAgICAgIGNiKC4uLmFyZ3opXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBcbiAgICBcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvRW1pdHRlci5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNob3J0aWRcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJzaG9ydGlkXCJcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcbiAqIENvcHlyaWdodCAoYykgIDIwMTggV2lzZSBXaWxkIFdlYiAuXG4gKlxuICogIE1JVCBMaWNlbnNlXG4gKlxuICogIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqICBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiAgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqICBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqICBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqICBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcbiAqICBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqICBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiAgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiAgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiAgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiAgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcbiAqICBTT0ZUV0FSRS5cbiAqXG4gKiBAYXV0aG9yIDogTmF0aGFuYWVsIEJyYXVuXG4gKiBAY29udGFjdCA6IGNhaXBpbGFic0BnbWFpbC5jb21cbiAqL1xuXG4vKipcbiAqIFVsdHJhIHNjYWxhYmxlIHN0YXRlLWF3YXJlIHN0b3JlXG4gKlxuICogQHRvZG8gOiBsb3Qgb2Ygb3B0aW1zLi4uXG4gKi9cblxudmFyIGlzICAgICAgICAgICAgPSByZXF1aXJlKCdpcycpLFxuICAgIFNjb3BlICAgICAgICAgPSByZXF1aXJlKCcuL1Njb3BlJyksXG4gICAgRXZlbnRFbWl0dGVyICA9IHJlcXVpcmUoJy4vRW1pdHRlcicpLFxuICAgIFRhc2tTZXF1ZW5jZXIgPSByZXF1aXJlKCcuL1Rhc2tTZXF1ZW5jZXInKSxcbiAgICBzaG9ydGlkICAgICAgID0gcmVxdWlyZSgnc2hvcnRpZCcpLFxuICAgIG9ialByb3RvICAgICAgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Yoe30pO1xuXG4vKipcbiAqIEBjbGFzcyBTdG9yZVxuICovXG5jbGFzcyBTdG9yZSBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gICAgXG4gICAgc3RhdGljIHVzZSAgICAgICAgICAgICAgICAgID0gW107Ly8gb3ZlcnJpZGFibGUgbGlzdCBvZiBzb3VyY2Ugc3RvcmVzXG4gICAgc3RhdGljIGZvbGxvdzsvLyBvdmVycmlkYWJsZSBsaXN0IG9mIHN0b3JlIHRoYXQgd2lsbCBhbGxvdyBwdXNoIGlmIHVwZGF0ZWRcbiAgICBzdGF0aWMgcmVxdWlyZTtcbiAgICBzdGF0aWMgc3RhdGljU2NvcGUgICAgICAgICAgPSBuZXcgU2NvcGUoe30sIHsgaWQ6IFwic3RhdGljXCIgfSk7XG4gICAgc3RhdGljIHN0YXRlICAgICAgICAgICAgICAgID0gdW5kZWZpbmVkOy8vIGRlZmF1bHQgc3RhdGVcbiAgICAvKipcbiAgICAgKiBpZiByZXRhaW4gZ29lcyB0byAwIDpcbiAgICAgKiBmYWxzZSB0byBub3QgZGVzdHJveSxcbiAgICAgKiAwIHRvIHN5bmMgYXV0byBkZXN0cm95XG4gICAgICogTXMgdG8gYXV0b2Rlc3Ryb3kgYWZ0ZXIgdG0gbXMgaWYgbm8gcmV0YWluIGhhcyBiZWVuIGNhbGxlZFxuICAgICAqIEB0eXBlIHtib29sZWFufEludH1cbiAgICAgKi9cbiAgICAgICAgICAgc3RhdGljIHBlcnNpc3RlbmNlVG0gPSBmYWxzZTtcbiAgICBcbiAgICAvKipcbiAgICAgKiBnZXQgYSBCdWlsZGVyLWtleSBwYWlyIGZvciBTdG9yZTo6bWFwXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICAgKiBAcmV0dXJucyB7e3N0b3JlOiBTdG9yZSwgbmFtZTogKn19XG4gICAgICovXG4gICAgc3RhdGljIGFzKCBuYW1lICkge1xuICAgICAgICByZXR1cm4geyBzdG9yZTogdGhpcywgbmFtZSB9O1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBNYXAgYWxsIG5hbWVkIHN0b3JlcyBpbiB7a2V5c30gdG8gdGhlIHtvYmplY3R9J3Mgc3RhdGVcbiAgICAgKiBIb29rIGNvbXBvbmVudFdpbGxVbm1vdW50IChmb3IgcmVhY3QgY29tcCkgb3IgZGVzdHJveSB0byB1bkJpbmQgdGhlbSBhdXRvbWF0aWNhbGx5XG4gICAgICogQHN0YXRpY1xuICAgICAqIEBwYXJhbSBvYmplY3Qge09iamVjdH0gdGFyZ2V0IHN0YXRlIGF3YXJlIG9iamVjdCAoUmVhY3QuQ29tcG9uZW50fFN0b3JlfC4uLilcbiAgICAgKiBAcGFyYW0ga2V5cyB7QXJyYXl9IEV4IDogW1wic2Vzc2lvblwiLCBcIm90aGVyU3RhdGljTmFtZWRTdG9yZTprZXlcIiwgc3RvcmUuYXMoJ2Fub3RoZXJLZXknKV1cbiAgICAgKi9cbiAgICBzdGF0aWMgbWFwKCBjb21wb25lbnQsIGtleXMsIHNjb3BlLCBvcmlnaW4sIHNldEluaXRpYWwgPSBmYWxzZSApIHtcbiAgICAgICAgdmFyIHRhcmdldFJldnMgICAgID0gY29tcG9uZW50Ll9yZXZzIHx8IHt9O1xuICAgICAgICB2YXIgdGFyZ2V0U2NvcGUgICAgPSBjb21wb25lbnQuc3RvcmVzIHx8IChjb21wb25lbnQuc3RvcmVzID0ge30pO1xuICAgICAgICB2YXIgaW5pdGlhbE91dHB1dHMgPSB7fTtcbiAgICAgICAga2V5cyAgICAgICAgICAgICAgID0gaXMuYXJyYXkoa2V5cykgPyBbLi4ua2V5c10gOiBba2V5c107XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgc2NvcGUgPSBzY29wZSB8fCBTdG9yZS5zdGF0aWNTY29wZTtcbiAgICAgICAgXG4gICAgICAgIGtleXMgPSBrZXlzLmZpbHRlcihcbiAgICAgICAgICAgIC8vIEB0b2RvIDogdXNlIHF1ZXJ5IHJlZnNcbiAgICAgICAgICAgIC8vIChzdG9yZSkoXFwuc3RvcmUpKihcXFsoXFwqfChwcm9wcylcXHcrKSspXFxdKT8oXFw6YWxpYXMpXG4gICAgICAgICAgICAoIGtleSApID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoICFrZXkgKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJOb3QgYSBtYXBwYWJsZSBzdG9yZSBpdGVtICdcIiArIGtleSArIFwiJyBpbiBcIiArIG9yaWdpbiArICcgISEnKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZXQgbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgYWxpYXMsXG4gICAgICAgICAgICAgICAgICAgIHBhdGgsXG4gICAgICAgICAgICAgICAgICAgIHN0b3JlO1xuICAgICAgICAgICAgICAgIGlmICgga2V5LnN0b3JlICYmIGtleS5uYW1lICkge1xuICAgICAgICAgICAgICAgICAgICBhbGlhcyA9IG5hbWUgPSBrZXkubmFtZTtcbiAgICAgICAgICAgICAgICAgICAgc3RvcmUgPSBrZXkuc3RvcmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKCBpcy5mbihrZXkpICkge1xuICAgICAgICAgICAgICAgICAgICBuYW1lID0gYWxpYXMgPSBrZXkubmFtZSB8fCBrZXkuZGVmYXVsdE5hbWU7XG4gICAgICAgICAgICAgICAgICAgIHN0b3JlID0ga2V5O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAga2V5ICAgPSBrZXkubWF0Y2goLyhbXFx3X10rKSgoPzpcXC5bXFx3X10rKSopKD86XFw6KFtcXHdfXSspKT8vKTtcbiAgICAgICAgICAgICAgICAgICAgbmFtZSAgPSBrZXlbMV07XG4gICAgICAgICAgICAgICAgICAgIHBhdGggID0ga2V5WzJdICYmIGtleVsyXS5zdWJzdHIoMSk7XG4gICAgICAgICAgICAgICAgICAgIHN0b3JlID0gc2NvcGUuc3RvcmVzW2tleVsxXV07XG4gICAgICAgICAgICAgICAgICAgIGFsaWFzID0ga2V5WzNdIHx8IHBhdGggJiYgcGF0aC5tYXRjaCgvKFteXFwuXSopJC8pWzBdIHx8IGtleVsxXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKCB0YXJnZXRSZXZzW25hbWVdICkgcmV0dXJuIGZhbHNlOy8vIGlnbm9yZSBkYmwgdXNlcyBmb3Igbm93XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKCAhc3RvcmUgKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJOb3QgYSBtYXBwYWJsZSBzdG9yZSBpdGVtICdcIiArIG5hbWUgKyBcIi9cIiArIGFsaWFzICsgXCInIGluIFwiICsgKGNvbXBvbmVudC5uYW1lIHx8IGNvbXBvbmVudCkgKyAnICEhJywgc3RvcmUpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKCBpcy5mbihzdG9yZSkgKSB7XG4gICAgICAgICAgICAgICAgICAgIHNjb3BlLl9tb3VudChuYW1lKVxuICAgICAgICAgICAgICAgICAgICBzY29wZS5zdG9yZXNbbmFtZV0uYmluZChjb21wb25lbnQsIGFsaWFzLCBzZXRJbml0aWFsLCBwYXRoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHN0b3JlLmJpbmQoY29tcG9uZW50LCBhbGlhcywgc2V0SW5pdGlhbCwgcGF0aCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIGdpdmUgaW5pdGlhbCBzdG9yZSB3ZWlnaHQgYmFzaW5nIHNvdXJjZXNcbiAgICAgICAgICAgICAgICBjb21wb25lbnQuX3NvdXJjZXMucHVzaCguLi5zY29wZS5zdG9yZXNbbmFtZV0uX3NvdXJjZXMpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHRhcmdldFJldnNbYWxpYXNdID0gdGFyZ2V0UmV2c1thbGlhc10gfHwgdHJ1ZTtcbiAgICAgICAgICAgICAgICAhdGFyZ2V0U2NvcGVbbmFtZV0gJiYgKHRhcmdldFNjb3BlW25hbWVdID0gc2NvcGUuc3RvcmVzW25hbWVdKTtcbiAgICAgICAgICAgICAgICBpZiAoIHNjb3BlLnN0b3Jlc1tuYW1lXS5oYXNPd25Qcm9wZXJ0eSgnZGF0YScpIClcbiAgICAgICAgICAgICAgICAgICAgaW5pdGlhbE91dHB1dHNbbmFtZV0gPSBzY29wZS5kYXRhW25hbWVdO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICBcbiAgICAgICAgLy8gLi4uXG4gICAgICAgIHZhciBtaXhlZENXVW5tb3VudCxcbiAgICAgICAgICAgIHVuTW91bnRLZXkgPSBjb21wb25lbnQuaXNSZWFjdENvbXBvbmVudCA/IFwiY29tcG9uZW50V2lsbFVubW91bnRcIiA6IFwiZGVzdHJveVwiO1xuICAgICAgICBcbiAgICAgICAgaWYgKCBjb21wb25lbnQuaGFzT3duUHJvcGVydHkodW5Nb3VudEtleSkgKSB7XG4gICAgICAgICAgICBtaXhlZENXVW5tb3VudCA9IGNvbXBvbmVudFt1bk1vdW50S2V5XTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgY29tcG9uZW50W3VuTW91bnRLZXldID0gKCAuLi5hcmd6ICkgPT4ge1xuICAgICAgICAgICAgZGVsZXRlIGNvbXBvbmVudFt1bk1vdW50S2V5XTtcbiAgICAgICAgICAgIGlmICggbWl4ZWRDV1VubW91bnQgKVxuICAgICAgICAgICAgICAgIGNvbXBvbmVudFt1bk1vdW50S2V5XSA9IG1peGVkQ1dVbm1vdW50O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBrZXlzLm1hcChcbiAgICAgICAgICAgICAgICAoIGtleSApID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlhcywgcGF0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIGtleS5zdG9yZSAmJiBrZXkubmFtZSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWFzID0gbmFtZSA9IGtleS5uYW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmUgPSBrZXkuc3RvcmU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoIGlzLmZuKGtleSkgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lID0gYWxpYXMgPSBrZXkubmFtZSB8fCBrZXkuZGVmYXVsdE5hbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9yZSA9IHNjb3BlLnN0b3Jlc1tuYW1lXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleSAgID0ga2V5Lm1hdGNoKC8oW1xcd19dKykoKD86XFwuW1xcd19dKykqKSg/OlxcOihbXFx3X10rKSk/Lyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lICA9IGtleVsxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGggID0ga2V5WzJdICYmIGtleVsyXS5zdWJzdHIoMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9yZSA9IHNjb3BlLnN0b3Jlc1trZXlbMV1dO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpYXMgPSBrZXlbM10gfHwgcGF0aCAmJiBwYXRoLm1hdGNoKC8oW15cXC5dKikkLylbMF0gfHwga2V5WzFdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBzdG9yZSAmJiAhaXMuZm4oc3RvcmUpICYmIHN0b3JlLnVuQmluZChjb21wb25lbnQsIGFsaWFzLCBwYXRoKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICByZXR1cm4gY29tcG9uZW50W3VuTW91bnRLZXldICYmIGNvbXBvbmVudFt1bk1vdW50S2V5XSguLi5hcmd6KTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGluaXRpYWxPdXRwdXRzO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3Rvciwgd2lsbCBidWlsZCBhIHJlc2NvcGUgc3RvcmVcbiAgICAgKlxuICAgICAqIChzY29wZSwge3JlcXVpcmUsdXNlLGFwcGx5LHN0YXRlLCBkYXRhfSlcbiAgICAgKiAoc2NvcGUpXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc2NvcGUge29iamVjdH0gc2NvcGUgd2hlcmUgdG8gZmluZCB0aGUgb3RoZXIgc3RvcmVzIChkZWZhdWx0IDogc3RhdGljIHN0YXRpY1Njb3BlIClcbiAgICAgKiBAcGFyYW0ga2V5cyB7QXJyYXl9IChwYXNzZWQgdG8gU3RvcmU6Om1hcCkgRXggOiBbXCJzZXNzaW9uXCIsIFwib3RoZXJOYW1lZFN0b3JlOmtleVwiLCBvdGhlclN0b3JlLmFzKFwib3RoZXJLZXlcIildXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHZhciBhcmd6ICAgICAgICAgPSBbLi4uYXJndW1lbnRzXSxcbiAgICAgICAgICAgIF9zdGF0aWMgICAgICA9IHRoaXMuY29uc3RydWN0b3IsXG4gICAgICAgICAgICBzY29wZSAgICAgICAgPSBhcmd6WzBdIGluc3RhbmNlb2YgU2NvcGVcbiAgICAgICAgICAgICAgICA/IGFyZ3ouc2hpZnQoKVxuICAgICAgICAgICAgICAgIDogX3N0YXRpYy5zY29wZSA/IFNjb3BlLmdldFNjb3BlKF9zdGF0aWMuc2NvcGUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBpcy5zdHJpbmcoYXJnelswXSlcbiAgICAgICAgICAgICAgICAgICAgICA/IFNjb3BlLmdldFNjb3BlKGFyZ3ouc2hpZnQoKSlcbiAgICAgICAgICAgICAgICAgICAgICA6IF9zdGF0aWMuc3RhdGljU2NvcGUsXG4gICAgICAgICAgICBjZmcgICAgICAgICAgPSBhcmd6WzBdICYmICFpcy5hcnJheShhcmd6WzBdKSAmJiAhaXMuc3RyaW5nKGFyZ3pbMF0pID8gYXJnei5zaGlmdCgpIDoge30sXG4gICAgICAgICAgICBuYW1lICAgICAgICAgPSBpcy5zdHJpbmcoYXJnelswXSkgPyBhcmd6WzBdIDogY2ZnLm5hbWUgfHwgX3N0YXRpYy5uYW1lLFxuICAgICAgICAgICAgd2F0Y2hzICAgICAgID0gaXMuYXJyYXkoYXJnelswXSkgPyBhcmd6LnNoaWZ0KCkgOiBjZmcudXNlIHx8IFtdLC8vIHdhdGNocyBuZWVkIHRvIGJlIGRlZmluZWQgYWZ0ZXIgYWxsIHRoZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHN0b3JlIGFyZSByZWdpc3RlcmVkIDogc28gd2UgY2FuJ3QgZGVhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdpdGggYW55IFwic3RhdGljIHVzZVwiIGF1dG9tYXRpY2x5XG4gICAgICAgICAgICBhcHBseSAgICAgICAgPSBpcy5mbihhcmd6WzBdKSA/IGFyZ3ouc2hpZnQoKSA6IGNmZy5hcHBseSB8fCBudWxsLFxuICAgICAgICAgICAgaW5pdGlhbFN0YXRlID0gX3N0YXRpYy5zdGF0ZSB8fCBfc3RhdGljLmluaXRpYWxTdGF0ZSxcbiAgICAgICAgICAgIGFwcGxpZWQ7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl91aWQgPSBjZmcuX3VpZCB8fCBzaG9ydGlkLmdlbmVyYXRlKCk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9fcmV0YWlucyAgICA9IHsgYWxsOiAwIH07XG4gICAgICAgIHRoaXMuX19sb2NrcyAgICAgID0geyBhbGw6IDAgfTtcbiAgICAgICAgdGhpcy5fb25TdGFiaWxpemUgPSBbXTtcbiAgICAgICAgXG4gICAgICAgIC8vIGF1dG9EZXN0cm95VG1cbiAgICAgICAgdGhpcy5fYXV0b0Rlc3Ryb3kgICA9ICEhdGhpcy5fcGVyc2lzdGVuY2VUbTtcbiAgICAgICAgdGhpcy5fcGVyc2lzdGVuY2VUbSA9IGNmZy5wZXJzaXN0ZW5jZVRtIHx8IF9zdGF0aWMucGVyc2lzdGVuY2VUbSB8fCAoY2ZnLmF1dG9EZXN0cm95IHx8IF9zdGF0aWMuYXV0b0Rlc3Ryb3kpICYmIDU7XG4gICAgICAgIFxuICAgICAgICBpZiAoIGNmZyAmJiBjZmcub24gKSB7XG4gICAgICAgICAgICB0aGlzLm9uKGNmZy5vbik7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIFxuICAgICAgICBpZiAoIHNjb3BlLnN0b3JlcyApIHtcbiAgICAgICAgICAgIHRoaXMuc2NvcGVPYmogPSBzY29wZTtcbiAgICAgICAgICAgIHRoaXMuc2NvcGUgICAgPSBzY29wZS5zdG9yZXM7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNjb3BlT2JqID0gbmV3IFNjb3BlKHNjb3BlKTtcbiAgICAgICAgICAgIHRoaXMuc2NvcGUgICAgPSBzY29wZS5zdG9yZXM7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICB0aGlzLl9yZXYgICAgID0gdGhpcy5jb25zdHJ1Y3Rvci5fcmV2IHx8IDA7XG4gICAgICAgIHRoaXMuX3JldnMgICAgPSB7fTtcbiAgICAgICAgdGhpcy5zdG9yZXMgICA9IHt9O1xuICAgICAgICB0aGlzLl9yZXF1aXJlID0gW107XG4gICAgICAgIHRoaXMuX3NvdXJjZXMgPSBbbmFtZV07XG4gICAgICAgIFxuICAgICAgICBpZiAoIGlzLmFycmF5KF9zdGF0aWMudXNlKSApIHtcbiAgICAgICAgICAgIHRoaXMuX3VzZSA9IFsuLi53YXRjaHMsIC4uLihfc3RhdGljLnVzZSB8fCBbXSkubWFwKFxuICAgICAgICAgICAgICAgIGtleSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCByZWYgPSBrZXkubWF0Y2goL14oXFwhPykoW15cXDpdKikoPzpcXDooLiopKT8kLyk7XG4gICAgICAgICAgICAgICAgICAgIGlmICggcmVmWzFdICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlZjIgPSByZWZbMl0uc3BsaXQoJy4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3JlcXVpcmUucHVzaChyZWZbM10gfHwgcmVmMltyZWYyLmxlbmd0aCAtIDFdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVmWzJdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICldO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fdXNlID0gWy4uLndhdGNocywgLi4uKFxuICAgICAgICAgICAgICAgIF9zdGF0aWMudXNlID8gT2JqZWN0LmtleXMoX3N0YXRpYy51c2UpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZWYgPSBrZXkubWF0Y2goL14oXFwhPykoLiopJC8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWZbMV0gJiYgdGhpcy5fcmVxdWlyZS5wdXNoKF9zdGF0aWMudXNlW2tleV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVmWzJdICsgKChfc3RhdGljLnVzZVtrZXldID09PSB0cnVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnOicgKyBfc3RhdGljLnVzZVtrZXldKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogW11cbiAgICAgICAgICAgICldO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAoIF9zdGF0aWMucmVxdWlyZSApXG4gICAgICAgICAgICB0aGlzLl9yZXF1aXJlLnB1c2goLi4uX3N0YXRpYy5yZXF1aXJlKTtcbiAgICAgICAgaWYgKCBjZmcucmVxdWlyZSApXG4gICAgICAgICAgICB0aGlzLl9yZXF1aXJlLnB1c2goLi4uY2ZnLnJlcXVpcmUpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fZm9sbG93ZXJzID0gW107XG4gICAgICAgIFxuICAgICAgICBpZiAoIGFwcGx5IClcbiAgICAgICAgICAgIHRoaXMuYXBwbHkgPSBhcHBseTtcbiAgICAgICAgXG4gICAgICAgIGlmICggY2ZnLnNuYXBzaG90ICYmIGNmZy5zbmFwc2hvdFt0aGlzLnNjb3BlT2JqLl9pZCArICcvJyArIG5hbWVdICkge1xuICAgICAgICAgICAgdGhpcy5yZXN0b3JlKGNmZy5zbmFwc2hvdCk7XG4gICAgICAgICAgICB0aGlzLl9zdGFibGUgPSB0cnVlO1xuICAgICAgICAgICAgc2NvcGUuYmluZCh0aGlzLCB0aGlzLl91c2UsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKCBfc3RhdGljLmRhdGEgIT09IHVuZGVmaW5lZCApXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhID0geyAuLi5fc3RhdGljLmRhdGEgfTtcbiAgICAgICAgICAgIGlmICggY2ZnLmhhc093blByb3BlcnR5KFwiZGF0YVwiKSAmJiBjZmcuZGF0YSAhPT0gdW5kZWZpbmVkIClcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGEgPSBjZmcuZGF0YTtcbiAgICAgICAgICAgIGlmICggY2ZnLmhhc093blByb3BlcnR5KFwic3RhdGVcIikgJiYgY2ZnLnN0YXRlICE9PSB1bmRlZmluZWQgKVxuICAgICAgICAgICAgICAgIGluaXRpYWxTdGF0ZSA9IHsgLi4uaW5pdGlhbFN0YXRlLCAuLi5jZmcuc3RhdGUgfTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoIGluaXRpYWxTdGF0ZSB8fCB0aGlzLl91c2UubGVuZ3RoICkgey8vIHN5bmMgYXBwbHlcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgICAgICAgICAuLi4oaW5pdGlhbFN0YXRlIHx8IHt9KSxcbiAgICAgICAgICAgICAgICAgICAgLi4uc2NvcGUubWFwKHRoaXMsIHRoaXMuX3VzZSlcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGlmICggdGhpcy5zaG91bGRBcHBseSh0aGlzLnN0YXRlKSAmJiB0aGlzLmRhdGEgPT09IHVuZGVmaW5lZCApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhID0gdGhpcy5hcHBseSh0aGlzLmRhdGEsIHRoaXMuc3RhdGUsIHRoaXMuc3RhdGUpO1xuICAgICAgICAgICAgICAgICAgICBhcHBsaWVkICAgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoICh0aGlzLmRhdGEgIT09IHVuZGVmaW5lZCB8fCBhcHBsaWVkKSAmJiAhdGhpcy5fX2xvY2tzLmFsbCApIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YWJsZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLl9yZXYrKztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgaWYgKCAhX3N0YXRpYy5tYW5hZ2VkICYmICF0aGlzLnN0YXRlICYmICghdGhpcy5fdXNlIHx8ICF0aGlzLl91c2UubGVuZ3RoKSApIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCJSZXNjb3BlIHN0b3JlICdcIiwgdGhpcy5uYW1lLCBcIicgaGF2ZSBubyBpbml0aWFsIGRhdGEsIHN0YXRlIG9yIHVzZS4gSXQgY2FuJ3Qgc3RhYmlsaXplLi4uXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICF0aGlzLl9zdGFibGUgJiYgdGhpcy5lbWl0KCd1bnN0YWJsZScsIHRoaXMuc3RhdGUpO1xuICAgICAgICBcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogQGRlcHJlY2F0ZWRcbiAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgKi9cbiAgICBnZXQgY29udGV4dE9iaigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NvcGVPYmo7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIEBkZXByZWNhdGVkXG4gICAgICogQHJldHVybnMgeyp9XG4gICAgICovXG4gICAgZ2V0IGNvbnRleHQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNjb3BlO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBAZGVwcmVjYXRlZFxuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqL1xuICAgIGdldCBkYXRhcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogQGRlcHJlY2F0ZWRcbiAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgKi9cbiAgICBzZXQgZGF0YXMoIHYgKSB7XG4gICAgICAgIC8vY29uc29sZS5ncm91cENvbGxhcHNlZChcIlJlc2NvcGUgc3RvcmUgOiBTZXR0aW5nIGRhdGFzIGlzIGRlcHJlY2lhdGVkLCB1c2UgZGF0YVwiKTtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcIlJlc2NvcGUgc3RvcmUgOiBTZXR0aW5nIGRhdGFzIGlzIGRlcHJlY2lhdGVkLCB1c2UgZGF0YVwiLCAobmV3IEVycm9yKCkpLnN0YWNrKTtcbiAgICAgICAgLy9jb25zb2xlLmdyb3VwRW5kKCk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmRhdGEgPSB2O1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBPdmVycmlkYWJsZSBtZXRob2QgdG8ga25vdyBpZiBhIGRhdGEgY2hhbmdlIHNob3VsZCBiZSBwcm9wYWcgdG8gdGhlIGxpc3RlbmluZyBzdG9yZXMgJiBjb21wb25lbnRzXG4gICAgICovXG4gICAgc2hvdWxkUHJvcGFnKCBuRGF0YXMgKSB7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgXG4gICAgaGFzRGF0YUNoYW5nZSggbkRhdGFzICkge1xuICAgICAgICB2YXIgX3N0YXRpYyA9IHRoaXMuY29uc3RydWN0b3IsIHIsXG4gICAgICAgICAgICBjRGF0YXMgID0gdGhpcy5kYXRhO1xuICAgICAgICByICAgICAgICAgICA9ICFjRGF0YXMgJiYgbkRhdGFzIHx8IGNEYXRhcyAhPT0gbkRhdGFzO1xuICAgICAgICAhciAmJiBjRGF0YXMgJiYgT2JqZWN0LmtleXMoY0RhdGFzKS5mb3JFYWNoKFxuICAgICAgICAgICAgKCBrZXkgKSA9PiB7XG4gICAgICAgICAgICAgICAgciA9IHIgfHwgKG5EYXRhcyA/IGNEYXRhc1trZXldICE9PSBuRGF0YXNba2V5XSA6IGNEYXRhcyAmJiBjRGF0YXNba2V5XSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgIXIgJiYgbkRhdGFzICYmIE9iamVjdC5rZXlzKG5EYXRhcykuZm9yRWFjaChcbiAgICAgICAgICAgICgga2V5ICkgPT4ge1xuICAgICAgICAgICAgICAgIHIgPSByIHx8IChuRGF0YXMgPyBjRGF0YXNba2V5XSAhPT0gbkRhdGFzW2tleV0gOiBjRGF0YXMgJiYgY0RhdGFzW2tleV0pXG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBPdmVycmlkYWJsZSBtZXRob2QgdG8ga25vdyBpZiBhIHN0YXRlIGNoYW5nZSBzaG91bGQgYmUgYXBwbGllZFxuICAgICAqL1xuICAgIHNob3VsZEFwcGx5KCBzdGF0ZSA9IHRoaXMuc3RhdGUgKSB7XG4gICAgICAgIHZhciBfc3RhdGljID0gdGhpcy5jb25zdHJ1Y3RvcjtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAhIXRoaXMuaXNDb21wbGV0ZShzdGF0ZSlcbiAgICAgICAgKSAmJiAoaXMuYXJyYXkoX3N0YXRpYy5mb2xsb3cpXG4gICAgICAgICAgICAgICAgPyBfc3RhdGljLmZvbGxvd1xuICAgICAgICAgICAgICAgICAgICAgICAgIC5yZWR1Y2UoKCByLCBpICkgPT4gKHIgfHwgc3RhdGUgJiYgc3RhdGVbaV0pLCBmYWxzZSlcbiAgICAgICAgICAgICAgICA6IF9zdGF0aWMuZm9sbG93XG4gICAgICAgICAgICAgICAgICA/IE9iamVjdC5rZXlzKF9zdGF0aWMuZm9sbG93KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAucmVkdWNlKCggciwgaSApID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHx8IHN0YXRlICYmIGlzLmZuKF9zdGF0aWMuZm9sbG93W2ldKSAmJiBfc3RhdGljLmZvbGxvd1tpXS5jYWxsKHRoaXMsIHN0YXRlW2ldKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfHwgX3N0YXRpYy5mb2xsb3dbaV0gJiYgc3RhdGVbaV0gIT09IHRoaXMuc3RhdGVbaV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgZmFsc2UpIDogdHJ1ZVxuICAgICAgICApO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBPdmVycmlkYWJsZSBhcHBsaWVyIC8gcmVtYXBwZXJcbiAgICAgKiBJZiBzdGF0ZSBvciBsYXN0UHVibGljU3RhdGUgYXJlIHNpbXBsZSBoYXNoIG1hcHMgYXBwbHkgd2lsbCByZXR1cm4gey4uLmRhdGEsIC4uLnN0YXRlfVxuICAgICAqIGlmIG5vdCBpdCB3aWxsIHJldHVybiB0aGUgbGFzdCBwcml2YXRlIHN0YXRlXG4gICAgICogQHBhcmFtIGRhdGFcbiAgICAgKiBAcGFyYW0gc3RhdGVcbiAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgKi9cbiAgICBhcHBseSggZGF0YSwgc3RhdGUsIGNoYW5nZXMgKSB7XG4gICAgICAgIHN0YXRlID0gc3RhdGUgfHwgdGhpcy5zdGF0ZTtcbiAgICAgICAgXG4gICAgICAgIGlmICggdGhpcy5yZWZpbmUgKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVmaW5lKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIFxuICAgICAgICBpZiAoICFkYXRhIHx8IGRhdGEuX19wcm90b19fICE9PSBvYmpQcm90byB8fCBzdGF0ZS5fX3Byb3RvX18gIT09IG9ialByb3RvIClcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgcmV0dXJuIHsgLi4uZGF0YSwgLi4uc3RhdGUgfVxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBAZGVwcmVjaWF0ZWRcbiAgICAgKiBAcGFyYW0gZGF0YVxuICAgICAqIEBwYXJhbSBzdGF0ZVxuICAgICAqIEBwYXJhbSBjaGFuZ2VzXG4gICAgICogQHJldHVybnMgeyp9XG4gICAgICovXG4gICAgcmVmaW5lKCBkYXRhLCBzdGF0ZSwgY2hhbmdlcyApIHtcbiAgICAgICAgc3RhdGUgPSBzdGF0ZSB8fCB0aGlzLnN0YXRlO1xuICAgICAgICBcbiAgICAgICAgaWYgKCAhZGF0YSB8fCBkYXRhLl9fcHJvdG9fXyAhPT0gb2JqUHJvdG8gfHwgc3RhdGUuX19wcm90b19fICE9PSBvYmpQcm90byApXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHJldHVybiB7IC4uLmRhdGEsIC4uLnN0YXRlIH1cbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogRGVib3VuY2UgdGhpcyBzdG9yZSBwcm9wYWdhdGlvbiAoICYgcmVkdWNpbmcgKVxuICAgICAqIEBwYXJhbSBjYlxuICAgICAqL1xuICAgIHN0YWJpbGl6ZSggY2IgKSB7XG4gICAgICAgIGNiICYmIHRoaXMub25jZSgnc3RhYmxlJywgY2IpO1xuICAgICAgICB0aGlzLl9zdGFibGUgJiYgdGhpcy5lbWl0KCd1bnN0YWJsZScsIHRoaXMuc3RhdGUsIHRoaXMuZGF0YSk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9zdGFibGUgPSBmYWxzZTtcbiAgICAgICAgXG4gICAgICAgIGlmICggdGhpcy5fc3RhYmlsaXplciApXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9zdGFiaWxpemVyID0gVGFza1NlcXVlbmNlci5wdXNoVGFzayh0aGlzLCAncHVzaCcpO1xuICAgIH1cbiAgICBcbiAgICByZXRyaWV2ZSggcGF0aCwgaSA9IDAsIG9iaiA9IHRoaXMuZGF0YSApIHtcbiAgICAgICAgcGF0aCA9IGlzLnN0cmluZyhwYXRoKSA/IHBhdGguc3BsaXQoJy4nKSA6IHBhdGg7XG4gICAgICAgIHJldHVybiAhb2JqIHx8ICFwYXRoIHx8ICFwYXRoLmxlbmd0aFxuICAgICAgICAgICAgPyBvYmpcbiAgICAgICAgICAgIDogcGF0aC5sZW5ndGggPT0gaSArIDFcbiAgICAgICAgICAgICAgICAgICA/IG9ialtwYXRoW2ldXVxuICAgICAgICAgICAgICAgICAgIDogdGhpcy5yZXRyaWV2ZShwYXRoLCBpICsgMSwgb2JqW3BhdGhbaV1dKTtcbiAgICB9XG4gICAgXG4gICAgZGlzcGF0Y2goIGFjdGlvbiwgLi4uYXJneiApIHtcbiAgICAgICAgdGhpcy5zY29wZU9iai5kaXNwYXRjaChhY3Rpb24sIC4uLmFyZ3opO1xuICAgIH1cbiAgICBcbiAgICB0cmlnZ2VyKCBhY3Rpb24sIC4uLmFyZ3ogKSB7XG4gICAgICAgIGxldCB7IGFjdGlvbnMgfSA9IHRoaXMuY29uc3RydWN0b3I7XG4gICAgICAgIGlmICggYWN0aW9ucyAmJiBhY3Rpb25zW2FjdGlvbl0gKSB7XG4gICAgICAgICAgICBsZXQgbnMgPSBhY3Rpb25zW2FjdGlvbl0uY2FsbCh0aGlzLCAuLi5hcmd6KTtcbiAgICAgICAgICAgIG5zICYmIHRoaXMuc2V0U3RhdGUobnMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIFB1bGwgc3RvcmVzIGluIHRoZSBwcml2YXRlIHN0YXRlXG4gICAgICogQHBhcmFtIHN0b3JlcyAge0FycmF5fSAocGFzc2VkIHRvIFN0b3JlOjptYXApIEV4IDogW1wic2Vzc2lvblwiLCBcIm90aGVyTmFtZWRTdG9yZTprZXlcIiwgb3RoZXJTdG9yZS5hcyhcIm90aGVyS2V5XCIpXVxuICAgICAqL1xuICAgIHB1bGwoIHN0b3JlcywgZG9XYWl0LCBvcmlnaW4gKSB7XG4gICAgICAgIGxldCBpbml0aWFsT3V0cHV0cyA9IHRoaXMuc2NvcGVPYmoubWFwKHRoaXMsIHN0b3Jlcyk7XG4gICAgICAgIGlmICggZG9XYWl0ICkge1xuICAgICAgICAgICAgdGhpcy53YWl0KCk7XG4gICAgICAgICAgICBzdG9yZXMuZm9yRWFjaCgoIHMgKSA9PiB0aGlzLnNjb3BlW3NdICYmIHRoaXMud2FpdCh0aGlzLnNjb3BlW3NdKSk7XG4gICAgICAgICAgICB0aGlzLnJlbGVhc2UoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW5pdGlhbE91dHB1dHM7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIEFwcGx5IGFwcGx5L3JlbWFwIG9uIHRoZSBwcml2YXRlIHN0YXRlICYgcHVzaCB0aGUgcmVzdWx0aW5nIFwicHVibGljXCIgc3RhdGUgdG8gZm9sbG93ZXJzXG4gICAgICogQHBhcmFtIGNiXG4gICAgICovXG4gICAgcHVzaCggZGF0YSwgZm9yY2UsIGNiICkge1xuICAgICAgICBjYiAgICAgICAgICAgID0gZm9yY2UgPT09IHRydWUgPyBjYiA6IGZvcmNlO1xuICAgICAgICBmb3JjZSAgICAgICAgID0gZm9yY2UgPT09IHRydWU7XG4gICAgICAgIHZhciBpICAgICAgICAgPSAwLFxuICAgICAgICAgICAgbmV4dFN0YXRlID0gIWRhdGEgJiYgeyAuLi50aGlzLnN0YXRlLCAuLi50aGlzLl9jaGFuZ2VzU1cgfSB8fCB0aGlzLnN0YXRlLFxuICAgICAgICAgICAgbmV4dERhdGFzID0gZGF0YSB8fCB0aGlzLmFwcGx5KHRoaXMuZGF0YSwgbmV4dFN0YXRlLCB0aGlzLl9jaGFuZ2VzU1cpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fc3RhYmlsaXplciA9IG51bGw7XG4gICAgICAgIHRoaXMuc3RhdGUgICAgICAgPSBuZXh0U3RhdGU7XG4gICAgICAgIHRoaXMuX2NoYW5nZXNTVyAgPSB7fTtcbiAgICAgICAgaWYgKCAhZm9yY2UgJiZcbiAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgICAhdGhpcy5oYXNEYXRhQ2hhbmdlKG5leHREYXRhcylcbiAgICAgICAgICAgIClcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBjYiAmJiBjYigpO1xuICAgICAgICAgICAgaWYgKCAhdGhpcy5fX2xvY2tzLmFsbCApIHtcbiAgICAgICAgICAgICAgICBsZXQgc3RhYmxlICAgPSB0aGlzLl9zdGFibGU7XG4gICAgICAgICAgICAgICAgdGhpcy5fc3RhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAhc3RhYmxlICYmIHRoaXMuZW1pdCgnc3RhYmxlJywgdGhpcy5zdGF0ZSwgdGhpcy5kYXRhKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9zdGFiaWxpemVyID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy9cbiAgICAgICAgdGhpcy5kYXRhID0gbmV4dERhdGFzO1xuICAgICAgICB0aGlzLndhaXQoKTtcbiAgICAgICAgdGhpcy5yZWxlYXNlKGNiKTtcbiAgICAgICAgXG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSB0aGUgY3VycmVudCBwcml2YXRlIHN0YXRlICYgcHVzaCBpdCBvbmNlIHRoZSBzdG9yZSBpcyBzdGFibGVcbiAgICAgKiBAcGFyYW0gcFN0YXRlXG4gICAgICogQHBhcmFtIGNiXG4gICAgICovXG4gICAgc2V0U3RhdGUoIHBTdGF0ZSwgY2IsIHN5bmMgKSB7XG4gICAgICAgIHZhciBpICAgICAgID0gMCwgY2hhbmdlLFxuICAgICAgICAgICAgY2hhbmdlcyA9IHRoaXMuX2NoYW5nZXNTVyA9IHRoaXMuX2NoYW5nZXNTVyB8fCB7fTtcbiAgICAgICAgZm9yICggdmFyIGsgaW4gcFN0YXRlIClcbiAgICAgICAgICAgIGlmICggIXRoaXMuc3RhdGUgfHwgcFN0YXRlLmhhc093blByb3BlcnR5KGspXG4gICAgICAgICAgICAgICAgJiYgKFxuICAgICAgICAgICAgICAgICAgICBwU3RhdGVba10gIT0gdGhpcy5zdGF0ZVtrXVxuICAgICAgICAgICAgICAgICAgICB8fFxuICAgICAgICAgICAgICAgICAgICAodGhpcy5zdGF0ZVtrXSAmJiBwU3RhdGVba10gJiYgKHBTdGF0ZVtrXS5fcmV2ICE9IHRoaXMuX3JldnNba10pKS8vIHJldi9oYXNoIHVwZGF0ZVxuICAgICAgICAgICAgICAgICkgKSB7XG4gICAgICAgICAgICAgICAgY2hhbmdlICAgICAgICA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5fcmV2c1trXSA9IHBTdGF0ZVtrXSAmJiBwU3RhdGVba10uX3JldiB8fCB0cnVlO1xuICAgICAgICAgICAgICAgIGNoYW5nZXNba10gICAgPSBwU3RhdGVba107XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAoICF0aGlzLnNob3VsZEFwcGx5KHsgLi4udGhpcy5zdGF0ZSwgLi4uY2hhbmdlcyB9KSApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKCBzeW5jICkge1xuICAgICAgICAgICAgdGhpcy5wdXNoKCk7XG4gICAgICAgICAgICBjYiAmJiBjYigpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKCBjaGFuZ2UgKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGFiaWxpemUoY2IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBjYiAmJiBjYigpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBVcGRhdGUgdGhlIGN1cnJlbnQgcHJpdmF0ZSBzdGF0ZSAmIHB1c2ggaXQgb25jZSB0aGUgc3RvcmUgaXMgc3RhYmxlXG4gICAgICogQHBhcmFtIHBTdGF0ZVxuICAgICAqIEBwYXJhbSBjYlxuICAgICAqL1xuICAgIHNldFN0YXRlU3luYyggcFN0YXRlICkge1xuICAgICAgICB2YXIgaSAgICAgICA9IDAsIGNoYW5nZSxcbiAgICAgICAgICAgIGNoYW5nZXMgPSB0aGlzLl9jaGFuZ2VzU1cgPSB0aGlzLl9jaGFuZ2VzU1cgfHwge307XG4gICAgICAgIGZvciAoIHZhciBrIGluIHBTdGF0ZSApXG4gICAgICAgICAgICBpZiAoICF0aGlzLnN0YXRlIHx8IHBTdGF0ZS5oYXNPd25Qcm9wZXJ0eShrKVxuICAgICAgICAgICAgICAgICYmIChcbiAgICAgICAgICAgICAgICAgICAgcFN0YXRlW2tdICE9IHRoaXMuc3RhdGVba11cbiAgICAgICAgICAgICAgICAgICAgfHxcbiAgICAgICAgICAgICAgICAgICAgKHRoaXMuc3RhdGVba10gJiYgcFN0YXRlW2tdICYmIChwU3RhdGVba10uX3JldiAhPSB0aGlzLl9yZXZzW2tdKSkvLyByZXYvaGFzaCB1cGRhdGVcbiAgICAgICAgICAgICAgICApICkge1xuICAgICAgICAgICAgICAgIGNoYW5nZSAgICAgICAgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuX3JldnNba10gPSBwU3RhdGVba10gJiYgcFN0YXRlW2tdLl9yZXYgfHwgdHJ1ZTtcbiAgICAgICAgICAgICAgICBjaGFuZ2VzW2tdICAgID0gcFN0YXRlW2tdO1xuICAgICAgICAgICAgfVxuICAgICAgICB0aGlzLnNob3VsZEFwcGx5KHsgLi4uKHRoaXMuc3RhdGUgfHwge30pLCAuLi5jaGFuZ2VzIH0pICYmIHRoaXMucHVzaCgpO1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBSZXBsYWNlIHRoZSBjdXJyZW50IHByaXZhdGUgc3RhdGUgJiBwdXNoIGl0IG9uY2UgdGhlIHN0b3JlIGlzIHN0YWJsZVxuICAgICAqIEBwYXJhbSBwU3RhdGVcbiAgICAgKiBAcGFyYW0gY2JcbiAgICAgKi9cbiAgICByZXBsYWNlU3RhdGUoIHBTdGF0ZSwgY2IgKSB7XG4gICAgICAgIHZhciBpICAgICAgPSAwLCBtZSA9IHRoaXM7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBwU3RhdGU7XG4gICAgICAgIFxuICAgICAgICB0aGlzLnN0YWJpbGl6ZShjYik7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIGdldCBhIHN0b3JlLWtleSBwYWlyIGZvciBTdG9yZTo6bWFwXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICAgKiBAcmV0dXJucyB7e3N0b3JlOiBTdG9yZSwgbmFtZTogKn19XG4gICAgICovXG4gICAgYXMoIG5hbWUgKSB7XG4gICAgICAgIHJldHVybiB7IHN0b3JlOiB0aGlzLCBuYW1lIH07XG4gICAgfVxuICAgIFxuICAgIG9uKCBsaXN0cyApIHtcbiAgICAgICAgaWYgKCAhaXMuc3RyaW5nKGxpc3RzKSAmJiBsaXN0cyApXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhsaXN0cykuZm9yRWFjaChrID0+IHN1cGVyLm9uKGssIGxpc3RzW2tdKSk7XG4gICAgICAgIGVsc2Ugc3VwZXIub24oLi4uYXJndW1lbnRzKTtcbiAgICB9XG4gICAgXG4gICAgcmVtb3ZlTGlzdGVuZXIoIGxpc3RzICkge1xuICAgICAgICBpZiAoICFpcy5zdHJpbmcobGlzdHMpICYmIGxpc3RzIClcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGxpc3RzKS5mb3JFYWNoKGsgPT4gc3VwZXIucmVtb3ZlTGlzdGVuZXIoaywgbGlzdHNba10pKTtcbiAgICAgICAgZWxzZSBzdXBlci5yZW1vdmVMaXN0ZW5lciguLi5hcmd1bWVudHMpO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiByZWxpbmsgYmluZGluZ3MgJiByZXF1aXJlc1xuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gICAgICogQHJldHVybnMge3tzdG9yZTogU3RvcmUsIG5hbWU6ICp9fVxuICAgICAqL1xuICAgIHJlbGluayggZnJvbSApIHtcbiAgICAgICAgbGV0IHNjb3BlICAgPSB0aGlzLnNjb3BlT2JqLFxuICAgICAgICAgICAgX3N0YXRpYyA9IHRoaXMuY29uc3RydWN0b3I7XG4gICAgICAgIGlmICggX3N0YXRpYy51c2UgKSB7XG4gICAgICAgICAgICAvL3RvZG8gdW5saW5rXG4gICAgICAgICAgICB0aGlzLnB1bGwoX3N0YXRpYy51c2UsIGZhbHNlLCBmcm9tKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKCB0aGlzLl9yZXF1aXJlICkge1xuICAgICAgICAgICAgdGhpcy5fcmVxdWlyZS5mb3JFYWNoKFxuICAgICAgICAgICAgICAgIHN0b3JlID0+IChcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53YWl0KHNjb3BlLl9fc2NvcGVbc3RvcmVdKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogaXMgY29tcGxldGUgKGFsbCByZXF1aWVyZWQga2V5cyBhcmUgaGVyZSlcbiAgICAgKiBAcmV0dXJucyBib29sXG4gICAgICovXG4gICAgaXNDb21wbGV0ZSggc3RhdGUgPSB0aGlzLnN0YXRlICkge1xuICAgICAgICB2YXIgX3N0YXRpYyA9IHRoaXMuY29uc3RydWN0b3I7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAhdGhpcy5fcmVxdWlyZVxuICAgICAgICAgICAgfHwgIXRoaXMuX3JlcXVpcmUubGVuZ3RoXG4gICAgICAgICAgICB8fCBzdGF0ZSAmJiB0aGlzLl9yZXF1aXJlLnJlZHVjZShcbiAgICAgICAgICAgICAgICAoIHIsIGtleSApID0+IChyICYmIHN0YXRlW2tleV0pLFxuICAgICAgICAgICAgICAgIHRydWVcbiAgICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogaXMgc3RhYmxlXG4gICAgICogQHJldHVybnMgYm9vbFxuICAgICAqL1xuICAgIGlzU3RhYmxlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc3RhYmxlO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBpcyBzdGFibGVcbiAgICAgKiBAcmV0dXJucyBib29sXG4gICAgICovXG4gICAgc2VyaWFsaXplKCBvdXRwdXQgPSB7fSwgY29tcGxldGVTdGF0ZSApIHtcbiAgICAgICAgbGV0IHJlZnMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA9XG4gICAgICAgICAgICAgICAgdGhpcy5fdXNlLnJlZHVjZShcbiAgICAgICAgICAgICAgICAgICAgKCBtYXAsIGtleSApID0+IHsvL3RvZG9cbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWFzLCBwYXRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBrZXkuc3RvcmUgJiYga2V5Lm5hbWUgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpYXMgPSBuYW1lID0ga2V5Lm5hbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICggaXMuZm4oa2V5KSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lID0gYWxpYXMgPSBrZXkubmFtZSB8fCBrZXkuZGVmYXVsdE5hbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXkgICA9IGtleS5tYXRjaCgvKFtcXHdfXSspKCg/OlxcLltcXHdfXSspKikoPzpcXDooW1xcd19dKykpPy8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUgID0ga2V5WzFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGggID0ga2V5WzJdICYmIGtleVsyXS5zdWJzdHIoMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpYXMgPSBrZXlbM10gfHwgcGF0aCAmJiBwYXRoLm1hdGNoKC8oW15cXC5dKikkLylbMF0gfHwga2V5WzFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICggIXRoaXMuc2NvcGVPYmouc3RvcmVzW25hbWVdLnNjb3BlT2JqLl8uaXNMb2NhbElkIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXBbYWxpYXNdID0gdGhpcy5zY29wZU9iai5zdG9yZXNbbmFtZV0uc2NvcGVPYmouX2lkICsgJy8nICsgbmFtZTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWFwO1xuICAgICAgICAgICAgICAgICAgICB9LCB7fVxuICAgICAgICAgICAgICAgICkgfHwge307XG4gICAgICAgIG91dHB1dFt0aGlzLnNjb3BlT2JqLl9pZCArICcvJyArIHRoaXMubmFtZV0gPSB7XG4gICAgICAgICAgICBzdGF0ZTogY29tcGxldGVTdGF0ZVxuICAgICAgICAgICAgICAgID8geyAuLi50aGlzLnN0YXRlIH1cbiAgICAgICAgICAgICAgICA6IE9iamVjdC5rZXlzKHRoaXMuc3RhdGUpLnJlZHVjZSgoIGgsIGsgKSA9PiAoIXJlZnNba10gJiYgKGhba10gPSB0aGlzLnN0YXRlW2tdKSwgaCksIHt9KSxcbiAgICAgICAgICAgIGRhdGEgOiB0aGlzLmRhdGEsXG4gICAgICAgICAgICByZWZzXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIGlzIHN0YWJsZVxuICAgICAqIEByZXR1cm5zIGJvb2xcbiAgICAgKi9cbiAgICByZXN0b3JlKCBzbmFwc2hvdCApIHtcbiAgICAgICAgbGV0IHNuYXAgPSBzbmFwc2hvdFt0aGlzLnNjb3BlT2JqLl9pZCArICcvJyArIHRoaXMubmFtZV07XG4gICAgICAgIGlmICggc25hcCApIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBzbmFwLnN0YXRlO1xuICAgICAgICAgICAgT2JqZWN0LmtleXMoc25hcC5yZWZzKS5mb3JFYWNoKFxuICAgICAgICAgICAgICAgICgga2V5ICkgPT4gey8vdG9kb1xuICAgICAgICAgICAgICAgICAgICBpZiAoIHNuYXBzaG90W3NuYXAucmVmc1trZXldXSApXG4gICAgICAgICAgICAgICAgICAgICAgICBzbmFwLnN0YXRlW2tleV0gPSBzbmFwc2hvdFtzbmFwLnJlZnNba2V5XV0uZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdub3QgZm91bmQgOiAnLCBrZXksIHNuYXAucmVmc1trZXldKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5kYXRhID0gc25hcC5kYXRhO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIFVuIGJpbmQgdGhpcyBzdG9yZSBvZmYgdGhlIGdpdmVuIGNvbXBvbmVudC1rZXlcbiAgICAgKiBAcGFyYW0gb2JqXG4gICAgICogQHBhcmFtIGtleVxuICAgICAqIEByZXR1cm5zIHtBcnJheS48Kj59XG4gICAgICovXG4gICAgdW5CaW5kKCBvYmosIGtleSwgcGF0aCApIHtcbiAgICAgICAgdmFyIGZvbGxvd2VycyA9IHRoaXMuX2ZvbGxvd2VycyxcbiAgICAgICAgICAgIGkgICAgICAgICA9IGZvbGxvd2VycyAmJiBmb2xsb3dlcnMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGZvbGxvd2VycyAmJiBpLS0gKVxuICAgICAgICAgICAgaWYgKCBmb2xsb3dlcnNbaV1bMF0gPT09IG9iaiAmJiBmb2xsb3dlcnNbaV1bMV0gPT09IGtleSAmJiBmb2xsb3dlcnNbaV1bMl0gPT09IHBhdGggKVxuICAgICAgICAgICAgICAgIHJldHVybiBmb2xsb3dlcnMuc3BsaWNlKGksIDEpO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBCaW5kIHRoaXMgc3RvcmUgY2hhbmdlcyB0byB0aGUgZ2l2ZW4gY29tcG9uZW50LWtleVxuICAgICAqIEBwYXJhbSBvYmoge1JlYWN0LkNvbXBvbmVudHxTdG9yZXxmdW5jdGlvbilcbiAgICAgKiBAcGFyYW0ga2V5IHtzdHJpbmd9IG9wdGlvbmFsIGtleSB3aGVyZSB0byBtYXAgdGhlIHB1YmxpYyBzdGF0ZVxuICAgICAqL1xuICAgIGJpbmQoIG9iaiwga2V5LCBzZXRJbml0aWFsID0gdHJ1ZSwgcGF0aCApIHtcbiAgICAgICAgdGhpcy5fZm9sbG93ZXJzLnB1c2goW29iaiwga2V5LCBwYXRoXSk7XG4gICAgICAgIGlmICggc2V0SW5pdGlhbCAmJiB0aGlzLmRhdGEgJiYgdGhpcy5fc3RhYmxlICkge1xuICAgICAgICAgICAgbGV0IGRhdGEgPSBwYXRoID8gdGhpcy5yZXRyaWV2ZShwYXRoKSA6IHRoaXMuZGF0YTtcbiAgICAgICAgICAgIGlmICggdHlwZW9mIG9iaiAhPSBcImZ1bmN0aW9uXCIgKSB7XG4gICAgICAgICAgICAgICAgaWYgKCBrZXkgKSBvYmouc2V0U3RhdGUoeyBba2V5XTogZGF0YSB9KTtcbiAgICAgICAgICAgICAgICBlbHNlIG9iai5zZXRTdGF0ZShkYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIG9iaihkYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBvbmNlKCdzdGFibGUnLCBjYilcbiAgICAgKiBAcGFyYW0gb2JqIHtSZWFjdC5Db21wb25lbnR8U3RvcmV8ZnVuY3Rpb24pXG4gICAgICogQHBhcmFtIGtleSB7c3RyaW5nfSBvcHRpb25hbCBrZXkgd2hlcmUgdG8gbWFwIHRoZSBwdWJsaWMgc3RhdGVcbiAgICAgKi9cbiAgICB0aGVuKCBjYiApIHtcbiAgICAgICAgaWYgKCB0aGlzLl9zdGFibGUgKVxuICAgICAgICAgICAgcmV0dXJuIGNiKG51bGwsIHRoaXMuZGF0YSk7XG4gICAgICAgIHRoaXMub25jZSgnc3RhYmxlJywgZSA9PiBjYihudWxsLCB0aGlzLmRhdGEpKTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogQWRkIGEgbG9jayBzbyB0aGUgc3RvcmUgd2lsbCBub3QgcHJvcGFnIGl0IGRhdGEgdW50aWxsIHJlbGVhc2UoKSBpcyBjYWxsXG4gICAgICogQHBhcmFtIHByZXZpb3VzIHtTdG9yZXxudW1iZXJ8QXJyYXl9IEBvcHRpb25hbCB3ZiB0byB3YWl0LCByZWxlYXNlcyB0byB3YWl0IG9yIGFycmF5IG9mIHN0dWZmIHRvIHdhaXRcbiAgICAgKiBAcmV0dXJucyB7VGFza0Zsb3d9XG4gICAgICovXG4gICAgd2FpdCggcHJldmlvdXMgKSB7XG4gICAgICAgIGlmICggdHlwZW9mIHByZXZpb3VzID09IFwibnVtYmVyXCIgKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX19sb2Nrcy5hbGwgKz0gcHJldmlvdXM7XG4gICAgICAgIGlmICggaXMuYXJyYXkocHJldmlvdXMpIClcbiAgICAgICAgICAgIHJldHVybiBwcmV2aW91cy5tYXAodGhpcy53YWl0LmJpbmQodGhpcykpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fc3RhYmxlICYmIHRoaXMuZW1pdCgndW5zdGFibGUnLCB0aGlzLnN0YXRlLCB0aGlzLmRhdGEpO1xuICAgICAgICB0aGlzLl9zdGFibGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fX2xvY2tzLmFsbCsrO1xuICAgICAgICBcbiAgICAgICAgbGV0IHJlYXNvbiA9IGlzLnN0cmluZyhwcmV2aW91cykgPyBwcmV2aW91cyA6IG51bGw7XG4gICAgICAgIGlmICggcmVhc29uICkge1xuICAgICAgICAgICAgdGhpcy5fX2xvY2tzW3JlYXNvbl0gPSB0aGlzLl9fbG9ja3NbcmVhc29uXSB8fCAwO1xuICAgICAgICAgICAgdGhpcy5fX2xvY2tzW3JlYXNvbl0rKztcbiAgICAgICAgfVxuICAgICAgICBpZiAoIHByZXZpb3VzICYmIGlzLmZuKHByZXZpb3VzLnRoZW4pICkge1xuICAgICAgICAgICAgcHJldmlvdXMudGhlbih0aGlzLnJlbGVhc2UuYmluZCh0aGlzLCBudWxsKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIERlY3JlYXNlIGxvY2tzIGZvciB0aGlzIHN0b3JlLCBpZiBpdCByZWFjaCAwICxcbiAgICAgKiBpdCB3aWxsIGJlIHByb3BhZ2F0ZWQgdG8gdGhlIGZvbGxvd2VycyxcbiAgICAgKiB0aGVuLCBhbGwgc3R1ZmYgcGFzc2VkIHRvIFwidGhlblwiIGNhbGwgYmFjayB3aWxsIGJlIGV4ZWMgLyByZWxlYXNlZFxuICAgICAqIEBwYXJhbSBkZXN5bmNcbiAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgKi9cbiAgICByZWxlYXNlKCByZWFzb24sIGNiICkge1xuICAgICAgICB2YXIgX3N0YXRpYyA9IHRoaXMuY29uc3RydWN0b3IsIG1lID0gdGhpcztcbiAgICAgICAgbGV0IGkgICAgICAgPSAwLCB3YXNTdGFibGUgPSB0aGlzLl9zdGFibGU7XG4gICAgICAgIFxuICAgICAgICBpZiAoIGlzLmZuKHJlYXNvbikgKSB7XG4gICAgICAgICAgICBjYiAgICAgPSByZWFzb247XG4gICAgICAgICAgICByZWFzb24gPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAoIHJlYXNvbiApIHtcbiAgICAgICAgICAgIGlmICggdGhpcy5fX2xvY2tzW3JlYXNvbl0gPT0gMCApXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlJlbGVhc2UgbW9yZSB0aGFuIGxvY2tpbmcgIVwiLCByZWFzb24pO1xuICAgICAgICAgICAgdGhpcy5fX2xvY2tzW3JlYXNvbl0gPSB0aGlzLl9fbG9ja3NbcmVhc29uXSB8fCAwO1xuICAgICAgICAgICAgdGhpcy5fX2xvY2tzW3JlYXNvbl0tLTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKCAhcmVhc29uICYmIHRoaXMuX19sb2Nrcy5hbGwgPT0gMCApXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiUmVsZWFzZSBtb3JlIHRoYW4gbG9ja2luZyAhXCIpO1xuICAgICAgICBcbiAgICAgICAgaWYgKCAhLS10aGlzLl9fbG9ja3MuYWxsICYmIHRoaXMuaXNDb21wbGV0ZSgpICkge1xuICAgICAgICAgICAgbGV0IHByb3BhZyAgID0gdGhpcy5zaG91bGRQcm9wYWcodGhpcy5kYXRhKTtcbiAgICAgICAgICAgIHRoaXMuX3N0YWJsZSA9IHRydWU7XG4gICAgICAgICAgICBwcm9wYWcgJiYgdGhpcy5fcmV2Kys7Ly9cbiAgICAgICAgICAgIGlmICggcHJvcGFnICYmIHRoaXMuX2ZvbGxvd2Vycy5sZW5ndGggKVxuICAgICAgICAgICAgICAgIHRoaXMuX2ZvbGxvd2Vycy5mb3JFYWNoKGZ1bmN0aW9uIHByb3BhZyggZm9sbG93ZXIgKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0gZm9sbG93ZXJbMl0gPyBtZS5yZXRyaWV2ZShmb2xsb3dlclsyXSkgOiBtZS5kYXRhO1xuICAgICAgICAgICAgICAgICAgICAvL2lmICggIWRhdGEgKSByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpZiAoIHR5cGVvZiBmb2xsb3dlclswXSA9PSBcImZ1bmN0aW9uXCIgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb2xsb3dlclswXShkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY2IgJiYgaSsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9sbG93ZXJbMF0uc2V0U3RhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGZvbGxvd2VyWzFdKSA/IHsgW2ZvbGxvd2VyWzFdXTogZGF0YSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogZGF0YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vY2IgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICgpID0+ICghKC0taSkgJiYgY2IoKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLylcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vZWxzZVxuICAgICAgICAgICAgIXdhc1N0YWJsZSAmJiB0aGlzLmVtaXQoJ3N0YWJsZScsIHRoaXMuZGF0YSk7XG4gICAgICAgICAgICBwcm9wYWcgJiYgdGhpcy5lbWl0KCd1cGRhdGUnLCB0aGlzLmRhdGEpO1xuICAgICAgICAgICAgY2IgJiYgY2IoKVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgY2IgJiYgdGhpcy50aGVuKGNiKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIFxuICAgIHJldGFpbiggcmVhc29uICkge1xuICAgICAgICB0aGlzLl9fcmV0YWlucy5hbGwrKztcbiAgICAgICAgaWYgKCByZWFzb24gKSB7XG4gICAgICAgICAgICB0aGlzLl9fcmV0YWluc1tyZWFzb25dID0gdGhpcy5fX3JldGFpbnNbcmVhc29uXSB8fCAwO1xuICAgICAgICAgICAgdGhpcy5fX3JldGFpbnNbcmVhc29uXSsrO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGRpc3Bvc2UoIHJlYXNvbiApIHtcbiAgICAgICAgLy9jb25zb2xlLndhcm4oXCJkaXNwb3NlXCIsIHJlYXNvbiwgdGhpcy5fX3JldGFpbnMpO1xuICAgICAgICBpZiAoIHJlYXNvbiApIHtcbiAgICAgICAgICAgIGlmICggIXRoaXMuX19yZXRhaW5zW3JlYXNvbl0gKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkRpc3Bvc2UgbW9yZSB0aGFuIHJldGFpbmluZyA6IFwiICsgcmVhc29uKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5fX3JldGFpbnNbcmVhc29uXS0tO1xuICAgICAgICB9XG4gICAgICAgIGlmICggdGhpcy5fX3JldGFpbnMuYWxsID09IDAgKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRGlzcG9zZSBtb3JlIHRoYW4gcmV0YWluaW5nICFcIik7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9fcmV0YWlucy5hbGwtLTtcbiAgICAgICAgXG4gICAgICAgIGlmICggIXRoaXMuX19yZXRhaW5zLmFsbCApIHtcbiAgICAgICAgICAgIGlmICggdGhpcy5fcGVyc2lzdGVuY2VUbSApIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9kZXN0cm95VE0gJiYgY2xlYXJUaW1lb3V0KHRoaXMuX2Rlc3Ryb3lUTSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fZGVzdHJveVRNID0gc2V0VGltZW91dChcbiAgICAgICAgICAgICAgICAgICAgZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9kZXN0cm95VE0gPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50aGVuKHMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICF0aGlzLl9fcmV0YWlucy5hbGwgJiYgdGhpcy5kZXN0cm95KClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wZXJzaXN0ZW5jZVRtXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMudGhlbihzID0+ICghdGhpcy5fX3JldGFpbnMuYWxsICYmIHRoaXMuZGVzdHJveSgpKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgLy8gIGNvbnNvbGUubG9nKFwiZGVzdHJveVwiLCB0aGlzLl91aWQpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5lbWl0KCdkZXN0cm95JywgdGhpcyk7XG4gICAgICAgIGlmICggdGhpcy5fc3RhYmlsaXplciApXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5fc3RhYmlsaXplcik7XG4gICAgICAgIFxuICAgICAgICBpZiAoIHRoaXMuX2ZvbGxvd2Vycy5sZW5ndGggKVxuICAgICAgICAgICAgdGhpcy5fZm9sbG93ZXJzLmZvckVhY2goXG4gICAgICAgICAgICAgICAgKCBmb2xsb3dlciApID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCB0eXBlb2YgZm9sbG93ZXJbMF0gIT09IFwiZnVuY3Rpb25cIiApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICggZm9sbG93ZXJbMF0uc3RvcmVzIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgZm9sbG93ZXJbMF0uc3RvcmVzW2ZvbGxvd2VyWzFdXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgIHRoaXMuX2ZvbGxvd2Vycy5sZW5ndGggPSAwO1xuICAgICAgICB0aGlzLmNvbnN0cnVjdG9yLl9yZXYgID0gdGhpcy5yZXY7XG4gICAgICAgIHRoaXMuZGVhZCAgICAgICAgICAgICAgPSB0cnVlO1xuICAgICAgICB0aGlzLl9yZXZzICAgICAgICAgICAgID0gdGhpcy5kYXRhID0gdGhpcy5zdGF0ZSA9IHRoaXMuc2NvcGUgPSBudWxsO1xuICAgICAgICB0aGlzLnJlbW92ZUFsbExpc3RlbmVycygpO1xuICAgIH1cbn1cblxuXG5TdG9yZS5TZWVkID0gY2xhc3MgU2VlZFN0b3JlIGV4dGVuZHMgU3RvcmUge1xuICAgIHN0YXRpYyBTRUVEID0gdHJ1ZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RvcmU7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1N0b3JlLmpzIiwiLypcclxuICogQ29weXJpZ2h0IChjKSAgMjAxOCBXaXNlIFdpbGQgV2ViIC5cclxuICpcclxuICogIE1JVCBMaWNlbnNlXHJcbiAqXHJcbiAqICBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XHJcbiAqICBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXHJcbiAqICBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXHJcbiAqICB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXHJcbiAqICBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcclxuICogIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcbiAqXHJcbiAqICBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcclxuICogIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcbiAqXHJcbiAqICBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXHJcbiAqICBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcclxuICogIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxyXG4gKiAgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxyXG4gKiAgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcclxuICogIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXHJcbiAqICBTT0ZUV0FSRS5cclxuICpcclxuICogQGF1dGhvciA6IE5hdGhhbmFlbCBCcmF1blxyXG4gKiBAY29udGFjdCA6IGNhaXBpbGFic0BnbWFpbC5jb21cclxuICovXHJcblxyXG4vKipcclxuICogTWluaW1hbCBwdXNoIHNlcXVlbmNlciwgYXBwbHkgc3RvcmVzIHNwZWNpZmljIHRhc2sgaW4gdGhlIHJpZ2h0IG9yZGVyIChyb290IHN0b3JlcyBmaXJzdClcclxuICovXHJcbmxldCB0YXNrUXVldWUgICAgPSBbXSxcclxuICAgIGN1cldlaWdodCAgICA9IDAsXHJcbiAgICBtYXhXZWlnaHQgICAgPSAwLFxyXG4gICAgbWluV2VpZ2h0ICAgID0gMCxcclxuICAgIHRhc2tDb3VudCAgICA9IDAsXHJcbiAgICAvL2RlU3luY1N0ZXBzID0gMTAwMCxcclxuICAgIHRhc2ssXHJcbiAgICBpc1J1bm5pbmcsXHJcbiAgICBlcnJvckNhdGNoZXIgPSB7XHJcbiAgICAgICAgbGFzdEVycm9yOiBudWxsLFxyXG4gICAgICAgIGRpc3BhdGNoIDogZnVuY3Rpb24gKCBlcnJvciApIHtcclxuICAgICAgICAgICAgZXJyb3JDYXRjaGVyLmRpc2FibGUoKTtcclxuICAgICAgICAgICAgaWYgKCB0YXNrICYmIHRhc2tbMF0uaGFuZGxlRXJyb3IgKSB7XHJcbiAgICAgICAgICAgICAgICB0YXNrWzBdLmhhbmRsZUVycm9yKGVycm9yLCB0YXNrKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICggdGFzayApXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiUmVTY29wZSA6IEEgdGFzayBoYXMgZmFpbGVkICEhXCIsIHRhc2tbMV0sIFwiIG9uIFwiLCB0YXNrWzBdLm5hbWUgfHwgdGFza1swXS5jb25zdHJ1Y3Rvci5uYW1lKVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBpc1J1bm5pbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGFzayAgICAgID0gbnVsbDtcclxuICAgICAgICAgICAgcnVuTm93KCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbmFibGUgICA6ICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJylcclxuICAgICAgICAgICAgPyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCBlcnJvckNhdGNoZXIuZGlzcGF0Y2gpXHJcbiAgICAgICAgICAgIH0gOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBwcm9jZXNzLm9uKCd1bmNhdWdodEV4Y2VwdGlvbicsIGVycm9yQ2F0Y2hlci5kaXNwYXRjaCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgZGlzYWJsZSAgOiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpXHJcbiAgICAgICAgICAgID8gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgZXJyb3JDYXRjaGVyLmRpc3BhdGNoKVxyXG4gICAgICAgICAgICB9IDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcHJvY2Vzcy5yZW1vdmVMaXN0ZW5lcigndW5jYXVnaHRFeGNlcHRpb24nLCBlcnJvckNhdGNoZXIuZGlzcGF0Y2gpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICB9XHJcbjtcclxuXHJcbmZ1bmN0aW9uIHJ1bk5vdygpIHtcclxuICAgIGlmICggIWlzUnVubmluZyApIHtcclxuICAgICAgICBydW4oKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcnVuKCkge1xyXG4gICAgaXNSdW5uaW5nID0gdHJ1ZTtcclxuICAgIGVycm9yQ2F0Y2hlci5lbmFibGUoKTtcclxuICAgIHdoaWxlICggdGFza0NvdW50ICkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIHRyeSBmb3IgdGhlIGN1cnJlbnQgd2VpZ2h0XHJcbiAgICAgICAgd2hpbGUgKCAhKHRhc2tRdWV1ZVtjdXJXZWlnaHRdICYmIHRhc2tRdWV1ZVtjdXJXZWlnaHRdLmxlbmd0aCkgKVxyXG4gICAgICAgICAgICBjdXJXZWlnaHQrKztcclxuICAgICAgICBcclxuICAgICAgICB0YXNrQ291bnQtLTtcclxuICAgICAgICB0YXNrID0gdGFza1F1ZXVlW2N1cldlaWdodF0uc2hpZnQoKTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKFwiVGFzayA6IFwiLCB0YXNrWzFdLCBcIiBvbiBcIiwgdGFza1swXS5uYW1lKTtcclxuICAgICAgICB0YXNrWzBdW3Rhc2tbMV1dLmFwcGx5KHRhc2tbMF0sIHRhc2tbMl0pO1xyXG4gICAgfVxyXG4gICAgdGFzayA9IHVuZGVmaW5lZDtcclxuICAgIGVycm9yQ2F0Y2hlci5kaXNhYmxlKCk7XHJcbiAgICBcclxuICAgIGlzUnVubmluZyA9IGZhbHNlO1xyXG4gICAgaWYgKCB0YXNrQ291bnQgKSB7XHJcbiAgICAgICAgc2V0VGltZW91dChydW5Ob3cpO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgcHVzaFRhc2soIG9iaiwgZm4sIGFyZ3ogKSB7XHJcbiAgICAgICAgbGV0IHdlaWdodCA9IG9iai5fc291cmNlcyAmJiBvYmouX3NvdXJjZXMubGVuZ3RoIHx8IDEsXHJcbiAgICAgICAgICAgIHN0YWNrICA9IHRhc2tRdWV1ZVt3ZWlnaHRdID1cclxuICAgICAgICAgICAgICAgIHRhc2tRdWV1ZVt3ZWlnaHRdIHx8IFtdO1xyXG4gICAgICAgIFxyXG4gICAgICAgIG1heFdlaWdodCA9IE1hdGgubWF4KG1heFdlaWdodCwgd2VpZ2h0KTtcclxuICAgICAgICBjdXJXZWlnaHQgPSBNYXRoLm1pbihjdXJXZWlnaHQsIHdlaWdodCk7XHJcbiAgICAgICAgdGFza0NvdW50Kys7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcIlB1c2ggVGFzayA6IFwiLCBmbiwgXCIgb24gXCIsIG9iai5uYW1lLCB3ZWlnaHQpO1xyXG4gICAgICAgIHN0YWNrLnB1c2goW29iaiwgZm4sIGFyZ3pdKTtcclxuICAgICAgICBzZXRUaW1lb3V0KHJ1bk5vdyk7XHJcbiAgICAgICAgcmV0dXJuIHN0YWNrLmxlbmd0aDtcclxuICAgIH1cclxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvVGFza1NlcXVlbmNlci5qcyIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpICAyMDE4IFdpc2UgV2lsZCBXZWIgLlxuICpcbiAqICBNSVQgTGljZW5zZVxuICogIFxuICogIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqICBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiAgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqICBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqICBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICogIFxuICogIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuICogIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKiAgXG4gKiAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqICBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG4gKiAgU09GVFdBUkUuXG4gKiAgXG4gKiBAYXV0aG9yIDogTmF0aGFuYWVsIEJyYXVuXG4gKiBAY29udGFjdCA6IGNhaXBpbGFic0BnbWFpbC5jb21cbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgaXMgZnJvbSAnaXMnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFNjb3BlIGZyb20gJy4vU2NvcGUnO1xuXG5jb25zdCBTaW1wbGVPYmplY3RQcm90byA9ICh7fSkuY29uc3RydWN0b3I7XG5cbi8qKlxuICogSW5oZXJpdGFibGUgUmVTY29wZSBcIkhPQ1wiIChIaWdoIE9yZGVyIENvbXBvbmVudClcbiAqXG4gKiBAY2xhc3MgQ29tcG9uZW50XG4gKiBAZGVzYyBQYXJlbnQgUmVhY3QgQ29tcG9uZW50IHdpdGggc3RvcmUgaW5qZWN0aW9uIGluIGl0cyBzdGF0ZVxuICovXG5jbGFzcyBDb21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRpYyBjaGlsZENvbnRleHRUeXBlcyA9IHtcbiAgICAgICAgcmVzY29wZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICAgICAgJHN0b3JlczogUHJvcFR5cGVzLm9iamVjdFxuICAgIH1cbiAgICBzdGF0aWMgY29udGV4dFR5cGVzICAgICAgPSB7XG4gICAgICAgIHJlc2NvcGU6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgICAgICRzdG9yZXM6IFByb3BUeXBlcy5vYmplY3RcbiAgICB9XG4gICAgXG4gICAgY29uc3RydWN0b3IoIHAsIGN0eCwgcSApIHtcbiAgICAgICAgc3VwZXIocCwgY3R4LCBxKTtcbiAgICAgICAgbGV0IHNjb3BlICAgPVxuICAgICAgICAgICAgICAgIHAuX19zY29wZVxuICAgICAgICAgICAgICAgIHx8IGN0eC5yZXNjb3BlO1xuICAgICAgICB0aGlzLiRzY29wZSA9IHNjb3BlO1xuICAgICAgICBcbiAgICAgICAgaWYgKCB0aGlzLiRzY29wZS5kZWFkICkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlJlU2NvcGluZyB1c2luZyBkZWFkIHNjb3BlXCIpXG4gICAgICAgICAgICB0aGlzLiRzY29wZSA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRoaXMuJHN0b3JlcyA9IHRoaXMuJHNjb3BlICYmIHRoaXMuJHNjb3BlLnN0b3JlcztcbiAgICAgICAgaWYgKCB0aGlzLmNvbnN0cnVjdG9yLnVzZSApIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICAgICAgLi4udGhpcy5zdGF0ZSxcbiAgICAgICAgICAgICAgICAuLi5zY29wZS5tYXAodGhpcywgdGhpcy5jb25zdHJ1Y3Rvci51c2UgfHwgW10sIGZhbHNlKS8vIGRvbid0IGJpbmRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICggIXRoaXMuJHNjb3BlIClcbiAgICAgICAgICAgIHRoaXMucmVuZGVyID0gKCkgPT4gPGRpdj5ObyBSZXNjb3BlIGhlcmUgeyBzdXBlci5uYW1lIH08L2Rpdj5cbiAgICB9XG4gICAgXG4gICAgZGlzcGF0Y2goIC4uLmFyZ3ogKSB7XG4gICAgICAgIHRoaXMuJHNjb3BlICYmIHRoaXMuJHNjb3BlLmRpc3BhdGNoKC4uLmFyZ3opXG4gICAgfVxuICAgIFxuICAgIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgICAgaWYgKCB0aGlzLmNvbnN0cnVjdG9yLnVzZSApIHtcbiAgICAgICAgICAgIHRoaXMuJHNjb3BlLmJpbmQodGhpcywgdGhpcy5jb25zdHJ1Y3Rvci51c2UgfHwgW10sIGZhbHNlKVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICB0aGlzLmNvbnN0cnVjdG9yLnVzZVxuICAgICAgICAmJiB0aGlzLiRzY29wZS51bkJpbmQodGhpcywgdGhpcy5jb25zdHJ1Y3Rvci51c2UgfHwgW10pO1xuICAgICAgICB0aGlzLiRzY29wZSA9IG51bGw7XG4gICAgfVxuICAgIFxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMoIG5wLCBuYyApIHtcbiAgICAgICAgbGV0IG5TY29wZSA9IG5wLl9fc2NvcGVcbiAgICAgICAgICAgIHx8IG5jLnJlc2NvcGUgfHwgdGhpcy4kc2NvcGU7XG4gICAgICAgIFxuICAgICAgICBpZiAoIG5TY29wZSAhPSB0aGlzLiRzY29wZSApIHtcbiAgICAgICAgICAgIHRoaXMuY29uc3RydWN0b3IudXNlICYmIHRoaXMuJHNjb3BlLnVuQmluZCh0aGlzLCB0aGlzLmNvbnN0cnVjdG9yLnVzZSk7XG4gICAgICAgICAgICB0aGlzLiRzY29wZSA9IG5TY29wZTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKCB0aGlzLiRzY29wZS5kZWFkICkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJSZVNjb3BpbmcgdXNpbmcgZGVhZCBzY29wZVwiKVxuICAgICAgICAgICAgICAgIHRoaXMuJHN0b3JlcyA9IHRoaXMuJHNjb3BlID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuJHN0b3JlcyA9IHRoaXMuJHNjb3BlLnN0b3JlcztcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnN0cnVjdG9yLnVzZSAmJiBuU2NvcGUuYmluZCh0aGlzLCB0aGlzLmNvbnN0cnVjdG9yLnVzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgZ2V0Q2hpbGRDb250ZXh0KCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcmVzY29wZTogdGhpcy4kc2NvcGUgfHwgdGhpcy5jb250ZXh0LnJlc2NvcGUsXG4gICAgICAgICAgICAkc3RvcmVzOiB0aGlzLiRzY29wZS5zdG9yZXMgfHwgdGhpcy5jb250ZXh0LiRzdG9yZXNcbiAgICAgICAgfTtcbiAgICB9XG4gICAgXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5jaGlsZHJlbiB8fCA8ZGl2Lz5cbiAgICB9XG59O1xuXG4vKipcbiAqIFJldHVybiBhIFJlYWN0IFwiSE9DXCIgKEhpZ2ggT3JkZXIgQ29tcG9uZW50KSB0aGF0IDpcbiAqICAtIEluaGVyaXQgQmFzZUNvbXBvbmVudCxcbiAqICAtIEluamVjdCAmIG1haW50YWluIHRoZSBzdG9yZXMgaW4gQmFzZUNvbXBvbmVudDo6dXNlIGFuZC9vciAodXNlKSBpbiB0aGUgaW5zdGFuY2VzIHN0YXRlLlxuICogIC0gUHJvcGFnIChzY29wZSkgaW4gdGhlIHJldHVybmVkIFJlYWN0IENvbXBvbmVudCBjb250ZXh0XG4gKlxuICpcbiAqIEBwYXJhbSBCYXNlQ29tcG9uZW50IHtSZWFjdC5Db21wb25lbnR9IEJhc2UgUmVhY3QgQ29tcG9uZW50ICggZGVmYXVsdCA6IFJlYWN0LkNvbXBvbmVudCApXG4gKiBAcGFyYW0gc2NvcGUge1JlU2NvcGUuU2NvcGV8ZnVuY3Rpb259IHRoZSBwcm9wYWdhdGVkIFNjb3BlIHdoZXJlIHRoZSBzdG9yZXMgd2lsbCBiZSBzZWFyY2hlZFxuICogQHBhcmFtIHVzZSB7YXJyYXl9IHRoZSBsaXN0IG9mIHN0b3JlcyBpbmplY3RlZCBmcm9tIHRoZSBjdXJyZW50IHNjb3BlXG4gKiBAcGFyYW0gYWRkaXRpb25hbENvbnRleHQge09iamVjdH0gY29udGV4dCB0byBiZSBwcm9wYWdhdGVkXG4gKiBAcmV0dXJucyB7UmVTY29wZVByb3ZpZGVyfVxuICovXG5mdW5jdGlvbiByZVNjb3BlU3RhdGUoIC4uLmFyZ3ogKSB7XG4gICAgbGV0IEJhc2VDb21wb25lbnQgICAgID0gKCFhcmd6WzBdIHx8IGFyZ3pbMF0ucHJvdG90eXBlICYmIGFyZ3pbMF0ucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQpICYmIGFyZ3ouc2hpZnQoKSxcbiAgICAgICAgc2NvcGUgICAgICAgICAgICAgPSAoIWFyZ3pbMF0gfHwgYXJnelswXSBpbnN0YW5jZW9mIFNjb3BlIHx8IGlzLmZuKGFyZ3pbMF0pKSAmJiBhcmd6LnNoaWZ0KCksXG4gICAgICAgIHVzZSAgICAgICAgICAgICAgID0gKCFhcmd6WzBdIHx8IGlzLmFycmF5KGFyZ3pbMF0pKSAmJiBhcmd6LnNoaWZ0KCksXG4gICAgICAgIGFkZGl0aW9uYWxDb250ZXh0ID0gKCFhcmd6WzBdIHx8IGFyZ3pbMF0gaW5zdGFuY2VvZiBTaW1wbGVPYmplY3RQcm90bykgJiYgYXJnei5zaGlmdCgpO1xuICAgIFxuICAgIGlmICggIShCYXNlQ29tcG9uZW50ICYmIEJhc2VDb21wb25lbnQucHJvdG90eXBlICYmIEJhc2VDb21wb25lbnQucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQpICkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCBCYXNlQ29tcG9uZW50ICkge1xuICAgICAgICAgICAgcmV0dXJuIHJlU2NvcGVTdGF0ZShCYXNlQ29tcG9uZW50LCBzY29wZSwgdXNlLCBhZGRpdGlvbmFsQ29udGV4dClcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICB1c2UgICAgICAgICAgICAgICA9IFsuLi4oQmFzZUNvbXBvbmVudC51c2UgfHwgW10pLCAuLi4odXNlIHx8IFtdKV07XG4gICAgYWRkaXRpb25hbENvbnRleHQgPSBhZGRpdGlvbmFsQ29udGV4dCAmJiBPYmplY3Qua2V5cyhhZGRpdGlvbmFsQ29udGV4dCkucmVkdWNlKCggaCwgayApID0+IChoW2tdID0gUHJvcFR5cGVzLmFueSwgaCksIHt9KSB8fCB7fTtcbiAgICBcbiAgICBjbGFzcyBSZVNjb3BlUHJvdmlkZXIgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgICAgICAgc3RhdGljIGNoaWxkQ29udGV4dFR5cGVzID0ge1xuICAgICAgICAgICAgLi4uKEJhc2VDb21wb25lbnQuY2hpbGRDb250ZXh0VHlwZXMgfHwge30pLFxuICAgICAgICAgICAgLi4uKGFkZGl0aW9uYWxDb250ZXh0KSxcbiAgICAgICAgICAgIHJlc2NvcGU6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgICAgICAgICAkc3RvcmVzOiBQcm9wVHlwZXMub2JqZWN0XG4gICAgICAgIH1cbiAgICAgICAgc3RhdGljIGNvbnRleHRUeXBlcyAgICAgID0ge1xuICAgICAgICAgICAgLi4uKEJhc2VDb21wb25lbnQuY29udGV4dFR5cGVzIHx8IHt9KSxcbiAgICAgICAgICAgIC4uLihhZGRpdGlvbmFsQ29udGV4dCksXG4gICAgICAgICAgICByZXNjb3BlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgICAgICAgICAgJHN0b3JlczogUHJvcFR5cGVzLm9iamVjdFxuICAgICAgICB9XG4gICAgICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgICAgICA9IHtcbiAgICAgICAgICAgIC4uLihCYXNlQ29tcG9uZW50LmRlZmF1bHRQcm9wcyB8fCB7fSksXG4gICAgICAgIH1cbiAgICAgICAgc3RhdGljIGRpc3BsYXlOYW1lICAgICAgID0gXCJzdGF0ZVNjb3BlZChcIiArIChCYXNlQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IEJhc2VDb21wb25lbnQubmFtZSkgKyBcIilcIjtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0cnVjdG9yKCBwLCBjdHgsIHEgKSB7XG4gICAgICAgICAgICBzdXBlcihwLCBjdHgsIHEpO1xuICAgICAgICAgICAgdGhpcy4kc2NvcGUgPVxuICAgICAgICAgICAgICAgIHAuX19zY29wZVxuICAgICAgICAgICAgICAgIHx8IGlzLmZuKHNjb3BlKSAmJiBzY29wZSh0aGlzLCBwLCBjdHgpIHx8IHNjb3BlXG4gICAgICAgICAgICAgICAgfHwgY3R4LnJlc2NvcGU7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmICggdGhpcy4kc2NvcGUuZGVhZCApIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiUmVTY29waW5nIHVzaW5nIGRlYWQgc2NvcGVcIilcbiAgICAgICAgICAgICAgICB0aGlzLiRzY29wZSA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMuJHNjb3BlICYmIGlzLmZuKHNjb3BlKVxuICAgICAgICAgICAgJiYgdGhpcy4kc2NvcGUucmV0YWluKClcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy4kc3RvcmVzID0gdGhpcy4kc2NvcGUgJiYgdGhpcy4kc2NvcGUuc3RvcmVzO1xuICAgICAgICAgICAgaWYgKCB0aGlzLiRzY29wZSAmJiB1c2UubGVuZ3RoICkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUsXG4gICAgICAgICAgICAgICAgICAgIC4uLnRoaXMuJHNjb3BlLm1hcCh0aGlzLCB1c2UsIGZhbHNlKS8vIGRvbid0IGJpbmQgbm93IGR1ZSB0byBTU1JcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICggIXRoaXMuJHNjb3BlIClcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlciA9ICgpID0+IDxkaXY+Tm8gUmVTY29wZSBjb250ZXh0IGluIHsgQmFzZUNvbXBvbmVudC5uYW1lIH08L2Rpdj5cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgJGRpc3BhdGNoKCAuLi5hcmd6ICkge1xuICAgICAgICAgICAgdGhpcy4kc2NvcGUuZGlzcGF0Y2goLi4uYXJneilcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgICAgICAgaWYgKCB1c2UubGVuZ3RoICkge1xuICAgICAgICAgICAgICAgIHRoaXMuJHNjb3BlLmJpbmQodGhpcywgdXNlLCBmYWxzZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN1cGVyLmNvbXBvbmVudFdpbGxNb3VudCAmJiBzdXBlci5jb21wb25lbnRXaWxsTW91bnQoKVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgICAgIHN1cGVyLmNvbXBvbmVudFdpbGxVbm1vdW50ICYmIHN1cGVyLmNvbXBvbmVudFdpbGxVbm1vdW50KCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHVzZS5sZW5ndGggJiYgdGhpcy4kc2NvcGUudW5CaW5kKHRoaXMsIHVzZSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlzLmZuKHNjb3BlKSAmJiB0aGlzLiRzY29wZS5kaXNwb3NlKCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLiRzdG9yZXM7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy4kc2NvcGU7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMoIG5wLCBuYyApIHtcbiAgICAgICAgICAgIGxldCBuU2NvcGUgPSBucC5fX3Njb3BlXG4gICAgICAgICAgICAgICAgfHwgc2NvcGUgJiYgdGhpcy4kc2NvcGVcbiAgICAgICAgICAgICAgICB8fCBuYy5yZXNjb3BlXG4gICAgICAgICAgICAgICAgfHwgdGhpcy4kc2NvcGU7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmICggblNjb3BlICE9IHRoaXMuJHNjb3BlICkge1xuICAgICAgICAgICAgICAgIHVzZS5sZW5ndGggJiYgdGhpcy4kc2NvcGUudW5CaW5kKHRoaXMsIHVzZSk7XG4gICAgICAgICAgICAgICAgdGhpcy4kc2NvcGUgPSBuU2NvcGU7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKCB0aGlzLiRzY29wZS5kZWFkICkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiUmVTY29waW5nIHVzaW5nIGRlYWQgc2NvcGVcIilcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kc3RvcmVzID0gdGhpcy4kc2NvcGUgPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kc3RvcmVzID0gdGhpcy4kc2NvcGUuc3RvcmVzO1xuICAgICAgICAgICAgICAgICAgICB1c2UubGVuZ3RoICYmIG5TY29wZS5iaW5kKHRoaXMsIHVzZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3VwZXIuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyAmJiBzdXBlci5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5wLCBuYyk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGdldENoaWxkQ29udGV4dCgpIHtcbiAgICAgICAgICAgIGxldCBjdHggPSBzdXBlci5nZXRDaGlsZENvbnRleHQgJiYgc3VwZXIuZ2V0Q2hpbGRDb250ZXh0KCkgfHwge307XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLmN0eCxcbiAgICAgICAgICAgICAgICByZXNjb3BlOiB0aGlzLiRzY29wZSB8fCB0aGlzLmNvbnRleHQucmVzY29wZSxcbiAgICAgICAgICAgICAgICAkc3RvcmVzOiB0aGlzLiRzY29wZS5zdG9yZXMgfHwgdGhpcy5jb250ZXh0LiRzdG9yZXNcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIFJlU2NvcGVQcm92aWRlcjtcbn1cblxuLyoqXG4gKiBSZXR1cm4gYSBSZWFjdCBcIkhPQ1wiIChIaWdoIE9yZGVyIENvbXBvbmVudCkgdGhhdCA6XG4gKiAgLSBJbmplY3QgJiBtYWludGFpbiB0aGUgc3RvcmVzIGxpc3RlZCBiYXNlQ29tcG9uZW50Ojp1c2UgYW5kL29yICh1c2UpIGluIHRoZSBpbnN0YW5jZXMgcHJvcHMuXG4gKiAgLSBQcm9wYWcgKHNjb3BlKSBpbiB0aGUgcmV0dXJuZWQgUmVhY3QgQ29tcG9uZW50IGNvbnRleHRcbiAqXG4gKiBAcGFyYW0gQmFzZUNvbXBvbmVudCB7UmVhY3QuQ29tcG9uZW50fSBCYXNlIFJlYWN0IENvbXBvbmVudCAoIGRlZmF1bHQgOiBSZWFjdC5Db21wb25lbnQgKVxuICogQHBhcmFtIHNjb3BlIHtSZVNjb3BlLlNjb3BlfGZ1bmN0aW9ufSB0aGUgcHJvcGFnYXRlZCBTY29wZSB3aGVyZSB0aGUgc3RvcmVzIHdpbGwgYmUgc2VhcmNoZWQgKCBkZWZhdWx0IDogdGhlIGRlZmF1bHRcbiAqICAgICBSZVNjb3BlOjpTY29wZTo6c2NvcGVzLnN0YXRpYyBzY29wZSApXG4gKiBAcGFyYW0gdXNlIHthcnJheX0gdGhlIGxpc3Qgb2Ygc3RvcmVzIHRvIGluamVjdCBmcm9tIHRoZSBjdXJyZW50IHNjb3BlXG4gKiBAcGFyYW0gYWRkaXRpb25hbENvbnRleHQge09iamVjdH0gY29udGV4dCB0byBiZSBwcm9wYWdhdGVkXG4gKiBAcmV0dXJucyB7UmVTY29wZVByb3ZpZGVyfVxuICovXG5mdW5jdGlvbiByZVNjb3BlUHJvcHMoIC4uLmFyZ3ogKSB7XG4gICAgbGV0IEJhc2VDb21wb25lbnQgICAgID0gKCFhcmd6WzBdIHx8IGFyZ3pbMF0ucHJvdG90eXBlICYmIGFyZ3pbMF0ucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQpICYmIGFyZ3ouc2hpZnQoKSxcbiAgICAgICAgc2NvcGUgICAgICAgICAgICAgPSAoIWFyZ3pbMF0gfHwgYXJnelswXSBpbnN0YW5jZW9mIFNjb3BlIHx8IGlzLmZuKGFyZ3pbMF0pKSAmJiBhcmd6LnNoaWZ0KCksXG4gICAgICAgIHVzZSAgICAgICAgICAgICAgID0gKCFhcmd6WzBdIHx8IGlzLmFycmF5KGFyZ3pbMF0pKSAmJiBhcmd6LnNoaWZ0KCksXG4gICAgICAgIGFkZGl0aW9uYWxDb250ZXh0ID0gKCFhcmd6WzBdIHx8IGFyZ3pbMF0gaW5zdGFuY2VvZiBTaW1wbGVPYmplY3RQcm90bykgJiYgYXJnei5zaGlmdCgpO1xuICAgIFxuICAgIGlmICggIShCYXNlQ29tcG9uZW50ICYmIEJhc2VDb21wb25lbnQucHJvdG90eXBlICYmIEJhc2VDb21wb25lbnQucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQpICkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCBCYXNlQ29tcG9uZW50ICkge1xuICAgICAgICAgICAgcmV0dXJuIHJlU2NvcGVQcm9wcyhCYXNlQ29tcG9uZW50LCBzY29wZSwgdXNlLCBhZGRpdGlvbmFsQ29udGV4dClcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICB1c2UgICAgICAgICAgICAgICA9IFsuLi4oQmFzZUNvbXBvbmVudC51c2UgfHwgW10pLCAuLi4odXNlIHx8IFtdKV07XG4gICAgYWRkaXRpb25hbENvbnRleHQgPSBhZGRpdGlvbmFsQ29udGV4dCAmJiBPYmplY3Qua2V5cyhhZGRpdGlvbmFsQ29udGV4dCkucmVkdWNlKCggaCwgayApID0+IChoW2tdID0gUHJvcFR5cGVzLmFueSwgaCksIHt9KSB8fCB7fTtcbiAgICBcbiAgICByZXR1cm4gcmVTY29wZVN0YXRlKGNsYXNzIFJlU2NvcGVQcm9wc1Byb3ZpZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICAgICAgc3RhdGljIGNoaWxkQ29udGV4dFR5cGVzID0ge1xuICAgICAgICAgICAgLi4uKEJhc2VDb21wb25lbnQuY29udGV4dFR5cGVzIHx8IHt9KSxcbiAgICAgICAgICAgIC4uLihhZGRpdGlvbmFsQ29udGV4dCksXG4gICAgICAgICAgICByZXNjb3BlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgICAgICAgICAgJHN0b3JlczogUHJvcFR5cGVzLm9iamVjdFxuICAgICAgICB9O1xuICAgICAgICBzdGF0aWMgY29udGV4dFR5cGVzICAgICAgPSB7XG4gICAgICAgICAgICAuLi4oQmFzZUNvbXBvbmVudC5jb250ZXh0VHlwZXMgfHwge30pLFxuICAgICAgICAgICAgLi4uKGFkZGl0aW9uYWxDb250ZXh0KSxcbiAgICAgICAgICAgIHJlc2NvcGU6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgICAgICAgICAkc3RvcmVzOiBQcm9wVHlwZXMub2JqZWN0XG4gICAgICAgIH07XG4gICAgICAgIHN0YXRpYyBkaXNwbGF5TmFtZSAgICAgICA9IFwicHJvcHNTY29wZWQoXCIgKyAoQmFzZUNvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBCYXNlQ29tcG9uZW50Lm5hbWUpICsgXCIpXCI7XG4gICAgICAgIFxuICAgICAgICBnZXRDaGlsZENvbnRleHQoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb250ZXh0O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZW5kZXIoKSB7XG4gICAgICAgICAgICByZXR1cm4gPEJhc2VDb21wb25lbnQgeyAuLi50aGlzLnByb3BzIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IC4uLnRoaXMuc3RhdGUgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRkaXNwYXRjaD17ICggLi4uYXJneiApID0+IHRoaXMuJGRpc3BhdGNoKC4uLmFyZ3opIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc3RvcmVzPXsgdGhpcy4kc3RvcmVzIH0vPlxuICAgICAgICB9XG4gICAgfSwgc2NvcGUsIHVzZSk7XG59XG5cbmV4cG9ydCB7XG4gICAgQ29tcG9uZW50IGFzIGRlZmF1bHQsXG4gICAgQ29tcG9uZW50LFxuICAgIHJlU2NvcGVQcm9wcyxcbiAgICByZVNjb3BlUHJvcHMgYXMgcmVzY29wZVByb3BzLFxuICAgIHJlU2NvcGVTdGF0ZSxcbiAgICByZVNjb3BlU3RhdGUgYXMgcmVzY29wZVN0YXRlXG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9SZWFjdEhvY3MuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlYWN0XCJcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInByb3AtdHlwZXNcIlxuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9