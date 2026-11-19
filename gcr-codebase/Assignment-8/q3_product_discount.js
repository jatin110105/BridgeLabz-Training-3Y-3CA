// Q3. Product Discount System (constructor function + prototype)
function Product(name, price) {
  this.name = name;
  this.price = price;
}

Product.prototype.applyDiscount = function (percent) {
  return this.price - (this.price * percent) / 100;
};

const p1 = new Product("Laptop", 50000);
const p2 = new Product("Headphones", 2000);
const p3 = new Product("Keyboard", 1500);

// Abstraction: callers just use applyDiscount() without knowing the formula.
console.log(`${p1.name}: ${p1.price} -> ${p1.applyDiscount(10)} (10% off)`);
console.log(`${p2.name}: ${p2.price} -> ${p2.applyDiscount(25)} (25% off)`);
console.log(`${p3.name}: ${p3.price} -> ${p3.applyDiscount(50)} (50% off)`);
