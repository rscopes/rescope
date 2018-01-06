# ReScope React Tools

## React integration

### rescope

Using the component parent scope :
```

import React from "react";
import {rescope} from "rescope/dist/ReactTools";

class MyComp extends React.Component {
    static use = ["appState"];
    render() {
        return (
            <div>
                <h1>MyComp</h1>
                {
                    this.state.appState.someValues
                }

            </div>
        );
    }
};

export default rescope(NewsListComp);
```

Using specific scope :
```

import React from "react";
import scopeFromSomewhere from "./scope";
import {rescope} from "rescope/dist/ReactTools";

class MyComp extends React.Component {
    static use = ["appState"];
    render() {
        return (
            <div>
                <h1>MyComp</h1>
                {
                    this.state.appState.someValues
                }

            </div>
        );
    }
};

export default rescope(NewsListComp, scopeFromSomewhere);
```

### rescopeProps

Using the component parent scope :
```

import React from "react";
import {rescopeProps} from "rescope/dist/ReactTools";

class MyComp extends React.Component {
    static use = ["appState"];
    render() {
        return (
            <div>
                <h1>MyComp</h1>
                {
                    this.props.appState.someValues
                }

            </div>
        );
    }
};

export default rescopeProps(NewsListComp);
```

Using specific scope :
```

import React from "react";
import scopeFromSomewhere from "./scope";
import {rescopeProps} from "rescope/dist/ReactTools";

class MyComp extends React.Component {
    static use = ["appState"];
    render() {
        return (
            <div>
                <h1>MyComp</h1>
                {
                    this.props.appState.someValues
                }

            </div>
        );
    }
};

export default rescopeProps(NewsListComp, scopeFromSomewhere);
```

### Inheriting Rescope React component

## Inject stores


## Propag stores