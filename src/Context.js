/*
 * Copyright (c) 2017.  Caipi Labs.  All rights reserved.
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

/**
 * @author Nathanael BRAUN
 *
 * Date: 13/08/2017
 * Time: 17:15
 */


var isString     = require('isstring'),
    isArray      = require('isarray'),
    EventEmitter = require('events'),
    isFunction   = require('isfunction')
    , Store      = require('./Store');

let openContexts = {};

class Context extends EventEmitter {
    static openContexts = openContexts;

    static getContext( key ) {
        return openContexts[key] = openContexts[key] || new Context({});
    };

    constructor( ctx, state, datas ) {
        super();
        this.context   = {};
        this.state     = {};
        this.datas     = {};
        this.__locks   = {all : 0};
        this.__context = {};
        this.map(ctx, state, datas);
    }

    map( ctx, state = {}, datas = {} ) {
        Object.keys(ctx).forEach(
            id => {
                if ( this.__context[id] ) {
                    console.warn("Rescope Context : ", id, " already exist in this context !");
                    return;
                }
                this.__context[id] = ctx[id];
                Object.defineProperty(
                    this.context,
                    id,
                    (( ctx, id ) => (
                        {
                            get : () => Store.mountStore(id, ctx, state[id])
                        }
                    ))
                    (ctx, id)
                );
                Object.defineProperty(
                    this.state,
                    id,
                    (( ctx, id ) => (
                        {
                            get : () => (!isFunction(ctx[id]) ? ctx[id].state : undefined),
                            set : ( v ) => (Store.mountStore(id, ctx, v))
                        }
                    ))
                    (ctx, id)
                );
                Object.defineProperty(
                    this.datas,
                    id,
                    (( ctx, id ) => (
                        {
                            get : () => (!isFunction(ctx[id]) ? ctx[id].datas : undefined)
                        }
                    ))
                    (ctx, id)
                );
            }
        )
    }

    bind( comp, querys ) {

    }

    serialize( flags_states = /.*/, flags_datas = /.*/ ) {
        let ctx = this.__context, output = {state : {}, datas : {}};
        Object.keys(ctx).forEach(
            id => {
                if ( isFunction(ctx[id]) )
                    return;

                let flags = ctx[id].constructor.flags;

                flags = isArray(flags) ? flags : [flags || ""];

                if ( flags.reduce(( r, flag ) => (r || flags_states.test(flag)), false) )
                    output.state[id] = this.state[id];

                if ( flags.reduce(( r, flag ) => (r || flags_datas.test(flag)), false) )
                    output.datas[id] = this.datas[id];
            }
        )
        return output;
    }

    restore( {state, datas}, quiet ) {
        let ctx = this.__context;
        Object.keys(datas).forEach(
            id => {
                quiet ?
                ctx.datas = datas[id]
                    :
                ctx.push(datas[id]);
            }
        );
        Object.keys(state).forEach(
            id => {
                quiet ?
                ctx.state = state[id]
                    :
                ctx.setState(state[id]);
            }
        );
    }

    lock( reason ) {
        this.__locks.all++;
        if ( reason ) {
            this.__locks[reason] = this.__locks[reason] || 0;
            this.__locks[reason]++;
        }
    }

    dispose( reason ) {
        this.__locks.all--;
        if ( reason ) {
            this.__locks[reason] = this.__locks[reason] || 0;
            this.__locks[reason]--;
        }
        if ( !this.__locks.all )
            this.destroy();
    }

    destroy() {
        let ctx = this.__context;
        Object.keys(ctx).forEach(
            id => {
                if ( isFunction(ctx[id]) || this.context !== ctx[id].context )
                    return;
                ctx[id].destroy()
            }
        )
    }
}