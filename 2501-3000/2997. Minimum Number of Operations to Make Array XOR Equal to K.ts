// Solution by Sergey Leschev
// 2997. Minimum Number of Operations to Make Array XOR Equal to K

// Time Complexity: O(logn)
// Space Complexity: O(1)

function minOperations(nums: number[], k: number): number {
    let xorResult = 0
    for (const num of nums) {
        xorResult ^= num
    }
    return popcount(xorResult ^ k)
}

function popcount(x: number): number {
    let count = 0
    while (x > 0) {
        count += x & 1
        x >>= 1
    }
    return count
}
