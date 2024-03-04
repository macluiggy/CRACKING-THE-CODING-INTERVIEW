function merge(intervals: number[][]): number[][] {
  intervals.sort((a, b) => a[0] - b[0]);
  let output = [intervals[0]];
  for (let i = 0; i < intervals.length; i++) {
    const [start, end] = intervals[i];
    let lastEnd = output[output.length - 1][1];
    if (start <= lastEnd) {
      output[output.length - 1][1] = Math.max(end, lastEnd);
    } else {
      output.push(intervals[i])
    }
  }
  return output
}
console.log(
  merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
);
