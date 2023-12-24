// function reverceArr(arr) {
//   let myArr = arr.toString();
//   return myArr.split("").reverse().join("");
// }
// console.log(reverceArr([1, 2, 3, 4, 5]));

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
}
console.log(reverceArr([1, 2, 3, 4, 5]));
