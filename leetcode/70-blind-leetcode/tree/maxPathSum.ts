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

function maxPathSum(root: TreeNode | null): number {
  let res = root?.val || 0;

  function dfs(root: TreeNode | null): number {
    if (!root) return 0;
    let leftMax = dfs(root.left);
    let rightMax = dfs(root.right);
    leftMax = Math.max(leftMax, 0);
    rightMax = Math.max(rightMax, 0);

    res = Math.max(res, root.val + leftMax + rightMax);

    return root.val + Math.max(leftMax, rightMax);
  }

  dfs(root);
  return res;
}

const root = new TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(5)), new TreeNode(3))
console.log(maxPathSum(root));
