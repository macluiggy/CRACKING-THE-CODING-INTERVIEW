// function subarraySum(nums: number[], k: number): number {
//   let count = 0;
//   for (let i = 0; i < nums.length; i++) {
//     let sum = 0;
//     for (let j = i; j < nums.length; j++) {
//       sum += nums[j];
//       if (sum === k) {
//         count++;
//       }
//     }
//   }
//   return count;
// }
function subarraySum(nums: number[], k: number): number {
  let res = 0;
  let curSum = 0;
  let prefixSum: {
    [key: number]: number;
  } = { 0: 1 };
  let i =0
  for (let n of nums) {
    curSum += n;
    let diff = curSum - k;
    if (prefixSum[diff] !== undefined) {
      res += prefixSum[diff];
    }
    prefixSum[curSum] = (prefixSum[curSum] || 0) + 1;

    console.log(
      `i: ${i} res: ${res}, diff: ${diff}, curSum: ${curSum}, prefixSum: ${JSON.stringify(prefixSum, null, 2)}`
    );
    i++
  }

  return res;
}

console.log(subarraySum([1, 1, 1], 2));
// console.log(subarraySum([1, 2, 3], 3));
