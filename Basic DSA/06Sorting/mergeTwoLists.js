// function mergeSortedArraysNaive(arr1, arr2) {
//   // Concatenate both arrays
//     let arr3 = arr1.concat(arr2);

//     console.log(arr3,'cc')

//   // Sort the concatenated array
//   arr3.sort((a, b) => a - b);

//   return arr3;
// }

// // Test cases
// let arr1 = [1, 3, 4, 5];
// let arr2 = [2, 4, 6, 8];
// console.log(mergeSortedArraysNaive(arr1, arr2)); // Output: [1, 2, 3, 4, 4, 5, 6, 8]

// // arr1 = [5, 8, 9];
// // arr2 = [4, 7, 8];
// // console.log(mergeSortedArraysNaive(arr1, arr2)); // Output: [4, 5, 7, 8, 8, 9]

// function mergeArrays(arr1, arr2) {
//     const n1 = arr1.length;
//     const n2 = arr2.length;
//     const arr3 = new Array(n1 + n2);
//     console.log(arr3,'ttt')
//     let i = 0, j = 0, k = 0;

//     while (i < n1 && j < n2) {
//         if (arr1[i] < arr2[j]) {
//             arr3[k++] = arr1[i++];
//         } else {
//             arr3[k++] = arr2[j++];
//         }
//     }

//     while (i < n1) {
//         arr3[k++] = arr1[i++];
//     }

//     while (j < n2) {
//         arr3[k++] = arr2[j++];
//     }

//     return arr3;
// }

// let arr1 = [1, 3, 4, 5];
// let arr2 = [2, 4, 6, 8];
// console.log(mergeArrays(arr1, arr2)); // Output: [1, 2, 3, 4, 4, 5, 6, 8]

function mergeArrays(arr1, arr2, arr3) {
  const n1 = arr1.length;
  const n2 = arr2.length;
  const n3 = arr3.length;
  const arr4 = new Array(n1 + n2 + n3);
  let i = 0,
    j = 0,
    k = 0,
    m = 0;

  // Merge the three arrays into arr4
  while (i < n1 && j < n2 && k < n3) {
    if (arr1[i] < arr2[j] && arr1[i] < arr3[k]) {
      arr4[m++] = arr1[i++];
    } else if (arr2[j] < arr1[i] && arr2[j] < arr3[k]) {
      arr4[m++] = arr2[j++];
    } else {
      arr4[m++] = arr3[k++];
    }
  }

  // Merge the remaining elements of arr1 and arr2
  while (i < n1 && j < n2) {
    arr4[m++] = (arr1[i] < arr2[j]) ? arr1[i++] : arr2[j++];
  }

  // Merge the remaining elements of arr2 and arr3
  while (j < n2 && k < n3) {
    arr4[m++] = (arr2[j] < arr3[k]) ? arr2[j++] : arr3[k++];
  }

  // Merge the remaining elements of arr1 and arr3
  while (i < n1 && k < n3) {
    arr4[m++] = (arr1[i] < arr3[k]) ? arr1[i++] : arr3[k++];
  }

  // Add the remaining elements of arr1, if any
  while (i < n1) {
    arr4[m++] = arr1[i++];
  }

  // Add the remaining elements of arr2, if any
  while (j < n2) {
    arr4[m++] = arr2[j++];
  }

  // Add the remaining elements of arr3, if any
  while (k < n3) {
    arr4[m++] = arr3[k++];
  }

  return arr4;
}

// Test cases
let arr1 = [1, 3, 4, 5];
let arr2 = [2, 4, 6, 8];
let arr3 = [0, 7, 9, 10];
console.log(mergeArrays(arr1, arr2, arr3)); // Output: [0, 1, 2, 3, 4, 4, 5, 6, 7, 8, 9, 10]
