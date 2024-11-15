
function countOccurrences(arr) {
  const count = {};
  arr.forEach((element) => {
    if (count[element]) {
      count[element] += 1;
    } else {
      count[element] = 1;
    }
  });
  return count;
}

const arr = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
const result = countOccurrences(arr);
console.log(result);

// function countOccurrences(arr) {
//   const counts = new Map();
//   for (let i = 0; i < arr.length; i++) {
//     if (counts.has(arr[i])) {
//       counts.set(arr[i], counts.get(arr[i]) + 1);
//     } else {
//       counts.set(arr[i], 1);
//     }
//   }
//   return counts;
// }

// const arr = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
// const result = countOccurrences(arr);
// console.log(result); // Map { 1 => 1, 2 => 2, 3 => 3, 4 => 4 }
