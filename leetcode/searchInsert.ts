function searchInsert(nums: number[], target: number): number {
  let low = 0;
  let high = nums.length - 1;
  while (low <= high) {
    const middle = Math.floor((low + high) / 2);
    console.log(middle);
    
    const middleElement = nums[middle];
    if (middleElement < target) {
      low = middle + 1;
    } else if (middleElement > target) {
      high = middle - 1;
    } else {
      return middle;
    }
  }
}

export default searchInsert;
