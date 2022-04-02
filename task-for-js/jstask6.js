function partialAny(fn) {
  let args = Array.prototype.slice.call(arguments, 1);
  let unArr = [];
  for (i = 0; i < args.length; i++) {
    if (args[i] === undefined) unArr.push(i);
  }
  return function () {
    let j = 0;
    let args1 = Array.prototype.slice.call(arguments, 0);
    if (unArr.length > 0) {
      for (i = 0; i < unArr.length; i++) {
        args[unArr[i]] = args1[j];
        j++;
      }
    }
    for (i = 0; i < args1.length - unArr.length; i++) {
      args.push(args1[j]);
      j++;
    }
    return fn.apply(null, args);
  };
}
