import { calPoints } from "./calPoints";

describe("calPoints", () => {
  it("should calculate the sum of valid points", () => {
    expect(calPoints(["5", "2", "C", "D", "+"])).toBe(30);
    expect(calPoints(["5", "-2", "4", "C", "D", "9", "+", "+"])).toBe(27);
    expect(calPoints(["1"])).toBe(1);
    expect(calPoints(["C", "D", "9", "+", "+"])).toBe(36);
    expect(calPoints(["C", "D", "9", "+", "+", "C", "D", "9", "+", "+"])).toBe(108);
  });

  it("should handle empty input", () => {
    expect(calPoints([])).toBe(0);
  });

});