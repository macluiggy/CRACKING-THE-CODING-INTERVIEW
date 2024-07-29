function twoSum(nums: number[], target: number) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let sum = nums[left] + nums[right];
    if (sum > target) {
      right--;
    } else if (sum < target) {
      left++;
    } else {
      return [left + 1, right + 1];
    }
  }
  return [];
}
console.log(twoSum([2, 7, 11, 15], 9));
