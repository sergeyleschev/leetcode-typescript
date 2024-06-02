// Solution by Sergey Leschev
// 3098. Find the Sum of Subsequence Powers

function sumOfPowers(nums: number[], k: number): number {
    const n = nums.length
    const MOD = 10 ** 9 + 7
    let dp: { [key: string]: number } = {}

    function solve(idx: number, last: number, need: number, valid: number, diff: number): number {
        if (n - idx < need) return 0
        if (need === 0) return valid
        if (idx >= n) return 0

        const key = `${idx},${last},${valid},${need}`
        if (key in dp) return dp[key]

        let ans = 0
        ans += solve(idx + 1, last, need, valid, diff)
        if (last === -1) {
            ans += solve(idx + 1, idx, need - 1, valid, diff)
        } else if (nums[idx] - nums[last] === diff) {
            ans += solve(idx + 1, idx, need - 1, 1, diff)
        } else if (nums[idx] - nums[last] > diff) {
            ans += solve(idx + 1, idx, need - 1, valid, diff)
        }

        dp[key] = ans % MOD
        return dp[key]
    }

    nums.sort((a, b) => a - b)
    let ans = 0
    const seenDiffs = new Set<number>()

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            const diff = nums[j] - nums[i]
            if (seenDiffs.has(diff)) continue
            seenDiffs.add(diff)
            dp = {}
            const c = solve(0, -1, k, 0, diff)
            ans = (ans + diff * c) % MOD
        }
    }

    return ans
}
