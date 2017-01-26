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
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(9);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _Store = __webpack_require__(2);
	
	var _Store2 = _interopRequireDefault(_Store);
	
	var _MyStoreContext = __webpack_require__(7);
	
	var _MyStoreContext2 = _interopRequireDefault(_MyStoreContext);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @author Nathanael BRAUN
	 *
	 * Date: 25/01/2017
	 * Time: 11:08
	 */
	function NewsListComp() {
	    var target = arguments.length <= 0 || arguments[0] === undefined ? document.createElement('div') : arguments[0];
	
	    var store = new _Store2.default(_MyStoreContext2.default, ["userEvents", "status"]).on("stable", function (state) {
	        target.innerHTML = "<div style=\"border: solid 1px lightgrey;border-radius: 3px\">\n                        <b><u><span onclick=\"MyStoreContext.session.setState({currentUserId:'MissTick'})\">MissTick events</span></u></b>\n                        <b><u><span onclick=\"MyStoreContext.session.setState({currentUserId:'MrNice'})\">MrNice events</span></u></b>\n                    </div>" + ("<div style=\"border: solid 1px lightgrey;border-radius: 3px\">\n                        " + JSON.stringify(state.status, null, 2).replace(/\n/ig, '<br/>') + "\n                    </div>") + (state.userEvents && state.userEvents.events.map(function (evt) {
	            return "\n                        <div style=\"border: solid 1px lightgrey;border-radius: 3px\">\n                        <b><u><center>Event type : " + evt.type + "</center></u></b>\n                        <p>" + evt.text + "</p>\n                        </div>";
	        }).join());
	    });
	
	    target.innerHTML = "<b><u><center>Loading...</center></u></b>";
	
	    return target;
	}
	
	window.NewsListComp = NewsListComp;
	// export default NewsList;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * Ultra scalable state-aware store
	 *
	 * Actually using debounce/native sequencer method...
	 * @todo : optims? bugs?
	 */
	
	var isString = __webpack_require__(3),
	    isArray = __webpack_require__(4),
	    isFunction = __webpack_require__(5),
	    EventEmitter = __webpack_require__(6),
	    objProto = Object.getPrototypeOf({});
	
	var Store = function (_EventEmitter) {
	    _inherits(Store, _EventEmitter);
	
	    _createClass(Store, null, [{
	        key: 'map',
	
	
	        /**
	         * Map all nammed stores in {keys} to the {object}'s state
	         * Hook componentWillUnmount (for react comp) or destroy to unBind them automatically
	         * @static
	         * @param object {React.Component|Store|...} target state aware object
	         * @param keys {Array} Ex : ["session", "otherStaticNamedStore:key", store.as('anotherKey')]
	         */
	        // overridable list of store that will allow push if updated
	        value: function map(component, keys, context, origin) {
	            var targetRevs = component._revs || {};
	            var targetContext = component.stores || {};
	            keys = isArray(keys) ? [].concat(_toConsumableArray(keys)) : [keys];
	
	            context = context || Store.named;
	            keys = keys.filter(function (key) {
	
	                if (key.store && key.name) {
	                    if (targetRevs[key.name]) return false; // no dbl binds
	                    key.store.bind(component, key.name);
	                    targetRevs[key.name] = targetRevs[key.name] || true;
	                    targetContext[key.name] = targetContext[key.name] || key.store;
	                } else if (isString(key)) {
	                    key = key.split(':');
	                    if (targetRevs[key[1] || key[0]]) return false; // no dbl binds
	                    if (isFunction(context[key[0]])) {
	                        context[key[0]] = new context[key[0]](context);
	                        if (context[key[0]].constructor.use) {
	                            context[key[0]].pull(context[key[0]].constructor.use, key[0]);
	                        }
	                    }
	                    if (!context[key[0]]) {
	                        console.error("Not a mappable store item '" + key[0] + "' in " + origin + ' !!');
	                    }
	                    context[key[0]] && context[key[0]].bind && context[key[0]].bind(component, key[1] || key[0]);
	                    targetRevs[key[1] || key[0]] = targetRevs[key[1] || key[0]] || true;
	                    targetContext[key[1] || key[0]] = targetContext[key[1] || key[0]] || context[key[0]];
	                } else {
	                    console.error("Not a mappable store item '" + key + "' in " + origin + ' !!');
	                }
	
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
	                    if (key.store && key.name) {
	                        key.store.unBind(component, key.name);
	                    } else {
	                        key = key.split(':');
	                        context[key[0]] && context[key[0]].unBind(component, key[1] || key[0]);
	                    }
	                });
	                return this[unMountKey] && this[unMountKey].apply(this, arguments);
	            };
	        }
	
	        /**
	         * Constructor, will build a store/refiner/reducer
	         *
	         * (context, keys, name)
	         * (context, name)
	         * (context)
	         *
	         * @param context {object} context where to find the other stores
	         * @param keys {Array} (passed to Store::map) Ex : ["session", "otherNamedStore:key", otherStore.as("otherKey")]
	         */
	        // overridable list of source stores
	
	    }]);
	
	    function Store() {
	        _classCallCheck(this, Store);
	
	        var _this = _possibleConstructorReturn(this, (Store.__proto__ || Object.getPrototypeOf(Store)).call(this));
	
	        var argz = [].concat(Array.prototype.slice.call(arguments)),
	            _static = _this.constructor,
	            context = !isArray(argz[0]) && !isString(argz[0]) ? argz.shift() : _static.named,
	            watchs = isArray(argz[0]) ? argz.shift() : [],
	            // watchs need to be defined after all the store are registered : so we can't deal with any "static use" automaticly
	        name = isString(argz[0]) ? argz[0] : _static.name;
	        _this.setMaxListeners(Store.defaultMaxListeners);
	        _this.locks = 0;
	        _this._onStabilize = [];
	
	        if (isString(argz[0])) {
	            if (context[name]) console.warn("TorrentStore: Overwriting an existing static named store ( %s ) !!", name);
	            context[name] = _this;
	        }
	
	        _this._state = {};
	        _this._watchs = watchs;
	        _this.name = name;
	        _this.context = context;
	        _this._stable = true;
	        _this._rev = 1;
	        _this._revs = {};
	        _this.stores = {};
	        _this._followers = [];
	        if (!!_this._watchs) {
	            // if there initial watchs anyway
	            _this.pull(_this._watchs);
	        }
	
	        return _this;
	    }
	
	    /**
	     * get a store-key pair for Store::map
	     * @param {string} name
	     * @returns {{store: Store, name: *}}
	     */
	
	
	    _createClass(Store, [{
	        key: 'as',
	        value: function as(name) {
	            return { store: this, name: name };
	        }
	
	        /**
	         * get a comparable value
	         * @param {string} name
	         * @returns {{store: Store, name: *}}
	         */
	
	    }, {
	        key: 'toValue',
	        value: function toValue() {
	            return this.toString();
	        }
	    }, {
	        key: 'toString',
	        value: function toString() {
	            return this.name + "[" + this._rev + "]";
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
	                i = this._followers.length;
	            while (i--) {
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
	            this._followers.push([obj, key]);
	            if (this.state && this._stable) {
	                if (typeof obj != "function") {
	                    if (key) obj.setState(_defineProperty({}, key, this.state));else obj.setState(this.state);
	                } else {
	                    obj(this.state);
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
	            this.once('stable', cb);
	        }
	
	        /**
	         * Overridable method to know if a state change should be propag to the listening stores & components
	         * If static follow is defined, shouldPropag will return true if any of the "follow" keys was updated
	         * If not it will always return true
	         */
	
	    }, {
	        key: 'shouldPropag',
	        value: function shouldPropag(ns) {
	            var _static = this.constructor,
	                r,
	                cState = this.state;
	
	            // if ( !cState )
	            //     return true;
	            if (!cState && (!_static.follow || !_static.follow.length || _static.follow && _static.follow.reduce(function (r, i) {
	                return r || ns[i];
	            }, false))) return true;
	
	            _static.follow && _static.follow.forEach(function (key) {
	                r = r || cState[key] !== ns[key];
	            });
	
	            return !_static.follow || !_static.follow.length || !!r;
	        }
	
	        /**
	         * Overridable refiner / remapper
	         * If privateState or lastPublicState are simple hash maps refine will return {...lastPublicState, ...privateState}
	         * if not it will return the last private state
	         * @param lastPublicState
	         * @param privateState
	         * @returns {*}
	         */
	
	    }, {
	        key: 'refine',
	        value: function refine(lastPublicState, privateState) {
	            privateState = privateState || this._state;
	            if (!lastPublicState || lastPublicState.__proto__ !== objProto || privateState.__proto__ !== objProto) return privateState;else return _extends({}, lastPublicState, privateState);
	        }
	
	        /**
	         * Debounce this store propagation ( & reducing )
	         * @param cb
	         */
	
	    }, {
	        key: 'stabilize',
	        value: function stabilize(cb) {
	            var _this2 = this;
	
	            var me = this;
	            cb && me.once('stable', cb);
	            me._stable = false;
	
	            if (this._stabilizer) clearTimeout(this._stabilizer);
	
	            this._stabilizer = setTimeout(this.push.bind(this, null, function () {
	                //@todo
	                me._stable = true;
	                _this2._stabilizer = null;
	                // this.release();
	            }));
	        }
	
	        /**
	         * Pull stores in the private state
	         * @param stores  {Array} (passed to Store::map) Ex : ["session", "otherNamedStore:key", otherStore.as("otherKey")]
	         */
	
	    }, {
	        key: 'pull',
	        value: function pull(stores, origin) {
	            return Store.map(this, stores, this.context, origin);
	        }
	
	        /**
	         * Apply refine/remap on the private state & push the resulting "public" state to followers
	         * @param cb
	         */
	
	    }, {
	        key: 'push',
	        value: function push(state, force, cb) {
	            cb = force === true ? cb : force;
	            var i = 0,
	                me = this,
	                nState = state || this.refine(this.state, this._state);
	
	            if (!force && !this.shouldPropag(nState)) {
	                cb && cb();
	                return false;
	            }
	
	            this.state = nState;
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
	        value: function setState(pState, cb) {
	            var i = 0,
	                me = this,
	                change;
	            for (var k in pState) {
	                if (pState.hasOwnProperty(k) && (pState[k] != this._state[k] || this._state[k] && pState[k] && pState[k]._rev != this._revs[k] // rev/hash update
	                )) {
	                    change = true;
	                    this._revs[k] = pState[k] && pState[k]._rev || true;
	                    this._state[k] = pState[k];
	                }
	            }if (change) {
	                this.stabilize(cb);
	            } else cb && cb();
	            return this;
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
	            this._state = pState;
	
	            this.stabilize(cb);
	        }
	
	        /**
	         * Add a lock so the store will not propag it state untill release() is call
	         * @param previous {Taskflow|number|Array} @optional wf to wait, releases to wait or array of stuff to wait
	         * @returns {TaskFlow}
	         */
	
	    }, {
	        key: 'wait',
	        value: function wait(previous) {
	            if (typeof previous == "number") return this.locks += previous;
	            if (isArray(previous)) return previous.map(this.wait.bind(this));
	            // if ( previous && previous.then )
	            //     return previous.then(this.release.bind(this));
	
	            this.locks++;
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
	            var me = this,
	                i = 0;
	            // if ( desync && this.locks > 0 ) return setTimeout(this.success) && this;
	            var tmp;
	
	            if (! --this.locks && this.state) {
	                this._complete = true;
	
	                this._rev = 1 + (this._rev + 1) % 1000000; //
	                if (this._followers.length) this._followers.forEach(function (follower) {
	                    if (!me.state) return;
	                    if (typeof follower[0] == "function") {
	                        follower[0](me.state);
	                    } else {
	                        cb && i++;
	                        follower[0].setState(follower[1] ? _defineProperty({}, follower[1], me.state) : me.state, cb && function () {
	                            return ! --i && cb();
	                        });
	                    }
	                });
	
	                me.emit('stable', this.state);
	                !i && cb && cb();
	            } else cb && this.then(cb);
	            return this;
	        }
	    }, {
	        key: 'destroy',
	        value: function destroy() {
	
	            if (this._stabilizer) clearTimeout(this._stabilizer);
	            if (this._followers.length) this._followers.forEach(function (follower) {
	                if (typeof follower[0] !== "function") {
	                    if (follower[0].stores) delete follower[0].stores[follower[1]];
	                }
	            });
	            this._followers = null;
	            this.dead = true;
	            if (this.name && this.context[this.name] === this) delete this.context[this.name];
	            this._revs = this.state = this._state = this.context = null;
	        }
	    }]);
	
	    return Store;
	}(EventEmitter);
	
	Store.use = [];
	Store.follow = [];
	Store.named = {};
	Store.defaultMaxListeners = 20;
	exports.default = Store;
	module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

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


/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = Array.isArray || function (arr) {
	  return Object.prototype.toString.call(arr) == '[object Array]';
	};


/***/ },
/* 5 */
/***/ function(module, exports) {

	// if (typeof require !== 'undefined') {}
	
	var isFunction = function (functionToCheck) {
		var getType = {};
		return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
	};
	
	if (typeof module !== 'undefined' && module.exports) {
		module.exports = isFunction;
	}

/***/ },
/* 6 */
/***/ function(module, exports) {

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


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _class, _temp, _class3, _temp3, _class4, _temp4; /**
	                                                      * @author Nathanael BRAUN
	                                                      *
	                                                      * Date: 03/12/2016
	                                                      * Time: 09:28
	                                                      */
	
	
	var _Store5 = __webpack_require__(2);
	
	var _Store6 = _interopRequireDefault(_Store5);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var stubs = __webpack_require__(8);
	
	var MyStoreContext = {
	    status: (_temp = _class = function (_Store) {
	        _inherits(status, _Store);
	
	        function status() {
	            _classCallCheck(this, status);
	
	            return _possibleConstructorReturn(this, (status.__proto__ || Object.getPrototypeOf(status)).apply(this, arguments));
	        }
	
	        return status;
	    }(_Store6.default), _class.use = ["session"], _temp),
	    session: function (_Store2) {
	        _inherits(session, _Store2);
	
	        function session() {
	            var _ref;
	
	            var _temp2, _this2, _ret;
	
	            _classCallCheck(this, session);
	
	            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	                args[_key] = arguments[_key];
	            }
	
	            return _ret = (_temp2 = (_this2 = _possibleConstructorReturn(this, (_ref = session.__proto__ || Object.getPrototypeOf(session)).call.apply(_ref, [this].concat(args))), _this2), _this2.state = {
	                currentUserId: "MrNice"
	            }, _temp2), _possibleConstructorReturn(_this2, _ret);
	        }
	
	        return session;
	    }(_Store6.default),
	    currentUser: (_temp3 = _class3 = function (_Store3) {
	        _inherits(currentUser, _Store3);
	
	        function currentUser() {
	            _classCallCheck(this, currentUser);
	
	            return _possibleConstructorReturn(this, (currentUser.__proto__ || Object.getPrototypeOf(currentUser)).apply(this, arguments));
	        }
	
	        _createClass(currentUser, [{
	            key: "refine",
	            // list of source stores id
	
	            value: function refine(lastState, privateState) {
	                var _this4 = this;
	
	                var NewUserId = privateState.session && privateState.session.currentUserId,
	                    LastUserId = lastState && lastState._id;
	
	                if (NewUserId != LastUserId) {
	                    this.wait(); // don't propag until released
	                    setTimeout(function () {
	                        // get the user record or whatever...
	                        _this4.push({
	                            _id: NewUserId,
	                            login: NewUserId
	                        }, function () {
	                            MyStoreContext.status.setState({ currentUser: JSON.stringify(_this4.state) });
	                        });
	
	                        _this4.release();
	                    }, 500);
	                    MyStoreContext.status.setState({ currentUser: "user id change ! doing some async..." });
	                }
	
	                return lastState;
	            }
	        }]);
	
	        return currentUser;
	    }(_Store6.default), _class3.use = ["session"], _temp3),
	    userEvents: (_temp4 = _class4 = function (_Store4) {
	        _inherits(userEvents, _Store4);
	
	        function userEvents() {
	            _classCallCheck(this, userEvents);
	
	            return _possibleConstructorReturn(this, (userEvents.__proto__ || Object.getPrototypeOf(userEvents)).apply(this, arguments));
	        }
	
	        _createClass(userEvents, [{
	            key: "shouldPropag",
	            // keys for the default shouldPropag fn
	
	            value: function shouldPropag(newState) {
	                return !!newState.userId;
	            } // list of source stores id
	
	        }, {
	            key: "refine",
	            value: function refine(lastState, privateState) {
	                var _this6 = this;
	
	                var nUserId = privateState.currentUser._id;
	                var cUserId = lastState && lastState.userId;
	
	                if (nUserId != cUserId) {
	                    this.wait(); // do some async
	                    setTimeout(function () {
	                        // get somme user events or whatever...
	                        _this6.push({
	                            userId: nUserId,
	                            count: stubs[nUserId].length,
	                            events: stubs[nUserId],
	                            eventsByType: stubs[nUserId].reduce(function (res, item) {
	                                res[item.type] = res[item.type] || [res[item.type]];
	                                res[item.type].push(item);
	                                return res;
	                            }, {})
	                        }, function () {
	                            MyStoreContext.status.setState({ userEvents: "" + stubs[nUserId].length + " events" });
	                        });
	                        _this6.release();
	                    }, 500);
	                    MyStoreContext.status.setState({ userEvents: "user datas change ! doing some async..." });
	                }
	
	                return lastState;
	            }
	        }]);
	
	        return userEvents;
	    }(_Store6.default), _class4.use = ["currentUser"], _class4.follow = ["currentUser"], _temp4)
	};
	
	window.MyStoreContext = MyStoreContext;
	exports.default = MyStoreContext;
	module.exports = exports["default"];

/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/**
	 * @author Nathanael BRAUN
	 *
	 * Date: 25/01/2017
	 * Time: 09:16
	 */
	exports.default = {
	    "MrNice": [{
	        type: "event",
	        text: "nice event"
	    }, {
	        type: "news",
	        text: "nice news"
	    }, {
	        type: "poke",
	        text: "some poke"
	    }, {
	        type: "event",
	        text: "another event"
	    }, {
	        type: "comment",
	        text: "another comment"
	    }],
	    "MissTick": [{
	        type: "event",
	        text: "some events"
	    }, {
	        type: "news",
	        text: "some news"
	    }, {
	        type: "poke",
	        text: "some poke"
	    }, {
	        type: "event",
	        text: "another event"
	    }]
	};
	module.exports = exports["default"];

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "example/vanilla/index.html";

/***/ }
/******/ ]);
//# sourceMappingURL=NewsListComp.js.map