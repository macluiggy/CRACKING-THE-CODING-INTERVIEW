import { Stack } from "./stack";

const baseConverter = (decNumber, base) => {
  const remStack = new Stack();
  const digits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let number = decNumber;
  let rem;
  let baseString = "";

  if (!(base >= 2 && base <= 36)) {
    return "";
  }

  while (number > 0) {
    rem = Math.floor(number % base);
    // console.log(`rem: ${rem}`);
    remStack.push(rem);
    number = Math.floor(number / base);
    // console.log(`number: ${number}`);
  }

  while (!remStack.isEmpty()) {
    baseString += digits[remStack.pop()];
  }

  return baseString;
}

export { baseConverter };