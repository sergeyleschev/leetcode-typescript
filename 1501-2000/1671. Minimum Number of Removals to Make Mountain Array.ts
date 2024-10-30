// Solution by Sergey Leschev
// 1671. Minimum Number of Removals to Make Mountain Array

function minimumMountainRemovals(nums: number[]): number {
    const N = nums.length

    // Function to compute Longest Increasing Subsequence (LIS) using binary search
    function LIS(arr: number[]): number[] {
        const dp = Array(N).fill(1)
        const s = [arr[0]]

        for (let i = 1; i < N; i++) {
            let idx = binarySearchLeft(s, arr[i])
            if (idx === s.length) {
                s.push(arr[i])
            } else {
                s[idx] = arr[i]
            }
            dp[i] = idx + 1
        }

        return dp
    }

    // Helper function for binary search (leftmost insertion point)
    function binarySearchLeft(arr: number[], target: number): number {
        let low = 0,
            high = arr.length
        while (low < high) {
            const mid = Math.floor((low + high) / 2)
            if (arr[mid] < target) {
                low = mid + 1
            } else {
                high = mid
            }
        }
        return low
    }

    const leftLIS = LIS(nums)
    const rightLIS = LIS(nums.slice().reverse()).reverse()

    let maxMountainLength = 0
    for (let i = 1; i < N - 1; i++) {
        if (leftLIS[i] > 1 && rightLIS[i] > 1) {
            maxMountainLength = Math.max(maxMountainLength, leftLIS[i] + rightLIS[i] - 1)
        }
    }

    return N - maxMountainLength
}
