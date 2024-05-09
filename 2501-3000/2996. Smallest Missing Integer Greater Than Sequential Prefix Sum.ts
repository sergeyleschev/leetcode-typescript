// Solution by Sergey Leschev
// 2996. Smallest Missing Integer Greater Than Sequential Prefix Sum

// Time complexity: O(N * log(N))
// Space complexity: O(1)

function missingInteger(nums: number[]): number {
    let countSum = nums[0]
    const sortedNums = [...nums]
    sortedNums.sort((a, b) => a - b)

    for (let i = 1; i < nums.length; i++) {
        if (nums[i - 1] + 1 === nums[i]) {
            countSum += nums[i]
        } else {
            break
        }
    }

    for (let i = 0; i < sortedNums.length; i++) {
        if (countSum === sortedNums[i]) {
            countSum += 1
        }
    }

    return countSum
}
