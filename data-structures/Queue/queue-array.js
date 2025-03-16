// Not optimal since we have to shift array elements on dequeue
class Queue {
  constructor() {
    this.array = [];
  }

  peek() {
    if (this.array.length == 0) {
      return null;
    }
    return this.array[0];
  }

  enqueue(value) {
    this.array.push(value);
  }

  dequeue() {
    if (this.array.length === 0) {
      return null;
    }

    return this.array.splice(0, 1)[0];
  }

  isEmpty() {
    return this.array.length === 0;
  }
}

function test() {
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
}

test();
