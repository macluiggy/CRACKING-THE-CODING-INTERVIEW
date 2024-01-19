import { describe, expect, it } from "bun:test";
import findMatrix from "./findMatrix";

describe("findMatrix", () => {
  it("should return a 2D array with distinct integers", () => {
    expect(findMatrix([1, 3, 4, 1, 2, 3, 1])).toEqual([[1, 3, 4, 2], [1, 3], [1]]);
    // expect(findMatrix([1, 2, 3, 4])).toEqual([[4, 3, 2, 1]]);
  });

  // it("should return a 2D array with minimal number of rows", () => {
  //   expect(findMatrix([1, 2, 3, 4, 5, 6])).toHaveLength(1);
  //   expect(findMatrix([1, 2, 3, 4, 5, 6, 7, 8])).toHaveLength(2);
  // });

  // it("should handle empty input array", () => {
  //   expect(findMatrix([])).toEqual([]);
  // });
});