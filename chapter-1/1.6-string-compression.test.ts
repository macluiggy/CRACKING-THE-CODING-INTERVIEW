import { expect, describe, it } from "bun:test";
import {
  stringCompression,
  compress,
  compress2,
  compressBad,
} from "./1.6-string-compression";

describe("1.6 - String Compression", () => {
  const fns = [stringCompression, compress, compress2, compressBad];
  it("should compress the string correctly", () => {
    for (let fn of fns) {
      expect(fn("aabcccccaaa")).toEqual("a2b1c5a3");
      expect(fn("abcde")).toEqual("abcde");
      expect(fn("aaabbbccc")).toEqual("a3b3c3");
    }
  });
  it("should return the original string if the compressed string is not shorter", () => {
    for (let fn of fns) {
      expect(fn("abcd")).toEqual("abcd");
      expect(fn("aabbccdd")).toEqual("aabbccdd");
    }
  });
});
