// Conditional Statements: Switch statements

// Syntax
/*switch (expression OR value) {
    case choice1:
        // run this code
        break;
    case choice2:
        // run this code
        break;
    
    // add as many cases as needed

    default:
        // run this code if no case matches
        // no need for break here
}*/

// Example:
switch (Math.floor(Math.random() * 3) + 1) {
  case 1:
    console.log(1);
  case 2:
    console.log(2);
  case 3:
    console.log(3);
  default:
    console.log("No match");
}
