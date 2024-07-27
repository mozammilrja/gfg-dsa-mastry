// const str = "Ultimate Javascript / Frontend Guide"
// const words = [ "Front","End", "Javascript"]


// Highlight(str,words)
// //"Ultimate <strong>JavaScriopt</strong> / <strong>Frontend</strong>"


function highlight(str, words) {
  // Create a regular expression to find the words, case-insensitive and word boundary aware
  const regex = new RegExp(`\\b(${words.join('|')})\\b`, 'gi');
  
  // Replace matched words with highlighted versions
  return str.replace(regex, '<strong>$1</strong>');
}

const str = "Ultimate Javascript / Frontend Guide";
const words = ["Front", "End", "Javascript"];

console.log(highlight(str, words));
// Output: "Ultimate <strong>Javascript</strong> / <strong>Frontend</strong>"
