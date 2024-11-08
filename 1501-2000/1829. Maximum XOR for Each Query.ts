// Solution by Sergey Leschev
// 1829. Maximum XOR for Each Query

function getMaximumXor(nums: number[], maximumBit: number): number[] {
    const maxK = (1 << maximumBit) - 1

    let totalXor = nums.reduce((acc, num) => acc ^ num, 0)

    const answer: number[] = []

    for (let i = nums.length - 1; i >= 0; i--) {
        answer.push(totalXor ^ maxK)
        totalXor ^= nums[i]
    }

    return answer
}
