// Q8. Employee Salary Projection
let currentSalary = 500000;
const incrementRate = 8; // percent per year

const projection = [];
let salary = currentSalary;

for (let year = 1; year <= 5; year++) {
  salary += (salary * incrementRate) / 100; // assignment operator
  salary = Math.round(salary);              // rounding
  projection.push({ Year: year, Salary: salary });
}

console.table(projection);
