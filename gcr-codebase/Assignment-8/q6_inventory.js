// Q6. E-Commerce Inventory System
const products = [
  { id: 1, name: "Laptop", category: "Electronics", price: 55000, stock: 5 },
  { id: 2, name: "Phone", category: "Electronics", price: 30000, stock: 12 },
  { id: 3, name: "T-Shirt", category: "Clothing", price: 600, stock: 3 },
  { id: 4, name: "Jeans", category: "Clothing", price: 1500, stock: 40 },
  { id: 5, name: "Novel", category: "Books", price: 350, stock: 2 },
  { id: 6, name: "Textbook", category: "Books", price: 900, stock: 25 },
];

const getLowStockProducts = (list, threshold = 5) =>
  list.filter((p) => p.stock <= threshold);

const sortProductsByPrice = (list) =>
  [...list].sort((a, b) => a.price - b.price);

const calculateTotalInventoryValue = (list) =>
  list.reduce((total, p) => total + p.price * p.stock, 0);

const groupByCategory = (list) =>
  list.reduce((groups, p) => {
    (groups[p.category] = groups[p.category] || []).push(p);
    return groups;
  }, {});

console.log("Low stock:", getLowStockProducts(products).map((p) => p.name));
console.log("Sorted by price:", sortProductsByPrice(products).map((p) => `${p.name} (${p.price})`));
console.log("Total inventory value:", calculateTotalInventoryValue(products));
console.log("Grouped by category:", JSON.stringify(groupByCategory(products), null, 2));
