function luckyNumbers(matrix: number[][]): number[] {
  let minRows = [];
  let maxColumns = [];

  for (let i = 0; i < matrix.length; i++) {
    const row = matrix[i];
    const minInThisRow = Math.min(...row);
    minRows.push(minInThisRow);
    for (let j = 0; j < matrix.length; j++) {}
  }

  for (let j = 0; j < matrix[0].length; j++) {
    let maxInThisColumn = -Infinity;
    for (let i = 0; i < matrix.length; i++) {
      if (matrix[i][j] > maxInThisColumn) {
        maxInThisColumn = matrix[i][j];
      }
    }
    maxColumns.push(maxInThisColumn);
  }

  for (let i = 0; i < minRows.length; i++) {
    const row = minRows[i];
    for (let j = 0; j < maxColumns.length; j++) {
      const col = maxColumns[j];
      if (row === col) {
        return [row];
      }
    }
  }
  return [];

}
console.log(
  luckyNumbers([
    [3, 7, 8],
    [9, 11, 13],
    [15, 16, 17],
  ])
);
