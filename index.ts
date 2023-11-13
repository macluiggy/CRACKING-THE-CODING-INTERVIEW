/**
 You
give me an example that uses these techniques to solve a problem step by step, dont worry take a deep breath, do it in typescript

ChatGPT
ChatGPT
Sure, let's walk through an example problem using these techniques, step by step, and I'll use TypeScript for the implementation. For this example, let's tackle a classic interview question: Finding the first non-repeating character in a string.

Problem Statement
Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.

Step 1: Understanding the Problem
We need to find the first unique character in a string.
Each character in the string should be checked to see if it repeats.
The order of characters in the string matters, as we are looking for the first non-repeating character.
Step 2: Example Cases
Example 1: "leetcode" should return 0 (the character 'l' is the first non-repeating character).
Example 2: "loveleetcode" should return 2 (the character 'v' is the first non-repeating character).
Example 3: "aabb" should return -1 (there is no non-repeating character).
Step 3: Brute Force Solution
A brute force approach would be to check each character in the string and see if it appears again in the string. This would have a time complexity of O(n^2), which is not efficient for long strings.

Step 4: Optimization
To optimize, we can use a HashMap (in TypeScript, a Map object) to store the count of each character. This allows us to reduce the time complexity to O(n).

Step 5: Writing the Code
Here's how the TypeScript implementation might look:

typescript
Copy code
 */
function firstUniqChar(s: string): number {
  let charCount = new Map<string, number>();

  // Count the occurrences of each character
  for (let char of s) {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }

  // Find the first unique character
  for (let i = 0; i < s.length; i++) {
    if (charCount.get(s[i]) === 1) {
      return i;
    }
  }

  return -1;
}

// Test the function with example cases
console.log(firstUniqChar("leetcode")); // Output: 0
console.log(firstUniqChar("loveleetcode")); // Output: 2
console.log(firstUniqChar("aabb")); // Output: -1
// Save to grepper
// Step 6: Testing the Code
// We need to test our function with various test cases, including edge cases:

// Empty string: "" should return -1.
// String with all repeating characters: "aabbcc" should return -1.
// String with one character: "z" should return 0.
// Step 7: Analyzing Space and Time Complexity
// Time Complexity: O(n). We go through the string twice: once to build the map and once to find the unique character.
// Space Complexity: O(1). The map will have at most 26 key-value pairs if we assume the input is lowercase English letters only.
// This step-by-step approach demonstrates how to methodically tackle a coding problem, from understanding and planning to coding and testing, using TypeScript.

console.log("Hello via Bun!");
