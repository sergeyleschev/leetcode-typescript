// Solution by Sergey Leschev
// 2835. Minimum Operations to Form Subsequence With Target Sum

function minOperations(nums: number[], target: number): number {
    nums.sort((a, b) => b - a) // Sort in descending order
    let operations = 0
    let totalSum = nums.reduce((sum, num) => sum + num, 0)
    let remainingTarget = target // Create a mutable variable for the remaining target

    if (totalSum < target) {
        return -1
    }

    while (totalSum > remainingTarget) {
        const a = nums.shift()! // Remove the first element
        if (totalSum - a >= remainingTarget) {
            totalSum -= a
        } else if (a <= remainingTarget) {
            totalSum -= a
            remainingTarget -= a
        } else {
            const halfA = a / 2
            nums.push(halfA, halfA)
            nums.sort((a, b) => b - a) // Re-sort after adding two halves
            operations++
        }
    }

    return operations
}
