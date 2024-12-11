// Solution by Sergey Leschev
// 2779. Maximum Beauty of an Array After Applying Operation

// Time complexity: O(n log n) for sorting the array.
// Space complexity: O(1) as no extra space is required.

function maximumBeauty(nums: number[], k: number): number {
    // Sort the array to simplify the process of finding valid subsequences
    nums.sort((a, b) => a - b)

    let start = 0 // Pointer for the start of the valid window
    let maxBeauty = 0 // Variable to store the maximum beauty (length of longest subsequence)

    for (let i = 0; i < nums.length; i++) {
        // Ensure the window [start...i] is valid by adjusting the start pointer
        while (nums[i] - nums[start] > 2 * k) {
            start++
        }
        // Update the maximum beauty with the current window size
        maxBeauty = Math.max(maxBeauty, i - start + 1)
    }

    return maxBeauty
}
