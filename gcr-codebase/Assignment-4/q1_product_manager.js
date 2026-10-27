// Q1: E-Commerce Product Manager (Classes + Objects)

class Product {
  constructor(id, name, price, category) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.category = category;
  }

  // Reduce the price by the given percentage (e.g. 10 means 10% off)
  applyDiscount(percent) {
    this.price = this.price - (this.price * percent) / 100;
    return this.price;
  }

  // Formatted string for display
  getDetails() {
    return `#${this.id} | ${this.name} | Category: ${this.category} | Price: Rs. ${this.price.toFixed(2)}`;
  }
}

// Multiple product objects stored in an array
const products = [
  new Product(1, "Laptop", 55000, "Electronics"),
  new Product(2, "Headphones", 1500, "Electronics"),
  new Product(3, "Notebook", 80, "Stationery"),
  new Product(4, "Office Chair", 7200, "Furniture"),
  new Product(5, "Pen Pack", 250, "Stationery"),
];

console.log("--- All products ---");
products.forEach((p) => console.log(p.getDetails()));

// Apply a 10% discount to one product
console.log("\n--- After 10% discount on Laptop ---");
products[0].applyDiscount(10);
console.log(products[0].getDetails());

// filter(): products with price > 1000
console.log("\n--- Products with price > 1000 ---");
products
  .filter((p) => p.price > 1000)
  .forEach((p) => console.log(p.getDetails()));
