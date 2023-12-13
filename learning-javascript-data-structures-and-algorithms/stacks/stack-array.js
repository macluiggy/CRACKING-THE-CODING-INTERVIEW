const items = new WeakMap();
console.log(JSON.stringify(items));
class Stack {
  constructor() {
    // this.items = [];
    items.set(this, []);
  }

  push(element) {
    // this.items.push(element);
    const s = items.get(this);
    s.push(element);
  }

  pop() {
    // return this.items.pop();
    const s = items.get(this);
    const r = s.pop();
    return r;
  }

  peek() {
    // return this.items[this.items.length -1];
    const s = items.get(this);
    return s[s.length - 1];
  }

  isEmpty() {
    // return this.items.length === 0;
    const s = items.get(this);
    return s.length === 0;
  }

  size() {
    // return this.items.length;
    const s = items.get(this);
    return s.length;
  }

  clear() {
    // this.items = [];
    items.set(this, []);
  }
}

// Path: learning-javascript-data-structures-and-algorithms/stacks/stack-array.js
const stack = new Stack();
console.log(stack.isEmpty()); // outputs true
stack.push(5);
stack.push(8);
console.log(stack.peek()); // outputs 8
stack.push(11);
console.log(stack.size()); // outputs 3
console.log(stack.isEmpty()); // outputs false
stack.push(15);
stack.pop();
stack.pop();
console.log(stack.size()); // outputs 2
