import { expect, test } from "bun:test";
import LinkedList from "./linked-list";

test('deleteNode deletes the node from the linked list', () => {
  // Create a new linked list
  // let node1 = new LinkedListNode(1);
  // let node2 = new LinkedListNode(2);
  // let node3 = new LinkedListNode(3);
  // let node4 = new LinkedListNode(4);
  // let node5 = new LinkedListNode(5);
  // node1.next = node2;
  // node2.next = node3;
  // node3.next = node4;
  // node4.next = node5;
  const list = new LinkedList()
  list.add(1)
  list.add(2)
  list.add(3)
  list.add(4)
  list.add(5)

  // Delete the 3rd node
  let result = list.deleteNode(list.getHead()?.next?.next);

  // Check the result
  expect(result).toBe(true);

  // Check the values of the linked list
  let current = list.getHead();
  let values = [];
  while (current) {
    values.push(current.value);
    current = current.next;
  }

  // The values should be [1, 2, 4, 5] after deleting the 3rd node
  expect(values).toEqual([1, 2, 4, 5]);
});
