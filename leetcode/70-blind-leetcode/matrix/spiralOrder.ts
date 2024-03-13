function spiralOrder(matrix: number[][]): number[] {
  let ans = [];
  let fromUpRight = true;
  let i = 0;
  let length = matrix.length;
  while (matrix.length) {
    if (fromUpRight && i == 0) {
      ans.push(...matrix.shift());
      continue;
    }
    if (fromUpRight && i !== length) {
      ans.push(matrix[i].pop());
      i++
      if (i === length) {
        fromUpRight = false;
      }
      continue;
    }
    if (!fromUpRight && i >= 0) {
      ans.push(...matrix.pop()?.reverse());
      fromUpRight = true;
      length = matrix.length;
      i--;
      continue;
    }
  }
  return ans;
}

console.log(
  spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
