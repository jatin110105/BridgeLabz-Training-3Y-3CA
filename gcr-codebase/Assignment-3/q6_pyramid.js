"use strict";
// Q6 - Pyramid Pattern Generator

// Row limit from user input: `node q6_pyramid.js 7`, default is 5
const input = Number(process.argv[2]);
const rows = Number.isInteger(input) && input > 0 ? input : 5;

// Version with let: each loop variable is block-scoped
function pyramidLet(limit) {
  for (let i = 1; i <= limit; i++) {
    let line = "";
    for (let j = 1; j <= i; j++) {
      line += "* ";
    }
    console.log(line.trim());
  }
  // console.log(i); // would throw ReferenceError: i is not defined
}

// Version with var: SAME output, but the variables leak out of the loops
function pyramidVar(limit) {
  for (var i = 1; i <= limit; i++) {
    var line = "";
    for (var j = 1; j <= i; j++) {
      line += "* ";
    }
    console.log(line.trim());
  }
  // Observation: var is function-scoped, so i and j still exist here
  console.log(`After loops (var): i = ${i}, j = ${j}`); // i = limit + 1, j = limit + 1
}

console.log(`--- let version (${rows} rows) ---`);
pyramidLet(rows);

console.log(`\n--- var version (${rows} rows) ---`);
pyramidVar(rows);

// DEBUG: breakpoint inside the inner loop and watch i, j, line. With var, the
// same i and j binding is reused for the whole function and survives the loops.

// "use strict" catches an undeclared loop variable:
console.log("\n--- Undeclared loop variable ---");
try {
  for (k = 1; k <= 3; k++) { /* k was never declared */ }
} catch (err) {
  console.log(`${err.name}: ${err.message}`);
}
