// function maxArea(height: number[]): number {
//   let max = -Infinity;
//   for (let i = 0; i < height.length; i++) {
//     const h1 = height[i];
//     const [p1x, p1y] = [i, h1];
//     for (let j = i; j < height.length; j++) {
//       const h2 = height[j];
//       const [p2x, p2y] = [j, h2];
//       let p = [p2x - p1x, Math.min(p2y, p1y)];
//       max = Math.max(max, p[0] * p[1]);
//     }
//   }
//   return max
// }
function maxArea(height: number[]): number {
  let max = 0;
  let l = 0;
  let r = height.length - 1;
  while (l < r) {
    let lHeight = height[l];
    let rHeight = height[r];
    let area = (r - l) * Math.min(lHeight, rHeight);
    max = Math.max(max, area);
    if (lHeight < rHeight) {
      l++;
    } else {
      r--;
    }
  }
  return max
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
