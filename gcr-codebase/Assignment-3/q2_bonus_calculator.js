"use strict";
// Q2 - Employee Bonus Calculator
// "use strict" means a typo like `bonus = 5` (no let/const) throws a ReferenceError
// instead of silently creating a global variable.

const employees = [
  { name: "Amit", salary: "45000", years: "5" },
  { name: "Sara", salary: "38000", years: "2" },
  { name: "Kiran", salary: "52000", years: "7" },
];

function processEmployee(emp) {
  // Missing property check
  if (!("salary" in emp) || !("years" in emp)) {
    throw new Error(`Missing property for ${emp.name ?? "unknown employee"}`);
  }

  // Convert strings to numbers
  const salary = Number(emp.salary);
  const years = Number(emp.years);

  // Conversion check
  if (Number.isNaN(salary) || Number.isNaN(years)) {
    throw new TypeError(`Cannot convert salary/years to numbers for ${emp.name}`);
  }

  // bonus = 10% if more than 3 years, else 5%
  const bonus = years > 3 ? salary * 0.1 : salary * 0.05;

  return `Name: ${emp.name} | Salary: ${salary} | Years: ${years} | Bonus: ${bonus.toFixed(2)}`;
}

// Real data
for (const emp of employees) {
  try {
    console.log(processEmployee(emp));
  } catch (err) {
    console.log(`Error: ${err.message}`);
  }
}

// Extra bad records to show try...catch working
console.log("\n--- Error handling demo ---");
const badRecords = [
  { name: "Ravi", salary: "abc", years: "4" }, // conversion error
  { name: "Neha", years: "3" },                 // missing salary
];
for (const emp of badRecords) {
  try {
    console.log(processEmployee(emp));
  } catch (err) {
    console.log(`Error: ${err.message}`);
  }
}
