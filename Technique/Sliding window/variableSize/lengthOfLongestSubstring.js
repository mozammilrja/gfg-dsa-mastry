// //Brutforce
// function lengthOfLongestSubstring(s) {
//     let largest = 0

//     for (let i = 0; i < s.length; i++) {
//         let char = new Set()
//         for (let j = i; j < s.length; j++) {
//             if (char.has(s[j])) {
//                 break
//             }
//             char.add(s[j])
//             largest = Math.max(largest,char.size)
//         }
//     }
//     return largest
// }

// console.log(lengthOfLongestSubstring("xxxx"));

function lengthOfLongestSubstring(s) {
  let set = new Set();
  let largest = 0;
  let left = 0;

  for (let right = 0; right < s.length; right++) {
    while (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    }
    set.add(s[right]);
    largest = Math.max(largest, right - left + 1);
  }
  return largest;
}

console.log(lengthOfLongestSubstring("xxxx"));
