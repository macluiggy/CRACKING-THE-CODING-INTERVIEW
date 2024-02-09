function countTestedDevices(batteryPercentages: number[]): number {
  let countTestedDevices = 0;
  const n = batteryPercentages.length;
  for (let i = 0; i < n; i++) {
    const batteryPercentage = batteryPercentages[i];
    if (batteryPercentage > 0) {
      countTestedDevices++;
      for (let j = i + 1; j <= n - 1; j++) {
        batteryPercentages[j] = Math.max(0, batteryPercentages[j] - 1);
      }
    }
  }
  return countTestedDevices;
}

console.log(countTestedDevices([1, 1, 2, 1, 3]));
