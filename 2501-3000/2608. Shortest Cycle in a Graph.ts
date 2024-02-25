// Solution by Sergey Leschev
// 2608. Shortest Cycle in a Graph

// BFS

function findShortestCycle(n: number, edges: number[][]): number {
    let ans: number = Infinity

    function bfs(src: number, adj: number[][], n: number): void {
        const distance: number[] = Array(n).fill(Infinity)
        const parent: number[] = Array(n).fill(-1)
        const queue: number[] = []

        distance[src] = 0
        queue.push(src)

        while (queue.length > 0) {
            const node: number = queue.shift()!

            for (const neigh of adj[node]) {
                if (distance[neigh] === Infinity) {
                    distance[neigh] = 1 + distance[node]
                    parent[neigh] = node
                    queue.push(neigh)
                } else if (parent[node] !== neigh && parent[neigh] !== node) {
                    ans = Math.min(ans, distance[neigh] + distance[node] + 1)
                }
            }
        }
    }

    const adj: number[][] = Array.from({ length: n }, () => [])

    for (const edge of edges) {
        const u: number = edge[0]
        const v: number = edge[1]

        adj[u].push(v)
        adj[v].push(u)
    }

    for (let i = 0; i < n; i++) {
        bfs(i, adj, n)
    }

    return ans !== Infinity ? ans : -1
}
