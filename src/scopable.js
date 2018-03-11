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

import is from 'is'
import {Scope, Store} from "./index";

const SimpleObjectProto = ({}).constructor;

let scopables = [];

function addScopableType( test, handle, member = false, stateScope = false ) {
    scopables.push(
        {
            test,
            member,
            stateScope,
            handle
        }
    )
}

//
function isScopableType( Comp, member, stateScope ) {
    
    for ( let i = 0; i < scopables.length; i++ )
        if (
            (member === undefined || member == scopables[i].member)
            && stateScope == scopables[i].stateScope
            && scopables[i].test(Comp)
        )
            return true;
    
    return false;
    
}

function applyScopableType( Comp, argz, member, stateScope ) {
    
    for ( let i = 0; i < scopables.length; i++ )
        if ( member == scopables[i].member && stateScope == scopables[i].stateScope && scopables[i].test(Comp) )
            return scopables[i].handle(Comp, ...argz);
    
    console.warn("reScope : Unknown type", Comp)
    
    return false;
    
}

function reScope( ...argz ) {
    // are we decorating a member / without argz
    if ( argz[0] instanceof SimpleObjectProto && argz[2] instanceof SimpleObjectProto && argz[0].hasOwnProperty(argz[1]) ) {
        argz[2].value = applyScopableType(argz[0], [], true, false);
        return argz[0];
    }
    else if ( !isScopableType(argz[0], undefined, false) ) {
        return ( ...argz2 ) => {
            // are we decorating a member / with argz
            if ( argz2[0] instanceof SimpleObjectProto && argz2[2] instanceof SimpleObjectProto && argz2[0].hasOwnProperty(argz2[1]) ) {
                argz2[2].value = applyScopableType(argz2[0], argz, true, false);
                return argz2[0];
            }
            else
                return reScope(argz2[0], ...argz);
        }
    }
    return applyScopableType(argz[0], argz.slice(1), false, false);
}

function scopeToState( ...argz ) {
    // are we decorating a member / without argz
    if ( argz[0] instanceof SimpleObjectProto && argz[2] instanceof SimpleObjectProto && argz[0].hasOwnProperty(argz[1]) ) {
        argz[2].value = applyScopableType(argz[0], [], true, true);
        return argz[0];
    }
    else if ( !isScopableType(argz[0], undefined, true) ) {
        return ( ...argz2 ) => {
            // are we decorating a member / with argz
            if ( argz2[0] instanceof SimpleObjectProto && argz2[2] instanceof SimpleObjectProto && argz2[0].hasOwnProperty(argz2[1]) ) {
                argz2[2].value = applyScopableType(argz2[0], argz, true, true);
                return argz2[0];
            }
            else
                return scopeToState(argz2[0], ...argz);
        }
    }
    return applyScopableType(argz[0], argz.slice(1), false, true);
}

//
//addScopableType(
//    ( Comp ) => (Comp && Comp.prototype instanceof Store),
//    function reScope( ...argz ) {
//        let BaseStore    = (!argz[0] || argz[0].prototype instanceof Store) && argz.shift(),
//            scope        = (!argz[0] || argz[0] instanceof Scope || is.fn(argz[0])) && argz.shift(),
//            use          = (is.array(argz[0])) && argz.shift(),
//            stateMap     = !use && (!argz[0] || argz[0] instanceof SimpleObjectProto) && argz.shift(),
//            initialState = {};
//
//        let compName = BaseStore.displayName || BaseStore.name;
//
//        use = [...(BaseStore.use || []), ...(use || [])];
//        stateMap && Scope.stateMapToRefList(stateMap, initialState, use);
//
//        class StateScopedStore extends BaseStore {
//            static use         = use;
//            static displayName = "stateScoped(" + compName + ")";
//
//            constructor( ...argz ) {
//                super(scope, argz.slice(argz[0] instanceof Scope ? 1 : 0))
//            }
//        }
//
//        return StateScopedStore;
//    },
//    false,
//    true
//)


export {
    addScopableType,
    reScope,
    scopeToState
};