/*
 * Copyright (c)  2018 Wise Wild Web .
 *
 *  MIT License
 *  
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the "Software"), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *  
 *  The above copyright notice and this permission notice shall be included in all
 *  copies or substantial portions of the Software.
 *  
 *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 *  SOFTWARE.
 *  
 * @author : Nathanael Braun
 * @contact : caipilabs@gmail.com
 */

import React from 'react'
import is from 'is'
import PropTypes from 'prop-types';
import Scope from './Scope';

/**
 * Inheritable ReScope "HOC" (High Order Component)
 *
 * @class Component
 * @desc Parent React Component with store injection in its state
 */
class Component extends React.Component {
    static childContextTypes = {
        rescope: PropTypes.object,
        $stores: PropTypes.object
    }
    static contextTypes      = {
        rescope: PropTypes.object,
        $stores: PropTypes.object
    }
    
    constructor( p, ctx, q ) {
        super(p, ctx, q);
        let scope    =
                p.__scope
                || ctx.rescope;
        this.$scope  = scope;
        this.$stores = this.$scope && this.$scope.stores;
        if ( this.constructor.use ) {
            this.state = {
                ...this.state,
                ...scope.map(this, this.constructor.use || [], false)// don't bind
            }
        }
        else if ( !this.$scope )
            this.render = () => <div>No Rescope here { super.name }</div>
    }
    
    dispatch( ...argz ) {
        this.$scope && this.$scope.dispatch(...argz)
    }
    
    componentWillMount() {
        if ( this.constructor.use ) {
            this.$scope.bind(this, this.constructor.use || [], false)
        }
    }
    
    componentWillUnmount() {
        this.constructor.use
        && this.$scope.unBind(this, this.constructor.use || []);
        this.$scope = null;
    }
    
    componentWillReceiveProps( np, nc ) {
        let nScope = np.__scope
            || nc.rescope || this.$scope;
        
        if ( nScope != this.$scope ) {
            this.constructor.use && this.$scope.unBind(this, this.constructor.use);
            this.$scope  = nScope;
            this.$stores = this.$scope.stores;
            this.constructor.use && nScope.bind(this, this.constructor.use);
        }
    }
    
    getChildContext() {
        return {
            rescope: this.$scope || this.context.rescope,
            $stores: this.$scope.stores || this.context.$stores
        };
    }
    
    render() {
        return this.props.children || <div/>
    }
};

/**
 * Return a React "HOC" (High Order Component) that :
 *  - Inherit BaseComponent,
 *  - Inject & maintain the stores in BaseComponent::use and/or (use) in the instances state.
 *  - Propag (scope) in the returned React Component context
 *
 *
 * @param BaseComponent {React.Component} Base React Component ( default : React.Component )
 * @param scope {ReScope.Scope|function} the propagated Scope where the stores will be searched
 * @param use {array} the list of stores injected from the current scope
 * @returns {ReScopeProvider}
 */
function reScopeState( ...argz ) {
    let [BaseComponent, scope, use] = argz;
    
    
    if ( !(BaseComponent && BaseComponent.prototype && BaseComponent.prototype.isReactComponent) ) {
        return function ( BaseComponent ) {
            return reScopeState(BaseComponent, ...argz)
        }
    }
    
    if ( !use && is.array(scope) ) {
        use   = scope;
        scope = null;
    }
    
    use = [...(BaseComponent.use || []), ...(use || [])];
    
    class ReScopeProvider extends BaseComponent {
        static childContextTypes = {
            ...(BaseComponent.childContextTypes || {}),
            rescope: PropTypes.object,
            $stores: PropTypes.object
        }
        static contextTypes      = {
            ...(BaseComponent.contextTypes || {}),
            rescope: PropTypes.object,
            $stores: PropTypes.object
        }
        static defaultProps      = {
            ...(BaseComponent.defaultProps || {}),
        }
        static displayName       = "stateScoped(" + (BaseComponent.displayName || BaseComponent.name) + ")";
        
        constructor( p, ctx, q ) {
            super(p, ctx, q);
            this.$scope =
                p.__scope
                || is.fn(scope) && scope(this, p, ctx) || scope
                || ctx.rescope;
            
            is.fn(scope)
            && this.$scope.retain()
            
            this.$stores = this.$scope && this.$scope.stores;
            if ( this.$scope && use.length ) {
                this.state = {
                    ...this.state,
                    ...this.$scope.map(this, use, false)// don't bind now due to SSR
                }
            }
            else if ( !this.$scope )
                this.render = () => <div>No Rescope here { BaseComponent.name }</div>
        }
        
        $dispatch( ...argz ) {
            this.$scope.dispatch(...argz)
        }
        
        componentWillMount() {
            if ( use.length ) {
                this.$scope.bind(this, use, false)
            }
            super.componentWillMount && super.componentWillMount()
        }
        
        componentWillUnmount() {
            super.componentWillUnmount && super.componentWillUnmount()
            use.length
            && this.$scope.unBind(this, use);
            is.fn(scope)
            && this.$scope.dispose();
            delete this.$stores;
            delete this.$scope;
        }
        
        componentWillReceiveProps( np, nc ) {
            let nScope = np.__scope
                || scope && this.$scope
                || nc.rescope
                || this.$scope;
            
            if ( nScope != this.$scope ) {
                use.length && this.$scope.unBind(this, use);
                this.$scope  = nScope;
                this.$stores = this.$scope.stores;
                use.length && nScope.bind(this, use);
            }
            super.componentWillReceiveProps && super.componentWillReceiveProps(np, nc);
        }
        
        getChildContext() {
            let ctx = super.getChildContext && super.getChildContext() || {};
            return {
                ...ctx,
                rescope: this.$scope || this.context.rescope,
                $stores: this.$scope.stores || this.context.$stores
            };
        }
    }
    
    return ReScopeProvider;
}

/**
 * Return a React "HOC" (High Order Component) that :
 *  - Inject & maintain the stores listed baseComponent::use and/or (use) in the instances props.
 *  - Propag (scope) in the returned React Component context
 *
 * @param BaseComponent {React.Component} Base React Component ( default : React.Component )
 * @param scope {ReScope.Scope|function} the propagated Scope where the stores will be searched ( default : the default
 *     ReScope::Scope::scopes.static scope )
 * @param use {array} the list of stores to inject from the current scope
 * @returns {ReScopeProvider}
 */
function reScopeProps( ...argz ) {
    let [BaseComponent, scope, use] = argz;
    
    if ( !(BaseComponent && BaseComponent.prototype && BaseComponent.prototype.isReactComponent) ) {
        return function ( BaseComponent ) {
            return reScopeProps(BaseComponent, ...argz)
        }
    }
    if ( !use && is.array(scope) ) {
        use   = scope;
        scope = null;
    }
    
    use = [...(BaseComponent.use || []), ...(use || [])];
    
    
    return reScopeState(class ReScopePropsProvider extends React.Component {
        static childContextTypes = {
            ...(BaseComponent.contextTypes || {}),
            rescope: PropTypes.object,
            $stores: PropTypes.object
        };
        static contextTypes      = {
            ...(BaseComponent.contextTypes || {}),
            rescope: PropTypes.object,
            $stores: PropTypes.object
        };
        static displayName       = "propsScoped(" + (BaseComponent.displayName || BaseComponent.name) + ")";
        
        getChildContext() {
            return this.context;
        }
        
        render() {
            return <BaseComponent { ...this.props }
                                  { ...this.state }
                                  $dispatch={ ( ...argz ) => this.$dispatch(...argz) }
                                  $stores={ this.$stores }/>
        }
    }, scope, use);
}

export {
    Component as default,
    Component,
    reScopeProps,
    reScopeProps as rescopeProps,
    reScopeState,
    reScopeState as rescopeState
};