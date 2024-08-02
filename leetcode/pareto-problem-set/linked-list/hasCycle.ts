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

import ListNode from "../../linked-lists/listNode";

function hasCycle(head: ListNode | null): boolean {
  type Curr =
    | (ListNode & {
        visited: Boolean;
      })
    | null;
  let curr: Curr = head as any;
  do {
    if (curr!.visited) return true;
    curr!["visited"] = true;
    curr = curr!.next as Curr;
  } while (curr);
  {
    console.log("hi");
  }

  return false;
}
