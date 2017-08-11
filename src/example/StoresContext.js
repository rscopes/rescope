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
        static use = ["appState"];
    },
    appState    : class appState extends Store {
        static initialState = {
            currentUserId : "MrNice"
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
    currentUser : class currentUser extends Store {
        static use = ["appState"];// list of source stores id

        refine( datas, {appState : {currentUserId : NewUserId}}, changes ) {
            let LastUserId = datas && datas._id;

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
        static use = ["currentUser"];
        static require = ["currentUser"];
        datas = {};

        refine( datas, {currentUser : {_id : nUserId}}, changes ) {
            let {cUserId = void 0} = datas;


            if ( nUserId != cUserId ) {
                this.wait();// do some async whithout pushing
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