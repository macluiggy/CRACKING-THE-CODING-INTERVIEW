/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

import TreeNode from "./TreeNode";

function maxDepth(root: TreeNode | null): number {
  if (!root) return 0;
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
}

function maxDepthIterative(root: TreeNode | null): number {
  if (!root) return 0;
  const stack = [[root, 1]];
  let res = 1;
  while (stack.length) {
    const pop = stack.pop()!;
    const node = pop[0] as TreeNode; // Ensure node is of type TreeNode
    let deep = pop[1];
    if (node) {
      res = Math.max(res, deep as number);
      if (node.left !== null) {
        stack.push([node.left, deep as number + 1]);
      }
      if (node.right !== null) {
        stack.push([node.right, deep as number + 1]);
      }
    }
  }

  return res;
}
