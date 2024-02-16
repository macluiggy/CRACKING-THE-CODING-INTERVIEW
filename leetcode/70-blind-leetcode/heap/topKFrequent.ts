function topKFrequent(nums: number[], k: number): number[] {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    map.set(num, (map.get(num) || 0) + 1);
  }
  let ans = [];
  for (let i = 0; i < k; i++) {
    let max = 0;
    let maxKey = 0;
    for (let [key, value] of map.entries()) {
      max = Math.max(max, value);
      if (max == value) {
        maxKey = key;
      }
    }
    map.delete(maxKey);
    ans.push(maxKey);
  }
  // console.log(ans);
  return ans;
}

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
