// Solution by Sergey Leschev
// 2742. Painting the Walls

// Time complexity: O(n^2)
// Space complexity: O(n)

function paintWalls(cost: number[], time: number[]): number {
    const n = cost.length
    const dp: number[] = new Array(n + 1).fill(Number.MAX_SAFE_INTEGER)
    dp[0] = 0

    for (let i = 0; i < n; i++) {
        for (let j = n; j >= 1; j--) {
            dp[j] = Math.min(dp[j], dp[Math.max(j - time[i] - 1, 0)] + cost[i])
        }
    }

    return dp[n]
}
