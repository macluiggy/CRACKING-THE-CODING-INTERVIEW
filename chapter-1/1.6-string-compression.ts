const stringCompression = (str: string) => {
  let currentLetterCount = 0;
  let newStr = "";

  for (let i = 0; i < str.length; i++) {
    currentLetterCount++;
    if (str[i] !== str[i + 1]) {
      newStr += `${str[i]}${currentLetterCount}`;
      currentLetterCount = 0;
    }
  }

  return newStr.length >= str.length ? str : newStr;
};

export { stringCompression };
