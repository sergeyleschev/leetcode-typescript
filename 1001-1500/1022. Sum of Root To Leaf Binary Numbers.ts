// Solution by Sergey Leschev

// 1022. Sum of Root To Leaf Binary Numbers
// You are given the root of a binary tree where each node has a value 0 or 1.  Each root-to-leaf path represents a binary number starting with the most significant bit.  For example, if the path is 0 -> 1 -> 1 -> 0 -> 1, then this could represent 01101 in binary, which is 13.
// For all leaves in the tree, consider the numbers represented by the path from the root to that leaf.
// Return the sum of these numbers. The answer is guaranteed to fit in a 32-bits integer.

// Calculates the sum where the numbers are represented by the path from the root to the leaf.

// - Parameter root: Binary tree root.
// - Returns: The sum.

// Example 1:
// Input: root = [1,0,1,0,1,0,1]
// Output: 22
// Explanation: (100) + (101) + (110) + (111) = 4 + 5 + 6 + 7 = 22

// Example 2:
// Input: root = [0]
// Output: 0

// Example 3:
// Input: root = [1]
// Output: 1

// Example 4:
// Input: root = [1,1]
// Output: 3

// Constraints:
// The number of nodes in the tree is in the range [1, 1000].
// Node.val is 0 or 1.

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

function sumRootToLeaf(root: TreeNode | null): number {
    const binaryNumbers: string[] = []

    const postOrder = (node: TreeNode | null, binary: string = ''): void => {
        if (node === null) {
            return
        }

        postOrder(node.left, binary + node.val)
        postOrder(node.right, binary + node.val)

        if (node.left === null && node.right === null) {
            binaryNumbers.push(binary + node.val)
        }
    }

    postOrder(root)
    return binaryNumbers.reduce((acc, curr) => acc + parseInt(curr, 2), 0)
}
