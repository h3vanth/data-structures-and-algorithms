const Node = require('../common/Node');

class LinkedList {
  constructor() {
    this.length = 0;
    this.tail = this.head = null;
  }

  prepend(value) {
    const node = new Node(value);
    if (this.length > 0) {
      node.next = this.head;
    } else {
      this.tail = node;
    }
    this.head = node;
    this.length++;
  }

  append(value) {
    const node = new Node(value);
    if (this.length === 0) {
      this.tail = this.head = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
  }

  lookup(index) {
    if (index < 0 || index > this.length - 1) {
      throw new Error('Invalid index!');
    }

    if (this.length === 0) return null;

    let i = 0;
    let currentNode = this.head;
    while (i <= index) {
      currentNode = currentNode.next;
      i++;
    }
    return currentNode.value;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) {
      throw new Error('Invalid index!');
    }

    if (index === 0) {
      this.prepend(value);
      return;
    }

    let i = 0;
    let currentNode = this.head;
    while (i < index - 1) {
      currentNode = currentNode.next;
      i++;
    }
    // This means we are inserting at the end
    if (currentNode.next == null) {
      this.append(value);
      return;
    } else {
      const node = new Node(value);
      const tempNode = currentNode.next;
      currentNode.next = node;
      node.next = tempNode;
    }

    this.length++;
  }

  remove(index) {
    if (index < 0 || index > this.length - 1) {
      throw new Error('Invalid index!');
    }

    if (this.length === 1) {
      this.tail = this.head = null;
      this.length--;
      return;
    }

    if (index === 0) {
      this.head = this.head.next;
      this.length--;
      return;
    }

    let i = 0;
    let currentNode = this.head;
    while (i < index - 1) {
      currentNode = currentNode.next;
      i++;
    }

    if (currentNode.next == this.tail) {
      currentNode.next = null;
      this.tail = currentNode;
    } else {
      currentNode.next = currentNode.next.next;
    }

    this.length--;
  }

  print() {
    const array = [];
    if (this.length === 0) {
      return array;
    }

    let currentNode = this.head;
    while (currentNode.next != null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    array.push(currentNode.value);

    return array;
  }
}

function test() {
  const list = new LinkedList();
  // [2]
  list.append(2);
  // [1, 2]
  list.prepend(1);
  // [1, 2, 3]
  list.append(3);
  // [1, 4, 2, 3]
  list.insert(1, 4);
  // [0, 1, 4, 2, 3]
  list.prepend(0);
  // [-1, 0, 1, 4, 2, 3]
  list.prepend(-1);
  console.log(list.print());
  // [-2, -1, 0, 1, 4, 2, 3]
  list.insert(0, -2);
  console.log(list.print());
  // [-1, 0, 1, 4, 2, 3]
  list.remove(0);
  console.log(list.print());
  // [-1, 0, 1, 4, 2]
  list.remove(5);
  list.insert(5, 100);

  console.log(list);
}

// test();
