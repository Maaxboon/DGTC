let seniorTeam = playerAge >= 21;
let juniorTeam = playerAge <= 20;

let message = "";

if (seniorTeam) {
  message = "You should join the senior team";
} else if (juniorTeam) {
  message = "You should join the junior team";
} else {
  message = "You are not eligible to join the team"; // Below 6 years and above 40 years
}

// Making this run on the console using console.log
