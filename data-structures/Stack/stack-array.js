const Stack = (module.exports = class Stack {
  constructor() {
    this.array = [];
  }

  peek() {
    if (this.array.length === 0) {
      return null;
    }
    return this.array[this.array.length - 1];
  }

  push(value) {
    this.array.push(value);
  }

  pop() {
    return this.array.pop();
  }

  isEmpty() {
    return this.array.length === 0;
  }

  size() {
    return this.array.length;
  }
});

function test() {
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
}

// test();
