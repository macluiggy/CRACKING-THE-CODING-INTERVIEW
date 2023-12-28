import { Node } from "./models/liked-list-models";
import { defaultEquals } from "./utils";

export default class LinkedList {
  constructor(equalsFn = defaultEquals) {
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
    // console.log(this.head);
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
      // let previous;
      // for (let i = 0; i < index; i++) {
      //   previous = current;
      //   current = current.next;
      // }
      // previous.next = current.next;
      const previous = this.getElementAt(index - 1);
      current = previous.next;
      previous.next = current.next;
    }
    this.count--;
    return current.element;
  }

  isInRange(index) {
    return index >= 0 && index < this.count;
  }

  getElementAt(index) {
    if (!this.isInRange()) return undefined;
    let current = this.head;
    for (let i = 0; i < index && current !== null; i++) {
      current = current.next;
    }
    return current;
  }

  insert(element, index) {
    if (!this.isInRange()) return false;
    const node = new Node(element);
    if (index === 0) {
      const current = this.head;
      node.next = current;
      this.head = node;
    } else {
      const previous = this.getElementAt(index - 1);
      const current = previous.next;
      previous.next = node;
      node.next = current;
    }
    this.count++;
    return true;
  }
  indexOf(element) {
    // let current = this.head;
    // let count = 0;
    // let found = false;
    // while (!found) {
    //   if (current.element === element) {
    //     found = true;
    //   } else {
    //     current = current.next;
    //     count++;
    //   }
    // }
    // return count;
    let current = this.head;
    for (let i = 0; i < this.count && current; i++) {
      if (this.equalsFn(element, current.element)) return i;
      current = current.next;
    }
    return -1;
  }

  remove(element) {
    const index = this.indexOf(element);
    const removed = this.removeAt(index);
    return removed;
  }

  isEmpty() {
    return this.size() === 0;
  }

  size() {
    return this.count;
  }

  getHead() {
    return this.head;
  }

  toString() {
    if (this.isEmpty()) return "";
    let objString = `${this.head.element}`;
    let current = this.head.next;
    for (let i = 1; i < this.size() && current != null; i++) {
      objString = `${objString},${current.element}`;
    }
    return objString;
  }
}

const list = new LinkedList();
list.push(15);
list.push(10);
console.log(list.toString());
