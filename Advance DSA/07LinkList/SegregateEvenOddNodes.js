// Segregate Even and Odd Nodes in JS
// Given a singly linked list, the task is to segregate or separate the even and odd nodes of the linked list.
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

function segregate(head) {
  if (head === null || head.next === null) {
    return head; // No need to segregate if the list is empty or has only one node
  }

  let evenStart = null,
    evenEnd = null,
    oddStart = null,
    oddEnd = null;

  // Traverse the list
  for (let curr = head; curr !== null; curr = curr.next) {
    let x = curr.data;

    if (x % 2 === 0) {
      // If the current node's data is even
      if (evenStart === null) {
        evenStart = curr;
        evenEnd = curr;
      } else {
        evenEnd.next = curr;
        evenEnd = curr;
      }
    } else {
      // If the current node's data is odd
      if (oddStart === null) {
        oddStart = curr;
        oddEnd = curr;
      } else {
        oddEnd.next = curr;
        oddEnd = curr;
      }
    }
  }

  // If there are no even or odd nodes
  if (oddStart === null || evenStart === null) {
    return head;
  }

  // Connect the even and odd lists
  evenEnd.next = oddStart;
  oddEnd.next = null;

  // Return the head of the modified list
  return evenStart;
}

// Example usage
let head = new Node(10);
let temp1 = new Node(15);
let temp2 = new Node(12);
let temp3 = new Node(20);

head.next = temp1;
temp1.next = temp2;
temp2.next = temp3;

head = segregate(head);
console.log(printList(head)); // Output: 10 -> 12 -> 20  -> 15
// Time complexity: O(1)
