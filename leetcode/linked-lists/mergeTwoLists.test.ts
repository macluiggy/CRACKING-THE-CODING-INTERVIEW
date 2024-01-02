import { expect, describe, it } from "bun:test";
import mergeTwoLists from "./mergeTwoLists";
import ListNode from "./listNode";

describe("mergeTwoLists", () => {
  describe("mergeTwoLists", () => {
    it("should merge two empty lists", () => {
      const list1 = null;
      const list2 = null;
      const mergedList = mergeTwoLists(list1, list2);
      expect(mergedList).toEqual(null);
    });

    it("should merge an empty list with a non-empty list", () => {
      const list1 = null;
      const list2 = new ListNode(1);
      const mergedList = mergeTwoLists(list1, list2);
      expect(mergedList).toEqual(list2);
    });

    it("should merge two non-empty lists", () => {
      const list1 = new ListNode(1, new ListNode(3, new ListNode(5)));
      const list2 = new ListNode(2, new ListNode(4, new ListNode(6)));
      const mergedList = mergeTwoLists(list1, list2);
      
      const expectedList = new ListNode(
        1,
        new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6)))))
      );
      expect(mergedList).toEqual(expectedList);
    });
  });
});