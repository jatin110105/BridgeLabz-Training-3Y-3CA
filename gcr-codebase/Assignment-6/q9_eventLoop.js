// Q9: Debugging the Event Loop

/*
 PREDICTED OUTPUT (written before running):
   1. Script start
   2. Script end
   3. Promise callback
   4. Timeout callback
*/

console.log("Script start");
setTimeout(() => console.log("Timeout callback"), 0);
Promise.resolve().then(() => console.log("Promise callback"));
console.log("Script end");

/*
 ACTUAL OUTPUT:
   Script start
   Script end
   Promise callback
   Timeout callback
 -> Matches the prediction.

 WHY Promises (microtasks) run before setTimeout (macrotasks):
 1. Synchronous code runs first on the call stack: "Script start", then "Script end".
    setTimeout only REGISTERS its callback (to the macrotask queue); the Promise
    .then() callback is placed in the microtask queue.
 2. When the call stack empties, the event loop always drains the whole
    microtask queue first -> "Promise callback" runs.
 3. Only after the microtask queue is empty does the event loop take the next
    macrotask -> "Timeout callback" runs.
 4. A 0 ms timer does not mean "run now"; it means "run as soon as possible
    after the current script and all microtasks are done".
*/
