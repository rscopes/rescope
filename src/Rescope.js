/*
 * Copyright (c)  2017 Caipi Labs .
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

import Store from "./Store";

class Context extends Store {
    // constructor() {
    // super(argz[0], ...arguments)
    // }
    fork( context, cb ) {

    }
    fetch( context, cb ) {
        context    = context || Store.staticContext;
        let stores = Object.keys(context);
        if ( !stores.length )
            return cb(null, context);
        let mountAllStore = new Store(context);
        mountAllStore.pull(stores, true);
        mountAllStore.then(( state ) => cb(null, state, context));
    }
}


let Rescope_factory = function Rescope_factory( scope ) {
        return function Rescope( ...argz ) {
            if ( this && this.constructor === Rescope )// using new
            {
                let _Rescope     = Rescope_factory(argz[0]);
                _Rescope.Store   = class ContextualStore extends Store {
                    constructor() {
                        super(argz[0], ...arguments)
                    }
                };
                _Rescope.fetch   = fetch.bind(_Rescope, argz[0]);
                _Rescope.context = argz[0] || Store.staticContext;
                return _Rescope;
            } else {
                return Store.map(argz[0], argz[1], scope, null, argz[2])
            }
        }
    },
    // setContext      = function setContext( context ) {
    //
    // },
    fetch           = function fetch( context, cb ) {
        context    = context || Store.staticContext;
        let stores = Object.keys(context);
        if ( !stores.length )
            return cb(null, context);
        let mountAllStore = new Store(context);
        mountAllStore.pull(stores, true);
        mountAllStore.then(( state ) => cb(null, state, context));
    },
    Rescope         = Rescope_factory(null);

Rescope.Store   = Store;
Rescope.fetch   = ( cb ) => fetch(Store.staticContext, cb);
Rescope.context = Store.staticContext;
try {
    if ( typeof window != 'undefined' ) {
        window.Rescope = Rescope;
    }
} catch (e) {

}

export default Rescope;

