// Solution by Sergey Leschev

// 1162. As Far from Land as Possible
// Given an n x n grid containing only values 0 and 1, where 0 represents water and 1 represents land, find a water cell such that its distance to the nearest land cell is maximized, and return the distance. If no land or water exists in the grid, return -1.
// The distance used in this problem is the Manhattan distance: the distance between two cells (x0, y0) and (x1, y1) is |x0 - x1| + |y0 - y1|.

// Example 1:
// Input: grid = [[1,0,1],[0,0,0],[1,0,1]]
// Output: 2
// Explanation: The cell (1, 1) is as far as possible from all the land with distance 2.

// Example 2:
// Input: grid = [[1,0,0],[0,0,0],[0,0,0]]
// Output: 4
// Explanation: The cell (2, 2) is as far as possible from all the land with distance 4.

// Constraints:
// n == grid.length
// n == grid[i].length
// 1 <= n <= 100
// grid[i][j] is 0 or 1

type Point = [number, number]

function maxDistance(grid: number[][]): number {
    let max = -1
    const lands: Point[] = []
    const size = grid[0].length

    for (let row = 0; row < size; row++) {
        for (let col = 0; col < size; col++) {
            if (grid[row][col]) {
                lands.push([row, col])
            }
        }
    }

    if (lands.length === 0) {
        return max
    }

    for (let row = 0; row < size; row++) {
        for (let col = 0; col < size; col++) {
            if (grid[row][col] === 0) {
                const nearest = nearestLand(lands, [row, col])
                if (nearest > max) {
                    max = nearest
                }
            }
        }
    }

    return max
}

function nearestLand(lands: Point[], point: Point) {
    let nearest = Number.MAX_VALUE

    for (const land of lands) {
        const dist = distance(land, point)
        if (dist < nearest) {
            nearest = dist
        }
    }

    return nearest
}

function distance(a: Point, b: Point) {
    return Math.abs(b[0] - a[0]) + Math.abs(b[1] - a[1])
}
