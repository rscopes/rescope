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

/**
 * Minimal push sequencer, apply stores specific task in the right order (root stores first)
 */
let taskQueue    = [],
    curWeight    = 0,
    maxWeight    = 0,
    minWeight    = 0,
    taskCount    = 0,
    //deSyncSteps = 1000,
    task,
    isRunning,
    errorCatcher = {
        lastError: null,
        dispatch : function ( error ) {
            errorCatcher.disable();
            if ( task && task[0].handleError ) {
                task[0].handleError(error, task);
            }
            else if ( task )
                console.error("ReScope : A task has failed !!", task[1], " on ", task[0].name || task[0].constructor.name)
    
            task=null;
            run();
        },
        enable   : (typeof window !== 'undefined')
            ? () => {
                window.addEventListener('error', errorCatcher.dispatch)
            } : () => {
                process.on('uncaughtException', errorCatcher.dispatch);
            },
        disable  : (typeof window !== 'undefined')
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
    isRunning = true;
    errorCatcher.enable();
    while ( taskCount ) {
        
        // try for the current weight
        while ( !(taskQueue[curWeight] && taskQueue[curWeight].length) )
            curWeight++;
        
        taskCount--;
        task = taskQueue[curWeight].shift();
        //console.log("Task : ", task[1], " on ", task[0].name);
        task[0][task[1]].apply(task[0], task[2]);
    }
    task = undefined;
    errorCatcher.disable();
    
    if ( !taskCount ) {
        isRunning = false;
        setTimeout(run);
    }
}


export default {
    pushTask( obj, fn, argz ) {
        let weight = obj._sources && obj._sources.length || 1,
            stack  = taskQueue[weight] =
                taskQueue[weight] || [];
        
        maxWeight = Math.max(maxWeight, weight);
        curWeight = Math.min(curWeight, weight);
        taskCount++;
        
        //console.log("Push Task : ", fn, " on ", obj.name, weight);
        stack.push([obj, fn, argz]);
        setTimeout(runNow);
        return stack.length;
    }
};