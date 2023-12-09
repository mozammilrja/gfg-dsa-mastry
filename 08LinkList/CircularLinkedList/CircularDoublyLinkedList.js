class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

function printlist(head) {
  let curr = head;
  let string = "";
  do {
    string += curr.data + " ";
    curr = curr.next;
  } while (curr !== head);
  return string.trim();
}

function insertAtHead(head, x) {
  let temp = new Node(x);
  if (head === null) {
    temp.next = temp;
    temp.prev = temp;
    return temp;
  }
  temp.prev = head.prev;
  temp.next = head;
  head.prev.next = temp;
  head.prev = temp;
  return temp;
}

let head = new Node(10);
let temp1 = new Node(20);
let temp2 = new Node(30);
let temp3 = new Node(40);
head.next = temp1;
temp1.prev = head;
temp1.next = temp2;
temp2.prev = temp1;
temp2.next = temp3;
temp3.prev = temp2;
temp3.next = head;
head.prev = temp3;

head = insertAtHead(head, 3);
console.log(printlist(head));
