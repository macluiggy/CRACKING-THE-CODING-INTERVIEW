import { MaxHeap } from "./MaxHeap";

function findKthLargest(nums: number[], k: number): number {
  const maxHeap = new MaxHeap();
  for (const num of nums) {
    maxHeap.insert(num);
  }
  let result = 0;
  while (k) {
    result = maxHeap.extractMax()!;
    k--
  }
  return result;
}

console.log(findKthLargest([3,2,1,5,6,4], 2));
