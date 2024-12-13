// Write a function to find the maximum element in an array.// Done

function maxElementArr(arr) {
  let max = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

console.log(maxElementArr([1, 2, 3, 4, 5]));
