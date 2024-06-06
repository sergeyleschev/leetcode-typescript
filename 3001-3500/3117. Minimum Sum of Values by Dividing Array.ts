// Solution by Sergey Leschev
// 3117. Minimum Sum of Values by Dividing Array

function minimumValueSum(nums: number[], andValues: number[]): number {
    const n = nums.length
    const m = andValues.length

    const memo: { [key: string]: number } = {}

    function dp(i: number, j: number, mask: number): number {
        const key = `${i},${j},${mask}`
        if (key in memo) return memo[key]

        if (i === n && j === m) return 0
        if (i === n || j === m) return Infinity

        let newMask = mask & nums[i]
        if (mask === -1) newMask = nums[i]

        if (newMask < andValues[j]) return (memo[key] = Infinity)

        if (newMask === andValues[j]) {
            return (memo[key] = Math.min(dp(i + 1, j, newMask), nums[i] + dp(i + 1, j + 1, -1)))
        }

        return (memo[key] = dp(i + 1, j, newMask))
    }

    const ans = dp(0, 0, -1)
    return ans === Infinity ? -1 : ans
}
