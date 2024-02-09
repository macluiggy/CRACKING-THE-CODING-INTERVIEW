class ListNode {
  value: number;
  next: ListNode | null;

  constructor(value: number, next: ListNode | null = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  head: ListNode | null;

  constructor() {
    this.head = null;
  }

  // Method to add a node to the end of the linked list
  add(value: number): void {
    if (!this.head) {
      this.head = new ListNode(value);
    } else {
      let current: ListNode | null = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = new ListNode(value);
    }
  }

  // Method to remove duplicates from the linked list
  removeDuplicates(): void {
    let current = this.head;
    let seen: { [key: number]: boolean } = {};

    if (!current) return;

    seen[current.value] = true;

    while (current.next) {
      if (seen[current.next.value]) {
        current.next = current.next.next;
      } else {
        seen[current.next.value] = true;
        current = current.next;
      }
    }
  }
}

export default LinkedList;
