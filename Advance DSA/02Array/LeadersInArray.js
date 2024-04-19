// function leaderInArray(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let flag = false;
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] > arr[i]) {
//         flag = true;
//         break;
//       }
//     }
//     if (flag === false) {
//       console.log(arr[i]);
//     }
//   }
// }
// // Time complexity O(n^2)

// let array = [16, 17, 4, 3, 5, 2];
// console.log("Leaders in the array:");
// leaderInArray(array);

function leaderInArray(arr) {
  let res = [];
  let currLead = arr[arr.length - 1];
  res.push(currLead);
  for (let i = arr.length - 2; i >= 0; i--) {
    if (arr[i] >= currLead) {
      currLead = arr[i];
      res.push(currLead);
    }
  }
  for (let i = res.length - 1; i >= 0; i--) {
    console.log(res[i]);
  }
}

// Example usage
let array = [16, 17, 4, 3, 5, 2];
console.log("Leaders in the array:");
leaderInArray(array);
