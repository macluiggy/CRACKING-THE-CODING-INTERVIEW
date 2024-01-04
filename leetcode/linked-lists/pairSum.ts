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

function pairSum(head: ListNode | null): number {
    let array = listToArray(head)
};

function listToArray(head: ListNode | null): number[] {
  const array: number[] = [];
  let currentNode: ListNode | null = head;
  while (currentNode !== null) {
      array.push(currentNode.val);
      currentNode = currentNode.next;
  }
  return array;
}