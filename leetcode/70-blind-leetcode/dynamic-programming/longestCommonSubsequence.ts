function longestCommonSubsequence(text1: string, text2: string): number {
  const m = text1.length;
  const n = text2.length;
  const l: any = [];
  for (let i = 0; i <= m; i++) {
    l[i] = []; // {1}
    for (let j = 0; j <= n; j++) {
      l[i][j] = 0; // {2}
    }
  }
  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      if (i === 0 || j === 0) {
        l[i][j] = 0;
      } else if (text1[i - 1] === text2[j - 1]) {
        l[i][j] = l[i - 1][j - 1] + 1; // {3}
      } else {
        const a = l[i - 1][j];
        const b = l[i][j - 1];
        l[i][j] = a > b ? a : b; // {4} max(a,b)
      }
    }
  }
  console.log(l);
  
  return l[m][n]; // {5}
}

const text1 = "abcde",
  text2 = "ace";
console.log(longestCommonSubsequence(text1, text2));
