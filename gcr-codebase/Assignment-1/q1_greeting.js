// Q1. Personalized Login Greeting
const userName = "Jatin";
const currentHour = new Date().getHours(); // 0-23

let greeting;
if (currentHour < 12) {
  greeting = `Good Morning ${userName}!`;
} else if (currentHour <= 17) { // 12 to 17 inclusive
  greeting = `Good Afternoon ${userName}!`;
} else {
  greeting = `Good Evening ${userName}!`;
}

console.log(greeting);
