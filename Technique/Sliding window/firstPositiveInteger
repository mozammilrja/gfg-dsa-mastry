function firstPositiveIntegerBruteForce(arr, k) {
  if (arr.length < k) return [];

  let result = [];
  for (let i = 0; i <= arr.length - k; i++) {
    let positive = false;
    for (let j = 0; j < k; j++) {
      console.log(j,i)
      if (arr[i + j] > 0) {
        result.push(arr[i + j]);
        positive = true;
        break;
      }
    }
    if (!positive) {
      result.push(0);
    }
  }
  return result;
}

const arr = [-8, 2, 3, -6, 10];
const k = 2;
console.log(firstPositiveIntegerBruteForce(arr, k));
