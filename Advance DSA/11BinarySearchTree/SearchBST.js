class Node {
  constructor(data) {
    this.key = data;
    this.left = null;
    this.right = null;
  }
}

function searchBST(root, x) {
  while (root !== null) {
    if (root.key === x) {
      return true;
    } else if (root.key < x) {
      root = root.right;
    } else {
      root = root.left;
    }
  }
  return false;
}
let root = new Node(15);
root.left = new Node(5);
root.left.left = new Node(3);
root.right = new Node(20);
root.right.left = new Node(18);
root.right.right = new Node(80);
root.right.left.left = new Node(16);
console.log(searchBST(root, 80));
// Time  complexity O(h)

// recursive sol
// class Node {
//   constructor(data) {
//     this.key = data;
//     this.left = null;
//     this.right = null;
//   }
// }

// function searchBST(root, x) {
//    if (root === null) return false;
//    if (root.key === x) return true;
//    else if (root.key > x) return searchBST(root.left, x);
//    return searchBST(root.right, x);
// }
// let root = new Node(15);
// root.left = new Node(5);
// root.left.left = new Node(3);
// root.right = new Node(20);
// root.right.left = new Node(18);
// root.right.right = new Node(80);
// root.right.left.left = new Node(16);

// console.log(searchBST(root, 80));