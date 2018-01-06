/*
 * Copyright (c) 2017.  Caipi Labs.  All rights reserved.
 *
 * This File is part of Caipi. You can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *  This project is dual licensed under AGPL and Commercial Licence.
 *
 * @author : Nathanael Braun
 * @contact : caipilabs@gmail.com
 */

var child_process = require('child_process');
var os            = require('os');
var shortid       = require('shortid');
var path          = require('path'),
    packageCfg    = JSON.parse(require('fs').readFileSync(__dirname + '/../package.json'));


var util  = require('util'),
    spawn = require('child_process').spawn,
    cmd;

describe('Rescope', function () {
    let Rescope,
        StaticContext,
        TestContext;
    it('should build well', function ( done ) {
        this.timeout(Infinity);

        child_process.exec(
            'npm run buildStaging',
            {
                //cwd: "/"
            },
            function ( error, stdout, stderr ) {
                done(error)
            });

    });
    it('should require well', function ( done ) {
        Rescope = require('../dist/Rescope');
        done(!Rescope)
    });
    it('should create basic Contexts well', function ( done ) {
        StaticContext = new Rescope.Scope(
            {
                globalAsyncStore: class globalAsyncStore extends Rescope.Store {
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
                stats   : class stats extends Rescope.Store {
                    static state = { ok: true };
                    static context = "static";
                    static persistenceTm = 1000 * 5;
                    
                }
            },
            {
                //persistenceTm: 5000,
                //autoDestroy  : true
            }
        );
        TestContext   = new Rescope.Scope(
            {
                local_1: class local_1 extends Rescope.Store {
                    static use = ["!globalAsyncStore"];
                    static state = { ok: true };
                },
                local_2: class local_2 extends Rescope.Store {
                    static state = { ok: true };
                },
                local_3: class local_3 extends Rescope.Store {
                    static use = ["globalStoreWithActions", "local_2"];
                    static state = { ok: true };
                },
                local_4: class local_4 extends Rescope.Store {
                    static use = { "local_3.globalStoreWithActions.ok": "remapTest" };
                },
                local_5: class local_5 extends Rescope.Store {
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
                parent       : StaticContext,
                persistenceTm: 3000,
                autoDestroy  : true
            }
        );
        done()
    });
    it('should synchrone init them well', function ( done ) {
        TestContext.state.local_3 = { updated: true };// should mount all the required store
        
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
            
                             !ok && console.log(data)
            
            
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
    it('should remap well', function ( done ) {
        this.timeout(4000);
        TestContext.mount("local_4").then(
            ( e, _data ) => {
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
                ( _data ) => {
                    //console.log(_data, TestContext.data.local_5);
                    
                    if ( _data.local_5.remapTest == 'ok' ) done();
                    else done(new Error("fail"));
                },
                "local_5"
            )
            .dispatch("makeItOk", 'ok')
    });
    //it('should resync setState well', function ( done ) {
    //    var fn;
    //    TestContext.bind(
    //        fn = ( data ) => {
    //            TestContext.unBind(fn, ["globalStoreWithActions", "local_3"]);
    //            let ok =
    //                    data.globalStoreWithActions.resync &&
    //                    data.local_3.globalStoreWithActions.resync;
    //            !ok && console.log(data)
    //            if ( ok ) done();
    //            else done(new Error("fail "))
    //
    //        },
    //        ["globalStoreWithActions", "local_3"], false
    //    );
    //    TestContext.state.globalStoreWithActions = { resync: true };// should mount all the required store
    //});
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
    it('should emit stableTree well', function ( done ) {
        this.timeout(3000);
        
        let
            TestContext0 = new Rescope.Scope(
                {
                    test0: class local_2 extends Rescope.Store {
                        static state = { ok: true };
                    }
                },
                {
                    parent       : StaticContext,
                    persistenceTm: 3000,
                    autoDestroy  : true
                }
            );
        let
            TestContext2 = new Rescope.Scope(
                {
                    local_2: class local_2 extends Rescope.Store {
                        static use = ["test0"];
                        
                        static state = { ok: true };
                    }
                },
                {
                    parent       : TestContext0,
                    persistenceTm: 3000,
                    autoDestroy  : true
                }
            );
        StaticContext.once(
            "stableTree",
            () => {
                
                if ( TestContext2.data.local_2.yiha )
                    done();
                else done(new Error("fail "))
                
            }
        );
        TestContext2.mount("local_2")
        TestContext2.stores.local_2.setState({ yiha: true });
        
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
    it('should async auto destroy store well', function ( done ) {
        this.timeout(10000);
        
        TestContext.mount(
            ["stats"])
                   .then(
                       ( e, r ) => {
                
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
