function shallowEquals(obj1, obj2) {
  res = false;
  for (let key in obj1) {
    for (let key2 in obj2) {
      if (key === key2 && obj1[key] === obj2[key2]) {
        res = true;
      } else {
        res = false;
      }
    }
  }

  return res;
}

console.log(shallowEquals({ a: 1, b: "2" }, { a: 1, b: "2" }));
console.log(shallowEquals({ a: 0 }, { a: undefined }));
console.log(shallowEquals({ a: {} }, { a: {} }));
console.log(shallowEquals({ a: [] }, { a: [] }));
console.log(shallowEquals({ a: () => {} }, { a: () => {} }));
