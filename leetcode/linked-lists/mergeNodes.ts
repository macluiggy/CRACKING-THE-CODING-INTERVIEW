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

function mergeNodes(head: ListNode | null): ListNode | null {
  let sum = 0;
  let nums = [];
  while (head) {
    if (head.val === 0) {
      nums.push(sum);
      sum = 0;
    } else {
      sum += head.val;
    }
    head = head.next;
  }

  nums.shift();

  let newHead: ListNode | null = null;
  let currentNode: ListNode | null = null;
  for (let i = 0; i < nums.length; i++) {
    const newNode = new ListNode(nums[i]);
    if (!newHead) {
      newHead = newNode;
      currentNode = newNode;
    } else {
      currentNode!.next = newNode;
      currentNode = newNode;
    }
  }

  return newHead;
}

export default mergeNodes;
