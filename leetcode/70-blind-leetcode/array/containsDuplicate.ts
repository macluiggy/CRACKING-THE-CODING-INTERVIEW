function containsDuplicate(nums: number[]): boolean {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (map.get(num)) {
      return !false;
    }
    map.set(num, (map.get(num) || 0) + 1);
  }

  return !true;
}

console.log(containsDuplicate([1, 2, 3, 1]));
