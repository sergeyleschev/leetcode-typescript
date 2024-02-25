// Solution by Sergey Leschev
// 2508. Add Edges to Make Degrees of All Nodes Even

function isPossible(n: number, edges: number[][]): boolean {
    const G: Set<number>[] = Array.from({ length: n }, () => new Set<number>())

    for (const edge of edges) {
        const i = edge[0] - 1
        const j = edge[1] - 1
        G[i].add(j)
        G[j].add(i)
    }

    const odd: number[] = []
    for (let i = 0; i < n; i++) {
        if (G[i].size % 2 !== 0) {
            odd.push(i)
        }
    }

    function f(a: number, b: number): boolean {
        return !G[b].has(a)
    }

    if (odd.length === 2) {
        const a = odd[0]
        const b = odd[1]
        return Array.from({ length: n }).some((_, i) => f(a, i) && f(b, i))
    }

    if (odd.length === 4) {
        const a = odd[0]
        const b = odd[1]
        const c = odd[2]
        const d = odd[3]

        return (f(a, b) && f(c, d)) || (f(a, c) && f(b, d)) || (f(a, d) && f(c, b))
    }

    return odd.length === 0
}
