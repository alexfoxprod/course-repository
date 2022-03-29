function dotCalculator(eqation) {
  let arr = eqation.split(" ");
  switch (arr[1]) {
    case "+": {
      ".".repeat(arr[0].length + arr[2].length);
    }
    case "-": {
      ".".repeat(arr[0].length - arr[2].length);
    }
    case "*": {
      ".".repeat(arr[0].length * arr[2].length);
    }
    case "//": {
      ".".repeat(arr[0].length / arr[2].length);
    }
    default:
      break;
  }
}
dotCalculator("... + ..");
dotCalculator("..... - ..");
dotCalculator("... * ..");
dotCalculator("...... // ..");
