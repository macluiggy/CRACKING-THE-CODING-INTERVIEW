/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

import ListNode from "./listNode";

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let listSize = 0;
  let curr = head;
  while (curr) {
    listSize++;
    curr = curr.next;
  }

  if (n > listSize) {
    return head;
  }
  let dummy = new ListNode(head?.val)
  dummy.next = head
  let position = listSize - n;
  curr = dummy;
  for (let i = 0; i < position; i++) {
    curr = curr?.next;
  }
  curr.next = curr.next.next;
  return dummy.next
}

const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

const n = 2;
const result = removeNthFromEnd(head, n);
console.log(result);
