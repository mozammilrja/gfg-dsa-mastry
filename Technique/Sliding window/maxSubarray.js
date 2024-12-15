// function maxSubarray(arr, k) {
//   let result = [];
//   let n = arr.length;
//   for (let i = 0; i <= n - k; i++) {
//     let max = arr[i];

//     for (let j = i; j < i + k; j++) {
//       if (arr[j] > max) {
//         max = arr[j];
//       }
//     }
//     result.push(max);
//   }
//   return result;
// }
// let arr = [1, 3, 1, 2, 0, 5];
// console.log(maxSubarray(arr, 3));

function maxSubarray(arr, k) {
  if (!arr || k <= 0 || k > arr.length) {
    return [];
  }

  let result = [];
  let deque = [];

  for (let i = 0; i < arr.length; i++) {
    // Remove elements not within the sliding window
    if (deque.length > 0 && deque[0] < i - k + 1) {
      deque.shift();
    }

    // Remove elements from the back of the deque while current element is greater
    while (deque.length > 0 && arr[deque[deque.length - 1]] <= arr[i]) {
      deque.pop();
    }

    // Add current element index to the deque
    deque.push(i);

    // The front of the deque is the maximum element for the current window
    if (i >= k - 1) {
      result.push(arr[deque[0]]);
    }
  }

  return result;
}

let arr = [1, 3, 1, 2, 0, 5];
console.log(maxSubarray(arr, 3)); // Output: [3, 3, 2, 5]
