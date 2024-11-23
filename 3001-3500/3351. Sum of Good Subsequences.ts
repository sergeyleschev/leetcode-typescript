// Solution by Sergey Leschev
// 3351. Sum of Good Subsequences
// DP

function sumOfGoodSubsequences(nums: number[]): number {
    const MOD = 1000000007

    const count: Map<number, number> = new Map()
    const sum: Map<number, number> = new Map()

    for (const num of nums) {
        const cntPrev = count.get(num - 1) || 0
        const cntCurr = count.get(num) || 0
        const cntNext = count.get(num + 1) || 0

        const sumPrev = sum.get(num - 1) || 0
        const sumCurr = sum.get(num) || 0
        const sumNext = sum.get(num + 1) || 0

        count.set(num, (cntPrev + cntNext + cntCurr + 1) % MOD)

        const newSum = (sumPrev + sumNext + sumCurr + num * (cntPrev + cntNext + 1)) % MOD
        sum.set(num, newSum)
    }

    let result = 0
    for (const value of sum.values()) {
        result = (result + value) % MOD
    }

    return result
}
