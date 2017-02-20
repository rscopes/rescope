/**
 * @author Nathanael BRAUN
 *
 * Date: 03/12/2016
 * Time: 09:28
 */
import {Store} from "../Rescope";
let stubs = require("./_stubs/datas");

let MyStoreContext = {
    status      : class status extends Store {
        static use = ["session"];
    },
    session     : class session extends Store {

        state = {
            currentUserId : "MrNice"
        };

    },
    currentUser : class currentUser extends Store {
        static use = ["session"];// list of source stores id

        refine( datas, newState, changes ) {
            let NewUserId  = newState.session && newState.session.currentUserId,
                LastUserId = datas && datas._id;

            console.info("currentUser state updated : ", changes);

            if ( NewUserId != LastUserId ) {
                this.wait();// don't propag until released
                setTimeout(
                    () => {
                        // get the user record or whatever...
                        this.push(
                            {
                                _id   : NewUserId,
                                login : NewUserId
                            },
                            () => {
                                this.context.status.setState({currentUser : JSON.stringify(this.datas)});
                            }
                        );

                        this.release();
                    },
                    500
                );
                this.context.status.setState({currentUser : "user id change ! doing some async..."});
            }


            return datas;
        }
    },
    userEvents  : class userEvents extends Store {
        static use = ["currentUser"];// list of source stores id

        shouldPropag( newState ) {
            return !!newState.userId;
        }

        refine( datas, newState, changes ) {
            let nUserId = newState.currentUser && newState.currentUser._id,
                cUserId = datas && datas.userId;


            if ( nUserId != cUserId ) {
                this.wait()// do some async
                setTimeout(
                    () => {
                        // get somme user events or whatever...
                        this.push(
                            {
                                userId       : nUserId,
                                count        : stubs[nUserId].length,
                                events       : stubs[nUserId],
                                eventsByType : stubs[nUserId].reduce(
                                    ( res, item ) => {
                                        res[item.type] = res[item.type] || [res[item.type]];
                                        res[item.type].push(item);
                                        return res;
                                    },
                                    {}
                                )
                            },
                            () => {
                                this.context.status.setState({userEvents : "" + stubs[nUserId].length + " events"});
                            });
                        this.release();
                    },
                    500
                );
                this.context.status.setState({userEvents : "user datas change ! doing some async..."});
            }

            return datas;
        }
    }
};


export default () => ({...MyStoreContext});