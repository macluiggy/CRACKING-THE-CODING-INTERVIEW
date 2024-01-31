import { Compare, defaultCompare, swap } from "../util.js";
export class MinHeap {
  constructor(compareFn = defaultCompare) {
    this.compareFn = compareFn; // {1}
    this.heap = []; // {2}
  }
  getLeftIndex(index) {
    return 2 * index + 1;
  }
  getRightIndex(index) {
    return 2 * index + 2;
  }
  getParentIndex(index) {
    if (index === 0) {
      return undefined;
    }
    return Math.floor((index - 1) / 2);
  }
  insert(value) {
    if (value != null) {
      this.heap.push(value); // {1}
      this.siftUp(this.heap.length - 1); // {2}
      return true;
    }
    return false;
  }
  siftUp(index) {
    let parent = this.getParentIndex(index); // {1}
    while (
      index > 0 &&
      this.compareFn(this.heap[parent], this.heap[index]) > Compare.BIGGER_THAN
    ) {
      // {2}
      swap(this.heap, parent, index); // {3}
      index = parent;
      parent = this.getParentIndex(index); // {4}
    }
  }
  size() {
    return this.heap.length;
  }
  isEmpty() {
    return this.size() === 0;
  }
  findMinimum() {
    return this.isEmpty() ? undefined : this.heap[0]; // {1}
  }
  extract() {
    // console.log(this.heap);
    if (this.isEmpty()) {
      return undefined; // {1}
    }
    if (this.size() === 1) {
      return this.heap.shift(); // {2}
    }
    const removedValue = this.heap.shift(); // {3}
    this.siftDown(0); // {4}
    return removedValue; // {5}
  }
  siftDown(index) {
    let element = index;
    const left = this.getLeftIndex(index); // {1}
    const right = this.getRightIndex(index); // {2}
    // console.log(left, right, this.heap[left], this.heap[right]);
    const size = this.size();
    if (
      left < size &&
      this.compareFn(this.heap[element], this.heap[left]) > Compare.BIGGER_THAN
    ) {
      // {3}
      element = left; // {4}
    }
    if (
      right < size &&
      this.compareFn(this.heap[element], this.heap[right]) > Compare.BIGGER_THAN
    ) {
      // {5}
      element = right; // {6}
    }
    if (index !== element) {
      // {7}
      swap(this.heap, index, element); // {8}
      this.siftDown(element); // {9}
    }
  }
}

// const heap = new MinHeap();
// heap.insert(2);
// heap.insert(3);
// heap.insert(4);
// heap.insert(5);
// heap.insert(1);
// console.log("Heap size: ", heap.size()); // 5
// console.log("Heap is empty: ", heap.isEmpty()); // false
// console.log("Heap min value: ", heap.findMinimum()); // 1
// // In the max heap, the first index of the array will store the maximum value, so we c
// const heap = new MinHeap();
// for (let i = 1; i < 10; i++) {
//   heap.insert(i);
// }
// console.log("Extract minimum: ", heap.extract()); // 1
