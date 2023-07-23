// Solution by Sergey Leschev

// 349. Intersection of Two Arrays
// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.

// Computes the intersection of two arrays.
// - Parameters:
//   - nums1: An array of integers.
//   - nums2: An array of integers.
// - Returns: Intersection of two arrays.

// Example 1:
// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]

// Example 2:
// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [9,4]
// Explanation: [4,9] is also accepted.

// Constraints:
// 1 <= nums1.length, nums2.length <= 1000
// 0 <= nums1[i], nums2[i] <= 1000

function getUniqItems(arr: number[]) {
    return Array.from(new Set(arr))
}

function intersection(nums1: number[], nums2: number[]): number[] {
    const uniqNum1 = getUniqItems(nums1)
    const uniqNum2 = getUniqItems(nums2)

    return uniqNum1.filter(num => uniqNum2.includes(num))
}
