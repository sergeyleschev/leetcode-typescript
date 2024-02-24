// Solution by Sergey Leschev
// 2902. Count of Sub-Multisets With Bounded Sum
// Dynamic Programming

// Time complexity: O(r * min(n, sqrt(sum(nums))), where n = len(nums)
// Space complexity: O(r + min(n, sqrt(sum(nums)))

const MOD: number = 1000000007

function countSubMultisets(nums: number[], l: number, r: number): number {
    const numsMap: Map<number, number> = new Map()
    for (const num of nums) {
        numsMap.set(num, (numsMap.get(num) || 0) + 1)
    }

    const cache: number[] = Array(r + 1).fill(0)
    cache[0] = 1

    for (const [num, freq] of [...numsMap.entries()].sort((a, b) => a[0] - b[0])) {
        const pSum: number[] = [...cache]

        for (let i = 0; i <= r; i++) {
            if (i >= num) {
                pSum[i] = (pSum[i] + pSum[i - num]) % MOD
            }
        }

        for (let i = r; i >= 0; i--) {
            if (num > 0) {
                const j = i - (freq + 1) * num
                cache[i] = (pSum[i] - (j >= 0 ? pSum[j] : 0)) % MOD
                cache[i] = (cache[i] + MOD) % MOD
            } else {
                cache[i] = (cache[i] * (freq + 1)) % MOD
            }
        }
    }

    let res: number = 0
    for (let i = l; i <= r; i++) {
        res = (res + cache[i]) % MOD
    }
    return res
}
