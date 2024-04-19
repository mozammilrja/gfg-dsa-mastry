function union(a, b) {
  let s = new Set(a);
  for (let i = 0; i < b.length; i++) {
    s.add(b[i]);
  }
  return s.size;
}

let a = [15, 20, 5, 15],
  b = [15, 15, 15, 20, 10];
console.log(union(a, b));
