function calculateSuccessRate(goals, attempts) {
  return (goals / attempts) * 100;
}
let successRate = calculateSuccessRate(10, 15);
console.log("Success Rate:", successRate + "%");

function timeToReachCBD(distance, speed) {
  return distance / speed / 60;
}
let timeTaken = timeToReachCBD(26000, 3600);
console.log("Time taken to reach CBD:", timeTaken + "hours");

/*Learning Task: Experiment by changing the values for goals and attempts. */
