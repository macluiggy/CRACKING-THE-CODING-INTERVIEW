import { expect, test } from "bun:test";
import LinkedList from "./linked-list";
import addlists from "./sum-list";

test("Sum Lists - Reverse Order", () => {
  // Create linked lists
  const list1 = new LinkedList();
  list1.add(7);
  list1.add(1);
  list1.add(6);

  const list2 = new LinkedList();
  list2.add(5);
  list2.add(9);
  list2.add(2);

  // Call the function
  const result = addlists(list1.head, list2.head);

  // Assert the result
  expect(result.value).toBe(2);
  expect(result.next!.value).toBe(1);
  expect(result.next!.next!.value).toBe(9);
  expect(result!.next!.next!.next).toBeNull();
});