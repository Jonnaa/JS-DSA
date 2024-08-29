// This node class is created because the linked list constructor and
// many of its methods require the creation of a new node
class Node {
  constructor(value) {
    // This is basically assigning the value parameter
    // to the new instance of this class
    this.value = value;
    this.next = null;
    // Value and next are what make up a node in a linked list
  }
}

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }
}

// Instantiate a linked list using the linkedlist class
// (create a new instance of the linkedlist class)
// The "new" keyword is specifically calling the constructor of the class
let myLinkedList = new LinkedList(4);
console.log(myLinkedList.head);
