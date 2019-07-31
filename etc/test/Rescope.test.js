/*
 *   The MIT License (MIT)
 *   Copyright (c) 2019. Wise Wild Web
 *   MIT License
 *
 *   Copyright (c) 2018 Wise Wild Web
 *
 *   Permission is hereby granted, free of charge, to any person obtaining a copy
 *   of this software and associated documentation files (the "Software"), to deal
 *   in the Software without restriction, including without limitation the rights
 *   to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *   copies of the Software, and to permit persons to whom the Software is
 *   furnished to do so, subject to the following conditions:
 *
 *   The above copyright notice and this permission notice shall be included in all
 *   copies or substantial portions of the Software.
 *
 *   THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *   IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *   FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *   AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *   LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *   OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 *   SOFTWARE.
 *
 *   @author : Nathanael Braun
 *   @contact : n8tz.js@gmail.com
 */

var child_process = require('child_process');
var os            = require('os');
var shortid       = require('shortid');
var path          = require('path'),
    packageCfg    = JSON.parse(require('fs').readFileSync(__dirname + '/../../package.json'));


var util  = require('util'),
    spawn = require('child_process').spawn,
    cmd;

describe('Rescope', function () {
	let Rescope,
	    StaticContext,
	    TestContext;
	//it('should build well', function ( done ) {
	//    this.timeout(Infinity);
	//
	//    child_process.exec(
	//        'npm run buildStaging',
	//        {
	//            //cwd: "/"
	//        },
	//        function ( error, stdout, stderr ) {
	//            done(error)
	//        });
	//
	//});
	it('should require well', function ( done ) {
		this.timeout(Infinity);
		Rescope = require('../npm');
		done(!Rescope)
	});
	it('should create basic Scopes well', function ( done ) {
		StaticContext = new Rescope.Scope(
			{
				globalAsyncStore      : class globalAsyncStore extends Rescope.Store {
					static state = { ok: true };
					
					apply( data, state ) {
						this.wait("async creeps");
						setTimeout(
							tm => {
								this.push({ ...data, ...state, asyncUpdated: true });
								this.release("async creeps");
							},
							1000
						)
						return data;
					}
				},
				globalStoreWithActions: class globalStoreWithActions extends Rescope.Store {
					static state = { ok: true };
					static actions = {
						makeItOk  : v => ({ ok: v }),
						someAction: v => ({ value: v })
					};
				},
				stats                 : class stats extends Rescope.Store {
					static state = { ok: true };
					static context = "static";
					static persistenceTm = 1000 * 5;
					
				}
			},
			{
				id: 'static'
				//persistenceTm: 5000,
				//autoDestroy  : true
			}
		);
		TestContext   = new Rescope.Scope(
			{
				testSetInitialState: class testSetInitialState extends Rescope.Store {
					static state = { ok: false, andOk: true };
					state = { ok: true };
				},
				testErrorCatch     : class testErrorCatch extends Rescope.Store {
					static state = { ok: true };
					
					static actions = {
						makeError: v => ({ failNow: true })
					};
					
					apply( data, state ) {
						if ( state.failNow )
							throw new Error("oups")
						return state;
					}
					
					handleError() {
						this.push({ failNow: false, catched: true })
					}
				},
				local_1            : class local_1 extends Rescope.Store {
					static use = ["!globalAsyncStore"];
					static state = { ok: true };
				},
				local_2            : class local_2 extends Rescope.Store {
					static state = { ok: true };
				},
				local_3            : class local_3 extends Rescope.Store {
					static use = ["globalStoreWithActions", "local_2"];
					static state = { ok: true };
				},
				local_4            : class local_4 extends Rescope.Store {
					static use = { "local_3.globalStoreWithActions.ok": "remapTest" };
				},
				local_5            : class local_5 extends Rescope.Store {
					static use = { "!local_3.globalStoreWithActions.ok": "remapTest" };
					static follow = {
						remapTest: v => (v === "ok")
					};
					
					apply( data, state ) {
						
						return { ...data, ...state };
					}
				}
			},
			{
				key          : 'TestContext',
				parent       : StaticContext,
				persistenceTm: 3000,
				autoDestroy  : true
			}
		);
		done()
	});
	
	
	function throwNextTick( error ) {
		process.nextTick(function () {
			throw error
		})
	}
	
	it('should synchrone init them well', function ( done ) {
		TestContext.state.local_3 = { updated: true };// should mount all the required
	                                                  // store
		
		let data = TestContext.data,
		    ok   =
			    !data.globalAsyncStore &&
			    data.globalStoreWithActions.ok &&
			    !data.local_1 &&
			    data.local_2.ok &&
			    data.local_3.ok &&
			    data.local_3.local_2.ok &&
			    data.local_3.globalStoreWithActions.ok;
		
		if ( ok ) done();
		else done("fail")
	});
	it('should async update them well', function ( done ) {
		this.timeout(4000);
		TestContext.once('update',
		                 ( e, _data ) => {
			
			                 let data = TestContext.data,
			                     ok   =
				                     !data.globalAsyncStore &&
				                     data.globalStoreWithActions.ok &&
				                     !data.local_1 &&
				                     data.local_2.ok &&
				                     data.local_3.ok &&
				                     data.local_3.local_2.ok &&
				                     data.local_3.globalStoreWithActions.ok &&
				                     data.local_3.globalStoreWithActions.updated;
			
			                 !ok && console.log("!!!!!!!!!", data)
			
			
			                 if ( ok ) done();
			                 else done(new Error("fail"))
		                 }
		)
		TestContext.state.globalStoreWithActions = { updated: true };
		
	});
	it('should async mount them well 2', function ( done ) {
		this.timeout(4000);
		TestContext.once(
			'update',
			( e, _data ) => {// 1st is local_1
				
				TestContext.once(// later get globalStoreWithActions
				                 'update',
				                 ( e, _data ) => {
					                 let data = TestContext.data,
					                     ok   =
						                     data.globalAsyncStore.asyncUpdated &&
						                     data.local_1.ok &&
						                     data.local_3.globalStoreWithActions.updated;
					
					
					                 if ( ok ) done();
					                 else done(new Error("fail"))
				                 }
				)
			}
		)
		TestContext.mount("local_1");// should trigger global 1 wich will push in 1000ms
		
	});
	it('should deal with merged initial state well', function ( done ) {
		this.timeout(4000);
		TestContext.mount("testSetInitialState").then(
			( _data ) => {
				if ( _data.testSetInitialState.ok && _data.testSetInitialState.andOk ) done();
				else done(new Error("fail"))
			}
		);
		
	});
	it('should remap well', function ( done ) {
		this.timeout(4000);
		TestContext.mount("local_4").then(
			( _data ) => {
				if ( _data.local_4.remapTest ) done();
				else done(new Error("fail"))
			}
		);
		
	});
	it('should trigger action and use follow well', function ( done ) {
		this.timeout(4000);
		TestContext
			.mount("local_5")
			.bind(
				function fn( _data ) {
					//console.log("!!!!", _data, TestContext.data.local_5);
					TestContext.unBind(fn, "local_5");
					if ( _data.local_5.remapTest == 'ok' ) done();
					else done(new Error("fail"));
				},
				"local_5",
				null,
				false // no intial value
			)
			.dispatch("makeItOk", 'ok')
	});
	it('should resync setState well', function ( done ) {
		var fn;
		TestContext.bind(
			fn = ( data ) => {
				TestContext.unBind(fn, ["globalStoreWithActions", "local_3"]);
				let ok =
					    data.globalStoreWithActions.resync &&
					    data.local_3.globalStoreWithActions.resync;
				!ok && console.log(data)
				if ( ok ) done();
				else done(new Error("fail "))
				
			},
			["globalStoreWithActions", "local_3"], false
		);
		TestContext.state.globalStoreWithActions = { resync: true };// should mount all
	                                                                // the required store
	});
	it('should mixin scopes well', function ( done ) {
		this.timeout(10000);
		
		let
			TestContext0 = new Rescope.Scope(
				{
					test0: class local_2 extends Rescope.Store {
						static state = { ok: true };
					}
				},
				{
					//parent       : StaticContext,
					persistenceTm: 3000,
					autoDestroy  : true
				}
			);
		let
			TestContext2 = new Rescope.Scope(
				{
					local_2: class local_2 extends Rescope.Store {
						static state = { ok: true };
					}
				},
				{
					parent       : TestContext0,
					persistenceTm: 3000,
					autoDestroy  : true
				}
			);
		TestContext2.mixin(StaticContext);
		if ( TestContext2.stores['globalAsyncStore'] && TestContext2.stores['local_2'] && TestContext2.stores['test0'] )
			done();
		else
			done(new Error("Not working !!!"));
		
	});
	it('should catch synchrone error well', function ( done ) {
		
		var originalException = process.listeners('uncaughtException').pop()
		process.removeListener('uncaughtException', originalException);
		
		TestContext.mount("testErrorCatch");// should mount all the required store
		
		TestContext.once('update',
		                 ( e, _data ) => {
			                 let data = TestContext.data,
			                     ok   =
				                     data.testErrorCatch.catched;
			
			                 if ( ok ) done();
			                 else done("fail");
			                 process.nextTick(function () {
				                 process.listeners('uncaughtException').push(originalException)
			                 })
		                 });
		
		TestContext.dispatch("makeError");
		
	});
	let serializeTest, FlyingContext;
	it('should emit stableTree & serialize well', function ( done ) {
		this.timeout(3000);
		
		let
			TestContext0 = new Rescope.Scope(
				{
					test0: class local_2 extends Rescope.Store {
						static state = { ok: true };
					}
				},
				{
					key          : 'TestContext',
					parent       : StaticContext,
					persistenceTm: 3000,
					autoDestroy  : true
				}
			);
		let
			TestContext2 = FlyingContext = new Rescope.Scope(
				{
					local_2: class local_2 extends Rescope.Store {
						static use = ["test0"];
						
						static state = { ok: true };
					}
				},
				{
					id           : 'FlyingContext',
					parent       : TestContext0,
					persistenceTm: 3000,
					autoDestroy  : true
				}
			);
		StaticContext.once(
			"stableTree",
			() => {
				
				if ( TestContext2.data.local_2.yiha ) {
					serializeTest = StaticContext.serialize();
					//console.warn(serializeTest);
					done();
				}
				else done(new Error("fail "))
				
			}
		);
		FlyingContext.mount("local_2")
		FlyingContext.stores.local_2.setState({ yiha: true });
		
		//TestContext2.mixin(StaticContext);
		
	});
	it('should dispatch well', function ( done ) {
		TestContext.dispatch("someAction", 2).then(
			( data ) => {
				let ok = TestContext.data.globalStoreWithActions.value;
				!ok && console.log(data)
				if ( ok ) done();
				else done(new Error("fail "))
			}
		);
	});
	it('should restore with force (reset) well (fast test)', function ( done ) {
		StaticContext.restore(serializeTest, true);
		let ok = !TestContext.data.globalStoreWithActions.value &&
			FlyingContext.data.local_2.yiha;
		!ok && console.log("!!!!!!!!!!!!!", TestContext.data.globalStoreWithActions)
		if ( ok ) done();
		else done(new Error("fail "))
	});
	
	it('same action should dispatch same result well', function ( done ) {
		TestContext.dispatch("someAction", 2).then(
			( data ) => {
				let ok = TestContext.data.globalStoreWithActions.value;
				!ok && console.log(data)
				if ( ok ) done();
				else done(new Error("fail "))
			}
		);
	});
	
	it('should async auto destroy store well', function ( done ) {
		this.timeout(10000);
		
		TestContext.mount(
			["stats"])
		           .then(
			           ( r ) => {
				
				           TestContext.retainStores(["stats"]);
				           setTimeout(
					           tm => {
						           let
							           TestContext2 = new Rescope.Scope(
								           {},
								           {
									           parent       : StaticContext,
									           persistenceTm: 3000,
									           autoDestroy  : true
								           }
							           );
						           TestContext2.disposeStores(["stats"]);
						           if ( typeof TestContext2.stores['stats'] == 'function' )
							           done(new Error("Not working !!!"));
						           else
							           done();
					           },
					           500
				           )
			           }
		           );
		
	});
	it('should async auto destroy them well', function ( done ) {
		this.timeout(10000);
		TestContext.once('destroy',
		                 ( e, _data ) => {
			                 done();
		                 }
		)
		
	});
});
