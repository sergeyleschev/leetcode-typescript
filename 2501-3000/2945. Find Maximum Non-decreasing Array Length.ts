// Solution by Sergey Leschev
// 2945. Find Maximum Non-decreasing Array Length

// Time Complexity: O(N log N)
// Space Complexity: O(N)

function findMaximumLength(nums: number[]): number {
    const n: number = nums.length
    const pre: number[] = new Array(n + 2).fill(0)
    const dp: number[] = new Array(n + 1).fill(0)
    const acc: number[] = new Array(n + 1).fill(0)

    for (let i = 1; i <= n; i++) {
        acc[i] = acc[i - 1] + nums[i - 1]
    }

    let i = 0
    for (let j = 1; j <= n; j++) {
        i = Math.max(i, pre[j]) // if this was previously optimized.
        dp[j] = dp[i] + 1
        const k = lowerBound(acc, 2 * acc[j] - acc[i])
        pre[k] = j
    }

    return dp[n]
}

function lowerBound(array: number[], target: number): number {
    let left = 0
    let right = array.length

    while (left < right) {
        const mid = left + Math.floor((right - left) / 2)
        if (array[mid] < target) {
            left = mid + 1
        } else {
            right = mid
        }
    }

    return left
}
