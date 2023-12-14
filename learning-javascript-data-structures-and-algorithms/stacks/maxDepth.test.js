import { maxDepth } from "./maxDepth";

describe("maxDepth", () => {
  it("should return the maximum depth of a string", () => {
    expect(maxDepth("()")).toBe(1);
    expect(maxDepth("()()")).toBe(1);
    expect(maxDepth("(())")).toBe(2);
    expect(maxDepth("((()))")).toBe(3);
    expect(maxDepth("()()()")).toBe(1);
    expect(maxDepth("((()()))")).toBe(3);
    expect(maxDepth("()(()())")).toBe(2);
    expect(maxDepth("()(()())()")).toBe(2);
    expect(maxDepth("(1+(2*3)+((8)/4))+1")).toBe(3);
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