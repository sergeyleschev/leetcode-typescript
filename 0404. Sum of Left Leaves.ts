// Solution @ Sergey Leschev, Belarusian State University

// 404. Sum of Left Leaves
// Given the root of a binary tree, return the sum of all left leaves.

// Finds the sum of all left leaves in a given binary tree.

// - Parameter root: Binary tree root.
// - Returns: The sum of all left leaves.

// Example 1:
// Input: root = [3,9,20,null,null,15,7]
// Output: 24
// Explanation: There are two left leaves in the binary tree, with values 9 and 15 respectively.

// Example 2:
// Input: root = [1]
// Output: 0

// Constraints:
// The number of nodes in the tree is in the range [1, 1000].
// -1000 <= Node.val <= 1000

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

function sumOfLeftLeaves(root: TreeNode | null): number {
  let sum = 0

  const preOrderTraversal = (node: TreeNode) => {
    if (!node) { return }

    if (node.left) {
      if (!node.left.left && !node.left.right) { sum += node.left.val }
    }

    preOrderTraversal(node.left)
    preOrderTraversal(node.right)
  }

  preOrderTraversal(root)
  return sum
}