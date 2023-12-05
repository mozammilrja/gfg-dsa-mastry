function findIntersection(arr1, arr2) {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      i++;
    } else if (arr1[i] > arr2[j]) {
      j++;
    } else {
      result.push(arr1[i]);
      i++;
      j++;
    }
  }

  return result;
}

// Example usage:
const arr1 = [2, 4, 6, 8, 10];
const arr2 = [4, 8, 12];

const intersectionArray = findIntersection(arr1, arr2);
console.log("Intersection:", intersectionArray);
