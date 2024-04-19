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
let temp1 = new Node(20);
let temp2 = new Node(30);
let temp3 = new Node(40);
let temp4 = new Node(40);
let temp5 = new Node(50);
let temp6 = new Node(60);
let temp7 = new Node(70);

head.next = temp1;
temp1.next = temp2;
temp2.next = temp3;
temp3.next = temp4;
temp4.next = temp5;
temp5.next = temp6;
temp6.next = temp7;
temp7.next = temp3; // Creating a loop

if (isLoop(head)) {
  console.log("Loop");
} else {
  console.log("No Loop");
}
