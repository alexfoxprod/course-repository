let characters = [
  { name: "barney", age: 36 },
  { name: "fred", age: 40 },
];
function pluck(objects, fieldName) {
  newArr = [];
  for (i = 0; i < objects.length; i++) {
    newArr.push(objects[i][fieldName]);
  }
  return newArr;
}
console.log(pluck(characters, "name"));
