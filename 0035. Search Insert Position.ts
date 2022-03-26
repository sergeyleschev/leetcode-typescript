// Solution @ Sergey Leschev, Belarusian State University

// 35. Search Insert Position
// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
// You must write an algorithm with O(log n) runtime complexity.

// Search insert position.

// - Parameters:
//   - nums: A sorted array.
//   - target: A target value.
// - Returns: The index of the target if exists, or the index where it would be if it
//   were inserted in order.

// Example 1:
// Input: nums = [1,3,5,6], target = 5
// Output: 2

// Example 2:
// Input: nums = [1,3,5,6], target = 2
// Output: 1

// Example 3:
// Input: nums = [1,3,5,6], target = 7
// Output: 4

// Example 4:
// Input: nums = [1,3,5,6], target = 0
// Output: 0

// Example 5:
// Input: nums = [1], target = 0
// Output: 0
     
// Constraints:
// 1 <= nums.length <= 10^4
// -10^4 <= nums[i] <= 10^4
// nums contains distinct values sorted in ascending order.
// -10^4 <= target <= 10^4

function searchInsert(nums: number[], target: number): number {
  let min = 0
  let max = nums.length - 1

  while (true) {
    const middle = Math.floor((min + max) / 2)
    const num = nums[middle]

    if (max - min <= 1) {
      if (target <= nums[min]) {
        return min
      } else if (target <= nums[max]) {
        return max
      } else {
        return max + 1
      }
    }

    if (num > target) {
      max = middle
    } else if (num < target) {
      min = middle
    } else {
      return middle
    }
  }
}