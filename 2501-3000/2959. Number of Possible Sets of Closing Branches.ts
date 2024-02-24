// Solution by Sergey Leschev
// 2959. Number of Possible Sets of Closing Branches

// Time complexity: O(2^n . N^3)
// Space complexity: O(N^2)

function numberOfSets(n: number, maxDistance: number, roads: number[][]): number {
    let ans = 0

    // Iterate through all subsets of nodes (1 << n) using bitmasking
    for (let i = 0; i < 1 << n; i++) {
        // Create an adjacency matrix to represent the graph
        let g: number[][] = Array.from({ length: n }, () => Array(n).fill(1000000000))

        // Update the graph based on the selected nodes in the subset
        for (const [x, y, w] of roads) {
            if (((i >> x) & 1) === 1 && ((i >> y) & 1) === 1) {
                g[x][y] = Math.min(g[x][y], w)
                g[y][x] = Math.min(g[y][x], w)
            }
        }

        // Set diagonal elements to 0
        for (let j = 0; j < n; j++) {
            g[j][j] = 0
        }

        // Finding the shortest paths
        for (let p = 0; p < n; p++) {
            for (let q = 0; q < n; q++) {
                for (let k = 0; k < n; k++) {
                    g[q][k] = Math.min(g[q][k], g[q][p] + g[p][k])
                }
            }
        }

        // Check if the selected nodes in the subset form a valid set
        let ok = 1
        for (let j = 0; j < n; j++) {
            for (let k = 0; k < n; k++) {
                if (((i >> j) & 1) === 1 && ((i >> k) & 1) === 1) {
                    ok &= g[j][k] <= maxDistance ? 1 : 0
                }
            }
        }

        // Increment the answer if the subset forms a valid set
        ans += ok
    }
    return ans
}
