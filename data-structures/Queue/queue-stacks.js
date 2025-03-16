const Stack = require('../Stack/stack-array');

class Queue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  enqueue(value) {
    this._pushValues(this.stack1, this.stack2);
    this.stack2.push(value);
  }

  dequeue() {
    this._pushValues(this.stack2, this.stack1);
    return this.stack1.pop();
  }

  peek() {
    this._pushValues(this.stack2, this.stack1);
    return this.stack1.peek();
  }

  _pushValues(stack1, stack2) {
    let stack1Length = stack1.size();
    for (let i = 0; i < stack1Length; i++) {
      stack2.push(stack1.pop());
    }
  }

  isEmpty() {
    return this.stack1.isEmpty() && this.stack2.isEmpty();
  }
}

function test() {
  const queue = new Queue();

  console.log(queue.peek());

  // Examples depend on implementation. Here, we are using stack backed by array.
  // stack1 = []
  // stack2 = [1]
  queue.enqueue(1);

  console.log(queue.isEmpty());

  // stack1 = []
  // stack2 = [1, 2]
  queue.enqueue(2);

  // stack1 = []
  // stack2 = [1, 2, 3]
  queue.enqueue(3);

  console.log(queue);
  // stack2 is emptied
  // stack1 = [3, 2, 1]
  // pop removes 1
  console.log(queue.dequeue());
  // // stack1 = [3, 2]
  // // pop removes 2
  console.log(queue.dequeue());
  // // stack1 = [3]
  // // pop removes 3
  console.log(queue.dequeue());
  // // stack1 = []
  // // pop returns null
  console.log(queue.dequeue());

  // stack1 = []
  // stack2 = []
  console.log(queue.isEmpty());

  /*
      stack1 = []
      stack2 = []

      enqueue 1
      stack2 = [1]

      enqueue 2
      stack2 = [1, 2]

      dequeue
      stack1 = [2, 1] => [2]
      stack2 = []

      enqueue 3
      stack2 = [2, 3]
      stack1 = []

      dequeue
      stack1 = [3, 2] => [3]
      stack2 = []
  */
}

test();
