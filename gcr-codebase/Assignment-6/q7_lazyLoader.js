// Q7: The Lazy Loader - Promise.allSettled()

function loadProfile() { return new Promise(r => setTimeout(() => r("Profile Loaded"), 2000)); }
function loadPosts() { return new Promise(r => setTimeout(() => r("Posts Loaded"), 1500)); }
function loadMessages() { return new Promise(r => setTimeout(() => r("Messages Loaded"), 1000)); }

// Wrapper that turns a successful loader into a failing one
function makeFailing(loader, moduleName) {
  return () => loader().then(() => { throw new Error(moduleName + " failed to load"); });
}

async function loadDashboard() {
  const startTime = Date.now();

  const modules = [
    { name: "Profile", load: loadProfile },
    { name: "Posts", load: loadPosts },
    { name: "Messages", load: loadMessages },
  ];

  // Randomly pick ONE module to reject
  const failIndex = Math.floor(Math.random() * modules.length);
  modules[failIndex].load = makeFailing(modules[failIndex].load, modules[failIndex].name);

  // allSettled never rejects: it waits for ALL promises and reports each outcome
  const results = await Promise.allSettled(modules.map((m) => m.load()));

  results.forEach((result, index) => {
    const name = modules[index].name;
    if (result.status === "fulfilled") {
      console.log("SUCCESS - " + name + ": " + result.value);
    } else {
      console.log("FAILED  - " + name + ": " + result.reason.message);
    }
  });

  const totalTime = Date.now() - startTime;
  // Total ~2000 ms: loaders run in parallel, so time = slowest loader (Profile)
  console.log("Total time taken: " + totalTime + " ms");
}

loadDashboard();
