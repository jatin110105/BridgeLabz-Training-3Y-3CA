// Q3: Multi-Step Form with Next/Back & Validation

const steps = document.querySelectorAll(".step");
const stepIndicator = document.getElementById("stepIndicator");
const backBtn = document.getElementById("backBtn");
const nextBtn = document.getElementById("nextBtn");
const formArea = document.getElementById("formArea");
const summary = document.getElementById("summary");

const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");

let currentStep = 1; // 1-based step number
const totalSteps = steps.length;

// Validation rules for each step: returns an error message, or "" if valid
const validators = {
  1: () => (nameInput.value.trim().length >= 2 ? "" : "Name must be at least 2 characters"),
  2: () => (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value.trim()) ? "" : "Enter a valid email address"),
  3: () => (passwordInput.value.length >= 6 ? "" : "Password must be at least 6 characters"),
};
const errorBoxes = {
  1: document.getElementById("nameError"),
  2: document.getElementById("emailError"),
  3: document.getElementById("passwordError"),
};

function showStep(stepNumber) {
  steps.forEach((step) => {
    step.classList.toggle("active", Number(step.dataset.step) === stepNumber);
  });
  stepIndicator.textContent = "Step " + stepNumber + " of " + totalSteps;
  backBtn.disabled = stepNumber === 1;
  nextBtn.textContent = stepNumber === totalSteps ? "Finish" : "Next";
}

function showSummary() {
  formArea.style.display = "none";
  stepIndicator.textContent = "All steps complete";
  summary.style.display = "block";
  summary.innerHTML =
    "<h3>Summary</h3>" +
    "<p><b>Name:</b> <span id='sumName'></span></p>" +
    "<p><b>Email:</b> <span id='sumEmail'></span></p>" +
    "<p><b>Password:</b> " + "*".repeat(passwordInput.value.length) + "</p>";
  document.getElementById("sumName").textContent = nameInput.value.trim();
  document.getElementById("sumEmail").textContent = emailInput.value.trim();
}

nextBtn.addEventListener("click", () => {
  const errorMessage = validators[currentStep]();
  errorBoxes[currentStep].textContent = errorMessage;
  if (errorMessage) return; // invalid -> stay on this step

  if (currentStep < totalSteps) {
    currentStep++;
    showStep(currentStep);
  } else {
    showSummary();
  }
});

backBtn.addEventListener("click", () => {
  if (currentStep > 1) {
    currentStep--;
    showStep(currentStep);
  }
});

showStep(currentStep);
