import { expect, describe, it } from "bun:test";
import countStudents from "./countStudents";

describe("countStudents", () => {
  it("should return the number of students who can eat their sandwiches", () => {
    expect(countStudents([1, 1, 0, 0], [0, 1, 0, 1])).toEqual(0);
    expect(countStudents([1, 1, 1, 0, 0, 1], [1, 0, 0, 0, 1, 1])).toEqual(3);
    expect(countStudents([1, 1, 1, 1, 1], [1, 1, 1, 1, 1])).toEqual(0);
    expect(countStudents([0, 0, 0, 0, 0], [1, 1, 1, 1, 1])).toEqual(5);
  });
});

