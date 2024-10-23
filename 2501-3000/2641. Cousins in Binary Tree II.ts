// Solution by Sergey Leschev
// 2641. Cousins in Binary Tree II
// BFS

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

function replaceValueInTree(root: TreeNode | null): TreeNode | null {
    if (!root) return null

    // Start by setting root value to 0 as per the example
    root.val = 0

    const queue: TreeNode[] = [root]

    while (queue.length > 0) {
        let levelSize = queue.length
        let sum = 0
        const buffer: TreeNode[] = []

        // Traverse the current level and calculate the sum of child nodes
        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift()!
            buffer.push(node)

            if (node.left) {
                queue.push(node.left)
                sum += node.left.val
            }
            if (node.right) {
                queue.push(node.right)
                sum += node.right.val
            }
        }

        // Update the nodes in the buffer with their cousin sums
        for (const node of buffer) {
            let cousinSum = sum
            if (node.left) cousinSum -= node.left.val
            if (node.right) cousinSum -= node.right.val

            if (node.left) node.left.val = cousinSum
            if (node.right) node.right.val = cousinSum
        }
    }

    return root
}
