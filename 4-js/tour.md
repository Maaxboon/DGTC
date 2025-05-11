// Anything following double slashes is an English-language comment.
// Read the comments carefully: they explain the JavaScript code.
// A variable is a symbolic name for a value.
// Variables are declared with the let keyword:
let x;                    // Declare a variable names x.
// Values can be assigned to variables with an = sign
x = 0;                                         // Now the variable x has the value 0
x                                              // => 0: A variable evaluates to its value.

// JavaScript supports several types of values
x = 1;                       // Numbers.
x = 0.01;                   //  Numbers can be integers or reals.
x = "hello world"           // Strings of text in quotation marks.
x = 'JavaScript'            // Single quote marks also delimit strings.
x = true;                   // A Boolean value
x = false;                  // The other Boolean value.
x = null;                   // Null is a special value that means "no value."
x = undefined;              // undefined is another special value like null.

// JavaScript's most important data type is the object.
// An object is a collection of name/value pairs or a string to a map.
let book = {                 //Objects are enclosed in curly braces.
    topic: "JavaScript",    // The property "topic" has value "JavaScript."
    edition: 7              // The property "edition" has value 7
};                           // The curly brace marks the end of the object.
