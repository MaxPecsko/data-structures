class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const node = new Node(val);

    if (!this.length) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }

    this.length++;
    return this;
  }

  pop() {
    if (!this.length) return undefined;

    const oldTail = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
      oldTail.prev = null;
    }

    this.length--;
    return oldTail;
  }

  shift() {
    if (!this.length) return undefined;

    const shiftedHead = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = shiftedHead.prev;
      this.head.prev = null;
      shiftedHead.next = null;
    }

    this.length--;
    return shiftedHead;
  }

  unshift(val) {
    const newNode = new Node(val);

    if (!this.length) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;

    if (index <= this.length / 2) {
      for (let i = this.head, j = 0; j <= index; j++, i = i.next) {
        if (j === index) return i;
      }
    }

    if (index >= this.length / 2) {
      for (
        let i = this.tail, j = this.length - 1;
        j >= index;
        j--, i = i.prev
      ) {
        if (j === index) return i;
      }
    }
  }

  set(index, val) {
    const targetNode = this.get(index);

    if (targetNode) {
      targetNode.val = val;
      return true;
    }

    return false;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;

    if (index === 0) return this.unshift(val);
    if (index === this.length) return this.push(val);

    const newNode = new Node(val);
    const prevNode = this.get(index - 1);
    const nextNode = prevNode.next;

    (newNode.next = nextNode), (newNode.prev = prevNode);
    (prevNode.next = newNode), (nextNode.prev = newNode);

    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;

    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    const targetNode = this.get(index);

    targetNode.prev.next = targetNode.next, targetNode.next.prev = targetNode.prev;
    targetNode.next = null, targetNode.prev = null;

    this.length--;
    return targetNode;
  }
}
