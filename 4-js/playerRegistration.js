// Import the built-in readline module for user input in the terminal
const readline = require("readline");

// Set up readline interface for terminal input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Function to ask questions one at a time
function askQuestion(query) {
  return new Promise((resolve) => rl.question(query, resolve));
}

async function registerPlayer() {
  // Ask user for details
  const firstName = await askQuestion("Enter your first name: ");
  const lastName = await askQuestion("Enter your last name: ");
  const ageInput = await askQuestion("How old are you? ");
  const age = Number(ageInput);

  // Team logic
  let team = "";
  if (age < 6) {
    team = `Still ${6 - age} year(s) before joining FOWAD FC Junior team`;
  } else if (age >= 6 && age < 15) {
    team = `FOWAD FC Junior team for ${15 - age} year(s)`;
  } else if (age >= 15 && age < 23) {
    team = `FOWAD FC Youth team for ${23 - age} year(s)`;
  } else if (age >= 23 && age <= 40) {
    team = `FOWAD FC Senior team for ${40 - age} year(s)`;
  } else {
    team = "FOWAD FC Advisory team";
  }

  // Output result
  console.log(
    `✅ Player ${firstName} ${lastName} registered successfully to: ${team}`
  );

  // Close input
  rl.close();
}

// Run the registration
registerPlayer();
