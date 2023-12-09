class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

function insertBegin(head, x) {
  let temp = new Node(x);
  temp.next = head;
  if (head !== null) {
    head.prev = temp;
  }
  return temp;
}

function printlist(head) {
  let current = head;
  let results = "";
  while (current !== null) {
    results += current.data + " ";
    current = current.next;
  }
  return results;
}

let head = new Node(10);
head.next = new Node(20);
head.next.prev = head;
head.next.next = new Node(30);
head.next.next.prev = head;
console.log(printlist(head));
head = insertBegin(head, 50);
console.log(printlist(head));
