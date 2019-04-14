/*
 * The MIT License (MIT)
 * Copyright (c) 2019. Wise Wild Web
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 *  @author : Nathanael Braun
 *  @contact : n8tz.js@gmail.com
 */

import is from "is";

/**
 * Minimal push sequencer, apply stores specific task in the right order (root stores
 * first)
 */
let taskQueue      = [],
    curWeight      = 0,
    maxWeight      = 0,
    minWeight      = 0,
    taskCount      = 0,
    deSync         = false,
    deSyncMaxTasks = 10,
    task,
    isRunning,
    errorCatcher   = {
        lastError: null,
        dispatch : function ( error ) {
            errorCatcher.disable();
            if ( task && task[ 0 ].handleError ) {
                task[ 0 ].handleError(error, task);
            }
            else if ( task )
                console.error("ReScope : An apply task has failed !!", task[ 1 ], " on ", task[ 0 ].name || task[ 0 ].constructor.name)
        
            isRunning = false;
            task      = null;
            runNow();
        },
        enable   : ( typeof window !== 'undefined' )
                   ? () => {
                window.addEventListener('error', errorCatcher.dispatch)
            } : () => {
                process.on('uncaughtException', errorCatcher.dispatch);
            },
        disable  : ( typeof window !== 'undefined' )
                   ? () => {
                window.removeEventListener('error', errorCatcher.dispatch)
            } : () => {
                process.removeListener('uncaughtException', errorCatcher.dispatch);
            }
    }
;

function runNow() {
    if ( !isRunning ) {
        run();
    }
}

function run() {
    let from  = Date.now();
    isRunning = true;
    errorCatcher.enable();
    while ( taskCount ) {
        
        // try for the current weight
        while ( !( taskQueue[ curWeight ] && taskQueue[ curWeight ].length ) )
            curWeight++;
        
        taskCount--;
        task = taskQueue[ curWeight ].shift();
        //console.log("Task : ", task[1], " on ", task[0].name);
        task[ 0 ][ task[ 1 ] ].apply(task[ 0 ], task[ 2 ]);
    }
    task = undefined;
    errorCatcher.disable();
    
    isRunning = false;
    if ( taskCount ) {
        setTimeout(runNow);
    }
}

//
//index.setTaskDeSync = ( nb ) => {
//    if ( nb === false )
//        return deSync = false;
//    else if ( nb === true ) {
//        deSync         = true;
//        deSyncMaxTasks = 10;
//    }
//    else (is.int(nb))
//    {
//        deSync         = true;
//        deSyncMaxTasks = nb;
//    }
//};

export default {
    pushTask( obj, fn, argz ) {
        /**
         * The more a store have sources, the more it should be processed first
         * So leafs stores stay sync, and root stores receive merged state updates;
         * global state stay coherent
         *
         * This mean whatever the number of stores & the complexity of the deps,
         * updating a store state will update its synchrone child stores immediately
         *
         *
         * @type {*|number}
         */
        let weight = obj._sources && obj._sources.length || 1,
            stack  = taskQueue[ weight ] =
                taskQueue[ weight ] || [];
        
        maxWeight = Math.max(maxWeight, weight);
        curWeight = Math.min(curWeight, weight);
        taskCount++;
        
        //console.log("Push Task : ", fn, " on ", obj.name, weight);
        stack.push([ obj, fn, argz ]);
        setTimeout(runNow, 0);
        return stack.length;
    }
};