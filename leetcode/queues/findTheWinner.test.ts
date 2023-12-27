import { expect, describe, it } from "bun:test";
import findTheWinner from "./findTheWinner";

describe("findTheWinner", () => {
  it("should return the winner's number", () => {
    expect(findTheWinner(5, 2)).toEqual(3);
    expect(findTheWinner(5, 1)).toEqual(5)
    expect(findTheWinner(7, 3)).toEqual(4);
    // Add more test cases here
  });
});