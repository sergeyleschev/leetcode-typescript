// Solution by Sergey Leschev
// 2963. Count the Number of Good Partitions

// Time complexity: O(N)
// Space complexity: O(N)

function numberOfGoodPartitions(nums: number[]): number {
    const mod: number = 1000000007
    const last: Map<number, number> = new Map()

    for (let i = 0; i < nums.length; i++) {
        last.set(nums[i], i)
    }

    let res: number = 1
    let j: number = 0

    for (let i = 0; i < nums.length; i++) {
        res = i > j ? (res * 2) % mod : res
        j = Math.max(j, last.get(nums[i])!)
    }

    return res
}
