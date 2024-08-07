/**
 Do not return anything, modify board in-place instead.
 */
function solve(board: string[][]): void {
  const rows = board.length;
  const cols = board[0].length;
  const directions = [
    [-1, 0], // down
    [1, 0], // up
    [0, 1], // right
    [0, -1], // left
  ];

  const dfsAtLeastOneIsOutOfBounds = (
    i: number,
    j: number,
    visited: Set<string>
  ): boolean => {
    let visitedString = `${i}${j}`;
    // if at least one out of bounds then all dfs should return false
    let atLeastOneOutOfBounds = i < 0 || i >= rows || j < 0 || j >= cols;
    if (atLeastOneOutOfBounds) {
      return true;
    }
    if (visited.has(visitedString) || board[i][j] == "X") return false;

    visited.add(visitedString);

    for (const [dx, dy] of directions) {
      if (dfsAtLeastOneIsOutOfBounds(i + dx, j + dy, visited)) {
        return true;
      }
    }

    return false;
  };

  const VISITED = "X";
  const dfsConvertAllInIslandIntoX = (i: number, j: number) => {
    let outOfBoundsOrVisited =
      i < 0 || i >= rows || j < 0 || j >= cols || board[i][j] === VISITED;
    if (outOfBoundsOrVisited) return;
    board[i][j] = VISITED;
    for (const [dx, dy] of directions) {
      dfsConvertAllInIslandIntoX(dx + i, dy + j);
    }
  };

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      let visited = new Set<string>();
      if (board[i][j] === "O") {
        if (dfsAtLeastOneIsOutOfBounds(i, j, visited)) {
          continue;
        } else {
          dfsConvertAllInIslandIntoX(i, j);
        }
      }
    }
  }
}
solve([
  ["X", "X", "X", "X"],
  ["X", "O", "O", "X"],
  ["X", "X", "O", "X"],
  ["X", "O", "X", "X"],
]);
solve([["O"]]);
// solve([["O","O"],["O","O"]]);
