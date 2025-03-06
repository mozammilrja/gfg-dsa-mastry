// function removeElement(arr, val) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== val) {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }
// let newArr = [1, 2, 3, 4, 5, 2, 3];

// console.log(removeElement(newArr, 3)); // [1, 2, 4, 5, 2]




function removeElement(arr,val) {
    const result = arr.filter((ele)=> ele !== val)
    return result
}

let newArr = [1, 2, 3, 4, 5, 2, 3];

console.log(removeElement(newArr, 3)); // [1, 2, 4, 5, 2]