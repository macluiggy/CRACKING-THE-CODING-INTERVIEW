export class Stack {
  #count = 0;
  #items = {};
  constructor() {
    this.#count = 0;
    this.#items = {};
  }
  push(element) {
    this.#items[this.#count] = element;
    this.#count++;
  }
  size() {
    return this.#count;
  }
  isEmpty() {
    return this.#count === 0;
  }
  pop() {
    if (this.isEmpty()) {
      // {1}
      return undefined;
    }
    this.#count--; // {2}
    const result = this.#items[this.#count]; // {3}
    delete this.#items[this.#count]; // {4}
    return result; // {5}
  }
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.#items[this.#count - 1];
  }
  clear() {
    const random = Math.random();
    if (random > 0.5) {
      console.log("clearing with new object");
      this.#items = {};
      this.#count = 0;
    } else {
      console.log("clearing with pop");
      while (!this.isEmpty()) {
        this.pop();
      }
    }
  }
  toString() {
    if (this.isEmpty()) {
      return "";
    }
    let objString = `${this.#items[0]}`; // {1}
    for (let i = 1; i < this.#count; i++) {
      // {2}
      // objString += `,${this.items[i]}`; // {3}
      objString = `${objString},${this.#items[i]}`; // {3}
    }
    return objString;
  }
  toStringWithoutCommas() {
    if (this.isEmpty()) {
      return "";
    }
    let objString = `${this.#items[0]}`; // {1}
    for (let i = 1; i < this.#count; i++) {
      // {2}
      // objString += `,${this.items[i]}`; // {3}
      objString = `${objString}${this.#items[i]}`; // {3}
    }
    return objString;
  }
  
}

// const stack = new Stack();
// // stack.push(5);
// // stack.push(8);
// // console.log(stack); // outputs Stack { count: 2, items: { '0': 5, '1': 8 }, push: [Function], size: [Function], isEmpty: [Function], pop: [Function], peek: [Function], clear: [Function], toString: [Function] }
// // console.log(stack.peek()); // outputs 8
// // stack.push(11);
// // console.log(stack.size()); // outputs 3
// // console.log(stack.isEmpty()); // outputs false
// // stack.push(15);
// // stack.pop();
// // stack.pop();
// // console.log(stack.size()); // outputs 2
// // stack.clear();
// console.log(stack.toString()); // outputs 5,8
// console.log(Object.getOwnPropertyNames(stack)); // {1}
// console.log(Object.keys(stack)); // {2}
// console.log(stack); // {3}