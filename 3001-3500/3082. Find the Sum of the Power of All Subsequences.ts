// Solution by Sergey Leschev
// 3082. Find the Sum of the Power of All Subsequences
// Bottom-Up

function sumOfPower(nums: number[], k: number): number {
    const MOD = 1000000007
    const dp = new Array(k + 1).fill(0)
    dp[0] = 1

    for (const n of nums) {
        for (let sum = k; sum >= 0; sum--) {
            dp[sum] = (2 * dp[sum] + (sum >= n ? dp[sum - n] : 0)) % MOD
        }
    }

    return dp[k]
}
