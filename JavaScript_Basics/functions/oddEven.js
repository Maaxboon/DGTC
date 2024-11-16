// Function to check whether an integer is ood or even by parsing a num
function oddOrEven(num) {
  if (num % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}

console.log(oddOrEven(1)); // Outputs "odd"
console.log(oddOrEven(2)); // Outputs "even"
