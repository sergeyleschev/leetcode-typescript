// Solution by Sergey Leschev
// 2612. Minimum Reverse Operations

// Time complexity: O(n+k)
// Space complexity: O(n)

// Approach:

// The algorithm follows a breadth-first search (BFS) approach to determine
// the minimum number of reverse operations needed to bring the 1 to each position in the array.

// To speed up the algorithm, we mark banned positions with -2 instead of using set lookups.
// This optimization reduces the constant coefficient and improves the speed of the algorithm,
// but it may still result in a time limit exceeded (TLE) error.

// For each visited position, there are potentially O(k) target positions that can be reached
// through reverse operations. To avoid the multiplicative cost of iterating over all
// these potential positions, we update the nextNode2s array.

// This array initially points forward by 2, but we update it dynamically
// to point beyond all the target positions considered for each visited position.

// This optimization helps improve the efficiency of the algorithm and avoids unnecessary computations.

function minReverseOperations(n: number, p: number, banned: number[], k: number): number[] {
    const out: number[] = Array(n).fill(-1)

    for (const node of banned) {
        out[node] = -2
    }

    const nodes: number[] = [p]
    let depth: number = 0
    out[p] = depth
    const step: number = k - 1
    const nextNode2s: number[] = Array.from({ length: n }, (_, i) => i + 2)

    while (nodes.length > 0) {
        depth++
        const newNodes: number[] = []

        for (const node1 of nodes) {
            const loReverseStart: number = Math.max(node1 - step, 0)
            const hiReverseStart: number = Math.min(node1, n - k)
            const loNode2: number = 2 * loReverseStart + k - 1 - node1
            const hiNode2: number = 2 * hiReverseStart + k - 1 - node1
            const postHiNode2: number = hiNode2 + 2
            let node2: number = loNode2

            while (node2 <= hiNode2) {
                const nextNode2: number = nextNode2s[node2]
                nextNode2s[node2] = postHiNode2

                if (node2 >= 0 && node2 < n && out[node2] === -1) {
                    newNodes.push(node2)
                    out[node2] = depth
                }

                node2 = nextNode2
            }
        }

        nodes.length = 0
        nodes.push(...newNodes)
    }

    for (let i = 0; i < n; i++) {
        if (out[i] === -2) {
            out[i] = -1
        }
    }

    return out
}
