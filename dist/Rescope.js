"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Store = require("./Store");

var _Store2 = _interopRequireDefault(_Store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Rescope_factory = function Rescope_factory(scope) {
    return function Rescope() {
        for (var _len = arguments.length, argz = Array(_len), _key = 0; _key < _len; _key++) {
            argz[_key] = arguments[_key];
        }

        if (this.constructor === Rescope) // using new
            {
                var _Rescope = Rescope_factory(argz[0]);
                _Rescope.Store = function () {
                    for (var _len2 = arguments.length, _argz = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                        _argz[_key2] = arguments[_key2];
                    }

                    return new (Function.prototype.bind.apply(_Store2.default, [null].concat([argz[0]], _argz)))();
                };
                _Rescope.dispatch = function () {
                    for (var _len3 = arguments.length, _argz = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                        _argz[_key3] = arguments[_key3];
                    }

                    return dispatch.apply(undefined, [argz[0]].concat(_argz));
                };
                return _Rescope;
            } else {
            return _Store2.default.map(argz[0], argz[1], scope);
        }
    };
},
    dispatch = function dispatch(context, cb) {
    context = context || _Store2.default.staticContext;
    var mountAllStore = new _Store2.default(context);
    mountAllStore.then(cb);
},
    Rescope = Rescope_factory(null);

Rescope.Store = _Store2.default;

if (typeof window != 'undefined') {
    window.Rescope = Rescope;
}

exports.default = Rescope;
module.exports = exports["default"];
