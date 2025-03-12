/**
 * Question: Given a deeply nested array, create a function on the array, namely flatten, that when invoked returns
 * a flat version of the original array. Function should be defined in a way that it can be invoked on existing
 * and future arrays. 
 * 
 * 
    var input = [
        1, 2, 3,
        [4],
        [5, 6, [7], [8, [9, [10]]]],
        11, 12, 13,
        [14, [[[[[15, [16]]]]]]],
        17, 18,
        [19, [20, [21, [22, [23, [24, [[[[[25]]]]]]]]]]]
    ];

    // flatArray: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]
 *
 */

function* flatten(arr) {
  for (let el of arr) {
    if (Array.isArray(el)) {
      yield* flatten(el);
    } else {
      yield el;
    }
  }
}

const arr = [
  1,
  2,
  3,
  [4],
  [5, 6, [7], [8, [9, [10]]]],
  11,
  12,
  13,
  [14, [[[[[15, [16]]]]]]],
  17,
  18,
  [19, [20, [21, [22, [23, [24, [[[[[25]]]]]]]]]]],
];




const flattened = [...flatten(arr)];
console.log(flattened); // Output: [1, 2, 3, 4, 5]
