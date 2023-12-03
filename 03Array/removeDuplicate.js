function removeDuplicate(arr) {
  let res = 1;
  for (let i = 1; i < arr.length; i++) {
    if (arr[res - 1] !== arr[i]) {
      arr[res] = arr[i];
      res++;
    }
  }
  return res;
}

console.log(removeDuplicate([10, 20, 20, 30, 30, 30]));

const arr = ["a", "b", "c"];
const newArr = arr.slice(1, 2);
console.log(newArr);
