function maxArea(height: number[]): number {
  let max = -Infinity;
  for (let i = 0; i < height.length; i++) {
    const h1 = height[i];
    const [p1x, p1y] = [i, h1];
    for (let j = 0; j < height.length; j++) {
      const h2 = height[j];
      const [p2x, p2y] = [j, h2];
      let maxpY = Math.max(p2y, p1y);
      let p = [p2x - p1x, maxpY - Math.abs(p2y - p1y)];
      max = Math.max(max, p[0] * p[1]);
    }
  }
  return max
}

console.log(maxArea([1,8,6,2,5,4,8,3,7]));
