import { expect, describe, it } from "bun:test";
import {
  palindromePermutation,
  checkMaxOneOdd,
} from "./1.4-palindrome-permutation";

describe("1.4 - Palindrome Permutation", () => {
  const fns = [palindromePermutation, checkMaxOneOdd];
  it("should return true for palindrome permutations", () => {
    for (let fn of fns) {
      expect(fn("racecar")).toEqual(true);
      expect(fn("taco cat")).toEqual(true);
      expect(fn("abba")).toEqual(true);
      expect(fn("aab")).toEqual(true);
      expect(fn("aaaabbbb")).toEqual(true);
      expect(fn("abcdeeabc")).toBeTrue();
    }
  });

  it("should return false for non-palindrome permutations", () => {
    for (let fn of fns) {
      expect(fn("hello")).toEqual(false);
      expect(fn("world")).toEqual(false);
      expect(fn("ab")).toEqual(false);
      expect(fn("abc")).toEqual(false);
    }
  });
});
