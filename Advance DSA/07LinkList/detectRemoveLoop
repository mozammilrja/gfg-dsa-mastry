class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function detectRemoveLoop(head) {
  let slow_p = head,
    fast_p = head;

  // Detect loop
  while (fast_p !== null && fast_p.next !== null) {
    slow_p = slow_p.next;
    fast_p = fast_p.next.next;
    if (slow_p === fast_p) {
      break;
    }
  }

  // If loop detected
  if (slow_p === fast_p) {
    slow_p = head;
    while (slow_p.next !== fast_p.next) {
      slow_p = slow_p.next;
      fast_p = fast_p.next;
    }
    // Remove loop
    fast_p.next = null;
    return true; // Loop detected and removed
  }
  
  return false; // No loop detected
}


function printlist(head){
    let curr = head;
    let string = "";
    do{
        string += curr.data + " ";
        curr=curr.next;
    }while(curr!==null);
    return string;
}

let head = new Node(10);
let temp1 = new Node(15);
let temp2 = new Node(12);
let temp3 = new Node(20);

head.next = temp1;
temp1.next = temp2;
temp2.next = temp1;

if (detectRemoveLoop(head)) {
  console.log("Linked list after loop removal:", printlist(head));
} else {
  console.log("No Loop");
}
