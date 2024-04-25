class Node {
  constructor(val) {
    this.key = val;
    this.left = null;
    this.right = null;
  }
}

let res = 0;
function burnTime(root, leaf, dist) {
  if (root === null) return [0, dist];
  if (root.key === leaf) {
    dist = 0;
    return [1, dist];
  }
  let ldist = -1,
    rdist = -1;
  let R = burnTime(root.left, leaf, ldist);
  let lh = R[0];
  ldist = R[1];
  R = burnTime(root.right, leaf, rdist);
  let rh = R[0];
  rdist = R[1];

  if (ldist !== -1) {
    dist = ldist + 1;
    res = Math.max(res, dist + rh);
  } else if (rdist != -1) {
    dist = rdist + 1;
    res = Math.max(res, dist + lh);
  }
  return [Math.max(lh, rh) + 1, dist];
}
let root = new Node(10);
root.left = new Node(20);
root.right = new Node(30);
root.left.left = new Node(40);
root.left.right = new Node(50);
root.left.left.left = new Node(60);
root.left.left.left.left = new Node(70);
let dist = -1;
let leaf = 50;
burnTime(root, leaf, dist);
console.log(res);
