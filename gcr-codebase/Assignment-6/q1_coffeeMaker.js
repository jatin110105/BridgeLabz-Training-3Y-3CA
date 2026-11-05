// Q1: The Startup Morning - Async Coffee Maker (Promise chaining)

// Helper: random delay between 1000 and 2000 ms
const randomDelay = () => 1000 + Math.random() * 1000;

// Helper: simulate a random failure (20% chance)
const shouldFail = () => Math.random() < 0.2;

// Each step returns a Promise that resolves after 1-2 seconds
function boilWater() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail()) return reject(new Error("Kettle broke while boiling water"));
      console.log("Step 1: Water boiled");
      resolve("hot water");
    }, randomDelay());
  });
}

function brewCoffee(water) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail()) return reject(new Error("Coffee machine jammed"));
      console.log("Step 2: Coffee brewed using " + water);
      resolve("brewed coffee");
    }, randomDelay());
  });
}

function pourIntoCup(coffee) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail()) return reject(new Error("Cup slipped and broke"));
      console.log("Step 3: Poured " + coffee + " into cup");
      resolve("cup of coffee");
    }, randomDelay());
  });
}

console.log("Starting coffee process...");

// Promise chain: each .then() receives the previous step's resolved value
boilWater()
  .then(brewCoffee)
  .then(pourIntoCup)
  .then(() => console.log("Coffee ready for the team!"))
  .catch((error) => console.log("Coffee process failed: " + error.message)); // one catch handles a failure from ANY step
