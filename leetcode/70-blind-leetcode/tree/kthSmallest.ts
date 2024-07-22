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

function kthSmallest(root: TreeNode | null, k: number): number {
  const arr: number[] = [];
  const dfs = (root: TreeNode | null) => {
    if (!root) return 0;
    dfs(root.left);
    if (arr.length === k) return
    arr.push(root.val);
    dfs(root.right);
  };

  dfs(root);

  const result = arr[k-1]

  return result
}

const root = new TreeNode(3);
root.left = new TreeNode(1);
root.right = new TreeNode(4);
root.left.right = new TreeNode(2);

const result = kthSmallest(root, 1);
console.log(result);
