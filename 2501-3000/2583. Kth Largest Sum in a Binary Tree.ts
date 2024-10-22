// Solution by Sergey Leschev
// 2583. Kth Largest Sum in a Binary Tree

// Time complexity: O(n log n)
// Space complexity: O(n)

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

function kthLargestLevelSum(root: TreeNode | null, k: number): number {
    if (!root) return -1

    const levelSums: number[] = []
    const queue: TreeNode[] = [root]

    // BFS to traverse the tree level by level
    while (queue.length > 0) {
        let levelSize = queue.length
        let levelSum = 0

        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift()!
            levelSum += node.val

            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }

        levelSums.push(levelSum)
    }

    // Sort the level sums in descending order
    levelSums.sort((a, b) => b - a)

    // If there are fewer than k levels, return -1
    if (k > levelSums.length) return -1

    // Return the kth largest level sum
    return levelSums[k - 1]
}
