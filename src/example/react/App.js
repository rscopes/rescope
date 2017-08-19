/*
 * Copyright (c)  2017 Caipi Labs .
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

import React from "react";
// import Rescope, {Store} from "../../Rescope";
let ReactDom      = require('react-dom'),
    Rescope       = require('../../Rescope'),
    Context       = Rescope.Context,
    NewsListComp  = require('./NewsListComp'),
    StoresContext = require('../StoresContext');


let
    GlobalStaticContext = new Context({}, {id : "static", defaultMaxListeners : 500});

new Context(new StoresContext(), {id : "appContext", parent : GlobalStaticContext, defaultMaxListeners : 500});

class App extends React.Component {
    static renderTo = ( node ) => {
        Context.contexts.appContext.mount(
            ["status", "appState"]
        ).pull(
            ( err, state, context ) => {
                ReactDom.render(<App/>, node);
            }
        )

    }


    constructor() {
        super(...arguments);

        this.state = {
            ...Context.contexts.appContext.map(this, ["status", "appState"])
        };
    }

    render() {
        let appState = this.stores.appState;
        return (
            <div>
                <h1>Really basic drafty rescope + react mini app example</h1>

                <div style={{border : "solid 1px lightgrey", borderRadius : "3px"}}>
                    <b><u>
                        <button
                            onClick={() => appState.setState(
                                {currentUserId : 'MissTick'})}>MissTick events
                        </button>
                    </u></b>&nbsp;&nbsp;
                    <b><u>
                        <button
                            onClick={() => appState.setState({currentUserId : 'MrNice'})}>MrNice events
                        </button>
                    </u></b>
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