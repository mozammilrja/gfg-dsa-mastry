
// Naive Method

function frequencyApearingRenge(left, right) {
    let freq = new Array(100).fill(0);
    let n = left.length;
    let res = -1; // Initialize result to -1
    for (let i = 0; i < n; i++) {
      for (let j = left[i]; j < right[i]; j++) {
        freq[j]++;
        if (freq[j] > freq[res]) {
          // Compare frequencies correctly
          res = j;
        }
      }
    }
    return res;
  }
  
  let left = [1, 2, 5, 15];
  let right = [5, 8, 7, 18];
  console.log(frequencyApearingRenge(left, right)); // Output: 5


// JavaScript function to find maximum occurred element in
// given N ranges.

function maximumOccurredElement(L, R, n) {
  // Initialising all element of array to 0.
  let arr = new Array(1000000).fill(0);

  // Adding +1 at Li index and subtracting 1
  // at Ri index.
  let maxi = -1;
  for (let i = 0; i < n; i++) {
    arr[L[i]] += 1;
    arr[R[i] + 1] -= 1;
    if (R[i] > maxi) {
      maxi = R[i];
    }
  }

  // Finding prefix sum and index having maximum
  // prefix sum.
  let msum = arr[0],
    ind;
  for (let i = 1; i < maxi + 1; i++) {
    arr[i] += arr[i - 1];
    if (msum < arr[i]) {
      msum = arr[i];
      ind = i;
    }
  }

  return ind;
}

// Driven code
let L = [1, 4, 9, 13, 21];
let R = [15, 8, 12, 20, 30];
let n = L.length;

console.log(maximumOccurredElement(L, R, n));