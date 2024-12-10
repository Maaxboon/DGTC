/* Linda's Harvest!
Linda's farm has had a very bountiful harvest!

She needs to sell her produce as soon as possible whilst it is still fresh. Luckily your new JavaScript skills using operators, properties and methods to form expressions are just the tools needed to take advantage of this time of plenty!

To solve the challenge:

Create a new variable twiceTheCarrots. Assign to it a value equal to double the value of carrots.
Create a new variable characterCount that will store the length of the text on the board.
Create a variable called shoutingText and assign it text of the board, but with all characters as capital letters. */

function lindasBounty() {
  const carrots = 239;
  const boardText = "Buy our carrots! Sale Now On!";
  // Do not change code above this line

  // Create a variable twiceTheCarrots assign to double the value of carrots
  let twiceTheCarrots = carrots * 2;

  // Create a new variable to count the characters
  let characterCount = boardText.length;

  //  Change characters to uppercase
  let shoutingText = boardText.toUpperCase();

  // Do not change code below this line
  return {
    numberOfCarrots: twiceTheCarrots,
    boardSize: characterCount,
    advert: shoutingText,
  };
}
