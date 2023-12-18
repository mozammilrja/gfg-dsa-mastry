class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function printTreeInOrder(node) {
  if (node !== null) {
    printTreeInOrder(node.left);
    console.log(node.data);
    printTreeInOrder(node.right);
  }
}

let root = new Node(30);
root.left = new Node(40);
root.right = new Node(50);
root.left.left = new Node(70);
root.right.left = new Node(60);
root.right.right = new Node(80);

// Print the tree in-order
printTreeInOrder(root);
