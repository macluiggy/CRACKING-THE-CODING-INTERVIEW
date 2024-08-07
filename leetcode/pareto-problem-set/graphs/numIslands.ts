function numIslands(grid: string[][]): number {
  const rows = grid.length;
  const cols = grid[0].length;
  let c = 0;

  const VISITED = "0";  

  const dfs = (i: number, j: number) => {
    if (i < 0 || i >= rows || j < 0 || j >= cols || grid[i][j] === VISITED) {
      return;
    }

    grid[i][j] = VISITED;

    dfs(i + 1, j);
    dfs(i - 1, j);
    dfs(i, j + 1);
    dfs(i, j - 1);
  };

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === "1") {
        c++;
        dfs(i, j);
      }
    }
  }

  return c;
}

console.log(
  numIslands([
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"],
  ])
);
