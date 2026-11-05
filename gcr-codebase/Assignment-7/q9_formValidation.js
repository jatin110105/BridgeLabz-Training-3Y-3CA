// Q9: Form Submit Blocker with preventDefault() and Live Errors

const form = document.getElementById("signupForm");
const successMessage = document.getElementById("successMessage");

const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");

// One rule per field: returns an error message, or "" when the value is valid
const fields = [
  {
    input: nameInput,
    errorBox: document.getElementById("nameError"),
    validate: () => (nameInput.value.trim() === "" ? "Name is required" : ""),
  },
  {
    input: emailInput,
    errorBox: document.getElementById("emailError"),
    validate: () => {
      const email = emailInput.value.trim();
      if (email === "") return "Email is required";
      if (!email.includes("@")) return "Email must contain @";
      return "";
    },
  },
  {
    input: passwordInput,
    errorBox: document.getElementById("passwordError"),
    validate: () => (passwordInput.value.length < 6 ? "Password must be at least 6 characters" : ""),
  },
];

// Show or clear the error for one field; returns true if the field is valid
function checkField(field) {
  const errorMessage = field.validate();
  field.errorBox.textContent = errorMessage;
  field.input.classList.toggle("invalid", errorMessage !== "");
  return errorMessage === "";
}

form.addEventListener("submit", (event) => {
  event.preventDefault(); // always stop the real page-reload submission

  // Check EVERY field (don't stop at the first error) so all messages appear
  const validationResults = fields.map(checkField);
  const isFormValid = validationResults.every(Boolean);

  successMessage.textContent = isFormValid ? "Form Submitted Successfully" : "";
});

// Live feedback: after the user edits a field with an error, re-check it so
// the message disappears automatically once the value becomes valid
fields.forEach((field) => {
  field.input.addEventListener("input", () => {
    successMessage.textContent = "";
    if (field.errorBox.textContent !== "") checkField(field);
  });
});
