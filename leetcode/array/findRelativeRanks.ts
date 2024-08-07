function findRelativeRanks(score: number[]): string[] {
  let copy: number[] = JSON.parse(JSON.stringify(score));
  copy.sort((a, b) => b - a);
  const hasMap: any = {};
  let result = [];
  for (let i = 0; i < copy.length; i++) {
    const s = copy[i];
    hasMap[s] = i;
  }

  for (let i = 0; i < score.length; i++) {
    const s = score[i];
    if (hasMap[s] === 0) {
      result[i] = "Gold Medal";
    } else if (hasMap[s] === 1) result[i] = "Silver Medal";
    else if (hasMap[s] === 2) result[i] = "Bronze Medal";
    else result[i] = (hasMap[s] + 1).toString();
  }

  return result;
}

console.log(findRelativeRanks([10, 3, 8, 9, 4]));
