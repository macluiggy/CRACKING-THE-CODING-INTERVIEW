import { describe, expect, it } from "bun:test";
import groupThePeople from "./groupThePeople";

describe("groupThePeople", () => {
  it("should group the people correctly", () => {
    expect(groupThePeople([3, 3, 3, 3, 3, 1, 3])).toEqual([ [ 0, 1, 2 ], [ 5 ], [ 3, 4, 6 ]]);
    // Add more test cases here
  });
});