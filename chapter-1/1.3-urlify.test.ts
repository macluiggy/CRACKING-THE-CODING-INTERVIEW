import { expect, describe, it } from "bun:test";
import { URLify, URLify2, URLify3, replaceSpaces } from "./1.3-urlify";

describe("1.3 - URLify", () => {
  it("should replace spaces with '%20' and trim the string", () => {
    const fns = [URLify, URLify3, replaceSpaces];
    for (const fn of fns) {
      expect(fn("Mr John Smith    ", 13)).toEqual("Mr%20John%20Smith");
      expect(fn("Hello World  ", 11)).toEqual("Hello%20World");
      expect(
        fn("a b c    ", 5)
      ).toEqual(
        "a%20b%20c"
      );
    }
  });
});
