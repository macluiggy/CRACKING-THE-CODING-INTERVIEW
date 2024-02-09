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

function compress(str: string): string {
  let finalLength = countCompression(str);
  if (finalLength >= str.length) return str;

  let compressed: string[] = [];
  let countConsecutive = 0;

  for (let i = 0; i < str.length; i++) {
    countConsecutive++;
    if (i + 1 >= str.length || str.charAt(i) !== str.charAt(i + 1)) {
      compressed.push(str.charAt(i));
      compressed.push(countConsecutive.toString());
      countConsecutive = 0;
    }
  }

  return compressed.join("");
}

function countCompression(str: string): number {
  let compressedLength = 0;
  let countConsecutive = 0;

  for (let i = 0; i < str.length; i++) {
    countConsecutive++;
    if (i + 1 >= str.length || str.charAt(i) !== str.charAt(i + 1)) {
      compressedLength += 1 + countConsecutive.toString().length;
      countConsecutive = 0;
    }
  }

  return compressedLength;
}

function compress2(str: string): string {
  let compressed: string[] = [];
  let countConsecutive = 0;

  for (let i = 0; i < str.length; i++) {
    countConsecutive++;
    if (i + 1 >= str.length || str.charAt(i) !== str.charAt(i + 1)) {
      compressed.push(str.charAt(i));
      compressed.push(countConsecutive.toString());
      countConsecutive = 0;
    }
  }

  let compressedStr = compressed.join("");
  return compressedStr.length < str.length ? compressedStr : str;
} // O(n)

function compressBad(str: string): string {
  let compressedString = "";
  let countConsecutive = 0;

  for (let i = 0; i < str.length; i++) {
    countConsecutive++;
    if (i + 1 >= str.length || str.charAt(i) !== str.charAt(i + 1)) {
      compressedString += "" + str.charAt(i) + countConsecutive;
      countConsecutive = 0;
    }
  }

  return compressedString.length < str.length ? compressedString : str;
}

export { stringCompression, compress, compress2, compressBad };
