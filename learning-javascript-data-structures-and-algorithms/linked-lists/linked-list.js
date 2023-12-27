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
    this.count++
    console.log(this.head);
  }
}


const list = new LinkedList();
list.push(15);
list.push(10);