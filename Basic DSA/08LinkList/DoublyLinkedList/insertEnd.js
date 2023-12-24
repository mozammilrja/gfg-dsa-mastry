class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

function insertEnd(head, x) {
  let temp = new Node(x);
  if (head === null) {
    return temp;
  }
  let current = head;
  while (current.next !== null) {
    current = current.next;
  }
  current.next = temp;
  temp.prev = current;
  return head;
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
head = insertEnd(head, 50);
console.log(printlist(head));
// time complexity o(n)