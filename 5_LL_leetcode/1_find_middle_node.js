// ---------------------------------------------------
// Linked List: Find Middle Node(Interview Question)
// ---------------------------------------------------
//  Implement a member function called findMiddleNode() that finds and returns the middle node of the linked list.
//  Note: this LinkedList implementation does not have a length member variable.

// -- Output --
// Return the middle node of the linked list.
// If the list has an even number of nodes, return the second middle node (the one closer to the end).

// -- Constraints --
// You are not allowed to use any additional data structures (such as arrays) or modify the existing data structure.
// You can only traverse the linked list once.

// -- Examples --
// Example 1: LL 1-2-3-4-5 returns 3
// Example 2: LL 1-2-3-4-5-6 returns 4

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

  // My thinking
  // Use a var that starts at 0
  // That var =0 means its at head
  // I will increment the var by 1 which will increase its distance from head
  // I will then check if the distance from var to tail is the same
  // Worked just like the actual solution, but solution is much nicer to look at and more efficient
  //
  findMiddleNode() {
    if (!this.head) return null;
    if (this.head === this.tail) return this.head;
    const checkTail = (a, b) => {
      let cc = 0;
      while (a.next && cc <= b) {
        cc++;
        a = a.next;
      }
      return cc - b;
    };
    let count = 0;
    let temp = this.head;
    let result = 1;
    let at = null;
    let after;
    while (temp !== this.tail && result != -1) {
      result = checkTail(temp, count);
      if (result === -1) after = temp;
      if (result === 0) at = temp;
      temp = temp.next;
      count++;
    }
    if (at) return at;
    else return after;
  }

  // --------------------
  // ---- EXPLANATION ---
  // --------------------
  //   The findMiddleNode() function uses the "tortoise and hare" algorithm to find the middle node of a linked list.

  // Here's a step-by-step explanation of the logic:

  // Initialize two pointers, slow and fast, both pointing to the head of the linked list.

  // Traverse the linked list using a while loop. The loop continues as long as fast is not null (i.e., it has not reached the end of the list), and fast.next is also not null (i.e., there is at least one more node after the current fast node).

  // Inside the loop, move the slow pointer one step forward (i.e., slow = slow.next) and the fast pointer two steps forward (i.e., fast = fast.next.next).

  // Since the fast pointer moves twice as fast as the slow pointer, by the time the fast pointer reaches the end of the list or goes beyond it, the slow
  // findMiddleNode() {
  //   if (!this.head) return null;
  //   if (this.head === this.tail) return this.head;
  //   // Initialize slow and fast pointers at head
  //   let slow = this.head;
  //   let fast = this.head;
  //   // Iterate through the list
  //   while (fast !== null && fast.next !== null) {
  //     // Move slow pointer one step
  //     slow = slow.next;
  //     // Move fast pointer two steps
  //     fast = fast.next.next;
  //   }
  //   // Return middle node when fast reaches end
  //   return slow;
  // }
}

let myLinkedList = new LinkedList(1);
myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.push(4);
myLinkedList.push(5);

console.log("Original list:");
myLinkedList.printList();

const middleNode = myLinkedList.findMiddleNode();
console.log(`\nMiddle node value: ${middleNode.value}`);

// Create a new list with an even number of elements
let myLinkedList2 = new LinkedList(1);
myLinkedList2.push(2);
myLinkedList2.push(3);
myLinkedList2.push(4);
myLinkedList2.push(5);
myLinkedList2.push(6);

console.log("\nOriginal list 2:");
myLinkedList2.printList();

const middleNode2 = myLinkedList2.findMiddleNode();
console.log(`\nMiddle node value of list 2: ${middleNode2.value}`);

/*
  EXPECTED OUTPUT:
  ----------------
  Original list:
  1
  2
  3
  4
  5
  Middle node value: 3
  Original list 2:
  1
  2
  3
  4
  5
  6
  Middle node value of list 2: 4
*/
