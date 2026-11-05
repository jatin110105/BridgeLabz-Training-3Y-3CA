// Q2: Task Scheduler - Microtask vs Macrotask

console.log("Start");

// Macrotask: goes to the macrotask (callback) queue after 0 ms
setTimeout(() => {
  console.log("setTimeout callback (macrotask)");
}, 0);

// Microtask: goes to the microtask queue as soon as the promise is resolved
Promise.resolve().then(() => {
  console.log("Promise.then callback (microtask)");
});

// Synchronous log: runs immediately on the call stack
console.log("Synchronous log");

console.log("End");

/*
 Output order:
   Start
   Synchronous log
   End
   Promise.then callback (microtask)
   setTimeout callback (macrotask)

 WHY microtasks run before macrotasks:
 1. All synchronous code runs first on the call stack (Start, Synchronous log, End).
 2. When the stack is empty, the event loop FIRST drains the ENTIRE microtask queue
    (promise callbacks, queueMicrotask) before moving on.
 3. Only then does it pick ONE task from the macrotask queue (setTimeout, setInterval, I/O).
 4. So even with a 0 ms delay, setTimeout has to wait: it is a macrotask, and the
    Promise callback is a microtask that gets priority after the current script finishes.
*/
