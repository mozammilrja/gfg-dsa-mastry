class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function nthNodeFromEnd(head, n) {
  if (head === null || n <= 0) {
    return null;
  }

  let first = head;
  let second = head;

  // Move first N nodes ahead
  for (let i = 0; i < n; i++) {
    if (first === null) {
      return null;
    }
    first = first.next;
  }

  // Move both pointers until first reaches the end
  while (first !== null) {
    first = first.next;
    second = second.next;
  }

  return second;
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

let head = new Node(10);
head.next = new Node(20);
head.next.next = new Node(30);
head.next.next.next = new Node(40);
head.next.next.next.next = new Node(50);
head.next.next.next.next.next = new Node(60);
head.next.next.next.next.next.next = new Node(70);

console.log("Original List:", printList(head));
let nthNode = nthNodeFromEnd(head, 3); // Change 3 to the desired N value
console.log("Nth Node from the End:", nthNode?.data);
