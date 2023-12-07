import { expect, describe, it } from "bun:test";
import {
  deleteGreatestValue,
  // deleteGreatestValue2,
} from "./deleteGreatestValue";

describe("deleteGreatestValue", () => {
  it("should return the sum of the greatest values in each row", () => {
    const grid1 = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    expect(deleteGreatestValue(grid1)).toEqual(24);
    // expect(deleteGreatestValue2(grid1)).toEqual(24);

    const grid2 = [
      [10, 20, 30],
      [40, 50, 60],
      [70, 80, 90],
    ];
    expect(deleteGreatestValue(grid2)).toEqual(240);

    const grid3 = [
      [5, 10, 15],
      [20, 25, 30],
      [35, 40, 45],
    ];
    expect(deleteGreatestValue(grid3)).toEqual(120);
  });
});
