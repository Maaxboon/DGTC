// Decision tree!
let playerOne;
let playerTwo;

if (playerOne === computer) {
  // tie game
} else if (playerOne === "rock") {
  if (computer === "paper") {
    // computer wins
  } else {
    // playerOne wins
  }
} else if (playerOne === "paper") {
  if (computer === "scissors") {
    // computer wins
  } else {
    if (computer === "rock") {
      // playerOne wins
    } else {
      // playerOne wins
    }
  }
}
