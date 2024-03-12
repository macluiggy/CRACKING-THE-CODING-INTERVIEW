/**
 Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix: number[][]): void {
  let jSet = new Set();
  let iSet = new Set();
  for (let i = 0; i < matrix.length; i++) {
    const row = matrix[i];
    for (let j = 0; j < row.length; j++) {
      const col = row[j];
      if (col == 0) {
        jSet.add(j);
        iSet.add(i);
      }
    }
  }
  let matrixCopy = JSON.parse(JSON.stringify(matrix));
  for (let i = 0; i < matrix.length; i++) {
    const row = matrix[i];
    let changeAllValuesOfJInI = iSet.has(i);
    let changeAllValuesOfIinJ = false;
    for (let j = 0; j < row.length; j++) {
      if (changeAllValuesOfJInI) {
        matrix[i][j] = 0;
      }
      if (jSet.has(j)) {
        matrix[i][j] = 0
      }
    }
  }
  console.log(matrix);
}
setZeroes([[0,1,2,0],[3,4,5,2],[1,3,1,5]]);
