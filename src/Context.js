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


import Store from "./Store";

let openContexts = {};

class Context extends Store {

    constructor() {
        super(...arguments)
    }

    fork( context, cb ) {

    }

    fetch( context, cb ) {
        context    = context || Store.staticContext;
        let stores = Object.keys(context);
        if ( !stores.length )
            return cb(null, context);
        let mountAllStore = new Store(context);
        mountAllStore.pull(stores, true);
        mountAllStore.then(( state ) => cb(null, state, context));
    }
}