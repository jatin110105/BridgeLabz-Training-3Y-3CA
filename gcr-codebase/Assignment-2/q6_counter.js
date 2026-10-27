// Q6. Event-Based Counter Simulation
let count = 0; // shared variable, accessible by both functions (closure/outer scope)

function increment() {
  count++;
  console.log(`Incremented -> count = ${count}`);
}

function decrement() {
  count--;
  console.log(`Decremented -> count = ${count}`);
}

// Nested function: shows an inner function updating the outer-scope count
function incrementBy(step) {
  function applyStep() {
    count += step; // inner function can reach count via scope chain
  }
  applyStep();
  console.log(`incrementBy(${step}) -> count = ${count}`);
}

// Simulate "click" events manually
console.log("Simulating clicks...");
increment();
increment();
decrement();
incrementBy(5);
decrement();
