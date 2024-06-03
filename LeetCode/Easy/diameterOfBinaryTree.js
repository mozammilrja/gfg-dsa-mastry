// Brut force

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function height(root) {
  if (root === null) {
    return 0;
  }
  return 1 + Math.max(height(root.left), height(root.right));
}

function diameterOfBinaryTree(root) {
  if (root === null) {
    return 0;
  }
  let lh = height(root.left);
  let rh = height(root.right);
  let diamiter = lh + rh;

  let ld = diameterOfBinaryTree(root.left);
  let rd = diameterOfBinaryTree(root.right);

  return Math.max(diamiter, ld, rd);
}
// Example usage
let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

console.log(diameterOfBinaryTree(root)); // Output: 3
