// Solution by Sergey Leschev
// 1574. Shortest Subarray to be Removed to Make Array Sorted

// Time: O(N)
// Space: O(1)

function findLengthOfShortestSubarray(arr: number[]): number {
    const n = arr.length
    let left = 0
    let right = n - 1

    // Find the longest non-decreasing prefix
    while (left + 1 < n && arr[left] <= arr[left + 1]) {
        left++
    }
    // If the entire array is non-decreasing, no need to remove anything
    if (left === n - 1) return 0

    // Find the longest non-decreasing suffix
    while (right > left && arr[right - 1] <= arr[right]) {
        right--
    }

    // Initialize the minimum length to remove as either removing the suffix or prefix
    let minRemoveLength = Math.min(n - left - 1, right)

    // Try to merge the prefix and suffix
    let i = 0
    let j = right
    while (i <= left && j < n) {
        if (arr[i] <= arr[j]) {
            minRemoveLength = Math.min(minRemoveLength, j - i - 1)
            i++
        } else {
            j++
        }
    }

    return minRemoveLength
}
