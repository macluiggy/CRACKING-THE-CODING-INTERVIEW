import { expect, describe, it } from "bun:test";
import pairSum from "./pairSum";
import ListNode from "./listNode";

describe("pairSum", () => {
  // it("should return 0 for an empty linked list", () => {
  //   const head = null;
  //   const result = pairSum(head);
  //   expect(result).toEqual(0);
  // });

  // it("should return 0 for a linked list with a single node", () => {
  //   const head = new ListNode(5);
  //   const result = pairSum(head);
  //   expect(result).toEqual(0);
  // });

  it("should return the sum of pairs in the linked list", () => {
    // Create the linked list: 1 -> 2 -> 3 -> 4 -> 5
    const head = new ListNode(4);
    head.next = new ListNode(2);
    head.next.next = new ListNode(2);
    head.next.next.next = new ListNode(3);

    // Pairs: (1, 2), (3, 4), (5, 0)
    // Sum: 3 + 7 + 5 = 15
    const result = pairSum(head);
    expect(result).toEqual(7);
  });
});