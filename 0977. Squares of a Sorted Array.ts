// Solution @ Sergey Leschev, Belarusian State University

// 977. Squares of a Sorted Array
// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

// Returns an array of the squares of each number from the given array, in sorted non-decreasing order.

// - Parameter A: An array of integers sorted in non-decreasing order.
// - Returns: An array of squares.

// Example 1:
// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].

// Example 2:
// Input: nums = [-7,-3,2,3,11]
// Output: [4,9,9,49,121]

// Constraints:
// 1 <= nums.length <= 10^4
// -10^4 <= nums[i] <= 10^4
// nums is sorted in non-decreasing order.
     
// Follow up: Squaring each element and sorting the new array is very trivial, could you find an O(n) solution using a different approach?

function sortedSquares(nums: number[]): number[] {
    return nums.map(n => n * n).sort((a, b) => a - b)
}