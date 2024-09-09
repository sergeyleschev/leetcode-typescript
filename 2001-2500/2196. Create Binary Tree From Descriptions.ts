// Solution by Sergey Leschev
// 2196. Create Binary Tree From Descriptions

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

function createBinaryTree(descriptions: number[][]): TreeNode | null {
    const parents = new Set<number>()
    const children = new Set<number>()
    const graph = new Map<number, [number, number]>()

    for (const [parent, child, isLeft] of descriptions) {
        if (!graph.has(parent)) {
            graph.set(parent, [null, null])
        }
        if (isLeft === 1) {
            graph.get(parent)![0] = child
        } else {
            graph.get(parent)![1] = child
        }
        parents.add(parent)
        children.add(child)
    }

    const rootValue = [...parents].filter(x => !children.has(x))[0]
    const root = new TreeNode(rootValue)
    const queue: TreeNode[] = [root]

    while (queue.length > 0) {
        const node = queue.shift()!
        const [left, right] = graph.get(node.val) || [null, null]

        if (left !== null) {
            node.left = new TreeNode(left)
            queue.push(node.left)
        }
        if (right !== null) {
            node.right = new TreeNode(right)
            queue.push(node.right)
        }
    }

    return root
}
