/**
 * @author Nathanael BRAUN
 *
 * Date: 25/01/2017
 * Time: 11:08
 */
import Store from "../../Rescope";
import StoreContext from "../StoresContext";
function NewsListComp( target = document.createElement('div') ) {

    this.setState = ( state ) => {
        target.innerHTML =
            (
                state.userEvents &&
                state.userEvents.events
                    .map(
                        ( evt ) => `
                                    <div style="border: solid 1px lightgrey;border-radius: 3px">
                                        <b><u><center>Event type : ${evt.type}</center></u></b>
                                        <p>${evt.text}</p>
                                    </div>`
                    ).join()
                || "<b><u><center>Loading...</center></u></b>"
            );
    };
    this.node     = target;
}

window.StoreContext = StoreContext;
window.NewsListComp = NewsListComp;
export default NewsListComp;