// Q8. Dynamic Discount Evaluator
const cart = [
  { item: "Laptop", category: "electronics", price: 45000 },
  { item: "Shoes", category: "fashion", price: 2500 },
  { item: "Book", category: "education", price: 600 },
];

// Original cart value, before any discount
const originalTotal = cart.reduce((sum, product) => sum + product.price, 0);

// Apply category discounts using a loop
const discountedPrices = [];
for (const product of cart) {
  let discountRate = 0;
  if (product.category === "electronics") {
    discountRate = 0.10;
  } else if (product.category === "fashion") {
    discountRate = 0.05;
  }
  const finalPrice = product.price - product.price * discountRate;
  discountedPrices.push(finalPrice);
  console.log(`${product.item}: ${product.price} -> ${finalPrice} (${discountRate * 100}% off)`);
}

// Sum discounted prices with reduce()
let finalTotal = discountedPrices.reduce((sum, p) => sum + p, 0);

// Extra 5% overall discount if the original cart value exceeds 50000
if (originalTotal > 50000) {
  finalTotal -= finalTotal * 0.05;
  console.log("Extra 5% overall discount applied.");
}

console.log(`Original total: ${originalTotal}`);
console.log(`Final total   : ${finalTotal.toFixed(2)}`);
