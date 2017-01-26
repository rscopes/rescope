/**
 * @author Nathanael BRAUN
 *
 * Date: 03/12/2016
 * Time: 09:28
 */
import Store from "../../Store";
let stubs = require("./stubs/datas");

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

        refine( lastState, privateState ) {
            let NewUserId  = privateState.session && privateState.session.currentUserId,
                LastUserId = lastState && lastState._id;

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
                                MyStoreContext.status.setState({currentUser : JSON.stringify(this.state)});
                            }
                        );

                        this.release();
                    },
                    500
                );
                MyStoreContext.status.setState({currentUser : "user id change ! doing some async..."});
            }

            return lastState;
        }
    },
    userEvents  : class userEvents extends Store {
        static use = ["currentUser"];// list of source stores id
        static follow = ["currentUser"];// keys for the default shouldPropag fn

        shouldPropag( newState ) {
            return !!newState.userId;
        }

        refine( lastState, privateState ) {
            let {_id:nUserId} = privateState.currentUser,
                cUserId       = lastState && lastState.userId;


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
                                MyStoreContext.status.setState({userEvents : "" + stubs[nUserId].length + " events"});
                            });
                        this.release();
                    },
                    500
                );
                MyStoreContext.status.setState({userEvents : "user datas change ! doing some async..."});
            }

            return lastState;
        }
    }
};

window.MyStoreContext = MyStoreContext;
export default MyStoreContext;