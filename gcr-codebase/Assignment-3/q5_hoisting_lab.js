"use strict";
// Q5 - Hoisting Lab: The Sequence Trap

// ---------- Part 1: original code (predict, then run) ----------
// PREDICTION:
//   console.log(score)  -> undefined      (var is hoisted and initialised to undefined)
//   announce()          -> "Game started"  (function declarations are fully hoisted)
//   startGame()         -> "ready"         (let status is assigned before the call)
console.log(score);
announce();
var score = 50;
function announce() { console.log("Game started"); }
let status = "ready";
startGame();
function startGame() {
  console.log(status);
}

// ---------- Memory state of each hoisted element ----------
// score      (var)      : hoisted, initialised to undefined; becomes 50 at its line
// announce   (function) : hoisted with its full body, callable anywhere in scope
// status     (let)      : hoisted but in the Temporal Dead Zone until its line runs
// startGame  (function) : hoisted with its full body

// TDZ demo: calling startGame BEFORE `let` runs would throw
function tdzDemo() {
  try {
    showLater(); // reads `lateStatus` while it is still in the TDZ
  } catch (err) {
    console.log(`TDZ demo -> ${err.name}: ${err.message}`);
  }
  let lateStatus = "ready";
  function showLater() { console.log(lateStatus); }
}
tdzDemo();

// ---------- Part 2: fixed version ----------
console.log("\n--- Fixed version ---");
var fixedScore = 50;           // assign BEFORE use
const fixedStatus = "ready";   // declare BEFORE the call
function fixedAnnounce() { console.log("Game started"); }
function fixedStart() { console.log(fixedStatus); }
console.log(fixedScore);
fixedAnnounce();
fixedStart();

// ---------- Part 3: arrow function version ----------
console.log("\n--- Arrow function comparison ---");
// Arrow functions stored in const/let are NOT hoisted like declarations:
// the name is in the TDZ until the line runs.
try {
  arrowAnnounce(); // too early
} catch (err) {
  console.log(`Arrow called early -> ${err.name}: ${err.message}`);
}
const arrowAnnounce = () => console.log("Game started");
const arrowStart = () => console.log(fixedStatus);

arrowAnnounce(); // fine: defined above this line
arrowStart();
