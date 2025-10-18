const array = [true, 'hello', 5, 12, -200, false, 'word', Symbol('symbol'), undefined, null, 'const'];
const countTypes = (arr) => {
    const numberOfTypes = {};
  for (const element of arr) {
    const type = typeof element;
    if (numberOfTypes[type] === undefined) {
        numberOfTypes[type] = 0;
    }
    const count = numberOfTypes[type];
    numberOfTypes[type] = count +1;
  }
  return numberOfTypes;
};
const result = countTypes(array);
console.log(result);