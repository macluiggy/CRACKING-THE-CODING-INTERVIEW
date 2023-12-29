import LinkedList from "./linked-list";
import { DoublyNode } from "./models/liked-list-models";
import { defaultEquals } from "./utils";

export default class DoublyLinkedList extends LinkedList {
  constructor(equalsFn = defaultEquals) {
    super(equalsFn);
    this.tail = undefined;
  }

  insert(element, index) {
    if (!this.isInRange(index)) return false;
    const node = new DoublyNode(element);
    let current = this.head;
    if (index === 0) {
      if (this.head == null) {
        this.head = node;
        this.tail = node;
      } else {
        node.next = this.head;
        current.prev = node;
        this.head = node;
      }
    } else if (index === this.count) {
      current = this.tail;
      current.next = node;
      node.prev = current;
      this.tail = node;
    } else {
      const previous = this.getElementAt(index - 1);
      current = previous.next;
      node.next = current;
      previous.next = node;
      current.prev = node;
      node.prev = previous;
    }
    this.count++;
    return true;
  }

  removeAt(index) {
    if (!this.isInRange(index)) return undefined;
    let current = this.head;
    if (index === 0) {
      this.head = current.next;
      const onlyOneItem = this.count === 1;
      if (onlyOneItem) {
        this.tail = nu;
      } else {
        this.head.prev = null;
      }
    } else if (index === this.count - 1) {
      current = this.tail;
      this.tail = current.prev;
      this.tail.next = null;
    } else {
      // const previous = this.getElementAt(index - 1);
      // current = previous.next;
      current = this.getElementAt(index);
      const previous = current.prev;
      // link previous with current's next - skip it to remove
      previous.next = current.next;
      current.next.prev = previous;
    }
    this.count--;
    return current.element;
  }
}
