function merge(arr, l, m, h) {
  let n1 = m - l + 1,
    n2 = h - m;
  let left = [];
  let right = [];
  for (let i = 0; i < n1; i++) left[i] = arr[i + l];
  for (let j = 0; j < n2; j++) right[j] = arr[m + 1 + j];
  let i = 0,
    j = 0,
    k = l;
  while (i < n1 && j < n2) {
    if (left[i] <= right[j]) arr[k++] = left[i++];
    else arr[k++] = right[j++];
  }
  while (i < n1) arr[k++] = left[i++];
  while (j < n2) arr[k++] = right[j++];
  return arr;
}

let a = [10, 15, 20, 40, 8, 11, 15, 22, 25];
let l = 0,
  h = 8,
  m = 3;

a = merge(a, l, m, h);
console.log(a); // output [8, 10, 11, 15, 15,20, 22, 25, 40]
// time coplexity  n(n)


function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);

  let sortedLeft = mergeSort(left);
  let sortedRight = mergeSort(right);

  return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
  let res = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      res.push(left[leftIndex]);
      leftIndex++;
    } else {
      res.push(right[rightIndex]);
      rightIndex++;
    }
  }
  while (leftIndex < left.length) {
    res.push(left[leftIndex]);
    leftIndex++;
  }
  while (rightIndex < right.length) {
    res.push(right[rightIndex]);
    rightIndex++;
  }

  return res;
}

// Function to merge three sorted arrays
function mergeThreeSortedArrays(arr1, arr2, arr3) {
  const mergedFirstTwo = merge(arr1, arr2);
  return merge(mergedFirstTwo, arr3);
}

// Example usage:
const arr1 = [1, 3, 5, 7];
const arr2 = [2, 4, 6, 8];
const arr3 = [0, 9, 10, 11];

console.log("Array 1 is:", arr1);
console.log("Array 2 is:", arr2);
console.log("Array 3 is:", arr3);

const mergedArray = mergeThreeSortedArrays(arr1, arr2, arr3);
console.log("Merged array is:", mergedArray); // Output: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
