class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

function getFloor(root, x) {
  let res = null;
  while (root !== null) {
    if (root.key === x) {
      return root;
    } else if (root.key > x) {
      root = root.left;
    } else {
      res = root;
      root = root.right;
    }
  }
  return res;
}

function inorder(root) {
  let result = [];
  if (root !== null) {
    result = result.concat(inorder(root.left));
    result.push(root.key);
    result = result.concat(inorder(root.right));
  }
  return result;
}

let root = new Node(15);
root.left = new Node(5);
root.left.left = new Node(3);
root.right = new Node(20);
root.right.left = new Node(18);
root.right.right = new Node(80);
root.right.left.left = new Node(16);

root = getFloor(root, 20);
console.log(inorder(root));
