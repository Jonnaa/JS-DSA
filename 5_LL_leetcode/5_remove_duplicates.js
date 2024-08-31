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
    this.length = 1;
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

  getLength() {
    console.log("Length: " + this.length);
  }

  makeEmpty() {
    this.head = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.length++;
  }

  removeDuplicates() {
    if (!this.head) return;
    if (this.length === 1) return this;

    const uniqueSet = new Set();
    const dummy1 = new Node(0);
    let newLength = 0;
    let prev1 = dummy1;
    let current = this.head;
    while (current !== null) {
      // console.log("Current: ", current.value);
      // console.log(uniqueSet);
      // console.log(uniqueSet.has(current.value));
      if (!uniqueSet.has(current.value)) {
        uniqueSet.add(current.value);
        prev1.next = current;
        prev1 = current;
        newLength++;
      }
      current = current.next;
    }
    prev1.next = null;
    this.head = dummy1.next;
    this.length = newLength;
    return this;
  }
}

let myLinkedList = new LinkedList(1);
myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.push(3);
myLinkedList.push(4);
myLinkedList.push(5);
myLinkedList.push(5);

console.log("Original list:");
myLinkedList.printList();

myLinkedList.removeDuplicates();

console.log("\nList after removing duplicates:");
myLinkedList.printList();

/*
  EXPECTED OUTPUT:
  ----------------
  Original list:
  1
  2
  3
  3
  4
  5
  5
  List after removing duplicates:
  1
  2
  3
  4
  5

*/
