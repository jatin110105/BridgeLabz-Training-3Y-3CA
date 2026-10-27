// Q3. Monthly Expense Tracker
// Order: food, travel, rent, bills, leisure
const expenses = [4500, 1800, 12000, 2500, 1500];

let total = 0;
for (const amount of expenses) {
  total += amount; // assignment operator
}

const average = total / expenses.length;

let finalAmount = total;
finalAmount += total * 0.10; // add 10% tax

console.log(`Total expenses : ${total.toFixed(2)}`);
console.log(`Average expense: ${average.toFixed(2)}`);
console.log(`Final (+10% tax): ${finalAmount.toFixed(2)}`);
