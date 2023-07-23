// Solution by Sergey Leschev

// 1. Two Sum
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Example 3:
// Input: nums = [3,3], target = 6
// Output: [0,1]

// Constraints:
// 2 <= nums.length <= 10^3
// -10^9 <= nums[i] <= 10^9
// -10^9 <= target <= 10^9
// Only one valid answer exists.

// - Parameters:
//   - nums: Array of integers
//   - target: Specific target
//
// - Returns: Indices of the two numbers

function twoSum(nums: number[], target: number): number[] {
    let indices: { [key: string]: number } = {}
    let response: number[] = []

    for (let [index, num] of nums.entries()) {
        const difference = target - num

        if (indices[difference] !== undefined) {
            response = [index, indices[difference]!]
        } else {
            indices[num] = index
        }
    }

    return response
}
