function RoofTop(arr) {
    let count = 0;
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < arr[i + 1]) {
        count++;
        max = Math.max(max, count);
      } else {
        count = 0;
      }
    }
  
    return max;
  }
  let arr = [1, 2, 3, 4];
  
  console.log(RoofTop(arr));