import LinkedList from "./linked-list";
import { Node } from "./models/liked-list-models";
import { defaultEquals } from "./utils";

class CirculatLinkedList extends LinkedList {
  constructor(equalsFn = defaultEquals) {
    super(equalsFn);
  }

  insert(element, index) {
    if (!this.isInRange()) return false;
    const node = new Node(element);
    let current = this.head;
    if (index === 0) {
      if (this.head == null) {
        this.head = node;
        node.next = this.head;
      } else {
        node.next = current;
        current = this.getElementAt(this.size());
        this.head = node;
        current.next = this.head;
      }
    } else {
      const previous = this.getElementAt(index - 1);
      const current = previous.next;
      previous.next = node;
      node.next = current;
    }
    this.count++;
    return true;
  }

  removeAt(index) {
    if (!this.isInRange(index)) {
      return undefined;
    }
    let current = this.head;
    if (index === 0) {
      if (this.size() === 1) {
        this.head = null;
      } else {
        const removed = this.head; // {1}
        current = this.getElementAt(this.size()); // {2} NEW
        this.head = this.head.next; // {3}
        current.next = this.head; // {4}
        current = removed; // {5}
      }
    } else {
      // no need to update last element for circular list
      const previous = this.getElementAt(index - 1);
      current = previous.next;
      previous.next = current.next;
    }
    this.count--;
    return current.element; // {6}
  }
}
