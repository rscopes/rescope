/*
 * Copyright (c)  2017 Caipi Labs .
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

/**
 * @author Nathanael BRAUN
 *
 * Date: 03/12/2016
 * Time: 09:28
 */
import {Store} from "../Rescope";

let stubs = require("./_stubs/datas");

let MyStoreContext = {
    status     : class status extends Store {
        static singleton = true;
        static use = ["appState"];
    },
    appState   : class appState extends Store {
        static initialState = {
            currentUserId: "MrNice"
        };
        
        // constructor() {
        //     super(...arguments);
        //     browserHistory.listen(( location, action ) => {
        //
        //     });
        // }
        
        // refine( datas, newState, changes ) {
        //     // do some routing (map on url)
        //     return newState;
        // }
    },
    currentUser: class currentUser extends Store {
        static use = ["appState"];// list of source stores id
        
        refine( datas, { appState: { currentUserId: NewUserId } }, changes ) {
            let LastUserId = datas && datas._id;
            
            console.info("currentUser state updated : ", changes);
            
            if ( NewUserId != LastUserId ) {
                this.wait();// don't propag until released
                setTimeout(
                    () => {
                        // get the user record or whatever...
                        this.push(
                            {
                                _id  : NewUserId,
                                login: NewUserId
                            },
                            () => {
                                this.context.status.setState({ currentUser: JSON.stringify(this.datas) });
                            }
                        );
                        
                        this.release();
                    },
                    500
                );
                this.context.status.setState({ currentUser: "user id change ! doing some async..." });
            }
            
            
            return datas;
        }
    },
    userEvents : class userEvents extends Store {
        static use = ["currentUser"];
        static require = ["currentUser"];
        datas = {};
        
        refine( datas, { currentUser: { _id: nUserId } }, changes ) {
            let { cUserId = void 0 } = datas;
            
            
            if ( nUserId != cUserId ) {
                this.wait();// do some async whithout pushing
                setTimeout(
                    () => {
                        // get somme user events or whatever...
                        this.push(
                            {
                                userId      : nUserId,
                                count       : stubs[nUserId].length,
                                events      : stubs[nUserId],
                                eventsByType: stubs[nUserId].reduce(
                                    ( res, item ) => {
                                        res[item.type] = res[item.type] || [res[item.type]];
                                        res[item.type].push(item);
                                        return res;
                                    },
                                    {}
                                )
                            },
                            () => {
                                this.context.status.setState({ userEvents: "" + stubs[nUserId].length + " events" });
                            });
                        this.release();
                    },
                    500
                );
                this.context.status.setState({ userEvents: "user datas change ! doing some async..." });
            }
            
            return datas;
        }
    }
};


export default { ...MyStoreContext };