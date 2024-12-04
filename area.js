// Using const for a value that won't change
const pi = 3.14;

// Using let for a value that might change
let radius = 5;

// Using const and let values together
let area = pi * radius * radius;
console.log(area);

// Updating the radius: value declared using let
radius = 8;
area = pi * radius * radius;
console.log(area);
