// Solution by Sergey Leschev
// 2461. Maximum Sum of Distinct Subarrays With Length K

// Map

function maximumSubarraySum(nums: number[], k: number): number {
    let maxSum = 0
    let currentSum = 0 // To track the sum of the current window
    const freqMap = new Map<number, number>() // To track frequency of elements in the current window

    for (let i = 0; i < nums.length; i++) {
        // Add the current element to the frequency map
        freqMap.set(nums[i], (freqMap.get(nums[i]) || 0) + 1)
        currentSum += nums[i] // Add the current element to the current sum

        // If the window size exceeds k, shrink it from the left
        if (i >= k) {
            const leftElement = nums[i - k]
            currentSum -= leftElement // Remove the leftmost element from the current sum
            freqMap.set(leftElement, freqMap.get(leftElement)! - 1)

            // Remove the leftmost element from the map if its frequency is 0
            if (freqMap.get(leftElement) === 0) {
                freqMap.delete(leftElement)
            }
        }

        if (freqMap.size === k) {
            maxSum = Math.max(maxSum, currentSum)
        }
    }

    return maxSum
}
