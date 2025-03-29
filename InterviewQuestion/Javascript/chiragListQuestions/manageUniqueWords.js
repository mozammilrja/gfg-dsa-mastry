function manageUniqueWords(words) {
  const wordSet = new Set(words);
  return {
    addWord: function (word) {
      if (!wordSet.has(word)) {
        wordSet.add(word);
        return word;
      }
    },
    removeWord: function (word) {
      if (wordSet.has(word)) {
        wordSet.delete(word);
        return word;
      }
    },
    hasWord: function (word) {
      return wordSet.has(word);
    },
    getAllWords: function () {
      return Array.from(wordSet).sort();
    },
  };
}

const words = [
  "apple",
  "banana",
  "cherry",
  "dog",
  "elephant",
  "flower",
  "guitar",
  "happy",
  "island",
  "jungle",
];

const collection = manageUniqueWords(words);

console.log(collection.addWord("Mozammil"));
console.log(collection.removeWord("dog"));
console.log(collection.hasWord("island"));
console.log(collection.getAllWords());
