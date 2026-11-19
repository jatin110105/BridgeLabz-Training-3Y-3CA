// Q2. Online Food Ordering (map + Error Handling)
const menu = [
  { item: "Burger", price: 120 },
  { item: "Pizza", price: 250 },
  { item: "Pasta", price: 180 },
  { item: "Fries", price: 90 },
];

function calculateBill(orderItems) {
  const prices = orderItems.map((name) => {
    const found = menu.find((m) => m.item.toLowerCase() === name.toLowerCase());
    if (!found) throw new Error(`Invalid item ordered: "${name}" is not on the menu`);
    return found.price;
  });
  return prices.reduce((total, p) => total + p, 0);
}

try {
  console.log("Bill 1:", calculateBill(["Burger", "Pizza", "Fries"]));
  console.log("Bill 2:", calculateBill(["Pasta", "Sushi"]));
} catch (err) {
  console.log("Error:", err.message);
}

try {
  console.log("Bill 3:", calculateBill(["Pasta", "Burger"]));
} catch (err) {
  console.log("Error:", err.message);
}
