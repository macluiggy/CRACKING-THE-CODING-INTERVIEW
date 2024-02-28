// function twoSum(nums: number[], target: number): number[] {
//   let res: number[] = [];
//   for (let i = 0; i < nums.length; i++) {
//     const element = nums[i];
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] == target) res = [i, j];
//     }
//   }
//   return res;
// }

// function twoSum(nums: number[], target: number): number[] {
//   let map = new Map();
//   for (let i = 0; i < nums.length; i++) {
//     map.set(nums[i], i);
//   }
//   for (let i = 0; i < nums.length; i++) {
//     let subtraction = target - nums[i];
//     let j = map.get(subtraction);
//     if (j !== undefined && i !== j) {
//       return [i, j];
//     }
//   }
// }
function twoSum(nums: number[], target: number): number[] {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let subtraction = target - nums[i];
    if (map.has(subtraction)) {
      let j = map.get(subtraction);
      return [i, j];
    }
    map.set(nums[i], i);
  }
  return []
}

// console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([1, 3, 4, 2], 6));
