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

function findMin(nums: number[]): number {
  let left = 0;
  let right = nums.length - 1;

  // If the array is not rotated, return the first element
  if (nums[left] < nums[right]) {
    return nums[left];
  }

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    // If mid element is greater than the element at right, minimum must be in the right half
    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else {
      // If mid element is less than or equal to the element at right, minimum must be in the left half including mid
      right = mid;
    }
  }

  // The loop will terminate when left == right, which will be the minimum element
  return nums[left];
}
console.log(findMin([3,1,2]));
