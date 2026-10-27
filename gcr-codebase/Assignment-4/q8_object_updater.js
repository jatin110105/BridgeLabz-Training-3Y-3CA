// Q8: Dynamic Object Updater

// The object we are editing
const user = { name: "John", email: "john@mail.com", age: 21 };

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const ageInput = document.getElementById("age");
const status = document.getElementById("status");
const output = document.getElementById("output");

// Fill the form with the current values
function fillForm() {
  nameInput.value = user.name;
  emailInput.value = user.email;
  ageInput.value = user.age;
}

// Copy the form values back into the user object
function updateUser() {
  user.name = nameInput.value;
  user.email = emailInput.value;
  user.age = Number(ageInput.value);
}

// Rebuild the details list below the form using DOM methods
function renderUser() {
  output.innerHTML = "";
  const list = document.createElement("ul");
  Object.entries(user).forEach(([key, value]) => {
    const item = document.createElement("li");
    item.textContent = `${key}: ${value}`;
    list.appendChild(item);
  });
  output.appendChild(list);
}

// Real time: every keystroke updates the object and the display
[nameInput, emailInput, ageInput].forEach((input) => {
  input.addEventListener("input", () => {
    updateUser();
    renderUser();
    status.textContent = "";
  });
});

// Submit: commit the values and confirm
document.getElementById("userForm").addEventListener("submit", (event) => {
  event.preventDefault();
  updateUser();
  renderUser();
  console.log("Updated user:", user);
  status.innerHTML = '<span class="success">User updated!</span>';
});

fillForm();
renderUser();
