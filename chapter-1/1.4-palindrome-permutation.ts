const palindromePermutation = (str: string): boolean => {
  str = str.replace(/\s/g, "");

  const charCount = new Map<string, number>();

  for (let char of str) {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }
  let oddCharCount = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (charCount.get(char)! % 2 !== 0) {
      oddCharCount++;
    }
    if (oddCharCount > 1) {
      return false;
    }
  }

  return true;
};

export { palindromePermutation };
