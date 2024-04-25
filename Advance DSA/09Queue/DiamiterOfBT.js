// //Naive Sol
// class Node {
//   constructor(data) {
//     this.data = data;
//     this.left = null;
//     this.right = null;
//   }
// }

// function height(root) {
//   if (root === null) {
//     return 0;
//   }
//   return 1 + Math.max(height(root.left), height(root.right));
// }

// function dimiter(root) {
//   if (root === null) return 0;
//   let dim = 1 + height(root.left) + height(root.right);

//   return  Math.max(dim,dimiter(root.left), dimiter(root.right));
// }

// let root = new Node(18);
// root.left = new Node(4);
// root.right = new Node(20);
// root.right.left = new Node(13);
// root.right.right = new Node(10);

// console.log("dimiter of the binary tree:", dimiter(root)); // Output:
// //Time Complexity: O(n^2) in case of full binary tree.

//Optimize method
class Node {
  constructor(val) {
    this.key = val;
    this.left = null;
    this.right = null;
  }
}

let res = 0;
function height(root) {
  if (root === null) return 0;
  let lh = height(root.left);
  let rh = height(root.right);
  res = Math.max(res, 1 + lh + rh);
  return 1 + Math.max(lh, rh);
}

function dimiter(root) {
  return res;
}

let root = new Node(10);
root.left = new Node(20);
root.right = new Node(30);
root.right.left = new Node(40);
root.right.right = new Node(60);
root.right.left.left = new Node(50);
root.right.right.right = new Node(70);

console.log("Height: " + height(root));
console.log("Diameter: " + dimiter(root));
//  time complexity O(n).
