// Q3: Arrow function vs normal function and `this`

// --- Version 1: arrow function (problem) ---
const user = {
  name: "Jatin",
  showName: () => {
    console.log("Arrow function ->", this.name);
  }
};
user.showName(); // undefined

/*
 WHY is this.name undefined?
 - Arrow functions do NOT have their own `this`.
 - They take `this` from the surrounding (lexical) scope where they were defined.
 - Here, the surrounding scope is the module/global scope, NOT the `user` object
   (an object literal's braces do not create a scope).
 - In Node.js a module-level `this` is {} (module.exports); in a browser it is `window`.
   Neither has a `name` property set to "Jatin", so this.name is undefined.
*/

// --- Version 2: fix using a normal function ---
const userFixed = {
  name: "Jatin",
  showName: function () {
    // Normal functions get `this` from HOW they are called.
    // userFixed.showName() -> `this` is the object before the dot (userFixed)
    console.log("Normal function ->", this.name);
  }
};
userFixed.showName(); // Jatin
