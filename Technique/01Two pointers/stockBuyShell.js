// Brutforce approch

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

//Using two pointers

function maxProfit(prices) {
  let left = 0;
  let right = 1;
  let maxProfit = 0;
  
  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      let profit = prices[right] - prices[left];
      maxProfit = Math.max(maxProfit, profit);
    } else {
      left = right;
    }
    right++;
  }
  return maxProfit;
}
let prices = [10, 1, 5, 6, 7, 1];
console.log(maxProfit(prices));