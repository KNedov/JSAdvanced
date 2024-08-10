function calculator(array, string) {
  if (string == "asc") {
    let ascendingSortedArray = array.sort((a, b) => a - b);
    console.log(ascendingSortedArray);
    return ascendingSortedArray;
  } else if (string == "desc") {
    let descendingSortedArray = array.sort((a, b) => b - a);
    console.log(descendingSortedArray);
    return descendingSortedArray;
  }
}
calculator([14, 7, 17, 6, 8], "asc");
