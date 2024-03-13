function spiralOrder(matrix: number[][]): number[] {
  let ans = [];
  let fromUpRight = true;
  let i = 0;
  let length = matrix.length;
  while (matrix.length) {
    // console.log(matrix);
    
    if (fromUpRight && i == 0) {
      ans.push(matrix.shift());
      // i++;
      continue;
    }
    if (fromUpRight && i !== length) {
      ans.push(matrix[i].pop());
      i++
      continue;
    }
    if (i === length) {
      ans.push(matrix.pop()?.reverse());
      fromUpRight = false
      length = matrix.length
      i--
      continue
    }
    if (!fromUpRight && i !==0) {
      ans.push(matrix[i].shift())
      i--
      continue
    }
    if (!fromUpRight && i == 0) {
      ans.push(matrix.shift())
      i++
      continue
    }
  }
  console.log(ans);
  
  return ans
}

console.log(
  spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
