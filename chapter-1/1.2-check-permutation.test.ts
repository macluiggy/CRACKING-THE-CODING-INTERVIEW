import { expect, describe, it } from "bun:test";
import { checkPermutation } from "./1.2-check-permutation";

describe("1.2 - Check Permutation", () => {
  it("should return true", () => {
    expect(true).toEqual(true);
    expect(checkPermutation("abc", "cba")).toEqual(true);
    expect(checkPermutation("abc", "abc")).toEqual(true);
    expect(checkPermutation("abc", "xyz")).toEqual(false);
  });
});
