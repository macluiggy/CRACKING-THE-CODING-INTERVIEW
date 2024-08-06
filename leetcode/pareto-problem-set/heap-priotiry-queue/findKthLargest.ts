import { getLargeArray } from "./largeArray";
import { MaxHeap } from "./MaxHeap";

function findKthLargest(nums: number[], k: number): number {
  const maxHeap = new MaxHeap();
  for (const num of nums) {
    maxHeap.insert(num);
  }
  let result = 0;
  while (k) {
    result = maxHeap.extractMax()!;
    k--;
  }
  return result;
}

function findKthLargestOn2(nums: number[], k: number): number {
  for (let i = 0; i < k; i++) {
    let maxIndex = 0;
    for (let j = 1; j < nums.length; j++) {
      if (nums[j] > nums[maxIndex]) {
        maxIndex = j;
      }
    }
    if (i === k - 1) {
      return nums[maxIndex];
    }
    nums.splice(maxIndex, 1);
  }
  return -1; // Esto no debería ocurrir si k es válido
}

console.time();
console.log(findKthLargestOn2(getLargeArray(), 63565));
console.timeEnd();
console.time();
console.log(findKthLargest(getLargeArray(), 63565));
console.timeEnd();
