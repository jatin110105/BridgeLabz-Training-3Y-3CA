"use strict";
// Q4 - Debugging Mystery

// 1) WHY IT FAILS
// In sloppy mode, `greeting = "Welcome"` with no declaration silently creates a
// global variable. In strict mode, assigning to an undeclared identifier throws
// ReferenceError: greeting is not defined.
function showMessageBroken() {
  greeting = "Welcome"; // undeclared
  console.log(greeting);
}

try {
  showMessageBroken();
} catch (err) {
  console.log(`Broken version -> ${err.name}: ${err.message}`);
}

// 2) THE FIX
// Declare the variable. Now `greeting` is local to the function, so it does not
// leak into the global scope.
function showMessage() {
  let greeting = "Welcome";
  // DEBUG: set a breakpoint on the next line. In VS Code add `greeting` to
  // the WATCH panel, and look at the CALL STACK panel: showMessage <- (anonymous).
  debugger;
  console.log(greeting);
}

showMessage();
console.log(`Outside the function: typeof greeting = ${typeof greeting}`); // undefined, no leak
