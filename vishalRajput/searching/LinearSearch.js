// function linearSearch(arr, x) {
//   let result = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === x) {
//       return i;
//     }
//   }
//   return -1;
// }

// console.log(linearSearch([1, 2, 3, 4, 5, 6, 7], 5));

function linearSearch(mainStr, subStr) {
  let m = mainStr.length,
    n = subStr.length;
  let result = "";
  for (let i = 0; i <= m - n; i++) {
    let flag = true;
    for (let j = 0; j < n; j++) {
      if (mainStr[i + j] !== subStr[j]) {
        flag = false;
        break;
      }
    }
    if (flag) {
      return i;
    }
  }
  return -1;
}

console.log(linearSearch("sadbutsad", "sad"));
console.log(linearSearch("leetcode", "leeto"));
