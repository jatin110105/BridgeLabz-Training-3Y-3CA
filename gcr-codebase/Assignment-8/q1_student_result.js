// Q1. Student Result Processing (reduce + Classes)
class Student {
  constructor(name, marks) {
    this.name = name;
    this.marks = marks;
  }

  calculateAverage() {
    if (!this.marks.length) return 0;
    const total = this.marks.reduce((sum, m) => sum + m, 0);
    return total / this.marks.length;
  }

  getGrade() {
    const avg = this.calculateAverage();
    if (avg >= 80) return "A";
    if (avg >= 60) return "B";
    if (avg >= 40) return "C";
    return "F";
  }
}

const students = [
  new Student("Aman", [85, 90, 78, 92]),
  new Student("Riya", [65, 70, 58, 62]),
  new Student("Karan", [30, 25, 40, 35]),
];

students.forEach((s) => {
  console.log(`${s.name}: Average = ${s.calculateAverage().toFixed(2)}, Grade = ${s.getGrade()}`);
});
