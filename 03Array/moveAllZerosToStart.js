// efficient method

function moveAllZeros(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      [arr[i], arr[count]] = [arr[count], arr[i]];
      count++;
    }
  }
  return arr;
}

console.log(moveAllZeros([10, 0, 0, 7, 8, 0,1,1,3,1,5]));
console.log(moveAllZeros([10, -20, 0, -0, -0, -90, -0]));
