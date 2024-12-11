/*Finding a substring

JavaScript has a cool .indexOf(substr) method that returns the index where a particular character/substring occurs. If the substring was not found, it returns -1.*/

const message = "Don't be sad, be happy!";
console.log(message.indexOf("Don't")); // <== 0
console.log(message.indexOf("t")); // <== 4
console.log(message.indexOf("Be")); // <== -1 (capitalized Be ≠ lowercased be)
console.log(message.indexOf("py")); // 20

/*We can also access characters inside of strings with square brackets and their index number. As we said, the index starts at 0.*/

const greeting = "Hello there!";
console.log(greeting[0]); // <== H
console.log(greeting[3]); // <== l
console.log(greeting[9]); // <== r
console.log(greeting[-2]); // undefined

/*Finding a substring

JavaScript has a cool .indexOf(substr) method that returns the index where a particular character/substring occurs. If the substring was not found, it returns -1.*/

const message = "Don't be sad, be happy!";
console.log(message.indexOf("Don't")); // <== 0
console.log(message.indexOf("t")); // <== 4
console.log(message.indexOf("Be")); // <== -1 (capitalized Be ≠ lowercased be)
console.log(message.indexOf("py")); // 20

/*The substring be appears more than once. To see the next occurrence, we need to tell somehow our .indexOf() method to skip the first one.*/

const message = "Don't be sad, be happy!";
console.log(message.indexOf("be")); // <== 6
console.log(message.indexOf("be", 7)); // <== 1

/*If we need to look for a substring but from the end to its beginning, you can use str.lastIndexOf(substr). It shows occurrences in the reverse order.*/

const message = "Don't be sad, be happy!";
console.log(message.lastIndexOf("be"));
// The index of the first "be" from the end is 14
