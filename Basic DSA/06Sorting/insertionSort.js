function insertionSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    let current = arr[i];
    let j = i - 1;
    //Sort in the ascending order
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
      arr[j + 1] = current;
    }
  }
  return arr;
}

let array = [12, 11, 13, 5, 6];
console.log("Before:", array);
insertionSort(array);
console.log("After:", array);
