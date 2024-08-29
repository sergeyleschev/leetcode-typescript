// Solution by Sergey Leschev
// 947. Most Stones Removed with Same Row or Column

function removeStones(stones: number[][]): number {
    const parent = new Map<number, number>()

    // Find function with path compression
    function find(x: number): number {
        if (!parent.has(x)) {
            parent.set(x, x)
        }
        if (parent.get(x) !== x) {
            parent.set(x, find(parent.get(x)!))
        }
        return parent.get(x)!
    }

    // Union function
    function union(x: number, y: number): void {
        const rootX = find(x)
        const rootY = find(y)
        if (rootX !== rootY) {
            parent.set(rootX, rootY)
        }
    }

    // Union all stones by row and column
    for (const [x, y] of stones) {
        union(x, ~y) // Using ~y to differentiate rows and columns
    }

    // Count unique root parents
    const uniqueParents = new Set<number>()
    for (const [x, y] of stones) {
        uniqueParents.add(find(x))
        uniqueParents.add(find(~y))
    }

    return stones.length - uniqueParents.size
}
