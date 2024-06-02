// Solution by Sergey Leschev
// 3077. Maximum Strength of K Disjoint Subarrays

function maximumStrength(nums: number[], k: number): number {
    const n = nums.length
    const dp: number[][] = Array.from({ length: k + 1 }, () => Array(n + 1).fill(0))

    for (let i = 1; i <= k; i++) {
        let maxsum = -Infinity
        let curr = -Infinity
        let multiplier = i % 2 === 1 ? k + 1 - i : i - 1 - k

        for (let j = i - 1; j < n; j++) {
            curr = Math.max(curr + nums[j] * multiplier, dp[i - 1][j] + nums[j] * multiplier)
            maxsum = Math.max(maxsum, curr)
            dp[i][j + 1] = maxsum
        }
    }

    return dp[k][n]
}
