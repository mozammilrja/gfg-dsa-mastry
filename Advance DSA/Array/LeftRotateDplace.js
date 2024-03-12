function leftRotateDplace(arr, d) {
  for (let i = 0; i < d; i++) {
    let temp = arr[0];
    for (let j = 1; j < arr.length; j++) {
      arr[j - 1] = arr[j];
    }
    arr[arr.length - 1] = temp;
  }
  return arr;
}
let arr = [1, 2, 3, 4, 5];
console.log("Before Rotation: " + arr);
leftRotateDplace(arr, 2);
console.log("After Rotation: " + arr);

function leftRotateOne(arr) {
  let temp = arr[0];

  for (let i = 1; i < arr.length; i++) {
    arr[i - 1] = arr[i];
  }

  arr[arr.length - 1] = temp;

  return arr;
}

let inputArray = [1, 2, 3, 4, 5];
let output = leftRotateOne(inputArray);

console.log(output);
