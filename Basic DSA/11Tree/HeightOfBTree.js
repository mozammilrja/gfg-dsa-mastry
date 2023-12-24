class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

// function heightBTree(root) {
//   if (root === null) {
//     return 0;
//   } else {
//     let leftHeight = heightBTree(root.left);
//     let rightHeight = heightBTree(root.right);
//     let max = Math.max(leftHeight, rightHeight) + 1;
//     return max;
//   }
// }

// using recursion

function heightBTree(root) {
  if (root === null) {
    return 0;
  } else {
    let max = Math.max(heightBTree(root.left), heightBTree(root.right)) + 1;
    return max;
  }
}
// time complexity = O(n)
// Aux space = O(n)

let root = new Node(10);
root.left = new Node(20);
root.right = new Node(30);
root.left.left = new Node(15);
root.right.left = new Node(40);
root.right.right = new Node(80);
root.right.right.right = new Node(50);

console.log(heightBTree(root));
