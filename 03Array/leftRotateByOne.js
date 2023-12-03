function leftRotate(arr) {
  let temp = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] < arr[i]) {
      arr[arr.length - 1] = temp;
    }
  }
  return arr;
}
console.log(leftRotate([1, 2, 3, 4, 5])); // Output: [2, 3, 4, 5, 1]
