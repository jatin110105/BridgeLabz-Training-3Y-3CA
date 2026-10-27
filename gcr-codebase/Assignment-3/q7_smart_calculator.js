"use strict";
// Q7 - Smart Calculator

class DivisionByZeroError extends Error {
  constructor() { super("Cannot divide by zero"); this.name = "DivisionByZeroError"; }
}
class NegativeRootError extends Error {
  constructor(n) { super(`Cannot take the root of negative number ${n}`); this.name = "NegativeRootError"; }
}
class InvalidOperationError extends Error {
  constructor(op) { super(`Operation "${op}" is not recognized`); this.name = "InvalidOperationError"; }
}

function calculate(operation, a, b) {
  switch (operation) {
    case "add":
      return a + b;
    case "subtract":
      return a - b;
    case "divide":
      if (b === 0) throw new DivisionByZeroError();
      return a / b;
    case "power":
      return Math.pow(a, b);
    case "root": // square root of the first number
      if (a < 0) throw new NegativeRootError(a);
      return Math.sqrt(a);
    default:
      throw new InvalidOperationError(operation);
  }
}

function runAll(operations, num1, num2) {
  console.log(`--- num1 = ${num1}, num2 = ${num2} ---`);
  for (const op of operations) {
    try {
      const result = calculate(op, num1, num2);
      console.log(`${op.padEnd(9)} : ${result}`);
    } catch (err) {
      console.log(`${op.padEnd(9)} : ${err.name} - ${err.message}`);
    }
  }
}

const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25, num2 = 0;

runAll(operations, num1, num2);

// Extra runs to trigger the other custom errors
runAll(["root"], -9, 2);        // NegativeRootError
runAll(["modulus"], num1, 3);   // InvalidOperationError
