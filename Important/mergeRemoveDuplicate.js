function mergeRemoveDuplicate(arr, arr2) {
  let set = new Set();
  let result = [];
  let merge = [...arr, ...arr2];
  //    return new Set(merge)// using set directy use remove the element
  for (let i = 0; i < merge.length; i++) {
    if (!set.has(merge[i])) {
      set.add(merge[i]);
      result.push(merge[i]);
    }
  }
  return result;
}

let arr1 = [1, 2, 3, 4, 5, 8];
let arr2 = [5, 7, 8];

console.log(mergeRemoveDuplicate(arr1, arr2));
