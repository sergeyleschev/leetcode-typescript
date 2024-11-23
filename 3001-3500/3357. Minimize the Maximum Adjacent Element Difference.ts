// Solution by Sergey Leschev
// 3357. Minimize the Maximum Adjacent Element Difference
// Binary Search

function checkDifference(nums: number[], x: number, y: number, d: number): boolean {
    let prev = 0
    let count = 0

    for (let i = 0; i < nums.length; ++i) {
        if (nums[i] === -1) {
            if (prev && Math.min(Math.abs(prev - x), Math.abs(prev - y)) > d) {
                return false
            }
            count++
        } else {
            if (count) {
                const diff = prev
                    ? Math.min(Math.max(Math.abs(prev - x), Math.abs(nums[i] - x)), Math.max(Math.abs(prev - y), Math.abs(nums[i] - y)))
                    : Math.min(Math.abs(nums[i] - x), Math.abs(nums[i] - y))

                if (diff > d && (count === 1 || y - x > d)) {
                    return false
                }
            }
            prev = nums[i]
            count = 0
        }
    }
    return true
}

function minDifference(nums: number[]): number {
    let maxGap = 0
    let minVal = Number.MAX_SAFE_INTEGER
    let maxVal = 0

    for (let i = 0; i + 1 < nums.length; ++i) {
        if (Math.min(nums[i], nums[i + 1]) === -1 && Math.max(nums[i], nums[i + 1]) !== -1) {
            minVal = Math.min(minVal, Math.max(nums[i], nums[i + 1]))
            maxVal = Math.max(maxVal, Math.max(nums[i], nums[i + 1]))
        } else if (nums[i] !== -1 && nums[i + 1] !== -1) {
            maxGap = Math.max(maxGap, Math.abs(nums[i] - nums[i + 1]))
        }
    }

    let left = maxGap
    let right = Math.ceil((maxVal - minVal + 1) / 2)

    while (left < right) {
        const d = Math.floor((left + right) / 2)
        if (checkDifference(nums, minVal + d, maxVal - d, d)) {
            right = d
        } else {
            left = d + 1
        }
    }

    return left
}
