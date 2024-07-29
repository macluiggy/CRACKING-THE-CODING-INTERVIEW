function buildMatrix(
  k: number,
  rowConditions: number[][],
  colConditions: number[][]
): number[][] {
  const ma
}

const k = 3;
const rowConditions = [
  [1, 2],
  [3, 2],
];
const colConditions = [
  [2, 1],
  [3, 2],
];

console.log(buildMatrix(k, rowConditions, colConditions));
