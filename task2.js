function grid(numbers) {
  if (numbers < 0) return null;

  const grid = [];

  for (let i = 0; i < numbers; i++) {
    const row = [];
    for (let j = 0; j < numbers; j++)
      row.push(String.fromCharCode(97 + ((i + j) % 26)));
    grid.push(row.join(" "));
  }

  return grid.join("\n");
}
console.log(grid(10));
