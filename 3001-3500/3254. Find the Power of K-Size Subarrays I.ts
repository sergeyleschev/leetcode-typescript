// Solution by Sergey Leschev
// 3254. Find the Power of K-Size Subarrays I

// Two Pointers + Sliding Window
// Time Complexy: O(n)
// Space Complexy: O(n)

function resultsArray(nums: number[], k: number): number[] {
    const n = nums.length
    const results: number[] = []

    for (let i = 0; i <= n - k; i++) {
        const subarray = nums.slice(i, i + k)

        let isValid = true
        for (let j = 1; j < k; j++) {
            if (subarray[j] - subarray[j - 1] !== 1) {
                isValid = false
                break
            }
        }

        if (isValid) {
            results.push(Math.max(...subarray))
        } else {
            results.push(-1)
        }
    }

    return results
}
