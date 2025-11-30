const obj = { a: 1, b: 2, c: 3 };

iterate(obj, (key, value) => {
  console.log({ key, value });
});

function iterate (object, callback) {
    const keys = Object.keys(object);
  for (const key of keys) {
    callback(key, object[key]);
  }
}