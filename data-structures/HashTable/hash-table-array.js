class HashTable {
  constructor(size) {
    this.array = new Array(size);
  }

  _hash(value) {
    let hash = 0;
    for (let i = 0; i < value.length; i++) {
      hash = (hash + value.charCodeAt(i) * i) % this.array.length;
    }
    return hash;
  }

  set(key, value) {
    const address = this._hash(key);
    if (!this.array[address]) {
      this.array[address] = [];
    }
    this.array[address].push([key, value]);
  }

  get(key) {
    const address = this._hash(key);
    const ref = this.array[address];

    if (!ref) {
      return null;
    }

    if (ref.length > 1) {
      for (const [k, value] of ref) {
        if (k === key) {
          return value;
        }
      }
    } else {
      return ref[ref.length - 1][1];
    }

    return null;
  }

  keys() {
    const keys = [];
    for (const data of this.array) {
      if (!data) continue;

      for (const [key] of data) {
        keys.push(key);
      }
    }
    return keys;
  }

  values() {
    const values = [];
    for (const data of this.array) {
      if (!data) continue;

      for (const [, value] of data) {
        values.push(value);
      }
    }
    return values;
  }
}

function test() {
  const table = new HashTable(20);
  table.set('1', 'Hello');
  table.set('2', 'World');
  table.set('10', '!');

  console.log(table);
  console.log(table.get('1'));
  console.log(table.get('10'));
  console.log(table.keys());
  console.log(table.values());
}

test();
