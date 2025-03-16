const Node = require('../common/Node');

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    if (this.length === 0) {
      return null;
    }
    return this.first.value;
  }

  enqueue(value) {
    const node = new Node(value);
    if (this.length === 0) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }
    this.length++;
  }

  dequeue() {
    if (this.length === 0) {
      return null;
    }

    const first = this.first;
    this.first = this.first.next;
    this.length--;
    if (this.length === 0) {
      this.last = null;
    }

    return first.value;
  }

  isEmpty() {
    return this.length === 0;
  }
}

const queue = new Queue();

console.log(queue.peek());

queue.enqueue(1);

console.log(queue.isEmpty());

queue.enqueue(2);
queue.enqueue(3);

console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());

console.log(queue.isEmpty());
