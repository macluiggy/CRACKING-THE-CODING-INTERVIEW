// function rob(nums: number[]): number {
//   let max1 = 0;
//   for (let i = 0; i < nums.length; i++) {
//     const num = nums[i];
//     if (i % 2 == 0) {
//       max1 += num;
//     }
//   }
//   let max2 = 0;
//   for (let i = 0; i < nums.length; i++) {
//     const num = nums[i];
//     if (i % 2 !== 0) {
//       max2 += num;
//     }
//   }
//   let max = Math.max(max1, max2)
//   return max
// }
function rob(nums: number[]): number {
  let prev1 = 0;
  let prev2 = 0;
  let dp = 0;

  for (const house of nums) {
    dp = Math.max(prev1, prev2 + house);
    prev2 = prev1;
    prev1 = dp;
  }
  return dp;
}

console.log(rob([1, 2, 3, 1]));

function rob2(nums: number[]): number {
  let prev1 = 0;
  let prev2 = 0;
  let best1 = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    const num = nums[i];
    best1 = Math.max(prev1, prev2 + num);
    prev2 = prev1;
    prev1 = best1;
  }
  prev1 = 0;
  prev2 = 0;
  let best2 = 0;
  for (let i = 1; i < nums.length; i++) {
    const num = nums[i];
    best1 = Math.max(prev1, prev2 + num);
    prev2 = prev1;
    prev1 = best2;
  }

  return Math.max(best1, best2);
}


console.log(rob2([1, 2, 3, 1]));