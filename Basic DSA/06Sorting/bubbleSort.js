// Optimize 

// function bubbleSort(arr, n) {
//   for (let i = 0; i < n - 1; i++) {
//     let swapped = false;

//     for (let j = 0; j < n - i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         // Swap elements if they are in the wrong order
//         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//         swapped = true;
//       }
//     }

//     if (!swapped) {
//       break;
//     }
//   }
// }

// // Example usage
// let array = [50, 96, 756, 65, 66, 683];
// let arraySize = array.length;
// console.log(array);

// // Call the function to sort the array
// bubbleSort(array, arraySize);

// console.log(array);


function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap elements if they are in the wrong order
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

// Example usage
let array = [50, 96, 756, 65, 66, 683];
console.log("Before", array);

// Call the function to sort the array
bubbleSort(array);

console.log("After", array);

