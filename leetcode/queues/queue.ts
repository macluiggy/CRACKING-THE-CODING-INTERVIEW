class Queue {
  count: number
  lowestCount: number
  items: any
  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }

  enqueue(element: any) {
    this.items[this.count] = element;
    this.count++;
  }
  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }
    const result = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return result;
  }
  isEmpty() {
    return this.size() === 0;
  }
  peek() {
    return this.isEmpty() ? undefined : this.items[this.lowestCount];
  }
  size() {
    // return Object.keys(this.items).length
    return this.count - this.lowestCount;
  }
  clear() {
    this.items = {};
    this.count = 0;
    this.lowestCount = 0;
  }
  toString() {
    if (this.isEmpty()) {
      return "";
    }
    let objString = `${this.items[this.lowestCount]}`;
    for (let i = this.lowestCount + 1; i < this.count; i++) {
      objString = `${objString},${this.items[i]}`;
    }
    return objString;
  }
}

export default Queue;
