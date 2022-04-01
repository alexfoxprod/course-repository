function map(fn, array) {
  let arrayLength = array.length;
  let newArray = [];
  for (i = 0; i < arrayLength; i++) {
    newArray[i] = fn(array[i]);
  }
  return newArray;
}
