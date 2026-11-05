// Q1: Callback flow - greetUser(name, callback)

// Callback function: runs AFTER the greeting is printed
function showEndMessage() {
  console.log("Welcome to the course!");
}

// Higher-order function: accepts another function as an argument
function greetUser(name, callback) {
  console.log("Hello " + name);   // Step 1: greet first
  callback();                     // Step 2: then execute the callback
}

// Demonstration: pass the function itself (no parentheses!)
greetUser("Jatin", showEndMessage);

// Expected output:
// Hello Jatin
// Welcome to the course!
