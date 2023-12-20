import { expect, describe, it } from "bun:test";
import RecentCounter from "./recentCounter";

describe("RecentCounter", () => {
  it("should return the number of pings within the last 3000 milliseconds", () => {
    const recentCounter = new RecentCounter();
    expect(recentCounter.ping(1)).toEqual(1);
    expect(recentCounter.ping(100)).toEqual(2);
    expect(recentCounter.ping(3001)).toEqual(3);
    expect(recentCounter.ping(3002)).toEqual(3);
    expect(recentCounter.ping(7000)).toEqual(1);
  });
});
