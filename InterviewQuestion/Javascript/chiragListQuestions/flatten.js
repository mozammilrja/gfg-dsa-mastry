function flatArray(a, flattened = []) {
  for (let i = 0; i < a.length; i++) {
    if (Array.isArray(a[i])) {
      flatArray(a[i], flattened);
    } else {
      flattened.push(a[i]);
    }
  }
  return flattened;
}

const a = [1, 2, 3, [4, [5, 6]], 7, 8];
console.log(flatArray(a));
