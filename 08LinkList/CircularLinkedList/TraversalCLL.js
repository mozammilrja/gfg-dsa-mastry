class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function traverse(head) {
  if (head === null) {
    return null;
  }
  let current = head;
  do {
    console.log(current.data);
    current = current.next;
  } while (current !== head);
}

function printList(head) {
  let current = head;
  let result = "";
  do {
    result += current.data + " ";
    current = current.next;
  } while (current !== null && current !== head);

  console.log(result.trim());
}

let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = head;

printList(head);
traverse(head);

// Time complexity = O(1)
// Space complexity = O(1)
