class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

function SearchBST(root, key) {
  while (root !== null) {
    if (root.key === key) {
      return true;
    } else if (root.key > key) {
      root = root.left;
    } else {
      root = root.right;
    }
  }
  return false;
}

let root = new Node(10);
root.left = new Node(5);
root.left.left = new Node(2);
root.right = new Node(30);
root.right.left = new Node(25);
root.right.right = new Node(40);
root.right.left.left = new Node(16);

console.log(SearchBST(root, 30));
