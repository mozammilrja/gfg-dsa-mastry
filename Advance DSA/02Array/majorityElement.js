// Naive method

function majorityElement(arr) {
  for (let i = 0; i < arr.length; i++) {
    let count = 1;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        count++;
      }
      if (count > arr.length % 2) {
        return arr[i];
      }
    }
  }
  return null;
}

let arr = [3, 5, 4, 5, 5];

console.log(majorityElement(arr)); // Output: 5
