class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function preOrderTraversal(root) {
  if (root !== null) {
    console.log(root.data);
    preOrderTraversal(root.left);
    preOrderTraversal(root.right);
  }
}

let root = new Node(10);
root.left = new Node(20);
root.right = new Node(30);
root.right.left = new Node(40);
root.right.right = new Node(60);

console.log("Values in the binary tree (pre-order traversal):");
preOrderTraversal(root); // Output: 10, 20, 30, 40, 60
