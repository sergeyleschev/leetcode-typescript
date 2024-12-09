// Solution by Sergey Leschev
// 3152. Special Array II

// Time Complexity: O(N)
// Space Complexity: O(N)

function isArraySpecial(nums: number[], queries: number[][]): boolean[] {
    const result: boolean[] = []
    const converted: number[] = [0]

    for (let i = 1; i < nums.length; i++) {
        converted.push(converted[i - 1] + (nums[i] % 2 === nums[i - 1] % 2 ? 1 : 0))
    }

    for (const [from, to] of queries) {
        result.push(converted[from] === converted[to])
    }

    return result
}
