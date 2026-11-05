// Q4: DevOps Delay - Promise.all and Promise.race

// Creates a server "response" that arrives after `delay` ms.
// Each server has a 20% chance of failing (random failure simulation).
function deployToServer(name, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.2) {
        reject(new Error(name + " failed to respond"));
      } else {
        resolve(name + " responded");
      }
    }, delay);
  });
}

// Note: each promise starts running the moment it is created, so we create
// separate sets for all() and race() to keep the demonstrations independent.

// Promise.all -> waits for ALL; rejects immediately if ANY one fails
Promise.all([deployToServer("Server A", 2000), deployToServer("Server B", 3000)])
  .then((results) => {
    console.log("Results:", results);
    console.log("Deployment completed for all servers");
  })
  .catch((error) => console.log("Promise.all error: " + error.message));

// Promise.race -> settles as soon as the FIRST promise settles (fulfilled or rejected)
Promise.race([deployToServer("Server A", 2000), deployToServer("Server B", 3000)])
  .then((fastest) => console.log("Fastest response: " + fastest))
  .catch((error) => console.log("Promise.race error: " + error.message));
