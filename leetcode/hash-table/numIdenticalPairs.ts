function numIdenticalPairs(nums: number[]): number {
  const map = new Map();
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    const numi = nums[i];
    // map.set(num, map.get(num) || 0);
    for (let j = 0; j < nums.length; j++) {
      const numj = nums[j];
      if (i === j) {
        continue;
      }
      if (numi === numj) {
        count++;
      }
    }
  }
  return count / 2;
}

export default numIdenticalPairs;
