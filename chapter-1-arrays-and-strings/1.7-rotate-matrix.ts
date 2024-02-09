const rotateMatrix = (matrix: number[][]) => {
  const clonMatrix = JSON.parse(JSON.stringify(matrix));
  const n = matrix.length;
  for (let i = 0; i < clonMatrix.length; i++) {
    for (let j = 0; j < clonMatrix[i].length; j++) {
      clonMatrix[j][n - i - 1] = matrix[i][j];
    }
  }

  return clonMatrix;
}; // both space and time complexity is o(n^2) so the big of for this one is o(n^2) + o(n^2) thas is equal as o(n^2)

function rotate(matrix: number[][]) {
  if (matrix.length === 0 || matrix.length !== matrix[0].length) return false;
  let n = matrix.length;

  for (let layer = 0; layer < n / 2; layer++) {
    let first = layer;
    let last = n - 1 - layer;

    for (let i = first; i < last; i++) {
      let offset = i - first;
      let top = matrix[first][i]; // save top

      // left -> top
      matrix[first][i] = matrix[last - offset][first];

      // bottom -> left
      matrix[last - offset][first] = matrix[last][last - offset];

      // right -> bottom
      matrix[last][last - offset] = matrix[i][last];

      // top -> right
      matrix[i][last] = top; // right <- saved top
    }
  }

  return matrix;
} // this one is o(1) + o(n^2) = o(n^2), o(1) respecting the space since it doesnt have to create a clone of the original array

export { rotateMatrix, rotate };
