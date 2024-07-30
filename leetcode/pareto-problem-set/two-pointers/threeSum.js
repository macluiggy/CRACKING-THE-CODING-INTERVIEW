function threeSum(nums) {
  console.time()
  let left1 = 0;
  let left2 = 1;
  let right = nums.length - 1;

  let ans = [];

  nums.sort((a, b) => a - b);
let count  = 0
  while (left1 < left2 ||left2 < right) {
    let [numL1, numL2, numR] = [nums[left1], nums[left2], nums[right]];
    let sum = numL1 + numL2 + numR;

    if (sum > 0) {
      right--;
    } else if (sum < 0) {
      left1++;
      left2++;
    } else {
      ans.push([numL1, numL2, numR]);
    }
    count++
    if (count > 9999999) {
      break
    }
  }
  console.log(count);
  console.timeEnd()
  

  return ans;
}
threeSum([-1, 0, 1, 2, -1, -4])
// console.log(threeSum([-1, 0, 1, 2, -1, -4]));
