class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function PostOrder(root) {
  if (root !== null) {
    PostOrder(root.left);
    PostOrder(root.right);
    console.log(root.data);
  }
}
// time complexity = O(n)
// Aux space = O(n)

let root = new Node(10);
root.left = new Node(20);
root.right = new Node(30);
root.right.left = new Node(40);
root.right.right = new Node(60);

PostOrder(root);
