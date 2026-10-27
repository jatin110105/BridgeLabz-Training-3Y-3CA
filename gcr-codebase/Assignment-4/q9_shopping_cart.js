// Q9: Shopping Cart Total (Classes + RegExp for Coupon)

class Cart {
  constructor() {
    this.items = [];
    this.discountPercent = 0;
  }

  addItem(name, price, quantity) {
    this.items.push({ name, price, quantity });
  }

  // Total before any coupon
  getTotal() {
    return this.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  // Coupon format: SAVE or DISC followed by two digits (SAVE20, DISC10)
  applyCoupon(code) {
    const pattern = /^(SAVE|DISC)(\d{2})$/;
    const match = pattern.exec(code.trim().toUpperCase());

    if (!match) {
      this.discountPercent = 0;
      return false; // invalid format
    }
    this.discountPercent = Number(match[2]); // the digits are the % discount
    return true;
  }

  getFinalTotal() {
    const total = this.getTotal();
    return total - (total * this.discountPercent) / 100;
  }
}

const cart = new Cart();
cart.addItem("Keyboard", 1500, 1);
cart.addItem("Mouse", 600, 2);
cart.addItem("USB Cable", 150, 3);

console.log(`Cart total: ${cart.getTotal()}`);

// Try several coupons
["SAVE20", "DISC10", "save15", "SAVE5", "HELLO"].forEach((code) => {
  if (cart.applyCoupon(code)) {
    console.log(`Coupon ${code}: valid, ${cart.discountPercent}% off -> final total ${cart.getFinalTotal().toFixed(2)}`);
  } else {
    console.log(`Coupon ${code}: invalid format (use SAVE20 or DISC10 style)`);
  }
});

// Leave the cart with a valid coupon for the final summary
cart.applyCoupon("SAVE20");
console.log(`\nFinal summary -> Total: ${cart.getTotal()}, Discount: ${cart.discountPercent}%, Pay: ${cart.getFinalTotal().toFixed(2)}`);
