// Q2. String Manipulation Report
const productName = "  wireless headphones PRO  ";

// Step 1: trim extra spaces and convert to lowercase
const cleaned = productName.trim().toLowerCase();

// Step 2: capitalize the first letter of each word
const capitalized = cleaned
  .split(" ")
  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ");

// Step 3: replace "pro" (any case, whole word) with "Pro Edition"
const finalTitle = capitalized.replace(/\bpro\b/i, "Pro Edition");

console.log(`Cleaned title: "${finalTitle}"`);
console.log(`Length: ${finalTitle.length}`);
