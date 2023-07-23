// Solution by Sergey Leschev

// 228. Summary Ranges
// You are given a sorted unique integer array nums.
// Return the smallest sorted list of ranges that cover all the numbers in the array exactly. That is, each element of nums is covered by exactly one of the ranges, and there is no integer x such that x is in one of the ranges but not in nums.
// Each range [a,b] in the list should be output as:
// "a->b" if a != b
// "a" if a == b

// Finds the smallest sorted list of ranges that cover all the numbers in the array exactly.

// - Parameter nums: A sorted unique integer array.
// - Returns: The smallest sorted list of ranges.

// Example 1:
// Input: nums = [0,1,2,4,5,7]
// Output: ["0->2","4->5","7"]
// Explanation: The ranges are:
// [0,2] --> "0->2"
// [4,5] --> "4->5"
// [7,7] --> "7"

// Example 2:
// Input: nums = [0,2,3,4,6,8,9]
// Output: ["0","2->4","6","8->9"]
// Explanation: The ranges are:
// [0,0] --> "0"
// [2,4] --> "2->4"
// [6,6] --> "6"
// [8,9] --> "8->9"

// Example 3:
// Input: nums = []
// Output: []

// Example 4:
// Input: nums = [-1]
// Output: ["-1"]

// Example 5:
// Input: nums = [0]
// Output: ["0"]

// Constraints:
// 0 <= nums.length <= 20
// -2^31 <= nums[i] <= 2^31 - 1
// All the values of nums are unique.
// nums is sorted in ascending order.

function summaryRanges(nums: number[]): string[] {
    let result = []

    for (let i = 0; i < nums.length; i += 1) {
        if (nums[i] + 1 === nums[i + 1]) {
            let lastIndex = i + 1

            for (let j = i + 1; j < nums.length; j += 1) {
                if (nums[j] + 1 !== nums[j + 1]) {
                    lastIndex = j
                    result.push(`${nums[i]}->${nums[lastIndex]}`)
                    break
                }
            }

            i = lastIndex
        } else {
            result.push(String(nums[i]))
        }
    }

    return result
}
