function longestConsecutive(nums: number[]): number {
  const numsSet = new Set(nums);
  let longestStreak = 0;

  for (let num of numsSet) {
    if (!numsSet.has(num - 1)) { // check if current number is the start of a sequence
      let length = 0

      while (numsSet.has(length + 1)) { // check if next number in sequence exists
        length++
      }

      longestStreak = Math.max(longestStreak, length);
    }
  }

  return longestStreak;
}