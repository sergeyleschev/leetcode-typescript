// Solution by Sergey Leschev
// 2862. Maximum Element-Sum of a Complete Subset of Indices

// Intuition
// A set of numbers is considered complete if the product of every pair of its elements is a perfect square.
// In this problem, we are given an array of integers and are tasked with finding the maximum possible sum of elements in a complete subset of indices.

// Approach
// To tackle this problem, we start by determining the "key" for each index in the array.
// This key is found by iteratively dividing the index by all possible square numbers until we can no longer do so.
// For example, the key of index 1 is 1, the key of index 18 is 2, and the key of index 24 is 6. In a complete set, all indices share the same key.

// We maintain a dictionary count to keep track of the sum of elements associated with each key.
// For each index i in the array, we find its key x, accumulate A[i] to count[x], and update our result res as the maximum between its current value and count[x].
// Finally, we return res as our result, which represents the maximum possible sum of a complete subset of indices in the given array.

// By using this approach, we can efficiently determine the maximum element-sum for a complete subset of indices,
// ensuring the product of their elements is always a perfect square.

// Time complexity: O(n)
// Space complexity: O(n)
// The process to determine each key has a time complexity of O(sqrt(n)).
// However, by precalculating all the keys, the final solution becomes O(n).
// In fact, the complexity can be simplified to O(n) due to the sum of a convergent series (1 + 1/4 + 1/9 + ...).

function maximumSum(nums: number[]): number {
    const count: { [key: number]: number } = {}

    for (let i = 0; i < nums.length; i++) {
        let x = i + 1
        let v = 2
        while (v * v <= x) {
            while (x % (v * v) === 0) {
                x /= v * v
            }
            v++
        }

        if (count[x] !== undefined) {
            count[x] += nums[i]
        } else {
            count[x] = nums[i]
        }
    }

    let res = 0
    for (const value of Object.values(count)) {
        res = Math.max(res, value)
    }

    return res
}
