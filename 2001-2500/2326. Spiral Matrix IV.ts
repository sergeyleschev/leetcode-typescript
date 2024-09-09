// Solution by Sergey Leschev
// 2326. Spiral Matrix IV

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function spiralMatrix(m: number, n: number, head: ListNode | null): number[][] {
    // Initialize the matrix with -1
    const result: number[][] = Array.from({ length: m }, () => Array(n).fill(-1))

    // Directional vectors for right, down, left, and up
    const directions = [
        [0, 1], // right
        [1, 0], // down
        [0, -1], // left
        [-1, 0] // up
    ]

    let dirIndex = 0 // Start by moving right
    let x = 0,
        y = 0 // Start from the top-left corner

    // Loop while there are still nodes in the linked list
    while (head !== null) {
        // Place the current node's value in the matrix
        result[x][y] = head.val
        head = head.next // Move to the next node in the list

        // Calculate the next position
        let nextX = x + directions[dirIndex][0]
        let nextY = y + directions[dirIndex][1]

        // Check if the next position is out of bounds or already filled
        if (nextX < 0 || nextX >= m || nextY < 0 || nextY >= n || result[nextX][nextY] !== -1) {
            // Change direction (rotate clockwise)
            dirIndex = (dirIndex + 1) % 4
            nextX = x + directions[dirIndex][0]
            nextY = y + directions[dirIndex][1]
        }

        // Move to the next position
        x = nextX
        y = nextY
    }

    return result
}
