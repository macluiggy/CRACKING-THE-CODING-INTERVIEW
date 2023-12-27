import { Node } from "./models/liked-list-models";

export default class LinkedList {
  constructor(equalsFn = {}) {
    this.count = 0;
    this.head = null;
    this.equalsFn = equalsFn;
  }

  push(element) {
    const node = new Node(element);
    let current;
    if (this.head === null) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = node;
    }
    this.count++;
    console.log(this.head);
  }

  removeAt(index) {
    const isInRange = index >= 0 && index < this.count;
    if (!isInRange) {
      return undefined;
    }
    let current = this.head;
    if (index === 0) {
      this.head = current.next;
    } else {
      let previous;
      for (let i = 0; i < index; i++) {
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
    }
    this.count--;
    return current.element;
  }
}

const list = new LinkedList();
list.push(15);
list.push(10);
