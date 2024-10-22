// Logical NOT
// The not(!) operator reverses a boolean value
console.log(!true); // false
console.log(!false); // true
console.log(!!false); // false

// ! is a unary operator. This means it the not operation is applied to a single value. This is contrary to a binary operator such as multiplication which is applied between two values. It does not make sense to ! two values together.

// Logical AND: &&
// The and (&&) operator will take two values and will only evaluate to true if both values are true. Otherwise it will return false.

console.log(false && false); // => false
console.log(true && false); // => false
console.log(true && true); // => true
console.log(false && true); // => false
