function minDifference(arr) {
    arr.sort((a, b) => a - b);
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
      let diff = arr[i] - arr[i - 1];
      if (diff < min) {
        min = diff;
      }
    }
    return min;
  }
  
  const arr = [2, 4, 5, 9, 7];
  console.log(minDifference(arr)); // Output: 1