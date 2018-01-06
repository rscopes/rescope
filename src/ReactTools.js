/*
 * Copyright (c) 2018.  Caipi Labs.  All rights reserved.
 *
 * This File is part of Caipi. You can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *  This project is dual licensed under AGPL and Commercial Licence.
 *
 * @author : Nathanael Braun
 * @contact : caipilabs@gmail.com
 */

import React from 'react'
import PropTypes from 'prop-types';

/**
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
        if ( this.constructor.use ) {
            this.state = {
                ...this.state,
                ...ctx.rescope.map(this, this.constructor.use || [], false)// don't bind
            }
            ctx.rescope.bind(this, this.constructor.use || [], false)
        }
        else this.render = () => <div>No Rescope context here { baseComp.name }</div>
    }
    
    componentWillUnmount() {
        this.constructor.use
        && this.context.rescope.unBind(this, this.constructor.use || [])
    }
    
    componentWillReceiveProps( np, nc ) {
        if ( nc.rescope !== this.context.rescope ) {
            this.constructor.use
            && this.context.rescope.unBind(this, this.constructor.use || []);
            this.constructor.use
            && nc.rescope.bind(this, this.constructor.use || []);
        }
    }
    
    getChildContext() {
        return {
            rescope: this.context.rescope,
            $stores: this.context.$stores
        };
    }
    
    render() {
        return this.props.children || <div/>
    }
};

/**
 *
 * @param baseComp
 * @param context
 * @returns {ScopeProvider}
 */
function rescope( baseComp, _context ) {
    let context = _context;
    return class ScopeProvider extends baseComp {
        static childContextTypes = {
            ...(baseComp.childContextTypes || {}),
            rescope: PropTypes.object,
            $stores: PropTypes.object
        }
        static contextTypes      = {
            ...(baseComp.contextTypes || {}),
            rescope: PropTypes.object,
            $stores: PropTypes.object
        }
        static defaultProps      = {
            ...(baseComp.defaultProps || {}),
            dispatch: () => context.dispatch(...arguments)
        }
        
        constructor( p, ctx, q ) {
            super(p, ctx, q);
            context = context || ctx.rescope;
            if ( context && this.constructor.use ) {
                this.state = {
                    ...this.state,
                    ...context.map(this, this.constructor.use || [], false)// don't bind
                }
                context.bind(this, this.constructor.use || [], false)
                this.$stores = context.stores;
            }
            else this.render = () => <div>No Rescope context here { baseComp.name }</div>
        }
        
        componentWillUnmount() {
            this.constructor.use
            && context.unBind(this, this.constructor.use || [])
            delete this.$stores;
        }
        
        componentWillReceiveProps( np, nc ) {
            if ( !_context && nc.rescope !== this.context.rescope ) {
                this.constructor.use
                && this.context.rescope.unBind(this, this.constructor.use || []);
                context      = nc.rescope;
                this.$stores = context.stores;
                this.constructor.use
                && nc.rescope.bind(this, this.constructor.use || []);
            }
        }
        
        getChildContext() {
            let ctx = super.getChildContext && super.getChildContext() || {};
            return {
                ...ctx,
                rescope: context,
                $stores: context.stores
            };
        }
    }
}

/**
 *
 * @param BaseComp
 * @param context
 * @returns {ScopeProvider}}
 */
function rescopeProps( BaseComp, _context ) {
    return rescope(class ReScopePropsProvider extends React.Component {
        static use               = BaseComp.use
        static childContextTypes = {
            ...(BaseComp.contextTypes || {}),
            rescope: PropTypes.object,
            $stores: PropTypes.object
        }
        static contextTypes      = {
            ...(BaseComp.contextTypes || {}),
            rescope: PropTypes.object,
            $stores: PropTypes.object
        }
        getChildContext() {
            return this.context;
        }
        render() {
            let context = _context || this.context.rescope;
            return <BaseComp { ...this.props } { ...this.state } dispatch={ context.dispatch.bind(context) }
                             $stores={ context.stores }/>
        }
    }, _context)
}

export {
    Component as default,
    Component,
    rescopeProps,
    rescope
};