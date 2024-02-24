// Solution by Sergey Leschev
// 2876. Count Visited Nodes in a Directed Graph

// Time complexity: O(n)
// Space complexity: O(n)

function countVisitedNodes(edges: number[]): number[] {
    const n = edges.length
    const indegree: number[] = new Array(n).fill(0)
    const result: number[] = new Array(n).fill(0)
    const visited: boolean[] = new Array(n).fill(false)
    const queue: number[] = []
    const stack: number[] = []

    // Calculate indegree of each node
    for (const e of edges) {
        indegree[e]++
    }

    // Find nodes with indegree 0 and add them to the queue
    for (let i = 0; i < n; i++) {
        if (indegree[i] === 0) {
            queue.push(i)
        }
    }

    // Topological sort
    while (queue.length > 0) {
        const x = queue.shift()!
        stack.push(x)
        visited[x] = true

        // Reduce indegree of the connected node
        indegree[edges[x]]--

        if (indegree[edges[x]] === 0) {
            queue.push(edges[x])
        }
    }

    // Handle nodes that are part of a cycle
    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            fillCycle(edges, visited, result, i)
        }
    }

    // Calculate the result
    while (stack.length > 0) {
        const x = stack.pop()!
        result[x] = result[edges[x]] + 1
    }

    return result
}

function fillCycle(edges: number[], visited: boolean[], result: number[], start: number): void {
    let length = 0
    let x = start

    while (!visited[x]) {
        visited[x] = true
        length++
        x = edges[x]
    }

    result[start] = length

    x = edges[start]
    while (x !== start) {
        result[x] = length
        x = edges[x]
    }
}
