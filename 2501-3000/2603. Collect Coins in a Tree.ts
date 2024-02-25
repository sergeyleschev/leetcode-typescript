// Solution by Sergey Leschev
// 2603. Collect Coins in a Tree

// Time complexity: O(N)
// Space complexity: O(N)

function collectTheCoins(coins: number[], edges: number[][]): number {
    const n = coins.length
    const g: Set<number>[] = new Array(n).fill(null).map(() => new Set())

    for (const [a, b] of edges) {
        g[a].add(b)
        g[b].add(a)
    }

    const leaves: number[] = []
    let totalEdges = edges.length * 2
    let deleted = 0

    // Add the leaves which don't have any coins
    for (let i = 0; i < n; i++) {
        if (g[i].size === 1 && coins[i] === 0) {
            leaves.push(i)
        }
    }

    while (leaves.length > 0) {
        const leaf = leaves.shift()

        if (leaf !== undefined && g[leaf].size > 0) {
            const p = Array.from(g[leaf])[0] // Parent

            g[p].delete(leaf)
            deleted++
            g[leaf].delete(p)
            deleted++

            if (g[p].size === 1 && coins[p] === 0) {
                leaves.push(p)
            }
        }
    }

    // Now the leaves would be having the coins
    for (let i = 0; i < n; i++) {
        if (g[i].size === 1) {
            leaves.push(i)
        }
    }

    // Now I need to remove the leaf nodes and their immediate parents
    let step = 2 // 1 for parent and 1 for children
    while (step > 0) {
        let sz = leaves.length
        while (sz > 0) {
            const leaf = leaves.shift()

            if (leaf !== undefined && g[leaf].size > 0) {
                const p = Array.from(g[leaf])[0] // Only parent would be there in the leaf

                g[p].delete(leaf)
                deleted++
                g[leaf].delete(p)
                deleted++

                if (g[p].size === 1) {
                    leaves.push(p)
                }
            }

            sz--
        }

        step--
    }

    return totalEdges - deleted
}
