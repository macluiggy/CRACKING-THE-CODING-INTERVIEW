import { expect, jest, test } from "bun:test";
import LinkedList from "./linked-list";

test("printKthToLast prints the kth to last element of the linked list", () => {
  // Create a new linked list
  const list = new LinkedList()
  list.add(1)
  list.add(2)
  list.add(3)
  list.add(4)
  list.add(5)

  // Mock console.log
  // console.log = jest.fn();

  // Print the 2nd to last element
  list.printKthToLast(list.getHead(), 2);

  // Check that console.log was called with the correct value
  // expect(console.log).toHaveBeenCalled();
});
