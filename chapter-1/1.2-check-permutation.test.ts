import { expect, describe, it } from "bun:test";
import { checkPermutation, checkPermutation2, permutation } from "./1.2-check-permutation";

describe("1.2 - Check Permutation", () => {
  it("should return true if one string is a permutation of the other, false otherwise", () => {
    expect(checkPermutation("abc", "cba")).toEqual(true);
    expect(checkPermutation("abc", "abc")).toEqual(true);
    expect(checkPermutation("abc", "xyz")).toEqual(false);
    
    expect(checkPermutation2("abc", "cba")).toEqual(true);
    expect(checkPermutation2("abc", "abc")).toEqual(true);
    expect(checkPermutation2("abc", "xyz")).toEqual(false);

    expect(permutation("abc", "cba")).toEqual(true);
    expect(permutation("abc", "abc")).toEqual(true);
    expect(permutation("abc", "xyz")).toEqual(false);
  });
});
