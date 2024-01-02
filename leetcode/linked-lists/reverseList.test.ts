import { expect, describe, it } from "bun:test";
import reverseList from "./reverseList";

describe("reverseList", () => {
  it("should reverse a linked list", () => {
    // Test case 1: Empty list
    expect(reverseList(null)).toEqual(null);

    // Test case 2: Single node list
    const head2 = { val: 1, next: null };
    expect(reverseList(head2)).toEqual(head2);

    // Test case 3: List with multiple nodes
    const head3 = { val: 1, next: { val: 2, next: { val: 3, next: null } } };
    const reversedHead3 = { val: 3, next: { val: 2, next: { val: 1, next: null } } };
    expect(reverseList(head3)).toEqual(reversedHead3);
  });
});