const URLify = (str: string, length: number): string => {
  return str.trim().replace(/\s/g, "%20");
}; // O(n)

const URLify2 = (str: string, length: number): string => {
  let newStr = "";
  for (let i = 0; i < length; i++) {
    if (str[i] === " ") {
      newStr += "%20";
    } else {
      newStr += str[i];
    }
  }
  return newStr;
}; // O(n)

function replaceSpaces(str: string, trueLength: number): string {
  let spaceCount = 0,
    index,
    i = 0;

  for (i = 0; i < trueLength; i++) {
    if (str[i] === " ") {
      spaceCount++;
    }
  }

  index = trueLength + spaceCount * 2;
  // console.log(index);
  

  let strArray = str.split("");
  // console.log(strArray);
  
  if (trueLength < str.length) strArray[trueLength] = "\0"; // End array
  // console.log(strArray);
  
  for (i = trueLength - 1; i >= 0; i--) {
    // console.log(strArray[i], i);
    
    if (strArray[i] === " ") {
      // console.log(strArray[i], i);
      console.log(strArray[index - 1], strArray[index - 2], strArray[index - 3]);
      
      strArray[index - 1] = "0";
      strArray[index - 2] = "2";
      strArray[index - 3] = "%";
      index = index - 3;
      // console.log(strArray[index - 1], strArray[index - 2], strArray[index - 3]);
      
    } else {
      strArray[index - 1] = strArray[i];
      index--;
    }
  }

  return strArray.join("");
} // O(n)

const URLify3 = (str: string, length: number): string => {
  let newStr = "";
  for (let i = 0; i < length; i++) {
    if (str[i] === " ") {
      newStr += "%20";
    } else {
      newStr += str[i];
    }
  }
  return newStr;
}; // O(n)

export { URLify, URLify2, replaceSpaces , URLify3};
