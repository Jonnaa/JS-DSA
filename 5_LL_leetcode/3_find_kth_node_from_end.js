class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
  }

  printList() {
    let temp = this.head;
    while (temp !== null) {
      console.log(temp.value);
      temp = temp.next;
    }
  }

  getHead() {
    if (this.head === null) {
      console.log("Head: null");
    } else {
      console.log("Head: " + this.head.value);
    }
  }

  getTail() {
    if (this.tail === null) {
      console.log("Tail: null");
    } else {
      console.log("Tail: " + this.tail.value);
    }
  }

  makeEmpty() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  // ---------------
  // -- MY METHOD --
  // ---------------

  // findKthFromEnd(value) {
  //   if (!this.head || value <= 0) return null;
  //   let slow = this.head;
  //   let fast = this.head;
  //   let counter = 0;
  //   let outOfRange = false;
  //   let found = false;
  //   while (slow.next && !outOfRange && !found) {
  //     slow = slow.next;
  //     for (let i = 0; i < value; i++) {
  //       if (!fast.next) {
  //         if (i + 1 !== value && counter === 0) {
  //           outOfRange = true;
  //           break;
  //         }
  //         if (i + 1 === value && counter === 0) {
  //           fast = this.head;
  //           found = true;
  //           break;
  //         }
  //         fast = this.head;
  //         continue;
  //       }
  //       fast = fast.next;
  //     }
  //     counter++;
  //   }
  //   if (outOfRange) return null;
  //   return fast;
  // }

  // ---------------------
  // -- Actual Solution --
  // ---------------------

  findKthFromEnd(k) {
    if (k < 0) return null;
    // tortoise and hare
    // Start slow and fast at head
    let slow = this.head;
    let fast = this.head;

    // Then move fast ahead k times
    // If fast ends up null, then k is out of range
    for (let i = 0; i < k; i++) {
      if (fast === null) return null;
      fast = fast.next;
    }
    // Once fast has been moved up k times
    // we do a while loop and move slow and fast at the same speed
    // while fast!=null
    // once fast is null, slow will be at the target node
    while (fast !== null) {
      slow = slow.next;
      fast = fast.next;
    }
    return slow;
  }
}

let myLinkedList = new LinkedList(1);
myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.push(4);
myLinkedList.push(5);

console.log("Original list:");
myLinkedList.printList();

const k = 2;
const kthNodeFromEnd = myLinkedList.findKthFromEnd(k);

console.log(`\n${k}th node from the end:`);
if (kthNodeFromEnd) {
  console.log(kthNodeFromEnd.value);
} else {
  console.log("Not found");
}

/*
  EXPECTED OUTPUT:
  ----------------
  Original list:
  1
  2
  3
  4
  5
  2th node from the end:
  4
*/
