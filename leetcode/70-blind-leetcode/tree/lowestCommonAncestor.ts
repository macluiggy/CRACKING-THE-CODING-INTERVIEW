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

function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  const [minorTree, majorTree] = p!.val >= q!.val ? [q, p] : [p, q];
  const dfs = (root: TreeNode | null) => {
    if (!root) return root
    const pLessThanOrEqualRoot = minorTree!.val <= root.val;
    const pMoreThanOrEquealRoot = minorTree!.val >= root.val;
    const qMoreThanOrEqualRoot = majorTree!.val >= root.val;
    const qLessThanOrEqualRoot = majorTree!.val <= root.val;
    const bothAreLessThanRoot = qLessThanOrEqualRoot && pLessThanOrEqualRoot;
    const bothAreMoreThanRoot = pMoreThanOrEquealRoot && qMoreThanOrEqualRoot;
    if (pLessThanOrEqualRoot && qMoreThanOrEqualRoot) {
      return root;
    }
    if (bothAreLessThanRoot) {
      return dfs(root.left);
    }
    if (bothAreMoreThanRoot) {
      return dfs(root.right);
    }
    return root
  };


  return dfs(root)
}
