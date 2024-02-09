import { expect, test } from "bun:test";
import ListNode from "../leetcode/linked-lists/listNode";
import addlists from "./sum-list";

test("Sum Lists - Reverse Order", () => {
  // Create linked lists
  const list1 = new ListNode(7);
  list1.next = new ListNode(1);
  list1.next.next = new ListNode(6);

  const list2 = new ListNode(5);
  list2.next = new ListNode(9);
  list2.next.next = new ListNode(2);

  // Call the function
  const result = addlists(list1, list2);

  // Assert the result
  expect(result.value).toBe(2);
  expect(result.next.value).toBe(1);
  expect(result.next.next.value).toBe(9);
  expect(result.next.next.next).toBeNull();
});
