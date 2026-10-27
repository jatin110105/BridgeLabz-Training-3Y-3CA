// Q5: Movie Ticket Booking (Objects + RegExp)

const rules = {
  name: { regex: /^[A-Za-z]+(?: [A-Za-z]+)*$/, message: "Name must contain alphabets only." },
  email: { regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Enter a valid email address." },
  // Matches 1-9 or 10 only (no 0, no 11, no letters)
  seats: { regex: /^(10|[1-9])$/, message: "Seats must be a whole number from 1 to 10." },
};

function validateField(id) {
  const input = document.getElementById(id);
  const isValid = rules[id].regex.test(input.value.trim());
  input.classList.toggle("valid", isValid);
  input.classList.toggle("invalid", !isValid);
  document.getElementById(id + "Error").textContent = isValid ? "" : rules[id].message;
  return isValid;
}

const ticketBox = document.getElementById("ticket");

Object.keys(rules).forEach((id) => {
  document.getElementById(id).addEventListener("input", () => validateField(id));
});

document.getElementById("bookingForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const allValid = Object.keys(rules).map(validateField).every(Boolean);

  if (!allValid) {
    ticketBox.textContent = "Please correct the errors above.";
    return;
  }

  // Store the booking in an object
  const booking = {
    name: document.getElementById("name").value.trim(),
    email: document.getElementById("email").value.trim(),
    seats: Number(document.getElementById("seats").value.trim()),
  };

  console.log("Booking stored:", booking);
  ticketBox.innerHTML =
    `<span class="success">Booking confirmed!</span>\n` +
    `Name  : ${booking.name}\nEmail : ${booking.email}\nSeats : ${booking.seats}`;
});
