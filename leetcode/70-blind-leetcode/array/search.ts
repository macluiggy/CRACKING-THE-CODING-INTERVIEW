// function findMin(nums: number[]): number {
//   if (nums.length==1) return nums[0]
//   let left = 0;
//   let right = nums.length - 1;
//   let min = Infinity;

//   // while (left <= right) {
//   //   let mid = Math.floor((left + right) / 2);

//   //   // if (nums[mid] === target) {
//   //   //   return mid;
//   //   // } else if (nums[mid] < target) {
//   //   //   left = mid + 1;
//   //   // } else {
//   //   //   right = mid - 1;
//   //   // }
//   //   left++;
//   //   right--;
//   //   if (nums[left] <= nums[right]) {
//   //     break
//   //   }
//   // }
//   // min = Math.min(left, right);
//   // console.log(min);
//   while (left <= right) {
//     let mid = Math.floor((left + right) / 2);

//     left++;
//     right--;
//     if (nums[left] <= nums[right]) {
//       break;
//     }
//   }
//   console.log(left, right);

//   min = Math.min(nums[left], nums[right]);
//   return min;
// }

// function binarySearch(nums: number[], target: number): number {
//   let left = 0;
//   let right = nums.length - 1;

//   while (left <= right) {
//     let mid = Math.floor((left + right) / 2);

//     if (nums[mid] === target) {
//       return mid;
//     } else if (nums[mid] < target) {
//       left = mid + 1;
//     } else {
//       right = mid - 1;
//     }
//   }

//   return -1;  // return -1 if the target is not found
// }

function search(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] == target) {
      return mid;
    }
    if (nums[mid] >= nums[left]) {
      // if (target < nums[left] || target > nums[mid]) {
      //   left = mid + 1;
      // } else {
      //   right = mid - 1;
      // }
      if (target >= nums[left] && target <= nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      // if (target > nums[right] || target < nums[mid]) {
      //   right = mid - 1;
      // } else {
      //   left = mid + 1;
      // }
      if (target >= nums[mid] && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return -1;
}
console.log(search([4, 5, 6, 7, 0, 1, 2], 0));
