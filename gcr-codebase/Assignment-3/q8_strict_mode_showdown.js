"use strict";
// Q8 - Strict Mode Showdown
//
// The original function:
//     function demo(a, a) { total = 10; delete total; }
// has THREE strict-mode violations. Some are SyntaxErrors (found at parse time),
// so they cannot even live inside a file that has "use strict" at the top.
// We therefore build each variant from a string with new Function(), which lets
// us run it sloppy vs strict and catch the result.

function tryRun(label, body, ...params) {
  try {
    const fn = new Function(...params, body);
    const result = fn(5, 10);
    console.log(`${label}: OK -> ${JSON.stringify(result)}`);
  } catch (err) {
    console.log(`${label}: ${err.name} - ${err.message}`);
  }
}

console.log("===== WITHOUT strict mode (sloppy) =====");
// 1) duplicate parameter names are allowed; the last `a` wins
tryRun("Duplicate params  ", "return a;", "a", "a");
// 2) assigning to an undeclared variable creates a global
tryRun("Implicit global   ", "total = 10; return typeof total;");
// 3) deleting a variable-like name silently works (global property)
tryRun("delete total      ", "total = 10; return delete total;");

console.log("\n===== WITH strict mode =====");
tryRun("Duplicate params  ", "'use strict'; return a;", "a", "a");        // SyntaxError
tryRun("Implicit global   ", "'use strict'; total = 10; return total;");   // ReferenceError
tryRun("delete total      ", "'use strict'; var total = 10; delete total;"); // SyntaxError

// ---------- WHY strict mode forbids them ----------
// Duplicate params : `a` is ambiguous, you can never reach the first argument. Almost always a typo.
// Implicit global  : a misspelt variable silently pollutes global scope, a classic bug source.
// delete identifier: deleting plain variables is meaningless (only object properties can be deleted)
//                    and could remove things the engine relies on.

// ---------- Correct ES6 version ----------
function demo(a, b) {           // unique parameter names
  let total = a + b;            // declared, local variable
  return total;                 // nothing to delete: it goes out of scope automatically
}

console.log("\n===== Correct ES6 version =====");
console.log(`demo(5, 10) = ${demo(5, 10)}`);
