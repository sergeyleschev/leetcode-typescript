// Solution by Sergey Leschev
// 862. Shortest Subarray with Sum at Least K

// Time Complexity: O(N)
// Space Complexity: O(N)

function shortestSubarray(nums: number[], k: number): number {
    const n = nums.length
    const prefixSum = new Array(n + 1).fill(0)

    // Build the prefix sum array
    for (let i = 0; i < n; i++) {
        prefixSum[i + 1] = prefixSum[i] + nums[i]
    }

    let result = n + 1 // Initialize the result to an impossible value
    const deque: number[] = [] // Monotonic deque to store indices

    for (let i = 0; i <= n; i++) {
        // Check if the current subarray sum is at least k
        while (deque.length > 0 && prefixSum[i] - prefixSum[deque[0]] >= k) {
            result = Math.min(result, i - deque.shift()!)
        }

        // Maintain the monotonic property of the deque
        while (deque.length > 0 && prefixSum[i] <= prefixSum[deque[deque.length - 1]]) {
            deque.pop()
        }

        // Add the current index to the deque
        deque.push(i)
    }

    return result <= n ? result : -1
}
