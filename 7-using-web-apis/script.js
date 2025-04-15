const tableRowsEven = document.getElementsByClassName("even");
if (tableRowsEven.length > 0) {
  for (let i = 0; i < tableRowsEven.length; i++) {
    const tableRow = tableRowsEven.item(i);
    tableRow.computedStyleMap.backgroundColor = "#CCCCCC";
  }
}
