import { describe, expect, it } from "bun:test";
import searchInsert from "./searchInsert";

describe("searchInsert", () => {
  it("should return the correct index when target is in the middle of the array", () => {
    expect(searchInsert([1, 3, 5, 6], 5)).toEqual(2);
  });

  // it("should return the correct index when target is at the beginning of the array", () => {
  //   expect(searchInsert([1, 3, 5, 6], 1)).toEqual(0);
  // });

  // it("should return the correct index when target is at the end of the array", () => {
  //   expect(searchInsert([1, 3, 5, 6], 6)).toEqual(3);
  // });

  // it("should return the correct index when target is not in the array", () => {
  //   expect(searchInsert([1, 3, 5, 6], 2)).toEqual(1);
  // });

  // Add more test cases to cover edge cases and additional scenarios

});