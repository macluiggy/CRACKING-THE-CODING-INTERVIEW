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

function isNodeValid(node: TreeNode | null): boolean {
  let isValid = true;
  if (node?.left) {
    isValid = node.left.val < node.val;
  }
  if (node?.right) {
    isValid = node.val < node.right.val;
  }
  return isValid;
}
function isValidBST(root: TreeNode | null): boolean {
  let res = true;
  if (!isNodeValid(root)) return false;
  if (root?.left) res = isValidBST(root.left);
  if (root?.right) res = isValidBST(root.right);
  return res;
}
