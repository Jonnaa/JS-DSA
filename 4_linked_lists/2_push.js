// Linked List: Push

// Steps to the push method

// Create a new node
// Point the last node to the new node
// Point tail to new node
// Increase length by 1

// Edge cases

// Inserting into an empty linked list
// Create new node, point head and tail to new node
// Increase length by 1

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    let newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }

  push(value) {
    let newNode = new Node(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
}

let myLinkedList = new LinkedList(7);
myLinkedList.push(4);
