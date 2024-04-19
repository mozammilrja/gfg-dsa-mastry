function findFrequencies(arr) {
  let freq = {};
  for (let i = 0; i < arr.length; i++) {
    const freqCount = arr[i];
    if (!freq[freqCount]) {
      freq[freqCount] = 1;
    } else {
      freq[freqCount]++;
    }
  }
  return freq;
}

let sortedArray = [1, 1, 2, 2, 2, 3, 4, 4, 4, 4, 5];
let result = findFrequencies(sortedArray);
console.log(result);
