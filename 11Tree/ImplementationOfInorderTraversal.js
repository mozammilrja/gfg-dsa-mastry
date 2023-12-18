class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function inOrderTraversal(node) {
  if (node !== null) {
    inOrderTraversal(node.left);
    console.log(node.data);
    inOrderTraversal(node.right);
  }
}
// time complexity = O(n)
// Aux space = O(n)

let root = new Node(10);
root.left = new Node(20);
root.right = new Node(30);
root.right.left = new Node(40);
root.right.right = new Node(60);

console.log("Values in the binary tree (in-order traversal):");
inOrderTraversal(root);
