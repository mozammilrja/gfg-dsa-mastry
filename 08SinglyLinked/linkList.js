class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

let head = new Node(10);
head.next = new Node(20);
head.next.next = new Node(30);

let current = head;

console.log(current)

// while (current !== null) {
//   console.log(current.data);
//   current = current.next;
// }
