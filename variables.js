// Initializing a variable: we use let and =

let bootcamp = "App Academy";

console.log(bootcamp);

let birthYear = "2012";
console.log(birthYear);

// The variable initializations above really consist of two steps: declaration with let and assignment with =. Let's break these two steps down.

/* Declaring a variable
In JavaScript, in order to use a variable, we must declare it. Variable declaration is the act of introducing the variable to the environment.

To declare a variable, use the let keyword, followed by a space and then the name of the variable. */

let bootcamp;
console.log(bootcamp); // undefined

/* Once a variable is declared, it will contain undefined as its value. undefined is a common default value in JavaScript, and we'll see it come up in a few different places. You can think of undefined as showing that the variable is empty.

Assigning a variable
Once a variable has been declared, we can assign it a value using single-equals = : */

let bootcamp;
console.log(bootcamp); // undefined
bootcamp = "App Academy";
console.log(bootcamp); // 'App Academy'

Manipulating variables
To change the value of a variable, we need to reassign it to a new value with = :

let num = 42;
console.log(num + 8); // => 50
console.log(num); // => 42

num = num + 10;
console.log(num); // => 52
/* In the code above, num + 8 will evaluate to 50, but it will not change the num variable to 50. If we want to change the num variable, we must reassign to it.
 */

/* variables are declared with let and will contain the value undefined by default
we can use a single-equals = to assign variables
changing a variable requires a reassignment, for which there are many shortcuts (+=, -=, etc.) */