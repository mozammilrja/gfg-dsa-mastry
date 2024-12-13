// Write a function to find the minimum element in an array.

function minElementArr(arr) {
  let max = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < max) {
      max = arr[i];
    }
  }
  return max;
}

console.log(minxElementArr([1, 2, 3, 4, 5]));
