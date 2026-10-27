// Q3. Math Utility Dashboard
const x = 16.75;

const rounded = Math.round(x);
const squareRoot = Math.sqrt(x);
const power = Math.pow(x, 3);
const randomNum = Math.floor(Math.random() * 41) + 10; // 10-50

console.log(`
===== Math Dashboard =====
Number          : ${x}
Rounded         : ${rounded}
Square root     : ${squareRoot.toFixed(4)}
Power (x^3)     : ${power.toFixed(2)}
Random (10-50)  : ${randomNum}
==========================`);
