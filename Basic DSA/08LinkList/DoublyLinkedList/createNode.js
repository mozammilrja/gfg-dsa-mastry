// class Node {
//   constructor(data) {
//     this.data = data;
//     this.next = null;
//     this.prev = null;
//   }
// }

// function printlist(head) {
//   let current = head;
//   let result = "";
//   while (current != null) {
//     result += current.data + " ";
//     current = current.next;
//   }
//   return result;
// }

// let head = new Node(10);
// let second = new Node(20);
// let third = new Node(30);

// head.next = second;
// second.prev = head;
// second.next = third;
// third.prev = second;

// console.log(printlist(head));

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

function printlist(head) {
  let current = head;
  let result = "";
  while (current != null) {
    result += current.data + " ";
    current = current.next;
  }
  return result;
}

let head = new Node(1);
head.next = new Node(2);
head.next.prev = head;
head.next.next = new Node(3);
head.next.next.prev = head.next;
head.next.next.next = new Node(4);
head.next.next.next.prev = head.next.next;
head.next.next.next.next = new Node(5);
head.next.next.next.next.prev = head.next.next.next;

console.log(printlist(head));
