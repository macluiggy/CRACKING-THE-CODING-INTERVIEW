import ListNode from "../../linked-lists/listNode";

function reverseList(head: ListNode | null): ListNode | null {
  let prev: ListNode | null = null;
  let curr: ListNode | null = head;
  let next: ListNode | null = null;

  while (curr !== null) {
    next = curr.next
    curr.next = prev
    prev = curr
    curr = next
  }

  return prev;
}
