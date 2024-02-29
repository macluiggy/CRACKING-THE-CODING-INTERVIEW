// function threeSum(nums: number[]): number[][] {
//   let res = [];
//   for (let i = 0; i < nums.length; i++) {
//     const element = nums[i];
//     for (let j = i + 1; j < nums.length; j++) {
//       const element = nums[j];
//       for (let k = j + 1; k < nums.length; k++) {
//         if (nums[i] + nums[j] + nums[k] === 0 && i !== j && i != k && j != k)
//           res.push([nums[i], nums[j], nums[k]]);
//       }
//     }
//   }
//   return res;
// }
function threeSum(nums: number[]): number[][] {
  let res: any[] = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    let a = nums[i];
    if (i > 0 && a == nums[i - 1]) {
      continue;
    }
    let [l, r] = [i + 1, nums.length - 1];
    while (l < r) {
      let threeSum = a + nums[l] + nums[r];
      if (threeSum > 0) {
        r--;
      } else if (threeSum < 0) {
        l++;
      } else {
        res.push([a, nums[l], nums[r]]);
        l++;
        while (nums[l] == nums[l - 1] && l < r) {
          l++;
        }
      }
    }
  }
  return res;
}
console.log(threeSum([-1, 0, 1, 2, -1, -4]));
