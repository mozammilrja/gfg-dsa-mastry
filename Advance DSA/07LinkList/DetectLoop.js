// Detect loop using floyd cycle detection in JS

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function isLoop(head) {
  let slow_p = head,
    fast_p = head;

  while (fast_p !== null && fast_p.next !== null) {
    slow_p = slow_p.next;
    fast_p = fast_p.next.next;
    if (slow_p === fast_p) {
      return true;
    }
  }
  return false;
}

let head = new Node(10);
let temp1 = new Node(15);
let temp2 = new Node(12);
let temp3 = new Node(20);


head.next = temp1;
temp1.next = temp2;
temp2.next = temp1;

if (isLoop(head)) {
  console.log("Loop");
} else {
  console.log("No Loop");
}
