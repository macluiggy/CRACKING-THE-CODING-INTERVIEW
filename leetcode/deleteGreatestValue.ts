function deleteGreatestValue(grid: number[][]): number {
  let answer = 0;
  while (grid[0].length > 0) {
    let temp = [];
    for (let i = 0; i < grid.length; i++) {
      let maxVal = Math.max(...grid[i]);
      let maxIdx = grid[i].indexOf(maxVal);
      temp.push(maxVal);
      grid[i].splice(maxIdx, 1);
    }
    let maxVal = Math.max(...temp);
    answer += maxVal;
  }
  return answer;
}

import { MaxHeap } from './maxHeap'; // Assuming you have a MaxHeap class

// function deleteGreatestValue2(grid: number[][]): number {
//   let answer = 0;
//   let heap = new MaxHeap();
//   let indices = new Array(grid.length).fill(0);

//   // Initialize the heap with the maximum value from each row
//   for (let i = 0; i < grid.length; i++) {
//     heap.insert({ value: grid[i][0], row: i });
//     indices[i]++;
//   }

//   while (!heap.isEmpty()) {
//     let maxElement = heap.extractMax();
//     answer += maxElement.value;

//     let row = maxElement.row;
//     if (indices[row] < grid[row].length) {
//       heap.insert({ value: grid[row][indices[row]], row: row });
//       indices[row]++;
//     }
//   }

//   return answer;
// }

export {
  deleteGreatestValue,
  // deleteGreatestValue2
}