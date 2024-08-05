from typing import List, Optional

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        def bfs(root: Optional[TreeNode]) -> List[List[int]]:
            if not root:
                return []

            queue = [root]
            result = []

            while queue:
                curr_level = []
                sub_arr = []
                start = 0
                while start < len(queue):
                    curr_level.append(queue[start])
                    start += 1

                for node in curr_level:
                    if node.val is not None:
                        sub_arr.append(node.val)
                    if node.left:
                        queue.append(node.left)
                    if node.right:
                        queue.append(node.right)
                result.append(sub_arr)

            return result

        return bfs(root)