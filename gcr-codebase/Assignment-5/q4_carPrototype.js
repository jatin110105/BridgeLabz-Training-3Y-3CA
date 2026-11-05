// Q4: Constructor function + prototype method sharing

function Car(brand, model) {
  this.brand = brand;   // each object gets its OWN copy of these properties
  this.model = model;
}

// Defined once on the prototype -> shared by ALL Car objects
Car.prototype.getDetails = function () {
  console.log("Brand: " + this.brand + ", Model: " + this.model);
};

const car1 = new Car("Toyota", "Fortuner");
const car2 = new Car("Hyundai", "Creta");

car1.getDetails();
car2.getDetails();

// Proof of method sharing: both objects point to the SAME function in memory
console.log("Same method shared?", car1.getDetails === car2.getDetails); // true
console.log("Is it an own property?", car1.hasOwnProperty("getDetails")); // false
console.log("Lives on prototype?", Object.getPrototypeOf(car1) === Car.prototype); // true
