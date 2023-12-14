import { maxDepth, maxDepth2 } from "./maxDepth";

describe("maxDepth", () => {
  const fns = [maxDepth, maxDepth2];
  it("should return the maximum depth of a string", () => {
    for (let fn of fns) {
      expect(fn("()")).toBe(1);
      expect(fn("()()")).toBe(1);
      expect(fn("(())")).toBe(2);
      expect(fn("((()))")).toBe(3);
      expect(fn("()()()")).toBe(1);
      expect(fn("((()()))")).toBe(3);
      expect(fn("()(()())")).toBe(2);
      expect(fn("()(()())()")).toBe(2);
      expect(fn("(1+(2*3)+((8)/4))+1")).toBe(3);
    }
  });

  it("should return 0 for an empty string", () => {
    expect(maxDepth("")).toBe(0);
  });

  it("should return 0 for a string without parentheses", () => {
    expect(maxDepth("abc")).toBe(0);
    expect(maxDepth("123")).toBe(0);
    expect(maxDepth("")).toBe(0);
  });
});
