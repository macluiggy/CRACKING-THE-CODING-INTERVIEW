function maximumWealth(accounts: number[][]): number {
    const a = accounts.map((moneyInBank: number[]) => {
      const sum = moneyInBank.reduce((prev, current) => current + prev, 0)
      return sum
    })
    let max = Math.max(...a)
    return max
};

console.log(maximumWealth([[1,2,3],[3,2,1]]));
