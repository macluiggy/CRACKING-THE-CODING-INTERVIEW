import { describe, expect, it } from "bun:test";
import mergeSimilarItems from "./mergeSimilarItems";

describe("mergeSimilarItems", () => {
  it("should merge similar items from items1 and items2", () => {
    const items1 = [
      [1, 10],
      [2, 20],
      [3, 30],
    ];
    const items2 = [
      [2, 5],
      [3, 15],
      [4, 25],
    ];
    const expected = [
      [1, 10],
      [2, 25],
      [3, 45],
      [4, 25],
    ];
    const result = mergeSimilarItems(items1, items2);
    expect(result).toEqual(expected);
  });

  // it("should handle empty arrays", () => {
  //   const items1: number[][] = [];
  //   const items2: number[][] = [];
  //   const expected: number[][] = [];
  //   const result = mergeSimilarItems(items1, items2);
  //   expect(result).toEqual(expected);
  // });

  // it("should handle arrays with different lengths", () => {
  //   const items1 = [
  //     [1, 10],
  //     [2, 20],
  //   ];
  //   const items2 = [
  //     [2, 5],
  //     [3, 15],
  //     [4, 25],
  //   ];
  //   const expected = [
  //     [1, 10],
  //     [2, 25],
  //     [3, 15],
  //     [4, 25],
  //   ];
  //   const result = mergeSimilarItems(items1, items2);
  //   expect(result).toEqual(expected);
  // });
});
