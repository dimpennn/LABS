const iface = {
  m1: x => [x],
  m2: function (x, y) {
    return [x, y];
  },
  m3(x, y, z) {
    return [x, y, z];
  }
};

const objToString = (obj) => {
  const result = [];
  for (const key in obj) {
    result.push([key, obj[key].length]);
  }
  return result
};
console.table(objToString(iface));