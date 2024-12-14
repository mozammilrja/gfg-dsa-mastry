// Write a function to count the occurrences of a specific element in an array.

function countOccurrence(arr, element) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      count++;
    }
  }
  return count;
}

const array = [1, 2, 2, 3, 4, 2, 4, 4, 3];
const targetElement = 2;
console.log(countOccurrence(array, targetElement)); // Output: 3
