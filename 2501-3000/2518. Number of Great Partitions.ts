// Solution by Sergey Leschev
// 2518. Number of Great Partitions

function countPartitions(nums: number[], k: number): number {
    const mod = 1000000007
    let total = 0
    let res = 1
    const dp: number[] = new Array(k).fill(0)
    dp[0] = 1

    for (const a of nums) {
        for (let i = k - 1 - a; i >= 0; i--) {
            dp[i + a] = (dp[i + a] + dp[i]) % mod
        }

        res = (res * 2) % mod
        total += a
    }

    for (let i = 0; i < k; i++) {
        if (total - i < k) {
            res -= dp[i]
        } else {
            res -= (dp[i] * 2) % mod
        }
    }

    return ((res % mod) + mod) % mod
}
