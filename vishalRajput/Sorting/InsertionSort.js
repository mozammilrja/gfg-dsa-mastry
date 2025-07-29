// const arr = [-2, -7, 1000, 5];

// // console.log(arr.sort()); //[ -2, -7, 1000, 5 ] b/c in number so this is o/p not the sort
// // console.log(arr.sort((a, b) => a - b));

// function insertionSort(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     let curr = arr[i];
//     let j = i - 1;

//     while (j >= 0 && arr[j] > curr) {
//       arr[j + 1] = arr[j];
//       j--;
//     }
//     arr[j + 1] = curr;
//   }

//   return arr;
// }
// // let arr = [5, 2, 4, 1];

// console.log(insertionSort(arr));

function largeNumber(arr) {
  let strs = arr.map(String);
  strs.sort((a, b) => b + a.localeCompare(a + b));

  if (strs[0] === "0") {
    return "0";
  }

  return strs.join("");
}
console.log(largeNumber([2, 10]));
