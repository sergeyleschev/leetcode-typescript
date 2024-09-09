// Solution by Sergey Leschev
// 2499. Minimum Total Cost to Make Arrays Unequal

function minimumTotalCost(nums1: number[], nums2: number[]): number {
    const n = nums1.length
    let ans = 0
    const freq: { [key: number]: number } = {}
    let maxFrequency = 0
    let maxFrequencyValue = 0
    let toSwap = 0

    for (let i = 0; i < n; i++) {
        if (nums1[i] === nums2[i]) {
            freq[nums1[i]] = (freq[nums1[i]] || 0) + 1
            if (freq[nums1[i]] > maxFrequency) {
                maxFrequencyValue = nums1[i]
            }
            maxFrequency = Math.max(maxFrequency, freq[nums1[i]])
            toSwap += 1
            ans += i
        }
    }

    for (let i = 0; i < n; i++) {
        if (maxFrequency > toSwap / 2 && nums1[i] !== nums2[i] && nums1[i] !== maxFrequencyValue && nums2[i] !== maxFrequencyValue) {
            ans += i
            toSwap += 1
        }
    }

    if (maxFrequency > toSwap / 2) {
        return -1
    }

    return ans
}
