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
  let result = root;
  const [minorTree, majorTree] = p!.val >= q!.val ? [q, p] : [p, q];
  const dfs = (root: TreeNode | null) => {
    if (!root) return 0;
    const pLessThanOrEqualRoot = minorTree!.val <= root.val;
    const pMoreThanOrEquealRoot = minorTree!.val >= root.val;
    const qMoreThanOrEqualRoot = majorTree!.val >= root.val;
    const qLessThanOrEqualRoot = majorTree!.val <= root.val;
    const bothAreLessThanRoot = qLessThanOrEqualRoot && pLessThanOrEqualRoot;
    const bothAreMoreThanRoot = pMoreThanOrEquealRoot && qMoreThanOrEqualRoot;
    if (pLessThanOrEqualRoot && qMoreThanOrEqualRoot) {
      result = root;
      return;
    }
    if (bothAreLessThanRoot) {
      dfs(root.left);
    }
    if (bothAreMoreThanRoot) {
      dfs(root.right);
    }
  };

  dfs(root);

  return result;
}
