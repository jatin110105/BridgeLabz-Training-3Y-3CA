"use strict";
// Q1 - Dynamic Data Parser

const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

const validNumbers = []; // entries that convert to a usable number
const invalidEntries = []; // entries that do not

// Debug observation: Number(" ") is 0 and Number(null) is 0, so a plain
// isNaN check would wrongly accept them. We add explicit checks for those.
function isValidNumber(raw, num) {
  if (raw === null || raw === undefined) return false; // no real data
  if (String(raw).trim() === "") return false;          // blank string
  return !Number.isNaN(num);                            // catches "NaN", "100px", "true"
}

for (let i = 0; i < apiData.length; i++) {
  const raw = apiData[i];

  // Step 1: the three conversions
  const asNumber = Number(raw);
  const asBoolean = Boolean(raw); // trap: Boolean("false") is true (non-empty string)
  const asString = String(raw);

  // Step 2/3: sort into valid / invalid arrays
  if (isValidNumber(raw, asNumber)) {
    validNumbers.push(asNumber);
    console.log(`[${i}] VALID   raw=${JSON.stringify(raw)} -> Number=${asNumber}, Boolean=${asBoolean}, String="${asString}"`);
  } else {
    invalidEntries.push({ index: i, raw: raw });
    console.log(`[${i}] INVALID raw=${JSON.stringify(raw)} -> Number=${asNumber}, Boolean=${asBoolean}, String="${asString}"`);
  }
}

// Step 4: final report
console.log("\n===== Report =====");
console.log("Valid numeric data  :", validNumbers);
console.log("Invalid entries     :", invalidEntries);
console.log(`Valid: ${validNumbers.length}, Invalid: ${invalidEntries.length}`);
