function lengthOfLIS(nums: number[]): number {
  let arr: number[][] = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i == j) continue;
      if (nums[i] < nums[j]) {
        if (!arr[i]) {
          arr[i] = [nums[i]];
        }
        arr[i].push(nums[j]);
      }
    }
  }
  let arrLengths = arr.map((subArr: number[]) => subArr.length);
  let max = Math.max(...arrLengths);
  return max
}

console.log(lengthOfLIS([10,9,2,5,3,7,101,18]));
