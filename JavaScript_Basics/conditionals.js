function evaluatePerformance(goals) {
  if (goals > 10) {
    console.log("Excellent performance");
  } else if (goals > 5) {
    console.log("Good performance.");
  } else {
    console.log("Needs improvement.");
  }
}
evaluatePerformance(8);
evaluatePerformance(4);
evaluatePerformance(14);
