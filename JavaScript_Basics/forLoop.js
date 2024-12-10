/*
for (start; stop; step) {
// code to execute
} */

for (let i = 0; i < 10; i += 3) {
  console.log(i);
}

/*
let i = 0 is the start expression. It's used to 
declare a variable before the loop begins. This is often a counter to keep track of the number of times the loop has run, which at the start is 0.

i is a common variable name used for this. Though using single-letter variable names is generally not good for code readability, this is a long-standing naming 
convention

i < 3 is the stop expression. Before each repetition of the loop, this expression is evaluated to a boolean (it's another example of a boolean context). If true, the loop will continue to iterate. If false, then the loop will end. In our example, we will check whether i is less than 3.

i++ is the step expression. This code is executed at the end of each repetition. If you haven't seen this 
syntax before, i++ is another way of writing i = i + 1 - we reassign the value of i to be itself plus one. This is a typical way to manage a counter set up in a start expression

i++ is also known as an increment by one of i. Similarly, i--, or i = i - 1 is syntax we could use to decrement i by one. You can increment or decrement by other amounts using this syntax:
 */
