// Write a function to check if a specific element exists in an array.

function checkElement(arr, ele) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === ele) {
      return true;
    }
  }
  return false;
}

console.log(checkElement([1, 2, 3, 4, 5, 6], 3));

function checkElement(arr, ele) {
  const set = new Set(arr);
  return set.has(ele);
}
