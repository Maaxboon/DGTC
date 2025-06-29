// Numbers

// An integer is a whole number
const myNumber = 42;

// A number with a decimal point is a float which references the "floating point"
const myFloat = 42.0;
const myFloat1 = 42.045;

// Numbers as strings
const myString = "42";

console.log(myNumber);

console.log(myFloat); // omits the decimal if no value present

console.log(myFloat1); // shows the decimal if a value is present

console.log(myString); // Appears white in the console

// comparing number and strings
console.log(myNumber === myString); // strict equality, does type coercion
console.log(myNumber == myString); // loose equality, does not do type coercion

// concatenation
console.log(myString + 5); // simply combines the string and the number

// Changing string data type to a number data type using the number() function
console.log(Number(myString));
console.log(Number(myString) + 4); // Now adds to the number

// Comparing the converted string to myNumber
console.log(Number(myString) === myNumber); // returns true

// Trying to convert strings and undefined to number returns NaN(Not a Number)
console.log(Number("Maxtoshi")); // NaN
console.log(Number(undefined)); // Nan

// Converting booleans to number
console.log(Number(true)); // returns 1 // on
console.log(Number(false)); // returns 0 // off

// Number Methods
// The Number.isInteger() method determines whether the passed value is an integer
console.log(Number.isInteger(myNumber)); // true
console.log(Number.isInteger(myString)); // false

// The Number.parseFloat() method parses an argument and returns a floating point number. If a number cannot be parsed from the argument, it returns NaN.
console.log(Number.parseFloat(myNumber)); // 42
console.log(Number.parseFloat(myString)); // 42
console.log(Number.parseFloat("Maxtoshi")); // NaN

console.log(Number.parseFloat("43enbv")); // 43 // removes non numeric data types and parses the number

console.log(Number.parseFloat(myString).toFixed(2)); // 42.00 // two decimal places

console.log(Number.parseInt(myFloat)); // removes non numeric characters

// Convert float to string
console.log(typeof myFloat.toString());

// The global isNaN() function determines whether a value is NaN or not.
console.log(Number.isNaN("Maxtoshi"));
