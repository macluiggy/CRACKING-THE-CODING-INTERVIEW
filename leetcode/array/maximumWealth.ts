function maximumWealth(accounts: number[][]): number {
  let max = -Infinity;

  for (let i = 0; i < accounts.length; i++) {
    const account = accounts[i];
    max = Math.max(
      max,
      account.reduce((prev, curr, i) => prev + curr, 0)
    );
  }

  return max
}

console.log(maximumWealth([[1,2,3],[3,2,1]]));
