import { ListNode } from "./linked-list";

function isPalindrome(head: ListNode | null) {
  let headReversed = reverseList(head);
  let current1 = head;
  let current2 = headReversed;
  while (current1 && current2) {
    if (current1.value !== current2.value) {
      return false;
    }
    current1 = current1.next;
    current2 = current2.next;
  }
  return true;
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

export default isPalindrome;
