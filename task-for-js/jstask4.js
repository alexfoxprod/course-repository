function fmap(a, gen) {
  let x = 0;
  let x1 = 0;
  let generator = function () {
    let arr1 = [];
    for (i = 0; i < arguments.length; i++) {
      arr1[i] = arguments[i];
    }
    x = gen.apply(null, arr1);
    x1 = a(x);
    return x1;
  };
  return generator;
}
