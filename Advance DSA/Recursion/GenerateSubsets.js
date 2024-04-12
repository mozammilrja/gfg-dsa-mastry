// Generate Subsets of string  or seb nbn  sequinces
// using betwise method

function SubsetString(s, curr = "", i = 0) {
  // Base case: If we have processed all characters of the string,
  // print the current subset and return.
  if (i == s.length) {
    console.log(curr);
    return;
  }

  // Recursive calls:
  // 1. Exclude the current character and move to the next character.
  SubsetString(s, curr, i + 1);
  // 2. Include the current character and move to the next character.
  SubsetString(s, curr + s[i], i + 1);
}

// Example usage:
SubsetString("abc");
