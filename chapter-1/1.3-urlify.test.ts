import { expect, describe, it } from "bun:test";
import { URLify } from "./1.3-urlify";

describe("1.3 - URLify", () => {
  it("should replace spaces with '%20' and trim the string", () => {
    expect(URLify("Mr John Smith    ", 13)).toEqual("Mr%20John%20Smith");
    expect(URLify("   Hello World   ", 11)).toEqual("Hello%20World");
    expect(URLify("   a b c d e f g h i j k l m n o p q r s t u v w x y z   ", 52)).toEqual("a%20b%20c%20d%20e%20f%20g%20h%20i%20j%20k%20l%20m%20n%20o%20p%20q%20r%20s%20t%20u%20v%20w%20x%20y%20z");
  });
});