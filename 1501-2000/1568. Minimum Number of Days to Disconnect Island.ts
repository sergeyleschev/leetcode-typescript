// Solution by Sergey Leschev
// 1568. Minimum Number of Days to Disconnect Island

function minDays(grid: number[][]): number {
    const m = grid.length
    const n = grid[0].length

    // Helper function to count the number of islands using DFS
    function countIslands(grid: number[][]): number {
        let count = 0
        const visited = Array.from(Array(m), () => Array(n).fill(false))

        function dfs(i: number, j: number) {
            if (i < 0 || i >= m || j < 0 || j >= n || grid[i][j] === 0 || visited[i][j]) {
                return
            }
            visited[i][j] = true
            dfs(i - 1, j) // up
            dfs(i + 1, j) // down
            dfs(i, j - 1) // left
            dfs(i, j + 1) // right
        }

        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (grid[i][j] === 1 && !visited[i][j]) {
                    count++
                    dfs(i, j)
                }
            }
        }
        return count
    }

    // Step 1: Check if the grid is already disconnected or has multiple islands
    if (countIslands(grid) !== 1) {
        return 0
    }

    // Step 2: Try to disconnect the grid by changing one land cell (1) to water (0)
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                grid[i][j] = 0
                if (countIslands(grid) !== 1) {
                    return 1
                }
                grid[i][j] = 1 // Revert back to original state
            }
        }
    }

    // Step 3: If still not disconnected, it will take 2 days
    return 2
}
