// Q10: The Final Delivery - Async pipeline debugger

// Each step returns a Promise that settles after a random 1-2 second delay.
// It succeeds most of the time and fails with 15% probability.
function createStep(stepName, successMessage) {
  return function () {
    const delay = 1000 + Math.random() * 1000;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() < 0.15) {
          reject(new Error(stepName + " failed"));
        } else {
          resolve(successMessage);
        }
      }, delay);
    });
  };
}

const takeOrder = createStep("takeOrder", "Order taken");
const prepare = createStep("prepare", "Food prepared");
const pack = createStep("pack", "Package ready");
const dispatch = createStep("dispatch", "Out for delivery");
const deliver = createStep("deliver", "Delivery completed!");

async function runPipeline() {
  console.log("Start Pipeline");
  /*
   ASYNC / EVENT LOOP FLOW:
   - runPipeline() runs synchronously until it reaches the first `await`.
   - At `await takeOrder()`, the function is SUSPENDED and control returns to the
     caller; the call stack is free, so the event loop can do other work.
   - takeOrder() set a timer (macrotask). When the timer fires and the Promise
     resolves, the continuation of runPipeline is queued as a MICROTASK.
   - The event loop then resumes runPipeline right after the `await` with the
     resolved value. This repeats for every step, so steps run strictly in order
     even though nothing ever blocks the thread.
   - If a Promise rejects, `await` throws at that line and control jumps to catch.
  */
  try {
    console.log("Step 1: " + await takeOrder());
    console.log("Step 2: " + await prepare());
    console.log("Step 3: " + await pack());
    console.log("Step 4: " + await dispatch());
    console.log(await deliver());
  } catch (error) {
    console.log("Pipeline failed! (" + error.message + ")");
  }
}

runPipeline();
// Code placed here runs BEFORE any step finishes, proving runPipeline didn't block:
console.log("(main script finished - pipeline continues in the background)");
