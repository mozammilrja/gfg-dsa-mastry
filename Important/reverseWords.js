
function reverseWords(sentence) {
    // Split the sentence into an array of words
    const words = sentence.split(" ");
    
    // Iterate through each word
    const reversedWords = words.map(word => {
        // Split the word into an array of characters
        const characters = word.split("");
        
        // Reverse the array of characters
        const reversedCharacters = characters.reverse();
        
        // Join the characters back together to form the reversed word
        const reversedWord = reversedCharacters.join("");
        
        return reversedWord;
    });
    
    // Join the reversed words back together to form the reversed sentence
    const reversedSentence = reversedWords.join(" ");
    
    return reversedSentence;
}

// Example usage
const sentence = "Hello world";
const reversedSentence = reverseWords(sentence);
console.log(reversedSentence); // Output: olleH dlrow
