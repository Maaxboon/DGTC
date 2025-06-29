// Math Methods and properties
// PI
console.log(Math.PI); // returns the value of pi

// trunc
console.log(Math.trunc(Math.PI)); // returns the integer portion of a number and truncates any decimals

// round
console.log(Math.round(Math.PI)); // returns number rounded off to the nearest integer
console.log(Math.round(3.4)); // returns 3
console.log(Math.round(3.5)); // returns 4

// ceil: always rounds the number up no matter the decimal
console.log(Math.ceil(3.4)); // retuns 4
console.log(Math.ceil(3.5)); // retuns 4

// floor: always rounds the number down no matter the decimal
console.log(Math.floor(3.4)); // retuns 3
console.log(Math.floor(3.5)); // retuns 3

// pow: power, takes two arguments, the base number and the exponent
console.log(Math.pow(2, 3)); // returns 8

// min: returns the smallest number
console.log(Math.min(4, 5, 98, 3)); // returns 3

// max: returns the largest number
console.log(Math.max(4, 5, 11, 3)); // returns 11

// random: if unspecified the result is always 0 to 1
console.log(Math.random());

// From 1 to 10
console.log(Math.floor(Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 10) + 1);

// Note: Chose Math.floor not Math.ceil for generating number from 1 to 10. This is because Math.random() returns a range from 0 to 1 that includes 0 but not 1.
// Math.ceil(Math.random() * 10 ) has a chance of resulting in zero
// Math.floor((Math.random() * 10) + 1) is the way to go
