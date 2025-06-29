// First Code Challenge

// A code to return a random letter from my name
// Declare a variable to store my name
let myName = "Maxtoshi";

// Math.random: generates a random number between 0 and 1, multiplying by the length of myName which is 8 give a number between 0 and 7.99, Math.floor rounds it down to the nearest whole number giving you an integer between 0 and 7 -- valid indexes for accessing characters in Maxtoshi
let randomIndex = Math.floor(Math.random() * myName.length);

// pick a random letter using an index from my Name
let randomLetter = myName[randomIndex];

// print the random letter
console.log(randomLetter);

// Another way of approaching the problem
console.log(myName.charAt(Math.floor(Math.random() * myName.length)));
