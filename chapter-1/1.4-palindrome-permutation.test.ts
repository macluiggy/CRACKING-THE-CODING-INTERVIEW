import { expect, describe, it } from "bun:test";
import { palindromePermutation } from "./1.4-palindrome-permutation";

describe("1.4 - Palindrome Permutation", () => {
  it("should return true for palindrome permutations", () => {
    expect(palindromePermutation("racecar")).toEqual(true);
    expect(palindromePermutation("taco cat")).toEqual(true);
    expect(palindromePermutation("abba")).toEqual(true);
    expect(palindromePermutation("aab")).toEqual(true);
    expect(palindromePermutation("aaaabbbb")).toEqual(true);
    expect(palindromePermutation('abcdeeabc')).toBeTrue()
  });

  it("should return false for non-palindrome permutations", () => {
    expect(palindromePermutation("hello")).toEqual(false);
    expect(palindromePermutation("world")).toEqual(false);
    expect(palindromePermutation("ab")).toEqual(false);
    expect(palindromePermutation("abc")).toEqual(false);
  });
});
