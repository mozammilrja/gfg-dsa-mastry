function maxPieces(n, a, b, c) {
  // Base case: If the length becomes negative, return -1
  if (n < 0) {
    return -1;
  }

  // Base case: If the length becomes 0, return 0
  if (n === 0) {
    return 0;
  }

  // Recursively calculate the maximum pieces by considering all three options
  let res = Math.max(
    maxPieces(n - a, a, b, c),
    maxPieces(n - b, a, b, c),
    maxPieces(n - c, a, b, c)
  );

  // If all three options result in -1, return -1
  if (res === -1) {
    return -1;
  }

  // Increment the result by 1 (current piece)
  return res + 1;
}

// Test cases
console.log(maxPieces(5, 2, 5, 1)); // Output: 5
console.log(maxPieces(23, 12, 9, 11)); // Output: 2
console.log(maxPieces(15, 5, 10, 15)); // Output: 3
