// Q2: Student Form Validator (Forms + RegExp)

// One regex + error message per field
const rules = {
  // Letters only; single spaces allowed between words (e.g. "Rahul Sharma")
  name: { regex: /^[A-Za-z]+(?: [A-Za-z]+)*$/, message: "Name must contain alphabets only." },
  // example@domain.com
  email: { regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Enter a valid email (example@domain.com)." },
  // Exactly 10 digits
  phone: { regex: /^\d{10}$/, message: "Phone must be exactly 10 digits." },
  // Lookaheads: at least 1 uppercase, 1 digit, 1 special character
  password: {
    regex: /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/,
    message: "Password needs 1 uppercase letter, 1 number and 1 special character.",
  },
};

// Validate one field and show red/green border + error text
function validateField(id) {
  const input = document.getElementById(id);
  const errorBox = document.getElementById(id + "Error");
  const value = id === "password" ? input.value : input.value.trim();
  const isValid = rules[id].regex.test(value);

  input.classList.toggle("valid", isValid);
  input.classList.toggle("invalid", !isValid);
  errorBox.textContent = isValid ? "" : rules[id].message;
  return isValid;
}

const form = document.getElementById("regForm");
const message = document.getElementById("message");

// Live feedback while typing
Object.keys(rules).forEach((id) => {
  document.getElementById(id).addEventListener("input", () => validateField(id));
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  // map() runs every check so all errors are shown, then every() combines them
  const allValid = Object.keys(rules).map(validateField).every(Boolean);
  message.innerHTML = allValid
    ? '<span class="success">Registration successful!</span>'
    : "Please fix the highlighted fields.";
});
