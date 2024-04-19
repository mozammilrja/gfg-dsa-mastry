// Naive solutions

function MaxCircular(arr) {
  let res = arr[0];
  for (let i = 0; i < arr.length; i++) {
    let curr = arr[i];
    res = Math.max(res, curr);
    for (let j = 0; j < arr.length; j++) {
      let index = i + (j % arr.length);
      curr += arr[index];
      res = Math.max(res, curr);
    }
  }
  return res;
}
let arr = [10, -5, 5];

console.log(MaxCircular(arr));
