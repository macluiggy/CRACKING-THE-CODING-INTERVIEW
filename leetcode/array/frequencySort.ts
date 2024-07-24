function frequencySort(nums: number[]): number[] {
  const map: { [key: number]: number } = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    map[num] = (map[num] || 0) + 1;
  }
  return nums.sort((a, b) => {
    if (map[a] === map[b]) return b - a;
    return map[a] - map[b];
  });
}

console.log(frequencySort([1, 1, 2, 2, 2, 3]));
