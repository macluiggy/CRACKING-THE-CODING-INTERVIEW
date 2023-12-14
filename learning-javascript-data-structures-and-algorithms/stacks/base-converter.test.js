import { describe, expect, it } from "bun:test";
import { baseConverter } from "./base-converter";

describe("baseConverter", () => {
  it("should convert decimal number to base string", () => {
    expect(baseConverter(233, 2)).toBe("11101001");
    expect(baseConverter(233, 8)).toBe("351");
    expect(baseConverter(233, 16)).toBe("E9");
    expect(baseConverter(233, 10)).toBe("233");
    expect(baseConverter(10, 2)).toBe("1010");
    expect(baseConverter(10, 8)).toBe("12");
    expect(baseConverter(10, 16)).toBe("A");
    expect(baseConverter(10, 10)).toBe("10");
    expect(baseConverter(1000, 2)).toBe("1111101000");
    expect(baseConverter(1000, 8)).toBe("1750");
    expect(baseConverter(1000, 16)).toBe("3E8");
    expect(baseConverter(1000, 10)).toBe("1000");
    expect(baseConverter(11, 0)).toBe("");
    expect(baseConverter(12345, 36)).toBe("9IX");
    expect(baseConverter(12349, 36)).toBe("9J1");
    expect(baseConverter(12350, 36)).toBe("9J2");
    expect(baseConverter(12351, 36)).toBe("9J3");
    expect(baseConverter(12352, 36)).toBe("9J4");
    expect(Math.floor(14%16)).toBe(14);
    expect(Math.floor(14/16)).toBe(0);
    expect(14%16).toBe(14);
    expect(14/16).toBe(0.875);
  });

  it("should return empty string for invalid base", () => {
    expect(baseConverter(233, 1)).toBe("");
    expect(baseConverter(233, 37)).toBe("");
    expect(baseConverter(10, -2)).toBe("");
    expect(baseConverter(1000, 0)).toBe("");
  });
});