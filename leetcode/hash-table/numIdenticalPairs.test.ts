import { describe, expect, it } from "bun:test";
import numIdenticalPairs from "./numIdenticalPairs";

describe("numIdenticalPairs", () => {
  it("should return the correct number of identical pairs", () => {
    expect(numIdenticalPairs([1, 2, 3, 1, 1, 3])).toEqual(4);
    expect(numIdenticalPairs([1, 1, 1, 1])).toEqual(6);
    expect(numIdenticalPairs([1, 2, 3])).toEqual(0);
    expect(numIdenticalPairs([])).toEqual(0);
  });
});