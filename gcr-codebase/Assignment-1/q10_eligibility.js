// Q10. Citizen Eligibility Validator
const age = 19;
const isCitizen = true;

// Note: the brief's first two rules overlap for citizens aged 18-20,
// so "all services" is applied from age 21 (citizen) and "vote only" for 18-20.
if (isCitizen) {
  if (age >= 21) {
    console.log("Eligible for all services.");
  } else if (age >= 18) {
    console.log("Eligible to vote only.");
  } else {
    console.log("Not eligible yet.");
  }
} else {
  if (age >= 18) {
    console.log("Only age criteria met.");
  } else {
    console.log("Not eligible yet.");
  }
}
