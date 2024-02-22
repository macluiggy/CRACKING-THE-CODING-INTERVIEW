function maxSubArray(nums: number[]): number {
  if (isEveryNumberNegative(nums)) {
    let absValues = nums.map((num) => Math.abs(num));
    return -Math.min(...absValues);
  }
  if (nums.length == 1) return nums[0];
  let max = -Infinity;
  let sum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    const element = nums[i];
    if (sum >= nums[i]) {
      sum += nums[i];
    } else {
      sum = nums[i];
    }
    max = Math.max(sum, max);
  }

  return max;
}
function isEveryNumberNegative(nums: number[]) {
  return nums.every((num) => num < 0);
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
