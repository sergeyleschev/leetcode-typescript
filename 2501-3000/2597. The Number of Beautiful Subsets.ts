// Solution by Sergey Leschev
// 2597. The Number of Beautiful Subsets

// Time Complexity: O(n log ⁡n)
// Space Complexity: O(n + k)

function beautifulSubsets(nums: number[], k: number): number {
    let count = 0
    const n = nums.length

    // There are 2^n subsets
    const totalSubsets = 1 << n

    for (let subsetMask = 1; subsetMask < totalSubsets; subsetMask++) {
        let isBeautiful = true
        const subset: number[] = []

        // Create subset based on subsetMask
        for (let i = 0; i < n; i++) {
            if (subsetMask & (1 << i)) {
                subset.push(nums[i])
            }
        }

        // Check if the subset is beautiful
        for (let i = 0; i < subset.length; i++) {
            for (let j = i + 1; j < subset.length; j++) {
                if (Math.abs(subset[i] - subset[j]) === k) {
                    isBeautiful = false
                    break
                }
            }
            if (!isBeautiful) {
                break
            }
        }

        if (isBeautiful) {
            count++
        }
    }

    return count
}
