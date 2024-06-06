// Solution by Sergey Leschev
// 3108. Minimum Cost Walk in Weighted Graph

// Time complexity: O(N).
// Time complexity of union find with path compression and rank is close to O(N).

// Space complexity: O(N).
// We create new arrays in the DSU class which incur a space complexity of O(N).

class DSU {
    private parent: number[]
    private rank: number[]
    private weights: number[]

    constructor(n: number) {
        this.parent = Array.from({ length: n }, (_, i) => i)
        this.rank = new Array(n).fill(0)
        this.weights = new Array(n).fill(131071) // all bits set for bitwise AND operation
    }

    find(x: number): number {
        if (x !== this.parent[x]) {
            this.parent[x] = this.find(this.parent[x])
        }
        return this.parent[x]
    }

    union(x: number, y: number, weight: number): void {
        let rootX = this.find(x)
        let rootY = this.find(y)

        if (rootX !== rootY) {
            if (this.rank[rootX] < this.rank[rootY]) {
                this.parent[rootX] = rootY
                this.weights[rootY] &= this.weights[rootX] & weight
            } else if (this.rank[rootX] > this.rank[rootY]) {
                this.parent[rootY] = rootX
                this.weights[rootX] &= this.weights[rootY] & weight
            } else {
                this.parent[rootY] = rootX
                this.weights[rootX] &= this.weights[rootY] & weight
                this.rank[rootX]++
            }
        } else {
            this.weights[rootX] &= weight
        }
    }

    minimumCostOfWalk(x: number, y: number): number {
        if (x === y) return 0
        if (this.find(x) !== this.find(y)) return -1
        return this.weights[this.find(x)]
    }
}

function minimumCost(n: number, edges: number[][], query: number[][]): number[] {
    const dsu = new DSU(n)

    for (const [u, v, w] of edges) {
        dsu.union(u, v, w)
    }

    return query.map(([s, t]) => dsu.minimumCostOfWalk(s, t))
}
