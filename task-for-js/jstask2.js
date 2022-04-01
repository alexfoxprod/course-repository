function take(fn, count) {
  let arr = [];
  for (i = 0; i < count; i++) {
    arr[i] = fn();
  }
  return arr;
}
