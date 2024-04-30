class Node {
  constructor(data) {
    this.key = data;
    this.left = null;
    this.right = null;
  }
}

function isPairSum(root, sum) {
  if (root === null) return false;

  // Check if there exists a pair in the set s whose sum equals sum - root.key
  if (s.has(sum - root.key)) return true;

  // Add the current node's key to the set
  s.add(root.key);

  // Recursively check for pair sum in the left and right subtrees
  return isPairSum(root.left, sum) || isPairSum(root.right, sum);
}

let root = new Node(10);
root.left = new Node(8);
root.right = new Node(20);
root.left.left = new Node(4);
root.left.right = new Node(9);
root.right.left = new Node(11);
root.right.right = new Node(30);
root.right.right.left = new Node(25);

let s = new Set();
let sum = 33;

console.log(isPairSum(root, sum)); // Output: true
