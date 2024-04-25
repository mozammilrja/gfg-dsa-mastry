// Efficient solution

// Idea:
// We do normal recursive traversal we have the following cases for each node
//1 - if it is same as n1 or n2.
//2 - one of its subtrees contains n1 and other contains n2.
//3 - if one of its subtrees contains both n1 and n2.
//4 - if nodes of its subtrees contain any of n1 and n2.

class Node {
  constructor(val) {
    this.key = val;
    this.left = null;
    this.right = null;
  }
}

function lca(root, n1, n2) {
  if (root === null) return null;
  if (root.key == n1 || root.key == n2) return root;

  let leftLCA  = lca(root.left, n1, n2);
  let rightLCA  = lca(root.right, n1, n2);

  if (leftLCA  !== null && rightLCA  !== null) return root;
  if (leftLCA  !== null) return leftLCA ;
  else return rightLCA ;
}

let root = new Node(10);
root.left = new Node(20);
root.right = new Node(30);
root.right.left = new Node(40);
root.right.right = new Node(50);
let n1 = 20,
  n2 = 50;

let ans = lca(root, n1, n2);
console.log("LCA: " + ans.key);