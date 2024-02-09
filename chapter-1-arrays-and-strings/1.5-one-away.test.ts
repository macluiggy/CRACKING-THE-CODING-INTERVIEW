import { expect, describe, it } from "bun:test";
import { oneWay } from "./1.5-one-away";

describe("1.5 - oneEditReplace", () => {
  it("should return true if the strings are one edit away", () => {
    for (let fn of [oneWay]) {
      expect(fn("pale", "ple")).toEqual(true);
      expect(fn("pales", "pale")).toEqual(true);
      expect(fn("pale", "bale")).toEqual(true);
    }
  });

  it("should return false if the strings are more than one edit away", () => {
    for (let fn of [oneWay]) {
      expect(fn("pale", "bake")).toEqual(false);
      expect(fn("pale", "palest")).toEqual(false);
      expect(fn("pale", "bales")).toEqual(false);
    }
  });
});
