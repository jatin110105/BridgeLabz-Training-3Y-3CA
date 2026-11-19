// Q9. Fitness App Analytics
class FitnessAnalytics {
  constructor(data) {
    if (!Array.isArray(data) || data.length === 0) {
      throw new Error("Dataset is empty.");
    }
    this.data = data;
  }

  getActiveUsers() {
    return this.data.filter((d) => d.steps > 7000);
  }

  getAverageCalories() {
    const total = this.data.reduce((sum, d) => sum + d.calories, 0);
    return total / this.data.length;
  }

  getUserSummary() {
    return this.data.map(
      (d) => `User ${d.user} walked ${d.steps} steps and burned ${d.calories} calories.`
    );
  }
}

const workouts = [
  { user: "A", steps: 8000, calories: 300 },
  { user: "B", steps: 12000, calories: 500 },
  { user: "C", steps: 4000, calories: 200 },
];

const analytics = new FitnessAnalytics(workouts);
console.log("Active users:", analytics.getActiveUsers());
console.log("Average calories:", analytics.getAverageCalories().toFixed(2));
console.log(analytics.getUserSummary().join("\n"));

try {
  new FitnessAnalytics([]);
} catch (err) {
  console.log("Error:", err.message);
}
