function runningSum(nums: number[]): number[] {
  let sum = 0;
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    sum += num;
    res.push(sum);
  }

  return res
}
console.log(runningSum([1,2,3,4]));
