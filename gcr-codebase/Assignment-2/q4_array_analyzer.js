// Q4. Array Performance Analyzer

// Generate 8 random scores between 30 and 100
const scores = Array.from({ length: 8 }, () => Math.floor(Math.random() * 71) + 30);

const highest = Math.max(...scores);
const lowest = Math.min(...scores);
const average = scores.reduce((sum, s) => sum + s, 0) / scores.length;

// filter() keeps only passing scores (>= 50)
const passed = scores.filter((s) => s >= 50);

// map() builds a readable label for each score
const labelled = scores.map((s, i) => `S${i + 1}: ${s}`);

console.log("===== Performance Summary =====");
console.log(`Scores         : ${labelled.join(", ")}`);
console.log(`Highest        : ${highest}`);
console.log(`Lowest         : ${lowest}`);
console.log(`Average        : ${average.toFixed(2)}`);
console.log(`Passed (>= 50) : ${passed.length} of ${scores.length}`);
