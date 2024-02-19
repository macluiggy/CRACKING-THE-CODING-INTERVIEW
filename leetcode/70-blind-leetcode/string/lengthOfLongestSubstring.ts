// function lengthOfLongestSubstring(s: string): number {
//   let str = "";
//   let arrString = [];
//   for (let i = 0; i < s.length; i++) {
//     const char = s[i];
//     let strAux = str + char;
//     if (strAux.length === new Set(strAux).size) {
//       str += char;
//     } else {
//       arrString.push(str);
//       str = char;
//     }
//   }
//   console.log(arrString);
//   const arrLengthString = arrString.map((s) => s.length);
//   return Math.max(...arrLengthString);
// }
function lengthOfLongestSubstring(s: string): number {
  let longestLength = 0;
  let substrStart = 0;
  const charIndexMap = new Map();

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (charIndexMap.has(char)) {
      substrStart = Math.max(substrStart, charIndexMap.get(char) + 1);
    }

    charIndexMap.set(char, i);
    longestLength = Math.max(longestLength, i - substrStart + 1);
  }

  return longestLength;
}

console.log(lengthOfLongestSubstring("abcabcdbb")); // Output: 3
console.log(lengthOfLongestSubstring("abcabcbb"));
