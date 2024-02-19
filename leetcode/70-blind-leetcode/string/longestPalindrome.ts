function longestPalindrome(s: string): string {
  let substrings = [];
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < s.length; j++) {
      substrings.push(s.slice(i, j));
    }
  }
  let palindromes = substrings.filter(isPalindrome);
  let longestPalindrome = findLongestString(palindromes);
  return longestPalindrome;
}

const isPalindrome = (s: string) => s === s.split("").reverse().join("");
function findLongestString(arr: string[]): string {
  return arr.reduce((max, str) => (str.length > max.length ? str : max), "");
}

console.log(longestPalindrome("babad"));
