import { MaxPriorityQueue, MaxHeap } from "datastructures-js";
// class MaxHeap {
//   private heap: number[];

//   constructor() {
//     this.heap = [];
//   }

//   insert(val: number) {
//     this.heap.push(val);
//     this.bubbleUp();
//   }

//   extractMax(): number | null {
//     if (this.heap.length === 0) return null;
//     if (this.heap.length === 1) return this.heap.pop()!;
//     const max = this.heap[0];
//     this.heap[0] = this.heap.pop()!;
//     this.bubbleDown();
//     return max;
//   }

//   private bubbleUp() {
//     let index = this.heap.length - 1;
//     const element = this.heap[index];
//     while (index > 0) {
//       const parentIndex = Math.floor((index - 1) / 2);
//       const parent = this.heap[parentIndex];
//       if (element <= parent) break;
//       this.heap[index] = parent;
//       index = parentIndex;
//     }
//     this.heap[index] = element;
//   }

//   private bubbleDown() {
//     let index = 0;
//     const length = this.heap.length;
//     const element = this.heap[0];
//     while (true) {
//       let leftChildIndex = 2 * index + 1;
//       let rightChildIndex = 2 * index + 2;
//       let leftChild, rightChild;
//       let swap = null;

//       if (leftChildIndex < length) {
//         leftChild = this.heap[leftChildIndex];
//         if (leftChild > element) {
//           swap = leftChildIndex;
//         }
//       }

//       if (rightChildIndex < length) {
//         rightChild = this.heap[rightChildIndex];
//         if (
//           (swap === null && rightChild > element) ||
//           (swap !== null && rightChild > leftChild!)
//         ) {
//           swap = rightChildIndex;
//         }
//       }

//       if (swap === null) break;
//       this.heap[index] = this.heap[swap];
//       index = swap;
//     }
//     this.heap[index] = element;
//   }

//   size() {
//     return this.heap.length;
//   }
// }

function lastStoneWeight(stones: number[]): number {
  let maxHeap = new MaxPriorityQueue<number>();
  for (let stone of stones) {
    maxHeap.enqueue(stone);
  }

  while (maxHeap.size() > 1) {
    const y = maxHeap.dequeue()!;
    const x = maxHeap.dequeue()!;
    if (y !== x) {
      maxHeap.enqueue(y - x);
    }
  }
  return maxHeap.size() === 0 ? 0 : maxHeap.dequeue()!;
}

console.log(lastStoneWeight([2, 7, 4, 1, 8, 1]));
