function dotCalculator(eqation) {
  let arr = eqation.split(" ");
  switch (arr[1]) {
    case "+": {
      return ".".repeat(arr[0].length + arr[2].length);
    }
    case "-": {
      return ".".repeat(arr[0].length - arr[2].length);
    }
    case "*": {
      return ".".repeat(arr[0].length * arr[2].length);
    }
    case "//": {
      return ".".repeat(arr[0].length / arr[2].length);
    }
    default:
      break;
  }
}
console.log(dotCalculator("... + .."));
console.log(dotCalculator("..... - .."));
console.log(dotCalculator("... * .."));
console.log(dotCalculator("...... // .."));
