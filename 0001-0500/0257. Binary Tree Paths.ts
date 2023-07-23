// Solution by Sergey Leschev

// 257. Binary Tree Paths
// Given the root of a binary tree, return all root-to-leaf paths in any order.
// A leaf is a node with no children.

// Finds all root-to-leaf paths.

// - Parameter root: Binary root tree.
// - Returns: All root-to-leaf paths.

// Example 1:
// Input: root = [1,2,3,null,5]
// Output: ["1->2->5","1->3"]

// Example 2:
// Input: root = [1]
// Output: ["1"]

// Constraints:
// The number of nodes in the tree is in the range [1, 100].
// -100 <= Node.val <= 100

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

function binaryTreePaths(root: TreeNode | null): string[] {
    const result = []

    const depthFristSearch = (root: TreeNode | null, path: string[]) => {
        path.push(root.val.toString())

        if (root.left === null && root.right === null) {
            result.push(path)
            return
        }

        if (root.left) {
            depthFristSearch(root.left, [...path])
        }
        if (root.right) {
            depthFristSearch(root.right, [...path])
        }
    }

    depthFristSearch(root, [])
    return result.map(e => e.join('->'))
}
