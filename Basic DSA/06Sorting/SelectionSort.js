function selectionSort(arr) {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = i+1; j < n; j++) {
      if (arr[j] < arr[i]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }
  return arr;
}
console.log(selectionSort([1, 8, 2, 4, 5]));
