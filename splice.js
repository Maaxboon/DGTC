// The splice() method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');

// Inserts at index 1

console.log(months);

months.splice(4, 1, 'May');
console.log(months);
