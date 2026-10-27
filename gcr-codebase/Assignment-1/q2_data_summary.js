// Q2. Multi-Type Data Summary
const userName = "Jatin";
const age = 20;
const isStudent = true;
const skills = ["JavaScript", "Docker", "Kubernetes"];
const profile = { city: "Mathura", year: 2 };
const middleName = null;
let phoneNumber; // undefined

// Helper: typeof gives "object" for arrays and null, so handle them separately
function getType(value) {
  if (Array.isArray(value)) return "array";
  if (value === null) return "null";
  return typeof value;
}

const entries = [
  ["userName", userName],
  ["age", age],
  ["isStudent", isStudent],
  ["skills", skills],
  ["profile", profile],
  ["middleName", middleName],
  ["phoneNumber", phoneNumber],
];

// Build rows (label + value + type), then print with ONE console.table()
const report = entries.map(([label, value]) => ({
  Label: label,
  Value: JSON.stringify(value) ?? "undefined",
  Type: getType(value),
}));

console.table(report);
