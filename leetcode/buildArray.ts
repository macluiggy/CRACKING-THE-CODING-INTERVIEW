function buildArray(nums: number[]): number[] {
  let ans = [];
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    ans[i] = nums[num];
  }
  return ans;
}
const nums = [0, 2, 1, 5, 3, 4];
console.log(buildArray(nums));
