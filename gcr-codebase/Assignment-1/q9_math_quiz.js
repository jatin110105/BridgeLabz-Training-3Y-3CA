// Q9. Random Math Quiz Generator
const operators = ["+", "-", "*", "/"];

const num1 = Math.floor(Math.random() * 20) + 1; // 1-20
const num2 = Math.floor(Math.random() * 20) + 1; // 1-20
const operator = operators[Math.floor(Math.random() * operators.length)];

let correctAnswer;
switch (operator) {
  case "+":
    correctAnswer = num1 + num2;
    break;
  case "-":
    correctAnswer = num1 - num2;
    break;
  case "*":
    correctAnswer = num1 * num2;
    break;
  case "/":
    correctAnswer = (num1 / num2).toFixed(2); // two decimals
    break;
}

console.log(`Question: ${num1} ${operator} ${num2} = ?`);
console.log(`Correct answer: ${correctAnswer}`);
