function TotalCount(str) {
  let count = {};

  // Iterate through each character in the string
  for (let i = 0; i <= str.length; i++) {
    // Get the current character
    let result = str[i];
    // Check if the character is already a key in the count object
    if (count[result]) {
      // If yes, increment the count
      count[result]++;
    } else {
      // If no, initialize the count to 1
      count[result] = 1;
    }
  }

  // Return the object containing character counts
  return count;
}

// Call the TotalCount function with the string "mozammil"
let tt = TotalCount("mozammil");

// Log the result to the console

console.log(tt);
