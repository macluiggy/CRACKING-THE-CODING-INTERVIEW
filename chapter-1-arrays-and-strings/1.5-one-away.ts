const oneWay = (str1: string, str2: string): boolean => {
  const difference = str1.length - str2.length;
  if (Math.abs(difference) > 1) return false;
  if (str1.length === str2.length) {
    return oneEditReplace(str1, str2);
  }
  const [s1, s2] = str1.length < str2.length ? [str1, str2] : [str2, str1];
  return oneEditInsert(s1, s2);
}; // O(n)

const oneEditReplace = (str1: string, str2: string): boolean => {
  let foundDifference = false;
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) {
      if (foundDifference) return false;
      foundDifference = true;
    }
  }
  return true;
};

const oneEditInsert = (str1: string, str2: string): boolean => {
  let index1 = 0;
  let index2 = 0;
  while (index1 < str1.length && index2 < str2.length) {
    if (str1[index1] !== str2[index2]) {
      if (index1 !== index2) return false;
      index2++;
    } else {
      index1++;
      index2++;
    }
  }
  return true;
};

export { oneWay };
