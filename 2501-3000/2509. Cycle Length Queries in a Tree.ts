// Solution by Sergey Leschev
// 2509. Cycle Length Queries in a Tree

function cycleLengthQueries(n: number, queries: number[][]): number[] {
    const ans: number[] = []
    for (const q of queries) {
        let [u, v] = q
        let count = 0
        while (u !== v) {
            if (u > v) {
                u = Math.floor(u / 2)
            } else {
                v = Math.floor(v / 2)
            }
            count += 1
        }
        ans.push(count + 1)
    }
    return ans
}
