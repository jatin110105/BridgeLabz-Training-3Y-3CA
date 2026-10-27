// Q6: Employee Management System (Classes + Object Methods)

class Employee {
  // salary is the MONTHLY salary
  constructor(id, name, department, salary) {
    this.id = id;
    this.name = name;
    this.department = department;
    this.salary = salary;
  }

  // Annual salary = 12 months
  getAnnualSalary() {
    return this.salary * 12;
  }

  // Increase the monthly salary by a percentage
  applyBonus(percent) {
    this.salary += (this.salary * percent) / 100;
    return this.salary;
  }
}

const employees = [
  new Employee(101, "Amit", "Tech", 60000),
  new Employee(102, "Sara", "HR", 40000),
  new Employee(103, "Kiran", "Finance", 55000),
  new Employee(104, "Neha", "Support", 30000),
  new Employee(105, "Ravi", "Tech", 72000),
];

console.log("--- Annual salary per employee ---");
employees.forEach((e) => {
  console.log(`${e.name} (${e.department}): ${e.getAnnualSalary()}`);
});

// reduce(): total annual payout of the company
const totalPayout = employees.reduce((sum, e) => sum + e.getAnnualSalary(), 0);
console.log(`\nTotal annual payout: ${totalPayout}`);

// Apply a 10% bonus to one employee and recalculate
employees[3].applyBonus(10);
console.log(`\nAfter 10% bonus, ${employees[3].name}'s annual salary: ${employees[3].getAnnualSalary()}`);
console.log(`New total annual payout: ${employees.reduce((sum, e) => sum + e.getAnnualSalary(), 0)}`);
