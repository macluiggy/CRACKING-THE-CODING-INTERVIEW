function isPalindrome(s: string): boolean {
  s = cleanString(s)
  return s.split('').reverse().join('') === s
}
console.log(isPalindrome("A man, a plan, a canal: Panama"));

function cleanString(s: string): string {
  return s.toLowerCase().replace(/[^a-z0-9]/g, "");
}

