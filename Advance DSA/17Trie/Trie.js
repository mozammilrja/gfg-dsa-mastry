class TrieNode {
  constructor() {
    this.isEndofWord = false;
    this.child = new Array(26).fill(null);
  }
}

function insert(node, key) {
  for (let i = 0; i < key.length; i++) {
    let idx = key[i].charCodeAt() - "a".charCodeAt();
    if (node.child[idx] === null) {
      node.child[idx] = new TrieNode();
    }
    node = node.child[idx];
  }
  node.isEndofWord = true; // Corrected the typo here
}

function search(node, key) {
  for (let i = 0; i < key.length; i++) {
    let idx = key[i].charCodeAt() - "a".charCodeAt();
    if (node.child[idx] === null) {
      return false;
    }
    node = node.child[idx];
  }
  return node.isEndofWord;
}

function deleteWord(node, key, depth = 0) {
  // Base case: if tree is empty
  if (node === null) {
    return false;
  }

  // If we have reached the end of the key
  if (depth === key.length) {
    // This node is no longer the end of the word
    if (node.isEndofWord) {
      node.isEndofWord = false;
    }

    // If this node has no children, it can be deleted
    return node.child.every((child) => child === null);
  }

  // Recur for the child corresponding to the current character
  let idx = key[depth].charCodeAt() - "a".charCodeAt();
  if (deleteWord(node.child[idx], key, depth + 1)) {
    // Last node marked, delete it
    node.child[idx] = null;

    // If this node is not end of another word and does not have any children
    return !node.isEndofWord && node.child.every((child) => child === null);
  }

  return false;
}

let root = new TrieNode();
insert(root, "bat");
insert(root, "but");
insert(root, "bad");

console.log(search(root, "bat")); // true
console.log(search(root, "but")); // true
console.log(search(root, "bad")); // true

deleteWord(root, "bat");
console.log(search(root, "bat")); // false
console.log(search(root, "but")); // true
console.log(search(root, "bad")); // true

deleteWord(root, "bad");
console.log(search(root, "bat")); // false
console.log(search(root, "but")); // true
console.log(search(root, "bad")); // false
