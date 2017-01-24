/**
 * @author Nathanael BRAUN
 *
 * Date: 03/12/2016
 * Time: 09:28
 */


import Store from "../Store";

let storeContext = {
    session : class MyStore extends Store {
        static use = [];// list of source stores id
        static follow = ["currentUser"];// keys for the default shouldPropag fn
        constructor(){
            super(...arguments);
            this.state={
                currentUserId : "MissTick"
            }
            this._updater = setInterval(
                ()=>this.setState()
            )
        }
        destroy(){
            super.destroy(...arguments);
        }
    },
    currentUser : class MyStore extends Store {
        static use = ["session"];// list of source stores id
        static follow = ["currentUser"];// keys for the default shouldPropag fn
        constructor(){
            super(...arguments);
        }
        shouldPropag( newState ){

        }
        refine( lastState, privateState, oldPState ){
            let {UserId} = privateState.session;

            if (UserId != oldPState.session)


            return lastState;
        }
    },
    data2 : class MyStore extends Store {
        static use = [];// list of source stores id
        static follow = ["currentUser"];// keys for the default shouldPropag fn
        constructor(){
            super(...arguments);
        }
        shouldPropag( newState ){

        }
        refine( lastPublicState, privateState ){

        }
    }
}