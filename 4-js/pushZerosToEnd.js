function pushZerosToEnd(arr) {
  let count = 0;

  //   Move all non-zero elements to front
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[count++] = arr[i];
    }
  }

  //   Fill the rest with zeros
  while (count < arr.length) {
    arr[count++] = 0;
  }
}

const arr = [1, 2, 0, 4, 0, 0, 3, 0, 5, 0];
const brzz = [4, 0, 8, 0, 9, 7];
pushZerosToEnd(arr);
pushZerosToEnd(brzz);
console.log(arr.join(""));
console.log(brzz.join(""));
