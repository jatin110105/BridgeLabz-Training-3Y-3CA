// Q3: Bug Tracker - Callback to Promise migration

// ---------- Original callback version ----------
function fetchBugs(callback) {
  setTimeout(() => callback(["UI glitch", "API timeout", "Login failure"]), 1000);
}

// ---------- Promise-based version ----------
// Flip this to true to simulate an API failure (or use Math.random() < 0.3)
const simulateApiFailure = Math.random() < 0.3;

function getBugs() {
  return new Promise((resolve, reject) => {
    // Wrap the old callback-style function and bridge it to resolve/reject
    fetchBugs((bugs) => {
      if (simulateApiFailure) {
        reject(new Error("API request failed"));
      } else {
        resolve(bugs);
      }
    });
  });
}

console.log("Fetching bugs...");

getBugs()
  .then((bugs) => {
    // Convert to objects so console.table shows ID + Bug columns
    const bugTable = bugs.map((bug, index) => ({ ID: index + 1, Bug: bug }));
    console.table(bugTable);
  })
  .catch((error) => console.log("Error: " + error.message));
