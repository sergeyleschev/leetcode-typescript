// Solution by Sergey Leschev
// 2585. Number of Ways to Earn Points

function waysToReachTarget(target: number, types: number[][]): number {
    const mod = 1e9 + 7
    const dp: number[] = new Array(target + 1).fill(0)
    dp[0] = 1

    for (const [count, marks] of types) {
        for (let j = target; j >= marks; j--) {
            for (let k = 1; k <= count; k++) {
                if (j - k * marks >= 0) {
                    dp[j] = (dp[j] + dp[j - k * marks]) % mod
                }
            }
        }
    }

    return dp[target]
}
