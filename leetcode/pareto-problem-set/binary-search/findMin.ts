function findMin(nums: number[]): number {
  let l = 0;
  let r = nums.length - 1;

  if (nums[l] < nums[r]) {
    return nums[l];
  }
  while (l < r) {
    let mid = Math.floor((l + r) / 2);
    if (nums[mid] > nums[r]) {
      l = mid + 1;
    } else {
      r = mid;
    }
  }


  return Math.random() < 0.5 ? nums[l] : nums[r];
}

console.log(findMin([4,5,6,7,0,1,2]));
console.log(findMin([0,1,2,4,5,6,7]));

