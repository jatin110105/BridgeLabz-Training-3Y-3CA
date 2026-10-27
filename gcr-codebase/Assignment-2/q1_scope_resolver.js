// Q1. Scope Conflict Resolver

// Global variable: visible everywhere in the file
var bonus = 5000;

// isPermanent is a parameter, which is a local variable of the function,
// so each call gets its own independent copy.
function calculateSalary(isPermanent) {
  let salary = 40000; // local variable: exists only inside this function

  // Add the global bonus only for permanent employees
  if (isPermanent) {
    salary += bonus;
  }

  console.log(`isPermanent = ${isPermanent} -> Total salary: ${salary}`);
}

calculateSalary(true);  // 45000
calculateSalary(false); // 40000

// Changing isPermanent only changes the local salary result.
// The global bonus is untouched, and local variables are not visible outside.
console.log(`Global bonus after both calls: ${bonus}`);
console.log(`Is 'salary' accessible outside? ${typeof salary}`); // "undefined"
