import { expect, describe, it } from "bun:test";
import mergeNodes from "./mergeNodes";
import ListNode from "./listNode";

it("should merge nodes and return the resulting linked list", () => {
  // Create the linked list: 0 -> 3 -> 1 -> 0 -> 4 -> 5 -> 2 -> 0
  const head = new ListNode(0);
  head.next = new ListNode(3);
  head.next.next = new ListNode(1);
  head.next.next.next = new ListNode(0);
  head.next.next.next.next = new ListNode(4);
  head.next.next.next.next.next = new ListNode(5);
  head.next.next.next.next.next.next = new ListNode(2);
  head.next.next.next.next.next.next.next = new ListNode(0);

  // Expected merged linked list: 4 -> 11
  const expectedList = new ListNode(4);
  expectedList.next = new ListNode(11);

  const resultList = mergeNodes(head);
  expect(resultList).toEqual(expectedList);
});