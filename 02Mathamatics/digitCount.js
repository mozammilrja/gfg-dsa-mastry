function digitCount(x) {
  let totalCount = 0;

  while (x > 0) {
    x = Math.floor(x / 10);
    totalCount++;
  }
  return totalCount;
}

console.log(digitCount(9235));

// time coplexity theta(d)
