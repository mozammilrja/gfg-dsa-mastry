// function firstOccurence(haystack, needle) {
//   let str = haystack.toLowerCase();
//   return str.indexOf(needle);
// }

// console.log(firstOccurence("sadbutsad", "sad"));

function firstOccurence(haystack, needle) {
  for (let i = 0; i < haystack.length - needle.length; i++) {
    let str = haystack.substring(i, i + needle.length);
    if (str === needle) {
      console.log("haystack[i]", haystack[i]);
      return i;
    }
  }
  return -1;
}

console.log(firstOccurence("sadbutsad", "sad"));
