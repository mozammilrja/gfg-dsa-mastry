function myFunction(a, b) {
  const time =
    a.getDate() === b.getDate() &&
    a.getMonth() === b.getMonth() &&
    a.getFullYear() === b.getFullYear();
  return time;
}

console.log(myFunction(new Date("2025-07-10"), new Date("2025-07-01")));
console.log(myFunction(new Date("2025-06-30"), new Date("2025-06-30")));
