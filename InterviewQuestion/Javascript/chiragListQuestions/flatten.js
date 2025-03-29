function flatArray(a, result = []) {
  for (let i = 0; i < a.length; i++) {
    if (Array.isArray(a[i])) {
      flatArray(a[i], result);
    } else {
      result.push(a[i]);
    }
  }
  return result;
}

const arr = [1, [2, [3, 4, 5]], [6, [7, 8, [9, 10, 11], 12, 13]]];

console.log(flatArray(arr));
