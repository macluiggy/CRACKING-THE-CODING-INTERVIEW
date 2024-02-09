import { expect, test } from "bun:test";
import isPalindrome from "./is-palindrome";
import LinkedList, { ListNode } from "./linked-list";

test('isPalindrome returns true for a palindrome linked list', () => {
  // Create a palindrome linked list: 1 -> 2 -> 3 -> 2 -> 1
  const list = new LinkedList();
  list.add(1);
  list.add(2);
  list.add(3);
  list.add(2);
  list.add(1);

  // Check if the linked list is a palindrome
  const result = isPalindrome(list.getHead());

  // The result should be true
  expect(result).toBe(true);
});

test('isPalindrome returns false for a non-palindrome linked list', () => {
  // Create a non-palindrome linked list: 1 -> 2 -> 3 -> 4 -> 5
  const list = new LinkedList();
  list.add(1);
  list.add(2);
  list.add(3);
  list.add(4);
  list.add(5);

  // Check if the linked list is a palindrome
  const result = isPalindrome(list.getHead());

  // The result should be false
  expect(result).toBe(false);
});

test('isPalindrome returns true for an empty linked list', () => {
  // Create an empty linked list
  const list = new LinkedList();

  // Check if the linked list is a palindrome
  const result = isPalindrome(list.getHead());

  // The result should be true for an empty linked list
  expect(result).toBe(true);
});