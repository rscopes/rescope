# ReScope React Tools

## React integration

### withScope

Using the component parent scope :
```

import React from "react";
import {withScope} from "rescope/dist/ReactTools";

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

export default withScope(NewsListComp);
```

Using specific scope :
```

import React from "react";
import scopeFromSomewhere from "./scope";
import {withScope} from "rescope/dist/ReactTools";

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

export default withScope(NewsListComp, scopeFromSomewhere);
```

### withScopeToProps

Using the component parent scope :
```

import React from "react";
import {withScopeToProps} from "rescope/dist/ReactTools";

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

export default withScopeToProps(NewsListComp);
```

Using specific scope :
```

import React from "react";
import scopeFromSomewhere from "./scope";
import {withScopeToProps} from "rescope/dist/ReactTools";

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

export default withScopeToProps(NewsListComp, scopeFromSomewhere);
```

### Inheriting Rescope React component

## Inject stores


## Propag stores