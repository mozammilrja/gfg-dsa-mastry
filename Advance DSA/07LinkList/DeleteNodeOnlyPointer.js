class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function printList(head) {
  let curr = head;
  let str = "";
  while (curr !== null) {
    str += curr.data + " ";
    curr = curr.next;
  }
  return str;
}

function deleteNode(prt) {
  prt.data = prt.next.data;
  prt.next = prt.next.next;
}

let head = new Node(10);
let temp1 = new Node(15);
let temp2 = new Node(12);
let temp3 = new Node(20);

head.next = temp1;
temp1.next = temp2;
temp2.next = temp3;

deleteNode(temp2); // Deletes temp2 node
console.log(printList(head)); // Output: 10 15 20
// Time complexity: O(1)