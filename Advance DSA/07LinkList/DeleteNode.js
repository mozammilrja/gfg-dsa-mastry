// Delete node with only reference given to it in JS

// This is one of the tricky problem asked in an interview where a random address to a node of the linked list is given
//  and the user needs to delete the node of the given address.The address can point to any random node in -between a linked list.

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
function deleteNode(ptr) {
  let temp = ptr.next; // Store the reference to the node to be deleted
  ptr.data = temp.data; // Copy data from the next node to the current node
  ptr.next = temp.next; // Redirect the pointer of the current node to the next node
  temp = null; // Delete the reference to the node to be deleted
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
