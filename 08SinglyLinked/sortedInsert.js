class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.next = null;
  }
}

function SortedInsert(head, x) {
  // Create a new node with data x.
  let temp = new Node(x);

  // If the linked list is empty, set the new node as the head and return.
  if (head === null) {
    return temp;
  }

  // If the new data x is less than the data in the current head node,
  // insert the new node at the beginning and update the head.
  if (x < head.data) {
    temp.next = head;
    return temp;
  }

  // Traverse the linked list to find the correct position to insert the new node.
  let current = head;
  while (current.next !== null || current.data < x) {
    current = current.next;

    // Insert the new node at the correct position in the linked list.
    temp.next = current.next;
    current.next = temp;
    return temp;
  }
}

function printList(head) {
  let current = head;
  let result = "";
  while (current !== null) {
    result += current.data + " ";
    current = current.next;
  }
  return result;
}

let head = new Node(5);
head.next = new Node(10);
head.next.next = new Node(20);
head.next.next.next = new Node(30);
head.next.next.next.next = new Node(40);
head.next.next.next.next.next = new Node(50);
head.next.next.next.next.next.next = new Node(60);
head.next.next.next.next.next.next.next = new Node(70);
console.log(printList(head));
SortedInsert(head, 15);
console.log(printList(head));


// time complexity o(n)
// Aux space = o(1)