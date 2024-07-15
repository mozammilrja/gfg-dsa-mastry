// function mergeSort(arr) {
//   if (arr.length <= 1) {
//     return arr;
//   }
//   let mid = Math.floor(arr.length / 2);
//   let left = arr.slice(0, mid);
//   let right = arr.slice(mid);

//   let sortedLeft = mergeSort(left);
//   let sortedRight = mergeSort(right);

//   return merge(sortedLeft, sortedRight);
// }

// function merge(left, right) {
//   let res = [];
//   let leftIndex = 0;
//   let rightIndex = 0;

//   while (leftIndex < left.length && rightIndex < right.length) {
//     if (left[leftIndex] < right[rightIndex]) {
//       res.push(left[leftIndex]);
//       leftIndex++;
//     } else {
//       res.push(right[rightIndex]);
//       rightIndex++;
//     }
//   }
//   while (leftIndex < left.length) {
//     res.push(left[leftIndex]);
//     leftIndex++;
//   }
//   while (rightIndex < right.length) {
//     res.push(right[rightIndex]);
//     rightIndex++;
//   }

//   return res;
// }

// // Function to merge three sorted arrays
// function mergeThreeSortedArrays(arr1, arr2, arr3) {
//   const mergedFirstTwo = merge(arr1, arr2);
//   return merge(mergedFirstTwo, arr3);
// }

// // Example usage:
// const arr1 = [1, 3, 5, 7];
// const arr2 = [2, 4, 6, 8];
// const arr3 = [0, 9, 10, 11];

// console.log("Array 1 is:", arr1);
// console.log("Array 2 is:", arr2);
// console.log("Array 3 is:", arr3);

// const mergedArray = mergeThreeSortedArrays(arr1, arr2, arr3);
// console.log("Merged array is:", mergedArray); // Output: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]



// Function to merge two subarrays of arr[]
// First subarray is arr[low..mid]
// Second subarray is arr[mid+1..high]
function merge(arr, low, mid, high) {
  // Sizes of two subarrays to be merged
  let n1 = mid - low + 1;
  let n2 = high - mid;

  // Create temporary arrays
  let left = [];
  let right = [];

  // Copy data to temporary arrays left[] and right[]
  for (let i = 0; i < n1; i++) {
    left[i] = arr[low + i];
  }
  for (let j = 0; j < n2; j++) {
    right[j] = arr[mid + 1 + j];
  }

  // Initial indexes of the first and second subarrays
  let i = 0;
  let j = 0;

  // Initial index of merged subarray
  let k = low;

  // Merge the temporary arrays back into arr[low..high]
  while (i < n1 && j < n2) {
    if (left[i] <= right[j]) {
      arr[k++] = left[i++];
    } else {
      arr[k++] = right[j++];
    }
  }

  // Copy the remaining elements of left[], if any
  while (i < n1) {
    arr[k++] = left[i++];
  }

  // Copy the remaining elements of right[], if any
  while (j < n2) {
    arr[k++] = right[j++];
  }

  return arr;
}

// Function to implement merge sort
// arr[] is the array to be sorted, left is the starting index, right is the ending index
function mergeSort(arr, left, right) {
  if (left < right) {
    // Find the middle point to divide the array into two halves
    let mid = Math.floor((left + right) / 2);

    // Call mergeSort on the first half
    arr = mergeSort(arr, left, mid);

    // Call mergeSort on the second half
    arr = mergeSort(arr, mid + 1, right);

    // Merge the two halves sorted in the previous steps
    arr = merge(arr, left, mid, right);
  }
  return arr;
}

// Example usage
let a = [10, 5, 30, 15, 7];
let l = 0;
let r = a.length - 1;

// Sort the array using mergeSort
a = mergeSort(a, l, r);
console.log(a); // Output: [5, 7, 10, 15, 30]


