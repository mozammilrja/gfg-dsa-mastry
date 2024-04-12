function permute(str, l, r) {
  if (l === r) {
    console.log(str);
  } else {
    for (let i = l; i <= r; i++) {
      [str[l], str[i]] = [str[i], str[l]];
      permute(str, l + 1, r);
      [str[l], str[i]] = [str[i], str[l]];
    }
  }
}

let str = "ABC";
permute(str.split(""), 0, str.length - 1);
