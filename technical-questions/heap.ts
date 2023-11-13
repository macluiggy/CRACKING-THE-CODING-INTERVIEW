class MinHeap {
  heap: number[];

  constructor() {
    this.heap = []; // The heap starts empty.
  }

  // This is like adding a new block to the tower.
  insert(value: number): void {
    this.heap.push(value); // Put it at the end (last level, right-most available).
    this.heapifyUp(); // Make sure the tower follows rule #1.
  }

  // This is like removing the top block from the tower.
  extractMin(): number | null {
    if (this.heap.length === 0) {
      return null; // If the tower is empty, there's nothing to remove.
    }
    const min = this.heap[0]; // The top of the tower.
    this.heap[0] = this.heap.pop()!; // Replace the top with the last block added.
    this.heapifyDown(); // Make sure the tower follows rule #1 again.
    return min; // Return the smallest block.
  }

  // This is the process of moving the new block up until the tower is correct.
  private heapifyUp(): void {
    let index = this.heap.length - 1; // Start with the last block added.
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      // console.log(parentIndex);
      
      if (this.heap[parentIndex] > this.heap[index]) {
        // Swap with the parent block if it's bigger.
        [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
        index = parentIndex; // Move up one level in the tower.
      } else {
        break; // The block is in the right place, so stop.
      }
    }
  }

  // This is the process of moving the last block down until the tower is correct.
  private heapifyDown(): void {
    let index = 0; // Start with the new top of the tower.
    while (index < this.heap.length) {
      const leftChildIndex = index * 2 + 1;
      const rightChildIndex = index * 2 + 2;
      let smallestChildIndex = index;

      if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] < this.heap[smallestChildIndex]) {
        smallestChildIndex = leftChildIndex; // The left child is smaller.
      }
      if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[smallestChildIndex]) {
        smallestChildIndex = rightChildIndex; // The right child is smaller.
      }
      if (smallestChildIndex !== index) {
        // Swap with the smaller child block.
        [this.heap[smallestChildIndex], this.heap[index]] = [this.heap[index], this.heap[smallestChildIndex]];
        index = smallestChildIndex; // Move down to the child's level.
      } else {
        break; // The block is in the right place, so stop.
      }
    }
  }
}

// Now let's use our MinHeap.
let blockTower = new MinHeap(); // Create a new empty tower.
console.log(blockTower.heap); // The tower is empty.

blockTower.insert(3); // Add a block
console.log(blockTower.heap); // The tower has one block.
blockTower.insert(5); // Add another block
console.log(blockTower.heap); // The tower has two blocks.
blockTower.insert(1); // Add another block
console.log(blockTower.heap); // The tower has three blocks.
blockTower.insert(2); // Add another block
console.log(blockTower.heap); // The tower has four blocks.
blockTower.insert(4); // Add another block
console.log(blockTower.heap); // The tower has five blocks.
blockTower.insert(0); // Add another block
console.log(blockTower.heap); // The tower has six blocks.
blockTower.insert(7); // Add another block
console.log(blockTower.heap); // The tower has seven blocks.
blockTower.insert(6); // Add another block
console.log(blockTower.heap); // The tower has eight blocks.
blockTower.insert(2); // Add another block
console.log(blockTower.heap); // The tower has nine blocks.
blockTower.extractMin(); // Remove the top block
console.log(blockTower.heap); // The tower has eight blocks.
