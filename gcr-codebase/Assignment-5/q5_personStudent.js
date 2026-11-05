// Q5: Person -> Student inheritance using constructor functions

function Person(name) {
  this.name = name;
}
Person.prototype.printName = function () {
  console.log("Name: " + this.name);
};

function Student(name, branch) {
  Person.call(this, name);   // borrow Person's constructor to set `name`
  this.branch = branch;
}

// Link prototype chain: Student.prototype -> Person.prototype
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student; // restore the constructor reference

Student.prototype.printBranch = function () {
  console.log("Branch: " + this.branch);
};
Student.prototype.printDetails = function () {
  this.printName();    // inherited from Person
  this.printBranch();  // defined on Student
};

const s1 = new Student("Jatin", "CSE");
s1.printDetails();

// Demonstrate the prototype chain
console.log("s1 instanceof Student:", s1 instanceof Student); // true
console.log("s1 instanceof Person :", s1 instanceof Person);  // true
console.log("Chain ok:",
  Object.getPrototypeOf(s1) === Student.prototype &&
  Object.getPrototypeOf(Student.prototype) === Person.prototype); // true
