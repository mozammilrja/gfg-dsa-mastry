function maxProfit(prices) {
    let maxProfit = 0;
    

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      maxProfit += prices[i] - prices[i - 1];
    }
  }

  return maxProfit;
}

let prices2 = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices2)); // Output: 5



function maxProfitSingleTransaction(prices) {
  if (prices.length < 2) {
    // Cannot make a profit with less than two prices.
    return 0;
  }

  let maxProfit = 0;
  let buy = prices[0];

  for (let i = 1; i < prices.length; i++) {
    if (buy < prices[i]) {
      // If the current price is higher than the buy price,
      // update maxProfit with the potential profit.
      maxProfit = Math.max(maxProfit, prices[i] - buy);
      continue;
    }
    // If the current price is lower than the buy price,
    // update the buy price to the current price.
    buy = prices[i];
  }

  return maxProfit;
}

// Example usage:
let prices = [7, 1, 5, 3, 6, 4];
let result = maxProfitSingleTransaction(prices);
console.log(result); // Output: 5
