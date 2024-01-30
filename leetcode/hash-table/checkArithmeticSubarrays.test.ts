import { describe, expect, it } from "bun:test";
import checkArithmeticSubarrays from "./checkArithmeticSubarrays";

describe("checkArithmeticSubarrays", () => {
  it("should return an array of booleans indicating if each subarray is arithmetic", () => {
    const nums = [4, 6, 5, 9, 3, 7];
    const l = [0, 0, 2];
    const r = [2, 3, 5];
    expect(checkArithmeticSubarrays(nums, l, r)).toEqual([true, false, true]);
  });

  // Add more test cases here...
});
