// Solution by Sergey Leschev
// 2858. Minimum Edge Reversals So Every Node Is Reachable

function minEdgeReversals(n: number, edges: number[][]): number[] {
    const graph: number[][] = Array.from({ length: n }, () => [])
    const revGraph: number[][] = Array.from({ length: n }, () => [])
    const dp: { [key: string]: number } = {}

    function dfs(node: number, parent: number): number {
        const key: string = `${node}-${parent}`

        if (key in dp) {
            return dp[key]
        }

        let ans: number = 0

        for (const x of graph[node]) {
            if (x !== parent) {
                ans += dfs(x, node)
            }
        }

        for (const x of revGraph[node]) {
            if (x !== parent) {
                ans += dfs(x, node) + 1
            }
        }

        dp[key] = ans
        return ans
    }

    for (const [u, v] of edges) {
        graph[u].push(v)
        revGraph[v].push(u)
    }

    const ans: number[] = []

    for (let i = 0; i < n; i++) {
        ans.push(dfs(i, -1))
    }

    return ans
}
