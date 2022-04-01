function sequence(start, step) {
  if (start === undefined) start = 0;
  if (step === undefined) step = 1;
  return function () {
    return (start += step) - step;
  };
}
let generator = sequence(10, 3);
let generator2 = sequence(7, 1);

console.log(generator()); // 10
console.log(generator()); // 13
