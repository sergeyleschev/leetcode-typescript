// Solution by Sergey Leschev
// 2646. Minimize the Total Price of the Trips

function path(node1: number, node2: number, count: number[], graph: number[][], p: number = -1): number {
    if (node1 === node2) {
        count[node1]++
        return 1
    }

    for (const it of graph[node1]) {
        if (it !== p) {
            if (path(it, node2, count, graph, node1) !== 0) {
                count[node1]++
                return 1
            }
        }
    }

    return 0
}

function find(node: number, price: number[], count: number[], graph: number[][], parent: number = -1): [number, number] {
    let p: [number, number] = [count[node] * price[node], (count[node] * price[node]) / 2]

    for (const it of graph[node]) {
        if (it !== parent) {
            const current = find(it, price, count, graph, node)
            p[0] += Math.min(current[0], current[1])
            p[1] += current[0]
        }
    }

    return p
}

function minimumTotalPrice(n: number, edges: number[][], price: number[], trips: number[][]): number {
    const count = Array(n).fill(0)
    const graph = Array.from({ length: n }, () => [])

    for (const it of edges) {
        graph[it[0]].push(it[1])
        graph[it[1]].push(it[0])
    }

    for (const it of trips) {
        path(it[0], it[1], count, graph)
    }

    const p = find(0, price, count, graph)
    return Math.min(p[0], p[1])
}
