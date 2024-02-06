import { describe, expect, it } from "bun:test";
import letterCombinations from "./letterCombinations";

describe("letterCombinations", () => {
  // it("should return an empty array if input is empty", () => {
  //   expect(letterCombinations("")).toEqual([]);
  // });

  // it("should return the correct combinations for single-digit inputs", () => {
  //   expect(letterCombinations("2")).toEqual(["a", "b", "c"]);
  //   expect(letterCombinations("3")).toEqual(["d", "e", "f"]);
  //   // Add more test cases for other single-digit inputs
  // });

  it("should return the correct combinations for multi-digit inputs", () => {
    expect(letterCombinations("23")).toEqual(["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]);
    // expect(letterCombinations("79")).toEqual(["pw", "px", "py", "pz", "qw", "qx", "qy", "qz", "rw", "rx", "ry", "rz", "sw", "sx", "sy", "sz"]);
    // Add more test cases for other multi-digit inputs
  });

  // Add more test cases to cover edge cases and additional scenarios

});