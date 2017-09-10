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
    //it('should build well', function ( done ) {
    //    this.timeout(Infinity);
    //
    //    child_process.exec(
    //        'npm run build',
    //        {
    //            //cwd: "/"
    //        },
    //        function ( error, stdout, stderr ) {
    //            done(error)
    //        });
    //
    //});
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
                },
                global_2: class global_2 extends Rescope.Store {
                    static state = { ok: true };
                    
                    refine( datas, state ) {
                        return { ...datas, ...state };
                    }
                }
            }
        );
        TestContext = new Rescope.Context(
            {
                local_1: class local_1 extends Rescope.Store {
                    static use = ["global_1"];
                    static state = { ok: true };
                },
                local_2: class local_2 extends Rescope.Store {
                    static state = { ok: true };
                },
                local_3: class local_3 extends Rescope.Store {
                    static use = ["global_2", "local_2"];
                    static state = { ok: true };
                    
                    refine( datas, state ) {
                        return { ...datas, ...state };
                    }
                }
            },
            {
                parent: StaticContext
            }
        );
        done()
    });
    it('should synchrone init them well', function ( done ) {
        Rescope = require('../dist/Rescope').default;
        TestContext
        .mount("local_3")
        .then(
            ( e, datas ) => {
                let ok =
                        !datas.global_1 &&
                        datas.global_2.ok &&
                        !datas.local_1 &&
                        datas.local_2.ok &&
                        datas.local_3.ok &&
                        datas.local_3.local_2.ok &&
                        datas.local_3.global_2.ok;
                
                if ( ok ) done();
                else done("fail")
            }
        )
    });
    it('should asynchrone update them well', function ( done ) {
        TestContext.stores.global_2.setState({ updated: true });
        TestContext.stores.local_3
                   .once('stable',
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
                             if ( ok ) done();
                             else done("fail")
                         }
                   )
        
    });
});
