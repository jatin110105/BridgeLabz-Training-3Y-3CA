// Q4. Employee Inheritance + Runtime Polymorphism
class Employee {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }
  work() {
    return `${this.name} is working in the ${this.department} department.`;
  }
}

class Manager extends Employee {
  work() {
    return `${this.name} is managing the ${this.department} team.`;
  }
}

const people = [
  new Employee("Rahul", "Engineering"),
  new Manager("Neha", "Engineering"),
  new Employee("Amit", "HR"),
  new Manager("Sonia", "HR"),
];

// Same call, different behavior decided at runtime
people.forEach((p) => console.log(p.work()));
