const checkPermutation = (str1: string, str2: string): boolean => {
  return str1.split("").sort().join("") === str2.split("").sort().join("");
}; // O(n log n)

const checkPermutation2 = (str1: string, str2: string): boolean => {
  if (str1.length !== str2.length) {
    return false;
  }

  const charCount = new Map<string, number>();

  for (let char of str1) {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }

  for (let char of str2) {
    if (!charCount.has(char)) {
      return false;
    }
    charCount.set(char, charCount.get(char)! - 1);
    if (charCount.get(char)! < 0) {
      return false;
    }
  }

  return true;
}; // O(n)

function permutation(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }

  let letters: number[] = Array(128).fill(0); // Assumption

  let s_array: string[] = s.split("");
  for (let c of s_array) {
    // count number of each char in s.
    letters[c.charCodeAt(0)]++;
  }

  for (let i = 0; i < t.length; i++) {
    let c: number = t.charCodeAt(i);
    letters[c]--;
    if (letters[c] < 0) {
      return false;
    }
  }

  return true;
} // O(n)

export { checkPermutation, checkPermutation2, permutation };
