// Solution by Sergey Leschev
// 2547. Minimum Cost to Split an Array

function minCost(nums: number[], k: number): number {
    const n = nums.length
    const trimmedLen: number[][] = Array.from({ length: n }, () => Array(n).fill(0))
    const dp: number[] = Array(n).fill(-1)

    // Calculate trimmedLen
    for (let i = 0; i < n; i++) {
        let count = 0
        const mp: number[] = Array(1001).fill(0)
        for (let j = i; j < n; j++) {
            const num = nums[j]
            if (mp[num] !== 0) {
                if (mp[num] === 1) {
                    count += 2
                } else {
                    count += 1
                }
            }
            mp[num]++
            trimmedLen[i][j] = count
        }
    }

    function solve(start: number): number {
        if (start >= n) {
            return 0
        }
        if (dp[start] !== -1) {
            return dp[start]
        }

        let minAns = Number.MAX_SAFE_INTEGER
        for (let end = start; end < n; end++) {
            const curr = k + trimmedLen[start][end]
            const nextMin = solve(end + 1)
            const total = curr + nextMin
            minAns = Math.min(minAns, total)
        }
        dp[start] = minAns
        return minAns
    }

    return solve(0)
}
