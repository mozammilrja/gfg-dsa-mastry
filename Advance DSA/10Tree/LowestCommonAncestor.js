class Node {
  constructor(val) {
    this.key = val;
    this.left = null;
    this.right = null;
  }
}
// find path from root to node
function findPath(root, p, n) {
  if (root === null) return false;
  p.push(root);
  if (root.key == n) return true;

  if (findPath(root.left, p, n) || findPath(root.right, p, n)) return true;

  p.pop();
  return false;
}
// Lowest common ancestor of two nodes in a binary tree is the node
function lca(root, n1, n2) {
  let path1 = [];
  let path2 = [];
  if (!findPath(root, path1, n1) || !findPath(root, path2, n2)) return null;
  for (let i = 0; i < path1.length - 1 && i < path2.length - 1; i++)
    if (path1[i + 1] !== path2[i + 1]) return path1[i];
  return null;
}

// Example usage:
let root = new Node(10);
root.left = new Node(20);
root.right = new Node(30);
root.left.left = new Node(40);
root.left.right = new Node(50);
root.left.left.left = new Node(60);

let n1 = 20,
  n2 = 30;
let ans = lca(root, n1, n2);
console.log("Lowest common ancestor of tree:", ans.key);
