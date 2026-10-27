// Q7. Customer Feedback Processor
const feedback = "Great product! Fast delivery and amazing sound quality!";

// Count words: split on spaces (filter removes empty strings from extra spaces)
const wordCount = feedback.trim().split(" ").filter((w) => w !== "").length;

// Case-insensitive check for negative words
const lowerFeedback = feedback.toLowerCase();
const hasNegative = lowerFeedback.includes("bad") || lowerFeedback.includes("poor");

console.log(`Feedback  : "${feedback}"`);
console.log(`Word count: ${wordCount}`);

if (!hasNegative) {
  console.log("Positive Feedback");
} else {
  console.log("Needs Improvement");
}
