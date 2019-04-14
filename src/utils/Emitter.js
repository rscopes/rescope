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

import is from 'is';

export default class Emitter {
	_events = {};
	
	on( evt, cb ) {
		if ( !is.string(evt) && evt )
			return Object.keys(evt).forEach(k => this.on(k, evt[k]));
		
		this._events[evt] = this._events[evt] || [];
		this._events[evt].push(cb);
		
	}
	
	un( evt, cb ) {
		if ( !is.string(evt) && evt )
			return Object.keys(evt).forEach(k => this.un(k, evt[k]));
		
		if ( !this._events[evt] ) return;
		var i = this._events[evt].indexOf(cb);
		this._events[evt].splice(i, 1);
	}
	
	emit( evt, ...argz ) {
		if ( !this._events[evt] ) return;
		let lists = [...this._events[evt]];
		
		for ( var i = 0; i < lists.length; i++ )
			lists[i](...argz)
	}
	
	addListener() {
		this.on(...arguments);
	}
	
	removeListener() {
		this.un(...arguments);
	}
	
	removeAllListeners() {
		this._events = {};
	}
	
	once( evt, cb ) {
		let fn;
		this.on(evt, fn = ( ...argz ) => {
			this.un(evt, fn);
			cb(...argz)
		});
	}
	
	
}