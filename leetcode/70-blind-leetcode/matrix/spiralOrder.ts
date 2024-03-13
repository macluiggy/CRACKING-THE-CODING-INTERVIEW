// function spiralOrder(matrix: number[][]): number[] {
//   let ans = [];
//   let fromUpRight = true;
//   let i = 0;
//   let length = matrix.length;
//   while (matrix.length) {
//     if (fromUpRight && i == 0) {
//       ans.push(...matrix.shift());
//       continue;
//     }
//     if (fromUpRight && i !== length) {
//       ans.push(matrix[i].pop());
//       i++
//       if (i === length) {
//         fromUpRight = false;
//       }
//       continue;
//     }
//     if (!fromUpRight && i >= 0) {
//       ans.push(...matrix.pop()?.reverse());
//       fromUpRight = true;
//       length = matrix.length;
//       i--;
//       continue;
//     }
//   }
//   return ans;
// }
function spiralOrder(matrix: number[][]): number[] {
  let ans: number[] = [];
  let left = 0;
  let right = matrix[0].length;
  let top = 0;
  let botton = matrix.length;

  while (left < right && top < botton) {
    for (let i = left; i < right; i++) {
      ans.push(matrix[top][i]);
    }
    top++;
    for (let i = top; i < botton; i++) {
      ans.push(matrix[i][right - 1]);
    }
    right--;
    let bool = left < right && top < botton;
    if (!bool) break;
    for (let i = right - 1; i >= left; i--) {
      ans.push(matrix[botton - 1][i]);
    }
    botton--;
    for (let i = botton - 1; i >= top; i--) {
      ans.push(matrix[i][left]);
    }
    left++;
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
