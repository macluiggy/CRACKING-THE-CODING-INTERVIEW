function countPairs(nums: number[], k: number): number {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    const numI = nums[i];
    for (let j = 0; j < nums.length; j++) {
      const numJ = nums[j];
      if (i < j && j < nums.length && nums[i] === nums[j] && (i * j) % k === 0)
        count++;
    }
  }

  return count
}
console.log(countPairs([3,1,2,2,2,1,3], 2));
