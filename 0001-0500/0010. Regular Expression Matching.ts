// Solution by Sergey Leschev
// 10. Regular Expression Matching
// 2D DP

function isMatch(s: string, p: string): boolean {
    if (s === null || p === null) {
        return false
    }

    const dp: boolean[][] = []
    for (let i = 0; i <= s.length; i++) {
        dp.push(new Array(p.length + 1).fill(false))
    }

    dp[0][0] = true

    for (let i = 0; i < p.length; i++) {
        if (p[i] === '*' && dp[0][i - 1]) {
            dp[0][i + 1] = true
        }
    }

    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < p.length; j++) {
            if (p[j] === '.' || p[j] === s[i]) {
                dp[i + 1][j + 1] = dp[i][j]
            } else if (p[j] === '*') {
                if (p[j - 1] !== s[i] && p[j - 1] !== '.') {
                    dp[i + 1][j + 1] = dp[i + 1][j - 1]
                } else {
                    dp[i + 1][j + 1] = dp[i + 1][j] || dp[i][j + 1] || dp[i + 1][j - 1]
                }
            }
        }
    }

    return dp[s.length][p.length]
}
