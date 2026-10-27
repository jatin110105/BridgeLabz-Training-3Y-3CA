"use strict";
// Q9 - JSON Audit

const rawData = [
  '{"user":"Alex","age":25}',
  '{"id":2}',
  '{invalid}',
  '{"user":"Mina","age":"22"}',
];

const cleanData = [];
const errors = [];

for (let i = 0; i < rawData.length; i++) {
  const lineNumber = i + 1;

  // DEBUG: breakpoint here and "Step Over" on each iteration. When JSON.parse
  // throws, control jumps straight to the catch block and skips every line below
  // it inside try; then the loop continues with the next entry.
  debugger;

  try {
    const parsed = JSON.parse(rawData[i]); // throws SyntaxError on invalid JSON

    // Detect missing keys
    const missing = ["user", "age"].filter((key) => !(key in parsed));
    if (missing.length > 0) {
      throw new Error(`Missing key(s): ${missing.join(", ")}`);
    }

    cleanData.push(parsed);
  } catch (err) {
    errors.push({ line: lineNumber, type: err.name, message: err.message });
    console.log(`Line ${lineNumber}: ${err.name} - ${err.message}`);
  }
}

console.log("\nClean entries:", cleanData);
console.log("Errors       :", errors);

// ---------- Bonus: convert age to Number, filter under-18 ----------
const adults = cleanData
  .map((entry) => ({ user: entry.user, age: Number(entry.age) }))
  .filter((entry) => entry.age >= 18);

console.log("\nAdults (age >= 18):", adults);
