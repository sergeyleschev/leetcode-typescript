// Solution by Sergey Leschev
// 2563. Count the Number of Fair Pairs

function countLess(nums: number[], val: number): number {
    let res = 0
    let j = nums.length - 1

    for (let i = 0; i < j; i++) {
        while (i < j && nums[i] + nums[j] > val) {
            j--
        }
        res += j - i
    }

    return res
}

function countFairPairs(nums: number[], lower: number, upper: number): number {
    nums.sort((a, b) => a - b) // Sort the array for two-pointer technique
    return countLess(nums, upper) - countLess(nums, lower - 1)
}
