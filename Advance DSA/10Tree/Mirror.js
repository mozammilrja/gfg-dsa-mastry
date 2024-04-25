class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function mirror(node) {
  if (node === null) {
    return;
  }

  // Swap left and right children
  [node.left, node.right] = [node.right, node.left];

  // Recursively mirror left and right subtrees
  mirror(node.left);
  mirror(node.right);
}

// Inorder traversal to print the tree
function inorderTraversal(node) {
  if (node === null) {
    return;
  }
  inorderTraversal(node.left);
  process.stdout.write(node.data + " ");
  inorderTraversal(node.right);
}

// Example usage:
// Constructing the tree
let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

console.log("Original tree:");
inorderTraversal(root);
console.log("\nMirror tree:");
mirror(root);
inorderTraversal(root);
