class Node {
  constructor(val) {
    this.key = val;
    this.left = null;
    this.right = null;
  }
}

// Perform PreOrder traversal of the binary tree
function PreOrder(root) {
  if (root == null) {
    return null;
  }
  let stack = [];
  stack.push(root);
  while (stack.length > 0) {
    let curr = stack.pop();
    console.log(curr.key);
    if (curr.right != null) {
      stack.push(curr.right);
    }
    if (curr.left != null) {
      stack.push(curr.left);
    }
  }
}

// Example usage:
let root = new Node(10);
root.left = new Node(20);
root.right = new Node(30);
root.left.left = new Node(40);
root.left.right = new Node(50);
root.left.left.left = new Node(60);

console.log("PreOrder traversal of tree:", PreOrder(root));
