// Solution by Sergey Leschev
// 3243. Shortest Distance After Road Addition Queries I
// DP

function shortestDistanceAfterQueries(n: number, queries: number[][]): number[] {
    const roads: number[][] = Array.from({ length: n }, () => [])
    const dp: number[] = Array.from({ length: n }, (_, i) => i)
    const result: number[] = []

    for (const [u, v] of queries) {
        roads[v].push(u)
        for (let i = v; i < n; ++i) {
            dp[i] = Math.min(dp[i], dp[i - 1] + 1)
            for (const l of roads[i]) {
                dp[i] = Math.min(dp[i], dp[l] + 1)
            }
        }
        result.push(dp[n - 1])
    }

    return result
}
