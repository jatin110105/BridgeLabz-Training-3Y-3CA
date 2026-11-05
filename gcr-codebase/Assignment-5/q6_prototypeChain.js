// Q6: Person -> Faculty -> Professor

function Person(name) {
  this.name = name;
}
Person.prototype.introduce = function () {
  console.log("Hi, I am " + this.name);
};

function Faculty(name, department) {
  Person.call(this, name);
  this.department = department;
}
Faculty.prototype = Object.create(Person.prototype);
Faculty.prototype.constructor = Faculty;
Faculty.prototype.showDepartment = function () {
  console.log("Department: " + this.department);
};

function Professor(name, department, subject) {
  Faculty.call(this, name, department);
  this.subject = subject;
}
Professor.prototype = Object.create(Faculty.prototype);
Professor.prototype.constructor = Professor;
Professor.prototype.teach = function () {
  console.log(this.name + " teaches " + this.subject);
};

const prof = new Professor("Dr. Sharma", "CSE", "Compiler Design");

// A Professor object can reach every method up the chain
prof.teach();           // Professor.prototype
prof.showDepartment();  // Faculty.prototype
prof.introduce();       // Person.prototype

// Chain: prof -> Professor.prototype -> Faculty.prototype -> Person.prototype -> Object.prototype -> null
console.log(prof instanceof Professor, prof instanceof Faculty, prof instanceof Person); // true true true
