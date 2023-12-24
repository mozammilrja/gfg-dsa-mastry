class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

function insert(root, x) {
  let temp = new Node(x);
  let parent = null,
    curr = root;
  while (curr !== null) {
    parent = curr;
    if (curr.key > x) curr = curr.left;
    else if (curr.key < x) curr = curr.right;
    else return root;
  }
  if (parent === null) return temp;
  if (parent.key > x) parent.left = temp;
  else parent.right = temp;
  return root;
}

function inorder(root) {
  let ans = "";
  if (root !== null) {
    ans += inorder(root.left);
    ans += root.key + " ";
    ans += inorder(root.right);
  }
  return ans;
}

let root = new Node(15);
root.left = new Node(5);
root.left.left = new Node(3);
root.right = new Node(20);
root.right.left = new Node(18);
root.right.right = new Node(80);
root.right.left.left = new Node(16);

root = insert(root, 190);
console.log(inorder(root));
