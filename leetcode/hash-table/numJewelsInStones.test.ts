import { describe, expect, it } from "bun:test";
import numJewelsInStones from "./numJewelsInStones";

describe("numJewelsInStones", () => {
  it("should return the correct number of jewels in stones", () => {
    expect(numJewelsInStones("aA", "aAAbbbb")).toBe(3);
    expect(numJewelsInStones("z", "ZZ")).toBe(0);
    expect(numJewelsInStones("abc", "abcABC")).toBe(3);
  });
});
