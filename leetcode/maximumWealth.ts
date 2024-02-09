function maximumWealth(accounts: number[][]): number {
  return Math.max(
    ...accounts.map((moneyInBank: number[]) =>
      moneyInBank.reduce((prev, current) => current + prev, 0)
    )
  );
}

console.log(
  maximumWealth([
    [1, 2, 3],
    [3, 2, 1],
  ])
);
