function countOccurrences(arr, n, target) {
  let count = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] === target) {
      count++;
    }
  }
  return count;
}

let arr = [1, 1, 2, 2, 2, 3, 4, 5];
let n = arr.length;
let target = 2;
let result = countOccurrences(arr, n, target);
console.log(result); // Output: 3
