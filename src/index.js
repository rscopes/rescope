/*
 * The MIT License (MIT)
 * Copyright (c) 2019. Wise Wild Web
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 *  @author : Nathanael Braun
 *  @contact : n8tz.js@gmail.com
 */

let $global = (typeof window !== 'undefined') ? window : global;

import Scope                                    from "./Scope";
import Store                                    from "./Store";
import {addScopableType, reScope, scopeToState} from "./utils/scopable";

const RS = $global.___rescope || {};

if ( $global.___rescope ) {
	console.warn("ReScope is defined multiple times !! \nCheck you're packaging")
}
else {
	
	$global.___rescope = RS;
	Scope.Store        = Store;
	//RS.console         = console;
	RS.Scope           = Scope;
	RS.Context         = Scope;
	RS.Store           = Store;
	RS.reScope         = reScope;
	RS.scopeToState    = scopeToState;
	RS.reScopeState    = scopeToState;
	RS.addScopableType = addScopableType;
	RS.scopeRef        =
		function scopeRef( map, key ) {
			map[key] = new Scope.scopeRef(map[key]);
			return map;
		};
	
}
export default RS;