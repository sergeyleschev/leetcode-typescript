// Solution by Sergey Leschev
// 2552. Count Increasing Quadruplets

// Time complexity: O(n^2)
// Space complexity: O(n)

function countQuadruplets(nums: number[]): number {
    const n = nums.length
    const cnt: number[] = new Array(n).fill(0)
    let ans = 0

    for (let j = 0; j < n; j++) {
        let prevSmall = 0

        for (let i = 0; i < j; i++) {
            if (nums[j] > nums[i]) {
                prevSmall += 1
                ans += cnt[i]
            } else if (nums[j] < nums[i]) {
                cnt[i] += prevSmall
            }
        }
    }

    return ans
}
