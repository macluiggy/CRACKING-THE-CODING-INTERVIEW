function minCoinChange(coins, amount) {
  const cache = []; // {1}
  const makeChange = (value) => {
    // {2}
    if (!value) {
      // {3}
      return [];
    }
    if (cache[value]) {
      // {4}
      return cache[value];
    }
    let min = [];
    let newMin;
    let newAmount;
    for (let i = 0; i < coins.length; i++) {
      // {5}
      const coin = coins[i];
      newAmount = value - coin; // {6}
      if (newAmount >= 0) {
        newMin = makeChange(newAmount); // {7}
      }
      if (
        newAmount >= 0 && // {8}
        (newMin.length < min.length - 1 || !min.length) && // {9}
        (newMin.length || !newAmount) // {10}
      ) {
        min = [coin].concat(newMin); // {11}
        // console.log("new Min " + min + " for " + amount);
      }
    }
    return (cache[value] = min); // {12}
  };
  return makeChange(amount); // {13}
}
function minCoinChange2(coins, amount) {
  const change = [];
  let total = 0;
  for (let i = coins.length; i >= 0; i--) {
    // {1}
    const coin = coins[i];
    while (total + coin <= amount) {
      // {2}
      change.push(coin); // {3}
      total += coin; // {4}
    }
  }
  return change;
}

console.log(minCoinChange([1, 5, 10, 25], 36));
console.log(minCoinChange2([1, 5, 10, 25], 36));
console.log(minCoinChange([1, 3, 4], 6));
console.log(minCoinChange2([1, 3, 4], 6));

function solveSudoku(board) {
  if (!board || board.length === 0) {
    return;
  }
  solve(board);
}

function solve(board) {
  const n = board.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === '.') {
        for (let num = 1; num <= 9; num++) {
          if (isValid(board, i, j, num.toString())) {
            board[i][j] = num.toString();
            if (solve(board)) {
              return true;
            } else {
              board[i][j] = '.';
            }
          }
        }
        return false;
      }
    }
  }
  return true;
}

function isValid(board, row, col, num) {
  for (let i = 0; i < 9; i++) {
    if (board[i][col] === num) {
      return false;
    }
    if (board[row][i] === num) {
      return false;
    }
    if (
      board[3 * Math.floor(row / 3) + Math.floor(i / 3)][
        3 * Math.floor(col / 3) + (i % 3)
      ] === num
    ) {
      return false;
    }
  }
  return true;
}

const board = [
  ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
];

solveSudoku(board);

console.log(board);
