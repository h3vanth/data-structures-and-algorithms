class ArrayBackedByObject {
  constructor() {
    this.data = {};
    this.length = 0;
  }

  push(value) {
    this.data[this.length++] = value;
  }

  get(index) {
    return this.data[index];
  }

  pop() {
    if (this.length === 0) {
      return null;
    }
    const last = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return last;
  }
}

function test() {
  const array = new ArrayBackedByObject();
  array.push(1);
  array.push(2);
  array.push(3);

  console.log(array);

  console.log(array.get(2));
  console.log(array.get(3));

  console.log(array.pop());
  console.log(array);
}

test();
