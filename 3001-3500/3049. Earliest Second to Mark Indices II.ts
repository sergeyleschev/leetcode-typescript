// Solution by Sergey Leschev
// 3049. Earliest Second to Mark Indices II

function earliestSecondToMarkIndices(nums: number[], changeIndices: number[]): number {
    const firsts: { [key: number]: number } = {}
    for (let i = 0; i < changeIndices.length; i++) {
        const b = changeIndices[i]
        if (nums[b - 1] && !(b in firsts)) {
            firsts[b] = i
        }
    }

    const firsts_inv: { [key: number]: number } = {}
    for (const [b, i] of Object.entries(firsts)) {
        firsts_inv[i] = parseInt(b)
    }

    function possible(bound: number): boolean {
        // Is changeIndices[:bound] enough to clear nums?
        const pq: number[] = []
        let mark = 0

        for (let i = bound - 1; i >= 0; i--) {
            if (i in firsts_inv) {
                pq.push(nums[firsts_inv[i] - 1])

                if (mark) {
                    mark -= 1
                } else {
                    mark += 1
                    pq.sort((a, b) => a - b)
                    pq.shift()
                }
            } else {
                mark += 1
            }
        }

        return nums.reduce((acc, curr) => acc + curr, 0) - pq.reduce((acc, curr) => acc + curr, 0) + nums.length - pq.length <= mark
    }

    let lo = 0
    let hi = changeIndices.length + 1
    while (lo < hi) {
        const mi = (lo + hi) >> 1
        if (!possible(mi)) {
            lo = mi + 1
        } else {
            hi = mi
        }
    }

    return lo <= changeIndices.length ? lo : -1
}
