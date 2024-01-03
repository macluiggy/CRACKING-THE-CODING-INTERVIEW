import { expect, describe, it } from "bun:test";
import insertGreatestCommonDivisors from "./insertGreatestCommonDivisors";
import ListNode from "./listNode";

describe("insertGreatestCommonDivisors", () => {
  it("should insert greatest common divisors in the linked list", () => {
    // Create the linked list: 1 -> 2 -> 3 -> 4 -> 5
    const head = new ListNode(1);
    head.next = new ListNode(2);
    head.next.next = new ListNode(3);
    head.next.next.next = new ListNode(4);
    head.next.next.next.next = new ListNode(5);

    // Expected linked list after inserting greatest common divisors: 1 -> 1 -> 2 -> 1 -> 3 -> 1 -> 4 -> 1 -> 5
    const expectedList = new ListNode(1);
    expectedList.next = new ListNode(1);
    expectedList.next.next = new ListNode(2);
    expectedList.next.next.next = new ListNode(1);
    expectedList.next.next.next.next = new ListNode(3);
    expectedList.next.next.next.next.next = new ListNode(1);
    expectedList.next.next.next.next.next.next = new ListNode(4);
    expectedList.next.next.next.next.next.next.next = new ListNode(1);
    expectedList.next.next.next.next.next.next.next.next = new ListNode(5);

    const resultList = insertGreatestCommonDivisors(head);
    expect(resultList).toEqual(expectedList);
  });

  it("should return null for an empty linked list", () => {
    const head = null;
    const resultList = insertGreatestCommonDivisors(head);
    expect(resultList).toEqual(null);
  });

  it("should return the same linked list if it contains only one node", () => {
    const head = new ListNode(1);
    const resultList = insertGreatestCommonDivisors(head);
    expect(resultList).toEqual(head);
  });
});