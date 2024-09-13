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
