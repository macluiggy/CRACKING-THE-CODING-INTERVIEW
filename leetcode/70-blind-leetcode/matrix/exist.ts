function exist(board: string[][], word: string): boolean {
  const [ROWS, COLS] = [board.length, board[0].length];
  let path = new Set();

  const dfs: any = (r, c, i) => {
    let pathrc = `${r}-${c}`;
    if (i === word.length) return true;
    if (
      r < 0 ||
      c < 0 ||
      r > ROWS ||
      c > COLS ||
      word[i] !== board[r][c] ||
      path.has(pathrc)
    )
      return false;
      path.add(pathrc)
    let res: boolean =
      dfs(r + 1, c, i + 1) ||
      dfs(r - 1, c, i + 1) ||
      dfs(r, c + 1, i + 1) ||
      dfs(r, c - 1, i + 1);
    path.delete(pathrc);
    return res;
  };
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      if (dfs(r, c, 0)) return true;
    }
  }
  return false;
}

console.log(
  exist(
    [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ],
    "ABCCED"
  )
);
