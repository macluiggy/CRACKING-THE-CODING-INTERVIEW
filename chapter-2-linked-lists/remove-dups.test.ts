import { expect, describe, it } from "bun:test";
import LinkedList from "./linked-list";

describe("LinkedList - removeDuplicates", () => {
  it("should remove duplicates from the linked list", () => {
    const linkedList = new LinkedList();
    linkedList.add(1);
    linkedList.add(2);
    linkedList.add(3);
    linkedList.add(2);
    linkedList.add(4);
    linkedList.add(1);

    linkedList.removeDuplicates();

    // The linked list should have duplicates removed
    expect(linkedList.head?.value).toEqual(1);
    expect(linkedList.head?.next?.value).toEqual(2);
    expect(linkedList.head?.next?.next?.value).toEqual(3);
    expect(linkedList.head?.next?.next?.next?.value).toEqual(4);
    expect(linkedList.head?.next?.next?.next?.next).toBeNull();
  });

  it("should handle an empty linked list", () => {
    const linkedList = new LinkedList();

    linkedList.removeDuplicates();

    // The linked list should remain empty
    expect(linkedList.head).toBeNull();
  });

  it("should handle a linked list with a single node", () => {
    const linkedList = new LinkedList();
    linkedList.add(1);

    linkedList.removeDuplicates();

    // The linked list should remain unchanged
    expect(linkedList.head?.value).toEqual(1);
    expect(linkedList.head?.next).toBeNull();
  });
});
