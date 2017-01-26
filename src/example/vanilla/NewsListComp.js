/**
 * @author Nathanael BRAUN
 *
 * Date: 25/01/2017
 * Time: 11:08
 */
import Store from "../../Store";
import MyStoreContext from "./MyStoreContext";
function NewsListComp( target = document.createElement('div') ) {
    let store = new Store(MyStoreContext, ["userEvents", "status"])
        .on(
            "stable",
            ( state ) => {
                target.innerHTML =
                    `<div style="border: solid 1px lightgrey;border-radius: 3px">
                        <b><u><span onclick="MyStoreContext.session.setState({currentUserId:'MissTick'})">MissTick events</span></u></b>
                        <b><u><span onclick="MyStoreContext.session.setState({currentUserId:'MrNice'})">MrNice events</span></u></b>
                    </div>` +
                    `<div style="border: solid 1px lightgrey;border-radius: 3px">
                        ${JSON.stringify(state.status,null,2).replace(/\n/ig,'<br/>')}
                    </div>`
                    + (
                        state.userEvents && state.userEvents.events
                            .map(
                                ( evt ) => `
                        <div style="border: solid 1px lightgrey;border-radius: 3px">
                        <b><u><center>Event type : ${evt.type}</center></u></b>
                        <p>${evt.text}</p>
                        </div>`
                            ).join()
                    );
            }
        );

    target.innerHTML = "<b><u><center>Loading...</center></u></b>";

    return target;
}

window.NewsListComp = NewsListComp;
// export default NewsList;