class Node {
  constructor(data) {
    this.key = data;
    this.left = null;
    this.right = null;
  }
}

function isBST(root, min, max) {
  if (root === null) return true;

  return (
    root.key > min &&
    root.key < max &&
    isBST(root.left, min, root.key) &&
    isBST(root.right, root.key, max)
  );
}
let root = new Node(10);
root.left = new Node(8);
root.right = new Node(20);
root.left.left = new Node(4);
root.left.right = new Node(9);
root.right.left = new Node(11);
root.right.right = new Node(30);
root.right.right.left = new Node(25);
root.right.right.left = new Node(5);

let s = new Set();
let sum = 33;

let MIN = -1e9,
  MAX = 1e9;
if (isBST(root, MIN, MAX)) console.log("Is BST");
else console.log("Not a BST");
