function filter(arr, fn) {
  newArr = [];
  for (i = 0; i < i.length; i++) {
    if (fn(arr[i]) == true) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
