// Q5: Frontend Rush - Callback Hell vs async/await
// Pipeline: design -> build -> test -> deploy -> celebrate (1 second each)

// ================= Part 1: Callback hell =================
function stepWithCallback(name, callback) {
  setTimeout(() => {
    console.log("[callbacks] " + name);
    callback();
  }, 1000);
}

function runWithCallbacks(done) {
  stepWithCallback("design", () => {
    stepWithCallback("build", () => {
      stepWithCallback("test", () => {
        stepWithCallback("deploy", () => {
          stepWithCallback("celebrate", () => {   // pyramid of doom
            done();
          });
        });
      });
    });
  });
}

// ================= Part 2: async/await =================
function stepWithPromise(name) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("[async/await] " + name);
      resolve();
    }, 1000);
  });
}

async function runWithAsyncAwait() {
  await stepWithPromise("design");
  await stepWithPromise("build");
  await stepWithPromise("test");
  await stepWithPromise("deploy");
  await stepWithPromise("celebrate");
  console.log("[async/await] Pipeline finished");
}

/*
 Why async/await improves readability:
 - Code reads top-to-bottom like normal synchronous code, no nesting or pyramid shape.
 - Each stage is one flat line, so adding/removing/reordering a stage is trivial.
 - Error handling is one try/catch around everything instead of passing errors
   through every callback level.
 - `await` pauses only this function (not the thread), so the event loop stays free.
*/

// Run callbacks first, then async/await after it finishes
runWithCallbacks(() => {
  console.log("[callbacks] Pipeline finished\n");
  runWithAsyncAwait();
});
