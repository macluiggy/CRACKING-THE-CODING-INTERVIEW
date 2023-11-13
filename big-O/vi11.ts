const numChars = 26;

function printSortedStrings(remaining: number): void;
function printSortedStrings(remaining: number, prefix: string): void;
function printSortedStrings(remaining: number, prefix?: string): void {
  if (prefix === undefined) {
    printSortedStrings(remaining, "");
  } else {
    if (remaining === 0) {
      if (isInOrder(prefix)) {
        console.log(prefix);
      }
    } else {
      for (let i = 0; i < numChars; i++) {
        let c = ithLetter(i);
        printSortedStrings(remaining - 1, prefix + c);
      }
    }
  }
}

function isInOrder(s: string): boolean {
  for (let i = 1; i < s.length; i++) {
    let prev = ithLetter(s.charCodeAt(i - 1) - 'a'.charCodeAt(0));
    let curr = ithLetter(s.charCodeAt(i) - 'a'.charCodeAt(0));
    if (prev > curr) {
      return false;
    }
  }
  return true;
}

function ithLetter(i: number): string {
  return String.fromCharCode('a'.charCodeAt(0) + i);
}

/**
The time complexity of the isInOrder function is O(n), where n is the length of the string.

Here's a simple explanation:

The function checks if the characters in a string are in alphabetical order.
It does this by looping through the string one character at a time, starting from the second character (at index 1).
In each iteration of the loop, it compares the current character with the previous one to see if they're in order.
If it finds any pair of characters that are not in order, it immediately returns false and stops.
If it goes through the whole string without finding any out-of-order characters, it returns true.
Since the function needs to look at each character in the string once, the time it takes is proportional to the number of characters in the string. That's why we say the time complexity is O(n).
 */