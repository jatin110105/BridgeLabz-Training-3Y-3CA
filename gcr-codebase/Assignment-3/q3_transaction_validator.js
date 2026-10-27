"use strict";
// Q3 - Transaction Validator

class NegativeAmountError extends Error {
  constructor(id) { super(`Transaction ${id}: negative amount`); this.name = "NegativeAmountError"; }
}
class MissingFieldError extends Error {
  constructor(msg) { super(msg); this.name = "MissingFieldError"; }
}
class NullTransactionError extends Error {
  constructor(index) { super(`Entry at index ${index} is null`); this.name = "NullTransactionError"; }
}

const transactions = [
  { id: 1, amount: 2000 },
  { id: 2, amount: -500 },
  { id: 3 },
  null,
];

function validate(tx, index) {
  if (tx === null) throw new NullTransactionError(index);
  if (tx.id === undefined || tx.amount === undefined) {
    throw new MissingFieldError(`Index ${index}: missing id or amount`);
  }
  if (tx.amount < 0) throw new NegativeAmountError(tx.id);
  return tx;
}

const valid = [];
const invalid = [];
const errorCategories = {}; // error name -> count

for (let i = 0; i < transactions.length; i++) {
  // BREAKPOINT: when run under a debugger (node --inspect-brk or VS Code F5),
  // execution pauses here. Watch: i, transactions[i], valid, invalid.
  debugger;

  try {
    valid.push(validate(transactions[i], i));
  } catch (err) {
    invalid.push({ index: i, type: err.name, message: err.message });
    errorCategories[err.name] = (errorCategories[err.name] || 0) + 1;
  }
}

console.log("===== Transaction Report =====");
console.log("Valid transactions  :", valid);
console.log("Invalid transactions:", invalid);
console.log("Errors by type      :", errorCategories);
console.log(`Successful: ${valid.length}, Failed: ${invalid.length}`);
