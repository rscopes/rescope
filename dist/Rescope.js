
/*
 * Copyright (c)  2017 Caipi Labs .
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Store3 = require("./Store");

var _Store4 = _interopRequireDefault(_Store3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Context = function (_Store) {
    _inherits(Context, _Store);

    function Context() {
        _classCallCheck(this, Context);

        return _possibleConstructorReturn(this, (Context.__proto__ || Object.getPrototypeOf(Context)).apply(this, arguments));
    }

    _createClass(Context, [{
        key: "fork",

        // constructor() {
        // super(argz[0], ...arguments)
        // }
        value: function fork(context, cb) {}
    }, {
        key: "fetch",
        value: function fetch(context, cb) {
            context = context || _Store4.default.staticContext;
            var stores = Object.keys(context);
            if (!stores.length) return cb(null, context);
            var mountAllStore = new _Store4.default(context);
            mountAllStore.pull(stores, true);
            mountAllStore.then(function (state) {
                return cb(null, state, context);
            });
        }
    }]);

    return Context;
}(_Store4.default);

var Rescope_factory = function Rescope_factory(scope) {
    return function Rescope() {
        for (var _len = arguments.length, argz = Array(_len), _key = 0; _key < _len; _key++) {
            argz[_key] = arguments[_key];
        }

        if (this && this.constructor === Rescope) // using new
            {
                var _Rescope = Rescope_factory(argz[0]);
                _Rescope.Store = function (_Store2) {
                    _inherits(ContextualStore, _Store2);

                    function ContextualStore() {
                        var _ref;

                        _classCallCheck(this, ContextualStore);

                        return _possibleConstructorReturn(this, (_ref = ContextualStore.__proto__ || Object.getPrototypeOf(ContextualStore)).call.apply(_ref, [this, argz[0]].concat(Array.prototype.slice.call(arguments))));
                    }

                    return ContextualStore;
                }(_Store4.default);
                _Rescope.fetch = fetch.bind(_Rescope, argz[0]);
                _Rescope.context = argz[0] || _Store4.default.staticContext;
                return _Rescope;
            } else {
            return _Store4.default.map(argz[0], argz[1], scope, null, argz[2]);
        }
    };
},

// setContext      = function setContext( context ) {
//
// },
fetch = function fetch(context, cb) {
    context = context || _Store4.default.staticContext;
    var stores = Object.keys(context);
    if (!stores.length) return cb(null, context);
    var mountAllStore = new _Store4.default(context);
    mountAllStore.pull(stores, true);
    mountAllStore.then(function (state) {
        return cb(null, state, context);
    });
},
    Rescope = Rescope_factory(null);

Rescope.Store = _Store4.default;
Rescope.fetch = function (cb) {
    return fetch(_Store4.default.staticContext, cb);
};
Rescope.context = _Store4.default.staticContext;
try {
    if (typeof window != 'undefined') {
        window.Rescope = Rescope;
    }
} catch (e) {}

exports.default = Rescope;
module.exports = exports["default"];
