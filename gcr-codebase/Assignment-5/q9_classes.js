// Q9: Person -> Student with ES6 classes, compared with the prototype version

// ---------- ES6 class version ----------
class PersonClass {
  constructor(name) {
    this.name = name;
  }
  printName() {
    console.log("Name: " + this.name);
  }
}

class StudentClass extends PersonClass {
  constructor(name, branch) {
    super(name);          // calls the parent constructor
    this.branch = branch;
  }
  printBranch() {
    console.log("Branch: " + this.branch);
  }
  printDetails() {
    this.printName();
    this.printBranch();
  }
}

// ---------- Prototype version (from Q5) ----------
function Person(name) {
  this.name = name;
}
Person.prototype.printName = function () {
  console.log("Name: " + this.name);
};
function Student(name, branch) {
  Person.call(this, name);
  this.branch = branch;
}
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;
Student.prototype.printBranch = function () {
  console.log("Branch: " + this.branch);
};
Student.prototype.printDetails = function () {
  this.printName();
  this.printBranch();
};

// ---------- Demonstration ----------
console.log("--- Class version ---");
const classStudent = new StudentClass("Jatin", "CSE");
classStudent.printDetails();

console.log("--- Prototype version ---");
const protoStudent = new Student("Jatin", "CSE");
protoStudent.printDetails();

// Both are the same under the hood: classes are syntactic sugar over prototypes
console.log("Class chain :", Object.getPrototypeOf(StudentClass.prototype) === PersonClass.prototype); // true
console.log("Proto chain :", Object.getPrototypeOf(Student.prototype) === Person.prototype);           // true
console.log("typeof StudentClass:", typeof StudentClass); // 'function'
