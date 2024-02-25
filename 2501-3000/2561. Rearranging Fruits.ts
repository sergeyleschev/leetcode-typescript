// Solution by Sergey Leschev
// 2561. Rearranging Fruits

function minCost(basket1: number[], basket2: number[]): number {
    const cnt: Map<number, number> = new Map()

    // Count occurrences of each fruit in both baskets
    for (const c of basket1) {
        cnt.set(c, (cnt.get(c) || 0) + 1)
    }
    for (const c of basket2) {
        cnt.set(c, (cnt.get(c) || 0) - 1)
    }

    const last: number[] = []

    // Populate 'last' with fruits that need to be swapped
    for (const [k, v] of cnt) {
        if (v % 2 !== 0) {
            return -1
        }
        for (let i = 0; i < Math.abs(v) / 2; i++) {
            last.push(k)
        }
    }

    // Find the minimum cost
    const minx = Math.min(Math.min(...basket1), Math.min(...basket2))
    last.sort((a, b) => a - b)
    const endIndex = Math.floor(last.length / 2)
    const sum = last.slice(0, endIndex).reduce((acc, curr) => acc + Math.min(2 * minx, curr), 0)
    return sum
}
