// Solution by Sergey Leschev
// 2659. Make Array Empty

function countOperationsToEmptyArray(nums: number[]): number {
    const sortedIndex: number[] = nums.map((num, index) => index).sort((a, b) => nums[a] - nums[b])
    let operations: number = 0
    let current: number = 0
    let currentLoopSubtract: number = 0
    let loopedSubtract: number = 0

    for (const index of sortedIndex) {
        if (current <= index) {
            operations += index - current + 1
            current = index + 1
            currentLoopSubtract += 1
        } else {
            operations += index + (nums.length - current) + 1
            current = index + 1
            operations -= loopedSubtract
            loopedSubtract += currentLoopSubtract
            currentLoopSubtract = 1
        }
    }

    operations -= current - currentLoopSubtract
    return operations
}
