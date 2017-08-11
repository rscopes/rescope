import React from "react";
// import Rescope, {Store} from "../../Rescope";
let ReactDom      = require('react-dom'),
    Rescope       = require('../../Rescope'),
    Store         = Rescope.Store,
    NewsListComp  = require('./NewsListComp'),
    StoresContext = require('../StoresContext');

Store.staticContext = StoresContext();

class App extends React.Component {
    static renderTo = ( node ) => {
        Rescope.fetch(
            (err, state, context)=>{
                ReactDom.render(<App/>, node);
            }
        )

    }



    constructor() {
        super(...arguments);
        this.state = {
            ...Store.map(this, ["status", "appState"])
        };
    }

    render() {
        let appState = this.stores.appState;
        return (
            <div>
                <h1>Really basic drafty rescope + react mini app example</h1>

                <div style={{border : "solid 1px lightgrey", borderRadius : "3px"}}>
                    <b><u><button
                        onClick={() => appState.setState(
                            {currentUserId : 'MissTick'})}>MissTick events</button></u></b>&nbsp;&nbsp;
                    <b><u><button
                        onClick={() => appState.setState({currentUserId : 'MrNice'})}>MrNice events</button></u></b>
                </div>
                <pre>
                  {this.state.status && JSON.stringify(this.state.status, null, 2)}
                </pre>
                <NewsListComp/>

            </div>
        );
    }
}

window.App = App;