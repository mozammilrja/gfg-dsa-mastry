// Write a function to calculate the average of elements in an array.

function calAvgElemArr(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

console.log(calAvgElemArr([1, 2, 3, 4, 5]));
