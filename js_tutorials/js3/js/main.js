// Strings
const myVariable = "Mathematics";

// The length property
console.log("Mathematics has", myVariable.length, "characters");

// String Methods
// Find the character position
console.log(
  "The character at index 0 and position one is",
  myVariable.charAt(0)
); // Looks for the character at index 0/position 1

// Finds the indexof of a character
console.log("The index of mat in Mathematics is", myVariable.indexOf("mat")); // Looks for the first occurence of a sequence of characters

// Finds the last index of a character
console.log(
  "The last index of at in Mathematics is",
  myVariable.lastIndexOf("at")
); // Looks for the last occurence of a sequence of characters

// Slice
console.log(myVariable.slice(5, 8)); // Includes the start position and position before the last character

console.log(myVariable.slice(5)); // This only includes everything from the position indicated to the end

// toUppercase: does not require a parameter: turns to upper case
console.log(myVariable.toLocaleUpperCase());

// toLowercase: does not require a parameter: turns to lower case
console.log(myVariable.toLowerCase());

// Includes: returns boolean data
console.log(myVariable.includes("div"));
console.log(myVariable.includes("mat"));

// Split method: splits the string wherever the character we indicate occurs
console.log(myVariable.split("a")); // split means the character is not included in the resulting splits // providing empty quotes results in every character separate in the array
