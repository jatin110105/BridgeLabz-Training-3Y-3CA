// Q7: Closure - makeMultiplier

function makeMultiplier(multiplier) {
  // The returned inner function "remembers" `multiplier`
  return function (number) {
    return number * multiplier;
  };
}

const double = makeMultiplier(2);
const triple = makeMultiplier(3);

console.log(triple(5)); // 15
console.log(double(5)); // 10

/*
 HOW the closure works:
 - makeMultiplier(3) runs, creates the variable `multiplier = 3`, returns the inner function,
   and then finishes executing.
 - Normally `multiplier` would be destroyed when the function ends. But the inner function
   still references it, so JavaScript keeps that variable alive.
 - This combination (inner function + the outer variables it uses) is a closure.
 - Each call to makeMultiplier creates a separate closure, so triple and double
   each keep their own private `multiplier` value.
*/
