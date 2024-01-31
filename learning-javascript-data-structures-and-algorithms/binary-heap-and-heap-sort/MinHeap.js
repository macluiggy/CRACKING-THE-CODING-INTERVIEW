import { Compare, defaultCompare, swap } from "../util";
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
}

const heap = new MinHeap();
heap.insert(2);
heap.insert(3);
heap.insert(4);
heap.insert(5);
heap.insert(1);
