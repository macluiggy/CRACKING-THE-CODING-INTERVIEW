import { describe, expect, it } from "bun:test";
import smallerNumbersThanCurrent from "./smallerNumbersThanCurrent";

describe("smallerNumbersThanCurrent", () => {
  it("should return an array with the count of smaller numbers for each element", () => {
    expect(smallerNumbersThanCurrent([8, 1, 2, 2, 3])).toEqual([4, 0, 1, 1, 3]);
    // expect(smallerNumbersThanCurrent([6, 5, 4, 8])).toEqual([2, 1, 0, 3]);
    // expect(smallerNumbersThanCurrent([7, 7, 7, 7])).toEqual([0, 0, 0, 0]);
  });

  // Add more test cases here...
});