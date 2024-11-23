// This code example will declare a global variable carName, even if the value is assigned inside a function.

myFunction();

// code here can access carName

function myFunction() {
	carName = "Volvo";
}
