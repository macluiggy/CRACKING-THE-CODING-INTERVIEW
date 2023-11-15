import { expect, describe, it } from "bun:test";
import { stringCompression } from "./1.6-string-compression";

describe("1.6 - String Compression", () => {
  it("should compress the string correctly", () => {
    expect(stringCompression("aabcccccaaa")).toEqual("a2b1c5a3");
    expect(stringCompression("abcde")).toEqual("a1b1c1d1e1");
    expect(stringCompression("aaabbbccc")).toEqual("a3b3c3");
  });
  it("should return the original string if the compressed string is not shorter", () => {
    expect(stringCompression("abcd")).toEqual("abcd");
    expect(stringCompression("aabbccdd")).toEqual("aabbccdd");
  });
});