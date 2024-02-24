// Solution by Sergey Leschev
// 2867. Count Valid Paths in a Tree

// Time complexity: O(n)
// Space complexity: O(n)

function countPaths(n: number, edges: number[][]): number {
    let ans = [0, 0]
    const primes = Array(n + 5).fill(1)
    primes[1] = 0

    for (let i = 2; i <= Math.sqrt(n + 5); i++) {
        if (primes[i] === 0) {
            continue
        }
        for (let j = i * i; j < primes.length; j += i) {
            primes[j] = 0
        }
    }

    const adjList: number[][] = Array(n + 1)
        .fill(null)
        .map(() => [])

    for (const edge of edges) {
        adjList[edge[0]].push(edge[1])
        adjList[edge[1]].push(edge[0])
    }

    function dfs(curr: number, parent: number, adjList: number[][]): number[] {
        let count = [0, 0]
        const isPrime = primes[curr] === 1

        for (const child of adjList[curr]) {
            if (child === parent) {
                continue
            }
            const next = dfs(child, curr, adjList)
            if (isPrime) {
                // Path ends at curr
                ans[0] += next[0]
                // curr is conduit for path
                ans[0] += count[1] * next[0]

                count[1] += next[0]
            } else {
                // Ends at curr
                ans[0] += next[1]
                // curr is conduit for path
                ans[0] += count[0] * next[1]
                ans[0] += count[1] * next[0]

                count[0] += next[0]
                count[1] += next[1]
            }
        }

        count[isPrime ? 1 : 0] += 1
        return count
    }

    dfs(1, -1, adjList)
    return ans[0]
}
