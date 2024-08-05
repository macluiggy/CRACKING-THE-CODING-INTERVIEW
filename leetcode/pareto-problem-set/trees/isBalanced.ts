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

import TreeNode from "../../70-blind-leetcode/tree/TreeNode";

function isBalanced(root: TreeNode | null): boolean {
  let isBalanced = true;

  const dfs = (root: TreeNode | null): number => {
    if (!root) return 0;

    let left = dfs(root.left);
    let right = dfs(root.right);
    if (left == -1 || right === -1) return -1;

    isBalanced = Math.abs(left - right) <= 1;
    if (!isBalanced) return -1;

    return 1 + Math.max(left, right);
  };

  return dfs(root) !== -1;
}
