// Solution by Sergey Leschev

// 414. Third Maximum Number
// Given integer array nums, return the third maximum number in this array. If the third maximum does not exist, return the maximum number.

// Finds the third maximum number in the given array. If it does not exist, finds the maximum number.

// - Parameter nums: A non-empty array of integers.
// - Returns: The third maximum number in the given array, if it does not exist, returns the maximum number.

// Example 1:
// Input: nums = [3,2,1]
// Output: 1
// Explanation: The third maximum is 1.

// Example 2:
// Input: nums = [1,2]
// Output: 2
// Explanation: The third maximum does not exist, so the maximum (2) is returned instead.

// Example 3:
// Input: nums = [2,2,3,1]
// Output: 1
// Explanation: Note that the third maximum here means the third maximum distinct number.
// Both numbers with value 2 are both considered as second maximum.

// Constraints:
// 1 <= nums.length <= 10^4
// -2^31 <= nums[i] <= 2^31 - 1

// Follow up: Can you find an O(n) solution?

function thirdMax(nums: number[]): number {
    const set = Array.from(new Set(nums)).sort((a, b) => b - a)

    if (set.length < 3) {
        return set.shift()
    }
    return set[Math.min(2)]
}
