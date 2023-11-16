import { expect, describe, it } from "bun:test";
import { rotate, rotateMatrix, } from "./1.7-rotate-matrix";

describe("1.7 - rotateMatrix", () => {
  const fns = [rotateMatrix, rotate];
  it("should rotate the matrix 90 degrees clockwise", () => {
    const matrix1 = [
      [1, 2],
      [3, 4],
    ];
    const expected1 = [
      [3, 1],
      [4, 2],
    ];
    const matrix2 = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    const expected2 = [
      [7, 4, 1],
      [8, 5, 2],
      [9, 6, 3],
    ];
    const matrix3 = [[1]];
    const expected3 = [[1]];
    for (const fn of fns) {
      expect(fn(matrix1)).toEqual(expected1);

      expect(fn(matrix2)).toEqual(expected2);

      expect(fn(matrix3)).toEqual(expected3);
    }
  });
});
