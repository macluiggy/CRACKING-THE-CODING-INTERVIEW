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

function diameterOfBinaryTree(root: TreeNode | null): number {
  let res = 0;

  const dfs = (root: TreeNode | null): number => {
    if (!root) return -1;

    let left = dfs(root.left);
    let right = dfs(root.right);

    res = Math.max(res, 2 + left + right);

    return 1 + Math.max(left, right);
  };

  dfs(root)
  return res
}
