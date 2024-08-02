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

function find(arr: any[], target: any) {
  let l = 0;
  let r = arr.length - 1;
  while (l <= r) {
    if (arr[l] === target) return l;
    if (arr[r] === target) return r;
    l++;
    r--;
  }
  return -1;
}

const arr = [1, 3, 2, 4, 3, 5, 40, 5];

console.log(find(arr, 4));
