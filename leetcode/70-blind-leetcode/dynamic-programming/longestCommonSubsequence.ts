function longestCommonSubsequence(text1: string, text2: string): number {
  const text2Map = new Map();
  for (let i = 0; i < text2.length; i++) {
    const char = text2[i];
    text2Map.set(char, text2Map.get(char) || 0 + 1);
  }
  console.log(text2Map);
  const dp: any = [];
  for (let i = 0; i < text1.length; i++) {
    const char = text1[i];
    if (text2Map.get(char)) {
      text2Map.set(char, text2Map.get(char) - 1);
      dp[text2.charCodeAt(i)]++
    }
  }
  console.log(dp);
  let max = Math.max(dp)
  console.log(max);
  
}

const text1 = "abcde",
  text2 = "ace";
console.log(longestCommonSubsequence(text1, text2));
