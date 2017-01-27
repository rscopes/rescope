import React from "react";
let ReactDom      = require('react-dom'),
    Rescope       = require('../../Store'),
    NewsListComp  = require('./NewsListComp'),
    StoresContext = require('./StoresContext');

Rescope.staticContext = StoresContext();

class App extends React.Component {
    static renderTo = ( node ) => {
        ReactDom.render(<App/>, node);
    }


    constructor( props ) {
        super(...arguments);
        this.state = {};

        // using static Rescope.map fn
        // this.stores = {};// stores refs are automaticly added in the store hashmap if .stores exist
        // Rescope.map(this, ["status", "session"])

        // or using a dedicated store instance
        this._store = new Rescope(["status","session"]);
        this._store.bind(this);
        this.stores = this._store.stores;
    }

    render() {
        let session = this.stores.session;
        return (
            <div>
                <h1>Really basic drafty rescope + react mini app example</h1>

                <div style={{border : "solid 1px lightgrey", borderRadius : "3px"}}>
                    <b><u><span
                        onClick={() => session.setState({currentUserId : 'MissTick'})}>MissTick events</span></u></b>
                    <b><u><span
                        onClick={() => session.setState({currentUserId : 'MrNice'})}>MrNice events</span></u></b>
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