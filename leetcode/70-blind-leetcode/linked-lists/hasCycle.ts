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

function hasCycle(head: ListNode | null): boolean {
    let slow: any = head
    let fast = head?.next

    while(fast && fast?.next && fast) {
      if (fast == slow) return true
      slow =  slow?.next
      fast= fast.next.next
    }
    return false
};

let a = {a:'a'}
let b = a

console.log(a==b);
