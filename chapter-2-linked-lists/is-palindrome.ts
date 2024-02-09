import { ListNode } from "./linked-list";

function isPalindrome(head: ListNode) {
  let headReversed = reverseList(head);
}

function reverseList(head: ListNode | null): ListNode | null {
  let prev = null;
  let current = head;

  while (current !== null) {
    let nextTemp = current.next;
    current.next = prev;
    prev = current;
    current = nextTemp;
  }

  return prev;
}
