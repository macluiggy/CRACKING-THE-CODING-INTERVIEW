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
  if (!head) return;

  // Step 1: Find the midpoint of the list
  let slow: ListNode | null = head;
  let fast = head;
  while (fast.next && fast.next.next) {
    slow = slow!.next;
    fast = fast.next.next;
  }

  // Step 2: Cut the list into two halves
  let mid = slow!.next;
  slow!.next = null;

  // Step 3: Reverse the second half
  let prev = null;
  let curr = mid;
  while (curr) {
    let nextTemp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nextTemp;
  }
  // console.log(head, prev);
  

  // Now, 'head' is the head of the first half, and 'prev' is the head of the reversed second half
  // Now, 'head' is the head of the first half, and 'prev' is the head of the reversed second half
  let lk = new ListNode(0), dummy = lk;
  while (head || prev) {
    if (head) {
      lk.next = head;
      lk = lk.next;
      head = head?.next;
    }
    if (prev) {
      lk.next = prev;
      lk = lk.next;
      prev = prev?.next;
    }
  }
  head = dummy.next;
  console.log(head);
  
  
}
// Create the linked list
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);

// Reorder the list
reorderList(head);