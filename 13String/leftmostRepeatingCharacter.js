function leftMost(str) {
  let visited = new Map();
  let res = -1;
  for (let i = str.length - 1; i >= 0; i--) {
    if (!visited.has(str[i])) visited.set(str[i], false);
    if (visited.get(str[i])) res = i;
    else visited.set(str[i], true);
  }

  return res;
}

let str = "geeksforgeeks";
console.log("Index of leftmost repeating character:");
console.log(leftMost(str));
