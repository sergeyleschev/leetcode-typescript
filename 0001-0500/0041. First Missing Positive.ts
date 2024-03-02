// Solution by Sergey Leschev
// 41. First Missing Positive

function firstMissingPositive(nums: number[]): number {
    nums.push(0)
    const n = nums.length

    // Delete those useless elements
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < 0 || nums[i] >= n) {
            nums[i] = 0
        }
    }

    // Use the index as the hash to record the frequency of each number
    for (let i = 0; i < nums.length; i++) {
        nums[nums[i] % n] += n
    }

    // Find the first missing positive
    for (let i = 1; i < nums.length; i++) {
        if (Math.floor(nums[i] / n) === 0) {
            return i
        }
    }

    return n
}
