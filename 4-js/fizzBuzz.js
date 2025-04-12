// Check number is divible by 3
for (let i = 0; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(i, "|-😎😁-|");
  } else if (i % 3 === 0) {
    console.log(i, "|-😎---|");
  } else if (i % 5 === 0) {
    console.log(i, "|-😁---|");
  } else {
    continue;
  }
}
