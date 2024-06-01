// Solution by Sergey Leschev
// 3003. Maximize the Number of Partitions After Operations
// DP

function maxPartitionsAfterOperations(s: string, k: number): number {
    const memo: Map<string, number> = new Map()

    function dp(index: number, currentSet: number, canChange: boolean): number {
        if (index === s.length) {
            return 0
        }

        const key = `${index},${currentSet},${canChange}`
        if (memo.has(key)) {
            return memo.get(key)!
        }

        const charIndex = s.charCodeAt(index) - 97 // 'a' is 97
        const currentSetUpdated = currentSet | (1 << charIndex)
        const distinctCount = bitCount(currentSetUpdated)

        let res: number
        if (distinctCount > k) {
            res = 1 + dp(index + 1, 1 << charIndex, canChange)
        } else {
            res = dp(index + 1, currentSetUpdated, canChange)
        }

        if (canChange) {
            for (let newCharIndex = 0; newCharIndex < 26; newCharIndex++) {
                const newSet = currentSet | (1 << newCharIndex)
                const newDistinctCount = bitCount(newSet)

                if (newDistinctCount > k) {
                    res = Math.max(res, 1 + dp(index + 1, 1 << newCharIndex, false))
                } else {
                    res = Math.max(res, dp(index + 1, newSet, false))
                }
            }
        }

        memo.set(key, res)
        return res
    }

    function bitCount(n: number): number {
        let count = 0
        while (n) {
            count += n & 1
            n >>= 1
        }
        return count
    }

    return dp(0, 0, true) + 1
}
