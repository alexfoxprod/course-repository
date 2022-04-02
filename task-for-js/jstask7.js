let bind = function (fn, context) {
  let bindArgs = [].slice.call(arguments, 2);
  return function () {
    let fnArgs = [].slice.call(arguments);
    return fn.apply(context, bindArgs.concat(fnArgs));
  };
};
