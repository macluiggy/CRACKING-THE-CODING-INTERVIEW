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

/**
 Do not return anything, modify head in-place instead.
 */
 function reorderList(head: ListNode | null): void {
    
 };

 function reverseList(head: ListNode | null): ListNode | null {
  let prev: ListNode | null = null;
  let curr: ListNode | null = head;
  let next: ListNode | null = null;

  while (curr !== null) {
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
  }

  return prev;
};