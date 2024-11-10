// function reverceArr(arr) {
//   let myArr = arr.toString();
//   return myArr.split("").reverse().join("");
// }
// console.log(reverceArr([1, 2, 3, 4, 5]));

// function reverseArray(arr) {
//   let reversedArray = [];
//   for (let i = arr.length - 1; i >= 0; i--) {
//     reversedArray.push(arr[i]);
//   }
//   return reversedArray;
// }

// console.log(reverseArray([1, 2, 3, 4, 5])); // Output: [5, 4, 3, 2, 1]

// effiient method

// two pointers

function reverceArr(arr) {
  let low = 0;
  let high = arr.length - 1;
  while (low < high) {
    [arr[low], arr[high]] = [arr[high], arr[low]];
    low++;
    high--;
  }
   return arr
}
console.log(reverceArr([1, 2, 3, 4, 5]));
console.log(reverceArr(["a", "b", "c", "c", "raja", "raja"]));
