function threeSum(nums: number[]): number[][] {
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      const element = nums[j];
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[i] + nums[j] + nums[k] === 0)
          res.push([nums[i], nums[j], nums[k]]);
      }
    }
  }
  return res;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
