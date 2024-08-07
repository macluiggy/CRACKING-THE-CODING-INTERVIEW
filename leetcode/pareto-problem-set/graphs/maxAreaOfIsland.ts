function maxAreaOfIsland(grid: number[][]): number {
  const rows = grid.length;
  const cols = grid[0].length;

  const VISITED = 0;

  const dfs = (i: number, j: number) => {
    let sum = 0;
    if (i < 0 || i >= rows || j < 0 || j >= cols || grid[i][j] === VISITED) {
      return 0;
    }

    grid[i][j] = VISITED;

    sum += dfs(i + 1, j);
    sum += dfs(i - 1, j);
    sum += dfs(i, j + 1);
    sum += dfs(i, j - 1);
    return sum + 1;
  };

  let max = 0;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === 1) {
        max = Math.max(max, dfs(i, j));
      }
    }
  }

  return max;
}

console.log(
  maxAreaOfIsland([
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
  ])
);
console.log(maxAreaOfIsland([[0, 0, 0, 0, 0, 0, 0, 0]]));
