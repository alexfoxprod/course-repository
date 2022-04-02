function partial(fn, ...partialArgs) {
  return function (...args) {
    return fn.apply(this, partialArgs.concat(args));
  };
}
