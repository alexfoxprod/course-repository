function dotCalculator(eqation) {
  if (typeof eqation !== "string") {
    console.log("This is not a string. Try again");
    return "";
  }
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
