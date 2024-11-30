const todoList = ["do the laundry", "make dinner", "mount the spice rack"];

for (let i = 0; i < todoList.length; i++) {
  const job = todoList[i];
  console.log("It's time to " + job);
}

/*
Our for loop expressions can be changed if we want to interrogate our array in a different way. For example, we could iterate through the array in reverse:

for (let i = todoList.length - 1; i >= 0; i--) {
  // code to execute
}; */
