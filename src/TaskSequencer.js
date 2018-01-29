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
let taskQueue = [],
    curWeight = 0,
    maxWeight = 0,
    minWeight = 0,
    taskCount = 0,
    //deSyncSteps = 1000,
    isRunning,
    runningTm;

function runNow() {
    if ( !runningTm ) {
        run();
    }
}

function run( hazFail, failedTask ) {
    let task, fail = true;
    
    if ( hazFail ) {
        console.error("ReScope : A task has failed !!", failedTask)
    }
    
    runningTm = setTimeout(() => run(fail, task));
    
    while ( taskCount ) {
        
        // try for the current weight
        while ( !(taskQueue[curWeight] && taskQueue[curWeight].length) )
            curWeight++;
        
        taskCount--;
        task = taskQueue[curWeight].shift();
        //console.log("Task : ", task[1], " on ", task[0].name);
        task[0][task[1]].apply(task[0], task[2]);
    }
    fail = task = undefined;
    
    if ( !taskCount ) {
        clearTimeout(runningTm);
        runningTm = null;
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
        stack.push([obj, fn, argz]);
        setTimeout(runNow);
        return stack.length;
    }
};