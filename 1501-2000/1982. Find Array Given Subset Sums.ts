// Solution by Sergey Leschev
// 1982. Find Array Given Subset Sums

function recoverArray(n: number, sums: number[]): number[] {
    const result: number[] = []
    sums.sort((a, b) => a - b)

    while (result.length < n) {
        const num = sums[sums.length - 1] - sums[sums.length - 2]
        const countMap = new Map<number, number>()
        const excluding: number[] = []
        const including: number[] = []

        for (const sum of sums) {
            countMap.set(sum, (countMap.get(sum) || 0) + 1)
        }

        for (const sum of sums) {
            if (countMap.get(sum)! > 0) {
                excluding.push(sum)
                including.push(sum + num)

                countMap.set(sum, countMap.get(sum)! - 1)
                countMap.set(sum + num, countMap.get(sum + num)! - 1)
            }
        }

        if (excluding.includes(0)) {
            sums = excluding
            result.push(num)
        } else {
            sums = including
            result.push(-num)
        }
    }

    return result
}
