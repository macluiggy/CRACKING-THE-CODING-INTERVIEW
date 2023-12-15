import { removeDuplicates } from "./removeDuplicates";

describe("removeDuplicates", () => {
  it("should remove adjacent duplicates from the string", () => {
    expect(removeDuplicates("abbaca")).toBe("ca");
    expect(removeDuplicates("aaaaaa")).toBe("");
    expect(removeDuplicates("abcde")).toBe("abcde");
    expect(removeDuplicates("aabbccdd")).toBe("");
    expect(removeDuplicates("abccba")).toBe("");
  });

  it("should handle empty input", () => {
    expect(removeDuplicates("")).toBe("");
  });
});