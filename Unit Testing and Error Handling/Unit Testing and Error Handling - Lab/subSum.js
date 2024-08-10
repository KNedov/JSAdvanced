function subSum(array, startIndex, endIndex) {
  if (!Array.isArray(array)) {
    return NaN;
  }
  if (startIndex < 0) {
    startIndex = 0;
  }
  if (endIndex >= array.length) {
    endIndex = array.length - 1;
  }
  array = array
    .slice(startIndex,endIndex+1)
    .map(Number)
    .reduce((aac, x) => aac + x, 0)
    console.log(array);
  return array;
}
subSum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1)
