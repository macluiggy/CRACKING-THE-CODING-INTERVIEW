const counterparty: { [key: string]: string } = {
  ")": "(",
  "]": "[",
  "}": "{",
};

const startParentheses = Object.values(counterparty);
const endParentheseses = Object.keys(counterparty);

function isValid(s: string): boolean {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (startParentheses.includes(char)) {
      stack.push(char);
    }
    if (endParentheseses.includes(char)) {
      const endParenthesis = stack.pop();
      if (!isCounterparty(char, endParenthesis as string)) return false;
    }
  }

  return stack.length === 0;
}

const isCounterparty = (start: string, end: string): boolean => {
  return counterparty[start] === end;
};

console.log(isValid("()[]{}"));
console.log(isValid("(}"));
console.log(isValid("()"));
