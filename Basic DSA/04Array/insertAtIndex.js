// function insertAtIndex(arr, n, ind, ele) {
//   let newArr = [];
//   for (let i = 0; i < ind; i++) {
//     newArr.push(arr[i]);
//   }
//   newArr.push(ele);
//   for (let i = ind; i < n; i++) {
//     newArr.push(arr[i]);
//   }
//   return newArr;
// }

// let arr = [1, 2, 3, 4, 5];
// let index = 5;
// let element = 90;
// let n = arr.length;
// console.log(insertAtIndex(arr, n, index, element));

function insertAtIndex(arr, ind, ele) {
  let newArr = arr.splice(ind, 0, ele);
  return newArr;
}

let arr = [1, 2, 3, 4, 5];
let index = 5;
let element = 90;

console.log(insertAtIndex(arr, index, element)); // Output: [1, 2, 3, 4, 5, 90]
