function Josephus(n, k) {
  if (n === 1) {
    return 0;
  }
  return (Josephus(n - 1, k) + k) % n;
}
console.log(Josephus(5, 3)); // Output: 3

// 1 to n

function Josephus(n, k) {
  if (n === 1) {
    return 0;
  }
  return (Josephus(n - 1, k) + k) % n;
}

// Function to calculate Josephus for numbers from 1 to n
function JosephusFrom1ToN(n, k) {
  // Calculate Josephus for numbers from 0 to n-1
  let result = Josephus(n - 1, k);
  // Adjust the result to handle numbers from 1 to n
  return result + 1;
}

// Test the function for numbers from 1 to 5 and k = 3
for (let i = 1; i <= 5; i++) {
  console.log(`Josephus(${i}, 3) = ${JosephusFrom1ToN(i, 3)}`);
}
