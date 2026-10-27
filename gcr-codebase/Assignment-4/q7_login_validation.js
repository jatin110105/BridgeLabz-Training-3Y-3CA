// Q7: Login Form Validation using RegExp

// Each check has its own regex, so we can report SPECIFIC errors
const usernameRules = [
  { regex: /^.{5,}$/, message: "Username must be at least 5 characters." },
];

const passwordRules = [
  { regex: /^.{8,}$/, message: "Password must be at least 8 characters." },
  { regex: /\d/, message: "Password must include a number." },
  { regex: /[A-Z]/, message: "Password must include an uppercase letter." },
  { regex: /[a-z]/, message: "Password must include a lowercase letter." },
  { regex: /[^A-Za-z0-9]/, message: "Password must include a special character." },
];

// Returns the list of messages for rules that FAIL
function getErrors(value, rules) {
  return rules.filter((rule) => !rule.regex.test(value)).map((rule) => rule.message);
}

function showResult(id, errors) {
  const input = document.getElementById(id);
  input.classList.toggle("valid", errors.length === 0);
  input.classList.toggle("invalid", errors.length > 0);
  document.getElementById(id + "Error").innerHTML = errors.join("<br>");
}

document.getElementById("loginForm").addEventListener("submit", (event) => {
  event.preventDefault();

  const usernameErrors = getErrors(document.getElementById("username").value.trim(), usernameRules);
  const passwordErrors = getErrors(document.getElementById("password").value, passwordRules);

  showResult("username", usernameErrors);
  showResult("password", passwordErrors);

  const message = document.getElementById("message");
  if (usernameErrors.length === 0 && passwordErrors.length === 0) {
    message.innerHTML = '<span class="success">Login successful!</span>';
  } else {
    message.textContent = "Login failed. Please fix the errors above.";
  }
});
