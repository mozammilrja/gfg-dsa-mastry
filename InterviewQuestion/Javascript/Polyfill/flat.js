const arr = [1, 2, 3, 4, 5, [6, 4, 3, 5, [1, 2, 3]]];

function myFlat(arr, depth = 1, output = []) {
  if (depth <= 0) {
    output.push(arr);
    return output;
  } else {
    for (const item of arr) {
      if (Array.isArray(item)) {
        myFlat(item, depth - 1, output);
      } else output.push(item);
    }
  }
  return output;
}
console.log(myFlat(arr, 10));
