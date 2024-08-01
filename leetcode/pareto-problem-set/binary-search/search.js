function search(nums, target){
  let l = 0;
  let r = nums.length - 1;
  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    if (nums[mid] > target) {
      r = mid - 1;
    } else if (nums[mid] < target) {
      l = mid + 1;
    } else {
      return mid;
    }
  }

  return -1;
}
// function search(nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === target) {
//       return i;
//     }
//   }
//   return -1;
// }
console.time();
const array = Array.from({ length: 20000000 }, (_, index) => index);
console.log(search(array, 19999999));
console.timeEnd();
