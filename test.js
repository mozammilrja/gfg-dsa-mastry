function divisible(n) {
  for (let i = 0; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(i);
    }
  }
}

divisible(50);
