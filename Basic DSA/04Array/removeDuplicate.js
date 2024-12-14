function removeDuplicate(arr) {
  let res = 1;
  for (let i = 1; i < arr.length; i++) {
    if (arr[res - 1] !== arr[i]) {
      console.log(arr[res - 1] !== arr[i]);
      arr[res] = arr[i];
      res++;
    }
  }
  return arr.slice(0, res);
}

const arr = [1, 1, 4, 5, 6, 6, 7, 7, 8, 8];
const resultLength = removeDuplicate(arr);
console.log(resultLength); // Output: [1, 4, 5, 6, 7, 8]

const arr2 = ["a", "b", "c", "c", "raja", "raja"];
const resultLength2 = removeDuplicate(arr2);
const newArr = resultLength2;
console.log(newArr); // Output: ["a", "b", "c"]
