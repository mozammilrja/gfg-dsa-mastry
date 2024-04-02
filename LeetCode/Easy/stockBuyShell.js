// Brutforce approch

// function maxProfit(prices) {
//   let maxProfit = 0;
//   for (let i = 0; i < prices.length - 1; i++) {
//     for (let j = i + 1; j < prices.length; j++) {
//       const profit = prices[j] - prices[i];
//       if (profit > maxProfit) {
//         maxProfit = profit;
//       }
//     }
//   }
//   return maxProfit;
// }

// // Test cases
// console.log(maxProfit([7, 1, 5, 3, 6, 4])); // Output: 5
// console.log(maxProfit([7, 6, 4, 3, 1])); // Output: 0

function maxProfit(prices) {
  let maxProfit = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      const profit = prices[j] - prices[i];
      if (profit > maxProfit) {
        maxProfit = profit;
      }
    }
  }
  return maxProfit;
}

// Test cases
console.log(maxProfit([7, 1, 5, 3, 6, 4])); // Output: 5
console.log(maxProfit([7, 6, 4, 3, 1])); // Output: 0
