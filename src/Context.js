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

export default class Context extends EventEmitter {
    static openContexts = openContexts;

    static getContext( key ) {
        return openContexts[key] = openContexts[key] || new Context({});
    };

    constructor( ctx, parent, state, datas, name ) {
        super();
        this._stores           = function stores() {
        };
        this._stores.prototype = parent ? new parent._stores() : {};
        this.stores            = new this._stores();
        this._state            = function state() {
        };
        this._state.prototype  = parent ? new parent._state() : {};
        this.state             = new this._state();
        this._datas            = function datas() {
        };
        this._datas.prototype  = parent ? new parent._datas() : {};
        this.datas             = new this._datas();
        this.parent            = parent;

        this.__retainLocks = {all : 0};
        this.__w8Locks     = {all : 1};
        this.__listening   = {};
        this.__context     = {};
        this._followers    = [];
        if ( parent ) {
            parent.retain("isMyParent");
            parent.on('stable', this.__parentStableList = s => this.release("isMyParent"));
            parent.on('unstable', this.__parentUnStableList = s => this.wait("isMyParent"));
            this.map(parent.__context, state, datas);
        }


        this.map(ctx, state, datas);
        this.__w8Locks.all--;
        this._stable = !!this.__w8Locks.all;

    }

    mount( id, state, datas ) {
        if ( isArray(id) ) {
            id.forEach(k => this._mount(k, state && state[k], datas && datas[k]));
        } else {
            this._mount(...arguments);
        }
        return this;
    }

    _mount( id, state, datas ) {
        if ( !this.__context[id] ) {//ask parent
            if ( !this.parent )
                return;
            return this.parent.mount(...arguments);
        }
        Store.mountStore(id, this.__context, null, state, datas);

        if ( !this.__listening[id] ) {
            !this.__context[id].isStable() && this.wait(id);

            this.__context[id].on(
                this.__listening[id] = {
                    'stable'   : s => this.release(id),
                    'unstable' : s => this.wait(id)
                });
        }
        return this.__context[id];
    }

    map( ctx, state = {}, datas = {} ) {
        let lctx = this._stores.prototype;
        Object.keys(ctx).forEach(
            id => {
                if ( this.__context[id] ) {
                    console.warn("Rescope Context : ", id, " already exist in this context !");
                    return;
                }

                this.__context[id] = ctx[id];

                Object.defineProperty(
                    lctx,
                    id,
                    (( ctx, id ) => (
                        {
                            get : () => this._mount(id, state[id], datas[id])
                        }
                    ))
                    (this.__context, id)
                );
                Object.defineProperty(
                    this.state,
                    id,
                    (( ctx, id ) => (
                        {
                            get : () => (ctx[id] && ctx[id].state),
                            set : ( v ) => (this._mount(id, v))
                        }
                    ))
                    (lctx, id)
                );
                Object.defineProperty(
                    this.datas,
                    id,
                    (( ctx, id ) => (
                        {
                            get : () => (ctx[id] && ctx[id].datas),
                            set : ( v ) => (this._mount(id, undefined, v))
                        }
                    ))
                    (lctx, id)
                );
            }
        )
        Object.keys(ctx).forEach(
            id => (isFunction(ctx[id]) && ctx[id].singleton && this._mount(id, state[id], datas[id])))

    }

    /**
     * @param obj {React.Component|Store|function)
     * @param key {string} optional key where to map the public state
     */
    bind( obj, key, as, setInitial = true ) {
        let lastRevs, datas;
        if ( !isArray(key) )
            key = [key];

        if ( as === true ) {
            setInitial = true;
            as         = null;
        }

        this._followers.push(
            [
                obj,
                key,
                as,
                lastRevs = key.reduce(( revs, id ) => (revs[id] = 0, revs), {})
            ]);

        this.mount(key);

        if ( setInitial && this._stable ) {
            datas = this.getUpdates(lastRevs);
            if ( !datas ) return;
            if ( typeof obj != "function" ) {
                if ( as ) obj.setState({[as] : datas});
                else obj.setState(datas);
            } else {
                obj(datas);
            }
        }
    }

    /**
     * Un bind this context off the given component-keys
     * @param obj
     * @param key
     * @returns {Array.<*>}
     */
    unBind( obj, key, as ) {
        var followers = this._followers,
            i         = followers && followers.length;
        while (followers && i--)
            if ( followers[i][0] === obj && ('' + followers[i][1]) == ('' + key) && ('' + followers[i][2]) == ('' + as) )
                return followers.splice(i, 1);
    }

    getUpdates( revs ) {
        let updated = false,
            output  = {},
            ctx     = this.__context;

        Object.keys(revs).forEach(
            id => {
                if ( isFunction(ctx[id]) || ctx[id]._rev <= revs[id] )
                    return;
                updated    = true;
                output[id] = this.datas[id];
                revs[id]   = ctx[id]._rev;
            }
        )
        return updated && output;
    }

    serialize( flags_states = /.*/, flags_datas = /.*/ ) {
        let ctx = this.__context, output = {state : {}, datas : {}},
            _flags_states,
            _flags_datas;
        if ( isArray(flags_states) )
            flags_states.forEach(id => (output.state[id] = this.state[id]))

        if ( isArray(flags_datas) )
            flags_datas.forEach(id => (output.datas[id] = this.datas[id]))

        if ( !isArray(flags_datas) && !isArray(flags_states) )
            Object.keys(ctx).forEach(
                id => {
                    if ( isFunction(ctx[id]) )
                        return;

                    let flags = ctx[id].constructor.flags;

                    flags = isArray(flags) ? flags : [flags || ""];

                    if ( flags.reduce(( r, flag ) => (r || _flags_states.test(flag)), false) )
                        output.state[id] = this.state[id];

                    if ( flags.reduce(( r, flag ) => (r || _flags_datas.test(flag)), false) )
                        output.datas[id] = this.datas[id];
                }
            )
        return output;
    }

    on( lists ) {
        if ( !isString(lists) && lists )
            Object.keys(lists).forEach(k => super.on(k, lists[k]));
        else super.on(...arguments);
    }

    un( lists ) {
        if ( !isString(lists) && lists )
            Object.keys(lists).forEach(k => super.un(k, lists[k]));
        else super.un(...arguments);
    }

    /**
     * once('stable', cb)
     * @param obj {React.Component|Store|function)
     * @param key {string} optional key where to map the public state
     */
    then( cb ) {
        if ( this._stable )
            return cb(null, this.datas);
        this.once('stable', e => cb(null, this.datas));
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


    retain( reason ) {
        this.__retainLocks.all++;
        if ( reason ) {
            this.__retainLocks[reason] = this.__retainLocks[reason] || 0;
            this.__retainLocks[reason]++;
        }
    }

    dispose( reason ) {
        this.__retainLocks.all--;
        if ( reason ) {
            this.__retainLocks[reason] = this.__retainLocks[reason] || 0;
            this.__retainLocks[reason]--;
        }
        if ( !this.__retainLocks.all )
            this.destroy();
    }

    wait( reason ) {
        console.log("wait", reason);
        this._stable = false;
        !this.__w8Locks.all && this.emit("unstable", this);
        this.__w8Locks.all++;
        if ( reason ) {
            this.__w8Locks[reason] = this.__w8Locks[reason] || 0;
            this.__w8Locks[reason]++;
        }
    }

    release( reason ) {
        console.log("release", reason);
        this.__w8Locks.all--;
        if ( reason ) {
            this.__w8Locks[reason] = this.__w8Locks[reason] || 0;
            this.__w8Locks[reason]--;
        }
        this._stable = true;
        if ( !this.__w8Locks.all ) {
            this._stabilizerTM && clearTimeout(this._stabilizerTM);
            this._stabilizerTM = setTimeout(
                e => {
                    if ( !this._stable )
                        return this._stabilizerTM = null;

                    this.emit("stable", this);

                    if ( this._followers.length )
                        this._followers.forEach(( {0 : obj, 1 : key, 2 : as, 3 : lastRevs} ) => {
                            let datas = this.getUpdates(lastRevs);
                            if ( !datas ) return;
                            if ( typeof obj != "function" ) {
                                if ( as ) obj.setState({[as] : datas});
                                else obj.setState(datas);
                            } else {
                                obj(datas);
                            }
                            key.forEach(id => (lastRevs[id] = this.__context[id] && this.__context[id]._rev));
                        });
                }
            );
        }

    }

    /**
     * order destroy of local stores
     */
    destroy() {
        let ctx = this.__context;

        Object.keys(
            this.__listening
        ).forEach(
            id => this.__context[id].un(this.__listening[id])
        );
        this.__listening = {};

        for ( let key in ctx )
            if ( !isFunction(ctx[key]) ) {
                if ( ctx[key].context === ctx )
                    ctx[key].destroy();

                ctx[key] = ctx[key].constructor;
            }
        if ( this.parent ) {
            this.parent.dispose("isMyParent");
            this.parent.un('stable', this.__parentStableList);
            this.parent.un('unstable', this.__parentUnStableList);
        }
    }
}