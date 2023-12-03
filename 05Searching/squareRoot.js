// naive sol
function squareRoot(n) {
  let i = 1;
  while (i * i <= n) {
    i++;
  }
  return i - 1;
}

// console.log(squareRoot(4));

// efficient method
function squareRoot(n) {
  let low = 0;
  let high = n;
  let result = 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (mid * mid === n) {
      return mid;
    } else if (mid * mid < n) {
      low = mid + 1;
      result = mid;
    } else {
      high = mid - 1;
    }
  }

  return result;
}

console.log(squareRoot(5));
