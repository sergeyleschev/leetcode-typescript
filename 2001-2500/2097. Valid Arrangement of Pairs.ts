// Solution by Sergey Leschev
// 2097. Valid Arrangement of Pairs

// Time Complexity: O(m+n), where m == pairs.size(), and n is the number of nodes in the graph (the number of distinct numbers in pairs)
// Space Complexity: O(m+n)

function validArrangement(pairs: number[][]): number[][] {
    const adj: Map<number, number[]> = new Map()
    const inDegree: Map<number, number> = new Map()
    const outDegree: Map<number, number> = new Map()

    // Build adjacency list and in/out-degree maps
    for (const [u, v] of pairs) {
        if (!adj.has(u)) adj.set(u, [])
        adj.get(u)!.push(v)

        outDegree.set(u, (outDegree.get(u) || 0) + 1)
        inDegree.set(v, (inDegree.get(v) || 0) + 1)
    }

    // Find starting node
    let start = -1
    for (const [node] of adj) {
        const out = outDegree.get(node) || 0
        const inD = inDegree.get(node) || 0
        if (out - inD === 1) {
            start = node
            break
        }
    }

    if (start === -1) {
        // Eulerian circuit: start from any node
        start = pairs[0][0]
    }

    const result: number[][] = []
    const stack: number[] = [start]

    // Perform Eulerian path
    while (stack.length > 0) {
        const curr = stack[stack.length - 1]

        if (adj.has(curr) && adj.get(curr)!.length > 0) {
            const next = adj.get(curr)!.pop()!
            stack.push(next)
        } else {
            stack.pop()
            if (stack.length > 0) {
                result.push([stack[stack.length - 1], curr])
            }
        }
    }

    return result.reverse()
}
