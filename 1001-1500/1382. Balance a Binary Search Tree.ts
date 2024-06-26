// Solution by Sergey Leschev
// 1382. Balance a Binary Search Tree
// O(N)

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

function balanceBST(root: TreeNode | null): TreeNode | null {
    if (root === null) return null

    const sortedArr: TreeNode[] = []

    // Function to perform inorder traversal and collect nodes
    function inorderTraverse(node: TreeNode | null): void {
        if (node === null) return
        inorderTraverse(node.left)
        sortedArr.push(node)
        inorderTraverse(node.right)
    }

    // Function to convert sorted array to a balanced BST
    function sortedArrayToBST(start: number, end: number): TreeNode | null {
        if (start > end) return null
        const mid = Math.floor((start + end) / 2)
        const node = sortedArr[mid]
        node.left = sortedArrayToBST(start, mid - 1)
        node.right = sortedArrayToBST(mid + 1, end)
        return node
    }

    inorderTraverse(root)
    return sortedArrayToBST(0, sortedArr.length - 1)
}
