// Solution by Sergey Leschev
// 2846. Minimum Edge Weight Equilibrium Queries in a Tree

// Time complexity: O(n log n + q(C + log n))
// Space complexity: O(n log n)

function minOperationsQueries(n: number, edges: number[][], queries: number[][]): number[] {
    const m: number = Math.floor(Math.log2(n)) + 1
    const C: number = 27

    const g: [number, number][][] = Array.from({ length: n }, () => [])
    for (const [u, v, w] of edges) {
        g[u].push([v, w])
        g[v].push([u, w])
    }

    const fa: number[][] = Array.from({ length: m }, () => Array(n).fill(0))
    const w: number[][] = Array.from({ length: n }, () => Array(C).fill(0))
    const d: number[] = Array(n).fill(0)

    function dfs(x: number, f: number, dep: number) {
        fa[0][x] = f
        d[x] = dep
        for (const [c, weight] of g[x]) {
            if (f === c) continue
            w[c] = w[x].slice()
            w[c][weight]++
            dfs(c, x, dep + 1)
        }
    }

    w[0] = Array(C).fill(0)
    dfs(0, 0, 0)

    for (let i = 1; i < m; i++) {
        for (let j = 0; j < n; j++) {
            fa[i][j] = fa[i - 1][fa[i - 1][j]]
        }
    }

    function lca(x: number, y: number): number {
        let [xx, yy] = [x, y]
        if (d[xx] > d[yy]) [xx, yy] = [yy, xx]
        for (let p = 0; 1 << p <= d[yy] - d[xx]; p++) {
            if ((1 << p) & (d[yy] - d[xx])) yy = fa[p][yy]
        }
        for (let p = m - 1; p >= 0; p--) {
            if (fa[p][xx] !== fa[p][yy]) {
                xx = fa[p][xx]
                yy = fa[p][yy]
            }
        }
        return xx === yy ? xx : fa[0][xx]
    }

    const res: number[] = []
    for (const q of queries) {
        const [x, y] = q
        const l: number = lca(x, y)
        const len: number = d[x] + d[y] - 2 * d[l]
        let maxZ: number = 0
        for (let z = 1; z < C; z++) {
            const numZ: number = w[x][z] + w[y][z] - w[l][z] * 2
            maxZ = Math.max(maxZ, numZ)
        }
        res.push(len - maxZ)
    }
    return res
}
