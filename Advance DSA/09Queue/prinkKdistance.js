class Node {
  constructor(data) {
    this.key = data;
    this.left = null;
    this.right = null;
  }
}

function printKDist(root, k) {
  let ans = "";
  if (root === null) return ans;
  if (k === 0) {
    ans += root.key + " ";
  } else {
    ans += printKDist(root.left, k - 1);
    ans += printKDist(root.right, k - 1);
  }
  return ans;
}

let root = new Node(10);
root.left = new Node(20);
root.right = new Node(30);
root.left.left = new Node(40);
root.left.right = new Node(50);
root.right.right = new Node(70);
root.right.right.right = new Node(80);
let k = 2;
console.log(printKDist(root, k));
// Time complexity o(n)
