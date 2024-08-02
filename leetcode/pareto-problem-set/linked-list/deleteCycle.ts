import ListNode from "../../linked-lists/listNode";

function detectCycle(head: ListNode | null): ListNode | null {
  type Curr =
    | (ListNode & {
        visited: Boolean;
      })
    | null;
  let curr: Curr = head as any;

  while (curr) {
    if (curr.visited) return curr
    curr["visited"] = true;
    curr = curr.next as Curr;
  }

  return curr;
}