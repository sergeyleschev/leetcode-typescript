// Solution by Sergey Leschev
// 2257. Count Unguarded Cells in the Grid
// Brute Force

function countUnguarded(m: number, n: number, guards: number[][], walls: number[][]): number {
    // Create a grid to represent the state of each cell
    const grid: number[][] = Array.from({ length: m }, () => Array(n).fill(0))

    // Mark walls in the grid
    for (const [x, y] of walls) {
        grid[x][y] = -2 // Wall
    }

    // Mark guards in the grid
    for (const [x, y] of guards) {
        grid[x][y] = 2 // Guard
    }

    // Process guards' visibility
    for (const [x, y] of guards) {
        // Check all four cardinal directions
        for (let i = x - 1; i >= 0; i--) {
            // Up
            if (grid[i][y] === -2 || grid[i][y] === 2) break
            grid[i][y] = 1 // Guarded
        }
        for (let i = x + 1; i < m; i++) {
            // Down
            if (grid[i][y] === -2 || grid[i][y] === 2) break
            grid[i][y] = 1 // Guarded
        }
        for (let j = y - 1; j >= 0; j--) {
            // Left
            if (grid[x][j] === -2 || grid[x][j] === 2) break
            grid[x][j] = 1 // Guarded
        }
        for (let j = y + 1; j < n; j++) {
            // Right
            if (grid[x][j] === -2 || grid[x][j] === 2) break
            grid[x][j] = 1 // Guarded
        }
    }

    // Count unguarded and unoccupied cells
    let unguardedCount = 0
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 0) {
                unguardedCount++
            }
        }
    }

    return unguardedCount
}
