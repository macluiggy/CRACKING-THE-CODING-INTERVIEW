import { expect, describe, it } from "bun:test";
import reverseList from "./reverseList";
import ListNode from "./listNode";

describe("reverseList", () => {
  describe("reverseList", () => {
    it("should reverse a linked list", () => {
      // Test case 1: Empty list
      expect(reverseList(null)).toEqual(null);

      // Test case 2: Single node list
      const head2 = new ListNode(1);
      expect(reverseList(head2)).toEqual(head2);

      // Test case 3: List with multiple nodes
      const head3 = new ListNode(1, new ListNode(2, new ListNode(3)));
      const reversedHead3 = new ListNode(3, new ListNode(2, new ListNode(1)));
      expect(reverseList(head3)).toEqual(reversedHead3);
    });
  });
});
