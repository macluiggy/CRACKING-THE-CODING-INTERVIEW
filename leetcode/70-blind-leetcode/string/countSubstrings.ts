function countSubstrings(s: string): number {
  let count = 0;

  function expandArountCenter(left: number, right: number) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
      count++;
    }
  }

  for (let i = 0; i < s.length; i++) {
    // for even
    expandArountCenter(i, i + 1);
    // for odd
    expandArountCenter(i, i);
  }

  return count
}

// Ejemplo de uso:
const result1 = countSubstrings("abc");
console.log(result1); // 3

const result2 = countSubstrings("aaa");
console.log(result2); // 6
