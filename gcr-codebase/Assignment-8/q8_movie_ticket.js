// Q8. Movie Ticket Booking System
class MovieTicket {
  constructor(movieName, seatNo, price) {
    this.movieName = movieName;
    this.seatNo = seatNo;
    this.price = price;
  }
}

class OnlineTicket extends MovieTicket {
  constructor(movieName, seatNo, price, convenienceFee) {
    super(movieName, seatNo, price);
    this.convenienceFee = convenienceFee;
  }
  getTotalAmount() {
    return this.price + this.convenienceFee;
  }
}

// Added on the prototype after class definition
MovieTicket.prototype.printTicket = function () {
  console.log(`Ticket -> Movie: ${this.movieName}, Seat: ${this.seatNo}, Price: ${this.price}`);
};

const t1 = new OnlineTicket("Inception", "A12", 300, 40);
const t2 = new OnlineTicket("Interstellar", "B7", 350, 50);

// printTicket is found via the prototype chain: t1 -> OnlineTicket.prototype -> MovieTicket.prototype
t1.printTicket();
console.log("Total:", t1.getTotalAmount());
t2.printTicket();
console.log("Total:", t2.getTotalAmount());

console.log("Own property?", t1.hasOwnProperty("printTicket"));
console.log("In MovieTicket.prototype?", MovieTicket.prototype.hasOwnProperty("printTicket"));
console.log("Chain OK:", Object.getPrototypeOf(OnlineTicket.prototype) === MovieTicket.prototype);
