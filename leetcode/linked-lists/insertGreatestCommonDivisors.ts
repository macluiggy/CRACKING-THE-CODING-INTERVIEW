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

function insertGreatestCommonDivisors(head: ListNode | null): ListNode | null {
  function findGCD(num1: number, num2: number): number {
    while (num2) {
      let temp = num2;
      num2 = num1 % num2;
      num1 = temp;
    }
    return num1;
  }
  let temp:ListNode|null = head;

  while (temp && temp.next) {
    let nextNode = temp.next;
    let num = findGCD(temp.val, nextNode.val);
    let newNode: ListNode = new ListNode(num);

    temp.next = newNode;
    newNode.next = nextNode;
    temp = nextNode;
  }

  return head;
}

export default insertGreatestCommonDivisors;
