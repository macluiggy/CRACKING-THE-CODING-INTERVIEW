class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class DoublyNode {
  constructor(element, next, prev) {
    // super(element, next);
    this.prev = prev;
  }
}

export { Node, DoublyNode };
