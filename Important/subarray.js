function subarray(arr) {
  let map = new Map();

  for (let i = 0; i < arr.length; i++) {
    if (!map.has(arr[i])) {
      map.set(arr[i], []);
    }
    map.get(arr[i]).push(arr[i]);
  }
  return Array.from(map.values());
}

let arr = [1, 2, 5, 6, 7, 8, 1, 2, 3, 3, 3, 4, 5];
console.log(subarray(arr));
