import { decimalToBinary } from "./decimal-to-binary";

describe("decimalToBinary", () => {
  it("should convert decimal to binary", () => {
    expect(decimalToBinary(233)).toBe("11101001");
    expect(decimalToBinary(10)).toBe("1010");
    expect(decimalToBinary(1000)).toBe("1111101000");
    expect(decimalToBinary(11.1)).toBe("1011");
    expect(Math.floor(5%2)).toBe(1);
    expect(Math.floor(5/2)).toBe(2);
    expect(Math.floor(2%2)).toBe(0);
    expect(Math.floor(2/2)).toBe(1);
    expect(Math.floor(1%2)).toBe(1);
    expect(Math.floor(1/2)).toBe(0);
  });
});
