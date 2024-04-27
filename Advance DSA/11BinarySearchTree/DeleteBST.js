class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

const inorder = (root) => {
  if (root) {
    inorder(root.left);
    console.log(root.key);
    inorder(root.right);
  }
};

const insert = (node, key) => {
  if (!node) {
    return new Node(key);
  }
  if (key < node.key) {
    node.left = insert(node.left, key);
  } else {
    node.right = insert(node.right, key);
  }
  return node;
};

const minValueNode = (node) => {
  let current = node;
  while (current.left) {
    current = current.left;
  }
  return current;
};

const deleteNode = (root, key) => {
  if (!root) {
    return null;
  }
  if (key < root.key) {
    root.left = deleteNode(root.left, key);
  } else if (key > root.key) {
    root.right = deleteNode(root.right, key);
  } else {
    if (!root.left) {
      return root.right;
    } else if (!root.right) {
      return root.left;
    }
    let temp = minValueNode(root.right);
    root.key = temp.key;
    root.right = deleteNode(root.right, temp.key);
  }
  return root;
};

let root = null;
root = insert(root, 50);
root = insert(root, 30);
root = insert(root, 20);
root = insert(root, 40);
root = insert(root, 70);
root = insert(root, 60);
root = insert(root, 80);

console.log("Inorder traversal of the given tree");
inorder(root);

console.log("Delete 20");
root = deleteNode(root, 20);
console.log("Inorder traversal of the modified tree");
inorder(root);

console.log("Delete 30");
root = deleteNode(root, 30);
console.log("Inorder traversal of the modified tree");
inorder(root);

console.log("Delete 50");
root = deleteNode(root, 50);
console.log("Inorder traversal of the modified tree");
inorder(root);
