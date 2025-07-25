function sumOfNumbers(arr, n) {
  if (arr.length === 0) {
    return 0;
  }

  return arr[arr.length - 1] + sumOfNumbers(arr.slice(0, arr.length - 1));
}

console.log(sumOfNumbers([1, 2, 3, 4, 5], 5));

// sumArray([1, 2, 3, 4, 5])
// = 1 + sumArray([2, 3, 4, 5])
// = 1 + 2 + sumArray([3, 4, 5])
// = 1 + 2 + 3 + sumArray([4, 5])
// = 1 + 2 + 3 + 4 + sumArray([5])
// = 1 + 2 + 3 + 4 + 5 + sumArray([])
// = 1 + 2 + 3 + 4 + 5 + 0
// = 15

function sumOfNumbers(arr, n) {
  if (n === 0) {
    return 0;
  }

  return arr[n - 1] + sumOfNumbers(arr, n - 1);
}

console.log(sumOfNumbers([1, 2, 3, 4, 5], 5), 5);
