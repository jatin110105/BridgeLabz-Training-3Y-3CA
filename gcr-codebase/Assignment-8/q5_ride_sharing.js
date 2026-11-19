// Q5. Ride-Sharing Application
class User {
  constructor(name, rating) {
    this.name = name;
    this.rating = rating;
  }
}

class Driver extends User {
  constructor(name, rating, vehicleDetails) {
    super(name, rating);
    this.vehicleDetails = vehicleDetails;
  }
}

class Trip {
  constructor(fromLocation, toLocation, distance) {
    this.fromLocation = fromLocation;
    this.toLocation = toLocation;
    this.distance = distance;
  }

  calculateFare() {
    if (this.distance === undefined || this.distance === null || isNaN(this.distance)) {
      throw new Error("Distance is required to calculate fare.");
    }
    if (this.distance < 0) {
      throw new Error("Distance cannot be negative.");
    }
    const baseFare = 50;
    const perKm = 12;
    return baseFare + perKm * this.distance;
  }
}

const rider = new User("Priya", 4.8);
const driver = new Driver("Suresh", 4.6, { model: "Swift Dzire", plate: "UP85 AB 1234" });
console.log(`Rider: ${rider.name} (${rider.rating}), Driver: ${driver.name} (${driver.vehicleDetails.model})`);

const trips = [
  new Trip("Mathura", "Vrindavan", 12),
  new Trip("Mathura", "Agra", -5),
  new Trip("Mathura", "Delhi"),
];

trips.forEach((t) => {
  try {
    console.log(`${t.fromLocation} -> ${t.toLocation}: Fare = Rs. ${t.calculateFare()}`);
  } catch (err) {
    console.log(`${t.fromLocation} -> ${t.toLocation}: Error - ${err.message}`);
  }
});
