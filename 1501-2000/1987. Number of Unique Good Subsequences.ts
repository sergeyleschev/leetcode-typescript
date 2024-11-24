// Solution by Sergey Leschev
// 1987. Number of Unique Good Subsequences

// DP
// Time Complexity: O(n)
// Space Complexity: O(1)

function numberOfUniqueGoodSubsequences(binary: string): number {
    const mod = 1e9 + 7
    let dp0 = 0,
        dp1 = 0 // dp[0] and dp[1] in the original code
    let hasZero = false // To track if there's at least one '0' in the binary string

    for (const c of binary) {
        if (c === '0') {
            hasZero = true
            dp0 = (dp0 + dp1) % mod
        } else if (c === '1') {
            dp1 = (dp0 + dp1 + 1) % mod
        }
    }

    // Add 1 if there's at least one '0' to account for the subsequence "0"
    return (dp0 + dp1 + (hasZero ? 1 : 0)) % mod
}
