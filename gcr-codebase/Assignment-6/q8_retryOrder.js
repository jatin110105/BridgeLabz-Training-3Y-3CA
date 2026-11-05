// Q8: Order Processing Flow - Async retry mechanism

// Returns a Promise that fails about 50% of the time
function submitOrder() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.5) {
        resolve("Order submitted");
      } else {
        reject(new Error("Network error"));
      }
    }, 500);
  });
}

async function processOrder() {
  const maxAttempts = 3;

  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      await submitOrder();                       // wait for this attempt to settle
      console.log("Attempt " + attempt + ": Success");
      return "Order processed successfully";     // success -> exit loop and function
    } catch (error) {
      console.log("Attempt " + attempt + ": Failed");
      // failure -> loop continues to the next attempt
    }
  }

  // Reaching here means all attempts failed
  throw new Error("Order could not be processed");
}

// Handle final failure gracefully
(async () => {
  try {
    const result = await processOrder();
    console.log(result);
  } catch (error) {
    console.log("Final error: " + error.message);
  }
})();
