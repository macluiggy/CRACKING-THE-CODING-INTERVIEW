/**
 Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix: number[][]): void {
  let jSet = new Set();
  let iSet = new Set();
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        jSet.add(j);
        iSet.add(i);
      }
    }
  }
  for (let i = 0; i < matrix.length; i++) {
    if (iSet.has(i)) {
      matrix[i] = new Array(matrix[0].length).fill(0);
      continue;
    }
    for (let j = 0; j < matrix[i].length; j++) {
      if (jSet.has(j)) {
        matrix[i][j] = 0;
      }
    }
  }
}
setZeroes([
  [0, 1, 2, 0],
  [3, 4, 5, 2],
  [1, 3, 1, 5],
]);
