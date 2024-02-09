function smallestEvenMultiple(n: number): number {
  if (n % 2 === 0) {
    return n;
  } else {
    return 2 * n;
  }
}
