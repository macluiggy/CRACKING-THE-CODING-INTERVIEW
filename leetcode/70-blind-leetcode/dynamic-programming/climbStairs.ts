function climbStairs(n: number): number {
  let [one, two] = [1, 1];

  for (let i = 0; i < n; i++) {
    let temp = one;
    one = one + two;
    two = temp;
  }
  return one;
}
