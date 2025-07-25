function factorials(n) {
  if (n === 0) {
    return 1;
  }

  return n * factorials(n - 1);
}

console.log(factorials(5));
