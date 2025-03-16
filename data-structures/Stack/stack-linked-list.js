const Node = require('../common/Node');

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    if (this.length === 0) {
      return null;
    }
    return this.top.value;
  }

  push(value) {
    const node = new Node(value);
    if (this.length === 0) {
      this.bottom = this.top = node;
    } else {
      node.next = this.top;
      this.top = node;
    }
    this.length++;
  }

  pop() {
    const top = this.top;
    if (this.length === 0) {
      return null;
    }

    this.top = this.top.next;
    this.length--;
    if (this.length === 0) {
      this.bottom = null;
    }
    return top.value;
  }

  isEmpty() {
    return this.length === 0;
  }
}

const stack = new Stack();

console.log(stack.peek());

stack.push(1);

console.log(stack.isEmpty());

stack.push(2);
stack.push(3);

console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());

console.log(stack.isEmpty());
