/*
  Linked list stores a sorted data and contains props such as: length, head, tail.
  Is not indexed and consists of nodes where each node leads to the next one.
*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const nextNode = new Node(val);
    if (!this.head) {
      this.head = nextNode;
      this.tail = this.head;
    } else {
      this.tail.next = nextNode;
      this.tail = nextNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.length) return undefined;
    let lastNode = this.head;
    let prevNode = lastNode;
    while (lastNode.next) {
      prevNode = lastNode;
      lastNode = lastNode.next;
    }
    this.tail = prevNode;
    this.tail.next = null;
    this.length--;
    if (!this.length) {
      this.head = null;
      this.tail = null;
    }
    return lastNode;
  }

  shift() {
    if (!this.length) return undefined;
    let prevHead = this.head;
    this.head = prevHead.next;
    this.length--;
    if (!this.length) this.tail = null;
    return prevHead;
  }
   unshift(val) {
     let newNode = new Node(val);
     if (!this.head) {
       this.head = newNode;
       this.tail = newNode;
     } else {
       newNode.next = this.head;
       this.head = newNode;
     }
     this.length++;
     return this;
   }

   get(idx) {
     if (idx < 0 || idx >= this.length) return null;
     let counter = 0;
     let value = this.head;
     while (counter <= idx) {
       value = value.next;
       counter++;
     }
     return value;
   }

   set(idx, val) {
     let targetNode = this.get(idx);
     if (!targetNode) return false;
     targetNode.val = val;
     return true;
   }

   insert(idx, val) {
    if (idx < 0 || idx > this.length) return false;
    if (idx === this.length) return (this.push(val) instanceof this);
    if (idx === 0) return (this.unshift(val) instanceof this);

    const newNode = new Node(val);
    const beforeTarget = this.get(idx - 1);
    const temp = beforeTarget.next;
    beforeTarget.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
   }

   remove(idx) {
    if(idx < 0 || idx > this.length) return undefined;
    if(idx === this.length - 1) return this.pop();
    if(idx === 0) return this.unshift();

    const prevNode = this.get(idx - 1);
    const removeTarget = prevNode.next;
    prevNode.next = removeTarget.next;
    this.length--;
    return removeTarget;
   }

   print() {
     const arr = [];
     let current = this.head;
     while(current) {
       arr.push(current.val);
       current = current.next
     }
     console.log(arr);
   }

   reverse() {
     let node = this.head;
     this.head = this.tail;
     this.tail = node;
     let prev = null;
     let next = null;

     for(let i = 0; i < this.length; i++) {
       next = node.next;
       node.next = prev;
       prev = node;
       node = next;
     }
     return this;
   }
}