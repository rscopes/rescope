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


var isString        = require('isstring'),
    isArray         = require('isarray'),
    EventEmitter    = require('events'),
    isFunction      = require('isfunction')
    , shortid       = require('shortid')
    , __proto__push = ( target, id, parent ) => {
    let here           = {
        [id] : function () {
        }
    };
    here[id].prototype = parent ? new parent["_" + id]() : target[id] || {};
    target[id]         = new here[id]();
    target['_' + id]   = here[id];
};

let openContexts = {};

export default class Context extends EventEmitter {
    static contexts = openContexts;
    static Store    = null;

    static getContext( key ) {
        return openContexts[key] = openContexts[key] || new Context({});
    };

    constructor( ctx, {id, parent, state, datas, name} = {} ) {
        super();

        this._id = id = id || ("_____" + shortid.generate());

        if ( openContexts[id] ) {
            openContexts[id].register(ctx);
            return openContexts[id]
        }

        openContexts[id] = this;
        this._isLocalId  = true;


        this.stores = {};
        this.state  = {};
        this.datas  = {};
        __proto__push(this, 'stores', parent);
        __proto__push(this, 'state', parent);
        __proto__push(this, 'datas', parent);
        this.parent = parent;

        this.sources = [];

        this.__retainLocks = {all : 0};
        this.__w8Locks     = {all : 1};
        this.__listening   = {};
        this.__context     = {};
        this.__mixed       = [];
        this.__mixedList   = [];
        this._followers    = [];
        if ( parent ) {
            parent.retain("isMyParent");
            parent.on(this.__parentList = {
                'stable'   : s => this.release("isMyParent"),
                'unstable' : s => this.wait("isMyParent"),
                'update'   : s => this._propag()
            });
            // this.register(parent.__context, state, datas);
        }


        this.register(ctx, state, datas);
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
        if ( !this.__context[id] ) {//ask mixed || parent
            if ( this.__mixed.reduce(( mounted, ctx ) => (mounted || ctx._mount(id, state, datas)), false) ||
                !this.parent )
                return;
            return this.parent._mount(...arguments);
        }
        this.constructor.Store.mountStore(id, this, null, state, datas);

        if ( !this.__listening[id] ) {
            !this.__context[id].isStable() && this.wait(id);

            this.__context[id].on(
                this.__listening[id] = {
                    'update'   : s => this.propag(),
                    'stable'   : s => this.release(id),
                    'unstable' : s => this.wait(id)
                });
        }
        return this.__context[id];
    }


    mixin( targetCtx ) {
        let parent = this.parent, lists;
        this.__mixed.push(targetCtx)
        targetCtx.retain();

        this.__mixedList.push(lists = {
            'stable'   : s => this.release(targetCtx._id),
            'unstable' : s => this.wait(targetCtx._id),
            'update'   : s => this._propag()
        })
        targetCtx.on(lists);
        __proto__push(this, 'stores', parent);
        __proto__push(this, 'state', parent);
        __proto__push(this, 'datas', parent);
        targetCtx.relink(targetCtx.__context, this, true);

        __proto__push(this, 'stores', this);
        __proto__push(this, 'state', this);
        __proto__push(this, 'datas', this);
        this.relink(this.__context, this);
    }

    register( rawCtx, state = {}, datas = {} ) {
        this.relink(rawCtx, this, false, state, datas);
        Object.keys(rawCtx).forEach(
            id => (isFunction(rawCtx[id]) && rawCtx[id].singleton && this._mount(id, state[id], datas[id])))

    }

    /**
     * Map srcCtx store's on targetCtx headers proto's
     * @param srcCtx
     * @param targetCtx
     * @param state
     * @param datas
     */
    relink( srcCtx, targetCtx = this, external, state = {}, datas = {} ) {
        let lctx = targetCtx._stores.prototype;
        Object.keys(srcCtx)
            .forEach(
                id => {
                    if ( targetCtx.__context[id] === srcCtx[id] ||
                        targetCtx.__context[id] && (targetCtx.__context[id].constructor === srcCtx[id] ) )
                        return;

                    if ( targetCtx.__context[id] ) {
                        console.warn("Rescope Context : ", id, " already exist in this context !");
                        return;
                    }
                    if ( !external )
                        this.__context[id] = srcCtx[id];

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
                        targetCtx._state.prototype,
                        id,
                        (( ctx, id ) => (
                            {
                                get : () => (ctx[id] && ctx[id].state),
                                set : ( v ) => (this._mount(id, v))
                            }
                        ))
                        (this.__context, id)
                    );
                    Object.defineProperty(
                        targetCtx._datas.prototype,
                        id,
                        (( ctx, id ) => (
                            {
                                get : () => (ctx[id] && ctx[id].datas),
                                set : ( v ) => (this._mount(id, undefined, v))
                            }
                        ))
                        (this.__context, id)
                    );
                }
            )
    }

    /**
     * @param obj {React.Component|Store|function)
     * @param key {string} optional key where to map the public state
     */
    bind( obj, key, as, setInitial = true ) {
        let lastRevs, datas;
        if ( key && !isArray(key) )
            key = [key];

        // key = key||

        if ( as === true ) {
            setInitial = true;
            as         = null;
        }

        this._followers.push(
            [
                obj,
                key,
                as,
                lastRevs = key && key.reduce(( revs, id ) => (revs[id] = 0, revs), {})
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
            if ( followers[i][0] === obj && ('' + followers[i][1]) == ('' + key) &&
                ('' + followers[i][2]) == ('' + as) )
                return followers.splice(i, 1);
    }

    /**
     * Pull stores in the private state
     * @param stores  {Array} (passed to Store::map) Ex : ["session", "otherNamedStore:key", otherStore.as("otherKey")]
     */
    pull( stores, doWait, origin ) {
        this.mount(stores);
        this.bind(origin, stores, null, false);

        return stores.reduce(( datas, id ) => (datas[id] = this.stores[id] && this.stores[id].datas, datas), {});
    }

    getUpdates( revs, output, updated ) {
        let ctx = this.__context;

        output = output || {};
        Object.keys(ctx).forEach(
            id => {
                if ( !revs || !( !revs.hasOwnProperty(id) || ctx[id]._rev <= revs[id] ) ) {

                    updated    = true;
                    output[id] = this.datas[id];
                    if ( revs )
                        revs[id] = ctx[id]._rev;

                }
            }
        );
        updated = this.__mixed.reduce(( updated, ctx ) => (ctx.getUpdates(revs, output, updated) || updated), updated);
        updated = this.parent && this.parent.getUpdates(revs, output, updated) || updated;
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

    removeListener( lists ) {
        if ( !isString(lists) && lists )
            Object.keys(lists).forEach(k => super.removeListener(k, lists[k]));
        else super.removeListener(...arguments);
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

    propag() {
        this._propagTM && clearTimeout(this._propagTM);
        this._propagTM = setTimeout(
            e => {
                this._propag()
            }
        );
    }

    _propag() {
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
                lastRevs &&
                key.forEach(id => (lastRevs[id] = this.__context[id] && this.__context[id]._rev || 0));
            });
        this.emit("update", this.getUpdates());
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
            this._propagTM && clearTimeout(this._propagTM);

            this._stabilizerTM = setTimeout(
                e => {
                    if ( !this._stable )
                        return this._stabilizerTM = null;

                    this.emit("stable", this);

                    this._propag()
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
            id => this.__context[id].removeListener(this.__listening[id])
        );
        this.__listening = {};

        if ( this._isLocalId )
            delete openContexts[this._id];

        for ( let key in ctx )
            if ( !isFunction(ctx[key]) ) {
                if ( ctx[key].context === ctx )
                    ctx[key].destroy();

                ctx[key] = ctx[key].constructor;
            }
        while (this.__mixedList.length) {
            this.__mixed[0].dispose();

            this.__mixed.shift().removeListener(this.__mixedList.shift())
        }
        this.parent.dispose("isMyParent");
        this.parent.removeListener(this.__parentList);

    }
}