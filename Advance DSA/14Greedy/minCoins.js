function minCoins(coin, n, amount) {
  coin.sort((a, b) => a - b);

  let res = 0;

  for (let i = n - 1; i >= 0; i--) {
    if (coin[i] <= amount) {
      const c = Math.floor(amount / coin[i]);

      res += c;

      amount -= c * coin[i];
    }

    if (amount === 0) break;
  }

  return res;
}

const coin = [1, 5, 10, 25];
const n = 4;
const amount = 63;

console.log(minCoins(coin, n, amount));
