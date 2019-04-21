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

const is = require('is');

export function walknSet( obj, path, value, stack ) {
	if ( is.string(path) )
		path = path.split('.');
	if ( !path.length )
		return false;
	else if ( path.length == 1 )
		return obj[path[0]] = stack
		                      ? [...(obj[path[0]] || []), value]
		                      : value;
	else
		return walknSet(
			obj[path[0]] =
				obj[path[0]] || {},
			path.slice(1),
			value, stack
		);
}

export function walknGet( obj, path, isKey ) {
	if ( is.string(path) )
		path = path.split('.');
	return path.length
	       ? obj[path[0]] && walknGet(obj[path[0]], path.slice(1))
	       : obj;
}

//@todo
export function keyWalknSet( obj, path, value, stack ) {
	if ( is.string(path) )
		path = path.split(/(\>|\/)/ig).filter(v => (v !== '>' && v));
	return walknSet(obj, path, value);
}

export function keyWalknGet( obj, path, isKey ) {
	if ( is.string(path) )
		path = path.split(/(\>|\/)/ig).filter(v => (v !== '>' && v));
	return path.length
	       ? obj[path[0]] && walknGet(obj[path[0]], path.slice(1))
	       : obj;
}