//  Write a function to find the index of a specific element in an array.

function findIndex(arr, element) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      return i;
    }
  }
  return -1;
}

console.log(findIndex([1, 2, 3, 4, 5], 3));
