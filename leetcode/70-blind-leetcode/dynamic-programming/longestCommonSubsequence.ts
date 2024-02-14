function longestCommonSubsequence(text1: string, text2: string): number {
  let dp = new Array(text1.length + 1).fill(
    new Array(text2.length + 1).fill(0)
  );

  for (let i = text1.length - 1; i >= 0; i--) {
    for (let j = text2.length - 1; j >= 0; j--) {
      if (text1[i] == text2[j]) {
        dp[i][j] = dp[i + 1][j + 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i + 1][j], dp[i][j + 1]);
      }
    }
  }
  return dp[0][0];
}

const text1 = "abcde",
  text2 = "ace";
console.log(longestCommonSubsequence(text1, text2));
