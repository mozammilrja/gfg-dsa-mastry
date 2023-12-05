// class Node {
//   constructor(data) {
//     this.data = data;
//     this.next = null;
//   }
// }

// class LinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//     this.size = 0;
//   }

//   isEmpty() {
//     return this.size === 0;
//   }

//   getSize() {
//     return this.size;
//   }

//   addToHead(data) {
//     const newNode = new Node(data);

//     if (this.isEmpty()) {
//       this.tail = newNode;
//     } else {
//       newNode.next = this.head;
//     }

//     this.head = newNode;
//     this.size++;
//   }

//   addToTail(data) {
//     const newNode = new Node(data);

//     if (this.isEmpty()) {
//       this.head = newNode;
//     } else {
//       this.tail.next = newNode;
//     }

//     this.tail = newNode;
//     this.size++;
//   }

//   removeHead() {
//     if (this.isEmpty()) {
//       return null;
//     }

//     const removedNode = this.head;

//     this.head = this.head.next;

//     if (!this.head) {
//       this.tail = null;
//     }

//     this.size--;

//     return removedNode.data;
//   }

//   removeTail() {
//     if (this.isEmpty()) {
//       return null;
//     }

//     const removedNode = this.tail;

//     if (this.head === this.tail) {
//       this.head = null;
//       this.tail = null;
//     } else {
//       let currentNode = this.head;
//       while (currentNode.next !== this.tail) {
//         currentNode = currentNode.next;
//       }
//       currentNode.next = null;
//       this.tail = currentNode;
//     }

//     this.size--;

//     return removedNode.data;
//   }

//   printList() {
//     if (this.isEmpty()) {
//       console.log("Linked list is empty.");
//     } else {
//       let currentNode = this.head;
//       while (currentNode) {
//         console.log(currentNode.data);
//         currentNode = currentNode.next;
//       }
//     }
//   }
// }

// Example usage:

// const linkedList = new LinkedList();

// linkedList.addToTail(10);
// linkedList.addToTail(20);
// linkedList.addToTail(30);

// console.log("Linked List:");
// linkedList.printList();
// console.log("Size:", linkedList.getSize());

// linkedList.removeHead();

// console.log("Linked List after removing head:");
// linkedList.printList();
// console.log("Size:", linkedList.getSize());

// linkedList.removeTail();

// console.log("Linked List after removing tail:");
// linkedList.printList();
// console.log("Size:", linkedList.getSize());

// function largestSubArray(arr, n) {
//   let sum = 0;
//   let maxLength = 0;
//   let summap = {};

//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//     if (sum === 0) {
//       maxLength = i + 1;
//     } else if (sum in summap) {
//       maxLength = Math.max(maxLength, i - summap[sum]);
//     } else {
//       summap[sum] = i;
//     }
//     }
//   return
// }

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

// const person = new Person("Mozammil", 30);
// console.log(person);

// // 1 -->10-->99-->5-->16
// class LinkList {
//   constructor(value) {
//     this.head = {
//       value: value,
//       null: null,
//     };
//     this.tail = this.head;
//     this.length = 1;
//   }
//   append(value) {
//     const newNode = {
//       value: value,
//       next: null,
//     };
//     this.tail.next = newNode;
//     this.tail = newNode;
//     return this;
//   }
//   prepend(value) {
//     const newNode = {
//       value: value,
//       next: this.head,
//     };
//     this.head.next = newNode;
//     this.head = newNode;
//     return this;
//   }
// }

// const myLinkList = new LinkList(10);
// myLinkList.append(5);
// myLinkList.append(16);
// myLinkList.prepend(1);
// console.log(myLinkList);

// // insert data
// 1 -->10-->99-->5-->16
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  printList() {
    let currentNode = this.head;
    let linkedListAsString = "";
    while (currentNode !== null) {
      linkedListAsString += `${currentNode.value} -> `;
      currentNode = currentNode.next;
    }
    linkedListAsString += "null";
    return linkedListAsString;
  }

  insert(index, value) {
    if (index >= this.length) {
      return this.append(value);
    }

    const newNode = new Node(value);
    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      const leader = this.traverseToIndex(index - 1);
      const holdingPointer = leader.next;
      leader.next = newNode;
      newNode.next = holdingPointer;
    }

    this.length++;
    return this.printList();
  }

  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
}

const myLinkList = new LinkList(10);
myLinkList.append(5);
myLinkList.append(16);
myLinkList.prepend(1);
myLinkList.insert(0, 119);
const linkedListAsString = myLinkList.printList();
console.log(linkedListAsString);


