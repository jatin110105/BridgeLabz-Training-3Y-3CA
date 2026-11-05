// Q8: Custom Array.prototype.myMap()

Array.prototype.myMap = function (callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) { // `this` is the array myMap is called on
    // Pass (element, index, array) like the built-in map
    result.push(callback(this[i], i, this));
  }
  return result;
};

console.log([1, 2, 3].myMap((num) => num * 2));            // [2, 4, 6]
console.log(["a", "b"].myMap((ch, i) => ch + i));          // [ 'a0', 'b1' ]

// Compare with built-in map
console.log([1, 2, 3].map((num) => num * 2));              // [2, 4, 6]
