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
var os = require('os');
var shortid = require('shortid');
var path       = require('path'),
    packageCfg = JSON.parse(require('fs').readFileSync(__dirname + '/../package.json'));


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
            'npm run build',
            {
                //cwd: "/"
            },
            function ( error, stdout, stderr ) {
                done(error)
            });

    });
    it('should require well', function ( done ) {
        Rescope = require('../dist/Rescope');
        //console.log(Rescope)
        done(!Rescope)
    });
    it('should create basic Contexts well', function ( done ) {
        StaticContext = new Rescope.Context(
            {
                global_1: class global_1 extends Rescope.Store {
                    static state = { ok: true };
                    
                    refine( datas, state ) {
                        this.wait("async creeps");
                        //console.log("g1")
                        setTimeout(
                            tm => {
                                this.push({ ...datas, ...state, asyncUpdated: true });
                                this.release("async creeps");
                            },
                            1000
                        )
                        return datas;
                    }
                },
                global_2: class global_2 extends Rescope.Store {
                    static state = { ok: true };
                    
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
        TestContext = new Rescope.Context(
            {
                local_1: class local_1 extends Rescope.Store {
                    static use = ["global_1"];
                    static require = ["global_1"];
                    static state = { ok: true };
                },
                local_2: class local_2 extends Rescope.Store {
                    static state = { ok: true };
                },
                local_3: class local_3 extends Rescope.Store {
                    static use = ["global_2", "local_2"];
                    static state = { ok: true };
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
        
        let datas = TestContext.datas,
            ok    =
                !datas.global_1 &&
                datas.global_2.ok &&
                !datas.local_1 &&
                datas.local_2.ok &&
                datas.local_3.ok &&
                datas.local_3.local_2.ok &&
                datas.local_3.global_2.ok;
        
        if ( ok ) done();
        else done("fail")
    });
    it('should async update them well', function ( done ) {
        this.timeout(4000);
        TestContext.once('update',
                         ( e, _datas ) => {
            
                             let datas = TestContext.datas,
                                 ok    =
                                     !datas.global_1 &&
                                     datas.global_2.ok &&
                                     !datas.local_1 &&
                                     datas.local_2.ok &&
                                     datas.local_3.ok &&
                                     datas.local_3.local_2.ok &&
                                     datas.local_3.global_2.ok &&
                                     datas.local_3.global_2.updated;
            
                             !ok && console.log(datas)
            
            
                             if ( ok ) done();
                             else done(new Error("fail"))
                         }
        )
        TestContext.state.global_2 = { updated: true };
        
    });
    it('should async mount them well 2', function ( done ) {
        this.timeout(4000);
        TestContext.once(
            'update',
            ( e, _datas ) => {

                TestContext.once(
                    'update',
                    ( e, _datas ) => {
                        let datas = TestContext.datas,
                            ok    =
                                datas.global_1.asyncUpdated &&
                                datas.local_1.ok &&
                                datas.local_3.global_2.updated;

                        //console.log(datas.local_1)

                        if ( ok ) done();
                        else done(new Error("fail"))
                    }
                )
            }
        )
        TestContext.mount("local_1");// should trigger global 1 wich will push in 1000ms

    });
    it('should resync setState well', function ( done ) {
        var fn;
        TestContext.bind(
            fn = ( datas ) => {
                TestContext.unBind(fn, ["global_2", "local_3"]);
                let ok =
                        datas.global_2.resync &&
                        datas.local_3.global_2.resync;
                !ok && console.log(datas)
                if ( ok ) done();
                else done(new Error("fail "))

            },
            ["global_2", "local_3"], false
        );
        TestContext.state.global_2 = { resync: true };// should mount all the required store
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
                                       TestContext2 = new Rescope.Context(
                                           {
                                           },
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
                         ( e, _datas ) => {
                             done();
                         }
        )
        
    });
});
