"use strict";
// Q10 - Nested Hoisting and Closures

// ---------- 1) Original code ----------
function outer() {
  console.log(count); // undefined: outer's own `var count` is hoisted (value not yet assigned)
  var count = 5;

  function inner() {
    console.log(count); // undefined: inner has ITS OWN hoisted `var count`, which shadows outer's
    var count = 10;
  }

  inner();
}

console.log("--- Original ---");
outer();
// PREDICTED OUTPUT: undefined, undefined (it is NOT 5 inside inner)

// ---------- 2) Separate memory contexts ----------
// Each call creates its own execution context. Roughly, the engine rewrites it as:
//   outer context: { count: undefined, inner: <function> }  -> log undefined, then count = 5
//   inner context: { count: undefined }                     -> log undefined, then count = 10
// Because inner declares its own `count`, scope lookup stops there and never
// reaches outer's count = 5. Remove `var count = 10` from inner and it prints 5
// through the closure.
function outerNoShadow() {
  var count = 5;
  function inner() {
    console.log(`No shadowing -> ${count}`); // 5, found in the outer scope
  }
  inner();
}
console.log("\n--- Without shadowing ---");
outerNoShadow();

// ---------- 3) Inner as an arrow function ----------
function outerArrow() {
  console.log(count); // undefined (hoisted var)
  var count = 5;

  const inner = () => {
    console.log(count); // still undefined: var inside an arrow is hoisted in the arrow's scope too
    var count = 10;
  };

  inner(); // must come AFTER the const line
}
console.log("\n--- Arrow inner ---");
outerArrow();
// Behaviour changes:
//  - The var-hoisting result is the same (undefined, undefined).
//  - The function itself is no longer hoisted: `const inner` is in the TDZ before its line.
//  - Arrows have no own `this` or `arguments`.
function outerArrowEarlyCall() {
  try {
    inner(); // too early
  } catch (err) {
    console.log(`Early call -> ${err.name}: ${err.message}`);
  }
  const inner = () => {};
}
outerArrowEarlyCall();

// ---------- 4) Debug session / call stack ----------
// Put a breakpoint on the console.log(count) lines (or add `debugger;`) and press F5 in VS Code.
// Call stack as it grows:
//    inner          <- top (currently executing)
//    outer
//    (anonymous)    <- module code
// WATCH `count`: it is undefined in each frame before its assignment line runs,
// and each frame has its own separate `count` in the Scope panel (Local).
